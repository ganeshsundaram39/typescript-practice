/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>

import YoutubeVideo = youtube.YoutubeVideo;
import YoutubeUser = youtube.YoutubeUsers;
import YoutubeAdvertisement = youtube.YoutubeAdvertisement;
import  AdBlocker= youtube.AdBlocker;

const playYoutube=(id:string):void=>{

    if(!id) return;

    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    const youtubeVideo = new YoutubeVideo(id);
    youtubeVideo.getInformation();
    console.table(youtubeVideo);

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    if(YoutubeUser.detectUserLoggedIn){
        const userid = YoutubeUser.getLoginInformation().userId;
        new YoutubeUser(userid).addToUserHistory(id);
    }

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    const youtubeAdvertisement=new YoutubeAdvertisement(id);
    if(youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.table(youtubeAdvertisement);
    }

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    AdBlocker.detectAdBlocker();

};

const facebookProfile=():void=>{

};

(()=>{
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
   //playYoutube('2i4JxWkSYzU');
})()