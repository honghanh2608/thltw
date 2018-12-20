<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="icon" href="assets/img/logo.png">
        <title>HustBlog</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Bootstrap -->
        <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
        <!-- Styles -->
        <link rel="stylesheet" href="css/app.css" type="text/css">
        
    </head>
    <body>
        <div id="example"></div>




        <script src="js/app.js"></script>
        <script>
            $(document).ready(function() {
                var user;
                $.get('api/blog/author/getCurrentAuthor',function(data){
                    Echo.private('App.User.' + data.user_id)
                    .notification((notification) => {
                        console.log(notification);
                });
                });     
            }); 
        </script>
    </body>
</html>
