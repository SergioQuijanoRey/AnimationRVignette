(function($) {
    $(document).ready(function() {
	
	$('#k_means').scianimator({
	    'images': ['images/kmeans/k_means1.png', 'images/kmeans/k_means2.png', 'images/kmeans/k_means3.png', 'images/kmeans/k_means4.png', 'images/kmeans/k_means5.png', 'images/kmeans/k_means6.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#k_means').scianimator('play');
    });
})(jQuery);
