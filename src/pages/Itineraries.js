import React from 'react';
import WebsiteLayout from "../layouts/WebsiteLayout";
import ItineraryUser from "../components/ItineraryUser"

function Itinerary() {
    return (
      <>
        <WebsiteLayout>
          <ItineraryUser/>
        </WebsiteLayout>
      </>
    );
  }
  
  export default Itinerary;