import { MapComponent } from "../components/MapComponent";
export const MapPage = ({uavs}) => {
  

  return (
    <div className="h-[100vh] w-[100vw]">
      <MapComponent uavs={uavs} />
    </div>
  );
};
