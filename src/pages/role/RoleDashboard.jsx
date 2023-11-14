import { useEffect, useState } from "react";
import ButtonField from "../../components/form/ButtonField";
import Label from "../../components/form/Label";
import TableField from "../../components/table/TableField";
import { ColumnsRole } from "../../mocks/columns";
import roleApi from "../../api/roleApi";
import ModalCrud from "../../components/ModalCrud";
import InputGroup from "../../components/form/InputGroup";


const RoleDashboard = () => {

    const [roles, setRoles] = useState([]);
    const [isDisplayModal, setIsDisplayModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');



    useEffect(() => {
        roleApi.getAll().then((res) => {
            setRoles(res.data.data);
            
            
        }
        ).catch((err) => {
            console.log(err);
        });
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

      <TableField columns={ColumnsRole} rows={roles} />
    </div>
  );
};

export default RoleDashboard;