import React from 'react';

function MapLocation() {
  return (
    <div className="w-full h-[36rem]">
      <iframe
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5669678986136!2d85.281995!3d27.684502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19097d655d87%3A0x67dd2ac341fd12c!2sNational%20Innovation%20Center%20Nepal!5e0!3m2!1sen!2snp!4v1698510079347!5m2!1sen!2snp"
        title="National Innovation Center Nepal"
        aria-label="National Innovation Center Nepal"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MapLocation;
