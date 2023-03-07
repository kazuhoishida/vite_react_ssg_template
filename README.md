# REACT VITE SSG TEMPLATE

This is a template for Vite SSG/pre-rendering in React.

You can pre-render the app into static HTML by running `pnpm run generate` and the generated files are organized in the following directory structure:

```
/dist
  /server
    - entry-server.js
  /static
    *.html
    /assets
      /css
        - *.css
      /js
        - *.js
      /images
        - *.{jpg,png}
```

Then you can serve the contents of the `dist/static` folder as a static site.

## Development

```
# To start development
pnpm run dev

# To pre-render
pnpm run generate
```

## Tech Stack

- React
- Vite
- Tailwind

## Note

Please note that you use this template at your own risk.