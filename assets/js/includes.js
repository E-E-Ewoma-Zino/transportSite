// this script includes all partials to the page

$("header").load("/partials/_nav.html");
$("#testimonials").load("/components/testimonials.html");
$("#mymodal").load("/components/modal.html");
$("footer").load("/partials/_footer.html", ()=>{
	$("#include").prepend(`<script src="/assets/js/bootstrap.min.js"></script>`);
	$("#include").prepend(`<script src="/assets/js/popper.min.js"></script>`);
	$("#include").prepend(`<script src="/assets/js/core.min.js"></script>`);
	$("#include").prepend(`<script src="/assets/js/main.js"></script>`);
});