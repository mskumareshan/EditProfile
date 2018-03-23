//import { Type } from '../../constants/reducer-type';

const initialState={
	profile : {},
	profile_Msg:''
};
export default function (state = initialState, action) {
	let { payload } = action;
	switch (action.type) {
	case 'get_profile':{
		return  Object.assign({},state,{profile:payload});
    }
    case 'Sucess_failure':{
		return  Object.assign({},state,{profile_Msg:payload});
	}	
	default:
		return state;
	}
}