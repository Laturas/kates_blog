const canvas_dom_object = document.body.appendChild(document.createElement('canvas'));
canvas_dom_object.id = "background-canvas";

const canvas = document.getElementById('background-canvas');
const context = canvas.getContext('2d'); // Get the 2D rendering context
var current_width = 0;
var current_height = 0;
const max_pixel_difference_to_recalculate = 50;
const density = 1 / 2000;

function draw_snowfall_bg() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(255, 255, 255, 0.5)';

    for (let i = 0; i < (canvas.width * canvas.height) * density; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const radius = Math.random() * 2;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
    }
}

function resize_canvas() {
    if (window.innerWidth - canvas.width > max_pixel_difference_to_recalculate) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw_snowfall_bg();
        return;
    }
    if (window.innerHeight - canvas.height > max_pixel_difference_to_recalculate) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw_snowfall_bg();
    }
}
window.addEventListener('resize', resize_canvas);

resize_canvas();