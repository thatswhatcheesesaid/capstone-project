#MySQL functions by page

##landing page

####show top 5 restaurants 

[use javascript to determine top 5 forkScore]\
**selectTopRestaurantsByFork** select forkScore from fork table and restaurant from restaurant table join on restaurant

####show top 5 pictures

[use javascript to determine top 5 forkScore]\
**selectTopPicturesByCheesey** select cheeseyScore from cheesey table and picture from picture table join on picture

##restaurants page

####show restaurants with fork scores

[use javascript to sort descending by forkScore]
**selectRestaurantsByFork** select all forkScore from fork table and restaurant from restaurant table join on restaurant

####fork voting 

**insertForkScore** insert forkScore on fork table

##picture page

####show top 5 pictures

**selectTopPicturesByCheesey** see above

####show two pictures

[use javascript to randomly determine which pictures]
**selectPictures** select pictures from picture table

####cheesey 

**insertCheeseScore** insert cheeseyScore on cheesey table

##profile page

####load profile pictures

**getPictureByProfile** select pictures from picture table and profile from profile table join at profile

####upload pictures for voting
**insertPicture** insert picture into picture table

##login page

####create a new profile
**insertProfile** insert profile on profile table

##reset page

####reset password 
**updateProfilePassword** update password on profile table 

##about us page
no MySQL functions here

##admin functions

**deletePicture**delete picture from picture table\
**deleteProfile** delete profile from profile table\
**deleteRestaurant** delete restaurant from restaurant table\
**insertRestaurant** insert restaurant into restaurant table
