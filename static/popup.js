chrome.tabs.getSelected(null, function(tab)
 {
   link = tab.url;
    var alan=document.getElementById("link").innerHTML;
    link = link.split('.')

    if (link[1] == "instagram") {
      urls = tab.url;
      link = urls.split('/')

      if (link[3]=="p") {
        var metin = "Lutfen fotografin sag ust kosesindeki zaman ifadesine tiklayin."
        var img = "https://www.instagram.com/p/" + link[4]
        var imglink = img + "/media/?size=l"
        var imglinklight = img + "/media/?size=t"

        document.getElementById("link").innerHTML =
          "<img src='"+ imglinklight +"'>"  +
          "<a  target='_blank' href='" + imglink + "'download>" +
          "  <button type='button' id='button' name='button'>Save to Img</button> </a>";

      } else {
        var metin = "Lutfen fotografin sag ust kosesindeki zaman ifadesine tiklayin."
        document.getElementById("link").innerHTML= metin;
      }
    }
 }
);
