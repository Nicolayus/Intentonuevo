import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return <div className="p-8 text-center text-white">Cargando perfil...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center rounded-t-xl">
          <h1 className="text-4xl font-extrabold mb-2">Perfil de Usuario</h1>
          <p className="text-lg">Revisa los detalles de tu cuenta</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-teal-200 mb-1">Nombre Completo</p>
              <p className="text-xl font-semibold">{user.name}</p>
            </div>
            <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-teal-200 mb-1">Usuario</p>
              <p className="text-xl font-semibold">{user.user_name}</p>
            </div>
            <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-teal-200 mb-1">Email</p>
              <p className="text-xl font-semibold">{user.email}</p>
            </div>
            <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-teal-200 mb-1">Teléfono</p>
              <p className="text-xl font-semibold">{user.phone}</p>
            </div>
            {user.role && (
              <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
                <p className="text-sm text-teal-200 mb-1">Rol</p>
                <p className="text-xl font-semibold">{user.role.name}</p>
              </div>
            )}
            {user.country && (
              <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
                <p className="text-sm text-teal-200 mb-1">País</p>
                <p className="text-xl font-semibold">{user.country.name}</p>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLogout}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-xl shadow-md transition duration-300"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
