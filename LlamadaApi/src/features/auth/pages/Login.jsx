import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData);
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-indigo-900 flex items-center justify-center p-6">
      <div className="bg-black bg-opacity-75 rounded-lg shadow-2xl w-full max-w-md">
        <section className="p-10">
          <h1 className="text-4xl font-bold text-white mb-8 text-center tracking-tight">Iniciar Sesión</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-500 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="••••••••"
                required
              />
            </div>

            {error && <div className="bg-red-600 border border-red-700 text-white px-4 py-3 rounded-lg text-sm">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-500 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-300">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-purple-400 font-medium hover:text-purple-500 transition duration-300">
              Regístrate aquí
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};
