import { createCanvas } from 'canvas';

export default async function handler(req, res) {
  try {
    const { width = 600, height = 400, color = 'lightgray', text = 'Loading...' } = req.query;

    const parsedWidth = parseInt(width, 10);
    const parsedHeight = parseInt(height, 10);

    if (isNaN(parsedWidth) || isNaN(parsedHeight) || parsedWidth <= 0 || parsedHeight <= 0) {
      return res.status(400).send('Invalid width or height parameters.');
    }

    const canvas = createCanvas(parsedWidth, parsedHeight);
    const ctx = canvas.getContext('2d');

    // Background color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, parsedWidth, parsedHeight);

    // Text
    ctx.font = `24px sans-serif`;
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, parsedWidth / 2, parsedHeight / 2);

    // Set the content type to image/png
    res.setHeader('Content-Type', 'image/png');

    // Convert the canvas to a PNG buffer and send it
    const buffer = canvas.toBuffer('image/png');
    res.send(buffer);
  } catch (error) {
    console.error('Error creating placeholder:', error);
    res.status(500).send('Error generating placeholder image.');
  }
}