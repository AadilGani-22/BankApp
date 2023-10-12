import React from 'react'
import { useDispatch , useSelector  } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const actions = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2> Desposit / Withdraw Money </h2>
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button> */}
        <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}> - </button>
        Updated Balance({balance})
        <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}> + </button>
    </div>
  )
}

export default Shop