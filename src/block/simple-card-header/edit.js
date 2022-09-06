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
					color: { background: '#d9d9d9' },
				},
			},
			[
				[
					'core/heading',
					{
						level: 3,
						fontSize: 'medium',
						style: {
							spacing: {
								margin: {
									top: '0px',
									right: '0px',
									bottom: '0px',
									left: '0px',
								},
							},
						},
					},
				],
			],
		],
	];
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={['core/group', 'core/heading']}
				template={BLOCK_TEMPLATE}
			/>
		</div>
	);
}
