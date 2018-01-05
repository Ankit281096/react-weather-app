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
        <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
        <SparklinesSpots size={4}
        style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
