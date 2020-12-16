import teacherClassModel from './teacherClassModel';

describe('Model de alunos', () => {
  it('Deve retornar um objeto contendo id', async () => {
    const result = await teacherClassModel.updateTeacherClass(3, 2);
    expect(typeof result).toBe('number');
  });
});
