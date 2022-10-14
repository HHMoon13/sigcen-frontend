/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { ClientEnum } from 'src/config/ClientEnum'
import DefaultService from 'src/services/DefaultService'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')

  const handleSubmit = async () => {
    const payload = {
      userEmail: email,
      userPassword: password,
      userType: type,
    }
    console.log(payload)
    const response = await DefaultService.instance.login(payload)
    if (response.status) {
      console.log(response)
      response.user[0].type = type
      localStorage.setItem('user', JSON.stringify(response.user[0]))
      navigate('/', { replace: true })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleFormControlInput2"
                        placeholder="name@example.com"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="exampleFormControlInput2"
                        placeholder="******"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormCheck
                        inline
                        type="radio"
                        id="inlineCheckbox1"
                        value={ClientEnum.ADMIN_TYPE}
                        label={ClientEnum.ADMIN_TYPE}
                        checked={type === ClientEnum.ADMIN_TYPE}
                        onChange={(e) => setType(e.target.value)}
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        id="inlineCheckbox2"
                        value={ClientEnum.TEACHER_TYPE}
                        label={ClientEnum.TEACHER_TYPE}
                        checked={type === ClientEnum.TEACHER_TYPE}
                        onChange={(e) => setType(e.target.value)}
                      />
                      <CFormCheck
                        inline
                        type="radio"
                        id="inlineCheckbox3"
                        value={ClientEnum.STUDENT_TYPE}
                        label={ClientEnum.STUDENT_TYPE}
                        checked={type === ClientEnum.STUDENT_TYPE}
                        onChange={(e) => setType(e.target.value)}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
