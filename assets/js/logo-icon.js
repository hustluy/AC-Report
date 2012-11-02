
// Time-stamp: <2012-11-01 09:21:51 gongzhitaao>

(function ($) {

    $(document).ready(function() {
        var cvs = $('#logo-icon')[0];
        var ctx = cvs.getContext('2d');
        var w = cvs.width;
        var h = cvs.height;

        ctx.beginPath();
        ctx.moveTo(10, 60);
        ctx.lineTo(10, 210);
        ctx.lineTo(590, 210);
        ctx.lineTo(590, 110);
        ctx.moveTo(10, 60);
        ctx.lineTo(540, 60);
        ctx.stroke();

        ctx.textBaseline = "top";
        ctx.font = "normal normal 120px HEADLINE";
        ctx.fillText("A+B Problem", 20, 80);

        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        //ctx.save();
        //ctx.lineWidth = 1;
        //ctx.beginPath();
        //ctx.strokeRect(0,0,w,h);
        //ctx.stroke();
        //ctx.restore();

        var s = 3;
        ctx.beginPath();
        ctx.translate(195*s, 30*s);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0.2*s, -8*s, 0.5*s, -13*s, 5*s, -12*s);
        ctx.bezierCurveTo(11*s, -8*s, 0*s, -5*s, 3*s, -6*s);
        ctx.moveTo(3*s, -6*s);
        ctx.lineTo(4*s, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.moveTo(1.5*s, -11*s);
        ctx.bezierCurveTo(2*s, -10*s, 0, -20*s, -10*s, -24*s);
        ctx.bezierCurveTo(2*s, -8*s, -2*s, -16*s, 1.5*s, -11*s);
        ctx.bezierCurveTo(3*s, -10*s, 0, -20*s, 8*s, -26*s);
        ctx.bezierCurveTo(4*s, -20*s, 7*s, -16*s, 1.5*s, -11*s);
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.strokeStyle="red";
        ctx.arc(4.5*s,-10*s,2,0,Math.PI*2,true);
        ctx.fill();
        ctx.restore();

        //ctx.beginPath();
        //ctx.arc(2*s,-9*s,2,0,Math.PI*2,true);
        //ctx.fill();

        ctx.beginPath();
        ctx.arc(2*s,-9*s,9.5*s,Math.PI*.56,Math.PI*1.24,false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(2*s,-9*s,9.5*s,Math.PI*1.41,Math.PI*1.49,false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(2*s,-9*s,9.5*s,Math.PI*1.65,Math.PI*2.43,false);
        ctx.stroke();

    });

}(jQuery));
