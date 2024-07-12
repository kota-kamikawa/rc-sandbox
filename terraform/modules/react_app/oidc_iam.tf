# IAMポリシードキュメントの作成
data "aws_iam_policy_document" "oidc_policy_document" {
  # S3バケット用
  statement {
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListBucket"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}",
      "arn:aws:s3:::${var.bucket_name}/*"
    ]
  }
}

# IAMポリシーの作成
module "oidc_iam_policy" {
  source = "terraform-aws-modules/iam/aws//modules/iam-policy"
  name   = "oidc-policy-${var.github_owner}-${var.github_repo}"
  path   = "/"
  policy = data.aws_iam_policy_document.oidc_policy_document.json
}

# IAMロールの作成
# https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-assumable-role-with-oidc
module "oidc_iam_role" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role-with-oidc"
  version = "5.30.0"

  create_role  = true
  role_name    = "oidc-iam-role"
  provider_url = "https://token.actions.githubusercontent.com"
  oidc_subjects_with_wildcards = [
    "repo:${var.github_owner}/${var.github_repo}:*",
  ]

  role_policy_arns = [
    module.oidc_iam_policy.arn
  ]
}
