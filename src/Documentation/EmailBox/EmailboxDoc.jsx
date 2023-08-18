import React from "react";
import { Container, Button } from "react-bootstrap";
import "./EmailBoxDoc.css";
import NavBar from "../../Components/NavBar/NavBar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const EmailboxDoc = () => {
  const jsonSnippet = `{
  "email": "johndoe@example.com"
}`;

  const jsonResponseSnippet = `{
    "status": "success",
    "message": "Email added in Emailbox."
}`;

  return (
    <>
      <NavBar />
      <Container>
        <Button href="/dashboard">
          <BsFillArrowLeftCircleFill /> &nbsp; Dashboard
        </Button>
        <br /> <br />
        <article className="page sans">
          <div className="page-body">
            <hr />
            <h2>1. Sign In to Backendifyi</h2>
            <p>
              The <a target="_blank" href="http://backendifyi.vercel.app">home page</a> features a
              &quot;Sign in with Google&quot; option. Once logged in, the
              dashboard with the EmailBox page will be displayed.
            </p>

            <hr />
            <h2>2. Create EmailBox</h2>

            <p>
              To get started with your project, enter its name. You will then be
              redirected to the main page, where you can update your project's
              name, copy its API key, or replace it with a new one.
              Additionally, on this page, you can view all of your email
              addresses.
            </p>
            <p>
              <blockquote>
                Note: Maximum of 3 EmailBox are allowed per user.
              </blockquote>
            </p>

            <hr />
            <h2>3. Integrate with your application.</h2>

            <p>
              To use the EmailBox API, you will need to send requests to the
              following endpoint:
            </p>
            <pre className="code code-wrap">
              <code>https://api.backendifyi.vercel.app/api/emailbox/addEmail/</code>
            </pre>
            <p>The request should include the following data:</p>
            <ol type="1" className="numbered-list" start="1">
              <li>In your headers, add Authorization Field.</li>
            </ol>
            <pre className="code code-wrap">
              <code>Authorization: APIKey emailbox_api_key</code>
            </pre>
            <ol type="1" className="numbered-list" start="2">
              <li>In you body, in JSON format add the following data.</li>
            </ol>
            <pre className="code code-wrap">
              <code>
                <div dangerouslySetInnerHTML={{ __html: jsonSnippet }} />
              </code>
            </pre>
            <p>The response will include the following data:</p>
            <pre className="code code-wrap">
              <code>
                <div
                  dangerouslySetInnerHTML={{ __html: jsonResponseSnippet }}
                />
              </code>
            </pre>
            <p>
              <strong>Sample Code</strong>
            </p>
            <p>
              Reference templates are available on Github at this &nbsp;
              <a href="https://github.com/kothawleprem/backendifyi-react-subscription-template">
                Link
              </a>
              .
            </p>
            <hr />
          </div>
        </article>
      </Container>
    </>
  );
};

export default EmailboxDoc;
