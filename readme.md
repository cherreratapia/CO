# Venta de seguros.

Sell insurance with 30 days simulation.

# Usage

You could use two options:

```
$ docker build -t simulation && docker run simulation
```

or

```
$ yarn after-30-days
```

# Test

For view everything about tests

```
$ yarn test
```

or if you want to see the coverage

```
$ yarn coverage
```

# Solution description

## Rules

```js
{
    name: string;
    comparator: string;
    fieldToCompare: Field; //sellIn or Price;
    target: number;
    effect: Effect;
}
```

### Detail:

-   **name** Insurance's name
-   **fieldToCompare**
-   **operation** condition
-   **target** field's condition

## Effect

```js
{
    field: Field; //sellIn or Price;
    symbol: string;
    operation: number;
}
```

### Detalle:

-   **field**
-   **symbol** math operator (+, -, /, \*, =)
-   **target** field to apply the math

# Functions

Objects consumed by the function

## COMPARATORS

```js
{
    daily: (origin: number, target: number) => true,
    lessThan: (origin: number, target: number) => origin < target,
    lessThanOrEqual: (origin: number, target: number) => origin <= target,
    equal: (origin: number, target: number) => origin === target,
    greaterThan: (origin: number, target: number) => origin > target,
    greaterThanOrEqual: (origin: number, target: number) => origin >= target
}
```

All possible scenarios of comparison between fields

## OPERATIONS

```js
{
    "+": (origin: number, target: number) => origin + target,
    "-": (origin: number, target: number) => origin - target,
    "*": (origin: number, target: number) => origin * target,
    "/": (origin: number, target: number) => origin / target,
    "=": (origin: number, target: number) => target
}
```

All possible mathematical operations. **Everyone returns a new value**

the function that test if the effect could run.

```js
const executeRule = (rule: Rule, origin: number, target: number) => COMPARATORS[rule.operation](origin, target);
```
