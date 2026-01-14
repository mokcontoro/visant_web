# Visant.AI Website

Marketing website for Visant.AI - Camera that Detects What Matters 24/7

## Version

v1.0.4

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser to `http://localhost:3000`

## Project Structure

```
visant_web/
├── index.html              # Main landing page
├── install.html            # Installation guide
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── css/
│   └── common.css          # Shared styles across all pages
├── design_guideline.md     # Design system documentation
├── image/                  # Image assets
├── server.js               # Express server for Railway
├── package.json            # Dependencies
└── .gitignore              # Git ignore rules
```

## Deployment to Railway

### Prerequisites
- Railway account (https://railway.app)
- GitHub repository
- Domain visant.ai configured

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Create Railway Project**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository
   - Railway will auto-detect Node.js and deploy

3. **Configure Custom Domain**
   - In Railway dashboard, go to your project
   - Click on your service
   - Go to "Settings" tab
   - Scroll to "Domains" section
   - Click "Custom Domain"
   - Enter `visant.ai`
   - Railway will provide CNAME/A record values

4. **Update DNS Records**
   At your domain registrar (where you bought visant.ai):
   - Add the CNAME or A record provided by Railway
   - Common records:
     - Type: `CNAME` or `A`
     - Name: `@` (for root domain) or `www`
     - Value: (provided by Railway)
   - DNS propagation can take 5-60 minutes

5. **Verify Deployment**
   - Visit https://visant.ai
   - Check all pages load correctly
   - Verify SSL certificate is active (HTTPS)
   - Test mailto links work

### Environment Variables

None required for this static site deployment.

### Cost

- Railway Free Tier: $5 credit/month
- This static site should stay within free tier limits
- Monitor usage in Railway dashboard

## Maintenance

### Update Content
1. Edit HTML files locally
2. Test with `npm start`
3. Commit and push to GitHub
4. Railway auto-deploys on push to main branch

### Monitor Performance
- Check Railway dashboard for:
  - Deployment logs
  - Server health
  - Resource usage

## Contact

For website inquiries: visant@contoro.com

## License

(c) 2026 Contoro Robotics. All rights reserved.
