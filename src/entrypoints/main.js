// Import custom stuff
import "../ts/bsl";

// Import instant page
import "instant.page";

// Import Alpine stuff
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

// Import stagewise toolbar (development only)
// Check for development mode using Shopify theme role
const isDevelopment = 
  typeof window !== 'undefined' && 
  window.Shopify && 
  window.Shopify.theme && 
  window.Shopify.theme.role === "development";

console.log('Stagewise: Development mode detected:', isDevelopment);
console.log('Stagewise: Shopify theme role:', window.Shopify?.theme?.role);

if (isDevelopment) {
  console.log('Stagewise: Attempting to load toolbar...');
  
  // Load stagewise toolbar
  import("@stagewise/toolbar").then(({ initToolbar }) => {
    console.log('Stagewise: Toolbar imported successfully');
    initToolbar({
      plugins: [],
    });
    console.log('Stagewise: Toolbar initialized');
  }).catch(error => {
    console.error('Stagewise: Failed to load toolbar:', error);
  });
}

// Register Alpine plugins
Alpine.plugin(persist);
Alpine.plugin(focus);
Alpine.plugin(intersect);

// Assign Alpine to the window object and start it
window.Alpine = Alpine;
Alpine.start();