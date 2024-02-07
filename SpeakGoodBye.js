(function(window){
    var byeSpeaker = {}; // Step 7: Create an object called 'byeSpeaker'

    var speakWord = "Good Bye"; // Step 6: Do not attach speakWord to byeSpeaker object
    
    byeSpeaker.speak = function(name) { // Step 8: Attach the 'speak' method to byeSpeaker object
      console.log(speakWord + " " + name);
    }
    
    window.byeSpeaker = byeSpeaker; // Expose the 'byeSpeaker' object to the global scope
})(window);

