import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    name: 'Enter Name',
    date: {'year':2023,'month':6,'day':6 },
    host: false,
    mode: 0,
    deductions: true,
    scores: {'Timmy':500, 'Luis':300, 'Bob':400, 'A':2000, 'B':1500, 'C':600},
    finalJParty:  {'Timmy':'Deez', 'Luis':'nutz', 'Bob':'bofa','A':'2000', 'B':'1500', 'C':'600'},
    finalJPartyWagers: {'Timmy':500, 'Luis':300, 'Bob':400, 'A':2000, 'B':1500, 'C':600},
    contestants:['Luis','Timmy','Bob', 'A', 'B', 'C'],
    matchHistory: [],
}


const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addContestant: (state, action) => {
        const newContestant = action.payload //payload must be some identifer we get from the swift code (could be a list where we just add all contestants)
        const contestants = state.contestants
        if (!contestants.includes(newContestant)) {
            state.contestants = [...contestants, newContestant]
            state.scores[newContestant] = 0
        }
    },
    makeHost: (state, action) => {
        const hosting = action.payload //true or false
        state.host = hosting
    },
    changeName: (state, action) => {
        const newName = action.payload
        state.name = newName
    },
    addScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.scores[contestant] += amount
        console.log(`new score for ${contestant}, +${amount}`)
    },
    subScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.scores[contestant] -= amount
        console.log(`new score for ${contestant}, -${amount}`)

    },
    addFinalAnswer: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and answer to final jparty
        const answer = action.payload.answer
        state.finalJParty[contestant] = answer
        console.log(state.finalJParty)
    },
    addWager: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and answer to final jparty
        const wager = action.payload.wager
        console.log(wager)
        state.finalJPartyWagers[contestant] = wager
        console.log(state.finalJPartyWagers)
    },
    changeGameMode: (state, action) => {
        const newMode = action.payload //0: freeforall, 1: rebuzz, 2: quickshift
        state.mode = newMode
    },
    changeDeductions: (state, action) => {
        const deductionsSetting = action.payload //payload is true/false for allow deductions
        state.deductions = deductionsSetting
    },
    clearGame: (state) => {
        state.scores = initialState.scores
        state.finalJParty = initialState.finalJParty
        state.finalJPartyWagers = initialState.finalJPartyWagers
    },
    addGame: (state, action) => {
        const sortedScores = action.payload
        state.matchHistory = [...state.matchHistory, {date: state.date, scores: sortedScores}]
        console.log(`matchHistory: ${JSON.stringify(state.matchHistory)}`)
    },
    changeDate: (state) => {
        const newDate = new Date()
        state.date = {'year':newDate.getFullYear(), 'month':newDate.getMonth()+1, 'day':newDate.getDate()}
    },
    clearMatchHistory: (state) => {
        state.matchHistory = initialState.matchHistory
    }
  },
});





export const { addContestant, makeHost, addScore, subScore, changeDeductions, changeGameMode, addFinalAnswer, clearGame, changeName, addWager, addGame, changeDate, clearMatchHistory } = gameSlice.actions;
export const selectAllScores = (state) => state.game.scores;
export const selectFinalAnswers = (state) => state.game.finalJParty;
export const selectGameMode = (state) => state.game.mode;
export const selectDeductions = (state) => state.game.deductions;
export const selectMatchHistory = (state) => state.game.matchHistory
export const selectName = (state) => state.game.name
export const selectWagers = (state) => state.game.finalJPartyWagers
export const selectAnswers = (state) => state.game.finalJParty
export const selectSortedScores = (state) => {
    let sortedScores = []
    const scores = state.game.scores
    Object.entries(scores).forEach(entry=>
        sortedScores.push([entry[0],entry[1]])
    )
    console.log(`unsorted sortedScores: ${sortedScores}`)
    sortedScores.sort(function(a,b) {return a[1]-b[1]})
    sortedScores.reverse()
    console.log(`sorted sortedScores: ${sortedScores}`)
    return sortedScores
}


export default gameSlice.reducer;