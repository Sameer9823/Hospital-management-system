module.exports = {
  content: [
    './views/**/*.ejs', // Ensure Tailwind scans all your EJS files for class names
    './public/**/*.js',  // Optionally include any JavaScript files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};
