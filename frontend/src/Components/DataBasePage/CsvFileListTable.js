// ** Table Columns
// import { data, basicColumns } from "./data";

// ** Third Party Components
import { ChevronDown, Trash } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Zoom, toast } from "react-toastify";
import { SuccessToastChart } from "../../Toast";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Reducers/UserReducer";
import { updateUserInfo } from "../../Utils/GlobalApiRoutes";

const DataTablesBasic = () => {
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.UserReducer);

  const getAllList = async () => {
    // let user = await axios.get("http://localhost:8000/users/1");
    let csvListData = userData && userData.csvFiles;

    setFileList(csvListData);
  };
  useEffect(async () => {
    getAllList();
  }, []);
  const deleteData = async (uuid, fileName) => {
    // alert(uuid);
    setFileList((prevData) =>
      prevData.filter((record) => record.uuid !== uuid)
    );
    setFileList((prevData) => {
      axios
        .patch(updateUserInfo + "/" + userData.id, {
          csvFiles: prevData,
        })
        .then((response) => {
          console.log("response from update", response);
          dispatch(userLogin(response && response.data));
          getAllList();
        })
        .catch((error) => {
          console.error("Error updating data on the server:", error);
        });
    });

    toast.success(<SuccessToastChart message={fileName + " Deleted !"} />, {
      icon: false,
      hideProgressBar: true,
      transition: Zoom,
    });
  };
  const basicColumns = [
    {
      name: "ID",
      sortable: true,
      maxWidth: "350px",
      selector: (row) => row.uuid,
    },
    {
      name: "File Name",
      sortable: true,
      minWidth: "155px",
      selector: (row) => row.name,
    },

    {
      name: "Actions",
      cell: (row) => {
        return (
          <div className="d-flex align-items-center permissions-actions">
            <Button
              size="sm"
              color="transparent"
              className="btn btn-icon"
              onClick={() => deleteData(row.uuid && row.uuid, row.name)}
            >
              <Trash
                className="font-medium-2"
                id={"deleteSnippet" + row.uuid}
              />
            </Button>
          </div>
        );
      },
    },
  ];

  const data1 = [{ name: "123", uuid: "4464" }];
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle tag="h4">List of Csv Files</CardTitle>
      </CardHeader>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={fileList}
          columns={basicColumns}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  );
};

export default DataTablesBasic;
