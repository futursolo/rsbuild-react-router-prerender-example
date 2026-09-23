// Minimal SPA-mode (ssr:false) React Router app.
// `prerender: ["/"]` + a loader on the root route is the exact scenario that
// triggers the root data request (`/_.data` for Vite, `/_root.data` for Rsbuild).
export default {
  appDirectory: "app",
  ssr: false,
  prerender: ["/"],
};
