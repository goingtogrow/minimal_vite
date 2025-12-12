import express from 'express';
import cors from "cors"

const app = express();

// app.use(cors(
//     { origin: 'http://localhost:5173', credentials: true }
// ))

const PORT = process.env.PORT || 3001;

const items = [
{ id: 1, name: 'Item One', description: 'First object' },
{ id: 2, name: 'Item Two', description: 'Second object' },
{ id: 3, name: 'Item Threes', description: 'Third object' }
];


app.get('/', (req, res) => {
res.send('Backend is running');
});


app.get('/api/items', (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
res.json(items);
});


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});