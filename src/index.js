import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/styles.scss?v=1.3.0";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import ResultContextProvider from "context/ResultContext";

ReactDOM.render(
	<ResultContextProvider>
		<BrowserRouter>
			<Switch>
				<Route
					path="/"
					render={(props) => <AdminLayout {...props} />}
				/>
			</Switch>
		</BrowserRouter>
	</ResultContextProvider>,
	document.getElementById("root")
);
