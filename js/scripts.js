$(document).ready(function() {

    /*
     * ************
     * Toggle class 
     * ************
     *
     * Line 12: When an element with the class 'js-menu-trigger' is clicked...
     * Line 13: ...toggle the class 'show-menu' on the element 'body' (either add or remove the class)
     */
    $('.glossary__word').click(function() {
        $(this).toggleClass('show-definition');


    });



    $('.section__head').click(function() {
        $(this).toggleClass('show-wrapper');


    });



});