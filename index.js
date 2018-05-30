var facebook;
(function (facebook) {
    facebook.fb = "hello";
})(facebook || (facebook = {}));
var youtube;
(function (youtube) {
    var YoutubeVideo = /** @class */ (function () {
        function YoutubeVideo(videoId) {
            this.url = "";
            this.title = "";
            console.log('initialize video object');
            this.url = "https://www.youtube.com/watch?v=" + videoId;
        }
        YoutubeVideo.prototype.getInformation = function () {
            console.log("obtain video information");
            this.title = "Trump Talk: All Our Best Mashups In One Video";
        };
        return YoutubeVideo;
    }());
    youtube.YoutubeVideo = YoutubeVideo;
})(youtube || (youtube = {}));
/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>
var YoutubeVideo = youtube.YoutubeVideo;
//https://www.youtube.com/watch?v=2i4JxWkSYzU
var playYoutube = function () {
    var youtubeVideo = new YoutubeVideo('2i4JxWkSYzU');
    youtubeVideo.getInformation();
    console.log(youtubeVideo.url);
};
var facebookProfile = function () {
};
(function () {
    playYoutube();
})();
