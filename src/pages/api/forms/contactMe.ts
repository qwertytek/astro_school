export const prerender = false;

import { sanityClient } from "sanity:client";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email");

    const submitForm = await sanityClient.create({
      _type: "formTutoring",
      email,
    });

    console.log("submitForm", submitForm);

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Error submitting form" }),
      { status: 500 }
    );
  }
}