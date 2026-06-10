const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies (lead form)
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Lead capture: forward to the Visant app backend, never break the UX
app.post('/api/lead', async (req, res) => {
  const { email, name, company, message, page } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ ok: false, error: 'A valid email is required.' });
  }

  const payload = {
    email: email.trim(),
    name: (name || '').toString().trim(),
    company: (company || '').toString().trim(),
    message: (message || '').toString().trim(),
    page: (page || '').toString().trim(),
    source: 'website'
  };

  try {
    const upstream = await fetch('https://app.visant.ai/v1/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!upstream.ok) {
      console.error(`Lead forward failed: upstream returned ${upstream.status} for ${payload.email}`);
      // Still succeed for the visitor; the lead is logged above for manual recovery.
      return res.status(200).json({ ok: true, upstreamStatus: upstream.status });
    }

    return res.status(upstream.status).json({ ok: true, upstreamStatus: upstream.status });
  } catch (err) {
    console.error('Lead forward error:', err.message, JSON.stringify(payload));
    return res.status(200).json({ ok: true });
  }
});

// Handle all routes by serving index.html for SPA-like behavior
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Visant.AI website running on port ${PORT}`);
});
