import * as React from 'react';

import { Button } from '../common/Button';
import { ButtonGroup } from '../common/ButtonGroup';
import { Icon } from '../common/Icon';

export interface WindowControlsProps {
	readonly handleQuit: (event: React.MouseEvent<HTMLButtonElement>) => void;
	readonly handleMinimize: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class WindowControls extends React.Component<WindowControlsProps, any> {
	constructor(props: WindowControlsProps) {
		super(props);
	}

	render() {
		return (
			<ButtonGroup>
				<Button type='primary' onClick={this.props.handleMinimize} icon={true}>
					<Icon icon='window-minimize' />
				</Button>
				<Button type='primary' onClick={this.props.handleQuit} icon={true}>
					<Icon size='18' icon='window-close' />
				</Button>
			</ButtonGroup>
		);
	}
}