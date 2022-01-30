import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid text-roboto">
          <br></br>
          &nbsp;
          <br></br>
          <div className="row">
            <div className="col-md-9">
              <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '768px'}}>
                <video
                  src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
                  controls
                >
                </video>
              </div>
            <h3><b><i>{this.props.currentTitle}</i></b></h3>
          </div>
          <div className="col-md-3 overflow-auto text-center" style={{ maxHeight: '768px', minWidth: '175px' }}>
          <h1 className="text-xl font-medium text-black">Share Your Video</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }} >
              &nbsp;
              <input type='file' accept=".mp4, .mkv, .ogg, .wmv, .mov" onChange={this.props.captureFile} style={{ width: '350px' }} />
                <div className="form-group mr-sm-3">
                  <b></b>
                  <br></br>
                  <input
                    id="videoTitle"
                    type="text"
                    ref={(input) => { this.videoTitle = input }}
                    className="form-control-lg"
                    placeholder="Title..."
                    required />
                </div>
              <button type="submit" className="py-2 px-5 hover:bg-red-700 group flex justify-center 
              items-center rounded-md btn-danger text-white text-md leading-6 text-base font-semibold shadow-md 
              rounded-lg">Upload!</button>
              &nbsp;
              <br></br>
            </form>
            <br></br>
            { this.props.videos.map((video, key) => {
              return(
                <div className="card mb-4 text-center bg-secondary mx-auto" style={{ width: 'auto'}} key={key} >
                  <div className="card-title bg-dark">
                    <small className="text-white"><b>{video.title}</b></small>
                  </div>
                  <div>
                    <p onClick={() => this.props.changeVideo(video.hash, video.title)}>
                      <video
                        src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                        style={{ width: '200px' }}
                      />
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
