import express from 'express'
import dotenv from 'dotenv';
//import { fetch } from 'node-fetch';  //for later

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello-world', async (req, res) => {
    
  try {           
    const data = {
        content: "Hello World!"
    };
    
    res.json(data);
    res.status(200);
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });
} 
export default app;