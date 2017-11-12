document.open();

document.write(
    '<link href="css/bootstrap.min.css" rel="stylesheet">',
    '<script type="text/javascript" src="js/script.js"></script>',
        '<!--[if lt IE 9]>',
            '<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>',             
            '<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>',
        '<![endif]-->',
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>',
    '<script src="js/bootstrap.min.js"></script>'
);

document.close();