const HomePage = require('../support/page-object/youtube/homepage');
const Trending = require('../support/page-object/youtube/trending');

describe('YouTube E2E', function () {
    it('Youtube Movies Trending', function () {
        HomePage.visit();
        cy.wait(2000);
        HomePage.trendingSection();
        cy.wait(2000);
        Trending.trendingGameSort3();
    })
}
)