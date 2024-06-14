import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto my-4 mb-10 bg-gray-100 pt-2 bg-my_white">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  )
}

export default Main
