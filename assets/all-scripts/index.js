$(function () {
   // .header-btn-icon - кнопка меню в хедере
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
   let newBlockSection = "<section class=\"main-section flex\"><button class=\"editSection\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\"d=\"M19.7071 5.29289L14.7071 0.292893C14.3166 -0.0976311 13.6834 -0.0976311 13.2929 0.292893L0.292893 13.2929C0.105357 13.4804 0 13.7348 0 14V19C0 19.5523 0.447715 20 1 20H6C6.26522 20 6.51957 19.8946 6.70711 19.7071L19.7071 6.70711C20.0976 6.31658 20.0976 5.68342 19.7071 5.29289ZM2 18V14.4142L14 2.41421L14.7574 3.17157C16.3195 4.73367 16.3195 7.26633 14.7574 8.82843L5.58579 18H2Z\"fill=\"#252A31\" /></svg></button><h2 id=\"main-section-title\">Новый раздел</h2></section>"

   $(".main-section-btn").click(function () {
      $(this).before(newBlockSection);
   });


   // Обработка клика по кнопке .editSection для изменения названия раздела для tasks
   $("main").on("click", ".editSection", function (e) {
      if ($(this).parent(".main-section").children("#mainSectionName", "#addName").length == 1) {
         e.preventDefault();
      }
      else {
         $(this).parent(".main-section").append("<input type='text' id='mainSectionName'></input><button id='addName'>ok</button>");
         $(this).next().detach();
      }
   })


   // получение введённых данных в input и изменение названия раздела с tasks
   $("main").on("click", "#addName", function () {
      let newBlockName = $("#mainSectionName").val();
      $(this).parent(".main-section").append("<h2>" + newBlockName + "</h2>").children("#addName,#mainSectionName").detach();
   });








});
