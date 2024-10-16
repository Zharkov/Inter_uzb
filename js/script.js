//Плавное появдение блоков
    // Выбираем все элементы с классом "box"
    const boxes = document.querySelectorAll('.box');

    // Настройки для наблюдателя
    const options = {
        root: null, // Наблюдаем за всем viewport'ом
        threshold: 0.1 // Элемент считается видимым, когда 10% его поверхности появляется в зоне видимости
    };

    // Создаем функцию, которая будет вызываться, когда элемент попадает в зону видимости
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс visible, когда элемент появляется в зоне видимости
                entry.target.classList.add('visible');
                // Можно прекратить наблюдение за этим элементом после того, как он стал видимым
                observer.unobserve(entry.target);
            }
        });
    };
        // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
    const observer = new IntersectionObserver(callback, options);

    // Запускаем наблюдатель для каждого элемента
    boxes.forEach(box => {
        observer.observe(box);
    });
    const links = document.querySelectorAll('a.menu-item');

    links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('page-exit'); // Добавляем класс для анимации выхода
        const targetUrl = link.getAttribute('href');

        setTimeout(() => {
            window.location.href = targetUrl; // Переход на новую страницу после анимации
        }, 1000); // Задержка для завершения анимации
    });
    });


// Загрузка хедера и футера из отдельного файла
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Загрузка хедера и футера
loadHTML('header.html', 'header');
loadHTML('footer.html', 'footer');


//Счетчик 
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
    }
    function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
    countNum: element.html()
    }).animate({
    countNum: maxval
    }, {
    //duration 50 seconds
    duration: 5000,
    easing: 'linear',
    step: function() {
    element.html(Math.floor(this.countNum) + html);
    },
    complete: function() {
    element.html(this.countNum + html);
    }
    });
    }
    }
    //When the document is ready
    $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
    //Checking if each items to animate are
    //visible in the viewport
    $("h6[data-max]").each(function() {
    inVisible($(this));
    });
    })
    });



    //Выпадающее меню
            document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.querySelector('.nav-toggle');
            navToggle.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    
        $('.nav-toggle').on('click', function(){
            $('#menu').toggleClass('active');
          });

        
   