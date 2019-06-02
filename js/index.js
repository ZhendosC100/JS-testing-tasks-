let money = 16220, 
    income = 'freelance', 
    addExpenses = 'Бензин,Отдых,Вещи', 
    deposit = 'true', 
    mission = '80000', 
    period = 12;
    budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log(`Период ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
addExpenses.toLowerCase();
console.log(addExpenses.split(','));

console.log(budgetDay);
console.log(money%30);

