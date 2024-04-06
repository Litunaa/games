let totalCost = 0;
let selectedGames = 0;


const categories = {
    "Call of Duty®: Black Ops": []
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



function search(){

}