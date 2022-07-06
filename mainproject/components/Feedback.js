/*
*/
import axios from 'axios';

const url="https://damp-springs-29329.herokuapp.com";

/*
  The post must send an object with three fields: email, key, value
  email is used to specify the developer. but it could be any string
  key is used as in AsyncStorage to identify the kind of data
  value is what you are storing under that key ...
  This is built so the entire class can use this for their apps.
*/
const sendFeedback = async (feedback) => {
    const response = 
      await axios.post(url+"/cloud/store",
                          {email:'portfolioApp',
                           key:'portfolioDemo',
                           value:feedback,
                          });
    console.dir(response.data);
};

const getFeedback = async (saveFeedback) => {
  console.log('getting user info')
  const response = await axios.post(url+"/cloud/get",
            {email:'portfolioApp',key:'portfolioDemo'});
  console.log('got user info:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await axios.post(url+"/cloud/clear",{email:'portfolioApp'});
};

export {sendFeedback,getFeedback,clearData};
