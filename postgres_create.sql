create table item (
	itemId serial primary key,
	itemName varchar(50) not null,
	itemRelease date,
	itemWave int,
	itemSeries varchar(50),
	itemRetailer varchar(50),
	itemMedia varchar(100),
	itemSeriesNumber int
);