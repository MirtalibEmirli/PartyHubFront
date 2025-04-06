import React from 'react';

const LocationSection = () => {
  return (
    <section className="w-full mt-12 rounded-2xl border border-[#2c2c3a] bg-[#0f0f1f] p-6 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-6">
   
        <div className="flex-1 h-[350px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6574965845744!2d49.98534821535654!3d40.591521579341066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063b012345678%3A0xabcde1234567890!2sSea%20Breeze%20Resort!5e0!3m2!1sen!2saz!4v1680000000000!5m2!1sen!2saz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      
        <div className="w-full h-[350px] lg:w-[300px] bg-white rounded-xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <h3 className="text-2xl font-bold text-black mb-1">Sea Breeze Resort</h3>
            <p className="text-gray-700 text-sm mb-4">
              Nardaran Village, Baku, Azerbaijan
            </p>

           
            <img
                src="https://cdn.iticket.az/venue/cover/Y05Om1Tn5L4frrnAG4EiT4EEj7JHiJfx.png"
                alt="Venue"
                className="w-full h-[130px] object-cover rounded-lg"
        />
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-[#ff00c8] hover:bg-[#cc00a1] text-white text-center font-semibold py-3 rounded-full transition duration-200"
          >
            Get direction
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
