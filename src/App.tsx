import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
