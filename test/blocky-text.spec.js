describe('blocky-text directive', function() {

  beforeEach(module('tdumitrescu.blocky-text'));

  beforeEach(inject(function($compile, $rootScope) {
    myStr = "halloworld";

    scope = $rootScope;
    scope.myExpr = myStr;
    el = $compile("<td-blocky-text text='myExpr'/>")(scope);
    scope.$digest();

    spans = el.find('span');
  }));

  it('separates the text into span elements', function() {
    expect(spans.length).toBe(myStr.length);
  });

  it('inserts the correct characters into the elements', function() {
    myStr.split('').forEach(function(span, i) {
      expect(spans.eq(i).text().replace(/ /g, '')).toBe(myStr[i]);
    });
  });
});
