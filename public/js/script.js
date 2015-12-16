var result = null;
var reviewperpage = 10;
var baseUrl = 'https://movie-senti-predict-master.mybluemix.net/api'; // connect to bluemix
//var baseUrl = 'http://localhost:3000/api'; //set to this if you have a local server

function submitMood() {
	var input = document.getElementById("moodfrm");
	var mood = input.elements[0].value; //mood
	var targetMood = {};
	targetMood[mood] = 1.0;
  $.ajax({
    url: baseUrl + '/recommend?userid=' + userId + '&token=' + accessToken,
    data: {
    	emotions: JSON.stringify(targetMood)
    },
		type: 'POST',
    success: function (response) {
			result = response;
			console.log(result);
    	handleSubmitMood();
    }
  });
}

function handleSubmitMood() {
	console.log(result);

	var $movieSec = $("#movieSec");
	$movieSec.html(layoutMovies());

	for (var i = 0; i < result.rc.length; ++i) {
    	createColumnChart(result.rc[i].user_emotions, "sentiment" + i, 'Your Sentiment for "' + result.rc[i].name + '"');
    }

    createChart(result.rc[0].user_personality, "personality", null);
}

var layoutMovies = function() {
	var htmlText = "";

	for (var i = 0; i < result.rc.length; ++i) {
		var movie = result.rc[i];
		var name = movie.name;
		var imageurl = movie.imageurl;
		var runtime = movie.runtime;
		var date = movie.rlsdate;
		var summary = movie.summary;
		var genre = movie.genre;
		var score = movie.avguserscore;

		htmlText += '<div class="article"><h2><span>' + name + '</span></h2>' 
				+ '<p class="infopost">' + runtime + ' | ' +  genre + ' | <span class="date"> ' + date + '</span> <a class="com">Rating <span>' + score + '</span></a></p><div class="clr"></div>' 
				+ '<div class="img" id="movie-img" data-name="'+ name +'"><img src="' + imageurl + '" width="200" height="278" alt="" class="fl" referrerpolicy="no-referrer"/></div>'
				+ '<div class="post_content"><p>' + summary + '</p>' + '<div id="sentiment' + i + '" style="width: 410px; height: 280px;"></div></div>'
				+ '<div class="clr"></div><p class="spec"><a href="movie.html" class="rm" onclick="readMore(' + i +')">Read more</a></p><div class="clr"></div></div>';
    }
    return htmlText;
};

var createChart = function(jsondata, id, title) {
	var arrdata = [["Type", "Value"]];
	Object.keys(jsondata).forEach(function(key) {
		var temp = [key, jsondata[key]];
		arrdata.push(temp);
	});
	var data = new google.visualization.arrayToDataTable(arrdata);

	var options;
	if (title == null) {
		options = {
			legend:{alignment: "center"},
			backgroundColor:"transparent",
			chartArea:{left:5,top:5, width:"100%",height:"100%"},
		};
	} else {
		options = {
			title:title,
			legend:{alignment: "center"},
			backgroundColor:"transparent",
		};
	}

	var chart = new google.visualization.PieChart(document.getElementById(id));
	chart.draw(data, options);
};

var createColumnChart = function(jsondata, id, title) {
	var arrdata = [["Type", "Value", { role: "style" }]];
	var colors = {'anger':'red', 'anticipation':'orange', 'disgust':'purple',
		'fear':'black', 'joy':'green', 'sadness':'grey', 'surprise':'yellow', 'trust':'blue'};
	Object.keys(colors).forEach(function(key) {
		var temp = [key, jsondata[key], colors[key]] ;
		arrdata.push(temp);
	});
	var data = new google.visualization.arrayToDataTable(arrdata);

	var options;
	if (title == null) {
		options = {
			backgroundColor:"transparent",
			chartArea:{left:5,top:5, width:"100%",height:"100%"},
			vAxis: {maxValue : 0.9}
		};
	} else {
		options = {
			title:title,
			backgroundColor:"transparent",
			vAxis: {maxValue : 0.9}
		};
	}

	var chart = new google.visualization.ColumnChart(document.getElementById(id));
	chart.draw(data, options);
};

function readMore(movieId) {
	sessionStorage.setItem('movieResult', JSON.stringify(result.rc[movieId]));
}

