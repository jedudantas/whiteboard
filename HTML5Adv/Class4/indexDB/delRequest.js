if(typeof initDB !== 'undefined'){
    $$result.log('Closing database...');
    initDB.close();
    $$result.log('Trying to delete');
    var deleteRequest = indexedDB.deleteDatabase('InitDB');
    deleteRequest.onerror = deleteRequest.onblocked = $$result.log;
    deleteRequest.onsuccess = function(){
        $$result.log('Database deleted');
    };
};