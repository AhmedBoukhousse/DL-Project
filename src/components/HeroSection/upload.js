// import React, { Component } from 'react';
// import axios from 'axios';

// class Upload extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       photos: [],
//     };

//   this.uploadHandler = this.uploadHandler.bind(this);
//   }

//   uploadHandler(event) {
//     const data = new FormData();
//     data.append('my_image', event.target.files[0]);
//     axios.post('/upload', data)
//       .then((res) => {
//         this.setState({ photos: [res.data, ...this.state.photos] });
//       });
//   }

//   render() {
//     return  (
//       <div>
//         <div>
//           <input type="file" name="my_image" onChange={this.uploadHandler}/>
//         </div>
//         {this.state.photos.map(photo => (
//           <img src={`http://127.0.0.1:5000/submit/${photo.filename}`} alt=""/>
//         ))}
//       </div>
//     )
//   }
// }

// export default Upload;



import React from 'react'
import axios from 'axios';

class Upload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData() 
        data.append('my_image', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = " http://127.0.0.1:5000/submit";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          
        
        .then(res => { // then print response status
            console.warn(res);
            console.log(res);
         })

    }

    render(){
        return(
            <div >
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            <h3 className="text-white">React File Upload</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Upload;