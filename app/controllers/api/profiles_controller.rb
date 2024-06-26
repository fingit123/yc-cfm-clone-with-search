module Api
    class ProfilesController < ApplicationController
        def index
            profiles = Profile.all.map do |profile|
                {
                    name: profile.name,
                    profilePic: profile.profilePic,
                    location: profile.location,
                    age: profile.age,
                    lastSeen: profile.lastSeen,
                    intro: profile.intro,
                    freeTime: profile.freeTime,
                    accomplishment: profile.accomplishment,
                    education: profile.education,
                    employment: profile.employment,
                    ideas: profile.ideas,
                    lookingFor: profile.lookingFor,
                    linkedIn: profile.linkedIn,
                    technical: profile.technical,
                    readyWithin: profile.readyWithin,
                    hasIdeas: profile.hasIdeas,
                    willingToDo: profile.willingToDo,
                    interests: profile.interests,
                }
            end
            render(json: {profiles: profiles})
        end
    end
end