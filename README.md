
[Pyramid](http://github.com/ahmontero/pyramid.js)
=================
This plugin allows you to create simple pyramids. I am sure it can be improved in , and you are welcome to do it!


Demo
====
You can try it [here] (http://ahmontero.github.com/pyramid/)


Requisites
==========

+ jQuery (http://jquery.com/)


Quick start
===========

<pre>
    $('element_to_render_pyramid').Pyramid({ 
        'height': 400,
        'width': 400,
        'slices':4,
        'slice_separation': 0.1,
        'colours': ['red', 'yellow', 'green', 'blue'],
        'text': ['one', 'two', 'three', 'four']    
    })
    .on('click', function(event){ alert(event.text) } );

<div id="calendar"></div>
</pre>


Parameters
==========

<pre>
base: Width of the pyramid. Default: 400
height: Height of hte pyramid. Default: 400
slices: Number of slices of the pyramid. Default: 3
slice_separation: Separation between the slices (percentage of the height). Default:0.1
colours: Colour of each slice (from bottom to top)
text: Text inside the slice (from bottom to top)
text_size: Default: 20
</pre>
