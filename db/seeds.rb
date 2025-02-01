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

#Users

a = User.create!({email: 'editor@gmail.com', password: 'editor'})
# a.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# a.profile_pic.attach(io: File.open('app/assets/images/if_users-10_984119.png'), filename: 'profile_pic.png')
a.save!

b = User.create!({email: 'demo_user@gmail.com', password: '123456'})
# b.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # b.profile_pic.attach(io: File.open('app/assets/images/user_uploads/daniel-monteiro-1105874-unsplash.jpg'), filename: 'profile_pic.jpg')
b.save!

c = User.create!({email: 'amanda_lee@gmail.com', password: '123456'})
# c.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # c.profile_pic.attach(io: File.open('app/assets/images/user_uploads/hunter-newton-1104673-unsplash.jpg'), filename: 'profile_pic.jpg')
c.save!

d = User.create!({email: 'brittany_murphy@gmail.com', password: '123456'})
# d.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # d.profile_pic.attach(io: File.open('app/assets/images/user_uploads/jeff-kepler-1106964-unsplash.jpg'), filename: 'profile_pic.jpg')
d.save!

e = User.create!({email: 'daniel_christian@gmail.com', password: '123456'})
# e.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # e.profile_pic.attach(io: File.open('app/assets/images/user_uploads/brooke-cagle-274465-unsplash.jpg'), filename: 'profile_pic.jpg')
e.save!

f = User.create!({email: 'v2osk@gmail.com', password: '123456'})
# f.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # f.profile_pic.attach(io: File.open('app/assets/images/user_uploads/brooke-cagle-274465-unsplash.jpg'), filename: 'profile_pic.jpg')
f.save!

g = User.create!({email: 'animal@gmail.com', password: '123456'})
# g.profile_cover.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'cover.jpg')
# # g.profile_pic.attach(io: File.open('app/assets/images/user_uploads/linnea-sandbakk-91258-unsplash.jpg'), filename: 'profile_pic.jpg')
g.save!

#Pictures

h = Picture.new({title:'Panda Party', description:'Who knows where the night takes you?', user_id: 1, tags: ['panda','costume','shoe','party','drinks', 'alcohol']})
h.picture.attach(io: File.open('app/assets/images/editor_uploads/erik-mclean-1105987-unsplash.jpg'), filename: 'panda_party.jpg')
h.save!

i = Picture.new({title:'Style in the City', description:'Retro is back. #daniel-monteiro #styling-in-the-city', user_id: 4, tags: ['blonde','girl','stylish','style','fancy','glasses']})
i.picture.attach(io: File.open('app/assets/images/user_uploads/daniel-monteiro-1105874-unsplash.jpg'), filename: 'styling_girl.jpg')
i.save!

j = Picture.new({title:'Shadow Realm', description:'Shadow cast by the morning sun htting gothic stained glass panel #dasha-yukhymyuk', user_id: 4, tags: ['beautiful','shadow','red','girl','woman','glass']})
j.picture.attach(io: File.open('app/assets/images/user_uploads/dasha-yukhymyuk-1104765-unsplash.jpg'), filename: 'shadow_art.jpg')
j.save!

k = Picture.new({title:'Fair-ly Beautiful', description:'My best myspace angle. #hunter-newton', user_id: 3, tags: ['fair','blonde','woman','girl','cute','merry-go-round']})
k.picture.attach(io: File.open('app/assets/images/user_uploads/hunter-newton-1104673-unsplash.jpg'), filename: 'girl_at_the_fair.jpg')
k.save!

l = Picture.new({title:'Wild and Free', description:'Just me and my board travelling along the coast.', user_id: 4, tags: ['board','girl','woman','ocean','sea','rocks']})
l.picture.attach(io: File.open('app/assets/images/user_uploads/jeff-kepler-1106964-unsplash.jpg'), filename: 'wild_girl.jpg')
l.save!

m = Picture.new({title:'I Spy a Little Green Chair', description:'Let me in, I want to sit in that chair', user_id: 3, tags: ['green','chair','girl','backpack','dress','neon']})
m.picture.attach(io: File.open('app/assets/images/user_uploads/lee-cartledge-1107548-unsplash.jpg'), filename: 'girl_and_green_chair.jpg')
m.save!

n = Picture.new({title:'Summertime Romance', description:'Taken a while ago when we met for the first time by the orchard.', user_id: 3, tags: ['love','couple','smile','garden','red','sun']})
n.picture.attach(io: File.open('app/assets/images/user_uploads/s-a-r-a-h-s-h-a-r-p-1104810-unsplash.jpg'), filename: 'couple_in_orchard.jpg')
n.save!

