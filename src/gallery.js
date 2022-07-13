items.onmouseover = items.onmouseout = handler;

        function handler(event) {

            if (event.type == 'mouseover') {
                photo_items = document.getElementsByClassName("photo-item");
                for (i = 0; i < photo_items.length; i++) {
                    if (event.target.parentNode.parentNode.parentNode != photo_items[i]) {
                        photo_items[i].style.opacity = "0.3";
                    }
                }
            }
            if (event.type == 'mouseout') {
                photo_items = document.getElementsByClassName("photo-item");
                for (i = 0; i < photo_items.length; i++) {
                    photo_items[i].style.opacity = "1";
                }
            }
        }