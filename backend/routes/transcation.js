const { addExpense, deleteExpense, getExpense } = require('../controller/expense.controller')
const {addIncome, getIncomes, deleteIncome}  = require('../controller/transcation.controller')

const router = require('express').Router()

router.post("/add-income",addIncome)
router.get("/get-incomes",getIncomes)
router.delete('/delete-income/:id',deleteIncome)
router.post("/add-expense",addExpense)
router.get("/get-expenses",getExpense)
router.delete('/delete-expense/:id',deleteExpense)

module.exports = router
