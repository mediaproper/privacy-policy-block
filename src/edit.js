/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes: { linkTitle }, setAttributes }) {

	return (
		<div {...useBlockProps()}>
			<RichText
				tagName={ 'div' }
				href={ '#privacy-policy-pseudo-link' }
				aria-label={ __( 'Privacy policy link text', 'privacy-policy-block' ) }
				placeholder={ __( 'Privacy Policy', 'privacy-policy-block' ) }
				value={ linkTitle }
				onChange={ value => setAttributes({'linkTitle': value}) }
				allowedFormats={ [] }
				disableLineBreaks
			/>
		</div>
	);
}
