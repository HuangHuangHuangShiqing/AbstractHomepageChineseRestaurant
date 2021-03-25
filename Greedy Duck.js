//hotdry noodle
var mix=[];


//special noodle spoup
var mix2=[];

function hotdrynoodle(value){
    var r=document.getElementById("rg");
    var p=[];
    var s=[];
    var preference=[];
    var sum=7.99;


    if (document.getElementById("enter").checked==true) {
        
        //topping
        if (document.getElementById("nop").checked==true){
            var p1="Wuhang Hot Dry Noodle武汉热干面";
            p=p+p1;
            var nop=Number(document.getElementById("nop").value);
            sum=(sum+nop)*1.132222;
            price=sum;
            mix=mix+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
        }

       if(document.getElementById("slice").checked==true){
            var p2="Hot Dry Noodle with Slice Beef 牛肉热干面";
            p=p+p2;
            var slice=Number(document.getElementById("slice").value);
            sum=(sum+slice)*1.131;
            price=sum;
            mix=mix+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
            
        }
            
        if(document.getElementById("bb").checked==true){
              var p3="Hot Dry Noodle with Beef brisket牛腩热干面";
              p=p+p3;
              var bb=Number(document.getElementById("bb").value);
              sum=(sum+bb)*1.131;
              price=sum;
              mix=mix+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
              
        }
             
       if(document.getElementById("pi").checked==true){
            var p4="Hot Dry Noodle with Pork Intestine肥肠热干面";
            p=p+p4;
            var pi=Number(document.getElementById("pi").value);
            sum=(sum+pi)*1.13;
            price=sum;
            mix=mix+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
            
        }
        
        
        //spicy
        if (document.getElementById("nspicy").checked==true){
            var s1="No Spicy无辣";
            s=s+s1;
            mix=mix+s+"&nbsp;&nbsp;";
        }
        if (document.getElementById("mild").checked==true){
            var s2="Mild正常辣";
            s=s+s2;
            mix=mix+s+"&nbsp;&nbsp;";
        }
        if (document.getElementById("extraspicy").checked==true){
            var s3="Extra spicy超辣";
            s=s+s3;
            mix=mix+s+"&nbsp;&nbsp;";
        }

        //preference
        if(document.getElementById("greenonion").checked==true && document.getElementById("coriander").checked==true){
            var preference3="No Coriander无香菜"+"&nbsp;&nbsp;"+"No Green onion无葱";
            preference=preference+preference3;
            mix=mix+preference+"<hr/>";
        }
        else if (document.getElementById("greenonion").checked==true){
            var preference1="No Green onion无葱";
            preference=preference+preference1;
            mix=mix+preference+"<hr/>";
        }
        else if (document.getElementById("coriander").checked==true){
            var preference2="No Coriander无香菜";
            
            preference=preference+preference2;
            mix=mix+preference+"<hr/>";
        }
       
        else if(document.getElementById("greenonion").checked==false && document.getElementById("coriander").checked==false){
            mix=mix+"<hr/>";
        }


        
             r.innerHTML=mix+"<br/>";
             
             

             document.getElementById("enter").checked=false;

             document.getElementById("nspicy").checked=false;
             document.getElementById("mild").checked=false;
             document.getElementById("extraspicy").checked=false;

             document.getElementById("greenonion").checked=false;
             document.getElementById("coriander").checked=false;


             document.getElementById("bb").checked=false;
             document.getElementById("slice").checked=false;
             document.getElementById("nop").checked=false;
             document.getElementById("pi").checked=false;



       }
        

	 
  }


function noodlesoup(value){
    var r=document.getElementById("tm");
    var p=[];
    var s=[];
    var n=[];
    var preference=[];
    var sum2=0;
    if(document.getElementById("enter2").checked==true){
    
    
    
    //topping
   if(document.getElementById("slices").checked==true){
        var p2="Special Noodle Soup with Slice beef 秘制牛肉汤面";
        p=p+p2;
        var slices=Number(document.getElementById("slices").value);
        price=slices*1.13;
        mix2=mix2+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
        
    }
        
    if(document.getElementById("bbs").checked==true){
          var p3="Special Noodle Soup with Beef brisket 秘制牛腩汤面";
          p=p+p3;
          var bbs=Number(document.getElementById("bbs").value);
          price=bbs*1.13;
          mix2=mix2+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
          
    }
         
   if(document.getElementById("pis").checked==true){
        var p4="Special Noodle Soup with Pork intestine 秘制肥肠汤面";
        p=p+p4;
        var pis=Number(document.getElementById("pis").value);
        price=pis*1.13;
        mix2=mix2+"Price:"+price.toFixed(2)+"<br/>"+p+"<br/>";
    }
    
    //type of noodle
    if(document.getElementById("rn").checked==true){
        var n1="Regular noodle普通面";
        n+=n1;
        mix2=mix2+n+"<br/>";
        
    }
    if(document.getElementById("rice").checked==true){
        var n2="Rice noodle米粉";
        n+=n2;
        mix2=mix2+n+"<br/>";
    }

    //spicy
    if (document.getElementById("snspicy").checked==true){
        var s1="No Spicy无辣";
        s=s+s1;
        mix2=mix2+s+"&nbsp;&nbsp;";
    }
    if (document.getElementById("smild").checked==true){
        var s2="Mild正常辣";
        s=s+s2;
        mix2=mix2+s+"&nbsp;&nbsp;";
    }
    if (document.getElementById("sextraspicy").checked==true){
        var s3="Extra spicy超辣";
        s=s+s3;
        mix2=mix2+s+"&nbsp;&nbsp;";
    }

    //preference
    if(document.getElementById("sgreenonion").checked==true && document.getElementById("scoriander").checked==true){
        var preference3="No Coriander无香菜"+"&nbsp;&nbsp;"+"No Green onion无葱";
        preference=preference+preference3;
        mix2=mix2+preference+"<hr/>";
    }
    else if (document.getElementById("sgreenonion").checked==true){
        var preference1="No Green onion无葱";
        preference=preference+preference1;
        mix2=mix2+preference+"<hr/>";
    }
   else if (document.getElementById("scoriander").checked==true){
        var preference2="No Coriander无香菜";
        
        preference=preference+preference2;
        mix2=mix2+preference+"<hr/>";
    }
    else if(document.getElementById("sgreenonion").checked==false && document.getElementById("coriander").checked==false){
        mix2=mix2+"<hr/>";
    }


    
         r.innerHTML=mix2;
         

         document.getElementById("enter2").checked=false;

         document.getElementById("rn").checked=false;
         document.getElementById("rice").checked=false;

         document.getElementById("snspicy").checked=false;
         document.getElementById("smild").checked=false;
         document.getElementById("sextraspicy").checked=false;

         document.getElementById("sgreenonion").checked=false;
         document.getElementById("scoriander").checked=false;


         document.getElementById("bbs").checked=false;
         document.getElementById("slices").checked=false;
         document.getElementById("pis").checked=false;

    }
}