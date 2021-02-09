var playerName = window.prompt("What is your name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var i = 0;






var fight = function() {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth >0) {        
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP to choose.");

     // If player choses to skip
     if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm that player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
        
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert (enemyNames[i] + " has died!");
            break;
        }
        else {
            window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
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
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight (pickedEnemyName);

            // if player is still alive and if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("the fight is over, visit the store before the next round?");
                // if yes take them to the store
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost " + playerName + " in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight
    endGame();
};
// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of "+ playerMoney +".");
    }
    else {
        window.alert("You've lost " + playerName + " in battle.");
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increaise helath and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7  
            }
            else {
                window.alert("you don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("you don't have enough money!");
            }  
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

startGame();






