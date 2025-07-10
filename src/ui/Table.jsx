function Table({ children }) {
  return (
    <div className="table-container min-w-[900px] mt-8  ">
      <table>{children}</table>
    </div>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
