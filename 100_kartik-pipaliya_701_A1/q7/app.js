const fetch = require('node-fetch');

async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');
    const html = await response.text();
    console.log("✅ Fetched HTML:");
    console.log(html.slice(0, 100)); 
  } catch (error) {
    console.error("❌ Error fetching Google:", error.message);
  }
}

fetchGooglePage();
