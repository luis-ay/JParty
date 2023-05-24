import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    host: false,
    contestants:[],
    rebuzz: true,
    deductions: false,
    scores: {},
    finalJParty: {},

}


const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addContestant: (state, action) => {
        const newContestant = action.payload //payload must be some identifer we get from the swift code (could be a list where we just add all contestants)
        state.game.contestants.append(newContestant)
    },
    makeHost: (state) => {
        state.host = true
    },
    addScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.game.scores[contestant] += amount
    },
    subScore: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and amount to add
        const amount = action.payload.amount 
        state.game.scores[contestant] -= amount
    },
    addFinalAnswer: (state, action) => {
        const contestant = action.payload.contestant //payload is contestant identifier (name/id) and answer to final jparty
        const answer = action.payload.answer
        state.game.finalJParty[contestant] = answer
    },
    changeGameMode: (state, action) => {
        const rebuzzSetting = action.payload.rebuzz //only need rebuzzSetting bc only one (rebuzz/pass) can be true at a given time
        state.game.rebuzz = rebuzzSetting
    },
    changeDeductions: (state, action) => {
        const deductionsSetting = action.payload.deductions //payload is true/false for allow deductions
        state.game.deductions = deductionsSetting
    },

  },
  extraReducers() {}
});





export const { addContestant, makeHost, addScore, subScore, changeDeductions, changeGameMode, addFinalAnswer } = gameSlice.actions;
export const selectAllScores = (state) => state.scores;
export const selectFinalAnswers = (state) => state.finalJParty;
export const selectGameMode = (state) => state.rebuzz;
export const selectDeductions = (state) => state.deductions;

export default gameSlice.reducer;