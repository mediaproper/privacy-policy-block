/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Define a custom icon for the block. This icon will appear in the
 * Inserter and when the user selects the block in the Editor.
 */
const privacyIcon = (
	<svg
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<path d="M27.545 15.173a.9.9 0 0 0-.821.972c.028.336.046.68.046 1.025 0 3.376-1.417 6.423-3.68 8.595a10.16 10.16 0 0 0-4.709-3.603 6.12 6.12 0 0 0 2.587-4.995c0-3.382-2.752-6.133-6.134-6.133S8.7 13.785 8.7 17.167a6.13 6.13 0 0 0 2.587 4.995 10.16 10.16 0 0 0-4.709 3.603C4.316 23.592 2.9 20.546 2.9 17.17c0-6.583 5.352-11.94 11.93-11.94q.534 0 1.043.055c.498.047.938-.304.991-.798s-.304-.938-.798-.992a12 12 0 0 0-1.236-.065C7.26 3.43 1.1 9.594 1.1 17.17c0 7.57 6.16 13.73 13.73 13.73 7.576 0 13.74-6.16 13.74-13.73 0-.396-.021-.791-.054-1.175a.9.9 0 0 0-.971-.822m-12.712-2.339c2.39 0 4.333 1.944 4.333 4.333s-1.943 4.332-4.333 4.332c-2.389 0-4.332-1.943-4.332-4.332s1.943-4.333 4.332-4.333M7.972 26.915a8.36 8.36 0 0 1 6.861-3.614 8.36 8.36 0 0 1 6.862 3.614 11.87 11.87 0 0 1-13.723 0" />
		<path d="M23.582 14.066a2.8 2.8 0 0 0 2.22 0c4.466-1.94 5.053-6.806 5.097-8.81a2.01 2.01 0 0 0-1.098-1.827l-4.215-2.118a2.01 2.01 0 0 0-1.79 0l-4.212 2.117a2 2 0 0 0-1.099 1.828c.044 2.003.628 6.869 5.097 8.81m-3.189-9.028 4.211-2.117a.2.2 0 0 1 .176-.001l4.214 2.118a.2.2 0 0 1 .107.18c-.037 1.656-.503 5.671-4.015 7.197a1 1 0 0 1-.787 0c-3.514-1.526-3.978-5.541-4.014-7.197a.19.19 0 0 1 .108-.18" />
	</svg>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon: privacyIcon,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
