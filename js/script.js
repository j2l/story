
jQuery(function($){
				$('#squiffy').squiffy();
				var restart = function () {
					$('#squiffy').squiffy('restart');
				};
				$('#restart').click(restart);
				$('#restart').keypress(function (e) {
					if (e.which !== 13) return;
					restart();
				});
			});