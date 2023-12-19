document.body.style.cursor = "url('mouse.png'), auto";
document.getElementById('image').addEventListener('click', function() {
    var balloon = document.getElementById('balloon');
    
    if (balloon.style.display === 'block') {
        balloon.style.display = 'none';
    } else {
        balloon.style.display = 'block';
    }
});
document.getElementById('image1').addEventListener('click', function() {
    var balloon1 = document.getElementById('balloon1');
    
    if (balloon1.style.display === 'block') {
        balloon1.style.display = 'none';
    } else {
        balloon1.style.display = 'block';
    }
});
document.getElementById('image2').addEventListener('click', function() {
    var balloon2 = document.getElementById('balloon2');
    
    if (balloon2.style.display === 'block') {
        balloon2.style.display = 'none';
    } else {
        balloon2.style.display = 'block';
    }
});
document.getElementById('image3').addEventListener('click', function() {
    var balloon3 = document.getElementById('balloon3');
    
    if (balloon3.style.display === 'block') {
        balloon3.style.display = 'none';
    } else {
        balloon3.style.display = 'block';
    }
});

document.getElementById('image4').addEventListener('click', function() {
    var balloon4 = document.getElementById('balloon4');
    
    if (balloon4.style.display === 'block') {
        balloon4.style.display = 'none';
    } else {
        balloon4.style.display = 'block';
    }
});

document.getElementById('image5').addEventListener('click', function() {
    var balloon5 = document.getElementById('balloon5');
    
    if (balloon5.style.display === 'block') {
        balloon5.style.display = 'none';
    } else {
        balloon5.style.display = 'block';
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 슬라이드를 보여주는 함수
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        resetStars();
        this.classList.add('hovered');
        this.previousElementSibling?.classList.add('hovered');
        this.previousElementSibling?.previousElementSibling?.classList.add('hovered');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('hovered');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('hovered');
    });

    star.addEventListener('mouseout', function() {
        resetStars();
    });

    star.addEventListener('click', function() {
        rating = this.getAttribute('data-value');
        resetStars();
        this.classList.add('selected');
        this.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('selected');
    });
});

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('hovered', 'selected');
    });
}

function submitReview() {
    const review = document.getElementById('reviewText').value;
    const rating = getSelectedRating();

    localStorage.setItem('userReview', review);
    localStorage.setItem('userRating', rating);

    console.log('Rating: ' + rating + ', Review: ' + review);
    alert('후기가 저장되었습니다!');
}

function getSelectedRating() {
    return rating; 
}

// 페이지 로드 시 저장된 후기 불러오기
document.addEventListener('DOMContentLoaded', function() {
    const savedReview = localStorage.getItem('userReview');
    const savedRating = localStorage.getItem('userRating');

    if (savedReview) {
        document.getElementById('reviewText').value = savedReview;
        setRating(savedRating);
    }
});

function setRating(ratingValue) {
    if (!ratingValue) return;
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= ratingValue) {
            star.classList.add('selected');
        }
    });
}
/*document.getElementById('imageContainer').addEventListener('dblclick', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    this.appendChild(heart);

    // 하트 이모티콘이 일정 시간 후에 사라지게 하려면 다음 코드를 사용합니다.
    setTimeout(() => heart.remove(), 1000); // 1초 후에 하트가 사라집니다.
});*/
document.getElementById('tokyoImage').addEventListener('click', function() {
    var map = document.getElementById('tokyoMap');
    map.style.display = map.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('tokyoMap').addEventListener('dblclick', function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    var heart = document.createElement('span');
    heart.classList.add('heart');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.innerHTML = '❤️';
    this.appendChild(heart);
});
document.querySelectorAll('.submit-review').forEach(button => {
    button.addEventListener('click', function() {
        const galleryItem = this.parentElement;
        const ratingStars = galleryItem.querySelectorAll('.star.selected').length;
        const reviewText = galleryItem.querySelector('.review-text').value;

        console.log('Rating: ' + ratingStars + ', Review: ' + reviewText);
    });
});

// 별점 선택 로직 (각각의 gallery-item에 대해 별도로 설정)
document.querySelectorAll('.gallery-item').forEach(item => {
    const stars = item.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            // 현재 클릭된 별 이전의 모든 별을 포함하여 'selected' 클래스를 추가
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            let prevSibling = this.previousElementSibling;
            while(prevSibling) {
                prevSibling.classList.add('selected');
                prevSibling = prevSibling.previousElementSibling;
            }
        });
    });
});

document.querySelectorAll('.description').forEach(element => {
    
    element.addEventListener('mouseover', function() {

        this.setAttribute('data-original-text', this.innerText);
        this.setAttribute('data-original-color', this.style.backgroundColor);

        
        this.innerText = this.getAttribute('data-hover-text');

        
        this.style.backgroundColor = 'lightblue'; 
    });

    
    element.addEventListener('mouseout', function() {
        
        this.innerText = this.getAttribute('data-original-text');

        this.style.backgroundColor = this.getAttribute('data-original-color') || ''; 
    });
});
window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // 모달 표시
    modal.style.display = "block";

    // 닫기 버튼을 클릭하면 모달을 닫음
    span.onclick = function() {
        modal.style.display = "none";
    };

    // 모달 외부를 클릭하면 모달을 닫음
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};