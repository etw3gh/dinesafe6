#!/bin/bash

# download yelp assets
wget https://s3-media1.fl.yelpcdn.com/assets/srv0/developer_pages/0811cbc33dff/assets/img/yelp_stars.zip

# unzip
unzip yelp_stars.zip

# create path in images for extraction, maintaing containing dir
mkdir -p src/images/yelp_stars

# copy just the small images
# if prompted enter A
cp -rf yelp_stars/web_and_ios/small src/images/yelp_stars

# uncomment if you require any or all of these sizes
#cp -rf yelp_stars/web_and_ios/regular src/images/yelp_stars
#cp -rf yelp_stars/web_and_ios/large src/images/yelp_stars
#cp -rf yelp_stars/web_and_ios/extra_large src/images/yelp_stars

# delete downloaded file and temp unzipped file
rm -rf yelp_stars*
