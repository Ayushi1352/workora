const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const images = [
  { name: 'workora-logo.webp', text: 'Workora Logo', width: 200, height: 60, bg: '#ffffff', fg: '#2b5093' },
  { name: 'hero-img-1.webp', text: 'Hero Image 1', width: 600, height: 600, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'hero-img-2.webp', text: 'Hero Image 2', width: 300, height: 300, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'hero-img-3.webp', text: 'Hero Image 3', width: 300, height: 300, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'hero-img-4.webp', text: 'Hero Image 4', width: 300, height: 200, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'stats-bg.webp', text: 'Stats Background', width: 1920, height: 400, bg: '#1F3347', fg: '#ffffff' },
  { name: 'service-talent.webp', text: 'Talent Acquisition', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-executive.webp', text: 'Executive Search', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-training.webp', text: 'Training', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-consulting.webp', text: 'Consulting', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-staffing.webp', text: 'Staffing', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-career.webp', text: 'Career', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-outsourcing.webp', text: 'Outsourcing', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'service-rpo.webp', text: 'RPO', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'team-ryan.webp', text: 'Ryan Carter', width: 300, height: 350, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'team-james.webp', text: 'James Mitchell', width: 300, height: 350, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'team-ethan.webp', text: 'Ethan Brooks', width: 300, height: 350, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'team-daniel.webp', text: 'Daniel Foster', width: 300, height: 350, bg: '#e5e7eb', fg: '#4b5563' },
  { name: 'testimonials-bg.webp', text: 'Testimonials Bg', width: 1920, height: 500, bg: '#1F3347', fg: '#ffffff' },
  { name: 'testim-tyler.webp', text: 'Tyler Blake', width: 80, height: 80, bg: '#d1d5db', fg: '#374151' },
  { name: 'testim-lilya.webp', text: 'Lilya Rose', width: 80, height: 80, bg: '#d1d5db', fg: '#374151' },
  { name: 'testim-steve.webp', text: 'Steve Johnson', width: 80, height: 80, bg: '#d1d5db', fg: '#374151' },
  { name: 'blog-1.webp', text: 'Blog 1', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'blog-2.webp', text: 'Blog 2', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'blog-3.webp', text: 'Blog 3', width: 400, height: 250, bg: '#f3f4f6', fg: '#374151' },
  { name: 'icon-connecting.webp', text: 'Icon 1', width: 50, height: 50, bg: '#ebf5ff', fg: '#2b5093' },
  { name: 'icon-partner.webp', text: 'Icon 2', width: 50, height: 50, bg: '#ebf5ff', fg: '#2b5093' },
  { name: 'icon-clients.webp', text: 'Icon 3', width: 60, height: 60, bg: '#374151', fg: '#ffffff' },
  { name: 'icon-candidates.webp', text: 'Icon 4', width: 60, height: 60, bg: '#374151', fg: '#ffffff' },
  { name: 'icon-experience.webp', text: 'Icon 5', width: 60, height: 60, bg: '#374151', fg: '#ffffff' },
  { name: 'icon-retention.webp', text: 'Icon 6', width: 60, height: 60, bg: '#374151', fg: '#ffffff' }
];

async function createImages() {
  for (const img of images) {
    const svg = `
      <svg width="${img.width}" height="${img.height}">
        <rect width="100%" height="100%" fill="${img.bg}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.min(img.width / 8, 30)}px" fill="${img.fg}">
          ${img.text}
        </text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, img.name));
      
    console.log(`Created ${img.name}`);
  }
}

createImages().catch(console.error);
