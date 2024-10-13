import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';
import Body from '../Body/Body';
import {Outlet} from 'react-router-dom';
function MainHeader(){
    return(
        <>
            <Header/>
            
            <Outlet/> 
            
            <Footer/>
        
        </>
    );
}
export default MainHeader