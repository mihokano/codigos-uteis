var idLinha = 0;

$(document).ready(function () 
{
    $('.tabs').tabs();
    $('select').formSelect();
    $("#add").click(addProdutos);
    buscarTipoProdutos();
});

function buscarTipoProdutos()
{
   $.get("lib/json/tiposProdutos.json", function(json) {lerJSON(json)}, "json");
}

function addProdutos() 
{
    if ($("#tipoProduto").val() == 0) 
    {
        alert('Você deve selecionar um tipo de produto antes de salvar!');
    } else 
    {
        var id = $("#idProduto").val();
        var nome = $("#nome").val();
        var preco = $("#preco").val();
        var tipoProduto = $("#tipoProduto").val();
        if ((id) && (nome) && (preco)) 
        {
            escreverDadosTabela(id, nome, preco, tipoProduto);
            $("#idProduto").val("");
            $("#nome").val("");
            $("#preco").val("");
            $("#tipoProduto").val("0");
            $("#tipoProduto").formSelect();
        } else 
        {
            alert("Você precisa informar o id, nome e preço do produto!");
        }
    }
}

function removerProduto(idRemover) 
{
    $("#" + idRemover).remove();
}

function escreverDadosTabela(id, nome, preco, tipoProduto) 
{
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + id + '</td>';
    html += '<td>' + nome + '</td>';
    html += '<td>' + preco + '</td>';
    var dadosTipoProd = tipoProduto.split("#");
    html += '<td>' + dadosTipoProd[0] + ' - '+dadosTipoProd[1] +'</td>';
    html += '<td>';
    html += '<button class="btn waves-effect waves-light amber accent-4 " type="button" id="del"\n\
                       name="del" onclick="removerProduto(\'linha' + idLinha + '\')">';
    html += '<i class="material-icons center">delete</i></button></td>';
    html += '</tr>';
    $("#corpoTabela").append(html);
}

function lerJSON(json)
{
    var jsonDOC = json;
    for( var i = 0; i < jsonDOC.length; i++)
    {
        var id = jsonDOC[i].id;
        var nome = jsonDOC[i].nome;
        var preco = jsonDOC[i].preco;
        var option='<option value="0">== selecione ==</option>';
        var id = jsonDOC[i].id;
        var descricao = jsonDOC[i].descricao;
        option+='<option value="'+id+'#'+descricao+'">'+descricao+'</option>';
        escreverDadosTabela(id, nome, preco);
    }
    $("#tipoProduto").html(option);
     $("#tipoProduto").formSelect();
}

function buscarProduto()
{
    $.get("lib/json/produtosCafe.json", function (json)
    {
        lerJSON(json)
    }, "json");
}