import 'react-toastify/dist/ReactToastify.css'
import './toastify.scss'
import { ToastContainer as ToastifyToastContainer } from 'react-toastify'

const ToastContainer: React.FC = () => {
  return (
    <ToastifyToastContainer
      autoClose={4000}
      pauseOnHover={false}
      hideProgressBar={false}
    />
  )
}

export default ToastContainer
