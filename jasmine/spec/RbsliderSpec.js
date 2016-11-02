describe("Rbslider", function() {

	var sliderDiv, gallery;

 beforeEach(function() {
  var fixture = setFixtures('<div><div id="carousel"><ul><li><img class="img-responsive" src="https://c4.staticflickr.com/6/5336/30720520915_530a092960_k.jpg"></li><li><img class="img-responsive" src="https://c2.staticflickr.com/9/8338/29660612641_c7a7be2788_k.jpg"></li><li><img class="img-responsive" src="https://c3.staticflickr.com/6/5774/30677923466_65aa1df9db_k.jpg"></li></ul></div></div>');

  sliderDiv = $('#carousel');
  gallery = sliderDiv.rbslider({
    autoplay: false
  });
});

 afterEach(function () {
   $('.carousel').remove();
 });

 it('Gallery DOM element should be available', function () {
   expect(sliderDiv).toExist();
 });

 it('Should be able to init gallery plugin to use', function () {
  expect(gallery).toBeInDOM();
});

 it('HTML gallery should have more than 2 images [for testing]', function () {
  var imgCnt = [];
  sliderDiv.find('img').each(function(k,v) {
    v = 1;
    imgCnt.push(v);
  });
  expect(imgCnt.length).toBeGreaterThan(2);
});

 describe("Button Click Event Tests", function() {
  var spyEvent;

  it ("Should invoke the Next button click event in gallery.", function() {
   spyEvent = spyOnEvent('a.rbslider-arrow.next', 'click');
   $('a.rbslider-arrow.next').trigger( "click" );

   expect('click').toHaveBeenTriggeredOn('a.rbslider-arrow.next');
   expect(spyEvent).toHaveBeenTriggered();
 });

  it ("Should invoke the Prev button click event in gallery.", function() {
   spyEvent = spyOnEvent('a.rbslider-arrow.prev', 'click');
   $('a.rbslider-arrow.prev').trigger( "click" );

   expect('click').toHaveBeenTriggeredOn('a.rbslider-arrow.prev');
   expect(spyEvent).toHaveBeenTriggered();
 });

  it ("Should change gallery images on Next button click.", function() {
    var firstImg = $('ul > li.rbslider-active').find('img').attr('src');
    spyEvent = spyOnEvent('a.rbslider-arrow.next', 'click');
    $('a.rbslider-arrow.next').trigger( "click" );
    var afterImg = $('ul > li.rbslider-active').find('img').attr('src');
    expect(firstImg).not.toEqual(afterImg);
  }); 

  it ("Should change gallery images on Prev button click.", function() {
    var firstImg = $('ul > li.rbslider-active').find('img').attr('src');
    spyEvent = spyOnEvent('a.rbslider-arrow.prev', 'click');
    $('a.rbslider-arrow.prev').trigger( "click" );
    var afterImg = $('ul > li.rbslider-active').find('img').attr('src');
    expect(firstImg).not.toEqual(afterImg);
  });  

});

});