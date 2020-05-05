(function($){
    $.fn.customPaginate = function(options){

      var paginationContainer = this;
      var itemToPaginate;

      var defaultt = {
        itemsPerPage : 5
      };
      var settings ={};
      $.extend(settings, defaultt, options);
      paginationContainer = $(settings.paginationContainer);
      itemToPaginate = $(settings.itemToPaginate);
      $("<ul></ul>").prepend(paginationContainer);
    }



}(jQuery))