o = Picture.new({title:'Grass Upclose', description:'Camera focused on the grass.', user_id: 4, tags: ['grass','green']})
o.picture.attach(io: File.open('app/assets/images/user_uploads/aaron-burden-266395-unsplash.jpg'), filename: 'grass.jpg')
o.save!

p = Picture.new({title:'Red Flamingo', description:'A zoomed picture of a red flamingo. Their redness comes from the pigmented creatures from their diet', user_id: 7, tags: ['red','animal','flamingo']})
p.picture.attach(io: File.open('app/assets/images/user_uploads/alan-emery-121147-unsplash.jpg'), filename: 'flamingo.jpg')
p.save!

q = Picture.new({title:'Beautiful Scenery', description:'Simply beautiful. Took this picture on my last day in the tropics', user_id: 6, tags: ['tropic','beautiful','landscape']})
q.picture.attach(io: File.open('app/assets/images/user_uploads/amanda-phung-1281331-unsplash.jpg'), filename: 'landscape.jpg')
q.save!

r = Picture.new({title:'City Skyline', description:'Great view of the city near dusk', user_id: 6, tags: ['city', 'dusk', 'lights']})
r.picture.attach(io: File.open('app/assets/images/user_uploads/andreas-brucker-630339-unsplash.jpg'), filename: 'city_skyline.jpg')
r.save!

s = Picture.new({title:'Succulent Garden', description:'Assorted succulents arranged on a gravel cover', user_id: 5, tags: ['succulent', 'plant']})
s.picture.attach(io: File.open('app/assets/images/user_uploads/annie-spratt-42459-unsplash.jpg'), filename: 'succulent.jpg')
s.save!

t = Picture.new({title:'Golden Leaves', description:'The golden leaves of fall. I was lucky enough to find the perfect angle for this.', user_id: 5, tags: ['gold','leaves','nature']})
t.picture.attach(io: File.open('app/assets/images/user_uploads/anton-darius-thesollers-424266-unsplash.jpg'), filename: 'gold_leaves.jpg')
t.save!

u = Picture.new({title:'The City', description:'A great view of the city', user_id: 5, tags: ['city']})
u.picture.attach(io: File.open('app/assets/images/user_uploads/ben-o-bro-170472-unsplash.jpg'), filename: 'another_city.jpg')
u.save!

v = Picture.new({title:'Multinomah Falls', description:'A wonderful picture taken during my Oregon trip.', user_id: 6, tags: ['waterfall','Oregon','nature']})
v.picture.attach(io: File.open('app/assets/images/user_uploads/blake-richard-verdoorn-20063-unsplash.jpg'), filename: 'multinomah_falls.jpg')
v.save!

w = Picture.new({title:'Butterfly', description:'I think this is a monarch butterfly. Took me 20 minutes to get close enough without scaring it.', user_id: 7, tags: ['animal','butterfly','nature']})
w.picture.attach(io: File.open('app/assets/images/user_uploads/boris-smokrovic-146294-unsplash.jpg'), filename: 'butterfly.jpg')
w.save!

x = Picture.new({title:'It\'s for my account', description:'yay!', user_id: 5, tags: ['person','people']})
x.picture.attach(io: File.open('app/assets/images/user_uploads/brooke-cagle-274465-unsplash.jpg'), filename: 'a_man.jpg')
x.save!

y = Picture.new({title:'Redwoods', description:'John Muir Forest', user_id: 6, tags: ['nature']})
y.picture.attach(io: File.open('app/assets/images/user_uploads/casey-horner-487085-unsplash.jpg'), filename: 'nature_2.jpg')
y.save!

z = Picture.new({title:'Blue Bird', description:'A blue parakeet? Not sure, but it\'s cool!', user_id: 7, tags: ['bird','animal','blue']})
z.picture.attach(io: File.open('app/assets/images/user_uploads/dominik-lange-41372-unsplash.jpg'), filename: 'bird.jpg')
z.save!

aa = Picture.new({title:'Golden Sunset', description:'Sunset Beach 2019', user_id: 5, tags: ['beach','gold','sunset','nature']})
aa.picture.attach(io: File.open('app/assets/images/user_uploads/frank-mckenna-140054-unsplash.jpg'), filename: 'sunset.jpg')
aa.save!

ab = Picture.new({title:'Outlined Buildings', description:'Never seen so many buildings with lighted outlines like this.', user_id: 6, tags: ['city','building','light']})
ab.picture.attach(io: File.open('app/assets/images/user_uploads/jc-gellidon-565177-unsplash.jpg'), filename: 'building_lights.jpg')
ab.save!

