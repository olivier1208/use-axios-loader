# Changelog

All notable changes to this project will be documented in this file.

## 1.4.5 - 2026-03-23

### Fixed

- Remove the unused lint-only dependencies that forced Node 20+ during `yarn install`, restoring CI compatibility on Node `18.x`.

### Changed

- Keep the published package focused on build, test, and runtime dependencies only.

## 1.4.4 - 2026-03-23

### Fixed

- Point the README logo at the existing `master` branch so the image no longer returns `404`.
- Keep the `test-exclude` security override on a Node 18-compatible version so the CI matrix passes on `18.x` again.

### Changed

- Prepare the repository for a fresh GitHub release after the `v1.4.3` tag-only release state.

## 1.4.3 - 2026-03-23

### Fixed

- Track only requests started by the hook so ignored requests can no longer clear the loader while real requests are still in flight.
- Add regression coverage for ignored-request completion and tracked request cleanup.

### Changed

- Shrink the published build and clean `dist` before rebuilds so stale artifacts are not carried into releases.
- Broaden React peer compatibility to `>=16.8` and keep package resolution conservative by avoiding a new `exports` gate.
- Update CI coverage to Node `18.x`, `20.x`, `22.x`, and `24.x`.
- Refresh the README, installation examples, and logo.
