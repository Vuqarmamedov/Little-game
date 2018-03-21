(function(window,document,undefined){
        var init = function(){    
            var main = document.getElementById("main");
            var img = document.getElementById("image");
            var img_width = 50;
            var img_heigth = 50;
            var the_images = [
                'https://cdn.pixabay.com/photo/2016/11/25/18/00/flower-1858883_960_720.png',
                'https://cdn.pixabay.com/photo/2017/02/20/10/08/poppy-2082031_960_720.png',
                'http://1.bp.blogspot.com/-g25k2sNI6T4/VrD3p_NvIXI/AAAAAAAAaCo/pKh7tIJDpIc/s1600/flower-image-wildflower-persicaria-png.png',
                'http://moziru.com/images/vintage-flower-clipart-transparent-12.png',
                'https://s-media-cache-ak0.pinimg.com/originals/4c/3a/8d/4c3a8d56a32831b262fa807344e6a6b0.png',
                'https://www.artsybeedigital.com/uploads/3/7/9/4/37948779/flowers441.png',
                'https://cdn.pixabay.com/photo/2017/08/18/13/17/flower-2654929_640.png',
                'http://3.bp.blogspot.com/-xjnFjSddEl8/UWnnCquNDHI/AAAAAAAANcg/6n3r-XD7CIw/s1600/flwscrp019png.png'
            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };
            var total_number_of_images = function addFlowers(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            };
            var max_height = main.offsetHeight - img_heigth;
            var max_width = main.offsetWidth - img_width;
            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                var y = Math.floor( Math.random() * max_height );
                r = [x,y];
                return r;
            };
            var createImage = function(){
                var randomImg = img.cloneNode(true);
                var xy = randomCoordinate();
                randomImg.removeAttribute("id");
                randomImg.removeAttribute("hidden");
                randomImg.style.top = xy[1] + "px";
                randomImg.style.left = xy[0] + "px";
                randomImg.setAttribute("src",pickRandomImage());
                var animName=["jackInTheBox","rollIn","lightSpeedOut","flipOutY","rollOut","zoomIn","bounce","flash","lightSpeedIn","rubberBand","shake","rotateIn","swing","tada","wobble","jello","bounceIn","bounceOut","fadeIn","rubberBand","hinge"];
                var x = animName[Math.floor(Math.random()*animName.length)];
                randomImg.setAttribute("class",x);
                main.appendChild(randomImg);
                    
                $(document).ready(function(){
                    var count= 0;                  
                    $("img").draggable();
					$("#second").droppable({
					    accept: "img",
					    drop: function(event, ui) {
					      ui.draggable.draggable("destroy");
					      ui.draggable.detach().appendTo($(this));
                          length = $("#second  img").length;
                            $("#count").text(length);
					    }
					  });
                });
                
            };

            for (var i=0;i<total_number_of_images(10,20);i++){
                createImage();
            };
        };
       document.getElementById("addBtn").addEventListener("click",init);
})(window,document);