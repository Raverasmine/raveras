"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

const DefaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

type Facility = {
  name: string;
  description: string;
  minerals: string[];
  coordinates: [number, number];
};

const facilities: Facility[] = [
  {
    name: "Ibadan Facility",
    description: "Concentrating Lithium Ore of Spodumene",
    minerals: ["Lithium"],
    coordinates: [7.3775, 3.947],
  },
  {
    name: "Jos Facility",
    description: "Processing various minerals",
    minerals: ["Tin", "Columbite", "Tantalite", "Zircon", "Monazite"],
    coordinates: [9.8965, 8.8583],
  },
  {
    name: "Udegi Facility",
    description: "Processing various minerals",
    minerals: ["Tin", "Columbite", "Tantalite", "Zircon", "Monazite"],
    coordinates: [8.3017, 7.0831],
  },
];

const InteractiveMap = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={6}
      zoomControl={true}
      scrollWheelZoom={isMobile}
      doubleClickZoom={isMobile}
      dragging={isMobile}
      className='w-full h-[50vh] md:h-[70vh] min-h-[400px]'
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {facilities.map((facility) => (
        <Marker key={facility.name} position={facility.coordinates}>
          <Popup>
            <div className='p-2 bg-zinc-800 text-white rounded-lg max-w-[200px]'>
              <h3 className='font-semibold text-lg mb-1'>{facility.name}</h3>
              <p className='text-sm text-zinc-300 mb-2'>
                {facility.description}
              </p>
              <h4 className='font-semibold text-sm mb-1'>
                Minerals Processed:
              </h4>
              <ul className='list-disc list-inside text-sm text-zinc-300'>
                {facility.minerals.map((mineral) => (
                  <li key={mineral}>{mineral}</li>
                ))}
              </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
