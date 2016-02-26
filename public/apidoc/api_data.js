define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Create an issue",
    "name": "CreateIssue",
    "group": "Issue",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the person.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "delete",
    "url": "/tags/:id",
    "title": "Delete a Tag",
    "name": "DeleteTag",
    "group": "Tags",
    "version": "0.0.0",
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "",
    "url": "Find",
    "title": "Tag",
    "name": "FindTag",
    "group": "Tags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword of the Tag</p>"
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
  },
  {
    "type": "get",
    "url": "/tags/:id",
    "title": "Get a Tag with ID",
    "name": "GetTag",
    "group": "Tags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword of the Tag</p>"
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
  },
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
            "description": "<p>id of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword of the Tag</p>"
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
  },
  {
    "type": "patch",
    "url": "/tags/:id",
    "title": "Update a Tag",
    "name": "UpdateTag",
    "group": "Tags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword of the Tag</p>"
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
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "CreateUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the person.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  }
] });
