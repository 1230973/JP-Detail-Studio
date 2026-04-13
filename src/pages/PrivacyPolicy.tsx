import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Instagram, 
  Droplets, 
  Sparkles, 
  ShieldCheck,
  ExternalLink,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-matte-black selection:bg-gold-brushed selection:text-matte-black flex flex-col">
      {/* Header */}
      <header className="py-8 border-b border-white/5 bg-[#050505] sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-silver-polished hover:text-gold-brushed transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Link>
          <div className="opacity-90">
            <h2 className="text-xl font-sans font-bold text-gold-brushed tracking-[0.2em] uppercase">
              PF Detail Studio
            </h2>
          </div>
          <div className="w-[120px] hidden md:block"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-white tracking-tight text-center">
              Política de Privacidade e Proteção de Dados Pessoais
            </h1>

            <div className="prose prose-invert prose-gold max-w-none space-y-8 text-silver-polished leading-relaxed font-light">
              
              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">1. Âmbito</h2>
                <p>A presente Política destina-se a regular o tratamento de dados pessoais a realizar pela <strong className="text-gold-brushed font-medium">PF Detail Studio</strong> por conta da utilização do seu website e prestação dos seus serviços de estética automóvel.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">2. Responsável</h2>
                <p>PF Detail Studio (José Pires & João P. Fangueiro)<br/>
                Rua Heróis do Ultramar 87, 4745-436 S. Mamede Coronado.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">3. Dados recolhidos</h2>
                <ul className="list-none space-y-2 pl-0">
                  <li><span className="text-gold-brushed mr-2">(i)</span> Dados fornecidos diretamente pelo cliente (ex: nome, contacto telefónico, matrícula/marca do veículo);</li>
                  <li><span className="text-gold-brushed mr-2">(ii)</span> Dados recolhidos no âmbito da relação comercial constituída para a prestação do serviço;</li>
                  <li><span className="text-gold-brushed mr-2">(iii)</span> Dados pessoais solicitados ao titular tratados com o seu consentimento.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">4. Objeto</h2>
                <p>O tratamento de dados pessoais inclui o registo, recolha, consulta, utilização, armazenamento e eliminação dos dados estritamente necessários à operação do negócio.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">5. Finalidade</h2>
                <ul className="list-none space-y-2 pl-0">
                  <li><span className="text-gold-brushed mr-2">(i)</span> A prestação, agendamento e faturação dos serviços solicitados pelo cliente;</li>
                  <li><span className="text-gold-brushed mr-2">(ii)</span> Contacto direto (WhatsApp, chamada) relacionado com orçamentos e estado do serviço;</li>
                  <li><span className="text-gold-brushed mr-2">(iii)</span> Envio de informações sobre campanhas ou promoções, mediante consentimento prévio.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">6. Legislação</h2>
                <p>A PF Detail Studio garante o tratamento dos dados em conformidade com a legislação em vigor (RGPD) relativa à recolha, privacidade e segurança de dados.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">7. Dados não tratados</h2>
                <p>Não processamos dados sensíveis. A PF Detail Studio não efetuará o tratamento de dados pessoais que revelem origem racial ou étnica, opiniões políticas, convicções religiosas, dados relativos à saúde, vida sexual ou orientação sexual do cliente.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">8. Registo e Aceitação</h2>
                <p>Ao contactar a PF Detail Studio ou adjudicar os nossos serviços, o cliente concorda com esta política, dando consentimento ao tratamento dos dados para os fins do ponto 5. O não fornecimento de dados básicos (como contacto) impossibilita a prestação do serviço.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">9. Recolha</h2>
                <p>A recolha ocorre:</p>
                <ul className="list-none space-y-2 pl-0 mt-2">
                  <li><span className="text-gold-brushed mr-2">(i)</span> Quando o cliente solicita uma marcação ou contacto via website, WhatsApp, redes sociais ou telefone;</li>
                  <li><span className="text-gold-brushed mr-2">(ii)</span> Quando o veículo é entregue nas nossas instalações.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">10. Consentimento</h2>
                <p>O titular dos dados dará o seu consentimento prévio para a receção de comunicações comerciais não relacionadas com um serviço em curso, podendo opor-se a qualquer momento mediante comunicação direta à PF Detail Studio.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">11. Transmissão</h2>
                <p>A PF Detail Studio não vende nem partilha os dados dos clientes com terceiros. A transmissão de dados ocorre apenas para as entidades estritamente necessárias ao cumprimento de obrigações legais (ex: Autoridade Tributária para efeitos de faturação).</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">12. Meios técnicos e organizativos</h2>
                <p>Possuímos os meios adequados para proteger os dados tratados contra acessos não autorizados. O acesso aos contactos e informações dos clientes está estritamente limitado aos gerentes da PF Detail Studio.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">13. Acesso, Alteração e Esquecimento</h2>
                <p>É conferido ao cliente o direito de aceder, alterar ou pedir a eliminação dos seus dados a qualquer momento (com exceção dos dados que a lei exija conservar), mediante comunicação direta.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">14. Duração da manutenção dos dados</h2>
                <p>A PF Detail Studio conserva os dados apenas durante o tempo estritamente necessário para a finalidade comercial ou conforme exigido pela legislação aplicável (ex: os dados de faturação são mantidos pelo prazo legal exigido).</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">15. Decisões automatizadas</h2>
                <p>Não utilizamos decisões automatizadas nem robôs para definição de perfis de clientes. Todo o tratamento comercial é manual e direto.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 tracking-wide">16. Comunicações</h2>
                <p>Qualquer questão relativa ao tratamento de dados pessoais deve ser tratada diretamente connosco através dos contactos:</p>
                <div className="mt-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-gold-brushed">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Telefones</h4>
                      <p className="text-silver-polished">914 166 956 <span className="text-white/20 mx-2">|</span> 967 368 737</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] border-t border-white/5 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-silver-polished/30 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} PF Detail Studio – Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
