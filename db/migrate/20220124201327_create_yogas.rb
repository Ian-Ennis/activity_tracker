class CreateYogas < ActiveRecord::Migration[6.1]
  def change
    create_table :yogas do |t|
      t.string :name
      t.string :type
      t.float :time

      t.timestamps
    end
  end
end