ac = Picture.new({title:'Yes Sir Cheetah', description:'A cute baby cheetah doing it\'s salute.', user_id: 7, tags: ['animal','cheetah']})
ac.picture.attach(io: File.open('app/assets/images/user_uploads/jean-wimmerlin-528108-unsplash.jpg'), filename: 'cheetah.jpg')
ac.save!

ad = Picture.new({title:'Koala', description:'Koala taking an afternoon nap.', user_id: 7, tags: ['animal','koala','nap']})
ad.picture.attach(io: File.open('app/assets/images/user_uploads/jordan-whitt-78672-unsplash.jpg'), filename: 'koala.jpg')
ad.save!

ae = Picture.new({title:'Young Buck', description:'I think I startled him while he was grazing.', user_id: 7, tags: ['deer','animal']})
ae.picture.attach(io: File.open('app/assets/images/user_uploads/laura-college-190105-unsplash.jpg'), filename: 'deer.jpg')
ae.save!

af = Picture.new({title:'Adorable Fox', description:'Hi Mr. Fox. Let me just take this picture really quick and be on my way.', user_id: 7, tags: ['fox','animal']})
af.picture.attach(io: File.open('app/assets/images/user_uploads/linnea-sandbakk-91258-unsplash.jpg'), filename: 'fox.jpg')
af.save!

ag = Picture.new({title:'Foggy Hills', description:'Fog rolling over the hills', user_id: 4, tags: ['fog','nature']})
ag.picture.attach(io: File.open('app/assets/images/user_uploads/luca-zanon-26595-unsplash.jpg'), filename: 'fog_hills.jpg')
ag.save!

ah = Picture.new({title:'City Street', description:'Took this at an intersection in the city. Had to do it quick since the light was turning green.', user_id: 6, tags: ['city','street']})
ah.picture.attach(io: File.open('app/assets/images/user_uploads/max-bender-572807-unsplash.jpg'), filename: 'city_street_2.jpg')
ah.save!

ai = Picture.new({title:'NASA Aerial', description:'Top down... FROM SPACE', user_id: 2, tags: ['NASA','space','city']})
ai.picture.attach(io: File.open('app/assets/images/user_uploads/nasa-43569-unsplash.jpg'), filename: 'nasa.jpg')
ai.save!

aj = Picture.new({title:'Big Tree', description:'A very large tree.', user_id: 5, tags: ['nature','tree','big']})
aj.picture.attach(io: File.open('app/assets/images/user_uploads/niko-photos-333391-unsplash.jpg'), filename: 'tree.jpg')
aj.save!

ak = Picture.new({title:'Squirrel', description:'Fed it a snack so I can take this picture', user_id: 7, tags: ['squirrel','animal']})
ak.picture.attach(io: File.open('app/assets/images/user_uploads/radoslaw-prekurat-148700-unsplash.jpg'), filename: 'squirrel.jpg')
ak.save!

al = Picture.new({title:'Perfect Mountain Lake', description:'Crystal clear lake, beautiful trees, and high mountains. Majestic.', user_id: 6, tags: ['landscape','nature','majestic']})
al.picture.attach(io: File.open('app/assets/images/user_uploads/riccardo-chiarini-365677-unsplash.jpg'), filename: 'perfect_landscape.jpg')
al.save!

am = Picture.new({title:'Adorbs Lamb', description:'This fluffy guy walked right up to me for this.', user_id: 7, tags: ['lamb','animal']})
am.picture.attach(io: File.open('app/assets/images/user_uploads/sam-carter-191161-unsplash.jpg'), filename: 'lamb.jpg')
am.save!

an = Picture.new({title:'White Tiger', description:'Found this guy in a zoo.', user_id: 7, tags: ['tiger','animal']})
an.picture.attach(io: File.open('app/assets/images/user_uploads/smit-patel-344842-unsplash.jpg'), filename: 'tiger.jpg')
an.save!

ao = Picture.new({title:'Skyscrapers', description:'Woah, so tall', user_id: 5, tags: ['tall','city']})
ao.picture.attach(io: File.open('app/assets/images/user_uploads/tyler-nix-574395-unsplash.jpg'), filename: 'skyscraper.jpg')
ao.save!

aq = Picture.new({title:'Purple Ocean', description:'In a sea of violet.', user_id: 1, tags: ['ocean','purple', 'shore', 'rocks', 'boulder']})
aq.picture.attach(io: File.open('app/assets/images/editor_uploads/brett-ritchie-567662-unsplash.jpg'), filename: 'ocean.jpg')
aq.save!

