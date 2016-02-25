define({ "api": [
  {
    "type": "get",
    "url": "/tags",
    "title": "Request Tags Informations",
    "name": "GetTags",
    "group": "Tags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword of the Tag.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n      \"_id\": \"56cece584a9f5ac80f820b68\",\n      \"keyword\": \"route abimée\",\n      \"__v\": 0\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tags"
  }
] });
