# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: "demo", password: "asdfasdf"})
Photo.create({title:"Motivation Penguin", description:"You can do it!!!", user_id: 1, photo_url:"http://i.imgur.com/G7UWo.gif"})
