---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-12-08T10:53:14.000
---

# Code Evolution Steps

#self/todo/to-expand

Clipped from: https://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html

    • ({}–>nil) no code at all->code that employs nil
    • (nil->constant)
    • (constant->constant+) a simple constant to a more complex constant
    • (constant->scalar) replacing a constant with a variable or an argument
    • (statement->statements) adding more unconditional statements.
    • (unconditional->if) splitting the execution path
    • (scalar->array)
    • (array->container)
    • (statement->recursion)
    • (if->while)
    • (expression->function) replacing an expression with a function or algorithm
    • (variable->assignment) replacing the value of a variable.

“As the tests get more specific, the code gets more generic.”
