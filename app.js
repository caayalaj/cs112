        //index page change image on mouseover event
        $(function ()
        
        { 
            $("#idimg").hover(function()
            {
                $('#idimg').attr('src', 'img/shoes_2_edited.jpg');
            }, 
            function()
            {
                $('#idimg').attr('src', 'img/boots_1_edited.jpg');
            })
        })
        // index page change image size
        $("#in").click(function(){
            $("img").width($("img").width()+100);
            $("img").height($("img").height()+100);
        });
        // index page change image size
        $("#out").click(function(){
            $("img").width($("img").width()-100);
            $("img").height($("img").height()-100);
        });

        
        
        // let center = [34.006050, -118.256540]
        // const map = tt.map({
        //   key: "4S534k2DjfJLdwFBGNLhvdG02GVCHYG4",
        //   container: "map",
        //   center: center,
        //   zoom:100
        // })
        // map.on('load',() => {
        //   new tt.Marker().setLngLat(center).addTo(map)
        // })
      

        // var map = L.map('map').setView([(34.006050, -118.256540)], 13);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //   attribution: '&copy; OpenStreetMap contributors'
        // }).addTo(map);
    
        // var marker = L.marker([(34.006050, -118.256540)]).addTo(map);