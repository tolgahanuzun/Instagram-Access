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
        document.getElementById("link").innerHTML= "<a target='_blank' href='https://www.instagram.com/p/" + link[4] + "/media/?size=l'>" + "Clicks</a>";


      } else {
        var metin = "Lutfen fotografin sag ust kosesindeki zaman ifadesine tiklayin."
        document.getElementById("link").innerHTML= metin;
      }





    }

 }
);
