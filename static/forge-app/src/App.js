import React, { useEffect, useState } from 'react';

import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

import { invoke, router } from '@forge/bridge';

function App() {
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState(null);
  const [jql, setJql] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        await invoke('getIssues', { jql }).then(setIssues);
      } catch (e) {
        setIssues(null);
      }

      setLoading(false);
    })();
  }, [jql]);

  const submitForm = (formData) => {
    setJql(formData.jql);
  };

  return (
    <>
      <img
        src="./images/img.jpg"
        alt="Konstantin Zelinsky"
        style={{
          display: 'block',
          width: 100,
          height: 100,
          objectFit: 'cover',
          borderRadius: '50%',
          margin: '20px auto',
        }}
      />
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Form onSubmit={submitForm}>
          {({ formProps }) => (
            <form {...formProps}>
              <Field label="Search issues" name="jql">
                {({ fieldProps }) => (
                  <Textfield
                    placeholder="Enter jql for search issues"
                    {...fieldProps}
                  />
                )}
              </Field>
              <FormFooter>
                <Button type="submit" appearance="primary">
                  Search
                </Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : issues ? (
        <table style={{ width: '80%', margin: '20px auto' }}>
          <thead>
            <tr>
              <th>Key</th>
              <th>Summary</th>
              <th>Assignee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr>
                <td>{issue.key}</td>
                <td>{issue.fields.summary || '-'}</td>
                <td>
                  {issue.fields.assignee
                    ? issue.fields.assignee.displayName
                    : 'Unassigned'}
                </td>
                <td>{issue.fields.status.name}</td>
                <td>
                  <Button
                    onClick={() => router.navigate(`/browse/${issue.key}`)}
                  >
                    Open issue
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
}

export default App;
