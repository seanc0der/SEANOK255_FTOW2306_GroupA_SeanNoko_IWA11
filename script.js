// script.js
const orders = document.querySelectorAll("dl");

/**
 * Gets the "dd" element node from the HTML DOM and returns it.
 * @param {string} item Data attribute name without the 'data-' prefix.
 * @param {number} orderNum The order number which will be used to traverse through the DOM to the corresponding "dd" element node
 * @returns {object} The "dd" element node
 */
const getElement = function (item, orderNum) {
	return orders[orderNum - 1]
		.querySelector(`.${item.toLowerCase()}`)
		.querySelector("dd");
};

/**
 * Gets and returns the value of the data attribute property.
 * @param {string} item Data attribute name without the 'data-' prefix.
 * @param {number} orderNum The order number which will be used to traverse through the DOM to the corresponding data attribute key/value pair.
 * @returns {string} The value of the data attribute property.
 */
const attributeValue = function (item, orderNum) {
	if (item === "status") {
		isDelivered = orders[orderNum - 1].getAttribute("data-delivered");
		return isDelivered === "true" ? "Delivered" : "Pending";
	} else {
		return orders[orderNum - 1].getAttribute(`data-${item}`);
	}
};

/**
 * Takes in an Object and iterates over each property key, wherein its assigned element node's ("dd") content is updated via the 'attributeValue' function's return value.
 * @param {object} orders The object to be parsed (orders)
 * @param {number} orderNum The order number which will be used via .notation to update the value of each property key of the parsed object.
 */
const modifyTextContent = function (orders, orderNum) {
	for (item in orders) {
		orders[item].textContent = attributeValue(item, orderNum);
	}
};

const orderOne = {
	biscuits: getElement("biscuits", 1),
	donuts: getElement("donuts", 1),
	pancakes: getElement("pancakes", 1),
	status: getElement("status", 1),
};

const orderTwo = {
	biscuits: getElement("biscuits", 2),
	donuts: getElement("donuts", 2),
	pancakes: getElement("pancakes", 2),
	status: getElement("status", 2),
};

const orderThree = {
	biscuits: getElement("biscuits", 3),
	donuts: getElement("donuts", 3),
	pancakes: getElement("pancakes", 3),
	status: getElement("status", 3),
};

modifyTextContent(orderOne, 1);
modifyTextContent(orderTwo, 2);
modifyTextContent(orderThree, 3);
