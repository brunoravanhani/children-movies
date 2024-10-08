
locals {
  content_type_map = {
   "js" = "application/javascript"
   "html" = "text/html"
   "css"  = "text/css"
   "png"  = "image/png"
   "webp"  = "image/webp"
   "ico"  = "image/ico"
   "xml"  = "text/xml"
   "svg"  = "image/svg+xml"
   "webmanifest"  = "application/manifest+json"
  }
}

resource "aws_s3_object" "upload" {
  for_each   = fileset(var.path, "**")

  bucket = var.bucket_name
  key    = each.value
  source = "${var.path}/${each.value}"
  etag   = filemd5("${var.path}/${each.value}")
  content_type = lookup(local.content_type_map, split(".", "${var.path}/${each.value}")[1], "text/html")
}
