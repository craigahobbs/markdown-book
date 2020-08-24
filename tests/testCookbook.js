import {MarkdownBook, ingredientText, parseRecipeInfo} from '../src/markdownBook.js';
import {parseMarkdown} from '../src/chisel/markdown.js';
import test from 'ava';

/* eslint-disable id-length */


test('MarkdownBook, constructor', (t) => {
    const book = new MarkdownBook('book.json');
    t.deepEqual({...book}, {
        'book': null,
        'bookURL': 'book.json',
        'config': null,
        'params': null,
        'windowHashChangeArgs': null
    });
});


test('ingredientText, tbsp', (t) => {
    t.deepEqual(
        ingredientText({'amount': 1, 'unit': 'tbsp', 'name': 'olive oil'}),
        ['1', 'tbsp', 'olive oil']
    );
});


test('ingredientText, tsp to tbsp', (t) => {
    t.deepEqual(
        ingredientText({'amount': 3, 'unit': 'tsp', 'name': 'olive oil'}),
        ['1', 'tbsp', 'olive oil']
    );
});


test('ingredientText, fraction tsp', (t) => {
    t.deepEqual(
        ingredientText({'amount': 0.5, 'unit': 'tsp', 'name': 'olive oil'}),
        ['1/2', 'tsp', 'olive oil']
    );
});


test('ingredientText, whole and fraction cup', (t) => {
    t.deepEqual(
        ingredientText({'amount': 1.75, 'unit': 'cup', 'name': 'hot water'}),
        ['1 3/4', 'C', 'hot water']
    );
});


test('ingredientText, 2/3 cup doubled', (t) => {
    t.deepEqual(
        ingredientText({'amount': 2 / 3, 'unit': 'cup', 'name': 'water'}, 2),
        ['1 1/3', 'C', 'water']
    );
});


test('parseRecipeInfo', (t) => {
    const markdownText = `
~~~ recipe-info
Title: The Title
Author: The Author
~~~

Mix together:

~~~ recipe-ingredients
1/4 C this

2 tbsp that
~~~
`;
    const recipeInfo = parseRecipeInfo(parseMarkdown(markdownText));
    t.deepEqual(
        recipeInfo,
        {
            'author': 'The Author',
            'ingredients': [
                {'amount': 0.25, 'name': 'this', 'unit': 'cup'},
                {'amount': 2, 'name': 'that', 'unit': 'tbsp'}
            ],
            'title': 'The Title'
        }
    );
});


test('parseRecipeMarkdown, degenerate', (t) => {
    const markdownText = `
Mix together:

1/4 C this
2 tbsp that
`;
    const recipeInfo = parseRecipeInfo(parseMarkdown(markdownText));
    t.is(recipeInfo, null);
});


test('parseRecipeMarkdown, empty', (t) => {
    const markdownText = '';
    const recipeInfo = parseRecipeInfo(parseMarkdown(markdownText));
    t.is(recipeInfo, null);
});


test('parseRecipeMarkdown, float ingredient amount', (t) => {
    const markdownText = `
~~~ recipe-ingredients
1.5 C water
~~~
`;
    const recipeInfo = parseRecipeInfo(parseMarkdown(markdownText));
    t.deepEqual(
        recipeInfo,
        {
            'ingredients': [
                {'amount': 1.5, 'name': 'water', 'unit': 'cup'}
            ],
            'title': 'Untitled Recipe'
        }
    );
});


test('parseRecipeMarkdown, servings', (t) => {
    const markdownText = `
~~~ recipe-info
Servings: 10
~~~
`;
    const recipeInfo = parseRecipeInfo(parseMarkdown(markdownText));
    t.deepEqual(
        recipeInfo,
        {
            'ingredients': [],
            'servings': 10,
            'title': 'Untitled Recipe'
        }
    );
});
