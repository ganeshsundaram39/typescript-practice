namespace youtube{
   export  class YoutubeVideo {
        public readonly url:string="";
        private title:string="";
        constructor(videoId:string){
            console.log('initialize video object');
            this.url=`https://www.youtube.com/watch?v=${videoId}`;
        }

        getInformation():void{
            console.log("obtain video information");
            this.title="Trump Talk: All Our Best Mashups In One Video";

        }


    }
}