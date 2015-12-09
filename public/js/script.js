var result = null;
var reviewperpage = 2;

// TO DO
function submitMood() {
	var input = document.getElementById("moodfrm");
	var acct = input.elements[0].value; //accnt: not empty, no size limit
	var mood = input.elements[1].value; //mood: AFRIAID,AMUSED,ANGRY,ANNOYED,DONT_CARE,HAPPY,INSPIRED,SAD

  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/posts/1',
    data: {
    	account: acct,
    	mood: mood
    },
    success: function (response) {
    	result = {
		    "rc": [
		        {
		            "name": "The Babadook",
		            "imageurl": "http://static.metacritic.com/images/products/movies/6/2c6ac6bb1c737df05848f2dbbb83149a-98.jpg",
		            "url": "http://www.metacritic.com/movie/the-babadook",
		            "rlsdate": "2014-11-28",
		            "score": "86",
		            "summary": "Six years after the violent death of her husband, Amelia (Essie Davis) is at a loss. She struggles to discipline her ‘out of control’ 6 year-old, Samuel (Noah Wiseman), a son she finds impossible...",
		            "rating": "Not Rated",
		            "cast": "Barbara West, Daniel Henshall, Essie Davis, Hayley McElhinney, Noah Wiseman",
		            "genre": "Drama, Thriller, Horror",
		            "avguserscore": "8.3",
		            "runtime": "93 min",
		            "reviews": [
		                {
		                    "name": "Marick",
		                    "active": true,
		                    "score": "4",
		                    "date": "2015-06-30",
		                    "total_ups": "0",
		                    "total_thumbs": "1",
		                    "review": "I expected to be more horror. He had some scary moments but not quite succeeded .",
		                    "personality": {
		                        "Openness": 0.17173901423580606,
		                        "Conscientiousness": 0.007874572695745307,
		                        "Extraversion": 0.2683292531332508,
		                        "Agreeableness": 0.3885050429493517,
		                        "Emotional range": 1
		                    },
		                    "emotions": {
		                        "anger": 0.5,
		                        "anticipation": 0.5,
		                        "disgust": 0.5,
		                        "fear": 0.5,
		                        "joy": 0,
		                        "negative": 0.5,
		                        "positive": 0,
		                        "sadness": 0.5,
		                        "surprise": 0.5,
		                        "trust": 0
		                    }
		                },
		                {
		                    "name": "BogKid",
		                    "active": true,
		                    "score": "8",
		                    "date": "2014-12-11",
		                    "total_ups": "0",
		                    "total_thumbs": "1",
		                    "review": "First, this is an excellent film. BUT, possibly it was over-hyped. Maybe I expected something different. But, I found some boredom creeping in around the half-way point. I had decided what my opinion of the plot happenings was. Not entirely original, but extremely well done nevertheless.\rNot enough praise can be given to the acting talents of the two leads. The young boy,First, this is an excellent film. BUT, possibly it was over-hyped. Maybe I expected something different. But, I found some boredom creeping in around the half-way point. I had decided what my opinion of the plot happenings was. Not entirely original, but extremely well done nevertheless.\rNot enough praise can be given to the acting talents of the two leads. The young boy, especially, turned in the best child performance I have ever seen in a horror movie. He was actually frightening himself, even in his quiet moments. Most impressive. It will be interesting to see if he moves forward to a full acting career.",
		                    "personality": {
		                        "Openness": 0.7853316806219823,
		                        "Conscientiousness": 0.14768080929105737,
		                        "Extraversion": 0.24568823092723002,
		                        "Agreeableness": 0.22639892582162163,
		                        "Emotional range": 0.818052031917083
		                    },
		                    "emotions": {
		                        "anger": 0.022727272727272728,
		                        "anticipation": 0.18181818181818182,
		                        "disgust": 0.06818181818181818,
		                        "fear": 0.022727272727272728,
		                        "joy": 0.20454545454545456,
		                        "negative": 0.11363636363636363,
		                        "positive": 0.3181818181818182,
		                        "sadness": 0.09090909090909091,
		                        "surprise": 0.06818181818181818,
		                        "trust": 0.13636363636363635
		                    }
		                },
		                {
		                    "name": "Nazgulero",
		                    "active": true,
		                    "score": "0",
		                    "date": "2015-05-10",
		                    "total_ups": "4",
		                    "total_thumbs": "15",
		                    "review": "There really is nothing scary about this movie. The one thing that scares the living hell out of you is the kid. You must feel sorry for the mother, and during the entire movie, you hope that this annoying brat gets eaten alive by a terrible monster.",
		                    "personality": {
		                        "Openness": 0.9253216341008125,
		                        "Conscientiousness": 0.1655503396536938,
		                        "Extraversion": 0.19864092882958306,
		                        "Agreeableness": 0.053362768156501705,
		                        "Emotional range": 0.5697382624526012
		                    },
		                    "emotions": {
		                        "anger": 0.2,
		                        "anticipation": 0.2,
		                        "disgust": 0.13333333333333333,
		                        "fear": 0.2,
		                        "joy": 0.2,
		                        "negative": 0.3333333333333333,
		                        "positive": 0.2,
		                        "sadness": 0.2,
		                        "surprise": 0.06666666666666667,
		                        "trust": 0.2
		                    }
		                }
		            ],
		            "user_personality": {
		                "Openness": 0.4352748825087858,
		                "Conscientiousness": 0.060507559539581736,
		                "Extraversion": 0.17283902318678518,
		                "Agreeableness": 0.22757972057690426,
		                "Emotional range": 0.9643952156261673
		            },
		            "user_emotions": {
		                "anger": 0.20062887624923675,
		                "anticipation": 0.16964748224557347,
		                "disgust": 0.2059021819467206,
		                "fear": 0.24631993315980588,
		                "joy": 0.12336932420707605,
		                "negative": 0.30295350107651275,
		                "positive": 0.22705806741861884,
		                "sadness": 0.19329669976541664,
		                "surprise": 0.21401812397570613,
		                "trust": 0.12306629390404575
		            }
		        },
		        {
		            "name": "12 Years a Slave",
		            "imageurl": "http://static.metacritic.com/images/products/movies/2/3910c2e8cfefeb21fcd6079451336f86-98.jpg",
		            "url": "http://www.metacritic.com/movie/12-years-a-slave",
		            "rlsdate": "2013-10-18",
		            "score": "97",
		            "summary": "In the pre-Civil War United States, Solomon Northup, a free black man living in upstate New York, is abducted and sold into slavery.",
		            "rating": "R",
		            "cast": "Alfre Woodard, Benedict Cumberbatch, Brad Pitt, Chiwetel Ejiofor, Garret Dillahunt, Michael Fassbender, Michael K. Williams, Paul Dano, Paul Giamatti, Sarah Paulson",
		            "genre": "Biography, Drama, History",
		            "avguserscore": "8.0",
		            "runtime": "134 min",
		            "reviews": [
		                {
		                    "name": "Official",
		                    "active": true,
		                    "score": "8",
		                    "date": "2014-03-08",
		                    "total_ups": "0",
		                    "total_thumbs": "0",
		                    "review": "Personally, I thought the ending was pretty much predictable, but other than, the movie really stands out. The acting is fantastic, the movie is powerful and tragic, and even though the film is not an absolute masterpiece, it is definitely a must-see.",
		                    "personality": {
		                        "Openness": 0.7155886238708381,
		                        "Conscientiousness": 0.015238551914802355,
		                        "Extraversion": 0.3457807800554668,
		                        "Agreeableness": 0.0642436289972995,
		                        "Emotional range": 0.8804785638427658
		                    },
		                    "emotions": {
		                        "anger": 0.09090909090909091,
		                        "anticipation": 0.2727272727272727,
		                        "disgust": 0.09090909090909091,
		                        "fear": 0.09090909090909091,
		                        "joy": 0.2727272727272727,
		                        "negative": 0.09090909090909091,
		                        "positive": 0.36363636363636365,
		                        "sadness": 0,
		                        "surprise": 0,
		                        "trust": 0.18181818181818182
		                    }
		                }
		            ],
		            "user_personality": {
		                "Openness": 0.4352748825087858,
		                "Conscientiousness": 0.060507559539581736,
		                "Extraversion": 0.17283902318678518,
		                "Agreeableness": 0.22757972057690426,
		                "Emotional range": 0.9643952156261673
		            },
		            "user_emotions": {
		                "anger": 0.162585460516495,
		                "anticipation": 0.11765935214211076,
		                "disgust": 0.09293625914315569,
		                "fear": 0.17927451858486337,
		                "joy": 0.1174473802060009,
		                "negative": 0.19685923272130168,
		                "positive": 0.23026720406030748,
		                "sadness": 0.14464248395282878,
		                "surprise": 0.027108523660247796,
		                "trust": 0.11759964173757279
		            }
		        },
		        {
		            "name": "No Escape",
		            "url": "http://www.metacritic.com/movie/no-escape",
		            "rlsdate": "2015-08-26",
		            "score": "38",
		            "summary": "As an American businessman (Owen Wilson) and his family settle into their new home in Southeast Asia, they suddenly finding themselves in the middle of a violent political uprising. They must...",
		            "rating": "R",
		            "cast": "Chatchawai Kamonsakpitak, Kanarpat Phintiang, Lake Bell, Nophand Boonyai, Owen Wilson, Pierce Brosnan, Sahajak Boonthanakit, Tanapol Chuksrida, Thanawut Kasro",
		            "genre": "Action, Thriller",
		            "avguserscore": "6.5",
		            "runtime": "103 min",
		            "reviews": [
		                {
		                    "name": "LowbrowCinema",
		                    "active": true,
		                    "score": "4",
		                    "date": "2015-08-29",
		                    "total_ups": "0",
		                    "total_thumbs": "0",
		                    "review": "The opening sequence is so dreadful I nearly plotzed in anticipation. Bad movies like this don't come around often BUT then NO ESCAPE actually gets quite damn good. Another xenophobic B-movie in the tradition of TAKEN. BUT, yest another but, the whole things just falls apart and becomes an unwelcome bore. Totally bummed me out because I was really enjoying myself.",
		                    "personality": {
		                        "Openness": 0.7832873841801661,
		                        "Conscientiousness": 0.08424703164137723,
		                        "Extraversion": 0.437329743901593,
		                        "Agreeableness": 0.1333508308055831,
		                        "Emotional range": 0.7693812622227079
		                    },
		                    "emotions": {
		                        "anger": 0.1875,
		                        "anticipation": 0.3125,
		                        "disgust": 0.1875,
		                        "fear": 0.1875,
		                        "joy": 0.125,
		                        "negative": 0.375,
		                        "positive": 0.25,
		                        "sadness": 0.1875,
		                        "surprise": 0.0625,
		                        "trust": 0.1875
		                    }
		                },
		                {
		                    "name": "Unladenswallow0",
		                    "active": true,
		                    "score": "7",
		                    "date": "2015-09-16",
		                    "total_ups": "0",
		                    "total_thumbs": "0",
		                    "review": "I actually liked this movie, Owen Wilson was great, Pierce Brosnan basically played A **** James Bond but he was still good. I even tolerated the kid actors, they were okay. If you've seen Argo would basically seen this movie, but it has its moments, its full of suspense even if some of the plot turns are painfully obvious. This is a good suspense thriller, probably one of Owen wilsonsI actually liked this movie, Owen Wilson was great, Pierce Brosnan basically played A **** James Bond but he was still good. I even tolerated the kid actors, they were okay. If you've seen Argo would basically seen this movie, but it has its moments, its full of suspense even if some of the plot turns are painfully obvious. This is a good suspense thriller, probably one of Owen wilsons best films recently.",
		                    "personality": {
		                        "Openness": 0.7661927803228393,
		                        "Conscientiousness": 0.1474154453330371,
		                        "Extraversion": 0.46788575875310195,
		                        "Agreeableness": 0.32811349214560936,
		                        "Emotional range": 0.680744944545801
		                    },
		                    "emotions": {
		                        "anger": 0,
		                        "anticipation": 0.3076923076923077,
		                        "disgust": 0,
		                        "fear": 0.15384615384615385,
		                        "joy": 0.15384615384615385,
		                        "negative": 0.07692307692307693,
		                        "positive": 0.3076923076923077,
		                        "sadness": 0.07692307692307693,
		                        "surprise": 0.3076923076923077,
		                        "trust": 0.23076923076923078
		                    }
		                }
		            ],
		            "user_personality": {
		                "Openness": 0.4352748825087858,
		                "Conscientiousness": 0.060507559539581736,
		                "Extraversion": 0.17283902318678518,
		                "Agreeableness": 0.22757972057690426,
		                "Emotional range": 0.9643952156261673
		            },
		            "user_emotions": {
		                "anger": 0.11556157550739594,
		                "anticipation": 0.24441169855256542,
		                "disgust": 0.11234520123839009,
		                "fear": 0.1841963033526501,
		                "joy": 0.16006059643830542,
		                "negative": 0.20587309147680663,
		                "positive": 0.2732085681776084,
		                "sadness": 0.10821657272895661,
		                "surprise": 0.13374778386388295,
		                "trust": 0.18005047498081553
		            }
		        }
		    ]
		};
    	handleSubmitMood();
    }
  });
}

