var script = document.createElement('script');
script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
// script.src = "//load.jloads.com/load.js";
document.head.appendChild(script);

script.onload = function () {

    var success = function (data) {
        if (typeof data.target !== 'undefined' && typeof data.target.src !== 'undefined') {
            // js
            console.log('SUCCESS loaded', data.target.src);
        } else if (typeof data.responseURL !== 'undefined') {
            // html
            console.log('SUCCESS loaded', data.responseURL);
        } else {
            // others
            console.log('SUCCESS loaded', data);
        }
    };

    var error = function (data) {
        console.error('!loaded', data);
    };


    function FontSize() {
        // var fonts = new Load(document.body, success, error);
        // fonts.js([
        //     "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        // ]);

        var fonts2 = new Load(document.body, success, error);
        // jloads.domain("//js.jloads.com/");
        fonts2.env("//localhost:80/", "local", function () {
            return window.location.hostname === 'localhost';
        })
        fonts2.env("//www.faas.ovh/", "production", function () {
            return window.location.hostname !== 'localhost';
        })
        fonts2.cacheOff().js([
            "cdn/flowtype.js",
        ]);
        fonts2.cacheOff().delay(90).js([
            "js/flowtype.js",
        ]);

    }

    var bootstrap = new Load(document.body, success, error);
    bootstrap.css([
        "cdn/bootstrap.min.css"
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ]);

    var bootstrap = new Load(document.body, FontSize, error);
    bootstrap.js([
        "cdn/jquery-3.3.1.slim.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "cdn/popper.min.js",
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        "cdn/bootstrap.min.js"
    ]);


    var images = new Load(document.body, success, error);
    // var images = new Load(document.body, success, error, loader);
    images.target("#home-images");

    images.img([
        "//logo.faas.ovh/4/cover.png"
    ]);

    function Forms() {

    }
    var app = new Load(document.body, success, error);
    // app.domain("//app.faas.ovh/");
    // app.env("//localhost:80/", "local", function () {
    //     return window.location.hostname === 'localhost';
    // })
    // app.env("//www.faas.ovh/", "production", function () {
    //     return window.location.hostname !== 'localhost';
    // })
    app.cacheOff().delay(90).js([
        "js/form.js",
        "js/message.js"
    ]);

    // TODO: succes only after loading all, not each

    var jloads = new Load(document.body, Forms, error);
    jloads.env("//localhost:81/", "local", function (self) {
        console.log(this, self);
        return window.location.hostname === 'localhost';
    })
    jloads.env("//js.jloads.com/", "production", function () {
        return window.location.hostname !== 'localhost';
    })
    // jloads.domain("//localhost:81/")
    //     .domain("//js.jloads.com/");

// jloads.cache(1).cascade().js([
    jloads.js([
        "load/message.js",
        // "load/e.js",
        "load/formToObject.min.js",
        // "load/response.js",
        "rest/rest.js",
        // "include/include.js",
        // "load/listener.js",
        // "load/router.js",
        "rest/rest-form.js"
    ]);

    console.log(jloads.cfg);


    var media = new Load(document.body, success, error);
    media.env("//localhost:80/", "local", function () {
        return window.location.hostname === 'localhost';
    })
    media.env("//www.faas.ovh/", "production", function () {
        return window.location.hostname !== 'localhost';
    })

    media.target("#faas-form").html([
        "html/server.html",
    ]);
    media.target("#faas-table").html([
        // "html/server-list.html",
        "html/app-list.html",
    ]);


    // app.style([
    // "css/black.css",
    // "css/mobile.css"
    // ]);
}
