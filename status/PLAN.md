# volleytallyapp.com — plan

Updated: 2026-09-04 by Claude Code (Fable 5.1 review)

## Intentions

Follows the app. The site describes what the released VolleyTally does, links
people to the stores, and hosts the legal, help, and `/live/` share pages the
app depends on. Nothing here ships ahead of the app except legal text that
has been published on purpose for review.

## Now (current needs)

- The published 4.0 content (Live sharing in `/help/`, `/privacy/`, `/terms/`)
  is ahead of the App Store build (3.4.2 as of 2026-09-04). Step 1 closes
  that gap with a note until 4.0 is live; step 4 finishes the story when it is.
- Full findings: `status/REVIEW_2026-09-04.md`.

## Next (in order)

1. **Mark the Live content as 4.0** (S). Files: `help/index.html`,
   `privacy/index.html` ("Live broadcast and watch"), `terms/index.html`
   ("Live broadcasts"). Add one line: "Live sharing is available starting with
   VolleyTally 4.0." Acceptance: each Live section carries the note; the note
   is removed in step 4. Needs Jason's answer to review question 1 first
   (recommended: yes).
2. **Clean the Primary checkout and add `.gitignore`** (S). Commands on the
   Primary: `rm -rf drafts .DS_Store` (drafts were published in `15e0723`),
   keep `.codex/config.toml` but ignore it. New file `.gitignore` with
   `.DS_Store`, `.codex/`, `drafts/`. Update `status/CURRENT.md` so it no
   longer says "three dirty files". Acceptance: `git status --short` is empty
   on the Primary after the PR merges.
3. **Home page hygiene** (S). File: `index.html`. Point the nav Help item at
   `help/`; add `terms/` to the footer; change OG and Twitter descriptions to
   "iPhone, iPad, and Android"; add `loading="lazy"` plus `width`/`height`
   to the three phone screenshots. Files: `sitemap.xml` (add `/help/`),
   `help/index.html` (use the shared footer "VolleyTally is a HarpElle LLC
   product."). Acceptance: every page reaches `/terms/` and `/help/` in two
   clicks or fewer; sitemap validates; no em-dashes in rendered copy.
4. **4.0 home page refresh, gated on 4.0 live in both stores** (M). Files:
   `index.html` (Live sharing feature block and FAQ entry, JSON-LD adds
   Google Play `downloadUrl`), `help/saved-matches-and-sharing/index.html`
   (explain `/live/` links), `assets/images/*` (screenshots from the 4.0
   build, OG image), remove the step 1 note. Trigger: iTunes lookup for
   id6743733066 reports 4.x and the Play listing shows 4.x. Acceptance:
   every feature claim on the home page exists in the store build; `curl -s
   'https://itunes.apple.com/lookup?id=6743733066' | jq .results[0].version`
   starts with 4.
5. **Image pipeline** (S). Files: `assets/images/score-every-rally.png`,
   `match-history.png`, `share-the-final.png`. Export ~660 px wide WebP with
   PNG fallback (`sips -Z 660` or `cwebp -q 82`), reference via `<picture>`
   or `srcset`; delete the unused `fix-a-stray-tap.png` or put it in the
   "Keep rallies moving" block. Acceptance: home page image transfer under
   600 KB (check in DevTools Network on a cold load). Do this with step 4 if
   step 4 is close, so screenshots are only captured once.
6. **Self-host Roboto Mono and fix the code-box font** (S). Files:
   `tokens/fonts.css` (replace the Google Fonts `@import` with local
   `@font-face`, copy the woff2 from the harpelle.com site repo),
   `live/index.html` and `watch/index.html` (`.watch-code` font stack to
   `var(--font-numeral)`). Acceptance: zero requests to third-party hosts on
   any page; the match code renders in Roboto Mono on `/live/?c=ABC123`.
7. **Decide analytics** (S). If no: remove `data-track` attributes from
   `index.html` and step 5 from `README.md`. If yes: reuse the harpelle.com
   counter, add a line to `/privacy/`. Acceptance: README, markup, and privacy
   policy agree. Needs Jason's answer to review question 2 (recommended: no).
8. **Flip `/watch/` to PHASE 2 when VolleyTally 4.0 with the `/watch/*` link
   claim is in both stores** (S). File: `watch/index.html` (`PHASE = 2`),
   plus `.well-known/apple-app-site-association` gains `/watch/*` only if the
   app actually claims it. Acceptance: `/watch/?c=TEST1` shows "Open in
   VolleyTally" first and "Open in VolleyTrack" second; VolleyTrack links
   still resolve. Needs Jason's answer to review question 3.

## Later (not scheduled)

- OG tags for `/privacy/` and `/terms/` so shared legal links get a preview.
- A `docs/PAGE_TEMPLATE.md` checklist (header, footer, canonical, OG, help
  nav) since partials are hand-copied across 18 pages.
- Optional: turn off CodeQL default setup for this static repo if the weekly
  runs become noise.

## How this plan is maintained

Any agent may reorder Next or add to Later with a `LOG.md` entry. Intentions
change only with Jason. Items move from Later to Next when they have a
trigger (a date, a shipped dependency, or a decision) written next to them.
