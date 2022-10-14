/* eslint-disable prettier/prettier */
import { ServerConfig } from 'src/config/ServerConfig'
import DefaultService from './DefaultService'
import axios from 'axios'

// No need to change this. Inserted fixed id for the teachers.

class StudentService {
  static instance = StudentService.instance || new StudentService()

  async getAllExercise(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_course_exercises')
      try {
        const getTeacherListResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_course_exercises',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getTeacherListResponse.data.responseMessage) {
          default:
            return getTeacherListResponse.data
        }
      } catch (error) {
        console.log('Error in getAllExercise in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async assignToStudent(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_assign_despatch')
      try {
        const addTeacherResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_assign_despatch',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addTeacherResponse.data.responseMessage) {
          default:
            return addTeacherResponse.data
        }
      } catch (error) {
        console.log('Error in assignToStudent in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async assignMessageToStudent(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_assign_message')
      try {
        const addTeacherResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_assign_message',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addTeacherResponse.data.responseMessage) {
          default:
            return addTeacherResponse.data
        }
      } catch (error) {
        console.log('Error in assignToStudent in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getCourseStudent(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_course_students')
      try {
        const getStudentListResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_course_students',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getStudentListResponse.data.responseMessage) {
          default:
            return getStudentListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseStudent in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getNewTransitSlip(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_new_transit_slip')
      try {
        const getStudentListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_new_transit_slip',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getStudentListResponse.data.responseMessage) {
          default:
            return getStudentListResponse.data
        }
      } catch (error) {
        console.log('Error in getNewTransitSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addToSlip(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_add_despatch_to_transit_slip')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_add_despatch_to_transit_slip',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in addToSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async createTransitSlip(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/create_transit_slip')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/create_transit_slip',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in createTransitSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getCourseList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_courses')

      const payload = {
        studentId: JSON.parse(localStorage.getItem('user')).studentId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_courses',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseList in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getDespatchList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_despatches')

      const payload = {
        studentId: JSON.parse(localStorage.getItem('user')).studentId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_despatches',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getDespatchList in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getTransitSlip() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_transit_slips')

      const payload = {
        studentId: JSON.parse(localStorage.getItem('user')).studentId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_transit_slips',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getTransitSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getTransitSlipDespatch(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_transit_slip_despatches')

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_transit_slip_despatches',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getTransitSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getMessages() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_get_messages')

      const payload = {
        studentId: JSON.parse(localStorage.getItem('user')).studentId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_get_messages',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getMessages in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async updateMessage(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_update_message')

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_update_message',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in updateMessage in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async updateTransitSlip(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/student_update_transit_slip')

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/student_update_transit_slip',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getTransitSlip in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getAllSyndicate(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_syndicate')
      try {
        const addCourseResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_syndicate',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addCourseResponse.data.responseMessage) {
          default:
            return addCourseResponse.data
        }
      } catch (error) {
        console.log('Error in getAllSyndicate in services/StudentService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }
}

export default StudentService
