# Logger
Inject a logger

```javascript
var script = document.createElement("script")
script.src = "https://cdn.jsdelivr.net/gh/edoardohorse/logger/logger.js"
script.type = "application/javascript"
document.body.appendChild(script)

```


# Methods
## clearLogger()
Clean all the content from logger
## logger.content (getter/setter)
Enable to write inside the logger
```
// Setter
  logger.content = "Hello World"  // Print into the logger and return "Hello Word" string

// Getter
  logger.content                  // return "Hello Word" string
```
## logger.append (getter/setter)
Enable to append to the content
```
// Setter
  logger.append = "Hello World"  // Print into the logger and return "Hello Word" string
  logger.append = "Foo"          // Apppend into the logger and return "Foo" string

// Getter
  logger.append                  // return "Hello Word \n Foo" string
```
