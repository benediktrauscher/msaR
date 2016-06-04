# msaR
The [BioJS MSA viewer](https://github.com/wilzbach/msa) wrapped into an R package using [htmlwidgets](https://github.com/ramnathv/htmlwidgets).
## Installation
```
git clone https://github.com/bene200/msaR.git
R CMD INSTALL msaR
```
Or via [devtools](https://github.com/hadley/devtools)
```
devtools::install_github('bene200/msaR')
```
## Usage
```{r}
library(msaR)
```
#### Basic usage
```{r}
msaR('<path-to-msa-file>')
```
#### Without menu
```{r}
msaR('<path-to-msa-file>', menu=F)
```
#### With custom config
Please refer to the [MSA viewer documentation](https://github.com/wilzbach/msa) for a list of possible config options.
```{r}
config <- list(
  vis=list(
    overviewbox=T
  )
)
msaR('<path-to-msa-file>', config=config)
```
#### As a Shiny widget
msaR can be used as a widget with the [Shiny](http://shiny.rstudio.com/) web application framework.

In ui.R
```{r}
msaROutput("msa", width="100%")
```

In server.R
```{r}
output$msa <- renderMsaR(
  msaR('<path-to-msa-file>')
)
```
## Contribute
All contributions are welcome! Please feel free to submit a pull request.
## Support and Suggestions
If you have any problem or suggestion please open an issue [here](https://github.com/bene200/msaR/issues)

License
-------

This project is licensed under the [Boost Software License 1.0](https://github.com/wilzbach/msa/blob/master/LICENSE).

> Permission is hereby granted, free of charge, to any person or organization
> obtaining a copy of the software and accompanying documentation covered by
> this license (the "Software") to use, reproduce, display, distribute,
> execute, and transmit the Software, and to prepare derivative works of the
> Software, and to permit third-parties to whom the Software is furnished to
> do so, all subject to the following:

If you use the MSAViewer on your website, it solely requires you to link to us
