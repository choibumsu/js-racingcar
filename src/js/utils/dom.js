export const $get = (selector, target = document.body) =>
	target.querySelector(selector)

export const $getAll = (selector, target = document.body) =>
	target.querySelectorAll(selector)

export const $getElement = (template) => {
	const $parent = document.createElement('div')
	$parent.innerHTML = template
	return $parent.firstElementChild
}
