const function1 = () => {
    function2();
};
const function2 = () => {
    function3();
};
const function3 = () => {};

function1();