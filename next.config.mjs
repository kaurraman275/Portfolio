import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "ramanpreet",
    project: "ramanpreet",
    // Disable Sentry CLI during build if no auth token is provided
    dryRun: !process.env.SENTRY_AUTH_TOKEN,
  },
  {
    widenClientFileUpload: true,

    transpileClientSDK: true,

    hideSourceMaps: true,

    disableLogger: true,

    automaticVercelMonitors: true,
  }
);
