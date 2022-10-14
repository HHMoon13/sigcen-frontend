/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { ClientEnum } from './config/ClientEnum'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Admin',
  },
  {
    component: CNavGroup,
    name: 'Teacher',
    to: '/admin/teacher',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.ADMIN_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Teacher List',
        to: '/admin/teacher/teacher-list',
        authority: ClientEnum.ADMIN_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Teacher',
        to: '/admin/teacher/add-teacher',
        authority: ClientEnum.ADMIN_TYPE,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Student',
    to: '/admin/student',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.ADMIN_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Student List',
        to: '/admin/student/student-list',
        authority: ClientEnum.ADMIN_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/admin/student/add-student',
        authority: ClientEnum.ADMIN_TYPE,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Course',
    to: '/admin/course',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.ADMIN_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Course List',
        to: '/admin/course/course-list',
        authority: ClientEnum.ADMIN_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Course',
        to: '/admin/course/add-course',
        authority: ClientEnum.ADMIN_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Student To Course',
        to: '/admin/course/add-student-to-course',
        authority: ClientEnum.ADMIN_TYPE,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Teacher',
  },
  {
    component: CNavItem,
    name: 'Course List',
    to: '/teacher/course-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
  },
  {
    component: CNavItem,
    name: 'Student List',
    to: '/teacher/student-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
  },
  {
    component: CNavGroup,
    name: 'Exercise',
    to: '/teacher/exercise',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Exercise List',
        to: '/teacher/exercise/exercise-list',
        authority: ClientEnum.TEACHER_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Exercise',
        to: '/teacher/exercise/add-exercise',
        authority: ClientEnum.TEACHER_TYPE,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Syndicate',
    to: '/teacher/syndicate',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Syndicate List',
        to: '/teacher/syndicate/syndicate-list',
        authority: ClientEnum.TEACHER_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Syndicate',
        to: '/teacher/syndicate/add-syndicate',
        authority: ClientEnum.TEACHER_TYPE,
      },
      {
        component: CNavItem,
        name: 'Add Student To Syndicate',
        to: '/teacher/syndicate/add-student-to-syndicate',
        authority: ClientEnum.TEACHER_TYPE,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Message',
    to: '/teacher/message-list',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Message List',
        to: '/teacher/message-list',
        authority: ClientEnum.TEACHER_TYPE,
      },
      {
        component: CNavItem,
        name: 'Create message',
        to: '/teacher/create-message',
        authority: ClientEnum.TEACHER_TYPE,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Despatch',
    to: '/teacher/despatch',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Despatch List',
        to: '/teacher/despatch/despatch-list',
        authority: ClientEnum.TEACHER_TYPE,
      },
      {
        component: CNavItem,
        name: 'Create Despatch',
        to: '/teacher/despatch/create-despatch',
        authority: ClientEnum.TEACHER_TYPE,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Transit Slip List',
    to: '/teacher/transit-slip-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
  },
  {
    component: CNavItem,
    name: 'Course List',
    to: '/student/course-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
  },
  {
    component: CNavItem,
    name: 'Exercise List',
    to: '/student/exercise-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
  },
  {
    component: CNavItem,
    name: 'Message List',
    to: '/student/message-list',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
  },
  {
    component: CNavItem,
    name: 'Despatch List',
    to: '/student/despatch',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
  },
  {
    component: CNavGroup,
    name: 'Transit Slip',
    to: '/student/transit',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
    items: [
      {
        component: CNavItem,
        name: 'Transit Slip List',
        to: '/student/transit-slip-list',
        authority: ClientEnum.STUDENT_TYPE,
      },
      {
        component: CNavItem,
        name: 'Create Transit Slip',
        to: '/student/create-transit-slip',
        authority: ClientEnum.STUDENT_TYPE,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Register',
    to: '/register',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.STUDENT_TYPE,
  },
  {
    component: CNavItem,
    name: 'Register',
    to: '/register',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    authority: ClientEnum.TEACHER_TYPE,
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
