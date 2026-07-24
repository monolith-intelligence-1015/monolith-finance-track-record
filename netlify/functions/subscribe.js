const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "tempmail.com", "guerrillamail.com", "10minutemail.com",
  "trashmail.com", "yopmail.com", "dispostable.com", "sharklasers.com",
  "getnada.com", "temp-mail.org", "throwawaymail.com", "fakeinbox.com",
  "maildrop.cc", "emkei.cz", "receive-smss.com"
]);

const TYPO_DOMAINS = {
  "gamil.com": "gmail.com",
  "gmial.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "hotmial.com": "hotmail.com"
};

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const email = (data.email || "").trim().toLowerCase();
    const name = (data.name || "").trim();
    const strategy = (data.strategy || "General Equity Screen").trim();

    // 1. Regex Validation
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !regex.test(email)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, error: "Invalid email format. Please check your email address." })
      };
    }

    const domain = email.split("@")[1];

    // 2. Typo Check
    if (TYPO_DOMAINS[domain]) {
      const corrected = email.split("@")[0] + "@" + TYPO_DOMAINS[domain];
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, error: `Did you mean ${corrected}? Please check your email spelling.` })
      };
    }

    // 3. Disposable Domain Check
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, error: "Temporary and disposable email addresses are not permitted." })
      };
    }

    console.log(`[NETLIFY SUBSCRIBER] Email: ${email}, Name: ${name}, Strategy: ${strategy}`);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        success: true,
        already_subscribed: false,
        message: "Successfully subscribed to Sunday's equity screen!",
        email: email
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
};
