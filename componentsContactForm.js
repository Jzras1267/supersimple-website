import { useForm } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  if (state.succeeded) return <p>Thanks! We'll be in touch.</p>;
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" required className="w-full p-3 border rounded" />
      <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded" />
      <textarea name="message" rows="4" placeholder="Message" required className="w-full p-3 border rounded"></textarea>
      <button type="submit" disabled={state.submitting} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Send</button>
    </form>
  );
}
