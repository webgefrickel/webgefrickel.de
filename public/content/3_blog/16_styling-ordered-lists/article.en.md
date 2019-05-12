Title: Styling ordered lists

----

Date: 2016-04-22

----

Intro: I wanted to style ordered lists a bit differently for my personal website, and while you can do a lot with just CSS pseudo-elements, I wanted something more and fiddled around with CSS Counters.

----

Text: The idea for the list is simple: I wanted an ordered list, but with the normal numbers aligned left, and not to the right (for an example, [look at my contact page](/contact). Fiddling around with `list-style-position` and `padding` did not work, so I dug deep and came up with the following Sass:

```scss
.list--ol {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  counter-reset: step-counter;

  .list__item {
    position: relative;
    padding-left: 2rem;
    counter-increment: step-counter;

    &::before {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      content: counter(step-counter) '.';
    }
  }
}

```

The idea behind all this is as follows

1. Ditch the default list styling and reset the counter with a custom name (step-counter in this case)
2. Give the list items a padding to the left and increment the counter on each list item
3. Create a CSS-pseudo element with the content of the just created custom CSS-counter (and a concatenated dot) and position it absolutely in the list item
4. Done!

(Note that this will create a fixed width for the counter (through the padding of the list-element) and will look ugly on small lists and will break on large lists.)

And of course I just had to use an ordered list for this right here, to demonstrate the end result. Things I did not know before: you can throw multiple arguments at `content` — this will come in handy in the future for sure.

Have fun coding!

----

Tags: coding

----

Gallery: 0
