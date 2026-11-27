export const id = 50;
export const ids = [50];
export const modules = {
  52029: (WW, iW, OW) => {
    var mW = {
      "./cape_cow_cream.png": 51090,
      "./cape_cow_normal.png": 51094,
      "./cape_creator_level1.png": 51098,
      "./cape_creator_level2.png": 51107,
      "./cape_creator_level3.png": 51111,
      "./cape_none.png": 51115,
      "./cape_pig.png": 51122,
      "./cape_sheep.png": 51130,
      "./cape_super.png": 51134,
      "./cape_super_inverted.png": 51143,
      "./cape_youtuber.png": 51151
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 52029
  },
  52036: (WW, iW, OW) => {
    var mW = {
      "./Player_Atlas.png": 51020,
      "./astro_set_1_attachable.png": 51024,
      "./astro_set_2_attachable.png": 51032,
      "./astro_set_3_attachable.png": 51036,
      "./astro_set_4_attachable.png": 51040,
      "./beaver_lumberjack.png": 51046,
      "./bee_set_1_attachable.png": 51049,
      "./bee_set_2_attachable.png": 51057,
      "./bee_set_3_attachable_blue.png": 51061,
      "./bee_set_3_attachable_green.png": 51066,
      "./bee_set_3_attachable_red.png": 51073,
      "./bee_set_4_attachable.png": 51082,
      "./capeTextures/cape_cow_cream.png": 51090,
      "./capeTextures/cape_cow_normal.png": 51094,
      "./capeTextures/cape_creator_level1.png": 51098,
      "./capeTextures/cape_creator_level2.png": 51107,
      "./capeTextures/cape_creator_level3.png": 51111,
      "./capeTextures/cape_none.png": 51115,
      "./capeTextures/cape_pig.png": 51122,
      "./capeTextures/cape_sheep.png": 51130,
      "./capeTextures/cape_super.png": 51134,
      "./capeTextures/cape_super_inverted.png": 51143,
      "./capeTextures/cape_youtuber.png": 51151,
      "./chef_attachables.png": 51158,
      "./christmas_elf_attachable.png": 51160,
      "./christmas_snowman_attachable.png": 51164,
      "./dwarf_blue_hair.png": 51169,
      "./dwarf_braided_hair.png": 51175,
      "./dwarf_child.png": 51179,
      "./dwarf_forked_beard.png": 51184,
      "./dwarf_ginger_beard.png": 51193,
      "./dwarf_grey_beard.png": 51196,
      "./dwarf_hair_buns.png": 51203,
      "./dwarf_purple_beard.png": 51208,
      "./dwarf_red_hair.png": 51214,
      "./dwarf_short_beard.png": 51222,
      "./farmer_gill_attachable.png": 51231,
      "./farmer_head.png": 51239,
      "./fire_mage_attachable.png": 51243,
      "./forge_mother.png": 51246,
      "./furry_bear_attachables.png": 51248,
      "./furry_kitsune_attachables.png": 51251,
      "./furry_kitsune_tail_single.png": 51255,
      "./furry_kitsune_tails.png": 51263,
      "./furry_shark_attachables.png": 51268,
      "./furry_shark_tail.png": 51272,
      "./furry_wolfKnight_attachables.png": 51281,
      "./furry_wolfKnight_tail.png": 51285,
      "./general_attachable.png": 51290,
      "./goblin_goggles.png": 51293,
      "./goblin_mad_scientist.png": 51300,
      "./highSociety_set_1_attachable.png": 51306,
      "./highSociety_set_2_attachable.png": 51312,
      "./highSociety_set_3_attachable.png": 51319,
      "./highSociety_set_4_attachable.png": 51322,
      "./human_archer.png": 51331,
      "./human_desert_guard.png": 51334,
      "./human_sentry.png": 51339,
      "./ice_wings_attachable.png": 51341,
      "./jackal_priest.png": 51343,
      "./jetpack_attachable.png": 51350,
      "./medieval_set_1_attachable_blue.png": 51353,
      "./medieval_set_1_attachable_green.png": 51361,
      "./medieval_set_1_attachable_purple.png": 51370,
      "./medieval_set_1_attachable_red.png": 51374,
      "./medieval_set_1_attachable_yellow.png": 51383,
      "./medieval_set_2_attachable_blue.png": 51391,
      "./medieval_set_2_attachable_purple.png": 51400,
      "./medieval_set_2_attachable_red.png": 51407,
      "./medieval_set_3_attachable_green.png": 51409,
      "./medieval_set_3_attachable_pink.png": 51415,
      "./medieval_set_3_attachable_purple.png": 51423,
      "./medieval_set_3_attachable_red.png": 51429,
      "./medieval_set_4_attachable_blue.png": 51433,
      "./medieval_set_4_attachable_hair.png": 51435,
      "./medieval_set_4_attachable_purple.png": 51440,
      "./medieval_set_4_attachable_red.png": 51449,
      "./mining_helmet_attachable.png": 51455,
      "./minotaur.png": 51459,
      "./minotaur_elder.png": 51466,
      "./minotaur_warrior.png": 51475,
      "./monster_hunter_lorenzo_attachable.png": 51478,
      "./nova_jetpack_attachable.png": 51485,
      "./npc_pig_head.png": 51492,
      "./painter_spencer_attachable.png": 51501,
      "./pet_reindeer.png": 51509,
      "./pig_napoleon.png": 51512,
      "./pig_worker_attachable.png": 51514,
      "./piggy_banker_head.png": 51523,
      "./portal_mage_hat.png": 51525,
      "./rabbit_aristocrat_attachable.png": 51527,
      "./skis_attachable.png": 51530,
      "./smuglyn_attachable.png": 51538,
      "./spring_set_1_attachable.png": 51547,
      "./spring_set_2_attachable.png": 51549,
      "./spring_set_3_attachable.png": 51556,
      "./spring_set_4_attachable.png": 51559,
      "./tentacle_boy.png": 51561,
      "./tentacle_girl_attachable.png": 51566,
      "./tentacle_guy_attachable.png": 51575,
      "./tentacle_guy_fisherman_attachable.png": 51579,
      "./trader_cowl_black.png": 51582,
      "./trader_cowl_blue.png": 51587,
      "./ugly_sweater_attachable.png": 51596,
      "./wolf_in_suit_attachable.png": 51599,
      "./wolf_security.png": 51608,
      "./y2k_set_1_attachable.png": 51616,
      "./y2k_set_2_attachable.png": 51618,
      "./y2k_set_3_attachable.png": 51627,
      "./y2k_set_4_attachable.png": 51632
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 52036
  },
  49391: (WW, iW, OW) => {
    var mW = {
      "./67/67_Model.glb": 49395,
      "./67/67_Reconstructed.glb": 49400,
      "./Armour Collector/Armour Collector_Model.glb": 49402,
      "./Armour Collector/Armour Collector_Reconstructed.glb": 49411,
      "./Bear/Bear_Model.glb": 49420,
      "./Bobino Musculino/Bobino Musculino_Model.glb": 49425,
      "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 49432,
      "./Camel/Camel_Model.glb": 49439,
      "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 49448,
      "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 49452,
      "./Cave Golem/Cave Golem_Model.glb": 49457,
      "./Cow/Cow_Model.glb": 49460,
      "./Crone/Crone_Model.glb": 49463,
      "./Deer/Deer_Model.glb": 49469,
      "./Desert Fennec/Desert Fennec_Model.glb": 49474,
      "./Diamond Guardian/Diamond Guardian_Model.glb": 49483,
      "./Diamond Guardian/Diamond Guardian_Reconstructed.glb": 49492,
      "./Draugr Knight/Draugr Knight_Model.glb": 49498,
      "./Draugr Reaver/Draugr Reaver_Model.glb": 49503,
      "./Draugr Skeleton/Draugr Skeleton_Model.glb": 49511,
      "./Draugr Warper/Draugr Warper_Model.glb": 49514,
      "./Draugr Zombie/Draugr Zombie_Model.glb": 49523,
      "./Evil Tome/Evil Tome_Model.glb": 49528,
      "./Frost Wraith/Frost Wraith_Model.glb": 49536,
      "./Furnace Knight/Furnace Knight_Model.glb": 49538,
      "./Furnace Knight/Furnace Knight_Reconstructed.glb": 49544,
      "./Glass Bro/Glass Bro_Model.glb": 49553,
      "./Glass Bro/Glass Bro_Reconstructed.glb": 49562,
      "./Glass Gremlin/Glass Gremlin_Model.glb": 49566,
      "./Glass Gremlin/Glass Gremlin_Reconstructed.glb": 49569,
      "./Gold Guardian/Gold Guardian_Model.glb": 49571,
      "./Gold Guardian/Gold Guardian_Reconstructed.glb": 49576,
      "./Gorilla/Gorilla_Model.glb": 49584,
      "./Horse/Horse_Model.glb": 49589,
      "./Iron Goofy Golem/Iron Goofy Golem_Model.glb": 49595,
      "./Iron Guardian/Iron Guardian_Model.glb": 49604,
      "./Iron Guardian/Iron Guardian_Reconstructed.glb": 49611,
      "./Lil Knight/Lil Knight_Model.glb": 49619,
      "./Lil Knight/Lil Knight_Reconstructed.glb": 49626,
      "./Lord Vulcan/Lord Vulcan_Model.glb": 49632,
      "./Lord Vulcan/Lord Vulcan_Reconstructed.glb": 49637,
      "./Magma Toad/Magma Toad_Model.glb": 49642,
      "./Moonstone Guardian/Moonstone Guardian_Model.glb": 49645,
      "./Moonstone Guardian/Moonstone Guardian_Reconstructed.glb": 49652,
      "./Mummy/Mummy_Model.glb": 49659,
      "./Mummy/Mummy_Reconstructed.glb": 49667,
      "./Pig/Pig_Model.glb": 49669,
      "./Player/Player_Model.glb": 49674,
      "./Player/Player_Reconstructed.glb": 49679,
      "./Player/astro_set_1_attachable.glb": 49686,
      "./Player/astro_set_2_attachable.glb": 49694,
      "./Player/astro_set_3_attachable.glb": 49702,
      "./Player/astro_set_4_attachable.glb": 49711,
      "./Player/beaver_lumberjack.glb": 49716,
      "./Player/bee_set_1_attachable.glb": 49719,
      "./Player/bee_set_2_attachable.glb": 49723,
      "./Player/bee_set_3_attachable.glb": 49727,
      "./Player/bee_set_4_attachable.glb": 49729,
      "./Player/cape_cuboid_18_12.glb": 49738,
      "./Player/chef_attachables.glb": 49745,
      "./Player/christmas_elf_attachable.glb": 49753,
      "./Player/christmas_snowman_attachable.glb": 49759,
      "./Player/dwarf_blue_hair.glb": 49767,
      "./Player/dwarf_braided_hair.glb": 49774,
      "./Player/dwarf_child.glb": 49780,
      "./Player/dwarf_forked_beard.glb": 49785,
      "./Player/dwarf_ginger_beard.glb": 49789,
      "./Player/dwarf_grey_beard.glb": 49798,
      "./Player/dwarf_hair_buns.glb": 49803,
      "./Player/dwarf_purple_beard.glb": 49808,
      "./Player/dwarf_red_hair.glb": 49817,
      "./Player/dwarf_short_beard.glb": 49825,
      "./Player/farmer_gill_attachable.glb": 49829,
      "./Player/farmer_head.glb": 49836,
      "./Player/fire_mage_attachable.glb": 49838,
      "./Player/forge_mother.glb": 49841,
      "./Player/furry_bear_attachables.glb": 49847,
      "./Player/furry_kitsune_attachables.glb": 49852,
      "./Player/furry_kitsune_tail_single.glb": 49861,
      "./Player/furry_kitsune_tails.glb": 49868,
      "./Player/furry_shark_attachables.glb": 49874,
      "./Player/furry_shark_tail.glb": 49883,
      "./Player/furry_wolfKnight_attachables.glb": 49886,
      "./Player/furry_wolfKnight_tail.glb": 49889,
      "./Player/general_attachable.glb": 49897,
      "./Player/goblin_goggles.glb": 49902,
      "./Player/goblin_mad_scientist.glb": 49906,
      "./Player/highSociety_set_1_attachable.glb": 49909,
      "./Player/highSociety_set_2_attachable.glb": 49914,
      "./Player/highSociety_set_3_attachable.glb": 49916,
      "./Player/highSociety_set_4_attachable.glb": 49924,
      "./Player/human_archer.glb": 49933,
      "./Player/human_desert_guard.glb": 49941,
      "./Player/human_sentry.glb": 49949,
      "./Player/ice_wings_attachable.glb": 49954,
      "./Player/jackal_priest.glb": 49960,
      "./Player/jetpack_attachable.glb": 49968,
      "./Player/medieval_set_1_attachable.glb": 49972,
      "./Player/medieval_set_2_attachable.glb": 49980,
      "./Player/medieval_set_3_attachable.glb": 49985,
      "./Player/medieval_set_4_attachable.glb": 49993,
      "./Player/mining_helmet_attachable.glb": 50002,
      "./Player/minotaur.glb": 50006,
      "./Player/minotaur_elder.glb": 50015,
      "./Player/minotaur_warrior.glb": 50017,
      "./Player/monster_hunter_lorenzo_attachable.glb": 50023,
      "./Player/npc_pig_head.glb": 50031,
      "./Player/painter_spencer_attachable.glb": 50033,
      "./Player/pet_reindeer.glb": 50038,
      "./Player/pig_napoleon.glb": 50042,
      "./Player/pig_worker_attachable.glb": 50050,
      "./Player/piggy_banker_head.glb": 50052,
      "./Player/portal_mage_hat.glb": 50055,
      "./Player/rabbit_aristocrat_attachable.glb": 50064,
      "./Player/skis_attachable.glb": 50070,
      "./Player/smuglyn_attachable.glb": 50079,
      "./Player/spring_set_1_attachable.glb": 50082,
      "./Player/spring_set_2_attachable.glb": 50089,
      "./Player/spring_set_3_attachable.glb": 50095,
      "./Player/spring_set_4_attachable.glb": 50100,
      "./Player/tentacle_boy.glb": 50105,
      "./Player/tentacle_guy_attachable.glb": 50110,
      "./Player/tentacle_guy_fisherman_attachable.glb": 50117,
      "./Player/trader_cowl_black.glb": 50125,
      "./Player/trader_cowl_blue.glb": 50133,
      "./Player/ugly_sweater_attachable.glb": 50139,
      "./Player/wolf_in_suit_attachable.glb": 50148,
      "./Player/wolf_security.glb": 50152,
      "./Player/y2k_set_1_attachable.glb": 50159,
      "./Player/y2k_set_2_attachable.glb": 50166,
      "./Player/y2k_set_3_attachable.glb": 50171,
      "./Player/y2k_set_4_attachable.glb": 50180,
      "./Scorpion/Scorpion_Model.glb": 50182,
      "./Sheep/Sheep_Model.glb": 50187,
      "./Skeleton/Skeleton_Model.glb": 50191,
      "./Skeleton/Skeleton_Reconstructed.glb": 50199,
      "./Slime/Slime_Model.glb": 50205,
      "./Stag/Stag_Model.glb": 50209,
      "./Stalker/Stalker_Model.glb": 50216,
      "./Tiki Terror/Tiki Terror_Model.glb": 50223,
      "./Tiki Terror/Tiki Terror_Reconstructed.glb": 50226,
      "./Vulcanite/Vulcanite_Model.glb": 50230,
      "./Vulcanite/Vulcanite_Reconstructed.glb": 50232,
      "./Wildcat/Wildcat_Model.glb": 50238,
      "./Wolf/Wolf_Model.glb": 50242,
      "./Zombie/Zombie_Model.glb": 50249,
      "./Zombie/Zombie_Reconstructed.glb": 50253
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 49391
  },
  50255: (WW, iW, OW) => {
    var mW = {
      "./67/67_Atlas.png": 50261,
      "./67/variations/0_67_default.png": 50268,
      "./Armour Collector/Armour Collector_Atlas.png": 50276,
      "./Armour Collector/variations/0_armour collector_default.png": 50284,
      "./Bear/BearSaddle_Atlas.png": 50287,
      "./Bear/Bear_Atlas.png": 50289,
      "./Bear/variations/0_bear_default.png": 50298,
      "./Bobino Musculino/Bobino Musculino_Atlas.png": 50305,
      "./Bobino Musculino/variations/0_bobino musculino_default.png": 50310,
      "./Camel/CamelSaddle_Atlas.png": 50312,
      "./Camel/Camel_Armour.png": 50314,
      "./Camel/Camel_Atlas.png": 50323,
      "./Camel/variations/0_camel_default.png": 50328,
      "./Camel/variations/1_camel_brown.png": 50332,
      "./Capitano Explovissimo/Capitano Explovissimo_Atlas.png": 50340,
      "./Capitano Explovissimo/variations/0_capitano explovissimo_default.png": 50348,
      "./Cave Golem/Cave Golem_Atlas.png": 50356,
      "./Cave Golem/variations/0_cave golem_default.png": 50361,
      "./Cave Golem/variations/1_cave golem_iron.png": 50364,
      "./Cave Golem/variations/2_cave golem_corrupted.png": 50368,
      "./Cow/Cow_Atlas.png": 50370,
      "./Cow/variations/0_cow_default.png": 50376,
      "./Cow/variations/1_cow_cream.png": 50381,
      "./Crone/Crone_Atlas.png": 50385,
      "./Crone/variations/0_crone_default.png": 50391,
      "./Deer/DeerAntlers_Atlas.png": 50397,
      "./Deer/Deer_Atlas.png": 50401,
      "./Deer/variations/0_deer_default.png": 50403,
      "./Desert Fennec/Desert Fennec_Atlas.png": 50412,
      "./Desert Fennec/variations/0_desert fennec_default.png": 50416,
      "./Diamond Goofy Golem/Diamond Goofy Golem_Atlas.png": 50418,
      "./Diamond Goofy Golem/variations/0_diamond goofy golem_default.png": 50426,
      "./Diamond Goofy Golem/variations/1_diamond goofy golem_flaking.png": 50429,
      "./Diamond Goofy Golem/variations/2_diamond goofy golem_patchy.png": 50431,
      "./Diamond Goofy Golem/variations/3_diamond goofy golem_shedding.png": 50433,
      "./Diamond Goofy Golem/variations/4_diamond goofy golem_bare.png": 50440,
      "./Diamond Goofy Golem/variations/5_diamond goofy golem_stone.png": 50443,
      "./Diamond Guardian/Diamond Guardian_Atlas.png": 50452,
      "./Diamond Guardian/variations/0_diamond guardian_default.png": 50456,
      "./Draugr Huntress/Draugr Huntress_Atlas.png": 50458,
      "./Draugr Huntress/variations/0_draugr huntress_default.png": 50466,
      "./Draugr Huntress/variations/1_draugr huntress_chainmail.png": 50468,
      "./Draugr Knight/Draugr Knight_Atlas.png": 50477,
      "./Draugr Knight/variations/0_draugr knight_default.png": 50483,
      "./Draugr Reaver/Draugr Reaver_Atlas.png": 50491,
      "./Draugr Reaver/variations/0_draugr reaver_default.png": 50500,
      "./Draugr Skeleton/Draugr Skeleton_Atlas.png": 50506,
      "./Draugr Skeleton/variations/0_draugr skeleton_default.png": 50513,
      "./Draugr Warper/Draugr Warper_Atlas.png": 50515,
      "./Draugr Warper/variations/0_draugr warper_default.png": 50517,
      "./Draugr Zombie/Draugr Zombie_Atlas.png": 50524,
      "./Draugr Zombie/variations/0_draugr zombie_default.png": 50528,
      "./Draugr Zombie/variations/10_draugr zombie_corrupted2.png": 50536,
      "./Draugr Zombie/variations/1_draugr zombie_longHairChestplate.png": 50539,
      "./Draugr Zombie/variations/2_draugr zombie_longHairClothed.png": 50542,
      "./Draugr Zombie/variations/3_draugr zombie_shortHairClothed.png": 50546,
      "./Draugr Zombie/variations/4_draugr zombie_flower.png": 50550,
      "./Draugr Zombie/variations/5_draugr zombie_flower2.png": 50558,
      "./Draugr Zombie/variations/6_draugr zombie_mushroom.png": 50565,
      "./Draugr Zombie/variations/7_draugr zombie_vine.png": 50572,
      "./Draugr Zombie/variations/8_draugr zombie_vine2.png": 50581,
      "./Draugr Zombie/variations/9_draugr zombie_corrupted.png": 50589,
      "./Evil Tome/Evil Tome_Atlas.png": 50596,
      "./Evil Tome/variations/0_evil tome_default.png": 50601,
      "./Frost Golem/Frost Golem_Atlas.png": 50608,
      "./Frost Golem/variations/0_frost golem_default.png": 50615,
      "./Frost Skeleton/Frost Skeleton_Atlas.png": 50618,
      "./Frost Skeleton/variations/0_frost skeleton_default.png": 50626,
      "./Frost Wraith/Frost Wraith_Atlas.png": 50631,
      "./Frost Wraith/variations/0_frost wraith_default.png": 50635,
      "./Frost Wraith/variations/1_frost wraith_tattered.png": 50644,
      "./Frost Wraith/variations/2_frost wraith_frostKing.png": 50646,
      "./Frost Wraith/variations/3_frost wraith_accursed.png": 50649,
      "./Frost Zombie/Frost Zombie_Atlas.png": 50651,
      "./Frost Zombie/variations/0_frost zombie_default.png": 50656,
      "./Frost Zombie/variations/1_frost zombie_longHairChestplate.png": 50665,
      "./Frost Zombie/variations/2_frost zombie_shortHairClothed.png": 50668,
      "./Furnace Knight/Furnace Knight_Atlas.png": 50674,
      "./Furnace Knight/variations/0_furnace knight_default.png": 50683,
      "./Glass Bro/Glass Bro_Atlas.png": 50685,
      "./Glass Bro/variations/0_glass bro_default.png": 50691,
      "./Glass Gremlin/Glass Gremlin_Atlas.png": 50694,
      "./Glass Gremlin/variations/0_glass gremlin_default.png": 50700,
      "./Gold Goofy Golem/Gold Goofy Golem_Atlas.png": 50707,
      "./Gold Goofy Golem/variations/0_gold goofy golem_default.png": 50716,
      "./Gold Goofy Golem/variations/1_gold goofy golem_flaking.png": 50722,
      "./Gold Goofy Golem/variations/2_gold goofy golem_patchy.png": 50726,
      "./Gold Goofy Golem/variations/3_gold goofy golem_shedding.png": 50733,
      "./Gold Goofy Golem/variations/4_gold goofy golem_bare.png": 50738,
      "./Gold Goofy Golem/variations/5_gold goofy golem_stone.png": 50740,
      "./Gold Guardian/Gold Guardian_Atlas.png": 50745,
      "./Gold Guardian/variations/0_gold guardian_default.png": 50749,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Armour.png": 50753,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Atlas.png": 50755,
      "./Gold Watermelon Stag/variations/0_gold watermelon stag_default.png": 50763,
      "./Gorilla/GorillaSaddle_Atlas.png": 50771,
      "./Gorilla/Gorilla_Atlas.png": 50773,
      "./Gorilla/variations/0_gorilla_default.png": 50777,
      "./Horse/HorseSaddle_Atlas.png": 50782,
      "./Horse/Horse_Atlas.png": 50791,
      "./Horse/variations/0_horse_default.png": 50797,
      "./Horse/variations/1_horse_black.png": 50801,
      "./Horse/variations/2_horse_brown.png": 50809,
      "./Horse/variations/3_horse_cream.png": 50811,
      "./Iron Golem/Iron Golem_Atlas.png": 50818,
      "./Iron Golem/variations/0_iron golem_default.png": 50824,
      "./Iron Goofy Golem/Iron Goofy Golem_Atlas.png": 50833,
      "./Iron Goofy Golem/variations/0_iron goofy golem_default.png": 50840,
      "./Iron Goofy Golem/variations/1_iron goofy golem_flaking.png": 50845,
      "./Iron Goofy Golem/variations/2_iron goofy golem_patchy.png": 50853,
      "./Iron Goofy Golem/variations/3_iron goofy golem_shedding.png": 50858,
      "./Iron Goofy Golem/variations/4_iron goofy golem_bare.png": 50865,
      "./Iron Goofy Golem/variations/5_iron goofy golem_stone.png": 50874,
      "./Iron Guardian/Iron Guardian_Atlas.png": 50882,
      "./Iron Guardian/variations/0_iron guardian_default.png": 50890,
      "./Lil Knight/Lil Knight_Atlas.png": 50895,
      "./Lil Knight/variations/0_lil knight_default.png": 50902,
      "./Lord Vulcan/Lord Vulcan_Atlas.png": 50904,
      "./Lord Vulcan/variations/0_lord vulcan_default.png": 50912,
      "./Magma Golem/Magma Golem_Atlas.png": 50919,
      "./Magma Golem/variations/0_magma golem_default.png": 50923,
      "./Magma Toad/Magma Toad_Atlas.png": 50932,
      "./Magma Toad/variations/0_magma toad_default.png": 50934,
      "./Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas.png": 50936,
      "./Moonstone Goofy Golem/variations/0_moonstone goofy golem_default.png": 50944,
      "./Moonstone Goofy Golem/variations/1_moonstone goofy golem_flaking.png": 50950,
      "./Moonstone Goofy Golem/variations/2_moonstone goofy golem_patchy.png": 50957,
      "./Moonstone Goofy Golem/variations/3_moonstone goofy golem_shedding.png": 50963,
      "./Moonstone Goofy Golem/variations/4_moonstone goofy golem_bare.png": 50969,
      "./Moonstone Goofy Golem/variations/5_moonstone goofy golem_stone.png": 50977,
      "./Moonstone Guardian/Moonstone Guardian_Atlas.png": 50985,
      "./Moonstone Guardian/variations/0_moonstone guardian_default.png": 50994,
      "./Mummy/Mummy_Atlas.png": 50998,
      "./Mummy/variations/0_mummy_default.png": 51003,
      "./Pig/Pig_Atlas.png": 51012,
      "./Pig/variations/0_pig_default.png": 51014,
      "./Player/Player_Atlas.png": 51020,
      "./Player/astro_set_1_attachable.png": 51024,
      "./Player/astro_set_2_attachable.png": 51032,
      "./Player/astro_set_3_attachable.png": 51036,
      "./Player/astro_set_4_attachable.png": 51040,
      "./Player/beaver_lumberjack.png": 51046,
      "./Player/bee_set_1_attachable.png": 51049,
      "./Player/bee_set_2_attachable.png": 51057,
      "./Player/bee_set_3_attachable_blue.png": 51061,
      "./Player/bee_set_3_attachable_green.png": 51066,
      "./Player/bee_set_3_attachable_red.png": 51073,
      "./Player/bee_set_4_attachable.png": 51082,
      "./Player/capeTextures/cape_cow_cream.png": 51090,
      "./Player/capeTextures/cape_cow_normal.png": 51094,
      "./Player/capeTextures/cape_creator_level1.png": 51098,
      "./Player/capeTextures/cape_creator_level2.png": 51107,
      "./Player/capeTextures/cape_creator_level3.png": 51111,
      "./Player/capeTextures/cape_none.png": 51115,
      "./Player/capeTextures/cape_pig.png": 51122,
      "./Player/capeTextures/cape_sheep.png": 51130,
      "./Player/capeTextures/cape_super.png": 51134,
      "./Player/capeTextures/cape_super_inverted.png": 51143,
      "./Player/capeTextures/cape_youtuber.png": 51151,
      "./Player/chef_attachables.png": 51158,
      "./Player/christmas_elf_attachable.png": 51160,
      "./Player/christmas_snowman_attachable.png": 51164,
      "./Player/dwarf_blue_hair.png": 51169,
      "./Player/dwarf_braided_hair.png": 51175,
      "./Player/dwarf_child.png": 51179,
      "./Player/dwarf_forked_beard.png": 51184,
      "./Player/dwarf_ginger_beard.png": 51193,
      "./Player/dwarf_grey_beard.png": 51196,
      "./Player/dwarf_hair_buns.png": 51203,
      "./Player/dwarf_purple_beard.png": 51208,
      "./Player/dwarf_red_hair.png": 51214,
      "./Player/dwarf_short_beard.png": 51222,
      "./Player/farmer_gill_attachable.png": 51231,
      "./Player/farmer_head.png": 51239,
      "./Player/fire_mage_attachable.png": 51243,
      "./Player/forge_mother.png": 51246,
      "./Player/furry_bear_attachables.png": 51248,
      "./Player/furry_kitsune_attachables.png": 51251,
      "./Player/furry_kitsune_tail_single.png": 51255,
      "./Player/furry_kitsune_tails.png": 51263,
      "./Player/furry_shark_attachables.png": 51268,
      "./Player/furry_shark_tail.png": 51272,
      "./Player/furry_wolfKnight_attachables.png": 51281,
      "./Player/furry_wolfKnight_tail.png": 51285,
      "./Player/general_attachable.png": 51290,
      "./Player/goblin_goggles.png": 51293,
      "./Player/goblin_mad_scientist.png": 51300,
      "./Player/highSociety_set_1_attachable.png": 51306,
      "./Player/highSociety_set_2_attachable.png": 51312,
      "./Player/highSociety_set_3_attachable.png": 51319,
      "./Player/highSociety_set_4_attachable.png": 51322,
      "./Player/human_archer.png": 51331,
      "./Player/human_desert_guard.png": 51334,
      "./Player/human_sentry.png": 51339,
      "./Player/ice_wings_attachable.png": 51341,
      "./Player/jackal_priest.png": 51343,
      "./Player/jetpack_attachable.png": 51350,
      "./Player/medieval_set_1_attachable_blue.png": 51353,
      "./Player/medieval_set_1_attachable_green.png": 51361,
      "./Player/medieval_set_1_attachable_purple.png": 51370,
      "./Player/medieval_set_1_attachable_red.png": 51374,
      "./Player/medieval_set_1_attachable_yellow.png": 51383,
      "./Player/medieval_set_2_attachable_blue.png": 51391,
      "./Player/medieval_set_2_attachable_purple.png": 51400,
      "./Player/medieval_set_2_attachable_red.png": 51407,
      "./Player/medieval_set_3_attachable_green.png": 51409,
      "./Player/medieval_set_3_attachable_pink.png": 51415,
      "./Player/medieval_set_3_attachable_purple.png": 51423,
      "./Player/medieval_set_3_attachable_red.png": 51429,
      "./Player/medieval_set_4_attachable_blue.png": 51433,
      "./Player/medieval_set_4_attachable_hair.png": 51435,
      "./Player/medieval_set_4_attachable_purple.png": 51440,
      "./Player/medieval_set_4_attachable_red.png": 51449,
      "./Player/mining_helmet_attachable.png": 51455,
      "./Player/minotaur.png": 51459,
      "./Player/minotaur_elder.png": 51466,
      "./Player/minotaur_warrior.png": 51475,
      "./Player/monster_hunter_lorenzo_attachable.png": 51478,
      "./Player/nova_jetpack_attachable.png": 51485,
      "./Player/npc_pig_head.png": 51492,
      "./Player/painter_spencer_attachable.png": 51501,
      "./Player/pet_reindeer.png": 51509,
      "./Player/pig_napoleon.png": 51512,
      "./Player/pig_worker_attachable.png": 51514,
      "./Player/piggy_banker_head.png": 51523,
      "./Player/portal_mage_hat.png": 51525,
      "./Player/rabbit_aristocrat_attachable.png": 51527,
      "./Player/skis_attachable.png": 51530,
      "./Player/smuglyn_attachable.png": 51538,
      "./Player/spring_set_1_attachable.png": 51547,
      "./Player/spring_set_2_attachable.png": 51549,
      "./Player/spring_set_3_attachable.png": 51556,
      "./Player/spring_set_4_attachable.png": 51559,
      "./Player/tentacle_boy.png": 51561,
      "./Player/tentacle_girl_attachable.png": 51566,
      "./Player/tentacle_guy_attachable.png": 51575,
      "./Player/tentacle_guy_fisherman_attachable.png": 51579,
      "./Player/trader_cowl_black.png": 51582,
      "./Player/trader_cowl_blue.png": 51587,
      "./Player/ugly_sweater_attachable.png": 51596,
      "./Player/wolf_in_suit_attachable.png": 51599,
      "./Player/wolf_security.png": 51608,
      "./Player/y2k_set_1_attachable.png": 51616,
      "./Player/y2k_set_2_attachable.png": 51618,
      "./Player/y2k_set_3_attachable.png": 51627,
      "./Player/y2k_set_4_attachable.png": 51632,
      "./Scorpion/Scorpion_Atlas.png": 51636,
      "./Scorpion/variations/0_scorpion_default.png": 51644,
      "./Sheep/SheepWool_Atlas.png": 51650,
      "./Sheep/Sheep_Atlas.png": 51652,
      "./Sheep/variations/0_sheep_default.png": 51657,
      "./Sheep/variations/10_sheep_gray.png": 51664,
      "./Sheep/variations/11_sheep_green.png": 51672,
      "./Sheep/variations/12_sheep_lightBlue.png": 51679,
      "./Sheep/variations/13_sheep_lightGray.png": 51682,
      "./Sheep/variations/14_sheep_lime.png": 51685,
      "./Sheep/variations/15_sheep_magenta.png": 51689,
      "./Sheep/variations/1_sheep_black.png": 51695,
      "./Sheep/variations/2_sheep_red.png": 51698,
      "./Sheep/variations/3_sheep_orange.png": 51701,
      "./Sheep/variations/4_sheep_pink.png": 51705,
      "./Sheep/variations/5_sheep_purple.png": 51712,
      "./Sheep/variations/6_sheep_yellow.png": 51720,
      "./Sheep/variations/7_sheep_blue.png": 51727,
      "./Sheep/variations/8_sheep_brown.png": 51732,
      "./Sheep/variations/9_sheep_cyan.png": 51736,
      "./Skeleton/Skeleton_Atlas.png": 51739,
      "./Skeleton/variations/0_skeleton_default.png": 51746,
      "./Slime/Slime_Atlas.png": 51750,
      "./Slime/variations/0_slime_default.png": 51757,
      "./Spirit Bear/Spirit BearSaddle_Atlas.png": 51762,
      "./Spirit Bear/Spirit Bear_Atlas.png": 51770,
      "./Spirit Bear/variations/0_spirit bear_default.png": 51776,
      "./Spirit Golem/Spirit Golem_Atlas.png": 51784,
      "./Spirit Golem/variations/0_spirit golem_default.png": 51786,
      "./Spirit Gorilla/Spirit GorillaSaddle_Atlas.png": 51795,
      "./Spirit Gorilla/Spirit Gorilla_Atlas.png": 51804,
      "./Spirit Gorilla/variations/0_spirit gorilla_default.png": 51807,
      "./Spirit Stag/Spirit StagSaddle_Atlas.png": 51811,
      "./Spirit Stag/Spirit Stag_Atlas.png": 51819,
      "./Spirit Stag/variations/0_spirit stag_default.png": 51823,
      "./Spirit Wolf/Spirit WolfCollar_Atlas.png": 51828,
      "./Spirit Wolf/Spirit Wolf_Atlas.png": 51831,
      "./Spirit Wolf/variations/0_spirit wolf_default.png": 51835,
      "./Stag/StagSaddle_Atlas.png": 51839,
      "./Stag/Stag_Atlas.png": 51843,
      "./Stag/variations/0_stag_default.png": 51848,
      "./Stalker/Stalker_Atlas.png": 51853,
      "./Stalker/variations/0_stalker_default.png": 51857,
      "./Stalker/variations/1_stalker_crimson.png": 51860,
      "./Stalker/variations/2_stalker_frost.png": 51866,
      "./Stalker/variations/3_stalker_void.png": 51869,
      "./Tiki Terror/Tiki Terror_Atlas.png": 51872,
      "./Tiki Terror/variations/0_tiki terror_default.png": 51876,
      "./Tiki Terror/variations/1_tiki terror_titan.png": 51884,
      "./Tiki Terror/variations/2_tiki terror_tormentor.png": 51888,
      "./Tiki Terror/variations/3_tiki terror_tyrant.png": 51896,
      "./Vulcanite/Vulcanite_Atlas.png": 51905,
      "./Vulcanite/variations/0_vulcanite_default.png": 51912,
      "./Wildcat/WildcatCollar_Atlas.png": 51919,
      "./Wildcat/Wildcat_Atlas.png": 51926,
      "./Wildcat/variations/0_wildcat_default.png": 51930,
      "./Wildcat/variations/1_wildcat_tabby.png": 51937,
      "./Wildcat/variations/2_wildcat_grey.png": 51941,
      "./Wildcat/variations/3_wildcat_black.png": 51948,
      "./Wildcat/variations/4_wildcat_calico.png": 51956,
      "./Wildcat/variations/5_wildcat_siamese.png": 51960,
      "./Wildcat/variations/6_wildcat_leopard.png": 51966,
      "./Wolf/WolfCollar_Atlas.png": 51972,
      "./Wolf/Wolf_Atlas.png": 51979,
      "./Wolf/variations/0_wolf_default.png": 51986,
      "./Wolf/variations/1_wolf_white.png": 51995,
      "./Wolf/variations/2_wolf_brown.png": 52001,
      "./Wolf/variations/3_wolf_grey.png": 52007,
      "./Wolf/variations/4_wolf_spectral.png": 52013,
      "./Zombie/Zombie_Atlas.png": 52020,
      "./Zombie/variations/0_zombie_default.png": 52025
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 50255
  },
  44927: (WW, iW, OW) => {
    var mW = {
      "./2_block.glb": 44929,
      "./67.glb": 44938,
      "./Artisan Bench.glb": 44947,
      "./Aspen Door.glb": 44956,
      "./Aspen Item Pedestal.glb": 44964,
      "./Aspen Ladder.glb": 44967,
      "./Aspen Trapdoor.glb": 44972,
      "./Black Banner.glb": 44978,
      "./Black Bed.glb": 44987,
      "./Black Directional Arrow.glb": 44993,
      "./Black Strongbed.glb": 45002,
      "./Blue Banner.glb": 45006,
      "./Blue Bed.glb": 45011,
      "./Blue Directional Arrow.glb": 45019,
      "./Blue Strongbed.glb": 45024,
      "./Board.glb": 45032,
      "./Brown Banner.glb": 45034,
      "./Brown Bed.glb": 45039,
      "./Brown Directional Arrow.glb": 45042,
      "./Brown Strongbed.glb": 45047,
      "./Cedar Door.glb": 45055,
      "./Cedar Item Pedestal.glb": 45064,
      "./Cedar Ladder.glb": 45072,
      "./Cedar Trapdoor.glb": 45075,
      "./Cherry Door.glb": 45080,
      "./Cherry Item Pedestal.glb": 45085,
      "./Cherry Ladder.glb": 45091,
      "./Cherry Trapdoor.glb": 45095,
      "./Crimson Trapdoor.glb": 45101,
      "./Cyan Banner.glb": 45105,
      "./Cyan Bed.glb": 45113,
      "./Cyan Directional Arrow.glb": 45115,
      "./Cyan Strongbed.glb": 45123,
      "./Dangling Rope.glb": 45128,
      "./Dangling Vine.glb": 45131,
      "./Diamond Enchanting Table.glb": 45139,
      "./Diamond Trophy.glb": 45148,
      "./Draugr Banner.glb": 45154,
      "./Fat Brown Mushroom.glb": 45161,
      "./Fat Red Mushroom.glb": 45169,
      "./Fence.glb": 45178,
      "./FenceGate.glb": 45187,
      "./Furnace.glb": 45196,
      "./Gold Enchanting Table.glb": 45202,
      "./Gold Trophy.glb": 45204,
      "./Gray Banner.glb": 45213,
      "./Gray Bed.glb": 45219,
      "./Gray Strongbed.glb": 45221,
      "./Green Banner.glb": 45226,
      "./Green Bed.glb": 45232,
      "./Green Directional Arrow.glb": 45235,
      "./Green Strongbed.glb": 45241,
      "./Grey Directional Arrow.glb": 45244,
      "./Iron Enchanting Table.glb": 45253,
      "./Iron Ladder.glb": 45259,
      "./Iron Trapdoor.glb": 45262,
      "./Iron Trophy.glb": 45265,
      "./Jungle Door.glb": 45270,
      "./Jungle Item Pedestal.glb": 45279,
      "./Jungle Ladder.glb": 45286,
      "./Jungle Trapdoor.glb": 45288,
      "./Large Icicle.glb": 45292,
      "./Large Twin Icicle.glb": 45301,
      "./Leaf Bed.glb": 45304,
      "./Light Blue Banner.glb": 45306,
      "./Light Blue Bed.glb": 45309,
      "./Light Blue Directional Arrow.glb": 45311,
      "./Light Blue Strongbed.glb": 45313,
      "./Light Gray Banner.glb": 45320,
      "./Light Gray Bed.glb": 45329,
      "./Light Gray Strongbed.glb": 45338,
      "./Light Grey Directional Arrow.glb": 45345,
      "./Lime Banner.glb": 45348,
      "./Lime Bed.glb": 45351,
      "./Lime Directional Arrow.glb": 45354,
      "./Lime Strongbed.glb": 45357,
      "./Magenta Banner.glb": 45361,
      "./Magenta Bed.glb": 45369,
      "./Magenta Directional Arrow.glb": 45372,
      "./Magenta Strongbed.glb": 45377,
      "./Mango Door.glb": 45385,
      "./Mango Item Pedestal.glb": 45389,
      "./Mango Ladder.glb": 45391,
      "./Mango Trapdoor.glb": 45397,
      "./Maple Door.glb": 45404,
      "./Maple Ladder.glb": 45407,
      "./Maple Trapdoor.glb": 45411,
      "./Medium Icicle.glb": 45418,
      "./Moonstone Trophy.glb": 45422,
      "./Nova Trophy.glb": 45426,
      "./Orange Banner.glb": 45435,
      "./Orange Bed.glb": 45437,
      "./Orange Directional Arrow.glb": 45440,
      "./Orange Strongbed.glb": 45449,
      "./Palm Door.glb": 45458,
      "./Palm Item Pedestal.glb": 45461,
      "./Palm Ladder.glb": 45464,
      "./Palm Trapdoor.glb": 45470,
      "./Pear Door.glb": 45472,
      "./Pear Item Pedestal.glb": 45480,
      "./Pear Ladder.glb": 45483,
      "./Pear Trapdoor.glb": 45488,
      "./Pine Door.glb": 45497,
      "./Pine Item Pedestal.glb": 45499,
      "./Pine Ladder.glb": 45507,
      "./Pine Trapdoor.glb": 45511,
      "./Pink Banner.glb": 45514,
      "./Pink Bed.glb": 45521,
      "./Pink Directional Arrow.glb": 45524,
      "./Pink Strongbed.glb": 45533,
      "./Plum Door.glb": 45541,
      "./Plum Item Pedestal.glb": 45546,
      "./Plum Ladder.glb": 45548,
      "./Plum Trapdoor.glb": 45553,
      "./Potion Table.glb": 45559,
      "./Purple Banner.glb": 45561,
      "./Purple Bed.glb": 45570,
      "./Purple Directional Arrow.glb": 45577,
      "./Purple Strongbed.glb": 45585,
      "./Rainbow Banner.glb": 45587,
      "./Red Banner.glb": 45589,
      "./Red Bed.glb": 45598,
      "./Red Directional Arrow.glb": 45602,
      "./Red Strongbed.glb": 45606,
      "./Salvaging Table.glb": 45614,
      "./Showcase.glb": 45623,
      "./Skull Banner.glb": 45632,
      "./Small Black Pod.glb": 45637,
      "./Small Blue Pod.glb": 45639,
      "./Small Brown Pod.glb": 45647,
      "./Small Cyan Pod.glb": 45656,
      "./Small Gray Pod.glb": 45665,
      "./Small Green Pod.glb": 45669,
      "./Small Light Blue Pod.glb": 45672,
      "./Small Light Gray Pod.glb": 45676,
      "./Small Lime Pod.glb": 45681,
      "./Small Magenta Pod.glb": 45690,
      "./Small Orange Pod.glb": 45698,
      "./Small Pink Pod.glb": 45705,
      "./Small Purple Pod.glb": 45708,
      "./Small Red Pod.glb": 45712,
      "./Small Twin Icicle.glb": 45718,
      "./Small White Pod.glb": 45723,
      "./Small Yellow Pod.glb": 45730,
      "./Spectral Door.glb": 45739,
      "./Spectral Item Pedestal.glb": 45744,
      "./Spectral Ladder.glb": 45749,
      "./Spectral Trapdoor.glb": 45757,
      "./Spikes_Diamond.glb": 45760,
      "./Spikes_Gold.glb": 45769,
      "./Spikes_Iron.glb": 45776,
      "./Spikes_Kill.glb": 45779,
      "./Spikes_Stone.glb": 45782,
      "./Spikes_Wood.glb": 45786,
      "./Stone Enchanting Table.glb": 45795,
      "./Stone Trophy.glb": 45803,
      "./Timed Spike Bomb Block.glb": 45812,
      "./Vines.glb": 45815,
      "./Warped Trapdoor.glb": 45819,
      "./White Banner.glb": 45827,
      "./White Bed.glb": 45835,
      "./White Directional Arrow.glb": 45837,
      "./White Strongbed.glb": 45842,
      "./Wood Enchanting Table.glb": 45844,
      "./Wood Trophy.glb": 45853,
      "./Workbench.glb": 45857,
      "./Yellow Banner.glb": 45860,
      "./Yellow Bed.glb": 45863,
      "./Yellow Directional Arrow.glb": 45867,
      "./Yellow Strongbed.glb": 45875,
      "./_Aspen Door Top.glb": 45877,
      "./_Black Banner Flag Hanging.glb": 45883,
      "./_Black Banner Flag.glb": 45889,
      "./_Black Banner Hanging.glb": 45891,
      "./_Black Bed Head.glb": 45893,
      "./_Black Strongbed Head.glb": 45898,
      "./_Blue Banner Flag Hanging.glb": 45900,
      "./_Blue Banner Flag.glb": 45905,
      "./_Blue Banner Hanging.glb": 45908,
      "./_Blue Bed Head.glb": 45916,
      "./_Blue Strongbed Head.glb": 45919,
      "./_Brown Banner Flag Hanging.glb": 45924,
      "./_Brown Banner Flag.glb": 45927,
      "./_Brown Banner Hanging.glb": 45933,
      "./_Brown Bed Head.glb": 45938,
      "./_Brown Strongbed Head.glb": 45943,
      "./_Camel Painting Bottom Left.glb": 45947,
      "./_Camel Painting Bottom Right.glb": 45956,
      "./_Camel Painting Top Left.glb": 45963,
      "./_Camel Painting Top Right.glb": 45966,
      "./_Cedar Door Top.glb": 45968,
      "./_Cherry Door Top.glb": 45975,
      "./_Cow Painting Bottom Left.glb": 45983,
      "./_Cow Painting Bottom Right.glb": 45989,
      "./_Cow Painting Top Left.glb": 45991,
      "./_Cow Painting Top Right.glb": 45993,
      "./_Cyan Banner Flag Hanging.glb": 46001,
      "./_Cyan Banner Flag.glb": 46010,
      "./_Cyan Banner Hanging.glb": 46019,
      "./_Cyan Bed Head.glb": 46021,
      "./_Cyan Strongbed Head.glb": 46023,
      "./_Deer Painting Bottom Left.glb": 46032,
      "./_Deer Painting Bottom Right.glb": 46034,
      "./_Deer Painting Top Left.glb": 46036,
      "./_Deer Painting Top Right.glb": 46044,
      "./_Draugr Banner Flag Hanging.glb": 46050,
      "./_Draugr Banner Flag.glb": 46052,
      "./_Draugr Banner Hanging.glb": 46056,
      "./_Gray Banner Flag Hanging.glb": 46061,
      "./_Gray Banner Flag.glb": 46067,
      "./_Gray Banner Hanging.glb": 46072,
      "./_Gray Bed Head.glb": 46078,
      "./_Gray Strongbed Head.glb": 46081,
      "./_Green Banner Flag Hanging.glb": 46086,
      "./_Green Banner Flag.glb": 46091,
      "./_Green Banner Hanging.glb": 46093,
      "./_Green Bed Head.glb": 46102,
      "./_Green Strongbed Head.glb": 46105,
      "./_Horse Painting Bottom Left.glb": 46113,
      "./_Horse Painting Bottom Right.glb": 46115,
      "./_Horse Painting Top Left.glb": 46117,
      "./_Horse Painting Top Right.glb": 46122,
      "./_Jungle Door Top.glb": 46131,
      "./_Light Blue Banner Flag Hanging.glb": 46133,
      "./_Light Blue Banner Flag.glb": 46140,
      "./_Light Blue Banner Hanging.glb": 46147,
      "./_Light Blue Bed Head.glb": 46151,
      "./_Light Blue Strongbed Head.glb": 46159,
      "./_Light Gray Banner Flag Hanging.glb": 46168,
      "./_Light Gray Banner Flag.glb": 46173,
      "./_Light Gray Banner Hanging.glb": 46177,
      "./_Light Gray Bed Head.glb": 46180,
      "./_Light Gray Strongbed Head.glb": 46187,
      "./_Lime Banner Flag Hanging.glb": 46196,
      "./_Lime Banner Flag.glb": 46202,
      "./_Lime Banner Hanging.glb": 46207,
      "./_Lime Bed Head.glb": 46210,
      "./_Lime Strongbed Head.glb": 46216,
      "./_Magenta Banner Flag Hanging.glb": 46218,
      "./_Magenta Banner Flag.glb": 46220,
      "./_Magenta Banner Hanging.glb": 46224,
      "./_Magenta Bed Head.glb": 46228,
      "./_Magenta Strongbed Head.glb": 46232,
      "./_Mango Door Top.glb": 46236,
      "./_Maple Door Top.glb": 46245,
      "./_Orange Banner Flag Hanging.glb": 46247,
      "./_Orange Banner Flag.glb": 46255,
      "./_Orange Banner Hanging.glb": 46257,
      "./_Orange Bed Head.glb": 46265,
      "./_Orange Strongbed Head.glb": 46274,
      "./_Palm Door Top.glb": 46279,
      "./_Pear Door Top.glb": 46285,
      "./_Pig Painting Bottom Left.glb": 46289,
      "./_Pig Painting Bottom Right.glb": 46291,
      "./_Pig Painting Top Left.glb": 46296,
      "./_Pig Painting Top Right.glb": 46298,
      "./_Pine Door Top.glb": 46301,
      "./_Pink Banner Flag Hanging.glb": 46310,
      "./_Pink Banner Flag.glb": 46312,
      "./_Pink Banner Hanging.glb": 46314,
      "./_Pink Bed Head.glb": 46321,
      "./_Pink Strongbed Head.glb": 46328,
      "./_Plum Door Top.glb": 46334,
      "./_Purple Banner Flag Hanging.glb": 46336,
      "./_Purple Banner Flag.glb": 46342,
      "./_Purple Banner Hanging.glb": 46345,
      "./_Purple Bed Head.glb": 46349,
      "./_Purple Strongbed Head.glb": 46357,
      "./_Radar Dish Down.glb": 46361,
      "./_Radar Dish Up.glb": 46365,
      "./_Rainbow Banner Flag Hanging.glb": 46368,
      "./_Rainbow Banner Flag.glb": 46377,
      "./_Rainbow Banner Hanging.glb": 46385,
      "./_Red Banner Flag Hanging.glb": 46390,
      "./_Red Banner Flag.glb": 46398,
      "./_Red Banner Hanging.glb": 46403,
      "./_Red Bed Head.glb": 46412,
      "./_Red Strongbed Head.glb": 46419,
      "./_Sheep Painting Bottom Left.glb": 46428,
      "./_Sheep Painting Bottom Right.glb": 46435,
      "./_Sheep Painting Top Left.glb": 46439,
      "./_Sheep Painting Top Right.glb": 46448,
      "./_Skull Banner Flag Hanging.glb": 46450,
      "./_Skull Banner Flag.glb": 46455,
      "./_Skull Banner Hanging.glb": 46464,
      "./_Small Black Pod Mid.glb": 46472,
      "./_Small Black Pod Top.glb": 46475,
      "./_Small Blue Pod Mid.glb": 46484,
      "./_Small Blue Pod Top.glb": 46488,
      "./_Small Brown Pod Mid.glb": 46491,
      "./_Small Brown Pod Top.glb": 46496,
      "./_Small Cyan Pod Mid.glb": 46504,
      "./_Small Cyan Pod Top.glb": 46511,
      "./_Small Gray Pod Mid.glb": 46515,
      "./_Small Gray Pod Top.glb": 46524,
      "./_Small Green Pod Mid.glb": 46530,
      "./_Small Green Pod Top.glb": 46532,
      "./_Small Light Blue Pod Mid.glb": 46536,
      "./_Small Light Blue Pod Top.glb": 46538,
      "./_Small Light Gray Pod Mid.glb": 46546,
      "./_Small Light Gray Pod Top.glb": 46548,
      "./_Small Lime Pod Mid.glb": 46550,
      "./_Small Lime Pod Top.glb": 46552,
      "./_Small Magenta Pod Mid.glb": 46560,
      "./_Small Magenta Pod Top.glb": 46568,
      "./_Small Middle Pod Mag.glb": 46574,
      "./_Small Orange Pod Mid.glb": 46576,
      "./_Small Orange Pod Top.glb": 46584,
      "./_Small Pink Pod Mid.glb": 46589,
      "./_Small Pink Pod Top.glb": 46591,
      "./_Small Purple Pod Mid.glb": 46594,
      "./_Small Purple Pod Top.glb": 46603,
      "./_Small Red Pod Mid.glb": 46605,
      "./_Small Red Pod Top.glb": 46612,
      "./_Small White Pod Mid.glb": 46614,
      "./_Small White Pod Top.glb": 46623,
      "./_Small Yellow Pod Mid.glb": 46627,
      "./_Small Yellow Pod Top.glb": 46633,
      "./_Spectral Door Top.glb": 46639,
      "./_White Banner Flag Hanging.glb": 46648,
      "./_White Banner Flag.glb": 46652,
      "./_White Banner Hanging.glb": 46660,
      "./_White Bed Head.glb": 46669,
      "./_White Strongbed Head.glb": 46674,
      "./_Wildcat Painting Bottom Left.glb": 46682,
      "./_Wildcat Painting Bottom Right.glb": 46689,
      "./_Wildcat Painting Top Left.glb": 46697,
      "./_Wildcat Painting Top Right.glb": 46704,
      "./_Wolf Painting Bottom Left.glb": 46707,
      "./_Wolf Painting Bottom Right.glb": 46715,
      "./_Wolf Painting Top Left.glb": 46718,
      "./_Wolf Painting Top Right.glb": 46723,
      "./_Yellow Banner Flag Hanging.glb": 46728,
      "./_Yellow Banner Flag.glb": 46730,
      "./_Yellow Banner Hanging.glb": 46734,
      "./_Yellow Bed Head.glb": 46736,
      "./_Yellow Strongbed Head.glb": 46743,
      "./auto_miner_body.glb": 46746,
      "./auto_miner_drill_back.glb": 46752,
      "./auto_miner_drill_front.glb": 46756,
      "./auto_miner_foot_back.glb": 46758,
      "./auto_miner_foot_front.glb": 46764,
      "./auto_miner_lunite_body.glb": 46766,
      "./auto_miner_lunite_drill_back.glb": 46768,
      "./auto_miner_lunite_drill_front.glb": 46777,
      "./auto_miner_lunite_foot_back.glb": 46781,
      "./auto_miner_lunite_foot_front.glb": 46786,
      "./baf2_coolant_pipe_none.glb": 46792,
      "./baf2_coolant_pipe_nx.glb": 46798,
      "./baf2_coolant_pipe_nx_ny.glb": 46806,
      "./baf2_coolant_pipe_nx_ny_nz.glb": 46808,
      "./baf2_coolant_pipe_nx_ny_nz_px.glb": 46814,
      "./baf2_coolant_pipe_nx_ny_nz_px_py.glb": 46819,
      "./baf2_coolant_pipe_nx_ny_nz_px_py_pz.glb": 46828,
      "./baf2_coolant_pipe_nx_ny_nz_px_pz.glb": 46830,
      "./baf2_coolant_pipe_nx_ny_nz_py.glb": 46838,
      "./baf2_coolant_pipe_nx_ny_nz_py_pz.glb": 46841,
      "./baf2_coolant_pipe_nx_ny_nz_pz.glb": 46845,
      "./baf2_coolant_pipe_nx_ny_px.glb": 46853,
      "./baf2_coolant_pipe_nx_ny_px_py.glb": 46860,
      "./baf2_coolant_pipe_nx_ny_px_py_pz.glb": 46869,
      "./baf2_coolant_pipe_nx_ny_px_pz.glb": 46875,
      "./baf2_coolant_pipe_nx_ny_py.glb": 46883,
      "./baf2_coolant_pipe_nx_ny_py_pz.glb": 46892,
      "./baf2_coolant_pipe_nx_ny_pz.glb": 46896,
      "./baf2_coolant_pipe_nx_nz.glb": 46899,
      "./baf2_coolant_pipe_nx_nz_px.glb": 46906,
      "./baf2_coolant_pipe_nx_nz_px_py.glb": 46914,
      "./baf2_coolant_pipe_nx_nz_px_py_pz.glb": 46923,
      "./baf2_coolant_pipe_nx_nz_px_pz.glb": 46925,
      "./baf2_coolant_pipe_nx_nz_py.glb": 46932,
      "./baf2_coolant_pipe_nx_nz_py_pz.glb": 46939,
      "./baf2_coolant_pipe_nx_nz_pz.glb": 46943,
      "./baf2_coolant_pipe_nx_px.glb": 46945,
      "./baf2_coolant_pipe_nx_px_py.glb": 46954,
      "./baf2_coolant_pipe_nx_px_py_pz.glb": 46960,
      "./baf2_coolant_pipe_nx_px_pz.glb": 46963,
      "./baf2_coolant_pipe_nx_py.glb": 46970,
      "./baf2_coolant_pipe_nx_py_pz.glb": 46974,
      "./baf2_coolant_pipe_nx_pz.glb": 46982,
      "./baf2_coolant_pipe_ny.glb": 46990,
      "./baf2_coolant_pipe_ny_nz.glb": 46998,
      "./baf2_coolant_pipe_ny_nz_px.glb": 47003,
      "./baf2_coolant_pipe_ny_nz_px_py.glb": 47006,
      "./baf2_coolant_pipe_ny_nz_px_py_pz.glb": 47014,
      "./baf2_coolant_pipe_ny_nz_px_pz.glb": 47018,
      "./baf2_coolant_pipe_ny_nz_py.glb": 47027,
      "./baf2_coolant_pipe_ny_nz_py_pz.glb": 47030,
      "./baf2_coolant_pipe_ny_nz_pz.glb": 47034,
      "./baf2_coolant_pipe_ny_px.glb": 47037,
      "./baf2_coolant_pipe_ny_px_py.glb": 47043,
      "./baf2_coolant_pipe_ny_px_py_pz.glb": 47046,
      "./baf2_coolant_pipe_ny_px_pz.glb": 47051,
      "./baf2_coolant_pipe_ny_py.glb": 47056,
      "./baf2_coolant_pipe_ny_py_pz.glb": 47065,
      "./baf2_coolant_pipe_ny_pz.glb": 47074,
      "./baf2_coolant_pipe_nz.glb": 47076,
      "./baf2_coolant_pipe_nz_px.glb": 47083,
      "./baf2_coolant_pipe_nz_px_py.glb": 47088,
      "./baf2_coolant_pipe_nz_px_py_pz.glb": 47097,
      "./baf2_coolant_pipe_nz_px_pz.glb": 47100,
      "./baf2_coolant_pipe_nz_py.glb": 47106,
      "./baf2_coolant_pipe_nz_py_pz.glb": 47115,
      "./baf2_coolant_pipe_nz_pz.glb": 47124,
      "./baf2_coolant_pipe_px.glb": 47128,
      "./baf2_coolant_pipe_px_py.glb": 47135,
      "./baf2_coolant_pipe_px_py_pz.glb": 47137,
      "./baf2_coolant_pipe_px_pz.glb": 47142,
      "./baf2_coolant_pipe_py.glb": 47146,
      "./baf2_coolant_pipe_py_pz.glb": 47155,
      "./baf2_coolant_pipe_pz.glb": 47159,
      "./baf2_fluid_pipe_none.glb": 47165,
      "./baf2_fluid_pipe_nx.glb": 47173,
      "./baf2_fluid_pipe_nx_ny.glb": 47180,
      "./baf2_fluid_pipe_nx_ny_nz.glb": 47188,
      "./baf2_fluid_pipe_nx_ny_nz_px.glb": 47190,
      "./baf2_fluid_pipe_nx_ny_nz_px_py.glb": 47197,
      "./baf2_fluid_pipe_nx_ny_nz_px_py_pz.glb": 47200,
      "./baf2_fluid_pipe_nx_ny_nz_px_pz.glb": 47205,
      "./baf2_fluid_pipe_nx_ny_nz_py.glb": 47212,
      "./baf2_fluid_pipe_nx_ny_nz_py_pz.glb": 47219,
      "./baf2_fluid_pipe_nx_ny_nz_pz.glb": 47223,
      "./baf2_fluid_pipe_nx_ny_px.glb": 47226,
      "./baf2_fluid_pipe_nx_ny_px_py.glb": 47235,
      "./baf2_fluid_pipe_nx_ny_px_py_pz.glb": 47238,
      "./baf2_fluid_pipe_nx_ny_px_pz.glb": 47244,
      "./baf2_fluid_pipe_nx_ny_py.glb": 47253,
      "./baf2_fluid_pipe_nx_ny_py_pz.glb": 47261,
      "./baf2_fluid_pipe_nx_ny_pz.glb": 47266,
      "./baf2_fluid_pipe_nx_nz.glb": 47273,
      "./baf2_fluid_pipe_nx_nz_px.glb": 47282,
      "./baf2_fluid_pipe_nx_nz_px_py.glb": 47288,
      "./baf2_fluid_pipe_nx_nz_px_py_pz.glb": 47295,
      "./baf2_fluid_pipe_nx_nz_px_pz.glb": 47300,
      "./baf2_fluid_pipe_nx_nz_py.glb": 47304,
      "./baf2_fluid_pipe_nx_nz_py_pz.glb": 47311,
      "./baf2_fluid_pipe_nx_nz_pz.glb": 47320,
      "./baf2_fluid_pipe_nx_px.glb": 47323,
      "./baf2_fluid_pipe_nx_px_py.glb": 47329,
      "./baf2_fluid_pipe_nx_px_py_pz.glb": 47333,
      "./baf2_fluid_pipe_nx_px_pz.glb": 47341,
      "./baf2_fluid_pipe_nx_py.glb": 47349,
      "./baf2_fluid_pipe_nx_py_pz.glb": 47353,
      "./baf2_fluid_pipe_nx_pz.glb": 47360,
      "./baf2_fluid_pipe_ny.glb": 47366,
      "./baf2_fluid_pipe_ny_nz.glb": 47372,
      "./baf2_fluid_pipe_ny_nz_px.glb": 47380,
      "./baf2_fluid_pipe_ny_nz_px_py.glb": 47383,
      "./baf2_fluid_pipe_ny_nz_px_py_pz.glb": 47391,
      "./baf2_fluid_pipe_ny_nz_px_pz.glb": 47397,
      "./baf2_fluid_pipe_ny_nz_py.glb": 47404,
      "./baf2_fluid_pipe_ny_nz_py_pz.glb": 47410,
      "./baf2_fluid_pipe_ny_nz_pz.glb": 47412,
      "./baf2_fluid_pipe_ny_px.glb": 47418,
      "./baf2_fluid_pipe_ny_px_py.glb": 47424,
      "./baf2_fluid_pipe_ny_px_py_pz.glb": 47430,
      "./baf2_fluid_pipe_ny_px_pz.glb": 47434,
      "./baf2_fluid_pipe_ny_py.glb": 47443,
      "./baf2_fluid_pipe_ny_py_pz.glb": 47452,
      "./baf2_fluid_pipe_ny_pz.glb": 47458,
      "./baf2_fluid_pipe_nz.glb": 47463,
      "./baf2_fluid_pipe_nz_px.glb": 47468,
      "./baf2_fluid_pipe_nz_px_py.glb": 47470,
      "./baf2_fluid_pipe_nz_px_py_pz.glb": 47472,
      "./baf2_fluid_pipe_nz_px_pz.glb": 47480,
      "./baf2_fluid_pipe_nz_py.glb": 47483,
      "./baf2_fluid_pipe_nz_py_pz.glb": 47486,
      "./baf2_fluid_pipe_nz_pz.glb": 47493,
      "./baf2_fluid_pipe_px.glb": 47495,
      "./baf2_fluid_pipe_px_py.glb": 47499,
      "./baf2_fluid_pipe_px_py_pz.glb": 47504,
      "./baf2_fluid_pipe_px_pz.glb": 47511,
      "./baf2_fluid_pipe_py.glb": 47518,
      "./baf2_fluid_pipe_py_pz.glb": 47520,
      "./baf2_fluid_pipe_pz.glb": 47524,
      "./baf2_water_pipe_none.glb": 47532,
      "./baf2_water_pipe_nx.glb": 47537,
      "./baf2_water_pipe_nx_ny.glb": 47544,
      "./baf2_water_pipe_nx_ny_nz.glb": 47551,
      "./baf2_water_pipe_nx_ny_nz_px.glb": 47554,
      "./baf2_water_pipe_nx_ny_nz_px_py.glb": 47557,
      "./baf2_water_pipe_nx_ny_nz_px_py_pz.glb": 47564,
      "./baf2_water_pipe_nx_ny_nz_px_pz.glb": 47566,
      "./baf2_water_pipe_nx_ny_nz_py.glb": 47574,
      "./baf2_water_pipe_nx_ny_nz_py_pz.glb": 47581,
      "./baf2_water_pipe_nx_ny_nz_pz.glb": 47589,
      "./baf2_water_pipe_nx_ny_px.glb": 47598,
      "./baf2_water_pipe_nx_ny_px_py.glb": 47607,
      "./baf2_water_pipe_nx_ny_px_py_pz.glb": 47614,
      "./baf2_water_pipe_nx_ny_px_pz.glb": 47618,
      "./baf2_water_pipe_nx_ny_py.glb": 47625,
      "./baf2_water_pipe_nx_ny_py_pz.glb": 47629,
      "./baf2_water_pipe_nx_ny_pz.glb": 47634,
      "./baf2_water_pipe_nx_nz.glb": 47637,
      "./baf2_water_pipe_nx_nz_px.glb": 47641,
      "./baf2_water_pipe_nx_nz_px_py.glb": 47646,
      "./baf2_water_pipe_nx_nz_px_py_pz.glb": 47649,
      "./baf2_water_pipe_nx_nz_px_pz.glb": 47658,
      "./baf2_water_pipe_nx_nz_py.glb": 47667,
      "./baf2_water_pipe_nx_nz_py_pz.glb": 47669,
      "./baf2_water_pipe_nx_nz_pz.glb": 47677,
      "./baf2_water_pipe_nx_px.glb": 47685,
      "./baf2_water_pipe_nx_px_py.glb": 47692,
      "./baf2_water_pipe_nx_px_py_pz.glb": 47697,
      "./baf2_water_pipe_nx_px_pz.glb": 47700,
      "./baf2_water_pipe_nx_py.glb": 47708,
      "./baf2_water_pipe_nx_py_pz.glb": 47717,
      "./baf2_water_pipe_nx_pz.glb": 47724,
      "./baf2_water_pipe_ny.glb": 47730,
      "./baf2_water_pipe_ny_nz.glb": 47732,
      "./baf2_water_pipe_ny_nz_px.glb": 47741,
      "./baf2_water_pipe_ny_nz_px_py.glb": 47749,
      "./baf2_water_pipe_ny_nz_px_py_pz.glb": 47757,
      "./baf2_water_pipe_ny_nz_px_pz.glb": 47759,
      "./baf2_water_pipe_ny_nz_py.glb": 47768,
      "./baf2_water_pipe_ny_nz_py_pz.glb": 47774,
      "./baf2_water_pipe_ny_nz_pz.glb": 47779,
      "./baf2_water_pipe_ny_px.glb": 47785,
      "./baf2_water_pipe_ny_px_py.glb": 47787,
      "./baf2_water_pipe_ny_px_py_pz.glb": 47793,
      "./baf2_water_pipe_ny_px_pz.glb": 47799,
      "./baf2_water_pipe_ny_py.glb": 47803,
      "./baf2_water_pipe_ny_py_pz.glb": 47808,
      "./baf2_water_pipe_ny_pz.glb": 47817,
      "./baf2_water_pipe_nz.glb": 47824,
      "./baf2_water_pipe_nz_px.glb": 47827,
      "./baf2_water_pipe_nz_px_py.glb": 47836,
      "./baf2_water_pipe_nz_px_py_pz.glb": 47840,
      "./baf2_water_pipe_nz_px_pz.glb": 47846,
      "./baf2_water_pipe_nz_py.glb": 47851,
      "./baf2_water_pipe_nz_py_pz.glb": 47856,
      "./baf2_water_pipe_nz_pz.glb": 47863,
      "./baf2_water_pipe_px.glb": 47867,
      "./baf2_water_pipe_px_py.glb": 47876,
      "./baf2_water_pipe_px_py_pz.glb": 47883,
      "./baf2_water_pipe_px_pz.glb": 47890,
      "./baf2_water_pipe_py.glb": 47892,
      "./baf2_water_pipe_py_pz.glb": 47898,
      "./baf2_water_pipe_pz.glb": 47902,
      "./beam_arm.glb": 47906,
      "./beam_arm_mirrored.glb": 47911,
      "./bebek_bebek_bebek.glb": 47918,
      "./bin.glb": 47925,
      "./bobino_musculino.glb": 47932,
      "./bobzilla.glb": 47934,
      "./boiling_pot.glb": 47936,
      "./bone_antlers_model.glb": 47940,
      "./boss_target.glb": 47948,
      "./brra_brra_pachim.glb": 47952,
      "./cannon_barrel_back.glb": 47955,
      "./cannon_barrel_front.glb": 47960,
      "./cannon_bottom_back.glb": 47965,
      "./cannon_bottom_front.glb": 47971,
      "./cannon_top_back.glb": 47979,
      "./cannon_top_front.glb": 47981,
      "./capitano_explovissimo.glb": 47983,
      "./cappuccino_ninjino.glb": 47988,
      "./carpet_black_model.glb": 47990,
      "./carpet_blue_model.glb": 47996,
      "./carpet_brown_model.glb": 48002,
      "./carpet_cyan_model.glb": 48008,
      "./carpet_gray_model.glb": 48011,
      "./carpet_green_model.glb": 48018,
      "./carpet_light_blue_model.glb": 48026,
      "./carpet_light_gray_model.glb": 48035,
      "./carpet_lime_model.glb": 48041,
      "./carpet_magenta_model.glb": 48050,
      "./carpet_orange_model.glb": 48053,
      "./carpet_pink_model.glb": 48062,
      "./carpet_purple_model.glb": 48067,
      "./carpet_red_model.glb": 48075,
      "./carpet_white_model.glb": 48081,
      "./carpet_yellow_model.glb": 48089,
      "./chili_pepper_stage0_lava_model.glb": 48091,
      "./chili_pepper_stage0_model.glb": 48097,
      "./chili_pepper_stage1_lava_model.glb": 48102,
      "./chili_pepper_stage1_model.glb": 48109,
      "./chili_pepper_stage2_lava_model.glb": 48115,
      "./chili_pepper_stage2_model.glb": 48122,
      "./chili_pepper_stage3_lava_model.glb": 48130,
      "./chili_pepper_stage3_model.glb": 48134,
      "./chili_pepper_stage4_lava_model.glb": 48141,
      "./chili_pepper_stage4_model.glb": 48144,
      "./chili_pepper_stage5_lava_model.glb": 48147,
      "./chili_pepper_stage5_model.glb": 48155,
      "./chili_pepper_stage6_lava_model.glb": 48161,
      "./chimpanzano_bananano.glb": 48164,
      "./chopping_board.glb": 48166,
      "./crystal.glb": 48168,
      "./eclipse_dial.glb": 48177,
      "./extractor_pipe_elbow_nx_ny.glb": 48183,
      "./extractor_pipe_elbow_nx_nz.glb": 48188,
      "./extractor_pipe_elbow_nx_py.glb": 48196,
      "./extractor_pipe_elbow_nx_pz.glb": 48201,
      "./extractor_pipe_elbow_ny_nz.glb": 48205,
      "./extractor_pipe_elbow_ny_px.glb": 48212,
      "./extractor_pipe_elbow_ny_pz.glb": 48215,
      "./extractor_pipe_elbow_nz_px.glb": 48217,
      "./extractor_pipe_elbow_nz_py.glb": 48225,
      "./extractor_pipe_elbow_px_py.glb": 48230,
      "./extractor_pipe_elbow_px_pz.glb": 48237,
      "./extractor_pipe_elbow_py_pz.glb": 48240,
      "./extractor_pipe_end_nx.glb": 48246,
      "./extractor_pipe_end_ny.glb": 48255,
      "./extractor_pipe_end_nz.glb": 48259,
      "./extractor_pipe_end_px.glb": 48261,
      "./extractor_pipe_end_py.glb": 48266,
      "./extractor_pipe_end_pz.glb": 48271,
      "./extractor_pipe_isolated.glb": 48273,
      "./extractor_pipe_straight_x.glb": 48278,
      "./extractor_pipe_straight_y.glb": 48283,
      "./extractor_pipe_straight_z.glb": 48290,
      "./filter_pipe_input_nx.glb": 48297,
      "./filter_pipe_input_ny.glb": 48305,
      "./filter_pipe_input_nz.glb": 48313,
      "./filter_pipe_input_px.glb": 48318,
      "./filter_pipe_input_py.glb": 48323,
      "./filter_pipe_input_pz.glb": 48330,
      "./floor_quarters.glb": 48333,
      "./football.glb": 48338,
      "./frying_pan.glb": 48343,
      "./glowing_mushroom.glb": 48345,
      "./glowing_mushroom_wall.glb": 48354,
      "./gold_antlers_model.glb": 48359,
      "./hob_boiling.glb": 48365,
      "./hob_frying.glb": 48368,
      "./il_wizardini_del_porko.glb": 48372,
      "./job_application.glb": 48374,
      "./john_beef.glb": 48379,
      "./jump_pad.glb": 48383,
      "./jump_pad_strong.glb": 48392,
      "./jump_pad_super.glb": 48397,
      "./jump_pad_weak.glb": 48406,
      "./kitchen_worktop.glb": 48413,
      "./landing_pad.glb": 48415,
      "./lantern.glb": 48420,
      "./lantern_wall.glb": 48427,
      "./lily_pad_model.glb": 48432,
      "./lucchia_blocchi.glb": 48437,
      "./merger_pipe_output_nx.glb": 48443,
      "./merger_pipe_output_ny.glb": 48446,
      "./merger_pipe_output_nz.glb": 48448,
      "./merger_pipe_output_px.glb": 48452,
      "./merger_pipe_output_py.glb": 48457,
      "./merger_pipe_output_pz.glb": 48464,
      "./monsieur_bedwar.glb": 48468,
      "./mortar_goblin.glb": 48473,
      "./noticeboard_standing.glb": 48478,
      "./noticeboard_standing_bottom.glb": 48481,
      "./noticeboard_standing_bottom_left.glb": 48488,
      "./noticeboard_standing_bottom_right.glb": 48497,
      "./noticeboard_standing_horizontal.glb": 48504,
      "./noticeboard_standing_horizontal_left.glb": 48513,
      "./noticeboard_standing_horizontal_right.glb": 48520,
      "./noticeboard_standing_left.glb": 48528,
      "./noticeboard_standing_leg.glb": 48531,
      "./noticeboard_standing_right.glb": 48537,
      "./noticeboard_standing_single.glb": 48540,
      "./noticeboard_standing_top.glb": 48545,
      "./noticeboard_standing_top_left.glb": 48549,
      "./noticeboard_standing_top_right.glb": 48551,
      "./noticeboard_standing_vertical.glb": 48553,
      "./noticeboard_standing_vertical_bottom.glb": 48562,
      "./noticeboard_standing_vertical_top.glb": 48569,
      "./noticeboard_wall.glb": 48578,
      "./noticeboard_wall_bottom.glb": 48580,
      "./noticeboard_wall_bottom_left.glb": 48586,
      "./noticeboard_wall_bottom_right.glb": 48592,
      "./noticeboard_wall_horizontal.glb": 48594,
      "./noticeboard_wall_horizontal_left.glb": 48601,
      "./noticeboard_wall_horizontal_right.glb": 48603,
      "./noticeboard_wall_left.glb": 48607,
      "./noticeboard_wall_right.glb": 48609,
      "./noticeboard_wall_single.glb": 48614,
      "./noticeboard_wall_top.glb": 48623,
      "./noticeboard_wall_top_left.glb": 48631,
      "./noticeboard_wall_top_right.glb": 48635,
      "./noticeboard_wall_vertical.glb": 48642,
      "./noticeboard_wall_vertical_bottom.glb": 48645,
      "./noticeboard_wall_vertical_top.glb": 48649,
      "./pipe_elbow_nx_ny.glb": 48653,
      "./pipe_elbow_nx_nz.glb": 48655,
      "./pipe_elbow_nx_py.glb": 48660,
      "./pipe_elbow_nx_pz.glb": 48666,
      "./pipe_elbow_ny_nz.glb": 48672,
      "./pipe_elbow_ny_px.glb": 48681,
      "./pipe_elbow_ny_pz.glb": 48685,
      "./pipe_elbow_nz_px.glb": 48694,
      "./pipe_elbow_nz_py.glb": 48701,
      "./pipe_elbow_px_py.glb": 48703,
      "./pipe_elbow_px_pz.glb": 48712,
      "./pipe_elbow_py_pz.glb": 48720,
      "./pipe_end_nx.glb": 48725,
      "./pipe_end_ny.glb": 48734,
      "./pipe_end_nz.glb": 48741,
      "./pipe_end_px.glb": 48743,
      "./pipe_end_py.glb": 48745,
      "./pipe_end_pz.glb": 48752,
      "./pipe_isolated.glb": 48756,
      "./pipe_straight_x.glb": 48764,
      "./pipe_straight_y.glb": 48769,
      "./pipe_straight_z.glb": 48771,
      "./rocket_full.glb": 48776,
      "./rocket_northeast_1.glb": 48784,
      "./rocket_northeast_2.glb": 48793,
      "./rocket_northeast_3.glb": 48799,
      "./rocket_northeast_4.glb": 48801,
      "./rocket_northeast_5.glb": 48807,
      "./rocket_northwest_1.glb": 48814,
      "./rocket_northwest_2.glb": 48816,
      "./rocket_northwest_3.glb": 48822,
      "./rocket_northwest_4.glb": 48830,
      "./rocket_northwest_5.glb": 48834,
      "./rocket_southeast_1.glb": 48837,
      "./rocket_southeast_2.glb": 48840,
      "./rocket_southeast_3.glb": 48844,
      "./rocket_southeast_4.glb": 48847,
      "./rocket_southeast_5.glb": 48853,
      "./rocket_southwest_1.glb": 48860,
      "./rocket_southwest_2.glb": 48862,
      "./rocket_southwest_3.glb": 48871,
      "./rocket_southwest_4.glb": 48880,
      "./rocket_southwest_5.glb": 48889,
      "./rune_sigil.glb": 48891,
      "./slicing_board.glb": 48899,
      "./slime_trail.glb": 48904,
      "./splitter_pipe.glb": 48907,
      "./torch.glb": 48910,
      "./torch_black.glb": 48914,
      "./torch_blue.glb": 48919,
      "./torch_brown.glb": 48928,
      "./torch_cyan.glb": 48937,
      "./torch_gray.glb": 48939,
      "./torch_green.glb": 48946,
      "./torch_light_blue.glb": 48949,
      "./torch_light_gray.glb": 48954,
      "./torch_lime.glb": 48956,
      "./torch_magenta.glb": 48960,
      "./torch_orange.glb": 48968,
      "./torch_pink.glb": 48974,
      "./torch_purple.glb": 48977,
      "./torch_red.glb": 48983,
      "./torch_wall.glb": 48991,
      "./torch_wall_black.glb": 48997,
      "./torch_wall_blue.glb": 48999,
      "./torch_wall_brown.glb": 49007,
      "./torch_wall_cyan.glb": 49016,
      "./torch_wall_gray.glb": 49024,
      "./torch_wall_green.glb": 49029,
      "./torch_wall_light_blue.glb": 49036,
      "./torch_wall_light_gray.glb": 49040,
      "./torch_wall_lime.glb": 49043,
      "./torch_wall_magenta.glb": 49049,
      "./torch_wall_orange.glb": 49057,
      "./torch_wall_pink.glb": 49066,
      "./torch_wall_purple.glb": 49074,
      "./torch_wall_red.glb": 49077,
      "./torch_wall_white.glb": 49084,
      "./torch_wall_yellow.glb": 49093,
      "./torch_white.glb": 49102,
      "./torch_yellow.glb": 49110,
      "./twirlina_cappucina.glb": 49113,
      "./ufo.glb": 49121,
      "./vending_machine_bottom.glb": 49129,
      "./vending_machine_top.glb": 49133,
      "./wave_black.glb": 49142,
      "./wave_blue.glb": 49151,
      "./wave_brown.glb": 49155,
      "./wave_cyan.glb": 49161,
      "./wave_green.glb": 49166,
      "./wave_grey.glb": 49171,
      "./wave_light_blue.glb": 49177,
      "./wave_light_grey.glb": 49182,
      "./wave_lime.glb": 49191,
      "./wave_magenta.glb": 49199,
      "./wave_orange.glb": 49206,
      "./wave_pink.glb": 49209,
      "./wave_purple.glb": 49215,
      "./wave_red.glb": 49222,
      "./wave_white.glb": 49228,
      "./wave_yellow.glb": 49233,
      "./wheel.glb": 49235,
      "./wire_elbow_nx_ny.glb": 49243,
      "./wire_elbow_nx_nz.glb": 49246,
      "./wire_elbow_nx_py.glb": 49254,
      "./wire_elbow_nx_pz.glb": 49263,
      "./wire_elbow_ny_nz.glb": 49270,
      "./wire_elbow_ny_px.glb": 49279,
      "./wire_elbow_ny_pz.glb": 49288,
      "./wire_elbow_nz_px.glb": 49292,
      "./wire_elbow_nz_py.glb": 49298,
      "./wire_elbow_px_py.glb": 49306,
      "./wire_elbow_px_pz.glb": 49315,
      "./wire_elbow_py_pz.glb": 49321,
      "./wire_end_nx.glb": 49327,
      "./wire_end_ny.glb": 49329,
      "./wire_end_nz.glb": 49337,
      "./wire_end_px.glb": 49345,
      "./wire_end_py.glb": 49348,
      "./wire_end_pz.glb": 49354,
      "./wire_isolated.glb": 49363,
      "./wire_straight_x.glb": 49371,
      "./wire_straight_y.glb": 49380,
      "./wire_straight_z.glb": 49383
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 44927
  },
  53398: (WW, iW, OW) => {
    var mW = {
      "./arrow.png": 53402,
      "./bubble.png": 53405,
      "./critical_hit.png": 53412,
      "./drift.png": 53415,
      "./effect_5.png": 53417,
      "./fishingFishSilhouette.png": 53425,
      "./generic_2.png": 53430,
      "./glint.png": 53438,
      "./heart.png": 53446,
      "./scary_face.png": 53454,
      "./snowflake.png": 53456,
      "./soul_0.png": 53463,
      "./square_particle.png": 53470,
      "./z-particle.png": 53476
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 53398
  },
  44924: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ATTACHMENT_IMAGE_NAMES: () => jW,
      CAPE_NAMES: () => AW,
      COSMETIC_MODEL_KEYS: () => kW,
      GROUP_ATLAS_PATHS: () => xW,
      LIFEFORM_ATLAS_PATHS: () => wW,
      MODEL_FILE_PATHS: () => EW,
      PARTICLE_TEXTURE_NAMES: () => SW,
      PLAYER_FILE: () => ZW,
      attachmentImageUrl: () => UW,
      blockImageName: () => KW,
      blockImageUrl: () => MW,
      capeUrl: () => bW,
      filePackName: () => LW,
      fileSource: () => PW,
      fileUrl: () => cW,
      groupAtlasUrl: () => lW,
      lifeformAtlasUrl: () => tW,
      particleTextureUrl: () => YW
    });
    const mW = "BBSSSSSSSSSSSSSSSBBBSBBSSSSSSBBBBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBSBSBBSBBSBBSBBSBBSBBBBBBBBSBBSBSSSSSSBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSSSSSSSBSBBSBBSBSBSBSBSBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBBBBSBBBBBBBBBBBBSSSSSSSSSSSSBSBBSBBSBSBSBSBSSSSSSSSBSBSSBBSSSBSBBSBSBSBSSSSSSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSBSBSBSBSBBBSBBBSBBSSBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBBBBBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBBBBSSSSSSSBBBSSBSBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSBBBBBBBBBBBBBBSSSSSSSSSSSSSSSBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSLlLLLLLLLLLLLLLLLLLLLLLLLlLlLlLlLlLlLlLlLLlLlLlLlLlLlLlLlLlLLlLLlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      EW = ["Fence", "FenceGate", "Cactus", "Grass", "Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Furnace", "Workbench", "Maple Door", "Maple Door", "_Maple Door Top", "Maple Trapdoor", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Maple Ladder", "Vines", "Iron Ladder", "Artisan Bench", "Wheat Seeds", "Wheat", "White Bed", "White Bed", "_White Bed Head", "Orange Bed", "Orange Bed", "_Orange Bed Head", "Magenta Bed", "Magenta Bed", "_Magenta Bed Head", "Light Blue Bed", "Light Blue Bed", "_Light Blue Bed Head", "Yellow Bed", "Yellow Bed", "_Yellow Bed Head", "Lime Bed", "Lime Bed", "_Lime Bed Head", "Pink Bed", "Pink Bed", "_Pink Bed Head", "Gray Bed", "Gray Bed", "_Gray Bed Head", "Light Gray Bed", "Light Gray Bed", "_Light Gray Bed Head", "Cyan Bed", "Cyan Bed", "_Cyan Bed Head", "Purple Bed", "Purple Bed", "_Purple Bed Head", "Blue Bed", "Blue Bed", "_Blue Bed Head", "Brown Bed", "Brown Bed", "_Brown Bed Head", "Green Bed", "Green Bed", "_Green Bed Head", "Red Bed", "Red Bed", "_Red Bed Head", "Black Bed", "Black Bed", "_Black Bed Head", "Palm Sapling", "Pine Door", "Pine Door", "_Pine Door Top", "Plum Door", "Plum Door", "_Plum Door Top", "Cedar Door", "Cedar Door", "_Cedar Door Top", "Aspen Door", "Aspen Door", "_Aspen Door Top", "Jungle Door", "Jungle Door", "_Jungle Door Top", "Palm Door", "Palm Door", "_Palm Door Top", "Pine Trapdoor", "Plum Trapdoor", "Cedar Trapdoor", "Aspen Trapdoor", "Jungle Trapdoor", "Palm Trapdoor", "Pear Door", "Pear Door", "_Pear Door Top", "Pear Trapdoor", "Pear Sapling", "Board", "Board", "Net", "Cobweb", "Watermelon Seeds", "Pumpkin Seeds", "Melon Seeds", "Potion Table", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "carpet_black_model", "Black Carpet", "carpet_blue_model", "Blue Carpet", "carpet_brown_model", "Brown Carpet", "carpet_cyan_model", "Cyan Carpet", "carpet_gray_model", "Gray Carpet", "carpet_light_gray_model", "Light Gray Carpet", "carpet_green_model", "Green Carpet", "carpet_light_blue_model", "Light Blue Carpet", "carpet_lime_model", "Lime Carpet", "carpet_magenta_model", "Magenta Carpet", "carpet_orange_model", "Orange Carpet", "carpet_pink_model", "Pink Carpet", "carpet_purple_model", "Purple Carpet", "carpet_red_model", "Red Carpet", "carpet_white_model", "White Carpet", "carpet_yellow_model", "Yellow Carpet", "Rice", "Cranberries", "Red Mushroom", "Brown Mushroom", "Cotton Seeds", "Tall Grass", "Cherry Door", "Cherry Door", "_Cherry Door Top", "Cherry Trapdoor", "Cherry Sapling", "Cherry Ladder", "Spikes_Wood", "Wood Spikes", "Spikes_Stone", "Stone Spikes", "Spikes_Iron", "Iron Spikes", "Spikes_Gold", "Gold Spikes", "Spikes_Diamond", "Diamond Spikes", "Spikes_Kill", "Kill Spikes", "Corn Seeds", "White Strongbed", "White Strongbed", "_White Strongbed Head", "Orange Strongbed", "Orange Strongbed", "_Orange Strongbed Head", "Magenta Strongbed", "Magenta Strongbed", "_Magenta Strongbed Head", "Light Blue Strongbed", "Light Blue Strongbed", "_Light Blue Strongbed Head", "Yellow Strongbed", "Yellow Strongbed", "_Yellow Strongbed Head", "Lime Strongbed", "Lime Strongbed", "_Lime Strongbed Head", "Pink Strongbed", "Pink Strongbed", "_Pink Strongbed Head", "Gray Strongbed", "Gray Strongbed", "_Gray Strongbed Head", "Light Gray Strongbed", "Light Gray Strongbed", "_Light Gray Strongbed Head", "Cyan Strongbed", "Cyan Strongbed", "_Cyan Strongbed Head", "Purple Strongbed", "Purple Strongbed", "_Purple Strongbed Head", "Blue Strongbed", "Blue Strongbed", "_Blue Strongbed Head", "Brown Strongbed", "Brown Strongbed", "_Brown Strongbed Head", "Green Strongbed", "Green Strongbed", "_Green Strongbed Head", "Red Strongbed", "Red Strongbed", "_Red Strongbed Head", "Black Strongbed", "Black Strongbed", "_Black Strongbed Head", "Timed Spike Bomb Block", "Fat Brown Mushroom", "Fat Red Mushroom", "chili_pepper_stage0_model", "Chili Pepper Seeds", "chili_pepper_stage1_model", "chili_pepper_stage2_model", "chili_pepper_stage3_model", "chili_pepper_stage4_model", "chili_pepper_stage5_model", "chili_pepper_stage0_lava_model", "chili_pepper_stage1_lava_model", "chili_pepper_stage2_lava_model", "chili_pepper_stage3_lava_model", "chili_pepper_stage4_lava_model", "chili_pepper_stage5_lava_model", "chili_pepper_stage6_lava_model", "Pig Spawner Block", "Cow Spawner Block", "Sheep Spawner Block", "Cave Golem Spawner Block", "Draugr Zombie Spawner Block", "Draugr Skeleton Spawner Block", "Empty Spawner Block", "Frost Golem Spawner Block", "Frost Zombie Spawner Block", "Frost Skeleton Spawner Block", "Draugr Knight Spawner Block", "Spectral Grass", "Spectral Door", "Spectral Door", "_Spectral Door Top", "Spectral Trapdoor", "Spectral Sapling", "Spectral Ladder", "Wood Enchanting Table", "Wood Enchanting Table", "Stone Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table", "Diamond Enchanting Table", "Pine Grass", "Pine Fern", "Fallen Pine Cone", "Wolf Spawner Block", "Bear Spawner Block", "Deer Spawner Block", "Stag Spawner Block", "bone_antlers_model", "Bone Antlers", "gold_antlers_model", "Gold Antlers", "Gold Watermelon Stag Spawner Block", "Salvaging Table", "Leaf Bed", "Leaf Bed", "Jungle Tall Grass", "Catnip", "Mango Door", "Mango Door", "_Mango Door Top", "Mango Trapdoor", "Mango Sapling", "Mango Ladder", "Banana Seeds", "Dangling Rope", "Dangling Rope", "Dangling Vine", "Dangling Vine", "Gorilla Spawner Block", "Wildcat Spawner Block", "Draugr Huntress Spawner Block", "Magma Golem Spawner Block", "Horse Spawner Block", "Autumn Fern", "Carrot Seeds", "Potato Seeds", "Beetroot Seeds", "White Banner", "White Banner", "_White Banner Flag Hanging", "_White Banner Flag", "_White Banner Hanging", "Orange Banner", "Orange Banner", "_Orange Banner Flag Hanging", "_Orange Banner Flag", "_Orange Banner Hanging", "Magenta Banner", "Magenta Banner", "_Magenta Banner Flag Hanging", "_Magenta Banner Flag", "_Magenta Banner Hanging", "Light Blue Banner", "Light Blue Banner", "_Light Blue Banner Flag Hanging", "_Light Blue Banner Flag", "_Light Blue Banner Hanging", "Yellow Banner", "Yellow Banner", "_Yellow Banner Flag Hanging", "_Yellow Banner Flag", "_Yellow Banner Hanging", "Lime Banner", "Lime Banner", "_Lime Banner Flag Hanging", "_Lime Banner Flag", "_Lime Banner Hanging", "Pink Banner", "Pink Banner", "_Pink Banner Flag Hanging", "_Pink Banner Flag", "_Pink Banner Hanging", "Gray Banner", "Gray Banner", "_Gray Banner Flag Hanging", "_Gray Banner Flag", "_Gray Banner Hanging", "Light Gray Banner", "Light Gray Banner", "_Light Gray Banner Flag Hanging", "_Light Gray Banner Flag", "_Light Gray Banner Hanging", "Cyan Banner", "Cyan Banner", "_Cyan Banner Flag Hanging", "_Cyan Banner Flag", "_Cyan Banner Hanging", "Purple Banner", "Purple Banner", "_Purple Banner Flag Hanging", "_Purple Banner Flag", "_Purple Banner Hanging", "Blue Banner", "Blue Banner", "_Blue Banner Flag Hanging", "_Blue Banner Flag", "_Blue Banner Hanging", "Brown Banner", "Brown Banner", "_Brown Banner Flag Hanging", "_Brown Banner Flag", "_Brown Banner Hanging", "Green Banner", "Green Banner", "_Green Banner Flag Hanging", "_Green Banner Flag", "_Green Banner Hanging", "Red Banner", "Red Banner", "_Red Banner Flag Hanging", "_Red Banner Flag", "_Red Banner Hanging", "Black Banner", "Black Banner", "_Black Banner Flag Hanging", "_Black Banner Flag", "_Black Banner Hanging", "Draugr Banner", "Draugr Banner", "_Draugr Banner Flag Hanging", "_Draugr Banner Flag", "_Draugr Banner Hanging", "Spirit Golem Spawner Block", "Spirit Wolf Spawner Block", "Spirit Bear Spawner Block", "Spirit Stag Spawner Block", "Spirit Gorilla Spawner Block", "_Sheep Painting Top Left", "Sheep Painting", "_Sheep Painting Top Right", "_Sheep Painting Bottom Left", "_Sheep Painting Bottom Right", "_Cow Painting Top Left", "Cow Painting", "_Cow Painting Top Right", "_Cow Painting Bottom Left", "_Cow Painting Bottom Right", "_Pig Painting Top Left", "Pig Painting", "_Pig Painting Top Right", "_Pig Painting Bottom Left", "_Pig Painting Bottom Right", "_Horse Painting Top Left", "Horse Painting", "_Horse Painting Top Right", "_Horse Painting Bottom Left", "_Horse Painting Bottom Right", "_Wolf Painting Top Left", "Wolf Painting", "_Wolf Painting Top Right", "_Wolf Painting Bottom Left", "_Wolf Painting Bottom Right", "_Deer Painting Top Left", "Deer Painting", "_Deer Painting Top Right", "_Deer Painting Bottom Left", "_Deer Painting Bottom Right", "_Wildcat Painting Top Left", "Wildcat Painting", "_Wildcat Painting Top Right", "_Wildcat Painting Bottom Left", "_Wildcat Painting Bottom Right", "Draugr Warper Spawner Block", "Radar", "_Radar Dish Up", "Inactive Radar", "_Radar Dish Down", "Active Radar", "Gold Trophy", "Gold Trophy", "Small Magenta Pod", "Small Magenta Pod", "_Small Magenta Pod Mid", "_Small Magenta Pod Top", "Small Light Gray Pod", "Small Light Gray Pod", "_Small Light Gray Pod Mid", "_Small Light Gray Pod Top", "Small Red Pod", "Small Red Pod", "_Small Red Pod Mid", "_Small Red Pod Top", "Frost Wraith Spawner Block", "Draugr Reaver Spawner Block", "Small White Pod", "Small White Pod", "_Small White Pod Mid", "_Small White Pod Top", "Small Orange Pod", "Small Orange Pod", "_Small Orange Pod Mid", "_Small Orange Pod Top", "Small Light Blue Pod", "Small Light Blue Pod", "_Small Light Blue Pod Mid", "_Small Light Blue Pod Top", "Small Yellow Pod", "Small Yellow Pod", "_Small Yellow Pod Mid", "_Small Yellow Pod Top", "Small Lime Pod", "Small Lime Pod", "_Small Lime Pod Mid", "_Small Lime Pod Top", "Small Pink Pod", "Small Pink Pod", "_Small Pink Pod Mid", "_Small Pink Pod Top", "Small Gray Pod", "Small Gray Pod", "_Small Gray Pod Mid", "_Small Gray Pod Top", "Small Cyan Pod", "Small Cyan Pod", "_Small Cyan Pod Mid", "_Small Cyan Pod Top", "Small Purple Pod", "Small Purple Pod", "_Small Purple Pod Mid", "_Small Purple Pod Top", "Small Blue Pod", "Small Blue Pod", "_Small Blue Pod Mid", "_Small Blue Pod Top", "Small Brown Pod", "Small Brown Pod", "_Small Brown Pod Mid", "_Small Brown Pod Top", "Small Green Pod", "Small Green Pod", "_Small Green Pod Mid", "_Small Green Pod Top", "Small Black Pod", "Small Black Pod", "_Small Black Pod Mid", "_Small Black Pod Top", "Skull Banner", "Skull Banner", "_Skull Banner Flag Hanging", "_Skull Banner Flag", "_Skull Banner Hanging", "Rainbow Banner", "Rainbow Banner", "_Rainbow Banner Flag Hanging", "_Rainbow Banner Flag", "_Rainbow Banner Hanging", "2_block", "bebek_bebek_bebek", "bobino_musculino", "bobzilla", "brra_brra_pachim", "capitano_explovissimo", "cappuccino_ninjino", "chimpanzano_bananano", "il_wizardini_del_porko", "lucchia_blocchi", "monsieur_bedwar", "twirlina_cappucina", "boiling_pot", "chopping_board", "frying_pan", "hob_boiling", "hob_frying", "kitchen_worktop", "slicing_board", "Wood Trophy", "Wood Trophy", "Stone Trophy", "Stone Trophy", "Iron Trophy", "Iron Trophy", "Diamond Trophy", "Diamond Trophy", "Moonstone Trophy", "Moonstone Trophy", "wave_black", "wave_blue", "wave_brown", "wave_cyan", "wave_green", "wave_grey", "wave_light_blue", "wave_light_grey", "wave_lime", "wave_magenta", "wave_orange", "wave_pink", "wave_purple", "wave_red", "wave_white", "wave_yellow", "White Directional Arrow", "White Directional Arrow", "Orange Directional Arrow", "Orange Directional Arrow", "Magenta Directional Arrow", "Magenta Directional Arrow", "Light Blue Directional Arrow", "Light Blue Directional Arrow", "Yellow Directional Arrow", "Yellow Directional Arrow", "Lime Directional Arrow", "Lime Directional Arrow", "Pink Directional Arrow", "Pink Directional Arrow", "Grey Directional Arrow", "Grey Directional Arrow", "Light Grey Directional Arrow", "Light Grey Directional Arrow", "Cyan Directional Arrow", "Cyan Directional Arrow", "Purple Directional Arrow", "Purple Directional Arrow", "Blue Directional Arrow", "Blue Directional Arrow", "Brown Directional Arrow", "Brown Directional Arrow", "Green Directional Arrow", "Green Directional Arrow", "Red Directional Arrow", "Red Directional Arrow", "Black Directional Arrow", "Black Directional Arrow", "bin", "vending_machine_bottom", "Vending Machine", "vending_machine_top", "job_application", "john_beef", "67", "wheel", "ufo", "torch", "torch_wall", "torch_yellow", "torch_wall_yellow", "torch_white", "torch_wall_white", "torch_red", "torch_wall_red", "torch_purple", "torch_wall_purple", "torch_pink", "torch_wall_pink", "torch_orange", "torch_wall_orange", "torch_magenta", "torch_wall_magenta", "torch_lime", "torch_wall_lime", "torch_light_gray", "torch_wall_light_gray", "torch_light_blue", "torch_wall_light_blue", "torch_green", "torch_wall_green", "torch_gray", "torch_wall_gray", "torch_cyan", "torch_wall_cyan", "torch_brown", "torch_wall_brown", "torch_blue", "torch_wall_blue", "torch_black", "torch_wall_black", "landing_pad", "Landing Pad", "jump_pad_weak", "Weak Jump Pad", "jump_pad", "Jump Pad", "jump_pad_strong", "Strong Jump Pad", "jump_pad_super", "Super Jump Pad", "football", "glowing_mushroom", "glowing_mushroom_wall", "crystal", "slime_trail", "Slime Trail", "pipe_isolated", "pipe_end_nx", "pipe_end_ny", "pipe_end_nz", "pipe_end_px", "pipe_end_py", "pipe_end_pz", "pipe_elbow_nx_ny", "pipe_elbow_nx_nz", "pipe_straight_x", "pipe_elbow_nx_py", "pipe_elbow_nx_pz", "pipe_elbow_ny_nz", "pipe_elbow_ny_px", "pipe_straight_y", "pipe_elbow_ny_pz", "pipe_elbow_nz_px", "pipe_elbow_nz_py", "pipe_straight_z", "pipe_elbow_px_py", "pipe_elbow_px_pz", "pipe_elbow_py_pz", "auto_miner_foot_back", "Auto Miner", "auto_miner_drill_front", "auto_miner_drill_back", "auto_miner_foot_front", "auto_miner_body", "rocket_southwest_1", "Rocket Ship", "rocket_southwest_2", "rocket_southwest_3", "rocket_southwest_4", "rocket_southwest_5", "rocket_southeast_1", "rocket_southeast_2", "rocket_southeast_3", "rocket_southeast_4", "rocket_southeast_5", "rocket_northwest_1", "rocket_northwest_2", "rocket_northwest_3", "rocket_northwest_4", "rocket_northwest_5", "rocket_northeast_1", "rocket_northeast_2", "rocket_northeast_3", "rocket_northeast_4", "rocket_northeast_5", "rocket_full", "extractor_pipe_isolated", "extractor_pipe_end_nx", "extractor_pipe_end_ny", "extractor_pipe_end_nz", "extractor_pipe_end_px", "extractor_pipe_end_py", "extractor_pipe_end_pz", "extractor_pipe_elbow_nx_ny", "extractor_pipe_elbow_nx_nz", "extractor_pipe_straight_x", "extractor_pipe_elbow_nx_py", "extractor_pipe_elbow_nx_pz", "extractor_pipe_elbow_ny_nz", "extractor_pipe_elbow_ny_px", "extractor_pipe_straight_y", "extractor_pipe_elbow_ny_pz", "extractor_pipe_elbow_nz_px", "extractor_pipe_elbow_nz_py", "extractor_pipe_straight_z", "extractor_pipe_elbow_px_py", "extractor_pipe_elbow_px_pz", "extractor_pipe_elbow_py_pz", "splitter_pipe", "wire_isolated", "wire_end_nx", "wire_end_ny", "wire_end_nz", "wire_end_px", "wire_end_py", "wire_end_pz", "wire_elbow_nx_ny", "wire_elbow_nx_nz", "wire_straight_x", "wire_elbow_nx_py", "wire_elbow_nx_pz", "wire_elbow_ny_nz", "wire_elbow_ny_px", "wire_straight_y", "wire_elbow_ny_pz", "wire_elbow_nz_px", "wire_elbow_nz_py", "wire_straight_z", "wire_elbow_px_py", "wire_elbow_px_pz", "wire_elbow_py_pz", "filter_pipe_input_pz", "filter_pipe_input_nx", "filter_pipe_input_ny", "filter_pipe_input_nz", "filter_pipe_input_px", "filter_pipe_input_py", "merger_pipe_output_pz", "merger_pipe_output_nx", "merger_pipe_output_ny", "merger_pipe_output_nz", "merger_pipe_output_px", "merger_pipe_output_py", "Stalker Spawner Block", "auto_miner_lunite_foot_back", "Lunite Auto Miner", "auto_miner_lunite_drill_front", "auto_miner_lunite_drill_back", "auto_miner_lunite_foot_front", "auto_miner_lunite_body", "Crone Spawner Block", "Slime Spawner Block", "Iron Guardian Spawner Block", "Gold Guardian Spawner Block", "Diamond Guardian Spawner Block", "Moonstone Guardian Spawner Block", "Dead Bush", "lantern", "lantern_wall", "lily_pad_model", "Lily Pad", "Camel Spawner Block", "_Camel Painting Top Left", "Camel Painting", "_Camel Painting Top Right", "_Camel Painting Bottom Left", "_Camel Painting Bottom Right", "Small Twin Icicle", "Medium Icicle", "Large Icicle", "Large Twin Icicle", "noticeboard_standing", "noticeboard_standing_top", "noticeboard_standing_bottom", "noticeboard_standing_left", "noticeboard_standing_right", "noticeboard_standing_top_left", "noticeboard_standing_top_right", "noticeboard_standing_bottom_left", "noticeboard_standing_bottom_right", "noticeboard_standing_leg", "noticeboard_wall", "noticeboard_wall_top", "noticeboard_wall_bottom", "noticeboard_wall_left", "noticeboard_wall_right", "noticeboard_wall_top_left", "noticeboard_wall_top_right", "noticeboard_wall_bottom_left", "noticeboard_wall_bottom_right", "Tiki Terror Spawner Block", "Maple Fence", "Pine Fence", "Plum Fence", "Cedar Fence", "Aspen Fence", "Jungle Fence", "Palm Fence", "Pear Fence", "Cherry Fence", "Spectral Fence", "Mango Fence", "noticeboard_wall_single", "noticeboard_wall_horizontal_right", "noticeboard_wall_horizontal_left", "noticeboard_wall_horizontal", "noticeboard_wall_vertical_bottom", "noticeboard_wall_vertical_top", "noticeboard_wall_vertical", "noticeboard_standing_single", "noticeboard_standing_horizontal_right", "noticeboard_standing_horizontal_left", "noticeboard_standing_horizontal", "noticeboard_standing_vertical_bottom", "noticeboard_standing_vertical_top", "noticeboard_standing_vertical", "Maple Fence Gate", "Pine Fence Gate", "Plum Fence Gate", "Cedar Fence Gate", "Aspen Fence Gate", "Jungle Fence Gate", "Palm Fence Gate", "Pear Fence Gate", "Cherry Fence Gate", "Spectral Fence Gate", "Mango Fence Gate", "Iron Goofy Golem Spawner Block", "Gold Goofy Golem Spawner Block", "Diamond Goofy Golem Spawner Block", "Moonstone Goofy Golem Spawner Block", "cannon_bottom_back", "cannon_bottom_front", "cannon_barrel_back", "cannon_barrel_front", "cannon_top_back", "cannon_top_front", "floor_quarters", "boss_target", "rune_sigil", "eclipse_dial", "beam_arm", "beam_arm_mirrored", "mortar_goblin", "Showcase", "Pine Item Pedestal", "Plum Item Pedestal", "Cedar Item Pedestal", "Aspen Item Pedestal", "Jungle Item Pedestal", "Palm Item Pedestal", "Pear Item Pedestal", "Cherry Item Pedestal", "Spectral Item Pedestal", "Mango Item Pedestal", "baf2_fluid_pipe_none", "Fluid Pipe", "baf2_fluid_pipe_nx", "baf2_fluid_pipe_ny", "baf2_fluid_pipe_nx_ny", "baf2_fluid_pipe_nz", "baf2_fluid_pipe_nx_nz", "baf2_fluid_pipe_ny_nz", "baf2_fluid_pipe_nx_ny_nz", "baf2_fluid_pipe_px", "baf2_fluid_pipe_nx_px", "baf2_fluid_pipe_ny_px", "baf2_fluid_pipe_nx_ny_px", "baf2_fluid_pipe_nz_px", "baf2_fluid_pipe_nx_nz_px", "baf2_fluid_pipe_ny_nz_px", "baf2_fluid_pipe_nx_ny_nz_px", "baf2_fluid_pipe_py", "baf2_fluid_pipe_nx_py", "baf2_fluid_pipe_ny_py", "baf2_fluid_pipe_nx_ny_py", "baf2_fluid_pipe_nz_py", "baf2_fluid_pipe_nx_nz_py", "baf2_fluid_pipe_ny_nz_py", "baf2_fluid_pipe_nx_ny_nz_py", "baf2_fluid_pipe_px_py", "baf2_fluid_pipe_nx_px_py", "baf2_fluid_pipe_ny_px_py", "baf2_fluid_pipe_nx_ny_px_py", "baf2_fluid_pipe_nz_px_py", "baf2_fluid_pipe_nx_nz_px_py", "baf2_fluid_pipe_ny_nz_px_py", "baf2_fluid_pipe_nx_ny_nz_px_py", "baf2_fluid_pipe_pz", "baf2_fluid_pipe_nx_pz", "baf2_fluid_pipe_ny_pz", "baf2_fluid_pipe_nx_ny_pz", "baf2_fluid_pipe_nz_pz", "baf2_fluid_pipe_nx_nz_pz", "baf2_fluid_pipe_ny_nz_pz", "baf2_fluid_pipe_nx_ny_nz_pz", "baf2_fluid_pipe_px_pz", "baf2_fluid_pipe_nx_px_pz", "baf2_fluid_pipe_ny_px_pz", "baf2_fluid_pipe_nx_ny_px_pz", "baf2_fluid_pipe_nz_px_pz", "baf2_fluid_pipe_nx_nz_px_pz", "baf2_fluid_pipe_ny_nz_px_pz", "baf2_fluid_pipe_nx_ny_nz_px_pz", "baf2_fluid_pipe_py_pz", "baf2_fluid_pipe_nx_py_pz", "baf2_fluid_pipe_ny_py_pz", "baf2_fluid_pipe_nx_ny_py_pz", "baf2_fluid_pipe_nz_py_pz", "baf2_fluid_pipe_nx_nz_py_pz", "baf2_fluid_pipe_ny_nz_py_pz", "baf2_fluid_pipe_nx_ny_nz_py_pz", "baf2_fluid_pipe_px_py_pz", "baf2_fluid_pipe_nx_px_py_pz", "baf2_fluid_pipe_ny_px_py_pz", "baf2_fluid_pipe_nx_ny_px_py_pz", "baf2_fluid_pipe_nz_px_py_pz", "baf2_fluid_pipe_nx_nz_px_py_pz", "baf2_fluid_pipe_ny_nz_px_py_pz", "baf2_fluid_pipe_nx_ny_nz_px_py_pz", "baf2_water_pipe_none", "baf2_water_pipe_nx", "baf2_water_pipe_ny", "baf2_water_pipe_nx_ny", "baf2_water_pipe_nz", "baf2_water_pipe_nx_nz", "baf2_water_pipe_ny_nz", "baf2_water_pipe_nx_ny_nz", "baf2_water_pipe_px", "baf2_water_pipe_nx_px", "baf2_water_pipe_ny_px", "baf2_water_pipe_nx_ny_px", "baf2_water_pipe_nz_px", "baf2_water_pipe_nx_nz_px", "baf2_water_pipe_ny_nz_px", "baf2_water_pipe_nx_ny_nz_px", "baf2_water_pipe_py", "baf2_water_pipe_nx_py", "baf2_water_pipe_ny_py", "baf2_water_pipe_nx_ny_py", "baf2_water_pipe_nz_py", "baf2_water_pipe_nx_nz_py", "baf2_water_pipe_ny_nz_py", "baf2_water_pipe_nx_ny_nz_py", "baf2_water_pipe_px_py", "baf2_water_pipe_nx_px_py", "baf2_water_pipe_ny_px_py", "baf2_water_pipe_nx_ny_px_py", "baf2_water_pipe_nz_px_py", "baf2_water_pipe_nx_nz_px_py", "baf2_water_pipe_ny_nz_px_py", "baf2_water_pipe_nx_ny_nz_px_py", "baf2_water_pipe_pz", "baf2_water_pipe_nx_pz", "baf2_water_pipe_ny_pz", "baf2_water_pipe_nx_ny_pz", "baf2_water_pipe_nz_pz", "baf2_water_pipe_nx_nz_pz", "baf2_water_pipe_ny_nz_pz", "baf2_water_pipe_nx_ny_nz_pz", "baf2_water_pipe_px_pz", "baf2_water_pipe_nx_px_pz", "baf2_water_pipe_ny_px_pz", "baf2_water_pipe_nx_ny_px_pz", "baf2_water_pipe_nz_px_pz", "baf2_water_pipe_nx_nz_px_pz", "baf2_water_pipe_ny_nz_px_pz", "baf2_water_pipe_nx_ny_nz_px_pz", "baf2_water_pipe_py_pz", "baf2_water_pipe_nx_py_pz", "baf2_water_pipe_ny_py_pz", "baf2_water_pipe_nx_ny_py_pz", "baf2_water_pipe_nz_py_pz", "baf2_water_pipe_nx_nz_py_pz", "baf2_water_pipe_ny_nz_py_pz", "baf2_water_pipe_nx_ny_nz_py_pz", "baf2_water_pipe_px_py_pz", "baf2_water_pipe_nx_px_py_pz", "baf2_water_pipe_ny_px_py_pz", "baf2_water_pipe_nx_ny_px_py_pz", "baf2_water_pipe_nz_px_py_pz", "baf2_water_pipe_nx_nz_px_py_pz", "baf2_water_pipe_ny_nz_px_py_pz", "baf2_water_pipe_nx_ny_nz_px_py_pz", "baf2_coolant_pipe_none", "baf2_coolant_pipe_nx", "baf2_coolant_pipe_ny", "baf2_coolant_pipe_nx_ny", "baf2_coolant_pipe_nz", "baf2_coolant_pipe_nx_nz", "baf2_coolant_pipe_ny_nz", "baf2_coolant_pipe_nx_ny_nz", "baf2_coolant_pipe_px", "baf2_coolant_pipe_nx_px", "baf2_coolant_pipe_ny_px", "baf2_coolant_pipe_nx_ny_px", "baf2_coolant_pipe_nz_px", "baf2_coolant_pipe_nx_nz_px", "baf2_coolant_pipe_ny_nz_px", "baf2_coolant_pipe_nx_ny_nz_px", "baf2_coolant_pipe_py", "baf2_coolant_pipe_nx_py", "baf2_coolant_pipe_ny_py", "baf2_coolant_pipe_nx_ny_py", "baf2_coolant_pipe_nz_py", "baf2_coolant_pipe_nx_nz_py", "baf2_coolant_pipe_ny_nz_py", "baf2_coolant_pipe_nx_ny_nz_py", "baf2_coolant_pipe_px_py", "baf2_coolant_pipe_nx_px_py", "baf2_coolant_pipe_ny_px_py", "baf2_coolant_pipe_nx_ny_px_py", "baf2_coolant_pipe_nz_px_py", "baf2_coolant_pipe_nx_nz_px_py", "baf2_coolant_pipe_ny_nz_px_py", "baf2_coolant_pipe_nx_ny_nz_px_py", "baf2_coolant_pipe_pz", "baf2_coolant_pipe_nx_pz", "baf2_coolant_pipe_ny_pz", "baf2_coolant_pipe_nx_ny_pz", "baf2_coolant_pipe_nz_pz", "baf2_coolant_pipe_nx_nz_pz", "baf2_coolant_pipe_ny_nz_pz", "baf2_coolant_pipe_nx_ny_nz_pz", "baf2_coolant_pipe_px_pz", "baf2_coolant_pipe_nx_px_pz", "baf2_coolant_pipe_ny_px_pz", "baf2_coolant_pipe_nx_ny_px_pz", "baf2_coolant_pipe_nz_px_pz", "baf2_coolant_pipe_nx_nz_px_pz", "baf2_coolant_pipe_ny_nz_px_pz", "baf2_coolant_pipe_nx_ny_nz_px_pz", "baf2_coolant_pipe_py_pz", "baf2_coolant_pipe_nx_py_pz", "baf2_coolant_pipe_ny_py_pz", "baf2_coolant_pipe_nx_ny_py_pz", "baf2_coolant_pipe_nz_py_pz", "baf2_coolant_pipe_nx_nz_py_pz", "baf2_coolant_pipe_ny_nz_py_pz", "baf2_coolant_pipe_nx_ny_nz_py_pz", "baf2_coolant_pipe_px_py_pz", "baf2_coolant_pipe_nx_px_py_pz", "baf2_coolant_pipe_ny_px_py_pz", "baf2_coolant_pipe_nx_ny_px_py_pz", "baf2_coolant_pipe_nz_px_py_pz", "baf2_coolant_pipe_nx_nz_px_py_pz", "baf2_coolant_pipe_ny_nz_px_py_pz", "baf2_coolant_pipe_nx_ny_nz_px_py_pz", "Nova Trophy", "Nova Trophy", "Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Moonstone Pickaxe", "Golem Pickaxe", "Wood Axe", "Stone Axe", "Iron Axe", "Gold Axe", "Diamond Axe", "Moonstone Axe", "Artisan Axe", "Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", "Wood Sword", "Stone Sword", "Iron Sword", "Gold Sword", "Diamond Sword", "Knight Sword", "Wood Hoe", "Stone Hoe", "Iron Hoe", "Gold Hoe", "Diamond Hoe", "Flashlight", "Mining Helmet", "Wood Helmet", "Iron Helmet", "Gold Helmet", "Diamond Helmet", "Wood Chestplate", "Iron Chestplate", "Gold Chestplate", "Diamond Chestplate", "Fur Chestplate", "Wood Leggings", "Iron Leggings", "Gold Leggings", "Diamond Leggings", "Wood Boots", "Iron Boots", "Gold Boots", "Diamond Boots", "Spiked Boots", "Wood Gauntlets", "Iron Gauntlets", "Gold Gauntlets", "Diamond Gauntlets", "Military Helmet", "Military Chestplate", "Military Gauntlets", "Military Leggings", "Military Boots", "Shears", "Artisan Shears", "Stick", "Coal", "Raw Iron", "Iron Bar", "Iron Fragment", "Raw Gold", "Gold Bar", "Gold Fragment", "Diamond", "Diamond Fragment", "Moonstone", "Lunite", "Moonstone Fragment", "Bowl", "Partially Full Bowl of Cranberries", "Half Full Bowl of Cranberries", "Nearly Full Bowl of Cranberries", "Bowl of Cranberries", "Mushroom Soup", "Glowing Soup", "Night Vision Soup", "Cotton", "Gold Crop", "Bucket", "Water Bucket", "Lava Bucket", "Boat Item", "Boat", "Obsidian Boat Item", "Obsidian Boat", "Speedboat Item", "Speedboat", "Wood Hang Glider Item", "Wood Hang Glider", "Iron Hang Glider Item", "Iron Hang Glider", "Gold Hang Glider Item", "Gold Hang Glider", "Diamond Hang Glider Item", "Diamond Hang Glider", "Hovercraft Item", "Hovercraft", "Yellow Kart Item", "White Kart Item", "Red Kart Item", "Purple Kart Item", "Pink Kart Item", "Orange Kart Item", "Magenta Kart Item", "Lime Kart Item", "Light Gray Kart Item", "Light Blue Kart Item", "Green Kart Item", "Gray Kart Item", "Cyan Kart Item", "Brown Kart Item", "Blue Kart Item", "Black Kart Item", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black Kart", "Off Roader Item", "Off Roader", "Armored Car Item", "Gold Mining Drill", "Iron Mining Drill", "Diamond Mining Drill", "Moonstone Mining Drill", "Armored Car", "Car Item", "Car", "Snowball", "Pebble", "Reinforced Pebble", "Bullet", "Ball", "Reinforced Ball", "Frag Grenade", "Mining Grenade", "Smoke Grenade", "Moonstone Orb", "Fireball", "Bouncy Bomb", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Wood Bow", "Wood Bowmetacharging2", "Wood Bowmetacharging3", "Wood Bowmetacharging4", "Stone Bow", "Stone Bowmetacharging2", "Stone Bowmetacharging3", "Stone Bowmetacharging4", "Iron Bow", "Iron Bowmetacharging2", "Iron Bowmetacharging3", "Iron Bowmetacharging4", "Gold Bow", "Gold Bowmetacharging2", "Gold Bowmetacharging3", "Gold Bowmetacharging4", "Diamond Bow", "Diamond Bowmetacharging2", "Diamond Bowmetacharging3", "Diamond Bowmetacharging4", "Wood Crossbow", "Wood Crossbowmetacharging2", "Wood Crossbowmetacharging3", "Wood Crossbowmetacharging4", "Stone Crossbow", "Stone Crossbowmetacharging2", "Stone Crossbowmetacharging3", "Stone Crossbowmetacharging4", "Iron Crossbow", "Iron Crossbowmetacharging2", "Iron Crossbowmetacharging3", "Iron Crossbowmetacharging4", "Gold Crossbow", "Gold Crossbowmetacharging2", "Gold Crossbowmetacharging3", "Gold Crossbowmetacharging4", "Diamond Crossbow", "Diamond Crossbowmetacharging2", "Diamond Crossbowmetacharging3", "Diamond Crossbowmetacharging4", "Wood Crossbow Charged", "Stone Crossbow Charged", "Iron Crossbow Charged", "Gold Crossbow Charged", "Diamond Crossbow Charged", "Arrow", "Compass", "Compassmetadir2", "Compassmetadir3", "Compassmetadir4", "Compassmetadir5", "Compassmetadir6", "Compassmetadir7", "Compassmetadir8", "Compassmetadir9", "Compassmetadir10", "Compassmetadir11", "Compassmetadir12", "Chunk Map", "Bread", "Bowl of Rice", "Apple", "Plum", "Coconut", "Cracked Coconut", "Pear", "Cherry", "Banana", "Watermelon Slice", "Gold Watermelon Slice", "Melon Slice", "Gold Melon Slice", "Pumpkin Pie", "Corn", "Cornbread", "Chili Pepper", "Mango", "Carrot", "Gold Carrot", "Raw Potato", "Baked Potato", "Beetroot", "Raw Porkchop", "Cooked Porkchop", "Raw Beef", "Steak", "Raw Mutton", "Cooked Mutton", "Raw Venison", "Cooked Venison", "Rotten Flesh", "Rotten Brain", "Bone", "Bone Meal", "Leather", "Saddle", "Spirit Saddle", "Fur", "Golem Eye", "Knight Heart", "Teleport Heart", "Frost Shard", "Molten Cog", "Choir Bell", "Siege Core", "Flywheel", "Radiant Spark", "Brood Sac", "Bandolier", "Name Tag", "Book", "Empty Bottle", "Water Bottle", "Slowness Potion", "Splash Slowness Potion", "Arrow of Slowness", "Poison Potion", "Splash Poison Potion", "Arrow of Poison", "Weakness Potion", "Splash Weakness Potion", "Arrow of Weakness", "Instant Damage Potion", "Splash Instant Damage Potion", "Arrow of Instant Damage", "Milk Potion", "Splash Milk Potion", "Arrow of Milk", "Speed Potion", "Splash Speed Potion", "Arrow of Speed", "Defense Potion", "Splash Defense Potion", "Arrow of Defense", "Strength Potion", "Splash Strength Potion", "Arrow of Strength", "Invisibility Potion", "Splash Invisibility Potion", "Arrow of Invisibility", "Jump Potion", "Splash Jump Potion", "Arrow of Jumping", "Knockback Potion", "Splash Knockback Potion", "Arrow of Knockback", "Regeneration Potion", "Splash Regeneration Potion", "Arrow of Regeneration", "Instant Healing Potion", "Splash Instant Healing Potion", "Arrow of Instant Healing", "Haste Potion", "Splash Haste Potion", "Arrow of Haste", "Shield Potion", "Splash Shield Potion", "Arrow of Shield", "Double Jump Potion", "Splash Double Jump Potion", "Arrow of Double Jump", "Heat Resistance Potion", "Splash Heat Resistance Potion", "Arrow of Heat Resistance", "X-Ray Vision Potion", "Splash X-Ray Vision Potion", "Arrow of X-Ray Vision", "Mining Yield Potion", "Splash Mining Yield Potion", "Arrow of Mining Yield", "Brain Rot Potion", "Splash Brain Rot Potion", "Arrow of Brain Rot", "Chaos Potion", "Teleportation Potion", "Ammo", "AK-47", "M16", "MP40", "TAR-21", "M1911", "Double Barrel", "AWP", "Deagle", "Striker-12", "VSR", "DMR", "Minigun", "FMR", "SKAR", "Block-19", "Mini Izu", "GPMG", "Gold Coin", "Updraft", "Snowdash", "Floor Creator", "Moonstone Remote", "Ice Bridge", "Maple Planks Bridge", "Messy Stone Bridge", "Yellow Balloon Item", "White Balloon Item", "Red Balloon Item", "Purple Balloon Item", "Pink Balloon Item", "Orange Balloon Item", "Magenta Balloon Item", "Lime Balloon Item", "Light Gray Balloon Item", "Light Blue Balloon Item", "Green Balloon Item", "Gray Balloon Item", "Cyan Balloon Item", "Brown Balloon Item", "Blue Balloon Item", "Black Balloon Item", "Yellow Balloon", "White Balloon", "Red Balloon", "Purple Balloon", "Pink Balloon", "Orange Balloon", "Magenta Balloon", "Lime Balloon", "Light Gray Balloon", "Light Blue Balloon", "Green Balloon", "Gray Balloon", "Cyan Balloon", "Brown Balloon", "Blue Balloon", "Black Balloon", "Yellow Popup Tower", "White Popup Tower", "Red Popup Tower", "Purple Popup Tower", "Pink Popup Tower", "Orange Popup Tower", "Magenta Popup Tower", "Lime Popup Tower", "Light Gray Popup Tower", "Light Blue Popup Tower", "Green Popup Tower", "Gray Popup Tower", "Cyan Popup Tower", "Brown Popup Tower", "Blue Popup Tower", "Black Popup Tower", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Paintball", "White Paintball", "Red Paintball", "Purple Paintball", "Pink Paintball", "Orange Paintball", "Magenta Paintball", "Lime Paintball", "Light Gray Paintball", "Light Blue Paintball", "Green Paintball", "Gray Paintball", "Cyan Paintball", "Brown Paintball", "Blue Paintball", "Black Paintball", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Yellow Paintball Explosive Item", "White Paintball Explosive Item", "Red Paintball Explosive Item", "Purple Paintball Explosive Item", "Pink Paintball Explosive Item", "Orange Paintball Explosive Item", "Magenta Paintball Explosive Item", "Lime Paintball Explosive Item", "Light Gray Paintball Explosive Item", "Light Blue Paintball Explosive Item", "Green Paintball Explosive Item", "Gray Paintball Explosive Item", "Cyan Paintball Explosive Item", "Brown Paintball Explosive Item", "Blue Paintball Explosive Item", "Black Paintball Explosive Item", "Yellow Sticky Paintball Explosive Item", "White Sticky Paintball Explosive Item", "Red Sticky Paintball Explosive Item", "Purple Sticky Paintball Explosive Item", "Pink Sticky Paintball Explosive Item", "Orange Sticky Paintball Explosive Item", "Magenta Sticky Paintball Explosive Item", "Lime Sticky Paintball Explosive Item", "Light Gray Sticky Paintball Explosive Item", "Light Blue Sticky Paintball Explosive Item", "Green Sticky Paintball Explosive Item", "Gray Sticky Paintball Explosive Item", "Cyan Sticky Paintball Explosive Item", "Brown Sticky Paintball Explosive Item", "Blue Sticky Paintball Explosive Item", "Black Sticky Paintball Explosive Item", "Yellow Seeking Paintball Explosive Item", "White Seeking Paintball Explosive Item", "Red Seeking Paintball Explosive Item", "Purple Seeking Paintball Explosive Item", "Pink Seeking Paintball Explosive Item", "Orange Seeking Paintball Explosive Item", "Magenta Seeking Paintball Explosive Item", "Lime Seeking Paintball Explosive Item", "Light Gray Seeking Paintball Explosive Item", "Light Blue Seeking Paintball Explosive Item", "Green Seeking Paintball Explosive Item", "Gray Seeking Paintball Explosive Item", "Cyan Seeking Paintball Explosive Item", "Brown Seeking Paintball Explosive Item", "Blue Seeking Paintball Explosive Item", "Black Seeking Paintball Explosive Item", "Yellow Quick Paintball Explosive Item", "White Quick Paintball Explosive Item", "Red Quick Paintball Explosive Item", "Purple Quick Paintball Explosive Item", "Pink Quick Paintball Explosive Item", "Orange Quick Paintball Explosive Item", "Magenta Quick Paintball Explosive Item", "Lime Quick Paintball Explosive Item", "Light Gray Quick Paintball Explosive Item", "Light Blue Quick Paintball Explosive Item", "Green Quick Paintball Explosive Item", "Gray Quick Paintball Explosive Item", "Cyan Quick Paintball Explosive Item", "Brown Quick Paintball Explosive Item", "Blue Quick Paintball Explosive Item", "Black Quick Paintball Explosive Item", "Yellow Paint Bow", "Yellow Paint Bowmetacharging2", "Yellow Paint Bowmetacharging3", "Yellow Paint Bowmetacharging4", "White Paint Bow", "White Paint Bowmetacharging2", "White Paint Bowmetacharging3", "White Paint Bowmetacharging4", "Red Paint Bow", "Red Paint Bowmetacharging2", "Red Paint Bowmetacharging3", "Red Paint Bowmetacharging4", "Purple Paint Bow", "Purple Paint Bowmetacharging2", "Purple Paint Bowmetacharging3", "Purple Paint Bowmetacharging4", "Pink Paint Bow", "Pink Paint Bowmetacharging2", "Pink Paint Bowmetacharging3", "Pink Paint Bowmetacharging4", "Orange Paint Bow", "Orange Paint Bowmetacharging2", "Orange Paint Bowmetacharging3", "Orange Paint Bowmetacharging4", "Magenta Paint Bow", "Magenta Paint Bowmetacharging2", "Magenta Paint Bowmetacharging3", "Magenta Paint Bowmetacharging4", "Lime Paint Bow", "Lime Paint Bowmetacharging2", "Lime Paint Bowmetacharging3", "Lime Paint Bowmetacharging4", "Light Gray Paint Bow", "Light Gray Paint Bowmetacharging2", "Light Gray Paint Bowmetacharging3", "Light Gray Paint Bowmetacharging4", "Light Blue Paint Bow", "Light Blue Paint Bowmetacharging2", "Light Blue Paint Bowmetacharging3", "Light Blue Paint Bowmetacharging4", "Green Paint Bow", "Green Paint Bowmetacharging2", "Green Paint Bowmetacharging3", "Green Paint Bowmetacharging4", "Gray Paint Bow", "Gray Paint Bowmetacharging2", "Gray Paint Bowmetacharging3", "Gray Paint Bowmetacharging4", "Cyan Paint Bow", "Cyan Paint Bowmetacharging2", "Cyan Paint Bowmetacharging3", "Cyan Paint Bowmetacharging4", "Brown Paint Bow", "Brown Paint Bowmetacharging2", "Brown Paint Bowmetacharging3", "Brown Paint Bowmetacharging4", "Blue Paint Bow", "Blue Paint Bowmetacharging2", "Blue Paint Bowmetacharging3", "Blue Paint Bowmetacharging4", "Black Paint Bow", "Black Paint Bowmetacharging2", "Black Paint Bowmetacharging3", "Black Paint Bowmetacharging4", "Pig Spawn Orb", "Cow Spawn Orb", "Sheep Spawn Orb", "Horse Spawn Orb", "Camel Spawn Orb", "Iron Goofy Golem Spawn Orb", "Gold Goofy Golem Spawn Orb", "Diamond Goofy Golem Spawn Orb", "Moonstone Goofy Golem Spawn Orb", "Deer Spawn Orb", "Slime Spawn Orb", "Wolf Spawn Orb", "Wildcat Spawn Orb", "Spirit Golem Spawn Orb", "Spirit Wolf Spawn Orb", "Spirit Bear Spawn Orb", "Spirit Stag Spawn Orb", "Spirit Gorilla Spawn Orb", "Bear Spawn Orb", "Stag Spawn Orb", "Gold Watermelon Stag Spawn Orb", "Gorilla Spawn Orb", "Cave Golem Spawn Orb", "Draugr Zombie Spawn Orb", "Draugr Skeleton Spawn Orb", "Frost Golem Spawn Orb", "Frost Zombie Spawn Orb", "Frost Skeleton Spawn Orb", "Draugr Knight Spawn Orb", "Draugr Huntress Spawn Orb", "Magma Golem Spawn Orb", "Draugr Warper Spawn Orb", "Frost Wraith Spawn Orb", "Draugr Reaver Spawn Orb", "Stalker Spawn Orb", "Crone Spawn Orb", "Iron Guardian Spawn Orb", "Gold Guardian Spawn Orb", "Diamond Guardian Spawn Orb", "Moonstone Guardian Spawn Orb", "Tiki Terror Spawn Orb", "Mob Catcher", "Caught Mob Pig Default", "Caught Mob Cow Default", "Caught Mob Cow Cream", "Caught Mob Sheep Default", "Caught Mob Horse Default", "Caught Mob Horse Black", "Caught Mob Horse Brown", "Caught Mob Horse Cream", "Caught Mob Camel Default", "Caught Mob Camel Brown", "Caught Mob Iron_Goofy_Golem Default", "Caught Mob Iron_Goofy_Golem Flaking", "Caught Mob Iron_Goofy_Golem Patchy", "Caught Mob Iron_Goofy_Golem Shedding", "Caught Mob Iron_Goofy_Golem Bare", "Caught Mob Iron_Goofy_Golem Stone", "Caught Mob Gold_Goofy_Golem Default", "Caught Mob Gold_Goofy_Golem Flaking", "Caught Mob Gold_Goofy_Golem Patchy", "Caught Mob Gold_Goofy_Golem Shedding", "Caught Mob Gold_Goofy_Golem Bare", "Caught Mob Gold_Goofy_Golem Stone", "Caught Mob Diamond_Goofy_Golem Default", "Caught Mob Diamond_Goofy_Golem Flaking", "Caught Mob Diamond_Goofy_Golem Patchy", "Caught Mob Diamond_Goofy_Golem Shedding", "Caught Mob Diamond_Goofy_Golem Bare", "Caught Mob Diamond_Goofy_Golem Stone", "Caught Mob Moonstone_Goofy_Golem Default", "Caught Mob Moonstone_Goofy_Golem Flaking", "Caught Mob Moonstone_Goofy_Golem Patchy", "Caught Mob Moonstone_Goofy_Golem Shedding", "Caught Mob Moonstone_Goofy_Golem Bare", "Caught Mob Moonstone_Goofy_Golem Stone", "Caught Mob Deer Default", "Caught Mob Slime Default", "Caught Mob Wolf Default", "Caught Mob Wolf White", "Caught Mob Wolf Brown", "Caught Mob Wolf Grey", "Caught Mob Wolf Spectral", "Caught Mob Wildcat Default", "Caught Mob Wildcat Tabby", "Caught Mob Wildcat Grey", "Caught Mob Wildcat Black", "Caught Mob Wildcat Calico", "Caught Mob Wildcat Siamese", "Caught Mob Wildcat Leopard", "Caught Mob Spirit_Golem Default", "Caught Mob Spirit_Wolf Default", "Caught Mob Spirit_Bear Default", "Caught Mob Spirit_Stag Default", "Caught Mob Spirit_Gorilla Default", "Caught Mob Bear Default", "Caught Mob Stag Default", "Caught Mob Gold_Watermelon_Stag Default", "Caught Mob Gorilla Default", "Caught Mob Cave_Golem Default", "Caught Mob Cave_Golem Iron", "Caught Mob Draugr_Zombie Default", "Caught Mob Draugr_Zombie Longhairchestplate", "Caught Mob Draugr_Zombie Longhairclothed", "Caught Mob Draugr_Zombie Shorthairclothed", "Caught Mob Draugr_Skeleton Default", "Caught Mob Frost_Golem Default", "Caught Mob Frost_Zombie Default", "Caught Mob Frost_Zombie Longhairchestplate", "Caught Mob Frost_Zombie Shorthairclothed", "Caught Mob Frost_Skeleton Default", "Caught Mob Draugr_Knight Default", "Caught Mob Draugr_Huntress Default", "Caught Mob Magma_Golem Default", "Caught Mob Draugr_Warper Default", "Caught Mob Frost_Wraith Default", "Caught Mob Draugr_Reaver Default", "Caught Mob Stalker Default", "Caught Mob Stalker Crimson", "Caught Mob Stalker Frost", "Caught Mob Stalker Void", "Caught Mob Crone Default", "Caught Mob Iron_Guardian Default", "Caught Mob Gold_Guardian Default", "Caught Mob Diamond_Guardian Default", "Caught Mob Moonstone_Guardian Default", "Caught Mob Tiki_Terror Default", "Caught Mob Tiki_Terror Titan", "Caught Mob Tiki_Terror Tormentor", "Caught Mob Tiki_Terror Tyrant", "Timed Spike Bomb", "Timed Spike Bombmetacharging2", "Timed Spike Bombmetacharging3", "Timed Spike Bombmetacharging4", "Toxin Ball", "Aura XP Fragment", "Aura XP Orb", "Aura XP Potion", "Aura XP Potion II", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Arrow of Aura XP", "Firecracker", "Rainbow Firecracker", "Yellow Firecracker", "White Firecracker", "Red Firecracker", "Purple Firecracker", "Pink Firecracker", "Orange Firecracker", "Magenta Firecracker", "Lime Firecracker", "Light Gray Firecracker", "Light Blue Firecracker", "Green Firecracker", "Gray Firecracker", "Cyan Firecracker", "Brown Firecracker", "Blue Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "Yellow Firecracker Pebble", "White Firecracker Pebble", "Red Firecracker Pebble", "Purple Firecracker Pebble", "Pink Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Lime Firecracker Pebble", "Light Gray Firecracker Pebble", "Light Blue Firecracker Pebble", "Green Firecracker Pebble", "Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Brown Firecracker Pebble", "Blue Firecracker Pebble", "Black Firecracker Pebble", "WorldBuilder Wand", "Red Strongfish", "Green Strongfish", "Moon Strongfish", "Wheatfish", "Moonfish", "Bombfish", "Boomerang Fish", "Root Flounder", "Abyss Carp", "Boulder Bass", "Barnaclejaw", "Crystalized Wheatfish", "Darter", "Shadow Darter", "Electric Eel", "Grass Snapper", "Jungle Spinefish", "Mangler Catfish", "Mossback Arapaima", "Sandbelly Piranha", "Shadeback Ray", "Mudbelly Tilapia", "Mireback Carp", "Rotslab Eel", "Aether Minnow", "Murkborne Ray", "Eldertide Leviathan", "Oarfish", "Alpha Moon Strongfish", "Bamboo Catfish", "Blackwater Bream", "Blackwater Leviathan", "Boned Sturgeon", "Bull Shark", "Channel Sawfish", "Coastal Mullet", "Coelacanth", "Driftwood Catfish", "Eagle Ray", "Giant Grouper", "Giant Moray", "Giant Stingray", "Golden Mahseer", "Greenfin Loach", "Mangrove Herring", "Moonlit Boomerang Fish", "Moonstone Pupfish", "Mudline Perch", "Murk Stingray", "Needlefish", "Nomai Moray", "Pearlescent Moonfish", "Rainbow Guppy", "Red Snapper", "Reedglass Minnow", "Reef Sardine", "Root Perch", "Rust Scad", "Seahorse", "Snakehead", "Spined Stickleback", "Stone Grouper", "Sumpback Carp", "Sunset Minnow", "Tarpon", "Threadfin Bream", "Tri-Pointed Needlefish", "Game Dev Fish", "Armoured Searobin", "Ash Lionfish", "Barefrost Toothfish", "Blackfin Icefish", "Basalt Pipefish", "Brimstone Spikefish", "Cinder Leviathan", "Crowned Flame Angelfish", "Deepwater Lanternfish", "Driftice Capelin", "Ember Chub", "Embermark Wrasse", "Eviota Vader", "Frost Herring", "Frost Wolf Eel", "Frostpaint Notie", "Frozen Grenadier", "Giant Trevally", "Glacial Lanternfish", "Glacial Silverfish", "Heatwarp Flounder", "Hatchetfish", "Ice Spined Notothenia", "Iceshelf Skate", "Icy Sculpin", "Lavaflow Trout", "Lavawake Slopefish", "Magma Sardinella", "Magma Trout", "Marbled Moray Cod", "Molten Lotella Cod", "Northern Wolffish", "Paleice Rockcod", "Permafrost Halibut", "Pithead", "Polarflash Electron", "Pyroclast Eel", "Pyroscale Grouper", "Red Pyreside", "Rimesnouted Lancetfish", "Scorched Sunfish", "Scored Dace", "Silver Dragonfish", "Snow Haddock", "Volcanic Catfish", "Volcanic Semperi", "Rusty Rod", "Lucky Rod", "Sturdy Rod", "Jungle Rod", "Draugr Rod", "Cursed Rod", "Tangle Resistant Rod", "Speed Rod", "Carbon Rod", "Deep Sea Rod", "Master Rod", "Obsidian Rod", "Molten Magma Rod", "Frost Rod", "Black Ice Rod", "Mythic Rod", "Acorn", "Acorn Jelly", "Cow's Milk", "Cheese", "Caught Fish", "Fish Fillet", "Meaty Bone", "Blinding Pebble", "Sheep's Milk", "Yoghurt Pot", "Truffle", "Truffle Oil", "Oats", "Porridge", "Dates", "Date Pudding", "Poop", "Fertiliser", "Medkit", "Wood Spear", "Stone Spear", "Iron Spear", "Gold Spear", "Diamond Spear", "Moonstone Spear", "Wood Dagger", "Stone Dagger", "Iron Dagger", "Gold Dagger", "Diamond Dagger", "Moonstone Dagger", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", "Wood Club", "Stone Club", "Iron Club", "Gold Club", "Diamond Club", "Moonstone Club", "Wood Mace", "Stone Mace", "Iron Mace", "Gold Mace", "Diamond Mace", "Moonstone Mace", "Wood Whip", "Stone Whip", "Iron Whip", "Gold Whip", "Diamond Whip", "Moonstone Whip", "Beef Stew", "chicken", "coleslaw", "egg", "Fish N Chips", "Fried Rice", "lettuce", "omelette", "onion", "Red Cabbage", "Roast Dinner", "salad", "Stuffed Pepper", "sushi", "tomato", "Vegetable Soup", "clock_wood_midday", "clock_wood_midnight", "clock_wood_late_night", "clock_wood_sunrise", "clock_wood_early_day", "clock_wood_late_day", "clock_wood_sunset", "clock_wood_early_night", "clock_gold_midday", "clock_gold_midnight", "clock_gold_late_night", "clock_gold_sunrise", "clock_gold_early_day", "clock_gold_late_day", "clock_gold_sunset", "clock_gold_early_night", "Lucky Sword Upgrade", "Lucky Armour Upgrade", "Lucky Tools Upgrade", "Lucky Clover", "Void Net", "Lucky Bomb", "Unlucky Bomb", "Swap Orb", "Golden Lucky Clover", "amethite", "amethite_fragment", "amethite_pickaxe", "amethite_axe", "amethite_shovel", "amethite_sword", "amethite_hoe", "amethite_helmet", "amethite_chestplate", "amethite_leggings", "amethite_boots", "amethite_gauntlets", "amethite_bow", "amethite_bow_charging_2", "amethite_bow_charging_3", "amethite_bow_charging_4", "amethite_crossbow", "amethite_crossbow_charging_2", "amethite_crossbow_charging_3", "amethite_crossbow_charging_4", "amethite_crossbow_charged", "amethite_spear", "amethite_dagger", "amethite_boomerang", "amethite_club", "amethite_mace", "amethite_whip", "magmasteel", "magmasteel_fragment", "magmasteel_pickaxe", "magmasteel_axe", "magmasteel_shovel", "magmasteel_sword", "magmasteel_hoe", "magmasteel_helmet", "magmasteel_chestplate", "magmasteel_leggings", "magmasteel_boots", "magmasteel_gauntlets", "magmasteel_bow", "magmasteel_bow_charging_2", "magmasteel_bow_charging_3", "magmasteel_bow_charging_4", "magmasteel_crossbow", "magmasteel_crossbow_charging_2", "magmasteel_crossbow_charging_3", "magmasteel_crossbow_charging_4", "magmasteel_crossbow_charged", "magmasteel_spear", "magmasteel_dagger", "magmasteel_boomerang", "magmasteel_club", "magmasteel_mace", "magmasteel_whip", "rubellite", "rubellite_fragment", "rubellite_pickaxe", "rubellite_axe", "rubellite_shovel", "rubellite_sword", "rubellite_hoe", "rubellite_helmet", "rubellite_chestplate", "rubellite_leggings", "rubellite_boots", "rubellite_gauntlets", "rubellite_bow", "rubellite_bow_charging_2", "rubellite_bow_charging_3", "rubellite_bow_charging_4", "rubellite_crossbow", "rubellite_crossbow_charging_2", "rubellite_crossbow_charging_3", "rubellite_crossbow_charging_4", "rubellite_crossbow_charged", "rubellite_spear", "rubellite_dagger", "rubellite_boomerang", "rubellite_club", "rubellite_mace", "rubellite_whip", "serpentite", "serpentite_fragment", "serpentite_pickaxe", "serpentite_axe", "serpentite_shovel", "serpentite_sword", "serpentite_hoe", "serpentite_helmet", "serpentite_chestplate", "serpentite_leggings", "serpentite_boots", "serpentite_gauntlets", "serpentite_bow", "serpentite_bow_charging_2", "serpentite_bow_charging_3", "serpentite_bow_charging_4", "serpentite_crossbow", "serpentite_crossbow_charging_2", "serpentite_crossbow_charging_3", "serpentite_crossbow_charging_4", "serpentite_crossbow_charged", "serpentite_spear", "serpentite_dagger", "serpentite_boomerang", "serpentite_club", "serpentite_mace", "serpentite_whip", "cursemetal_helmet", "cursemetal_chestplate", "cursemetal_gauntlets", "cursemetal_leggings", "cursemetal_boots", "kingly_amethite_helmet", "kingly_amethite_chestplate", "kingly_amethite_gauntlets", "kingly_amethite_leggings", "kingly_amethite_boots", "kingly_diamond_helmet", "kingly_diamond_chestplate", "kingly_diamond_gauntlets", "kingly_diamond_leggings", "kingly_diamond_boots", "sanguine_shard", "sanguine_sword", "sanguine_bow", "sanguine_bow_charging_2", "sanguine_bow_charging_3", "sanguine_bow_charging_4", "sanguine_crossbow", "sanguine_crossbow_charging_2", "sanguine_crossbow_charging_3", "sanguine_crossbow_charging_4", "sanguine_crossbow_charged", "sanguine_spear", "sanguine_dagger", "sanguine_club", "sanguine_mace", "sanguine_whip", "sanguine_staff", "sanguine_helmet", "sanguine_chestplate", "sanguine_gauntlets", "sanguine_leggings", "sanguine_boots", "spectral_shard", "spectral_sword", "spectral_bow", "spectral_bow_charging_2", "spectral_bow_charging_3", "spectral_bow_charging_4", "spectral_crossbow", "spectral_crossbow_charging_2", "spectral_crossbow_charging_3", "spectral_crossbow_charging_4", "spectral_crossbow_charged", "spectral_spear", "spectral_dagger", "spectral_club", "spectral_mace", "spectral_whip", "spectral_staff", "spectral_helmet", "spectral_chestplate", "spectral_gauntlets", "spectral_leggings", "spectral_boots", "geo_shard", "geo_sword", "geo_bow", "geo_bow_charging_2", "geo_bow_charging_3", "geo_bow_charging_4", "geo_crossbow", "geo_crossbow_charging_2", "geo_crossbow_charging_3", "geo_crossbow_charging_4", "geo_crossbow_charged", "geo_spear", "geo_dagger", "geo_club", "geo_mace", "geo_whip", "geo_staff", "geo_helmet", "geo_chestplate", "geo_gauntlets", "geo_leggings", "geo_boots", "astral_shard", "astral_sword", "astral_bow", "astral_bow_charging_2", "astral_bow_charging_3", "astral_bow_charging_4", "astral_crossbow", "astral_crossbow_charging_2", "astral_crossbow_charging_3", "astral_crossbow_charging_4", "astral_crossbow_charged", "astral_spear", "astral_dagger", "astral_club", "astral_mace", "astral_whip", "astral_staff", "astral_helmet", "astral_chestplate", "astral_gauntlets", "astral_leggings", "astral_boots", "wooden_key", "stone_key", "iron_key", "gold_key", "diamond_key", "Goldheart Engine", "Deepbite Drill Tip", "Empty Fuel Cell", "Blackfire Fuel Cell", "Doom Rivet", "Doom Crest", "Raw Copper", "Copper Bar", "Iron Grit", "Gold Grit", "Copper Grit", "Charcoal", "Recall Beacon", "Iron Hammer", "Iron Plate", "Copper Wire", "Motor", "Machine Parts", "Relay Coil", "Deposit Seed (Copper)", "Deposit Seed (Gold)", "Deposit Seed (Voltite)", "Deposit Seed (Coal)", "Deposit Seed (Iron)", "Deposit Seed (Stone)", "Steel Bar", "Gold Plate", "Logic Board", "Machine Hull", "Raw Voltite", "Power Coupler", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Voltite Dust", "Voltite Cell", "Sky Pack", "Dusk Moss", "Star Alloy", "Moonstone Dust", "Comet Shard", "Comet Core", "Starbore Drill", "Core Tier 2", "Core Tier 3", "Core Tier 4", "Core Tier 5", "Core Tier 6", "Core Tier 7", "Core Tier 8", "Core Tier 9", "Core Tier 10", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots", "Wood Blade", "Wood Guard", "Wood Handle", "Stone Blade", "Stone Guard", "Stone Handle", "Iron Blade", "Iron Guard", "Iron Handle", "Gold Blade", "Gold Guard", "Gold Handle", "Diamond Blade", "Diamond Guard", "Diamond Handle", "Moonstone Blade", "Moonstone Guard", "Moonstone Handle", "Magmasteel Blade", "Magmasteel Guard", "Magmasteel Handle", "Sanguine Blade", "Sanguine Guard", "Sanguine Handle", "Astral Blade", "Astral Guard", "Astral Handle", "Moonstone Sword", "Magmaward Fuel", "Raw Uranium", "Uranium Grit", "Uranium Pellet", "Plutonium Pellet", "Spent Pellet", "Glow Dust", "Biomass", "Graphite", "Containment Plate", "Heat Exchanger", "Focus Lens", "Nova Matter", "Deposit Seed (Uranium)", "Reactor Blueprint", "Wrench", "Advanced Coupler", "Nova Coupler", "Core Tier 11", "Core Tier 12", "Core Tier 13", "Core Tier 14", "Core Tier 15", "Jet Chestplate", "Nova Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Mob Cage", "Caged Pig", "Caged Cow", "Caged Sheep", "Caged Deer", "Caged Stag", "Nova Multitool", "Pocket Terminal", "Comet Beacon", "Nova Wrench", "Player/Player_Model", "Player/Player_Reconstructed", "Pig/Pig_Model", "Cow/Cow_Model", "Sheep/Sheep_Model", "Horse/Horse_Model", "Camel/Camel_Model", "Iron Goofy Golem/Iron Goofy Golem_Model", "Deer/Deer_Model", "Slime/Slime_Model", "Wolf/Wolf_Model", "Wildcat/Wildcat_Model", "Cave Golem/Cave Golem_Model", "Bear/Bear_Model", "Stag/Stag_Model", "Gorilla/Gorilla_Model", "Draugr Zombie/Draugr Zombie_Model", "Draugr Skeleton/Draugr Skeleton_Model", "Draugr Knight/Draugr Knight_Model", "Draugr Warper/Draugr Warper_Model", "Frost Wraith/Frost Wraith_Model", "Draugr Reaver/Draugr Reaver_Model", "Stalker/Stalker_Model", "Crone/Crone_Model", "Iron Guardian/Iron Guardian_Model", "Iron Guardian/Iron Guardian_Reconstructed", "Gold Guardian/Gold Guardian_Model", "Gold Guardian/Gold Guardian_Reconstructed", "Diamond Guardian/Diamond Guardian_Model", "Diamond Guardian/Diamond Guardian_Reconstructed", "Moonstone Guardian/Moonstone Guardian_Model", "Moonstone Guardian/Moonstone Guardian_Reconstructed", "Tiki Terror/Tiki Terror_Model", "Tiki Terror/Tiki Terror_Reconstructed", "67/67_Model", "67/67_Reconstructed", "Bobino Musculino/Bobino Musculino_Model", "Bobino Musculino/Bobino Musculino_Reconstructed", "Capitano Explovissimo/Capitano Explovissimo_Model", "Capitano Explovissimo/Capitano Explovissimo_Reconstructed", "Desert Fennec/Desert Fennec_Model", "Armour Collector/Armour Collector_Model", "Armour Collector/Armour Collector_Reconstructed", "Furnace Knight/Furnace Knight_Model", "Furnace Knight/Furnace Knight_Reconstructed", "Lil Knight/Lil Knight_Model", "Lil Knight/Lil Knight_Reconstructed", "Glass Gremlin/Glass Gremlin_Model", "Glass Gremlin/Glass Gremlin_Reconstructed", "Glass Bro/Glass Bro_Model", "Glass Bro/Glass Bro_Reconstructed", "Lord Vulcan/Lord Vulcan_Model", "Lord Vulcan/Lord Vulcan_Reconstructed", "Zombie/Zombie_Model", "Zombie/Zombie_Reconstructed", "Skeleton/Skeleton_Model", "Skeleton/Skeleton_Reconstructed", "Mummy/Mummy_Model", "Mummy/Mummy_Reconstructed", "Scorpion/Scorpion_Model", "Vulcanite/Vulcanite_Model", "Vulcanite/Vulcanite_Reconstructed", "Evil Tome/Evil Tome_Model", "Magma Toad/Magma Toad_Model", "Player/astro_set_1_attachable", "Player/astro_set_2_attachable", "Player/astro_set_3_attachable", "Player/astro_set_4_attachable", "Player/beaver_lumberjack", "Player/bee_set_1_attachable", "Player/bee_set_2_attachable", "Player/bee_set_3_attachable", "Player/bee_set_4_attachable", "Player/cape_cuboid_18_12", "Player/chef_attachables", "Player/christmas_elf_attachable", "Player/christmas_snowman_attachable", "Player/dwarf_blue_hair", "Player/dwarf_braided_hair", "Player/dwarf_child", "Player/dwarf_forked_beard", "Player/dwarf_ginger_beard", "Player/dwarf_grey_beard", "Player/dwarf_hair_buns", "Player/dwarf_purple_beard", "Player/dwarf_red_hair", "Player/dwarf_short_beard", "Player/farmer_gill_attachable", "Player/farmer_head", "Player/fire_mage_attachable", "Player/forge_mother", "Player/furry_bear_attachables", "Player/furry_kitsune_attachables", "Player/furry_kitsune_tail_single", "Player/furry_kitsune_tails", "Player/furry_shark_attachables", "Player/furry_shark_tail", "Player/furry_wolfKnight_attachables", "Player/furry_wolfKnight_tail", "Player/general_attachable", "Player/goblin_goggles", "Player/goblin_mad_scientist", "Player/highSociety_set_1_attachable", "Player/highSociety_set_2_attachable", "Player/highSociety_set_3_attachable", "Player/highSociety_set_4_attachable", "Player/human_archer", "Player/human_desert_guard", "Player/human_sentry", "Player/ice_wings_attachable", "Player/jackal_priest", "Player/jetpack_attachable", "Player/medieval_set_1_attachable", "Player/medieval_set_2_attachable", "Player/medieval_set_3_attachable", "Player/medieval_set_4_attachable", "Player/mining_helmet_attachable", "Player/minotaur", "Player/minotaur_elder", "Player/minotaur_warrior", "Player/monster_hunter_lorenzo_attachable", "Player/npc_pig_head", "Player/painter_spencer_attachable", "Player/pet_reindeer", "Player/pig_napoleon", "Player/pig_worker_attachable", "Player/piggy_banker_head", "Player/portal_mage_hat", "Player/rabbit_aristocrat_attachable", "Player/skis_attachable", "Player/smuglyn_attachable", "Player/spring_set_1_attachable", "Player/spring_set_2_attachable", "Player/spring_set_3_attachable", "Player/spring_set_4_attachable", "Player/tentacle_boy", "Player/tentacle_guy_attachable", "Player/tentacle_guy_fisherman_attachable", "Player/trader_cowl_black", "Player/trader_cowl_blue", "Player/ugly_sweater_attachable", "Player/wolf_in_suit_attachable", "Player/wolf_security", "Player/y2k_set_1_attachable", "Player/y2k_set_2_attachable", "Player/y2k_set_3_attachable", "Player/y2k_set_4_attachable"],
      NW = {
        b: "block",
        s: "static",
        l: "lifeform"
      };

    function PW(WW) {
      var iW;
      return null !== (iW = NW[mW.charAt(WW).toLowerCase()]) && void 0 !== iW ? iW : null
    }

    function LW(WW) {
      var iW;
      const OW = mW.charAt(WW);
      return "" !== OW && OW === OW.toUpperCase() && null !== (iW = EW[WW].split("/").pop()) && void 0 !== iW ? iW : null
    }

    function cW(WW, iW) {
      const mW = EW[WW];
      switch (PW(WW)) {
        case "block":
          return OW(44927)(`./${mW}.glb`);
        case "static":
          return `${iW}/models/${mW}.glb`;
        case "lifeform":
          return OW(49391)(`./${mW}.glb`);
        default:
          return null
      }
    }
    const wW = ["Player/Player_Atlas", "Pig/Pig_Atlas", "Cow/Cow_Atlas", "Sheep/Sheep_Atlas", "Horse/Horse_Atlas", "Camel/Camel_Atlas", "Iron Goofy Golem/Iron Goofy Golem_Atlas", "Gold Goofy Golem/Gold Goofy Golem_Atlas", "Diamond Goofy Golem/Diamond Goofy Golem_Atlas", "Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas", "Deer/Deer_Atlas", "Slime/Slime_Atlas", "Wolf/Wolf_Atlas", "Wildcat/Wildcat_Atlas", "Spirit Golem/Spirit Golem_Atlas", "Spirit Wolf/Spirit Wolf_Atlas", "Spirit Bear/Spirit Bear_Atlas", "Spirit Stag/Spirit Stag_Atlas", "Spirit Gorilla/Spirit Gorilla_Atlas", "Bear/Bear_Atlas", "Stag/Stag_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Atlas", "Gorilla/Gorilla_Atlas", "Cave Golem/Cave Golem_Atlas", "Draugr Zombie/Draugr Zombie_Atlas", "Draugr Skeleton/Draugr Skeleton_Atlas", "Frost Golem/Frost Golem_Atlas", "Frost Zombie/Frost Zombie_Atlas", "Frost Skeleton/Frost Skeleton_Atlas", "Draugr Knight/Draugr Knight_Atlas", "Draugr Huntress/Draugr Huntress_Atlas", "Magma Golem/Magma Golem_Atlas", "Draugr Warper/Draugr Warper_Atlas", "Frost Wraith/Frost Wraith_Atlas", "Draugr Reaver/Draugr Reaver_Atlas", "Stalker/Stalker_Atlas", "Crone/Crone_Atlas", "Iron Guardian/Iron Guardian_Atlas", "Gold Guardian/Gold Guardian_Atlas", "Diamond Guardian/Diamond Guardian_Atlas", "Moonstone Guardian/Moonstone Guardian_Atlas", "Tiki Terror/Tiki Terror_Atlas", "Player/Player_Atlas", "67/67_Atlas", "Bobino Musculino/Bobino Musculino_Atlas", "Capitano Explovissimo/Capitano Explovissimo_Atlas", "Desert Fennec/Desert Fennec_Atlas", "Armour Collector/Armour Collector_Atlas", "Furnace Knight/Furnace Knight_Atlas", "Lil Knight/Lil Knight_Atlas", "Glass Gremlin/Glass Gremlin_Atlas", "Glass Bro/Glass Bro_Atlas", "Lord Vulcan/Lord Vulcan_Atlas", "Zombie/Zombie_Atlas", "Skeleton/Skeleton_Atlas", "Mummy/Mummy_Atlas", "Scorpion/Scorpion_Atlas", "Vulcanite/Vulcanite_Atlas", "Evil Tome/Evil Tome_Atlas", "Magma Toad/Magma Toad_Atlas"];

    function tW(WW) {
      const iW = wW[WW];
      return iW ? OW(50255)(`./${iW}.png`) : null
    }
    const ZW = 2411,
      xW = ["Sheep/SheepWool_Atlas", "Horse/HorseSaddle_Atlas", "Camel/CamelSaddle_Atlas", "Deer/DeerAntlers_Atlas", "Wolf/WolfCollar_Atlas", "Wildcat/WildcatCollar_Atlas", "Spirit Wolf/Spirit WolfCollar_Atlas", "Spirit Bear/Spirit BearSaddle_Atlas", "Spirit Stag/Spirit StagSaddle_Atlas", "Spirit Gorilla/Spirit GorillaSaddle_Atlas", "Bear/BearSaddle_Atlas", "Stag/StagSaddle_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Armour", "Gorilla/GorillaSaddle_Atlas"];

    function lW(WW) {
      const iW = xW[WW];
      return iW ? OW(50255)(`./${iW}.png`) : null
    }
    const AW = ["none", "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep", "creator_level1", "creator_level2", "creator_level3"];

    function bW(WW) {
      const iW = AW[WW];
      return iW ? OW(52029)(`./cape_${iW}.png`) : null
    }
    const jW = ["Player_Atlas", "astro_set_1_attachable", "astro_set_2_attachable", "astro_set_3_attachable", "astro_set_4_attachable", "beaver_lumberjack", "bee_set_1_attachable", "bee_set_2_attachable", "bee_set_3_attachable_blue", "bee_set_3_attachable_green", "bee_set_3_attachable_red", "bee_set_4_attachable", "chef_attachables", "christmas_elf_attachable", "christmas_snowman_attachable", "dwarf_blue_hair", "dwarf_braided_hair", "dwarf_child", "dwarf_forked_beard", "dwarf_ginger_beard", "dwarf_grey_beard", "dwarf_hair_buns", "dwarf_purple_beard", "dwarf_red_hair", "dwarf_short_beard", "farmer_gill_attachable", "farmer_head", "fire_mage_attachable", "forge_mother", "furry_bear_attachables", "furry_kitsune_attachables", "furry_kitsune_tail_single", "furry_kitsune_tails", "furry_shark_attachables", "furry_shark_tail", "furry_wolfKnight_attachables", "furry_wolfKnight_tail", "general_attachable", "goblin_goggles", "goblin_mad_scientist", "highSociety_set_1_attachable", "highSociety_set_2_attachable", "highSociety_set_3_attachable", "highSociety_set_4_attachable", "human_archer", "human_desert_guard", "human_sentry", "ice_wings_attachable", "jackal_priest", "jetpack_attachable", "medieval_set_1_attachable_blue", "medieval_set_1_attachable_green", "medieval_set_1_attachable_purple", "medieval_set_1_attachable_red", "medieval_set_1_attachable_yellow", "medieval_set_2_attachable_blue", "medieval_set_2_attachable_purple", "medieval_set_2_attachable_red", "medieval_set_3_attachable_green", "medieval_set_3_attachable_pink", "medieval_set_3_attachable_purple", "medieval_set_3_attachable_red", "medieval_set_4_attachable_blue", "medieval_set_4_attachable_hair", "medieval_set_4_attachable_purple", "medieval_set_4_attachable_red", "mining_helmet_attachable", "minotaur", "minotaur_elder", "minotaur_warrior", "monster_hunter_lorenzo_attachable", "nova_jetpack_attachable", "npc_pig_head", "painter_spencer_attachable", "pet_reindeer", "pig_napoleon", "pig_worker_attachable", "piggy_banker_head", "portal_mage_hat", "rabbit_aristocrat_attachable", "skis_attachable", "smuglyn_attachable", "spring_set_1_attachable", "spring_set_2_attachable", "spring_set_3_attachable", "spring_set_4_attachable", "tentacle_boy", "tentacle_girl_attachable", "tentacle_guy_attachable", "tentacle_guy_fisherman_attachable", "trader_cowl_black", "trader_cowl_blue", "ugly_sweater_attachable", "wolf_in_suit_attachable", "wolf_security", "y2k_set_1_attachable", "y2k_set_2_attachable", "y2k_set_3_attachable", "y2k_set_4_attachable"];

    function UW(WW) {
      const iW = jW[WW];
      return iW ? OW(52036)(`./${iW}.png`) : null
    }
    const kW = new Map([
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
      sW = [{
        name: "allium",
        url: () => OW(52042)
      }, {
        name: "aspen_sapling",
        url: () => OW(52051)
      }, {
        name: "attached_banana_stem",
        url: () => OW(52056)
      }, {
        name: "attached_banana_stem_wrapper",
        url: () => OW(52065)
      }, {
        name: "attached_melon_stem",
        url: () => OW(52068)
      }, {
        name: "attached_melon_stem_wrapper",
        url: () => OW(52070)
      }, {
        name: "autumn_fern",
        url: () => OW(52074)
      }, {
        name: "azure_bluet",
        url: () => OW(52078)
      }, {
        name: "banana_stem",
        url: () => OW(52081)
      }, {
        name: "beetroot_plant_stage0",
        url: () => OW(52087)
      }, {
        name: "beetroot_plant_stage1",
        url: () => OW(52090)
      }, {
        name: "beetroot_plant_stage2",
        url: () => OW(52098)
      }, {
        name: "berry_bush_stage0",
        url: () => OW(52101)
      }, {
        name: "berry_bush_stage1",
        url: () => OW(52107)
      }, {
        name: "berry_bush_stage2",
        url: () => OW(52114)
      }, {
        name: "blue_orchid",
        url: () => OW(52118)
      }, {
        name: "blueberry_bush_stage0",
        url: () => OW(52121)
      }, {
        name: "blueberry_bush_stage1",
        url: () => OW(52123)
      }, {
        name: "blueberry_bush_stage2",
        url: () => OW(52132)
      }, {
        name: "brown_mushroom",
        url: () => OW(52135)
      }, {
        name: "carrot_plant_stage0",
        url: () => OW(52140)
      }, {
        name: "carrot_plant_stage1",
        url: () => OW(52149)
      }, {
        name: "carrot_plant_stage2",
        url: () => OW(52155)
      }, {
        name: "catnip",
        url: () => OW(52164)
      }, {
        name: "cauliflower_plant_stage0",
        url: () => OW(52166)
      }, {
        name: "cauliflower_plant_stage1",
        url: () => OW(52173)
      }, {
        name: "cauliflower_plant_stage2",
        url: () => OW(52180)
      }, {
        name: "cedar_sapling",
        url: () => OW(52184)
      }, {
        name: "cherry_sapling",
        url: () => OW(52193)
      }, {
        name: "cobweb",
        url: () => OW(52200)
      }, {
        name: "coffee_plant_stage0",
        url: () => OW(52206)
      }, {
        name: "coffee_plant_stage1",
        url: () => OW(52211)
      }, {
        name: "coffee_plant_stage2",
        url: () => OW(52220)
      }, {
        name: "corn_stage0",
        url: () => OW(52225)
      }, {
        name: "corn_stage1",
        url: () => OW(52233)
      }, {
        name: "corn_stage2",
        url: () => OW(52240)
      }, {
        name: "corn_stage3",
        url: () => OW(52247)
      }, {
        name: "corn_stage4",
        url: () => OW(52249)
      }, {
        name: "corn_stage5",
        url: () => OW(52251)
      }, {
        name: "cornflower",
        url: () => OW(52254)
      }, {
        name: "cotton_plant_stage0",
        url: () => OW(52258)
      }, {
        name: "cotton_plant_stage1",
        url: () => OW(52263)
      }, {
        name: "cotton_plant_stage2",
        url: () => OW(52271)
      }, {
        name: "cotton_plant_stage3",
        url: () => OW(52275)
      }, {
        name: "dandelion",
        url: () => OW(52279)
      }, {
        name: "dead_bush",
        url: () => OW(52287)
      }, {
        name: "fallen_pine_cone",
        url: () => OW(52293)
      }, {
        name: "jungle_sapling",
        url: () => OW(52295)
      }, {
        name: "jungle_tall_grass_bottom",
        url: () => OW(52297)
      }, {
        name: "jungle_tall_grass_top",
        url: () => OW(52303)
      }, {
        name: "lettuce_plant_stage0",
        url: () => OW(52305)
      }, {
        name: "lettuce_plant_stage1",
        url: () => OW(52311)
      }, {
        name: "lettuce_plant_stage2",
        url: () => OW(52313)
      }, {
        name: "lily_of_the_valley",
        url: () => OW(52318)
      }, {
        name: "mango_sapling",
        url: () => OW(52327)
      }, {
        name: "maple_sapling",
        url: () => OW(52334)
      }, {
        name: "melon_stem",
        url: () => OW(52337)
      }, {
        name: "net",
        url: () => OW(52345)
      }, {
        name: "orange_tulip",
        url: () => OW(52352)
      }, {
        name: "oxeye_daisy",
        url: () => OW(52360)
      }, {
        name: "palm_sapling",
        url: () => OW(52366)
      }, {
        name: "parsnip_plant_stage0",
        url: () => OW(52375)
      }, {
        name: "parsnip_plant_stage1",
        url: () => OW(52382)
      }, {
        name: "parsnip_plant_stage2",
        url: () => OW(52390)
      }, {
        name: "pear_sapling",
        url: () => OW(52397)
      }, {
        name: "pine_fern",
        url: () => OW(52403)
      }, {
        name: "pine_grass",
        url: () => OW(52405)
      }, {
        name: "pine_sapling",
        url: () => OW(52411)
      }, {
        name: "pink_tulip",
        url: () => OW(52413)
      }, {
        name: "plum_sapling",
        url: () => OW(52421)
      }, {
        name: "poppy",
        url: () => OW(52427)
      }, {
        name: "potato_plant_stage0",
        url: () => OW(52436)
      }, {
        name: "potato_plant_stage1",
        url: () => OW(52444)
      }, {
        name: "potato_plant_stage2",
        url: () => OW(52449)
      }, {
        name: "red_cabbage_stage0",
        url: () => OW(52458)
      }, {
        name: "red_cabbage_stage1",
        url: () => OW(52460)
      }, {
        name: "red_cabbage_stage2",
        url: () => OW(52462)
      }, {
        name: "red_mushroom",
        url: () => OW(52468)
      }, {
        name: "red_tulip",
        url: () => OW(52470)
      }, {
        name: "rice_stage0",
        url: () => OW(52475)
      }, {
        name: "rice_stage2",
        url: () => OW(52480)
      }, {
        name: "rice_stage3",
        url: () => OW(52486)
      }, {
        name: "rice_stage4",
        url: () => OW(52494)
      }, {
        name: "rice_stage5",
        url: () => OW(52497)
      }, {
        name: "rice_stage6",
        url: () => OW(52506)
      }, {
        name: "rice_stage7",
        url: () => OW(52514)
      }, {
        name: "shadow_rose",
        url: () => OW(52522)
      }, {
        name: "small_cactus",
        url: () => OW(52530)
      }, {
        name: "spectral_grass",
        url: () => OW(52538)
      }, {
        name: "spectral_sapling",
        url: () => OW(52544)
      }, {
        name: "strawberry_bush_stage0",
        url: () => OW(52549)
      }, {
        name: "strawberry_bush_stage1",
        url: () => OW(52552)
      }, {
        name: "strawberry_bush_stage2",
        url: () => OW(52556)
      }, {
        name: "sugar_cane_plant_stage0",
        url: () => OW(52561)
      }, {
        name: "sugar_cane_plant_stage1",
        url: () => OW(52568)
      }, {
        name: "sugar_cane_plant_stage2",
        url: () => OW(52574)
      }, {
        name: "sugar_cane_plant_stage2_top",
        url: () => OW(52578)
      }, {
        name: "tall_grass_bottom",
        url: () => OW(52582)
      }, {
        name: "tall_grass_top",
        url: () => OW(52589)
      }, {
        name: "tallgrass",
        url: () => OW(52598)
      }, {
        name: "tomato_plant_stage0",
        url: () => OW(52606)
      }, {
        name: "tomato_plant_stage1",
        url: () => OW(52611)
      }, {
        name: "tomato_plant_stage2",
        url: () => OW(52617)
      }, {
        name: "tomato_plant_stage2_top",
        url: () => OW(52621)
      }, {
        name: "wheat_stage0",
        url: () => OW(52629)
      }, {
        name: "wheat_stage2",
        url: () => OW(52637)
      }, {
        name: "wheat_stage3",
        url: () => OW(52642)
      }, {
        name: "wheat_stage4",
        url: () => OW(52648)
      }, {
        name: "wheat_stage5",
        url: () => OW(52655)
      }, {
        name: "wheat_stage6",
        url: () => OW(52659)
      }, {
        name: "wheat_stage7",
        url: () => OW(52662)
      }, {
        name: "white_tulip",
        url: () => OW(52669)
      }, {
        name: "coolant_mixer_top",
        url: () => OW(52673)
      }, {
        name: "smelter_top",
        url: () => OW(52675)
      }, {
        name: "yellow_glazed_terracotta",
        url: () => OW(52682)
      }, {
        name: "shop_wizard_spawn_top",
        url: () => OW(52689)
      }, {
        name: "light_blue_spawn_block_top",
        url: () => OW(52695)
      }, {
        name: "torch_blue_block",
        url: () => OW(52698)
      }, {
        name: "destroy_stage_5",
        url: () => OW(52702)
      }, {
        name: "destroy_stage_4",
        url: () => OW(52704)
      }, {
        name: "auto_bench_top",
        url: () => OW(52713)
      }, {
        name: "destroy_stage_7",
        url: () => OW(52719)
      }, {
        name: "destroy_stage_6",
        url: () => OW(52722)
      }, {
        name: "shop_trader_spawn_top",
        url: () => OW(52728)
      }, {
        name: "cobblestone_mossy",
        url: () => OW(52733)
      }, {
        name: "checkpoint_block",
        url: () => OW(52739)
      }, {
        name: "destroy_stage_1",
        url: () => OW(52745)
      }, {
        name: "destroy_stage_0",
        url: () => OW(52749)
      }, {
        name: "destroy_stage_3",
        url: () => OW(52751)
      }, {
        name: "destroy_stage_2",
        url: () => OW(52755)
      }, {
        name: "centrifuge_top",
        url: () => OW(52764)
      }, {
        name: "destroy_stage_9",
        url: () => OW(52771)
      }, {
        name: "destroy_stage_8",
        url: () => OW(52776)
      }, {
        name: "mango_door_bottom",
        url: () => OW(52778)
      }, {
        name: "moonstone_chest_top",
        url: () => OW(52786)
      }, {
        name: "lime_glazed_terracotta",
        url: () => OW(52788)
      }, {
        name: "burner_drill_top",
        url: () => OW(52793)
      }, {
        name: "light_gray_spawn_block_top",
        url: () => OW(52797)
      }, {
        name: "football_block",
        url: () => OW(52803)
      }, {
        name: "purple_spawn_block_top",
        url: () => OW(52807)
      }, {
        name: "black_stained_glass",
        url: () => OW(52814)
      }, {
        name: "pear_door_bottom",
        url: () => OW(52822)
      }, {
        name: "custom_lobby_block_top",
        url: () => OW(52831)
      }, {
        name: "maple_door_bottom",
        url: () => OW(52840)
      }, {
        name: "crusher_top",
        url: () => OW(52843)
      }, {
        name: "torch_orange_block",
        url: () => OW(52845)
      }, {
        name: "wireless_terminal_top",
        url: () => OW(52854)
      }, {
        name: "recycler_top",
        url: () => OW(52863)
      }, {
        name: "condenser_top",
        url: () => OW(52865)
      }, {
        name: "light_blue_glazed_terracotta",
        url: () => OW(52872)
      }, {
        name: "electric_drill_top",
        url: () => OW(52874)
      }, {
        name: "brown_glazed_terracotta",
        url: () => OW(52882)
      }, {
        name: "green_glazed_terracotta",
        url: () => OW(52886)
      }, {
        name: "cactus_side",
        url: () => OW(52893)
      }, {
        name: "water",
        url: () => OW(52898)
      }, {
        name: "gray_glazed_terracotta",
        url: () => OW(52907)
      }, {
        name: "jungle_door_bottom",
        url: () => OW(52911)
      }, {
        name: "plum_door_top",
        url: () => OW(52916)
      }, {
        name: "red_glazed_terracotta",
        url: () => OW(52925)
      }, {
        name: "orange_spawn_block_top",
        url: () => OW(52928)
      }, {
        name: "belt_tunnel_top",
        url: () => OW(52937)
      }, {
        name: "palm_door_bottom",
        url: () => OW(52939)
      }, {
        name: "maple_door_top",
        url: () => OW(52941)
      }, {
        name: "iron_chest_bottom",
        url: () => OW(52948)
      }, {
        name: "wool_colored_silver",
        url: () => OW(52957)
      }, {
        name: "moonstone_chest_bottom",
        url: () => OW(52962)
      }, {
        name: "sky_tap_top",
        url: () => OW(52971)
      }, {
        name: "palm_door_top",
        url: () => OW(52974)
      }, {
        name: "torch_red_block",
        url: () => OW(52980)
      }, {
        name: "rice_stage1",
        url: () => OW(52984)
      }, {
        name: "shatter_mill_top",
        url: () => OW(52986)
      }, {
        name: "white_spawn_block_top",
        url: () => OW(52994)
      }, {
        name: "pink_spawn_block_top",
        url: () => OW(53001)
      }, {
        name: "orange_glazed_terracotta",
        url: () => OW(53009)
      }, {
        name: "lime_spawn_block_top",
        url: () => OW(53014)
      }, {
        name: "jungle_door_top",
        url: () => OW(53019)
      }, {
        name: "wheat_stage1",
        url: () => OW(53028)
      }, {
        name: "alloy_kiln_top",
        url: () => OW(53031)
      }, {
        name: "light_gray_stained_glass",
        url: () => OW(53039)
      }, {
        name: "cherry_door_bottom",
        url: () => OW(53047)
      }, {
        name: "gray_spawn_block_top",
        url: () => OW(53051)
      }, {
        name: "brown_spawn_block_top",
        url: () => OW(53057)
      }, {
        name: "mango_door_top",
        url: () => OW(53062)
      }, {
        name: "pine_door_top",
        url: () => OW(53067)
      }, {
        name: "cherry_door_top",
        url: () => OW(53070)
      }, {
        name: "pine_door_bottom",
        url: () => OW(53076)
      }, {
        name: "press_top",
        url: () => OW(53081)
      }, {
        name: "pink_glazed_terracotta",
        url: () => OW(53088)
      }, {
        name: "purple_glazed_terracotta",
        url: () => OW(53093)
      }, {
        name: "crop_harvester_top",
        url: () => OW(53099)
      }, {
        name: "collider_top",
        url: () => OW(53106)
      }, {
        name: "aspen_door_top",
        url: () => OW(53113)
      }, {
        name: "banana_block_bottom",
        url: () => OW(53117)
      }, {
        name: "crystal_vat_top",
        url: () => OW(53126)
      }, {
        name: "iron_chest_top",
        url: () => OW(53133)
      }, {
        name: "chest_top",
        url: () => OW(53140)
      }, {
        name: "wire_mill_top",
        url: () => OW(53147)
      }, {
        name: "tree_cutter_top",
        url: () => OW(53153)
      }, {
        name: "cedar_door_top",
        url: () => OW(53159)
      }, {
        name: "black_spawn_block_top",
        url: () => OW(53168)
      }, {
        name: "camel_painting_art",
        url: () => OW(53176)
      }, {
        name: "pear_door_top",
        url: () => OW(53178)
      }, {
        name: "blue_spawn_block_top",
        url: () => OW(53186)
      }, {
        name: "magenta_glazed_terracotta",
        url: () => OW(53191)
      }, {
        name: "radar_screen0",
        url: () => OW(53200)
      }, {
        name: "radar_screen1",
        url: () => OW(53207)
      }, {
        name: "radar_screen2",
        url: () => OW(53209)
      }, {
        name: "radar_screen3",
        url: () => OW(53218)
      }, {
        name: "light_gray_glazed_terracotta",
        url: () => OW(53221)
      }, {
        name: "yellow_spawn_block_top",
        url: () => OW(53228)
      }, {
        name: "belt_tunnel_exit_top",
        url: () => OW(53234)
      }, {
        name: "green_spawn_block_top",
        url: () => OW(53240)
      }, {
        name: "aspen_door_bottom",
        url: () => OW(53244)
      }, {
        name: "spectral_door_bottom",
        url: () => OW(53251)
      }, {
        name: "magenta_spawn_block_top",
        url: () => OW(53257)
      }, {
        name: "plum_door_bottom",
        url: () => OW(53262)
      }, {
        name: "camel_painting_art_option2",
        url: () => OW(53268)
      }, {
        name: "deep_drill_top",
        url: () => OW(53274)
      }, {
        name: "spectral_door_top",
        url: () => OW(53279)
      }, {
        name: "cyan_spawn_block_top",
        url: () => OW(53281)
      }, {
        name: "plant_cacti_by_arthur",
        url: () => OW(53288)
      }, {
        name: "torch_block",
        url: () => OW(53291)
      }, {
        name: "board_full",
        url: () => OW(53298)
      }, {
        name: "sea_lantern",
        url: () => OW(53307)
      }, {
        name: "black_glazed_terracotta",
        url: () => OW(53316)
      }, {
        name: "white_glazed_terracotta",
        url: () => OW(53323)
      }, {
        name: "torch_cyan_block",
        url: () => OW(53329)
      }, {
        name: "blue_glazed_terracotta",
        url: () => OW(53333)
      }, {
        name: "synthesizer_top",
        url: () => OW(53338)
      }, {
        name: "torch_green_block",
        url: () => OW(53345)
      }, {
        name: "lily_pad",
        url: () => OW(53351)
      }, {
        name: "cyan_glazed_terracotta",
        url: () => OW(53358)
      }, {
        name: "torch_purple_block",
        url: () => OW(53366)
      }, {
        name: "mob_farm_top",
        url: () => OW(53374)
      }, {
        name: "red_spawn_block_top",
        url: () => OW(53377)
      }, {
        name: "cedar_door_bottom",
        url: () => OW(53383)
      }, {
        name: null,
        url: () => OW(53389)
      }];

    function MW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = sW[WW]) || void 0 === OW ? void 0 : OW.url()) && void 0 !== iW ? iW : null
    }

    function KW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = sW[WW]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : null
    }
    const SW = ["arrow", "bubble", "critical_hit", "drift", "effect_5", "fishingFishSilhouette", "generic_2", "glint", "heart", "scary_face", "snowflake", "soul_0", "square_particle", "z-particle"];

    function YW(WW) {
      const iW = SW[WW];
      return iW ? OW(53398)(`./${iW}.png`) : null
    }
  },
  50261: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/67_Atlas.78772019d3c23af4fde0.png"
  },
  49395: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/67_Model.20ac6746b6d4e9cdc5ac.glb"
  },
  49400: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/67_Reconstructed.aa1c6cd0195ad55052d4.glb"
  },
  50268: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_67_default.78772019d3c23af4fde0.png"
  },
  50276: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Armour Collector_Atlas.68016f01aaaf41a99294.png"
  },
  49402: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Armour Collector_Model.4e44fc9a2bfa0d1fa9ae.glb"
  },
  49411: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Armour Collector_Reconstructed.68bd2827e682b9ef1c5c.glb"
  },
  50284: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_armour collector_default.68016f01aaaf41a99294.png"
  },
  50287: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/BearSaddle_Atlas.15264b4186b61b368f48.png"
  },
  50289: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bear_Atlas.16ed4e893fa8557fb3c8.png"
  },
  49420: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bear_Model.9d563e0d9870f3bee11e.glb"
  },
  50298: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_bear_default.16ed4e893fa8557fb3c8.png"
  },
  50305: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bobino Musculino_Atlas.41bc4861928518f5e973.png"
  },
  49425: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bobino Musculino_Model.d80ca8def7ee3e59c8c4.glb"
  },
  49432: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bobino Musculino_Reconstructed.e5775589151b43e015a3.glb"
  },
  50310: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_bobino musculino_default.41bc4861928518f5e973.png"
  },
  50312: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/CamelSaddle_Atlas.04251d42e0e6b08cd54b.png"
  },
  50314: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Camel_Armour.84f02f272f4930d10edf.png"
  },
  50323: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Camel_Atlas.4c87e02cadf2be1f7039.png"
  },
  49439: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Camel_Model.bc44d3ea4bbddbd34ff8.glb"
  },
  50328: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_camel_default.3b9bf815a1e7e67b9c5b.png"
  },
  50332: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_camel_brown.4fb5c5b6c32bdc8441f7.png"
  },
  50340: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Capitano Explovissimo_Atlas.238f070a1cb621f89233.png"
  },
  49448: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Capitano Explovissimo_Model.987934107c32050a0f8f.glb"
  },
  49452: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Capitano Explovissimo_Reconstructed.34c7194ad537f91fb770.glb"
  },
  50348: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_capitano explovissimo_default.238f070a1cb621f89233.png"
  },
  50356: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cave Golem_Atlas.43057255fbcd8cf0e376.png"
  },
  49457: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cave Golem_Model.fcb854951ae2d8348159.glb"
  },
  50361: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_cave golem_default.fe29c2466a335ce428b7.png"
  },
  50364: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_cave golem_iron.f15813c3f4b357c1c3ad.png"
  },
  50368: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_cave golem_corrupted.45ddac891a25ba285060.png"
  },
  50370: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cow_Atlas.646efb734e50a01d474a.png"
  },
  49460: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cow_Model.a114439e2ddef7ddc8e6.glb"
  },
  50376: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_cow_default.e8db5e9466d81322284b.png"
  },
  50381: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_cow_cream.15ffb0b24f4058ffe0d8.png"
  },
  50385: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Crone_Atlas.2c1819debbc39c551df9.png"
  },
  49463: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Crone_Model.07672f43fa6684aacf0d.glb"
  },
  50391: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_crone_default.629dfdec640e437c8c58.png"
  },
  50397: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/DeerAntlers_Atlas.317f1c4b7f16d8af24eb.png"
  },
  50401: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Deer_Atlas.8c8d020eac0964ca3613.png"
  },
  49469: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Deer_Model.4c98ba2161f6516f336d.glb"
  },
  50403: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_deer_default.8c8d020eac0964ca3613.png"
  },
  50412: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Desert Fennec_Atlas.5cc3a10a2d205413b221.png"
  },
  49474: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Desert Fennec_Model.b6af0de0386cdadd4aaa.glb"
  },
  50416: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_desert fennec_default.5cc3a10a2d205413b221.png"
  },
  50418: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Goofy Golem_Atlas.9f539ed92e7a18179ccc.png"
  },
  50426: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_diamond goofy golem_default.ad6acdd2ec3df5dc3c58.png"
  },
  50429: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_diamond goofy golem_flaking.bf96dafe607ba2c1989f.png"
  },
  50431: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_diamond goofy golem_patchy.990dd71826e102069a65.png"
  },
  50433: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_diamond goofy golem_shedding.494b42755accc9f4d3c8.png"
  },
  50440: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_diamond goofy golem_bare.03408815673f9c107ca9.png"
  },
  50443: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_diamond goofy golem_stone.83de462a7be9aae11337.png"
  },
  50452: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Guardian_Atlas.cb75d23bfd8385a5fb1b.png"
  },
  49483: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  49492: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  50456: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_diamond guardian_default.cb75d23bfd8385a5fb1b.png"
  },
  50458: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Huntress_Atlas.19e9ae6b50525bbf7989.png"
  },
  50466: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr huntress_default.42d87f08d4f4e8c2e48c.png"
  },
  50468: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_draugr huntress_chainmail.f16e63013ccf629b7eac.png"
  },
  50477: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Knight_Atlas.53367bcdaf4237c2c5eb.png"
  },
  49498: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Knight_Model.9eca91f878818eb243b7.glb"
  },
  50483: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr knight_default.53367bcdaf4237c2c5eb.png"
  },
  50491: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Reaver_Atlas.d059dc5ea7e11b0d6226.png"
  },
  49503: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Reaver_Model.b238f5542ebc8a6f790d.glb"
  },
  50500: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr reaver_default.d059dc5ea7e11b0d6226.png"
  },
  50506: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Skeleton_Atlas.ad55be7f308296fa0710.png"
  },
  49511: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Skeleton_Model.ea29dd4b4906e922dbc5.glb"
  },
  50513: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr skeleton_default.ad55be7f308296fa0710.png"
  },
  50515: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Warper_Atlas.2f0f8036bfafcda6ac8c.png"
  },
  49514: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Warper_Model.957031cd0be6a379a31e.glb"
  },
  50517: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr warper_default.2f0f8036bfafcda6ac8c.png"
  },
  50524: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Zombie_Atlas.d26d8b763d5430e29e22.png"
  },
  49523: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Zombie_Model.f3182b807f523b9f5cfc.glb"
  },
  50528: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_draugr zombie_default.a81024e6c9b71d39dc2b.png"
  },
  50536: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/10_draugr zombie_corrupted2.705d686f424354e6f53e.png"
  },
  50539: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_draugr zombie_longHairChestplate.7d99ad0435907496ded0.png"
  },
  50542: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_draugr zombie_longHairClothed.3e4331b33e866be77414.png"
  },
  50546: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_draugr zombie_shortHairClothed.608a2b0d8c412badf03f.png"
  },
  50550: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_draugr zombie_flower.0943cbd0f6aeb07fb7c4.png"
  },
  50558: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_draugr zombie_flower2.1905b274fd6714a68073.png"
  },
  50565: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/6_draugr zombie_mushroom.2e6fd854bb40cbb60921.png"
  },
  50572: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/7_draugr zombie_vine.097f85f6ef3e92e8c2d2.png"
  },
  50581: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/8_draugr zombie_vine2.2a870c768fb2eaf1d64b.png"
  },
  50589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/9_draugr zombie_corrupted.0c3ba982e223bfd2a399.png"
  },
  50596: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Evil Tome_Atlas.ebb1d7344941d169e61f.png"
  },
  49528: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Evil Tome_Model.dac8f598cd75429bd88f.glb"
  },
  50601: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_evil tome_default.ebb1d7344941d169e61f.png"
  },
  50608: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frost Golem_Atlas.f219ae0b8effd2d3288c.png"
  },
  50615: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_frost golem_default.f219ae0b8effd2d3288c.png"
  },
  50618: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frost Skeleton_Atlas.fdab98e8d8fa9e1606a7.png"
  },
  50626: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_frost skeleton_default.fdab98e8d8fa9e1606a7.png"
  },
  50631: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frost Wraith_Atlas.9b40421e56202862e000.png"
  },
  49536: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frost Wraith_Model.6a1df7eca8f7944cfa85.glb"
  },
  50635: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_frost wraith_default.1c2c4171f3ff80b1c59c.png"
  },
  50644: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_frost wraith_tattered.0f7d7bed74631a89045d.png"
  },
  50646: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_frost wraith_frostKing.42a658129c295fa5ba8a.png"
  },
  50649: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_frost wraith_accursed.5efdb1d1f3bc60504721.png"
  },
  50651: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frost Zombie_Atlas.856fb434ac2c8cfac7ad.png"
  },
  50656: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_frost zombie_default.066e31eee2646fd422ce.png"
  },
  50665: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_frost zombie_longHairChestplate.520e0eb2c0a936e2a8e1.png"
  },
  50668: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_frost zombie_shortHairClothed.59528239298a4262f7f4.png"
  },
  50674: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Furnace Knight_Atlas.2659e8e76ccf1355bbe5.png"
  },
  49538: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Furnace Knight_Model.a82b173e727cd9bbf9d3.glb"
  },
  49544: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Furnace Knight_Reconstructed.73693171d4617dfc8e41.glb"
  },
  50683: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_furnace knight_default.2659e8e76ccf1355bbe5.png"
  },
  50685: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Bro_Atlas.fc3f69fac528331ca24e.png"
  },
  49553: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Bro_Model.c70809eb925034975d92.glb"
  },
  49562: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Bro_Reconstructed.ee280e4747c632e2a510.glb"
  },
  50691: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_glass bro_default.fc3f69fac528331ca24e.png"
  },
  50694: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Gremlin_Atlas.e22dbc21c33ea76e178c.png"
  },
  49566: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Gremlin_Model.880227f604677d4abba9.glb"
  },
  49569: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glass Gremlin_Reconstructed.4371333950829717aded.glb"
  },
  50700: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_glass gremlin_default.e22dbc21c33ea76e178c.png"
  },
  50707: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Goofy Golem_Atlas.15f38107836cebc75f69.png"
  },
  50716: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_gold goofy golem_default.4dabfa0399071406e2a2.png"
  },
  50722: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_gold goofy golem_flaking.eee4a22f79e9daa46d2a.png"
  },
  50726: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_gold goofy golem_patchy.746312a9826e176eb60e.png"
  },
  50733: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_gold goofy golem_shedding.648f3630984058f9c50e.png"
  },
  50738: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_gold goofy golem_bare.70636c8a87acccd75213.png"
  },
  50740: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_gold goofy golem_stone.5c03eb9f31dbbcd01b9b.png"
  },
  50745: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Guardian_Atlas.838ff51de0dd81a5f1ef.png"
  },
  49571: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Guardian_Model.890ecfcf2fc8d402086c.glb"
  },
  49576: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Guardian_Reconstructed.5bb360f7978bb121bb05.glb"
  },
  50749: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_gold guardian_default.838ff51de0dd81a5f1ef.png"
  },
  50753: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Watermelon Stag_Armour.972be4eb24f55108c5e8.png"
  },
  50755: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Watermelon Stag_Atlas.d97b04a85f87e7e507a4.png"
  },
  50763: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_gold watermelon stag_default.d97b04a85f87e7e507a4.png"
  },
  50771: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/GorillaSaddle_Atlas.b80dc520cd3f21340853.png"
  },
  50773: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gorilla_Atlas.8180581c438425b957c7.png"
  },
  49584: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gorilla_Model.da3aa249b0fcc54c7659.glb"
  },
  50777: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_gorilla_default.8180581c438425b957c7.png"
  },
  50782: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/HorseSaddle_Atlas.28811fb81cc9c552df26.png"
  },
  50791: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Horse_Atlas.35d93b681a8f7834e697.png"
  },
  49589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Horse_Model.800a7268d235df849b7e.glb"
  },
  50797: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_horse_default.da58b615663faac34f1d.png"
  },
  50801: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_horse_black.4dbfd341ba74e805cd0e.png"
  },
  50809: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_horse_brown.ad46016bb913f83d93b3.png"
  },
  50811: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_horse_cream.d324148443d0eabfaf65.png"
  },
  50818: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Golem_Atlas.f15813c3f4b357c1c3ad.png"
  },
  50824: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_iron golem_default.f15813c3f4b357c1c3ad.png"
  },
  50833: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Goofy Golem_Atlas.1a48754dc0b64a8b7b05.png"
  },
  49595: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Goofy Golem_Model.9bb7fcaceb73b4a3b23d.glb"
  },
  50840: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_iron goofy golem_default.0c95620234f27798cfe9.png"
  },
  50845: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_iron goofy golem_flaking.73f858cdb6d36fa13320.png"
  },
  50853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_iron goofy golem_patchy.f0d3039d44a0b2b2f59e.png"
  },
  50858: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_iron goofy golem_shedding.25ee174e06680e7280d1.png"
  },
  50865: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_iron goofy golem_bare.44ae0955ff00562ecdf6.png"
  },
  50874: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_iron goofy golem_stone.25c52e79c4d759bf9f8c.png"
  },
  50882: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Guardian_Atlas.d6a6fbc0fa3210a990c1.png"
  },
  49604: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  49611: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  50890: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_iron guardian_default.d6a6fbc0fa3210a990c1.png"
  },
  50895: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lil Knight_Atlas.cc0d9a1740f90db8827b.png"
  },
  49619: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lil Knight_Model.ed4a69ab8ec5e3c1111a.glb"
  },
  49626: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lil Knight_Reconstructed.f2857d2d6008814e75ef.glb"
  },
  50902: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_lil knight_default.cc0d9a1740f90db8827b.png"
  },
  50904: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lord Vulcan_Atlas.7cce3638220330c1d017.png"
  },
  49632: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lord Vulcan_Model.df0082926bbac281e4aa.glb"
  },
  49637: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lord Vulcan_Reconstructed.277b77204fcb3af7d078.glb"
  },
  50912: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_lord vulcan_default.7cce3638220330c1d017.png"
  },
  50919: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magma Golem_Atlas.c048f8347bba1eff276d.png"
  },
  50923: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_magma golem_default.c048f8347bba1eff276d.png"
  },
  50932: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magma Toad_Atlas.a8b9db6b01f4542e1467.png"
  },
  49642: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magma Toad_Model.26aea2fe0368bdbd9799.glb"
  },
  50934: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_magma toad_default.a8b9db6b01f4542e1467.png"
  },
  50936: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Moonstone Goofy Golem_Atlas.4caa2a72116784d73adb.png"
  },
  50944: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_moonstone goofy golem_default.b58fbd04c36c1bfc9720.png"
  },
  50950: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_moonstone goofy golem_flaking.e3cb7373d477e5b8aaa6.png"
  },
  50957: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_moonstone goofy golem_patchy.be6e50c29d06462f66cd.png"
  },
  50963: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_moonstone goofy golem_shedding.8ac0d58b2f3f0c7eca1b.png"
  },
  50969: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_moonstone goofy golem_bare.7b70a71811495f107613.png"
  },
  50977: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_moonstone goofy golem_stone.fb472f3c494b13ee5178.png"
  },
  50985: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Moonstone Guardian_Atlas.5fe5c9f714e9d9b65847.png"
  },
  49645: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Moonstone Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  49652: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Moonstone Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  50994: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_moonstone guardian_default.5fe5c9f714e9d9b65847.png"
  },
  50998: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mummy_Atlas.45b5369d53fdb99bed26.png"
  },
  49659: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mummy_Model.729c1fe6a9048e506b28.glb"
  },
  49667: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mummy_Reconstructed.b748762209f6006c725f.glb"
  },
  51003: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_mummy_default.45b5369d53fdb99bed26.png"
  },
  51012: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pig_Atlas.74d3b179a1bc6a57f8bc.png"
  },
  49669: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pig_Model.03480eac04a4a2032b5c.glb"
  },
  51014: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_pig_default.bc1d32464daad4bbd8c6.png"
  },
  51020: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Player_Atlas.8ad7b6884aa2def9b786.png"
  },
  49674: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Player_Model.48f382200795c9a6c7ef.glb"
  },
  49679: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Player_Reconstructed.e6c661d420c9b3c44d7e.glb"
  },
  49686: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_1_attachable.6f86173a091619cab00e.glb"
  },
  51024: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_1_attachable.c29f3253de97a5d410e6.png"
  },
  49694: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_2_attachable.6cd96ef6cb358ed4360d.glb"
  },
  51032: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_2_attachable.33f79a0dadad296b3a8d.png"
  },
  49702: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_3_attachable.c59f7da57297cc7766bd.glb"
  },
  51036: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_3_attachable.e971da0681c2efb5a036.png"
  },
  49711: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_4_attachable.83c8c77fac4d4e4d3388.glb"
  },
  51040: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/astro_set_4_attachable.faaa391af980dff2f0c1.png"
  },
  49716: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beaver_lumberjack.63d398cb151a061dc9df.glb"
  },
  51046: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beaver_lumberjack.0b50b931c29405d9f653.png"
  },
  49719: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_1_attachable.ac8efdef77fa3c047eb0.glb"
  },
  51049: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_1_attachable.42914edf1e5e83bf4830.png"
  },
  49723: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_2_attachable.c76c4b207962ca5d8469.glb"
  },
  51057: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_2_attachable.8d0a8c8e021cd1819d10.png"
  },
  49727: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_3_attachable.eb65278792d09fd22529.glb"
  },
  51061: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_3_attachable_blue.b57902234fc8bace8bdf.png"
  },
  51066: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_3_attachable_green.01fc83380655c9a144f0.png"
  },
  51073: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_3_attachable_red.b3479efa71463dc4ea9e.png"
  },
  49729: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_4_attachable.1e17a2c7d2fa080ae23d.glb"
  },
  51082: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bee_set_4_attachable.1964af9414b984f51d0c.png"
  },
  51090: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_cow_cream.93a3a63c37c297f2bc91.png"
  },
  51094: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_cow_normal.25284b2ee8a034f2207f.png"
  },
  51098: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_creator_level1.4f2f4d6e566890226158.png"
  },
  51107: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_creator_level2.d2f2f0fe19ce7129d8f2.png"
  },
  51111: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_creator_level3.b45b0cbe3153579501ee.png"
  },
  51115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_none.1feb6c810316e0bbf6f7.png"
  },
  51122: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_pig.fa3ba0599d1283fabcf5.png"
  },
  51130: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_sheep.ab31bf50b51b156fa9b9.png"
  },
  51134: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_super.5e15d30dd75205e380c5.png"
  },
  51143: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_super_inverted.1e048a212b55b4714c30.png"
  },
  51151: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_youtuber.38ac1d5daab9704990be.png"
  },
  49738: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cape_cuboid_18_12.a21468079980c1c366dc.glb"
  },
  49745: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chef_attachables.b8355e8da34089d9a4ee.glb"
  },
  51158: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chef_attachables.e3933ee0a7facb63f8fc.png"
  },
  49753: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/christmas_elf_attachable.9c26a77ac152e80bbd88.glb"
  },
  51160: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/christmas_elf_attachable.124a5894014f4719749c.png"
  },
  49759: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/christmas_snowman_attachable.a072c3ea6b3e67db1691.glb"
  },
  51164: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/christmas_snowman_attachable.8255e7ae22dec706ef9f.png"
  },
  49767: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_blue_hair.fd9f446dd191be8421a1.glb"
  },
  51169: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_blue_hair.ac564bea50bbc19fbebc.png"
  },
  49774: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_braided_hair.5a099561e41c020156e6.glb"
  },
  51175: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_braided_hair.0cdf6e99e7d313900600.png"
  },
  49780: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_child.6a2eabe0e42a60b60f5d.glb"
  },
  51179: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_child.dd7bd7d791417c7cd76c.png"
  },
  49785: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_forked_beard.8b1921850ee39af61714.glb"
  },
  51184: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_forked_beard.e97aa85a569956654b66.png"
  },
  49789: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_ginger_beard.5281703e8404e83277a1.glb"
  },
  51193: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_ginger_beard.b381303da9453a64b9de.png"
  },
  49798: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_grey_beard.9a405ffacf45697cd862.glb"
  },
  51196: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_grey_beard.d478545c0ac1733f45ac.png"
  },
  49803: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_hair_buns.0689c8a36757fb228d12.glb"
  },
  51203: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_hair_buns.99cf87cba931cf1c82e1.png"
  },
  49808: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_purple_beard.3706e283af7db90ec6dd.glb"
  },
  51208: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_purple_beard.793d3f821147dab24317.png"
  },
  49817: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_red_hair.a600a969ac7275b21114.glb"
  },
  51214: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_red_hair.d0ba03ae7bdf8067f0ed.png"
  },
  49825: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_short_beard.46c3074282aeda011332.glb"
  },
  51222: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dwarf_short_beard.d488c7bf3b0d3640e5a5.png"
  },
  49829: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/farmer_gill_attachable.6f8f6fee935f2f1397c6.glb"
  },
  51231: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/farmer_gill_attachable.4d1c24944e6418389add.png"
  },
  49836: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/farmer_head.75ea18bc1214e93645c3.glb"
  },
  51239: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/farmer_head.6cc73aa5e23195da2780.png"
  },
  49838: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fire_mage_attachable.c5706ee8194a4de2efdf.glb"
  },
  51243: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fire_mage_attachable.c00bd47444c227739ada.png"
  },
  49841: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/forge_mother.7e1cc3526d433035776b.glb"
  },
  51246: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/forge_mother.842e0c3edd3f5f257414.png"
  },
  49847: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_bear_attachables.b35cb8b001f505ea829f.glb"
  },
  51248: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_bear_attachables.3ca7884565064815c2bb.png"
  },
  49852: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_attachables.cdd0c6aca354fad9eecf.glb"
  },
  51251: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_attachables.eba8ecfd7043542e1744.png"
  },
  49861: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_tail_single.85d3306a434950bb006b.glb"
  },
  51255: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_tail_single.0b693238b2692cc310bd.png"
  },
  49868: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_tails.14aeed9d125a590c1a25.glb"
  },
  51263: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_kitsune_tails.0b693238b2692cc310bd.png"
  },
  49874: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_shark_attachables.844bd68dea79c24c6e40.glb"
  },
  51268: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_shark_attachables.38a034c7b2272f567be5.png"
  },
  49883: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_shark_tail.d372f49e043f6af45054.glb"
  },
  51272: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_shark_tail.8043a8453f2f335b9e4b.png"
  },
  49886: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_wolfKnight_attachables.531d5431d656ba75852c.glb"
  },
  51281: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_wolfKnight_attachables.d7a6bfdf2305382b68e0.png"
  },
  49889: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_wolfKnight_tail.dea2e82825caa00b4612.glb"
  },
  51285: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/furry_wolfKnight_tail.c5f386355cfc18a16ec6.png"
  },
  49897: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/general_attachable.b185778b184ac5479a66.glb"
  },
  51290: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/general_attachable.76d5533363f2f0d2d1fe.png"
  },
  49902: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/goblin_goggles.d9336ff2e39a9a10e8a5.glb"
  },
  51293: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/goblin_goggles.d3b588fdb35828bf3c36.png"
  },
  49906: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/goblin_mad_scientist.818218843d6c7d315844.glb"
  },
  51300: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/goblin_mad_scientist.db8bc56b97c1030308b5.png"
  },
  49909: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_1_attachable.3acfb1686e7c942c54fd.glb"
  },
  51306: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_1_attachable.dfa0d411fd84a3a30db8.png"
  },
  49914: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_2_attachable.6767cbe7d5eed22b16ef.glb"
  },
  51312: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_2_attachable.fba9f96171a9c6ca479e.png"
  },
  49916: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_3_attachable.10d2d22860495aee5a9e.glb"
  },
  51319: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_3_attachable.e33e3ed55f37517a00cd.png"
  },
  49924: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_4_attachable.3d022dfffb0533e89e9b.glb"
  },
  51322: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/highSociety_set_4_attachable.8e013771e0294e6b36ba.png"
  },
  49933: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_archer.4b0c4ab004d9572520ed.glb"
  },
  51331: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_archer.5622fa34756f0ddeb1f9.png"
  },
  49941: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_desert_guard.c9ce94394c5ad789a8b2.glb"
  },
  51334: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_desert_guard.259b2a31cd3d5d1def25.png"
  },
  49949: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_sentry.fd88756ed28102c038be.glb"
  },
  51339: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/human_sentry.702ac5cab41564ab3731.png"
  },
  49954: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/ice_wings_attachable.ac1d49437b2b0e11285d.glb"
  },
  51341: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/ice_wings_attachable.fbf4aa9c26135e18fb05.png"
  },
  49960: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jackal_priest.ea22761085c155dcfe9f.glb"
  },
  51343: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jackal_priest.48e88aa29dff4d501a0e.png"
  },
  49968: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jetpack_attachable.c63c098a3263d0b50836.glb"
  },
  51350: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jetpack_attachable.6d2bbf43846155c5bb2e.png"
  },
  49972: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable.168794d456adfbe39838.glb"
  },
  51353: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable_blue.2f686b41d85c4d6bce33.png"
  },
  51361: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable_green.031f784da6ee987953ec.png"
  },
  51370: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable_purple.3f3a83dbf8e636cfcb60.png"
  },
  51374: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable_red.db6c293bd5850be96067.png"
  },
  51383: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_1_attachable_yellow.974529f01d0df1037343.png"
  },
  49980: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_2_attachable.be6a5b70c68679b4c55b.glb"
  },
  51391: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_2_attachable_blue.0dbd4893b4968b5c9c31.png"
  },
  51400: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_2_attachable_purple.3863d87764c18546382d.png"
  },
  51407: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_2_attachable_red.c7bddc3b4f6e52aa53a7.png"
  },
  49985: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_3_attachable.a794b899d5090ba2ecd3.glb"
  },
  51409: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_3_attachable_green.0f0b15840a127c4a441a.png"
  },
  51415: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_3_attachable_pink.5ba032639c97df45bca6.png"
  },
  51423: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_3_attachable_purple.2a71c7e895959106b552.png"
  },
  51429: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_3_attachable_red.9d5625925242d63571e8.png"
  },
  49993: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_4_attachable.2c9a0807e84b7b52df0d.glb"
  },
  51433: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_4_attachable_blue.66da560b557ef43ab0be.png"
  },
  51435: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_4_attachable_hair.7cd5ce85899b8268578f.png"
  },
  51440: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_4_attachable_purple.08396e2fc257eb15c043.png"
  },
  51449: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/medieval_set_4_attachable_red.670d03766266c09f7ff6.png"
  },
  50002: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_helmet_attachable.5283fabd3acf0964e523.glb"
  },
  51455: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_helmet_attachable.c576b351721412f3474c.png"
  },
  50006: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur.8c8438fcfb2743e11a08.glb"
  },
  51459: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur.18e2b4005cf1249ddbc3.png"
  },
  50015: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur_elder.671a60a9234634a7317e.glb"
  },
  51466: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur_elder.73650a0bb7b29e737a18.png"
  },
  50017: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur_warrior.cb1266377a03a4840597.glb"
  },
  51475: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/minotaur_warrior.aa846fef1b1cff809fe1.png"
  },
  50023: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/monster_hunter_lorenzo_attachable.cbf89dcf0e32fef44b96.glb"
  },
  51478: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/monster_hunter_lorenzo_attachable.4a32273f11ece003053c.png"
  },
  51485: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/nova_jetpack_attachable.b4fe324d9f350a47b6b7.png"
  },
  50031: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/npc_pig_head.0610232aa4cf2be9a3a0.glb"
  },
  51492: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/npc_pig_head.0cff7e148233d053b838.png"
  },
  50033: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/painter_spencer_attachable.efbda3faf20332fbf4d8.glb"
  },
  51501: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/painter_spencer_attachable.2b1b0e6121f1f1df8b25.png"
  },
  50038: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pet_reindeer.b534e90d40b20f7ad509.glb"
  },
  51509: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pet_reindeer.5763b68cde3849a52dcf.png"
  },
  50042: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pig_napoleon.a6b4adfd05805e823ef0.glb"
  },
  51512: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pig_napoleon.18fd7f3c75ed02707613.png"
  },
  50050: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pig_worker_attachable.c8ae9d921fa6347772a4.glb"
  },
  51514: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pig_worker_attachable.7df668bc96c60eec5b4e.png"
  },
  50052: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/piggy_banker_head.1a75c8ee13d7032928b2.glb"
  },
  51523: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/piggy_banker_head.0a378752a2a5a3c9e04b.png"
  },
  50055: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/portal_mage_hat.3855796919cb609ddf0b.glb"
  },
  51525: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/portal_mage_hat.53dcc9e4427e3eaeb19b.png"
  },
  50064: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rabbit_aristocrat_attachable.fb6aed0a5af2fe257cd9.glb"
  },
  51527: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rabbit_aristocrat_attachable.f96f72d6b1bbfaf34e34.png"
  },
  50070: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/skis_attachable.2f18a53608a62eacee94.glb"
  },
  51530: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/skis_attachable.94d264fc21f99592ef6e.png"
  },
  50079: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/smuglyn_attachable.e262dbcc08060d3b2c33.glb"
  },
  51538: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/smuglyn_attachable.9166c7e98a46701c6470.png"
  },
  50082: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_1_attachable.c7ad8d41bb14b0b5ba1b.glb"
  },
  51547: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_1_attachable.d1a2a2e0867a2cb5bef1.png"
  },
  50089: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_2_attachable.da95b8db7c46e73dcddf.glb"
  },
  51549: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_2_attachable.784bc9f5727b2d686616.png"
  },
  50095: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_3_attachable.7b82215306e41bef192d.glb"
  },
  51556: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_3_attachable.fc8f7ebe2626ce95666c.png"
  },
  50100: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_4_attachable.f6356a5561b52a9252bb.glb"
  },
  51559: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spring_set_4_attachable.08d09b530492583fcf13.png"
  },
  50105: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_boy.b4589071fbc6f8aab4eb.glb"
  },
  51561: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_boy.4f30c4250607088747ac.png"
  },
  51566: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_girl_attachable.10eab4d20aa51073ed13.png"
  },
  50110: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_guy_attachable.cf561919acf1ae0553f4.glb"
  },
  51575: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_guy_attachable.d3444f70728d2dda507c.png"
  },
  50117: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_guy_fisherman_attachable.6f7e98da21b6d9d0245a.glb"
  },
  51579: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tentacle_guy_fisherman_attachable.69e2448895829cd14f97.png"
  },
  50125: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/trader_cowl_black.6702003ee060b8868f70.glb"
  },
  51582: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/trader_cowl_black.3e78c867952de1006a5b.png"
  },
  50133: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/trader_cowl_blue.6702003ee060b8868f70.glb"
  },
  51587: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/trader_cowl_blue.69970616d9125960a099.png"
  },
  50139: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/ugly_sweater_attachable.209be77a392b2d657c15.glb"
  },
  51596: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/ugly_sweater_attachable.33201f3366e8865e26bd.png"
  },
  50148: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wolf_in_suit_attachable.d386060693b354bdd3b8.glb"
  },
  51599: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wolf_in_suit_attachable.2beb931b01fad9bc4d46.png"
  },
  50152: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wolf_security.f95b7d48013fce4ce4bb.glb"
  },
  51608: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wolf_security.92c9f8ca8df9751651a3.png"
  },
  50159: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_1_attachable.ea6cc6d1fe0f10f0ff4b.glb"
  },
  51616: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_1_attachable.eea4ad48a4d5488d6026.png"
  },
  50166: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_2_attachable.6beeda0bf00e831905e3.glb"
  },
  51618: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_2_attachable.94d8e252b4b30a4151aa.png"
  },
  50171: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_3_attachable.695da8c2a4c167d0fe3f.glb"
  },
  51627: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_3_attachable.353bece2880f7f95a98f.png"
  },
  50180: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_4_attachable.684a5c2e7b8b3fdcba22.glb"
  },
  51632: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/y2k_set_4_attachable.d0670370061907b3c750.png"
  },
  51636: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Scorpion_Atlas.4c63a55d5b226699b7b5.png"
  },
  50182: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Scorpion_Model.43a1eaa7700978fc716c.glb"
  },
  51644: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_scorpion_default.4c63a55d5b226699b7b5.png"
  },
  51650: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/SheepWool_Atlas.8c6ed48cd20ae438ce99.png"
  },
  51652: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Sheep_Atlas.edd4d6275fdd07baaf45.png"
  },
  50187: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Sheep_Model.ae826edb0fe7f7f6a082.glb"
  },
  51657: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_sheep_default.55e2f064ebce05fea3f6.png"
  },
  51664: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/10_sheep_gray.55e2f064ebce05fea3f6.png"
  },
  51672: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/11_sheep_green.55e2f064ebce05fea3f6.png"
  },
  51679: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/12_sheep_lightBlue.55e2f064ebce05fea3f6.png"
  },
  51682: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/13_sheep_lightGray.55e2f064ebce05fea3f6.png"
  },
  51685: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/14_sheep_lime.55e2f064ebce05fea3f6.png"
  },
  51689: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/15_sheep_magenta.55e2f064ebce05fea3f6.png"
  },
  51695: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_sheep_black.55e2f064ebce05fea3f6.png"
  },
  51698: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_sheep_red.55e2f064ebce05fea3f6.png"
  },
  51701: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_sheep_orange.55e2f064ebce05fea3f6.png"
  },
  51705: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_sheep_pink.55e2f064ebce05fea3f6.png"
  },
  51712: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_sheep_purple.55e2f064ebce05fea3f6.png"
  },
  51720: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/6_sheep_yellow.55e2f064ebce05fea3f6.png"
  },
  51727: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/7_sheep_blue.55e2f064ebce05fea3f6.png"
  },
  51732: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/8_sheep_brown.55e2f064ebce05fea3f6.png"
  },
  51736: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/9_sheep_cyan.55e2f064ebce05fea3f6.png"
  },
  51739: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Skeleton_Atlas.425e67b7d72b1af0b8c2.png"
  },
  50191: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Skeleton_Model.59355cb21c8481c2ca2c.glb"
  },
  50199: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Skeleton_Reconstructed.e7c175b2a6a01b86f26c.glb"
  },
  51746: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_skeleton_default.425e67b7d72b1af0b8c2.png"
  },
  51750: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Slime_Atlas.1263540ecee2dfa618c5.png"
  },
  50205: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Slime_Model.0fe0e3af703604cb8247.glb"
  },
  51757: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_slime_default.1263540ecee2dfa618c5.png"
  },
  51762: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit BearSaddle_Atlas.9b845651cecb41503d7e.png"
  },
  51770: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit Bear_Atlas.07a86cb5b2942e5f3573.png"
  },
  51776: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_spirit bear_default.07a86cb5b2942e5f3573.png"
  },
  51784: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit Golem_Atlas.9bb2443ec5562080032b.png"
  },
  51786: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_spirit golem_default.9bb2443ec5562080032b.png"
  },
  51795: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit GorillaSaddle_Atlas.24a33c7283188d22e2f6.png"
  },
  51804: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit Gorilla_Atlas.b8b61b0b14bb5661336e.png"
  },
  51807: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_spirit gorilla_default.b8b61b0b14bb5661336e.png"
  },
  51811: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit StagSaddle_Atlas.3038083905dd48c74892.png"
  },
  51819: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit Stag_Atlas.9207e762c70637613953.png"
  },
  51823: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_spirit stag_default.9207e762c70637613953.png"
  },
  51828: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit WolfCollar_Atlas.d1746d86d2b0f115c2fd.png"
  },
  51831: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spirit Wolf_Atlas.9b08acbc57bcdda346ef.png"
  },
  51835: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_spirit wolf_default.9b08acbc57bcdda346ef.png"
  },
  51839: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/StagSaddle_Atlas.017d11ce01411f24a65e.png"
  },
  51843: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stag_Atlas.25863e9a084dc2398678.png"
  },
  50209: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stag_Model.8b1a04b971769798551e.glb"
  },
  51848: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_stag_default.25863e9a084dc2398678.png"
  },
  51853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stalker_Atlas.765a6f6d815e489d379a.png"
  },
  50216: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stalker_Model.62252db592e9a1194275.glb"
  },
  51857: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_stalker_default.05870a7ada9d85be2859.png"
  },
  51860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_stalker_crimson.ed56375cd712c11086f1.png"
  },
  51866: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_stalker_frost.bc39d3a735616704ab47.png"
  },
  51869: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_stalker_void.bea5f5c673051ba9b5f4.png"
  },
  51872: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Tiki Terror_Atlas.3cd5e376c5c117c4c83f.png"
  },
  50223: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Tiki Terror_Model.795d7c9d776f3038e383.glb"
  },
  50226: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Tiki Terror_Reconstructed.66f98f4bfd2fd9d5dfe0.glb"
  },
  51876: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_tiki terror_default.649d191e0a0af31ed4b3.png"
  },
  51884: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_tiki terror_titan.7f0be3102d2022e79d71.png"
  },
  51888: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_tiki terror_tormentor.0bd9c18bb8f000b60ac1.png"
  },
  51896: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_tiki terror_tyrant.ea975b5358da4f2dceaf.png"
  },
  51905: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Vulcanite_Atlas.8993f0c3dbd8a3b2db83.png"
  },
  50230: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Vulcanite_Model.8659034f30a8675dca54.glb"
  },
  50232: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Vulcanite_Reconstructed.fd4e0dbf75086bfa07c4.glb"
  },
  51912: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_vulcanite_default.8993f0c3dbd8a3b2db83.png"
  },
  51919: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/WildcatCollar_Atlas.caaf5d479a9b064f25ca.png"
  },
  51926: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wildcat_Atlas.730e684f03c8ec6b6ca7.png"
  },
  50238: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wildcat_Model.882887d7f1b81b755c8f.glb"
  },
  51930: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_wildcat_default.33894faabdf46ff9bd5e.png"
  },
  51937: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_wildcat_tabby.b8193faccc684618151c.png"
  },
  51941: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_wildcat_grey.bb2c555308bee757148e.png"
  },
  51948: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_wildcat_black.0a1d2b751451edbf520c.png"
  },
  51956: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_wildcat_calico.71da5e696f853739c2b8.png"
  },
  51960: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/5_wildcat_siamese.3442e45665115fb259a9.png"
  },
  51966: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/6_wildcat_leopard.a1b394639e3a31f471e8.png"
  },
  51972: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/WolfCollar_Atlas.d66ee93a67f33ef102cc.png"
  },
  51979: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wolf_Atlas.b14e1ea41fa8fcaccc6d.png"
  },
  50242: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wolf_Model.e8ce1bb8ca6dee8c4281.glb"
  },
  51986: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_wolf_default.4b7fd478b8456d6188dc.png"
  },
  51995: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/1_wolf_white.6ddd98fa6fef429b09fc.png"
  },
  52001: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_wolf_brown.8250048308eebf9ff5e3.png"
  },
  52007: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/3_wolf_grey.f7443ecfa81204e0435e.png"
  },
  52013: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/4_wolf_spectral.ed551985dc573c47da7b.png"
  },
  52020: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Zombie_Atlas.0d12d7cf7b286942fb57.png"
  },
  50249: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Zombie_Model.729c1fe6a9048e506b28.glb"
  },
  50253: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Zombie_Reconstructed.b748762209f6006c725f.glb"
  },
  52025: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/0_zombie_default.0d12d7cf7b286942fb57.png"
  },
  44929: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/2_block.ed68e72819b31a973068.glb"
  },
  44938: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/67.e191f0fe25ea3300eab7.glb"
  },
  44947: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Artisan Bench.b42baf109b0e8ceebe35.glb"
  },
  44956: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Aspen Door.70ff2e635fa7e6d074e7.glb"
  },
  44964: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Aspen Item Pedestal.d106ce98250ed7ec636c.glb"
  },
  44967: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Aspen Ladder.c46a3ef9dff3ff338c6b.glb"
  },
  44972: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Aspen Trapdoor.be2f0606fc8b154395bf.glb"
  },
  44978: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Black Banner.c6b29cdd2a2ef7368215.glb"
  },
  44987: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Black Bed.cea41e80f8f80d1deaac.glb"
  },
  44993: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Black Directional Arrow.335ec331ba4de1ed0c03.glb"
  },
  45002: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Black Strongbed.d812d56747ded12fa76c.glb"
  },
  45006: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Blue Banner.ed6d85442bc3bb4697dd.glb"
  },
  45011: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Blue Bed.6134692fe5a906ee225e.glb"
  },
  45019: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Blue Directional Arrow.2789b2fbd37ed6d0a81e.glb"
  },
  45024: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Blue Strongbed.ded6e860b166e9218920.glb"
  },
  45032: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Board.f3ca970f0aec49c2cba5.glb"
  },
  45034: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Brown Banner.2fd5a70262544120b8b5.glb"
  },
  45039: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Brown Bed.3c55240c9fe96e467e8e.glb"
  },
  45042: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Brown Directional Arrow.277c0369fab2f84fb1ee.glb"
  },
  45047: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Brown Strongbed.fac0f4616a1660180625.glb"
  },
  45055: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cedar Door.6505aa3b8d621a205c84.glb"
  },
  45064: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cedar Item Pedestal.fed6ba91b9e237779dde.glb"
  },
  45072: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cedar Ladder.91ddcfdab0b805b0ba02.glb"
  },
  45075: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cedar Trapdoor.4513c73d389bce4c7ba0.glb"
  },
  45080: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cherry Door.7cd622b686ab7d35adbf.glb"
  },
  45085: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cherry Item Pedestal.84093fc38b34643aecbb.glb"
  },
  45091: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cherry Ladder.09ccb69175957a415053.glb"
  },
  45095: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cherry Trapdoor.631b5b507962f538a8b3.glb"
  },
  45101: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Crimson Trapdoor.0a6dcda3d7289dd9cabb.glb"
  },
  45105: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cyan Banner.8bfb99d6f5baa4fdda91.glb"
  },
  45113: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cyan Bed.2e60dbe672ee333df908.glb"
  },
  45115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cyan Directional Arrow.5fb3ab4f0042724cb73a.glb"
  },
  45123: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cyan Strongbed.8744cd46f22ecb13c70f.glb"
  },
  45128: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Dangling Rope.148f7603a65c417035b0.glb"
  },
  45131: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Dangling Vine.ea87fe948ec583ff997c.glb"
  },
  45139: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Enchanting Table.611328e5f2099242ee00.glb"
  },
  45148: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Diamond Trophy.1173685f24276f2cbcb9.glb"
  },
  45154: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Banner.aae5998e92c2b99664bc.glb"
  },
  45161: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Fat Brown Mushroom.40af11e61bd2c9293a6e.glb"
  },
  45169: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Fat Red Mushroom.7a9bad44b193737cfa3a.glb"
  },
  45178: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Fence.878f3952d5f962074bf3.glb"
  },
  45187: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/FenceGate.d9d93725ba92bb91055c.glb"
  },
  45196: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Furnace.63172398ee4490177f4f.glb"
  },
  45202: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Enchanting Table.f0131104629a776c3b8f.glb"
  },
  45204: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gold Trophy.2167e90bf848cd51f465.glb"
  },
  45213: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gray Banner.a3b81769845f5ff338fc.glb"
  },
  45219: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gray Bed.5c4f0bbdbb174f46fbef.glb"
  },
  45221: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gray Strongbed.e8eaf0af5a840e59fff1.glb"
  },
  45226: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Green Banner.90b3894d2834265ce9b2.glb"
  },
  45232: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Green Bed.d6ff26f123e6826d9985.glb"
  },
  45235: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Green Directional Arrow.9bab881fb50f75f86b3f.glb"
  },
  45241: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Green Strongbed.f4b895ef6c5807914f4c.glb"
  },
  45244: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Grey Directional Arrow.8242f96058670e322908.glb"
  },
  45253: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Enchanting Table.3687c10d08e339113719.glb"
  },
  45259: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Ladder.8ce80384a824f6137ab2.glb"
  },
  45262: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Trapdoor.133339769c365a3aac31.glb"
  },
  45265: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Iron Trophy.0b43b0c33f93503aed8b.glb"
  },
  45270: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Jungle Door.f9f730419e0ef03e61f1.glb"
  },
  45279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Jungle Item Pedestal.9e21adc04895780375b3.glb"
  },
  45286: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Jungle Ladder.f0e270ed8983b1d35713.glb"
  },
  45288: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Jungle Trapdoor.395a3b2d177a87db6746.glb"
  },
  45292: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Large Icicle.170ec1b52ee13dacb77f.glb"
  },
  45301: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Large Twin Icicle.6c08460fe301dd64fefd.glb"
  },
  45304: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Leaf Bed.7aaa214dfd2bc1183b5e.glb"
  },
  45306: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Blue Banner.afe7633adc51ba562c85.glb"
  },
  45309: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Blue Bed.6fb411e8528b423d6611.glb"
  },
  45311: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Blue Directional Arrow.aeae69a3682fafa6403b.glb"
  },
  45313: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Blue Strongbed.e417c2e163f6f87882f2.glb"
  },
  45320: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Gray Banner.472826728c0ea68ccd0e.glb"
  },
  45329: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Gray Bed.c36f53f85fa5543f5f42.glb"
  },
  45338: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Gray Strongbed.8b84deea32747ec1bdf4.glb"
  },
  45345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Light Grey Directional Arrow.c6ca300b2832ea56ca5d.glb"
  },
  45348: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lime Banner.fef68f8aedcd6206b682.glb"
  },
  45351: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lime Bed.792d5c1fbfea4012b996.glb"
  },
  45354: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lime Directional Arrow.b775d1be5bf4a55a9132.glb"
  },
  45357: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lime Strongbed.385c00d698c7c35d489a.glb"
  },
  45361: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magenta Banner.6998f2e5400e044cb27f.glb"
  },
  45369: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magenta Bed.70b261dd12b8a0733f73.glb"
  },
  45372: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magenta Directional Arrow.e82fbca46b89ce4f66fe.glb"
  },
  45377: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magenta Strongbed.2633f791a179ed0b18a9.glb"
  },
  45385: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mango Door.f3062f346f353ba0ef10.glb"
  },
  45389: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mango Item Pedestal.b893bab2a9ebd1927955.glb"
  },
  45391: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mango Ladder.ef553e9e2a61fb119729.glb"
  },
  45397: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mango Trapdoor.da8b471e4edeb488b53c.glb"
  },
  45404: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Maple Door.93d1036df42b8822140c.glb"
  },
  45407: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Maple Ladder.fa63d0c1b92cec4e6088.glb"
  },
  45411: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Maple Trapdoor.ebc05cc264d1ece28b22.glb"
  },
  45418: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Medium Icicle.2f78a303591659f85308.glb"
  },
  45422: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Moonstone Trophy.039d181285ad13472e56.glb"
  },
  45426: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Nova Trophy.ee442b96a86b4412e83c.glb"
  },
  45435: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Orange Banner.ef3c97359aa22d345a39.glb"
  },
  45437: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Orange Bed.ddb5003e3b51000a875a.glb"
  },
  45440: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Orange Directional Arrow.8fc69b3ad74b874d8717.glb"
  },
  45449: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Orange Strongbed.d18b11f42561ffcd7ad9.glb"
  },
  45458: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Palm Door.a1098848fbd449380e5e.glb"
  },
  45461: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Palm Item Pedestal.4697508246a8308957c1.glb"
  },
  45464: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Palm Ladder.0657b4a73700795a10ce.glb"
  },
  45470: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Palm Trapdoor.6831798533946e2535fc.glb"
  },
  45472: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pear Door.191218ca881feafb89d3.glb"
  },
  45480: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pear Item Pedestal.d9247ea4c25827f0cea5.glb"
  },
  45483: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pear Ladder.dfcf2a04eb8dd2ec99f5.glb"
  },
  45488: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pear Trapdoor.ec72b5fcb4c2aab20ae7.glb"
  },
  45497: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pine Door.6f1a6fd9e9968b012c75.glb"
  },
  45499: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pine Item Pedestal.6fbcfaf534cdeae3688a.glb"
  },
  45507: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pine Ladder.f0a60090079487f523bd.glb"
  },
  45511: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pine Trapdoor.99dc922c6bf48f6ec8e8.glb"
  },
  45514: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pink Banner.5a2ec2efce3d4da4d265.glb"
  },
  45521: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pink Bed.bc1dea899cec3f9ef7e7.glb"
  },
  45524: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pink Directional Arrow.016130285863cca121fe.glb"
  },
  45533: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pink Strongbed.84e997326b4cb35d1239.glb"
  },
  45541: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Plum Door.fad96d335bfbd400b369.glb"
  },
  45546: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Plum Item Pedestal.c293a0f795323e47f5fb.glb"
  },
  45548: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Plum Ladder.9fa92307e164136268dc.glb"
  },
  45553: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Plum Trapdoor.b3b6436d875e4dd2302d.glb"
  },
  45559: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Potion Table.b9b00358d3c92be620f7.glb"
  },
  45561: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Purple Banner.805e85f24d3948fd1991.glb"
  },
  45570: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Purple Bed.a6c7179526745d16e4af.glb"
  },
  45577: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Purple Directional Arrow.e117fb18ecae2de3597d.glb"
  },
  45585: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Purple Strongbed.2792d8983d2fd7384411.glb"
  },
  45587: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rainbow Banner.2c1ff6cfcd7cfd6a2bb8.glb"
  },
  45589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Red Banner.b951e43bac7aceef8de2.glb"
  },
  45598: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Red Bed.f24823935c79013e547f.glb"
  },
  45602: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Red Directional Arrow.0f44b3325b02e45fe3fc.glb"
  },
  45606: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Red Strongbed.cbed53542bda683ac7b5.glb"
  },
  45614: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Salvaging Table.b1d9daec58386ecb42cd.glb"
  },
  45623: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Showcase.0b58d3094505df7ad51a.glb"
  },
  45632: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Skull Banner.be808cb16744c7b19d81.glb"
  },
  45637: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Black Pod.f7f1caee394bbde5ba00.glb"
  },
  45639: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Blue Pod.0be6c7e63cf39dc17610.glb"
  },
  45647: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Brown Pod.db038036cedec67a309e.glb"
  },
  45656: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Cyan Pod.a925627b8d8c728f4bf9.glb"
  },
  45665: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Gray Pod.80702b6ed803b9554882.glb"
  },
  45669: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Green Pod.778b1b621f240176416b.glb"
  },
  45672: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Light Blue Pod.5c0ae28eaff9e3ad44e7.glb"
  },
  45676: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Light Gray Pod.3cc535468131e7c74b71.glb"
  },
  45681: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Lime Pod.325665695c5f9a563a71.glb"
  },
  45690: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Magenta Pod.4dc15c5426e84ada3682.glb"
  },
  45698: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Orange Pod.7f1a376b3fd22adcaa47.glb"
  },
  45705: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Pink Pod.736f862ad20ffec3b45a.glb"
  },
  45708: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Purple Pod.3d264ca7cd77e2bc85eb.glb"
  },
  45712: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Red Pod.71793138884ea7963344.glb"
  },
  45718: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Twin Icicle.90abef92d62a482d945c.glb"
  },
  45723: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small White Pod.9fe6bb3e8935c04e09ba.glb"
  },
  45730: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Small Yellow Pod.c0832601f97f70e4c4a1.glb"
  },
  45739: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spectral Door.961d366035c6451ed7c0.glb"
  },
  45744: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spectral Item Pedestal.d4346118ea2a5e2b1e8a.glb"
  },
  45749: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spectral Ladder.5096618d2f9b74e4671a.glb"
  },
  45757: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spectral Trapdoor.1ccb5de6df39ebce4456.glb"
  },
  45760: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Diamond.69c9ee36cf9e11b59e0b.glb"
  },
  45769: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Gold.123674bb67381cac70c6.glb"
  },
  45776: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Iron.187c23e1963747a7f83f.glb"
  },
  45779: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Kill.f4843456edbde4aa3351.glb"
  },
  45782: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Stone.40b924fee45d7d975ae3.glb"
  },
  45786: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Spikes_Wood.4afa092439b0a5a36c2c.glb"
  },
  45795: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stone Enchanting Table.7820ac172e4883d81d77.glb"
  },
  45803: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stone Trophy.0d09ca4b3382d078df96.glb"
  },
  45812: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Timed Spike Bomb Block.65ee988f5c874dad3ba9.glb"
  },
  45815: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Vines.6900e39cb0132a28d5c5.glb"
  },
  45819: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Warped Trapdoor.e102e0d01ea8095a508d.glb"
  },
  45827: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/White Banner.b9c75887ab4dc97c52c1.glb"
  },
  45835: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/White Bed.189eba790b17cd9e673c.glb"
  },
  45837: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/White Directional Arrow.f7f592929734a9c1aaad.glb"
  },
  45842: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/White Strongbed.64379b59673d8b8bebef.glb"
  },
  45844: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wood Enchanting Table.adb5adb79965168536db.glb"
  },
  45853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wood Trophy.de9b607e6fd3921c91f4.glb"
  },
  45857: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Workbench.395da958bba12f4f5618.glb"
  },
  45860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Yellow Banner.f040f94bd7e4052b9c51.glb"
  },
  45863: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Yellow Bed.3508f062adbd29ad9817.glb"
  },
  45867: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Yellow Directional Arrow.ea7794e6fe2d48fb1b01.glb"
  },
  45875: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Yellow Strongbed.418bdbc6b888ac5d5d99.glb"
  },
  45877: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Aspen Door Top.c74d85d9615d99fb551c.glb"
  },
  45883: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Black Banner Flag Hanging.cfbc798c1cbcb1a6289f.glb"
  },
  45889: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Black Banner Flag.617184cee26ec2fca017.glb"
  },
  45891: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Black Banner Hanging.c2abb55fdd1db4457eb8.glb"
  },
  45893: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Black Bed Head.a2b52b7714fa148924cd.glb"
  },
  45898: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Black Strongbed Head.ba5750836163bbd674c9.glb"
  },
  45900: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Blue Banner Flag Hanging.0f4421c98326e84824fa.glb"
  },
  45905: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Blue Banner Flag.11990eedd286db55880d.glb"
  },
  45908: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Blue Banner Hanging.5b12aec44ad18dcb3888.glb"
  },
  45916: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Blue Bed Head.563135602471615af0ad.glb"
  },
  45919: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Blue Strongbed Head.6436747247f90ad1ea09.glb"
  },
  45924: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Brown Banner Flag Hanging.56f9fb5ad4e57a1d138e.glb"
  },
  45927: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Brown Banner Flag.890530886208cca6a28f.glb"
  },
  45933: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Brown Banner Hanging.407d71e9319ba5f72b00.glb"
  },
  45938: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Brown Bed Head.d5276fc60f1f1575e431.glb"
  },
  45943: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Brown Strongbed Head.1ea396eae4848fc2e2c5.glb"
  },
  45947: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Camel Painting Bottom Left.6f52a64b36eb5166414c.glb"
  },
  45956: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Camel Painting Bottom Right.096b226ca218a069996f.glb"
  },
  45963: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Camel Painting Top Left.9d04162bef9c3ec3bc5a.glb"
  },
  45966: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Camel Painting Top Right.9bdc26b9370a7608955f.glb"
  },
  45968: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cedar Door Top.aebe23f6241235f16aa2.glb"
  },
  45975: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cherry Door Top.49bad79598070b9766a2.glb"
  },
  45983: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cow Painting Bottom Left.a626f2ef515025f2e2a4.glb"
  },
  45989: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cow Painting Bottom Right.7a2361d419822f12723d.glb"
  },
  45991: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cow Painting Top Left.c3d7138ccc02cec834c4.glb"
  },
  45993: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cow Painting Top Right.69402041c0ca60ac771c.glb"
  },
  46001: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cyan Banner Flag Hanging.4a639a0ba348f0a78232.glb"
  },
  46010: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cyan Banner Flag.19f84de6bfc7bd8a45c4.glb"
  },
  46019: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cyan Banner Hanging.54193b1b927f1665acc9.glb"
  },
  46021: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cyan Bed Head.28ad1dd325b0d2cecf92.glb"
  },
  46023: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Cyan Strongbed Head.a15b5458ea2f9e8e00a4.glb"
  },
  46032: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Deer Painting Bottom Left.8d93cc831d7a37716930.glb"
  },
  46034: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Deer Painting Bottom Right.60519165d7e74ae11097.glb"
  },
  46036: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Deer Painting Top Left.e5a05c00a32f81ea30b2.glb"
  },
  46044: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Deer Painting Top Right.2ef06cb82d37ed63a03f.glb"
  },
  46050: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Draugr Banner Flag Hanging.87935e06bcc4b48cd5aa.glb"
  },
  46052: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Draugr Banner Flag.224b1cf4df8f63554a45.glb"
  },
  46056: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Draugr Banner Hanging.ad5e1055164dc891b9c0.glb"
  },
  46061: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Gray Banner Flag Hanging.847faa22afc615ee0e97.glb"
  },
  46067: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Gray Banner Flag.b9c2a5aca0fc8ab973bb.glb"
  },
  46072: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Gray Banner Hanging.67c7b447ef27679fda8d.glb"
  },
  46078: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Gray Bed Head.7f5edc258147848884e8.glb"
  },
  46081: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Gray Strongbed Head.81a228cbd33289ccad24.glb"
  },
  46086: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Green Banner Flag Hanging.1da40920f91caa6789e5.glb"
  },
  46091: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Green Banner Flag.cfd668f53d76e6542ac2.glb"
  },
  46093: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Green Banner Hanging.0b48cd078ae358248499.glb"
  },
  46102: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Green Bed Head.c82673c37db9d22d951b.glb"
  },
  46105: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Green Strongbed Head.34f5c659ec5c31aea8ce.glb"
  },
  46113: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Horse Painting Bottom Left.8ba66535ce92d3e1722d.glb"
  },
  46115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Horse Painting Bottom Right.46a3415c6aef503962bb.glb"
  },
  46117: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Horse Painting Top Left.657dc6225171243f245b.glb"
  },
  46122: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Horse Painting Top Right.9da74d016b759f190221.glb"
  },
  46131: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Jungle Door Top.b9fefc55b59299e1a330.glb"
  },
  46133: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Blue Banner Flag Hanging.152032e60558efde629b.glb"
  },
  46140: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Blue Banner Flag.e190ccb1b5e4c66b862f.glb"
  },
  46147: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Blue Banner Hanging.964849196d922297e63e.glb"
  },
  46151: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Blue Bed Head.724e96603f186d9a8fc2.glb"
  },
  46159: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Blue Strongbed Head.7d8424c06a75a1097170.glb"
  },
  46168: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Gray Banner Flag Hanging.0517247c33b99436e963.glb"
  },
  46173: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Gray Banner Flag.718d5858ef07a4e01696.glb"
  },
  46177: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Gray Banner Hanging.0fcd7e0e3655bfa9a125.glb"
  },
  46180: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Gray Bed Head.0303bfa349abf0f2fb80.glb"
  },
  46187: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Light Gray Strongbed Head.30c6f6ad4acf56613f2f.glb"
  },
  46196: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Lime Banner Flag Hanging.4767ef5e44fe3d5d3ffb.glb"
  },
  46202: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Lime Banner Flag.97301b73e9aebe6053c1.glb"
  },
  46207: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Lime Banner Hanging.72523777b4759a9a2ccc.glb"
  },
  46210: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Lime Bed Head.dbddd24e7a4420a96f2f.glb"
  },
  46216: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Lime Strongbed Head.00146b7ed12bfa16b207.glb"
  },
  46218: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Magenta Banner Flag Hanging.a6d2d58283dc0ee74523.glb"
  },
  46220: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Magenta Banner Flag.bc1ba313a35af29be707.glb"
  },
  46224: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Magenta Banner Hanging.338bd181963fea3ff8fb.glb"
  },
  46228: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Magenta Bed Head.d31af958dc71d97814f3.glb"
  },
  46232: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Magenta Strongbed Head.cf4a8fda11b2b73dc6ed.glb"
  },
  46236: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Mango Door Top.6b6a3aa1df7069e0cf13.glb"
  },
  46245: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Maple Door Top.2768910296da701712b2.glb"
  },
  46247: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Orange Banner Flag Hanging.f20238c4ba1f769b83bc.glb"
  },
  46255: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Orange Banner Flag.3466e7ecc9ae8b89c079.glb"
  },
  46257: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Orange Banner Hanging.aa476158647512ccb7b7.glb"
  },
  46265: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Orange Bed Head.6de4be93f4eec519f273.glb"
  },
  46274: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Orange Strongbed Head.7ba9a51f968bba47383d.glb"
  },
  46279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Palm Door Top.f8b7e967a96362a659a2.glb"
  },
  46285: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pear Door Top.3d76cb5d0c376bc4a5a3.glb"
  },
  46289: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pig Painting Bottom Left.dbc8926e0fda4af9d308.glb"
  },
  46291: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pig Painting Bottom Right.74548c1594c05212e7ab.glb"
  },
  46296: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pig Painting Top Left.43e32f7831d3e0805f92.glb"
  },
  46298: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pig Painting Top Right.870c25d54cdf1ccde6e9.glb"
  },
  46301: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pine Door Top.b6998b1cbb7d35537ac6.glb"
  },
  46310: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pink Banner Flag Hanging.a26b549f85c4974cef3a.glb"
  },
  46312: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pink Banner Flag.2baeb61da36bdafd9ca5.glb"
  },
  46314: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pink Banner Hanging.52732487e4388af53397.glb"
  },
  46321: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pink Bed Head.55427fffde8df81a8b45.glb"
  },
  46328: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Pink Strongbed Head.981850c2236f956bef47.glb"
  },
  46334: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Plum Door Top.e38c3f25b7d40a83880f.glb"
  },
  46336: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Purple Banner Flag Hanging.620b5130de2a5acf6acf.glb"
  },
  46342: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Purple Banner Flag.b01047e6f71e1e701bb4.glb"
  },
  46345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Purple Banner Hanging.fc280620b91c0b9c94ba.glb"
  },
  46349: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Purple Bed Head.0f29bca0fcc5a571acb9.glb"
  },
  46357: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Purple Strongbed Head.d198c864d6d36e993f93.glb"
  },
  46361: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Radar Dish Down.7cb9726005b2526bdf4d.glb"
  },
  46365: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Radar Dish Up.d97eabdff7864c56bc2f.glb"
  },
  46368: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Rainbow Banner Flag Hanging.8812eb1ff5fa7d22ed7d.glb"
  },
  46377: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Rainbow Banner Flag.06826522d56676745046.glb"
  },
  46385: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Rainbow Banner Hanging.ba8286ad9bd08376ae37.glb"
  },
  46390: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Red Banner Flag Hanging.a22cc98245e658223042.glb"
  },
  46398: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Red Banner Flag.aa406f98ef9444264579.glb"
  },
  46403: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Red Banner Hanging.563cd16072672db73802.glb"
  },
  46412: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Red Bed Head.76958dad424fd8c7c924.glb"
  },
  46419: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Red Strongbed Head.64ffa69b9474dd76fea0.glb"
  },
  46428: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Sheep Painting Bottom Left.43af975cef0cbce06f8f.glb"
  },
  46435: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Sheep Painting Bottom Right.d307fb60c4b0f254e878.glb"
  },
  46439: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Sheep Painting Top Left.fda4cd2f8aa1abd8468c.glb"
  },
  46448: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Sheep Painting Top Right.8b3b4c019c808b4c14d5.glb"
  },
  46450: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Skull Banner Flag Hanging.a103df5c29d654ca6158.glb"
  },
  46455: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Skull Banner Flag.e963e24eca4042657917.glb"
  },
  46464: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Skull Banner Hanging.49a522ddf60661db6e4f.glb"
  },
  46472: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Black Pod Mid.03843aff015106df28cc.glb"
  },
  46475: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Black Pod Top.8cf8eb5d19d2db960536.glb"
  },
  46484: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Blue Pod Mid.757a12f8330ea7b6a38e.glb"
  },
  46488: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Blue Pod Top.6760b73896cf699f43f9.glb"
  },
  46491: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Brown Pod Mid.3d48e12552338a48939d.glb"
  },
  46496: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Brown Pod Top.ae69c03aad428bfc1dc6.glb"
  },
  46504: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Cyan Pod Mid.b5a69a479f34d956c1ef.glb"
  },
  46511: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Cyan Pod Top.1075afb3ef4c7df4a2eb.glb"
  },
  46515: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Gray Pod Mid.c4d9b17cf3bba57e36d5.glb"
  },
  46524: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Gray Pod Top.b572a539cc65c0c6fef6.glb"
  },
  46530: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Green Pod Mid.dbc00603628f2be74cc3.glb"
  },
  46532: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Green Pod Top.a78986447b371d85cf8c.glb"
  },
  46536: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Light Blue Pod Mid.6c3aea9246e6ffc31db8.glb"
  },
  46538: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Light Blue Pod Top.a892261ae5618993ba64.glb"
  },
  46546: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Light Gray Pod Mid.536b25600295a14cd2cf.glb"
  },
  46548: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Light Gray Pod Top.26e4ef46d71789406482.glb"
  },
  46550: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Lime Pod Mid.9f6098fccc660db46bcf.glb"
  },
  46552: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Lime Pod Top.ab72e3b1ba9cc548de53.glb"
  },
  46560: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Magenta Pod Mid.0b20235584f72a3e4c36.glb"
  },
  46568: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Magenta Pod Top.9e0dcff4f7ac81b70c1a.glb"
  },
  46574: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Middle Pod Mag.3a1132b1fb5a71e90cfb.glb"
  },
  46576: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Orange Pod Mid.cdb76084e06a01174933.glb"
  },
  46584: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Orange Pod Top.32d1a6f20df4042d0a51.glb"
  },
  46589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Pink Pod Mid.bc910a35fe0eee502325.glb"
  },
  46591: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Pink Pod Top.2433e4eed13aff1b371c.glb"
  },
  46594: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Purple Pod Mid.df0d724d4ee73129a50e.glb"
  },
  46603: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Purple Pod Top.e16abd5aba6cbc5950fe.glb"
  },
  46605: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Red Pod Mid.165aacb8d7326a9ad53a.glb"
  },
  46612: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Red Pod Top.4c99667582ab9e3c35e9.glb"
  },
  46614: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small White Pod Mid.84176311551e4916216f.glb"
  },
  46623: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small White Pod Top.2210a083892d21e744cb.glb"
  },
  46627: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Yellow Pod Mid.9714689721f4cbbfb8cc.glb"
  },
  46633: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Small Yellow Pod Top.dcdab8fb3a278bf3db82.glb"
  },
  46639: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Spectral Door Top.bdfaca331bcc91f62b7e.glb"
  },
  46648: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_White Banner Flag Hanging.25d8007c46b4fb74a389.glb"
  },
  46652: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_White Banner Flag.d98dc6d787a484cbba6c.glb"
  },
  46660: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_White Banner Hanging.7b1a2a66bccb8529bcd7.glb"
  },
  46669: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_White Bed Head.f08faf8b0a1975e20aff.glb"
  },
  46674: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_White Strongbed Head.e6d70c8c1b67996f80a9.glb"
  },
  46682: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wildcat Painting Bottom Left.03df3eaca977d6a1e33c.glb"
  },
  46689: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wildcat Painting Bottom Right.75639f21610efe2eca46.glb"
  },
  46697: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wildcat Painting Top Left.bc9b03cda4006c17302f.glb"
  },
  46704: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wildcat Painting Top Right.621b968b75d39bfa4cf6.glb"
  },
  46707: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wolf Painting Bottom Left.5a1a9a5adc4c42676f17.glb"
  },
  46715: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wolf Painting Bottom Right.764338590135d60ba4a5.glb"
  },
  46718: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wolf Painting Top Left.6bfc627b449b7dde4daf.glb"
  },
  46723: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Wolf Painting Top Right.694dca804ab3cf5b64d8.glb"
  },
  46728: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Yellow Banner Flag Hanging.e4908078e51d3fa60832.glb"
  },
  46730: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Yellow Banner Flag.65d24d652d7e2574270f.glb"
  },
  46734: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Yellow Banner Hanging.f26b387b23ccf8533050.glb"
  },
  46736: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Yellow Bed Head.4552feeb5d0871e044d9.glb"
  },
  46743: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/_Yellow Strongbed Head.3949850260f428146b7f.glb"
  },
  46746: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_body.25e8dd3d58c1992c9e03.glb"
  },
  46752: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_drill_back.22bdc56b5f4dd481c732.glb"
  },
  46756: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_drill_front.ef9fc3de8896d485d0ac.glb"
  },
  46758: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_foot_back.210a50f0d9a2a33b886d.glb"
  },
  46764: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_foot_front.a29e1ea1f289a2525883.glb"
  },
  46766: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_lunite_body.2b6a4c376368a207921d.glb"
  },
  46768: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_lunite_drill_back.a1d0e139c3830b6116bc.glb"
  },
  46777: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_lunite_drill_front.2509610a64cc06486cf4.glb"
  },
  46781: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_lunite_foot_back.6549c238da6014445206.glb"
  },
  46786: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_miner_lunite_foot_front.b65f7f9c66b201034fc6.glb"
  },
  46792: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_none.1af577ef74c59ca3711e.glb"
  },
  46798: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx.50e8d550535b23eb7b0c.glb"
  },
  46806: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny.ad1fc6768d20e0dadf29.glb"
  },
  46808: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz.c08504e0b96d5b02da20.glb"
  },
  46814: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px.a8c164a84dac50ebf83b.glb"
  },
  46819: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py.b4b39bcdd890d611d563.glb"
  },
  46828: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py_pz.3bc5e82d654850681a7e.glb"
  },
  46830: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_pz.25d193228b9b407653a0.glb"
  },
  46838: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py.954d9aba0e5fc700e618.glb"
  },
  46841: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py_pz.ed28e69d1166442f5afe.glb"
  },
  46845: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_nz_pz.8abac3ce07dd4df7def8.glb"
  },
  46853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_px.c05f5b3a29a8b38a74dc.glb"
  },
  46860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_px_py.c494e6c0f4d7f43ef65d.glb"
  },
  46869: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_px_py_pz.08a75b32f3d3f1367e61.glb"
  },
  46875: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_px_pz.dfa1eefb590a79130a0c.glb"
  },
  46883: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_py.df3b2fd89b174e33712d.glb"
  },
  46892: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_py_pz.aa9e43468f5c67284072.glb"
  },
  46896: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_ny_pz.eff9afebed04c9f45673.glb"
  },
  46899: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz.617efa509a950b46031c.glb"
  },
  46906: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_px.44e78fe002d03549ed70.glb"
  },
  46914: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_px_py.874da5d27960082260a5.glb"
  },
  46923: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_px_py_pz.201fe963e550b1bbfc5a.glb"
  },
  46925: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_px_pz.62208ad593e3adf43e58.glb"
  },
  46932: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_py.e45d119a76498366d672.glb"
  },
  46939: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_py_pz.fdab81d0d48420bf2a67.glb"
  },
  46943: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_nz_pz.0ef6fcae4f3fa615df37.glb"
  },
  46945: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_px.cb1e04b733c1f861cd6a.glb"
  },
  46954: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_px_py.cd9c868b41ec3c72e318.glb"
  },
  46960: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_px_py_pz.8c952fc3b2040e72489c.glb"
  },
  46963: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_px_pz.99f25ad2959b31482feb.glb"
  },
  46970: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_py.52611f014ea751a78ede.glb"
  },
  46974: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_py_pz.51e1f31d8a38119f5bf0.glb"
  },
  46982: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nx_pz.86b6a820036982207bb4.glb"
  },
  46990: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny.11819ea4df81ddb74d7a.glb"
  },
  46998: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz.a2aa549f70b4fda24a35.glb"
  },
  47003: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_px.cb149deb1b4525756883.glb"
  },
  47006: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_px_py.1870f5655bf3c4e08897.glb"
  },
  47014: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_px_py_pz.24d54d010d5b2b1b2f6f.glb"
  },
  47018: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_px_pz.c16d7378b0d0cd37fc4f.glb"
  },
  47027: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_py.feb88cf2ed317948ef3c.glb"
  },
  47030: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_py_pz.be305a5a1769ed54121f.glb"
  },
  47034: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_nz_pz.a81310a530a7254d0d25.glb"
  },
  47037: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_px.c1e79318e74a4bf37eab.glb"
  },
  47043: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_px_py.bdeef9e0a9a36c7c216e.glb"
  },
  47046: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_px_py_pz.a5669fa7ccdf25487694.glb"
  },
  47051: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_px_pz.3bf1496e5db7d7be0b60.glb"
  },
  47056: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_py.689f0e07c9cbb01285db.glb"
  },
  47065: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_py_pz.300e54c3aadf69295c54.glb"
  },
  47074: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_ny_pz.da410a7234f71cb70bb5.glb"
  },
  47076: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz.fa50055e81630bf747c9.glb"
  },
  47083: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_px.720cd952ce2e1af29226.glb"
  },
  47088: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_px_py.1746723455df46daa829.glb"
  },
  47097: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_px_py_pz.d37fbfadb9466de4393d.glb"
  },
  47100: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_px_pz.09731490eabc55907e09.glb"
  },
  47106: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_py.cd0b240636e714c8c4fb.glb"
  },
  47115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_py_pz.5b902651c90d6ed49340.glb"
  },
  47124: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_nz_pz.193e640bb482e126a6c7.glb"
  },
  47128: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_px.19dee2c6025176ef7fc5.glb"
  },
  47135: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_px_py.68a77eff7799ba4b4842.glb"
  },
  47137: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_px_py_pz.3b1842dbce9a3e915015.glb"
  },
  47142: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_px_pz.c9bfca918420ed622650.glb"
  },
  47146: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_py.4e6306c19edf8a0eb648.glb"
  },
  47155: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_py_pz.03d093879d5689ca5cd6.glb"
  },
  47159: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_coolant_pipe_pz.0208c229844bc8c71bd1.glb"
  },
  47165: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_none.66acffc7f5d58af52183.glb"
  },
  47173: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx.2141d711ad82ede24cb1.glb"
  },
  47180: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny.d8673ebc2a58da04a0f6.glb"
  },
  47188: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz.07e2c6827b9fe6777b52.glb"
  },
  47190: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px.52b8789a08f0fa1819b4.glb"
  },
  47197: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py.33a7e6e0ad06872dc6dd.glb"
  },
  47200: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py_pz.48d3e863ca0527bf6a35.glb"
  },
  47205: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_pz.f2269dc58eb0965b92a5.glb"
  },
  47212: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py.e74b21326fdce69935db.glb"
  },
  47219: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py_pz.01bf008683b888a363bf.glb"
  },
  47223: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_nz_pz.da1abb0700f299b2c7f3.glb"
  },
  47226: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_px.023e0b16a8b4a81a1e1e.glb"
  },
  47235: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_px_py.14be63fed9a2a83e2b83.glb"
  },
  47238: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_px_py_pz.fe5326b03ed4ddd2ea80.glb"
  },
  47244: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_px_pz.b63b3b4c5b0faa1af889.glb"
  },
  47253: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_py.a9320721784065ac429e.glb"
  },
  47261: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_py_pz.7b102449b962a9de0778.glb"
  },
  47266: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_ny_pz.dacd39cf27fd66fb8d1a.glb"
  },
  47273: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz.ef1c4516e1ffbcf811a2.glb"
  },
  47282: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_px.ab3b6063176991833e75.glb"
  },
  47288: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_px_py.0edbde347f3012476955.glb"
  },
  47295: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_px_py_pz.495a995d9f932d8fab0b.glb"
  },
  47300: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_px_pz.e3e1f48a1d1e5d9ee4a1.glb"
  },
  47304: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_py.dbfc7fb32c140963c08b.glb"
  },
  47311: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_py_pz.81ccfb336084e3fa577b.glb"
  },
  47320: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_nz_pz.cc87f2c598308d562978.glb"
  },
  47323: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_px.9e41b73ef011ffee66ea.glb"
  },
  47329: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_px_py.3d608b17a37b4613167f.glb"
  },
  47333: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_px_py_pz.f1fe2f58bf6e862d9173.glb"
  },
  47341: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_px_pz.94b3d6e4117770f96697.glb"
  },
  47349: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_py.dccb722acc03431af9bd.glb"
  },
  47353: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_py_pz.e4bb2d40a0c1ba9da732.glb"
  },
  47360: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nx_pz.0588de1d3218ea60e964.glb"
  },
  47366: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny.e0d0131e2387d5945f98.glb"
  },
  47372: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz.9006463b1f64dac83a9a.glb"
  },
  47380: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_px.1ede4fe27827979e2e03.glb"
  },
  47383: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_px_py.8bb126fe8da5934dd368.glb"
  },
  47391: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_px_py_pz.404995ea22a8ced61032.glb"
  },
  47397: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_px_pz.67fcc6113bb375cb50a3.glb"
  },
  47404: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_py.00fb5577be690f9e43b3.glb"
  },
  47410: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_py_pz.395661b61d9cbca89e55.glb"
  },
  47412: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_nz_pz.3be10b4d312d728780d2.glb"
  },
  47418: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_px.32492a7c7270b7ce2011.glb"
  },
  47424: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_px_py.df836d7685d4b950d9c6.glb"
  },
  47430: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_px_py_pz.e0ce4eb4b6972e195c51.glb"
  },
  47434: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_px_pz.f60ea06e41627ba57c1b.glb"
  },
  47443: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_py.464a7b3715d9b1c9a72e.glb"
  },
  47452: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_py_pz.973cdc793fb92aa54e54.glb"
  },
  47458: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_ny_pz.fef3705aaecf6f9be119.glb"
  },
  47463: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz.1b240e8ee91a0d50bcee.glb"
  },
  47468: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_px.d30cc078bb9f2a29d268.glb"
  },
  47470: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_px_py.c1123eb5c2f63b3e3412.glb"
  },
  47472: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_px_py_pz.f5da65a138361b2a8709.glb"
  },
  47480: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_px_pz.e1312edf73c98a8ccda9.glb"
  },
  47483: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_py.466cee7ce6fb609e0067.glb"
  },
  47486: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_py_pz.d09739fa3d081b752248.glb"
  },
  47493: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_nz_pz.f87d5ded07da2697aa9c.glb"
  },
  47495: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_px.b7885e6375f5697dd42a.glb"
  },
  47499: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_px_py.cc73936034ae5b4f4cf1.glb"
  },
  47504: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_px_py_pz.a6389b0c323cfae22abc.glb"
  },
  47511: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_px_pz.68ed2bdfd158dc08fd14.glb"
  },
  47518: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_py.7bec0e40bb0ddc06d354.glb"
  },
  47520: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_py_pz.df64db5753465cf582fe.glb"
  },
  47524: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_fluid_pipe_pz.3e445f247d6209e26dfc.glb"
  },
  47532: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_none.959fb60326c0161899f5.glb"
  },
  47537: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx.4a2afed9b2bfdf9e84d5.glb"
  },
  47544: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny.7f8a49da3e5df85d2e05.glb"
  },
  47551: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz.7183a2ad910ac1b8265c.glb"
  },
  47554: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_px.bbdca7e7e719fac8f40a.glb"
  },
  47557: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py.33e9d28887905dae25a0.glb"
  },
  47564: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py_pz.3e4b5e2d710523af450d.glb"
  },
  47566: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_px_pz.86210e41b8794c4c52b6.glb"
  },
  47574: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_py.725970eaab3eb4d77a3a.glb"
  },
  47581: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_py_pz.df04defee063aabe1b73.glb"
  },
  47589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_nz_pz.c6bc0fc76688d0a555ae.glb"
  },
  47598: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_px.4d09672bb6825b5bbbfc.glb"
  },
  47607: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_px_py.7944c7a0db75e620d730.glb"
  },
  47614: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_px_py_pz.f20f4999f65c57425866.glb"
  },
  47618: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_px_pz.faf8f8529d0ce91fdf4c.glb"
  },
  47625: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_py.2fedfca3f35bfd9e1bb9.glb"
  },
  47629: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_py_pz.dba20102b9f56f990c88.glb"
  },
  47634: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_ny_pz.5d1790a75590383e773f.glb"
  },
  47637: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz.49274c43aeed26fd4ef4.glb"
  },
  47641: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_px.0f605f55ca48a5c38566.glb"
  },
  47646: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_px_py.6df1fee6834ff3ae1af8.glb"
  },
  47649: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_px_py_pz.2f50a237bd408d1e4108.glb"
  },
  47658: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_px_pz.35311a6efb185379d57c.glb"
  },
  47667: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_py.0dbcb74a8e6a8fb91705.glb"
  },
  47669: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_py_pz.db8056ea6e1319f8fa9b.glb"
  },
  47677: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_nz_pz.3a6446eef5f2a19a7c02.glb"
  },
  47685: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_px.f714bdceb7ff8bc2d7c6.glb"
  },
  47692: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_px_py.eff04d4a8f8d04179080.glb"
  },
  47697: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_px_py_pz.dc9261285252e2d87c11.glb"
  },
  47700: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_px_pz.fbe75a80c3962b4c230f.glb"
  },
  47708: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_py.228fef41c76416f85a40.glb"
  },
  47717: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_py_pz.81fb33caf62cd77ece9e.glb"
  },
  47724: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nx_pz.fb6c0915f37d826ecb71.glb"
  },
  47730: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny.72c5fefbc407e3c94d7d.glb"
  },
  47732: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz.8453217dfc81d9fdb4cc.glb"
  },
  47741: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_px.c2ecdfbc9a2258b2c86d.glb"
  },
  47749: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_px_py.b92643b6f97070d606a4.glb"
  },
  47757: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_px_py_pz.8a680ed2ee9d22912920.glb"
  },
  47759: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_px_pz.5caf67dd0ba555991bca.glb"
  },
  47768: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_py.f0b5c8c68b7c2818a273.glb"
  },
  47774: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_py_pz.30bf4c1260a9a927edc7.glb"
  },
  47779: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_nz_pz.e8449324b1596b364cbe.glb"
  },
  47785: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_px.f0fff38f58a9ed5eb8ac.glb"
  },
  47787: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_px_py.eecc9a2ac147fc45443a.glb"
  },
  47793: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_px_py_pz.3258fa80a7509e535947.glb"
  },
  47799: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_px_pz.ea5abb502c75a940d968.glb"
  },
  47803: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_py.4ac410ed28621878d2b1.glb"
  },
  47808: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_py_pz.52cef6879cd15e96ca1b.glb"
  },
  47817: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_ny_pz.32fd00ca42bc17e2c68e.glb"
  },
  47824: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz.ca2c954a587efe162c35.glb"
  },
  47827: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_px.3bcea64e47319b7b880f.glb"
  },
  47836: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_px_py.f3e6e6ba5278c97914bf.glb"
  },
  47840: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_px_py_pz.558697ec67340fc619af.glb"
  },
  47846: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_px_pz.1671d3e52c6ef989150c.glb"
  },
  47851: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_py.eb93ca9526bf9d09ba86.glb"
  },
  47856: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_py_pz.de8a55687ae9be5ba4d9.glb"
  },
  47863: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_nz_pz.f6103bfd1cdf00ee3161.glb"
  },
  47867: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_px.a3a44662d7f1190bf941.glb"
  },
  47876: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_px_py.405ca5ab6d9abaf15acf.glb"
  },
  47883: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_px_py_pz.6fc123c7df272fe11b5d.glb"
  },
  47890: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_px_pz.0a315850e3bbae5f4e65.glb"
  },
  47892: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_py.27580a9a7a6a5e467959.glb"
  },
  47898: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_py_pz.b7029c4acc73fe990edc.glb"
  },
  47902: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/baf2_water_pipe_pz.524026c434bf1312ee9a.glb"
  },
  47906: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beam_arm.b18aa154bc2c6abe6fc8.glb"
  },
  47911: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beam_arm_mirrored.51021c5f58fbb0547768.glb"
  },
  47918: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bebek_bebek_bebek.213c53f222e7fa6eabb2.glb"
  },
  47925: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bin.9fa9eefc2e94c7d9b671.glb"
  },
  47932: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bobino_musculino.5299a37ff20b22d4b554.glb"
  },
  47934: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bobzilla.b6343c4b9c8fd834bd27.glb"
  },
  47936: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/boiling_pot.8c86fd13aab6c90f8c6e.glb"
  },
  47940: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bone_antlers_model.2263c631b87b5497cf0b.glb"
  },
  47948: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/boss_target.7461ecf8acb8547cbe45.glb"
  },
  47952: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brra_brra_pachim.877c62f4a0a46afdfac9.glb"
  },
  47955: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_barrel_back.0e93895efce3885c17c7.glb"
  },
  47960: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_barrel_front.2b26819e9934a7658fa8.glb"
  },
  47965: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_bottom_back.315dd2aba0300464ac4e.glb"
  },
  47971: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_bottom_front.8bfe273a143f4b48c4fa.glb"
  },
  47979: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_top_back.251ffa29da6924db15be.glb"
  },
  47981: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cannon_top_front.ae1de6c9084d8b5d7c8d.glb"
  },
  47983: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/capitano_explovissimo.f892d427e38849f88e55.glb"
  },
  47988: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cappuccino_ninjino.d8d33979c4bc5bb10825.glb"
  },
  47990: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_black_model.4e2ca86172657d75d22d.glb"
  },
  47996: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_blue_model.d1390a0d4896851445b2.glb"
  },
  48002: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_brown_model.5f252fa89cc2a59aefa8.glb"
  },
  48008: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_cyan_model.2ea1e9bf8e018ead4a5a.glb"
  },
  48011: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_gray_model.9a587763cbf12b2f28e6.glb"
  },
  48018: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_green_model.f14e23acb31944480b22.glb"
  },
  48026: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_light_blue_model.3063d4f50964e9d4c3d7.glb"
  },
  48035: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_light_gray_model.b94a423a18f30bf0a5b6.glb"
  },
  48041: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_lime_model.7768b17ad76779125eee.glb"
  },
  48050: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_magenta_model.54a3fc9bd4d62c98a6db.glb"
  },
  48053: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_orange_model.1973f2055fec73ac57e6.glb"
  },
  48062: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_pink_model.3683ae623bddd233a5fe.glb"
  },
  48067: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_purple_model.f37a0e1526c2ca4e2a7d.glb"
  },
  48075: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_red_model.cfd6e343a3fab0b6e25a.glb"
  },
  48081: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_white_model.6a52cd82a15248f76f1a.glb"
  },
  48089: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carpet_yellow_model.c7b7dce1e3573d9fd34f.glb"
  },
  48091: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage0_lava_model.de57c195bd97f3fb2e16.glb"
  },
  48097: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage0_model.fc6dd2ad394c327c2dc1.glb"
  },
  48102: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage1_lava_model.6197d89c39f4c13f42b9.glb"
  },
  48109: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage1_model.30ab224de60dd6576dda.glb"
  },
  48115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage2_lava_model.81db0a3a753160a5993f.glb"
  },
  48122: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage2_model.cc0b8a17019285e9e191.glb"
  },
  48130: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage3_lava_model.906805ce52ff01217c09.glb"
  },
  48134: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage3_model.0b958f72eb984d0b0fee.glb"
  },
  48141: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage4_lava_model.94d5af3a2e78c1bf5475.glb"
  },
  48144: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage4_model.c52492e3df2205ce4273.glb"
  },
  48147: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage5_lava_model.a7136e0c606fe579056e.glb"
  },
  48155: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage5_model.d90ff33f15e468d91a75.glb"
  },
  48161: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chili_pepper_stage6_lava_model.36852b90667287605903.glb"
  },
  48164: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chimpanzano_bananano.2d445f2a0eb256e13a97.glb"
  },
  48166: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chopping_board.3c57d470d586e1dfeb2c.glb"
  },
  48168: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/crystal.dba112fa8a8394d8b1d5.glb"
  },
  48177: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/eclipse_dial.956489de2f80d089e04c.glb"
  },
  48183: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nx_ny.083a53c6f1c24a9757f0.glb"
  },
  48188: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nx_nz.801e1824437a8ace684b.glb"
  },
  48196: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nx_py.65f1e3264ff2283386bf.glb"
  },
  48201: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nx_pz.a448f59a6bb183c0e39c.glb"
  },
  48205: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_ny_nz.ecdf141d7d1653019c32.glb"
  },
  48212: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_ny_px.5f220c72639bc6ec1734.glb"
  },
  48215: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_ny_pz.4d504cfec957af83647e.glb"
  },
  48217: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nz_px.9b96308cd4ac5cd58ada.glb"
  },
  48225: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_nz_py.8465f28b8c684d7fb829.glb"
  },
  48230: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_px_py.fd91d6d5eb2fc91daa8b.glb"
  },
  48237: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_px_pz.e917172f979aa356014a.glb"
  },
  48240: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_elbow_py_pz.218c1542fa9adaeb5ba4.glb"
  },
  48246: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_nx.8bb0b2ad8f8644508347.glb"
  },
  48255: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_ny.b4afa7545f92319c62a3.glb"
  },
  48259: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_nz.c6ee96868c48ac35f608.glb"
  },
  48261: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_px.65915d43490b1937e3ba.glb"
  },
  48266: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_py.444a71977c0c1fbe4b5f.glb"
  },
  48271: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_end_pz.12c7d5085dec5f84915b.glb"
  },
  48273: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_isolated.97cfc28c33aacdb3e72a.glb"
  },
  48278: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_straight_x.e2a817762316f51651bc.glb"
  },
  48283: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_straight_y.bfa34910a1cde4b98d43.glb"
  },
  48290: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/extractor_pipe_straight_z.b47dc06b45b4886a5c6e.glb"
  },
  48297: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_nx.abdb1f2b92e67ec7a6f5.glb"
  },
  48305: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_ny.91a758aaffc187ebf84e.glb"
  },
  48313: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_nz.eaedcc3e56b6397a56bd.glb"
  },
  48318: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_px.f67d46338784b81dfa00.glb"
  },
  48323: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_py.6e32ecec254e8c9f62b9.glb"
  },
  48330: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/filter_pipe_input_pz.eaa83a9b426aefb06f04.glb"
  },
  48333: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/floor_quarters.a7383fb07de75c78acff.glb"
  },
  48338: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/football.4ed7b444dffd04850e1a.glb"
  },
  48343: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/frying_pan.88d74257d6db5f22a9dd.glb"
  },
  48345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/glowing_mushroom.8a55fddc4cc5af4b0bb7.glb"
  },
  48354: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/glowing_mushroom_wall.77bbad965e1a6eb9b9eb.glb"
  },
  48359: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/gold_antlers_model.5033cbd20d5db323bd18.glb"
  },
  48365: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/hob_boiling.7aa8a7f33fcfaabb3c38.glb"
  },
  48368: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/hob_frying.c0d5b6b56a8e0d37c719.glb"
  },
  48372: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/il_wizardini_del_porko.16afd57bb54527352f48.glb"
  },
  48374: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/job_application.c8c3322a4d5b76f401c4.glb"
  },
  48379: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/john_beef.f285b5bbbe3270e84f4e.glb"
  },
  48383: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jump_pad.31f58abe195cbf81d544.glb"
  },
  48392: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jump_pad_strong.199b102ca146e54d6f26.glb"
  },
  48397: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jump_pad_super.01623abb40ae27b2f5c3.glb"
  },
  48406: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jump_pad_weak.9865db358d387cdb3808.glb"
  },
  48413: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/kitchen_worktop.93738fa632ca0cd3c887.glb"
  },
  48415: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/landing_pad.6cf815cc5adc6357aa7e.glb"
  },
  48420: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lantern.b4f5e080292b6bcec9de.glb"
  },
  48427: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lantern_wall.d700566f3dbc7c5edfb5.glb"
  },
  48432: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lily_pad_model.fe52332121384cb7a7c1.glb"
  },
  48437: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lucchia_blocchi.cbeaea2490a784825f22.glb"
  },
  48443: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_nx.8363ba1ae35163cc614b.glb"
  },
  48446: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_ny.2d49f0baa47b9e673cd9.glb"
  },
  48448: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_nz.fa00b8fe22439a87a135.glb"
  },
  48452: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_px.0dbb5a9dfc66657f41b0.glb"
  },
  48457: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_py.ea13e5adbf80924e036f.glb"
  },
  48464: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/merger_pipe_output_pz.9dd053b2f431de48e28d.glb"
  },
  48468: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/monsieur_bedwar.11e13eee2b04c9fa7ec3.glb"
  },
  48473: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mortar_goblin.b50e40421dd86c0d1024.glb"
  },
  48478: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing.b20df80c01a72cbebe5b.glb"
  },
  48481: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_bottom.b1a0883ecb1db88792a5.glb"
  },
  48488: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_bottom_left.8c07a91fec14b3745eb4.glb"
  },
  48497: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_bottom_right.1b09f2bb2d6f0822151e.glb"
  },
  48504: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_horizontal.6a5ef177dfb97d0f375f.glb"
  },
  48513: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_horizontal_left.be67a73bf033df090585.glb"
  },
  48520: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_horizontal_right.5838e354cd916a6852ca.glb"
  },
  48528: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_left.11a2206b2f5b12e2068d.glb"
  },
  48531: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_leg.838d46ae86129005cf46.glb"
  },
  48537: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_right.5f3dcaaf00c0d002a496.glb"
  },
  48540: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_single.e6f346b9cfaccbdb42be.glb"
  },
  48545: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_top.a79e1fd678b8fe09c969.glb"
  },
  48549: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_top_left.05c9e273ed39b69b3f7e.glb"
  },
  48551: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_top_right.211791c2f6cdaf03fa17.glb"
  },
  48553: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_vertical.35aea38fcfa1b3fb9bf4.glb"
  },
  48562: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_vertical_bottom.ada88480f62e41f1dab4.glb"
  },
  48569: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_standing_vertical_top.5dc2db1fee41788dbb17.glb"
  },
  48578: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall.ff9a27ba5731df12e44d.glb"
  },
  48580: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_bottom.2d29aaf8b2a08f409c26.glb"
  },
  48586: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_bottom_left.5260e03cd66029355bcc.glb"
  },
  48592: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_bottom_right.3c7faeeb89cf5fd8d3a0.glb"
  },
  48594: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_horizontal.6a2c8562a4ea173fbdcf.glb"
  },
  48601: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_horizontal_left.f5209b80e6eadef6c78c.glb"
  },
  48603: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_horizontal_right.a39a51b5f9417a5cd42b.glb"
  },
  48607: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_left.6e5638da4acaefd2b669.glb"
  },
  48609: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_right.b8cde43e7de962bc619b.glb"
  },
  48614: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_single.e18ee19c8ff0b65d473a.glb"
  },
  48623: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_top.a639d40d4c6d0036db3d.glb"
  },
  48631: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_top_left.b988fb63ca89b93a1707.glb"
  },
  48635: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_top_right.849243aaf2ad5ae08bb7.glb"
  },
  48642: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_vertical.b0cb186a9af1969e972a.glb"
  },
  48645: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_vertical_bottom.0e82577bb9aab80792b5.glb"
  },
  48649: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/noticeboard_wall_vertical_top.b98b5902779b57fbf71e.glb"
  },
  48653: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nx_ny.89d1b6e36a353106be6b.glb"
  },
  48655: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nx_nz.d2945b07b0dd4b771758.glb"
  },
  48660: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nx_py.d0109ae52ed03aa6715f.glb"
  },
  48666: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nx_pz.bfc5f0b1ae6f9c18a40f.glb"
  },
  48672: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_ny_nz.8304c11ee0165631f127.glb"
  },
  48681: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_ny_px.bb670945340fa6f8f288.glb"
  },
  48685: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_ny_pz.1e85cf482585d84e131b.glb"
  },
  48694: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nz_px.7be0416b3e45d99c5ea7.glb"
  },
  48701: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_nz_py.6287e8f1c1697d935a4f.glb"
  },
  48703: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_px_py.ae824fd68bdb60d85305.glb"
  },
  48712: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_px_pz.8ff41b9727fa9c40a08c.glb"
  },
  48720: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_elbow_py_pz.2515de3d522a06906080.glb"
  },
  48725: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_nx.4bb1d3f0432ed2af5dfa.glb"
  },
  48734: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_ny.0499413fa7b695d8a259.glb"
  },
  48741: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_nz.746b3dcd8ba70dbf8517.glb"
  },
  48743: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_px.5cbbfe1ad98dd922a45f.glb"
  },
  48745: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_py.3115f8060017dfe0962a.glb"
  },
  48752: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_end_pz.6a4dabb47d14533ac501.glb"
  },
  48756: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_isolated.a615f633db853fd14881.glb"
  },
  48764: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_straight_x.134b8b3ba65a01487e33.glb"
  },
  48769: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_straight_y.0e2eb7b04f7deb08a5ee.glb"
  },
  48771: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pipe_straight_z.d100e5801643952af4d3.glb"
  },
  48776: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_full.566394d4c3c00b12ed5c.glb"
  },
  48784: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northeast_1.1b78d84678e0822df680.glb"
  },
  48793: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northeast_2.7cc566556ea957a48357.glb"
  },
  48799: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northeast_3.6c46832fa06619771f01.glb"
  },
  48801: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northeast_4.8fff6428090594ba7ca3.glb"
  },
  48807: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northeast_5.c4183e7f8f4860746f01.glb"
  },
  48814: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northwest_1.4aece19484ab7481c0f8.glb"
  },
  48816: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northwest_2.bea9981c3000eae9e630.glb"
  },
  48822: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northwest_3.56c2dc6b11ea84446c6c.glb"
  },
  48830: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northwest_4.d0f3dfd5e400daa181a6.glb"
  },
  48834: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_northwest_5.af721581e1c9e25fcc90.glb"
  },
  48837: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southeast_1.75bc6b110264eb07925f.glb"
  },
  48840: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southeast_2.fd011c1abced7d2b8f75.glb"
  },
  48844: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southeast_3.4aaae59bf5829933e5a5.glb"
  },
  48847: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southeast_4.cdf4a53d1cbba7d2edbd.glb"
  },
  48853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southeast_5.547ea7fbca890f5ad93c.glb"
  },
  48860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southwest_1.6f2e562cc9f76e48d080.glb"
  },
  48862: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southwest_2.9e8538c937feed7ece7c.glb"
  },
  48871: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southwest_3.4b18da35e90928993303.glb"
  },
  48880: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southwest_4.73af81acdef9ce350c5e.glb"
  },
  48889: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rocket_southwest_5.a7eb6222be481c158bb8.glb"
  },
  48891: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rune_sigil.9b59b6bef68661218e8a.glb"
  },
  48899: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/slicing_board.e1532c6c1c707054a75e.glb"
  },
  48904: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/slime_trail.6ff9def1822a8515033d.glb"
  },
  48907: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/splitter_pipe.30bb97ca16337e8e94c1.glb"
  },
  48910: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch.1e6b6b8a1126549115db.glb"
  },
  48914: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_black.aa4c96ef329864314118.glb"
  },
  48919: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_blue.a4e5a315b5d19facff2b.glb"
  },
  48928: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_brown.2492f429b119d90eaabf.glb"
  },
  48937: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_cyan.f70fa0acefa4438ca1ef.glb"
  },
  48939: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_gray.4bacfaaf232b69d26451.glb"
  },
  48946: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_green.0608d22726ca2777c95f.glb"
  },
  48949: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_light_blue.62e3685506970aa03c64.glb"
  },
  48954: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_light_gray.db83690e2a44822add32.glb"
  },
  48956: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_lime.b46ac9e8988e35c3288c.glb"
  },
  48960: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_magenta.de7355c3d8987a07f857.glb"
  },
  48968: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_orange.03ed5c026827b3cf2013.glb"
  },
  48974: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_pink.5db80ba10ee7475d2600.glb"
  },
  48977: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_purple.d0b7146906e60d1fd2d2.glb"
  },
  48983: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_red.67e16d0a0c6f53e7a265.glb"
  },
  48991: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall.72812b0fd7c11d446243.glb"
  },
  48997: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_black.a14c730eed9b81f210ea.glb"
  },
  48999: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_blue.11c6d1bc0a5df54f2f52.glb"
  },
  49007: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_brown.4e4dd4868cf49436301b.glb"
  },
  49016: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_cyan.7b7c2d579c22524bf6aa.glb"
  },
  49024: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_gray.e8c4c559d0cd016080f3.glb"
  },
  49029: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_green.52ecdfc1f31282d86f11.glb"
  },
  49036: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_light_blue.5db342be65a55259aa06.glb"
  },
  49040: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_light_gray.a9f2c6d92a3724f542de.glb"
  },
  49043: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_lime.d40ae3542fd492421b17.glb"
  },
  49049: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_magenta.0c7af89f15198e706870.glb"
  },
  49057: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_orange.d8ef2a8afa619dcbb12b.glb"
  },
  49066: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_pink.0706debd37cea30009bf.glb"
  },
  49074: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_purple.42439e46c9b24df1caa1.glb"
  },
  49077: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_red.368d969024275fa15a18.glb"
  },
  49084: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_white.5abd9dc1f94eb8df8f30.glb"
  },
  49093: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_wall_yellow.6efed0f8cb8562199685.glb"
  },
  49102: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_white.c2bdee6bcb7a255e54b3.glb"
  },
  49110: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_yellow.ae9e9c66a1e864aaf031.glb"
  },
  49113: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/twirlina_cappucina.dde85128f997c1c0c306.glb"
  },
  49121: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/ufo.617db0748f22cfa06954.glb"
  },
  49129: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/vending_machine_bottom.65bbb604112fa01806b4.glb"
  },
  49133: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/vending_machine_top.0cd950e833ce37f0078b.glb"
  },
  49142: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_black.7ec704f92ce13118854f.glb"
  },
  49151: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_blue.3fdf12cfb1bbe5df046f.glb"
  },
  49155: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_brown.f99e95495efa3b445f3b.glb"
  },
  49161: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_cyan.408c34abe40c4e583b69.glb"
  },
  49166: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_green.221d9d94948ba07f0146.glb"
  },
  49171: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_grey.9aec5ad30559daeeacb9.glb"
  },
  49177: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_light_blue.93df0e67d5b31edb67be.glb"
  },
  49182: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_light_grey.cac0d9e0d33fa0302c0b.glb"
  },
  49191: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_lime.250cf152a4c53c1ea267.glb"
  },
  49199: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_magenta.789452a86659bce5f701.glb"
  },
  49206: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_orange.34009e0bedfd3effd879.glb"
  },
  49209: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_pink.205d0a0f18ca0e567d9d.glb"
  },
  49215: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_purple.53d0ee9cce40b3f48b5b.glb"
  },
  49222: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_red.715fb6f8c739753fecfc.glb"
  },
  49228: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_white.f1c1812799645251bad6.glb"
  },
  49233: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wave_yellow.5ebbbecde58c9cf1c0d4.glb"
  },
  49235: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheel.90ee13b9d828e804dee1.glb"
  },
  49243: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nx_ny.b7f4b211f73095120e64.glb"
  },
  49246: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nx_nz.59840571f949f7bc8768.glb"
  },
  49254: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nx_py.d4d27e93e1b31e22f79a.glb"
  },
  49263: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nx_pz.de207cefcd8316ec8fcd.glb"
  },
  49270: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_ny_nz.acdc2b53b3ccff56ccb4.glb"
  },
  49279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_ny_px.f24ba6eced5f99b313a7.glb"
  },
  49288: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_ny_pz.f8520178fb95b616edd5.glb"
  },
  49292: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nz_px.d97c2eb6671a072d0a59.glb"
  },
  49298: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_nz_py.6b6c81abcfca24a7ab43.glb"
  },
  49306: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_px_py.7492fefcc9a22a895dfc.glb"
  },
  49315: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_px_pz.9934c295bea0122d439d.glb"
  },
  49321: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_elbow_py_pz.4ccddb5f0bc632ff3084.glb"
  },
  49327: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_nx.38726e55cc09c7f851e3.glb"
  },
  49329: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_ny.9704daa44c9d4579056a.glb"
  },
  49337: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_nz.c2763322027fba73cc8e.glb"
  },
  49345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_px.703db8100fe7cf8cfdad.glb"
  },
  49348: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_py.8f969bdae632686ac91c.glb"
  },
  49354: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_end_pz.fa6d20d5fb9c7397c595.glb"
  },
  49363: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_isolated.db20b8ec3a9d3a112352.glb"
  },
  49371: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_straight_x.cf855e04a4511b9d2d5a.glb"
  },
  49380: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_straight_y.830de69a478259bbbcb1.glb"
  },
  49383: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_straight_z.c10b101b6493639cadf0.glb"
  },
  52042: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/allium.f1d3e796bfcb373fe1b5.png"
  },
  53031: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/alloy_kiln_top.0d64a8c946004b7849bb.png"
  },
  53244: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/aspen_door_bottom.77c3608b449f7420a6d5.png"
  },
  53113: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/aspen_door_top.69844a9807e427316500.png"
  },
  52051: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/aspen_sapling.70b524dbb33402ad786e.png"
  },
  52056: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/attached_banana_stem.dea182236c8ed756a26f.png"
  },
  52065: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/attached_banana_stem_wrapper.a74f40cfdeb0cce7af8e.png"
  },
  52068: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/attached_melon_stem.25f734cf50ce7da42ec3.png"
  },
  52070: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/attached_melon_stem_wrapper.250a4219f803318c75cd.png"
  },
  52713: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/auto_bench_top.c8e545776e504211b183.png"
  },
  52074: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/autumn_fern.7add7b408d40f9b1198a.png"
  },
  52078: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/azure_bluet.3bb3fd07608ff837c974.png"
  },
  53117: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/banana_block_bottom.2a0a94226a1cd31d052c.png"
  },
  52081: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/banana_stem.a74f40cfdeb0cce7af8e.png"
  },
  52087: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beetroot_plant_stage0.701b11f9e3dece9dc677.png"
  },
  52090: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beetroot_plant_stage1.ee6a1e21484824a02235.png"
  },
  52098: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/beetroot_plant_stage2.fb948eadbea5684fe90f.png"
  },
  53234: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/belt_tunnel_exit_top.91bf68125018003eadfe.png"
  },
  52937: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/belt_tunnel_top.d5c39e4082a79dceacf4.png"
  },
  52101: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/berry_bush_stage0.09ac0a367c3abb28554e.png"
  },
  52107: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/berry_bush_stage1.ae24d9e0ca4573439543.png"
  },
  52114: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/berry_bush_stage2.34cec7246bb15ab6464a.png"
  },
  53316: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/black_glazed_terracotta.e352b206100b41877123.png"
  },
  53168: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/black_spawn_block_top.19ff0671d98f45ed25ed.png"
  },
  52814: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/black_stained_glass.e12bff980d21df8ed15b.png"
  },
  53333: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blue_glazed_terracotta.59ca448a380280079fde.png"
  },
  52118: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blue_orchid.e4d9386ac9e9c6724c49.png"
  },
  53186: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blue_spawn_block_top.d01a14894496cec4bd2c.png"
  },
  52121: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blueberry_bush_stage0.4fff8348c62acdeef329.png"
  },
  52123: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blueberry_bush_stage1.f51f91487636ea3c2344.png"
  },
  52132: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/blueberry_bush_stage2.3f1ba2b2af712d0a678a.png"
  },
  53298: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/board_full.51012967051441d655f0.png"
  },
  52882: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brown_glazed_terracotta.195a379114520d8bebb8.png"
  },
  52135: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brown_mushroom.6a75c1838db883657f2b.png"
  },
  53057: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/brown_spawn_block_top.7203ef0370d10b4ea83b.png"
  },
  52793: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/burner_drill_top.327a04f28af7e8d3a3f7.png"
  },
  52893: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cactus_side.f44506929a369ea16364.png"
  },
  53176: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/camel_painting_art.3467288986af902ea3ae.png"
  },
  53268: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/camel_painting_art_option2.97d96b4e06ccfd508bf4.png"
  },
  52140: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carrot_plant_stage0.3ca5c7654c53bb77ef59.png"
  },
  52149: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carrot_plant_stage1.4e9b5481c07508a4af12.png"
  },
  52155: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/carrot_plant_stage2.6448f6f9ca9c85c9d5a5.png"
  },
  52164: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/catnip.2d59e5f426014213097b.png"
  },
  52166: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cauliflower_plant_stage0.56fbf3896a2598fe226b.png"
  },
  52173: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cauliflower_plant_stage1.335c6c67d2617cd61e09.png"
  },
  52180: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cauliflower_plant_stage2.5238ee0e7a9daf763e05.png"
  },
  53383: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cedar_door_bottom.3f1ea002b95bba9366b5.png"
  },
  53159: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cedar_door_top.f5624bebbfbbe31ee2c1.png"
  },
  52184: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cedar_sapling.7eb472555ac15f2c7d8a.png"
  },
  52764: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/centrifuge_top.ea55fcc4f5cf007f9607.png"
  },
  52739: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/checkpoint_block.56ad5a4f7f2fe5c77244.png"
  },
  53047: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cherry_door_bottom.084d9df0a2e70e01f925.png"
  },
  53070: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cherry_door_top.ca128b8cdd351da5237f.png"
  },
  52193: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cherry_sapling.fffb87301cd4a74137fe.png"
  },
  53140: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/chest_top.835a84c23ea1ccc51e49.png"
  },
  52733: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cobblestone_mossy.01889a92f00bf5214dc3.png"
  },
  52200: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cobweb.9e0d381641ba6a1f1d53.png"
  },
  52206: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/coffee_plant_stage0.aad94d45ff9205a0b893.png"
  },
  52211: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/coffee_plant_stage1.6925958c8be7f0d73049.png"
  },
  52220: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/coffee_plant_stage2.832ff40be200d2ed5724.png"
  },
  53106: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/collider_top.c2015f5857885d440962.png"
  },
  52865: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/condenser_top.6036395d1b2deba98fd0.png"
  },
  52673: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/coolant_mixer_top.3ae29b3909493e845e10.png"
  },
  52225: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage0.7d1542728a061c60e27c.png"
  },
  52233: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage1.4385d800bda0cb812677.png"
  },
  52240: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage2.9ce23c9a315366c8fb0c.png"
  },
  52247: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage3.549b10d86fd6d935e04c.png"
  },
  52249: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage4.8089c4d097969c9f8226.png"
  },
  52251: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/corn_stage5.ae46e59459e23d47c53f.png"
  },
  52254: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cornflower.5dffa4efb19990928255.png"
  },
  52258: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cotton_plant_stage0.246ca0e73d88cebd3299.png"
  },
  52263: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cotton_plant_stage1.48f3651c69f090a10a44.png"
  },
  52271: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cotton_plant_stage2.90a27c9bfc2871b19465.png"
  },
  52275: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cotton_plant_stage3.ebfce7f595777e193710.png"
  },
  53099: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/crop_harvester_top.aac6e464fecc85fad376.png"
  },
  52843: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/crusher_top.22a572674aebf239c8a5.png"
  },
  53126: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/crystal_vat_top.4a74d712b2f31d7ffa92.png"
  },
  52831: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/custom_lobby_block_top.fa8eca29a43acecb3c1c.png"
  },
  53358: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cyan_glazed_terracotta.12e668d83d4ff6dd1a9d.png"
  },
  53281: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/cyan_spawn_block_top.8e8653ce617f2f08101f.png"
  },
  52279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dandelion.1f8c4b42cb75491d1dbf.png"
  },
  52287: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dead_bush.1ba169f3ecbdd9546b12.png"
  },
  53274: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/deep_drill_top.9606e35119db0f884dfa.png"
  },
  52749: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_0.7fd6d0a2eade998ed079.png"
  },
  52745: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_1.6cb2d757c663046683cd.png"
  },
  52755: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_2.39c12ee9bab5846e2bab.png"
  },
  52751: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_3.3c8a2ddc4ea1bfd61055.png"
  },
  52704: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_4.2dd2cb853825c98ed904.png"
  },
  52702: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_5.a61b97c29628a6d258cf.png"
  },
  52722: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_6.631aded6f7705596c423.png"
  },
  52719: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_7.11442a780157758b2f9b.png"
  },
  52776: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_8.8de000c2ecadd8a7d32c.png"
  },
  52771: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/destroy_stage_9.b628ac3539f0c5788122.png"
  },
  52874: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/electric_drill_top.c3bbb4fbef10fbdb75b5.png"
  },
  52293: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fallen_pine_cone.666ae278dfece2f5f54f.png"
  },
  52803: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/football_block.2163f2e99f10969aa852.png"
  },
  52907: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/gray_glazed_terracotta.3acbabb47afe933c9e0d.png"
  },
  53051: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/gray_spawn_block_top.bb96b2f595d3c991808b.png"
  },
  52886: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/green_glazed_terracotta.e2e4bb19f629f2fab011.png"
  },
  53240: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/green_spawn_block_top.d785b09c3ee0537c8412.png"
  },
  52948: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/iron_chest_bottom.45762a27230a38c08e0c.png"
  },
  53133: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/iron_chest_top.9378df2839f1300ee2ab.png"
  },
  52911: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jungle_door_bottom.3de04a4b0c8a6cc3b500.png"
  },
  53019: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jungle_door_top.091112a6f1c5bc5daf1d.png"
  },
  52295: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jungle_sapling.80af0c3d116342bb10e7.png"
  },
  52297: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jungle_tall_grass_bottom.e1f103c983be99d8673f.png"
  },
  52303: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/jungle_tall_grass_top.73290a2f6ccf0a351750.png"
  },
  52305: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lettuce_plant_stage0.61bb8697576c8d2ec2d4.png"
  },
  52311: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lettuce_plant_stage1.a4fd6e8a34e339f87394.png"
  },
  52313: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lettuce_plant_stage2.0787bb4f588e5c42c47d.png"
  },
  52872: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/light_blue_glazed_terracotta.a94a553a7f669f30e083.png"
  },
  52695: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/light_blue_spawn_block_top.f419ebbe177b2f84b066.png"
  },
  53221: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/light_gray_glazed_terracotta.0e9ff5173786ae6b9091.png"
  },
  52797: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/light_gray_spawn_block_top.24eb46e4041bc46655fe.png"
  },
  53039: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/light_gray_stained_glass.4a5893d03148ce0389d6.png"
  },
  52318: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lily_of_the_valley.5252d9ae741dc8dc75a3.png"
  },
  53351: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lily_pad.6200083b756c3de49a3a.png"
  },
  52788: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lime_glazed_terracotta.a79304d4e29fdd0fece0.png"
  },
  53014: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/lime_spawn_block_top.7baf535efbf34967f621.png"
  },
  53191: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/magenta_glazed_terracotta.dff2219d98fde64710f9.png"
  },
  53257: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/magenta_spawn_block_top.a63f68c6a57e1d1e79f5.png"
  },
  52778: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mango_door_bottom.f10bf92c4d3b3c609f9e.png"
  },
  53062: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mango_door_top.2a3d2693e5e184523ee3.png"
  },
  52327: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mango_sapling.cc1331b58aa3cb30a4df.png"
  },
  52840: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/maple_door_bottom.94f27cb29279622bda1e.png"
  },
  52941: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/maple_door_top.d44aa506efdd63d3ab8e.png"
  },
  52334: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/maple_sapling.592455846ade7642267d.png"
  },
  52337: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/melon_stem.c728ad74f87544144f7a.png"
  },
  53374: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mob_farm_top.ec4a5a96b506c1434590.png"
  },
  52962: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/moonstone_chest_bottom.775190e522de9869378b.png"
  },
  52786: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/moonstone_chest_top.84c343c67b866ae67727.png"
  },
  52345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/net.d475635049459ae3f79f.png"
  },
  53009: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/orange_glazed_terracotta.1bbdee0310f62d8d539f.png"
  },
  52928: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/orange_spawn_block_top.8d6dc5a642bc70d9325e.png"
  },
  52352: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/orange_tulip.e718114316934958b914.png"
  },
  52360: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/oxeye_daisy.ad1246a1daa7482659c3.png"
  },
  52939: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/palm_door_bottom.ce50b436e4f2209d4301.png"
  },
  52974: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/palm_door_top.cd7dbb764cf674fc1ce0.png"
  },
  52366: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/palm_sapling.5fc6b3910fbff5f7a4d7.png"
  },
  52375: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/parsnip_plant_stage0.2bc7dac8e8a3f14d908e.png"
  },
  52382: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/parsnip_plant_stage1.7e3b648c278c29b5f64a.png"
  },
  52390: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/parsnip_plant_stage2.d6b992467cb774ad7944.png"
  },
  52822: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pear_door_bottom.3a208aa390fd4a5d5cad.png"
  },
  53178: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pear_door_top.15589d201da9a5901cbe.png"
  },
  52397: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pear_sapling.2ce83819d5f323b508ee.png"
  },
  53076: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pine_door_bottom.b5915523060d64916e58.png"
  },
  53067: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pine_door_top.fab478f86f27aebae6f4.png"
  },
  52403: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pine_fern.9246ba38000c33971c01.png"
  },
  52405: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pine_grass.9339a2186b62aeb03004.png"
  },
  52411: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pine_sapling.d0610704a84849c99e66.png"
  },
  53088: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pink_glazed_terracotta.13d73734274447b1af96.png"
  },
  53001: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pink_spawn_block_top.97528a0ba6f65aa9ed1d.png"
  },
  52413: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/pink_tulip.f6463eb4309d4df8c87c.png"
  },
  53288: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/plant_cacti_by_arthur.85c69d2486a4eb1def2c.png"
  },
  53262: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/plum_door_bottom.1f24b93ce57192364438.png"
  },
  52916: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/plum_door_top.9cf00530965693a3081d.png"
  },
  52421: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/plum_sapling.2c777962832e4c8e1e82.png"
  },
  52427: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/poppy.186306dc2add85b7d191.png"
  },
  52436: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/potato_plant_stage0.768a80a450537d9cd8b3.png"
  },
  52444: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/potato_plant_stage1.34dd9255d4b7102cde08.png"
  },
  52449: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/potato_plant_stage2.9dc305c0bbd670b36a70.png"
  },
  53081: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/press_top.a6ce196f8d2e836ace20.png"
  },
  53093: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/purple_glazed_terracotta.68dca8e4917bf52f3355.png"
  },
  52807: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/purple_spawn_block_top.e2685fe6babda00c0501.png"
  },
  53200: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/radar_screen0.b432239839e3aa20b22d.png"
  },
  53207: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/radar_screen1.56f9b545957c73806acf.png"
  },
  53209: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/radar_screen2.ad7e4fc5a79d47a85dfa.png"
  },
  53218: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/radar_screen3.8016fc79f13a3a7c6e11.png"
  },
  52863: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/recycler_top.9c08c0ca903cda87e6fc.png"
  },
  52458: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_cabbage_stage0.440c69d91e5aa9845bdb.png"
  },
  52460: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_cabbage_stage1.69948ea7388647e9e3f2.png"
  },
  52462: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_cabbage_stage2.d9d440108228c556354e.png"
  },
  52925: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_glazed_terracotta.f0f5d12767d6e1159ffc.png"
  },
  52468: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_mushroom.3f8d0b597caf1a064b78.png"
  },
  53377: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_spawn_block_top.eae39e7b28a0287053a7.png"
  },
  52470: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/red_tulip.dc171a26716ddeb5724a.png"
  },
  52475: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage0.8358a53a4246616aef7e.png"
  },
  52984: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage1.86598ca8635d9a144c8a.png"
  },
  52480: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage2.fbc861305666b89f9e76.png"
  },
  52486: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage3.5f0706efb3bb442e8fd7.png"
  },
  52494: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage4.90b3b74d7bc433ae2f3e.png"
  },
  52497: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage5.56c14537857b4f0d6e93.png"
  },
  52506: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage6.312c797dda5c461ee124.png"
  },
  52514: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/rice_stage7.0c233dd7fa284c3b1bfd.png"
  },
  53307: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sea_lantern.a4caabfe4e3d6e111697.png"
  },
  52522: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/shadow_rose.9780b0d37b88f705d599.png"
  },
  52986: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/shatter_mill_top.34e724db72bc524637ef.png"
  },
  52728: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/shop_trader_spawn_top.b89bbfa04449132a4df4.png"
  },
  52689: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/shop_wizard_spawn_top.dc19f94e04a00a028663.png"
  },
  52971: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sky_tap_top.1d3b9fc97cb1e027b0c4.png"
  },
  52530: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/small_cactus.db4b875acd802ae1191b.png"
  },
  52675: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/smelter_top.d0d1b051b86d8b3ef603.png"
  },
  53251: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spectral_door_bottom.2ad57b67abede2a676e2.png"
  },
  53279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spectral_door_top.43cd7de0f0f3bef2411b.png"
  },
  52538: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spectral_grass.16aa1c506434ba29d2ef.png"
  },
  52544: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/spectral_sapling.4825ceefdb9e23435268.png"
  },
  52549: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/strawberry_bush_stage0.b9755303de6eac3737f3.png"
  },
  52552: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/strawberry_bush_stage1.252923a9d73d8808c87e.png"
  },
  52556: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/strawberry_bush_stage2.74f90bc956e2adbefeb7.png"
  },
  52561: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sugar_cane_plant_stage0.6ea0910cd4abfbdaa590.png"
  },
  52568: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sugar_cane_plant_stage1.fecf1f3d4e275428e0d1.png"
  },
  52574: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sugar_cane_plant_stage2.9bb8e7bfdd3b3df9c5cf.png"
  },
  52578: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/sugar_cane_plant_stage2_top.38a798e03030b5ac2aa8.png"
  },
  53338: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/synthesizer_top.898a5c31f88f3a7e7bc0.png"
  },
  52582: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tall_grass_bottom.d1486ff65d7053080df2.png"
  },
  52589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tall_grass_top.c47b5954f3b634c3e8d3.png"
  },
  52598: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tallgrass.4023a10eead730ba902e.png"
  },
  52606: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tomato_plant_stage0.56b40905ef3343162bac.png"
  },
  52611: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tomato_plant_stage1.3ee1ec480e5b9d2083b1.png"
  },
  52617: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tomato_plant_stage2.352f23da3f602abe2807.png"
  },
  52621: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tomato_plant_stage2_top.05af5c989c07c92d3cc6.png"
  },
  53291: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_block.c28ae5cbdeea1a97e39b.png"
  },
  52698: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_blue_block.d7bf749b621b84e7ea95.png"
  },
  53329: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_cyan_block.e341232f9191cabde39c.png"
  },
  53345: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_green_block.bc23f759b1415641d108.png"
  },
  52845: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_orange_block.b63d3ce3a41741c94f82.png"
  },
  53366: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_purple_block.1a5fe5cd6180ece6d537.png"
  },
  52980: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/torch_red_block.a4f018ac1e7f11d1fa33.png"
  },
  53153: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/tree_cutter_top.253dd570fdd82a4a0122.png"
  },
  52898: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/water.5626b741808b1b53c6de.png"
  },
  52629: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage0.c5f13b2e7aae2ffa92ed.png"
  },
  53028: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage1.cba6812d10d5b6491616.png"
  },
  52637: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage2.761c842532b7e7a0ffb2.png"
  },
  52642: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage3.d35dda335d1b18435a43.png"
  },
  52648: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage4.413187bd0e4e96477931.png"
  },
  52655: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage5.a69c67e9b66975873d4c.png"
  },
  52659: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage6.5a9d322e8e577c41ffe8.png"
  },
  52662: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wheat_stage7.7a308ccca1342ae8ca44.png"
  },
  53323: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/white_glazed_terracotta.cd22281258f6a9bf48a9.png"
  },
  52994: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/white_spawn_block_top.4bb6d35b9f6889ab4741.png"
  },
  52669: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/white_tulip.7855711c5ddaa5d51278.png"
  },
  53147: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wire_mill_top.bf860c14780007a0574a.png"
  },
  52854: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wireless_terminal_top.0a86378833f246193a79.png"
  },
  52957: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/wool_colored_silver.4cd08eb30c81694706cb.png"
  },
  52682: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/yellow_glazed_terracotta.780cb299393e4d477442.png"
  },
  53228: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/yellow_spawn_block_top.eea71ad43da92909a353.png"
  },
  53402: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  53405: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  53412: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  53415: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  53417: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  53425: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  53430: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  53438: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  53446: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  53454: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  53456: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  53463: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  53470: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  53476: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  53389: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);