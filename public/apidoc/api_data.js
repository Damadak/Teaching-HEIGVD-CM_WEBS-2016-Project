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
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of creation of the issue</p>"
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
            "description": "<p>One or more of the data have not the correct type or are required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "type": "post",
    "url": "/tags",
    "title": "Create a Tag",
    "version": "0.0.0",
    "name": "CreateTag",
    "group": "Tag",
    "description": "<p>This allow to create an tag with the right parameters</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>The id of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The keyword of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the tag</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The keyword(s) doesn't have the correct type or is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "delete",
    "url": "/tags/:id",
    "title": "Delete a Tag",
    "version": "0.0.0",
    "name": "DeleteTag",
    "group": "Tag",
    "description": "<p>This allow to delete a specific tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags/56cece584a9f5ac80f820b68",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "204",
            "optional": false,
            "field": "204",
            "description": "<p>id of the Tag</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The tag doesn't exist</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tags",
    "title": "Find a specific Tag",
    "version": "0.0.0",
    "name": "FindTag",
    "group": "Tag",
    "description": "<p>This allow to get a specific tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags/56cece584a9f5ac80f820b68",
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
            "field": "_id",
            "description": "<p>The id of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The keyword of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the tag</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The tag doesn't exist</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tags",
    "title": "Get all the Tags",
    "version": "0.0.0",
    "name": "GetTags",
    "group": "Tag",
    "description": "<p>This allow to get all the existed tags on the server</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags",
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
            "field": "_id",
            "description": "<p>The id of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The keyword of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the tag</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "patch",
    "url": "/tags/:id",
    "title": "Update a Tag",
    "version": "0.0.0",
    "name": "UpdateTag",
    "group": "Tag",
    "description": "<p>This allow to update a specific tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags/56cece584a9f5ac80f820b68",
        "type": "json"
      }
    ],
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The tag doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>You have send wrong parameters or send a wrong type of data</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "function",
    "url": "/tags",
    "title": "Verify the Tag exists",
    "version": "0.0.0",
    "name": "VerifyTag",
    "group": "Tag",
    "description": "<p>This allow to test if the tag sended is on the server. This function is used in all the routes who need a tag verification</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags/56cece584a9f5ac80f820b68",
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
            "field": "_id",
            "description": "<p>The id of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The keyword of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the tag</p>"
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
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The tag not found</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/tags.js",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/types",
    "title": "Create a Type",
    "version": "0.0.0",
    "name": "CreateType",
    "group": "Type",
    "description": "<p>This allow to create a type with the right parameters</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "author",
            "description": "<p>The id of the author of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the type</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The type has some parameters with uncorrect type or  missing required parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "delete",
    "url": "/types",
    "title": "Delete a specific Tag",
    "version": "0.0.0",
    "name": "DeleteType",
    "group": "Type",
    "description": "<p>This allow to delete a Tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/types/56cece584a9f5ac80f820b68",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "204",
            "optional": false,
            "field": "204",
            "description": "<p>id of the Tag</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Type not found</p>"
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/types",
    "title": "Find a Type",
    "version": "0.0.0",
    "name": "GetType",
    "group": "Type",
    "description": "<p>This allow to find a Tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/types/56cece584a9f5ac80f820b68",
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
            "description": "<p>The id of the author of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the type</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Type not found</p>"
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/types",
    "title": "Get all the Types",
    "version": "0.0.0",
    "name": "GetTypes",
    "group": "Type",
    "description": "<p>This allow to get all the Types found on the server</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "author",
            "description": "<p>The id of the author of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the type</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "patch",
    "url": "/types",
    "title": "Update a Tag",
    "version": "0.0.0",
    "name": "UpdateType",
    "group": "Type",
    "description": "<p>This allow to find a Tag with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/types/56cece584a9f5ac80f820b68",
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
            "description": "<p>The id of the author of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the type</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The type has some parameters with uncorrect type or missing required parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Type not found</p>"
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/types",
    "title": "Verify the Type exists",
    "version": "0.0.0",
    "name": "VerifyType",
    "group": "Type",
    "description": "<p>This allow to test if the type sended is on the server. This function is used in all the routes who need a type verification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "author",
            "description": "<p>The id of the author of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the type</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the type</p>"
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
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Type not found</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a User",
    "version": "0.0.0",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>This allow to create a user with the right parameters</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.street",
            "description": "<p>The street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.number",
            "description": "<p>The number street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.postal",
            "description": "<p>The postal code of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.country",
            "description": "<p>The country of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.citizen",
            "description": "<p>If the user is a citizen</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.staff",
            "description": "<p>If the user is a staff</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The parameters don't have the correct type or there are missing required parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users",
    "title": "Delete a User",
    "version": "0.0.0",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>This allow to delete a specific user with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/56cece584a9f5ac80f820b68",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "204",
            "optional": false,
            "field": "204",
            "description": "<p>id of the User</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The user doesn't exist</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Find a specific User",
    "version": "0.0.0",
    "name": "FindUser",
    "group": "User",
    "description": "<p>This allow to get a specific user with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/56cece584a9f5ac80f820b68",
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
            "field": "_id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.street",
            "description": "<p>The street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.number",
            "description": "<p>The number street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.postal",
            "description": "<p>The postal code of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.country",
            "description": "<p>The country of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.citizen",
            "description": "<p>If the user is a citizen</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.staff",
            "description": "<p>If the user is a staff</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The user doesn't exist</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Get all the issues posted by a user",
    "version": "0.0.0",
    "name": "GetUserIssues",
    "group": "User",
    "description": "<p>This allow to get all the issues of a user with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/56cece584a9f5ac80f820b68/issues",
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
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of creation of the issue</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The user doesn't exist</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Get all the Users",
    "version": "0.0.0",
    "name": "GetUsers",
    "group": "User",
    "description": "<p>This allow to get all the existed tags on the server</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Schema.Types.ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.street",
            "description": "<p>The street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.number",
            "description": "<p>The number street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.postal",
            "description": "<p>The postal code of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.country",
            "description": "<p>The country of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.citizen",
            "description": "<p>If the user is a citizen</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.staff",
            "description": "<p>If the user is a staff</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users",
    "title": "Update a User",
    "version": "0.0.0",
    "name": "UpdateUser",
    "group": "User",
    "description": "<p>This allow to update a specific user with its id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/56cece584a9f5ac80f820b68",
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
            "field": "_id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.street",
            "description": "<p>The street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.number",
            "description": "<p>The number street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.postal",
            "description": "<p>The postal code of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.country",
            "description": "<p>The country of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.citizen",
            "description": "<p>If the user is a citizen</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.staff",
            "description": "<p>If the user is a staff</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The parameter(s) doesn't have the correct type or is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The user doesn't exist</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "function",
    "url": "/tags",
    "title": "Verify the User exists",
    "version": "0.0.0",
    "name": "VerifyUser",
    "group": "User",
    "description": "<p>This allow to test if the user sended is on the server. This function is used in all the routes who need tag verification</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/tags/56cece584a9f5ac80f820b68",
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
            "field": "_id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date of the creation of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>The phone number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.street",
            "description": "<p>The street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.number",
            "description": "<p>The number street of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "adresse.postal",
            "description": "<p>The postal code of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adresse.country",
            "description": "<p>The country of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.citizen",
            "description": "<p>If the user is a citizen</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "role.staff",
            "description": "<p>If the user is a staff</p>"
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
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  }
] });
