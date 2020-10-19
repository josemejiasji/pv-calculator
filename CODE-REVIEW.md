- line 1: index.html is wrong formatted: it is missing html, head, and body tags.
- line 1: you could move css and js to its own files
- line 8: button elements all share the same id, element id should be unique
- line 47: inside the style tag, the calculator is using nested styles, this is not supported in native css, you need to implement a css preprocessor
- line 101: you should declare each one variable per line. 
- line 104: what does nums mean? avoid using abbreviations, use a more meaninful name like numbers or numberButtons
- line 104: what does ops mean? avoid using abbreviations, use a more meaninful name like operators or operatorButtons
- line 104: is not a good practice naming variables with articles, you could use the name in you comment, like currentNumber
- line 104: what does old mean in this case? it looks like you are using this variable as a store for previous numbers, you could rename it to storedNumber or previousNumber
- line 107: you should be consistent and declare all variables with a default value.
- line 108: are you sure operator variable has anything to do with Batman? also be consistent and declare a default value
- line 114: you could access data-num using dataset instead of getProperty, like this.dataset.num
- line 118: you could access data-num using dataset instead of getProperty, like this.dataset.num
- line 128: you could access data-num using dataset instead of getProperty, like this.dataset.num
- line 130: you could assign data-result using dataset instead of setProperty, like this.dataset.result = '';
- line 134: displayNum has multiple responsabilities, consider splitting this method in several ones, one for each responsability (formatting numbers, perform operation, error handling and displayin the result)
- line 162: why not assigning this selector to a variable? be consistent
- line 168: you could assign data-result using dataset instead of setProperty, like this.dataset.result = '';
- line 180: you could assign data-result using dataset instead of setProperty, like this.dataset.result = '';
- line 186: replace for loop with forEach
- line 187: avoid inline event listener, you can replace it with addEventListener
- line 191: replace for loop with forEach
- line 199: why not assigning this selector to a variable? be consistent


## Note:

I would also recommend updating the code to use ES6+ features but it would depend on the browser you need to support. I assume you need to support old browsers so you sticked to the most supported syntax and you are not transpiling and optimizing your code.