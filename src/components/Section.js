import React from "react";

class Section extends React.PureComponent {
  render() {
    return (
      <div className="section" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }

  // static members - components to embbed in Section
  static Header = ({title}) => {
    return (
      <div className="section-header">
        <div className="section-title">
          {title}
        </div>
        <div className="section-underline" />
      </div>
    )
  }

  static Item = ({title, description, children}) => {
    return (
      <div className="section-item">
        <div className="section-item-description">
          {description}
        </div>
      <div className="section-item-separator" />
      <div className="section-item-content">
        {title ? <div className="section-item-title">
          {title}
        </div> : null}
        <div className="section-item-body">
          {children}
        </div>
      </div>
      </div>
    )
  }
}

export default Section;
