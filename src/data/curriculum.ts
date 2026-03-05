import { Module } from '../types';

export const curriculum: Module[] = [
  {
    id: 'basics',
    title: 'Module 1: Absolute Basics',
    description: 'Initialize your core systems. Master variables, data types, and arithmetic logic.',
    lessons: [
      {
        id: 'intro-python',
        title: 'System Initialization',
        type: 'notes',
        content: `
# System Initialization: Python 101

Python is a high-level, interpreted language designed for maximum efficiency and readability. Think of it as the "Universal Translator" for computers.

### Why Python?
- **Readability:** It looks like English.
- **Versatility:** Used in AI, Web Dev, Data Science, and Robotics.
- **Community:** Millions of developers contributing to its growth.

### Real-Life Analogy: The Recipe
Imagine you are following a recipe to bake a cake. 
1. **The Ingredients** are your **Variables** (flour, sugar).
2. **The Instructions** are your **Code** (mix, bake).
3. **The Result** is your **Output** (the cake).

### Core Directives
- **Indentation:** Python uses whitespace to define scope. It's like paragraphs in a book; they keep things organized.
- **Dynamic Typing:** Variables are assigned types at runtime. You don't have to tell Python "this is a number," it just knows.

### First Execution
\`\`\`python
# Output data to the console
print("System Online. Version 3.12")
\`\`\`

### Real-World Example: Smart Home Greeting
A smart home system uses \`print()\` to greet you when you walk in.
\`\`\`python
user_name = "Agent 007"
print("Welcome back, " + user_name)
\`\`\`
        `
      },
      {
        id: 'data-types-notes',
        title: 'Data Archetypes',
        type: 'notes',
        content: `
# Data Archetypes: The Building Blocks

In Python, every piece of information has a "type." Understanding these is like knowing the difference between a screw and a nail.

### 1. Integers (\`int\`)
Whole numbers without decimals.
- **Real-Life:** Counting the number of people in a room.
\`\`\`python
people_count = 25
\`\`\`

### 2. Floats (\`float\`)
Numbers with decimal points.
- **Real-Life:** Measuring the price of a coffee ($4.50) or your body temperature (98.6).
\`\`\`python
coffee_price = 4.50
\`\`\`

### 3. Strings (\`str\`)
Text wrapped in quotes.
- **Real-Life:** Storing a username or a secret message.
\`\`\`python
message = "The eagle has landed."
\`\`\`

### 4. Booleans (\`bool\`)
Logical values: \`True\` or \`False\`.
- **Real-Life:** A light switch (On/Off) or a door (Locked/Unlocked).
\`\`\`python
is_door_locked = True
\`\`\`

### Type Conversion (Casting)
Sometimes you need to change a screw into a nail.
\`\`\`python
age_str = "25"
age_int = int(age_str) # Now it's a number we can do math with!
\`\`\`
        `
      },
      {
        id: 'basics-quiz-1',
        title: 'Diagnostic: Basic Syntax',
        type: 'quiz',
        quiz: [
          {
            question: "What is the correct way to output 'Hello World' in Python?",
            options: ["echo('Hello World')", "print('Hello World')", "p('Hello World')", "System.out.println('Hello World')"],
            correctAnswer: 1,
            explanation: "The print() function is the standard way to output text to the console in Python."
          },
          {
            question: "How do you start a comment in Python?",
            options: ["//", "/*", "#", "--"],
            correctAnswer: 2,
            explanation: "The hash symbol (#) is used for single-line comments."
          },
          {
            question: "Which of these is NOT a valid variable name?",
            options: ["_myvar", "my_var", "my-var", "myVar"],
            correctAnswer: 2,
            explanation: "Hyphens (-) are not allowed in variable names; underscores (_) are preferred."
          },
          {
            question: "What is the output of print(type(10))?",
            options: ["<class 'float'>", "<class 'str'>", "<class 'int'>", "<class 'bool'>"],
            correctAnswer: 2,
            explanation: "10 is a whole number, which belongs to the 'int' (integer) class."
          },
          {
            question: "How do you create a variable with the numeric value 5?",
            options: ["x = int(5)", "x = 5", "Both are correct", "None are correct"],
            correctAnswer: 2,
            explanation: "Python is dynamically typed, so x = 5 is sufficient, but int(5) also works."
          }
        ]
      },
      {
        id: 'practice-easy-1',
        title: 'Practice: Level 1 (Easy)',
        type: 'practice',
        practice: {
          title: "Variable Assignment",
          description: "Create a variable named 'power_level' and assign it the value 9001. Then print it.",
          initialCode: "# Assign value here\n\n# Print here",
          solution: "power_level = 9001\nprint(power_level)",
          hints: ["Use the = operator for assignment.", "The print() function takes the variable name as an argument."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-easy-2',
        title: 'Practice: Level 2 (Easy)',
        type: 'practice',
        practice: {
          title: "Basic Arithmetic",
          description: "Calculate the area of a rectangle with width 15 and height 20. Store the result in a variable 'area' and print it.",
          initialCode: "width = 15\nheight = 20\n# Calculate area\n\n# Print area",
          solution: "width = 15\nheight = 20\narea = width * height\nprint(area)",
          hints: ["Area = width multiplied by height.", "Use the * operator for multiplication."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-easy-3',
        title: 'Practice: Level 3 (Easy)',
        type: 'practice',
        practice: {
          title: "Hello World",
          description: "Print the string 'Hello World' to the console.",
          initialCode: "# Your code here",
          solution: "print('Hello World')",
          hints: ["Use the print() function.", "Strings must be enclosed in quotes."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-easy-4',
        title: 'Practice: Level 4 (Easy)',
        type: 'practice',
        practice: {
          title: "Variable Reassignment",
          description: "Assign the value 10 to a variable 'x'. Then, on the next line, reassign 'x' to be 20. Finally, print 'x'.",
          initialCode: "x = 10\n# Reassign x\n\n# Print x",
          solution: "x = 10\nx = 20\nprint(x)",
          hints: ["You can overwrite a variable's value by assigning to it again.", "The last value assigned is what will be stored."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-easy-5',
        title: 'Practice: Level 5 (Easy)',
        type: 'practice',
        practice: {
          title: "Basic Comments",
          description: "Add a comment saying 'This is a comment' and then print 'Python is fun'.",
          initialCode: "# Add comment here\n\n# Print here",
          solution: "# This is a comment\nprint('Python is fun')",
          hints: ["Comments start with the # symbol.", "Comments are ignored by the Python interpreter."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-medium-1',
        title: 'Practice: Level 6 (Medium)',
        type: 'practice',
        practice: {
          title: "String Concatenation",
          description: "Create two variables: 'first_name' with value 'Cyber' and 'last_name' with value 'Punk'. Combine them with a space in between and store in 'full_name'. Print 'full_name'.",
          initialCode: "first_name = 'Cyber'\nlast_name = 'Punk'\n# Combine here\n\n# Print here",
          solution: "first_name = 'Cyber'\nlast_name = 'Punk'\nfull_name = first_name + ' ' + last_name\nprint(full_name)",
          hints: ["Use the + operator to join strings.", "Don't forget the space string ' ' in the middle."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-medium-2',
        title: 'Practice: Level 7 (Medium)',
        type: 'practice',
        practice: {
          title: "The Modulo Operator",
          description: "Check if 127 is even or odd by finding its remainder when divided by 2. Store the remainder in a variable 'result' and print it.",
          initialCode: "number = 127\n# Find remainder\n\n# Print result",
          solution: "number = 127\nresult = number % 2\nprint(result)",
          hints: ["The % operator returns the remainder of a division.", "If result is 0, it's even. If 1, it's odd."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-medium-3',
        title: 'Practice: Level 8 (Medium)',
        type: 'practice',
        practice: {
          title: "Floor Division",
          description: "Divide 17 by 3 using floor division (//). Store the result in 'result' and print it.",
          initialCode: "# Calculate floor division\n\n# Print result",
          solution: "result = 17 // 3\nprint(result)",
          hints: ["The // operator returns the largest integer less than or equal to the division result.", "17 / 3 is 5.66, so floor division will be 5."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-medium-4',
        title: 'Practice: Level 9 (Medium)',
        type: 'practice',
        practice: {
          title: "String Multiplication",
          description: "Print the string 'Python' 5 times in a row using the multiplication operator (*).",
          initialCode: "# Your code here",
          solution: "print('Python' * 5)",
          hints: ["In Python, you can multiply a string by an integer.", "This will repeat the string that many times."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-medium-5',
        title: 'Practice: Level 10 (Medium)',
        type: 'practice',
        practice: {
          title: "Boolean Assignment",
          description: "Create a variable 'is_active' and set it to True. Then create another variable 'is_admin' and set it to False. Print both variables.",
          initialCode: "# Assign booleans\n\n# Print them",
          solution: "is_active = True\nis_admin = False\nprint(is_active, is_admin)",
          hints: ["Booleans must start with a capital letter (True, False).", "They represent logical values."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-hard-1',
        title: 'Practice: Level 11 (Hard)',
        type: 'practice',
        practice: {
          title: "Data Type Conversion",
          description: "You have a string '100' and an integer 50. Convert the string to an integer, add them together, and print the result.",
          initialCode: "str_val = '100'\nint_val = 50\n# Convert and add\n\n# Print result",
          solution: "str_val = '100'\nint_val = 50\nresult = int(str_val) + int_val\nprint(result)",
          hints: ["Use the int() function to convert a string to an integer.", "You cannot add a string and an integer directly."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-hard-2',
        title: 'Practice: Level 12 (Hard)',
        type: 'practice',
        practice: {
          title: "Exponentiation and Formatting",
          description: "Calculate 2 to the power of 10 (2^10) and store it in 'result'. Then, convert 'result' to a string and print it with the prefix 'Value: '.",
          initialCode: "# Calculate 2^10\n\n# Convert and print",
          solution: "result = 2 ** 10\nprint('Value: ' + str(result))",
          hints: ["Use ** for exponentiation.", "Use str() to convert a number back to text for concatenation."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-hard-3',
        title: 'Practice: Level 13 (Hard)',
        type: 'practice',
        practice: {
          title: "Float Rounding",
          description: "Divide 1 by 3 and store it in 'val'. Then print 'val' rounded to 2 decimal places using the round() function.",
          initialCode: "val = 1 / 3\n# Round and print",
          solution: "val = 1 / 3\nprint(round(val, 2))",
          hints: ["round(number, digits) is the syntax.", "1/3 will give a long decimal."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-hard-4',
        title: 'Practice: Level 14 (Hard)',
        type: 'practice',
        practice: {
          title: "Multi-line Strings",
          description: "Create a variable 'banner' using triple quotes (''' or \"\"\") that contains three lines of text. Print the 'banner'.",
          initialCode: "# Create multi-line string\n\n# Print",
          solution: "banner = '''Line 1\nLine 2\nLine 3'''\nprint(banner)",
          hints: ["Triple quotes allow strings to span multiple lines.", "Make sure to close the triple quotes."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-hard-5',
        title: 'Practice: Level 15 (Hard)',
        type: 'practice',
        practice: {
          title: "Complex PEMDAS Expression",
          description: "Solve this: (5 + 3) * 2 ** 3 / 4. Store in 'result' and print its data type using type().",
          initialCode: "# Calculate\n\n# Print type",
          solution: "result = (5 + 3) * 2 ** 3 / 4\nprint(type(result))",
          hints: ["Python follows PEMDAS order of operations.", "Division always returns a float in Python 3."],
          difficulty: 'hard'
        }
      }
    ]
  },
  {
    id: 'control-flow',
    title: 'Module 2: Logic Gates',
    description: 'Implement decision-making algorithms using conditionals and loops.',
    lessons: [
      {
        id: 'conditionals-notes',
        title: 'Logic Gates: Conditionals',
        type: 'notes',
        content: `
# Logic Gates: Conditionals

Conditionals allow your code to make decisions based on data. It's like a fork in the road.

### Real-Life Analogy: The ATM
When you withdraw money from an ATM:
1. **The Question:** "Is your balance enough?"
2. **If Yes:** Give money.
3. **If No:** Show "Insufficient Funds."

### The 'if' Statement
\`\`\`python
security_clearance = 5
if security_clearance >= 7:
    print("Access Granted")
else:
    print("Access Denied")
\`\`\`

### Elif (Else If)
Used to check multiple conditions in sequence.
\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
\`\`\`

### Real-World Example: Traffic Lights
\`\`\`python
light = "green"
if light == "red":
    print("Stop!")
elif light == "yellow":
    print("Slow down!")
else:
    print("Go!")
\`\`\`
        `
      },
      {
        id: 'if-else-mastery',
        title: 'The Decision Matrix',
        type: 'notes',
        content: `
# The Decision Matrix: If-Elif-Else

In Python, the \`if-elif-else\` chain is the primary way to handle branching logic.

### 1. Simple Decision
Use a single \`if\` when you only care if a condition is true.
- **Real-Life:** "If it's raining, take an umbrella."
\`\`\`python
is_raining = True
if is_raining:
    print("Take an umbrella!")
\`\`\`

### 2. Binary Choice
Use \`if-else\` when there are exactly two possibilities.
- **Real-Life:** "If you're 18, you can vote; otherwise, you can't."
\`\`\`python
age = 16
if age >= 18:
    print("You can vote.")
else:
    print("Too young to vote.")
\`\`\`

### 3. Multiple Pathways
Use \`elif\` for three or more distinct paths.
- **Real-Life:** "If the temperature is hot, wear shorts; if it's nice, wear a t-shirt; if it's cold, wear a coat."
\`\`\`python
temperature = 25

if temperature > 30:
    print("It's hot outside.")
elif temperature > 20:
    print("It's a nice day.")
elif temperature > 10:
    print("It's a bit chilly.")
else:
    print("It's cold!")
\`\`\`

### Key Rules
- **Indentation:** Everything inside the block must be indented (usually 4 spaces).
- **Colons:** Every \`if\`, \`elif\`, and \`else\` line must end with a colon (\`:\`).
- **Order Matters:** Python checks conditions from top to bottom. Once it finds a true one, it skips the rest of the chain.
        `
      },
      {
        id: 'control-flow-quiz',
        title: 'Logic Gate Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "Which keyword is used to check another condition if the first 'if' is false?",
            options: ["else if", "elif", "elseif", "other"],
            correctAnswer: 1,
            explanation: "Python uses 'elif' as a shorthand for 'else if'."
          },
          {
            question: "What is required at the end of an 'if' statement line?",
            options: [";", ".", ":", "{}"],
            correctAnswer: 2,
            explanation: "In Python, a colon (:) is required to start a new code block."
          },
          {
            question: "What happens if multiple 'elif' conditions are True?",
            options: ["All matching blocks execute", "Only the first matching block executes", "The last matching block executes", "An error occurs"],
            correctAnswer: 1,
            explanation: "Python executes the first block that evaluates to True and then exits the entire if-elif-else structure."
          }
        ]
      },
      {
        id: 'practice-cf-easy-1',
        title: 'Practice: Logic 1 (Easy)',
        type: 'practice',
        practice: {
          title: "Simple If",
          description: "Create a variable 'score' with value 85. If 'score' is greater than 70, print 'Passed'.",
          initialCode: "score = 85\n# Your code here",
          solution: "score = 85\nif score > 70:\n    print('Passed')",
          hints: ["Use the if statement.", "Don't forget the colon and indentation."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-cf-easy-2',
        title: 'Practice: Logic 2 (Easy)',
        type: 'practice',
        practice: {
          title: "If-Else Choice",
          description: "Create a variable 'is_logged_in' set to False. If it is True, print 'Welcome'. Otherwise, print 'Please Log In'.",
          initialCode: "is_logged_in = False\n# Your code here",
          solution: "is_logged_in = False\nif is_logged_in:\n    print('Welcome')\nelse:\n    print('Please Log In')",
          hints: ["Use if and else.", "Booleans can be used directly as conditions."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-cf-medium-1',
        title: 'Practice: Logic 3 (Medium)',
        type: 'practice',
        practice: {
          title: "Grade Calculator",
          description: "Create a variable 'marks' with value 75. If marks >= 90 print 'A', elif marks >= 70 print 'B', else print 'C'.",
          initialCode: "marks = 75\n# Your code here",
          solution: "marks = 75\nif marks >= 90:\n    print('A')\nelif marks >= 70:\n    print('B')\nelse:\n    print('C')",
          hints: ["Use if, elif, and else.", "Order of conditions is important."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-cf-medium-2',
        title: 'Practice: Logic 4 (Medium)',
        type: 'practice',
        practice: {
          title: "Even or Odd Logic",
          description: "Create a variable 'num' with value 10. If 'num' is even (num % 2 == 0), print 'Even'. Else print 'Odd'.",
          initialCode: "num = 10\n# Your code here",
          solution: "num = 10\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
          hints: ["Use the modulo operator % to check for evenness.", "A number is even if remainder when divided by 2 is 0."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-cf-hard-1',
        title: 'Practice: Logic 5 (Hard)',
        type: 'practice',
        practice: {
          title: "Nested Logic",
          description: "Create a variable 'age' = 20 and 'has_ticket' = True. If age >= 18, check if has_ticket is True. If both are true, print 'Entry Allowed'. Else print 'Entry Denied'.",
          initialCode: "age = 20\nhas_ticket = True\n# Your code here",
          solution: "age = 20\nhas_ticket = True\nif age >= 18:\n    if has_ticket:\n        print('Entry Allowed')\n    else:\n        print('Entry Denied')\nelse:\n    print('Entry Denied')",
          hints: ["You can put an if statement inside another if statement.", "This is called nesting."],
          difficulty: 'hard'
        }
      },
    ]
  },
  {
    id: 'data-structures',
    title: 'Module 3: Data Structures',
    description: 'Master the containers that hold and organize your data.',
    lessons: [
      {
        id: 'lists-notes',
        title: 'Lists: The Dynamic Array',
        type: 'notes',
        content: `
# Lists: Ordered & Mutable

Lists are the most versatile data structure in Python. They are ordered, changeable, and allow duplicate values.

### Real-Life Analogy: The Shopping List
Imagine you have a shopping list.
1. **Ordered:** You can add items in a specific order.
2. **Mutable:** You can cross items off or add new ones at any time.
3. **Duplicates:** You might need to buy "Apples" twice (for two different recipes).

### Creating a List
\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # Output: apple
\`\`\`

### Common Operations
- **Append:** Add to the end. \`fruits.append("orange")\`
- **Insert:** Add at index. \`fruits.insert(1, "mango")\`
- **Remove:** Delete by value. \`fruits.remove("banana")\`
- **Pop:** Delete by index. \`fruits.pop(0)\`
- **Slicing:** \`fruits[1:3]\`

### Real-World Example: Task Manager
A simple task manager stores your to-do items in a list.
\`\`\`python
tasks = ["Email Boss", "Buy Milk", "Fix Bug"]
tasks.append("Go to Gym")
print(tasks)
\`\`\`
        `
      },
      {
        id: 'tuples-notes',
        title: 'Tuples: The Immutable Record',
        type: 'notes',
        content: `
# Tuples: Ordered & Unchangeable

Tuples are used to store multiple items in a single variable. Unlike lists, they cannot be changed after creation (immutable).

### Real-Life Analogy: GPS Coordinates
Think of a location's latitude and longitude.
1. **Unchangeable:** Once you define the coordinates for the Eiffel Tower, they don't change.
2. **Safety:** You don't want someone accidentally changing the "North" coordinate to "South."

### Creating a Tuple
\`\`\`python
coordinates = (48.8584, 2.2945)
print(coordinates[1]) # Output: 2.2945
\`\`\`

### Why use Tuples?
- **Safety:** Data cannot be accidentally modified.
- **Performance:** Slightly faster than lists.
- **Keys:** Can be used as keys in dictionaries.
        `
      },
      {
        id: 'dicts-notes',
        title: 'Dictionaries: Key-Value Pairs',
        type: 'notes',
        content: `
# Dictionaries: Mapped Data

Dictionaries store data in \`key:value\` pairs. They are ordered (since Python 3.7), changeable, and do not allow duplicates.

### Real-Life Analogy: The Contact List
Think of your phone's contact list.
1. **Key:** The person's name (must be unique).
2. **Value:** Their phone number.
You look up a "Name" to get a "Number."

### Creating a Dictionary
\`\`\`python
user = {
    "name": "Alice",
    "age": 25,
    "is_pro": True
}
print(user["name"]) # Output: Alice
\`\`\`

### Operations
- **Add/Update:** \`user["email"] = "alice@example.com"\`
- **Get:** \`user.get("age")\`
- **Keys:** \`user.keys()\`
- **Values:** \`user.values()\`

### Real-World Example: Product Inventory
\`\`\`python
inventory = {"Apples": 50, "Bananas": 100, "Cherries": 200}
inventory["Apples"] -= 5 # Sold 5 apples
print(inventory)
\`\`\`
        `
      },
      {
        id: 'sets-notes',
        title: 'Sets: Unique Collections',
        type: 'notes',
        content: `
# Sets: Unordered & Unique

Sets are used to store multiple items in a single variable, but every item must be unique. They are unordered and unindexed.

### Real-Life Analogy: Social Media Tags
Think of hashtags on a post.
1. **Unique:** Even if you type #Python twice, the system only stores it once.
2. **Unordered:** The order doesn't matter; they are just a collection of tags.

### Creating a Set
\`\`\`python
numbers = {1, 2, 3, 3, 4}
print(numbers) # Output: {1, 2, 3, 4}
\`\`\`

### Operations
- **Add:** \`numbers.add(5)\`
- **Remove:** \`numbers.remove(2)\`
- **Intersection:** \`set1 & set2\` (Find common items)
- **Union:** \`set1 | set2\` (Combine all unique items)

### Real-World Example: Unique Visitors
\`\`\`python
visitors = {"user1", "user2", "user1", "user3"}
print(f"Unique visitors today: {len(visitors)}")
\`\`\`
        `
      },
      {
        id: 'ds-quiz',
        title: 'Data Structure Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "Which data structure is immutable (cannot be changed)?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            correctAnswer: 2,
            explanation: "Tuples are immutable, meaning their elements cannot be modified after creation."
          },
          {
            question: "How do you add an element to the end of a list?",
            options: [".add()", ".append()", ".insert()", ".push()"],
            correctAnswer: 1,
            explanation: "The .append() method adds an item to the end of a list."
          },
          {
            question: "Which data structure uses key-value pairs?",
            options: ["List", "Set", "Tuple", "Dictionary"],
            correctAnswer: 3,
            explanation: "Dictionaries map unique keys to values."
          }
        ]
      },
      {
        id: 'practice-ds-easy-1',
        title: 'Practice: Data 1 (Easy)',
        type: 'practice',
        practice: {
          title: "List Basics",
          description: "Create a list named 'colors' with 'red', 'green', and 'blue'. Add 'yellow' to the end and print the list.",
          initialCode: "# Create list\n\n# Append yellow\n\n# Print",
          solution: "colors = ['red', 'green', 'blue']\ncolors.append('yellow')\nprint(colors)",
          hints: ["Use square brackets [] for lists.", "Use .append() to add to the end."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-ds-easy-2',
        title: 'Practice: Data 2 (Easy)',
        type: 'practice',
        practice: {
          title: "Tuple Creation",
          description: "Create a tuple named 'point' with values 5 and 10. Print the second element of the tuple.",
          initialCode: "# Create tuple\n\n# Print second element",
          solution: "point = (5, 10)\nprint(point[1])",
          hints: ["Use parentheses () for tuples.", "Indexing starts at 0."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-ds-easy-3',
        title: 'Practice: Data 3 (Easy)',
        type: 'practice',
        practice: {
          title: "List Indexing",
          description: "Given the list x = [10, 20, 30, 40], change the third element (30) to 35 and print the list.",
          initialCode: "x = [10, 20, 30, 40]\n# Change 30 to 35\n\n# Print",
          solution: "x = [10, 20, 30, 40]\nx[2] = 35\nprint(x)",
          hints: ["The third element is at index 2.", "Lists are mutable."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-ds-easy-4',
        title: 'Practice: Data 4 (Easy)',
        type: 'practice',
        practice: {
          title: "Set Addition",
          description: "Create a set named 'tags' with 'python' and 'coding'. Add 'ai' to the set and print it.",
          initialCode: "tags = {'python', 'coding'}\n# Add 'ai'\n\n# Print",
          solution: "tags = {'python', 'coding'}\ntags.add('ai')\nprint(tags)",
          hints: ["Use the .add() method for sets.", "Sets use curly braces {}."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-ds-easy-5',
        title: 'Practice: Data 5 (Easy)',
        type: 'practice',
        practice: {
          title: "Dictionary Length",
          description: "Create a dictionary 'd' with 'a': 1 and 'b': 2. Print the number of items in the dictionary using len().",
          initialCode: "d = {'a': 1, 'b': 2}\n# Print length",
          solution: "d = {'a': 1, 'b': 2}\nprint(len(d))",
          hints: ["The len() function works on dictionaries too.", "It returns the number of key-value pairs."],
          difficulty: 'easy'
        }
      },
      {
        id: 'practice-ds-medium-1',
        title: 'Practice: Data 6 (Medium)',
        type: 'practice',
        practice: {
          title: "Dictionary Access",
          description: "Create a dictionary 'car' with keys 'brand' (Ford) and 'year' (1964). Update the year to 2020 and print the dictionary.",
          initialCode: "car = {\n    'brand': 'Ford',\n    'year': 1964\n}\n# Update year\n\n# Print",
          solution: "car = {'brand': 'Ford', 'year': 1964}\ncar['year'] = 2020\nprint(car)",
          hints: ["Access values using car['key'].", "You can reassign values just like variables."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-ds-medium-2',
        title: 'Practice: Data 7 (Medium)',
        type: 'practice',
        practice: {
          title: "List Slicing",
          description: "Given the list nums = [0, 1, 2, 3, 4, 5], print a slice containing the elements from index 1 to 4 (inclusive of 1, exclusive of 4).",
          initialCode: "nums = [0, 1, 2, 3, 4, 5]\n# Slice and print",
          solution: "nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])",
          hints: ["Use the [start:stop] syntax.", "Stop index is exclusive."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-ds-medium-3',
        title: 'Practice: Data 8 (Medium)',
        type: 'practice',
        practice: {
          title: "Set Union",
          description: "Create two sets: a = {1, 2} and b = {2, 3}. Print their union (all unique elements from both).",
          initialCode: "a = {1, 2}\nb = {2, 3}\n# Union and print",
          solution: "a = {1, 2}\nb = {2, 3}\nprint(a.union(b))",
          hints: ["Use a.union(b) or the | operator.", "Result should be {1, 2, 3}."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-ds-medium-4',
        title: 'Practice: Data 9 (Medium)',
        type: 'practice',
        practice: {
          title: "List Sorting",
          description: "Given the list vals = [5, 2, 9, 1], sort it in ascending order and print the result.",
          initialCode: "vals = [5, 2, 9, 1]\n# Sort\n\n# Print",
          solution: "vals = [5, 2, 9, 1]\nvals.sort()\nprint(vals)",
          hints: ["Use the .sort() method.", "It modifies the list in place."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-ds-medium-5',
        title: 'Practice: Data 10 (Medium)',
        type: 'practice',
        practice: {
          title: "Dictionary Keys",
          description: "Create a dictionary 'info' with 'name': 'Bob' and 'age': 30. Print all the keys of the dictionary.",
          initialCode: "info = {'name': 'Bob', 'age': 30}\n# Print keys",
          solution: "info = {'name': 'Bob', 'age': 30}\nprint(info.keys())",
          hints: ["Use the .keys() method.", "It returns a view object of all keys."],
          difficulty: 'medium'
        }
      },
      {
        id: 'practice-ds-hard-1',
        title: 'Practice: Data 11 (Hard)',
        type: 'practice',
        practice: {
          title: "Set Operations",
          description: "Create two sets: s1 = {1, 2, 3} and s2 = {3, 4, 5}. Print their intersection (common elements).",
          initialCode: "s1 = {1, 2, 3}\ns2 = {3, 4, 5}\n# Find intersection\n\n# Print",
          solution: "s1 = {1, 2, 3}\ns2 = {3, 4, 5}\nprint(s1.intersection(s2))",
          hints: ["Use s1.intersection(s2) or the & operator.", "Sets only store unique values."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-ds-hard-2',
        title: 'Practice: Data 12 (Hard)',
        type: 'practice',
        practice: {
          title: "Nested Lists",
          description: "Create a list 'matrix' containing two lists: [1, 2] and [3, 4]. Print the number 4 from this matrix.",
          initialCode: "# Create matrix\n\n# Print 4",
          solution: "matrix = [[1, 2], [3, 4]]\nprint(matrix[1][1])",
          hints: ["Access the second list first, then the second element of that list.", "Use double indexing like matrix[i][j]."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-ds-hard-3',
        title: 'Practice: Data 13 (Hard)',
        type: 'practice',
        practice: {
          title: "Dictionary Merging",
          description: "Given d1 = {'a': 1} and d2 = {'b': 2}, merge d2 into d1 and print d1.",
          initialCode: "d1 = {'a': 1}\nd2 = {'b': 2}\n# Merge d2 into d1\n\n# Print d1",
          solution: "d1 = {'a': 1}\nd2 = {'b': 2}\nd1.update(d2)\nprint(d1)",
          hints: ["Use the .update() method.", "It adds key-value pairs from another dictionary."],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-ds-hard-4',
        title: 'Practice: Data 14 (Hard)',
        type: 'practice',
        practice: {
          title: "Tuple Unpacking",
          description: "Given the tuple t = (100, 200), unpack its values into variables 'x' and 'y', then print x + y.",
          initialCode: "t = (100, 200)\n# Unpack\n\n# Print sum",
          solution: "t = (100, 200)\nx, y = t\nprint(x + y)",
          hints: ["You can assign a tuple to multiple variables at once.", "x, y = (1, 2)"],
          difficulty: 'hard'
        }
      },
      {
        id: 'practice-ds-hard-5',
        title: 'Practice: Data 15 (Hard)',
        type: 'practice',
        practice: {
          title: "Set Difference",
          description: "Given sets s1 = {1, 2, 3, 4} and s2 = {3, 4, 5, 6}, print the elements that are in s1 but NOT in s2.",
          initialCode: "s1 = {1, 2, 3, 4}\ns2 = {3, 4, 5, 6}\n# Find difference\n\n# Print",
          solution: "s1 = {1, 2, 3, 4}\ns2 = {3, 4, 5, 6}\nprint(s1.difference(s2))",
          hints: ["Use s1.difference(s2) or the - operator.", "This returns elements unique to the first set."],
          difficulty: 'hard'
        }
      }
    ]
  },
  {
    id: 'loops',
    title: 'Module 4: Iteration Engines',
    description: 'Automate repetitive tasks using For and While loops.',
    lessons: [
      {
        id: 'for-loops-notes',
        title: 'For Loops: The Sequential Engine',
        type: 'notes',
        content: `
# For Loops: Iterating Over Sequences

A \`for\` loop is used for iterating over a sequence (list, tuple, dictionary, set, or string).

### Real-Life Analogy: The Assembly Line
Imagine an assembly line where each item comes to you one by one. You perform the same action on every item until the line is empty.

### Basic Syntax
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
\`\`\`

### The range() Function
To loop through a set of code a specified number of times, we can use the \`range()\` function.
\`\`\`python
for i in range(6):
    print(i) # Prints 0 to 5
\`\`\`

### Real-World Example: Sending Bulk Emails
\`\`\`python
customers = ["Alice", "Bob", "Charlie"]
for name in customers:
    print(f"Sending email to {name}...")
\`\`\`
        `
      },
      {
        id: 'while-loops-notes',
        title: 'While Loops: The Conditional Engine',
        type: 'notes',
        content: `
# While Loops: Loop Until False

A \`while\` loop executes a set of statements as long as a condition is true.

### Real-Life Analogy: The Thermostat
A thermostat keeps the heater on **while** the temperature is below 20 degrees. Once it hits 20, it stops.

### Basic Syntax
\`\`\`python
i = 1
while i < 6:
    print(i)
    i += 1 # Crucial: increment to avoid infinite loop!
\`\`\`

### Break and Continue
- **Break:** Stops the loop entirely.
- **Continue:** Skips the current iteration and moves to the next.

### Real-World Example: Login Retries
\`\`\`python
attempts = 0
while attempts < 3:
    password = input("Enter password: ")
    if password == "secret":
        print("Access Granted")
        break
    attempts += 1
    print(f"Wrong password. {3 - attempts} attempts left.")
\`\`\`
        `
      },
      {
        id: 'loops-quiz',
        title: 'Iteration Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "Which loop is best when you know exactly how many times to iterate?",
            options: ["While loop", "For loop", "Infinite loop", "Nested loop"],
            correctAnswer: 1,
            explanation: "For loops are ideal for iterating over a known sequence or range."
          },
          {
            question: "What keyword is used to stop a loop immediately?",
            options: ["stop", "exit", "break", "end"],
            correctAnswer: 2,
            explanation: "The 'break' statement terminates the loop it is currently in."
          },
          {
            question: "What will range(3) produce?",
            options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"],
            correctAnswer: 1,
            explanation: "range(n) starts at 0 and goes up to, but not including, n."
          }
        ]
      }
    ]
  },
  {
    id: 'functions',
    title: 'Module 5: Functional Modules',
    description: 'Encapsulate logic into reusable blocks with functions.',
    lessons: [
      {
        id: 'functions-notes',
        title: 'Defining Functions',
        type: 'notes',
        content: `
# Functions: Reusable Logic

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.

### Real-Life Analogy: The Coffee Machine
You press a button (call the function), maybe you provide a bean type (parameter), and it gives you coffee (return value). You don't need to know how the machine works inside every time you want a drink.

### Basic Syntax
\`\`\`python
def my_function(name):
    print("Hello " + name)

my_function("Agent") # Calling the function
\`\`\`

### Return Values
To let a function return a value, use the \`return\` statement.
\`\`\`python
def add(x, y):
    return x + y

result = add(5, 10)
print(result) # Output: 15
\`\`\`

### Real-World Example: Tax Calculator
\`\`\`python
def calculate_tax(price, rate=0.05):
    return price * rate

total_tax = calculate_tax(100)
print(f"Tax: \${total_tax}")
\`\`\`
        `
      },
      {
        id: 'functions-quiz',
        title: 'Functional Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "Which keyword is used to create a function?",
            options: ["function", "def", "func", "define"],
            correctAnswer: 1,
            explanation: "In Python, 'def' is used to define a function."
          },
          {
            question: "What is the data passed into a function called?",
            options: ["Arguments", "Variables", "Inputs", "Data"],
            correctAnswer: 0,
            explanation: "Information can be passed into functions as arguments (or parameters)."
          },
          {
            question: "How do you get a value back from a function?",
            options: ["get", "output", "return", "send"],
            correctAnswer: 2,
            explanation: "The 'return' statement is used to exit a function and go back to the place where it was called, optionally with a value."
          }
        ]
      }
    ]
  },
  {
    id: 'oop',
    title: 'Module 6: Object Architectures',
    description: 'Master Object-Oriented Programming (OOP) for complex systems.',
    lessons: [
      {
        id: 'oop-basics-notes',
        title: 'Classes and Objects',
        type: 'notes',
        content: `
# OOP: Classes and Objects

Object-Oriented Programming is a way of organizing code into "objects" that contain data and functions.

### Real-Life Analogy: The Blueprint
A **Class** is like a blueprint for a house. An **Object** is the actual house built from that blueprint. You can build many houses (objects) from one blueprint (class).

### Basic Syntax
\`\`\`python
class Robot:
    def __init__(self, name, model):
        self.name = name
        self.model = model

    def greet(self):
        print(f"Hello, I am {self.name}, model {self.model}.")

# Creating an object
bot1 = Robot("R2-D2", "Astromech")
bot1.greet()
\`\`\`

### The __init__ Method
This is a special method that runs automatically when a new object is created. It's used to "initialize" the object's properties.

### Real-World Example: Game Character
\`\`\`python
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100
    
    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage. Health: {self.health}")

p1 = Player("CyberKnight")
p1.take_damage(20)
\`\`\`
        `
      },
      {
        id: 'oop-quiz',
        title: 'Architectural Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "What is a 'blueprint' for creating objects called?",
            options: ["Instance", "Method", "Class", "Object"],
            correctAnswer: 2,
            explanation: "A class is the blueprint or template from which objects are created."
          },
          {
            question: "Which method is called automatically when an object is created?",
            options: ["__start__", "__init__", "__new__", "__create__"],
            correctAnswer: 1,
            explanation: "The __init__ method is the constructor in Python classes."
          },
          {
            question: "What does 'self' represent in a class method?",
            options: ["The class itself", "The current object instance", "A global variable", "The parent class"],
            correctAnswer: 1,
            explanation: "'self' refers to the specific instance of the object that is calling the method."
          }
        ]
      }
    ]
  },
  {
    id: 'error-handling',
    title: 'Module 7: System Resilience',
    description: 'Handle errors gracefully and interact with the file system.',
    lessons: [
      {
        id: 'exceptions-notes',
        title: 'Error Handling (Try/Except)',
        type: 'notes',
        content: `
# Exceptions: Try and Except

Errors happen. Resilience is about handling them without crashing the entire system.

### Real-Life Analogy: The Safety Net
Imagine a trapeze artist. The **Try** block is the performance. The **Except** block is the safety net that catches them if they fall.

### Basic Syntax
\`\`\`python
try:
    number = int(input("Enter a number: "))
    print(10 / number)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("You can't divide by zero!")
finally:
    print("Operation complete.")
\`\`\`

### Why use it?
- **User Experience:** Show friendly messages instead of scary error codes.
- **Stability:** Keep the program running even if one part fails.
        `
      },
      {
        id: 'file-io-notes',
        title: 'File Operations',
        type: 'notes',
        content: `
# File I/O: Reading and Writing

Interacting with files allows your program to save data permanently.

### Real-Life Analogy: The Filing Cabinet
Reading a file is like taking a folder out of a cabinet to look at it. Writing is like putting a new document into a folder.

### Basic Syntax (Writing)
\`\`\`python
with open("log.txt", "w") as f:
    f.write("System Log: All systems nominal.")
\`\`\`

### Basic Syntax (Reading)
\`\`\`python
with open("log.txt", "r") as f:
    content = f.read()
    print(content)
\`\`\`

### The 'with' Keyword
Using \`with\` ensures that the file is automatically closed after you're done, even if an error occurs.
        `
      },
      {
        id: 'resilience-quiz',
        title: 'Resilience Diagnostic',
        type: 'quiz',
        quiz: [
          {
            question: "Which block of code runs regardless of whether an error occurred?",
            options: ["try", "except", "finally", "else"],
            correctAnswer: 2,
            explanation: "The 'finally' block always executes, making it ideal for cleanup tasks like closing files."
          },
          {
            question: "What mode is used to 'append' data to an existing file?",
            options: ["'r'", "'w'", "'a'", "'x'"],
            correctAnswer: 2,
            explanation: "'a' stands for append mode, which adds data to the end of the file without overwriting it."
          },
          {
            question: "What is the benefit of using the 'with' statement for files?",
            options: ["It makes the code faster", "It automatically closes the file", "It encrypts the file", "It creates the file if it doesn't exist"],
            correctAnswer: 1,
            explanation: "The 'with' statement (context manager) ensures proper resource management by closing the file automatically."
          }
        ]
      }
    ]
  }
];
