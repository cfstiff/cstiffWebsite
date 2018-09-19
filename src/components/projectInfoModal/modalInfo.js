export const sleepDepBuddy =
    "This small desktop pet was created as a hackathon project for Muddhacks 2017 with a team of three others. The pet measures the amount of time that its owner is sleeping and slowly loses health if the owner does not sleep enough. The owner can help its pet regain health by feeding it by pressing a small switch on the top of the box. The initial aim of the project was to also include an accelerometer, with the pet switching sides of the box as it was turned, but the inevitable time restrictions of a hackathon forced us to abandon that feature. <br /> <br /> The pet runs on a <a href='https://rabidprototypes.com/product/pixel/' target='_blank'>Rabid Prototypes Pixel 2.0 board</a>, which is an LED display integrated with an Arduino. The boardis connected to a light sensor, to detect light levels in the room and allow us to measure the amount of time the owner is 'sleeping'. The entire pet sits in a 3'' square lasercut box, with a switch on the top of the box wired to allow the pet to be fed. <br/><br/> The project won 2nd place in the competition, against over 50 teams. The project was also featured as a part of an <a href='http://www.latimes.com/local/lanow/la-me-ln-harvey-mudd-tech-women-adv-snap-story.html' target='_blank'> article</a> about women in STEM in the LA Times.";

export const cloudLamp =
    "For the final project for  E155 -  Microprocessor-based Systems: Design and Applications, <a href='http://www.eaposs.com' target='_blank'>Elizabeth Poss</a> and I created a cloud lamp. The lamp makes calls to an external weather API via zip code, and then changes the color and brightness of the lamp based on the weather data it receives. The lamp currently has settings for sunrise, sunset, rain and snow of various intensities, and thunderstorms. The lamp incorporates a web server, which allows users to control brightness, and turn it on and off. If the user does not set brightness manually, the cloud automatically changes brightness based on the cloud levels in the zip code that it is querying. <br/><br/> The cloud consists of three paper lanterns covered with cotton stuffing, sections of Dotstar LED strands to provide color, and three hanging strands, which allow us to simulate rain and snow. The cloud runs on an Raspberry Pi, which hosts the web server, makes calls to the external API, and parses the weather data it receives. The Raspberry Pi then communicates the data to an FPGA via SPI. The FPGA  controls the LED strands. <br/><br/> My contributions to the project were mainly focused on the Raspberry Pi sections. We used C to create a simple web server that could take in a brightness value from the user. In order to pass this to our Python script that was parsing the weather data, we saved the brightness value out to a text file. The Pi then retrieves the weather data using Python to make a call to openweathermap.org, and combines the data from the API and the brightness passed by the user to create a binary sequence that we decided on beforehand. <br/> <br/> However, while Python is excellent for doing API calls, it did not provide us the timing control over the pins that we needed in order to communicate via SPI with the FPGA. Thankfully, as Python is based on C, we were able to write C code that would run the Python script, and retrieve the output binary. Finally, we used various C libraries to use SPI to send the binary value to the FPGA. My partner then wrote Verilog code to control the LED strands, and create the various patterns that we wanted to use. ";

export const homeaway =
    "I was a software development intern at Homeaway, Inc. during the summer of 2018. I worked with the team responsible for the Search page, one of the highest traffic pages across the site. On this team, I primarily used React, with some CSS, Flexbox, Redux, and GraphQl. The Search team has an <a href='https://medium.com/homeaway-tech-blog/road-to-88-deployments-month-19a92db028d0' target='_blank'>advanced CI/CD pipeline</a>, where every commit to the master branch was automatically deployed to production. In order to push to master, all code had to have 100% coverage, pass snapshot testing, and not reduce our Lighthouse accessibility score. Because of this structure, I became familiar with Jenkins deployment, various testing frameworks including Jest-based unit testing and image snapshot testing, and Google Lighthouse testing for accessibility. <br/><br/> While on this team, I contributed directly by picking up Jira tickets, and participating in an agile workflow. Throughout the course of the summer, I deployed two A/B tests, fixed bugs, and worked on improving the performance of the page.";

export const website =
    "This website is written in React, using Bootstrap components for styling, and Redux for state management. The site uses Surge to deploy, and automatically deploys using Travis once a commit is made to the master branch. Whenever a pull request is opened, a test branch is also created at a custom subdomain. Travis will leave a <a href='https://github.com/cfstiff/cstiffWebsite/pulls' target='__blank'> comment on the PR </a> with the appropriate link once the build successfully completes.";
export const research =
    "I worked in the <a href='https://hmcactivetransportation.wordpress.com/' target='_blank'> Active Transportation Lab </a> at Harvey Mudd College with Professor Julie Medero for over a year. While on this team, I wrote code that used image processing tools and Google Street View images to try and identify infrastructure changes. This was part of an overall effort to identify the effect of infrastructure changes on bicycle and pedestrian collisions. <br/> <br/> While in this lab, I gave several research talks to other undergraduates. I also took part in a poster session, presenting my work to other students and faculty. During the summer and semester, I wrote several <a href = 'https://hmcactivetransportation.wordpress.com/author/cocostiff/' target='_blank'> research</a> <a href='https://cstiffactivetransportation.wordpress.com/' target='_blank'> blogs</a>, along with a <a href= '/researchPaper.pdf' target='_blank'> final paper </a> summarizing my research.";
export const ctfBot =
    "Ginal project for E11 - Autonomous Vehicles, an introductory robotics course at Harvey Mudd College. A classmate and I built an Arduino robot that participated in a Capture the Flag competition. We won third place. <br/> <br/> The competition consisted of two types of beacons to be captured. Some  could be triggered by flashing gold codes, and others that could be trigered by bumping a sensor on the base of the beacon. I focused on writing the code for the bump beacons. This used a line following algorithm to get the robot close to the bump beacon, a light sensor to read the gold code being emitted by the beacon (to ensure that we didn't accidentally trigger a beacon for the other team), and then had the robot drive towards the beacon until the beacon was triggered for our team.";
export default function modalBody(value) {
    switch (value) {
        case "sleepDepBuddy":
            return sleepDepBuddy;
        case "cloudLamp":
            return cloudLamp;
        case "homeaway":
            return homeaway;
        case "research":
            return research;
        case "ctfBot":
            return ctfBot;
        case "website":
            return website;
        default:
            return null;
    }
}
export function modalHeader(value) {
    switch (value) {
        case "sleepDepBuddy":
            return "SleepDepBuddy";
        case "cloudLamp":
            return "Connected Cloud Lamp";
        case "homeaway":
            return "HomeAway Internship";
        case "research":
            return "Research";
        case "ctfBot":
            return "Capture the Flag Bot";
        case "website":
            return "Website";
        default:
            return null;
    }
}
