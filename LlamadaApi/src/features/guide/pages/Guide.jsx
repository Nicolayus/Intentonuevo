import { DidacticCard } from '../../../components/DidacticCard';

export const Guide = () => {
  const cards = [
    {
      title: 'Cómo usar la aplicación',
      description: 'Pasos básicos para navegar y usar las funciones principales.',
      steps: [
        { title: 'Registro e inicio de sesión', detail: 'Crea una cuenta desde Registrarse y accede desde Iniciar Sesión.' },
        { title: 'Perfil', detail: 'En Perfil puedes ver y cerrar sesión.' },
        { title: 'Seguridad', detail: 'Usa contraseñas seguras y no compartas tu token.' }
      ]
    },
    {
      title: 'Consejos didácticos',
      description: 'Pequeñas recomendaciones para mantener buena práctica.',
      steps: [
        { title: 'Contraseñas', detail: 'Usa una contraseña de al menos 8 caracteres.' },
        { title: 'Información', detail: 'Mantén tu información actualizada en el perfil.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Guía rápida</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <DidacticCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};
