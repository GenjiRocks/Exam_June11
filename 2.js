// Pattern printing
/* 
    * * * * *
    * * * *
    * * *
    * * * *
    * * * * *
    using javascript
*/

for(i=1;i<=5;i++){
    str=''
    for(j=1;j<=5;j++){
        if(i==1 || i==5 || (i==2 && j<4) || (i==3 && j==3)){
             str+='* '
        }
        else if((j==2 || j==5) || (i==4 && j>2)){
            str+='* '
        }
       
    }
    console.log(str);
}


