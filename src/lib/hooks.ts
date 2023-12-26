import { useState } from "react";

export function useContactForm(
  ENDPOINT: string,
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [status, setStatus] = useState<string>();
  const handleFormSubmit: React.FormEventHandler = (e) => {
    // e.preventDefault();
    setIsButtonActive(false);
    const form = e.currentTarget as HTMLFormElement;
    const injectedData: Record<string, string | number> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(form.elements) as HTMLFormElement[];
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );
    Object.assign(data, injectedData);
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsButtonActive(true);
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key].toString();
            form.appendChild(el);
          });
          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          form.setAttribute('target', '_blank');
          form.submit();
          throw new Error('Please finish the captcha challenge');
        }
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };
  return { status, handleFormSubmit };
}

