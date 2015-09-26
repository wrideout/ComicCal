function parseList(comics)
{
  // First, pull down the list for the week
  var releases = UrlFetchApp.fetch('http://www.previewsworld.com/shipping/newreleases.txt').getContentText();
  // Logger.log(releases.getContentText());

  // Now, search the text we pulled down off the web for the contents of the comics list, defined in the argument passed
  for(var i = 0; i < comics.length; i++)
  {
    // If there is a non-negative index, that means we have a hit this week for that title.
    // Go ahead and create a new calendar event
    var index = releases.indexOf(comics[i] + ' #')
    if(index != -1)
    {
      Logger.log('Found hit ' + comics[i])
      createCalendarEvent(comics[i])
    }
  }
}

function createCalendarEvent(release)
{
  // Creates an all-day event for the passed release and logs the ID.
  // If you want to use a different calendar name other than "Comics", change that here.
  var event = CalendarApp.getCalendarsByName('Comics')[0].createAllDayEvent('New Issue: ' + release, new Date());
  Logger.log('Logged new event ' + release + ', Event ID: ' + event.getId());
}

function comicCal_main()
{
  // This array contains all the comic titles to be searched for weekly.
  // Change this to fit your comics list accordingly.  Be sure to check the list
  // being pulled down form the web to make sure the titles match correctly!
  var list = ['STAR WARS',
              'DESCENDER',
              'COPPERHEAD',
              'SAGA',
              'WE STAND ON GUARD',
              'CAPTAIN MARVEL AND CAROL CORPS',
              'CAPTAIN MARVEL',
              'GUARDIANS OF THE GALAXY',
              'BATGIRL',
              'HEADLOPPER',
              'ROCHE LIMIT']

  parseList(list)
}
