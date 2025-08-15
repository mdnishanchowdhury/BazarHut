import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'

function Home() {
  return (
    <div>
      <Banner />
      <aside className="max-w-[1360px] mx-auto px-4">
        <Catagory />
      </aside>
    </div>
  )
}

export default Home
