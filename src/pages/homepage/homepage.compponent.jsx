import React from 'react'
import './homepage.styles.scss'
import What from "../../components/what/what.component";
import Path from "../../components/path/path.component";
import PriceList from "../../components/pricelist/pricelist.component";
import AboutUs from "../../components/about-us/about-us.component";
import Faqs from "../../components/faqs/faqs.component";

const HomePage = () => (
    <div className='homepage'>
        <What/>
        <Path/>
        <PriceList />
        <AboutUs />
        <Faqs />
    </div>
)

export default HomePage