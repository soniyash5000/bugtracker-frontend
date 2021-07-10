import axios from 'axios';

export const yash =  () => {
    
    let x = isLogin();
    console.log(x); 
    return x;
}

export const isLogin = () => {
        console.log("HIIIII");

        let token1 = localStorage.getItem("token");
        // let data = '';
        // let ans = false;
        let config = {
            headers: { 
                'x-access-token': token1
            }
        };
            axios.get('https://bugtrackers-api.herokuapp.com/check-token',config)
                 .then(response => {
                     console.log((response.data));
                     return true;
                 })
                 .catch(error => {
                     console.log("sdsdds" + error);
                     return false;
                 });
              
    
    
}
// export default isLogin;