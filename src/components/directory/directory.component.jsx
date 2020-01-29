import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../../components/menu-item/menu-item.component';
import { selectDirectory } from '../../redux/directory/directory.selectors';

import './directory.style.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: selectDirectory(state)
});

export default connect(mapStateToProps, null)(Directory);
