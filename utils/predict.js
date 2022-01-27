import * as tf from '@tensorflow/tfjs'
import 'regenerator-runtime/runtime'

let model;
let prediction;
async function loadModel() {
    console.log("model loading..");
  
    // clear the model variable
    model = undefined;
    try{
        const { host, protocol } = window.location;
        model = await tf.loadLayersModel(`${protocol}//${host}/model.json`);
    }catch(e){
        console.log('model could not be loaded');
        console.log(e.message);
    }
    console.log('model loaded successfully');
}
  
loadModel();


function preprocessCanvas(image)
{
    let tensor = tf.browser.fromPixels(image)
		    .resizeNearestNeighbor([28, 28])
		    .mean(2)
		    .expandDims(2)
		    .expandDims()
		    .toFloat();
		return tensor.div(255.0);
}


export default async function predict(canvas, minX, minY, maxX, maxY){
    minX -= 20;
    minY -= 20;
    maxX += 20;
    maxY += 20;
    
    var bCanvas = document.getElementById('bounded-canvas');
    const bctx = bCanvas.getContext('2d');
    bctx.clearRect(0, 0, bCanvas.width, bCanvas.height);
    bctx.drawImage(canvas, 0, 0, 500, 500, 0, 0, 500, 500);
    bctx.beginPath();
    bctx.strokeStyle = 'red';
    bctx.lineWidth = "5";
    bctx.rect(2*minX, 2*minY, 2*(maxX-minX), 2*(maxY-minY));
    bctx.stroke();

    const side = Math.max(maxX-minX, maxY-minY);
    var cCanvas = document.getElementById('cropped-canvas');
    const cctx = cCanvas.getContext('2d');
    cctx.clearRect(0, 0, cCanvas.width, cCanvas.height);
    cctx.drawImage(canvas, minX+maxX - side, minY+maxY - side, 2*(side), 2*(side), 0, 0, 500, 500);
    var image = cCanvas.toDataURL();
    // console.log(image);


    let tensor = preprocessCanvas(cCanvas);
    const predictions = await model.predict(tensor).data();
    prediction = predictions.indexOf(Math.max(...predictions));
    document.getElementById('prediction-box').innerHTML= prediction;
}
