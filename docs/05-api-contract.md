# API Contract

Approximately 19 APIs are required for the minimum MVP. The extended version may contain around 28 APIs.

## System

- `GET /api/health`

## Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `POST /api/auth/refresh` — optional

## Users

- `GET /api/users/me`
- `PATCH /api/users/me`

## Documents

- `GET /api/documents`
- `POST /api/documents`
- `GET /api/documents/:documentId`
- `PATCH /api/documents/:documentId`
- `DELETE /api/documents/:documentId`
- `PATCH /api/documents/:documentId/content`
- `PATCH /api/documents/:documentId/title` — optional separate endpoint
- `POST /api/documents/:documentId/duplicate` — later

## Publishing

- `POST /api/documents/:documentId/publish`
- `POST /api/documents/:documentId/unpublish`
- `GET /api/public/documents/:slug`
- `PATCH /api/documents/:documentId/slug` — later

## Versions

- `GET /api/documents/:documentId/versions`
- `POST /api/documents/:documentId/versions`
- `GET /api/documents/:documentId/versions/:versionId`
- `POST /api/documents/:documentId/versions/:versionId/restore`

## Uploads

- `POST /api/uploads/images`
- `DELETE /api/uploads/images/:imageId`

## AI

- `POST /api/ai/rewrite`
- `POST /api/ai/generate-step` — later
