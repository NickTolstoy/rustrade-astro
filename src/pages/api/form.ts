import type { APIRoute } from 'astro';

interface FormData {
  type: 'callback' | 'contact' | 'consultation' | 'subscribe';
  data: Record<string, string>;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: FormData = await request.json();
    const { type, data } = body;

    // Validate required fields based on form type
    const validationErrors: string[] = [];

    switch (type) {
      case 'callback':
        if (!data.name) validationErrors.push('Name is required');
        if (!data.phone) validationErrors.push('Phone is required');
        break;
      case 'contact':
      case 'consultation':
        if (!data.name) validationErrors.push('Name is required');
        if (!data.phone) validationErrors.push('Phone is required');
        break;
      case 'subscribe':
        if (!data.email) validationErrors.push('Email is required');
        if (data.email && !isValidEmail(data.email)) {
          validationErrors.push('Invalid email format');
        }
        break;
    }

    if (validationErrors.length > 0) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          errors: validationErrors 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Integrate with CRM
    // 4. Send to webhook

    // For now, we'll log and return success
    console.log(`Form submission [${type}]:`, data);

    // Example: Send email via external service
    // await sendEmail({
    //   to: 'office@rustrade.pro',
    //   subject: `New ${type} form submission`,
    //   body: formatFormData(type, data)
    // });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Form submitted successfully'
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Optional: GET method for health check
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ status: 'ok', endpoint: 'form' }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

