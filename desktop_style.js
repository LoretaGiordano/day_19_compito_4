window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

window.addEventListener('scroll', () => {
  const button_nav = document.getElementById('button_nav')
  if (window.scrollY > 50) {
    button_nav.classList.add('scrolled')
  } else {
    button_nav.classList.remove('scrolled')
  }
})
