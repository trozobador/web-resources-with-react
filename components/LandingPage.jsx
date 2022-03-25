import React from 'react';

export default React.createClass({

    getAccount: function() {
        var Xrm = window.parent.Xrm;

        Xrm.WebApi.retrieveRecord("systemuser", "d97609eb-ff4e-ec11-8f8e-002248366c4e", "?$select=fullname").then(
            function success(result) {
                console.log("Retrieved values: Name: " + result.fullname );
                // perform operations on record retrieval
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    },

    render: function () {
        this.getAccount();
        return (
            <div>
                <div className='divLogo'>
                    <img src='procon_arearestrita_logo.png' />
                    <br />
                    <h3>Procons Municipais</h3>
                </div>
                <div className='divContent'>
                    <div className='divInsideContent'>
                        <ul>
                            <li className='mycss'><a href='https://bloqueio.procon.sp.gov.br/#/' target='_blank'>Bloqueio de Telemarketing (Para consumidores sem E-mail)</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=noticias'>Not&iacute;cias</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=ots'>Orienta&ccedil;&otilde;es T&eacute;cnicas</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=downloads'>Downloads</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=oficios'>Of&iacute;cios Circulares</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=fiscalizacao'>Fiscalização</a></li>
                            <li className='mycss'><a href='procons_municipais_conteudo.asp?area=usuarios'>Usu&aacute;rios</a></li>
                            <li className='mycss'><a href='http://sistemas.procon.sp.gov.br/gedoc' target='_blank'>Consulta Auto de Infração</a></li>
                            <li className='mycss'><a href='http://sistemas.procon.sp.gov.br/convenios/index.php?r=site/login' target='_blank'>Envio de Relat&oacute;rio Mensal</a></li>
                            <li className='mycss'><a href='https://sistemas.procon.sp.gov.br/procon/curso_inside_driset2020.asp?id=858' target='_blank'>Curso B&aacute;sico de Atendimento</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});
