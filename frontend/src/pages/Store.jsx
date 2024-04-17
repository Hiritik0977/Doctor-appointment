import React from "react";

const Store = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Our store</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          You can visit to out nearby location and learn more about our
          services.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.796407756198!2d85.33109529317427!3d27.68954095477076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994769ac19f%3A0xd15dddabb04dbed!2sCivil%20Service%20Hospital%20of%20Nepal!5e0!3m2!1sen!2snp!4v1709115048901!5m2!1sen!2snp"
            width="300"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="store map"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.796407756198!2d85.33109529317427!3d27.68954095477076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994769ac19f%3A0xd15dddabb04dbed!2sCivil%20Service%20Hospital%20of%20Nepal!5e0!3m2!1sen!2snp!4v1709115048901!5m2!1sen!2snp"
            width="300"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="store map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Store;
