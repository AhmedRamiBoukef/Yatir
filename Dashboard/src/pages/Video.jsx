import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import OvenPlayer from "ovenplayer";

import { MdOutlineSettingsRemote } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsArrowLeftCircle } from "react-icons/bs";

export const Video = ({ uavs }) => {
  const armed = {
    0: "Armed",
    1: "Disarmed",
    2: "Standby",
    3: "Unkonwn",
  };
  const status = {
    0: "Idle",
    1: "Takeoff",
    2: "In Flight",
    3: "Landing",
    4: "Emergency Landing",
  };

  const { droneid } = useParams();
  useEffect(() => {
    const test = OvenPlayer.create(`player${droneid}`, {
      autoStart: true,
      autoFallback: true,
      mute: false,
      sources: [
        {
          type: "webrtc",
          file: droneid===1?"ws://13.38.173.241:3333/app/1":"ws://13.38.173.241:3333/app/2",
        },
      ],
    });
    test.play();
  }, []);
  let percentage=0
  if (droneid === 1) {
    
    percentage = ((uavs.uav1.uavbatv1 - 0) / (20 - 0)) * 100
  } else {
    percentage = ((uavs.uav2.uavbatv1 - 0) / (20 - 0)) * 100
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#fbf9fa] relative">
      <Link to={"/"}>
        <BsArrowLeftCircle className="text-3xl text-[#F24E1E] absolute cursor-pointer top-5 left-5" />
      </Link>
      <div className="w-[35vw] flex flex-col h-[80vh] items-center justify-evenly mb-6">
        <h1 className="text-4xl mt-20 mb-24 font-bold text-center">UAV {droneid}</h1>
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 place-content-center mx-8">
          <section className="sec">
            <div className="box hover:border-4 hover:border-[#F24E1E] cursor-pointer">
              <div className="flex flex-col justify-center gap-3 h-full items-center">
                <div className="battery-shape">
                  <div className="level">
                    <div className="percentage" style={{width:`${percentage}%`}}></div>
                  </div>
                </div>
                <div className="percent text-center text-[#F24E1E]">{percentage}%</div>
              </div>
            </div>
          </section>
          <section className="sec">
            <div className="box hover:border-4 hover:border-[#F24E1E] cursor-pointer">
              <div className="flex justify-center items-center h-full text-center">
                <GiDeliveryDrone
                  className={`text-7xl ${
                    droneid === 1
                      ? uavs.uav1.uavair === 1
                        ? "text-green-500"
                        : "text-red-800"
                      : uavs.uav2.uavair === 1
                      ? "text-green-500"
                      : "text-red-800"
                  }`}
                />
              </div>
            </div>
          </section>
          <section className="sec">
            <div className="box hover:border-4 hover:border-[#F24E1E] cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-4 h-full text-center">
                <MdOutlineSettingsRemote className="text-5xl text-[#F24E1E]" />
                <p className="text-xl font-bold text-[#F24E1E]">
                  {droneid === 1
                    ? armed[uavs.uav1.uavarmed]
                    : armed[uavs.uav2.uavarmed]}
                </p>
                <div></div>
              </div>
            </div>
          </section>
          <section className="sec">
            <div className="box hover:border-4 hover:border-[#F24E1E] cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-4 h-full text-center">
                <HiStatusOnline className="text-5xl text-[#F24E1E]" />
                <p className="text-xl font-bold text-[#F24E1E]">
                  {droneid === 1
                    ? status[uavs.uav1.uavstate]
                    : status[uavs.uav2.uavstate]}
                </p>
                <div></div>
              </div>
            </div>
          </section>
        </div>
        <button className="py-2 px-4 bg-[#F24E1E] text-white text-center w-[100px] rounded-md m-6">Rent</button>
      </div>
      <div className="w-[65vw] h-[100vh] flex justify-center items-center">
        <div id={`player${droneid}`}></div>
      </div>
    </div>
  );
};
