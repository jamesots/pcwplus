import * as fs from 'fs';
import * as path from 'path';

const j15cpm3 = fs.readFileSync('binsrc/j15cpm3.emt');
const extracode = fs.readFileSync('build/extracode.bin');
const mods = fs.readFileSync('build/mods.bin');

const modded = Buffer.concat([j15cpm3, extracode]);
modded[0x702F] = 2; // set default drive to C:
mods.copy(modded, 0x0006, 0, 13);
mods.copy(modded, 0x29e6, 13);

save('build/modded.emt');

function save(filename) {
    const file = fs.openSync(filename, 'w');
    fs.writeSync(file, modded);
    fs.closeSync(file);
}
