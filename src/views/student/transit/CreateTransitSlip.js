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
import StudentService from 'src/services/StudentService'

const CreateTransitSlip = () => {
  const [slipNumber, setSlipNumber] = useState('')
  const [courier, setCourier] = useState('')
  const [route, setRoute] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  useEffect(() => {
    // fetchCourseList()
  }, [])

  //   const fetchCourseList = async () => {
  //     const response = await TeacherService.instance.getCourseList()
  //     console.log(response)
  //     if (response.status) setCourseList(response.teacherCourseData)
  //   }

  const handleSubmit = async () => {
    const payload = {
      transitSlipNumber: slipNumber,
      transitSlipCourier: courier,
      transitSlipRoute: route,
      transitSlipFrom: from,
      transitSlipTo: to,
    }

    const response = await StudentService.instance.createTransitSlip(payload)
    console.log(response)
    if (response.status) {
      setCourier('')
      setRoute('')
      setFrom('')
      setTo('')
    }
    console.log(payload)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Transit Slip</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CContainer className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Transit Slip No.</CFormLabel>
                <CFormInput
                  type="text"
                  value={slipNumber}
                  onChange={(e) => setSlipNumber(e.target.value)}
                  placeholder="Transit Slip No."
                />
              </CContainer>
              <CContainer className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Route</CFormLabel>
                <CFormInput
                  type="text"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  placeholder="Route"
                />
              </CContainer>
              <CContainer className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Courier</CFormLabel>
                <CFormInput
                  type="text"
                  value={courier}
                  onChange={(e) => setCourier(e.target.value)}
                  placeholder="Courier"
                />
              </CContainer>
              <CContainer className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">From</CFormLabel>
                <CFormInput
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="From"
                />
              </CContainer>
              <CContainer className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">To</CFormLabel>
                <CFormInput
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="To"
                />
              </CContainer>
              <CContainer className="my-3 d-flex justify-content-end">
                <CButton color="primary" onClick={handleSubmit}>
                  Submit
                </CButton>
              </CContainer>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateTransitSlip
