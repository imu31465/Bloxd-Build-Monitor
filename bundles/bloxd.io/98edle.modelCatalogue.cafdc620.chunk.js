export const id = 35;
export const ids = [35];
export const modules = {
  47672: (WW, RW, MW) => {
    var wW = {
      "./cape_cow_cream.png": 46861,
      "./cape_cow_normal.png": 46868,
      "./cape_creator_level1.png": 46875,
      "./cape_creator_level2.png": 46878,
      "./cape_creator_level3.png": 46881,
      "./cape_none.png": 46883,
      "./cape_pig.png": 46889,
      "./cape_sheep.png": 46891,
      "./cape_super.png": 46893,
      "./cape_super_inverted.png": 46899,
      "./cape_youtuber.png": 46902
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 47672
  },
  47675: (WW, RW, MW) => {
    var wW = {
      "./Player_Atlas.png": 46792,
      "./astro_set_1_attachable.png": 46800,
      "./astro_set_2_attachable.png": 46803,
      "./astro_set_3_attachable.png": 46809,
      "./astro_set_4_attachable.png": 46813,
      "./beaver_lumberjack.png": 46819,
      "./bee_set_1_attachable.png": 46826,
      "./bee_set_2_attachable.png": 46833,
      "./bee_set_3_attachable_blue.png": 46839,
      "./bee_set_3_attachable_green.png": 46845,
      "./bee_set_3_attachable_red.png": 46854,
      "./bee_set_4_attachable.png": 46859,
      "./capeTextures/cape_cow_cream.png": 46861,
      "./capeTextures/cape_cow_normal.png": 46868,
      "./capeTextures/cape_creator_level1.png": 46875,
      "./capeTextures/cape_creator_level2.png": 46878,
      "./capeTextures/cape_creator_level3.png": 46881,
      "./capeTextures/cape_none.png": 46883,
      "./capeTextures/cape_pig.png": 46889,
      "./capeTextures/cape_sheep.png": 46891,
      "./capeTextures/cape_super.png": 46893,
      "./capeTextures/cape_super_inverted.png": 46899,
      "./capeTextures/cape_youtuber.png": 46902,
      "./chef_attachables.png": 46909,
      "./dwarf_blue_hair.png": 46911,
      "./dwarf_braided_hair.png": 46920,
      "./dwarf_child.png": 46924,
      "./dwarf_forked_beard.png": 46928,
      "./dwarf_ginger_beard.png": 46935,
      "./dwarf_grey_beard.png": 46942,
      "./dwarf_hair_buns.png": 46948,
      "./dwarf_purple_beard.png": 46955,
      "./dwarf_red_hair.png": 46961,
      "./dwarf_short_beard.png": 46963,
      "./farmer_gill_attachable.png": 46969,
      "./farmer_head.png": 46978,
      "./fire_mage_attachable.png": 46981,
      "./forge_mother.png": 46984,
      "./general_attachable.png": 46991,
      "./goblin_goggles.png": 46998,
      "./goblin_mad_scientist.png": 47002,
      "./highSociety_set_1_attachable.png": 47008,
      "./highSociety_set_2_attachable.png": 47014,
      "./highSociety_set_3_attachable.png": 47019,
      "./highSociety_set_4_attachable.png": 47026,
      "./human_archer.png": 47032,
      "./human_desert_guard.png": 47037,
      "./human_sentry.png": 47043,
      "./jackal_priest.png": 47046,
      "./jetpack_attachable.png": 47055,
      "./medieval_set_1_attachable_blue.png": 47060,
      "./medieval_set_1_attachable_green.png": 47066,
      "./medieval_set_1_attachable_purple.png": 47068,
      "./medieval_set_1_attachable_red.png": 47071,
      "./medieval_set_1_attachable_yellow.png": 47074,
      "./medieval_set_2_attachable_blue.png": 47077,
      "./medieval_set_2_attachable_purple.png": 47085,
      "./medieval_set_2_attachable_red.png": 47088,
      "./medieval_set_3_attachable_green.png": 47093,
      "./medieval_set_3_attachable_pink.png": 47099,
      "./medieval_set_3_attachable_purple.png": 47101,
      "./medieval_set_3_attachable_red.png": 47103,
      "./medieval_set_4_attachable_blue.png": 47112,
      "./medieval_set_4_attachable_hair.png": 47118,
      "./medieval_set_4_attachable_purple.png": 47124,
      "./medieval_set_4_attachable_red.png": 47131,
      "./mining_helmet_attachable.png": 47137,
      "./minotaur.png": 47143,
      "./minotaur_elder.png": 47146,
      "./minotaur_warrior.png": 47148,
      "./monster_hunter_lorenzo_attachable.png": 47156,
      "./nova_jetpack_attachable.png": 47164,
      "./npc_pig_head.png": 47168,
      "./painter_spencer_attachable.png": 47173,
      "./pig_napoleon.png": 47176,
      "./pig_worker_attachable.png": 47184,
      "./piggy_banker_head.png": 47191,
      "./portal_mage_hat.png": 47198,
      "./rabbit_aristocrat_attachable.png": 47203,
      "./smuglyn_attachable.png": 47207,
      "./spring_set_1_attachable.png": 47212,
      "./spring_set_2_attachable.png": 47214,
      "./spring_set_3_attachable.png": 47218,
      "./spring_set_4_attachable.png": 47226,
      "./tentacle_boy.png": 47233,
      "./tentacle_girl_attachable.png": 47239,
      "./tentacle_guy_attachable.png": 47241,
      "./tentacle_guy_fisherman_attachable.png": 47247,
      "./trader_cowl_black.png": 47250,
      "./trader_cowl_blue.png": 47254,
      "./wolf_in_suit_attachable.png": 47260,
      "./wolf_security.png": 47268,
      "./y2k_set_1_attachable.png": 47270,
      "./y2k_set_2_attachable.png": 47278,
      "./y2k_set_3_attachable.png": 47281,
      "./y2k_set_4_attachable.png": 47287
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 47675
  },
  45326: (WW, RW, MW) => {
    var wW = {
      "./67/67_Model.glb": 45335,
      "./67/67_Reconstructed.glb": 45338,
      "./Armour Collector/Armour Collector_Model.glb": 45347,
      "./Armour Collector/Armour Collector_Reconstructed.glb": 45356,
      "./Bear/Bear_Model.glb": 45360,
      "./Bobino Musculino/Bobino Musculino_Model.glb": 45364,
      "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 45366,
      "./Camel/Camel_Model.glb": 45372,
      "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 45380,
      "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 45385,
      "./Cave Golem/Cave Golem_Model.glb": 45388,
      "./Cow/Cow_Model.glb": 45395,
      "./Crone/Crone_Model.glb": 45401,
      "./Deer/Deer_Model.glb": 45408,
      "./Desert Fennec/Desert Fennec_Model.glb": 45411,
      "./Diamond Guardian/Diamond Guardian_Model.glb": 45416,
      "./Diamond Guardian/Diamond Guardian_Reconstructed.glb": 45424,
      "./Draugr Knight/Draugr Knight_Model.glb": 45431,
      "./Draugr Reaver/Draugr Reaver_Model.glb": 45434,
      "./Draugr Skeleton/Draugr Skeleton_Model.glb": 45441,
      "./Draugr Warper/Draugr Warper_Model.glb": 45443,
      "./Draugr Zombie/Draugr Zombie_Model.glb": 45446,
      "./Evil Tome/Evil Tome_Model.glb": 45454,
      "./Frost Wraith/Frost Wraith_Model.glb": 45456,
      "./Furnace Knight/Furnace Knight_Model.glb": 45462,
      "./Furnace Knight/Furnace Knight_Reconstructed.glb": 45471,
      "./Glass Bro/Glass Bro_Model.glb": 45477,
      "./Glass Bro/Glass Bro_Reconstructed.glb": 45481,
      "./Glass Gremlin/Glass Gremlin_Model.glb": 45488,
      "./Glass Gremlin/Glass Gremlin_Reconstructed.glb": 45490,
      "./Gold Guardian/Gold Guardian_Model.glb": 45494,
      "./Gold Guardian/Gold Guardian_Reconstructed.glb": 45499,
      "./Gorilla/Gorilla_Model.glb": 45507,
      "./Horse/Horse_Model.glb": 45514,
      "./Iron Goofy Golem/Iron Goofy Golem_Model.glb": 45523,
      "./Iron Guardian/Iron Guardian_Model.glb": 45531,
      "./Iron Guardian/Iron Guardian_Reconstructed.glb": 45534,
      "./Lil Knight/Lil Knight_Model.glb": 45538,
      "./Lil Knight/Lil Knight_Reconstructed.glb": 45544,
      "./Lord Vulcan/Lord Vulcan_Model.glb": 45546,
      "./Lord Vulcan/Lord Vulcan_Reconstructed.glb": 45551,
      "./Magma Toad/Magma Toad_Model.glb": 45558,
      "./Moonstone Guardian/Moonstone Guardian_Model.glb": 45561,
      "./Moonstone Guardian/Moonstone Guardian_Reconstructed.glb": 45568,
      "./Mummy/Mummy_Model.glb": 45575,
      "./Mummy/Mummy_Reconstructed.glb": 45577,
      "./Pig/Pig_Model.glb": 45580,
      "./Player/Player_Model.glb": 45587,
      "./Player/Player_Reconstructed.glb": 45594,
      "./Player/astro_set_1_attachable.glb": 45602,
      "./Player/astro_set_2_attachable.glb": 45608,
      "./Player/astro_set_3_attachable.glb": 45611,
      "./Player/astro_set_4_attachable.glb": 45617,
      "./Player/beaver_lumberjack.glb": 45620,
      "./Player/bee_set_1_attachable.glb": 45628,
      "./Player/bee_set_2_attachable.glb": 45635,
      "./Player/bee_set_3_attachable.glb": 45644,
      "./Player/bee_set_4_attachable.glb": 45647,
      "./Player/cape_cuboid_18_12.glb": 45654,
      "./Player/chef_attachables.glb": 45662,
      "./Player/dwarf_blue_hair.glb": 45664,
      "./Player/dwarf_braided_hair.glb": 45668,
      "./Player/dwarf_child.glb": 45676,
      "./Player/dwarf_forked_beard.glb": 45685,
      "./Player/dwarf_ginger_beard.glb": 45689,
      "./Player/dwarf_grey_beard.glb": 45697,
      "./Player/dwarf_hair_buns.glb": 45702,
      "./Player/dwarf_purple_beard.glb": 45706,
      "./Player/dwarf_red_hair.glb": 45711,
      "./Player/dwarf_short_beard.glb": 45713,
      "./Player/farmer_gill_attachable.glb": 45721,
      "./Player/farmer_head.glb": 45730,
      "./Player/fire_mage_attachable.glb": 45736,
      "./Player/forge_mother.glb": 45740,
      "./Player/general_attachable.glb": 45746,
      "./Player/goblin_goggles.glb": 45752,
      "./Player/goblin_mad_scientist.glb": 45758,
      "./Player/highSociety_set_1_attachable.glb": 45760,
      "./Player/highSociety_set_2_attachable.glb": 45769,
      "./Player/highSociety_set_3_attachable.glb": 45777,
      "./Player/highSociety_set_4_attachable.glb": 45784,
      "./Player/human_archer.glb": 45789,
      "./Player/human_desert_guard.glb": 45791,
      "./Player/human_sentry.glb": 45794,
      "./Player/jackal_priest.glb": 45798,
      "./Player/jetpack_attachable.glb": 45807,
      "./Player/medieval_set_1_attachable.glb": 45815,
      "./Player/medieval_set_2_attachable.glb": 45823,
      "./Player/medieval_set_3_attachable.glb": 45830,
      "./Player/medieval_set_4_attachable.glb": 45835,
      "./Player/mining_helmet_attachable.glb": 45842,
      "./Player/minotaur.glb": 45849,
      "./Player/minotaur_elder.glb": 45853,
      "./Player/minotaur_warrior.glb": 45855,
      "./Player/monster_hunter_lorenzo_attachable.glb": 45857,
      "./Player/npc_pig_head.glb": 45865,
      "./Player/painter_spencer_attachable.glb": 45869,
      "./Player/pig_napoleon.glb": 45874,
      "./Player/pig_worker_attachable.glb": 45876,
      "./Player/piggy_banker_head.glb": 45884,
      "./Player/portal_mage_hat.glb": 45891,
      "./Player/rabbit_aristocrat_attachable.glb": 45893,
      "./Player/smuglyn_attachable.glb": 45896,
      "./Player/spring_set_1_attachable.glb": 45904,
      "./Player/spring_set_2_attachable.glb": 45912,
      "./Player/spring_set_3_attachable.glb": 45916,
      "./Player/spring_set_4_attachable.glb": 45925,
      "./Player/tentacle_boy.glb": 45929,
      "./Player/tentacle_guy_attachable.glb": 45932,
      "./Player/tentacle_guy_fisherman_attachable.glb": 45937,
      "./Player/trader_cowl_black.glb": 45940,
      "./Player/trader_cowl_blue.glb": 45943,
      "./Player/wolf_in_suit_attachable.glb": 45949,
      "./Player/wolf_security.glb": 45954,
      "./Player/y2k_set_1_attachable.glb": 45959,
      "./Player/y2k_set_2_attachable.glb": 45967,
      "./Player/y2k_set_3_attachable.glb": 45975,
      "./Player/y2k_set_4_attachable.glb": 45977,
      "./Scorpion/Scorpion_Model.glb": 45986,
      "./Sheep/Sheep_Model.glb": 45995,
      "./Skeleton/Skeleton_Model.glb": 45998,
      "./Skeleton/Skeleton_Reconstructed.glb": 46007,
      "./Slime/Slime_Model.glb": 46014,
      "./Stag/Stag_Model.glb": 46023,
      "./Stalker/Stalker_Model.glb": 46027,
      "./Tiki Terror/Tiki Terror_Model.glb": 46036,
      "./Tiki Terror/Tiki Terror_Reconstructed.glb": 46043,
      "./Vulcanite/Vulcanite_Model.glb": 46049,
      "./Vulcanite/Vulcanite_Reconstructed.glb": 46051,
      "./Wildcat/Wildcat_Model.glb": 46053,
      "./Wolf/Wolf_Model.glb": 46062,
      "./Zombie/Zombie_Model.glb": 46066,
      "./Zombie/Zombie_Reconstructed.glb": 46068
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 45326
  },
  46077: (WW, RW, MW) => {
    var wW = {
      "./67/67_Atlas.png": 46082,
      "./67/variations/0_67_default.png": 46084,
      "./Armour Collector/Armour Collector_Atlas.png": 46088,
      "./Armour Collector/variations/0_armour collector_default.png": 46094,
      "./Bear/BearSaddle_Atlas.png": 46098,
      "./Bear/Bear_Atlas.png": 46105,
      "./Bear/variations/0_bear_default.png": 46113,
      "./Bobino Musculino/Bobino Musculino_Atlas.png": 46116,
      "./Bobino Musculino/variations/0_bobino musculino_default.png": 46118,
      "./Camel/CamelSaddle_Atlas.png": 46121,
      "./Camel/Camel_Armour.png": 46127,
      "./Camel/Camel_Atlas.png": 46129,
      "./Camel/variations/0_camel_default.png": 46138,
      "./Camel/variations/1_camel_brown.png": 46142,
      "./Capitano Explovissimo/Capitano Explovissimo_Atlas.png": 46149,
      "./Capitano Explovissimo/variations/0_capitano explovissimo_default.png": 46156,
      "./Cave Golem/Cave Golem_Atlas.png": 46161,
      "./Cave Golem/variations/0_cave golem_default.png": 46167,
      "./Cave Golem/variations/1_cave golem_iron.png": 46170,
      "./Cave Golem/variations/2_cave golem_corrupted.png": 46173,
      "./Cow/Cow_Atlas.png": 46176,
      "./Cow/variations/0_cow_default.png": 46184,
      "./Cow/variations/1_cow_cream.png": 46191,
      "./Crone/Crone_Atlas.png": 46193,
      "./Crone/variations/0_crone_default.png": 46200,
      "./Deer/DeerAntlers_Atlas.png": 46204,
      "./Deer/Deer_Atlas.png": 46210,
      "./Deer/variations/0_deer_default.png": 46216,
      "./Desert Fennec/Desert Fennec_Atlas.png": 46218,
      "./Desert Fennec/variations/0_desert fennec_default.png": 46220,
      "./Diamond Goofy Golem/Diamond Goofy Golem_Atlas.png": 46222,
      "./Diamond Goofy Golem/variations/0_diamond goofy golem_default.png": 46226,
      "./Diamond Goofy Golem/variations/1_diamond goofy golem_flaking.png": 46234,
      "./Diamond Goofy Golem/variations/2_diamond goofy golem_patchy.png": 46236,
      "./Diamond Goofy Golem/variations/3_diamond goofy golem_shedding.png": 46241,
      "./Diamond Goofy Golem/variations/4_diamond goofy golem_bare.png": 46244,
      "./Diamond Goofy Golem/variations/5_diamond goofy golem_stone.png": 46251,
      "./Diamond Guardian/Diamond Guardian_Atlas.png": 46253,
      "./Diamond Guardian/variations/0_diamond guardian_default.png": 46260,
      "./Draugr Huntress/Draugr Huntress_Atlas.png": 46262,
      "./Draugr Huntress/variations/0_draugr huntress_default.png": 46264,
      "./Draugr Huntress/variations/1_draugr huntress_chainmail.png": 46271,
      "./Draugr Knight/Draugr Knight_Atlas.png": 46278,
      "./Draugr Knight/variations/0_draugr knight_default.png": 46280,
      "./Draugr Reaver/Draugr Reaver_Atlas.png": 46283,
      "./Draugr Reaver/variations/0_draugr reaver_default.png": 46285,
      "./Draugr Skeleton/Draugr Skeleton_Atlas.png": 46288,
      "./Draugr Skeleton/variations/0_draugr skeleton_default.png": 46292,
      "./Draugr Warper/Draugr Warper_Atlas.png": 46301,
      "./Draugr Warper/variations/0_draugr warper_default.png": 46303,
      "./Draugr Zombie/Draugr Zombie_Atlas.png": 46310,
      "./Draugr Zombie/variations/0_draugr zombie_default.png": 46312,
      "./Draugr Zombie/variations/10_draugr zombie_corrupted2.png": 46316,
      "./Draugr Zombie/variations/1_draugr zombie_longHairChestplate.png": 46318,
      "./Draugr Zombie/variations/2_draugr zombie_longHairClothed.png": 46321,
      "./Draugr Zombie/variations/3_draugr zombie_shortHairClothed.png": 46327,
      "./Draugr Zombie/variations/4_draugr zombie_flower.png": 46330,
      "./Draugr Zombie/variations/5_draugr zombie_flower2.png": 46332,
      "./Draugr Zombie/variations/6_draugr zombie_mushroom.png": 46341,
      "./Draugr Zombie/variations/7_draugr zombie_vine.png": 46343,
      "./Draugr Zombie/variations/8_draugr zombie_vine2.png": 46350,
      "./Draugr Zombie/variations/9_draugr zombie_corrupted.png": 46356,
      "./Evil Tome/Evil Tome_Atlas.png": 46365,
      "./Evil Tome/variations/0_evil tome_default.png": 46372,
      "./Frost Golem/Frost Golem_Atlas.png": 46380,
      "./Frost Golem/variations/0_frost golem_default.png": 46382,
      "./Frost Skeleton/Frost Skeleton_Atlas.png": 46389,
      "./Frost Skeleton/variations/0_frost skeleton_default.png": 46398,
      "./Frost Wraith/Frost Wraith_Atlas.png": 46407,
      "./Frost Wraith/variations/0_frost wraith_default.png": 46412,
      "./Frost Wraith/variations/1_frost wraith_tattered.png": 46415,
      "./Frost Wraith/variations/2_frost wraith_frostKing.png": 46420,
      "./Frost Wraith/variations/3_frost wraith_accursed.png": 46428,
      "./Frost Zombie/Frost Zombie_Atlas.png": 46435,
      "./Frost Zombie/variations/0_frost zombie_default.png": 46438,
      "./Frost Zombie/variations/1_frost zombie_longHairChestplate.png": 46446,
      "./Frost Zombie/variations/2_frost zombie_shortHairClothed.png": 46452,
      "./Furnace Knight/Furnace Knight_Atlas.png": 46454,
      "./Furnace Knight/variations/0_furnace knight_default.png": 46456,
      "./Glass Bro/Glass Bro_Atlas.png": 46464,
      "./Glass Bro/variations/0_glass bro_default.png": 46473,
      "./Glass Gremlin/Glass Gremlin_Atlas.png": 46482,
      "./Glass Gremlin/variations/0_glass gremlin_default.png": 46485,
      "./Gold Goofy Golem/Gold Goofy Golem_Atlas.png": 46487,
      "./Gold Goofy Golem/variations/0_gold goofy golem_default.png": 46494,
      "./Gold Goofy Golem/variations/1_gold goofy golem_flaking.png": 46501,
      "./Gold Goofy Golem/variations/2_gold goofy golem_patchy.png": 46509,
      "./Gold Goofy Golem/variations/3_gold goofy golem_shedding.png": 46518,
      "./Gold Goofy Golem/variations/4_gold goofy golem_bare.png": 46521,
      "./Gold Goofy Golem/variations/5_gold goofy golem_stone.png": 46525,
      "./Gold Guardian/Gold Guardian_Atlas.png": 46528,
      "./Gold Guardian/variations/0_gold guardian_default.png": 46531,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Armour.png": 46533,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Atlas.png": 46537,
      "./Gold Watermelon Stag/variations/0_gold watermelon stag_default.png": 46545,
      "./Gorilla/GorillaSaddle_Atlas.png": 46552,
      "./Gorilla/Gorilla_Atlas.png": 46558,
      "./Gorilla/variations/0_gorilla_default.png": 46564,
      "./Horse/HorseSaddle_Atlas.png": 46572,
      "./Horse/Horse_Atlas.png": 46574,
      "./Horse/variations/0_horse_default.png": 46579,
      "./Horse/variations/1_horse_black.png": 46585,
      "./Horse/variations/2_horse_brown.png": 46589,
      "./Horse/variations/3_horse_cream.png": 46595,
      "./Iron Golem/Iron Golem_Atlas.png": 46602,
      "./Iron Golem/variations/0_iron golem_default.png": 46610,
      "./Iron Goofy Golem/Iron Goofy Golem_Atlas.png": 46614,
      "./Iron Goofy Golem/variations/0_iron goofy golem_default.png": 46616,
      "./Iron Goofy Golem/variations/1_iron goofy golem_flaking.png": 46625,
      "./Iron Goofy Golem/variations/2_iron goofy golem_patchy.png": 46632,
      "./Iron Goofy Golem/variations/3_iron goofy golem_shedding.png": 46634,
      "./Iron Goofy Golem/variations/4_iron goofy golem_bare.png": 46637,
      "./Iron Goofy Golem/variations/5_iron goofy golem_stone.png": 46641,
      "./Iron Guardian/Iron Guardian_Atlas.png": 46648,
      "./Iron Guardian/variations/0_iron guardian_default.png": 46655,
      "./Lil Knight/Lil Knight_Atlas.png": 46658,
      "./Lil Knight/variations/0_lil knight_default.png": 46667,
      "./Lord Vulcan/Lord Vulcan_Atlas.png": 46674,
      "./Lord Vulcan/variations/0_lord vulcan_default.png": 46682,
      "./Magma Golem/Magma Golem_Atlas.png": 46691,
      "./Magma Golem/variations/0_magma golem_default.png": 46694,
      "./Magma Toad/Magma Toad_Atlas.png": 46702,
      "./Magma Toad/variations/0_magma toad_default.png": 46710,
      "./Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas.png": 46719,
      "./Moonstone Goofy Golem/variations/0_moonstone goofy golem_default.png": 46724,
      "./Moonstone Goofy Golem/variations/1_moonstone goofy golem_flaking.png": 46733,
      "./Moonstone Goofy Golem/variations/2_moonstone goofy golem_patchy.png": 46742,
      "./Moonstone Goofy Golem/variations/3_moonstone goofy golem_shedding.png": 46748,
      "./Moonstone Goofy Golem/variations/4_moonstone goofy golem_bare.png": 46757,
      "./Moonstone Goofy Golem/variations/5_moonstone goofy golem_stone.png": 46761,
      "./Moonstone Guardian/Moonstone Guardian_Atlas.png": 46764,
      "./Moonstone Guardian/variations/0_moonstone guardian_default.png": 46770,
      "./Mummy/Mummy_Atlas.png": 46775,
      "./Mummy/variations/0_mummy_default.png": 46779,
      "./Pig/Pig_Atlas.png": 46784,
      "./Pig/variations/0_pig_default.png": 46786,
      "./Player/Player_Atlas.png": 46792,
      "./Player/astro_set_1_attachable.png": 46800,
      "./Player/astro_set_2_attachable.png": 46803,
      "./Player/astro_set_3_attachable.png": 46809,
      "./Player/astro_set_4_attachable.png": 46813,
      "./Player/beaver_lumberjack.png": 46819,
      "./Player/bee_set_1_attachable.png": 46826,
      "./Player/bee_set_2_attachable.png": 46833,
      "./Player/bee_set_3_attachable_blue.png": 46839,
      "./Player/bee_set_3_attachable_green.png": 46845,
      "./Player/bee_set_3_attachable_red.png": 46854,
      "./Player/bee_set_4_attachable.png": 46859,
      "./Player/capeTextures/cape_cow_cream.png": 46861,
      "./Player/capeTextures/cape_cow_normal.png": 46868,
      "./Player/capeTextures/cape_creator_level1.png": 46875,
      "./Player/capeTextures/cape_creator_level2.png": 46878,
      "./Player/capeTextures/cape_creator_level3.png": 46881,
      "./Player/capeTextures/cape_none.png": 46883,
      "./Player/capeTextures/cape_pig.png": 46889,
      "./Player/capeTextures/cape_sheep.png": 46891,
      "./Player/capeTextures/cape_super.png": 46893,
      "./Player/capeTextures/cape_super_inverted.png": 46899,
      "./Player/capeTextures/cape_youtuber.png": 46902,
      "./Player/chef_attachables.png": 46909,
      "./Player/dwarf_blue_hair.png": 46911,
      "./Player/dwarf_braided_hair.png": 46920,
      "./Player/dwarf_child.png": 46924,
      "./Player/dwarf_forked_beard.png": 46928,
      "./Player/dwarf_ginger_beard.png": 46935,
      "./Player/dwarf_grey_beard.png": 46942,
      "./Player/dwarf_hair_buns.png": 46948,
      "./Player/dwarf_purple_beard.png": 46955,
      "./Player/dwarf_red_hair.png": 46961,
      "./Player/dwarf_short_beard.png": 46963,
      "./Player/farmer_gill_attachable.png": 46969,
      "./Player/farmer_head.png": 46978,
      "./Player/fire_mage_attachable.png": 46981,
      "./Player/forge_mother.png": 46984,
      "./Player/general_attachable.png": 46991,
      "./Player/goblin_goggles.png": 46998,
      "./Player/goblin_mad_scientist.png": 47002,
      "./Player/highSociety_set_1_attachable.png": 47008,
      "./Player/highSociety_set_2_attachable.png": 47014,
      "./Player/highSociety_set_3_attachable.png": 47019,
      "./Player/highSociety_set_4_attachable.png": 47026,
      "./Player/human_archer.png": 47032,
      "./Player/human_desert_guard.png": 47037,
      "./Player/human_sentry.png": 47043,
      "./Player/jackal_priest.png": 47046,
      "./Player/jetpack_attachable.png": 47055,
      "./Player/medieval_set_1_attachable_blue.png": 47060,
      "./Player/medieval_set_1_attachable_green.png": 47066,
      "./Player/medieval_set_1_attachable_purple.png": 47068,
      "./Player/medieval_set_1_attachable_red.png": 47071,
      "./Player/medieval_set_1_attachable_yellow.png": 47074,
      "./Player/medieval_set_2_attachable_blue.png": 47077,
      "./Player/medieval_set_2_attachable_purple.png": 47085,
      "./Player/medieval_set_2_attachable_red.png": 47088,
      "./Player/medieval_set_3_attachable_green.png": 47093,
      "./Player/medieval_set_3_attachable_pink.png": 47099,
      "./Player/medieval_set_3_attachable_purple.png": 47101,
      "./Player/medieval_set_3_attachable_red.png": 47103,
      "./Player/medieval_set_4_attachable_blue.png": 47112,
      "./Player/medieval_set_4_attachable_hair.png": 47118,
      "./Player/medieval_set_4_attachable_purple.png": 47124,
      "./Player/medieval_set_4_attachable_red.png": 47131,
      "./Player/mining_helmet_attachable.png": 47137,
      "./Player/minotaur.png": 47143,
      "./Player/minotaur_elder.png": 47146,
      "./Player/minotaur_warrior.png": 47148,
      "./Player/monster_hunter_lorenzo_attachable.png": 47156,
      "./Player/nova_jetpack_attachable.png": 47164,
      "./Player/npc_pig_head.png": 47168,
      "./Player/painter_spencer_attachable.png": 47173,
      "./Player/pig_napoleon.png": 47176,
      "./Player/pig_worker_attachable.png": 47184,
      "./Player/piggy_banker_head.png": 47191,
      "./Player/portal_mage_hat.png": 47198,
      "./Player/rabbit_aristocrat_attachable.png": 47203,
      "./Player/smuglyn_attachable.png": 47207,
      "./Player/spring_set_1_attachable.png": 47212,
      "./Player/spring_set_2_attachable.png": 47214,
      "./Player/spring_set_3_attachable.png": 47218,
      "./Player/spring_set_4_attachable.png": 47226,
      "./Player/tentacle_boy.png": 47233,
      "./Player/tentacle_girl_attachable.png": 47239,
      "./Player/tentacle_guy_attachable.png": 47241,
      "./Player/tentacle_guy_fisherman_attachable.png": 47247,
      "./Player/trader_cowl_black.png": 47250,
      "./Player/trader_cowl_blue.png": 47254,
      "./Player/wolf_in_suit_attachable.png": 47260,
      "./Player/wolf_security.png": 47268,
      "./Player/y2k_set_1_attachable.png": 47270,
      "./Player/y2k_set_2_attachable.png": 47278,
      "./Player/y2k_set_3_attachable.png": 47281,
      "./Player/y2k_set_4_attachable.png": 47287,
      "./Scorpion/Scorpion_Atlas.png": 47294,
      "./Scorpion/variations/0_scorpion_default.png": 47303,
      "./Sheep/SheepWool_Atlas.png": 47309,
      "./Sheep/Sheep_Atlas.png": 47314,
      "./Sheep/variations/0_sheep_default.png": 47321,
      "./Sheep/variations/10_sheep_gray.png": 47324,
      "./Sheep/variations/11_sheep_green.png": 47329,
      "./Sheep/variations/12_sheep_lightBlue.png": 47338,
      "./Sheep/variations/13_sheep_lightGray.png": 47340,
      "./Sheep/variations/14_sheep_lime.png": 47348,
      "./Sheep/variations/15_sheep_magenta.png": 47350,
      "./Sheep/variations/1_sheep_black.png": 47359,
      "./Sheep/variations/2_sheep_red.png": 47366,
      "./Sheep/variations/3_sheep_orange.png": 47369,
      "./Sheep/variations/4_sheep_pink.png": 47371,
      "./Sheep/variations/5_sheep_purple.png": 47373,
      "./Sheep/variations/6_sheep_yellow.png": 47379,
      "./Sheep/variations/7_sheep_blue.png": 47385,
      "./Sheep/variations/8_sheep_brown.png": 47387,
      "./Sheep/variations/9_sheep_cyan.png": 47393,
      "./Skeleton/Skeleton_Atlas.png": 47397,
      "./Skeleton/variations/0_skeleton_default.png": 47401,
      "./Slime/Slime_Atlas.png": 47405,
      "./Slime/variations/0_slime_default.png": 47408,
      "./Spirit Bear/Spirit BearSaddle_Atlas.png": 47410,
      "./Spirit Bear/Spirit Bear_Atlas.png": 47413,
      "./Spirit Bear/variations/0_spirit bear_default.png": 47419,
      "./Spirit Golem/Spirit Golem_Atlas.png": 47421,
      "./Spirit Golem/variations/0_spirit golem_default.png": 47424,
      "./Spirit Gorilla/Spirit GorillaSaddle_Atlas.png": 47426,
      "./Spirit Gorilla/Spirit Gorilla_Atlas.png": 47433,
      "./Spirit Gorilla/variations/0_spirit gorilla_default.png": 47435,
      "./Spirit Stag/Spirit StagSaddle_Atlas.png": 47443,
      "./Spirit Stag/Spirit Stag_Atlas.png": 47450,
      "./Spirit Stag/variations/0_spirit stag_default.png": 47458,
      "./Spirit Wolf/Spirit WolfCollar_Atlas.png": 47465,
      "./Spirit Wolf/Spirit Wolf_Atlas.png": 47473,
      "./Spirit Wolf/variations/0_spirit wolf_default.png": 47480,
      "./Stag/StagSaddle_Atlas.png": 47483,
      "./Stag/Stag_Atlas.png": 47487,
      "./Stag/variations/0_stag_default.png": 47490,
      "./Stalker/Stalker_Atlas.png": 47492,
      "./Stalker/variations/0_stalker_default.png": 47499,
      "./Stalker/variations/1_stalker_crimson.png": 47508,
      "./Stalker/variations/2_stalker_frost.png": 47515,
      "./Stalker/variations/3_stalker_void.png": 47523,
      "./Tiki Terror/Tiki Terror_Atlas.png": 47531,
      "./Tiki Terror/variations/0_tiki terror_default.png": 47533,
      "./Tiki Terror/variations/1_tiki terror_titan.png": 47541,
      "./Tiki Terror/variations/2_tiki terror_tormentor.png": 47548,
      "./Tiki Terror/variations/3_tiki terror_tyrant.png": 47555,
      "./Vulcanite/Vulcanite_Atlas.png": 47564,
      "./Vulcanite/variations/0_vulcanite_default.png": 47571,
      "./Wildcat/WildcatCollar_Atlas.png": 47574,
      "./Wildcat/Wildcat_Atlas.png": 47577,
      "./Wildcat/variations/0_wildcat_default.png": 47584,
      "./Wildcat/variations/1_wildcat_tabby.png": 47587,
      "./Wildcat/variations/2_wildcat_grey.png": 47596,
      "./Wildcat/variations/3_wildcat_black.png": 47605,
      "./Wildcat/variations/4_wildcat_calico.png": 47614,
      "./Wildcat/variations/5_wildcat_siamese.png": 47619,
      "./Wildcat/variations/6_wildcat_leopard.png": 47622,
      "./Wolf/WolfCollar_Atlas.png": 47629,
      "./Wolf/Wolf_Atlas.png": 47635,
      "./Wolf/variations/0_wolf_default.png": 47644,
      "./Wolf/variations/1_wolf_white.png": 47646,
      "./Wolf/variations/2_wolf_brown.png": 47649,
      "./Wolf/variations/3_wolf_grey.png": 47652,
      "./Wolf/variations/4_wolf_spectral.png": 47660,
      "./Zombie/Zombie_Atlas.png": 47664,
      "./Zombie/variations/0_zombie_default.png": 47668
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 46077
  },
  40822: (WW, RW, MW) => {
    var wW = {
      "./2_block.glb": 40824,
      "./67.glb": 40828,
      "./Artisan Bench.glb": 40830,
      "./Aspen Door.glb": 40837,
      "./Aspen Item Pedestal.glb": 40840,
      "./Aspen Ladder.glb": 40849,
      "./Aspen Trapdoor.glb": 40858,
      "./Black Banner.glb": 40864,
      "./Black Bed.glb": 40871,
      "./Black Directional Arrow.glb": 40875,
      "./Black Strongbed.glb": 40880,
      "./Blue Banner.glb": 40884,
      "./Blue Bed.glb": 40888,
      "./Blue Directional Arrow.glb": 40890,
      "./Blue Strongbed.glb": 40897,
      "./Board.glb": 40906,
      "./Brown Banner.glb": 40908,
      "./Brown Bed.glb": 40916,
      "./Brown Directional Arrow.glb": 40920,
      "./Brown Strongbed.glb": 40928,
      "./Cedar Door.glb": 40936,
      "./Cedar Item Pedestal.glb": 40945,
      "./Cedar Ladder.glb": 40951,
      "./Cedar Trapdoor.glb": 40956,
      "./Cherry Door.glb": 40965,
      "./Cherry Item Pedestal.glb": 40967,
      "./Cherry Ladder.glb": 40971,
      "./Cherry Trapdoor.glb": 40973,
      "./Crimson Trapdoor.glb": 40978,
      "./Cyan Banner.glb": 40986,
      "./Cyan Bed.glb": 40992,
      "./Cyan Directional Arrow.glb": 40997,
      "./Cyan Strongbed.glb": 41006,
      "./Dangling Rope.glb": 41009,
      "./Dangling Vine.glb": 41015,
      "./Diamond Enchanting Table.glb": 41020,
      "./Diamond Trophy.glb": 41029,
      "./Draugr Banner.glb": 41033,
      "./Fat Brown Mushroom.glb": 41042,
      "./Fat Red Mushroom.glb": 41048,
      "./Fence.glb": 41050,
      "./FenceGate.glb": 41054,
      "./Furnace.glb": 41062,
      "./Gold Enchanting Table.glb": 41070,
      "./Gold Trophy.glb": 41074,
      "./Gray Banner.glb": 41083,
      "./Gray Bed.glb": 41087,
      "./Gray Strongbed.glb": 41091,
      "./Green Banner.glb": 41093,
      "./Green Bed.glb": 41100,
      "./Green Directional Arrow.glb": 41107,
      "./Green Strongbed.glb": 41110,
      "./Grey Directional Arrow.glb": 41114,
      "./Iron Enchanting Table.glb": 41122,
      "./Iron Ladder.glb": 41130,
      "./Iron Trapdoor.glb": 41137,
      "./Iron Trophy.glb": 41141,
      "./Jungle Door.glb": 41146,
      "./Jungle Item Pedestal.glb": 41149,
      "./Jungle Ladder.glb": 41154,
      "./Jungle Trapdoor.glb": 41163,
      "./Large Icicle.glb": 41172,
      "./Large Twin Icicle.glb": 41178,
      "./Leaf Bed.glb": 41180,
      "./Light Blue Banner.glb": 41184,
      "./Light Blue Bed.glb": 41190,
      "./Light Blue Directional Arrow.glb": 41195,
      "./Light Blue Strongbed.glb": 41197,
      "./Light Gray Banner.glb": 41204,
      "./Light Gray Bed.glb": 41206,
      "./Light Gray Strongbed.glb": 41211,
      "./Light Grey Directional Arrow.glb": 41220,
      "./Lime Banner.glb": 41225,
      "./Lime Bed.glb": 41230,
      "./Lime Directional Arrow.glb": 41238,
      "./Lime Strongbed.glb": 41245,
      "./Magenta Banner.glb": 41249,
      "./Magenta Bed.glb": 41256,
      "./Magenta Directional Arrow.glb": 41265,
      "./Magenta Strongbed.glb": 41273,
      "./Mango Door.glb": 41278,
      "./Mango Item Pedestal.glb": 41280,
      "./Mango Ladder.glb": 41286,
      "./Mango Trapdoor.glb": 41295,
      "./Maple Door.glb": 41302,
      "./Maple Ladder.glb": 41305,
      "./Maple Trapdoor.glb": 41307,
      "./Medium Icicle.glb": 41311,
      "./Moonstone Trophy.glb": 41313,
      "./Nova Trophy.glb": 41320,
      "./Orange Banner.glb": 41326,
      "./Orange Bed.glb": 41333,
      "./Orange Directional Arrow.glb": 41342,
      "./Orange Strongbed.glb": 41346,
      "./Palm Door.glb": 41353,
      "./Palm Item Pedestal.glb": 41355,
      "./Palm Ladder.glb": 41357,
      "./Palm Trapdoor.glb": 41362,
      "./Pear Door.glb": 41368,
      "./Pear Item Pedestal.glb": 41372,
      "./Pear Ladder.glb": 41379,
      "./Pear Trapdoor.glb": 41387,
      "./Pine Door.glb": 41393,
      "./Pine Item Pedestal.glb": 41399,
      "./Pine Ladder.glb": 41407,
      "./Pine Trapdoor.glb": 41411,
      "./Pink Banner.glb": 41419,
      "./Pink Bed.glb": 41421,
      "./Pink Directional Arrow.glb": 41428,
      "./Pink Strongbed.glb": 41435,
      "./Plum Door.glb": 41442,
      "./Plum Item Pedestal.glb": 41446,
      "./Plum Ladder.glb": 41451,
      "./Plum Trapdoor.glb": 41455,
      "./Potion Table.glb": 41462,
      "./Purple Banner.glb": 41467,
      "./Purple Bed.glb": 41472,
      "./Purple Directional Arrow.glb": 41478,
      "./Purple Strongbed.glb": 41481,
      "./Rainbow Banner.glb": 41483,
      "./Red Banner.glb": 41489,
      "./Red Bed.glb": 41494,
      "./Red Directional Arrow.glb": 41503,
      "./Red Strongbed.glb": 41509,
      "./Salvaging Table.glb": 41516,
      "./Showcase.glb": 41520,
      "./Skull Banner.glb": 41522,
      "./Small Black Pod.glb": 41527,
      "./Small Blue Pod.glb": 41530,
      "./Small Brown Pod.glb": 41537,
      "./Small Cyan Pod.glb": 41543,
      "./Small Gray Pod.glb": 41551,
      "./Small Green Pod.glb": 41559,
      "./Small Light Blue Pod.glb": 41563,
      "./Small Light Gray Pod.glb": 41565,
      "./Small Lime Pod.glb": 41568,
      "./Small Magenta Pod.glb": 41576,
      "./Small Orange Pod.glb": 41578,
      "./Small Pink Pod.glb": 41583,
      "./Small Purple Pod.glb": 41585,
      "./Small Red Pod.glb": 41594,
      "./Small Twin Icicle.glb": 41602,
      "./Small White Pod.glb": 41607,
      "./Small Yellow Pod.glb": 41609,
      "./Spectral Door.glb": 41617,
      "./Spectral Item Pedestal.glb": 41622,
      "./Spectral Ladder.glb": 41625,
      "./Spectral Trapdoor.glb": 41630,
      "./Spikes_Diamond.glb": 41633,
      "./Spikes_Gold.glb": 41639,
      "./Spikes_Iron.glb": 41643,
      "./Spikes_Kill.glb": 41649,
      "./Spikes_Stone.glb": 41657,
      "./Spikes_Wood.glb": 41664,
      "./Stone Enchanting Table.glb": 41673,
      "./Stone Trophy.glb": 41681,
      "./Timed Spike Bomb Block.glb": 41685,
      "./Vines.glb": 41689,
      "./Warped Trapdoor.glb": 41693,
      "./White Banner.glb": 41697,
      "./White Bed.glb": 41700,
      "./White Directional Arrow.glb": 41706,
      "./White Strongbed.glb": 41709,
      "./Wood Enchanting Table.glb": 41713,
      "./Wood Trophy.glb": 41718,
      "./Workbench.glb": 41724,
      "./Yellow Banner.glb": 41729,
      "./Yellow Bed.glb": 41732,
      "./Yellow Directional Arrow.glb": 41737,
      "./Yellow Strongbed.glb": 41746,
      "./_Aspen Door Top.glb": 41751,
      "./_Black Banner Flag Hanging.glb": 41755,
      "./_Black Banner Flag.glb": 41758,
      "./_Black Banner Hanging.glb": 41762,
      "./_Black Bed Head.glb": 41764,
      "./_Black Strongbed Head.glb": 41768,
      "./_Blue Banner Flag Hanging.glb": 41777,
      "./_Blue Banner Flag.glb": 41782,
      "./_Blue Banner Hanging.glb": 41789,
      "./_Blue Bed Head.glb": 41795,
      "./_Blue Strongbed Head.glb": 41801,
      "./_Brown Banner Flag Hanging.glb": 41810,
      "./_Brown Banner Flag.glb": 41817,
      "./_Brown Banner Hanging.glb": 41825,
      "./_Brown Bed Head.glb": 41830,
      "./_Brown Strongbed Head.glb": 41835,
      "./_Camel Painting Bottom Left.glb": 41841,
      "./_Camel Painting Bottom Right.glb": 41850,
      "./_Camel Painting Top Left.glb": 41852,
      "./_Camel Painting Top Right.glb": 41856,
      "./_Cedar Door Top.glb": 41859,
      "./_Cherry Door Top.glb": 41861,
      "./_Cow Painting Bottom Left.glb": 41864,
      "./_Cow Painting Bottom Right.glb": 41870,
      "./_Cow Painting Top Left.glb": 41876,
      "./_Cow Painting Top Right.glb": 41878,
      "./_Cyan Banner Flag Hanging.glb": 41885,
      "./_Cyan Banner Flag.glb": 41889,
      "./_Cyan Banner Hanging.glb": 41894,
      "./_Cyan Bed Head.glb": 41896,
      "./_Cyan Strongbed Head.glb": 41904,
      "./_Deer Painting Bottom Left.glb": 41908,
      "./_Deer Painting Bottom Right.glb": 41917,
      "./_Deer Painting Top Left.glb": 41924,
      "./_Deer Painting Top Right.glb": 41932,
      "./_Draugr Banner Flag Hanging.glb": 41935,
      "./_Draugr Banner Flag.glb": 41944,
      "./_Draugr Banner Hanging.glb": 41950,
      "./_Gray Banner Flag Hanging.glb": 41956,
      "./_Gray Banner Flag.glb": 41963,
      "./_Gray Banner Hanging.glb": 41971,
      "./_Gray Bed Head.glb": 41978,
      "./_Gray Strongbed Head.glb": 41987,
      "./_Green Banner Flag Hanging.glb": 41992,
      "./_Green Banner Flag.glb": 42001,
      "./_Green Banner Hanging.glb": 42008,
      "./_Green Bed Head.glb": 42012,
      "./_Green Strongbed Head.glb": 42016,
      "./_Horse Painting Bottom Left.glb": 42019,
      "./_Horse Painting Bottom Right.glb": 42027,
      "./_Horse Painting Top Left.glb": 42034,
      "./_Horse Painting Top Right.glb": 42040,
      "./_Jungle Door Top.glb": 42049,
      "./_Light Blue Banner Flag Hanging.glb": 42051,
      "./_Light Blue Banner Flag.glb": 42060,
      "./_Light Blue Banner Hanging.glb": 42066,
      "./_Light Blue Bed Head.glb": 42069,
      "./_Light Blue Strongbed Head.glb": 42077,
      "./_Light Gray Banner Flag Hanging.glb": 42083,
      "./_Light Gray Banner Flag.glb": 42087,
      "./_Light Gray Banner Hanging.glb": 42096,
      "./_Light Gray Bed Head.glb": 42101,
      "./_Light Gray Strongbed Head.glb": 42105,
      "./_Lime Banner Flag Hanging.glb": 42111,
      "./_Lime Banner Flag.glb": 42115,
      "./_Lime Banner Hanging.glb": 42118,
      "./_Lime Bed Head.glb": 42127,
      "./_Lime Strongbed Head.glb": 42131,
      "./_Magenta Banner Flag Hanging.glb": 42137,
      "./_Magenta Banner Flag.glb": 42146,
      "./_Magenta Banner Hanging.glb": 42149,
      "./_Magenta Bed Head.glb": 42157,
      "./_Magenta Strongbed Head.glb": 42159,
      "./_Mango Door Top.glb": 42164,
      "./_Maple Door Top.glb": 42166,
      "./_Orange Banner Flag Hanging.glb": 42175,
      "./_Orange Banner Flag.glb": 42179,
      "./_Orange Banner Hanging.glb": 42186,
      "./_Orange Bed Head.glb": 42192,
      "./_Orange Strongbed Head.glb": 42194,
      "./_Palm Door Top.glb": 42197,
      "./_Pear Door Top.glb": 42206,
      "./_Pig Painting Bottom Left.glb": 42214,
      "./_Pig Painting Bottom Right.glb": 42221,
      "./_Pig Painting Top Left.glb": 42228,
      "./_Pig Painting Top Right.glb": 42236,
      "./_Pine Door Top.glb": 42245,
      "./_Pink Banner Flag Hanging.glb": 42253,
      "./_Pink Banner Flag.glb": 42262,
      "./_Pink Banner Hanging.glb": 42264,
      "./_Pink Bed Head.glb": 42270,
      "./_Pink Strongbed Head.glb": 42279,
      "./_Plum Door Top.glb": 42286,
      "./_Purple Banner Flag Hanging.glb": 42289,
      "./_Purple Banner Flag.glb": 42295,
      "./_Purple Banner Hanging.glb": 42303,
      "./_Purple Bed Head.glb": 42307,
      "./_Purple Strongbed Head.glb": 42315,
      "./_Radar Dish Down.glb": 42323,
      "./_Radar Dish Up.glb": 42328,
      "./_Rainbow Banner Flag Hanging.glb": 42333,
      "./_Rainbow Banner Flag.glb": 42340,
      "./_Rainbow Banner Hanging.glb": 42348,
      "./_Red Banner Flag Hanging.glb": 42356,
      "./_Red Banner Flag.glb": 42364,
      "./_Red Banner Hanging.glb": 42368,
      "./_Red Bed Head.glb": 42375,
      "./_Red Strongbed Head.glb": 42383,
      "./_Sheep Painting Bottom Left.glb": 42389,
      "./_Sheep Painting Bottom Right.glb": 42395,
      "./_Sheep Painting Top Left.glb": 42402,
      "./_Sheep Painting Top Right.glb": 42405,
      "./_Skull Banner Flag Hanging.glb": 42413,
      "./_Skull Banner Flag.glb": 42417,
      "./_Skull Banner Hanging.glb": 42422,
      "./_Small Black Pod Mid.glb": 42426,
      "./_Small Black Pod Top.glb": 42428,
      "./_Small Blue Pod Mid.glb": 42435,
      "./_Small Blue Pod Top.glb": 42443,
      "./_Small Brown Pod Mid.glb": 42445,
      "./_Small Brown Pod Top.glb": 42452,
      "./_Small Cyan Pod Mid.glb": 42458,
      "./_Small Cyan Pod Top.glb": 42467,
      "./_Small Gray Pod Mid.glb": 42473,
      "./_Small Gray Pod Top.glb": 42478,
      "./_Small Green Pod Mid.glb": 42482,
      "./_Small Green Pod Top.glb": 42490,
      "./_Small Light Blue Pod Mid.glb": 42499,
      "./_Small Light Blue Pod Top.glb": 42506,
      "./_Small Light Gray Pod Mid.glb": 42509,
      "./_Small Light Gray Pod Top.glb": 42511,
      "./_Small Lime Pod Mid.glb": 42517,
      "./_Small Lime Pod Top.glb": 42524,
      "./_Small Magenta Pod Mid.glb": 42527,
      "./_Small Magenta Pod Top.glb": 42533,
      "./_Small Middle Pod Mag.glb": 42538,
      "./_Small Orange Pod Mid.glb": 42541,
      "./_Small Orange Pod Top.glb": 42550,
      "./_Small Pink Pod Mid.glb": 42555,
      "./_Small Pink Pod Top.glb": 42564,
      "./_Small Purple Pod Mid.glb": 42566,
      "./_Small Purple Pod Top.glb": 42573,
      "./_Small Red Pod Mid.glb": 42577,
      "./_Small Red Pod Top.glb": 42585,
      "./_Small White Pod Mid.glb": 42594,
      "./_Small White Pod Top.glb": 42602,
      "./_Small Yellow Pod Mid.glb": 42611,
      "./_Small Yellow Pod Top.glb": 42613,
      "./_Spectral Door Top.glb": 42617,
      "./_White Banner Flag Hanging.glb": 42625,
      "./_White Banner Flag.glb": 42633,
      "./_White Banner Hanging.glb": 42636,
      "./_White Bed Head.glb": 42644,
      "./_White Strongbed Head.glb": 42649,
      "./_Wildcat Painting Bottom Left.glb": 42655,
      "./_Wildcat Painting Bottom Right.glb": 42659,
      "./_Wildcat Painting Top Left.glb": 42663,
      "./_Wildcat Painting Top Right.glb": 42666,
      "./_Wolf Painting Bottom Left.glb": 42673,
      "./_Wolf Painting Bottom Right.glb": 42678,
      "./_Wolf Painting Top Left.glb": 42684,
      "./_Wolf Painting Top Right.glb": 42690,
      "./_Yellow Banner Flag Hanging.glb": 42694,
      "./_Yellow Banner Flag.glb": 42696,
      "./_Yellow Banner Hanging.glb": 42700,
      "./_Yellow Bed Head.glb": 42706,
      "./_Yellow Strongbed Head.glb": 42709,
      "./auto_miner_body.glb": 42711,
      "./auto_miner_drill_back.glb": 42714,
      "./auto_miner_drill_front.glb": 42716,
      "./auto_miner_foot_back.glb": 42723,
      "./auto_miner_foot_front.glb": 42727,
      "./auto_miner_lunite_body.glb": 42729,
      "./auto_miner_lunite_drill_back.glb": 42737,
      "./auto_miner_lunite_drill_front.glb": 42741,
      "./auto_miner_lunite_foot_back.glb": 42750,
      "./auto_miner_lunite_foot_front.glb": 42755,
      "./baf2_coolant_pipe_none.glb": 42758,
      "./baf2_coolant_pipe_nx.glb": 42762,
      "./baf2_coolant_pipe_nx_ny.glb": 42770,
      "./baf2_coolant_pipe_nx_ny_nz.glb": 42779,
      "./baf2_coolant_pipe_nx_ny_nz_px.glb": 42781,
      "./baf2_coolant_pipe_nx_ny_nz_px_py.glb": 42789,
      "./baf2_coolant_pipe_nx_ny_nz_px_py_pz.glb": 42793,
      "./baf2_coolant_pipe_nx_ny_nz_px_pz.glb": 42800,
      "./baf2_coolant_pipe_nx_ny_nz_py.glb": 42804,
      "./baf2_coolant_pipe_nx_ny_nz_py_pz.glb": 42812,
      "./baf2_coolant_pipe_nx_ny_nz_pz.glb": 42821,
      "./baf2_coolant_pipe_nx_ny_px.glb": 42823,
      "./baf2_coolant_pipe_nx_ny_px_py.glb": 42828,
      "./baf2_coolant_pipe_nx_ny_px_py_pz.glb": 42833,
      "./baf2_coolant_pipe_nx_ny_px_pz.glb": 42838,
      "./baf2_coolant_pipe_nx_ny_py.glb": 42844,
      "./baf2_coolant_pipe_nx_ny_py_pz.glb": 42849,
      "./baf2_coolant_pipe_nx_ny_pz.glb": 42856,
      "./baf2_coolant_pipe_nx_nz.glb": 42859,
      "./baf2_coolant_pipe_nx_nz_px.glb": 42863,
      "./baf2_coolant_pipe_nx_nz_px_py.glb": 42866,
      "./baf2_coolant_pipe_nx_nz_px_py_pz.glb": 42872,
      "./baf2_coolant_pipe_nx_nz_px_pz.glb": 42880,
      "./baf2_coolant_pipe_nx_nz_py.glb": 42885,
      "./baf2_coolant_pipe_nx_nz_py_pz.glb": 42892,
      "./baf2_coolant_pipe_nx_nz_pz.glb": 42901,
      "./baf2_coolant_pipe_nx_px.glb": 42907,
      "./baf2_coolant_pipe_nx_px_py.glb": 42913,
      "./baf2_coolant_pipe_nx_px_py_pz.glb": 42922,
      "./baf2_coolant_pipe_nx_px_pz.glb": 42927,
      "./baf2_coolant_pipe_nx_py.glb": 42929,
      "./baf2_coolant_pipe_nx_py_pz.glb": 42932,
      "./baf2_coolant_pipe_nx_pz.glb": 42935,
      "./baf2_coolant_pipe_ny.glb": 42941,
      "./baf2_coolant_pipe_ny_nz.glb": 42948,
      "./baf2_coolant_pipe_ny_nz_px.glb": 42955,
      "./baf2_coolant_pipe_ny_nz_px_py.glb": 42964,
      "./baf2_coolant_pipe_ny_nz_px_py_pz.glb": 42969,
      "./baf2_coolant_pipe_ny_nz_px_pz.glb": 42976,
      "./baf2_coolant_pipe_ny_nz_py.glb": 42982,
      "./baf2_coolant_pipe_ny_nz_py_pz.glb": 42988,
      "./baf2_coolant_pipe_ny_nz_pz.glb": 42993,
      "./baf2_coolant_pipe_ny_px.glb": 42996,
      "./baf2_coolant_pipe_ny_px_py.glb": 42998,
      "./baf2_coolant_pipe_ny_px_py_pz.glb": 43005,
      "./baf2_coolant_pipe_ny_px_pz.glb": 43013,
      "./baf2_coolant_pipe_ny_py.glb": 43015,
      "./baf2_coolant_pipe_ny_py_pz.glb": 43020,
      "./baf2_coolant_pipe_ny_pz.glb": 43029,
      "./baf2_coolant_pipe_nz.glb": 43037,
      "./baf2_coolant_pipe_nz_px.glb": 43040,
      "./baf2_coolant_pipe_nz_px_py.glb": 43047,
      "./baf2_coolant_pipe_nz_px_py_pz.glb": 43049,
      "./baf2_coolant_pipe_nz_px_pz.glb": 43055,
      "./baf2_coolant_pipe_nz_py.glb": 43059,
      "./baf2_coolant_pipe_nz_py_pz.glb": 43068,
      "./baf2_coolant_pipe_nz_pz.glb": 43073,
      "./baf2_coolant_pipe_px.glb": 43078,
      "./baf2_coolant_pipe_px_py.glb": 43082,
      "./baf2_coolant_pipe_px_py_pz.glb": 43084,
      "./baf2_coolant_pipe_px_pz.glb": 43093,
      "./baf2_coolant_pipe_py.glb": 43097,
      "./baf2_coolant_pipe_py_pz.glb": 43106,
      "./baf2_coolant_pipe_pz.glb": 43114,
      "./baf2_fluid_pipe_none.glb": 43119,
      "./baf2_fluid_pipe_nx.glb": 43126,
      "./baf2_fluid_pipe_nx_ny.glb": 43131,
      "./baf2_fluid_pipe_nx_ny_nz.glb": 43135,
      "./baf2_fluid_pipe_nx_ny_nz_px.glb": 43142,
      "./baf2_fluid_pipe_nx_ny_nz_px_py.glb": 43151,
      "./baf2_fluid_pipe_nx_ny_nz_px_py_pz.glb": 43157,
      "./baf2_fluid_pipe_nx_ny_nz_px_pz.glb": 43163,
      "./baf2_fluid_pipe_nx_ny_nz_py.glb": 43170,
      "./baf2_fluid_pipe_nx_ny_nz_py_pz.glb": 43172,
      "./baf2_fluid_pipe_nx_ny_nz_pz.glb": 43180,
      "./baf2_fluid_pipe_nx_ny_px.glb": 43182,
      "./baf2_fluid_pipe_nx_ny_px_py.glb": 43188,
      "./baf2_fluid_pipe_nx_ny_px_py_pz.glb": 43194,
      "./baf2_fluid_pipe_nx_ny_px_pz.glb": 43197,
      "./baf2_fluid_pipe_nx_ny_py.glb": 43204,
      "./baf2_fluid_pipe_nx_ny_py_pz.glb": 43213,
      "./baf2_fluid_pipe_nx_ny_pz.glb": 43220,
      "./baf2_fluid_pipe_nx_nz.glb": 43225,
      "./baf2_fluid_pipe_nx_nz_px.glb": 43231,
      "./baf2_fluid_pipe_nx_nz_px_py.glb": 43233,
      "./baf2_fluid_pipe_nx_nz_px_py_pz.glb": 43236,
      "./baf2_fluid_pipe_nx_nz_px_pz.glb": 43241,
      "./baf2_fluid_pipe_nx_nz_py.glb": 43247,
      "./baf2_fluid_pipe_nx_nz_py_pz.glb": 43255,
      "./baf2_fluid_pipe_nx_nz_pz.glb": 43261,
      "./baf2_fluid_pipe_nx_px.glb": 43267,
      "./baf2_fluid_pipe_nx_px_py.glb": 43269,
      "./baf2_fluid_pipe_nx_px_py_pz.glb": 43276,
      "./baf2_fluid_pipe_nx_px_pz.glb": 43282,
      "./baf2_fluid_pipe_nx_py.glb": 43291,
      "./baf2_fluid_pipe_nx_py_pz.glb": 43296,
      "./baf2_fluid_pipe_nx_pz.glb": 43299,
      "./baf2_fluid_pipe_ny.glb": 43306,
      "./baf2_fluid_pipe_ny_nz.glb": 43315,
      "./baf2_fluid_pipe_ny_nz_px.glb": 43323,
      "./baf2_fluid_pipe_ny_nz_px_py.glb": 43326,
      "./baf2_fluid_pipe_ny_nz_px_py_pz.glb": 43329,
      "./baf2_fluid_pipe_ny_nz_px_pz.glb": 43338,
      "./baf2_fluid_pipe_ny_nz_py.glb": 43340,
      "./baf2_fluid_pipe_ny_nz_py_pz.glb": 43345,
      "./baf2_fluid_pipe_ny_nz_pz.glb": 43347,
      "./baf2_fluid_pipe_ny_px.glb": 43352,
      "./baf2_fluid_pipe_ny_px_py.glb": 43359,
      "./baf2_fluid_pipe_ny_px_py_pz.glb": 43368,
      "./baf2_fluid_pipe_ny_px_pz.glb": 43376,
      "./baf2_fluid_pipe_ny_py.glb": 43385,
      "./baf2_fluid_pipe_ny_py_pz.glb": 43391,
      "./baf2_fluid_pipe_ny_pz.glb": 43399,
      "./baf2_fluid_pipe_nz.glb": 43402,
      "./baf2_fluid_pipe_nz_px.glb": 43411,
      "./baf2_fluid_pipe_nz_px_py.glb": 43419,
      "./baf2_fluid_pipe_nz_px_py_pz.glb": 43422,
      "./baf2_fluid_pipe_nz_px_pz.glb": 43430,
      "./baf2_fluid_pipe_nz_py.glb": 43434,
      "./baf2_fluid_pipe_nz_py_pz.glb": 43437,
      "./baf2_fluid_pipe_nz_pz.glb": 43441,
      "./baf2_fluid_pipe_px.glb": 43447,
      "./baf2_fluid_pipe_px_py.glb": 43454,
      "./baf2_fluid_pipe_px_py_pz.glb": 43457,
      "./baf2_fluid_pipe_px_pz.glb": 43464,
      "./baf2_fluid_pipe_py.glb": 43472,
      "./baf2_fluid_pipe_py_pz.glb": 43476,
      "./baf2_fluid_pipe_pz.glb": 43484,
      "./baf2_water_pipe_none.glb": 43491,
      "./baf2_water_pipe_nx.glb": 43498,
      "./baf2_water_pipe_nx_ny.glb": 43500,
      "./baf2_water_pipe_nx_ny_nz.glb": 43502,
      "./baf2_water_pipe_nx_ny_nz_px.glb": 43506,
      "./baf2_water_pipe_nx_ny_nz_px_py.glb": 43515,
      "./baf2_water_pipe_nx_ny_nz_px_py_pz.glb": 43520,
      "./baf2_water_pipe_nx_ny_nz_px_pz.glb": 43528,
      "./baf2_water_pipe_nx_ny_nz_py.glb": 43536,
      "./baf2_water_pipe_nx_ny_nz_py_pz.glb": 43539,
      "./baf2_water_pipe_nx_ny_nz_pz.glb": 43547,
      "./baf2_water_pipe_nx_ny_px.glb": 43551,
      "./baf2_water_pipe_nx_ny_px_py.glb": 43557,
      "./baf2_water_pipe_nx_ny_px_py_pz.glb": 43562,
      "./baf2_water_pipe_nx_ny_px_pz.glb": 43564,
      "./baf2_water_pipe_nx_ny_py.glb": 43569,
      "./baf2_water_pipe_nx_ny_py_pz.glb": 43572,
      "./baf2_water_pipe_nx_ny_pz.glb": 43580,
      "./baf2_water_pipe_nx_nz.glb": 43586,
      "./baf2_water_pipe_nx_nz_px.glb": 43593,
      "./baf2_water_pipe_nx_nz_px_py.glb": 43601,
      "./baf2_water_pipe_nx_nz_px_py_pz.glb": 43607,
      "./baf2_water_pipe_nx_nz_px_pz.glb": 43611,
      "./baf2_water_pipe_nx_nz_py.glb": 43618,
      "./baf2_water_pipe_nx_nz_py_pz.glb": 43623,
      "./baf2_water_pipe_nx_nz_pz.glb": 43631,
      "./baf2_water_pipe_nx_px.glb": 43638,
      "./baf2_water_pipe_nx_px_py.glb": 43641,
      "./baf2_water_pipe_nx_px_py_pz.glb": 43644,
      "./baf2_water_pipe_nx_px_pz.glb": 43651,
      "./baf2_water_pipe_nx_py.glb": 43655,
      "./baf2_water_pipe_nx_py_pz.glb": 43664,
      "./baf2_water_pipe_nx_pz.glb": 43666,
      "./baf2_water_pipe_ny.glb": 43675,
      "./baf2_water_pipe_ny_nz.glb": 43678,
      "./baf2_water_pipe_ny_nz_px.glb": 43680,
      "./baf2_water_pipe_ny_nz_px_py.glb": 43688,
      "./baf2_water_pipe_ny_nz_px_py_pz.glb": 43695,
      "./baf2_water_pipe_ny_nz_px_pz.glb": 43702,
      "./baf2_water_pipe_ny_nz_py.glb": 43711,
      "./baf2_water_pipe_ny_nz_py_pz.glb": 43714,
      "./baf2_water_pipe_ny_nz_pz.glb": 43716,
      "./baf2_water_pipe_ny_px.glb": 43723,
      "./baf2_water_pipe_ny_px_py.glb": 43732,
      "./baf2_water_pipe_ny_px_py_pz.glb": 43734,
      "./baf2_water_pipe_ny_px_pz.glb": 43738,
      "./baf2_water_pipe_ny_py.glb": 43744,
      "./baf2_water_pipe_ny_py_pz.glb": 43748,
      "./baf2_water_pipe_ny_pz.glb": 43757,
      "./baf2_water_pipe_nz.glb": 43765,
      "./baf2_water_pipe_nz_px.glb": 43769,
      "./baf2_water_pipe_nz_px_py.glb": 43777,
      "./baf2_water_pipe_nz_px_py_pz.glb": 43780,
      "./baf2_water_pipe_nz_px_pz.glb": 43782,
      "./baf2_water_pipe_nz_py.glb": 43786,
      "./baf2_water_pipe_nz_py_pz.glb": 43791,
      "./baf2_water_pipe_nz_pz.glb": 43794,
      "./baf2_water_pipe_px.glb": 43803,
      "./baf2_water_pipe_px_py.glb": 43811,
      "./baf2_water_pipe_px_py_pz.glb": 43814,
      "./baf2_water_pipe_px_pz.glb": 43820,
      "./baf2_water_pipe_py.glb": 43827,
      "./baf2_water_pipe_py_pz.glb": 43831,
      "./baf2_water_pipe_pz.glb": 43834,
      "./beam_arm.glb": 43837,
      "./beam_arm_mirrored.glb": 43846,
      "./bebek_bebek_bebek.glb": 43854,
      "./bin.glb": 43861,
      "./bobino_musculino.glb": 43868,
      "./bobzilla.glb": 43877,
      "./boiling_pot.glb": 43884,
      "./bone_antlers_model.glb": 43888,
      "./boss_target.glb": 43897,
      "./brra_brra_pachim.glb": 43906,
      "./cannon_barrel_back.glb": 43912,
      "./cannon_barrel_front.glb": 43914,
      "./cannon_bottom_back.glb": 43917,
      "./cannon_bottom_front.glb": 43920,
      "./cannon_top_back.glb": 43927,
      "./cannon_top_front.glb": 43932,
      "./capitano_explovissimo.glb": 43940,
      "./cappuccino_ninjino.glb": 43948,
      "./carpet_black_model.glb": 43957,
      "./carpet_blue_model.glb": 43965,
      "./carpet_brown_model.glb": 43973,
      "./carpet_cyan_model.glb": 43978,
      "./carpet_gray_model.glb": 43984,
      "./carpet_green_model.glb": 43989,
      "./carpet_light_blue_model.glb": 43996,
      "./carpet_light_gray_model.glb": 44004,
      "./carpet_lime_model.glb": 44008,
      "./carpet_magenta_model.glb": 44011,
      "./carpet_orange_model.glb": 44017,
      "./carpet_pink_model.glb": 44021,
      "./carpet_purple_model.glb": 44026,
      "./carpet_red_model.glb": 44028,
      "./carpet_white_model.glb": 44035,
      "./carpet_yellow_model.glb": 44041,
      "./chili_pepper_stage0_lava_model.glb": 44048,
      "./chili_pepper_stage0_model.glb": 44056,
      "./chili_pepper_stage1_lava_model.glb": 44063,
      "./chili_pepper_stage1_model.glb": 44066,
      "./chili_pepper_stage2_lava_model.glb": 44068,
      "./chili_pepper_stage2_model.glb": 44075,
      "./chili_pepper_stage3_lava_model.glb": 44084,
      "./chili_pepper_stage3_model.glb": 44090,
      "./chili_pepper_stage4_lava_model.glb": 44099,
      "./chili_pepper_stage4_model.glb": 44105,
      "./chili_pepper_stage5_lava_model.glb": 44109,
      "./chili_pepper_stage5_model.glb": 44111,
      "./chili_pepper_stage6_lava_model.glb": 44115,
      "./chimpanzano_bananano.glb": 44121,
      "./chopping_board.glb": 44129,
      "./crystal.glb": 44131,
      "./eclipse_dial.glb": 44135,
      "./extractor_pipe_elbow_nx_ny.glb": 44141,
      "./extractor_pipe_elbow_nx_nz.glb": 44144,
      "./extractor_pipe_elbow_nx_py.glb": 44148,
      "./extractor_pipe_elbow_nx_pz.glb": 44156,
      "./extractor_pipe_elbow_ny_nz.glb": 44160,
      "./extractor_pipe_elbow_ny_px.glb": 44164,
      "./extractor_pipe_elbow_ny_pz.glb": 44167,
      "./extractor_pipe_elbow_nz_px.glb": 44170,
      "./extractor_pipe_elbow_nz_py.glb": 44179,
      "./extractor_pipe_elbow_px_py.glb": 44184,
      "./extractor_pipe_elbow_px_pz.glb": 44192,
      "./extractor_pipe_elbow_py_pz.glb": 44195,
      "./extractor_pipe_end_nx.glb": 44201,
      "./extractor_pipe_end_ny.glb": 44208,
      "./extractor_pipe_end_nz.glb": 44213,
      "./extractor_pipe_end_px.glb": 44216,
      "./extractor_pipe_end_py.glb": 44220,
      "./extractor_pipe_end_pz.glb": 44222,
      "./extractor_pipe_isolated.glb": 44226,
      "./extractor_pipe_straight_x.glb": 44233,
      "./extractor_pipe_straight_y.glb": 44237,
      "./extractor_pipe_straight_z.glb": 44244,
      "./filter_pipe_input_nx.glb": 44253,
      "./filter_pipe_input_ny.glb": 44261,
      "./filter_pipe_input_nz.glb": 44263,
      "./filter_pipe_input_px.glb": 44269,
      "./filter_pipe_input_py.glb": 44276,
      "./filter_pipe_input_pz.glb": 44281,
      "./floor_quarters.glb": 44290,
      "./football.glb": 44299,
      "./frying_pan.glb": 44307,
      "./glowing_mushroom.glb": 44310,
      "./glowing_mushroom_wall.glb": 44312,
      "./gold_antlers_model.glb": 44317,
      "./hob_boiling.glb": 44319,
      "./hob_frying.glb": 44323,
      "./il_wizardini_del_porko.glb": 44327,
      "./job_application.glb": 44334,
      "./john_beef.glb": 44339,
      "./jump_pad.glb": 44343,
      "./jump_pad_strong.glb": 44352,
      "./jump_pad_super.glb": 44358,
      "./jump_pad_weak.glb": 44364,
      "./kitchen_worktop.glb": 44367,
      "./landing_pad.glb": 44369,
      "./lantern.glb": 44378,
      "./lantern_wall.glb": 44386,
      "./lily_pad_model.glb": 44388,
      "./lucchia_blocchi.glb": 44395,
      "./merger_pipe_output_nx.glb": 44398,
      "./merger_pipe_output_ny.glb": 44405,
      "./merger_pipe_output_nz.glb": 44414,
      "./merger_pipe_output_px.glb": 44423,
      "./merger_pipe_output_py.glb": 44426,
      "./merger_pipe_output_pz.glb": 44429,
      "./monsieur_bedwar.glb": 44435,
      "./mortar_goblin.glb": 44443,
      "./noticeboard_standing.glb": 44451,
      "./noticeboard_standing_bottom.glb": 44460,
      "./noticeboard_standing_bottom_left.glb": 44464,
      "./noticeboard_standing_bottom_right.glb": 44467,
      "./noticeboard_standing_horizontal.glb": 44469,
      "./noticeboard_standing_horizontal_left.glb": 44473,
      "./noticeboard_standing_horizontal_right.glb": 44476,
      "./noticeboard_standing_left.glb": 44480,
      "./noticeboard_standing_leg.glb": 44488,
      "./noticeboard_standing_right.glb": 44492,
      "./noticeboard_standing_single.glb": 44497,
      "./noticeboard_standing_top.glb": 44502,
      "./noticeboard_standing_top_left.glb": 44504,
      "./noticeboard_standing_top_right.glb": 44507,
      "./noticeboard_standing_vertical.glb": 44514,
      "./noticeboard_standing_vertical_bottom.glb": 44518,
      "./noticeboard_standing_vertical_top.glb": 44522,
      "./noticeboard_wall.glb": 44526,
      "./noticeboard_wall_bottom.glb": 44528,
      "./noticeboard_wall_bottom_left.glb": 44530,
      "./noticeboard_wall_bottom_right.glb": 44539,
      "./noticeboard_wall_horizontal.glb": 44545,
      "./noticeboard_wall_horizontal_left.glb": 44553,
      "./noticeboard_wall_horizontal_right.glb": 44561,
      "./noticeboard_wall_left.glb": 44568,
      "./noticeboard_wall_right.glb": 44573,
      "./noticeboard_wall_single.glb": 44582,
      "./noticeboard_wall_top.glb": 44589,
      "./noticeboard_wall_top_left.glb": 44597,
      "./noticeboard_wall_top_right.glb": 44602,
      "./noticeboard_wall_vertical.glb": 44604,
      "./noticeboard_wall_vertical_bottom.glb": 44613,
      "./noticeboard_wall_vertical_top.glb": 44618,
      "./pipe_elbow_nx_ny.glb": 44625,
      "./pipe_elbow_nx_nz.glb": 44633,
      "./pipe_elbow_nx_py.glb": 44639,
      "./pipe_elbow_nx_pz.glb": 44644,
      "./pipe_elbow_ny_nz.glb": 44653,
      "./pipe_elbow_ny_px.glb": 44660,
      "./pipe_elbow_ny_pz.glb": 44667,
      "./pipe_elbow_nz_px.glb": 44670,
      "./pipe_elbow_nz_py.glb": 44679,
      "./pipe_elbow_px_py.glb": 44688,
      "./pipe_elbow_px_pz.glb": 44694,
      "./pipe_elbow_py_pz.glb": 44700,
      "./pipe_end_nx.glb": 44703,
      "./pipe_end_ny.glb": 44712,
      "./pipe_end_nz.glb": 44716,
      "./pipe_end_px.glb": 44721,
      "./pipe_end_py.glb": 44727,
      "./pipe_end_pz.glb": 44731,
      "./pipe_isolated.glb": 44736,
      "./pipe_straight_x.glb": 44738,
      "./pipe_straight_y.glb": 44747,
      "./pipe_straight_z.glb": 44754,
      "./rocket_full.glb": 44758,
      "./rocket_northeast_1.glb": 44760,
      "./rocket_northeast_2.glb": 44762,
      "./rocket_northeast_3.glb": 44765,
      "./rocket_northeast_4.glb": 44774,
      "./rocket_northeast_5.glb": 44778,
      "./rocket_northwest_1.glb": 44783,
      "./rocket_northwest_2.glb": 44787,
      "./rocket_northwest_3.glb": 44789,
      "./rocket_northwest_4.glb": 44798,
      "./rocket_northwest_5.glb": 44802,
      "./rocket_southeast_1.glb": 44809,
      "./rocket_southeast_2.glb": 44818,
      "./rocket_southeast_3.glb": 44826,
      "./rocket_southeast_4.glb": 44833,
      "./rocket_southeast_5.glb": 44836,
      "./rocket_southwest_1.glb": 44842,
      "./rocket_southwest_2.glb": 44846,
      "./rocket_southwest_3.glb": 44849,
      "./rocket_southwest_4.glb": 44855,
      "./rocket_southwest_5.glb": 44858,
      "./rune_sigil.glb": 44866,
      "./slicing_board.glb": 44873,
      "./slime_trail.glb": 44878,
      "./splitter_pipe.glb": 44881,
      "./torch.glb": 44888,
      "./torch_black.glb": 44896,
      "./torch_blue.glb": 44905,
      "./torch_brown.glb": 44908,
      "./torch_cyan.glb": 44912,
      "./torch_gray.glb": 44914,
      "./torch_green.glb": 44922,
      "./torch_light_blue.glb": 44928,
      "./torch_light_gray.glb": 44931,
      "./torch_lime.glb": 44939,
      "./torch_magenta.glb": 44947,
      "./torch_orange.glb": 44955,
      "./torch_pink.glb": 44959,
      "./torch_purple.glb": 44965,
      "./torch_red.glb": 44973,
      "./torch_wall.glb": 44982,
      "./torch_wall_black.glb": 44989,
      "./torch_wall_blue.glb": 44996,
      "./torch_wall_brown.glb": 45e3,
      "./torch_wall_cyan.glb": 45007,
      "./torch_wall_gray.glb": 45009,
      "./torch_wall_green.glb": 45013,
      "./torch_wall_light_blue.glb": 45015,
      "./torch_wall_light_gray.glb": 45023,
      "./torch_wall_lime.glb": 45027,
      "./torch_wall_magenta.glb": 45030,
      "./torch_wall_orange.glb": 45036,
      "./torch_wall_pink.glb": 45043,
      "./torch_wall_purple.glb": 45051,
      "./torch_wall_red.glb": 45057,
      "./torch_wall_white.glb": 45064,
      "./torch_wall_yellow.glb": 45066,
      "./torch_white.glb": 45074,
      "./torch_yellow.glb": 45083,
      "./twirlina_cappucina.glb": 45088,
      "./ufo.glb": 45095,
      "./vending_machine_bottom.glb": 45104,
      "./vending_machine_top.glb": 45111,
      "./wave_black.glb": 45117,
      "./wave_blue.glb": 45122,
      "./wave_brown.glb": 45127,
      "./wave_cyan.glb": 45134,
      "./wave_green.glb": 45140,
      "./wave_grey.glb": 45148,
      "./wave_light_blue.glb": 45154,
      "./wave_light_grey.glb": 45157,
      "./wave_lime.glb": 45162,
      "./wave_magenta.glb": 45167,
      "./wave_orange.glb": 45169,
      "./wave_pink.glb": 45171,
      "./wave_purple.glb": 45177,
      "./wave_red.glb": 45182,
      "./wave_white.glb": 45185,
      "./wave_yellow.glb": 45187,
      "./wheel.glb": 45195,
      "./wire_elbow_nx_ny.glb": 45201,
      "./wire_elbow_nx_nz.glb": 45205,
      "./wire_elbow_nx_py.glb": 45208,
      "./wire_elbow_nx_pz.glb": 45217,
      "./wire_elbow_ny_nz.glb": 45222,
      "./wire_elbow_ny_px.glb": 45231,
      "./wire_elbow_ny_pz.glb": 45233,
      "./wire_elbow_nz_px.glb": 45241,
      "./wire_elbow_nz_py.glb": 45244,
      "./wire_elbow_px_py.glb": 45251,
      "./wire_elbow_px_pz.glb": 45260,
      "./wire_elbow_py_pz.glb": 45267,
      "./wire_end_nx.glb": 45273,
      "./wire_end_ny.glb": 45282,
      "./wire_end_nz.glb": 45284,
      "./wire_end_px.glb": 45291,
      "./wire_end_py.glb": 45293,
      "./wire_end_pz.glb": 45300,
      "./wire_isolated.glb": 45307,
      "./wire_straight_x.glb": 45309,
      "./wire_straight_y.glb": 45314,
      "./wire_straight_z.glb": 45322
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 40822
  },
  48914: (WW, RW, MW) => {
    var wW = {
      "./arrow.png": 48919,
      "./bubble.png": 48925,
      "./critical_hit.png": 48929,
      "./drift.png": 48931,
      "./effect_5.png": 48935,
      "./fishingFishSilhouette.png": 48944,
      "./generic_2.png": 48947,
      "./glint.png": 48953,
      "./heart.png": 48958,
      "./scary_face.png": 48967,
      "./soul_0.png": 48973,
      "./square_particle.png": 48977,
      "./z-particle.png": 48984
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 48914
  },
  40813: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ATTACHMENT_IMAGE_NAMES: () => YW,
      CAPE_NAMES: () => gR,
      GROUP_ATLAS_PATHS: () => tR,
      LIFEFORM_ATLAS_PATHS: () => NW,
      MODEL_FILE_PATHS: () => CW,
      PARTICLE_TEXTURE_NAMES: () => lW,
      PLAYER_FILE: () => BW,
      attachmentImageUrl: () => JW,
      blockImageName: () => oW,
      blockImageUrl: () => IW,
      capeUrl: () => iR,
      filePackName: () => bR,
      fileSource: () => AW,
      fileUrl: () => yR,
      groupAtlasUrl: () => TW,
      lifeformAtlasUrl: () => eW,
      particleTextureUrl: () => FW
    });
    const wW = "BBSSSSSSSSSSSSSSSBBBSBBSSSSSSBBBBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBSBSBBSBBSBBSBBSBBSBBBBBBBBSBBSBSSSSSSBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSSSSSSSBSBBSBBSBSBSBSBSBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBBBBSBBBBBBBBBBBBSSSSSSSSSSSSBSBBSBBSBSBSBSBSSSSSSSSBSBSSBBSSSBSBBSBSBSBSSSSSSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSBSBSBSBSBBBSBBBSBBSSBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBBBBSSSSSSSBBBSSBSBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSBBBBBBBBBBBBBBSSSSSSSSSSSSSSSBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSLlLLLLLLLLLLLLLLLLLLLLLLLlLlLlLlLlLlLlLlLLlLlLlLlLlLlLlLlLlLLlLLlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      CW = ["Fence", "FenceGate", "Cactus", "Grass", "Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Furnace", "Workbench", "Maple Door", "Maple Door", "_Maple Door Top", "Maple Trapdoor", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Maple Ladder", "Vines", "Iron Ladder", "Artisan Bench", "Wheat Seeds", "Wheat", "White Bed", "White Bed", "_White Bed Head", "Orange Bed", "Orange Bed", "_Orange Bed Head", "Magenta Bed", "Magenta Bed", "_Magenta Bed Head", "Light Blue Bed", "Light Blue Bed", "_Light Blue Bed Head", "Yellow Bed", "Yellow Bed", "_Yellow Bed Head", "Lime Bed", "Lime Bed", "_Lime Bed Head", "Pink Bed", "Pink Bed", "_Pink Bed Head", "Gray Bed", "Gray Bed", "_Gray Bed Head", "Light Gray Bed", "Light Gray Bed", "_Light Gray Bed Head", "Cyan Bed", "Cyan Bed", "_Cyan Bed Head", "Purple Bed", "Purple Bed", "_Purple Bed Head", "Blue Bed", "Blue Bed", "_Blue Bed Head", "Brown Bed", "Brown Bed", "_Brown Bed Head", "Green Bed", "Green Bed", "_Green Bed Head", "Red Bed", "Red Bed", "_Red Bed Head", "Black Bed", "Black Bed", "_Black Bed Head", "Palm Sapling", "Pine Door", "Pine Door", "_Pine Door Top", "Plum Door", "Plum Door", "_Plum Door Top", "Cedar Door", "Cedar Door", "_Cedar Door Top", "Aspen Door", "Aspen Door", "_Aspen Door Top", "Jungle Door", "Jungle Door", "_Jungle Door Top", "Palm Door", "Palm Door", "_Palm Door Top", "Pine Trapdoor", "Plum Trapdoor", "Cedar Trapdoor", "Aspen Trapdoor", "Jungle Trapdoor", "Palm Trapdoor", "Pear Door", "Pear Door", "_Pear Door Top", "Pear Trapdoor", "Pear Sapling", "Board", "Board", "Net", "Cobweb", "Watermelon Seeds", "Pumpkin Seeds", "Melon Seeds", "Potion Table", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "carpet_black_model", "Black Carpet", "carpet_blue_model", "Blue Carpet", "carpet_brown_model", "Brown Carpet", "carpet_cyan_model", "Cyan Carpet", "carpet_gray_model", "Gray Carpet", "carpet_light_gray_model", "Light Gray Carpet", "carpet_green_model", "Green Carpet", "carpet_light_blue_model", "Light Blue Carpet", "carpet_lime_model", "Lime Carpet", "carpet_magenta_model", "Magenta Carpet", "carpet_orange_model", "Orange Carpet", "carpet_pink_model", "Pink Carpet", "carpet_purple_model", "Purple Carpet", "carpet_red_model", "Red Carpet", "carpet_white_model", "White Carpet", "carpet_yellow_model", "Yellow Carpet", "Rice", "Cranberries", "Red Mushroom", "Brown Mushroom", "Cotton Seeds", "Tall Grass", "Cherry Door", "Cherry Door", "_Cherry Door Top", "Cherry Trapdoor", "Cherry Sapling", "Cherry Ladder", "Spikes_Wood", "Wood Spikes", "Spikes_Stone", "Stone Spikes", "Spikes_Iron", "Iron Spikes", "Spikes_Gold", "Gold Spikes", "Spikes_Diamond", "Diamond Spikes", "Spikes_Kill", "Kill Spikes", "Corn Seeds", "White Strongbed", "White Strongbed", "_White Strongbed Head", "Orange Strongbed", "Orange Strongbed", "_Orange Strongbed Head", "Magenta Strongbed", "Magenta Strongbed", "_Magenta Strongbed Head", "Light Blue Strongbed", "Light Blue Strongbed", "_Light Blue Strongbed Head", "Yellow Strongbed", "Yellow Strongbed", "_Yellow Strongbed Head", "Lime Strongbed", "Lime Strongbed", "_Lime Strongbed Head", "Pink Strongbed", "Pink Strongbed", "_Pink Strongbed Head", "Gray Strongbed", "Gray Strongbed", "_Gray Strongbed Head", "Light Gray Strongbed", "Light Gray Strongbed", "_Light Gray Strongbed Head", "Cyan Strongbed", "Cyan Strongbed", "_Cyan Strongbed Head", "Purple Strongbed", "Purple Strongbed", "_Purple Strongbed Head", "Blue Strongbed", "Blue Strongbed", "_Blue Strongbed Head", "Brown Strongbed", "Brown Strongbed", "_Brown Strongbed Head", "Green Strongbed", "Green Strongbed", "_Green Strongbed Head", "Red Strongbed", "Red Strongbed", "_Red Strongbed Head", "Black Strongbed", "Black Strongbed", "_Black Strongbed Head", "Timed Spike Bomb Block", "Fat Brown Mushroom", "Fat Red Mushroom", "chili_pepper_stage0_model", "Chili Pepper Seeds", "chili_pepper_stage1_model", "chili_pepper_stage2_model", "chili_pepper_stage3_model", "chili_pepper_stage4_model", "chili_pepper_stage5_model", "chili_pepper_stage0_lava_model", "chili_pepper_stage1_lava_model", "chili_pepper_stage2_lava_model", "chili_pepper_stage3_lava_model", "chili_pepper_stage4_lava_model", "chili_pepper_stage5_lava_model", "chili_pepper_stage6_lava_model", "Pig Spawner Block", "Cow Spawner Block", "Sheep Spawner Block", "Cave Golem Spawner Block", "Draugr Zombie Spawner Block", "Draugr Skeleton Spawner Block", "Empty Spawner Block", "Frost Golem Spawner Block", "Frost Zombie Spawner Block", "Frost Skeleton Spawner Block", "Draugr Knight Spawner Block", "Spectral Grass", "Spectral Door", "Spectral Door", "_Spectral Door Top", "Spectral Trapdoor", "Spectral Sapling", "Spectral Ladder", "Wood Enchanting Table", "Wood Enchanting Table", "Stone Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table", "Diamond Enchanting Table", "Pine Grass", "Pine Fern", "Fallen Pine Cone", "Wolf Spawner Block", "Bear Spawner Block", "Deer Spawner Block", "Stag Spawner Block", "bone_antlers_model", "Bone Antlers", "gold_antlers_model", "Gold Antlers", "Gold Watermelon Stag Spawner Block", "Salvaging Table", "Leaf Bed", "Leaf Bed", "Jungle Tall Grass", "Catnip", "Mango Door", "Mango Door", "_Mango Door Top", "Mango Trapdoor", "Mango Sapling", "Mango Ladder", "Banana Seeds", "Dangling Rope", "Dangling Rope", "Dangling Vine", "Dangling Vine", "Gorilla Spawner Block", "Wildcat Spawner Block", "Draugr Huntress Spawner Block", "Magma Golem Spawner Block", "Horse Spawner Block", "Autumn Fern", "Carrot Seeds", "Potato Seeds", "Beetroot Seeds", "White Banner", "White Banner", "_White Banner Flag Hanging", "_White Banner Flag", "_White Banner Hanging", "Orange Banner", "Orange Banner", "_Orange Banner Flag Hanging", "_Orange Banner Flag", "_Orange Banner Hanging", "Magenta Banner", "Magenta Banner", "_Magenta Banner Flag Hanging", "_Magenta Banner Flag", "_Magenta Banner Hanging", "Light Blue Banner", "Light Blue Banner", "_Light Blue Banner Flag Hanging", "_Light Blue Banner Flag", "_Light Blue Banner Hanging", "Yellow Banner", "Yellow Banner", "_Yellow Banner Flag Hanging", "_Yellow Banner Flag", "_Yellow Banner Hanging", "Lime Banner", "Lime Banner", "_Lime Banner Flag Hanging", "_Lime Banner Flag", "_Lime Banner Hanging", "Pink Banner", "Pink Banner", "_Pink Banner Flag Hanging", "_Pink Banner Flag", "_Pink Banner Hanging", "Gray Banner", "Gray Banner", "_Gray Banner Flag Hanging", "_Gray Banner Flag", "_Gray Banner Hanging", "Light Gray Banner", "Light Gray Banner", "_Light Gray Banner Flag Hanging", "_Light Gray Banner Flag", "_Light Gray Banner Hanging", "Cyan Banner", "Cyan Banner", "_Cyan Banner Flag Hanging", "_Cyan Banner Flag", "_Cyan Banner Hanging", "Purple Banner", "Purple Banner", "_Purple Banner Flag Hanging", "_Purple Banner Flag", "_Purple Banner Hanging", "Blue Banner", "Blue Banner", "_Blue Banner Flag Hanging", "_Blue Banner Flag", "_Blue Banner Hanging", "Brown Banner", "Brown Banner", "_Brown Banner Flag Hanging", "_Brown Banner Flag", "_Brown Banner Hanging", "Green Banner", "Green Banner", "_Green Banner Flag Hanging", "_Green Banner Flag", "_Green Banner Hanging", "Red Banner", "Red Banner", "_Red Banner Flag Hanging", "_Red Banner Flag", "_Red Banner Hanging", "Black Banner", "Black Banner", "_Black Banner Flag Hanging", "_Black Banner Flag", "_Black Banner Hanging", "Draugr Banner", "Draugr Banner", "_Draugr Banner Flag Hanging", "_Draugr Banner Flag", "_Draugr Banner Hanging", "Spirit Golem Spawner Block", "Spirit Wolf Spawner Block", "Spirit Bear Spawner Block", "Spirit Stag Spawner Block", "Spirit Gorilla Spawner Block", "_Sheep Painting Top Left", "Sheep Painting", "_Sheep Painting Top Right", "_Sheep Painting Bottom Left", "_Sheep Painting Bottom Right", "_Cow Painting Top Left", "Cow Painting", "_Cow Painting Top Right", "_Cow Painting Bottom Left", "_Cow Painting Bottom Right", "_Pig Painting Top Left", "Pig Painting", "_Pig Painting Top Right", "_Pig Painting Bottom Left", "_Pig Painting Bottom Right", "_Horse Painting Top Left", "Horse Painting", "_Horse Painting Top Right", "_Horse Painting Bottom Left", "_Horse Painting Bottom Right", "_Wolf Painting Top Left", "Wolf Painting", "_Wolf Painting Top Right", "_Wolf Painting Bottom Left", "_Wolf Painting Bottom Right", "_Deer Painting Top Left", "Deer Painting", "_Deer Painting Top Right", "_Deer Painting Bottom Left", "_Deer Painting Bottom Right", "_Wildcat Painting Top Left", "Wildcat Painting", "_Wildcat Painting Top Right", "_Wildcat Painting Bottom Left", "_Wildcat Painting Bottom Right", "Draugr Warper Spawner Block", "Radar", "_Radar Dish Up", "Inactive Radar", "_Radar Dish Down", "Active Radar", "Gold Trophy", "Gold Trophy", "Small Magenta Pod", "Small Magenta Pod", "_Small Magenta Pod Mid", "_Small Magenta Pod Top", "Small Light Gray Pod", "Small Light Gray Pod", "_Small Light Gray Pod Mid", "_Small Light Gray Pod Top", "Small Red Pod", "Small Red Pod", "_Small Red Pod Mid", "_Small Red Pod Top", "Frost Wraith Spawner Block", "Draugr Reaver Spawner Block", "Small White Pod", "Small White Pod", "_Small White Pod Mid", "_Small White Pod Top", "Small Orange Pod", "Small Orange Pod", "_Small Orange Pod Mid", "_Small Orange Pod Top", "Small Light Blue Pod", "Small Light Blue Pod", "_Small Light Blue Pod Mid", "_Small Light Blue Pod Top", "Small Yellow Pod", "Small Yellow Pod", "_Small Yellow Pod Mid", "_Small Yellow Pod Top", "Small Lime Pod", "Small Lime Pod", "_Small Lime Pod Mid", "_Small Lime Pod Top", "Small Pink Pod", "Small Pink Pod", "_Small Pink Pod Mid", "_Small Pink Pod Top", "Small Gray Pod", "Small Gray Pod", "_Small Gray Pod Mid", "_Small Gray Pod Top", "Small Cyan Pod", "Small Cyan Pod", "_Small Cyan Pod Mid", "_Small Cyan Pod Top", "Small Purple Pod", "Small Purple Pod", "_Small Purple Pod Mid", "_Small Purple Pod Top", "Small Blue Pod", "Small Blue Pod", "_Small Blue Pod Mid", "_Small Blue Pod Top", "Small Brown Pod", "Small Brown Pod", "_Small Brown Pod Mid", "_Small Brown Pod Top", "Small Green Pod", "Small Green Pod", "_Small Green Pod Mid", "_Small Green Pod Top", "Small Black Pod", "Small Black Pod", "_Small Black Pod Mid", "_Small Black Pod Top", "Skull Banner", "Skull Banner", "_Skull Banner Flag Hanging", "_Skull Banner Flag", "_Skull Banner Hanging", "Rainbow Banner", "Rainbow Banner", "_Rainbow Banner Flag Hanging", "_Rainbow Banner Flag", "_Rainbow Banner Hanging", "2_block", "bebek_bebek_bebek", "bobino_musculino", "bobzilla", "brra_brra_pachim", "capitano_explovissimo", "cappuccino_ninjino", "chimpanzano_bananano", "il_wizardini_del_porko", "lucchia_blocchi", "monsieur_bedwar", "twirlina_cappucina", "boiling_pot", "chopping_board", "frying_pan", "hob_boiling", "hob_frying", "kitchen_worktop", "slicing_board", "Wood Trophy", "Wood Trophy", "Stone Trophy", "Stone Trophy", "Iron Trophy", "Iron Trophy", "Diamond Trophy", "Diamond Trophy", "Moonstone Trophy", "Moonstone Trophy", "wave_black", "wave_blue", "wave_brown", "wave_cyan", "wave_green", "wave_grey", "wave_light_blue", "wave_light_grey", "wave_lime", "wave_magenta", "wave_orange", "wave_pink", "wave_purple", "wave_red", "wave_white", "wave_yellow", "White Directional Arrow", "Orange Directional Arrow", "Magenta Directional Arrow", "Light Blue Directional Arrow", "Yellow Directional Arrow", "Lime Directional Arrow", "Pink Directional Arrow", "Grey Directional Arrow", "Light Grey Directional Arrow", "Cyan Directional Arrow", "Purple Directional Arrow", "Blue Directional Arrow", "Brown Directional Arrow", "Green Directional Arrow", "Red Directional Arrow", "Black Directional Arrow", "bin", "vending_machine_bottom", "Vending Machine", "vending_machine_top", "job_application", "john_beef", "67", "wheel", "ufo", "torch", "torch_wall", "torch_yellow", "torch_wall_yellow", "torch_white", "torch_wall_white", "torch_red", "torch_wall_red", "torch_purple", "torch_wall_purple", "torch_pink", "torch_wall_pink", "torch_orange", "torch_wall_orange", "torch_magenta", "torch_wall_magenta", "torch_lime", "torch_wall_lime", "torch_light_gray", "torch_wall_light_gray", "torch_light_blue", "torch_wall_light_blue", "torch_green", "torch_wall_green", "torch_gray", "torch_wall_gray", "torch_cyan", "torch_wall_cyan", "torch_brown", "torch_wall_brown", "torch_blue", "torch_wall_blue", "torch_black", "torch_wall_black", "landing_pad", "Landing Pad", "jump_pad_weak", "Weak Jump Pad", "jump_pad", "Jump Pad", "jump_pad_strong", "Strong Jump Pad", "jump_pad_super", "Super Jump Pad", "football", "glowing_mushroom", "glowing_mushroom_wall", "crystal", "slime_trail", "Slime Trail", "pipe_isolated", "pipe_end_nx", "pipe_end_ny", "pipe_end_nz", "pipe_end_px", "pipe_end_py", "pipe_end_pz", "pipe_elbow_nx_ny", "pipe_elbow_nx_nz", "pipe_straight_x", "pipe_elbow_nx_py", "pipe_elbow_nx_pz", "pipe_elbow_ny_nz", "pipe_elbow_ny_px", "pipe_straight_y", "pipe_elbow_ny_pz", "pipe_elbow_nz_px", "pipe_elbow_nz_py", "pipe_straight_z", "pipe_elbow_px_py", "pipe_elbow_px_pz", "pipe_elbow_py_pz", "auto_miner_foot_back", "Auto Miner", "auto_miner_drill_front", "auto_miner_drill_back", "auto_miner_foot_front", "auto_miner_body", "rocket_southwest_1", "Rocket Ship", "rocket_southwest_2", "rocket_southwest_3", "rocket_southwest_4", "rocket_southwest_5", "rocket_southeast_1", "rocket_southeast_2", "rocket_southeast_3", "rocket_southeast_4", "rocket_southeast_5", "rocket_northwest_1", "rocket_northwest_2", "rocket_northwest_3", "rocket_northwest_4", "rocket_northwest_5", "rocket_northeast_1", "rocket_northeast_2", "rocket_northeast_3", "rocket_northeast_4", "rocket_northeast_5", "rocket_full", "extractor_pipe_isolated", "extractor_pipe_end_nx", "extractor_pipe_end_ny", "extractor_pipe_end_nz", "extractor_pipe_end_px", "extractor_pipe_end_py", "extractor_pipe_end_pz", "extractor_pipe_elbow_nx_ny", "extractor_pipe_elbow_nx_nz", "extractor_pipe_straight_x", "extractor_pipe_elbow_nx_py", "extractor_pipe_elbow_nx_pz", "extractor_pipe_elbow_ny_nz", "extractor_pipe_elbow_ny_px", "extractor_pipe_straight_y", "extractor_pipe_elbow_ny_pz", "extractor_pipe_elbow_nz_px", "extractor_pipe_elbow_nz_py", "extractor_pipe_straight_z", "extractor_pipe_elbow_px_py", "extractor_pipe_elbow_px_pz", "extractor_pipe_elbow_py_pz", "splitter_pipe", "wire_isolated", "wire_end_nx", "wire_end_ny", "wire_end_nz", "wire_end_px", "wire_end_py", "wire_end_pz", "wire_elbow_nx_ny", "wire_elbow_nx_nz", "wire_straight_x", "wire_elbow_nx_py", "wire_elbow_nx_pz", "wire_elbow_ny_nz", "wire_elbow_ny_px", "wire_straight_y", "wire_elbow_ny_pz", "wire_elbow_nz_px", "wire_elbow_nz_py", "wire_straight_z", "wire_elbow_px_py", "wire_elbow_px_pz", "wire_elbow_py_pz", "filter_pipe_input_pz", "filter_pipe_input_nx", "filter_pipe_input_ny", "filter_pipe_input_nz", "filter_pipe_input_px", "filter_pipe_input_py", "merger_pipe_output_pz", "merger_pipe_output_nx", "merger_pipe_output_ny", "merger_pipe_output_nz", "merger_pipe_output_px", "merger_pipe_output_py", "Stalker Spawner Block", "auto_miner_lunite_foot_back", "Lunite Auto Miner", "auto_miner_lunite_drill_front", "auto_miner_lunite_drill_back", "auto_miner_lunite_foot_front", "auto_miner_lunite_body", "Crone Spawner Block", "Slime Spawner Block", "Iron Guardian Spawner Block", "Gold Guardian Spawner Block", "Diamond Guardian Spawner Block", "Moonstone Guardian Spawner Block", "Dead Bush", "lantern", "lantern_wall", "lily_pad_model", "Lily Pad", "Camel Spawner Block", "_Camel Painting Top Left", "Camel Painting", "_Camel Painting Top Right", "_Camel Painting Bottom Left", "_Camel Painting Bottom Right", "Small Twin Icicle", "Medium Icicle", "Large Icicle", "Large Twin Icicle", "noticeboard_standing", "noticeboard_standing_top", "noticeboard_standing_bottom", "noticeboard_standing_left", "noticeboard_standing_right", "noticeboard_standing_top_left", "noticeboard_standing_top_right", "noticeboard_standing_bottom_left", "noticeboard_standing_bottom_right", "noticeboard_standing_leg", "noticeboard_wall", "noticeboard_wall_top", "noticeboard_wall_bottom", "noticeboard_wall_left", "noticeboard_wall_right", "noticeboard_wall_top_left", "noticeboard_wall_top_right", "noticeboard_wall_bottom_left", "noticeboard_wall_bottom_right", "Tiki Terror Spawner Block", "Maple Fence", "Pine Fence", "Plum Fence", "Cedar Fence", "Aspen Fence", "Jungle Fence", "Palm Fence", "Pear Fence", "Cherry Fence", "Spectral Fence", "Mango Fence", "noticeboard_wall_single", "noticeboard_wall_horizontal_right", "noticeboard_wall_horizontal_left", "noticeboard_wall_horizontal", "noticeboard_wall_vertical_bottom", "noticeboard_wall_vertical_top", "noticeboard_wall_vertical", "noticeboard_standing_single", "noticeboard_standing_horizontal_right", "noticeboard_standing_horizontal_left", "noticeboard_standing_horizontal", "noticeboard_standing_vertical_bottom", "noticeboard_standing_vertical_top", "noticeboard_standing_vertical", "Maple Fence Gate", "Pine Fence Gate", "Plum Fence Gate", "Cedar Fence Gate", "Aspen Fence Gate", "Jungle Fence Gate", "Palm Fence Gate", "Pear Fence Gate", "Cherry Fence Gate", "Spectral Fence Gate", "Mango Fence Gate", "Iron Goofy Golem Spawner Block", "Gold Goofy Golem Spawner Block", "Diamond Goofy Golem Spawner Block", "Moonstone Goofy Golem Spawner Block", "cannon_bottom_back", "cannon_bottom_front", "cannon_barrel_back", "cannon_barrel_front", "cannon_top_back", "cannon_top_front", "floor_quarters", "boss_target", "rune_sigil", "eclipse_dial", "beam_arm", "beam_arm_mirrored", "mortar_goblin", "Showcase", "Pine Item Pedestal", "Plum Item Pedestal", "Cedar Item Pedestal", "Aspen Item Pedestal", "Jungle Item Pedestal", "Palm Item Pedestal", "Pear Item Pedestal", "Cherry Item Pedestal", "Spectral Item Pedestal", "Mango Item Pedestal", "baf2_fluid_pipe_none", "Fluid Pipe", "baf2_fluid_pipe_nx", "baf2_fluid_pipe_ny", "baf2_fluid_pipe_nx_ny", "baf2_fluid_pipe_nz", "baf2_fluid_pipe_nx_nz", "baf2_fluid_pipe_ny_nz", "baf2_fluid_pipe_nx_ny_nz", "baf2_fluid_pipe_px", "baf2_fluid_pipe_nx_px", "baf2_fluid_pipe_ny_px", "baf2_fluid_pipe_nx_ny_px", "baf2_fluid_pipe_nz_px", "baf2_fluid_pipe_nx_nz_px", "baf2_fluid_pipe_ny_nz_px", "baf2_fluid_pipe_nx_ny_nz_px", "baf2_fluid_pipe_py", "baf2_fluid_pipe_nx_py", "baf2_fluid_pipe_ny_py", "baf2_fluid_pipe_nx_ny_py", "baf2_fluid_pipe_nz_py", "baf2_fluid_pipe_nx_nz_py", "baf2_fluid_pipe_ny_nz_py", "baf2_fluid_pipe_nx_ny_nz_py", "baf2_fluid_pipe_px_py", "baf2_fluid_pipe_nx_px_py", "baf2_fluid_pipe_ny_px_py", "baf2_fluid_pipe_nx_ny_px_py", "baf2_fluid_pipe_nz_px_py", "baf2_fluid_pipe_nx_nz_px_py", "baf2_fluid_pipe_ny_nz_px_py", "baf2_fluid_pipe_nx_ny_nz_px_py", "baf2_fluid_pipe_pz", "baf2_fluid_pipe_nx_pz", "baf2_fluid_pipe_ny_pz", "baf2_fluid_pipe_nx_ny_pz", "baf2_fluid_pipe_nz_pz", "baf2_fluid_pipe_nx_nz_pz", "baf2_fluid_pipe_ny_nz_pz", "baf2_fluid_pipe_nx_ny_nz_pz", "baf2_fluid_pipe_px_pz", "baf2_fluid_pipe_nx_px_pz", "baf2_fluid_pipe_ny_px_pz", "baf2_fluid_pipe_nx_ny_px_pz", "baf2_fluid_pipe_nz_px_pz", "baf2_fluid_pipe_nx_nz_px_pz", "baf2_fluid_pipe_ny_nz_px_pz", "baf2_fluid_pipe_nx_ny_nz_px_pz", "baf2_fluid_pipe_py_pz", "baf2_fluid_pipe_nx_py_pz", "baf2_fluid_pipe_ny_py_pz", "baf2_fluid_pipe_nx_ny_py_pz", "baf2_fluid_pipe_nz_py_pz", "baf2_fluid_pipe_nx_nz_py_pz", "baf2_fluid_pipe_ny_nz_py_pz", "baf2_fluid_pipe_nx_ny_nz_py_pz", "baf2_fluid_pipe_px_py_pz", "baf2_fluid_pipe_nx_px_py_pz", "baf2_fluid_pipe_ny_px_py_pz", "baf2_fluid_pipe_nx_ny_px_py_pz", "baf2_fluid_pipe_nz_px_py_pz", "baf2_fluid_pipe_nx_nz_px_py_pz", "baf2_fluid_pipe_ny_nz_px_py_pz", "baf2_fluid_pipe_nx_ny_nz_px_py_pz", "baf2_water_pipe_none", "baf2_water_pipe_nx", "baf2_water_pipe_ny", "baf2_water_pipe_nx_ny", "baf2_water_pipe_nz", "baf2_water_pipe_nx_nz", "baf2_water_pipe_ny_nz", "baf2_water_pipe_nx_ny_nz", "baf2_water_pipe_px", "baf2_water_pipe_nx_px", "baf2_water_pipe_ny_px", "baf2_water_pipe_nx_ny_px", "baf2_water_pipe_nz_px", "baf2_water_pipe_nx_nz_px", "baf2_water_pipe_ny_nz_px", "baf2_water_pipe_nx_ny_nz_px", "baf2_water_pipe_py", "baf2_water_pipe_nx_py", "baf2_water_pipe_ny_py", "baf2_water_pipe_nx_ny_py", "baf2_water_pipe_nz_py", "baf2_water_pipe_nx_nz_py", "baf2_water_pipe_ny_nz_py", "baf2_water_pipe_nx_ny_nz_py", "baf2_water_pipe_px_py", "baf2_water_pipe_nx_px_py", "baf2_water_pipe_ny_px_py", "baf2_water_pipe_nx_ny_px_py", "baf2_water_pipe_nz_px_py", "baf2_water_pipe_nx_nz_px_py", "baf2_water_pipe_ny_nz_px_py", "baf2_water_pipe_nx_ny_nz_px_py", "baf2_water_pipe_pz", "baf2_water_pipe_nx_pz", "baf2_water_pipe_ny_pz", "baf2_water_pipe_nx_ny_pz", "baf2_water_pipe_nz_pz", "baf2_water_pipe_nx_nz_pz", "baf2_water_pipe_ny_nz_pz", "baf2_water_pipe_nx_ny_nz_pz", "baf2_water_pipe_px_pz", "baf2_water_pipe_nx_px_pz", "baf2_water_pipe_ny_px_pz", "baf2_water_pipe_nx_ny_px_pz", "baf2_water_pipe_nz_px_pz", "baf2_water_pipe_nx_nz_px_pz", "baf2_water_pipe_ny_nz_px_pz", "baf2_water_pipe_nx_ny_nz_px_pz", "baf2_water_pipe_py_pz", "baf2_water_pipe_nx_py_pz", "baf2_water_pipe_ny_py_pz", "baf2_water_pipe_nx_ny_py_pz", "baf2_water_pipe_nz_py_pz", "baf2_water_pipe_nx_nz_py_pz", "baf2_water_pipe_ny_nz_py_pz", "baf2_water_pipe_nx_ny_nz_py_pz", "baf2_water_pipe_px_py_pz", "baf2_water_pipe_nx_px_py_pz", "baf2_water_pipe_ny_px_py_pz", "baf2_water_pipe_nx_ny_px_py_pz", "baf2_water_pipe_nz_px_py_pz", "baf2_water_pipe_nx_nz_px_py_pz", "baf2_water_pipe_ny_nz_px_py_pz", "baf2_water_pipe_nx_ny_nz_px_py_pz", "baf2_coolant_pipe_none", "baf2_coolant_pipe_nx", "baf2_coolant_pipe_ny", "baf2_coolant_pipe_nx_ny", "baf2_coolant_pipe_nz", "baf2_coolant_pipe_nx_nz", "baf2_coolant_pipe_ny_nz", "baf2_coolant_pipe_nx_ny_nz", "baf2_coolant_pipe_px", "baf2_coolant_pipe_nx_px", "baf2_coolant_pipe_ny_px", "baf2_coolant_pipe_nx_ny_px", "baf2_coolant_pipe_nz_px", "baf2_coolant_pipe_nx_nz_px", "baf2_coolant_pipe_ny_nz_px", "baf2_coolant_pipe_nx_ny_nz_px", "baf2_coolant_pipe_py", "baf2_coolant_pipe_nx_py", "baf2_coolant_pipe_ny_py", "baf2_coolant_pipe_nx_ny_py", "baf2_coolant_pipe_nz_py", "baf2_coolant_pipe_nx_nz_py", "baf2_coolant_pipe_ny_nz_py", "baf2_coolant_pipe_nx_ny_nz_py", "baf2_coolant_pipe_px_py", "baf2_coolant_pipe_nx_px_py", "baf2_coolant_pipe_ny_px_py", "baf2_coolant_pipe_nx_ny_px_py", "baf2_coolant_pipe_nz_px_py", "baf2_coolant_pipe_nx_nz_px_py", "baf2_coolant_pipe_ny_nz_px_py", "baf2_coolant_pipe_nx_ny_nz_px_py", "baf2_coolant_pipe_pz", "baf2_coolant_pipe_nx_pz", "baf2_coolant_pipe_ny_pz", "baf2_coolant_pipe_nx_ny_pz", "baf2_coolant_pipe_nz_pz", "baf2_coolant_pipe_nx_nz_pz", "baf2_coolant_pipe_ny_nz_pz", "baf2_coolant_pipe_nx_ny_nz_pz", "baf2_coolant_pipe_px_pz", "baf2_coolant_pipe_nx_px_pz", "baf2_coolant_pipe_ny_px_pz", "baf2_coolant_pipe_nx_ny_px_pz", "baf2_coolant_pipe_nz_px_pz", "baf2_coolant_pipe_nx_nz_px_pz", "baf2_coolant_pipe_ny_nz_px_pz", "baf2_coolant_pipe_nx_ny_nz_px_pz", "baf2_coolant_pipe_py_pz", "baf2_coolant_pipe_nx_py_pz", "baf2_coolant_pipe_ny_py_pz", "baf2_coolant_pipe_nx_ny_py_pz", "baf2_coolant_pipe_nz_py_pz", "baf2_coolant_pipe_nx_nz_py_pz", "baf2_coolant_pipe_ny_nz_py_pz", "baf2_coolant_pipe_nx_ny_nz_py_pz", "baf2_coolant_pipe_px_py_pz", "baf2_coolant_pipe_nx_px_py_pz", "baf2_coolant_pipe_ny_px_py_pz", "baf2_coolant_pipe_nx_ny_px_py_pz", "baf2_coolant_pipe_nz_px_py_pz", "baf2_coolant_pipe_nx_nz_px_py_pz", "baf2_coolant_pipe_ny_nz_px_py_pz", "baf2_coolant_pipe_nx_ny_nz_px_py_pz", "Nova Trophy", "Nova Trophy", "Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Moonstone Pickaxe", "Golem Pickaxe", "Wood Axe", "Stone Axe", "Iron Axe", "Gold Axe", "Diamond Axe", "Moonstone Axe", "Artisan Axe", "Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", "Wood Sword", "Stone Sword", "Iron Sword", "Gold Sword", "Diamond Sword", "Knight Sword", "Wood Hoe", "Stone Hoe", "Iron Hoe", "Gold Hoe", "Diamond Hoe", "Flashlight", "Mining Helmet", "Wood Helmet", "Iron Helmet", "Gold Helmet", "Diamond Helmet", "Wood Chestplate", "Iron Chestplate", "Gold Chestplate", "Diamond Chestplate", "Fur Chestplate", "Wood Leggings", "Iron Leggings", "Gold Leggings", "Diamond Leggings", "Wood Boots", "Iron Boots", "Gold Boots", "Diamond Boots", "Spiked Boots", "Wood Gauntlets", "Iron Gauntlets", "Gold Gauntlets", "Diamond Gauntlets", "Military Helmet", "Military Chestplate", "Military Gauntlets", "Military Leggings", "Military Boots", "Shears", "Artisan Shears", "Stick", "Coal", "Raw Iron", "Iron Bar", "Iron Fragment", "Raw Gold", "Gold Bar", "Gold Fragment", "Diamond", "Diamond Fragment", "Moonstone", "Lunite", "Moonstone Fragment", "Bowl", "Partially Full Bowl of Cranberries", "Half Full Bowl of Cranberries", "Nearly Full Bowl of Cranberries", "Bowl of Cranberries", "Mushroom Soup", "Glowing Soup", "Night Vision Soup", "Cotton", "Gold Crop", "Bucket", "Water Bucket", "Lava Bucket", "Boat Item", "Boat", "Obsidian Boat Item", "Obsidian Boat", "Speedboat Item", "Speedboat", "Wood Hang Glider Item", "Wood Hang Glider", "Iron Hang Glider Item", "Iron Hang Glider", "Gold Hang Glider Item", "Gold Hang Glider", "Diamond Hang Glider Item", "Diamond Hang Glider", "Hovercraft Item", "Hovercraft", "Yellow Kart Item", "White Kart Item", "Red Kart Item", "Purple Kart Item", "Pink Kart Item", "Orange Kart Item", "Magenta Kart Item", "Lime Kart Item", "Light Gray Kart Item", "Light Blue Kart Item", "Green Kart Item", "Gray Kart Item", "Cyan Kart Item", "Brown Kart Item", "Blue Kart Item", "Black Kart Item", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black Kart", "Off Roader Item", "Off Roader", "Armored Car Item", "Gold Mining Drill", "Iron Mining Drill", "Diamond Mining Drill", "Moonstone Mining Drill", "Armored Car", "Car Item", "Car", "Snowball", "Pebble", "Reinforced Pebble", "Bullet", "Ball", "Reinforced Ball", "Frag Grenade", "Mining Grenade", "Smoke Grenade", "Moonstone Orb", "Fireball", "Bouncy Bomb", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Wood Bow", "Wood Bowmetacharging2", "Wood Bowmetacharging3", "Wood Bowmetacharging4", "Stone Bow", "Stone Bowmetacharging2", "Stone Bowmetacharging3", "Stone Bowmetacharging4", "Iron Bow", "Iron Bowmetacharging2", "Iron Bowmetacharging3", "Iron Bowmetacharging4", "Gold Bow", "Gold Bowmetacharging2", "Gold Bowmetacharging3", "Gold Bowmetacharging4", "Diamond Bow", "Diamond Bowmetacharging2", "Diamond Bowmetacharging3", "Diamond Bowmetacharging4", "Wood Crossbow", "Wood Crossbowmetacharging2", "Wood Crossbowmetacharging3", "Wood Crossbowmetacharging4", "Stone Crossbow", "Stone Crossbowmetacharging2", "Stone Crossbowmetacharging3", "Stone Crossbowmetacharging4", "Iron Crossbow", "Iron Crossbowmetacharging2", "Iron Crossbowmetacharging3", "Iron Crossbowmetacharging4", "Gold Crossbow", "Gold Crossbowmetacharging2", "Gold Crossbowmetacharging3", "Gold Crossbowmetacharging4", "Diamond Crossbow", "Diamond Crossbowmetacharging2", "Diamond Crossbowmetacharging3", "Diamond Crossbowmetacharging4", "Wood Crossbow Charged", "Stone Crossbow Charged", "Iron Crossbow Charged", "Gold Crossbow Charged", "Diamond Crossbow Charged", "Arrow", "Compass", "Compassmetadir2", "Compassmetadir3", "Compassmetadir4", "Compassmetadir5", "Compassmetadir6", "Compassmetadir7", "Compassmetadir8", "Compassmetadir9", "Compassmetadir10", "Compassmetadir11", "Compassmetadir12", "Chunk Map", "Bread", "Bowl of Rice", "Apple", "Plum", "Coconut", "Cracked Coconut", "Pear", "Cherry", "Banana", "Watermelon Slice", "Gold Watermelon Slice", "Melon Slice", "Gold Melon Slice", "Pumpkin Pie", "Corn", "Cornbread", "Chili Pepper", "Mango", "Carrot", "Gold Carrot", "Raw Potato", "Baked Potato", "Beetroot", "Raw Porkchop", "Cooked Porkchop", "Raw Beef", "Steak", "Raw Mutton", "Cooked Mutton", "Raw Venison", "Cooked Venison", "Rotten Flesh", "Rotten Brain", "Bone", "Bone Meal", "Leather", "Saddle", "Spirit Saddle", "Fur", "Golem Eye", "Knight Heart", "Teleport Heart", "Frost Shard", "Molten Cog", "Choir Bell", "Siege Core", "Flywheel", "Radiant Spark", "Brood Sac", "Bandolier", "Name Tag", "Book", "Empty Bottle", "Water Bottle", "Slowness Potion", "Splash Slowness Potion", "Arrow of Slowness", "Poison Potion", "Splash Poison Potion", "Arrow of Poison", "Weakness Potion", "Splash Weakness Potion", "Arrow of Weakness", "Instant Damage Potion", "Splash Instant Damage Potion", "Arrow of Instant Damage", "Milk Potion", "Splash Milk Potion", "Arrow of Milk", "Speed Potion", "Splash Speed Potion", "Arrow of Speed", "Defense Potion", "Splash Defense Potion", "Arrow of Defense", "Strength Potion", "Splash Strength Potion", "Arrow of Strength", "Invisibility Potion", "Splash Invisibility Potion", "Arrow of Invisibility", "Jump Potion", "Splash Jump Potion", "Arrow of Jumping", "Knockback Potion", "Splash Knockback Potion", "Arrow of Knockback", "Regeneration Potion", "Splash Regeneration Potion", "Arrow of Regeneration", "Instant Healing Potion", "Splash Instant Healing Potion", "Arrow of Instant Healing", "Haste Potion", "Splash Haste Potion", "Arrow of Haste", "Shield Potion", "Splash Shield Potion", "Arrow of Shield", "Double Jump Potion", "Splash Double Jump Potion", "Arrow of Double Jump", "Heat Resistance Potion", "Splash Heat Resistance Potion", "Arrow of Heat Resistance", "X-Ray Vision Potion", "Splash X-Ray Vision Potion", "Arrow of X-Ray Vision", "Mining Yield Potion", "Splash Mining Yield Potion", "Arrow of Mining Yield", "Brain Rot Potion", "Splash Brain Rot Potion", "Arrow of Brain Rot", "Chaos Potion", "Teleportation Potion", "Ammo", "AK-47", "M16", "MP40", "TAR-21", "M1911", "Double Barrel", "AWP", "Deagle", "Striker-12", "VSR", "DMR", "Minigun", "FMR", "SKAR", "Block-19", "Mini Izu", "GPMG", "Gold Coin", "Updraft", "Snowdash", "Floor Creator", "Moonstone Remote", "Ice Bridge", "Maple Planks Bridge", "Messy Stone Bridge", "Yellow Balloon Item", "White Balloon Item", "Red Balloon Item", "Purple Balloon Item", "Pink Balloon Item", "Orange Balloon Item", "Magenta Balloon Item", "Lime Balloon Item", "Light Gray Balloon Item", "Light Blue Balloon Item", "Green Balloon Item", "Gray Balloon Item", "Cyan Balloon Item", "Brown Balloon Item", "Blue Balloon Item", "Black Balloon Item", "Yellow Balloon", "White Balloon", "Red Balloon", "Purple Balloon", "Pink Balloon", "Orange Balloon", "Magenta Balloon", "Lime Balloon", "Light Gray Balloon", "Light Blue Balloon", "Green Balloon", "Gray Balloon", "Cyan Balloon", "Brown Balloon", "Blue Balloon", "Black Balloon", "Yellow Popup Tower", "White Popup Tower", "Red Popup Tower", "Purple Popup Tower", "Pink Popup Tower", "Orange Popup Tower", "Magenta Popup Tower", "Lime Popup Tower", "Light Gray Popup Tower", "Light Blue Popup Tower", "Green Popup Tower", "Gray Popup Tower", "Cyan Popup Tower", "Brown Popup Tower", "Blue Popup Tower", "Black Popup Tower", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Paintball", "White Paintball", "Red Paintball", "Purple Paintball", "Pink Paintball", "Orange Paintball", "Magenta Paintball", "Lime Paintball", "Light Gray Paintball", "Light Blue Paintball", "Green Paintball", "Gray Paintball", "Cyan Paintball", "Brown Paintball", "Blue Paintball", "Black Paintball", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Yellow Paintball Explosive Item", "White Paintball Explosive Item", "Red Paintball Explosive Item", "Purple Paintball Explosive Item", "Pink Paintball Explosive Item", "Orange Paintball Explosive Item", "Magenta Paintball Explosive Item", "Lime Paintball Explosive Item", "Light Gray Paintball Explosive Item", "Light Blue Paintball Explosive Item", "Green Paintball Explosive Item", "Gray Paintball Explosive Item", "Cyan Paintball Explosive Item", "Brown Paintball Explosive Item", "Blue Paintball Explosive Item", "Black Paintball Explosive Item", "Yellow Sticky Paintball Explosive Item", "White Sticky Paintball Explosive Item", "Red Sticky Paintball Explosive Item", "Purple Sticky Paintball Explosive Item", "Pink Sticky Paintball Explosive Item", "Orange Sticky Paintball Explosive Item", "Magenta Sticky Paintball Explosive Item", "Lime Sticky Paintball Explosive Item", "Light Gray Sticky Paintball Explosive Item", "Light Blue Sticky Paintball Explosive Item", "Green Sticky Paintball Explosive Item", "Gray Sticky Paintball Explosive Item", "Cyan Sticky Paintball Explosive Item", "Brown Sticky Paintball Explosive Item", "Blue Sticky Paintball Explosive Item", "Black Sticky Paintball Explosive Item", "Yellow Seeking Paintball Explosive Item", "White Seeking Paintball Explosive Item", "Red Seeking Paintball Explosive Item", "Purple Seeking Paintball Explosive Item", "Pink Seeking Paintball Explosive Item", "Orange Seeking Paintball Explosive Item", "Magenta Seeking Paintball Explosive Item", "Lime Seeking Paintball Explosive Item", "Light Gray Seeking Paintball Explosive Item", "Light Blue Seeking Paintball Explosive Item", "Green Seeking Paintball Explosive Item", "Gray Seeking Paintball Explosive Item", "Cyan Seeking Paintball Explosive Item", "Brown Seeking Paintball Explosive Item", "Blue Seeking Paintball Explosive Item", "Black Seeking Paintball Explosive Item", "Yellow Quick Paintball Explosive Item", "White Quick Paintball Explosive Item", "Red Quick Paintball Explosive Item", "Purple Quick Paintball Explosive Item", "Pink Quick Paintball Explosive Item", "Orange Quick Paintball Explosive Item", "Magenta Quick Paintball Explosive Item", "Lime Quick Paintball Explosive Item", "Light Gray Quick Paintball Explosive Item", "Light Blue Quick Paintball Explosive Item", "Green Quick Paintball Explosive Item", "Gray Quick Paintball Explosive Item", "Cyan Quick Paintball Explosive Item", "Brown Quick Paintball Explosive Item", "Blue Quick Paintball Explosive Item", "Black Quick Paintball Explosive Item", "Yellow Paint Bow", "Yellow Paint Bowmetacharging2", "Yellow Paint Bowmetacharging3", "Yellow Paint Bowmetacharging4", "White Paint Bow", "White Paint Bowmetacharging2", "White Paint Bowmetacharging3", "White Paint Bowmetacharging4", "Red Paint Bow", "Red Paint Bowmetacharging2", "Red Paint Bowmetacharging3", "Red Paint Bowmetacharging4", "Purple Paint Bow", "Purple Paint Bowmetacharging2", "Purple Paint Bowmetacharging3", "Purple Paint Bowmetacharging4", "Pink Paint Bow", "Pink Paint Bowmetacharging2", "Pink Paint Bowmetacharging3", "Pink Paint Bowmetacharging4", "Orange Paint Bow", "Orange Paint Bowmetacharging2", "Orange Paint Bowmetacharging3", "Orange Paint Bowmetacharging4", "Magenta Paint Bow", "Magenta Paint Bowmetacharging2", "Magenta Paint Bowmetacharging3", "Magenta Paint Bowmetacharging4", "Lime Paint Bow", "Lime Paint Bowmetacharging2", "Lime Paint Bowmetacharging3", "Lime Paint Bowmetacharging4", "Light Gray Paint Bow", "Light Gray Paint Bowmetacharging2", "Light Gray Paint Bowmetacharging3", "Light Gray Paint Bowmetacharging4", "Light Blue Paint Bow", "Light Blue Paint Bowmetacharging2", "Light Blue Paint Bowmetacharging3", "Light Blue Paint Bowmetacharging4", "Green Paint Bow", "Green Paint Bowmetacharging2", "Green Paint Bowmetacharging3", "Green Paint Bowmetacharging4", "Gray Paint Bow", "Gray Paint Bowmetacharging2", "Gray Paint Bowmetacharging3", "Gray Paint Bowmetacharging4", "Cyan Paint Bow", "Cyan Paint Bowmetacharging2", "Cyan Paint Bowmetacharging3", "Cyan Paint Bowmetacharging4", "Brown Paint Bow", "Brown Paint Bowmetacharging2", "Brown Paint Bowmetacharging3", "Brown Paint Bowmetacharging4", "Blue Paint Bow", "Blue Paint Bowmetacharging2", "Blue Paint Bowmetacharging3", "Blue Paint Bowmetacharging4", "Black Paint Bow", "Black Paint Bowmetacharging2", "Black Paint Bowmetacharging3", "Black Paint Bowmetacharging4", "Pig Spawn Orb", "Cow Spawn Orb", "Sheep Spawn Orb", "Horse Spawn Orb", "Camel Spawn Orb", "Iron Goofy Golem Spawn Orb", "Gold Goofy Golem Spawn Orb", "Diamond Goofy Golem Spawn Orb", "Moonstone Goofy Golem Spawn Orb", "Deer Spawn Orb", "Slime Spawn Orb", "Wolf Spawn Orb", "Wildcat Spawn Orb", "Spirit Golem Spawn Orb", "Spirit Wolf Spawn Orb", "Spirit Bear Spawn Orb", "Spirit Stag Spawn Orb", "Spirit Gorilla Spawn Orb", "Bear Spawn Orb", "Stag Spawn Orb", "Gold Watermelon Stag Spawn Orb", "Gorilla Spawn Orb", "Cave Golem Spawn Orb", "Draugr Zombie Spawn Orb", "Draugr Skeleton Spawn Orb", "Frost Golem Spawn Orb", "Frost Zombie Spawn Orb", "Frost Skeleton Spawn Orb", "Draugr Knight Spawn Orb", "Draugr Huntress Spawn Orb", "Magma Golem Spawn Orb", "Draugr Warper Spawn Orb", "Frost Wraith Spawn Orb", "Draugr Reaver Spawn Orb", "Stalker Spawn Orb", "Crone Spawn Orb", "Iron Guardian Spawn Orb", "Gold Guardian Spawn Orb", "Diamond Guardian Spawn Orb", "Moonstone Guardian Spawn Orb", "Tiki Terror Spawn Orb", "Mob Catcher", "Caught Mob Pig Default", "Caught Mob Cow Default", "Caught Mob Cow Cream", "Caught Mob Sheep Default", "Caught Mob Horse Default", "Caught Mob Horse Black", "Caught Mob Horse Brown", "Caught Mob Horse Cream", "Caught Mob Camel Default", "Caught Mob Camel Brown", "Caught Mob Iron_Goofy_Golem Default", "Caught Mob Iron_Goofy_Golem Flaking", "Caught Mob Iron_Goofy_Golem Patchy", "Caught Mob Iron_Goofy_Golem Shedding", "Caught Mob Iron_Goofy_Golem Bare", "Caught Mob Iron_Goofy_Golem Stone", "Caught Mob Gold_Goofy_Golem Default", "Caught Mob Gold_Goofy_Golem Flaking", "Caught Mob Gold_Goofy_Golem Patchy", "Caught Mob Gold_Goofy_Golem Shedding", "Caught Mob Gold_Goofy_Golem Bare", "Caught Mob Gold_Goofy_Golem Stone", "Caught Mob Diamond_Goofy_Golem Default", "Caught Mob Diamond_Goofy_Golem Flaking", "Caught Mob Diamond_Goofy_Golem Patchy", "Caught Mob Diamond_Goofy_Golem Shedding", "Caught Mob Diamond_Goofy_Golem Bare", "Caught Mob Diamond_Goofy_Golem Stone", "Caught Mob Moonstone_Goofy_Golem Default", "Caught Mob Moonstone_Goofy_Golem Flaking", "Caught Mob Moonstone_Goofy_Golem Patchy", "Caught Mob Moonstone_Goofy_Golem Shedding", "Caught Mob Moonstone_Goofy_Golem Bare", "Caught Mob Moonstone_Goofy_Golem Stone", "Caught Mob Deer Default", "Caught Mob Slime Default", "Caught Mob Wolf Default", "Caught Mob Wolf White", "Caught Mob Wolf Brown", "Caught Mob Wolf Grey", "Caught Mob Wolf Spectral", "Caught Mob Wildcat Default", "Caught Mob Wildcat Tabby", "Caught Mob Wildcat Grey", "Caught Mob Wildcat Black", "Caught Mob Wildcat Calico", "Caught Mob Wildcat Siamese", "Caught Mob Wildcat Leopard", "Caught Mob Spirit_Golem Default", "Caught Mob Spirit_Wolf Default", "Caught Mob Spirit_Bear Default", "Caught Mob Spirit_Stag Default", "Caught Mob Spirit_Gorilla Default", "Caught Mob Bear Default", "Caught Mob Stag Default", "Caught Mob Gold_Watermelon_Stag Default", "Caught Mob Gorilla Default", "Caught Mob Cave_Golem Default", "Caught Mob Cave_Golem Iron", "Caught Mob Draugr_Zombie Default", "Caught Mob Draugr_Zombie Longhairchestplate", "Caught Mob Draugr_Zombie Longhairclothed", "Caught Mob Draugr_Zombie Shorthairclothed", "Caught Mob Draugr_Skeleton Default", "Caught Mob Frost_Golem Default", "Caught Mob Frost_Zombie Default", "Caught Mob Frost_Zombie Longhairchestplate", "Caught Mob Frost_Zombie Shorthairclothed", "Caught Mob Frost_Skeleton Default", "Caught Mob Draugr_Knight Default", "Caught Mob Draugr_Huntress Default", "Caught Mob Magma_Golem Default", "Caught Mob Draugr_Warper Default", "Caught Mob Frost_Wraith Default", "Caught Mob Draugr_Reaver Default", "Caught Mob Stalker Default", "Caught Mob Stalker Crimson", "Caught Mob Stalker Frost", "Caught Mob Stalker Void", "Caught Mob Crone Default", "Caught Mob Iron_Guardian Default", "Caught Mob Gold_Guardian Default", "Caught Mob Diamond_Guardian Default", "Caught Mob Moonstone_Guardian Default", "Caught Mob Tiki_Terror Default", "Caught Mob Tiki_Terror Titan", "Caught Mob Tiki_Terror Tormentor", "Caught Mob Tiki_Terror Tyrant", "Timed Spike Bomb", "Timed Spike Bombmetacharging2", "Timed Spike Bombmetacharging3", "Timed Spike Bombmetacharging4", "Toxin Ball", "Aura XP Fragment", "Aura XP Orb", "Aura XP Potion", "Aura XP Potion II", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Arrow of Aura XP", "Firecracker", "Rainbow Firecracker", "Yellow Firecracker", "White Firecracker", "Red Firecracker", "Purple Firecracker", "Pink Firecracker", "Orange Firecracker", "Magenta Firecracker", "Lime Firecracker", "Light Gray Firecracker", "Light Blue Firecracker", "Green Firecracker", "Gray Firecracker", "Cyan Firecracker", "Brown Firecracker", "Blue Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "Yellow Firecracker Pebble", "White Firecracker Pebble", "Red Firecracker Pebble", "Purple Firecracker Pebble", "Pink Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Lime Firecracker Pebble", "Light Gray Firecracker Pebble", "Light Blue Firecracker Pebble", "Green Firecracker Pebble", "Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Brown Firecracker Pebble", "Blue Firecracker Pebble", "Black Firecracker Pebble", "WorldBuilder Wand", "Red Strongfish", "Green Strongfish", "Moon Strongfish", "Wheatfish", "Moonfish", "Bombfish", "Boomerang Fish", "Root Flounder", "Abyss Carp", "Boulder Bass", "Barnaclejaw", "Crystalized Wheatfish", "Darter", "Shadow Darter", "Electric Eel", "Grass Snapper", "Jungle Spinefish", "Mangler Catfish", "Mossback Arapaima", "Sandbelly Piranha", "Shadeback Ray", "Mudbelly Tilapia", "Mireback Carp", "Rotslab Eel", "Aether Minnow", "Murkborne Ray", "Eldertide Leviathan", "Oarfish", "Alpha Moon Strongfish", "Bamboo Catfish", "Blackwater Bream", "Blackwater Leviathan", "Boned Sturgeon", "Bull Shark", "Channel Sawfish", "Coastal Mullet", "Coelacanth", "Driftwood Catfish", "Eagle Ray", "Giant Grouper", "Giant Moray", "Giant Stingray", "Golden Mahseer", "Greenfin Loach", "Mangrove Herring", "Moonlit Boomerang Fish", "Moonstone Pupfish", "Mudline Perch", "Murk Stingray", "Needlefish", "Nomai Moray", "Pearlescent Moonfish", "Rainbow Guppy", "Red Snapper", "Reedglass Minnow", "Reef Sardine", "Root Perch", "Rust Scad", "Seahorse", "Snakehead", "Spined Stickleback", "Stone Grouper", "Sumpback Carp", "Sunset Minnow", "Tarpon", "Threadfin Bream", "Tri-Pointed Needlefish", "Game Dev Fish", "Armoured Searobin", "Ash Lionfish", "Barefrost Toothfish", "Blackfin Icefish", "Basalt Pipefish", "Brimstone Spikefish", "Cinder Leviathan", "Crowned Flame Angelfish", "Deepwater Lanternfish", "Driftice Capelin", "Ember Chub", "Embermark Wrasse", "Eviota Vader", "Frost Herring", "Frost Wolf Eel", "Frostpaint Notie", "Frozen Grenadier", "Giant Trevally", "Glacial Lanternfish", "Glacial Silverfish", "Heatwarp Flounder", "Hatchetfish", "Ice Spined Notothenia", "Iceshelf Skate", "Icy Sculpin", "Lavaflow Trout", "Lavawake Slopefish", "Magma Sardinella", "Magma Trout", "Marbled Moray Cod", "Molten Lotella Cod", "Northern Wolffish", "Paleice Rockcod", "Permafrost Halibut", "Pithead", "Polarflash Electron", "Pyroclast Eel", "Pyroscale Grouper", "Red Pyreside", "Rimesnouted Lancetfish", "Scorched Sunfish", "Scored Dace", "Silver Dragonfish", "Snow Haddock", "Volcanic Catfish", "Volcanic Semperi", "Rusty Rod", "Lucky Rod", "Sturdy Rod", "Jungle Rod", "Draugr Rod", "Cursed Rod", "Tangle Resistant Rod", "Speed Rod", "Carbon Rod", "Deep Sea Rod", "Master Rod", "Obsidian Rod", "Molten Magma Rod", "Frost Rod", "Black Ice Rod", "Mythic Rod", "Acorn", "Acorn Jelly", "Cow's Milk", "Cheese", "Caught Fish", "Fish Fillet", "Meaty Bone", "Blinding Pebble", "Sheep's Milk", "Yoghurt Pot", "Truffle", "Truffle Oil", "Oats", "Porridge", "Dates", "Date Pudding", "Poop", "Fertiliser", "Medkit", "Wood Spear", "Stone Spear", "Iron Spear", "Gold Spear", "Diamond Spear", "Moonstone Spear", "Wood Dagger", "Stone Dagger", "Iron Dagger", "Gold Dagger", "Diamond Dagger", "Moonstone Dagger", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", "Wood Club", "Stone Club", "Iron Club", "Gold Club", "Diamond Club", "Moonstone Club", "Wood Mace", "Stone Mace", "Iron Mace", "Gold Mace", "Diamond Mace", "Moonstone Mace", "Wood Whip", "Stone Whip", "Iron Whip", "Gold Whip", "Diamond Whip", "Moonstone Whip", "Beef Stew", "chicken", "coleslaw", "egg", "Fish N Chips", "Fried Rice", "lettuce", "omelette", "onion", "Red Cabbage", "Roast Dinner", "salad", "Stuffed Pepper", "sushi", "tomato", "Vegetable Soup", "clock_wood_midday", "clock_wood_midnight", "clock_wood_late_night", "clock_wood_sunrise", "clock_wood_early_day", "clock_wood_late_day", "clock_wood_sunset", "clock_wood_early_night", "clock_gold_midday", "clock_gold_midnight", "clock_gold_late_night", "clock_gold_sunrise", "clock_gold_early_day", "clock_gold_late_day", "clock_gold_sunset", "clock_gold_early_night", "Lucky Sword Upgrade", "Lucky Armour Upgrade", "Lucky Tools Upgrade", "Lucky Clover", "Void Net", "Lucky Bomb", "Unlucky Bomb", "Swap Orb", "Golden Lucky Clover", "amethite", "amethite_fragment", "amethite_pickaxe", "amethite_axe", "amethite_shovel", "amethite_sword", "amethite_hoe", "amethite_helmet", "amethite_chestplate", "amethite_leggings", "amethite_boots", "amethite_gauntlets", "amethite_bow", "amethite_bow_charging_2", "amethite_bow_charging_3", "amethite_bow_charging_4", "amethite_crossbow", "amethite_crossbow_charging_2", "amethite_crossbow_charging_3", "amethite_crossbow_charging_4", "amethite_crossbow_charged", "amethite_spear", "amethite_dagger", "amethite_boomerang", "amethite_club", "amethite_mace", "amethite_whip", "magmasteel", "magmasteel_fragment", "magmasteel_pickaxe", "magmasteel_axe", "magmasteel_shovel", "magmasteel_sword", "magmasteel_hoe", "magmasteel_helmet", "magmasteel_chestplate", "magmasteel_leggings", "magmasteel_boots", "magmasteel_gauntlets", "magmasteel_bow", "magmasteel_bow_charging_2", "magmasteel_bow_charging_3", "magmasteel_bow_charging_4", "magmasteel_crossbow", "magmasteel_crossbow_charging_2", "magmasteel_crossbow_charging_3", "magmasteel_crossbow_charging_4", "magmasteel_crossbow_charged", "magmasteel_spear", "magmasteel_dagger", "magmasteel_boomerang", "magmasteel_club", "magmasteel_mace", "magmasteel_whip", "rubellite", "rubellite_fragment", "rubellite_pickaxe", "rubellite_axe", "rubellite_shovel", "rubellite_sword", "rubellite_hoe", "rubellite_helmet", "rubellite_chestplate", "rubellite_leggings", "rubellite_boots", "rubellite_gauntlets", "rubellite_bow", "rubellite_bow_charging_2", "rubellite_bow_charging_3", "rubellite_bow_charging_4", "rubellite_crossbow", "rubellite_crossbow_charging_2", "rubellite_crossbow_charging_3", "rubellite_crossbow_charging_4", "rubellite_crossbow_charged", "rubellite_spear", "rubellite_dagger", "rubellite_boomerang", "rubellite_club", "rubellite_mace", "rubellite_whip", "serpentite", "serpentite_fragment", "serpentite_pickaxe", "serpentite_axe", "serpentite_shovel", "serpentite_sword", "serpentite_hoe", "serpentite_helmet", "serpentite_chestplate", "serpentite_leggings", "serpentite_boots", "serpentite_gauntlets", "serpentite_bow", "serpentite_bow_charging_2", "serpentite_bow_charging_3", "serpentite_bow_charging_4", "serpentite_crossbow", "serpentite_crossbow_charging_2", "serpentite_crossbow_charging_3", "serpentite_crossbow_charging_4", "serpentite_crossbow_charged", "serpentite_spear", "serpentite_dagger", "serpentite_boomerang", "serpentite_club", "serpentite_mace", "serpentite_whip", "cursemetal_helmet", "cursemetal_chestplate", "cursemetal_gauntlets", "cursemetal_leggings", "cursemetal_boots", "kingly_amethite_helmet", "kingly_amethite_chestplate", "kingly_amethite_gauntlets", "kingly_amethite_leggings", "kingly_amethite_boots", "kingly_diamond_helmet", "kingly_diamond_chestplate", "kingly_diamond_gauntlets", "kingly_diamond_leggings", "kingly_diamond_boots", "sanguine_shard", "sanguine_sword", "sanguine_bow", "sanguine_bow_charging_2", "sanguine_bow_charging_3", "sanguine_bow_charging_4", "sanguine_crossbow", "sanguine_crossbow_charging_2", "sanguine_crossbow_charging_3", "sanguine_crossbow_charging_4", "sanguine_crossbow_charged", "sanguine_spear", "sanguine_dagger", "sanguine_club", "sanguine_mace", "sanguine_whip", "sanguine_staff", "sanguine_helmet", "sanguine_chestplate", "sanguine_gauntlets", "sanguine_leggings", "sanguine_boots", "spectral_shard", "spectral_sword", "spectral_bow", "spectral_bow_charging_2", "spectral_bow_charging_3", "spectral_bow_charging_4", "spectral_crossbow", "spectral_crossbow_charging_2", "spectral_crossbow_charging_3", "spectral_crossbow_charging_4", "spectral_crossbow_charged", "spectral_spear", "spectral_dagger", "spectral_club", "spectral_mace", "spectral_whip", "spectral_staff", "spectral_helmet", "spectral_chestplate", "spectral_gauntlets", "spectral_leggings", "spectral_boots", "geo_shard", "geo_sword", "geo_bow", "geo_bow_charging_2", "geo_bow_charging_3", "geo_bow_charging_4", "geo_crossbow", "geo_crossbow_charging_2", "geo_crossbow_charging_3", "geo_crossbow_charging_4", "geo_crossbow_charged", "geo_spear", "geo_dagger", "geo_club", "geo_mace", "geo_whip", "geo_staff", "geo_helmet", "geo_chestplate", "geo_gauntlets", "geo_leggings", "geo_boots", "astral_shard", "astral_sword", "astral_bow", "astral_bow_charging_2", "astral_bow_charging_3", "astral_bow_charging_4", "astral_crossbow", "astral_crossbow_charging_2", "astral_crossbow_charging_3", "astral_crossbow_charging_4", "astral_crossbow_charged", "astral_spear", "astral_dagger", "astral_club", "astral_mace", "astral_whip", "astral_staff", "astral_helmet", "astral_chestplate", "astral_gauntlets", "astral_leggings", "astral_boots", "wooden_key", "stone_key", "iron_key", "gold_key", "diamond_key", "Goldheart Engine", "Deepbite Drill Tip", "Empty Fuel Cell", "Blackfire Fuel Cell", "Doom Rivet", "Doom Crest", "Raw Copper", "Copper Bar", "Iron Grit", "Gold Grit", "Copper Grit", "Charcoal", "Recall Beacon", "Iron Hammer", "Iron Plate", "Copper Wire", "Motor", "Machine Parts", "Relay Coil", "Deposit Seed (Copper)", "Deposit Seed (Gold)", "Deposit Seed (Voltite)", "Deposit Seed (Coal)", "Deposit Seed (Iron)", "Deposit Seed (Stone)", "Steel Bar", "Gold Plate", "Logic Board", "Machine Hull", "Raw Voltite", "Power Coupler", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Voltite Dust", "Voltite Cell", "Sky Pack", "Dusk Moss", "Star Alloy", "Moonstone Dust", "Comet Shard", "Comet Core", "Starbore Drill", "Core Tier 2", "Core Tier 3", "Core Tier 4", "Core Tier 5", "Core Tier 6", "Core Tier 7", "Core Tier 8", "Core Tier 9", "Core Tier 10", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots", "Wood Blade", "Wood Guard", "Wood Handle", "Stone Blade", "Stone Guard", "Stone Handle", "Iron Blade", "Iron Guard", "Iron Handle", "Gold Blade", "Gold Guard", "Gold Handle", "Diamond Blade", "Diamond Guard", "Diamond Handle", "Moonstone Blade", "Moonstone Guard", "Moonstone Handle", "Magmasteel Blade", "Magmasteel Guard", "Magmasteel Handle", "Sanguine Blade", "Sanguine Guard", "Sanguine Handle", "Astral Blade", "Astral Guard", "Astral Handle", "Moonstone Sword", "Magmaward Fuel", "Raw Uranium", "Uranium Grit", "Uranium Pellet", "Plutonium Pellet", "Spent Pellet", "Glow Dust", "Biomass", "Graphite", "Containment Plate", "Heat Exchanger", "Focus Lens", "Nova Matter", "Deposit Seed (Uranium)", "Reactor Blueprint", "Wrench", "Advanced Coupler", "Nova Coupler", "Core Tier 11", "Core Tier 12", "Core Tier 13", "Core Tier 14", "Core Tier 15", "Jet Chestplate", "Nova Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Mob Cage", "Caged Pig", "Caged Cow", "Caged Sheep", "Caged Deer", "Caged Stag", "Nova Multitool", "Pocket Terminal", "Comet Beacon", "Nova Wrench", "Player/Player_Model", "Player/Player_Reconstructed", "Pig/Pig_Model", "Cow/Cow_Model", "Sheep/Sheep_Model", "Horse/Horse_Model", "Camel/Camel_Model", "Iron Goofy Golem/Iron Goofy Golem_Model", "Deer/Deer_Model", "Slime/Slime_Model", "Wolf/Wolf_Model", "Wildcat/Wildcat_Model", "Cave Golem/Cave Golem_Model", "Bear/Bear_Model", "Stag/Stag_Model", "Gorilla/Gorilla_Model", "Draugr Zombie/Draugr Zombie_Model", "Draugr Skeleton/Draugr Skeleton_Model", "Draugr Knight/Draugr Knight_Model", "Draugr Warper/Draugr Warper_Model", "Frost Wraith/Frost Wraith_Model", "Draugr Reaver/Draugr Reaver_Model", "Stalker/Stalker_Model", "Crone/Crone_Model", "Iron Guardian/Iron Guardian_Model", "Iron Guardian/Iron Guardian_Reconstructed", "Gold Guardian/Gold Guardian_Model", "Gold Guardian/Gold Guardian_Reconstructed", "Diamond Guardian/Diamond Guardian_Model", "Diamond Guardian/Diamond Guardian_Reconstructed", "Moonstone Guardian/Moonstone Guardian_Model", "Moonstone Guardian/Moonstone Guardian_Reconstructed", "Tiki Terror/Tiki Terror_Model", "Tiki Terror/Tiki Terror_Reconstructed", "67/67_Model", "67/67_Reconstructed", "Bobino Musculino/Bobino Musculino_Model", "Bobino Musculino/Bobino Musculino_Reconstructed", "Capitano Explovissimo/Capitano Explovissimo_Model", "Capitano Explovissimo/Capitano Explovissimo_Reconstructed", "Desert Fennec/Desert Fennec_Model", "Armour Collector/Armour Collector_Model", "Armour Collector/Armour Collector_Reconstructed", "Furnace Knight/Furnace Knight_Model", "Furnace Knight/Furnace Knight_Reconstructed", "Lil Knight/Lil Knight_Model", "Lil Knight/Lil Knight_Reconstructed", "Glass Gremlin/Glass Gremlin_Model", "Glass Gremlin/Glass Gremlin_Reconstructed", "Glass Bro/Glass Bro_Model", "Glass Bro/Glass Bro_Reconstructed", "Lord Vulcan/Lord Vulcan_Model", "Lord Vulcan/Lord Vulcan_Reconstructed", "Zombie/Zombie_Model", "Zombie/Zombie_Reconstructed", "Skeleton/Skeleton_Model", "Skeleton/Skeleton_Reconstructed", "Mummy/Mummy_Model", "Mummy/Mummy_Reconstructed", "Scorpion/Scorpion_Model", "Vulcanite/Vulcanite_Model", "Vulcanite/Vulcanite_Reconstructed", "Evil Tome/Evil Tome_Model", "Magma Toad/Magma Toad_Model", "Player/astro_set_1_attachable", "Player/astro_set_2_attachable", "Player/astro_set_3_attachable", "Player/astro_set_4_attachable", "Player/beaver_lumberjack", "Player/bee_set_1_attachable", "Player/bee_set_2_attachable", "Player/bee_set_3_attachable", "Player/bee_set_4_attachable", "Player/cape_cuboid_18_12", "Player/chef_attachables", "Player/dwarf_blue_hair", "Player/dwarf_braided_hair", "Player/dwarf_child", "Player/dwarf_forked_beard", "Player/dwarf_ginger_beard", "Player/dwarf_grey_beard", "Player/dwarf_hair_buns", "Player/dwarf_purple_beard", "Player/dwarf_red_hair", "Player/dwarf_short_beard", "Player/farmer_gill_attachable", "Player/farmer_head", "Player/fire_mage_attachable", "Player/forge_mother", "Player/general_attachable", "Player/goblin_goggles", "Player/goblin_mad_scientist", "Player/highSociety_set_1_attachable", "Player/highSociety_set_2_attachable", "Player/highSociety_set_3_attachable", "Player/highSociety_set_4_attachable", "Player/human_archer", "Player/human_desert_guard", "Player/human_sentry", "Player/jackal_priest", "Player/jetpack_attachable", "Player/medieval_set_1_attachable", "Player/medieval_set_2_attachable", "Player/medieval_set_3_attachable", "Player/medieval_set_4_attachable", "Player/mining_helmet_attachable", "Player/minotaur", "Player/minotaur_elder", "Player/minotaur_warrior", "Player/monster_hunter_lorenzo_attachable", "Player/npc_pig_head", "Player/painter_spencer_attachable", "Player/pig_napoleon", "Player/pig_worker_attachable", "Player/piggy_banker_head", "Player/portal_mage_hat", "Player/rabbit_aristocrat_attachable", "Player/smuglyn_attachable", "Player/spring_set_1_attachable", "Player/spring_set_2_attachable", "Player/spring_set_3_attachable", "Player/spring_set_4_attachable", "Player/tentacle_boy", "Player/tentacle_guy_attachable", "Player/tentacle_guy_fisherman_attachable", "Player/trader_cowl_black", "Player/trader_cowl_blue", "Player/wolf_in_suit_attachable", "Player/wolf_security", "Player/y2k_set_1_attachable", "Player/y2k_set_2_attachable", "Player/y2k_set_3_attachable", "Player/y2k_set_4_attachable"],
      zR = {
        b: "block",
        s: "static",
        l: "lifeform"
      };

    function AW(WW) {
      var RW;
      return null !== (RW = zR[wW.charAt(WW).toLowerCase()]) && void 0 !== RW ? RW : null
    }

    function bR(WW) {
      var RW;
      const MW = wW.charAt(WW);
      return "" !== MW && MW === MW.toUpperCase() && null !== (RW = CW[WW].split("/").pop()) && void 0 !== RW ? RW : null
    }

    function yR(WW, RW) {
      const wW = CW[WW];
      switch (AW(WW)) {
        case "block":
          return MW(40822)(`./${wW}.glb`);
        case "static":
          return `${RW}/models/${wW}.glb`;
        case "lifeform":
          return MW(45326)(`./${wW}.glb`);
        default:
          return null
      }
    }
    const NW = ["Player/Player_Atlas", "Pig/Pig_Atlas", "Cow/Cow_Atlas", "Sheep/Sheep_Atlas", "Horse/Horse_Atlas", "Camel/Camel_Atlas", "Iron Goofy Golem/Iron Goofy Golem_Atlas", "Gold Goofy Golem/Gold Goofy Golem_Atlas", "Diamond Goofy Golem/Diamond Goofy Golem_Atlas", "Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas", "Deer/Deer_Atlas", "Slime/Slime_Atlas", "Wolf/Wolf_Atlas", "Wildcat/Wildcat_Atlas", "Spirit Golem/Spirit Golem_Atlas", "Spirit Wolf/Spirit Wolf_Atlas", "Spirit Bear/Spirit Bear_Atlas", "Spirit Stag/Spirit Stag_Atlas", "Spirit Gorilla/Spirit Gorilla_Atlas", "Bear/Bear_Atlas", "Stag/Stag_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Atlas", "Gorilla/Gorilla_Atlas", "Cave Golem/Cave Golem_Atlas", "Draugr Zombie/Draugr Zombie_Atlas", "Draugr Skeleton/Draugr Skeleton_Atlas", "Frost Golem/Frost Golem_Atlas", "Frost Zombie/Frost Zombie_Atlas", "Frost Skeleton/Frost Skeleton_Atlas", "Draugr Knight/Draugr Knight_Atlas", "Draugr Huntress/Draugr Huntress_Atlas", "Magma Golem/Magma Golem_Atlas", "Draugr Warper/Draugr Warper_Atlas", "Frost Wraith/Frost Wraith_Atlas", "Draugr Reaver/Draugr Reaver_Atlas", "Stalker/Stalker_Atlas", "Crone/Crone_Atlas", "Iron Guardian/Iron Guardian_Atlas", "Gold Guardian/Gold Guardian_Atlas", "Diamond Guardian/Diamond Guardian_Atlas", "Moonstone Guardian/Moonstone Guardian_Atlas", "Tiki Terror/Tiki Terror_Atlas", "Player/Player_Atlas", "67/67_Atlas", "Bobino Musculino/Bobino Musculino_Atlas", "Capitano Explovissimo/Capitano Explovissimo_Atlas", "Desert Fennec/Desert Fennec_Atlas", "Armour Collector/Armour Collector_Atlas", "Furnace Knight/Furnace Knight_Atlas", "Lil Knight/Lil Knight_Atlas", "Glass Gremlin/Glass Gremlin_Atlas", "Glass Bro/Glass Bro_Atlas", "Lord Vulcan/Lord Vulcan_Atlas", "Zombie/Zombie_Atlas", "Skeleton/Skeleton_Atlas", "Mummy/Mummy_Atlas", "Scorpion/Scorpion_Atlas", "Vulcanite/Vulcanite_Atlas", "Evil Tome/Evil Tome_Atlas", "Magma Toad/Magma Toad_Atlas"];

    function eW(WW) {
      const RW = NW[WW];
      return RW ? MW(46077)(`./${RW}.png`) : null
    }
    const BW = 2395,
      tR = ["Sheep/SheepWool_Atlas", "Horse/HorseSaddle_Atlas", "Camel/CamelSaddle_Atlas", "Deer/DeerAntlers_Atlas", "Wolf/WolfCollar_Atlas", "Wildcat/WildcatCollar_Atlas", "Spirit Wolf/Spirit WolfCollar_Atlas", "Spirit Bear/Spirit BearSaddle_Atlas", "Spirit Stag/Spirit StagSaddle_Atlas", "Spirit Gorilla/Spirit GorillaSaddle_Atlas", "Bear/BearSaddle_Atlas", "Stag/StagSaddle_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Armour", "Gorilla/GorillaSaddle_Atlas"];

    function TW(WW) {
      const RW = tR[WW];
      return RW ? MW(46077)(`./${RW}.png`) : null
    }
    const gR = ["none", "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep", "creator_level1", "creator_level2", "creator_level3"];

    function iR(WW) {
      const RW = gR[WW];
      return RW ? MW(47672)(`./cape_${RW}.png`) : null
    }
    const YW = ["Player_Atlas", "astro_set_1_attachable", "astro_set_2_attachable", "astro_set_3_attachable", "astro_set_4_attachable", "beaver_lumberjack", "bee_set_1_attachable", "bee_set_2_attachable", "bee_set_3_attachable_blue", "bee_set_3_attachable_green", "bee_set_3_attachable_red", "bee_set_4_attachable", "chef_attachables", "dwarf_blue_hair", "dwarf_braided_hair", "dwarf_child", "dwarf_forked_beard", "dwarf_ginger_beard", "dwarf_grey_beard", "dwarf_hair_buns", "dwarf_purple_beard", "dwarf_red_hair", "dwarf_short_beard", "farmer_gill_attachable", "farmer_head", "fire_mage_attachable", "forge_mother", "general_attachable", "goblin_goggles", "goblin_mad_scientist", "highSociety_set_1_attachable", "highSociety_set_2_attachable", "highSociety_set_3_attachable", "highSociety_set_4_attachable", "human_archer", "human_desert_guard", "human_sentry", "jackal_priest", "jetpack_attachable", "medieval_set_1_attachable_blue", "medieval_set_1_attachable_green", "medieval_set_1_attachable_purple", "medieval_set_1_attachable_red", "medieval_set_1_attachable_yellow", "medieval_set_2_attachable_blue", "medieval_set_2_attachable_purple", "medieval_set_2_attachable_red", "medieval_set_3_attachable_green", "medieval_set_3_attachable_pink", "medieval_set_3_attachable_purple", "medieval_set_3_attachable_red", "medieval_set_4_attachable_blue", "medieval_set_4_attachable_hair", "medieval_set_4_attachable_purple", "medieval_set_4_attachable_red", "mining_helmet_attachable", "minotaur", "minotaur_elder", "minotaur_warrior", "monster_hunter_lorenzo_attachable", "nova_jetpack_attachable", "npc_pig_head", "painter_spencer_attachable", "pig_napoleon", "pig_worker_attachable", "piggy_banker_head", "portal_mage_hat", "rabbit_aristocrat_attachable", "smuglyn_attachable", "spring_set_1_attachable", "spring_set_2_attachable", "spring_set_3_attachable", "spring_set_4_attachable", "tentacle_boy", "tentacle_girl_attachable", "tentacle_guy_attachable", "tentacle_guy_fisherman_attachable", "trader_cowl_black", "trader_cowl_blue", "wolf_in_suit_attachable", "wolf_security", "y2k_set_1_attachable", "y2k_set_2_attachable", "y2k_set_3_attachable", "y2k_set_4_attachable"];

    function JW(WW) {
      const RW = YW[WW];
      return RW ? MW(47675)(`./${RW}.png`) : null
    }
    const PW = [{
      name: "allium",
      url: () => MW(47684)
    }, {
      name: "aspen_sapling",
      url: () => MW(47686)
    }, {
      name: "attached_banana_stem",
      url: () => MW(47691)
    }, {
      name: "attached_banana_stem_wrapper",
      url: () => MW(47694)
    }, {
      name: "attached_melon_stem",
      url: () => MW(47697)
    }, {
      name: "attached_melon_stem_wrapper",
      url: () => MW(47703)
    }, {
      name: "autumn_fern",
      url: () => MW(47706)
    }, {
      name: "azure_bluet",
      url: () => MW(47710)
    }, {
      name: "banana_stem",
      url: () => MW(47714)
    }, {
      name: "beetroot_plant_stage0",
      url: () => MW(47723)
    }, {
      name: "beetroot_plant_stage1",
      url: () => MW(47726)
    }, {
      name: "beetroot_plant_stage2",
      url: () => MW(47728)
    }, {
      name: "berry_bush_stage0",
      url: () => MW(47732)
    }, {
      name: "berry_bush_stage1",
      url: () => MW(47737)
    }, {
      name: "berry_bush_stage2",
      url: () => MW(47743)
    }, {
      name: "blue_orchid",
      url: () => MW(47750)
    }, {
      name: "blueberry_bush_stage0",
      url: () => MW(47754)
    }, {
      name: "blueberry_bush_stage1",
      url: () => MW(47758)
    }, {
      name: "blueberry_bush_stage2",
      url: () => MW(47767)
    }, {
      name: "brown_mushroom",
      url: () => MW(47773)
    }, {
      name: "carrot_plant_stage0",
      url: () => MW(47776)
    }, {
      name: "carrot_plant_stage1",
      url: () => MW(47784)
    }, {
      name: "carrot_plant_stage2",
      url: () => MW(47787)
    }, {
      name: "catnip",
      url: () => MW(47790)
    }, {
      name: "cauliflower_plant_stage0",
      url: () => MW(47799)
    }, {
      name: "cauliflower_plant_stage1",
      url: () => MW(47801)
    }, {
      name: "cauliflower_plant_stage2",
      url: () => MW(47806)
    }, {
      name: "cedar_sapling",
      url: () => MW(47809)
    }, {
      name: "cherry_sapling",
      url: () => MW(47813)
    }, {
      name: "cobweb",
      url: () => MW(47819)
    }, {
      name: "coffee_plant_stage0",
      url: () => MW(47821)
    }, {
      name: "coffee_plant_stage1",
      url: () => MW(47830)
    }, {
      name: "coffee_plant_stage2",
      url: () => MW(47838)
    }, {
      name: "corn_stage0",
      url: () => MW(47842)
    }, {
      name: "corn_stage1",
      url: () => MW(47847)
    }, {
      name: "corn_stage2",
      url: () => MW(47849)
    }, {
      name: "corn_stage3",
      url: () => MW(47852)
    }, {
      name: "corn_stage4",
      url: () => MW(47854)
    }, {
      name: "corn_stage5",
      url: () => MW(47863)
    }, {
      name: "cornflower",
      url: () => MW(47865)
    }, {
      name: "cotton_plant_stage0",
      url: () => MW(47872)
    }, {
      name: "cotton_plant_stage1",
      url: () => MW(47876)
    }, {
      name: "cotton_plant_stage2",
      url: () => MW(47880)
    }, {
      name: "cotton_plant_stage3",
      url: () => MW(47888)
    }, {
      name: "dandelion",
      url: () => MW(47890)
    }, {
      name: "dead_bush",
      url: () => MW(47892)
    }, {
      name: "fallen_pine_cone",
      url: () => MW(47894)
    }, {
      name: "jungle_sapling",
      url: () => MW(47898)
    }, {
      name: "jungle_tall_grass_bottom",
      url: () => MW(47905)
    }, {
      name: "jungle_tall_grass_top",
      url: () => MW(47911)
    }, {
      name: "lettuce_plant_stage0",
      url: () => MW(47919)
    }, {
      name: "lettuce_plant_stage1",
      url: () => MW(47925)
    }, {
      name: "lettuce_plant_stage2",
      url: () => MW(47930)
    }, {
      name: "lily_of_the_valley",
      url: () => MW(47932)
    }, {
      name: "mango_sapling",
      url: () => MW(47934)
    }, {
      name: "maple_sapling",
      url: () => MW(47940)
    }, {
      name: "melon_stem",
      url: () => MW(47948)
    }, {
      name: "net",
      url: () => MW(47954)
    }, {
      name: "orange_tulip",
      url: () => MW(47961)
    }, {
      name: "oxeye_daisy",
      url: () => MW(47965)
    }, {
      name: "palm_sapling",
      url: () => MW(47972)
    }, {
      name: "parsnip_plant_stage0",
      url: () => MW(47979)
    }, {
      name: "parsnip_plant_stage1",
      url: () => MW(47983)
    }, {
      name: "parsnip_plant_stage2",
      url: () => MW(47990)
    }, {
      name: "pear_sapling",
      url: () => MW(47999)
    }, {
      name: "pine_fern",
      url: () => MW(48002)
    }, {
      name: "pine_grass",
      url: () => MW(48009)
    }, {
      name: "pine_sapling",
      url: () => MW(48015)
    }, {
      name: "pink_tulip",
      url: () => MW(48021)
    }, {
      name: "plum_sapling",
      url: () => MW(48024)
    }, {
      name: "poppy",
      url: () => MW(48032)
    }, {
      name: "potato_plant_stage0",
      url: () => MW(48039)
    }, {
      name: "potato_plant_stage1",
      url: () => MW(48043)
    }, {
      name: "potato_plant_stage2",
      url: () => MW(48045)
    }, {
      name: "red_cabbage_stage0",
      url: () => MW(48054)
    }, {
      name: "red_cabbage_stage1",
      url: () => MW(48060)
    }, {
      name: "red_cabbage_stage2",
      url: () => MW(48062)
    }, {
      name: "red_mushroom",
      url: () => MW(48065)
    }, {
      name: "red_tulip",
      url: () => MW(48073)
    }, {
      name: "rice_stage0",
      url: () => MW(48080)
    }, {
      name: "rice_stage2",
      url: () => MW(48083)
    }, {
      name: "rice_stage3",
      url: () => MW(48088)
    }, {
      name: "rice_stage4",
      url: () => MW(48094)
    }, {
      name: "rice_stage5",
      url: () => MW(48096)
    }, {
      name: "rice_stage6",
      url: () => MW(48099)
    }, {
      name: "rice_stage7",
      url: () => MW(48104)
    }, {
      name: "shadow_rose",
      url: () => MW(48111)
    }, {
      name: "small_cactus",
      url: () => MW(48113)
    }, {
      name: "spectral_grass",
      url: () => MW(48119)
    }, {
      name: "spectral_sapling",
      url: () => MW(48125)
    }, {
      name: "strawberry_bush_stage0",
      url: () => MW(48130)
    }, {
      name: "strawberry_bush_stage1",
      url: () => MW(48138)
    }, {
      name: "strawberry_bush_stage2",
      url: () => MW(48144)
    }, {
      name: "sugar_cane_plant_stage0",
      url: () => MW(48148)
    }, {
      name: "sugar_cane_plant_stage1",
      url: () => MW(48152)
    }, {
      name: "sugar_cane_plant_stage2",
      url: () => MW(48156)
    }, {
      name: "sugar_cane_plant_stage2_top",
      url: () => MW(48165)
    }, {
      name: "tall_grass_bottom",
      url: () => MW(48172)
    }, {
      name: "tall_grass_top",
      url: () => MW(48177)
    }, {
      name: "tallgrass",
      url: () => MW(48179)
    }, {
      name: "tomato_plant_stage0",
      url: () => MW(48183)
    }, {
      name: "tomato_plant_stage1",
      url: () => MW(48186)
    }, {
      name: "tomato_plant_stage2",
      url: () => MW(48193)
    }, {
      name: "tomato_plant_stage2_top",
      url: () => MW(48196)
    }, {
      name: "wheat_stage0",
      url: () => MW(48199)
    }, {
      name: "wheat_stage2",
      url: () => MW(48204)
    }, {
      name: "wheat_stage3",
      url: () => MW(48209)
    }, {
      name: "wheat_stage4",
      url: () => MW(48212)
    }, {
      name: "wheat_stage5",
      url: () => MW(48215)
    }, {
      name: "wheat_stage6",
      url: () => MW(48219)
    }, {
      name: "wheat_stage7",
      url: () => MW(48224)
    }, {
      name: "white_tulip",
      url: () => MW(48231)
    }, {
      name: "coolant_mixer_top",
      url: () => MW(48235)
    }, {
      name: "smelter_top",
      url: () => MW(48243)
    }, {
      name: "yellow_glazed_terracotta",
      url: () => MW(48251)
    }, {
      name: "shop_wizard_spawn_top",
      url: () => MW(48253)
    }, {
      name: "light_blue_spawn_block_top",
      url: () => MW(48256)
    }, {
      name: "torch_blue_block",
      url: () => MW(48261)
    }, {
      name: "destroy_stage_5",
      url: () => MW(48263)
    }, {
      name: "destroy_stage_4",
      url: () => MW(48269)
    }, {
      name: "auto_bench_top",
      url: () => MW(48274)
    }, {
      name: "destroy_stage_7",
      url: () => MW(48282)
    }, {
      name: "destroy_stage_6",
      url: () => MW(48288)
    }, {
      name: "shop_trader_spawn_top",
      url: () => MW(48296)
    }, {
      name: "cobblestone_mossy",
      url: () => MW(48304)
    }, {
      name: "checkpoint_block",
      url: () => MW(48308)
    }, {
      name: "destroy_stage_1",
      url: () => MW(48314)
    }, {
      name: "destroy_stage_0",
      url: () => MW(48322)
    }, {
      name: "destroy_stage_3",
      url: () => MW(48330)
    }, {
      name: "destroy_stage_2",
      url: () => MW(48335)
    }, {
      name: "centrifuge_top",
      url: () => MW(48340)
    }, {
      name: "destroy_stage_9",
      url: () => MW(48348)
    }, {
      name: "destroy_stage_8",
      url: () => MW(48352)
    }, {
      name: "mango_door_bottom",
      url: () => MW(48357)
    }, {
      name: "moonstone_chest_top",
      url: () => MW(48359)
    }, {
      name: "lime_glazed_terracotta",
      url: () => MW(48365)
    }, {
      name: "burner_drill_top",
      url: () => MW(48368)
    }, {
      name: "light_gray_spawn_block_top",
      url: () => MW(48373)
    }, {
      name: "football_block",
      url: () => MW(48380)
    }, {
      name: "purple_spawn_block_top",
      url: () => MW(48382)
    }, {
      name: "black_stained_glass",
      url: () => MW(48387)
    }, {
      name: "pear_door_bottom",
      url: () => MW(48392)
    }, {
      name: "custom_lobby_block_top",
      url: () => MW(48398)
    }, {
      name: "maple_door_bottom",
      url: () => MW(48402)
    }, {
      name: "crusher_top",
      url: () => MW(48408)
    }, {
      name: "torch_orange_block",
      url: () => MW(48416)
    }, {
      name: "wireless_terminal_top",
      url: () => MW(48423)
    }, {
      name: "recycler_top",
      url: () => MW(48426)
    }, {
      name: "condenser_top",
      url: () => MW(48431)
    }, {
      name: "light_blue_glazed_terracotta",
      url: () => MW(48435)
    }, {
      name: "electric_drill_top",
      url: () => MW(48440)
    }, {
      name: "brown_glazed_terracotta",
      url: () => MW(48443)
    }, {
      name: "green_glazed_terracotta",
      url: () => MW(48448)
    }, {
      name: "cactus_side",
      url: () => MW(48455)
    }, {
      name: "water",
      url: () => MW(48460)
    }, {
      name: "gray_glazed_terracotta",
      url: () => MW(48467)
    }, {
      name: "jungle_door_bottom",
      url: () => MW(48472)
    }, {
      name: "plum_door_top",
      url: () => MW(48481)
    }, {
      name: "red_glazed_terracotta",
      url: () => MW(48487)
    }, {
      name: "orange_spawn_block_top",
      url: () => MW(48496)
    }, {
      name: "belt_tunnel_top",
      url: () => MW(48500)
    }, {
      name: "palm_door_bottom",
      url: () => MW(48508)
    }, {
      name: "maple_door_top",
      url: () => MW(48514)
    }, {
      name: "iron_chest_bottom",
      url: () => MW(48517)
    }, {
      name: "wool_colored_silver",
      url: () => MW(48523)
    }, {
      name: "moonstone_chest_bottom",
      url: () => MW(48529)
    }, {
      name: "sky_tap_top",
      url: () => MW(48538)
    }, {
      name: "palm_door_top",
      url: () => MW(48544)
    }, {
      name: "torch_red_block",
      url: () => MW(48552)
    }, {
      name: "rice_stage1",
      url: () => MW(48556)
    }, {
      name: "shatter_mill_top",
      url: () => MW(48563)
    }, {
      name: "white_spawn_block_top",
      url: () => MW(48565)
    }, {
      name: "pink_spawn_block_top",
      url: () => MW(48569)
    }, {
      name: "orange_glazed_terracotta",
      url: () => MW(48571)
    }, {
      name: "lime_spawn_block_top",
      url: () => MW(48576)
    }, {
      name: "jungle_door_top",
      url: () => MW(48579)
    }, {
      name: "wheat_stage1",
      url: () => MW(48587)
    }, {
      name: "alloy_kiln_top",
      url: () => MW(48596)
    }, {
      name: "light_gray_stained_glass",
      url: () => MW(48599)
    }, {
      name: "cherry_door_bottom",
      url: () => MW(48606)
    }, {
      name: "gray_spawn_block_top",
      url: () => MW(48614)
    }, {
      name: "brown_spawn_block_top",
      url: () => MW(48618)
    }, {
      name: "mango_door_top",
      url: () => MW(48627)
    }, {
      name: "pine_door_top",
      url: () => MW(48631)
    }, {
      name: "cherry_door_top",
      url: () => MW(48640)
    }, {
      name: "pine_door_bottom",
      url: () => MW(48643)
    }, {
      name: "press_top",
      url: () => MW(48649)
    }, {
      name: "pink_glazed_terracotta",
      url: () => MW(48652)
    }, {
      name: "purple_glazed_terracotta",
      url: () => MW(48656)
    }, {
      name: "crop_harvester_top",
      url: () => MW(48663)
    }, {
      name: "collider_top",
      url: () => MW(48668)
    }, {
      name: "aspen_door_top",
      url: () => MW(48671)
    }, {
      name: "banana_block_bottom",
      url: () => MW(48674)
    }, {
      name: "crystal_vat_top",
      url: () => MW(48681)
    }, {
      name: "iron_chest_top",
      url: () => MW(48686)
    }, {
      name: "chest_top",
      url: () => MW(48690)
    }, {
      name: "wire_mill_top",
      url: () => MW(48699)
    }, {
      name: "tree_cutter_top",
      url: () => MW(48705)
    }, {
      name: "cedar_door_top",
      url: () => MW(48713)
    }, {
      name: "black_spawn_block_top",
      url: () => MW(48719)
    }, {
      name: "camel_painting_art",
      url: () => MW(48723)
    }, {
      name: "pear_door_top",
      url: () => MW(48725)
    }, {
      name: "blue_spawn_block_top",
      url: () => MW(48728)
    }, {
      name: "magenta_glazed_terracotta",
      url: () => MW(48733)
    }, {
      name: "radar_screen0",
      url: () => MW(48739)
    }, {
      name: "radar_screen1",
      url: () => MW(48744)
    }, {
      name: "radar_screen2",
      url: () => MW(48751)
    }, {
      name: "radar_screen3",
      url: () => MW(48757)
    }, {
      name: "light_gray_glazed_terracotta",
      url: () => MW(48759)
    }, {
      name: "yellow_spawn_block_top",
      url: () => MW(48762)
    }, {
      name: "belt_tunnel_exit_top",
      url: () => MW(48771)
    }, {
      name: "green_spawn_block_top",
      url: () => MW(48780)
    }, {
      name: "aspen_door_bottom",
      url: () => MW(48784)
    }, {
      name: "spectral_door_bottom",
      url: () => MW(48792)
    }, {
      name: "magenta_spawn_block_top",
      url: () => MW(48795)
    }, {
      name: "plum_door_bottom",
      url: () => MW(48803)
    }, {
      name: "camel_painting_art_option2",
      url: () => MW(48808)
    }, {
      name: "deep_drill_top",
      url: () => MW(48810)
    }, {
      name: "spectral_door_top",
      url: () => MW(48819)
    }, {
      name: "cyan_spawn_block_top",
      url: () => MW(48828)
    }, {
      name: "plant_cacti_by_arthur",
      url: () => MW(48830)
    }, {
      name: "torch_block",
      url: () => MW(48838)
    }, {
      name: "board_full",
      url: () => MW(48844)
    }, {
      name: "sea_lantern",
      url: () => MW(48848)
    }, {
      name: "black_glazed_terracotta",
      url: () => MW(48852)
    }, {
      name: "white_glazed_terracotta",
      url: () => MW(48859)
    }, {
      name: "torch_cyan_block",
      url: () => MW(48861)
    }, {
      name: "blue_glazed_terracotta",
      url: () => MW(48870)
    }, {
      name: "synthesizer_top",
      url: () => MW(48872)
    }, {
      name: "torch_green_block",
      url: () => MW(48876)
    }, {
      name: "lily_pad",
      url: () => MW(48883)
    }, {
      name: "cyan_glazed_terracotta",
      url: () => MW(48885)
    }, {
      name: "torch_purple_block",
      url: () => MW(48891)
    }, {
      name: "mob_farm_top",
      url: () => MW(48895)
    }, {
      name: "red_spawn_block_top",
      url: () => MW(48897)
    }, {
      name: "cedar_door_bottom",
      url: () => MW(48901)
    }, {
      name: null,
      url: () => MW(48907)
    }];

    function IW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = PW[WW]) || void 0 === MW ? void 0 : MW.url()) && void 0 !== RW ? RW : null
    }

    function oW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = PW[WW]) || void 0 === MW ? void 0 : MW.name) && void 0 !== RW ? RW : null
    }
    const lW = ["arrow", "bubble", "critical_hit", "drift", "effect_5", "fishingFishSilhouette", "generic_2", "glint", "heart", "scary_face", "soul_0", "square_particle", "z-particle"];

    function FW(WW) {
      const RW = lW[WW];
      return RW ? MW(48914)(`./${RW}.png`) : null
    }
  },
  46082: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/67_Atlas.78772019d3c23af4fde0.png"
  },
  45335: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/67_Model.20ac6746b6d4e9cdc5ac.glb"
  },
  45338: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/67_Reconstructed.aa1c6cd0195ad55052d4.glb"
  },
  46084: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_67_default.78772019d3c23af4fde0.png"
  },
  46088: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Armour Collector_Atlas.68016f01aaaf41a99294.png"
  },
  45347: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Armour Collector_Model.4e44fc9a2bfa0d1fa9ae.glb"
  },
  45356: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Armour Collector_Reconstructed.68bd2827e682b9ef1c5c.glb"
  },
  46094: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_armour collector_default.68016f01aaaf41a99294.png"
  },
  46098: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/BearSaddle_Atlas.15264b4186b61b368f48.png"
  },
  46105: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bear_Atlas.16ed4e893fa8557fb3c8.png"
  },
  45360: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bear_Model.9d563e0d9870f3bee11e.glb"
  },
  46113: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_bear_default.16ed4e893fa8557fb3c8.png"
  },
  46116: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bobino Musculino_Atlas.41bc4861928518f5e973.png"
  },
  45364: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bobino Musculino_Model.d80ca8def7ee3e59c8c4.glb"
  },
  45366: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bobino Musculino_Reconstructed.e5775589151b43e015a3.glb"
  },
  46118: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_bobino musculino_default.41bc4861928518f5e973.png"
  },
  46121: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/CamelSaddle_Atlas.04251d42e0e6b08cd54b.png"
  },
  46127: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Camel_Armour.84f02f272f4930d10edf.png"
  },
  46129: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Camel_Atlas.4c87e02cadf2be1f7039.png"
  },
  45372: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Camel_Model.ff2e0b807141e5918ab6.glb"
  },
  46138: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_camel_default.3b9bf815a1e7e67b9c5b.png"
  },
  46142: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_camel_brown.4fb5c5b6c32bdc8441f7.png"
  },
  46149: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Capitano Explovissimo_Atlas.238f070a1cb621f89233.png"
  },
  45380: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Capitano Explovissimo_Model.987934107c32050a0f8f.glb"
  },
  45385: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Capitano Explovissimo_Reconstructed.34c7194ad537f91fb770.glb"
  },
  46156: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_capitano explovissimo_default.238f070a1cb621f89233.png"
  },
  46161: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cave Golem_Atlas.43057255fbcd8cf0e376.png"
  },
  45388: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cave Golem_Model.fcb854951ae2d8348159.glb"
  },
  46167: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_cave golem_default.fe29c2466a335ce428b7.png"
  },
  46170: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_cave golem_iron.f15813c3f4b357c1c3ad.png"
  },
  46173: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_cave golem_corrupted.45ddac891a25ba285060.png"
  },
  46176: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cow_Atlas.646efb734e50a01d474a.png"
  },
  45395: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cow_Model.a114439e2ddef7ddc8e6.glb"
  },
  46184: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_cow_default.e8db5e9466d81322284b.png"
  },
  46191: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_cow_cream.15ffb0b24f4058ffe0d8.png"
  },
  46193: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Crone_Atlas.2c1819debbc39c551df9.png"
  },
  45401: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Crone_Model.07672f43fa6684aacf0d.glb"
  },
  46200: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_crone_default.629dfdec640e437c8c58.png"
  },
  46204: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/DeerAntlers_Atlas.317f1c4b7f16d8af24eb.png"
  },
  46210: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Deer_Atlas.8c8d020eac0964ca3613.png"
  },
  45408: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Deer_Model.4c98ba2161f6516f336d.glb"
  },
  46216: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_deer_default.8c8d020eac0964ca3613.png"
  },
  46218: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Desert Fennec_Atlas.5cc3a10a2d205413b221.png"
  },
  45411: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Desert Fennec_Model.46d8cd56cce0f09d46ec.glb"
  },
  46220: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_desert fennec_default.5cc3a10a2d205413b221.png"
  },
  46222: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Goofy Golem_Atlas.9f539ed92e7a18179ccc.png"
  },
  46226: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_diamond goofy golem_default.ad6acdd2ec3df5dc3c58.png"
  },
  46234: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_diamond goofy golem_flaking.bf96dafe607ba2c1989f.png"
  },
  46236: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_diamond goofy golem_patchy.990dd71826e102069a65.png"
  },
  46241: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_diamond goofy golem_shedding.494b42755accc9f4d3c8.png"
  },
  46244: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_diamond goofy golem_bare.03408815673f9c107ca9.png"
  },
  46251: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_diamond goofy golem_stone.83de462a7be9aae11337.png"
  },
  46253: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Guardian_Atlas.cb75d23bfd8385a5fb1b.png"
  },
  45416: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  45424: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  46260: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_diamond guardian_default.cb75d23bfd8385a5fb1b.png"
  },
  46262: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Huntress_Atlas.19e9ae6b50525bbf7989.png"
  },
  46264: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr huntress_default.42d87f08d4f4e8c2e48c.png"
  },
  46271: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_draugr huntress_chainmail.f16e63013ccf629b7eac.png"
  },
  46278: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Knight_Atlas.53367bcdaf4237c2c5eb.png"
  },
  45431: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Knight_Model.9eca91f878818eb243b7.glb"
  },
  46280: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr knight_default.53367bcdaf4237c2c5eb.png"
  },
  46283: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Reaver_Atlas.d059dc5ea7e11b0d6226.png"
  },
  45434: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Reaver_Model.b238f5542ebc8a6f790d.glb"
  },
  46285: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr reaver_default.d059dc5ea7e11b0d6226.png"
  },
  46288: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Skeleton_Atlas.ad55be7f308296fa0710.png"
  },
  45441: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Skeleton_Model.ea29dd4b4906e922dbc5.glb"
  },
  46292: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr skeleton_default.ad55be7f308296fa0710.png"
  },
  46301: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Warper_Atlas.2f0f8036bfafcda6ac8c.png"
  },
  45443: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Warper_Model.957031cd0be6a379a31e.glb"
  },
  46303: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr warper_default.2f0f8036bfafcda6ac8c.png"
  },
  46310: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Zombie_Atlas.d26d8b763d5430e29e22.png"
  },
  45446: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Zombie_Model.f3182b807f523b9f5cfc.glb"
  },
  46312: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_draugr zombie_default.a81024e6c9b71d39dc2b.png"
  },
  46316: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/10_draugr zombie_corrupted2.705d686f424354e6f53e.png"
  },
  46318: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_draugr zombie_longHairChestplate.7d99ad0435907496ded0.png"
  },
  46321: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_draugr zombie_longHairClothed.3e4331b33e866be77414.png"
  },
  46327: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_draugr zombie_shortHairClothed.608a2b0d8c412badf03f.png"
  },
  46330: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_draugr zombie_flower.0943cbd0f6aeb07fb7c4.png"
  },
  46332: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_draugr zombie_flower2.1905b274fd6714a68073.png"
  },
  46341: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/6_draugr zombie_mushroom.2e6fd854bb40cbb60921.png"
  },
  46343: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/7_draugr zombie_vine.097f85f6ef3e92e8c2d2.png"
  },
  46350: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/8_draugr zombie_vine2.2a870c768fb2eaf1d64b.png"
  },
  46356: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/9_draugr zombie_corrupted.0c3ba982e223bfd2a399.png"
  },
  46365: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Evil Tome_Atlas.ebb1d7344941d169e61f.png"
  },
  45454: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Evil Tome_Model.dac8f598cd75429bd88f.glb"
  },
  46372: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_evil tome_default.ebb1d7344941d169e61f.png"
  },
  46380: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frost Golem_Atlas.f219ae0b8effd2d3288c.png"
  },
  46382: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_frost golem_default.f219ae0b8effd2d3288c.png"
  },
  46389: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frost Skeleton_Atlas.fdab98e8d8fa9e1606a7.png"
  },
  46398: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_frost skeleton_default.fdab98e8d8fa9e1606a7.png"
  },
  46407: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frost Wraith_Atlas.9b40421e56202862e000.png"
  },
  45456: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frost Wraith_Model.6a1df7eca8f7944cfa85.glb"
  },
  46412: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_frost wraith_default.1c2c4171f3ff80b1c59c.png"
  },
  46415: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_frost wraith_tattered.0f7d7bed74631a89045d.png"
  },
  46420: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_frost wraith_frostKing.42a658129c295fa5ba8a.png"
  },
  46428: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_frost wraith_accursed.5efdb1d1f3bc60504721.png"
  },
  46435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frost Zombie_Atlas.856fb434ac2c8cfac7ad.png"
  },
  46438: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_frost zombie_default.066e31eee2646fd422ce.png"
  },
  46446: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_frost zombie_longHairChestplate.520e0eb2c0a936e2a8e1.png"
  },
  46452: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_frost zombie_shortHairClothed.59528239298a4262f7f4.png"
  },
  46454: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Furnace Knight_Atlas.2659e8e76ccf1355bbe5.png"
  },
  45462: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Furnace Knight_Model.a82b173e727cd9bbf9d3.glb"
  },
  45471: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Furnace Knight_Reconstructed.73693171d4617dfc8e41.glb"
  },
  46456: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_furnace knight_default.2659e8e76ccf1355bbe5.png"
  },
  46464: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Bro_Atlas.fc3f69fac528331ca24e.png"
  },
  45477: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Bro_Model.c70809eb925034975d92.glb"
  },
  45481: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Bro_Reconstructed.ee280e4747c632e2a510.glb"
  },
  46473: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_glass bro_default.fc3f69fac528331ca24e.png"
  },
  46482: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Gremlin_Atlas.e22dbc21c33ea76e178c.png"
  },
  45488: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Gremlin_Model.880227f604677d4abba9.glb"
  },
  45490: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glass Gremlin_Reconstructed.4371333950829717aded.glb"
  },
  46485: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_glass gremlin_default.e22dbc21c33ea76e178c.png"
  },
  46487: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Goofy Golem_Atlas.15f38107836cebc75f69.png"
  },
  46494: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_gold goofy golem_default.4dabfa0399071406e2a2.png"
  },
  46501: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_gold goofy golem_flaking.eee4a22f79e9daa46d2a.png"
  },
  46509: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_gold goofy golem_patchy.746312a9826e176eb60e.png"
  },
  46518: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_gold goofy golem_shedding.648f3630984058f9c50e.png"
  },
  46521: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_gold goofy golem_bare.70636c8a87acccd75213.png"
  },
  46525: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_gold goofy golem_stone.5c03eb9f31dbbcd01b9b.png"
  },
  46528: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Guardian_Atlas.838ff51de0dd81a5f1ef.png"
  },
  45494: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Guardian_Model.890ecfcf2fc8d402086c.glb"
  },
  45499: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Guardian_Reconstructed.5bb360f7978bb121bb05.glb"
  },
  46531: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_gold guardian_default.838ff51de0dd81a5f1ef.png"
  },
  46533: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Watermelon Stag_Armour.972be4eb24f55108c5e8.png"
  },
  46537: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Watermelon Stag_Atlas.d97b04a85f87e7e507a4.png"
  },
  46545: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_gold watermelon stag_default.d97b04a85f87e7e507a4.png"
  },
  46552: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/GorillaSaddle_Atlas.b80dc520cd3f21340853.png"
  },
  46558: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gorilla_Atlas.8180581c438425b957c7.png"
  },
  45507: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gorilla_Model.da3aa249b0fcc54c7659.glb"
  },
  46564: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_gorilla_default.8180581c438425b957c7.png"
  },
  46572: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/HorseSaddle_Atlas.28811fb81cc9c552df26.png"
  },
  46574: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Horse_Atlas.35d93b681a8f7834e697.png"
  },
  45514: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Horse_Model.800a7268d235df849b7e.glb"
  },
  46579: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_horse_default.da58b615663faac34f1d.png"
  },
  46585: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_horse_black.4dbfd341ba74e805cd0e.png"
  },
  46589: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_horse_brown.ad46016bb913f83d93b3.png"
  },
  46595: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_horse_cream.d324148443d0eabfaf65.png"
  },
  46602: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Golem_Atlas.f15813c3f4b357c1c3ad.png"
  },
  46610: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_iron golem_default.f15813c3f4b357c1c3ad.png"
  },
  46614: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Goofy Golem_Atlas.1a48754dc0b64a8b7b05.png"
  },
  45523: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Goofy Golem_Model.9bb7fcaceb73b4a3b23d.glb"
  },
  46616: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_iron goofy golem_default.0c95620234f27798cfe9.png"
  },
  46625: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_iron goofy golem_flaking.73f858cdb6d36fa13320.png"
  },
  46632: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_iron goofy golem_patchy.f0d3039d44a0b2b2f59e.png"
  },
  46634: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_iron goofy golem_shedding.25ee174e06680e7280d1.png"
  },
  46637: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_iron goofy golem_bare.44ae0955ff00562ecdf6.png"
  },
  46641: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_iron goofy golem_stone.25c52e79c4d759bf9f8c.png"
  },
  46648: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Guardian_Atlas.d6a6fbc0fa3210a990c1.png"
  },
  45531: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  45534: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  46655: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_iron guardian_default.d6a6fbc0fa3210a990c1.png"
  },
  46658: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lil Knight_Atlas.cc0d9a1740f90db8827b.png"
  },
  45538: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lil Knight_Model.ed4a69ab8ec5e3c1111a.glb"
  },
  45544: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lil Knight_Reconstructed.f2857d2d6008814e75ef.glb"
  },
  46667: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_lil knight_default.cc0d9a1740f90db8827b.png"
  },
  46674: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lord Vulcan_Atlas.7cce3638220330c1d017.png"
  },
  45546: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lord Vulcan_Model.df0082926bbac281e4aa.glb"
  },
  45551: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lord Vulcan_Reconstructed.277b77204fcb3af7d078.glb"
  },
  46682: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_lord vulcan_default.7cce3638220330c1d017.png"
  },
  46691: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magma Golem_Atlas.c048f8347bba1eff276d.png"
  },
  46694: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_magma golem_default.c048f8347bba1eff276d.png"
  },
  46702: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magma Toad_Atlas.a8b9db6b01f4542e1467.png"
  },
  45558: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magma Toad_Model.26aea2fe0368bdbd9799.glb"
  },
  46710: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_magma toad_default.a8b9db6b01f4542e1467.png"
  },
  46719: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Moonstone Goofy Golem_Atlas.4caa2a72116784d73adb.png"
  },
  46724: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_moonstone goofy golem_default.b58fbd04c36c1bfc9720.png"
  },
  46733: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_moonstone goofy golem_flaking.e3cb7373d477e5b8aaa6.png"
  },
  46742: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_moonstone goofy golem_patchy.be6e50c29d06462f66cd.png"
  },
  46748: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_moonstone goofy golem_shedding.8ac0d58b2f3f0c7eca1b.png"
  },
  46757: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_moonstone goofy golem_bare.7b70a71811495f107613.png"
  },
  46761: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_moonstone goofy golem_stone.fb472f3c494b13ee5178.png"
  },
  46764: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Moonstone Guardian_Atlas.5fe5c9f714e9d9b65847.png"
  },
  45561: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Moonstone Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  45568: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Moonstone Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  46770: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_moonstone guardian_default.5fe5c9f714e9d9b65847.png"
  },
  46775: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mummy_Atlas.45b5369d53fdb99bed26.png"
  },
  45575: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mummy_Model.729c1fe6a9048e506b28.glb"
  },
  45577: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mummy_Reconstructed.b748762209f6006c725f.glb"
  },
  46779: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_mummy_default.45b5369d53fdb99bed26.png"
  },
  46784: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pig_Atlas.74d3b179a1bc6a57f8bc.png"
  },
  45580: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pig_Model.03480eac04a4a2032b5c.glb"
  },
  46786: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_pig_default.bc1d32464daad4bbd8c6.png"
  },
  46792: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Player_Atlas.c449f71e0a2c59975d75.png"
  },
  45587: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Player_Model.48f382200795c9a6c7ef.glb"
  },
  45594: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Player_Reconstructed.e6c661d420c9b3c44d7e.glb"
  },
  45602: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_1_attachable.d16565a5182dd7030194.glb"
  },
  46800: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_1_attachable.c29f3253de97a5d410e6.png"
  },
  45608: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_2_attachable.f0e34ecfb3014bd479c4.glb"
  },
  46803: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_2_attachable.33f79a0dadad296b3a8d.png"
  },
  45611: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_3_attachable.bfa6b8c045c68ab1dc2c.glb"
  },
  46809: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_3_attachable.e971da0681c2efb5a036.png"
  },
  45617: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_4_attachable.df04c70688993ca6696d.glb"
  },
  46813: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/astro_set_4_attachable.faaa391af980dff2f0c1.png"
  },
  45620: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beaver_lumberjack.63d398cb151a061dc9df.glb"
  },
  46819: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beaver_lumberjack.0b50b931c29405d9f653.png"
  },
  45628: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_1_attachable.ece755608efba3a186a1.glb"
  },
  46826: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_1_attachable.42914edf1e5e83bf4830.png"
  },
  45635: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_2_attachable.5db496fb3bac88bf1355.glb"
  },
  46833: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_2_attachable.8d0a8c8e021cd1819d10.png"
  },
  45644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_3_attachable.abec6a2dcb273d964508.glb"
  },
  46839: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_3_attachable_blue.b57902234fc8bace8bdf.png"
  },
  46845: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_3_attachable_green.01fc83380655c9a144f0.png"
  },
  46854: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_3_attachable_red.b3479efa71463dc4ea9e.png"
  },
  45647: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_4_attachable.d5a09bbb6b67e8f282c6.glb"
  },
  46859: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bee_set_4_attachable.1964af9414b984f51d0c.png"
  },
  46861: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_cow_cream.93a3a63c37c297f2bc91.png"
  },
  46868: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_cow_normal.25284b2ee8a034f2207f.png"
  },
  46875: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_creator_level1.4f2f4d6e566890226158.png"
  },
  46878: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_creator_level2.d2f2f0fe19ce7129d8f2.png"
  },
  46881: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_creator_level3.b45b0cbe3153579501ee.png"
  },
  46883: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_none.1feb6c810316e0bbf6f7.png"
  },
  46889: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_pig.fa3ba0599d1283fabcf5.png"
  },
  46891: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_sheep.ab31bf50b51b156fa9b9.png"
  },
  46893: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_super.5e15d30dd75205e380c5.png"
  },
  46899: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_super_inverted.1e048a212b55b4714c30.png"
  },
  46902: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_youtuber.38ac1d5daab9704990be.png"
  },
  45654: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cape_cuboid_18_12.a21468079980c1c366dc.glb"
  },
  45662: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chef_attachables.b8355e8da34089d9a4ee.glb"
  },
  46909: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chef_attachables.e3933ee0a7facb63f8fc.png"
  },
  45664: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_blue_hair.fd9f446dd191be8421a1.glb"
  },
  46911: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_blue_hair.ac564bea50bbc19fbebc.png"
  },
  45668: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_braided_hair.5a099561e41c020156e6.glb"
  },
  46920: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_braided_hair.0cdf6e99e7d313900600.png"
  },
  45676: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_child.6a2eabe0e42a60b60f5d.glb"
  },
  46924: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_child.dd7bd7d791417c7cd76c.png"
  },
  45685: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_forked_beard.8b1921850ee39af61714.glb"
  },
  46928: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_forked_beard.e97aa85a569956654b66.png"
  },
  45689: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_ginger_beard.5281703e8404e83277a1.glb"
  },
  46935: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_ginger_beard.b381303da9453a64b9de.png"
  },
  45697: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_grey_beard.9a405ffacf45697cd862.glb"
  },
  46942: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_grey_beard.d478545c0ac1733f45ac.png"
  },
  45702: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_hair_buns.0689c8a36757fb228d12.glb"
  },
  46948: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_hair_buns.99cf87cba931cf1c82e1.png"
  },
  45706: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_purple_beard.3706e283af7db90ec6dd.glb"
  },
  46955: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_purple_beard.793d3f821147dab24317.png"
  },
  45711: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_red_hair.a600a969ac7275b21114.glb"
  },
  46961: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_red_hair.d0ba03ae7bdf8067f0ed.png"
  },
  45713: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_short_beard.46c3074282aeda011332.glb"
  },
  46963: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dwarf_short_beard.d488c7bf3b0d3640e5a5.png"
  },
  45721: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/farmer_gill_attachable.06e7a7d5bf95685e2af0.glb"
  },
  46969: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/farmer_gill_attachable.4d1c24944e6418389add.png"
  },
  45730: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/farmer_head.75ea18bc1214e93645c3.glb"
  },
  46978: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/farmer_head.6cc73aa5e23195da2780.png"
  },
  45736: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fire_mage_attachable.c5706ee8194a4de2efdf.glb"
  },
  46981: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fire_mage_attachable.c00bd47444c227739ada.png"
  },
  45740: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/forge_mother.7e1cc3526d433035776b.glb"
  },
  46984: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/forge_mother.842e0c3edd3f5f257414.png"
  },
  45746: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/general_attachable.b185778b184ac5479a66.glb"
  },
  46991: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/general_attachable.76d5533363f2f0d2d1fe.png"
  },
  45752: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/goblin_goggles.d9336ff2e39a9a10e8a5.glb"
  },
  46998: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/goblin_goggles.d3b588fdb35828bf3c36.png"
  },
  45758: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/goblin_mad_scientist.818218843d6c7d315844.glb"
  },
  47002: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/goblin_mad_scientist.db8bc56b97c1030308b5.png"
  },
  45760: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_1_attachable.4e75dd863043ffc20054.glb"
  },
  47008: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_1_attachable.dfa0d411fd84a3a30db8.png"
  },
  45769: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_2_attachable.9e040149e440b75fd2e1.glb"
  },
  47014: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_2_attachable.fba9f96171a9c6ca479e.png"
  },
  45777: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_3_attachable.922d09d1c02edf5da758.glb"
  },
  47019: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_3_attachable.e33e3ed55f37517a00cd.png"
  },
  45784: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_4_attachable.2a5b5342b8f2cfe71704.glb"
  },
  47026: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/highSociety_set_4_attachable.8e013771e0294e6b36ba.png"
  },
  45789: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_archer.4b0c4ab004d9572520ed.glb"
  },
  47032: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_archer.5622fa34756f0ddeb1f9.png"
  },
  45791: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_desert_guard.c9ce94394c5ad789a8b2.glb"
  },
  47037: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_desert_guard.259b2a31cd3d5d1def25.png"
  },
  45794: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_sentry.fd88756ed28102c038be.glb"
  },
  47043: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/human_sentry.702ac5cab41564ab3731.png"
  },
  45798: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jackal_priest.ea22761085c155dcfe9f.glb"
  },
  47046: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jackal_priest.48e88aa29dff4d501a0e.png"
  },
  45807: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jetpack_attachable.4d60f992954da5e340ce.glb"
  },
  47055: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jetpack_attachable.6d2bbf43846155c5bb2e.png"
  },
  45815: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable.d17e8a471caba220b2e5.glb"
  },
  47060: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable_blue.2f686b41d85c4d6bce33.png"
  },
  47066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable_green.031f784da6ee987953ec.png"
  },
  47068: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable_purple.3f3a83dbf8e636cfcb60.png"
  },
  47071: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable_red.db6c293bd5850be96067.png"
  },
  47074: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_1_attachable_yellow.974529f01d0df1037343.png"
  },
  45823: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_2_attachable.08d52394d5b33cef5026.glb"
  },
  47077: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_2_attachable_blue.0dbd4893b4968b5c9c31.png"
  },
  47085: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_2_attachable_purple.3863d87764c18546382d.png"
  },
  47088: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_2_attachable_red.c7bddc3b4f6e52aa53a7.png"
  },
  45830: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_3_attachable.c1a9c068d6cd6aab4e44.glb"
  },
  47093: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_3_attachable_green.0f0b15840a127c4a441a.png"
  },
  47099: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_3_attachable_pink.5ba032639c97df45bca6.png"
  },
  47101: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_3_attachable_purple.2a71c7e895959106b552.png"
  },
  47103: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_3_attachable_red.9d5625925242d63571e8.png"
  },
  45835: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_4_attachable.4f13575f674de49d01d9.glb"
  },
  47112: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_4_attachable_blue.66da560b557ef43ab0be.png"
  },
  47118: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_4_attachable_hair.7cd5ce85899b8268578f.png"
  },
  47124: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_4_attachable_purple.08396e2fc257eb15c043.png"
  },
  47131: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/medieval_set_4_attachable_red.670d03766266c09f7ff6.png"
  },
  45842: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_helmet_attachable.5283fabd3acf0964e523.glb"
  },
  47137: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_helmet_attachable.c576b351721412f3474c.png"
  },
  45849: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur.8c8438fcfb2743e11a08.glb"
  },
  47143: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur.18e2b4005cf1249ddbc3.png"
  },
  45853: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur_elder.671a60a9234634a7317e.glb"
  },
  47146: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur_elder.73650a0bb7b29e737a18.png"
  },
  45855: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur_warrior.cb1266377a03a4840597.glb"
  },
  47148: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/minotaur_warrior.aa846fef1b1cff809fe1.png"
  },
  45857: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/monster_hunter_lorenzo_attachable.cbf89dcf0e32fef44b96.glb"
  },
  47156: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/monster_hunter_lorenzo_attachable.4a32273f11ece003053c.png"
  },
  47164: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/nova_jetpack_attachable.b4fe324d9f350a47b6b7.png"
  },
  45865: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/npc_pig_head.0610232aa4cf2be9a3a0.glb"
  },
  47168: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/npc_pig_head.0cff7e148233d053b838.png"
  },
  45869: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/painter_spencer_attachable.efbda3faf20332fbf4d8.glb"
  },
  47173: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/painter_spencer_attachable.2b1b0e6121f1f1df8b25.png"
  },
  45874: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pig_napoleon.a6b4adfd05805e823ef0.glb"
  },
  47176: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pig_napoleon.18fd7f3c75ed02707613.png"
  },
  45876: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pig_worker_attachable.c8ae9d921fa6347772a4.glb"
  },
  47184: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pig_worker_attachable.7df668bc96c60eec5b4e.png"
  },
  45884: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/piggy_banker_head.1a75c8ee13d7032928b2.glb"
  },
  47191: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/piggy_banker_head.0a378752a2a5a3c9e04b.png"
  },
  45891: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/portal_mage_hat.3855796919cb609ddf0b.glb"
  },
  47198: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/portal_mage_hat.53dcc9e4427e3eaeb19b.png"
  },
  45893: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rabbit_aristocrat_attachable.fb6aed0a5af2fe257cd9.glb"
  },
  47203: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rabbit_aristocrat_attachable.f96f72d6b1bbfaf34e34.png"
  },
  45896: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/smuglyn_attachable.e262dbcc08060d3b2c33.glb"
  },
  47207: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/smuglyn_attachable.9166c7e98a46701c6470.png"
  },
  45904: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_1_attachable.51f486670b7d1af4a977.glb"
  },
  47212: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_1_attachable.d1a2a2e0867a2cb5bef1.png"
  },
  45912: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_2_attachable.d6582c7b4ab3e973bfb3.glb"
  },
  47214: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_2_attachable.784bc9f5727b2d686616.png"
  },
  45916: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_3_attachable.8fb6bd5d4c5f57978790.glb"
  },
  47218: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_3_attachable.fc8f7ebe2626ce95666c.png"
  },
  45925: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_4_attachable.21bd91c42e1b7ace4372.glb"
  },
  47226: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spring_set_4_attachable.08d09b530492583fcf13.png"
  },
  45929: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_boy.b4589071fbc6f8aab4eb.glb"
  },
  47233: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_boy.4f30c4250607088747ac.png"
  },
  47239: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_girl_attachable.10eab4d20aa51073ed13.png"
  },
  45932: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_guy_attachable.cf561919acf1ae0553f4.glb"
  },
  47241: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_guy_attachable.d3444f70728d2dda507c.png"
  },
  45937: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_guy_fisherman_attachable.6f7e98da21b6d9d0245a.glb"
  },
  47247: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tentacle_guy_fisherman_attachable.69e2448895829cd14f97.png"
  },
  45940: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/trader_cowl_black.6702003ee060b8868f70.glb"
  },
  47250: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/trader_cowl_black.3e78c867952de1006a5b.png"
  },
  45943: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/trader_cowl_blue.6702003ee060b8868f70.glb"
  },
  47254: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/trader_cowl_blue.69970616d9125960a099.png"
  },
  45949: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wolf_in_suit_attachable.d386060693b354bdd3b8.glb"
  },
  47260: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wolf_in_suit_attachable.2beb931b01fad9bc4d46.png"
  },
  45954: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wolf_security.f95b7d48013fce4ce4bb.glb"
  },
  47268: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wolf_security.92c9f8ca8df9751651a3.png"
  },
  45959: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_1_attachable.0031da5214faa28a68db.glb"
  },
  47270: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_1_attachable.eea4ad48a4d5488d6026.png"
  },
  45967: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_2_attachable.e28bc87c22cc5b5ca31c.glb"
  },
  47278: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_2_attachable.94d8e252b4b30a4151aa.png"
  },
  45975: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_3_attachable.cbd5f1c1ddd045c853ef.glb"
  },
  47281: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_3_attachable.353bece2880f7f95a98f.png"
  },
  45977: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_4_attachable.d7a2516dadda81ee7ac0.glb"
  },
  47287: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/y2k_set_4_attachable.d0670370061907b3c750.png"
  },
  47294: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Scorpion_Atlas.4c63a55d5b226699b7b5.png"
  },
  45986: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Scorpion_Model.43a1eaa7700978fc716c.glb"
  },
  47303: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_scorpion_default.4c63a55d5b226699b7b5.png"
  },
  47309: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/SheepWool_Atlas.8c6ed48cd20ae438ce99.png"
  },
  47314: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Sheep_Atlas.edd4d6275fdd07baaf45.png"
  },
  45995: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Sheep_Model.ae826edb0fe7f7f6a082.glb"
  },
  47321: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_sheep_default.55e2f064ebce05fea3f6.png"
  },
  47324: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/10_sheep_gray.55e2f064ebce05fea3f6.png"
  },
  47329: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/11_sheep_green.55e2f064ebce05fea3f6.png"
  },
  47338: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/12_sheep_lightBlue.55e2f064ebce05fea3f6.png"
  },
  47340: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/13_sheep_lightGray.55e2f064ebce05fea3f6.png"
  },
  47348: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/14_sheep_lime.55e2f064ebce05fea3f6.png"
  },
  47350: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/15_sheep_magenta.55e2f064ebce05fea3f6.png"
  },
  47359: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_sheep_black.55e2f064ebce05fea3f6.png"
  },
  47366: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_sheep_red.55e2f064ebce05fea3f6.png"
  },
  47369: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_sheep_orange.55e2f064ebce05fea3f6.png"
  },
  47371: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_sheep_pink.55e2f064ebce05fea3f6.png"
  },
  47373: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_sheep_purple.55e2f064ebce05fea3f6.png"
  },
  47379: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/6_sheep_yellow.55e2f064ebce05fea3f6.png"
  },
  47385: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/7_sheep_blue.55e2f064ebce05fea3f6.png"
  },
  47387: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/8_sheep_brown.55e2f064ebce05fea3f6.png"
  },
  47393: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/9_sheep_cyan.55e2f064ebce05fea3f6.png"
  },
  47397: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Skeleton_Atlas.425e67b7d72b1af0b8c2.png"
  },
  45998: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Skeleton_Model.59355cb21c8481c2ca2c.glb"
  },
  46007: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Skeleton_Reconstructed.e7c175b2a6a01b86f26c.glb"
  },
  47401: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_skeleton_default.425e67b7d72b1af0b8c2.png"
  },
  47405: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Slime_Atlas.1263540ecee2dfa618c5.png"
  },
  46014: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Slime_Model.0fe0e3af703604cb8247.glb"
  },
  47408: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_slime_default.1263540ecee2dfa618c5.png"
  },
  47410: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit BearSaddle_Atlas.9b845651cecb41503d7e.png"
  },
  47413: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit Bear_Atlas.07a86cb5b2942e5f3573.png"
  },
  47419: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_spirit bear_default.07a86cb5b2942e5f3573.png"
  },
  47421: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit Golem_Atlas.9bb2443ec5562080032b.png"
  },
  47424: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_spirit golem_default.9bb2443ec5562080032b.png"
  },
  47426: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit GorillaSaddle_Atlas.24a33c7283188d22e2f6.png"
  },
  47433: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit Gorilla_Atlas.b8b61b0b14bb5661336e.png"
  },
  47435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_spirit gorilla_default.b8b61b0b14bb5661336e.png"
  },
  47443: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit StagSaddle_Atlas.3038083905dd48c74892.png"
  },
  47450: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit Stag_Atlas.9207e762c70637613953.png"
  },
  47458: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_spirit stag_default.9207e762c70637613953.png"
  },
  47465: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit WolfCollar_Atlas.d1746d86d2b0f115c2fd.png"
  },
  47473: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spirit Wolf_Atlas.9b08acbc57bcdda346ef.png"
  },
  47480: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_spirit wolf_default.9b08acbc57bcdda346ef.png"
  },
  47483: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/StagSaddle_Atlas.017d11ce01411f24a65e.png"
  },
  47487: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stag_Atlas.25863e9a084dc2398678.png"
  },
  46023: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stag_Model.8b1a04b971769798551e.glb"
  },
  47490: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_stag_default.25863e9a084dc2398678.png"
  },
  47492: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stalker_Atlas.765a6f6d815e489d379a.png"
  },
  46027: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stalker_Model.62252db592e9a1194275.glb"
  },
  47499: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_stalker_default.05870a7ada9d85be2859.png"
  },
  47508: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_stalker_crimson.ed56375cd712c11086f1.png"
  },
  47515: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_stalker_frost.bc39d3a735616704ab47.png"
  },
  47523: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_stalker_void.bea5f5c673051ba9b5f4.png"
  },
  47531: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Tiki Terror_Atlas.3cd5e376c5c117c4c83f.png"
  },
  46036: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Tiki Terror_Model.795d7c9d776f3038e383.glb"
  },
  46043: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Tiki Terror_Reconstructed.66f98f4bfd2fd9d5dfe0.glb"
  },
  47533: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_tiki terror_default.649d191e0a0af31ed4b3.png"
  },
  47541: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_tiki terror_titan.7f0be3102d2022e79d71.png"
  },
  47548: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_tiki terror_tormentor.0bd9c18bb8f000b60ac1.png"
  },
  47555: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_tiki terror_tyrant.ea975b5358da4f2dceaf.png"
  },
  47564: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Vulcanite_Atlas.8993f0c3dbd8a3b2db83.png"
  },
  46049: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Vulcanite_Model.8659034f30a8675dca54.glb"
  },
  46051: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Vulcanite_Reconstructed.fd4e0dbf75086bfa07c4.glb"
  },
  47571: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_vulcanite_default.8993f0c3dbd8a3b2db83.png"
  },
  47574: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/WildcatCollar_Atlas.caaf5d479a9b064f25ca.png"
  },
  47577: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wildcat_Atlas.730e684f03c8ec6b6ca7.png"
  },
  46053: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wildcat_Model.882887d7f1b81b755c8f.glb"
  },
  47584: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_wildcat_default.33894faabdf46ff9bd5e.png"
  },
  47587: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_wildcat_tabby.b8193faccc684618151c.png"
  },
  47596: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_wildcat_grey.bb2c555308bee757148e.png"
  },
  47605: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_wildcat_black.0a1d2b751451edbf520c.png"
  },
  47614: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_wildcat_calico.71da5e696f853739c2b8.png"
  },
  47619: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/5_wildcat_siamese.3442e45665115fb259a9.png"
  },
  47622: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/6_wildcat_leopard.a1b394639e3a31f471e8.png"
  },
  47629: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/WolfCollar_Atlas.d66ee93a67f33ef102cc.png"
  },
  47635: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wolf_Atlas.b14e1ea41fa8fcaccc6d.png"
  },
  46062: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wolf_Model.e8ce1bb8ca6dee8c4281.glb"
  },
  47644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_wolf_default.4b7fd478b8456d6188dc.png"
  },
  47646: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/1_wolf_white.6ddd98fa6fef429b09fc.png"
  },
  47649: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_wolf_brown.8250048308eebf9ff5e3.png"
  },
  47652: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/3_wolf_grey.f7443ecfa81204e0435e.png"
  },
  47660: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/4_wolf_spectral.ed551985dc573c47da7b.png"
  },
  47664: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Zombie_Atlas.0d12d7cf7b286942fb57.png"
  },
  46066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Zombie_Model.729c1fe6a9048e506b28.glb"
  },
  46068: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Zombie_Reconstructed.b748762209f6006c725f.glb"
  },
  47668: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/0_zombie_default.0d12d7cf7b286942fb57.png"
  },
  40824: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/2_block.ed68e72819b31a973068.glb"
  },
  40828: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/67.e191f0fe25ea3300eab7.glb"
  },
  40830: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Artisan Bench.b42baf109b0e8ceebe35.glb"
  },
  40837: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Aspen Door.70ff2e635fa7e6d074e7.glb"
  },
  40840: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Aspen Item Pedestal.d106ce98250ed7ec636c.glb"
  },
  40849: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Aspen Ladder.c46a3ef9dff3ff338c6b.glb"
  },
  40858: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Aspen Trapdoor.be2f0606fc8b154395bf.glb"
  },
  40864: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Black Banner.c6b29cdd2a2ef7368215.glb"
  },
  40871: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Black Bed.cea41e80f8f80d1deaac.glb"
  },
  40875: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Black Directional Arrow.335ec331ba4de1ed0c03.glb"
  },
  40880: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Black Strongbed.d812d56747ded12fa76c.glb"
  },
  40884: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Blue Banner.ed6d85442bc3bb4697dd.glb"
  },
  40888: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Blue Bed.6134692fe5a906ee225e.glb"
  },
  40890: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Blue Directional Arrow.2789b2fbd37ed6d0a81e.glb"
  },
  40897: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Blue Strongbed.ded6e860b166e9218920.glb"
  },
  40906: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Board.f3ca970f0aec49c2cba5.glb"
  },
  40908: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Brown Banner.2fd5a70262544120b8b5.glb"
  },
  40916: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Brown Bed.3c55240c9fe96e467e8e.glb"
  },
  40920: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Brown Directional Arrow.277c0369fab2f84fb1ee.glb"
  },
  40928: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Brown Strongbed.fac0f4616a1660180625.glb"
  },
  40936: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cedar Door.6505aa3b8d621a205c84.glb"
  },
  40945: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cedar Item Pedestal.fed6ba91b9e237779dde.glb"
  },
  40951: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cedar Ladder.91ddcfdab0b805b0ba02.glb"
  },
  40956: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cedar Trapdoor.4513c73d389bce4c7ba0.glb"
  },
  40965: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cherry Door.7cd622b686ab7d35adbf.glb"
  },
  40967: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cherry Item Pedestal.84093fc38b34643aecbb.glb"
  },
  40971: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cherry Ladder.09ccb69175957a415053.glb"
  },
  40973: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cherry Trapdoor.631b5b507962f538a8b3.glb"
  },
  40978: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Crimson Trapdoor.0a6dcda3d7289dd9cabb.glb"
  },
  40986: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cyan Banner.8bfb99d6f5baa4fdda91.glb"
  },
  40992: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cyan Bed.2e60dbe672ee333df908.glb"
  },
  40997: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cyan Directional Arrow.5fb3ab4f0042724cb73a.glb"
  },
  41006: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cyan Strongbed.8744cd46f22ecb13c70f.glb"
  },
  41009: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Dangling Rope.148f7603a65c417035b0.glb"
  },
  41015: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Dangling Vine.ea87fe948ec583ff997c.glb"
  },
  41020: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Enchanting Table.611328e5f2099242ee00.glb"
  },
  41029: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Diamond Trophy.1173685f24276f2cbcb9.glb"
  },
  41033: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Banner.aae5998e92c2b99664bc.glb"
  },
  41042: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Fat Brown Mushroom.40af11e61bd2c9293a6e.glb"
  },
  41048: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Fat Red Mushroom.7a9bad44b193737cfa3a.glb"
  },
  41050: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Fence.878f3952d5f962074bf3.glb"
  },
  41054: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/FenceGate.d9d93725ba92bb91055c.glb"
  },
  41062: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Furnace.63172398ee4490177f4f.glb"
  },
  41070: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Enchanting Table.f0131104629a776c3b8f.glb"
  },
  41074: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gold Trophy.2167e90bf848cd51f465.glb"
  },
  41083: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gray Banner.a3b81769845f5ff338fc.glb"
  },
  41087: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gray Bed.5c4f0bbdbb174f46fbef.glb"
  },
  41091: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gray Strongbed.e8eaf0af5a840e59fff1.glb"
  },
  41093: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Green Banner.90b3894d2834265ce9b2.glb"
  },
  41100: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Green Bed.d6ff26f123e6826d9985.glb"
  },
  41107: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Green Directional Arrow.9bab881fb50f75f86b3f.glb"
  },
  41110: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Green Strongbed.f4b895ef6c5807914f4c.glb"
  },
  41114: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Grey Directional Arrow.8242f96058670e322908.glb"
  },
  41122: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Enchanting Table.3687c10d08e339113719.glb"
  },
  41130: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Ladder.8ce80384a824f6137ab2.glb"
  },
  41137: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Trapdoor.133339769c365a3aac31.glb"
  },
  41141: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Iron Trophy.0b43b0c33f93503aed8b.glb"
  },
  41146: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Jungle Door.f9f730419e0ef03e61f1.glb"
  },
  41149: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Jungle Item Pedestal.9e21adc04895780375b3.glb"
  },
  41154: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Jungle Ladder.f0e270ed8983b1d35713.glb"
  },
  41163: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Jungle Trapdoor.395a3b2d177a87db6746.glb"
  },
  41172: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Large Icicle.170ec1b52ee13dacb77f.glb"
  },
  41178: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Large Twin Icicle.6c08460fe301dd64fefd.glb"
  },
  41180: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Leaf Bed.7aaa214dfd2bc1183b5e.glb"
  },
  41184: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Blue Banner.afe7633adc51ba562c85.glb"
  },
  41190: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Blue Bed.6fb411e8528b423d6611.glb"
  },
  41195: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Blue Directional Arrow.aeae69a3682fafa6403b.glb"
  },
  41197: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Blue Strongbed.e417c2e163f6f87882f2.glb"
  },
  41204: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Gray Banner.472826728c0ea68ccd0e.glb"
  },
  41206: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Gray Bed.c36f53f85fa5543f5f42.glb"
  },
  41211: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Gray Strongbed.8b84deea32747ec1bdf4.glb"
  },
  41220: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Light Grey Directional Arrow.c6ca300b2832ea56ca5d.glb"
  },
  41225: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lime Banner.fef68f8aedcd6206b682.glb"
  },
  41230: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lime Bed.792d5c1fbfea4012b996.glb"
  },
  41238: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lime Directional Arrow.b775d1be5bf4a55a9132.glb"
  },
  41245: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lime Strongbed.385c00d698c7c35d489a.glb"
  },
  41249: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magenta Banner.6998f2e5400e044cb27f.glb"
  },
  41256: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magenta Bed.70b261dd12b8a0733f73.glb"
  },
  41265: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magenta Directional Arrow.e82fbca46b89ce4f66fe.glb"
  },
  41273: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magenta Strongbed.2633f791a179ed0b18a9.glb"
  },
  41278: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mango Door.f3062f346f353ba0ef10.glb"
  },
  41280: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mango Item Pedestal.b893bab2a9ebd1927955.glb"
  },
  41286: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mango Ladder.ef553e9e2a61fb119729.glb"
  },
  41295: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mango Trapdoor.da8b471e4edeb488b53c.glb"
  },
  41302: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Maple Door.93d1036df42b8822140c.glb"
  },
  41305: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Maple Ladder.fa63d0c1b92cec4e6088.glb"
  },
  41307: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Maple Trapdoor.ebc05cc264d1ece28b22.glb"
  },
  41311: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Medium Icicle.2f78a303591659f85308.glb"
  },
  41313: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Moonstone Trophy.039d181285ad13472e56.glb"
  },
  41320: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Nova Trophy.ee442b96a86b4412e83c.glb"
  },
  41326: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Orange Banner.ef3c97359aa22d345a39.glb"
  },
  41333: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Orange Bed.ddb5003e3b51000a875a.glb"
  },
  41342: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Orange Directional Arrow.8fc69b3ad74b874d8717.glb"
  },
  41346: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Orange Strongbed.d18b11f42561ffcd7ad9.glb"
  },
  41353: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Palm Door.a1098848fbd449380e5e.glb"
  },
  41355: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Palm Item Pedestal.4697508246a8308957c1.glb"
  },
  41357: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Palm Ladder.0657b4a73700795a10ce.glb"
  },
  41362: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Palm Trapdoor.6831798533946e2535fc.glb"
  },
  41368: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pear Door.191218ca881feafb89d3.glb"
  },
  41372: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pear Item Pedestal.d9247ea4c25827f0cea5.glb"
  },
  41379: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pear Ladder.dfcf2a04eb8dd2ec99f5.glb"
  },
  41387: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pear Trapdoor.ec72b5fcb4c2aab20ae7.glb"
  },
  41393: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pine Door.6f1a6fd9e9968b012c75.glb"
  },
  41399: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pine Item Pedestal.6fbcfaf534cdeae3688a.glb"
  },
  41407: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pine Ladder.f0a60090079487f523bd.glb"
  },
  41411: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pine Trapdoor.99dc922c6bf48f6ec8e8.glb"
  },
  41419: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pink Banner.5a2ec2efce3d4da4d265.glb"
  },
  41421: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pink Bed.bc1dea899cec3f9ef7e7.glb"
  },
  41428: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pink Directional Arrow.016130285863cca121fe.glb"
  },
  41435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pink Strongbed.84e997326b4cb35d1239.glb"
  },
  41442: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Plum Door.fad96d335bfbd400b369.glb"
  },
  41446: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Plum Item Pedestal.c293a0f795323e47f5fb.glb"
  },
  41451: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Plum Ladder.9fa92307e164136268dc.glb"
  },
  41455: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Plum Trapdoor.b3b6436d875e4dd2302d.glb"
  },
  41462: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Potion Table.b9b00358d3c92be620f7.glb"
  },
  41467: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Purple Banner.805e85f24d3948fd1991.glb"
  },
  41472: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Purple Bed.a6c7179526745d16e4af.glb"
  },
  41478: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Purple Directional Arrow.e117fb18ecae2de3597d.glb"
  },
  41481: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Purple Strongbed.2792d8983d2fd7384411.glb"
  },
  41483: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rainbow Banner.2c1ff6cfcd7cfd6a2bb8.glb"
  },
  41489: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Red Banner.b951e43bac7aceef8de2.glb"
  },
  41494: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Red Bed.f24823935c79013e547f.glb"
  },
  41503: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Red Directional Arrow.0f44b3325b02e45fe3fc.glb"
  },
  41509: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Red Strongbed.cbed53542bda683ac7b5.glb"
  },
  41516: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Salvaging Table.b1d9daec58386ecb42cd.glb"
  },
  41520: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Showcase.0b58d3094505df7ad51a.glb"
  },
  41522: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Skull Banner.be808cb16744c7b19d81.glb"
  },
  41527: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Black Pod.f7f1caee394bbde5ba00.glb"
  },
  41530: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Blue Pod.0be6c7e63cf39dc17610.glb"
  },
  41537: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Brown Pod.db038036cedec67a309e.glb"
  },
  41543: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Cyan Pod.a925627b8d8c728f4bf9.glb"
  },
  41551: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Gray Pod.80702b6ed803b9554882.glb"
  },
  41559: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Green Pod.778b1b621f240176416b.glb"
  },
  41563: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Light Blue Pod.5c0ae28eaff9e3ad44e7.glb"
  },
  41565: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Light Gray Pod.3cc535468131e7c74b71.glb"
  },
  41568: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Lime Pod.325665695c5f9a563a71.glb"
  },
  41576: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Magenta Pod.4dc15c5426e84ada3682.glb"
  },
  41578: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Orange Pod.7f1a376b3fd22adcaa47.glb"
  },
  41583: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Pink Pod.736f862ad20ffec3b45a.glb"
  },
  41585: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Purple Pod.3d264ca7cd77e2bc85eb.glb"
  },
  41594: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Red Pod.71793138884ea7963344.glb"
  },
  41602: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Twin Icicle.90abef92d62a482d945c.glb"
  },
  41607: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small White Pod.9fe6bb3e8935c04e09ba.glb"
  },
  41609: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Small Yellow Pod.c0832601f97f70e4c4a1.glb"
  },
  41617: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spectral Door.961d366035c6451ed7c0.glb"
  },
  41622: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spectral Item Pedestal.d4346118ea2a5e2b1e8a.glb"
  },
  41625: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spectral Ladder.5096618d2f9b74e4671a.glb"
  },
  41630: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spectral Trapdoor.1ccb5de6df39ebce4456.glb"
  },
  41633: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Diamond.69c9ee36cf9e11b59e0b.glb"
  },
  41639: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Gold.123674bb67381cac70c6.glb"
  },
  41643: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Iron.187c23e1963747a7f83f.glb"
  },
  41649: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Kill.f4843456edbde4aa3351.glb"
  },
  41657: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Stone.40b924fee45d7d975ae3.glb"
  },
  41664: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Spikes_Wood.4afa092439b0a5a36c2c.glb"
  },
  41673: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stone Enchanting Table.7820ac172e4883d81d77.glb"
  },
  41681: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stone Trophy.0d09ca4b3382d078df96.glb"
  },
  41685: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Timed Spike Bomb Block.65ee988f5c874dad3ba9.glb"
  },
  41689: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Vines.6900e39cb0132a28d5c5.glb"
  },
  41693: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Warped Trapdoor.e102e0d01ea8095a508d.glb"
  },
  41697: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/White Banner.b9c75887ab4dc97c52c1.glb"
  },
  41700: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/White Bed.189eba790b17cd9e673c.glb"
  },
  41706: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/White Directional Arrow.f7f592929734a9c1aaad.glb"
  },
  41709: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/White Strongbed.64379b59673d8b8bebef.glb"
  },
  41713: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wood Enchanting Table.adb5adb79965168536db.glb"
  },
  41718: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wood Trophy.de9b607e6fd3921c91f4.glb"
  },
  41724: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Workbench.395da958bba12f4f5618.glb"
  },
  41729: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Yellow Banner.f040f94bd7e4052b9c51.glb"
  },
  41732: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Yellow Bed.3508f062adbd29ad9817.glb"
  },
  41737: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Yellow Directional Arrow.ea7794e6fe2d48fb1b01.glb"
  },
  41746: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Yellow Strongbed.418bdbc6b888ac5d5d99.glb"
  },
  41751: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Aspen Door Top.c74d85d9615d99fb551c.glb"
  },
  41755: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Black Banner Flag Hanging.cfbc798c1cbcb1a6289f.glb"
  },
  41758: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Black Banner Flag.617184cee26ec2fca017.glb"
  },
  41762: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Black Banner Hanging.c2abb55fdd1db4457eb8.glb"
  },
  41764: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Black Bed Head.a2b52b7714fa148924cd.glb"
  },
  41768: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Black Strongbed Head.ba5750836163bbd674c9.glb"
  },
  41777: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Blue Banner Flag Hanging.0f4421c98326e84824fa.glb"
  },
  41782: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Blue Banner Flag.11990eedd286db55880d.glb"
  },
  41789: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Blue Banner Hanging.5b12aec44ad18dcb3888.glb"
  },
  41795: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Blue Bed Head.563135602471615af0ad.glb"
  },
  41801: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Blue Strongbed Head.6436747247f90ad1ea09.glb"
  },
  41810: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Brown Banner Flag Hanging.56f9fb5ad4e57a1d138e.glb"
  },
  41817: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Brown Banner Flag.890530886208cca6a28f.glb"
  },
  41825: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Brown Banner Hanging.407d71e9319ba5f72b00.glb"
  },
  41830: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Brown Bed Head.d5276fc60f1f1575e431.glb"
  },
  41835: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Brown Strongbed Head.1ea396eae4848fc2e2c5.glb"
  },
  41841: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Camel Painting Bottom Left.6f52a64b36eb5166414c.glb"
  },
  41850: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Camel Painting Bottom Right.096b226ca218a069996f.glb"
  },
  41852: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Camel Painting Top Left.9d04162bef9c3ec3bc5a.glb"
  },
  41856: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Camel Painting Top Right.9bdc26b9370a7608955f.glb"
  },
  41859: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cedar Door Top.aebe23f6241235f16aa2.glb"
  },
  41861: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cherry Door Top.49bad79598070b9766a2.glb"
  },
  41864: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cow Painting Bottom Left.a626f2ef515025f2e2a4.glb"
  },
  41870: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cow Painting Bottom Right.7a2361d419822f12723d.glb"
  },
  41876: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cow Painting Top Left.c3d7138ccc02cec834c4.glb"
  },
  41878: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cow Painting Top Right.69402041c0ca60ac771c.glb"
  },
  41885: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cyan Banner Flag Hanging.4a639a0ba348f0a78232.glb"
  },
  41889: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cyan Banner Flag.19f84de6bfc7bd8a45c4.glb"
  },
  41894: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cyan Banner Hanging.54193b1b927f1665acc9.glb"
  },
  41896: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cyan Bed Head.28ad1dd325b0d2cecf92.glb"
  },
  41904: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Cyan Strongbed Head.a15b5458ea2f9e8e00a4.glb"
  },
  41908: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Deer Painting Bottom Left.8d93cc831d7a37716930.glb"
  },
  41917: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Deer Painting Bottom Right.60519165d7e74ae11097.glb"
  },
  41924: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Deer Painting Top Left.e5a05c00a32f81ea30b2.glb"
  },
  41932: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Deer Painting Top Right.2ef06cb82d37ed63a03f.glb"
  },
  41935: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Draugr Banner Flag Hanging.87935e06bcc4b48cd5aa.glb"
  },
  41944: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Draugr Banner Flag.224b1cf4df8f63554a45.glb"
  },
  41950: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Draugr Banner Hanging.ad5e1055164dc891b9c0.glb"
  },
  41956: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Gray Banner Flag Hanging.847faa22afc615ee0e97.glb"
  },
  41963: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Gray Banner Flag.b9c2a5aca0fc8ab973bb.glb"
  },
  41971: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Gray Banner Hanging.67c7b447ef27679fda8d.glb"
  },
  41978: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Gray Bed Head.7f5edc258147848884e8.glb"
  },
  41987: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Gray Strongbed Head.81a228cbd33289ccad24.glb"
  },
  41992: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Green Banner Flag Hanging.1da40920f91caa6789e5.glb"
  },
  42001: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Green Banner Flag.cfd668f53d76e6542ac2.glb"
  },
  42008: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Green Banner Hanging.0b48cd078ae358248499.glb"
  },
  42012: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Green Bed Head.c82673c37db9d22d951b.glb"
  },
  42016: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Green Strongbed Head.34f5c659ec5c31aea8ce.glb"
  },
  42019: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Horse Painting Bottom Left.8ba66535ce92d3e1722d.glb"
  },
  42027: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Horse Painting Bottom Right.46a3415c6aef503962bb.glb"
  },
  42034: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Horse Painting Top Left.657dc6225171243f245b.glb"
  },
  42040: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Horse Painting Top Right.9da74d016b759f190221.glb"
  },
  42049: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Jungle Door Top.b9fefc55b59299e1a330.glb"
  },
  42051: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Blue Banner Flag Hanging.152032e60558efde629b.glb"
  },
  42060: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Blue Banner Flag.e190ccb1b5e4c66b862f.glb"
  },
  42066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Blue Banner Hanging.964849196d922297e63e.glb"
  },
  42069: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Blue Bed Head.724e96603f186d9a8fc2.glb"
  },
  42077: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Blue Strongbed Head.7d8424c06a75a1097170.glb"
  },
  42083: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Gray Banner Flag Hanging.0517247c33b99436e963.glb"
  },
  42087: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Gray Banner Flag.718d5858ef07a4e01696.glb"
  },
  42096: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Gray Banner Hanging.0fcd7e0e3655bfa9a125.glb"
  },
  42101: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Gray Bed Head.0303bfa349abf0f2fb80.glb"
  },
  42105: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Light Gray Strongbed Head.30c6f6ad4acf56613f2f.glb"
  },
  42111: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Lime Banner Flag Hanging.4767ef5e44fe3d5d3ffb.glb"
  },
  42115: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Lime Banner Flag.97301b73e9aebe6053c1.glb"
  },
  42118: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Lime Banner Hanging.72523777b4759a9a2ccc.glb"
  },
  42127: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Lime Bed Head.dbddd24e7a4420a96f2f.glb"
  },
  42131: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Lime Strongbed Head.00146b7ed12bfa16b207.glb"
  },
  42137: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Magenta Banner Flag Hanging.a6d2d58283dc0ee74523.glb"
  },
  42146: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Magenta Banner Flag.bc1ba313a35af29be707.glb"
  },
  42149: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Magenta Banner Hanging.338bd181963fea3ff8fb.glb"
  },
  42157: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Magenta Bed Head.d31af958dc71d97814f3.glb"
  },
  42159: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Magenta Strongbed Head.cf4a8fda11b2b73dc6ed.glb"
  },
  42164: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Mango Door Top.6b6a3aa1df7069e0cf13.glb"
  },
  42166: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Maple Door Top.2768910296da701712b2.glb"
  },
  42175: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Orange Banner Flag Hanging.f20238c4ba1f769b83bc.glb"
  },
  42179: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Orange Banner Flag.3466e7ecc9ae8b89c079.glb"
  },
  42186: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Orange Banner Hanging.aa476158647512ccb7b7.glb"
  },
  42192: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Orange Bed Head.6de4be93f4eec519f273.glb"
  },
  42194: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Orange Strongbed Head.7ba9a51f968bba47383d.glb"
  },
  42197: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Palm Door Top.f8b7e967a96362a659a2.glb"
  },
  42206: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pear Door Top.3d76cb5d0c376bc4a5a3.glb"
  },
  42214: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pig Painting Bottom Left.dbc8926e0fda4af9d308.glb"
  },
  42221: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pig Painting Bottom Right.74548c1594c05212e7ab.glb"
  },
  42228: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pig Painting Top Left.43e32f7831d3e0805f92.glb"
  },
  42236: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pig Painting Top Right.870c25d54cdf1ccde6e9.glb"
  },
  42245: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pine Door Top.b6998b1cbb7d35537ac6.glb"
  },
  42253: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pink Banner Flag Hanging.a26b549f85c4974cef3a.glb"
  },
  42262: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pink Banner Flag.2baeb61da36bdafd9ca5.glb"
  },
  42264: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pink Banner Hanging.52732487e4388af53397.glb"
  },
  42270: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pink Bed Head.55427fffde8df81a8b45.glb"
  },
  42279: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Pink Strongbed Head.981850c2236f956bef47.glb"
  },
  42286: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Plum Door Top.e38c3f25b7d40a83880f.glb"
  },
  42289: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Purple Banner Flag Hanging.620b5130de2a5acf6acf.glb"
  },
  42295: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Purple Banner Flag.b01047e6f71e1e701bb4.glb"
  },
  42303: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Purple Banner Hanging.fc280620b91c0b9c94ba.glb"
  },
  42307: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Purple Bed Head.0f29bca0fcc5a571acb9.glb"
  },
  42315: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Purple Strongbed Head.d198c864d6d36e993f93.glb"
  },
  42323: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Radar Dish Down.7cb9726005b2526bdf4d.glb"
  },
  42328: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Radar Dish Up.d97eabdff7864c56bc2f.glb"
  },
  42333: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Rainbow Banner Flag Hanging.8812eb1ff5fa7d22ed7d.glb"
  },
  42340: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Rainbow Banner Flag.06826522d56676745046.glb"
  },
  42348: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Rainbow Banner Hanging.ba8286ad9bd08376ae37.glb"
  },
  42356: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Red Banner Flag Hanging.a22cc98245e658223042.glb"
  },
  42364: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Red Banner Flag.aa406f98ef9444264579.glb"
  },
  42368: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Red Banner Hanging.563cd16072672db73802.glb"
  },
  42375: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Red Bed Head.76958dad424fd8c7c924.glb"
  },
  42383: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Red Strongbed Head.64ffa69b9474dd76fea0.glb"
  },
  42389: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Sheep Painting Bottom Left.43af975cef0cbce06f8f.glb"
  },
  42395: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Sheep Painting Bottom Right.d307fb60c4b0f254e878.glb"
  },
  42402: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Sheep Painting Top Left.fda4cd2f8aa1abd8468c.glb"
  },
  42405: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Sheep Painting Top Right.8b3b4c019c808b4c14d5.glb"
  },
  42413: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Skull Banner Flag Hanging.a103df5c29d654ca6158.glb"
  },
  42417: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Skull Banner Flag.e963e24eca4042657917.glb"
  },
  42422: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Skull Banner Hanging.49a522ddf60661db6e4f.glb"
  },
  42426: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Black Pod Mid.03843aff015106df28cc.glb"
  },
  42428: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Black Pod Top.8cf8eb5d19d2db960536.glb"
  },
  42435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Blue Pod Mid.757a12f8330ea7b6a38e.glb"
  },
  42443: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Blue Pod Top.6760b73896cf699f43f9.glb"
  },
  42445: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Brown Pod Mid.3d48e12552338a48939d.glb"
  },
  42452: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Brown Pod Top.ae69c03aad428bfc1dc6.glb"
  },
  42458: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Cyan Pod Mid.b5a69a479f34d956c1ef.glb"
  },
  42467: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Cyan Pod Top.1075afb3ef4c7df4a2eb.glb"
  },
  42473: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Gray Pod Mid.c4d9b17cf3bba57e36d5.glb"
  },
  42478: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Gray Pod Top.b572a539cc65c0c6fef6.glb"
  },
  42482: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Green Pod Mid.dbc00603628f2be74cc3.glb"
  },
  42490: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Green Pod Top.a78986447b371d85cf8c.glb"
  },
  42499: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Light Blue Pod Mid.6c3aea9246e6ffc31db8.glb"
  },
  42506: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Light Blue Pod Top.a892261ae5618993ba64.glb"
  },
  42509: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Light Gray Pod Mid.536b25600295a14cd2cf.glb"
  },
  42511: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Light Gray Pod Top.26e4ef46d71789406482.glb"
  },
  42517: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Lime Pod Mid.9f6098fccc660db46bcf.glb"
  },
  42524: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Lime Pod Top.ab72e3b1ba9cc548de53.glb"
  },
  42527: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Magenta Pod Mid.0b20235584f72a3e4c36.glb"
  },
  42533: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Magenta Pod Top.9e0dcff4f7ac81b70c1a.glb"
  },
  42538: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Middle Pod Mag.3a1132b1fb5a71e90cfb.glb"
  },
  42541: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Orange Pod Mid.cdb76084e06a01174933.glb"
  },
  42550: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Orange Pod Top.32d1a6f20df4042d0a51.glb"
  },
  42555: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Pink Pod Mid.bc910a35fe0eee502325.glb"
  },
  42564: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Pink Pod Top.2433e4eed13aff1b371c.glb"
  },
  42566: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Purple Pod Mid.df0d724d4ee73129a50e.glb"
  },
  42573: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Purple Pod Top.e16abd5aba6cbc5950fe.glb"
  },
  42577: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Red Pod Mid.165aacb8d7326a9ad53a.glb"
  },
  42585: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Red Pod Top.4c99667582ab9e3c35e9.glb"
  },
  42594: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small White Pod Mid.84176311551e4916216f.glb"
  },
  42602: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small White Pod Top.2210a083892d21e744cb.glb"
  },
  42611: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Yellow Pod Mid.9714689721f4cbbfb8cc.glb"
  },
  42613: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Small Yellow Pod Top.dcdab8fb3a278bf3db82.glb"
  },
  42617: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Spectral Door Top.bdfaca331bcc91f62b7e.glb"
  },
  42625: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_White Banner Flag Hanging.25d8007c46b4fb74a389.glb"
  },
  42633: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_White Banner Flag.d98dc6d787a484cbba6c.glb"
  },
  42636: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_White Banner Hanging.7b1a2a66bccb8529bcd7.glb"
  },
  42644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_White Bed Head.f08faf8b0a1975e20aff.glb"
  },
  42649: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_White Strongbed Head.e6d70c8c1b67996f80a9.glb"
  },
  42655: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wildcat Painting Bottom Left.03df3eaca977d6a1e33c.glb"
  },
  42659: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wildcat Painting Bottom Right.75639f21610efe2eca46.glb"
  },
  42663: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wildcat Painting Top Left.bc9b03cda4006c17302f.glb"
  },
  42666: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wildcat Painting Top Right.621b968b75d39bfa4cf6.glb"
  },
  42673: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wolf Painting Bottom Left.5a1a9a5adc4c42676f17.glb"
  },
  42678: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wolf Painting Bottom Right.764338590135d60ba4a5.glb"
  },
  42684: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wolf Painting Top Left.6bfc627b449b7dde4daf.glb"
  },
  42690: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Wolf Painting Top Right.694dca804ab3cf5b64d8.glb"
  },
  42694: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Yellow Banner Flag Hanging.e4908078e51d3fa60832.glb"
  },
  42696: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Yellow Banner Flag.65d24d652d7e2574270f.glb"
  },
  42700: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Yellow Banner Hanging.f26b387b23ccf8533050.glb"
  },
  42706: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Yellow Bed Head.4552feeb5d0871e044d9.glb"
  },
  42709: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/_Yellow Strongbed Head.3949850260f428146b7f.glb"
  },
  42711: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_body.25e8dd3d58c1992c9e03.glb"
  },
  42714: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_drill_back.22bdc56b5f4dd481c732.glb"
  },
  42716: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_drill_front.ef9fc3de8896d485d0ac.glb"
  },
  42723: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_foot_back.210a50f0d9a2a33b886d.glb"
  },
  42727: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_foot_front.a29e1ea1f289a2525883.glb"
  },
  42729: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_lunite_body.2b6a4c376368a207921d.glb"
  },
  42737: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_lunite_drill_back.a1d0e139c3830b6116bc.glb"
  },
  42741: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_lunite_drill_front.2509610a64cc06486cf4.glb"
  },
  42750: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_lunite_foot_back.6549c238da6014445206.glb"
  },
  42755: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_miner_lunite_foot_front.b65f7f9c66b201034fc6.glb"
  },
  42758: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_none.1af577ef74c59ca3711e.glb"
  },
  42762: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx.50e8d550535b23eb7b0c.glb"
  },
  42770: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny.ad1fc6768d20e0dadf29.glb"
  },
  42779: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz.c08504e0b96d5b02da20.glb"
  },
  42781: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px.a8c164a84dac50ebf83b.glb"
  },
  42789: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py.b4b39bcdd890d611d563.glb"
  },
  42793: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py_pz.3bc5e82d654850681a7e.glb"
  },
  42800: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_pz.25d193228b9b407653a0.glb"
  },
  42804: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py.954d9aba0e5fc700e618.glb"
  },
  42812: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py_pz.ed28e69d1166442f5afe.glb"
  },
  42821: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_pz.8abac3ce07dd4df7def8.glb"
  },
  42823: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_px.c05f5b3a29a8b38a74dc.glb"
  },
  42828: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_px_py.c494e6c0f4d7f43ef65d.glb"
  },
  42833: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_px_py_pz.08a75b32f3d3f1367e61.glb"
  },
  42838: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_px_pz.dfa1eefb590a79130a0c.glb"
  },
  42844: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_py.df3b2fd89b174e33712d.glb"
  },
  42849: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_py_pz.aa9e43468f5c67284072.glb"
  },
  42856: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_ny_pz.eff9afebed04c9f45673.glb"
  },
  42859: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz.617efa509a950b46031c.glb"
  },
  42863: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_px.44e78fe002d03549ed70.glb"
  },
  42866: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_px_py.874da5d27960082260a5.glb"
  },
  42872: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_px_py_pz.201fe963e550b1bbfc5a.glb"
  },
  42880: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_px_pz.62208ad593e3adf43e58.glb"
  },
  42885: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_py.e45d119a76498366d672.glb"
  },
  42892: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_py_pz.fdab81d0d48420bf2a67.glb"
  },
  42901: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_nz_pz.0ef6fcae4f3fa615df37.glb"
  },
  42907: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_px.cb1e04b733c1f861cd6a.glb"
  },
  42913: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_px_py.cd9c868b41ec3c72e318.glb"
  },
  42922: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_px_py_pz.8c952fc3b2040e72489c.glb"
  },
  42927: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_px_pz.99f25ad2959b31482feb.glb"
  },
  42929: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_py.52611f014ea751a78ede.glb"
  },
  42932: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_py_pz.51e1f31d8a38119f5bf0.glb"
  },
  42935: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nx_pz.86b6a820036982207bb4.glb"
  },
  42941: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny.11819ea4df81ddb74d7a.glb"
  },
  42948: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz.a2aa549f70b4fda24a35.glb"
  },
  42955: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_px.cb149deb1b4525756883.glb"
  },
  42964: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_px_py.1870f5655bf3c4e08897.glb"
  },
  42969: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_px_py_pz.24d54d010d5b2b1b2f6f.glb"
  },
  42976: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_px_pz.c16d7378b0d0cd37fc4f.glb"
  },
  42982: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_py.feb88cf2ed317948ef3c.glb"
  },
  42988: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_py_pz.be305a5a1769ed54121f.glb"
  },
  42993: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_nz_pz.a81310a530a7254d0d25.glb"
  },
  42996: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_px.c1e79318e74a4bf37eab.glb"
  },
  42998: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_px_py.bdeef9e0a9a36c7c216e.glb"
  },
  43005: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_px_py_pz.a5669fa7ccdf25487694.glb"
  },
  43013: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_px_pz.3bf1496e5db7d7be0b60.glb"
  },
  43015: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_py.689f0e07c9cbb01285db.glb"
  },
  43020: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_py_pz.300e54c3aadf69295c54.glb"
  },
  43029: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_ny_pz.da410a7234f71cb70bb5.glb"
  },
  43037: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz.fa50055e81630bf747c9.glb"
  },
  43040: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_px.720cd952ce2e1af29226.glb"
  },
  43047: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_px_py.1746723455df46daa829.glb"
  },
  43049: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_px_py_pz.d37fbfadb9466de4393d.glb"
  },
  43055: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_px_pz.09731490eabc55907e09.glb"
  },
  43059: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_py.cd0b240636e714c8c4fb.glb"
  },
  43068: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_py_pz.5b902651c90d6ed49340.glb"
  },
  43073: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_nz_pz.193e640bb482e126a6c7.glb"
  },
  43078: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_px.19dee2c6025176ef7fc5.glb"
  },
  43082: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_px_py.68a77eff7799ba4b4842.glb"
  },
  43084: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_px_py_pz.3b1842dbce9a3e915015.glb"
  },
  43093: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_px_pz.c9bfca918420ed622650.glb"
  },
  43097: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_py.4e6306c19edf8a0eb648.glb"
  },
  43106: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_py_pz.03d093879d5689ca5cd6.glb"
  },
  43114: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_coolant_pipe_pz.0208c229844bc8c71bd1.glb"
  },
  43119: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_none.66acffc7f5d58af52183.glb"
  },
  43126: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx.2141d711ad82ede24cb1.glb"
  },
  43131: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny.d8673ebc2a58da04a0f6.glb"
  },
  43135: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz.07e2c6827b9fe6777b52.glb"
  },
  43142: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px.52b8789a08f0fa1819b4.glb"
  },
  43151: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py.33a7e6e0ad06872dc6dd.glb"
  },
  43157: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py_pz.48d3e863ca0527bf6a35.glb"
  },
  43163: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_pz.f2269dc58eb0965b92a5.glb"
  },
  43170: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py.e74b21326fdce69935db.glb"
  },
  43172: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py_pz.01bf008683b888a363bf.glb"
  },
  43180: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_pz.da1abb0700f299b2c7f3.glb"
  },
  43182: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_px.023e0b16a8b4a81a1e1e.glb"
  },
  43188: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_px_py.14be63fed9a2a83e2b83.glb"
  },
  43194: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_px_py_pz.fe5326b03ed4ddd2ea80.glb"
  },
  43197: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_px_pz.b63b3b4c5b0faa1af889.glb"
  },
  43204: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_py.a9320721784065ac429e.glb"
  },
  43213: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_py_pz.7b102449b962a9de0778.glb"
  },
  43220: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_ny_pz.dacd39cf27fd66fb8d1a.glb"
  },
  43225: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz.ef1c4516e1ffbcf811a2.glb"
  },
  43231: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_px.ab3b6063176991833e75.glb"
  },
  43233: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_px_py.0edbde347f3012476955.glb"
  },
  43236: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_px_py_pz.495a995d9f932d8fab0b.glb"
  },
  43241: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_px_pz.e3e1f48a1d1e5d9ee4a1.glb"
  },
  43247: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_py.dbfc7fb32c140963c08b.glb"
  },
  43255: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_py_pz.81ccfb336084e3fa577b.glb"
  },
  43261: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_nz_pz.cc87f2c598308d562978.glb"
  },
  43267: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_px.9e41b73ef011ffee66ea.glb"
  },
  43269: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_px_py.3d608b17a37b4613167f.glb"
  },
  43276: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_px_py_pz.f1fe2f58bf6e862d9173.glb"
  },
  43282: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_px_pz.94b3d6e4117770f96697.glb"
  },
  43291: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_py.dccb722acc03431af9bd.glb"
  },
  43296: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_py_pz.e4bb2d40a0c1ba9da732.glb"
  },
  43299: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nx_pz.0588de1d3218ea60e964.glb"
  },
  43306: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny.e0d0131e2387d5945f98.glb"
  },
  43315: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz.9006463b1f64dac83a9a.glb"
  },
  43323: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_px.1ede4fe27827979e2e03.glb"
  },
  43326: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_px_py.8bb126fe8da5934dd368.glb"
  },
  43329: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_px_py_pz.404995ea22a8ced61032.glb"
  },
  43338: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_px_pz.67fcc6113bb375cb50a3.glb"
  },
  43340: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_py.00fb5577be690f9e43b3.glb"
  },
  43345: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_py_pz.395661b61d9cbca89e55.glb"
  },
  43347: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_nz_pz.3be10b4d312d728780d2.glb"
  },
  43352: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_px.32492a7c7270b7ce2011.glb"
  },
  43359: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_px_py.df836d7685d4b950d9c6.glb"
  },
  43368: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_px_py_pz.e0ce4eb4b6972e195c51.glb"
  },
  43376: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_px_pz.f60ea06e41627ba57c1b.glb"
  },
  43385: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_py.464a7b3715d9b1c9a72e.glb"
  },
  43391: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_py_pz.973cdc793fb92aa54e54.glb"
  },
  43399: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_ny_pz.fef3705aaecf6f9be119.glb"
  },
  43402: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz.1b240e8ee91a0d50bcee.glb"
  },
  43411: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_px.d30cc078bb9f2a29d268.glb"
  },
  43419: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_px_py.c1123eb5c2f63b3e3412.glb"
  },
  43422: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_px_py_pz.f5da65a138361b2a8709.glb"
  },
  43430: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_px_pz.e1312edf73c98a8ccda9.glb"
  },
  43434: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_py.466cee7ce6fb609e0067.glb"
  },
  43437: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_py_pz.d09739fa3d081b752248.glb"
  },
  43441: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_nz_pz.f87d5ded07da2697aa9c.glb"
  },
  43447: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_px.b7885e6375f5697dd42a.glb"
  },
  43454: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_px_py.cc73936034ae5b4f4cf1.glb"
  },
  43457: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_px_py_pz.a6389b0c323cfae22abc.glb"
  },
  43464: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_px_pz.68ed2bdfd158dc08fd14.glb"
  },
  43472: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_py.7bec0e40bb0ddc06d354.glb"
  },
  43476: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_py_pz.df64db5753465cf582fe.glb"
  },
  43484: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_fluid_pipe_pz.3e445f247d6209e26dfc.glb"
  },
  43491: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_none.959fb60326c0161899f5.glb"
  },
  43498: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx.4a2afed9b2bfdf9e84d5.glb"
  },
  43500: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny.7f8a49da3e5df85d2e05.glb"
  },
  43502: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz.7183a2ad910ac1b8265c.glb"
  },
  43506: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_px.bbdca7e7e719fac8f40a.glb"
  },
  43515: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py.33e9d28887905dae25a0.glb"
  },
  43520: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py_pz.3e4b5e2d710523af450d.glb"
  },
  43528: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_pz.86210e41b8794c4c52b6.glb"
  },
  43536: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_py.725970eaab3eb4d77a3a.glb"
  },
  43539: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_py_pz.df04defee063aabe1b73.glb"
  },
  43547: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_nz_pz.c6bc0fc76688d0a555ae.glb"
  },
  43551: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_px.4d09672bb6825b5bbbfc.glb"
  },
  43557: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_px_py.7944c7a0db75e620d730.glb"
  },
  43562: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_px_py_pz.f20f4999f65c57425866.glb"
  },
  43564: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_px_pz.faf8f8529d0ce91fdf4c.glb"
  },
  43569: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_py.2fedfca3f35bfd9e1bb9.glb"
  },
  43572: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_py_pz.dba20102b9f56f990c88.glb"
  },
  43580: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_ny_pz.5d1790a75590383e773f.glb"
  },
  43586: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz.49274c43aeed26fd4ef4.glb"
  },
  43593: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_px.0f605f55ca48a5c38566.glb"
  },
  43601: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_px_py.6df1fee6834ff3ae1af8.glb"
  },
  43607: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_px_py_pz.2f50a237bd408d1e4108.glb"
  },
  43611: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_px_pz.35311a6efb185379d57c.glb"
  },
  43618: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_py.0dbcb74a8e6a8fb91705.glb"
  },
  43623: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_py_pz.db8056ea6e1319f8fa9b.glb"
  },
  43631: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_nz_pz.3a6446eef5f2a19a7c02.glb"
  },
  43638: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_px.f714bdceb7ff8bc2d7c6.glb"
  },
  43641: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_px_py.eff04d4a8f8d04179080.glb"
  },
  43644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_px_py_pz.dc9261285252e2d87c11.glb"
  },
  43651: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_px_pz.fbe75a80c3962b4c230f.glb"
  },
  43655: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_py.228fef41c76416f85a40.glb"
  },
  43664: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_py_pz.81fb33caf62cd77ece9e.glb"
  },
  43666: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nx_pz.fb6c0915f37d826ecb71.glb"
  },
  43675: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny.72c5fefbc407e3c94d7d.glb"
  },
  43678: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz.8453217dfc81d9fdb4cc.glb"
  },
  43680: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_px.c2ecdfbc9a2258b2c86d.glb"
  },
  43688: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_px_py.b92643b6f97070d606a4.glb"
  },
  43695: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_px_py_pz.8a680ed2ee9d22912920.glb"
  },
  43702: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_px_pz.5caf67dd0ba555991bca.glb"
  },
  43711: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_py.f0b5c8c68b7c2818a273.glb"
  },
  43714: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_py_pz.30bf4c1260a9a927edc7.glb"
  },
  43716: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_nz_pz.e8449324b1596b364cbe.glb"
  },
  43723: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_px.f0fff38f58a9ed5eb8ac.glb"
  },
  43732: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_px_py.eecc9a2ac147fc45443a.glb"
  },
  43734: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_px_py_pz.3258fa80a7509e535947.glb"
  },
  43738: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_px_pz.ea5abb502c75a940d968.glb"
  },
  43744: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_py.4ac410ed28621878d2b1.glb"
  },
  43748: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_py_pz.52cef6879cd15e96ca1b.glb"
  },
  43757: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_ny_pz.32fd00ca42bc17e2c68e.glb"
  },
  43765: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz.ca2c954a587efe162c35.glb"
  },
  43769: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_px.3bcea64e47319b7b880f.glb"
  },
  43777: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_px_py.f3e6e6ba5278c97914bf.glb"
  },
  43780: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_px_py_pz.558697ec67340fc619af.glb"
  },
  43782: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_px_pz.1671d3e52c6ef989150c.glb"
  },
  43786: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_py.eb93ca9526bf9d09ba86.glb"
  },
  43791: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_py_pz.de8a55687ae9be5ba4d9.glb"
  },
  43794: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_nz_pz.f6103bfd1cdf00ee3161.glb"
  },
  43803: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_px.a3a44662d7f1190bf941.glb"
  },
  43811: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_px_py.405ca5ab6d9abaf15acf.glb"
  },
  43814: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_px_py_pz.6fc123c7df272fe11b5d.glb"
  },
  43820: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_px_pz.0a315850e3bbae5f4e65.glb"
  },
  43827: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_py.27580a9a7a6a5e467959.glb"
  },
  43831: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_py_pz.b7029c4acc73fe990edc.glb"
  },
  43834: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/baf2_water_pipe_pz.524026c434bf1312ee9a.glb"
  },
  43837: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beam_arm.b18aa154bc2c6abe6fc8.glb"
  },
  43846: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beam_arm_mirrored.51021c5f58fbb0547768.glb"
  },
  43854: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bebek_bebek_bebek.213c53f222e7fa6eabb2.glb"
  },
  43861: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bin.9fa9eefc2e94c7d9b671.glb"
  },
  43868: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bobino_musculino.5299a37ff20b22d4b554.glb"
  },
  43877: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bobzilla.b6343c4b9c8fd834bd27.glb"
  },
  43884: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/boiling_pot.8c86fd13aab6c90f8c6e.glb"
  },
  43888: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bone_antlers_model.2263c631b87b5497cf0b.glb"
  },
  43897: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/boss_target.7461ecf8acb8547cbe45.glb"
  },
  43906: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/brra_brra_pachim.877c62f4a0a46afdfac9.glb"
  },
  43912: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_barrel_back.0e93895efce3885c17c7.glb"
  },
  43914: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_barrel_front.2b26819e9934a7658fa8.glb"
  },
  43917: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_bottom_back.315dd2aba0300464ac4e.glb"
  },
  43920: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_bottom_front.8bfe273a143f4b48c4fa.glb"
  },
  43927: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_top_back.251ffa29da6924db15be.glb"
  },
  43932: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cannon_top_front.ae1de6c9084d8b5d7c8d.glb"
  },
  43940: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/capitano_explovissimo.f892d427e38849f88e55.glb"
  },
  43948: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cappuccino_ninjino.d8d33979c4bc5bb10825.glb"
  },
  43957: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_black_model.4e2ca86172657d75d22d.glb"
  },
  43965: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_blue_model.d1390a0d4896851445b2.glb"
  },
  43973: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_brown_model.5f252fa89cc2a59aefa8.glb"
  },
  43978: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_cyan_model.2ea1e9bf8e018ead4a5a.glb"
  },
  43984: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_gray_model.9a587763cbf12b2f28e6.glb"
  },
  43989: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_green_model.f14e23acb31944480b22.glb"
  },
  43996: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_light_blue_model.3063d4f50964e9d4c3d7.glb"
  },
  44004: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_light_gray_model.b94a423a18f30bf0a5b6.glb"
  },
  44008: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_lime_model.7768b17ad76779125eee.glb"
  },
  44011: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_magenta_model.54a3fc9bd4d62c98a6db.glb"
  },
  44017: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_orange_model.1973f2055fec73ac57e6.glb"
  },
  44021: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_pink_model.3683ae623bddd233a5fe.glb"
  },
  44026: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_purple_model.f37a0e1526c2ca4e2a7d.glb"
  },
  44028: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_red_model.cfd6e343a3fab0b6e25a.glb"
  },
  44035: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_white_model.6a52cd82a15248f76f1a.glb"
  },
  44041: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carpet_yellow_model.c7b7dce1e3573d9fd34f.glb"
  },
  44048: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage0_lava_model.de57c195bd97f3fb2e16.glb"
  },
  44056: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage0_model.fc6dd2ad394c327c2dc1.glb"
  },
  44063: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage1_lava_model.6197d89c39f4c13f42b9.glb"
  },
  44066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage1_model.30ab224de60dd6576dda.glb"
  },
  44068: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage2_lava_model.81db0a3a753160a5993f.glb"
  },
  44075: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage2_model.cc0b8a17019285e9e191.glb"
  },
  44084: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage3_lava_model.906805ce52ff01217c09.glb"
  },
  44090: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage3_model.0b958f72eb984d0b0fee.glb"
  },
  44099: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage4_lava_model.94d5af3a2e78c1bf5475.glb"
  },
  44105: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage4_model.c52492e3df2205ce4273.glb"
  },
  44109: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage5_lava_model.a7136e0c606fe579056e.glb"
  },
  44111: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage5_model.d90ff33f15e468d91a75.glb"
  },
  44115: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chili_pepper_stage6_lava_model.36852b90667287605903.glb"
  },
  44121: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chimpanzano_bananano.2d445f2a0eb256e13a97.glb"
  },
  44129: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chopping_board.3c57d470d586e1dfeb2c.glb"
  },
  44131: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/crystal.dba112fa8a8394d8b1d5.glb"
  },
  44135: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/eclipse_dial.956489de2f80d089e04c.glb"
  },
  44141: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nx_ny.083a53c6f1c24a9757f0.glb"
  },
  44144: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nx_nz.801e1824437a8ace684b.glb"
  },
  44148: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nx_py.65f1e3264ff2283386bf.glb"
  },
  44156: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nx_pz.a448f59a6bb183c0e39c.glb"
  },
  44160: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_ny_nz.ecdf141d7d1653019c32.glb"
  },
  44164: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_ny_px.5f220c72639bc6ec1734.glb"
  },
  44167: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_ny_pz.4d504cfec957af83647e.glb"
  },
  44170: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nz_px.9b96308cd4ac5cd58ada.glb"
  },
  44179: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_nz_py.8465f28b8c684d7fb829.glb"
  },
  44184: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_px_py.fd91d6d5eb2fc91daa8b.glb"
  },
  44192: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_px_pz.e917172f979aa356014a.glb"
  },
  44195: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_elbow_py_pz.218c1542fa9adaeb5ba4.glb"
  },
  44201: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_nx.8bb0b2ad8f8644508347.glb"
  },
  44208: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_ny.b4afa7545f92319c62a3.glb"
  },
  44213: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_nz.c6ee96868c48ac35f608.glb"
  },
  44216: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_px.65915d43490b1937e3ba.glb"
  },
  44220: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_py.444a71977c0c1fbe4b5f.glb"
  },
  44222: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_end_pz.12c7d5085dec5f84915b.glb"
  },
  44226: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_isolated.97cfc28c33aacdb3e72a.glb"
  },
  44233: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_straight_x.e2a817762316f51651bc.glb"
  },
  44237: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_straight_y.bfa34910a1cde4b98d43.glb"
  },
  44244: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/extractor_pipe_straight_z.b47dc06b45b4886a5c6e.glb"
  },
  44253: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_nx.abdb1f2b92e67ec7a6f5.glb"
  },
  44261: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_ny.91a758aaffc187ebf84e.glb"
  },
  44263: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_nz.eaedcc3e56b6397a56bd.glb"
  },
  44269: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_px.f67d46338784b81dfa00.glb"
  },
  44276: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_py.6e32ecec254e8c9f62b9.glb"
  },
  44281: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/filter_pipe_input_pz.eaa83a9b426aefb06f04.glb"
  },
  44290: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/floor_quarters.a7383fb07de75c78acff.glb"
  },
  44299: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/football.4ed7b444dffd04850e1a.glb"
  },
  44307: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/frying_pan.88d74257d6db5f22a9dd.glb"
  },
  44310: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/glowing_mushroom.8a55fddc4cc5af4b0bb7.glb"
  },
  44312: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/glowing_mushroom_wall.77bbad965e1a6eb9b9eb.glb"
  },
  44317: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/gold_antlers_model.5033cbd20d5db323bd18.glb"
  },
  44319: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/hob_boiling.7aa8a7f33fcfaabb3c38.glb"
  },
  44323: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/hob_frying.c0d5b6b56a8e0d37c719.glb"
  },
  44327: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/il_wizardini_del_porko.16afd57bb54527352f48.glb"
  },
  44334: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/job_application.c8c3322a4d5b76f401c4.glb"
  },
  44339: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/john_beef.f285b5bbbe3270e84f4e.glb"
  },
  44343: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jump_pad.31f58abe195cbf81d544.glb"
  },
  44352: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jump_pad_strong.199b102ca146e54d6f26.glb"
  },
  44358: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jump_pad_super.01623abb40ae27b2f5c3.glb"
  },
  44364: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jump_pad_weak.9865db358d387cdb3808.glb"
  },
  44367: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/kitchen_worktop.93738fa632ca0cd3c887.glb"
  },
  44369: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/landing_pad.6cf815cc5adc6357aa7e.glb"
  },
  44378: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lantern.b4f5e080292b6bcec9de.glb"
  },
  44386: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lantern_wall.d700566f3dbc7c5edfb5.glb"
  },
  44388: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lily_pad_model.430d96e18041d362f6ec.glb"
  },
  44395: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lucchia_blocchi.cbeaea2490a784825f22.glb"
  },
  44398: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_nx.8363ba1ae35163cc614b.glb"
  },
  44405: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_ny.2d49f0baa47b9e673cd9.glb"
  },
  44414: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_nz.fa00b8fe22439a87a135.glb"
  },
  44423: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_px.0dbb5a9dfc66657f41b0.glb"
  },
  44426: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_py.ea13e5adbf80924e036f.glb"
  },
  44429: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/merger_pipe_output_pz.9dd053b2f431de48e28d.glb"
  },
  44435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/monsieur_bedwar.11e13eee2b04c9fa7ec3.glb"
  },
  44443: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mortar_goblin.b50e40421dd86c0d1024.glb"
  },
  44451: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing.b20df80c01a72cbebe5b.glb"
  },
  44460: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_bottom.b1a0883ecb1db88792a5.glb"
  },
  44464: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_bottom_left.8c07a91fec14b3745eb4.glb"
  },
  44467: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_bottom_right.1b09f2bb2d6f0822151e.glb"
  },
  44469: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_horizontal.6a5ef177dfb97d0f375f.glb"
  },
  44473: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_horizontal_left.be67a73bf033df090585.glb"
  },
  44476: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_horizontal_right.5838e354cd916a6852ca.glb"
  },
  44480: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_left.11a2206b2f5b12e2068d.glb"
  },
  44488: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_leg.838d46ae86129005cf46.glb"
  },
  44492: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_right.5f3dcaaf00c0d002a496.glb"
  },
  44497: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_single.e6f346b9cfaccbdb42be.glb"
  },
  44502: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_top.a79e1fd678b8fe09c969.glb"
  },
  44504: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_top_left.05c9e273ed39b69b3f7e.glb"
  },
  44507: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_top_right.211791c2f6cdaf03fa17.glb"
  },
  44514: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_vertical.35aea38fcfa1b3fb9bf4.glb"
  },
  44518: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_vertical_bottom.ada88480f62e41f1dab4.glb"
  },
  44522: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_standing_vertical_top.5dc2db1fee41788dbb17.glb"
  },
  44526: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall.ff9a27ba5731df12e44d.glb"
  },
  44528: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_bottom.2d29aaf8b2a08f409c26.glb"
  },
  44530: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_bottom_left.5260e03cd66029355bcc.glb"
  },
  44539: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_bottom_right.3c7faeeb89cf5fd8d3a0.glb"
  },
  44545: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_horizontal.6a2c8562a4ea173fbdcf.glb"
  },
  44553: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_horizontal_left.f5209b80e6eadef6c78c.glb"
  },
  44561: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_horizontal_right.a39a51b5f9417a5cd42b.glb"
  },
  44568: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_left.6e5638da4acaefd2b669.glb"
  },
  44573: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_right.b8cde43e7de962bc619b.glb"
  },
  44582: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_single.e18ee19c8ff0b65d473a.glb"
  },
  44589: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_top.a639d40d4c6d0036db3d.glb"
  },
  44597: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_top_left.b988fb63ca89b93a1707.glb"
  },
  44602: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_top_right.849243aaf2ad5ae08bb7.glb"
  },
  44604: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_vertical.b0cb186a9af1969e972a.glb"
  },
  44613: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_vertical_bottom.0e82577bb9aab80792b5.glb"
  },
  44618: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/noticeboard_wall_vertical_top.b98b5902779b57fbf71e.glb"
  },
  44625: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nx_ny.89d1b6e36a353106be6b.glb"
  },
  44633: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nx_nz.d2945b07b0dd4b771758.glb"
  },
  44639: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nx_py.d0109ae52ed03aa6715f.glb"
  },
  44644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nx_pz.bfc5f0b1ae6f9c18a40f.glb"
  },
  44653: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_ny_nz.8304c11ee0165631f127.glb"
  },
  44660: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_ny_px.bb670945340fa6f8f288.glb"
  },
  44667: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_ny_pz.1e85cf482585d84e131b.glb"
  },
  44670: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nz_px.7be0416b3e45d99c5ea7.glb"
  },
  44679: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_nz_py.6287e8f1c1697d935a4f.glb"
  },
  44688: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_px_py.ae824fd68bdb60d85305.glb"
  },
  44694: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_px_pz.8ff41b9727fa9c40a08c.glb"
  },
  44700: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_elbow_py_pz.2515de3d522a06906080.glb"
  },
  44703: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_nx.4bb1d3f0432ed2af5dfa.glb"
  },
  44712: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_ny.0499413fa7b695d8a259.glb"
  },
  44716: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_nz.746b3dcd8ba70dbf8517.glb"
  },
  44721: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_px.5cbbfe1ad98dd922a45f.glb"
  },
  44727: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_py.3115f8060017dfe0962a.glb"
  },
  44731: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_end_pz.6a4dabb47d14533ac501.glb"
  },
  44736: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_isolated.a615f633db853fd14881.glb"
  },
  44738: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_straight_x.134b8b3ba65a01487e33.glb"
  },
  44747: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_straight_y.0e2eb7b04f7deb08a5ee.glb"
  },
  44754: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pipe_straight_z.d100e5801643952af4d3.glb"
  },
  44758: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_full.566394d4c3c00b12ed5c.glb"
  },
  44760: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northeast_1.1b78d84678e0822df680.glb"
  },
  44762: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northeast_2.7cc566556ea957a48357.glb"
  },
  44765: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northeast_3.6c46832fa06619771f01.glb"
  },
  44774: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northeast_4.8fff6428090594ba7ca3.glb"
  },
  44778: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northeast_5.c4183e7f8f4860746f01.glb"
  },
  44783: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northwest_1.4aece19484ab7481c0f8.glb"
  },
  44787: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northwest_2.bea9981c3000eae9e630.glb"
  },
  44789: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northwest_3.56c2dc6b11ea84446c6c.glb"
  },
  44798: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northwest_4.d0f3dfd5e400daa181a6.glb"
  },
  44802: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_northwest_5.af721581e1c9e25fcc90.glb"
  },
  44809: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southeast_1.75bc6b110264eb07925f.glb"
  },
  44818: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southeast_2.fd011c1abced7d2b8f75.glb"
  },
  44826: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southeast_3.4aaae59bf5829933e5a5.glb"
  },
  44833: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southeast_4.cdf4a53d1cbba7d2edbd.glb"
  },
  44836: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southeast_5.547ea7fbca890f5ad93c.glb"
  },
  44842: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southwest_1.6f2e562cc9f76e48d080.glb"
  },
  44846: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southwest_2.9e8538c937feed7ece7c.glb"
  },
  44849: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southwest_3.4b18da35e90928993303.glb"
  },
  44855: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southwest_4.73af81acdef9ce350c5e.glb"
  },
  44858: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rocket_southwest_5.a7eb6222be481c158bb8.glb"
  },
  44866: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rune_sigil.9b59b6bef68661218e8a.glb"
  },
  44873: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/slicing_board.e1532c6c1c707054a75e.glb"
  },
  44878: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/slime_trail.6ff9def1822a8515033d.glb"
  },
  44881: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/splitter_pipe.30bb97ca16337e8e94c1.glb"
  },
  44888: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch.1e6b6b8a1126549115db.glb"
  },
  44896: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_black.aa4c96ef329864314118.glb"
  },
  44905: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_blue.a4e5a315b5d19facff2b.glb"
  },
  44908: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_brown.2492f429b119d90eaabf.glb"
  },
  44912: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_cyan.f70fa0acefa4438ca1ef.glb"
  },
  44914: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_gray.4bacfaaf232b69d26451.glb"
  },
  44922: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_green.0608d22726ca2777c95f.glb"
  },
  44928: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_light_blue.62e3685506970aa03c64.glb"
  },
  44931: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_light_gray.db83690e2a44822add32.glb"
  },
  44939: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_lime.b46ac9e8988e35c3288c.glb"
  },
  44947: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_magenta.de7355c3d8987a07f857.glb"
  },
  44955: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_orange.03ed5c026827b3cf2013.glb"
  },
  44959: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_pink.5db80ba10ee7475d2600.glb"
  },
  44965: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_purple.d0b7146906e60d1fd2d2.glb"
  },
  44973: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_red.67e16d0a0c6f53e7a265.glb"
  },
  44982: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall.72812b0fd7c11d446243.glb"
  },
  44989: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_black.a14c730eed9b81f210ea.glb"
  },
  44996: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_blue.11c6d1bc0a5df54f2f52.glb"
  },
  45e3: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_brown.4e4dd4868cf49436301b.glb"
  },
  45007: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_cyan.7b7c2d579c22524bf6aa.glb"
  },
  45009: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_gray.e8c4c559d0cd016080f3.glb"
  },
  45013: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_green.52ecdfc1f31282d86f11.glb"
  },
  45015: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_light_blue.5db342be65a55259aa06.glb"
  },
  45023: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_light_gray.a9f2c6d92a3724f542de.glb"
  },
  45027: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_lime.d40ae3542fd492421b17.glb"
  },
  45030: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_magenta.0c7af89f15198e706870.glb"
  },
  45036: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_orange.d8ef2a8afa619dcbb12b.glb"
  },
  45043: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_pink.0706debd37cea30009bf.glb"
  },
  45051: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_purple.42439e46c9b24df1caa1.glb"
  },
  45057: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_red.368d969024275fa15a18.glb"
  },
  45064: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_white.5abd9dc1f94eb8df8f30.glb"
  },
  45066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_wall_yellow.6efed0f8cb8562199685.glb"
  },
  45074: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_white.c2bdee6bcb7a255e54b3.glb"
  },
  45083: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_yellow.ae9e9c66a1e864aaf031.glb"
  },
  45088: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/twirlina_cappucina.dde85128f997c1c0c306.glb"
  },
  45095: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/ufo.617db0748f22cfa06954.glb"
  },
  45104: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/vending_machine_bottom.65bbb604112fa01806b4.glb"
  },
  45111: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/vending_machine_top.0cd950e833ce37f0078b.glb"
  },
  45117: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_black.7ec704f92ce13118854f.glb"
  },
  45122: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_blue.3fdf12cfb1bbe5df046f.glb"
  },
  45127: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_brown.f99e95495efa3b445f3b.glb"
  },
  45134: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_cyan.408c34abe40c4e583b69.glb"
  },
  45140: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_green.221d9d94948ba07f0146.glb"
  },
  45148: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_grey.9aec5ad30559daeeacb9.glb"
  },
  45154: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_light_blue.93df0e67d5b31edb67be.glb"
  },
  45157: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_light_grey.cac0d9e0d33fa0302c0b.glb"
  },
  45162: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_lime.250cf152a4c53c1ea267.glb"
  },
  45167: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_magenta.789452a86659bce5f701.glb"
  },
  45169: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_orange.34009e0bedfd3effd879.glb"
  },
  45171: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_pink.205d0a0f18ca0e567d9d.glb"
  },
  45177: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_purple.53d0ee9cce40b3f48b5b.glb"
  },
  45182: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_red.715fb6f8c739753fecfc.glb"
  },
  45185: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_white.f1c1812799645251bad6.glb"
  },
  45187: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wave_yellow.5ebbbecde58c9cf1c0d4.glb"
  },
  45195: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheel.90ee13b9d828e804dee1.glb"
  },
  45201: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nx_ny.b7f4b211f73095120e64.glb"
  },
  45205: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nx_nz.59840571f949f7bc8768.glb"
  },
  45208: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nx_py.d4d27e93e1b31e22f79a.glb"
  },
  45217: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nx_pz.de207cefcd8316ec8fcd.glb"
  },
  45222: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_ny_nz.acdc2b53b3ccff56ccb4.glb"
  },
  45231: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_ny_px.f24ba6eced5f99b313a7.glb"
  },
  45233: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_ny_pz.f8520178fb95b616edd5.glb"
  },
  45241: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nz_px.d97c2eb6671a072d0a59.glb"
  },
  45244: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_nz_py.6b6c81abcfca24a7ab43.glb"
  },
  45251: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_px_py.7492fefcc9a22a895dfc.glb"
  },
  45260: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_px_pz.9934c295bea0122d439d.glb"
  },
  45267: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_elbow_py_pz.4ccddb5f0bc632ff3084.glb"
  },
  45273: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_nx.38726e55cc09c7f851e3.glb"
  },
  45282: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_ny.9704daa44c9d4579056a.glb"
  },
  45284: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_nz.c2763322027fba73cc8e.glb"
  },
  45291: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_px.703db8100fe7cf8cfdad.glb"
  },
  45293: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_py.8f969bdae632686ac91c.glb"
  },
  45300: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_end_pz.fa6d20d5fb9c7397c595.glb"
  },
  45307: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_isolated.db20b8ec3a9d3a112352.glb"
  },
  45309: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_straight_x.cf855e04a4511b9d2d5a.glb"
  },
  45314: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_straight_y.830de69a478259bbbcb1.glb"
  },
  45322: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_straight_z.c10b101b6493639cadf0.glb"
  },
  47684: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/allium.f1d3e796bfcb373fe1b5.png"
  },
  48596: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/alloy_kiln_top.0d64a8c946004b7849bb.png"
  },
  48784: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/aspen_door_bottom.77c3608b449f7420a6d5.png"
  },
  48671: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/aspen_door_top.69844a9807e427316500.png"
  },
  47686: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/aspen_sapling.70b524dbb33402ad786e.png"
  },
  47691: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/attached_banana_stem.dea182236c8ed756a26f.png"
  },
  47694: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/attached_banana_stem_wrapper.a74f40cfdeb0cce7af8e.png"
  },
  47697: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/attached_melon_stem.25f734cf50ce7da42ec3.png"
  },
  47703: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/attached_melon_stem_wrapper.250a4219f803318c75cd.png"
  },
  48274: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/auto_bench_top.c8e545776e504211b183.png"
  },
  47706: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/autumn_fern.7add7b408d40f9b1198a.png"
  },
  47710: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/azure_bluet.3bb3fd07608ff837c974.png"
  },
  48674: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/banana_block_bottom.2a0a94226a1cd31d052c.png"
  },
  47714: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/banana_stem.a74f40cfdeb0cce7af8e.png"
  },
  47723: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beetroot_plant_stage0.701b11f9e3dece9dc677.png"
  },
  47726: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beetroot_plant_stage1.ee6a1e21484824a02235.png"
  },
  47728: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/beetroot_plant_stage2.fb948eadbea5684fe90f.png"
  },
  48771: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/belt_tunnel_exit_top.91bf68125018003eadfe.png"
  },
  48500: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/belt_tunnel_top.d5c39e4082a79dceacf4.png"
  },
  47732: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/berry_bush_stage0.09ac0a367c3abb28554e.png"
  },
  47737: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/berry_bush_stage1.ae24d9e0ca4573439543.png"
  },
  47743: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/berry_bush_stage2.34cec7246bb15ab6464a.png"
  },
  48852: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/black_glazed_terracotta.e352b206100b41877123.png"
  },
  48719: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/black_spawn_block_top.19ff0671d98f45ed25ed.png"
  },
  48387: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/black_stained_glass.e12bff980d21df8ed15b.png"
  },
  48870: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blue_glazed_terracotta.59ca448a380280079fde.png"
  },
  47750: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blue_orchid.e4d9386ac9e9c6724c49.png"
  },
  48728: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blue_spawn_block_top.d01a14894496cec4bd2c.png"
  },
  47754: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blueberry_bush_stage0.4fff8348c62acdeef329.png"
  },
  47758: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blueberry_bush_stage1.f51f91487636ea3c2344.png"
  },
  47767: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/blueberry_bush_stage2.3f1ba2b2af712d0a678a.png"
  },
  48844: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/board_full.51012967051441d655f0.png"
  },
  48443: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/brown_glazed_terracotta.195a379114520d8bebb8.png"
  },
  47773: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/brown_mushroom.6a75c1838db883657f2b.png"
  },
  48618: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/brown_spawn_block_top.7203ef0370d10b4ea83b.png"
  },
  48368: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/burner_drill_top.327a04f28af7e8d3a3f7.png"
  },
  48455: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cactus_side.f44506929a369ea16364.png"
  },
  48723: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/camel_painting_art.3467288986af902ea3ae.png"
  },
  48808: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/camel_painting_art_option2.97d96b4e06ccfd508bf4.png"
  },
  47776: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carrot_plant_stage0.3ca5c7654c53bb77ef59.png"
  },
  47784: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carrot_plant_stage1.4e9b5481c07508a4af12.png"
  },
  47787: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/carrot_plant_stage2.6448f6f9ca9c85c9d5a5.png"
  },
  47790: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/catnip.2d59e5f426014213097b.png"
  },
  47799: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cauliflower_plant_stage0.56fbf3896a2598fe226b.png"
  },
  47801: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cauliflower_plant_stage1.335c6c67d2617cd61e09.png"
  },
  47806: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cauliflower_plant_stage2.5238ee0e7a9daf763e05.png"
  },
  48901: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cedar_door_bottom.3f1ea002b95bba9366b5.png"
  },
  48713: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cedar_door_top.f5624bebbfbbe31ee2c1.png"
  },
  47809: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cedar_sapling.7eb472555ac15f2c7d8a.png"
  },
  48340: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/centrifuge_top.ea55fcc4f5cf007f9607.png"
  },
  48308: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/checkpoint_block.56ad5a4f7f2fe5c77244.png"
  },
  48606: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cherry_door_bottom.084d9df0a2e70e01f925.png"
  },
  48640: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cherry_door_top.ca128b8cdd351da5237f.png"
  },
  47813: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cherry_sapling.fffb87301cd4a74137fe.png"
  },
  48690: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/chest_top.835a84c23ea1ccc51e49.png"
  },
  48304: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cobblestone_mossy.01889a92f00bf5214dc3.png"
  },
  47819: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cobweb.9e0d381641ba6a1f1d53.png"
  },
  47821: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/coffee_plant_stage0.aad94d45ff9205a0b893.png"
  },
  47830: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/coffee_plant_stage1.6925958c8be7f0d73049.png"
  },
  47838: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/coffee_plant_stage2.832ff40be200d2ed5724.png"
  },
  48668: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/collider_top.c2015f5857885d440962.png"
  },
  48431: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/condenser_top.6036395d1b2deba98fd0.png"
  },
  48235: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/coolant_mixer_top.3ae29b3909493e845e10.png"
  },
  47842: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage0.7d1542728a061c60e27c.png"
  },
  47847: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage1.4385d800bda0cb812677.png"
  },
  47849: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage2.9ce23c9a315366c8fb0c.png"
  },
  47852: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage3.549b10d86fd6d935e04c.png"
  },
  47854: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage4.8089c4d097969c9f8226.png"
  },
  47863: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/corn_stage5.ae46e59459e23d47c53f.png"
  },
  47865: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cornflower.5dffa4efb19990928255.png"
  },
  47872: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cotton_plant_stage0.246ca0e73d88cebd3299.png"
  },
  47876: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cotton_plant_stage1.48f3651c69f090a10a44.png"
  },
  47880: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cotton_plant_stage2.90a27c9bfc2871b19465.png"
  },
  47888: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cotton_plant_stage3.ebfce7f595777e193710.png"
  },
  48663: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/crop_harvester_top.aac6e464fecc85fad376.png"
  },
  48408: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/crusher_top.22a572674aebf239c8a5.png"
  },
  48681: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/crystal_vat_top.4a74d712b2f31d7ffa92.png"
  },
  48398: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/custom_lobby_block_top.fa8eca29a43acecb3c1c.png"
  },
  48885: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cyan_glazed_terracotta.12e668d83d4ff6dd1a9d.png"
  },
  48828: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/cyan_spawn_block_top.8e8653ce617f2f08101f.png"
  },
  47890: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dandelion.1f8c4b42cb75491d1dbf.png"
  },
  47892: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dead_bush.1ba169f3ecbdd9546b12.png"
  },
  48810: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/deep_drill_top.9606e35119db0f884dfa.png"
  },
  48322: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_0.7fd6d0a2eade998ed079.png"
  },
  48314: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_1.6cb2d757c663046683cd.png"
  },
  48335: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_2.39c12ee9bab5846e2bab.png"
  },
  48330: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_3.3c8a2ddc4ea1bfd61055.png"
  },
  48269: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_4.2dd2cb853825c98ed904.png"
  },
  48263: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_5.a61b97c29628a6d258cf.png"
  },
  48288: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_6.631aded6f7705596c423.png"
  },
  48282: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_7.11442a780157758b2f9b.png"
  },
  48352: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_8.8de000c2ecadd8a7d32c.png"
  },
  48348: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/destroy_stage_9.b628ac3539f0c5788122.png"
  },
  48440: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/electric_drill_top.c3bbb4fbef10fbdb75b5.png"
  },
  47894: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fallen_pine_cone.666ae278dfece2f5f54f.png"
  },
  48380: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/football_block.2163f2e99f10969aa852.png"
  },
  48467: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/gray_glazed_terracotta.3acbabb47afe933c9e0d.png"
  },
  48614: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/gray_spawn_block_top.bb96b2f595d3c991808b.png"
  },
  48448: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/green_glazed_terracotta.e2e4bb19f629f2fab011.png"
  },
  48780: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/green_spawn_block_top.d785b09c3ee0537c8412.png"
  },
  48517: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/iron_chest_bottom.45762a27230a38c08e0c.png"
  },
  48686: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/iron_chest_top.9378df2839f1300ee2ab.png"
  },
  48472: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jungle_door_bottom.3de04a4b0c8a6cc3b500.png"
  },
  48579: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jungle_door_top.091112a6f1c5bc5daf1d.png"
  },
  47898: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jungle_sapling.80af0c3d116342bb10e7.png"
  },
  47905: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jungle_tall_grass_bottom.e1f103c983be99d8673f.png"
  },
  47911: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/jungle_tall_grass_top.73290a2f6ccf0a351750.png"
  },
  47919: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lettuce_plant_stage0.61bb8697576c8d2ec2d4.png"
  },
  47925: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lettuce_plant_stage1.a4fd6e8a34e339f87394.png"
  },
  47930: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lettuce_plant_stage2.0787bb4f588e5c42c47d.png"
  },
  48435: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/light_blue_glazed_terracotta.a94a553a7f669f30e083.png"
  },
  48256: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/light_blue_spawn_block_top.f419ebbe177b2f84b066.png"
  },
  48759: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/light_gray_glazed_terracotta.0e9ff5173786ae6b9091.png"
  },
  48373: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/light_gray_spawn_block_top.24eb46e4041bc46655fe.png"
  },
  48599: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/light_gray_stained_glass.4a5893d03148ce0389d6.png"
  },
  47932: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lily_of_the_valley.5252d9ae741dc8dc75a3.png"
  },
  48883: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lily_pad.6200083b756c3de49a3a.png"
  },
  48365: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lime_glazed_terracotta.a79304d4e29fdd0fece0.png"
  },
  48576: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/lime_spawn_block_top.7baf535efbf34967f621.png"
  },
  48733: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/magenta_glazed_terracotta.dff2219d98fde64710f9.png"
  },
  48795: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/magenta_spawn_block_top.a63f68c6a57e1d1e79f5.png"
  },
  48357: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mango_door_bottom.f10bf92c4d3b3c609f9e.png"
  },
  48627: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mango_door_top.2a3d2693e5e184523ee3.png"
  },
  47934: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mango_sapling.cc1331b58aa3cb30a4df.png"
  },
  48402: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/maple_door_bottom.94f27cb29279622bda1e.png"
  },
  48514: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/maple_door_top.d44aa506efdd63d3ab8e.png"
  },
  47940: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/maple_sapling.592455846ade7642267d.png"
  },
  47948: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/melon_stem.c728ad74f87544144f7a.png"
  },
  48895: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mob_farm_top.ec4a5a96b506c1434590.png"
  },
  48529: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/moonstone_chest_bottom.775190e522de9869378b.png"
  },
  48359: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/moonstone_chest_top.84c343c67b866ae67727.png"
  },
  47954: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/net.d475635049459ae3f79f.png"
  },
  48571: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/orange_glazed_terracotta.1bbdee0310f62d8d539f.png"
  },
  48496: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/orange_spawn_block_top.8d6dc5a642bc70d9325e.png"
  },
  47961: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/orange_tulip.e718114316934958b914.png"
  },
  47965: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/oxeye_daisy.ad1246a1daa7482659c3.png"
  },
  48508: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/palm_door_bottom.ce50b436e4f2209d4301.png"
  },
  48544: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/palm_door_top.cd7dbb764cf674fc1ce0.png"
  },
  47972: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/palm_sapling.5fc6b3910fbff5f7a4d7.png"
  },
  47979: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/parsnip_plant_stage0.2bc7dac8e8a3f14d908e.png"
  },
  47983: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/parsnip_plant_stage1.7e3b648c278c29b5f64a.png"
  },
  47990: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/parsnip_plant_stage2.d6b992467cb774ad7944.png"
  },
  48392: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pear_door_bottom.3a208aa390fd4a5d5cad.png"
  },
  48725: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pear_door_top.15589d201da9a5901cbe.png"
  },
  47999: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pear_sapling.2ce83819d5f323b508ee.png"
  },
  48643: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pine_door_bottom.b5915523060d64916e58.png"
  },
  48631: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pine_door_top.fab478f86f27aebae6f4.png"
  },
  48002: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pine_fern.9246ba38000c33971c01.png"
  },
  48009: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pine_grass.9339a2186b62aeb03004.png"
  },
  48015: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pine_sapling.d0610704a84849c99e66.png"
  },
  48652: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pink_glazed_terracotta.13d73734274447b1af96.png"
  },
  48569: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pink_spawn_block_top.97528a0ba6f65aa9ed1d.png"
  },
  48021: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/pink_tulip.f6463eb4309d4df8c87c.png"
  },
  48830: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/plant_cacti_by_arthur.85c69d2486a4eb1def2c.png"
  },
  48803: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/plum_door_bottom.1f24b93ce57192364438.png"
  },
  48481: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/plum_door_top.9cf00530965693a3081d.png"
  },
  48024: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/plum_sapling.2c777962832e4c8e1e82.png"
  },
  48032: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/poppy.186306dc2add85b7d191.png"
  },
  48039: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/potato_plant_stage0.768a80a450537d9cd8b3.png"
  },
  48043: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/potato_plant_stage1.34dd9255d4b7102cde08.png"
  },
  48045: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/potato_plant_stage2.9dc305c0bbd670b36a70.png"
  },
  48649: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/press_top.a6ce196f8d2e836ace20.png"
  },
  48656: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/purple_glazed_terracotta.68dca8e4917bf52f3355.png"
  },
  48382: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/purple_spawn_block_top.e2685fe6babda00c0501.png"
  },
  48739: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/radar_screen0.b432239839e3aa20b22d.png"
  },
  48744: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/radar_screen1.56f9b545957c73806acf.png"
  },
  48751: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/radar_screen2.ad7e4fc5a79d47a85dfa.png"
  },
  48757: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/radar_screen3.8016fc79f13a3a7c6e11.png"
  },
  48426: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/recycler_top.9c08c0ca903cda87e6fc.png"
  },
  48054: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_cabbage_stage0.440c69d91e5aa9845bdb.png"
  },
  48060: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_cabbage_stage1.69948ea7388647e9e3f2.png"
  },
  48062: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_cabbage_stage2.d9d440108228c556354e.png"
  },
  48487: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_glazed_terracotta.f0f5d12767d6e1159ffc.png"
  },
  48065: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_mushroom.3f8d0b597caf1a064b78.png"
  },
  48897: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_spawn_block_top.eae39e7b28a0287053a7.png"
  },
  48073: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/red_tulip.dc171a26716ddeb5724a.png"
  },
  48080: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage0.8358a53a4246616aef7e.png"
  },
  48556: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage1.86598ca8635d9a144c8a.png"
  },
  48083: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage2.fbc861305666b89f9e76.png"
  },
  48088: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage3.5f0706efb3bb442e8fd7.png"
  },
  48094: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage4.90b3b74d7bc433ae2f3e.png"
  },
  48096: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage5.56c14537857b4f0d6e93.png"
  },
  48099: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage6.312c797dda5c461ee124.png"
  },
  48104: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/rice_stage7.0c233dd7fa284c3b1bfd.png"
  },
  48848: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sea_lantern.a4caabfe4e3d6e111697.png"
  },
  48111: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/shadow_rose.9780b0d37b88f705d599.png"
  },
  48563: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/shatter_mill_top.34e724db72bc524637ef.png"
  },
  48296: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/shop_trader_spawn_top.b89bbfa04449132a4df4.png"
  },
  48253: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/shop_wizard_spawn_top.dc19f94e04a00a028663.png"
  },
  48538: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sky_tap_top.1d3b9fc97cb1e027b0c4.png"
  },
  48113: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/small_cactus.db4b875acd802ae1191b.png"
  },
  48243: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/smelter_top.d0d1b051b86d8b3ef603.png"
  },
  48792: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spectral_door_bottom.2ad57b67abede2a676e2.png"
  },
  48819: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spectral_door_top.43cd7de0f0f3bef2411b.png"
  },
  48119: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spectral_grass.16aa1c506434ba29d2ef.png"
  },
  48125: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/spectral_sapling.4825ceefdb9e23435268.png"
  },
  48130: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/strawberry_bush_stage0.b9755303de6eac3737f3.png"
  },
  48138: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/strawberry_bush_stage1.252923a9d73d8808c87e.png"
  },
  48144: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/strawberry_bush_stage2.74f90bc956e2adbefeb7.png"
  },
  48148: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sugar_cane_plant_stage0.6ea0910cd4abfbdaa590.png"
  },
  48152: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sugar_cane_plant_stage1.fecf1f3d4e275428e0d1.png"
  },
  48156: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sugar_cane_plant_stage2.9bb8e7bfdd3b3df9c5cf.png"
  },
  48165: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/sugar_cane_plant_stage2_top.38a798e03030b5ac2aa8.png"
  },
  48872: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/synthesizer_top.898a5c31f88f3a7e7bc0.png"
  },
  48172: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tall_grass_bottom.d1486ff65d7053080df2.png"
  },
  48177: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tall_grass_top.c47b5954f3b634c3e8d3.png"
  },
  48179: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tallgrass.4023a10eead730ba902e.png"
  },
  48183: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tomato_plant_stage0.56b40905ef3343162bac.png"
  },
  48186: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tomato_plant_stage1.3ee1ec480e5b9d2083b1.png"
  },
  48193: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tomato_plant_stage2.352f23da3f602abe2807.png"
  },
  48196: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tomato_plant_stage2_top.05af5c989c07c92d3cc6.png"
  },
  48838: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_block.c28ae5cbdeea1a97e39b.png"
  },
  48261: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_blue_block.d7bf749b621b84e7ea95.png"
  },
  48861: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_cyan_block.e341232f9191cabde39c.png"
  },
  48876: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_green_block.bc23f759b1415641d108.png"
  },
  48416: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_orange_block.b63d3ce3a41741c94f82.png"
  },
  48891: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_purple_block.1a5fe5cd6180ece6d537.png"
  },
  48552: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/torch_red_block.a4f018ac1e7f11d1fa33.png"
  },
  48705: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/tree_cutter_top.253dd570fdd82a4a0122.png"
  },
  48460: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/water.5626b741808b1b53c6de.png"
  },
  48199: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage0.c5f13b2e7aae2ffa92ed.png"
  },
  48587: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage1.cba6812d10d5b6491616.png"
  },
  48204: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage2.761c842532b7e7a0ffb2.png"
  },
  48209: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage3.d35dda335d1b18435a43.png"
  },
  48212: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage4.413187bd0e4e96477931.png"
  },
  48215: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage5.a69c67e9b66975873d4c.png"
  },
  48219: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage6.5a9d322e8e577c41ffe8.png"
  },
  48224: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wheat_stage7.7a308ccca1342ae8ca44.png"
  },
  48859: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/white_glazed_terracotta.cd22281258f6a9bf48a9.png"
  },
  48565: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/white_spawn_block_top.4bb6d35b9f6889ab4741.png"
  },
  48231: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/white_tulip.7855711c5ddaa5d51278.png"
  },
  48699: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wire_mill_top.bf860c14780007a0574a.png"
  },
  48423: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wireless_terminal_top.0a86378833f246193a79.png"
  },
  48523: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/wool_colored_silver.4cd08eb30c81694706cb.png"
  },
  48251: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/yellow_glazed_terracotta.780cb299393e4d477442.png"
  },
  48762: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/yellow_spawn_block_top.eea71ad43da92909a353.png"
  },
  48919: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  48925: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  48929: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  48931: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  48935: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  48944: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  48947: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  48953: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  48958: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  48967: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  48973: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  48977: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  48984: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  48907: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);