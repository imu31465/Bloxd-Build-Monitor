export const id = 49;
export const ids = [49];
export const modules = {
  52670: (BB, OB, GB) => {
    var YB = {
      "./cape_cow_cream.png": 51762,
      "./cape_cow_normal.png": 51768,
      "./cape_creator_level1.png": 51777,
      "./cape_creator_level2.png": 51779,
      "./cape_creator_level3.png": 51787,
      "./cape_none.png": 51794,
      "./cape_pig.png": 51801,
      "./cape_sheep.png": 51809,
      "./cape_super.png": 51813,
      "./cape_super_inverted.png": 51822,
      "./cape_youtuber.png": 51825
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 52670
  },
  52678: (BB, OB, GB) => {
    var YB = {
      "./Player_Atlas.png": 51691,
      "./astro_set_1_attachable.png": 51698,
      "./astro_set_2_attachable.png": 51701,
      "./astro_set_3_attachable.png": 51707,
      "./astro_set_4_attachable.png": 51714,
      "./beaver_lumberjack.png": 51722,
      "./bee_set_1_attachable.png": 51730,
      "./bee_set_2_attachable.png": 51735,
      "./bee_set_3_attachable_blue.png": 51743,
      "./bee_set_3_attachable_green.png": 51745,
      "./bee_set_3_attachable_red.png": 51751,
      "./bee_set_4_attachable.png": 51753,
      "./capeTextures/cape_cow_cream.png": 51762,
      "./capeTextures/cape_cow_normal.png": 51768,
      "./capeTextures/cape_creator_level1.png": 51777,
      "./capeTextures/cape_creator_level2.png": 51779,
      "./capeTextures/cape_creator_level3.png": 51787,
      "./capeTextures/cape_none.png": 51794,
      "./capeTextures/cape_pig.png": 51801,
      "./capeTextures/cape_sheep.png": 51809,
      "./capeTextures/cape_super.png": 51813,
      "./capeTextures/cape_super_inverted.png": 51822,
      "./capeTextures/cape_youtuber.png": 51825,
      "./chef_attachables.png": 51827,
      "./christmas_elf_attachable.png": 51834,
      "./christmas_snowman_attachable.png": 51839,
      "./dwarf_blue_hair.png": 51842,
      "./dwarf_braided_hair.png": 51848,
      "./dwarf_child.png": 51856,
      "./dwarf_forked_beard.png": 51860,
      "./dwarf_ginger_beard.png": 51865,
      "./dwarf_grey_beard.png": 51870,
      "./dwarf_hair_buns.png": 51878,
      "./dwarf_purple_beard.png": 51880,
      "./dwarf_red_hair.png": 51882,
      "./dwarf_short_beard.png": 51891,
      "./farmer_gill_attachable.png": 51893,
      "./farmer_head.png": 51899,
      "./fire_mage_attachable.png": 51901,
      "./forge_mother.png": 51904,
      "./furry_bear_attachables.png": 51909,
      "./furry_kitsune_attachables.png": 51916,
      "./furry_kitsune_tail_single.png": 51919,
      "./furry_kitsune_tails.png": 51927,
      "./furry_shark_attachables.png": 51931,
      "./furry_shark_tail.png": 51938,
      "./furry_wolfKnight_attachables.png": 51944,
      "./furry_wolfKnight_tail.png": 51946,
      "./general_attachable.png": 51948,
      "./goblin_goggles.png": 51953,
      "./goblin_mad_scientist.png": 51956,
      "./highSociety_set_1_attachable.png": 51961,
      "./highSociety_set_2_attachable.png": 51967,
      "./highSociety_set_3_attachable.png": 51969,
      "./highSociety_set_4_attachable.png": 51974,
      "./human_archer.png": 51978,
      "./human_desert_guard.png": 51984,
      "./human_sentry.png": 51993,
      "./ice_wings_attachable.png": 51997,
      "./jackal_priest.png": 52001,
      "./jetpack_attachable.png": 52003,
      "./medieval_set_1_attachable_blue.png": 52007,
      "./medieval_set_1_attachable_green.png": 52010,
      "./medieval_set_1_attachable_purple.png": 52018,
      "./medieval_set_1_attachable_red.png": 52027,
      "./medieval_set_1_attachable_yellow.png": 52033,
      "./medieval_set_2_attachable_blue.png": 52038,
      "./medieval_set_2_attachable_purple.png": 52043,
      "./medieval_set_2_attachable_red.png": 52046,
      "./medieval_set_3_attachable_green.png": 52052,
      "./medieval_set_3_attachable_pink.png": 52054,
      "./medieval_set_3_attachable_purple.png": 52057,
      "./medieval_set_3_attachable_red.png": 52059,
      "./medieval_set_4_attachable_blue.png": 52065,
      "./medieval_set_4_attachable_hair.png": 52068,
      "./medieval_set_4_attachable_purple.png": 52077,
      "./medieval_set_4_attachable_red.png": 52081,
      "./mining_helmet_attachable.png": 52090,
      "./minotaur.png": 52094,
      "./minotaur_elder.png": 52098,
      "./minotaur_warrior.png": 52104,
      "./monster_hunter_lorenzo_attachable.png": 52109,
      "./nova_jetpack_attachable.png": 52113,
      "./npc_pig_head.png": 52120,
      "./painter_spencer_attachable.png": 52123,
      "./pet_reindeer.png": 52126,
      "./pig_napoleon.png": 52132,
      "./pig_worker_attachable.png": 52141,
      "./piggy_banker_head.png": 52144,
      "./portal_mage_hat.png": 52146,
      "./rabbit_aristocrat_attachable.png": 52152,
      "./skis_attachable.png": 52159,
      "./smuglyn_attachable.png": 52164,
      "./spring_set_1_attachable.png": 52168,
      "./spring_set_2_attachable.png": 52177,
      "./spring_set_3_attachable.png": 52186,
      "./spring_set_4_attachable.png": 52189,
      "./tentacle_boy.png": 52192,
      "./tentacle_girl_attachable.png": 52194,
      "./tentacle_guy_attachable.png": 52202,
      "./tentacle_guy_fisherman_attachable.png": 52207,
      "./trader_cowl_black.png": 52214,
      "./trader_cowl_blue.png": 52216,
      "./ugly_sweater_attachable.png": 52218,
      "./wolf_in_suit_attachable.png": 52226,
      "./wolf_security.png": 52230,
      "./y2k_set_1_attachable.png": 52234,
      "./y2k_set_2_attachable.png": 52241,
      "./y2k_set_3_attachable.png": 52247,
      "./y2k_set_4_attachable.png": 52250
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 52678
  },
  50089: (BB, OB, GB) => {
    var YB = {
      "./67/67_Model.glb": 50094,
      "./67/67_Reconstructed.glb": 50100,
      "./Armour Collector/Armour Collector_Model.glb": 50103,
      "./Armour Collector/Armour Collector_Reconstructed.glb": 50108,
      "./Bear/Bear_Model.glb": 50113,
      "./Bobino Musculino/Bobino Musculino_Model.glb": 50121,
      "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 50123,
      "./Camel/Camel_Model.glb": 50127,
      "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 50136,
      "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 50145,
      "./Cave Golem/Cave Golem_Model.glb": 50148,
      "./Cow/Cow_Model.glb": 50155,
      "./Crone/Crone_Model.glb": 50158,
      "./Deer/Deer_Model.glb": 50160,
      "./Desert Fennec/Desert Fennec_Model.glb": 50163,
      "./Diamond Guardian/Diamond Guardian_Model.glb": 50171,
      "./Diamond Guardian/Diamond Guardian_Reconstructed.glb": 50174,
      "./Draugr Knight/Draugr Knight_Model.glb": 50176,
      "./Draugr Reaver/Draugr Reaver_Model.glb": 50180,
      "./Draugr Skeleton/Draugr Skeleton_Model.glb": 50188,
      "./Draugr Warper/Draugr Warper_Model.glb": 50195,
      "./Draugr Zombie/Draugr Zombie_Model.glb": 50202,
      "./Evil Tome/Evil Tome_Model.glb": 50208,
      "./Frost Wraith/Frost Wraith_Model.glb": 50216,
      "./Furnace Knight/Furnace Knight_Model.glb": 50220,
      "./Furnace Knight/Furnace Knight_Reconstructed.glb": 50227,
      "./Glass Bro/Glass Bro_Model.glb": 50235,
      "./Glass Bro/Glass Bro_Reconstructed.glb": 50244,
      "./Glass Gremlin/Glass Gremlin_Model.glb": 50252,
      "./Glass Gremlin/Glass Gremlin_Reconstructed.glb": 50259,
      "./Gold Guardian/Gold Guardian_Model.glb": 50265,
      "./Gold Guardian/Gold Guardian_Reconstructed.glb": 50267,
      "./Gorilla/Gorilla_Model.glb": 50270,
      "./Horse/Horse_Model.glb": 50272,
      "./Iron Goofy Golem/Iron Goofy Golem_Model.glb": 50276,
      "./Iron Guardian/Iron Guardian_Model.glb": 50282,
      "./Iron Guardian/Iron Guardian_Reconstructed.glb": 50286,
      "./Lil Knight/Lil Knight_Model.glb": 50294,
      "./Lil Knight/Lil Knight_Reconstructed.glb": 50300,
      "./Lord Vulcan/Lord Vulcan_Model.glb": 50306,
      "./Lord Vulcan/Lord Vulcan_Reconstructed.glb": 50312,
      "./Magma Toad/Magma Toad_Model.glb": 50318,
      "./Moonstone Guardian/Moonstone Guardian_Model.glb": 50320,
      "./Moonstone Guardian/Moonstone Guardian_Reconstructed.glb": 50323,
      "./Mummy/Mummy_Model.glb": 50329,
      "./Mummy/Mummy_Reconstructed.glb": 50332,
      "./Pig/Pig_Model.glb": 50338,
      "./Player/Player_Model.glb": 50346,
      "./Player/Player_Reconstructed.glb": 50354,
      "./Player/astro_set_1_attachable.glb": 50360,
      "./Player/astro_set_2_attachable.glb": 50366,
      "./Player/astro_set_3_attachable.glb": 50373,
      "./Player/astro_set_4_attachable.glb": 50376,
      "./Player/beaver_lumberjack.glb": 50379,
      "./Player/bee_set_1_attachable.glb": 50381,
      "./Player/bee_set_2_attachable.glb": 50388,
      "./Player/bee_set_3_attachable.glb": 50397,
      "./Player/bee_set_4_attachable.glb": 50400,
      "./Player/cape_cuboid_18_12.glb": 50406,
      "./Player/chef_attachables.glb": 50411,
      "./Player/christmas_elf_attachable.glb": 50417,
      "./Player/christmas_snowman_attachable.glb": 50426,
      "./Player/dwarf_blue_hair.glb": 50435,
      "./Player/dwarf_braided_hair.glb": 50444,
      "./Player/dwarf_child.glb": 50447,
      "./Player/dwarf_forked_beard.glb": 50449,
      "./Player/dwarf_ginger_beard.glb": 50458,
      "./Player/dwarf_grey_beard.glb": 50461,
      "./Player/dwarf_hair_buns.glb": 50465,
      "./Player/dwarf_purple_beard.glb": 50472,
      "./Player/dwarf_red_hair.glb": 50476,
      "./Player/dwarf_short_beard.glb": 50478,
      "./Player/farmer_gill_attachable.glb": 50487,
      "./Player/farmer_head.glb": 50494,
      "./Player/fire_mage_attachable.glb": 50497,
      "./Player/forge_mother.glb": 50502,
      "./Player/furry_bear_attachables.glb": 50504,
      "./Player/furry_kitsune_attachables.glb": 50510,
      "./Player/furry_kitsune_tail_single.glb": 50512,
      "./Player/furry_kitsune_tails.glb": 50517,
      "./Player/furry_shark_attachables.glb": 50521,
      "./Player/furry_shark_tail.glb": 50529,
      "./Player/furry_wolfKnight_attachables.glb": 50536,
      "./Player/furry_wolfKnight_tail.glb": 50538,
      "./Player/general_attachable.glb": 50547,
      "./Player/goblin_goggles.glb": 50551,
      "./Player/goblin_mad_scientist.glb": 50560,
      "./Player/highSociety_set_1_attachable.glb": 50566,
      "./Player/highSociety_set_2_attachable.glb": 50575,
      "./Player/highSociety_set_3_attachable.glb": 50584,
      "./Player/highSociety_set_4_attachable.glb": 50589,
      "./Player/human_archer.glb": 50594,
      "./Player/human_desert_guard.glb": 50602,
      "./Player/human_sentry.glb": 50606,
      "./Player/ice_wings_attachable.glb": 50608,
      "./Player/jackal_priest.glb": 50610,
      "./Player/jetpack_attachable.glb": 50614,
      "./Player/medieval_set_1_attachable.glb": 50617,
      "./Player/medieval_set_2_attachable.glb": 50625,
      "./Player/medieval_set_3_attachable.glb": 50634,
      "./Player/medieval_set_4_attachable.glb": 50638,
      "./Player/mining_helmet_attachable.glb": 50645,
      "./Player/minotaur.glb": 50654,
      "./Player/minotaur_elder.glb": 50656,
      "./Player/minotaur_warrior.glb": 50664,
      "./Player/monster_hunter_lorenzo_attachable.glb": 50666,
      "./Player/npc_pig_head.glb": 50674,
      "./Player/painter_spencer_attachable.glb": 50678,
      "./Player/pet_reindeer.glb": 50687,
      "./Player/pig_napoleon.glb": 50693,
      "./Player/pig_worker_attachable.glb": 50702,
      "./Player/piggy_banker_head.glb": 50711,
      "./Player/portal_mage_hat.glb": 50719,
      "./Player/rabbit_aristocrat_attachable.glb": 50726,
      "./Player/skis_attachable.glb": 50732,
      "./Player/smuglyn_attachable.glb": 50735,
      "./Player/spring_set_1_attachable.glb": 50742,
      "./Player/spring_set_2_attachable.glb": 50750,
      "./Player/spring_set_3_attachable.glb": 50752,
      "./Player/spring_set_4_attachable.glb": 50757,
      "./Player/tentacle_boy.glb": 50760,
      "./Player/tentacle_guy_attachable.glb": 50762,
      "./Player/tentacle_guy_fisherman_attachable.glb": 50770,
      "./Player/trader_cowl_black.glb": 50773,
      "./Player/trader_cowl_blue.glb": 50777,
      "./Player/ugly_sweater_attachable.glb": 50780,
      "./Player/wolf_in_suit_attachable.glb": 50782,
      "./Player/wolf_security.glb": 50789,
      "./Player/y2k_set_1_attachable.glb": 50792,
      "./Player/y2k_set_2_attachable.glb": 50798,
      "./Player/y2k_set_3_attachable.glb": 50802,
      "./Player/y2k_set_4_attachable.glb": 50811,
      "./Scorpion/Scorpion_Model.glb": 50820,
      "./Sheep/Sheep_Model.glb": 50827,
      "./Skeleton/Skeleton_Model.glb": 50832,
      "./Skeleton/Skeleton_Reconstructed.glb": 50838,
      "./Slime/Slime_Model.glb": 50845,
      "./Stag/Stag_Model.glb": 50849,
      "./Stalker/Stalker_Model.glb": 50856,
      "./Tiki Terror/Tiki Terror_Model.glb": 50859,
      "./Tiki Terror/Tiki Terror_Reconstructed.glb": 50867,
      "./Vulcanite/Vulcanite_Model.glb": 50873,
      "./Vulcanite/Vulcanite_Reconstructed.glb": 50878,
      "./Wildcat/Wildcat_Model.glb": 50884,
      "./Wolf/Wolf_Model.glb": 50889,
      "./Zombie/Zombie_Model.glb": 50891,
      "./Zombie/Zombie_Reconstructed.glb": 50898
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 50089
  },
  50902: (BB, OB, GB) => {
    var YB = {
      "./67/67_Atlas.png": 50904,
      "./67/variations/0_67_default.png": 50910,
      "./Armour Collector/Armour Collector_Atlas.png": 50915,
      "./Armour Collector/variations/0_armour collector_default.png": 50924,
      "./Bear/BearSaddle_Atlas.png": 50932,
      "./Bear/Bear_Atlas.png": 50941,
      "./Bear/variations/0_bear_default.png": 50950,
      "./Bobino Musculino/Bobino Musculino_Atlas.png": 50959,
      "./Bobino Musculino/variations/0_bobino musculino_default.png": 50966,
      "./Camel/CamelSaddle_Atlas.png": 50971,
      "./Camel/Camel_Armour.png": 50975,
      "./Camel/Camel_Atlas.png": 50983,
      "./Camel/variations/0_camel_default.png": 50990,
      "./Camel/variations/1_camel_brown.png": 50998,
      "./Capitano Explovissimo/Capitano Explovissimo_Atlas.png": 51003,
      "./Capitano Explovissimo/variations/0_capitano explovissimo_default.png": 51011,
      "./Cave Golem/Cave Golem_Atlas.png": 51013,
      "./Cave Golem/variations/0_cave golem_default.png": 51022,
      "./Cave Golem/variations/1_cave golem_iron.png": 51029,
      "./Cave Golem/variations/2_cave golem_corrupted.png": 51037,
      "./Cow/Cow_Atlas.png": 51042,
      "./Cow/variations/0_cow_default.png": 51046,
      "./Cow/variations/1_cow_cream.png": 51055,
      "./Crone/Crone_Atlas.png": 51062,
      "./Crone/variations/0_crone_default.png": 51067,
      "./Deer/DeerAntlers_Atlas.png": 51074,
      "./Deer/Deer_Atlas.png": 51078,
      "./Deer/variations/0_deer_default.png": 51080,
      "./Desert Fennec/Desert Fennec_Atlas.png": 51089,
      "./Desert Fennec/variations/0_desert fennec_default.png": 51097,
      "./Diamond Goofy Golem/Diamond Goofy Golem_Atlas.png": 51103,
      "./Diamond Goofy Golem/variations/0_diamond goofy golem_default.png": 51106,
      "./Diamond Goofy Golem/variations/1_diamond goofy golem_flaking.png": 51113,
      "./Diamond Goofy Golem/variations/2_diamond goofy golem_patchy.png": 51119,
      "./Diamond Goofy Golem/variations/3_diamond goofy golem_shedding.png": 51121,
      "./Diamond Goofy Golem/variations/4_diamond goofy golem_bare.png": 51129,
      "./Diamond Goofy Golem/variations/5_diamond goofy golem_stone.png": 51133,
      "./Diamond Guardian/Diamond Guardian_Atlas.png": 51142,
      "./Diamond Guardian/variations/0_diamond guardian_default.png": 51145,
      "./Draugr Huntress/Draugr Huntress_Atlas.png": 51154,
      "./Draugr Huntress/variations/0_draugr huntress_default.png": 51162,
      "./Draugr Huntress/variations/1_draugr huntress_chainmail.png": 51170,
      "./Draugr Knight/Draugr Knight_Atlas.png": 51175,
      "./Draugr Knight/variations/0_draugr knight_default.png": 51181,
      "./Draugr Reaver/Draugr Reaver_Atlas.png": 51189,
      "./Draugr Reaver/variations/0_draugr reaver_default.png": 51194,
      "./Draugr Skeleton/Draugr Skeleton_Atlas.png": 51203,
      "./Draugr Skeleton/variations/0_draugr skeleton_default.png": 51208,
      "./Draugr Warper/Draugr Warper_Atlas.png": 51210,
      "./Draugr Warper/variations/0_draugr warper_default.png": 51214,
      "./Draugr Zombie/Draugr Zombie_Atlas.png": 51221,
      "./Draugr Zombie/variations/0_draugr zombie_default.png": 51224,
      "./Draugr Zombie/variations/10_draugr zombie_corrupted2.png": 51233,
      "./Draugr Zombie/variations/1_draugr zombie_longHairChestplate.png": 51238,
      "./Draugr Zombie/variations/2_draugr zombie_longHairClothed.png": 51245,
      "./Draugr Zombie/variations/3_draugr zombie_shortHairClothed.png": 51254,
      "./Draugr Zombie/variations/4_draugr zombie_flower.png": 51261,
      "./Draugr Zombie/variations/5_draugr zombie_flower2.png": 51268,
      "./Draugr Zombie/variations/6_draugr zombie_mushroom.png": 51274,
      "./Draugr Zombie/variations/7_draugr zombie_vine.png": 51276,
      "./Draugr Zombie/variations/8_draugr zombie_vine2.png": 51278,
      "./Draugr Zombie/variations/9_draugr zombie_corrupted.png": 51284,
      "./Evil Tome/Evil Tome_Atlas.png": 51290,
      "./Evil Tome/variations/0_evil tome_default.png": 51295,
      "./Frost Golem/Frost Golem_Atlas.png": 51297,
      "./Frost Golem/variations/0_frost golem_default.png": 51301,
      "./Frost Skeleton/Frost Skeleton_Atlas.png": 51304,
      "./Frost Skeleton/variations/0_frost skeleton_default.png": 51309,
      "./Frost Wraith/Frost Wraith_Atlas.png": 51318,
      "./Frost Wraith/variations/0_frost wraith_default.png": 51327,
      "./Frost Wraith/variations/1_frost wraith_tattered.png": 51332,
      "./Frost Wraith/variations/2_frost wraith_frostKing.png": 51339,
      "./Frost Wraith/variations/3_frost wraith_accursed.png": 51341,
      "./Frost Zombie/Frost Zombie_Atlas.png": 51347,
      "./Frost Zombie/variations/0_frost zombie_default.png": 51355,
      "./Frost Zombie/variations/1_frost zombie_longHairChestplate.png": 51357,
      "./Frost Zombie/variations/2_frost zombie_shortHairClothed.png": 51363,
      "./Furnace Knight/Furnace Knight_Atlas.png": 51367,
      "./Furnace Knight/variations/0_furnace knight_default.png": 51371,
      "./Glass Bro/Glass Bro_Atlas.png": 51379,
      "./Glass Bro/variations/0_glass bro_default.png": 51384,
      "./Glass Gremlin/Glass Gremlin_Atlas.png": 51393,
      "./Glass Gremlin/variations/0_glass gremlin_default.png": 51396,
      "./Gold Goofy Golem/Gold Goofy Golem_Atlas.png": 51401,
      "./Gold Goofy Golem/variations/0_gold goofy golem_default.png": 51406,
      "./Gold Goofy Golem/variations/1_gold goofy golem_flaking.png": 51412,
      "./Gold Goofy Golem/variations/2_gold goofy golem_patchy.png": 51415,
      "./Gold Goofy Golem/variations/3_gold goofy golem_shedding.png": 51422,
      "./Gold Goofy Golem/variations/4_gold goofy golem_bare.png": 51426,
      "./Gold Goofy Golem/variations/5_gold goofy golem_stone.png": 51428,
      "./Gold Guardian/Gold Guardian_Atlas.png": 51436,
      "./Gold Guardian/variations/0_gold guardian_default.png": 51439,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Armour.png": 51445,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Atlas.png": 51452,
      "./Gold Watermelon Stag/variations/0_gold watermelon stag_default.png": 51461,
      "./Gorilla/GorillaSaddle_Atlas.png": 51470,
      "./Gorilla/Gorilla_Atlas.png": 51477,
      "./Gorilla/variations/0_gorilla_default.png": 51481,
      "./Horse/HorseSaddle_Atlas.png": 51488,
      "./Horse/Horse_Atlas.png": 51491,
      "./Horse/variations/0_horse_default.png": 51493,
      "./Horse/variations/1_horse_black.png": 51497,
      "./Horse/variations/2_horse_brown.png": 51499,
      "./Horse/variations/3_horse_cream.png": 51505,
      "./Iron Golem/Iron Golem_Atlas.png": 51513,
      "./Iron Golem/variations/0_iron golem_default.png": 51519,
      "./Iron Goofy Golem/Iron Goofy Golem_Atlas.png": 51524,
      "./Iron Goofy Golem/variations/0_iron goofy golem_default.png": 51533,
      "./Iron Goofy Golem/variations/1_iron goofy golem_flaking.png": 51541,
      "./Iron Goofy Golem/variations/2_iron goofy golem_patchy.png": 51544,
      "./Iron Goofy Golem/variations/3_iron goofy golem_shedding.png": 51551,
      "./Iron Goofy Golem/variations/4_iron goofy golem_bare.png": 51554,
      "./Iron Goofy Golem/variations/5_iron goofy golem_stone.png": 51556,
      "./Iron Guardian/Iron Guardian_Atlas.png": 51559,
      "./Iron Guardian/variations/0_iron guardian_default.png": 51563,
      "./Lil Knight/Lil Knight_Atlas.png": 51568,
      "./Lil Knight/variations/0_lil knight_default.png": 51570,
      "./Lord Vulcan/Lord Vulcan_Atlas.png": 51574,
      "./Lord Vulcan/variations/0_lord vulcan_default.png": 51583,
      "./Magma Golem/Magma Golem_Atlas.png": 51590,
      "./Magma Golem/variations/0_magma golem_default.png": 51597,
      "./Magma Toad/Magma Toad_Atlas.png": 51604,
      "./Magma Toad/variations/0_magma toad_default.png": 51606,
      "./Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas.png": 51615,
      "./Moonstone Goofy Golem/variations/0_moonstone goofy golem_default.png": 51621,
      "./Moonstone Goofy Golem/variations/1_moonstone goofy golem_flaking.png": 51629,
      "./Moonstone Goofy Golem/variations/2_moonstone goofy golem_patchy.png": 51638,
      "./Moonstone Goofy Golem/variations/3_moonstone goofy golem_shedding.png": 51641,
      "./Moonstone Goofy Golem/variations/4_moonstone goofy golem_bare.png": 51644,
      "./Moonstone Goofy Golem/variations/5_moonstone goofy golem_stone.png": 51653,
      "./Moonstone Guardian/Moonstone Guardian_Atlas.png": 51658,
      "./Moonstone Guardian/variations/0_moonstone guardian_default.png": 51667,
      "./Mummy/Mummy_Atlas.png": 51674,
      "./Mummy/variations/0_mummy_default.png": 51679,
      "./Pig/Pig_Atlas.png": 51683,
      "./Pig/variations/0_pig_default.png": 51688,
      "./Player/Player_Atlas.png": 51691,
      "./Player/astro_set_1_attachable.png": 51698,
      "./Player/astro_set_2_attachable.png": 51701,
      "./Player/astro_set_3_attachable.png": 51707,
      "./Player/astro_set_4_attachable.png": 51714,
      "./Player/beaver_lumberjack.png": 51722,
      "./Player/bee_set_1_attachable.png": 51730,
      "./Player/bee_set_2_attachable.png": 51735,
      "./Player/bee_set_3_attachable_blue.png": 51743,
      "./Player/bee_set_3_attachable_green.png": 51745,
      "./Player/bee_set_3_attachable_red.png": 51751,
      "./Player/bee_set_4_attachable.png": 51753,
      "./Player/capeTextures/cape_cow_cream.png": 51762,
      "./Player/capeTextures/cape_cow_normal.png": 51768,
      "./Player/capeTextures/cape_creator_level1.png": 51777,
      "./Player/capeTextures/cape_creator_level2.png": 51779,
      "./Player/capeTextures/cape_creator_level3.png": 51787,
      "./Player/capeTextures/cape_none.png": 51794,
      "./Player/capeTextures/cape_pig.png": 51801,
      "./Player/capeTextures/cape_sheep.png": 51809,
      "./Player/capeTextures/cape_super.png": 51813,
      "./Player/capeTextures/cape_super_inverted.png": 51822,
      "./Player/capeTextures/cape_youtuber.png": 51825,
      "./Player/chef_attachables.png": 51827,
      "./Player/christmas_elf_attachable.png": 51834,
      "./Player/christmas_snowman_attachable.png": 51839,
      "./Player/dwarf_blue_hair.png": 51842,
      "./Player/dwarf_braided_hair.png": 51848,
      "./Player/dwarf_child.png": 51856,
      "./Player/dwarf_forked_beard.png": 51860,
      "./Player/dwarf_ginger_beard.png": 51865,
      "./Player/dwarf_grey_beard.png": 51870,
      "./Player/dwarf_hair_buns.png": 51878,
      "./Player/dwarf_purple_beard.png": 51880,
      "./Player/dwarf_red_hair.png": 51882,
      "./Player/dwarf_short_beard.png": 51891,
      "./Player/farmer_gill_attachable.png": 51893,
      "./Player/farmer_head.png": 51899,
      "./Player/fire_mage_attachable.png": 51901,
      "./Player/forge_mother.png": 51904,
      "./Player/furry_bear_attachables.png": 51909,
      "./Player/furry_kitsune_attachables.png": 51916,
      "./Player/furry_kitsune_tail_single.png": 51919,
      "./Player/furry_kitsune_tails.png": 51927,
      "./Player/furry_shark_attachables.png": 51931,
      "./Player/furry_shark_tail.png": 51938,
      "./Player/furry_wolfKnight_attachables.png": 51944,
      "./Player/furry_wolfKnight_tail.png": 51946,
      "./Player/general_attachable.png": 51948,
      "./Player/goblin_goggles.png": 51953,
      "./Player/goblin_mad_scientist.png": 51956,
      "./Player/highSociety_set_1_attachable.png": 51961,
      "./Player/highSociety_set_2_attachable.png": 51967,
      "./Player/highSociety_set_3_attachable.png": 51969,
      "./Player/highSociety_set_4_attachable.png": 51974,
      "./Player/human_archer.png": 51978,
      "./Player/human_desert_guard.png": 51984,
      "./Player/human_sentry.png": 51993,
      "./Player/ice_wings_attachable.png": 51997,
      "./Player/jackal_priest.png": 52001,
      "./Player/jetpack_attachable.png": 52003,
      "./Player/medieval_set_1_attachable_blue.png": 52007,
      "./Player/medieval_set_1_attachable_green.png": 52010,
      "./Player/medieval_set_1_attachable_purple.png": 52018,
      "./Player/medieval_set_1_attachable_red.png": 52027,
      "./Player/medieval_set_1_attachable_yellow.png": 52033,
      "./Player/medieval_set_2_attachable_blue.png": 52038,
      "./Player/medieval_set_2_attachable_purple.png": 52043,
      "./Player/medieval_set_2_attachable_red.png": 52046,
      "./Player/medieval_set_3_attachable_green.png": 52052,
      "./Player/medieval_set_3_attachable_pink.png": 52054,
      "./Player/medieval_set_3_attachable_purple.png": 52057,
      "./Player/medieval_set_3_attachable_red.png": 52059,
      "./Player/medieval_set_4_attachable_blue.png": 52065,
      "./Player/medieval_set_4_attachable_hair.png": 52068,
      "./Player/medieval_set_4_attachable_purple.png": 52077,
      "./Player/medieval_set_4_attachable_red.png": 52081,
      "./Player/mining_helmet_attachable.png": 52090,
      "./Player/minotaur.png": 52094,
      "./Player/minotaur_elder.png": 52098,
      "./Player/minotaur_warrior.png": 52104,
      "./Player/monster_hunter_lorenzo_attachable.png": 52109,
      "./Player/nova_jetpack_attachable.png": 52113,
      "./Player/npc_pig_head.png": 52120,
      "./Player/painter_spencer_attachable.png": 52123,
      "./Player/pet_reindeer.png": 52126,
      "./Player/pig_napoleon.png": 52132,
      "./Player/pig_worker_attachable.png": 52141,
      "./Player/piggy_banker_head.png": 52144,
      "./Player/portal_mage_hat.png": 52146,
      "./Player/rabbit_aristocrat_attachable.png": 52152,
      "./Player/skis_attachable.png": 52159,
      "./Player/smuglyn_attachable.png": 52164,
      "./Player/spring_set_1_attachable.png": 52168,
      "./Player/spring_set_2_attachable.png": 52177,
      "./Player/spring_set_3_attachable.png": 52186,
      "./Player/spring_set_4_attachable.png": 52189,
      "./Player/tentacle_boy.png": 52192,
      "./Player/tentacle_girl_attachable.png": 52194,
      "./Player/tentacle_guy_attachable.png": 52202,
      "./Player/tentacle_guy_fisherman_attachable.png": 52207,
      "./Player/trader_cowl_black.png": 52214,
      "./Player/trader_cowl_blue.png": 52216,
      "./Player/ugly_sweater_attachable.png": 52218,
      "./Player/wolf_in_suit_attachable.png": 52226,
      "./Player/wolf_security.png": 52230,
      "./Player/y2k_set_1_attachable.png": 52234,
      "./Player/y2k_set_2_attachable.png": 52241,
      "./Player/y2k_set_3_attachable.png": 52247,
      "./Player/y2k_set_4_attachable.png": 52250,
      "./Scorpion/Scorpion_Atlas.png": 52255,
      "./Scorpion/variations/0_scorpion_default.png": 52263,
      "./Sheep/SheepWool_Atlas.png": 52266,
      "./Sheep/Sheep_Atlas.png": 52273,
      "./Sheep/variations/0_sheep_default.png": 52278,
      "./Sheep/variations/10_sheep_gray.png": 52283,
      "./Sheep/variations/11_sheep_green.png": 52286,
      "./Sheep/variations/12_sheep_lightBlue.png": 52288,
      "./Sheep/variations/13_sheep_lightGray.png": 52295,
      "./Sheep/variations/14_sheep_lime.png": 52301,
      "./Sheep/variations/15_sheep_magenta.png": 52305,
      "./Sheep/variations/1_sheep_black.png": 52310,
      "./Sheep/variations/2_sheep_red.png": 52314,
      "./Sheep/variations/3_sheep_orange.png": 52322,
      "./Sheep/variations/4_sheep_pink.png": 52329,
      "./Sheep/variations/5_sheep_purple.png": 52334,
      "./Sheep/variations/6_sheep_yellow.png": 52343,
      "./Sheep/variations/7_sheep_blue.png": 52347,
      "./Sheep/variations/8_sheep_brown.png": 52356,
      "./Sheep/variations/9_sheep_cyan.png": 52361,
      "./Skeleton/Skeleton_Atlas.png": 52368,
      "./Skeleton/variations/0_skeleton_default.png": 52374,
      "./Slime/Slime_Atlas.png": 52376,
      "./Slime/variations/0_slime_default.png": 52385,
      "./Spirit Bear/Spirit BearSaddle_Atlas.png": 52394,
      "./Spirit Bear/Spirit Bear_Atlas.png": 52396,
      "./Spirit Bear/variations/0_spirit bear_default.png": 52405,
      "./Spirit Golem/Spirit Golem_Atlas.png": 52412,
      "./Spirit Golem/variations/0_spirit golem_default.png": 52420,
      "./Spirit Gorilla/Spirit GorillaSaddle_Atlas.png": 52425,
      "./Spirit Gorilla/Spirit Gorilla_Atlas.png": 52432,
      "./Spirit Gorilla/variations/0_spirit gorilla_default.png": 52437,
      "./Spirit Stag/Spirit StagSaddle_Atlas.png": 52444,
      "./Spirit Stag/Spirit Stag_Atlas.png": 52452,
      "./Spirit Stag/variations/0_spirit stag_default.png": 52460,
      "./Spirit Wolf/Spirit WolfCollar_Atlas.png": 52464,
      "./Spirit Wolf/Spirit Wolf_Atlas.png": 52470,
      "./Spirit Wolf/variations/0_spirit wolf_default.png": 52476,
      "./Stag/StagSaddle_Atlas.png": 52481,
      "./Stag/Stag_Atlas.png": 52487,
      "./Stag/variations/0_stag_default.png": 52496,
      "./Stalker/Stalker_Atlas.png": 52503,
      "./Stalker/variations/0_stalker_default.png": 52511,
      "./Stalker/variations/1_stalker_crimson.png": 52514,
      "./Stalker/variations/2_stalker_frost.png": 52517,
      "./Stalker/variations/3_stalker_void.png": 52521,
      "./Tiki Terror/Tiki Terror_Atlas.png": 52527,
      "./Tiki Terror/variations/0_tiki terror_default.png": 52534,
      "./Tiki Terror/variations/1_tiki terror_titan.png": 52537,
      "./Tiki Terror/variations/2_tiki terror_tormentor.png": 52545,
      "./Tiki Terror/variations/3_tiki terror_tyrant.png": 52547,
      "./Vulcanite/Vulcanite_Atlas.png": 52555,
      "./Vulcanite/variations/0_vulcanite_default.png": 52557,
      "./Wildcat/WildcatCollar_Atlas.png": 52565,
      "./Wildcat/Wildcat_Atlas.png": 52569,
      "./Wildcat/variations/0_wildcat_default.png": 52578,
      "./Wildcat/variations/1_wildcat_tabby.png": 52584,
      "./Wildcat/variations/2_wildcat_grey.png": 52591,
      "./Wildcat/variations/3_wildcat_black.png": 52595,
      "./Wildcat/variations/4_wildcat_calico.png": 52601,
      "./Wildcat/variations/5_wildcat_siamese.png": 52610,
      "./Wildcat/variations/6_wildcat_leopard.png": 52613,
      "./Wolf/WolfCollar_Atlas.png": 52619,
      "./Wolf/Wolf_Atlas.png": 52626,
      "./Wolf/variations/0_wolf_default.png": 52628,
      "./Wolf/variations/1_wolf_white.png": 52633,
      "./Wolf/variations/2_wolf_brown.png": 52635,
      "./Wolf/variations/3_wolf_grey.png": 52640,
      "./Wolf/variations/4_wolf_spectral.png": 52648,
      "./Zombie/Zombie_Atlas.png": 52656,
      "./Zombie/variations/0_zombie_default.png": 52665
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 50902
  },
  45737: (BB, OB, GB) => {
    var YB = {
      "./2_block.glb": 45741,
      "./67.glb": 45745,
      "./Artisan Bench.glb": 45753,
      "./Aspen Door.glb": 45761,
      "./Aspen Item Pedestal.glb": 45766,
      "./Aspen Ladder.glb": 45773,
      "./Aspen Trapdoor.glb": 45778,
      "./Black Banner.glb": 45781,
      "./Black Bed.glb": 45787,
      "./Black Directional Arrow.glb": 45795,
      "./Black Strongbed.glb": 45800,
      "./Blue Banner.glb": 45805,
      "./Blue Bed.glb": 45810,
      "./Blue Directional Arrow.glb": 45816,
      "./Blue Strongbed.glb": 45824,
      "./Board.glb": 45833,
      "./Brown Banner.glb": 45837,
      "./Brown Bed.glb": 45840,
      "./Brown Directional Arrow.glb": 45843,
      "./Brown Strongbed.glb": 45851,
      "./Cedar Door.glb": 45860,
      "./Cedar Item Pedestal.glb": 45866,
      "./Cedar Ladder.glb": 45874,
      "./Cedar Trapdoor.glb": 45877,
      "./Cherry Door.glb": 45885,
      "./Cherry Item Pedestal.glb": 45893,
      "./Cherry Ladder.glb": 45895,
      "./Cherry Trapdoor.glb": 45901,
      "./Crimson Trapdoor.glb": 45905,
      "./Cyan Banner.glb": 45907,
      "./Cyan Bed.glb": 45914,
      "./Cyan Directional Arrow.glb": 45923,
      "./Cyan Strongbed.glb": 45926,
      "./Dangling Rope.glb": 45930,
      "./Dangling Vine.glb": 45937,
      "./Diamond Enchanting Table.glb": 45939,
      "./Diamond Trophy.glb": 45944,
      "./Draugr Banner.glb": 45952,
      "./Fat Brown Mushroom.glb": 45960,
      "./Fat Red Mushroom.glb": 45962,
      "./Fence.glb": 45966,
      "./FenceGate.glb": 45968,
      "./Furnace.glb": 45970,
      "./Gold Enchanting Table.glb": 45973,
      "./Gold Trophy.glb": 45976,
      "./Gray Banner.glb": 45984,
      "./Gray Bed.glb": 45987,
      "./Gray Strongbed.glb": 45991,
      "./Green Banner.glb": 45994,
      "./Green Bed.glb": 46001,
      "./Green Directional Arrow.glb": 46008,
      "./Green Strongbed.glb": 46011,
      "./Grey Directional Arrow.glb": 46017,
      "./Iron Enchanting Table.glb": 46024,
      "./Iron Ladder.glb": 46033,
      "./Iron Trapdoor.glb": 46042,
      "./Iron Trophy.glb": 46047,
      "./Jungle Door.glb": 46051,
      "./Jungle Item Pedestal.glb": 46053,
      "./Jungle Ladder.glb": 46060,
      "./Jungle Trapdoor.glb": 46065,
      "./Large Icicle.glb": 46074,
      "./Large Twin Icicle.glb": 46082,
      "./Leaf Bed.glb": 46090,
      "./Light Blue Banner.glb": 46096,
      "./Light Blue Bed.glb": 46104,
      "./Light Blue Directional Arrow.glb": 46111,
      "./Light Blue Strongbed.glb": 46115,
      "./Light Gray Banner.glb": 46117,
      "./Light Gray Bed.glb": 46123,
      "./Light Gray Strongbed.glb": 46126,
      "./Light Grey Directional Arrow.glb": 46130,
      "./Lime Banner.glb": 46139,
      "./Lime Bed.glb": 46146,
      "./Lime Directional Arrow.glb": 46148,
      "./Lime Strongbed.glb": 46152,
      "./Magenta Banner.glb": 46154,
      "./Magenta Bed.glb": 46162,
      "./Magenta Directional Arrow.glb": 46168,
      "./Magenta Strongbed.glb": 46172,
      "./Mango Door.glb": 46175,
      "./Mango Item Pedestal.glb": 46177,
      "./Mango Ladder.glb": 46182,
      "./Mango Trapdoor.glb": 46186,
      "./Maple Door.glb": 46194,
      "./Maple Ladder.glb": 46199,
      "./Maple Trapdoor.glb": 46204,
      "./Medium Icicle.glb": 46212,
      "./Moonstone Trophy.glb": 46217,
      "./Nova Trophy.glb": 46225,
      "./Orange Banner.glb": 46230,
      "./Orange Bed.glb": 46236,
      "./Orange Directional Arrow.glb": 46242,
      "./Orange Strongbed.glb": 46247,
      "./Palm Door.glb": 46256,
      "./Palm Item Pedestal.glb": 46264,
      "./Palm Ladder.glb": 46266,
      "./Palm Trapdoor.glb": 46271,
      "./Pear Door.glb": 46275,
      "./Pear Item Pedestal.glb": 46281,
      "./Pear Ladder.glb": 46285,
      "./Pear Trapdoor.glb": 46294,
      "./Pine Door.glb": 46301,
      "./Pine Item Pedestal.glb": 46307,
      "./Pine Ladder.glb": 46312,
      "./Pine Trapdoor.glb": 46314,
      "./Pink Banner.glb": 46323,
      "./Pink Bed.glb": 46326,
      "./Pink Directional Arrow.glb": 46331,
      "./Pink Strongbed.glb": 46334,
      "./Plum Door.glb": 46342,
      "./Plum Item Pedestal.glb": 46348,
      "./Plum Ladder.glb": 46351,
      "./Plum Trapdoor.glb": 46354,
      "./Potion Table.glb": 46356,
      "./Purple Banner.glb": 46364,
      "./Purple Bed.glb": 46367,
      "./Purple Directional Arrow.glb": 46371,
      "./Purple Strongbed.glb": 46374,
      "./Rainbow Banner.glb": 46377,
      "./Red Banner.glb": 46385,
      "./Red Bed.glb": 46388,
      "./Red Directional Arrow.glb": 46394,
      "./Red Strongbed.glb": 46400,
      "./Salvaging Table.glb": 46403,
      "./Showcase.glb": 46406,
      "./Skull Banner.glb": 46411,
      "./Small Black Pod.glb": 46419,
      "./Small Blue Pod.glb": 46423,
      "./Small Brown Pod.glb": 46429,
      "./Small Cyan Pod.glb": 46432,
      "./Small Gray Pod.glb": 46437,
      "./Small Green Pod.glb": 46443,
      "./Small Light Blue Pod.glb": 46450,
      "./Small Light Gray Pod.glb": 46452,
      "./Small Lime Pod.glb": 46459,
      "./Small Magenta Pod.glb": 46462,
      "./Small Orange Pod.glb": 46466,
      "./Small Pink Pod.glb": 46472,
      "./Small Purple Pod.glb": 46479,
      "./Small Red Pod.glb": 46481,
      "./Small Twin Icicle.glb": 46490,
      "./Small White Pod.glb": 46496,
      "./Small Yellow Pod.glb": 46501,
      "./Spectral Door.glb": 46510,
      "./Spectral Item Pedestal.glb": 46512,
      "./Spectral Ladder.glb": 46519,
      "./Spectral Trapdoor.glb": 46526,
      "./Spikes_Diamond.glb": 46531,
      "./Spikes_Gold.glb": 46540,
      "./Spikes_Iron.glb": 46547,
      "./Spikes_Kill.glb": 46551,
      "./Spikes_Stone.glb": 46560,
      "./Spikes_Wood.glb": 46562,
      "./Stone Enchanting Table.glb": 46565,
      "./Stone Trophy.glb": 46572,
      "./Timed Spike Bomb Block.glb": 46579,
      "./Vines.glb": 46586,
      "./Warped Trapdoor.glb": 46591,
      "./White Banner.glb": 46599,
      "./White Bed.glb": 46607,
      "./White Directional Arrow.glb": 46611,
      "./White Strongbed.glb": 46619,
      "./Wood Enchanting Table.glb": 46624,
      "./Wood Trophy.glb": 46631,
      "./Workbench.glb": 46633,
      "./Yellow Banner.glb": 46640,
      "./Yellow Bed.glb": 46647,
      "./Yellow Directional Arrow.glb": 46650,
      "./Yellow Strongbed.glb": 46657,
      "./_Aspen Door Top.glb": 46660,
      "./_Black Banner Flag Hanging.glb": 46668,
      "./_Black Banner Flag.glb": 46672,
      "./_Black Banner Hanging.glb": 46678,
      "./_Black Bed Head.glb": 46681,
      "./_Black Strongbed Head.glb": 46685,
      "./_Blue Banner Flag Hanging.glb": 46688,
      "./_Blue Banner Flag.glb": 46694,
      "./_Blue Banner Hanging.glb": 46697,
      "./_Blue Bed Head.glb": 46701,
      "./_Blue Strongbed Head.glb": 46703,
      "./_Brown Banner Flag Hanging.glb": 46708,
      "./_Brown Banner Flag.glb": 46714,
      "./_Brown Banner Hanging.glb": 46722,
      "./_Brown Bed Head.glb": 46727,
      "./_Brown Strongbed Head.glb": 46731,
      "./_Camel Painting Bottom Left.glb": 46740,
      "./_Camel Painting Bottom Right.glb": 46746,
      "./_Camel Painting Top Left.glb": 46750,
      "./_Camel Painting Top Right.glb": 46756,
      "./_Cedar Door Top.glb": 46765,
      "./_Cherry Door Top.glb": 46768,
      "./_Cow Painting Bottom Left.glb": 46772,
      "./_Cow Painting Bottom Right.glb": 46780,
      "./_Cow Painting Top Left.glb": 46786,
      "./_Cow Painting Top Right.glb": 46788,
      "./_Cyan Banner Flag Hanging.glb": 46794,
      "./_Cyan Banner Flag.glb": 46799,
      "./_Cyan Banner Hanging.glb": 46808,
      "./_Cyan Bed Head.glb": 46811,
      "./_Cyan Strongbed Head.glb": 46815,
      "./_Deer Painting Bottom Left.glb": 46821,
      "./_Deer Painting Bottom Right.glb": 46826,
      "./_Deer Painting Top Left.glb": 46834,
      "./_Deer Painting Top Right.glb": 46841,
      "./_Draugr Banner Flag Hanging.glb": 46847,
      "./_Draugr Banner Flag.glb": 46850,
      "./_Draugr Banner Hanging.glb": 46859,
      "./_Gray Banner Flag Hanging.glb": 46868,
      "./_Gray Banner Flag.glb": 46872,
      "./_Gray Banner Hanging.glb": 46881,
      "./_Gray Bed Head.glb": 46887,
      "./_Gray Strongbed Head.glb": 46890,
      "./_Green Banner Flag Hanging.glb": 46896,
      "./_Green Banner Flag.glb": 46899,
      "./_Green Banner Hanging.glb": 46901,
      "./_Green Bed Head.glb": 46909,
      "./_Green Strongbed Head.glb": 46916,
      "./_Horse Painting Bottom Left.glb": 46923,
      "./_Horse Painting Bottom Right.glb": 46925,
      "./_Horse Painting Top Left.glb": 46931,
      "./_Horse Painting Top Right.glb": 46934,
      "./_Jungle Door Top.glb": 46937,
      "./_Light Blue Banner Flag Hanging.glb": 46943,
      "./_Light Blue Banner Flag.glb": 46945,
      "./_Light Blue Banner Hanging.glb": 46950,
      "./_Light Blue Bed Head.glb": 46953,
      "./_Light Blue Strongbed Head.glb": 46957,
      "./_Light Gray Banner Flag Hanging.glb": 46963,
      "./_Light Gray Banner Flag.glb": 46968,
      "./_Light Gray Banner Hanging.glb": 46976,
      "./_Light Gray Bed Head.glb": 46982,
      "./_Light Gray Strongbed Head.glb": 46985,
      "./_Lime Banner Flag Hanging.glb": 46989,
      "./_Lime Banner Flag.glb": 46996,
      "./_Lime Banner Hanging.glb": 47001,
      "./_Lime Bed Head.glb": 47003,
      "./_Lime Strongbed Head.glb": 47011,
      "./_Magenta Banner Flag Hanging.glb": 47015,
      "./_Magenta Banner Flag.glb": 47019,
      "./_Magenta Banner Hanging.glb": 47025,
      "./_Magenta Bed Head.glb": 47034,
      "./_Magenta Strongbed Head.glb": 47041,
      "./_Mango Door Top.glb": 47045,
      "./_Maple Door Top.glb": 47049,
      "./_Orange Banner Flag Hanging.glb": 47054,
      "./_Orange Banner Flag.glb": 47061,
      "./_Orange Banner Hanging.glb": 47066,
      "./_Orange Bed Head.glb": 47072,
      "./_Orange Strongbed Head.glb": 47077,
      "./_Palm Door Top.glb": 47086,
      "./_Pear Door Top.glb": 47090,
      "./_Pig Painting Bottom Left.glb": 47096,
      "./_Pig Painting Bottom Right.glb": 47103,
      "./_Pig Painting Top Left.glb": 47112,
      "./_Pig Painting Top Right.glb": 47118,
      "./_Pine Door Top.glb": 47121,
      "./_Pink Banner Flag Hanging.glb": 47129,
      "./_Pink Banner Flag.glb": 47137,
      "./_Pink Banner Hanging.glb": 47146,
      "./_Pink Bed Head.glb": 47149,
      "./_Pink Strongbed Head.glb": 47151,
      "./_Plum Door Top.glb": 47155,
      "./_Purple Banner Flag Hanging.glb": 47157,
      "./_Purple Banner Flag.glb": 47161,
      "./_Purple Banner Hanging.glb": 47163,
      "./_Purple Bed Head.glb": 47166,
      "./_Purple Strongbed Head.glb": 47171,
      "./_Radar Dish Down.glb": 47179,
      "./_Radar Dish Up.glb": 47186,
      "./_Rainbow Banner Flag Hanging.glb": 47193,
      "./_Rainbow Banner Flag.glb": 47199,
      "./_Rainbow Banner Hanging.glb": 47204,
      "./_Red Banner Flag Hanging.glb": 47210,
      "./_Red Banner Flag.glb": 47214,
      "./_Red Banner Hanging.glb": 47217,
      "./_Red Bed Head.glb": 47221,
      "./_Red Strongbed Head.glb": 47223,
      "./_Sheep Painting Bottom Left.glb": 47226,
      "./_Sheep Painting Bottom Right.glb": 47233,
      "./_Sheep Painting Top Left.glb": 47237,
      "./_Sheep Painting Top Right.glb": 47244,
      "./_Skull Banner Flag Hanging.glb": 47253,
      "./_Skull Banner Flag.glb": 47258,
      "./_Skull Banner Hanging.glb": 47266,
      "./_Small Black Pod Mid.glb": 47270,
      "./_Small Black Pod Top.glb": 47273,
      "./_Small Blue Pod Mid.glb": 47279,
      "./_Small Blue Pod Top.glb": 47283,
      "./_Small Brown Pod Mid.glb": 47285,
      "./_Small Brown Pod Top.glb": 47290,
      "./_Small Cyan Pod Mid.glb": 47295,
      "./_Small Cyan Pod Top.glb": 47297,
      "./_Small Gray Pod Mid.glb": 47302,
      "./_Small Gray Pod Top.glb": 47311,
      "./_Small Green Pod Mid.glb": 47317,
      "./_Small Green Pod Top.glb": 47323,
      "./_Small Light Blue Pod Mid.glb": 47329,
      "./_Small Light Blue Pod Top.glb": 47334,
      "./_Small Light Gray Pod Mid.glb": 47337,
      "./_Small Light Gray Pod Top.glb": 47345,
      "./_Small Lime Pod Mid.glb": 47347,
      "./_Small Lime Pod Top.glb": 47351,
      "./_Small Magenta Pod Mid.glb": 47357,
      "./_Small Magenta Pod Top.glb": 47362,
      "./_Small Middle Pod Mag.glb": 47368,
      "./_Small Orange Pod Mid.glb": 47372,
      "./_Small Orange Pod Top.glb": 47375,
      "./_Small Pink Pod Mid.glb": 47379,
      "./_Small Pink Pod Top.glb": 47388,
      "./_Small Purple Pod Mid.glb": 47395,
      "./_Small Purple Pod Top.glb": 47401,
      "./_Small Red Pod Mid.glb": 47408,
      "./_Small Red Pod Top.glb": 47410,
      "./_Small White Pod Mid.glb": 47419,
      "./_Small White Pod Top.glb": 47421,
      "./_Small Yellow Pod Mid.glb": 47426,
      "./_Small Yellow Pod Top.glb": 47429,
      "./_Spectral Door Top.glb": 47433,
      "./_White Banner Flag Hanging.glb": 47440,
      "./_White Banner Flag.glb": 47447,
      "./_White Banner Hanging.glb": 47450,
      "./_White Bed Head.glb": 47454,
      "./_White Strongbed Head.glb": 47463,
      "./_Wildcat Painting Bottom Left.glb": 47468,
      "./_Wildcat Painting Bottom Right.glb": 47470,
      "./_Wildcat Painting Top Left.glb": 47479,
      "./_Wildcat Painting Top Right.glb": 47484,
      "./_Wolf Painting Bottom Left.glb": 47493,
      "./_Wolf Painting Bottom Right.glb": 47498,
      "./_Wolf Painting Top Left.glb": 47504,
      "./_Wolf Painting Top Right.glb": 47512,
      "./_Yellow Banner Flag Hanging.glb": 47515,
      "./_Yellow Banner Flag.glb": 47524,
      "./_Yellow Banner Hanging.glb": 47533,
      "./_Yellow Bed Head.glb": 47539,
      "./_Yellow Strongbed Head.glb": 47544,
      "./auto_miner_body.glb": 47547,
      "./auto_miner_drill_back.glb": 47553,
      "./auto_miner_drill_front.glb": 47557,
      "./auto_miner_foot_back.glb": 47561,
      "./auto_miner_foot_front.glb": 47569,
      "./auto_miner_lunite_body.glb": 47573,
      "./auto_miner_lunite_drill_back.glb": 47575,
      "./auto_miner_lunite_drill_front.glb": 47583,
      "./auto_miner_lunite_foot_back.glb": 47586,
      "./auto_miner_lunite_foot_front.glb": 47591,
      "./baf2_coolant_pipe_none.glb": 47599,
      "./baf2_coolant_pipe_nx.glb": 47602,
      "./baf2_coolant_pipe_nx_ny.glb": 47611,
      "./baf2_coolant_pipe_nx_ny_nz.glb": 47618,
      "./baf2_coolant_pipe_nx_ny_nz_px.glb": 47627,
      "./baf2_coolant_pipe_nx_ny_nz_px_py.glb": 47630,
      "./baf2_coolant_pipe_nx_ny_nz_px_py_pz.glb": 47633,
      "./baf2_coolant_pipe_nx_ny_nz_px_pz.glb": 47639,
      "./baf2_coolant_pipe_nx_ny_nz_py.glb": 47645,
      "./baf2_coolant_pipe_nx_ny_nz_py_pz.glb": 47652,
      "./baf2_coolant_pipe_nx_ny_nz_pz.glb": 47654,
      "./baf2_coolant_pipe_nx_ny_px.glb": 47659,
      "./baf2_coolant_pipe_nx_ny_px_py.glb": 47668,
      "./baf2_coolant_pipe_nx_ny_px_py_pz.glb": 47674,
      "./baf2_coolant_pipe_nx_ny_px_pz.glb": 47677,
      "./baf2_coolant_pipe_nx_ny_py.glb": 47685,
      "./baf2_coolant_pipe_nx_ny_py_pz.glb": 47690,
      "./baf2_coolant_pipe_nx_ny_pz.glb": 47699,
      "./baf2_coolant_pipe_nx_nz.glb": 47704,
      "./baf2_coolant_pipe_nx_nz_px.glb": 47706,
      "./baf2_coolant_pipe_nx_nz_px_py.glb": 47710,
      "./baf2_coolant_pipe_nx_nz_px_py_pz.glb": 47717,
      "./baf2_coolant_pipe_nx_nz_px_pz.glb": 47720,
      "./baf2_coolant_pipe_nx_nz_py.glb": 47722,
      "./baf2_coolant_pipe_nx_nz_py_pz.glb": 47731,
      "./baf2_coolant_pipe_nx_nz_pz.glb": 47738,
      "./baf2_coolant_pipe_nx_px.glb": 47743,
      "./baf2_coolant_pipe_nx_px_py.glb": 47749,
      "./baf2_coolant_pipe_nx_px_py_pz.glb": 47754,
      "./baf2_coolant_pipe_nx_px_pz.glb": 47759,
      "./baf2_coolant_pipe_nx_py.glb": 47767,
      "./baf2_coolant_pipe_nx_py_pz.glb": 47774,
      "./baf2_coolant_pipe_nx_pz.glb": 47780,
      "./baf2_coolant_pipe_ny.glb": 47784,
      "./baf2_coolant_pipe_ny_nz.glb": 47786,
      "./baf2_coolant_pipe_ny_nz_px.glb": 47788,
      "./baf2_coolant_pipe_ny_nz_px_py.glb": 47791,
      "./baf2_coolant_pipe_ny_nz_px_py_pz.glb": 47796,
      "./baf2_coolant_pipe_ny_nz_px_pz.glb": 47803,
      "./baf2_coolant_pipe_ny_nz_py.glb": 47806,
      "./baf2_coolant_pipe_ny_nz_py_pz.glb": 47810,
      "./baf2_coolant_pipe_ny_nz_pz.glb": 47816,
      "./baf2_coolant_pipe_ny_px.glb": 47820,
      "./baf2_coolant_pipe_ny_px_py.glb": 47828,
      "./baf2_coolant_pipe_ny_px_py_pz.glb": 47831,
      "./baf2_coolant_pipe_ny_px_pz.glb": 47839,
      "./baf2_coolant_pipe_ny_py.glb": 47846,
      "./baf2_coolant_pipe_ny_py_pz.glb": 47852,
      "./baf2_coolant_pipe_ny_pz.glb": 47860,
      "./baf2_coolant_pipe_nz.glb": 47865,
      "./baf2_coolant_pipe_nz_px.glb": 47874,
      "./baf2_coolant_pipe_nz_px_py.glb": 47877,
      "./baf2_coolant_pipe_nz_px_py_pz.glb": 47880,
      "./baf2_coolant_pipe_nz_px_pz.glb": 47884,
      "./baf2_coolant_pipe_nz_py.glb": 47888,
      "./baf2_coolant_pipe_nz_py_pz.glb": 47896,
      "./baf2_coolant_pipe_nz_pz.glb": 47899,
      "./baf2_coolant_pipe_px.glb": 47904,
      "./baf2_coolant_pipe_px_py.glb": 47910,
      "./baf2_coolant_pipe_px_py_pz.glb": 47918,
      "./baf2_coolant_pipe_px_pz.glb": 47924,
      "./baf2_coolant_pipe_py.glb": 47932,
      "./baf2_coolant_pipe_py_pz.glb": 47939,
      "./baf2_coolant_pipe_pz.glb": 47948,
      "./baf2_fluid_pipe_none.glb": 47954,
      "./baf2_fluid_pipe_nx.glb": 47962,
      "./baf2_fluid_pipe_nx_ny.glb": 47968,
      "./baf2_fluid_pipe_nx_ny_nz.glb": 47973,
      "./baf2_fluid_pipe_nx_ny_nz_px.glb": 47982,
      "./baf2_fluid_pipe_nx_ny_nz_px_py.glb": 47991,
      "./baf2_fluid_pipe_nx_ny_nz_px_py_pz.glb": 47998,
      "./baf2_fluid_pipe_nx_ny_nz_px_pz.glb": 48006,
      "./baf2_fluid_pipe_nx_ny_nz_py.glb": 48008,
      "./baf2_fluid_pipe_nx_ny_nz_py_pz.glb": 48013,
      "./baf2_fluid_pipe_nx_ny_nz_pz.glb": 48015,
      "./baf2_fluid_pipe_nx_ny_px.glb": 48024,
      "./baf2_fluid_pipe_nx_ny_px_py.glb": 48029,
      "./baf2_fluid_pipe_nx_ny_px_py_pz.glb": 48031,
      "./baf2_fluid_pipe_nx_ny_px_pz.glb": 48035,
      "./baf2_fluid_pipe_nx_ny_py.glb": 48038,
      "./baf2_fluid_pipe_nx_ny_py_pz.glb": 48041,
      "./baf2_fluid_pipe_nx_ny_pz.glb": 48044,
      "./baf2_fluid_pipe_nx_nz.glb": 48051,
      "./baf2_fluid_pipe_nx_nz_px.glb": 48058,
      "./baf2_fluid_pipe_nx_nz_px_py.glb": 48060,
      "./baf2_fluid_pipe_nx_nz_px_py_pz.glb": 48065,
      "./baf2_fluid_pipe_nx_nz_px_pz.glb": 48074,
      "./baf2_fluid_pipe_nx_nz_py.glb": 48076,
      "./baf2_fluid_pipe_nx_nz_py_pz.glb": 48083,
      "./baf2_fluid_pipe_nx_nz_pz.glb": 48088,
      "./baf2_fluid_pipe_nx_px.glb": 48096,
      "./baf2_fluid_pipe_nx_px_py.glb": 48103,
      "./baf2_fluid_pipe_nx_px_py_pz.glb": 48106,
      "./baf2_fluid_pipe_nx_px_pz.glb": 48113,
      "./baf2_fluid_pipe_nx_py.glb": 48119,
      "./baf2_fluid_pipe_nx_py_pz.glb": 48121,
      "./baf2_fluid_pipe_nx_pz.glb": 48127,
      "./baf2_fluid_pipe_ny.glb": 48134,
      "./baf2_fluid_pipe_ny_nz.glb": 48143,
      "./baf2_fluid_pipe_ny_nz_px.glb": 48149,
      "./baf2_fluid_pipe_ny_nz_px_py.glb": 48158,
      "./baf2_fluid_pipe_ny_nz_px_py_pz.glb": 48160,
      "./baf2_fluid_pipe_ny_nz_px_pz.glb": 48167,
      "./baf2_fluid_pipe_ny_nz_py.glb": 48176,
      "./baf2_fluid_pipe_ny_nz_py_pz.glb": 48179,
      "./baf2_fluid_pipe_ny_nz_pz.glb": 48181,
      "./baf2_fluid_pipe_ny_px.glb": 48189,
      "./baf2_fluid_pipe_ny_px_py.glb": 48197,
      "./baf2_fluid_pipe_ny_px_py_pz.glb": 48204,
      "./baf2_fluid_pipe_ny_px_pz.glb": 48206,
      "./baf2_fluid_pipe_ny_py.glb": 48209,
      "./baf2_fluid_pipe_ny_py_pz.glb": 48214,
      "./baf2_fluid_pipe_ny_pz.glb": 48222,
      "./baf2_fluid_pipe_nz.glb": 48225,
      "./baf2_fluid_pipe_nz_px.glb": 48233,
      "./baf2_fluid_pipe_nz_px_py.glb": 48240,
      "./baf2_fluid_pipe_nz_px_py_pz.glb": 48246,
      "./baf2_fluid_pipe_nz_px_pz.glb": 48254,
      "./baf2_fluid_pipe_nz_py.glb": 48257,
      "./baf2_fluid_pipe_nz_py_pz.glb": 48264,
      "./baf2_fluid_pipe_nz_pz.glb": 48268,
      "./baf2_fluid_pipe_px.glb": 48274,
      "./baf2_fluid_pipe_px_py.glb": 48283,
      "./baf2_fluid_pipe_px_py_pz.glb": 48291,
      "./baf2_fluid_pipe_px_pz.glb": 48293,
      "./baf2_fluid_pipe_py.glb": 48298,
      "./baf2_fluid_pipe_py_pz.glb": 48305,
      "./baf2_fluid_pipe_pz.glb": 48311,
      "./baf2_water_pipe_none.glb": 48315,
      "./baf2_water_pipe_nx.glb": 48320,
      "./baf2_water_pipe_nx_ny.glb": 48328,
      "./baf2_water_pipe_nx_ny_nz.glb": 48333,
      "./baf2_water_pipe_nx_ny_nz_px.glb": 48335,
      "./baf2_water_pipe_nx_ny_nz_px_py.glb": 48343,
      "./baf2_water_pipe_nx_ny_nz_px_py_pz.glb": 48351,
      "./baf2_water_pipe_nx_ny_nz_px_pz.glb": 48356,
      "./baf2_water_pipe_nx_ny_nz_py.glb": 48362,
      "./baf2_water_pipe_nx_ny_nz_py_pz.glb": 48371,
      "./baf2_water_pipe_nx_ny_nz_pz.glb": 48377,
      "./baf2_water_pipe_nx_ny_px.glb": 48381,
      "./baf2_water_pipe_nx_ny_px_py.glb": 48387,
      "./baf2_water_pipe_nx_ny_px_py_pz.glb": 48391,
      "./baf2_water_pipe_nx_ny_px_pz.glb": 48397,
      "./baf2_water_pipe_nx_ny_py.glb": 48401,
      "./baf2_water_pipe_nx_ny_py_pz.glb": 48408,
      "./baf2_water_pipe_nx_ny_pz.glb": 48414,
      "./baf2_water_pipe_nx_nz.glb": 48422,
      "./baf2_water_pipe_nx_nz_px.glb": 48431,
      "./baf2_water_pipe_nx_nz_px_py.glb": 48436,
      "./baf2_water_pipe_nx_nz_px_py_pz.glb": 48439,
      "./baf2_water_pipe_nx_nz_px_pz.glb": 48443,
      "./baf2_water_pipe_nx_nz_py.glb": 48450,
      "./baf2_water_pipe_nx_nz_py_pz.glb": 48458,
      "./baf2_water_pipe_nx_nz_pz.glb": 48466,
      "./baf2_water_pipe_nx_px.glb": 48473,
      "./baf2_water_pipe_nx_px_py.glb": 48477,
      "./baf2_water_pipe_nx_px_py_pz.glb": 48485,
      "./baf2_water_pipe_nx_px_pz.glb": 48488,
      "./baf2_water_pipe_nx_py.glb": 48493,
      "./baf2_water_pipe_nx_py_pz.glb": 48499,
      "./baf2_water_pipe_nx_pz.glb": 48507,
      "./baf2_water_pipe_ny.glb": 48510,
      "./baf2_water_pipe_ny_nz.glb": 48519,
      "./baf2_water_pipe_ny_nz_px.glb": 48524,
      "./baf2_water_pipe_ny_nz_px_py.glb": 48529,
      "./baf2_water_pipe_ny_nz_px_py_pz.glb": 48534,
      "./baf2_water_pipe_ny_nz_px_pz.glb": 48539,
      "./baf2_water_pipe_ny_nz_py.glb": 48542,
      "./baf2_water_pipe_ny_nz_py_pz.glb": 48551,
      "./baf2_water_pipe_ny_nz_pz.glb": 48557,
      "./baf2_water_pipe_ny_px.glb": 48565,
      "./baf2_water_pipe_ny_px_py.glb": 48574,
      "./baf2_water_pipe_ny_px_py_pz.glb": 48581,
      "./baf2_water_pipe_ny_px_pz.glb": 48589,
      "./baf2_water_pipe_ny_py.glb": 48594,
      "./baf2_water_pipe_ny_py_pz.glb": 48597,
      "./baf2_water_pipe_ny_pz.glb": 48602,
      "./baf2_water_pipe_nz.glb": 48607,
      "./baf2_water_pipe_nz_px.glb": 48614,
      "./baf2_water_pipe_nz_px_py.glb": 48616,
      "./baf2_water_pipe_nz_px_py_pz.glb": 48623,
      "./baf2_water_pipe_nz_px_pz.glb": 48631,
      "./baf2_water_pipe_nz_py.glb": 48635,
      "./baf2_water_pipe_nz_py_pz.glb": 48644,
      "./baf2_water_pipe_nz_pz.glb": 48649,
      "./baf2_water_pipe_px.glb": 48652,
      "./baf2_water_pipe_px_py.glb": 48660,
      "./baf2_water_pipe_px_py_pz.glb": 48662,
      "./baf2_water_pipe_px_pz.glb": 48664,
      "./baf2_water_pipe_py.glb": 48669,
      "./baf2_water_pipe_py_pz.glb": 48673,
      "./baf2_water_pipe_pz.glb": 48678,
      "./beam_arm.glb": 48683,
      "./beam_arm_mirrored.glb": 48686,
      "./bebek_bebek_bebek.glb": 48692,
      "./bin.glb": 48698,
      "./bobino_musculino.glb": 48700,
      "./bobzilla.glb": 48704,
      "./boiling_pot.glb": 48711,
      "./bone_antlers_model.glb": 48715,
      "./boss_target.glb": 48720,
      "./brra_brra_pachim.glb": 48722,
      "./cannon_barrel_back.glb": 48726,
      "./cannon_barrel_front.glb": 48731,
      "./cannon_bottom_back.glb": 48734,
      "./cannon_bottom_front.glb": 48736,
      "./cannon_top_back.glb": 48742,
      "./cannon_top_front.glb": 48749,
      "./capitano_explovissimo.glb": 48758,
      "./cappuccino_ninjino.glb": 48761,
      "./carpet_black_model.glb": 48768,
      "./carpet_blue_model.glb": 48772,
      "./carpet_brown_model.glb": 48780,
      "./carpet_cyan_model.glb": 48783,
      "./carpet_gray_model.glb": 48789,
      "./carpet_green_model.glb": 48792,
      "./carpet_light_blue_model.glb": 48801,
      "./carpet_light_gray_model.glb": 48810,
      "./carpet_lime_model.glb": 48814,
      "./carpet_magenta_model.glb": 48820,
      "./carpet_orange_model.glb": 48828,
      "./carpet_pink_model.glb": 48833,
      "./carpet_purple_model.glb": 48835,
      "./carpet_red_model.glb": 48838,
      "./carpet_white_model.glb": 48843,
      "./carpet_yellow_model.glb": 48845,
      "./chili_pepper_stage0_lava_model.glb": 48850,
      "./chili_pepper_stage0_model.glb": 48858,
      "./chili_pepper_stage1_lava_model.glb": 48860,
      "./chili_pepper_stage1_model.glb": 48862,
      "./chili_pepper_stage2_lava_model.glb": 48869,
      "./chili_pepper_stage2_model.glb": 48872,
      "./chili_pepper_stage3_lava_model.glb": 48881,
      "./chili_pepper_stage3_model.glb": 48885,
      "./chili_pepper_stage4_lava_model.glb": 48890,
      "./chili_pepper_stage4_model.glb": 48894,
      "./chili_pepper_stage5_lava_model.glb": 48899,
      "./chili_pepper_stage5_model.glb": 48903,
      "./chili_pepper_stage6_lava_model.glb": 48907,
      "./chimpanzano_bananano.glb": 48916,
      "./chopping_board.glb": 48922,
      "./crystal.glb": 48930,
      "./eclipse_dial.glb": 48936,
      "./extractor_pipe_elbow_nx_ny.glb": 48944,
      "./extractor_pipe_elbow_nx_nz.glb": 48950,
      "./extractor_pipe_elbow_nx_py.glb": 48952,
      "./extractor_pipe_elbow_nx_pz.glb": 48958,
      "./extractor_pipe_elbow_ny_nz.glb": 48967,
      "./extractor_pipe_elbow_ny_px.glb": 48975,
      "./extractor_pipe_elbow_ny_pz.glb": 48983,
      "./extractor_pipe_elbow_nz_px.glb": 48991,
      "./extractor_pipe_elbow_nz_py.glb": 48996,
      "./extractor_pipe_elbow_px_py.glb": 49e3,
      "./extractor_pipe_elbow_px_pz.glb": 49008,
      "./extractor_pipe_elbow_py_pz.glb": 49013,
      "./extractor_pipe_end_nx.glb": 49017,
      "./extractor_pipe_end_ny.glb": 49020,
      "./extractor_pipe_end_nz.glb": 49022,
      "./extractor_pipe_end_px.glb": 49028,
      "./extractor_pipe_end_py.glb": 49031,
      "./extractor_pipe_end_pz.glb": 49038,
      "./extractor_pipe_isolated.glb": 49047,
      "./extractor_pipe_straight_x.glb": 49056,
      "./extractor_pipe_straight_y.glb": 49062,
      "./extractor_pipe_straight_z.glb": 49068,
      "./filter_pipe_input_nx.glb": 49071,
      "./filter_pipe_input_ny.glb": 49073,
      "./filter_pipe_input_nz.glb": 49082,
      "./filter_pipe_input_px.glb": 49087,
      "./filter_pipe_input_py.glb": 49091,
      "./filter_pipe_input_pz.glb": 49100,
      "./floor_quarters.glb": 49107,
      "./football.glb": 49116,
      "./frying_pan.glb": 49119,
      "./glowing_mushroom.glb": 49126,
      "./glowing_mushroom_wall.glb": 49131,
      "./gold_antlers_model.glb": 49135,
      "./hob_boiling.glb": 49143,
      "./hob_frying.glb": 49152,
      "./il_wizardini_del_porko.glb": 49156,
      "./job_application.glb": 49164,
      "./john_beef.glb": 49168,
      "./jump_pad.glb": 49170,
      "./jump_pad_strong.glb": 49177,
      "./jump_pad_super.glb": 49182,
      "./jump_pad_weak.glb": 49189,
      "./kitchen_worktop.glb": 49195,
      "./landing_pad.glb": 49198,
      "./lantern.glb": 49207,
      "./lantern_wall.glb": 49215,
      "./lily_pad_model.glb": 49219,
      "./lucchia_blocchi.glb": 49222,
      "./merger_pipe_output_nx.glb": 49224,
      "./merger_pipe_output_ny.glb": 49232,
      "./merger_pipe_output_nz.glb": 49235,
      "./merger_pipe_output_px.glb": 49243,
      "./merger_pipe_output_py.glb": 49245,
      "./merger_pipe_output_pz.glb": 49251,
      "./monsieur_bedwar.glb": 49257,
      "./mortar_goblin.glb": 49266,
      "./noticeboard_standing.glb": 49274,
      "./noticeboard_standing_bottom.glb": 49277,
      "./noticeboard_standing_bottom_left.glb": 49280,
      "./noticeboard_standing_bottom_right.glb": 49285,
      "./noticeboard_standing_horizontal.glb": 49291,
      "./noticeboard_standing_horizontal_left.glb": 49296,
      "./noticeboard_standing_horizontal_right.glb": 49303,
      "./noticeboard_standing_left.glb": 49307,
      "./noticeboard_standing_leg.glb": 49311,
      "./noticeboard_standing_right.glb": 49319,
      "./noticeboard_standing_single.glb": 49322,
      "./noticeboard_standing_top.glb": 49325,
      "./noticeboard_standing_top_left.glb": 49327,
      "./noticeboard_standing_top_right.glb": 49333,
      "./noticeboard_standing_vertical.glb": 49335,
      "./noticeboard_standing_vertical_bottom.glb": 49342,
      "./noticeboard_standing_vertical_top.glb": 49346,
      "./noticeboard_wall.glb": 49353,
      "./noticeboard_wall_bottom.glb": 49360,
      "./noticeboard_wall_bottom_left.glb": 49367,
      "./noticeboard_wall_bottom_right.glb": 49373,
      "./noticeboard_wall_horizontal.glb": 49381,
      "./noticeboard_wall_horizontal_left.glb": 49384,
      "./noticeboard_wall_horizontal_right.glb": 49391,
      "./noticeboard_wall_left.glb": 49396,
      "./noticeboard_wall_right.glb": 49398,
      "./noticeboard_wall_single.glb": 49400,
      "./noticeboard_wall_top.glb": 49407,
      "./noticeboard_wall_top_left.glb": 49416,
      "./noticeboard_wall_top_right.glb": 49419,
      "./noticeboard_wall_vertical.glb": 49421,
      "./noticeboard_wall_vertical_bottom.glb": 49430,
      "./noticeboard_wall_vertical_top.glb": 49433,
      "./pipe_elbow_nx_ny.glb": 49442,
      "./pipe_elbow_nx_nz.glb": 49450,
      "./pipe_elbow_nx_py.glb": 49455,
      "./pipe_elbow_nx_pz.glb": 49459,
      "./pipe_elbow_ny_nz.glb": 49468,
      "./pipe_elbow_ny_px.glb": 49476,
      "./pipe_elbow_ny_pz.glb": 49482,
      "./pipe_elbow_nz_px.glb": 49490,
      "./pipe_elbow_nz_py.glb": 49495,
      "./pipe_elbow_px_py.glb": 49502,
      "./pipe_elbow_px_pz.glb": 49509,
      "./pipe_elbow_py_pz.glb": 49517,
      "./pipe_end_nx.glb": 49521,
      "./pipe_end_ny.glb": 49530,
      "./pipe_end_nz.glb": 49532,
      "./pipe_end_px.glb": 49540,
      "./pipe_end_py.glb": 49545,
      "./pipe_end_pz.glb": 49549,
      "./pipe_isolated.glb": 49553,
      "./pipe_straight_x.glb": 49562,
      "./pipe_straight_y.glb": 49569,
      "./pipe_straight_z.glb": 49577,
      "./rocket_full.glb": 49581,
      "./rocket_northeast_1.glb": 49585,
      "./rocket_northeast_2.glb": 49589,
      "./rocket_northeast_3.glb": 49597,
      "./rocket_northeast_4.glb": 49603,
      "./rocket_northeast_5.glb": 49611,
      "./rocket_northwest_1.glb": 49615,
      "./rocket_northwest_2.glb": 49624,
      "./rocket_northwest_3.glb": 49629,
      "./rocket_northwest_4.glb": 49638,
      "./rocket_northwest_5.glb": 49647,
      "./rocket_southeast_1.glb": 49655,
      "./rocket_southeast_2.glb": 49658,
      "./rocket_southeast_3.glb": 49662,
      "./rocket_southeast_4.glb": 49666,
      "./rocket_southeast_5.glb": 49670,
      "./rocket_southwest_1.glb": 49678,
      "./rocket_southwest_2.glb": 49687,
      "./rocket_southwest_3.glb": 49689,
      "./rocket_southwest_4.glb": 49691,
      "./rocket_southwest_5.glb": 49694,
      "./rune_sigil.glb": 49698,
      "./slicing_board.glb": 49702,
      "./slime_trail.glb": 49708,
      "./splitter_pipe.glb": 49715,
      "./torch.glb": 49721,
      "./torch_black.glb": 49724,
      "./torch_blue.glb": 49727,
      "./torch_brown.glb": 49736,
      "./torch_cyan.glb": 49743,
      "./torch_gray.glb": 49752,
      "./torch_green.glb": 49755,
      "./torch_light_blue.glb": 49759,
      "./torch_light_gray.glb": 49762,
      "./torch_lime.glb": 49767,
      "./torch_magenta.glb": 49770,
      "./torch_orange.glb": 49774,
      "./torch_pink.glb": 49777,
      "./torch_purple.glb": 49782,
      "./torch_red.glb": 49784,
      "./torch_wall.glb": 49787,
      "./torch_wall_black.glb": 49790,
      "./torch_wall_blue.glb": 49797,
      "./torch_wall_brown.glb": 49800,
      "./torch_wall_cyan.glb": 49802,
      "./torch_wall_gray.glb": 49807,
      "./torch_wall_green.glb": 49809,
      "./torch_wall_light_blue.glb": 49815,
      "./torch_wall_light_gray.glb": 49821,
      "./torch_wall_lime.glb": 49824,
      "./torch_wall_magenta.glb": 49828,
      "./torch_wall_orange.glb": 49831,
      "./torch_wall_pink.glb": 49837,
      "./torch_wall_purple.glb": 49840,
      "./torch_wall_red.glb": 49842,
      "./torch_wall_white.glb": 49844,
      "./torch_wall_yellow.glb": 49853,
      "./torch_white.glb": 49856,
      "./torch_yellow.glb": 49860,
      "./twirlina_cappucina.glb": 49863,
      "./ufo.glb": 49866,
      "./vending_machine_bottom.glb": 49872,
      "./vending_machine_top.glb": 49878,
      "./wave_black.glb": 49886,
      "./wave_blue.glb": 49893,
      "./wave_brown.glb": 49895,
      "./wave_cyan.glb": 49897,
      "./wave_green.glb": 49905,
      "./wave_grey.glb": 49907,
      "./wave_light_blue.glb": 49910,
      "./wave_light_grey.glb": 49918,
      "./wave_lime.glb": 49922,
      "./wave_magenta.glb": 49926,
      "./wave_orange.glb": 49931,
      "./wave_pink.glb": 49933,
      "./wave_purple.glb": 49942,
      "./wave_red.glb": 49950,
      "./wave_white.glb": 49953,
      "./wave_yellow.glb": 49957,
      "./wheel.glb": 49966,
      "./wire_elbow_nx_ny.glb": 49970,
      "./wire_elbow_nx_nz.glb": 49975,
      "./wire_elbow_nx_py.glb": 49983,
      "./wire_elbow_nx_pz.glb": 49992,
      "./wire_elbow_ny_nz.glb": 49998,
      "./wire_elbow_ny_px.glb": 50003,
      "./wire_elbow_ny_pz.glb": 50010,
      "./wire_elbow_nz_px.glb": 50012,
      "./wire_elbow_nz_py.glb": 50019,
      "./wire_elbow_px_py.glb": 50021,
      "./wire_elbow_px_pz.glb": 50028,
      "./wire_elbow_py_pz.glb": 50037,
      "./wire_end_nx.glb": 50043,
      "./wire_end_ny.glb": 50048,
      "./wire_end_nz.glb": 50050,
      "./wire_end_px.glb": 50053,
      "./wire_end_py.glb": 50057,
      "./wire_end_pz.glb": 50060,
      "./wire_isolated.glb": 50069,
      "./wire_straight_x.glb": 50073,
      "./wire_straight_y.glb": 50075,
      "./wire_straight_z.glb": 50082
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 45737
  },
  53924: (BB, OB, GB) => {
    var YB = {
      "./arrow.png": 53929,
      "./bubble.png": 53934,
      "./critical_hit.png": 53936,
      "./drift.png": 53938,
      "./effect_5.png": 53946,
      "./fishingFishSilhouette.png": 53950,
      "./generic_2.png": 53957,
      "./glint.png": 53961,
      "./heart.png": 53964,
      "./scary_face.png": 53971,
      "./snowflake.png": 53973,
      "./soul_0.png": 53978,
      "./square_particle.png": 53985,
      "./z-particle.png": 53990
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 53924
  },
  45733: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ATTACHMENT_IMAGE_NAMES: () => ZB,
      CAPE_NAMES: () => pB,
      COSMETIC_MODEL_KEYS: () => RB,
      GROUP_ATLAS_PATHS: () => zB,
      LIFEFORM_ATLAS_PATHS: () => JB,
      MODEL_FILE_PATHS: () => DB,
      PARTICLE_TEXTURE_NAMES: () => SB,
      PLAYER_FILE: () => PB,
      attachmentImageUrl: () => NB,
      blockImageName: () => VB,
      blockImageUrl: () => AB,
      capeUrl: () => qB,
      filePackName: () => jB,
      fileSource: () => oB,
      fileUrl: () => yB,
      groupAtlasUrl: () => lB,
      lifeformAtlasUrl: () => MB,
      particleTextureUrl: () => nB
    });
    const YB = "BBSSSSSSSSSSSSSSSBBBSBBSSSSSSBBBBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBSBSBBSBBSBBSBBSBBSBBBBBBBBSBBSBSSSSSSBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSSSSSSSBSBBSBBSBSBSBSBSBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBBBBSBBBBBBBBBBBBSSSSSSSSSSSSBSBBSBBSBSBSBSBSSSSSSSSBSBSSBBSSSBSBBSBSBSBSSSSSSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSBSBSBSBSBBBSBBBSBBSSBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBBBBBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBBBBSSSSSSSBBBSSBSBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSBBBBBBBBBBBBBBSSSSSSSSSSSSSSSBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSLlLLLLLLLLLLLLLLLLLLLLLLLlLlLlLlLlLlLlLlLLlLlLlLlLlLlLlLlLlLLlLLlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      DB = ["Fence", "FenceGate", "Cactus", "Grass", "Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Furnace", "Workbench", "Maple Door", "Maple Door", "_Maple Door Top", "Maple Trapdoor", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Maple Ladder", "Vines", "Iron Ladder", "Artisan Bench", "Wheat Seeds", "Wheat", "White Bed", "White Bed", "_White Bed Head", "Orange Bed", "Orange Bed", "_Orange Bed Head", "Magenta Bed", "Magenta Bed", "_Magenta Bed Head", "Light Blue Bed", "Light Blue Bed", "_Light Blue Bed Head", "Yellow Bed", "Yellow Bed", "_Yellow Bed Head", "Lime Bed", "Lime Bed", "_Lime Bed Head", "Pink Bed", "Pink Bed", "_Pink Bed Head", "Gray Bed", "Gray Bed", "_Gray Bed Head", "Light Gray Bed", "Light Gray Bed", "_Light Gray Bed Head", "Cyan Bed", "Cyan Bed", "_Cyan Bed Head", "Purple Bed", "Purple Bed", "_Purple Bed Head", "Blue Bed", "Blue Bed", "_Blue Bed Head", "Brown Bed", "Brown Bed", "_Brown Bed Head", "Green Bed", "Green Bed", "_Green Bed Head", "Red Bed", "Red Bed", "_Red Bed Head", "Black Bed", "Black Bed", "_Black Bed Head", "Palm Sapling", "Pine Door", "Pine Door", "_Pine Door Top", "Plum Door", "Plum Door", "_Plum Door Top", "Cedar Door", "Cedar Door", "_Cedar Door Top", "Aspen Door", "Aspen Door", "_Aspen Door Top", "Jungle Door", "Jungle Door", "_Jungle Door Top", "Palm Door", "Palm Door", "_Palm Door Top", "Pine Trapdoor", "Plum Trapdoor", "Cedar Trapdoor", "Aspen Trapdoor", "Jungle Trapdoor", "Palm Trapdoor", "Pear Door", "Pear Door", "_Pear Door Top", "Pear Trapdoor", "Pear Sapling", "Board", "Board", "Net", "Cobweb", "Watermelon Seeds", "Pumpkin Seeds", "Melon Seeds", "Potion Table", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "carpet_black_model", "Black Carpet", "carpet_blue_model", "Blue Carpet", "carpet_brown_model", "Brown Carpet", "carpet_cyan_model", "Cyan Carpet", "carpet_gray_model", "Gray Carpet", "carpet_light_gray_model", "Light Gray Carpet", "carpet_green_model", "Green Carpet", "carpet_light_blue_model", "Light Blue Carpet", "carpet_lime_model", "Lime Carpet", "carpet_magenta_model", "Magenta Carpet", "carpet_orange_model", "Orange Carpet", "carpet_pink_model", "Pink Carpet", "carpet_purple_model", "Purple Carpet", "carpet_red_model", "Red Carpet", "carpet_white_model", "White Carpet", "carpet_yellow_model", "Yellow Carpet", "Rice", "Cranberries", "Red Mushroom", "Brown Mushroom", "Cotton Seeds", "Tall Grass", "Cherry Door", "Cherry Door", "_Cherry Door Top", "Cherry Trapdoor", "Cherry Sapling", "Cherry Ladder", "Spikes_Wood", "Wood Spikes", "Spikes_Stone", "Stone Spikes", "Spikes_Iron", "Iron Spikes", "Spikes_Gold", "Gold Spikes", "Spikes_Diamond", "Diamond Spikes", "Spikes_Kill", "Kill Spikes", "Corn Seeds", "White Strongbed", "White Strongbed", "_White Strongbed Head", "Orange Strongbed", "Orange Strongbed", "_Orange Strongbed Head", "Magenta Strongbed", "Magenta Strongbed", "_Magenta Strongbed Head", "Light Blue Strongbed", "Light Blue Strongbed", "_Light Blue Strongbed Head", "Yellow Strongbed", "Yellow Strongbed", "_Yellow Strongbed Head", "Lime Strongbed", "Lime Strongbed", "_Lime Strongbed Head", "Pink Strongbed", "Pink Strongbed", "_Pink Strongbed Head", "Gray Strongbed", "Gray Strongbed", "_Gray Strongbed Head", "Light Gray Strongbed", "Light Gray Strongbed", "_Light Gray Strongbed Head", "Cyan Strongbed", "Cyan Strongbed", "_Cyan Strongbed Head", "Purple Strongbed", "Purple Strongbed", "_Purple Strongbed Head", "Blue Strongbed", "Blue Strongbed", "_Blue Strongbed Head", "Brown Strongbed", "Brown Strongbed", "_Brown Strongbed Head", "Green Strongbed", "Green Strongbed", "_Green Strongbed Head", "Red Strongbed", "Red Strongbed", "_Red Strongbed Head", "Black Strongbed", "Black Strongbed", "_Black Strongbed Head", "Timed Spike Bomb Block", "Fat Brown Mushroom", "Fat Red Mushroom", "chili_pepper_stage0_model", "Chili Pepper Seeds", "chili_pepper_stage1_model", "chili_pepper_stage2_model", "chili_pepper_stage3_model", "chili_pepper_stage4_model", "chili_pepper_stage5_model", "chili_pepper_stage0_lava_model", "chili_pepper_stage1_lava_model", "chili_pepper_stage2_lava_model", "chili_pepper_stage3_lava_model", "chili_pepper_stage4_lava_model", "chili_pepper_stage5_lava_model", "chili_pepper_stage6_lava_model", "Pig Spawner Block", "Cow Spawner Block", "Sheep Spawner Block", "Cave Golem Spawner Block", "Draugr Zombie Spawner Block", "Draugr Skeleton Spawner Block", "Empty Spawner Block", "Frost Golem Spawner Block", "Frost Zombie Spawner Block", "Frost Skeleton Spawner Block", "Draugr Knight Spawner Block", "Spectral Grass", "Spectral Door", "Spectral Door", "_Spectral Door Top", "Spectral Trapdoor", "Spectral Sapling", "Spectral Ladder", "Wood Enchanting Table", "Wood Enchanting Table", "Stone Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table", "Diamond Enchanting Table", "Pine Grass", "Pine Fern", "Fallen Pine Cone", "Wolf Spawner Block", "Bear Spawner Block", "Deer Spawner Block", "Stag Spawner Block", "bone_antlers_model", "Bone Antlers", "gold_antlers_model", "Gold Antlers", "Gold Watermelon Stag Spawner Block", "Salvaging Table", "Leaf Bed", "Leaf Bed", "Jungle Tall Grass", "Catnip", "Mango Door", "Mango Door", "_Mango Door Top", "Mango Trapdoor", "Mango Sapling", "Mango Ladder", "Banana Seeds", "Dangling Rope", "Dangling Rope", "Dangling Vine", "Dangling Vine", "Gorilla Spawner Block", "Wildcat Spawner Block", "Draugr Huntress Spawner Block", "Magma Golem Spawner Block", "Horse Spawner Block", "Autumn Fern", "Carrot Seeds", "Potato Seeds", "Beetroot Seeds", "White Banner", "White Banner", "_White Banner Flag Hanging", "_White Banner Flag", "_White Banner Hanging", "Orange Banner", "Orange Banner", "_Orange Banner Flag Hanging", "_Orange Banner Flag", "_Orange Banner Hanging", "Magenta Banner", "Magenta Banner", "_Magenta Banner Flag Hanging", "_Magenta Banner Flag", "_Magenta Banner Hanging", "Light Blue Banner", "Light Blue Banner", "_Light Blue Banner Flag Hanging", "_Light Blue Banner Flag", "_Light Blue Banner Hanging", "Yellow Banner", "Yellow Banner", "_Yellow Banner Flag Hanging", "_Yellow Banner Flag", "_Yellow Banner Hanging", "Lime Banner", "Lime Banner", "_Lime Banner Flag Hanging", "_Lime Banner Flag", "_Lime Banner Hanging", "Pink Banner", "Pink Banner", "_Pink Banner Flag Hanging", "_Pink Banner Flag", "_Pink Banner Hanging", "Gray Banner", "Gray Banner", "_Gray Banner Flag Hanging", "_Gray Banner Flag", "_Gray Banner Hanging", "Light Gray Banner", "Light Gray Banner", "_Light Gray Banner Flag Hanging", "_Light Gray Banner Flag", "_Light Gray Banner Hanging", "Cyan Banner", "Cyan Banner", "_Cyan Banner Flag Hanging", "_Cyan Banner Flag", "_Cyan Banner Hanging", "Purple Banner", "Purple Banner", "_Purple Banner Flag Hanging", "_Purple Banner Flag", "_Purple Banner Hanging", "Blue Banner", "Blue Banner", "_Blue Banner Flag Hanging", "_Blue Banner Flag", "_Blue Banner Hanging", "Brown Banner", "Brown Banner", "_Brown Banner Flag Hanging", "_Brown Banner Flag", "_Brown Banner Hanging", "Green Banner", "Green Banner", "_Green Banner Flag Hanging", "_Green Banner Flag", "_Green Banner Hanging", "Red Banner", "Red Banner", "_Red Banner Flag Hanging", "_Red Banner Flag", "_Red Banner Hanging", "Black Banner", "Black Banner", "_Black Banner Flag Hanging", "_Black Banner Flag", "_Black Banner Hanging", "Draugr Banner", "Draugr Banner", "_Draugr Banner Flag Hanging", "_Draugr Banner Flag", "_Draugr Banner Hanging", "Spirit Golem Spawner Block", "Spirit Wolf Spawner Block", "Spirit Bear Spawner Block", "Spirit Stag Spawner Block", "Spirit Gorilla Spawner Block", "_Sheep Painting Top Left", "Sheep Painting", "_Sheep Painting Top Right", "_Sheep Painting Bottom Left", "_Sheep Painting Bottom Right", "_Cow Painting Top Left", "Cow Painting", "_Cow Painting Top Right", "_Cow Painting Bottom Left", "_Cow Painting Bottom Right", "_Pig Painting Top Left", "Pig Painting", "_Pig Painting Top Right", "_Pig Painting Bottom Left", "_Pig Painting Bottom Right", "_Horse Painting Top Left", "Horse Painting", "_Horse Painting Top Right", "_Horse Painting Bottom Left", "_Horse Painting Bottom Right", "_Wolf Painting Top Left", "Wolf Painting", "_Wolf Painting Top Right", "_Wolf Painting Bottom Left", "_Wolf Painting Bottom Right", "_Deer Painting Top Left", "Deer Painting", "_Deer Painting Top Right", "_Deer Painting Bottom Left", "_Deer Painting Bottom Right", "_Wildcat Painting Top Left", "Wildcat Painting", "_Wildcat Painting Top Right", "_Wildcat Painting Bottom Left", "_Wildcat Painting Bottom Right", "Draugr Warper Spawner Block", "Radar", "_Radar Dish Up", "Inactive Radar", "_Radar Dish Down", "Active Radar", "Gold Trophy", "Gold Trophy", "Small Magenta Pod", "Small Magenta Pod", "_Small Magenta Pod Mid", "_Small Magenta Pod Top", "Small Light Gray Pod", "Small Light Gray Pod", "_Small Light Gray Pod Mid", "_Small Light Gray Pod Top", "Small Red Pod", "Small Red Pod", "_Small Red Pod Mid", "_Small Red Pod Top", "Frost Wraith Spawner Block", "Draugr Reaver Spawner Block", "Small White Pod", "Small White Pod", "_Small White Pod Mid", "_Small White Pod Top", "Small Orange Pod", "Small Orange Pod", "_Small Orange Pod Mid", "_Small Orange Pod Top", "Small Light Blue Pod", "Small Light Blue Pod", "_Small Light Blue Pod Mid", "_Small Light Blue Pod Top", "Small Yellow Pod", "Small Yellow Pod", "_Small Yellow Pod Mid", "_Small Yellow Pod Top", "Small Lime Pod", "Small Lime Pod", "_Small Lime Pod Mid", "_Small Lime Pod Top", "Small Pink Pod", "Small Pink Pod", "_Small Pink Pod Mid", "_Small Pink Pod Top", "Small Gray Pod", "Small Gray Pod", "_Small Gray Pod Mid", "_Small Gray Pod Top", "Small Cyan Pod", "Small Cyan Pod", "_Small Cyan Pod Mid", "_Small Cyan Pod Top", "Small Purple Pod", "Small Purple Pod", "_Small Purple Pod Mid", "_Small Purple Pod Top", "Small Blue Pod", "Small Blue Pod", "_Small Blue Pod Mid", "_Small Blue Pod Top", "Small Brown Pod", "Small Brown Pod", "_Small Brown Pod Mid", "_Small Brown Pod Top", "Small Green Pod", "Small Green Pod", "_Small Green Pod Mid", "_Small Green Pod Top", "Small Black Pod", "Small Black Pod", "_Small Black Pod Mid", "_Small Black Pod Top", "Skull Banner", "Skull Banner", "_Skull Banner Flag Hanging", "_Skull Banner Flag", "_Skull Banner Hanging", "Rainbow Banner", "Rainbow Banner", "_Rainbow Banner Flag Hanging", "_Rainbow Banner Flag", "_Rainbow Banner Hanging", "2_block", "bebek_bebek_bebek", "bobino_musculino", "bobzilla", "brra_brra_pachim", "capitano_explovissimo", "cappuccino_ninjino", "chimpanzano_bananano", "il_wizardini_del_porko", "lucchia_blocchi", "monsieur_bedwar", "twirlina_cappucina", "boiling_pot", "chopping_board", "frying_pan", "hob_boiling", "hob_frying", "kitchen_worktop", "slicing_board", "Wood Trophy", "Wood Trophy", "Stone Trophy", "Stone Trophy", "Iron Trophy", "Iron Trophy", "Diamond Trophy", "Diamond Trophy", "Moonstone Trophy", "Moonstone Trophy", "wave_black", "wave_blue", "wave_brown", "wave_cyan", "wave_green", "wave_grey", "wave_light_blue", "wave_light_grey", "wave_lime", "wave_magenta", "wave_orange", "wave_pink", "wave_purple", "wave_red", "wave_white", "wave_yellow", "White Directional Arrow", "White Directional Arrow", "Orange Directional Arrow", "Orange Directional Arrow", "Magenta Directional Arrow", "Magenta Directional Arrow", "Light Blue Directional Arrow", "Light Blue Directional Arrow", "Yellow Directional Arrow", "Yellow Directional Arrow", "Lime Directional Arrow", "Lime Directional Arrow", "Pink Directional Arrow", "Pink Directional Arrow", "Grey Directional Arrow", "Grey Directional Arrow", "Light Grey Directional Arrow", "Light Grey Directional Arrow", "Cyan Directional Arrow", "Cyan Directional Arrow", "Purple Directional Arrow", "Purple Directional Arrow", "Blue Directional Arrow", "Blue Directional Arrow", "Brown Directional Arrow", "Brown Directional Arrow", "Green Directional Arrow", "Green Directional Arrow", "Red Directional Arrow", "Red Directional Arrow", "Black Directional Arrow", "Black Directional Arrow", "bin", "vending_machine_bottom", "Vending Machine", "vending_machine_top", "job_application", "john_beef", "67", "wheel", "ufo", "torch", "torch_wall", "torch_yellow", "torch_wall_yellow", "torch_white", "torch_wall_white", "torch_red", "torch_wall_red", "torch_purple", "torch_wall_purple", "torch_pink", "torch_wall_pink", "torch_orange", "torch_wall_orange", "torch_magenta", "torch_wall_magenta", "torch_lime", "torch_wall_lime", "torch_light_gray", "torch_wall_light_gray", "torch_light_blue", "torch_wall_light_blue", "torch_green", "torch_wall_green", "torch_gray", "torch_wall_gray", "torch_cyan", "torch_wall_cyan", "torch_brown", "torch_wall_brown", "torch_blue", "torch_wall_blue", "torch_black", "torch_wall_black", "landing_pad", "Landing Pad", "jump_pad_weak", "Weak Jump Pad", "jump_pad", "Jump Pad", "jump_pad_strong", "Strong Jump Pad", "jump_pad_super", "Super Jump Pad", "football", "glowing_mushroom", "glowing_mushroom_wall", "crystal", "slime_trail", "Slime Trail", "pipe_isolated", "pipe_end_nx", "pipe_end_ny", "pipe_end_nz", "pipe_end_px", "pipe_end_py", "pipe_end_pz", "pipe_elbow_nx_ny", "pipe_elbow_nx_nz", "pipe_straight_x", "pipe_elbow_nx_py", "pipe_elbow_nx_pz", "pipe_elbow_ny_nz", "pipe_elbow_ny_px", "pipe_straight_y", "pipe_elbow_ny_pz", "pipe_elbow_nz_px", "pipe_elbow_nz_py", "pipe_straight_z", "pipe_elbow_px_py", "pipe_elbow_px_pz", "pipe_elbow_py_pz", "auto_miner_foot_back", "Auto Miner", "auto_miner_drill_front", "auto_miner_drill_back", "auto_miner_foot_front", "auto_miner_body", "rocket_southwest_1", "Rocket Ship", "rocket_southwest_2", "rocket_southwest_3", "rocket_southwest_4", "rocket_southwest_5", "rocket_southeast_1", "rocket_southeast_2", "rocket_southeast_3", "rocket_southeast_4", "rocket_southeast_5", "rocket_northwest_1", "rocket_northwest_2", "rocket_northwest_3", "rocket_northwest_4", "rocket_northwest_5", "rocket_northeast_1", "rocket_northeast_2", "rocket_northeast_3", "rocket_northeast_4", "rocket_northeast_5", "rocket_full", "extractor_pipe_isolated", "extractor_pipe_end_nx", "extractor_pipe_end_ny", "extractor_pipe_end_nz", "extractor_pipe_end_px", "extractor_pipe_end_py", "extractor_pipe_end_pz", "extractor_pipe_elbow_nx_ny", "extractor_pipe_elbow_nx_nz", "extractor_pipe_straight_x", "extractor_pipe_elbow_nx_py", "extractor_pipe_elbow_nx_pz", "extractor_pipe_elbow_ny_nz", "extractor_pipe_elbow_ny_px", "extractor_pipe_straight_y", "extractor_pipe_elbow_ny_pz", "extractor_pipe_elbow_nz_px", "extractor_pipe_elbow_nz_py", "extractor_pipe_straight_z", "extractor_pipe_elbow_px_py", "extractor_pipe_elbow_px_pz", "extractor_pipe_elbow_py_pz", "splitter_pipe", "wire_isolated", "wire_end_nx", "wire_end_ny", "wire_end_nz", "wire_end_px", "wire_end_py", "wire_end_pz", "wire_elbow_nx_ny", "wire_elbow_nx_nz", "wire_straight_x", "wire_elbow_nx_py", "wire_elbow_nx_pz", "wire_elbow_ny_nz", "wire_elbow_ny_px", "wire_straight_y", "wire_elbow_ny_pz", "wire_elbow_nz_px", "wire_elbow_nz_py", "wire_straight_z", "wire_elbow_px_py", "wire_elbow_px_pz", "wire_elbow_py_pz", "filter_pipe_input_pz", "filter_pipe_input_nx", "filter_pipe_input_ny", "filter_pipe_input_nz", "filter_pipe_input_px", "filter_pipe_input_py", "merger_pipe_output_pz", "merger_pipe_output_nx", "merger_pipe_output_ny", "merger_pipe_output_nz", "merger_pipe_output_px", "merger_pipe_output_py", "Stalker Spawner Block", "auto_miner_lunite_foot_back", "Lunite Auto Miner", "auto_miner_lunite_drill_front", "auto_miner_lunite_drill_back", "auto_miner_lunite_foot_front", "auto_miner_lunite_body", "Crone Spawner Block", "Slime Spawner Block", "Iron Guardian Spawner Block", "Gold Guardian Spawner Block", "Diamond Guardian Spawner Block", "Moonstone Guardian Spawner Block", "Dead Bush", "lantern", "lantern_wall", "lily_pad_model", "Lily Pad", "Camel Spawner Block", "_Camel Painting Top Left", "Camel Painting", "_Camel Painting Top Right", "_Camel Painting Bottom Left", "_Camel Painting Bottom Right", "Small Twin Icicle", "Medium Icicle", "Large Icicle", "Large Twin Icicle", "noticeboard_standing", "noticeboard_standing_top", "noticeboard_standing_bottom", "noticeboard_standing_left", "noticeboard_standing_right", "noticeboard_standing_top_left", "noticeboard_standing_top_right", "noticeboard_standing_bottom_left", "noticeboard_standing_bottom_right", "noticeboard_standing_leg", "noticeboard_wall", "noticeboard_wall_top", "noticeboard_wall_bottom", "noticeboard_wall_left", "noticeboard_wall_right", "noticeboard_wall_top_left", "noticeboard_wall_top_right", "noticeboard_wall_bottom_left", "noticeboard_wall_bottom_right", "Tiki Terror Spawner Block", "Maple Fence", "Pine Fence", "Plum Fence", "Cedar Fence", "Aspen Fence", "Jungle Fence", "Palm Fence", "Pear Fence", "Cherry Fence", "Spectral Fence", "Mango Fence", "noticeboard_wall_single", "noticeboard_wall_horizontal_right", "noticeboard_wall_horizontal_left", "noticeboard_wall_horizontal", "noticeboard_wall_vertical_bottom", "noticeboard_wall_vertical_top", "noticeboard_wall_vertical", "noticeboard_standing_single", "noticeboard_standing_horizontal_right", "noticeboard_standing_horizontal_left", "noticeboard_standing_horizontal", "noticeboard_standing_vertical_bottom", "noticeboard_standing_vertical_top", "noticeboard_standing_vertical", "Maple Fence Gate", "Pine Fence Gate", "Plum Fence Gate", "Cedar Fence Gate", "Aspen Fence Gate", "Jungle Fence Gate", "Palm Fence Gate", "Pear Fence Gate", "Cherry Fence Gate", "Spectral Fence Gate", "Mango Fence Gate", "Iron Goofy Golem Spawner Block", "Gold Goofy Golem Spawner Block", "Diamond Goofy Golem Spawner Block", "Moonstone Goofy Golem Spawner Block", "cannon_bottom_back", "cannon_bottom_front", "cannon_barrel_back", "cannon_barrel_front", "cannon_top_back", "cannon_top_front", "floor_quarters", "boss_target", "rune_sigil", "eclipse_dial", "beam_arm", "beam_arm_mirrored", "mortar_goblin", "Showcase", "Pine Item Pedestal", "Plum Item Pedestal", "Cedar Item Pedestal", "Aspen Item Pedestal", "Jungle Item Pedestal", "Palm Item Pedestal", "Pear Item Pedestal", "Cherry Item Pedestal", "Spectral Item Pedestal", "Mango Item Pedestal", "baf2_fluid_pipe_none", "Fluid Pipe", "baf2_fluid_pipe_nx", "baf2_fluid_pipe_ny", "baf2_fluid_pipe_nx_ny", "baf2_fluid_pipe_nz", "baf2_fluid_pipe_nx_nz", "baf2_fluid_pipe_ny_nz", "baf2_fluid_pipe_nx_ny_nz", "baf2_fluid_pipe_px", "baf2_fluid_pipe_nx_px", "baf2_fluid_pipe_ny_px", "baf2_fluid_pipe_nx_ny_px", "baf2_fluid_pipe_nz_px", "baf2_fluid_pipe_nx_nz_px", "baf2_fluid_pipe_ny_nz_px", "baf2_fluid_pipe_nx_ny_nz_px", "baf2_fluid_pipe_py", "baf2_fluid_pipe_nx_py", "baf2_fluid_pipe_ny_py", "baf2_fluid_pipe_nx_ny_py", "baf2_fluid_pipe_nz_py", "baf2_fluid_pipe_nx_nz_py", "baf2_fluid_pipe_ny_nz_py", "baf2_fluid_pipe_nx_ny_nz_py", "baf2_fluid_pipe_px_py", "baf2_fluid_pipe_nx_px_py", "baf2_fluid_pipe_ny_px_py", "baf2_fluid_pipe_nx_ny_px_py", "baf2_fluid_pipe_nz_px_py", "baf2_fluid_pipe_nx_nz_px_py", "baf2_fluid_pipe_ny_nz_px_py", "baf2_fluid_pipe_nx_ny_nz_px_py", "baf2_fluid_pipe_pz", "baf2_fluid_pipe_nx_pz", "baf2_fluid_pipe_ny_pz", "baf2_fluid_pipe_nx_ny_pz", "baf2_fluid_pipe_nz_pz", "baf2_fluid_pipe_nx_nz_pz", "baf2_fluid_pipe_ny_nz_pz", "baf2_fluid_pipe_nx_ny_nz_pz", "baf2_fluid_pipe_px_pz", "baf2_fluid_pipe_nx_px_pz", "baf2_fluid_pipe_ny_px_pz", "baf2_fluid_pipe_nx_ny_px_pz", "baf2_fluid_pipe_nz_px_pz", "baf2_fluid_pipe_nx_nz_px_pz", "baf2_fluid_pipe_ny_nz_px_pz", "baf2_fluid_pipe_nx_ny_nz_px_pz", "baf2_fluid_pipe_py_pz", "baf2_fluid_pipe_nx_py_pz", "baf2_fluid_pipe_ny_py_pz", "baf2_fluid_pipe_nx_ny_py_pz", "baf2_fluid_pipe_nz_py_pz", "baf2_fluid_pipe_nx_nz_py_pz", "baf2_fluid_pipe_ny_nz_py_pz", "baf2_fluid_pipe_nx_ny_nz_py_pz", "baf2_fluid_pipe_px_py_pz", "baf2_fluid_pipe_nx_px_py_pz", "baf2_fluid_pipe_ny_px_py_pz", "baf2_fluid_pipe_nx_ny_px_py_pz", "baf2_fluid_pipe_nz_px_py_pz", "baf2_fluid_pipe_nx_nz_px_py_pz", "baf2_fluid_pipe_ny_nz_px_py_pz", "baf2_fluid_pipe_nx_ny_nz_px_py_pz", "baf2_water_pipe_none", "baf2_water_pipe_nx", "baf2_water_pipe_ny", "baf2_water_pipe_nx_ny", "baf2_water_pipe_nz", "baf2_water_pipe_nx_nz", "baf2_water_pipe_ny_nz", "baf2_water_pipe_nx_ny_nz", "baf2_water_pipe_px", "baf2_water_pipe_nx_px", "baf2_water_pipe_ny_px", "baf2_water_pipe_nx_ny_px", "baf2_water_pipe_nz_px", "baf2_water_pipe_nx_nz_px", "baf2_water_pipe_ny_nz_px", "baf2_water_pipe_nx_ny_nz_px", "baf2_water_pipe_py", "baf2_water_pipe_nx_py", "baf2_water_pipe_ny_py", "baf2_water_pipe_nx_ny_py", "baf2_water_pipe_nz_py", "baf2_water_pipe_nx_nz_py", "baf2_water_pipe_ny_nz_py", "baf2_water_pipe_nx_ny_nz_py", "baf2_water_pipe_px_py", "baf2_water_pipe_nx_px_py", "baf2_water_pipe_ny_px_py", "baf2_water_pipe_nx_ny_px_py", "baf2_water_pipe_nz_px_py", "baf2_water_pipe_nx_nz_px_py", "baf2_water_pipe_ny_nz_px_py", "baf2_water_pipe_nx_ny_nz_px_py", "baf2_water_pipe_pz", "baf2_water_pipe_nx_pz", "baf2_water_pipe_ny_pz", "baf2_water_pipe_nx_ny_pz", "baf2_water_pipe_nz_pz", "baf2_water_pipe_nx_nz_pz", "baf2_water_pipe_ny_nz_pz", "baf2_water_pipe_nx_ny_nz_pz", "baf2_water_pipe_px_pz", "baf2_water_pipe_nx_px_pz", "baf2_water_pipe_ny_px_pz", "baf2_water_pipe_nx_ny_px_pz", "baf2_water_pipe_nz_px_pz", "baf2_water_pipe_nx_nz_px_pz", "baf2_water_pipe_ny_nz_px_pz", "baf2_water_pipe_nx_ny_nz_px_pz", "baf2_water_pipe_py_pz", "baf2_water_pipe_nx_py_pz", "baf2_water_pipe_ny_py_pz", "baf2_water_pipe_nx_ny_py_pz", "baf2_water_pipe_nz_py_pz", "baf2_water_pipe_nx_nz_py_pz", "baf2_water_pipe_ny_nz_py_pz", "baf2_water_pipe_nx_ny_nz_py_pz", "baf2_water_pipe_px_py_pz", "baf2_water_pipe_nx_px_py_pz", "baf2_water_pipe_ny_px_py_pz", "baf2_water_pipe_nx_ny_px_py_pz", "baf2_water_pipe_nz_px_py_pz", "baf2_water_pipe_nx_nz_px_py_pz", "baf2_water_pipe_ny_nz_px_py_pz", "baf2_water_pipe_nx_ny_nz_px_py_pz", "baf2_coolant_pipe_none", "baf2_coolant_pipe_nx", "baf2_coolant_pipe_ny", "baf2_coolant_pipe_nx_ny", "baf2_coolant_pipe_nz", "baf2_coolant_pipe_nx_nz", "baf2_coolant_pipe_ny_nz", "baf2_coolant_pipe_nx_ny_nz", "baf2_coolant_pipe_px", "baf2_coolant_pipe_nx_px", "baf2_coolant_pipe_ny_px", "baf2_coolant_pipe_nx_ny_px", "baf2_coolant_pipe_nz_px", "baf2_coolant_pipe_nx_nz_px", "baf2_coolant_pipe_ny_nz_px", "baf2_coolant_pipe_nx_ny_nz_px", "baf2_coolant_pipe_py", "baf2_coolant_pipe_nx_py", "baf2_coolant_pipe_ny_py", "baf2_coolant_pipe_nx_ny_py", "baf2_coolant_pipe_nz_py", "baf2_coolant_pipe_nx_nz_py", "baf2_coolant_pipe_ny_nz_py", "baf2_coolant_pipe_nx_ny_nz_py", "baf2_coolant_pipe_px_py", "baf2_coolant_pipe_nx_px_py", "baf2_coolant_pipe_ny_px_py", "baf2_coolant_pipe_nx_ny_px_py", "baf2_coolant_pipe_nz_px_py", "baf2_coolant_pipe_nx_nz_px_py", "baf2_coolant_pipe_ny_nz_px_py", "baf2_coolant_pipe_nx_ny_nz_px_py", "baf2_coolant_pipe_pz", "baf2_coolant_pipe_nx_pz", "baf2_coolant_pipe_ny_pz", "baf2_coolant_pipe_nx_ny_pz", "baf2_coolant_pipe_nz_pz", "baf2_coolant_pipe_nx_nz_pz", "baf2_coolant_pipe_ny_nz_pz", "baf2_coolant_pipe_nx_ny_nz_pz", "baf2_coolant_pipe_px_pz", "baf2_coolant_pipe_nx_px_pz", "baf2_coolant_pipe_ny_px_pz", "baf2_coolant_pipe_nx_ny_px_pz", "baf2_coolant_pipe_nz_px_pz", "baf2_coolant_pipe_nx_nz_px_pz", "baf2_coolant_pipe_ny_nz_px_pz", "baf2_coolant_pipe_nx_ny_nz_px_pz", "baf2_coolant_pipe_py_pz", "baf2_coolant_pipe_nx_py_pz", "baf2_coolant_pipe_ny_py_pz", "baf2_coolant_pipe_nx_ny_py_pz", "baf2_coolant_pipe_nz_py_pz", "baf2_coolant_pipe_nx_nz_py_pz", "baf2_coolant_pipe_ny_nz_py_pz", "baf2_coolant_pipe_nx_ny_nz_py_pz", "baf2_coolant_pipe_px_py_pz", "baf2_coolant_pipe_nx_px_py_pz", "baf2_coolant_pipe_ny_px_py_pz", "baf2_coolant_pipe_nx_ny_px_py_pz", "baf2_coolant_pipe_nz_px_py_pz", "baf2_coolant_pipe_nx_nz_px_py_pz", "baf2_coolant_pipe_ny_nz_px_py_pz", "baf2_coolant_pipe_nx_ny_nz_px_py_pz", "Nova Trophy", "Nova Trophy", "Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Moonstone Pickaxe", "Golem Pickaxe", "Wood Axe", "Stone Axe", "Iron Axe", "Gold Axe", "Diamond Axe", "Moonstone Axe", "Artisan Axe", "Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", "Wood Sword", "Stone Sword", "Iron Sword", "Gold Sword", "Diamond Sword", "Knight Sword", "Wood Hoe", "Stone Hoe", "Iron Hoe", "Gold Hoe", "Diamond Hoe", "Flashlight", "Mining Helmet", "Wood Helmet", "Iron Helmet", "Gold Helmet", "Diamond Helmet", "Wood Chestplate", "Iron Chestplate", "Gold Chestplate", "Diamond Chestplate", "Fur Chestplate", "Wood Leggings", "Iron Leggings", "Gold Leggings", "Diamond Leggings", "Wood Boots", "Iron Boots", "Gold Boots", "Diamond Boots", "Spiked Boots", "Wood Gauntlets", "Iron Gauntlets", "Gold Gauntlets", "Diamond Gauntlets", "Military Helmet", "Military Chestplate", "Military Gauntlets", "Military Leggings", "Military Boots", "Shears", "Artisan Shears", "Stick", "Coal", "Raw Iron", "Iron Bar", "Iron Fragment", "Raw Gold", "Gold Bar", "Gold Fragment", "Diamond", "Diamond Fragment", "Moonstone", "Lunite", "Moonstone Fragment", "Bowl", "Partially Full Bowl of Cranberries", "Half Full Bowl of Cranberries", "Nearly Full Bowl of Cranberries", "Bowl of Cranberries", "Mushroom Soup", "Glowing Soup", "Night Vision Soup", "Cotton", "Gold Crop", "Bucket", "Water Bucket", "Lava Bucket", "Boat Item", "Boat", "Obsidian Boat Item", "Obsidian Boat", "Speedboat Item", "Speedboat", "Wood Hang Glider Item", "Wood Hang Glider", "Iron Hang Glider Item", "Iron Hang Glider", "Gold Hang Glider Item", "Gold Hang Glider", "Diamond Hang Glider Item", "Diamond Hang Glider", "Hovercraft Item", "Hovercraft", "Yellow Kart Item", "White Kart Item", "Red Kart Item", "Purple Kart Item", "Pink Kart Item", "Orange Kart Item", "Magenta Kart Item", "Lime Kart Item", "Light Gray Kart Item", "Light Blue Kart Item", "Green Kart Item", "Gray Kart Item", "Cyan Kart Item", "Brown Kart Item", "Blue Kart Item", "Black Kart Item", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black Kart", "Off Roader Item", "Off Roader", "Armored Car Item", "Gold Mining Drill", "Iron Mining Drill", "Diamond Mining Drill", "Moonstone Mining Drill", "Armored Car", "Car Item", "Car", "Snowball", "Pebble", "Reinforced Pebble", "Bullet", "Ball", "Reinforced Ball", "Frag Grenade", "Mining Grenade", "Smoke Grenade", "Moonstone Orb", "Fireball", "Bouncy Bomb", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Wood Bow", "Wood Bowmetacharging2", "Wood Bowmetacharging3", "Wood Bowmetacharging4", "Stone Bow", "Stone Bowmetacharging2", "Stone Bowmetacharging3", "Stone Bowmetacharging4", "Iron Bow", "Iron Bowmetacharging2", "Iron Bowmetacharging3", "Iron Bowmetacharging4", "Gold Bow", "Gold Bowmetacharging2", "Gold Bowmetacharging3", "Gold Bowmetacharging4", "Diamond Bow", "Diamond Bowmetacharging2", "Diamond Bowmetacharging3", "Diamond Bowmetacharging4", "Wood Crossbow", "Wood Crossbowmetacharging2", "Wood Crossbowmetacharging3", "Wood Crossbowmetacharging4", "Stone Crossbow", "Stone Crossbowmetacharging2", "Stone Crossbowmetacharging3", "Stone Crossbowmetacharging4", "Iron Crossbow", "Iron Crossbowmetacharging2", "Iron Crossbowmetacharging3", "Iron Crossbowmetacharging4", "Gold Crossbow", "Gold Crossbowmetacharging2", "Gold Crossbowmetacharging3", "Gold Crossbowmetacharging4", "Diamond Crossbow", "Diamond Crossbowmetacharging2", "Diamond Crossbowmetacharging3", "Diamond Crossbowmetacharging4", "Wood Crossbow Charged", "Stone Crossbow Charged", "Iron Crossbow Charged", "Gold Crossbow Charged", "Diamond Crossbow Charged", "Arrow", "Compass", "Compassmetadir2", "Compassmetadir3", "Compassmetadir4", "Compassmetadir5", "Compassmetadir6", "Compassmetadir7", "Compassmetadir8", "Compassmetadir9", "Compassmetadir10", "Compassmetadir11", "Compassmetadir12", "Chunk Map", "Bread", "Bowl of Rice", "Apple", "Plum", "Coconut", "Cracked Coconut", "Pear", "Cherry", "Banana", "Watermelon Slice", "Gold Watermelon Slice", "Melon Slice", "Gold Melon Slice", "Pumpkin Pie", "Corn", "Cornbread", "Chili Pepper", "Mango", "Carrot", "Gold Carrot", "Raw Potato", "Baked Potato", "Beetroot", "Raw Porkchop", "Cooked Porkchop", "Raw Beef", "Steak", "Raw Mutton", "Cooked Mutton", "Raw Venison", "Cooked Venison", "Rotten Flesh", "Rotten Brain", "Bone", "Bone Meal", "Leather", "Saddle", "Spirit Saddle", "Fur", "Golem Eye", "Knight Heart", "Teleport Heart", "Frost Shard", "Molten Cog", "Choir Bell", "Siege Core", "Flywheel", "Radiant Spark", "Brood Sac", "Bandolier", "Name Tag", "Book", "Empty Bottle", "Water Bottle", "Slowness Potion", "Splash Slowness Potion", "Arrow of Slowness", "Poison Potion", "Splash Poison Potion", "Arrow of Poison", "Weakness Potion", "Splash Weakness Potion", "Arrow of Weakness", "Instant Damage Potion", "Splash Instant Damage Potion", "Arrow of Instant Damage", "Milk Potion", "Splash Milk Potion", "Arrow of Milk", "Speed Potion", "Splash Speed Potion", "Arrow of Speed", "Defense Potion", "Splash Defense Potion", "Arrow of Defense", "Strength Potion", "Splash Strength Potion", "Arrow of Strength", "Invisibility Potion", "Splash Invisibility Potion", "Arrow of Invisibility", "Jump Potion", "Splash Jump Potion", "Arrow of Jumping", "Knockback Potion", "Splash Knockback Potion", "Arrow of Knockback", "Regeneration Potion", "Splash Regeneration Potion", "Arrow of Regeneration", "Instant Healing Potion", "Splash Instant Healing Potion", "Arrow of Instant Healing", "Haste Potion", "Splash Haste Potion", "Arrow of Haste", "Shield Potion", "Splash Shield Potion", "Arrow of Shield", "Double Jump Potion", "Splash Double Jump Potion", "Arrow of Double Jump", "Heat Resistance Potion", "Splash Heat Resistance Potion", "Arrow of Heat Resistance", "X-Ray Vision Potion", "Splash X-Ray Vision Potion", "Arrow of X-Ray Vision", "Mining Yield Potion", "Splash Mining Yield Potion", "Arrow of Mining Yield", "Brain Rot Potion", "Splash Brain Rot Potion", "Arrow of Brain Rot", "Chaos Potion", "Teleportation Potion", "Ammo", "AK-47", "M16", "MP40", "TAR-21", "M1911", "Double Barrel", "AWP", "Deagle", "Striker-12", "VSR", "DMR", "Minigun", "FMR", "SKAR", "Block-19", "Mini Izu", "GPMG", "Gold Coin", "Updraft", "Snowdash", "Floor Creator", "Moonstone Remote", "Ice Bridge", "Maple Planks Bridge", "Messy Stone Bridge", "Yellow Balloon Item", "White Balloon Item", "Red Balloon Item", "Purple Balloon Item", "Pink Balloon Item", "Orange Balloon Item", "Magenta Balloon Item", "Lime Balloon Item", "Light Gray Balloon Item", "Light Blue Balloon Item", "Green Balloon Item", "Gray Balloon Item", "Cyan Balloon Item", "Brown Balloon Item", "Blue Balloon Item", "Black Balloon Item", "Yellow Balloon", "White Balloon", "Red Balloon", "Purple Balloon", "Pink Balloon", "Orange Balloon", "Magenta Balloon", "Lime Balloon", "Light Gray Balloon", "Light Blue Balloon", "Green Balloon", "Gray Balloon", "Cyan Balloon", "Brown Balloon", "Blue Balloon", "Black Balloon", "Yellow Popup Tower", "White Popup Tower", "Red Popup Tower", "Purple Popup Tower", "Pink Popup Tower", "Orange Popup Tower", "Magenta Popup Tower", "Lime Popup Tower", "Light Gray Popup Tower", "Light Blue Popup Tower", "Green Popup Tower", "Gray Popup Tower", "Cyan Popup Tower", "Brown Popup Tower", "Blue Popup Tower", "Black Popup Tower", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Paintball", "White Paintball", "Red Paintball", "Purple Paintball", "Pink Paintball", "Orange Paintball", "Magenta Paintball", "Lime Paintball", "Light Gray Paintball", "Light Blue Paintball", "Green Paintball", "Gray Paintball", "Cyan Paintball", "Brown Paintball", "Blue Paintball", "Black Paintball", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Yellow Paintball Explosive Item", "White Paintball Explosive Item", "Red Paintball Explosive Item", "Purple Paintball Explosive Item", "Pink Paintball Explosive Item", "Orange Paintball Explosive Item", "Magenta Paintball Explosive Item", "Lime Paintball Explosive Item", "Light Gray Paintball Explosive Item", "Light Blue Paintball Explosive Item", "Green Paintball Explosive Item", "Gray Paintball Explosive Item", "Cyan Paintball Explosive Item", "Brown Paintball Explosive Item", "Blue Paintball Explosive Item", "Black Paintball Explosive Item", "Yellow Sticky Paintball Explosive Item", "White Sticky Paintball Explosive Item", "Red Sticky Paintball Explosive Item", "Purple Sticky Paintball Explosive Item", "Pink Sticky Paintball Explosive Item", "Orange Sticky Paintball Explosive Item", "Magenta Sticky Paintball Explosive Item", "Lime Sticky Paintball Explosive Item", "Light Gray Sticky Paintball Explosive Item", "Light Blue Sticky Paintball Explosive Item", "Green Sticky Paintball Explosive Item", "Gray Sticky Paintball Explosive Item", "Cyan Sticky Paintball Explosive Item", "Brown Sticky Paintball Explosive Item", "Blue Sticky Paintball Explosive Item", "Black Sticky Paintball Explosive Item", "Yellow Seeking Paintball Explosive Item", "White Seeking Paintball Explosive Item", "Red Seeking Paintball Explosive Item", "Purple Seeking Paintball Explosive Item", "Pink Seeking Paintball Explosive Item", "Orange Seeking Paintball Explosive Item", "Magenta Seeking Paintball Explosive Item", "Lime Seeking Paintball Explosive Item", "Light Gray Seeking Paintball Explosive Item", "Light Blue Seeking Paintball Explosive Item", "Green Seeking Paintball Explosive Item", "Gray Seeking Paintball Explosive Item", "Cyan Seeking Paintball Explosive Item", "Brown Seeking Paintball Explosive Item", "Blue Seeking Paintball Explosive Item", "Black Seeking Paintball Explosive Item", "Yellow Quick Paintball Explosive Item", "White Quick Paintball Explosive Item", "Red Quick Paintball Explosive Item", "Purple Quick Paintball Explosive Item", "Pink Quick Paintball Explosive Item", "Orange Quick Paintball Explosive Item", "Magenta Quick Paintball Explosive Item", "Lime Quick Paintball Explosive Item", "Light Gray Quick Paintball Explosive Item", "Light Blue Quick Paintball Explosive Item", "Green Quick Paintball Explosive Item", "Gray Quick Paintball Explosive Item", "Cyan Quick Paintball Explosive Item", "Brown Quick Paintball Explosive Item", "Blue Quick Paintball Explosive Item", "Black Quick Paintball Explosive Item", "Yellow Paint Bow", "Yellow Paint Bowmetacharging2", "Yellow Paint Bowmetacharging3", "Yellow Paint Bowmetacharging4", "White Paint Bow", "White Paint Bowmetacharging2", "White Paint Bowmetacharging3", "White Paint Bowmetacharging4", "Red Paint Bow", "Red Paint Bowmetacharging2", "Red Paint Bowmetacharging3", "Red Paint Bowmetacharging4", "Purple Paint Bow", "Purple Paint Bowmetacharging2", "Purple Paint Bowmetacharging3", "Purple Paint Bowmetacharging4", "Pink Paint Bow", "Pink Paint Bowmetacharging2", "Pink Paint Bowmetacharging3", "Pink Paint Bowmetacharging4", "Orange Paint Bow", "Orange Paint Bowmetacharging2", "Orange Paint Bowmetacharging3", "Orange Paint Bowmetacharging4", "Magenta Paint Bow", "Magenta Paint Bowmetacharging2", "Magenta Paint Bowmetacharging3", "Magenta Paint Bowmetacharging4", "Lime Paint Bow", "Lime Paint Bowmetacharging2", "Lime Paint Bowmetacharging3", "Lime Paint Bowmetacharging4", "Light Gray Paint Bow", "Light Gray Paint Bowmetacharging2", "Light Gray Paint Bowmetacharging3", "Light Gray Paint Bowmetacharging4", "Light Blue Paint Bow", "Light Blue Paint Bowmetacharging2", "Light Blue Paint Bowmetacharging3", "Light Blue Paint Bowmetacharging4", "Green Paint Bow", "Green Paint Bowmetacharging2", "Green Paint Bowmetacharging3", "Green Paint Bowmetacharging4", "Gray Paint Bow", "Gray Paint Bowmetacharging2", "Gray Paint Bowmetacharging3", "Gray Paint Bowmetacharging4", "Cyan Paint Bow", "Cyan Paint Bowmetacharging2", "Cyan Paint Bowmetacharging3", "Cyan Paint Bowmetacharging4", "Brown Paint Bow", "Brown Paint Bowmetacharging2", "Brown Paint Bowmetacharging3", "Brown Paint Bowmetacharging4", "Blue Paint Bow", "Blue Paint Bowmetacharging2", "Blue Paint Bowmetacharging3", "Blue Paint Bowmetacharging4", "Black Paint Bow", "Black Paint Bowmetacharging2", "Black Paint Bowmetacharging3", "Black Paint Bowmetacharging4", "Pig Spawn Orb", "Cow Spawn Orb", "Sheep Spawn Orb", "Horse Spawn Orb", "Camel Spawn Orb", "Iron Goofy Golem Spawn Orb", "Gold Goofy Golem Spawn Orb", "Diamond Goofy Golem Spawn Orb", "Moonstone Goofy Golem Spawn Orb", "Deer Spawn Orb", "Slime Spawn Orb", "Wolf Spawn Orb", "Wildcat Spawn Orb", "Spirit Golem Spawn Orb", "Spirit Wolf Spawn Orb", "Spirit Bear Spawn Orb", "Spirit Stag Spawn Orb", "Spirit Gorilla Spawn Orb", "Bear Spawn Orb", "Stag Spawn Orb", "Gold Watermelon Stag Spawn Orb", "Gorilla Spawn Orb", "Cave Golem Spawn Orb", "Draugr Zombie Spawn Orb", "Draugr Skeleton Spawn Orb", "Frost Golem Spawn Orb", "Frost Zombie Spawn Orb", "Frost Skeleton Spawn Orb", "Draugr Knight Spawn Orb", "Draugr Huntress Spawn Orb", "Magma Golem Spawn Orb", "Draugr Warper Spawn Orb", "Frost Wraith Spawn Orb", "Draugr Reaver Spawn Orb", "Stalker Spawn Orb", "Crone Spawn Orb", "Iron Guardian Spawn Orb", "Gold Guardian Spawn Orb", "Diamond Guardian Spawn Orb", "Moonstone Guardian Spawn Orb", "Tiki Terror Spawn Orb", "Mob Catcher", "Caught Mob Pig Default", "Caught Mob Cow Default", "Caught Mob Cow Cream", "Caught Mob Sheep Default", "Caught Mob Horse Default", "Caught Mob Horse Black", "Caught Mob Horse Brown", "Caught Mob Horse Cream", "Caught Mob Camel Default", "Caught Mob Camel Brown", "Caught Mob Iron_Goofy_Golem Default", "Caught Mob Iron_Goofy_Golem Flaking", "Caught Mob Iron_Goofy_Golem Patchy", "Caught Mob Iron_Goofy_Golem Shedding", "Caught Mob Iron_Goofy_Golem Bare", "Caught Mob Iron_Goofy_Golem Stone", "Caught Mob Gold_Goofy_Golem Default", "Caught Mob Gold_Goofy_Golem Flaking", "Caught Mob Gold_Goofy_Golem Patchy", "Caught Mob Gold_Goofy_Golem Shedding", "Caught Mob Gold_Goofy_Golem Bare", "Caught Mob Gold_Goofy_Golem Stone", "Caught Mob Diamond_Goofy_Golem Default", "Caught Mob Diamond_Goofy_Golem Flaking", "Caught Mob Diamond_Goofy_Golem Patchy", "Caught Mob Diamond_Goofy_Golem Shedding", "Caught Mob Diamond_Goofy_Golem Bare", "Caught Mob Diamond_Goofy_Golem Stone", "Caught Mob Moonstone_Goofy_Golem Default", "Caught Mob Moonstone_Goofy_Golem Flaking", "Caught Mob Moonstone_Goofy_Golem Patchy", "Caught Mob Moonstone_Goofy_Golem Shedding", "Caught Mob Moonstone_Goofy_Golem Bare", "Caught Mob Moonstone_Goofy_Golem Stone", "Caught Mob Deer Default", "Caught Mob Slime Default", "Caught Mob Wolf Default", "Caught Mob Wolf White", "Caught Mob Wolf Brown", "Caught Mob Wolf Grey", "Caught Mob Wolf Spectral", "Caught Mob Wildcat Default", "Caught Mob Wildcat Tabby", "Caught Mob Wildcat Grey", "Caught Mob Wildcat Black", "Caught Mob Wildcat Calico", "Caught Mob Wildcat Siamese", "Caught Mob Wildcat Leopard", "Caught Mob Spirit_Golem Default", "Caught Mob Spirit_Wolf Default", "Caught Mob Spirit_Bear Default", "Caught Mob Spirit_Stag Default", "Caught Mob Spirit_Gorilla Default", "Caught Mob Bear Default", "Caught Mob Stag Default", "Caught Mob Gold_Watermelon_Stag Default", "Caught Mob Gorilla Default", "Caught Mob Cave_Golem Default", "Caught Mob Cave_Golem Iron", "Caught Mob Draugr_Zombie Default", "Caught Mob Draugr_Zombie Longhairchestplate", "Caught Mob Draugr_Zombie Longhairclothed", "Caught Mob Draugr_Zombie Shorthairclothed", "Caught Mob Draugr_Skeleton Default", "Caught Mob Frost_Golem Default", "Caught Mob Frost_Zombie Default", "Caught Mob Frost_Zombie Longhairchestplate", "Caught Mob Frost_Zombie Shorthairclothed", "Caught Mob Frost_Skeleton Default", "Caught Mob Draugr_Knight Default", "Caught Mob Draugr_Huntress Default", "Caught Mob Magma_Golem Default", "Caught Mob Draugr_Warper Default", "Caught Mob Frost_Wraith Default", "Caught Mob Draugr_Reaver Default", "Caught Mob Stalker Default", "Caught Mob Stalker Crimson", "Caught Mob Stalker Frost", "Caught Mob Stalker Void", "Caught Mob Crone Default", "Caught Mob Iron_Guardian Default", "Caught Mob Gold_Guardian Default", "Caught Mob Diamond_Guardian Default", "Caught Mob Moonstone_Guardian Default", "Caught Mob Tiki_Terror Default", "Caught Mob Tiki_Terror Titan", "Caught Mob Tiki_Terror Tormentor", "Caught Mob Tiki_Terror Tyrant", "Timed Spike Bomb", "Timed Spike Bombmetacharging2", "Timed Spike Bombmetacharging3", "Timed Spike Bombmetacharging4", "Toxin Ball", "Aura XP Fragment", "Aura XP Orb", "Aura XP Potion", "Aura XP Potion II", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Arrow of Aura XP", "Firecracker", "Rainbow Firecracker", "Yellow Firecracker", "White Firecracker", "Red Firecracker", "Purple Firecracker", "Pink Firecracker", "Orange Firecracker", "Magenta Firecracker", "Lime Firecracker", "Light Gray Firecracker", "Light Blue Firecracker", "Green Firecracker", "Gray Firecracker", "Cyan Firecracker", "Brown Firecracker", "Blue Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "Yellow Firecracker Pebble", "White Firecracker Pebble", "Red Firecracker Pebble", "Purple Firecracker Pebble", "Pink Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Lime Firecracker Pebble", "Light Gray Firecracker Pebble", "Light Blue Firecracker Pebble", "Green Firecracker Pebble", "Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Brown Firecracker Pebble", "Blue Firecracker Pebble", "Black Firecracker Pebble", "WorldBuilder Wand", "Red Strongfish", "Green Strongfish", "Moon Strongfish", "Wheatfish", "Moonfish", "Bombfish", "Boomerang Fish", "Root Flounder", "Abyss Carp", "Boulder Bass", "Barnaclejaw", "Crystalized Wheatfish", "Darter", "Shadow Darter", "Electric Eel", "Grass Snapper", "Jungle Spinefish", "Mangler Catfish", "Mossback Arapaima", "Sandbelly Piranha", "Shadeback Ray", "Mudbelly Tilapia", "Mireback Carp", "Rotslab Eel", "Aether Minnow", "Murkborne Ray", "Eldertide Leviathan", "Oarfish", "Alpha Moon Strongfish", "Bamboo Catfish", "Blackwater Bream", "Blackwater Leviathan", "Boned Sturgeon", "Bull Shark", "Channel Sawfish", "Coastal Mullet", "Coelacanth", "Driftwood Catfish", "Eagle Ray", "Giant Grouper", "Giant Moray", "Giant Stingray", "Golden Mahseer", "Greenfin Loach", "Mangrove Herring", "Moonlit Boomerang Fish", "Moonstone Pupfish", "Mudline Perch", "Murk Stingray", "Needlefish", "Nomai Moray", "Pearlescent Moonfish", "Rainbow Guppy", "Red Snapper", "Reedglass Minnow", "Reef Sardine", "Root Perch", "Rust Scad", "Seahorse", "Snakehead", "Spined Stickleback", "Stone Grouper", "Sumpback Carp", "Sunset Minnow", "Tarpon", "Threadfin Bream", "Tri-Pointed Needlefish", "Game Dev Fish", "Armoured Searobin", "Ash Lionfish", "Barefrost Toothfish", "Blackfin Icefish", "Basalt Pipefish", "Brimstone Spikefish", "Cinder Leviathan", "Crowned Flame Angelfish", "Deepwater Lanternfish", "Driftice Capelin", "Ember Chub", "Embermark Wrasse", "Eviota Vader", "Frost Herring", "Frost Wolf Eel", "Frostpaint Notie", "Frozen Grenadier", "Giant Trevally", "Glacial Lanternfish", "Glacial Silverfish", "Heatwarp Flounder", "Hatchetfish", "Ice Spined Notothenia", "Iceshelf Skate", "Icy Sculpin", "Lavaflow Trout", "Lavawake Slopefish", "Magma Sardinella", "Magma Trout", "Marbled Moray Cod", "Molten Lotella Cod", "Northern Wolffish", "Paleice Rockcod", "Permafrost Halibut", "Pithead", "Polarflash Electron", "Pyroclast Eel", "Pyroscale Grouper", "Red Pyreside", "Rimesnouted Lancetfish", "Scorched Sunfish", "Scored Dace", "Silver Dragonfish", "Snow Haddock", "Volcanic Catfish", "Volcanic Semperi", "Rusty Rod", "Lucky Rod", "Sturdy Rod", "Jungle Rod", "Draugr Rod", "Cursed Rod", "Tangle Resistant Rod", "Speed Rod", "Carbon Rod", "Deep Sea Rod", "Master Rod", "Obsidian Rod", "Molten Magma Rod", "Frost Rod", "Black Ice Rod", "Mythic Rod", "Acorn", "Acorn Jelly", "Cow's Milk", "Cheese", "Caught Fish", "Fish Fillet", "Meaty Bone", "Blinding Pebble", "Sheep's Milk", "Yoghurt Pot", "Truffle", "Truffle Oil", "Oats", "Porridge", "Dates", "Date Pudding", "Poop", "Fertiliser", "Medkit", "Wood Spear", "Stone Spear", "Iron Spear", "Gold Spear", "Diamond Spear", "Moonstone Spear", "Wood Dagger", "Stone Dagger", "Iron Dagger", "Gold Dagger", "Diamond Dagger", "Moonstone Dagger", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", "Wood Club", "Stone Club", "Iron Club", "Gold Club", "Diamond Club", "Moonstone Club", "Wood Mace", "Stone Mace", "Iron Mace", "Gold Mace", "Diamond Mace", "Moonstone Mace", "Wood Whip", "Stone Whip", "Iron Whip", "Gold Whip", "Diamond Whip", "Moonstone Whip", "Beef Stew", "chicken", "coleslaw", "egg", "Fish N Chips", "Fried Rice", "lettuce", "omelette", "onion", "Red Cabbage", "Roast Dinner", "salad", "Stuffed Pepper", "sushi", "tomato", "Vegetable Soup", "clock_wood_midday", "clock_wood_midnight", "clock_wood_late_night", "clock_wood_sunrise", "clock_wood_early_day", "clock_wood_late_day", "clock_wood_sunset", "clock_wood_early_night", "clock_gold_midday", "clock_gold_midnight", "clock_gold_late_night", "clock_gold_sunrise", "clock_gold_early_day", "clock_gold_late_day", "clock_gold_sunset", "clock_gold_early_night", "Lucky Sword Upgrade", "Lucky Armour Upgrade", "Lucky Tools Upgrade", "Lucky Clover", "Void Net", "Lucky Bomb", "Unlucky Bomb", "Swap Orb", "Golden Lucky Clover", "amethite", "amethite_fragment", "amethite_pickaxe", "amethite_axe", "amethite_shovel", "amethite_sword", "amethite_hoe", "amethite_helmet", "amethite_chestplate", "amethite_leggings", "amethite_boots", "amethite_gauntlets", "amethite_bow", "amethite_bow_charging_2", "amethite_bow_charging_3", "amethite_bow_charging_4", "amethite_crossbow", "amethite_crossbow_charging_2", "amethite_crossbow_charging_3", "amethite_crossbow_charging_4", "amethite_crossbow_charged", "amethite_spear", "amethite_dagger", "amethite_boomerang", "amethite_club", "amethite_mace", "amethite_whip", "magmasteel", "magmasteel_fragment", "magmasteel_pickaxe", "magmasteel_axe", "magmasteel_shovel", "magmasteel_sword", "magmasteel_hoe", "magmasteel_helmet", "magmasteel_chestplate", "magmasteel_leggings", "magmasteel_boots", "magmasteel_gauntlets", "magmasteel_bow", "magmasteel_bow_charging_2", "magmasteel_bow_charging_3", "magmasteel_bow_charging_4", "magmasteel_crossbow", "magmasteel_crossbow_charging_2", "magmasteel_crossbow_charging_3", "magmasteel_crossbow_charging_4", "magmasteel_crossbow_charged", "magmasteel_spear", "magmasteel_dagger", "magmasteel_boomerang", "magmasteel_club", "magmasteel_mace", "magmasteel_whip", "rubellite", "rubellite_fragment", "rubellite_pickaxe", "rubellite_axe", "rubellite_shovel", "rubellite_sword", "rubellite_hoe", "rubellite_helmet", "rubellite_chestplate", "rubellite_leggings", "rubellite_boots", "rubellite_gauntlets", "rubellite_bow", "rubellite_bow_charging_2", "rubellite_bow_charging_3", "rubellite_bow_charging_4", "rubellite_crossbow", "rubellite_crossbow_charging_2", "rubellite_crossbow_charging_3", "rubellite_crossbow_charging_4", "rubellite_crossbow_charged", "rubellite_spear", "rubellite_dagger", "rubellite_boomerang", "rubellite_club", "rubellite_mace", "rubellite_whip", "serpentite", "serpentite_fragment", "serpentite_pickaxe", "serpentite_axe", "serpentite_shovel", "serpentite_sword", "serpentite_hoe", "serpentite_helmet", "serpentite_chestplate", "serpentite_leggings", "serpentite_boots", "serpentite_gauntlets", "serpentite_bow", "serpentite_bow_charging_2", "serpentite_bow_charging_3", "serpentite_bow_charging_4", "serpentite_crossbow", "serpentite_crossbow_charging_2", "serpentite_crossbow_charging_3", "serpentite_crossbow_charging_4", "serpentite_crossbow_charged", "serpentite_spear", "serpentite_dagger", "serpentite_boomerang", "serpentite_club", "serpentite_mace", "serpentite_whip", "cursemetal_helmet", "cursemetal_chestplate", "cursemetal_gauntlets", "cursemetal_leggings", "cursemetal_boots", "kingly_amethite_helmet", "kingly_amethite_chestplate", "kingly_amethite_gauntlets", "kingly_amethite_leggings", "kingly_amethite_boots", "kingly_diamond_helmet", "kingly_diamond_chestplate", "kingly_diamond_gauntlets", "kingly_diamond_leggings", "kingly_diamond_boots", "sanguine_shard", "sanguine_sword", "sanguine_bow", "sanguine_bow_charging_2", "sanguine_bow_charging_3", "sanguine_bow_charging_4", "sanguine_crossbow", "sanguine_crossbow_charging_2", "sanguine_crossbow_charging_3", "sanguine_crossbow_charging_4", "sanguine_crossbow_charged", "sanguine_spear", "sanguine_dagger", "sanguine_club", "sanguine_mace", "sanguine_whip", "sanguine_staff", "sanguine_helmet", "sanguine_chestplate", "sanguine_gauntlets", "sanguine_leggings", "sanguine_boots", "spectral_shard", "spectral_sword", "spectral_bow", "spectral_bow_charging_2", "spectral_bow_charging_3", "spectral_bow_charging_4", "spectral_crossbow", "spectral_crossbow_charging_2", "spectral_crossbow_charging_3", "spectral_crossbow_charging_4", "spectral_crossbow_charged", "spectral_spear", "spectral_dagger", "spectral_club", "spectral_mace", "spectral_whip", "spectral_staff", "spectral_helmet", "spectral_chestplate", "spectral_gauntlets", "spectral_leggings", "spectral_boots", "geo_shard", "geo_sword", "geo_bow", "geo_bow_charging_2", "geo_bow_charging_3", "geo_bow_charging_4", "geo_crossbow", "geo_crossbow_charging_2", "geo_crossbow_charging_3", "geo_crossbow_charging_4", "geo_crossbow_charged", "geo_spear", "geo_dagger", "geo_club", "geo_mace", "geo_whip", "geo_staff", "geo_helmet", "geo_chestplate", "geo_gauntlets", "geo_leggings", "geo_boots", "astral_shard", "astral_sword", "astral_bow", "astral_bow_charging_2", "astral_bow_charging_3", "astral_bow_charging_4", "astral_crossbow", "astral_crossbow_charging_2", "astral_crossbow_charging_3", "astral_crossbow_charging_4", "astral_crossbow_charged", "astral_spear", "astral_dagger", "astral_club", "astral_mace", "astral_whip", "astral_staff", "astral_helmet", "astral_chestplate", "astral_gauntlets", "astral_leggings", "astral_boots", "wooden_key", "stone_key", "iron_key", "gold_key", "diamond_key", "Goldheart Engine", "Deepbite Drill Tip", "Empty Fuel Cell", "Blackfire Fuel Cell", "Doom Rivet", "Doom Crest", "Raw Copper", "Copper Bar", "Iron Grit", "Gold Grit", "Copper Grit", "Charcoal", "Recall Beacon", "Iron Hammer", "Iron Plate", "Copper Wire", "Motor", "Machine Parts", "Relay Coil", "Deposit Seed (Copper)", "Deposit Seed (Gold)", "Deposit Seed (Voltite)", "Deposit Seed (Coal)", "Deposit Seed (Iron)", "Deposit Seed (Stone)", "Steel Bar", "Gold Plate", "Logic Board", "Machine Hull", "Raw Voltite", "Power Coupler", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Voltite Dust", "Voltite Cell", "Sky Pack", "Dusk Moss", "Star Alloy", "Moonstone Dust", "Comet Shard", "Comet Core", "Starbore Drill", "Core Tier 2", "Core Tier 3", "Core Tier 4", "Core Tier 5", "Core Tier 6", "Core Tier 7", "Core Tier 8", "Core Tier 9", "Core Tier 10", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots", "Wood Blade", "Wood Guard", "Wood Handle", "Stone Blade", "Stone Guard", "Stone Handle", "Iron Blade", "Iron Guard", "Iron Handle", "Gold Blade", "Gold Guard", "Gold Handle", "Diamond Blade", "Diamond Guard", "Diamond Handle", "Moonstone Blade", "Moonstone Guard", "Moonstone Handle", "Magmasteel Blade", "Magmasteel Guard", "Magmasteel Handle", "Sanguine Blade", "Sanguine Guard", "Sanguine Handle", "Astral Blade", "Astral Guard", "Astral Handle", "Moonstone Sword", "Magmaward Fuel", "Raw Uranium", "Uranium Grit", "Uranium Pellet", "Plutonium Pellet", "Spent Pellet", "Glow Dust", "Biomass", "Graphite", "Containment Plate", "Heat Exchanger", "Focus Lens", "Nova Matter", "Deposit Seed (Uranium)", "Reactor Blueprint", "Wrench", "Advanced Coupler", "Nova Coupler", "Core Tier 11", "Core Tier 12", "Core Tier 13", "Core Tier 14", "Core Tier 15", "Jet Chestplate", "Nova Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Mob Cage", "Caged Pig", "Caged Cow", "Caged Sheep", "Caged Deer", "Caged Stag", "Nova Multitool", "Pocket Terminal", "Comet Beacon", "Nova Wrench", "Player/Player_Model", "Player/Player_Reconstructed", "Pig/Pig_Model", "Cow/Cow_Model", "Sheep/Sheep_Model", "Horse/Horse_Model", "Camel/Camel_Model", "Iron Goofy Golem/Iron Goofy Golem_Model", "Deer/Deer_Model", "Slime/Slime_Model", "Wolf/Wolf_Model", "Wildcat/Wildcat_Model", "Cave Golem/Cave Golem_Model", "Bear/Bear_Model", "Stag/Stag_Model", "Gorilla/Gorilla_Model", "Draugr Zombie/Draugr Zombie_Model", "Draugr Skeleton/Draugr Skeleton_Model", "Draugr Knight/Draugr Knight_Model", "Draugr Warper/Draugr Warper_Model", "Frost Wraith/Frost Wraith_Model", "Draugr Reaver/Draugr Reaver_Model", "Stalker/Stalker_Model", "Crone/Crone_Model", "Iron Guardian/Iron Guardian_Model", "Iron Guardian/Iron Guardian_Reconstructed", "Gold Guardian/Gold Guardian_Model", "Gold Guardian/Gold Guardian_Reconstructed", "Diamond Guardian/Diamond Guardian_Model", "Diamond Guardian/Diamond Guardian_Reconstructed", "Moonstone Guardian/Moonstone Guardian_Model", "Moonstone Guardian/Moonstone Guardian_Reconstructed", "Tiki Terror/Tiki Terror_Model", "Tiki Terror/Tiki Terror_Reconstructed", "67/67_Model", "67/67_Reconstructed", "Bobino Musculino/Bobino Musculino_Model", "Bobino Musculino/Bobino Musculino_Reconstructed", "Capitano Explovissimo/Capitano Explovissimo_Model", "Capitano Explovissimo/Capitano Explovissimo_Reconstructed", "Desert Fennec/Desert Fennec_Model", "Armour Collector/Armour Collector_Model", "Armour Collector/Armour Collector_Reconstructed", "Furnace Knight/Furnace Knight_Model", "Furnace Knight/Furnace Knight_Reconstructed", "Lil Knight/Lil Knight_Model", "Lil Knight/Lil Knight_Reconstructed", "Glass Gremlin/Glass Gremlin_Model", "Glass Gremlin/Glass Gremlin_Reconstructed", "Glass Bro/Glass Bro_Model", "Glass Bro/Glass Bro_Reconstructed", "Lord Vulcan/Lord Vulcan_Model", "Lord Vulcan/Lord Vulcan_Reconstructed", "Zombie/Zombie_Model", "Zombie/Zombie_Reconstructed", "Skeleton/Skeleton_Model", "Skeleton/Skeleton_Reconstructed", "Mummy/Mummy_Model", "Mummy/Mummy_Reconstructed", "Scorpion/Scorpion_Model", "Vulcanite/Vulcanite_Model", "Vulcanite/Vulcanite_Reconstructed", "Evil Tome/Evil Tome_Model", "Magma Toad/Magma Toad_Model", "Player/astro_set_1_attachable", "Player/astro_set_2_attachable", "Player/astro_set_3_attachable", "Player/astro_set_4_attachable", "Player/beaver_lumberjack", "Player/bee_set_1_attachable", "Player/bee_set_2_attachable", "Player/bee_set_3_attachable", "Player/bee_set_4_attachable", "Player/cape_cuboid_18_12", "Player/chef_attachables", "Player/christmas_elf_attachable", "Player/christmas_snowman_attachable", "Player/dwarf_blue_hair", "Player/dwarf_braided_hair", "Player/dwarf_child", "Player/dwarf_forked_beard", "Player/dwarf_ginger_beard", "Player/dwarf_grey_beard", "Player/dwarf_hair_buns", "Player/dwarf_purple_beard", "Player/dwarf_red_hair", "Player/dwarf_short_beard", "Player/farmer_gill_attachable", "Player/farmer_head", "Player/fire_mage_attachable", "Player/forge_mother", "Player/furry_bear_attachables", "Player/furry_kitsune_attachables", "Player/furry_kitsune_tail_single", "Player/furry_kitsune_tails", "Player/furry_shark_attachables", "Player/furry_shark_tail", "Player/furry_wolfKnight_attachables", "Player/furry_wolfKnight_tail", "Player/general_attachable", "Player/goblin_goggles", "Player/goblin_mad_scientist", "Player/highSociety_set_1_attachable", "Player/highSociety_set_2_attachable", "Player/highSociety_set_3_attachable", "Player/highSociety_set_4_attachable", "Player/human_archer", "Player/human_desert_guard", "Player/human_sentry", "Player/ice_wings_attachable", "Player/jackal_priest", "Player/jetpack_attachable", "Player/medieval_set_1_attachable", "Player/medieval_set_2_attachable", "Player/medieval_set_3_attachable", "Player/medieval_set_4_attachable", "Player/mining_helmet_attachable", "Player/minotaur", "Player/minotaur_elder", "Player/minotaur_warrior", "Player/monster_hunter_lorenzo_attachable", "Player/npc_pig_head", "Player/painter_spencer_attachable", "Player/pet_reindeer", "Player/pig_napoleon", "Player/pig_worker_attachable", "Player/piggy_banker_head", "Player/portal_mage_hat", "Player/rabbit_aristocrat_attachable", "Player/skis_attachable", "Player/smuglyn_attachable", "Player/spring_set_1_attachable", "Player/spring_set_2_attachable", "Player/spring_set_3_attachable", "Player/spring_set_4_attachable", "Player/tentacle_boy", "Player/tentacle_guy_attachable", "Player/tentacle_guy_fisherman_attachable", "Player/trader_cowl_black", "Player/trader_cowl_blue", "Player/ugly_sweater_attachable", "Player/wolf_in_suit_attachable", "Player/wolf_security", "Player/y2k_set_1_attachable", "Player/y2k_set_2_attachable", "Player/y2k_set_3_attachable", "Player/y2k_set_4_attachable"],
      QB = {
        b: "block",
        s: "static",
        l: "lifeform"
      };

    function oB(BB) {
      var OB;
      return null !== (OB = QB[YB.charAt(BB).toLowerCase()]) && void 0 !== OB ? OB : null
    }

    function jB(BB) {
      var OB;
      const GB = YB.charAt(BB);
      return "" !== GB && GB === GB.toUpperCase() && null !== (OB = DB[BB].split("/").pop()) && void 0 !== OB ? OB : null
    }

    function yB(BB, OB) {
      const YB = DB[BB];
      switch (oB(BB)) {
        case "block":
          return GB(45737)(`./${YB}.glb`);
        case "static":
          return `${OB}/models/${YB}.glb`;
        case "lifeform":
          return GB(50089)(`./${YB}.glb`);
        default:
          return null
      }
    }
    const JB = ["Player/Player_Atlas", "Pig/Pig_Atlas", "Cow/Cow_Atlas", "Sheep/Sheep_Atlas", "Horse/Horse_Atlas", "Camel/Camel_Atlas", "Iron Goofy Golem/Iron Goofy Golem_Atlas", "Gold Goofy Golem/Gold Goofy Golem_Atlas", "Diamond Goofy Golem/Diamond Goofy Golem_Atlas", "Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas", "Deer/Deer_Atlas", "Slime/Slime_Atlas", "Wolf/Wolf_Atlas", "Wildcat/Wildcat_Atlas", "Spirit Golem/Spirit Golem_Atlas", "Spirit Wolf/Spirit Wolf_Atlas", "Spirit Bear/Spirit Bear_Atlas", "Spirit Stag/Spirit Stag_Atlas", "Spirit Gorilla/Spirit Gorilla_Atlas", "Bear/Bear_Atlas", "Stag/Stag_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Atlas", "Gorilla/Gorilla_Atlas", "Cave Golem/Cave Golem_Atlas", "Draugr Zombie/Draugr Zombie_Atlas", "Draugr Skeleton/Draugr Skeleton_Atlas", "Frost Golem/Frost Golem_Atlas", "Frost Zombie/Frost Zombie_Atlas", "Frost Skeleton/Frost Skeleton_Atlas", "Draugr Knight/Draugr Knight_Atlas", "Draugr Huntress/Draugr Huntress_Atlas", "Magma Golem/Magma Golem_Atlas", "Draugr Warper/Draugr Warper_Atlas", "Frost Wraith/Frost Wraith_Atlas", "Draugr Reaver/Draugr Reaver_Atlas", "Stalker/Stalker_Atlas", "Crone/Crone_Atlas", "Iron Guardian/Iron Guardian_Atlas", "Gold Guardian/Gold Guardian_Atlas", "Diamond Guardian/Diamond Guardian_Atlas", "Moonstone Guardian/Moonstone Guardian_Atlas", "Tiki Terror/Tiki Terror_Atlas", "Player/Player_Atlas", "67/67_Atlas", "Bobino Musculino/Bobino Musculino_Atlas", "Capitano Explovissimo/Capitano Explovissimo_Atlas", "Desert Fennec/Desert Fennec_Atlas", "Armour Collector/Armour Collector_Atlas", "Furnace Knight/Furnace Knight_Atlas", "Lil Knight/Lil Knight_Atlas", "Glass Gremlin/Glass Gremlin_Atlas", "Glass Bro/Glass Bro_Atlas", "Lord Vulcan/Lord Vulcan_Atlas", "Zombie/Zombie_Atlas", "Skeleton/Skeleton_Atlas", "Mummy/Mummy_Atlas", "Scorpion/Scorpion_Atlas", "Vulcanite/Vulcanite_Atlas", "Evil Tome/Evil Tome_Atlas", "Magma Toad/Magma Toad_Atlas"];

    function MB(BB) {
      const OB = JB[BB];
      return OB ? GB(50902)(`./${OB}.png`) : null
    }
    const PB = 2411,
      zB = ["Sheep/SheepWool_Atlas", "Horse/HorseSaddle_Atlas", "Camel/CamelSaddle_Atlas", "Deer/DeerAntlers_Atlas", "Wolf/WolfCollar_Atlas", "Wildcat/WildcatCollar_Atlas", "Spirit Wolf/Spirit WolfCollar_Atlas", "Spirit Bear/Spirit BearSaddle_Atlas", "Spirit Stag/Spirit StagSaddle_Atlas", "Spirit Gorilla/Spirit GorillaSaddle_Atlas", "Bear/BearSaddle_Atlas", "Stag/StagSaddle_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Armour", "Gorilla/GorillaSaddle_Atlas"];

    function lB(BB) {
      const OB = zB[BB];
      return OB ? GB(50902)(`./${OB}.png`) : null
    }
    const pB = ["none", "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep", "creator_level1", "creator_level2", "creator_level3"];

    function qB(BB) {
      const OB = pB[BB];
      return OB ? GB(52670)(`./cape_${OB}.png`) : null
    }
    const ZB = ["Player_Atlas", "astro_set_1_attachable", "astro_set_2_attachable", "astro_set_3_attachable", "astro_set_4_attachable", "beaver_lumberjack", "bee_set_1_attachable", "bee_set_2_attachable", "bee_set_3_attachable_blue", "bee_set_3_attachable_green", "bee_set_3_attachable_red", "bee_set_4_attachable", "chef_attachables", "christmas_elf_attachable", "christmas_snowman_attachable", "dwarf_blue_hair", "dwarf_braided_hair", "dwarf_child", "dwarf_forked_beard", "dwarf_ginger_beard", "dwarf_grey_beard", "dwarf_hair_buns", "dwarf_purple_beard", "dwarf_red_hair", "dwarf_short_beard", "farmer_gill_attachable", "farmer_head", "fire_mage_attachable", "forge_mother", "furry_bear_attachables", "furry_kitsune_attachables", "furry_kitsune_tail_single", "furry_kitsune_tails", "furry_shark_attachables", "furry_shark_tail", "furry_wolfKnight_attachables", "furry_wolfKnight_tail", "general_attachable", "goblin_goggles", "goblin_mad_scientist", "highSociety_set_1_attachable", "highSociety_set_2_attachable", "highSociety_set_3_attachable", "highSociety_set_4_attachable", "human_archer", "human_desert_guard", "human_sentry", "ice_wings_attachable", "jackal_priest", "jetpack_attachable", "medieval_set_1_attachable_blue", "medieval_set_1_attachable_green", "medieval_set_1_attachable_purple", "medieval_set_1_attachable_red", "medieval_set_1_attachable_yellow", "medieval_set_2_attachable_blue", "medieval_set_2_attachable_purple", "medieval_set_2_attachable_red", "medieval_set_3_attachable_green", "medieval_set_3_attachable_pink", "medieval_set_3_attachable_purple", "medieval_set_3_attachable_red", "medieval_set_4_attachable_blue", "medieval_set_4_attachable_hair", "medieval_set_4_attachable_purple", "medieval_set_4_attachable_red", "mining_helmet_attachable", "minotaur", "minotaur_elder", "minotaur_warrior", "monster_hunter_lorenzo_attachable", "nova_jetpack_attachable", "npc_pig_head", "painter_spencer_attachable", "pet_reindeer", "pig_napoleon", "pig_worker_attachable", "piggy_banker_head", "portal_mage_hat", "rabbit_aristocrat_attachable", "skis_attachable", "smuglyn_attachable", "spring_set_1_attachable", "spring_set_2_attachable", "spring_set_3_attachable", "spring_set_4_attachable", "tentacle_boy", "tentacle_girl_attachable", "tentacle_guy_attachable", "tentacle_guy_fisherman_attachable", "trader_cowl_black", "trader_cowl_blue", "ugly_sweater_attachable", "wolf_in_suit_attachable", "wolf_security", "y2k_set_1_attachable", "y2k_set_2_attachable", "y2k_set_3_attachable", "y2k_set_4_attachable"];

    function NB(BB) {
      const OB = ZB[BB];
      return OB ? GB(52678)(`./${OB}.png`) : null
    }
    const RB = new Map([
        ["astro_set_1_attachable", 8353],
        ["astro_set_2_attachable", 8354],
        ["astro_set_3_attachable", 8355],
        ["astro_set_4_attachable", 8356],
        ["beaver_lumberjack", 8357],
        ["bee_set_1_attachable", 8358],
        ["bee_set_2_attachable", 8359],
        ["bee_set_3_attachable", 8360],
        ["bee_set_4_attachable", 8361],
        ["cape_cuboid_18_12", 8362],
        ["chef_attachables", 8363],
        ["christmas_elf_attachable", 8364],
        ["christmas_snowman_attachable", 8365],
        ["dwarf_blue_hair", 8366],
        ["dwarf_braided_hair", 8367],
        ["dwarf_child", 8368],
        ["dwarf_forked_beard", 8369],
        ["dwarf_ginger_beard", 8370],
        ["dwarf_grey_beard", 8371],
        ["dwarf_hair_buns", 8372],
        ["dwarf_purple_beard", 8373],
        ["dwarf_red_hair", 8374],
        ["dwarf_short_beard", 8375],
        ["farmer_gill_attachable", 8376],
        ["farmer_head", 8377],
        ["fire_mage_attachable", 8378],
        ["forge_mother", 8379],
        ["furry_bear_attachables", 8380],
        ["furry_kitsune_attachables", 8381],
        ["furry_kitsune_tail_single", 8382],
        ["furry_kitsune_tails", 8383],
        ["furry_shark_attachables", 8384],
        ["furry_shark_tail", 8385],
        ["furry_wolfKnight_attachables", 8386],
        ["furry_wolfKnight_tail", 8387],
        ["general_attachable", 8388],
        ["goblin_goggles", 8389],
        ["goblin_mad_scientist", 8390],
        ["highSociety_set_1_attachable", 8391],
        ["highSociety_set_2_attachable", 8392],
        ["highSociety_set_3_attachable", 8393],
        ["highSociety_set_4_attachable", 8394],
        ["human_archer", 8395],
        ["human_desert_guard", 8396],
        ["human_sentry", 8397],
        ["ice_wings_attachable", 8398],
        ["jackal_priest", 8399],
        ["jetpack_attachable", 8400],
        ["medieval_set_1_attachable", 8401],
        ["medieval_set_2_attachable", 8402],
        ["medieval_set_3_attachable", 8403],
        ["medieval_set_4_attachable", 8404],
        ["mining_helmet_attachable", 8405],
        ["minotaur", 8406],
        ["minotaur_elder", 8407],
        ["minotaur_warrior", 8408],
        ["monster_hunter_lorenzo_attachable", 8409],
        ["npc_pig_head", 8410],
        ["painter_spencer_attachable", 8411],
        ["pet_reindeer", 8412],
        ["pig_napoleon", 8413],
        ["pig_worker_attachable", 8414],
        ["piggy_banker_head", 8415],
        ["portal_mage_hat", 8416],
        ["rabbit_aristocrat_attachable", 8417],
        ["skis_attachable", 8418],
        ["smuglyn_attachable", 8419],
        ["spring_set_1_attachable", 8420],
        ["spring_set_2_attachable", 8421],
        ["spring_set_3_attachable", 8422],
        ["spring_set_4_attachable", 8423],
        ["tentacle_boy", 8424],
        ["tentacle_guy_attachable", 8425],
        ["tentacle_guy_fisherman_attachable", 8426],
        ["trader_cowl_black", 8427],
        ["trader_cowl_blue", 8428],
        ["ugly_sweater_attachable", 8429],
        ["wolf_in_suit_attachable", 8430],
        ["wolf_security", 8431],
        ["y2k_set_1_attachable", 8432],
        ["y2k_set_2_attachable", 8433],
        ["y2k_set_3_attachable", 8434],
        ["y2k_set_4_attachable", 8435]
      ]),
      WB = [{
        name: "allium",
        url: () => GB(52681)
      }, {
        name: "aspen_sapling",
        url: () => GB(52688)
      }, {
        name: "attached_banana_stem",
        url: () => GB(52693)
      }, {
        name: "attached_banana_stem_wrapper",
        url: () => GB(52698)
      }, {
        name: "attached_melon_stem",
        url: () => GB(52701)
      }, {
        name: "attached_melon_stem_wrapper",
        url: () => GB(52704)
      }, {
        name: "autumn_fern",
        url: () => GB(52713)
      }, {
        name: "azure_bluet",
        url: () => GB(52716)
      }, {
        name: "banana_stem",
        url: () => GB(52722)
      }, {
        name: "beetroot_plant_stage0",
        url: () => GB(52726)
      }, {
        name: "beetroot_plant_stage1",
        url: () => GB(52730)
      }, {
        name: "beetroot_plant_stage2",
        url: () => GB(52739)
      }, {
        name: "berry_bush_stage0",
        url: () => GB(52742)
      }, {
        name: "berry_bush_stage1",
        url: () => GB(52750)
      }, {
        name: "berry_bush_stage2",
        url: () => GB(52755)
      }, {
        name: "blue_orchid",
        url: () => GB(52764)
      }, {
        name: "blueberry_bush_stage0",
        url: () => GB(52771)
      }, {
        name: "blueberry_bush_stage1",
        url: () => GB(52773)
      }, {
        name: "blueberry_bush_stage2",
        url: () => GB(52777)
      }, {
        name: "brown_mushroom",
        url: () => GB(52786)
      }, {
        name: "carrot_plant_stage0",
        url: () => GB(52794)
      }, {
        name: "carrot_plant_stage1",
        url: () => GB(52799)
      }, {
        name: "carrot_plant_stage2",
        url: () => GB(52803)
      }, {
        name: "catnip",
        url: () => GB(52812)
      }, {
        name: "cauliflower_plant_stage0",
        url: () => GB(52815)
      }, {
        name: "cauliflower_plant_stage1",
        url: () => GB(52819)
      }, {
        name: "cauliflower_plant_stage2",
        url: () => GB(52826)
      }, {
        name: "cedar_sapling",
        url: () => GB(52833)
      }, {
        name: "cherry_sapling",
        url: () => GB(52842)
      }, {
        name: "cobweb",
        url: () => GB(52846)
      }, {
        name: "coffee_plant_stage0",
        url: () => GB(52855)
      }, {
        name: "coffee_plant_stage1",
        url: () => GB(52859)
      }, {
        name: "coffee_plant_stage2",
        url: () => GB(52861)
      }, {
        name: "corn_stage0",
        url: () => GB(52865)
      }, {
        name: "corn_stage1",
        url: () => GB(52872)
      }, {
        name: "corn_stage2",
        url: () => GB(52878)
      }, {
        name: "corn_stage3",
        url: () => GB(52880)
      }, {
        name: "corn_stage4",
        url: () => GB(52882)
      }, {
        name: "corn_stage5",
        url: () => GB(52888)
      }, {
        name: "cornflower",
        url: () => GB(52890)
      }, {
        name: "cotton_plant_stage0",
        url: () => GB(52896)
      }, {
        name: "cotton_plant_stage1",
        url: () => GB(52898)
      }, {
        name: "cotton_plant_stage2",
        url: () => GB(52905)
      }, {
        name: "cotton_plant_stage3",
        url: () => GB(52908)
      }, {
        name: "dandelion",
        url: () => GB(52916)
      }, {
        name: "dead_bush",
        url: () => GB(52924)
      }, {
        name: "fallen_pine_cone",
        url: () => GB(52927)
      }, {
        name: "jungle_sapling",
        url: () => GB(52936)
      }, {
        name: "jungle_tall_grass_bottom",
        url: () => GB(52942)
      }, {
        name: "jungle_tall_grass_top",
        url: () => GB(52944)
      }, {
        name: "lettuce_plant_stage0",
        url: () => GB(52949)
      }, {
        name: "lettuce_plant_stage1",
        url: () => GB(52958)
      }, {
        name: "lettuce_plant_stage2",
        url: () => GB(52966)
      }, {
        name: "lily_of_the_valley",
        url: () => GB(52968)
      }, {
        name: "mango_sapling",
        url: () => GB(52977)
      }, {
        name: "maple_sapling",
        url: () => GB(52986)
      }, {
        name: "melon_stem",
        url: () => GB(52994)
      }, {
        name: "net",
        url: () => GB(53001)
      }, {
        name: "orange_tulip",
        url: () => GB(53010)
      }, {
        name: "oxeye_daisy",
        url: () => GB(53015)
      }, {
        name: "palm_sapling",
        url: () => GB(53017)
      }, {
        name: "parsnip_plant_stage0",
        url: () => GB(53025)
      }, {
        name: "parsnip_plant_stage1",
        url: () => GB(53034)
      }, {
        name: "parsnip_plant_stage2",
        url: () => GB(53041)
      }, {
        name: "pear_sapling",
        url: () => GB(53043)
      }, {
        name: "pine_fern",
        url: () => GB(53049)
      }, {
        name: "pine_grass",
        url: () => GB(53054)
      }, {
        name: "pine_sapling",
        url: () => GB(53058)
      }, {
        name: "pink_tulip",
        url: () => GB(53066)
      }, {
        name: "plum_sapling",
        url: () => GB(53073)
      }, {
        name: "poppy",
        url: () => GB(53078)
      }, {
        name: "potato_plant_stage0",
        url: () => GB(53081)
      }, {
        name: "potato_plant_stage1",
        url: () => GB(53088)
      }, {
        name: "potato_plant_stage2",
        url: () => GB(53092)
      }, {
        name: "red_cabbage_stage0",
        url: () => GB(53100)
      }, {
        name: "red_cabbage_stage1",
        url: () => GB(53104)
      }, {
        name: "red_cabbage_stage2",
        url: () => GB(53109)
      }, {
        name: "red_mushroom",
        url: () => GB(53112)
      }, {
        name: "red_tulip",
        url: () => GB(53114)
      }, {
        name: "rice_stage0",
        url: () => GB(53120)
      }, {
        name: "rice_stage2",
        url: () => GB(53128)
      }, {
        name: "rice_stage3",
        url: () => GB(53135)
      }, {
        name: "rice_stage4",
        url: () => GB(53144)
      }, {
        name: "rice_stage5",
        url: () => GB(53148)
      }, {
        name: "rice_stage6",
        url: () => GB(53153)
      }, {
        name: "rice_stage7",
        url: () => GB(53157)
      }, {
        name: "shadow_rose",
        url: () => GB(53159)
      }, {
        name: "small_cactus",
        url: () => GB(53168)
      }, {
        name: "spectral_grass",
        url: () => GB(53177)
      }, {
        name: "spectral_sapling",
        url: () => GB(53186)
      }, {
        name: "strawberry_bush_stage0",
        url: () => GB(53195)
      }, {
        name: "strawberry_bush_stage1",
        url: () => GB(53204)
      }, {
        name: "strawberry_bush_stage2",
        url: () => GB(53208)
      }, {
        name: "sugar_cane_plant_stage0",
        url: () => GB(53217)
      }, {
        name: "sugar_cane_plant_stage1",
        url: () => GB(53222)
      }, {
        name: "sugar_cane_plant_stage2",
        url: () => GB(53229)
      }, {
        name: "sugar_cane_plant_stage2_top",
        url: () => GB(53237)
      }, {
        name: "tall_grass_bottom",
        url: () => GB(53246)
      }, {
        name: "tall_grass_top",
        url: () => GB(53253)
      }, {
        name: "tallgrass",
        url: () => GB(53260)
      }, {
        name: "tomato_plant_stage0",
        url: () => GB(53266)
      }, {
        name: "tomato_plant_stage1",
        url: () => GB(53268)
      }, {
        name: "tomato_plant_stage2",
        url: () => GB(53273)
      }, {
        name: "tomato_plant_stage2_top",
        url: () => GB(53275)
      }, {
        name: "wheat_stage0",
        url: () => GB(53277)
      }, {
        name: "wheat_stage2",
        url: () => GB(53280)
      }, {
        name: "wheat_stage3",
        url: () => GB(53284)
      }, {
        name: "wheat_stage4",
        url: () => GB(53286)
      }, {
        name: "wheat_stage5",
        url: () => GB(53292)
      }, {
        name: "wheat_stage6",
        url: () => GB(53298)
      }, {
        name: "wheat_stage7",
        url: () => GB(53303)
      }, {
        name: "white_tulip",
        url: () => GB(53305)
      }, {
        name: "coolant_mixer_top",
        url: () => GB(53308)
      }, {
        name: "smelter_top",
        url: () => GB(53312)
      }, {
        name: "yellow_glazed_terracotta",
        url: () => GB(53315)
      }, {
        name: "shop_wizard_spawn_top",
        url: () => GB(53321)
      }, {
        name: "light_blue_spawn_block_top",
        url: () => GB(53324)
      }, {
        name: "torch_blue_block",
        url: () => GB(53328)
      }, {
        name: "destroy_stage_5",
        url: () => GB(53330)
      }, {
        name: "destroy_stage_4",
        url: () => GB(53333)
      }, {
        name: "auto_bench_top",
        url: () => GB(53339)
      }, {
        name: "destroy_stage_7",
        url: () => GB(53348)
      }, {
        name: "destroy_stage_6",
        url: () => GB(53350)
      }, {
        name: "shop_trader_spawn_top",
        url: () => GB(53352)
      }, {
        name: "cobblestone_mossy",
        url: () => GB(53354)
      }, {
        name: "checkpoint_block",
        url: () => GB(53360)
      }, {
        name: "destroy_stage_1",
        url: () => GB(53365)
      }, {
        name: "destroy_stage_0",
        url: () => GB(53374)
      }, {
        name: "destroy_stage_3",
        url: () => GB(53380)
      }, {
        name: "destroy_stage_2",
        url: () => GB(53386)
      }, {
        name: "centrifuge_top",
        url: () => GB(53393)
      }, {
        name: "destroy_stage_9",
        url: () => GB(53396)
      }, {
        name: "destroy_stage_8",
        url: () => GB(53398)
      }, {
        name: "mango_door_bottom",
        url: () => GB(53403)
      }, {
        name: "moonstone_chest_top",
        url: () => GB(53405)
      }, {
        name: "lime_glazed_terracotta",
        url: () => GB(53408)
      }, {
        name: "burner_drill_top",
        url: () => GB(53416)
      }, {
        name: "light_gray_spawn_block_top",
        url: () => GB(53424)
      }, {
        name: "football_block",
        url: () => GB(53432)
      }, {
        name: "purple_spawn_block_top",
        url: () => GB(53438)
      }, {
        name: "black_stained_glass",
        url: () => GB(53441)
      }, {
        name: "pear_door_bottom",
        url: () => GB(53447)
      }, {
        name: "custom_lobby_block_top",
        url: () => GB(53451)
      }, {
        name: "maple_door_bottom",
        url: () => GB(53456)
      }, {
        name: "crusher_top",
        url: () => GB(53459)
      }, {
        name: "torch_orange_block",
        url: () => GB(53466)
      }, {
        name: "wireless_terminal_top",
        url: () => GB(53469)
      }, {
        name: "recycler_top",
        url: () => GB(53477)
      }, {
        name: "condenser_top",
        url: () => GB(53484)
      }, {
        name: "light_blue_glazed_terracotta",
        url: () => GB(53486)
      }, {
        name: "electric_drill_top",
        url: () => GB(53491)
      }, {
        name: "brown_glazed_terracotta",
        url: () => GB(53497)
      }, {
        name: "green_glazed_terracotta",
        url: () => GB(53501)
      }, {
        name: "cactus_side",
        url: () => GB(53507)
      }, {
        name: "water",
        url: () => GB(53512)
      }, {
        name: "gray_glazed_terracotta",
        url: () => GB(53518)
      }, {
        name: "jungle_door_bottom",
        url: () => GB(53522)
      }, {
        name: "plum_door_top",
        url: () => GB(53527)
      }, {
        name: "red_glazed_terracotta",
        url: () => GB(53531)
      }, {
        name: "orange_spawn_block_top",
        url: () => GB(53537)
      }, {
        name: "belt_tunnel_top",
        url: () => GB(53541)
      }, {
        name: "palm_door_bottom",
        url: () => GB(53546)
      }, {
        name: "maple_door_top",
        url: () => GB(53548)
      }, {
        name: "iron_chest_bottom",
        url: () => GB(53551)
      }, {
        name: "wool_colored_silver",
        url: () => GB(53560)
      }, {
        name: "moonstone_chest_bottom",
        url: () => GB(53569)
      }, {
        name: "sky_tap_top",
        url: () => GB(53571)
      }, {
        name: "palm_door_top",
        url: () => GB(53573)
      }, {
        name: "torch_red_block",
        url: () => GB(53582)
      }, {
        name: "rice_stage1",
        url: () => GB(53590)
      }, {
        name: "shatter_mill_top",
        url: () => GB(53594)
      }, {
        name: "white_spawn_block_top",
        url: () => GB(53596)
      }, {
        name: "pink_spawn_block_top",
        url: () => GB(53605)
      }, {
        name: "orange_glazed_terracotta",
        url: () => GB(53607)
      }, {
        name: "lime_spawn_block_top",
        url: () => GB(53614)
      }, {
        name: "jungle_door_top",
        url: () => GB(53617)
      }, {
        name: "wheat_stage1",
        url: () => GB(53625)
      }, {
        name: "alloy_kiln_top",
        url: () => GB(53629)
      }, {
        name: "light_gray_stained_glass",
        url: () => GB(53633)
      }, {
        name: "cherry_door_bottom",
        url: () => GB(53639)
      }, {
        name: "gray_spawn_block_top",
        url: () => GB(53642)
      }, {
        name: "brown_spawn_block_top",
        url: () => GB(53649)
      }, {
        name: "mango_door_top",
        url: () => GB(53656)
      }, {
        name: "pine_door_top",
        url: () => GB(53660)
      }, {
        name: "cherry_door_top",
        url: () => GB(53669)
      }, {
        name: "pine_door_bottom",
        url: () => GB(53674)
      }, {
        name: "press_top",
        url: () => GB(53677)
      }, {
        name: "pink_glazed_terracotta",
        url: () => GB(53684)
      }, {
        name: "purple_glazed_terracotta",
        url: () => GB(53686)
      }, {
        name: "crop_harvester_top",
        url: () => GB(53691)
      }, {
        name: "collider_top",
        url: () => GB(53699)
      }, {
        name: "aspen_door_top",
        url: () => GB(53703)
      }, {
        name: "banana_block_bottom",
        url: () => GB(53705)
      }, {
        name: "crystal_vat_top",
        url: () => GB(53708)
      }, {
        name: "iron_chest_top",
        url: () => GB(53711)
      }, {
        name: "chest_top",
        url: () => GB(53713)
      }, {
        name: "wire_mill_top",
        url: () => GB(53717)
      }, {
        name: "tree_cutter_top",
        url: () => GB(53722)
      }, {
        name: "cedar_door_top",
        url: () => GB(53725)
      }, {
        name: "black_spawn_block_top",
        url: () => GB(53729)
      }, {
        name: "camel_painting_art",
        url: () => GB(53736)
      }, {
        name: "pear_door_top",
        url: () => GB(53738)
      }, {
        name: "blue_spawn_block_top",
        url: () => GB(53740)
      }, {
        name: "magenta_glazed_terracotta",
        url: () => GB(53747)
      }, {
        name: "radar_screen0",
        url: () => GB(53753)
      }, {
        name: "radar_screen1",
        url: () => GB(53756)
      }, {
        name: "radar_screen2",
        url: () => GB(53764)
      }, {
        name: "radar_screen3",
        url: () => GB(53770)
      }, {
        name: "light_gray_glazed_terracotta",
        url: () => GB(53774)
      }, {
        name: "yellow_spawn_block_top",
        url: () => GB(53777)
      }, {
        name: "belt_tunnel_exit_top",
        url: () => GB(53782)
      }, {
        name: "green_spawn_block_top",
        url: () => GB(53784)
      }, {
        name: "aspen_door_bottom",
        url: () => GB(53793)
      }, {
        name: "spectral_door_bottom",
        url: () => GB(53795)
      }, {
        name: "magenta_spawn_block_top",
        url: () => GB(53801)
      }, {
        name: "plum_door_bottom",
        url: () => GB(53809)
      }, {
        name: "camel_painting_art_option2",
        url: () => GB(53814)
      }, {
        name: "deep_drill_top",
        url: () => GB(53821)
      }, {
        name: "spectral_door_top",
        url: () => GB(53830)
      }, {
        name: "cyan_spawn_block_top",
        url: () => GB(53832)
      }, {
        name: "plant_cacti_by_arthur",
        url: () => GB(53838)
      }, {
        name: "torch_block",
        url: () => GB(53847)
      }, {
        name: "board_full",
        url: () => GB(53850)
      }, {
        name: "sea_lantern",
        url: () => GB(53852)
      }, {
        name: "black_glazed_terracotta",
        url: () => GB(53854)
      }, {
        name: "white_glazed_terracotta",
        url: () => GB(53861)
      }, {
        name: "torch_cyan_block",
        url: () => GB(53866)
      }, {
        name: "blue_glazed_terracotta",
        url: () => GB(53873)
      }, {
        name: "synthesizer_top",
        url: () => GB(53876)
      }, {
        name: "torch_green_block",
        url: () => GB(53885)
      }, {
        name: "lily_pad",
        url: () => GB(53889)
      }, {
        name: "cyan_glazed_terracotta",
        url: () => GB(53893)
      }, {
        name: "torch_purple_block",
        url: () => GB(53899)
      }, {
        name: "mob_farm_top",
        url: () => GB(53903)
      }, {
        name: "red_spawn_block_top",
        url: () => GB(53906)
      }, {
        name: "cedar_door_bottom",
        url: () => GB(53911)
      }, {
        name: null,
        url: () => GB(53915)
      }];

    function AB(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = WB[BB]) || void 0 === GB ? void 0 : GB.url()) && void 0 !== OB ? OB : null
    }

    function VB(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = WB[BB]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : null
    }
    const SB = ["arrow", "bubble", "critical_hit", "drift", "effect_5", "fishingFishSilhouette", "generic_2", "glint", "heart", "scary_face", "snowflake", "soul_0", "square_particle", "z-particle"];

    function nB(BB) {
      const OB = SB[BB];
      return OB ? GB(53924)(`./${OB}.png`) : null
    }
  },
  50904: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/67_Atlas.78772019d3c23af4fde0.png"
  },
  50094: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/67_Model.20ac6746b6d4e9cdc5ac.glb"
  },
  50100: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/67_Reconstructed.aa1c6cd0195ad55052d4.glb"
  },
  50910: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_67_default.78772019d3c23af4fde0.png"
  },
  50915: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Armour Collector_Atlas.68016f01aaaf41a99294.png"
  },
  50103: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Armour Collector_Model.4e44fc9a2bfa0d1fa9ae.glb"
  },
  50108: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Armour Collector_Reconstructed.68bd2827e682b9ef1c5c.glb"
  },
  50924: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_armour collector_default.68016f01aaaf41a99294.png"
  },
  50932: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/BearSaddle_Atlas.15264b4186b61b368f48.png"
  },
  50941: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bear_Atlas.16ed4e893fa8557fb3c8.png"
  },
  50113: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bear_Model.9d563e0d9870f3bee11e.glb"
  },
  50950: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_bear_default.16ed4e893fa8557fb3c8.png"
  },
  50959: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bobino Musculino_Atlas.41bc4861928518f5e973.png"
  },
  50121: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bobino Musculino_Model.d80ca8def7ee3e59c8c4.glb"
  },
  50123: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bobino Musculino_Reconstructed.e5775589151b43e015a3.glb"
  },
  50966: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_bobino musculino_default.41bc4861928518f5e973.png"
  },
  50971: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/CamelSaddle_Atlas.04251d42e0e6b08cd54b.png"
  },
  50975: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Camel_Armour.84f02f272f4930d10edf.png"
  },
  50983: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Camel_Atlas.4c87e02cadf2be1f7039.png"
  },
  50127: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Camel_Model.bc44d3ea4bbddbd34ff8.glb"
  },
  50990: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_camel_default.3b9bf815a1e7e67b9c5b.png"
  },
  50998: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_camel_brown.4fb5c5b6c32bdc8441f7.png"
  },
  51003: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Capitano Explovissimo_Atlas.238f070a1cb621f89233.png"
  },
  50136: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Capitano Explovissimo_Model.987934107c32050a0f8f.glb"
  },
  50145: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Capitano Explovissimo_Reconstructed.34c7194ad537f91fb770.glb"
  },
  51011: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_capitano explovissimo_default.238f070a1cb621f89233.png"
  },
  51013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cave Golem_Atlas.43057255fbcd8cf0e376.png"
  },
  50148: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cave Golem_Model.fcb854951ae2d8348159.glb"
  },
  51022: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_cave golem_default.fe29c2466a335ce428b7.png"
  },
  51029: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_cave golem_iron.f15813c3f4b357c1c3ad.png"
  },
  51037: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_cave golem_corrupted.45ddac891a25ba285060.png"
  },
  51042: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cow_Atlas.646efb734e50a01d474a.png"
  },
  50155: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cow_Model.a114439e2ddef7ddc8e6.glb"
  },
  51046: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_cow_default.e8db5e9466d81322284b.png"
  },
  51055: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_cow_cream.15ffb0b24f4058ffe0d8.png"
  },
  51062: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Crone_Atlas.2c1819debbc39c551df9.png"
  },
  50158: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Crone_Model.07672f43fa6684aacf0d.glb"
  },
  51067: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_crone_default.629dfdec640e437c8c58.png"
  },
  51074: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/DeerAntlers_Atlas.317f1c4b7f16d8af24eb.png"
  },
  51078: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Deer_Atlas.8c8d020eac0964ca3613.png"
  },
  50160: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Deer_Model.4c98ba2161f6516f336d.glb"
  },
  51080: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_deer_default.8c8d020eac0964ca3613.png"
  },
  51089: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Desert Fennec_Atlas.5cc3a10a2d205413b221.png"
  },
  50163: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Desert Fennec_Model.b6af0de0386cdadd4aaa.glb"
  },
  51097: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_desert fennec_default.5cc3a10a2d205413b221.png"
  },
  51103: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Goofy Golem_Atlas.9f539ed92e7a18179ccc.png"
  },
  51106: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_diamond goofy golem_default.ad6acdd2ec3df5dc3c58.png"
  },
  51113: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_diamond goofy golem_flaking.bf96dafe607ba2c1989f.png"
  },
  51119: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_diamond goofy golem_patchy.990dd71826e102069a65.png"
  },
  51121: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_diamond goofy golem_shedding.494b42755accc9f4d3c8.png"
  },
  51129: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_diamond goofy golem_bare.03408815673f9c107ca9.png"
  },
  51133: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_diamond goofy golem_stone.83de462a7be9aae11337.png"
  },
  51142: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Guardian_Atlas.cb75d23bfd8385a5fb1b.png"
  },
  50171: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  50174: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  51145: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_diamond guardian_default.cb75d23bfd8385a5fb1b.png"
  },
  51154: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Huntress_Atlas.19e9ae6b50525bbf7989.png"
  },
  51162: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr huntress_default.42d87f08d4f4e8c2e48c.png"
  },
  51170: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_draugr huntress_chainmail.f16e63013ccf629b7eac.png"
  },
  51175: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Knight_Atlas.53367bcdaf4237c2c5eb.png"
  },
  50176: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Knight_Model.9eca91f878818eb243b7.glb"
  },
  51181: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr knight_default.53367bcdaf4237c2c5eb.png"
  },
  51189: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Reaver_Atlas.d059dc5ea7e11b0d6226.png"
  },
  50180: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Reaver_Model.b238f5542ebc8a6f790d.glb"
  },
  51194: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr reaver_default.d059dc5ea7e11b0d6226.png"
  },
  51203: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Skeleton_Atlas.ad55be7f308296fa0710.png"
  },
  50188: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Skeleton_Model.ea29dd4b4906e922dbc5.glb"
  },
  51208: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr skeleton_default.ad55be7f308296fa0710.png"
  },
  51210: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Warper_Atlas.2f0f8036bfafcda6ac8c.png"
  },
  50195: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Warper_Model.957031cd0be6a379a31e.glb"
  },
  51214: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr warper_default.2f0f8036bfafcda6ac8c.png"
  },
  51221: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Zombie_Atlas.d26d8b763d5430e29e22.png"
  },
  50202: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Zombie_Model.f3182b807f523b9f5cfc.glb"
  },
  51224: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_draugr zombie_default.a81024e6c9b71d39dc2b.png"
  },
  51233: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/10_draugr zombie_corrupted2.705d686f424354e6f53e.png"
  },
  51238: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_draugr zombie_longHairChestplate.7d99ad0435907496ded0.png"
  },
  51245: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_draugr zombie_longHairClothed.3e4331b33e866be77414.png"
  },
  51254: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_draugr zombie_shortHairClothed.608a2b0d8c412badf03f.png"
  },
  51261: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_draugr zombie_flower.0943cbd0f6aeb07fb7c4.png"
  },
  51268: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_draugr zombie_flower2.1905b274fd6714a68073.png"
  },
  51274: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/6_draugr zombie_mushroom.2e6fd854bb40cbb60921.png"
  },
  51276: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/7_draugr zombie_vine.097f85f6ef3e92e8c2d2.png"
  },
  51278: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/8_draugr zombie_vine2.2a870c768fb2eaf1d64b.png"
  },
  51284: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/9_draugr zombie_corrupted.0c3ba982e223bfd2a399.png"
  },
  51290: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Evil Tome_Atlas.ebb1d7344941d169e61f.png"
  },
  50208: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Evil Tome_Model.dac8f598cd75429bd88f.glb"
  },
  51295: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_evil tome_default.ebb1d7344941d169e61f.png"
  },
  51297: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frost Golem_Atlas.f219ae0b8effd2d3288c.png"
  },
  51301: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_frost golem_default.f219ae0b8effd2d3288c.png"
  },
  51304: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frost Skeleton_Atlas.fdab98e8d8fa9e1606a7.png"
  },
  51309: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_frost skeleton_default.fdab98e8d8fa9e1606a7.png"
  },
  51318: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frost Wraith_Atlas.9b40421e56202862e000.png"
  },
  50216: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frost Wraith_Model.6a1df7eca8f7944cfa85.glb"
  },
  51327: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_frost wraith_default.1c2c4171f3ff80b1c59c.png"
  },
  51332: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_frost wraith_tattered.0f7d7bed74631a89045d.png"
  },
  51339: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_frost wraith_frostKing.42a658129c295fa5ba8a.png"
  },
  51341: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_frost wraith_accursed.5efdb1d1f3bc60504721.png"
  },
  51347: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frost Zombie_Atlas.856fb434ac2c8cfac7ad.png"
  },
  51355: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_frost zombie_default.066e31eee2646fd422ce.png"
  },
  51357: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_frost zombie_longHairChestplate.520e0eb2c0a936e2a8e1.png"
  },
  51363: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_frost zombie_shortHairClothed.59528239298a4262f7f4.png"
  },
  51367: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Furnace Knight_Atlas.2659e8e76ccf1355bbe5.png"
  },
  50220: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Furnace Knight_Model.a82b173e727cd9bbf9d3.glb"
  },
  50227: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Furnace Knight_Reconstructed.73693171d4617dfc8e41.glb"
  },
  51371: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_furnace knight_default.2659e8e76ccf1355bbe5.png"
  },
  51379: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Bro_Atlas.fc3f69fac528331ca24e.png"
  },
  50235: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Bro_Model.c70809eb925034975d92.glb"
  },
  50244: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Bro_Reconstructed.ee280e4747c632e2a510.glb"
  },
  51384: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_glass bro_default.fc3f69fac528331ca24e.png"
  },
  51393: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Gremlin_Atlas.e22dbc21c33ea76e178c.png"
  },
  50252: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Gremlin_Model.880227f604677d4abba9.glb"
  },
  50259: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glass Gremlin_Reconstructed.4371333950829717aded.glb"
  },
  51396: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_glass gremlin_default.e22dbc21c33ea76e178c.png"
  },
  51401: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Goofy Golem_Atlas.15f38107836cebc75f69.png"
  },
  51406: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_gold goofy golem_default.4dabfa0399071406e2a2.png"
  },
  51412: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_gold goofy golem_flaking.eee4a22f79e9daa46d2a.png"
  },
  51415: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_gold goofy golem_patchy.746312a9826e176eb60e.png"
  },
  51422: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_gold goofy golem_shedding.648f3630984058f9c50e.png"
  },
  51426: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_gold goofy golem_bare.70636c8a87acccd75213.png"
  },
  51428: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_gold goofy golem_stone.5c03eb9f31dbbcd01b9b.png"
  },
  51436: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Guardian_Atlas.838ff51de0dd81a5f1ef.png"
  },
  50265: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Guardian_Model.890ecfcf2fc8d402086c.glb"
  },
  50267: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Guardian_Reconstructed.5bb360f7978bb121bb05.glb"
  },
  51439: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_gold guardian_default.838ff51de0dd81a5f1ef.png"
  },
  51445: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Watermelon Stag_Armour.972be4eb24f55108c5e8.png"
  },
  51452: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Watermelon Stag_Atlas.d97b04a85f87e7e507a4.png"
  },
  51461: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_gold watermelon stag_default.d97b04a85f87e7e507a4.png"
  },
  51470: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/GorillaSaddle_Atlas.b80dc520cd3f21340853.png"
  },
  51477: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gorilla_Atlas.8180581c438425b957c7.png"
  },
  50270: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gorilla_Model.da3aa249b0fcc54c7659.glb"
  },
  51481: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_gorilla_default.8180581c438425b957c7.png"
  },
  51488: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/HorseSaddle_Atlas.28811fb81cc9c552df26.png"
  },
  51491: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Horse_Atlas.35d93b681a8f7834e697.png"
  },
  50272: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Horse_Model.800a7268d235df849b7e.glb"
  },
  51493: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_horse_default.da58b615663faac34f1d.png"
  },
  51497: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_horse_black.4dbfd341ba74e805cd0e.png"
  },
  51499: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_horse_brown.ad46016bb913f83d93b3.png"
  },
  51505: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_horse_cream.d324148443d0eabfaf65.png"
  },
  51513: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Golem_Atlas.f15813c3f4b357c1c3ad.png"
  },
  51519: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_iron golem_default.f15813c3f4b357c1c3ad.png"
  },
  51524: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Goofy Golem_Atlas.1a48754dc0b64a8b7b05.png"
  },
  50276: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Goofy Golem_Model.9bb7fcaceb73b4a3b23d.glb"
  },
  51533: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_iron goofy golem_default.0c95620234f27798cfe9.png"
  },
  51541: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_iron goofy golem_flaking.73f858cdb6d36fa13320.png"
  },
  51544: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_iron goofy golem_patchy.f0d3039d44a0b2b2f59e.png"
  },
  51551: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_iron goofy golem_shedding.25ee174e06680e7280d1.png"
  },
  51554: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_iron goofy golem_bare.44ae0955ff00562ecdf6.png"
  },
  51556: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_iron goofy golem_stone.25c52e79c4d759bf9f8c.png"
  },
  51559: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Guardian_Atlas.d6a6fbc0fa3210a990c1.png"
  },
  50282: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  50286: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  51563: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_iron guardian_default.d6a6fbc0fa3210a990c1.png"
  },
  51568: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lil Knight_Atlas.cc0d9a1740f90db8827b.png"
  },
  50294: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lil Knight_Model.ed4a69ab8ec5e3c1111a.glb"
  },
  50300: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lil Knight_Reconstructed.f2857d2d6008814e75ef.glb"
  },
  51570: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_lil knight_default.cc0d9a1740f90db8827b.png"
  },
  51574: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lord Vulcan_Atlas.7cce3638220330c1d017.png"
  },
  50306: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lord Vulcan_Model.df0082926bbac281e4aa.glb"
  },
  50312: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lord Vulcan_Reconstructed.277b77204fcb3af7d078.glb"
  },
  51583: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_lord vulcan_default.7cce3638220330c1d017.png"
  },
  51590: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magma Golem_Atlas.c048f8347bba1eff276d.png"
  },
  51597: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_magma golem_default.c048f8347bba1eff276d.png"
  },
  51604: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magma Toad_Atlas.a8b9db6b01f4542e1467.png"
  },
  50318: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magma Toad_Model.26aea2fe0368bdbd9799.glb"
  },
  51606: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_magma toad_default.a8b9db6b01f4542e1467.png"
  },
  51615: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Moonstone Goofy Golem_Atlas.4caa2a72116784d73adb.png"
  },
  51621: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_moonstone goofy golem_default.b58fbd04c36c1bfc9720.png"
  },
  51629: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_moonstone goofy golem_flaking.e3cb7373d477e5b8aaa6.png"
  },
  51638: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_moonstone goofy golem_patchy.be6e50c29d06462f66cd.png"
  },
  51641: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_moonstone goofy golem_shedding.8ac0d58b2f3f0c7eca1b.png"
  },
  51644: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_moonstone goofy golem_bare.7b70a71811495f107613.png"
  },
  51653: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_moonstone goofy golem_stone.fb472f3c494b13ee5178.png"
  },
  51658: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Moonstone Guardian_Atlas.5fe5c9f714e9d9b65847.png"
  },
  50320: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Moonstone Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  50323: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Moonstone Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  51667: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_moonstone guardian_default.5fe5c9f714e9d9b65847.png"
  },
  51674: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mummy_Atlas.45b5369d53fdb99bed26.png"
  },
  50329: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mummy_Model.729c1fe6a9048e506b28.glb"
  },
  50332: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mummy_Reconstructed.b748762209f6006c725f.glb"
  },
  51679: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_mummy_default.45b5369d53fdb99bed26.png"
  },
  51683: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pig_Atlas.74d3b179a1bc6a57f8bc.png"
  },
  50338: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pig_Model.03480eac04a4a2032b5c.glb"
  },
  51688: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_pig_default.bc1d32464daad4bbd8c6.png"
  },
  51691: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Player_Atlas.8ad7b6884aa2def9b786.png"
  },
  50346: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Player_Model.48f382200795c9a6c7ef.glb"
  },
  50354: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Player_Reconstructed.e6c661d420c9b3c44d7e.glb"
  },
  50360: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_1_attachable.6f86173a091619cab00e.glb"
  },
  51698: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_1_attachable.c29f3253de97a5d410e6.png"
  },
  50366: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_2_attachable.6cd96ef6cb358ed4360d.glb"
  },
  51701: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_2_attachable.33f79a0dadad296b3a8d.png"
  },
  50373: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_3_attachable.c59f7da57297cc7766bd.glb"
  },
  51707: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_3_attachable.e971da0681c2efb5a036.png"
  },
  50376: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_4_attachable.83c8c77fac4d4e4d3388.glb"
  },
  51714: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/astro_set_4_attachable.faaa391af980dff2f0c1.png"
  },
  50379: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beaver_lumberjack.63d398cb151a061dc9df.glb"
  },
  51722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beaver_lumberjack.0b50b931c29405d9f653.png"
  },
  50381: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_1_attachable.ac8efdef77fa3c047eb0.glb"
  },
  51730: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_1_attachable.42914edf1e5e83bf4830.png"
  },
  50388: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_2_attachable.c76c4b207962ca5d8469.glb"
  },
  51735: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_2_attachable.8d0a8c8e021cd1819d10.png"
  },
  50397: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_3_attachable.eb65278792d09fd22529.glb"
  },
  51743: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_3_attachable_blue.b57902234fc8bace8bdf.png"
  },
  51745: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_3_attachable_green.01fc83380655c9a144f0.png"
  },
  51751: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_3_attachable_red.b3479efa71463dc4ea9e.png"
  },
  50400: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_4_attachable.1e17a2c7d2fa080ae23d.glb"
  },
  51753: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bee_set_4_attachable.1964af9414b984f51d0c.png"
  },
  51762: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_cow_cream.93a3a63c37c297f2bc91.png"
  },
  51768: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_cow_normal.25284b2ee8a034f2207f.png"
  },
  51777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_creator_level1.4f2f4d6e566890226158.png"
  },
  51779: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_creator_level2.d2f2f0fe19ce7129d8f2.png"
  },
  51787: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_creator_level3.b45b0cbe3153579501ee.png"
  },
  51794: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_none.1feb6c810316e0bbf6f7.png"
  },
  51801: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_pig.fa3ba0599d1283fabcf5.png"
  },
  51809: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_sheep.ab31bf50b51b156fa9b9.png"
  },
  51813: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_super.5e15d30dd75205e380c5.png"
  },
  51822: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_super_inverted.1e048a212b55b4714c30.png"
  },
  51825: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_youtuber.38ac1d5daab9704990be.png"
  },
  50406: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cape_cuboid_18_12.a21468079980c1c366dc.glb"
  },
  50411: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chef_attachables.b8355e8da34089d9a4ee.glb"
  },
  51827: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chef_attachables.e3933ee0a7facb63f8fc.png"
  },
  50417: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/christmas_elf_attachable.9c26a77ac152e80bbd88.glb"
  },
  51834: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/christmas_elf_attachable.124a5894014f4719749c.png"
  },
  50426: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/christmas_snowman_attachable.a072c3ea6b3e67db1691.glb"
  },
  51839: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/christmas_snowman_attachable.8255e7ae22dec706ef9f.png"
  },
  50435: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_blue_hair.fd9f446dd191be8421a1.glb"
  },
  51842: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_blue_hair.ac564bea50bbc19fbebc.png"
  },
  50444: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_braided_hair.5a099561e41c020156e6.glb"
  },
  51848: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_braided_hair.0cdf6e99e7d313900600.png"
  },
  50447: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_child.6a2eabe0e42a60b60f5d.glb"
  },
  51856: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_child.dd7bd7d791417c7cd76c.png"
  },
  50449: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_forked_beard.8b1921850ee39af61714.glb"
  },
  51860: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_forked_beard.e97aa85a569956654b66.png"
  },
  50458: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_ginger_beard.5281703e8404e83277a1.glb"
  },
  51865: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_ginger_beard.b381303da9453a64b9de.png"
  },
  50461: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_grey_beard.9a405ffacf45697cd862.glb"
  },
  51870: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_grey_beard.d478545c0ac1733f45ac.png"
  },
  50465: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_hair_buns.0689c8a36757fb228d12.glb"
  },
  51878: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_hair_buns.99cf87cba931cf1c82e1.png"
  },
  50472: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_purple_beard.3706e283af7db90ec6dd.glb"
  },
  51880: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_purple_beard.793d3f821147dab24317.png"
  },
  50476: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_red_hair.a600a969ac7275b21114.glb"
  },
  51882: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_red_hair.d0ba03ae7bdf8067f0ed.png"
  },
  50478: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_short_beard.46c3074282aeda011332.glb"
  },
  51891: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dwarf_short_beard.d488c7bf3b0d3640e5a5.png"
  },
  50487: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/farmer_gill_attachable.6f8f6fee935f2f1397c6.glb"
  },
  51893: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/farmer_gill_attachable.4d1c24944e6418389add.png"
  },
  50494: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/farmer_head.75ea18bc1214e93645c3.glb"
  },
  51899: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/farmer_head.6cc73aa5e23195da2780.png"
  },
  50497: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fire_mage_attachable.c5706ee8194a4de2efdf.glb"
  },
  51901: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fire_mage_attachable.c00bd47444c227739ada.png"
  },
  50502: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/forge_mother.7e1cc3526d433035776b.glb"
  },
  51904: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/forge_mother.842e0c3edd3f5f257414.png"
  },
  50504: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_bear_attachables.b35cb8b001f505ea829f.glb"
  },
  51909: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_bear_attachables.3ca7884565064815c2bb.png"
  },
  50510: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_attachables.cdd0c6aca354fad9eecf.glb"
  },
  51916: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_attachables.eba8ecfd7043542e1744.png"
  },
  50512: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_tail_single.85d3306a434950bb006b.glb"
  },
  51919: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_tail_single.0b693238b2692cc310bd.png"
  },
  50517: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_tails.14aeed9d125a590c1a25.glb"
  },
  51927: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_kitsune_tails.0b693238b2692cc310bd.png"
  },
  50521: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_shark_attachables.844bd68dea79c24c6e40.glb"
  },
  51931: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_shark_attachables.38a034c7b2272f567be5.png"
  },
  50529: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_shark_tail.d372f49e043f6af45054.glb"
  },
  51938: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_shark_tail.8043a8453f2f335b9e4b.png"
  },
  50536: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_wolfKnight_attachables.531d5431d656ba75852c.glb"
  },
  51944: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_wolfKnight_attachables.d7a6bfdf2305382b68e0.png"
  },
  50538: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_wolfKnight_tail.dea2e82825caa00b4612.glb"
  },
  51946: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/furry_wolfKnight_tail.c5f386355cfc18a16ec6.png"
  },
  50547: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/general_attachable.b185778b184ac5479a66.glb"
  },
  51948: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/general_attachable.76d5533363f2f0d2d1fe.png"
  },
  50551: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/goblin_goggles.d9336ff2e39a9a10e8a5.glb"
  },
  51953: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/goblin_goggles.d3b588fdb35828bf3c36.png"
  },
  50560: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/goblin_mad_scientist.818218843d6c7d315844.glb"
  },
  51956: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/goblin_mad_scientist.db8bc56b97c1030308b5.png"
  },
  50566: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_1_attachable.3acfb1686e7c942c54fd.glb"
  },
  51961: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_1_attachable.dfa0d411fd84a3a30db8.png"
  },
  50575: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_2_attachable.6767cbe7d5eed22b16ef.glb"
  },
  51967: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_2_attachable.fba9f96171a9c6ca479e.png"
  },
  50584: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_3_attachable.10d2d22860495aee5a9e.glb"
  },
  51969: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_3_attachable.e33e3ed55f37517a00cd.png"
  },
  50589: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_4_attachable.3d022dfffb0533e89e9b.glb"
  },
  51974: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/highSociety_set_4_attachable.8e013771e0294e6b36ba.png"
  },
  50594: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_archer.4b0c4ab004d9572520ed.glb"
  },
  51978: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_archer.5622fa34756f0ddeb1f9.png"
  },
  50602: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_desert_guard.c9ce94394c5ad789a8b2.glb"
  },
  51984: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_desert_guard.259b2a31cd3d5d1def25.png"
  },
  50606: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_sentry.fd88756ed28102c038be.glb"
  },
  51993: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/human_sentry.702ac5cab41564ab3731.png"
  },
  50608: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/ice_wings_attachable.ac1d49437b2b0e11285d.glb"
  },
  51997: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/ice_wings_attachable.fbf4aa9c26135e18fb05.png"
  },
  50610: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jackal_priest.ea22761085c155dcfe9f.glb"
  },
  52001: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jackal_priest.48e88aa29dff4d501a0e.png"
  },
  50614: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jetpack_attachable.c63c098a3263d0b50836.glb"
  },
  52003: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jetpack_attachable.6d2bbf43846155c5bb2e.png"
  },
  50617: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable.168794d456adfbe39838.glb"
  },
  52007: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable_blue.2f686b41d85c4d6bce33.png"
  },
  52010: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable_green.031f784da6ee987953ec.png"
  },
  52018: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable_purple.3f3a83dbf8e636cfcb60.png"
  },
  52027: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable_red.db6c293bd5850be96067.png"
  },
  52033: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_1_attachable_yellow.974529f01d0df1037343.png"
  },
  50625: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_2_attachable.be6a5b70c68679b4c55b.glb"
  },
  52038: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_2_attachable_blue.0dbd4893b4968b5c9c31.png"
  },
  52043: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_2_attachable_purple.3863d87764c18546382d.png"
  },
  52046: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_2_attachable_red.c7bddc3b4f6e52aa53a7.png"
  },
  50634: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_3_attachable.a794b899d5090ba2ecd3.glb"
  },
  52052: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_3_attachable_green.0f0b15840a127c4a441a.png"
  },
  52054: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_3_attachable_pink.5ba032639c97df45bca6.png"
  },
  52057: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_3_attachable_purple.2a71c7e895959106b552.png"
  },
  52059: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_3_attachable_red.9d5625925242d63571e8.png"
  },
  50638: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_4_attachable.2c9a0807e84b7b52df0d.glb"
  },
  52065: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_4_attachable_blue.66da560b557ef43ab0be.png"
  },
  52068: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_4_attachable_hair.7cd5ce85899b8268578f.png"
  },
  52077: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_4_attachable_purple.08396e2fc257eb15c043.png"
  },
  52081: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/medieval_set_4_attachable_red.670d03766266c09f7ff6.png"
  },
  50645: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_helmet_attachable.5283fabd3acf0964e523.glb"
  },
  52090: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_helmet_attachable.c576b351721412f3474c.png"
  },
  50654: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur.8c8438fcfb2743e11a08.glb"
  },
  52094: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur.18e2b4005cf1249ddbc3.png"
  },
  50656: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur_elder.671a60a9234634a7317e.glb"
  },
  52098: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur_elder.73650a0bb7b29e737a18.png"
  },
  50664: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur_warrior.cb1266377a03a4840597.glb"
  },
  52104: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/minotaur_warrior.aa846fef1b1cff809fe1.png"
  },
  50666: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/monster_hunter_lorenzo_attachable.cbf89dcf0e32fef44b96.glb"
  },
  52109: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/monster_hunter_lorenzo_attachable.4a32273f11ece003053c.png"
  },
  52113: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/nova_jetpack_attachable.b4fe324d9f350a47b6b7.png"
  },
  50674: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/npc_pig_head.0610232aa4cf2be9a3a0.glb"
  },
  52120: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/npc_pig_head.0cff7e148233d053b838.png"
  },
  50678: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/painter_spencer_attachable.efbda3faf20332fbf4d8.glb"
  },
  52123: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/painter_spencer_attachable.2b1b0e6121f1f1df8b25.png"
  },
  50687: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pet_reindeer.b534e90d40b20f7ad509.glb"
  },
  52126: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pet_reindeer.5763b68cde3849a52dcf.png"
  },
  50693: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pig_napoleon.a6b4adfd05805e823ef0.glb"
  },
  52132: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pig_napoleon.18fd7f3c75ed02707613.png"
  },
  50702: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pig_worker_attachable.c8ae9d921fa6347772a4.glb"
  },
  52141: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pig_worker_attachable.7df668bc96c60eec5b4e.png"
  },
  50711: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/piggy_banker_head.1a75c8ee13d7032928b2.glb"
  },
  52144: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/piggy_banker_head.0a378752a2a5a3c9e04b.png"
  },
  50719: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/portal_mage_hat.3855796919cb609ddf0b.glb"
  },
  52146: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/portal_mage_hat.53dcc9e4427e3eaeb19b.png"
  },
  50726: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rabbit_aristocrat_attachable.fb6aed0a5af2fe257cd9.glb"
  },
  52152: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rabbit_aristocrat_attachable.f96f72d6b1bbfaf34e34.png"
  },
  50732: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/skis_attachable.2f18a53608a62eacee94.glb"
  },
  52159: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/skis_attachable.94d264fc21f99592ef6e.png"
  },
  50735: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/smuglyn_attachable.e262dbcc08060d3b2c33.glb"
  },
  52164: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/smuglyn_attachable.9166c7e98a46701c6470.png"
  },
  50742: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_1_attachable.c7ad8d41bb14b0b5ba1b.glb"
  },
  52168: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_1_attachable.d1a2a2e0867a2cb5bef1.png"
  },
  50750: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_2_attachable.da95b8db7c46e73dcddf.glb"
  },
  52177: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_2_attachable.784bc9f5727b2d686616.png"
  },
  50752: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_3_attachable.7b82215306e41bef192d.glb"
  },
  52186: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_3_attachable.fc8f7ebe2626ce95666c.png"
  },
  50757: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_4_attachable.f6356a5561b52a9252bb.glb"
  },
  52189: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spring_set_4_attachable.08d09b530492583fcf13.png"
  },
  50760: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_boy.b4589071fbc6f8aab4eb.glb"
  },
  52192: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_boy.4f30c4250607088747ac.png"
  },
  52194: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_girl_attachable.10eab4d20aa51073ed13.png"
  },
  50762: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_guy_attachable.cf561919acf1ae0553f4.glb"
  },
  52202: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_guy_attachable.d3444f70728d2dda507c.png"
  },
  50770: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_guy_fisherman_attachable.6f7e98da21b6d9d0245a.glb"
  },
  52207: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tentacle_guy_fisherman_attachable.69e2448895829cd14f97.png"
  },
  50773: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/trader_cowl_black.6702003ee060b8868f70.glb"
  },
  52214: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/trader_cowl_black.3e78c867952de1006a5b.png"
  },
  50777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/trader_cowl_blue.6702003ee060b8868f70.glb"
  },
  52216: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/trader_cowl_blue.69970616d9125960a099.png"
  },
  50780: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/ugly_sweater_attachable.209be77a392b2d657c15.glb"
  },
  52218: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/ugly_sweater_attachable.33201f3366e8865e26bd.png"
  },
  50782: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wolf_in_suit_attachable.d386060693b354bdd3b8.glb"
  },
  52226: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wolf_in_suit_attachable.2beb931b01fad9bc4d46.png"
  },
  50789: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wolf_security.f95b7d48013fce4ce4bb.glb"
  },
  52230: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wolf_security.92c9f8ca8df9751651a3.png"
  },
  50792: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_1_attachable.ea6cc6d1fe0f10f0ff4b.glb"
  },
  52234: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_1_attachable.eea4ad48a4d5488d6026.png"
  },
  50798: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_2_attachable.6beeda0bf00e831905e3.glb"
  },
  52241: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_2_attachable.94d8e252b4b30a4151aa.png"
  },
  50802: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_3_attachable.695da8c2a4c167d0fe3f.glb"
  },
  52247: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_3_attachable.353bece2880f7f95a98f.png"
  },
  50811: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_4_attachable.684a5c2e7b8b3fdcba22.glb"
  },
  52250: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/y2k_set_4_attachable.d0670370061907b3c750.png"
  },
  52255: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Scorpion_Atlas.4c63a55d5b226699b7b5.png"
  },
  50820: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Scorpion_Model.43a1eaa7700978fc716c.glb"
  },
  52263: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_scorpion_default.4c63a55d5b226699b7b5.png"
  },
  52266: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/SheepWool_Atlas.8c6ed48cd20ae438ce99.png"
  },
  52273: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Sheep_Atlas.edd4d6275fdd07baaf45.png"
  },
  50827: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Sheep_Model.ae826edb0fe7f7f6a082.glb"
  },
  52278: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_sheep_default.55e2f064ebce05fea3f6.png"
  },
  52283: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/10_sheep_gray.55e2f064ebce05fea3f6.png"
  },
  52286: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/11_sheep_green.55e2f064ebce05fea3f6.png"
  },
  52288: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/12_sheep_lightBlue.55e2f064ebce05fea3f6.png"
  },
  52295: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/13_sheep_lightGray.55e2f064ebce05fea3f6.png"
  },
  52301: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/14_sheep_lime.55e2f064ebce05fea3f6.png"
  },
  52305: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/15_sheep_magenta.55e2f064ebce05fea3f6.png"
  },
  52310: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_sheep_black.55e2f064ebce05fea3f6.png"
  },
  52314: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_sheep_red.55e2f064ebce05fea3f6.png"
  },
  52322: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_sheep_orange.55e2f064ebce05fea3f6.png"
  },
  52329: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_sheep_pink.55e2f064ebce05fea3f6.png"
  },
  52334: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_sheep_purple.55e2f064ebce05fea3f6.png"
  },
  52343: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/6_sheep_yellow.55e2f064ebce05fea3f6.png"
  },
  52347: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/7_sheep_blue.55e2f064ebce05fea3f6.png"
  },
  52356: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/8_sheep_brown.55e2f064ebce05fea3f6.png"
  },
  52361: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/9_sheep_cyan.55e2f064ebce05fea3f6.png"
  },
  52368: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Skeleton_Atlas.425e67b7d72b1af0b8c2.png"
  },
  50832: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Skeleton_Model.59355cb21c8481c2ca2c.glb"
  },
  50838: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Skeleton_Reconstructed.e7c175b2a6a01b86f26c.glb"
  },
  52374: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_skeleton_default.425e67b7d72b1af0b8c2.png"
  },
  52376: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Slime_Atlas.1263540ecee2dfa618c5.png"
  },
  50845: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Slime_Model.0fe0e3af703604cb8247.glb"
  },
  52385: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_slime_default.1263540ecee2dfa618c5.png"
  },
  52394: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit BearSaddle_Atlas.9b845651cecb41503d7e.png"
  },
  52396: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit Bear_Atlas.07a86cb5b2942e5f3573.png"
  },
  52405: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_spirit bear_default.07a86cb5b2942e5f3573.png"
  },
  52412: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit Golem_Atlas.9bb2443ec5562080032b.png"
  },
  52420: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_spirit golem_default.9bb2443ec5562080032b.png"
  },
  52425: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit GorillaSaddle_Atlas.24a33c7283188d22e2f6.png"
  },
  52432: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit Gorilla_Atlas.b8b61b0b14bb5661336e.png"
  },
  52437: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_spirit gorilla_default.b8b61b0b14bb5661336e.png"
  },
  52444: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit StagSaddle_Atlas.3038083905dd48c74892.png"
  },
  52452: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit Stag_Atlas.9207e762c70637613953.png"
  },
  52460: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_spirit stag_default.9207e762c70637613953.png"
  },
  52464: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit WolfCollar_Atlas.d1746d86d2b0f115c2fd.png"
  },
  52470: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spirit Wolf_Atlas.9b08acbc57bcdda346ef.png"
  },
  52476: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_spirit wolf_default.9b08acbc57bcdda346ef.png"
  },
  52481: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/StagSaddle_Atlas.017d11ce01411f24a65e.png"
  },
  52487: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stag_Atlas.25863e9a084dc2398678.png"
  },
  50849: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stag_Model.8b1a04b971769798551e.glb"
  },
  52496: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_stag_default.25863e9a084dc2398678.png"
  },
  52503: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stalker_Atlas.765a6f6d815e489d379a.png"
  },
  50856: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stalker_Model.62252db592e9a1194275.glb"
  },
  52511: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_stalker_default.05870a7ada9d85be2859.png"
  },
  52514: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_stalker_crimson.ed56375cd712c11086f1.png"
  },
  52517: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_stalker_frost.bc39d3a735616704ab47.png"
  },
  52521: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_stalker_void.bea5f5c673051ba9b5f4.png"
  },
  52527: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Tiki Terror_Atlas.3cd5e376c5c117c4c83f.png"
  },
  50859: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Tiki Terror_Model.795d7c9d776f3038e383.glb"
  },
  50867: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Tiki Terror_Reconstructed.66f98f4bfd2fd9d5dfe0.glb"
  },
  52534: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_tiki terror_default.649d191e0a0af31ed4b3.png"
  },
  52537: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_tiki terror_titan.7f0be3102d2022e79d71.png"
  },
  52545: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_tiki terror_tormentor.0bd9c18bb8f000b60ac1.png"
  },
  52547: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_tiki terror_tyrant.ea975b5358da4f2dceaf.png"
  },
  52555: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Vulcanite_Atlas.8993f0c3dbd8a3b2db83.png"
  },
  50873: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Vulcanite_Model.8659034f30a8675dca54.glb"
  },
  50878: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Vulcanite_Reconstructed.fd4e0dbf75086bfa07c4.glb"
  },
  52557: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_vulcanite_default.8993f0c3dbd8a3b2db83.png"
  },
  52565: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/WildcatCollar_Atlas.caaf5d479a9b064f25ca.png"
  },
  52569: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wildcat_Atlas.730e684f03c8ec6b6ca7.png"
  },
  50884: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wildcat_Model.882887d7f1b81b755c8f.glb"
  },
  52578: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_wildcat_default.33894faabdf46ff9bd5e.png"
  },
  52584: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_wildcat_tabby.b8193faccc684618151c.png"
  },
  52591: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_wildcat_grey.bb2c555308bee757148e.png"
  },
  52595: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_wildcat_black.0a1d2b751451edbf520c.png"
  },
  52601: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_wildcat_calico.71da5e696f853739c2b8.png"
  },
  52610: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/5_wildcat_siamese.3442e45665115fb259a9.png"
  },
  52613: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/6_wildcat_leopard.a1b394639e3a31f471e8.png"
  },
  52619: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/WolfCollar_Atlas.d66ee93a67f33ef102cc.png"
  },
  52626: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wolf_Atlas.b14e1ea41fa8fcaccc6d.png"
  },
  50889: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wolf_Model.e8ce1bb8ca6dee8c4281.glb"
  },
  52628: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_wolf_default.4b7fd478b8456d6188dc.png"
  },
  52633: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/1_wolf_white.6ddd98fa6fef429b09fc.png"
  },
  52635: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_wolf_brown.8250048308eebf9ff5e3.png"
  },
  52640: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/3_wolf_grey.f7443ecfa81204e0435e.png"
  },
  52648: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/4_wolf_spectral.ed551985dc573c47da7b.png"
  },
  52656: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Zombie_Atlas.0d12d7cf7b286942fb57.png"
  },
  50891: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Zombie_Model.729c1fe6a9048e506b28.glb"
  },
  50898: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Zombie_Reconstructed.b748762209f6006c725f.glb"
  },
  52665: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/0_zombie_default.0d12d7cf7b286942fb57.png"
  },
  45741: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/2_block.ed68e72819b31a973068.glb"
  },
  45745: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/67.e191f0fe25ea3300eab7.glb"
  },
  45753: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Artisan Bench.b42baf109b0e8ceebe35.glb"
  },
  45761: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Aspen Door.70ff2e635fa7e6d074e7.glb"
  },
  45766: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Aspen Item Pedestal.d106ce98250ed7ec636c.glb"
  },
  45773: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Aspen Ladder.c46a3ef9dff3ff338c6b.glb"
  },
  45778: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Aspen Trapdoor.be2f0606fc8b154395bf.glb"
  },
  45781: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Black Banner.c6b29cdd2a2ef7368215.glb"
  },
  45787: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Black Bed.cea41e80f8f80d1deaac.glb"
  },
  45795: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Black Directional Arrow.335ec331ba4de1ed0c03.glb"
  },
  45800: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Black Strongbed.d812d56747ded12fa76c.glb"
  },
  45805: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Blue Banner.ed6d85442bc3bb4697dd.glb"
  },
  45810: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Blue Bed.6134692fe5a906ee225e.glb"
  },
  45816: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Blue Directional Arrow.2789b2fbd37ed6d0a81e.glb"
  },
  45824: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Blue Strongbed.ded6e860b166e9218920.glb"
  },
  45833: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Board.f3ca970f0aec49c2cba5.glb"
  },
  45837: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Brown Banner.2fd5a70262544120b8b5.glb"
  },
  45840: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Brown Bed.3c55240c9fe96e467e8e.glb"
  },
  45843: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Brown Directional Arrow.277c0369fab2f84fb1ee.glb"
  },
  45851: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Brown Strongbed.fac0f4616a1660180625.glb"
  },
  45860: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cedar Door.6505aa3b8d621a205c84.glb"
  },
  45866: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cedar Item Pedestal.fed6ba91b9e237779dde.glb"
  },
  45874: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cedar Ladder.91ddcfdab0b805b0ba02.glb"
  },
  45877: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cedar Trapdoor.4513c73d389bce4c7ba0.glb"
  },
  45885: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cherry Door.7cd622b686ab7d35adbf.glb"
  },
  45893: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cherry Item Pedestal.84093fc38b34643aecbb.glb"
  },
  45895: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cherry Ladder.09ccb69175957a415053.glb"
  },
  45901: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cherry Trapdoor.631b5b507962f538a8b3.glb"
  },
  45905: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Crimson Trapdoor.0a6dcda3d7289dd9cabb.glb"
  },
  45907: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cyan Banner.8bfb99d6f5baa4fdda91.glb"
  },
  45914: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cyan Bed.2e60dbe672ee333df908.glb"
  },
  45923: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cyan Directional Arrow.5fb3ab4f0042724cb73a.glb"
  },
  45926: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cyan Strongbed.8744cd46f22ecb13c70f.glb"
  },
  45930: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Dangling Rope.148f7603a65c417035b0.glb"
  },
  45937: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Dangling Vine.ea87fe948ec583ff997c.glb"
  },
  45939: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Enchanting Table.611328e5f2099242ee00.glb"
  },
  45944: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Diamond Trophy.1173685f24276f2cbcb9.glb"
  },
  45952: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Banner.aae5998e92c2b99664bc.glb"
  },
  45960: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Fat Brown Mushroom.40af11e61bd2c9293a6e.glb"
  },
  45962: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Fat Red Mushroom.7a9bad44b193737cfa3a.glb"
  },
  45966: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Fence.878f3952d5f962074bf3.glb"
  },
  45968: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/FenceGate.d9d93725ba92bb91055c.glb"
  },
  45970: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Furnace.63172398ee4490177f4f.glb"
  },
  45973: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Enchanting Table.f0131104629a776c3b8f.glb"
  },
  45976: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gold Trophy.2167e90bf848cd51f465.glb"
  },
  45984: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gray Banner.a3b81769845f5ff338fc.glb"
  },
  45987: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gray Bed.5c4f0bbdbb174f46fbef.glb"
  },
  45991: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gray Strongbed.e8eaf0af5a840e59fff1.glb"
  },
  45994: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Green Banner.90b3894d2834265ce9b2.glb"
  },
  46001: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Green Bed.d6ff26f123e6826d9985.glb"
  },
  46008: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Green Directional Arrow.9bab881fb50f75f86b3f.glb"
  },
  46011: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Green Strongbed.f4b895ef6c5807914f4c.glb"
  },
  46017: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Grey Directional Arrow.8242f96058670e322908.glb"
  },
  46024: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Enchanting Table.3687c10d08e339113719.glb"
  },
  46033: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Ladder.8ce80384a824f6137ab2.glb"
  },
  46042: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Trapdoor.133339769c365a3aac31.glb"
  },
  46047: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Iron Trophy.0b43b0c33f93503aed8b.glb"
  },
  46051: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Jungle Door.f9f730419e0ef03e61f1.glb"
  },
  46053: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Jungle Item Pedestal.9e21adc04895780375b3.glb"
  },
  46060: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Jungle Ladder.f0e270ed8983b1d35713.glb"
  },
  46065: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Jungle Trapdoor.395a3b2d177a87db6746.glb"
  },
  46074: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Large Icicle.170ec1b52ee13dacb77f.glb"
  },
  46082: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Large Twin Icicle.6c08460fe301dd64fefd.glb"
  },
  46090: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Leaf Bed.7aaa214dfd2bc1183b5e.glb"
  },
  46096: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Blue Banner.afe7633adc51ba562c85.glb"
  },
  46104: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Blue Bed.6fb411e8528b423d6611.glb"
  },
  46111: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Blue Directional Arrow.aeae69a3682fafa6403b.glb"
  },
  46115: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Blue Strongbed.e417c2e163f6f87882f2.glb"
  },
  46117: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Gray Banner.472826728c0ea68ccd0e.glb"
  },
  46123: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Gray Bed.c36f53f85fa5543f5f42.glb"
  },
  46126: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Gray Strongbed.8b84deea32747ec1bdf4.glb"
  },
  46130: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Light Grey Directional Arrow.c6ca300b2832ea56ca5d.glb"
  },
  46139: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lime Banner.fef68f8aedcd6206b682.glb"
  },
  46146: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lime Bed.792d5c1fbfea4012b996.glb"
  },
  46148: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lime Directional Arrow.b775d1be5bf4a55a9132.glb"
  },
  46152: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lime Strongbed.385c00d698c7c35d489a.glb"
  },
  46154: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magenta Banner.6998f2e5400e044cb27f.glb"
  },
  46162: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magenta Bed.70b261dd12b8a0733f73.glb"
  },
  46168: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magenta Directional Arrow.e82fbca46b89ce4f66fe.glb"
  },
  46172: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magenta Strongbed.2633f791a179ed0b18a9.glb"
  },
  46175: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mango Door.f3062f346f353ba0ef10.glb"
  },
  46177: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mango Item Pedestal.b893bab2a9ebd1927955.glb"
  },
  46182: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mango Ladder.ef553e9e2a61fb119729.glb"
  },
  46186: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mango Trapdoor.da8b471e4edeb488b53c.glb"
  },
  46194: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Maple Door.93d1036df42b8822140c.glb"
  },
  46199: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Maple Ladder.fa63d0c1b92cec4e6088.glb"
  },
  46204: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Maple Trapdoor.ebc05cc264d1ece28b22.glb"
  },
  46212: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Medium Icicle.2f78a303591659f85308.glb"
  },
  46217: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Moonstone Trophy.039d181285ad13472e56.glb"
  },
  46225: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Nova Trophy.ee442b96a86b4412e83c.glb"
  },
  46230: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Orange Banner.ef3c97359aa22d345a39.glb"
  },
  46236: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Orange Bed.ddb5003e3b51000a875a.glb"
  },
  46242: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Orange Directional Arrow.8fc69b3ad74b874d8717.glb"
  },
  46247: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Orange Strongbed.d18b11f42561ffcd7ad9.glb"
  },
  46256: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Palm Door.a1098848fbd449380e5e.glb"
  },
  46264: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Palm Item Pedestal.4697508246a8308957c1.glb"
  },
  46266: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Palm Ladder.0657b4a73700795a10ce.glb"
  },
  46271: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Palm Trapdoor.6831798533946e2535fc.glb"
  },
  46275: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pear Door.191218ca881feafb89d3.glb"
  },
  46281: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pear Item Pedestal.d9247ea4c25827f0cea5.glb"
  },
  46285: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pear Ladder.dfcf2a04eb8dd2ec99f5.glb"
  },
  46294: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pear Trapdoor.ec72b5fcb4c2aab20ae7.glb"
  },
  46301: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pine Door.6f1a6fd9e9968b012c75.glb"
  },
  46307: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pine Item Pedestal.6fbcfaf534cdeae3688a.glb"
  },
  46312: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pine Ladder.f0a60090079487f523bd.glb"
  },
  46314: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pine Trapdoor.99dc922c6bf48f6ec8e8.glb"
  },
  46323: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pink Banner.5a2ec2efce3d4da4d265.glb"
  },
  46326: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pink Bed.bc1dea899cec3f9ef7e7.glb"
  },
  46331: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pink Directional Arrow.016130285863cca121fe.glb"
  },
  46334: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pink Strongbed.84e997326b4cb35d1239.glb"
  },
  46342: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Plum Door.fad96d335bfbd400b369.glb"
  },
  46348: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Plum Item Pedestal.c293a0f795323e47f5fb.glb"
  },
  46351: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Plum Ladder.9fa92307e164136268dc.glb"
  },
  46354: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Plum Trapdoor.b3b6436d875e4dd2302d.glb"
  },
  46356: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Potion Table.b9b00358d3c92be620f7.glb"
  },
  46364: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Purple Banner.805e85f24d3948fd1991.glb"
  },
  46367: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Purple Bed.a6c7179526745d16e4af.glb"
  },
  46371: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Purple Directional Arrow.e117fb18ecae2de3597d.glb"
  },
  46374: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Purple Strongbed.2792d8983d2fd7384411.glb"
  },
  46377: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rainbow Banner.2c1ff6cfcd7cfd6a2bb8.glb"
  },
  46385: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Red Banner.b951e43bac7aceef8de2.glb"
  },
  46388: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Red Bed.f24823935c79013e547f.glb"
  },
  46394: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Red Directional Arrow.0f44b3325b02e45fe3fc.glb"
  },
  46400: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Red Strongbed.cbed53542bda683ac7b5.glb"
  },
  46403: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Salvaging Table.b1d9daec58386ecb42cd.glb"
  },
  46406: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Showcase.0b58d3094505df7ad51a.glb"
  },
  46411: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Skull Banner.be808cb16744c7b19d81.glb"
  },
  46419: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Black Pod.f7f1caee394bbde5ba00.glb"
  },
  46423: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Blue Pod.0be6c7e63cf39dc17610.glb"
  },
  46429: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Brown Pod.db038036cedec67a309e.glb"
  },
  46432: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Cyan Pod.a925627b8d8c728f4bf9.glb"
  },
  46437: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Gray Pod.80702b6ed803b9554882.glb"
  },
  46443: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Green Pod.778b1b621f240176416b.glb"
  },
  46450: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Light Blue Pod.5c0ae28eaff9e3ad44e7.glb"
  },
  46452: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Light Gray Pod.3cc535468131e7c74b71.glb"
  },
  46459: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Lime Pod.325665695c5f9a563a71.glb"
  },
  46462: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Magenta Pod.4dc15c5426e84ada3682.glb"
  },
  46466: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Orange Pod.7f1a376b3fd22adcaa47.glb"
  },
  46472: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Pink Pod.736f862ad20ffec3b45a.glb"
  },
  46479: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Purple Pod.3d264ca7cd77e2bc85eb.glb"
  },
  46481: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Red Pod.71793138884ea7963344.glb"
  },
  46490: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Twin Icicle.90abef92d62a482d945c.glb"
  },
  46496: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small White Pod.9fe6bb3e8935c04e09ba.glb"
  },
  46501: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Small Yellow Pod.c0832601f97f70e4c4a1.glb"
  },
  46510: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spectral Door.961d366035c6451ed7c0.glb"
  },
  46512: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spectral Item Pedestal.d4346118ea2a5e2b1e8a.glb"
  },
  46519: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spectral Ladder.5096618d2f9b74e4671a.glb"
  },
  46526: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spectral Trapdoor.1ccb5de6df39ebce4456.glb"
  },
  46531: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Diamond.69c9ee36cf9e11b59e0b.glb"
  },
  46540: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Gold.123674bb67381cac70c6.glb"
  },
  46547: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Iron.187c23e1963747a7f83f.glb"
  },
  46551: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Kill.f4843456edbde4aa3351.glb"
  },
  46560: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Stone.40b924fee45d7d975ae3.glb"
  },
  46562: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Spikes_Wood.4afa092439b0a5a36c2c.glb"
  },
  46565: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stone Enchanting Table.7820ac172e4883d81d77.glb"
  },
  46572: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stone Trophy.0d09ca4b3382d078df96.glb"
  },
  46579: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Timed Spike Bomb Block.65ee988f5c874dad3ba9.glb"
  },
  46586: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Vines.6900e39cb0132a28d5c5.glb"
  },
  46591: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Warped Trapdoor.e102e0d01ea8095a508d.glb"
  },
  46599: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/White Banner.b9c75887ab4dc97c52c1.glb"
  },
  46607: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/White Bed.189eba790b17cd9e673c.glb"
  },
  46611: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/White Directional Arrow.f7f592929734a9c1aaad.glb"
  },
  46619: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/White Strongbed.64379b59673d8b8bebef.glb"
  },
  46624: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wood Enchanting Table.adb5adb79965168536db.glb"
  },
  46631: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wood Trophy.de9b607e6fd3921c91f4.glb"
  },
  46633: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Workbench.395da958bba12f4f5618.glb"
  },
  46640: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Yellow Banner.f040f94bd7e4052b9c51.glb"
  },
  46647: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Yellow Bed.3508f062adbd29ad9817.glb"
  },
  46650: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Yellow Directional Arrow.ea7794e6fe2d48fb1b01.glb"
  },
  46657: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Yellow Strongbed.418bdbc6b888ac5d5d99.glb"
  },
  46660: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Aspen Door Top.c74d85d9615d99fb551c.glb"
  },
  46668: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Black Banner Flag Hanging.cfbc798c1cbcb1a6289f.glb"
  },
  46672: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Black Banner Flag.617184cee26ec2fca017.glb"
  },
  46678: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Black Banner Hanging.c2abb55fdd1db4457eb8.glb"
  },
  46681: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Black Bed Head.a2b52b7714fa148924cd.glb"
  },
  46685: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Black Strongbed Head.ba5750836163bbd674c9.glb"
  },
  46688: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Blue Banner Flag Hanging.0f4421c98326e84824fa.glb"
  },
  46694: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Blue Banner Flag.11990eedd286db55880d.glb"
  },
  46697: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Blue Banner Hanging.5b12aec44ad18dcb3888.glb"
  },
  46701: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Blue Bed Head.563135602471615af0ad.glb"
  },
  46703: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Blue Strongbed Head.6436747247f90ad1ea09.glb"
  },
  46708: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Brown Banner Flag Hanging.56f9fb5ad4e57a1d138e.glb"
  },
  46714: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Brown Banner Flag.890530886208cca6a28f.glb"
  },
  46722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Brown Banner Hanging.407d71e9319ba5f72b00.glb"
  },
  46727: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Brown Bed Head.d5276fc60f1f1575e431.glb"
  },
  46731: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Brown Strongbed Head.1ea396eae4848fc2e2c5.glb"
  },
  46740: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Camel Painting Bottom Left.6f52a64b36eb5166414c.glb"
  },
  46746: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Camel Painting Bottom Right.096b226ca218a069996f.glb"
  },
  46750: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Camel Painting Top Left.9d04162bef9c3ec3bc5a.glb"
  },
  46756: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Camel Painting Top Right.9bdc26b9370a7608955f.glb"
  },
  46765: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cedar Door Top.aebe23f6241235f16aa2.glb"
  },
  46768: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cherry Door Top.49bad79598070b9766a2.glb"
  },
  46772: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cow Painting Bottom Left.a626f2ef515025f2e2a4.glb"
  },
  46780: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cow Painting Bottom Right.7a2361d419822f12723d.glb"
  },
  46786: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cow Painting Top Left.c3d7138ccc02cec834c4.glb"
  },
  46788: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cow Painting Top Right.69402041c0ca60ac771c.glb"
  },
  46794: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cyan Banner Flag Hanging.4a639a0ba348f0a78232.glb"
  },
  46799: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cyan Banner Flag.19f84de6bfc7bd8a45c4.glb"
  },
  46808: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cyan Banner Hanging.54193b1b927f1665acc9.glb"
  },
  46811: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cyan Bed Head.28ad1dd325b0d2cecf92.glb"
  },
  46815: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Cyan Strongbed Head.a15b5458ea2f9e8e00a4.glb"
  },
  46821: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Deer Painting Bottom Left.8d93cc831d7a37716930.glb"
  },
  46826: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Deer Painting Bottom Right.60519165d7e74ae11097.glb"
  },
  46834: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Deer Painting Top Left.e5a05c00a32f81ea30b2.glb"
  },
  46841: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Deer Painting Top Right.2ef06cb82d37ed63a03f.glb"
  },
  46847: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Draugr Banner Flag Hanging.87935e06bcc4b48cd5aa.glb"
  },
  46850: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Draugr Banner Flag.224b1cf4df8f63554a45.glb"
  },
  46859: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Draugr Banner Hanging.ad5e1055164dc891b9c0.glb"
  },
  46868: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Gray Banner Flag Hanging.847faa22afc615ee0e97.glb"
  },
  46872: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Gray Banner Flag.b9c2a5aca0fc8ab973bb.glb"
  },
  46881: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Gray Banner Hanging.67c7b447ef27679fda8d.glb"
  },
  46887: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Gray Bed Head.7f5edc258147848884e8.glb"
  },
  46890: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Gray Strongbed Head.81a228cbd33289ccad24.glb"
  },
  46896: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Green Banner Flag Hanging.1da40920f91caa6789e5.glb"
  },
  46899: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Green Banner Flag.cfd668f53d76e6542ac2.glb"
  },
  46901: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Green Banner Hanging.0b48cd078ae358248499.glb"
  },
  46909: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Green Bed Head.c82673c37db9d22d951b.glb"
  },
  46916: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Green Strongbed Head.34f5c659ec5c31aea8ce.glb"
  },
  46923: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Horse Painting Bottom Left.8ba66535ce92d3e1722d.glb"
  },
  46925: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Horse Painting Bottom Right.46a3415c6aef503962bb.glb"
  },
  46931: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Horse Painting Top Left.657dc6225171243f245b.glb"
  },
  46934: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Horse Painting Top Right.9da74d016b759f190221.glb"
  },
  46937: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Jungle Door Top.b9fefc55b59299e1a330.glb"
  },
  46943: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Blue Banner Flag Hanging.152032e60558efde629b.glb"
  },
  46945: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Blue Banner Flag.e190ccb1b5e4c66b862f.glb"
  },
  46950: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Blue Banner Hanging.964849196d922297e63e.glb"
  },
  46953: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Blue Bed Head.724e96603f186d9a8fc2.glb"
  },
  46957: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Blue Strongbed Head.7d8424c06a75a1097170.glb"
  },
  46963: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Gray Banner Flag Hanging.0517247c33b99436e963.glb"
  },
  46968: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Gray Banner Flag.718d5858ef07a4e01696.glb"
  },
  46976: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Gray Banner Hanging.0fcd7e0e3655bfa9a125.glb"
  },
  46982: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Gray Bed Head.0303bfa349abf0f2fb80.glb"
  },
  46985: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Light Gray Strongbed Head.30c6f6ad4acf56613f2f.glb"
  },
  46989: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Lime Banner Flag Hanging.4767ef5e44fe3d5d3ffb.glb"
  },
  46996: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Lime Banner Flag.97301b73e9aebe6053c1.glb"
  },
  47001: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Lime Banner Hanging.72523777b4759a9a2ccc.glb"
  },
  47003: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Lime Bed Head.dbddd24e7a4420a96f2f.glb"
  },
  47011: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Lime Strongbed Head.00146b7ed12bfa16b207.glb"
  },
  47015: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Magenta Banner Flag Hanging.a6d2d58283dc0ee74523.glb"
  },
  47019: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Magenta Banner Flag.bc1ba313a35af29be707.glb"
  },
  47025: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Magenta Banner Hanging.338bd181963fea3ff8fb.glb"
  },
  47034: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Magenta Bed Head.d31af958dc71d97814f3.glb"
  },
  47041: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Magenta Strongbed Head.cf4a8fda11b2b73dc6ed.glb"
  },
  47045: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Mango Door Top.6b6a3aa1df7069e0cf13.glb"
  },
  47049: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Maple Door Top.2768910296da701712b2.glb"
  },
  47054: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Orange Banner Flag Hanging.f20238c4ba1f769b83bc.glb"
  },
  47061: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Orange Banner Flag.3466e7ecc9ae8b89c079.glb"
  },
  47066: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Orange Banner Hanging.aa476158647512ccb7b7.glb"
  },
  47072: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Orange Bed Head.6de4be93f4eec519f273.glb"
  },
  47077: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Orange Strongbed Head.7ba9a51f968bba47383d.glb"
  },
  47086: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Palm Door Top.f8b7e967a96362a659a2.glb"
  },
  47090: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pear Door Top.3d76cb5d0c376bc4a5a3.glb"
  },
  47096: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pig Painting Bottom Left.dbc8926e0fda4af9d308.glb"
  },
  47103: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pig Painting Bottom Right.74548c1594c05212e7ab.glb"
  },
  47112: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pig Painting Top Left.43e32f7831d3e0805f92.glb"
  },
  47118: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pig Painting Top Right.870c25d54cdf1ccde6e9.glb"
  },
  47121: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pine Door Top.b6998b1cbb7d35537ac6.glb"
  },
  47129: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pink Banner Flag Hanging.a26b549f85c4974cef3a.glb"
  },
  47137: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pink Banner Flag.2baeb61da36bdafd9ca5.glb"
  },
  47146: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pink Banner Hanging.52732487e4388af53397.glb"
  },
  47149: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pink Bed Head.55427fffde8df81a8b45.glb"
  },
  47151: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Pink Strongbed Head.981850c2236f956bef47.glb"
  },
  47155: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Plum Door Top.e38c3f25b7d40a83880f.glb"
  },
  47157: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Purple Banner Flag Hanging.620b5130de2a5acf6acf.glb"
  },
  47161: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Purple Banner Flag.b01047e6f71e1e701bb4.glb"
  },
  47163: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Purple Banner Hanging.fc280620b91c0b9c94ba.glb"
  },
  47166: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Purple Bed Head.0f29bca0fcc5a571acb9.glb"
  },
  47171: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Purple Strongbed Head.d198c864d6d36e993f93.glb"
  },
  47179: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Radar Dish Down.7cb9726005b2526bdf4d.glb"
  },
  47186: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Radar Dish Up.d97eabdff7864c56bc2f.glb"
  },
  47193: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Rainbow Banner Flag Hanging.8812eb1ff5fa7d22ed7d.glb"
  },
  47199: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Rainbow Banner Flag.06826522d56676745046.glb"
  },
  47204: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Rainbow Banner Hanging.ba8286ad9bd08376ae37.glb"
  },
  47210: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Red Banner Flag Hanging.a22cc98245e658223042.glb"
  },
  47214: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Red Banner Flag.aa406f98ef9444264579.glb"
  },
  47217: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Red Banner Hanging.563cd16072672db73802.glb"
  },
  47221: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Red Bed Head.76958dad424fd8c7c924.glb"
  },
  47223: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Red Strongbed Head.64ffa69b9474dd76fea0.glb"
  },
  47226: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Sheep Painting Bottom Left.43af975cef0cbce06f8f.glb"
  },
  47233: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Sheep Painting Bottom Right.d307fb60c4b0f254e878.glb"
  },
  47237: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Sheep Painting Top Left.fda4cd2f8aa1abd8468c.glb"
  },
  47244: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Sheep Painting Top Right.8b3b4c019c808b4c14d5.glb"
  },
  47253: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Skull Banner Flag Hanging.a103df5c29d654ca6158.glb"
  },
  47258: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Skull Banner Flag.e963e24eca4042657917.glb"
  },
  47266: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Skull Banner Hanging.49a522ddf60661db6e4f.glb"
  },
  47270: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Black Pod Mid.03843aff015106df28cc.glb"
  },
  47273: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Black Pod Top.8cf8eb5d19d2db960536.glb"
  },
  47279: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Blue Pod Mid.757a12f8330ea7b6a38e.glb"
  },
  47283: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Blue Pod Top.6760b73896cf699f43f9.glb"
  },
  47285: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Brown Pod Mid.3d48e12552338a48939d.glb"
  },
  47290: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Brown Pod Top.ae69c03aad428bfc1dc6.glb"
  },
  47295: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Cyan Pod Mid.b5a69a479f34d956c1ef.glb"
  },
  47297: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Cyan Pod Top.1075afb3ef4c7df4a2eb.glb"
  },
  47302: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Gray Pod Mid.c4d9b17cf3bba57e36d5.glb"
  },
  47311: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Gray Pod Top.b572a539cc65c0c6fef6.glb"
  },
  47317: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Green Pod Mid.dbc00603628f2be74cc3.glb"
  },
  47323: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Green Pod Top.a78986447b371d85cf8c.glb"
  },
  47329: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Light Blue Pod Mid.6c3aea9246e6ffc31db8.glb"
  },
  47334: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Light Blue Pod Top.a892261ae5618993ba64.glb"
  },
  47337: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Light Gray Pod Mid.536b25600295a14cd2cf.glb"
  },
  47345: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Light Gray Pod Top.26e4ef46d71789406482.glb"
  },
  47347: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Lime Pod Mid.9f6098fccc660db46bcf.glb"
  },
  47351: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Lime Pod Top.ab72e3b1ba9cc548de53.glb"
  },
  47357: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Magenta Pod Mid.0b20235584f72a3e4c36.glb"
  },
  47362: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Magenta Pod Top.9e0dcff4f7ac81b70c1a.glb"
  },
  47368: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Middle Pod Mag.3a1132b1fb5a71e90cfb.glb"
  },
  47372: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Orange Pod Mid.cdb76084e06a01174933.glb"
  },
  47375: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Orange Pod Top.32d1a6f20df4042d0a51.glb"
  },
  47379: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Pink Pod Mid.bc910a35fe0eee502325.glb"
  },
  47388: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Pink Pod Top.2433e4eed13aff1b371c.glb"
  },
  47395: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Purple Pod Mid.df0d724d4ee73129a50e.glb"
  },
  47401: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Purple Pod Top.e16abd5aba6cbc5950fe.glb"
  },
  47408: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Red Pod Mid.165aacb8d7326a9ad53a.glb"
  },
  47410: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Red Pod Top.4c99667582ab9e3c35e9.glb"
  },
  47419: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small White Pod Mid.84176311551e4916216f.glb"
  },
  47421: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small White Pod Top.2210a083892d21e744cb.glb"
  },
  47426: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Yellow Pod Mid.9714689721f4cbbfb8cc.glb"
  },
  47429: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Small Yellow Pod Top.dcdab8fb3a278bf3db82.glb"
  },
  47433: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Spectral Door Top.bdfaca331bcc91f62b7e.glb"
  },
  47440: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_White Banner Flag Hanging.25d8007c46b4fb74a389.glb"
  },
  47447: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_White Banner Flag.d98dc6d787a484cbba6c.glb"
  },
  47450: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_White Banner Hanging.7b1a2a66bccb8529bcd7.glb"
  },
  47454: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_White Bed Head.f08faf8b0a1975e20aff.glb"
  },
  47463: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_White Strongbed Head.e6d70c8c1b67996f80a9.glb"
  },
  47468: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wildcat Painting Bottom Left.03df3eaca977d6a1e33c.glb"
  },
  47470: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wildcat Painting Bottom Right.75639f21610efe2eca46.glb"
  },
  47479: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wildcat Painting Top Left.bc9b03cda4006c17302f.glb"
  },
  47484: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wildcat Painting Top Right.621b968b75d39bfa4cf6.glb"
  },
  47493: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wolf Painting Bottom Left.5a1a9a5adc4c42676f17.glb"
  },
  47498: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wolf Painting Bottom Right.764338590135d60ba4a5.glb"
  },
  47504: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wolf Painting Top Left.6bfc627b449b7dde4daf.glb"
  },
  47512: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Wolf Painting Top Right.694dca804ab3cf5b64d8.glb"
  },
  47515: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Yellow Banner Flag Hanging.e4908078e51d3fa60832.glb"
  },
  47524: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Yellow Banner Flag.65d24d652d7e2574270f.glb"
  },
  47533: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Yellow Banner Hanging.f26b387b23ccf8533050.glb"
  },
  47539: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Yellow Bed Head.4552feeb5d0871e044d9.glb"
  },
  47544: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/_Yellow Strongbed Head.3949850260f428146b7f.glb"
  },
  47547: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_body.25e8dd3d58c1992c9e03.glb"
  },
  47553: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_drill_back.22bdc56b5f4dd481c732.glb"
  },
  47557: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_drill_front.ef9fc3de8896d485d0ac.glb"
  },
  47561: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_foot_back.210a50f0d9a2a33b886d.glb"
  },
  47569: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_foot_front.a29e1ea1f289a2525883.glb"
  },
  47573: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_lunite_body.2b6a4c376368a207921d.glb"
  },
  47575: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_lunite_drill_back.a1d0e139c3830b6116bc.glb"
  },
  47583: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_lunite_drill_front.2509610a64cc06486cf4.glb"
  },
  47586: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_lunite_foot_back.6549c238da6014445206.glb"
  },
  47591: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_miner_lunite_foot_front.b65f7f9c66b201034fc6.glb"
  },
  47599: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_none.1af577ef74c59ca3711e.glb"
  },
  47602: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx.50e8d550535b23eb7b0c.glb"
  },
  47611: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny.ad1fc6768d20e0dadf29.glb"
  },
  47618: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz.c08504e0b96d5b02da20.glb"
  },
  47627: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px.a8c164a84dac50ebf83b.glb"
  },
  47630: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py.b4b39bcdd890d611d563.glb"
  },
  47633: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py_pz.3bc5e82d654850681a7e.glb"
  },
  47639: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_pz.25d193228b9b407653a0.glb"
  },
  47645: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py.954d9aba0e5fc700e618.glb"
  },
  47652: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py_pz.ed28e69d1166442f5afe.glb"
  },
  47654: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_nz_pz.8abac3ce07dd4df7def8.glb"
  },
  47659: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_px.c05f5b3a29a8b38a74dc.glb"
  },
  47668: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_px_py.c494e6c0f4d7f43ef65d.glb"
  },
  47674: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_px_py_pz.08a75b32f3d3f1367e61.glb"
  },
  47677: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_px_pz.dfa1eefb590a79130a0c.glb"
  },
  47685: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_py.df3b2fd89b174e33712d.glb"
  },
  47690: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_py_pz.aa9e43468f5c67284072.glb"
  },
  47699: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_ny_pz.eff9afebed04c9f45673.glb"
  },
  47704: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz.617efa509a950b46031c.glb"
  },
  47706: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_px.44e78fe002d03549ed70.glb"
  },
  47710: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_px_py.874da5d27960082260a5.glb"
  },
  47717: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_px_py_pz.201fe963e550b1bbfc5a.glb"
  },
  47720: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_px_pz.62208ad593e3adf43e58.glb"
  },
  47722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_py.e45d119a76498366d672.glb"
  },
  47731: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_py_pz.fdab81d0d48420bf2a67.glb"
  },
  47738: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_nz_pz.0ef6fcae4f3fa615df37.glb"
  },
  47743: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_px.cb1e04b733c1f861cd6a.glb"
  },
  47749: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_px_py.cd9c868b41ec3c72e318.glb"
  },
  47754: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_px_py_pz.8c952fc3b2040e72489c.glb"
  },
  47759: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_px_pz.99f25ad2959b31482feb.glb"
  },
  47767: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_py.52611f014ea751a78ede.glb"
  },
  47774: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_py_pz.51e1f31d8a38119f5bf0.glb"
  },
  47780: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nx_pz.86b6a820036982207bb4.glb"
  },
  47784: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny.11819ea4df81ddb74d7a.glb"
  },
  47786: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz.a2aa549f70b4fda24a35.glb"
  },
  47788: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_px.cb149deb1b4525756883.glb"
  },
  47791: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_px_py.1870f5655bf3c4e08897.glb"
  },
  47796: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_px_py_pz.24d54d010d5b2b1b2f6f.glb"
  },
  47803: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_px_pz.c16d7378b0d0cd37fc4f.glb"
  },
  47806: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_py.feb88cf2ed317948ef3c.glb"
  },
  47810: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_py_pz.be305a5a1769ed54121f.glb"
  },
  47816: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_nz_pz.a81310a530a7254d0d25.glb"
  },
  47820: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_px.c1e79318e74a4bf37eab.glb"
  },
  47828: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_px_py.bdeef9e0a9a36c7c216e.glb"
  },
  47831: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_px_py_pz.a5669fa7ccdf25487694.glb"
  },
  47839: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_px_pz.3bf1496e5db7d7be0b60.glb"
  },
  47846: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_py.689f0e07c9cbb01285db.glb"
  },
  47852: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_py_pz.300e54c3aadf69295c54.glb"
  },
  47860: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_ny_pz.da410a7234f71cb70bb5.glb"
  },
  47865: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz.fa50055e81630bf747c9.glb"
  },
  47874: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_px.720cd952ce2e1af29226.glb"
  },
  47877: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_px_py.1746723455df46daa829.glb"
  },
  47880: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_px_py_pz.d37fbfadb9466de4393d.glb"
  },
  47884: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_px_pz.09731490eabc55907e09.glb"
  },
  47888: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_py.cd0b240636e714c8c4fb.glb"
  },
  47896: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_py_pz.5b902651c90d6ed49340.glb"
  },
  47899: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_nz_pz.193e640bb482e126a6c7.glb"
  },
  47904: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_px.19dee2c6025176ef7fc5.glb"
  },
  47910: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_px_py.68a77eff7799ba4b4842.glb"
  },
  47918: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_px_py_pz.3b1842dbce9a3e915015.glb"
  },
  47924: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_px_pz.c9bfca918420ed622650.glb"
  },
  47932: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_py.4e6306c19edf8a0eb648.glb"
  },
  47939: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_py_pz.03d093879d5689ca5cd6.glb"
  },
  47948: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_coolant_pipe_pz.0208c229844bc8c71bd1.glb"
  },
  47954: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_none.66acffc7f5d58af52183.glb"
  },
  47962: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx.2141d711ad82ede24cb1.glb"
  },
  47968: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny.d8673ebc2a58da04a0f6.glb"
  },
  47973: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz.07e2c6827b9fe6777b52.glb"
  },
  47982: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px.52b8789a08f0fa1819b4.glb"
  },
  47991: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py.33a7e6e0ad06872dc6dd.glb"
  },
  47998: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py_pz.48d3e863ca0527bf6a35.glb"
  },
  48006: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_pz.f2269dc58eb0965b92a5.glb"
  },
  48008: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py.e74b21326fdce69935db.glb"
  },
  48013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py_pz.01bf008683b888a363bf.glb"
  },
  48015: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_nz_pz.da1abb0700f299b2c7f3.glb"
  },
  48024: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_px.023e0b16a8b4a81a1e1e.glb"
  },
  48029: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_px_py.14be63fed9a2a83e2b83.glb"
  },
  48031: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_px_py_pz.fe5326b03ed4ddd2ea80.glb"
  },
  48035: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_px_pz.b63b3b4c5b0faa1af889.glb"
  },
  48038: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_py.a9320721784065ac429e.glb"
  },
  48041: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_py_pz.7b102449b962a9de0778.glb"
  },
  48044: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_ny_pz.dacd39cf27fd66fb8d1a.glb"
  },
  48051: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz.ef1c4516e1ffbcf811a2.glb"
  },
  48058: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_px.ab3b6063176991833e75.glb"
  },
  48060: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_px_py.0edbde347f3012476955.glb"
  },
  48065: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_px_py_pz.495a995d9f932d8fab0b.glb"
  },
  48074: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_px_pz.e3e1f48a1d1e5d9ee4a1.glb"
  },
  48076: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_py.dbfc7fb32c140963c08b.glb"
  },
  48083: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_py_pz.81ccfb336084e3fa577b.glb"
  },
  48088: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_nz_pz.cc87f2c598308d562978.glb"
  },
  48096: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_px.9e41b73ef011ffee66ea.glb"
  },
  48103: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_px_py.3d608b17a37b4613167f.glb"
  },
  48106: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_px_py_pz.f1fe2f58bf6e862d9173.glb"
  },
  48113: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_px_pz.94b3d6e4117770f96697.glb"
  },
  48119: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_py.dccb722acc03431af9bd.glb"
  },
  48121: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_py_pz.e4bb2d40a0c1ba9da732.glb"
  },
  48127: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nx_pz.0588de1d3218ea60e964.glb"
  },
  48134: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny.e0d0131e2387d5945f98.glb"
  },
  48143: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz.9006463b1f64dac83a9a.glb"
  },
  48149: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_px.1ede4fe27827979e2e03.glb"
  },
  48158: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_px_py.8bb126fe8da5934dd368.glb"
  },
  48160: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_px_py_pz.404995ea22a8ced61032.glb"
  },
  48167: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_px_pz.67fcc6113bb375cb50a3.glb"
  },
  48176: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_py.00fb5577be690f9e43b3.glb"
  },
  48179: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_py_pz.395661b61d9cbca89e55.glb"
  },
  48181: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_nz_pz.3be10b4d312d728780d2.glb"
  },
  48189: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_px.32492a7c7270b7ce2011.glb"
  },
  48197: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_px_py.df836d7685d4b950d9c6.glb"
  },
  48204: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_px_py_pz.e0ce4eb4b6972e195c51.glb"
  },
  48206: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_px_pz.f60ea06e41627ba57c1b.glb"
  },
  48209: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_py.464a7b3715d9b1c9a72e.glb"
  },
  48214: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_py_pz.973cdc793fb92aa54e54.glb"
  },
  48222: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_ny_pz.fef3705aaecf6f9be119.glb"
  },
  48225: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz.1b240e8ee91a0d50bcee.glb"
  },
  48233: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_px.d30cc078bb9f2a29d268.glb"
  },
  48240: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_px_py.c1123eb5c2f63b3e3412.glb"
  },
  48246: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_px_py_pz.f5da65a138361b2a8709.glb"
  },
  48254: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_px_pz.e1312edf73c98a8ccda9.glb"
  },
  48257: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_py.466cee7ce6fb609e0067.glb"
  },
  48264: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_py_pz.d09739fa3d081b752248.glb"
  },
  48268: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_nz_pz.f87d5ded07da2697aa9c.glb"
  },
  48274: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_px.b7885e6375f5697dd42a.glb"
  },
  48283: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_px_py.cc73936034ae5b4f4cf1.glb"
  },
  48291: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_px_py_pz.a6389b0c323cfae22abc.glb"
  },
  48293: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_px_pz.68ed2bdfd158dc08fd14.glb"
  },
  48298: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_py.7bec0e40bb0ddc06d354.glb"
  },
  48305: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_py_pz.df64db5753465cf582fe.glb"
  },
  48311: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_fluid_pipe_pz.3e445f247d6209e26dfc.glb"
  },
  48315: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_none.959fb60326c0161899f5.glb"
  },
  48320: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx.4a2afed9b2bfdf9e84d5.glb"
  },
  48328: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny.7f8a49da3e5df85d2e05.glb"
  },
  48333: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz.7183a2ad910ac1b8265c.glb"
  },
  48335: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_px.bbdca7e7e719fac8f40a.glb"
  },
  48343: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py.33e9d28887905dae25a0.glb"
  },
  48351: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py_pz.3e4b5e2d710523af450d.glb"
  },
  48356: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_px_pz.86210e41b8794c4c52b6.glb"
  },
  48362: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_py.725970eaab3eb4d77a3a.glb"
  },
  48371: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_py_pz.df04defee063aabe1b73.glb"
  },
  48377: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_nz_pz.c6bc0fc76688d0a555ae.glb"
  },
  48381: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_px.4d09672bb6825b5bbbfc.glb"
  },
  48387: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_px_py.7944c7a0db75e620d730.glb"
  },
  48391: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_px_py_pz.f20f4999f65c57425866.glb"
  },
  48397: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_px_pz.faf8f8529d0ce91fdf4c.glb"
  },
  48401: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_py.2fedfca3f35bfd9e1bb9.glb"
  },
  48408: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_py_pz.dba20102b9f56f990c88.glb"
  },
  48414: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_ny_pz.5d1790a75590383e773f.glb"
  },
  48422: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz.49274c43aeed26fd4ef4.glb"
  },
  48431: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_px.0f605f55ca48a5c38566.glb"
  },
  48436: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_px_py.6df1fee6834ff3ae1af8.glb"
  },
  48439: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_px_py_pz.2f50a237bd408d1e4108.glb"
  },
  48443: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_px_pz.35311a6efb185379d57c.glb"
  },
  48450: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_py.0dbcb74a8e6a8fb91705.glb"
  },
  48458: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_py_pz.db8056ea6e1319f8fa9b.glb"
  },
  48466: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_nz_pz.3a6446eef5f2a19a7c02.glb"
  },
  48473: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_px.f714bdceb7ff8bc2d7c6.glb"
  },
  48477: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_px_py.eff04d4a8f8d04179080.glb"
  },
  48485: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_px_py_pz.dc9261285252e2d87c11.glb"
  },
  48488: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_px_pz.fbe75a80c3962b4c230f.glb"
  },
  48493: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_py.228fef41c76416f85a40.glb"
  },
  48499: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_py_pz.81fb33caf62cd77ece9e.glb"
  },
  48507: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nx_pz.fb6c0915f37d826ecb71.glb"
  },
  48510: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny.72c5fefbc407e3c94d7d.glb"
  },
  48519: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz.8453217dfc81d9fdb4cc.glb"
  },
  48524: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_px.c2ecdfbc9a2258b2c86d.glb"
  },
  48529: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_px_py.b92643b6f97070d606a4.glb"
  },
  48534: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_px_py_pz.8a680ed2ee9d22912920.glb"
  },
  48539: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_px_pz.5caf67dd0ba555991bca.glb"
  },
  48542: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_py.f0b5c8c68b7c2818a273.glb"
  },
  48551: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_py_pz.30bf4c1260a9a927edc7.glb"
  },
  48557: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_nz_pz.e8449324b1596b364cbe.glb"
  },
  48565: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_px.f0fff38f58a9ed5eb8ac.glb"
  },
  48574: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_px_py.eecc9a2ac147fc45443a.glb"
  },
  48581: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_px_py_pz.3258fa80a7509e535947.glb"
  },
  48589: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_px_pz.ea5abb502c75a940d968.glb"
  },
  48594: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_py.4ac410ed28621878d2b1.glb"
  },
  48597: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_py_pz.52cef6879cd15e96ca1b.glb"
  },
  48602: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_ny_pz.32fd00ca42bc17e2c68e.glb"
  },
  48607: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz.ca2c954a587efe162c35.glb"
  },
  48614: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_px.3bcea64e47319b7b880f.glb"
  },
  48616: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_px_py.f3e6e6ba5278c97914bf.glb"
  },
  48623: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_px_py_pz.558697ec67340fc619af.glb"
  },
  48631: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_px_pz.1671d3e52c6ef989150c.glb"
  },
  48635: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_py.eb93ca9526bf9d09ba86.glb"
  },
  48644: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_py_pz.de8a55687ae9be5ba4d9.glb"
  },
  48649: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_nz_pz.f6103bfd1cdf00ee3161.glb"
  },
  48652: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_px.a3a44662d7f1190bf941.glb"
  },
  48660: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_px_py.405ca5ab6d9abaf15acf.glb"
  },
  48662: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_px_py_pz.6fc123c7df272fe11b5d.glb"
  },
  48664: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_px_pz.0a315850e3bbae5f4e65.glb"
  },
  48669: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_py.27580a9a7a6a5e467959.glb"
  },
  48673: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_py_pz.b7029c4acc73fe990edc.glb"
  },
  48678: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/baf2_water_pipe_pz.524026c434bf1312ee9a.glb"
  },
  48683: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beam_arm.b18aa154bc2c6abe6fc8.glb"
  },
  48686: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beam_arm_mirrored.51021c5f58fbb0547768.glb"
  },
  48692: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bebek_bebek_bebek.213c53f222e7fa6eabb2.glb"
  },
  48698: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bin.9fa9eefc2e94c7d9b671.glb"
  },
  48700: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bobino_musculino.5299a37ff20b22d4b554.glb"
  },
  48704: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bobzilla.b6343c4b9c8fd834bd27.glb"
  },
  48711: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/boiling_pot.8c86fd13aab6c90f8c6e.glb"
  },
  48715: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bone_antlers_model.2263c631b87b5497cf0b.glb"
  },
  48720: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/boss_target.7461ecf8acb8547cbe45.glb"
  },
  48722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brra_brra_pachim.877c62f4a0a46afdfac9.glb"
  },
  48726: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_barrel_back.0e93895efce3885c17c7.glb"
  },
  48731: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_barrel_front.2b26819e9934a7658fa8.glb"
  },
  48734: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_bottom_back.315dd2aba0300464ac4e.glb"
  },
  48736: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_bottom_front.8bfe273a143f4b48c4fa.glb"
  },
  48742: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_top_back.251ffa29da6924db15be.glb"
  },
  48749: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cannon_top_front.ae1de6c9084d8b5d7c8d.glb"
  },
  48758: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/capitano_explovissimo.f892d427e38849f88e55.glb"
  },
  48761: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cappuccino_ninjino.d8d33979c4bc5bb10825.glb"
  },
  48768: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_black_model.4e2ca86172657d75d22d.glb"
  },
  48772: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_blue_model.d1390a0d4896851445b2.glb"
  },
  48780: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_brown_model.5f252fa89cc2a59aefa8.glb"
  },
  48783: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_cyan_model.2ea1e9bf8e018ead4a5a.glb"
  },
  48789: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_gray_model.9a587763cbf12b2f28e6.glb"
  },
  48792: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_green_model.f14e23acb31944480b22.glb"
  },
  48801: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_light_blue_model.3063d4f50964e9d4c3d7.glb"
  },
  48810: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_light_gray_model.b94a423a18f30bf0a5b6.glb"
  },
  48814: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_lime_model.7768b17ad76779125eee.glb"
  },
  48820: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_magenta_model.54a3fc9bd4d62c98a6db.glb"
  },
  48828: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_orange_model.1973f2055fec73ac57e6.glb"
  },
  48833: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_pink_model.3683ae623bddd233a5fe.glb"
  },
  48835: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_purple_model.f37a0e1526c2ca4e2a7d.glb"
  },
  48838: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_red_model.cfd6e343a3fab0b6e25a.glb"
  },
  48843: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_white_model.6a52cd82a15248f76f1a.glb"
  },
  48845: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carpet_yellow_model.c7b7dce1e3573d9fd34f.glb"
  },
  48850: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage0_lava_model.de57c195bd97f3fb2e16.glb"
  },
  48858: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage0_model.fc6dd2ad394c327c2dc1.glb"
  },
  48860: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage1_lava_model.6197d89c39f4c13f42b9.glb"
  },
  48862: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage1_model.30ab224de60dd6576dda.glb"
  },
  48869: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage2_lava_model.81db0a3a753160a5993f.glb"
  },
  48872: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage2_model.cc0b8a17019285e9e191.glb"
  },
  48881: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage3_lava_model.906805ce52ff01217c09.glb"
  },
  48885: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage3_model.0b958f72eb984d0b0fee.glb"
  },
  48890: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage4_lava_model.94d5af3a2e78c1bf5475.glb"
  },
  48894: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage4_model.c52492e3df2205ce4273.glb"
  },
  48899: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage5_lava_model.a7136e0c606fe579056e.glb"
  },
  48903: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage5_model.d90ff33f15e468d91a75.glb"
  },
  48907: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chili_pepper_stage6_lava_model.36852b90667287605903.glb"
  },
  48916: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chimpanzano_bananano.2d445f2a0eb256e13a97.glb"
  },
  48922: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chopping_board.3c57d470d586e1dfeb2c.glb"
  },
  48930: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/crystal.dba112fa8a8394d8b1d5.glb"
  },
  48936: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/eclipse_dial.956489de2f80d089e04c.glb"
  },
  48944: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nx_ny.083a53c6f1c24a9757f0.glb"
  },
  48950: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nx_nz.801e1824437a8ace684b.glb"
  },
  48952: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nx_py.65f1e3264ff2283386bf.glb"
  },
  48958: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nx_pz.a448f59a6bb183c0e39c.glb"
  },
  48967: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_ny_nz.ecdf141d7d1653019c32.glb"
  },
  48975: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_ny_px.5f220c72639bc6ec1734.glb"
  },
  48983: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_ny_pz.4d504cfec957af83647e.glb"
  },
  48991: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nz_px.9b96308cd4ac5cd58ada.glb"
  },
  48996: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_nz_py.8465f28b8c684d7fb829.glb"
  },
  49e3: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_px_py.fd91d6d5eb2fc91daa8b.glb"
  },
  49008: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_px_pz.e917172f979aa356014a.glb"
  },
  49013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_elbow_py_pz.218c1542fa9adaeb5ba4.glb"
  },
  49017: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_nx.8bb0b2ad8f8644508347.glb"
  },
  49020: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_ny.b4afa7545f92319c62a3.glb"
  },
  49022: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_nz.c6ee96868c48ac35f608.glb"
  },
  49028: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_px.65915d43490b1937e3ba.glb"
  },
  49031: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_py.444a71977c0c1fbe4b5f.glb"
  },
  49038: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_end_pz.12c7d5085dec5f84915b.glb"
  },
  49047: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_isolated.97cfc28c33aacdb3e72a.glb"
  },
  49056: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_straight_x.e2a817762316f51651bc.glb"
  },
  49062: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_straight_y.bfa34910a1cde4b98d43.glb"
  },
  49068: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/extractor_pipe_straight_z.b47dc06b45b4886a5c6e.glb"
  },
  49071: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_nx.abdb1f2b92e67ec7a6f5.glb"
  },
  49073: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_ny.91a758aaffc187ebf84e.glb"
  },
  49082: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_nz.eaedcc3e56b6397a56bd.glb"
  },
  49087: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_px.f67d46338784b81dfa00.glb"
  },
  49091: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_py.6e32ecec254e8c9f62b9.glb"
  },
  49100: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/filter_pipe_input_pz.eaa83a9b426aefb06f04.glb"
  },
  49107: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/floor_quarters.a7383fb07de75c78acff.glb"
  },
  49116: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/football.4ed7b444dffd04850e1a.glb"
  },
  49119: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/frying_pan.88d74257d6db5f22a9dd.glb"
  },
  49126: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/glowing_mushroom.8a55fddc4cc5af4b0bb7.glb"
  },
  49131: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/glowing_mushroom_wall.77bbad965e1a6eb9b9eb.glb"
  },
  49135: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/gold_antlers_model.5033cbd20d5db323bd18.glb"
  },
  49143: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/hob_boiling.7aa8a7f33fcfaabb3c38.glb"
  },
  49152: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/hob_frying.c0d5b6b56a8e0d37c719.glb"
  },
  49156: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/il_wizardini_del_porko.16afd57bb54527352f48.glb"
  },
  49164: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/job_application.c8c3322a4d5b76f401c4.glb"
  },
  49168: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/john_beef.f285b5bbbe3270e84f4e.glb"
  },
  49170: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jump_pad.31f58abe195cbf81d544.glb"
  },
  49177: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jump_pad_strong.199b102ca146e54d6f26.glb"
  },
  49182: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jump_pad_super.01623abb40ae27b2f5c3.glb"
  },
  49189: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jump_pad_weak.9865db358d387cdb3808.glb"
  },
  49195: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/kitchen_worktop.93738fa632ca0cd3c887.glb"
  },
  49198: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/landing_pad.6cf815cc5adc6357aa7e.glb"
  },
  49207: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lantern.b4f5e080292b6bcec9de.glb"
  },
  49215: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lantern_wall.d700566f3dbc7c5edfb5.glb"
  },
  49219: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lily_pad_model.fe52332121384cb7a7c1.glb"
  },
  49222: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lucchia_blocchi.cbeaea2490a784825f22.glb"
  },
  49224: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_nx.8363ba1ae35163cc614b.glb"
  },
  49232: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_ny.2d49f0baa47b9e673cd9.glb"
  },
  49235: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_nz.fa00b8fe22439a87a135.glb"
  },
  49243: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_px.0dbb5a9dfc66657f41b0.glb"
  },
  49245: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_py.ea13e5adbf80924e036f.glb"
  },
  49251: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/merger_pipe_output_pz.9dd053b2f431de48e28d.glb"
  },
  49257: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/monsieur_bedwar.11e13eee2b04c9fa7ec3.glb"
  },
  49266: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mortar_goblin.b50e40421dd86c0d1024.glb"
  },
  49274: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing.b20df80c01a72cbebe5b.glb"
  },
  49277: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_bottom.b1a0883ecb1db88792a5.glb"
  },
  49280: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_bottom_left.8c07a91fec14b3745eb4.glb"
  },
  49285: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_bottom_right.1b09f2bb2d6f0822151e.glb"
  },
  49291: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_horizontal.6a5ef177dfb97d0f375f.glb"
  },
  49296: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_horizontal_left.be67a73bf033df090585.glb"
  },
  49303: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_horizontal_right.5838e354cd916a6852ca.glb"
  },
  49307: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_left.11a2206b2f5b12e2068d.glb"
  },
  49311: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_leg.838d46ae86129005cf46.glb"
  },
  49319: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_right.5f3dcaaf00c0d002a496.glb"
  },
  49322: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_single.e6f346b9cfaccbdb42be.glb"
  },
  49325: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_top.a79e1fd678b8fe09c969.glb"
  },
  49327: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_top_left.05c9e273ed39b69b3f7e.glb"
  },
  49333: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_top_right.211791c2f6cdaf03fa17.glb"
  },
  49335: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_vertical.35aea38fcfa1b3fb9bf4.glb"
  },
  49342: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_vertical_bottom.ada88480f62e41f1dab4.glb"
  },
  49346: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_standing_vertical_top.5dc2db1fee41788dbb17.glb"
  },
  49353: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall.ff9a27ba5731df12e44d.glb"
  },
  49360: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_bottom.2d29aaf8b2a08f409c26.glb"
  },
  49367: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_bottom_left.5260e03cd66029355bcc.glb"
  },
  49373: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_bottom_right.3c7faeeb89cf5fd8d3a0.glb"
  },
  49381: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_horizontal.6a2c8562a4ea173fbdcf.glb"
  },
  49384: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_horizontal_left.f5209b80e6eadef6c78c.glb"
  },
  49391: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_horizontal_right.a39a51b5f9417a5cd42b.glb"
  },
  49396: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_left.6e5638da4acaefd2b669.glb"
  },
  49398: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_right.b8cde43e7de962bc619b.glb"
  },
  49400: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_single.e18ee19c8ff0b65d473a.glb"
  },
  49407: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_top.a639d40d4c6d0036db3d.glb"
  },
  49416: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_top_left.b988fb63ca89b93a1707.glb"
  },
  49419: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_top_right.849243aaf2ad5ae08bb7.glb"
  },
  49421: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_vertical.b0cb186a9af1969e972a.glb"
  },
  49430: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_vertical_bottom.0e82577bb9aab80792b5.glb"
  },
  49433: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/noticeboard_wall_vertical_top.b98b5902779b57fbf71e.glb"
  },
  49442: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nx_ny.89d1b6e36a353106be6b.glb"
  },
  49450: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nx_nz.d2945b07b0dd4b771758.glb"
  },
  49455: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nx_py.d0109ae52ed03aa6715f.glb"
  },
  49459: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nx_pz.bfc5f0b1ae6f9c18a40f.glb"
  },
  49468: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_ny_nz.8304c11ee0165631f127.glb"
  },
  49476: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_ny_px.bb670945340fa6f8f288.glb"
  },
  49482: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_ny_pz.1e85cf482585d84e131b.glb"
  },
  49490: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nz_px.7be0416b3e45d99c5ea7.glb"
  },
  49495: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_nz_py.6287e8f1c1697d935a4f.glb"
  },
  49502: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_px_py.ae824fd68bdb60d85305.glb"
  },
  49509: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_px_pz.8ff41b9727fa9c40a08c.glb"
  },
  49517: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_elbow_py_pz.2515de3d522a06906080.glb"
  },
  49521: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_nx.4bb1d3f0432ed2af5dfa.glb"
  },
  49530: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_ny.0499413fa7b695d8a259.glb"
  },
  49532: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_nz.746b3dcd8ba70dbf8517.glb"
  },
  49540: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_px.5cbbfe1ad98dd922a45f.glb"
  },
  49545: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_py.3115f8060017dfe0962a.glb"
  },
  49549: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_end_pz.6a4dabb47d14533ac501.glb"
  },
  49553: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_isolated.a615f633db853fd14881.glb"
  },
  49562: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_straight_x.134b8b3ba65a01487e33.glb"
  },
  49569: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_straight_y.0e2eb7b04f7deb08a5ee.glb"
  },
  49577: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pipe_straight_z.d100e5801643952af4d3.glb"
  },
  49581: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_full.566394d4c3c00b12ed5c.glb"
  },
  49585: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northeast_1.1b78d84678e0822df680.glb"
  },
  49589: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northeast_2.7cc566556ea957a48357.glb"
  },
  49597: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northeast_3.6c46832fa06619771f01.glb"
  },
  49603: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northeast_4.8fff6428090594ba7ca3.glb"
  },
  49611: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northeast_5.c4183e7f8f4860746f01.glb"
  },
  49615: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northwest_1.4aece19484ab7481c0f8.glb"
  },
  49624: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northwest_2.bea9981c3000eae9e630.glb"
  },
  49629: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northwest_3.56c2dc6b11ea84446c6c.glb"
  },
  49638: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northwest_4.d0f3dfd5e400daa181a6.glb"
  },
  49647: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_northwest_5.af721581e1c9e25fcc90.glb"
  },
  49655: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southeast_1.75bc6b110264eb07925f.glb"
  },
  49658: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southeast_2.fd011c1abced7d2b8f75.glb"
  },
  49662: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southeast_3.4aaae59bf5829933e5a5.glb"
  },
  49666: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southeast_4.cdf4a53d1cbba7d2edbd.glb"
  },
  49670: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southeast_5.547ea7fbca890f5ad93c.glb"
  },
  49678: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southwest_1.6f2e562cc9f76e48d080.glb"
  },
  49687: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southwest_2.9e8538c937feed7ece7c.glb"
  },
  49689: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southwest_3.4b18da35e90928993303.glb"
  },
  49691: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southwest_4.73af81acdef9ce350c5e.glb"
  },
  49694: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rocket_southwest_5.a7eb6222be481c158bb8.glb"
  },
  49698: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rune_sigil.9b59b6bef68661218e8a.glb"
  },
  49702: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/slicing_board.e1532c6c1c707054a75e.glb"
  },
  49708: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/slime_trail.6ff9def1822a8515033d.glb"
  },
  49715: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/splitter_pipe.30bb97ca16337e8e94c1.glb"
  },
  49721: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch.1e6b6b8a1126549115db.glb"
  },
  49724: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_black.aa4c96ef329864314118.glb"
  },
  49727: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_blue.a4e5a315b5d19facff2b.glb"
  },
  49736: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_brown.2492f429b119d90eaabf.glb"
  },
  49743: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_cyan.f70fa0acefa4438ca1ef.glb"
  },
  49752: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_gray.4bacfaaf232b69d26451.glb"
  },
  49755: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_green.0608d22726ca2777c95f.glb"
  },
  49759: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_light_blue.62e3685506970aa03c64.glb"
  },
  49762: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_light_gray.db83690e2a44822add32.glb"
  },
  49767: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_lime.b46ac9e8988e35c3288c.glb"
  },
  49770: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_magenta.de7355c3d8987a07f857.glb"
  },
  49774: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_orange.03ed5c026827b3cf2013.glb"
  },
  49777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_pink.5db80ba10ee7475d2600.glb"
  },
  49782: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_purple.d0b7146906e60d1fd2d2.glb"
  },
  49784: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_red.67e16d0a0c6f53e7a265.glb"
  },
  49787: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall.72812b0fd7c11d446243.glb"
  },
  49790: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_black.a14c730eed9b81f210ea.glb"
  },
  49797: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_blue.11c6d1bc0a5df54f2f52.glb"
  },
  49800: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_brown.4e4dd4868cf49436301b.glb"
  },
  49802: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_cyan.7b7c2d579c22524bf6aa.glb"
  },
  49807: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_gray.e8c4c559d0cd016080f3.glb"
  },
  49809: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_green.52ecdfc1f31282d86f11.glb"
  },
  49815: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_light_blue.5db342be65a55259aa06.glb"
  },
  49821: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_light_gray.a9f2c6d92a3724f542de.glb"
  },
  49824: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_lime.d40ae3542fd492421b17.glb"
  },
  49828: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_magenta.0c7af89f15198e706870.glb"
  },
  49831: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_orange.d8ef2a8afa619dcbb12b.glb"
  },
  49837: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_pink.0706debd37cea30009bf.glb"
  },
  49840: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_purple.42439e46c9b24df1caa1.glb"
  },
  49842: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_red.368d969024275fa15a18.glb"
  },
  49844: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_white.5abd9dc1f94eb8df8f30.glb"
  },
  49853: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_wall_yellow.6efed0f8cb8562199685.glb"
  },
  49856: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_white.c2bdee6bcb7a255e54b3.glb"
  },
  49860: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_yellow.ae9e9c66a1e864aaf031.glb"
  },
  49863: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/twirlina_cappucina.dde85128f997c1c0c306.glb"
  },
  49866: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/ufo.617db0748f22cfa06954.glb"
  },
  49872: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/vending_machine_bottom.65bbb604112fa01806b4.glb"
  },
  49878: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/vending_machine_top.0cd950e833ce37f0078b.glb"
  },
  49886: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_black.7ec704f92ce13118854f.glb"
  },
  49893: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_blue.3fdf12cfb1bbe5df046f.glb"
  },
  49895: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_brown.f99e95495efa3b445f3b.glb"
  },
  49897: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_cyan.408c34abe40c4e583b69.glb"
  },
  49905: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_green.221d9d94948ba07f0146.glb"
  },
  49907: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_grey.9aec5ad30559daeeacb9.glb"
  },
  49910: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_light_blue.93df0e67d5b31edb67be.glb"
  },
  49918: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_light_grey.cac0d9e0d33fa0302c0b.glb"
  },
  49922: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_lime.250cf152a4c53c1ea267.glb"
  },
  49926: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_magenta.789452a86659bce5f701.glb"
  },
  49931: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_orange.34009e0bedfd3effd879.glb"
  },
  49933: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_pink.205d0a0f18ca0e567d9d.glb"
  },
  49942: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_purple.53d0ee9cce40b3f48b5b.glb"
  },
  49950: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_red.715fb6f8c739753fecfc.glb"
  },
  49953: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_white.f1c1812799645251bad6.glb"
  },
  49957: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wave_yellow.5ebbbecde58c9cf1c0d4.glb"
  },
  49966: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheel.90ee13b9d828e804dee1.glb"
  },
  49970: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nx_ny.b7f4b211f73095120e64.glb"
  },
  49975: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nx_nz.59840571f949f7bc8768.glb"
  },
  49983: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nx_py.d4d27e93e1b31e22f79a.glb"
  },
  49992: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nx_pz.de207cefcd8316ec8fcd.glb"
  },
  49998: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_ny_nz.acdc2b53b3ccff56ccb4.glb"
  },
  50003: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_ny_px.f24ba6eced5f99b313a7.glb"
  },
  50010: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_ny_pz.f8520178fb95b616edd5.glb"
  },
  50012: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nz_px.d97c2eb6671a072d0a59.glb"
  },
  50019: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_nz_py.6b6c81abcfca24a7ab43.glb"
  },
  50021: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_px_py.7492fefcc9a22a895dfc.glb"
  },
  50028: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_px_pz.9934c295bea0122d439d.glb"
  },
  50037: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_elbow_py_pz.4ccddb5f0bc632ff3084.glb"
  },
  50043: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_nx.38726e55cc09c7f851e3.glb"
  },
  50048: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_ny.9704daa44c9d4579056a.glb"
  },
  50050: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_nz.c2763322027fba73cc8e.glb"
  },
  50053: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_px.703db8100fe7cf8cfdad.glb"
  },
  50057: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_py.8f969bdae632686ac91c.glb"
  },
  50060: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_end_pz.fa6d20d5fb9c7397c595.glb"
  },
  50069: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_isolated.db20b8ec3a9d3a112352.glb"
  },
  50073: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_straight_x.cf855e04a4511b9d2d5a.glb"
  },
  50075: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_straight_y.830de69a478259bbbcb1.glb"
  },
  50082: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_straight_z.c10b101b6493639cadf0.glb"
  },
  52681: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/allium.f1d3e796bfcb373fe1b5.png"
  },
  53629: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/alloy_kiln_top.0d64a8c946004b7849bb.png"
  },
  53793: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/aspen_door_bottom.77c3608b449f7420a6d5.png"
  },
  53703: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/aspen_door_top.69844a9807e427316500.png"
  },
  52688: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/aspen_sapling.70b524dbb33402ad786e.png"
  },
  52693: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/attached_banana_stem.dea182236c8ed756a26f.png"
  },
  52698: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/attached_banana_stem_wrapper.a74f40cfdeb0cce7af8e.png"
  },
  52701: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/attached_melon_stem.25f734cf50ce7da42ec3.png"
  },
  52704: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/attached_melon_stem_wrapper.250a4219f803318c75cd.png"
  },
  53339: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/auto_bench_top.c8e545776e504211b183.png"
  },
  52713: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/autumn_fern.7add7b408d40f9b1198a.png"
  },
  52716: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/azure_bluet.3bb3fd07608ff837c974.png"
  },
  53705: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/banana_block_bottom.2a0a94226a1cd31d052c.png"
  },
  52722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/banana_stem.a74f40cfdeb0cce7af8e.png"
  },
  52726: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beetroot_plant_stage0.701b11f9e3dece9dc677.png"
  },
  52730: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beetroot_plant_stage1.ee6a1e21484824a02235.png"
  },
  52739: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/beetroot_plant_stage2.fb948eadbea5684fe90f.png"
  },
  53782: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/belt_tunnel_exit_top.91bf68125018003eadfe.png"
  },
  53541: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/belt_tunnel_top.d5c39e4082a79dceacf4.png"
  },
  52742: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/berry_bush_stage0.09ac0a367c3abb28554e.png"
  },
  52750: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/berry_bush_stage1.ae24d9e0ca4573439543.png"
  },
  52755: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/berry_bush_stage2.34cec7246bb15ab6464a.png"
  },
  53854: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/black_glazed_terracotta.e352b206100b41877123.png"
  },
  53729: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/black_spawn_block_top.19ff0671d98f45ed25ed.png"
  },
  53441: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/black_stained_glass.e12bff980d21df8ed15b.png"
  },
  53873: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blue_glazed_terracotta.59ca448a380280079fde.png"
  },
  52764: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blue_orchid.e4d9386ac9e9c6724c49.png"
  },
  53740: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blue_spawn_block_top.d01a14894496cec4bd2c.png"
  },
  52771: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blueberry_bush_stage0.4fff8348c62acdeef329.png"
  },
  52773: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blueberry_bush_stage1.f51f91487636ea3c2344.png"
  },
  52777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/blueberry_bush_stage2.3f1ba2b2af712d0a678a.png"
  },
  53850: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/board_full.51012967051441d655f0.png"
  },
  53497: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brown_glazed_terracotta.195a379114520d8bebb8.png"
  },
  52786: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brown_mushroom.6a75c1838db883657f2b.png"
  },
  53649: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/brown_spawn_block_top.7203ef0370d10b4ea83b.png"
  },
  53416: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/burner_drill_top.327a04f28af7e8d3a3f7.png"
  },
  53507: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cactus_side.f44506929a369ea16364.png"
  },
  53736: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/camel_painting_art.3467288986af902ea3ae.png"
  },
  53814: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/camel_painting_art_option2.97d96b4e06ccfd508bf4.png"
  },
  52794: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carrot_plant_stage0.3ca5c7654c53bb77ef59.png"
  },
  52799: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carrot_plant_stage1.4e9b5481c07508a4af12.png"
  },
  52803: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/carrot_plant_stage2.6448f6f9ca9c85c9d5a5.png"
  },
  52812: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/catnip.2d59e5f426014213097b.png"
  },
  52815: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cauliflower_plant_stage0.56fbf3896a2598fe226b.png"
  },
  52819: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cauliflower_plant_stage1.335c6c67d2617cd61e09.png"
  },
  52826: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cauliflower_plant_stage2.5238ee0e7a9daf763e05.png"
  },
  53911: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cedar_door_bottom.3f1ea002b95bba9366b5.png"
  },
  53725: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cedar_door_top.f5624bebbfbbe31ee2c1.png"
  },
  52833: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cedar_sapling.7eb472555ac15f2c7d8a.png"
  },
  53393: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/centrifuge_top.ea55fcc4f5cf007f9607.png"
  },
  53360: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/checkpoint_block.56ad5a4f7f2fe5c77244.png"
  },
  53639: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cherry_door_bottom.084d9df0a2e70e01f925.png"
  },
  53669: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cherry_door_top.ca128b8cdd351da5237f.png"
  },
  52842: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cherry_sapling.fffb87301cd4a74137fe.png"
  },
  53713: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/chest_top.835a84c23ea1ccc51e49.png"
  },
  53354: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cobblestone_mossy.01889a92f00bf5214dc3.png"
  },
  52846: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cobweb.9e0d381641ba6a1f1d53.png"
  },
  52855: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/coffee_plant_stage0.aad94d45ff9205a0b893.png"
  },
  52859: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/coffee_plant_stage1.6925958c8be7f0d73049.png"
  },
  52861: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/coffee_plant_stage2.832ff40be200d2ed5724.png"
  },
  53699: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/collider_top.c2015f5857885d440962.png"
  },
  53484: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/condenser_top.6036395d1b2deba98fd0.png"
  },
  53308: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/coolant_mixer_top.3ae29b3909493e845e10.png"
  },
  52865: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage0.7d1542728a061c60e27c.png"
  },
  52872: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage1.4385d800bda0cb812677.png"
  },
  52878: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage2.9ce23c9a315366c8fb0c.png"
  },
  52880: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage3.549b10d86fd6d935e04c.png"
  },
  52882: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage4.8089c4d097969c9f8226.png"
  },
  52888: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/corn_stage5.ae46e59459e23d47c53f.png"
  },
  52890: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cornflower.5dffa4efb19990928255.png"
  },
  52896: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cotton_plant_stage0.246ca0e73d88cebd3299.png"
  },
  52898: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cotton_plant_stage1.48f3651c69f090a10a44.png"
  },
  52905: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cotton_plant_stage2.90a27c9bfc2871b19465.png"
  },
  52908: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cotton_plant_stage3.ebfce7f595777e193710.png"
  },
  53691: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/crop_harvester_top.aac6e464fecc85fad376.png"
  },
  53459: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/crusher_top.22a572674aebf239c8a5.png"
  },
  53708: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/crystal_vat_top.4a74d712b2f31d7ffa92.png"
  },
  53451: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/custom_lobby_block_top.fa8eca29a43acecb3c1c.png"
  },
  53893: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cyan_glazed_terracotta.12e668d83d4ff6dd1a9d.png"
  },
  53832: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/cyan_spawn_block_top.8e8653ce617f2f08101f.png"
  },
  52916: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dandelion.1f8c4b42cb75491d1dbf.png"
  },
  52924: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dead_bush.1ba169f3ecbdd9546b12.png"
  },
  53821: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/deep_drill_top.9606e35119db0f884dfa.png"
  },
  53374: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_0.7fd6d0a2eade998ed079.png"
  },
  53365: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_1.6cb2d757c663046683cd.png"
  },
  53386: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_2.39c12ee9bab5846e2bab.png"
  },
  53380: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_3.3c8a2ddc4ea1bfd61055.png"
  },
  53333: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_4.2dd2cb853825c98ed904.png"
  },
  53330: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_5.a61b97c29628a6d258cf.png"
  },
  53350: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_6.631aded6f7705596c423.png"
  },
  53348: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_7.11442a780157758b2f9b.png"
  },
  53398: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_8.8de000c2ecadd8a7d32c.png"
  },
  53396: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/destroy_stage_9.b628ac3539f0c5788122.png"
  },
  53491: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/electric_drill_top.c3bbb4fbef10fbdb75b5.png"
  },
  52927: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fallen_pine_cone.666ae278dfece2f5f54f.png"
  },
  53432: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/football_block.2163f2e99f10969aa852.png"
  },
  53518: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/gray_glazed_terracotta.3acbabb47afe933c9e0d.png"
  },
  53642: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/gray_spawn_block_top.bb96b2f595d3c991808b.png"
  },
  53501: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/green_glazed_terracotta.e2e4bb19f629f2fab011.png"
  },
  53784: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/green_spawn_block_top.d785b09c3ee0537c8412.png"
  },
  53551: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/iron_chest_bottom.45762a27230a38c08e0c.png"
  },
  53711: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/iron_chest_top.9378df2839f1300ee2ab.png"
  },
  53522: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jungle_door_bottom.3de04a4b0c8a6cc3b500.png"
  },
  53617: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jungle_door_top.091112a6f1c5bc5daf1d.png"
  },
  52936: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jungle_sapling.80af0c3d116342bb10e7.png"
  },
  52942: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jungle_tall_grass_bottom.e1f103c983be99d8673f.png"
  },
  52944: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/jungle_tall_grass_top.73290a2f6ccf0a351750.png"
  },
  52949: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lettuce_plant_stage0.61bb8697576c8d2ec2d4.png"
  },
  52958: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lettuce_plant_stage1.a4fd6e8a34e339f87394.png"
  },
  52966: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lettuce_plant_stage2.0787bb4f588e5c42c47d.png"
  },
  53486: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/light_blue_glazed_terracotta.a94a553a7f669f30e083.png"
  },
  53324: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/light_blue_spawn_block_top.f419ebbe177b2f84b066.png"
  },
  53774: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/light_gray_glazed_terracotta.0e9ff5173786ae6b9091.png"
  },
  53424: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/light_gray_spawn_block_top.24eb46e4041bc46655fe.png"
  },
  53633: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/light_gray_stained_glass.4a5893d03148ce0389d6.png"
  },
  52968: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lily_of_the_valley.5252d9ae741dc8dc75a3.png"
  },
  53889: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lily_pad.6200083b756c3de49a3a.png"
  },
  53408: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lime_glazed_terracotta.a79304d4e29fdd0fece0.png"
  },
  53614: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/lime_spawn_block_top.7baf535efbf34967f621.png"
  },
  53747: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/magenta_glazed_terracotta.dff2219d98fde64710f9.png"
  },
  53801: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/magenta_spawn_block_top.a63f68c6a57e1d1e79f5.png"
  },
  53403: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mango_door_bottom.f10bf92c4d3b3c609f9e.png"
  },
  53656: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mango_door_top.2a3d2693e5e184523ee3.png"
  },
  52977: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mango_sapling.cc1331b58aa3cb30a4df.png"
  },
  53456: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/maple_door_bottom.94f27cb29279622bda1e.png"
  },
  53548: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/maple_door_top.d44aa506efdd63d3ab8e.png"
  },
  52986: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/maple_sapling.592455846ade7642267d.png"
  },
  52994: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/melon_stem.c728ad74f87544144f7a.png"
  },
  53903: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mob_farm_top.ec4a5a96b506c1434590.png"
  },
  53569: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/moonstone_chest_bottom.775190e522de9869378b.png"
  },
  53405: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/moonstone_chest_top.84c343c67b866ae67727.png"
  },
  53001: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/net.d475635049459ae3f79f.png"
  },
  53607: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/orange_glazed_terracotta.1bbdee0310f62d8d539f.png"
  },
  53537: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/orange_spawn_block_top.8d6dc5a642bc70d9325e.png"
  },
  53010: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/orange_tulip.e718114316934958b914.png"
  },
  53015: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/oxeye_daisy.ad1246a1daa7482659c3.png"
  },
  53546: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/palm_door_bottom.ce50b436e4f2209d4301.png"
  },
  53573: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/palm_door_top.cd7dbb764cf674fc1ce0.png"
  },
  53017: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/palm_sapling.5fc6b3910fbff5f7a4d7.png"
  },
  53025: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/parsnip_plant_stage0.2bc7dac8e8a3f14d908e.png"
  },
  53034: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/parsnip_plant_stage1.7e3b648c278c29b5f64a.png"
  },
  53041: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/parsnip_plant_stage2.d6b992467cb774ad7944.png"
  },
  53447: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pear_door_bottom.3a208aa390fd4a5d5cad.png"
  },
  53738: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pear_door_top.15589d201da9a5901cbe.png"
  },
  53043: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pear_sapling.2ce83819d5f323b508ee.png"
  },
  53674: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pine_door_bottom.b5915523060d64916e58.png"
  },
  53660: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pine_door_top.fab478f86f27aebae6f4.png"
  },
  53049: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pine_fern.9246ba38000c33971c01.png"
  },
  53054: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pine_grass.9339a2186b62aeb03004.png"
  },
  53058: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pine_sapling.d0610704a84849c99e66.png"
  },
  53684: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pink_glazed_terracotta.13d73734274447b1af96.png"
  },
  53605: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pink_spawn_block_top.97528a0ba6f65aa9ed1d.png"
  },
  53066: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/pink_tulip.f6463eb4309d4df8c87c.png"
  },
  53838: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/plant_cacti_by_arthur.85c69d2486a4eb1def2c.png"
  },
  53809: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/plum_door_bottom.1f24b93ce57192364438.png"
  },
  53527: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/plum_door_top.9cf00530965693a3081d.png"
  },
  53073: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/plum_sapling.2c777962832e4c8e1e82.png"
  },
  53078: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/poppy.186306dc2add85b7d191.png"
  },
  53081: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/potato_plant_stage0.768a80a450537d9cd8b3.png"
  },
  53088: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/potato_plant_stage1.34dd9255d4b7102cde08.png"
  },
  53092: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/potato_plant_stage2.9dc305c0bbd670b36a70.png"
  },
  53677: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/press_top.a6ce196f8d2e836ace20.png"
  },
  53686: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/purple_glazed_terracotta.68dca8e4917bf52f3355.png"
  },
  53438: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/purple_spawn_block_top.e2685fe6babda00c0501.png"
  },
  53753: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/radar_screen0.b432239839e3aa20b22d.png"
  },
  53756: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/radar_screen1.56f9b545957c73806acf.png"
  },
  53764: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/radar_screen2.ad7e4fc5a79d47a85dfa.png"
  },
  53770: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/radar_screen3.8016fc79f13a3a7c6e11.png"
  },
  53477: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/recycler_top.9c08c0ca903cda87e6fc.png"
  },
  53100: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_cabbage_stage0.440c69d91e5aa9845bdb.png"
  },
  53104: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_cabbage_stage1.69948ea7388647e9e3f2.png"
  },
  53109: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_cabbage_stage2.d9d440108228c556354e.png"
  },
  53531: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_glazed_terracotta.f0f5d12767d6e1159ffc.png"
  },
  53112: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_mushroom.3f8d0b597caf1a064b78.png"
  },
  53906: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_spawn_block_top.eae39e7b28a0287053a7.png"
  },
  53114: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/red_tulip.dc171a26716ddeb5724a.png"
  },
  53120: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage0.8358a53a4246616aef7e.png"
  },
  53590: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage1.86598ca8635d9a144c8a.png"
  },
  53128: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage2.fbc861305666b89f9e76.png"
  },
  53135: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage3.5f0706efb3bb442e8fd7.png"
  },
  53144: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage4.90b3b74d7bc433ae2f3e.png"
  },
  53148: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage5.56c14537857b4f0d6e93.png"
  },
  53153: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage6.312c797dda5c461ee124.png"
  },
  53157: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/rice_stage7.0c233dd7fa284c3b1bfd.png"
  },
  53852: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sea_lantern.a4caabfe4e3d6e111697.png"
  },
  53159: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/shadow_rose.9780b0d37b88f705d599.png"
  },
  53594: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/shatter_mill_top.34e724db72bc524637ef.png"
  },
  53352: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/shop_trader_spawn_top.b89bbfa04449132a4df4.png"
  },
  53321: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/shop_wizard_spawn_top.dc19f94e04a00a028663.png"
  },
  53571: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sky_tap_top.1d3b9fc97cb1e027b0c4.png"
  },
  53168: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/small_cactus.db4b875acd802ae1191b.png"
  },
  53312: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/smelter_top.d0d1b051b86d8b3ef603.png"
  },
  53795: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spectral_door_bottom.2ad57b67abede2a676e2.png"
  },
  53830: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spectral_door_top.43cd7de0f0f3bef2411b.png"
  },
  53177: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spectral_grass.16aa1c506434ba29d2ef.png"
  },
  53186: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/spectral_sapling.4825ceefdb9e23435268.png"
  },
  53195: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/strawberry_bush_stage0.b9755303de6eac3737f3.png"
  },
  53204: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/strawberry_bush_stage1.252923a9d73d8808c87e.png"
  },
  53208: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/strawberry_bush_stage2.74f90bc956e2adbefeb7.png"
  },
  53217: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sugar_cane_plant_stage0.6ea0910cd4abfbdaa590.png"
  },
  53222: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sugar_cane_plant_stage1.fecf1f3d4e275428e0d1.png"
  },
  53229: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sugar_cane_plant_stage2.9bb8e7bfdd3b3df9c5cf.png"
  },
  53237: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/sugar_cane_plant_stage2_top.38a798e03030b5ac2aa8.png"
  },
  53876: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/synthesizer_top.898a5c31f88f3a7e7bc0.png"
  },
  53246: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tall_grass_bottom.d1486ff65d7053080df2.png"
  },
  53253: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tall_grass_top.c47b5954f3b634c3e8d3.png"
  },
  53260: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tallgrass.4023a10eead730ba902e.png"
  },
  53266: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tomato_plant_stage0.56b40905ef3343162bac.png"
  },
  53268: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tomato_plant_stage1.3ee1ec480e5b9d2083b1.png"
  },
  53273: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tomato_plant_stage2.352f23da3f602abe2807.png"
  },
  53275: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tomato_plant_stage2_top.05af5c989c07c92d3cc6.png"
  },
  53847: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_block.c28ae5cbdeea1a97e39b.png"
  },
  53328: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_blue_block.d7bf749b621b84e7ea95.png"
  },
  53866: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_cyan_block.e341232f9191cabde39c.png"
  },
  53885: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_green_block.bc23f759b1415641d108.png"
  },
  53466: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_orange_block.b63d3ce3a41741c94f82.png"
  },
  53899: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_purple_block.1a5fe5cd6180ece6d537.png"
  },
  53582: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/torch_red_block.a4f018ac1e7f11d1fa33.png"
  },
  53722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/tree_cutter_top.253dd570fdd82a4a0122.png"
  },
  53512: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/water.5626b741808b1b53c6de.png"
  },
  53277: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage0.c5f13b2e7aae2ffa92ed.png"
  },
  53625: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage1.cba6812d10d5b6491616.png"
  },
  53280: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage2.761c842532b7e7a0ffb2.png"
  },
  53284: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage3.d35dda335d1b18435a43.png"
  },
  53286: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage4.413187bd0e4e96477931.png"
  },
  53292: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage5.a69c67e9b66975873d4c.png"
  },
  53298: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage6.5a9d322e8e577c41ffe8.png"
  },
  53303: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wheat_stage7.7a308ccca1342ae8ca44.png"
  },
  53861: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/white_glazed_terracotta.cd22281258f6a9bf48a9.png"
  },
  53596: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/white_spawn_block_top.4bb6d35b9f6889ab4741.png"
  },
  53305: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/white_tulip.7855711c5ddaa5d51278.png"
  },
  53717: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wire_mill_top.bf860c14780007a0574a.png"
  },
  53469: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wireless_terminal_top.0a86378833f246193a79.png"
  },
  53560: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/wool_colored_silver.4cd08eb30c81694706cb.png"
  },
  53315: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/yellow_glazed_terracotta.780cb299393e4d477442.png"
  },
  53777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/yellow_spawn_block_top.eea71ad43da92909a353.png"
  },
  53929: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  53934: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  53936: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  53938: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  53946: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  53950: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  53957: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  53961: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  53964: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  53971: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  53973: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  53978: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  53985: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  53990: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  53915: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);