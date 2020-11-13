const greet = (name) => {
    // Test 2
    let message = "Hello, ";
    if (name === null) {
        return "Hello, my friend."
    }
    if (typeof name === "object") {
        // Test 6
        const idxShoutedName = name.findIndex(name => name === name.toUpperCase());
        if (idxShoutedName !== -1) {
            let ieie = [...name];
            ieie.splice(idxShoutedName, 1);
            message += ieie.join(' and ');
            message += `. AND HELLO ${name[idxShoutedName]}!`;
            return message;
        }

        // Test 8
        const idxWithDoubleQuotes = name.findIndex(name => name.includes('"'));
        if (idxWithDoubleQuotes !== -1) {
            const ieie = name.reduce((names, name, idx) => {
                if (idx === idxWithDoubleQuotes) {
                    const escapedName = name.substr(1, name.length - 2);
                    return [...names, escapedName];
                }
                return [...names, name];
            }, []);

            return message + ieie.join(' and ') + '.'
        }

        // Test 7
        const idxThereComma = name.findIndex(name => name.includes(','));
        if (idxThereComma !== -1) {
            let ieie = [...name];
            ieie.splice(idxThereComma, 1, ...ieie[idxThereComma].split(', '));
            name = ieie;
        }

        // Test 5
        if (name.length > 2) {
            for (let i = 0; i < name.length; i++) {
                if (i === name.length - 1) {
                    message += `and ${name[i]}.`
                    break
                }
                message += `${name[i]}, `
            }
            return message;
        }

        // Test 4
        return message + `${name[0]} and ${name[1]}.`
    }

    // Test 3
    if (name === name.toUpperCase()) {
        return `HELLO ${name}!`;
    }

    // Test 1
    return message + `${name}.`;
}

module.exports = { greet }

// const isUppercase = text => text === text.toUpperCase();

// const shoutSingleName = name => `HELLO ${name}!`;
// const saySingleName = name => `Hello, ${name}.`;

// const separateNamesInUppercaseAndLowercase = (separatedNames, name) => {
//     isUppercase(name)
//         ? separatedNames.uppercase.push(name)
//         : separatedNames.lowercase.push(name);
//     return separatedNames;
// };

// const splitNamesWithComaNotEscaped = (names, name) => {
//     console.log('names:', names, 'name', name)
//     if (name[0] === '"' && name[name.length - 1]) {
//         console.log('name[0]', name[0], 'name[name.length - 1]', name[name.length - 1])
//         const escapedName = name.substr(1, name.length - 2);
//         console.log([...names, escapedName])
//         return [...names, escapedName];
//     }
//     return [...names, ...name.split(", ")];
// };

// const handleLowercaseText = names => {
//     if (names.length === 0) {
//         return "";
//     }
//     if (names.length === 1) {
//         return saySingleName(names[0]);
//     }
//     const lastName = names.pop();
//     let namesText = names.length > 1 ? names.join(", ") + "," : names[0];

//     return `Hello, ${namesText} and ${lastName}.`;
// };

// const handleUppercaseText = names => {
//     if (names.length === 0) {
//         return "";
//     }
//     if (names.length === 1) {
//         return shoutSingleName(names[0]);
//     }
//     const lastName = names.pop();
//     let namesText = names.join(", ");

//     return `HELLO ${namesText} AND ${lastName}!`;
// };

// const greet = (name = null) => {
//     if (name === null) {
//         return saySingleName("my friend");
//     }
//     let names = Array.isArray(name) ? name : [name];

//     let { uppercase, lowercase } = names
//         .reduce(splitNamesWithComaNotEscaped, [])
//         .reduce(separateNamesInUppercaseAndLowercase, {
//             uppercase: [],
//             lowercase: []
//         });

//     let lowercaseText = handleLowercaseText(lowercase);
//     let uppercaseText = handleUppercaseText(uppercase);

//     if (uppercaseText === "") {
//         return lowercaseText;
//     }
//     if (lowercaseText === "") {
//         return uppercaseText;
//     }

//     return `${lowercaseText} AND ${uppercaseText}`;
// };

// module.exports = { greet }