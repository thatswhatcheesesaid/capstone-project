create table restaurant(
restaurantId BINARY (16) not null,
restaurantAddress VARCHAR(140) not null,
restaurantFeaturedPic
restaurantName VARCHAR(140) not null,
restaurantDescription VARCHAR(140) not null
);

create table foodpic(
foodpicId BINARY(16) not null,
foodpicProfileId BINARY(16) not null,
foodpicRestaurantId BINARY(16) not null,
foodpicPicture
);

create table cheesey(
cheeseyFoodpicId BINARY(16),
cheeseyProfileId BINARY(16),
cheeseyScore SMALLINT
);

create table fork(
forkProfileId BINARY(16),
forkRestaurantId BINARY(16),
ForkScore
);