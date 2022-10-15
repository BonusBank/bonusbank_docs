---
sidebar_position: 1
id: guides-intro
title: Introduction
---

# Examples for styling docs

## Normal image usage

<img src={require('./img/csr.png').default} alt="drawing" width="500"/>

## Centered image usage

<p align="center">
  <img src={require('./img/csr.png').default} alt="drawing" width="500"/>
</p>

## Column layout example
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

## Centered text

<p align="center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat mauris eget magna vehicula, quis commodo dui feugiat. Nunc ac libero id elit iaculis commodo. Suspendisse consectetur dolor quam, eget pellentesque tortor eleifend eget. Nunc et dui lectus. Etiam vel sapien tempor, varius dui sollicitudin, aliquam purus.
</p>

## Warnings / Notes

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