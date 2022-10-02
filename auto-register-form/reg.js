function validate() {
    if( document.home.name.value == "" ) {
        alert( "Please provide your Enter name!" );
        document.home.name.focus() ;
        return false;
     }
    if( document.home.class.value == "" ) {
        alert( "Please provide your Enter Class!" );
        document.home.class.focus() ;
        return false;
    }
    if( document.home.dob.value == "" ) {
        alert( "Please provide your Enter DOB!" );
        document.home.dob.focus() ;
        return false;
    }
    if( document.home.mobileno.value == "" ) {
        alert( "Please provide your Enter Mobile No!" );
        document.home.mobileno.focus() ;
        return false;
    }
    if( document.home.email.value == "" ) {
        alert( "Please provide your Enter Email!" );
        document.home.email.focus() ;
        return false;
     }
    if( document.home.address.value == "" ) {
        alert( "Please provide your Enter Address!" );
        document.home.address.focus() ;
        return false;
    }
    if( document.home.country.value == "" ) {
        alert( "Please provide your Enter Country!" );
        document.home.country.focus() ;
        return false;
    }
    if( document.home.state.value == "" ) {
        alert( "Please provide your Enter State!" );
        document.home.state.focus() ;
        return false;
    }
    if( document.home.city.value == "" ) {
        alert( "Please provide your Enter City!" );
        document.home.city.focus() ;
        return false;
    }
    if( document.home.location.value == "" ) {
        alert( "Please provide your Enter Location!" );
        document.home.location.focus() ;
        return false;
    }
    if( document.home.pincode.value == "" ) {
        alert( "Please provide your Enter Pin Code!" );
        document.home.pincode.focus() ;
        return false;
    }

    if( document.home.reset.value == "" ) {
        alert( "Please provide your Enter Pin Code!" );
        document.home.rest.focus() ;
        return false;
    }

    if( document.home.submit.value == "" ) {
        alert( "Please click  Submit button !" );
        document.home.submit.focus() ;
        return false;
    }

    return(true);
}











   