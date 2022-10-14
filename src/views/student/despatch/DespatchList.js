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

const column = [
  'Letter No.',
  'Security Classification',
  'Date',
  'Precedence',
  "Originator's No",
  'From',
  'To',
  'Status',
  'Actions',
]

const CreateDespatch = () => {
  const [tableData, setTableData] = useState([])
  const [showModal, setShowModal] = useState(false)

  const [studentList, setStudentList] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState('')

  const [transitList, setTransitList] = useState([])
  const [selectedTransitId, setSelectedTransitId] = useState('')

  const [selectedDespatch, setSelectedDespatch] = useState({})

  const user = localStorage.getItem('user')

  const [method, setMethod] = useState(0)

  useEffect(() => {
    fetchDespatchList()
  }, [])

  const fetchDespatchList = async () => {
    const response = await StudentService.instance.getDespatchList()
    console.log(response)
    if (response.status) setTableData(response.despatchData)
  }

  const fetchTransitList = async () => {
    const response = await StudentService.instance.getNewTransitSlip()
    console.log(response)
    if (response.status) setTransitList(response.transitSlipData)
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

  const handleTransitSelect = (e) => {
    setSelectedTransitId(e.target.value)
  }

  const addToSlipModalShow = async (row) => {
    setMethod(1)
    setShowModal(true)
    setSelectedDespatch(row)
    fetchTransitList()
    // const response = await StudentService.instance.addToSlip()
    // console.log(response)
    // if (response.status) setTableData(response.despatchData)
  }

  const assignToStudentModalShow = async (row) => {
    setMethod(0)
    setShowModal(true)
    setSelectedDespatch(row)
    fetchSyndicateMembers(row.syndicateId)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const assign = async () => {
    const payload = {
      syndicateId: selectedDespatch.syndicateId,
      studentId: selectedStudentId,
      despatchId: selectedDespatch.despatchId,
    }
    console.log(payload)
    const response = await StudentService.instance.assignToStudent(payload)
    console.log(response)
    if (response.status) {
      setShowModal(false)
      fetchDespatchList()
    }
  }

  const addToTransitSlip = async () => {
    const payload = {
      syndicateId: selectedDespatch.syndicateId,
      transitSlipId: selectedTransitId,
      despatchId: selectedDespatch.despatchId,
    }
    const response = await StudentService.instance.addToSlip(payload)
    console.log(response)
    if (response.status) {
      setShowModal(false)
      fetchDespatchList()
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
          {method === 0 ? (
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
          ) : (
            <CContainer className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput3">Select Slip</CFormLabel>
              <CFormSelect
                className="mb-3"
                value={selectedTransitId}
                onChange={handleTransitSelect}
                aria-label="Default select example"
              >
                <option value="">Choose A Transit Slip</option>
                {transitList.map((slip) => {
                  return (
                    <option key={slip.transitSlipId} value={slip.transitSlipId}>
                      {slip.transitSlipNumber}: {slip.transitSlipFrom} - {slip.transitSlipTo}
                    </option>
                  )
                })}
              </CFormSelect>
            </CContainer>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton onClick={closeModal} color="secondary">
            Close
          </CButton>
          <CButton onClick={method === 0 ? assign : addToTransitSlip} color="primary">
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
            <strong>Despatch List</strong>
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
                      <CTableHeaderCell scope="row">{row.despatchStatus}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {row.studentRole === ClientEnum.SUPERINDENDENT_TYPE ? (
                          <CButton
                            disabled={row.despatchStatus !== 'NEW'}
                            onClick={() => assignToStudentModalShow(row)}   
                          >
                            Assign
                          </CButton>
                        ) : (
                          <CButton
                            disabled={row.despatchStatus === 'ADDED'}
                            onClick={() => addToSlipModalShow(row)}
                          >
                            Add to Slip
                          </CButton>
                        )}
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
