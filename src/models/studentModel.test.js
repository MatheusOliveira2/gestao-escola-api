import studentModel from './studentModel';

describe('Model de alunos', () => {
  it('Deve retornar um objeto da contendo id', async () => {
    expect(await studentModel.create({ name: 'Matheus', age: '25' })).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
      })
    );
  });

  it('Deve retornar um objeto contendo id', async () => {
    const result = await studentModel.listOne(3);
    expect(result).toEqual(expect.objectContaining([]));
  });

  it('Deve retornar um array', async () => {
    expect(await studentModel.listAll()).toEqual(expect.objectContaining([]));
  });

  it('Deve retornar um numero', async () => {
    expect(typeof (await studentModel.delete(1))).toBe('number');
  });
});
