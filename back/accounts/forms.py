from django import forms
from django.contrib.auth.password_validation import validate_password


class SetPasswordForm(forms.Form):
    new_password1 = forms.CharField(
        label='Новый пароль',
        widget=forms.PasswordInput,
        required=False,
    )
    new_password2 = forms.CharField(
        label='Подтверждение пароля',
        widget=forms.PasswordInput,
        required=False,
    )

    def clean(self):
        cleaned = super().clean()
        p1 = cleaned.get('new_password1')
        p2 = cleaned.get('new_password2')
        if p1 or p2:
            if p1 != p2:
                raise forms.ValidationError('Пароли не совпадают.')
            validate_password(p1)
        return cleaned
