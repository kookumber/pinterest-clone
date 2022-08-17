# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Pin.destroy_all
Board.destroy_all
SavedPin.destroy_all

user1 = User.create!(
    username: 'demo-user1',
    email: 'demo@user1.com',
    password: 'demo-user1'
)

user2 = User.create!(
    username: 'demo-user2',
    email: 'demo@user2.com',
    password: 'demo-user2'
)

user3 = User.create!(email: 'johnny@gmail.com', username: 'johnny', age: 30, password: 'password' )
user4 = User.create!(email: 'wolfram@gmail.com', username: 'wolfram', age: 22, password: 'password' )
user5 = User.create!(email: 'alpha@gmail.com', username: 'alpha', age: 18, password: 'password' )
user6 = User.create!(email: 'friedman@gmail.com', username: 'friedman', age: 34, password: 'password' )
user7 = User.create!(email: 'rogan@gmail.com', username: 'rogan', age: 34, password: 'password' )
user8 = User.create!(email: 'monkey@gmail.com', username: 'monkey', age: 25, password: 'password' )
user9 = User.create!(email: 'andreini@gmail.com', username: 'andreini', age: 41, password: 'password' )
user10 = User.create!(email: 'oliver@gmail.com', username: 'oliver', age: 28, password: 'password' )


# pin1 = Pin.create!(user_id: user1.id, title: 'Surf Crazy', description: 'State of love for waves')
# pin1.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/jwwnn2ZNnyiw2Hdn5gB9jc6C'), filename:'surf-crazy.jpg')

