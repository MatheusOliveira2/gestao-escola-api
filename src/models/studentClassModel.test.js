import studentClassModel from './studentClassModel';

describe('Model de alunos', () => {
  it('Deve retornar um objeto contendo id', async () => {
    const result = await studentClassModel.updateStudentClass(3, 2);
    expect(typeof result).toBe('number');
  });
});
