# LaunchPilot Resource Inventory

Status as of this inventory. Only items marked Complete are ready to deliver.

| # | Resource | File | Status | Notes |
|---|----------|------|--------|-------|
| 1 | 30-Day Digital Business Action Planner | `resources/01-30-day-action-planner.md` | Complete (text) | Planning tool, not a success guarantee. Not yet formatted as a designed PDF. |
| 2 | Landing Page Builder Prompt Kit | `resources/02-landing-page-builder-prompt-kit.md` | Complete (text) | 13 prompts plus checklists. Requires customer's own product details. |
| 3 | AI Business Coach Prompt Kit | `resources/03-ai-business-coach-prompt-kit.md` | Complete (text), labelled prompt-based | Not a live chatbot. Not an automated service. |
| 4 | Meta Ads Launch Kit | `resources/04-meta-ads-launch-kit.md` | Complete (text) | Meta policies and menu names must be re-verified against Meta's current documentation before release. |
| 5 | 1,000+ Idea Library framework | `resources/05-idea-library-framework.md` and `resources/idea-library-template.csv` | Framework only | 0 of 1,000 ideas written or verified. Do not claim 1,000+ ideas. |

## Not yet built

- Ideas library content (0 of 1,000 entries).
- AI Prompt Collection (0 prompts written; no count may be advertised).
- Designed PDFs for the planner and kits.
- Branding and social media asset set (logo, Instagram and Facebook templates, ad layouts).
- Checkout and digital delivery (no payment integration exists in the project).
- Automated tests, browser screenshots, and responsive testing across the requested widths.

## Landing page

The "Your Complete Digital Business Toolkit" section shows each bonus with a status badge controlled in `src/config/siteConfig.ts`:

| Bonus | Badge shown | Source file | Card contents verified against file |
|-------|-------------|-------------|-------------------------------------|
| 1. AI Business Coach Prompt Kit | Included: prompt kit | `03-ai-business-coach-prompt-kit.md` | Profile sheet, 8 prompts, scoring table: yes |
| 2. Landing Page Builder Prompt Kit | Included | `02-landing-page-builder-prompt-kit.md` | 13 prompts, planning worksheet, go-live checklist: yes |
| 3. Meta Ads Launch Kit | Included | `04-meta-ads-launch-kit.md` | Account checklist, metrics table, campaign and compliance worksheets: yes |
| 4. 30-Day Action Planner | Included | `01-30-day-action-planner.md` | Weekly milestones, daily tasks, tracker and reviews: yes |
| 5. AI Prompt Collection | In development | Not written | Card lists planned contents only |
| 6. Digital Business Ideas Library | In development | `05-idea-library-framework.md` (framework, 0 ideas) | Card lists planned contents only; no count shown |

"Included" means the text exists. Buyers cannot receive it automatically yet because payment and delivery are not built.
