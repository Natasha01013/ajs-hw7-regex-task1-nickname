export class Validator {
    validateUsername(username) {
        return (/^(?![-_\d])(?!.*\d{4})(?!.*[-_\d]$)[A-Za-z0-9-_]+$/).test(username);
    }
}