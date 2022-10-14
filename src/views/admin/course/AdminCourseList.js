/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import AdminService from 'src/services/AdminService'

const column = ['Course Name', 'Teacher', 'Action']

const CourseList = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchCourseList()
  }, [])

  const fetchCourseList = async () => {
    const response = await AdminService.instance.getCourseList()
    console.log(response)
    if (response.status) setTableData(response.courseList)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Course List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  {column.map((col, _) => {
                    return (
                      <CTableHeaderCell key={_} scope="col">
                        {col}
                      </CTableHeaderCell>
                    )
                  })}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableData.map((row) => {
                  return (
                    <CTableRow key={row.courseId}>
                      <CTableHeaderCell scope="row">{row.courseName}</CTableHeaderCell>
                      <CTableDataCell>{row.madeBy}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="success" onClick={() => {}}>
                          Edit
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CourseList
