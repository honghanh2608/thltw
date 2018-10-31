<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">


        <title>Laravel</title>

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
    </body>
</html>
