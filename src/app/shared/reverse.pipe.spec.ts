import { ReversePipe} from './revers.pipe';
describe('should return inversed string ', () => {
    it('take input string and return inversed', () => {
        const app = new ReversePipe();
        expect(app.transform('libia')).toEqual('aibil');
    });
});
