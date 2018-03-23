  
  import axios from 'axios';
  export function getProfile() {
    return {
      type: 'get_profile',
      payload: {'Referer':'unknown','Added':'Wed, 07 Feb 2018 11:35:19 +0400', 'lastLogin':'never','laug':'English','count':'5','email':'bit-bucket@example.com','access':'Anonymous Customer' }
    };
  }
  

  export const updateProfile = (profileid, passcheck) => {
	return (dispatch) => {	
  let post = 'profileid:'+profileid+'&changePassword:'+passcheck;
    axios.post(`http://172.16.110.13:3000/users/edit-profile`, { post })
      .then(res => {
        if(res.Data) {
          dispatch({ type: 'Sucess_failure', payload: res.Data });
        } else {
          dispatch({ type: 'Sucess_failure', payload: 'service down or not Proper data is given' });
        }
      }).catch(function(error){
          dispatch({ type: 'Sucess_failure', payload: 'service down try after' });
        });
	};
};



