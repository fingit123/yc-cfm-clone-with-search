# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# name: "Eugene 1",
#         profilePic: "https://bookface-images.s3.amazonaws.com/avatars/ddef86b87cb5d6ce142f7d20f7ad171a63cfec84.jpg",
#         location: "San Francisco, CA, USA",
#         age: 23,
#         lastSeen: 'today',
#         intro: 'Looking for a cofounder who loves fitness and building things!',
#         freeTime: 'Painting, drawing, hiking, gym',
#         accomplishment: "Graduated college with a 4.0 in 2 years while working 2 part time jobs",
#         education: '2023 - UC Davis Law School (J.D.) (youngest graduate in class)',
#         employment: 'Cofounder @ GymBuddy (coding an app to help people overcome gym anxiety, partnered with top gyms in SF). Mar 2023 - Present.
# Founder @ Threadfunder (coded a crowdfunding site for clothing designers in 5 days, featured in CBS News and WWD). Jun 2022 - Aug 2022.',
#         ideas: "App to help people overcome gym anxiety",
#         lookingFor: "Ideally, my co-founder is not set on a specific idea, technical, and in my region (North America).",
#         linkedIn: "https://www.linkedin.com/in/eugene-liu-8932521b5/",
#         technical: 'yes',
#         readyWithin: '3 months',
#         hasIdeas: 'have some ideas, but I’m also open to exploring other ideas',
#         willingToDo: 'Engineering, Product, Design, Sales and marketing, and Operations',
#         interests: 'Health / Wellness, Education / Edtech, Consumer, Artificial Intelligence, B2B / Enterprise, Hardware, Hard Tech',

profiles = Profile.create([
#     {
#         name: "Eugene 3",
#         profilePic: "https://bookface-images.s3.amazonaws.com/avatars/ddef86b87cb5d6ce142f7d20f7ad171a63cfec84.jpg",
#         location: "San Francisco, CA, USA",
#         age: 23,
#         lastSeen: 'today',
#         intro: 'Looking for a cofounder who loves fitness and building things!',
#         freeTime: 'Painting, drawing, hiking, gym',
#         accomplishment: "Graduated college with a 4.0 in 2 years while working 2 part time jobs",
#         education: 'merced',
#         employment: 'Cofounder @ GymBuddy (coding an app to help people overcome gym anxiety, partnered with top gyms in SF). Mar 2023 - Present.
# Founder @ Threadfunder (coded a crowdfunding site for clothing designers in 5 days, featured in CBS News and WWD). Jun 2022 - Aug 2022.',
#         ideas: "App to help people overcome gym anxiety",
#         lookingFor: "Ideally, my co-founder is not set on a specific idea, technical, and in my region (North America).",
#         linkedIn: "https://www.linkedin.com/in/eugene-liu-8932521b5/",
#         technical: 'yes',
#         readyWithin: '3 months',
#         hasIdeas: 'have some ideas, but I’m also open to exploring other ideas',
#         willingToDo: 'Engineering, Product, Design, Sales and marketing, and Operations',
#         interests: 'Health / Wellness, Education / Edtech, Consumer, Artificial Intelligence, B2B / Enterprise, Hardware, Hard Tech',

#     },
#     {
#         name: `John Cena`,
#         profilePic: ``,
#         location: `San Francisco, CA, USA`,
#         age: 23,
#         lastSeen: `10 days ago`,
#         intro: `Hi, I'm Gil Dexter, a recent college grad seeking a cofounder. I studied math and computer science, but my internship experience is in finance. Despite my efforts to develop a passion there, my true interest lies in athletics and human performance. I've been a competitive rower for the past six years, a journey that has taken me to Japan, taught me about the human body (and myself), and given me a sense of purpose. I want to find that same purpose by becoming an entrepreneur in the wellness, athletic, and performance technology space. I'm looking for someone with similar interests to take that step—or leap—with me.`,
#         freeTime: `I'm passionate about fitness, philosophy, and coffee, among other things. I tend to dive deeply into the things I'm passionate about: I won't bore you with the details of my coffee obsession. I I enjoy hearing about other people's niche interests, too. I'd love to work alongside someone with tangible passions outside of their work.`,
#         accomplishment: `I won the D1 national championship for rowing in 2022!`,
#         education: `Columbia University, Mathematics and Computer Science (BA), 2024`,
#         employment: `Goldman Sachs, Quantitative Strategy Summer Analyst, 2023`,
#         ideas: `A social media platform transforms self-improvement into a shared, communal experience by enabling users to synchronize their activities with friends, fostering a sense of accountability and support. Unlike other self-improvement apps that focus on individual progress, our platform emphasizes collective effort, making self-improvement more engaging and enjoyable through the power of social bonds. I'm open to suggestions, different paths, and completely different ideas!`,
#         lookingFor: `Ideally, my co-founder is not set on a specific idea, technical, and in my region (North America).`,
#         linkedIn: ``,
#         technical: `yes`,
#         readyWithin: `3 months`,
#         hasIdeas: `have some ideas, but I’m also open to exploring other ideas`,
#         willingToDo: `Engineering, Product, Design, Sales and marketing, and Operations`,
#         interests: `Health / Wellness, Education / Edtech, Consumer, Artificial Intelligence, B2B / Enterprise, Hardware, Hard Tech`,

#     },
    {
        name: "John Cena",
        profilePic: "data:image/jpeg;base64,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",
        location: "San Francisco, CA, USA",
        age: 23,
        lastSeen: "10 days ago",
        intro: "Hi, I'm Gil Dexter, a recent college grad seeking a cofounder. I studied math and computer science, but my internship experience is in finance. Despite my efforts to develop a passion there, my true interest lies in athletics and human performance. I've been a competitive rower for the past six years, a journey that has taken me to Japan, taught me about the human body (and myself), and given me a sense of purpose. I want to find that same purpose by becoming an entrepreneur in the wellness, athletic, and performance technology space. I'm looking for someone with similar interests to take that step—or leap—with me.",
        freeTime: "I'm passionate about fitness, philosophy, and coffee, among other things. I tend to dive deeply into the things I'm passionate about: I won't bore you with the details of my coffee obsession. I I enjoy hearing about other people's niche interests, too. I'd love to work alongside someone with tangible passions outside of their work.",
        accomplishment: "I won the D1 national championship for rowing in 2022!",
        education: "Columbia University, Mathematics and Computer Science (BA), 2024",
        employment: "Goldman Sachs, Quantitative Strategy Summer Analyst, 2023",
        ideas: "A social media platform transforms self-improvement into a shared, communal experience by enabling users to synchronize their activities with friends, fostering a sense of accountability and support. Unlike other self-improvement apps that focus on individual progress, our platform emphasizes collective effort, making self-improvement more engaging and enjoyable through the power of social bonds. I'm open to suggestions, different paths, and completely different ideas!",
        lookingFor: "Ideally, my co-founder is not set on a specific idea, technical, and in my region (North America).",
        linkedIn: "",
        technical: "yes",
        readyWithin: "3 months",
        hasIdeas: "have some ideas, but I’m also open to exploring other ideas",
        willingToDo: "Engineering, Product, Design, Sales and marketing, and Operations",
        interests: "Health / Wellness, Education / Edtech, Consumer, Artificial Intelligence, B2B / Enterprise, Hardware, Hard Tech",
    },
# GPT prompts
#remove profile pics, just make it blank (i will manually add)
#Quotation marks are not allowed. Apostrophes are though.
#give options for my interests, technical (yes/nos)    
])