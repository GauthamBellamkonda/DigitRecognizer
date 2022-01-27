import React, { useEffect, useRef } from "react";
import { Stack } from "react-bootstrap";

export default function BoundedCanvas(){
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;
        canvas.style.width = `250px`;
        canvas.style.height = `250px`;
        canvas.style.backgroundColor = "black";
    })
    return (
        <Stack className="text-center">
            <div>
                Bounding box
            </div>
        <canvas ref={canvasRef}
        id = "bounded-canvas"
        style={{
            border : '10px solid black',
            alignSelf: 'center',
          }}
        />
        <br/>
        </Stack>
    )
}