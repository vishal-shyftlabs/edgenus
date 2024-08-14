import React from "react";
import PropTypes from "prop-types";

const LookingOut = (props) => {
  return (
    <div className="bg-tertiary md:px-20 px-8 py-20">
      <div className="text-32 font-bold text-center">
        Who are we looking out for?
      </div>
      <div className="flex flex-wrap gap-x-28 pt-10 justify-center md:px-10">
        <div className="gap-y-6 xl:flex justify-center items-center">
          <div>
            <img src="creative-hustlers.png" className="h-[15vh] lg:h-[25vh]" />
          </div>
          <div className="flex-col mt-10 xl:ml-10 xl:mt-0">
            <div className="text-primary font-bold text-lg">
              Creative Hustlers
            </div>
            <div className="list-disc">
              <div className="list-item"> Artists</div>
              <div className="list-item">Art Agencies</div>
              <div className="list-item"> Fitness and training houses</div>
              <div className="list-item">Unconventional skill holders</div>
            </div>
          </div>
        </div>

        <div className="xl:flex gap-y-6 justify-center items-center">
          <div>
            <img src="smbs.png" className="h-[15vh] lg:h-[25vh]" />
          </div>
          <div className="flex-col mt-10 xl:ml-10 xl:mt-0">
            <div className="text-primary font-bold text-lg">SMBs</div>
            <div className="list-disc">
              <div className="list-item">Offline </div>
              <div className="list-item">⁠⁠Cafes/ Restaurants</div>
              <div className="list-item"> Local entrepreneurs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LookingOut.propTypes = {};

export default LookingOut;
