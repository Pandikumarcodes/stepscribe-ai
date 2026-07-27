import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { DocumentGrid } from './features/documents/components/DocumentGrid'
import { DocumentsHeader } from './features/documents/components/DocumentsHeader'
import { DocumentsControls } from './features/documents/components/DocumentsControls'
import { mockDocuments } from './features/documents/mockDocuments'

function HomePage() {
  return (
    <AppLayout>
      <div className="w-full max-w-5xl">
        <DocumentsHeader />
        <div className="mt-8">
          <DocumentsControls />
        </div>
        <DocumentGrid documents={mockDocuments} />
        <section className="mt-16 max-w-2xl" aria-labelledby="product-heading">
          <p className="text-sm font-semibold tracking-[0.24em] text-indigo-600 uppercase">
            StepScribe AI
          </p>
          <h2
            id="product-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950"
          >
            StepScribe AI
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Create polished SOPs and step-by-step guides with AI
          </p>
        </section>
      </div>
    </AppLayout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
