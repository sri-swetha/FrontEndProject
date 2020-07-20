//jquery for modals and alignment using js
$(document).ready(function () {

    /* Centering the modal vertically */
    function alignModal() {
        var modalDialog = $(this).find(".modal-dialog");
        modalDialog.css("margin-top", Math.max(0,
            ($(window).height() - modalDialog.height()) / 2));
    }
    $(".modal").on("shown.bs.modal", alignModal);

    /* Resizing the modal according the screen size */
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });
}); 