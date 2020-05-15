DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS restaurant;
DROP TABLE IF EXISTS foodpic;
DROP TABLE IF EXISTS cheesey;
DROP TABLE IF EXISTS fork;

create table profile(
    profileId BINARY(16) not null,
    profileActivationToken VARCHAR(32),
    profileEmail VARCHAR(140) not null,
    profileHash CHAR(97) not null,
    profileName VARCHAR(140) not null,
    primary key(profileId),
    unique(profileEmail)
);

create table restaurant(
    restaurantId BINARY (16) not null,
    restaurantAddress VARCHAR(140) not null,
    restaurantFeaturedPic VARCHAR(140) nao null,
    restaurantName VARCHAR(140) not null,
    restaurantDescription VARCHAR(140) not null,
    primary key(restaurantId)
);

create table foodpic(
    foodpicId BINARY(16) not null,
    foodpicProfileId BINARY(16) not null,
    foodpicRestaurantId BINARY(16) not null,
    foodpicPicture VARCHAR(140) not null,
    primary key(foodpicId),
    foreign key(foodpicProfileId) references profile(profileId),
    foreign key(foodpicRestaurantId) references restaurant(restaurantId)
);

create table cheesey(
    cheeseyFoodpicId BINARY(16),
    cheeseyProfileId BINARY(16),
    cheeseyScore SMALLINT SIGNED not null,
    foreign key(cheeseyFoodpicId) references foodpic(foodpicId),
    foreign key(cheeseyProfileId) references profile(profileId),
    primary key(cheeseyFoodpicId, cheeseyProfileId)
);

create table fork(
    forkProfileId BINARY(16),
    forkRestaurantId BINARY(16),
    forkScore SMALLINT SIGNED not null,
    foreign key(forkProfileId) references profile(profileId),
    foreign key(forkRestaurantId) references restaurant(restaurantId),
    primary key(forkProfileId, forkRestaurantId)
);