
const assert = require('assert');
const request = require('supertest')
const app = require('../app')

describe('The express app' , ()=>{

it('handles a GET requiest to /api' , (done)=>{

    request(app).get('/api').end((err , response)=>{


        const {_body} = response;

        const expectedResult = 'there';
        assert.equal(_body.hi , expectedResult);
        done();

    });

});

});

