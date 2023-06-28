import Header from "../components/Header";
import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
const Top = () => {
  const [lng, setLng] = useState(139.4534);
  const [lat, setLat] = useState(35.4548);
  const [zoom, setZoom] = useState(12);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    mapboxgl.accessToken =
      "pk.eyJ1Ijoib3N1c2hpMDYyNiIsImEiOiJjbGl1ZmozMnAwNnlvM3RtbGJ6dW1vOXU4In0.Rbjjcw5UjOzq1DWYZoWuRg"; // アクセストークンをここに入力してください
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    const language = new MapboxLanguage();
    map.current.addControl(language);

    map.current.on("zoomend", () => {
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
    });

    return () => {
      map.current.remove();
    };
  }, [lng, lat]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
    });
  }, []);
  return (
    <>
      <Header />

      <div>
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
      <div ref={mapContainer} style={{ height: "400px" }}></div>
    </>
  );
};

export default Top;
