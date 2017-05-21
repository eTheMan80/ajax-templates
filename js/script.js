(function($) {
  function loadData() {
    $.ajax({
        url: "js/feature.json",
        dataType: "json",
        cache: false
    }).done(function (data) {
        loadProducts(data);
    }).fail(function() {
      console.log('This is a failed request!!');
      productsContainer.parent().append('<p class="error">Something went wrong.<br> Please refresh the page and try again.</p>');
    });
  }
  function loadProducts(data) {
    var ProductHTML = "",
        container = $(".main");
    $.each(data, function (index, item) {
      var productTemplate = '<div class="product"><a href="' + item.href + '"><img src="' + item.imageUrl + '"><span>' + item.category + '</span><h2>' + item.title +'</h2><p>' + item.description + '</p></div>';
      ProductHTML += productTemplate;
    });
    container.empty().append(ProductHTML);
  }
  $(document).ready(loadData);
})(jQuery);
