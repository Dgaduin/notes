# Powershell ErrorView

#self/todo/pin

Clipped from: https://devblogs.microsoft.com/powershell/powershell-7-preview-5/
The $ErrorView preference variable allows you to change the formatting of errors. Previously, it supported NormalView (the default) as well as a more terse CategoryView. This feature adds a ConciseView where most commands return just the relevant error message. In cases where there is additional contextual information in a script file or the location in a script block, you get the line number, the line of text in question, and a pointer to where the error occurred.
This new view is part of the Update Error View RFC so please provide feedback there!
