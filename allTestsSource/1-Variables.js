const test = {
  "id": "1",
  "title": "Variables",
  "help": "https:\u002F\u002Fwww.w3schools.com\u002Fjs\u002Fjs_variables.asp",
  "items": [
    {
      "type": "lesson",
      "key": "lesson-0",
      "title": "console.log()",
      "text": "You're going to see a lot of console.log(), and when writing code, you'll use this to peek at values.\u003Cbr\u003E\u003Cbr\u003E\nconsole.log(\"Hi there\") outputs it into the \"terminal\" or \"console\" (those terms are interchangeable).\u003Cbr\u003E\u003Cbr\u003E\nGive it a try!\n",
      "sampleCode": "console.log(\"Hi there\");\nconsole.log(3);\nconsole.log(true);\n\n\u002F\u002F Try running the code with CTRL + ENTER\n\u002F\u002F You'll see the output below in the Terminal"
    },
    {
      "type": "lesson",
      "key": "lesson-1",
      "title": "Variables",
      "text": "A variable is a way to name a piece of information.\u003Cbr\u003E\u003Cbr\u003E\n\n      There are three ways to declare a variable:\u003Cbr\u003E\u003Cbr\u003E\n\n\u003Cb\u003Evar\u003C\u002Fb\u003E — The original way.\u003Cbr\u003E\n\u003Cb\u003Elet\u003C\u002Fb\u003E — Newer way. Slightly different from \"var\".\u003Cbr\u003E\n\u003Cb\u003Econst\u003C\u002Fb\u003E — Newer way. Cannot be reassigned (it is a \"constant\").\u003Cbr\u003E\u003Cbr\u003E\n\nYou assign a value using the \"=\" sign. The value on the right is stored under the name on the left.\u003Cbr\u003E\u003Cbr\u003E\n\nALSO variables must start with a character. So \"7Up\" is no good, but \"drink7Up\" is OK.\u003Cbr\u003E\u003Cbr\u003E\n\nLastly, there is some slight nuance between \"var\" and \"let\", but we'll save that for later.",
      "sampleCode": "\u002F\u002F var - the original way, can be reassigned\nvar name = \"Alice\";\n\n\u002F\u002F We can reassign it\nname = \"Bob\";\n\n\u002F\u002F let - block scoped, can be reassigned\nlet age = 25;\n\n\u002F\u002F We can reassign it\nage = 100;\n\n\u002F\u002F const - cannot be reassigned\nconst PI = 3.14;\nPI = \"pie\"; \u002F\u002F This throws an error!"
    },
    {
      "type": "lesson",
      "key": "lesson-2",
      "title": "Data",
      "text": "The basic forms of data (aka primitive data) are strings, numbers, and booleans:\u003Cbr\u003E\u003Cbr\u003E\n\n\u003Cb\u003Estring\u003C\u002Fb\u003E — This is a word or sentence. Basically any series of characters from your keyboard (and more). They always are inside a ' or \" or ` pair (single quote, double quote, or backtick).\u003Cbr\u003E\u003Cbr\u003E\n\u003Cb\u003Enumber\u003C\u002Fb\u003E — Any numbers. So like 1, or 200, or -50.\u003Cbr\u003E\u003Cbr\u003E\n\u003Cb\u003Eboolean\u003C\u002Fb\u003E — This can be true or false.\u003Cbr\u003E\u003Cbr\u003E\nAlso, \u003Cb\u003Etypeof\u003C\u002Fb\u003E is a JS keyword that will tell you the type of something.\u003Cbr\u003E\u003Cbr\u003E \nTry running the code!",
      "sampleCode": "\u002F\u002F string\nvar word = 'banana';\n\nconsole.log(word);\nconsole.log(typeof word);\n\n\u002F\u002F number\nvar bigNumber = 1000;\n\nconsole.log(bigNumber);\nconsole.log(typeof bigNumber);\n\n\u002F\u002F boolean\nvar yes = true;\nvar no = false;\n\nconsole.log(yes);\nconsole.log(typeof yes);\n\nconsole.log(no);\nconsole.log(typeof no);\n\n\u002F\u002F Try running the code with CTRL + ENTER\n\u002F\u002F You'll see the output below in the Terminal"
    },
    {
      "type": "lesson",
      "key": "lesson-3",
      "title": "Bringing It Together",
      "text": "Lets take a look at this code, using variables, data, and console.log.\u003Cbr\u003E\u003Cbr\u003E\nTry clicking \"Run\" or CTRL+ENTER.\u003Cbr\u003E\u003Cbr\u003E\nTake a look at the terminal.\u003Cbr\u003E\u003Cbr\u003E\nCan you see how the code is writing to the terminal?\u003Cbr\u003E\u003Cbr\u003E",
      "sampleCode": "\u002F\u002F var - the original way, can be reassigned\nvar name = \"Alice\";\nconsole.log(name); \u002F\u002F \"Alice\"\n\n\u002F\u002F We can reassign it\nname = \"Bob\";\nconsole.log(name); \u002F\u002F \"Bob\"\n\n\u002F\u002F let - block scoped, can be reassigned\nlet age = 25;\nconsole.log(age);  \u002F\u002F 25\n\n\u002F\u002F We can reassign it\nage = 100;\nconsole.log(age);  \u002F\u002F 100\n\n\u002F\u002F const - cannot be reassigned\nconst PI = 3.14;\nPI = \"pie\"; \u002F\u002F This throws an error!\nconsole.log(PI);   \u002F\u002F This code does not run because of the error!\n\n\u002F\u002F Try running the code with CTRL + ENTER\n\u002F\u002F You'll see the output below in the Terminal"
    },
    {
      "type": "test",
      "key": "varATests",
      "title": "var \"a\"",
      "instructions": "Declare a variable \"a\" and set it to the number 1",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(a).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(a).toHaveValue();
            }
        },
        {
          "description": "is a number",
          "test": () => {
              expect(a).toBeNumber();
            }
        },
        {
          "description": "is 1",
          "test": () => {
              expect(a).toBe(1);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varBTests",
      "title": "var \"b\"",
      "instructions": "Declare a variable \"b\" and set it to the number 2.2",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(b).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(b).toHaveValue();
            }
        },
        {
          "description": "is a number",
          "test": () => {
              expect(b).toBeNumber();
            }
        },
        {
          "description": "is 2.2",
          "test": () => {
              expect(b).toBe(2.2);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varCTests",
      "title": "var \"c\"",
      "instructions": "Declare a variable \"c\" and set it to the number 5000",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(c).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(c).toHaveValue();
            }
        },
        {
          "description": "is a number",
          "test": () => {
              expect(c).toBeNumber();
            }
        },
        {
          "description": "is 5000",
          "test": () => {
              expect(c).toBe(5000);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varDTests",
      "title": "var \"d\"",
      "instructions": "Declare a variable \"d\" and set it to the number 900000",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(d).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(d).toHaveValue();
            }
        },
        {
          "description": "is a number",
          "test": () => {
              expect(d).toBeNumber();
            }
        },
        {
          "description": "is 900000",
          "test": () => {
              expect(d).toBe(900000);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varETests",
      "title": "var \"e\"",
      "instructions": "Declare a variable \"e\" and set it to the number 111222333444",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(e).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(e).toHaveValue();
            }
        },
        {
          "description": "is a number",
          "test": () => {
              expect(e).toBeNumber();
            }
        },
        {
          "description": "is 111222333444",
          "test": () => {
              expect(e).toBe(111222333444);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varIsHavingFunTests",
      "title": "var \"isHavingFun\"",
      "instructions": "Declare a variable \"isHavingFun\" and set it to the boolean true",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(isHavingFun).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(isHavingFun).toHaveValue();
            }
        },
        {
          "description": "is a boolean",
          "test": () => {
              expect(isHavingFun).toBeBoolean();
            }
        },
        {
          "description": "is true",
          "test": () => {
              expect(isHavingFun).toBe(true);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varIsDifficultTests",
      "title": "var \"isDifficult\"",
      "instructions": "Declare a variable \"isDifficult\" and set it to the boolean false",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(isDifficult).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(isDifficult).toHaveValue();
            }
        },
        {
          "description": "is a boolean",
          "test": () => {
              expect(isDifficult).toBeBoolean();
            }
        },
        {
          "description": "is false",
          "test": () => {
              expect(isDifficult).toBe(false);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varLetterATests",
      "title": "var \"letterA\"",
      "instructions": "Declare a variable \"letterA\" and set it to the string \"a\"",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(letterA).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(letterA).toHaveValue();
            }
        },
        {
          "description": "is a string",
          "test": () => {
              expect(letterA).toBeString();
            }
        },
        {
          "description": "is \"a\"",
          "test": () => {
              expect(letterA).toBe('a');
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varWordTests",
      "title": "var \"word\"",
      "instructions": "Declare a variable \"word\" and set it to the string \"banana\"",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(word).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(word).toHaveValue();
            }
        },
        {
          "description": "is a string",
          "test": () => {
              expect(word).toBeString();
            }
        },
        {
          "description": "is \"banana\"",
          "test": () => {
              expect(word).toBe('banana');
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varSentenceTests",
      "title": "var \"sentence\"",
      "instructions": "Declare a variable \"sentence\" and set it to the string \"I ate breakfast.\"",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(sentence).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(sentence).toHaveValue();
            }
        },
        {
          "description": "is a string",
          "test": () => {
              expect(sentence).toBeString();
            }
        },
        {
          "description": "is \"I ate breakfast.\"",
          "test": () => {
              expect(sentence).toBe('I ate breakfast.');
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "varParagraphTests",
      "title": "var \"paragraph\"",
      "instructions": "Declare a variable \"sentence\" and set it to the string \"The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.\"",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(paragraph).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(paragraph).toHaveValue();
            }
        },
        {
          "description": "is a string",
          "test": () => {
              expect(paragraph).toBeString();
            }
        },
        {
          "description": "is \"The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.\"",
          "test": () => {
              expect(paragraph).toBe(
                `The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.`,
              );
            }
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined') module.exports = test;
