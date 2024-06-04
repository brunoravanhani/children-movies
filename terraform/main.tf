provider "aws" {
  region = "us-east-1"
}

module "create_certificate" {
  source = "./modules/create-certificate"

  domain_name = "children.ravanhani.com"
  zone_id = "Z09807341PC7B6V9I5HGC"

  tags = {
    Terraform   = "true"
    Context     = "ravanhani-site"
    App     = "children-movies"
  }
}

module "website_s3_bucket" {
  source = "./modules/static-s3-cloudfront"

  bucket_name = "children-movies"
  region = "us-east-1"
  oac_name = "children-movies-oac"
  alias_name = "children.ravanhani.com"
  acm_certificate_arn = module.create_certificate.certificate_arn
  tags = {
    Terraform   = "true"
    Context     = "ravanhani-site"
    App     = "children-movies"
  }
}

module "website_s3_bucket_upload" {
  depends_on = [ module.website_s3_bucket ]

  source = "./modules/aws-upload-site-s3"

  bucket_name = "children-movies"
  path = var.content_path
}
