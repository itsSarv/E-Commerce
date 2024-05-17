import React from 'react'
import Hero  from '../Components/Hero/Hero'
import Popular from '../Components/popular/popular'
import Offers from '../Components/Offers/offer'
import NewCollections from '../Components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop