import { DANHSACHTEST } from "../Action/type";


const initialState = {
    danhSachTest : ["A","B"],
}
const testReducer = (state = initialState , action)=>{
    switch(action.type){
        case DANHSACHTEST:
            state.danhSachTest = action.payload;
            return {...state}
        
       
        default : 
            return {...state}
    }
}
export default testReducer