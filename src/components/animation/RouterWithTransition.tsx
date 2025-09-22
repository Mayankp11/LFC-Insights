// src/components/RouterWithTransition.tsx
import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageTransition from "./PageTransition";


const RouterWithTransition = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation on route change
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1100); // match your Lottie animation duration

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {isAnimating && <PageTransition />}
      <Outlet /> {/* renders child routes */}
    </>
  );
};

export default RouterWithTransition;
