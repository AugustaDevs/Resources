$.fn.parallax = function () {
    var window_width = $(window).width();
	// Parallax Scripts
	id_index = 0;
	return this.each(function(i) {
		var $this = $(this);
		$this.addClass('parallax');
		$('img',$this).attr('id', 'parallax_img_'+id_index);
		id_index++;
		function updateParallax(initial) {
			var container_height;
			var $img = $this.children("img").first();
			if (initial) $img.css('display', 'block');
			// if(window_width < 401) return;
			if (window_width < 601) {
				container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
			}
			else {
				container_height = ($this.height() > 0) ? $this.height() : 500;
			}
			var img_height = $img.height();
			var parallax_dist = img_height - container_height;
			var bottom = $this.offset().top + container_height;
			var top = $this.offset().top;
			var scrollTop = $(window).scrollTop();
			var windowHeight = $(window).innerHeight();
			var windowBottom = scrollTop + windowHeight;
			var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
			var parallax = Math.round((parallax_dist * percentScrolled));
			// alert((bottom > scrollTop) && (top < (scrollTop + windowHeight)));

			// console.log('('+ bottom +' > '+ scrollTop +') && ('+top+' < ('+scrollTop+' + ' +windowHeight+')');
			if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
				$left = $img.width()/2;
				// console.log($img);
				// cssSandpaper.setTransform(document.getElementById($img.attr('id')), "translate(-"+$left+"px," + parallax + "px)");
				$img.css({'-webkit-transform': "translate3D(-"+$left+"px," + parallax + "px, 0)",
						  '-moz-transform': "translate3D(-"+$left+"px," + parallax + "px, 0)",
						  '-ms-transform': "translate3D(-"+$left+"px," + parallax + "px, 0)",
						  '-o-transform': "translate3D(-"+$left+"px," + parallax + "px, 0)",
						  'transform': "translate3D(-"+$left+"px," + parallax + "px, 0)"});
			}

		}

		// Wait for image load
		$this.children("img").one("load", function() {
			updateParallax(true);
		}).each(function() {
			if(this.complete) $(this).load();
		});

		$(window).scroll(function() {
			window_width = $(window).width();
			updateParallax(false);
		});

		$(window).resize(function() {
			window_width = $(window).width();
			updateParallax(false);
		});
		$(window).load(function() {
			window_width = $(window).width();
			updateParallax(false);
		});

	});

};