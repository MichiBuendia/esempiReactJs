import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['Home', 'Author', 'Quotes', 'Contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
