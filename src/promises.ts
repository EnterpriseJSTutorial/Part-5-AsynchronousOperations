
import request from 'axios';

export function promises() {

    let user: any;

    request({ url: 'https://randomuser.me/api/', responseType: 'json' })
    
    .then((response) => {
        user = response.data.results[0];
        return request({ url: 'http://quotes.rest/qod.json', responseType: 'json' });
    })
    
    .then((response) => {
        let quote = response.data.contents.quotes[0];
        console.log(user.name.first + ' says: ' + quote.quote);
    })
    
    .then(() => {
        console.log('Got Here.');
    })
    
    .catch((err) => {
        console.log(err);
    })

}