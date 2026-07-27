# Database Design

## User

- id
- name
- email
- passwordHash
- avatarUrl
- createdAt
- updatedAt

## Document

- id
- userId
- title
- slug
- content JSON
- status: DRAFT or PUBLISHED
- publishedAt
- createdAt
- updatedAt

## DocumentVersion

- id
- documentId
- createdById
- title
- content JSON
- versionNumber
- createdAt

## DocumentImage

- id
- documentId
- uploadedById
- storageKey
- imageUrl
- mimeType
- sizeBytes
- createdAt

## Relationships

- User has many Documents.
- User has many DocumentVersions.
- User has many DocumentImages.
- Document belongs to User.
- Document has many DocumentVersions.
- Document has many DocumentImages.

## Important indexes

- User.email
- Document.userId
- Document.slug
- Document.status
- Document.updatedAt
- DocumentVersion.documentId
- DocumentImage.documentId
