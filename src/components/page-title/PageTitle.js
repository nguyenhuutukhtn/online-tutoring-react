import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Col } from 'react-bootstrap';

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    'text-center',
    'text-md-left',
    'mb-sm-0',
    'mt-sm-2'
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Col xs="12" sm="4" className={classes} {...attrs}>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
      <h3 className="page-title">{title}</h3>
    </Col>
  );
};

export default PageTitle;
