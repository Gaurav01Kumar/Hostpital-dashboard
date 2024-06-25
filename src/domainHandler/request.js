import axios from "axios"
export const postRequest = async ({ url, data, headers }) => {
    try {
        
      const response = await axios.post(url, data, {
        headers: headers ? headers : null,
      });
      
  
  
      return response.data;
    } catch (error) {
        
      if (error) {
        return error.response.data;
      }
    }
  };