# AF PFA Calculator

[![Build status](https://ci.appveyor.com/api/projects/status/d5fjywrlbj6s63hg?svg=true)](https://ci.appveyor.com/project/20avva/af-pfa-calculator)[![Build Status](https://travis-ci.org/20avva/AF-PFA-Calculator.svg?branch=master)](https://travis-ci.org/20avva/AF-PFA-Calculator)


This is an unofficial tool to calculate your Air Force Physical Fitness Assessment score. It is based on the charts provided [on the Air Force's website](https://www.afpc.af.mil/Portals/70/documents/Home/AF%20Fitness%20Program/FITNESS%20CHARTS.pdf)


## Developer Instructions

If you want to develop this app, and assuming you have [node.js](https://nodejs.org/en/download/) installed, follow these instructions

```bash
# Clone the repo
$ git clone https://github.com/20avva/AF-PFA-Calculator.git

# cd into the local clone and install dependencies
$ cd AF-PFA-Calculator

# Install dependencies
$ npm install -S && npm install -D

# Wear a hard hat
$ npm test

# Start it up
$ npm start
```

## Disclaimer

Neither this tool nor the author thereof is affiliated with the United States Air Force or any component of the United States Department of Defense.
The author of this tool cannot be held responsible for discrepancies between the composite score calculated here and the composite score calculated by
the administrator of your PFA. This tool is meant to be used for and only for the US Air Force Physical Fitness Assessment. The charts with which this
tool calculates your composite score may be viewed <a target="_blank" href="files/FITNESS CHARTS.pdf">here</a>,
or copy and paste this link into a browser address bar: https://www.afpc.af.mil/Portals/70/documents/Home/AF%20Fitness%20Program/FITNESS%20CHARTS.pdf 