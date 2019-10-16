import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
// import { LuiDropdown } from 'qdt-lui';
import 'leonardo-ui/dist/leonardo-ui.css';
import withSelectionObject from './withSelectionObject';
import '../styles/index.scss';

class QdtSelectionToolbarDropdown extends React.Component {
  static propTypes = {
    clearSelections: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired,
  }

  state = {
    dropdownOpen: false,
  }

  @autobind
  toggle() {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  }

  render() {
    const { clearSelections, value } = this.props;
    const { dropdownOpen } = this.state;
    console.log(clearSelections, dropdownOpen);
    return (
      <ul className="lui-list">
        <li className="lui-list__item">
          {value.field}
          :
          {value.selected.length}
          {' '}
          of
          {' '}
          {value.total}
        </li>
      </ul>
    );
  }
}

const QdtSelectionToolbar = ({
  qLayout, clearSelections, title, btnText,
}) => {
  const selectedFields = qLayout.qSelectionObject.qSelections;
  let selections = [];
  if (selectedFields.length) {
    selections = selectedFields.map((value) => {
      if (value.qSelectedCount >= 1 && value.qSelectedCount <= 6) {
        return {
          field: value.qField,
          selected: value.qSelectedFieldSelectionInfo.map(valueInner => valueInner.qName),
          total: value.qTotal,
        };
      } if (value.qSelectedCount > 6) {
        return {
          field: value.qField,
          selected: [`${value.qSelectedCount} of ${value.qTotal}`],
        };
      }
      return null;
    });
  }

  return (
    <div className="">
      <ul className="lui-list">
        <li className="lui-list__header">
          <span className="lui-list__text">{title}</span>
        </li>
        {selections.length === 0
        && (
        <li className="lui-list__item no-selections">
          <span className="lui-list__text">No Selections</span>
        </li>
        )
        }
        {selections.length >= 1 && selections.length <= 6
            && selections.map((value) => {
              if (value.selected.length === 1) {
                return (
                  <li className="lui-list__item" key={value.field}>
                    <span className="lui-list__text">
                      {value.field}
                      :
                      { ' ' }
                      {value.selected[0]}
                    </span>
                    <span className="lui-list__aside">
                      <span className="lui-icon lui-icon--close" onClick={() => clearSelections(value.field)} role="button" tabIndex={0} />
                    </span>
                  </li>
                );
              }
              return (
                <li className="lui-list__item" key={value.field}>
                  <QdtSelectionToolbarDropdown value={value} clearSelections={clearSelections} />
                </li>
              );
            })
        }
        {selections.length >= 1 && selections.length <= 6
        && <li className="lui-list__item"><button type="button" className="lui-button--block lui-button lui-button--warning clear-all" onClick={() => clearSelections()} tabIndex={0}>{btnText}</button></li>
        }
      </ul>
    </div>
  );
};

QdtSelectionToolbar.propTypes = {
  qLayout: PropTypes.object.isRequired,
  clearSelections: PropTypes.func.isRequired,
  title: PropTypes.string,
  btnText: PropTypes.string,
};
QdtSelectionToolbar.defaultProps = {
  title: 'SELECTIONS',
  btnText: 'Clear Selections',
};

const QdtSelectionToolbarObject = withSelectionObject(QdtSelectionToolbar);
QdtSelectionToolbarObject.propTypes = {
  qDocPromise: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
  qPage: PropTypes.object,
};
QdtSelectionToolbarObject.defaultProps = {
  cols: [],
  options: { qType: 'SelectionObject' },
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: 1,
  },
};

export default QdtSelectionToolbarObject;
