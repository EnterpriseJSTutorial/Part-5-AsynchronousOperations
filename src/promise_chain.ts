
import request from 'axios';

export function promiseChain() {

    let user: any;

    request({ url: 'https://randomuser.me/api/', responseType: 'json' })
    
    .then((response) => {
        user = response.data.results[0];
        return request({ url: 'http://quotes.rest/qod.json', responseType: 'json' });
    })
    
    .then((response) => {
        let quote = response.data.contents.quotes[0];
        console.log(user.name.first + ' says: ' + quote.quote);
        return user.name.first;
    })
    
    .then((name) => {
        console.log('Got Here:', name);
    })
    
    .catch((err) => {
        console.error(err);
    })

}