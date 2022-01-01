$(function () {
   // ==Работа с header==
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



   //==Работа с main==
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


   //Обработка клика по .main-section для открытия tab и начала работы с tasks
   $("main").on("click", ".main-section", function () {
      $(this).parent().append("<div class=\"main-section-tab\"><div class=\"section-tab-header flex\"><button class=\"tab-header-btnExit\"><svg width=\"27\" height=\"24\" viewBox=\"0 0 21 18\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.6448 10.3589L19.0562 10.3657C19.607 10.3666 19.7349 10.0506 19.3442 9.65992L10.9777 1.29338C10.5847 0.900364 9.95284 0.903479 9.56121 1.29511L1.22862 9.62769C0.832895 10.0234 0.965192 10.3375 1.51496 10.3384L5.64476 10.3448V14.5247C5.64476 15.6281 6.53902 16.5243 7.64215 16.5243H12.6474C13.7489 16.5243 14.6448 15.629 14.6448 14.5247V10.3589Z\" stroke=\"black\" stroke-width=\"1.3\" /></svg></button><h2>Новый раздел</h2></div><button class=\"section-tab-btn flex\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 6C10 7.10457 10.8954 8 12 8H17C17.5523 8 18 8.44771 18 9C18 9.55229 17.5523 10 17 10H12C10.8954 10 10 10.8954 10 12V17C10 17.5523 9.55229 18 9 18C8.44771 18 8 17.5523 8 17V12C8 10.8954 7.10457 10 6 10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8H6C7.10457 8 8 7.10457 8 6V1C8 0.447715 8.44771 0 9 0C9.55229 0 10 0.447715 10 1V6Z\" fill=\"#fff\" /></svg></button></div>");
      $("body").css({
         "overflow": "hidden"
      })
   });



   // ==Работа с tab==
   // Обработка клика по .tab-header-btnExit, скрытие всего таба .main-section-tab 
   $("main").on("click", ".tab-header-btnExit", function () {
      $(".main-section-tab").css({
         "display": "none"
      });
      $("body").css({
         "overflow": "visible"
      })
   });


   // Обработка клика по .section-tab-btn, добавление нововго поля для ввода task
   let newBlockTask = "<div class=\"section-tab-task flex\"><textarea class=\"tab-task-textarea\" rows=\"5\" maxlength=\"280\"></textarea><button class=\"tab-task-add\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 6C10 7.10457 10.8954 8 12 8H17C17.5523 8 18 8.44771 18 9C18 9.55229 17.5523 10 17 10H12C10.8954 10 10 10.8954 10 12V17C10 17.5523 9.55229 18 9 18C8.44771 18 8 17.5523 8 17V12C8 10.8954 7.10457 10 6 10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8H6C7.10457 8 8 7.10457 8 6V1C8 0.447715 8.44771 0 9 0C9.55229 0 10 0.447715 10 1V6Z\" fill=\"#fff\" /></svg></button><button class=\"tab-task-delete\"><svg width=\"20\" height=\"22\" viewBox=\"0 0 20 22\" fill=\"non\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 4H3H1C0.447715 4 0 4.44772 0 5C0 5.55229 0.447715 6 1 6H2V19C2 20.6569 3.34315 22 5 22H15C16.6569 22 18 20.6569 18 19V6H19C19.5523 6 20 5.55229 20 5C20 4.44772 19.5523 4 19 4H17H15V3C15 1.34315 13.6569 0 12 0H8C6.34315 0 5 1.34315 5 3V4ZM7 4H13V3C13 2.44772 12.5523 2 12 2H8C7.44771 2 7 2.44772 7 3V4ZM14 6H6L4 6V19C4 19.5523 4.44772 20 5 20H12C14.0436 20 16 18.0056 16 16V6L14 6Z\" fill=\"#fff\" /></svg></button></div>";

   $("main").on("click", ".section-tab-btn", function () {
      $(this).before(newBlockTask);
   });


   // Обработка клика по .tab-task-add, получение введённого тексата и преобразование этого текста в task
   $("main").on("click", ".tab-task-add", function () {
      let textTask = $(".tab-task-textarea").val();
      let sectionTabItem = "<div class=\"section-tab-item flex\"><h2 class=\"tab-item-h2\">" + textTask + "</h2><div class=\"tab-item-control flex\"><button class=\"item-control-done\"><svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"none\"><mask id=\"mask0_39_2024\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\ x=\"-1\" y=\"-1\"width=\"24\" height=\"24\"><rect x=\"-1\" y=\"-1\" width=\"24\" height=\"24\" fill=\"white\" /></mask><g mask=\"url(#mask0_39_2024)\"><path d=\"M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z\"stroke=\"#fff\" stroke-width=\"2\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\"d=\"M9.55604 11.9462C10.3371 12.7272 11.6034 12.7272 12.3845 11.9462L21.0378 3.29289C21.4283 2.90237 22.0615 2.90237 22.452 3.29289C22.8425 3.68342 22.8425 4.31658 22.452 4.70711L11.6738 15.4853C11.2833 15.8758 10.6501 15.8758 10.2596 15.4853C10.2355 15.4612 10.2129 15.4362 10.1918 15.4104L6.29289 11.5115C5.90237 11.1209 5.90237 10.4878 6.29289 10.0973C6.68342 9.70674 7.31658 9.70674 7.70711 10.0973L9.55604 11.9462Z\"fill=\"#fff\" /></g></svg></button><button class=\"item-control-delete\"><svg width=\"20\" height=\"22\" viewBox=\"0 0 20 22\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\"d=\"M5 4H3H1C0.447715 4 0 4.44772 0 5C0 5.55229 0.447715 6 1 6H2V19C2 20.6569 3.34315 22 5 22H15C16.6569 22 18 20.6569 18 19V6H19C19.5523 6 20 5.55229 20 5C20 4.44772 19.5523 4 19 4H17H15V3C15 1.34315 13.6569 0 12 0H8C6.34315 0 5 1.34315 5 3V4ZM7 4H13V3C13 2.44772 12.5523 2 12 2H8C7.44771 2 7 2.44772 7 3V4ZM14 6H6L4 6V19C4 19.5523 4.44772 20 5 20H12C14.0436 20 16 18.0056 16 16V6L14 6Z\"fill=\"#fff\" /></svg></button></div></div>";
      $(this).parent().before(sectionTabItem).remove();
   })


   // Обработка клика по .tab-task-delete, удаление поля для ввода task
   $("main").on("click", ".tab-task-delete", function () {
      $(this).parent().remove();
   });


   // Обработка клика по .item-control-done, отмечаем task, как выполнено(зачёркиваем)
   $("main").on("click", ".item-control-done", function () {
      $(this).parent(".tab-item-control").prev().css({
         "text-decoration": "line-through"
      });
   });


   // Обработка клика по .item-control-delete, удаляем task
   $("main").on("click", ".item-control-delete", function () {
      $(this).parent().parent().remove();
   });


});
