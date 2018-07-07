const arr = [
	{name: 'giroux', tag: $('#giroux'), vidTag: $('#girouxReel'), row: 'top'},
	{name: 'wayne', tag: $('#wayne'), vidTag: $('#wayneReel'), row: 'top'},
	{name: 'hasek', tag: $('#hasek'), vidTag: $('#hasekReel'), row: 'top'},
	{name: 'dualPraise', tag: $('#dualPraise'), vidTag: $('#dualPraiseReel'), row: 'mid'},
	{name: 'marty', tag: $('#marty'), vidTag: $('#martyReel'), row: 'mid'},
	{name: 'roy', tag: $('#roy'), vidTag: $('#royReel'), row: 'mid'},
	{name: 'yzerman', tag: $('#yzerman'), vidTag: $('#yzermanReel'), row: 'low'},
	{name: 'ovie', tag: $('#ovie'), vidTag: $('#ovieReel'), row: 'low'},
	{name: 'teemu', tag: $('#teemu'), vidTag: $('#teemuReel'), row: 'low'}
];

$(document).ready(function () {
	//main handler for user interactions
	$('.pics').on('click', function () {
		let curr = this.id;
		console.log(curr);
		for (let i in arr) {
			if (curr == arr[i].name) {
				//hide clicked picture and reveal video
				arr[i].tag.addClass('hidden');
				arr[i].vidTag.removeClass('hidden');
				let row = arr[i].row;
				if (row == 'top') {
					$('#topRowReturn').removeClass('hidden');
					//hide the rest of the row
					for (let j in arr) {
						if (arr[j].row == row) {
							arr[j].tag.addClass('hidden');
						}
					}
				} else if (row == 'mid') {
					$('#midRowReturn').removeClass('hidden');
					//hide the rest of the row
					for (let j in arr) {
						if (arr[j].row == row) {
							arr[j].tag.addClass('hidden');
						}
					}
				} else if (row == 'low') {
					$('#lowRowReturn').removeClass('hidden');
					//hide the rest of the row
					for (let j in arr) {
						if (arr[j].row == row) {
							arr[j].tag.addClass('hidden');
						}
					}
				}//end of internal if statement
			}//end of if statement
		}//end of for loop
	});//end of click function
	
	//behavior of the return buttons
	$('#topRowReturn').click(function () {
		$('#topRow .pics').each(function () {
			$(this).removeClass('hidden');
		});
		$('#topRow .vids').each(function () {
			$(this).addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
	$('#midRowReturn').click(function () {
		$('#midRow .pics').each(function () {
			$(this).removeClass('hidden');
		});
		$('#midRow .vids').each(function () {
			$(this).addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
	$('#lowRowReturn').click(function () {
		$('#lowRow .pics').each(function () {
			$(this).removeClass('hidden');
		});
		$('#lowRow .vids').each(function () {
			$(this).addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
});