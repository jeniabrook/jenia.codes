/* -----------------------------------------------------------------------------
 * Link previews
 *
 * Telegram, WhatsApp, iMessage, Slack, LinkedIn and X all read Open Graph, and
 * every one of them requires og:image to be an ABSOLUTE url — a relative path
 * is silently dropped, which is the usual reason a preview shows text only.
 *
 * The favicon is a separate channel: scrapers take it from the page's
 * <link rel="icon">, never from og:image. Slack shows it beside the site name
 * in an unfurl, and Google Search uses it in results. Those links live in
 * root.tsx so they apply to every route.
 * -------------------------------------------------------------------------- */

export const SITE_URL = "https://jenia.codes";
export const SITE_NAME = "Jenia Brook";

const OG_IMAGE = `${SITE_URL}/og.png`;
const OG_IMAGE_ALT =
  "I have a keyboard — the word KEYBOARD spelled out in keycaps. Jenia Brook, head of frontend at Flare.";

/**
 * Canonical <link> for a route. Link tags belong to the `links` export —
 * `meta` only documents meta descriptors, and route `links` are additive
 * across matches, whereas the deepest route's `meta` replaces its parents'.
 */
export function canonical(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}

interface Seo {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for og:url and the canonical link. */
  path: string;
}

export function seo({ title, description, path }: Seo) {
  const url = `${SITE_URL}${path}`;

  return [
    { title },
    { name: "description", content: description },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: OG_IMAGE_ALT },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  ];
}
