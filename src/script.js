const mobileNavs = document.getElementById('mobileNavs')
const three_lines = document.getElementById('three-lines')
const close_button = document.getElementById('closed')
const service_container = document.querySelector('.service-container')
const child_container = document.getElementById('child-container')
const question = document.querySelectorAll('.fa-questions')


const data = [
  {
    service: 'Digital Marketing',
    image: './Images/marketing.svg',
    text: 'Holistic strategies to amplify your online presence',
    icon: '<i class="fa-solid fa-arrow-trend-up"></i>'
  },
  {
    service: 'SEO',
    image: './Images/seo.svg',
    text: 'Climb search rankings and drive organic traffic.',
    icon: '<i class="fa-solid fa-bullseye"></i>'
  },
  {
    service: 'Social Media',
    image: './Images/socialmedia.svg',
    text: 'Engage communities and build brand loyalty.',
    icon: '<i class="fa-solid fa-user-group"></i>'
  },
  {
    service: 'Branding',
    image: './Images/socialmedia.svg',
    text: 'Crafting memorable identities that resonate.',
    icon: '<i class="fa-solid fa-bolt"></i>'
  },
  {
    service: 'Web Development',
    image: './Images/webdevelopment.svg',
    text: 'Building high-performance digital storefronts.',
    icon: '<i class="fa-solid fa-laptop-code"></i>'
  },
  {
    service: 'Automation',
    image: './Images/automation.svg',
    text: 'Streamlining processes for efficiency and scale.',
    icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>'
  },
]

function showNavicons() {
  three_lines.classList.toggle('hidden')
  close_button.classList.toggle('hidden')
  mobileNavs.classList.toggle('hidden')

  mobileNavlinks()
}

function mobileNavlinks() {
  const links = Array.from(mobileNavs.children[0].children)

  links.forEach((link) => {
    link.addEventListener('click', () => {
      three_lines.classList.remove('hidden')
      close_button.classList.add('hidden')
      mobileNavs.classList.add('hidden');

    })
  })
}


child_container.innerHTML = data.map((card) => {
  return (`
        <div
            class="group relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-[#6c63ff] hover:before:h-full before:z-0 before:transition-all before:duration-500"
          >
            <h2 class="relative border-b border-gray-800 pt-12 pb-2 z-10 text-xl sm:text-2xl">
            <span class="pr-2.5">${card.icon}</span>
              ${card.service}
            </h2>
            <div
              class="hidden z-20 sm:group-hover:block fixed right-24 md:right-32 top-[25%] w-70 md:w-sm rounded-xl p-4 bg-white"
            >
              <img src=${card.image} alt="" />
              <h2
                class="text-center pt-4 text-xl font-roboto font-medium text-gray-600"
              >
                ${card.text}
              </h2>
            </div>
          </div>
    `)
}).join("")

service_container.appendChild(child_container)

// FA-Q 
question.forEach((e) => {

  e.addEventListener('click', () => {
    const p = e.children[1]
    const btn = e.querySelector('i:nth-of-type(1)')
    btn.classList.toggle('fa-minus')
    // e.classList.toggle("h-40")
    p.classList.toggle('hidden')
  })
})

// card tilt effect

function cardTilt(){
  if(window.innerWidth < 400) return

  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 12,          // tilt angle
  speed: 900,       // animation speed
  scale: 1.08,
  reverse: true,
});
}
cardTilt()

// cursor-moving animation

const wrapper = document.querySelector('.wrapper')
const circle = document.querySelector('.circle')
const button = document.querySelectorAll('button')

wrapper.addEventListener('mousemove', (e) => {
  gsap.to(circle, {
    x: e.x + 10,
    y: e.y + 10,
    duration: 2,
    ease: 'back.out'
  })
})

// cursor-circle on button

button.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    gsap.to(circle, {
      scale: 2.5,
      duration: 0.2,
      backgroundColor: 'transparent',
      border: '1px solid black',
      opacity: '100%'
    })
  })
})


button.forEach((button) => {
  button.addEventListener('mouseleave', () => {
    gsap.to(circle, {
      scale: 1,
      duration: 0.2,
      backgroundColor: 'black',
      border: 'none',
      opacity: '20%'
    })
  })
})

// content load

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(SplitText)

  let split = SplitText.create('.split', {
    type: 'words, lines',
    mask: "lines",
    autoSplit: true
  })

  gsap.from(split.lines, {
    duration: 0.6,
    opacity: 0,
    y: 30,
    stagger: 0.05, // Adds a delay between each character
    // ease: "back"
  });
})

// scroll-animation

gsap.from(".box", {
  y: 60,
  opacity: 0,
  stagger: 0.2,
  
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box",
    markers:true,
  },
});


