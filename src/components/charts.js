import _ from 'lodash'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine,SparklinesSpots} from 'react-sparklines';

function average(data){
  return  _.round(_.sum(data)/data.length);
};

export default (props)=>{
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine style={{ strokeWidth: 2, stroke: "#336aff", fill: "#56b45d"}} />
        <SparklinesSpots size={3}
        style={{ stroke: "blue", strokeWidth: 1, fill: "white" }} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
