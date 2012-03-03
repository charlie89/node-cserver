# cServeer
This is a node webserver.

## Features
*   User management
*   File access
*   Database access (only mongo at the moment)
*   Site optimisation

## Can be used to
*   Serve static files
*   Serve complex sites (i.e. serve specific files only to specific users, useful for admin accounts)

### APIs
The following RESTful APIs are currently available:

*   /file: Handle files
*   /image: serves images from the images directory
*   /cPluginLoader: Load plugins (a bundle of js and/or css files)

A full documented list of APIs will be published when v1.0 is ready.

## Client
The website to serve. Must provide some config files to work.
Examples are my other projects: 
*   The folder client in my project 'cweb'
*   cmobile

# License
This project is released under the GNU GPLv3.
