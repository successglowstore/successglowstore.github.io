# Success Glow Venture

Website for **Success Glow Venture**, a one-stop brand for fragrance, fashion and everyday essentials in Uyo, Akwa Ibom State, Nigeria. Delivers worldwide.

Live site: https://successglowstore.github.io

Promise: **Quality you can trust.** Tagline: *Quality Meets Freshness.*

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `fragrance.html` | Fragrance (perfumes, body care, home and car fragrance) |
| `fashion.html` | Fashion (tops, bottoms, dresses, tote bag, custom pieces) |
| `more.html` | More (home essentials) |
| `contact.html` | About and Contact |

## Other files

- `style.css`: all styling (colors, fonts, layout)
- `app.js`: the order list (add items, change quantities, send to WhatsApp)
- `logo-dark.png`, `logo-light.png`: SGV monogram for light and dark backgrounds
- `favicon.svg`, `apple-touch-icon.png`: browser tab and home screen icons
- `home-hero.jpg`, `home-hero-mobile.jpg`, `fragrance-header.jpg`, `fashion-header.jpg`: background images (AI-generated for mood only)

## How the order list works

Each product has an "Add to order" button. Items are saved in the visitor's browser. "Send order on WhatsApp" opens a WhatsApp chat with the list and an optional note. There is no payment and no prices on the site. The owner replies with prices and a total.

## How to edit

- **WhatsApp number:** search for `2347067019699` in `app.js` and in each `.html` file.
- **Add a product:** copy one `<div class="card">...</div>` block, change the name in the heading and in `data-add="..."`.
- **Show a price:** replace `Ask for price` in the card.
- **Real product photos:** replace the icon in a card with an `<img>` tag once photos arrive.
- **Colors and fonts:** the variables at the top of `style.css`.

## Brand rules

- Colors: cream `#F6F1E9`, charcoal `#2B2B2B`, champagne gold `#C8A96A` (accents only, never text on cream), sand `#E9E0D0`
- Fonts: Cormorant Garamond (headings, large sizes only), Inter (body)
- Style: quiet luxury, lots of white space, say "fair prices", never "cheap"
- Images: AI for backgrounds and mood only. Product photos come from the owner.
- No NAFDAC or health claims until the owner confirms registration numbers.

## Still needed from the owner

- Real product photos, one by one
- NAFDAC numbers when available
- Price list (optional for now)

## Contact

- WhatsApp: https://wa.me/2347067019699
- Facebook: https://www.facebook.com/profile.php?id=61556378224722
- Email: lillysuccess469@gmail.com

Built by King Joshua with Claude. Portfolio project.
