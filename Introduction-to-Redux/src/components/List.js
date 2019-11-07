import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";

class Ls extends Component {
	constructor(props) {
		super(props);
	}

	formItems = () => {
		return this.props.songs.map((s, index) => {
			return (
				<List.Item key={index}>
					<List.Content floated='right'>
						<Button
							onClick={() => {
								console.log(this.props, s);
								this.props.selectSong(s);
							}}>
							Select
						</Button>
					</List.Content>
					<List.Icon name='music' />
					<List.Content>
						<List.Header>{s.title}</List.Header>
						<List.Description>{s.author}</List.Description>
					</List.Content>
				</List.Item>
			);
		});
	};

	render() {
		return (
			<List divided verticalAlign='middle'>
				{this.formItems()}
			</List>
		);
	}
}

export default Ls;
