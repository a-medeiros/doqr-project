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
    })

    it('fills and submits form successfully', () => {
      cy.get('[data-cy="name-input"]').type('João Silva')
      cy.get('[data-cy="email-input"]').type('joao@example.com')
      cy.get('[data-cy="cpf-input"]').type('12345678901')
      cy.get('[data-cy="phone-input"]').type('11999887766')
      cy.get('[data-cy="date-of-birth-input"]').type('1990-05-15')
      cy.get('[data-cy="type-of-hiring-select"]').select('CLT')
      cy.get('[data-cy="status-select"]').select('false')
    })
  })

  context('Edit Employee Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/employee/edit/1')
    })

    it('renders form in edit mode', () => {
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
    })
  })
})
