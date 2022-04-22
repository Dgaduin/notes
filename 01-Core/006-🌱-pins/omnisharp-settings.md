---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:28:37.000
---

# Omnisharp-settings

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

#self/todo/pin
