export default {
  async fetch(request) {
    // Return 404 for unmatched routes
    return new Response("Not Found", { status: 404 });
  },
};
