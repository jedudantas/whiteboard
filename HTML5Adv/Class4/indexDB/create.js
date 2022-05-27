var dt = new Date();

var course = {
    title: 'HTML 5',
    author: {
        first: 'Craig',
        last: 'Shoemaker'
    },
    courseID: 'html5',
    insertDate: dt,
    modifiedDate: dt
};

var transaction = db.instance.transaction([db.storeNames.courses], 'readwrite');

var
    store = transaction.objectStore(db.storeNames.courses),
    addRequest = store.add(course);

db.setDefaultErrorHandler(addRequest);

addRequest.onsuccess = function (e) {
    $$result.log('Course added');
    $$result.log('key: '+e.target.result);
    $('#id-box').val(e.target.result);
}; 