module "react_app" {
  source             = "./modules/react_app"
  bucket_name        = var.bucket_name
  region             = var.region
  cloudfront_comment = var.cloudfront_comment
}
