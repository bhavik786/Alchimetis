// ** React Imports
import { useState, Fragment } from "react";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// ** Third Party Imports
import { useDropzone } from "react-dropzone";
import { FileText, X, DownloadCloud } from "react-feather";
import axios from "axios";
import {
  createCsvFileRecord,
  updateUserInfo,
} from "../../Utils/GlobalApiRoutes";
import { readString } from "react-papaparse";
import { v4 as uuidv4 } from "uuid";
import { Zoom, toast } from "react-toastify";
import { SuccessToastChart } from "../../Toast";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../Actions/UserAction";
import { userLogin } from "../../Reducers/UserReducer";
const FileUploaderMultiple = () => {
  // ** State
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.UserReducer);

  const history = useHistory();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const csvFiles = acceptedFiles.filter((file) => file.type === "text/csv");
      setFiles([...files, ...csvFiles.map((file) => Object.assign(file))]);
    },
    accept: "text/csv",
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const handleUploadFiles = async () => {
    const user = await axios.get("http://localhost:8000/users/" + userData.id);
    let csvFiles = user && user.data.csvFiles;

    const filesPromiseContainer =
      files &&
      files.length &&
      files.map(
        async (singleFile) =>
          new Promise((resolve, reject) => {
            readString(singleFile, {
              download: true,
              header: true,
              complete: (results) => {
                try {
                  csvFiles.push({
                    name: singleFile.name,
                    fileData: JSON.parse(JSON.stringify(results.data)),
                    uuid: uuidv4(),
                  });
                } catch (error) {
                  console.log("====================================");
                  console.log(error);
                  console.log("====================================");
                }
                resolve(results);
              },
              error: (error) => {
                reject(error);
              },
            });
          })
      );

    await Promise.all(filesPromiseContainer);
    console.log("CSV FILES", csvFiles);

    // files &&
    // files.length &&
    // files.map(async (singleFile) => {
    //   try {
    //     const results = await new Promise((resolve, reject) => {
    //       readString(singleFile, {
    //         download: true,
    //         header: true,
    //         complete: (results) => {
    //           resolve(results);
    //         },
    //         error: (error) => {
    //           reject(error);
    //         },
    //       });
    //     });
    //     csvFiles.push({
    //       name: singleFile.name,
    //       fileData: JSON.parse(JSON.stringify(results.data)),
    //     });

    //     //   readString(singleFile, {
    //     //     download: true,
    //     //     header: true,
    //     //     complete: (results) => {
    //     //       csvFiles.push({ name: singleFile.name, fileData: results.data });
    //     //       //   console.log(results.data);
    //     //     },
    //     //   });
    //   } catch (error) {
    //     console.error(`Error parsing CSV file ${singleFile.name}:`, error);
    //   }
    // });

    // let putData = { csvDataId: 1 };
    // axios
    //   .put(updateUserInfo, putData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    let parsedCsvData1 = {
      data: [
        {
          name: "123.csv",
          fileData: [
            {
              name: "123",
              name2: [
                {
                  "View As": "CO2e  (t)",
                  Date: "Oct 2021",
                  "Scope 2": "6868.0725",
                  "Scope 1": "2358.9359",
                  "Scope 3": "7.8394",
                  Offsets: "-30.9936",
                  "Scope 2-12 Mth Avg": "6864.915",
                  "Scope 1-12 Mth Avg": "2579.5071",
                  "Scope 3-12 Mth Avg": "4.0288",
                  "Offsets-12 Mth Avg": "-26.634",
                  "Scope 2Variance (%)": "0.04",
                  "Scope 1Variance (%)": "-8.55",
                  "Scope 3Variance (%)": "94.58",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "0.04",
                  "Scope 1- Variance (%)": "-8.55",
                  "Scope 3- Variance (%)": "94.58",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Nov 2021",
                  "Scope 2": "6464.5896",
                  "Scope 1": "5029.2329",
                  "Scope 3": "7.9563",
                  Offsets: "-30.3756",
                  "Scope 2-12 Mth Avg": "6917.3363",
                  "Scope 1-12 Mth Avg": "2818.6468",
                  "Scope 3-12 Mth Avg": "4.6609",
                  "Offsets-12 Mth Avg": "-28.6093",
                  "Scope 2Variance (%)": "-6.54",
                  "Scope 1Variance (%)": "78.42",
                  "Scope 3Variance (%)": "70.7",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-6.54",
                  "Scope 1- Variance (%)": "78.42",
                  "Scope 3- Variance (%)": "70.7",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Dec 2021",
                  "Scope 2": "7226.6851",
                  "Scope 1": "1944.9409",
                  "Scope 3": "8.2195",
                  Offsets: "-34.6801",
                  "Scope 2-12 Mth Avg": "6952.7335",
                  "Scope 1-12 Mth Avg": "2732.5599",
                  "Scope 3-12 Mth Avg": "5.3164",
                  "Offsets-12 Mth Avg": "-30.8321",
                  "Scope 2Variance (%)": "3.94",
                  "Scope 1Variance (%)": "-28.82",
                  "Scope 3Variance (%)": "54.6",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "3.94",
                  "Scope 1- Variance (%)": "-28.82",
                  "Scope 3- Variance (%)": "54.6",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Jan 2022",
                  "Scope 2": "5516.7306",
                  "Scope 1": "2405.8858",
                  "Scope 3": "8.2581",
                  Offsets: "-30.6204",
                  "Scope 2-12 Mth Avg": "6827.1763",
                  "Scope 1-12 Mth Avg": "2773.3438",
                  "Scope 3-12 Mth Avg": "5.9746",
                  "Offsets-12 Mth Avg": "-30.7304",
                  "Scope 2Variance (%)": "-19.19",
                  "Scope 1Variance (%)": "-13.24",
                  "Scope 3Variance (%)": "38.22",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-19.19",
                  "Scope 1- Variance (%)": "-13.24",
                  "Scope 3- Variance (%)": "38.22",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Feb 2022",
                  "Scope 2": "5239.4023",
                  "Scope 1": "2742.6469",
                  "Scope 3": "7.4247",
                  Offsets: "-25.3942",
                  "Scope 2-12 Mth Avg": "6773.7881",
                  "Scope 1-12 Mth Avg": "2797.0734",
                  "Scope 3-12 Mth Avg": "6.5679",
                  "Offsets-12 Mth Avg": "-30.455",
                  "Scope 2Variance (%)": "-22.65",
                  "Scope 1Variance (%)": "-1.94",
                  "Scope 3Variance (%)": "13.04",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-22.65",
                  "Scope 1- Variance (%)": "-1.94",
                  "Scope 3- Variance (%)": "13.04",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Mar 2022",
                  "Scope 2": "7206.4241",
                  "Scope 1": "2241.9352",
                  "Scope 3": "8.2294",
                  Offsets: "-28.5732",
                  "Scope 2-12 Mth Avg": "6798.6732",
                  "Scope 1-12 Mth Avg": "2698.0064",
                  "Scope 3-12 Mth Avg": "7.2263",
                  "Offsets-12 Mth Avg": "-30.2472",
                  "Scope 2Variance (%)": "5.99",
                  "Scope 1Variance (%)": "-16.9",
                  "Scope 3Variance (%)": "13.88",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "5.99",
                  "Scope 1- Variance (%)": "-16.9",
                  "Scope 3- Variance (%)": "13.88",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Apr 2022",
                  "Scope 2": "6242.0526",
                  "Scope 1": "3546.0263",
                  "Scope 3": "7.955",
                  Offsets: "-27.4305",
                  "Scope 2-12 Mth Avg": "6747.3326",
                  "Scope 1-12 Mth Avg": "2841.3888",
                  "Scope 3-12 Mth Avg": "7.8605",
                  "Offsets-12 Mth Avg": "-29.9945",
                  "Scope 2Variance (%)": "-7.48",
                  "Scope 1Variance (%)": "24.79",
                  "Scope 3Variance (%)": "1.2",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-7.48",
                  "Scope 1- Variance (%)": "24.79",
                  "Scope 3- Variance (%)": "1.2",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "May 2022",
                  "Scope 2": "7990.9402",
                  "Scope 1": "3193.4533",
                  "Scope 3": "7.8663",
                  Offsets: "-28.094",
                  "Scope 2-12 Mth Avg": "6746.9164",
                  "Scope 1-12 Mth Avg": "2830.736",
                  "Scope 3-12 Mth Avg": "7.8706",
                  "Offsets-12 Mth Avg": "-29.8576",
                  "Scope 2Variance (%)": "18.43",
                  "Scope 1Variance (%)": "12.81",
                  "Scope 3Variance (%)": "-0.05",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "18.43",
                  "Scope 1- Variance (%)": "12.81",
                  "Scope 3- Variance (%)": "-0.05",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Jun 2022",
                  "Scope 2": "7077.777",
                  "Scope 1": "3654.395",
                  "Scope 3": "7.5612",
                  Offsets: "-30.9638",
                  "Scope 2-12 Mth Avg": "6778.5186",
                  "Scope 1-12 Mth Avg": "2963.4244",
                  "Scope 3-12 Mth Avg": "7.8733",
                  "Offsets-12 Mth Avg": "-30.0878",
                  "Scope 2Variance (%)": "4.41",
                  "Scope 1Variance (%)": "23.31",
                  "Scope 3Variance (%)": "-3.96",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "4.41",
                  "Scope 1- Variance (%)": "23.31",
                  "Scope 3- Variance (%)": "-3.96",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Jul 2022",
                  "Scope 2": "5641.6104",
                  "Scope 1": "3360.8201",
                  "Scope 3": "0.3375",
                  Offsets: "-29.978",
                  "Scope 2-12 Mth Avg": "6711.748",
                  "Scope 1-12 Mth Avg": "2963.412",
                  "Scope 3-12 Mth Avg": "7.2509",
                  "Offsets-12 Mth Avg": "-29.9704",
                  "Scope 2Variance (%)": "-15.94",
                  "Scope 1Variance (%)": "13.41",
                  "Scope 3Variance (%)": "-95.34",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-15.94",
                  "Scope 1- Variance (%)": "13.41",
                  "Scope 3- Variance (%)": "-95.34",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Aug 2022",
                  "Scope 2": "6397.8117",
                  "Scope 1": "2975.7252",
                  "Scope 3": "0.3273",
                  Offsets: "-30.3984",
                  "Scope 2-12 Mth Avg": "6638.7183",
                  "Scope 1-12 Mth Avg": "2963.3995",
                  "Scope 3-12 Mth Avg": "6.6272",
                  "Offsets-12 Mth Avg": "-29.8383",
                  "Scope 2Variance (%)": "-3.62",
                  "Scope 1Variance (%)": "0.41",
                  "Scope 3Variance (%)": "-95.06",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "-3.62",
                  "Scope 1- Variance (%)": "0.41",
                  "Scope 3- Variance (%)": "-95.06",
                  "Offsets- Variance (%)": "0",
                },
                {
                  "View As": "CO2e  (t)",
                  Date: "Sep 2022",
                  "Scope 2": "6774.9334",
                  "Scope 1": "2106.6519",
                  "Scope 3": "0.3483",
                  Offsets: "-29.299",
                  "Scope 2-12 Mth Avg": "6553.9191",
                  "Scope 1-12 Mth Avg": "2963.3874",
                  "Scope 3-12 Mth Avg": "6.0269",
                  "Offsets-12 Mth Avg": "-29.7334",
                  "Scope 2Variance (%)": "3.37",
                  "Scope 1Variance (%)": "-28.91",
                  "Scope 3Variance (%)": "-94.22",
                  "OffsetsVariance (%)": "0",
                  "Scope 2- Variance (%)": "3.37",
                  "Scope 1- Variance (%)": "-28.91",
                  "Scope 3- Variance (%)": "-94.22",
                  "Offsets- Variance (%)": "0",
                },
              ],
            },
            ,
          ],
          userId: 1,
        },
      ],
    };

    axios
      .patch(updateUserInfo + "/" + userData.id, { csvFiles })
      .then((response) => {
        console.log("response", response);
        dispatch(userLogin(response && response.data));
        toast.success(
          <SuccessToastChart message={"Files Uploaded Successfully !"} />,
          {
            icon: false,
            hideProgressBar: true,
            transition: Zoom,
          }
        );
        history.push("/database/viewData");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4"></CardTitle>
      </CardHeader>
      <CardBody>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <DownloadCloud size={64} />
            <h5>Drop Files here or click to upload</h5>
            <p className="text-secondary">
              Drop files here or click{" "}
              <a href="/" onClick={(e) => e.preventDefault()}>
                browse
              </a>{" "}
              thorough your machine
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className="my-2">{fileList}</ListGroup>
            <div className="d-flex justify-content-end">
              <Button
                className="me-1"
                color="danger"
                outline
                onClick={handleRemoveAllFiles}
              >
                Remove All
              </Button>
              <Button color="primary" onClick={handleUploadFiles}>
                Upload Files
              </Button>
            </div>
          </Fragment>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default FileUploaderMultiple;
