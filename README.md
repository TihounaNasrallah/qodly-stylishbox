# Overview

**CSS-Styling-Box** Component is an enhanced and dynamic Stylebox, it serves as a versatile container designed to enhance the capabilities of the Stylebox, by giving the developer the ability to apply an infinite number of properties to the component.

# CSS-Styling-Box Component

![Component](image.png)

### Properties

| Name                | Type             | Description                                                                                                                           | Example                        |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **Parameters**      | Array Of Objects | It's an array of **"CSS classes"**. Each object of the array contains the **name**, **value** and **default value** of the css class. |                                |
| **`Name`**          | String           | It's the name of the css class.                                                                                                       | background-color, color, ...   |
| **`Source`**        | String           | It's the variable that contains the value of the css class.                                                                           | `team.color`, `colorName`      |
| **`Default Value`** | String           | In case the `source` is empty, the default value will be applied.                                                                     | #6082B6, rgb(93, 63, 211), ... |
