describe('blocky-text directive', function() {

  beforeEach(module('tdumitrescu.blocky-text'));

  beforeEach(inject(function($compile, $rootScope) {
    myStr = "halloworld";

    scope = $rootScope;
    scope.myExpr = myStr;
    el = $compile("<td-blocky-text text='myExpr'/>")(scope);
    scope.$digest();
  }));

  it('separates the text into span elements', function() {
    expect(el.find('span').length).toBe(myStr.length);
  });
});
