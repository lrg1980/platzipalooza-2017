$(document).foundation()

$('[data-toggle-dia]').click(function onclick (ev) {
    const panel = $(this).data('toggleDia')
    $('#lineup-tabs').foundation('selectTab', panel)
})
