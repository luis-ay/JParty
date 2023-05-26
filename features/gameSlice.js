import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    host: false,
    rebuzz: true,
    deductions: false,
    scores: {'Timmy':500, 'Luis':300, 'Bob':400},
    finalJParty:  {},
    contestants:[],
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
    addScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.scores[contestant] += amount
    },
    subScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.scores[contestant] -= amount

    },
    addFinalAnswer: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and answer to final jparty
        const answer = action.payload.answer
        state.finalJParty[contestant] = answer
    },
    changeGameMode: (state, action) => {
        const rebuzzSetting = action.payload //only need rebuzzSetting bc only one (rebuzz/pass) can be true at a given time
        state.rebuzz = rebuzzSetting
    },
    changeDeductions: (state, action) => {
        const deductionsSetting = action.payload //payload is true/false for allow deductions
        state.deductions = deductionsSetting
    },
    clearGame: (state) => {
        state.contestants = []
        state.scores = {}
        state.finalJParty = {}
    },
  },
});





export const { addContestant, makeHost, addScore, subScore, changeDeductions, changeGameMode, addFinalAnswer, clearGame } = gameSlice.actions;
export const selectAllScores = (state) => state.game.scores;
export const selectFinalAnswers = (state) => state.game.finalJParty;
export const selectGameMode = (state) => state.game.rebuzz;
export const selectDeductions = (state) => state.game.deductions;
export const selectMatchHistory = (state) => state.game.matchHistory

export default gameSlice.reducer;