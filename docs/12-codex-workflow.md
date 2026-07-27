# Codex Workflow

## Mandatory rule

Never ask Codex to build an entire module.

## Task cycle

1. Define one small responsibility.
2. Write expected input and output.
3. List what Codex must not change.
4. Ask Codex to inspect the repository.
5. Implement only the task.
6. Review the diff.
7. Run relevant tests.
8. Run lint and type checking.
9. Test manually.
10. Commit.

## Prompt template

```text
Read AGENTS.md and inspect the current repository.

Complete only this task:
[one small function or component]

Requirements:
- [specific behavior]
- [specific input]
- [specific output]
- [loading/error behavior]

Do not:
- implement adjacent features
- refactor unrelated files
- install unnecessary dependencies
- change existing API contracts

Verification:
- add or update relevant tests
- run lint
- run TypeScript checking
- run relevant tests
- run build if production code changed

At the end report:
1. Files changed
2. Why each file changed
3. Commands run
4. Verification results
5. Remaining issues
```

## Definition of done

- Function works
- Relevant tests pass
- Lint passes
- TypeScript passes
- Build passes
- Manual flow works
- Data flow is understood
- Git commit is created
