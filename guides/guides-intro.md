---
sidebar_position: 1
id: guides-intro
title: Introduction
---

# Examples for styling docs

## Centered text

```html
<p align="center"></p>
```

<p align="center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mauris eget magna vehicula, quis commodo dui feugiat. Nunc ac libero id elit iaculis commodo. Suspendisse consectetur dolor quam, eget pellentesque tortor eleifend eget. Nunc et dui lectus. Etiam vel sapien tempor, varius dui sollicitudin, aliquam purus.
</p>

## Normal image usage

<img src={require('./img/csr.png').default} alt="drawing" width="500"/>

## Centered image usage
Use the same `<p>` as for text alignment strategy
<p align="center">
  <img src={require('./img/csr.png').default} alt="drawing" width="500"/>
</p>

## Column layout example
```html
<table class="invisibleTable">
  <tr>
    <td>
      Content Left Colmn.
    </td>
    <td>
      Content Right Colmn.
    </td>
  </tr>
</table>
```
<table class="invisibleTable">
  <tr>
    <td>
      <p align="center">
        <img src={require('./img/csr.png').default} alt="drawing"/>
      </p>
    </td>
    <td>
      <p align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mauris eget magna vehicula, quis commodo dui feugiat. Nunc ac libero id elit iaculis commodo. Suspendisse consectetur dolor quam, eget pellentesque tortor eleifend eget. Nunc et dui lectus. Etiam vel sapien tempor, varius dui sollicitudin, aliquam purus.
      </p>
    </td>
  </tr>
</table>

## Admonitions - Warnings / Notes

Use `Admonitions` by following the needed syntax:

```markdown
:::<type> <Custom Title if needed>

The text to display inside your `Admonition`

:::
```

Here are a few examples of the different types that can be used:
:::note

Some **content** with _Markdown_ `syntax`.

:::

:::tip

Some **content** with _Markdown_ `syntax`.

:::

:::info

Some **content** with _Markdown_ `syntax`.

:::

:::caution

Some **content** with _Markdown_ `syntax`.

:::

:::danger

Some **content** with _Markdown_ `syntax`.

:::

:::tip Custom Title

This is how you add a custom title to a `Admonitions` 😉
By default the title will be the type of `Admonition` used.

:::

## Using icons

### Material Icons
```html
<span class="material-icons">
account_circle
</span>
```

Example currently does only work with default icons, no `outlined, rounded, filled, ...` available
<span class="material-icons">
account_circle
</span>
