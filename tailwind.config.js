/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "pop":"url(`./public/font`)"
      }
      ,
      keyframes:{
        "spinn":{
          "0%":{transform: "rotate(0)"},
          "100%":{transform: "rotate(360deg)"}
        },
        "brand":{
          "0%":{scale: "0"},
          "50%":{scale: "2"},
          "100%":{scale:"0.5"}
        },
        "from":{
          "0%":{
            transform: "translateX(100%)",
            opacity: "0"
          },
          "50%":{
            transform: "translateX(50%)",
            opacity: "40%"
          },
          "100%":{
            transform: "translateX(0%)",
            opacity: "1"
          }
        },
        "left":{
          "0%":{
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "50%":{
            transform: "translateX(-50%)",
            opacity: "40%"
          },
          "100%":{
            transform: "translateX(0%)",
            opacity: "1"
          }
        }
        ,
        "render":{
          "0%":{
            scale:"0.5",
            borderRadius:"50%",
            background:"#9e41f4"
          },
          "37%":{
            scale:"1.6",
            borderRadius:"15px",
            background:"#fec958",
            transform: "rotateX(180deg) rotateY(0deg) rotateZ(0)"
          },
          "59%":{
            scale:"2",
            borderRadius:"15px",
            background:"#ce2b96",
            transform: "rotateX(180deg) rotateY(180deg) rotateZ(0)"
          },
          "100%":{
            transform: "rotateX(180deg) rotateY(180deg) rotateZ(0)",
            scale:"0.5",
            borderRadius:"50%",
            background:"#9e41f4"
          }
        }
      },
      animation:{
        'spinn': 'spinn 3s linear infinite',
        "brand": "brand 1s linear infinite pause",
        "render":"render 4s ease-in-out infinite",
        "from":"from 3s ease-in-out 150ms",
        "left":"left 3s ease-in-out 150ms"
      },
      backgroundImage:{
        "gradi": "radial-gradient(#2f3d30, #292f26, #222d2a)",
        "moregradi": "linear-gradient(90deg, #9e41f4, #9ca3ef, #fec958, #ce2b96)",
        "hero":"linear-gradient(rgba(0, 0, 0, 0.447),rgba(0, 0, 0, 0.487)), url('blog (2).jpg')"
      },
      colors:{
        grape: 'rgba(var(--grape))',
        border: 'rgba(var(--border))',
        myColor: 'rgba(var(--mycolor))',
        p: 'rgba(var(--p))',
        text:'rgba(var(--text))',
        bgcard: 'rgba(var(--bgcard))',
        bordercard: 'rgba(var(--bordercard))',
        background: 'rgba(var(--background))',
        black: 'rgba(var(--black))',
        bordersearch: 'rgba(var(--bordersearch))',
        bgSearch: 'rgba(var(--bgSearch))',
        bgWhite: 'rgba(var(--bgWhite))',
        search: 'rgba(var(--search))',
        btn:  'rgba(var(--btn))',
        sidebar:  'rgba(var(--sidebar))',
        textbtn:  'rgba(var(--textbtn))'
      },
    },
  },
  plugins: [],
}