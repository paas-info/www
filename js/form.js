setTimeout(function () {

        var response = function (xhr) {
            console.log("xhr", xhr);
            // console.log("b", b);
            // console.log("c", c);
            // alert("OK RESPONSE");
            AddMessage(xhr.status);
            AddMessage(xhr.statusText);
            AddMessage(xhr.response);
        }

        var success = function (data) {
            // console.log('FORM success', data);
            console.table('FORM success', data);
        };
        var error = function (data) {
            console.error('!FORM', data);
        }

        var form = new RestForm('form', response, error, success);

        form.cfg({
            "target": "form",
            "url": "//php.jloads.com/index.php",
            "method": "GET"
        });

        form.url((window.location.hostname === 'localhost') ? "//localhost:8000/index.php" : "//php.jloads.com/index.php");

        form.submit();
    },
    400
);
