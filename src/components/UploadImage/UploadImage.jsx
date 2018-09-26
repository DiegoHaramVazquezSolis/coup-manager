import React, { Component } from 'react';
import './UploadImage.css';

class UploadImage extends Component {
    render() {
        return (
            <div>
                <div className="custom-file">
                        <input type="file" className="custom-file-input" name="image" id="image" onChange={this.props.handleUpload.bind(this)} />
                        <label className="custom-file-label" htmlFor="image">{this.props.fileLabel}</label>
                </div>
                <div class="progress">
                    <br/>
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: this.props.uploadProgress.toString()+"%"}} aria-valuenow={this.props.uploadProgress} aria-valuemin="0" aria-valuemax="100"></div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default UploadImage;
