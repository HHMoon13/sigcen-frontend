/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormTextarea,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import TeacherService from 'src/services/TeacherService'
import { ClientEnum } from 'src/config/ClientEnum'
import StudentService from 'src/services/StudentService'
import { useLocation } from 'react-router-dom'

const column = [
  'Letter No.',
  'Security Classification',
  'Date',
  'Precedence',
  "Originator's No",
  'From',
  'To',
]

const CreateDespatch = () => {
  const [tableData, setTableData] = useState([])

  const location = useLocation()
  const slip = location.state
  console.log(location)

  useEffect(() => {
    fetchDespatchList()
  }, [])

  const fetchDespatchList = async () => {
    const payload = {
      transitSlipId: slip.transitSlipId,
    }
    const response = await StudentService.instance.getTransitSlipDespatch(payload)
    // const response = await StudentService.instance.getDespatchList()
    console.log(response)
    if (response.status) setTableData(response.despatchData)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Transit Slip Details</strong>
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
                {tableData.map((row, _) => {
                  return (
                    <CTableRow key={row.despatchId}>
                      <CTableHeaderCell scope="row">{row.despatchLetterNumber}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {row.despatchSecurityClassification}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.despatchDate}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.despatchPrecedence}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {row.despatchOriginatorNumber}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.despatchFrom}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.despatchTo}</CTableHeaderCell>
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

export default CreateDespatch
