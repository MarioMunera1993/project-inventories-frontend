import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Login} from '../pages/Login'
import {Dashboard} from "../pages/Dashboard"

export const AppRouter = () => {
  return (
    <Routes >
        <Route path='/' element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Cualquier ruta desconocida redirige al login */}
        <Route path='*' element={<Navigate to="/" replace />}/>
    </Routes>
  )
}
