# Writivia

Writivia is an English-language college application essay feedback product for US high school students. The first release provides an anonymous, server-graded review, three focused grading modes, transparent privacy copy, pricing and AI-policy pages, and an original example library.

## Local development

1. Copy .env.example to .env.local and provide the required values.
2. Run pnpm install.
3. Run pnpm dev.

The grading route fails closed in production when its Cloudflare KV binding is missing. In local development only, it bypasses the external limit so UI and error states can be tested.

## Production environment

- OPENAI_API_KEY: server-only OpenAI API key.
- OPENAI_MODEL: optional; defaults to gpt-4o-mini.
- `RATE_LIMIT`: Cloudflare KV binding used for free-review reservations and paid entitlements.
- `STRIPE_SECRET_KEY`: Stripe secret key used to create the $9.90 Single Essay Checkout Session.
- `STRIPE_WEBHOOK_SECRET`: signing secret for `POST /api/stripe/webhook/`.

## Stripe launch checklist

1. Add the two Stripe secrets to the production Worker. Checkout stays disabled unless both exist.
2. Create a Stripe webhook for `https://writivia.com/api/stripe/webhook/` and subscribe to `checkout.session.completed` and `charge.refunded`.
3. Complete a test-mode payment, confirm that a second review succeeds in the same browser, then issue a test refund and confirm access is removed.
4. Switch to live keys only after the webhook succeeds in Stripe's event log.

## Search Console launch checklist

1. Verify the `writivia.com` Domain property with the DNS TXT record provided by Google Search Console.
2. Submit `https://writivia.com/sitemap.xml`.
3. Inspect `/`, `/essay-examples/`, one complete example, and one school guide after deployment.

## Domain setup

The canonical host is https://writivia.com. The worker and middleware send an explicit 301 from www.writivia.com, writivia.biz, and www.writivia.biz to the same path on the canonical host. The four hostnames still need to be attached to the production project and pointed there in DNS for these redirects to receive traffic.

## Essay example slug rules

- Standalone example slugs must not contain a school name. They live at `/essay-examples/<example-slug>/`.
- School guides use the school slug at `/essay-examples/<school-slug>/`.
- School-specific examples use `/essay-examples/<school-slug>/<example-slug>/`; the nested example slug only needs to be unique within that school.
- Before publishing, run `pnpm validate:slugs` to catch a standalone example that collides with a school guide or includes a known school slug.

## Verification

Run pnpm typecheck, pnpm build, and git diff --check before deployment.
