import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageStateType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";

type ProfilePropsType = {
    profilePage: ProfilePageStateType,
    dispatch: Dispatch
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch} />
    </div>
}

export default Profile;