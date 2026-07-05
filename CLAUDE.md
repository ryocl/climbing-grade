# CLAUDE.md

# Development Rules

## Technology Stack

* Use TypeScript for all application code.
* Use Next.js 16.2 with the App Router.
* Use React 19.2.
* Use Bun as the package manager and runtime.
* Target Node.js v24.17.

### UI

* Use Tailwind CSS for styling.
* Use Radix UI for accessible UI components.
* Build responsive layouts with a mobile-first approach.

### Forms

* Use React Hook Form for form state management.
* Use Zod for schema validation.
* Integrate React Hook Form with Zod for form validation.

### Testing

* Use Playwright for end-to-end testing.
* Use Storybook for isolated component development.

### Code Quality

* Use the standard ESLint configuration provided by Next.js.
* Automatically organize imports according to the project's ESLint configuration.
* Follow ESLint accessibility rules.
* Enable React Compiler.
* Follow React Compiler best practices and avoid patterns that prevent optimization.

---

## General Guidelines

* Prefer TypeScript with explicit types.
* Never use `any` unless absolutely unavoidable.
* Follow App Router conventions for routing, layouts, loading, and error handling.
* Prefer Server Components by default.
* Only use Client Components when browser APIs or React hooks require them.
* Use async/await instead of Promise chains.
* Reuse existing code before creating new implementations.
* Keep implementations simple and maintainable.
* Avoid unnecessary dependencies.

---

## Styling

* Use Tailwind CSS for all styling.
* Prefer Tailwind utility classes over custom CSS.
* Avoid inline styles.
* Use Radix UI components where appropriate.
* Build layouts using a mobile-first responsive design.
* Support smartphone portrait mode as the primary mobile experience.

---

## Accessibility

* Follow the project's ESLint accessibility rules.
* Use semantic HTML whenever possible.
* Ensure interactive elements are keyboard accessible.
* Provide accessible labels for form controls.
* Prefer accessible components from Radix UI.
* Do not suppress accessibility warnings without a valid reason.

---

## Project Structure

* Place all application code under the `src` directory.
* Follow the colocation principle.

  * Keep components, hooks, styles, tests, schemas, and utilities close to the feature or route that uses them.
  * Move code to shared directories only when it is reused by multiple features.
* Prefer feature-based organization over type-based organization.
* Keep pages and layouts focused on routing and composition.
* Separate business logic from UI components.
* Avoid creating global directories unless the contents are genuinely shared.
* Avoid creating deeply nested directory structures.

### Shared Directories

Create shared directories only when code is reused across multiple features.

Typical shared directories include:

* `src/components` — Shared UI components.
* `src/hooks` — Shared custom React hooks.
* `src/lib` — Shared libraries and application services.
* `src/types` — Shared TypeScript types.
* `src/utils` — Shared utility functions.

---

## Components

* Keep components focused on a single responsibility.
* Prefer composition over inheritance.
* Extract reusable UI into shared components.
* Avoid deeply nested component trees.

---

## Forms

* Manage forms with React Hook Form.
* Define validation schemas using Zod.
* Keep validation logic inside Zod schemas.
* Avoid manual validation when schema validation is sufficient.

---

## Storybook

* Add stories for reusable UI components.
* Keep stories focused on a single component or state.
* Document component variants through Storybook.

---

## Testing

* Create Playwright tests for user-facing features when appropriate.
* Prefer stable selectors over brittle DOM traversal.
* Avoid arbitrary waits; wait for user-visible state changes instead.

---

## Responsive Design

* Design mobile-first.
* Optimize primarily for smartphone portrait mode.
* Ensure layouts adapt cleanly to tablets and desktops.
* Avoid duplicated layouts for different screen sizes unless necessary.

---

## Naming Conventions

### Files and Directories

* Use `PascalCase` for React component files.

  * Examples: `Button.tsx`, `UserCard.tsx`
* Use `camelCase` for non-component files when appropriate.

  * Examples: `formatDate.ts`, `calculatePrice.ts`
* Use `kebab-case` for App Router route directories.

  * Examples: `user-profile`, `account-settings`
* Use `index.ts` only for intentional barrel exports.

### React

* Use `PascalCase` for component names.
* Use `camelCase` for variables and functions.
* Prefix custom hooks with `use`.

### TypeScript

* Use `PascalCase` for interfaces, types, enums, and type aliases.
* Use `camelCase` for variables, functions, parameters, and object properties.
* Use `UPPER_SNAKE_CASE` for application-wide constants.

### Boolean Variables

Use descriptive names beginning with:

* `is`
* `has`
* `can`
* `should`

Examples:

* `isLoading`
* `hasError`
* `canSubmit`
* `shouldRedirect`

### Event Handlers

Prefix event handlers with `handle`.

Examples:

* `handleSubmit`
* `handleClick`
* `handleChange`

### Server Actions

Use verb-first names.

Examples:

* `createUser`
* `updateProfile`
* `deleteRecipe`

### Zod Schemas

Suffix schema names with `Schema`.

Examples:

* `loginSchema`
* `recipeSchema`

### React Hook Form

Name form types after the feature.

Examples:

* `LoginForm`
* `RecipeForm`

### Playwright

* Name test files with the `.spec.ts` suffix.
* Use clear, behavior-focused test descriptions.

---

## TypeScript

* Prefer interfaces for public object shapes.
* Prefer type inference when it improves readability.
* Avoid type assertions unless necessary.
* Reuse existing types whenever possible.

---

## Code Quality

* Write readable code over clever code.
* Remove unused code and imports.
* Keep functions and components small.
* Minimize comments; prefer self-explanatory code.

---

## Assistant Behavior

Before implementing any feature:

1. Understand the existing codebase.
2. Explain the implementation approach briefly.
3. Ask for clarification if requirements are ambiguous.
4. Make the smallest change necessary.
5. Preserve existing behavior unless instructed otherwise.

## Dependency Management

- Do not introduce new dependencies unless explicitly requested or there is no reasonable alternative using the existing stack.
- Prefer built-in Next.js, React, and browser APIs before adding third-party libraries.

## Quality Gate

Before considering an implementation complete:

- Ensure there are no TypeScript errors.
- Ensure there are no ESLint errors or warnings.
- Ensure the code builds successfully.

## Best Practices

- Follow current best practices for Next.js, React, TypeScript, and Tailwind CSS.
- Prefer framework conventions over custom implementations.
- Write code that is simple, maintainable, and consistent with the existing codebase.

## React Compiler

- Write components that are compatible with React Compiler.
- Do not use `useMemo` or `useCallback` unless there is a demonstrated need.
- Prefer straightforward React code and let React Compiler optimize where possible.

## Next.js Rendering Strategy

### Server Components

* Prefer Server Components by default.
* Fetch data in Server Components whenever possible.
* Keep business logic and data fetching on the server.
* Avoid adding `"use client"` unless client-side functionality is required.

### Client Components

Use Client Components only when required, such as:

* React hooks (`useState`, `useEffect`, etc.)
* Browser APIs (`window`, `localStorage`, `navigator`, etc.)
* Event handlers (`onClick`, `onChange`, etc.)
* Interactive UI that requires client-side state

Keep Client Components as small as possible.

### Server Actions

* Prefer Server Actions for form submissions and data mutations.
* Keep mutation logic on the server whenever possible.
* Validate all input using Zod before processing.
* Return typed results from Server Actions.
* Do not expose server-only logic to Client Components.
