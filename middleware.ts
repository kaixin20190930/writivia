import { NextRequest, NextResponse } from "next/server";

const redirectHosts = new Set(["writivia.com", "writivia.biz", "www.writivia.biz"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (!host || !redirectHosts.has(host)) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = "https";
  destination.hostname = "www.writivia.com";
  destination.port = "";
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: "/:path*",
};
