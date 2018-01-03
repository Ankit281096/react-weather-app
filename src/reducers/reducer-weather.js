import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){

  switch(action.type){
    case FETCH_WEATHER:
      //console.log(action.payload.data);
      if(action.payload.data.cod !== '200'){
        return state;
      }
      else if (state.findIndex(data => data.city.id === action.payload.data.city.id) !== -1) {
        return [
          action.payload.data,
          ...state.filter(data => data.city.id !== action.payload.data.city.id)
        ];
      }
        return [action.payload.data,...state];
      }
    return state;
}
