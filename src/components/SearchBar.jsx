import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	};

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	};

	render() {
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					Youtube Searching
				</div>
				<div className="panel-body">
					<div className="form-group">
						<input className="form-control" onChange={event => this.onInputChange(event.target.value)} value={this.state.term} placeholder={this.props.placeholder}/>
					</div>
					<button className="btn btn-primary" onClick={this.props.onSubmit}>Buscar</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
