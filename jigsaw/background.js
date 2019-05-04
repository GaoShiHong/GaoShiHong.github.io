<script>
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var number = 0;
            var str;
            function jindu(number) {
                var percent = 800 / 100 * number;
                //画圆环
                ctx.clearRect(0, 0, 800, 240);
                ctx.beginPath();
                ctx.lineWidth = 20;
                ctx.lineCap='round';
                ctx.strokeStyle='#d3d3d3';
                ctx.moveTo(0,120);
                ctx.lineTo(800,120);              
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle='orange'       
                ctx.moveTo(0,120);
                ctx.lineTo(percent,120);
                ctx.stroke();
                ctx.beginPath();
                ctx.font="50px 微软雅黑";
                if (number<10) {
                    str='0'+number+'%';
                }
                else{
                    str=number+'%';
                }
                ctx.fillText(str,400, 120);
            }
           
            var time = setInterval(function () {
                if (number < 100) {
                   
                    jindu(number);
                    number++;
                }
                else {
                    clearInterval(time);
                    document.querySelector('.background').className='background disnone'
                }
            }, 50);
            </script>