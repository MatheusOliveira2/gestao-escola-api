import classModel from './classModel';

describe('Model de turmas', () => {
  it('Deve retornar um objeto da contendo id', async () => {
    expect(await classModel.create({ name: 'Turma 15' })).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
      })
    );
  });

  it('Deve retornar um objeto contendo id, name, created_at', async () => {
    expect(await classModel.listOne(2)).toEqual(
      expect.objectContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          created_at: expect.any(Date),
        },
      ])
    );
  });

  it('Deve retornar um array', async () => {
    expect(await classModel.listAll()).toEqual(
      expect.objectContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          created_at: expect.any(Date),
        },
      ])
    );
  });

  it('Deve retornar um numero', async () => {
    expect(typeof (await classModel.delete(5))).toBe('number');
  });
});
