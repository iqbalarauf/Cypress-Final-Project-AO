const element = require('../../element/youtube.json')

class TrendingPage {
    trendingGameSort3() {
        cy.get('a').contains('Video trending').click();
        cy.wait(2000);

        cy.get('ytd-grid-video-renderer')
            .eq(2)
            .within(() => {
                cy.get('#video-title')
                    .invoke('text')
                    .then((judulTrending) => {
                        cy.wrap(judulTrending.trim()).as('judulTrending');
                    });

                cy.get('#channel-name #container a')
                    .eq(0)
                    .invoke('text')
                    .then((channelTrending) => {
                        cy.wrap(channelTrending.trim()).as('channelTrending');
                    });

                // Klik video ke-3
                cy.get('#video-title').click();
            });

        // 3. Setelah masuk ke halaman video, cek title dan channel sama
        cy.get('@judulTrending').then((judulTrending) => {
            cy.xpath(`//h1[@class='style-scope ytd-watch-metadata']`).should('contain.text', judulTrending);
        });

        cy.get('@channelTrending').then((channelTrending) => {
            cy.xpath(`//a[@class='yt-simple-endpoint style-scope yt-formatted-string']`).should('contain.text', channelTrending);
        });
    }
}

export default new TrendingPage();