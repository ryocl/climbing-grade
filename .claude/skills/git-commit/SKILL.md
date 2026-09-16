---
name: git-commit
description: Create a git commit in this repository. This repo is public, so commit messages must not include a "Claude-Session" link trailer.
---

# Git commit in this repo

This repository (`github.com/ryocl/climbing-grade`) is public. Follow the
normal git commit workflow (review `git status`/`git diff`/`git log`, stage
relevant files, write a concise message explaining the "why"), but with one
change to the trailer:

- Do **not** add a `Claude-Session: https://claude.ai/code/...` line. That
  link points at this session's transcript; keeping it out of commit
  messages avoids exposing the session URL in public history.
- Still keep the `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
  line.

Example trailer for this repo:

```
Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```
