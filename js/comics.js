var comicDate = new Date(new Date());

$(document).ready(function(){
  getComic("http://www.gocomics.com/garfield");
  getGroup();
  $(".more").click(getGroup);
});

function getGroup(){
  var x = 0;
  var intervalID = setInterval(function () {

    getMore();
    if (++x === 10) {
      $(".comics").show();
      setTimeout(function(){
        $("html, body").animate({ scrollTop: "0px" });
      },300);
      window.clearInterval(intervalID);
    }
  }, 200);
}

function getComic(url){
  $.post("getURL.php",{url:url},function(data){
    var image = urlify(data);
    //$("#comicIMG").attr('src',image);
    $("#comics").prepend("<img src='"+image+"' class='comics img-responsive' style='display:none'></img>");
  });
}

function getMore(){
  comicDate = new Date(comicDate - 24*60*60*1000);
  var date = getymd(comicDate);
  var url = "http://www.gocomics.com/garfield/" + date;
  getComic(url);
}

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var i=0;
    var imgURL;
    text.replace(urlRegex, function(url) {
      if(url.indexOf("assets.amuniversal") != -1){
        i+=1;
        if(i == 4){
          url = url.split('"')[0];
          //console.log(url);
          imgURL = url;
        }
      }
    })

    return imgURL;
}

function getymd(date) {
    
    var formattedTime = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return formattedTime;

}
