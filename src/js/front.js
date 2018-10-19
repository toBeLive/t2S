window.onload = function() {

    /*choose the language of the site*/
    var langSelect = document.getElementById("input__flags"),
        langFlag = document.getElementById("flag");

    function changeFlagLanguage(lngVal) {
        switch (lngVal) {
            case "ukr":
                langFlag.style.backgroundPosition = "-138px -138px";
                break;
            case "rus":
                langFlag.style.backgroundPosition = "-73px -138px";
                break;
            case "eng":
                langFlag.style.backgroundPosition = "-104px -73px";
        }
    }
/*
    langSelect.addEventListener("change", function() {
        changeFlagLanguage(langSelect.value);
    });
*/
    /*select the main menu tab*/
    /*
    var headerMenu = document.getElementById("header__menu"),
        currentTab = headerMenu.querySelectorAll("a");
        */
    /*
        headerMenu.addEventListener("click", function() {
            //changeCurrentTab(currentTab);
            console.log("1");
        });
        */
    /*
    function changeCurrentTab() {
        for (i = 0; i < currentTab.length; i++) {
            if (currentTab[i].classList == "selected") {
                currentTab[i].classList.remove("selected");
                console.log("selected remove");
            }
        }
    }

    ////
    headerMenu.addEventListener("click", function(event) {
        var target = event.target; // где был клик?
        // цикл двигается вверх от target к родителям до ul
        while (target != this) {
            if (target.tagName == 'A') {
                // нашли элемент, который нас интересует!
                console.log("3; " + target.classList + " - " + target.tagName);
                selectedTab(target);
                return;
            }
            target = target.parentNode;
        }
    });
*/
    function selectedTab(node) {
        changeCurrentTab();
        node.classList.add('selected');
    }

    ////
    /*автопереключение слайдшоу*/
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 6000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

}