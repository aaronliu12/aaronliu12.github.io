      $(function() {
            $('#puzzle1').hover( function(){
                $(this).css('background-color', 'white');
                $('#story1').show();
                $('#puzzle3').css('z-index', '0');
                $('#puzzle2').css('z-index', '0');
                $('#pic1').css('filter', 'grayscale(0%)');
            },
            function(){
                $(this).css('background-color', 'rgba(255, 255, 255, 0.49)');
                $('#story1').hide();
                $('#puzzle3').css('z-index', '5');
                $('#puzzle2').css('z-index', '5');
                $('#pic1').css('filter', 'grayscale(100%)');
            });
            });
      $(function() {
            $('#puzzle2').hover( function(){
                $(this).css('background-color', 'rgb(139, 11, 11)');
                $('#puzzle3').css('z-index', '0');
                $('#puzzle4').css('z-index', '0');
                $('#story2').show();
                $('#pic2').css('filter', 'grayscale(0%)');
                
            },
            function(){
                $(this).css('background-color', 'rgba(139, 11, 11, .49)');
                $('#story2').hide();
                $('#puzzle3').css('z-index', '5');
                $('#puzzle4').css('z-index', '5');
                $('#pic2').css('filter', 'grayscale(100%)');
            });
            });
      
         $(function() {
            $('#puzzle3').hover( function(){
                $(this).css('background-color', 'white');
                $('#story3').show();
                $('#puzzle2').css('z-index', '0');
                $('#puzzle4').css('z-index', '0');
                $('#pic3').css('filter', 'grayscale(0%)');
            },
            function(){
                $(this).css('background-color', 'rgba(255, 255, 255, 0.49)');
                $('#story3').hide();
                $('#puzzle2').css('z-index', '5');
                $('#puzzle4').css('z-index', '5');
                $('#pic3').css('filter', 'grayscale(100%)');
            });
            });
          
           $(function() {
            $('#puzzle4').hover( function(){
                $(this).css('background-color', 'rgb(139, 11, 11)');
                $('#story4').show();
                $('#puzzle3').css('z-index', '0');
                $('#puzzle2').css('z-index', '0');
                $('#pic4').css('filter', 'grayscale(0%)')
            },
            function(){
                $(this).css('background-color', 'rgba(139, 11, 11, .49)');
                $('#story4').hide();
                $('#puzzle3').css('z-index', '5');
                $('#puzzle2').css('z-index', '5');
                $('#pic4').css('filter', 'grayscale(100%)');
            });
            });
        
            $(function() {
            $('#puzzle5').hover( function(){
                $(this).css('background-color', 'white');
                $('#story5').show();
                $('#puzzle3').css('z-index', '0');
                $('#puzzle4').css('z-index', '0');
                $('#pic5').css('filter', 'grayscale(0%)')
            },
            function(){
                $(this).css('background-color', 'rgba(255, 255, 255, 0.49)');
                $('#story5').hide();
                $('#puzzle3').css('z-index', '5');
                $('#puzzle4').css('z-index', '5');
                $('#pic5').css('filter', 'grayscale(100%)');
            });
            });