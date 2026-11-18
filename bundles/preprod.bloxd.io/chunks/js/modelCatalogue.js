export const id = 38;
export const ids = [38];
export const modules = {
  48856: (yb, bb, Wy) => {
    var Uy = {
      "./cape_cow_cream.png": 47956,
      "./cape_cow_normal.png": 47961,
      "./cape_creator_level1.png": 47967,
      "./cape_creator_level2.png": 47972,
      "./cape_creator_level3.png": 47979,
      "./cape_none.png": 47986,
      "./cape_pig.png": 47991,
      "./cape_sheep.png": 47999,
      "./cape_super.png": 48002,
      "./cape_super_inverted.png": 48008,
      "./cape_youtuber.png": 48014
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 48856
  },
  48859: (yb, bb, Wy) => {
    var Uy = {
      "./Player_Atlas.png": 47900,
      "./astro_set_1_attachable.png": 47906,
      "./astro_set_2_attachable.png": 47910,
      "./astro_set_3_attachable.png": 47915,
      "./astro_set_4_attachable.png": 47921,
      "./beaver_lumberjack.png": 47925,
      "./bee_set_1_attachable.png": 47931,
      "./bee_set_2_attachable.png": 47938,
      "./bee_set_3_attachable_blue.png": 47940,
      "./bee_set_3_attachable_green.png": 47943,
      "./bee_set_3_attachable_red.png": 47951,
      "./bee_set_4_attachable.png": 47954,
      "./capeTextures/cape_cow_cream.png": 47956,
      "./capeTextures/cape_cow_normal.png": 47961,
      "./capeTextures/cape_creator_level1.png": 47967,
      "./capeTextures/cape_creator_level2.png": 47972,
      "./capeTextures/cape_creator_level3.png": 47979,
      "./capeTextures/cape_none.png": 47986,
      "./capeTextures/cape_pig.png": 47991,
      "./capeTextures/cape_sheep.png": 47999,
      "./capeTextures/cape_super.png": 48002,
      "./capeTextures/cape_super_inverted.png": 48008,
      "./capeTextures/cape_youtuber.png": 48014,
      "./chef_attachables.png": 48022,
      "./dwarf_blue_hair.png": 48024,
      "./dwarf_braided_hair.png": 48033,
      "./dwarf_child.png": 48041,
      "./dwarf_forked_beard.png": 48048,
      "./dwarf_ginger_beard.png": 48052,
      "./dwarf_grey_beard.png": 48060,
      "./dwarf_hair_buns.png": 48068,
      "./dwarf_purple_beard.png": 48077,
      "./dwarf_red_hair.png": 48085,
      "./dwarf_short_beard.png": 48092,
      "./farmer_gill_attachable.png": 48094,
      "./farmer_head.png": 48103,
      "./fire_mage_attachable.png": 48111,
      "./forge_mother.png": 48114,
      "./general_attachable.png": 48118,
      "./goblin_goggles.png": 48123,
      "./goblin_mad_scientist.png": 48131,
      "./highSociety_set_1_attachable.png": 48136,
      "./highSociety_set_2_attachable.png": 48144,
      "./highSociety_set_3_attachable.png": 48150,
      "./highSociety_set_4_attachable.png": 48155,
      "./human_archer.png": 48162,
      "./human_desert_guard.png": 48167,
      "./human_sentry.png": 48173,
      "./jackal_priest.png": 48176,
      "./jetpack_attachable.png": 48182,
      "./medieval_set_1_attachable_blue.png": 48187,
      "./medieval_set_1_attachable_green.png": 48194,
      "./medieval_set_1_attachable_purple.png": 48202,
      "./medieval_set_1_attachable_red.png": 48211,
      "./medieval_set_1_attachable_yellow.png": 48220,
      "./medieval_set_2_attachable_blue.png": 48227,
      "./medieval_set_2_attachable_purple.png": 48229,
      "./medieval_set_2_attachable_red.png": 48234,
      "./medieval_set_3_attachable_green.png": 48238,
      "./medieval_set_3_attachable_pink.png": 48247,
      "./medieval_set_3_attachable_purple.png": 48250,
      "./medieval_set_3_attachable_red.png": 48256,
      "./medieval_set_4_attachable_blue.png": 48264,
      "./medieval_set_4_attachable_hair.png": 48266,
      "./medieval_set_4_attachable_purple.png": 48272,
      "./medieval_set_4_attachable_red.png": 48278,
      "./mining_helmet_attachable.png": 48283,
      "./minotaur.png": 48292,
      "./minotaur_elder.png": 48296,
      "./minotaur_warrior.png": 48304,
      "./monster_hunter_lorenzo_attachable.png": 48308,
      "./nova_jetpack_attachable.png": 48314,
      "./npc_pig_head.png": 48320,
      "./painter_spencer_attachable.png": 48327,
      "./pig_napoleon.png": 48333,
      "./pig_worker_attachable.png": 48340,
      "./piggy_banker_head.png": 48343,
      "./portal_mage_hat.png": 48351,
      "./rabbit_aristocrat_attachable.png": 48355,
      "./smuglyn_attachable.png": 48359,
      "./spring_set_1_attachable.png": 48364,
      "./spring_set_2_attachable.png": 48368,
      "./spring_set_3_attachable.png": 48376,
      "./spring_set_4_attachable.png": 48382,
      "./tentacle_boy.png": 48384,
      "./tentacle_girl_attachable.png": 48388,
      "./tentacle_guy_attachable.png": 48393,
      "./tentacle_guy_fisherman_attachable.png": 48399,
      "./trader_cowl_black.png": 48405,
      "./trader_cowl_blue.png": 48412,
      "./wolf_in_suit_attachable.png": 48418,
      "./wolf_security.png": 48426,
      "./y2k_set_1_attachable.png": 48434,
      "./y2k_set_2_attachable.png": 48443,
      "./y2k_set_3_attachable.png": 48452,
      "./y2k_set_4_attachable.png": 48457
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 48859
  },
  46377: (yb, bb, Wy) => {
    var Uy = {
      "./67/67_Model.glb": 46381,
      "./67/67_Reconstructed.glb": 46385,
      "./Armour Collector/Armour Collector_Model.glb": 46393,
      "./Armour Collector/Armour Collector_Reconstructed.glb": 46400,
      "./Bear/Bear_Model.glb": 46406,
      "./Bobino Musculino/Bobino Musculino_Model.glb": 46409,
      "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 46415,
      "./Camel/Camel_Model.glb": 46419,
      "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 46421,
      "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 46424,
      "./Cave Golem/Cave Golem_Model.glb": 46426,
      "./Cow/Cow_Model.glb": 46432,
      "./Crone/Crone_Model.glb": 46440,
      "./Deer/Deer_Model.glb": 46445,
      "./Desert Fennec/Desert Fennec_Model.glb": 46452,
      "./Diamond Guardian/Diamond Guardian_Model.glb": 46461,
      "./Diamond Guardian/Diamond Guardian_Reconstructed.glb": 46465,
      "./Draugr Knight/Draugr Knight_Model.glb": 46474,
      "./Draugr Reaver/Draugr Reaver_Model.glb": 46479,
      "./Draugr Skeleton/Draugr Skeleton_Model.glb": 46481,
      "./Draugr Warper/Draugr Warper_Model.glb": 46484,
      "./Draugr Zombie/Draugr Zombie_Model.glb": 46487,
      "./Evil Tome/Evil Tome_Model.glb": 46493,
      "./Frost Wraith/Frost Wraith_Model.glb": 46501,
      "./Furnace Knight/Furnace Knight_Model.glb": 46510,
      "./Furnace Knight/Furnace Knight_Reconstructed.glb": 46519,
      "./Glass Bro/Glass Bro_Model.glb": 46526,
      "./Glass Bro/Glass Bro_Reconstructed.glb": 46535,
      "./Glass Gremlin/Glass Gremlin_Model.glb": 46542,
      "./Glass Gremlin/Glass Gremlin_Reconstructed.glb": 46544,
      "./Gold Guardian/Gold Guardian_Model.glb": 46553,
      "./Gold Guardian/Gold Guardian_Reconstructed.glb": 46559,
      "./Gorilla/Gorilla_Model.glb": 46566,
      "./Horse/Horse_Model.glb": 46573,
      "./Iron Goofy Golem/Iron Goofy Golem_Model.glb": 46580,
      "./Iron Guardian/Iron Guardian_Model.glb": 46589,
      "./Iron Guardian/Iron Guardian_Reconstructed.glb": 46593,
      "./Lil Knight/Lil Knight_Model.glb": 46596,
      "./Lil Knight/Lil Knight_Reconstructed.glb": 46602,
      "./Lord Vulcan/Lord Vulcan_Model.glb": 46607,
      "./Lord Vulcan/Lord Vulcan_Reconstructed.glb": 46615,
      "./Magma Toad/Magma Toad_Model.glb": 46620,
      "./Moonstone Guardian/Moonstone Guardian_Model.glb": 46628,
      "./Moonstone Guardian/Moonstone Guardian_Reconstructed.glb": 46633,
      "./Mummy/Mummy_Model.glb": 46642,
      "./Mummy/Mummy_Reconstructed.glb": 46649,
      "./Pig/Pig_Model.glb": 46657,
      "./Player/Player_Model.glb": 46661,
      "./Player/Player_Reconstructed.glb": 46666,
      "./Player/astro_set_1_attachable.glb": 46669,
      "./Player/astro_set_2_attachable.glb": 46673,
      "./Player/astro_set_3_attachable.glb": 46681,
      "./Player/astro_set_4_attachable.glb": 46686,
      "./Player/beaver_lumberjack.glb": 46695,
      "./Player/bee_set_1_attachable.glb": 46702,
      "./Player/bee_set_2_attachable.glb": 46706,
      "./Player/bee_set_3_attachable.glb": 46712,
      "./Player/bee_set_4_attachable.glb": 46719,
      "./Player/cape_cuboid_18_12.glb": 46724,
      "./Player/chef_attachables.glb": 46729,
      "./Player/dwarf_blue_hair.glb": 46731,
      "./Player/dwarf_braided_hair.glb": 46740,
      "./Player/dwarf_child.glb": 46744,
      "./Player/dwarf_forked_beard.glb": 46750,
      "./Player/dwarf_ginger_beard.glb": 46755,
      "./Player/dwarf_grey_beard.glb": 46761,
      "./Player/dwarf_hair_buns.glb": 46767,
      "./Player/dwarf_purple_beard.glb": 46772,
      "./Player/dwarf_red_hair.glb": 46779,
      "./Player/dwarf_short_beard.glb": 46783,
      "./Player/farmer_gill_attachable.glb": 46787,
      "./Player/farmer_head.glb": 46792,
      "./Player/fire_mage_attachable.glb": 46800,
      "./Player/forge_mother.glb": 46804,
      "./Player/general_attachable.glb": 46813,
      "./Player/goblin_goggles.glb": 46822,
      "./Player/goblin_mad_scientist.glb": 46830,
      "./Player/highSociety_set_1_attachable.glb": 46838,
      "./Player/highSociety_set_2_attachable.glb": 46841,
      "./Player/highSociety_set_3_attachable.glb": 46843,
      "./Player/highSociety_set_4_attachable.glb": 46845,
      "./Player/human_archer.glb": 46847,
      "./Player/human_desert_guard.glb": 46849,
      "./Player/human_sentry.glb": 46858,
      "./Player/jackal_priest.glb": 46867,
      "./Player/jetpack_attachable.glb": 46876,
      "./Player/medieval_set_1_attachable.glb": 46878,
      "./Player/medieval_set_2_attachable.glb": 46886,
      "./Player/medieval_set_3_attachable.glb": 46891,
      "./Player/medieval_set_4_attachable.glb": 46895,
      "./Player/mining_helmet_attachable.glb": 46899,
      "./Player/minotaur.glb": 46903,
      "./Player/minotaur_elder.glb": 46908,
      "./Player/minotaur_warrior.glb": 46912,
      "./Player/monster_hunter_lorenzo_attachable.glb": 46921,
      "./Player/npc_pig_head.glb": 46924,
      "./Player/painter_spencer_attachable.glb": 46930,
      "./Player/pig_napoleon.glb": 46933,
      "./Player/pig_worker_attachable.glb": 46938,
      "./Player/piggy_banker_head.glb": 46943,
      "./Player/portal_mage_hat.glb": 46952,
      "./Player/rabbit_aristocrat_attachable.glb": 46956,
      "./Player/smuglyn_attachable.glb": 46959,
      "./Player/spring_set_1_attachable.glb": 46962,
      "./Player/spring_set_2_attachable.glb": 46967,
      "./Player/spring_set_3_attachable.glb": 46972,
      "./Player/spring_set_4_attachable.glb": 46980,
      "./Player/tentacle_boy.glb": 46987,
      "./Player/tentacle_guy_attachable.glb": 46989,
      "./Player/tentacle_guy_fisherman_attachable.glb": 46996,
      "./Player/trader_cowl_black.glb": 47004,
      "./Player/trader_cowl_blue.glb": 47007,
      "./Player/wolf_in_suit_attachable.glb": 47015,
      "./Player/wolf_security.glb": 47022,
      "./Player/y2k_set_1_attachable.glb": 47030,
      "./Player/y2k_set_2_attachable.glb": 47033,
      "./Player/y2k_set_3_attachable.glb": 47038,
      "./Player/y2k_set_4_attachable.glb": 47042,
      "./Scorpion/Scorpion_Model.glb": 47045,
      "./Sheep/Sheep_Model.glb": 47050,
      "./Skeleton/Skeleton_Model.glb": 47055,
      "./Skeleton/Skeleton_Reconstructed.glb": 47058,
      "./Slime/Slime_Model.glb": 47067,
      "./Stag/Stag_Model.glb": 47072,
      "./Stalker/Stalker_Model.glb": 47074,
      "./Tiki Terror/Tiki Terror_Model.glb": 47082,
      "./Tiki Terror/Tiki Terror_Reconstructed.glb": 47091,
      "./Vulcanite/Vulcanite_Model.glb": 47099,
      "./Vulcanite/Vulcanite_Reconstructed.glb": 47107,
      "./Wildcat/Wildcat_Model.glb": 47110,
      "./Wolf/Wolf_Model.glb": 47119,
      "./Zombie/Zombie_Model.glb": 47123,
      "./Zombie/Zombie_Reconstructed.glb": 47130
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 46377
  },
  47138: (yb, bb, Wy) => {
    var Uy = {
      "./67/67_Atlas.png": 47144,
      "./67/variations/0_67_default.png": 47148,
      "./Armour Collector/Armour Collector_Atlas.png": 47155,
      "./Armour Collector/variations/0_armour collector_default.png": 47163,
      "./Bear/BearSaddle_Atlas.png": 47171,
      "./Bear/Bear_Atlas.png": 47175,
      "./Bear/variations/0_bear_default.png": 47184,
      "./Bobino Musculino/Bobino Musculino_Atlas.png": 47187,
      "./Bobino Musculino/variations/0_bobino musculino_default.png": 47195,
      "./Camel/CamelSaddle_Atlas.png": 47199,
      "./Camel/Camel_Armour.png": 47205,
      "./Camel/Camel_Atlas.png": 47209,
      "./Camel/variations/0_camel_default.png": 47216,
      "./Camel/variations/1_camel_brown.png": 47223,
      "./Capitano Explovissimo/Capitano Explovissimo_Atlas.png": 47226,
      "./Capitano Explovissimo/variations/0_capitano explovissimo_default.png": 47231,
      "./Cave Golem/Cave Golem_Atlas.png": 47233,
      "./Cave Golem/variations/0_cave golem_default.png": 47242,
      "./Cave Golem/variations/1_cave golem_iron.png": 47245,
      "./Cave Golem/variations/2_cave golem_corrupted.png": 47254,
      "./Cow/Cow_Atlas.png": 47256,
      "./Cow/variations/0_cow_default.png": 47260,
      "./Cow/variations/1_cow_cream.png": 47269,
      "./Crone/Crone_Atlas.png": 47274,
      "./Crone/variations/0_crone_default.png": 47283,
      "./Deer/DeerAntlers_Atlas.png": 47291,
      "./Deer/Deer_Atlas.png": 47296,
      "./Deer/variations/0_deer_default.png": 47305,
      "./Desert Fennec/Desert Fennec_Atlas.png": 47308,
      "./Desert Fennec/variations/0_desert fennec_default.png": 47313,
      "./Diamond Goofy Golem/Diamond Goofy Golem_Atlas.png": 47319,
      "./Diamond Goofy Golem/variations/0_diamond goofy golem_default.png": 47328,
      "./Diamond Goofy Golem/variations/1_diamond goofy golem_flaking.png": 47334,
      "./Diamond Goofy Golem/variations/2_diamond goofy golem_patchy.png": 47336,
      "./Diamond Goofy Golem/variations/3_diamond goofy golem_shedding.png": 47345,
      "./Diamond Goofy Golem/variations/4_diamond goofy golem_bare.png": 47348,
      "./Diamond Goofy Golem/variations/5_diamond goofy golem_stone.png": 47357,
      "./Diamond Guardian/Diamond Guardian_Atlas.png": 47364,
      "./Diamond Guardian/variations/0_diamond guardian_default.png": 47371,
      "./Draugr Huntress/Draugr Huntress_Atlas.png": 47373,
      "./Draugr Huntress/variations/0_draugr huntress_default.png": 47375,
      "./Draugr Huntress/variations/1_draugr huntress_chainmail.png": 47379,
      "./Draugr Knight/Draugr Knight_Atlas.png": 47384,
      "./Draugr Knight/variations/0_draugr knight_default.png": 47389,
      "./Draugr Reaver/Draugr Reaver_Atlas.png": 47398,
      "./Draugr Reaver/variations/0_draugr reaver_default.png": 47402,
      "./Draugr Skeleton/Draugr Skeleton_Atlas.png": 47408,
      "./Draugr Skeleton/variations/0_draugr skeleton_default.png": 47414,
      "./Draugr Warper/Draugr Warper_Atlas.png": 47416,
      "./Draugr Warper/variations/0_draugr warper_default.png": 47424,
      "./Draugr Zombie/Draugr Zombie_Atlas.png": 47426,
      "./Draugr Zombie/variations/0_draugr zombie_default.png": 47428,
      "./Draugr Zombie/variations/10_draugr zombie_corrupted2.png": 47431,
      "./Draugr Zombie/variations/1_draugr zombie_longHairChestplate.png": 47433,
      "./Draugr Zombie/variations/2_draugr zombie_longHairClothed.png": 47442,
      "./Draugr Zombie/variations/3_draugr zombie_shortHairClothed.png": 47451,
      "./Draugr Zombie/variations/4_draugr zombie_flower.png": 47455,
      "./Draugr Zombie/variations/5_draugr zombie_flower2.png": 47461,
      "./Draugr Zombie/variations/6_draugr zombie_mushroom.png": 47470,
      "./Draugr Zombie/variations/7_draugr zombie_vine.png": 47473,
      "./Draugr Zombie/variations/8_draugr zombie_vine2.png": 47482,
      "./Draugr Zombie/variations/9_draugr zombie_corrupted.png": 47485,
      "./Evil Tome/Evil Tome_Atlas.png": 47489,
      "./Evil Tome/variations/0_evil tome_default.png": 47493,
      "./Frost Golem/Frost Golem_Atlas.png": 47498,
      "./Frost Golem/variations/0_frost golem_default.png": 47505,
      "./Frost Skeleton/Frost Skeleton_Atlas.png": 47511,
      "./Frost Skeleton/variations/0_frost skeleton_default.png": 47516,
      "./Frost Wraith/Frost Wraith_Atlas.png": 47522,
      "./Frost Wraith/variations/0_frost wraith_default.png": 47525,
      "./Frost Wraith/variations/1_frost wraith_tattered.png": 47529,
      "./Frost Wraith/variations/2_frost wraith_frostKing.png": 47535,
      "./Frost Wraith/variations/3_frost wraith_accursed.png": 47538,
      "./Frost Zombie/Frost Zombie_Atlas.png": 47541,
      "./Frost Zombie/variations/0_frost zombie_default.png": 47545,
      "./Frost Zombie/variations/1_frost zombie_longHairChestplate.png": 47551,
      "./Frost Zombie/variations/2_frost zombie_shortHairClothed.png": 47558,
      "./Furnace Knight/Furnace Knight_Atlas.png": 47565,
      "./Furnace Knight/variations/0_furnace knight_default.png": 47571,
      "./Glass Bro/Glass Bro_Atlas.png": 47578,
      "./Glass Bro/variations/0_glass bro_default.png": 47583,
      "./Glass Gremlin/Glass Gremlin_Atlas.png": 47589,
      "./Glass Gremlin/variations/0_glass gremlin_default.png": 47597,
      "./Gold Goofy Golem/Gold Goofy Golem_Atlas.png": 47605,
      "./Gold Goofy Golem/variations/0_gold goofy golem_default.png": 47608,
      "./Gold Goofy Golem/variations/1_gold goofy golem_flaking.png": 47617,
      "./Gold Goofy Golem/variations/2_gold goofy golem_patchy.png": 47623,
      "./Gold Goofy Golem/variations/3_gold goofy golem_shedding.png": 47631,
      "./Gold Goofy Golem/variations/4_gold goofy golem_bare.png": 47636,
      "./Gold Goofy Golem/variations/5_gold goofy golem_stone.png": 47639,
      "./Gold Guardian/Gold Guardian_Atlas.png": 47646,
      "./Gold Guardian/variations/0_gold guardian_default.png": 47649,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Armour.png": 47652,
      "./Gold Watermelon Stag/Gold Watermelon Stag_Atlas.png": 47660,
      "./Gold Watermelon Stag/variations/0_gold watermelon stag_default.png": 47663,
      "./Gorilla/GorillaSaddle_Atlas.png": 47666,
      "./Gorilla/Gorilla_Atlas.png": 47671,
      "./Gorilla/variations/0_gorilla_default.png": 47675,
      "./Horse/HorseSaddle_Atlas.png": 47681,
      "./Horse/Horse_Atlas.png": 47685,
      "./Horse/variations/0_horse_default.png": 47690,
      "./Horse/variations/1_horse_black.png": 47698,
      "./Horse/variations/2_horse_brown.png": 47703,
      "./Horse/variations/3_horse_cream.png": 47708,
      "./Iron Golem/Iron Golem_Atlas.png": 47711,
      "./Iron Golem/variations/0_iron golem_default.png": 47715,
      "./Iron Goofy Golem/Iron Goofy Golem_Atlas.png": 47718,
      "./Iron Goofy Golem/variations/0_iron goofy golem_default.png": 47724,
      "./Iron Goofy Golem/variations/1_iron goofy golem_flaking.png": 47726,
      "./Iron Goofy Golem/variations/2_iron goofy golem_patchy.png": 47735,
      "./Iron Goofy Golem/variations/3_iron goofy golem_shedding.png": 47743,
      "./Iron Goofy Golem/variations/4_iron goofy golem_bare.png": 47752,
      "./Iron Goofy Golem/variations/5_iron goofy golem_stone.png": 47759,
      "./Iron Guardian/Iron Guardian_Atlas.png": 47761,
      "./Iron Guardian/variations/0_iron guardian_default.png": 47770,
      "./Lil Knight/Lil Knight_Atlas.png": 47774,
      "./Lil Knight/variations/0_lil knight_default.png": 47777,
      "./Lord Vulcan/Lord Vulcan_Atlas.png": 47783,
      "./Lord Vulcan/variations/0_lord vulcan_default.png": 47787,
      "./Magma Golem/Magma Golem_Atlas.png": 47793,
      "./Magma Golem/variations/0_magma golem_default.png": 47801,
      "./Magma Toad/Magma Toad_Atlas.png": 47805,
      "./Magma Toad/variations/0_magma toad_default.png": 47813,
      "./Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas.png": 47821,
      "./Moonstone Goofy Golem/variations/0_moonstone goofy golem_default.png": 47825,
      "./Moonstone Goofy Golem/variations/1_moonstone goofy golem_flaking.png": 47830,
      "./Moonstone Goofy Golem/variations/2_moonstone goofy golem_patchy.png": 47839,
      "./Moonstone Goofy Golem/variations/3_moonstone goofy golem_shedding.png": 47848,
      "./Moonstone Goofy Golem/variations/4_moonstone goofy golem_bare.png": 47856,
      "./Moonstone Goofy Golem/variations/5_moonstone goofy golem_stone.png": 47859,
      "./Moonstone Guardian/Moonstone Guardian_Atlas.png": 47868,
      "./Moonstone Guardian/variations/0_moonstone guardian_default.png": 47877,
      "./Mummy/Mummy_Atlas.png": 47885,
      "./Mummy/variations/0_mummy_default.png": 47887,
      "./Pig/Pig_Atlas.png": 47890,
      "./Pig/variations/0_pig_default.png": 47893,
      "./Player/Player_Atlas.png": 47900,
      "./Player/astro_set_1_attachable.png": 47906,
      "./Player/astro_set_2_attachable.png": 47910,
      "./Player/astro_set_3_attachable.png": 47915,
      "./Player/astro_set_4_attachable.png": 47921,
      "./Player/beaver_lumberjack.png": 47925,
      "./Player/bee_set_1_attachable.png": 47931,
      "./Player/bee_set_2_attachable.png": 47938,
      "./Player/bee_set_3_attachable_blue.png": 47940,
      "./Player/bee_set_3_attachable_green.png": 47943,
      "./Player/bee_set_3_attachable_red.png": 47951,
      "./Player/bee_set_4_attachable.png": 47954,
      "./Player/capeTextures/cape_cow_cream.png": 47956,
      "./Player/capeTextures/cape_cow_normal.png": 47961,
      "./Player/capeTextures/cape_creator_level1.png": 47967,
      "./Player/capeTextures/cape_creator_level2.png": 47972,
      "./Player/capeTextures/cape_creator_level3.png": 47979,
      "./Player/capeTextures/cape_none.png": 47986,
      "./Player/capeTextures/cape_pig.png": 47991,
      "./Player/capeTextures/cape_sheep.png": 47999,
      "./Player/capeTextures/cape_super.png": 48002,
      "./Player/capeTextures/cape_super_inverted.png": 48008,
      "./Player/capeTextures/cape_youtuber.png": 48014,
      "./Player/chef_attachables.png": 48022,
      "./Player/dwarf_blue_hair.png": 48024,
      "./Player/dwarf_braided_hair.png": 48033,
      "./Player/dwarf_child.png": 48041,
      "./Player/dwarf_forked_beard.png": 48048,
      "./Player/dwarf_ginger_beard.png": 48052,
      "./Player/dwarf_grey_beard.png": 48060,
      "./Player/dwarf_hair_buns.png": 48068,
      "./Player/dwarf_purple_beard.png": 48077,
      "./Player/dwarf_red_hair.png": 48085,
      "./Player/dwarf_short_beard.png": 48092,
      "./Player/farmer_gill_attachable.png": 48094,
      "./Player/farmer_head.png": 48103,
      "./Player/fire_mage_attachable.png": 48111,
      "./Player/forge_mother.png": 48114,
      "./Player/general_attachable.png": 48118,
      "./Player/goblin_goggles.png": 48123,
      "./Player/goblin_mad_scientist.png": 48131,
      "./Player/highSociety_set_1_attachable.png": 48136,
      "./Player/highSociety_set_2_attachable.png": 48144,
      "./Player/highSociety_set_3_attachable.png": 48150,
      "./Player/highSociety_set_4_attachable.png": 48155,
      "./Player/human_archer.png": 48162,
      "./Player/human_desert_guard.png": 48167,
      "./Player/human_sentry.png": 48173,
      "./Player/jackal_priest.png": 48176,
      "./Player/jetpack_attachable.png": 48182,
      "./Player/medieval_set_1_attachable_blue.png": 48187,
      "./Player/medieval_set_1_attachable_green.png": 48194,
      "./Player/medieval_set_1_attachable_purple.png": 48202,
      "./Player/medieval_set_1_attachable_red.png": 48211,
      "./Player/medieval_set_1_attachable_yellow.png": 48220,
      "./Player/medieval_set_2_attachable_blue.png": 48227,
      "./Player/medieval_set_2_attachable_purple.png": 48229,
      "./Player/medieval_set_2_attachable_red.png": 48234,
      "./Player/medieval_set_3_attachable_green.png": 48238,
      "./Player/medieval_set_3_attachable_pink.png": 48247,
      "./Player/medieval_set_3_attachable_purple.png": 48250,
      "./Player/medieval_set_3_attachable_red.png": 48256,
      "./Player/medieval_set_4_attachable_blue.png": 48264,
      "./Player/medieval_set_4_attachable_hair.png": 48266,
      "./Player/medieval_set_4_attachable_purple.png": 48272,
      "./Player/medieval_set_4_attachable_red.png": 48278,
      "./Player/mining_helmet_attachable.png": 48283,
      "./Player/minotaur.png": 48292,
      "./Player/minotaur_elder.png": 48296,
      "./Player/minotaur_warrior.png": 48304,
      "./Player/monster_hunter_lorenzo_attachable.png": 48308,
      "./Player/nova_jetpack_attachable.png": 48314,
      "./Player/npc_pig_head.png": 48320,
      "./Player/painter_spencer_attachable.png": 48327,
      "./Player/pig_napoleon.png": 48333,
      "./Player/pig_worker_attachable.png": 48340,
      "./Player/piggy_banker_head.png": 48343,
      "./Player/portal_mage_hat.png": 48351,
      "./Player/rabbit_aristocrat_attachable.png": 48355,
      "./Player/smuglyn_attachable.png": 48359,
      "./Player/spring_set_1_attachable.png": 48364,
      "./Player/spring_set_2_attachable.png": 48368,
      "./Player/spring_set_3_attachable.png": 48376,
      "./Player/spring_set_4_attachable.png": 48382,
      "./Player/tentacle_boy.png": 48384,
      "./Player/tentacle_girl_attachable.png": 48388,
      "./Player/tentacle_guy_attachable.png": 48393,
      "./Player/tentacle_guy_fisherman_attachable.png": 48399,
      "./Player/trader_cowl_black.png": 48405,
      "./Player/trader_cowl_blue.png": 48412,
      "./Player/wolf_in_suit_attachable.png": 48418,
      "./Player/wolf_security.png": 48426,
      "./Player/y2k_set_1_attachable.png": 48434,
      "./Player/y2k_set_2_attachable.png": 48443,
      "./Player/y2k_set_3_attachable.png": 48452,
      "./Player/y2k_set_4_attachable.png": 48457,
      "./Scorpion/Scorpion_Atlas.png": 48465,
      "./Scorpion/variations/0_scorpion_default.png": 48472,
      "./Sheep/SheepWool_Atlas.png": 48477,
      "./Sheep/Sheep_Atlas.png": 48482,
      "./Sheep/variations/0_sheep_default.png": 48487,
      "./Sheep/variations/10_sheep_gray.png": 48496,
      "./Sheep/variations/11_sheep_green.png": 48500,
      "./Sheep/variations/12_sheep_lightBlue.png": 48507,
      "./Sheep/variations/13_sheep_lightGray.png": 48511,
      "./Sheep/variations/14_sheep_lime.png": 48514,
      "./Sheep/variations/15_sheep_magenta.png": 48516,
      "./Sheep/variations/1_sheep_black.png": 48520,
      "./Sheep/variations/2_sheep_red.png": 48528,
      "./Sheep/variations/3_sheep_orange.png": 48531,
      "./Sheep/variations/4_sheep_pink.png": 48537,
      "./Sheep/variations/5_sheep_purple.png": 48546,
      "./Sheep/variations/6_sheep_yellow.png": 48550,
      "./Sheep/variations/7_sheep_blue.png": 48552,
      "./Sheep/variations/8_sheep_brown.png": 48557,
      "./Sheep/variations/9_sheep_cyan.png": 48560,
      "./Skeleton/Skeleton_Atlas.png": 48562,
      "./Skeleton/variations/0_skeleton_default.png": 48570,
      "./Slime/Slime_Atlas.png": 48577,
      "./Slime/variations/0_slime_default.png": 48579,
      "./Spirit Bear/Spirit BearSaddle_Atlas.png": 48584,
      "./Spirit Bear/Spirit Bear_Atlas.png": 48592,
      "./Spirit Bear/variations/0_spirit bear_default.png": 48596,
      "./Spirit Golem/Spirit Golem_Atlas.png": 48601,
      "./Spirit Golem/variations/0_spirit golem_default.png": 48605,
      "./Spirit Gorilla/Spirit GorillaSaddle_Atlas.png": 48614,
      "./Spirit Gorilla/Spirit Gorilla_Atlas.png": 48620,
      "./Spirit Gorilla/variations/0_spirit gorilla_default.png": 48629,
      "./Spirit Stag/Spirit StagSaddle_Atlas.png": 48638,
      "./Spirit Stag/Spirit Stag_Atlas.png": 48647,
      "./Spirit Stag/variations/0_spirit stag_default.png": 48653,
      "./Spirit Wolf/Spirit WolfCollar_Atlas.png": 48657,
      "./Spirit Wolf/Spirit Wolf_Atlas.png": 48665,
      "./Spirit Wolf/variations/0_spirit wolf_default.png": 48672,
      "./Stag/StagSaddle_Atlas.png": 48675,
      "./Stag/Stag_Atlas.png": 48677,
      "./Stag/variations/0_stag_default.png": 48684,
      "./Stalker/Stalker_Atlas.png": 48692,
      "./Stalker/variations/0_stalker_default.png": 48700,
      "./Stalker/variations/1_stalker_crimson.png": 48707,
      "./Stalker/variations/2_stalker_frost.png": 48716,
      "./Stalker/variations/3_stalker_void.png": 48723,
      "./Tiki Terror/Tiki Terror_Atlas.png": 48729,
      "./Tiki Terror/variations/0_tiki terror_default.png": 48733,
      "./Tiki Terror/variations/1_tiki terror_titan.png": 48737,
      "./Tiki Terror/variations/2_tiki terror_tormentor.png": 48744,
      "./Tiki Terror/variations/3_tiki terror_tyrant.png": 48746,
      "./Vulcanite/Vulcanite_Atlas.png": 48753,
      "./Vulcanite/variations/0_vulcanite_default.png": 48757,
      "./Wildcat/WildcatCollar_Atlas.png": 48759,
      "./Wildcat/Wildcat_Atlas.png": 48764,
      "./Wildcat/variations/0_wildcat_default.png": 48773,
      "./Wildcat/variations/1_wildcat_tabby.png": 48775,
      "./Wildcat/variations/2_wildcat_grey.png": 48777,
      "./Wildcat/variations/3_wildcat_black.png": 48783,
      "./Wildcat/variations/4_wildcat_calico.png": 48791,
      "./Wildcat/variations/5_wildcat_siamese.png": 48797,
      "./Wildcat/variations/6_wildcat_leopard.png": 48800,
      "./Wolf/WolfCollar_Atlas.png": 48807,
      "./Wolf/Wolf_Atlas.png": 48809,
      "./Wolf/variations/0_wolf_default.png": 48814,
      "./Wolf/variations/1_wolf_white.png": 48823,
      "./Wolf/variations/2_wolf_brown.png": 48828,
      "./Wolf/variations/3_wolf_grey.png": 48834,
      "./Wolf/variations/4_wolf_spectral.png": 48842,
      "./Zombie/Zombie_Atlas.png": 48851,
      "./Zombie/variations/0_zombie_default.png": 48854
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 47138
  },
  41900: (yb, bb, Wy) => {
    var Uy = {
      "./2_block.glb": 41903,
      "./67.glb": 41905,
      "./Artisan Bench.glb": 41911,
      "./Aspen Door.glb": 41916,
      "./Aspen Item Pedestal.glb": 41924,
      "./Aspen Ladder.glb": 41928,
      "./Aspen Trapdoor.glb": 41937,
      "./Black Banner.glb": 41941,
      "./Black Bed.glb": 41945,
      "./Black Directional Arrow.glb": 41947,
      "./Black Strongbed.glb": 41954,
      "./Blue Banner.glb": 41959,
      "./Blue Bed.glb": 41966,
      "./Blue Directional Arrow.glb": 41969,
      "./Blue Strongbed.glb": 41975,
      "./Board.glb": 41984,
      "./Brown Banner.glb": 41986,
      "./Brown Bed.glb": 41989,
      "./Brown Directional Arrow.glb": 41996,
      "./Brown Strongbed.glb": 42003,
      "./Cedar Door.glb": 42012,
      "./Cedar Item Pedestal.glb": 42017,
      "./Cedar Ladder.glb": 42021,
      "./Cedar Trapdoor.glb": 42027,
      "./Cherry Door.glb": 42036,
      "./Cherry Item Pedestal.glb": 42044,
      "./Cherry Ladder.glb": 42048,
      "./Cherry Trapdoor.glb": 42057,
      "./Crimson Trapdoor.glb": 42061,
      "./Cyan Banner.glb": 42067,
      "./Cyan Bed.glb": 42072,
      "./Cyan Directional Arrow.glb": 42077,
      "./Cyan Strongbed.glb": 42083,
      "./Dangling Rope.glb": 42088,
      "./Dangling Vine.glb": 42093,
      "./Diamond Enchanting Table.glb": 42098,
      "./Diamond Trophy.glb": 42102,
      "./Draugr Banner.glb": 42110,
      "./Fat Brown Mushroom.glb": 42115,
      "./Fat Red Mushroom.glb": 42120,
      "./Fence.glb": 42128,
      "./FenceGate.glb": 42132,
      "./Furnace.glb": 42141,
      "./Gold Enchanting Table.glb": 42148,
      "./Gold Trophy.glb": 42151,
      "./Gray Banner.glb": 42153,
      "./Gray Bed.glb": 42160,
      "./Gray Strongbed.glb": 42169,
      "./Green Banner.glb": 42173,
      "./Green Bed.glb": 42182,
      "./Green Directional Arrow.glb": 42185,
      "./Green Strongbed.glb": 42190,
      "./Grey Directional Arrow.glb": 42199,
      "./Iron Enchanting Table.glb": 42201,
      "./Iron Ladder.glb": 42206,
      "./Iron Trapdoor.glb": 42209,
      "./Iron Trophy.glb": 42214,
      "./Jungle Door.glb": 42222,
      "./Jungle Item Pedestal.glb": 42228,
      "./Jungle Ladder.glb": 42237,
      "./Jungle Trapdoor.glb": 42241,
      "./Large Icicle.glb": 42250,
      "./Large Twin Icicle.glb": 42253,
      "./Leaf Bed.glb": 42261,
      "./Light Blue Banner.glb": 42264,
      "./Light Blue Bed.glb": 42273,
      "./Light Blue Directional Arrow.glb": 42282,
      "./Light Blue Strongbed.glb": 42289,
      "./Light Gray Banner.glb": 42295,
      "./Light Gray Bed.glb": 42303,
      "./Light Gray Strongbed.glb": 42310,
      "./Light Grey Directional Arrow.glb": 42315,
      "./Lime Banner.glb": 42319,
      "./Lime Bed.glb": 42323,
      "./Lime Directional Arrow.glb": 42332,
      "./Lime Strongbed.glb": 42339,
      "./Magenta Banner.glb": 42348,
      "./Magenta Bed.glb": 42353,
      "./Magenta Directional Arrow.glb": 42355,
      "./Magenta Strongbed.glb": 42357,
      "./Mango Door.glb": 42364,
      "./Mango Item Pedestal.glb": 42370,
      "./Mango Ladder.glb": 42375,
      "./Mango Trapdoor.glb": 42383,
      "./Maple Door.glb": 42387,
      "./Maple Ladder.glb": 42393,
      "./Maple Trapdoor.glb": 42401,
      "./Medium Icicle.glb": 42404,
      "./Moonstone Trophy.glb": 42413,
      "./Nova Trophy.glb": 42415,
      "./Orange Banner.glb": 42421,
      "./Orange Bed.glb": 42424,
      "./Orange Directional Arrow.glb": 42433,
      "./Orange Strongbed.glb": 42439,
      "./Palm Door.glb": 42448,
      "./Palm Item Pedestal.glb": 42450,
      "./Palm Ladder.glb": 42459,
      "./Palm Trapdoor.glb": 42468,
      "./Pear Door.glb": 42472,
      "./Pear Item Pedestal.glb": 42475,
      "./Pear Ladder.glb": 42479,
      "./Pear Trapdoor.glb": 42482,
      "./Pine Door.glb": 42491,
      "./Pine Item Pedestal.glb": 42498,
      "./Pine Ladder.glb": 42505,
      "./Pine Trapdoor.glb": 42508,
      "./Pink Banner.glb": 42514,
      "./Pink Bed.glb": 42520,
      "./Pink Directional Arrow.glb": 42526,
      "./Pink Strongbed.glb": 42535,
      "./Plum Door.glb": 42541,
      "./Plum Item Pedestal.glb": 42543,
      "./Plum Ladder.glb": 42547,
      "./Plum Trapdoor.glb": 42556,
      "./Potion Table.glb": 42560,
      "./Purple Banner.glb": 42568,
      "./Purple Bed.glb": 42575,
      "./Purple Directional Arrow.glb": 42579,
      "./Purple Strongbed.glb": 42585,
      "./Rainbow Banner.glb": 42588,
      "./Red Banner.glb": 42590,
      "./Red Bed.glb": 42594,
      "./Red Directional Arrow.glb": 42598,
      "./Red Strongbed.glb": 42601,
      "./Salvaging Table.glb": 42610,
      "./Showcase.glb": 42619,
      "./Skull Banner.glb": 42625,
      "./Small Black Pod.glb": 42633,
      "./Small Blue Pod.glb": 42636,
      "./Small Brown Pod.glb": 42643,
      "./Small Cyan Pod.glb": 42646,
      "./Small Gray Pod.glb": 42655,
      "./Small Green Pod.glb": 42657,
      "./Small Light Blue Pod.glb": 42662,
      "./Small Light Gray Pod.glb": 42670,
      "./Small Lime Pod.glb": 42678,
      "./Small Magenta Pod.glb": 42684,
      "./Small Orange Pod.glb": 42687,
      "./Small Pink Pod.glb": 42693,
      "./Small Purple Pod.glb": 42700,
      "./Small Red Pod.glb": 42709,
      "./Small Twin Icicle.glb": 42714,
      "./Small White Pod.glb": 42717,
      "./Small Yellow Pod.glb": 42723,
      "./Spectral Door.glb": 42726,
      "./Spectral Item Pedestal.glb": 42728,
      "./Spectral Ladder.glb": 42735,
      "./Spectral Trapdoor.glb": 42738,
      "./Spikes_Diamond.glb": 42741,
      "./Spikes_Gold.glb": 42748,
      "./Spikes_Iron.glb": 42752,
      "./Spikes_Kill.glb": 42756,
      "./Spikes_Stone.glb": 42760,
      "./Spikes_Wood.glb": 42765,
      "./Stone Enchanting Table.glb": 42768,
      "./Stone Trophy.glb": 42770,
      "./Timed Spike Bomb Block.glb": 42773,
      "./Vines.glb": 42778,
      "./Warped Trapdoor.glb": 42781,
      "./White Banner.glb": 42788,
      "./White Bed.glb": 42791,
      "./White Directional Arrow.glb": 42797,
      "./White Strongbed.glb": 42800,
      "./Wood Enchanting Table.glb": 42807,
      "./Wood Trophy.glb": 42815,
      "./Workbench.glb": 42818,
      "./Yellow Banner.glb": 42827,
      "./Yellow Bed.glb": 42833,
      "./Yellow Directional Arrow.glb": 42840,
      "./Yellow Strongbed.glb": 42845,
      "./_Aspen Door Top.glb": 42849,
      "./_Black Banner Flag Hanging.glb": 42857,
      "./_Black Banner Flag.glb": 42864,
      "./_Black Banner Hanging.glb": 42871,
      "./_Black Bed Head.glb": 42878,
      "./_Black Strongbed Head.glb": 42885,
      "./_Blue Banner Flag Hanging.glb": 42892,
      "./_Blue Banner Flag.glb": 42900,
      "./_Blue Banner Hanging.glb": 42907,
      "./_Blue Bed Head.glb": 42915,
      "./_Blue Strongbed Head.glb": 42919,
      "./_Brown Banner Flag Hanging.glb": 42924,
      "./_Brown Banner Flag.glb": 42927,
      "./_Brown Banner Hanging.glb": 42932,
      "./_Brown Bed Head.glb": 42939,
      "./_Brown Strongbed Head.glb": 42944,
      "./_Camel Painting Bottom Left.glb": 42948,
      "./_Camel Painting Bottom Right.glb": 42957,
      "./_Camel Painting Top Left.glb": 42963,
      "./_Camel Painting Top Right.glb": 42966,
      "./_Cedar Door Top.glb": 42969,
      "./_Cherry Door Top.glb": 42971,
      "./_Cow Painting Bottom Left.glb": 42980,
      "./_Cow Painting Bottom Right.glb": 42986,
      "./_Cow Painting Top Left.glb": 42993,
      "./_Cow Painting Top Right.glb": 43001,
      "./_Cyan Banner Flag Hanging.glb": 43009,
      "./_Cyan Banner Flag.glb": 43016,
      "./_Cyan Banner Hanging.glb": 43018,
      "./_Cyan Bed Head.glb": 43025,
      "./_Cyan Strongbed Head.glb": 43032,
      "./_Deer Painting Bottom Left.glb": 43034,
      "./_Deer Painting Bottom Right.glb": 43039,
      "./_Deer Painting Top Left.glb": 43044,
      "./_Deer Painting Top Right.glb": 43053,
      "./_Draugr Banner Flag Hanging.glb": 43060,
      "./_Draugr Banner Flag.glb": 43065,
      "./_Draugr Banner Hanging.glb": 43071,
      "./_Gray Banner Flag Hanging.glb": 43073,
      "./_Gray Banner Flag.glb": 43077,
      "./_Gray Banner Hanging.glb": 43082,
      "./_Gray Bed Head.glb": 43090,
      "./_Gray Strongbed Head.glb": 43097,
      "./_Green Banner Flag Hanging.glb": 43105,
      "./_Green Banner Flag.glb": 43109,
      "./_Green Banner Hanging.glb": 43118,
      "./_Green Bed Head.glb": 43123,
      "./_Green Strongbed Head.glb": 43125,
      "./_Horse Painting Bottom Left.glb": 43130,
      "./_Horse Painting Bottom Right.glb": 43139,
      "./_Horse Painting Top Left.glb": 43143,
      "./_Horse Painting Top Right.glb": 43148,
      "./_Jungle Door Top.glb": 43156,
      "./_Light Blue Banner Flag Hanging.glb": 43163,
      "./_Light Blue Banner Flag.glb": 43170,
      "./_Light Blue Banner Hanging.glb": 43179,
      "./_Light Blue Bed Head.glb": 43185,
      "./_Light Blue Strongbed Head.glb": 43187,
      "./_Light Gray Banner Flag Hanging.glb": 43193,
      "./_Light Gray Banner Flag.glb": 43197,
      "./_Light Gray Banner Hanging.glb": 43200,
      "./_Light Gray Bed Head.glb": 43205,
      "./_Light Gray Strongbed Head.glb": 43207,
      "./_Lime Banner Flag Hanging.glb": 43209,
      "./_Lime Banner Flag.glb": 43211,
      "./_Lime Banner Hanging.glb": 43219,
      "./_Lime Bed Head.glb": 43221,
      "./_Lime Strongbed Head.glb": 43228,
      "./_Magenta Banner Flag Hanging.glb": 43237,
      "./_Magenta Banner Flag.glb": 43246,
      "./_Magenta Banner Hanging.glb": 43248,
      "./_Magenta Bed Head.glb": 43255,
      "./_Magenta Strongbed Head.glb": 43262,
      "./_Mango Door Top.glb": 43271,
      "./_Maple Door Top.glb": 43279,
      "./_Orange Banner Flag Hanging.glb": 43283,
      "./_Orange Banner Flag.glb": 43285,
      "./_Orange Banner Hanging.glb": 43290,
      "./_Orange Bed Head.glb": 43297,
      "./_Orange Strongbed Head.glb": 43300,
      "./_Palm Door Top.glb": 43305,
      "./_Pear Door Top.glb": 43310,
      "./_Pig Painting Bottom Left.glb": 43314,
      "./_Pig Painting Bottom Right.glb": 43322,
      "./_Pig Painting Top Left.glb": 43331,
      "./_Pig Painting Top Right.glb": 43334,
      "./_Pine Door Top.glb": 43341,
      "./_Pink Banner Flag Hanging.glb": 43349,
      "./_Pink Banner Flag.glb": 43355,
      "./_Pink Banner Hanging.glb": 43362,
      "./_Pink Bed Head.glb": 43371,
      "./_Pink Strongbed Head.glb": 43373,
      "./_Plum Door Top.glb": 43375,
      "./_Purple Banner Flag Hanging.glb": 43380,
      "./_Purple Banner Flag.glb": 43382,
      "./_Purple Banner Hanging.glb": 43389,
      "./_Purple Bed Head.glb": 43394,
      "./_Purple Strongbed Head.glb": 43399,
      "./_Radar Dish Down.glb": 43407,
      "./_Radar Dish Up.glb": 43415,
      "./_Rainbow Banner Flag Hanging.glb": 43420,
      "./_Rainbow Banner Flag.glb": 43422,
      "./_Rainbow Banner Hanging.glb": 43427,
      "./_Red Banner Flag Hanging.glb": 43436,
      "./_Red Banner Flag.glb": 43444,
      "./_Red Banner Hanging.glb": 43447,
      "./_Red Bed Head.glb": 43452,
      "./_Red Strongbed Head.glb": 43454,
      "./_Sheep Painting Bottom Left.glb": 43462,
      "./_Sheep Painting Bottom Right.glb": 43464,
      "./_Sheep Painting Top Left.glb": 43467,
      "./_Sheep Painting Top Right.glb": 43476,
      "./_Skull Banner Flag Hanging.glb": 43481,
      "./_Skull Banner Flag.glb": 43487,
      "./_Skull Banner Hanging.glb": 43492,
      "./_Small Black Pod Mid.glb": 43500,
      "./_Small Black Pod Top.glb": 43503,
      "./_Small Blue Pod Mid.glb": 43511,
      "./_Small Blue Pod Top.glb": 43514,
      "./_Small Brown Pod Mid.glb": 43517,
      "./_Small Brown Pod Top.glb": 43519,
      "./_Small Cyan Pod Mid.glb": 43528,
      "./_Small Cyan Pod Top.glb": 43533,
      "./_Small Gray Pod Mid.glb": 43537,
      "./_Small Gray Pod Top.glb": 43544,
      "./_Small Green Pod Mid.glb": 43549,
      "./_Small Green Pod Top.glb": 43556,
      "./_Small Light Blue Pod Mid.glb": 43564,
      "./_Small Light Blue Pod Top.glb": 43570,
      "./_Small Light Gray Pod Mid.glb": 43578,
      "./_Small Light Gray Pod Top.glb": 43583,
      "./_Small Lime Pod Mid.glb": 43590,
      "./_Small Lime Pod Top.glb": 43596,
      "./_Small Magenta Pod Mid.glb": 43601,
      "./_Small Magenta Pod Top.glb": 43604,
      "./_Small Middle Pod Mag.glb": 43613,
      "./_Small Orange Pod Mid.glb": 43617,
      "./_Small Orange Pod Top.glb": 43624,
      "./_Small Pink Pod Mid.glb": 43627,
      "./_Small Pink Pod Top.glb": 43635,
      "./_Small Purple Pod Mid.glb": 43637,
      "./_Small Purple Pod Top.glb": 43643,
      "./_Small Red Pod Mid.glb": 43647,
      "./_Small Red Pod Top.glb": 43653,
      "./_Small White Pod Mid.glb": 43661,
      "./_Small White Pod Top.glb": 43663,
      "./_Small Yellow Pod Mid.glb": 43666,
      "./_Small Yellow Pod Top.glb": 43670,
      "./_Spectral Door Top.glb": 43679,
      "./_White Banner Flag Hanging.glb": 43682,
      "./_White Banner Flag.glb": 43690,
      "./_White Banner Hanging.glb": 43692,
      "./_White Bed Head.glb": 43700,
      "./_White Strongbed Head.glb": 43703,
      "./_Wildcat Painting Bottom Left.glb": 43711,
      "./_Wildcat Painting Bottom Right.glb": 43717,
      "./_Wildcat Painting Top Left.glb": 43721,
      "./_Wildcat Painting Top Right.glb": 43725,
      "./_Wolf Painting Bottom Left.glb": 43728,
      "./_Wolf Painting Bottom Right.glb": 43734,
      "./_Wolf Painting Top Left.glb": 43737,
      "./_Wolf Painting Top Right.glb": 43740,
      "./_Yellow Banner Flag Hanging.glb": 43742,
      "./_Yellow Banner Flag.glb": 43747,
      "./_Yellow Banner Hanging.glb": 43756,
      "./_Yellow Bed Head.glb": 43761,
      "./_Yellow Strongbed Head.glb": 43767,
      "./auto_miner_body.glb": 43770,
      "./auto_miner_drill_back.glb": 43774,
      "./auto_miner_drill_front.glb": 43780,
      "./auto_miner_foot_back.glb": 43785,
      "./auto_miner_foot_front.glb": 43792,
      "./auto_miner_lunite_body.glb": 43799,
      "./auto_miner_lunite_drill_back.glb": 43808,
      "./auto_miner_lunite_drill_front.glb": 43811,
      "./auto_miner_lunite_foot_back.glb": 43817,
      "./auto_miner_lunite_foot_front.glb": 43824,
      "./baf2_coolant_pipe_none.glb": 43831,
      "./baf2_coolant_pipe_nx.glb": 43840,
      "./baf2_coolant_pipe_nx_ny.glb": 43844,
      "./baf2_coolant_pipe_nx_ny_nz.glb": 43853,
      "./baf2_coolant_pipe_nx_ny_nz_px.glb": 43862,
      "./baf2_coolant_pipe_nx_ny_nz_px_py.glb": 43871,
      "./baf2_coolant_pipe_nx_ny_nz_px_py_pz.glb": 43876,
      "./baf2_coolant_pipe_nx_ny_nz_px_pz.glb": 43879,
      "./baf2_coolant_pipe_nx_ny_nz_py.glb": 43883,
      "./baf2_coolant_pipe_nx_ny_nz_py_pz.glb": 43887,
      "./baf2_coolant_pipe_nx_ny_nz_pz.glb": 43894,
      "./baf2_coolant_pipe_nx_ny_px.glb": 43896,
      "./baf2_coolant_pipe_nx_ny_px_py.glb": 43902,
      "./baf2_coolant_pipe_nx_ny_px_py_pz.glb": 43907,
      "./baf2_coolant_pipe_nx_ny_px_pz.glb": 43910,
      "./baf2_coolant_pipe_nx_ny_py.glb": 43915,
      "./baf2_coolant_pipe_nx_ny_py_pz.glb": 43917,
      "./baf2_coolant_pipe_nx_ny_pz.glb": 43919,
      "./baf2_coolant_pipe_nx_nz.glb": 43921,
      "./baf2_coolant_pipe_nx_nz_px.glb": 43929,
      "./baf2_coolant_pipe_nx_nz_px_py.glb": 43936,
      "./baf2_coolant_pipe_nx_nz_px_py_pz.glb": 43939,
      "./baf2_coolant_pipe_nx_nz_px_pz.glb": 43944,
      "./baf2_coolant_pipe_nx_nz_py.glb": 43951,
      "./baf2_coolant_pipe_nx_nz_py_pz.glb": 43956,
      "./baf2_coolant_pipe_nx_nz_pz.glb": 43960,
      "./baf2_coolant_pipe_nx_px.glb": 43966,
      "./baf2_coolant_pipe_nx_px_py.glb": 43970,
      "./baf2_coolant_pipe_nx_px_py_pz.glb": 43973,
      "./baf2_coolant_pipe_nx_px_pz.glb": 43979,
      "./baf2_coolant_pipe_nx_py.glb": 43985,
      "./baf2_coolant_pipe_nx_py_pz.glb": 43994,
      "./baf2_coolant_pipe_nx_pz.glb": 43997,
      "./baf2_coolant_pipe_ny.glb": 44005,
      "./baf2_coolant_pipe_ny_nz.glb": 44011,
      "./baf2_coolant_pipe_ny_nz_px.glb": 44018,
      "./baf2_coolant_pipe_ny_nz_px_py.glb": 44021,
      "./baf2_coolant_pipe_ny_nz_px_py_pz.glb": 44029,
      "./baf2_coolant_pipe_ny_nz_px_pz.glb": 44035,
      "./baf2_coolant_pipe_ny_nz_py.glb": 44037,
      "./baf2_coolant_pipe_ny_nz_py_pz.glb": 44045,
      "./baf2_coolant_pipe_ny_nz_pz.glb": 44050,
      "./baf2_coolant_pipe_ny_px.glb": 44055,
      "./baf2_coolant_pipe_ny_px_py.glb": 44060,
      "./baf2_coolant_pipe_ny_px_py_pz.glb": 44063,
      "./baf2_coolant_pipe_ny_px_pz.glb": 44068,
      "./baf2_coolant_pipe_ny_py.glb": 44074,
      "./baf2_coolant_pipe_ny_py_pz.glb": 44079,
      "./baf2_coolant_pipe_ny_pz.glb": 44085,
      "./baf2_coolant_pipe_nz.glb": 44090,
      "./baf2_coolant_pipe_nz_px.glb": 44098,
      "./baf2_coolant_pipe_nz_px_py.glb": 44103,
      "./baf2_coolant_pipe_nz_px_py_pz.glb": 44110,
      "./baf2_coolant_pipe_nz_px_pz.glb": 44112,
      "./baf2_coolant_pipe_nz_py.glb": 44116,
      "./baf2_coolant_pipe_nz_py_pz.glb": 44124,
      "./baf2_coolant_pipe_nz_pz.glb": 44129,
      "./baf2_coolant_pipe_px.glb": 44137,
      "./baf2_coolant_pipe_px_py.glb": 44142,
      "./baf2_coolant_pipe_px_py_pz.glb": 44145,
      "./baf2_coolant_pipe_px_pz.glb": 44149,
      "./baf2_coolant_pipe_py.glb": 44157,
      "./baf2_coolant_pipe_py_pz.glb": 44162,
      "./baf2_coolant_pipe_pz.glb": 44167,
      "./baf2_fluid_pipe_none.glb": 44175,
      "./baf2_fluid_pipe_nx.glb": 44182,
      "./baf2_fluid_pipe_nx_ny.glb": 44190,
      "./baf2_fluid_pipe_nx_ny_nz.glb": 44198,
      "./baf2_fluid_pipe_nx_ny_nz_px.glb": 44200,
      "./baf2_fluid_pipe_nx_ny_nz_px_py.glb": 44205,
      "./baf2_fluid_pipe_nx_ny_nz_px_py_pz.glb": 44208,
      "./baf2_fluid_pipe_nx_ny_nz_px_pz.glb": 44216,
      "./baf2_fluid_pipe_nx_ny_nz_py.glb": 44224,
      "./baf2_fluid_pipe_nx_ny_nz_py_pz.glb": 44228,
      "./baf2_fluid_pipe_nx_ny_nz_pz.glb": 44236,
      "./baf2_fluid_pipe_nx_ny_px.glb": 44238,
      "./baf2_fluid_pipe_nx_ny_px_py.glb": 44245,
      "./baf2_fluid_pipe_nx_ny_px_py_pz.glb": 44249,
      "./baf2_fluid_pipe_nx_ny_px_pz.glb": 44258,
      "./baf2_fluid_pipe_nx_ny_py.glb": 44266,
      "./baf2_fluid_pipe_nx_ny_py_pz.glb": 44268,
      "./baf2_fluid_pipe_nx_ny_pz.glb": 44272,
      "./baf2_fluid_pipe_nx_nz.glb": 44278,
      "./baf2_fluid_pipe_nx_nz_px.glb": 44282,
      "./baf2_fluid_pipe_nx_nz_px_py.glb": 44285,
      "./baf2_fluid_pipe_nx_nz_px_py_pz.glb": 44294,
      "./baf2_fluid_pipe_nx_nz_px_pz.glb": 44298,
      "./baf2_fluid_pipe_nx_nz_py.glb": 44300,
      "./baf2_fluid_pipe_nx_nz_py_pz.glb": 44304,
      "./baf2_fluid_pipe_nx_nz_pz.glb": 44311,
      "./baf2_fluid_pipe_nx_px.glb": 44315,
      "./baf2_fluid_pipe_nx_px_py.glb": 44318,
      "./baf2_fluid_pipe_nx_px_py_pz.glb": 44322,
      "./baf2_fluid_pipe_nx_px_pz.glb": 44327,
      "./baf2_fluid_pipe_nx_py.glb": 44331,
      "./baf2_fluid_pipe_nx_py_pz.glb": 44334,
      "./baf2_fluid_pipe_nx_pz.glb": 44337,
      "./baf2_fluid_pipe_ny.glb": 44345,
      "./baf2_fluid_pipe_ny_nz.glb": 44352,
      "./baf2_fluid_pipe_ny_nz_px.glb": 44358,
      "./baf2_fluid_pipe_ny_nz_px_py.glb": 44364,
      "./baf2_fluid_pipe_ny_nz_px_py_pz.glb": 44368,
      "./baf2_fluid_pipe_ny_nz_px_pz.glb": 44370,
      "./baf2_fluid_pipe_ny_nz_py.glb": 44379,
      "./baf2_fluid_pipe_ny_nz_py_pz.glb": 44387,
      "./baf2_fluid_pipe_ny_nz_pz.glb": 44395,
      "./baf2_fluid_pipe_ny_px.glb": 44397,
      "./baf2_fluid_pipe_ny_px_py.glb": 44403,
      "./baf2_fluid_pipe_ny_px_py_pz.glb": 44409,
      "./baf2_fluid_pipe_ny_px_pz.glb": 44415,
      "./baf2_fluid_pipe_ny_py.glb": 44424,
      "./baf2_fluid_pipe_ny_py_pz.glb": 44432,
      "./baf2_fluid_pipe_ny_pz.glb": 44435,
      "./baf2_fluid_pipe_nz.glb": 44440,
      "./baf2_fluid_pipe_nz_px.glb": 44445,
      "./baf2_fluid_pipe_nz_px_py.glb": 44454,
      "./baf2_fluid_pipe_nz_px_py_pz.glb": 44459,
      "./baf2_fluid_pipe_nz_px_pz.glb": 44461,
      "./baf2_fluid_pipe_nz_py.glb": 44463,
      "./baf2_fluid_pipe_nz_py_pz.glb": 44466,
      "./baf2_fluid_pipe_nz_pz.glb": 44473,
      "./baf2_fluid_pipe_px.glb": 44479,
      "./baf2_fluid_pipe_px_py.glb": 44488,
      "./baf2_fluid_pipe_px_py_pz.glb": 44494,
      "./baf2_fluid_pipe_px_pz.glb": 44498,
      "./baf2_fluid_pipe_py.glb": 44500,
      "./baf2_fluid_pipe_py_pz.glb": 44506,
      "./baf2_fluid_pipe_pz.glb": 44512,
      "./baf2_water_pipe_none.glb": 44519,
      "./baf2_water_pipe_nx.glb": 44521,
      "./baf2_water_pipe_nx_ny.glb": 44526,
      "./baf2_water_pipe_nx_ny_nz.glb": 44530,
      "./baf2_water_pipe_nx_ny_nz_px.glb": 44532,
      "./baf2_water_pipe_nx_ny_nz_px_py.glb": 44540,
      "./baf2_water_pipe_nx_ny_nz_px_py_pz.glb": 44548,
      "./baf2_water_pipe_nx_ny_nz_px_pz.glb": 44550,
      "./baf2_water_pipe_nx_ny_nz_py.glb": 44554,
      "./baf2_water_pipe_nx_ny_nz_py_pz.glb": 44561,
      "./baf2_water_pipe_nx_ny_nz_pz.glb": 44567,
      "./baf2_water_pipe_nx_ny_px.glb": 44570,
      "./baf2_water_pipe_nx_ny_px_py.glb": 44573,
      "./baf2_water_pipe_nx_ny_px_py_pz.glb": 44576,
      "./baf2_water_pipe_nx_ny_px_pz.glb": 44578,
      "./baf2_water_pipe_nx_ny_py.glb": 44585,
      "./baf2_water_pipe_nx_ny_py_pz.glb": 44593,
      "./baf2_water_pipe_nx_ny_pz.glb": 44601,
      "./baf2_water_pipe_nx_nz.glb": 44607,
      "./baf2_water_pipe_nx_nz_px.glb": 44615,
      "./baf2_water_pipe_nx_nz_px_py.glb": 44620,
      "./baf2_water_pipe_nx_nz_px_py_pz.glb": 44627,
      "./baf2_water_pipe_nx_nz_px_pz.glb": 44632,
      "./baf2_water_pipe_nx_nz_py.glb": 44635,
      "./baf2_water_pipe_nx_nz_py_pz.glb": 44642,
      "./baf2_water_pipe_nx_nz_pz.glb": 44647,
      "./baf2_water_pipe_nx_px.glb": 44651,
      "./baf2_water_pipe_nx_px_py.glb": 44658,
      "./baf2_water_pipe_nx_px_py_pz.glb": 44663,
      "./baf2_water_pipe_nx_px_pz.glb": 44668,
      "./baf2_water_pipe_nx_py.glb": 44674,
      "./baf2_water_pipe_nx_py_pz.glb": 44681,
      "./baf2_water_pipe_nx_pz.glb": 44690,
      "./baf2_water_pipe_ny.glb": 44692,
      "./baf2_water_pipe_ny_nz.glb": 44695,
      "./baf2_water_pipe_ny_nz_px.glb": 44698,
      "./baf2_water_pipe_ny_nz_px_py.glb": 44700,
      "./baf2_water_pipe_ny_nz_px_py_pz.glb": 44708,
      "./baf2_water_pipe_ny_nz_px_pz.glb": 44714,
      "./baf2_water_pipe_ny_nz_py.glb": 44717,
      "./baf2_water_pipe_ny_nz_py_pz.glb": 44724,
      "./baf2_water_pipe_ny_nz_pz.glb": 44728,
      "./baf2_water_pipe_ny_px.glb": 44736,
      "./baf2_water_pipe_ny_px_py.glb": 44743,
      "./baf2_water_pipe_ny_px_py_pz.glb": 44750,
      "./baf2_water_pipe_ny_px_pz.glb": 44759,
      "./baf2_water_pipe_ny_py.glb": 44764,
      "./baf2_water_pipe_ny_py_pz.glb": 44773,
      "./baf2_water_pipe_ny_pz.glb": 44779,
      "./baf2_water_pipe_nz.glb": 44783,
      "./baf2_water_pipe_nz_px.glb": 44790,
      "./baf2_water_pipe_nz_px_py.glb": 44795,
      "./baf2_water_pipe_nz_px_py_pz.glb": 44798,
      "./baf2_water_pipe_nz_px_pz.glb": 44800,
      "./baf2_water_pipe_nz_py.glb": 44803,
      "./baf2_water_pipe_nz_py_pz.glb": 44811,
      "./baf2_water_pipe_nz_pz.glb": 44817,
      "./baf2_water_pipe_px.glb": 44821,
      "./baf2_water_pipe_px_py.glb": 44829,
      "./baf2_water_pipe_px_py_pz.glb": 44833,
      "./baf2_water_pipe_px_pz.glb": 44840,
      "./baf2_water_pipe_py.glb": 44848,
      "./baf2_water_pipe_py_pz.glb": 44856,
      "./baf2_water_pipe_pz.glb": 44864,
      "./beam_arm.glb": 44866,
      "./beam_arm_mirrored.glb": 44872,
      "./bebek_bebek_bebek.glb": 44881,
      "./bin.glb": 44887,
      "./bobino_musculino.glb": 44895,
      "./bobzilla.glb": 44900,
      "./boiling_pot.glb": 44904,
      "./bone_antlers_model.glb": 44913,
      "./boss_target.glb": 44917,
      "./brra_brra_pachim.glb": 44923,
      "./cannon_barrel_back.glb": 44928,
      "./cannon_barrel_front.glb": 44935,
      "./cannon_bottom_back.glb": 44937,
      "./cannon_bottom_front.glb": 44942,
      "./cannon_top_back.glb": 44945,
      "./cannon_top_front.glb": 44948,
      "./capitano_explovissimo.glb": 44952,
      "./cappuccino_ninjino.glb": 44956,
      "./carpet_black_model.glb": 44959,
      "./carpet_blue_model.glb": 44964,
      "./carpet_brown_model.glb": 44973,
      "./carpet_cyan_model.glb": 44981,
      "./carpet_gray_model.glb": 44989,
      "./carpet_green_model.glb": 44991,
      "./carpet_light_blue_model.glb": 45e3,
      "./carpet_light_gray_model.glb": 45007,
      "./carpet_lime_model.glb": 45010,
      "./carpet_magenta_model.glb": 45017,
      "./carpet_orange_model.glb": 45024,
      "./carpet_pink_model.glb": 45026,
      "./carpet_purple_model.glb": 45034,
      "./carpet_red_model.glb": 45039,
      "./carpet_white_model.glb": 45046,
      "./carpet_yellow_model.glb": 45053,
      "./chili_pepper_stage0_lava_model.glb": 45060,
      "./chili_pepper_stage0_model.glb": 45064,
      "./chili_pepper_stage1_lava_model.glb": 45068,
      "./chili_pepper_stage1_model.glb": 45075,
      "./chili_pepper_stage2_lava_model.glb": 45078,
      "./chili_pepper_stage2_model.glb": 45083,
      "./chili_pepper_stage3_lava_model.glb": 45085,
      "./chili_pepper_stage3_model.glb": 45090,
      "./chili_pepper_stage4_lava_model.glb": 45093,
      "./chili_pepper_stage4_model.glb": 45101,
      "./chili_pepper_stage5_lava_model.glb": 45110,
      "./chili_pepper_stage5_model.glb": 45115,
      "./chili_pepper_stage6_lava_model.glb": 45117,
      "./chimpanzano_bananano.glb": 45126,
      "./chopping_board.glb": 45130,
      "./crystal.glb": 45137,
      "./eclipse_dial.glb": 45140,
      "./extractor_pipe_elbow_nx_ny.glb": 45149,
      "./extractor_pipe_elbow_nx_nz.glb": 45154,
      "./extractor_pipe_elbow_nx_py.glb": 45156,
      "./extractor_pipe_elbow_nx_pz.glb": 45161,
      "./extractor_pipe_elbow_ny_nz.glb": 45164,
      "./extractor_pipe_elbow_ny_px.glb": 45169,
      "./extractor_pipe_elbow_ny_pz.glb": 45177,
      "./extractor_pipe_elbow_nz_px.glb": 45182,
      "./extractor_pipe_elbow_nz_py.glb": 45190,
      "./extractor_pipe_elbow_px_py.glb": 45192,
      "./extractor_pipe_elbow_px_pz.glb": 45194,
      "./extractor_pipe_elbow_py_pz.glb": 45197,
      "./extractor_pipe_end_nx.glb": 45205,
      "./extractor_pipe_end_ny.glb": 45211,
      "./extractor_pipe_end_nz.glb": 45217,
      "./extractor_pipe_end_px.glb": 45224,
      "./extractor_pipe_end_py.glb": 45233,
      "./extractor_pipe_end_pz.glb": 45239,
      "./extractor_pipe_isolated.glb": 45245,
      "./extractor_pipe_straight_x.glb": 45251,
      "./extractor_pipe_straight_y.glb": 45258,
      "./extractor_pipe_straight_z.glb": 45264,
      "./filter_pipe_input_nx.glb": 45269,
      "./filter_pipe_input_ny.glb": 45277,
      "./filter_pipe_input_nz.glb": 45280,
      "./filter_pipe_input_px.glb": 45287,
      "./filter_pipe_input_py.glb": 45289,
      "./filter_pipe_input_pz.glb": 45295,
      "./floor_quarters.glb": 45297,
      "./football.glb": 45299,
      "./frying_pan.glb": 45305,
      "./glowing_mushroom.glb": 45312,
      "./glowing_mushroom_wall.glb": 45315,
      "./gold_antlers_model.glb": 45321,
      "./hob_boiling.glb": 45326,
      "./hob_frying.glb": 45329,
      "./il_wizardini_del_porko.glb": 45337,
      "./job_application.glb": 45341,
      "./john_beef.glb": 45349,
      "./jump_pad.glb": 45358,
      "./jump_pad_strong.glb": 45361,
      "./jump_pad_super.glb": 45367,
      "./jump_pad_weak.glb": 45375,
      "./kitchen_worktop.glb": 45384,
      "./landing_pad.glb": 45387,
      "./lantern.glb": 45389,
      "./lantern_wall.glb": 45395,
      "./lily_pad_model.glb": 45400,
      "./lucchia_blocchi.glb": 45409,
      "./merger_pipe_output_nx.glb": 45417,
      "./merger_pipe_output_ny.glb": 45419,
      "./merger_pipe_output_nz.glb": 45421,
      "./merger_pipe_output_px.glb": 45427,
      "./merger_pipe_output_py.glb": 45434,
      "./merger_pipe_output_pz.glb": 45440,
      "./monsieur_bedwar.glb": 45442,
      "./mortar_goblin.glb": 45450,
      "./noticeboard_standing.glb": 45454,
      "./noticeboard_standing_bottom.glb": 45458,
      "./noticeboard_standing_bottom_left.glb": 45465,
      "./noticeboard_standing_bottom_right.glb": 45470,
      "./noticeboard_standing_horizontal.glb": 45478,
      "./noticeboard_standing_horizontal_left.glb": 45480,
      "./noticeboard_standing_horizontal_right.glb": 45484,
      "./noticeboard_standing_left.glb": 45489,
      "./noticeboard_standing_leg.glb": 45498,
      "./noticeboard_standing_right.glb": 45500,
      "./noticeboard_standing_single.glb": 45503,
      "./noticeboard_standing_top.glb": 45508,
      "./noticeboard_standing_top_left.glb": 45513,
      "./noticeboard_standing_top_right.glb": 45522,
      "./noticeboard_standing_vertical.glb": 45525,
      "./noticeboard_standing_vertical_bottom.glb": 45528,
      "./noticeboard_standing_vertical_top.glb": 45536,
      "./noticeboard_wall.glb": 45540,
      "./noticeboard_wall_bottom.glb": 45545,
      "./noticeboard_wall_bottom_left.glb": 45553,
      "./noticeboard_wall_bottom_right.glb": 45561,
      "./noticeboard_wall_horizontal.glb": 45568,
      "./noticeboard_wall_horizontal_left.glb": 45574,
      "./noticeboard_wall_horizontal_right.glb": 45583,
      "./noticeboard_wall_left.glb": 45590,
      "./noticeboard_wall_right.glb": 45598,
      "./noticeboard_wall_single.glb": 45606,
      "./noticeboard_wall_top.glb": 45612,
      "./noticeboard_wall_top_left.glb": 45621,
      "./noticeboard_wall_top_right.glb": 45628,
      "./noticeboard_wall_vertical.glb": 45632,
      "./noticeboard_wall_vertical_bottom.glb": 45636,
      "./noticeboard_wall_vertical_top.glb": 45642,
      "./pipe_elbow_nx_ny.glb": 45649,
      "./pipe_elbow_nx_nz.glb": 45652,
      "./pipe_elbow_nx_py.glb": 45656,
      "./pipe_elbow_nx_pz.glb": 45664,
      "./pipe_elbow_ny_nz.glb": 45667,
      "./pipe_elbow_ny_px.glb": 45671,
      "./pipe_elbow_ny_pz.glb": 45673,
      "./pipe_elbow_nz_px.glb": 45677,
      "./pipe_elbow_nz_py.glb": 45683,
      "./pipe_elbow_px_py.glb": 45685,
      "./pipe_elbow_px_pz.glb": 45689,
      "./pipe_elbow_py_pz.glb": 45691,
      "./pipe_end_nx.glb": 45694,
      "./pipe_end_ny.glb": 45697,
      "./pipe_end_nz.glb": 45703,
      "./pipe_end_px.glb": 45711,
      "./pipe_end_py.glb": 45720,
      "./pipe_end_pz.glb": 45728,
      "./pipe_isolated.glb": 45730,
      "./pipe_straight_x.glb": 45733,
      "./pipe_straight_y.glb": 45740,
      "./pipe_straight_z.glb": 45743,
      "./rocket_full.glb": 45751,
      "./rocket_northeast_1.glb": 45753,
      "./rocket_northeast_2.glb": 45759,
      "./rocket_northeast_3.glb": 45768,
      "./rocket_northeast_4.glb": 45771,
      "./rocket_northeast_5.glb": 45775,
      "./rocket_northwest_1.glb": 45783,
      "./rocket_northwest_2.glb": 45792,
      "./rocket_northwest_3.glb": 45794,
      "./rocket_northwest_4.glb": 45801,
      "./rocket_northwest_5.glb": 45803,
      "./rocket_southeast_1.glb": 45807,
      "./rocket_southeast_2.glb": 45812,
      "./rocket_southeast_3.glb": 45814,
      "./rocket_southeast_4.glb": 45822,
      "./rocket_southeast_5.glb": 45829,
      "./rocket_southwest_1.glb": 45836,
      "./rocket_southwest_2.glb": 45843,
      "./rocket_southwest_3.glb": 45845,
      "./rocket_southwest_4.glb": 45851,
      "./rocket_southwest_5.glb": 45855,
      "./rune_sigil.glb": 45861,
      "./slicing_board.glb": 45865,
      "./slime_trail.glb": 45871,
      "./splitter_pipe.glb": 45879,
      "./torch.glb": 45886,
      "./torch_black.glb": 45892,
      "./torch_blue.glb": 45896,
      "./torch_brown.glb": 45904,
      "./torch_cyan.glb": 45911,
      "./torch_gray.glb": 45919,
      "./torch_green.glb": 45924,
      "./torch_light_blue.glb": 45932,
      "./torch_light_gray.glb": 45935,
      "./torch_lime.glb": 45939,
      "./torch_magenta.glb": 45945,
      "./torch_orange.glb": 45953,
      "./torch_pink.glb": 45959,
      "./torch_purple.glb": 45963,
      "./torch_red.glb": 45972,
      "./torch_wall.glb": 45974,
      "./torch_wall_black.glb": 45979,
      "./torch_wall_blue.glb": 45984,
      "./torch_wall_brown.glb": 45991,
      "./torch_wall_cyan.glb": 45998,
      "./torch_wall_gray.glb": 46001,
      "./torch_wall_green.glb": 46008,
      "./torch_wall_light_blue.glb": 46010,
      "./torch_wall_light_gray.glb": 46019,
      "./torch_wall_lime.glb": 46026,
      "./torch_wall_magenta.glb": 46035,
      "./torch_wall_orange.glb": 46040,
      "./torch_wall_pink.glb": 46045,
      "./torch_wall_purple.glb": 46052,
      "./torch_wall_red.glb": 46055,
      "./torch_wall_white.glb": 46064,
      "./torch_wall_yellow.glb": 46073,
      "./torch_white.glb": 46077,
      "./torch_yellow.glb": 46084,
      "./twirlina_cappucina.glb": 46086,
      "./ufo.glb": 46091,
      "./vending_machine_bottom.glb": 46098,
      "./vending_machine_top.glb": 46106,
      "./wave_black.glb": 46115,
      "./wave_blue.glb": 46121,
      "./wave_brown.glb": 46130,
      "./wave_cyan.glb": 46136,
      "./wave_green.glb": 46145,
      "./wave_grey.glb": 46153,
      "./wave_light_blue.glb": 46158,
      "./wave_light_grey.glb": 46164,
      "./wave_lime.glb": 46167,
      "./wave_magenta.glb": 46174,
      "./wave_orange.glb": 46179,
      "./wave_pink.glb": 46183,
      "./wave_purple.glb": 46191,
      "./wave_red.glb": 46195,
      "./wave_white.glb": 46203,
      "./wave_yellow.glb": 46209,
      "./wheel.glb": 46218,
      "./wire_elbow_nx_ny.glb": 46223,
      "./wire_elbow_nx_nz.glb": 46227,
      "./wire_elbow_nx_py.glb": 46232,
      "./wire_elbow_nx_pz.glb": 46240,
      "./wire_elbow_ny_nz.glb": 46242,
      "./wire_elbow_ny_px.glb": 46251,
      "./wire_elbow_ny_pz.glb": 46258,
      "./wire_elbow_nz_px.glb": 46267,
      "./wire_elbow_nz_py.glb": 46274,
      "./wire_elbow_px_py.glb": 46281,
      "./wire_elbow_px_pz.glb": 46288,
      "./wire_elbow_py_pz.glb": 46297,
      "./wire_end_nx.glb": 46305,
      "./wire_end_ny.glb": 46309,
      "./wire_end_nz.glb": 46318,
      "./wire_end_px.glb": 46325,
      "./wire_end_py.glb": 46332,
      "./wire_end_pz.glb": 46339,
      "./wire_isolated.glb": 46346,
      "./wire_straight_x.glb": 46355,
      "./wire_straight_y.glb": 46360,
      "./wire_straight_z.glb": 46369
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 41900
  },
  50153: (yb, bb, Wy) => {
    var Uy = {
      "./arrow.png": 50160,
      "./bubble.png": 50165,
      "./critical_hit.png": 50174,
      "./drift.png": 50177,
      "./effect_5.png": 50180,
      "./fishingFishSilhouette.png": 50189,
      "./generic_2.png": 50198,
      "./glint.png": 50200,
      "./heart.png": 50207,
      "./scary_face.png": 50215,
      "./soul_0.png": 50220,
      "./square_particle.png": 50227,
      "./z-particle.png": 50234
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 50153
  },
  41892: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ATTACHMENT_IMAGE_NAMES: () => Ey,
      CAPE_NAMES: () => sy,
      GROUP_ATLAS_PATHS: () => ey,
      LIFEFORM_ATLAS_PATHS: () => oy,
      MODEL_FILE_PATHS: () => hy,
      PARTICLE_TEXTURE_NAMES: () => Vy,
      PLAYER_FILE: () => Ky,
      attachmentImageUrl: () => ly,
      blockImageName: () => Ty,
      blockImageUrl: () => Cy,
      capeUrl: () => Sy,
      filePackName: () => cb,
      fileSource: () => Zy,
      fileUrl: () => Py,
      groupAtlasUrl: () => qb,
      lifeformAtlasUrl: () => By,
      particleTextureUrl: () => Jy
    });
    const Uy = "BBSSSSSSSSSSSSSSSBBBSBBSSSSSSBBBBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBSBSBBSBBSBBSBBSBBSBBBBBBBBSBBSBSSSSSSBBBBBBBBBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSBSSSSSSSBSBBSBBSBSBSBSBSBSSBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBSBBBBBSBBBBBBBBBBBBSSSSSSSSSSSSBSBBSBBSBSBSBSBSSSSSSSSBSBSSBBSSSBSBBSBSBSBSSSSSSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSSSSBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBBSBBBSSBSBSBSBSBBBSBBBSBBSSBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBSBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBSBSBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBSBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBSBBBBSSSSSSSBBBSSBSBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSBBBBBBBBBBBBBBSSSSSSSSSSSSSSSBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSLlLLLLLLLLLLLLLLLLLLLLLLLlLlLlLlLlLlLlLlLLlLlLlLlLlLlLlLlLlLLlLLlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      hy = ["Fence", "FenceGate", "Cactus", "Grass", "Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Furnace", "Workbench", "Maple Door", "Maple Door", "_Maple Door Top", "Maple Trapdoor", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Maple Ladder", "Vines", "Iron Ladder", "Artisan Bench", "Wheat Seeds", "Wheat", "White Bed", "White Bed", "_White Bed Head", "Orange Bed", "Orange Bed", "_Orange Bed Head", "Magenta Bed", "Magenta Bed", "_Magenta Bed Head", "Light Blue Bed", "Light Blue Bed", "_Light Blue Bed Head", "Yellow Bed", "Yellow Bed", "_Yellow Bed Head", "Lime Bed", "Lime Bed", "_Lime Bed Head", "Pink Bed", "Pink Bed", "_Pink Bed Head", "Gray Bed", "Gray Bed", "_Gray Bed Head", "Light Gray Bed", "Light Gray Bed", "_Light Gray Bed Head", "Cyan Bed", "Cyan Bed", "_Cyan Bed Head", "Purple Bed", "Purple Bed", "_Purple Bed Head", "Blue Bed", "Blue Bed", "_Blue Bed Head", "Brown Bed", "Brown Bed", "_Brown Bed Head", "Green Bed", "Green Bed", "_Green Bed Head", "Red Bed", "Red Bed", "_Red Bed Head", "Black Bed", "Black Bed", "_Black Bed Head", "Palm Sapling", "Pine Door", "Pine Door", "_Pine Door Top", "Plum Door", "Plum Door", "_Plum Door Top", "Cedar Door", "Cedar Door", "_Cedar Door Top", "Aspen Door", "Aspen Door", "_Aspen Door Top", "Jungle Door", "Jungle Door", "_Jungle Door Top", "Palm Door", "Palm Door", "_Palm Door Top", "Pine Trapdoor", "Plum Trapdoor", "Cedar Trapdoor", "Aspen Trapdoor", "Jungle Trapdoor", "Palm Trapdoor", "Pear Door", "Pear Door", "_Pear Door Top", "Pear Trapdoor", "Pear Sapling", "Board", "Board", "Net", "Cobweb", "Watermelon Seeds", "Pumpkin Seeds", "Melon Seeds", "Potion Table", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "carpet_black_model", "Black Carpet", "carpet_blue_model", "Blue Carpet", "carpet_brown_model", "Brown Carpet", "carpet_cyan_model", "Cyan Carpet", "carpet_gray_model", "Gray Carpet", "carpet_light_gray_model", "Light Gray Carpet", "carpet_green_model", "Green Carpet", "carpet_light_blue_model", "Light Blue Carpet", "carpet_lime_model", "Lime Carpet", "carpet_magenta_model", "Magenta Carpet", "carpet_orange_model", "Orange Carpet", "carpet_pink_model", "Pink Carpet", "carpet_purple_model", "Purple Carpet", "carpet_red_model", "Red Carpet", "carpet_white_model", "White Carpet", "carpet_yellow_model", "Yellow Carpet", "Rice", "Cranberries", "Red Mushroom", "Brown Mushroom", "Cotton Seeds", "Tall Grass", "Cherry Door", "Cherry Door", "_Cherry Door Top", "Cherry Trapdoor", "Cherry Sapling", "Cherry Ladder", "Spikes_Wood", "Wood Spikes", "Spikes_Stone", "Stone Spikes", "Spikes_Iron", "Iron Spikes", "Spikes_Gold", "Gold Spikes", "Spikes_Diamond", "Diamond Spikes", "Spikes_Kill", "Kill Spikes", "Corn Seeds", "White Strongbed", "White Strongbed", "_White Strongbed Head", "Orange Strongbed", "Orange Strongbed", "_Orange Strongbed Head", "Magenta Strongbed", "Magenta Strongbed", "_Magenta Strongbed Head", "Light Blue Strongbed", "Light Blue Strongbed", "_Light Blue Strongbed Head", "Yellow Strongbed", "Yellow Strongbed", "_Yellow Strongbed Head", "Lime Strongbed", "Lime Strongbed", "_Lime Strongbed Head", "Pink Strongbed", "Pink Strongbed", "_Pink Strongbed Head", "Gray Strongbed", "Gray Strongbed", "_Gray Strongbed Head", "Light Gray Strongbed", "Light Gray Strongbed", "_Light Gray Strongbed Head", "Cyan Strongbed", "Cyan Strongbed", "_Cyan Strongbed Head", "Purple Strongbed", "Purple Strongbed", "_Purple Strongbed Head", "Blue Strongbed", "Blue Strongbed", "_Blue Strongbed Head", "Brown Strongbed", "Brown Strongbed", "_Brown Strongbed Head", "Green Strongbed", "Green Strongbed", "_Green Strongbed Head", "Red Strongbed", "Red Strongbed", "_Red Strongbed Head", "Black Strongbed", "Black Strongbed", "_Black Strongbed Head", "Timed Spike Bomb Block", "Fat Brown Mushroom", "Fat Red Mushroom", "chili_pepper_stage0_model", "Chili Pepper Seeds", "chili_pepper_stage1_model", "chili_pepper_stage2_model", "chili_pepper_stage3_model", "chili_pepper_stage4_model", "chili_pepper_stage5_model", "chili_pepper_stage0_lava_model", "chili_pepper_stage1_lava_model", "chili_pepper_stage2_lava_model", "chili_pepper_stage3_lava_model", "chili_pepper_stage4_lava_model", "chili_pepper_stage5_lava_model", "chili_pepper_stage6_lava_model", "Pig Spawner Block", "Cow Spawner Block", "Sheep Spawner Block", "Cave Golem Spawner Block", "Draugr Zombie Spawner Block", "Draugr Skeleton Spawner Block", "Empty Spawner Block", "Frost Golem Spawner Block", "Frost Zombie Spawner Block", "Frost Skeleton Spawner Block", "Draugr Knight Spawner Block", "Spectral Grass", "Spectral Door", "Spectral Door", "_Spectral Door Top", "Spectral Trapdoor", "Spectral Sapling", "Spectral Ladder", "Wood Enchanting Table", "Wood Enchanting Table", "Stone Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table", "Diamond Enchanting Table", "Pine Grass", "Pine Fern", "Fallen Pine Cone", "Wolf Spawner Block", "Bear Spawner Block", "Deer Spawner Block", "Stag Spawner Block", "bone_antlers_model", "Bone Antlers", "gold_antlers_model", "Gold Antlers", "Gold Watermelon Stag Spawner Block", "Salvaging Table", "Leaf Bed", "Leaf Bed", "Jungle Tall Grass", "Catnip", "Mango Door", "Mango Door", "_Mango Door Top", "Mango Trapdoor", "Mango Sapling", "Mango Ladder", "Banana Seeds", "Dangling Rope", "Dangling Rope", "Dangling Vine", "Dangling Vine", "Gorilla Spawner Block", "Wildcat Spawner Block", "Draugr Huntress Spawner Block", "Magma Golem Spawner Block", "Horse Spawner Block", "Autumn Fern", "Carrot Seeds", "Potato Seeds", "Beetroot Seeds", "White Banner", "White Banner", "_White Banner Flag Hanging", "_White Banner Flag", "_White Banner Hanging", "Orange Banner", "Orange Banner", "_Orange Banner Flag Hanging", "_Orange Banner Flag", "_Orange Banner Hanging", "Magenta Banner", "Magenta Banner", "_Magenta Banner Flag Hanging", "_Magenta Banner Flag", "_Magenta Banner Hanging", "Light Blue Banner", "Light Blue Banner", "_Light Blue Banner Flag Hanging", "_Light Blue Banner Flag", "_Light Blue Banner Hanging", "Yellow Banner", "Yellow Banner", "_Yellow Banner Flag Hanging", "_Yellow Banner Flag", "_Yellow Banner Hanging", "Lime Banner", "Lime Banner", "_Lime Banner Flag Hanging", "_Lime Banner Flag", "_Lime Banner Hanging", "Pink Banner", "Pink Banner", "_Pink Banner Flag Hanging", "_Pink Banner Flag", "_Pink Banner Hanging", "Gray Banner", "Gray Banner", "_Gray Banner Flag Hanging", "_Gray Banner Flag", "_Gray Banner Hanging", "Light Gray Banner", "Light Gray Banner", "_Light Gray Banner Flag Hanging", "_Light Gray Banner Flag", "_Light Gray Banner Hanging", "Cyan Banner", "Cyan Banner", "_Cyan Banner Flag Hanging", "_Cyan Banner Flag", "_Cyan Banner Hanging", "Purple Banner", "Purple Banner", "_Purple Banner Flag Hanging", "_Purple Banner Flag", "_Purple Banner Hanging", "Blue Banner", "Blue Banner", "_Blue Banner Flag Hanging", "_Blue Banner Flag", "_Blue Banner Hanging", "Brown Banner", "Brown Banner", "_Brown Banner Flag Hanging", "_Brown Banner Flag", "_Brown Banner Hanging", "Green Banner", "Green Banner", "_Green Banner Flag Hanging", "_Green Banner Flag", "_Green Banner Hanging", "Red Banner", "Red Banner", "_Red Banner Flag Hanging", "_Red Banner Flag", "_Red Banner Hanging", "Black Banner", "Black Banner", "_Black Banner Flag Hanging", "_Black Banner Flag", "_Black Banner Hanging", "Draugr Banner", "Draugr Banner", "_Draugr Banner Flag Hanging", "_Draugr Banner Flag", "_Draugr Banner Hanging", "Spirit Golem Spawner Block", "Spirit Wolf Spawner Block", "Spirit Bear Spawner Block", "Spirit Stag Spawner Block", "Spirit Gorilla Spawner Block", "_Sheep Painting Top Left", "Sheep Painting", "_Sheep Painting Top Right", "_Sheep Painting Bottom Left", "_Sheep Painting Bottom Right", "_Cow Painting Top Left", "Cow Painting", "_Cow Painting Top Right", "_Cow Painting Bottom Left", "_Cow Painting Bottom Right", "_Pig Painting Top Left", "Pig Painting", "_Pig Painting Top Right", "_Pig Painting Bottom Left", "_Pig Painting Bottom Right", "_Horse Painting Top Left", "Horse Painting", "_Horse Painting Top Right", "_Horse Painting Bottom Left", "_Horse Painting Bottom Right", "_Wolf Painting Top Left", "Wolf Painting", "_Wolf Painting Top Right", "_Wolf Painting Bottom Left", "_Wolf Painting Bottom Right", "_Deer Painting Top Left", "Deer Painting", "_Deer Painting Top Right", "_Deer Painting Bottom Left", "_Deer Painting Bottom Right", "_Wildcat Painting Top Left", "Wildcat Painting", "_Wildcat Painting Top Right", "_Wildcat Painting Bottom Left", "_Wildcat Painting Bottom Right", "Draugr Warper Spawner Block", "Radar", "_Radar Dish Up", "Inactive Radar", "_Radar Dish Down", "Active Radar", "Gold Trophy", "Gold Trophy", "Small Magenta Pod", "Small Magenta Pod", "_Small Magenta Pod Mid", "_Small Magenta Pod Top", "Small Light Gray Pod", "Small Light Gray Pod", "_Small Light Gray Pod Mid", "_Small Light Gray Pod Top", "Small Red Pod", "Small Red Pod", "_Small Red Pod Mid", "_Small Red Pod Top", "Frost Wraith Spawner Block", "Draugr Reaver Spawner Block", "Small White Pod", "Small White Pod", "_Small White Pod Mid", "_Small White Pod Top", "Small Orange Pod", "Small Orange Pod", "_Small Orange Pod Mid", "_Small Orange Pod Top", "Small Light Blue Pod", "Small Light Blue Pod", "_Small Light Blue Pod Mid", "_Small Light Blue Pod Top", "Small Yellow Pod", "Small Yellow Pod", "_Small Yellow Pod Mid", "_Small Yellow Pod Top", "Small Lime Pod", "Small Lime Pod", "_Small Lime Pod Mid", "_Small Lime Pod Top", "Small Pink Pod", "Small Pink Pod", "_Small Pink Pod Mid", "_Small Pink Pod Top", "Small Gray Pod", "Small Gray Pod", "_Small Gray Pod Mid", "_Small Gray Pod Top", "Small Cyan Pod", "Small Cyan Pod", "_Small Cyan Pod Mid", "_Small Cyan Pod Top", "Small Purple Pod", "Small Purple Pod", "_Small Purple Pod Mid", "_Small Purple Pod Top", "Small Blue Pod", "Small Blue Pod", "_Small Blue Pod Mid", "_Small Blue Pod Top", "Small Brown Pod", "Small Brown Pod", "_Small Brown Pod Mid", "_Small Brown Pod Top", "Small Green Pod", "Small Green Pod", "_Small Green Pod Mid", "_Small Green Pod Top", "Small Black Pod", "Small Black Pod", "_Small Black Pod Mid", "_Small Black Pod Top", "Skull Banner", "Skull Banner", "_Skull Banner Flag Hanging", "_Skull Banner Flag", "_Skull Banner Hanging", "Rainbow Banner", "Rainbow Banner", "_Rainbow Banner Flag Hanging", "_Rainbow Banner Flag", "_Rainbow Banner Hanging", "2_block", "bebek_bebek_bebek", "bobino_musculino", "bobzilla", "brra_brra_pachim", "capitano_explovissimo", "cappuccino_ninjino", "chimpanzano_bananano", "il_wizardini_del_porko", "lucchia_blocchi", "monsieur_bedwar", "twirlina_cappucina", "boiling_pot", "chopping_board", "frying_pan", "hob_boiling", "hob_frying", "kitchen_worktop", "slicing_board", "Wood Trophy", "Wood Trophy", "Stone Trophy", "Stone Trophy", "Iron Trophy", "Iron Trophy", "Diamond Trophy", "Diamond Trophy", "Moonstone Trophy", "Moonstone Trophy", "wave_black", "wave_blue", "wave_brown", "wave_cyan", "wave_green", "wave_grey", "wave_light_blue", "wave_light_grey", "wave_lime", "wave_magenta", "wave_orange", "wave_pink", "wave_purple", "wave_red", "wave_white", "wave_yellow", "White Directional Arrow", "Orange Directional Arrow", "Magenta Directional Arrow", "Light Blue Directional Arrow", "Yellow Directional Arrow", "Lime Directional Arrow", "Pink Directional Arrow", "Grey Directional Arrow", "Light Grey Directional Arrow", "Cyan Directional Arrow", "Purple Directional Arrow", "Blue Directional Arrow", "Brown Directional Arrow", "Green Directional Arrow", "Red Directional Arrow", "Black Directional Arrow", "bin", "vending_machine_bottom", "Vending Machine", "vending_machine_top", "job_application", "john_beef", "67", "wheel", "ufo", "torch", "torch_wall", "torch_yellow", "torch_wall_yellow", "torch_white", "torch_wall_white", "torch_red", "torch_wall_red", "torch_purple", "torch_wall_purple", "torch_pink", "torch_wall_pink", "torch_orange", "torch_wall_orange", "torch_magenta", "torch_wall_magenta", "torch_lime", "torch_wall_lime", "torch_light_gray", "torch_wall_light_gray", "torch_light_blue", "torch_wall_light_blue", "torch_green", "torch_wall_green", "torch_gray", "torch_wall_gray", "torch_cyan", "torch_wall_cyan", "torch_brown", "torch_wall_brown", "torch_blue", "torch_wall_blue", "torch_black", "torch_wall_black", "landing_pad", "Landing Pad", "jump_pad_weak", "Weak Jump Pad", "jump_pad", "Jump Pad", "jump_pad_strong", "Strong Jump Pad", "jump_pad_super", "Super Jump Pad", "football", "glowing_mushroom", "glowing_mushroom_wall", "crystal", "slime_trail", "Slime Trail", "pipe_isolated", "pipe_end_nx", "pipe_end_ny", "pipe_end_nz", "pipe_end_px", "pipe_end_py", "pipe_end_pz", "pipe_elbow_nx_ny", "pipe_elbow_nx_nz", "pipe_straight_x", "pipe_elbow_nx_py", "pipe_elbow_nx_pz", "pipe_elbow_ny_nz", "pipe_elbow_ny_px", "pipe_straight_y", "pipe_elbow_ny_pz", "pipe_elbow_nz_px", "pipe_elbow_nz_py", "pipe_straight_z", "pipe_elbow_px_py", "pipe_elbow_px_pz", "pipe_elbow_py_pz", "auto_miner_foot_back", "Auto Miner", "auto_miner_drill_front", "auto_miner_drill_back", "auto_miner_foot_front", "auto_miner_body", "rocket_southwest_1", "Rocket Ship", "rocket_southwest_2", "rocket_southwest_3", "rocket_southwest_4", "rocket_southwest_5", "rocket_southeast_1", "rocket_southeast_2", "rocket_southeast_3", "rocket_southeast_4", "rocket_southeast_5", "rocket_northwest_1", "rocket_northwest_2", "rocket_northwest_3", "rocket_northwest_4", "rocket_northwest_5", "rocket_northeast_1", "rocket_northeast_2", "rocket_northeast_3", "rocket_northeast_4", "rocket_northeast_5", "rocket_full", "extractor_pipe_isolated", "extractor_pipe_end_nx", "extractor_pipe_end_ny", "extractor_pipe_end_nz", "extractor_pipe_end_px", "extractor_pipe_end_py", "extractor_pipe_end_pz", "extractor_pipe_elbow_nx_ny", "extractor_pipe_elbow_nx_nz", "extractor_pipe_straight_x", "extractor_pipe_elbow_nx_py", "extractor_pipe_elbow_nx_pz", "extractor_pipe_elbow_ny_nz", "extractor_pipe_elbow_ny_px", "extractor_pipe_straight_y", "extractor_pipe_elbow_ny_pz", "extractor_pipe_elbow_nz_px", "extractor_pipe_elbow_nz_py", "extractor_pipe_straight_z", "extractor_pipe_elbow_px_py", "extractor_pipe_elbow_px_pz", "extractor_pipe_elbow_py_pz", "splitter_pipe", "wire_isolated", "wire_end_nx", "wire_end_ny", "wire_end_nz", "wire_end_px", "wire_end_py", "wire_end_pz", "wire_elbow_nx_ny", "wire_elbow_nx_nz", "wire_straight_x", "wire_elbow_nx_py", "wire_elbow_nx_pz", "wire_elbow_ny_nz", "wire_elbow_ny_px", "wire_straight_y", "wire_elbow_ny_pz", "wire_elbow_nz_px", "wire_elbow_nz_py", "wire_straight_z", "wire_elbow_px_py", "wire_elbow_px_pz", "wire_elbow_py_pz", "filter_pipe_input_pz", "filter_pipe_input_nx", "filter_pipe_input_ny", "filter_pipe_input_nz", "filter_pipe_input_px", "filter_pipe_input_py", "merger_pipe_output_pz", "merger_pipe_output_nx", "merger_pipe_output_ny", "merger_pipe_output_nz", "merger_pipe_output_px", "merger_pipe_output_py", "Stalker Spawner Block", "auto_miner_lunite_foot_back", "Lunite Auto Miner", "auto_miner_lunite_drill_front", "auto_miner_lunite_drill_back", "auto_miner_lunite_foot_front", "auto_miner_lunite_body", "Crone Spawner Block", "Slime Spawner Block", "Iron Guardian Spawner Block", "Gold Guardian Spawner Block", "Diamond Guardian Spawner Block", "Moonstone Guardian Spawner Block", "Dead Bush", "lantern", "lantern_wall", "lily_pad_model", "Lily Pad", "Camel Spawner Block", "_Camel Painting Top Left", "Camel Painting", "_Camel Painting Top Right", "_Camel Painting Bottom Left", "_Camel Painting Bottom Right", "Small Twin Icicle", "Medium Icicle", "Large Icicle", "Large Twin Icicle", "noticeboard_standing", "noticeboard_standing_top", "noticeboard_standing_bottom", "noticeboard_standing_left", "noticeboard_standing_right", "noticeboard_standing_top_left", "noticeboard_standing_top_right", "noticeboard_standing_bottom_left", "noticeboard_standing_bottom_right", "noticeboard_standing_leg", "noticeboard_wall", "noticeboard_wall_top", "noticeboard_wall_bottom", "noticeboard_wall_left", "noticeboard_wall_right", "noticeboard_wall_top_left", "noticeboard_wall_top_right", "noticeboard_wall_bottom_left", "noticeboard_wall_bottom_right", "Tiki Terror Spawner Block", "Maple Fence", "Pine Fence", "Plum Fence", "Cedar Fence", "Aspen Fence", "Jungle Fence", "Palm Fence", "Pear Fence", "Cherry Fence", "Spectral Fence", "Mango Fence", "noticeboard_wall_single", "noticeboard_wall_horizontal_right", "noticeboard_wall_horizontal_left", "noticeboard_wall_horizontal", "noticeboard_wall_vertical_bottom", "noticeboard_wall_vertical_top", "noticeboard_wall_vertical", "noticeboard_standing_single", "noticeboard_standing_horizontal_right", "noticeboard_standing_horizontal_left", "noticeboard_standing_horizontal", "noticeboard_standing_vertical_bottom", "noticeboard_standing_vertical_top", "noticeboard_standing_vertical", "Maple Fence Gate", "Pine Fence Gate", "Plum Fence Gate", "Cedar Fence Gate", "Aspen Fence Gate", "Jungle Fence Gate", "Palm Fence Gate", "Pear Fence Gate", "Cherry Fence Gate", "Spectral Fence Gate", "Mango Fence Gate", "Iron Goofy Golem Spawner Block", "Gold Goofy Golem Spawner Block", "Diamond Goofy Golem Spawner Block", "Moonstone Goofy Golem Spawner Block", "cannon_bottom_back", "cannon_bottom_front", "cannon_barrel_back", "cannon_barrel_front", "cannon_top_back", "cannon_top_front", "floor_quarters", "boss_target", "rune_sigil", "eclipse_dial", "beam_arm", "beam_arm_mirrored", "mortar_goblin", "Showcase", "Pine Item Pedestal", "Plum Item Pedestal", "Cedar Item Pedestal", "Aspen Item Pedestal", "Jungle Item Pedestal", "Palm Item Pedestal", "Pear Item Pedestal", "Cherry Item Pedestal", "Spectral Item Pedestal", "Mango Item Pedestal", "baf2_fluid_pipe_none", "Fluid Pipe", "baf2_fluid_pipe_nx", "baf2_fluid_pipe_ny", "baf2_fluid_pipe_nx_ny", "baf2_fluid_pipe_nz", "baf2_fluid_pipe_nx_nz", "baf2_fluid_pipe_ny_nz", "baf2_fluid_pipe_nx_ny_nz", "baf2_fluid_pipe_px", "baf2_fluid_pipe_nx_px", "baf2_fluid_pipe_ny_px", "baf2_fluid_pipe_nx_ny_px", "baf2_fluid_pipe_nz_px", "baf2_fluid_pipe_nx_nz_px", "baf2_fluid_pipe_ny_nz_px", "baf2_fluid_pipe_nx_ny_nz_px", "baf2_fluid_pipe_py", "baf2_fluid_pipe_nx_py", "baf2_fluid_pipe_ny_py", "baf2_fluid_pipe_nx_ny_py", "baf2_fluid_pipe_nz_py", "baf2_fluid_pipe_nx_nz_py", "baf2_fluid_pipe_ny_nz_py", "baf2_fluid_pipe_nx_ny_nz_py", "baf2_fluid_pipe_px_py", "baf2_fluid_pipe_nx_px_py", "baf2_fluid_pipe_ny_px_py", "baf2_fluid_pipe_nx_ny_px_py", "baf2_fluid_pipe_nz_px_py", "baf2_fluid_pipe_nx_nz_px_py", "baf2_fluid_pipe_ny_nz_px_py", "baf2_fluid_pipe_nx_ny_nz_px_py", "baf2_fluid_pipe_pz", "baf2_fluid_pipe_nx_pz", "baf2_fluid_pipe_ny_pz", "baf2_fluid_pipe_nx_ny_pz", "baf2_fluid_pipe_nz_pz", "baf2_fluid_pipe_nx_nz_pz", "baf2_fluid_pipe_ny_nz_pz", "baf2_fluid_pipe_nx_ny_nz_pz", "baf2_fluid_pipe_px_pz", "baf2_fluid_pipe_nx_px_pz", "baf2_fluid_pipe_ny_px_pz", "baf2_fluid_pipe_nx_ny_px_pz", "baf2_fluid_pipe_nz_px_pz", "baf2_fluid_pipe_nx_nz_px_pz", "baf2_fluid_pipe_ny_nz_px_pz", "baf2_fluid_pipe_nx_ny_nz_px_pz", "baf2_fluid_pipe_py_pz", "baf2_fluid_pipe_nx_py_pz", "baf2_fluid_pipe_ny_py_pz", "baf2_fluid_pipe_nx_ny_py_pz", "baf2_fluid_pipe_nz_py_pz", "baf2_fluid_pipe_nx_nz_py_pz", "baf2_fluid_pipe_ny_nz_py_pz", "baf2_fluid_pipe_nx_ny_nz_py_pz", "baf2_fluid_pipe_px_py_pz", "baf2_fluid_pipe_nx_px_py_pz", "baf2_fluid_pipe_ny_px_py_pz", "baf2_fluid_pipe_nx_ny_px_py_pz", "baf2_fluid_pipe_nz_px_py_pz", "baf2_fluid_pipe_nx_nz_px_py_pz", "baf2_fluid_pipe_ny_nz_px_py_pz", "baf2_fluid_pipe_nx_ny_nz_px_py_pz", "baf2_water_pipe_none", "baf2_water_pipe_nx", "baf2_water_pipe_ny", "baf2_water_pipe_nx_ny", "baf2_water_pipe_nz", "baf2_water_pipe_nx_nz", "baf2_water_pipe_ny_nz", "baf2_water_pipe_nx_ny_nz", "baf2_water_pipe_px", "baf2_water_pipe_nx_px", "baf2_water_pipe_ny_px", "baf2_water_pipe_nx_ny_px", "baf2_water_pipe_nz_px", "baf2_water_pipe_nx_nz_px", "baf2_water_pipe_ny_nz_px", "baf2_water_pipe_nx_ny_nz_px", "baf2_water_pipe_py", "baf2_water_pipe_nx_py", "baf2_water_pipe_ny_py", "baf2_water_pipe_nx_ny_py", "baf2_water_pipe_nz_py", "baf2_water_pipe_nx_nz_py", "baf2_water_pipe_ny_nz_py", "baf2_water_pipe_nx_ny_nz_py", "baf2_water_pipe_px_py", "baf2_water_pipe_nx_px_py", "baf2_water_pipe_ny_px_py", "baf2_water_pipe_nx_ny_px_py", "baf2_water_pipe_nz_px_py", "baf2_water_pipe_nx_nz_px_py", "baf2_water_pipe_ny_nz_px_py", "baf2_water_pipe_nx_ny_nz_px_py", "baf2_water_pipe_pz", "baf2_water_pipe_nx_pz", "baf2_water_pipe_ny_pz", "baf2_water_pipe_nx_ny_pz", "baf2_water_pipe_nz_pz", "baf2_water_pipe_nx_nz_pz", "baf2_water_pipe_ny_nz_pz", "baf2_water_pipe_nx_ny_nz_pz", "baf2_water_pipe_px_pz", "baf2_water_pipe_nx_px_pz", "baf2_water_pipe_ny_px_pz", "baf2_water_pipe_nx_ny_px_pz", "baf2_water_pipe_nz_px_pz", "baf2_water_pipe_nx_nz_px_pz", "baf2_water_pipe_ny_nz_px_pz", "baf2_water_pipe_nx_ny_nz_px_pz", "baf2_water_pipe_py_pz", "baf2_water_pipe_nx_py_pz", "baf2_water_pipe_ny_py_pz", "baf2_water_pipe_nx_ny_py_pz", "baf2_water_pipe_nz_py_pz", "baf2_water_pipe_nx_nz_py_pz", "baf2_water_pipe_ny_nz_py_pz", "baf2_water_pipe_nx_ny_nz_py_pz", "baf2_water_pipe_px_py_pz", "baf2_water_pipe_nx_px_py_pz", "baf2_water_pipe_ny_px_py_pz", "baf2_water_pipe_nx_ny_px_py_pz", "baf2_water_pipe_nz_px_py_pz", "baf2_water_pipe_nx_nz_px_py_pz", "baf2_water_pipe_ny_nz_px_py_pz", "baf2_water_pipe_nx_ny_nz_px_py_pz", "baf2_coolant_pipe_none", "baf2_coolant_pipe_nx", "baf2_coolant_pipe_ny", "baf2_coolant_pipe_nx_ny", "baf2_coolant_pipe_nz", "baf2_coolant_pipe_nx_nz", "baf2_coolant_pipe_ny_nz", "baf2_coolant_pipe_nx_ny_nz", "baf2_coolant_pipe_px", "baf2_coolant_pipe_nx_px", "baf2_coolant_pipe_ny_px", "baf2_coolant_pipe_nx_ny_px", "baf2_coolant_pipe_nz_px", "baf2_coolant_pipe_nx_nz_px", "baf2_coolant_pipe_ny_nz_px", "baf2_coolant_pipe_nx_ny_nz_px", "baf2_coolant_pipe_py", "baf2_coolant_pipe_nx_py", "baf2_coolant_pipe_ny_py", "baf2_coolant_pipe_nx_ny_py", "baf2_coolant_pipe_nz_py", "baf2_coolant_pipe_nx_nz_py", "baf2_coolant_pipe_ny_nz_py", "baf2_coolant_pipe_nx_ny_nz_py", "baf2_coolant_pipe_px_py", "baf2_coolant_pipe_nx_px_py", "baf2_coolant_pipe_ny_px_py", "baf2_coolant_pipe_nx_ny_px_py", "baf2_coolant_pipe_nz_px_py", "baf2_coolant_pipe_nx_nz_px_py", "baf2_coolant_pipe_ny_nz_px_py", "baf2_coolant_pipe_nx_ny_nz_px_py", "baf2_coolant_pipe_pz", "baf2_coolant_pipe_nx_pz", "baf2_coolant_pipe_ny_pz", "baf2_coolant_pipe_nx_ny_pz", "baf2_coolant_pipe_nz_pz", "baf2_coolant_pipe_nx_nz_pz", "baf2_coolant_pipe_ny_nz_pz", "baf2_coolant_pipe_nx_ny_nz_pz", "baf2_coolant_pipe_px_pz", "baf2_coolant_pipe_nx_px_pz", "baf2_coolant_pipe_ny_px_pz", "baf2_coolant_pipe_nx_ny_px_pz", "baf2_coolant_pipe_nz_px_pz", "baf2_coolant_pipe_nx_nz_px_pz", "baf2_coolant_pipe_ny_nz_px_pz", "baf2_coolant_pipe_nx_ny_nz_px_pz", "baf2_coolant_pipe_py_pz", "baf2_coolant_pipe_nx_py_pz", "baf2_coolant_pipe_ny_py_pz", "baf2_coolant_pipe_nx_ny_py_pz", "baf2_coolant_pipe_nz_py_pz", "baf2_coolant_pipe_nx_nz_py_pz", "baf2_coolant_pipe_ny_nz_py_pz", "baf2_coolant_pipe_nx_ny_nz_py_pz", "baf2_coolant_pipe_px_py_pz", "baf2_coolant_pipe_nx_px_py_pz", "baf2_coolant_pipe_ny_px_py_pz", "baf2_coolant_pipe_nx_ny_px_py_pz", "baf2_coolant_pipe_nz_px_py_pz", "baf2_coolant_pipe_nx_nz_px_py_pz", "baf2_coolant_pipe_ny_nz_px_py_pz", "baf2_coolant_pipe_nx_ny_nz_px_py_pz", "Nova Trophy", "Nova Trophy", "Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Moonstone Pickaxe", "Golem Pickaxe", "Wood Axe", "Stone Axe", "Iron Axe", "Gold Axe", "Diamond Axe", "Moonstone Axe", "Artisan Axe", "Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", "Wood Sword", "Stone Sword", "Iron Sword", "Gold Sword", "Diamond Sword", "Knight Sword", "Wood Hoe", "Stone Hoe", "Iron Hoe", "Gold Hoe", "Diamond Hoe", "Flashlight", "Mining Helmet", "Wood Helmet", "Iron Helmet", "Gold Helmet", "Diamond Helmet", "Wood Chestplate", "Iron Chestplate", "Gold Chestplate", "Diamond Chestplate", "Fur Chestplate", "Wood Leggings", "Iron Leggings", "Gold Leggings", "Diamond Leggings", "Wood Boots", "Iron Boots", "Gold Boots", "Diamond Boots", "Spiked Boots", "Wood Gauntlets", "Iron Gauntlets", "Gold Gauntlets", "Diamond Gauntlets", "Military Helmet", "Military Chestplate", "Military Gauntlets", "Military Leggings", "Military Boots", "Shears", "Artisan Shears", "Stick", "Coal", "Raw Iron", "Iron Bar", "Iron Fragment", "Raw Gold", "Gold Bar", "Gold Fragment", "Diamond", "Diamond Fragment", "Moonstone", "Lunite", "Moonstone Fragment", "Bowl", "Partially Full Bowl of Cranberries", "Half Full Bowl of Cranberries", "Nearly Full Bowl of Cranberries", "Bowl of Cranberries", "Mushroom Soup", "Glowing Soup", "Night Vision Soup", "Cotton", "Gold Crop", "Bucket", "Water Bucket", "Lava Bucket", "Boat Item", "Boat", "Obsidian Boat Item", "Obsidian Boat", "Speedboat Item", "Speedboat", "Wood Hang Glider Item", "Wood Hang Glider", "Iron Hang Glider Item", "Iron Hang Glider", "Gold Hang Glider Item", "Gold Hang Glider", "Diamond Hang Glider Item", "Diamond Hang Glider", "Hovercraft Item", "Hovercraft", "Yellow Kart Item", "White Kart Item", "Red Kart Item", "Purple Kart Item", "Pink Kart Item", "Orange Kart Item", "Magenta Kart Item", "Lime Kart Item", "Light Gray Kart Item", "Light Blue Kart Item", "Green Kart Item", "Gray Kart Item", "Cyan Kart Item", "Brown Kart Item", "Blue Kart Item", "Black Kart Item", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black Kart", "Off Roader Item", "Off Roader", "Armored Car Item", "Gold Mining Drill", "Iron Mining Drill", "Diamond Mining Drill", "Moonstone Mining Drill", "Armored Car", "Car Item", "Car", "Snowball", "Pebble", "Reinforced Pebble", "Bullet", "Ball", "Reinforced Ball", "Frag Grenade", "Mining Grenade", "Smoke Grenade", "Moonstone Orb", "Fireball", "Bouncy Bomb", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Wood Bow", "Wood Bowmetacharging2", "Wood Bowmetacharging3", "Wood Bowmetacharging4", "Stone Bow", "Stone Bowmetacharging2", "Stone Bowmetacharging3", "Stone Bowmetacharging4", "Iron Bow", "Iron Bowmetacharging2", "Iron Bowmetacharging3", "Iron Bowmetacharging4", "Gold Bow", "Gold Bowmetacharging2", "Gold Bowmetacharging3", "Gold Bowmetacharging4", "Diamond Bow", "Diamond Bowmetacharging2", "Diamond Bowmetacharging3", "Diamond Bowmetacharging4", "Wood Crossbow", "Wood Crossbowmetacharging2", "Wood Crossbowmetacharging3", "Wood Crossbowmetacharging4", "Stone Crossbow", "Stone Crossbowmetacharging2", "Stone Crossbowmetacharging3", "Stone Crossbowmetacharging4", "Iron Crossbow", "Iron Crossbowmetacharging2", "Iron Crossbowmetacharging3", "Iron Crossbowmetacharging4", "Gold Crossbow", "Gold Crossbowmetacharging2", "Gold Crossbowmetacharging3", "Gold Crossbowmetacharging4", "Diamond Crossbow", "Diamond Crossbowmetacharging2", "Diamond Crossbowmetacharging3", "Diamond Crossbowmetacharging4", "Wood Crossbow Charged", "Stone Crossbow Charged", "Iron Crossbow Charged", "Gold Crossbow Charged", "Diamond Crossbow Charged", "Arrow", "Compass", "Compassmetadir2", "Compassmetadir3", "Compassmetadir4", "Compassmetadir5", "Compassmetadir6", "Compassmetadir7", "Compassmetadir8", "Compassmetadir9", "Compassmetadir10", "Compassmetadir11", "Compassmetadir12", "Chunk Map", "Bread", "Bowl of Rice", "Apple", "Plum", "Coconut", "Cracked Coconut", "Pear", "Cherry", "Banana", "Watermelon Slice", "Gold Watermelon Slice", "Melon Slice", "Gold Melon Slice", "Pumpkin Pie", "Corn", "Cornbread", "Chili Pepper", "Mango", "Carrot", "Gold Carrot", "Raw Potato", "Baked Potato", "Beetroot", "Raw Porkchop", "Cooked Porkchop", "Raw Beef", "Steak", "Raw Mutton", "Cooked Mutton", "Raw Venison", "Cooked Venison", "Rotten Flesh", "Rotten Brain", "Bone", "Bone Meal", "Leather", "Saddle", "Spirit Saddle", "Fur", "Golem Eye", "Knight Heart", "Teleport Heart", "Frost Shard", "Molten Cog", "Choir Bell", "Siege Core", "Flywheel", "Radiant Spark", "Brood Sac", "Bandolier", "Name Tag", "Book", "Empty Bottle", "Water Bottle", "Slowness Potion", "Splash Slowness Potion", "Arrow of Slowness", "Poison Potion", "Splash Poison Potion", "Arrow of Poison", "Weakness Potion", "Splash Weakness Potion", "Arrow of Weakness", "Instant Damage Potion", "Splash Instant Damage Potion", "Arrow of Instant Damage", "Milk Potion", "Splash Milk Potion", "Arrow of Milk", "Speed Potion", "Splash Speed Potion", "Arrow of Speed", "Defense Potion", "Splash Defense Potion", "Arrow of Defense", "Strength Potion", "Splash Strength Potion", "Arrow of Strength", "Invisibility Potion", "Splash Invisibility Potion", "Arrow of Invisibility", "Jump Potion", "Splash Jump Potion", "Arrow of Jumping", "Knockback Potion", "Splash Knockback Potion", "Arrow of Knockback", "Regeneration Potion", "Splash Regeneration Potion", "Arrow of Regeneration", "Instant Healing Potion", "Splash Instant Healing Potion", "Arrow of Instant Healing", "Haste Potion", "Splash Haste Potion", "Arrow of Haste", "Shield Potion", "Splash Shield Potion", "Arrow of Shield", "Double Jump Potion", "Splash Double Jump Potion", "Arrow of Double Jump", "Heat Resistance Potion", "Splash Heat Resistance Potion", "Arrow of Heat Resistance", "X-Ray Vision Potion", "Splash X-Ray Vision Potion", "Arrow of X-Ray Vision", "Mining Yield Potion", "Splash Mining Yield Potion", "Arrow of Mining Yield", "Brain Rot Potion", "Splash Brain Rot Potion", "Arrow of Brain Rot", "Chaos Potion", "Teleportation Potion", "Ammo", "AK-47", "M16", "MP40", "TAR-21", "M1911", "Double Barrel", "AWP", "Deagle", "Striker-12", "VSR", "DMR", "Minigun", "FMR", "SKAR", "Block-19", "Mini Izu", "GPMG", "Gold Coin", "Updraft", "Snowdash", "Floor Creator", "Moonstone Remote", "Ice Bridge", "Maple Planks Bridge", "Messy Stone Bridge", "Yellow Balloon Item", "White Balloon Item", "Red Balloon Item", "Purple Balloon Item", "Pink Balloon Item", "Orange Balloon Item", "Magenta Balloon Item", "Lime Balloon Item", "Light Gray Balloon Item", "Light Blue Balloon Item", "Green Balloon Item", "Gray Balloon Item", "Cyan Balloon Item", "Brown Balloon Item", "Blue Balloon Item", "Black Balloon Item", "Yellow Balloon", "White Balloon", "Red Balloon", "Purple Balloon", "Pink Balloon", "Orange Balloon", "Magenta Balloon", "Lime Balloon", "Light Gray Balloon", "Light Blue Balloon", "Green Balloon", "Gray Balloon", "Cyan Balloon", "Brown Balloon", "Blue Balloon", "Black Balloon", "Yellow Popup Tower", "White Popup Tower", "Red Popup Tower", "Purple Popup Tower", "Pink Popup Tower", "Orange Popup Tower", "Magenta Popup Tower", "Lime Popup Tower", "Light Gray Popup Tower", "Light Blue Popup Tower", "Green Popup Tower", "Gray Popup Tower", "Cyan Popup Tower", "Brown Popup Tower", "Blue Popup Tower", "Black Popup Tower", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Paintball", "White Paintball", "Red Paintball", "Purple Paintball", "Pink Paintball", "Orange Paintball", "Magenta Paintball", "Lime Paintball", "Light Gray Paintball", "Light Blue Paintball", "Green Paintball", "Gray Paintball", "Cyan Paintball", "Brown Paintball", "Blue Paintball", "Black Paintball", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Yellow Paintball Explosive Item", "White Paintball Explosive Item", "Red Paintball Explosive Item", "Purple Paintball Explosive Item", "Pink Paintball Explosive Item", "Orange Paintball Explosive Item", "Magenta Paintball Explosive Item", "Lime Paintball Explosive Item", "Light Gray Paintball Explosive Item", "Light Blue Paintball Explosive Item", "Green Paintball Explosive Item", "Gray Paintball Explosive Item", "Cyan Paintball Explosive Item", "Brown Paintball Explosive Item", "Blue Paintball Explosive Item", "Black Paintball Explosive Item", "Yellow Sticky Paintball Explosive Item", "White Sticky Paintball Explosive Item", "Red Sticky Paintball Explosive Item", "Purple Sticky Paintball Explosive Item", "Pink Sticky Paintball Explosive Item", "Orange Sticky Paintball Explosive Item", "Magenta Sticky Paintball Explosive Item", "Lime Sticky Paintball Explosive Item", "Light Gray Sticky Paintball Explosive Item", "Light Blue Sticky Paintball Explosive Item", "Green Sticky Paintball Explosive Item", "Gray Sticky Paintball Explosive Item", "Cyan Sticky Paintball Explosive Item", "Brown Sticky Paintball Explosive Item", "Blue Sticky Paintball Explosive Item", "Black Sticky Paintball Explosive Item", "Yellow Seeking Paintball Explosive Item", "White Seeking Paintball Explosive Item", "Red Seeking Paintball Explosive Item", "Purple Seeking Paintball Explosive Item", "Pink Seeking Paintball Explosive Item", "Orange Seeking Paintball Explosive Item", "Magenta Seeking Paintball Explosive Item", "Lime Seeking Paintball Explosive Item", "Light Gray Seeking Paintball Explosive Item", "Light Blue Seeking Paintball Explosive Item", "Green Seeking Paintball Explosive Item", "Gray Seeking Paintball Explosive Item", "Cyan Seeking Paintball Explosive Item", "Brown Seeking Paintball Explosive Item", "Blue Seeking Paintball Explosive Item", "Black Seeking Paintball Explosive Item", "Yellow Quick Paintball Explosive Item", "White Quick Paintball Explosive Item", "Red Quick Paintball Explosive Item", "Purple Quick Paintball Explosive Item", "Pink Quick Paintball Explosive Item", "Orange Quick Paintball Explosive Item", "Magenta Quick Paintball Explosive Item", "Lime Quick Paintball Explosive Item", "Light Gray Quick Paintball Explosive Item", "Light Blue Quick Paintball Explosive Item", "Green Quick Paintball Explosive Item", "Gray Quick Paintball Explosive Item", "Cyan Quick Paintball Explosive Item", "Brown Quick Paintball Explosive Item", "Blue Quick Paintball Explosive Item", "Black Quick Paintball Explosive Item", "Yellow Paint Bow", "Yellow Paint Bowmetacharging2", "Yellow Paint Bowmetacharging3", "Yellow Paint Bowmetacharging4", "White Paint Bow", "White Paint Bowmetacharging2", "White Paint Bowmetacharging3", "White Paint Bowmetacharging4", "Red Paint Bow", "Red Paint Bowmetacharging2", "Red Paint Bowmetacharging3", "Red Paint Bowmetacharging4", "Purple Paint Bow", "Purple Paint Bowmetacharging2", "Purple Paint Bowmetacharging3", "Purple Paint Bowmetacharging4", "Pink Paint Bow", "Pink Paint Bowmetacharging2", "Pink Paint Bowmetacharging3", "Pink Paint Bowmetacharging4", "Orange Paint Bow", "Orange Paint Bowmetacharging2", "Orange Paint Bowmetacharging3", "Orange Paint Bowmetacharging4", "Magenta Paint Bow", "Magenta Paint Bowmetacharging2", "Magenta Paint Bowmetacharging3", "Magenta Paint Bowmetacharging4", "Lime Paint Bow", "Lime Paint Bowmetacharging2", "Lime Paint Bowmetacharging3", "Lime Paint Bowmetacharging4", "Light Gray Paint Bow", "Light Gray Paint Bowmetacharging2", "Light Gray Paint Bowmetacharging3", "Light Gray Paint Bowmetacharging4", "Light Blue Paint Bow", "Light Blue Paint Bowmetacharging2", "Light Blue Paint Bowmetacharging3", "Light Blue Paint Bowmetacharging4", "Green Paint Bow", "Green Paint Bowmetacharging2", "Green Paint Bowmetacharging3", "Green Paint Bowmetacharging4", "Gray Paint Bow", "Gray Paint Bowmetacharging2", "Gray Paint Bowmetacharging3", "Gray Paint Bowmetacharging4", "Cyan Paint Bow", "Cyan Paint Bowmetacharging2", "Cyan Paint Bowmetacharging3", "Cyan Paint Bowmetacharging4", "Brown Paint Bow", "Brown Paint Bowmetacharging2", "Brown Paint Bowmetacharging3", "Brown Paint Bowmetacharging4", "Blue Paint Bow", "Blue Paint Bowmetacharging2", "Blue Paint Bowmetacharging3", "Blue Paint Bowmetacharging4", "Black Paint Bow", "Black Paint Bowmetacharging2", "Black Paint Bowmetacharging3", "Black Paint Bowmetacharging4", "Pig Spawn Orb", "Cow Spawn Orb", "Sheep Spawn Orb", "Horse Spawn Orb", "Camel Spawn Orb", "Iron Goofy Golem Spawn Orb", "Gold Goofy Golem Spawn Orb", "Diamond Goofy Golem Spawn Orb", "Moonstone Goofy Golem Spawn Orb", "Deer Spawn Orb", "Slime Spawn Orb", "Wolf Spawn Orb", "Wildcat Spawn Orb", "Spirit Golem Spawn Orb", "Spirit Wolf Spawn Orb", "Spirit Bear Spawn Orb", "Spirit Stag Spawn Orb", "Spirit Gorilla Spawn Orb", "Bear Spawn Orb", "Stag Spawn Orb", "Gold Watermelon Stag Spawn Orb", "Gorilla Spawn Orb", "Cave Golem Spawn Orb", "Draugr Zombie Spawn Orb", "Draugr Skeleton Spawn Orb", "Frost Golem Spawn Orb", "Frost Zombie Spawn Orb", "Frost Skeleton Spawn Orb", "Draugr Knight Spawn Orb", "Draugr Huntress Spawn Orb", "Magma Golem Spawn Orb", "Draugr Warper Spawn Orb", "Frost Wraith Spawn Orb", "Draugr Reaver Spawn Orb", "Stalker Spawn Orb", "Crone Spawn Orb", "Iron Guardian Spawn Orb", "Gold Guardian Spawn Orb", "Diamond Guardian Spawn Orb", "Moonstone Guardian Spawn Orb", "Tiki Terror Spawn Orb", "Mob Catcher", "Caught Mob Pig Default", "Caught Mob Cow Default", "Caught Mob Cow Cream", "Caught Mob Sheep Default", "Caught Mob Horse Default", "Caught Mob Horse Black", "Caught Mob Horse Brown", "Caught Mob Horse Cream", "Caught Mob Camel Default", "Caught Mob Camel Brown", "Caught Mob Iron_Goofy_Golem Default", "Caught Mob Iron_Goofy_Golem Flaking", "Caught Mob Iron_Goofy_Golem Patchy", "Caught Mob Iron_Goofy_Golem Shedding", "Caught Mob Iron_Goofy_Golem Bare", "Caught Mob Iron_Goofy_Golem Stone", "Caught Mob Gold_Goofy_Golem Default", "Caught Mob Gold_Goofy_Golem Flaking", "Caught Mob Gold_Goofy_Golem Patchy", "Caught Mob Gold_Goofy_Golem Shedding", "Caught Mob Gold_Goofy_Golem Bare", "Caught Mob Gold_Goofy_Golem Stone", "Caught Mob Diamond_Goofy_Golem Default", "Caught Mob Diamond_Goofy_Golem Flaking", "Caught Mob Diamond_Goofy_Golem Patchy", "Caught Mob Diamond_Goofy_Golem Shedding", "Caught Mob Diamond_Goofy_Golem Bare", "Caught Mob Diamond_Goofy_Golem Stone", "Caught Mob Moonstone_Goofy_Golem Default", "Caught Mob Moonstone_Goofy_Golem Flaking", "Caught Mob Moonstone_Goofy_Golem Patchy", "Caught Mob Moonstone_Goofy_Golem Shedding", "Caught Mob Moonstone_Goofy_Golem Bare", "Caught Mob Moonstone_Goofy_Golem Stone", "Caught Mob Deer Default", "Caught Mob Slime Default", "Caught Mob Wolf Default", "Caught Mob Wolf White", "Caught Mob Wolf Brown", "Caught Mob Wolf Grey", "Caught Mob Wolf Spectral", "Caught Mob Wildcat Default", "Caught Mob Wildcat Tabby", "Caught Mob Wildcat Grey", "Caught Mob Wildcat Black", "Caught Mob Wildcat Calico", "Caught Mob Wildcat Siamese", "Caught Mob Wildcat Leopard", "Caught Mob Spirit_Golem Default", "Caught Mob Spirit_Wolf Default", "Caught Mob Spirit_Bear Default", "Caught Mob Spirit_Stag Default", "Caught Mob Spirit_Gorilla Default", "Caught Mob Bear Default", "Caught Mob Stag Default", "Caught Mob Gold_Watermelon_Stag Default", "Caught Mob Gorilla Default", "Caught Mob Cave_Golem Default", "Caught Mob Cave_Golem Iron", "Caught Mob Draugr_Zombie Default", "Caught Mob Draugr_Zombie Longhairchestplate", "Caught Mob Draugr_Zombie Longhairclothed", "Caught Mob Draugr_Zombie Shorthairclothed", "Caught Mob Draugr_Skeleton Default", "Caught Mob Frost_Golem Default", "Caught Mob Frost_Zombie Default", "Caught Mob Frost_Zombie Longhairchestplate", "Caught Mob Frost_Zombie Shorthairclothed", "Caught Mob Frost_Skeleton Default", "Caught Mob Draugr_Knight Default", "Caught Mob Draugr_Huntress Default", "Caught Mob Magma_Golem Default", "Caught Mob Draugr_Warper Default", "Caught Mob Frost_Wraith Default", "Caught Mob Draugr_Reaver Default", "Caught Mob Stalker Default", "Caught Mob Stalker Crimson", "Caught Mob Stalker Frost", "Caught Mob Stalker Void", "Caught Mob Crone Default", "Caught Mob Iron_Guardian Default", "Caught Mob Gold_Guardian Default", "Caught Mob Diamond_Guardian Default", "Caught Mob Moonstone_Guardian Default", "Caught Mob Tiki_Terror Default", "Caught Mob Tiki_Terror Titan", "Caught Mob Tiki_Terror Tormentor", "Caught Mob Tiki_Terror Tyrant", "Timed Spike Bomb", "Timed Spike Bombmetacharging2", "Timed Spike Bombmetacharging3", "Timed Spike Bombmetacharging4", "Toxin Ball", "Aura XP Fragment", "Aura XP Orb", "Aura XP Potion", "Aura XP Potion II", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Arrow of Aura XP", "Firecracker", "Rainbow Firecracker", "Yellow Firecracker", "White Firecracker", "Red Firecracker", "Purple Firecracker", "Pink Firecracker", "Orange Firecracker", "Magenta Firecracker", "Lime Firecracker", "Light Gray Firecracker", "Light Blue Firecracker", "Green Firecracker", "Gray Firecracker", "Cyan Firecracker", "Brown Firecracker", "Blue Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "Yellow Firecracker Pebble", "White Firecracker Pebble", "Red Firecracker Pebble", "Purple Firecracker Pebble", "Pink Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Lime Firecracker Pebble", "Light Gray Firecracker Pebble", "Light Blue Firecracker Pebble", "Green Firecracker Pebble", "Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Brown Firecracker Pebble", "Blue Firecracker Pebble", "Black Firecracker Pebble", "WorldBuilder Wand", "Red Strongfish", "Green Strongfish", "Moon Strongfish", "Wheatfish", "Moonfish", "Bombfish", "Boomerang Fish", "Root Flounder", "Abyss Carp", "Boulder Bass", "Barnaclejaw", "Crystalized Wheatfish", "Darter", "Shadow Darter", "Electric Eel", "Grass Snapper", "Jungle Spinefish", "Mangler Catfish", "Mossback Arapaima", "Sandbelly Piranha", "Shadeback Ray", "Mudbelly Tilapia", "Mireback Carp", "Rotslab Eel", "Aether Minnow", "Murkborne Ray", "Eldertide Leviathan", "Oarfish", "Alpha Moon Strongfish", "Bamboo Catfish", "Blackwater Bream", "Blackwater Leviathan", "Boned Sturgeon", "Bull Shark", "Channel Sawfish", "Coastal Mullet", "Coelacanth", "Driftwood Catfish", "Eagle Ray", "Giant Grouper", "Giant Moray", "Giant Stingray", "Golden Mahseer", "Greenfin Loach", "Mangrove Herring", "Moonlit Boomerang Fish", "Moonstone Pupfish", "Mudline Perch", "Murk Stingray", "Needlefish", "Nomai Moray", "Pearlescent Moonfish", "Rainbow Guppy", "Red Snapper", "Reedglass Minnow", "Reef Sardine", "Root Perch", "Rust Scad", "Seahorse", "Snakehead", "Spined Stickleback", "Stone Grouper", "Sumpback Carp", "Sunset Minnow", "Tarpon", "Threadfin Bream", "Tri-Pointed Needlefish", "Game Dev Fish", "Armoured Searobin", "Ash Lionfish", "Barefrost Toothfish", "Blackfin Icefish", "Basalt Pipefish", "Brimstone Spikefish", "Cinder Leviathan", "Crowned Flame Angelfish", "Deepwater Lanternfish", "Driftice Capelin", "Ember Chub", "Embermark Wrasse", "Eviota Vader", "Frost Herring", "Frost Wolf Eel", "Frostpaint Notie", "Frozen Grenadier", "Giant Trevally", "Glacial Lanternfish", "Glacial Silverfish", "Heatwarp Flounder", "Hatchetfish", "Ice Spined Notothenia", "Iceshelf Skate", "Icy Sculpin", "Lavaflow Trout", "Lavawake Slopefish", "Magma Sardinella", "Magma Trout", "Marbled Moray Cod", "Molten Lotella Cod", "Northern Wolffish", "Paleice Rockcod", "Permafrost Halibut", "Pithead", "Polarflash Electron", "Pyroclast Eel", "Pyroscale Grouper", "Red Pyreside", "Rimesnouted Lancetfish", "Scorched Sunfish", "Scored Dace", "Silver Dragonfish", "Snow Haddock", "Volcanic Catfish", "Volcanic Semperi", "Rusty Rod", "Lucky Rod", "Sturdy Rod", "Jungle Rod", "Draugr Rod", "Cursed Rod", "Tangle Resistant Rod", "Speed Rod", "Carbon Rod", "Deep Sea Rod", "Master Rod", "Obsidian Rod", "Molten Magma Rod", "Frost Rod", "Black Ice Rod", "Mythic Rod", "Acorn", "Acorn Jelly", "Cow's Milk", "Cheese", "Caught Fish", "Fish Fillet", "Meaty Bone", "Blinding Pebble", "Sheep's Milk", "Yoghurt Pot", "Truffle", "Truffle Oil", "Oats", "Porridge", "Dates", "Date Pudding", "Poop", "Fertiliser", "Medkit", "Wood Spear", "Stone Spear", "Iron Spear", "Gold Spear", "Diamond Spear", "Moonstone Spear", "Wood Dagger", "Stone Dagger", "Iron Dagger", "Gold Dagger", "Diamond Dagger", "Moonstone Dagger", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", "Wood Club", "Stone Club", "Iron Club", "Gold Club", "Diamond Club", "Moonstone Club", "Wood Mace", "Stone Mace", "Iron Mace", "Gold Mace", "Diamond Mace", "Moonstone Mace", "Wood Whip", "Stone Whip", "Iron Whip", "Gold Whip", "Diamond Whip", "Moonstone Whip", "Beef Stew", "chicken", "coleslaw", "egg", "Fish N Chips", "Fried Rice", "lettuce", "omelette", "onion", "Red Cabbage", "Roast Dinner", "salad", "Stuffed Pepper", "sushi", "tomato", "Vegetable Soup", "clock_wood_midday", "clock_wood_midnight", "clock_wood_late_night", "clock_wood_sunrise", "clock_wood_early_day", "clock_wood_late_day", "clock_wood_sunset", "clock_wood_early_night", "clock_gold_midday", "clock_gold_midnight", "clock_gold_late_night", "clock_gold_sunrise", "clock_gold_early_day", "clock_gold_late_day", "clock_gold_sunset", "clock_gold_early_night", "Lucky Sword Upgrade", "Lucky Armour Upgrade", "Lucky Tools Upgrade", "Lucky Clover", "Void Net", "Lucky Bomb", "Unlucky Bomb", "Swap Orb", "Golden Lucky Clover", "amethite", "amethite_fragment", "amethite_pickaxe", "amethite_axe", "amethite_shovel", "amethite_sword", "amethite_hoe", "amethite_helmet", "amethite_chestplate", "amethite_leggings", "amethite_boots", "amethite_gauntlets", "amethite_bow", "amethite_bow_charging_2", "amethite_bow_charging_3", "amethite_bow_charging_4", "amethite_crossbow", "amethite_crossbow_charging_2", "amethite_crossbow_charging_3", "amethite_crossbow_charging_4", "amethite_crossbow_charged", "amethite_spear", "amethite_dagger", "amethite_boomerang", "amethite_club", "amethite_mace", "amethite_whip", "magmasteel", "magmasteel_fragment", "magmasteel_pickaxe", "magmasteel_axe", "magmasteel_shovel", "magmasteel_sword", "magmasteel_hoe", "magmasteel_helmet", "magmasteel_chestplate", "magmasteel_leggings", "magmasteel_boots", "magmasteel_gauntlets", "magmasteel_bow", "magmasteel_bow_charging_2", "magmasteel_bow_charging_3", "magmasteel_bow_charging_4", "magmasteel_crossbow", "magmasteel_crossbow_charging_2", "magmasteel_crossbow_charging_3", "magmasteel_crossbow_charging_4", "magmasteel_crossbow_charged", "magmasteel_spear", "magmasteel_dagger", "magmasteel_boomerang", "magmasteel_club", "magmasteel_mace", "magmasteel_whip", "rubellite", "rubellite_fragment", "rubellite_pickaxe", "rubellite_axe", "rubellite_shovel", "rubellite_sword", "rubellite_hoe", "rubellite_helmet", "rubellite_chestplate", "rubellite_leggings", "rubellite_boots", "rubellite_gauntlets", "rubellite_bow", "rubellite_bow_charging_2", "rubellite_bow_charging_3", "rubellite_bow_charging_4", "rubellite_crossbow", "rubellite_crossbow_charging_2", "rubellite_crossbow_charging_3", "rubellite_crossbow_charging_4", "rubellite_crossbow_charged", "rubellite_spear", "rubellite_dagger", "rubellite_boomerang", "rubellite_club", "rubellite_mace", "rubellite_whip", "serpentite", "serpentite_fragment", "serpentite_pickaxe", "serpentite_axe", "serpentite_shovel", "serpentite_sword", "serpentite_hoe", "serpentite_helmet", "serpentite_chestplate", "serpentite_leggings", "serpentite_boots", "serpentite_gauntlets", "serpentite_bow", "serpentite_bow_charging_2", "serpentite_bow_charging_3", "serpentite_bow_charging_4", "serpentite_crossbow", "serpentite_crossbow_charging_2", "serpentite_crossbow_charging_3", "serpentite_crossbow_charging_4", "serpentite_crossbow_charged", "serpentite_spear", "serpentite_dagger", "serpentite_boomerang", "serpentite_club", "serpentite_mace", "serpentite_whip", "cursemetal_helmet", "cursemetal_chestplate", "cursemetal_gauntlets", "cursemetal_leggings", "cursemetal_boots", "kingly_amethite_helmet", "kingly_amethite_chestplate", "kingly_amethite_gauntlets", "kingly_amethite_leggings", "kingly_amethite_boots", "kingly_diamond_helmet", "kingly_diamond_chestplate", "kingly_diamond_gauntlets", "kingly_diamond_leggings", "kingly_diamond_boots", "sanguine_shard", "sanguine_sword", "sanguine_bow", "sanguine_bow_charging_2", "sanguine_bow_charging_3", "sanguine_bow_charging_4", "sanguine_crossbow", "sanguine_crossbow_charging_2", "sanguine_crossbow_charging_3", "sanguine_crossbow_charging_4", "sanguine_crossbow_charged", "sanguine_spear", "sanguine_dagger", "sanguine_club", "sanguine_mace", "sanguine_whip", "sanguine_staff", "sanguine_helmet", "sanguine_chestplate", "sanguine_gauntlets", "sanguine_leggings", "sanguine_boots", "spectral_shard", "spectral_sword", "spectral_bow", "spectral_bow_charging_2", "spectral_bow_charging_3", "spectral_bow_charging_4", "spectral_crossbow", "spectral_crossbow_charging_2", "spectral_crossbow_charging_3", "spectral_crossbow_charging_4", "spectral_crossbow_charged", "spectral_spear", "spectral_dagger", "spectral_club", "spectral_mace", "spectral_whip", "spectral_staff", "spectral_helmet", "spectral_chestplate", "spectral_gauntlets", "spectral_leggings", "spectral_boots", "geo_shard", "geo_sword", "geo_bow", "geo_bow_charging_2", "geo_bow_charging_3", "geo_bow_charging_4", "geo_crossbow", "geo_crossbow_charging_2", "geo_crossbow_charging_3", "geo_crossbow_charging_4", "geo_crossbow_charged", "geo_spear", "geo_dagger", "geo_club", "geo_mace", "geo_whip", "geo_staff", "geo_helmet", "geo_chestplate", "geo_gauntlets", "geo_leggings", "geo_boots", "astral_shard", "astral_sword", "astral_bow", "astral_bow_charging_2", "astral_bow_charging_3", "astral_bow_charging_4", "astral_crossbow", "astral_crossbow_charging_2", "astral_crossbow_charging_3", "astral_crossbow_charging_4", "astral_crossbow_charged", "astral_spear", "astral_dagger", "astral_club", "astral_mace", "astral_whip", "astral_staff", "astral_helmet", "astral_chestplate", "astral_gauntlets", "astral_leggings", "astral_boots", "wooden_key", "stone_key", "iron_key", "gold_key", "diamond_key", "Goldheart Engine", "Deepbite Drill Tip", "Empty Fuel Cell", "Blackfire Fuel Cell", "Doom Rivet", "Doom Crest", "Raw Copper", "Copper Bar", "Iron Grit", "Gold Grit", "Copper Grit", "Charcoal", "Recall Beacon", "Iron Hammer", "Iron Plate", "Copper Wire", "Motor", "Machine Parts", "Relay Coil", "Deposit Seed (Copper)", "Deposit Seed (Gold)", "Deposit Seed (Voltite)", "Deposit Seed (Coal)", "Deposit Seed (Iron)", "Deposit Seed (Stone)", "Steel Bar", "Gold Plate", "Logic Board", "Machine Hull", "Raw Voltite", "Power Coupler", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Voltite Dust", "Voltite Cell", "Sky Pack", "Dusk Moss", "Star Alloy", "Moonstone Dust", "Comet Shard", "Comet Core", "Starbore Drill", "Core Tier 2", "Core Tier 3", "Core Tier 4", "Core Tier 5", "Core Tier 6", "Core Tier 7", "Core Tier 8", "Core Tier 9", "Core Tier 10", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots", "Wood Blade", "Wood Guard", "Wood Handle", "Stone Blade", "Stone Guard", "Stone Handle", "Iron Blade", "Iron Guard", "Iron Handle", "Gold Blade", "Gold Guard", "Gold Handle", "Diamond Blade", "Diamond Guard", "Diamond Handle", "Moonstone Blade", "Moonstone Guard", "Moonstone Handle", "Magmasteel Blade", "Magmasteel Guard", "Magmasteel Handle", "Sanguine Blade", "Sanguine Guard", "Sanguine Handle", "Astral Blade", "Astral Guard", "Astral Handle", "Moonstone Sword", "Magmaward Fuel", "Raw Uranium", "Uranium Grit", "Uranium Pellet", "Plutonium Pellet", "Spent Pellet", "Glow Dust", "Biomass", "Graphite", "Containment Plate", "Heat Exchanger", "Focus Lens", "Nova Matter", "Deposit Seed (Uranium)", "Reactor Blueprint", "Wrench", "Advanced Coupler", "Nova Coupler", "Core Tier 11", "Core Tier 12", "Core Tier 13", "Core Tier 14", "Core Tier 15", "Jet Chestplate", "Nova Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Mob Cage", "Caged Pig", "Caged Cow", "Caged Sheep", "Caged Deer", "Caged Stag", "Nova Multitool", "Pocket Terminal", "Comet Beacon", "Nova Wrench", "Player/Player_Model", "Player/Player_Reconstructed", "Pig/Pig_Model", "Cow/Cow_Model", "Sheep/Sheep_Model", "Horse/Horse_Model", "Camel/Camel_Model", "Iron Goofy Golem/Iron Goofy Golem_Model", "Deer/Deer_Model", "Slime/Slime_Model", "Wolf/Wolf_Model", "Wildcat/Wildcat_Model", "Cave Golem/Cave Golem_Model", "Bear/Bear_Model", "Stag/Stag_Model", "Gorilla/Gorilla_Model", "Draugr Zombie/Draugr Zombie_Model", "Draugr Skeleton/Draugr Skeleton_Model", "Draugr Knight/Draugr Knight_Model", "Draugr Warper/Draugr Warper_Model", "Frost Wraith/Frost Wraith_Model", "Draugr Reaver/Draugr Reaver_Model", "Stalker/Stalker_Model", "Crone/Crone_Model", "Iron Guardian/Iron Guardian_Model", "Iron Guardian/Iron Guardian_Reconstructed", "Gold Guardian/Gold Guardian_Model", "Gold Guardian/Gold Guardian_Reconstructed", "Diamond Guardian/Diamond Guardian_Model", "Diamond Guardian/Diamond Guardian_Reconstructed", "Moonstone Guardian/Moonstone Guardian_Model", "Moonstone Guardian/Moonstone Guardian_Reconstructed", "Tiki Terror/Tiki Terror_Model", "Tiki Terror/Tiki Terror_Reconstructed", "67/67_Model", "67/67_Reconstructed", "Bobino Musculino/Bobino Musculino_Model", "Bobino Musculino/Bobino Musculino_Reconstructed", "Capitano Explovissimo/Capitano Explovissimo_Model", "Capitano Explovissimo/Capitano Explovissimo_Reconstructed", "Desert Fennec/Desert Fennec_Model", "Armour Collector/Armour Collector_Model", "Armour Collector/Armour Collector_Reconstructed", "Furnace Knight/Furnace Knight_Model", "Furnace Knight/Furnace Knight_Reconstructed", "Lil Knight/Lil Knight_Model", "Lil Knight/Lil Knight_Reconstructed", "Glass Gremlin/Glass Gremlin_Model", "Glass Gremlin/Glass Gremlin_Reconstructed", "Glass Bro/Glass Bro_Model", "Glass Bro/Glass Bro_Reconstructed", "Lord Vulcan/Lord Vulcan_Model", "Lord Vulcan/Lord Vulcan_Reconstructed", "Zombie/Zombie_Model", "Zombie/Zombie_Reconstructed", "Skeleton/Skeleton_Model", "Skeleton/Skeleton_Reconstructed", "Mummy/Mummy_Model", "Mummy/Mummy_Reconstructed", "Scorpion/Scorpion_Model", "Vulcanite/Vulcanite_Model", "Vulcanite/Vulcanite_Reconstructed", "Evil Tome/Evil Tome_Model", "Magma Toad/Magma Toad_Model", "Player/astro_set_1_attachable", "Player/astro_set_2_attachable", "Player/astro_set_3_attachable", "Player/astro_set_4_attachable", "Player/beaver_lumberjack", "Player/bee_set_1_attachable", "Player/bee_set_2_attachable", "Player/bee_set_3_attachable", "Player/bee_set_4_attachable", "Player/cape_cuboid_18_12", "Player/chef_attachables", "Player/dwarf_blue_hair", "Player/dwarf_braided_hair", "Player/dwarf_child", "Player/dwarf_forked_beard", "Player/dwarf_ginger_beard", "Player/dwarf_grey_beard", "Player/dwarf_hair_buns", "Player/dwarf_purple_beard", "Player/dwarf_red_hair", "Player/dwarf_short_beard", "Player/farmer_gill_attachable", "Player/farmer_head", "Player/fire_mage_attachable", "Player/forge_mother", "Player/general_attachable", "Player/goblin_goggles", "Player/goblin_mad_scientist", "Player/highSociety_set_1_attachable", "Player/highSociety_set_2_attachable", "Player/highSociety_set_3_attachable", "Player/highSociety_set_4_attachable", "Player/human_archer", "Player/human_desert_guard", "Player/human_sentry", "Player/jackal_priest", "Player/jetpack_attachable", "Player/medieval_set_1_attachable", "Player/medieval_set_2_attachable", "Player/medieval_set_3_attachable", "Player/medieval_set_4_attachable", "Player/mining_helmet_attachable", "Player/minotaur", "Player/minotaur_elder", "Player/minotaur_warrior", "Player/monster_hunter_lorenzo_attachable", "Player/npc_pig_head", "Player/painter_spencer_attachable", "Player/pig_napoleon", "Player/pig_worker_attachable", "Player/piggy_banker_head", "Player/portal_mage_hat", "Player/rabbit_aristocrat_attachable", "Player/smuglyn_attachable", "Player/spring_set_1_attachable", "Player/spring_set_2_attachable", "Player/spring_set_3_attachable", "Player/spring_set_4_attachable", "Player/tentacle_boy", "Player/tentacle_guy_attachable", "Player/tentacle_guy_fisherman_attachable", "Player/trader_cowl_black", "Player/trader_cowl_blue", "Player/wolf_in_suit_attachable", "Player/wolf_security", "Player/y2k_set_1_attachable", "Player/y2k_set_2_attachable", "Player/y2k_set_3_attachable", "Player/y2k_set_4_attachable"],
      fy = {
        b: "block",
        s: "static",
        l: "lifeform"
      };

    function Zy(yb) {
      var bb;
      return null !== (bb = fy[Uy.charAt(yb).toLowerCase()]) && void 0 !== bb ? bb : null
    }

    function cb(yb) {
      var bb;
      const Wy = Uy.charAt(yb);
      return "" !== Wy && Wy === Wy.toUpperCase() && null !== (bb = hy[yb].split("/").pop()) && void 0 !== bb ? bb : null
    }

    function Py(yb, bb) {
      const Uy = hy[yb];
      switch (Zy(yb)) {
        case "block":
          return Wy(41900)(`./${Uy}.glb`);
        case "static":
          return `${bb}/models/${Uy}.glb`;
        case "lifeform":
          return Wy(46377)(`./${Uy}.glb`);
        default:
          return null
      }
    }
    const oy = ["Player/Player_Atlas", "Pig/Pig_Atlas", "Cow/Cow_Atlas", "Sheep/Sheep_Atlas", "Horse/Horse_Atlas", "Camel/Camel_Atlas", "Iron Goofy Golem/Iron Goofy Golem_Atlas", "Gold Goofy Golem/Gold Goofy Golem_Atlas", "Diamond Goofy Golem/Diamond Goofy Golem_Atlas", "Moonstone Goofy Golem/Moonstone Goofy Golem_Atlas", "Deer/Deer_Atlas", "Slime/Slime_Atlas", "Wolf/Wolf_Atlas", "Wildcat/Wildcat_Atlas", "Spirit Golem/Spirit Golem_Atlas", "Spirit Wolf/Spirit Wolf_Atlas", "Spirit Bear/Spirit Bear_Atlas", "Spirit Stag/Spirit Stag_Atlas", "Spirit Gorilla/Spirit Gorilla_Atlas", "Bear/Bear_Atlas", "Stag/Stag_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Atlas", "Gorilla/Gorilla_Atlas", "Cave Golem/Cave Golem_Atlas", "Draugr Zombie/Draugr Zombie_Atlas", "Draugr Skeleton/Draugr Skeleton_Atlas", "Frost Golem/Frost Golem_Atlas", "Frost Zombie/Frost Zombie_Atlas", "Frost Skeleton/Frost Skeleton_Atlas", "Draugr Knight/Draugr Knight_Atlas", "Draugr Huntress/Draugr Huntress_Atlas", "Magma Golem/Magma Golem_Atlas", "Draugr Warper/Draugr Warper_Atlas", "Frost Wraith/Frost Wraith_Atlas", "Draugr Reaver/Draugr Reaver_Atlas", "Stalker/Stalker_Atlas", "Crone/Crone_Atlas", "Iron Guardian/Iron Guardian_Atlas", "Gold Guardian/Gold Guardian_Atlas", "Diamond Guardian/Diamond Guardian_Atlas", "Moonstone Guardian/Moonstone Guardian_Atlas", "Tiki Terror/Tiki Terror_Atlas", "Player/Player_Atlas", "67/67_Atlas", "Bobino Musculino/Bobino Musculino_Atlas", "Capitano Explovissimo/Capitano Explovissimo_Atlas", "Desert Fennec/Desert Fennec_Atlas", "Armour Collector/Armour Collector_Atlas", "Furnace Knight/Furnace Knight_Atlas", "Lil Knight/Lil Knight_Atlas", "Glass Gremlin/Glass Gremlin_Atlas", "Glass Bro/Glass Bro_Atlas", "Lord Vulcan/Lord Vulcan_Atlas", "Zombie/Zombie_Atlas", "Skeleton/Skeleton_Atlas", "Mummy/Mummy_Atlas", "Scorpion/Scorpion_Atlas", "Vulcanite/Vulcanite_Atlas", "Evil Tome/Evil Tome_Atlas", "Magma Toad/Magma Toad_Atlas"];

    function By(yb) {
      const bb = oy[yb];
      return bb ? Wy(47138)(`./${bb}.png`) : null
    }
    const Ky = 2395,
      ey = ["Sheep/SheepWool_Atlas", "Horse/HorseSaddle_Atlas", "Camel/CamelSaddle_Atlas", "Deer/DeerAntlers_Atlas", "Wolf/WolfCollar_Atlas", "Wildcat/WildcatCollar_Atlas", "Spirit Wolf/Spirit WolfCollar_Atlas", "Spirit Bear/Spirit BearSaddle_Atlas", "Spirit Stag/Spirit StagSaddle_Atlas", "Spirit Gorilla/Spirit GorillaSaddle_Atlas", "Bear/BearSaddle_Atlas", "Stag/StagSaddle_Atlas", "Gold Watermelon Stag/Gold Watermelon Stag_Armour", "Gorilla/GorillaSaddle_Atlas"];

    function qb(yb) {
      const bb = ey[yb];
      return bb ? Wy(47138)(`./${bb}.png`) : null
    }
    const sy = ["none", "super", "super_inverted", "youtuber", "pig", "cow_normal", "cow_cream", "sheep", "creator_level1", "creator_level2", "creator_level3"];

    function Sy(yb) {
      const bb = sy[yb];
      return bb ? Wy(48856)(`./cape_${bb}.png`) : null
    }
    const Ey = ["Player_Atlas", "astro_set_1_attachable", "astro_set_2_attachable", "astro_set_3_attachable", "astro_set_4_attachable", "beaver_lumberjack", "bee_set_1_attachable", "bee_set_2_attachable", "bee_set_3_attachable_blue", "bee_set_3_attachable_green", "bee_set_3_attachable_red", "bee_set_4_attachable", "chef_attachables", "dwarf_blue_hair", "dwarf_braided_hair", "dwarf_child", "dwarf_forked_beard", "dwarf_ginger_beard", "dwarf_grey_beard", "dwarf_hair_buns", "dwarf_purple_beard", "dwarf_red_hair", "dwarf_short_beard", "farmer_gill_attachable", "farmer_head", "fire_mage_attachable", "forge_mother", "general_attachable", "goblin_goggles", "goblin_mad_scientist", "highSociety_set_1_attachable", "highSociety_set_2_attachable", "highSociety_set_3_attachable", "highSociety_set_4_attachable", "human_archer", "human_desert_guard", "human_sentry", "jackal_priest", "jetpack_attachable", "medieval_set_1_attachable_blue", "medieval_set_1_attachable_green", "medieval_set_1_attachable_purple", "medieval_set_1_attachable_red", "medieval_set_1_attachable_yellow", "medieval_set_2_attachable_blue", "medieval_set_2_attachable_purple", "medieval_set_2_attachable_red", "medieval_set_3_attachable_green", "medieval_set_3_attachable_pink", "medieval_set_3_attachable_purple", "medieval_set_3_attachable_red", "medieval_set_4_attachable_blue", "medieval_set_4_attachable_hair", "medieval_set_4_attachable_purple", "medieval_set_4_attachable_red", "mining_helmet_attachable", "minotaur", "minotaur_elder", "minotaur_warrior", "monster_hunter_lorenzo_attachable", "nova_jetpack_attachable", "npc_pig_head", "painter_spencer_attachable", "pig_napoleon", "pig_worker_attachable", "piggy_banker_head", "portal_mage_hat", "rabbit_aristocrat_attachable", "smuglyn_attachable", "spring_set_1_attachable", "spring_set_2_attachable", "spring_set_3_attachable", "spring_set_4_attachable", "tentacle_boy", "tentacle_girl_attachable", "tentacle_guy_attachable", "tentacle_guy_fisherman_attachable", "trader_cowl_black", "trader_cowl_blue", "wolf_in_suit_attachable", "wolf_security", "y2k_set_1_attachable", "y2k_set_2_attachable", "y2k_set_3_attachable", "y2k_set_4_attachable"];

    function ly(yb) {
      const bb = Ey[yb];
      return bb ? Wy(48859)(`./${bb}.png`) : null
    }
    const mb = [{
      name: "allium",
      url: () => Wy(48868)
    }, {
      name: "aspen_sapling",
      url: () => Wy(48877)
    }, {
      name: "attached_banana_stem",
      url: () => Wy(48879)
    }, {
      name: "attached_banana_stem_wrapper",
      url: () => Wy(48887)
    }, {
      name: "attached_melon_stem",
      url: () => Wy(48890)
    }, {
      name: "attached_melon_stem_wrapper",
      url: () => Wy(48894)
    }, {
      name: "autumn_fern",
      url: () => Wy(48896)
    }, {
      name: "azure_bluet",
      url: () => Wy(48898)
    }, {
      name: "banana_stem",
      url: () => Wy(48900)
    }, {
      name: "beetroot_plant_stage0",
      url: () => Wy(48906)
    }, {
      name: "beetroot_plant_stage1",
      url: () => Wy(48913)
    }, {
      name: "beetroot_plant_stage2",
      url: () => Wy(48917)
    }, {
      name: "berry_bush_stage0",
      url: () => Wy(48926)
    }, {
      name: "berry_bush_stage1",
      url: () => Wy(48935)
    }, {
      name: "berry_bush_stage2",
      url: () => Wy(48942)
    }, {
      name: "blue_orchid",
      url: () => Wy(48946)
    }, {
      name: "blueberry_bush_stage0",
      url: () => Wy(48950)
    }, {
      name: "blueberry_bush_stage1",
      url: () => Wy(48953)
    }, {
      name: "blueberry_bush_stage2",
      url: () => Wy(48959)
    }, {
      name: "brown_mushroom",
      url: () => Wy(48965)
    }, {
      name: "carrot_plant_stage0",
      url: () => Wy(48967)
    }, {
      name: "carrot_plant_stage1",
      url: () => Wy(48969)
    }, {
      name: "carrot_plant_stage2",
      url: () => Wy(48977)
    }, {
      name: "catnip",
      url: () => Wy(48982)
    }, {
      name: "cauliflower_plant_stage0",
      url: () => Wy(48987)
    }, {
      name: "cauliflower_plant_stage1",
      url: () => Wy(48994)
    }, {
      name: "cauliflower_plant_stage2",
      url: () => Wy(48999)
    }, {
      name: "cedar_sapling",
      url: () => Wy(49001)
    }, {
      name: "cherry_sapling",
      url: () => Wy(49003)
    }, {
      name: "cobweb",
      url: () => Wy(49011)
    }, {
      name: "coffee_plant_stage0",
      url: () => Wy(49014)
    }, {
      name: "coffee_plant_stage1",
      url: () => Wy(49019)
    }, {
      name: "coffee_plant_stage2",
      url: () => Wy(49021)
    }, {
      name: "corn_stage0",
      url: () => Wy(49027)
    }, {
      name: "corn_stage1",
      url: () => Wy(49031)
    }, {
      name: "corn_stage2",
      url: () => Wy(49040)
    }, {
      name: "corn_stage3",
      url: () => Wy(49048)
    }, {
      name: "corn_stage4",
      url: () => Wy(49057)
    }, {
      name: "corn_stage5",
      url: () => Wy(49061)
    }, {
      name: "cornflower",
      url: () => Wy(49068)
    }, {
      name: "cotton_plant_stage0",
      url: () => Wy(49074)
    }, {
      name: "cotton_plant_stage1",
      url: () => Wy(49082)
    }, {
      name: "cotton_plant_stage2",
      url: () => Wy(49085)
    }, {
      name: "cotton_plant_stage3",
      url: () => Wy(49093)
    }, {
      name: "dandelion",
      url: () => Wy(49096)
    }, {
      name: "dead_bush",
      url: () => Wy(49100)
    }, {
      name: "fallen_pine_cone",
      url: () => Wy(49109)
    }, {
      name: "jungle_sapling",
      url: () => Wy(49116)
    }, {
      name: "jungle_tall_grass_bottom",
      url: () => Wy(49119)
    }, {
      name: "jungle_tall_grass_top",
      url: () => Wy(49124)
    }, {
      name: "lettuce_plant_stage0",
      url: () => Wy(49128)
    }, {
      name: "lettuce_plant_stage1",
      url: () => Wy(49136)
    }, {
      name: "lettuce_plant_stage2",
      url: () => Wy(49139)
    }, {
      name: "lily_of_the_valley",
      url: () => Wy(49142)
    }, {
      name: "mango_sapling",
      url: () => Wy(49144)
    }, {
      name: "maple_sapling",
      url: () => Wy(49148)
    }, {
      name: "melon_stem",
      url: () => Wy(49157)
    }, {
      name: "net",
      url: () => Wy(49159)
    }, {
      name: "orange_tulip",
      url: () => Wy(49164)
    }, {
      name: "oxeye_daisy",
      url: () => Wy(49167)
    }, {
      name: "palm_sapling",
      url: () => Wy(49172)
    }, {
      name: "parsnip_plant_stage0",
      url: () => Wy(49180)
    }, {
      name: "parsnip_plant_stage1",
      url: () => Wy(49186)
    }, {
      name: "parsnip_plant_stage2",
      url: () => Wy(49194)
    }, {
      name: "pear_sapling",
      url: () => Wy(49198)
    }, {
      name: "pine_fern",
      url: () => Wy(49200)
    }, {
      name: "pine_grass",
      url: () => Wy(49207)
    }, {
      name: "pine_sapling",
      url: () => Wy(49210)
    }, {
      name: "pink_tulip",
      url: () => Wy(49215)
    }, {
      name: "plum_sapling",
      url: () => Wy(49218)
    }, {
      name: "poppy",
      url: () => Wy(49224)
    }, {
      name: "potato_plant_stage0",
      url: () => Wy(49229)
    }, {
      name: "potato_plant_stage1",
      url: () => Wy(49235)
    }, {
      name: "potato_plant_stage2",
      url: () => Wy(49242)
    }, {
      name: "red_cabbage_stage0",
      url: () => Wy(49246)
    }, {
      name: "red_cabbage_stage1",
      url: () => Wy(49251)
    }, {
      name: "red_cabbage_stage2",
      url: () => Wy(49255)
    }, {
      name: "red_mushroom",
      url: () => Wy(49259)
    }, {
      name: "red_tulip",
      url: () => Wy(49262)
    }, {
      name: "rice_stage0",
      url: () => Wy(49270)
    }, {
      name: "rice_stage2",
      url: () => Wy(49275)
    }, {
      name: "rice_stage3",
      url: () => Wy(49278)
    }, {
      name: "rice_stage4",
      url: () => Wy(49286)
    }, {
      name: "rice_stage5",
      url: () => Wy(49288)
    }, {
      name: "rice_stage6",
      url: () => Wy(49297)
    }, {
      name: "rice_stage7",
      url: () => Wy(49301)
    }, {
      name: "shadow_rose",
      url: () => Wy(49306)
    }, {
      name: "small_cactus",
      url: () => Wy(49310)
    }, {
      name: "spectral_grass",
      url: () => Wy(49315)
    }, {
      name: "spectral_sapling",
      url: () => Wy(49322)
    }, {
      name: "strawberry_bush_stage0",
      url: () => Wy(49330)
    }, {
      name: "strawberry_bush_stage1",
      url: () => Wy(49338)
    }, {
      name: "strawberry_bush_stage2",
      url: () => Wy(49340)
    }, {
      name: "sugar_cane_plant_stage0",
      url: () => Wy(49347)
    }, {
      name: "sugar_cane_plant_stage1",
      url: () => Wy(49352)
    }, {
      name: "sugar_cane_plant_stage2",
      url: () => Wy(49361)
    }, {
      name: "sugar_cane_plant_stage2_top",
      url: () => Wy(49367)
    }, {
      name: "tall_grass_bottom",
      url: () => Wy(49374)
    }, {
      name: "tall_grass_top",
      url: () => Wy(49377)
    }, {
      name: "tallgrass",
      url: () => Wy(49380)
    }, {
      name: "tomato_plant_stage0",
      url: () => Wy(49386)
    }, {
      name: "tomato_plant_stage1",
      url: () => Wy(49393)
    }, {
      name: "tomato_plant_stage2",
      url: () => Wy(49399)
    }, {
      name: "tomato_plant_stage2_top",
      url: () => Wy(49405)
    }, {
      name: "wheat_stage0",
      url: () => Wy(49412)
    }, {
      name: "wheat_stage2",
      url: () => Wy(49416)
    }, {
      name: "wheat_stage3",
      url: () => Wy(49423)
    }, {
      name: "wheat_stage4",
      url: () => Wy(49425)
    }, {
      name: "wheat_stage5",
      url: () => Wy(49428)
    }, {
      name: "wheat_stage6",
      url: () => Wy(49430)
    }, {
      name: "wheat_stage7",
      url: () => Wy(49438)
    }, {
      name: "white_tulip",
      url: () => Wy(49445)
    }, {
      name: "coolant_mixer_top",
      url: () => Wy(49450)
    }, {
      name: "smelter_top",
      url: () => Wy(49453)
    }, {
      name: "yellow_glazed_terracotta",
      url: () => Wy(49455)
    }, {
      name: "shop_wizard_spawn_top",
      url: () => Wy(49459)
    }, {
      name: "light_blue_spawn_block_top",
      url: () => Wy(49467)
    }, {
      name: "torch_blue_block",
      url: () => Wy(49474)
    }, {
      name: "destroy_stage_5",
      url: () => Wy(49480)
    }, {
      name: "destroy_stage_4",
      url: () => Wy(49483)
    }, {
      name: "auto_bench_top",
      url: () => Wy(49488)
    }, {
      name: "destroy_stage_7",
      url: () => Wy(49493)
    }, {
      name: "destroy_stage_6",
      url: () => Wy(49501)
    }, {
      name: "shop_trader_spawn_top",
      url: () => Wy(49507)
    }, {
      name: "cobblestone_mossy",
      url: () => Wy(49514)
    }, {
      name: "checkpoint_block",
      url: () => Wy(49521)
    }, {
      name: "destroy_stage_1",
      url: () => Wy(49528)
    }, {
      name: "destroy_stage_0",
      url: () => Wy(49537)
    }, {
      name: "destroy_stage_3",
      url: () => Wy(49546)
    }, {
      name: "destroy_stage_2",
      url: () => Wy(49553)
    }, {
      name: "centrifuge_top",
      url: () => Wy(49557)
    }, {
      name: "destroy_stage_9",
      url: () => Wy(49559)
    }, {
      name: "destroy_stage_8",
      url: () => Wy(49567)
    }, {
      name: "mango_door_bottom",
      url: () => Wy(49570)
    }, {
      name: "moonstone_chest_top",
      url: () => Wy(49579)
    }, {
      name: "lime_glazed_terracotta",
      url: () => Wy(49583)
    }, {
      name: "burner_drill_top",
      url: () => Wy(49585)
    }, {
      name: "light_gray_spawn_block_top",
      url: () => Wy(49594)
    }, {
      name: "football_block",
      url: () => Wy(49598)
    }, {
      name: "purple_spawn_block_top",
      url: () => Wy(49603)
    }, {
      name: "black_stained_glass",
      url: () => Wy(49609)
    }, {
      name: "pear_door_bottom",
      url: () => Wy(49616)
    }, {
      name: "custom_lobby_block_top",
      url: () => Wy(49618)
    }, {
      name: "maple_door_bottom",
      url: () => Wy(49624)
    }, {
      name: "crusher_top",
      url: () => Wy(49626)
    }, {
      name: "torch_orange_block",
      url: () => Wy(49628)
    }, {
      name: "wireless_terminal_top",
      url: () => Wy(49634)
    }, {
      name: "recycler_top",
      url: () => Wy(49640)
    }, {
      name: "condenser_top",
      url: () => Wy(49644)
    }, {
      name: "light_blue_glazed_terracotta",
      url: () => Wy(49647)
    }, {
      name: "electric_drill_top",
      url: () => Wy(49655)
    }, {
      name: "brown_glazed_terracotta",
      url: () => Wy(49662)
    }, {
      name: "green_glazed_terracotta",
      url: () => Wy(49669)
    }, {
      name: "cactus_side",
      url: () => Wy(49676)
    }, {
      name: "water",
      url: () => Wy(49682)
    }, {
      name: "gray_glazed_terracotta",
      url: () => Wy(49691)
    }, {
      name: "jungle_door_bottom",
      url: () => Wy(49698)
    }, {
      name: "plum_door_top",
      url: () => Wy(49707)
    }, {
      name: "red_glazed_terracotta",
      url: () => Wy(49714)
    }, {
      name: "orange_spawn_block_top",
      url: () => Wy(49722)
    }, {
      name: "belt_tunnel_top",
      url: () => Wy(49731)
    }, {
      name: "palm_door_bottom",
      url: () => Wy(49734)
    }, {
      name: "maple_door_top",
      url: () => Wy(49737)
    }, {
      name: "iron_chest_bottom",
      url: () => Wy(49740)
    }, {
      name: "wool_colored_silver",
      url: () => Wy(49744)
    }, {
      name: "moonstone_chest_bottom",
      url: () => Wy(49747)
    }, {
      name: "sky_tap_top",
      url: () => Wy(49753)
    }, {
      name: "palm_door_top",
      url: () => Wy(49759)
    }, {
      name: "torch_red_block",
      url: () => Wy(49765)
    }, {
      name: "rice_stage1",
      url: () => Wy(49771)
    }, {
      name: "shatter_mill_top",
      url: () => Wy(49780)
    }, {
      name: "white_spawn_block_top",
      url: () => Wy(49784)
    }, {
      name: "pink_spawn_block_top",
      url: () => Wy(49793)
    }, {
      name: "orange_glazed_terracotta",
      url: () => Wy(49796)
    }, {
      name: "lime_spawn_block_top",
      url: () => Wy(49805)
    }, {
      name: "jungle_door_top",
      url: () => Wy(49808)
    }, {
      name: "wheat_stage1",
      url: () => Wy(49816)
    }, {
      name: "alloy_kiln_top",
      url: () => Wy(49820)
    }, {
      name: "light_gray_stained_glass",
      url: () => Wy(49828)
    }, {
      name: "cherry_door_bottom",
      url: () => Wy(49836)
    }, {
      name: "gray_spawn_block_top",
      url: () => Wy(49845)
    }, {
      name: "brown_spawn_block_top",
      url: () => Wy(49853)
    }, {
      name: "mango_door_top",
      url: () => Wy(49855)
    }, {
      name: "pine_door_top",
      url: () => Wy(49858)
    }, {
      name: "cherry_door_top",
      url: () => Wy(49867)
    }, {
      name: "pine_door_bottom",
      url: () => Wy(49872)
    }, {
      name: "press_top",
      url: () => Wy(49874)
    }, {
      name: "pink_glazed_terracotta",
      url: () => Wy(49877)
    }, {
      name: "purple_glazed_terracotta",
      url: () => Wy(49884)
    }, {
      name: "crop_harvester_top",
      url: () => Wy(49887)
    }, {
      name: "collider_top",
      url: () => Wy(49895)
    }, {
      name: "aspen_door_top",
      url: () => Wy(49902)
    }, {
      name: "banana_block_bottom",
      url: () => Wy(49910)
    }, {
      name: "crystal_vat_top",
      url: () => Wy(49912)
    }, {
      name: "iron_chest_top",
      url: () => Wy(49918)
    }, {
      name: "chest_top",
      url: () => Wy(49922)
    }, {
      name: "wire_mill_top",
      url: () => Wy(49925)
    }, {
      name: "tree_cutter_top",
      url: () => Wy(49931)
    }, {
      name: "cedar_door_top",
      url: () => Wy(49940)
    }, {
      name: "black_spawn_block_top",
      url: () => Wy(49947)
    }, {
      name: "camel_painting_art",
      url: () => Wy(49954)
    }, {
      name: "pear_door_top",
      url: () => Wy(49961)
    }, {
      name: "blue_spawn_block_top",
      url: () => Wy(49965)
    }, {
      name: "magenta_glazed_terracotta",
      url: () => Wy(49970)
    }, {
      name: "radar_screen0",
      url: () => Wy(49973)
    }, {
      name: "radar_screen1",
      url: () => Wy(49977)
    }, {
      name: "radar_screen2",
      url: () => Wy(49982)
    }, {
      name: "radar_screen3",
      url: () => Wy(49989)
    }, {
      name: "light_gray_glazed_terracotta",
      url: () => Wy(49994)
    }, {
      name: "yellow_spawn_block_top",
      url: () => Wy(49996)
    }, {
      name: "belt_tunnel_exit_top",
      url: () => Wy(50004)
    }, {
      name: "green_spawn_block_top",
      url: () => Wy(50012)
    }, {
      name: "aspen_door_bottom",
      url: () => Wy(50018)
    }, {
      name: "spectral_door_bottom",
      url: () => Wy(50025)
    }, {
      name: "magenta_spawn_block_top",
      url: () => Wy(50029)
    }, {
      name: "plum_door_bottom",
      url: () => Wy(50031)
    }, {
      name: "camel_painting_art_option2",
      url: () => Wy(50035)
    }, {
      name: "deep_drill_top",
      url: () => Wy(50043)
    }, {
      name: "spectral_door_top",
      url: () => Wy(50048)
    }, {
      name: "cyan_spawn_block_top",
      url: () => Wy(50057)
    }, {
      name: "plant_cacti_by_arthur",
      url: () => Wy(50066)
    }, {
      name: "torch_block",
      url: () => Wy(50071)
    }, {
      name: "board_full",
      url: () => Wy(50077)
    }, {
      name: "sea_lantern",
      url: () => Wy(50080)
    }, {
      name: "black_glazed_terracotta",
      url: () => Wy(50084)
    }, {
      name: "white_glazed_terracotta",
      url: () => Wy(50087)
    }, {
      name: "torch_cyan_block",
      url: () => Wy(50091)
    }, {
      name: "blue_glazed_terracotta",
      url: () => Wy(50095)
    }, {
      name: "synthesizer_top",
      url: () => Wy(50102)
    }, {
      name: "torch_green_block",
      url: () => Wy(50109)
    }, {
      name: "lily_pad",
      url: () => Wy(50115)
    }, {
      name: "cyan_glazed_terracotta",
      url: () => Wy(50118)
    }, {
      name: "torch_purple_block",
      url: () => Wy(50126)
    }, {
      name: "mob_farm_top",
      url: () => Wy(50135)
    }, {
      name: "red_spawn_block_top",
      url: () => Wy(50142)
    }, {
      name: "cedar_door_bottom",
      url: () => Wy(50147)
    }, {
      name: null,
      url: () => Wy(50149)
    }];

    function Cy(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = mb[yb]) || void 0 === Wy ? void 0 : Wy.url()) && void 0 !== bb ? bb : null
    }

    function Ty(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = mb[yb]) || void 0 === Wy ? void 0 : Wy.name) && void 0 !== bb ? bb : null
    }
    const Vy = ["arrow", "bubble", "critical_hit", "drift", "effect_5", "fishingFishSilhouette", "generic_2", "glint", "heart", "scary_face", "soul_0", "square_particle", "z-particle"];

    function Jy(yb) {
      const bb = Vy[yb];
      return bb ? Wy(50153)(`./${bb}.png`) : null
    }
  },
  47144: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/67_Atlas.78772019d3c23af4fde0.png"
  },
  46381: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/67_Model.20ac6746b6d4e9cdc5ac.glb"
  },
  46385: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/67_Reconstructed.aa1c6cd0195ad55052d4.glb"
  },
  47148: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_67_default.78772019d3c23af4fde0.png"
  },
  47155: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Armour Collector_Atlas.68016f01aaaf41a99294.png"
  },
  46393: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Armour Collector_Model.4e44fc9a2bfa0d1fa9ae.glb"
  },
  46400: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Armour Collector_Reconstructed.68bd2827e682b9ef1c5c.glb"
  },
  47163: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_armour collector_default.68016f01aaaf41a99294.png"
  },
  47171: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/BearSaddle_Atlas.15264b4186b61b368f48.png"
  },
  47175: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bear_Atlas.16ed4e893fa8557fb3c8.png"
  },
  46406: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bear_Model.9d563e0d9870f3bee11e.glb"
  },
  47184: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_bear_default.16ed4e893fa8557fb3c8.png"
  },
  47187: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bobino Musculino_Atlas.41bc4861928518f5e973.png"
  },
  46409: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bobino Musculino_Model.d80ca8def7ee3e59c8c4.glb"
  },
  46415: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bobino Musculino_Reconstructed.e5775589151b43e015a3.glb"
  },
  47195: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_bobino musculino_default.41bc4861928518f5e973.png"
  },
  47199: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/CamelSaddle_Atlas.04251d42e0e6b08cd54b.png"
  },
  47205: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Camel_Armour.84f02f272f4930d10edf.png"
  },
  47209: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Camel_Atlas.4c87e02cadf2be1f7039.png"
  },
  46419: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Camel_Model.bc44d3ea4bbddbd34ff8.glb"
  },
  47216: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_camel_default.3b9bf815a1e7e67b9c5b.png"
  },
  47223: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_camel_brown.4fb5c5b6c32bdc8441f7.png"
  },
  47226: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Capitano Explovissimo_Atlas.238f070a1cb621f89233.png"
  },
  46421: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Capitano Explovissimo_Model.987934107c32050a0f8f.glb"
  },
  46424: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Capitano Explovissimo_Reconstructed.34c7194ad537f91fb770.glb"
  },
  47231: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_capitano explovissimo_default.238f070a1cb621f89233.png"
  },
  47233: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cave Golem_Atlas.43057255fbcd8cf0e376.png"
  },
  46426: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cave Golem_Model.fcb854951ae2d8348159.glb"
  },
  47242: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_cave golem_default.fe29c2466a335ce428b7.png"
  },
  47245: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_cave golem_iron.f15813c3f4b357c1c3ad.png"
  },
  47254: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_cave golem_corrupted.45ddac891a25ba285060.png"
  },
  47256: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cow_Atlas.646efb734e50a01d474a.png"
  },
  46432: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cow_Model.a114439e2ddef7ddc8e6.glb"
  },
  47260: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_cow_default.e8db5e9466d81322284b.png"
  },
  47269: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_cow_cream.15ffb0b24f4058ffe0d8.png"
  },
  47274: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Crone_Atlas.2c1819debbc39c551df9.png"
  },
  46440: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Crone_Model.07672f43fa6684aacf0d.glb"
  },
  47283: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_crone_default.629dfdec640e437c8c58.png"
  },
  47291: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/DeerAntlers_Atlas.317f1c4b7f16d8af24eb.png"
  },
  47296: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Deer_Atlas.8c8d020eac0964ca3613.png"
  },
  46445: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Deer_Model.4c98ba2161f6516f336d.glb"
  },
  47305: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_deer_default.8c8d020eac0964ca3613.png"
  },
  47308: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Desert Fennec_Atlas.5cc3a10a2d205413b221.png"
  },
  46452: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Desert Fennec_Model.b6af0de0386cdadd4aaa.glb"
  },
  47313: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_desert fennec_default.5cc3a10a2d205413b221.png"
  },
  47319: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Goofy Golem_Atlas.9f539ed92e7a18179ccc.png"
  },
  47328: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_diamond goofy golem_default.ad6acdd2ec3df5dc3c58.png"
  },
  47334: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_diamond goofy golem_flaking.bf96dafe607ba2c1989f.png"
  },
  47336: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_diamond goofy golem_patchy.990dd71826e102069a65.png"
  },
  47345: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_diamond goofy golem_shedding.494b42755accc9f4d3c8.png"
  },
  47348: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_diamond goofy golem_bare.03408815673f9c107ca9.png"
  },
  47357: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_diamond goofy golem_stone.83de462a7be9aae11337.png"
  },
  47364: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Guardian_Atlas.cb75d23bfd8385a5fb1b.png"
  },
  46461: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  46465: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  47371: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_diamond guardian_default.cb75d23bfd8385a5fb1b.png"
  },
  47373: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Huntress_Atlas.19e9ae6b50525bbf7989.png"
  },
  47375: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr huntress_default.42d87f08d4f4e8c2e48c.png"
  },
  47379: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_draugr huntress_chainmail.f16e63013ccf629b7eac.png"
  },
  47384: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Knight_Atlas.53367bcdaf4237c2c5eb.png"
  },
  46474: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Knight_Model.9eca91f878818eb243b7.glb"
  },
  47389: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr knight_default.53367bcdaf4237c2c5eb.png"
  },
  47398: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Reaver_Atlas.d059dc5ea7e11b0d6226.png"
  },
  46479: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Reaver_Model.b238f5542ebc8a6f790d.glb"
  },
  47402: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr reaver_default.d059dc5ea7e11b0d6226.png"
  },
  47408: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Skeleton_Atlas.ad55be7f308296fa0710.png"
  },
  46481: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Skeleton_Model.ea29dd4b4906e922dbc5.glb"
  },
  47414: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr skeleton_default.ad55be7f308296fa0710.png"
  },
  47416: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Warper_Atlas.2f0f8036bfafcda6ac8c.png"
  },
  46484: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Warper_Model.957031cd0be6a379a31e.glb"
  },
  47424: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr warper_default.2f0f8036bfafcda6ac8c.png"
  },
  47426: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Zombie_Atlas.d26d8b763d5430e29e22.png"
  },
  46487: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Zombie_Model.f3182b807f523b9f5cfc.glb"
  },
  47428: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_draugr zombie_default.a81024e6c9b71d39dc2b.png"
  },
  47431: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/10_draugr zombie_corrupted2.705d686f424354e6f53e.png"
  },
  47433: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_draugr zombie_longHairChestplate.7d99ad0435907496ded0.png"
  },
  47442: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_draugr zombie_longHairClothed.3e4331b33e866be77414.png"
  },
  47451: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_draugr zombie_shortHairClothed.608a2b0d8c412badf03f.png"
  },
  47455: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_draugr zombie_flower.0943cbd0f6aeb07fb7c4.png"
  },
  47461: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_draugr zombie_flower2.1905b274fd6714a68073.png"
  },
  47470: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/6_draugr zombie_mushroom.2e6fd854bb40cbb60921.png"
  },
  47473: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/7_draugr zombie_vine.097f85f6ef3e92e8c2d2.png"
  },
  47482: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/8_draugr zombie_vine2.2a870c768fb2eaf1d64b.png"
  },
  47485: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/9_draugr zombie_corrupted.0c3ba982e223bfd2a399.png"
  },
  47489: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Evil Tome_Atlas.ebb1d7344941d169e61f.png"
  },
  46493: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Evil Tome_Model.dac8f598cd75429bd88f.glb"
  },
  47493: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_evil tome_default.ebb1d7344941d169e61f.png"
  },
  47498: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frost Golem_Atlas.f219ae0b8effd2d3288c.png"
  },
  47505: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_frost golem_default.f219ae0b8effd2d3288c.png"
  },
  47511: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frost Skeleton_Atlas.fdab98e8d8fa9e1606a7.png"
  },
  47516: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_frost skeleton_default.fdab98e8d8fa9e1606a7.png"
  },
  47522: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frost Wraith_Atlas.9b40421e56202862e000.png"
  },
  46501: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frost Wraith_Model.6a1df7eca8f7944cfa85.glb"
  },
  47525: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_frost wraith_default.1c2c4171f3ff80b1c59c.png"
  },
  47529: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_frost wraith_tattered.0f7d7bed74631a89045d.png"
  },
  47535: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_frost wraith_frostKing.42a658129c295fa5ba8a.png"
  },
  47538: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_frost wraith_accursed.5efdb1d1f3bc60504721.png"
  },
  47541: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frost Zombie_Atlas.856fb434ac2c8cfac7ad.png"
  },
  47545: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_frost zombie_default.066e31eee2646fd422ce.png"
  },
  47551: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_frost zombie_longHairChestplate.520e0eb2c0a936e2a8e1.png"
  },
  47558: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_frost zombie_shortHairClothed.59528239298a4262f7f4.png"
  },
  47565: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Furnace Knight_Atlas.2659e8e76ccf1355bbe5.png"
  },
  46510: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Furnace Knight_Model.a82b173e727cd9bbf9d3.glb"
  },
  46519: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Furnace Knight_Reconstructed.73693171d4617dfc8e41.glb"
  },
  47571: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_furnace knight_default.2659e8e76ccf1355bbe5.png"
  },
  47578: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Bro_Atlas.fc3f69fac528331ca24e.png"
  },
  46526: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Bro_Model.c70809eb925034975d92.glb"
  },
  46535: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Bro_Reconstructed.ee280e4747c632e2a510.glb"
  },
  47583: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_glass bro_default.fc3f69fac528331ca24e.png"
  },
  47589: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Gremlin_Atlas.e22dbc21c33ea76e178c.png"
  },
  46542: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Gremlin_Model.880227f604677d4abba9.glb"
  },
  46544: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glass Gremlin_Reconstructed.4371333950829717aded.glb"
  },
  47597: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_glass gremlin_default.e22dbc21c33ea76e178c.png"
  },
  47605: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Goofy Golem_Atlas.15f38107836cebc75f69.png"
  },
  47608: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_gold goofy golem_default.4dabfa0399071406e2a2.png"
  },
  47617: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_gold goofy golem_flaking.eee4a22f79e9daa46d2a.png"
  },
  47623: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_gold goofy golem_patchy.746312a9826e176eb60e.png"
  },
  47631: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_gold goofy golem_shedding.648f3630984058f9c50e.png"
  },
  47636: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_gold goofy golem_bare.70636c8a87acccd75213.png"
  },
  47639: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_gold goofy golem_stone.5c03eb9f31dbbcd01b9b.png"
  },
  47646: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Guardian_Atlas.838ff51de0dd81a5f1ef.png"
  },
  46553: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Guardian_Model.890ecfcf2fc8d402086c.glb"
  },
  46559: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Guardian_Reconstructed.5bb360f7978bb121bb05.glb"
  },
  47649: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_gold guardian_default.838ff51de0dd81a5f1ef.png"
  },
  47652: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Watermelon Stag_Armour.972be4eb24f55108c5e8.png"
  },
  47660: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Watermelon Stag_Atlas.d97b04a85f87e7e507a4.png"
  },
  47663: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_gold watermelon stag_default.d97b04a85f87e7e507a4.png"
  },
  47666: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/GorillaSaddle_Atlas.b80dc520cd3f21340853.png"
  },
  47671: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gorilla_Atlas.8180581c438425b957c7.png"
  },
  46566: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gorilla_Model.da3aa249b0fcc54c7659.glb"
  },
  47675: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_gorilla_default.8180581c438425b957c7.png"
  },
  47681: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/HorseSaddle_Atlas.28811fb81cc9c552df26.png"
  },
  47685: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Horse_Atlas.35d93b681a8f7834e697.png"
  },
  46573: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Horse_Model.800a7268d235df849b7e.glb"
  },
  47690: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_horse_default.da58b615663faac34f1d.png"
  },
  47698: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_horse_black.4dbfd341ba74e805cd0e.png"
  },
  47703: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_horse_brown.ad46016bb913f83d93b3.png"
  },
  47708: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_horse_cream.d324148443d0eabfaf65.png"
  },
  47711: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Golem_Atlas.f15813c3f4b357c1c3ad.png"
  },
  47715: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_iron golem_default.f15813c3f4b357c1c3ad.png"
  },
  47718: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Goofy Golem_Atlas.1a48754dc0b64a8b7b05.png"
  },
  46580: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Goofy Golem_Model.9bb7fcaceb73b4a3b23d.glb"
  },
  47724: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_iron goofy golem_default.0c95620234f27798cfe9.png"
  },
  47726: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_iron goofy golem_flaking.73f858cdb6d36fa13320.png"
  },
  47735: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_iron goofy golem_patchy.f0d3039d44a0b2b2f59e.png"
  },
  47743: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_iron goofy golem_shedding.25ee174e06680e7280d1.png"
  },
  47752: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_iron goofy golem_bare.44ae0955ff00562ecdf6.png"
  },
  47759: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_iron goofy golem_stone.25c52e79c4d759bf9f8c.png"
  },
  47761: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Guardian_Atlas.d6a6fbc0fa3210a990c1.png"
  },
  46589: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  46593: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  47770: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_iron guardian_default.d6a6fbc0fa3210a990c1.png"
  },
  47774: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lil Knight_Atlas.cc0d9a1740f90db8827b.png"
  },
  46596: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lil Knight_Model.ed4a69ab8ec5e3c1111a.glb"
  },
  46602: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lil Knight_Reconstructed.f2857d2d6008814e75ef.glb"
  },
  47777: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_lil knight_default.cc0d9a1740f90db8827b.png"
  },
  47783: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lord Vulcan_Atlas.7cce3638220330c1d017.png"
  },
  46607: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lord Vulcan_Model.df0082926bbac281e4aa.glb"
  },
  46615: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lord Vulcan_Reconstructed.277b77204fcb3af7d078.glb"
  },
  47787: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_lord vulcan_default.7cce3638220330c1d017.png"
  },
  47793: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magma Golem_Atlas.c048f8347bba1eff276d.png"
  },
  47801: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_magma golem_default.c048f8347bba1eff276d.png"
  },
  47805: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magma Toad_Atlas.a8b9db6b01f4542e1467.png"
  },
  46620: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magma Toad_Model.26aea2fe0368bdbd9799.glb"
  },
  47813: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_magma toad_default.a8b9db6b01f4542e1467.png"
  },
  47821: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Moonstone Goofy Golem_Atlas.4caa2a72116784d73adb.png"
  },
  47825: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_moonstone goofy golem_default.b58fbd04c36c1bfc9720.png"
  },
  47830: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_moonstone goofy golem_flaking.e3cb7373d477e5b8aaa6.png"
  },
  47839: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_moonstone goofy golem_patchy.be6e50c29d06462f66cd.png"
  },
  47848: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_moonstone goofy golem_shedding.8ac0d58b2f3f0c7eca1b.png"
  },
  47856: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_moonstone goofy golem_bare.7b70a71811495f107613.png"
  },
  47859: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_moonstone goofy golem_stone.fb472f3c494b13ee5178.png"
  },
  47868: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Moonstone Guardian_Atlas.5fe5c9f714e9d9b65847.png"
  },
  46628: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Moonstone Guardian_Model.3b40c1ebbed8219774c1.glb"
  },
  46633: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Moonstone Guardian_Reconstructed.b1254529f4c32dcdcf1f.glb"
  },
  47877: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_moonstone guardian_default.5fe5c9f714e9d9b65847.png"
  },
  47885: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mummy_Atlas.45b5369d53fdb99bed26.png"
  },
  46642: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mummy_Model.729c1fe6a9048e506b28.glb"
  },
  46649: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mummy_Reconstructed.b748762209f6006c725f.glb"
  },
  47887: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_mummy_default.45b5369d53fdb99bed26.png"
  },
  47890: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pig_Atlas.74d3b179a1bc6a57f8bc.png"
  },
  46657: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pig_Model.03480eac04a4a2032b5c.glb"
  },
  47893: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_pig_default.bc1d32464daad4bbd8c6.png"
  },
  47900: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Player_Atlas.c449f71e0a2c59975d75.png"
  },
  46661: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Player_Model.48f382200795c9a6c7ef.glb"
  },
  46666: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Player_Reconstructed.e6c661d420c9b3c44d7e.glb"
  },
  46669: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_1_attachable.d16565a5182dd7030194.glb"
  },
  47906: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_1_attachable.c29f3253de97a5d410e6.png"
  },
  46673: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_2_attachable.f0e34ecfb3014bd479c4.glb"
  },
  47910: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_2_attachable.33f79a0dadad296b3a8d.png"
  },
  46681: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_3_attachable.bfa6b8c045c68ab1dc2c.glb"
  },
  47915: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_3_attachable.e971da0681c2efb5a036.png"
  },
  46686: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_4_attachable.df04c70688993ca6696d.glb"
  },
  47921: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/astro_set_4_attachable.faaa391af980dff2f0c1.png"
  },
  46695: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beaver_lumberjack.63d398cb151a061dc9df.glb"
  },
  47925: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beaver_lumberjack.0b50b931c29405d9f653.png"
  },
  46702: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_1_attachable.ece755608efba3a186a1.glb"
  },
  47931: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_1_attachable.42914edf1e5e83bf4830.png"
  },
  46706: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_2_attachable.5db496fb3bac88bf1355.glb"
  },
  47938: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_2_attachable.8d0a8c8e021cd1819d10.png"
  },
  46712: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_3_attachable.abec6a2dcb273d964508.glb"
  },
  47940: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_3_attachable_blue.b57902234fc8bace8bdf.png"
  },
  47943: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_3_attachable_green.01fc83380655c9a144f0.png"
  },
  47951: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_3_attachable_red.b3479efa71463dc4ea9e.png"
  },
  46719: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_4_attachable.d5a09bbb6b67e8f282c6.glb"
  },
  47954: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bee_set_4_attachable.1964af9414b984f51d0c.png"
  },
  47956: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_cow_cream.93a3a63c37c297f2bc91.png"
  },
  47961: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_cow_normal.25284b2ee8a034f2207f.png"
  },
  47967: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_creator_level1.4f2f4d6e566890226158.png"
  },
  47972: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_creator_level2.d2f2f0fe19ce7129d8f2.png"
  },
  47979: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_creator_level3.b45b0cbe3153579501ee.png"
  },
  47986: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_none.1feb6c810316e0bbf6f7.png"
  },
  47991: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_pig.fa3ba0599d1283fabcf5.png"
  },
  47999: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_sheep.ab31bf50b51b156fa9b9.png"
  },
  48002: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_super.5e15d30dd75205e380c5.png"
  },
  48008: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_super_inverted.1e048a212b55b4714c30.png"
  },
  48014: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_youtuber.38ac1d5daab9704990be.png"
  },
  46724: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cape_cuboid_18_12.a21468079980c1c366dc.glb"
  },
  46729: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chef_attachables.b8355e8da34089d9a4ee.glb"
  },
  48022: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chef_attachables.e3933ee0a7facb63f8fc.png"
  },
  46731: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_blue_hair.fd9f446dd191be8421a1.glb"
  },
  48024: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_blue_hair.ac564bea50bbc19fbebc.png"
  },
  46740: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_braided_hair.5a099561e41c020156e6.glb"
  },
  48033: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_braided_hair.0cdf6e99e7d313900600.png"
  },
  46744: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_child.6a2eabe0e42a60b60f5d.glb"
  },
  48041: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_child.dd7bd7d791417c7cd76c.png"
  },
  46750: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_forked_beard.8b1921850ee39af61714.glb"
  },
  48048: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_forked_beard.e97aa85a569956654b66.png"
  },
  46755: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_ginger_beard.5281703e8404e83277a1.glb"
  },
  48052: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_ginger_beard.b381303da9453a64b9de.png"
  },
  46761: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_grey_beard.9a405ffacf45697cd862.glb"
  },
  48060: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_grey_beard.d478545c0ac1733f45ac.png"
  },
  46767: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_hair_buns.0689c8a36757fb228d12.glb"
  },
  48068: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_hair_buns.99cf87cba931cf1c82e1.png"
  },
  46772: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_purple_beard.3706e283af7db90ec6dd.glb"
  },
  48077: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_purple_beard.793d3f821147dab24317.png"
  },
  46779: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_red_hair.a600a969ac7275b21114.glb"
  },
  48085: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_red_hair.d0ba03ae7bdf8067f0ed.png"
  },
  46783: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_short_beard.46c3074282aeda011332.glb"
  },
  48092: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dwarf_short_beard.d488c7bf3b0d3640e5a5.png"
  },
  46787: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/farmer_gill_attachable.06e7a7d5bf95685e2af0.glb"
  },
  48094: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/farmer_gill_attachable.4d1c24944e6418389add.png"
  },
  46792: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/farmer_head.75ea18bc1214e93645c3.glb"
  },
  48103: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/farmer_head.6cc73aa5e23195da2780.png"
  },
  46800: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fire_mage_attachable.c5706ee8194a4de2efdf.glb"
  },
  48111: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fire_mage_attachable.c00bd47444c227739ada.png"
  },
  46804: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/forge_mother.7e1cc3526d433035776b.glb"
  },
  48114: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/forge_mother.842e0c3edd3f5f257414.png"
  },
  46813: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/general_attachable.b185778b184ac5479a66.glb"
  },
  48118: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/general_attachable.76d5533363f2f0d2d1fe.png"
  },
  46822: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/goblin_goggles.d9336ff2e39a9a10e8a5.glb"
  },
  48123: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/goblin_goggles.d3b588fdb35828bf3c36.png"
  },
  46830: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/goblin_mad_scientist.818218843d6c7d315844.glb"
  },
  48131: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/goblin_mad_scientist.db8bc56b97c1030308b5.png"
  },
  46838: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_1_attachable.4e75dd863043ffc20054.glb"
  },
  48136: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_1_attachable.dfa0d411fd84a3a30db8.png"
  },
  46841: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_2_attachable.9e040149e440b75fd2e1.glb"
  },
  48144: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_2_attachable.fba9f96171a9c6ca479e.png"
  },
  46843: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_3_attachable.922d09d1c02edf5da758.glb"
  },
  48150: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_3_attachable.e33e3ed55f37517a00cd.png"
  },
  46845: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_4_attachable.2a5b5342b8f2cfe71704.glb"
  },
  48155: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/highSociety_set_4_attachable.8e013771e0294e6b36ba.png"
  },
  46847: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_archer.4b0c4ab004d9572520ed.glb"
  },
  48162: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_archer.5622fa34756f0ddeb1f9.png"
  },
  46849: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_desert_guard.c9ce94394c5ad789a8b2.glb"
  },
  48167: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_desert_guard.259b2a31cd3d5d1def25.png"
  },
  46858: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_sentry.fd88756ed28102c038be.glb"
  },
  48173: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/human_sentry.702ac5cab41564ab3731.png"
  },
  46867: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jackal_priest.ea22761085c155dcfe9f.glb"
  },
  48176: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jackal_priest.48e88aa29dff4d501a0e.png"
  },
  46876: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jetpack_attachable.c63c098a3263d0b50836.glb"
  },
  48182: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jetpack_attachable.6d2bbf43846155c5bb2e.png"
  },
  46878: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable.d17e8a471caba220b2e5.glb"
  },
  48187: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable_blue.2f686b41d85c4d6bce33.png"
  },
  48194: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable_green.031f784da6ee987953ec.png"
  },
  48202: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable_purple.3f3a83dbf8e636cfcb60.png"
  },
  48211: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable_red.db6c293bd5850be96067.png"
  },
  48220: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_1_attachable_yellow.974529f01d0df1037343.png"
  },
  46886: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_2_attachable.08d52394d5b33cef5026.glb"
  },
  48227: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_2_attachable_blue.0dbd4893b4968b5c9c31.png"
  },
  48229: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_2_attachable_purple.3863d87764c18546382d.png"
  },
  48234: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_2_attachable_red.c7bddc3b4f6e52aa53a7.png"
  },
  46891: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_3_attachable.c1a9c068d6cd6aab4e44.glb"
  },
  48238: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_3_attachable_green.0f0b15840a127c4a441a.png"
  },
  48247: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_3_attachable_pink.5ba032639c97df45bca6.png"
  },
  48250: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_3_attachable_purple.2a71c7e895959106b552.png"
  },
  48256: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_3_attachable_red.9d5625925242d63571e8.png"
  },
  46895: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_4_attachable.4f13575f674de49d01d9.glb"
  },
  48264: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_4_attachable_blue.66da560b557ef43ab0be.png"
  },
  48266: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_4_attachable_hair.7cd5ce85899b8268578f.png"
  },
  48272: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_4_attachable_purple.08396e2fc257eb15c043.png"
  },
  48278: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/medieval_set_4_attachable_red.670d03766266c09f7ff6.png"
  },
  46899: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_helmet_attachable.5283fabd3acf0964e523.glb"
  },
  48283: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_helmet_attachable.c576b351721412f3474c.png"
  },
  46903: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur.8c8438fcfb2743e11a08.glb"
  },
  48292: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur.18e2b4005cf1249ddbc3.png"
  },
  46908: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur_elder.671a60a9234634a7317e.glb"
  },
  48296: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur_elder.73650a0bb7b29e737a18.png"
  },
  46912: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur_warrior.cb1266377a03a4840597.glb"
  },
  48304: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/minotaur_warrior.aa846fef1b1cff809fe1.png"
  },
  46921: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/monster_hunter_lorenzo_attachable.cbf89dcf0e32fef44b96.glb"
  },
  48308: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/monster_hunter_lorenzo_attachable.4a32273f11ece003053c.png"
  },
  48314: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/nova_jetpack_attachable.b4fe324d9f350a47b6b7.png"
  },
  46924: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/npc_pig_head.0610232aa4cf2be9a3a0.glb"
  },
  48320: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/npc_pig_head.0cff7e148233d053b838.png"
  },
  46930: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/painter_spencer_attachable.efbda3faf20332fbf4d8.glb"
  },
  48327: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/painter_spencer_attachable.2b1b0e6121f1f1df8b25.png"
  },
  46933: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pig_napoleon.a6b4adfd05805e823ef0.glb"
  },
  48333: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pig_napoleon.18fd7f3c75ed02707613.png"
  },
  46938: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pig_worker_attachable.c8ae9d921fa6347772a4.glb"
  },
  48340: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pig_worker_attachable.7df668bc96c60eec5b4e.png"
  },
  46943: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/piggy_banker_head.1a75c8ee13d7032928b2.glb"
  },
  48343: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/piggy_banker_head.0a378752a2a5a3c9e04b.png"
  },
  46952: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/portal_mage_hat.3855796919cb609ddf0b.glb"
  },
  48351: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/portal_mage_hat.53dcc9e4427e3eaeb19b.png"
  },
  46956: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rabbit_aristocrat_attachable.fb6aed0a5af2fe257cd9.glb"
  },
  48355: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rabbit_aristocrat_attachable.f96f72d6b1bbfaf34e34.png"
  },
  46959: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/smuglyn_attachable.e262dbcc08060d3b2c33.glb"
  },
  48359: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/smuglyn_attachable.9166c7e98a46701c6470.png"
  },
  46962: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_1_attachable.51f486670b7d1af4a977.glb"
  },
  48364: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_1_attachable.d1a2a2e0867a2cb5bef1.png"
  },
  46967: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_2_attachable.d6582c7b4ab3e973bfb3.glb"
  },
  48368: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_2_attachable.784bc9f5727b2d686616.png"
  },
  46972: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_3_attachable.8fb6bd5d4c5f57978790.glb"
  },
  48376: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_3_attachable.fc8f7ebe2626ce95666c.png"
  },
  46980: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_4_attachable.21bd91c42e1b7ace4372.glb"
  },
  48382: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spring_set_4_attachable.08d09b530492583fcf13.png"
  },
  46987: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_boy.b4589071fbc6f8aab4eb.glb"
  },
  48384: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_boy.4f30c4250607088747ac.png"
  },
  48388: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_girl_attachable.10eab4d20aa51073ed13.png"
  },
  46989: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_guy_attachable.cf561919acf1ae0553f4.glb"
  },
  48393: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_guy_attachable.d3444f70728d2dda507c.png"
  },
  46996: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_guy_fisherman_attachable.6f7e98da21b6d9d0245a.glb"
  },
  48399: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tentacle_guy_fisherman_attachable.69e2448895829cd14f97.png"
  },
  47004: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/trader_cowl_black.6702003ee060b8868f70.glb"
  },
  48405: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/trader_cowl_black.3e78c867952de1006a5b.png"
  },
  47007: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/trader_cowl_blue.6702003ee060b8868f70.glb"
  },
  48412: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/trader_cowl_blue.69970616d9125960a099.png"
  },
  47015: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wolf_in_suit_attachable.d386060693b354bdd3b8.glb"
  },
  48418: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wolf_in_suit_attachable.2beb931b01fad9bc4d46.png"
  },
  47022: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wolf_security.f95b7d48013fce4ce4bb.glb"
  },
  48426: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wolf_security.92c9f8ca8df9751651a3.png"
  },
  47030: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_1_attachable.0031da5214faa28a68db.glb"
  },
  48434: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_1_attachable.eea4ad48a4d5488d6026.png"
  },
  47033: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_2_attachable.e28bc87c22cc5b5ca31c.glb"
  },
  48443: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_2_attachable.94d8e252b4b30a4151aa.png"
  },
  47038: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_3_attachable.cbd5f1c1ddd045c853ef.glb"
  },
  48452: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_3_attachable.353bece2880f7f95a98f.png"
  },
  47042: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_4_attachable.d7a2516dadda81ee7ac0.glb"
  },
  48457: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/y2k_set_4_attachable.d0670370061907b3c750.png"
  },
  48465: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Scorpion_Atlas.4c63a55d5b226699b7b5.png"
  },
  47045: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Scorpion_Model.43a1eaa7700978fc716c.glb"
  },
  48472: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_scorpion_default.4c63a55d5b226699b7b5.png"
  },
  48477: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/SheepWool_Atlas.8c6ed48cd20ae438ce99.png"
  },
  48482: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Sheep_Atlas.edd4d6275fdd07baaf45.png"
  },
  47050: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Sheep_Model.ae826edb0fe7f7f6a082.glb"
  },
  48487: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_sheep_default.55e2f064ebce05fea3f6.png"
  },
  48496: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/10_sheep_gray.55e2f064ebce05fea3f6.png"
  },
  48500: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/11_sheep_green.55e2f064ebce05fea3f6.png"
  },
  48507: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/12_sheep_lightBlue.55e2f064ebce05fea3f6.png"
  },
  48511: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/13_sheep_lightGray.55e2f064ebce05fea3f6.png"
  },
  48514: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/14_sheep_lime.55e2f064ebce05fea3f6.png"
  },
  48516: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/15_sheep_magenta.55e2f064ebce05fea3f6.png"
  },
  48520: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_sheep_black.55e2f064ebce05fea3f6.png"
  },
  48528: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_sheep_red.55e2f064ebce05fea3f6.png"
  },
  48531: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_sheep_orange.55e2f064ebce05fea3f6.png"
  },
  48537: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_sheep_pink.55e2f064ebce05fea3f6.png"
  },
  48546: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_sheep_purple.55e2f064ebce05fea3f6.png"
  },
  48550: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/6_sheep_yellow.55e2f064ebce05fea3f6.png"
  },
  48552: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/7_sheep_blue.55e2f064ebce05fea3f6.png"
  },
  48557: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/8_sheep_brown.55e2f064ebce05fea3f6.png"
  },
  48560: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/9_sheep_cyan.55e2f064ebce05fea3f6.png"
  },
  48562: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Skeleton_Atlas.425e67b7d72b1af0b8c2.png"
  },
  47055: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Skeleton_Model.59355cb21c8481c2ca2c.glb"
  },
  47058: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Skeleton_Reconstructed.e7c175b2a6a01b86f26c.glb"
  },
  48570: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_skeleton_default.425e67b7d72b1af0b8c2.png"
  },
  48577: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Slime_Atlas.1263540ecee2dfa618c5.png"
  },
  47067: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Slime_Model.0fe0e3af703604cb8247.glb"
  },
  48579: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_slime_default.1263540ecee2dfa618c5.png"
  },
  48584: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit BearSaddle_Atlas.9b845651cecb41503d7e.png"
  },
  48592: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit Bear_Atlas.07a86cb5b2942e5f3573.png"
  },
  48596: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_spirit bear_default.07a86cb5b2942e5f3573.png"
  },
  48601: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit Golem_Atlas.9bb2443ec5562080032b.png"
  },
  48605: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_spirit golem_default.9bb2443ec5562080032b.png"
  },
  48614: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit GorillaSaddle_Atlas.24a33c7283188d22e2f6.png"
  },
  48620: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit Gorilla_Atlas.b8b61b0b14bb5661336e.png"
  },
  48629: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_spirit gorilla_default.b8b61b0b14bb5661336e.png"
  },
  48638: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit StagSaddle_Atlas.3038083905dd48c74892.png"
  },
  48647: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit Stag_Atlas.9207e762c70637613953.png"
  },
  48653: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_spirit stag_default.9207e762c70637613953.png"
  },
  48657: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit WolfCollar_Atlas.d1746d86d2b0f115c2fd.png"
  },
  48665: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spirit Wolf_Atlas.9b08acbc57bcdda346ef.png"
  },
  48672: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_spirit wolf_default.9b08acbc57bcdda346ef.png"
  },
  48675: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/StagSaddle_Atlas.017d11ce01411f24a65e.png"
  },
  48677: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stag_Atlas.25863e9a084dc2398678.png"
  },
  47072: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stag_Model.8b1a04b971769798551e.glb"
  },
  48684: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_stag_default.25863e9a084dc2398678.png"
  },
  48692: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stalker_Atlas.765a6f6d815e489d379a.png"
  },
  47074: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stalker_Model.62252db592e9a1194275.glb"
  },
  48700: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_stalker_default.05870a7ada9d85be2859.png"
  },
  48707: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_stalker_crimson.ed56375cd712c11086f1.png"
  },
  48716: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_stalker_frost.bc39d3a735616704ab47.png"
  },
  48723: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_stalker_void.bea5f5c673051ba9b5f4.png"
  },
  48729: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Tiki Terror_Atlas.3cd5e376c5c117c4c83f.png"
  },
  47082: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Tiki Terror_Model.795d7c9d776f3038e383.glb"
  },
  47091: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Tiki Terror_Reconstructed.66f98f4bfd2fd9d5dfe0.glb"
  },
  48733: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_tiki terror_default.649d191e0a0af31ed4b3.png"
  },
  48737: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_tiki terror_titan.7f0be3102d2022e79d71.png"
  },
  48744: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_tiki terror_tormentor.0bd9c18bb8f000b60ac1.png"
  },
  48746: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_tiki terror_tyrant.ea975b5358da4f2dceaf.png"
  },
  48753: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Vulcanite_Atlas.8993f0c3dbd8a3b2db83.png"
  },
  47099: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Vulcanite_Model.8659034f30a8675dca54.glb"
  },
  47107: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Vulcanite_Reconstructed.fd4e0dbf75086bfa07c4.glb"
  },
  48757: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_vulcanite_default.8993f0c3dbd8a3b2db83.png"
  },
  48759: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/WildcatCollar_Atlas.caaf5d479a9b064f25ca.png"
  },
  48764: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wildcat_Atlas.730e684f03c8ec6b6ca7.png"
  },
  47110: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wildcat_Model.882887d7f1b81b755c8f.glb"
  },
  48773: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_wildcat_default.33894faabdf46ff9bd5e.png"
  },
  48775: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_wildcat_tabby.b8193faccc684618151c.png"
  },
  48777: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_wildcat_grey.bb2c555308bee757148e.png"
  },
  48783: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_wildcat_black.0a1d2b751451edbf520c.png"
  },
  48791: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_wildcat_calico.71da5e696f853739c2b8.png"
  },
  48797: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/5_wildcat_siamese.3442e45665115fb259a9.png"
  },
  48800: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/6_wildcat_leopard.a1b394639e3a31f471e8.png"
  },
  48807: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/WolfCollar_Atlas.d66ee93a67f33ef102cc.png"
  },
  48809: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wolf_Atlas.b14e1ea41fa8fcaccc6d.png"
  },
  47119: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wolf_Model.e8ce1bb8ca6dee8c4281.glb"
  },
  48814: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_wolf_default.4b7fd478b8456d6188dc.png"
  },
  48823: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/1_wolf_white.6ddd98fa6fef429b09fc.png"
  },
  48828: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_wolf_brown.8250048308eebf9ff5e3.png"
  },
  48834: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/3_wolf_grey.f7443ecfa81204e0435e.png"
  },
  48842: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/4_wolf_spectral.ed551985dc573c47da7b.png"
  },
  48851: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Zombie_Atlas.0d12d7cf7b286942fb57.png"
  },
  47123: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Zombie_Model.729c1fe6a9048e506b28.glb"
  },
  47130: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Zombie_Reconstructed.b748762209f6006c725f.glb"
  },
  48854: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/0_zombie_default.0d12d7cf7b286942fb57.png"
  },
  41903: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/2_block.ed68e72819b31a973068.glb"
  },
  41905: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/67.e191f0fe25ea3300eab7.glb"
  },
  41911: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Artisan Bench.b42baf109b0e8ceebe35.glb"
  },
  41916: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Aspen Door.70ff2e635fa7e6d074e7.glb"
  },
  41924: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Aspen Item Pedestal.d106ce98250ed7ec636c.glb"
  },
  41928: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Aspen Ladder.c46a3ef9dff3ff338c6b.glb"
  },
  41937: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Aspen Trapdoor.be2f0606fc8b154395bf.glb"
  },
  41941: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Black Banner.c6b29cdd2a2ef7368215.glb"
  },
  41945: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Black Bed.cea41e80f8f80d1deaac.glb"
  },
  41947: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Black Directional Arrow.335ec331ba4de1ed0c03.glb"
  },
  41954: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Black Strongbed.d812d56747ded12fa76c.glb"
  },
  41959: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Blue Banner.ed6d85442bc3bb4697dd.glb"
  },
  41966: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Blue Bed.6134692fe5a906ee225e.glb"
  },
  41969: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Blue Directional Arrow.2789b2fbd37ed6d0a81e.glb"
  },
  41975: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Blue Strongbed.ded6e860b166e9218920.glb"
  },
  41984: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Board.f3ca970f0aec49c2cba5.glb"
  },
  41986: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Brown Banner.2fd5a70262544120b8b5.glb"
  },
  41989: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Brown Bed.3c55240c9fe96e467e8e.glb"
  },
  41996: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Brown Directional Arrow.277c0369fab2f84fb1ee.glb"
  },
  42003: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Brown Strongbed.fac0f4616a1660180625.glb"
  },
  42012: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cedar Door.6505aa3b8d621a205c84.glb"
  },
  42017: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cedar Item Pedestal.fed6ba91b9e237779dde.glb"
  },
  42021: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cedar Ladder.91ddcfdab0b805b0ba02.glb"
  },
  42027: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cedar Trapdoor.4513c73d389bce4c7ba0.glb"
  },
  42036: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cherry Door.7cd622b686ab7d35adbf.glb"
  },
  42044: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cherry Item Pedestal.84093fc38b34643aecbb.glb"
  },
  42048: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cherry Ladder.09ccb69175957a415053.glb"
  },
  42057: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cherry Trapdoor.631b5b507962f538a8b3.glb"
  },
  42061: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Crimson Trapdoor.0a6dcda3d7289dd9cabb.glb"
  },
  42067: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cyan Banner.8bfb99d6f5baa4fdda91.glb"
  },
  42072: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cyan Bed.2e60dbe672ee333df908.glb"
  },
  42077: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cyan Directional Arrow.5fb3ab4f0042724cb73a.glb"
  },
  42083: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cyan Strongbed.8744cd46f22ecb13c70f.glb"
  },
  42088: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Dangling Rope.148f7603a65c417035b0.glb"
  },
  42093: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Dangling Vine.ea87fe948ec583ff997c.glb"
  },
  42098: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Enchanting Table.611328e5f2099242ee00.glb"
  },
  42102: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Diamond Trophy.1173685f24276f2cbcb9.glb"
  },
  42110: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Banner.aae5998e92c2b99664bc.glb"
  },
  42115: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Fat Brown Mushroom.40af11e61bd2c9293a6e.glb"
  },
  42120: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Fat Red Mushroom.7a9bad44b193737cfa3a.glb"
  },
  42128: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Fence.878f3952d5f962074bf3.glb"
  },
  42132: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/FenceGate.d9d93725ba92bb91055c.glb"
  },
  42141: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Furnace.63172398ee4490177f4f.glb"
  },
  42148: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Enchanting Table.f0131104629a776c3b8f.glb"
  },
  42151: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gold Trophy.2167e90bf848cd51f465.glb"
  },
  42153: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gray Banner.a3b81769845f5ff338fc.glb"
  },
  42160: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gray Bed.5c4f0bbdbb174f46fbef.glb"
  },
  42169: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gray Strongbed.e8eaf0af5a840e59fff1.glb"
  },
  42173: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Green Banner.90b3894d2834265ce9b2.glb"
  },
  42182: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Green Bed.d6ff26f123e6826d9985.glb"
  },
  42185: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Green Directional Arrow.9bab881fb50f75f86b3f.glb"
  },
  42190: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Green Strongbed.f4b895ef6c5807914f4c.glb"
  },
  42199: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Grey Directional Arrow.8242f96058670e322908.glb"
  },
  42201: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Enchanting Table.3687c10d08e339113719.glb"
  },
  42206: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Ladder.8ce80384a824f6137ab2.glb"
  },
  42209: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Trapdoor.133339769c365a3aac31.glb"
  },
  42214: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Iron Trophy.0b43b0c33f93503aed8b.glb"
  },
  42222: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Jungle Door.f9f730419e0ef03e61f1.glb"
  },
  42228: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Jungle Item Pedestal.9e21adc04895780375b3.glb"
  },
  42237: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Jungle Ladder.f0e270ed8983b1d35713.glb"
  },
  42241: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Jungle Trapdoor.395a3b2d177a87db6746.glb"
  },
  42250: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Large Icicle.170ec1b52ee13dacb77f.glb"
  },
  42253: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Large Twin Icicle.6c08460fe301dd64fefd.glb"
  },
  42261: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Leaf Bed.7aaa214dfd2bc1183b5e.glb"
  },
  42264: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Blue Banner.afe7633adc51ba562c85.glb"
  },
  42273: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Blue Bed.6fb411e8528b423d6611.glb"
  },
  42282: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Blue Directional Arrow.aeae69a3682fafa6403b.glb"
  },
  42289: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Blue Strongbed.e417c2e163f6f87882f2.glb"
  },
  42295: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Gray Banner.472826728c0ea68ccd0e.glb"
  },
  42303: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Gray Bed.c36f53f85fa5543f5f42.glb"
  },
  42310: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Gray Strongbed.8b84deea32747ec1bdf4.glb"
  },
  42315: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Light Grey Directional Arrow.c6ca300b2832ea56ca5d.glb"
  },
  42319: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lime Banner.fef68f8aedcd6206b682.glb"
  },
  42323: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lime Bed.792d5c1fbfea4012b996.glb"
  },
  42332: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lime Directional Arrow.b775d1be5bf4a55a9132.glb"
  },
  42339: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lime Strongbed.385c00d698c7c35d489a.glb"
  },
  42348: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magenta Banner.6998f2e5400e044cb27f.glb"
  },
  42353: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magenta Bed.70b261dd12b8a0733f73.glb"
  },
  42355: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magenta Directional Arrow.e82fbca46b89ce4f66fe.glb"
  },
  42357: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magenta Strongbed.2633f791a179ed0b18a9.glb"
  },
  42364: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mango Door.f3062f346f353ba0ef10.glb"
  },
  42370: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mango Item Pedestal.b893bab2a9ebd1927955.glb"
  },
  42375: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mango Ladder.ef553e9e2a61fb119729.glb"
  },
  42383: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mango Trapdoor.da8b471e4edeb488b53c.glb"
  },
  42387: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Maple Door.93d1036df42b8822140c.glb"
  },
  42393: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Maple Ladder.fa63d0c1b92cec4e6088.glb"
  },
  42401: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Maple Trapdoor.ebc05cc264d1ece28b22.glb"
  },
  42404: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Medium Icicle.2f78a303591659f85308.glb"
  },
  42413: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Moonstone Trophy.039d181285ad13472e56.glb"
  },
  42415: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Nova Trophy.ee442b96a86b4412e83c.glb"
  },
  42421: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Orange Banner.ef3c97359aa22d345a39.glb"
  },
  42424: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Orange Bed.ddb5003e3b51000a875a.glb"
  },
  42433: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Orange Directional Arrow.8fc69b3ad74b874d8717.glb"
  },
  42439: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Orange Strongbed.d18b11f42561ffcd7ad9.glb"
  },
  42448: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Palm Door.a1098848fbd449380e5e.glb"
  },
  42450: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Palm Item Pedestal.4697508246a8308957c1.glb"
  },
  42459: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Palm Ladder.0657b4a73700795a10ce.glb"
  },
  42468: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Palm Trapdoor.6831798533946e2535fc.glb"
  },
  42472: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pear Door.191218ca881feafb89d3.glb"
  },
  42475: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pear Item Pedestal.d9247ea4c25827f0cea5.glb"
  },
  42479: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pear Ladder.dfcf2a04eb8dd2ec99f5.glb"
  },
  42482: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pear Trapdoor.ec72b5fcb4c2aab20ae7.glb"
  },
  42491: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pine Door.6f1a6fd9e9968b012c75.glb"
  },
  42498: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pine Item Pedestal.6fbcfaf534cdeae3688a.glb"
  },
  42505: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pine Ladder.f0a60090079487f523bd.glb"
  },
  42508: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pine Trapdoor.99dc922c6bf48f6ec8e8.glb"
  },
  42514: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pink Banner.5a2ec2efce3d4da4d265.glb"
  },
  42520: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pink Bed.bc1dea899cec3f9ef7e7.glb"
  },
  42526: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pink Directional Arrow.016130285863cca121fe.glb"
  },
  42535: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pink Strongbed.84e997326b4cb35d1239.glb"
  },
  42541: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Plum Door.fad96d335bfbd400b369.glb"
  },
  42543: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Plum Item Pedestal.c293a0f795323e47f5fb.glb"
  },
  42547: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Plum Ladder.9fa92307e164136268dc.glb"
  },
  42556: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Plum Trapdoor.b3b6436d875e4dd2302d.glb"
  },
  42560: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Potion Table.b9b00358d3c92be620f7.glb"
  },
  42568: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Purple Banner.805e85f24d3948fd1991.glb"
  },
  42575: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Purple Bed.a6c7179526745d16e4af.glb"
  },
  42579: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Purple Directional Arrow.e117fb18ecae2de3597d.glb"
  },
  42585: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Purple Strongbed.2792d8983d2fd7384411.glb"
  },
  42588: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rainbow Banner.2c1ff6cfcd7cfd6a2bb8.glb"
  },
  42590: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Red Banner.b951e43bac7aceef8de2.glb"
  },
  42594: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Red Bed.f24823935c79013e547f.glb"
  },
  42598: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Red Directional Arrow.0f44b3325b02e45fe3fc.glb"
  },
  42601: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Red Strongbed.cbed53542bda683ac7b5.glb"
  },
  42610: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Salvaging Table.b1d9daec58386ecb42cd.glb"
  },
  42619: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Showcase.0b58d3094505df7ad51a.glb"
  },
  42625: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Skull Banner.be808cb16744c7b19d81.glb"
  },
  42633: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Black Pod.f7f1caee394bbde5ba00.glb"
  },
  42636: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Blue Pod.0be6c7e63cf39dc17610.glb"
  },
  42643: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Brown Pod.db038036cedec67a309e.glb"
  },
  42646: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Cyan Pod.a925627b8d8c728f4bf9.glb"
  },
  42655: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Gray Pod.80702b6ed803b9554882.glb"
  },
  42657: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Green Pod.778b1b621f240176416b.glb"
  },
  42662: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Light Blue Pod.5c0ae28eaff9e3ad44e7.glb"
  },
  42670: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Light Gray Pod.3cc535468131e7c74b71.glb"
  },
  42678: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Lime Pod.325665695c5f9a563a71.glb"
  },
  42684: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Magenta Pod.4dc15c5426e84ada3682.glb"
  },
  42687: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Orange Pod.7f1a376b3fd22adcaa47.glb"
  },
  42693: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Pink Pod.736f862ad20ffec3b45a.glb"
  },
  42700: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Purple Pod.3d264ca7cd77e2bc85eb.glb"
  },
  42709: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Red Pod.71793138884ea7963344.glb"
  },
  42714: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Twin Icicle.90abef92d62a482d945c.glb"
  },
  42717: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small White Pod.9fe6bb3e8935c04e09ba.glb"
  },
  42723: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Small Yellow Pod.c0832601f97f70e4c4a1.glb"
  },
  42726: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spectral Door.961d366035c6451ed7c0.glb"
  },
  42728: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spectral Item Pedestal.d4346118ea2a5e2b1e8a.glb"
  },
  42735: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spectral Ladder.5096618d2f9b74e4671a.glb"
  },
  42738: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spectral Trapdoor.1ccb5de6df39ebce4456.glb"
  },
  42741: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Diamond.69c9ee36cf9e11b59e0b.glb"
  },
  42748: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Gold.123674bb67381cac70c6.glb"
  },
  42752: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Iron.187c23e1963747a7f83f.glb"
  },
  42756: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Kill.f4843456edbde4aa3351.glb"
  },
  42760: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Stone.40b924fee45d7d975ae3.glb"
  },
  42765: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Spikes_Wood.4afa092439b0a5a36c2c.glb"
  },
  42768: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stone Enchanting Table.7820ac172e4883d81d77.glb"
  },
  42770: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stone Trophy.0d09ca4b3382d078df96.glb"
  },
  42773: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Timed Spike Bomb Block.65ee988f5c874dad3ba9.glb"
  },
  42778: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Vines.6900e39cb0132a28d5c5.glb"
  },
  42781: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Warped Trapdoor.e102e0d01ea8095a508d.glb"
  },
  42788: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/White Banner.b9c75887ab4dc97c52c1.glb"
  },
  42791: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/White Bed.189eba790b17cd9e673c.glb"
  },
  42797: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/White Directional Arrow.f7f592929734a9c1aaad.glb"
  },
  42800: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/White Strongbed.64379b59673d8b8bebef.glb"
  },
  42807: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wood Enchanting Table.adb5adb79965168536db.glb"
  },
  42815: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wood Trophy.de9b607e6fd3921c91f4.glb"
  },
  42818: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Workbench.395da958bba12f4f5618.glb"
  },
  42827: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Yellow Banner.f040f94bd7e4052b9c51.glb"
  },
  42833: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Yellow Bed.3508f062adbd29ad9817.glb"
  },
  42840: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Yellow Directional Arrow.ea7794e6fe2d48fb1b01.glb"
  },
  42845: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Yellow Strongbed.418bdbc6b888ac5d5d99.glb"
  },
  42849: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Aspen Door Top.c74d85d9615d99fb551c.glb"
  },
  42857: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Black Banner Flag Hanging.cfbc798c1cbcb1a6289f.glb"
  },
  42864: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Black Banner Flag.617184cee26ec2fca017.glb"
  },
  42871: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Black Banner Hanging.c2abb55fdd1db4457eb8.glb"
  },
  42878: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Black Bed Head.a2b52b7714fa148924cd.glb"
  },
  42885: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Black Strongbed Head.ba5750836163bbd674c9.glb"
  },
  42892: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Blue Banner Flag Hanging.0f4421c98326e84824fa.glb"
  },
  42900: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Blue Banner Flag.11990eedd286db55880d.glb"
  },
  42907: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Blue Banner Hanging.5b12aec44ad18dcb3888.glb"
  },
  42915: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Blue Bed Head.563135602471615af0ad.glb"
  },
  42919: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Blue Strongbed Head.6436747247f90ad1ea09.glb"
  },
  42924: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Brown Banner Flag Hanging.56f9fb5ad4e57a1d138e.glb"
  },
  42927: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Brown Banner Flag.890530886208cca6a28f.glb"
  },
  42932: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Brown Banner Hanging.407d71e9319ba5f72b00.glb"
  },
  42939: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Brown Bed Head.d5276fc60f1f1575e431.glb"
  },
  42944: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Brown Strongbed Head.1ea396eae4848fc2e2c5.glb"
  },
  42948: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Camel Painting Bottom Left.6f52a64b36eb5166414c.glb"
  },
  42957: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Camel Painting Bottom Right.096b226ca218a069996f.glb"
  },
  42963: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Camel Painting Top Left.9d04162bef9c3ec3bc5a.glb"
  },
  42966: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Camel Painting Top Right.9bdc26b9370a7608955f.glb"
  },
  42969: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cedar Door Top.aebe23f6241235f16aa2.glb"
  },
  42971: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cherry Door Top.49bad79598070b9766a2.glb"
  },
  42980: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cow Painting Bottom Left.a626f2ef515025f2e2a4.glb"
  },
  42986: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cow Painting Bottom Right.7a2361d419822f12723d.glb"
  },
  42993: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cow Painting Top Left.c3d7138ccc02cec834c4.glb"
  },
  43001: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cow Painting Top Right.69402041c0ca60ac771c.glb"
  },
  43009: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cyan Banner Flag Hanging.4a639a0ba348f0a78232.glb"
  },
  43016: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cyan Banner Flag.19f84de6bfc7bd8a45c4.glb"
  },
  43018: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cyan Banner Hanging.54193b1b927f1665acc9.glb"
  },
  43025: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cyan Bed Head.28ad1dd325b0d2cecf92.glb"
  },
  43032: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Cyan Strongbed Head.a15b5458ea2f9e8e00a4.glb"
  },
  43034: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Deer Painting Bottom Left.8d93cc831d7a37716930.glb"
  },
  43039: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Deer Painting Bottom Right.60519165d7e74ae11097.glb"
  },
  43044: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Deer Painting Top Left.e5a05c00a32f81ea30b2.glb"
  },
  43053: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Deer Painting Top Right.2ef06cb82d37ed63a03f.glb"
  },
  43060: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Draugr Banner Flag Hanging.87935e06bcc4b48cd5aa.glb"
  },
  43065: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Draugr Banner Flag.224b1cf4df8f63554a45.glb"
  },
  43071: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Draugr Banner Hanging.ad5e1055164dc891b9c0.glb"
  },
  43073: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Gray Banner Flag Hanging.847faa22afc615ee0e97.glb"
  },
  43077: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Gray Banner Flag.b9c2a5aca0fc8ab973bb.glb"
  },
  43082: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Gray Banner Hanging.67c7b447ef27679fda8d.glb"
  },
  43090: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Gray Bed Head.7f5edc258147848884e8.glb"
  },
  43097: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Gray Strongbed Head.81a228cbd33289ccad24.glb"
  },
  43105: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Green Banner Flag Hanging.1da40920f91caa6789e5.glb"
  },
  43109: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Green Banner Flag.cfd668f53d76e6542ac2.glb"
  },
  43118: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Green Banner Hanging.0b48cd078ae358248499.glb"
  },
  43123: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Green Bed Head.c82673c37db9d22d951b.glb"
  },
  43125: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Green Strongbed Head.34f5c659ec5c31aea8ce.glb"
  },
  43130: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Horse Painting Bottom Left.8ba66535ce92d3e1722d.glb"
  },
  43139: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Horse Painting Bottom Right.46a3415c6aef503962bb.glb"
  },
  43143: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Horse Painting Top Left.657dc6225171243f245b.glb"
  },
  43148: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Horse Painting Top Right.9da74d016b759f190221.glb"
  },
  43156: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Jungle Door Top.b9fefc55b59299e1a330.glb"
  },
  43163: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Blue Banner Flag Hanging.152032e60558efde629b.glb"
  },
  43170: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Blue Banner Flag.e190ccb1b5e4c66b862f.glb"
  },
  43179: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Blue Banner Hanging.964849196d922297e63e.glb"
  },
  43185: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Blue Bed Head.724e96603f186d9a8fc2.glb"
  },
  43187: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Blue Strongbed Head.7d8424c06a75a1097170.glb"
  },
  43193: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Gray Banner Flag Hanging.0517247c33b99436e963.glb"
  },
  43197: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Gray Banner Flag.718d5858ef07a4e01696.glb"
  },
  43200: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Gray Banner Hanging.0fcd7e0e3655bfa9a125.glb"
  },
  43205: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Gray Bed Head.0303bfa349abf0f2fb80.glb"
  },
  43207: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Light Gray Strongbed Head.30c6f6ad4acf56613f2f.glb"
  },
  43209: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Lime Banner Flag Hanging.4767ef5e44fe3d5d3ffb.glb"
  },
  43211: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Lime Banner Flag.97301b73e9aebe6053c1.glb"
  },
  43219: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Lime Banner Hanging.72523777b4759a9a2ccc.glb"
  },
  43221: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Lime Bed Head.dbddd24e7a4420a96f2f.glb"
  },
  43228: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Lime Strongbed Head.00146b7ed12bfa16b207.glb"
  },
  43237: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Magenta Banner Flag Hanging.a6d2d58283dc0ee74523.glb"
  },
  43246: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Magenta Banner Flag.bc1ba313a35af29be707.glb"
  },
  43248: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Magenta Banner Hanging.338bd181963fea3ff8fb.glb"
  },
  43255: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Magenta Bed Head.d31af958dc71d97814f3.glb"
  },
  43262: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Magenta Strongbed Head.cf4a8fda11b2b73dc6ed.glb"
  },
  43271: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Mango Door Top.6b6a3aa1df7069e0cf13.glb"
  },
  43279: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Maple Door Top.2768910296da701712b2.glb"
  },
  43283: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Orange Banner Flag Hanging.f20238c4ba1f769b83bc.glb"
  },
  43285: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Orange Banner Flag.3466e7ecc9ae8b89c079.glb"
  },
  43290: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Orange Banner Hanging.aa476158647512ccb7b7.glb"
  },
  43297: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Orange Bed Head.6de4be93f4eec519f273.glb"
  },
  43300: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Orange Strongbed Head.7ba9a51f968bba47383d.glb"
  },
  43305: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Palm Door Top.f8b7e967a96362a659a2.glb"
  },
  43310: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pear Door Top.3d76cb5d0c376bc4a5a3.glb"
  },
  43314: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pig Painting Bottom Left.dbc8926e0fda4af9d308.glb"
  },
  43322: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pig Painting Bottom Right.74548c1594c05212e7ab.glb"
  },
  43331: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pig Painting Top Left.43e32f7831d3e0805f92.glb"
  },
  43334: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pig Painting Top Right.870c25d54cdf1ccde6e9.glb"
  },
  43341: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pine Door Top.b6998b1cbb7d35537ac6.glb"
  },
  43349: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pink Banner Flag Hanging.a26b549f85c4974cef3a.glb"
  },
  43355: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pink Banner Flag.2baeb61da36bdafd9ca5.glb"
  },
  43362: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pink Banner Hanging.52732487e4388af53397.glb"
  },
  43371: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pink Bed Head.55427fffde8df81a8b45.glb"
  },
  43373: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Pink Strongbed Head.981850c2236f956bef47.glb"
  },
  43375: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Plum Door Top.e38c3f25b7d40a83880f.glb"
  },
  43380: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Purple Banner Flag Hanging.620b5130de2a5acf6acf.glb"
  },
  43382: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Purple Banner Flag.b01047e6f71e1e701bb4.glb"
  },
  43389: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Purple Banner Hanging.fc280620b91c0b9c94ba.glb"
  },
  43394: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Purple Bed Head.0f29bca0fcc5a571acb9.glb"
  },
  43399: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Purple Strongbed Head.d198c864d6d36e993f93.glb"
  },
  43407: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Radar Dish Down.7cb9726005b2526bdf4d.glb"
  },
  43415: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Radar Dish Up.d97eabdff7864c56bc2f.glb"
  },
  43420: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Rainbow Banner Flag Hanging.8812eb1ff5fa7d22ed7d.glb"
  },
  43422: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Rainbow Banner Flag.06826522d56676745046.glb"
  },
  43427: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Rainbow Banner Hanging.ba8286ad9bd08376ae37.glb"
  },
  43436: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Red Banner Flag Hanging.a22cc98245e658223042.glb"
  },
  43444: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Red Banner Flag.aa406f98ef9444264579.glb"
  },
  43447: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Red Banner Hanging.563cd16072672db73802.glb"
  },
  43452: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Red Bed Head.76958dad424fd8c7c924.glb"
  },
  43454: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Red Strongbed Head.64ffa69b9474dd76fea0.glb"
  },
  43462: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Sheep Painting Bottom Left.43af975cef0cbce06f8f.glb"
  },
  43464: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Sheep Painting Bottom Right.d307fb60c4b0f254e878.glb"
  },
  43467: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Sheep Painting Top Left.fda4cd2f8aa1abd8468c.glb"
  },
  43476: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Sheep Painting Top Right.8b3b4c019c808b4c14d5.glb"
  },
  43481: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Skull Banner Flag Hanging.a103df5c29d654ca6158.glb"
  },
  43487: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Skull Banner Flag.e963e24eca4042657917.glb"
  },
  43492: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Skull Banner Hanging.49a522ddf60661db6e4f.glb"
  },
  43500: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Black Pod Mid.03843aff015106df28cc.glb"
  },
  43503: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Black Pod Top.8cf8eb5d19d2db960536.glb"
  },
  43511: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Blue Pod Mid.757a12f8330ea7b6a38e.glb"
  },
  43514: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Blue Pod Top.6760b73896cf699f43f9.glb"
  },
  43517: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Brown Pod Mid.3d48e12552338a48939d.glb"
  },
  43519: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Brown Pod Top.ae69c03aad428bfc1dc6.glb"
  },
  43528: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Cyan Pod Mid.b5a69a479f34d956c1ef.glb"
  },
  43533: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Cyan Pod Top.1075afb3ef4c7df4a2eb.glb"
  },
  43537: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Gray Pod Mid.c4d9b17cf3bba57e36d5.glb"
  },
  43544: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Gray Pod Top.b572a539cc65c0c6fef6.glb"
  },
  43549: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Green Pod Mid.dbc00603628f2be74cc3.glb"
  },
  43556: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Green Pod Top.a78986447b371d85cf8c.glb"
  },
  43564: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Light Blue Pod Mid.6c3aea9246e6ffc31db8.glb"
  },
  43570: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Light Blue Pod Top.a892261ae5618993ba64.glb"
  },
  43578: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Light Gray Pod Mid.536b25600295a14cd2cf.glb"
  },
  43583: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Light Gray Pod Top.26e4ef46d71789406482.glb"
  },
  43590: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Lime Pod Mid.9f6098fccc660db46bcf.glb"
  },
  43596: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Lime Pod Top.ab72e3b1ba9cc548de53.glb"
  },
  43601: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Magenta Pod Mid.0b20235584f72a3e4c36.glb"
  },
  43604: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Magenta Pod Top.9e0dcff4f7ac81b70c1a.glb"
  },
  43613: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Middle Pod Mag.3a1132b1fb5a71e90cfb.glb"
  },
  43617: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Orange Pod Mid.cdb76084e06a01174933.glb"
  },
  43624: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Orange Pod Top.32d1a6f20df4042d0a51.glb"
  },
  43627: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Pink Pod Mid.bc910a35fe0eee502325.glb"
  },
  43635: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Pink Pod Top.2433e4eed13aff1b371c.glb"
  },
  43637: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Purple Pod Mid.df0d724d4ee73129a50e.glb"
  },
  43643: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Purple Pod Top.e16abd5aba6cbc5950fe.glb"
  },
  43647: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Red Pod Mid.165aacb8d7326a9ad53a.glb"
  },
  43653: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Red Pod Top.4c99667582ab9e3c35e9.glb"
  },
  43661: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small White Pod Mid.84176311551e4916216f.glb"
  },
  43663: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small White Pod Top.2210a083892d21e744cb.glb"
  },
  43666: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Yellow Pod Mid.9714689721f4cbbfb8cc.glb"
  },
  43670: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Small Yellow Pod Top.dcdab8fb3a278bf3db82.glb"
  },
  43679: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Spectral Door Top.bdfaca331bcc91f62b7e.glb"
  },
  43682: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_White Banner Flag Hanging.25d8007c46b4fb74a389.glb"
  },
  43690: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_White Banner Flag.d98dc6d787a484cbba6c.glb"
  },
  43692: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_White Banner Hanging.7b1a2a66bccb8529bcd7.glb"
  },
  43700: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_White Bed Head.f08faf8b0a1975e20aff.glb"
  },
  43703: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_White Strongbed Head.e6d70c8c1b67996f80a9.glb"
  },
  43711: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wildcat Painting Bottom Left.03df3eaca977d6a1e33c.glb"
  },
  43717: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wildcat Painting Bottom Right.75639f21610efe2eca46.glb"
  },
  43721: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wildcat Painting Top Left.bc9b03cda4006c17302f.glb"
  },
  43725: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wildcat Painting Top Right.621b968b75d39bfa4cf6.glb"
  },
  43728: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wolf Painting Bottom Left.5a1a9a5adc4c42676f17.glb"
  },
  43734: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wolf Painting Bottom Right.764338590135d60ba4a5.glb"
  },
  43737: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wolf Painting Top Left.6bfc627b449b7dde4daf.glb"
  },
  43740: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Wolf Painting Top Right.694dca804ab3cf5b64d8.glb"
  },
  43742: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Yellow Banner Flag Hanging.e4908078e51d3fa60832.glb"
  },
  43747: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Yellow Banner Flag.65d24d652d7e2574270f.glb"
  },
  43756: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Yellow Banner Hanging.f26b387b23ccf8533050.glb"
  },
  43761: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Yellow Bed Head.4552feeb5d0871e044d9.glb"
  },
  43767: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/_Yellow Strongbed Head.3949850260f428146b7f.glb"
  },
  43770: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_body.25e8dd3d58c1992c9e03.glb"
  },
  43774: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_drill_back.22bdc56b5f4dd481c732.glb"
  },
  43780: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_drill_front.ef9fc3de8896d485d0ac.glb"
  },
  43785: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_foot_back.210a50f0d9a2a33b886d.glb"
  },
  43792: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_foot_front.a29e1ea1f289a2525883.glb"
  },
  43799: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_lunite_body.2b6a4c376368a207921d.glb"
  },
  43808: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_lunite_drill_back.a1d0e139c3830b6116bc.glb"
  },
  43811: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_lunite_drill_front.2509610a64cc06486cf4.glb"
  },
  43817: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_lunite_foot_back.6549c238da6014445206.glb"
  },
  43824: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_miner_lunite_foot_front.b65f7f9c66b201034fc6.glb"
  },
  43831: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_none.1af577ef74c59ca3711e.glb"
  },
  43840: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx.50e8d550535b23eb7b0c.glb"
  },
  43844: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny.ad1fc6768d20e0dadf29.glb"
  },
  43853: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz.c08504e0b96d5b02da20.glb"
  },
  43862: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px.a8c164a84dac50ebf83b.glb"
  },
  43871: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py.b4b39bcdd890d611d563.glb"
  },
  43876: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_py_pz.3bc5e82d654850681a7e.glb"
  },
  43879: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_px_pz.25d193228b9b407653a0.glb"
  },
  43883: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py.954d9aba0e5fc700e618.glb"
  },
  43887: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_py_pz.ed28e69d1166442f5afe.glb"
  },
  43894: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_nz_pz.8abac3ce07dd4df7def8.glb"
  },
  43896: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_px.c05f5b3a29a8b38a74dc.glb"
  },
  43902: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_px_py.c494e6c0f4d7f43ef65d.glb"
  },
  43907: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_px_py_pz.08a75b32f3d3f1367e61.glb"
  },
  43910: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_px_pz.dfa1eefb590a79130a0c.glb"
  },
  43915: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_py.df3b2fd89b174e33712d.glb"
  },
  43917: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_py_pz.aa9e43468f5c67284072.glb"
  },
  43919: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_ny_pz.eff9afebed04c9f45673.glb"
  },
  43921: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz.617efa509a950b46031c.glb"
  },
  43929: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_px.44e78fe002d03549ed70.glb"
  },
  43936: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_px_py.874da5d27960082260a5.glb"
  },
  43939: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_px_py_pz.201fe963e550b1bbfc5a.glb"
  },
  43944: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_px_pz.62208ad593e3adf43e58.glb"
  },
  43951: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_py.e45d119a76498366d672.glb"
  },
  43956: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_py_pz.fdab81d0d48420bf2a67.glb"
  },
  43960: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_nz_pz.0ef6fcae4f3fa615df37.glb"
  },
  43966: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_px.cb1e04b733c1f861cd6a.glb"
  },
  43970: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_px_py.cd9c868b41ec3c72e318.glb"
  },
  43973: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_px_py_pz.8c952fc3b2040e72489c.glb"
  },
  43979: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_px_pz.99f25ad2959b31482feb.glb"
  },
  43985: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_py.52611f014ea751a78ede.glb"
  },
  43994: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_py_pz.51e1f31d8a38119f5bf0.glb"
  },
  43997: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nx_pz.86b6a820036982207bb4.glb"
  },
  44005: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny.11819ea4df81ddb74d7a.glb"
  },
  44011: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz.a2aa549f70b4fda24a35.glb"
  },
  44018: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_px.cb149deb1b4525756883.glb"
  },
  44021: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_px_py.1870f5655bf3c4e08897.glb"
  },
  44029: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_px_py_pz.24d54d010d5b2b1b2f6f.glb"
  },
  44035: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_px_pz.c16d7378b0d0cd37fc4f.glb"
  },
  44037: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_py.feb88cf2ed317948ef3c.glb"
  },
  44045: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_py_pz.be305a5a1769ed54121f.glb"
  },
  44050: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_nz_pz.a81310a530a7254d0d25.glb"
  },
  44055: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_px.c1e79318e74a4bf37eab.glb"
  },
  44060: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_px_py.bdeef9e0a9a36c7c216e.glb"
  },
  44063: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_px_py_pz.a5669fa7ccdf25487694.glb"
  },
  44068: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_px_pz.3bf1496e5db7d7be0b60.glb"
  },
  44074: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_py.689f0e07c9cbb01285db.glb"
  },
  44079: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_py_pz.300e54c3aadf69295c54.glb"
  },
  44085: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_ny_pz.da410a7234f71cb70bb5.glb"
  },
  44090: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz.fa50055e81630bf747c9.glb"
  },
  44098: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_px.720cd952ce2e1af29226.glb"
  },
  44103: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_px_py.1746723455df46daa829.glb"
  },
  44110: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_px_py_pz.d37fbfadb9466de4393d.glb"
  },
  44112: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_px_pz.09731490eabc55907e09.glb"
  },
  44116: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_py.cd0b240636e714c8c4fb.glb"
  },
  44124: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_py_pz.5b902651c90d6ed49340.glb"
  },
  44129: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_nz_pz.193e640bb482e126a6c7.glb"
  },
  44137: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_px.19dee2c6025176ef7fc5.glb"
  },
  44142: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_px_py.68a77eff7799ba4b4842.glb"
  },
  44145: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_px_py_pz.3b1842dbce9a3e915015.glb"
  },
  44149: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_px_pz.c9bfca918420ed622650.glb"
  },
  44157: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_py.4e6306c19edf8a0eb648.glb"
  },
  44162: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_py_pz.03d093879d5689ca5cd6.glb"
  },
  44167: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_coolant_pipe_pz.0208c229844bc8c71bd1.glb"
  },
  44175: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_none.66acffc7f5d58af52183.glb"
  },
  44182: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx.2141d711ad82ede24cb1.glb"
  },
  44190: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny.d8673ebc2a58da04a0f6.glb"
  },
  44198: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz.07e2c6827b9fe6777b52.glb"
  },
  44200: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px.52b8789a08f0fa1819b4.glb"
  },
  44205: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py.33a7e6e0ad06872dc6dd.glb"
  },
  44208: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_py_pz.48d3e863ca0527bf6a35.glb"
  },
  44216: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_px_pz.f2269dc58eb0965b92a5.glb"
  },
  44224: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py.e74b21326fdce69935db.glb"
  },
  44228: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_py_pz.01bf008683b888a363bf.glb"
  },
  44236: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_nz_pz.da1abb0700f299b2c7f3.glb"
  },
  44238: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_px.023e0b16a8b4a81a1e1e.glb"
  },
  44245: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_px_py.14be63fed9a2a83e2b83.glb"
  },
  44249: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_px_py_pz.fe5326b03ed4ddd2ea80.glb"
  },
  44258: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_px_pz.b63b3b4c5b0faa1af889.glb"
  },
  44266: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_py.a9320721784065ac429e.glb"
  },
  44268: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_py_pz.7b102449b962a9de0778.glb"
  },
  44272: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_ny_pz.dacd39cf27fd66fb8d1a.glb"
  },
  44278: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz.ef1c4516e1ffbcf811a2.glb"
  },
  44282: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_px.ab3b6063176991833e75.glb"
  },
  44285: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_px_py.0edbde347f3012476955.glb"
  },
  44294: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_px_py_pz.495a995d9f932d8fab0b.glb"
  },
  44298: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_px_pz.e3e1f48a1d1e5d9ee4a1.glb"
  },
  44300: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_py.dbfc7fb32c140963c08b.glb"
  },
  44304: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_py_pz.81ccfb336084e3fa577b.glb"
  },
  44311: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_nz_pz.cc87f2c598308d562978.glb"
  },
  44315: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_px.9e41b73ef011ffee66ea.glb"
  },
  44318: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_px_py.3d608b17a37b4613167f.glb"
  },
  44322: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_px_py_pz.f1fe2f58bf6e862d9173.glb"
  },
  44327: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_px_pz.94b3d6e4117770f96697.glb"
  },
  44331: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_py.dccb722acc03431af9bd.glb"
  },
  44334: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_py_pz.e4bb2d40a0c1ba9da732.glb"
  },
  44337: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nx_pz.0588de1d3218ea60e964.glb"
  },
  44345: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny.e0d0131e2387d5945f98.glb"
  },
  44352: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz.9006463b1f64dac83a9a.glb"
  },
  44358: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_px.1ede4fe27827979e2e03.glb"
  },
  44364: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_px_py.8bb126fe8da5934dd368.glb"
  },
  44368: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_px_py_pz.404995ea22a8ced61032.glb"
  },
  44370: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_px_pz.67fcc6113bb375cb50a3.glb"
  },
  44379: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_py.00fb5577be690f9e43b3.glb"
  },
  44387: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_py_pz.395661b61d9cbca89e55.glb"
  },
  44395: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_nz_pz.3be10b4d312d728780d2.glb"
  },
  44397: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_px.32492a7c7270b7ce2011.glb"
  },
  44403: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_px_py.df836d7685d4b950d9c6.glb"
  },
  44409: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_px_py_pz.e0ce4eb4b6972e195c51.glb"
  },
  44415: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_px_pz.f60ea06e41627ba57c1b.glb"
  },
  44424: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_py.464a7b3715d9b1c9a72e.glb"
  },
  44432: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_py_pz.973cdc793fb92aa54e54.glb"
  },
  44435: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_ny_pz.fef3705aaecf6f9be119.glb"
  },
  44440: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz.1b240e8ee91a0d50bcee.glb"
  },
  44445: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_px.d30cc078bb9f2a29d268.glb"
  },
  44454: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_px_py.c1123eb5c2f63b3e3412.glb"
  },
  44459: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_px_py_pz.f5da65a138361b2a8709.glb"
  },
  44461: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_px_pz.e1312edf73c98a8ccda9.glb"
  },
  44463: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_py.466cee7ce6fb609e0067.glb"
  },
  44466: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_py_pz.d09739fa3d081b752248.glb"
  },
  44473: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_nz_pz.f87d5ded07da2697aa9c.glb"
  },
  44479: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_px.b7885e6375f5697dd42a.glb"
  },
  44488: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_px_py.cc73936034ae5b4f4cf1.glb"
  },
  44494: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_px_py_pz.a6389b0c323cfae22abc.glb"
  },
  44498: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_px_pz.68ed2bdfd158dc08fd14.glb"
  },
  44500: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_py.7bec0e40bb0ddc06d354.glb"
  },
  44506: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_py_pz.df64db5753465cf582fe.glb"
  },
  44512: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_fluid_pipe_pz.3e445f247d6209e26dfc.glb"
  },
  44519: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_none.959fb60326c0161899f5.glb"
  },
  44521: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx.4a2afed9b2bfdf9e84d5.glb"
  },
  44526: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny.7f8a49da3e5df85d2e05.glb"
  },
  44530: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz.7183a2ad910ac1b8265c.glb"
  },
  44532: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_px.bbdca7e7e719fac8f40a.glb"
  },
  44540: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py.33e9d28887905dae25a0.glb"
  },
  44548: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_px_py_pz.3e4b5e2d710523af450d.glb"
  },
  44550: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_px_pz.86210e41b8794c4c52b6.glb"
  },
  44554: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_py.725970eaab3eb4d77a3a.glb"
  },
  44561: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_py_pz.df04defee063aabe1b73.glb"
  },
  44567: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_nz_pz.c6bc0fc76688d0a555ae.glb"
  },
  44570: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_px.4d09672bb6825b5bbbfc.glb"
  },
  44573: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_px_py.7944c7a0db75e620d730.glb"
  },
  44576: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_px_py_pz.f20f4999f65c57425866.glb"
  },
  44578: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_px_pz.faf8f8529d0ce91fdf4c.glb"
  },
  44585: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_py.2fedfca3f35bfd9e1bb9.glb"
  },
  44593: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_py_pz.dba20102b9f56f990c88.glb"
  },
  44601: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_ny_pz.5d1790a75590383e773f.glb"
  },
  44607: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz.49274c43aeed26fd4ef4.glb"
  },
  44615: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_px.0f605f55ca48a5c38566.glb"
  },
  44620: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_px_py.6df1fee6834ff3ae1af8.glb"
  },
  44627: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_px_py_pz.2f50a237bd408d1e4108.glb"
  },
  44632: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_px_pz.35311a6efb185379d57c.glb"
  },
  44635: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_py.0dbcb74a8e6a8fb91705.glb"
  },
  44642: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_py_pz.db8056ea6e1319f8fa9b.glb"
  },
  44647: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_nz_pz.3a6446eef5f2a19a7c02.glb"
  },
  44651: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_px.f714bdceb7ff8bc2d7c6.glb"
  },
  44658: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_px_py.eff04d4a8f8d04179080.glb"
  },
  44663: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_px_py_pz.dc9261285252e2d87c11.glb"
  },
  44668: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_px_pz.fbe75a80c3962b4c230f.glb"
  },
  44674: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_py.228fef41c76416f85a40.glb"
  },
  44681: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_py_pz.81fb33caf62cd77ece9e.glb"
  },
  44690: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nx_pz.fb6c0915f37d826ecb71.glb"
  },
  44692: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny.72c5fefbc407e3c94d7d.glb"
  },
  44695: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz.8453217dfc81d9fdb4cc.glb"
  },
  44698: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_px.c2ecdfbc9a2258b2c86d.glb"
  },
  44700: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_px_py.b92643b6f97070d606a4.glb"
  },
  44708: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_px_py_pz.8a680ed2ee9d22912920.glb"
  },
  44714: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_px_pz.5caf67dd0ba555991bca.glb"
  },
  44717: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_py.f0b5c8c68b7c2818a273.glb"
  },
  44724: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_py_pz.30bf4c1260a9a927edc7.glb"
  },
  44728: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_nz_pz.e8449324b1596b364cbe.glb"
  },
  44736: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_px.f0fff38f58a9ed5eb8ac.glb"
  },
  44743: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_px_py.eecc9a2ac147fc45443a.glb"
  },
  44750: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_px_py_pz.3258fa80a7509e535947.glb"
  },
  44759: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_px_pz.ea5abb502c75a940d968.glb"
  },
  44764: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_py.4ac410ed28621878d2b1.glb"
  },
  44773: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_py_pz.52cef6879cd15e96ca1b.glb"
  },
  44779: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_ny_pz.32fd00ca42bc17e2c68e.glb"
  },
  44783: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz.ca2c954a587efe162c35.glb"
  },
  44790: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_px.3bcea64e47319b7b880f.glb"
  },
  44795: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_px_py.f3e6e6ba5278c97914bf.glb"
  },
  44798: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_px_py_pz.558697ec67340fc619af.glb"
  },
  44800: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_px_pz.1671d3e52c6ef989150c.glb"
  },
  44803: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_py.eb93ca9526bf9d09ba86.glb"
  },
  44811: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_py_pz.de8a55687ae9be5ba4d9.glb"
  },
  44817: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_nz_pz.f6103bfd1cdf00ee3161.glb"
  },
  44821: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_px.a3a44662d7f1190bf941.glb"
  },
  44829: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_px_py.405ca5ab6d9abaf15acf.glb"
  },
  44833: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_px_py_pz.6fc123c7df272fe11b5d.glb"
  },
  44840: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_px_pz.0a315850e3bbae5f4e65.glb"
  },
  44848: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_py.27580a9a7a6a5e467959.glb"
  },
  44856: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_py_pz.b7029c4acc73fe990edc.glb"
  },
  44864: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/baf2_water_pipe_pz.524026c434bf1312ee9a.glb"
  },
  44866: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beam_arm.b18aa154bc2c6abe6fc8.glb"
  },
  44872: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beam_arm_mirrored.51021c5f58fbb0547768.glb"
  },
  44881: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bebek_bebek_bebek.213c53f222e7fa6eabb2.glb"
  },
  44887: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bin.9fa9eefc2e94c7d9b671.glb"
  },
  44895: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bobino_musculino.5299a37ff20b22d4b554.glb"
  },
  44900: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bobzilla.b6343c4b9c8fd834bd27.glb"
  },
  44904: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/boiling_pot.8c86fd13aab6c90f8c6e.glb"
  },
  44913: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bone_antlers_model.2263c631b87b5497cf0b.glb"
  },
  44917: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/boss_target.7461ecf8acb8547cbe45.glb"
  },
  44923: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brra_brra_pachim.877c62f4a0a46afdfac9.glb"
  },
  44928: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_barrel_back.0e93895efce3885c17c7.glb"
  },
  44935: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_barrel_front.2b26819e9934a7658fa8.glb"
  },
  44937: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_bottom_back.315dd2aba0300464ac4e.glb"
  },
  44942: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_bottom_front.8bfe273a143f4b48c4fa.glb"
  },
  44945: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_top_back.251ffa29da6924db15be.glb"
  },
  44948: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cannon_top_front.ae1de6c9084d8b5d7c8d.glb"
  },
  44952: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/capitano_explovissimo.f892d427e38849f88e55.glb"
  },
  44956: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cappuccino_ninjino.d8d33979c4bc5bb10825.glb"
  },
  44959: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_black_model.4e2ca86172657d75d22d.glb"
  },
  44964: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_blue_model.d1390a0d4896851445b2.glb"
  },
  44973: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_brown_model.5f252fa89cc2a59aefa8.glb"
  },
  44981: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_cyan_model.2ea1e9bf8e018ead4a5a.glb"
  },
  44989: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_gray_model.9a587763cbf12b2f28e6.glb"
  },
  44991: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_green_model.f14e23acb31944480b22.glb"
  },
  45e3: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_light_blue_model.3063d4f50964e9d4c3d7.glb"
  },
  45007: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_light_gray_model.b94a423a18f30bf0a5b6.glb"
  },
  45010: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_lime_model.7768b17ad76779125eee.glb"
  },
  45017: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_magenta_model.54a3fc9bd4d62c98a6db.glb"
  },
  45024: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_orange_model.1973f2055fec73ac57e6.glb"
  },
  45026: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_pink_model.3683ae623bddd233a5fe.glb"
  },
  45034: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_purple_model.f37a0e1526c2ca4e2a7d.glb"
  },
  45039: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_red_model.cfd6e343a3fab0b6e25a.glb"
  },
  45046: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_white_model.6a52cd82a15248f76f1a.glb"
  },
  45053: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carpet_yellow_model.c7b7dce1e3573d9fd34f.glb"
  },
  45060: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage0_lava_model.de57c195bd97f3fb2e16.glb"
  },
  45064: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage0_model.fc6dd2ad394c327c2dc1.glb"
  },
  45068: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage1_lava_model.6197d89c39f4c13f42b9.glb"
  },
  45075: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage1_model.30ab224de60dd6576dda.glb"
  },
  45078: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage2_lava_model.81db0a3a753160a5993f.glb"
  },
  45083: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage2_model.cc0b8a17019285e9e191.glb"
  },
  45085: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage3_lava_model.906805ce52ff01217c09.glb"
  },
  45090: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage3_model.0b958f72eb984d0b0fee.glb"
  },
  45093: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage4_lava_model.94d5af3a2e78c1bf5475.glb"
  },
  45101: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage4_model.c52492e3df2205ce4273.glb"
  },
  45110: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage5_lava_model.a7136e0c606fe579056e.glb"
  },
  45115: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage5_model.d90ff33f15e468d91a75.glb"
  },
  45117: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chili_pepper_stage6_lava_model.36852b90667287605903.glb"
  },
  45126: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chimpanzano_bananano.2d445f2a0eb256e13a97.glb"
  },
  45130: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chopping_board.3c57d470d586e1dfeb2c.glb"
  },
  45137: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/crystal.dba112fa8a8394d8b1d5.glb"
  },
  45140: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/eclipse_dial.956489de2f80d089e04c.glb"
  },
  45149: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nx_ny.083a53c6f1c24a9757f0.glb"
  },
  45154: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nx_nz.801e1824437a8ace684b.glb"
  },
  45156: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nx_py.65f1e3264ff2283386bf.glb"
  },
  45161: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nx_pz.a448f59a6bb183c0e39c.glb"
  },
  45164: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_ny_nz.ecdf141d7d1653019c32.glb"
  },
  45169: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_ny_px.5f220c72639bc6ec1734.glb"
  },
  45177: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_ny_pz.4d504cfec957af83647e.glb"
  },
  45182: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nz_px.9b96308cd4ac5cd58ada.glb"
  },
  45190: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_nz_py.8465f28b8c684d7fb829.glb"
  },
  45192: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_px_py.fd91d6d5eb2fc91daa8b.glb"
  },
  45194: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_px_pz.e917172f979aa356014a.glb"
  },
  45197: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_elbow_py_pz.218c1542fa9adaeb5ba4.glb"
  },
  45205: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_nx.8bb0b2ad8f8644508347.glb"
  },
  45211: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_ny.b4afa7545f92319c62a3.glb"
  },
  45217: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_nz.c6ee96868c48ac35f608.glb"
  },
  45224: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_px.65915d43490b1937e3ba.glb"
  },
  45233: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_py.444a71977c0c1fbe4b5f.glb"
  },
  45239: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_end_pz.12c7d5085dec5f84915b.glb"
  },
  45245: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_isolated.97cfc28c33aacdb3e72a.glb"
  },
  45251: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_straight_x.e2a817762316f51651bc.glb"
  },
  45258: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_straight_y.bfa34910a1cde4b98d43.glb"
  },
  45264: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/extractor_pipe_straight_z.b47dc06b45b4886a5c6e.glb"
  },
  45269: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_nx.abdb1f2b92e67ec7a6f5.glb"
  },
  45277: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_ny.91a758aaffc187ebf84e.glb"
  },
  45280: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_nz.eaedcc3e56b6397a56bd.glb"
  },
  45287: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_px.f67d46338784b81dfa00.glb"
  },
  45289: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_py.6e32ecec254e8c9f62b9.glb"
  },
  45295: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/filter_pipe_input_pz.eaa83a9b426aefb06f04.glb"
  },
  45297: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/floor_quarters.a7383fb07de75c78acff.glb"
  },
  45299: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/football.4ed7b444dffd04850e1a.glb"
  },
  45305: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/frying_pan.88d74257d6db5f22a9dd.glb"
  },
  45312: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/glowing_mushroom.8a55fddc4cc5af4b0bb7.glb"
  },
  45315: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/glowing_mushroom_wall.77bbad965e1a6eb9b9eb.glb"
  },
  45321: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/gold_antlers_model.5033cbd20d5db323bd18.glb"
  },
  45326: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/hob_boiling.7aa8a7f33fcfaabb3c38.glb"
  },
  45329: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/hob_frying.c0d5b6b56a8e0d37c719.glb"
  },
  45337: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/il_wizardini_del_porko.16afd57bb54527352f48.glb"
  },
  45341: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/job_application.c8c3322a4d5b76f401c4.glb"
  },
  45349: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/john_beef.f285b5bbbe3270e84f4e.glb"
  },
  45358: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jump_pad.31f58abe195cbf81d544.glb"
  },
  45361: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jump_pad_strong.199b102ca146e54d6f26.glb"
  },
  45367: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jump_pad_super.01623abb40ae27b2f5c3.glb"
  },
  45375: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jump_pad_weak.9865db358d387cdb3808.glb"
  },
  45384: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/kitchen_worktop.93738fa632ca0cd3c887.glb"
  },
  45387: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/landing_pad.6cf815cc5adc6357aa7e.glb"
  },
  45389: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lantern.b4f5e080292b6bcec9de.glb"
  },
  45395: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lantern_wall.d700566f3dbc7c5edfb5.glb"
  },
  45400: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lily_pad_model.fe52332121384cb7a7c1.glb"
  },
  45409: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lucchia_blocchi.cbeaea2490a784825f22.glb"
  },
  45417: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_nx.8363ba1ae35163cc614b.glb"
  },
  45419: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_ny.2d49f0baa47b9e673cd9.glb"
  },
  45421: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_nz.fa00b8fe22439a87a135.glb"
  },
  45427: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_px.0dbb5a9dfc66657f41b0.glb"
  },
  45434: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_py.ea13e5adbf80924e036f.glb"
  },
  45440: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/merger_pipe_output_pz.9dd053b2f431de48e28d.glb"
  },
  45442: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/monsieur_bedwar.11e13eee2b04c9fa7ec3.glb"
  },
  45450: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mortar_goblin.b50e40421dd86c0d1024.glb"
  },
  45454: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing.b20df80c01a72cbebe5b.glb"
  },
  45458: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_bottom.b1a0883ecb1db88792a5.glb"
  },
  45465: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_bottom_left.8c07a91fec14b3745eb4.glb"
  },
  45470: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_bottom_right.1b09f2bb2d6f0822151e.glb"
  },
  45478: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_horizontal.6a5ef177dfb97d0f375f.glb"
  },
  45480: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_horizontal_left.be67a73bf033df090585.glb"
  },
  45484: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_horizontal_right.5838e354cd916a6852ca.glb"
  },
  45489: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_left.11a2206b2f5b12e2068d.glb"
  },
  45498: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_leg.838d46ae86129005cf46.glb"
  },
  45500: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_right.5f3dcaaf00c0d002a496.glb"
  },
  45503: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_single.e6f346b9cfaccbdb42be.glb"
  },
  45508: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_top.a79e1fd678b8fe09c969.glb"
  },
  45513: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_top_left.05c9e273ed39b69b3f7e.glb"
  },
  45522: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_top_right.211791c2f6cdaf03fa17.glb"
  },
  45525: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_vertical.35aea38fcfa1b3fb9bf4.glb"
  },
  45528: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_vertical_bottom.ada88480f62e41f1dab4.glb"
  },
  45536: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_standing_vertical_top.5dc2db1fee41788dbb17.glb"
  },
  45540: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall.ff9a27ba5731df12e44d.glb"
  },
  45545: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_bottom.2d29aaf8b2a08f409c26.glb"
  },
  45553: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_bottom_left.5260e03cd66029355bcc.glb"
  },
  45561: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_bottom_right.3c7faeeb89cf5fd8d3a0.glb"
  },
  45568: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_horizontal.6a2c8562a4ea173fbdcf.glb"
  },
  45574: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_horizontal_left.f5209b80e6eadef6c78c.glb"
  },
  45583: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_horizontal_right.a39a51b5f9417a5cd42b.glb"
  },
  45590: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_left.6e5638da4acaefd2b669.glb"
  },
  45598: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_right.b8cde43e7de962bc619b.glb"
  },
  45606: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_single.e18ee19c8ff0b65d473a.glb"
  },
  45612: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_top.a639d40d4c6d0036db3d.glb"
  },
  45621: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_top_left.b988fb63ca89b93a1707.glb"
  },
  45628: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_top_right.849243aaf2ad5ae08bb7.glb"
  },
  45632: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_vertical.b0cb186a9af1969e972a.glb"
  },
  45636: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_vertical_bottom.0e82577bb9aab80792b5.glb"
  },
  45642: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/noticeboard_wall_vertical_top.b98b5902779b57fbf71e.glb"
  },
  45649: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nx_ny.89d1b6e36a353106be6b.glb"
  },
  45652: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nx_nz.d2945b07b0dd4b771758.glb"
  },
  45656: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nx_py.d0109ae52ed03aa6715f.glb"
  },
  45664: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nx_pz.bfc5f0b1ae6f9c18a40f.glb"
  },
  45667: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_ny_nz.8304c11ee0165631f127.glb"
  },
  45671: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_ny_px.bb670945340fa6f8f288.glb"
  },
  45673: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_ny_pz.1e85cf482585d84e131b.glb"
  },
  45677: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nz_px.7be0416b3e45d99c5ea7.glb"
  },
  45683: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_nz_py.6287e8f1c1697d935a4f.glb"
  },
  45685: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_px_py.ae824fd68bdb60d85305.glb"
  },
  45689: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_px_pz.8ff41b9727fa9c40a08c.glb"
  },
  45691: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_elbow_py_pz.2515de3d522a06906080.glb"
  },
  45694: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_nx.4bb1d3f0432ed2af5dfa.glb"
  },
  45697: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_ny.0499413fa7b695d8a259.glb"
  },
  45703: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_nz.746b3dcd8ba70dbf8517.glb"
  },
  45711: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_px.5cbbfe1ad98dd922a45f.glb"
  },
  45720: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_py.3115f8060017dfe0962a.glb"
  },
  45728: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_end_pz.6a4dabb47d14533ac501.glb"
  },
  45730: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_isolated.a615f633db853fd14881.glb"
  },
  45733: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_straight_x.134b8b3ba65a01487e33.glb"
  },
  45740: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_straight_y.0e2eb7b04f7deb08a5ee.glb"
  },
  45743: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pipe_straight_z.d100e5801643952af4d3.glb"
  },
  45751: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_full.566394d4c3c00b12ed5c.glb"
  },
  45753: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northeast_1.1b78d84678e0822df680.glb"
  },
  45759: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northeast_2.7cc566556ea957a48357.glb"
  },
  45768: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northeast_3.6c46832fa06619771f01.glb"
  },
  45771: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northeast_4.8fff6428090594ba7ca3.glb"
  },
  45775: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northeast_5.c4183e7f8f4860746f01.glb"
  },
  45783: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northwest_1.4aece19484ab7481c0f8.glb"
  },
  45792: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northwest_2.bea9981c3000eae9e630.glb"
  },
  45794: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northwest_3.56c2dc6b11ea84446c6c.glb"
  },
  45801: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northwest_4.d0f3dfd5e400daa181a6.glb"
  },
  45803: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_northwest_5.af721581e1c9e25fcc90.glb"
  },
  45807: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southeast_1.75bc6b110264eb07925f.glb"
  },
  45812: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southeast_2.fd011c1abced7d2b8f75.glb"
  },
  45814: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southeast_3.4aaae59bf5829933e5a5.glb"
  },
  45822: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southeast_4.cdf4a53d1cbba7d2edbd.glb"
  },
  45829: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southeast_5.547ea7fbca890f5ad93c.glb"
  },
  45836: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southwest_1.6f2e562cc9f76e48d080.glb"
  },
  45843: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southwest_2.9e8538c937feed7ece7c.glb"
  },
  45845: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southwest_3.4b18da35e90928993303.glb"
  },
  45851: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southwest_4.73af81acdef9ce350c5e.glb"
  },
  45855: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rocket_southwest_5.a7eb6222be481c158bb8.glb"
  },
  45861: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rune_sigil.9b59b6bef68661218e8a.glb"
  },
  45865: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/slicing_board.e1532c6c1c707054a75e.glb"
  },
  45871: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/slime_trail.6ff9def1822a8515033d.glb"
  },
  45879: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/splitter_pipe.30bb97ca16337e8e94c1.glb"
  },
  45886: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch.1e6b6b8a1126549115db.glb"
  },
  45892: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_black.aa4c96ef329864314118.glb"
  },
  45896: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_blue.a4e5a315b5d19facff2b.glb"
  },
  45904: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_brown.2492f429b119d90eaabf.glb"
  },
  45911: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_cyan.f70fa0acefa4438ca1ef.glb"
  },
  45919: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_gray.4bacfaaf232b69d26451.glb"
  },
  45924: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_green.0608d22726ca2777c95f.glb"
  },
  45932: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_light_blue.62e3685506970aa03c64.glb"
  },
  45935: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_light_gray.db83690e2a44822add32.glb"
  },
  45939: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_lime.b46ac9e8988e35c3288c.glb"
  },
  45945: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_magenta.de7355c3d8987a07f857.glb"
  },
  45953: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_orange.03ed5c026827b3cf2013.glb"
  },
  45959: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_pink.5db80ba10ee7475d2600.glb"
  },
  45963: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_purple.d0b7146906e60d1fd2d2.glb"
  },
  45972: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_red.67e16d0a0c6f53e7a265.glb"
  },
  45974: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall.72812b0fd7c11d446243.glb"
  },
  45979: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_black.a14c730eed9b81f210ea.glb"
  },
  45984: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_blue.11c6d1bc0a5df54f2f52.glb"
  },
  45991: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_brown.4e4dd4868cf49436301b.glb"
  },
  45998: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_cyan.7b7c2d579c22524bf6aa.glb"
  },
  46001: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_gray.e8c4c559d0cd016080f3.glb"
  },
  46008: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_green.52ecdfc1f31282d86f11.glb"
  },
  46010: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_light_blue.5db342be65a55259aa06.glb"
  },
  46019: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_light_gray.a9f2c6d92a3724f542de.glb"
  },
  46026: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_lime.d40ae3542fd492421b17.glb"
  },
  46035: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_magenta.0c7af89f15198e706870.glb"
  },
  46040: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_orange.d8ef2a8afa619dcbb12b.glb"
  },
  46045: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_pink.0706debd37cea30009bf.glb"
  },
  46052: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_purple.42439e46c9b24df1caa1.glb"
  },
  46055: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_red.368d969024275fa15a18.glb"
  },
  46064: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_white.5abd9dc1f94eb8df8f30.glb"
  },
  46073: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_wall_yellow.6efed0f8cb8562199685.glb"
  },
  46077: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_white.c2bdee6bcb7a255e54b3.glb"
  },
  46084: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_yellow.ae9e9c66a1e864aaf031.glb"
  },
  46086: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/twirlina_cappucina.dde85128f997c1c0c306.glb"
  },
  46091: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/ufo.617db0748f22cfa06954.glb"
  },
  46098: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/vending_machine_bottom.65bbb604112fa01806b4.glb"
  },
  46106: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/vending_machine_top.0cd950e833ce37f0078b.glb"
  },
  46115: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_black.7ec704f92ce13118854f.glb"
  },
  46121: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_blue.3fdf12cfb1bbe5df046f.glb"
  },
  46130: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_brown.f99e95495efa3b445f3b.glb"
  },
  46136: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_cyan.408c34abe40c4e583b69.glb"
  },
  46145: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_green.221d9d94948ba07f0146.glb"
  },
  46153: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_grey.9aec5ad30559daeeacb9.glb"
  },
  46158: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_light_blue.93df0e67d5b31edb67be.glb"
  },
  46164: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_light_grey.cac0d9e0d33fa0302c0b.glb"
  },
  46167: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_lime.250cf152a4c53c1ea267.glb"
  },
  46174: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_magenta.789452a86659bce5f701.glb"
  },
  46179: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_orange.34009e0bedfd3effd879.glb"
  },
  46183: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_pink.205d0a0f18ca0e567d9d.glb"
  },
  46191: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_purple.53d0ee9cce40b3f48b5b.glb"
  },
  46195: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_red.715fb6f8c739753fecfc.glb"
  },
  46203: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_white.f1c1812799645251bad6.glb"
  },
  46209: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wave_yellow.5ebbbecde58c9cf1c0d4.glb"
  },
  46218: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheel.90ee13b9d828e804dee1.glb"
  },
  46223: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nx_ny.b7f4b211f73095120e64.glb"
  },
  46227: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nx_nz.59840571f949f7bc8768.glb"
  },
  46232: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nx_py.d4d27e93e1b31e22f79a.glb"
  },
  46240: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nx_pz.de207cefcd8316ec8fcd.glb"
  },
  46242: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_ny_nz.acdc2b53b3ccff56ccb4.glb"
  },
  46251: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_ny_px.f24ba6eced5f99b313a7.glb"
  },
  46258: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_ny_pz.f8520178fb95b616edd5.glb"
  },
  46267: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nz_px.d97c2eb6671a072d0a59.glb"
  },
  46274: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_nz_py.6b6c81abcfca24a7ab43.glb"
  },
  46281: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_px_py.7492fefcc9a22a895dfc.glb"
  },
  46288: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_px_pz.9934c295bea0122d439d.glb"
  },
  46297: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_elbow_py_pz.4ccddb5f0bc632ff3084.glb"
  },
  46305: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_nx.38726e55cc09c7f851e3.glb"
  },
  46309: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_ny.9704daa44c9d4579056a.glb"
  },
  46318: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_nz.c2763322027fba73cc8e.glb"
  },
  46325: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_px.703db8100fe7cf8cfdad.glb"
  },
  46332: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_py.8f969bdae632686ac91c.glb"
  },
  46339: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_end_pz.fa6d20d5fb9c7397c595.glb"
  },
  46346: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_isolated.db20b8ec3a9d3a112352.glb"
  },
  46355: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_straight_x.cf855e04a4511b9d2d5a.glb"
  },
  46360: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_straight_y.830de69a478259bbbcb1.glb"
  },
  46369: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_straight_z.c10b101b6493639cadf0.glb"
  },
  48868: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/allium.f1d3e796bfcb373fe1b5.png"
  },
  49820: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/alloy_kiln_top.0d64a8c946004b7849bb.png"
  },
  50018: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/aspen_door_bottom.77c3608b449f7420a6d5.png"
  },
  49902: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/aspen_door_top.69844a9807e427316500.png"
  },
  48877: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/aspen_sapling.70b524dbb33402ad786e.png"
  },
  48879: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/attached_banana_stem.dea182236c8ed756a26f.png"
  },
  48887: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/attached_banana_stem_wrapper.a74f40cfdeb0cce7af8e.png"
  },
  48890: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/attached_melon_stem.25f734cf50ce7da42ec3.png"
  },
  48894: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/attached_melon_stem_wrapper.250a4219f803318c75cd.png"
  },
  49488: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/auto_bench_top.c8e545776e504211b183.png"
  },
  48896: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/autumn_fern.7add7b408d40f9b1198a.png"
  },
  48898: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/azure_bluet.3bb3fd07608ff837c974.png"
  },
  49910: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/banana_block_bottom.2a0a94226a1cd31d052c.png"
  },
  48900: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/banana_stem.a74f40cfdeb0cce7af8e.png"
  },
  48906: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beetroot_plant_stage0.701b11f9e3dece9dc677.png"
  },
  48913: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beetroot_plant_stage1.ee6a1e21484824a02235.png"
  },
  48917: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/beetroot_plant_stage2.fb948eadbea5684fe90f.png"
  },
  50004: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/belt_tunnel_exit_top.91bf68125018003eadfe.png"
  },
  49731: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/belt_tunnel_top.d5c39e4082a79dceacf4.png"
  },
  48926: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/berry_bush_stage0.09ac0a367c3abb28554e.png"
  },
  48935: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/berry_bush_stage1.ae24d9e0ca4573439543.png"
  },
  48942: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/berry_bush_stage2.34cec7246bb15ab6464a.png"
  },
  50084: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/black_glazed_terracotta.e352b206100b41877123.png"
  },
  49947: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/black_spawn_block_top.19ff0671d98f45ed25ed.png"
  },
  49609: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/black_stained_glass.e12bff980d21df8ed15b.png"
  },
  50095: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blue_glazed_terracotta.59ca448a380280079fde.png"
  },
  48946: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blue_orchid.e4d9386ac9e9c6724c49.png"
  },
  49965: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blue_spawn_block_top.d01a14894496cec4bd2c.png"
  },
  48950: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blueberry_bush_stage0.4fff8348c62acdeef329.png"
  },
  48953: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blueberry_bush_stage1.f51f91487636ea3c2344.png"
  },
  48959: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/blueberry_bush_stage2.3f1ba2b2af712d0a678a.png"
  },
  50077: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/board_full.51012967051441d655f0.png"
  },
  49662: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brown_glazed_terracotta.195a379114520d8bebb8.png"
  },
  48965: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brown_mushroom.6a75c1838db883657f2b.png"
  },
  49853: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brown_spawn_block_top.7203ef0370d10b4ea83b.png"
  },
  49585: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/burner_drill_top.327a04f28af7e8d3a3f7.png"
  },
  49676: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cactus_side.f44506929a369ea16364.png"
  },
  49954: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/camel_painting_art.3467288986af902ea3ae.png"
  },
  50035: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/camel_painting_art_option2.97d96b4e06ccfd508bf4.png"
  },
  48967: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carrot_plant_stage0.3ca5c7654c53bb77ef59.png"
  },
  48969: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carrot_plant_stage1.4e9b5481c07508a4af12.png"
  },
  48977: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carrot_plant_stage2.6448f6f9ca9c85c9d5a5.png"
  },
  48982: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/catnip.2d59e5f426014213097b.png"
  },
  48987: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cauliflower_plant_stage0.56fbf3896a2598fe226b.png"
  },
  48994: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cauliflower_plant_stage1.335c6c67d2617cd61e09.png"
  },
  48999: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cauliflower_plant_stage2.5238ee0e7a9daf763e05.png"
  },
  50147: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cedar_door_bottom.3f1ea002b95bba9366b5.png"
  },
  49940: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cedar_door_top.f5624bebbfbbe31ee2c1.png"
  },
  49001: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cedar_sapling.7eb472555ac15f2c7d8a.png"
  },
  49557: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/centrifuge_top.ea55fcc4f5cf007f9607.png"
  },
  49521: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/checkpoint_block.56ad5a4f7f2fe5c77244.png"
  },
  49836: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cherry_door_bottom.084d9df0a2e70e01f925.png"
  },
  49867: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cherry_door_top.ca128b8cdd351da5237f.png"
  },
  49003: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cherry_sapling.fffb87301cd4a74137fe.png"
  },
  49922: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/chest_top.835a84c23ea1ccc51e49.png"
  },
  49514: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cobblestone_mossy.01889a92f00bf5214dc3.png"
  },
  49011: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cobweb.9e0d381641ba6a1f1d53.png"
  },
  49014: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/coffee_plant_stage0.aad94d45ff9205a0b893.png"
  },
  49019: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/coffee_plant_stage1.6925958c8be7f0d73049.png"
  },
  49021: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/coffee_plant_stage2.832ff40be200d2ed5724.png"
  },
  49895: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/collider_top.c2015f5857885d440962.png"
  },
  49644: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/condenser_top.6036395d1b2deba98fd0.png"
  },
  49450: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/coolant_mixer_top.3ae29b3909493e845e10.png"
  },
  49027: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage0.7d1542728a061c60e27c.png"
  },
  49031: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage1.4385d800bda0cb812677.png"
  },
  49040: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage2.9ce23c9a315366c8fb0c.png"
  },
  49048: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage3.549b10d86fd6d935e04c.png"
  },
  49057: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage4.8089c4d097969c9f8226.png"
  },
  49061: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/corn_stage5.ae46e59459e23d47c53f.png"
  },
  49068: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cornflower.5dffa4efb19990928255.png"
  },
  49074: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cotton_plant_stage0.246ca0e73d88cebd3299.png"
  },
  49082: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cotton_plant_stage1.48f3651c69f090a10a44.png"
  },
  49085: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cotton_plant_stage2.90a27c9bfc2871b19465.png"
  },
  49093: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cotton_plant_stage3.ebfce7f595777e193710.png"
  },
  49887: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/crop_harvester_top.aac6e464fecc85fad376.png"
  },
  49626: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/crusher_top.22a572674aebf239c8a5.png"
  },
  49912: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/crystal_vat_top.4a74d712b2f31d7ffa92.png"
  },
  49618: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/custom_lobby_block_top.fa8eca29a43acecb3c1c.png"
  },
  50118: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cyan_glazed_terracotta.12e668d83d4ff6dd1a9d.png"
  },
  50057: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/cyan_spawn_block_top.8e8653ce617f2f08101f.png"
  },
  49096: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dandelion.1f8c4b42cb75491d1dbf.png"
  },
  49100: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dead_bush.1ba169f3ecbdd9546b12.png"
  },
  50043: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/deep_drill_top.9606e35119db0f884dfa.png"
  },
  49537: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_0.7fd6d0a2eade998ed079.png"
  },
  49528: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_1.6cb2d757c663046683cd.png"
  },
  49553: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_2.39c12ee9bab5846e2bab.png"
  },
  49546: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_3.3c8a2ddc4ea1bfd61055.png"
  },
  49483: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_4.2dd2cb853825c98ed904.png"
  },
  49480: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_5.a61b97c29628a6d258cf.png"
  },
  49501: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_6.631aded6f7705596c423.png"
  },
  49493: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_7.11442a780157758b2f9b.png"
  },
  49567: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_8.8de000c2ecadd8a7d32c.png"
  },
  49559: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/destroy_stage_9.b628ac3539f0c5788122.png"
  },
  49655: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/electric_drill_top.c3bbb4fbef10fbdb75b5.png"
  },
  49109: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fallen_pine_cone.666ae278dfece2f5f54f.png"
  },
  49598: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/football_block.2163f2e99f10969aa852.png"
  },
  49691: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/gray_glazed_terracotta.3acbabb47afe933c9e0d.png"
  },
  49845: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/gray_spawn_block_top.bb96b2f595d3c991808b.png"
  },
  49669: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/green_glazed_terracotta.e2e4bb19f629f2fab011.png"
  },
  50012: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/green_spawn_block_top.d785b09c3ee0537c8412.png"
  },
  49740: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/iron_chest_bottom.45762a27230a38c08e0c.png"
  },
  49918: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/iron_chest_top.9378df2839f1300ee2ab.png"
  },
  49698: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jungle_door_bottom.3de04a4b0c8a6cc3b500.png"
  },
  49808: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jungle_door_top.091112a6f1c5bc5daf1d.png"
  },
  49116: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jungle_sapling.80af0c3d116342bb10e7.png"
  },
  49119: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jungle_tall_grass_bottom.e1f103c983be99d8673f.png"
  },
  49124: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/jungle_tall_grass_top.73290a2f6ccf0a351750.png"
  },
  49128: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lettuce_plant_stage0.61bb8697576c8d2ec2d4.png"
  },
  49136: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lettuce_plant_stage1.a4fd6e8a34e339f87394.png"
  },
  49139: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lettuce_plant_stage2.0787bb4f588e5c42c47d.png"
  },
  49647: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/light_blue_glazed_terracotta.a94a553a7f669f30e083.png"
  },
  49467: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/light_blue_spawn_block_top.f419ebbe177b2f84b066.png"
  },
  49994: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/light_gray_glazed_terracotta.0e9ff5173786ae6b9091.png"
  },
  49594: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/light_gray_spawn_block_top.24eb46e4041bc46655fe.png"
  },
  49828: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/light_gray_stained_glass.4a5893d03148ce0389d6.png"
  },
  49142: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lily_of_the_valley.5252d9ae741dc8dc75a3.png"
  },
  50115: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lily_pad.6200083b756c3de49a3a.png"
  },
  49583: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lime_glazed_terracotta.a79304d4e29fdd0fece0.png"
  },
  49805: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/lime_spawn_block_top.7baf535efbf34967f621.png"
  },
  49970: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/magenta_glazed_terracotta.dff2219d98fde64710f9.png"
  },
  50029: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/magenta_spawn_block_top.a63f68c6a57e1d1e79f5.png"
  },
  49570: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mango_door_bottom.f10bf92c4d3b3c609f9e.png"
  },
  49855: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mango_door_top.2a3d2693e5e184523ee3.png"
  },
  49144: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mango_sapling.cc1331b58aa3cb30a4df.png"
  },
  49624: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/maple_door_bottom.94f27cb29279622bda1e.png"
  },
  49737: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/maple_door_top.d44aa506efdd63d3ab8e.png"
  },
  49148: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/maple_sapling.592455846ade7642267d.png"
  },
  49157: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/melon_stem.c728ad74f87544144f7a.png"
  },
  50135: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mob_farm_top.ec4a5a96b506c1434590.png"
  },
  49747: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/moonstone_chest_bottom.775190e522de9869378b.png"
  },
  49579: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/moonstone_chest_top.84c343c67b866ae67727.png"
  },
  49159: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/net.d475635049459ae3f79f.png"
  },
  49796: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/orange_glazed_terracotta.1bbdee0310f62d8d539f.png"
  },
  49722: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/orange_spawn_block_top.8d6dc5a642bc70d9325e.png"
  },
  49164: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/orange_tulip.e718114316934958b914.png"
  },
  49167: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/oxeye_daisy.ad1246a1daa7482659c3.png"
  },
  49734: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/palm_door_bottom.ce50b436e4f2209d4301.png"
  },
  49759: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/palm_door_top.cd7dbb764cf674fc1ce0.png"
  },
  49172: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/palm_sapling.5fc6b3910fbff5f7a4d7.png"
  },
  49180: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/parsnip_plant_stage0.2bc7dac8e8a3f14d908e.png"
  },
  49186: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/parsnip_plant_stage1.7e3b648c278c29b5f64a.png"
  },
  49194: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/parsnip_plant_stage2.d6b992467cb774ad7944.png"
  },
  49616: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pear_door_bottom.3a208aa390fd4a5d5cad.png"
  },
  49961: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pear_door_top.15589d201da9a5901cbe.png"
  },
  49198: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pear_sapling.2ce83819d5f323b508ee.png"
  },
  49872: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pine_door_bottom.b5915523060d64916e58.png"
  },
  49858: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pine_door_top.fab478f86f27aebae6f4.png"
  },
  49200: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pine_fern.9246ba38000c33971c01.png"
  },
  49207: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pine_grass.9339a2186b62aeb03004.png"
  },
  49210: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pine_sapling.d0610704a84849c99e66.png"
  },
  49877: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pink_glazed_terracotta.13d73734274447b1af96.png"
  },
  49793: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pink_spawn_block_top.97528a0ba6f65aa9ed1d.png"
  },
  49215: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/pink_tulip.f6463eb4309d4df8c87c.png"
  },
  50066: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/plant_cacti_by_arthur.85c69d2486a4eb1def2c.png"
  },
  50031: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/plum_door_bottom.1f24b93ce57192364438.png"
  },
  49707: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/plum_door_top.9cf00530965693a3081d.png"
  },
  49218: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/plum_sapling.2c777962832e4c8e1e82.png"
  },
  49224: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/poppy.186306dc2add85b7d191.png"
  },
  49229: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/potato_plant_stage0.768a80a450537d9cd8b3.png"
  },
  49235: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/potato_plant_stage1.34dd9255d4b7102cde08.png"
  },
  49242: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/potato_plant_stage2.9dc305c0bbd670b36a70.png"
  },
  49874: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/press_top.a6ce196f8d2e836ace20.png"
  },
  49884: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/purple_glazed_terracotta.68dca8e4917bf52f3355.png"
  },
  49603: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/purple_spawn_block_top.e2685fe6babda00c0501.png"
  },
  49973: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/radar_screen0.b432239839e3aa20b22d.png"
  },
  49977: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/radar_screen1.56f9b545957c73806acf.png"
  },
  49982: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/radar_screen2.ad7e4fc5a79d47a85dfa.png"
  },
  49989: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/radar_screen3.8016fc79f13a3a7c6e11.png"
  },
  49640: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/recycler_top.9c08c0ca903cda87e6fc.png"
  },
  49246: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_cabbage_stage0.440c69d91e5aa9845bdb.png"
  },
  49251: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_cabbage_stage1.69948ea7388647e9e3f2.png"
  },
  49255: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_cabbage_stage2.d9d440108228c556354e.png"
  },
  49714: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_glazed_terracotta.f0f5d12767d6e1159ffc.png"
  },
  49259: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_mushroom.3f8d0b597caf1a064b78.png"
  },
  50142: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_spawn_block_top.eae39e7b28a0287053a7.png"
  },
  49262: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/red_tulip.dc171a26716ddeb5724a.png"
  },
  49270: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage0.8358a53a4246616aef7e.png"
  },
  49771: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage1.86598ca8635d9a144c8a.png"
  },
  49275: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage2.fbc861305666b89f9e76.png"
  },
  49278: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage3.5f0706efb3bb442e8fd7.png"
  },
  49286: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage4.90b3b74d7bc433ae2f3e.png"
  },
  49288: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage5.56c14537857b4f0d6e93.png"
  },
  49297: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage6.312c797dda5c461ee124.png"
  },
  49301: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/rice_stage7.0c233dd7fa284c3b1bfd.png"
  },
  50080: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sea_lantern.a4caabfe4e3d6e111697.png"
  },
  49306: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/shadow_rose.9780b0d37b88f705d599.png"
  },
  49780: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/shatter_mill_top.34e724db72bc524637ef.png"
  },
  49507: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/shop_trader_spawn_top.b89bbfa04449132a4df4.png"
  },
  49459: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/shop_wizard_spawn_top.dc19f94e04a00a028663.png"
  },
  49753: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sky_tap_top.1d3b9fc97cb1e027b0c4.png"
  },
  49310: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/small_cactus.db4b875acd802ae1191b.png"
  },
  49453: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/smelter_top.d0d1b051b86d8b3ef603.png"
  },
  50025: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spectral_door_bottom.2ad57b67abede2a676e2.png"
  },
  50048: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spectral_door_top.43cd7de0f0f3bef2411b.png"
  },
  49315: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spectral_grass.16aa1c506434ba29d2ef.png"
  },
  49322: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/spectral_sapling.4825ceefdb9e23435268.png"
  },
  49330: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/strawberry_bush_stage0.b9755303de6eac3737f3.png"
  },
  49338: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/strawberry_bush_stage1.252923a9d73d8808c87e.png"
  },
  49340: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/strawberry_bush_stage2.74f90bc956e2adbefeb7.png"
  },
  49347: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sugar_cane_plant_stage0.6ea0910cd4abfbdaa590.png"
  },
  49352: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sugar_cane_plant_stage1.fecf1f3d4e275428e0d1.png"
  },
  49361: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sugar_cane_plant_stage2.9bb8e7bfdd3b3df9c5cf.png"
  },
  49367: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/sugar_cane_plant_stage2_top.38a798e03030b5ac2aa8.png"
  },
  50102: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/synthesizer_top.898a5c31f88f3a7e7bc0.png"
  },
  49374: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tall_grass_bottom.d1486ff65d7053080df2.png"
  },
  49377: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tall_grass_top.c47b5954f3b634c3e8d3.png"
  },
  49380: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tallgrass.4023a10eead730ba902e.png"
  },
  49386: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tomato_plant_stage0.56b40905ef3343162bac.png"
  },
  49393: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tomato_plant_stage1.3ee1ec480e5b9d2083b1.png"
  },
  49399: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tomato_plant_stage2.352f23da3f602abe2807.png"
  },
  49405: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tomato_plant_stage2_top.05af5c989c07c92d3cc6.png"
  },
  50071: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_block.c28ae5cbdeea1a97e39b.png"
  },
  49474: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_blue_block.d7bf749b621b84e7ea95.png"
  },
  50091: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_cyan_block.e341232f9191cabde39c.png"
  },
  50109: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_green_block.bc23f759b1415641d108.png"
  },
  49628: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_orange_block.b63d3ce3a41741c94f82.png"
  },
  50126: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_purple_block.1a5fe5cd6180ece6d537.png"
  },
  49765: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/torch_red_block.a4f018ac1e7f11d1fa33.png"
  },
  49931: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/tree_cutter_top.253dd570fdd82a4a0122.png"
  },
  49682: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/water.5626b741808b1b53c6de.png"
  },
  49412: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage0.c5f13b2e7aae2ffa92ed.png"
  },
  49816: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage1.cba6812d10d5b6491616.png"
  },
  49416: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage2.761c842532b7e7a0ffb2.png"
  },
  49423: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage3.d35dda335d1b18435a43.png"
  },
  49425: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage4.413187bd0e4e96477931.png"
  },
  49428: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage5.a69c67e9b66975873d4c.png"
  },
  49430: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage6.5a9d322e8e577c41ffe8.png"
  },
  49438: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wheat_stage7.7a308ccca1342ae8ca44.png"
  },
  50087: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/white_glazed_terracotta.cd22281258f6a9bf48a9.png"
  },
  49784: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/white_spawn_block_top.4bb6d35b9f6889ab4741.png"
  },
  49445: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/white_tulip.7855711c5ddaa5d51278.png"
  },
  49925: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wire_mill_top.bf860c14780007a0574a.png"
  },
  49634: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wireless_terminal_top.0a86378833f246193a79.png"
  },
  49744: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/wool_colored_silver.4cd08eb30c81694706cb.png"
  },
  49455: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/yellow_glazed_terracotta.780cb299393e4d477442.png"
  },
  49996: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/yellow_spawn_block_top.eea71ad43da92909a353.png"
  },
  50160: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  50165: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  50174: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  50177: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  50180: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  50189: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  50198: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  50200: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  50207: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  50215: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  50220: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  50227: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  50234: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  50149: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);