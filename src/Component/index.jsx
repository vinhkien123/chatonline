import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../Redux/Action';
import { DANHSACHTEST } from '../Redux/Action/type';

Test.propTypes = {

};

function Test(props) {
    const danhSachTest = useSelector(state => state.testReducer.danhSachTest)
    const dispatch = useDispatch()
    console.log(danhSachTest);
    function hanldeOnClick(){
        dispatch(createAction(DANHSACHTEST,["gâu ","Meo"]))
    }
    return (
        <>
            <ul>
                {danhSachTest.map((item, index) => {
                    return <li>{item}</li>
                })}
            </ul>
            <button onClick={hanldeOnClick} className="btn btn-primary">Thêm </button>
        </>
    );
}

export default Test;