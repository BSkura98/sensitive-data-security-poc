terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }

  backend "s3" {
    region = "us-east-1"
    key    = "terraform.tfstate"
  }
}

provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["~/.aws/credentials"]

  default_tags {
    tags = {
      Project     = var.project
      Environment = var.env
    }
  }
}

module "s3" {
  source = "./modules/s3"

  env = var.env
  project = var.project
}

module "cognito" {
  source = "./modules/cognito"

  env = var.env
  project = var.project
}
