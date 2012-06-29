(function($){
	$.fn.placeholder = function() {
		return this.each(function() {
			var $this = $(this);

			$.data($this, "placeholder.val", $this.val());
			$this.focus(function() {
				var placeholder = $.data($this, "placeholder.val");
				if ($this.val() == placeholder) { $this.val("") };
			});
			$this.blur(function() {
				var placeholder = $.data($this, "placeholder.val");
				if ($this.val() == "") { $this.val(placeholder)};
			});
		});
	};
})(jQuery);
$(document).ready(function(){
	$(".placeholder").placeholder();
	$("#contactForm").submit(function() {
		$("#overlay").show();
		setTimeout('$("#overlay").fadeOut()', 2000)
	});
});