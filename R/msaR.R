#' msaR
#'
#' Dynamic Multiple Sequence Alignments in R and Shiny
#'
#' @import htmlwidgets
#'
#' @export
msaR <- function(msaString, menu=T, config=NULL, width = NULL, height = NULL) {

  # if no config options are given, init standard config
  if(is.null(config)){
    config <- list(
      vis=list(
        conserv=F,
        overviewbox=F,
        seqlogo=T
      ),
      conf=list(
        dropImport=T
      ),
      zoomer=list(
        menuFontsize='12px',
        autoResize=T
      )
    )
  }

  # forward options using x
  x <- list(
    alignment=paste(readLines(msaString),collapse="\n"),
    config=config,
    menu=menu
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'msaR',
    x,
    width = width,
    height = height,
    package = 'msaR'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
msaROutput <- function(outputId, width = '100%', height = '300px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'msaR', width, height, package = 'msaR')
}

#' Widget render function for use in Shiny
#'
#' @export
renderMsaR <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, msaROutput, env, quoted = TRUE)
}
