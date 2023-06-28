import React, { useRef, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <section>
        <header>
          <h1 className="logo">Trip Memory</h1>
        </header>

        <video
          ref={videoRef}
          src={process.env.PUBLIC_URL + "/home.mp4"}
          autoplay
          loop
          muted
        ></video>

        <div className="overlay"></div>

        <div className="text">
          <h2>TRIP MEMORY</h2>
          <p>
            あなたにとって大切な場所、忘れたくない場所を<br></br>Trip
            Memoryで残してみませんか？
          </p>
          <a href="/signup">START</a>
        </div>
      </section>
    </>
  );
};

export default Home;
