export type DocumentStatus = 'Draft' | 'Published'

export type MockDocument = {
  id: string
  title: string
  status: DocumentStatus
  updatedText: string
}

export const mockDocuments: readonly MockDocument[] = [
  {
    id: 'employee-onboarding-process',
    title: 'Employee onboarding process',
    status: 'Draft',
    updatedText: 'Updated 2 hours ago',
  },
  {
    id: 'product-release-guide',
    title: 'How to publish a product release',
    status: 'Published',
    updatedText: 'Updated yesterday',
  },
  {
    id: 'customer-support-escalation-guide',
    title: 'Customer support escalation guide',
    status: 'Draft',
    updatedText: 'Updated 3 days ago',
  },
]
