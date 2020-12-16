import app from '../../app';
import request from 'supertest';

describe('Rotas das professores', () => {
  it('get(listAll dos professores, deve retornar uma array)', async () => {
    const res = await request(app).get('/teacher');
    expect(res.body).toEqual(expect.objectContaining([]));
  });

  it('get(listOne dos professores, deve retornar um objeto contendo id,name,created_at)', async () => {
    const res = await request(app).get('/teacher/2');
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        created_at: expect.any(String),
      })
    );
  });

  it('post(insert professor, deve retornar um objeto com id,name)', async () => {
    const res = await request(app).post('/teacher').send({ name: 'Jose' });
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      })
    );
  });
});
