variable "bucket_name" {
  description = "The name of the S3 bucket."
  type        = string
}

variable "region" {
  description = "The AWS region to create resources in."
  type        = string
}

variable "cloudfront_comment" {
  description = "Comment for the CloudFront distribution."
  type        = string
}

variable "github_owner" {
  description = "github_owner"
  type        = string
}

variable "github_repo" {
  description = "github_repo"
  type        = string
}
