terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }

  backend "s3" {
    bucket = "sds-state"
    key    = "dev/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["~/.aws/credentials"]
}

locals {
  tags = {
    Project     = "sensitive-data-security"
    Environment = var.env
  }
}

resource "aws_s3_bucket" "test-bucket" {
  bucket = "sensitive-data-security-dev-test-bucket"

  tags = merge(
    local.tags,
    {
      Name = "Test bucket ${var.env}"
    }
  )
}