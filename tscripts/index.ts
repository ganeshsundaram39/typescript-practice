/// <reference path="facebook.ts"/>
/// <reference path="youtube.ts"/>

import YoutubeVideo = youtube.YoutubeVideo;
import YoutubeUser = youtube.YoutubeUsers;
import YoutubeAdvertisement = youtube.YoutubeAdvertisement;
import AdBlocker= youtube.AdBlocker;

import FacebookProfile = facebook.FacebookProfile;



// youtube video
const playYoutube=(id:string):void=>{

    if(!id) return;

    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    // new instance
    const youtubeVideo = new YoutubeVideo(id);

    // get all data
    youtubeVideo.getInformation();

    console.log(JSON.stringify(youtubeVideo,null,4));

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    // add to history
    if(YoutubeUser.detectUserLoggedIn){
        const userid = YoutubeUser.getLoginInformation().userId;
        new YoutubeUser(userid).addToUserHistory(id);
    }

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    // insert advertisement
    const youtubeAdvertisement=new YoutubeAdvertisement(id);
    if(youtubeAdvertisement.isEligible(youtubeVideo._views)) {
        YoutubeAdvertisement.showRandomAdvert();
        console.log(JSON.stringify(youtubeAdvertisement,null,4));
    }

    console.log(`\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    // block adblocker
    AdBlocker.detectAdBlocker();

};





//facebook profile
const facebookProfile=(fbid:string):void=>{

    // new instance
    const facebookProfile = new FacebookProfile(fbid);

    // get all data
    facebookProfile.getInformation();
    console.log(JSON.stringify(facebookProfile,null,4));
};





// start
(()=>{
    //https://www.youtube.com/watch?v=2i4JxWkSYzU
   playYoutube('2i4JxWkSYzU');

    //facebookProfile('jh23784asf');
})();