DROP TABLE IF EXISTS cheesey;
DROP TABLE IF EXISTS foodpic;
DROP TABLE IF EXISTS fork;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS restaurant;

create TABLE profile(
    profileId              BINARY(16)   not null,
    profileActivationToken VARCHAR(32),
    profileEmail           VARCHAR(140) not null,
    profileHash            CHAR(97)     not null,
    profileName            VARCHAR(140) not null,
    unique (profileEmail),
    primary key (profileId)
);

create TABLE restaurant(
    restaurantId                 BINARY(16)   not null,
    restaurantFeaturedPic        VARCHAR(512) not null,
    restaurantFeaturedPicCaption VARCHAR(140) not null,
    restaurantGoogleLink         VARCHAR(140) not null,
    restaurantName               VARCHAR(140) not null,
    restaurantSocialMediaUrl     VARCHAR(140),
    unique (restaurantName),
    primary key (restaurantId)
);

create TABLE foodpic(
    foodpicId           BINARY(16)   not null,
    foodpicProfileId    BINARY(16)   not null,
    foodpicRestaurantId BINARY(16),
    foodpicCaption      VARCHAR (144) not null,
    foodpicUrl          VARCHAR(255) not null,
    index (foodpicProfileId),
    index (foodpicRestaurantId),
    foreign key (foodpicProfileId) references profile (profileId),
    foreign key (foodpicRestaurantId) references restaurant (restaurantId),
    primary key (foodpicId)
);

create TABLE cheesey(
    cheeseyFoodpicId BINARY(16),
    cheeseyProfileId BINARY(16),
    cheeseyScore     SMALLINT UNSIGNED not null,
    index (cheeseyFoodpicId),
    index (cheeseyProfileId),
    foreign key (cheeseyFoodpicId) references foodpic (foodpicId),
    foreign key (cheeseyProfileId) references profile (profileId),
    primary key (cheeseyFoodpicId, cheeseyProfileId)
);

create TABLE fork(
    forkProfileId    BINARY(16),
    forkRestaurantId BINARY(16),
    forkScore        SMALLINT SIGNED not null,
    index (forkProfileId),
    index (forkRestaurantId),
    foreign key (forkProfileId) references profile (profileId),
    foreign key (forkRestaurantId) references restaurant (restaurantId),
    primary key (forkProfileId, forkRestaurantId)
);








