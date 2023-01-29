#!/usr/bin/env bash

TF_ENV=$1

if [ $# -gt 0 ]; then
    terraform init -reconfigure -backend-config "./configurations/backend-$TF_ENV.tf"
    terraform apply -var-file="./configurations/$TF_ENV.tfvars"
fi
