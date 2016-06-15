import React, {Component} from 'react';

class VideoListItem extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div className="cursor" key={this.props.video.id.videoId} onClick={() => this.props.onVideoSelect(this.props.video)}>
				<div className="media-left">
					{/*<a href={`https://www.youtube.com/watch?v=${this.props.video.id.videoId}`}>*/}
					<img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="..."/> {/*</a>*/}
				</div>
				<div className="media-body">
					<h4 className="media-heading">{this.props.video.snippet.title}</h4>
					
				</div>
			</div>
		);
	}
}

export default VideoListItem;
