const express = require('express');
const Faq = require('../models/Faq');
const router = express.Router();

// GET all FAQs
router.get('/get', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new FAQ
router.post('/add', async (req, res) => {
  const { title, content, imageUrl } = req.body;

  const newFaq = new Faq({
    title,
    content,
    imageUrl,
  });

  try {
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (Update) an FAQ
router.put('/:id', async (req, res) => {
  const { title, content, imageUrl } = req.body;

  try {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, {
      title,
      content,
      imageUrl,
    }, { new: true });
    res.json(updatedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an FAQ
router.delete('/delete/:id', async (req, res) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