function submitMovie() {
	var input = document.getElementById("moviefrm");
	var movie = input.elements[0].value; //movie: not empty, no size limit

  	$.ajax({
   	 	url: baseUrl + '/predict',
    	data: {
    		token: accessToken,
				userid: userId,
    		moviename: movie
   	 	},
    	success: function (response) {
				result = response;
    		handleSubmitMovie(1);
    	}
  	});
}

function handleSubmitMovie(pagenum) {
	console.log(result);

	var $reviewSec = $("#reviewSec");
	var htmlText = "";

	var name = result.name;
	var imageurl = result.imageurl;
	var runtime = result.runtime;
	var date = result.rlsdate;
	var summary = result.summary;
	var genre = result.genre;
	var score = result.avguserscore;

	htmlText += '<div class="article"><h2><span>' + name + '</span></h2>' 
			+ '<p class="infopost">' + runtime + ' | ' +  genre + ' | <span class="date"> ' + date + '</span> <a class="com">Rating <span>' + score + '</span></a></p><div class="clr"></div>' 
			+ '<div class="img" id="movie-img" data-name="'+ name +'"><img src="' + imageurl + '" width="200" height="278" alt="" class="fl" referrerpolicy="no-referrer"/></div>'
			+ '<div class="post_content"><p>' + summary + '</p>' + '<div id="att"></div></div>'
			+ '<div class="clr"></div>'
			+ '<div class="article"><p><h2><span>Sentiment for Movie "' + result.name + '"</span></h2></p><div id="sentiment"></div>'
			+ '<div><p></p><p></p><h2><span>Reviews for Movie "' + name + '"</h2><div class="clr"></div></div>'
			+ layoutReviews(pagenum)
			+ layoutPages(pagenum)
			+ '</div>';

	$reviewSec.html(htmlText);

	createColumnChart(result.user_emotions, "sentiment", "Your sentiment for this movie");
	createChart(result.user_att, "att", "Your attitude for this movie");
	var rangemin = (pagenum - 1) * reviewperpage;
	var rangemax = rangemin + reviewperpage;
	for (var i = rangemin; i < rangemax && i < result.reviews.length; i++) {
    	createChart(result.reviews[i].personality, "reviewpersonality" + i, "User Personality");
		createColumnChart(result.reviews[i].emotions, "review" + i, 'User Sentiment for "' + result.name + '"');
    }

    createChart(result.user_personality, "personality", null);
}

var layoutReviews = function(pagenum) {
	var htmlText = "";

	var rangemin = (pagenum - 1) * reviewperpage;
	var rangemax = rangemin + reviewperpage;
	for (var i = rangemin; i < rangemax && i < result.reviews.length; i++) {
		var name = result.reviews[i].name;
		var date = result.reviews[i].date;
		var review = result.reviews[i].review;

		htmlText += '<div class="comment"><a href="#"><img src="images/userpic.gif" width="40" height="40" alt="" class="userpic" /></a>'
            	+ '<p><a href="#">' + name + '</a> Says:<br />' + date + '</p>' + '<p>' + review + '</p>'
            	+ '<div class="reviewcontainer"><div id="reviewpersonality' + i +'" class="reviewchart"></div><div id="review' + i + '" class="reviewchart"></div></div>'
            	+ '<div style="clear: both;"></div></div>';
    }
    return htmlText;
};

var layoutPages = function(pagenum) {
	var maxPage = result.reviews.length / reviewperpage;
	if (result.reviews.length % reviewperpage != 0) {
		maxPage++;
	}

	var htmlText = '<p class="pages">';
	for (var i = 1; i <= maxPage; i++) {
		if (pagenum == i) {
			htmlText += '<span id="p' + i + '" onclick="handleSubmitMovie(' + i + ')">' + i + '</span>';
		} else {
			htmlText += '<a href="#" id="p' + i + '" onclick="handleSubmitMovie(' + i + ')">' + i + '</a>';
		}
	}
	htmlText += '</p>';

	return htmlText;
};

// <![CDATA[
$(function() {
  // Slider
  $('#coin-slider').coinslider({width:960,height:360,opacity:1});

  // Radius Box
  $('.menu_nav ul li a, .content p.pages span, .content p.pages a').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  $('.content .mainbar img.fl, p.infopost, .searchform, .content .sidebar .gadget').css({"border-radius":"10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  //$('.menu_nav').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});
});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .menu_nav ul li a, .content .mainbar a.rm', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

// ]]>