Manipulating the DOM with link
=======
**A Complex Example**
```javascript

function ShoppingListDirectiveLink(scope, element, attrs, controller) {
  scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
    console.log("Old value: ", oldValue);
    console.log("New value: ", newValue);

    if (newValue === true) {
      displayCookieWarning();
    }
    else {
      removeCookieWarning();
    }

  });
  function displayCookieWarning() {
    var warningElem = element.find("div.error");
    warningElem.slideDown(900);
  }
  function removeCookieWarning() {
    var warningElem = element.find("div.error");
    warningElem.slideUp(900);
  }
}
```
`scope` $scope--the scope of ShoppingListDirectiveController, to be used by the directive for registering watches.

`element` The element of the DOM where the directive is to be used.

`attrs` Normalized list of attributes declared on this element shared between all directive linking functions.

`controller` ShoppingListDirectiveController

in order to use jQuery to manipulate the `element`, we need to declare jQuery source file in front of `Angular.min.js` declaration.
