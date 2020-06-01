#Entities and Attributes

##Entities
###profile (strong entity)
1. profileId (primary key)
2. profileActivation (for account activation)
3. profileEmail
4. profileHash (for account password)
5. profileName

###restaurant (strong entity)
1. restaurantId (primary key)
2. restaurantDescription
3. restaurantFeaturedPic
4. restaurantGoogleLink
5. restaurantName
6. restaurantSocialMedia

###fork (weak entity)
1. forkProfileId (foreign key)
2. forkRestaurantId (foreign key)
3. forkScore

###foodpic (try hard)
1. foodpicId (primary key)
2. foodpicProfileId (foreign key)
3. foodpicRestaurantId (foreign key)
4. foodpicCaption
5. foodpicPicture

###cheesey (weak entity)
1. cheeseyFoodpicId (foreign key)
2. cheeseyProfileId (foreign key)
3. cheeseyScore


##relations

1. a profile can upload many picture (1 to many relation)
2. many profiles can fork many restaurants (many to many relation)
3. many profiles can cheesey many pictures (many to many relation)
4. a restaurant can have many forks (1 to many relation)
5. a foodpic can have many cheeseys (a foodpic can have many cheeseys)
