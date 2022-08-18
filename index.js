const express = require('express');
const swaggerUI = require('swagger-ui-express');
/**
 * This will load yaml file
 */
const YAML = require('yamljs')
const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
app.listen(5000,()=>console.log("listening on 5000"));
/**
 * api router
 * 
 * */ 

app.get('/Student',(req,res)=>{
    res.send([
        {
            id:1,
            Name:'Test User'
        },
        {
            id:2,
            Name:'Demo user'
        }
    ])
});

 app.post('/Student',(req,res)=>{
   res.status(201).send();
});

 app.put('/Student/:id',(req,res)=>{
    res.status(201).send();
 });

 app.get('/Student/:id',(req,res)=>{
    res.status(201).send({
        id:1,
        Name:'Test User'
    },);
 });
 
  app.delete('/Student/:id',(req,res)=>{
    res.status(204).send();
 })
