import { NextResponse } from "next/server";
import { isValid } from "./apiUtils/limiter";
//overly simple in memory cache

export function middleware(request) {
  console.log("Request received");
  const url = request.nextUrl.pathname;
  if (url == "/api/hello") {
    try {
      let key = request.headers.get("x-api-key");
      isValid(key);
      return NextResponse.next();
    } catch (e) {
      console.log("error", e);
      return NextResponse.redirect(new URL("/api/error", request.url));
    }
  } else if (url == "/api/generate") {
    return NextResponse.next();
  } else if (url == "/api/error") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/api/error", request.url));
}
