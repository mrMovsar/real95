function Button(props){
  return(
<div className="Buttons">
  <button onClick={Plus} className="btn btn-blue">Увеличить</button>
  <button onClick={Minus} className="btn btn-orange">Уменьшить</button>
  <button onClick={Reset} className="btn btn-grey">Сбросить</button>
</div>
)
function Plus(){
  props.setCounter(props.counter+3);
}
function Minus(){
  props.setCounter(props.counter-2);
}
function Reset(){
  props.setCounter(0);
}
}
export default Button;