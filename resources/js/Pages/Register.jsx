import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { GuestLayout } from '../Layouts';
import { Button, Input } from '../Components/UI';
import { validateForm } from '../utils';

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    password: { required: true, minLength: 8 },
    password_confirmation: { required: true }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    const validation = validateForm(data, validationRules);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }
    
    // Password confirmation validation
    if (data.password !== data.password_confirmation) {
      setValidationErrors({ password_confirmation: 'Le password non coincidono' });
      return;
    }
    
    setValidationErrors({});
    post('/register');
  };

  return (
    <GuestLayout>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            label="Nome Completo"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name || validationErrors.name}
            placeholder="Il tuo nome completo"
            required
            leftIcon={
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
        </div>

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

        <div>
          <Input
            label="Conferma Password"
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            error={errors.password_confirmation || validationErrors.password_confirmation}
            placeholder="Conferma la password"
            required
            leftIcon={
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            disabled={processing}
            loading={processing}
          >
            {processing ? 'Registrazione in corso...' : 'Registrati'}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Hai già un account?{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Accedi qui
            </Link>
          </p>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Register;
