var idLinha = 0;

$(document).ready(function () 
{
    $('.tabs').tabs();
    $("#add").click(addItem);
});

function addItem() 
{
    var numero = $("#idItem").val();
    var qntde = $("#qntdeItem").val();
    var valor = $("#valor").val();
    if ((numero) && (qntde) && (valor)) 
    {
        escreverDadosTabela(numero, qntde, valor);
        $("#idItem").val("");
        $("#qntdeItem").val("");
        $("#valor").val;
    } else 
    {
        //exibirMensagem("Você precisa informar o nome e o celular para adicionar o contato!");
        alert("Você precisa informar as informações dos itens pedidos!");
    }
}

function removerItem(idRemover) 
{
    $("#" + idRemover).remove();
}

function escreverDadosTabela(numero, qntde, valor) 
{
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + numero + '</td>';
    html += '<td>' + qntde + '</td>';
    html += '<td>' + valor + '</td>';
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
        var numero = jsonDOC[i].numero;
        var qntde = jsonDOC[i].qntde;
        var valor = jsonDOC[i].valor;
        escreverDadosTabela(id, numero, qntde, valor);
    }
}

function buscarItem()
{
    $.get("lib/json/ItemCafe.json", function (json)
    {
        lerJSON(json)
    }, "json");
}


