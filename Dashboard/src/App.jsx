import { Route, Routes } from "react-router-dom";
import { MapPage } from "./pages/MapPage";
import { Video } from "./pages/Video";
import { useState } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");

function App() {
  const [uavs, setUavs] = useState({
    uav1: {
      uavbatid: 1,
      uavbatv1: 16.2,
      uavbatpt: 1.0,
      uavgpsfx: 3,
      uavgpsns: 10,
      uavgpslat: -8.75314150624596,
      uavgpslon: 115.47149839004913,
      uavgpsabs: 115.67376708984375,
      uavinair: 1,
      uav1armed: 1,
      uav1state: 4,
    },
    uav2: {
      uavbatid: 1,
      uavbatv1: 16.2,
      uavbatpt: 1.0,
      uavgpsfx: 3,
      uavgpsns: 10,
      uavgpslat: -24.746438887396767,
      uavgpslon: 15.289389341027178,
      uavgpsabs: 115.67376708984375,
      uavinair: 0,
      uavarmed: 1,
      uavstate: 2,
    },
  });
  socket.on("uav2/bat/id", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavbatid: data,
      },
    }));
  });
  socket.on("uav2/bat/v1", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavbatv1: data,
      },
    }));
  });
  socket.on("uav2/bat/pt", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavbatpt: data,
      },
    }));
  });
  socket.on("uav2/gps/fx", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavbatfx: data,
      },
    }));
  });
  socket.on("uav2/gps/ns", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavgpsns: data,
      },
    }));
  });
  socket.on("uav2/gps/lat", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavgpslat: data,
      },
    }));
  });
  socket.on("uav2/gps/lon", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavgpslon: data,
      },
    }));
  });
  socket.on("uav2/gps/abs", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavgpsabs: data,
      },
    }));
  });
  socket.on("uav2/in_air", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavinair: data,
      },
    }));
  });
  socket.on("uav2/armed", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavarmed: data,
      },
    }));
  });
  socket.on("uav2/state", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav2: {
        ...prevUavs.uav2,
        uavstate: data,
      },
    }));
  });
  socket.on("uav1/bat/id", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavbatid: data,
      },
    }));
  });
  socket.on("uav1/bat/v1", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavbatv1: data,
      },
    }));
  });
  socket.on("uav1/bat/pt", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavbatpt: data,
      },
    }));
  });
  socket.on("uav1/gps/fx", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavgpsfx: data,
      },
    }));
  });
  socket.on("uav1/gps/ns", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavgpsns: data,
      },
    }));
  });
  socket.on("uav1/gps/lat", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavgpslat: data,
      },
    }));
  });
  socket.on("uav1/gps/lon", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavgpslon: data,
      },
    }));
  });
  socket.on("uav1/gps/abs", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavgpsabs: data,
      },
    }));
  });
  socket.on("uav1/in_air", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavinair: data,
      },
    }));
  });
  socket.on("uav1/armed", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavarmed: data,
      },
    }));
  });
  socket.on("uav1/state", (data) => {
    setUavs((prevUavs) => ({
      ...prevUavs,
      uav1: {
        ...prevUavs.uav1,
        uavstate: data,
      },
    }));
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<MapPage uavs={uavs} />} />
        <Route path="/app/:droneid" element={<Video uavs={uavs} />} />
      </Routes>
    </div>
  );
}

export default App;
