Manipulating the DOM with Directive
=======
**use Directive to wrap element**
```html
<!-- directive template -->
<h3>Title: {{ list.myTitle }}</h3>
<ol>
  <li ng-repeat="item in list.items">
    {{ item.quantity }} of {{ item.name }}
    <button ng-click="list.onRemove({index: $index});">Remove Item</button>
  </li>
</ol>
<div class="error" ng-transclude></div>
```
`ng-transclude` extract the contents of the element where the directive appears and make it available to the directive. The contents are compiled and provided to the directive as a transclusion function.
