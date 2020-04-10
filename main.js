var app;
(function(){
    app=new Vue({
        el:'#app',
        vuetify: new Vuetify(),
        data:{
            title:'Test',
            mode:''
        },
        methods:{
            geo(){
                navigator.geolocation.getCurrentPosition(this.showPosition)
            },
            showPosition(p){
                this.mode=`${p.coords.latitude} ${p.coords.longitude}`
            }
        }
    })
}()
)

"serviceWorker"in navigator && navigator.serviceWorker.register("sw.js").then(function(reg) {
    console.log("Successfully registered service worker", reg)
})["catch"](function(err) {
    console.warn("Error whilst registering service worker", err)
}),
window.addEventListener("online", function(e) {
    console.log("You are online"),
    app.mode='Online'
    //Page.hideOfflineWarning(),
    //Arrivals.loadData()
}, !1),
window.addEventListener("offline", function(e) {
    console.log("You are offline"),
    app.mode='Offline'
    //Page.showOfflineWarning()
}, !1),
app.mode=navigator.onLine ? 'Online' : 'Offline';
