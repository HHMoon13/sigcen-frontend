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
import { useLocation } from 'react-router-dom'
import StudentService from 'src/services/StudentService'

const column = ['Name', 'Email', 'Phone']

const ViewMessage = () => {
  const location = useLocation()
  const message = location.state.message
  const type = location.state.type
  const [key, setKey] = useState('')

  console.log(location.state)

  useEffect(() => {
    window.addEventListener('keydown', detectKey, true)
    return () => {
      window.removeEventListener('keydown', detectKey, true)
    }
  }, [])

  const detectKey = (e) => {
    if (
      type !== ClientEnum.STUDENT_TYPE &&
      message.studentRole === undefined &&
      message.studentRole !== ClientEnum.IN_OUT_CLERK &&
      message.messageStatus !== 'PENDING'
    )
      return
    setKey(e.key.toUpperCase())
    console.log(e.key.toUpperCase())
  }

  const handleSubmit = async () => {
    const payload = {
      messageId: message.messageId,
      messageStatus: 'ACCEPTED',
    }
    const response = await StudentService.instance.updateMessage(payload)
    console.log(response)
  }

  const handleReject = async () => {
    const payload = {
      messageId: message.messageId,
      messageStatus: 'REJECTED',
    }
    const response = await StudentService.instance.updateMessage(payload)
    console.log(response)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Message Details</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={3} className={key === 'P' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Precedence Action</CFormLabel>
                  <CFormInput
                    type="text"
                    value={message.messageAction}
                    placeholder="Precedence Action"
                  />
                </CContainer>
              </CCol>
              <CCol md={3} className={key === 'P' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Precedence Info</CFormLabel>
                  <CFormInput
                    type="text"
                    value={message.messagePrecedence}
                    placeholder="Precedence Info"
                  />
                </CContainer>
              </CCol>
              <CCol md={3} className={key === 'D' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Date-Time Group</CFormLabel>
                  <CFormInput type="text" value={message.messageDateTime} placeholder="Date-Time" />
                </CContainer>
              </CCol>
              <CCol md={3}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Message Instructions</CFormLabel>
                  <CFormInput
                    type="text"
                    value={message.messageInstructions}
                    placeholder="Message Instructions"
                  />
                </CContainer>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={8} className={key === 'A' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">From</CFormLabel>
                  <CFormInput type="text" value={message.messageFrom} placeholder="From" />
                </CContainer>
              </CCol>
              <CCol md={4}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Prefix</CFormLabel>
                  <CFormInput type="text" value={message.messagePrefix} placeholder="Prefix" />
                </CContainer>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={8} className={key === 'A' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">To</CFormLabel>
                  <CFormInput type="text" value={message.messageTo} placeholder="to" />
                </CContainer>
              </CCol>
              <CCol md={4}>
                <CCol className={key === 'C' ? 'bg-danger bg-opacity-25' : ''}>
                  <CContainer className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">
                      Security Classification
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      value={message.messageClassification}
                      placeholder="Classification"
                    />
                  </CContainer>
                </CCol>
                <CCol className={key === 'O' ? 'bg-danger bg-opacity-25' : ''}>
                  <CContainer className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Originator Number</CFormLabel>
                    <CFormInput
                      type="text"
                      value={message.messageOriginatorsNumber}
                      placeholder="Originator Number"
                    />
                  </CContainer>
                </CCol>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={8}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Info</CFormLabel>
                  <CFormInput type="text" value={message.messageInfo} placeholder="Info" />
                </CContainer>
              </CCol>
              <CCol md={4}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Special Instructions</CFormLabel>
                  <CFormInput
                    type="text"
                    value={message.messageSpecialInstructions}
                    placeholder="Special Instructions"
                  />
                </CContainer>
              </CCol>
            </CRow>
            <CRow>
              <CCol className={key === 'T' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Text</CFormLabel>
                  <CFormTextarea
                    rows={3}
                    type="text"
                    value={message.messageText}
                    placeholder="Text"
                  />
                </CContainer>
              </CCol>
            </CRow>
            <CRow>
              <CCol className={key === 'S' ? 'bg-danger bg-opacity-25' : ''}>
                <CContainer className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Signature And Rank</CFormLabel>
                  <CFormInput
                    type="text"
                    value={message.messageSignRank}
                    placeholder="Signature And Rank"
                  />
                </CContainer>
              </CCol>
            </CRow>

            {type === ClientEnum.STUDENT_TYPE &&
            message.studentRole &&
            message.studentRole === ClientEnum.IN_OUT_CLERK &&
            message.messageStatus === 'PENDING' ? (
              <CContainer className="my-3 d-flex justify-content-end">
                <CButton color="danger" onClick={handleReject}>
                  Reject
                </CButton>
                <CButton color="primary" onClick={handleSubmit}>
                  Accept
                </CButton>
              </CContainer>
            ) : (
              <></>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewMessage
