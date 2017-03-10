
import request from 'axios';

export async function asyncAwait() {

    let userResponse = await request({ url: 'https://randomuser.me/api/', responseType: 'json' });
    let quoteResponse = await request({ url: 'http://quotes.rest/qod.json', responseType: 'json' });

    let user = userResponse.data.results[0];
    let quote = quoteResponse.data.contents.quotes[0];

    console.log(user.name.first + ' says: ' + quote.quote);
    console.log('Got Here.');

}