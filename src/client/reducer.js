import { combineReducers } from 'redux'

import tabataForm from './Form/FormReducer';
import timer from './Timer/TimerReducer';
import spotifyAuth from './Spotify/SpotifyReducers';
//cycles are 25+5minute intervals

//TODO sessions and Tabata Count are different
const initialState = {
  spotify: {
    accessToken: null,
    refreshToken: null,
    loading:true,
  }

  timer:{
    cycles:0,
    working:true,
    restRecommendationSeeds: null,
    workRecommendationSeeds: null,
    initialSeconds:0,
    secondsRemaining:0,
    completed:100,
    isCounting:false,
  },
  
  tabataForm: {
    loading: true,
    openDialog:true,
    WorkMusicType: '',
    RestMusicType: '',
    SessionSlider: 1.0,
    recommendationSeeds:null,
  },



}



export default function TimerApp(state=initialState, action){
  return {
    tabataForm: tabataForm(state.tabataForm, action),
    timer: timer(state.timer, action),
    spotifyAuth: spotifyRecomendations(state.spotify, action),
  }
}