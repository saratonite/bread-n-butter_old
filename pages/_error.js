import React from 'react'
import Link from 'next/link';
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <div className="error-page">
        <h1 className="text-error">{this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server :(`
          : ':( An error occurred on client'}
        </h1>
        <p><Link href="/"><a> >Back to home</a></Link></p>
      </div>
    )
  }
}