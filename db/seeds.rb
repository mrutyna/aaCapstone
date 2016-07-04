# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: "demo", password: "asdfasdf"})
Photo.create({title:"Motivation Penguin", description:"You can do it!!!", user_id: 1, photo_url:"http://i.imgur.com/G7UWo.gif"})
Photo.create({title:"DaBest", description:"IronMan", user_id: 1, photo_url:"http://gifsec.com/wp-content/uploads/GIF/2014/03/Damn-im-good-gif.gif?gs=a"})
Photo.create({title:"Shaq And Dat Puzi", description:"noice", user_id: 1, photo_url:"https://cdn2.vox-cdn.com/thumbor/XjfWvizyYYXbALK9tTW8mzLJMMs=/1x0:369x207/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/32606283/q3e87zR.0.gif"})
