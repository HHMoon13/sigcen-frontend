/* eslint-disable prettier/prettier */
import { ServerConfig } from 'src/config/ServerConfig'
import DefaultService from './DefaultService'
import axios from 'axios'

class AdminService {
  static instance = AdminService.instance || new AdminService()

  async getTeacherList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_get_teachers')
      try {
        const getTeacherListResponse = await axios.get(
          ServerConfig.url.API_URL + '/admin_get_teachers',
          DefaultService.instance.getHeader(),
        )

        switch (getTeacherListResponse.data.responseMessage) {
          default:
            return getTeacherListResponse.data
        }
      } catch (error) {
        console.log('Error in getTeacherList in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addTeacher(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_add_teacher')
      try {
        const addTeacherResponse = await axios.post(
          ServerConfig.url.API_URL + '/admin_add_teacher',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addTeacherResponse.data.responseMessage) {
          default:
            return addTeacherResponse.data
        }
      } catch (error) {
        console.log('Error in addTeacher in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getStudentList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_get_students')
      try {
        const getStudentListResponse = await axios.get(
          ServerConfig.url.API_URL + '/admin_get_students',
          DefaultService.instance.getHeader(),
        )

        switch (getStudentListResponse.data.responseMessage) {
          default:
            return getStudentListResponse.data
        }
      } catch (error) {
        console.log('Error in getStudentList in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addStudent(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_add_student')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/admin_add_student',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in addStudent in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getCourseList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_get_courses')
      try {
        const getCourseListResponse = await axios.get(
          ServerConfig.url.API_URL + '/admin_get_courses',
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseList in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addCourse(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_add_course')
      try {
        const addCourseResponse = await axios.post(
          ServerConfig.url.API_URL + '/admin_add_course',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addCourseResponse.data.responseMessage) {
          default:
            return addCourseResponse.data
        }
      } catch (error) {
        console.log('Error in addCourse in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addStudentToCourse(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/admin_add_student_to_course')
      try {
        const addCourseResponse = await axios.post(
          ServerConfig.url.API_URL + '/admin_add_student_to_course',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addCourseResponse.data.responseMessage) {
          default:
            return addCourseResponse.data
        }
      } catch (error) {
        console.log('Error in addCourse in services/AdminService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }
}

export default AdminService
