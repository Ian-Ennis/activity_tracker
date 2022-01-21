puts "Deleting..."

User.destroy_all

puts "Done"


puts "Creating users"
User.create(name: "Billy Jean", password: "W@sNotmyM0ther$")
User.create(name: "Buffy Summers", password: "D@wntheKey!")
User.create(name: "Boo Radley", password: "M0ck1ngB1rd")
User.create(name: "Britney Spears", password: "HitMeB@by1M0reT1me!")
puts "Created users"

# Meditation data

# Cardio data

# Yoga data

# Activities data