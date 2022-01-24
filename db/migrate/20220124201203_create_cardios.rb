class CreateCardios < ActiveRecord::Migration[6.1]
  def change
    create_table :cardios do |t|
      t.string :name
      t.float :distance

      t.timestamps
    end
  end
end
