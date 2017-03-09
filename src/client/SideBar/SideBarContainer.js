import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Drawer from 'material-ui/Drawer';

import SideBar from './SideBar';
import { getPlaylist } from '../Spotify/SpotifyActions';



class SideBarContainer extends React.Component {
	render(){
		console.log("workPlaylistUri:" + this.props.workPlaylistUri);
		if(this.props.openDialog === true && this.props.isLoading === true){
			return(<div></div>);
		}
		if(this.props.working === true && this.props.isLoading !== true){
			console.log("About to render worksidebar: "+this.props.workPlaylistUri)
			return(
					<SideBar uri={this.props.workPlaylistUri} />
			);
		} else if (this.props.working === false && this.props.isLoading !== true){
			return(
				<div> 
					<SideBar uri={this.props.restPlaylistUri} />
				</div>
			);
		} else {
			return(<div>WAIT FOR IT</div>);

		}
	}

}

SideBarContainer.propTypes = {
	getPlaylist:React.PropTypes.func,
	openDialog:React.PropTypes.bool,
	working:React.PropTypes.bool,
	userID:React.PropTypes.string,
	isLoading:React.PropTypes.bool,
	
	restPlaylistUri:React.PropTypes.string,
	workPlaylistUri:React.PropTypes.string,

}


function mapStateToProps(state) {
	return {
		isLoading:state.spotify.playlistUriIsLoading,
		userID:state.form.userID,
		openDialog: state.form.openDialog,
		working:state.timer.working,
		
		restPlaylistUri:state.spotify.workPlaylistUri,
		workPlaylistUri:state.spotify.workPlaylistUri,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		getPlaylist: bindActionCreators(getPlaylist, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);



