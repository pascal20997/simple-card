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
							top: '0px',
							right: '0px',
							bottom: '0px',
							left: '0px',
						},
						blockGap: '0px',
					},
				},
			},
			[
				['pascal20997/simple-card-header'],
				['pascal20997/simple-card-body'],
			],
		],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={BLOCK_TEMPLATE} />
		</div>
	);
}
