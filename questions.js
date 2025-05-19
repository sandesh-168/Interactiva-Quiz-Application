const questions = [
    {
        question: "What is JavaScript primarily used for?",
        answers: [
            { text: "Creating interactive web pages", correct: true },
            { text: "Styling web pages", correct: false },
            { text: "Database management", correct: false },
            { text: "Server-side processing only", correct: false }
        ],
        explanation: "JavaScript is primarily used to create interactive elements on web pages, making them dynamic and responsive to user actions."
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Float", correct: true },
            { text: "Object", correct: false }
        ],
        explanation: "Float is not a JavaScript data type. JavaScript uses Number for both integers and floating-point numbers."
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        answers: [
            { text: "variable name = value;", correct: false },
            { text: "var name = value;", correct: true },
            { text: "v name = value;", correct: false },
            { text: "int name = value;", correct: false }
        ],
        explanation: "In JavaScript, variables are declared using 'var', 'let', or 'const' keywords. 'var' is the traditional way, though 'let' and 'const' are preferred in modern JavaScript."
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!=", correct: false }
        ],
        explanation: "The === operator checks both value and type equality, making it a strict equality comparison."
    },
    {
        question: "What is a callback function in JavaScript?",
        answers: [
            { text: "A function that is passed as an argument to another function", correct: true },
            { text: "A function that calls itself", correct: false },
            { text: "A function that only runs in the background", correct: false },
            { text: "A function that overrides another function", correct: false }
        ],
        explanation: "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function."
    },
    {
        question: "What does the 'DOM' stand for in JavaScript?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Document Oriented Middleware", correct: false },
            { text: "Digital Ordinance Model", correct: false }
        ],
        explanation: "DOM stands for Document Object Model, which represents the HTML document as a tree structure of objects."
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "append()", correct: false },
            { text: "add()", correct: false }
        ],
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
    },
    {
        question: "What will the following code return: typeof null?",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "number", correct: false }
        ],
        explanation: "In JavaScript, typeof null returns 'object', which is considered a historical bug in the language."
    },
    {
        question: "Which statement is used to exit a loop in JavaScript?",
        answers: [
            { text: "exit", correct: false },
            { text: "return", correct: false },
            { text: "break", correct: true },
            { text: "stop", correct: false }
        ],
        explanation: "The break statement exits a loop immediately, skipping any remaining code in the current iteration."
    },
    {
        question: "What is JSON in JavaScript?",
        answers: [
            { text: "JavaScript Object Network", correct: false },
            { text: "JavaScript Oriented Notation", correct: false },
            { text: "JavaScript Online Network", correct: false },
            { text: "JavaScript Object Notation", correct: true }
        ],
        explanation: "JSON stands for JavaScript Object Notation, which is a lightweight data-interchange format easy for humans to read and write."
    }
]; 