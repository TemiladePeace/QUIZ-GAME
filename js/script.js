   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizGame=document.getElementById('questionBox');
   
  var optn1=document.getElementById('option1');
  var optn2=document.getElementById('option2');
  var optn3=document.getElementById('option3');
  var optn4=document.getElementById('option4');


      var app={
                questions:[
                          {q:'HTML stands for?', options:['Hypers Text Markup Language','High Text Markup Language','Hyper Text Markup Language',
                          'Hypo Tabular Markup Language'],answer:3},

                          {q:'A break tag is denoted as?',options:['br','breaks','/br','break'],answer:1},

                          {q:'CSS stands for ?',options:['Cascading Styling Sheet','Cascade Sheet and Style','Coupon Styling sheet','Cascading Style Sheet'],answer:4},
                          {q:'Correct HTML tag for the largest heading is ?',options:['h8','h3','h5','h1'],answer:4},
                          {q:'A paragraph in Html starts and ends with one of the following ?',options:['p/ and /p','p and /p','p and p','/p and /p'],answer:2}
                          ],
                index:0,
                Quiz:function(){
                	   if(this.index<=this.questions.length-1){
                        quizGame.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        optn1.innerHTML=this.questions[this.index].options[0];
                        optn2.innerHTML=this.questions[this.index].options[1];
                        optn3.innerHTML=this.questions[this.index].options[2];
                        optn4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizGame.innerHTML="QUIZ IS OVER! PLEASE TRY AGAIN LATER!"      
                        optn1.style.display="none";
                        optn2.style.display="none";
                        optn3.style.display="none";
                        optn4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.Quiz();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                            ele.innerHTML="Wrong";
                            
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                   scoreCard.innerHTML= this.score  + "/"+this.questions.length ;
                }
 
           }

           window.onload=app.Quiz();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



