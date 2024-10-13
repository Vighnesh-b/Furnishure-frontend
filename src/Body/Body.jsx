
import './Body.css';
import chair from './body-img/ch.png';
import sofa from './body-img/sf.png';

import dset from './body-img/dtable.jpg';
import c2_1 from '../Chairs/chair_images/c2.1.avif';
import c3_1 from '../Sofas/sofa_images/c3.1.avif';
import c4_1 from '../Dinings/dining_images/c3.1.avif';
import c5_1 from '../Beds/bed_images/c1.1.avif';
import c6_1 from '../Lamps/lamp_images/c1.1.avif';
import c7_1 from '../Wardrobes/wardrobe_images/c1.1.avif';
import c8_1 from '../Chairs/chair_images/c3.1.avif';
import c9_1 from '../Chairs/chair_images/c4.1.avif';

import about from './body-img/about.png';
import '../styles/fonts.css';
import '../styles/font2.css';
import React from 'react';
import { useNavigate} from 'react-router-dom';
function Body() {
    const navigate = useNavigate();    
    const goToChairs=()=>{
        navigate("/Chairs");
    };
    const goToSofas=()=>{
        navigate("/Sofas");
    };
    const goToDinings=()=>{
        navigate("/Dinings");
    };
    
    return (
      <>
        <div className="top-container">
                <h2 className="text-center">
                    Explore our Furniture Range
                </h2>
                <div className="row">
                    <div className="card">
                        <img src={chair} alt="Chair" className="card-image" />
                        <div className="card-text">
                            <h2>Chairs</h2>
                            <p>99+ Options, Starting from ₹2999-</p>
                            <button onClick={goToChairs}>View More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={sofa} alt="Sofa" className="card-image" />
                        <div className="card-text">
                            <h2>Sofas</h2>
                            <p>50+ Options, Starting from ₹9999-</p>
                            <button onClick={goToSofas}>View More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={dset} alt="Desk" className="card-image" />
                        <div className="card-text">
                            <h2>Dining Sets</h2>
                            <p>60+ Options, Starting from ₹6999-</p>
                            <button onClick={goToDinings}>View More</button>
                        </div>
                    </div>                    
                </div>
            </div>
            <h2 className='text-center'>TRENDY PRODUCTS</h2>
            <div className="bottom-container">
                <div className="row">
                <div className="card">
                    <img src={c2_1} alt="" />
                    <div className="card-body">
                        <h4>Cosmo Comfort Armchair</h4>
                        <p className='text-center'>₹13000</p>
                        <button onClick={() => navigate('/Chairs/Chair1')}>Shop Now</button>                                               
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c3_1} alt="" />
                    <div className="card-body">
                        <h4>UrbanScape Sofa</h4>
                        <p className='text-center'>₹16999</p>
                        <button onClick={() => navigate('/Sofas/Sofa9')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c4_1} alt="" />
                    <div className="card-body">
                        <h4>Pure Elegance Set</h4>
                        <p className='text-center'>₹14490</p>
                        <button onClick={() => navigate('/Dinings/Dining33')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c5_1} alt="" />
                    <div className="card-body">
                        <h4>BlissfulHaven</h4>
                        <p className='text-center'>₹13000</p>
                        <button onClick={() => navigate('/Beds/Bed13')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                </div>
                <div className="row">
                <div className="card">
                    <img src={c6_1} alt="" />
                    <div className="card-body">
                        <h4>Armchair Reading Lamp</h4>
                        <p className='text-center'>₹1490</p>
                        <button onClick={() => navigate('/Lamps/Lamp25')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c7_1} alt="" />
                    <div className="card-body">
                        <h4>Kosmo Lily 2 Door Wardrobe</h4>
                        <p className='text-center'>₹14999</p>
                        <button onClick={() => navigate('/Wardrobes/Wardrobe19')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c8_1} alt="" />
                    <div className="card-body">
                        <h4>Zenith Lounge Furnish Chair</h4>
                        <p className='text-center'>₹18999</p>
                        <button onClick={() => navigate('/Chairs/Chair2')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                <div className="card">
                    <img src={c9_1} alt="" />
                    <div className="card-body">
                        <h4>Tranquil Retreat Armchair</h4>
                        <p className='text-center'>₹16999</p>
                        <button onClick={() => navigate('/Chairs/Chair3')}>Shop Now</button>                                                
                    </div>                                        
                </div>
                </div>
            </div>
            <div className="about">
                <h1 className='text-center'>ABOUT</h1>
                <div className="row">
                    <div className="card">
                        <img src={about} alt="" />
                    </div>
                    <div className="about-text">
                        <p>Welcome to our Furnishure, where style meets comfort and functionality. Discover an exquisite collection crafted to transform your spaces into havens of sophistication and relaxation. From timeless classics to contemporary marvels, each piece is meticulously designed to elevate your home's aesthetic while ensuring utmost comfort. Whether you seek the warmth of wooden accents, the modern allure of minimalist designs, or the cozy embrace of plush upholstery, our diverse range caters to every taste and preference. Embrace quality, craftsmanship, and elegance as you explore our curated selection, meticulously chosen to inspire and enhance your living experience. Redefine your home with our furniture - where beauty meets functionality in every carefully curated piece.
                        </p>
                    </div>
                </div>
            </div>
      </>
    );
  }
  
  export default Body;