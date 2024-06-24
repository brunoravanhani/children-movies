provider "aws" {
  region = "us-east-1"
}

locals {
  domain_name = "children.ravanhani.com"
}

module "create_certificate" {
  source = "./modules/create-certificate"

  domain_name = local.domain_name
  zone_id = var.zone_id

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
  alias_name = local.domain_name
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

resource "aws_route53_record" "A_dist_record" {
  zone_id = var.zone_id
  name    = local.domain_name
  type    = "A"

  alias {
    name                   = local.domain_name
    zone_id                = module.website_s3_bucket.distribution_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "AAAA_dist_record" {
  zone_id = var.zone_id
  name    = local.domain_name
  type    = "AAAA"

  alias {
    name                   = local.domain_name
    zone_id                = module.website_s3_bucket.distribution_zone_id
    evaluate_target_health = true
  }
}
