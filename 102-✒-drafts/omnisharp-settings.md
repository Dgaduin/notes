file is called omnisharp.json

global settings %USERPROFILE%/.omnisharp/omnisharp.json
projects specific - next to csproj/sln file

```json
{
  "RoslynExtensionsOptions": {
    "enableAnalyzersSupport": true
  },
  "FormattingOptions": {
    "enableEditorConfigSupport": true
  },
  "RenameOptions": {
    "RenameInComments": true,
    "RenameOverloads": true,
    "RenameInStrings": true
  },
  "FormattingOptions": {
    "OrganizeImports": true
  },
  "ImplementTypeOptions": {
    "PropertyGenerationBehavior": "PreferAutoProperties|PreferThrowingProperties",
    "InsertionBehavior": "AtTheEnd|WithOtherMembersOfTheSameKind"
  }
}
```
