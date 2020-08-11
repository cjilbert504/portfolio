# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.create(full_name: "test_full_name", email: "test@test.com", message: "Did I get this email?")

BlogPost.create([
    {
        title: "F.R.M: A Thought Process For Debugging",
        content: <<-CONTENT
        Learning to code can be very challenging at times and yet early on in an
        application build or lab things can seem to go incredibly smooth and then 
        walls are hit and bugs are born. In my experience it seems to happen to everyone at least once, 
        myself included. For myself I found a few ways to help find where these creatures reside by pulling on 
        my past experience as an audio engineer. In programming the concept of object relational mapping (ORM), is 
        the idea of mapping the objects of an application to tables in a database management system, allowing the 
        attibutes and relationships of the objects to be stored and retrieved with ease, relational mapping. The 
        idea of relational mapping got my mind turning out of nowehere while trying to find a bug in a lab at Flatiron 
        School one day and suddenly I had a moment of clarity and realized that an application flows very similarly to 
        that of how audio signal flows through an audio mixing console. The idea of signal flow in the audio engineering 
        world is all about knowing where your signal from an input source, i.e. a microphone or a direct input from something 
        like a keyboard or other electronic devices, is at in the console at any given moment and being able to utilize that 
        knowledge to then manipulate the signal as needed/ desired. Applications, like audio mixing consoles, take input 
        from an outside source, manipulate that input in someway and store and return the input to the user as desired(hopefully). 
        Audio signal can be re-routed to different paths/ places, much like an object can be routed to different places in an 
        application. Audio signal can be altered, i.e. compressed, equalized, much like data can be altered, i.e. split, 
        sorted, reversed and so much more. The connections were omnipresent. Armed with this new knowledge of being able to 
        relate past skills to my current path of learning to program I was able to incrementaly step through the entire flow 
        of the application, pulling the output from the application at any point that I desired, much the same as I would with an 
        audio signal, to verify that the output at each point matched what I expected until I encountered a place where it 
        did not! Alas, bug located! Back to the relational piece from the paragraphs above, being able to relate my past experience 
        to my current situation is what lead me to coming up with the idea of FRM. Derived from ORM, FRM is what I am referring 
        to as Familiarity Relational Mapping. The idea of drawing on past knowledge as a way to relate to your current task at hand. It 
        has been an incredibly powerful tool for me since it came to me and even if you don’t know anything about audio engineering, I 
        invite you to try to draw from something in your past to make a relational connection to understand whatever your current 
        task at hand or struggles may be.
        CONTENT
    },
    {
        title: "Come Fly With Me...",
        content: <<-CONTENT
        Ahhh Frank Sinatra…. no wait…. just Sinatra, the lightweight little brother to Ruby on 
        Rails. To say I was excited to get an application onto the web would be an extreme understatement. 
        From the beginning and throughout the majority of the Sinatra lesson curriculum I felt rather comfortable 
        with how everything was coming and working together, almost to the point to where I became concerned 
        that it couldn’t be such a smooth consumption of knowledge. To my amazement this feeling was reinforced 
        through out the majority of the labs but sure enough walls were hit. And so one is reminded that the 
        inevitable fact remains that the ebb and flow of learning something as intricate and complex as learning 
        web developement will always be constant and changing. As always there were brief moments of self doubt but 
        by taking inventory and thinking back to the weeks surrounding the module one final project build, I was hit 
        with a wave of positivity. This feeling of self doubt was familiar, and then the realization that I previously
        pushed through that feeling and successfully made it out the other side came crashing down upon me. I lit up in excitement.
        Following this exuberance, I immediately reached out to my inner circle of fellow Flatiron students, aka the squad (look 
        for us on Learn for our late night after hours study group sessions appropriately named something along the lines of 11/4 PT 
        Squad 1.0, come say hi!) to share my experience with and remind them that they will most likely feel that same feeling and 
        that when they do, remind themselves of my story to them. The Sinatra portfolio project was the best learning 
        experience thus far and I am looking forward to my assessment and lending a helping hand to my fellow students 
        if I am able to and help to push them through any and all barriers. Sinatra has reminded me to always stay positive and 
        know that with determination and a burning desire to achieve my goals, I, just like anyone else, can do it.
        CONTENT
    },
    { title: "The } of the beginning", 
      content: <<-CONTENT
        Today marks the end to my first module in the Flatiron School curriculum. This 
        point is marked with the completion of my first portfolio project, a CLI gem 
        written with Ruby, and the experience was nothing short of a thrilling 
        rollercoaster. The journey was littered with ups and downs but thankfully mostly 
        ups to my amazement. I was fortunate enough to get a good head start on 
        starting the project which I am so incredibly thankful for and used it to really try 
        to take my time to plan it out and code.
        My approach to the project build out was to try to cover at least one use of each
        of the skills we have learned up to this point. I think I delivered relatively well on
        this goal, perhaps not hitting everything but I did my best to cover as much as 
        possible. One of the main focus points for me was just trying to make sure that I 
        was creating and using objects with the data that was gathered from scraping 
        and not just showing the scraped and parsed data to the user. It’s all to easy to 
        want to display the data as is once you actually get the desired results from a 
        scrape, but be cautious here. The goal of learning about object oriented 
        programming is to do just that, program with objects.
        The next area that I started out feeling strong on but had some difficulties with 
        at the end was remembering what I was writing methods for. A whole class? An 
        instance of the class? Self? Should self be used ? And if self, then what is self at 
        that moment? This can get out of hand quickly and the ending result is a lot of 
        class methods that are acting on the whole class. If I could offer any advice it 
        would be to always ask yourself, “What am I writing this method to be called 
        on?”. Asking this first and really taking the time to answer this question will save 
        a great amount of time and frustration later on. Having to go back and re-write 
        the code to be used as an instance method instead of a class method and then 
        testing it only to find out that while the new instance method may be correct it 
        has now broken other parts of the program that was using that method in its 
        previous form. With the end of the beginning now upon me I have to say that I 
        am so thankful for this project and am even more excited for the rest of the 
        curriculum to gift its knowledge to me and let it change me for the better.
        CONTENT
    }
])