const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

mongoose.connect('mongodb+srv://sampledev:Tatsara1*@cluster0.utkcdrs.mongodb.net/TravelBackend?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Import models
const Destination = require('./models/destination');

// CRUD operations for Destination
app.get('/destinations', async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

app.post('/destinations', async (req, res) => {
  const destination = new Destination(req.body);
  await destination.save();
  res.json(destination);
});

app.get('/destinations/:id', async (req, res) => {
  const destination = await Destination.findById(req.params.id);
  res.json(destination);
});

app.put('/destinations/:id', async (req, res) => {
  const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(destination);
});

app.delete('/destinations/:id', async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: 'Destination deleted' });
});

// Similar CRUD operations can be created for other models...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



