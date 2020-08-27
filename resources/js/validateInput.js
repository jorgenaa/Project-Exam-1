//export {validateInput}

export { validateInput };

function validateInput(patterns) 
{
	for (var i = 0; i < patterns.length; i++) 
	{
		let item = patterns[i];
		let input = DetermineAndGetElementValue(item.input);
		if (input.match(item.regex)) 
		{
		Success(item.error);
		} 
		else 
		{
		ErrorNoMatch(item.error);
		}
	}

	//private functions
	function DetermineAndGetElementValue(item) 
	{
		return GetDynamicElement(item).value;
	}
	function ErrorNoMatch(item) 
	{
		GetDynamicElement(item).classList.remove('hide');
	}

	function Success(item) 
	{
		GetDynamicElement(item).classList.add('hide');
	}
}
function GetDynamicElement(item) 
{
	let attribute = item.attribute.toLowerCase();
	if (attribute === 'id') {
		return document.getElementById(item.element);
	} else if (attribute === 'class') {
		return document.getElementsByClassName(item.element);
	} else if (attribute === 'name') {
		return document.getElementsByName(item.element);
	}
}
