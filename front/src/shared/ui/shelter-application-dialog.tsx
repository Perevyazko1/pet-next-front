'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import * as Dialog from '@radix-ui/react-dialog';

import { texts } from '@/shared/constants/texts';
import { apiClient } from '@/shared/lib/api-client';
import { formatPhone } from '@/shared/lib';
import { Input } from '@heroui/input';
import { Button } from '@/shared/ui/button';
import { IconCross } from '@/shared/ui/icons/IconCross';

interface ShelterApplicationData {
  contact_name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  website: string;
  comment: string;
}

const emptyForm: ShelterApplicationData = {
  contact_name: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  website: '',
  comment: '',
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const inputClassNames = {
  inputWrapper: [
    '!px-4 !py-2 !rounded-lg !bg-accent',
    'border-outline-primary border-b',
    'after:!h-[1px] after:bottom-[-1px] after:bg-accent',
    'group-data-[invalid=true]:border-error',
    'group-data-[invalid=true]:after:!bg-error',
    'shadow-none',
  ],
  innerWrapper: 'pb-0',
  input:
    '!text-black !font-normal placeholder:text-[#121212B2] placeholder:text-sm',
};

export const ShelterApplicationDialog = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ShelterApplicationData>(emptyForm);
  const [errors, setErrors] = useState<Partial<ShelterApplicationData>>({});
  const [success, setSuccess] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ShelterApplicationData) =>
      apiClient({
        url: '/api/shelter-applications/',
        method: 'POST',
        data,
      }),
    onSuccess: () => {
      setSuccess(true);
      setForm(emptyForm);
    },
  });

  const clearError = (field: keyof ShelterApplicationData) => {
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const handleSubmit = () => {
    const next: Partial<ShelterApplicationData> = {};
    if (!form.contact_name.trim()) next.contact_name = 'Введите имя';
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone) next.phone = 'Введите телефон';
    else if (digits.length < 11) next.phone = 'Введите полный номер';
    if (!form.city.trim()) next.city = 'Введите город';
    if (!form.address.trim()) next.address = 'Введите адрес';
    if (form.email && !isValidEmail(form.email))
      next.email = 'Некорректный email';

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    mutate(form);
  };

  const handleClose = (v: boolean) => {
    setOpen(v);
    if (!v) {
      setTimeout(() => {
        setSuccess(false);
        setErrors({});
      }, 300);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Trigger asChild>
        <Button className="h-10 shrink-0 border border-primary bg-white text-sm text-primary hover:bg-primary/5">
          {texts.shelter_application_btn}
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl focus:outline-none">
          <Dialog.Title className="hidden">
            {texts.shelter_application_title}
          </Dialog.Title>
          <Dialog.Description className="hidden">
            {texts.shelter_application_subtitle}
          </Dialog.Description>

          <button
            onClick={() => handleClose(false)}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent transition hover:bg-accent/70">
            <IconCross className="h-4 w-4 fill-primary" />
          </button>

          {success ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl font-bold text-black">
                {texts.shelter_success}
              </p>
              <p className="text-text-secondary">
                {texts.shelter_success_subtitle}
              </p>
              <Button
                className="mt-2 w-full"
                onClick={() => handleClose(false)}>
                Закрыть
              </Button>
            </div>
          ) : (
            <>
              <h2 className="mb-1 text-xl font-bold text-black">
                {texts.shelter_application_title}
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                {texts.shelter_application_subtitle}
              </p>

              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 sm1:grid-cols-2">
                  <Input
                    classNames={inputClassNames}
                    placeholder={texts.shelter_contact_name}
                    value={form.contact_name}
                    isInvalid={!!errors.contact_name}
                    errorMessage={errors.contact_name}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        contact_name: e.target.value,
                      }));
                      clearError('contact_name');
                    }}
                  />
                  <Input
                    classNames={inputClassNames}
                    placeholder={texts.yor_phone}
                    value={form.phone}
                    isInvalid={!!errors.phone}
                    errorMessage={errors.phone}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        phone: formatPhone(e.target.value),
                      }));
                      clearError('phone');
                    }}
                  />
                  <Input
                    classNames={inputClassNames}
                    placeholder={texts.shelter_city}
                    value={form.city}
                    isInvalid={!!errors.city}
                    errorMessage={errors.city}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, city: e.target.value }));
                      clearError('city');
                    }}
                  />
                  <Input
                    classNames={inputClassNames}
                    placeholder={texts.yor_email}
                    value={form.email}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, email: e.target.value }));
                      clearError('email');
                    }}
                  />
                </div>
                <Input
                  classNames={inputClassNames}
                  placeholder={texts.shelter_address}
                  value={form.address}
                  isInvalid={!!errors.address}
                  errorMessage={errors.address}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, address: e.target.value }));
                    clearError('address');
                  }}
                />
                <Input
                  classNames={inputClassNames}
                  placeholder={texts.shelter_website}
                  value={form.website}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, website: e.target.value }))
                  }
                />
                <textarea
                  className="w-full resize-none rounded-lg border-b border-outline-primary bg-accent px-4 py-3 text-sm placeholder:text-[#121212B2] focus:outline-none"
                  rows={3}
                  placeholder={texts.shelter_comment}
                  value={form.comment}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, comment: e.target.value }))
                  }
                />
                <Button
                  className="mt-2 w-full"
                  onClick={handleSubmit}
                  disabled={isPending}>
                  {isPending ? 'Отправка...' : texts.send}
                </Button>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
