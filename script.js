/**
 * LANDING PAGE — DRA. HANGRA LEITE PEÇANHA
 * Advocacia e Consultoria Jurídica | Direito de Família e Sucessões
 * Script Base e Utilitários de Navegação (Prompt 00)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Garantir segurança e comportamento em links externos (como WhatsApp)
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // 2. Atualização automática do ano no rodapé (quando elemento presente)
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. Log de inicialização do projeto no console
  console.log(
    '%c Hangra Leite Peçanha — Advocacia e Consultoria Jurídica %c Sistema visual configurado com sucesso. ',
    'background: #321D17; color: #FAF5F0; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
    'background: #B07A30; color: #FFFFFF; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});
