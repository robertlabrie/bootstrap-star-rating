(function ( $ ) {
 
    $.fn.rating = function( method, options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
			limit: 5,
			value: 0,
			glyph: "glyphicon-star",
            coloroff: "gray",
			coloron: "gold",
			size: "2.0em",
			cursor: "default",
            endofarray: "idontmatter"
        }, options );
		var style = "";
		style = style + "font-size:" + settings.size + "; ";
		style = style + "color:" + settings.coloroff + "; ";
		style = style + "cursor:" + settings.cursor + "; ";
	
		
        // Greenify the collection based on the settings variable.
		/*
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
		*/
		console.log(method);
		if (method == 'create')
		{
			//this.html('');	//junk whatever was there
			
			//initialize the data-rating property
			this.each(function(){
				attr = $(this).attr('data-rating');
				if (attr === undefined || attr === false) { $(this).attr('data-rating',0); }
			})
			
			//bolt in the glyphs
			for (var i = 0; i < settings.limit; i++)
			{
				this.append('<span data-value="' + (i+1) + '" class="ratingicon glyphicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></span>');
			}
			
			//paint
			this.each(function() { paint($(this)); });

		}
		if (method == 'set')
		{
			
		}
		if (method == 'get')
		{
			return this.attr('data-rating');
		}
		this.find("span.ratingicon").click(function() {
			rating = $(this).attr('data-value')
			$(this).parent().attr('data-rating',rating);
			paint($(this).parent());
		})
		function paint(div)
		{
			rating = div.attr('data-rating');
			div.find("input").val(rating);	//if there is an input in the div lets set it's value
			div.find("span.ratingicon").each(function(){	//now paint the stars
				
				var rating = $(this).parent().attr('data-rating');
				var value = $(this).attr('data-value');
				if (value > rating) { $(this).css('color',settings.coloroff); }
				else { $(this).css('color',settings.coloron); }
			})
		}
		function stars(obj)
		{
			console.log('do the stars')
		}
    };
 
}( jQuery ));