# Recipe Markdown

The Markdown Book application supports making cookbooks with scalable recipes through the use of
*Recipe Markdown*. Recipe Markdown defines two new pieces of markdown syntax piggy-backed on the
*fenced code block* markdown extension.

Recipe information is specified using a "recipe-info" code block.

    ~~~ recipe-info
    Title: My Recipe
    Author: Recipe Author
    Servings: 10
    ~~~

The following information keywords are supported: Title, Author, and Servings.

Recipe ingredient lists are specified using a "recipe-ingredients" code block.

    ~~~ recipe-ingredients
    1 1/2 tsp baking soda

    1 large egg

    1 C milk

    0.5 tbsp sugar
    ~~~

Each line of a "recipe-ingredient" code block is comprised of the amount of the ingredient (e.g. "1
1/2"), the optional unit (e.g. "C", default is "count"), and the ingredient's name (e.g. "water"). A
page can contain any number of "recipe-ingredient" code blocks. Ingredient amounts can be fractions
(e.g. "1 1/2") or floating point numbers (e.g. "1.5"). The following ingredient units and their
alternate names are supported:

- count
- cup
  - C
  - Cup
  - Cups
  - c
  - cups
- lb
  - Lb
  - Lbs
  - Pound
  - Pounds
  - lbs
  - pound
  - pounds
- oz
  - Oz
  - Ounce
  - Ounces
  - ounce
  - ounces
- pinch
- tbsp
  - T
  - Tbsp
  - Tablespoon
  - Tablespoons
  - tablespoon
  - tablespoons
- tsp
  - Tsp
  - Teaspoon
  - Teaspoons
  - teaspoon
  - teaspoons

