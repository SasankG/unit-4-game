$(document).ready(function () {
        //charmander
        var charmander = {
            hp: 140,
            atk: 10
        };
        console.log(charmander.hp);
        document.getElementById('charnum').innerHTML = (charmander.hp);
        //bulbasaur
        var bulbasaur = {
            hp: 180,
            atk: 6
        }
        document.getElementById('bulbnum').innerHTML = (bulbasaur.hp);
        //squirtle
        var squirtle = {
            hp: 160,
            atk: 8
        }
        document.getElementById('squirnum').innerHTML = (squirtle.hp);
        let found = false;
        let charPick = false;
        let bulbPick = false;
        let squirPick = false;
        var startGame = false;
        var fighters = [];
        var ids = [];
        var atkp = []; //Attack Power 
        $('#textbox').text("Choose your Pokemon! Remember each one is Unique!");
        //select pokemon - WORKING
        function selector() {
            $("#charbut").click(function () {
                if (found === false) {
                    found = true;
                    bulbPick = true;
                    squirPick = true;
                    $('#bulbasaur').animate({ right: '-=320px' });
                    $("#bulbasaur").css({ backgroundColor: "grey" });
                    $('#squirtle').animate({ right: '-=300px' });
                    $("#squirtle").css({ backgroundColor: "grey" });
                    $('#charmander').animate({ bottom: '-=400px', right: '-=300px' });
                    $("#charmander").css({ backgroundColor: "#85C1E9" });
                    var input = this;
                    input.disabled = true;
                    fighters.push(charmander.hp);
                    atkp.push(charmander.atk);
                    ids.push($('#charnum'));
                    console.log(ids);
                    $('#textbox').text("Choose your Opponent!");
                }
            })
            $("#bulbut").click(function () {
                if (found === false) {
                    found = true;
                    charPick = true;
                    squirPick = true;
                    $('#charmander').animate({ right: '-=480px' });
                    $("#charmander").css({ backgroundColor: "grey" });
                    $('#squirtle').animate({ right: '-=300px' });
                    $("#squirtle").css({ backgroundColor: "grey" });
                    $('#bulbasaur').animate({ bottom: '-=400px', right: '-=120px' });
                    $("#bulbasaur").css({ backgroundColor: "#85C1E9" });
                    var input = this;
                    input.disabled = true;
                    fighters.push(bulbasaur.hp)
                    atkp.push(bulbasaur.atk);
                    ids.push($('#bulbnum'));
                    $('#textbox').text("Choose your Opponent!");
                }
            })
            $("#squirbut").click(function () {
                if (found === false) {
                    found = true;
                    charPick = true;
                    bulbPick = true;
                    $('#charmander').animate({ right: '-=400px' });
                    $("#charmander").css({ backgroundColor: "grey" });
                    $('#bulbasaur').animate({ right: '-=400px' });
                    $("#bulbasaur").css({ backgroundColor: "grey" });
                    $('#squirtle').animate({ bottom: '-=400px', right: '-=20px' });
                    $("#squirtle").css({ backgroundColor: "#85C1E9" });
                    var input = this;
                    input.disabled = true;
                    fighters.push(squirtle.hp)
                    atkp.push(squirtle.atk);
                    ids.push($('#squirnum'));
                    $('#textbox').text("Choose your Opponent!");
                };
            });
        };
        console.log(fighters);
        selector();
        //select enemy - WORKING
        function enemy() {
            $("#bulbut").click(function () {
                if (bulbPick === true) {
                    $('#bulbasaur').animate({ right: '-=380px', bottom: '-=220px' });
                    $("#bulbasaur").css({ backgroundColor: "#F1948A" });
                    var input = this;
                    input.disabled = true;
                    startGame = true;
                    gameStart();
                    fighters.push(bulbasaur.hp);
                    atkp.push(bulbasaur.atk);
                    ids.push($('#bulbnum'));
                    $('#textbox').text("Press Attack!");
                }
            });
            $("#charbut").click(function () {
                if (charPick === true) {
                    $('#charmander').animate({ right: '-=400px', bottom: '-=220px' });
                    $("#charmander").css({ backgroundColor: "#F1948A" });
                    var input = this;
                    input.disabled = true;
                    startGame = true;
                    gameStart();
                    fighters.push(charmander.hp);
                    atkp.push(charmander.atk);
                    ids.push($('#charnum'));
                    $('#textbox').text("Press Attack!");
                }
            });
            $("#squirbut").click(function () {
                if (squirPick === true) {
                    $('#squirtle').animate({ right: '-=260px', bottom: '-=220px' });
                    $("#squirtle").css({ backgroundColor: "#F1948A" });
                    var input = this;
                    input.disabled = true;
                    startGame = true;
                    gameStart();
                    fighters.push(squirtle.hp);
                    atkp.push(squirtle.atk);
                    ids.push($('#squirnum'));
                    $('#textbox').text("Press Attack!");
                }
            });
            console.log(startGame);
        }
        enemy();
        //start game - WORKING
        function gameStart() {
            if (startGame === true) {
                //attack button
                var button = $('<button/>', {
                    text: 'Attack!',
                    click: function () {
                        //increases player attack power + 6
                        var mult = atkp[0] + 6;
                        var pdamage = Math.floor (Math.random() * 4);
                        var edamage = Math.floor (Math.random() * mult);
                        var ptotals = parseInt(fighters[0] - pdamage);
                        var etotals = parseInt(fighters[1] - edamage);
                        fighters[0] = ptotals;
                        ids[0].html = ptotals;
                        //change player hp visually - WORKING
                        ids[0].text(ptotals);
                        //change enemy hp - Working
                        fighters[1] = etotals;
                        ids[1].html = etotals;
                        ids[1].text(etotals);
                         $('#textbox').text("You dealt " + edamage + " damage! " + "You got attacked for " + pdamage + " damage");
                        if (fighters[1] <= 0 || fighters[1]===0){
                            winneR();
                            fighters[1].toString;
                            fighters[1].html = "faint";
                            this.disabled=true;
                            setTimeout(newGame, 10000);
                        }else if (fighters[0] <= 0){
                            loseR();
                            this.disabled=true;
                           setTimeout(newGame, 10000);
                        }
                    }
                })
                $('#atkButton').append(button);
            }
        }
        //win function
        function winneR(){
           $('#textbox').text("Congratulations! You Won! Currently Healing Pokemon -- New battle ready in 10 seconds");
            faint();
        }
        //lose function
        function loseR(){
           $('#textbox').text("Your Pokemon fainted... All Pokemon will heal and be battle ready in 10 seconds");
            
        }
        function newGame(){
            document.location.reload();
        }
        //faint function
        function faint(){
            if (fighters[1] === charmander.hp && fighters[1] <=0){
                $('#charmander').fadeTo("slow", 0.33);
            }else if(fighters[1] === bulbasaur.hp && fighters[1] <=0){
                $('#bulbasaur').fadeTo("slow", 0.33);
            }else if(fighters[1] === squirtle.hp && fighters[1] <=0){
                $('#squirtle').fadeTo("slow", 0.33);
            }
        }
    });