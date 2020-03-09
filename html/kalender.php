<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Document</title>
</head>
<body>

<header> 
    <button class="DateButton"> &#8592 Previous</button>
    <span id="headertext"></span>
    <button class="DateButton">Next &#8594</button>

</header>



<form action="welcome.php" method="post" id="myform">
        Name:<br>
        <input type="text" id ="myinput" name="name"><br><br>

        Message:<br>
        <textarea id="mytextarea" rows="4" cols="50"> ddfd</textarea> <br><br>       

        <input type="submit"value="Maak Afspraak!">
</form>

<div id="openit"></div>
<div class="grid-container">
    <div class="grid-item-header">Maandag</div>
    <div class="grid-item-header">Dinsdag</div>
    <div class="grid-item-header">Woensdag</div>
    <div class="grid-item-header">Donderdag</div>
    <div class="grid-item-header">Vrijdag</div>
    <div class="grid-item-header">Zaterdag</div>
    <div class="grid-item-header">Zondag</div>

    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>  
    <div class="grid-item"></div>
  </div>


<script src="../javascript/realkalender.js"></script>
</body>
</html>