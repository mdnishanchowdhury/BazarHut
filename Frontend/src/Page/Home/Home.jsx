import ProductList from '../Products/ProductList'
import Banner from './Banner'
import Catagory from './Catagory'

function Home() {
  return (
    <div>
      <Banner />
      <aside className="max-w-[1360px] mx-auto px-2 md:px-0">
        <Catagory />
        <ProductList></ProductList>
      </aside>
    </div>
  )
}

export default Home
