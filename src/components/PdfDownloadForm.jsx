import { useState } from "react";

/**
 * PDF Download Form Component
 * Captures email before allowing PDF download
 * Sends notification to Formspree
 * 
 * @param {string} pdfUrl - URL/path to the PDF file
 * @param {string} pdfTitle - Title of the PDF document
 * @param {string} formspreeId - Formspree form ID
 */
export function PdfDownloadForm({ pdfUrl, pdfTitle, formspreeId }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Submit to Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          message: `PDF Download Request: ${pdfTitle}`,
          _subject: `PDF Download: ${pdfTitle}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Trigger PDF download
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdfTitle;
        link.click();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-2xl mb-2">✓</div>
        <div className="font-semibold text-gray-900 mb-2">Download Started!</div>
        <p className="text-sm text-gray-600">
          Your download should begin automatically. If not,{" "}
          <a href={pdfUrl} download={pdfTitle} className="text-gray-900 underline hover:text-gray-600">
            click here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processing..." : "Download PDF"}
      </button>
      <div className="text-xs text-gray-500 text-center">
        We'll send you occasional updates about AI education resources. Unsubscribe anytime.
      </div>
    </form>
  );
}

