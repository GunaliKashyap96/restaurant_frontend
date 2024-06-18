
import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bq flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content__about">
        <h1  className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet, sapien eget malesuada bibendum, urna ligula cursus elit, non aliquet nulla turpis sit amet risus. Curabitur cape-wearing chefs magna. In vulputate eros et sapien condimentum, nec tempus sci-fi quoting waiters orci. Nullam quis urna euismod, dictum felis sit amet, commodo orci. Maecenas epic quests metus, vel tincidunt felis legendary flavors. Proin a condimentum nunc, eget posuere felis.</p>
        <button type = "button" className="custom__button">Know More</button>
      </div>

      <div className= "app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"></img>
      </div>

      <div className="app__aboutus-content_ourhistory">
        <h1  className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet, sapien eget malesuada bibendum, urna ligula cursus elit, non aliquet nulla turpis sit amet risus. Curabitur cape-wearing chefs magna. In vulputate eros et sapien condimentum, nec tempus sci-fi quoting waiters orci. Nullam quis urna euismod, dictum felis sit amet, commodo orci. Maecenas epic quests metus, vel tincidunt felis legendary flavors. Proin a condimentum nunc, eget posuere felis.</p>
        <button type = "button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
