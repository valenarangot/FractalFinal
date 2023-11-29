import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProjectsPage, UserExperiencePage, UserInterfacePage, FrontendPage, BrandingPage, ConsultancyPage, SubmitPage, LandingPage } from './user/pages'
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
          path='/Projects'
          element={<ProjectsPage />}
        />

        {/* Services */}
        
          <Route
            path='/Services/UX'
            element={<UserExperiencePage />}
          />

          <Route
            path='/Services/UI'
            element={<UserInterfacePage />}
          />

          <Route
            path='/Services/Frontend'
            element={<FrontendPage />}
          />

          <Route
            path='/Services/Branding'
            element={<BrandingPage />}
          />

          <Route
            path='/Services/Consultancy'
            element={<ConsultancyPage />}
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
