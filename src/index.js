import Resolver from '@forge/resolver';
import { asApp } from '@forge/api';

const resolver = new Resolver();

resolver.define('getIssues', async (req) => {
  const bodyData = {
    jql: req.payload.jql || '',
    fields: ['summary', 'status', 'assignee'],
  };

  const response = await asApp().requestJira('/rest/api/3/search', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json();

  return data.issues || null;
});

export const handler = resolver.getDefinitions();
