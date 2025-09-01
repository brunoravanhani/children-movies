variable "domain_name" {
  description = "domain name from cerificate"
  type        = string
}

variable "zone_id" {
  description = "Zone Route53 Id"
  type        = string
}

variable "tags" {
  description = "Tags to set on the resources."
  type        = map(string)
  default     = {}
}
