function onFormSubmit(){
    var formData=readFormData();
}


function readFormData(){
    var formData={};
    formData["email"]=document.getElementById("email").value;
    formData["password"]=document.getElementById("password").value;
    return formData;
}

var db= openDatabase("intern","1.0","intern",80808)

$(function(){

    $("#login-button").click(function(){
        db.transaction(function(transaction){
            var sql="CREATE TABLE user" +

            "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "email varchar(100) NOT NULL ,"+
            "password varchar(100) NOT NULL)"
            transaction.executeSql(sql,undefined,
                function(){
                    alert("Logged in succesfully!!");
                },function(){
                    alert("error occured")
                })

        })
    })
})



$("#delete").click(function () {
    if(!confirm("Are you sure to delete the table?!","")) return;;
    db.transaction(function(transaction)){
        var sql="Delete table items";
        transaction.executeSql(sql,undefined,
            function(){
                alert("table deleted succesfully")
            },function(){
                alert("error occured!")
            })
    }
    // body...
})


(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);