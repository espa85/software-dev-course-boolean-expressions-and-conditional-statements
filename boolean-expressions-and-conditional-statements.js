/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Ask for the player's character name
const name = readline.question("Welcome, traveler. What is your name? ");
console.log(`Greetings, ${name}! Your adventure begins now.`);

// Inventory setup (you can change these values to test different outcomes)
const hasTorch = true;
const hasMap = false;
const hasCompass = true;
const hasFoodAndWater = true;
const hasMoney = false;

// Weapon selection including "No Weapon"
const weaponChoices = ["sword", "sword and shield", "spear", "bow and arrow", "No Weapon"];
let weaponType = null;
let hasWeapon = false;

console.log("\nChoose your weapon by entering the corresponding number:");
weaponChoices.forEach((weapon, index) => {
  console.log(`${index + 1}. ${weapon}`);
});

let selectedIndex;
while (true) {
  selectedIndex = readline.questionInt("\nEnter your choice (1-5): ");
  if (selectedIndex >= 1 && selectedIndex <= weaponChoices.length) {
    weaponType = weaponChoices[selectedIndex - 1];
    hasWeapon = weaponType !== "No Weapon";
    break;
  } else {
    console.log("Invalid choice. Please enter a number between 1 and 5.");
  }
}

// Display path choices
console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("\nDo you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("\nYou navigate the dark mountains with confidence using your torch and compass.");

    // Bear encounter
    console.log("\nAs you round a rocky bend, a huge BEAR blocks your path!");

    if (hasWeapon) {
      console.log(`You draw your ${weaponType} and prepare to defend yourself.`);
      if (weaponType === "sword and shield") {
        console.log("You block the bear’s charge and slash at it! The bear retreats. You survive!");
      } else if (weaponType === "spear") {
        console.log("You keep your distance and jab with your spear. The bear growls and backs off. Well done.");
      } else if (weaponType === "bow and arrow") {
        console.log("You fire a few warning shots. The bear is startled and runs off into the woods.");
      } else if (weaponType === "sword") {
        console.log("You charge the bear bravely. It swipes your arm, but you manage to scare it away. You're injured but alive.");
      }
    } else if (hasFoodAndWater) {
      console.log("You slowly take out some food and toss it far away.");
      console.log("The bear follows the scent. You take the chance to slip away quietly. Crisis averted!");
    } else {
      console.log("You have nothing to defend yourself or distract the bear.");
      console.log("You turn and RUN! The bear chases you for a while but eventually gives up.");
    }

  } else if (hasTorch && !hasCompass) {
    if (hasMoney) {
      console.log("You meet a traveler and pay them to guide you through the mountains. You make it safely!");
    } else {
      console.log("You can see, but you wander in circles without a compass. You lose time but survive.");
    }
  } else if (!hasTorch) {
    if (hasFoodAndWater) {
      console.log("It's dark, but you use your rations to survive a cold night before turning back.");
    } else {
      console.log("It's too dark and dangerous without supplies. You trip and retreat injured.");
    }
  }

} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("\nWith either your map or compass, you find your way safely to the village.");
  } else if (hasMoney) {
    console.log("\nYou pay a passerby to help you find the village. Money well spent!");
  } else {
    console.log("\nWithout guidance, you get lost trying to reach the village and end up back where you started.");
  }

  if ((hasMap || hasCompass) || hasMoney) {
    const villageChoice = readline.question("\nThe villagers warn you that a gang of thieves has been terrorizing their homes. Do you help them? (yes/no) ");
    
    if (villageChoice.toLowerCase() === "yes") {
      if (hasWeapon) {
        console.log(`\nYou confront the thieves with your ${weaponType}. After a tense skirmish, they flee the village. You're hailed as a hero, ${name}!`);
      } else {
        console.log("\nYou stand up to the thieves with your bare hands. Brave, but they overpower you quickly.");
      }
    } else {
      if (hasMoney || hasFoodAndWater) {
        const offer = hasMoney ? "a pouch of coins" : "a large bundle of food and water";
        console.log(`\nInstead of fighting, you offer the villagers ${offer} to help them rebuild. They are grateful for your generosity.`);
      } else {
        console.log("\nYou decline to help and have nothing to offer. The villagers look disappointed.");
      }
    }
  }

} else {
  console.log("\nYou stand indecisively and a squirrel steals your snack. Try making a choice next time!");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/