# Changelog

## [2.0.0-beta.0] - 2025-01-08
### Added
- Updated package to use ES Modules (module type)
- Upgraded Node version to >=22
- Fixed multiple React instance issues during development with `npm link` and `yarn link`
- Added pre-release tag for testing

### Changed
- Updated `peerDependencies` for `react@^19.0.0`
- Changed build setup to support ES module syntax

### Fixed
- Fixed issues with invalid hook calls when using `npm link` and multiple React versions
