# VolleyTally standalone site

Static marketing and support site for `volleytallyapp.com`.

## Guardrails

- This repository is independent of `HarpElleSites/HarpElle`; do not redirect, edit, or remove the existing `harpelle.com/volleytally/*` pages from work here.
- VolleyTally is live on iOS and Android. The verified Google Play URL is `https://play.google.com/store/apps/details?id=com.HarpElle.volleytally`.
- Claims must remain aligned with the released VolleyTally app and its privacy review.

## GitHub Pages launch checklist

1. Create the `HarpElle/volleytallyapp.com` GitHub repository and set its Pages source to the `main` branch root.
2. Add the repository remote, commit and push this project, then set the custom domain to `volleytallyapp.com`. The `CNAME` file is included.
3. In the active DNS provider, point the apex and `www` hostnames at GitHub Pages and ensure `www` redirects to `https://volleytallyapp.com`.
4. Wait for GitHub Pages HTTPS status, then validate canonicals, sitemap, robots, store links, support mail, and the VolleyTrack link.
5. Submit the canonical sitemap to Search Console and configure analytics/events for App Store CTA, Help navigation, support-mail, and VolleyTrack referral clicks.

## Design source of truth

The implementation follows the owner-supplied VolleyApp Claude Design handoff at `/Volumes/HarpElle/ClaudeDesignHandoffs/VolleyApp-Sites/VolleyApp-Sites-Implementation-Spec.md`. Reconcile any future visual work against that specification before deployment.
