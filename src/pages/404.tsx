import React, {Fragment} from 'react';

import {SEO} from 'sentry-docs/components/seo';

import {getCurrentTransaction} from '../utils';

function NotFoundPage() {
  const tx = getCurrentTransaction();
  if (tx) {
    tx.setStatus('not_found');
  }

  return (
    <Fragment>
      <SEO
        title="Page Not Found"
        description="We couldn’t find the page you were looking for."
      />
      <h1>Page Not Found</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
    </Fragment>
  );
}

export default NotFoundPage;
