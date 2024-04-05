
$(document).ready(function () {
    $("#txtkeyword").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/Home/GetAutocompleteData",
                type: "POST",
                dataType: "json",
                data: { term: request.term, sessionName: $("#chon").val() },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.UserName, value: item.Value
                        }
                    }))
                },
                messages:{
                    noResults:"", results:""
                }
            });
        }
    });

    $["ui"]["autocomplete"].prototype["_renderItem"] = function (ul, item) {
        return $("<li></li>")
        .data("item.autocomplete", item)
        .append($("<a></a>").html(item.label))
        .appendTo(ul)

    };
});