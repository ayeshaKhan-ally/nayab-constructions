const fs = require('fs');
const path = require('path');

const filesToScan = [
  'lib/data.ts',
  'app/page.tsx',
  'app/about/page.tsx',
  'app/leadership/page.tsx',
  'app/gallery/page.tsx',
  'app/projects/page.tsx',
  'app/services/page.tsx',
  'app/services/[slug]/page.tsx',
  'components/BrandLogo.tsx',
  'components/LeadershipSection.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/HomePortfolio.tsx',
  'components/ProjectsView.tsx',
  'components/GalleryView.tsx',
  'components/ProjectLightbox.tsx',
  'app/layout.tsx'
];

const regex = /['"`](\/(images|assets)\/[^'"`\s?#]+)['"`]/g;
const referenced = new Set();

for (const file of filesToScan) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regex.exec(content)) !== null) {
      referenced.add(match[1]);
    }
  }
}

console.log('Total unique local images referenced in codebase:', referenced.size);

let missing = 0;
for (const imgPath of referenced) {
  // Next.js serves /images/... from public/images/...
  const fullPath = path.join('public', imgPath);
  if (!fs.existsSync(fullPath)) {
    console.error('❌ MISSING IMAGE:', imgPath, '-> looked for', fullPath);
    missing++;
  } else {
    const stats = fs.statSync(fullPath);
    console.log(`✅ FOUND (${stats.size} bytes): ${imgPath}`);
  }
}

if (missing === 0) {
  console.log('\n🎉 SUCCESS: 100% of all referenced images exist and are valid!');
} else {
  console.error(`\n❌ ERROR: ${missing} image(s) missing!`);
  process.exit(1);
}
