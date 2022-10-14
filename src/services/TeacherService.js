/* eslint-disable prettier/prettier */
import { ServerConfig } from 'src/config/ServerConfig'
import DefaultService from './DefaultService'
import axios from 'axios'

// No need to change this. Inserted fixed id for the teachers.

class TeacherService {
  static instance = TeacherService.instance || new TeacherService()

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
        console.log('Error in getAllExercise in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addSyndicate(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_add_syndicate')
      try {
        const addTeacherResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_add_syndicate',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addTeacherResponse.data.responseMessage) {
          default:
            return addTeacherResponse.data
        }
      } catch (error) {
        console.log('Error in addTeacher in services/TeacherService.js')
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
        console.log('Error in getCourseStudent in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addExercise(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_add_exercise')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_add_exercise',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in addExercise in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async createDespatch(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_create_despatch')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_create_despatch',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in createDespatch in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async createMessage(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/create_message')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/create_message',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in createDespatch in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async uploadFile(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_upload_file')
      try {
        const addStudentResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_upload_file',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addStudentResponse.data.responseMessage) {
          default:
            return addStudentResponse.data
        }
      } catch (error) {
        console.log('Error in uploadFile in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getDespatchList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_despatch')

      const payload = {
        teacherId: JSON.parse(localStorage.getItem('user')).teacherId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_despatch',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseList in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getRegister() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/get_register')

      try {
        const getCourseListResponse = await axios.get(
          ServerConfig.url.API_URL + '/get_register',
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getMessages in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getMessages() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_messages')

      const payload = {
        teacherId: JSON.parse(localStorage.getItem('user')).teacherId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_messages',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getMessages in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getCourseList() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_teacher_courses')

      const payload = {
        teacherId: JSON.parse(localStorage.getItem('user')).teacherId,
      }

      try {
        const getCourseListResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_teacher_courses',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseList in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getTransitSlip() {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_transit_slip')

      try {
        const getCourseListResponse = await axios.get(
          ServerConfig.url.API_URL + '/teacher_get_transit_slip',
          DefaultService.instance.getHeader(),
        )

        switch (getCourseListResponse.data.responseMessage) {
          default:
            return getCourseListResponse.data
        }
      } catch (error) {
        console.log('Error in getCourseList in services/TeacherService.js')
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
        console.log('Error in getAllSyndicate in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async getSyndicateMembers(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_get_syndicate_members')
      try {
        const addCourseResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_get_syndicate_members',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addCourseResponse.data.responseMessage) {
          default:
            return addCourseResponse.data
        }
      } catch (error) {
        console.log('Error in getAllSyndicate in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }

  async addStudentToSyndicate(payload) {
    let retry = 0

    while (retry++ < 2) {
      console.log(ServerConfig.url.API_URL + '/teacher_add_student_to_syndicate')
      try {
        const addCourseResponse = await axios.post(
          ServerConfig.url.API_URL + '/teacher_add_student_to_syndicate',
          payload,
          DefaultService.instance.getHeader(),
        )

        switch (addCourseResponse.data.responseMessage) {
          default:
            return addCourseResponse.data
        }
      } catch (error) {
        console.log('Error in addCourse in services/TeacherService.js')
        console.log(error)
        retry++
      }
    }
    return DefaultService.instance.defaultResponse()
  }
}

export default TeacherService
