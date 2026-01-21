<!--
Sync Impact Report
- Version change: N/A -> 1.0.0
- Modified principles: N/A (initial creation)
- Added sections: Core Principles, Technology Stack Constraints, Development Workflow, Governance
- Removed sections: None
- Templates requiring updates:
  - aistudio/.specify/templates/plan-template.md ✅ checked
  - aistudio/.specify/templates/spec-template.md ✅ checked
  - aistudio/.specify/templates/tasks-template.md ✅ checked
- Follow-up TODOs: None
-->

# Proppi Constitution

## Core Principles

### I. Type Safety First (NON-NEGOTIABLE)
TypeScript MUST be used for all application code. Avoid `any` types unless explicitly
justified in comments. All shared data structures and APIs MUST have explicit types,
including Drizzle schemas and query results.

### II. Component Architecture Discipline
Server Components are the default. Client Components SHOULD be used only when required
for interactivity, hooks, or browser APIs. Shared UI primitives live in `components/ui/`,
while feature components live in domain folders under `components/`.

### III. Code Quality and Standards
Code MUST pass `pnpm lint` before merging. File naming MUST use kebab-case for routes
and components. Conventional Commits are REQUIRED for all commits. Formatting MUST be
consistent and free of trailing whitespace.

### IV. Database Schema Governance
All schema changes MUST be defined in `lib/db/schema.ts` and managed through Drizzle
migrations. Schema changes MUST be pushed with `pnpm db:push` before deployment.
Type-safe queries are required; raw SQL SHOULD be avoided unless fully typed.

### V. Background Processing by Design
Long-running or compute-heavy work MUST be implemented as Trigger.dev workflows in
`trigger/`. API routes SHOULD remain lightweight and delegate heavy processing to
background jobs. Background jobs MUST handle errors and expose status for user-facing
tracking.

## Technology Stack Constraints

- Routing MUST use Next.js App Router conventions under `app/`.
- Styling MUST use Tailwind CSS v4 utilities and shadcn/ui primitives.
- Authentication MUST use Better Auth; custom auth implementations are not allowed.
- AI image processing MUST integrate through Fal.ai with clear error handling.
- Background processing MUST use Trigger.dev for async workloads.

## Development Workflow

- Features SHOULD follow the speckit workflow: `/speckit.specify` -> `/speckit.plan`
  -> `/speckit.tasks` -> `/speckit.implement`.
- Database changes MUST include migration generation and review.
- Environment variables MUST be documented in `.env.example`.
- UI changes MUST include manual verification steps in PR descriptions.

## Governance

- This constitution supersedes all other project guidance.
- Amendments MUST include a version bump and an updated Sync Impact Report.
- All PRs MUST verify compliance with these principles.
- Complexity MUST be justified when simpler alternatives exist.
- Runtime development guidance lives in `AGENTS.md`.

**Version**: 1.0.0 | **Ratified**: 2026-01-21 | **Last Amended**: 2026-01-21
