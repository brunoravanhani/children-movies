output "bucket_arn" {
  description = "ARN of the bucket"
  value       = aws_s3_bucket.s3_bucket.arn
}

output "bucket_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.s3_bucket.id
}

output "distribution_arn" {
  description = "ARN of the bucket"
  value       = aws_cloudfront_distribution.s3_distribution.arn
}

output "distribution_name" {
  description = "name of distribution"
  value       = aws_cloudfront_distribution.s3_distribution.name
}

output "distribution_zone_id" {
  description = "Zone id of distribution"
  value       = aws_cloudfront_distribution.s3_distribution.zone_id
}

