(function() {
    const listElements = document.querySelectorAll('.navbarItem--show');
    const list = document.querySelector('navbarLinks');
    const menu = document.querySelector('navbarHambur');

    const addClick = ()=> {
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('.navbarItem--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });
    }

    const deleteStyleHeight = ()=> {
        listElements.forEach(element =>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('.navbarItem--active');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('navbarLinks--show'))
                list.classList.remove('navbarLinks--show');
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('navbarLinks--show'));

})();