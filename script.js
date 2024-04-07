let totalCost = 0;
let selectedGames = 0;


const categories = {
    "Call of Duty®: Black Ops": ["First Person Shooter", "Zombies", "Multiplayer", "Campaign"], 
    "Call of Duty®: Black Ops II": ["First Person Shooter", "Zombies", "Multiplayer", "Campaign"],
    "Call of Duty®: Black Ops III": ["First Person Shooter", "Zombies", "Multiplayer", "Campaign"],
    "Apex Legends": ["Battle Royale", "Multiplayer", "First Person Shooter"],
    "Counter-Strike 2": ["First Person Shooter", "Multiplayer"],
    "Coutner-Strike Source": ["First Person Shooter", "Multiplayer"],
    "Garry's Mod": ["First Person Shooter", "Multiplayer", "Third Person Shooter"],
    "Dungeon Defenders II": ["Third Person Shooter", "Tower Defense", "Multiplayer"],
    "Call of Duty: World at War": ["First Person Shooter", "Zombies", "Multiplayer", "Campaign"]
}

function purchase(price){
    totalCost += price;
    selectedGames++;
    updateCostDisplay();
}

function updateCostDisplay(){
    const costDisplay = document.getElementById("cost");
    const formattedCost = totalCost.toFixed(2);
    costDisplay.textContent = "Total cost: " + "€" + formattedCost  + " " + "(" + selectedGames + " " + "games selected" + ")";
}



function filter(){

    const checkboxes = document.querySelectorAll('.fps input[type="checkbox"], .tps input[type="checkbox"], .BR input[type="checkbox"], .td input[type="checkbox"], .zombies input[type="checkbox"], .multi input[type="checkbox"], .campaign input[type="checkbox"]');


    const selectedCheckboxes = [];

    checkboxes.forEach(function(checkbox){
        if (checkbox.checked){
            const label = checkbox.parentElement.querySelector('label').textContent;
            selectedCheckboxes.push(label);
        }
    });

    const games = document.querySelectorAll('.game');


    games.forEach(function(game){
        const title = game.querySelector('.title').textContent;
        let hideGame = false;

        selectedCheckboxes.forEach(function(selectedCategory){
            if (!categories[title].includes(selectedCategory)){
                hideGame = true;     
            }
        });

        if (hideGame){
            game.style.pointerEvents = 'none';
            game.style.opacity = '0';
        }
        else{
            game.style.pointerEvents = 'auto';
            game.style.opacity = '1'; 
        }

        
    });
    
}


function search(){
    
}