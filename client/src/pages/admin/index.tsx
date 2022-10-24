import styled from "styled-components";
import Admin from "../../components/admin";

const AdminWarp = styled.div`
  margin: 200px 150px 0 250px;
`;

const AdminPage = () => {
  return (
    <AdminWarp>
      <Admin />
    </AdminWarp>
  );
};

export default AdminPage;
