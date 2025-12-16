# Smart Skills Framework - Interactive Visualization

An interactive visualization of the Smart Skills Framework using design thinking principles for employability competencies in business education.

## Features

- **Conceptual View**: Visual representation of the framework showing the reflective design cycle, dual practice streams, evidence layer, and five-phase development path
- **Operational View**: Detailed breakdown of how the framework was operationalized in practice
- **Interactive Elements**: Click on phase nodes to see detailed information, hover over elements for tooltips
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Live Demo

Visit the live demo at: `https://[your-username].github.io/smart-skills-framework/`

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/smart-skills-framework.git
cd smart-skills-framework
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `smart-skills-framework`

2. Initialize git in your project (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/[your-username]/smart-skills-framework.git
git branch -M main
git push -u origin main
```

### Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages using one of these methods:

#### Option A: Using gh-pages package (Recommended)

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add deploy script to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

#### Option B: Manual deployment

1. Build the project: `npm run build`
2. Go to your GitHub repository settings
3. Navigate to Pages section
4. Select "Deploy from a branch"
5. Choose the `gh-pages` branch
6. Save and wait for deployment

### Update the base URL

If your repository name is different from `smart-skills-framework`, update the `base` in `vite.config.js`:

```javascript
base: '/your-repository-name/',
```

## Technology Stack

- React 18
- Vite
- SVG for interactive visualizations
- CSS3 with animations

## Framework Components

### 1. Foundation Layer
Theoretical grounding in competency-based and experiential learning

### 2. Reflective Design Cycle
Core iterative loop: Design → Implementation → Evaluation

### 3. Dual Practice Streams
- **Pedagogical Design**: Scaffolding and authentic assessment
- **Reflective Practice**: Meta-learning and sense-making

### 4. Evidence Layer
Multi-source data collection for evidence-informed decisions

### 5. Five-Phase Development Path
Structured progression from framework review through continuous improvement

### 6. Outcomes
Transferable competencies, theory-practice translation, and institutional replicability

## License

MIT License - feel free to use and adapt for your educational research and practice.

## Citation

If you use this framework in your research or teaching, please cite appropriately based on the original work.

## Contact

For questions or collaboration opportunities, please open an issue on GitHub.
