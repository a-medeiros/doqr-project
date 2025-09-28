describe('Employee Form', () => {
  context('Create Employee Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/employee/new')
    })

    it('renders form with all fields', () => {
      cy.get('h1').should('contain.text', 'Cadastrar Funcionário')
      cy.get('[data-cy="employee-form"]').should('exist')
      cy.get('[data-cy="name-input"]').should('exist')
      cy.get('[data-cy="email-input"]').should('exist')
      cy.get('[data-cy="cpf-input"]').should('exist')
      cy.get('[data-cy="phone-input"]').should('exist')
      cy.get('[data-cy="date-of-birth-input"]').should('exist')
      cy.get('[data-cy="type-of-hiring-select"]').should('exist')
      cy.get('[data-cy="status-select"]').should('exist')
      cy.get('[data-cy="create-button"]').should('contain.text', 'Cadastrar')
    })

    it('shows validation errors for empty fields', () => {
      cy.get('[data-cy="create-button"]').click()
      cy.contains('Nome é obrigatório').should('be.visible')
      cy.contains('E-mail inválido').should('be.visible')
      cy.contains('CPF é obrigatório').should('be.visible')
      cy.contains('Celular é obrigatório').should('be.visible')
      cy.contains('Data de nascimento é obrigatória').should('be.visible')
      cy.contains('Tipo de contratação é obrigatório').should('be.visible')
    })

    it('fills and submits form successfully', () => {
      cy.intercept('POST', '**/employees', req => {
        expect(req.headers['content-type']).to.include('application/json')
        expect(req.body).to.include({
          name: 'João Silva',
          email: 'joao@example.com',
          typeOfHiring: 'CLT',
          status: false,
          cpf: '12345678901',
          phone: '11999887766',
          dateOfBith: '1990-05-15',
        })
        req.reply({ statusCode: 201, body: { id: 123 } })
      }).as('createEmployee')

      cy.get('[data-cy="name-input"]').type('João Silva')
      cy.get('[data-cy="email-input"]').type('joao@example.com')
      cy.get('[data-cy="cpf-input"]').type('12345678901')
      cy.get('[data-cy="phone-input"]').type('11999887766')
      cy.get('[data-cy="date-of-birth-input"]').type('1990-05-15')
      cy.get('[data-cy="type-of-hiring-select"]').select('CLT')
      cy.get('[data-cy="status-select"]').select('false')

      cy.get('[data-cy="create-button"]').click()
      cy.wait('@createEmployee')
      cy.contains('Funcionário cadastrado com sucesso').should('be.visible')

      cy.get('[data-cy="name-input"]').should('have.value', '')
      cy.get('[data-cy="email-input"]').should('have.value', '')
      cy.get('[data-cy="cpf-input"]').should('have.value', '')
      cy.get('[data-cy="phone-input"]').should('have.value', '')
      cy.get('[data-cy="date-of-birth-input"]').should('have.value', '')
      cy.get('[data-cy="type-of-hiring-select"]').should('have.value', '')
      cy.get('[data-cy="status-select"]').should('have.value', 'true')
    })
  })

  context('Edit Employee Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/employee/edit/1')
    })

    it('renders form in edit mode, fills and submits form successfully', () => {
      cy.get('h1').should('contain.text', 'Editar Funcionário')
      cy.get('[data-cy="employee-form"]').should('exist')

      cy.get('[data-cy="name-input"]').should('have.value', 'Ana')
      cy.get('[data-cy="email-input"]').should('have.value', 'ana@example.com')
      cy.get('[data-cy="cpf-input"]').should('have.value', '12345678901')
      cy.get('[data-cy="phone-input"]').should('have.value', '12345678901')
      cy.get('[data-cy="date-of-birth-input"]').should('have.value', '2000-09-20')
      cy.get('[data-cy="type-of-hiring-select"]').should('have.value', 'CLT')
      cy.get('[data-cy="status-select"]').should('have.value', 'true')

      cy.get('[data-cy="save-button"]').should('contain.text', 'Salvar')
      cy.get('[data-cy="delete-button"]').should('contain.text', 'Excluir')

      cy.intercept('PUT', '**/employees/1', req => {
        expect(req.headers['content-type']).to.include('application/json')
        expect(req.body).to.include({
          name: 'Ana Blablabla',
          email: 'ana222@example.com',
          cpf: '12345678902',
          phone: '12345678902',
          dateOfBith: '2001-10-21',
          typeOfHiring: 'PJ',
          status: false,
        })
        req.reply({ statusCode: 200, body: { id: 1 } })
      }).as('updateEmployee')

      cy.get('[data-cy="name-input"]').clear().type('Ana Blablabla')
      cy.get('[data-cy="email-input"]').clear().type('ana222@example.com')
      cy.get('[data-cy="cpf-input"]').clear().type('12345678902')
      cy.get('[data-cy="phone-input"]').clear().type('12345678902')
      cy.get('[data-cy="date-of-birth-input"]').clear().type('2001-10-21')
      cy.get('[data-cy="type-of-hiring-select"]').select('PJ')
      cy.get('[data-cy="status-select"]').select('false')

      cy.get('[data-cy="save-button"]').click()
      cy.wait('@updateEmployee')
      cy.contains('Funcionário atualizado com sucesso').should('be.visible')
    })
  })
})
