(function(window){
    var helloSpeaker = {}; // Step 3: Create an object called 'helloSpeaker'
    
    var speakWord = "Hello"; // Step 2: Do not attach speakWord to helloSpeaker object
    
    helloSpeaker.speak = function(name) { // Step 4: Attach the 'speak' method to helloSpeaker object
      console.log(speakWord + " " + name);
    }
    
    window.helloSpeaker = helloSpeaker; // Step 5: Expose the 'helloSpeaker' object to the global scope
})(window);

