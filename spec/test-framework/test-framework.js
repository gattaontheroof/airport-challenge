// Function to assert 2 values are equal

export const assertEquals = (actualValue, expectedValue) => {
    if (actualValue !== expectedValue) throw new Error(`Expected ${expectedValue}, but got ${actualValue}`);
    return true;
}

export const assertTrue = actualValue => actualValue === true;

export const assertBooleanFalse = actualValue => actualValue === false;

export const assertFalsy = actualValue => actualValue == false;

export const it = (str, testFunc) => {
    try {
        testFunc();
        console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
    }
    catch (err) {
        console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
        console.error(err.message);
        console.log(err.stack);
    }
}

export const xit = str => {
    console.log("\x1b[31m%s\x1b[0m", `\tTEST SKIPPED: ${str}`);
}
