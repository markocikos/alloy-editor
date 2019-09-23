module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['liferay/react'],
	rules: {
		'require-jsdoc': 'warn',
		'new-cap': [
			'error',
			{
				capIsNewExceptions: [
					'ButtonActionStyle',
					'ButtonCfgProps',
					'ButtonCommand',
					'ButtonCommandActive',
					'ButtonKeystroke',
					'ButtonProps',
					'ButtonStateClasses',
					'ButtonStyle',
					'ToolbarButtons',
					'WidgetArrowBox',
					'WidgetDropdown',
					'WidgetExclusive',
					'WidgetFocusManager',
					'WidgetPosition',
				],
				newIsCapExceptions: [
					'CKEDITOR.command',
					'CKEDITOR.dom.comment',
					'CKEDITOR.dom.documentFragment',
					'CKEDITOR.dom.element',
					'CKEDITOR.dom.elementPath',
					'CKEDITOR.dom.event',
					'CKEDITOR.dom.node',
					'CKEDITOR.dom.nodeList',
					'CKEDITOR.dom.range',
					'CKEDITOR.dom.rangeList',
					'CKEDITOR.dom.selection',
					'CKEDITOR.dom.text',
					'CKEDITOR.dom.walker',
					'CKEDITOR.dom.window',
					'CKEDITOR.htmlParser.basicWriter',
					'CKEDITOR.htmlParser.element',
					'CKEDITOR.htmlParser.filter',
					'CKEDITOR.htmlParser.fragment.fromHtml',
					'CKEDITOR.style',
					'CKEDITOR.template',
				],
			},
		],
		'no-inner-declarations': 'off',
		'no-invalid-this': 'warn',
		'react/display-name': 'warn',
		'react/no-find-dom-node': 'warn',
		'react/no-string-refs': 'warn',
		'react/prop-types': 'warn',
		'valid-jsdoc': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		AlloyEditor: true,
		CKEDITOR: true,
		Liferay: true,
	},
};
