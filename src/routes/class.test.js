import app from '../../app';
import request from 'supertest';

describe('Rotas das turmas', () => {
  it('get(listAll das turmas, deve retornar uma array)', async () => {
    const res = await request(app).get('/class');
    expect(res.body).toEqual(expect.objectContaining([]));
  });

  it('get(listOne das turmas, deve retornar um objeto contendo id,name,created_at,students,teacher)', async () => {
    const res = await request(app).get('/class/2');
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        created_at: expect.any(String),
        students: expect.anything(),
        teacher: expect.anything(),
      })
    );
  });

  it('get(listAll das turmas, deve retornar um array)', async () => {
    const res = await request(app).get('/class');
    expect(res.body).toEqual(expect.objectContaining([]));
  });
});
