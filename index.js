import express from 'express'
import productRoutes from './src/routes/productRoutes.js';



const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());    

app.use(productRoutes);

export default app;