import { expect } from 'chai';
import { checkStudentKnowledge } from './studentKnowledgeCheckerUtil';

describe('checkStudentKnowledge', () => {
  it('should return false if correctAnswers and studentsAnswers haven\'t the same length', () => {
    const studentAnswers = {};
    const correctAnswers = { correctAnwser1: 'correctAnswer' };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).equals(false);
  });
  it('should return false if the answer keys are not the same', () => {
    const studentAnswers = { helloBrother: '228', correctAnwser2: 335 };
    const correctAnswers = {
      correctAnwser1: 'correctAnswer',
      correctAnwser2: 32312,
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).equals(false);
  });
  it('should return false if the answer value are not exactly the same', () => {
    const studentAnswers = { correctAnwser1: '228', correctAnwser2: 'hello' };
    const correctAnswers = {
      correctAnwser1: 'correctAnswer',
      correctAnwser2: 'hello',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).equals(false);
  });
  it('should return true if the answers keys and answers values are the same', () => {
    const studentAnswers = {
      currectQuestion1: 'correctAnswer1',
      currectQuestion2: 'correctAnswer2',
    };
    const correctAnswers = {
      currectQuestion1: 'correctAnswer1',
      currectQuestion2: 'correctAnswer2',
    };

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).equals(true);
  });
});
