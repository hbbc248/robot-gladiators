

var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health >0) {        
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP to choose.");

     // If player choses to skip
     if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm that player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip the fight. Goodbye");
            //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }
        
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        // generate random damage value based on player's attack power
        var damage = randomNumber (playerInfo.attack - 3, playerInfo.attack + 3);   
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        //check enemy's health
        if (enemy.health <= 0) {
            window.alert (enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        var damage = randomNumber (enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max (0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } 
        else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
    // If player choses to skip
    else {
        window.alert("You need to choose a valid option. Try again");
    }
    }
};
    
    
// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    for (i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60); 
            fight (pickedEnemyObj);

            // if player is still alive and if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("the fight is over, visit the store before the next round?");
                // if yes take them to the store
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost " + playerInfo.name + " in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight
    endGame();
};
// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of "+ playerInfo.money +".");
    }
    else {
        window.alert("You've lost " + playerInfo.name + " in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// function for shopping
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE you attack, or LEAVE the store? Please enter one: 'REFILL', UPGRADE' or 'LEAVE' to make a chioce.");
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.Info.upgradeAttack();  
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// function to set name
var getPlayerName = function() {
    var name = "";
    name = prompt("What is your robot's name?");
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!")  
        }        
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }     
    }
};


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Tumble",
        attack: randomNumber(10, 14)
    }
];


startGame();






