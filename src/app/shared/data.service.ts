export class DataService {
    getDetails() {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
            resolve( 'Data' );
        })
        return result;
    }
}
