new Vue({
    el:"#big-container",
    data(){
        return{
            showList:false,
            showAccount:true,
            addToBagCount: [
                {tHeader:"Villa Bosphorus",tCont:"Lorem İpsum Sit Dolor Met",tStar:"3.9",tLocate:"5.7"},
                {tHeader:"Villa Bosphorus2",tCont:"Lorem İpsum Sit Dolor Met2",tStar:"3.9",tLocate:"5.8"},
                {tHeader:"Villa Bosphorus3",tCont:"Lorem İpsum Sit Dolor Met3",tStar:"3.9",tLocate:"5.9"},
                
            ],
            showClicked:false,
            textEmail:"",
            userName: "User",
            textPassword:"",
            textLocate:"",
            allLocate:["Turkiye","Amerika","Holland","İngilter","Fransa"]
        }
    },
    methods:{
        accountFonk(){
            this.showAccount = true;
            this.showList = false;
        },
        listFonk(){
            this.showAccount = false;
            this.showList = true;
        },
        showClickedField(){
            this.showClicked = true;
            this.userName = this.textEmail.split("@");
            this.userName = this.userName[0];
        },
        logOutField(){
            this.showClicked = false;
            this.textEmail = "";
            this.textPassword = "";
            this.textLocate = "";
        }

    }
});
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");

function startThat1(x){
    span1.style.bottom = "36px";
    span1.style.fontSize = "10px";
    x.style.borderColor = "#67ccd7";
}
function startThat2(x2){
    span2.style.bottom = "36px";
    span2.style.fontSize = "10px";
    x2.style.borderColor = "#67ccd7";
}