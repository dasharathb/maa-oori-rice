"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "local",
  "debug": true,
  "services": {
    "uri": {
      "mor": "http://localhost:9010/maa-oori-rice-server",
      "qPresence": "https://presence.q.att.com"
    },
    "endpoints": {
      "mor": {
        "login": "/login",
        "registration": "/registration/mor"
      },
      "qPresence": {
        "presence": "/presence"
      }
    }
  }
})

;