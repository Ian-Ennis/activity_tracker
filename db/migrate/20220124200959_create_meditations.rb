class CreateMeditations < ActiveRecord::Migration[6.1]
  def change
    create_table :meditations do |t|
      t.string :name
      t.float :time

      t.timestamps
    end
  end
end