function handleSubmitMood() {
	console.log(result);

	var $movieSec = $("#movieSec");
	$movieSec.html(layoutMovies());

	for (var i = 0; i < result.rc.length; ++i) {
    	createChart(result.rc[i].user_emotions, "sentiment" + i, 'Your Sentiment for "' + result.rc[i].name + '"');
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
				+ '<div class="img"><img src="' + imageurl + '" width="200" height="278" alt="" class="fl" /></div>'
				+ '<div class="post_content"><p>' + summary + '</p>' + '<div id="sentiment' + i + '" style="width: 410px; height: 280px;"></div></div>'
				+ '<div class="clr"></div><p class="spec"><a href="movie.html" class="rm" onclick="readMore(' + i +')">Read more</a></p><div class="clr"></div></div>';
    }
    return htmlText;
}

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
}

function readMore(movieId) {
	sessionStorage.setItem('movieResult', JSON.stringify(result.rc[movieId]));
}

// TO DO
function submitMovie() {
	var input = document.getElementById("moviefrm");
	var acct = input.elements[0].value; //accnt: not empty, no size limit
	var movie = input.elements[1].value; //movie: not empty, no size limit

  	$.ajax({
   	 	url: 'http://jsonplaceholder.typicode.com/posts/1',
    	data: {
    		account: acct,
    		movie: movie
   	 	},
    	success: function (response) {
    		result = {
		            "name": "The Babadook",
		            "imageurl": "http://static.metacritic.com/images/products/movies/6/2c6ac6bb1c737df05848f2dbbb83149a-98.jpg",
		            "url": "http://www.metacritic.com/movie/the-babadook",
		            "rlsdate": "2014-11-28",
		            "score": "86",
		            "summary": "Six years after the violent death of her husband, Amelia (Essie Davis) is at a loss. She struggles to discipline her ‘out of control’ 6 year-old, Samuel (Noah Wiseman), a son she finds impossible...",
		            "rating": "Not Rated",
		            "cast": "Barbara West, Daniel Henshall, Essie Davis, Hayley McElhinney, Noah Wiseman",
		            "genre": "Drama, Thriller, Horror",
		            "avguserscore": "8.3",
		            "runtime": "93 min",
		            "reviews": [
		                {
		                    "name": "Marick",
		                    "active": true,
		                    "score": "4",
		                    "date": "2015-06-30",
		                    "total_ups": "0",
		                    "total_thumbs": "1",
		                    "review": "I expected to be more horror. He had some scary moments but not quite succeeded .",
		                    "personality": {
		                        "Openness": 0.17173901423580606,
		                        "Conscientiousness": 0.007874572695745307,
		                        "Extraversion": 0.2683292531332508,
		                        "Agreeableness": 0.3885050429493517,
		                        "Emotional range": 1
		                    },
		                    "emotions": {
		                        "anger": 0.5,
		                        "anticipation": 0.5,
		                        "disgust": 0.5,
		                        "fear": 0.5,
		                        "joy": 0,
		                        "negative": 0.5,
		                        "positive": 0,
		                        "sadness": 0.5,
		                        "surprise": 0.5,
		                        "trust": 0
		                    }
		                },
		                {
		                    "name": "BogKid",
		                    "active": true,
		                    "score": "8",
		                    "date": "2014-12-11",
		                    "total_ups": "0",
		                    "total_thumbs": "1",
		                    "review": "First, this is an excellent film. BUT, possibly it was over-hyped. Maybe I expected something different. But, I found some boredom creeping in around the half-way point. I had decided what my opinion of the plot happenings was. Not entirely original, but extremely well done nevertheless.\rNot enough praise can be given to the acting talents of the two leads. The young boy,First, this is an excellent film. BUT, possibly it was over-hyped. Maybe I expected something different. But, I found some boredom creeping in around the half-way point. I had decided what my opinion of the plot happenings was. Not entirely original, but extremely well done nevertheless.\rNot enough praise can be given to the acting talents of the two leads. The young boy, especially, turned in the best child performance I have ever seen in a horror movie. He was actually frightening himself, even in his quiet moments. Most impressive. It will be interesting to see if he moves forward to a full acting career.",
		                    "personality": {
		                        "Openness": 0.7853316806219823,
		                        "Conscientiousness": 0.14768080929105737,
		                        "Extraversion": 0.24568823092723002,
		                        "Agreeableness": 0.22639892582162163,
		                        "Emotional range": 0.818052031917083
		                    },
		                    "emotions": {
		                        "anger": 0.022727272727272728,
		                        "anticipation": 0.18181818181818182,
		                        "disgust": 0.06818181818181818,
		                        "fear": 0.022727272727272728,
		                        "joy": 0.20454545454545456,
		                        "negative": 0.11363636363636363,
		                        "positive": 0.3181818181818182,
		                        "sadness": 0.09090909090909091,
		                        "surprise": 0.06818181818181818,
		                        "trust": 0.13636363636363635
		                    }
		                },
		                {
		                    "name": "Nazgulero",
		                    "active": true,
		                    "score": "0",
		                    "date": "2015-05-10",
		                    "total_ups": "4",
		                    "total_thumbs": "15",
		                    "review": "There really is nothing scary about this movie. The one thing that scares the living hell out of you is the kid. You must feel sorry for the mother, and during the entire movie, you hope that this annoying brat gets eaten alive by a terrible monster.",
		                    "personality": {
		                        "Openness": 0.9253216341008125,
		                        "Conscientiousness": 0.1655503396536938,
		                        "Extraversion": 0.19864092882958306,
		                        "Agreeableness": 0.053362768156501705,
		                        "Emotional range": 0.5697382624526012
		                    },
		                    "emotions": {
		                        "anger": 0.2,
		                        "anticipation": 0.2,
		                        "disgust": 0.13333333333333333,
		                        "fear": 0.2,
		                        "joy": 0.2,
		                        "negative": 0.3333333333333333,
		                        "positive": 0.2,
		                        "sadness": 0.2,
		                        "surprise": 0.06666666666666667,
		                        "trust": 0.2
		                    }
		                }
		            ],
		            "user_personality": {
		                "Openness": 0.4352748825087858,
		                "Conscientiousness": 0.060507559539581736,
		                "Extraversion": 0.17283902318678518,
		                "Agreeableness": 0.22757972057690426,
		                "Emotional range": 0.9643952156261673
		            },
		            "user_emotions": {
		                "anger": 0.20062887624923675,
		                "anticipation": 0.16964748224557347,
		                "disgust": 0.2059021819467206,
		                "fear": 0.24631993315980588,
		                "joy": 0.12336932420707605,
		                "negative": 0.30295350107651275,
		                "positive": 0.22705806741861884,
		                "sadness": 0.19329669976541664,
		                "surprise": 0.21401812397570613,
		                "trust": 0.12306629390404575
		            }
		        };
    		handleSubmitMovie(1);
    	}
  	});
}

function handleSubmitMovie(pagenum) {
	console.log(result);

	var $reviewSec = $("#reviewSec");
	var htmlText = "";
	htmlText = '<div class="article"><p><h2><span>Sentiment for Movie "' + result.name + '"</span></h2></p><div id="sentiment"></div>'
		+ '<div><p></p><p></p><h2><span>Reviews for Movie "' + result.name + '"</h2><div class="clr"></div></div>'
		+ layoutReviews(pagenum)
		+ layoutPages(pagenum)
		+ '</div>';
	$reviewSec.html(htmlText);

	createChart(result.user_emotions, "sentiment", null);

	var rangemin = (pagenum-1) * reviewperpage;
	var rangemax = rangemin + reviewperpage;
	for (var i = rangemin; i < rangemax && i < result.reviews.length; i++) {
    	createChart(result.reviews[i].personality, "reviewpersonality" + i, "User Personality");
    	createChart(result.reviews[i].emotions, "review" + i, 'User Sentiment for "' + result.name + '"');
    }

    createChart(result.user_personality, "personality", null);
}

var layoutReviews = function(pagenum) {
	var htmlText = "";

	var rangemin = (pagenum-1) * reviewperpage;
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
}

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
}

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