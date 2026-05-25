"use client";

import React, { useState } from "react";
import axios from "axios";
import Alert from "./components/alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "Credenciales inválidas. Por favor, verifica tu correo electrónico y contraseña e intenta nuevamente.",
      );
      setAlert(true);
      console.error("Error en la solicitud de inicio de sesión:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md border border-gray-200">
      <Alert active={alert} message={errorMessage} setActive={setAlert} />

      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          ¡Hola de nuevo!
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Ingresa tus credenciales para acceder
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="nombre@ejemplo.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-sm transition"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <a
              href="#"
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              ¿La olvidaste?
            </a>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-sm transition"
          />
        </div>

        <button
          disabled={submitting}
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 text-sm shadow-sm mt-2"
        >
          Entrar
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        ¿No tienes cuenta?{" "}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  );
}
