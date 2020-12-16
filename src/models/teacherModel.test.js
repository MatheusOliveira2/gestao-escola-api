import teacherModel from './teacherModel';

describe('Model de alunos', () => {
  it('Deve retornar um objeto da contendo id', async () => {
    expect(await teacherModel.create({ name: 'Matheus' })).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
      })
    );
  });

  it('Deve retornar um objeto contendo id', async () => {
    const result = await teacherModel.listOne(3);
    expect(result).toEqual(expect.objectContaining([]));
  });

  it('Deve retornar um array', async () => {
    expect(await teacherModel.listAll()).toEqual(expect.objectContaining([]));
  });

  it('Deve retornar um numero', async () => {
    expect(typeof (await teacherModel.delete(1))).toBe('number');
  });
});
