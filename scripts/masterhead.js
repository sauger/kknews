var Masthead = {
    isReady: false,
    featured: null,
    init: function() {
       
    },
    ready: function() {
        this.isReady = true;
    },
    update: function(featured) {
        if (this.isReady) {
            var el = $('#masterheadswf');
            el.addCarouselItem(featured);
        } else {
            this.featured = featured;
        }
    },
    writeSwf: function() {
        var swf = 'masthead.swf';
        var id = 'masterheadswf';
        var height = 414;
        var swfObject = new SWFObject(swf, id, "100%", height, "9.0.115");
        swfObject.useExpressInstall("/expressinstall.swf");
        swfObject.addParam("allowScriptAccess", "always");
        swfObject.addParam("wmode", "transparent");
		swfObject.write('masterhead_container')
    },
    delegateToSwf: function(block) {
        var masterhead = $('#masterhead_container');
        Try.these(function() {
            block(masterhead);
        });
    },
    startAnimation: function() {
        Masthead.delegateToSwf(function(m) {
            m.startAnimation();
        });
    },
    stopAnimation: function() {
        Masthead.delegateToSwf(function(m) {
            m.stopAnimation();
        });
    }
};
