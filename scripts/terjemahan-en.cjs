const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'i18n', 'en');

const files = {
  'code.json': {
    'homepage.button': 'What is Flagshiiip? (Start Here)',
    'homepage.layoutTitle': 'Home',
    'homepage.layoutDescription': 'Official documentation for the Flagshiiip platform',
    'homepage.feature1.title': 'Authenticity Verification',
    'homepage.feature1.description': 'Scan the QR on the packaging to confirm the product is authentic and registered.',
    'homepage.feature2.title': 'Digital Ownership',
    'homepage.feature2.description': 'Record product ownership and view its digital certificate of authenticity.',
    'homepage.feature3.title': 'Token-Based Loyalty',
    'homepage.feature3.description': 'A customer loyalty program powered by blockchain technology.',
  },
  'docusaurus-theme-classic/navbar.json': {
    'item.label.Dokumentasi': 'Documentation',
    'item.label.Panduan Pengguna': 'User Guide',
  },
  'docusaurus-theme-classic/footer.json': {
    'link.title.Dokumentasi': 'Documentation',
    'link.item.label.Pengenalan': 'Introduction',
    'link.item.label.Panduan Pengguna': 'User Guide',
  },
  'docusaurus-plugin-content-docs/current.json': {
    'sidebar.tutorialSidebar.category.Pengenalan': 'Introduction',
    'sidebar.tutorialSidebar.category.Cara Kerja': 'How It Works',
    'sidebar.tutorialSidebar.category.Panduan Pengguna': 'User Guide',
    'sidebar.tutorialSidebar.category.Layanan untuk Brand': 'Services for Brands',
    'sidebar.tutorialSidebar.category.Teknologi': 'Technology',
    'sidebar.tutorialSidebar.category.Token': 'Token',
  },
};

for (const [file, entries] of Object.entries(files)) {
  const p = path.join(base, file);
  if (!fs.existsSync(p)) {
    console.log('TIDAK ADA :', file, '(jalankan write-translations dulu)');
    continue;
  }
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const [key, message] of Object.entries(entries)) {
    if (json[key]) {
      json[key].message = message;
      console.log('OK        :', file, '->', key);
    } else {
      json[key] = {message};
      console.log('BARU      :', file, '->', key, '(kunci belum ada, cek ejaan)');
    }
  }
  fs.writeFileSync(p, JSON.stringify(json, null, 2) + '\n');
}