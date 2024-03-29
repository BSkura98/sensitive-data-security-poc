locals {
  tags = {
    Project     = var.project
    Environment = var.env
  }
}

resource "aws_s3_bucket" "test-bucket" {
  bucket = "sensitive-data-security-${var.env}-test-bucket"

  tags = merge(
    local.tags,
    {
      Name = "Test bucket ${var.env}"
    }
  )
}