# Yearly Support Site

This is the support website for [Yearly](https://apps.apple.com/us/app/read-the-bible-in-one-year/id1329417324), a Bible reading app for iOS.

## About

This is the support and landing page for Yearly, an iOS app that helps users read through the entire Bible in one year with daily reading plans, progress tracking, and helpful notes.

## Tech Stack

- **Jekyll** - Static site generator with data files
- **GitHub Pages** - Hosting
- **Pure CSS** - No frameworks, custom styling with CSS variables

## Features

- 📱 Responsive design with light/dark mode support
- ❓ FAQ system powered by Jekyll data files
- 📄 Privacy Policy and Terms of Service pages
- 💬 Contact support information
- 🎨 Clean, centered layout with gradient accents
- ⚡ Server-side rendering for fast page loads and better SEO

## Local Development

### Prerequisites

- Ruby 3.0+
- Bundler

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yearly-support.git
cd yearly-support
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000`


## Updating Content

### Adding/Editing FAQ Items

Edit the `_data/faq.json` file. Each FAQ item has the following structure:

```json
{
  "id": "unique-id",
  "question": "Your question here?",
  "answer": "Your answer here. Supports [markdown links](https://example.com)."
}
```

Jekyll will automatically rebuild the FAQ page when you commit changes. The FAQ is rendered server-side for better performance and SEO.

### Styling

All styles are in `styles.css` with CSS variables for easy theming:
- Colors adapt automatically to light/dark mode
- Modify CSS variables in `:root` and `@media (prefers-color-scheme: dark)`

## Deployment

This site is automatically deployed via GitHub Pages when changes are pushed to the main branch. No build step required - GitHub Pages runs Jekyll automatically.

## Color Scheme

The site uses CSS variables for consistent theming:
- **Light mode**: Blue gradient (#526396 → #566a9a)
- **Dark mode**: Lighter blue gradient (#a0b3e3 → #798cc7)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about Yearly or this support site:
- Email: martyn.chamberlin@hey.com
- App Store: [Yearly on the App Store](https://apps.apple.com/us/app/read-the-bible-in-one-year/id1329417324)

---

Made with ❤️ for the Yearly community

