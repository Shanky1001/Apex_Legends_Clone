import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SuspenseWrapperProps } from "types";

const RoutesWrapper = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [location]);

	return <div>routes</div>;
};

export default RoutesWrapper;

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
	return (
		<React.Suspense fallback={<h1>loading ...</h1>}>
			{props.children}
		</React.Suspense>
	);
};
