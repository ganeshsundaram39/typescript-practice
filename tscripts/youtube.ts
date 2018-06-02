namespace youtube {

    // main parent
    class Youtube{
        protected totalUsers:number= 1300000000;
        constructor(){}
    }

    //  this class represents youtube users
    export class YoutubeUsers extends Youtube {
        constructor(private userid:string){
            super();
        }

        // check if they are logged in
        static detectUserLoggedIn(){
            // logic
            return true;
        }

        // save login information
        static setLoginInformation(){
            console.log('saving user login information and sending to server');
        }

        // get login information from local storage
        static getLoginInformation(){
            console.log('getting login information');
            type user ={
                username:string,
                userId:string,
                userHistory:{
                    name:string,
                    url:string,
                    dateTime:string}[]
                };

            let userInfo:user;
            // logic
            userInfo={
                username:"ganesh",
                userId:"alsdkf2349",
                userHistory:[{
                                    name:"Everest mountain",
                                    url:"https://www.everestmountain.com",
                                    dateTime:"26 december 2018"
                                    }]
            };

            return userInfo;
        }

        // if user wants to login
        public userWantsToLogin(){
            console.log('showing Login view');
        }

        // add video to user history
        public addToUserHistory(id:string){
            console.log(`adding this video with id ${id} in user history of user id ${this.userid}`);
        }


    }

    // this class represents youtube video
    export class YoutubeVideo extends Youtube {
        private _url: string = "";
        private _title: string = "";
        public _views: string = "";
        private _likes: string = "";
        private _dislikes: string = "";
        private _cdn: string = "";
        private _description: string = "";
        private _subscribers:number=0;
        private _publisher:string="";
        private _isVerified:boolean|null=null;
        private _comments:{commenterName:string,commenterId:string,comment:string}[]|null=null;


        set url(value: string) {
            if (value) {
                this._url = value;
            } else {
                console.log("invalid video id");
            }
        }

        get url() {
            return this._url;
        }

        constructor(videoId: string) {
            super();
            console.log("initialize video object");
            this.url = `https://www.youtube.com/watch?v=${videoId}`;
        }

        private getVideoCdn(): string {
            return "blob:https://www.youtube.com/c0bff939-bfef-493f-b10d-7556e5f18a58";
        }

        private commaAdder(views: number): string {
            // logic
            return "117,952";
        }

        private getNumberOfViews(): string {
            return this.commaAdder(117952);
        }

        private getLikes(likes: number): string {
            //logic
            return "5.3K";
        }

        private getDislikes(dislikes: number): string {
            return "556";
        }

        // get all the information
        public getInformation(): void {
            console.log("obtain video information");

            this._cdn = this.getVideoCdn();
            this._title = "Trump Talk: All Our Best Mashups In One Video";
            this._views = this.getNumberOfViews();
            this._likes = this.getLikes(5300);
            this._dislikes = this.getDislikes(556);
            this._description = `Donald Trump talks a lot, but what is he actually saying? VICE News' "Trump Talk" mashup series tries to answer that. And, we're happy to say, it was just nominated for two Webby Awards. Now you can watch all the nominated videos together in this one mega mashup.`;
            this._subscribers=123;
            this._publisher="Vice News";
            this._isVerified=true;
            this._comments=[{
                commenterName:"Darksydesamy",
                commenterId:"234asd",
                comment:"Thanks I was looking for a video like this all my life."
            }];

        }
    }


    // this class represents monetization of video
    class YoutubeMonetize extends Youtube {
        protected isMonetized: boolean = true;
        constructor(private id: string) {
            super();
        }
    }

    // this class represent advertisement
    export class YoutubeAdvertisement extends YoutubeMonetize {
        constructor(id: string) {
            super(id);
        }

        public isEligible(views: string): boolean {
            return this.isMonetized;
        }

        static showRandomAdvert():void{
            console.log('showing random advert');
        }
    }


    // this class represent  methods to deal with problematic videos
    class Report {
        protected type:string="";

        constructor(protected channelId:string){}

        public reportType(type:string){
            this.type=type;
        }
        public submitReport(){
            console.log(`Submitting Report${this.type}`);
        }
    }

    export class ReportVideo extends Report{
        constructor(channelId:string,private videoId:string){
            super(channelId);
        }
    }

    export class ReportChannel extends Report{
        constructor(channelId:string){
            super(channelId);
        }
    }


    // blocking ad blocker
    export class AdBlocker extends Youtube{
        constructor(){
            super();
        }

        static detectAdBlocker():void{
            console.log('Detecting Adblocker');
            if(true)this.blockAdblocker();
        }

        static blockAdblocker():void{
            console.log('Blocking Adblocker');
        }

        static sendReport():void{
            console.log('sending information about ad blocker to the server');
        }
    }
}
