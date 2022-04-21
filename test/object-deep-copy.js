
describe('Object', () => {

    it('Object deep', () => {
        let a = {
            b: {
                c: 'ok',
                d: false
            },
            while: false
        };

        let b = Object.assign({}, a, {
            b: {
                d: true
            }
        });

        console.log(a, b)
    })
})