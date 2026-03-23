import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-f">VERBO</div>
          <p>Internet via satélite LEO para todo o Brasil. Conectividade onde outros não chegam.</p>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <Link href="/sobre">Sobre a VERBO</Link>
          <a>Missão e valores</a>
          <a>Parceiros</a>
          <a>Imprensa</a>
        </div>
        <div className="footer-col">
          <h4>Soluções</h4>
          <a>Agronegócio</a>
          <a>Governo</a>
          <a>Logística</a>
          <a>Empresas</a>
        </div>
        <div className="footer-col">
          <h4>Suporte</h4>
          <a href="mailto:contato@verbo.com.br">contato@verbo.com.br</a>
          <a>Central de ajuda</a>
          <a>Status da rede</a>
          <Link href="/politicas">Políticas</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 VERBO Telecomunicações. Todos os direitos reservados.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/politicas">Privacidade</Link>
          <a>Termos de uso</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  )
}
