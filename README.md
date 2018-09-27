# Universal Anki CSS

A universal Anki CSS file, to stylize your cards. The built-in template in Anki can be quite lacking, especially when it comes to lists and block-elements.

## Motivation

- Create a plain and simple template
- Drop in support - no changes to the basic template are needed
- Support for additional "elements" (e.g. via the [format power pack](https://ankiweb.net/shared/info/162313389) or [mini format pack](https://ankiweb.net/shared/info/295889520))
- Support for the [night mode add-on](https://ankiweb.net/shared/info/1496166067)
- The CSS files should work in Web, in Anki 2.0 and Anki 2.1

## Considerations

- Configurations can be done inside the SCSS
- The background is light gray, the font not entirely black
- Lists are left aligned, so that indentation is actually useful
- Code is left aligned, so code snippets are closer to real life. *Note*: Usually its best to paste your code, and format it as "Code Block". If you type new code directly on the card, use Shift + Enter for new lines!
- On large screens, content should not span the entire monitor for readability.

## Issues

- For lists, centering is not easy without wrapping them inside a container. Therefore, they are left aligned

## Planned features, help, and feature requests

Please see: https://chrisk91.me/2018/09/19/Basic-CSS-Template-for-Anki.html

## License

The code is licensed under the MIT license. Fell free to share it, modify it or redistribute it.

## Changelog

 - September 2018:
    - Added styling for clozed cards
    - Added styling for built-in hints
    - Added styling for type: cards