import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Table, Badge, Pagination, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineEmail, MdDelete } from "react-icons/md";
import { FcFlashOn } from "react-icons/fc";
import "../Pages/Emailbox/Emailbox.css";

import withAuth from "../../utils/withAuth";

import axios from "axios";

const EmailboxData = () => {
  const { state } = useLocation();
  const projectId = state.projectId;
  
  const [emails, setEmails] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("btoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/?project_id=${projectId}&page=${currentPage}`,
        config
      )

      .then((response) => {
        const data = response.data["results"];
        setEmails(data["data"]);
        setTotalPages(data["total_pages"]);
      });
  }, [currentPage, projectId]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };


  const handleInstantClick = (email) => {
    navigate("/emailbox/instant/", {
      state:{
        allowPage: true,
        "emailId":email.id,
        "email": email.email_address,
        "projectId":projectId
      }
    })
  }

   const renderTableRows = () => {
     if (emails !== undefined) {
       return emails.map((email, idx) => {
         return (
           <tr key={email.id}>
             <td>{idx + 1 + (currentPage - 1) * 2}</td>
             <td>{email.email_address}</td>
             <td>{email.date}</td>
             <td>{email.time}</td>
             <td>{email.total_request}</td>
             <td>
               {email.is_valid === true ? (
                 <>
                   <Badge bg="success">Valid</Badge>
                 </>
               ) : email.dns_status === false ? (
                 <>
                   <Badge bg="danger">DNS Not Found</Badge>
                 </>
               ) : (
                 <>
                   <Badge bg="warning">Syntax Error</Badge>
                 </>
               )}
             </td>
             <td>
               {email.role_status === true ? (
                 <>
                   <Badge bg="warning">{email.role}</Badge>
                 </>
               ) : (
                 <>
                   <Badge bg="success">None</Badge>
                 </>
               )}
             </td>
             <td>
               {email.disposable_status === true ? (
                 <>
                   <Badge bg="warning">{email.disposable_provider}</Badge>
                 </>
               ) : (
                 <Badge bg="success">Not Disposable</Badge>
               )}
             </td>

             <td>
               {email.free_status === true ? (
                 <>
                   <Badge bg="success">Free Email</Badge>
                 </>
               ) : (
                 <Badge bg="secondary">{email.domain}</Badge>
               )}
             </td>

             <td>
               <Button href={"mailto: " + email.email_address}>
                 <MdOutlineEmail /> Reply
               </Button>
             </td>
             <td>
               <CopyToClipboard text={email.email_address}>
                 <Button>
                   <FaRegClipboard /> Copy
                 </Button>
               </CopyToClipboard>
             </td>
             <td>
               <Button onClick={() => handleInstantClick(email)}>
                 <FcFlashOn /> View
               </Button>
             </td>
           </tr>
         );
       });
     }
   };
  return (
    <>
      <Container style={{ overflowX: "auto" }}>
        <Table bordereless="true" hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Email Id</th>
              <th>Date</th>
              <th>Time</th>
              <th>
                <small>
                  <b>Requests</b>
                </small>
              </th>
              <th>
                <small>
                  <b>Validity</b>
                </small>
              </th>
              <th>
                <small>
                  <b>Role</b>
                </small>
              </th>
              <th>
                <small>
                  <b>Disposable</b>
                </small>
              </th>
              <th>
                <small>
                  <b>Type</b>
                </small>
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </Table>
      </Container>

      <Pagination>
        <Pagination.Item
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </Pagination.Item>
        <Pagination.Item
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </Pagination.Item>
      </Pagination>
    </>
  );
};

export default withAuth(EmailboxData);
