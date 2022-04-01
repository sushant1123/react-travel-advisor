import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

import useStyles from "./Map.styles";

const Map = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery("(min-width:600px)");

	const coordinates = { lat: 0, lng: 0 };

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_PLATFORM_KEY }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={() => {}}
				onChildClick={() => {}}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
