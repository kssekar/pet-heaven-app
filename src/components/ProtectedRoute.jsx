import { Navigate } from 'react-router-dom'
import { useApp } from './AppContext'

const ProtectedRoute = ({ children }) => {
  const { member } = useApp()
  if (!member) {
    return <Navigate to="/register" replace state={{ message: 'Please register as a member to adopt a pet.' }} />
  }
  return children
}
export default ProtectedRoute