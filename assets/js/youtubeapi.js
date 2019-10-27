//
$("#search-btn").on("click", function (event) {
    event.preventDefault();

    var userSearchInput = $("#user-search").val();

    console.log(userSearchInput);

    searchByKeyword(userSearchInput);
});

function displayMusicInfo() { }

displayMusicInfo();
//

var youTube = $("#youtube");

//
function searchByKeyword(searchTerm) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U',
            q: searchTerm,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            videoEmbeddable: true,
        },
        success: function (data) {
            embedVideo(data)
            console.log(data)
        },
        error: function (response) {
            console.log("Request Failed");
        }
    });
}
//


//
function embedVideo(data) {
    var addVideo = $("<iframe>");

    addVideo.addClass("video-stream");

    addVideo.attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId);

    $("#youtube").append(addVideo);
}
//