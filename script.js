import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
    .load('https://prod.spline.design/V2r4JRymvcW91HRT/scene.splinecode')
    .then(() => {
        const carz = app.findObjectByName("carz");
    }
)

$(".zen-img").ripples({
    resolution: 256,
    perturbance: 0.01,
    });

$(selector).ripples();

$(document).ready();