import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'youtube-api-search';
import SearchBar from './components/SearchBar.jsx';
import VideoList from './components/VideoList.jsx';
import VideoDetail from './components/VideoDetail.jsx'
const API_KEY = 'AIzaSyB1UFNyQef1R8xFbDZmnlZRbdgvj6pgLgs';

Youtube({
	key: API_KEY,
	term: 'casper lee'
}, function (data) {
	console.log(data);
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.onVideoSearch('santos sp');

		this.onSubmit = this.onSubmit.bind(this);
		this.onVideoSelect = this.onVideoSelect.bind(this);
	};

	onSubmit(element) {
		Youtube({
			key: API_KEY,
			term: this.refs.searchValue.state.value
		}, (videos) => {
			this.setState({videos: videos, selectedVideo: videos[0]});
		});
	};

	onVideoSearch(term) {
		Youtube({
			key: API_KEY,
			term: term
		}, (videos) => {
			this.setState({videos: videos, selectedVideo: videos[0]});
		});
	};

	onVideoSelect(element) {
		this.setState({selectedVideo: element})
	};

	render() {
		const videoSearch = _.debounce((term) => {
			this.onVideoSearch(term)
		}, 300);

		return (
			<div className="col-md-12">
				<SearchBar ref="searchValue" onSearchTermChange={videoSearch} placeholder="search..." onSubmit={this.onSubmit}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList onVideoSelect={this.onVideoSelect} ref="videoListValue" videos={this.state.videos}/>
			</div>
		);
	}
};

ReactDOM.render(
	<App/>, document.querySelector('.container'));
