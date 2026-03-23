# Changelog

All notable changes to this project will be documented in this file.

## 1.4.3 - 2026-03-23

### Fixed

- Track only requests started by the hook so ignored requests can no longer clear the loader while real requests are still in flight.
- Add regression coverage for ignored-request completion and tracked request cleanup.

### Changed

- Shrink the published build and clean `dist` before rebuilds so stale artifacts are not carried into releases.
- Broaden React peer compatibility to `>=16.8` and keep package resolution conservative by avoiding a new `exports` gate.
- Update CI coverage to Node `18.x`, `20.x`, `22.x`, and `24.x`.
- Refresh the README, installation examples, and logo.
