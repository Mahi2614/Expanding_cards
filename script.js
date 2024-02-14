const panels = document.querySelectorAll('.panel')
//on clicking event must update
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
