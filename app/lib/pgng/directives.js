'use strict';

angular.module('pgng.directives',[])
	.directive('pgngTabs', function() {
		return {
			restrict: 'A',
			link: function(scope,elm,attrs) { }
		}
	})
	.directive('pgngTabs', function() {
    return {
        restrict:'A',
        link: function(scope,element,attrs) {
            var tabs = element.children();
            var content = element.next('ul');
            var select = function(id) {                
                var selected = null;
                content.removeClass('active');   
                _.each(tabs, function(e) {                     
                    var t = angular.element(e);
                    if(t.attr('data-tab') == id) selected = t;
                });
                _.each(content.children(), function(e) { 
                    var c = angular.element(e);
                    c.removeClass('active');
                    if(c.attr('data-tab') == id) {
                        c.addClass('active');
                        //update any contained scrollers
                        var scroller = c.children('.scroll-container');
                        if(scroller.length == 1) {
                            var ul = scroller.find('ul');
                            if(ul && ul.data('iscroll')) {
                                console.log('tabs:refreshed scroller')
                                ul.data('iscroll').refresh();
                            }
                        }
                    }
                });
            }			
            _.each(tabs, function(e) {
                var dd = angular.element(e);
                e.addEventListener('click', function(e) { 
                    var id = angular.element(this).attr('data-tab');
                    tabs.removeClass('active');
                    select(id);
                    dd.addClass('active');
                    e.stopPropagation();
                    return false;
                }, false);
                if(dd.hasClass('active')) select(dd.attr('data-tab'));
            });
        }
    }
})
	
	;