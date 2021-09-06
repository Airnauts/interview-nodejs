class Assembler {
    _inputLines
    _curLinePointer = 0
    registers = [0, 0, 0]

    runProgram(input) {
        this._inputLines = input.split('\n')
        for (; this._curLinePointer < this._inputLines.length;) {
            let [command, ...parameters] = this._inputLines[this._curLinePointer].split(' ')
            switch(command) {
                case 'MOV':
                    if (parameters.some(param => ! param in ["A", "B", "C"])) {
                        this.mov(parameters[0], parameters[1])
                    } else {
                        this.movXY(parameters[0], parameters[1])
                    }
                    break
                case 'ADD':
                    this.add()
                    break
                case 'MUL':
                    this.mul()
                    break
                case 'JNZ':
                    this.jnz(parameters[0])
                    break
                case 'JMP':
                    this.jmp(parameters[0])
                    break
            }
        }
    }

    movXY(target, source) {
        this.registers[target] = this.registers[source]
        this._curLinePointer += 1
    }

    mov(target, value) {
        this.registers[target] = value
        this._curLinePointer += 1
    }

    add() {
        this.registers[2] = this.registers[0] + this.registers[1]
        this._curLinePointer += 1
    }

    mul() {
        this.registers[2] = this.registers[0] * this.registers[1]
        this._curLinePointer += 1
    }

    jnz(value) {
        if (this.registers[2] !== 0) {
            this._curLinePointer = value - 1
        } else {
            this._curLinePointer += 1
        }
    }

    jmp(value) {
        this._curLinePointer = value - 1
    }
}

export default Assembler;
