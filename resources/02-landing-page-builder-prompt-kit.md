# LaunchPilot Landing Page Builder Prompt Kit

Use this kit to build your own product landing page with an AI tool (or with a developer). It walks you from business idea to landing page copy, responsive website, checkout configuration, and quality checks.

Rules that apply to every prompt in this kit:

- Describe only what your product actually includes. Do not invent testimonials, customer numbers, income results, or discounts.
- Do not add fake countdown timers or fake scarcity.
- Do not put private payment keys or passwords into the website code. Only publicly safe values belong in the front end.
- Confirm payments and delivery with a secure server-side step before you tell a buyer their order is complete.

## Part A: Understand the business (answer before you prompt)

Fill these in first. The prompts below depend on these answers.

| Question | Your answer |
|----------|-------------|
| What is the product? (for example, an eBook, template pack, course, or service) | |
| What exactly is included? (list every deliverable) | |
| Who is the customer? (one sentence) | |
| What problem does the customer have, in their own words? | |
| What do they do today to solve it? | |
| What is the price, and is it one-time or recurring? | |
| What is the refund policy? | |
| What support will the customer get, and how? | |
| What brand colours, fonts, and tone should the page use? | |
| Which checkout provider will you use, and is it approved for your country and product? | |

## Prompt 1: Understand the product and audience

```
You are helping me plan a landing page. Here is my product and audience:
[paste your Part A answers]

Summarise the product, the target customer, and the customer's main problem in plain language.
List any gaps or unclear points I should answer before writing the page.
Do not invent facts, results, or testimonials.
```

## Prompt 2: Define the genuine value proposition

```
Using my answers, write:
1. The customer's problem in one sentence.
2. What my product helps them do, in one sentence.
3. Three concrete benefits, each tied to a specific deliverable I listed.
4. One honest sentence about who this product is NOT for.

Avoid income promises, guarantees, and "get rich" language.
```

## Prompt 3: Write the hero headline and supporting copy

```
Write the top section of my landing page:
- A headline of no more than 12 words that states the customer's problem or desired outcome.
- A supporting paragraph of 2 to 3 sentences that explains what the product is and what is included.
- A primary button label (2 to 5 words, for example "Get the eBook").
- One short line under the button about what happens next (for example, "Secure checkout, instant download").

Use plain, beginner-friendly language. Offer 3 headline options and explain the trade-offs of each.
```

## Prompt 4: Explain the deliverables clearly

```
Create a "What you get" section listing each deliverable as a bullet with:
- The item name
- What the customer will be able to do with it
- Its format (PDF, template, video, etc.)

Only list items I confirmed in Part A. If a benefit is not backed by a real deliverable, mark it "remove" and explain why.
```

## Prompt 5: Develop an ethical offer structure

```
Based on my price and deliverables, write an offer section that:
- States the price and whether it is one-time or recurring, clearly and near the button.
- Lists every bonus with what it contains. Do not assign a retail value unless I give you a verified figure.
- Explains what is NOT included.
- Describes the refund policy in plain language.

Do not add countdown timers, limited-stock claims, or discounts I have not confirmed.
```

## Prompt 6: Write objection-handling FAQ content

```
Write 6 to 8 FAQ entries answering the real questions a cautious buyer would ask, such as:
- Is this for beginners?
- How long will it take me to read or use this?
- What if I do not have much money or time?
- Do I need prior experience with [topic]?
- How do I get my purchase?
- What is your refund policy?
- Who can I contact for help, and how fast do I usually reply?

Each answer must be factual, short (2 to 4 sentences), and must not promise results.
```

## Prompt 7: Place the calls to action

```
Suggest where the primary button should appear on the page (top hero, after the benefits, after the offer, and at the end). Keep the same wording for every button.
Explain why each placement helps a visitor decide, and do not add more than four buttons.
```

## Prompt 8: Preserve brand consistency

```
Create a brand style summary from these inputs:
- Primary colour and its hex code: ______
- Secondary and accent colours: ______
- Heading font and body font: ______
- Logo file: ______

Use no more than 2 font families and 3 font weights. Use body line height of about 150% and heading line height of about 120%.
Keep text contrast readable on every background, including on hover and when a header changes colour.
```

## Prompt 9: Build the responsive layout

```
Build a single landing page that:
- Works without horizontal scrolling at 320, 375, 414, 768, 1024, 1280 and 1440 pixels wide.
- Stacks the hero and product image on small screens.
- Keeps the primary button visible and tappable (at least 44 pixels high) on mobile.
- Uses a consistent 8-pixel spacing scale.
- Respects the visitor's "reduce motion" setting for any animation.
```

## Prompt 10: Optimise images and fonts

```
Review my page assets and:
- Convert product images to WebP or AVIF, and size them to the largest displayed size (no larger).
- Give every image descriptive alt text.
- Load only the font weights used on the page.
- Do not lazy-load the main hero image, because it is the first thing visitors see.
- Report the file sizes before and after.
```

## Prompt 11: Configure analytics safely

```
Add analytics to the page with these rules:
- Only track events I have approved (page view, button click, checkout started, purchase completed).
- Do not collect personal data in event names or parameters.
- Show a privacy notice and follow any consent requirements for my country.
- Do not load third-party scripts that I have not listed.
```

## Prompt 12: Integrate a legitimate checkout

```
Connect the primary button to my checkout provider using these rules:
- The public key or checkout link may appear in the front end. Secret keys must never appear in front-end code.
- Payment confirmation must happen on the server, not in the browser. Do not show "payment successful" based only on a redirect.
- Show the buyer a "pending" state until the server confirms the payment.
- Deliver the product only after confirmation. Send the buyer a receipt and a delivery link.
- If payment fails or is cancelled, show a clear message and keep the cart available.

List the server steps required, and tell me which credentials I must create myself.
```

## Prompt 13: Test every important journey

```
Create a checklist to test:
1. Landing page loads on mobile and desktop with no console errors.
2. Every button goes to the correct checkout.
3. A test purchase (in the provider's test mode) completes and triggers delivery.
4. A failed or cancelled payment shows the right message.
5. The FAQ opens and closes with a keyboard.
6. The page works with reduced motion turned on.
7. The receipt and delivery email or link arrive and open correctly.
8. The refund and contact information is visible in the footer.

For each item, record: pass, fail, or not tested, with the date and the device used.
```

## Final checklist before going live

- [ ] Every claim on the page matches a real deliverable.
- [ ] No fake testimonials, numbers, timers, or discounts.
- [ ] Price, billing type, and refund policy are visible.
- [ ] Checkout is tested in test mode and in one real low-value transaction.
- [ ] Delivery works and the buyer knows where to get help.
- [ ] Privacy and terms pages exist and are linked from the footer.
- [ ] Page checked on a small phone (320 pixels) and a desktop.

## Legal and professional note

This kit gives educational guidance only. It is not legal, tax, or financial advice. Check consumer-protection, refund, privacy, and tax rules for your country with a qualified professional before you accept payments.
