let money = +prompt('Ваш месячный доход? ', ''), 
    income = 'freelance', 
    addExpenses = prompt('перечислите возможные расходы за рассчитываемый период через запятую:', ''), 
    deposit = confirm('есть ли у вас депозит в банке? (Ок - да, Отмена - нет)'), 
    mission = '80000', 
    period = 12,
    budgetDay,
    a_1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    a_2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    b_1 = +prompt('Во сколько это обойдется', ''),
    b_2 = +prompt('Во сколько это обойдется', ''),
    bugetMonth = money - (b_1 + b_2);

    budgetDay = Math.floor(bugetMonth/30);

console.log(addExpenses.split(', '));

console.log(deposit);
console.log(`bugetMonth ${bugetMonth}`);
console.log(`budgetDay ${budgetDay}`);

console.log( Math.ceil(mission/bugetMonth) );

if(budgetDay < 0){
    console.log('Что то пошло не так');
} else if(budgetDay >= 0 && budgetDay <= 300) {
    console.log('Низкий уровень дохода');
} else if(budgetDay > 300 && budgetDay <= 800) {
    console.log('Средний уровень дохода');
} else {
    console.log('Высокий уровень дохода');
}

// console.log(budgetDay);
// console.log(money%30);

