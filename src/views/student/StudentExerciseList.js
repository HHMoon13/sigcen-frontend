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
import StudentService from 'src/services/StudentService'

const column = ['Exercise Name']

const TeacherExerciseList = () => {
  const [exerciseList, setExerciseList] = useState([])
  const [courseList, setCourseList] = useState([])
  const [selectedCourseId, setSelectedCourseId] = useState('')

  useEffect(() => {
    fetchCourseList()
  }, [])

  const fetchCourseList = async () => {
    const response = await StudentService.instance.getCourseList()
    console.log(response)
    if (response.status) setCourseList(response.courseData)
  }

  const fetchExerciseList = async (courseId) => {
    if (courseId === '') return
    const payload = { courseId: courseId }
    const response = await TeacherService.instance.getAllExercise(payload)
    console.log(response)
    if (response.status) {
      setExerciseList(response.exerciseList)
    }
  }

  const handleCourseSelect = (e) => {
    setSelectedCourseId(e.target.value)
    fetchExerciseList(e.target.value)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Exercise In Course</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput3">Select Course</CFormLabel>
              <CFormSelect
                onChange={handleCourseSelect}
                value={selectedCourseId}
                aria-label="Default select example"
              >
                <option value="">Choose A Course</option>
                {courseList.map((course) => {
                  return (
                    <option key={course.courseId} value={course.courseId}>
                      {course.courseName}
                    </option>
                  )
                })}
              </CFormSelect>
            </CContainer>
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
                {exerciseList.map((row) => {
                  return (
                    <CTableRow key={row.exerciseId}>
                      <CTableHeaderCell scope="row">{row.exerciseName}</CTableHeaderCell>
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

export default TeacherExerciseList
