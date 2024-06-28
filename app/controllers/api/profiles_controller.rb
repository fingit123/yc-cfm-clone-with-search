module Api
    class ProfilesController < ApplicationController
        def index
            # puts params
            profiles = get_matching_profiles(params['search_term']).map do |profile|
            # profiles = Profile.all.map do |profile|
                {
                    name: profile.name,
                    profilepic: profile.profilepic,
                    location: profile.location,
                    age: profile.age,
                    lastseen: profile.lastseen,
                    intro: profile.intro,
                    free: profile.free,
                    accomplishment: profile.accomplishment,
                    education: profile.education,
                    employment: profile.employment,
                    ideas: profile.ideas,
                    lookingfor: profile.lookingfor,
                    linkedin: profile.linkedin,
                    technical: profile.technical,
                    readywithin: profile.readywithin,
                    hasideas: profile.hasideas,
                    willingtodo: profile.willingtodo,
                    interests: profile.interests,
                }
            end
            render(json: {profiles: profiles})
        end

        def get_matching_profiles(search_term)
            if search_term.blank?
                Profile.all
            else
                # Profile.where("free ILIKE :search_term OR education ILIKE :search_term", search_term: "%#{search_term}%")
                Profile.where("location ILIKE :search_term OR education ILIKE :search_term OR intro ILIKE :search_term OR free ILIKE :search_term OR accomplishment ILIKE :search_term OR employment ILIKE :search_term OR ideas ILIKE :search_term", search_term: "%#{search_term}%")
            end
        end

    end
end