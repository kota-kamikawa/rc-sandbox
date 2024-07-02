variable "region" {
  description = "The AWS region to create resources in."
  default     = "us-west-2"
}

variable "bucket_name" {
  description = "The name of the S3 bucket."
  type        = string
}

variable "cloudfront_comment" {
  description = "Comment for the CloudFront distribution."
  type        = string
  default     = "CloudFront distribution for React app"
}

variable "access_key" {
  description = "AWS access key"
  type        = string
  sensitive   = true
}

variable "secret_key" {
  description = "AWS secret key"
  type        = string
  sensitive   = true
}
