<div style="">
  <canvas id="canvas" style="width:400px;">��ǰ�������֧��canvas������������������</canvas>
</div>


<script src="http://files.cnblogs.com/files/xiaohuochai/digit.js"></script>    
<script>
var canvas = document.getElementById('canvas');
if(canvas.getContext){
    var cxt = canvas.getContext('2d');
    canvas.height = 100;
    canvas.width = 700;
    function renderDigit(index,num){
        var R = canvas.height/20-1;
        for(var i = 0; i < digit[num].length; i++){
            for(var j = 0; j < digit[num][i].length; j++){
                if(digit[num][i][j] == 1){
                    cxt.beginPath();
                    cxt.arc(14*(R+2)*index + j*2*(R+1)+(R+1),i*2*(R+1)+(R+1),R,0,2*Math.PI);
                    cxt.closePath();
                    cxt.fill();
                }
            }
        }        
    }
    function digitTime(){
        /*��ȡʱ������*/
        var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
        //�洢ʱ�����֣���ʮλСʱ����λСʱ��ð�š�ʮλ���ӡ���λ���ӡ�ð�š�ʮλ���ӡ���λ������7���������
        var data = [];
        data.push(temp[1],temp[2],10,temp[3],temp[4],10,temp[5],temp[6]);
        /*��Ⱦʱ��*/
        //���û������ȣ��ﵽ��ջ�����Ч��
        canvas.height = 100;
        for(var i = 0; i < data.length; i++){
            renderDigit(i,data[i]);
        }
    }
    digitTime();
    clearInterval(oTimer);
    var oTimer = setInterval(function(){
        digitTime();
    },500);    
}
</script>
