const arr = [
	{name: 'giroux', tag: $('#giroux'), vidTag: $('#girouxReel')},
	{name: 'wayne', tag: $('#wayne'), vidTag: $('#wayneReel')},
	{name: 'hasek', tag: $('#hasek'), vidTag: $('#hasekReel')},
	{name: 'dualPraise', tag: $('#dualPraise'), vidTag: $('#dualPraiseReel')},
	{name: 'marty', tag: $('#marty'), vidTag: $('#martyReel')},
	{name: 'roy', tag: $('#roy'), vidTag: $('#royReel')},
	{name: 'yzerman', tag: $('#yzerman'), vidTag: $('#yzermanReel')},
	{name: 'ovie', tag: $('#ovie'), vidTag: $('#ovieReel')},
	{name: 'teemu', tag: $('#teemu'), vidTag: $('#teemuReel')}
];

$(document).ready(function () {
	
	$('.pics').on('click', function () {
		let curr = this.id;
		let position = arr.indexOf(arr[3]);
		console.log(position);
		//let currReel = '' + this.id + 'Reel';
		
		 for (let i in arr) {
			
			/*if (arr[i].name == curr || i == 3 || i == 6) {
				arr[i].tag.addClass('hidden');
				arr[i+1].tag.addClass('hidden');
				arr[i+2].tag.addClass('hidden');
			}
			
			if (i == 1 || i == 4 || i == 7) {
				arr[i-1].tag.addClass('hidden');
				arr[i].tag.addClass('hidden');
				arr[i+1].tag.addClass('hidden');
				
			}
			
			if (i == 2 || i == 5 || i == 8) {
				arr[i-2].tag.addClass('hidden');
				arr[i-1].tag.addClass('hidden');
				arr[i].tag.addClass('hidden');
				
			}*/
			
			 if (arr[i].name == this.id) {
				arr[i].tag.addClass('hidden');
				 if (arr[i].name == 'teemu') {
					arr[7].tag.addClass('hidden');
					arr[6].tag.addClass('hidden');
				}
				//console.log(arr[i+1].tag);
			} 
		} 
		
		//MAKE IT UNIVERSAL PER ROW
		//BACK BUTTON GENERATES ROW SPECIFIC ALSO
		
		/* $('#wayne').addClass('hidden');
		$('#hasek').addClass('hidden');
		$('#giroux').addClass('hidden'); */
		//$('#girouxReel').removeClass('hidden');
		console.log(this.id);
		
		//MAKE RELATIVE BACK BUTTON VISIBLE
		if (this.id == arr[0].name || this.id == arr[1].name || this.id == arr[2].name) {
			$('#topRowReturn').removeClass('hidden');
		} else if (this.id == arr[3].name || this.id == arr[4].name || this.id == arr[5].name) {
			$('#midRowReturn').removeClass('hidden');
		} else {
			$('#lowRowReturn').removeClass('hidden');
		}
		
		
	});
	
	
	$('#topRowReturn').click(function () {
		$('#topRow .pics').each(function () {
			$(this).removeClass('hidden');
			$('#girouxReel').addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
	$('#midRowReturn').click(function () {
		$('#midRow .pics').each(function () {
			$(this).removeClass('hidden');
			$('#girouxReel').addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
	$('#lowRowReturn').click(function () {
		$('#lowRow .pics').each(function () {
			$(this).removeClass('hidden');
			$('#girouxReel').addClass('hidden');
		});
		$(this).addClass('hidden');
	});
	
	
});