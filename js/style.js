(function() {
    var menu = document.querySelector('.nav-m');
    document.querySelector('.header__bar button').addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.add('active');
    });
    document.querySelector('.close').addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('active');
    });

    var list = document.querySelectorAll('#header__nav nav a');
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.remove('active');
            var nameDiv = e.target.getAttribute('data-attr');
            if(nameDiv) {
                var index = document.querySelector('#' + nameDiv).offsetTop;
                window.scrollBy({ 
                    top: index, 
                    left: 0, 
                    behavior: 'smooth' 
                });
            }
        });
    }
 })();