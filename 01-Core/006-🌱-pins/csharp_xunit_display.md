---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:10:07.000
---

# [Pretty Method Display in xUnit.net](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet)

#self/todo/pin
16 APRIL 2020[(0)](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#comment)

One little-known feature of the [xUnit.net](https://dontcodetired.com/blog/?tag=xunit.net) testing framework is the ability to write test method names in a specific way and then have them converted to a ‘pretty’ version for example in Visual Studio Test Explorer.

Take the following test method:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4<br><br>5<br><br>6<br><br>7<br><br>8<br><br>9<br><br>10<br><br>11<br><br>12<br><br>13<br><br>14<br><br>15<br><br>16<br><br>17<br><br>18<br><br>19 | `using` `ClassLibrary1;`<br><br>`using` `Xunit;`<br><br>`namespace` `XUnitTestProject2`<br><br>`{`<br><br> `public` `class` `CalculatorShould`<br><br> `{`<br><br> `[Fact]`<br><br> `public` `void` `Add2PositiveNumbers()`<br><br> `{`<br><br> `var` `sut =` `new` `Calculator();`<br><br> `sut.Add(1);`<br><br> `sut.Add(1);`<br><br> `Assert.Equal(2, sut.Value);`<br><br> `}`<br><br> `}`<br><br>`}` |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

By default, this will look like the following screenshot in Visual Studio Test Explorer:

![Default xUnit.net Test Method Name Display](https://dontcodetired.com/blog/image.axd?picture=image_200.png "Default xUnit.net Test Method Name Display")

The first thing that can be modified to to simplify the test method name display to only display the test method name and not the preceding namespace and class name, for example “XUnitTestProject2.CalculatorShould.Add2PositiveNumbers” becomes more simply “Add2PositiveNumbers” by making a simple configuration change.

# Displaying Only Test Method Names in xUnit.net Tests

To control the rendering of method names in xUnit.net, the first thing to do is add a new file called “xunit.runner.json” to the root of the test project and set the **Copy To Output Directory** property to **Copy if newer**. This will make this file copy to the output bin directory. Once this is done, if you open the project file you should see something like:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4<br><br>5 | `<``ItemGroup``>`<br><br> `<``None` `Update``=``"xunit.runner.json"``>`<br><br> `<``CopyToOutputDirectory``>PreserveNewest</``CopyToOutputDirectory``>`<br><br> `</``None``>`<br><br>`</``ItemGroup``>` |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Next, modify the json file to the following:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4 | `{`<br><br> `"$schema"``:` `"https://xunit.net/schema/current/xunit.runner.schema.json"``,`<br><br> `"methodDisplay"``:` `"method"`<br><br>`}` |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |

Notice in the preceding json configuration the **methodDisplay** has been set to “method”, this will prevent the namespace and class being prepended to the method name in Test Explorer.

Now if you head back to Test Explorer you should see the following:

![Method name only display in xUnit.net tests](https://dontcodetired.com/blog/image.axd?picture=image_201.png "Method name only display in xUnit.net tests")

# Enabling Pretty Method Names in xUnit.net

In addition to shortening test method name display we can also make use of xUnit.net’s “pretty method display”.

To enable this feature, modify the json configuration file and add the **"methodDisplayOptions": "all"** configuration as follows:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4<br><br>5 | `{`<br><br> `"$schema"``:` `"https://xunit.net/schema/current/xunit.runner.schema.json"``,`<br><br> `"methodDisplay"``:` `"method"``,`<br><br> `"methodDisplayOptions"``:` `"all"`<br><br>`}` |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Now the previous test can be renamed to “Add_2_positive_numbers” as follows:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4<br><br>5<br><br>6<br><br>7<br><br>8<br><br>9<br><br>10 | `[Fact]`<br><br>`public` `void` `Add_2_positive_numbers()`<br><br>`{`<br><br> `var` `sut =` `new` `Calculator();`<br><br> `sut.Add(1);`<br><br> `sut.Add(1);`<br><br> `Assert.Equal(2, sut.Value);`<br><br>`}` |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

In test explorer this test method will show up as “Add 2 positive numbers” as the following screenshot shows:

![xUnit.net pretty method display names](https://dontcodetired.com/blog/image.axd?picture=image_202.png "xUnit.net pretty method display names")

You can use other items in the test method name, for example you can use the monikers eq, ne, lt, le, gt, ge that get replaced with =, !=, <, <=, >, >= respectively, for example a test name of “Have_a_value_eq_0_when_multiplied_by_zero” would be displayed as “Have a value = 0 when multiplied by zero”. Here the **eq** has been replaced with **=**.

You can also use ASCII or Unicode escape sequences, for example the test name “Divide_by_U00BD” gets displayed as “Divide by ½” and the test “Email_address_should_only_contain_a_single_U0040” gets displayed as “Email address should only contain a single @”, or “The_U2211_of_1U002C_2_and_3_should_be_6” becomes “The ∑ of 1, 2 and 3 should be 6”:

![xUnit Pretty methods](https://dontcodetired.com/blog/image.axd?picture=image_203.png "xUnit Pretty methods")

You could also combine the **"methodDisplay": "classAndMethod"** to create something like  and the following:

[?](https://dontcodetired.com/blog/post/Pretty-Method-Display-in-xUnitnet#)

| 1<br><br>2<br><br>3<br><br>4<br><br>5<br><br>6<br><br>7<br><br>8<br><br>9<br><br>10<br><br>11<br><br>12<br><br>13<br><br>14<br><br>15<br><br>16<br><br>17 | `namespace` `Given_a_cleared_calculator`<br><br>`{`<br><br> `public` `class` `when_a_number_gt_0_is_added`<br><br> `{`<br><br> `[Fact]`<br><br> `public` `void` `then_the_value_should_be_gt_0()`<br><br> `{`<br><br> `// etc.`<br><br> `}`<br><br> `[Fact]`<br><br> `public` `void` `then_the_value_should_eq_the_one_added()`<br><br> `{`<br><br> `// etc.`<br><br> `}`<br><br> `}`<br><br>`}` |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

This would produce the following tests in Test Explorer:

![xUnit.net Pretty Display Names](https://dontcodetired.com/blog/image.axd?picture=image_204.png "xUnit.net Pretty Display Names")

`IStartupFilter` e.g. run options validation[Adding validation to strongly typed configuration objects in [[../001-⚙-tech/aspcore_framework|ASP.NET Core]]](https://andrewlock.net/adding-validation-to-strongly-typed-configuration-objects-in-asp-net-core/)
