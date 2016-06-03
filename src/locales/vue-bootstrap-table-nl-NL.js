/**
 * Bootstrap Table Dutch translation
 * Author: Your Name <info@a2hankes.nl>
 */
(function () {
    'use strict';

    BootstrapTable.locales['nl-NL'] = {
        formatLoadingMessage: function () {
            return 'Laden, even geduld...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' records per pagina';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' record' + ((totalRows > 1) ? 's' : '');
        },
        formatDetailPagination: function (totalRows) {
            return 'Toon ' + totalRows + ' record' + ((totalRows > 1) ? 's' : '');
        },
        formatSearch: function () {
            return 'Zoeken';
        },
        formatNoMatches: function () {
            return 'Geen resultaten gevonden';
        },
        formatRefresh: function () {
           return 'Vernieuwen';
        },
        formatToggle: function () {
          return 'Omschakelen';
        },
        formatColumns: function () {
          return 'Kolommen';
        },
        formatAllRows: function () {
          return 'Alle';
        }
    };

    $.extend(BootstrapTable.defaults, BootstrapTable.locales['nl-NL']);

})();
