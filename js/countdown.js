 // COUNTDOWN
            // thanks stackoverflow
            const audio = new Audio('./crab.mp3');
            const currentYear = new Date().getFullYear();
            const currentDate = new Date().getDate();
            const nextYear = currentYear + 1;
            console.log(nextYear + ' is coming!\nRunning all scripts..');
            timedown("January 1, 2022 00:00:00", 'cd');
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
                    document.getElementById(id).innerHTML = (days != 0 ? days + " Hari " : '') + (hours != 0 ? hours + " Jam " : '') + (minutes != 0 ? minutes + " Menit " : '') + seconds + " Detik ";
                    //crabrave

                    // If the count down is over, write some text and do shit
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById('subtitle').innerHTML = "Happy New Year! :D";
                        document.getElementById(id).innerHTML = "Happy New Year! :D";
                        audio.play();
                                   // do this for 30 seconds
                        var cDuration = 30 * 1000;
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