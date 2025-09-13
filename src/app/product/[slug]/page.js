// app/product/[slug]/page.jsx
// This route now redirects all /product/* URLs to homepage for deindexing

import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  // Return minimal metadata for redirected pages
  return {
    title: "Page Moved | IntentWire",
    description: "This page has been moved. Redirecting...",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  
  
  // 301 redirect to homepage to help Google deindex these URLs
  redirect('/');
}
