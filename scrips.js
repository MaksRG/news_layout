function showSidebar() {
    let sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    document.querySelector('.background').style.display = 'block'
  }
  function hideSidebar() {
    let sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    document.querySelector('.background').style.display = 'none'
  }