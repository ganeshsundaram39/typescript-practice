/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>

import YoutubeVideo = youtube.YoutubeVideo;
import YoutubeAdvertisement = youtube.YoutubeAdvertisement;

const playYoutube=(id:string):void=>{

    if(!id) return;

    const youtubeVideo = new YoutubeVideo(id);
    youtubeVideo.getInformation();
    console.log(youtubeVideo);

    const youtubeAdvertisement=new YoutubeAdvertisement(id);
    if(youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.log(youtubeAdvertisement);
    }
};

const facebookProfile=():void=>{

};

(()=>{
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
    playYoutube('2i4JxWkSYzU');
})()