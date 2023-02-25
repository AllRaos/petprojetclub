window.addEventListener('scroll', e=>{
   let navbar=document.getElementById('navbar').classList;
   let active_class="navbar_scrolled";
   let active_back="navbar_back";
    if(scrollY>75) {
        navbar.add(active_class);
        }
    else {
        navbar.remove(active_class); 
        }
})