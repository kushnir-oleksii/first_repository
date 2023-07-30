import express from 'express';
import mongoose from 'mongoose';
import { Product } from './model/product.js';
import { Customer } from './model/customer.js';

const url = 'mongodb://127.0.0.1:27017/shop';


const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    Customer.find()
      .populate('product_id') // Populate the product_id field with the corresponding Product data
      .then(customers => {
        const purchasesHtml = customers.map(customer => `
  <div style="border: 1px solid #000;
  width: fit-content; 
  margin: 0 0 20px 0;padding: 0;">
  
    <p>${customer.name}: ${customer.product_id.title} Price: ${customer.product_id.price}</p>
  </div>
        `);
        const html = `<h1>User purchases:</h1> ${purchasesHtml.join('')}`;
        res.send(html);
      })
      .catch(error => {
        console.error(error);
      });
  });


mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});