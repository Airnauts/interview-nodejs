import Assembler from './assembler';

describe('assembler', () => {
  it('calculates ADD properly', () => {
    const programAdd = `MOV A 10
MOV B 15
ADD`;
    let assembler = new Assembler();
    assembler.runProgram(programAdd);
    expect(assembler.registers).toEqual(['10', '15', '25']);

    const programAdd2 = `MOV A 9007199254740991
MOV B 1
ADD`;
    assembler = new Assembler();
    assembler.runProgram(programAdd2);
    expect(assembler.registers).toEqual(['9007199254740991', '1', '9007199254740992']);

    const programHarderAdd = `MOV A 10
MOV B 15
MOV A B
ADD`;
    assembler = new Assembler();
    assembler.runProgram(programHarderAdd);
    expect(assembler.registers).toEqual(['15', '15', '30']);
  });

  it('calculate MUL properly', () => {
    const programMul = `MOV A 10
MOV B 15
MUL`;
    const assembler = new Assembler();
    assembler.runProgram(programMul);
    expect(assembler.registers).toEqual(['10', '15', '150']);
  });

  it('handles JMP properly', () => {
    const programJmp1 = `MOV A 10
MOV B 15
MOV C 0
JMP 5
MUL
JMP 7
ADD`;
    let assembler = new Assembler();
    assembler.runProgram(programJmp1);
    expect(assembler.registers).toEqual(['10', '15', '0']);

    const programJmp2 = `MOV A 1
MOV B 2
JMP 5
ADD
JMP 6
JMP 3
MOV B 10`;
    assembler = new Assembler();
    assembler.runProgram(programJmp2);
    expect(assembler.registers).toEqual(['1', '10', '3']);
  });

  it('handles JNZ properly', () => {
    const programJnz1 = `MOV A 10
MOV B 15
MOV C 1
JNZ 5
MUL
ADD`;
    let assembler = new Assembler();
    assembler.runProgram(programJnz1);
    expect(assembler.registers).toEqual(['10', '15', '25']);

    const programJnz2 = `MOV A 10
MOV B 15
MOV C 0
JNZ 5
MUL
JNZ 7
ADD`;
    assembler = new Assembler();
    assembler.runProgram(programJnz2);
    expect(assembler.registers).toEqual(['10', '15', '150']);
  });
});