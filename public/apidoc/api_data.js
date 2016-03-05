define({ "api": [
  {
    "type": "post",
    "url": "/issues/:id/actions",
    "title": "Create an Action on a Issue",
    "version": "0.0.0",
    "name": "CreateActionIssue",
    "group": "Issue",
    "description": "<p>This allow to create an Action (Status Change or Comment) to an Issue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/56d989e834b00920244c2bbb/actions",
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
          "content": "[{\n    \"__v\": 0,\n    \"status\": \"created\",\n    \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"type\": \"56d00c958b514ca41df60499\",\n    \"description\": \"Test test\",\n    \"imgUrl\": \"img/photo.jpg\",\n    \"_id\": \"56d989e834b00920244c2bbb\",\n    \"actions\": [],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        46.78067,\n        6.647367\n      ]\n    },\n    \"tags\": [\n      \"56cece584a9f5ac80f820b68\"\n    ]\n  }]",
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
            "field": "IssueNotFound",
            "description": "<p>Not found the Issue</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
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
        "content": "http://localhost/issues",
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
          "content": "{\n  \"__v\": 0,\n  \"status\": \"created\",\n  \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n  \"author\": \"56cef06ac636642c090819e9\",\n  \"type\": \"56d00c958b514ca41df60499\",\n  \"description\": \"Test test\",\n  \"imgUrl\": \"img/photo.jpg\",\n  \"_id\": \"56d989e834b00920244c2bbb\",\n  \"actions\": [],\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      46.78067,\n      6.647367\n    ]\n  },\n  \"tags\": [\n    \"56cece584a9f5ac80f820b68\"\n  ]\n}",
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
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
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
          "title": "Response (Unexpected Token):",
          "content": "<h1>Unexpected token j</h1>\n   <h2>400</h2>\n   <pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "delete",
    "url": "/issues/:id",
    "title": "Delete a Issue",
    "version": "0.0.0",
    "name": "DeleteIssue",
    "group": "Issue",
    "description": "<p>This allow to delete a specific Issue with its Id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/56d989e834b00920244c2bbb",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Not found the Issue</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issues/:id/actions",
    "title": "Get all the actions of an Issue",
    "version": "0.0.0",
    "name": "GetActionIssue",
    "group": "Issue",
    "description": "<p>This allow to get all Actions (Status Change or Comment) of an Issue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/56d989e834b00920244c2bbb/actions",
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
          "content": "[{\n    \"__v\": 0,\n    \"status\": \"created\",\n    \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"type\": \"56d00c958b514ca41df60499\",\n    \"description\": \"Test test\",\n    \"imgUrl\": \"img/photo.jpg\",\n    \"_id\": \"56d989e834b00920244c2bbb\",\n    \"actions\": [],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        46.78067,\n        6.647367\n      ]\n    },\n    \"tags\": [\n      \"56cece584a9f5ac80f820b68\"\n    ]\n  }]",
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
            "field": "IssueNotFound",
            "description": "<p>Not found the Issue</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issues/:id",
    "title": "Find a specific Issues",
    "version": "0.0.0",
    "name": "GetIssue",
    "group": "Issue",
    "description": "<p>This allow to get a specific Issue with its Id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/56d989e834b00920244c2bbb",
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
          "content": "[{\n    \"__v\": 0,\n    \"status\": \"created\",\n    \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"type\": \"56d00c958b514ca41df60499\",\n    \"description\": \"Test test\",\n    \"imgUrl\": \"img/photo.jpg\",\n    \"_id\": \"56d989e834b00920244c2bbb\",\n    \"actions\": [],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        46.78067,\n        6.647367\n      ]\n    },\n    \"tags\": [\n      \"56cece584a9f5ac80f820b68\"\n    ]\n  }]",
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
            "field": "IssueNotFound",
            "description": "<p>Not found the Issue</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "Get all the Issues",
    "version": "0.0.0",
    "name": "GetIssues",
    "group": "Issue",
    "description": "<p>This allow to get all the issues</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues",
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
          "content": "[{\n    \"__v\": 0,\n    \"status\": \"created\",\n    \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"type\": \"56d00c958b514ca41df60499\",\n    \"description\": \"Test test\",\n    \"imgUrl\": \"img/photo.jpg\",\n    \"_id\": \"56d989e834b00920244c2bbb\",\n    \"actions\": [],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        46.78067,\n        6.647367\n      ]\n    },\n    \"tags\": [\n      \"56cece584a9f5ac80f820b68\"\n    ]\n  }]",
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
            "field": "UnexpectedToken",
            "description": "<p>The issue has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
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
          "title": "Response (Unexpected Token):",
          "content": "<h1>Unexpected token j</h1>\n   <h2>400</h2>\n   <pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\"message\": \"Issue validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"description\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"description\"\n      },\n      \"message\": \"Path `description` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"description\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issues?longitude=valuelatitude=value&distance=value",
    "title": "Get the Issues near the georgraphic coordinates",
    "version": "0.0.0",
    "name": "GetIssuesByCoordinates",
    "group": "Issue",
    "description": "<p>This allow to search the near Issues with geographic coordinates</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:3001/api/issues?longitude=46.778744&latitude=6.657598&distance=10000000",
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
          "content": "{\n  \"__v\": 0,\n  \"status\": \"created\",\n  \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n  \"author\": \"56cef06ac636642c090819e9\",\n  \"type\": \"56d00c958b514ca41df60499\",\n  \"description\": \"Test test\",\n  \"imgUrl\": \"img/photo.jpg\",\n  \"_id\": \"56d989e834b00920244c2bbb\",\n  \"actions\": [],\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      46.78067,\n      6.647367\n    ]\n  },\n  \"tags\": [\n    \"56cece584a9f5ac80f820b68\"\n  ]\n}",
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
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "get",
    "url": "/issues/solved",
    "title": "Get all the solved Issues",
    "version": "0.0.0",
    "name": "GetSolvedIssues",
    "group": "Issue",
    "description": "<p>This allow to get all the solved issues</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/solved",
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
          "content": "[{\n    \"__v\": 0,\n    \"status\": \"created\",\n    \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"type\": \"56d00c958b514ca41df60499\",\n    \"description\": \"Test test\",\n    \"imgUrl\": \"img/photo.jpg\",\n    \"_id\": \"56d989e834b00920244c2bbb\",\n    \"actions\": [],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        46.78067,\n        6.647367\n      ]\n    },\n    \"tags\": [\n      \"56cece584a9f5ac80f820b68\"\n    ]\n  }]",
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
    "filename": "app/controllers/issues.js",
    "groupTitle": "Issue"
  },
  {
    "type": "patch",
    "url": "/issues/:id",
    "title": "Update a Issue",
    "version": "0.0.0",
    "name": "UpdateIssue",
    "group": "Issue",
    "description": "<p>This allow to update a specific Issue with its Id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/api/issues/56d989e834b00920244c2bbb",
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
          "content": "[{\n      \"__v\": 0,\n      \"status\": \"created\",\n      \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n      \"author\": \"56cef06ac636642c090819e9\",\n      \"type\": \"56d00c958b514ca41df60499\",\n      \"description\": \"Test test\",\n      \"imgUrl\": \"img/photo.jpg\",\n      \"_id\": \"56d989e834b00920244c2bbb\",\n      \"actions\": [],\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          46.78067,\n          6.647367\n        ]\n      },\n      \"tags\": [\n        \"56cece584a9f5ac80f820b68\"\n      ]\n    }]",
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
            "field": "IssueNotFound",
            "description": "<p>Not found the Issue</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error404",
            "description": "<p>The server has an unexpected error</p>"
          }
        ]
      }
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
          "content": "{\n         \"_id\": \"56cece584a9f5ac80f820b68\",\n         \"keyword\": \"route abimée\",\n         \"__v\": 0\n       }",
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
          "title": "Response (Unexpected Token):",
          "content": "<h1>Unexpected token j</h1>\n   <h2>400</h2>\n   <pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\n  \"message\": \"Tag validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"keyword\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"keyword\"\n      },\n      \"message\": \"Path `keyword` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"keyword\"\n    }\n  }\n}",
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
            "description": ""
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
    "url": "/tags/:id",
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
          "content": "{\n      \"_id\": \"56cece584a9f5ac80f820b68\",\n      \"keyword\": \"route abimée\",\n      \"__v\": 0\n    }",
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
          "content": "\n{\n  \"_id\": \"56cece584a9f5ac80f820b68\",\n  \"keyword\": \"route abimée\",\n  \"__v\": 0\n}",
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
          "content": "\n {\n\"__v\": 0,\n\"createdAt\": \"2016-03-03T19:09:04.598Z\",\n\"name\": \"Route 2\",\n\"description\": \"Tous les problèmes liés à la route\",\n\"author\": \"56cef06ac636642c090819e9\",\n\"_id\": \"56d88bd0ed816d3014765b17\"\n}",
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
            "field": "UnexpectedToken",
            "description": "<p>The type has some parameters with uncorrect type</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>There are missing parameters</p>"
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
          "title": "Response (Unexpected Token):",
          "content": "<h1>Unexpected token j</h1>\n   <h2>400</h2>\n   <pre>SyntaxError: Unexpected token j",
          "type": "json"
        },
        {
          "title": "Response (Validation Error):",
          "content": "{\n  \"message\": \"Type validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"author\": {\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"author\"\n      },\n      \"message\": \"Path `author` is required.\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"required\",\n      \"path\": \"author\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "delete",
    "url": "/types/:id",
    "title": "Delete a specific Type",
    "version": "0.0.0",
    "name": "DeleteType",
    "group": "Type",
    "description": "<p>This allow to delete a Type with its id</p>",
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
            "description": ""
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
    "url": "/types/:id/issues",
    "title": "Get all the issues with the id type",
    "version": "0.0.0",
    "name": "GetIssuesType",
    "group": "Type",
    "description": "<p>This allow to find all the Issues with the Id Type sended</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/types/56cece584a9f5ac80f820b68/issues",
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
          "content": "{\n  \"__v\": 0,\n  \"status\": \"created\",\n  \"createdAt\": \"2016-03-04T13:13:12.038Z\",\n  \"author\": \"56cef06ac636642c090819e9\",\n  \"type\": \"56d00c958b514ca41df60499\",\n  \"description\": \"Test test\",\n  \"imgUrl\": \"img/photo.jpg\",\n  \"_id\": \"56d989e834b00920244c2bbb\",\n  \"actions\": [],\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      46.78067,\n      6.647367\n    ]\n  },\n  \"tags\": [\n    \"56cece584a9f5ac80f820b68\"\n  ]\n}",
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
      }
    },
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/types/:id",
    "title": "Find a Type",
    "version": "0.0.0",
    "name": "GetType",
    "group": "Type",
    "description": "<p>This allow to find a Type with its id</p>",
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
          "content": "  {\n  \"__v\": 0,\n  \"createdAt\": \"2016-03-03T19:09:04.598Z\",\n  \"name\": \"Route 2\",\n  \"description\": \"Tous les problèmes liés à la route\",\n  \"author\": \"56cef06ac636642c090819e9\",\n  \"_id\": \"56d88bd0ed816d3014765b17\"\n}",
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
      }
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
          "content": "[\n     {\n    \"__v\": 0,\n    \"createdAt\": \"2016-03-03T19:09:04.598Z\",\n    \"name\": \"Route 2\",\n    \"description\": \"Tous les problèmes liés à la route\",\n    \"author\": \"56cef06ac636642c090819e9\",\n    \"_id\": \"56d88bd0ed816d3014765b17\"\n    }\n  ]",
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
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "patch",
    "url": "/types/:id",
    "title": "Update a Type",
    "version": "0.0.0",
    "name": "UpdateType",
    "group": "Type",
    "description": "<p>This allow to find a Type with its id</p>",
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
            "description": "<p>The id of the author of the Type</p>"
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
            "description": "<p>The description of the Type</p>"
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
          "content": "{\n  \"__v\": 0,\n  \"createdAt\": \"2016-03-03T19:09:04.598Z\",\n  \"name\": \"Route 3\",\n  \"description\": \"Tous les problèmes liés à la route\",\n  \"author\": \"56cef06ac636642c090819e9\",\n  \"_id\": \"56d88bd0ed816d3014765b17\"\n}",
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
      }
    },
    "filename": "app/controllers/types.js",
    "groupTitle": "Type"
  },
  {
    "type": "function",
    "url": "/types/:id",
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
          "content": "    {\n  \"__v\": 0,\n  \"createdAt\": \"2016-03-03T19:27:06.372Z\",\n  \"name\": \"Tab\",\n  \"lastName\": \"H\",\n  \"email\": \"test@gmail.com\",\n  \"userName\": \"Tabata\",\n  \"password\": \"123456\",\n  \"phoneNumber\": 22456789,\n  \"_id\": \"56d8900a05bd2b841f89139f\",\n  \"role\": {\n    \"citizen\": true,\n    \"staff\": false\n  },\n  \"adresse\": {\n    \"street\": \"Route\",\n    \"number\": 38,\n    \"postal\": 1258,\n    \"country\": \"Suisse\"\n  }\n}",
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
    "type": "delete",
    "url": "/users/:id",
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
            "description": ""
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
            "description": "<p>The user doesn't exist</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
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
          "content": "   {\n \"__v\": 0,\n \"createdAt\": \"2016-03-03T19:27:06.372Z\",\n \"name\": \"Tab\",\n \"lastName\": \"H\",\n \"email\": \"test@gmail.com\",\n \"userName\": \"Tabata\",\n \"password\": \"123456\",\n \"phoneNumber\": 22456789,\n \"_id\": \"56d8900a05bd2b841f89139f\",\n \"role\": {\n   \"citizen\": true,\n   \"staff\": false\n },\n \"adresse\": {\n   \"street\": \"Route\",\n   \"number\": 38,\n   \"postal\": 1258,\n   \"country\": \"Suisse\"\n }\n}",
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
    "type": "get",
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
      }
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all the Users",
    "version": "0.0.0",
    "name": "GetUsers",
    "group": "User",
    "description": "<p>This allow to get all the existed users on the server</p>",
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
          "content": "   {\n \"__v\": 0,\n \"createdAt\": \"2016-03-03T19:27:06.372Z\",\n \"name\": \"Tab\",\n \"lastName\": \"H\",\n \"email\": \"test@gmail.com\",\n \"userName\": \"Tabata\",\n \"password\": \"123456\",\n \"phoneNumber\": 22456789,\n \"_id\": \"56d8900a05bd2b841f89139f\",\n \"role\": {\n   \"citizen\": true,\n   \"staff\": false\n },\n \"adresse\": {\n   \"street\": \"Route\",\n   \"number\": 38,\n   \"postal\": 1258,\n   \"country\": \"Suisse\"\n }\n}",
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
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users/:id",
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
          "content": "    {\n  \"__v\": 0,\n  \"createdAt\": \"2016-03-03T19:27:06.372Z\",\n  \"name\": \"Tab\",\n  \"lastName\": \"H\",\n  \"email\": \"test@gmail.com\",\n  \"userName\": \"Tabata\",\n  \"password\": \"123456\",\n  \"phoneNumber\": 22456789,\n  \"_id\": \"56d8900a05bd2b841f89139f\",\n  \"role\": {\n    \"citizen\": true,\n    \"staff\": false\n  },\n  \"adresse\": {\n    \"street\": \"Route\",\n    \"number\": 38,\n    \"postal\": 1258,\n    \"country\": \"Suisse\"\n  }\n}",
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
      }
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
      }
    },
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  }
] });
