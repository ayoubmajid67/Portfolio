// client-side sendEmail wrapper now:

const productionUrl = "https://next-js-email-sender.vercel.app/api/send-email";
const  localUrl = "http://localhost:3000/api/send-email";
const sendEmail = async (formData) => {
  const res = await fetch(productionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Failed to send message");
  }
  return res.json();
};


export { sendEmail };