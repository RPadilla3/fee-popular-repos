(function() {
    'use strict';

    angular.module('gh')
        .filter('popularity', PopularityFilter);

    function PopularityFilter() {

        return function sortByPopularity(input) {
            var pop = input.map(function getPop(item) {
                item.pop = item.stargazers_count + (item.forks * 2) + (item.open_issues / 2);
                return item;
            });

            pop = pop.sort(function sortByPop(a, b) {
                if (a.pop > b.pop) {
                    return -1;
                } else {
                    return 1;
                }
            });
            console.log(pop);
            return pop;
        };
    }
}());
