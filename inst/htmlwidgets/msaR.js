HTMLWidgets.widget({

  name: 'msaR',

  type: 'output',

  initialize: function(el, width, height) {

    var rootDiv = el;

    return {
      msa: msa,
      el: rootDiv,
      parse: require("biojs-io-fasta").parse
    };
  },

  renderValue: function(el, x, instance) {
    var opts = x.config;
    opts.el = instance.el;
    opts.seqs = instance.parse(x.alignment);

    // init msa
    var m = instance.msa(opts);
    var test = m.g.colorscheme.set("scheme", "nucleotide");

    if(x.menu){
      // the menu is independent to the MSA container
      var menuOpts = {};
      menuOpts.el = document.getElementById('div');
      menuOpts.msa = m;
      menuOpts.menu = "small";
      var defMenu = new msa.menu.defaultmenu(menuOpts);
      m.addView("menu", defMenu);
    }

    // save msa instance to window object so it can be hacked using shinyjs
    if(x.features){
      var features = {
        config: {
          type: "gff3"
        },
        seqs: {}
      };

      for(var i=0; i<x.features.length; i++){
        if(features.seqs[x.features[i].seqName] === undefined || features.seqs[x.features[i].seqName] === null){
          features.seqs[x.features[i].seqName] = [];
        }
        features.seqs[x.features[i].seqName].push({
          attributes: {
            Color: "#4285f4",
            Name: "sgRNA"
          },
          end: x.features[i].end,
          feature: "gene",
          start: x.features[i].start
        });
      }

      m.seqs.addFeatures(features);
    }

    // call render at the end to display the whole MSA
    m.render();
  },

  resize: function(el, width, height, instance) {

  }

});
