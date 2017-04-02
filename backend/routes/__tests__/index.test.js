import request from 'supertest';
import server from '../../server';

describe('GET /', function() {

  it('Success with html content', function() {
    let path = '/';
    return request(server)
    .get(path)
    .expect(200)
    .expect('Content-Type', /html/);
  });

});
