/**
# Food APP
* Header
  ->Logo
  ->Nav Items
* Body
  ->Search
  ->RestaurantContainer
    ->RestaurantCard
        Img
        Name of the res, star rating, cuisine, delivery time
* Footer
  ->Copyright
  ->Links
  ->Address
  ->Contacts
  */

import React from "react";
import {createRoot} from "react-dom/client";

const resObj = [ 
   {

              "id": "426730",
              "name": "Theobroma",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG",
              "locality": "Lavelle Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Desserts",
                "Bakery",
                "Beverages"
              ],
              "avgRating": 4.7,
              "parentId": "1040",
              "avgRatingString": "4.7",
              "totalRatingsString": "5.9K+",
              "promoted": true,
              "adTrackingId": "cid=31351696~p=0~adgrpid=31351696#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=426730~plpr=COLLECTION~eid=abab84a3-21a7-4ffa-8d7e-9b66b09490e0~srvts=1753359181887~collid=83655",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-24 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                  },
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Desserts.png"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "441"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31351696"
            
          },
    
          
      {
        
            
              "id": "197238",
              "name": "The Belgian Waffle Co.",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/10c67601-481f-4785-8362-7b0e22403848_197238.jpg",
              "locality": "Basavanagudi",
              "areaName": "Basavanagudi",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
              ],
              "avgRating": 4.6,
              "parentId": "2233",
              "avgRatingString": "4.6",
              "totalRatingsString": "4.8K+",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-25 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "412"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            ,
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=197238&source=collection&query=Cakes",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          ,
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        
      },
      {
        
              "id": "708690",
              "name": "Klava- Turkish Patisserie",
              "cloudinaryImageId": "827bcae3a180486b902909067c42b3d9",
              "locality": "Brigade Rd",
              "areaName": "Brigade Road",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "Turkish",
                "Desserts",
                "Bakery",
                "Sweets",
                "Cafe"
              ],
              "avgRating": 4.5,
              "parentId": "473578",
              "avgRatingString": "4.5",
              "totalRatingsString": "445",
              "promoted": true,
              "adTrackingId": "cid=31388648~p=1~adgrpid=31388648#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=708690~plpr=COLLECTION~eid=2b2ce4e3-9126-4c70-bb42-fdb673e812df~srvts=1753359181887~collid=83655",
              "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-07-25 02:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31388648"
            ,
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=708690&source=collection&query=Cakes",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          ,
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        
      }]
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};



const RestaurantCard =(props) => {
    const{resData}=props;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime+' mins'}</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/** <RestaurantCard 
                resName="Chusma Foods"
                cuisine="Biriyani, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes"
                />
                <RestaurantCard
                resName="Renu Foods"
                cuisine="KFC, North Indian, Asian"
                rating="4.5 stars"
                time="38 minutes" /> */}

                {/**<RestaurantCard resData={resObj[0]}/>
                <RestaurantCard resData={resObj[1]}/>
                <RestaurantCard resData={resObj[2]}/>*/}
                {resObj.map((restaurant)=>(
                  <RestaurantCard key={restaurant.id} resData={restaurant}/>

                ))}
            </div>

        </div>
    );

};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout />);