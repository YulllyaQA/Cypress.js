describe('Тестирование2 https://staya.dog/', function () {
   it('Неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vir-jatsenko-julija@qa.studio')
        cy.get('.auth-form > form > [type="password"]').type('0987654321')
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

    })
})
