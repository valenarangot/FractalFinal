import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProjectsPage, UserExperiencePage, SubmitPage, TestPage, LandingPage } from './user/pages'
import {LoginPage} from './auth/pages/indexAuth'

export function AppRouter () {
  return (
    <main>
      <Routes>

      <Route
          path='/'
          element={<LandingPage />}
        />

        <Route
          path='/'
          element={<TestPage />}
        />

        <Route
          path='/Projects'
          element={<ProjectsPage />}
        />

        <Route
          path='/Services/UX'
          element={<UserExperiencePage />}
        />

        <Route
          path='/Login'
          element={<LoginPage />}
        />

        <Route
          path='/admin/submit'
          element={<SubmitPage />}
        />

      </Routes>
    </main>
  )
}
