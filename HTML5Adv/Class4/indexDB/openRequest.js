var openRequest = window.indexedDB.open('InitDB',1);

openRequest.onupgradeneeded = function (e){
    $$result.log('Upgrade needed');

    var newVersion = e.target.result;

    if(!newVersion.objectStoreNames.contains('courses')){
        newVersion.createObjectStore('courses',
        {
            autoIncrement: true
        });
    }
};

openRequest.onerror = openRequest.onblocked=$$result.log;
openRequest.onsuccess = function (e){
    $$result.log('Database open');

    initDB = e.target.result; 
};