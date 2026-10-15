import "server-only";
import sanitize from "sanitize-html";

// Rich-text HTML from the admin editor (blog bodies, subcategory content) is cleaned on the
// server before rendering, so a stored <script>/onerror payload can never run on the site.
const OPTIONS = {
  allowedTags: sanitize.defaults.allowedTags.concat([
    "img", "h1", "h2", "span", "u", "s", "del", "ins", "figure", "figcaption", "iframe", "video", "source",
  ]),
  allowedAttributes: {
    "*": ["class", "style", "id", "title", "align"],
    a: ["href", "name", "target", "rel"],
    img: ["src", "srcset", "alt", "width", "height", "loading"],
    iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder"],
    video: ["src", "controls", "width", "height", "poster"],
    source: ["src", "type"],
    td: ["colspan", "rowspan"],
    th: ["colspan", "rowspan"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https", "data"] },
  // Only video embeds from these hosts
  allowedIframeHostnames: ["www.youtube.com", "youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
  transformTags: {
    // Links that open a new tab must not get access to window.opener
    a: (tagName, attribs) =>
      attribs.target === "_blank"
        ? { tagName, attribs: { ...attribs, rel: "noopener noreferrer" } }
        : { tagName, attribs },
  },
};

export default function sanitizeHtml(html) {
  if (!html || typeof html !== "string") return "";
  return sanitize(html, OPTIONS);
}
