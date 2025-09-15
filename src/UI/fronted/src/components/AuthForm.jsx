export default function AuthForm({ onSubmit, isRegister }) {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        className="input input-bordered"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        className="input input-bordered"
        required
      />
      {isRegister && (
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          className="input input-bordered"
          required
        />
      )}
      <button className="btn bg-accent text-white font-bold py-2 rounded hover:bg-gymYellow hover:text-primary transition">
        {isRegister ? "Registrarse" : "Entrar"}
      </button>
    </form>
  );
}
