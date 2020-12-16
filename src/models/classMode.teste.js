import classModel from './classModel';

describe('Model de turmas', () => {
  it('Deve retornar um onjeto da classe contendo id, name, created', () => {
    expect(
      classModel.create({ name: 'Turma 15' }).objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      })
    );
  });
});
