import React, {Component} from 'react';
import './profile.css'

class Profile extends Component {
    render(){
  return (
    <div className='profile-main'>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" height="100" width="100" /></button> <span class="name mt-3">User Name</span> <span class="idd">@coolusername</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2"> <span class="idd1">Oxabcd1234_bsh</span> <span><i class="fa fa-copy"></i></span> </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1569 <span class="follow">Followers</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3">
                <span>Bio of the user.<br/><br/> Coder/ Creator and Hard Working. Follow #Coder coding@ with Right User. </span> 
                </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date "> <span class="join">Joined June,2021</span> </div>
        </div>
    </div>
</div>
</div>
  )
    }
}

export default Profile