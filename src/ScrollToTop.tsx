import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
	}, [location]);

	return <React.Fragment>{props.children}</React.Fragment>;
};

export default ScrollToTop;