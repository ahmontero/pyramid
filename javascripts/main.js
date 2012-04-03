function createPyramid(x, y){
        $('#pyramid').Pyramid({
              'height': 350,
              'width': 350,
              'slices':4,
              'slice_separation': 0.1,
              'colours': ['red', 'yellow', 'green', 'blue'],
              'text': ['1', '2', '3', '4']
             })
             .on('click', function(event){ alert(event.text) });
};

