"use strict";

navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position.coords.latitude, position.coords.latitude);
    },
    (error) => {
        alert("Could not get the current location!");
        console.log(error);
    })