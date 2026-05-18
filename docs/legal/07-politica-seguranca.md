---
versao: 1.0
dataDeVigencia: "18/05/2026"
---

# Política de Segurança da Informação

## 1. Compromisso com a Segurança

A segurança dos seus dados é uma prioridade máxima para a **OSDigitalPlus** e para o serviço **OS Digital+**. Esta política descreve as medidas técnicas e organizacionais que implementamos para proteger suas informações contra acessos não autorizados, perdas, alterações ou qualquer forma de tratamento inadequado.

## 2. Medidas Técnicas de Segurança

### 2.1. Criptografia

- **Criptografia em Trânsito:** Toda a comunicação entre o seu dispositivo e nossos servidores é protegida com criptografia TLS (Transport Layer Security) 1.2 ou superior. Isso garante que os dados não possam ser interceptados durante a transmissão.
- **Criptografia em Repouso:** Os dados armazenados em nossos bancos de dados, incluindo suas informações e as de seus clientes, são criptografados em repouso, adicionando uma camada extra de proteção contra acesso físico não autorizado aos servidores.

### 2.2. Segurança da Infraestrutura

- **Provedor de Nuvem:** Nossa infraestrutura é hospedada em provedores de nuvem de ponta (como Vercel e AWS), que possuem certificações de segurança reconhecidas mundialmente (ISO 27001, SOC 2, etc.) e oferecem alta disponibilidade e resiliência.
- **Isolamento de Rede:** Utilizamos firewalls, redes virtuais privadas (VPCs) и grupos de segurança para isolar nossos ambientes e controlar estritamente o tráfego de rede, minimizando a superfície de ataque.

### 2.3. Backups e Recuperação de Desastres

- **Backups Regulares:** Realizamos backups automáticos e regulares dos bancos de dados para garantir a recuperação das informações em caso de falha ou desastre.
- **Testes de Recuperação:** Testamos periodicamente nossos procedimentos de backup e recuperação para garantir sua eficácia.

## 3. Medidas Organizacionais de Segurança

### 3.1. Controle de Acesso

- **Acesso Restrito:** O acesso aos dados de produção é estritamente limitado a um pequeno número de funcionários autorizados da **OSDigitalPlus** que necessitam desse acesso para fins de suporte, manutenção ou investigação de incidentes.
- **Princípio do Menor Privilégio:** As permissões de acesso são concedidas com base no princípio do menor privilégio, garantindo que cada usuário tenha acesso apenas às informações e funcionalidades estritamente necessárias para desempenhar seu papel.
- **Autenticação Multifator (MFA):** Exigimos o uso de MFA para todos os acessos administrativos aos nossos sistemas críticos.

### 3.2. Gestão de Senhas

- **Armazenamento Seguro:** As senhas dos usuários são armazenadas em formato de hash criptográfico, utilizando algoritmos modernos e salting, o que impede que sejam revertidas para o formato original.
- **Políticas de Senha:** Incentivamos e, em alguns casos, podemos exigir que os usuários criem senhas fortes para acessar o Serviço.

### 3.3. Gestão de Incidentes

Temos um processo estabelecido para identificar, responder e gerenciar incidentes de segurança. Em caso de um incidente que afete seus dados, nos comprometemos a notificá-lo em conformidade com os requisitos da LGPD e nosso **Acordo de Processamento de Dados (DPA)**.

## 4. Segurança no Desenvolvimento

- **Revisão de Código:** Nossos processos de desenvolvimento incluem revisões de código para identificar e corrigir vulnerabilidades de segurança antes que o software seja implantado em produção.
- **Análise de Dependências:** Monitoramos continuamente as bibliotecas de terceiros que utilizamos em busca de vulnerabilidades conhecidas.

## 5. Sua Responsabilidade

A segurança é uma responsabilidade compartilhada. Pedimos que você contribua para a segurança da sua conta, adotando as seguintes práticas:

- Use uma senha forte e única para sua conta no OS Digital+.
- Não compartilhe suas credenciais de login com ninguém.
- Deslogue-se do sistema ao final de cada sessão, especialmente em computadores compartilhados.
- Mantenha seus dispositivos e navegadores atualizados.

## 6. Contato

Se você tiver alguma dúvida sobre nossa segurança ou se acredita ter encontrado uma vulnerabilidade, entre em contato conosco imediatamente:

- **Empresa:** OSDigitalPlus
- **E-mail:** contato@osdigitalplus.com.br
