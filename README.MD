## About

This example provides a great starting point to learn how to build a full-fledged admin panel by integrating [**daisyUI**](https://daisyui.com) with [**refine**](https://github.com/refinedev/refine)

## Approach

1. Read the blog post which served as an intro to DaisyUI and refine.
2. Cloned the repo onto my local machine to get the hang of these frameworks and get some hands-on experience.
3. Looked into recharts to check it's feasibility to reproduce the figma design.
4. Started editing the graph panel to match the look of the design, utilising daisyUI classes as much as possible.
    1. Restructured the tooltip using the "card" class.
    2. Implemented the dropdown functionality using the "dropdown" class.
    3. Used the "menu" class for the editing menu to change the chart panel.
5. Made use of a lightweight library for the date range picker, [`@wojtekmaj/react-daterange-picker`](https://www.npmjs.com/package/@wojtekmaj/react-daterange-picker).


## Implementation details

- Charts UI:
    - Utilized the default recharts library and made required changes to it.
- Mock Data:
    - Added a function to calculate random values for the second line chart based on the original data itself.
- To edit the daterange-picker UI, the CSS file used by it was copied from it's dist directory to the project's main directory (under `/src/components/dashboard/styles`).
- Made use of SVG with a custom line-gradient for the graph lines as well as the legends.

## Assumptions

Since the height of the chart and the tooltip is fixed and it has to be always in the middle of the chart according the design, gave it a fixed position calculated from these heights.

## Quick Start

Clone this repo and then run

```
npm run dev
```

Your application will be accessible at http://localhost:5173

![Graph](./assets/graph.png "Graph")

![Dropdown](./assets/dropdown.png "Dropdown")

![Daterange picker](./assets/daterangepicker.png "Daterange picker")

![Menu](./assets/menu.png "Menu")

### Resources

Refer to [daisyUI docs](https://daisyui.com/docs/install/) for more information.

Refer to complete CRUD app [tutorial](https://refine.dev/docs/tutorial/introduction/index/) to learn more about refine.
