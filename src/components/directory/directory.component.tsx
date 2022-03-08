import { Component } from 'react';
import { Section } from '../../types';
import sectionData from './sections.data';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

export type DirectoryProps = {};

export type DirectoryState = {
  sections: Section[];
};

class Directory extends Component<DirectoryProps, DirectoryState> {
  state: DirectoryState = {
    sections: sectionData
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => {
          return <MenuItem key={section.id} section={section} />;
        })}
      </div>
    );
  }
}

export default Directory;
