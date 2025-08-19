
import ProductCards from '../ProductCards/ProductCards'
import Banner from './Banner'
import Catagory from './Catagory'
import DiscountProducts from './discountProducts'
import PopularCompanies from './PopularCompanies'
import WeeklyOffer from './WeeklyOffer'

function Home() {
  return (
    <div>
      <Banner />
      <aside className="max-w-[1360px] mx-auto px-2 md:px-0 items-center">
        <Catagory></Catagory>
        <WeeklyOffer></WeeklyOffer>
        <ProductCards></ProductCards>
        <DiscountProducts></DiscountProducts>
        <PopularCompanies></PopularCompanies>
      </aside>
    </div>
  )
}

export default Home
