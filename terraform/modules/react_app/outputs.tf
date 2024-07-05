output "cloudfront_url" {
  value = aws_cloudfront_distribution.react_app.domain_name
}
