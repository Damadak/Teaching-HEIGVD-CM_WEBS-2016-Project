define({ "api": [
  {
    "type": "post",
    "url": "/issues",
    "title": "Create an Issue",
    "version": "0.0.0",
    "name": "CreateIssue",
    "group": "Issue",
    "description": "<p>This allow to create an issue with the right parameters</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "author",
            "description": "<p>The Author-Id who create the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "type",
            "description": "<p>The Type-Id of the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId[]",
            "optional": false,
            "field": "tags",
            "description": "<p>The Tag-Id related to the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>The type of the geographic coordinates</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "location.coordinates",
            "description": "<p>The geographic coordinates of the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "actions",
            "description": "<p>The actions done on the Issue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "actions.type",
            "description": "<p>The type of the action (Comment or Status Change)</p>"
          },
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "actions.author",
            "description": "<p>The Author-Id of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "actions.date",
            "description": "<p>The date of the action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "actions.status",
            "description": "<p>The new status of the issue (only if its a Status Change)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "actions.content",
            "description": "<p>The content of the comment (only if its a Comment)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>One or more of the data have not the correct type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
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
