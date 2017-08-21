$(document).ready(function () {
	// function to show the images of sungle product
	$(".container-single-product-other-images img").on("click", function () {
		$(".single-product-image-main .product-image-active").appendTo('.container-single-product-other-images').removeClass('product-image-active').addClass('single-product-other-image');
		$(this).removeClass('single-product-other-image').addClass('product-image-active').appendTo('.single-product-image-main');
	});
	$(".cl").on("click", function () {
		$(".single-product-image-main .product-image-active").appendTo('.container-single-product-other-images').removeClass('product-image-active').addClass('single-product-other-image');
		$(this).removeClass('single-product-other-image').addClass('product-image-active').appendTo('.single-product-image-main');
	});
	// end fucntions of images of single product
	// fucntions to increase and decrease the amount of product that ordered
	var orderAmount = document.getElementById("single-product-show-order-amount");
var increaseAmount = document.getElementById("increase-amount");
var decreaseAmount = document.getElementById("decrease-amount");
var productPrice = document.getElementById("single-product-price");
var productPriceCounter = document.getElementById("single-product-price-count"); 
var productCurrentAmount = document.getElementById("single-product-current-amount");
var productDescount = document.getElementById("single-product-price-descount");
var productDescountCount = document.getElementById("single-product-descount-count");
increaseAmount.addEventListener("click", function () {
	var amountCounter = orderAmount.value;
	amountCounter++;
	orderAmount.value = amountCounter;
	var orderAmountText = orderAmount.value;
	productPrice.textContent = productPriceCounter.textContent * orderAmountText;
	productDescount.textContent = productDescountCount.textContent * orderAmountText;
	var productAmount = productCurrentAmount.textContent.match(/[\d\.]+/g);
	var amountNumber = Number(productAmount);
	if (orderAmount.value > amountNumber) {
		orderAmount.value = amountNumber;
		productPrice.textContent = productPriceCounter.textContent * orderAmount.value;
		productDescount.textContent = productDescountCount.textContent * orderAmount.value;
	}
});
decreaseAmount.addEventListener("click", function () {
		amountCounter = orderAmount.value;
		amountCounter--;
		orderAmount.value = amountCounter;
		var orderAmountText = orderAmount.value;
	productPrice.textContent = productPriceCounter.textContent * orderAmountText;
	productDescount.textContent = productDescountCount.textContent * orderAmountText;
		if (orderAmount.value < 1) {
			orderAmount.value = 1;
			productPrice.textContent = productPriceCounter.textContent;
			productDescount.textContent = productDescountCount.textContent;
		}
	});
orderAmount.addEventListener("keyup", function () {
		productPrice.textContent = productPriceCounter.textContent * orderAmount.value;
		productDescount.textContent = productDescountCount.textContent * orderAmount.value;
	});
orderAmount.addEventListener("blur", function () {
	if (orderAmount.value < 1) {
			orderAmount.value = 1;
			productPrice.textContent = productPriceCounter.textContent;
			productDescount.textContent = productDescountCount.textContent;
		}
		var productAmount = productCurrentAmount.textContent.match(/[\d\.]+/g);
		var amountNumber = Number(productAmount);
		if (orderAmount.value > amountNumber) {
			orderAmount.value = amountNumber;
			productPrice.textContent = productPriceCounter.textContent * orderAmount.value;
			productDescount.textContent = productDescountCount.textContent * orderAmount.value;
		}
	});
	// end
	// function to check about the current amount of product

});