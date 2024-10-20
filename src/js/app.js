import { ErrorRepository } from './ErrorRepository';

// TODO: write code here
const errorRepository = new ErrorRepository();
errorRepository.map.set(405, 'The request method is not allowed for the requested resource');
console.log(errorRepository.map);

console.log('app worked!');