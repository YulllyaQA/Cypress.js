describe('Тестирование https://staya.dog/', function () {
   it('Авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vir-jatsenko-julija@qa.studio')
        cy.get('.auth-form > form > [type="password"]').type('1234567890')
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})
