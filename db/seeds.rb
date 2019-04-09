# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create![{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Picture.destroy_all
Follow.destroy_all
Like.destroy_all
Comment.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

n = User.create!({email: 'editor@gmail.com', password: 'editor'})
n.profile_cover.attach(io: File.open('app/assets/images/muhammad-shahzad-361233-unsplash.jpg'), filename: 'cover.jpg')
n.profile_pic.attach(io: File.open('app/assets/images/if_users-10_984119.png'), filename: 'profile_pic.png')
n.save!

o = User.create!({email: 'demo_user@gmail.com', password: '123456'})
o.profile_cover.attach(io: File.open('app/assets/images/muhammad-shahzad-361233-unsplash.jpg'), filename: 'cover.jpg')
o.profile_pic.attach(io: File.open('app/assets/images/user_uploads/daniel-monteiro-1105874-unsplash.jpg'), filename: 'profile_pic.jpg')
o.save!

p = User.create!({email: 'amanda_lee@gmail.com', password: '123456'})
p.profile_cover.attach(io: File.open('app/assets/images/muhammad-shahzad-361233-unsplash.jpg'), filename: 'cover.jpg')
p.profile_pic.attach(io: File.open('app/assets/images/user_uploads/hunter-newton-1104673-unsplash.jpg'), filename: 'profile_pic.jpg')
p.save!

q = User.create!({email: 'brittany_murphy@gmail.com', password: '123456'})
q.profile_cover.attach(io: File.open('app/assets/images/muhammad-shahzad-361233-unsplash.jpg'), filename: 'cover.jpg')
q.profile_pic.attach(io: File.open('app/assets/images/user_uploads/jeff-kepler-1106964-unsplash.jpg'), filename: 'profile_pic.jpg')
q.save!

ad = User.create!({email: 'daniel_choo@gmail.com', password: '123456'})
ad.profile_cover.attach(io: File.open('app/assets/images/muhammad-shahzad-361233-unsplash.jpg'), filename: 'cover.jpg')
ad.profile_pic.attach(io: File.open('app/assets/images/user_uploads/marlon-martinez-1105823-unsplash.jpg'), filename: 'profile_pic.jpg')
ad.save!

a = Picture.new({title:'Purple Ocean', description:'In a sea of violet.', user_id: 1, tags: ['ocean','purple', 'shore', 'rocks', 'boulder']})
a.picture.attach(io: File.open('app/assets/images/editor_uploads/brett-ritchie-567662-unsplash.jpg'), filename: 'ocean.jpg')
a.save!

b = Picture.new({title:'Panda Party', description:'Who knows where the night takes you?', user_id: 1, tags: ['panda','costume','shoe','party','drinks', 'alcohol']})
b.picture.attach(io: File.open('app/assets/images/editor_uploads/erik-mclean-1105987-unsplash.jpg'), filename: 'panda_party.jpg')
b.save!

c = Picture.new({title:'Cabin in the Mountaintop', description:'Taken during december when the first snow fell', user_id: 1, tags: ['snow','mountain','cabin','mountaintop','majestic','beautiful']})
c.picture.attach(io: File.open('app/assets/images/editor_uploads/guillaume-tourette-1107283-unsplash.jpg'), filename: 'snow_cabin.jpg')
c.save!

d = Picture.new({title:'Style in the City', description:'Retro is back. #daniel-monteiro #styling-in-the-city', user_id: 4, tags: ['blonde','girl','stylish','style','fancy','glasses']})
d.picture.attach(io: File.open('app/assets/images/user_uploads/daniel-monteiro-1105874-unsplash.jpg'), filename: 'styling_girl.jpg')
d.save!

e = Picture.new({title:'Shadow Realm', description:'Shadow cast by the morning sun htting gothic stained glass panel #dasha-yukhymyuk', user_id: 4, tags: ['beautiful','shadow','red','girl','woman','glass']})
e.picture.attach(io: File.open('app/assets/images/user_uploads/dasha-yukhymyuk-1104765-unsplash.jpg'), filename: 'shadow_art.jpg')
e.save!

