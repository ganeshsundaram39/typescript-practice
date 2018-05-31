namespace youtube {
    class Youtube{
        protected totalUsers:number= 1300000000;
        constructor(){}
    }

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



    class YoutubeMonetize extends Youtube {
        protected isMonetized: boolean = true;
        constructor(private id: string) {
            super();
        }
    }

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

    export class AdBlocker extends Youtube{
        constructor(){
            super();

        }

        static detectAdBlocker():void{
            console.log('Checking blocker');
            if(true)this.blockAdblocker();
        }

        static blockAdblocker():void{
            console.log('blocking');
        }

    }
}
