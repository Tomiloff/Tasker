$(function () {

   $(".header-btn-icon").click(function () {
      $(".header-list").slideToggle();
   })

   $(document).click(function (e) {
      let topAccordion = $(".header-list, .header-btn");
      if (!topAccordion.is(e.target) && topAccordion.has(e.target).length == 0) {
         $(".header-list").slideUp();
      }
   });

});