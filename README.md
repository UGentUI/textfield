# Textfield

Een input webcomponent voor UGent webapplicaties.

## Inleiding

Dit pakket exporteert een aanpasbare input webcomponent voor verschillende text-based user inputs, met ondersteuning voor validation, size, disabled, readonly, en help text.

## Demo

https://ugentui.github.io/textfield

## Installatie

```bash
npm add @ugent-ui/textfield
```

> [!NOTE]
> Zorg steeds dat de [UGent UI CSS Reset](https://www.npmjs.com/package/@ugent-ui/css-reset?activeTab=readme) de eerste stylesheet op je pagina is om te zorgen voor een consistente styling. Voeg het `data-color-mode` attribute toe aan de HTML tag voor `light` and `dark` mode ondersteuning. Instaleer indien nodig:

```bash
npm add @ugent-ui/css-reset
```

## Gebruik

```html
<!DOCTYPE html>
<html lang="en" data-color-mode="light">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link
      rel="stylesheet"
      href="node_modules/@ugent-ui/css-reset/dist/assets/reset.css"
    />
    <script
      type="module"
      src="node_modules/@ugent-ui/textfield/dist/assets/textfield.js"
    ></script>
  </head>
  <body>
    <ug-textfield label="Name" placeholder="Enter your name"></ug-textfield>
  </body>
</html>
```

## Component tag

Gebruik de volgende tag om de component in je HTML op te nemen:

```html
<ug-textfield></ug-textfield>
```

## Component properties

- `label`: `string` - Het label van het invoerveld.
- `placeholder`: `string` - De placeholder tekst van het invoerveld.
- `value`: `string` - De waarde van het invoerveld.
- `disabled`: `boolean` - Of het invoerveld disabled is.
- `readonly`: `boolean` - Of het invoerveld readonly is.
- `type`: `string` - Het type van het invoerveld (mogelijkheden: text, url, email, password, number, tel).
- `required`: `boolean` - Of het invoerveld verplicht is.
- `size`: `string` - De grootte van het invoerveld (mogelijkheden: small, large).
- `valid`: `boolean` - Of het invoerveld geldig is.
- `invalid`: `boolean` - Of het invoerveld ongeldig is.

## Component Events

- `focus`
- `blur`
- `input`
- `change`

## Component slots

- `help-text`: Hulptekst die onder het invoerveld wordt weergegeven.

## Voorbeeldgebruik

```html
<ug-textfield label="Email address" placeholder="name@example" required invalid>
  <div slot="help-text">Please enter a valid email address.</div>
</ug-textfield>
```
