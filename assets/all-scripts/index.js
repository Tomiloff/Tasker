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


   // Обработка клика по кнопке мобильного меню #header-btn-mobile с отключением скролла
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

});