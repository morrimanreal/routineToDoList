import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      if (isAuthenticated) {
        <Navigate to="/"></Navigate>
      } else {
        <>
          <section>
            <Outlet />
          </section>
        </>
      }

    </>
  )
}

export default AuthLayout
