function changeImage(){let e=document.getElementById("pr1"),s=e.src;s.endsWith("UiImage.png")?e.src="assets/images/PerfTweak.png":s.endsWith("PerfTweak.png")?e.src="assets/images/UsefulTweak.png":s.endsWith("UsefulTweak.png")?e.src="assets/images/Settings.png":e.src="assets/images/UiImage.png"}jQuery(document).ready((function(e){setTimeout((function(){e("hr").addClass("grow")}),5)}));