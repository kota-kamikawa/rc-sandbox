terraform {
  backend "s3" {
    bucket         = "my-unique-tfstate-bucket"
    key            = "path/to/my/key"
    region         = "ap-northeast-1"
    dynamodb_table = "my-unique-tfstate-locks"
    encrypt        = true
    profile        = "rc-sandbox"
  }
}
