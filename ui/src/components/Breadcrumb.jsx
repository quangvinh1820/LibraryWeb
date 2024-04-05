import React from 'react'

export default function Breadcrumb({heading, title, total, sort}) {
  return (
    <div className="row no-gutters justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center">
            <span className="subheading">{heading}</span>
            <h2 className="mb-4">{title}</h2>
            <p className="tongso mb-4">{total}</p>
            {sort}
        </div>
    </div>
  )
}
