# Expo Starter

A generic mobile starter built with **Expo SDK 57, Expo Router, React Native 0.86,
NativeWind 4, TypeScript 6, pnpm, Biome, and Jest**.

## Prerequisites

- Node.js 20.19 or newer
- pnpm 11.24 or newer, enabled through Corepack: `corepack enable`

## Setup

```bash
pnpm install
cp .env.example .env
pnpm start
```

Only `EXPO_PUBLIC_*` environment variables are available to the client bundle. Never
put API secrets, private keys, or service credentials in them.

## Commands

| Command | Description |
| --- | --- |
| `pnpm start` | Start Expo development server |
| `pnpm ios` | Start Expo and open the iOS simulator |
| `pnpm android` | Start Expo and open the Android emulator |
| `pnpm web` | Start Expo for web |
| `pnpm lint` | Run Biome lint rules |
| `pnpm format` | Format files with Biome |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck` | Run TypeScript without emitting files |
| `pnpm test` | Run unit tests once |
| `pnpm test:watch` | Run Jest in watch mode |
| `pnpm check` | Run formatting, lint, types, tests, and Expo dependency validation |

## Structure

```text
src/
  app/        Expo Router routes and layouts only
  api/        Typed API request helpers
  components/ Reusable native UI components
  config/     Runtime configuration, including public environment validation
  constants/  Shared constant values
  hooks/      Reusable React hooks
  lib/        Framework-agnostic helpers
  store/      Global client state when an app needs it
  test/       Shared test setup, render helpers, mocks, fixtures, and providers only
  types/      Shared TypeScript types
assets/       Native app icons, splash assets, and imported media
```

Tests are colocated with the code they cover (for example, `src/lib/cn.ts` and
`src/lib/cn.test.ts`). Keep test files out of `src/app/`, where Expo Router treats
files as routes. Use `src/test/` only for shared test setup, render helpers, mocks,
fixtures, and providers.

Use the `@/` alias for imports from `src/`:

```ts
import { apiFetch } from '@/api/client'
import { cn } from '@/lib/cn'
```

## Tooling

Biome is the single formatter, linter, and import organizer. Install the
`biomejs.biome` VS Code extension to use the included format-on-save settings.

Expo controls versions of React, React Native, and Expo modules. Upgrade the SDK
first, then run `pnpm expo install --fix --pnpm`; do not blindly update native
dependencies to registry-latest versions.

NativeWind 4 currently uses the Tailwind CSS 3 integration. Keep Tailwind on v3
until the app intentionally migrates to a stable NativeWind release that supports
Tailwind CSS 4.

## License

MIT
