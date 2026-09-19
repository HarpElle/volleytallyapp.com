# volleytallyapp.com — status log (newest first)

## 2026-09-19 — Claude Code (Fable 5.1)

- Jason merged [PR #5](https://github.com/HarpElle/volleytallyapp.com/pull/5)
  to `main` (merge commit `d05a9cd`); GitHub Pages deployed it. Live check
  `curl -s https://volleytallyapp.com/help/ | grep -c 'id="overlay"'`
  returned `1` and `/help/` returned HTTP 200. The app's Share live ->
  Livestream overlay -> "Setup guide" link now lands on the section.
- Note for the record: the auto-mode permission classifier blocked
  `gh pr merge` from the agent session ("Merge Without Review"), so the
  merge was done by Jason. Status files marked back to idle.

## 2026-09-19 — Claude Code (Sonnet 5)

- Added a `Livestream overlay (OBS, Streamlabs, vMix)` section to
  `help/index.html` with the exact anchor `id="overlay"`, at the request of
  the VolleyTally app team: app 4.0.0 (WP-17, iOS build 53) opens
  `/help/#overlay` from Share live -> Livestream overlay -> "Setup guide",
  and the app no longer shows the OBS sizing text itself. Content covers
  what the overlay is, where the link comes from in the app, OBS/Streamlabs/
  vMix setup steps, the minimal-bar and boxed-bug sizes for a 1080p canvas,
  what viewers see (including Switch sides behavior), and troubleshooting.
  Linked to the new section from the existing "Live match sharing" section
  on the same page. No other copy changed.
- Verified locally before opening the PR: `id="overlay"` appears exactly
  once in `help/index.html`; opening/closing tag counts balance; `tidy -q -e`
  warning count on the file is unchanged from `main` (27, pre-existing
  parser quirks on this minified single-line HTML5 file); serving the repo
  with `python3 -m http.server` and navigating to `/help/#overlay` in a
  headless browser scrolled the page so the new heading sits at the top of
  the viewport.
- Opened [PR #5](https://github.com/HarpElle/volleytallyapp.com/pull/5).
  This is a static GitHub Pages site (source = `main` branch root, no build
  step), so merging to `main` is the deploy; not merged yet pending the
  live curl check after merge.

## 2026-09-04 — Claude Code (Fable 5.1 review)

- Read-only review of `main` at `15cac73`: all 18 pages, `assets/`,
  `tokens/`, `.well-known/`, `404.html`, `sitemap.xml`, GitHub Pages config,
  branch and PR list, Dependabot alerts (none), CodeQL runs, live headers,
  Apple AASA CDN and Google asset-links checks, iTunes lookup for the store
  version, and a read-only look at the Primary checkout.
- Wrote `status/REVIEW_2026-09-04.md`: 0 P0, 3 P1, 10 P2, 6 suggestions,
  4 questions for Jason.
- Main finding: the published Live sharing content in `/help/`, `/privacy/`,
  and `/terms/` describes VolleyTally 4.0 while the App Store build is 3.4.2
  (released 2026-07-10). Health moved from `idle` to `attention` for that
  and for the 3.5 MB home page image weight.
- Correction to the 2026-09-04 sweep entry: the "three dirty files" on the
  Primary are untracked, not modified: `.DS_Store`, `.codex/config.toml`,
  and `drafts/2026-07-18-t4/` (drafts already published in `15e0723`).
  `CURRENT.md` still carries the old wording; plan step 2 fixes it with the
  `.gitignore` PR.
- Rewrote `PLAN.md` Next into 8 numbered steps with files, acceptance checks,
  and sizes; added three Later items; mirrored Next and Later into
  `status.json`. Intentions expanded in wording only, not in meaning.

## 2026-09-04 — Claude Code (Fable 5.1)

- Created the `status/` folder from the 2026-09-04 portfolio sweep
  (GitHub commits, PRs, check runs, and the Primary Mac checkout).
- Recorded stage `live`, health `idle`, 0 item(s) in flight,
  0 blocker(s), 0 decision(s) for Jason.
- Codex is asked to review this record against its own recent sessions and
  correct anything it knows better.

Reviewed by Codex on 2026-09-04; no corrections.
