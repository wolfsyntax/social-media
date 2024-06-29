import Echo from "laravel-echo";

import Pusher from "pusher-js";

// window.Pusher = Pusher;

// window.Echo = new Echo({
//   broadcaster: "reverb",
//   key: import.meta.env.VITE_REVERB_APP_KEY,
//   wsHost: import.meta.env.VITE_REVERB_HOST,
//   wsPort: import.meta.env.VITE_REVERB_PORT,
//   wssPort: import.meta.env.VITE_REVERB_PORT,
//   forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
//   enabledTransports: ["ws", "wss"],
// });

export default (app, { apiKey, ...options }) => {
  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: "reverb",
    key: apiKey,
    ...options,
  });
};

// export default (app, { apiKey, ...options }) => {
//   app.config.globalProperties.$pusher = new Pusher(apiKey, options);
//   const url = new URL(
//     `${import.meta.env.VITE_BASE_URL || "https://api-dev.geebu.ph"}`
//   );

//   const wsHost = `${url?.protocol || "http"}://${
//     url?.hostname || "api-dev.geebu.ph"
//   }`;

//   app.config.globalProperties.$echo = new Echo({
//     broadcaster: "pusher",
//     key: apiKey,
//     cluster: options?.cluster || import.meta.env.VITE_PUSHER_CLUSTER,
//     wsHost,
//     wsPort: 6001,
//     forceTLS: true,
//     // authEndpoint: `${
//     //   import.meta.env.VITE_BASE_URL || "https://api-dev.geebu.ph"
//     // }/api/broadcasting/auth`,
//     // auth: {
//     //   headers: {
//     //     Authorization: `Bearer ${store.state.bearerToken}`,
//     //   },
//     // },
//   });
// };
