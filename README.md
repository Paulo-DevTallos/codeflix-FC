## O que são entidades?
- Chamadas de enterprise Business Rules -> Entidades. São o inicio do desenvolvimento e é a camada central que engloba as regras cruciais de negócios, 
ou seja, são objetos que organizam essas regras permitindo que a gente acesse e processe essas informações.
- São identificáveis por uma informação única dentro de nosso sistema (id)
- É diferente de um padrão de entidade criado em ORMs, pois possuem expressividades dentro da aplicação pois possuem regras de negocios e são agnosticas
a frameworks e a linguagens de programação.
- Possuem regras de negócios mais puristas.
- É considerado o coração da aplicação, pois provê os recursos sobre os a regra da aplicação é regida.

## O que são useCases? (caso de uso)
- Centralizam regras de negócios de acordo com a necessidade da aplicação como apontar operações que podem envolver banco de dados, ou realizar publicação
em serviços de mensagerias, por exemplo...
- Se integram com as regras construídas na entidade da aplicação.

## Controllers
- Acesssam os casos de uso

## O que são domain experts? (Especialista de dominio)
* São pessoas que contém o conhecimento da regra de negócio, ou seja, são pessoas que detem o conhecimento de como a aplicação deve funcionar de acordo com 
seu dia a dia de trabalho.
Ex: Em um setor administrativo temos rotinas, passo a passo relacionado gestão e arquivamento de documentos.

## Observações
- As alterações em camadas mais externas não devem interferir nas camadas mais internas.
- As camadas precisam do que chamamos de limites arquiteturais.
    * Ou seja, a camada de Entidade nunca deverá ser alterada
    * A camada de useCase tende a mudar muito pouco relacionado as camadas mais externas.
- Linguagem Ubiqua -> é uma linguagem descritiva sobre as representações repassadas pelo domain expect
- Livre-se do FDD (Desenvolvimento orientado a framework)
- Expressividade é o mesmo que regra de negocios

## Informações do diagrama de caso de uso:
- Admin:
    * Criar categoria
    * Atualizar categoria
    * Excluir categoria
    * Consultar uma categoria
    * Consultar categorias

# Diagrama de classe - Montagem da Entidade
- Entity Category
    * Category: id uuid
    * name string
    * description string
    * is_active boolean
    * created_at date

- Category : Create()
- Category : Update()
- Category : Activate()
- Category : Deactivate()
- Category : delete()