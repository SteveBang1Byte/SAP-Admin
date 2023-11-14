import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import roleApi from "../../api/roleApi";

const RoleDetail = () => {
    const { id } = useParams();
    const [role, setRole] = useState({});

    let navigate = useNavigate();
    
    useEffect(() => {
        roleApi.getById(id).then((res) => {
            setRole(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
      }, [id]);
    

    return (
    <div> 
          <button onClick={() => navigate(-1)}>Back</button> 
        </div>
        );
};

export default RoleDetail;