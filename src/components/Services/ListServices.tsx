import Cources from "../../assets/icons/Cources";
import JobIcon from "../../assets/icons/JobIcon";
import SchoolIcon from "../../assets/icons/SchoolIcon";
import TeacherIcon from "../../assets/icons/TeacherIcon";
import ThinkingIcon from "../../assets/icons/ThinkingIcon";
import { ServiceItem } from '../../utils/types/services';


// const styledImage = styled(Cources)`
// `;

const ListServices = (color:string):Array<ServiceItem>=>{
    return [
        {
            title:"Learn",
            icon: ()=>Cources(color)
        },{
            title:"Teach",
            icon: ()=>TeacherIcon(color)
        },{
            title:"Institutions",
            icon: ()=>SchoolIcon(color)
        },{
            title:"Jobs",
            icon: ()=>JobIcon(color)
        },{
            title:"QAs",
            icon: ()=>ThinkingIcon(color)
        }
    ]
}

export default ListServices;