variable "region" {
  description = "The AWS region to create resources in."
  default     = "ap-northeast-1"
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

variable "tfstate_bucket_name" {
  description = "The name of the S3 bucket for tfstate."
  type        = string
}

variable "dynamodb_table_name" {
  description = "The name of the DynamoDB table for state locking."
  type        = string
}
