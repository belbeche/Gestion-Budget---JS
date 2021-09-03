
function appBudget(event) {

    let budget = document.getElementById('budget');
    // budget.classList.replace('oldClass', 'HideClass'); working
    let depenses = document.getElementById('depenses');
    let budget_total = document.getElementById('budget_total');
    let depenses_total = document.getElementById('depenses_total');
    let total = document.getElementById('total');
    let calculer = document.getElementById('calculer');
    let id = 0;
    let itemlist = [];

    budget.addEventListener('click', (event) => {

        let budgetValue = event.target.value;
        budget_total.innerHTML = `Budget Total : ${budgetValue} €`;
        let resultat = getTotal();
        total.textContent = "";
        total.textContent = "Total : " + resultat;
    });
    depenses.addEventListener('click', (event) => {

        let depensesValue = event.target.value;
        depenses_total.innerHTML = `Depenses : ${depensesValue} €`;
        let resultat = getTotal();
        total.textContent = "";
        total.textContent = "Total : " + resultat;
    });

    // itemlist.push(event)

}

function getTotal() {
    let budgetValue = budget.value || 0
    let depensesValue = depenses.value || 0
    if (budgetValue || depensesValue > 0) {
        return parseFloat(budgetValue) - parseFloat(depensesValue);
    }
}


window.addEventListener("DOMContentLoaded", (event) => {
    appBudget();
    event.preventDefault();
})

// budget.classList.replace('oldClass', 'HideClass'); working