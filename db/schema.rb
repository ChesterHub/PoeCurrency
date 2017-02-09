# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170208065532) do

  create_table "blessed_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_blessed_orbs_on_league_id", using: :btree
  end

  create_table "cartographer_chisels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",      precision: 32, scale: 8
    t.decimal  "chaos_orb",        precision: 32, scale: 8
    t.decimal  "chromatic_orb",    precision: 32, scale: 8
    t.decimal  "divine_orb",       precision: 32, scale: 8
    t.decimal  "eternal_orb",      precision: 32, scale: 8
    t.decimal  "exalted_orb",      precision: 32, scale: 8
    t.decimal  "gemcutter_prism",  precision: 32, scale: 8
    t.decimal  "jeweller_orb",     precision: 32, scale: 8
    t.decimal  "orbof_alchemy",    precision: 32, scale: 8
    t.decimal  "orbof_alteration", precision: 32, scale: 8
    t.decimal  "orbof_chance",     precision: 32, scale: 8
    t.decimal  "orbof_fusing",     precision: 32, scale: 8
    t.decimal  "orbof_regret",     precision: 32, scale: 8
    t.decimal  "orbof_scouring",   precision: 32, scale: 8
    t.decimal  "regal_orb",        precision: 32, scale: 8
    t.decimal  "vaal_orb",         precision: 32, scale: 8
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.index ["league_id"], name: "index_cartographer_chisels_on_league_id", using: :btree
  end

  create_table "chaos_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_chaos_orbs_on_league_id", using: :btree
  end

  create_table "chromatic_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_chromatic_orbs_on_league_id", using: :btree
  end

  create_table "divine_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_divine_orbs_on_league_id", using: :btree
  end

  create_table "eternal_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_eternal_orbs_on_league_id", using: :btree
  end

  create_table "exalted_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_exalted_orbs_on_league_id", using: :btree
  end

  create_table "gemcutter_prisms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_gemcutter_prisms_on_league_id", using: :btree
  end

  create_table "jeweller_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_jeweller_orbs_on_league_id", using: :btree
  end

  create_table "leagues", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "league_type"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "orbof_alchemies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_alchemies_on_league_id", using: :btree
  end

  create_table "orbof_alterations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_alterations_on_league_id", using: :btree
  end

  create_table "orbof_chances", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_chances_on_league_id", using: :btree
  end

  create_table "orbof_fusings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_fusings_on_league_id", using: :btree
  end

  create_table "orbof_regrets", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_regrets_on_league_id", using: :btree
  end

  create_table "orbof_scourings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_orbof_scourings_on_league_id", using: :btree
  end

  create_table "regal_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "vaal_orb",            precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_regal_orbs_on_league_id", using: :btree
  end

  create_table "vaal_orbs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "league_id"
    t.decimal  "blessed_orb",         precision: 32, scale: 8
    t.decimal  "cartographer_chisel", precision: 32, scale: 8
    t.decimal  "chaos_orb",           precision: 32, scale: 8
    t.decimal  "chromatic_orb",       precision: 32, scale: 8
    t.decimal  "divine_orb",          precision: 32, scale: 8
    t.decimal  "eternal_orb",         precision: 32, scale: 8
    t.decimal  "exalted_orb",         precision: 32, scale: 8
    t.decimal  "gemcutter_prism",     precision: 32, scale: 8
    t.decimal  "jeweller_orb",        precision: 32, scale: 8
    t.decimal  "orbof_alchemy",       precision: 32, scale: 8
    t.decimal  "orbof_alteration",    precision: 32, scale: 8
    t.decimal  "orbof_chance",        precision: 32, scale: 8
    t.decimal  "orbof_fusing",        precision: 32, scale: 8
    t.decimal  "orbof_regret",        precision: 32, scale: 8
    t.decimal  "orbof_scouring",      precision: 32, scale: 8
    t.decimal  "regal_orb",           precision: 32, scale: 8
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["league_id"], name: "index_vaal_orbs_on_league_id", using: :btree
  end

end
