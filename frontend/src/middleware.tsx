import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  
  if (url.pathname.startsWith("/user/") && url.pathname.endsWith("/api")) {
    const newUrl = new URL(url.href);
    newUrl.pathname = url.pathname.replace("/api", ""); // Remove `/api` part
    return NextResponse.redirect(newUrl); // Redirect to `/user/[id]`
  }

  return NextResponse.redirect(new URL('/', request.url))
}
export const config = {
    matcher: ['/user', '/loja/item', '/auth'],
  }
 
//todo mudar para que a seja redicerionado a loja se estiver no item