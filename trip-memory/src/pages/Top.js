import Header from "../components/Header";
import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import { useRecoilValue } from "recoil";
import { ModalState } from "../hooks/modal";
import ToDoApp from "../components/ToDoApp";
const Top = () => {
  const viewModal = useRecoilValue(ModalState);

  const [lng, setLng] = useState(136.8783);
  const [lat, setLat] = useState(35.1713);
  const [zoom, setZoom] = useState(15);
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
  }, []);

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
      <div
        className="map-body"
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          className="xyz"
          style={{
            position: "absolute",
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "10px 20px",
          }}
        >
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div
          className="map"
          ref={mapContainer}
          style={{ width: "100%", height: "100%" }}
        ></div>

        {viewModal && <ToDoApp />}
      </div>
    </>
  );
};

export default Top;
