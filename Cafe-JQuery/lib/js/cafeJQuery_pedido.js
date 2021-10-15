var idLinha = 0;

$(document).ready(function () 
{
    $('.tabs').tabs();
    $("#add").click(addPedido);
});

function addPedido() 
{
    var numero = $("#idPedido").val();
    var data = $("#data").val();
    var Status = $("#Status").val();
    if ((numero) && (data) && (Status)) 
    {
        escreverDadosTabela(numero, data, Status);
        $("#idMesa").val("");
        $("#data").val("");
        $("#Status").val;
    } else 
    {
        //exibirMensagem("Você precisa informar o nome e o celular para adicionar o contato!");
        alert("Você precisa informar a data e hora do Pedido!");
    }
}

function removerPedido(idRemover) 
{
    $("#" + idRemover).remove();
}

function escreverDadosTabela(numero, datH, Status) 
{
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + numero + '</td>';
    html += '<td>' + data + '</td>';
    html += '<td>' + Status + '</td>';
    html += '<td>';
    html += '<button class="btn waves-effect waves-light amber accent-4 " type="button" id="del"\n\
                       name="del" onclick="removerMesa(\'linha' + idLinha + '\')">';
    html += '<i class="material-icons center">delete</i></button></td>';
    html += '</tr>';
    $("#corpoTabela").append(html);
}

function LerJSON(json)
{
    var jsonDOC = json;
    for(var i = 0; i < jsonDOC. length; i++)
    {
        var id = jsonDOC[i].id;
        var numpedido = jsonDOC[i].numpedido;
        var datH = jsonDOC[i].data;
        var Status = jsonDOC[i].Status;
        escreverDadosTabela(id, numpedido, data, Status);
    }
}

function buscarPeido()
{
    $.get("lib/json/PedidoCafe.json", function (json)
    {
        lerJSON(json)
    }, "json");
}
