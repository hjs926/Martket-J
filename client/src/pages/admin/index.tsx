import styled from "styled-components";
import AddForm from "../../components/admin/addForm";

const AdminWarp = styled.div`
  margin: 200px 150px 0 250px;
`;

const AdminPage = () => {
  return (
    <AdminWarp>
      <AddForm />
    </AdminWarp>
  );
};

export default AdminPage;