f = Picture.new({title:'Serenity Clif', description:'A seaside cliff with a natural arch. #gautier-salles', user_id: 4, tags: ['cliff','water','ocean','horizon','sunset']})
f.picture.attach(io: File.open('app/assets/images/user_uploads/gautier-salles-1106358-unsplash.jpg'), filename: 'cliff.jpg')
f.save!

g = Picture.new({title:'Fair-ly Beautiful', description:'My best myspace angle. #hunter-newton', user_id: 3, tags: ['fair','blonde','woman','girl','cute','merry-go-round']})
g.picture.attach(io: File.open('app/assets/images/user_uploads/hunter-newton-1104673-unsplash.jpg'), filename: 'girl_at_the_fair.jpg')
g.save!

h = Picture.new({title:'Wild and Free', description:'Just me and my board travelling along the coast.', user_id: 4, tags: ['board','girl','woman','ocean','sea','rocks']})
h.picture.attach(io: File.open('app/assets/images/user_uploads/jeff-kepler-1106964-unsplash.jpg'), filename: 'wild_girl.jpg')
h.save!

i = Picture.new({title:'I Spy a Little Green Chair', description:'Let me in, I want to sit in that chair', user_id: 3, tags: ['green','chair','girl','backpack','dress','neon']})
i.picture.attach(io: File.open('app/assets/images/user_uploads/lee-cartledge-1107548-unsplash.jpg'), filename: 'girl_and_green_chair.jpg')
i.save!

j = Picture.new({title:'The Great Outdoors', description:'A calm lake overshadowed by a majestic mountain', user_id: 4, tags: ['majestic','lake','forest','mountain','cliff','rocks','blue','nature']})
j.picture.attach(io: File.open('app/assets/images/user_uploads/marlon-martinez-1105823-unsplash.jpg'), filename: 'mountain_and_lake.jpg')
j.save!

k = Picture.new({title:'Breakfast of Champions', description:'A healthy breakfast of apricot, crepes, milk, and maple syrup to start your morning!', user_id: 3, tags: ['breakfast','food','crepe','syrup','fruit']})
k.picture.attach(io: File.open('app/assets/images/user_uploads/monika-grabkowska-1106948-unsplash.jpg'), filename: 'crepe_breakfast.jpg')
k.save!

l = Picture.new({title:'Sandy Feet', description:'Feels good to visit the beach again and have the sand between my toes', user_id: 3, tags: ['sand','beach','shoe','dress','feet']})
l.picture.attach(io: File.open('app/assets/images/user_uploads/nathan-dumlao-1105826-unsplash.jpg'), filename: 'beach_feet.jpg')
l.save!

m = Picture.new({title:'Summertime Romance', description:'Taken a while ago when we met for the first time by the orchard.', user_id: 3, tags: ['love','couple','smile','garden','red','sun']})
m.picture.attach(io: File.open('app/assets/images/user_uploads/s-a-r-a-h-s-h-a-r-p-1104810-unsplash.jpg'), filename: 'couple_in_orchard.jpg')
m.save!

r = Picture.new({title: 'Classy Morning Coffee', description: 'Starting the morning right with a tasteful snapshot of drip coffee', user_id: 5, tags: ['coffee','black','green','glass']})
r.picture.attach(io: File.open('app/assets/images/demo_user_uploads/ali-yahya-1386950-unsplash.jpg'), filename: 'morning_coffee.jpg')
r.save!

#demo_user_uploads

s = Picture.new({title: 'Wedding Arrangements', description: 'Assortment of colorful flowers for my cousin\'s wedding.', user_id: 2, tags: ['flower','wedding','color']})
s.picture.attach(io: File.open('app/assets/images/demo_user_uploads/annie-spratt-210740-unsplash.jpg'), filename: 'wedding_flowers.jpg')
s.save!

t = Picture.new({title: 'Golden Forest', description: 'The way the sun\'s rays shine through the forest. Absolutely stunning.', user_id: 2, tags: ['forest','gold','majestic']})
t.picture.attach(io: File.open('app/assets/images/demo_user_uploads/charl-van-rooy-672182-unsplash.jpg'), filename: 'forest.jpg')
t.save!

