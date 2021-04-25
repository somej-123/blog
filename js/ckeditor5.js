$(document).ready(function(){
    ClassicEditor
			.create( document.querySelector( '.editor' ), {
				toolbar: {
					items: [
						'heading',
						'|',
						'bold',
						'italic',
						'link',
						'bulletedList',
						'numberedList',
						'|',
						'outdent',
						'indent',
						'|',
						'imageUpload',
						'blockQuote',
						'insertTable',
						'mediaEmbed',
						'undo',
						'redo',
						'codeBlock',
						'code',
						'fontBackgroundColor',
						'fontColor',
						'fontSize',
						'fontFamily',
						'highlight',
						'htmlEmbed',
						'horizontalLine',
						'imageInsert',
						'CKFinder'
					]
				},
				language: 'ko',
				image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side',
						'linkImage'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells'
					]
				},
				
			} )
			.then( editor => {
				window.editor = editor;
		
				
			} )
			.catch( error => {
				console.error( 'Oops, something went wrong!' );
				console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
				console.warn( 'Build id: 3px0msa1obs6-dlw3lf76w3t8' );
				console.error( error );
			} );
			
})
