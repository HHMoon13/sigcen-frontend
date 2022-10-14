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
  CModal,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import TeacherService from 'src/services/TeacherService'
import { ClientEnum } from 'src/config/ClientEnum'
import { useNavigate } from 'react-router-dom'
import StudentService from 'src/services/StudentService'

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

  const [selectedMessage, setSelectedMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [studentList, setStudentList] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = async () => {
    const response = await StudentService.instance.getMessages()
    console.log(response)
    if (response.status) setTableData(response.messageData)
  }

  const fetchSyndicateMembers = async (syndicateId) => {
    if (syndicateId === '') return
    const payload = { syndicateId: syndicateId }
    const response = await TeacherService.instance.getSyndicateMembers(payload)
    console.log(response)
    if (response.status) {
      setStudentList(response.syndicateData)
    }
  }

  const handleStudentSelect = (e) => {
    setSelectedStudentId(e.target.value)
  }

  const handleView = (row) => {
    navigate('/view-message', { state: { message: row, type: user.type } })
  }

  const assignToStudentModalShow = async (row) => {
    setShowModal(true)
    setSelectedMessage(row)
    fetchSyndicateMembers(row.syndicateId)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const assign = async () => {
    const payload = {
      syndicateId: selectedMessage.syndicateId,
      studentId: selectedStudentId,
      messageId: selectedMessage.messageId,
    }
    console.log(payload)
    const response = await StudentService.instance.assignMessageToStudent(payload)
    console.log(response)
    if (response.status) {
      setShowModal(false)
      fetchMessageList()
    }
  }

  function buildModal() {
    return (
      <CModal
        className="show d-block position-fixed"
        backdrop={false}
        keyboard={false}
        portal={false}
        onClose={closeModal}
        visible={showModal}
      >
        <CModalHeader>
          <CModalTitle>React Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CContainer className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput3">Select Student</CFormLabel>
            <CFormSelect
              className="mb-3"
              value={selectedStudentId}
              onChange={handleStudentSelect}
              aria-label="Default select example"
            >
              <option value="">Choose A Student</option>
              {studentList.map((student) => {
                return (
                  <option key={student.studentId} value={student.studentId}>
                    {student.studentName} - {student.studentRole}
                  </option>
                )
              })}
            </CFormSelect>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton onClick={closeModal} color="secondary">
            Close
          </CButton>
          <CButton onClick={assign} color="primary">
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    )
  }

  return (
    <CRow>
      {buildModal()}
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
                        {row.studentRole === ClientEnum.SUPERINDENDENT_TYPE ? (
                          <CButton
                            disabled={row.messageStatus !== 'NEW'}
                            onClick={() => assignToStudentModalShow(row)}
                          >
                            Assign
                          </CButton>
                        ) : (
                          <></>
                        )}
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
