# ComicCal
A short Google Apps Script for pulling down a webpage listing all comic book
releases for that week, and creating a Google Calendar event for each book also
found in the saved list of comics.

To use this, first copy the ComicCal.gs script into Google Drive.  Next, be sure
to complete a test run of the script, to ensure that any additional permissions
that are needed are complete.  Any events created into Google Calendar may be
deleted at the conclusion of the test.  Finally, edit the triggers of the file
via Resources->Current Project's Triggers in the script editor.  Configure a
time-driven trigger that fires every Wednesday morning (the date of most comic
book releases).  Setup is complete once the new trigger is saved.

