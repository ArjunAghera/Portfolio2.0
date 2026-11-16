# Agents

## Cursor Cloud specific instructions

This is a Next.js 16 portfolio site (single frontend, no backend services or database).

### Quick Reference

- **Dev server**: `npm run dev` (serves on http://localhost:3000)
- **Build**: `npm run build`
- **Start prod**: `npm start` (requires build first)

### Known Issues

- **Lint (`npm run lint`)**: Next.js 16 removed the `next lint` CLI subcommand, and the project uses ESLint 9 with a legacy `.eslintrc.json` file. Running `npm run lint` will fail. This is a pre-existing codebase issue, not an environment problem.
- **TypeScript checking**: Use `npx tsc --noEmit` to type-check the project.

### Notes

- All data is static JSON in `/data/` — no external APIs needed at dev time.
- Images are hosted on Cloudinary; they will render as broken if the CDN is unreachable, but the app still runs fine.
- No environment variables or secrets are required.
- Node.js 18+ is required (20 LTS recommended).
