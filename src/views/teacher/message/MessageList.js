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
} from '@coreui/react'
import TeacherService from 'src/services/TeacherService'
import { ClientEnum } from 'src/config/ClientEnum'
import { useNavigate } from 'react-router-dom'

const column = [
  'Security Classification',
  "Originator's No",
  'Date',
  'From',
  'To',
  'Status',
  'Action',
]

const CreateDespatch = () => {
  const [tableData, setTableData] = useState([])
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = async () => {
    const response = await TeacherService.instance.getMessages()
    console.log(response)
    if (response.status) setTableData(response.messageData)
  }

  const handleView = (row) => {
    navigate('/view-message', { state: { message: row, type: user.type } })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Message List</strong>
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
                    <CTableRow key={row.messageId}>
                      <CTableHeaderCell scope="row">{row.messageClassification}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {row.messageOriginatorsNumber}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.messageDateTime}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.messageFrom}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.messageTo}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{row.messageStatus}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        <CButton onClick={() => handleView(row)}>View</CButton>
                      </CTableHeaderCell>
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
