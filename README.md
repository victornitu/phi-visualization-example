# Example of Event-Driven Data Visualization with the PHI Architecture

This project is an example of how to use the [PHI Architecture example project][2] and how to visualize its data.  
For more details, see the article ["Event-Driven Data Visualization"][1] which offers in depth explanations.

## Requirements

To run this project, you will need _node 12_, _npm 6_, and _python 3.8_.  
To install the dependencies of **shop** and **dashboard**, run `npm install` inside their directory.  
To install the dependencies of **lab**, run `pip install -r requirements.txt` inside the `lab` directory.  

You will also need to start the [PHI Architecture example project][2]:  
For more information, have a look at [victornitu/phi-architecture-example][2].

## Quick start

Run **shop**
```bash
cd shop
npm start
```

Run **lab**
```bash
cd lab
jupyter lab
```

Run **dashboard**
```bash
cd dashboard
npm start
```

[1]: https://medium.com/phi-skills/event-driven-data-visualization-cf99e8dfa298
[2]: https://github.com/victornitu/phi-architecture-example
