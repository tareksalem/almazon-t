$(document).ready(function () {
	// variables for toggling in seller dashboard
	var  toggleSharedProducts = $("#toggle-shared-products");
	var contSharedProducts = $("#cont-shared-products");
	var togglePostProduct = $("#toggle-post-product");
	var contPostProduct = $("#cont-post-product");
	var toggleMessages = $("#toggle-messages");
	var contMessages = $("#cont-messages");
	var toggleCredit = $("#toggle-credit");
	var contCredit = $("#cont-credit");
	var toggleOrders = $("#toggle-orders");
	var contSellerOrders = $("#container-seller-orders");
	$(".list-group .list-group-item").on("click", function () {
		$(this).addClass('active').siblings().removeClass("active");
	});
	toggleSharedProducts.on("click", function () {
		contSharedProducts.slideToggle(200).siblings(".toggling-cont").slideUp(200);
	});
	togglePostProduct.on("click", function () {
		contPostProduct.slideToggle(200).siblings(".toggling-cont").slideUp(200);
	});
	toggleOrders.on("click", function () {
		contSellerOrders.slideToggle(200).siblings(".toggling-cont").slideUp(200);
	});
	//end toggling of seller dashboard
	 // this is a fucntion of category input field
	$(".new-product-options .new-product-options-title").hover(function () {
		$(".new-product-options .shake").addClass('shake').fadeIn(400);
	});
	$(".new-product-options .shake .new-product-option").on("click", function () {
		var categoryName = $(this).text();
		$(".new-product-options .shake input").val(categoryName);
		$(this).css({"color": "orangered"}).siblings().css({"color":"black"});
		$(this).hover(function () {
			$(this).toggleClass('.to');
		});
		$(".categoryName p").text(categoryName);
	});
	$(".remove-category").on("click", function () {
		$(".categoryName p").text("");
		$(".new-product-options .shake input").val("");
		$(".new-product-options .shake .new-product-option").css({"color":"black"});
	});
	//end function of category name input
	// fucntion of brand input field
	$(".new-product-options-brand").hover(function () {
		$(".new-product-options .shak").addClass('shak').fadeIn(400);
	});
	$(".new-product-options .shak .new-product-brand").on("click", function () {
		var brandName = $(this).text();
		$(".new-product-options .shak input").val(brandName);
		$(this).css({"color": "orangered"}).siblings().css({"color":"black"});
		$(this).hover(function () {
			$(this).toggleClass('.to');
		});
		$(".brandName p").text(brandName);
	});
	$(".remove-brand").on("click", function () {
		$(".brandName p").text("");
		$(".new-product-options .shak input").val("");
		$(".new-product-options .shak .new-product-brand").css({"color":"black"});
	});
	// end fucntion of choosign a brand name
	// start fuinction for upload the images of new product
	$("#uploadNewProductImage1").on("click", function () {
		$("#newProductImage1").click();
	});
	$("#newProductImage1").on("change", function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			$("#livePreview1").fadeIn(200).attr("src", reader.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	});
	$("#uploadNewProductImage2").on("click", function () {
		$("#newProductImage2").click();
	});
	$("#newProductImage2").on("change", function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			$("#livePreview2").fadeIn(200).attr("src", reader.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	});
	$("#uploadNewProductImage3").on("click", function () {
		$("#newProductImage3").click();
	});
	$("#newProductImage3").on("change", function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			$("#livePreview3").fadeIn(200).attr("src", reader.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	});
	// end uploading images of new product
	// function to check if the field of form of post new product is completed or not 
	var productTitle = $("#productTitle");
	var productDescription = $("#productDescription");
	var categoryName = $("#categoryName");
	var productBrandName = $("#productBrandName");
	var productAmount = $("#productAmount");
	var productGram = $("#productGram");
	var productStandard = $("#productStandard");
	var productNumber = $("#productNumber");
	var newProductImage1 = $("#newProductImage1");
	var newProductImage2 = $("#newProductImage2");
	var newProductImage3 = $("#newProductImage3");
	var newProductDescount = $("#productDescount");
	var productPrice = $("#productPrice");
	var as;
	if (productTitle.val() && productDescription.val() && categoryName.val() && newProductImage1.val() && productBrandName.val() && productNumber.val() && productStandard.val() && productGram.val() && productAmount.val() && productPrice.val()) {
		as = true;
	}
	if (as == true) {
		$("#fake").css({"display":"none"});
		$(".real").css({"display":"block"});
	} else {
		as = false;
	}
		$("#fake").hover(function () {
			var as;
			if (productTitle.val() && productDescription.val() && categoryName.val() && newProductImage1.val() && productBrandName.val() && productNumber.val() && productStandard.val() && productGram.val() && productAmount.val() && productPrice.val()) {
				as = true;
			}
			if (as == true) {
				$("#fake").css({"display":"none"});
				$(".real").css({"display":"block"});
			} else {
				$("#fake").fadeIn(200);
			}
		});
		$("#fake").click(function () {
			alert("من فضلك أكمل باقي الحقول");
		});
		
		$(".post-new-product input").keypress(function (e) {
			if (e.keyCode == 13 ) {
				if (as == false) {
					alert("هل كل الحقزل مملزئة");
					$(".post-new-product form").attr('method', "get");
				}
			}
		});
		productPrice.focus(function () {
			$(".input-price-alert").text("رجى ادخال السعر أرقام فقط").fadeIn(200);
		});
		newProductDescount.focus(function () {
			$(".input-descount-alert").text("يرجى إدخال السعر داخل العرض بالأرقام فقط").fadeIn(200);
		});
		productAmount.focus(function () {
			$(".input-amount-alert").text("يرجى إدخال الكمية بالأرقام فقط").fadeIn(200);
		});
		$("#productDescountDegree").focus(function () {
			$(".input-degree-descount-alert").text("يرجى إدخال القيمة بالنسبة المئوية").fadeIn(200);
		});
		// end the checking function
		// this is a fucntion to slide toggle to edit the products that posted
		$(".fa-pencil-square").on("click", function () {
			$(this).parents(".seller-posted-products").children('.seller-update-product').slideToggle(300);
		});
		// functions to chang the product images
	$(".seller-change-image").on("click", function () {
		$(this).parents(".form-image").children(".product-new-image").click();
	});
	$(".product-new-image").on("change", function (event) {
		var reader = new FileReader();
		var inputImage = $(this);
		reader.onload = function () {
			$(inputImage).parents(".form-image").children('.product-image').children('img').attr("src", reader.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	});
	$(".fa-times").on("click", function () {
		$(this).parents(".seller-posted-products").children('.seller-product-delete').children('input').click();
	});
});


 //|| $("#productDescription").val("") || $("#categoryName").val("") || $("#newProductImage").val("")
