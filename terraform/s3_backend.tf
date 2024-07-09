resource "aws_s3_bucket" "tfstate" {
  bucket = var.tfstate_bucket_name

  tags = {
    Name        = var.tfstate_bucket_name
    Environment = "Dev"
  }
}

resource "aws_dynamodb_table" "tfstate_locks" {
  name         = var.dynamodb_table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = var.dynamodb_table_name
    Environment = "Dev"
  }
}