pin1 = Pin.create!(title: 'Title 1 - For Blue Waves', description: 'Description 1 - A few words to say surfing is great with clean waves', user_id: user1.id)
pin2 = Pin.create!(title: 'Title 2 - For Blue Waves', description: 'Description 2 - A few words to say surfing is great with clean waves', user_id: user4.id)
pin3 = Pin.create!(title: 'Title 3 - For Blue Waves', description: 'Description 3 - A few words to say surfing is great with clean waves', user_id: user8.id)
pin4 = Pin.create!(title: 'Title 4 - For Blue Waves', description: 'Description 4 - A few words to say surfing is great with clean waves', user_id: user2.id)
pin5 = Pin.create!(title: 'Title 5 - For Blue Waves', description: 'Description 5 - A few words to say surfing is great with clean waves', user_id: user2.id)
pin6 = Pin.create!(title: 'Title 6 - For Blue Waves', description: 'Description 6 - A few words to say surfing is great with clean waves', user_id: user9.id)
pin7 = Pin.create!(title: 'Title 7 - For Blue Waves', description: 'Description 7 - A few words to say surfing is great with clean waves', user_id: user9.id)
pin8 = Pin.create!(title: 'Title 8 - For Blue Waves', description: 'Description 8 - A few words to say surfing is great with clean waves', user_id: user2.id)
pin9 = Pin.create!(title: 'Title 9 - For Blue Waves', description: 'Description 9 - A few words to say surfing is great with clean waves', user_id: user4.id)
pin10 = Pin.create!(title: 'Title 10 - For Blue Waves', description: 'Description 10 - A few words to say surfing is great with clean waves', user_id: user7.id)
pin11 = Pin.create!(title: 'Title 11 - For Blue Waves', description: 'Description 11 - A few words to say surfing is great with clean waves', user_id: user6.id)
pin12 = Pin.create!(title: 'Title 12 - For Blue Waves', description: 'Description 12 - A few words to say surfing is great with clean waves', user_id: user9.id)
pin13 = Pin.create!(title: 'Title 13 - For Blue Waves', description: 'Description 13 - A few words to say surfing is great with clean waves', user_id: user4.id)
pin14 = Pin.create!(title: 'Title 14 - For Blue Waves', description: 'Description 14 - A few words to say surfing is great with clean waves', user_id: user7.id)
pin15 = Pin.create!(title: 'Title 15 - For Blue Waves', description: 'Description 15 - A few words to say surfing is great with clean waves', user_id: user1.id)
pin16 = Pin.create!(title: 'Title 16 - For Blue Waves', description: 'Description 16 - A few words to say surfing is great with clean waves', user_id: user2.id)
pin17 = Pin.create!(title: 'Title 17 - For Blue Waves', description: 'Description 17 - A few words to say surfing is great with clean waves', user_id: user7.id)
pin18 = Pin.create!(title: 'Title 18 - For Blue Waves', description: 'Description 18 - A few words to say surfing is great with clean waves', user_id: user4.id)
pin19 = Pin.create!(title: 'Title 19 - For Blue Waves', description: 'Description 19 - A few words to say surfing is great with clean waves', user_id: user10.id)
pin20 = Pin.create!(title: 'Title 20 - For Blue Waves', description: 'Description 20 - A few words to say surfing is great with clean waves', user_id: user6.id)
pin21 = Pin.create!(title: 'Title 21 - For Blue Waves', description: 'Description 21 - A few words to say surfing is great with clean waves', user_id: user2.id)
pin22 = Pin.create!(title: 'Title 22 - For Blue Waves', description: 'Description 22 - A few words to say surfing is great with clean waves', user_id: user4.id)
pin23 = Pin.create!(title: 'Title 23 - For Blue Waves', description: 'Description 23 - A few words to say surfing is great with clean waves', user_id: user8.id)
pin24 = Pin.create!(title: 'Title 24 - For Fin Like Things', description: 'Description 1 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user7.id)
pin25 = Pin.create!(title: 'Title 25 - For Fin Like Things', description: 'Description 2 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user10.id)
pin26 = Pin.create!(title: 'Title 26 - For Fin Like Things', description: 'Description 3 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user1.id)
pin27 = Pin.create!(title: 'Title 27 - For Fin Like Things', description: 'Description 4 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user5.id)
pin28 = Pin.create!(title: 'Title 28 - For Fin Like Things', description: 'Description 5 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user9.id)
pin29 = Pin.create!(title: 'Title 29 - For Fin Like Things', description: 'Description 6 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user6.id)
pin30 = Pin.create!(title: 'Title 30 - For Fin Like Things', description: 'Description 7 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user3.id)
pin31 = Pin.create!(title: 'Title 31 - For Fin Like Things', description: 'Description 8 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user7.id)
pin32 = Pin.create!(title: 'Title 32 - For Fin Like Things', description: 'Description 9 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user8.id)
pin33 = Pin.create!(title: 'Title 33 - For Fin Like Things', description: 'Description 10 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user10.id)
pin34 = Pin.create!(title: 'Title 34 - For Fin Like Things', description: 'Description 11 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user2.id)
pin35 = Pin.create!(title: 'Title 35 - For Fin Like Things', description: 'Description 12 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user1.id)
pin36 = Pin.create!(title: 'Title 36 - For Fin Like Things', description: 'Description 13 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user3.id)
pin37 = Pin.create!(title: 'Title 37 - For Fin Like Things', description: 'Description 14 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user5.id)
pin38 = Pin.create!(title: 'Title 38 - For Fin Like Things', description: 'Description 15 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user5.id)
pin39 = Pin.create!(title: 'Title 39 - For Fin Like Things', description: 'Description 16 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user7.id)
pin40 = Pin.create!(title: 'Title 40 - For Fin Like Things', description: 'Description 17 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user3.id)
pin41 = Pin.create!(title: 'Title 41 - For Fin Like Things', description: 'Description 18 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user4.id)
pin42 = Pin.create!(title: 'Title 42 - For Fin Like Things', description: 'Description 19 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user7.id)
pin43 = Pin.create!(title: 'Title 43 - For Fin Like Things', description: 'Description 20 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user6.id)
pin44 = Pin.create!(title: 'Title 44 - For Fin Like Things', description: 'Description 21 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user5.id)
pin45 = Pin.create!(title: 'Title 45 - For Fin Like Things', description: 'Description 22 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user8.id)
pin46 = Pin.create!(title: 'Title 46 - For Fin Like Things', description: 'Description 23 - Riding waves with a board with the right fin(s) makes all the difference', user_id: user7.id)
pin84 = Pin.create!(title: 'Title 84 - I have got a Green Thumb Maybe', description: 'Plant Description 1 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin85 = Pin.create!(title: 'Title 85 - I have got a Green Thumb Maybe', description: 'Plant Description 2 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user5.id)
pin86 = Pin.create!(title: 'Title 86 - I have got a Green Thumb Maybe', description: 'Plant Description 3 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user8.id)
pin87 = Pin.create!(title: 'Title 87 - I have got a Green Thumb Maybe', description: 'Plant Description 4 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin88 = Pin.create!(title: 'Title 88 - I have got a Green Thumb Maybe', description: 'Plant Description 5 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user2.id)
pin89 = Pin.create!(title: 'Title 89 - I have got a Green Thumb Maybe', description: 'Plant Description 6 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin90 = Pin.create!(title: 'Title 90 - I have got a Green Thumb Maybe', description: 'Plant Description 7 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user4.id)
pin91 = Pin.create!(title: 'Title 91 - I have got a Green Thumb Maybe', description: 'Plant Description 8 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user2.id)
pin92 = Pin.create!(title: 'Title 92 - I have got a Green Thumb Maybe', description: 'Plant Description 9 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user3.id)
pin93 = Pin.create!(title: 'Title 93 - I have got a Green Thumb Maybe', description: 'Plant Description 10 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user7.id)
pin94 = Pin.create!(title: 'Title 94 - I have got a Green Thumb Maybe', description: 'Plant Description 11 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin95 = Pin.create!(title: 'Title 95 - I have got a Green Thumb Maybe', description: 'Plant Description 12 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user4.id)
pin96 = Pin.create!(title: 'Title 96 - I have got a Green Thumb Maybe', description: 'Plant Description 13 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user5.id)
pin97 = Pin.create!(title: 'Title 97 - I have got a Green Thumb Maybe', description: 'Plant Description 14 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin98 = Pin.create!(title: 'Title 98 - I have got a Green Thumb Maybe', description: 'Plant Description 15 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user1.id)
pin99 = Pin.create!(title: 'Title 99 - I have got a Green Thumb Maybe', description: 'Plant Description 16 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user7.id)
pin100 = Pin.create!(title: 'Title 100 - I have got a Green Thumb Maybe', description: 'Plant Description 17 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user3.id)
pin101 = Pin.create!(title: 'Title 101 - I have got a Green Thumb Maybe', description: 'Plant Description 18 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user9.id)
pin102 = Pin.create!(title: 'Title 102 - I have got a Green Thumb Maybe', description: 'Plant Description 19 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user2.id)
pin103 = Pin.create!(title: 'Title 103 - I have got a Green Thumb Maybe', description: 'Plant Description 20 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user5.id)
pin104 = Pin.create!(title: 'Title 104 - I have got a Green Thumb Maybe', description: 'Plant Description 21 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user3.id)
pin105 = Pin.create!(title: 'Title 105 - I have got a Green Thumb Maybe', description: 'Plant Description 22 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user7.id)
pin106 = Pin.create!(title: 'Title 106 - I have got a Green Thumb Maybe', description: 'Plant Description 23 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin107 = Pin.create!(title: 'Title 107 - I have got a Green Thumb Maybe', description: 'Plant Description 24 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user7.id)
pin108 = Pin.create!(title: 'Title 108 - I have got a Green Thumb Maybe', description: 'Plant Description 25 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user8.id)
pin109 = Pin.create!(title: 'Title 109 - I have got a Green Thumb Maybe', description: 'Plant Description 26 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user9.id)
pin110 = Pin.create!(title: 'Title 110 - I have got a Green Thumb Maybe', description: 'Plant Description 27 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user6.id)
pin111 = Pin.create!(title: 'Title 111 - I have got a Green Thumb Maybe', description: 'Plant Description 28 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user9.id)
pin112 = Pin.create!(title: 'Title 112 - I have got a Green Thumb Maybe', description: 'Plant Description 29 - Hopefully the plants inspire gardening or re-decoration of your space to make it green', user_id: user10.id)


pin1.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-1.jpg'), filename: 'blue-surf-1.jpg')
pin2.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-2.jpg'), filename: 'blue-surf-2.jpg')
pin3.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-3.jpg'), filename: 'blue-surf-3.jpg')
pin4.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-4.jpg'), filename: 'blue-surf-4.jpg')
pin5.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-5.jpg'), filename: 'blue-surf-5.jpg')
pin6.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-6.jpg'), filename: 'blue-surf-6.jpg')
pin7.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-7.jpg'), filename: 'blue-surf-7.jpg')
pin8.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-8.jpg'), filename: 'blue-surf-8.jpg')
pin9.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-9.jpg'), filename: 'blue-surf-9.jpg')
pin10.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-10.jpg'), filename: 'blue-surf-10.jpg')
pin11.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-11.jpg'), filename: 'blue-surf-11.jpg')
pin12.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-12.jpg'), filename: 'blue-surf-12.jpg')
pin13.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-13.jpg'), filename: 'blue-surf-13.jpg')
pin14.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-14.jpg'), filename: 'blue-surf-14.jpg')
pin15.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-15.jpg'), filename: 'blue-surf-15.jpg')
pin16.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-16.jpg'), filename: 'blue-surf-16.jpg')
pin17.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-17.jpg'), filename: 'blue-surf-17.jpg')
pin18.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-18.jpg'), filename: 'blue-surf-18.jpg')
pin19.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-19.jpg'), filename: 'blue-surf-19.jpg')
pin20.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-20.jpg'), filename: 'blue-surf-20.jpg')
pin21.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-21.jpg'), filename: 'blue-surf-21.jpg')
pin22.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-22.jpg'), filename: 'blue-surf-22.jpg')
pin23.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-23.jpg'), filename: 'blue-surf-23.jpg')
pin24.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-1.jpeg'), filename: 'fin-1.jpg')
pin25.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-2.jpeg'), filename: 'fin-2.jpg')
pin26.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-3.jpeg'), filename: 'fin-3.jpg')
pin27.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-4.png'), filename: 'fin-4.jpg')
pin28.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-5.jpeg'), filename: 'fin-5.jpg')
pin29.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-6.jpeg'), filename: 'fin-6.jpg')
pin30.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-7.jpg'), filename: 'fin-7.jpg')
pin31.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-8.jpg'), filename: 'fin-8.jpg')
pin32.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-9.jpg'), filename: 'fin-9.jpg')
pin33.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-10.jpg'), filename: 'fin-10.jpg')
pin34.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-11.jpg'), filename: 'fin-11.jpg')
pin35.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-12.jpeg'), filename: 'fin-12.jpg')
pin36.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-13.jpg'), filename: 'fin-13.jpg')
pin37.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-14.jpeg'), filename: 'fin-14.jpg')
pin38.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-15.jpg'), filename: 'fin-15.jpg')
pin39.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-16.jpg'), filename: 'fin-16.jpg')
pin40.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-17.jpg'), filename: 'fin-17.jpg')
pin41.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-18.jpg'), filename: 'fin-18.jpg')
pin42.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-19.jpg'), filename: 'fin-19.jpg')
pin43.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-20.jpeg'), filename: 'fin-20.jpg')
pin44.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-21.jpeg'), filename: 'fin-21.jpg')
pin45.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-22.jpeg'), filename: 'fin-22.jpg')
pin46.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-23.jpg'), filename: 'fin-23.jpg')
pin84.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-1.jpg'), filename: 'green-plant-1.jpg')
pin85.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-2.jpg'), filename: 'green-plant-2.jpg')
pin86.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-3.jpg'), filename: 'green-plant-3.jpg')
pin87.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-4.jpg'), filename: 'green-plant-4.jpg')
pin88.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-5.jpg'), filename: 'green-plant-5.jpg')
pin89.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-6.jpg'), filename: 'green-plant-6.jpg')
pin90.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-7.jpg'), filename: 'green-plant-7.jpg')
pin91.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-8.jpg'), filename: 'green-plant-8.jpg')
pin92.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-9.jpg'), filename: 'green-plant-9.jpg')
pin93.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-10.jpg'), filename: 'green-plant-10.jpg')
pin94.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-11.jpg'), filename: 'green-plant-11.jpg')
pin95.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-12.jpg'), filename: 'green-plant-12.jpg')
pin96.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-13.jpg'), filename: 'green-plant-13.jpg')
pin97.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-14.jpg'), filename: 'green-plant-14.jpg')
pin98.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-15.jpg'), filename: 'green-plant-15.jpg')
pin99.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-16.jpg'), filename: 'green-plant-16.jpg')
pin100.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-17.jpg'), filename: 'green-plant-17.jpg')
pin101.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-18.jpg'), filename: 'green-plant-18.jpg')
pin102.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-19.jpg'), filename: 'green-plant-19.jpg')
pin103.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-20.jpg'), filename: 'green-plant-20.jpg')
pin104.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-21.jpg'), filename: 'green-plant-21.jpg')
pin105.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-22.jpg'), filename: 'green-plant-22.jpg')
pin106.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-23.jpg'), filename: 'green-plant-23.jpg')
pin107.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-24.jpg'), filename: 'green-plant-24.jpg')
pin108.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-25.jpg'), filename: 'green-plant-25.jpg')
pin109.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-26.jpg'), filename: 'green-plant-26.jpg')
pin110.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-27.jpg'), filename: 'green-plant-27.jpg')
pin111.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-28.jpg'), filename: 'green-plant-28.jpg')
pin112.image.attach(io: open('https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-29.jpg'), filename: 'green-plant-29.jpg')

board1 = Board.create!(name: 'The Good Waves', user_id: user1.id, details: 'Board for blue water shots')
board2 = Board.create!(name: 'The Blue Surf', user_id: user1.id, details: 'This board is for good waves only!')
board3 = Board.create!(name: 'Serene Water', user_id: user2.id, details: 'Ultimate blue calm board')
board4 = Board.create!(name: 'Plant Fun', user_id: user3.id, details: 'Green things are cool so put them in this board')
board5 = Board.create!(name: 'Greenest Board', user_id: user2.id, details: 'Board for lush green things')
board6 = Board.create!(name: 'Green Oxygen', user_id: user1.id, details: 'Plant is life. Board with plants are life')
board7 = Board.create!(name: 'Love Plants', user_id: user2.id, details: 'More plant boards?')
board8 = Board.create!(name: 'Surf Fins', user_id: user3.id, details: 'Oh yeah. Surf fins are just as important as the board.')
board9 = Board.create!(name: 'The Things that Made Finterest', user_id: user2.id, details: 'Put the fin in Finterest')

saved_pin1 = SavedPin.create!(pin_id: pin1.id, board_id: board1.id)
saved_pin2 = SavedPin.create!(pin_id: pin2.id, board_id: board1.id)
saved_pin3 = SavedPin.create!(pin_id: pin3.id, board_id: board1.id)
saved_pin4 = SavedPin.create!(pin_id: pin4.id, board_id: board1.id)
saved_pin5 = SavedPin.create!(pin_id: pin5.id, board_id: board1.id)
saved_pin6 = SavedPin.create!(pin_id: pin6.id, board_id: board1.id)
saved_pin7 = SavedPin.create!(pin_id: pin7.id, board_id: board2.id)
saved_pin8 = SavedPin.create!(pin_id: pin8.id, board_id: board2.id)
saved_pin9 = SavedPin.create!(pin_id: pin9.id, board_id: board2.id)
saved_pin10 = SavedPin.create!(pin_id: pin10.id, board_id: board2.id)
saved_pin11 = SavedPin.create!(pin_id: pin11.id, board_id: board2.id)
saved_pin12 = SavedPin.create!(pin_id: pin12.id, board_id: board2.id)
saved_pin13 = SavedPin.create!(pin_id: pin13.id, board_id: board2.id)
saved_pin14 = SavedPin.create!(pin_id: pin14.id, board_id: board2.id)
saved_pin15 = SavedPin.create!(pin_id: pin15.id, board_id: board2.id)
saved_pin16 = SavedPin.create!(pin_id: pin16.id, board_id: board2.id)
saved_pin17 = SavedPin.create!(pin_id: pin17.id, board_id: board2.id)
saved_pin18 = SavedPin.create!(pin_id: pin18.id, board_id: board2.id)
saved_pin19 = SavedPin.create!(pin_id: pin19.id, board_id: board3.id)
saved_pin20 = SavedPin.create!(pin_id: pin20.id, board_id: board3.id)
saved_pin21 = SavedPin.create!(pin_id: pin21.id, board_id: board3.id)
saved_pin22 = SavedPin.create!(pin_id: pin22.id, board_id: board3.id)
saved_pin23 = SavedPin.create!(pin_id: pin23.id, board_id: board3.id)
saved_pin24 = SavedPin.create!(pin_id: pin24.id, board_id: board8.id)
saved_pin25 = SavedPin.create!(pin_id: pin25.id, board_id: board8.id)
saved_pin26 = SavedPin.create!(pin_id: pin26.id, board_id: board8.id)
saved_pin27 = SavedPin.create!(pin_id: pin27.id, board_id: board8.id)
saved_pin28 = SavedPin.create!(pin_id: pin28.id, board_id: board8.id)
saved_pin29 = SavedPin.create!(pin_id: pin29.id, board_id: board8.id)
saved_pin30 = SavedPin.create!(pin_id: pin30.id, board_id: board8.id)
saved_pin31 = SavedPin.create!(pin_id: pin31.id, board_id: board8.id)
saved_pin32 = SavedPin.create!(pin_id: pin32.id, board_id: board8.id)
saved_pin33 = SavedPin.create!(pin_id: pin33.id, board_id: board8.id)
saved_pin34 = SavedPin.create!(pin_id: pin34.id, board_id: board9.id)
saved_pin35 = SavedPin.create!(pin_id: pin35.id, board_id: board9.id)
saved_pin36 = SavedPin.create!(pin_id: pin36.id, board_id: board9.id)
saved_pin37 = SavedPin.create!(pin_id: pin37.id, board_id: board9.id)
saved_pin38 = SavedPin.create!(pin_id: pin38.id, board_id: board9.id)
saved_pin39 = SavedPin.create!(pin_id: pin39.id, board_id: board9.id)
saved_pin40 = SavedPin.create!(pin_id: pin40.id, board_id: board9.id)
saved_pin41 = SavedPin.create!(pin_id: pin41.id, board_id: board9.id)
saved_pin42 = SavedPin.create!(pin_id: pin42.id, board_id: board9.id)
saved_pin43 = SavedPin.create!(pin_id: pin43.id, board_id: board9.id)
saved_pin44 = SavedPin.create!(pin_id: pin44.id, board_id: board9.id)
saved_pin45 = SavedPin.create!(pin_id: pin45.id, board_id: board9.id)
saved_pin46 = SavedPin.create!(pin_id: pin46.id, board_id: board9.id)
saved_pin84 = SavedPin.create!(pin_id: pin84.id, board_id: board4.id)
saved_pin85 = SavedPin.create!(pin_id: pin85.id, board_id: board4.id)
saved_pin86 = SavedPin.create!(pin_id: pin86.id, board_id: board4.id)
saved_pin87 = SavedPin.create!(pin_id: pin87.id, board_id: board4.id)
saved_pin88 = SavedPin.create!(pin_id: pin88.id, board_id: board4.id)
saved_pin89 = SavedPin.create!(pin_id: pin89.id, board_id: board4.id)
saved_pin90 = SavedPin.create!(pin_id: pin90.id, board_id: board4.id)
saved_pin91 = SavedPin.create!(pin_id: pin91.id, board_id: board4.id)
saved_pin92 = SavedPin.create!(pin_id: pin92.id, board_id: board4.id)
saved_pin93 = SavedPin.create!(pin_id: pin93.id, board_id: board4.id)
saved_pin94 = SavedPin.create!(pin_id: pin94.id, board_id: board5.id)
saved_pin95 = SavedPin.create!(pin_id: pin95.id, board_id: board5.id)
saved_pin96 = SavedPin.create!(pin_id: pin96.id, board_id: board5.id)
saved_pin97 = SavedPin.create!(pin_id: pin97.id, board_id: board5.id)
saved_pin98 = SavedPin.create!(pin_id: pin98.id, board_id: board5.id)
saved_pin99 = SavedPin.create!(pin_id: pin99.id, board_id: board5.id)
saved_pin100 = SavedPin.create!(pin_id: pin100.id, board_id: board5.id)
saved_pin101 = SavedPin.create!(pin_id: pin101.id, board_id: board5.id)
saved_pin102 = SavedPin.create!(pin_id: pin102.id, board_id: board5.id)
saved_pin103 = SavedPin.create!(pin_id: pin103.id, board_id: board5.id)
saved_pin104 = SavedPin.create!(pin_id: pin104.id, board_id: board5.id)
saved_pin105 = SavedPin.create!(pin_id: pin105.id, board_id: board5.id)
saved_pin106 = SavedPin.create!(pin_id: pin106.id, board_id: board5.id)
saved_pin107 = SavedPin.create!(pin_id: pin107.id, board_id: board5.id)
saved_pin108 = SavedPin.create!(pin_id: pin108.id, board_id: board6.id)
saved_pin109 = SavedPin.create!(pin_id: pin109.id, board_id: board6.id)
saved_pin110 = SavedPin.create!(pin_id: pin110.id, board_id: board6.id)
saved_pin111 = SavedPin.create!(pin_id: pin111.id, board_id: board6.id)
saved_pin112 = SavedPin.create!(pin_id: pin112.id, board_id: board6.id)