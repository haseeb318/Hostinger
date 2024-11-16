import React from 'react'
import PricePlan from './home/Priceplan'
import HeaderContainer from './home/HeaderContainer'
import PartnerReviews from './home/PartnerReviews'
import TvComp from './TvComp'

const Home = () => {
  return (
   <>
    <HeaderContainer/>
    <PartnerReviews/>
    <PricePlan/>
    <TvComp/>
   </>
  )
}

export default Home