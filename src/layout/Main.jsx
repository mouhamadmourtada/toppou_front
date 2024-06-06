import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto mt-4 bg-gray-100 pt-2">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  )
}

export default Main
