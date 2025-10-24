import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/profile" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">RP</div>
          <div>
            <div className="text-sm font-semibold text-gray-800">RPSoft</div>
            <div className="text-xs text-gray-500">Panel de usuario</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/guide" className="text-sm text-gray-700 hover:text-brand-600">Guía</Link>
          <Link to="/profile" className="text-sm text-gray-700 hover:text-brand-600">Perfil</Link>
          {!user ? (
            <Link to="/login" className="text-sm text-blue-600 font-medium">Entrar</Link>
          ) : (
            <div className="text-sm text-gray-600">Hola, <span className="font-semibold">{user.user_name || user.name}</span></div>
          )}
        </nav>
      </div>
    </header>
  );
};
