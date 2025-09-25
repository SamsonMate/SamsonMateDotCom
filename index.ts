import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const IP = '192.168.4.2';
const PORT = 80;

// Simulate __dirname (required if using ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to the 'dist' directory
const DIST_DIR = path.join(__dirname, 'dist');

// Serve static files from 'dist'
app.use(express.static(path.join(DIST_DIR)));

// Handle client-side routing (for SPA support)
app.use((req, res) => {
    res.sendFile('index.html', { root: DIST_DIR });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${IP}:${PORT}`);
});
