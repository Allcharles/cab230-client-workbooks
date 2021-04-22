import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import { Badge, Button } from "reactstrap";
import "./App.css";
import { useHistory } from "react-router-dom";

/* const table = {
  columns: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price", sortable: true, filter: "agNumberColumnFilter" },
  ],
  rowData: [
    { make: "Toyota", model: "Camry", price: 28000 },
    { make: "Ford", model: "Focus", price: 16700 },
    { make: "Hyundai", model: "Kona", price: 23500 },
  ],
}; */

function App() {
  const [rowData, setRowData] = useState([]);
  const history = useHistory();

  const columns = [
    { headerName: "Title", field: "title" },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" },
  ];

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/drama.json?published_in=2000")
      .then((res) => res.json())
      .then((data) => data.works)
      .then((works) => {
        return works.map((book) => {
          return {
            title: book.title,
            author: book.authors[0].name,
            editionCount: book.edition_count,
            id: book.cover_id,
          };
        });
      })
      .then((books) => setRowData(books));
  });

  return (
    <div className="container">
      <h1>Book Catalogue</h1>
      <p>
        <Badge color="success">{rowData.length}</Badge> Books published in 2000 in the Drama category
      </p>

      <div className="ag-theme-balham" style={{ height: "300px", width: "800px" }}>
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={7}
          onRowClicked={(row) => history.push(`/book?title=${row.data.title}`)}
        />
      </div>

      <Button color="info" size="sm" className="mt-3" href="https://openlibrary.org/developers/api" target="_blank">
        Go to Open Library API
      </Button>
    </div>
  );
}

export default App;
