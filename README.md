# paku

> A small library to create HTML cards

## Installation

```bash 
npm install @drihu/paku
```

## Usage

In your HTML file import the script.

```html
<!-- head -->
<body>
  <div id="app"></div>

  <script src="../dist/paku.umd.js"></script>
  <script>
    const app = document.querySelector('#app');

    for (let i = 1; i <= 4; i++) {
      const card = new Paku({
        title: 'Random Title',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      });
      app.append(card.element);
    }
  </script>
</body>
</html>
```

That way you'll have 4 pretty cards inside any element you want.

## License

Copyright &copy; 2020 Ricardo Huamani &lt;ricardohuamanip@gmail.com&gt;

Licensed under the terms of the MIT license.
