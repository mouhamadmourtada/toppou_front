import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto mt-4 bg-gray-100 pt-2 bg-my_white">
      <div className=" h-full px-6 mx-auto">{children}</div>
    </main>
  )
}

export default Main
