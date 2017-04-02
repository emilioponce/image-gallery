import request from 'supertest';
import server from '../../server';

describe('GET /api/images', function() {

  it('Success with json content', function() {
    let page = 1;
    let path = '/api/images/pag=' + page;
    return request(server)
    .get(path)
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/);
  });

  it('FAIL required param [pag]', function() {
    let path = '/api/images';
    return request(server)
    .get(path)
    .expect(400);
  });

});

describe('GET /api/image/{id}', function() {

  it('Success with json content', function() {
    let id = 9638138263;
    let path = '/api/images/' + id;
    return request(server)
    .get(path)
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/);
  });

  it('FAIL withoud {id}', function() {
    var path = '/api/images';
    return request(server)
    .get(path)
    .expect(400);
  });

});
