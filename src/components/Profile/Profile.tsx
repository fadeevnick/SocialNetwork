import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchFunctionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: DispatchFunctionType
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