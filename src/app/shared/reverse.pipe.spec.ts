import { ReversPipe} from './revers.pipe';
describe('should return inversed string ', () => {
    it('take input string and return inversed',()=>{
        const app = new ReversPipe(); 
        expect(app.transform('libia')).toEqual('aibil');
    });
});