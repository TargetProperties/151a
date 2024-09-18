var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.392729371974415,
        "pitch": -0.4196023802388318,
        "fov": 1.1915917474381796
      },
      "linkHotspots": [
        {
          "yaw": -1.4240531217018226,
          "pitch": -0.11821524410841988,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.065124143285141,
        "pitch": -0.3998670415648071,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -1.5162920271749698,
          "pitch": -0.3634498185268278,
          "rotation": 5.497787143782138,
          "target": "2-corridor"
        },
        {
          "yaw": 1.838090471458644,
          "pitch": 0.7351437526432711,
          "rotation": 6.283185307179586,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.805019218918427,
        "pitch": 0.17993575019502117,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 2.079117409663408,
          "pitch": 0.5535429904358988,
          "rotation": 0.7853981633974483,
          "target": "3-living-room"
        },
        {
          "yaw": 1.4302924130021246,
          "pitch": 0.8768284660029835,
          "rotation": 13.351768777756625,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.8387757560127191,
        "pitch": 0.2628425448383638,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -1.1164318358727634,
          "pitch": 0.6379083033242097,
          "rotation": 7.0685834705770345,
          "target": "4-bedroom"
        },
        {
          "yaw": 2.1493738939445226,
          "pitch": 0.5545678040277089,
          "rotation": 10.995574287564278,
          "target": "6-kitchen"
        },
        {
          "yaw": 0.9894847958628787,
          "pitch": 0.737611614375087,
          "rotation": 5.497787143782138,
          "target": "2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5415458912893207,
        "pitch": 0.10741181197080962,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.5036503636891858,
          "pitch": 0.6361307563144543,
          "rotation": 6.283185307179586,
          "target": "5-bathroom"
        },
        {
          "yaw": -2.4576606080725174,
          "pitch": 0.646385547804778,
          "rotation": 5.497787143782138,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6497744632228173,
        "pitch": 0.2641827632513305,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 2.6576812257609914,
          "pitch": 0.9005595229907399,
          "rotation": 6.283185307179586,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1087076667206617,
          "pitch": 0.6386997169098549,
          "title": "NOTE",
          "text": "This bath has been replaced with a shower."
        }
      ]
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.138631805862639,
        "pitch": 0.32740065701337606,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 2.3648488904162432,
          "pitch": 0.8843867086189547,
          "rotation": 0.7853981633974483,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "151A Victoria Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
