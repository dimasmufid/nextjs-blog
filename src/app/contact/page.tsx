import { BookACall } from "@/components/book-a-call";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-4xl font-bold">Contact Me</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Have a question or want to work together? Feel free to reach out to me.
      </p>

      <div className="mb-12">
        <BookACall buttonText="Contact Me" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Email</h2>
          <p className="text-gray-600 dark:text-gray-400">
            For inquiries, collaborations, or just to say hello, feel free to
            send me an email.
          </p>
          <p className="mt-4 font-medium">dimasmufid.data@gmail.com</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Social Media</h2>
          <p className="text-gray-600 dark:text-gray-400">
            You can also connect with me on social media or message me directly.
          </p>
          <p className="mt-4 font-medium">Telegram: @dimasmufid</p>
        </div>
      </div>
    </div>
  );
}
