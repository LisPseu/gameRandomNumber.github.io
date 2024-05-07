const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        play();
    }
})
button.addEventListener("click", play );
function play() {
    const userNumber = document.querySelector("#guess").value ;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',       
        });
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',       
        });
    }

    else {
        if (userNumber < answer){
            Swal.fire("Поробуй число выше!",
                "Компьютер пока побеждает!"
            );
        }
        else if (userNumber > answer) {
            Swal.fire("Поробуй число ниже!",
                "Компьютер пока побеждает!"
            );
        }

        else {
            Swal.fire({
                title: "Победа!!!",
                imageUrl: "https://static.vecteezy.com/system/resources/previews/004/999/824/non_2x/best-champions-cup-trophy-design-champion-cup-winner-trophy-award-with-ribbon-design-free-vector.jpg",
                imageHeight: 400,
                imageWidth: 600,
                imageAlt: "Победа"
                 
              });
        }
        }   
     }

