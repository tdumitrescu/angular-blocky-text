describe('blocky-text directive', function() {

  beforeEach(module('tdumitrescu.blocky-text'));

  function prepareEl(s, elHtml) {
    inject(function($compile, $rootScope) {
      myStr   = s;
      myChars = myStr.split('');

      scope = $rootScope;
      scope.myExpr = myStr;
      el = $compile(elHtml)(scope);
      scope.$digest();

      spans = el.find('span');
    });
  }

  describe('with no divider specified', function() {
    beforeEach(function() {
      prepareEl("halloworld", "<td-blocky-text text='myExpr'/>");
    });

    it('separates the text into span elements', function() {
      expect(spans.length).toBe(myStr.length);
    });

    it('inserts the correct characters into the elements', function() {
      myChars.forEach(function(span, i) {
        expect(spans.eq(i).text().replace(/ /g, '')).toBe(myStr[i]);
      });
    });

    it('applies the td-blocky-text-char class to all spans', function() {
      myChars.forEach(function(span, i) {
        expect(spans.eq(i).hasClass('td-blocky-text-char')).toBe(true);
      });
    });
  });

  describe('with a divider char', function() {
    beforeEach(function() {
      prepareEl("hallo/world", "<td-blocky-text text='myExpr' divider='/'/>");
    });

    it('separates the text into span elements including the divider', function() {
      expect(spans.length).toBe(myStr.length);
    });

    it('adds the divider class to the correct spans', function() {
        expect(spans.eq(5).hasClass('divider')).toBe(true);
    });

    it('does not add the divider class to the other spans', function() {
        expect(spans.eq(0).hasClass('divider')).toBe(false);
        expect(spans.eq(6).hasClass('divider')).toBe(false);
    });
  });
});
