'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TerraVista</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/search" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Search
            </Link>
            <Link 
              href="/listings" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Listings
            </Link>
            <Link 
              href="/investment-hub" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Investment Hub
            </Link>
            <Link 
              href="/auth/signin" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/search" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Search</Link>
              <Link href="/listings" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Listings</Link>
              <Link href="/investment-hub" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Investment Hub</Link>
              <Link href="/auth/signin" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Sign In</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
