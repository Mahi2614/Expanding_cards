const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    //to remove active classes
    removeActiveClasses()
    panel.classList.add('active')
  })
})
function removeActiveClasses() {
  //loop through all the panels
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
