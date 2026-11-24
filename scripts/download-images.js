const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero images
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/luxury-villa-hero.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/images/hero/about-architecture-hero.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/hero/about-engineering-site.jpg'
  },

  // Services (9 disciplines)
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/architectural-planning.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/structural-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/construction-services.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/interior-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/3d-visualization.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/estimation-costing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/building-approvals.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/loan-assistance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/services/real-estate.jpg'
  },

  // Projects (8 portfolio items)
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/grand-crest-villa.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/al-noor-commercial.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/serene-meadow-residence.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/opulent-penthouse.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/zenith-industrial.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/courtyard-pavilion-3d.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/emerald-estate.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/corporate-studio.jpg'
  },

  // Gallery (12 items)
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-villa-elevation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-modular-kitchen.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-master-bedroom.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-living-room.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-rcc-construction.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-commercial-facade.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-isometric-interior.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-twilight-villa.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-walkin-wardrobe.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-site-earthwork.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-dining-lounge.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/gallery/gallery-industrial-peb.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.resolve(dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const request = (targetUrl) => {
      const client = targetUrl.startsWith('https') ? https : http;
      client.get(targetUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          request(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed with status ${res.statusCode} for ${targetUrl}`));
          return;
        }

        const fileStream = fs.createWriteStream(fullDest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(fullDest);
          console.log(`Saved ${dest} (${stats.size} bytes)`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(fullDest, () => {});
        reject(err);
      });
    };

    request(url);
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images...`);
  for (const img of images) {
    try {
      await downloadFile(img.url, img.dest);
    } catch (err) {
      console.error(`Error downloading ${img.dest}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

run();
