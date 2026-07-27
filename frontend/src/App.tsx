import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'

function HomePage() {
  return (
    <AppLayout>
      <section
        className="mx-auto max-w-3xl text-center"
        aria-labelledby="home-heading"
      >
        <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-indigo-600 uppercase">
          StepScribe AI
        </p>
        <h1
          id="home-heading"
          className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl"
        >
          StepScribe AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Create polished SOPs and step-by-step guides with AI
        </p>
        <button
          type="button"
          disabled
          className="mt-10 cursor-not-allowed rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white opacity-50"
        >
          Create document
        </button>
      </section>
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
