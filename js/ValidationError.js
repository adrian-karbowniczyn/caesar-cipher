class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Validation error';
  }
}
export default ValidationError;
