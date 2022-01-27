import React from "react";
import { Stack } from "react-bootstrap";

export default function Prediction() {
    return (
        <Stack className="text-center">
            <div>
                Prediction
            </div>
            <div style={{fontSize: '150px', width: '250px', height: '250px', alignSelf: 'center'}} id='prediction-box'></div>
        <br/>
        </Stack>
    );
}