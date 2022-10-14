/* eslint-disable prettier/prettier */
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//admin routes

//teacher
const AdminTeacherList = React.lazy(() => import('./views/admin/teacher/AdminTeacherList'))
const AdminAddTeacher = React.lazy(() => import('./views/admin/teacher/AdminAddTeacher'))

//student
const AdminStudentList = React.lazy(() => import('./views/admin/student/AdminStudentList'))
const AdminAddStudent = React.lazy(() => import('./views/admin/student/AdminAddStudent'))

//course
const AdminCourseList = React.lazy(() => import('./views/admin/course/AdminCourseList'))
const AdminAddCourse = React.lazy(() => import('./views/admin/course/AdminAddCourse'))
const AdminAddStudentToCourse = React.lazy(() =>
  import('./views/admin/course/AdminAddStudentToCourse'),
)

// teacher routes

// courses
const TeacherCourseList = React.lazy(() => import('./views/teacher/TeacherCourseList'))

//students
const TeacherStudentList = React.lazy(() => import('./views/teacher/TeacherStudentList'))

//exercise
const TeacherExerciseList = React.lazy(() => import('./views/teacher/exercise/TeacherExerciseList'))
const TeacherAddExercise = React.lazy(() => import('./views/teacher/exercise/TeacherAddExercise'))
const ViewExercise = React.lazy(() => import('./views/teacher/exercise/ViewExercise'))

//syndicate
const TeacherSyndicateList = React.lazy(() =>
  import('./views/teacher/syndicate/TeacherSyndicateList'),
)
const TeacherAddSyndicate = React.lazy(() =>
  import('./views/teacher/syndicate/TeacherAddSyndicate.js'),
)
const AddStudentToSyndicate = React.lazy(() =>
  import('./views/teacher/syndicate/AddStudentToSyndicate'),
)

const Register = React.lazy(() => import('./views/Register'))

//despatch
const TeacherCreateDespatch = React.lazy(() => import('./views/teacher/despatch/CreateDespatch'))
const TeacherDespatchList = React.lazy(() => import('./views/teacher/despatch/DespatchList'))

//transit
const TeacherTransitList = React.lazy(() => import('./views/teacher/TransitSlip'))

// students routes

//course
const StudentCourseList = React.lazy(() => import('./views/student/StudentCourseList'))

//exercise
const StudentExerciseList = React.lazy(() => import('./views/student/StudentExerciseList'))

//despatch
// const CreateDespatch = React.lazy(() => import('./views/student/despatch/CreateDespatch'))
const DespatchList = React.lazy(() => import('./views/student/despatch/DespatchList'))

//transit
const CreateTransitSlip = React.lazy(() => import('./views/student/transit/CreateTransitSlip'))
const StudentTransitSlipList = React.lazy(() => import('./views/student/transit/TransitSlipList'))

//message
const CreateMessage = React.lazy(() => import('./views/teacher/message/CreateMessage'))
const MessageList = React.lazy(() => import('./views/teacher/message/MessageList'))
const ViewMessage = React.lazy(() => import('./views/student/message/ViewMessage'))
const StudentMessageList = React.lazy(() => import('./views/student/message/MessageList'))

const ViewTransitSlip = React.lazy(() => import('./views/student/transit/ViewTransitSlip'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  {
    path: '/buttons/button-groups',
    name: 'Button Groups',
    element: ButtonGroups,
  },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  {
    path: '/forms/checks-radios',
    name: 'Checks & Radios',
    element: ChecksRadios,
  },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  {
    path: '/forms/floating-labels',
    name: 'Floating Labels',
    element: FloatingLabels,
  },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  {
    path: '/notifications',
    name: 'Notifications',
    element: Alerts,
    exact: true,
  },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/admin/teacher', name: 'Widgets', element: AdminTeacherList },
  { path: '/admin/teacher/teacher-list', name: 'Teacher List', element: AdminTeacherList },
  { path: '/admin/teacher/add-teacher', name: 'Add Teacher', element: AdminAddTeacher },
  { path: '/admin/student', name: 'Widgets', element: AdminStudentList },
  { path: '/admin/student/student-list', name: 'Student List', element: AdminStudentList },
  { path: '/admin/student/add-student', name: 'Add Student', element: AdminAddStudent },
  { path: '/admin/course', name: 'Widgets', element: AdminCourseList },
  { path: '/admin/course/course-list', name: 'Course List', element: AdminCourseList },
  { path: '/admin/course/add-course', name: 'Add Course', element: AdminAddCourse },
  {
    path: '/admin/course/add-student-to-course',
    name: 'Add Student To Course',
    element: AdminAddStudentToCourse,
  },
  { path: '/teacher/course-list', name: 'Course List', element: TeacherCourseList },
  { path: '/teacher/student-list', name: 'Student List', element: TeacherStudentList },
  { path: '/teacher/exercise', name: 'Exercise', element: TeacherExerciseList },
  { path: '/teacher/exercise/exercise-list', name: 'Exercise List', element: TeacherExerciseList },
  { path: '/teacher/exercise/add-exercise', name: 'Add Exercise', element: TeacherAddExercise },
  { path: '/teacher/syndicate', name: 'Syndicate', element: TeacherSyndicateList },
  {
    path: '/teacher/syndicate/syndicate-list',
    name: 'Syndicate List',
    element: TeacherSyndicateList,
  },
  { path: '/teacher/syndicate/add-syndicate', name: 'Add Syndicate', element: TeacherAddSyndicate },
  {
    path: '/teacher/syndicate/add-student-to-syndicate',
    name: 'Add Student To Syndicate',
    element: AddStudentToSyndicate,
  },
  { path: '/teacher/despatch/despatch-list', name: 'Despatch List', element: TeacherDespatchList },
  {
    path: '/teacher/despatch/create-despatch',
    name: 'Create Despatch',
    element: TeacherCreateDespatch,
  },
  {
    path: '/teacher/transit-slip-list',
    name: 'Transit Slip List',
    element: TeacherTransitList,
  },
  {
    path: '/teacher/create-message',
    name: 'Create Message',
    element: CreateMessage,
  },
  {
    path: '/teacher/message-list',
    name: 'Message List',
    element: MessageList,
  },
  {
    path: '/student/course-list',
    name: 'Course List',
    element: StudentCourseList,
  },
  {
    path: '/student/exercise-list',
    name: 'Exercise List',
    element: StudentExerciseList,
  },
  {
    path: '/student/despatch',
    name: 'Despatch List',
    element: DespatchList,
  },
  {
    path: '/student/transit-slip',
    name: 'Transit Slip',
    element: StudentTransitSlipList,
  },
  {
    path: '/student/create-transit-slip',
    name: 'Create Transit Slip',
    element: CreateTransitSlip,
  },
  {
    path: '/student/transit-slip-list',
    name: 'Transit Slip List',
    element: StudentTransitSlipList,
  },
  {
    path: '/view-transit-slip',
    name: 'View Transit Slip',
    element: ViewTransitSlip,
  },
  {
    path: '/view-message',
    name: 'View Message',
    element: ViewMessage,
  },
  {
    path: '/student/message-list',
    name: 'Message List',
    element: StudentMessageList,
  },
  {
    path: '/register',
    name: 'Register',
    element: Register,
  },
  {
    path: '/view-exercise',
    name: 'View Exercise',
    element: ViewExercise,
  },
]

export default routes
