import React, { Component } from "react";
import { client } from "./Client";
import { Route } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";
import Album from './Album';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    client.setToken('D6W69PRgCoDKgHZGJmRUNA');
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
            <VerticalMenu
              albums={this.state.albums}
            />
          </div>
          <div className='ui ten wide column'>
            <Route
              path='/albums/:albumId'
              render={({ match }) => {
                console.log('12321', match);
                const album = this.state.albums.find(
                  (a) => a.id === match.params.albumId
                );
                console.log('12312', album);
                return (
                  <Album
                    album={album}
                  />
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AlbumsContainer;
