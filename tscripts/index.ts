/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>

import YoutubeVideo = youtube.YoutubeVideo;

//https://www.youtube.com/watch?v=2i4JxWkSYzU
const playYoutube=():void=>{
    const youtubeVideo = new YoutubeVideo('2i4JxWkSYzU');
    youtubeVideo.getInformation();

    console.log(youtubeVideo.url);



}

const facebookProfile=():void=>{

}

(()=>{
    playYoutube();
})()