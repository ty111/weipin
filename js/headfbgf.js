/**
 * Created by asus-pc on 2017/2/27.
 */
function onmouseover1(obj1,obj2){
      obj1.onmouseover=obj2.onmouseover=function(){
          obj2.style.display="block";
      };
      obj1.onmouseout=obj2.onmouseout=function(){
          obj2.style.display="none";
      }
}
function onmouseover2(obj1,obj2){
    for(var i=0;i<obj1.length;i++){
        obj1[i].index=i;
        obj1[i].onmouseover=function() {
            obj2[this.index].style.opacity=1;
        };
        obj1[i].onmouseout=function() {
            obj2[this.index].style.opacity=0;
        }
    }
}