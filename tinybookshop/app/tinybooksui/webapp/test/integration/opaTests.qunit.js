sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/tinybooksui/test/integration/FirstJourney',
		'my/tinybooksui/test/integration/pages/BooksList',
		'my/tinybooksui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/tinybooksui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);