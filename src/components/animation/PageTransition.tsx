// src/components/PageTransition.tsx
import Lottie from "lottie-react";
import animatedLogo from "../../assets/animation/Lfc-logo-animation.json"

const PageTransition = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        animation: "fadeOut 1.5s forwards",
      }}
    >
      <Lottie animationData={animatedLogo} loop={false} autoplay />
      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
          }
        `}
      </style>
    </div>
  );
};

export default PageTransition;
