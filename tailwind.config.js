module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {       
          
          "primary": "#50a9c9",
          
          "secondary": "#F000B8",
                   
          "accent": "#37CDBE",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : 'Poppins'
      }
    },
  },
  plugins: [require("daisyui")],
}
