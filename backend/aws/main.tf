terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["~/.aws/credentials"]
}

resource "aws_s3_bucket" "test-bucket" {
  bucket = "sensitive-data-security-dev-test-bucket"

  tags = {
    Name        = "Test bucket"
    Project     = "sensitive-data-security"
    Environment = "dev"
  }
}