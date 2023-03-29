import React from 'react';
import { images } from '../constants';

function Shop() {
  return (
    <div className="mt-10 md:px-3 px-5 ">
      <div className=" flex justify-center  w-full text-center flex-col  ">
        <h1 className=" font-poppins text-[32px] font-normal w-full  ">
          Shop By Pet
        </h1>
        <p>
          Shop the latest high-end designer products for your pups at our luxury
          dog boutique!
        </p>
      </div>
      <div className=" flex  md:flex-row flex-col sm:mb-20 mb-6 mt-10  my-5 flex-wrap">
        {images.map((image) => (
          <div className=" container  flex-1  cards rounded-full  flex justify-center items-center md:my-0 my-10  relative overflow-hidden ">
            <img
              src={image.img}
              alt="pets"
              className=" mr-5 block object-cover object-center "
            />
            <div className="overlay  ">
              <div className="content">
                <h4 className="font-poppins inset-0 font absolute   text-center text-[24px] ">
                  {image.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
