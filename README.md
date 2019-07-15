# Logger
Inject a logger
# Methods
## clearLogger()
Clean all the content from logger
## logger.write (getter/setter)
Enable to write inside the logger
```
// Setter
  logger.write = "Hello World"  // Print into the logger and return "Hello Word" string

// Getter
  logger.write                  // return "Hello Word" string
```
## logger.append (getter/setter)
Enable to append to the content
```
// Setter
  logger.append = "Hello World"  // Print into the logger and return "Hello Word" string
  logger.append = "Foo"          // Apppend into the logger and return "Hello Word\nFoo" string

// Getter
  logger.append                  // return "Hello Word \n Foo" string
```
