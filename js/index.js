let money = +prompt('Ваш месячный доход? ', ''), 
    income = 'freelance', 
    addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую:', ''), 
    deposit = confirm('есть ли у вас депозит в банке? (Ок - да, Отмена - нет)'), 
    mission = '80000', 
    period = 12,
    budgetDay,
    // accumulatedMonth, //Накопления за месяц
    a_1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    a_2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    expensesMonth_1 = +prompt('Во сколько это обойдется', ''),
    expensesMonth_2 = +prompt('Во сколько это обойдется', ''),
    bugetMonth = money - (expensesMonth_1 + expensesMonth_2);

    budgetDay = Math.floor(bugetMonth/30);

console.log(addExpenses.split(', '));

    // Возвращает значение: все расходы за месяц
let getExpensesMonth = () =>{ 
    console.log(expensesMonth_1 + expensesMonth_2);
};
    getExpensesMonth();

    //Возвращает: Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = () => { 
    // console.log(`Накопления за месяц ${money - (expensesMonth_1 + expensesMonth_2)}`);
    return money - (expensesMonth_1 + expensesMonth_2);
};
let accumulatedMonth =  getAccumulatedMonth();
console.log(accumulatedMonth); // Накопления за месяц

    // Подсчитывает за какой период будет достигнута цель
let getTargetMonth = () => {
    console.log( Math.ceil(mission/bugetMonth) );
};
getTargetMonth();


let showTypeof = function(item){
    console.log(item, typeof item);
};


showTypeof(money);
showTypeof(income);
showTypeof(deposit);

(function getStatusIncome(){
    if(budgetDay < 0){
        console.log('Что то пошло не так');
    } else if(budgetDay >= 0 && budgetDay <= 300) {
        console.log('Низкий уровень дохода');
    } else if(budgetDay > 300 && budgetDay <= 800) {
        console.log('Средний уровень дохода');
    } else {
        console.log('Высокий уровень дохода');
    }
})();



// console.log(budgetDay);
// console.log(money%30);

