import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Button, Input } from '../Components/UI';
import { validateForm } from '../utils';

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validationRules = {
    email: { required: true, email: true },
    password: { required: true, minLength: 8 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    const validation = validateForm(data, validationRules);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }
    
    setValidationErrors({});
    post('/login');
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-800">

      <main className="flex-1">      
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={errors.email || validationErrors.email}
              placeholder="la-tua-email@example.com"
              required
              leftIcon={
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              }
            />
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              error={errors.password || validationErrors.password}
              placeholder="La tua password"
              required
              leftIcon={
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Ricordami
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Password dimenticata?
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              disabled={processing}
              loading={processing}
            >
              {processing ? 'Accesso in corso...' : 'Accedi'}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Non hai un account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Registrati qui
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
