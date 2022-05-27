var db = {
    name: 'CrudDB',
    version: 1,
    instance: {},
    storeNames: {
        courses: 'courses'
    },
    defaultErrorHandler: function(e){
        $$result.log(e);
    },
    setDefaultErrorHandler: function(request){
        if('onerror' in request){
            request.onerror = db.defaultErrorHandler;
        }
        if('onblocked' in request){
            request.onblocked = db.defaultErrorHandler;
        }
    }
}