import React from "react";
import PropTypes from "prop-types";
const rowBgColor = {
  backgroundColor: "#f5f5f5ab",
};

const headerBgColor = {
  backgroundColor: "#deb5b545",
};
export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowBgColor}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerBgColor}
            colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerBgColor}>{textFirstCell}</th>
            <th style={headerBgColor}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
