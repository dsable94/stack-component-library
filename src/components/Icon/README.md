# Icon

Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.

## Usage

```js
import { Icon } from '@dentsu/components';
```

## Examples

```jsx
<Icon icon="add" />
```
```jsx
<Icon icon="add" size={16} />
```

## Prop Types

**icon** `string`<br />
This prop is required because it determines the content of the component, but it can be explicitly set to falsy values to render nothing.

---

**size** `number` = *16*<br />
Size of the icon, in pixels.

---

**color** `string`<br />
Colour of icon. This is used as the fill attribute on the `<svg>` image so it will override any CSS color property. If this prop is omitted, icon color is inherited from surrounding text.
