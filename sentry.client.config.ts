import * as Sentry from "@sentry/nextjs";

// Only initialize Sentry if DSN is available
if (process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,
    tracesSampleRate: 1,

    debug: false,

    replaysOnErrorSampleRate: 1.0,

    replaysSessionSampleRate: 0.1,

    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
  });
}
