# Sistema de Cadastro e Gestão de Eventos

## Testes do sistema
| ID       | Requisito   |Descrição                              |Entrada                                                                   |Resultado Esperado              |
|:--------:|:-----------:|:-------------------------------------:|:------------------------------------------------------------------------:|:------------------------------:|
| **CT01** | `RF01`      | Cadastrar usuário com dados válidos   | Nome, email válido, senha válida, data de nascimento                     | Usuário cadastrado com sucesso |
| **CT02** | `RF01`      | Cadastrar usuário com email duplicado | Email já existente                                                       | Sistema deve impedir cadastro  |
| **CT03** | `RF01`      | Cadastrar usuário com campos vazios   | Nome, email, senha vazia, data de nascimento                             | Sistema deve impedir cadastro  |
| **CT04** | `RF02`      | Login com senha incorreta             | Email válido + senha errada                                              | Sistema deve negar acesso      |
| **CT05** | `RF02`      | Login com senha correta               | Email válido + senha correta                                             | Sistema deve permitir o acesso |
| **CT06** | `RF03`      | Cadastrar evento com dados válidos    | Nome do evento Descrição, Data do evento, Número máximo de participantes | Evento cadastrado com sucesso  |
| **CT07** | `RF03`      | Cadastrar evento com nome duplicado   | Nome já existente                                                        | Sistema deve impedir cadastro  |
| **CT08** | `RF04`      | Listar eventos com dados válidos      | Nome, Data, Número de vagas disponíveis                                  | Sistema deve retornar a lista  |
| **CT09** | ``      |