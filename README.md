# 1. What is App Versioning?
<br>
App Versioning is the process of assigning unique version numbers to different states of your software application.
Think of it like giving a name to each "edition" or "release" of your app.
<br>
A simple analogy is a book:
Title: My Awesome App (stays the same)
Edition/Version: 1st Edition, 2nd Edition, Revised 3rd Edition (changes with updates).
<br>
<br>
The version number itself is often a string of numbers, like 1.2.4 or 2.0.1.
<br>
<br>
<br>

# 2. What is the Purpose of Versioning?
<br>
Versioning is critical for several reasons:

##### Communication:
  It tells users and developers exactly what state the software is in.
	A jump from 1.4.5 to 2.0.0 signals a major, potentially breaking change.

##### Update Management:
  App stores (Google Play, Apple App Store) and users rely on version numbers to know
	if an update is available. Your phone says "Update available for App X (v2.1.0)" because
	it knows you have v2.0.5.

##### Bug Tracking:
  When a user reports a bug,
	they can tell you the version number.
	You know exactly which codebase to look at to reproduce and fix the issue.

##### Dependency Management:
  If your app uses other libraries, those libraries have versions.
	Versioning ensures you use a compatible version of a library.

##### Release & Rollback:
  If a new version (1.5.0) has a critical bug, you can quickly roll back to
	the stable previous version (1.4.5).
<br>
<br>
<br>

# 3. How Should I Change the Version? (The Versioning Scheme)

The most widely adopted system is Semantic Versioning (SemVer).
It's a simple set of rules that dictates how version numbers are assigned and incremented.
<br>
A version number is formatted as MAJOR.MINOR.PATCH (e.g., 2.1.3).

##### MAJOR Version (X.0.0):
	You increment this when you make incompatible API changes.
	This is a big release that might break existing functionality for users.
	Example: You completely redesign your app's database, and old data formats are no longer supported.

##### MINOR Version (0.Y.0):
	You increment this when you add new functionality in a backward-compatible manner. 
	This is a feature release.
	Example: You add a dark mode or a new settings screen without changing how existing features work.

##### PATCH Version (0.0.Z):
  You increment this when you make backward-compatible bug fixes.
	This is a maintenance release.
	Example: You fix a crash that happened when typing in a text field.
<br>
<br>
<br>

## Pre-release and Build Metadata:
<br>
You can also append labels for pre-releases:
<br>
1.0.0-alpha (very early, unstable)
1.0.0-beta (feature complete, testing with users)
1.0.0-rc.1 (release candidate, potentially the final version)
<br>
<br>
<br>

## Summary of How to Change It:
<br>
Found a bug and fixed it? →<br>
	Increment the PATCH version. (1.2.3 → 1.2.4)
<br>
Added a cool new feature without breaking old ones? →<br>
	Increment the MINOR version and reset PATCH to 0. (1.2.4 → 1.3.0)
<br>
Made a big change that might break things for existing users? →<br>
	Increment the MAJOR version and reset MINOR and PATCH to 0. (1.3.0 → 2.0.0)
