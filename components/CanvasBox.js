import React, { useEffect, useRef, useState } from "react";
import predict from "../utils/predict";
import 'regenerator-runtime/runtime'
import { Button, Container, Col, Stack} from 'react-bootstrap';
import './CanvasBox.css'

let minX = 1000, minY = 1000, maxX = 0, maxY = 0;

export default function CanvasBox() {
    
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;
        canvas.style.width = `250px`;
        canvas.style.height = `250px`;
        canvas.style.backgroundColor = "black";
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          }, false);
          document.body.addEventListener("touchend", function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          }, false);
          document.body.addEventListener("touchmove", function (e) {
            if (e.target == canvas) {
              e.preventDefault();
            }
          }, false);
          canvas.addEventListener("touchstart", touchStart, false);
          canvas.addEventListener("touchend", async function (e){
              touchStop(e);
              predict(canvas, minX, minY, maxX, maxY);
          }, false);
          canvas.addEventListener("touchmove", touchMove, false);
        const ctx = canvas.getContext('2d');
        ctx.scale(2,2);
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 10;
        ctxRef.current = ctx;
    },[]);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        // minX = Math.min(minX, offsetX);
        // minY = Math.min(minY, offsetY);
        // maxX = Math.max(maxX, offsetX);
        // maxY = Math.max(maxY, offsetY);
    }
    const stopDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    }
    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        minX = Math.min(minX, offsetX);
        minY = Math.min(minY, offsetY);
        maxX = Math.max(maxX, offsetX);
        maxY = Math.max(maxY, offsetY);
        ctxRef.current.lineTo(offsetX, offsetY);
        ctxRef.current.stroke();
    }

    const clearCanvas = () => {
      const canvas = canvasRef.current;
      ctxRef.current.fillStyle = "black"
      ctxRef.current.fillRect(0, 0, canvas.width, canvas.height)
      console.log("This is getting executed");
    minX = 1000;
    minY = 1000;
    maxX = 0;
    maxY = 0;
    }

    const touchStart = (evt) => {
        var rect  = canvasRef.current.getBoundingClientRect();
        var touch = evt.touches[0];

        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        // minX = Math.min(minX, offsetX);
        // minY = Math.min(minY, offsetY);
        // maxX = Math.max(maxX, offsetX);
        // maxY = Math.max(maxY, offsetY);
    }

    const touchStop = (evt) => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    }

    const touchMove = (evt) => {
        var rect  = canvasRef.current.getBoundingClientRect();
        var touch = evt.touches[0];

        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        minX = Math.min(minX, offsetX);
        minY = Math.min(minY, offsetY);
        maxX = Math.max(maxX, offsetX);
        maxY = Math.max(maxY, offsetY);
        ctxRef.current.lineTo(offsetX, offsetY);
        ctxRef.current.stroke();
    }

    return (
        <Stack className="text-center" gap={1}>
            <div>
                Draw your digit here
            </div>
        <canvas 
        className="canvas-box"
        onMouseDown={startDrawing}
        onMouseUp={async () => {
          stopDrawing();
          predict(canvasRef.current, minX, minY, maxX, maxY);
        }}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        // onTouchStart={()=>{
        //     touchStart();
        //     console.log('wadfvawdf');
        // }
        // }
        // onTouchEnd={async () => {
        //     touchStop();
        //     predict(canvasRef.current, minX, minY, maxX, maxY);
        //   }
        // }
        // onTouchMove={touchMove}
        // onTouchCancel={touchStop}
        ref={canvasRef}
        style={{
          border : '10px solid black',
          alignSelf: 'center'
        }}
        />
        <Button onClick={clearCanvas} variant="outline-primary"
        style={{
            alignSelf: 'center',
            width:'250px',
        }}>Clear</Button>
        <br/>
        </Stack>
    )
}