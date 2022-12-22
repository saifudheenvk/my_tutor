import { Avatar, Badge, Divider, FloatButton, message } from "antd";
import { UserOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import { FC, useEffect, useRef, useState } from "react";
import { EditIcon, ImageContainer, ProfileContainer, ProfileContainerCard, ProfileContainerExtra, ProfileInfoContainer, ProfileSaveButton, ProfileTextArea, ProfileTextAreaName } from "../styled_components/Profile";
import useAutosizeTextArea from "../../utils/functions/useAutosizeTextArea";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { getUserDetails, updateUserDetails } from "../../actions/users/userDetails";


interface IProps {

}
const Profile: FC<IProps> = props => {


    const params = useParams();
    const themeState = useAppSelector(state => state.themeReducer)
    const [profileInfo, setProfileInfo] = useState<any>({})
    const [editProfile, setEditProfile] = useState(true)
    const [showEdit, setShowEdit] = useState(false)

    const infoRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(infoRef.current, profileInfo?.info);
    const aboutRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(aboutRef.current, profileInfo?.about);

    const fetchUserDetails = () => {
        getUserDetails(params.id as string).then(res => {
            if (res.status) {
                console.log(res.data)
                setProfileInfo(res.data)
            } else {
                message.error(res.data)
            }
        }).catch(err => {
            console.log(err)
            message.error("Couldn't fetch user details")
        })
    }
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>, field: string) => {
        const val = evt.target?.value;
        setProfileInfo((prev: any) => {
            return { ...prev, [field]: val }
        });
    };

    const saveMyProfile = () => {
        updateUserDetails({ ...profileInfo, _id: params.id }).then(res => {
            if (res.status) {
                console.log(res.data)
                message.success(res.data)
                setEditProfile(true)
            } else {
                message.error(res.data)
            }
        }).catch(err => {
            console.log(err)
            message.error("Couldn't update user details")
        })
    }


    useEffect(() => {
        fetchUserDetails();
    }, [])

    return (
        <ProfileContainer>
            <ProfileContainerExtra />
            <div className="profile-card-badge-container" onMouseEnter={() => {
                if (editProfile) setShowEdit(true)
            }} onMouseLeave={() => {
                if (editProfile) setShowEdit(false)
            }} >
                <Badge offset={[-20, 40]} count={showEdit && editProfile ? <FloatButton onClick={() => setEditProfile(false)} icon={<EditIcon />} /> : null}>
                    <ProfileContainerCard>
                        <ImageContainer>
                            <Avatar size={120} icon={<UserOutlined />} />
                        </ImageContainer>
                        <ProfileInfoContainer><ProfileTextAreaName themestate={themeState} disabled={editProfile} onChange={(e) => handleChange(e, "name")} rows={1} maxLength={25} placeholder="Name" value={profileInfo.name} /></ProfileInfoContainer>
                        <ProfileInfoContainer><ProfileTextArea themestate={themeState} disabled={editProfile} onChange={(e) => handleChange(e, "info")} ref={infoRef} rows={1} placeholder="Give basic info" value={profileInfo.info} /></ProfileInfoContainer>
                        <ProfileInfoContainer><ProfileTextArea themestate={themeState} disabled={editProfile} ref={aboutRef} onChange={(e) => handleChange(e, "about")} rows={1} placeholder="Tell me about you" value={profileInfo.about} /></ProfileInfoContainer>
                        <Divider />
                        {!editProfile && (<><ProfileSaveButton rightAlighn="80" shape="square" icon={<SaveOutlined />} onClick={saveMyProfile} /><ProfileSaveButton rightAlighn="30" shape="square" icon={<CloseOutlined />} onClick={() => setEditProfile(true)} /></>)}
                    </ProfileContainerCard>
                </Badge>
            </div>
            <ProfileContainerExtra />
        </ProfileContainer>
    )
}

export default Profile