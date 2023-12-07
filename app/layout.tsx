import type { Metadata } from 'next';
import { Header } from 'sentry-docs/components/header';
import { Navbar } from 'sentry-docs/components/navbar';
import { Sidebar } from 'sentry-docs/components/sidebar';

import 'sentry-docs/styles/screen.scss';
import 'prism-sentry/index.css';

export const metadata: Metadata = {
  title: {template: '%s | Sentry Documentation', default: 'Home'},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
        <div className="document-wrapper">
          <div className="sidebar">
            <Header />

            <div
                className="d-md-flex flex-column align-items-stretch collapse navbar-collapse"
                id="sidebar"
              >
                <div className="toc">
                  <div className="text-white p-3">
                    <Sidebar />
                  </div>
                </div>
              </div>
              <div className="d-sm-none d-block" id="navbar-menu">

              </div>
          </div>
          <main role="main" className="px-0">
            <div className="flex-grow-1">
              <div className="d-block navbar-right-half">
                <Navbar />
              </div>

              <section className="pt-3 px-3 content-max prose">
                <div className="pb-3">
                  {/* <Breadcrumbs /> */}
                </div>

                <div className="col-sm-8 col-md-12 col-lg-8 col-xl-9">
                  {children}
                </div>
                <div className="col-sm-4 col-md-12 col-lg-4 col-xl-3">

                </div>
              </section>
            </div>
          </main>
        </div>
        </div>
      </body>
    </html>
  )
}