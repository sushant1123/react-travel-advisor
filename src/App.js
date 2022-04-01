import React from "react";
import { createTheme, CssBaseline, Grid } from "@mui/material";

import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

import { ThemeProvider } from "@mui/styles";

export const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
