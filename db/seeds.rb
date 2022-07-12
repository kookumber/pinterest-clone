# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pin.destroy_all

demo_user1 = User.create!(
    username: 'demo-user1',
    email: 'demo@user1.com',
    password: 'demo-user1'
)

demo_user2 = User.create!(
    username: 'demo-user2',
    email: 'demo@user2.com',
    password: 'demo-user2'
)

pin1 = Pin.create!(user_id: demo_user1.id, title: 'Surf Crazy', description: 'State of love for waves')
pin2 = Pin.create!(user_id: demo_user1.id, title: 'Fun Waves', description: 'Clean, open face, so shreddable for the common kook')
pin3 = Pin.create!(user_id: demo_user2.id, title: 'Grass Turf, Favorite Court', description: 'Lusher, greener, faster than Wimbledon')
pin4 = Pin.create!(user_id: demo_user2.id, title: 'Rocky Holds', description: 'Pleasant climbing destination')
