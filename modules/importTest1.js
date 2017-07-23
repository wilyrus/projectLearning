import test from './importTest2.js';

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        alert('hello world from test 1');
        test();
    })
}
