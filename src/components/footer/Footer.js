import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-block">
                <div className="footer-block-text">Выполнил: Артур Сафин</div>
                <a href='mailto:rusgamehack@gmail.com&body=Артур, Вы приняты!' className="footer-block-link-mail">rusgamehack@gmail.com</a>
            </div>
            {/*Просто пока я не напишу, мне ничего на почту не присылают. Если бы не спросил, тестовое задание я бы так и не получил :( */}
            <div className="footer-block">Спасибо, что посмотрели мое<br/>тестовое задание!</div>
            <div className="footer-block">
                <div className="footer-block-text">Контакты:</div>
                    <a href='tg://resolve?domain=rusgamehack' className="footer-block-link-mail">Tg: @rusgamehack</a>
                    <a href='tel:+79639079224' className="footer-block-link-mail">+7(963)-907-92-24</a>
                    <a href='tel:+79964016722' className="footer-block-link-mail">+7(996)-401-67-22</a>
                </div>
        </footer>
    )
}
export default Footer;