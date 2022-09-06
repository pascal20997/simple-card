import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

export default function edit() {
	const BLOCK_TEMPLATE = [
		[
			'core/group',
			{
				style: {
					spacing: {
						padding: {
							top: '.5em',
							right: '.5em',
							bottom: '.5em',
							left: '.5em',
						},
					},
					color: { background: '#eeeeee' },
				},
			},
		],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={BLOCK_TEMPLATE} />
		</div>
	);
}
