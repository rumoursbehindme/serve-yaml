import syc from '../index.js';
import { join } from 'path';
const configPath = join(process.cwd(), 'test', 'config');

console.log(syc(configPath));