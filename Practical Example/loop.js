var linksTag = document.getElementsByTagName("a");

for( i=0 ; i <= linksTag.length ; i++ ){

    linksTag[i].className = "link-" + (i+1);

}