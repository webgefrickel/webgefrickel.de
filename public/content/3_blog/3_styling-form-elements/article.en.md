Title: Styling form elements

----

Date: 2015-06-15

----

Intro: Let's be honest: styling form elements is a pain in the ass.  There are always designers who really really want their custom checkboxes and dropdowns. If you are reading this article, you know how hard this can be.  Here is how I deal with this problem.

----

Text: 

I often debate with designers and UX-people on the topic of custom styled form elements.  While I totally get their point of view that everything has to look consistent, regarding forms I think it is better to leave it at the defaults.  The user already knows how a dropdown looks and behaves, because he uses it on a daily basis in his operating system.  Why create something new and unfamiliar, just because? 

»But it is ugly as fuck!« — Well, forms *are* ugly and tedious.  I know nobody who likes filling out forms on the internet.  Or in real life for that matter ;)

There was [quite some](http://www.aaron-gustafson.com/notebook/native-vs-stylable-tug-of-war/) [debate on this topic](http://www.brucelawson.co.uk/2014/native-experience-vs-styling-select-boxes/), but to be honest: I don't care anymore.  If the customer wants nice dropdowns and checkboxes, and is willing to pay for it: fine.  As long as the tools used don't break accessibility and work in a sense of progressive enhancement.

While there are a tons of JavaScript libraries like [Chosen](https://harvesthq.github.io/chosen) or [Bootstrap-select](http://silviomoreto.github.io/bootstrap-select) trying to help you with those issues, you often don't need them.  Normal text-input fields (like text, email or textarea) often just require some border and padding, nothing special about that.  But even for the two most annoying use cases: checkboxes and dropdowns, some clever HTML and CSS is everything you need.

## Styling checkboxes and radio buttons

Now let's jump into the details.  First let's markup a simple checkbox with a label.

```html
<p>
  <input class="checkbox-input" name="checkycheck" id="some-checkbox" value="1" type="checkbox" />
  <label class="checkbox-label" for="some-checkbox">
    <strong>Some text</strong><br />
    With some more text to describe what will happen
  </label>
</p>
```
With no CSS our element would look like this:

(image: checkbox-naked.png alt: Unstyled checkbox, default state)

Aaaw. Progressive enhancement in its purest form :)  
But that's not what we want, so let's throw in some CSS:

```css
.checkbox-input {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
}

.checkbox-label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.checkbox-label:before {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: url('checkbox.png') no-repeat;
}

.checkbox-input:checked + .checkbox-label:before {
  background-image: url('checkbox--checked.png');
}

```

The idea here is: we just hide the input-element, but leave it avaiable for screenreaders with a nice snippet from the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L124).  What we have left is just the label, but that is OK, since clicking on a label toggles the checked-state on the related input-element if the elements have the correct attributes `for` and `id` (as seen above).  
To mimic the checkbox, we create a pseudo-element `.checkbox-label:before`, and give it a background-image and position it inside the label.  The label itself gets a padding to the left and `position: relative`, so that the pseudo-element will position correctly.  When now somebody clicks on the label, the checkbox will be checked, and we then use the `:checked` selector in combination with the adjacent sibling combinator `+` to change the background-image for the label after the now-active checkbox.  
We could even do this without using a pseudo-element and apply the background-image directly to the label, but I love the flexibility of this approach, and if we are using sprites and/or SVGs it is way easier to do so with pseudo-elements.  This of course works with `<input type="radio" />` in the same way.

And with some additional styles and colors it can easily, without JavaScript, look like this:

(image: checkboxes.png alt: Styled checkboxes, default state and checked)

## Styling select-dropdowns

The markup:

```html
<p>
  <label for="chooser">Choose it</label>
  <div class="fake-select">
    <select class="fake-select__select" id="chooser" name="choosychoose">
      <option value="">Choose</option>
      <option value="1">wisely you must</option>
      <option value="2">young padawan</option>
    </select>
  </div>
</p>
```

The CSS:
```css
.fake-select {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: white; /* form background */
  border: 1px solid blue; /* form border style */
}

.fake-select__select {
  position: relative;
  width: 120%;
  z-index: 10;
  font: inherit;
  /* reset select styles */
  border: 0; 
  outline: 0;
  background: transparent;
  appearance: none;
}

.fake-select:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: block;
  content: '';
  width: 30px;
  background: url('arrow-down.png') no-repeat;
  border-left: 1px solid blue;
}
```

The explanation:  
We strip any styles of the select-element, and put it into a wrapper `.fake-select`.  This element gets the all form-element styles, just like all our other input-elements with borders and padding and stuff.  The fake select container has `overflow: hidden;` on it, and the select itself is 120% wide, so any user-agent specific styling of the dropdown with arrows and stuff will just be cut off.  
We add another pseudo-element for the actual dropdown-arrow that sits to the right, beneath the dropdown (note the `z-index` on both elements) and we're done.  We could position the pseudo-element above the select, but then clicking on the arrow would not open the dropdown unless we add `pointer-events: none;` to the pseudo-element or do some crazy shit with JavaScript, MouseEvents and click-mouse-positions.

The actual dropdown will be wider than the fake-select, but since the opened dropdown can't be styled nicely anyway (system fonts etc., I am looking at you, internet explorer) that's just a minor nuisance.  So there we have it, a styled dropdown, that could look like this:

(image: select-dropdowns.png alt: Styled select-dropdowns, closed and open state)

And that's it. I of course would prefer just using the default dropdowns and checkboxes, but if you have to style those elements — the simple way — that's how I do it.

----

Tags: coding

----

Gallery: 0
