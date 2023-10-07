import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import dronePic from "../assets/drone.png";

import { Icon, divIcon, point } from "leaflet";
import { Link } from "react-router-dom";

const customIcon = new Icon({
  iconUrl: dronePic,
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

export const MapComponent = ({ uavs }) => {
  return (
    <MapContainer center={[36.737232, 3.086472]} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        <Marker
          position={[uavs.uav1.uavgpslat, uavs.uav1.uavgpslon]}
          icon={customIcon}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
        >
          <Popup>
            <div className="w-full max-w-sm bg-white rounded-lg shadow">
              <a href="#">
                <img
                  className="py-2 rounded-t-lg"
                  src={dronePic}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5 flex justify-center items-center w-full">
                <Link
                  to={"/app/1"}
                  className="bg-blue-700 font-medium rounded-lg text-sm px-5 text-center"
                >
                  <p className="text-white">Show LiveStream</p>
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>

        <Marker
          position={[uavs.uav2.uavgpslat, uavs.uav2.uavgpslon]}
          icon={customIcon}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
        >
          <Popup>
            <div className="w-full max-w-sm bg-white rounded-lg shadow">
              <a href="#">
                <img
                  className="py-2 rounded-t-lg"
                  src={dronePic}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5 flex justify-center items-center w-full">
                <Link
                  to={"/app/2"}
                  className="bg-blue-700 font-medium rounded-lg text-sm px-5 text-center"
                >
                  <p className="text-white">Show LiveStream</p>
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
};
