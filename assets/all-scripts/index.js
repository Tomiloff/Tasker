$(function () {
   // Открытие аккордеона по кнопке в хедере.header-btn-icon
   $("#header-btn").click(function () {
      $(".header-list").slideToggle();
   })



   // Обработка клика вне элемента аккордиона .header-list
   $(document).click(function (e) {
      let topAccordion = $(".header-list, .header-btn");
      if (!topAccordion.is(e.target) && topAccordion.has(e.target).length == 0) {
         $(".header-list").slideUp();
      }
   });



   // Обработка клика по кнопке мобильного меню #header-btn-mobile с отключением/включением скролла
   $("#header-btn-mobile").click(function () {
      $(".mobile-menu").slideToggle();
      $("body").css({
         "overflow": "hidden"
      })
   });

   $(".mobile-menu-exit").click(function () {
      $(".mobile-menu").slideUp();
      $("body").css({
         "overflow": "visible"
      })
   });



   // Добавление нового раздела с tasks
   let newBlockSection = "<section class=\"main-section flex\"><button class=\"deleteSection\"><svg width=\"15\" height=\"17\" viewBox=\"0 0 20 22\" fill=\"none\"><path class=\"deleteSection-patch\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"d=\"M5 4H3H1C0.447715 4 0 4.44772 0 5C0 5.55229 0.447715 6 1 6H2V19C2 20.6569 3.34315 22 5 22H15C16.6569 22 18 20.6569 18 19V6H19C19.5523 6 20 5.55229 20 5C20 4.44772 19.5523 4 19 4H17H15V3C15 1.34315 13.6569 0 12 0H8C6.34315 0 5 1.34315 5 3V4ZM7 4H13V3C13 2.44772 12.5523 2 12 2H8C7.44771 2 7 2.44772 7 3V4ZM14 6H6L4 6V19C4 19.5523 4.44772 20 5 20H12C14.0436 20 16 18.0056 16 16V6L14 6Z\"fill=\"#252A31\"/></svg></button><button class=\"editSection\"><svg width=\"15\" height=\"15\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\"d=\"M19.7071 5.29289L14.7071 0.292893C14.3166 -0.0976311 13.6834 -0.0976311 13.2929 0.292893L0.292893 13.2929C0.105357 13.4804 0 13.7348 0 14V19C0 19.5523 0.447715 20 1 20H6C6.26522 20 6.51957 19.8946 6.70711 19.7071L19.7071 6.70711C20.0976 6.31658 20.0976 5.68342 19.7071 5.29289ZM2 18V14.4142L14 2.41421L14.7574 3.17157C16.3195 4.73367 16.3195 7.26633 14.7574 8.82843L5.58579 18H2Z\"fill=\"#252A31\" /></svg></button><h2 id=\"main-section-title\">Новый раздел</h2></section>";

   $(".main-section-btn").click(function () {
      $(this).before(newBlockSection);
   });



   // Удаление раздела с tasks
   $("main").on("click", ".deleteSection", function () {
      $(this).parent(".main-section").remove();
   });



   // Обработка клика по кнопке .editSection для изменения названия раздела для tasks
   $("main").on("click", ".editSection", function (e) {
      if ($(this).parent(".main-section").children("#mainSectionName", "#addName").length == 1) {
         e.preventDefault();
      }
      else {
         $(this).parent(".main-section").append("<input type='text' id='mainSectionName' maxlength='20'></input><button id='addName'>ok</button>").css({ "padding": "42px" });
         $(this).next().remove();
      }
   })



   // Получение введённых данных в input #mainSectionName, изменение названия и стилизации раздела с tasks
   $("main").on("click", "#addName", function () {
      let newBlockName = $("#mainSectionName").val();
      if (newBlockName == "Важное") {
         $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").css({ "padding": "43px" }).removeClass().addClass("main-section flex important-section").children("#addName, #mainSectionName").remove();
      }
      else if (newBlockName == "Работа") {
         $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").css({ "padding": "43px" }).removeClass().addClass("main-section flex work-section").children("#addName, #mainSectionName").remove();
      }
      else if (newBlockName == "Личное") {
         $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").css({ "padding": "43px" }).removeClass().addClass("main-section flex personal-section").children("#addName, #mainSectionName").remove();
      }
      else if (newBlockName == "Идеи") {
         $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").css({ "padding": "43px" }).removeClass().addClass("main-section flex ideas-section").children("#addName, #mainSectionName").remove();
      }
      else {
         $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").css({ "padding": "43px" }).removeClass().addClass("main-section flex").children("#addName, #mainSectionName").remove();;
      }
   });







});
