export const quizData = [
  // =================== HTML ===================
  {
    tech: "HTML",
    questions: [
      { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None of these"], answer: "Hyper Text Markup Language" },
      { id: 2, question: "Which HTML element is used for the largest heading?", options: ["<head>", "<h1>", "<h6>", "<heading>"], answer: "<h1>" },
      { id: 3, question: "Which attribute is used to link CSS to HTML?", options: ["href", "src", "rel", "type"], answer: "rel" },
      { id: 4, question: "What does the <a> tag define?", options: ["Anchor/Link", "Article", "Audio", "Abbreviation"], answer: "Anchor/Link" },
      { id: 5, question: "Which HTML element is used for an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
      { id: 6, question: "Which attribute is used for image source?", options: ["link", "src", "href", "ref"], answer: "src" },
      { id: 7, question: "Which HTML tag is used to define a table row?", options: ["<td>", "<tr>", "<table>", "<th>"], answer: "<tr>" },
      { id: 8, question: "Which element is used to display a paragraph?", options: ["<p>", "<para>", "<pg>", "<text>"], answer: "<p>" },
      { id: 9, question: "What is the correct way to comment in HTML?", options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"], answer: "<!-- comment -->" },
      { id: 10, question: "Which element is used to define the document body?", options: ["<body>", "<head>", "<html>", "<content>"], answer: "<body>" }
    ]
  },

  // =================== CSS ===================
  {
    tech: "CSS",
    questions: [
      { id: 1, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
      { id: 2, question: "Which property is used to change text color?", options: ["color", "font-color", "text-color", "fgcolor"], answer: "color" },
      { id: 3, question: "How do you make a class selector?", options: [".classname", "#classname", "*classname", "classname"], answer: ".classname" },
      { id: 4, question: "Which property is used for background color?", options: ["bgcolor", "background-color", "color", "bg-color"], answer: "background-color" },
      { id: 5, question: "Which CSS property controls the element’s size?", options: ["size", "dimension", "width/height", "length"], answer: "width/height" },
      { id: 6, question: "What is the default position value of an element?", options: ["relative", "absolute", "static", "fixed"], answer: "static" },
      { id: 7, question: "Which property is used for spacing between letters?", options: ["letter-spacing", "text-spacing", "word-spacing", "line-height"], answer: "letter-spacing" },
      { id: 8, question: "How do you center an element horizontally?", options: ["margin: auto;", "align: center;", "text-align: center;", "center: true;"], answer: "margin: auto;" },
      { id: 9, question: "Which property is used to control transparency?", options: ["opacity", "transparency", "visibility", "filter"], answer: "opacity" },
      { id: 10, question: "Which pseudo-class applies when the user hovers?", options: [":hover", ":focus", ":active", ":visited"], answer: ":hover" }
    ]
  },

  // =================== JavaScript ===================
  {
    tech: "JavaScript",
    questions: [
      { id: 1, question: "Which keyword declares a block-scoped variable?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
      { id: 2, question: "Which method prints to console?", options: ["console.print()", "console.log()", "print()", "log()"], answer: "console.log()" },
      { id: 3, question: "Which symbol is used for comments?", options: ["//", "/* */", "#", "<!-- -->"], answer: "//" },
      { id: 4, question: "What is the output of '2' + 2?", options: ["4", "'4'", "'22'", "NaN"], answer: "'22'" },
      { id: 5, question: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"], answer: "JSON.parse()" },
      { id: 6, question: "Which function is used to schedule a task after delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], answer: "setTimeout()" },
      { id: 7, question: "How do you declare a function?", options: ["function myFunc(){}", "func myFunc(){}", "def myFunc(){}", "function:myFunc(){}"], answer: "function myFunc(){}" },
      { id: 8, question: "Which operator checks both value and type?", options: ["==", "=", "===", "!="], answer: "===" },
      { id: 9, question: "What is NaN?", options: ["Number", "Not a Number", "Null", "Undefined"], answer: "Not a Number" },
      { id: 10, question: "Which method adds an item to the end of array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" }
    ]
  },

  // =================== React ===================
  {
    tech: "React",
    questions: [
      { id: 1, question: "What is JSX?", options: ["JavaScript XML", "Java Syntax Extension", "JSON Script", "None"], answer: "JavaScript XML" },
      { id: 2, question: "Which hook is used for state?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useState" },
      { id: 3, question: "Which hook is used for side effects?", options: ["useState", "useEffect", "useMemo", "useRef"], answer: "useEffect" },
      { id: 4, question: "How do you pass props?", options: ["<Component prop={value} />", "<Component props={value} />", "<Component pass={value} />", "None"], answer: "<Component prop={value} />" },
      { id: 5, question: "What does 'key' prop do in lists?", options: ["Uniquely identifies element", "Styles the element", "Triggers re-render", "Nothing"], answer: "Uniquely identifies element" },
      { id: 6, question: "Which hook is used to access context?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useContext" },
      { id: 7, question: "Which method updates the DOM?", options: ["render()", "setState()", "ReactDOM.render()", "updateDOM()"], answer: "ReactDOM.render()" },
      { id: 8, question: "How do you create a component?", options: ["function MyComp() {}", "class MyComp {}", "Both", "None"], answer: "Both" },
      { id: 9, question: "Which hook is used for performance optimization?", options: ["useMemo", "useCallback", "useEffect", "useState"], answer: "useMemo" },
      { id: 10, question: "Which hook keeps a mutable reference?", options: ["useRef", "useState", "useReducer", "useEffect"], answer: "useRef" }
    ]
  },

  // =================== Node.js ===================
  {
    tech: "Node.js",
    questions: [
      { id: 1, question: "Node.js is based on which engine?", options: ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"], answer: "V8" },
      { id: 2, question: "Which module is used to create HTTP server?", options: ["http", "fs", "os", "net"], answer: "http" },
      { id: 3, question: "Which file is used to manage dependencies?", options: ["package.json", "index.js", "app.js", "config.json"], answer: "package.json" },
      { id: 4, question: "Which command installs a package?", options: ["npm install", "npm start", "node install", "node start"], answer: "npm install" },
      { id: 5, question: "Which global object refers to current module?", options: ["exports", "module", "__dirname", "require"], answer: "module" },
      { id: 6, question: "Which method reads a file asynchronously?", options: ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"], answer: "fs.readFile()" },
      { id: 7, question: "Which Node.js framework is popular for APIs?", options: ["Express", "React", "Angular", "Vue"], answer: "Express" },
      { id: 8, question: "Which object provides info about OS?", options: ["os", "fs", "process", "net"], answer: "os" },
      { id: 9, question: "Which object provides environment variables?", options: ["process.env", "module.env", "global.env", "os.env"], answer: "process.env" },
      { id: 10, question: "Which method starts the Node.js server?", options: ["server.listen()", "server.start()", "app.run()", "node.run()"], answer: "server.listen()" }
    ]
  },

  // =================== Express ===================
  {
    tech: "Express",
    questions: [
      { id: 1, question: "Express is a framework for which platform?", options: ["Node.js", "React", "Angular", "Python"], answer: "Node.js" },
      { id: 2, question: "Which method defines a GET route?", options: ["app.get()", "app.post()", "app.put()", "app.route()"], answer: "app.get()" },
      { id: 3, question: "Which middleware parses JSON body?", options: ["express.json()", "body-parser", "express.urlencoded()", "All"], answer: "All" },
      { id: 4, question: "Which method defines POST route?", options: ["app.post()", "app.get()", "app.put()", "app.route()"], answer: "app.post()" },
      { id: 5, question: "Which method defines route parameters?", options: ["app.param()", "app.route()", "app.get()", "app.set()"], answer: "app.param()" },
      { id: 6, question: "Which function starts Express server?", options: ["app.listen()", "app.start()", "server.listen()", "server.start()"], answer: "app.listen()" },
      { id: 7, question: "Which object handles request data?", options: ["req", "res", "app", "next"], answer: "req" },
      { id: 8, question: "Which object sends response?", options: ["res", "req", "app", "next"], answer: "res" },
      { id: 9, question: "Which middleware handles 404 errors?", options: ["custom middleware", "express.json()", "body-parser", "app.listen()"], answer: "custom middleware" },
      { id: 10, question: "Which method mounts middleware?", options: ["app.use()", "app.get()", "app.post()", "app.listen()"], answer: "app.use()" }
    ]
  },

  // =================== MongoDB ===================
  {
    tech: "MongoDB",
    questions: [
      { id: 1, question: "Which type of database is MongoDB?", options: ["Document", "Relational", "Graph", "Key-Value"], answer: "Document" },
      { id: 2, question: "Which command inserts document?", options: ["db.collection.insertOne()", "db.insert()", "db.add()", "db.push()"], answer: "db.collection.insertOne()" },
      { id: 3, question: "Which query finds documents?", options: ["db.collection.find()", "db.find()", "db.search()", "db.query()"], answer: "db.collection.find()" },
      { id: 4, question: "Which command updates document?", options: ["db.collection.updateOne()", "db.update()", "db.modify()", "db.collection.edit()"], answer: "db.collection.updateOne()" },
      { id: 5, question: "Which command deletes document?", options: ["db.collection.deleteOne()", "db.delete()", "db.collection.remove()", "db.remove()"], answer: "db.collection.deleteOne()" },
      { id: 6, question: "Which data type is unique ID?", options: ["ObjectId", "UUID", "int", "String"], answer: "ObjectId" },
      { id: 7, question: "Which operator adds value to array?", options: ["$push", "$add", "$append", "$set"], answer: "$push" },
      { id: 8, question: "Which operator removes value from array?", options: ["$pull", "$remove", "$pop", "$delete"], answer: "$pull" },
      { id: 9, question: "Which method counts documents?", options: ["db.collection.countDocuments()", "db.collection.count()", "db.count()", "db.collection.size()"], answer: "db.collection.countDocuments()" },
      { id: 10, question: "Which method sorts documents?", options: ["sort()", "order()", "arrange()", "filter()"], answer: "sort()" }
    ]
  },

  // =================== C ===================
  {
    tech: "C Programming",
    questions: [
      { id: 1, question: "Who developed C?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Ken Thompson"], answer: "Dennis Ritchie" },
      { id: 2, question: "Which operator is used for address-of?", options: ["&", "*", "%", "$"], answer: "&" },
      { id: 3, question: "Which data type stores floating numbers?", options: ["float", "int", "double", "char"], answer: "float" },
      { id: 4, question: "Which loop executes at least once?", options: ["do-while", "for", "while", "if"], answer: "do-while" },
      { id: 5, question: "Which function prints output?", options: ["printf()", "scanf()", "print()", "echo()"], answer: "printf()" },
      { id: 6, question: "Which function reads input?", options: ["scanf()", "gets()", "input()", "cin"], answer: "scanf()" },
      { id: 7, question: "Which header file is needed for printf?", options: ["stdio.h", "conio.h", "string.h", "stdlib.h"], answer: "stdio.h" },
      { id: 8, question: "Which operator is used for multiplication?", options: ["*", "+", "-", "/"], answer: "*" },
      { id: 9, question: "What is the size of int in 32-bit?", options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"], answer: "4 bytes" },
      { id: 10, question: "Which symbol ends a statement?", options: [";", ":", ".", ","], answer: ";" }
    ]
  },

  // =================== C++ ===================
  {
    tech: "C++ Programming",
    questions: [
      { id: 1, question: "C++ is an extension of which language?", options: ["C", "Java", "Python", "Pascal"], answer: "C" },
      { id: 2, question: "Which keyword is used for inheritance?", options: ["public", "private", "protected", "extends"], answer: "public" },
      { id: 3, question: "Which operator is used for scope resolution?", options: ["::", ".", "->", ":"], answer: "::" },
      { id: 4, question: "Which function is used to print output?", options: ["cout", "printf", "cin", "echo"], answer: "cout" },
      { id: 5, question: "Which function reads input?", options: ["cin", "scanf", "input", "gets"], answer: "cin" },
      { id: 6, question: "Which keyword declares a constant?", options: ["const", "let", "var", "final"], answer: "const" },
      { id: 7, question: "Which is the correct comment?", options: ["// comment", "/* comment */", "Both", "# comment"], answer: "Both" },
      { id: 8, question: "Which is correct way to create object?", options: ["ClassName obj;", "obj = ClassName();", "new ClassName;", "create ClassName obj;"], answer: "ClassName obj;" },
      { id: 9, question: "Which operator is used for pointer dereference?", options: ["*", "&", "%", "$"], answer: "*" },
      { id: 10, question: "Which header is used for cout?", options: ["iostream", "stdio.h", "conio.h", "string"], answer: "iostream" }
    ]
  },

  // =================== Java ===================
  {
    tech: "Java Programming",
    questions: [
      { id: 1, question: "Who developed Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], answer: "James Gosling" },
      { id: 2, question: "Which keyword is used for inheritance?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
      { id: 3, question: "Which method is the entry point of a Java program?", options: ["main()", "start()", "init()", "run()"], answer: "main()" },
      { id: 4, question: "Which keyword is used to create an object?", options: ["new", "class", "object", "this"], answer: "new" },
      { id: 5, question: "Which data type is used to store true/false?", options: ["boolean", "int", "char", "float"], answer: "boolean" },
      { id: 6, question: "Which keyword is used to prevent inheritance of a class?", options: ["final", "static", "abstract", "private"], answer: "final" },
      { id: 7, question: "Which keyword is used to define an abstract class?", options: ["abstract", "final", "static", "interface"], answer: "abstract" },
      { id: 8, question: "Which operator is used to compare objects for equality?", options: ["equals()", "==", "compare()", "==="], answer: "equals()" },
      { id: 9, question: "Which keyword is used to handle exceptions?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above" },
      { id: 10, question: "Which package contains core classes like String and Math?", options: ["java.lang", "java.util", "java.io", "java.net"], answer: "java.lang" }
    ]
  }
]