      window.onscroll = function() {myFunction()};

        function myFunction() {
            if (document.body.scrollTop > 650) {
                $('#up').css('display', 'block');
            } 
            if (document.body.scrollTop < 650) {
                $('#up').css('display', 'none');
        }
        }
        

           function up() {  
        $("html, body").animate({ scrollTop: 0 }, "fast");
           }
            
        function fashionover(object) {
            object.src = 'assets/img/Fashion%20Squared.png';
            document.getElementById("fashionfilm1").style.display = "block";
        }

        function fashionback(object) {
            object.src = 'assets/img/Fashion%20Squared%20B&W.png';
            document.getElementById("fashionfilm1").style.display = "none";
        }
        function filmover(object) {
            object.src = 'assets/img/Math%20Squared.png';
            document.getElementById("fashionfilm3").style.display = "block";
        }
        
        function filmback(object) {
            object.src = 'assets/img/Math%20Squared%20B&W.png';
            document.getElementById("fashionfilm3").style.display = "none";
        }
      
        function psychologyover(object) {
            object.src = 'assets/img/Psychology%20Squared.png';
            document.getElementById("Cindy").style.display = "block";
        }
        function psychologyback(object) {
            object.src = 'assets/img/Psychology%20Squared%20B&W.png';
            document.getElementById("Cindy").style.display = "none";
        }
      
        function csover(object) {
            object.src = 'assets/img/Computer%20Science%20Squared.png';
            document.getElementById("fashionfilm2").style.display = "block";
        }
        function csback(object) {
            object.src = 'assets/img/Computer%20Science%20Squared%20B&W.png';
            document.getElementById("fashionfilm2").style.display = "none";
        }
        
        function musicover(object) {
            object.src = 'assets/img/Music%20Squared.png';
            document.getElementById("fashionfilm4").style.display = "block";
        }
        function musicback(object) {
            object.src = 'assets/img/Music%20Squared%20B&W.png';
            document.getElementById("fashionfilm4").style.display = "none";
        }
        
        function dropdown() {
            if(document.getElementById("dropdown-content").style.display === "block"){
                document.getElementById("dropdown-content").style.display = "none";
                document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "70px";
                 
            }
            else{document.getElementById("dropdown-content").style.display = "block";
                document.getElementById("dropdown-content2").style.display = "none";
                 document.getElementById("dropdown-content3").style.display = "none";
                 document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "0px";
                }
            
        }
    function dropout() {
            document.getElementById("dropdown-content").style.display = "none";
        }
        
        function dropdown2() {
            if(document.getElementById("dropdown-content2").style.display === "block"){
                document.getElementById("dropdown-content2").style.display = "none";
                document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "70px";
            }
            else{document.getElementById("dropdown-content2").style.display = "block";
                document.getElementById("dropdown-content").style.display = "none";
                 document.getElementById("dropdown-content3").style.display = "none";
                 document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "0px";
                }
        }
    function dropout2() {
            document.getElementById("dropdown-content2").style.display = "none";
        }
        function dropdown3() {
               if(document.getElementById("dropdown-content3").style.display === "block"){
                document.getElementById("dropdown-content3").style.display = "none";
                document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "70px";
            }
            else{document.getElementById("dropdown-content3").style.display = "block";
                document.getElementById("dropdown-content").style.display = "none";
                 document.getElementById("dropdown-content2").style.display = "none";
                 document.getElementsByClassName("lowerlogo")[0].style.paddingTop = "0px";
                }
        }
    function dropout3() {
            document.getElementById("dropdown-content3").style.display = "none";
        }

    function quote() {
        var quotes = document.getElementsByClassName('quotejava');
        for (i = 1; i < quotes.length; i++) { 
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote0").style.display = "block";
        document.getElementById("quote0").style.webkitFilter = "grayscale(0%)";
        }

    function quote1() {
        var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 1){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote1").style.display = "block";
        document.getElementById("quote1").style.webkitFilter = "grayscale(0%)";
        }

    function quote2() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 2){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote2").style.display = "block";
        document.getElementById("quote2").style.webkitFilter = "grayscale(0%)";
        
        }

    function quote3() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 3){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote3").style.display = "block";
        document.getElementById("quote3").style.webkitFilter = "grayscale(0%)";
        
        }
    function quote4() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 4){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote4").style.display = "block";
        document.getElementById("quote4").style.webkitFilter = "grayscale(0%)";
        
        }
    function quote5() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 5){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote5").style.display = "block";
        document.getElementById("quote5").style.webkitFilter = "grayscale(0%)";
        
        }
    function quote6() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 6){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote6").style.display = "block";
        document.getElementById("quote6").style.webkitFilter = "grayscale(0%)";
        
        }
    function quote7() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 7){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote7").style.display = "block";
        document.getElementById("quote7").style.webkitFilter = "grayscale(0%)";
        
        }
    function quote8() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 8){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote8").style.display = "block";
        document.getElementById("quote8").style.webkitFilter = "grayscale(0%)";
        
        }

    function quote9() {
         var quotes = document.getElementsByClassName('quotejava');
        for (i = 0; i < quotes.length; i++) { 
            if(i == 9){
                continue;
            }
            document.getElementById("actual-quote"+ i).style.display = "none";
            document.getElementById("quote" + i).style.webkitFilter = "grayscale(100%)";
        }

        document.getElementById("actual-quote9").style.display = "block";
        document.getElementById("quote9").style.webkitFilter = "grayscale(0%)";
        
        }
        

        function modal1() {
            var modal = document.getElementById('myModal1');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[0];
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        }
        
        function modal2() {
            var modal = document.getElementById('myModal2');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[1];
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        }
        
        function modal3() {
            var modal = document.getElementById('myModal3');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[2];
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        }
        
        function modal4() {
            var modal = document.getElementById('myModal4');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[3];
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        }

         function modal5() {
            var modal = document.getElementById('myModal5');
            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[4];
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        }


        // When the user clicks on <span> (x), close the modal