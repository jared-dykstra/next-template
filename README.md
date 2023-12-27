This is a [Next.js](https://nextjs.org/) project:

- bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- using Volta to manage NodeJS and pnpm versions
- configured for VSCode & format-on-save
  - with Prettier
  - with esLint
- using MaterialUI and emotion for styling
- including a stub API route
- including a stub NodeJS utility

## Getting Started

First, install Volta and enable pnpm support via `VOLTA_FEATURE_PNPM=1`

Second, install dependencies: `pnpm install`

Third, run the development server:

```bash
pnpm dev
```

Open:

- [http://localhost:3000](http://localhost:3000) with your browser to see the create-next-app placeholder
- [http://localhost:3000/test](http://localhost:3000/test) for a stateful client-side component using MUI
- [http://localhost:3000/api/hello](http://localhost:3000/api/hello) for a REST API placeholder

Run `pnpm run util` to execute `src/util` nodeJS placeholder
