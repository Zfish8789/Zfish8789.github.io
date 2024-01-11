<script type="text/javascript" src="data.json"></script>
var bounties = JSON.parse(localBounties);
for(x in bounties){
    var StringPart = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 877">'+
    '<rect x=0 y=0 width="200" height="877" style="fill:rgb(92,156,212);" />'+
    '<rect x=430 y=0 width="250" height="140" style="fill:rgba(146,208,80);" />'+
    '<rect x=430 y=140 width="250" height="800" style="fill:rgb(250,250,250);" />'+
    '<polygon points="0,877 170,140 0,0 510,0 680,140 510,877" style="fill:grey"/>';


    for(i in  x.Difficutly){
    StringPart = StringPart + '<polygon points="'+500-(i-1)+',20 '+630-(i-1)+',130 '+570-(i-1)+',130 '+440-(i-1)+',20" style="fill:#000000"/>'+
    '<polygon points="'+500-(i-1)+',25 '+620-(i-1)+',125 '+570-(i-1)+',125 '+450-(i-1)+',24" style="fill:#b35b24"/>'
    };

    StringPart = StringPart + 
    '<text x="190" y="190" style="font:SF Distant Galaxy; font-size:50">'+
        x.Title+
    '</text>'+

    '<text x="75" y="650" style="font:SF Distant Galaxy; font-size:30">'+
        '<tspan x="95" y="650">'+ x.row1 +'</tspan>'+
        '<tspan x="95" y="690">'+ x.row2 +'</tspan>'+
        '<tspan x="95" y="730">'+ x.row3 +'</tspan>'+
        '<tspan x="95" y="770">'+ x.row4 +'</tspan>'+
    '</text>'+

    '<text x="650" y="850" style="font:SF Distant Galaxy; font-size:70" transform="rotate(-90 650 850)">'+
    x.Price+
    '</text>'+

    '<text x="10" y="874" style="font:SF Distant Galaxy; font-size:25">'+
        x.Contracter+
    '</text>'+
    '</svg>'
}


document.getElementById("BountyBoard").innerHTML = document.getElementById("BountyBoard").innerHTML + StringPart
