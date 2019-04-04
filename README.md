# OWLR Front End Test

Hello, and welcome to the OWLR Front-End technical test.

The test is very straight forward, here at OWLR we support the viewing of global cameras, and sometimes our support and maintenance staff need to gather some data related to them.

The idea is to build an interface with simple and intuitive UI/UX so that our team can quickly access this information.

The data you will get from the backend comes in JSON format and every global camera structure will look like this:

```$json
{
    "cityId": 123,
    "cityName": "Sevilla",
    "country": "Spain",
    "cameras": [
      {
        "cameraId": 1487,
        "cameraName": "Caha Observatory 1",
        "supportChannels": [
          {
            "channelId": 13817,
            "type": "email",
            "recipient": "support1@caha-fake.com",
            "enabled": true,
            "verified": true
          },
          {
            "channelId": 13818,
            "type": "phone",
            "recipient": "+3488887777",
            "enabled": false,
            "verified": true
          }
        ]
      },
      {
        "cameraId": 1488,
        "cameraName": "Caha Observatory 2",
        "supportChannels": [
          {
            "channelId": 13817,
            "type": "email",
            "recipient": "support2@caha-fake.com",
            "enabled": true,
            "verified": true
          },
          {
            "channelId": 13818,
            "type": "phone",
            "recipient": "+3488887777",
            "enabled": false,
            "verified": true
          }
        ]
      }
    ],
    "maintenance": [
      {
        "type": "routine",
        "start": 1516528800000,
        "end": 1517079600000
      },
      {
        "type": "camera-upgrade",
        "start": 1518602400000,
        "end": 1518807600000
      }
    ],
    "stats": [
      {
        "date": "2019-04-01",
        "newFavorites": 37,
        "clicks": 198,
        "secondsWatched": 3918
      },
      {
        "date": "2019-04-02",
        "newFavorites": 31,
        "clicks": 156,
        "secondsWatched": 2888
      },
      {
        "date": "2019-04-04",
        "newFavorites": 35,
        "clicks": 222,
        "secondsWatched": 3577
      }
    ]
  }
```

## We track:
 
 1. All the cameras that belong to the location
 2. All the support channels we can use to contact them
 3. Maintenance schedule, past and future
 4. A few basic stats on clicks, number of favorites and how many seconds the cameras were watched
 
 The endpoint will return an **array** of these locations, and the webpage should be able to display them all 
 
 ---
## Evaluation

Your work will be evaluated in: 

1. How clean and direct the information is displayed, pure and simple. In OWLR we believe that in many times less is more. So we want something that is efficient but also easy on the eyes.
2. The cleanliness and organization of your code. You can use any framework you like best, as long as it's with HTML5 and CSS3

But don't worry, you will have a lot of feedback from us. 

----
## Data
To get the data you can either use the static json file at `/resources/model.json` on this repo. Or if you want to simulate a server this repo is also ready for that. Here are the steps.

1. [Download and install NodeJS](https://nodejs.org/en/download/)
2. `git clone` the repository
3. `cd` into the root directory of the repository 
4. `npm install`
5. `npm start`

On the logs you should see a statement printing the URL where you can find the data. It should be this:
`http://localhost:3000/model`
