// Assuming you have a Button component, else you can use a simple button tag
import React from 'react';
import './App.css'; // Make sure to import the CSS file


export default function App() {
  return (
    <div className="appContainer">

      <div className="bannerleft1 absolute "><img src="left_hero.png" alt="" className='imagebannergradients' /></div>

      <div className="bannerright1 absolute"><img src="right_details.png" alt="" className='imagebannergradients' /></div>
      <div className="banner"><img src="20iq.png" alt="" className='imagebanner' /></div>
      <img
        alt="Placeholder"
        className="placeholderImage"
        src="/20iq_darkback.png"
      />
      <h2 className="comingSoonText">"Know what's actually happening on Degen L3"</h2>
     <a href="https://warpcast.com/~/channel/20iq">
     <button className="customButton">
     <img src="farcaster.png" className='buttonImage' alt="" />
     </button>
     </a> 




      <div className='thirdsection'>
        <div className="bellcurvememe"><img src="bellcurve.png" alt="bellcurve" className='bellcurveimg' /></div>
      </div>




      <div className='footer'>
        <img
          alt="Placeholder"
          className="placeholderImage"
          src="/20iq_darkback.png"
        />
        <h2 className="comingSoonText">A platform for 20iQs</h2>
        <h1 className="comingSoon">Coming Soon !</h1>
      </div>


    </div>

  );
}
