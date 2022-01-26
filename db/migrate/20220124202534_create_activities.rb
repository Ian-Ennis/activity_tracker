class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.references :yoga
      t.references :meditation
      t.references :cardio
      t.timestamps
    end
  end
end
