Namespace Fix
=============

AppEngine Datastore Namespace Fix

Attached is my Chrome and Firefox extension that gets arround this annoying bug.

#### For Chrome:
    Save the file to your machine
    Open Chrome > Tools > Extensions
    Drag and drop

#### For Firefox:
    Install greasemonkey add-on
    Create a new user script
    Copy and paste the contents of the attached into the new script.
   
Now whenever you go to the appengine datastore viewer you will be asked for a namespace. Once the namespace is entered you will not need to re-enter it again until you navigate away from the datastore viewer.
To clear the saved namespace navigate away from the datastore viewer, just go to the dashboard or any other appengine page.

The script only runs on appengine pages (those with appengine.google.com) in the url so will not interfear with anything else.

**Note: The script seems to run much faster in Chrome than on Firefox.**


Release History
--------------------
* Version 1: Initial Release.
* Version 2: Update to prevent the namespace being cleared when editing an entity.
* Version 3: Update to handle the -global- namespace much better than before.
* Version 4: Prevent alert dialog when no namespace is set yet.