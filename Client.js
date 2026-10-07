// function onChange(control, oldValue, newValue, isLoading, isTemplate) {
//    if (isLoading || newValue === '') {
//       return;
//    }

//    //Type appropriate comment here, and begin script below
// //    g_form.getReference('u_requestor',function(caller)
// //    {
// // 	// var user = caller.getValue('manager');
// // 	//alert(user); if we keep this as it is it will return the sysid of the manager

// // 	var manger = caller.getDisplayValue('manager');
// // 	alert(manger);
// //    });
//    g_form.getReference('u_requestor', function(caller) {

//     var manager = caller.getDisplayValue('manager');

//     if (manager) {
//         alert('Manager: ' + manager);
//     } else {
//         alert('No manager assigned.');
//     }

// });

// }
function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading || newValue === '') {
        return;
    }

//     g_form.getReference('u_requestor', function(caller) {

//         alert('Caller record received');

//         var manager = caller.getValue('manager');

//         alert('Manager sys_id: ' + manager);

//     });

g_form.getReference('u_requestor', function(caller) {

    var manager = caller.getValue('manager');

    alert(manager);

});
}