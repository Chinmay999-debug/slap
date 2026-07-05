# Slap From Simran 💥 — Static Version

A single-file static version of the app, ready for **GitHub Pages**.

## File structure

```
your-repo/
└── index.html
```

That's it. One file. No build, no dependencies.

## How to host on GitHub Pages

1. Create a new GitHub repository (e.g. `slap-from-simran`).
2. Upload `index.html` to the **root** of the repo (drag & drop in the GitHub UI works).
3. Go to **Settings → Pages**.
4. Under **Source**, pick **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Wait ~1 minute. Your site will be live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

## Notes

- This is a standalone HTML file — it does **not** use the TanStack Start project in this workspace. GitHub Pages only serves static files, so the SSR project can't run there directly.
- If you want the exact same look as the Lovable preview, this file already mirrors the design and animations.
- To use a custom domain, add a `CNAME` file with your domain name and configure DNS at your registrar.
