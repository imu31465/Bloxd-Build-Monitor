export const id = 44;
export const ids = [44];
export const modules = {
  54328: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      particleItemSprite: () => Je,
      particleItemUrl: () => oe
    });
    const ye = ["67", "67_projectile_base", "67_projectile_boosted", "AK-47", "AWP", "Block-19", "DMR", "Deagle", "Double-barreled", "FMR", "GPMG", "M16", "M1911", "MP40", "Mini Izu", "Minigun", "SKAR", "Striker-12", "TAR-21", "VSR", "abyss_carp", "acorn", "acorn_jelly", "active_radar", "advanced_coupler", "aether_minnow", "allium", "alpha_moon_strongfish", "amethite", "amethite_axe", "amethite_boomerang", "amethite_boots", "amethite_bow", "amethite_bow_charging_2", "amethite_bow_charging_3", "amethite_bow_charging_4", "amethite_chestplate", "amethite_club", "amethite_crossbow", "amethite_crossbow_charged", "amethite_crossbow_charging_2", "amethite_crossbow_charging_3", "amethite_crossbow_charging_4", "amethite_dagger", "amethite_fragment", "amethite_gauntlets", "amethite_helmet", "amethite_hoe", "amethite_leggings", "amethite_mace", "amethite_pickaxe", "amethite_shovel", "amethite_spear", "amethite_sword", "amethite_whip", "ammo", "apple", "arc_caster", "armored_car", "armoured_searobin", "arrow", "artisan_axe", "artisan_bench", "artisan_shears", "ash_lionfish", "aspen_door", "aspen_fence", "aspen_fence_gate", "aspen_item_pedestal", "aspen_sapling", "aspen_trapdoor", "astral_blade", "astral_boots", "astral_bow", "astral_bow_charging_2", "astral_bow_charging_3", "astral_bow_charging_4", "astral_chestplate", "astral_club", "astral_crossbow", "astral_crossbow_charged", "astral_crossbow_charging_2", "astral_crossbow_charging_3", "astral_crossbow_charging_4", "astral_dagger", "astral_gauntlets", "astral_guard", "astral_handle", "astral_helmet", "astral_leggings", "astral_mace", "astral_shard", "astral_spear", "astral_staff", "astral_sword", "astral_whip", "aura_xp_arrow", "aura_xp_fragment", "aura_xp_orb", "aura_xp_potion", "auto_miner", "autominer_lunite", "autumn_fern", "azure_bluet", "baked_potato", "ball", "bamboo_catfish", "banana", "banana_seeds", "bandolier", "banner_black", "banner_blue", "banner_brown", "banner_cyan", "banner_draugr", "banner_gray", "banner_green", "banner_light_blue", "banner_light_gray", "banner_lime", "banner_magenta", "banner_orange", "banner_pink", "banner_purple", "banner_rainbow", "banner_red", "banner_skull", "banner_white", "banner_yellow", "barefrost_toothfish", "barnaclejaw", "basalt_pipefish", "bear_spawn_orb", "bear_spawner_block_icon", "beef_stew", "beetroot", "beetroot_seeds", "bin", "biomass", "black_balloon", "black_bed", "black_directional_arrow", "black_heavy_paintball_gun", "black_ice_rod", "black_kart", "black_paint_bow", "black_paint_bow_charging_2", "black_paint_bow_charging_3", "black_paint_bow_charging_4", "black_paintball", "black_paintball_gun", "black_popup_tower", "black_strongbed", "blackfin_icefish", "blackfire_fuel_cell", "blackwater_bream", "blackwater_leviathan", "blinding_pebble", "blue_balloon", "blue_bed", "blue_directional_arrow", "blue_heavy_paintball_gun", "blue_kart", "blue_orchid", "blue_paint_bow", "blue_paint_bow_charging_2", "blue_paint_bow_charging_3", "blue_paint_bow_charging_4", "blue_paintball", "blue_paintball_gun", "blue_popup_tower", "blue_strongbed", "blueberry_bush_stage0", "blueberry_bush_stage1", "blueberry_bush_stage2", "board", "bombfish", "bone", "bone_antlers_icon", "bone_meal", "boned_sturgeon", "book", "boomerang_fish", "boulder_bass", "bouncy_bomb", "bowl", "bowl_of_cranberries_1", "bowl_of_cranberries_2", "bowl_of_cranberries_3", "bowl_of_cranberries_4", "bowl_of_rice", "brain_rot_arrow", "brain_rot_potion", "bread", "brimstone_spikefish", "brood_sac", "brown_balloon", "brown_bed", "brown_directional_arrow", "brown_heavy_paintball_gun", "brown_kart", "brown_mushroom", "brown_paint_bow", "brown_paint_bow_charging_2", "brown_paint_bow_charging_3", "brown_paint_bow_charging_4", "brown_paintball", "brown_paintball_gun", "brown_popup_tower", "brown_strongbed", "bucket", "bull_shark", "camel_painting", "camel_spawn_orb", "camel_spawner_block_icon", "carbon_rod", "carpet_black_icon", "carpet_blue_icon", "carpet_brown_icon", "carpet_cyan_icon", "carpet_gray_icon", "carpet_green_icon", "carpet_light_blue_icon", "carpet_light_gray_icon", "carpet_lime_icon", "carpet_magenta_icon", "carpet_orange_icon", "carpet_pink_icon", "carpet_purple_icon", "carpet_red_icon", "carpet_white_icon", "carpet_yellow_icon", "carrot", "carrot_seeds", "catnip", "caught_bear_default", "caught_camel_brown", "caught_camel_default", "caught_cave_golem_default", "caught_cave_golem_iron", "caught_cow_cream", "caught_cow_default", "caught_crone_default", "caught_deer_default", "caught_diamond_goofy_golem_bare", "caught_diamond_goofy_golem_default", "caught_diamond_goofy_golem_flaking", "caught_diamond_goofy_golem_patchy", "caught_diamond_goofy_golem_shedding", "caught_diamond_goofy_golem_stone", "caught_diamond_guardian_default", "caught_draugr_huntress_default", "caught_draugr_knight_default", "caught_draugr_reaver_default", "caught_draugr_skeleton_default", "caught_draugr_warper_default", "caught_draugr_zombie_default", "caught_draugr_zombie_longHairChestplate", "caught_draugr_zombie_longHairClothed", "caught_draugr_zombie_shortHairClothed", "caught_fish", "caught_frost_golem_default", "caught_frost_skeleton_default", "caught_frost_wraith_default", "caught_frost_zombie_default", "caught_frost_zombie_longHairChestplate", "caught_frost_zombie_shortHairClothed", "caught_gold_goofy_golem_bare", "caught_gold_goofy_golem_default", "caught_gold_goofy_golem_flaking", "caught_gold_goofy_golem_patchy", "caught_gold_goofy_golem_shedding", "caught_gold_goofy_golem_stone", "caught_gold_guardian_default", "caught_gold_watermelon_stag_default", "caught_gorilla_default", "caught_horse_black", "caught_horse_brown", "caught_horse_cream", "caught_horse_default", "caught_iron_goofy_golem_bare", "caught_iron_goofy_golem_default", "caught_iron_goofy_golem_flaking", "caught_iron_goofy_golem_patchy", "caught_iron_goofy_golem_shedding", "caught_iron_goofy_golem_stone", "caught_iron_guardian_default", "caught_magma_golem_default", "caught_moonstone_goofy_golem_bare", "caught_moonstone_goofy_golem_default", "caught_moonstone_goofy_golem_flaking", "caught_moonstone_goofy_golem_patchy", "caught_moonstone_goofy_golem_shedding", "caught_moonstone_goofy_golem_stone", "caught_moonstone_guardian_default", "caught_pig_default", "caught_sheep_default", "caught_slime_default", "caught_spirit_bear_default", "caught_spirit_golem_default", "caught_spirit_gorilla_default", "caught_spirit_stag_default", "caught_spirit_wolf_default", "caught_stag_default", "caught_stalker_crimson", "caught_stalker_default", "caught_stalker_frost", "caught_stalker_void", "caught_tiki_terror_default", "caught_tiki_terror_titan", "caught_tiki_terror_tormentor", "caught_tiki_terror_tyrant", "caught_wildcat_black", "caught_wildcat_calico", "caught_wildcat_default", "caught_wildcat_grey", "caught_wildcat_leopard", "caught_wildcat_siamese", "caught_wildcat_tabby", "caught_wolf_brown", "caught_wolf_default", "caught_wolf_grey", "caught_wolf_spectral", "caught_wolf_white", "cauliflower_plant_stage0", "cauliflower_plant_stage1", "cauliflower_plant_stage2", "cave_golem_spawn_orb", "cave_golem_spawner_block_icon", "cedar_door", "cedar_fence", "cedar_fence_gate", "cedar_item_pedestal", "cedar_sapling", "cedar_trapdoor", "channel_sawfish", "chaos_potion", "charcoal", "cheese", "cherry", "cherry_door", "cherry_fence", "cherry_fence_gate", "cherry_item_pedestal", "cherry_sapling", "cherry_trapdoor", "chicken", "chili_pepper", "chili_pepper_seeds", "choir_bell", "chunk_map", "cinder_leviathan", "clock_gold_early_day", "clock_gold_early_night", "clock_gold_late_day", "clock_gold_late_night", "clock_gold_midday", "clock_gold_midnight", "clock_gold_sunrise", "clock_gold_sunset", "clock_wood_early_day", "clock_wood_early_night", "clock_wood_late_day", "clock_wood_late_night", "clock_wood_midday", "clock_wood_midnight", "clock_wood_sunrise", "clock_wood_sunset", "coal", "coastal_mullet", "cobweb", "coconut", "coelacanth", "coffee_plant_stage0", "coffee_plant_stage1", "coffee_plant_stage2", "coleslaw", "comet_beacon", "comet_core", "comet_shard", "compass", "compass_dir_10", "compass_dir_11", "compass_dir_12", "compass_dir_2", "compass_dir_3", "compass_dir_4", "compass_dir_5", "compass_dir_6", "compass_dir_7", "compass_dir_8", "compass_dir_9", "containment_plate", "cooked_mutton", "cooked_porkchop", "cooked_venison", "copper_bar", "copper_grit", "copper_wire", "core_tier_2", "core_tier_3", "core_tier_4", "core_tier_5", "corn", "corn_seeds", "cornbread", "cornflower", "cotton", "cotton_seeds", "cow_painting", "cow_spawn_orb", "cow_spawner_block_icon", "cows_milk", "cracked_coconut", "cranberries", "crone_spawn_orb", "crone_spawner_block_icon", "crowned_flame_angelfish", "crystal", "crystalized_wheatfish", "cursed_rod", "cursemetal_boots", "cursemetal_chestplate", "cursemetal_gauntlets", "cursemetal_helmet", "cursemetal_leggings", "cyan_balloon", "cyan_bed", "cyan_directional_arrow", "cyan_heavy_paintball_gun", "cyan_kart", "cyan_paint_bow", "cyan_paint_bow_charging_2", "cyan_paint_bow_charging_3", "cyan_paint_bow_charging_4", "cyan_paintball", "cyan_paintball_gun", "cyan_popup_tower", "cyan_strongbed", "dandelion", "dangling_rope", "dangling_vine", "darter", "darter_shadow", "date_pudding", "dates", "dead_bush", "deep_sea_rod", "deepbite_drill_tip", "deepwater_lanternfish", "deer_painting", "deer_spawn_orb", "deer_spawner_block_icon", "defense_arrow", "defense_potion", "deposit_seed_coal", "deposit_seed_copper", "deposit_seed_gold", "deposit_seed_iron", "deposit_seed_stone", "deposit_seed_uranium", "deposit_seed_voltite", "diamond", "diamond_axe", "diamond_blade", "diamond_boomerang", "diamond_boots", "diamond_bow", "diamond_bow_charging_2", "diamond_bow_charging_3", "diamond_bow_charging_4", "diamond_chestplate", "diamond_club", "diamond_crossbow", "diamond_crossbow_charged", "diamond_crossbow_charging_2", "diamond_crossbow_charging_3", "diamond_crossbow_charging_4", "diamond_dagger", "diamond_enchanting_table", "diamond_fragment", "diamond_gauntlets", "diamond_goofy_golem_spawn_orb", "diamond_goofy_golem_spawner_block_icon", "diamond_guard", "diamond_guardian_spawn_orb", "diamond_guardian_spawner_block_icon", "diamond_handle", "diamond_helmet", "diamond_hoe", "diamond_key", "diamond_leggings", "diamond_mace", "diamond_pickaxe", "diamond_shovel", "diamond_spear", "diamond_sword", "diamond_trophy", "diamond_whip", "doom_crest", "doom_rivet", "double_jump_arrow", "double_jump_potion", "draugr_huntress_spawn_orb", "draugr_huntress_spawner_block_icon", "draugr_knight_spawn_orb", "draugr_knight_spawner_block_icon", "draugr_reaver_spawn_orb", "draugr_reaver_spawner_block_icon", "draugr_rod", "draugr_skeleton_spawn_orb", "draugr_skeleton_spawner_block_icon", "draugr_warper_spawn_orb", "draugr_warper_spawner_block_icon", "draugr_zombie_spawn_orb", "draugr_zombie_spawner_block_icon", "driftice_capelin", "driftwood_catfish", "dusk_moss", "eagle_ray", "egg", "eldertide_leviathan", "electric_eel", "ellie_fish", "ember_chub", "embermark_wrasse", "empty_bottle", "empty_fuel_cell", "empty_spawner_block_icon", "eviota_vader", "explosive_paint_black", "explosive_paint_blue", "explosive_paint_brown", "explosive_paint_cyan", "explosive_paint_gray", "explosive_paint_green", "explosive_paint_light_blue", "explosive_paint_light_gray", "explosive_paint_lime", "explosive_paint_magenta", "explosive_paint_orange", "explosive_paint_pink", "explosive_paint_purple", "explosive_paint_quick_black", "explosive_paint_quick_blue", "explosive_paint_quick_brown", "explosive_paint_quick_cyan", "explosive_paint_quick_gray", "explosive_paint_quick_green", "explosive_paint_quick_light_blue", "explosive_paint_quick_light_gray", "explosive_paint_quick_lime", "explosive_paint_quick_magenta", "explosive_paint_quick_orange", "explosive_paint_quick_pink", "explosive_paint_quick_purple", "explosive_paint_quick_red", "explosive_paint_quick_white", "explosive_paint_quick_yellow", "explosive_paint_red", "explosive_paint_seeking_black", "explosive_paint_seeking_blue", "explosive_paint_seeking_brown", "explosive_paint_seeking_cyan", "explosive_paint_seeking_gray", "explosive_paint_seeking_green", "explosive_paint_seeking_light_blue", "explosive_paint_seeking_light_gray", "explosive_paint_seeking_lime", "explosive_paint_seeking_magenta", "explosive_paint_seeking_orange", "explosive_paint_seeking_pink", "explosive_paint_seeking_purple", "explosive_paint_seeking_red", "explosive_paint_seeking_white", "explosive_paint_seeking_yellow", "explosive_paint_sticky_black", "explosive_paint_sticky_blue", "explosive_paint_sticky_brown", "explosive_paint_sticky_cyan", "explosive_paint_sticky_gray", "explosive_paint_sticky_green", "explosive_paint_sticky_light_blue", "explosive_paint_sticky_light_gray", "explosive_paint_sticky_lime", "explosive_paint_sticky_magenta", "explosive_paint_sticky_orange", "explosive_paint_sticky_pink", "explosive_paint_sticky_purple", "explosive_paint_sticky_red", "explosive_paint_sticky_white", "explosive_paint_sticky_yellow", "explosive_paint_white", "explosive_paint_yellow", "extractor_pipe", "fallen_pine_cone", "fatBrownMushroom", "fatRedMushroom", "fertiliser", "filter_pipe", "fireball", "firecracker", "firecracker_black", "firecracker_blue", "firecracker_brown", "firecracker_cyan", "firecracker_gray", "firecracker_green", "firecracker_light_blue", "firecracker_light_gray", "firecracker_lime", "firecracker_magenta", "firecracker_orange", "firecracker_pebble", "firecracker_pebble_black", "firecracker_pebble_blue", "firecracker_pebble_brown", "firecracker_pebble_cyan", "firecracker_pebble_gray", "firecracker_pebble_green", "firecracker_pebble_light_blue", "firecracker_pebble_light_gray", "firecracker_pebble_lime", "firecracker_pebble_magenta", "firecracker_pebble_orange", "firecracker_pebble_pink", "firecracker_pebble_purple", "firecracker_pebble_rainbow", "firecracker_pebble_red", "firecracker_pebble_white", "firecracker_pebble_yellow", "firecracker_pink", "firecracker_purple", "firecracker_rainbow", "firecracker_red", "firecracker_white", "firecracker_yellow", "fish_fillet", "fish_n_chips", "flashlight", "floor_creator", "fluid_pipe", "flywheel", "focus_lens", "football", "frag_grenade", "fried_rice", "frost_golem_spawn_orb", "frost_golem_spawner_block_icon", "frost_herring", "frost_rod", "frost_shard", "frost_skeleton_spawn_orb", "frost_skeleton_spawner_block_icon", "frost_wolf_eel", "frost_wraith_spawn_orb", "frost_wraith_spawner_block_icon", "frost_zombie_spawn_orb", "frost_zombie_spawner_block_icon", "frostpaint_notie", "frozen_grenadier", "fur", "fur_chestplate", "furnace", "geo_boots", "geo_bow", "geo_bow_charging_2", "geo_bow_charging_3", "geo_bow_charging_4", "geo_chestplate", "geo_club", "geo_crossbow", "geo_crossbow_charged", "geo_crossbow_charging_2", "geo_crossbow_charging_3", "geo_crossbow_charging_4", "geo_dagger", "geo_gauntlets", "geo_helmet", "geo_leggings", "geo_mace", "geo_shard", "geo_spear", "geo_staff", "geo_sword", "geo_whip", "giant_grouper", "giant_moray", "giant_stingray", "giant_trevally", "glacial_lanternfish", "glacial_silverfish", "glistering_melon_slice", "glistering_watermelon_slice", "glow_dust", "glowing_mushroom", "glowing_soup", "gold_antlers_icon", "gold_blade", "gold_boomerang", "gold_bow", "gold_bow_charging_2", "gold_bow_charging_3", "gold_bow_charging_4", "gold_carrot", "gold_club", "gold_coin", "gold_crop", "gold_crossbow", "gold_crossbow_charged", "gold_crossbow_charging_2", "gold_crossbow_charging_3", "gold_crossbow_charging_4", "gold_dagger", "gold_enchanting_table", "gold_fragment", "gold_goofy_golem_spawn_orb", "gold_goofy_golem_spawner_block_icon", "gold_grit", "gold_guard", "gold_guardian_spawn_orb", "gold_guardian_spawner_block_icon", "gold_handle", "gold_ingot", "gold_key", "gold_mace", "gold_plate", "gold_spear", "gold_trophy", "gold_watermelon_stag_spawn_orb", "gold_watermelon_stag_spawner_block_icon", "gold_whip", "golden_axe", "golden_boots", "golden_chestplate", "golden_gauntlets", "golden_helmet", "golden_hoe", "golden_leggings", "golden_lucky_clover", "golden_mahseer", "golden_pickaxe", "golden_shovel", "golden_sword", "goldheart_engine", "golem_eye", "golem_pickaxe", "gorilla_spawn_orb", "gorilla_spawner_block_icon", "graphite", "grass_snapper", "gray_balloon", "gray_bed", "gray_heavy_paintball_gun", "gray_kart", "gray_paint_bow", "gray_paint_bow_charging_2", "gray_paint_bow_charging_3", "gray_paint_bow_charging_4", "gray_paintball", "gray_paintball_gun", "gray_popup_tower", "gray_strongbed", "green_balloon", "green_bed", "green_directional_arrow", "green_heavy_paintball_gun", "green_kart", "green_paint_bow", "green_paint_bow_charging_2", "green_paint_bow_charging_3", "green_paint_bow_charging_4", "green_paintball", "green_paintball_gun", "green_popup_tower", "green_strongbed", "greenfin_loach", "grenade_launcher", "grey_directional_arrow", "hang_glider", "hang_glider_diamond", "hang_glider_gold", "hang_glider_iron", "haste_arrow", "haste_potion", "hatchetfish", "heal_arrow", "heal_potion", "heat_exchanger", "heat_resistance_arrow", "heat_resistance_potion", "heatwarp_flounder", "homing_beacon", "horse_painting", "horse_spawn_orb", "horse_spawner_block_icon", "hovercraft", "ice_bridge", "ice_spined_notothenia", "iceball", "iceshelf_skate", "icy_sculpin", "inactive_radar", "instant_damage_arrow", "instant_damage_potion", "invisibility_arrow", "invisibility_potion", "iron_axe", "iron_blade", "iron_boomerang", "iron_boots", "iron_bow", "iron_bow_charging_2", "iron_bow_charging_3", "iron_bow_charging_4", "iron_chestplate", "iron_club", "iron_crossbow", "iron_crossbow_charged", "iron_crossbow_charging_2", "iron_crossbow_charging_3", "iron_crossbow_charging_4", "iron_dagger", "iron_enchanting_table", "iron_fragment", "iron_gauntlets", "iron_goofy_golem_spawn_orb", "iron_goofy_golem_spawner_block_icon", "iron_grit", "iron_guard", "iron_guardian_spawn_orb", "iron_guardian_spawner_block_icon", "iron_hammer", "iron_handle", "iron_helmet", "iron_hoe", "iron_ingot", "iron_key", "iron_ladder", "iron_leggings", "iron_mace", "iron_pickaxe", "iron_plate", "iron_shovel", "iron_spear", "iron_sword", "iron_trophy", "iron_whip", "jetpack", "job_application", "john_beef", "jump_arrow", "jump_pad", "jump_pad_strong", "jump_pad_super", "jump_pad_weak", "jump_potion", "jungle_door", "jungle_fence", "jungle_fence_gate", "jungle_item_pedestal", "jungle_rod", "jungle_sapling", "jungle_spinefish", "jungle_tall_grass_bottom", "jungle_tall_grass_top", "jungle_trapdoor", "kingly_amethite_boots", "kingly_amethite_chestplate", "kingly_amethite_gauntlets", "kingly_amethite_helmet", "kingly_amethite_leggings", "kingly_diamond_boots", "kingly_diamond_chestplate", "kingly_diamond_gauntlets", "kingly_diamond_helmet", "kingly_diamond_leggings", "knight_heart", "knight_sword", "knockback_arrow", "knockback_potion", "ladder_aspen", "ladder_cedar", "ladder_cherry", "ladder_jungle", "ladder_mango", "ladder_maple", "ladder_palm", "ladder_pear", "ladder_pine", "ladder_plum", "ladder_spectral", "landing_pad", "lantern", "lava_bucket", "lavaflow_trout", "lavawake_slopefish", "leaf_bed", "leather", "lettuce", "lettuce_plant_stage0", "lettuce_plant_stage1", "lettuce_plant_stage2", "light_blue_balloon", "light_blue_bed", "light_blue_car", "light_blue_directional_arrow", "light_blue_heavy_paintball_gun", "light_blue_kart", "light_blue_paint_bow", "light_blue_paint_bow_charging_2", "light_blue_paint_bow_charging_3", "light_blue_paint_bow_charging_4", "light_blue_paintball", "light_blue_paintball_gun", "light_blue_popup_tower", "light_blue_strongbed", "light_gray_balloon", "light_gray_bed", "light_gray_heavy_paintball_gun", "light_gray_kart", "light_gray_paint_bow", "light_gray_paint_bow_charging_2", "light_gray_paint_bow_charging_3", "light_gray_paint_bow_charging_4", "light_gray_paintball", "light_gray_paintball_gun", "light_gray_popup_tower", "light_gray_strongbed", "light_grey_directional_arrow", "lily_of_the_valley", "lily_pad", "lime_balloon", "lime_bed", "lime_directional_arrow", "lime_heavy_paintball_gun", "lime_kart", "lime_paint_bow", "lime_paint_bow_charging_2", "lime_paint_bow_charging_3", "lime_paint_bow_charging_4", "lime_paintball", "lime_paintball_gun", "lime_popup_tower", "lime_strongbed", "logic_board", "lucky_armour_upgrade", "lucky_bomb", "lucky_clover", "lucky_rod", "lucky_sword_upgrade", "lucky_tools_upgrade", "lunite", "machine_hull", "machine_parts", "magenta_balloon", "magenta_bed", "magenta_directional_arrow", "magenta_heavy_paintball_gun", "magenta_kart", "magenta_paint_bow", "magenta_paint_bow_charging_2", "magenta_paint_bow_charging_3", "magenta_paint_bow_charging_4", "magenta_paintball", "magenta_paintball_gun", "magenta_popup_tower", "magenta_strongbed", "magma_golem_spawn_orb", "magma_golem_spawner_block_icon", "magma_sardinella", "magma_trout", "magmasteel", "magmasteel_axe", "magmasteel_blade", "magmasteel_boomerang", "magmasteel_boots", "magmasteel_bow", "magmasteel_bow_charging_2", "magmasteel_bow_charging_3", "magmasteel_bow_charging_4", "magmasteel_chestplate", "magmasteel_club", "magmasteel_crossbow", "magmasteel_crossbow_charged", "magmasteel_crossbow_charging_2", "magmasteel_crossbow_charging_3", "magmasteel_crossbow_charging_4", "magmasteel_dagger", "magmasteel_fragment", "magmasteel_gauntlets", "magmasteel_guard", "magmasteel_handle", "magmasteel_helmet", "magmasteel_hoe", "magmasteel_leggings", "magmasteel_mace", "magmasteel_pickaxe", "magmasteel_shovel", "magmasteel_spear", "magmasteel_sword", "magmasteel_whip", "magmaward_fuel", "mangler_catfish", "mango", "mango_door", "mango_fence", "mango_fence_gate", "mango_item_pedestal", "mango_sapling", "mango_trapdoor", "mangrove_herring", "maple_door", "maple_fence", "maple_fence_gate", "maple_planks_bridge", "maple_sapling", "maple_trapdoor", "marbled_moray_cod", "master_rod", "meaty_bone", "medkit", "melon_seeds", "melon_slice", "merger_pipe", "messy_stone_bridge", "military_boots", "military_chestplate", "military_gauntlets", "military_helmet", "military_leggings", "milk_arrow", "milk_potion", "mining_grenade", "mining_helmet", "mining_yield_arrow", "mining_yield_potion", "mireback_carp", "mob_cage", "mob_cage_filled", "mob_catcher", "molten_cog", "molten_lotella_cod", "molten_magma_rod", "moonfish", "moonlit_boomerang_fish", "moonstone", "moonstone_axe", "moonstone_blade", "moonstone_boomerang", "moonstone_club", "moonstone_dagger", "moonstone_dust", "moonstone_fragment", "moonstone_goofy_golem_spawn_orb", "moonstone_goofy_golem_spawner_block_icon", "moonstone_guard", "moonstone_guardian_spawn_orb", "moonstone_guardian_spawner_block_icon", "moonstone_handle", "moonstone_mace", "moonstone_orb", "moonstone_pickaxe", "moonstone_pupfish", "moonstone_remote", "moonstone_remote_explosive", "moonstone_spear", "moonstone_sword", "moonstone_trophy", "moonstone_whip", "mossback_arapaima", "motor", "mudbelly_tilapia", "mudline_perch", "murk_stingray", "murkborne_ray", "mushroom_soup", "mythic_rod", "name_tag", "needlefish", "net", "night_vision_soup", "nomai_moray", "northern_wolffish", "noticeboard", "noticeboard_standing", "noticeboard_standing_bottom", "noticeboard_standing_bottom_left", "noticeboard_standing_bottom_right", "noticeboard_standing_left", "noticeboard_standing_leg", "noticeboard_standing_right", "noticeboard_standing_top", "noticeboard_standing_top_left", "noticeboard_standing_top_right", "noticeboard_wall", "noticeboard_wall_bottom", "noticeboard_wall_bottom_left", "noticeboard_wall_bottom_right", "noticeboard_wall_left", "noticeboard_wall_right", "noticeboard_wall_top", "noticeboard_wall_top_left", "noticeboard_wall_top_right", "nova_blade", "nova_boots", "nova_chestplate", "nova_gauntlets", "nova_helmet", "nova_jetpack", "nova_leggings", "nova_matter", "nova_multitool", "nova_trophy", "nova_upgrade", "nova_wrench", "oak_boat", "oarfish", "oats", "obsidian_boat", "obsidian_rod", "off_roader", "omelette", "onion", "orange_balloon", "orange_bed", "orange_directional_arrow", "orange_heavy_paintball_gun", "orange_kart", "orange_paint_bow", "orange_paint_bow_charging_2", "orange_paint_bow_charging_3", "orange_paint_bow_charging_4", "orange_paintball", "orange_paintball_gun", "orange_popup_tower", "orange_strongbed", "orange_tulip", "ore_lens", "oxeye_daisy", "paleice_rockcod", "palm_door", "palm_fence", "palm_fence_gate", "palm_item_pedestal", "palm_sapling", "palm_trapdoor", "parsnip_plant_stage0", "parsnip_plant_stage1", "parsnip_plant_stage2", "pear", "pear_door", "pear_fence", "pear_fence_gate", "pear_item_pedestal", "pear_sapling", "pear_trapdoor", "pearlescent_moonfish", "pebble", "permafrost_halibut", "pig_painting", "pig_spawn_orb", "pig_spawner_block_icon", "pine_door", "pine_fence", "pine_fence_gate", "pine_fern", "pine_grass", "pine_item_pedestal", "pine_sapling", "pine_trapdoor", "pink_balloon", "pink_bed", "pink_directional_arrow", "pink_heavy_paintball_gun", "pink_kart", "pink_paint_bow", "pink_paint_bow_charging_2", "pink_paint_bow_charging_3", "pink_paint_bow_charging_4", "pink_paintball", "pink_paintball_gun", "pink_popup_tower", "pink_strongbed", "pink_tulip", "pipe", "pithead", "plum", "plum_door", "plum_fence", "plum_fence_gate", "plum_item_pedestal", "plum_sapling", "plum_trapdoor", "plutonium_pellet", "pocket_terminal", "poison", "poison_arrow", "polarflash_electron", "poop", "poppy", "porridge", "potato_seeds", "potion_table", "power_coupler", "pull_charm", "pumpkin_pie", "pumpkin_seeds", "purple_balloon", "purple_bed", "purple_directional_arrow", "purple_heavy_paintball_gun", "purple_kart", "purple_paint_bow", "purple_paint_bow_charging_2", "purple_paint_bow_charging_3", "purple_paint_bow_charging_4", "purple_paintball", "purple_paintball_gun", "purple_popup_tower", "purple_strongbed", "pyroclast_eel", "pyroscale_grouper", "radiant_spark", "rainbow_guppy", "raw_beef", "raw_copper", "raw_gold", "raw_iron", "raw_mutton", "raw_porkchop", "raw_potato", "raw_uranium", "raw_venison", "raw_voltite", "reactor_blueprint", "recall_beacon", "red_balloon", "red_bed", "red_cabbage", "red_cabbage_stage0", "red_cabbage_stage1", "red_cabbage_stage2", "red_directional_arrow", "red_heavy_paintball_gun", "red_kart", "red_mushroom", "red_paint_bow", "red_paint_bow_charging_2", "red_paint_bow_charging_3", "red_paint_bow_charging_4", "red_paintball", "red_paintball_gun", "red_popup_tower", "red_pyreside", "red_snapper", "red_strongbed", "red_tulip", "reedglass_minnow", "reef_sardine", "regen_arrow", "regen_potion", "reinforced_ball", "reinforced_pebble", "relay_coil", "rice", "rimesnouted_lancetfish", "roast_dinner", "rocket", "root_flounder", "root_perch", "rotslab_eel", "rotten_brain", "rotten_flesh", "rpg", "rubellite", "rubellite_axe", "rubellite_boomerang", "rubellite_boots", "rubellite_bow", "rubellite_bow_charging_2", "rubellite_bow_charging_3", "rubellite_bow_charging_4", "rubellite_chestplate", "rubellite_club", "rubellite_crossbow", "rubellite_crossbow_charged", "rubellite_crossbow_charging_2", "rubellite_crossbow_charging_3", "rubellite_crossbow_charging_4", "rubellite_dagger", "rubellite_fragment", "rubellite_gauntlets", "rubellite_helmet", "rubellite_hoe", "rubellite_leggings", "rubellite_mace", "rubellite_pickaxe", "rubellite_shovel", "rubellite_spear", "rubellite_sword", "rubellite_whip", "rust_scad", "rusty_rod", "saddle", "salad", "salvaging_table", "sandbelly_piranha", "sanguine_blade", "sanguine_boots", "sanguine_bow", "sanguine_bow_charging_2", "sanguine_bow_charging_3", "sanguine_bow_charging_4", "sanguine_chestplate", "sanguine_club", "sanguine_crossbow", "sanguine_crossbow_charged", "sanguine_crossbow_charging_2", "sanguine_crossbow_charging_3", "sanguine_crossbow_charging_4", "sanguine_dagger", "sanguine_gauntlets", "sanguine_guard", "sanguine_handle", "sanguine_helmet", "sanguine_leggings", "sanguine_mace", "sanguine_shard", "sanguine_spear", "sanguine_staff", "sanguine_sword", "sanguine_whip", "scorched_sunfish", "scored_dace", "seahorse", "serpentite", "serpentite_axe", "serpentite_boomerang", "serpentite_boots", "serpentite_bow", "serpentite_bow_charging_2", "serpentite_bow_charging_3", "serpentite_bow_charging_4", "serpentite_chestplate", "serpentite_club", "serpentite_crossbow", "serpentite_crossbow_charged", "serpentite_crossbow_charging_2", "serpentite_crossbow_charging_3", "serpentite_crossbow_charging_4", "serpentite_dagger", "serpentite_fragment", "serpentite_gauntlets", "serpentite_helmet", "serpentite_hoe", "serpentite_leggings", "serpentite_mace", "serpentite_pickaxe", "serpentite_shovel", "serpentite_spear", "serpentite_sword", "serpentite_whip", "shadeback_ray", "shadow_rose", "shears", "sheep_painting", "sheep_spawn_orb", "sheep_spawner_block_icon", "sheeps_milk", "shield_arrow", "shield_potion", "showcase", "siege_core", "silver_dragonfish", "sky_pack", "slime_spawn_orb", "slime_spawner_block_icon", "slime_trail", "slowness_arrow", "slowness_potion", "small_cactus", "small_pod_black_icon", "small_pod_blue_icon", "small_pod_brown_icon", "small_pod_cyan_icon", "small_pod_gray_icon", "small_pod_green_icon", "small_pod_light_blue_icon", "small_pod_light_gray_icon", "small_pod_lime_icon", "small_pod_magenta_icon", "small_pod_orange_icon", "small_pod_pink_icon", "small_pod_purple_icon", "small_pod_red_icon", "small_pod_white_icon", "small_pod_yellow_icon", "smoke_grenade", "snakehead", "snow_haddock", "snowball", "snowdash", "solar_panel", "spectral_boots", "spectral_bow", "spectral_bow_charging_2", "spectral_bow_charging_3", "spectral_bow_charging_4", "spectral_chestplate", "spectral_club", "spectral_crossbow", "spectral_crossbow_charged", "spectral_crossbow_charging_2", "spectral_crossbow_charging_3", "spectral_crossbow_charging_4", "spectral_dagger", "spectral_door", "spectral_fence", "spectral_fence_gate", "spectral_gauntlets", "spectral_grass", "spectral_helmet", "spectral_item_pedestal", "spectral_leggings", "spectral_mace", "spectral_sapling", "spectral_shard", "spectral_spear", "spectral_staff", "spectral_sword", "spectral_trapdoor", "spectral_whip", "speed_arrow", "speed_potion", "speed_rod", "speedboat", "spent_pellet", "spiked_boots", "spikes_diamond", "spikes_gold", "spikes_iron", "spikes_kill", "spikes_stone", "spikes_wood", "spined_stickleback", "spirit_bear_spawn_orb", "spirit_bear_spawner_block_icon", "spirit_golem_spawn_orb", "spirit_golem_spawner_block_icon", "spirit_gorilla_spawn_orb", "spirit_gorilla_spawner_block_icon", "spirit_saddle", "spirit_stag_spawn_orb", "spirit_stag_spawner_block_icon", "spirit_wolf_spawn_orb", "spirit_wolf_spawner_block_icon", "splash_aura_xp_potion", "splash_brain_rot_potion", "splash_defense_potion", "splash_double_jump_potion", "splash_haste_potion", "splash_heal_potion", "splash_heat_resistance_potion", "splash_instant_damage_potion", "splash_invisibility_potion", "splash_jump_potion", "splash_knockback_potion", "splash_milk_potion", "splash_mining_yield_potion", "splash_poison", "splash_regen_potion", "splash_shield_potion", "splash_slowness_potion", "splash_speed_potion", "splash_strength_potion", "splash_weakness_potion", "splash_x_ray_vision_potion", "splitter_pipe", "stag_spawn_orb", "stag_spawner_block_icon", "stalker_spawn_orb", "stalker_spawner_block_icon", "star_alloy", "starbore_drill", "steak", "steel_bar", "stick", "stone_axe", "stone_blade", "stone_boomerang", "stone_bow", "stone_bow_charging_2", "stone_bow_charging_3", "stone_bow_charging_4", "stone_club", "stone_crossbow", "stone_crossbow_charged", "stone_crossbow_charging_2", "stone_crossbow_charging_3", "stone_crossbow_charging_4", "stone_dagger", "stone_enchanting_table", "stone_grouper", "stone_guard", "stone_handle", "stone_hoe", "stone_key", "stone_mace", "stone_pickaxe", "stone_shovel", "stone_spear", "stone_sword", "stone_trophy", "stone_whip", "strawberry_bush_stage0", "strawberry_bush_stage1", "strawberry_bush_stage2", "strength_arrow", "strength_potion", "strongfish_green", "strongfish_moon", "strongfish_red", "stuffed_pepper", "sturdy_rod", "sugar_cane_plant_stage0", "sugar_cane_plant_stage1", "sugar_cane_plant_stage2", "sugar_cane_plant_stage2_top", "sumpback_carp", "sunset_minnow", "super_rpg", "sushi", "swap_orb", "tall_grass_bottom", "tall_grass_top", "tallgrass", "tangle_resistant_rod", "tarpon", "teleport_heart", "teleportation_potion", "threadfin_bream", "tiki_terror_spawn_orb", "tiki_terror_spawner_block_icon", "timed_spike_bomb", "timed_spike_bomb_charging_2", "timed_spike_bomb_charging_3", "timed_spike_bomb_charging_4", "tomato", "tomato_plant_stage0", "tomato_plant_stage1", "tomato_plant_stage2", "tomato_plant_stage2_top", "torch", "torch_black", "torch_blue", "torch_brown", "torch_cyan", "torch_gray", "torch_green", "torch_light_blue", "torch_light_gray", "torch_lime", "torch_magenta", "torch_orange", "torch_pink", "torch_purple", "torch_red", "torch_white", "torch_yellow", "toxin_ball", "tri_pointed_needlefish", "truffle", "truffle_oil", "unlucky_bomb", "updraft", "uranium_grit", "uranium_pellet", "veg_soup", "vein_breaker", "vending_machine", "vine_coloured", "void_net", "volcanic_catfish", "volcanic_semperi", "voltite_cell", "voltite_dust", "voltplate_boots", "voltplate_chestplate", "voltplate_gauntlets", "voltplate_helmet", "voltplate_leggings", "water_bottle", "water_bucket", "watermelon_seeds", "watermelon_slice", "weakness_arrow", "weakness_potion", "wheat", "wheat_seeds", "wheatfish", "wheel", "white_balloon", "white_bed", "white_directional_arrow", "white_heavy_paintball_gun", "white_kart", "white_paint_bow", "white_paint_bow_charging_2", "white_paint_bow_charging_3", "white_paint_bow_charging_4", "white_paintball", "white_paintball_gun", "white_popup_tower", "white_strongbed", "white_tulip", "wildcat_painting", "wildcat_spawn_orb", "wildcat_spawner_block_icon", "wire", "wolf_painting", "wolf_spawn_orb", "wolf_spawner_block_icon", "wood_blade", "wood_boomerang", "wood_boots", "wood_bow", "wood_bow_charging_2", "wood_bow_charging_3", "wood_bow_charging_4", "wood_chestplate", "wood_club", "wood_crossbow", "wood_crossbow_charged", "wood_crossbow_charging_2", "wood_crossbow_charging_3", "wood_crossbow_charging_4", "wood_dagger", "wood_enchanting_table", "wood_gauntlets", "wood_guard", "wood_handle", "wood_helmet", "wood_leggings", "wood_mace", "wood_spear", "wood_trophy", "wood_whip", "wooden_axe", "wooden_hoe", "wooden_key", "wooden_pickaxe", "wooden_shovel", "wooden_sword", "workbench", "worldbuilder_wand", "wrench", "x_ray_vision_arrow", "x_ray_vision_potion", "yellow_balloon", "yellow_bed", "yellow_directional_arrow", "yellow_heavy_paintball_gun", "yellow_kart", "yellow_paint_bow", "yellow_paint_bow_charging_2", "yellow_paint_bow_charging_3", "yellow_paint_bow_charging_4", "yellow_paintball", "yellow_paintball_gun", "yellow_popup_tower", "yellow_strongbed", "yoghurt_pot"],
      be = [149, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 8, 8, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 17, 65, 6, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 42, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 259, 1, 1, 1, 1, 7, 8, 8, 8, 16, 1, 1, 1, 1, 1, 6, 6, 15, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 37, 7, 3, 1, 1, 5, 1, 123, 8, 8, 8, 9, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 7, 109, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 3, 6, 8, 8, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 226, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 6, 8, 8, 8, 9, 1, 1, 1, 3, 6, 1, 1, 1, 8, 1, 19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 7, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 1, 1, 1, 1, 24, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 20, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3629, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 265, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 153, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 32, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 28, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      Me = [1381, 1536, 439, 1200, 1257, 1184, 1615, 1137, 1139, 163, 406, 26, 103, 930, 1364, 663, 663, 663, 663, 1654, 1654, 1654, 1654, 1012, 1012, 1017, 69, 1016, 862, 1192, 1169, 333, 886, 886, 886, 886, 1581, 1581, 1581, 1581, 838, 838, 838, 838, 62, 1599, 1598, 439, 1200, 1257, 1184, 1615, 1137, 1139, 163, 406, 26, 103, 930, 1364, 1603, 1603, 1603, 1603, 1603, 1603, 1603, 1603, 1125, 1125, 1125, 1125, 1125, 1125, 1125, 1125, 956, 956, 956, 956, 956, 956, 956, 956, 904, 904, 904, 904, 904, 904, 904, 904, 1660, 1660, 1660, 1660, 1660, 1660, 1660, 1660, 933, 933, 933, 933, 933, 933, 933, 933, 1172, 1172, 1172, 1172, 1172, 1172, 1172, 1172, 752, 752, 752, 752, 752, 752, 752, 752, 918, 918, 918, 918, 918, 918, 918, 918, 427, 427, 427, 427, 427, 427, 427, 427, 1209, 1209, 1209, 1209, 1209, 1209, 1209, 1209, 159, 159, 159, 159, 159, 159, 159, 159, 197, 197, 197, 197, 197, 197, 197, 197, 764, 764, 764, 764, 764, 764, 764, 764, 1238, 1238, 1238, 1238, 1238, 1238, 1238, 1238, 140, 140, 140, 140, 140, 140, 140, 140, 1145, 1163, 1163, 1188, 1188, 329, 329, 65, 65, 857, 857, 1141, 1141, 1170, 1193, 334, 70, 866, 1146, 1581, 1581, 1581, 1581, 1381, 1151, 1151, 1156, 1155, 175, 175, 175, 175, 1080, 370, 1594, 1207, 1022, 1203, 1203, 1203, 1203, 889, 889, 889, 889, 890, 890, 890, 890, 882, 882, 882, 882, 881, 881, 881, 881, 884, 884, 884, 884, 887, 887, 887, 887, 888, 888, 888, 888, 216, 217, 218, 219, 220, 223, 221, 222, 224, 225, 226, 227, 228, 229, 230, 231, 1265, 414, 1246, 201, 408, 1534, 1535, 340, 340, 345, 344, 883, 883, 883, 883, 1444, 1443, 1441, 1440, 1439, 1442, 404, 558, 557, 556, 555, 554, 553, 552, 551, 550, 549, 548, 547, 546, 545, 544, 543, 575, 574, 573, 572, 571, 570, 569, 568, 567, 566, 565, 564, 563, 562, 561, 560, 591, 590, 589, 588, 587, 586, 585, 584, 583, 582, 581, 580, 579, 578, 577, 576, 1614, 1614, 1614, 1614, 1614, 1614, 1614, 1614, 1136, 1136, 1136, 1136, 1136, 1136, 1136, 1136, 967, 967, 967, 967, 967, 967, 967, 967, 916, 916, 916, 916, 916, 916, 916, 916, 1671, 1671, 1671, 1671, 1671, 1671, 1671, 1671, 944, 944, 944, 944, 944, 944, 944, 944, 1183, 1183, 1183, 1183, 1183, 1183, 1183, 1183, 762, 762, 762, 762, 762, 762, 762, 762, 928, 928, 928, 928, 928, 928, 928, 928, 438, 438, 438, 438, 438, 438, 438, 438, 1220, 1220, 1220, 1220, 1220, 1220, 1220, 1220, 171, 171, 171, 171, 171, 171, 171, 171, 209, 209, 209, 209, 209, 209, 209, 209, 775, 775, 775, 775, 775, 775, 775, 775, 1256, 1256, 1256, 1256, 1256, 1256, 1256, 1256, 152, 152, 152, 152, 152, 152, 152, 152, 1544, 1544, 596, 597, 348, 348, 1162, 411, 1368, 328, 515, 511, 528, 648, 658, 653, 506, 1421, 1417, 1417, 1431, 1426, 891, 891, 891, 891, 1638, 1638, 1638, 1638, 1502, 1502, 1502, 1502, 823, 823, 823, 823, 714, 714, 714, 714, 479, 479, 479, 479, 1167, 1166, 595, 1622, 133, 452, 1480, 178, 178, 178, 178, 697, 697, 697, 697, 730, 1306, 1306, 1306, 1306, 897, 897, 897, 897, 897, 897, 897, 897, 864, 865, 234, 1005, 1005, 1010, 1009, 885, 885, 885, 885, 108, 440, 441, 748, 1618, 504, 969, 795, 1549, 1550, 1551, 1552, 233, 233, 233, 1202, 1202, 1202, 1515, 1516, 1517, 1525, 1526, 1527, 1528, 900, 901, 902, 373, 374, 375, 324, 325, 326, 1147, 1148, 1149, 172, 173, 174, 1240, 1241, 1242, 136, 136, 136, 102, 233, 1202, 136, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 1449, 1456, 1447, 1454, 1451, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 1366, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 793, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 1620, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 1616, 513, 23, 23, 23, 23, 802, 802, 802, 802, 23, 23, 23, 23, 728, 728, 728, 728, 1391, 1391, 1391, 1389, 1389, 1389, 1395, 1395, 1395, 656, 508, 1396, 1396, 1396, 1392, 1392, 1392, 1388, 1388, 1388, 1397, 1397, 1397, 1390, 1390, 1390, 1393, 1393, 1393, 1386, 1386, 1386, 1385, 1385, 1385, 1394, 1394, 1394, 1383, 1383, 1383, 1384, 1384, 1384, 1387, 1387, 1387, 1382, 1382, 1382, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 1646, 1646, 1646, 1646, 1513, 1513, 1513, 1513, 846, 846, 846, 846, 497, 497, 497, 497, 1068, 1068, 1068, 1068, 1604, 1604, 1604, 1604, 1126, 1126, 1126, 1126, 957, 957, 957, 957, 906, 906, 906, 906, 1661, 1661, 1661, 1661, 934, 934, 934, 934, 1173, 1173, 1173, 1173, 778, 778, 778, 778, 929, 929, 929, 929, 428, 428, 428, 428, 1210, 1210, 1210, 1210, 160, 160, 160, 160, 198, 198, 198, 198, 765, 765, 765, 765, 1243, 1243, 1243, 1243, 141, 141, 141, 141, 137, 1580, 1580, 1580, 1580, 849, 850, 0, 1601, 1553, 1553, 1553, 1553, 1553, 1553, 1569, 1569, 1569, 1569, 1569, 1569, 1568, 1568, 1568, 1568, 1568, 1568, 1567, 1567, 1567, 1567, 1567, 1567, 1566, 1566, 1566, 1566, 1566, 1566, 1565, 1565, 1565, 1565, 1565, 1565, 1564, 1564, 1564, 1564, 1564, 1564, 1563, 1563, 1563, 1563, 1563, 1563, 1562, 1562, 1562, 1562, 1562, 1562, 1561, 1561, 1561, 1561, 1561, 1561, 1560, 1560, 1560, 1560, 1560, 1560, 1559, 1559, 1559, 1559, 1559, 1559, 1558, 1558, 1558, 1558, 1558, 1558, 1557, 1557, 1557, 1557, 1557, 1557, 1556, 1556, 1556, 1556, 1556, 1556, 1555, 1555, 1555, 1555, 1555, 1555, 1554, 1554, 1554, 1554, 1554, 1554, 892, 855, 852, 853, 854, 644, 695, 695, 695, 695, 695, 695, 418, 418, 418, 418, 418, 418, 1378, 1378, 1378, 1378, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 1185, 100, 100, 100, 100, 1268, 1268, 1268, 1268, 1268, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 1478, 1403, 1403, 1403, 1403, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 1619, 599, 599, 599, 599, 599, 599, 1024, 1024, 1024, 1024, 1024, 1024, 1482, 101, 101, 101, 101, 416, 1377, 1378, 1378, 1378, 1378, 831, 721, 486, 1058, 446, 893, 893, 893, 893, 893, 931, 931, 931, 931, 214, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 1085, 1085, 1085, 1085, 1092, 1092, 1092, 1092, 1086, 1086, 1086, 1086, 1089, 1089, 1089, 1089, 1091, 1091, 1091, 1091, 1093, 1093, 1093, 1093, 1094, 1094, 1094, 1094, 1087, 1087, 1087, 1087, 1088, 1088, 1088, 1088, 1090, 1090, 1090, 1090, 1095, 1095, 1095, 1095, 1101, 1101, 1101, 1101, 1096, 1096, 1096, 1096, 1099, 1099, 1099, 1099, 1100, 1100, 1100, 1100, 1102, 1102, 1102, 1102, 1103, 1103, 1103, 1103, 1097, 1097, 1097, 1097, 1098, 1098, 1098, 1098, 1543, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1013, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1164, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 1189, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 858, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1142, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 1152, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1418, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1006, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1084, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1014, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1165, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 331, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 859, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1143, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 1153, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 342, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 1007, 827, 717, 483, 1055, 1372, 1168, 1191, 332, 68, 860, 1144, 1154, 343, 1423, 1008, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 641, 1113, 1113, 1113, 1113, 1651, 1509, 841, 741, 493, 1062, 746, 1648, 1488, 807, 732, 463, 1047, 61, 1652, 1510, 843, 742, 494, 1653, 1512, 845, 743, 496, 878, 1649, 1506, 835, 737, 489, 639, 1034, 1642, 834, 736, 488, 1630, 815, 734, 471, 662, 1643, 839, 738, 491, 1625, 810, 733, 466, 1438, 1639, 825, 735, 481, 1029, 1027, 1028, 1030, 1026, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1642, 1630, 1643, 1625, 1639, 1365, 63, 1487, 368, 1228, 836, 824, 1227, 723, 715, 462, 480, 1046, 952, 1053, 185, 186, 187, 188, 189, 1076, 696, 1081, 407, 707, 210, 1593, 894, 1116, 1116, 1119, 1119, 1436, 1436, 779, 779, 782, 782, 781, 781, 780, 780, 796, 796, 1663, 1606, 1245, 1212, 1175, 1128, 959, 936, 920, 908, 767, 754, 430, 200, 162, 144, 1663, 1606, 1245, 1212, 1175, 1128, 959, 936, 920, 908, 767, 754, 430, 200, 162, 144, 1121, 1121, 1121, 1121, 1121, 1121, 58, 1121, 1121, 1121, 1121, 58, 905, 905, 1401, 1401, 1158, 1263, 60, 105, 1262, 645, 1033, 1398, 1061, 600, 184, 1274, 1274, 1531, 777, 799, 1, 2, 1158, 1626, 1627, 1628, 1629, 1491, 1492, 1493, 1494, 811, 812, 813, 814, 700, 701, 702, 703, 467, 468, 469, 470, 1632, 1634, 1635, 1636, 1496, 1498, 1499, 1500, 817, 819, 820, 821, 708, 710, 711, 712, 473, 475, 476, 477, 1633, 1497, 818, 709, 474, 60, 380, 384, 385, 386, 387, 388, 389, 390, 391, 381, 382, 383, 350, 193, 190, 56, 1187, 371, 413, 1150, 339, 107, 1595, 693, 1023, 692, 1206, 403, 405, 347, 1004, 232, 704, 1231, 104, 135, 1230, 394, 1225, 1485, 1229, 393, 1233, 395, 1273, 1272, 177, 179, 898, 1304, 1452, 661, 745, 877, 1539, 651, 1041, 349, 1373, 642, 1223, 195, 109, 1078, 181, 526, 1592, 1380, 1380, 1473, 1473, 1379, 1196, 1196, 1470, 1470, 1197, 1597, 1597, 1476, 1476, 1596, 804, 804, 1464, 1464, 803, 1032, 1468, 1031, 1434, 1434, 1474, 1474, 1433, 454, 454, 1459, 1459, 453, 1519, 1519, 1475, 1475, 1518, 806, 1465, 805, 856, 856, 1466, 1466, 851, 880, 1467, 1467, 879, 1261, 1261, 1471, 1471, 1260, 787, 787, 1462, 1462, 786, 784, 784, 1461, 1461, 783, 1371, 1371, 1472, 1472, 1370, 502, 1460, 501, 790, 1463, 789, 1658, 1477, 1657, 1036, 1036, 1469, 1469, 1035, 192, 1458, 191, 336, 1540, 55, 3, 3, 11, 11, 13, 13, 18, 18, 12, 12, 12, 12, 8, 8, 4, 4, 7, 7, 17, 17, 19, 19, 6, 6, 15, 15, 9, 9, 16, 16, 5, 5, 14, 14, 10, 10, 706, 1575, 1402, 640, 1065, 1064, 797, 1015, 1025, 1659, 1602, 1237, 1208, 1171, 1124, 955, 932, 917, 903, 763, 751, 426, 196, 158, 139, 1659, 1602, 1237, 1208, 1171, 1124, 955, 932, 917, 903, 763, 751, 426, 196, 158, 139, 1670, 1613, 1253, 1219, 1182, 1135, 966, 943, 927, 915, 774, 761, 437, 208, 170, 151, 1669, 1612, 1252, 1218, 1181, 1134, 965, 942, 926, 914, 773, 760, 436, 207, 169, 150, 1668, 1611, 1251, 1217, 1180, 1133, 964, 941, 925, 913, 772, 759, 435, 206, 168, 149, 1662, 1605, 1244, 1211, 1174, 1127, 958, 935, 919, 907, 766, 753, 429, 199, 161, 142, 593, 592, 559, 542, 541, 540, 539, 538, 537, 536, 535, 534, 533, 532, 531, 530, 591, 590, 589, 588, 587, 586, 585, 584, 583, 582, 581, 580, 579, 578, 577, 576, 575, 574, 573, 572, 571, 570, 569, 568, 567, 566, 565, 564, 563, 562, 561, 560, 558, 557, 556, 555, 554, 553, 552, 551, 550, 549, 548, 547, 546, 545, 544, 543, 1664, 1665, 1666, 1667, 1607, 1608, 1609, 1610, 1247, 1248, 1249, 1250, 1213, 1214, 1215, 1216, 1176, 1177, 1178, 1179, 1129, 1130, 1131, 1132, 960, 961, 962, 963, 937, 938, 939, 940, 921, 922, 923, 924, 909, 910, 911, 912, 768, 769, 770, 771, 755, 756, 757, 758, 431, 432, 433, 434, 202, 203, 204, 205, 164, 165, 166, 167, 145, 146, 147, 148, 1161, 410, 1367, 794, 213, 826, 716, 482, 1054, 451, 1376, 1621, 1617, 1448, 1455, 1446, 1453, 1450, 132, 1479, 729, 747, 327, 514, 510, 647, 657, 652, 505, 503, 968, 512, 655, 507, 1481, 415, 830, 720, 485, 1057, 1542, 1040, 295, 241, 240, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 296, 279, 276, 277, 278, 237, 236, 281, 282, 283, 284, 280, 285, 268, 269, 270, 271, 267, 272, 245, 246, 247, 248, 244, 249, 289, 290, 291, 292, 288, 293, 243, 297, 320, 323, 319, 321, 322, 314, 318, 315, 312, 313, 317, 316, 299, 302, 298, 301, 300, 235, 303, 274, 275, 238, 239, 238, 256, 257, 258, 259, 256, 256, 256, 256, 256, 256, 256, 254, 261, 264, 265, 266, 262, 252, 251, 251, 287, 255, 263, 263, 263, 263, 253, 305, 304, 306, 307, 242, 286, 273, 250, 294, 308, 309, 310, 311, 1544, 1545, 1546, 1547, 1570, 97, 98, 99, 99, 1457, 1457, 96, 601, 633, 636, 635, 634, 632, 631, 612, 611, 610, 609, 608, 607, 606, 605, 604, 603, 602, 613, 627, 630, 629, 628, 626, 625, 624, 623, 622, 621, 620, 619, 618, 617, 616, 615, 614, 1655, 1522, 1520, 1521, 1600, 1044, 176, 182, 1269, 20, 183, 130, 419, 442, 443, 522, 750, 863, 1003, 1070, 1307, 1363, 1072, 1037, 1271, 25, 1075, 521, 1117, 27, 106, 155, 156, 180, 211, 335, 369, 372, 517, 519, 686, 687, 688, 740, 776, 1011, 1045, 1063, 1073, 1074, 1079, 1082, 1157, 1224, 1255, 1258, 1259, 1270, 1302, 1335, 1399, 1445, 1503, 1529, 1530, 1538, 1541, 1571, 523, 59, 64, 129, 153, 131, 194, 351, 417, 449, 516, 524, 525, 529, 649, 654, 659, 660, 689, 690, 691, 791, 785, 798, 800, 801, 895, 896, 970, 971, 1018, 1042, 1083, 1140, 1159, 1186, 1198, 1221, 1222, 1254, 1266, 1333, 1334, 1374, 1400, 1583, 1584, 1303, 949, 1524, 861, 509, 420, 1537, 1435, 215, 447, 1019, 1120, 1043, 650, 143, 1077, 21, 22, 412, 338, 260, 637, 1020, 157, 1369, 1672, 1572, 1573, 1118, 1201, 445, 444, 1199, 598, 1021, 1645, 1511, 844, 727, 495, 1066, 1637, 1501, 822, 713, 478, 1051, 1624, 1490, 809, 699, 465, 1049, 1631, 1495, 816, 705, 472, 1050, 1644, 1508, 840, 725, 492, 1060, 1647, 1514, 847, 731, 498, 1069, 134, 346, 376, 520, 638, 646, 899, 1122, 1123, 1239, 1267, 1305, 1523, 1532, 1548, 1578, 181, 181, 181, 181, 181, 364, 365, 363, 366, 360, 362, 367, 361, 356, 357, 355, 358, 352, 354, 359, 353, 950, 946, 951, 948, 1582, 947, 1574, 1533, 739, 1274, 1274, 1274, 1274, 1274, 1593, 894, 28, 44, 50, 29, 51, 53, 47, 46, 36, 48, 31, 45, 32, 33, 34, 35, 38, 40, 41, 42, 39, 52, 43, 30, 37, 49, 54, 972, 989, 997, 973, 998, 1e3, 994, 993, 981, 995, 976, 990, 977, 978, 979, 980, 983, 985, 986, 987, 984, 999, 988, 975, 982, 996, 1001, 1275, 1291, 1297, 1276, 1298, 1300, 1294, 1293, 1283, 1295, 1278, 1292, 1279, 1280, 1281, 1282, 1285, 1287, 1288, 1289, 1286, 1299, 1290, 1277, 1284, 1296, 1301, 1336, 1352, 1358, 1337, 1359, 1361, 1355, 1354, 1344, 1356, 1339, 1353, 1340, 1341, 1342, 1343, 1346, 1348, 1349, 1350, 1347, 1360, 1351, 1338, 1345, 1357, 1362, 424, 422, 423, 425, 421, 870, 868, 869, 871, 867, 875, 873, 874, 876, 872, 1328, 1331, 1310, 1311, 1312, 1313, 1316, 1318, 1319, 1320, 1317, 1329, 1321, 1315, 1327, 1332, 1330, 1325, 1314, 1322, 1326, 1309, 1427, 1430, 1405, 1406, 1407, 1408, 1411, 1413, 1414, 1415, 1412, 1428, 1416, 1410, 1425, 1432, 1429, 1422, 1409, 1420, 1424, 1404, 681, 684, 665, 666, 667, 668, 671, 673, 674, 675, 672, 682, 676, 670, 680, 685, 683, 678, 669, 677, 679, 664, 91, 94, 73, 74, 75, 76, 79, 81, 82, 83, 80, 92, 84, 78, 90, 95, 93, 88, 77, 85, 89, 72, 1650, 1507, 837, 724, 490, 1297, 744, 448, 527, 154, 500, 499, 1226, 396, 828, 718, 397, 337, 1236, 832, 842, 398, 1071, 954, 1264, 456, 457, 461, 455, 458, 459, 1486, 726, 945, 953, 1234, 1204, 1138, 792, 1205, 1579, 1586, 1585, 1375, 518, 1483, 1052, 379, 378, 1484, 399, 400, 401, 402, 402, 402, 402, 402, 402, 57, 1590, 1588, 1589, 1591, 1587, 1623, 1640, 1641, 1489, 1504, 1505, 808, 829, 833, 698, 719, 722, 464, 484, 487, 1048, 1056, 1059, 974, 991, 992, 1308, 1323, 1324, 71, 86, 87, 1067, 1002, 1232, 1576, 1577, 1194, 1437, 694, 138, 749, 392, 788, 643, 1111, 460, 1235, 1656, 24, 1114, 402, 402, 402, 402, 402, 848, 1109, 1108, 1106, 1107, 1110, 1105, 1104, 1038, 1039, 1039, 1039, 1039, 1039, 1112, 1195, 377, 1115],
      Ke = 10114,
      Ue = [0];
    let Fe = null;

    function Je(ee) {
      var ie;
      if (!Number.isInteger(ee) || ee <= 0 || ee >= Ke || Ue.includes(ee)) return null;
      if (null === Fe) {
        Fe = new Map;
        let ee = 0;
        for (let ie = 0; ie < be.length; ie++) ee += be[ie], Fe.set(ee, ye[Me[ie]])
      }
      return null !== (ie = Fe.get(ee)) && void 0 !== ie ? ie : ""
    }

    function oe(ee) {
      const ie = Je(ee);
      return null === ie ? null : "" === ie ? He(54115) : He(54332)(`./${ie}.png`)
    }
  },
  54332: (ee, ie, He) => {
    var ye = {
      "./67.png": 54341,
      "./67_projectile_base.png": 54343,
      "./67_projectile_boosted.png": 54352,
      "./AK-47.png": 54360,
      "./AWP.png": 54365,
      "./Block-19.png": 54374,
      "./DMR.png": 54379,
      "./Deagle.png": 54384,
      "./Double-barreled.png": 54391,
      "./FMR.png": 54397,
      "./GPMG.png": 54399,
      "./M16.png": 54401,
      "./M1911.png": 54410,
      "./MP40.png": 54419,
      "./Mini Izu.png": 54423,
      "./Minigun.png": 54426,
      "./SKAR.png": 54431,
      "./Striker-12.png": 54434,
      "./TAR-21.png": 54439,
      "./VSR.png": 54445,
      "./abyss_carp.png": 54452,
      "./acorn.png": 54459,
      "./acorn_jelly.png": 54465,
      "./active_radar.png": 54474,
      "./advanced_coupler.png": 54483,
      "./aether_minnow.png": 54491,
      "./allium.png": 54497,
      "./alpha_moon_strongfish.png": 54505,
      "./amethite.png": 54508,
      "./amethite_armour_2.png": 54516,
      "./amethite_axe.png": 54524,
      "./amethite_boomerang.png": 54526,
      "./amethite_boots.png": 54534,
      "./amethite_bow.png": 54537,
      "./amethite_bow_charging_2.png": 54543,
      "./amethite_bow_charging_3.png": 54548,
      "./amethite_bow_charging_4.png": 54556,
      "./amethite_chestplate.png": 54564,
      "./amethite_club.png": 54573,
      "./amethite_crossbow.png": 54580,
      "./amethite_crossbow_charged.png": 54583,
      "./amethite_crossbow_charging_2.png": 54588,
      "./amethite_crossbow_charging_3.png": 54591,
      "./amethite_crossbow_charging_4.png": 54598,
      "./amethite_dagger.png": 54602,
      "./amethite_fragment.png": 54604,
      "./amethite_gauntlets.png": 54606,
      "./amethite_helmet.png": 54615,
      "./amethite_hoe.png": 54619,
      "./amethite_leggings.png": 54628,
      "./amethite_mace.png": 54632,
      "./amethite_pickaxe.png": 54638,
      "./amethite_shovel.png": 54641,
      "./amethite_spear.png": 54645,
      "./amethite_sword.png": 54652,
      "./amethite_whip.png": 54660,
      "./ammo.png": 54669,
      "./apple.png": 54678,
      "./arc_caster.png": 54686,
      "./armored_car.png": 54690,
      "./armoured_searobin.png": 54697,
      "./arrow.png": 54701,
      "./artisan_axe.png": 54709,
      "./artisan_bench.png": 54718,
      "./artisan_shears.png": 54721,
      "./ash_lionfish.png": 54727,
      "./aspen_door.png": 54735,
      "./aspen_fence.png": 54743,
      "./aspen_fence_gate.png": 54749,
      "./aspen_item_pedestal.png": 54755,
      "./aspen_sapling.png": 54760,
      "./aspen_trapdoor.png": 54762,
      "./astral_armour_2.png": 54769,
      "./astral_blade.png": 54777,
      "./astral_boots.png": 54782,
      "./astral_bow.png": 54785,
      "./astral_bow_charging_2.png": 54790,
      "./astral_bow_charging_3.png": 54794,
      "./astral_bow_charging_4.png": 54798,
      "./astral_chestplate.png": 54804,
      "./astral_club.png": 54808,
      "./astral_crossbow.png": 54814,
      "./astral_crossbow_charged.png": 54822,
      "./astral_crossbow_charging_2.png": 54827,
      "./astral_crossbow_charging_3.png": 54836,
      "./astral_crossbow_charging_4.png": 54843,
      "./astral_dagger.png": 54847,
      "./astral_gauntlets.png": 54856,
      "./astral_guard.png": 54865,
      "./astral_handle.png": 54871,
      "./astral_helmet.png": 54878,
      "./astral_leggings.png": 54880,
      "./astral_mace.png": 54885,
      "./astral_shard.png": 54894,
      "./astral_spear.png": 54901,
      "./astral_staff.png": 54906,
      "./astral_sword.png": 54913,
      "./astral_whip.png": 54918,
      "./aura_xp_arrow.png": 54925,
      "./aura_xp_fragment.png": 54930,
      "./aura_xp_orb.png": 54938,
      "./aura_xp_potion.png": 54942,
      "./auto_miner.png": 54947,
      "./autominer_lunite.png": 54950,
      "./autumn_fern.png": 54953,
      "./azure_bluet.png": 54960,
      "./baked_potato.png": 54969,
      "./ball.png": 54978,
      "./bamboo_catfish.png": 54984,
      "./banana.png": 54993,
      "./banana_seeds.png": 54995,
      "./bandolier.png": 55004,
      "./banner_black.png": 55013,
      "./banner_blue.png": 55016,
      "./banner_brown.png": 55023,
      "./banner_cyan.png": 55026,
      "./banner_draugr.png": 55032,
      "./banner_gray.png": 55041,
      "./banner_green.png": 55049,
      "./banner_light_blue.png": 55052,
      "./banner_light_gray.png": 55061,
      "./banner_lime.png": 55068,
      "./banner_magenta.png": 55076,
      "./banner_orange.png": 55082,
      "./banner_pink.png": 55091,
      "./banner_purple.png": 55093,
      "./banner_rainbow.png": 55101,
      "./banner_red.png": 55107,
      "./banner_skull.png": 55114,
      "./banner_white.png": 55121,
      "./banner_yellow.png": 55125,
      "./barefrost_toothfish.png": 55128,
      "./barnaclejaw.png": 55135,
      "./basalt_pipefish.png": 55141,
      "./bear_spawn_orb.png": 55146,
      "./bear_spawner_block_icon.png": 55151,
      "./beef_stew.png": 55156,
      "./beetroot.png": 55160,
      "./beetroot_plant_stage0.png": 55169,
      "./beetroot_plant_stage1.png": 55176,
      "./beetroot_plant_stage2.png": 55178,
      "./beetroot_seeds.png": 55186,
      "./berry_bush_stage0.png": 55193,
      "./bin.png": 55198,
      "./biomass.png": 55204,
      "./black_balloon.png": 55209,
      "./black_bed.png": 55217,
      "./black_directional_arrow.png": 55220,
      "./black_heavy_paintball_gun.png": 55223,
      "./black_ice_rod.png": 55231,
      "./black_kart.png": 55240,
      "./black_paint_bow.png": 55248,
      "./black_paint_bow_charging_2.png": 55253,
      "./black_paint_bow_charging_3.png": 55258,
      "./black_paint_bow_charging_4.png": 55262,
      "./black_paintball.png": 55268,
      "./black_paintball_gun.png": 55270,
      "./black_popup_tower.png": 55279,
      "./black_strongbed.png": 55286,
      "./blackfin_icefish.png": 55288,
      "./blackfire_fuel_cell.png": 55290,
      "./blackwater_bream.png": 55298,
      "./blackwater_leviathan.png": 55304,
      "./blinding_pebble.png": 55308,
      "./blue_balloon.png": 55312,
      "./blue_bed.png": 55321,
      "./blue_directional_arrow.png": 55324,
      "./blue_heavy_paintball_gun.png": 55332,
      "./blue_kart.png": 55336,
      "./blue_orchid.png": 55345,
      "./blue_paint_bow.png": 55352,
      "./blue_paint_bow_charging_2.png": 55359,
      "./blue_paint_bow_charging_3.png": 55367,
      "./blue_paint_bow_charging_4.png": 55370,
      "./blue_paintball.png": 55372,
      "./blue_paintball_gun.png": 55374,
      "./blue_popup_tower.png": 55382,
      "./blue_strongbed.png": 55389,
      "./blueberry_bush_stage0.png": 55396,
      "./blueberry_bush_stage1.png": 55398,
      "./blueberry_bush_stage2.png": 55400,
      "./board.png": 55406,
      "./bombfish.png": 55412,
      "./bone.png": 55416,
      "./bone_antlers_icon.png": 55424,
      "./bone_meal.png": 55430,
      "./boned_sturgeon.png": 55438,
      "./book.png": 55447,
      "./book_page.png": 55454,
      "./boomerang_fish.png": 55463,
      "./boulder_bass.png": 55468,
      "./bouncy_bomb.png": 55471,
      "./bowl.png": 55475,
      "./bowl_of_cranberries_1.png": 55483,
      "./bowl_of_cranberries_2.png": 55491,
      "./bowl_of_cranberries_3.png": 55497,
      "./bowl_of_cranberries_4.png": 55499,
      "./bowl_of_rice.png": 55506,
      "./brain_rot_arrow.png": 55515,
      "./brain_rot_potion.png": 55524,
      "./bread.png": 55529,
      "./brimstone_spikefish.png": 55531,
      "./brood_sac.png": 55536,
      "./brown_balloon.png": 55540,
      "./brown_bed.png": 55544,
      "./brown_directional_arrow.png": 55548,
      "./brown_heavy_paintball_gun.png": 55557,
      "./brown_kart.png": 55561,
      "./brown_mushroom.png": 55569,
      "./brown_paint_bow.png": 55573,
      "./brown_paint_bow_charging_2.png": 55575,
      "./brown_paint_bow_charging_3.png": 55578,
      "./brown_paint_bow_charging_4.png": 55581,
      "./brown_paintball.png": 55584,
      "./brown_paintball_gun.png": 55591,
      "./brown_popup_tower.png": 55595,
      "./brown_strongbed.png": 55598,
      "./bucket.png": 55600,
      "./bull_shark.png": 55604,
      "./camel_painting.png": 55607,
      "./camel_painting_option2.png": 55609,
      "./camel_spawn_orb.png": 55618,
      "./camel_spawner_block_icon.png": 55624,
      "./carbon_rod.png": 55626,
      "./carpet_black_icon.png": 55631,
      "./carpet_blue_icon.png": 55633,
      "./carpet_brown_icon.png": 55639,
      "./carpet_cyan_icon.png": 55647,
      "./carpet_gray_icon.png": 55650,
      "./carpet_green_icon.png": 55657,
      "./carpet_light_blue_icon.png": 55664,
      "./carpet_light_gray_icon.png": 55667,
      "./carpet_lime_icon.png": 55674,
      "./carpet_magenta_icon.png": 55676,
      "./carpet_orange_icon.png": 55682,
      "./carpet_pink_icon.png": 55691,
      "./carpet_purple_icon.png": 55700,
      "./carpet_red_icon.png": 55702,
      "./carpet_white_icon.png": 55704,
      "./carpet_yellow_icon.png": 55707,
      "./carrot.png": 55712,
      "./carrot_plant_stage0.png": 55714,
      "./carrot_plant_stage1.png": 55722,
      "./carrot_plant_stage2.png": 55726,
      "./carrot_seeds.png": 55733,
      "./catnip.png": 55737,
      "./caught_bear_default.png": 55742,
      "./caught_camel_brown.png": 55751,
      "./caught_camel_default.png": 55760,
      "./caught_cave_golem_default.png": 55766,
      "./caught_cave_golem_iron.png": 55770,
      "./caught_cow_cream.png": 55779,
      "./caught_cow_default.png": 55785,
      "./caught_crone_default.png": 55789,
      "./caught_deer_default.png": 55791,
      "./caught_diamond_goofy_golem_bare.png": 55796,
      "./caught_diamond_goofy_golem_default.png": 55803,
      "./caught_diamond_goofy_golem_flaking.png": 55807,
      "./caught_diamond_goofy_golem_patchy.png": 55813,
      "./caught_diamond_goofy_golem_shedding.png": 55821,
      "./caught_diamond_goofy_golem_stone.png": 55827,
      "./caught_diamond_guardian_default.png": 55829,
      "./caught_draugr_huntress_default.png": 55838,
      "./caught_draugr_knight_default.png": 55847,
      "./caught_draugr_reaver_default.png": 55856,
      "./caught_draugr_skeleton_default.png": 55859,
      "./caught_draugr_warper_default.png": 55862,
      "./caught_draugr_zombie_default.png": 55869,
      "./caught_draugr_zombie_longHairChestplate.png": 55877,
      "./caught_draugr_zombie_longHairClothed.png": 55882,
      "./caught_draugr_zombie_shortHairClothed.png": 55885,
      "./caught_fish.png": 55892,
      "./caught_frost_golem_default.png": 55898,
      "./caught_frost_skeleton_default.png": 55902,
      "./caught_frost_wraith_default.png": 55907,
      "./caught_frost_zombie_default.png": 55911,
      "./caught_frost_zombie_longHairChestplate.png": 55915,
      "./caught_frost_zombie_shortHairClothed.png": 55919,
      "./caught_gold_goofy_golem_bare.png": 55928,
      "./caught_gold_goofy_golem_default.png": 55933,
      "./caught_gold_goofy_golem_flaking.png": 55936,
      "./caught_gold_goofy_golem_patchy.png": 55945,
      "./caught_gold_goofy_golem_shedding.png": 55950,
      "./caught_gold_goofy_golem_stone.png": 55959,
      "./caught_gold_guardian_default.png": 55962,
      "./caught_gold_watermelon_stag_default.png": 55967,
      "./caught_gorilla_default.png": 55975,
      "./caught_horse_black.png": 55978,
      "./caught_horse_brown.png": 55980,
      "./caught_horse_cream.png": 55984,
      "./caught_horse_default.png": 55989,
      "./caught_iron_goofy_golem_bare.png": 55996,
      "./caught_iron_goofy_golem_default.png": 56004,
      "./caught_iron_goofy_golem_flaking.png": 56007,
      "./caught_iron_goofy_golem_patchy.png": 56009,
      "./caught_iron_goofy_golem_shedding.png": 56018,
      "./caught_iron_goofy_golem_stone.png": 56021,
      "./caught_iron_guardian_default.png": 56026,
      "./caught_magma_golem_default.png": 56032,
      "./caught_moonstone_goofy_golem_bare.png": 56036,
      "./caught_moonstone_goofy_golem_default.png": 56038,
      "./caught_moonstone_goofy_golem_flaking.png": 56044,
      "./caught_moonstone_goofy_golem_patchy.png": 56053,
      "./caught_moonstone_goofy_golem_shedding.png": 56057,
      "./caught_moonstone_goofy_golem_stone.png": 56061,
      "./caught_moonstone_guardian_default.png": 56069,
      "./caught_pig_default.png": 56073,
      "./caught_sheep_default.png": 56082,
      "./caught_slime_default.png": 56090,
      "./caught_spirit_bear_default.png": 56097,
      "./caught_spirit_golem_default.png": 56102,
      "./caught_spirit_gorilla_default.png": 56104,
      "./caught_spirit_stag_default.png": 56108,
      "./caught_spirit_wolf_default.png": 56110,
      "./caught_stag_default.png": 56114,
      "./caught_stalker_crimson.png": 56121,
      "./caught_stalker_default.png": 56125,
      "./caught_stalker_frost.png": 56128,
      "./caught_stalker_void.png": 56136,
      "./caught_tiki_terror_default.png": 56138,
      "./caught_tiki_terror_titan.png": 56140,
      "./caught_tiki_terror_tormentor.png": 56145,
      "./caught_tiki_terror_tyrant.png": 56154,
      "./caught_wildcat_black.png": 56161,
      "./caught_wildcat_calico.png": 56165,
      "./caught_wildcat_default.png": 56171,
      "./caught_wildcat_grey.png": 56176,
      "./caught_wildcat_leopard.png": 56185,
      "./caught_wildcat_siamese.png": 56192,
      "./caught_wildcat_tabby.png": 56195,
      "./caught_wolf_brown.png": 56199,
      "./caught_wolf_default.png": 56201,
      "./caught_wolf_grey.png": 56205,
      "./caught_wolf_spectral.png": 56213,
      "./caught_wolf_white.png": 56218,
      "./cauliflower_plant_stage0.png": 56227,
      "./cauliflower_plant_stage1.png": 56230,
      "./cauliflower_plant_stage2.png": 56238,
      "./cave_golem_spawn_orb.png": 56245,
      "./cave_golem_spawner_block_icon.png": 56250,
      "./cedar_door.png": 56254,
      "./cedar_fence.png": 56257,
      "./cedar_fence_gate.png": 56265,
      "./cedar_item_pedestal.png": 56270,
      "./cedar_sapling.png": 56273,
      "./cedar_trapdoor.png": 56275,
      "./channel_sawfish.png": 56277,
      "./chaos_potion.png": 56283,
      "./charcoal.png": 56290,
      "./cheese.png": 56294,
      "./cherry.png": 56303,
      "./cherry_door.png": 56311,
      "./cherry_fence.png": 56320,
      "./cherry_fence_gate.png": 56323,
      "./cherry_item_pedestal.png": 56326,
      "./cherry_sapling.png": 56332,
      "./cherry_trapdoor.png": 56334,
      "./chicken.png": 56342,
      "./chili_pepper.png": 56345,
      "./chili_pepper_seeds.png": 56350,
      "./choir_bell.png": 56352,
      "./chunk_map.png": 56354,
      "./cinder_leviathan.png": 56356,
      "./clock_gold_early_day.png": 56363,
      "./clock_gold_early_night.png": 56371,
      "./clock_gold_late_day.png": 56379,
      "./clock_gold_late_night.png": 56383,
      "./clock_gold_midday.png": 56391,
      "./clock_gold_midnight.png": 56394,
      "./clock_gold_sunrise.png": 56401,
      "./clock_gold_sunset.png": 56405,
      "./clock_wood_early_day.png": 56412,
      "./clock_wood_early_night.png": 56416,
      "./clock_wood_late_day.png": 56420,
      "./clock_wood_late_night.png": 56425,
      "./clock_wood_midday.png": 56427,
      "./clock_wood_midnight.png": 56436,
      "./clock_wood_sunrise.png": 56445,
      "./clock_wood_sunset.png": 56454,
      "./coal.png": 56460,
      "./coastal_mullet.png": 56464,
      "./cobweb.png": 56472,
      "./coconut.png": 56481,
      "./coelacanth.png": 56487,
      "./coffee_plant_stage0.png": 56490,
      "./coffee_plant_stage1.png": 56494,
      "./coffee_plant_stage2.png": 56496,
      "./coleslaw.png": 56498,
      "./comet_beacon.png": 56500,
      "./comet_core.png": 56502,
      "./comet_shard.png": 56504,
      "./compass.png": 56506,
      "./compass_dir_10.png": 56508,
      "./compass_dir_11.png": 56511,
      "./compass_dir_12.png": 56517,
      "./compass_dir_2.png": 56522,
      "./compass_dir_3.png": 56527,
      "./compass_dir_4.png": 56532,
      "./compass_dir_5.png": 56538,
      "./compass_dir_6.png": 56543,
      "./compass_dir_7.png": 56548,
      "./compass_dir_8.png": 56550,
      "./compass_dir_9.png": 56555,
      "./containment_plate.png": 56558,
      "./cooked_mutton.png": 56565,
      "./cooked_porkchop.png": 56573,
      "./cooked_venison.png": 56582,
      "./copper_bar.png": 56589,
      "./copper_grit.png": 56597,
      "./copper_wire.png": 56600,
      "./core_tier_2.png": 56604,
      "./core_tier_3.png": 56609,
      "./core_tier_4.png": 56614,
      "./core_tier_5.png": 56617,
      "./corn.png": 56626,
      "./corn_seeds.png": 56634,
      "./cornbread.png": 56638,
      "./cornflower.png": 56641,
      "./cotton.png": 56646,
      "./cotton_seeds.png": 56655,
      "./cow_painting.png": 56661,
      "./cow_spawn_orb.png": 56668,
      "./cow_spawner_block_icon.png": 56672,
      "./cows_milk.png": 56675,
      "./cracked_coconut.png": 56683,
      "./cranberries.png": 56685,
      "./crimson_trapdoor.png": 56688,
      "./crone_spawn_orb.png": 56693,
      "./crone_spawner_block_icon.png": 56697,
      "./crowned_flame_angelfish.png": 56699,
      "./crystal.png": 56707,
      "./crystalized_wheatfish.png": 56712,
      "./cursed_rod.png": 56714,
      "./cursemetal_armour_2.png": 56719,
      "./cursemetal_boots.png": 56723,
      "./cursemetal_chestplate.png": 56727,
      "./cursemetal_gauntlets.png": 56732,
      "./cursemetal_helmet.png": 56738,
      "./cursemetal_leggings.png": 56744,
      "./cyan_balloon.png": 56751,
      "./cyan_bed.png": 56758,
      "./cyan_directional_arrow.png": 56763,
      "./cyan_heavy_paintball_gun.png": 56768,
      "./cyan_kart.png": 56774,
      "./cyan_paint_bow.png": 56777,
      "./cyan_paint_bow_charging_2.png": 56782,
      "./cyan_paint_bow_charging_3.png": 56785,
      "./cyan_paint_bow_charging_4.png": 56787,
      "./cyan_paintball.png": 56789,
      "./cyan_paintball_gun.png": 56798,
      "./cyan_popup_tower.png": 56805,
      "./cyan_strongbed.png": 56814,
      "./dandelion.png": 56823,
      "./dangling_rope.png": 56825,
      "./dangling_vine.png": 56832,
      "./darter.png": 56835,
      "./darter_shadow.png": 56843,
      "./date_pudding.png": 56847,
      "./date_pudding_option2.png": 56850,
      "./dates.png": 56856,
      "./dates_option2.png": 56865,
      "./dead_bush.png": 56870,
      "./deep_sea_rod.png": 56875,
      "./deepbite_drill_tip.png": 56883,
      "./deepwater_lanternfish.png": 56889,
      "./deer_painting.png": 56896,
      "./deer_spawn_orb.png": 56900,
      "./deer_spawner_block_icon.png": 56909,
      "./defense_arrow.png": 56914,
      "./defense_potion.png": 56919,
      "./deposit_seed_coal.png": 56924,
      "./deposit_seed_copper.png": 56933,
      "./deposit_seed_gold.png": 56936,
      "./deposit_seed_iron.png": 56942,
      "./deposit_seed_stone.png": 56945,
      "./deposit_seed_uranium.png": 56951,
      "./deposit_seed_voltite.png": 56955,
      "./diamond.png": 56963,
      "./diamond_armour_2.png": 56967,
      "./diamond_axe.png": 56970,
      "./diamond_blade.png": 56976,
      "./diamond_boomerang.png": 56981,
      "./diamond_boots.png": 56983,
      "./diamond_bow.png": 56986,
      "./diamond_bow_charging_2.png": 56993,
      "./diamond_bow_charging_3.png": 57002,
      "./diamond_bow_charging_4.png": 57005,
      "./diamond_chestplate.png": 57007,
      "./diamond_club.png": 57011,
      "./diamond_crossbow.png": 57017,
      "./diamond_crossbow_charged.png": 57026,
      "./diamond_crossbow_charging_2.png": 57034,
      "./diamond_crossbow_charging_3.png": 57041,
      "./diamond_crossbow_charging_4.png": 57045,
      "./diamond_dagger.png": 57053,
      "./diamond_enchanting_table.png": 57057,
      "./diamond_fragment.png": 57066,
      "./diamond_gauntlets.png": 57075,
      "./diamond_goofy_golem_spawn_orb.png": 57080,
      "./diamond_goofy_golem_spawner_block_icon.png": 57083,
      "./diamond_guard.png": 57086,
      "./diamond_guardian_spawn_orb.png": 57090,
      "./diamond_guardian_spawner_block_icon.png": 57096,
      "./diamond_handle.png": 57099,
      "./diamond_helmet.png": 57107,
      "./diamond_hoe.png": 57111,
      "./diamond_key.png": 57116,
      "./diamond_leggings.png": 57121,
      "./diamond_mace.png": 57128,
      "./diamond_pickaxe.png": 57137,
      "./diamond_shovel.png": 57146,
      "./diamond_spear.png": 57151,
      "./diamond_sword.png": 57154,
      "./diamond_trophy.png": 57156,
      "./diamond_whip.png": 57158,
      "./doom_crest.png": 57166,
      "./doom_rivet.png": 57170,
      "./double_jump_arrow.png": 57172,
      "./double_jump_potion.png": 57177,
      "./draugr_huntress_spawn_orb.png": 57185,
      "./draugr_huntress_spawner_block_icon.png": 57192,
      "./draugr_knight_spawn_orb.png": 57194,
      "./draugr_knight_spawner_block_icon.png": 57200,
      "./draugr_reaver_spawn_orb.png": 57206,
      "./draugr_reaver_spawner_block_icon.png": 57214,
      "./draugr_rod.png": 57223,
      "./draugr_skeleton_spawn_orb.png": 57229,
      "./draugr_skeleton_spawner_block_icon.png": 57235,
      "./draugr_warper_spawn_orb.png": 57238,
      "./draugr_warper_spawner_block_icon.png": 57241,
      "./draugr_zombie_spawn_orb.png": 57248,
      "./draugr_zombie_spawner_block_icon.png": 57251,
      "./driftice_capelin.png": 57255,
      "./driftwood_catfish.png": 57262,
      "./dusk_moss.png": 57270,
      "./eagle_ray.png": 57278,
      "./egg.png": 57281,
      "./eldertide_leviathan.png": 57288,
      "./electric_eel.png": 57294,
      "./ellie_fish.png": 57297,
      "./ember_chub.png": 57300,
      "./embermark_wrasse.png": 57308,
      "./empty_armor_slot_boots.png": 57310,
      "./empty_armor_slot_chestplate.png": 57315,
      "./empty_armor_slot_gauntlets.png": 57319,
      "./empty_armor_slot_helmet.png": 57325,
      "./empty_armor_slot_leggings.png": 57329,
      "./empty_bottle.png": 57336,
      "./empty_fuel_cell.png": 57341,
      "./empty_spawner_block_icon.png": 57345,
      "./eviota_vader.png": 57348,
      "./explosive_paint_black.png": 57351,
      "./explosive_paint_blue.png": 57360,
      "./explosive_paint_brown.png": 57364,
      "./explosive_paint_cyan.png": 57369,
      "./explosive_paint_gray.png": 57373,
      "./explosive_paint_green.png": 57375,
      "./explosive_paint_light_blue.png": 57377,
      "./explosive_paint_light_gray.png": 57381,
      "./explosive_paint_lime.png": 57384,
      "./explosive_paint_magenta.png": 57388,
      "./explosive_paint_orange.png": 57395,
      "./explosive_paint_pink.png": 57400,
      "./explosive_paint_purple.png": 57408,
      "./explosive_paint_quick_black.png": 57410,
      "./explosive_paint_quick_blue.png": 57419,
      "./explosive_paint_quick_brown.png": 57423,
      "./explosive_paint_quick_cyan.png": 57428,
      "./explosive_paint_quick_gray.png": 57435,
      "./explosive_paint_quick_green.png": 57437,
      "./explosive_paint_quick_light_blue.png": 57444,
      "./explosive_paint_quick_light_gray.png": 57449,
      "./explosive_paint_quick_lime.png": 57457,
      "./explosive_paint_quick_magenta.png": 57463,
      "./explosive_paint_quick_orange.png": 57466,
      "./explosive_paint_quick_pink.png": 57468,
      "./explosive_paint_quick_purple.png": 57472,
      "./explosive_paint_quick_red.png": 57477,
      "./explosive_paint_quick_white.png": 57479,
      "./explosive_paint_quick_yellow.png": 57483,
      "./explosive_paint_red.png": 57490,
      "./explosive_paint_seeking_black.png": 57499,
      "./explosive_paint_seeking_blue.png": 57501,
      "./explosive_paint_seeking_brown.png": 57505,
      "./explosive_paint_seeking_cyan.png": 57510,
      "./explosive_paint_seeking_gray.png": 57518,
      "./explosive_paint_seeking_green.png": 57520,
      "./explosive_paint_seeking_light_blue.png": 57529,
      "./explosive_paint_seeking_light_gray.png": 57531,
      "./explosive_paint_seeking_lime.png": 57537,
      "./explosive_paint_seeking_magenta.png": 57545,
      "./explosive_paint_seeking_orange.png": 57550,
      "./explosive_paint_seeking_pink.png": 57556,
      "./explosive_paint_seeking_purple.png": 57564,
      "./explosive_paint_seeking_red.png": 57572,
      "./explosive_paint_seeking_white.png": 57577,
      "./explosive_paint_seeking_yellow.png": 57584,
      "./explosive_paint_sticky_black.png": 57587,
      "./explosive_paint_sticky_blue.png": 57589,
      "./explosive_paint_sticky_brown.png": 57597,
      "./explosive_paint_sticky_cyan.png": 57604,
      "./explosive_paint_sticky_gray.png": 57608,
      "./explosive_paint_sticky_green.png": 57610,
      "./explosive_paint_sticky_light_blue.png": 57619,
      "./explosive_paint_sticky_light_gray.png": 57626,
      "./explosive_paint_sticky_lime.png": 57630,
      "./explosive_paint_sticky_magenta.png": 57635,
      "./explosive_paint_sticky_orange.png": 57637,
      "./explosive_paint_sticky_pink.png": 57642,
      "./explosive_paint_sticky_purple.png": 57647,
      "./explosive_paint_sticky_red.png": 57650,
      "./explosive_paint_sticky_white.png": 57658,
      "./explosive_paint_sticky_yellow.png": 57666,
      "./explosive_paint_white.png": 57672,
      "./explosive_paint_yellow.png": 57679,
      "./extractor_pipe.png": 57686,
      "./fallen_pine_cone.png": 57690,
      "./fatBrownMushroom.png": 57696,
      "./fatRedMushroom.png": 57700,
      "./fertiliser.png": 57709,
      "./filter_pipe.png": 57712,
      "./fireball.png": 57717,
      "./firecracker.png": 57723,
      "./firecracker_black.png": 57725,
      "./firecracker_blue.png": 57730,
      "./firecracker_brown.png": 57734,
      "./firecracker_cyan.png": 57741,
      "./firecracker_gray.png": 57743,
      "./firecracker_green.png": 57751,
      "./firecracker_light_blue.png": 57759,
      "./firecracker_light_gray.png": 57767,
      "./firecracker_lime.png": 57775,
      "./firecracker_magenta.png": 57780,
      "./firecracker_orange.png": 57788,
      "./firecracker_pebble.png": 57792,
      "./firecracker_pebble_black.png": 57800,
      "./firecracker_pebble_blue.png": 57807,
      "./firecracker_pebble_brown.png": 57816,
      "./firecracker_pebble_cyan.png": 57821,
      "./firecracker_pebble_gray.png": 57828,
      "./firecracker_pebble_green.png": 57836,
      "./firecracker_pebble_light_blue.png": 57843,
      "./firecracker_pebble_light_gray.png": 57852,
      "./firecracker_pebble_lime.png": 57854,
      "./firecracker_pebble_magenta.png": 57857,
      "./firecracker_pebble_orange.png": 57862,
      "./firecracker_pebble_pink.png": 57866,
      "./firecracker_pebble_purple.png": 57872,
      "./firecracker_pebble_rainbow.png": 57881,
      "./firecracker_pebble_red.png": 57884,
      "./firecracker_pebble_white.png": 57893,
      "./firecracker_pebble_yellow.png": 57899,
      "./firecracker_pink.png": 57903,
      "./firecracker_purple.png": 57912,
      "./firecracker_rainbow.png": 57921,
      "./firecracker_red.png": 57926,
      "./firecracker_white.png": 57928,
      "./firecracker_yellow.png": 57935,
      "./fish_fillet.png": 57938,
      "./fish_n_chips.png": 57944,
      "./flashlight.png": 57951,
      "./floor_creator.png": 57959,
      "./fluid_pipe.png": 57967,
      "./flywheel.png": 57971,
      "./focus_lens.png": 57977,
      "./football.png": 57983,
      "./frag_grenade.png": 57987,
      "./fried_rice.png": 57990,
      "./frost_golem_spawn_orb.png": 57993,
      "./frost_golem_spawner_block_icon.png": 58e3,
      "./frost_herring.png": 58004,
      "./frost_rod.png": 58007,
      "./frost_shard.png": 58011,
      "./frost_skeleton_spawn_orb.png": 58017,
      "./frost_skeleton_spawner_block_icon.png": 58026,
      "./frost_wolf_eel.png": 58034,
      "./frost_wraith_spawn_orb.png": 58036,
      "./frost_wraith_spawner_block_icon.png": 58038,
      "./frost_zombie_spawn_orb.png": 58045,
      "./frost_zombie_spawner_block_icon.png": 58053,
      "./frostpaint_notie.png": 58058,
      "./frozen_grenadier.png": 58062,
      "./fur.png": 58066,
      "./fur_armour_2.png": 58071,
      "./fur_chestplate.png": 58074,
      "./furnace.png": 58082,
      "./geo_armour_2.png": 58085,
      "./geo_boots.png": 58091,
      "./geo_bow.png": 58094,
      "./geo_bow_charging_2.png": 58099,
      "./geo_bow_charging_3.png": 58105,
      "./geo_bow_charging_4.png": 58108,
      "./geo_chestplate.png": 58115,
      "./geo_club.png": 58117,
      "./geo_crossbow.png": 58122,
      "./geo_crossbow_charged.png": 58129,
      "./geo_crossbow_charging_2.png": 58133,
      "./geo_crossbow_charging_3.png": 58139,
      "./geo_crossbow_charging_4.png": 58144,
      "./geo_dagger.png": 58148,
      "./geo_gauntlets.png": 58155,
      "./geo_helmet.png": 58161,
      "./geo_leggings.png": 58167,
      "./geo_mace.png": 58172,
      "./geo_shard.png": 58181,
      "./geo_spear.png": 58189,
      "./geo_staff.png": 58198,
      "./geo_sword.png": 58201,
      "./geo_whip.png": 58204,
      "./giant_grouper.png": 58211,
      "./giant_moray.png": 58218,
      "./giant_stingray.png": 58221,
      "./giant_trevally.png": 58223,
      "./glacial_lanternfish.png": 58225,
      "./glacial_silverfish.png": 58230,
      "./glistering_melon_slice.png": 58233,
      "./glistering_watermelon_slice.png": 58242,
      "./glow_dust.png": 58247,
      "./glowing_mushroom.png": 58255,
      "./glowing_soup.png": 58258,
      "./gold_antlers_icon.png": 58263,
      "./gold_armour_2.png": 58270,
      "./gold_blade.png": 58274,
      "./gold_boomerang.png": 58277,
      "./gold_bow.png": 58282,
      "./gold_bow_charging_2.png": 58291,
      "./gold_bow_charging_3.png": 58294,
      "./gold_bow_charging_4.png": 58297,
      "./gold_carrot.png": 58299,
      "./gold_club.png": 58308,
      "./gold_coin.png": 58312,
      "./gold_crop.png": 58317,
      "./gold_crossbow.png": 58325,
      "./gold_crossbow_charged.png": 58328,
      "./gold_crossbow_charging_2.png": 58331,
      "./gold_crossbow_charging_3.png": 58334,
      "./gold_crossbow_charging_4.png": 58336,
      "./gold_dagger.png": 58341,
      "./gold_enchanting_table.png": 58348,
      "./gold_fragment.png": 58355,
      "./gold_goofy_golem_spawn_orb.png": 58357,
      "./gold_goofy_golem_spawner_block_icon.png": 58363,
      "./gold_grit.png": 58365,
      "./gold_guard.png": 58374,
      "./gold_guardian_spawn_orb.png": 58381,
      "./gold_guardian_spawner_block_icon.png": 58390,
      "./gold_handle.png": 58392,
      "./gold_ingot.png": 58399,
      "./gold_key.png": 58406,
      "./gold_mace.png": 58409,
      "./gold_plate.png": 58418,
      "./gold_spear.png": 58427,
      "./gold_trophy.png": 58433,
      "./gold_watermelon_stag_spawn_orb.png": 58440,
      "./gold_watermelon_stag_spawner_block_icon.png": 58444,
      "./gold_whip.png": 58446,
      "./golden_axe.png": 58454,
      "./golden_boots.png": 58461,
      "./golden_chestplate.png": 58470,
      "./golden_gauntlets.png": 58478,
      "./golden_helmet.png": 58486,
      "./golden_hoe.png": 58491,
      "./golden_leggings.png": 58498,
      "./golden_lucky_clover.png": 58504,
      "./golden_mahseer.png": 58513,
      "./golden_pickaxe.png": 58516,
      "./golden_shovel.png": 58522,
      "./golden_sword.png": 58529,
      "./goldheart_engine.png": 58531,
      "./golem_eye.png": 58533,
      "./golem_pickaxe.png": 58540,
      "./gorilla_spawn_orb.png": 58542,
      "./gorilla_spawner_block_icon.png": 58545,
      "./graphite.png": 58547,
      "./grass_snapper.png": 58549,
      "./gray_balloon.png": 58553,
      "./gray_bed.png": 58558,
      "./gray_heavy_paintball_gun.png": 58563,
      "./gray_kart.png": 58567,
      "./gray_paint_bow.png": 58570,
      "./gray_paint_bow_charging_2.png": 58579,
      "./gray_paint_bow_charging_3.png": 58585,
      "./gray_paint_bow_charging_4.png": 58592,
      "./gray_paintball.png": 58597,
      "./gray_paintball_gun.png": 58605,
      "./gray_popup_tower.png": 58607,
      "./gray_strongbed.png": 58610,
      "./green_balloon.png": 58612,
      "./green_bed.png": 58619,
      "./green_directional_arrow.png": 58626,
      "./green_heavy_paintball_gun.png": 58634,
      "./green_kart.png": 58643,
      "./green_paint_bow.png": 58650,
      "./green_paint_bow_charging_2.png": 58653,
      "./green_paint_bow_charging_3.png": 58661,
      "./green_paint_bow_charging_4.png": 58664,
      "./green_paintball.png": 58668,
      "./green_paintball_gun.png": 58675,
      "./green_popup_tower.png": 58680,
      "./green_strongbed.png": 58687,
      "./greenfin_loach.png": 58690,
      "./grenade_launcher.png": 58695,
      "./grey_directional_arrow.png": 58698,
      "./hang_glider.png": 58702,
      "./hang_glider_diamond.png": 58708,
      "./hang_glider_gold.png": 58712,
      "./hang_glider_iron.png": 58721,
      "./haste_arrow.png": 58726,
      "./haste_potion.png": 58732,
      "./hatchetfish.png": 58741,
      "./heal_arrow.png": 58744,
      "./heal_potion.png": 58748,
      "./heat_exchanger.png": 58756,
      "./heat_resistance_arrow.png": 58758,
      "./heat_resistance_potion.png": 58766,
      "./heatwarp_flounder.png": 58768,
      "./homing_beacon.png": 58776,
      "./horse_painting.png": 58779,
      "./horse_spawn_orb.png": 58783,
      "./horse_spawner_block_icon.png": 58787,
      "./hovercraft.png": 58796,
      "./ice_bridge.png": 58802,
      "./ice_spined_notothenia.png": 58809,
      "./iceball.png": 58813,
      "./iceshelf_skate.png": 58820,
      "./icy_sculpin.png": 58824,
      "./inactive_radar.png": 58827,
      "./instant_damage_arrow.png": 58831,
      "./instant_damage_potion.png": 58834,
      "./invisibility_arrow.png": 58836,
      "./invisibility_potion.png": 58844,
      "./iron_armour_2.png": 58852,
      "./iron_axe.png": 58860,
      "./iron_blade.png": 58868,
      "./iron_boomerang.png": 58877,
      "./iron_boots.png": 58884,
      "./iron_bow.png": 58893,
      "./iron_bow_charging_2.png": 58899,
      "./iron_bow_charging_3.png": 58905,
      "./iron_bow_charging_4.png": 58909,
      "./iron_chestplate.png": 58912,
      "./iron_club.png": 58919,
      "./iron_crossbow.png": 58926,
      "./iron_crossbow_charged.png": 58934,
      "./iron_crossbow_charging_2.png": 58937,
      "./iron_crossbow_charging_3.png": 58943,
      "./iron_crossbow_charging_4.png": 58951,
      "./iron_dagger.png": 58954,
      "./iron_enchanting_table.png": 58956,
      "./iron_fragment.png": 58959,
      "./iron_gauntlets.png": 58964,
      "./iron_goofy_golem_spawn_orb.png": 58970,
      "./iron_goofy_golem_spawner_block_icon.png": 58978,
      "./iron_grit.png": 58983,
      "./iron_guard.png": 58987,
      "./iron_guardian_spawn_orb.png": 58989,
      "./iron_guardian_spawner_block_icon.png": 58997,
      "./iron_hammer.png": 59006,
      "./iron_handle.png": 59014,
      "./iron_helmet.png": 59023,
      "./iron_hoe.png": 59026,
      "./iron_ingot.png": 59030,
      "./iron_key.png": 59038,
      "./iron_ladder.png": 59047,
      "./iron_leggings.png": 59049,
      "./iron_mace.png": 59057,
      "./iron_pickaxe.png": 59060,
      "./iron_plate.png": 59065,
      "./iron_shovel.png": 59073,
      "./iron_spear.png": 59080,
      "./iron_sword.png": 59089,
      "./iron_trapdoor.png": 59096,
      "./iron_trophy.png": 59102,
      "./iron_whip.png": 59106,
      "./jet_armour_2.png": 59115,
      "./jetpack.png": 59124,
      "./job_application.png": 59130,
      "./john_beef.png": 59134,
      "./jump_arrow.png": 59139,
      "./jump_pad.png": 59141,
      "./jump_pad_strong.png": 59148,
      "./jump_pad_super.png": 59155,
      "./jump_pad_weak.png": 59164,
      "./jump_potion.png": 59166,
      "./jungle_door.png": 59175,
      "./jungle_fence.png": 59181,
      "./jungle_fence_gate.png": 59184,
      "./jungle_item_pedestal.png": 59186,
      "./jungle_rod.png": 59188,
      "./jungle_sapling.png": 59194,
      "./jungle_spinefish.png": 59201,
      "./jungle_tall_grass_bottom.png": 59210,
      "./jungle_tall_grass_top.png": 59213,
      "./jungle_trapdoor.png": 59215,
      "./kingly_amethite_armour_2.png": 59222,
      "./kingly_amethite_boots.png": 59225,
      "./kingly_amethite_chestplate.png": 59227,
      "./kingly_amethite_gauntlets.png": 59231,
      "./kingly_amethite_helmet.png": 59235,
      "./kingly_amethite_leggings.png": 59238,
      "./kingly_diamond_armour_2.png": 59240,
      "./kingly_diamond_boots.png": 59248,
      "./kingly_diamond_chestplate.png": 59252,
      "./kingly_diamond_gauntlets.png": 59255,
      "./kingly_diamond_helmet.png": 59263,
      "./kingly_diamond_leggings.png": 59265,
      "./knight_heart.png": 59272,
      "./knight_sword.png": 59277,
      "./knockback_arrow.png": 59282,
      "./knockback_potion.png": 59287,
      "./ladder_aspen.png": 59295,
      "./ladder_cedar.png": 59297,
      "./ladder_cherry.png": 59302,
      "./ladder_jungle.png": 59305,
      "./ladder_mango.png": 59307,
      "./ladder_maple.png": 59313,
      "./ladder_palm.png": 59317,
      "./ladder_pear.png": 59321,
      "./ladder_pine.png": 59323,
      "./ladder_plum.png": 59328,
      "./ladder_spectral.png": 59330,
      "./landing_pad.png": 59338,
      "./lantern.png": 59347,
      "./lava_bucket.png": 59353,
      "./lavaflow_trout.png": 59355,
      "./lavawake_slopefish.png": 59364,
      "./leaf_bed.png": 59369,
      "./leather.png": 59374,
      "./lettuce.png": 59378,
      "./lettuce_plant_stage0.png": 59382,
      "./lettuce_plant_stage1.png": 59391,
      "./lettuce_plant_stage2.png": 59395,
      "./light_blue_balloon.png": 59404,
      "./light_blue_bed.png": 59411,
      "./light_blue_car.png": 59414,
      "./light_blue_directional_arrow.png": 59422,
      "./light_blue_heavy_paintball_gun.png": 59425,
      "./light_blue_kart.png": 59434,
      "./light_blue_paint_bow.png": 59437,
      "./light_blue_paint_bow_charging_2.png": 59444,
      "./light_blue_paint_bow_charging_3.png": 59451,
      "./light_blue_paint_bow_charging_4.png": 59453,
      "./light_blue_paintball.png": 59455,
      "./light_blue_paintball_gun.png": 59464,
      "./light_blue_popup_tower.png": 59473,
      "./light_blue_strongbed.png": 59479,
      "./light_gray_balloon.png": 59487,
      "./light_gray_bed.png": 59495,
      "./light_gray_heavy_paintball_gun.png": 59498,
      "./light_gray_kart.png": 59502,
      "./light_gray_paint_bow.png": 59511,
      "./light_gray_paint_bow_charging_2.png": 59513,
      "./light_gray_paint_bow_charging_3.png": 59517,
      "./light_gray_paint_bow_charging_4.png": 59524,
      "./light_gray_paintball.png": 59529,
      "./light_gray_paintball_gun.png": 59535,
      "./light_gray_popup_tower.png": 59537,
      "./light_gray_strongbed.png": 59542,
      "./light_grey_directional_arrow.png": 59544,
      "./lily_of_the_valley.png": 59549,
      "./lily_pad.png": 59553,
      "./lime_balloon.png": 59557,
      "./lime_bed.png": 59561,
      "./lime_directional_arrow.png": 59567,
      "./lime_heavy_paintball_gun.png": 59574,
      "./lime_kart.png": 59576,
      "./lime_paint_bow.png": 59579,
      "./lime_paint_bow_charging_2.png": 59587,
      "./lime_paint_bow_charging_3.png": 59592,
      "./lime_paint_bow_charging_4.png": 59600,
      "./lime_paintball.png": 59606,
      "./lime_paintball_gun.png": 59612,
      "./lime_popup_tower.png": 59618,
      "./lime_strongbed.png": 59627,
      "./logic_board.png": 59636,
      "./lucky_armour_upgrade.png": 59640,
      "./lucky_bomb.png": 59642,
      "./lucky_clover.png": 59649,
      "./lucky_rod.png": 59653,
      "./lucky_sword_upgrade.png": 59659,
      "./lucky_tools_upgrade.png": 59663,
      "./lunite.png": 59666,
      "./machine_hull.png": 59675,
      "./machine_parts.png": 59677,
      "./magenta_balloon.png": 59679,
      "./magenta_bed.png": 59684,
      "./magenta_directional_arrow.png": 59688,
      "./magenta_heavy_paintball_gun.png": 59697,
      "./magenta_kart.png": 59701,
      "./magenta_paint_bow.png": 59710,
      "./magenta_paint_bow_charging_2.png": 59712,
      "./magenta_paint_bow_charging_3.png": 59715,
      "./magenta_paint_bow_charging_4.png": 59722,
      "./magenta_paintball.png": 59731,
      "./magenta_paintball_gun.png": 59738,
      "./magenta_popup_tower.png": 59743,
      "./magenta_strongbed.png": 59749,
      "./magma_golem_spawn_orb.png": 59753,
      "./magma_golem_spawner_block_icon.png": 59756,
      "./magma_sardinella.png": 59762,
      "./magma_trout.png": 59768,
      "./magmasteel.png": 59775,
      "./magmasteel_armour_2.png": 59777,
      "./magmasteel_axe.png": 59784,
      "./magmasteel_blade.png": 59787,
      "./magmasteel_boomerang.png": 59789,
      "./magmasteel_boots.png": 59795,
      "./magmasteel_bow.png": 59797,
      "./magmasteel_bow_charging_2.png": 59799,
      "./magmasteel_bow_charging_3.png": 59807,
      "./magmasteel_bow_charging_4.png": 59809,
      "./magmasteel_chestplate.png": 59818,
      "./magmasteel_club.png": 59822,
      "./magmasteel_crossbow.png": 59827,
      "./magmasteel_crossbow_charged.png": 59834,
      "./magmasteel_crossbow_charging_2.png": 59839,
      "./magmasteel_crossbow_charging_3.png": 59846,
      "./magmasteel_crossbow_charging_4.png": 59854,
      "./magmasteel_dagger.png": 59859,
      "./magmasteel_fragment.png": 59867,
      "./magmasteel_gauntlets.png": 59872,
      "./magmasteel_guard.png": 59880,
      "./magmasteel_handle.png": 59884,
      "./magmasteel_helmet.png": 59893,
      "./magmasteel_hoe.png": 59901,
      "./magmasteel_leggings.png": 59909,
      "./magmasteel_mace.png": 59918,
      "./magmasteel_pickaxe.png": 59925,
      "./magmasteel_shovel.png": 59931,
      "./magmasteel_spear.png": 59937,
      "./magmasteel_sword.png": 59945,
      "./magmasteel_whip.png": 59948,
      "./magmaward_fuel.png": 59955,
      "./mangler_catfish.png": 59960,
      "./mango.png": 59963,
      "./mango_door.png": 59972,
      "./mango_fence.png": 59974,
      "./mango_fence_gate.png": 59983,
      "./mango_item_pedestal.png": 59988,
      "./mango_sapling.png": 59993,
      "./mango_trapdoor.png": 60002,
      "./mangrove_herring.png": 60009,
      "./maple_door.png": 60017,
      "./maple_fence.png": 60020,
      "./maple_fence_gate.png": 60028,
      "./maple_planks_bridge.png": 60035,
      "./maple_sapling.png": 60044,
      "./maple_trapdoor.png": 60046,
      "./marbled_moray_cod.png": 60055,
      "./master_rod.png": 60058,
      "./meaty_bone.png": 60063,
      "./medkit.png": 60070,
      "./melon_seeds.png": 60079,
      "./melon_slice.png": 60088,
      "./merger_pipe.png": 60096,
      "./messy_stone_bridge.png": 60099,
      "./military_armour_2.png": 60106,
      "./military_boots.png": 60108,
      "./military_chestplate.png": 60113,
      "./military_gauntlets.png": 60117,
      "./military_helmet.png": 60119,
      "./military_leggings.png": 60126,
      "./milk_arrow.png": 60129,
      "./milk_potion.png": 60131,
      "./mining_grenade.png": 60134,
      "./mining_helmet.png": 60139,
      "./mining_yield_arrow.png": 60142,
      "./mining_yield_potion.png": 60148,
      "./mireback_carp.png": 60153,
      "./mob_cage.png": 60157,
      "./mob_cage_filled.png": 60161,
      "./mob_capsule.png": 60167,
      "./mob_capsule_filled.png": 60170,
      "./mob_catcher.png": 60172,
      "./molten_cog.png": 60177,
      "./molten_lotella_cod.png": 60185,
      "./molten_magma_rod.png": 60192,
      "./moonfish.png": 60201,
      "./moonlit_boomerang_fish.png": 60203,
      "./moonstone.png": 60211,
      "./moonstone_axe.png": 60220,
      "./moonstone_blade.png": 60223,
      "./moonstone_boomerang.png": 60227,
      "./moonstone_club.png": 60235,
      "./moonstone_dagger.png": 60239,
      "./moonstone_dust.png": 60247,
      "./moonstone_fragment.png": 60251,
      "./moonstone_goofy_golem_spawn_orb.png": 60254,
      "./moonstone_goofy_golem_spawner_block_icon.png": 60256,
      "./moonstone_guard.png": 60262,
      "./moonstone_guardian_spawn_orb.png": 60271,
      "./moonstone_guardian_spawner_block_icon.png": 60276,
      "./moonstone_handle.png": 60278,
      "./moonstone_mace.png": 60287,
      "./moonstone_orb.png": 60295,
      "./moonstone_pickaxe.png": 60298,
      "./moonstone_pupfish.png": 60301,
      "./moonstone_remote.png": 60307,
      "./moonstone_remote_explosive.png": 60310,
      "./moonstone_spear.png": 60318,
      "./moonstone_sword.png": 60321,
      "./moonstone_trophy.png": 60326,
      "./moonstone_whip.png": 60328,
      "./mossback_arapaima.png": 60334,
      "./motor.png": 60336,
      "./mudbelly_tilapia.png": 60341,
      "./mudline_perch.png": 60344,
      "./murk_stingray.png": 60346,
      "./murkborne_ray.png": 60351,
      "./mushroom_soup.png": 60360,
      "./mythic_rod.png": 60365,
      "./name_tag.png": 60369,
      "./needlefish.png": 60376,
      "./net.png": 60380,
      "./netherite_hoe.png": 60386,
      "./night_vision_soup.png": 60395,
      "./nomai_moray.png": 60399,
      "./northern_wolffish.png": 60408,
      "./noticeboard.png": 60414,
      "./noticeboard_standing.png": 60422,
      "./noticeboard_standing_bottom.png": 60428,
      "./noticeboard_standing_bottom_left.png": 60436,
      "./noticeboard_standing_bottom_right.png": 60443,
      "./noticeboard_standing_left.png": 60452,
      "./noticeboard_standing_leg.png": 60458,
      "./noticeboard_standing_right.png": 60466,
      "./noticeboard_standing_top.png": 60471,
      "./noticeboard_standing_top_left.png": 60477,
      "./noticeboard_standing_top_right.png": 60485,
      "./noticeboard_wall.png": 60487,
      "./noticeboard_wall_bottom.png": 60489,
      "./noticeboard_wall_bottom_left.png": 60493,
      "./noticeboard_wall_bottom_right.png": 60500,
      "./noticeboard_wall_left.png": 60509,
      "./noticeboard_wall_right.png": 60517,
      "./noticeboard_wall_top.png": 60526,
      "./noticeboard_wall_top_left.png": 60529,
      "./noticeboard_wall_top_right.png": 60531,
      "./nova_armour_2.png": 60535,
      "./nova_blade.png": 60544,
      "./nova_boots.png": 60548,
      "./nova_chestplate.png": 60552,
      "./nova_gauntlets.png": 60560,
      "./nova_helmet.png": 60566,
      "./nova_jet_armour_2.png": 60572,
      "./nova_jetpack.png": 60575,
      "./nova_leggings.png": 60583,
      "./nova_matter.png": 60587,
      "./nova_multitool.png": 60591,
      "./nova_trophy.png": 60597,
      "./nova_upgrade.png": 60603,
      "./nova_wrench.png": 60605,
      "./oak_boat.png": 60613,
      "./oarfish.png": 60622,
      "./oats.png": 60624,
      "./obsidian_boat.png": 60633,
      "./obsidian_rod.png": 60642,
      "./off_roader.png": 60648,
      "./omelette.png": 60650,
      "./onion.png": 60654,
      "./orange_balloon.png": 60663,
      "./orange_bed.png": 60671,
      "./orange_directional_arrow.png": 60679,
      "./orange_heavy_paintball_gun.png": 60687,
      "./orange_kart.png": 60696,
      "./orange_paint_bow.png": 60704,
      "./orange_paint_bow_charging_2.png": 60711,
      "./orange_paint_bow_charging_3.png": 60716,
      "./orange_paint_bow_charging_4.png": 60721,
      "./orange_paintball.png": 60727,
      "./orange_paintball_gun.png": 60733,
      "./orange_popup_tower.png": 60738,
      "./orange_strongbed.png": 60740,
      "./orange_tulip.png": 60744,
      "./ore_lens.png": 60747,
      "./oxeye_daisy.png": 60756,
      "./paleice_rockcod.png": 60761,
      "./palm_door.png": 60770,
      "./palm_fence.png": 60773,
      "./palm_fence_gate.png": 60775,
      "./palm_item_pedestal.png": 60782,
      "./palm_sapling.png": 60787,
      "./palm_trapdoor.png": 60792,
      "./parsnip_plant_stage0.png": 60795,
      "./parsnip_plant_stage1.png": 60800,
      "./parsnip_plant_stage2.png": 60804,
      "./pear.png": 60810,
      "./pear_door.png": 60817,
      "./pear_fence.png": 60819,
      "./pear_fence_gate.png": 60824,
      "./pear_item_pedestal.png": 60828,
      "./pear_sapling.png": 60832,
      "./pear_trapdoor.png": 60834,
      "./pearlescent_moonfish.png": 60838,
      "./pebble.png": 60846,
      "./permafrost_halibut.png": 60854,
      "./pig_painting.png": 60862,
      "./pig_spawn_orb.png": 60866,
      "./pig_spawner_block_icon.png": 60871,
      "./pine_door.png": 60878,
      "./pine_fence.png": 60884,
      "./pine_fence_gate.png": 60889,
      "./pine_fern.png": 60896,
      "./pine_grass.png": 60900,
      "./pine_item_pedestal.png": 60904,
      "./pine_sapling.png": 60910,
      "./pine_trapdoor.png": 60915,
      "./pink_balloon.png": 60918,
      "./pink_bed.png": 60926,
      "./pink_directional_arrow.png": 60929,
      "./pink_heavy_paintball_gun.png": 60937,
      "./pink_kart.png": 60945,
      "./pink_paint_bow.png": 60948,
      "./pink_paint_bow_charging_2.png": 60950,
      "./pink_paint_bow_charging_3.png": 60956,
      "./pink_paint_bow_charging_4.png": 60963,
      "./pink_paintball.png": 60972,
      "./pink_paintball_gun.png": 60975,
      "./pink_popup_tower.png": 60979,
      "./pink_strongbed.png": 60986,
      "./pink_tulip.png": 60991,
      "./pipe.png": 60996,
      "./pithead.png": 61003,
      "./placeholder.png": 61007,
      "./plum.png": 61011,
      "./plum_door.png": 61017,
      "./plum_fence.png": 61025,
      "./plum_fence_gate.png": 61027,
      "./plum_item_pedestal.png": 61034,
      "./plum_sapling.png": 61041,
      "./plum_trapdoor.png": 61047,
      "./plutonium_pellet.png": 61054,
      "./pocket_terminal.png": 61062,
      "./poison.png": 61065,
      "./poison_arrow.png": 61071,
      "./polarflash_electron.png": 61076,
      "./poop.png": 61081,
      "./poppy.png": 61089,
      "./porridge.png": 61092,
      "./potato_plant_stage0.png": 61100,
      "./potato_plant_stage1.png": 61103,
      "./potato_plant_stage2.png": 61109,
      "./potato_seeds.png": 61118,
      "./potion.png": 61123,
      "./potion_table.png": 61132,
      "./power_coupler.png": 61138,
      "./pull_charm.png": 61147,
      "./pumpkin_pie.png": 61152,
      "./pumpkin_seeds.png": 61160,
      "./purple_balloon.png": 61164,
      "./purple_bed.png": 61170,
      "./purple_directional_arrow.png": 61178,
      "./purple_heavy_paintball_gun.png": 61186,
      "./purple_kart.png": 61195,
      "./purple_paint_bow.png": 61199,
      "./purple_paint_bow_charging_2.png": 61207,
      "./purple_paint_bow_charging_3.png": 61215,
      "./purple_paint_bow_charging_4.png": 61224,
      "./purple_paintball.png": 61227,
      "./purple_paintball_gun.png": 61236,
      "./purple_popup_tower.png": 61244,
      "./purple_strongbed.png": 61246,
      "./pyroclast_eel.png": 61249,
      "./pyroscale_grouper.png": 61253,
      "./radiant_spark.png": 61261,
      "./rainbow_guppy.png": 61269,
      "./raw_beef.png": 61271,
      "./raw_copper.png": 61279,
      "./raw_gold.png": 61286,
      "./raw_iron.png": 61290,
      "./raw_mutton.png": 61293,
      "./raw_porkchop.png": 61301,
      "./raw_potato.png": 61309,
      "./raw_uranium.png": 61315,
      "./raw_venison.png": 61322,
      "./raw_voltite.png": 61328,
      "./reactor_blueprint.png": 61332,
      "./recall_beacon.png": 61334,
      "./red_balloon.png": 61341,
      "./red_bed.png": 61348,
      "./red_cabbage.png": 61355,
      "./red_cabbage_stage0.png": 61358,
      "./red_cabbage_stage1.png": 61360,
      "./red_cabbage_stage2.png": 61368,
      "./red_directional_arrow.png": 61375,
      "./red_heavy_paintball_gun.png": 61382,
      "./red_kart.png": 61390,
      "./red_mushroom.png": 61393,
      "./red_paint_bow.png": 61400,
      "./red_paint_bow_charging_2.png": 61406,
      "./red_paint_bow_charging_3.png": 61414,
      "./red_paint_bow_charging_4.png": 61423,
      "./red_paintball.png": 61431,
      "./red_paintball_gun.png": 61437,
      "./red_popup_tower.png": 61446,
      "./red_pyreside.png": 61455,
      "./red_snapper.png": 61461,
      "./red_strongbed.png": 61469,
      "./red_tulip.png": 61477,
      "./reedglass_minnow.png": 61481,
      "./reef_sardine.png": 61488,
      "./regen_arrow.png": 61491,
      "./regen_potion.png": 61499,
      "./reinforced_ball.png": 61506,
      "./reinforced_pebble.png": 61508,
      "./relay_coil.png": 61510,
      "./rice.png": 61519,
      "./rice_seeds.png": 61522,
      "./rimesnouted_lancetfish.png": 61530,
      "./roast_dinner.png": 61536,
      "./rocket.png": 61538,
      "./root_flounder.png": 61541,
      "./root_perch.png": 61547,
      "./rotslab_eel.png": 61550,
      "./rotten_brain.png": 61554,
      "./rotten_flesh.png": 61556,
      "./rpg.png": 61560,
      "./rubellite.png": 61565,
      "./rubellite_armour_2.png": 61569,
      "./rubellite_axe.png": 61577,
      "./rubellite_boomerang.png": 61582,
      "./rubellite_boots.png": 61590,
      "./rubellite_bow.png": 61599,
      "./rubellite_bow_charging_2.png": 61604,
      "./rubellite_bow_charging_3.png": 61612,
      "./rubellite_bow_charging_4.png": 61615,
      "./rubellite_chestplate.png": 61623,
      "./rubellite_club.png": 61628,
      "./rubellite_crossbow.png": 61636,
      "./rubellite_crossbow_charged.png": 61645,
      "./rubellite_crossbow_charging_2.png": 61647,
      "./rubellite_crossbow_charging_3.png": 61649,
      "./rubellite_crossbow_charging_4.png": 61655,
      "./rubellite_dagger.png": 61657,
      "./rubellite_fragment.png": 61664,
      "./rubellite_gauntlets.png": 61670,
      "./rubellite_helmet.png": 61674,
      "./rubellite_hoe.png": 61680,
      "./rubellite_leggings.png": 61689,
      "./rubellite_mace.png": 61692,
      "./rubellite_pickaxe.png": 61694,
      "./rubellite_shovel.png": 61698,
      "./rubellite_spear.png": 61703,
      "./rubellite_sword.png": 61707,
      "./rubellite_whip.png": 61714,
      "./rust_scad.png": 61717,
      "./rusty_rod.png": 61719,
      "./saddle.png": 61727,
      "./salad.png": 61733,
      "./salvaging_table.png": 61741,
      "./sandbelly_piranha.png": 61744,
      "./sanguine_armour_2.png": 61748,
      "./sanguine_blade.png": 61751,
      "./sanguine_boots.png": 61759,
      "./sanguine_bow.png": 61765,
      "./sanguine_bow_charging_2.png": 61771,
      "./sanguine_bow_charging_3.png": 61774,
      "./sanguine_bow_charging_4.png": 61778,
      "./sanguine_chestplate.png": 61780,
      "./sanguine_club.png": 61783,
      "./sanguine_crossbow.png": 61792,
      "./sanguine_crossbow_charged.png": 61794,
      "./sanguine_crossbow_charging_2.png": 61797,
      "./sanguine_crossbow_charging_3.png": 61806,
      "./sanguine_crossbow_charging_4.png": 61812,
      "./sanguine_dagger.png": 61817,
      "./sanguine_gauntlets.png": 61823,
      "./sanguine_guard.png": 61825,
      "./sanguine_handle.png": 61833,
      "./sanguine_helmet.png": 61836,
      "./sanguine_leggings.png": 61842,
      "./sanguine_mace.png": 61847,
      "./sanguine_shard.png": 61849,
      "./sanguine_spear.png": 61854,
      "./sanguine_staff.png": 61863,
      "./sanguine_sword.png": 61867,
      "./sanguine_whip.png": 61876,
      "./scorched_sunfish.png": 61884,
      "./scored_dace.png": 61892,
      "./seahorse.png": 61900,
      "./serpentite.png": 61902,
      "./serpentite_armour_2.png": 61909,
      "./serpentite_axe.png": 61911,
      "./serpentite_boomerang.png": 61915,
      "./serpentite_boots.png": 61922,
      "./serpentite_bow.png": 61925,
      "./serpentite_bow_charging_2.png": 61930,
      "./serpentite_bow_charging_3.png": 61936,
      "./serpentite_bow_charging_4.png": 61945,
      "./serpentite_chestplate.png": 61951,
      "./serpentite_club.png": 61957,
      "./serpentite_crossbow.png": 61964,
      "./serpentite_crossbow_charged.png": 61969,
      "./serpentite_crossbow_charging_2.png": 61977,
      "./serpentite_crossbow_charging_3.png": 61983,
      "./serpentite_crossbow_charging_4.png": 61989,
      "./serpentite_dagger.png": 61994,
      "./serpentite_fragment.png": 61998,
      "./serpentite_gauntlets.png": 62e3,
      "./serpentite_helmet.png": 62005,
      "./serpentite_hoe.png": 62009,
      "./serpentite_leggings.png": 62011,
      "./serpentite_mace.png": 62014,
      "./serpentite_pickaxe.png": 62019,
      "./serpentite_shovel.png": 62027,
      "./serpentite_spear.png": 62034,
      "./serpentite_sword.png": 62037,
      "./serpentite_whip.png": 62039,
      "./shadeback_ray.png": 62042,
      "./shadow_rose.png": 62044,
      "./shears.png": 62052,
      "./sheep_painting.png": 62060,
      "./sheep_spawn_orb.png": 62068,
      "./sheep_spawner_block_icon.png": 62077,
      "./sheeps_milk.png": 62086,
      "./shield_arrow.png": 62095,
      "./shield_potion.png": 62104,
      "./showcase.png": 62106,
      "./siege_core.png": 62115,
      "./silver_dragonfish.png": 62120,
      "./sky_pack.png": 62128,
      "./slime_spawn_orb.png": 62136,
      "./slime_spawner_block_icon.png": 62138,
      "./slime_trail.png": 62141,
      "./slowness_arrow.png": 62150,
      "./slowness_potion.png": 62157,
      "./small_cactus.png": 62163,
      "./small_pod_black_icon.png": 62167,
      "./small_pod_blue_icon.png": 62169,
      "./small_pod_brown_icon.png": 62171,
      "./small_pod_cyan_icon.png": 62178,
      "./small_pod_gray_icon.png": 62187,
      "./small_pod_green_icon.png": 62193,
      "./small_pod_light_blue_icon.png": 62200,
      "./small_pod_light_gray_icon.png": 62204,
      "./small_pod_lime_icon.png": 62210,
      "./small_pod_magenta_icon.png": 62214,
      "./small_pod_orange_icon.png": 62221,
      "./small_pod_pink_icon.png": 62225,
      "./small_pod_purple_icon.png": 62232,
      "./small_pod_red_icon.png": 62238,
      "./small_pod_white_icon.png": 62240,
      "./small_pod_yellow_icon.png": 62248,
      "./smoke_grenade.png": 62257,
      "./snakehead.png": 62264,
      "./snow_haddock.png": 62270,
      "./snowball.png": 62274,
      "./snowdash.png": 62282,
      "./solar_panel.png": 62288,
      "./spectral_armour_2.png": 62297,
      "./spectral_boots.png": 62301,
      "./spectral_bow.png": 62310,
      "./spectral_bow_charging_2.png": 62312,
      "./spectral_bow_charging_3.png": 62321,
      "./spectral_bow_charging_4.png": 62323,
      "./spectral_chestplate.png": 62326,
      "./spectral_club.png": 62334,
      "./spectral_crossbow.png": 62341,
      "./spectral_crossbow_charged.png": 62343,
      "./spectral_crossbow_charging_2.png": 62348,
      "./spectral_crossbow_charging_3.png": 62356,
      "./spectral_crossbow_charging_4.png": 62359,
      "./spectral_dagger.png": 62361,
      "./spectral_door.png": 62366,
      "./spectral_fence.png": 62375,
      "./spectral_fence_gate.png": 62378,
      "./spectral_gauntlets.png": 62387,
      "./spectral_grass.png": 62390,
      "./spectral_helmet.png": 62392,
      "./spectral_item_pedestal.png": 62397,
      "./spectral_leggings.png": 62403,
      "./spectral_mace.png": 62411,
      "./spectral_sapling.png": 62413,
      "./spectral_shard.png": 62418,
      "./spectral_spear.png": 62424,
      "./spectral_staff.png": 62433,
      "./spectral_sword.png": 62442,
      "./spectral_trapdoor.png": 62447,
      "./spectral_whip.png": 62453,
      "./speed_arrow.png": 62457,
      "./speed_potion.png": 62466,
      "./speed_rod.png": 62468,
      "./speedboat.png": 62471,
      "./spent_pellet.png": 62475,
      "./spiked_boots.png": 62479,
      "./spikes_diamond.png": 62486,
      "./spikes_gold.png": 62490,
      "./spikes_iron.png": 62496,
      "./spikes_kill.png": 62501,
      "./spikes_stone.png": 62503,
      "./spikes_wood.png": 62508,
      "./spined_stickleback.png": 62513,
      "./spirit_bear_spawn_orb.png": 62519,
      "./spirit_bear_spawner_block_icon.png": 62521,
      "./spirit_golem_spawn_orb.png": 62528,
      "./spirit_golem_spawner_block_icon.png": 62535,
      "./spirit_gorilla_spawn_orb.png": 62538,
      "./spirit_gorilla_spawner_block_icon.png": 62541,
      "./spirit_saddle.png": 62545,
      "./spirit_stag_spawn_orb.png": 62549,
      "./spirit_stag_spawner_block_icon.png": 62555,
      "./spirit_wolf_spawn_orb.png": 62558,
      "./spirit_wolf_spawner_block_icon.png": 62561,
      "./splash_aura_xp_potion.png": 62566,
      "./splash_brain_rot_potion.png": 62573,
      "./splash_defense_potion.png": 62578,
      "./splash_double_jump_potion.png": 62582,
      "./splash_haste_potion.png": 62584,
      "./splash_heal_potion.png": 62590,
      "./splash_heat_resistance_potion.png": 62593,
      "./splash_instant_damage_potion.png": 62601,
      "./splash_invisibility_potion.png": 62607,
      "./splash_jump_potion.png": 62610,
      "./splash_knockback_potion.png": 62615,
      "./splash_milk_potion.png": 62618,
      "./splash_mining_yield_potion.png": 62625,
      "./splash_poison.png": 62627,
      "./splash_regen_potion.png": 62631,
      "./splash_shield_potion.png": 62640,
      "./splash_slowness_potion.png": 62645,
      "./splash_speed_potion.png": 62654,
      "./splash_strength_potion.png": 62657,
      "./splash_weakness_potion.png": 62660,
      "./splash_x_ray_vision_potion.png": 62663,
      "./splitter_pipe.png": 62670,
      "./stag_spawn_orb.png": 62673,
      "./stag_spawner_block_icon.png": 62682,
      "./stalker_spawn_orb.png": 62689,
      "./stalker_spawner_block_icon.png": 62697,
      "./star_alloy.png": 62700,
      "./starbore_drill.png": 62705,
      "./steak.png": 62708,
      "./steel_bar.png": 62717,
      "./stick.png": 62726,
      "./stone_axe.png": 62728,
      "./stone_blade.png": 62732,
      "./stone_boomerang.png": 62735,
      "./stone_bow.png": 62739,
      "./stone_bow_charging_2.png": 62747,
      "./stone_bow_charging_3.png": 62752,
      "./stone_bow_charging_4.png": 62754,
      "./stone_club.png": 62759,
      "./stone_crossbow.png": 62766,
      "./stone_crossbow_charged.png": 62773,
      "./stone_crossbow_charging_2.png": 62778,
      "./stone_crossbow_charging_3.png": 62787,
      "./stone_crossbow_charging_4.png": 62789,
      "./stone_dagger.png": 62795,
      "./stone_enchanting_table.png": 62804,
      "./stone_grouper.png": 62809,
      "./stone_guard.png": 62813,
      "./stone_handle.png": 62819,
      "./stone_hoe.png": 62823,
      "./stone_key.png": 62829,
      "./stone_mace.png": 62833,
      "./stone_pickaxe.png": 62841,
      "./stone_shovel.png": 62844,
      "./stone_spear.png": 62850,
      "./stone_sword.png": 62859,
      "./stone_trophy.png": 62867,
      "./stone_whip.png": 62876,
      "./strawberry_bush_stage0.png": 62879,
      "./strawberry_bush_stage1.png": 62881,
      "./strawberry_bush_stage2.png": 62887,
      "./strength_arrow.png": 62889,
      "./strength_potion.png": 62894,
      "./string.png": 62896,
      "./strongfish_green.png": 62901,
      "./strongfish_moon.png": 62905,
      "./strongfish_red.png": 62909,
      "./stuffed_pepper.png": 62917,
      "./sturdy_rod.png": 62922,
      "./sugar_cane_plant_stage0.png": 62930,
      "./sugar_cane_plant_stage1.png": 62937,
      "./sugar_cane_plant_stage2.png": 62942,
      "./sugar_cane_plant_stage2_top.png": 62949,
      "./sumpback_carp.png": 62957,
      "./sunset_minnow.png": 62960,
      "./super_rpg.png": 62969,
      "./sushi.png": 62975,
      "./swap_orb.png": 62977,
      "./tall_grass_bottom.png": 62982,
      "./tall_grass_top.png": 62990,
      "./tallgrass.png": 62993,
      "./tangle_resistant_rod.png": 63e3,
      "./tarpon.png": 63006,
      "./teleport_heart.png": 63013,
      "./teleportation_potion.png": 63017,
      "./threadfin_bream.png": 63021,
      "./tiki_terror_spawn_orb.png": 63025,
      "./tiki_terror_spawner_block_icon.png": 63033,
      "./timed_spike_bomb.png": 63036,
      "./timed_spike_bomb_charging_2.png": 63040,
      "./timed_spike_bomb_charging_3.png": 63048,
      "./timed_spike_bomb_charging_4.png": 63050,
      "./tomato.png": 63053,
      "./tomato_plant_stage0.png": 63055,
      "./tomato_plant_stage1.png": 63057,
      "./tomato_plant_stage2.png": 63063,
      "./tomato_plant_stage2_top.png": 63065,
      "./torch.png": 63074,
      "./torch_black.png": 63082,
      "./torch_blue.png": 63085,
      "./torch_brown.png": 63087,
      "./torch_cyan.png": 63093,
      "./torch_gray.png": 63100,
      "./torch_green.png": 63106,
      "./torch_light_blue.png": 63111,
      "./torch_light_gray.png": 63117,
      "./torch_lime.png": 63126,
      "./torch_magenta.png": 63131,
      "./torch_orange.png": 63139,
      "./torch_pink.png": 63141,
      "./torch_purple.png": 63147,
      "./torch_red.png": 63152,
      "./torch_white.png": 63157,
      "./torch_yellow.png": 63166,
      "./toxin_ball.png": 63169,
      "./tri_pointed_needlefish.png": 63177,
      "./truffle.png": 63182,
      "./truffle_oil.png": 63188,
      "./unlucky_bomb.png": 63193,
      "./updraft.png": 63200,
      "./uranium_grit.png": 63204,
      "./uranium_pellet.png": 63210,
      "./veg_soup.png": 63217,
      "./vein_breaker.png": 63219,
      "./vending_machine.png": 63225,
      "./vine.png": 63230,
      "./vine_coloured.png": 63234,
      "./void_net.png": 63237,
      "./volcanic_catfish.png": 63243,
      "./volcanic_semperi.png": 63250,
      "./voltite_cell.png": 63253,
      "./voltite_dust.png": 63260,
      "./voltplate_armour_2.png": 63263,
      "./voltplate_boots.png": 63268,
      "./voltplate_chestplate.png": 63277,
      "./voltplate_gauntlets.png": 63280,
      "./voltplate_helmet.png": 63287,
      "./voltplate_leggings.png": 63295,
      "./warped_trapdoor.png": 63298,
      "./water_bottle.png": 63307,
      "./water_bucket.png": 63316,
      "./watermelon_seeds.png": 63323,
      "./watermelon_slice.png": 63326,
      "./weakness_arrow.png": 63334,
      "./weakness_potion.png": 63341,
      "./wheat.png": 63349,
      "./wheat_seeds.png": 63356,
      "./wheatfish.png": 63360,
      "./wheel.png": 63362,
      "./white_balloon.png": 63370,
      "./white_bed.png": 63378,
      "./white_directional_arrow.png": 63381,
      "./white_heavy_paintball_gun.png": 63387,
      "./white_kart.png": 63390,
      "./white_paint_bow.png": 63397,
      "./white_paint_bow_charging_2.png": 63404,
      "./white_paint_bow_charging_3.png": 63412,
      "./white_paint_bow_charging_4.png": 63420,
      "./white_paintball.png": 63429,
      "./white_paintball_gun.png": 63433,
      "./white_popup_tower.png": 63441,
      "./white_strongbed.png": 63448,
      "./white_tulip.png": 63453,
      "./wildcat_painting.png": 63462,
      "./wildcat_spawn_orb.png": 63466,
      "./wildcat_spawner_block_icon.png": 63474,
      "./wire.png": 63481,
      "./wireless_terminal.png": 63488,
      "./wolf_painting.png": 63490,
      "./wolf_spawn_orb.png": 63492,
      "./wolf_spawner_block_icon.png": 63496,
      "./wood_armour_2.png": 63499,
      "./wood_blade.png": 63507,
      "./wood_boomerang.png": 63516,
      "./wood_boots.png": 63521,
      "./wood_bow.png": 63527,
      "./wood_bow_charging_2.png": 63533,
      "./wood_bow_charging_3.png": 63540,
      "./wood_bow_charging_4.png": 63549,
      "./wood_chestplate.png": 63554,
      "./wood_club.png": 63557,
      "./wood_crossbow.png": 63563,
      "./wood_crossbow_charged.png": 63566,
      "./wood_crossbow_charging_2.png": 63570,
      "./wood_crossbow_charging_3.png": 63574,
      "./wood_crossbow_charging_4.png": 63583,
      "./wood_dagger.png": 63586,
      "./wood_enchanting_table.png": 63591,
      "./wood_gauntlets.png": 63598,
      "./wood_guard.png": 63606,
      "./wood_handle.png": 63613,
      "./wood_helmet.png": 63620,
      "./wood_leggings.png": 63626,
      "./wood_mace.png": 63631,
      "./wood_spear.png": 63635,
      "./wood_trophy.png": 63637,
      "./wood_whip.png": 63644,
      "./wooden_axe.png": 63647,
      "./wooden_hoe.png": 63654,
      "./wooden_key.png": 63659,
      "./wooden_pickaxe.png": 63662,
      "./wooden_shovel.png": 63664,
      "./wooden_sword.png": 63671,
      "./workbench.png": 63674,
      "./worldbuilder_wand.png": 63679,
      "./wrench.png": 63684,
      "./x_ray_vision_arrow.png": 63690,
      "./x_ray_vision_potion.png": 63695,
      "./yellow_balloon.png": 63700,
      "./yellow_bed.png": 63708,
      "./yellow_directional_arrow.png": 63717,
      "./yellow_heavy_paintball_gun.png": 63726,
      "./yellow_kart.png": 63730,
      "./yellow_paint_bow.png": 63734,
      "./yellow_paint_bow_charging_2.png": 63738,
      "./yellow_paint_bow_charging_3.png": 63744,
      "./yellow_paint_bow_charging_4.png": 63749,
      "./yellow_paintball.png": 63755,
      "./yellow_paintball_gun.png": 63759,
      "./yellow_popup_tower.png": 63767,
      "./yellow_strongbed.png": 63771,
      "./yoghurt_pot.png": 63774
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 54332
  },
  54341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/67.62839e273a0fc3a86f63.png"
  },
  54343: (ee, ie, He) => {
    ee.exports = He.p + "static/media/67_projectile_base.201c2d8b5b2d32289d80.png"
  },
  54352: (ee, ie, He) => {
    ee.exports = He.p + "static/media/67_projectile_boosted.7d8fc377ab3a4a287960.png"
  },
  54360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/AK-47.27c9881e31ad3fd0f09d.png"
  },
  54365: (ee, ie, He) => {
    ee.exports = He.p + "static/media/AWP.65002f3eed059eb5130c.png"
  },
  54374: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Block-19.fcde956ee0399391254f.png"
  },
  54379: (ee, ie, He) => {
    ee.exports = He.p + "static/media/DMR.bfbde1e9ec566324b991.png"
  },
  54384: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Deagle.60693f793892e8d23eac.png"
  },
  54391: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Double-barreled.332ea55ee72062150d29.png"
  },
  54397: (ee, ie, He) => {
    ee.exports = He.p + "static/media/FMR.bce4346f08189d4ad111.png"
  },
  54399: (ee, ie, He) => {
    ee.exports = He.p + "static/media/GPMG.b8a1a52019ec26729056.png"
  },
  54401: (ee, ie, He) => {
    ee.exports = He.p + "static/media/M16.24940f6ab1842ad4d034.png"
  },
  54410: (ee, ie, He) => {
    ee.exports = He.p + "static/media/M1911.c41cb2ee638283dd565b.png"
  },
  54419: (ee, ie, He) => {
    ee.exports = He.p + "static/media/MP40.725f6455c4675b73c26d.png"
  },
  54423: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mini Izu.c4e3cf1c83bce9e7a9ad.png"
  },
  54426: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Minigun.41f9b10fa7e75d845aec.png"
  },
  54431: (ee, ie, He) => {
    ee.exports = He.p + "static/media/SKAR.005f47e9d4ecd4815dbd.png"
  },
  54434: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Striker-12.0eb1fde4042128062403.png"
  },
  54439: (ee, ie, He) => {
    ee.exports = He.p + "static/media/TAR-21.0632ac49a8c6f03795e0.png"
  },
  54445: (ee, ie, He) => {
    ee.exports = He.p + "static/media/VSR.e8cbb051f9152883d2f4.png"
  },
  54452: (ee, ie, He) => {
    ee.exports = He.p + "static/media/abyss_carp.b93187dd5d21e3640f7e.png"
  },
  54459: (ee, ie, He) => {
    ee.exports = He.p + "static/media/acorn.bbb456e3efe32d4adde8.png"
  },
  54465: (ee, ie, He) => {
    ee.exports = He.p + "static/media/acorn_jelly.a2ca9a5203b330f01a84.png"
  },
  54474: (ee, ie, He) => {
    ee.exports = He.p + "static/media/active_radar.0a1766a59f22f388d74b.png"
  },
  54483: (ee, ie, He) => {
    ee.exports = He.p + "static/media/advanced_coupler.981ccdef5f708c7c93e0.png"
  },
  54491: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aether_minnow.caaea0fe967c6db076fe.png"
  },
  54497: (ee, ie, He) => {
    ee.exports = He.p + "static/media/allium.f1d3e796bfcb373fe1b5.png"
  },
  54505: (ee, ie, He) => {
    ee.exports = He.p + "static/media/alpha_moon_strongfish.e83593b8707295ec4e48.png"
  },
  54508: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite.5ba52600581a348691d6.png"
  },
  54516: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_armour_2.0e47cecc1db6ef176712.png"
  },
  54524: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_axe.e773e62f59f49e35de61.png"
  },
  54526: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_boomerang.6f95686d5d0e668679f7.png"
  },
  54534: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_boots.6256b0e068aef38cfd3f.png"
  },
  54537: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_bow.50ec0b8fe85dbd9816a1.png"
  },
  54543: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_bow_charging_2.adc653dd96a39cb7c6c7.png"
  },
  54548: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_bow_charging_3.71358b7d3bbea9cc466d.png"
  },
  54556: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_bow_charging_4.a9ad5d71a3924af76897.png"
  },
  54564: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_chestplate.2d5738ca23dc7ebe4347.png"
  },
  54573: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_club.5c4728c817114ae61eab.png"
  },
  54580: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_crossbow.0e6d464e31fed81da7cc.png"
  },
  54583: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_crossbow_charged.a8c5b6fbd25aa3682832.png"
  },
  54588: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_crossbow_charging_2.ccc6fd26665c29cbf9ad.png"
  },
  54591: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_crossbow_charging_3.ee77d352da5ae801fe41.png"
  },
  54598: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_crossbow_charging_4.bd08f255a9cb37588555.png"
  },
  54602: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_dagger.9dfe00c4de3c44592666.png"
  },
  54604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_fragment.5c003d9405ba7cb45634.png"
  },
  54606: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_gauntlets.3aee3a846a2e8118b4f9.png"
  },
  54615: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_helmet.a2635a1640dc3cb60cb9.png"
  },
  54619: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_hoe.27d751e64b5b641dd03a.png"
  },
  54628: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_leggings.3d53e6b70de9e088c6c7.png"
  },
  54632: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_mace.0f047161964042489f89.png"
  },
  54638: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_pickaxe.deb7543dcd9347cddeb6.png"
  },
  54641: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_shovel.5f470ae08098506d6a64.png"
  },
  54645: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_spear.98b74ed27d3917a3a0d3.png"
  },
  54652: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_sword.cc105503e5fbbeea43f8.png"
  },
  54660: (ee, ie, He) => {
    ee.exports = He.p + "static/media/amethite_whip.6984edbba207d7a282df.png"
  },
  54669: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ammo.c6a8c60a869398c11bca.png"
  },
  54678: (ee, ie, He) => {
    ee.exports = He.p + "static/media/apple.9363f9bedbe4d68a277a.png"
  },
  54686: (ee, ie, He) => {
    ee.exports = He.p + "static/media/arc_caster.e98c099c46e9014fc87c.png"
  },
  54690: (ee, ie, He) => {
    ee.exports = He.p + "static/media/armored_car.c3844bb5d461435b8c09.png"
  },
  54697: (ee, ie, He) => {
    ee.exports = He.p + "static/media/armoured_searobin.c1e264ea51c91fc9715c.png"
  },
  54701: (ee, ie, He) => {
    ee.exports = He.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  54709: (ee, ie, He) => {
    ee.exports = He.p + "static/media/artisan_axe.54541da820b877a0b45a.png"
  },
  54718: (ee, ie, He) => {
    ee.exports = He.p + "static/media/artisan_bench.ac22bfdb3ea2760277c5.png"
  },
  54721: (ee, ie, He) => {
    ee.exports = He.p + "static/media/artisan_shears.81679bb498e80a380d5c.png"
  },
  54727: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ash_lionfish.fa9d5497f5cd3b4881be.png"
  },
  54735: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_door.2fb487c2b53ddc652b14.png"
  },
  54743: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_fence.b511700d79750ff47250.png"
  },
  54749: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_fence_gate.46078b329955bea14e38.png"
  },
  54755: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_item_pedestal.0222ae82b12f0a89b7ab.png"
  },
  54760: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_sapling.906f0c9e09a403e3a2e2.png"
  },
  54762: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aspen_trapdoor.6d80b430f1ea4900ac7e.png"
  },
  54769: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_armour_2.2a9ba71797b4fecc7117.png"
  },
  54777: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_blade.b3a6b07e16ffd0c542d3.png"
  },
  54782: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_boots.dcee00449f739124e024.png"
  },
  54785: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_bow.c00df3b6fe51442fbb5c.png"
  },
  54790: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_bow_charging_2.3bbdf7947e080555484e.png"
  },
  54794: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_bow_charging_3.20aea1a7e3ed266aa59b.png"
  },
  54798: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_bow_charging_4.6f70b2179c751ab59410.png"
  },
  54804: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_chestplate.1fce9b027e87d3b74434.png"
  },
  54808: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_club.bb5410ece49bd44acc7f.png"
  },
  54814: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_crossbow.894ad757435c81442631.png"
  },
  54822: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_crossbow_charged.d30c175e14df0bcba40f.png"
  },
  54827: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_crossbow_charging_2.bcee533172cd10ba0cf8.png"
  },
  54836: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_crossbow_charging_3.2b649dea9ea2a1461ee7.png"
  },
  54843: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_crossbow_charging_4.727678ef4ed3ca7b9006.png"
  },
  54847: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_dagger.b15299bc6b27f0bcf0f7.png"
  },
  54856: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_gauntlets.5dfc1f1d3789fb009dfa.png"
  },
  54865: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_guard.9bfd31213dc957c5c06f.png"
  },
  54871: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_handle.b5aee0598a7042b3b405.png"
  },
  54878: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_helmet.84145fa970c33c85a659.png"
  },
  54880: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_leggings.e0a5e2c4a54f4edf52a8.png"
  },
  54885: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_mace.d8e231e41151f97a8488.png"
  },
  54894: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_shard.a44d59c7ec4302ac7068.png"
  },
  54901: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_spear.a407f6d9247f5fafd613.png"
  },
  54906: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_staff.c40c1d9c05ae0460503a.png"
  },
  54913: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_sword.e20dbd57eb90f5d46cb7.png"
  },
  54918: (ee, ie, He) => {
    ee.exports = He.p + "static/media/astral_whip.9f4462abda9ac2c75eca.png"
  },
  54925: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aura_xp_arrow.be64018a038a2f8d313f.png"
  },
  54930: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aura_xp_fragment.28ddaee308f28f2031eb.png"
  },
  54938: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aura_xp_orb.bd1466398b39720c7e72.png"
  },
  54942: (ee, ie, He) => {
    ee.exports = He.p + "static/media/aura_xp_potion.11186bace88936c68f99.png"
  },
  54947: (ee, ie, He) => {
    ee.exports = He.p + "static/media/auto_miner.4d25d823dfe7fb90e517.png"
  },
  54950: (ee, ie, He) => {
    ee.exports = He.p + "static/media/autominer_lunite.ceef5ac4dee892f9e0a8.png"
  },
  54953: (ee, ie, He) => {
    ee.exports = He.p + "static/media/autumn_fern.7add7b408d40f9b1198a.png"
  },
  54960: (ee, ie, He) => {
    ee.exports = He.p + "static/media/azure_bluet.3bb3fd07608ff837c974.png"
  },
  54969: (ee, ie, He) => {
    ee.exports = He.p + "static/media/baked_potato.3db7976b06657923183b.png"
  },
  54978: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ball.02fa601ffed71f1e133a.png"
  },
  54984: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bamboo_catfish.13139b1c89c37f2ffc7f.png"
  },
  54993: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banana.88b2d1063a1c204bc99e.png"
  },
  54995: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banana_seeds.06511961eb9bb212622f.png"
  },
  55004: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bandolier.72d57075f80a38ea53de.png"
  },
  55013: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_black.818736adadb49a716c11.png"
  },
  55016: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_blue.38c28dcca835541e6ab2.png"
  },
  55023: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_brown.3e62a10b43f0b5e5dd30.png"
  },
  55026: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_cyan.b04dcb2c2cd4c987f023.png"
  },
  55032: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_draugr.8fac0cc71ba6aaa3cdda.png"
  },
  55041: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_gray.fea3fbe6b5f41dcb5390.png"
  },
  55049: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_green.266be2fd89314d38e05a.png"
  },
  55052: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_light_blue.d7e8a246cd46a21a298c.png"
  },
  55061: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_light_gray.6b03fcb4b6678989eaef.png"
  },
  55068: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_lime.06850d7bf46b45280bcd.png"
  },
  55076: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_magenta.6ac6c30cbae08d482d6a.png"
  },
  55082: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_orange.d2ae112e8836a9164737.png"
  },
  55091: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_pink.e75e1acc1fccb1119678.png"
  },
  55093: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_purple.28d638b24a91a932b9ad.png"
  },
  55101: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_rainbow.9141c85ae0bbfe4bb701.png"
  },
  55107: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_red.3d9555b637b92c978255.png"
  },
  55114: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_skull.fc3206fb887990bd5c40.png"
  },
  55121: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_white.e21475c344b64a0d5c05.png"
  },
  55125: (ee, ie, He) => {
    ee.exports = He.p + "static/media/banner_yellow.7a03d4cc88250ac5a6a0.png"
  },
  55128: (ee, ie, He) => {
    ee.exports = He.p + "static/media/barefrost_toothfish.a28fded949da1a2bf965.png"
  },
  55135: (ee, ie, He) => {
    ee.exports = He.p + "static/media/barnaclejaw.c9fc7818e54ea5200344.png"
  },
  55141: (ee, ie, He) => {
    ee.exports = He.p + "static/media/basalt_pipefish.de323018a2b9465205b7.png"
  },
  55146: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bear_spawn_orb.ca7415cdacb8c04ec67c.png"
  },
  55151: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bear_spawner_block_icon.04c7f2cfb80d2a296d03.png"
  },
  55156: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beef_stew.e1fc01d28b4ab20c0a2b.png"
  },
  55160: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beetroot.e34f7ff6f89b872252fa.png"
  },
  55169: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beetroot_plant_stage0.09f896ff24f3d5065580.png"
  },
  55176: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beetroot_plant_stage1.996e6c6a559e3d4aa3d4.png"
  },
  55178: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beetroot_plant_stage2.a3310b2faba622839bdc.png"
  },
  55186: (ee, ie, He) => {
    ee.exports = He.p + "static/media/beetroot_seeds.2c1c76d24d41a032f382.png"
  },
  55193: (ee, ie, He) => {
    ee.exports = He.p + "static/media/berry_bush_stage0.09ac0a367c3abb28554e.png"
  },
  55198: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bin.c268d2ca3458c5517287.png"
  },
  55204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/biomass.c9c8ad48e8735528b26e.png"
  },
  55209: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_balloon.603c364c5460c1e96a5c.png"
  },
  55217: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_bed.14b22f160304fdbc01e1.png"
  },
  55220: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_directional_arrow.fa00ad9034d2d6087c04.png"
  },
  55223: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_heavy_paintball_gun.7be1c13ecd2f73e782e8.png"
  },
  55231: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_ice_rod.1dcb8aaba5cd5e036f6e.png"
  },
  55240: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_kart.2303d7b70af3d9d8fb0c.png"
  },
  55248: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paint_bow.fe91e1981c4e207c414e.png"
  },
  55253: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paint_bow_charging_2.a0533066f0a43a6e0f44.png"
  },
  55258: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paint_bow_charging_3.2d69e787feed862ac0f1.png"
  },
  55262: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paint_bow_charging_4.ed212034f7c399645656.png"
  },
  55268: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paintball.bc1576091e419e16a1b3.png"
  },
  55270: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_paintball_gun.72c5ceae04b2af4c55ad.png"
  },
  55279: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_popup_tower.aafc41652c7c550a434a.png"
  },
  55286: (ee, ie, He) => {
    ee.exports = He.p + "static/media/black_strongbed.78efd458d8efd5fe99cb.png"
  },
  55288: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blackfin_icefish.010f00a4348e54818e2f.png"
  },
  55290: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blackfire_fuel_cell.c063f8056e27bf1ff31e.png"
  },
  55298: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blackwater_bream.064e3d8505fe7ec73cfc.png"
  },
  55304: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blackwater_leviathan.dc4090ffaebd4321da3d.png"
  },
  55308: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blinding_pebble.86cee57c917eca70fcba.png"
  },
  55312: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_balloon.d8f548006f80841d7a96.png"
  },
  55321: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_bed.f91f7c33731ed3502084.png"
  },
  55324: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_directional_arrow.80a3b7eca966fabdec22.png"
  },
  55332: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_heavy_paintball_gun.ea1de70de71617008269.png"
  },
  55336: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_kart.3064fe5a140a28822205.png"
  },
  55345: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_orchid.e4d9386ac9e9c6724c49.png"
  },
  55352: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paint_bow.d9862158e571f13664a2.png"
  },
  55359: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paint_bow_charging_2.6d1ee0288a0e80440a5b.png"
  },
  55367: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paint_bow_charging_3.322fb113164909cd05cf.png"
  },
  55370: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paint_bow_charging_4.5905bf9f777c4f594e55.png"
  },
  55372: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paintball.07504e83e22ca56eb895.png"
  },
  55374: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_paintball_gun.8b74d5ce562f09014f05.png"
  },
  55382: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_popup_tower.642404e070e47250b940.png"
  },
  55389: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blue_strongbed.213054597a1afbb1accf.png"
  },
  55396: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blueberry_bush_stage0.6150ed5821dd05c068b5.png"
  },
  55398: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blueberry_bush_stage1.ea38cb6de20731d224ac.png"
  },
  55400: (ee, ie, He) => {
    ee.exports = He.p + "static/media/blueberry_bush_stage2.bede54c3a1fb91a0288f.png"
  },
  55406: (ee, ie, He) => {
    ee.exports = He.p + "static/media/board.f4935d5547ca3446ad51.png"
  },
  55412: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bombfish.438c2fcc6d8f17e09398.png"
  },
  55416: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bone.ee5a2122e18829dc5666.png"
  },
  55424: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bone_antlers_icon.dfa9b50ae58cc3e57d24.png"
  },
  55430: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bone_meal.ca6a158893d10fb84d6e.png"
  },
  55438: (ee, ie, He) => {
    ee.exports = He.p + "static/media/boned_sturgeon.50a9ec756b418f9a2c69.png"
  },
  55447: (ee, ie, He) => {
    ee.exports = He.p + "static/media/book.317587fcbc685d4aa5f8.png"
  },
  55454: (ee, ie, He) => {
    ee.exports = He.p + "static/media/book_page.a29b16356371d81962cd.png"
  },
  55463: (ee, ie, He) => {
    ee.exports = He.p + "static/media/boomerang_fish.d3704541002f413da54a.png"
  },
  55468: (ee, ie, He) => {
    ee.exports = He.p + "static/media/boulder_bass.0464e6ce79fe1f1240d5.png"
  },
  55471: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bouncy_bomb.9e385954b719a85635a2.png"
  },
  55475: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl.ea4011a9cc3f34f5364f.png"
  },
  55483: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl_of_cranberries_1.4ff23dc0e40685088f3f.png"
  },
  55491: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl_of_cranberries_2.3f4bc103abad5713547b.png"
  },
  55497: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl_of_cranberries_3.c1a8f1e993c65039aeeb.png"
  },
  55499: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl_of_cranberries_4.a6202fe218d5acf10bd2.png"
  },
  55506: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bowl_of_rice.bb5f428344889383b231.png"
  },
  55515: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brain_rot_arrow.1628bae8638d17427a62.png"
  },
  55524: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brain_rot_potion.1a2c534c963b40800d7d.png"
  },
  55529: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bread.9a0fb2b1c46547fee601.png"
  },
  55531: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brimstone_spikefish.1db7dfee46ba7b43d573.png"
  },
  55536: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brood_sac.2837cd701889971abd63.png"
  },
  55540: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_balloon.256345da8b71a8b44002.png"
  },
  55544: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_bed.ccc7ee5617906042c0b8.png"
  },
  55548: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_directional_arrow.e0f9108e1112e7ca1edc.png"
  },
  55557: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_heavy_paintball_gun.78c9faac8ccc06c79ad0.png"
  },
  55561: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_kart.82586c127f42091e8bd9.png"
  },
  55569: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_mushroom.6a75c1838db883657f2b.png"
  },
  55573: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paint_bow.a55f3183f34d5134ddaf.png"
  },
  55575: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paint_bow_charging_2.fd85515f3f5d16f42f4d.png"
  },
  55578: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paint_bow_charging_3.629e0f69fca45879c833.png"
  },
  55581: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paint_bow_charging_4.6be32859dd6a7f58f675.png"
  },
  55584: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paintball.7caf4e11a0e5658b3822.png"
  },
  55591: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_paintball_gun.81e78ca9c820c766abd2.png"
  },
  55595: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_popup_tower.cca4c7872df79b836623.png"
  },
  55598: (ee, ie, He) => {
    ee.exports = He.p + "static/media/brown_strongbed.70729035d13fdfbece33.png"
  },
  55600: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bucket.0df9f85c6608fd771ec4.png"
  },
  55604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bull_shark.92b01036742e721ea522.png"
  },
  55607: (ee, ie, He) => {
    ee.exports = He.p + "static/media/camel_painting.5fc6c7b08c26a46e95d0.png"
  },
  55609: (ee, ie, He) => {
    ee.exports = He.p + "static/media/camel_painting_option2.2cc002b7efffd6a68d0a.png"
  },
  55618: (ee, ie, He) => {
    ee.exports = He.p + "static/media/camel_spawn_orb.af60c0fa82ad098244f6.png"
  },
  55624: (ee, ie, He) => {
    ee.exports = He.p + "static/media/camel_spawner_block_icon.287231fb8ae88d955652.png"
  },
  55626: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carbon_rod.f1d23b202a47ab0ae6b2.png"
  },
  55631: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_black_icon.76a2d6717222a976716c.png"
  },
  55633: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_blue_icon.4b985d34a7c5a7702c69.png"
  },
  55639: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_brown_icon.2eb97b249c721245202a.png"
  },
  55647: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_cyan_icon.0db0f68e53995eb03ad8.png"
  },
  55650: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_gray_icon.54a16302e4a6d6c790f5.png"
  },
  55657: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_green_icon.0b3ea6144ece75ecf67f.png"
  },
  55664: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_light_blue_icon.081af431cc38bfddaf70.png"
  },
  55667: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_light_gray_icon.1e445cc8c769d686cd60.png"
  },
  55674: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_lime_icon.896b27adf960c7555566.png"
  },
  55676: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_magenta_icon.1a0aff2c3660ab151845.png"
  },
  55682: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_orange_icon.264bfe7704261eae6b02.png"
  },
  55691: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_pink_icon.3276e7a1fbcda6820535.png"
  },
  55700: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_purple_icon.3c670887b037b798e460.png"
  },
  55702: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_red_icon.f1dd48c2608ced9e1de8.png"
  },
  55704: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_white_icon.173554c3d1cd298f6611.png"
  },
  55707: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carpet_yellow_icon.ebfe28101b348f541877.png"
  },
  55712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carrot.fa66c90e9c0d1a12b3c7.png"
  },
  55714: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carrot_plant_stage0.13596177c858020a51a5.png"
  },
  55722: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carrot_plant_stage1.a7adbf6dee05cd8a8bf7.png"
  },
  55726: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carrot_plant_stage2.21b7a50f9c580224a27a.png"
  },
  55733: (ee, ie, He) => {
    ee.exports = He.p + "static/media/carrot_seeds.d8955bbf153b784d66e4.png"
  },
  55737: (ee, ie, He) => {
    ee.exports = He.p + "static/media/catnip.2d59e5f426014213097b.png"
  },
  55742: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_bear_default.7cd9e5865dc24803f4f1.png"
  },
  55751: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_camel_brown.27f2925f12017897d800.png"
  },
  55760: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_camel_default.71725cf6c8dc5da170cc.png"
  },
  55766: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_cave_golem_default.b8c07b00054864aae2bc.png"
  },
  55770: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_cave_golem_iron.d9563c3f00d914b62f73.png"
  },
  55779: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_cow_cream.d6a82bd05f3c5672ee54.png"
  },
  55785: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_cow_default.cf9d15ce8f47d0a4cd6d.png"
  },
  55789: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_crone_default.862527d61919e678ee27.png"
  },
  55791: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_deer_default.57784121d7605845877e.png"
  },
  55796: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_bare.588841c762e9917b6c59.png"
  },
  55803: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_default.1473ae1337c22be87ab4.png"
  },
  55807: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_flaking.ad9c1bf0e474c391385f.png"
  },
  55813: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_patchy.90df9849e6756c33d26c.png"
  },
  55821: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_shedding.c6f4e3d5b70ef5721b57.png"
  },
  55827: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_goofy_golem_stone.578638c4a09501610d84.png"
  },
  55829: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_diamond_guardian_default.4e515722dcd15b21a102.png"
  },
  55838: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_huntress_default.6ff709a5cb84dc5894c3.png"
  },
  55847: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_knight_default.91882beda4f1c1eb42b1.png"
  },
  55856: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_reaver_default.8075d0fccddbfd6df1d4.png"
  },
  55859: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_skeleton_default.82e96429aaa7de48bbcc.png"
  },
  55862: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_warper_default.ce427782c0043462d0e1.png"
  },
  55869: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_zombie_default.fc100ccd0531ac29f871.png"
  },
  55877: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_zombie_longHairChestplate.fc100ccd0531ac29f871.png"
  },
  55882: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_zombie_longHairClothed.fc100ccd0531ac29f871.png"
  },
  55885: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_draugr_zombie_shortHairClothed.fc100ccd0531ac29f871.png"
  },
  55892: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_fish.aa3fe0d0b44719dcf6f4.png"
  },
  55898: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_golem_default.c5ddbae8320f52b159a2.png"
  },
  55902: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_skeleton_default.103216093f03b40fb7e1.png"
  },
  55907: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_wraith_default.5d6552766aeae247c158.png"
  },
  55911: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_zombie_default.882fa10bf6bd4422cbd1.png"
  },
  55915: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_zombie_longHairChestplate.882fa10bf6bd4422cbd1.png"
  },
  55919: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_frost_zombie_shortHairClothed.882fa10bf6bd4422cbd1.png"
  },
  55928: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_bare.877ec21bd07e2944ccd8.png"
  },
  55933: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_default.15c228200e05224c3961.png"
  },
  55936: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_flaking.95a4f90c181d9eb77cd7.png"
  },
  55945: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_patchy.58b4a55034e847c364ce.png"
  },
  55950: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_shedding.54e673d6d37b38cd0613.png"
  },
  55959: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_goofy_golem_stone.0d3bd967ccc720cdae54.png"
  },
  55962: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_guardian_default.7e97ff6d0d1b3c3a7ced.png"
  },
  55967: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gold_watermelon_stag_default.ec2b879474503302bd7a.png"
  },
  55975: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_gorilla_default.0cdc320b9da45b584081.png"
  },
  55978: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_horse_black.30ca221cce746d520a88.png"
  },
  55980: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_horse_brown.ad636c90fdcf0e983332.png"
  },
  55984: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_horse_cream.536e6eaff4b951502bb7.png"
  },
  55989: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_horse_default.97896ee7e8d97427dad0.png"
  },
  55996: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_bare.494610873c3541e785a3.png"
  },
  56004: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_default.51ad0ae51e12f7b16bbc.png"
  },
  56007: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_flaking.073f85b11bd4557ae68d.png"
  },
  56009: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_patchy.9f1439c895bbbf72324f.png"
  },
  56018: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_shedding.1ab318997bcafb2107a1.png"
  },
  56021: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_goofy_golem_stone.a6e1504ce874b86c9db1.png"
  },
  56026: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_iron_guardian_default.65832274551538f7c629.png"
  },
  56032: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_magma_golem_default.200b41acfb20d945184f.png"
  },
  56036: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_bare.7335851b36038c58411c.png"
  },
  56038: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_default.e6fcbcad74b806abdfe2.png"
  },
  56044: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_flaking.8b3c876e3a92b25c0dea.png"
  },
  56053: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_patchy.4113ff805f84beb27d2f.png"
  },
  56057: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_shedding.64a0e616d85ed5185740.png"
  },
  56061: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_goofy_golem_stone.dca29930f6e6c73185de.png"
  },
  56069: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_moonstone_guardian_default.291bae7f43162a501ca6.png"
  },
  56073: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_pig_default.9e9b030b8792f12e9633.png"
  },
  56082: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_sheep_default.9f80ffb7d463ec139236.png"
  },
  56090: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_slime_default.77e9887c5e21220e28cd.png"
  },
  56097: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_spirit_bear_default.d854331b94a6a6c3281f.png"
  },
  56102: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_spirit_golem_default.a7e276541877e31f8e17.png"
  },
  56104: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_spirit_gorilla_default.fca5c1b28d1ad8b683b5.png"
  },
  56108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_spirit_stag_default.1fd5c9d04bdafdb0ff54.png"
  },
  56110: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_spirit_wolf_default.f9f2caec5d4e468d3112.png"
  },
  56114: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_stag_default.8c7cda940e35197b9cea.png"
  },
  56121: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_stalker_crimson.071dec94ef36c65d36ca.png"
  },
  56125: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_stalker_default.a4ac2a47d4f0d6a8b5a2.png"
  },
  56128: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_stalker_frost.5e84a692fae58a50035e.png"
  },
  56136: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_stalker_void.72f556e513e28072c64e.png"
  },
  56138: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_tiki_terror_default.862527d61919e678ee27.png"
  },
  56140: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_tiki_terror_titan.862527d61919e678ee27.png"
  },
  56145: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_tiki_terror_tormentor.862527d61919e678ee27.png"
  },
  56154: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_tiki_terror_tyrant.862527d61919e678ee27.png"
  },
  56161: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_black.01838f614bf27e210483.png"
  },
  56165: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_calico.3ba28fb8b5e8d5fa8b76.png"
  },
  56171: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_default.05074f71cec26dd3ae17.png"
  },
  56176: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_grey.f7d90e3d0b69277cbde7.png"
  },
  56185: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_leopard.d09a8162295442d6d8bc.png"
  },
  56192: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_siamese.ee5413d01b7e289bc7be.png"
  },
  56195: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wildcat_tabby.7de69275e1906078b734.png"
  },
  56199: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wolf_brown.3fef755ff307eb61ad9f.png"
  },
  56201: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wolf_default.e3071c1a209d428882c3.png"
  },
  56205: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wolf_grey.7cb90e2ccd6c17352bba.png"
  },
  56213: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wolf_spectral.067f5b63729d25d6e538.png"
  },
  56218: (ee, ie, He) => {
    ee.exports = He.p + "static/media/caught_wolf_white.0a3041c0fee99b16643e.png"
  },
  56227: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cauliflower_plant_stage0.ffed00c4ff1533deba0f.png"
  },
  56230: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cauliflower_plant_stage1.2297288767251660edfa.png"
  },
  56238: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cauliflower_plant_stage2.9a6c9707ad0519b6c516.png"
  },
  56245: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cave_golem_spawn_orb.0c3b341d078b94b50313.png"
  },
  56250: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cave_golem_spawner_block_icon.5ae4b5b580ab9cee378d.png"
  },
  56254: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_door.c9d27dd706d489a39d85.png"
  },
  56257: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_fence.c82fc72fc48c88a1cb34.png"
  },
  56265: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_fence_gate.d12dcf7c6cb493de91f4.png"
  },
  56270: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_item_pedestal.a835aa4a01c6ea6052bb.png"
  },
  56273: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_sapling.71dd6d4a7ffa3ec070f8.png"
  },
  56275: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cedar_trapdoor.bb0f95d5338a77882d21.png"
  },
  56277: (ee, ie, He) => {
    ee.exports = He.p + "static/media/channel_sawfish.a8e0dd1dd141aed1c9b4.png"
  },
  56283: (ee, ie, He) => {
    ee.exports = He.p + "static/media/chaos_potion.03b9d85ef9e9d285666f.png"
  },
  56290: (ee, ie, He) => {
    ee.exports = He.p + "static/media/charcoal.139fd6d1139f587a4112.png"
  },
  56294: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cheese.79269f85998ceba7a7ec.png"
  },
  56303: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry.61b056e2fc389ea5ccaa.png"
  },
  56311: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_door.c81f1b4fc12cc3d211ba.png"
  },
  56320: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_fence.f428df69a95a86188a4c.png"
  },
  56323: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_fence_gate.09bfa9ba6f1e2aa50167.png"
  },
  56326: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_item_pedestal.f325aa5dbc99bfd17e7e.png"
  },
  56332: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_sapling.ccb9b6e610a91d4fb6dc.png"
  },
  56334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cherry_trapdoor.77fc7017605673015c70.png"
  },
  56342: (ee, ie, He) => {
    ee.exports = He.p + "static/media/chicken.d3553ab994d0cae5cb1a.png"
  },
  56345: (ee, ie, He) => {
    ee.exports = He.p + "static/media/chili_pepper.d5a361360ab6e38c5101.png"
  },
  56350: (ee, ie, He) => {
    ee.exports = He.p + "static/media/chili_pepper_seeds.3fcbfd7b28c8b1a4b428.png"
  },
  56352: (ee, ie, He) => {
    ee.exports = He.p + "static/media/choir_bell.f92095c4a6cafbaac1a4.png"
  },
  56354: (ee, ie, He) => {
    ee.exports = He.p + "static/media/chunk_map.16e69aa5c056d42fddd9.png"
  },
  56356: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cinder_leviathan.a1ec4aaa114de0593fed.png"
  },
  56363: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_early_day.f30b772e51b119142798.png"
  },
  56371: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_early_night.9d6f5af632e09c972280.png"
  },
  56379: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_late_day.f203db044b4f32f3b580.png"
  },
  56383: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_late_night.875570d629374006bfcc.png"
  },
  56391: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_midday.b8f7ab111515f7884c1f.png"
  },
  56394: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_midnight.b18bf9fe64c20351ed93.png"
  },
  56401: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_sunrise.64c2bdddfa0b77b9f5fc.png"
  },
  56405: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_gold_sunset.024fff1def831e5b0c45.png"
  },
  56412: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_early_day.1c9010dcb93d0c5f2031.png"
  },
  56416: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_early_night.b4fbb93004c0553d79eb.png"
  },
  56420: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_late_day.b8a8b6a5c32ca78a8c5e.png"
  },
  56425: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_late_night.19946400a81f6fb44309.png"
  },
  56427: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_midday.7675291f5172284962ec.png"
  },
  56436: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_midnight.a3a8430237b0300636da.png"
  },
  56445: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_sunrise.c1c265bc86f56f3abc43.png"
  },
  56454: (ee, ie, He) => {
    ee.exports = He.p + "static/media/clock_wood_sunset.bdffb51c25f9c531f114.png"
  },
  56460: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coal.21d1759e918ec09aa62a.png"
  },
  56464: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coastal_mullet.701eeed95ece82410f0f.png"
  },
  56472: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cobweb.9e0d381641ba6a1f1d53.png"
  },
  56481: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coconut.43d66e9345918fc2c8c5.png"
  },
  56487: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coelacanth.9d9256590d7ec6ba09d1.png"
  },
  56490: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coffee_plant_stage0.7290920f2d912fde0bed.png"
  },
  56494: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coffee_plant_stage1.9380477ec9217fde3744.png"
  },
  56496: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coffee_plant_stage2.7c8f282e573a965e4177.png"
  },
  56498: (ee, ie, He) => {
    ee.exports = He.p + "static/media/coleslaw.7a72cb0bebbfa33ccbc6.png"
  },
  56500: (ee, ie, He) => {
    ee.exports = He.p + "static/media/comet_beacon.3632437003762d5cb98b.png"
  },
  56502: (ee, ie, He) => {
    ee.exports = He.p + "static/media/comet_core.53ef16c6dfaae8c087be.png"
  },
  56504: (ee, ie, He) => {
    ee.exports = He.p + "static/media/comet_shard.f41581bc24976237aee2.png"
  },
  56506: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass.15dd6421a603d8b0f8a0.png"
  },
  56508: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_10.c0657eda38f7664625aa.png"
  },
  56511: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_11.d307ede41fc4057823d2.png"
  },
  56517: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_12.d723bd09e6ec34c57893.png"
  },
  56522: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_2.c6dc2134b1e001c98acc.png"
  },
  56527: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_3.0339f6933bcae905f15b.png"
  },
  56532: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_4.9b929de88e8696188a3c.png"
  },
  56538: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_5.a813d7071ea6934ee32b.png"
  },
  56543: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_6.56f4ac855759b6b3b3c8.png"
  },
  56548: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_7.2c330963d36c81aa6f1c.png"
  },
  56550: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_8.f87513f2d071965080c2.png"
  },
  56555: (ee, ie, He) => {
    ee.exports = He.p + "static/media/compass_dir_9.57209fca8382770b7477.png"
  },
  56558: (ee, ie, He) => {
    ee.exports = He.p + "static/media/containment_plate.75df1be2b228621f1f34.png"
  },
  56565: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cooked_mutton.eb2bc777a569c7424533.png"
  },
  56573: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cooked_porkchop.352fa3aec1a92ab48900.png"
  },
  56582: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cooked_venison.23b474963d09f1aca910.png"
  },
  56589: (ee, ie, He) => {
    ee.exports = He.p + "static/media/copper_bar.219e7e275a7f98f631bc.png"
  },
  56597: (ee, ie, He) => {
    ee.exports = He.p + "static/media/copper_grit.2cbdbb67458dc7ea648c.png"
  },
  56600: (ee, ie, He) => {
    ee.exports = He.p + "static/media/copper_wire.719b4670842b569d6a47.png"
  },
  56604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/core_tier_2.f80c4727c8878ab249b1.png"
  },
  56609: (ee, ie, He) => {
    ee.exports = He.p + "static/media/core_tier_3.2e11c8073f0371d6d4a5.png"
  },
  56614: (ee, ie, He) => {
    ee.exports = He.p + "static/media/core_tier_4.faaa36e8452f0f92f43f.png"
  },
  56617: (ee, ie, He) => {
    ee.exports = He.p + "static/media/core_tier_5.67e7021bb3eae0676a0a.png"
  },
  56626: (ee, ie, He) => {
    ee.exports = He.p + "static/media/corn.4b4efdaff081fdb6b3aa.png"
  },
  56634: (ee, ie, He) => {
    ee.exports = He.p + "static/media/corn_seeds.41214aa863b3d0203ef7.png"
  },
  56638: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cornbread.17792c739a6f0c900897.png"
  },
  56641: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cornflower.5dffa4efb19990928255.png"
  },
  56646: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cotton.5761ba78dc8ddafb482c.png"
  },
  56655: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cotton_seeds.62f77cfe073d7b102fd8.png"
  },
  56661: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cow_painting.b91f71cd3feb5c8e124b.png"
  },
  56668: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cow_spawn_orb.745970909fcc3fce36ab.png"
  },
  56672: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cow_spawner_block_icon.0fd2772216b9f89cb12a.png"
  },
  56675: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cows_milk.2605e0091dc3ed1dce5e.png"
  },
  56683: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cracked_coconut.0bebf2f9722cd3a88ec7.png"
  },
  56685: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cranberries.e85fa023d5dba0070b67.png"
  },
  56688: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crimson_trapdoor.b74415b0fdb626b96182.png"
  },
  56693: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crone_spawn_orb.d3aea312527843c14f86.png"
  },
  56697: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crone_spawner_block_icon.400df784d38b77ac0de8.png"
  },
  56699: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crowned_flame_angelfish.9c18849d8e90919879fe.png"
  },
  56707: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crystal.ac2a6aa379c7ce8f2e0e.png"
  },
  56712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/crystalized_wheatfish.2d17537cecbcdaf48789.png"
  },
  56714: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursed_rod.09b64e3ffae62b3cfee1.png"
  },
  56719: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_armour_2.bd71382a6ea0688f18a2.png"
  },
  56723: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_boots.95de4c8477eb0797b99c.png"
  },
  56727: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_chestplate.4ce00be4be7a3b96b252.png"
  },
  56732: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_gauntlets.66879e2fe982f564a50a.png"
  },
  56738: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_helmet.bd0135d814c1629f3bed.png"
  },
  56744: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cursemetal_leggings.019b95c35db17e3a59ed.png"
  },
  56751: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_balloon.67547c00f2bc2d3be22d.png"
  },
  56758: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_bed.b586ba5a6fc324316d1a.png"
  },
  56763: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_directional_arrow.52f0a2044a86671d96c8.png"
  },
  56768: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_heavy_paintball_gun.f342bafff52a58c943e2.png"
  },
  56774: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_kart.931532faa4eca95b8465.png"
  },
  56777: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paint_bow.7a57fc9dc4334e3e0d77.png"
  },
  56782: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paint_bow_charging_2.ea6a34de5da2fef7aa22.png"
  },
  56785: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paint_bow_charging_3.a984355e4a198d991861.png"
  },
  56787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paint_bow_charging_4.4cbf068ad19879fa8d74.png"
  },
  56789: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paintball.4b1dc564dc08b7af6a16.png"
  },
  56798: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_paintball_gun.79cbfc23705e9cd82c10.png"
  },
  56805: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_popup_tower.7a3624e39235ce4dfb38.png"
  },
  56814: (ee, ie, He) => {
    ee.exports = He.p + "static/media/cyan_strongbed.3d08fe8f235867b12db1.png"
  },
  56823: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dandelion.1f8c4b42cb75491d1dbf.png"
  },
  56825: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dangling_rope.2b27641448e521483717.png"
  },
  56832: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dangling_vine.f08e2a28f962e60cfae9.png"
  },
  56835: (ee, ie, He) => {
    ee.exports = He.p + "static/media/darter.2bfce12c688cc9948900.png"
  },
  56843: (ee, ie, He) => {
    ee.exports = He.p + "static/media/darter_shadow.765db8d48ff09a87c241.png"
  },
  56847: (ee, ie, He) => {
    ee.exports = He.p + "static/media/date_pudding.b9f579a1edeed6b3ed56.png"
  },
  56850: (ee, ie, He) => {
    ee.exports = He.p + "static/media/date_pudding_option2.8343c6e61d56790a2bdf.png"
  },
  56856: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dates.da25e849d596ef458a0f.png"
  },
  56865: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dates_option2.de8e35602c4b4866cb87.png"
  },
  56870: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dead_bush.1ba169f3ecbdd9546b12.png"
  },
  56875: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deep_sea_rod.4c1f837b0dabb783f400.png"
  },
  56883: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deepbite_drill_tip.0615cb967b9e836a04f7.png"
  },
  56889: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deepwater_lanternfish.948e4a7634b17d8f5fd9.png"
  },
  56896: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deer_painting.255a0b317f4ec6453c88.png"
  },
  56900: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deer_spawn_orb.664093a15d6de0843e38.png"
  },
  56909: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deer_spawner_block_icon.0bb788c2e3863ee54eb3.png"
  },
  56914: (ee, ie, He) => {
    ee.exports = He.p + "static/media/defense_arrow.8a3081467fd2af5d7660.png"
  },
  56919: (ee, ie, He) => {
    ee.exports = He.p + "static/media/defense_potion.5dc66ffce163c3b4ab2e.png"
  },
  56924: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_coal.03f5c182c25bc72452a6.png"
  },
  56933: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_copper.cfebabbdcf63c7f29a66.png"
  },
  56936: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_gold.7115a03cc67ab9228a9a.png"
  },
  56942: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_iron.322761bff40028718f1e.png"
  },
  56945: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_stone.63aa928c795bcb281671.png"
  },
  56951: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_uranium.f9f086975d0fd309ba4f.png"
  },
  56955: (ee, ie, He) => {
    ee.exports = He.p + "static/media/deposit_seed_voltite.b934d6e66f4d3c25fae1.png"
  },
  56963: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond.e73337b4e54cf84018b6.png"
  },
  56967: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_armour_2.20d63d007ec61bd30d6f.png"
  },
  56970: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_axe.787e32dea15c7649dcaf.png"
  },
  56976: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_blade.29c6596c25352097390d.png"
  },
  56981: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_boomerang.5d6ff3034ad1ee000ace.png"
  },
  56983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_boots.26bb55e1c9cd7de5bcfd.png"
  },
  56986: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_bow.7f815aa7f7c907501d3a.png"
  },
  56993: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_bow_charging_2.6a3c92f3a7a597e80ae2.png"
  },
  57002: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_bow_charging_3.dac6a3531dca169d5fd0.png"
  },
  57005: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_bow_charging_4.fa85bfb48d2236ef98fd.png"
  },
  57007: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_chestplate.25af4a27446f360ce602.png"
  },
  57011: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_club.d0db1247eb184f29caec.png"
  },
  57017: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_crossbow.87ecfd746ebf2050ad39.png"
  },
  57026: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_crossbow_charged.6035ac683676799af18f.png"
  },
  57034: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_crossbow_charging_2.059bebea65c4fa3add63.png"
  },
  57041: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_crossbow_charging_3.55ac0933b2832f6f20af.png"
  },
  57045: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_crossbow_charging_4.854f39e4a96039483870.png"
  },
  57053: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_dagger.75659ab2c27642ecf4cb.png"
  },
  57057: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_enchanting_table.0e20709ec4860a19afaa.png"
  },
  57066: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_fragment.e5586e9e2e38ca70d904.png"
  },
  57075: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_gauntlets.9f18d4534942d835ed59.png"
  },
  57080: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_goofy_golem_spawn_orb.5c9fd77750871ddd7b7e.png"
  },
  57083: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_goofy_golem_spawner_block_icon.5234a0ee41ed437b814a.png"
  },
  57086: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_guard.ccd32e76e592f8e6bcf0.png"
  },
  57090: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_guardian_spawn_orb.8aefb9da3b7a173f271b.png"
  },
  57096: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_guardian_spawner_block_icon.2292564eda1acc3a4ff2.png"
  },
  57099: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_handle.4ac655851050031f6705.png"
  },
  57107: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_helmet.a53e283761a93a12897c.png"
  },
  57111: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_hoe.4d7eabb6652e934c8793.png"
  },
  57116: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_key.fdfdc2cd71e1addbb18b.png"
  },
  57121: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_leggings.464b586972e7362e9ca5.png"
  },
  57128: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_mace.740395f1cb4e4627897c.png"
  },
  57137: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_pickaxe.75ffc1f84c05b9290798.png"
  },
  57146: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_shovel.f8c3d5b299accea9dcc5.png"
  },
  57151: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_spear.aa713ca908a28e846c36.png"
  },
  57154: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_sword.45d7d3bf6d095e4e9695.png"
  },
  57156: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_trophy.8fe902fb1c9a3a9dc773.png"
  },
  57158: (ee, ie, He) => {
    ee.exports = He.p + "static/media/diamond_whip.7a3f642ee7a75ff8ca10.png"
  },
  57166: (ee, ie, He) => {
    ee.exports = He.p + "static/media/doom_crest.983579ab5f1169a500d1.png"
  },
  57170: (ee, ie, He) => {
    ee.exports = He.p + "static/media/doom_rivet.5c1508b72d46de522879.png"
  },
  57172: (ee, ie, He) => {
    ee.exports = He.p + "static/media/double_jump_arrow.76b44b06049bd14e2aac.png"
  },
  57177: (ee, ie, He) => {
    ee.exports = He.p + "static/media/double_jump_potion.e736d8c38f75c4d34117.png"
  },
  57185: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_huntress_spawn_orb.84bd50948399502d7b94.png"
  },
  57192: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_huntress_spawner_block_icon.70577217f220e088d46e.png"
  },
  57194: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_knight_spawn_orb.7f4048b89bc326d20411.png"
  },
  57200: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_knight_spawner_block_icon.3d10203eb008e7041e79.png"
  },
  57206: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_reaver_spawn_orb.90a72f3055b9aa8fb9b2.png"
  },
  57214: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_reaver_spawner_block_icon.2eb80b9bc7f256056e34.png"
  },
  57223: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_rod.7620dcdf08941482031d.png"
  },
  57229: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_skeleton_spawn_orb.cd116730f75c2f754087.png"
  },
  57235: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_skeleton_spawner_block_icon.6e4fdfd1890402d1ef74.png"
  },
  57238: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_warper_spawn_orb.fea637bb48a501d2e670.png"
  },
  57241: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_warper_spawner_block_icon.59d743b1aec7670d88e0.png"
  },
  57248: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_zombie_spawn_orb.d780a1b546098bf28b32.png"
  },
  57251: (ee, ie, He) => {
    ee.exports = He.p + "static/media/draugr_zombie_spawner_block_icon.625ff671f050fd5c218a.png"
  },
  57255: (ee, ie, He) => {
    ee.exports = He.p + "static/media/driftice_capelin.c65ca5d40b6a9f5e8484.png"
  },
  57262: (ee, ie, He) => {
    ee.exports = He.p + "static/media/driftwood_catfish.f2534b81e743c8ac3a7c.png"
  },
  57270: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dusk_moss.6be595a1ea0a9a721fe4.png"
  },
  57278: (ee, ie, He) => {
    ee.exports = He.p + "static/media/eagle_ray.69c6cfd4a6e1184483cb.png"
  },
  57281: (ee, ie, He) => {
    ee.exports = He.p + "static/media/egg.6adcb39c775a1671b15e.png"
  },
  57288: (ee, ie, He) => {
    ee.exports = He.p + "static/media/eldertide_leviathan.cc0288d48361b25239a3.png"
  },
  57294: (ee, ie, He) => {
    ee.exports = He.p + "static/media/electric_eel.0d3a88d8a9d23744b100.png"
  },
  57297: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ellie_fish.a21528de50b484e057c0.png"
  },
  57300: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ember_chub.3b4bf3d1ba16a82599ab.png"
  },
  57308: (ee, ie, He) => {
    ee.exports = He.p + "static/media/embermark_wrasse.6c94b717540c538a7077.png"
  },
  57310: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_armor_slot_boots.94765e97fa7403ba9317.png"
  },
  57315: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_armor_slot_chestplate.f0d796410317d676b6d4.png"
  },
  57319: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_armor_slot_gauntlets.3671194be050df2d7a56.png"
  },
  57325: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_armor_slot_helmet.a8b63df4e5bfd221ea03.png"
  },
  57329: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_armor_slot_leggings.39c07edcb32577b80553.png"
  },
  57336: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_bottle.60d13380b891a8da150a.png"
  },
  57341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_fuel_cell.cbf3b4c875571e9d288b.png"
  },
  57345: (ee, ie, He) => {
    ee.exports = He.p + "static/media/empty_spawner_block_icon.8402ec2f09aebfeca8d8.png"
  },
  57348: (ee, ie, He) => {
    ee.exports = He.p + "static/media/eviota_vader.7a2141029be901fec9e4.png"
  },
  57351: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_black.912e6d81a87868f245f9.png"
  },
  57360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_blue.2c7190a02ad28ed4b19e.png"
  },
  57364: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_brown.422415f544e32592911f.png"
  },
  57369: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_cyan.be11fb27505ce090f8c6.png"
  },
  57373: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_gray.ac1da684580383039aa1.png"
  },
  57375: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_green.eec8958fba764425abbd.png"
  },
  57377: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_light_blue.fffa1b2ee122a6900eab.png"
  },
  57381: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_light_gray.612d7eafd696996a5d24.png"
  },
  57384: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_lime.bd072f7c7575625e9dd9.png"
  },
  57388: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_magenta.4390d94c5865e3533e9a.png"
  },
  57395: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_orange.a4dd41395dd5126d7fad.png"
  },
  57400: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_pink.89db3ee953ab4dccae12.png"
  },
  57408: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_purple.c1bd423c0104e43333e0.png"
  },
  57410: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_black.5b3a6ba7ef407c3504b1.png"
  },
  57419: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_blue.502b8a6b57f5dc820876.png"
  },
  57423: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_brown.9a69a97c6e30af812b64.png"
  },
  57428: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_cyan.b63b0555f6a3257eafbe.png"
  },
  57435: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_gray.3189a1faae6d3d45de7b.png"
  },
  57437: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_green.5a22282969112e0cf7f7.png"
  },
  57444: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_light_blue.45971c96e953bae20abf.png"
  },
  57449: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_light_gray.5b99a33520068f843ab8.png"
  },
  57457: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_lime.f6021acf4f6313f2ab7b.png"
  },
  57463: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_magenta.782a0728eeb2b27dfe3e.png"
  },
  57466: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_orange.8238befa261e4fcd0abc.png"
  },
  57468: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_pink.3f2efab23915e8305cc9.png"
  },
  57472: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_purple.84a77c94924762ba122b.png"
  },
  57477: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_red.26451cf829cd16d502b2.png"
  },
  57479: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_white.9a655810b2e7047a28f9.png"
  },
  57483: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_quick_yellow.5a3e8a7d3ca9daa74e8b.png"
  },
  57490: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_red.ab8438329998a1d97ece.png"
  },
  57499: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_black.b9f34f54fc0982e49b41.png"
  },
  57501: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_blue.8fd7b15e9213a9ca58c8.png"
  },
  57505: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_brown.c2ec168e1ad64edd34ba.png"
  },
  57510: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_cyan.f88343cccf7d83651ce0.png"
  },
  57518: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_gray.fab835334915c84a0395.png"
  },
  57520: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_green.7ad28012e230dea98c83.png"
  },
  57529: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_light_blue.d7aa74654dab5eb3857c.png"
  },
  57531: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_light_gray.707461339a62bed0389f.png"
  },
  57537: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_lime.b2cf561bcb430df71482.png"
  },
  57545: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_magenta.e6e734544f0ca35dccaf.png"
  },
  57550: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_orange.1848c2f77c99d6fdac6a.png"
  },
  57556: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_pink.cc48686d030bf453d54d.png"
  },
  57564: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_purple.0a6ce226d31d5b67c715.png"
  },
  57572: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_red.6e081aacd19ee2d644dd.png"
  },
  57577: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_white.ae0018b5ac04ed197b54.png"
  },
  57584: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_seeking_yellow.33c2f648cae04701b1e5.png"
  },
  57587: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_black.5c3f057f5cf1469d443f.png"
  },
  57589: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_blue.3d0fa6917ae1faf304bc.png"
  },
  57597: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_brown.d1be411d23f22a1f7cac.png"
  },
  57604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_cyan.09fb43e95aa01db56584.png"
  },
  57608: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_gray.933dfda778b8cf9b728a.png"
  },
  57610: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_green.3adb8f27f4ae0efa9947.png"
  },
  57619: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_light_blue.3d7a690bccda93f9445c.png"
  },
  57626: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_light_gray.f25ad3dea4fe61d8937d.png"
  },
  57630: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_lime.e738d7a6ece8518c27f2.png"
  },
  57635: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_magenta.1c03fbca534cf765f9be.png"
  },
  57637: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_orange.e50544d9c91a16e1116e.png"
  },
  57642: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_pink.52581a74eb2982093249.png"
  },
  57647: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_purple.1af02f23492c3b2c1faa.png"
  },
  57650: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_red.faf5ad5019293440e4e0.png"
  },
  57658: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_white.9223d6bfb0d0e78d4f93.png"
  },
  57666: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_sticky_yellow.54bb2bcd26020cad184a.png"
  },
  57672: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_white.ab5c5a4a4d5f9974349f.png"
  },
  57679: (ee, ie, He) => {
    ee.exports = He.p + "static/media/explosive_paint_yellow.428d995580bd3a6c4bc5.png"
  },
  57686: (ee, ie, He) => {
    ee.exports = He.p + "static/media/extractor_pipe.05c89d2d08d260b3e2e8.png"
  },
  57690: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fallen_pine_cone.666ae278dfece2f5f54f.png"
  },
  57696: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fatBrownMushroom.281d22d7e91d0947958a.png"
  },
  57700: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fatRedMushroom.39154e594818b97d8a0f.png"
  },
  57709: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fertiliser.a1ddb423b9e11103b406.png"
  },
  57712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/filter_pipe.b6acf36ba7b3448cbb06.png"
  },
  57717: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fireball.3b6035050c958c23869d.png"
  },
  57723: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker.253d8004ee134d6bf66d.png"
  },
  57725: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_black.655d4cc535eb021e24c9.png"
  },
  57730: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_blue.1e571e58e90f9c385469.png"
  },
  57734: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_brown.77f7541a6e1965600d1e.png"
  },
  57741: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_cyan.46acf67e8ad53eb5c536.png"
  },
  57743: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_gray.29f2aec49ac1f59630bd.png"
  },
  57751: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_green.bb8eccc1eb97f9cd9766.png"
  },
  57759: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_light_blue.48067cb510d9c26f682c.png"
  },
  57767: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_light_gray.44dd193328d7e361ea79.png"
  },
  57775: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_lime.6d8f3ab0e6989eb075f1.png"
  },
  57780: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_magenta.d6c035afd0cbd51a8f07.png"
  },
  57788: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_orange.fd2cfb9d237faa8231b3.png"
  },
  57792: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble.cb4ed164636feee142e5.png"
  },
  57800: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_black.e77f2d92788459369bf2.png"
  },
  57807: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_blue.1d65cc9607163bdb91f8.png"
  },
  57816: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_brown.6e3f466ef691ebd1a990.png"
  },
  57821: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_cyan.d9462e46678dba2426d3.png"
  },
  57828: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_gray.31c595d7a0ae03fceb32.png"
  },
  57836: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_green.fae7b82bb446d2404f4d.png"
  },
  57843: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_light_blue.578999176b5a0060d8a1.png"
  },
  57852: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_light_gray.89cdc89209bd68b834c3.png"
  },
  57854: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_lime.864c03e81b8a7e9cee94.png"
  },
  57857: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_magenta.faad6d1407444490cee9.png"
  },
  57862: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_orange.b25a7b20e1e67ceaef61.png"
  },
  57866: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_pink.53841fdad87448478593.png"
  },
  57872: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_purple.92a08b0d426084778d2c.png"
  },
  57881: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_rainbow.8357037105df3461eff7.png"
  },
  57884: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_red.dc4ae7f9b6fd370d63dc.png"
  },
  57893: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_white.4753f6e312fe91ce7e72.png"
  },
  57899: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pebble_yellow.285cbcbe1dfe1d3fd1fa.png"
  },
  57903: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_pink.b574429357d8eddfff8f.png"
  },
  57912: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_purple.947b665a4729ca83cfd8.png"
  },
  57921: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_rainbow.f868cc7e9ccba040e2f1.png"
  },
  57926: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_red.167966a4686d351ddd28.png"
  },
  57928: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_white.ba4ebac9adfb7f520abf.png"
  },
  57935: (ee, ie, He) => {
    ee.exports = He.p + "static/media/firecracker_yellow.b2343e68d19e70657b35.png"
  },
  57938: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fish_fillet.94d5e950ca1813be98a7.png"
  },
  57944: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fish_n_chips.0d7c719a38e23e4cb491.png"
  },
  57951: (ee, ie, He) => {
    ee.exports = He.p + "static/media/flashlight.dc7c6ba1fe3c8c4436b7.png"
  },
  57959: (ee, ie, He) => {
    ee.exports = He.p + "static/media/floor_creator.ad4dc4564247bf2e00f5.png"
  },
  57967: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fluid_pipe.cf581709cd662b607ea4.png"
  },
  57971: (ee, ie, He) => {
    ee.exports = He.p + "static/media/flywheel.259b6638b6441015ad19.png"
  },
  57977: (ee, ie, He) => {
    ee.exports = He.p + "static/media/focus_lens.bf9864160e9c3b473866.png"
  },
  57983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/football.69ee5a6daf878df19b3c.png"
  },
  57987: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frag_grenade.3de84cc59403e12fb33f.png"
  },
  57990: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fried_rice.5a9c0d5523e6d61b2c21.png"
  },
  57993: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_golem_spawn_orb.dff6698920069ecd09cd.png"
  },
  58e3: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_golem_spawner_block_icon.47b693bd9d24de64d564.png"
  },
  58004: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_herring.38a0d02c595eed606420.png"
  },
  58007: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_rod.7e34e86252996a38a134.png"
  },
  58011: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_shard.c810968659fe974e6407.png"
  },
  58017: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_skeleton_spawn_orb.bbd48929e3e2f54f16ec.png"
  },
  58026: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_skeleton_spawner_block_icon.575324e72014ad43bc62.png"
  },
  58034: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_wolf_eel.6e99cfa6a9d05df0a65d.png"
  },
  58036: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_wraith_spawn_orb.1f10db474a7cd4f8aa5f.png"
  },
  58038: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_wraith_spawner_block_icon.4440869b480c6215a6bc.png"
  },
  58045: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_zombie_spawn_orb.29cf50c325675dfe17c2.png"
  },
  58053: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frost_zombie_spawner_block_icon.ce5854a66caaa0480d68.png"
  },
  58058: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frostpaint_notie.91f009f07284239c50fb.png"
  },
  58062: (ee, ie, He) => {
    ee.exports = He.p + "static/media/frozen_grenadier.a5bd65db6949cc0cc27c.png"
  },
  58066: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fur.6304bfb008e0d8cf9821.png"
  },
  58071: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fur_armour_2.813a7f0f15ac853a1f58.png"
  },
  58074: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fur_chestplate.f69c01e54d239978101e.png"
  },
  58082: (ee, ie, He) => {
    ee.exports = He.p + "static/media/furnace.8ea51ed78f5e8258674d.png"
  },
  58085: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_armour_2.9c93ec1d0b9b608f21d7.png"
  },
  58091: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_boots.bf0b678b4956ccc6c3d2.png"
  },
  58094: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_bow.bcec4ce669c70f3f83ca.png"
  },
  58099: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_bow_charging_2.39f1d3e9129bdc457fcd.png"
  },
  58105: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_bow_charging_3.3d1984ee99884ef98105.png"
  },
  58108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_bow_charging_4.f31426919d27dbf5a22a.png"
  },
  58115: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_chestplate.8c3e2fbf6cb6910d0b56.png"
  },
  58117: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_club.89a708340b5e3f8a72ab.png"
  },
  58122: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_crossbow.d85c14c2b0538690507a.png"
  },
  58129: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_crossbow_charged.76874d911ab6e7c345a0.png"
  },
  58133: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_crossbow_charging_2.58e2233206a5fb8d8e56.png"
  },
  58139: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_crossbow_charging_3.5ea34d87edf3ab8d50c2.png"
  },
  58144: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_crossbow_charging_4.7af53b11c47cac8782d7.png"
  },
  58148: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_dagger.d5f96a590f21a251d5b1.png"
  },
  58155: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_gauntlets.b3aec2ab7372ac420753.png"
  },
  58161: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_helmet.5486c60d43950e68c502.png"
  },
  58167: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_leggings.2dcc1f10ceac3e02cc26.png"
  },
  58172: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_mace.62295aef712861a1b202.png"
  },
  58181: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_shard.5139da722a7873cc1a3b.png"
  },
  58189: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_spear.9c4f29a2b4bf888b8d73.png"
  },
  58198: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_staff.e61bde587dfc4d3dce20.png"
  },
  58201: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_sword.c2c9f8154b8fb84dc9d2.png"
  },
  58204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/geo_whip.67df39909bf6f7928d87.png"
  },
  58211: (ee, ie, He) => {
    ee.exports = He.p + "static/media/giant_grouper.02cc528d0db1856e3fad.png"
  },
  58218: (ee, ie, He) => {
    ee.exports = He.p + "static/media/giant_moray.d858dca476c0a1bed745.png"
  },
  58221: (ee, ie, He) => {
    ee.exports = He.p + "static/media/giant_stingray.a342cadf9e8273e31f0d.png"
  },
  58223: (ee, ie, He) => {
    ee.exports = He.p + "static/media/giant_trevally.ede37b7634002c6bd9fe.png"
  },
  58225: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glacial_lanternfish.9d0e74d1b58fb399e56b.png"
  },
  58230: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glacial_silverfish.7deec4bba0fbd31d3abf.png"
  },
  58233: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glistering_melon_slice.dc26cd45fc6ada650f26.png"
  },
  58242: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glistering_watermelon_slice.643444daa098b72b5748.png"
  },
  58247: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glow_dust.595402d881245cdc9ec0.png"
  },
  58255: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glowing_mushroom.34a44ca31b1bbf5019fb.png"
  },
  58258: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glowing_soup.de17760d90b5f95a3ace.png"
  },
  58263: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_antlers_icon.624eb7e3aef001a6d462.png"
  },
  58270: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_armour_2.e8d2389b34fec09beaba.png"
  },
  58274: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_blade.a33bb67bdf31facf4e87.png"
  },
  58277: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_boomerang.641999831065cb38b395.png"
  },
  58282: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_bow.20b8105b6255b01fd4ea.png"
  },
  58291: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_bow_charging_2.8e2e09dc8b404ba0df13.png"
  },
  58294: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_bow_charging_3.bc47a4ecf42686970bbe.png"
  },
  58297: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_bow_charging_4.de4108dda3e539f209cf.png"
  },
  58299: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_carrot.c74fb316c908a2e98f20.png"
  },
  58308: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_club.164ffb4f4ca8619be8c7.png"
  },
  58312: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_coin.a67a5a6a4272d032c79f.png"
  },
  58317: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crop.6335c7a8523d9c8d3e85.png"
  },
  58325: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crossbow.e548226d711b51805ef0.png"
  },
  58328: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crossbow_charged.525abf5501a120b91d9f.png"
  },
  58331: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crossbow_charging_2.8ab94e532334e728619d.png"
  },
  58334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crossbow_charging_3.2e935758cfa3ab242854.png"
  },
  58336: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_crossbow_charging_4.8375422f73ba338c4f19.png"
  },
  58341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_dagger.4c94cc29b086cc309ffe.png"
  },
  58348: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_enchanting_table.0354573f8ae0fbb52279.png"
  },
  58355: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_fragment.7b426bc22b591fd1f12e.png"
  },
  58357: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_goofy_golem_spawn_orb.d72bd547abe0d8d40868.png"
  },
  58363: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_goofy_golem_spawner_block_icon.de4bb4144a65b8137698.png"
  },
  58365: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_grit.ce29d8ce47507cec283b.png"
  },
  58374: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_guard.498396f8916dc66b3178.png"
  },
  58381: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_guardian_spawn_orb.54f262a0a09b2c58d7c0.png"
  },
  58390: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_guardian_spawner_block_icon.506288b5f28a8803d0c0.png"
  },
  58392: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_handle.6cf3eba1cca1587cbc63.png"
  },
  58399: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_ingot.08a36fa535df2833ce80.png"
  },
  58406: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_key.95dcf3e607892d882482.png"
  },
  58409: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_mace.adb395c00aee5c2b6905.png"
  },
  58418: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_plate.37b0cb1efaec22e11ee5.png"
  },
  58427: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_spear.0654b3a9072f721397bb.png"
  },
  58433: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_trophy.195577ec317f7f54cddf.png"
  },
  58440: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_watermelon_stag_spawn_orb.1d8640cb76da848cb802.png"
  },
  58444: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_watermelon_stag_spawner_block_icon.071e672c2c872443dc9a.png"
  },
  58446: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gold_whip.3c1faea415a67589a2dc.png"
  },
  58454: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_axe.523dc2420d96cde5a63f.png"
  },
  58461: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_boots.f83a8ffde87be6fe5e02.png"
  },
  58470: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_chestplate.5a73ad833f735bf24e79.png"
  },
  58478: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_gauntlets.1e7c221612536d41530a.png"
  },
  58486: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_helmet.d36d0c38d82acd87953f.png"
  },
  58491: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_hoe.e7db2e1b5ea7b75e4206.png"
  },
  58498: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_leggings.087fe19537c264fb7bd5.png"
  },
  58504: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_lucky_clover.6ac24f5f1931c20a296d.png"
  },
  58513: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_mahseer.2e6db0a3c3f0141a6fa5.png"
  },
  58516: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_pickaxe.205c848b0798acf1b67b.png"
  },
  58522: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_shovel.f131a37dcffeeab67202.png"
  },
  58529: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golden_sword.afe1c8c5f02fe3e6412c.png"
  },
  58531: (ee, ie, He) => {
    ee.exports = He.p + "static/media/goldheart_engine.ca85f54803cc9ccac62f.png"
  },
  58533: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golem_eye.02d43fabf45732bcc90e.png"
  },
  58540: (ee, ie, He) => {
    ee.exports = He.p + "static/media/golem_pickaxe.0aab521ba8408f2bac5a.png"
  },
  58542: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gorilla_spawn_orb.56ea585f179b4a63e29c.png"
  },
  58545: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gorilla_spawner_block_icon.8e8e2a3b0f6e5e029295.png"
  },
  58547: (ee, ie, He) => {
    ee.exports = He.p + "static/media/graphite.69e09ea1d780a3171bef.png"
  },
  58549: (ee, ie, He) => {
    ee.exports = He.p + "static/media/grass_snapper.9280453320a3e537389c.png"
  },
  58553: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_balloon.270d46c319f932af86bd.png"
  },
  58558: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_bed.a55bb245518e2754fbba.png"
  },
  58563: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_heavy_paintball_gun.658a69b886095e721f61.png"
  },
  58567: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_kart.dc32689d25a3bdd051ac.png"
  },
  58570: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paint_bow.a17e51abf6f5aee6645c.png"
  },
  58579: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paint_bow_charging_2.172396e0d0f5a80e8165.png"
  },
  58585: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paint_bow_charging_3.fe6d17e614d06fdc8e9e.png"
  },
  58592: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paint_bow_charging_4.81eb88a9d4008957d52d.png"
  },
  58597: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paintball.3fd4eb357ac8ba00d4b1.png"
  },
  58605: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_paintball_gun.ddddf8bf498a02b3c46d.png"
  },
  58607: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_popup_tower.25d01f7f04d3508869e2.png"
  },
  58610: (ee, ie, He) => {
    ee.exports = He.p + "static/media/gray_strongbed.ff56fcf9a62da2580fb4.png"
  },
  58612: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_balloon.19b0c54af28b695ba18c.png"
  },
  58619: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_bed.f4ea34e50aa5ad6d883a.png"
  },
  58626: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_directional_arrow.545cbea0d10f3cb50d8d.png"
  },
  58634: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_heavy_paintball_gun.66983bc62117d24646cd.png"
  },
  58643: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_kart.d099fdf6b3ffcbf317b9.png"
  },
  58650: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paint_bow.354cd0b191b5fb84bc23.png"
  },
  58653: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paint_bow_charging_2.d3fcf8e7666e51e4e693.png"
  },
  58661: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paint_bow_charging_3.884f9b4d92aec0dbde1a.png"
  },
  58664: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paint_bow_charging_4.6c69eb4c0c36fb313fee.png"
  },
  58668: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paintball.b709e5da9114c5262671.png"
  },
  58675: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_paintball_gun.a522362cd16f0bae19a7.png"
  },
  58680: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_popup_tower.2d40a87413c81293d54c.png"
  },
  58687: (ee, ie, He) => {
    ee.exports = He.p + "static/media/green_strongbed.3383086a778fcae9686b.png"
  },
  58690: (ee, ie, He) => {
    ee.exports = He.p + "static/media/greenfin_loach.9a00e23efa5087f106bb.png"
  },
  58695: (ee, ie, He) => {
    ee.exports = He.p + "static/media/grenade_launcher.c408b3b0d888da20e16a.png"
  },
  58698: (ee, ie, He) => {
    ee.exports = He.p + "static/media/grey_directional_arrow.ab2af50b0fd42ed9f4cf.png"
  },
  58702: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hang_glider.4fd01858ea61b5229451.png"
  },
  58708: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hang_glider_diamond.0055143378e2c87e1138.png"
  },
  58712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hang_glider_gold.37f99ef293ad11d21cdb.png"
  },
  58721: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hang_glider_iron.2cdfe6e5bddd6f9f61ab.png"
  },
  58726: (ee, ie, He) => {
    ee.exports = He.p + "static/media/haste_arrow.43cd5bf7b49ab4c8f9b0.png"
  },
  58732: (ee, ie, He) => {
    ee.exports = He.p + "static/media/haste_potion.b784a6cab2ee3b980a13.png"
  },
  58741: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hatchetfish.d59b3997f7f7a0e1bded.png"
  },
  58744: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heal_arrow.5a44b4efcc27d04c269c.png"
  },
  58748: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heal_potion.3c141c1219041a61a4d7.png"
  },
  58756: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heat_exchanger.32d905b637167f55ca89.png"
  },
  58758: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heat_resistance_arrow.79cae89da9cb25bc6ee0.png"
  },
  58766: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heat_resistance_potion.fb878277980e03baf90f.png"
  },
  58768: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heatwarp_flounder.80e6fd335a7a5b12ff21.png"
  },
  58776: (ee, ie, He) => {
    ee.exports = He.p + "static/media/homing_beacon.6120a23fe1d9521a174f.png"
  },
  58779: (ee, ie, He) => {
    ee.exports = He.p + "static/media/horse_painting.12933c48f81fbea89684.png"
  },
  58783: (ee, ie, He) => {
    ee.exports = He.p + "static/media/horse_spawn_orb.e0c42d71bad1d7d461e2.png"
  },
  58787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/horse_spawner_block_icon.b60d892fcaa92a40ee08.png"
  },
  58796: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hovercraft.9fb6126c3375d02305ca.png"
  },
  58802: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ice_bridge.1d8ade8d494f9bdb8d5f.png"
  },
  58809: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ice_spined_notothenia.b3baf1619c849a3c0247.png"
  },
  58813: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iceball.38a67d0de1a1a06e94b4.png"
  },
  58820: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iceshelf_skate.06688d9df6854ada2477.png"
  },
  58824: (ee, ie, He) => {
    ee.exports = He.p + "static/media/icy_sculpin.be5b0990f4da0deed2f6.png"
  },
  58827: (ee, ie, He) => {
    ee.exports = He.p + "static/media/inactive_radar.a718e3514070abdd8d3f.png"
  },
  58831: (ee, ie, He) => {
    ee.exports = He.p + "static/media/instant_damage_arrow.b05e176717c7114cc05a.png"
  },
  58834: (ee, ie, He) => {
    ee.exports = He.p + "static/media/instant_damage_potion.5139be36850dda61d6b5.png"
  },
  58836: (ee, ie, He) => {
    ee.exports = He.p + "static/media/invisibility_arrow.9b71a0bb4b5656a9e4f7.png"
  },
  58844: (ee, ie, He) => {
    ee.exports = He.p + "static/media/invisibility_potion.c79f95ef7f995122a9f3.png"
  },
  58852: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_armour_2.386e9a7036c2188fdd31.png"
  },
  58860: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_axe.91d5e73a1c93518dfaf3.png"
  },
  58868: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_blade.281f3c6b0b57622ce78f.png"
  },
  58877: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_boomerang.498f3cf239cc6364c56e.png"
  },
  58884: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_boots.bcd7ddf296bf6c069456.png"
  },
  58893: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_bow.ebcf7bc0b5cbaab8334d.png"
  },
  58899: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_bow_charging_2.f7fce6d0d8a8760e76da.png"
  },
  58905: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_bow_charging_3.b19177f6d044c4b03706.png"
  },
  58909: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_bow_charging_4.4b03a08e0c6958f88522.png"
  },
  58912: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_chestplate.9bbd2c2850fe40d70664.png"
  },
  58919: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_club.aa5aaff10c7c7e83d7de.png"
  },
  58926: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_crossbow.676332ed0aed3a790f84.png"
  },
  58934: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_crossbow_charged.c3c73a209f7d0a852704.png"
  },
  58937: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_crossbow_charging_2.558062e33cea7abcad5c.png"
  },
  58943: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_crossbow_charging_3.609d546a2dc97e46def2.png"
  },
  58951: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_crossbow_charging_4.cc70edaa9fe657dd3909.png"
  },
  58954: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_dagger.ca42b04fd7721a17ae77.png"
  },
  58956: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_enchanting_table.e2191cf201485d25706e.png"
  },
  58959: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_fragment.c1099fa23fa34366fb3e.png"
  },
  58964: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_gauntlets.6fcd04c00a08f55f52cb.png"
  },
  58970: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_goofy_golem_spawn_orb.10a73378b5dd56343342.png"
  },
  58978: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_goofy_golem_spawner_block_icon.1b0761ce1c0c1a826b51.png"
  },
  58983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_grit.06d496910837cddf3b58.png"
  },
  58987: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_guard.eecc85c91fbd40b4f0ba.png"
  },
  58989: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_guardian_spawn_orb.6312b84b2b1d9a200b19.png"
  },
  58997: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_guardian_spawner_block_icon.54dd0e0c9aab910158d3.png"
  },
  59006: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_hammer.4ee405b0933086fa0657.png"
  },
  59014: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_handle.5f7bffaa2f1524b45137.png"
  },
  59023: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_helmet.d20b095304597a0621cd.png"
  },
  59026: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_hoe.f1865d7925eebc921cb0.png"
  },
  59030: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_ingot.630b7daba5648316bb0d.png"
  },
  59038: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_key.dde9847834df32736175.png"
  },
  59047: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_ladder.12d2cc588d8fadd15e49.png"
  },
  59049: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_leggings.2f0a90de5590970169e4.png"
  },
  59057: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_mace.2f2570baa5917de542d4.png"
  },
  59060: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_pickaxe.6d5a1c814208e26e926e.png"
  },
  59065: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_plate.51baaebb9b07e77f8410.png"
  },
  59073: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_shovel.7e0c723ceff900b4b0e4.png"
  },
  59080: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_spear.25e9bad65f997ca14f26.png"
  },
  59089: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_sword.41d755e470a1b0648b41.png"
  },
  59096: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_trapdoor.72dc4bd162dd8ec15509.png"
  },
  59102: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_trophy.685c637c5aa2764e11d5.png"
  },
  59106: (ee, ie, He) => {
    ee.exports = He.p + "static/media/iron_whip.a0e726851881718239d1.png"
  },
  59115: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jet_armour_2.58cb19e1cb5a89a9077b.png"
  },
  59124: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jetpack.156c22b6c5f7d1c63904.png"
  },
  59130: (ee, ie, He) => {
    ee.exports = He.p + "static/media/job_application.3f8a5ff40e11d633909d.png"
  },
  59134: (ee, ie, He) => {
    ee.exports = He.p + "static/media/john_beef.a15cea2e74b93228302f.png"
  },
  59139: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_arrow.0ec7515251d7e1be23a9.png"
  },
  59141: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_pad.02a22bc934db5c074d03.png"
  },
  59148: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_pad_strong.cfd302db48451003dbb5.png"
  },
  59155: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_pad_super.390eb7fa67a132a25f90.png"
  },
  59164: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_pad_weak.c5b9f8e81baaf0f74820.png"
  },
  59166: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jump_potion.70a540c780a2c3632a26.png"
  },
  59175: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_door.8eb6ccf53f9e63648785.png"
  },
  59181: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_fence.090916fe628e9113cade.png"
  },
  59184: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_fence_gate.2aa8ff4ebc49f1f6cd1f.png"
  },
  59186: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_item_pedestal.743f105046f57a93fd4b.png"
  },
  59188: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_rod.0b97a88bc65d1d003984.png"
  },
  59194: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_sapling.c7586f4d446df0918462.png"
  },
  59201: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_spinefish.ba80e3fe61ba65b2de99.png"
  },
  59210: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_tall_grass_bottom.e1f103c983be99d8673f.png"
  },
  59213: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_tall_grass_top.73290a2f6ccf0a351750.png"
  },
  59215: (ee, ie, He) => {
    ee.exports = He.p + "static/media/jungle_trapdoor.b36634024a418df731ee.png"
  },
  59222: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_armour_2.66c634d7f5dcaccd7bc8.png"
  },
  59225: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_boots.53e329b03805e7537212.png"
  },
  59227: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_chestplate.9b9a9e786af0c1e93c75.png"
  },
  59231: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_gauntlets.1eb3f699abebe4da4f5d.png"
  },
  59235: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_helmet.4bc0034ce1c66994ef87.png"
  },
  59238: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_amethite_leggings.94fc1c2db86c45071b8c.png"
  },
  59240: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_armour_2.bc0c2e8fc5503f5659e7.png"
  },
  59248: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_boots.794fc1b172dfc8b298a6.png"
  },
  59252: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_chestplate.849bdecc73b143016f39.png"
  },
  59255: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_gauntlets.5be6b93bf41f5f55e54f.png"
  },
  59263: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_helmet.c8f839f4ed8a52a3febc.png"
  },
  59265: (ee, ie, He) => {
    ee.exports = He.p + "static/media/kingly_diamond_leggings.7b8506ded79fda69dc64.png"
  },
  59272: (ee, ie, He) => {
    ee.exports = He.p + "static/media/knight_heart.8164f3912d464c340968.png"
  },
  59277: (ee, ie, He) => {
    ee.exports = He.p + "static/media/knight_sword.4fd4bad52de067c60324.png"
  },
  59282: (ee, ie, He) => {
    ee.exports = He.p + "static/media/knockback_arrow.4dd746ea60e152f8eb0f.png"
  },
  59287: (ee, ie, He) => {
    ee.exports = He.p + "static/media/knockback_potion.3e7024c2c0459f824c65.png"
  },
  59295: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_aspen.5dfe80eb3f210716f54a.png"
  },
  59297: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_cedar.205a2dbc31ca9736d612.png"
  },
  59302: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_cherry.11edd5731559faf214f2.png"
  },
  59305: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_jungle.89783a0d1d64f75825e3.png"
  },
  59307: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_mango.dbd11028af6c332d0204.png"
  },
  59313: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_maple.d09779afc3f29eea1689.png"
  },
  59317: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_palm.08119819af5787aad08d.png"
  },
  59321: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_pear.29344c0cfba12cefe63e.png"
  },
  59323: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_pine.10627c0e2201b3a6bf44.png"
  },
  59328: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_plum.49e32d0ac8d378d55cfb.png"
  },
  59330: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ladder_spectral.c007d573ac06831b054d.png"
  },
  59338: (ee, ie, He) => {
    ee.exports = He.p + "static/media/landing_pad.5810368314003d0e9257.png"
  },
  59347: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lantern.8638af99ad9f04c64756.png"
  },
  59353: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lava_bucket.7a5605f75811656fded1.png"
  },
  59355: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lavaflow_trout.b6fbfee56293f9a7c255.png"
  },
  59364: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lavawake_slopefish.feb01482bf39280aba0f.png"
  },
  59369: (ee, ie, He) => {
    ee.exports = He.p + "static/media/leaf_bed.14bfa7704ef32de533fd.png"
  },
  59374: (ee, ie, He) => {
    ee.exports = He.p + "static/media/leather.ed898817ca00919b6769.png"
  },
  59378: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lettuce.07a335ceaa07f9954549.png"
  },
  59382: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lettuce_plant_stage0.8909e0dc09b2a9b48ec5.png"
  },
  59391: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lettuce_plant_stage1.4d9fb770d2e35c533a5a.png"
  },
  59395: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lettuce_plant_stage2.31f7c8bd95f1757e5b16.png"
  },
  59404: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_balloon.9f13be37f081168e3136.png"
  },
  59411: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_bed.f65f12155417736e6856.png"
  },
  59414: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_car.43b65e81792eb9f552b8.png"
  },
  59422: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_directional_arrow.682edd663f85ef50eacc.png"
  },
  59425: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_heavy_paintball_gun.877ff361e8cd84efc9a7.png"
  },
  59434: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_kart.e04e3e7c5b5c85b5c712.png"
  },
  59437: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paint_bow.c18086e08ee3579cddb5.png"
  },
  59444: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paint_bow_charging_2.de1540c6f0bb73f1d712.png"
  },
  59451: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paint_bow_charging_3.9ef06f0ad2f89b7df3d0.png"
  },
  59453: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paint_bow_charging_4.0e538b1e6be17484f5e2.png"
  },
  59455: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paintball.793ccbdd04b1c17b5dbf.png"
  },
  59464: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_paintball_gun.de5fa1443ac5556fbc9c.png"
  },
  59473: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_popup_tower.80c81f17d01c0ecd2b4d.png"
  },
  59479: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_blue_strongbed.dc232314b4c8cbbb9bfd.png"
  },
  59487: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_balloon.b05c29348af869601dba.png"
  },
  59495: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_bed.98b2ce9f61c6324dbd94.png"
  },
  59498: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_heavy_paintball_gun.7928b581fd5bd077cf2c.png"
  },
  59502: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_kart.c49009ae6f5305d7a317.png"
  },
  59511: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paint_bow.9de97576367f9d4635b9.png"
  },
  59513: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paint_bow_charging_2.bf279fe9191db3af8455.png"
  },
  59517: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paint_bow_charging_3.f931ec2cc443178078d9.png"
  },
  59524: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paint_bow_charging_4.c83196f13bb521b47fea.png"
  },
  59529: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paintball.3617ab8223b6d056b98d.png"
  },
  59535: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_paintball_gun.bdd954043e9f864ec613.png"
  },
  59537: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_popup_tower.741c0cfd983aa0bba037.png"
  },
  59542: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_gray_strongbed.d466a9a8d62b5129366f.png"
  },
  59544: (ee, ie, He) => {
    ee.exports = He.p + "static/media/light_grey_directional_arrow.734c712203f99a9f7e5b.png"
  },
  59549: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lily_of_the_valley.5252d9ae741dc8dc75a3.png"
  },
  59553: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lily_pad.d0d36bdfe34d3284626b.png"
  },
  59557: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_balloon.c6f4edbc2ee82530095f.png"
  },
  59561: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_bed.5aa88b18a9372d675ff0.png"
  },
  59567: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_directional_arrow.0d0810868beda66629fe.png"
  },
  59574: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_heavy_paintball_gun.80e5208b5f6628bb91a4.png"
  },
  59576: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_kart.90fdae630d0f23a1b16b.png"
  },
  59579: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paint_bow.4576131f28a4d525d53f.png"
  },
  59587: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paint_bow_charging_2.032923356de0eebddcbd.png"
  },
  59592: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paint_bow_charging_3.b2e531c02fc61af67fc3.png"
  },
  59600: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paint_bow_charging_4.cea81c6a599e4fc8df0b.png"
  },
  59606: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paintball.3a6ab0974b4319880ee9.png"
  },
  59612: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_paintball_gun.40df22df9d1f6dc977c1.png"
  },
  59618: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_popup_tower.c18858c639abab727a27.png"
  },
  59627: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lime_strongbed.f0372d1fdf01ebd2f4ae.png"
  },
  59636: (ee, ie, He) => {
    ee.exports = He.p + "static/media/logic_board.d48ec2c1e152aee59ddd.png"
  },
  59640: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_armour_upgrade.068700f127a44f55e84e.png"
  },
  59642: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_bomb.2f9d17437a1fdfc6fd73.png"
  },
  59649: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_clover.e3a612e7f48924937ea8.png"
  },
  59653: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_rod.0df93e6188b469d82e79.png"
  },
  59659: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_sword_upgrade.a698ce3c94898b05e6f7.png"
  },
  59663: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lucky_tools_upgrade.64164e25f13d3ee4ca80.png"
  },
  59666: (ee, ie, He) => {
    ee.exports = He.p + "static/media/lunite.9786c7374506d9d4fcef.png"
  },
  59675: (ee, ie, He) => {
    ee.exports = He.p + "static/media/machine_hull.1a0c615268519b6a913c.png"
  },
  59677: (ee, ie, He) => {
    ee.exports = He.p + "static/media/machine_parts.b4ffa197bdf88277ab73.png"
  },
  59679: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_balloon.ce91517e9f2739cf6bd9.png"
  },
  59684: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_bed.c79b2441b65b30bea1d6.png"
  },
  59688: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_directional_arrow.0226f9a507afbb9091fb.png"
  },
  59697: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_heavy_paintball_gun.0918a09e06bb4f538605.png"
  },
  59701: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_kart.826e42e6f42abe05d9a9.png"
  },
  59710: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paint_bow.46c859154656f35f975f.png"
  },
  59712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paint_bow_charging_2.f990de9b954a94ca135f.png"
  },
  59715: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paint_bow_charging_3.8b7056f03b553efe2a7c.png"
  },
  59722: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paint_bow_charging_4.2df6757593ace57b535e.png"
  },
  59731: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paintball.920bd5e79d203206d8c9.png"
  },
  59738: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_paintball_gun.22e7c870ee78ca60786d.png"
  },
  59743: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_popup_tower.258716c673511b064c6d.png"
  },
  59749: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magenta_strongbed.b56357f6c6b09ff30deb.png"
  },
  59753: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma_golem_spawn_orb.d0f596bb822673d2909d.png"
  },
  59756: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma_golem_spawner_block_icon.bac7b48ecaaeb6712dc5.png"
  },
  59762: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma_sardinella.0a271978131ea23f7bc6.png"
  },
  59768: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magma_trout.265c8e3519a82dd6b17d.png"
  },
  59775: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel.317a15e333bf9914f4a4.png"
  },
  59777: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_armour_2.9035cc09ac106f77cc96.png"
  },
  59784: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_axe.2c72da9788561ae992c5.png"
  },
  59787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_blade.19dc3d18f342d22f4fa7.png"
  },
  59789: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_boomerang.6ab199a0351704f6d8f2.png"
  },
  59795: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_boots.435e6e3d721c1f7e28e0.png"
  },
  59797: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_bow.26305bf21bcbdff4dda8.png"
  },
  59799: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_bow_charging_2.ce2bc50ff519e3397e17.png"
  },
  59807: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_bow_charging_3.c99513acc9e0dc1d15ea.png"
  },
  59809: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_bow_charging_4.dbac1f42f01f48ebcd9f.png"
  },
  59818: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_chestplate.bef4ffb6fd34c5d86a7a.png"
  },
  59822: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_club.13957d615370f98ce4f7.png"
  },
  59827: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_crossbow.52fbe06b5bbf1d3cdd8f.png"
  },
  59834: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_crossbow_charged.c008b9c4ba8d2605b85c.png"
  },
  59839: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_crossbow_charging_2.db0fb6ac91992ffbb08b.png"
  },
  59846: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_crossbow_charging_3.6d53748fe43048a41ecc.png"
  },
  59854: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_crossbow_charging_4.c58d502709596729af7b.png"
  },
  59859: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_dagger.40a3ce58a1a8baec5262.png"
  },
  59867: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_fragment.8085df3ed967ce6c8041.png"
  },
  59872: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_gauntlets.95b2a9e3b573688efa09.png"
  },
  59880: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_guard.841609ffb45cfd8de0dc.png"
  },
  59884: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_handle.84050f0dbc310d21620d.png"
  },
  59893: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_helmet.adffd7a0ce7a1add8b2e.png"
  },
  59901: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_hoe.370f274cc5e0a986d087.png"
  },
  59909: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_leggings.546f08e81088cd7b42fb.png"
  },
  59918: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_mace.08184454186de4b99ab4.png"
  },
  59925: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_pickaxe.cdabc2bc751df15eff9f.png"
  },
  59931: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_shovel.2adfa734696c6862ed1a.png"
  },
  59937: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_spear.2cb480f9328c7a3b1621.png"
  },
  59945: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_sword.edcf29994b3526c7f713.png"
  },
  59948: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmasteel_whip.c2f8db8e74da36be3882.png"
  },
  59955: (ee, ie, He) => {
    ee.exports = He.p + "static/media/magmaward_fuel.d3d133d7babf70fdbe3d.png"
  },
  59960: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mangler_catfish.07311abadc6ad6f7b579.png"
  },
  59963: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango.3cee1dbc3b6263832f66.png"
  },
  59972: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_door.9cc36d2b23a708d058c4.png"
  },
  59974: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_fence.73c0b324251e1aa8a1cc.png"
  },
  59983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_fence_gate.557aa1c1839617ccd592.png"
  },
  59988: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_item_pedestal.3e3861ef96db2bcaf1f2.png"
  },
  59993: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_sapling.a836ce41bd0641a70a34.png"
  },
  60002: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mango_trapdoor.79d65be7c4cd0fa0dd50.png"
  },
  60009: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mangrove_herring.c5b7717317ef37c2598b.png"
  },
  60017: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_door.9bf53afd57178f4f3508.png"
  },
  60020: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_fence.439e7c2ab5f08a88ab03.png"
  },
  60028: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_fence_gate.542d0978befc20075121.png"
  },
  60035: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_planks_bridge.37bff8ffdbc437bdb26d.png"
  },
  60044: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_sapling.a458078d59cdff34be51.png"
  },
  60046: (ee, ie, He) => {
    ee.exports = He.p + "static/media/maple_trapdoor.7574633dcfd9d0918925.png"
  },
  60055: (ee, ie, He) => {
    ee.exports = He.p + "static/media/marbled_moray_cod.fe26a4263661883fa2c0.png"
  },
  60058: (ee, ie, He) => {
    ee.exports = He.p + "static/media/master_rod.2c98abc19ee54cd885bb.png"
  },
  60063: (ee, ie, He) => {
    ee.exports = He.p + "static/media/meaty_bone.17e91c9c2074b2388482.png"
  },
  60070: (ee, ie, He) => {
    ee.exports = He.p + "static/media/medkit.7ca0708ea06db0f7e272.png"
  },
  60079: (ee, ie, He) => {
    ee.exports = He.p + "static/media/melon_seeds.51629833033112778929.png"
  },
  60088: (ee, ie, He) => {
    ee.exports = He.p + "static/media/melon_slice.c2d096876e380e6ce746.png"
  },
  60096: (ee, ie, He) => {
    ee.exports = He.p + "static/media/merger_pipe.b9c3b5f866fbeaa370e5.png"
  },
  60099: (ee, ie, He) => {
    ee.exports = He.p + "static/media/messy_stone_bridge.aa0661a3021594ac2230.png"
  },
  60106: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_armour_2.1910115f4dc8c0fb4066.png"
  },
  60108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_boots.0ed34c9c6f1c9623bf7f.png"
  },
  60113: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_chestplate.602f984125d90397defa.png"
  },
  60117: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_gauntlets.95080aa86c803ea1172e.png"
  },
  60119: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_helmet.b49163199cb684b64b55.png"
  },
  60126: (ee, ie, He) => {
    ee.exports = He.p + "static/media/military_leggings.5bdb6cc77c3ce8a9dc6c.png"
  },
  60129: (ee, ie, He) => {
    ee.exports = He.p + "static/media/milk_arrow.8a1cc030ef9e6956af6d.png"
  },
  60131: (ee, ie, He) => {
    ee.exports = He.p + "static/media/milk_potion.2772e3a429a914c1ecfa.png"
  },
  60134: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_grenade.77eb7a023d82672e747f.png"
  },
  60139: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_helmet.a9dd1e2469c4778d40d2.png"
  },
  60142: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_yield_arrow.f13c464d78428ad7ef9d.png"
  },
  60148: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_yield_potion.a4c6e247c0efbfd54517.png"
  },
  60153: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mireback_carp.d286cf77cbdc02b128ff.png"
  },
  60157: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mob_cage.d89e6c03044e1699536a.png"
  },
  60161: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mob_cage_filled.851b53905f2fad9c7568.png"
  },
  60167: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mob_capsule.0e43f0c427ae21b04a45.png"
  },
  60170: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mob_capsule_filled.a86991bd71a4d0b50cc8.png"
  },
  60172: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mob_catcher.8755eff46c366e066aa2.png"
  },
  60177: (ee, ie, He) => {
    ee.exports = He.p + "static/media/molten_cog.e8d1818a1d5971857b23.png"
  },
  60185: (ee, ie, He) => {
    ee.exports = He.p + "static/media/molten_lotella_cod.6545717570a3cf7529c5.png"
  },
  60192: (ee, ie, He) => {
    ee.exports = He.p + "static/media/molten_magma_rod.110843ea867f6d50e9a4.png"
  },
  60201: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonfish.09e71b06433f9c93b10e.png"
  },
  60203: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonlit_boomerang_fish.793e53e9186e336b4d1d.png"
  },
  60211: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone.53034e43ee1bdd5e6646.png"
  },
  60220: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_axe.c940eea3190bb3e135ef.png"
  },
  60223: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_blade.0ca9c14de61728a64add.png"
  },
  60227: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_boomerang.7b940f9577a824893a4a.png"
  },
  60235: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_club.e13ccc5c3fb04d9054a7.png"
  },
  60239: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_dagger.384327d0f5840d91a4b0.png"
  },
  60247: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_dust.1bb5e91ff17e296a9c87.png"
  },
  60251: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_fragment.98b9a171d520ab3f88ab.png"
  },
  60254: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_goofy_golem_spawn_orb.3f2b872552467a445e83.png"
  },
  60256: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_goofy_golem_spawner_block_icon.d06f4a30ed26ef3ec6d7.png"
  },
  60262: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_guard.894395d1a99464e27211.png"
  },
  60271: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_guardian_spawn_orb.0904d5ba999e783a528c.png"
  },
  60276: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_guardian_spawner_block_icon.43ee3c73c6473be6cf8d.png"
  },
  60278: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_handle.9819b8a9d727356bd8b1.png"
  },
  60287: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_mace.7cfd7bc7eba616c84b50.png"
  },
  60295: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_orb.7d625ad288e4092b5e21.png"
  },
  60298: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_pickaxe.15d466da78db2f58a668.png"
  },
  60301: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_pupfish.ef24f3a92c2a09e85d20.png"
  },
  60307: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_remote.226d30203895b8c14dd1.png"
  },
  60310: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_remote_explosive.07b532b0faca595bed52.png"
  },
  60318: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_spear.9f325cdcb51486a4d224.png"
  },
  60321: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_sword.15f4fc0e1a31f82d45b9.png"
  },
  60326: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_trophy.7bd12258d830ecc4d28f.png"
  },
  60328: (ee, ie, He) => {
    ee.exports = He.p + "static/media/moonstone_whip.ae0392d883fed5af7502.png"
  },
  60334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mossback_arapaima.98ee59345075f34df56b.png"
  },
  60336: (ee, ie, He) => {
    ee.exports = He.p + "static/media/motor.7ae0b21856024d2d713f.png"
  },
  60341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mudbelly_tilapia.0922bff9026e0a989ea3.png"
  },
  60344: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mudline_perch.2f8c097dadfa53c786db.png"
  },
  60346: (ee, ie, He) => {
    ee.exports = He.p + "static/media/murk_stingray.857814a6de63742f305d.png"
  },
  60351: (ee, ie, He) => {
    ee.exports = He.p + "static/media/murkborne_ray.d9b1566742c5af0a867f.png"
  },
  60360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mushroom_soup.5aeee1e2a1f607343f77.png"
  },
  60365: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mythic_rod.675af9b28b9b0e3f0e79.png"
  },
  60369: (ee, ie, He) => {
    ee.exports = He.p + "static/media/name_tag.122967d8e95cca77ca89.png"
  },
  60376: (ee, ie, He) => {
    ee.exports = He.p + "static/media/needlefish.5c66b23a5782e3625911.png"
  },
  60380: (ee, ie, He) => {
    ee.exports = He.p + "static/media/net.d475635049459ae3f79f.png"
  },
  60386: (ee, ie, He) => {
    ee.exports = He.p + "static/media/netherite_hoe.60f0121a3f8f045ce76d.png"
  },
  60395: (ee, ie, He) => {
    ee.exports = He.p + "static/media/night_vision_soup.0854474fa4ffd52e5274.png"
  },
  60399: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nomai_moray.9d5cf729df945d003b17.png"
  },
  60408: (ee, ie, He) => {
    ee.exports = He.p + "static/media/northern_wolffish.7436105ed52af7a25335.png"
  },
  60414: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard.ef4c76d6b8cc4e7c0d3a.png"
  },
  60422: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing.562a8fe6a034a1a63fcb.png"
  },
  60428: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_bottom.10da96bd20e85d7ee15f.png"
  },
  60436: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_bottom_left.df09343429ce0e0f6f42.png"
  },
  60443: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_bottom_right.df09343429ce0e0f6f42.png"
  },
  60452: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_left.7d0d03805de895cdb3da.png"
  },
  60458: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_leg.c58f733f9d0a56bd4c3e.png"
  },
  60466: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_right.7d0d03805de895cdb3da.png"
  },
  60471: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_top.940ddbdcc38372806e31.png"
  },
  60477: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_top_left.06bbf922e40737b837a4.png"
  },
  60485: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_standing_top_right.06bbf922e40737b837a4.png"
  },
  60487: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall.562a8fe6a034a1a63fcb.png"
  },
  60489: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_bottom.10da96bd20e85d7ee15f.png"
  },
  60493: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_bottom_left.df09343429ce0e0f6f42.png"
  },
  60500: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_bottom_right.df09343429ce0e0f6f42.png"
  },
  60509: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_left.7d0d03805de895cdb3da.png"
  },
  60517: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_right.7d0d03805de895cdb3da.png"
  },
  60526: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_top.940ddbdcc38372806e31.png"
  },
  60529: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_top_left.06bbf922e40737b837a4.png"
  },
  60531: (ee, ie, He) => {
    ee.exports = He.p + "static/media/noticeboard_wall_top_right.06bbf922e40737b837a4.png"
  },
  60535: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_armour_2.95308fcd32a39abdc055.png"
  },
  60544: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_blade.d507da7d50dff321becc.png"
  },
  60548: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_boots.e5be5dbb705fe7bdd0da.png"
  },
  60552: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_chestplate.1bd896fbf4ec720f7db3.png"
  },
  60560: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_gauntlets.b00ab10809fa7b737c4e.png"
  },
  60566: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_helmet.ad04e169a2db5c28c1be.png"
  },
  60572: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_jet_armour_2.03c5ce5972d2562b9717.png"
  },
  60575: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_jetpack.9c0373b28831d1b5672f.png"
  },
  60583: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_leggings.43b820baaa823dbd20c0.png"
  },
  60587: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_matter.338519c1b6b62f1d2c7b.png"
  },
  60591: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_multitool.70a9dbd623ed2e671b41.png"
  },
  60597: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_trophy.49abcd0abffebf4f1cea.png"
  },
  60603: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_upgrade.ccc65b9340a3d124be67.png"
  },
  60605: (ee, ie, He) => {
    ee.exports = He.p + "static/media/nova_wrench.2e406257332cdf48e0da.png"
  },
  60613: (ee, ie, He) => {
    ee.exports = He.p + "static/media/oak_boat.239280fa7d4f9d416cc1.png"
  },
  60622: (ee, ie, He) => {
    ee.exports = He.p + "static/media/oarfish.c0fe1df093abd7884a3e.png"
  },
  60624: (ee, ie, He) => {
    ee.exports = He.p + "static/media/oats.f5f4f62233fdbc35e1ce.png"
  },
  60633: (ee, ie, He) => {
    ee.exports = He.p + "static/media/obsidian_boat.1eaf502e4a8bd95edb7c.png"
  },
  60642: (ee, ie, He) => {
    ee.exports = He.p + "static/media/obsidian_rod.587eb112eeefd452454c.png"
  },
  60648: (ee, ie, He) => {
    ee.exports = He.p + "static/media/off_roader.f340569ecc42485d86b9.png"
  },
  60650: (ee, ie, He) => {
    ee.exports = He.p + "static/media/omelette.7a1343ef487642cf0d44.png"
  },
  60654: (ee, ie, He) => {
    ee.exports = He.p + "static/media/onion.623ce9f5a7d0a9d1c501.png"
  },
  60663: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_balloon.fc11812ae0a7d7e19dc9.png"
  },
  60671: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_bed.db8f0660212364cf27ba.png"
  },
  60679: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_directional_arrow.152d06a7d863ef407deb.png"
  },
  60687: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_heavy_paintball_gun.161e9e423e70b2bad5d4.png"
  },
  60696: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_kart.fbf82acd81be7b80179b.png"
  },
  60704: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paint_bow.4a297eece9b95cc641e1.png"
  },
  60711: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paint_bow_charging_2.8c75e65a7b210c00c2e2.png"
  },
  60716: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paint_bow_charging_3.96402d9798c0d9efe0f6.png"
  },
  60721: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paint_bow_charging_4.47eaa50c1ba66ac1bcee.png"
  },
  60727: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paintball.138fa23d300b63604b6b.png"
  },
  60733: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_paintball_gun.ccc5b4c1485d17250f93.png"
  },
  60738: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_popup_tower.fb9873a5070a58f68975.png"
  },
  60740: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_strongbed.9a6f106303cb17a9af3a.png"
  },
  60744: (ee, ie, He) => {
    ee.exports = He.p + "static/media/orange_tulip.e718114316934958b914.png"
  },
  60747: (ee, ie, He) => {
    ee.exports = He.p + "static/media/ore_lens.ad50f62f3d772160c543.png"
  },
  60756: (ee, ie, He) => {
    ee.exports = He.p + "static/media/oxeye_daisy.ad1246a1daa7482659c3.png"
  },
  60761: (ee, ie, He) => {
    ee.exports = He.p + "static/media/paleice_rockcod.61db920b4fbe6caf9a64.png"
  },
  60770: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_door.69f2cfc9e030e1d5dfb5.png"
  },
  60773: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_fence.cb911e3dd33ed847de86.png"
  },
  60775: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_fence_gate.27c561e2beaf0a3c89d4.png"
  },
  60782: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_item_pedestal.41521f4421eb2bc28092.png"
  },
  60787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_sapling.c7e56e9bb507d43b16b1.png"
  },
  60792: (ee, ie, He) => {
    ee.exports = He.p + "static/media/palm_trapdoor.5d44053227da3c895981.png"
  },
  60795: (ee, ie, He) => {
    ee.exports = He.p + "static/media/parsnip_plant_stage0.3886f29c84ee49ee9c2d.png"
  },
  60800: (ee, ie, He) => {
    ee.exports = He.p + "static/media/parsnip_plant_stage1.9acc86279b7fdb9e99ac.png"
  },
  60804: (ee, ie, He) => {
    ee.exports = He.p + "static/media/parsnip_plant_stage2.b4375bdff91b92cc522e.png"
  },
  60810: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear.67351d7685fb2b75f046.png"
  },
  60817: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_door.00b00826ddb87555e75d.png"
  },
  60819: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_fence.57d245e574381faa477f.png"
  },
  60824: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_fence_gate.b401ee0c1f7221e1da29.png"
  },
  60828: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_item_pedestal.091b4192b5d1152688f1.png"
  },
  60832: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_sapling.bb7f9fe03cbd3a03c351.png"
  },
  60834: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pear_trapdoor.014ed69c3f7390648bb3.png"
  },
  60838: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pearlescent_moonfish.125f28e1174b9b52042e.png"
  },
  60846: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pebble.48bd7148b88b8329ac9b.png"
  },
  60854: (ee, ie, He) => {
    ee.exports = He.p + "static/media/permafrost_halibut.c0ba5891a65dd3ce5b29.png"
  },
  60862: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pig_painting.a2540f2d06cfd59e4358.png"
  },
  60866: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pig_spawn_orb.c8abf4f3de4ad38a58ed.png"
  },
  60871: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pig_spawner_block_icon.561f84c2d0c646925025.png"
  },
  60878: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_door.8af6576b8d5101084776.png"
  },
  60884: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_fence.4410a5caf400feba4b42.png"
  },
  60889: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_fence_gate.b879351a630c059754b5.png"
  },
  60896: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_fern.9246ba38000c33971c01.png"
  },
  60900: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_grass.9339a2186b62aeb03004.png"
  },
  60904: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_item_pedestal.bab2be7439b72017b940.png"
  },
  60910: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_sapling.e81e6472ff1caec8e047.png"
  },
  60915: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pine_trapdoor.29ed7cdf1e177046bf01.png"
  },
  60918: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_balloon.25aa219678dc47403522.png"
  },
  60926: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_bed.de3d4b127a9c02e0c96e.png"
  },
  60929: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_directional_arrow.e69ebd259b262a31ebdd.png"
  },
  60937: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_heavy_paintball_gun.def6712ae98a6e60e686.png"
  },
  60945: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_kart.4cfc48c51491cdd31b74.png"
  },
  60948: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paint_bow.f396cfe6743d31fe2927.png"
  },
  60950: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paint_bow_charging_2.67f53c4a028fcab475e1.png"
  },
  60956: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paint_bow_charging_3.ffd8a430997e2f0acf81.png"
  },
  60963: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paint_bow_charging_4.188035862031d6abc9ee.png"
  },
  60972: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paintball.55870b5ed2e1d6b1c0b2.png"
  },
  60975: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_paintball_gun.dd705aa4b029885f8653.png"
  },
  60979: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_popup_tower.65f6d28c38ce05d18171.png"
  },
  60986: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_strongbed.304aeb693f29dcf93dc6.png"
  },
  60991: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pink_tulip.f6463eb4309d4df8c87c.png"
  },
  60996: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pipe.1e45178e4070e1014ae0.png"
  },
  61003: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pithead.9a958116c62347adb345.png"
  },
  61007: (ee, ie, He) => {
    ee.exports = He.p + "static/media/placeholder.fc4ffe2bcb99a26e6461.png"
  },
  61011: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum.49b0918d08837eb1c8d1.png"
  },
  61017: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_door.77d579f30c46300f1397.png"
  },
  61025: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_fence.4c1a9525878183e80bd9.png"
  },
  61027: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_fence_gate.cd8f798fa4064445ff6d.png"
  },
  61034: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_item_pedestal.1cb5e3a9cb21b0d5374e.png"
  },
  61041: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_sapling.74d8cd91e65bb5d1ed70.png"
  },
  61047: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plum_trapdoor.df2226f024c1cf4d20a9.png"
  },
  61054: (ee, ie, He) => {
    ee.exports = He.p + "static/media/plutonium_pellet.9a5208bece3a4f0ea452.png"
  },
  61062: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pocket_terminal.a909e4fbb2cf52078f34.png"
  },
  61065: (ee, ie, He) => {
    ee.exports = He.p + "static/media/poison.590465b6aed70dea091b.png"
  },
  61071: (ee, ie, He) => {
    ee.exports = He.p + "static/media/poison_arrow.b7e2d87836c44460a1b9.png"
  },
  61076: (ee, ie, He) => {
    ee.exports = He.p + "static/media/polarflash_electron.5e602f007ba346349107.png"
  },
  61081: (ee, ie, He) => {
    ee.exports = He.p + "static/media/poop.42538b1fa350d78e6843.png"
  },
  61089: (ee, ie, He) => {
    ee.exports = He.p + "static/media/poppy.30e041818d6d868c6eb9.png"
  },
  61092: (ee, ie, He) => {
    ee.exports = He.p + "static/media/porridge.16cd43f2d423d3d53b18.png"
  },
  61100: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potato_plant_stage0.2788be967438450ff282.png"
  },
  61103: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potato_plant_stage1.55123fd2e713e229625f.png"
  },
  61109: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potato_plant_stage2.c2f1df6b4551ab514e5f.png"
  },
  61118: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potato_seeds.14a5d53378955824aff8.png"
  },
  61123: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potion.859cb589bf0cd9460b27.png"
  },
  61132: (ee, ie, He) => {
    ee.exports = He.p + "static/media/potion_table.c8292102dcaf609bd86a.png"
  },
  61138: (ee, ie, He) => {
    ee.exports = He.p + "static/media/power_coupler.d814466f0553a5b97c73.png"
  },
  61147: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pull_charm.9aeea4c0fc4a8b377ebd.png"
  },
  61152: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pumpkin_pie.ef2e27d7aaec9ae0873d.png"
  },
  61160: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pumpkin_seeds.1b18683b84fc9908aa7b.png"
  },
  61164: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_balloon.a27969598a466d131a73.png"
  },
  61170: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_bed.d2baf8c9c0c641859f9b.png"
  },
  61178: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_directional_arrow.67152b342bc83accafd1.png"
  },
  61186: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_heavy_paintball_gun.6d014958c16758ff9be0.png"
  },
  61195: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_kart.cc7e821390717412defe.png"
  },
  61199: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paint_bow.8b6e7f1ace495daa6641.png"
  },
  61207: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paint_bow_charging_2.7d6a8f0c0aee6b5d0b8b.png"
  },
  61215: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paint_bow_charging_3.0484f0cda38b6a497583.png"
  },
  61224: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paint_bow_charging_4.3ceb76aa6dbbd9916406.png"
  },
  61227: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paintball.5b5004337aa33e6ffad8.png"
  },
  61236: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_paintball_gun.3b4f7131f7bd48da454f.png"
  },
  61244: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_popup_tower.ef7e10bf29621d4372b9.png"
  },
  61246: (ee, ie, He) => {
    ee.exports = He.p + "static/media/purple_strongbed.2c7d392b4cc6c4d88b05.png"
  },
  61249: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pyroclast_eel.10cb62f9b95e3b50944c.png"
  },
  61253: (ee, ie, He) => {
    ee.exports = He.p + "static/media/pyroscale_grouper.60e8dfb028ebea29880a.png"
  },
  61261: (ee, ie, He) => {
    ee.exports = He.p + "static/media/radiant_spark.61ade2b8a7f271413397.png"
  },
  61269: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rainbow_guppy.83414c8d9abc73f2dfa0.png"
  },
  61271: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_beef.2365fe5a957fe6b1162e.png"
  },
  61279: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_copper.65f1be3cea04ce549330.png"
  },
  61286: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_gold.d36356c3f526b0a89d97.png"
  },
  61290: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_iron.5ed058fa5b57a7fdece8.png"
  },
  61293: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_mutton.4ec1eca0b702db1146b5.png"
  },
  61301: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_porkchop.4b9461ebcb01f412a82b.png"
  },
  61309: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_potato.c05f247486bd3ea3b5d8.png"
  },
  61315: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_uranium.c74de8f10aa416533895.png"
  },
  61322: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_venison.2b7acfc7976950eb0932.png"
  },
  61328: (ee, ie, He) => {
    ee.exports = He.p + "static/media/raw_voltite.0485db6ebc869c6453cd.png"
  },
  61332: (ee, ie, He) => {
    ee.exports = He.p + "static/media/reactor_blueprint.d9b6b2d96bfd4cd33a2b.png"
  },
  61334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/recall_beacon.d3eac26d8532c77206e2.png"
  },
  61341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_balloon.5f71a5dcf67a71302070.png"
  },
  61348: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_bed.dd086220dfe1243d53eb.png"
  },
  61355: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_cabbage.3057b8abf4a125d9b794.png"
  },
  61358: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_cabbage_stage0.be41914ec5488e190bb9.png"
  },
  61360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_cabbage_stage1.8ce9374d81b2d97e0fdd.png"
  },
  61368: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_cabbage_stage2.caf6e59b98605c8b68d4.png"
  },
  61375: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_directional_arrow.504dfd4c76694953b387.png"
  },
  61382: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_heavy_paintball_gun.127639b9823c41d9cbb5.png"
  },
  61390: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_kart.b741395448221ae9f81d.png"
  },
  61393: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_mushroom.3f8d0b597caf1a064b78.png"
  },
  61400: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paint_bow.5a9f839d8d6cb2730377.png"
  },
  61406: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paint_bow_charging_2.a1a2a4e20e7fb584cbf5.png"
  },
  61414: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paint_bow_charging_3.bae784cfde730a5c02a3.png"
  },
  61423: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paint_bow_charging_4.c482a409d1294e6e8668.png"
  },
  61431: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paintball.32461509920eaaa64495.png"
  },
  61437: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_paintball_gun.4a36176d8be969ea2487.png"
  },
  61446: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_popup_tower.f0274af4cc0494119a1c.png"
  },
  61455: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_pyreside.74720a1f057e35a4ab3d.png"
  },
  61461: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_snapper.5a40c3d12f6434bd2177.png"
  },
  61469: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_strongbed.1018853d157017b0eb51.png"
  },
  61477: (ee, ie, He) => {
    ee.exports = He.p + "static/media/red_tulip.dc171a26716ddeb5724a.png"
  },
  61481: (ee, ie, He) => {
    ee.exports = He.p + "static/media/reedglass_minnow.84eb745343fedeb692f5.png"
  },
  61488: (ee, ie, He) => {
    ee.exports = He.p + "static/media/reef_sardine.cc44869a0ac9a77853ae.png"
  },
  61491: (ee, ie, He) => {
    ee.exports = He.p + "static/media/regen_arrow.deefed26444a6481b4eb.png"
  },
  61499: (ee, ie, He) => {
    ee.exports = He.p + "static/media/regen_potion.3a2ff886a4bef79017db.png"
  },
  61506: (ee, ie, He) => {
    ee.exports = He.p + "static/media/reinforced_ball.ed1af82829c3ef758985.png"
  },
  61508: (ee, ie, He) => {
    ee.exports = He.p + "static/media/reinforced_pebble.b4e8b79c221d3c201f6b.png"
  },
  61510: (ee, ie, He) => {
    ee.exports = He.p + "static/media/relay_coil.aa52f7926823d2076c8e.png"
  },
  61519: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rice.ab55aae9cf7f73bdb22e.png"
  },
  61522: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rice_seeds.096b587ed340d399b525.png"
  },
  61530: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rimesnouted_lancetfish.fbf4d5167e70fd058f2f.png"
  },
  61536: (ee, ie, He) => {
    ee.exports = He.p + "static/media/roast_dinner.4324fef2708203f2ab0f.png"
  },
  61538: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rocket.bb91415b269ccacdd317.png"
  },
  61541: (ee, ie, He) => {
    ee.exports = He.p + "static/media/root_flounder.14283c1f3d2a5718d02f.png"
  },
  61547: (ee, ie, He) => {
    ee.exports = He.p + "static/media/root_perch.5d140eae059a019efcb4.png"
  },
  61550: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rotslab_eel.f2ff7dfdf15085e60309.png"
  },
  61554: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rotten_brain.e808bf985c93f347827b.png"
  },
  61556: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rotten_flesh.8bab1d95d1e474f45943.png"
  },
  61560: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rpg.087386949f66b195ef8d.png"
  },
  61565: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite.c9b43f2bd4f391eca7ee.png"
  },
  61569: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_armour_2.d1f88a635f6869ab5b5f.png"
  },
  61577: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_axe.6fd6079c538321d31efc.png"
  },
  61582: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_boomerang.b8016511f93eee323f8a.png"
  },
  61590: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_boots.edea544e483de4d53464.png"
  },
  61599: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_bow.72d07b9dd7593e68bf60.png"
  },
  61604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_bow_charging_2.50a82b8e0dbcde08c0e3.png"
  },
  61612: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_bow_charging_3.1d77b296937a73513ba2.png"
  },
  61615: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_bow_charging_4.14515eed4d1cda3ab87e.png"
  },
  61623: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_chestplate.e88632a70105b35f64e1.png"
  },
  61628: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_club.1364741167171f1c0cf8.png"
  },
  61636: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_crossbow.56adf7fc47a95d3ba955.png"
  },
  61645: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_crossbow_charged.425b8a2090cad922b163.png"
  },
  61647: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_crossbow_charging_2.59421060346a3a791d4c.png"
  },
  61649: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_crossbow_charging_3.52078e43d2ad39dbe4ce.png"
  },
  61655: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_crossbow_charging_4.12c79e65838321451cf0.png"
  },
  61657: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_dagger.12fe6b52d3d15c5266a3.png"
  },
  61664: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_fragment.5e408ffa5300fb72cb72.png"
  },
  61670: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_gauntlets.20f97a9491bd95e02674.png"
  },
  61674: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_helmet.d27f4f4f76b79c1445e2.png"
  },
  61680: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_hoe.974f22a494f15eaff3ee.png"
  },
  61689: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_leggings.323987b891c6b6706f40.png"
  },
  61692: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_mace.2d13d1dfd00a569beaa8.png"
  },
  61694: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_pickaxe.ffc82852201589cfde41.png"
  },
  61698: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_shovel.44f354833f7725cc8a60.png"
  },
  61703: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_spear.6cdc5f045e1972bf7270.png"
  },
  61707: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_sword.ad812456b131357eda73.png"
  },
  61714: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rubellite_whip.c9f3c402079df681d7c3.png"
  },
  61717: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rust_scad.171cfd4441431b188adc.png"
  },
  61719: (ee, ie, He) => {
    ee.exports = He.p + "static/media/rusty_rod.53c52abb9e4cd1efb757.png"
  },
  61727: (ee, ie, He) => {
    ee.exports = He.p + "static/media/saddle.4e1c3c296ffec6cda94f.png"
  },
  61733: (ee, ie, He) => {
    ee.exports = He.p + "static/media/salad.f78baeeddba4e9dbdfc1.png"
  },
  61741: (ee, ie, He) => {
    ee.exports = He.p + "static/media/salvaging_table.f7cde993601e083ae6ae.png"
  },
  61744: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sandbelly_piranha.f634aa245f2b6846ecfc.png"
  },
  61748: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_armour_2.53da1e527c48b877866b.png"
  },
  61751: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_blade.3d37b4381ec57c7c5f12.png"
  },
  61759: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_boots.0df60f839f45d53b57db.png"
  },
  61765: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_bow.dd2193ccfeb79156b67a.png"
  },
  61771: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_bow_charging_2.64d23989c5581badc951.png"
  },
  61774: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_bow_charging_3.b9906f0f7a99a367cc55.png"
  },
  61778: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_bow_charging_4.1ee4cad3a24bbd3e1fe9.png"
  },
  61780: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_chestplate.3d33e8b8ffaafdfad9e6.png"
  },
  61783: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_club.8112caa407a0a101e707.png"
  },
  61792: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_crossbow.b90ddc1c846009091ba4.png"
  },
  61794: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_crossbow_charged.9ae206c3e357ce57d167.png"
  },
  61797: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_crossbow_charging_2.bbc17660c08b1ebaa13a.png"
  },
  61806: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_crossbow_charging_3.04b89d8961bcb278525f.png"
  },
  61812: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_crossbow_charging_4.c4fd7aff9a20b604da0a.png"
  },
  61817: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_dagger.e9a03cf00945c12ee497.png"
  },
  61823: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_gauntlets.2164cd9bf622609b5cf2.png"
  },
  61825: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_guard.747bd5a026191ba18981.png"
  },
  61833: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_handle.3cc085b00ad4551b6418.png"
  },
  61836: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_helmet.40a85d105b48c28c33d9.png"
  },
  61842: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_leggings.b90eae4d3ba00a399cb2.png"
  },
  61847: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_mace.78a1285b1b00da59b024.png"
  },
  61849: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_shard.4b0a9960a7d2d39dd11f.png"
  },
  61854: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_spear.31a12491a9388c79ad41.png"
  },
  61863: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_staff.ff065da93ff186040e17.png"
  },
  61867: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_sword.15c4480450068a1ea085.png"
  },
  61876: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sanguine_whip.71f69ef8fa8f286ac406.png"
  },
  61884: (ee, ie, He) => {
    ee.exports = He.p + "static/media/scorched_sunfish.6e15267e9ec642473c55.png"
  },
  61892: (ee, ie, He) => {
    ee.exports = He.p + "static/media/scored_dace.559abc15d3b6d26fefcd.png"
  },
  61900: (ee, ie, He) => {
    ee.exports = He.p + "static/media/seahorse.e1a0a3847cc122b63fd2.png"
  },
  61902: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite.39bb3275f6eb7115a365.png"
  },
  61909: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_armour_2.63f0a58c09752e15be49.png"
  },
  61911: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_axe.4c01b433c6a91ba72b7c.png"
  },
  61915: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_boomerang.5f896e2185e8fa2732ce.png"
  },
  61922: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_boots.2fea43759c52564ebd5c.png"
  },
  61925: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_bow.750c732c11edab42da07.png"
  },
  61930: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_bow_charging_2.df21d5dd980874fe3f45.png"
  },
  61936: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_bow_charging_3.b002edadbe62a0169c32.png"
  },
  61945: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_bow_charging_4.a9500f42e19fb7d02c0b.png"
  },
  61951: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_chestplate.af6ccfe43b31ace2ebbc.png"
  },
  61957: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_club.bd6b497f5825765a2e3b.png"
  },
  61964: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_crossbow.39cf10b238a3af26d76b.png"
  },
  61969: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_crossbow_charged.e205a92f7e000fc4005c.png"
  },
  61977: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_crossbow_charging_2.f1351798997b4e6c0d19.png"
  },
  61983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_crossbow_charging_3.9c0beb54b899464b96a3.png"
  },
  61989: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_crossbow_charging_4.f2198bfb354193c0b71e.png"
  },
  61994: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_dagger.258527aa60ae9ee551fe.png"
  },
  61998: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_fragment.85b44e556bbf44d2e705.png"
  },
  62e3: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_gauntlets.d62406c9809857007efb.png"
  },
  62005: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_helmet.1acc1a75ba5bf5ea2425.png"
  },
  62009: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_hoe.553e71a1609dfdd50ac8.png"
  },
  62011: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_leggings.54a5999c62687bbb2588.png"
  },
  62014: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_mace.5e9ee5b7dcda993ada87.png"
  },
  62019: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_pickaxe.a4d0f9d42e8c35143be8.png"
  },
  62027: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_shovel.3f3950f715cc001b4966.png"
  },
  62034: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_spear.90ba6108a1f4aa322b51.png"
  },
  62037: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_sword.789785891e276d7bd616.png"
  },
  62039: (ee, ie, He) => {
    ee.exports = He.p + "static/media/serpentite_whip.c56033b5493c7eecaeeb.png"
  },
  62042: (ee, ie, He) => {
    ee.exports = He.p + "static/media/shadeback_ray.0da74cbe3cc0f9ee57b6.png"
  },
  62044: (ee, ie, He) => {
    ee.exports = He.p + "static/media/shadow_rose.9780b0d37b88f705d599.png"
  },
  62052: (ee, ie, He) => {
    ee.exports = He.p + "static/media/shears.318f76bfb9072a2c2a39.png"
  },
  62060: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sheep_painting.92a16b60c6719e40ceea.png"
  },
  62068: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sheep_spawn_orb.225089a660ab5d5640f8.png"
  },
  62077: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sheep_spawner_block_icon.4ad5e868df6d2709aa8f.png"
  },
  62086: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sheeps_milk.0e916e45b0da96e6d503.png"
  },
  62095: (ee, ie, He) => {
    ee.exports = He.p + "static/media/shield_arrow.adfc93b3d7cd7a516604.png"
  },
  62104: (ee, ie, He) => {
    ee.exports = He.p + "static/media/shield_potion.56147717d258b882279e.png"
  },
  62106: (ee, ie, He) => {
    ee.exports = He.p + "static/media/showcase.f142283e352f5044d5ee.png"
  },
  62115: (ee, ie, He) => {
    ee.exports = He.p + "static/media/siege_core.38778b47a11d63cd426a.png"
  },
  62120: (ee, ie, He) => {
    ee.exports = He.p + "static/media/silver_dragonfish.33f4b523d8cba1730f7f.png"
  },
  62128: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sky_pack.14751e0c521f66e1e25c.png"
  },
  62136: (ee, ie, He) => {
    ee.exports = He.p + "static/media/slime_spawn_orb.421e4f8cb326c30bf640.png"
  },
  62138: (ee, ie, He) => {
    ee.exports = He.p + "static/media/slime_spawner_block_icon.da9acc5353ef468460a3.png"
  },
  62141: (ee, ie, He) => {
    ee.exports = He.p + "static/media/slime_trail.c3c43b8cf45fe5324fb9.png"
  },
  62150: (ee, ie, He) => {
    ee.exports = He.p + "static/media/slowness_arrow.636e1928b3087229a585.png"
  },
  62157: (ee, ie, He) => {
    ee.exports = He.p + "static/media/slowness_potion.b9c5dc669a75773c160b.png"
  },
  62163: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_cactus.db4b875acd802ae1191b.png"
  },
  62167: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_black_icon.9103c47fd98c0be0e3f2.png"
  },
  62169: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_blue_icon.968883453165a1ee4b57.png"
  },
  62171: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_brown_icon.739f837b3e378af76a1d.png"
  },
  62178: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_cyan_icon.6f84113e55d70b403452.png"
  },
  62187: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_gray_icon.b5210536165dedaaeb97.png"
  },
  62193: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_green_icon.8615ac082e2f83548c86.png"
  },
  62200: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_light_blue_icon.aaeae788c1236fa73084.png"
  },
  62204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_light_gray_icon.fdef231e7e8ca445a65e.png"
  },
  62210: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_lime_icon.2025cbdaf7f8cd39b515.png"
  },
  62214: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_magenta_icon.6a96b5701da8bce867f3.png"
  },
  62221: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_orange_icon.93a3c82d1c11e310a2b2.png"
  },
  62225: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_pink_icon.bc575cd3f92abb8ef41e.png"
  },
  62232: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_purple_icon.5824f6f411c67c90f87d.png"
  },
  62238: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_red_icon.c75e45b584848c25a6dc.png"
  },
  62240: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_white_icon.f2ed64eeda4a3da3a42a.png"
  },
  62248: (ee, ie, He) => {
    ee.exports = He.p + "static/media/small_pod_yellow_icon.1e1cefe81360e7865b49.png"
  },
  62257: (ee, ie, He) => {
    ee.exports = He.p + "static/media/smoke_grenade.e890d234f18e70948cf1.png"
  },
  62264: (ee, ie, He) => {
    ee.exports = He.p + "static/media/snakehead.f2c74f314068e19456c0.png"
  },
  62270: (ee, ie, He) => {
    ee.exports = He.p + "static/media/snow_haddock.7ca1bb50667f7c0a5a08.png"
  },
  62274: (ee, ie, He) => {
    ee.exports = He.p + "static/media/snowball.f9b83057782f8e2ae9cc.png"
  },
  62282: (ee, ie, He) => {
    ee.exports = He.p + "static/media/snowdash.1a7648ba61f9d6014fa8.png"
  },
  62288: (ee, ie, He) => {
    ee.exports = He.p + "static/media/solar_panel.4eed061c3743c5f64260.png"
  },
  62297: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_armour_2.ffdb4ab204f4a7c778c0.png"
  },
  62301: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_boots.1a8a5304fd3f49480643.png"
  },
  62310: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_bow.10b31301458b3b372388.png"
  },
  62312: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_bow_charging_2.f2c4e9ae8a07b4991f6b.png"
  },
  62321: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_bow_charging_3.6015a5589a9c35a88883.png"
  },
  62323: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_bow_charging_4.285d687584bb9a511451.png"
  },
  62326: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_chestplate.e7a7cbad47fa3b7e526b.png"
  },
  62334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_club.94ebc5fa9b92b26661b1.png"
  },
  62341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_crossbow.4c2d1ca34471917a7b26.png"
  },
  62343: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_crossbow_charged.f73b4762fc1c2d611bc4.png"
  },
  62348: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_crossbow_charging_2.619637d809feed3bcc68.png"
  },
  62356: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_crossbow_charging_3.9a9e4d704e0552be13c9.png"
  },
  62359: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_crossbow_charging_4.c2e862ebe6f85c168690.png"
  },
  62361: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_dagger.1474632923906a9b28b8.png"
  },
  62366: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_door.0026087bc4226bda23eb.png"
  },
  62375: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_fence.0dc78c11fe927a448f5d.png"
  },
  62378: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_fence_gate.9a4ae63100acd36254e6.png"
  },
  62387: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_gauntlets.1ab9578b7ab08d58f981.png"
  },
  62390: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_grass.16aa1c506434ba29d2ef.png"
  },
  62392: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_helmet.a6e9d367d2146c47aad0.png"
  },
  62397: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_item_pedestal.5c981580bad214e7df9c.png"
  },
  62403: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_leggings.3cf407408a30962cdd27.png"
  },
  62411: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_mace.50c11d32a43b0a47fdb6.png"
  },
  62413: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_sapling.789fd28d738c93ece82f.png"
  },
  62418: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_shard.fffeb7e8c6a20f948f83.png"
  },
  62424: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_spear.c713bca9231175745703.png"
  },
  62433: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_staff.db1e821f211dfd64a266.png"
  },
  62442: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_sword.468e046d73691217296c.png"
  },
  62447: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_trapdoor.25d477d58844f722654d.png"
  },
  62453: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spectral_whip.4eda2aaeb7867d8189fb.png"
  },
  62457: (ee, ie, He) => {
    ee.exports = He.p + "static/media/speed_arrow.624a52fd9871b2bf0e73.png"
  },
  62466: (ee, ie, He) => {
    ee.exports = He.p + "static/media/speed_potion.fd5183d76145c085f6e2.png"
  },
  62468: (ee, ie, He) => {
    ee.exports = He.p + "static/media/speed_rod.e277c77106aca9eb946e.png"
  },
  62471: (ee, ie, He) => {
    ee.exports = He.p + "static/media/speedboat.221f983f4386a06bc8d9.png"
  },
  62475: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spent_pellet.bde6279bc5745b8fa209.png"
  },
  62479: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spiked_boots.2540c84c81d421781bbb.png"
  },
  62486: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_diamond.4c3a82c94a3ec4ecf712.png"
  },
  62490: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_gold.d602bdff340cd911b10a.png"
  },
  62496: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_iron.b6645ea5b7a3652d9aa9.png"
  },
  62501: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_kill.bb99462b79941a69a8ee.png"
  },
  62503: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_stone.528de7cbddb16728c348.png"
  },
  62508: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spikes_wood.979cf3f00f6716c131d0.png"
  },
  62513: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spined_stickleback.b1da978183fd56f23a0e.png"
  },
  62519: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_bear_spawn_orb.20b32d9ff0734c24520f.png"
  },
  62521: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_bear_spawner_block_icon.3bc04ef5f8bc6a511a76.png"
  },
  62528: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_golem_spawn_orb.aca1a72f86ebf0e0b837.png"
  },
  62535: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_golem_spawner_block_icon.436a4cb053e6f599374c.png"
  },
  62538: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_gorilla_spawn_orb.28195fca5578ed249fba.png"
  },
  62541: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_gorilla_spawner_block_icon.318a441d46a8e2eefdd5.png"
  },
  62545: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_saddle.15155ae6f1d95c08d5cc.png"
  },
  62549: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_stag_spawn_orb.4d28ec6519b92b0c37c1.png"
  },
  62555: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_stag_spawner_block_icon.37fed858090e42faf9b8.png"
  },
  62558: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_wolf_spawn_orb.457829838a4f578087c9.png"
  },
  62561: (ee, ie, He) => {
    ee.exports = He.p + "static/media/spirit_wolf_spawner_block_icon.a82aa0eff42a9231599b.png"
  },
  62566: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_aura_xp_potion.ad516d0c505d433b004a.png"
  },
  62573: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_brain_rot_potion.5080ffde67b52c4573d5.png"
  },
  62578: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_defense_potion.554f8ea695d576e699d3.png"
  },
  62582: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_double_jump_potion.52c281472edd48e50ddc.png"
  },
  62584: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_haste_potion.c6d102dbdbfe9a586bd0.png"
  },
  62590: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_heal_potion.53237eafe7e4f033c4c7.png"
  },
  62593: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_heat_resistance_potion.a6cc1fab05252d19ef86.png"
  },
  62601: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_instant_damage_potion.c6a52336a182ad390a3d.png"
  },
  62607: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_invisibility_potion.652c5c5cf6d235ebf2dd.png"
  },
  62610: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_jump_potion.da093135c80da78a5327.png"
  },
  62615: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_knockback_potion.4c1501da1968ac8d976e.png"
  },
  62618: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_milk_potion.413cddfe9cfcc2392457.png"
  },
  62625: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_mining_yield_potion.17f5920845b07925d888.png"
  },
  62627: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_poison.a8d8936478e3e15b6daf.png"
  },
  62631: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_regen_potion.2d992adf5bd03e8696ae.png"
  },
  62640: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_shield_potion.9263122b1ccc1d34d493.png"
  },
  62645: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_slowness_potion.902e9ed2d792345b800f.png"
  },
  62654: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_speed_potion.caf1acb57403fb053507.png"
  },
  62657: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_strength_potion.9e1746b870259431c0f6.png"
  },
  62660: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_weakness_potion.a6e940cc4ddff5a12881.png"
  },
  62663: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splash_x_ray_vision_potion.0563e6645618b9f01bcc.png"
  },
  62670: (ee, ie, He) => {
    ee.exports = He.p + "static/media/splitter_pipe.af576d3ef1e3e8fb65b8.png"
  },
  62673: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stag_spawn_orb.d99cb6eca4749d972d76.png"
  },
  62682: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stag_spawner_block_icon.e52c7bc1abac1384d6f5.png"
  },
  62689: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stalker_spawn_orb.673d070fc2bf86619d41.png"
  },
  62697: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stalker_spawner_block_icon.6f4943e594d1e15630e2.png"
  },
  62700: (ee, ie, He) => {
    ee.exports = He.p + "static/media/star_alloy.2199a56f0a6a500f1f98.png"
  },
  62705: (ee, ie, He) => {
    ee.exports = He.p + "static/media/starbore_drill.7f7935f6cfcf13fc10d3.png"
  },
  62708: (ee, ie, He) => {
    ee.exports = He.p + "static/media/steak.0c462106b6b946bf7902.png"
  },
  62717: (ee, ie, He) => {
    ee.exports = He.p + "static/media/steel_bar.6089e924c53d753854e5.png"
  },
  62726: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stick.9f0437056b663c299eab.png"
  },
  62728: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_axe.20082fa6158f1ea0a269.png"
  },
  62732: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_blade.0a0db93857ea9da4da5a.png"
  },
  62735: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_boomerang.787cf5b63c0ec0be57d3.png"
  },
  62739: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_bow.e23566af15e2b608cda7.png"
  },
  62747: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_bow_charging_2.924985823600865493c7.png"
  },
  62752: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_bow_charging_3.004a6211e708baf4993d.png"
  },
  62754: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_bow_charging_4.942baee1cbedb7c0f9f8.png"
  },
  62759: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_club.390fa83f767b56f17cee.png"
  },
  62766: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_crossbow.2866220af40b464df6b0.png"
  },
  62773: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_crossbow_charged.a814f933bb8dcdc7190e.png"
  },
  62778: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_crossbow_charging_2.fa23e62edc76bdeddf77.png"
  },
  62787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_crossbow_charging_3.10e35325aab21f1e4cfb.png"
  },
  62789: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_crossbow_charging_4.f7e109dd56ce024c098b.png"
  },
  62795: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_dagger.016082105b78c39af65f.png"
  },
  62804: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_enchanting_table.601fff431af97b977291.png"
  },
  62809: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_grouper.02c901be33b5a10cc297.png"
  },
  62813: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_guard.1c9729ad79f8c36425dc.png"
  },
  62819: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_handle.f0b0b955a856aff6a239.png"
  },
  62823: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_hoe.0fd035ae77cd3425c2fb.png"
  },
  62829: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_key.70b593fd1a01a121b94d.png"
  },
  62833: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_mace.9714336bca8d915bf117.png"
  },
  62841: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_pickaxe.8129e5c95c819f02271d.png"
  },
  62844: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_shovel.648b6f2cb8d588987d5e.png"
  },
  62850: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_spear.aeaf6fe02762625526e2.png"
  },
  62859: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_sword.5bc8ad08e567e71050f3.png"
  },
  62867: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_trophy.500e60b8aa0e58d3a2aa.png"
  },
  62876: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stone_whip.5d766f66b89d93d1a960.png"
  },
  62879: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strawberry_bush_stage0.707abb9be614ae42e9df.png"
  },
  62881: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strawberry_bush_stage1.e2ce067529a2f8e98081.png"
  },
  62887: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strawberry_bush_stage2.d898a6544088ad5a7687.png"
  },
  62889: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strength_arrow.20cbae1021aaf6499ed3.png"
  },
  62894: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strength_potion.4fd19587a19efc671bca.png"
  },
  62896: (ee, ie, He) => {
    ee.exports = He.p + "static/media/string.90fb59015dec34b646ca.png"
  },
  62901: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strongfish_green.1011c9a18b738472b59a.png"
  },
  62905: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strongfish_moon.0dcdd72c535b8d2f0323.png"
  },
  62909: (ee, ie, He) => {
    ee.exports = He.p + "static/media/strongfish_red.dcea90487cf9da4a8b66.png"
  },
  62917: (ee, ie, He) => {
    ee.exports = He.p + "static/media/stuffed_pepper.9984ec0a4c07bf76c731.png"
  },
  62922: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sturdy_rod.89c15c94c68b40f27074.png"
  },
  62930: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sugar_cane_plant_stage0.2928703a140faafdf81a.png"
  },
  62937: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sugar_cane_plant_stage1.d46f403f644263db1c78.png"
  },
  62942: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sugar_cane_plant_stage2.5ead46df1c8ed428ea4e.png"
  },
  62949: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sugar_cane_plant_stage2_top.22f322f20c2243c08435.png"
  },
  62957: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sumpback_carp.e3147f5019ea2a24653f.png"
  },
  62960: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sunset_minnow.38561211d0b3d51bd014.png"
  },
  62969: (ee, ie, He) => {
    ee.exports = He.p + "static/media/super_rpg.3980bdf1f97f25f248ff.png"
  },
  62975: (ee, ie, He) => {
    ee.exports = He.p + "static/media/sushi.af5e1c0b5a20a1eda0ea.png"
  },
  62977: (ee, ie, He) => {
    ee.exports = He.p + "static/media/swap_orb.5a4b74457739c936a5cf.png"
  },
  62982: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tall_grass_bottom.d1486ff65d7053080df2.png"
  },
  62990: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tall_grass_top.c47b5954f3b634c3e8d3.png"
  },
  62993: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tallgrass.4023a10eead730ba902e.png"
  },
  63e3: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tangle_resistant_rod.e4e879d83970a5096e83.png"
  },
  63006: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tarpon.cc8f3d006fd48b513992.png"
  },
  63013: (ee, ie, He) => {
    ee.exports = He.p + "static/media/teleport_heart.f2e4f19e8b5ad596ff2e.png"
  },
  63017: (ee, ie, He) => {
    ee.exports = He.p + "static/media/teleportation_potion.03b9d85ef9e9d285666f.png"
  },
  63021: (ee, ie, He) => {
    ee.exports = He.p + "static/media/threadfin_bream.1b576089249eaa5ff4c5.png"
  },
  63025: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tiki_terror_spawn_orb.d3aea312527843c14f86.png"
  },
  63033: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tiki_terror_spawner_block_icon.400df784d38b77ac0de8.png"
  },
  63036: (ee, ie, He) => {
    ee.exports = He.p + "static/media/timed_spike_bomb.b7871308bea0db64c553.png"
  },
  63040: (ee, ie, He) => {
    ee.exports = He.p + "static/media/timed_spike_bomb_charging_2.ff7f6d5f7ab235b7476e.png"
  },
  63048: (ee, ie, He) => {
    ee.exports = He.p + "static/media/timed_spike_bomb_charging_3.ebcdddf9bd96f5e95627.png"
  },
  63050: (ee, ie, He) => {
    ee.exports = He.p + "static/media/timed_spike_bomb_charging_4.13a2812ed9b6ec26ef5e.png"
  },
  63053: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tomato.e7617b7a90240ff8f0da.png"
  },
  63055: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tomato_plant_stage0.88ec6a308e2b5208057e.png"
  },
  63057: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tomato_plant_stage1.0f51dcf40612a56dfc4b.png"
  },
  63063: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tomato_plant_stage2.406c8cc0e768b506cb0f.png"
  },
  63065: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tomato_plant_stage2_top.e3c3e386cc51643d7435.png"
  },
  63074: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch.179c69f3e33d42b9cdf9.png"
  },
  63082: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_black.dfce4ad592bd4d6fadec.png"
  },
  63085: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_blue.c31bb6d335f9ce111822.png"
  },
  63087: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_brown.134f6aa06aab853da3e9.png"
  },
  63093: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_cyan.eea34504941dac7ea1e3.png"
  },
  63100: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_gray.6d42e5b972bd1c9db7e7.png"
  },
  63106: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_green.094cda24ed4438dc5657.png"
  },
  63111: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_light_blue.c4e379bcdb4b53e44b41.png"
  },
  63117: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_light_gray.f3f738aa9aa660005fbe.png"
  },
  63126: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_lime.1c68e40bb4c69acbaae6.png"
  },
  63131: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_magenta.caccfa4967e2c4e16949.png"
  },
  63139: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_orange.cf85bb2702abfaef9eb4.png"
  },
  63141: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_pink.0f2d12662c94208b4c8b.png"
  },
  63147: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_purple.67664df6b5dbff915395.png"
  },
  63152: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_red.84dd920286db776482d7.png"
  },
  63157: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_white.1d63ee0333d46017cd97.png"
  },
  63166: (ee, ie, He) => {
    ee.exports = He.p + "static/media/torch_yellow.63be56258df9f6b1043e.png"
  },
  63169: (ee, ie, He) => {
    ee.exports = He.p + "static/media/toxin_ball.3914d6432917873c3d70.png"
  },
  63177: (ee, ie, He) => {
    ee.exports = He.p + "static/media/tri_pointed_needlefish.5a49274d7e0c68fddddb.png"
  },
  63182: (ee, ie, He) => {
    ee.exports = He.p + "static/media/truffle.3bbb43403fc456358da2.png"
  },
  63188: (ee, ie, He) => {
    ee.exports = He.p + "static/media/truffle_oil.0c0c758d262429b6238e.png"
  },
  63193: (ee, ie, He) => {
    ee.exports = He.p + "static/media/unlucky_bomb.b734b065a2a33b774f04.png"
  },
  63200: (ee, ie, He) => {
    ee.exports = He.p + "static/media/updraft.549a985d3c04068ac957.png"
  },
  63204: (ee, ie, He) => {
    ee.exports = He.p + "static/media/uranium_grit.2739facaf6004d1d8e00.png"
  },
  63210: (ee, ie, He) => {
    ee.exports = He.p + "static/media/uranium_pellet.98dc39d1a7b96baaa0df.png"
  },
  63217: (ee, ie, He) => {
    ee.exports = He.p + "static/media/veg_soup.c31eae8c241fa6356136.png"
  },
  63219: (ee, ie, He) => {
    ee.exports = He.p + "static/media/vein_breaker.49a1ac37e5429add07fe.png"
  },
  63225: (ee, ie, He) => {
    ee.exports = He.p + "static/media/vending_machine.b86a3b856a67929528b1.png"
  },
  63230: (ee, ie, He) => {
    ee.exports = He.p + "static/media/vine.4d485b02f3aaee2b47ee.png"
  },
  63234: (ee, ie, He) => {
    ee.exports = He.p + "static/media/vine_coloured.eb013da6a9ca501ce07a.png"
  },
  63237: (ee, ie, He) => {
    ee.exports = He.p + "static/media/void_net.a01a20ea3b802fe5a14e.png"
  },
  63243: (ee, ie, He) => {
    ee.exports = He.p + "static/media/volcanic_catfish.4ca95805901ab82f211c.png"
  },
  63250: (ee, ie, He) => {
    ee.exports = He.p + "static/media/volcanic_semperi.ff5a4c7bc5f796a7ab74.png"
  },
  63253: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltite_cell.0feb1f137e8b3640a9d4.png"
  },
  63260: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltite_dust.712ff89b4b433382b9d3.png"
  },
  63263: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_armour_2.2985cc38fe18d535f3cb.png"
  },
  63268: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_boots.ad2e7189dbd0219a8ebd.png"
  },
  63277: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_chestplate.10287caaf2697f6c9687.png"
  },
  63280: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_gauntlets.68f879a73a5d7ca01c48.png"
  },
  63287: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_helmet.0b5e79a64571adf0e9be.png"
  },
  63295: (ee, ie, He) => {
    ee.exports = He.p + "static/media/voltplate_leggings.64c15dcf25d90e2136fa.png"
  },
  63298: (ee, ie, He) => {
    ee.exports = He.p + "static/media/warped_trapdoor.25d477d58844f722654d.png"
  },
  63307: (ee, ie, He) => {
    ee.exports = He.p + "static/media/water_bottle.3d7c4351a4ce829a6a4f.png"
  },
  63316: (ee, ie, He) => {
    ee.exports = He.p + "static/media/water_bucket.8706824e8667497734f5.png"
  },
  63323: (ee, ie, He) => {
    ee.exports = He.p + "static/media/watermelon_seeds.6f088f06e25aed52cf40.png"
  },
  63326: (ee, ie, He) => {
    ee.exports = He.p + "static/media/watermelon_slice.a4834dcedbfbaa43fe13.png"
  },
  63334: (ee, ie, He) => {
    ee.exports = He.p + "static/media/weakness_arrow.f5225d78018e9b8f7f22.png"
  },
  63341: (ee, ie, He) => {
    ee.exports = He.p + "static/media/weakness_potion.340e9a742a67b0837912.png"
  },
  63349: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wheat.fa0f52338c8c342fc6b2.png"
  },
  63356: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wheat_seeds.fc28697814b038127520.png"
  },
  63360: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wheatfish.8ba702542af538ad634b.png"
  },
  63362: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wheel.cfe844c7e15f73dbe5f5.png"
  },
  63370: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_balloon.833f4e779517fd821fa5.png"
  },
  63378: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_bed.79fdecb72085e53e0b7a.png"
  },
  63381: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_directional_arrow.a038ec4f309df85fac56.png"
  },
  63387: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_heavy_paintball_gun.7b786a5b3d336e2ff3d4.png"
  },
  63390: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_kart.b770358e8a1b5608b7dd.png"
  },
  63397: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paint_bow.cb9af76dc0290fe54f35.png"
  },
  63404: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paint_bow_charging_2.4725e1ef3b9fe2aac7fa.png"
  },
  63412: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paint_bow_charging_3.d4104998c6234fb41e33.png"
  },
  63420: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paint_bow_charging_4.d8b726258d60aafe1b98.png"
  },
  63429: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paintball.1ab3b58a45c915f5641a.png"
  },
  63433: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_paintball_gun.dbdae503717b1ab1bf0e.png"
  },
  63441: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_popup_tower.b7f4ccf087fe2c2c0dae.png"
  },
  63448: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_strongbed.dc3407ac52d55f4f4ab9.png"
  },
  63453: (ee, ie, He) => {
    ee.exports = He.p + "static/media/white_tulip.7855711c5ddaa5d51278.png"
  },
  63462: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wildcat_painting.7665936e7385c2d0d3d5.png"
  },
  63466: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wildcat_spawn_orb.c4e8c3b3e898321c3ed0.png"
  },
  63474: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wildcat_spawner_block_icon.3195a458d56382968a19.png"
  },
  63481: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wire.ec7e49635241f8071059.png"
  },
  63488: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wireless_terminal.c4a8ac924e834638d0d2.png"
  },
  63490: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wolf_painting.6e3ae9494865c0d06884.png"
  },
  63492: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wolf_spawn_orb.d743087237c7c737deb0.png"
  },
  63496: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wolf_spawner_block_icon.c32c69b870e8e654e094.png"
  },
  63499: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_armour_2.7fa2d805081c7d30729c.png"
  },
  63507: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_blade.8d235f59ed33aab5cd03.png"
  },
  63516: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_boomerang.15bf93512d1a72535f30.png"
  },
  63521: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_boots.2f49dbee759122d42d0d.png"
  },
  63527: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_bow.8a5d6c9064c98cdbb416.png"
  },
  63533: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_bow_charging_2.1dc962531bd0231d1fdf.png"
  },
  63540: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_bow_charging_3.7d59a3bee7cc3185c8df.png"
  },
  63549: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_bow_charging_4.97d5ebf1e315032a977c.png"
  },
  63554: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_chestplate.fa1c8080ba0281b2b992.png"
  },
  63557: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_club.9b61b9d2d6b669490c45.png"
  },
  63563: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_crossbow.9e6328bea8e97686edc6.png"
  },
  63566: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_crossbow_charged.7148080397bfa1ce0dad.png"
  },
  63570: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_crossbow_charging_2.93c5b620e6aff2a6fe3a.png"
  },
  63574: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_crossbow_charging_3.5aedfc2dad2e7b2d7413.png"
  },
  63583: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_crossbow_charging_4.1df399770445a86f3d62.png"
  },
  63586: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_dagger.a519f8d32fffec3aa265.png"
  },
  63591: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_enchanting_table.6fad7ccd1676d32fbf29.png"
  },
  63598: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_gauntlets.71e9af82289ba51b657c.png"
  },
  63606: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_guard.4b6b22f2b17daeddc824.png"
  },
  63613: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_handle.b145a2be350b582e7949.png"
  },
  63620: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_helmet.9c2dd50283ee3f68a124.png"
  },
  63626: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_leggings.89e3831cce689fba46fa.png"
  },
  63631: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_mace.d71b8b7ef297ec59f510.png"
  },
  63635: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_spear.152190a0e0cb3d886d20.png"
  },
  63637: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_trophy.c3b97a60a3af6ced7793.png"
  },
  63644: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wood_whip.dd11c6df437302d992d6.png"
  },
  63647: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_axe.89b509382eb5c01b01b1.png"
  },
  63654: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_hoe.e2fcc7281ea874b92643.png"
  },
  63659: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_key.a4de632d599b24e66dc3.png"
  },
  63662: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_pickaxe.19590026aac4b54b502d.png"
  },
  63664: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_shovel.a2526b439ddce51279fe.png"
  },
  63671: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wooden_sword.e16df3a892cf4c72dc36.png"
  },
  63674: (ee, ie, He) => {
    ee.exports = He.p + "static/media/workbench.9fa89dcd2ecc5c77cb07.png"
  },
  63679: (ee, ie, He) => {
    ee.exports = He.p + "static/media/worldbuilder_wand.b944c812cb8864a2da6d.png"
  },
  63684: (ee, ie, He) => {
    ee.exports = He.p + "static/media/wrench.d694b9a6eb66e2ff1cff.png"
  },
  63690: (ee, ie, He) => {
    ee.exports = He.p + "static/media/x_ray_vision_arrow.0e72ae484af7ccc9f081.png"
  },
  63695: (ee, ie, He) => {
    ee.exports = He.p + "static/media/x_ray_vision_potion.0e549bc0540815c2bec3.png"
  },
  63700: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_balloon.31e274ea1f810d8c600c.png"
  },
  63708: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_bed.1c59345ef0c97b0e9f31.png"
  },
  63717: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_directional_arrow.4aa90e46b0086e6d6486.png"
  },
  63726: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_heavy_paintball_gun.811749b6df332c67e3ad.png"
  },
  63730: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_kart.21cb957b7722caa182b2.png"
  },
  63734: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paint_bow.78c4c1ca90d2c2f5c385.png"
  },
  63738: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paint_bow_charging_2.44f5e25d46eeedec68a3.png"
  },
  63744: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paint_bow_charging_3.010b1c1e9841dc2501c7.png"
  },
  63749: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paint_bow_charging_4.db7bd5882283c9bbbf21.png"
  },
  63755: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paintball.92adf4392c2fcbdeedb2.png"
  },
  63759: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_paintball_gun.526fed9852fcc7a3b9b1.png"
  },
  63767: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_popup_tower.5a71be472e7775dbb479.png"
  },
  63771: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yellow_strongbed.c705d6de6a09381b64a9.png"
  },
  63774: (ee, ie, He) => {
    ee.exports = He.p + "static/media/yoghurt_pot.2b6de9af538ddb1200ad.png"
  },
  54115: (ee, ie, He) => {
    ee.exports = He.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);