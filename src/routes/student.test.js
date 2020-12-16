import app from '../../app';
import request from 'supertest';

describe('Rotas das alunos', () => {
  it('get(listAll dos alunos, deve retornar uma array)', async () => {
    const res = await request(app).get('/student');
    expect(res.body).toEqual(expect.objectContaining([]));
  });

  it('get(listOne dos alunos, deve retornar um objeto contendo id,name,age,created_at)', async () => {
    const res = await request(app).get('/student/2');
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        age: expect.any(Number),
        name: expect.any(String),
        created_at: expect.any(String),
      })
    );
  });

  it('post(insert aluno, deve retornar um objeto com id,name,age)', async () => {
    const res = await request(app)
      .post('/student')
      .send({ name: 'José', age: 25 });
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });
});
