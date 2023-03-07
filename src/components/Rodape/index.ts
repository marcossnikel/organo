import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <div id='social-media'>
                <a href=""><img src="imagens/ig.png" alt="" /></a>
                <a href=""><img src="imagens/tw.png" alt="" /></a>
                <a href=""><img src="imagens/fb.png" alt="" /></a>
            </div>
            <img id="logo" src='imagens/logo.png' alt="Logo" />
            <h5 id="text">Desenvolvido por Marcos Nikel</h5>
        </footer>
    )
}


export default Rodape;