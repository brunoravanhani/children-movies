variable "domain_name" {
  description = "domain name from cerificate"
  type        = string
  default     = {}
}

variable "zone_id" {
  description = "Zone Route53 Id"
  type        = string
  default     = {}
}

variable "tags" {
  description = "Tags to set on the resources."
  type        = map(string)
  default     = {}
}
