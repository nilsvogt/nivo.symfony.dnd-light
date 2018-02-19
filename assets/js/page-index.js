(function(){
    'use strict';

    document.addEventListener('click', function(e){
        let target = e.target;

        if (!target.hasAttribute('data-blink')) {
            return;
        }
        
        request('/foo', function(){
            console.log(arguments);
        });
    });

    function request(url, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState !== 4 || this.status !== 200) {
                console.error(this);
                return;
            }

            callback(this.responseText);
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}());