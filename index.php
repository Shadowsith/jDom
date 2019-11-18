<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="./jdom.js"></script>
    <script>
        $.ready((e) => {
            $.click('#btn', () => {
                alert($.id('btn').value);
            });
            $.post({
                url: './back.php', 
                data: {test: 'dolf', blub: 'moep'},
                success: (response) => { },
                error: (response) => { }
            });

            $.get({
                url: 'get.txt',
                responseType: 'text',
                success: (res) => { alert(res); },
                error: (error) => { alert('error') }
            });

        });
    </script>
</head>

<body>
    <div class="container">
        <h1 class="mt-5">Test-Form</h1>
        <hr>
        <form id="formular">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>First Name</label>
                        <input id="first" class="form-control">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>Last Name</label>
                        <input id="last" class="form-control">
                    </div>
                </div>
            </div>
            <input id="btn" class="btn btn-primary" type="submit" value="Absenden">
        </form>
    </div>
</body>

</html>