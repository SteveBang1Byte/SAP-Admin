import { useEffect, useState } from "react";
import ButtonField from "../../components/form/ButtonField";
import Label from "../../components/form/Label";
import IconDelete from '../../assets/icons/delete.svg'
import { ColumnsRole } from "../../mocks/columns";
import roleApi from "../../api/roleApi";
import ModalCrud from "../../components/ModalCrud";
import InputGroup from "../../components/form/InputGroup";
import Spinner, { SpinnerType } from "../../components/Spinner";
import Table from "../../components/table/Table";
import Row, { RowStyle } from "../../components/table/Row";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";


const RoleDashboard = () => {

    const navigate = useNavigate();
    const [roles, setRoles] = useState([]);
    const [isDisplayModal, setIsDisplayModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {

        setIsLoading(true);

        roleApi.getAll().then((res) => {
            setRoles(res.data.items);
        }
        ).catch((err) => {
            console.log(err);
        });

        setIsLoading(false);
   
    }, []);

    const onClickButtonCreateRole = () => {
        const role = 
        { 
          name: name, 
          description: description
        };

        roleApi.create(role).then((res) => {
            setIsDisplayModal(false);

            // Sau khi thêm thành công, cập nhật lại danh sách roles
            roleApi.getAll().then((res) => {
              setRoles(res.data.items);
            }).catch((err) => {
              console.log(err);
            });

        }).catch((err) => {
            console.log(err);
        });    
    }

    const displayTableRoles = () => {
      // If loading data, display spinner.
      if (isLoading) {

        return <Spinner type={SpinnerType.medium} />
        
      }

      return (
        <Table columns={ColumnsRole}>
            {
              roles.map((value, key) => (
                    <Row key={key} onClick={() => navigate(PATH_DASHBOARD.role.edit(value.id))} >
                      <td className={RowStyle.className}> {value.id}</td>
                      <td className={RowStyle.className}> {value.name}</td>

                      <td className={RowStyle.className}> {value.description}</td>
                      <td className={RowStyle.className}> <img src={IconDelete} className="scale-75 " alt="Delete"/> </td>
                    </Row>
               ))
            }

        </Table>  
      );
      

    }


  return (
    <div>
      <div className="flex justify-between" >
      <Label title="Roles" size = 'xl' />
      <ButtonField title="Create Role"  onClick={() => setIsDisplayModal(true)}/>
      <ModalCrud 
      title={'New Role'} 
      isDisplayModal={isDisplayModal} 
      onCancel={() => setIsDisplayModal(false)}
      onOk={() => onClickButtonCreateRole()}
      >
        <InputGroup label={'Name'} placeholder={'Name'} onChange={(e) => setName(e.target.value)} re />
        <InputGroup label={'Description'} placeholder={'Description'} onChange={(e) => setDescription(e.target.value)} />
      </ModalCrud>
      </div>

      { displayTableRoles() }

    </div>
  );
};

export default RoleDashboard;