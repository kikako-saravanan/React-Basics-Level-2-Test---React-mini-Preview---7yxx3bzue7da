# Preview

As a developer working on Frontend part of the website,
we normally open chrome dev tool and make changes in css and see them live.

Lets build a lite version of this.

We have a predefined component <code>Preview</code> which takes 3 props,
<code>content</code>,<code>fontSize</code>,<code>padding</code>.
This component is complete, we don't  need too change it.

Create div inside #main div inside <code>App</code> component,inside it
what we need to add is 3 inputs.

One input of type text with id="contentInput" and other two of type 'number'
with ids "fontSizeInput" and "paddingInput" respectively.

input#contentInput will have value of "hello world" by default and hence the same will be passed in <code>Preview</code> component.
input#fontSizeInput will have default value of 10 and input#paddingInput will have default value of 5.

Note:- All of the above 3 inputs, value will be passed as props to <code>Preview</code> component and add 'px' to value wherever necessary.

After these 3 inputs are defined, add the <code>Preview</code> after the div containing inputs.
