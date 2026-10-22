# Bhavesh Kumar — NFC Digital Contact UI

A responsive, editorial portfolio-style NFC contact page with an image-led “MINDING THE MIND” cover, a “Making ideas real” tagline, a scroll-to-contact section, theme toggle, contact links, profile sharing, and a downloadable vCard.

## Project files
- `index.html` — page structure and profile details
- `styles.css` — editorial layout, responsive breakpoints, light/dark themes
- `script.js` — theme toggle, `.vcf` generation, share button
- `assets/minding-the-mind-transparent.png` — transparent cover used in light theme
- `assets/Minding the Mind Portfolio Cover.png` — source cover used to create the transparent hero artwork

## Preview locally
From this folder, run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages
1. Create a repository such as `bhavesh-nfc-card`.
2. Upload the contents of this folder to the repository root. Keep the `assets` folder.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Open the published HTTPS URL on a phone and test all links and the Save Contact button.

## Program your NFC tag
1. Use the full public HTTPS URL after the site is deployed.
2. Open an NFC writing app such as NFC Tools and select **Write → Add a record → URL/URI**.
3. Enter the website URL and write it to the NFC tag.
4. Test the tag on a second phone if possible. The tag opens the site; the visitor taps Save contact to download the `.vcf`.

## Profile details included
- Bhavesh Kumar — Computer Science Undergraduate
- Phone: +91 93284 05647
- Email: bavesh2006kumar@gmail.com
- GitHub: https://github.com/Sam-bot-dev
- LinkedIn: https://www.linkedin.com/in/l-bhavesh
- Gandhinagar, Gujarat, India

No backend is required. The vCard is generated locally in the browser. The page uses Google Fonts when internet access is available.
