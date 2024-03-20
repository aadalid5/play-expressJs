const httpMocks = require('node-mocks-http');
const {handler} = require('./routes');

describe('route handler', () => {
    test('should test handler', () => {
        const request = httpMocks.createRequest({
            method: 'GET',
            url:'/'
        })
        
        const response = httpMocks.createResponse()
        
        handler(request, response)
        const data = response._getData();

        expect(data).toBe("hello express")
    })
    
})
