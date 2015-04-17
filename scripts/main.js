//(function() {
  //'use strict';


  $(document).ready(function() {

         //
        //  Start game, play again
        //  given you have went to the url and see the intro screen with the start button
        // when you click the letPickem button you are taken to the choice screen
        // for you favorite character.
        // This also has the playagain button that is seen at the final screen thirdpage
        // and fourth page. This will restart the game so you can play again.

    $(".letspickem").on("click", letsPickem);
    $(".beardbutton").on("click", beardButton);
    $(".shavedbutton").on("click", shavedButton);
    $(".playagain_button").on('click', playagain);

    function playagain(){
      location.reload();
    }


    // Click intro page to start pickem'
    // Given that you have clicked the button on the intro page, you are now ready
    // to make your decsion. You have an option of bearded or shaved to continue your journey.

    function letsPickem() {
      var selectedletsPickem = $('.letspickem').val();
      $(".secondpage").removeClass('hidden');
      $(".thirdpage").addClass('hidden');
      $(".fourthpage").addClass('hidden');
      $(".firstpage").addClass('hidden');
    }


    // Click thirdpage click if you choose Joe Beard
    // given that you have choose Joe Beard you are now at you destiny. Great choice
    // you will forever be in my good graces.

    function beardButton() {
      var selectedbeardButton = $('.beardbutton').val();
      $(".thirdpage").removeClass('hidden');
      $(".firstpage").addClass('hidden');
      $(".fourthpage").addClass('hidden');

      $(".secondpage").addClass('hidden');
    }


    // Click fourthpage click if you choose Sy Shaved
    // Given that you have choose Sy Shaved, you have come here and realized you have
    // made the wrong decision and will forever be sad and want to play again.

    function shavedButton() {
      var selectedshavedButton = $('.shavedbutton').val();
      $(".fourthpage").removeClass('hidden');
      $(".firstpage").addClass('hidden');
      $(".thirdpage").addClass('hidden');

      $(".secondpage").addClass('hidden');
    }



  });
//})();
