function showRandom()
{
    var max=parseInt(document.getElementById('max').value);
    var min=parseInt(document.getElementById('min').value);
    var randoms=Math.floor(Math.random()*(max-min))+min;
    document.getElementById('random').innerHTML=randoms;
}

