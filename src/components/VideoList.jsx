import React, {Component} from 'react';
import VideoListItem from './VideoListItem.jsx';

class VideoList extends Component {
	constructor(props) {
		super(props);

	};

	render() {
		return (
			<div className="media">
				{this.props.videos.map((video) => <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect}/>)}
			</div>
		);
	}
}

export default VideoList;
