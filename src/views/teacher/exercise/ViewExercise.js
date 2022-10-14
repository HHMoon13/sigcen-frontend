/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import AdminService from 'src/services/AdminService'
import TeacherService from 'src/services/TeacherService'
import { useLocation } from 'react-router-dom'

const ViewExercise = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState({})

  const location = useLocation()
  const exercise = location.state.exercise

  useEffect(() => {}, [])

  const handleSubmit = async () => {
    if (name === '') return

    const payload = {
      fileName: name.trim(),
      exerciseId: exercise.exerciseId,
      file: file,
    }

    console.log(payload)
    const response = await TeacherService.instance.uploadFile(payload)

    if (response.status) {
      setName('')
      setFile({})
      console.log(response.responseMessage)
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Student</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">File Name</CFormLabel>
                <CFormInput
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Upload File</CFormLabel>
                <CFormInput type="file" id="formFile" onChange={handleFileChange} />
              </div>
            </CForm>
            <CContainer className="my-3 d-flex justify-content-end">
              <CButton color="primary" onClick={handleSubmit}>
                Submit
              </CButton>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewExercise
