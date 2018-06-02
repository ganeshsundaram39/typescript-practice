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
    var Facebook = /** @class */ (function () {
        function Facebook() {
            this.totalUsers = 2190000000;
        }
        return Facebook;
    }());
    var Advertisement = /** @class */ (function (_super) {
        __extends(Advertisement, _super);
        function Advertisement() {
            return _super.call(this) || this;
        }
        Advertisement.randomAdvertPost = function () {
            console.log('facebook advert post');
        };
        return Advertisement;
    }(Facebook));
    facebook.Advertisement = Advertisement;
    var Games = /** @class */ (function (_super) {
        __extends(Games, _super);
        function Games() {
            return _super.call(this) || this;
        }
        Games.prototype.showGames = function () {
            console.log('show games');
        };
        Games.prototype.gameNotification = function () {
            console.log('show game notifications');
        };
        return Games;
    }(Facebook));
    facebook.Games = Games;
    var News = /** @class */ (function (_super) {
        __extends(News, _super);
        function News() {
            var _this = _super.call(this) || this;
            _this.news = [];
            return _this;
        }
        News.getNews = function () {
            console.log('fetch news using api');
        };
        News.showNews = function () {
            console.log('showing news post');
        };
        return News;
    }(Facebook));
    facebook.News = News;
    var PersonalInfo = /** @class */ (function (_super) {
        __extends(PersonalInfo, _super);
        function PersonalInfo(fbid) {
            var _this = _super.call(this) || this;
            _this.firstName = "";
            _this.lastName = "";
            _this.emailId = "";
            _this.encryptedPassword = "";
            _this.mobileNumber = 0;
            _this.countryCode = 0;
            _this.birthday = { dateOfBirth: "", yearOfBirth: 0 };
            _this.gender = "";
            _this.language = [];
            _this.religiousViews = [];
            _this.profilePicCdn = "";
            _this.coverPhotoCdn = "";
            _this.work = [];
            _this.education = [];
            _this.age = null;
            return _this;
        }
        PersonalInfo.prototype.getPersonalInfo = function () {
            // fetch and assign personal info
            this.firstName = "victor";
            this.lastName = "rage";
            this.emailId = "victorrage@gmail.com";
            this.countryCode = 91;
            this.birthday = {
                dateOfBirth: "20 may",
                yearOfBirth: 1995
            };
            this.coverPhotoCdn = "https://www.cdn.cover-photo-23425asdf";
            this.profilePicCdn = "https://www.cdn.cover-photo-46563gkjs";
            this.religiousViews = ["indian"];
            this.mobileNumber = 2938429385;
            this.encryptedPassword = "92;kjasdf87234";
            this.gender = "male";
            this.education = [
                {
                    schoolUniversity: "S.I.A.High school",
                    timePeriod: "6 jun",
                    description: ""
                }
            ];
            this.age = this.getAge();
        };
        PersonalInfo.prototype.getAge = function () {
            if (this.birthday.yearOfBirth)
                return new Date().getFullYear() - this.birthday.yearOfBirth;
            return null;
        };
        return PersonalInfo;
    }(Facebook));
    var UserPost = /** @class */ (function (_super) {
        __extends(UserPost, _super);
        function UserPost(fbId) {
            var _this = _super.call(this, fbId) || this;
            _this.fbId = fbId;
            _this.posts = [];
            return _this;
        }
        UserPost.prototype.getPosts = function () {
            // get all the posts
        };
        UserPost.prototype.insertPost = function () {
            this.getPosts();
            console.log('insert post along with advertisements');
            Advertisement.randomAdvertPost();
        };
        UserPost.prototype.createNewPost = function () {
            console.log('creating new post');
        };
        return UserPost;
    }(PersonalInfo));
    var GetFriends = /** @class */ (function (_super) {
        __extends(GetFriends, _super);
        function GetFriends(fbId) {
            var _this = _super.call(this, fbId) || this;
            _this.fbId = fbId;
            return _this;
        }
        GetFriends.prototype.getAllFriendsList = function () {
            // get all the freidns
            console.log('get all friends');
            return [{}];
        };
        GetFriends.prototype.getBlockedList = function () {
            console.log('get all blocked friends');
            return [{
                    name: "manish",
                    id: "lskf87623"
                }];
        };
        return GetFriends;
    }(UserPost));
    var FacebookProfile = /** @class */ (function (_super) {
        __extends(FacebookProfile, _super);
        function FacebookProfile(fbId) {
            var _this = _super.call(this, fbId) || this;
            _this.fbId = fbId;
            return _this;
        }
        FacebookProfile.prototype.getInformation = function () {
            console.log("Getting information");
            this.getPersonalInfo();
            this.insertPost();
            this.getAllFriendsList();
        };
        return FacebookProfile;
    }(GetFriends));
    facebook.FacebookProfile = FacebookProfile;
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
var FacebookProfile = facebook.FacebookProfile;
var playYoutube = function (id) {
    if (!id)
        return;
    console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    var youtubeVideo = new YoutubeVideo(id);
    youtubeVideo.getInformation();
    console.log(JSON.stringify(youtubeVideo, null, 4));
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    if (YoutubeUser.detectUserLoggedIn) {
        var userid = YoutubeUser.getLoginInformation().userId;
        new YoutubeUser(userid).addToUserHistory(id);
    }
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    var youtubeAdvertisement = new YoutubeAdvertisement(id);
    if (youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.log(JSON.stringify(youtubeAdvertisement, null, 4));
    }
    console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    AdBlocker.detectAdBlocker();
};
var facebookProfile = function (fbid) {
    var facebookProfile = new FacebookProfile(fbid);
    facebookProfile.getInformation();
    console.log(JSON.stringify(facebookProfile, null, 4));
};
(function () {
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
    playYoutube('2i4JxWkSYzU');
    //facebookProfile('jh23784asf');
})();
