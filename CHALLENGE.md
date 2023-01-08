#Challenge

a challenge for the brave

## problem

build a `<DismissableBlurb />` component similar to the one on Github

see : [example](https://www.dropbox.com/s/9d2sf7dw8w6ysu5/dismissable-blurb-github.png?dl=0)

## requirements

- should render `children` components inside it
  - required
    -should have an "x" should remove the element from the dom

```tsx
<DismissableBlurb>
  <h3>Welcome to the new feed!</h3>
  <p>We'ew updating this to make it more interactive and useful.</p>
  <a href="https://example.com/feedback">Send feedback</a>
</DismissableBlurb>
```
