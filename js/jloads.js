var script = document.createElement('script');
script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
document.head.appendChild(script);

script.onload = function () {

    var success = function (data) {
        console.log('loaded', data);
    };
    var error = function (data) {
        console.error('!loaded', data);
    };


    var images = new Load(document.body, success, error);
    // var images = new Load(document.body, success, error, loader);
    images.target("#home-images");

    images.img([
        "//logo.faas.ovh/4/cover.png"
    ]);


    var jloads = new Load(document.body, success, error);

    jloads.env("//localhost:80/", "local", function () {
        return window.location.hostname === 'localhost';
    })

    jloads.env("//js.jloads.com/", "production", function () {
        return window.location.hostname !== 'localhost';
    })

// console.log(
//     'loada',loada
// );

// jloads.cache(1).cascade().js([
    jloads.cacheOff().js([
        "load/message.js",
        "load/e.js",
        "load/formToObject.min.js",
        "load/response.js",
        "rest/rest.js",

        "include/include.js",

        "load/listener.js",
        "load/router.js",
        "rest/rest-form.js"
    ]);


    var app = new Load(document.body, success, error);
    app.env("//localhost:3001/", "local", function () {
        return window.location.hostname === 'localhost';
    })
    app.env("//app.faas.ovh/", "production", function () {
        return window.location.hostname !== 'localhost';
    })
    app.cacheOff();

    app.js([
        "js/form.js",
        "js/faas-message.js"
    ]);

    // app.style([
        // "css/black.css",
        // "css/mobile.css"
    // ]);

    var bootstrap = new Load(document.body, success, error);
    bootstrap.css([
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ]).js([
        "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    ]);

    // var fonts = new Load(document.body, success, error);
    // fonts.js([
    //     "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    // ]);

    var fonts2 = new Load(document.body, success, error);
    fonts2.delay(100).js([
        "/js/flowtype.js",
        "/js/flowtype2.js",
    ]);

    var media = new Load(document.body, success, error);
    media.env("//localhost:3001/", "local", function () {
        return window.location.hostname === 'localhost';
    })
    media.env("//app.faas.ovh/", "production", function () {
        return window.location.hostname !== 'localhost';
    })
    // media.target("#home-plugins");
    // media.html([
    //     // "html/messages.html",
    //     "html/server.html",
    //     "html/list.html",
    //     // "html/POST.html",
    //     // "html/DELETE.html"
    // ]);
    media.target("#faas-form").html([
        "html/server.html",
    ]);
    media.target("#faas-table").html([
        // "html/server-list.html",
        "html/app-list.html",
    ]);


}
