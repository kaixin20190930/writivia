import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const redirectHosts = new Set(["www.writivia.com", "writivia.biz", "www.writivia.biz"]);

export default clerkMiddleware((_auth, request) => {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (!host || !redirectHosts.has(host)) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = "https";
  destination.hostname = "writivia.com";
  destination.port = "";
  return NextResponse.redirect(destination, 301);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};
