'use client';

const UnauthorizedTemplate = () => (
  <>
    <span> Não autorizado, por favor faça login</span>
    <a href="/api/auth/login">Login</a>
  </>
);

export default UnauthorizedTemplate