ar = Picture.new({title:'Cabin in the Mountaintop', description:'Taken during december when the first snow fell', user_id: 1, tags: ['snow','mountain','cabin','mountaintop','majestic','beautiful']})
ar.picture.attach(io: File.open('app/assets/images/editor_uploads/guillaume-tourette-1107283-unsplash.jpg'), filename: 'snow_cabin.jpg')
ar.save!

as = Picture.new({title:'Serenity Cliff', description:'A seaside cliff with a natural arch. #gautier-salles', user_id: 4, tags: ['cliff','water','ocean','horizon','sunset']})
as.picture.attach(io: File.open('app/assets/images/user_uploads/gautier-salles-1106358-unsplash.jpg'), filename: 'cliff.jpg')
as.save!

at = Picture.new({title:'The Great Outdoors', description:'A calm lake overshadowed by a majestic mountain', user_id: 4, tags: ['majestic','lake','forest','mountain','cliff','rocks','blue','nature']})
at.picture.attach(io: File.open('app/assets/images/user_uploads/marlon-martinez-1105823-unsplash.jpg'), filename: 'mountain_and_lake.jpg')
at.save!

av = Picture.new({title:'Sandy Feet', description:'Feels good to visit the beach again and have the sand between my toes', user_id: 3, tags: ['sand','beach','shoe','dress','feet']})
av.picture.attach(io: File.open('app/assets/images/user_uploads/nathan-dumlao-1105826-unsplash.jpg'), filename: 'beach_feet.jpg')
av.save!

#demo_user_uploads

ax = Picture.new({title: 'Wedding Arrangements', description: 'Assortment of colorful flowers for my cousin\'s wedding.', user_id: 2, tags: ['flower','wedding','color']})
ax.picture.attach(io: File.open('app/assets/images/demo_user_uploads/annie-spratt-210740-unsplash.jpg'), filename: 'wedding_flowers.jpg')
ax.save!

ay = Picture.new({title: 'Golden Forest', description: 'The way the sun\'s rays shine through the forest. Absolutely stunning.', user_id: 2, tags: ['forest','gold','majestic']})
ay.picture.attach(io: File.open('app/assets/images/demo_user_uploads/charl-van-rooy-672182-unsplash.jpg'), filename: 'forest.jpg')
ay.save!

aaa = Picture.new({title: 'Modern', description: 'Chic, stylish, upscale.', user_id: 2, tags: ['tan','lounge']})
aaa.picture.attach(io: File.open('app/assets/images/demo_user_uploads/daniil-silantev-574958-unsplash.jpg'), filename: 'swing_bed.jpg')
aaa.save!

aab = Picture.new({title: 'Colorful Foods', description: 'So many colors in this delicious bowl.', user_id: 2, tags: ['color','food','art']})
aab.picture.attach(io: File.open('app/assets/images/demo_user_uploads/edgar-castrejon-459822-unsplash.jpg'), filename: 'color_food.jpg')
aab.save!

aac = Picture.new({title: 'Simple Foods', description: 'I didn\'t feel like making an extravagent', user_id: 2, tags: ['yogurt','egg','breakfast']})
aac.picture.attach(io: File.open('app/assets/images/demo_user_uploads/indra-sebeloue-1386674-unsplash.jpg'), filename: 'breakfast.jpg')
aac.save!

aad = Picture.new({title: 'Street View', description: 'A great view of the city street.', user_id: 2, tags: ['street','city']})
aad.picture.attach(io: File.open('app/assets/images/demo_user_uploads/josh-connor-1386487-unsplash.jpg'), filename: 'street.jpg')
aad.save!

aae = Picture.new({title: 'Land and Sea', description: 'The clear divide between the sandbar and the sea.', user_id: 2, tags: ['sea','sand','divide']})
aae.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sacha-styles-552126-unsplash.jpg'), filename: 'beach.jpg')
aae.save!

aaf = Picture.new({title: 'A la Playa', description: 'Beach dayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy :)', user_id: 2, tags: ['beach','sand']})
aaf.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sergio-souza-1386788-unsplash.jpg'), filename: 'playa.jpg')
aaf.save!

aag = Picture.new({title: 'Tundra', description: 'An aerial shot of the tundra as we fly over Alaska.', user_id: 2, tags: ['snow','forest','white']})
aag.picture.attach(io: File.open('app/assets/images/demo_user_uploads/sid-verma-1387708-unsplash.jpg'), filename: 'tundra.jpg')
aag.save!

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