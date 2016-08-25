var numberOfFaces = parseInt(prompt("How many images to begin?"));

      function generateFaces() {
        var theBody = document.getElementsByTagName("body")[0];
        var theLeftSide = document.getElementById("leftSide");
        var theRightSide = document.getElementById("rightSide");

        
        for (i = 1; i <= numberOfFaces; i++) {
          var theImg = document.createElement("img");
          theImg.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
          theImg.style.top = Math.floor(Math.random() * 400 + 1) + "px";
          theImg.style.left = Math.floor(Math.random() * 400 + 1) + "px";
          theLeftSide.appendChild(theImg);
        }
        
        leftSideImgs = theLeftSide.cloneNode(true);
        leftSideImgs.removeChild(leftSideImgs.lastChild);
        theRightSide.appendChild(leftSideImgs);
        
        theLeftSide.lastChild.onclick = function nextLevel(event){
          event.stopPropagation();
          numberOfFaces += 1;
          while (theLeftSide.lastChild){
            theLeftSide.removeChild(theLeftSide.lastChild);
          }
           while (theRightSide.lastChild){
            theRightSide.removeChild(theRightSide.lastChild);
          }
          generateFaces();
        };

        theLeftSide.onclick = function gameOver() {
          alert("You lose! \nGame Over!\n\n Press 'Restart' button");
          theBody.onclick = null;
          theLeftSide.lastChild.onclick = null;
        }; 
      }

      function restartGame () {
        location.reload();
      }
