# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(username: 'Justin Lendle', email: 'justin@gmail.com', password: 'password123')

post1 = Post.create!(title: 'Eggs', ingredients: 'eggs', instructions: 'fry in pan', user: user1)