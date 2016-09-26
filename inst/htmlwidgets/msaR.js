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
    m.g.colorscheme.addStaticScheme("own",{A: "orange", C: "red", G: "green", T: "blue"});
    m.g.colorscheme.set("scheme", "own");

    if(x.menu){
      // the menu is independent to the MSA container
      var menuOpts = {};
      menuOpts.el = document.getElementById('div');
      menuOpts.msa = m;
      menuOpts.menu = "small";
      var defMenu = new msa.menu.defaultmenu(menuOpts);
      m.addView("menu", defMenu);
    }

    // call render at the end to display the whole MSA
    m.render();

    // save msa instance to window object so it can be hacked using shinyjs
    window.msaR = m;
  },

  resize: function(el, width, height, instance) {

  }

});
