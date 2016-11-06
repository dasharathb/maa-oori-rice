"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "local",
  "debug": true,
  "services": {
    "uri": {
      "mor": "/maa-oori-rice",
      "qPresence": "https://presence.q.att.com"
    },
    "endpoints": {
      "mor": {
        "admin": "/admin"
      },
      "qPresence": {
        "presence": "/presence"
      }
    }
  }
})

;