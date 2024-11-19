import { Validator } from '../validator.js';

test('return true for valid usernames', () => {
    let validator = new Validator();
    expect(validator.validateUsername('vova-198n')).toBe(true);
    expect(validator.validateUsername('vova_198n')).toBe(true);
    expect(validator.validateUsername('vova-n')).toBe(true);
    expect(validator.validateUsername('VOVA198v')).toBe(true);
});

test('return false for invalid usernames', () => {
    let validator = new Validator();
    //имя начинается с цифры, - или _
    expect(validator.validateUsername('-198n')).toBe(false);
    expect(validator.validateUsername('_198n')).toBe(false);
    expect(validator.validateUsername('983n')).toBe(false);

    //имя заканчивается цифрой, - или _
    expect(validator.validateUsername('vova198')).toBe(false);
    expect(validator.validateUsername('vova198-')).toBe(false);
    expect(validator.validateUsername('vova198_')).toBe(false);

    //имя содержит более 3-х цифр подряд
    expect(validator.validateUsername('vova1983n')).toBe(false);

    //имя содержит недопустимые символы
    expect(validator.validateUsername('vova!983n')).toBe(false);
    expect(validator.validateUsername('vova@983n')).toBe(false);

    //имя пустое
    expect(validator.validateUsername('')).toBe(false);
});
