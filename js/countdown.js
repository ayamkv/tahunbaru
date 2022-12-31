 // COUNTDOWN
            // thanks stackoverflow
            async function updateJsonFile() {
                try {
                  // Read the JSON file
                  const file = await fetch('../particles.json');
              
                  if (file.status !== 200) {
                    throw new Error(`${file.status}: ${file.statusText}`);
                  }
              
                  // Read the file as a Blob object
                  const blob = await file.blob();
              
                  // Check if the file has been updated
                  const fileReader = new FileReader();
                  fileReader.onload = function () {
                    const fileData = fileReader.result;
              
                    // Log the file contents before the update
                    console.log('before update:', fileData);
              
                    // Parse the JSON data
                    const data = JSON.parse(fileData);
              
                    // Update the value
                    data.particles.number.value = 150;
              
                    // Write the updated JSON data back to the file
                    localStorage.setItem('file', JSON.stringify(data));
              
                    // Log the file contents after the update
                    console.log('after update:', localStorage.getItem('file'));
                  };
              
                  fileReader.readAsText(blob);
                } catch (error) {
                  console.error(error);
                }
              }
              
            //   updateJsonFile();
                          

            // async function checkFile() {
            //     // Read the file as a Blob object
            //     const file = await fetch('../test.json');
            //     const blob = await file.blob();
              
            //     // Check if the file has been updated
            //     const fileReader = new FileReader();
            //     fileReader.onload = function () {
            //       const fileData = fileReader.result;
              
            //       if (fileData) {
            //         console.log('File has been updated');
            //       } else {
            //         console.log('File has not been updated');
            //       }
            //     };
              
            //     fileReader.readAsText(blob);
            //   }
              
            // checkFile();
              

                        
            const audio = new Audio('./crab.mp3');
            const currentYear = new Date().getFullYear();
            const currentDate = new Date().getDate();
            const nextYear = currentYear + 1;
            console.log(nextYear + ' is coming!\nRunning all scripts..');
            const dateString = `January 1, ${nextYear} 00:00:00`;
            const date = new Date(Date.parse(dateString));
            const timestamp = date.getTime();

             timedown(timestamp, 'cd');
           // timedown("December 31, 2022 19:45:10", 'cd');
            function timedown(ti, id) { // Set the date we're counting down to
                const countDownDate = new Date(ti).getTime();

                // Update the count down every 1 second
                const x = setInterval(function () { // Get todays date and time
                    const now = new Date().getTime();
                    // Find the distance between now an the count down date
                    const distance = countDownDate - now;
                    
                    // Time calculations for days, hours, minutes and seconds
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    // Output the result in an element with id="cd"
                    document.getElementById(id).innerHTML = (days != 0 ? days + " Hari " : '') + (hours != 0 ? hours + " Jam " : '') + (minutes != 0 ? minutes + " Menit " : '') + (seconds + " Detik ");
                    //crabrave
                     
                    if (distance < 60000) {  // 10000 is the number of milliseconds in 10 seconds
                      document.getElementById(id).innerHTML = (days != 0 ? days + " Hari " : '') + (hours != 0 ? hours + " Jam " : '') + (minutes != 0 ? minutes + " Menit " : '') + (seconds + "");
                         document.getElementById(id).style.fontSize = '7em';
                         

                      };

                    // If the count down is over, write some text and do shit
                    if (distance < 0) {
                        clearInterval(x);
                        particlesJS.load('particles-js', 'particles.json', function () {
                          console.log('particles.json loaded... \nEverything is ready');
                          let el = document.querySelector(".particles-js-canvas-el");
          
          
                       });
          
          
                        document.getElementById(id).style.fontSize = '4em';

                        document.getElementById('subtitle').innerHTML = "🎉 Happy New Year! :D";
                        document.getElementById(id).innerHTML = "🎉 Happy New Year! :D";
                        audio.play();
                                   // do this for 45 seconds
                        var cDuration = 45 * 1000;
                        var cEnd = Date.now() + cDuration;

                        (function cFrame() {
                        // launch a few confetti from the left edge
                            confetti({
                                particleCount: 4,
                                angle: 60,
                                spread: 60,
                                origin: { x: 0 }
                            });
                            // and launch a few from the right edge
                            confetti({
                                particleCount: 4,
                                angle: 120,
                                spread: 60,
                                origin: { x: 1 }
                            });

                            // Confetti keep going until we are out of time
                            if (Date.now() < cEnd) {
                                requestAnimationFrame(cFrame);
                            }
                            }());
                        
                            
                    }
                }, 1000);
            }
            console.log('Running the clock\n Tick tock, the clock is running!')
