namespace facebook {

    // this class represent main facebook object
    class Facebook {
        private totalUsers: number = 2190000000;
        constructor() {}
    }

    //  this class represent advertisement object
    export class Advertisement extends Facebook{
        constructor(){
            super();
        }

        static randomAdvertPost(){
            console.log('facebook advert post');
        }
    }


    // this class represents facebook games
    export class Games  extends Facebook{
         constructor(){
             super();
         }

         protected showGames(){
             console.log('show games');
         }

         protected gameNotification(){
            console.log('show game notifications');
         }
    }


    // this class represents news section
    export class News extends Facebook{
        private news:{newsSource:string,newsDescription:string,newsLink:string}[]=[];

        constructor(){
            super();
        }

        static getNews(){
            console.log('fetch news using api');
        }

        static showNews(){
            console.log('showing news post');
        }
    }


    // this class represents users personal info
    class PersonalInfo extends Facebook {
        protected firstName: string = "";
        protected lastName: string = "";
        protected emailId: string = "";
        protected encryptedPassword: string = "";
        protected mobileNumber: number = 0;
        protected countryCode: number = 0;
        protected birthday: {
            dateOfBirth: string;
            yearOfBirth: number;
        } ={dateOfBirth:"",yearOfBirth:0};
        protected gender: string = "";
        protected language: string[] = [];
        protected religiousViews: string[] = [];
        protected profilePicCdn: string = "";
        protected coverPhotoCdn: string = "";
        protected work: {
            position: string;
            company: string;
            cityTown: string;
            timePeriod: string;
        }[] = [];
        protected education: {
            schoolUniversity: string;
            timePeriod: string;
            description: string;
        }[] = [];
        protected age:number|null=null;

        constructor(fbid: string) {
            super();
        }

        protected getPersonalInfo() {
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
            this.age=this.getAge();

        }

        public getAge ():number|null{
            if(this.birthday.yearOfBirth)
            return new Date().getFullYear()-this.birthday.yearOfBirth;

            return null;
        }
    }


    // this class represents users posts
    class UserPost extends PersonalInfo{
        protected posts:{postid:string,post:string}[]=[]
        constructor(protected fbId:string){
            super(fbId);
        }

        protected getPosts(){
            // get all the posts
        }

        protected insertPost(){
            this.getPosts();
            console.log('insert post along with advertisements');
            Advertisement.randomAdvertPost();
        }

        protected createNewPost(){
            console.log('creating new post');
        }
    }


    class Friends extends UserPost{
        constructor(protected fbId:string){
            super(fbId);
        }

        protected getAllFriendsList():{[multiple:string]:any}[]{
            // get all the friends
            console.log('get all friends');
            return [{

            }];
        }

        protected getBlockedList():{name:string,id:string}[]{
            console.log('get all blocked friends');
            return [{
                name:"manish",
                id:"lskf87623"
            }]
        }
    }

    // this class represents all its ancestors
    export class FacebookProfile extends Friends {
        constructor(protected fbId: string) {
            super(fbId);
        }

        getInformation() {
            console.log("Getting information");
            this.getPersonalInfo();
            this.insertPost();
            this.getAllFriendsList();
        }
    }
}
