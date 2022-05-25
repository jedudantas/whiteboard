<!DOCTYPE html>
<html manifest="manifest.aspx" lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log</title>
    <link rel="Stylesheet" href="global-css.aspx" type="text/css">
</head>
<body>
    <div id="container">
        <h1>Caching Events</h1>
        <div id="eventLogContainer">
            <h2>Event Log</h2>
            <ul id="log"></ul>
        </div>
    </div>
    
</body>
<script src="scripts/jquery-1.5.1.min.js" type="text/javascript"></script>
<script src="scripts/offline.js" type="text/javascript"></script>
<script>
    $(function(){
        window.applicationCache.onupdateready = function (e){
            logEvent("Update Ready");
            logEvent("Swapping Cache");
            applicationCache.swapCache();
        }
    });
</script>
</html>