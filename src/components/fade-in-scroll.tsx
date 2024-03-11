import React from "react";

import { useInView } from "react-intersection-observer";

interface FadeInScrollProps {
    children: React.ReactNode;
}

const FadeInScroll: React.FC<FadeInScrollProps> = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref}
        className={`transition-all duration-1000 ${inView ? "opacity-100 transform -translate-y-0" : "opacity-0 transform translate-y-10"}`}>
            { children }
        </div>
    )
}

export default FadeInScroll;