u = Picture.new({title: 'Photogenic Doggo', description: 'I just want pick him up and hug him forever!', user_id: 2, tags: ['dog','photogenic']})
u.picture.attach(io: File.open('app/assets/images/demo_user_uploads/chirag-dulyan-1386099-unsplash.jpg'), filename: 'dog.jpg' )
u.save!

v = Picture.new({title: 'Modern', description: 'Chic, stylish, upscale.', user_id: 2, tags: ['tan','lounge']})
v.picture.attach(io: File.open('app/assets/images/demo_user_uploads/daniil-silantev-574958-unsplash.jpg'), filename: 'swing_bed.jpg')
v.save!

w = Picture.new({title: 'Colorful Foods', description: 'So many colors in this delicious bowl.', user_id: 2, tags: ['color','food','art']})
w.picture.attach(io: File.open('app/assets/images/demo_user_uploads/edgar-castrejon-459822-unsplash.jpg'), filename: 'color_food.jpg')
w.save!

x = Picture.new({title: 'Simple Foods', description: 'I didn\'t feel like making an extravagent', user_id: 2, tags: ['yogurt','egg','breakfast']})
x.picture.attach(io: File.open('app/assets/images/demo_user_uploads/indra-sebeloue-1386674-unsplash.jpg'), filename: 'breakfast.jpg')
x.save!

y = Picture.new({title: 'Street View', description: 'A great view of the city street.', user_id: 2, tags: ['street','city']})
y.picture.attach(io: File.open('app/assets/images/demo_user_uploads/josh-connor-1386487-unsplash.jpg'), filename: 'street.jpg')
y.save!

z = Picture.new({title: 'Land and Sea', description: 'The clear divide between the sandbar and the sea.', user_id: 2, tags: ['sea','sand','divide']})
z.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sacha-styles-552126-unsplash.jpg'), filename: 'beach.jpg')
z.save!

aa = Picture.new({title: 'A la Playa', description: 'Beach dayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy :)', user_id: 2, tags: ['beach','sand']})
aa.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sergio-souza-1386788-unsplash.jpg'), filename: 'playa.jpg')
aa.save!

ab = Picture.new({title: 'Tundra', description: 'An aerial shot of the tundra as we fly over Alaska.', user_id: 2, tags: ['snow','forest','white']})
ab.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sid-verma-1387708-unsplash.jpg'), filename: 'tundra.jpg')
ab.save!

ac = Picture.new({title: 'Heart', description: 'Let\'s spread the love one heart at a time.', user_id: 2, tags: ['heart','love','sun']})
ac.picture.attach(io: File.open('app/assets/images/demo_user_uploads/tyler-nix-525389-unsplash.jpg'), filename: 'love.jpg')
ac.save!


Follow.create!({user_id: 1, follower_id: 2})
Follow.create!({user_id: 3, follower_id: 2})

Like.create!({picture_id: 1, liker_id: 1,})
Like.create!({picture_id: 2, liker_id: 1,})
Like.create!({picture_id: 4, liker_id: 1,})
Like.create!({picture_id: 5, liker_id: 1,})
Like.create!({picture_id: 7, liker_id: 1,})
Like.create!({picture_id: 8, liker_id: 1,})
Like.create!({picture_id: 9, liker_id: 1,})
Like.create!({picture_id: 10, liker_id: 1,})
Like.create!({picture_id: 10, liker_id: 3,})
Like.create!({picture_id: 13, liker_id: 2,})
Like.create!({picture_id: 13, liker_id: 3,})

Comment.create!({picture_id: 13, commenter_id: 3, body: 'What a beautiful pair! You two look so happy together.'})
Comment.create!({picture_id: 13, commenter_id: 2, body: 'May you two have even more wonderful adventures together.'})
Comment.create!({picture_id: 11, commenter_id: 3, body: 'Yummy!'})
Comment.create!({picture_id: 11, commenter_id: 4, body: 'Such a delicious looking breakfast, I wish I had something like that this morning.'})

User.maximum(:id).next