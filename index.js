var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebook;
(function (facebook) {
    facebook.fb = "hello";
})(facebook || (facebook = {}));
var youtube;
(function (youtube) {
    var YoutubeVideo = /** @class */ (function () {
        function YoutubeVideo(videoId) {
            this._url = "";
            this._title = "";
            this._views = "";
            this._likes = "";
            this._dislikes = "";
            this._cdn = "";
            this._description = "";
            console.log("initialize video object");
            this.url = "https://www.youtube.com/watch?v=" + videoId;
        }
        Object.defineProperty(YoutubeVideo.prototype, "url", {
            get: function () {
                return this._url;
            },
            set: function (value) {
                if (value) {
                    this._url = value;
                }
                else {
                    console.log("invalid video id");
                }
            },
            enumerable: true,
            configurable: true
        });
        YoutubeVideo.prototype.getVideoCdn = function () {
            return "blob:https://www.youtube.com/c0bff939-bfef-493f-b10d-7556e5f18a58";
        };
        YoutubeVideo.prototype.commaAdder = function (views) {
            // logic
            return "117,952";
        };
        YoutubeVideo.prototype.getNumberofViews = function () {
            return this.commaAdder(117952);
        };
        YoutubeVideo.prototype.getLikes = function (likes) {
            //logic
            return "5.3K";
        };
        YoutubeVideo.prototype.getDislikes = function (dislikes) {
            return "556";
        };
        YoutubeVideo.prototype.getInformation = function () {
            console.log("obtain video information");
            this._cdn = this.getVideoCdn();
            this._title = "Trump Talk: All Our Best Mashups In One Video";
            this._views = this.getNumberofViews();
            this._likes = this.getLikes(5300);
            this._dislikes = this.getDislikes(556);
            this._description = "Donald Trump talks a lot, but what is he actually saying? VICE News' \"Trump Talk\" mashup series tries to answer that. And, we're happy to say, it was just nominated for two Webby Awards. Now you can watch all the nominated videos together in this one mega mashup.";
        };
        return YoutubeVideo;
    }());
    youtube.YoutubeVideo = YoutubeVideo;
    var YoutubeMonetize = /** @class */ (function () {
        function YoutubeMonetize(id) {
            this.id = id;
            this.isMonetize = true;
        }
        return YoutubeMonetize;
    }());
    var YoutubeAdvertisement = /** @class */ (function (_super) {
        __extends(YoutubeAdvertisement, _super);
        function YoutubeAdvertisement(id) {
            return _super.call(this, id) || this;
        }
        YoutubeAdvertisement.prototype.isEligible = function (views) {
            return this.isMonetize;
        };
        YoutubeAdvertisement.showRandomAdvert = function () {
            console.log('showing random advert');
        };
        return YoutubeAdvertisement;
    }(YoutubeMonetize));
    youtube.YoutubeAdvertisement = YoutubeAdvertisement;
})(youtube || (youtube = {}));
/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>
var YoutubeVideo = youtube.YoutubeVideo;
var YoutubeAdvertisement = youtube.YoutubeAdvertisement;
var playYoutube = function (id) {
    var youtubeVideo = new YoutubeVideo(id);
    youtubeVideo.getInformation();
    console.log(youtubeVideo);
    var youtubeAdvertisement = new YoutubeAdvertisement(id);
    if (youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.log(youtubeAdvertisement);
    }
};
var facebookProfile = function () {
};
(function () {
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
    playYoutube('2i4JxWkSYzU');
})();
