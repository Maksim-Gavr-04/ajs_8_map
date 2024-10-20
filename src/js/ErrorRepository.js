export class ErrorRepository {
  constructor() {
    this.map = new Map([
      [ 400, 'The server has detected an error in the syntax of your request' ],
      [ 401, 'You are not authorized to access the requested resource' ],
      [ 403, 'You have been denied access to the requested resource' ],
      [ 404, 'The server is unable to locate the requested resource' ],
    ]);
  }

  translate(code) {
    if (!this.map.has(code)) return 'Unknown error';

    return this.map.get(code);
  }
}