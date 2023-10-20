
const textConfig = {
  text1: "He luu cậu!",
  text2: "Trái đất có bao nhiêu sao trên trời,<br>Nhưng chỉ có em là ngôi sao sáng nhất trong lòng anh,<br>Hãy để anh được yêu và bảo vệ em,<br>Suốt cuộc đời này và mãi mãi sau này.",
  text3: "Phải chăng anh đã yêu em ngay từ cái nhìn đầu tiên 😙",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ tớ rùi đó nha（づ￣3￣）づ╭❤️～",
  text5: "Không anh trai à :3",
  text6: "Yêu ơi là yêu <33",
  text7: "Trên thế giới hơn 8 tỉ người mà sao em lại yêu anh `(*>﹏<*)′",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Anh biết mà 🥰. Yêu em nhiều nhiều 😘😘 ",
  text11: "Mặc váy vào đi lát anh qua đón đi chơi",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      html: textConfig.text2, // Sử dụng thuộc tính "html" để hiển thị HTML trong Swal.fire
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }
  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 981,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.instagram.com/duongmai0399/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
  function addCustomStyles() {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .swal2-content {
        padding: 0px;
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  // Gọi hàm để thêm CSS khi trang web đã sẵn sàng
  $(document).ready(function () {
    // Thêm CSS
    addCustomStyles();
  
    // Các phần còn lại của đoạn mã của bạn
  });
  
  
  
  
  
  
  
});
