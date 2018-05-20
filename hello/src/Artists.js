import React, { Component } from 'react';
import './Artists.css';

class Artist extends Component {
  render() {
    return (
      <div className="Artist">
        <ul className="Artist-list">
			<li>
				<img src="https://lastfm-img2.akamaized.net/i/u/770x0/bebae84e053e40d925ef6243762f6fed.jpg" />
				<br />
				<span>Artist: Rick Astley</span>
			</li>
			<li>
				<img src="https://lastfm-img2.akamaized.net/i/u/770x0/bebae84e053e40d925ef6243762f6fed.jpg" />
				<br />
				<span>Artist: Rick Astley</span>
			</li>
			<li>
				<img src="https://lastfm-img2.akamaized.net/i/u/770x0/bebae84e053e40d925ef6243762f6fed.jpg" />
				<br />
				<span>Artist: Rick Astley</span>
			</li>
		</ul>
      </div>
    );
  }
}

export default Artist;
