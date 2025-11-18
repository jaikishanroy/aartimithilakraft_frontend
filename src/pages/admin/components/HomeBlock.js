import { useEffect, useState } from "react"
import { getProduct, allProduct, blockProduct, saveBlock } from "../../../helper/https"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';
import Form from 'react-bootstrap/Form';

import { useDebounce } from "../../../helper/https";
import Checkbox from "@mui/material/Checkbox";

const HomeBlock = () => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [paginationModel, setPaginationModel] = useState({
    page: 0, // MUI is 0-based
    pageSize: 3
  });
  const [search, setSearch] = useState();
  const debounce = useDebounce(search, 1000);
  const [selectedRows, setSelectedRows] = useState([]);
  const [block, setBlock] = useState()


  const handleCheckboxChange = (id, checked) => {
    debugger
    const updatedRows = products.map((row) =>
      row.id === id ? { ...row, isChecked: checked } : row
    );
    setProducts(updatedRows);

    if (checked) {
      const selectedRow = updatedRows.find((row) => row.id === id);
      setSelectedRows((prev) => [...prev, selectedRow]);
    } else {
      setSelectedRows((prev) => prev.filter((row) => row.id !== id));
    }
  }

  const selectBlock = (e) => {
    if (e.target.value != '') {
      setBlock(e.target.value);
    }
  }


  const submitBlock = (e)=>{
    let data={
      block:block,
      product_ids:selectedRows.map(row=>row.id)
    }
    console.log(data);
    debugger
    saveBlock(data).then((res)=>{
      console.log(res);
      debugger
    }).catch(err=>console.log(err))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'category_name', headerName: 'Category', width: 150 },
    { field: 'price', headerName: 'Price', width: 110 },
    {
      field: 'cat_image', headerName: 'image', width: 110, renderCell: (params) => (
        <img
          src={'http://127.0.0.1:8000/' + params.value}
          alt="product"
          style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
        />)
    },

    {
      field: 'select', headerName: 'Select', width: 100, renderCell: (params) => (
        <Checkbox checked={params.row.isChecked || false} onChange={(e) => handleCheckboxChange(params.row.id, e.target.checked)} />
      )
    }
  ];

  useEffect(() => {

    blockProduct({ page: paginationModel.page + 1, page_size: paginationModel.pageSize, search: debounce }).then((res) => {
      console.log(res);
      debugger
      // if(res.data.count>0){
      setProducts(res.data.results);
      setTotal(res.data.count);


    }).catch(err => console.error(err));


  }, [paginationModel, debounce])

  return (
    <div className="container py-4">
      <Row className="mb-3">
        
        <Col md={4}>
          <Form.Group controlId="blockSelect">
            <Form.Label><strong>Select Block</strong></Form.Label>
            <Form.Select onChange={selectBlock}>
              <option value={1}>Block 1</option>
              <option value={2}>Block 2</option>
              <option value={3}>Block 3</option>
              <option value={4}>Block 4</option>
              <option value={5}>Block 5</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="searchBox">
            <Form.Label><strong>Search Product</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="submitBlock">
            <Button id="submitBlock" type="submit" onClick={submitBlock}>
              Submit
            </Button>
          </Form.Group>

        </Col>
      </Row>

      <Row>
        <Col>
          {products && (
            <DataGrid
              rows={products}
              columns={columns}
              paginationMode="server"
              getRowId={(row) => row.id}
              rowCount={total}
              pagination
              paginationModel={paginationModel}
              onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
              rowsPerPageOptions={[1, 2, 3]}
              loading={products.length === 0}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 3, page: 0 },
                },
              }}
              autoHeight
            />
          )}
        </Col>
      </Row>
    </div>

  )
}

export default HomeBlock