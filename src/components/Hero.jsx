import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate =2;
    }, []);
  return (
    <section id="hero">
        <div>
            <h1>MacBook pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4"autoPlay muted playsInline/>
        <button>Buy Now</button>
        <p>From $1999 or $169/mo. for 12 months</p>
    </section>
  )
}

export default Hero