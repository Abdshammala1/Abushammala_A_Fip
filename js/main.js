import { fetchData } from "./modules/default.js";

// header
new Vue({
    el: '#mainNav',
    data: {
        disp: "none",
    },
    methods:{
        display_header: function(){
            if(this.disp == "none"){
                this.disp = "block";
            }else{
                this.disp = "none"
            }
        },
    }
});

// video
new Vue({
    el: '#video',
    data: {
        source: "",
    },
    methods:{
        changeVideo: function(data){
            this.source  = 'videos/'+data;
        }
    },
    created(){
        let url = "includes/getVideo.php";

        fetchData(url)
            .then((data) => this.changeVideo(data))
            .catch((err) => console.log(err));
    }
});

// modal
Vue.component("modal", {
    template: "#modal-template"
  });

new Vue({
    el: "#modal",
    data: {
        showModal: false,
        src: ""
    },
    methods: {
        showModall: function(data){
            console.log(15);
            if(data != 'close'){
                this.showModal = true
                this.src = data
            }else{
                this.showModal = false
            }
        }
    }
});

// contact form
new Vue({
    el: "#contact-form",
    data: {
        name: "",
        email: "",
        subject: "",
        message: "",
        success: "none",
        wrong: "none",
    },
    methods: {
        storeContact(x) {
            let url = "includes/mail/index.php?name=" + this.name +"&email="+this.email+"&subject="+this.subject+"&message="+this.message;

            fetchData(url)
                .then((data) => this.store(data))
                .catch((err) => console.log(err));
        },
        store: function(result){
            if(result == "1"){
                this.name = "";
                this.email = "";
                this.subject = "";
                this.message = "";
                this.success = "block";
                this.wrong = "none";
            }else{
                this.wrong = "block";
                this.success = "none";
            }
        }
    }
});