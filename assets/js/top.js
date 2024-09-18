// =============================================
// particles.jsを使って楕円形を動かすアニメーション
// =============================================
particlesJS('js-particles', {
  "particles": {
    "number": {
      "value": 6, // パーティクルの数を指定
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "type": "image", // パーティクルの形状を画像に設定
      "image": {
        "src": "assets/images/rectangle.png", // 画像のパスを指定
        "width": 100, // 画像の幅
        "height": 100 // 画像の高さ
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 150, // パーティクルの大きさを指定
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 3, // パーティクルの動きの速さを指定
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});

// =============================================
// スクロール検知とsectionTitleアニメーション開始
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".sectionTitle__wrapper");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // 一度アニメーションを開始したら、再度監視しない
        }
      });
    },
    { threshold: 1 } // 70%以上見えたときにアニメーションを開始
  );

  targets.forEach(target => {
    observer.observe(target);
  });
});

// =============================================
// 「利用者の声」セクションのsliderアニメーション
// =============================================
$(function() {
  $('#js-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 4,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true, // これを追加
  });
});

$(function() {
  $('#js-slider-bottom').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 4,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true, // これを追加
  });
});
