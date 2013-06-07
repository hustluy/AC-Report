
// Time-stamp: <2012-10-05 16:01:55 gongzhitaao>

(function ($) {

    $(document).ready(function() {
        logo_full();
    });

    function logo_full() {
        var ctx = $('#logo-full')[0].getContext('2d');
        var s = 8;

        ctx.lineWidth = 6;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'lightgrey';

        ctx.shadowBlur = 20;
        ctx.shadowColor = "yellow";

        ctx.translate(5*s, 12*s);
        ctx.beginPath();
        // C
        ctx.moveTo(12*s, 0);
        ctx.bezierCurveTo(0, 0, 0, 4*s, 0, 11*s);
        ctx.bezierCurveTo(0, 16*s, 0, 16*s, 12*s, 16*s);
        // o
        var r = 8;
        ctx.translate(14*s, 10*s);
        ctx.moveTo(r, 0);
        ctx.arcTo(5*s, 0, 5*s, 6*s, r);
        ctx.arcTo(5*s, 6*s, 0, 6*s, r);
        ctx.arcTo(0, 6*s, 0, 0, r);
        ctx.arcTo(0, 0, 5*s, 0, r);
        // d
        ctx.translate(7*s, -3*s);
        ctx.moveTo(5*s, 3*s);
        ctx.bezierCurveTo(0, 3*s, 0, 3*s, 0, 7*s);
        ctx.bezierCurveTo(0, 9*s, 0, 9*s, 3*s, 9*s);
        ctx.bezierCurveTo(5*s, 9*s, 5*s, 9*s, 5*s, 0);
        // i
        ctx.translate(7*s, 0);
        ctx.moveTo(1.5*s, 3*s);
        ctx.lineTo(1.5*s, 9*s);
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.strokeStyle = "rgb(0, 255, 0)";
        ctx.bezierCurveTo(0, 1.5*s, 0, 1.5*s, 1.5*s, 1.5*s);
        ctx.bezierCurveTo(1.5*s, 0, 1.5*s, 0, 0, 0);
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        // n
        ctx.translate(4*s, 3*s);
        ctx.moveTo(0, 6*s);
        ctx.bezierCurveTo(0, 0, 0, 0, 2*s, 0);
        ctx.bezierCurveTo(5*s, 0, 5*s, 0, 5*s, 6*s);
        // g
        ctx.translate(7*s, 0);
        ctx.moveTo(5*s, 0);
        ctx.bezierCurveTo(0, 0, 0, 0, 0, 3*s);
        ctx.bezierCurveTo(0, 6*s, 0, 6*s, 3*s, 6*s);
        ctx.bezierCurveTo(4*s, 6*s, 4*s, 6*s, 4*s, 9*s);
        ctx.bezierCurveTo(0, 22*s, -20*s, 26*s, -38*s, 18*s);
        ctx.bezierCurveTo(-50*s, 12*s, -40*s, 10*s, 42*s, 8.5*s);
        // R
        ctx.translate(7*s, 6*s);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0.2*s, -8*s, 0.5*s, -13*s, 5*s, -12*s);
        ctx.bezierCurveTo(11*s, -8*s, 0*s, -5*s, 3*s, -6*s);
        ctx.moveTo(3*s, -6*s);
        ctx.lineTo(4*s, 0);
        ctx.stroke();
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(1.5*s, -11*s);
        ctx.bezierCurveTo(2*s, -10*s, 0, -20*s, -10*s, -24*s);
        ctx.bezierCurveTo(2*s, -8*s, -2*s, -16*s, 1.5*s, -11*s);
        ctx.bezierCurveTo(3*s, -10*s, 0, -20*s, 8*s, -26*s);
        ctx.bezierCurveTo(4*s, -20*s, 7*s, -16*s, 1.5*s, -11*s);
        ctx.stroke();
        ctx.restore();
        // ab
        ctx.translate(7*s, -6*s);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(4*s, 0, 4*s, 0, 4*s, 2*s);
        ctx.bezierCurveTo(4*s, 6*s, 4*s, 6*s, 2*s, 6*s);
        ctx.bezierCurveTo(0, 6*s, 0, 6*s, 0, 4*s);
        ctx.bezierCurveTo(0, 3*s, 0, 3*s, 4*s, 3*s);
        ctx.moveTo(4*s, -3*s);
        ctx.bezierCurveTo(4*s, 6*s, 4*s, 6*s, 6*s, 6*s);
        ctx.bezierCurveTo(8*s, 6*s, 8*s, 6*s, 8*s, 4*s);
        ctx.bezierCurveTo(8*s, 0, 8*s, 0, 4*s, 0);
        // b
        ctx.translate(10*s, -3*s);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0, 9*s, 0, 9*s, 2*s, 9*s);
        ctx.bezierCurveTo(5*s, 9*s, 5*s, 9*s, 5*s, 7*s);
        ctx.bezierCurveTo(5*s, 3*s, 5*s, 3*s, 0, 3*s);
        // i
        ctx.translate(6*s, 0);
        ctx.moveTo(1.5*s, 3*s);
        ctx.lineTo(1.5*s, 9*s);
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineWidth = 2;
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.strokeStyle = "rgb(0, 255, 0)";
        ctx.bezierCurveTo(0, 1.5*s, 0, 1.5*s, 1.5*s, 1.5*s);
        ctx.bezierCurveTo(1.5*s, 0, 1.5*s, 0, 0, 0);
        ctx.fill();
        ctx.restore();
        // t
        ctx.translate(3.5*s, 3*s);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(4*s, 0);
        ctx.moveTo(2*s, -s);
        ctx.bezierCurveTo(2*s, 6*s, 2*s, 6*s, 4*s, 6*s);
        ctx.stroke();
    }
})(jQuery)
