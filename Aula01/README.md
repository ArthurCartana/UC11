## Software Delivery

# Requisitos Funcionais
- Gestão de pedidos;
- Localização do cliente;
- Localização do pedido;
- Localização do restaurente;
- Informações do pedido;
- O sistema deve ter um meio de cancelamento do pedido e devolução do dinheiro;
- Mandar notificações sobre o estado do pedido;
- Exibir avaliações do pedido e restaurante;
-
# Requisitos não funcionais
- O sistema deve garantir a segurança das suas compras e informações pessoais no site;
- Interface intuitiva;
- Acessível em todas plataformas e redes de internet;
- O site deve fornecer diversas formas de pagamento;
- O sistema deve responder a qualquer ação do usuário em até dois segundos;
- O sistema deve suportar varios usuarios conectados ao mesmo tempo;
- O sistema deve fornecer promoções de alimentos;
-
# Teste do cadastro de usuário
- Verificar se o usuário consegue se cadastrar com dados válidos;
- Validar campos obrigatórios (nome, e-mail, senha, etc.);
- Testar cadastro com e-mail já existente;
- Verificar envio de confirmação por e-mail ou SMS;
- Testar login com dados corretos e incorretos;
- Verificar recuperação de senha;
- Garantir proteção contra dados inválidos;
-
# Teste de movimento de entrega
- Verificar atualização da localização do entregador em tempo real;
- Testar mudança de status do pedido (preparando -> em entrega -> entregue);
- Validar tempo estimado de entrega;
- Simular atraso e verificar notificação ao usuário;
- Testar cancelamento durante a entrega;
- Verificar precisão do mapa/localização;
- Testar comunicação entre cliente e entregador (se houver chat).