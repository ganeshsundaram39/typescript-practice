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
    var Youtube = /** @class */ (function () {
        function Youtube() {
            this.totalUsers = 1300000000;
        }
        return Youtube;
    }());
    var YoutubeUsers = /** @class */ (function (_super) {
        __extends(YoutubeUsers, _super);
        function YoutubeUsers(userid) {
            var _this = _super.call(this) || this;
            _this.userid = userid;
            return _this;
        }
        YoutubeUsers.detectUserLoggedIn = function () {
            // logic
            return true;
        };
        YoutubeUsers.setLoginInformation = function () {
            console.log('saving user login information and sending to server');
        };
        YoutubeUsers.getLoginInformation = function () {
            console.log('getting login information');
            var userInfo;
            // logic
            userInfo = {
                username: "ganesh",
                userId: "alsdkf2349",
                userHistory: [{
                        name: "Everest mountain",
                        url: "https://www.everestmountain.com",
                        dateTime: "26 december 2018"
                    }]
            };
            return userInfo;
        };
        YoutubeUsers.prototype.userWantsToLogin = function () {
            console.log('showing Login view');
        };
        YoutubeUsers.prototype.addToUserHistory = function (id) {
            console.log("adding this video with id " + id + " in user history of user id " + this.userid);
        };
        return YoutubeUsers;
    }(Youtube));
    youtube.YoutubeUsers = YoutubeUsers;
    var YoutubeVideo = /** @class */ (function (_super) {
        __extends(YoutubeVideo, _super);
        function YoutubeVideo(videoId) {
            var _this = _super.call(this) || this;
            _this._url = "";
            _this._title = "";
            _this._views = "";
            _this._likes = "";
            _this._dislikes = "";
            _this._cdn = "";
            _this._description = "";
            _this._subscribers = 0;
            _this._publisher = "";
            _this._isVerified = null;
            _this._comments = null;
            console.log("initialize video object");
            _this.url = "https://www.youtube.com/watch?v=" + videoId;
            return _this;
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
        YoutubeVideo.prototype.getNumberOfViews = function () {
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
            this._views = this.getNumberOfViews();
            this._likes = this.getLikes(5300);
            this._dislikes = this.getDislikes(556);
            this._description = "Donald Trump talks a lot, but what is he actually saying? VICE News' \"Trump Talk\" mashup series tries to answer that. And, we're happy to say, it was just nominated for two Webby Awards. Now you can watch all the nominated videos together in this one mega mashup.";
            this._subscribers = 123;
            this._publisher = "Vice News";
            this._isVerified = true;
            this._comments = [{
                    commenterName: "Darksydesamy",
                    commenterId: "234asd",
                    comment: "Thanks I was looking for a video like this all my life."
                }];
        };
        return YoutubeVideo;
    }(Youtube));
    youtube.YoutubeVideo = YoutubeVideo;
    var YoutubeMonetize = /** @class */ (function (_super) {
        __extends(YoutubeMonetize, _super);
        function YoutubeMonetize(id) {
            var _this = _super.call(this) || this;
            _this.id = id;
            _this.isMonetized = true;
            return _this;
        }
        return YoutubeMonetize;
    }(Youtube));
    var YoutubeAdvertisement = /** @class */ (function (_super) {
        __extends(YoutubeAdvertisement, _super);
        function YoutubeAdvertisement(id) {
            return _super.call(this, id) || this;
        }
        YoutubeAdvertisement.prototype.isEligible = function (views) {
            return this.isMonetized;
        };
        YoutubeAdvertisement.showRandomAdvert = function () {
            console.log('showing random advert');
        };
        return YoutubeAdvertisement;
    }(YoutubeMonetize));
    youtube.YoutubeAdvertisement = YoutubeAdvertisement;
    var Report = /** @class */ (function () {
        function Report(channelId) {
            this.channelId = channelId;
            this.type = "";
        }
        Report.prototype.reportType = function (type) {
            this.type = type;
        };
        Report.prototype.submitReport = function () {
            console.log("Submitting Report" + this.type);
        };
        return Report;
    }());
    var ReportVideo = /** @class */ (function (_super) {
        __extends(ReportVideo, _super);
        function ReportVideo(channelId, videoId) {
            var _this = _super.call(this, channelId) || this;
            _this.videoId = videoId;
            return _this;
        }
        return ReportVideo;
    }(Report));
    youtube.ReportVideo = ReportVideo;
    var ReportChannel = /** @class */ (function (_super) {
        __extends(ReportChannel, _super);
        function ReportChannel(channelId) {
            return _super.call(this, channelId) || this;
        }
        return ReportChannel;
    }(Report));
    youtube.ReportChannel = ReportChannel;
    var AdBlocker = /** @class */ (function (_super) {
        __extends(AdBlocker, _super);
        function AdBlocker() {
            return _super.call(this) || this;
        }
        AdBlocker.detectAdBlocker = function () {
            console.log('Detecting Adblocker');
            if (true)
                this.blockAdblocker();
        };
        AdBlocker.blockAdblocker = function () {
            console.log('Blocking Adblocker');
        };
        return AdBlocker;
    }(Youtube));
    youtube.AdBlocker = AdBlocker;
})(youtube || (youtube = {}));
/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>
var YoutubeVideo = youtube.YoutubeVideo;
var YoutubeUser = youtube.YoutubeUsers;
var YoutubeAdvertisement = youtube.YoutubeAdvertisement;
var AdBlocker = youtube.AdBlocker;
var playYoutube = function (id) {
    if (!id)
        return;
    console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    var youtubeVideo = new YoutubeVideo(id);
    youtubeVideo.getInformation();
    console.table(youtubeVideo);
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    if (YoutubeUser.detectUserLoggedIn) {
        var userid = YoutubeUser.getLoginInformation().userId;
        new YoutubeUser(userid).addToUserHistory(id);
    }
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    var youtubeAdvertisement = new YoutubeAdvertisement(id);
    if (youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.table(youtubeAdvertisement);
    }
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    AdBlocker.detectAdBlocker();
};
var facebookProfile = function () {
};
(function () {
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
    playYoutube('2i4JxWkSYzU');
})();
