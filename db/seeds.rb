# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create![{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.reset_sequence_name

Picture.destroy_all
Picture.reset_sequence_name

Follow.destroy_all
Follow.reset_sequence_name

User.create!({id: 1, email: 'editor@gmail.com', password: 'editor'})
User.create!({id: 2, email: 'testy_mctestface@gmail.com', password: '123456'})
User.create!({id: 3, email: 'amanda_lee@gmail.com', password: '123456'})
User.create!({id: 4, email: 'brittany_murphy@gmail.com', password: '123456'})

a = Picture.new({title:'Purple Ocean', description:'In a sea of violet.', user_id: 1})
a.picture.attach(io: File.open('app/assets/images/free_image/brett-ritchie-567662-unsplash.jpg'), filename: 'ocean.jpg')
a.save!

b = Picture.new({title:'Panda Party', description:'Who knows where the night takes you?', user_id: 1})
b.picture.attach(io: File.open('app/assets/images/free_image/erik-mclean-1105987-unsplash.jpg'), filename: 'panda_party.jpg')
b.save!

c = Picture.new({title:'Cabin in the Mountaintop', description:'Taken during december when the first snow fell', user_id: 1})
c.picture.attach(io: File.open('app/assets/images/free_image/guillaume-tourette-1107283-unsplash.jpg'), filename: 'snow_cabin.jpg')
c.save!

d = Picture.new({title:'Style in the City', description:'Retro is back. #daniel-monteiro #styling-in-the-city', user_id: 4})
d.picture.attach(io: File.open('app/assets/images/user_image/daniel-monteiro-1105874-unsplash.jpg'), filename: 'styling_girl.jpg')
d.save!

e = Picture.new({title:'Shadow Realm', description:'Shadow cast by the morning sun htting gothic stained glass panel #dasha-yukhymyuk', user_id: 4})
e.picture.attach(io: File.open('app/assets/images/user_image/dasha-yukhymyuk-1104765-unsplash.jpg'), filename: 'shadow_art.jpg')
e.save!

f = Picture.new({title:'Serenity Clif', description:'A seaside cliff with a natural arch. #gautier-salles', user_id: 4})
f.picture.attach(io: File.open('app/assets/images/user_image/gautier-salles-1106358-unsplash.jpg'), filename: 'cliff.jpg')
f.save!

g = Picture.new({title:'Fair-ly Beautiful', description:'My best myspace angle. #hunter-newton', user_id: 3})
g.picture.attach(io: File.open('app/assets/images/user_image/hunter-newton-1104673-unsplash.jpg'), filename: 'girl_at_the_fair.jpg')
g.save!

h = Picture.new({title:'Wild and Free', description:'Just me and my board travelling along the coast.', user_id: 4})
h.picture.attach(io: File.open('app/assets/images/user_image/jeff-kepler-1106964-unsplash.jpg'), filename: 'wild_girl.jpg')
h.save!

i = Picture.new({title:'I Spy a Little Green Chair', description:'Let me in, I want to sit in that chair', user_id: 3})
i.picture.attach(io: File.open('app/assets/images/user_image/lee-cartledge-1107548-unsplash.jpg'), filename: 'girl_and_green_chair.jpg')
i.save!

j = Picture.new({title:'The Great Outdoors', description:'A calm lake overshadowed by a majestic mountain', user_id: 4})
j.picture.attach(io: File.open('app/assets/images/user_image/marlon-martinez-1105823-unsplash.jpg'), filename: 'mountain_and_lake.jpg')
j.save!

k = Picture.new({title:'Breakfast of Champions', description:'A healthy breakfast of apricot, crepes, milk, and maple syrup to start your morning!', user_id: 3})
k.picture.attach(io: File.open('app/assets/images/user_image/monika-grabkowska-1106948-unsplash.jpg'), filename: 'crepe_breakfast.jpg')
k.save!

l = Picture.new({title:'Sandy Feet', description:'Feels good to visit the beach again and have the sand between my toes', user_id: 3})
l.picture.attach(io: File.open('app/assets/images/user_image/nathan-dumlao-1105826-unsplash.jpg'), filename: 'beach_feet.jpg')
l.save!

m = Picture.new({title:'Summertime Romance', description:'Taken a while ago when we met for the first time by the orchard.', user_id: 3})
m.picture.attach(io: File.open('app/assets/images/user_image/s-a-r-a-h-s-h-a-r-p-1104810-unsplash.jpg'), filename: 'couple_in_orchard.jpg')
m.save!
