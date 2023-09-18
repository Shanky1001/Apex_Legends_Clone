import Loading from "components/Loading/Loading";
import LayoutWrapper from "LayoutWrapper";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PUBLIC_ROUTES } from "routes/lazyLoad";
import { SuspenseWrapperProps } from "types";

const App = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<LayoutWrapper />}>
				{PUBLIC_ROUTES.map((route: any) => (
					<Route
						path={route.path}
						key={route.path}
						element={
							<SuspenseWrapper>
								<route.component />
							</SuspenseWrapper>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default App;

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
	return (
		<React.Suspense fallback={<Loading />}>{props.children}</React.Suspense>
	);
};
