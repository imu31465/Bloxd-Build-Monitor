export const id = 61;
export const ids = [61];
export const modules = {
  35632: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      f: () => Mc,
      g: () => Pc,
      i: () => qB,
      m: () => sc,
      p: () => tB
    });
    var Vc = nc(302),
      Ic = nc(556),
      rB = nc(306);
    const uc = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];

    function sc(cB, Bc) {
      return "" === Bc ? cB : `${cB} ${Bc}`
    }

    function Mc(cB, Bc, nc, Ic) {
      const rB = cB.replace((0, Vc.Rd)(Bc.material), (0, Vc.Rd)(nc));
      if (Bc.kind === Ic || "" === Bc.kind) return rB;
      const uc = (0, Vc.Rd)(Bc.kind);
      if (!rB.includes(uc)) throw new Error(`Cannot name assets for "${sc(nc,Ic)}": "${rB}" has no "${uc}" to replace`);
      return rB.replace(uc, (0, Vc.Rd)(Ic))
    }

    function Pc(cB) {
      return cB.creativeKinds ? cB.creativeKinds.flatMap((Bc => cB.materials.map((cB => sc(cB, Bc))))) : cB.materials.flatMap((Bc => cB.kinds.filter((Bc => {
        var nc;
        return !(null !== (nc = cB.hiddenKinds) && void 0 !== nc && nc.includes(Bc))
      })).map((cB => sc(Bc, cB)))))
    }

    function qB(cB, Bc) {
      return cB.flatMap((cB => cB.kinds.includes(Bc) ? cB.materials.map((cB => sc(cB, Bc))) : []))
    }
    const Oc = {
      name: "diamondVariants",
      materials: rB.n,
      kinds: rB.l.map((cB => cB.trimStart())),
      inheritsFrom: cB => ({
        material: "Diamond",
        kind: cB
      }),
      hiddenKinds: ["Crossbow Charged"],
      creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
      description: (cB, Bc) => {
        if ("Fragment" === Bc) return {
          translationKey: "Magmasteel" === cB ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
        }
      }
    };

    function Tc(cB) {
      return {
        translationKey: `item:${(0,Vc.Nd)(cB)}`
      }
    }
    const fc = {
        name: "decorativeArmour",
        materials: rB.f,
        kinds: Ic.d,
        inheritsFrom: cB => ({
          material: "Diamond",
          kind: cB
        }),
        displayName: Tc
      },
      mB = {
        name: "keys",
        materials: ["Wooden", "Stone", "Iron", "Gold", "Diamond"],
        kinds: ["Key"],
        metadata: () => ({
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        }),
        displayName: Tc
      },
      ec = {
        Staff: "Club",
        Shard: "Fragment"
      },
      tB = [Oc, fc, {
        name: "elemental",
        materials: rB.o,
        kinds: ["Shard", "Sword", "Bow", "Crossbow", "Crossbow Charged", "Spear", "Dagger", "Club", "Mace", "Whip", "Staff", ...Ic.d],
        inheritsFrom: cB => {
          var Bc;
          return {
            material: "Diamond",
            kind: null !== (Bc = ec[cB]) && void 0 !== Bc ? Bc : cB
          }
        },
        hiddenKinds: ["Crossbow Charged"],
        displayName: Tc,
        description: (cB, Bc) => {
          if ("Shard" === Bc) return {
            translationKey: "Sanguine" === cB || "Astral" === cB ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
          }
        }
      }, mB]
  },
  35628: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => zB,
      f: () => Uc,
      g: () => bB,
      j: () => gB,
      l: () => Cc,
      p: () => Dc,
      q: () => Qc
    });
    var Vc = nc(302),
      Ic = nc(8290),
      rB = nc(3584),
      uc = nc(8235),
      sc = nc(8268),
      Mc = nc(564);
    const Pc = {
      "AK-47": {
        gunType: "semi_automatic",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
        muzzleFlashScale: 1.5,
        autoFireWithMouse: !0,
        fireRate: 600,
        cadenceMs: 75,
        equipDelay: 24,
        damage: 20,
        reloadTime: 2300,
        clipSize: 30,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 10,
        inaccuracyFromShot: 22,
        inaccuracyMovement: 45,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 45,
        altInaccuracyStanding: 5,
        altInaccuracyFromShot: 9,
        altInaccuracyMovement: 28,
        recoveryRate: .005,
        minKickback: .023,
        maxKickback: .06,
        kickbackRate: 10,
        kickbackDecreaseRate: 5e-6
      },
      M16: {
        gunType: "semi_automatic",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -.5, 0],
        muzzleFlashScale: 1.5,
        autoFireWithMouse: !0,
        fireRate: 708,
        cadenceMs: 60 / 900 * 1e3,
        equipDelay: 23,
        damage: 17,
        reloadTime: 2300,
        clipSize: 30,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 8,
        inaccuracyFromShot: 12,
        inaccuracyMovement: 35,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 45,
        altInaccuracyStanding: 3,
        altInaccuracyFromShot: 8,
        altInaccuracyMovement: 20,
        recoveryRate: .005,
        minKickback: .022,
        maxKickback: .06,
        kickbackRate: 10,
        kickbackDecreaseRate: 5e-6
      },
      MP40: {
        gunType: "submachine",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
        muzzleFlashScale: 1.5,
        autoFireWithMouse: !0,
        fireRate: 900,
        cadenceMs: 40,
        equipDelay: 22,
        damage: 14,
        reloadTime: 1700,
        clipSize: 30,
        tagSpeedMult: .85,
        subsequentTagSpeedReductionScalar: .4,
        inaccuracyStanding: 13,
        inaccuracyFromShot: 15,
        inaccuracyMovement: 6,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 55,
        altInaccuracyStanding: 11,
        altInaccuracyFromShot: 12,
        altInaccuracyMovement: 5,
        recoveryRate: .005,
        minKickback: .022,
        maxKickback: .05,
        kickbackRate: 10,
        kickbackDecreaseRate: 5e-6
      },
      "TAR-21": {
        gunType: "rifle",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-7.5, -.5, 0],
        muzzleFlashScale: 3,
        autoFireWithMouse: !1,
        fireRate: 128,
        cadenceMs: 400,
        equipDelay: 119,
        damage: 50,
        reloadTime: 2300,
        clipSize: 20,
        tagSpeedMult: .75,
        subsequentTagSpeedReductionScalar: .6,
        inaccuracyStanding: 10,
        inaccuracyFromShot: 60,
        inaccuracyMovement: 45,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 75,
        altInaccuracyStanding: 6,
        altInaccuracyFromShot: 40,
        altInaccuracyMovement: 30,
        recoveryRate: .0065,
        minKickback: .04,
        maxKickback: .05,
        kickbackRate: 25,
        kickbackDecreaseRate: 5e-6
      },
      M1911: {
        gunType: "pistol",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-3.5, -1, 0],
        autoFireWithMouse: !1,
        fireRate: 600,
        cadenceMs: 75,
        equipDelay: 24,
        damage: 22,
        reloadTime: 1500,
        clipSize: 16,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 15,
        inaccuracyFromShot: 20,
        inaccuracyMovement: 15,
        yVelocityInaccuracy: 1.5,
        inaccuracyFromJump: 15,
        altInaccuracyStanding: 12,
        altInaccuracyFromShot: 12,
        altInaccuracyMovement: 10,
        recoveryRate: .01,
        minKickback: .045,
        maxKickback: .05,
        kickbackRate: 0,
        kickbackDecreaseRate: 8e-6
      },
      "One Shot Pistol": {
        gunType: "semi_automatic",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-3.5, -1, 0],
        autoFireWithMouse: !1,
        fireRate: 600,
        cadenceMs: 75,
        equipDelay: 24,
        damage: 1,
        reloadTime: 5e3,
        clipSize: 1,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 0,
        inaccuracyFromShot: 25,
        inaccuracyMovement: 15,
        yVelocityInaccuracy: 1.01,
        inaccuracyFromJump: 25,
        altInaccuracyStanding: 10,
        altInaccuracyFromShot: 25,
        altInaccuracyMovement: 25,
        recoveryRate: .005,
        minKickback: .045,
        maxKickback: .045,
        kickbackRate: 0,
        kickbackDecreaseRate: 5e-6
      },
      "Double Barrel": {
        gunType: "shotgun",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-6.5, -1, 0],
        muzzleFlashScale: 5,
        autoFireWithMouse: !1,
        fireRate: 150,
        cadenceMs: 120,
        equipDelay: 284,
        damage: 12,
        shotPelletCount: 10,
        clipSize: 2,
        reloadBulletsIndividually: !0,
        bulletReloadTime: 650,
        cockTime: 400,
        tagSpeedMult: .65,
        subsequentTagSpeedReductionScalar: .6,
        inaccuracyStanding: 110,
        inaccuracyFromShot: 90,
        inaccuracyMovement: 28,
        yVelocityInaccuracy: 5,
        inaccuracyFromJump: 150,
        altInaccuracyStanding: 55,
        altInaccuracyFromShot: 55,
        altInaccuracyMovement: 16,
        hasVerticalInaccuracy: !0,
        recoveryRate: .008,
        minKickback: .18,
        maxKickback: .22,
        kickbackRate: 0,
        kickbackDecreaseRate: 5e-6
      },
      AWP: {
        gunType: "rifle",
        scopeType: "sniper",
        muzzleFlashOffsetFromGun: [-8, -2, 0],
        muzzleFlashScale: 2,
        autoFireWithMouse: !1,
        fireRate: 42.8,
        cadenceMs: 60 / 43 * 1e3,
        equipDelay: 156,
        damage: 70,
        reloadTime: 2500,
        clipSize: 5,
        tagSpeedMult: .75,
        subsequentTagSpeedReductionScalar: .6,
        inaccuracyStanding: 150,
        inaccuracyFromShot: 200,
        inaccuracyMovement: 150,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 75,
        altInaccuracyStanding: 1,
        altInaccuracyFromShot: 1,
        altInaccuracyMovement: 112,
        recoveryRate: .02,
        minKickback: .1,
        maxKickback: .1,
        kickbackRate: 0,
        kickbackDecreaseRate: 5e-6,
        aimZoomFactor: 3.5
      },
      Deagle: {
        gunType: "rifle",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-3.5, -1, 0],
        muzzleFlashScale: 1.3,
        autoFireWithMouse: !1,
        fireRate: 200,
        cadenceMs: 60 / 220 * 1e3,
        equipDelay: 44,
        damage: 36,
        reloadTime: 2e3,
        clipSize: 7,
        tagSpeedMult: .78,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 9,
        inaccuracyFromShot: 22,
        inaccuracyMovement: 14,
        yVelocityInaccuracy: 1.5,
        inaccuracyFromJump: 11,
        altInaccuracyStanding: 7,
        altInaccuracyFromShot: 14,
        altInaccuracyMovement: 9,
        recoveryRate: .003,
        minKickback: .07,
        maxKickback: .095,
        kickbackRate: 6,
        kickbackDecreaseRate: 6e-6
      },
      "Striker-12": {
        gunType: "shotgun",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-6.5, -1, 0],
        muzzleFlashScale: 3.5,
        autoFireWithMouse: !0,
        fireRate: 185,
        cadenceMs: 250,
        equipDelay: 92,
        damage: 5,
        shotPelletCount: 12,
        clipSize: 12,
        reloadTime: 2600,
        tagSpeedMult: .68,
        subsequentTagSpeedReductionScalar: .58,
        inaccuracyStanding: 144,
        inaccuracyFromShot: 120,
        inaccuracyMovement: 48,
        yVelocityInaccuracy: 7,
        inaccuracyFromJump: 95,
        altInaccuracyStanding: 80,
        altInaccuracyFromShot: 80,
        altInaccuracyMovement: 32,
        hasVerticalInaccuracy: !0,
        recoveryRate: .0055,
        minKickback: .09,
        maxKickback: .12,
        kickbackRate: 4,
        kickbackDecreaseRate: 5e-6
      },
      VSR: {
        gunType: "submachine",
        scopeType: "sniper",
        keepScopeOnShot: !0,
        muzzleFlashOffsetFromGun: [-6.5, -.5, 0],
        muzzleFlashScale: 2,
        autoFireWithMouse: !0,
        fireRate: 450,
        cadenceMs: 60 / 620 * 1e3,
        equipDelay: 45,
        damage: 15,
        reloadTime: 1700,
        clipSize: 20,
        tagSpeedMult: .78,
        subsequentTagSpeedReductionScalar: .58,
        inaccuracyStanding: 44,
        inaccuracyFromShot: 64,
        inaccuracyMovement: 64,
        yVelocityInaccuracy: 5,
        inaccuracyFromJump: 55,
        altInaccuracyStanding: 5,
        altInaccuracyFromShot: 8,
        altInaccuracyMovement: 32,
        recoveryRate: .0055,
        minKickback: .018,
        maxKickback: .04,
        kickbackRate: 12,
        kickbackDecreaseRate: 5e-6,
        aimZoomFactor: 2.4
      },
      Minigun: {
        gunType: "submachine",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-8, -2, 0],
        muzzleFlashScale: 5,
        autoFireWithMouse: !0,
        fireRate: 1800,
        cadenceMs: 15,
        equipDelay: 19,
        damage: 20,
        reloadTime: 2400,
        clipSize: 100,
        tagSpeedMult: .75,
        subsequentTagSpeedReductionScalar: .6,
        inaccuracyStanding: 25,
        inaccuracyFromShot: 15,
        inaccuracyMovement: 20,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 75,
        altInaccuracyStanding: 25,
        altInaccuracyFromShot: 15,
        altInaccuracyMovement: 20,
        hasVerticalInaccuracy: !0,
        recoveryRate: .01,
        minKickback: .005,
        maxKickback: .005,
        kickbackRate: 0,
        kickbackDecreaseRate: 1e-5
      },
      SKAR: {
        gunType: "semi_automatic",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -.5, 0],
        muzzleFlashScale: 1.5,
        autoFireWithMouse: !0,
        fireRate: 450,
        cadenceMs: 60 / 550 * 1e3,
        equipDelay: 27,
        damage: 33,
        reloadTime: 2800,
        clipSize: 20,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 8,
        inaccuracyFromShot: 22,
        inaccuracyMovement: 35,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 45,
        altInaccuracyStanding: 3,
        altInaccuracyFromShot: 15,
        altInaccuracyMovement: 20,
        recoveryRate: .008,
        minKickback: .04,
        maxKickback: .109,
        kickbackRate: 10,
        kickbackDecreaseRate: 5e-6
      },
      FMR: {
        gunType: "semi_automatic",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -.5, 0],
        muzzleFlashScale: 1.5,
        autoFireWithMouse: !1,
        fireRate: 450,
        cadenceMs: 150,
        equipDelay: 16,
        burstCount: 3,
        burstDelay: 200 / 3,
        damage: 17,
        reloadTime: 2200,
        clipSize: 21,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 6,
        inaccuracyFromShot: 8,
        inaccuracyMovement: 30,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 45,
        altInaccuracyStanding: 2.5,
        altInaccuracyFromShot: 5.5,
        altInaccuracyMovement: 17,
        recoveryRate: .007,
        minKickback: .015,
        maxKickback: .04,
        kickbackRate: 10,
        kickbackDecreaseRate: 5e-6
      },
      "Block-19": {
        gunType: "pistol",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-3.5, -1, 0],
        autoFireWithMouse: !1,
        fireRate: 200,
        cadenceMs: 60 / 210 * 1e3,
        equipDelay: 45,
        burstCount: 4,
        burstDelay: 38,
        damage: 20,
        reloadTime: 1350,
        clipSize: 24,
        tagSpeedMult: .8,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 12,
        inaccuracyFromShot: 14,
        inaccuracyMovement: 14,
        yVelocityInaccuracy: 1.5,
        inaccuracyFromJump: 14,
        altInaccuracyStanding: 9,
        altInaccuracyFromShot: 9,
        altInaccuracyMovement: 8,
        recoveryRate: .008,
        minKickback: .04,
        maxKickback: .055,
        kickbackRate: 6,
        kickbackDecreaseRate: 8e-6
      },
      "Mini Izu": {
        gunType: "pistol",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-5.5, -1, 0],
        autoFireWithMouse: !0,
        fireRate: 923,
        cadenceMs: 60 / 1615 * 1e3,
        equipDelay: 21,
        damage: 13,
        reloadTime: 1400,
        clipSize: 22,
        tagSpeedMult: .85,
        subsequentTagSpeedReductionScalar: .4,
        inaccuracyStanding: 15,
        inaccuracyFromShot: 20,
        inaccuracyMovement: 8,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 60,
        altInaccuracyStanding: 12,
        altInaccuracyFromShot: 16,
        altInaccuracyMovement: 6,
        recoveryRate: .005,
        minKickback: .03,
        maxKickback: .075,
        kickbackRate: 12,
        kickbackDecreaseRate: 5e-6
      },
      GPMG: {
        gunType: "rifle",
        scopeType: "none",
        muzzleFlashOffsetFromGun: [-12.5, -.5, 0],
        muzzleFlashScale: 2,
        autoFireWithMouse: !0,
        fireRate: 600,
        cadenceMs: 60 / 700 * 1e3,
        equipDelay: 25,
        damage: 24,
        reloadTime: 4500,
        clipSize: 75,
        tagSpeedMult: .78,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 10,
        inaccuracyFromShot: 24,
        inaccuracyMovement: 45,
        yVelocityInaccuracy: 4,
        inaccuracyFromJump: 55,
        altInaccuracyStanding: 4,
        altInaccuracyFromShot: 16,
        altInaccuracyMovement: 24,
        hasVerticalInaccuracy: !0,
        recoveryRate: .01,
        minKickback: .032,
        maxKickback: .09,
        kickbackRate: 9,
        kickbackDecreaseRate: 1e-5
      },
      DMR: {
        gunType: "semi_automatic",
        scopeType: "sniper",
        keepScopeOnShot: !0,
        muzzleFlashOffsetFromGun: [-6, -.5, 0],
        muzzleFlashScale: 1.6,
        autoFireWithMouse: !1,
        fireRate: 270,
        cadenceMs: 200,
        equipDelay: 37,
        damage: 34,
        reloadTime: 2200,
        clipSize: 8,
        tagSpeedMult: .78,
        subsequentTagSpeedReductionScalar: .55,
        inaccuracyStanding: 8,
        inaccuracyFromShot: 18,
        inaccuracyMovement: 30,
        yVelocityInaccuracy: 2,
        inaccuracyFromJump: 30,
        altInaccuracyStanding: 1.5,
        altInaccuracyFromShot: 6,
        altInaccuracyMovement: 18,
        recoveryRate: .004,
        minKickback: .04,
        maxKickback: .065,
        kickbackRate: 5,
        kickbackDecreaseRate: 6e-6,
        aimZoomFactor: 2.8
      }
    };
    for (const Nc of Object.values(Pc)) Nc.msPerRound = 60 / Nc.fireRate * 1e3, Nc.msPerRoundTouchScreen = void 0 !== Nc.fireRateWithHeldTouch ? 60 / Nc.fireRateWithHeldTouch * 1e3 : Nc.msPerRound, Nc.cadenceMs ??= Nc.msPerRound, Nc.altYVelocityInaccuracy ??= Nc.yVelocityInaccuracy, Nc.altInaccuracyFromJump ??= Nc.inaccuracyFromJump;

    function qB(cB, Bc) {
      console.assert("meta|charging1" === Bc.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
      const nc = {
        ...Bc
      };
      return delete nc.rootMetaDesc, {
        [cB]: {
          ...Bc,
          textureInfo: Bc.textureName
        },
        [`${cB}|meta|charging2`]: {
          ...nc,
          textureInfo: `${Bc.textureName}_charging_2`
        },
        [`${cB}|meta|charging3`]: {
          ...nc,
          textureInfo: `${Bc.textureName}_charging_3`
        },
        [`${cB}|meta|charging4`]: {
          ...nc,
          textureInfo: `${Bc.textureName}_charging_4`
        }
      }
    }
    const Oc = "midday",
      Tc = ["midnight", "late_night", "sunrise", "early_day", Oc, "late_day", "sunset", "early_night"].filter((cB => cB !== Oc));

    function fc(cB, Bc, nc) {
      const Vc = {
        [cB]: {
          ...nc,
          heldItemGlb: `${Bc}_${Oc}`,
          textureInfo: `${Bc}_${Oc}`
        }
      };
      for (const Ic of Tc) Vc[`${cB}|meta|${Ic}`] = {
        ...nc,
        heldItemGlb: `${Bc}_${Ic}`,
        textureInfo: `${Bc}_${Ic}`
      };
      return Vc
    }
    const mB = {
      Sheep: Mc.i.Sheep,
      "Cave Golem": ["corrupted"],
      "Draugr Zombie": ["flower", "flower2", "mushroom", "vine", "vine2", "corrupted", "corrupted2"],
      "Draugr Huntress": ["chainmail"],
      "Frost Wraith": ["tattered", "frostKing", "accursed"]
    };

    function ec(cB, Bc) {
      var nc;
      const Vc = {
        type: "Gun",
        textureInfo: cB,
        weight: 1,
        stackable: !1,
        keepMetaInChest: !0,
        ...Bc,
        ...Pc[cB]
      };
      return {
        [cB]: Vc,
        [`${cB}|RequiresAmmo`]: {
          ...Vc,
          displayName: cB,
          heldItemGlb: null !== (nc = Vc.heldItemGlb) && void 0 !== nc ? nc : cB
        }
      }
    }
    var tB = nc(35632),
      Sc = nc(35640),
      yB = nc(35648);
    const zB = 16,
      pc = {
        comboWindowMs: 800,
        comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
        backstabAngle: 2 * Math.PI / 3
      },
      hc = {
        "Wood Pickaxe": {
          displayName: {
            translationKey: "item:woodPickaxe"
          },
          type: "Tool",
          textureInfo: "wooden_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 18,
          description: {
            translationKey: "item:pickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 2,
          level: 1
        },
        "Stone Pickaxe": {
          displayName: {
            translationKey: "item:stonePickaxe"
          },
          type: "Tool",
          textureInfo: "stone_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 22,
          description: {
            translationKey: "item:pickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 3.5,
          level: 2
        },
        "Iron Pickaxe": {
          displayName: {
            translationKey: "item:ironPickaxe"
          },
          type: "Tool",
          textureInfo: "iron_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 27,
          description: {
            translationKey: "item:pickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 6,
          level: 3
        },
        "Gold Pickaxe": {
          displayName: {
            translationKey: "item:goldPickaxe"
          },
          type: "Tool",
          textureInfo: "golden_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 30,
          description: {
            translationKey: "item:pickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 7,
          level: 4
        },
        "Diamond Pickaxe": {
          displayName: {
            translationKey: "item:diamondPickaxe"
          },
          type: "Tool",
          textureInfo: "diamond_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 32,
          description: {
            translationKey: "item:pickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 8,
          level: 5
        },
        "Moonstone Pickaxe": {
          displayName: {
            translationKey: "item:moonstonePickaxe"
          },
          type: "Tool",
          textureInfo: "moonstone_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 32,
          description: {
            translationKey: "item:moonstonePickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 9,
          level: 5
        },
        "Golem Pickaxe": {
          displayName: {
            translationKey: "item:golemPickaxe"
          },
          type: "Tool",
          textureInfo: "golem_pickaxe",
          weight: 1,
          heldItemScale: 1,
          damage: 32,
          description: {
            translationKey: "item:golemPickaxeDescription"
          },
          stackable: !1,
          harvests: "rock",
          multiplier: 8,
          level: 5
        },
        "Wood Axe": {
          displayName: {
            translationKey: "item:woodAxe"
          },
          type: "Tool",
          textureInfo: "wooden_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 20,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 2,
          level: 1
        },
        "Stone Axe": {
          displayName: {
            translationKey: "item:stoneAxe"
          },
          type: "Tool",
          textureInfo: "stone_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 24,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 3.5,
          level: 2
        },
        "Iron Axe": {
          displayName: {
            translationKey: "item:ironAxe"
          },
          type: "Tool",
          textureInfo: "iron_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 31,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 6,
          level: 3
        },
        "Gold Axe": {
          displayName: {
            translationKey: "item:goldAxe"
          },
          type: "Tool",
          textureInfo: "golden_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 33,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 7,
          level: 4
        },
        "Diamond Axe": {
          displayName: {
            translationKey: "item:diamondAxe"
          },
          type: "Tool",
          textureInfo: "diamond_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 36,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 8,
          level: 5
        },
        "Moonstone Axe": {
          displayName: {
            translationKey: "item:moonstoneAxe"
          },
          type: "Tool",
          textureInfo: "moonstone_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 36,
          description: {
            translationKey: "item:moonstoneAxeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 9,
          level: 5,
          lumberjackHeight: 6
        },
        "Artisan Axe": {
          displayName: "Artisan Axe",
          type: "Tool",
          textureInfo: "artisan_axe",
          weight: 1,
          heldItemScale: 1,
          damage: 31,
          description: {
            translationKey: "item:axeDescription"
          },
          stackable: !1,
          harvests: "wood",
          multiplier: 6,
          level: 3
        },
        "Wood Spade": {
          displayName: {
            translationKey: "item:woodSpade"
          },
          type: "Tool",
          textureInfo: "wooden_shovel",
          weight: 1,
          heldItemScale: 1,
          damage: 15,
          description: {
            translationKey: "item:spadeDescription"
          },
          stackable: !1,
          harvests: "granule",
          multiplier: 2,
          level: 1
        },
        "Stone Spade": {
          displayName: {
            translationKey: "item:stoneSpade"
          },
          type: "Tool",
          textureInfo: "stone_shovel",
          weight: 1,
          heldItemScale: 1,
          damage: 19,
          description: {
            translationKey: "item:spadeDescription"
          },
          stackable: !1,
          harvests: "granule",
          multiplier: 3.5,
          level: 2
        },
        "Iron Spade": {
          displayName: {
            translationKey: "item:ironSpade"
          },
          type: "Tool",
          textureInfo: "iron_shovel",
          weight: 1,
          heldItemScale: 1,
          damage: 24,
          description: {
            translationKey: "item:spadeDescription"
          },
          stackable: !1,
          harvests: "granule",
          multiplier: 6,
          level: 3
        },
        "Gold Spade": {
          displayName: {
            translationKey: "item:goldSpade"
          },
          type: "Tool",
          textureInfo: "golden_shovel",
          weight: 1,
          heldItemScale: 1,
          damage: 26,
          description: {
            translationKey: "item:spadeDescription"
          },
          stackable: !1,
          harvests: "granule",
          multiplier: 7,
          level: 4
        },
        "Diamond Spade": {
          displayName: {
            translationKey: "item:diamondSpade"
          },
          type: "Tool",
          textureInfo: "diamond_shovel",
          weight: 1,
          heldItemScale: 1,
          damage: 28,
          description: {
            translationKey: "item:spadeDescription"
          },
          stackable: !1,
          harvests: "granule",
          multiplier: 8,
          level: 5
        },
        "Wood Sword": {
          displayName: {
            translationKey: "item:woodSword"
          },
          type: "Tool",
          textureInfo: "wooden_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 22,
          description: {
            translationKey: "item:swordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Sword": {
          displayName: {
            translationKey: "item:stoneSword"
          },
          type: "Tool",
          textureInfo: "stone_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 27,
          description: {
            translationKey: "item:swordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Sword": {
          displayName: {
            translationKey: "item:ironSword"
          },
          type: "Tool",
          textureInfo: "iron_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 34,
          description: {
            translationKey: "item:swordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Sword": {
          displayName: {
            translationKey: "item:goldSword"
          },
          type: "Tool",
          textureInfo: "golden_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 37,
          description: {
            translationKey: "item:swordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Sword": {
          displayName: {
            translationKey: "item:diamondSword"
          },
          type: "Tool",
          textureInfo: "diamond_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 40,
          description: {
            translationKey: "item:swordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Knight Sword": {
          displayName: {
            translationKey: "item:knightSword"
          },
          type: "Tool",
          textureInfo: "knight_sword",
          weight: 1,
          heldItemScale: 1.1,
          damage: 43,
          knockbackHorizontalScalar: 1.7,
          description: {
            translationKey: "item:knightSwordDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Wood Hoe": {
          displayName: {
            translationKey: "item:woodHoe"
          },
          type: "Tool",
          textureInfo: "wooden_hoe",
          weight: 1,
          heldItemScale: 1,
          damage: 15,
          description: {
            translationKey: "item:hoeDescription"
          },
          stackable: !1,
          harvests: "cuttable",
          multiplier: 2,
          level: 1
        },
        "Stone Hoe": {
          displayName: {
            translationKey: "item:stoneHoe"
          },
          type: "Tool",
          textureInfo: "stone_hoe",
          weight: 1,
          heldItemScale: 1,
          damage: 19,
          description: {
            translationKey: "item:hoeDescription"
          },
          stackable: !1,
          harvests: "cuttable",
          multiplier: 2.5,
          level: 2
        },
        "Iron Hoe": {
          displayName: {
            translationKey: "item:ironHoe"
          },
          type: "Tool",
          textureInfo: "iron_hoe",
          weight: 1,
          heldItemScale: 1,
          damage: 24,
          description: {
            translationKey: "item:hoeDescription"
          },
          stackable: !1,
          harvests: "cuttable",
          multiplier: 3.25,
          level: 3
        },
        "Gold Hoe": {
          displayName: {
            translationKey: "item:goldHoe"
          },
          type: "Tool",
          textureInfo: "golden_hoe",
          weight: 1,
          heldItemScale: 1,
          damage: 26,
          description: {
            translationKey: "item:hoeDescription"
          },
          stackable: !1,
          harvests: "cuttable",
          multiplier: 3.75,
          level: 4
        },
        "Diamond Hoe": {
          displayName: {
            translationKey: "item:diamondHoe"
          },
          type: "Tool",
          textureInfo: "diamond_hoe",
          weight: 1,
          heldItemScale: 1,
          damage: 28,
          description: {
            translationKey: "item:hoeDescription"
          },
          stackable: !1,
          harvests: "cuttable",
          multiplier: 4.25,
          level: 5
        },
        Flashlight: {
          displayName: {
            translationKey: "item:flashlight"
          },
          description: {
            translationKey: "item:flashlightDescription"
          },
          type: "Item",
          textureInfo: "flashlight",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          XV: [15, 15, 15],
          spotlightRange: 20,
          spotlightConeAngle: 60,
          firstPersonHeldRotationOffset: [-.34, -.014, .081],
          thirdPersonHeldRotationOffset: [Math.PI / 2, 0, 0]
        },
        "Mining Helmet": {
          displayName: {
            translationKey: "item:miningHelmet"
          },
          description: {
            translationKey: "item:miningHelmetDescription"
          },
          type: "Armour",
          textureInfo: "mining_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07,
          XV: [15, 14, 11],
          spotlightRange: 12,
          spotlightConeAngle: 90
        },
        "Wood Helmet": {
          displayName: {
            translationKey: "item:woodHelmet"
          },
          type: "Armour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Iron Helmet": {
          displayName: {
            translationKey: "item:ironHelmet"
          },
          type: "Armour",
          textureInfo: "iron_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .09
        },
        "Gold Helmet": {
          displayName: {
            translationKey: "item:goldHelmet"
          },
          type: "Armour",
          textureInfo: "golden_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .11
        },
        "Diamond Helmet": {
          displayName: {
            translationKey: "item:diamondHelmet"
          },
          type: "Armour",
          textureInfo: "diamond_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Wood Chestplate": {
          displayName: {
            translationKey: "item:woodChestplate"
          },
          type: "Armour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Iron Chestplate": {
          displayName: {
            translationKey: "item:ironChestplate"
          },
          type: "Armour",
          textureInfo: "iron_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .18
        },
        "Gold Chestplate": {
          displayName: {
            translationKey: "item:goldChestplate"
          },
          type: "Armour",
          textureInfo: "golden_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .21
        },
        "Diamond Chestplate": {
          displayName: {
            translationKey: "item:diamondChestplate"
          },
          type: "Armour",
          textureInfo: "diamond_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .24
        },
        "Fur Chestplate": {
          displayName: {
            translationKey: "item:furChestplate"
          },
          type: "Armour",
          textureInfo: "fur_chestplate",
          weight: 1,
          heldItemScale: 1,
          description: {
            translationKey: "item:furChestplateDescription"
          },
          stackable: !1,
          armourReduction: .22,
          knockbackReduction: 1
        },
        "Wood Leggings": {
          displayName: {
            translationKey: "item:woodLeggings"
          },
          type: "Armour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Iron Leggings": {
          displayName: {
            translationKey: "item:ironLeggings"
          },
          type: "Armour",
          textureInfo: "iron_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .14
        },
        "Gold Leggings": {
          displayName: {
            translationKey: "item:goldLeggings"
          },
          type: "Armour",
          textureInfo: "golden_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .16
        },
        "Diamond Leggings": {
          displayName: {
            translationKey: "item:diamondLeggings"
          },
          type: "Armour",
          textureInfo: "diamond_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .19
        },
        "Wood Boots": {
          displayName: {
            translationKey: "item:woodBoots"
          },
          type: "Armour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Iron Boots": {
          displayName: {
            translationKey: "item:ironBoots"
          },
          type: "Armour",
          textureInfo: "iron_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Gold Boots": {
          displayName: {
            translationKey: "item:goldBoots"
          },
          type: "Armour",
          textureInfo: "golden_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .09
        },
        "Diamond Boots": {
          displayName: {
            translationKey: "item:diamondBoots"
          },
          type: "Armour",
          textureInfo: "diamond_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Spiked Boots": {
          displayName: {
            translationKey: "item:spikedBoots"
          },
          type: "Armour",
          textureInfo: "spiked_boots",
          weight: 1,
          heldItemScale: 1,
          description: {
            translationKey: "item:spikedBootsDescription"
          },
          stackable: !1,
          armourReduction: .09
        },
        "Wood Gauntlets": {
          displayName: {
            translationKey: "item:woodGauntlets"
          },
          type: "Armour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Iron Gauntlets": {
          displayName: {
            translationKey: "item:ironGauntlets"
          },
          type: "Armour",
          textureInfo: "iron_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .08
        },
        "Gold Gauntlets": {
          displayName: {
            translationKey: "item:goldGauntlets"
          },
          type: "Armour",
          textureInfo: "golden_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Diamond Gauntlets": {
          displayName: {
            translationKey: "item:diamondGauntlets"
          },
          type: "Armour",
          textureInfo: "diamond_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .11
        },
        "Military Helmet": {
          displayName: {
            translationKey: "item:militaryHelmet"
          },
          type: "Armour",
          textureInfo: "military_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .11
        },
        "Military Chestplate": {
          displayName: {
            translationKey: "item:militaryChestplate"
          },
          type: "Armour",
          textureInfo: "military_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .21
        },
        "Military Gauntlets": {
          displayName: {
            translationKey: "item:militaryGauntlets"
          },
          type: "Armour",
          textureInfo: "military_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Military Leggings": {
          displayName: {
            translationKey: "item:militaryLeggings"
          },
          type: "Armour",
          textureInfo: "military_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .16
        },
        "Military Boots": {
          displayName: {
            translationKey: "item:militaryBoots"
          },
          type: "Armour",
          textureInfo: "military_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .09
        },
        "White Wood Helmet": {
          displayName: {
            translationKey: "item:whiteWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "White Wood Chestplate": {
          displayName: {
            translationKey: "item:whiteWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "White Wood Leggings": {
          displayName: {
            translationKey: "item:whiteWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "White Wood Boots": {
          displayName: {
            translationKey: "item:whiteWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "White Wood Gauntlets": {
          displayName: {
            translationKey: "item:whiteWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Orange Wood Helmet": {
          displayName: {
            translationKey: "item:orangeWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Orange Wood Chestplate": {
          displayName: {
            translationKey: "item:orangeWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Orange Wood Leggings": {
          displayName: {
            translationKey: "item:orangeWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Orange Wood Boots": {
          displayName: {
            translationKey: "item:orangeWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Orange Wood Gauntlets": {
          displayName: {
            translationKey: "item:orangeWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Magenta Wood Helmet": {
          displayName: {
            translationKey: "item:magentaWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Magenta Wood Chestplate": {
          displayName: {
            translationKey: "item:magentaWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Magenta Wood Leggings": {
          displayName: {
            translationKey: "item:magentaWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Magenta Wood Boots": {
          displayName: {
            translationKey: "item:magentaWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Magenta Wood Gauntlets": {
          displayName: {
            translationKey: "item:magentaWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Light Blue Wood Helmet": {
          displayName: {
            translationKey: "item:lightBlueWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Light Blue Wood Chestplate": {
          displayName: {
            translationKey: "item:lightBlueWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Light Blue Wood Leggings": {
          displayName: {
            translationKey: "item:lightBlueWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Light Blue Wood Boots": {
          displayName: {
            translationKey: "item:lightBlueWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Light Blue Wood Gauntlets": {
          displayName: {
            translationKey: "item:lightBlueWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Yellow Wood Helmet": {
          displayName: {
            translationKey: "item:yellowWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Yellow Wood Chestplate": {
          displayName: {
            translationKey: "item:yellowWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Yellow Wood Leggings": {
          displayName: {
            translationKey: "item:yellowWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Yellow Wood Boots": {
          displayName: {
            translationKey: "item:yellowWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Yellow Wood Gauntlets": {
          displayName: {
            translationKey: "item:yellowWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Lime Wood Helmet": {
          displayName: {
            translationKey: "item:limeWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Lime Wood Chestplate": {
          displayName: {
            translationKey: "item:limeWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Lime Wood Leggings": {
          displayName: {
            translationKey: "item:limeWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Lime Wood Boots": {
          displayName: {
            translationKey: "item:limeWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Lime Wood Gauntlets": {
          displayName: {
            translationKey: "item:limeWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Pink Wood Helmet": {
          displayName: {
            translationKey: "item:pinkWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Pink Wood Chestplate": {
          displayName: {
            translationKey: "item:pinkWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Pink Wood Leggings": {
          displayName: {
            translationKey: "item:pinkWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Pink Wood Boots": {
          displayName: {
            translationKey: "item:pinkWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Pink Wood Gauntlets": {
          displayName: {
            translationKey: "item:pinkWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Gray Wood Helmet": {
          displayName: {
            translationKey: "item:grayWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Gray Wood Chestplate": {
          displayName: {
            translationKey: "item:grayWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Gray Wood Leggings": {
          displayName: {
            translationKey: "item:grayWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Gray Wood Boots": {
          displayName: {
            translationKey: "item:grayWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Gray Wood Gauntlets": {
          displayName: {
            translationKey: "item:grayWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Light Gray Wood Helmet": {
          displayName: {
            translationKey: "item:lightGrayWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Light Gray Wood Chestplate": {
          displayName: {
            translationKey: "item:lightGrayWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Light Gray Wood Leggings": {
          displayName: {
            translationKey: "item:lightGrayWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Light Gray Wood Boots": {
          displayName: {
            translationKey: "item:lightGrayWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Light Gray Wood Gauntlets": {
          displayName: {
            translationKey: "item:lightGrayWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Cyan Wood Helmet": {
          displayName: {
            translationKey: "item:cyanWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Cyan Wood Chestplate": {
          displayName: {
            translationKey: "item:cyanWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Cyan Wood Leggings": {
          displayName: {
            translationKey: "item:cyanWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Cyan Wood Boots": {
          displayName: {
            translationKey: "item:cyanWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Cyan Wood Gauntlets": {
          displayName: {
            translationKey: "item:cyanWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Purple Wood Helmet": {
          displayName: {
            translationKey: "item:purpleWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Purple Wood Chestplate": {
          displayName: {
            translationKey: "item:purpleWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Purple Wood Leggings": {
          displayName: {
            translationKey: "item:purpleWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Purple Wood Boots": {
          displayName: {
            translationKey: "item:purpleWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Purple Wood Gauntlets": {
          displayName: {
            translationKey: "item:purpleWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Blue Wood Helmet": {
          displayName: {
            translationKey: "item:blueWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Blue Wood Chestplate": {
          displayName: {
            translationKey: "item:blueWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Blue Wood Leggings": {
          displayName: {
            translationKey: "item:blueWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Blue Wood Boots": {
          displayName: {
            translationKey: "item:blueWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Blue Wood Gauntlets": {
          displayName: {
            translationKey: "item:blueWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Brown Wood Helmet": {
          displayName: {
            translationKey: "item:brownWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Brown Wood Chestplate": {
          displayName: {
            translationKey: "item:brownWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Brown Wood Leggings": {
          displayName: {
            translationKey: "item:brownWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Brown Wood Boots": {
          displayName: {
            translationKey: "item:brownWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Brown Wood Gauntlets": {
          displayName: {
            translationKey: "item:brownWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Green Wood Helmet": {
          displayName: {
            translationKey: "item:greenWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Green Wood Chestplate": {
          displayName: {
            translationKey: "item:greenWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Green Wood Leggings": {
          displayName: {
            translationKey: "item:greenWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Green Wood Boots": {
          displayName: {
            translationKey: "item:greenWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Green Wood Gauntlets": {
          displayName: {
            translationKey: "item:greenWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Red Wood Helmet": {
          displayName: {
            translationKey: "item:redWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Red Wood Chestplate": {
          displayName: {
            translationKey: "item:redWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Red Wood Leggings": {
          displayName: {
            translationKey: "item:redWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Red Wood Boots": {
          displayName: {
            translationKey: "item:redWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Red Wood Gauntlets": {
          displayName: {
            translationKey: "item:redWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        "Black Wood Helmet": {
          displayName: {
            translationKey: "item:blackWoodHelmet"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_helmet",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .07
        },
        "Black Wood Chestplate": {
          displayName: {
            translationKey: "item:blackWoodChestplate"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_chestplate",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .13
        },
        "Black Wood Leggings": {
          displayName: {
            translationKey: "item:blackWoodLeggings"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_leggings",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .1
        },
        "Black Wood Boots": {
          displayName: {
            translationKey: "item:blackWoodBoots"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_boots",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .05
        },
        "Black Wood Gauntlets": {
          displayName: {
            translationKey: "item:blackWoodGauntlets"
          },
          type: "GrayscaleArmour",
          textureInfo: "wood_gauntlets",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          armourReduction: .06
        },
        Shears: {
          displayName: {
            translationKey: "item:shears"
          },
          type: "Tool",
          textureInfo: "shears",
          weight: 1,
          heldItemScale: 1,
          damage: 27,
          stackable: !1,
          harvests: "cuttable",
          multiplier: 3,
          level: 3
        },
        "Artisan Shears": {
          displayName: {
            translationKey: "item:artisanShears"
          },
          type: "Tool",
          textureInfo: "artisan_shears",
          weight: 1,
          heldItemScale: 1,
          damage: 27,
          stackable: !1,
          harvests: "cuttable",
          multiplier: 3,
          level: 3
        },
        Stick: {
          displayName: {
            translationKey: "item:stick"
          },
          type: "Item",
          textureInfo: "stick",
          weight: 1,
          heldItemScale: 1,
          knockbackHorizontalScalar: 2,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:stickDescription"
          },
          stackable: !1
        },
        Coal: {
          displayName: {
            translationKey: "item:coal"
          },
          type: "Item",
          textureInfo: "coal",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Raw Iron": {
          displayName: {
            translationKey: "item:rawIron"
          },
          type: "Item",
          textureInfo: "raw_iron",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:rawIronDescription"
          }
        },
        "Iron Bar": {
          displayName: {
            translationKey: "item:ironBar"
          },
          type: "Item",
          textureInfo: "iron_ingot",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Iron Fragment": {
          displayName: {
            translationKey: "item:ironFragment"
          },
          type: "Item",
          textureInfo: "iron_fragment",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:ironFragmentDescription"
          }
        },
        "Raw Gold": {
          displayName: {
            translationKey: "item:rawGold"
          },
          type: "Item",
          textureInfo: "raw_gold",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:rawGoldDescription"
          }
        },
        "Gold Bar": {
          displayName: {
            translationKey: "item:goldBar"
          },
          type: "Item",
          textureInfo: "gold_ingot",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Gold Fragment": {
          displayName: {
            translationKey: "item:goldFragment"
          },
          type: "Item",
          textureInfo: "gold_fragment",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:goldFragmentDescription"
          }
        },
        Diamond: {
          displayName: {
            translationKey: "item:diamond"
          },
          type: "Item",
          textureInfo: "diamond",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Diamond Fragment": {
          displayName: {
            translationKey: "item:diamondFragment"
          },
          type: "Item",
          textureInfo: "diamond_fragment",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:diamondFragmentDescription"
          }
        },
        Moonstone: {
          displayName: {
            translationKey: "item:moonstone"
          },
          type: "Item",
          textureInfo: "moonstone",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Lunite: {
          displayName: {
            translationKey: "item:lunite"
          },
          type: "Item",
          textureInfo: "lunite",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:luniteDescription"
          }
        },
        "Moonstone Fragment": {
          displayName: {
            translationKey: "item:moonstoneFragment"
          },
          type: "Item",
          textureInfo: "moonstone_fragment",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:moonstoneFragmentDescription"
          }
        },
        Bowl: {
          displayName: {
            translationKey: "item:bowl"
          },
          type: "Item",
          textureInfo: "bowl",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        ... function(cB, Bc, nc) {
          console.assert(4 === nc.length, "Must have 4 textures for bowl fill metadatas");
          const Vc = {
            ...Bc
          };
          delete Vc.rootMetaDesc, delete Vc.textureInfo, delete Vc.afterEatenItem;
          const Ic = `Partially Full ${cB}`,
            rB = `Half Full ${cB}`,
            uc = `Nearly Full ${cB}`,
            sc = cB;
          return {
            [Ic]: {
              ...Bc,
              textureInfo: nc[0],
              afterEatenItem: "Bowl",
              rootMetaDesc: `${Ic}|meta|charging1`
            },
            [rB]: {
              ...Bc,
              textureInfo: nc[1],
              afterEatenItem: Ic,
              rootMetaDesc: `${rB}|meta|charging1`
            },
            [uc]: {
              ...Bc,
              textureInfo: nc[2],
              afterEatenItem: rB,
              rootMetaDesc: `${uc}|meta|charging1`
            },
            [sc]: {
              ...Bc,
              textureInfo: nc[3],
              afterEatenItem: uc,
              rootMetaDesc: `${sc}|meta|charging1`
            }
          }
        }("Bowl of Cranberries", {
          displayName: {
            translationKey: "item:bowlOfCranberries"
          },
          type: "Chargeable",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeStages: 1,
          chargeTime: 300,
          stackable: !1,
          eatHealAmt: 10,
          description: {
            translationKey: "item:bowlOfCranberriesDescription"
          }
        }, ["bowl_of_cranberries_1", "bowl_of_cranberries_2", "bowl_of_cranberries_3", "bowl_of_cranberries_4"]),
        "Mushroom Soup": {
          displayName: {
            translationKey: "item:mushroomSoup"
          },
          type: "Chargeable",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          eatHealAmt: 15,
          chargeSound: "eat1",
          chargeStages: 1,
          chargeTime: 375,
          stackable: !1,
          afterEatenItem: "Bowl",
          textureInfo: "mushroom_soup",
          rootMetaDesc: "Mushroom Soup|meta|charging1"
        },
        "Glowing Soup": {
          displayName: {
            translationKey: "item:glowingSoup"
          },
          type: "Chargeable",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          eatHealAmt: 5,
          chargeSound: "eat1",
          chargeStages: 1,
          chargeTime: 375,
          stackable: !1,
          afterEatenItem: "Bowl",
          textureInfo: "glowing_soup",
          description: {
            translationKey: "item:glowingSoupDescription"
          },
          XV: [4, 11, 11],
          rootMetaDesc: "Glowing Soup|meta|charging1"
        },
        "Night Vision Soup": {
          displayName: {
            translationKey: "item:nightVisionSoup"
          },
          type: "Chargeable",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          eatHealAmt: 10,
          chargeSound: "eat1",
          chargeStages: 1,
          chargeTime: 375,
          stackable: !1,
          afterEatenItem: "Bowl",
          textureInfo: "night_vision_soup",
          description: {
            translationKey: "item:nightVisionSoupDescription"
          },
          rootMetaDesc: "Night Vision Soup|meta|charging1"
        },
        Cotton: {
          displayName: {
            translationKey: "item:cotton"
          },
          type: "Item",
          textureInfo: "cotton",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Gold Crop": {
          displayName: {
            translationKey: "item:goldCrop"
          },
          type: "Item",
          textureInfo: "gold_crop",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:goldCropDescription"
          }
        },
        Bucket: {
          displayName: {
            translationKey: "item:bucket"
          },
          type: "Item",
          textureInfo: "bucket",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Water Bucket": {
          displayName: {
            translationKey: "item:waterBucket"
          },
          type: "Item",
          textureInfo: "water_bucket",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Lava Bucket": {
          displayName: {
            translationKey: "item:lavaBucket"
          },
          type: "Item",
          textureInfo: "lava_bucket",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          XV: [12, 7, 2]
        },
        Boat: {
          displayName: {
            translationKey: "item:boat"
          },
          type: "Item",
          textureInfo: "oak_boat",
          heldItemGlb: "Boat Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        INTERNAL_MESH_Boat: {
          type: "Item",
          textureInfo: "oak_boat",
          heldItemGlb: "Boat",
          weight: 1,
          heldItemScale: 4,
          stackable: !1
        },
        "Obsidian Boat": {
          displayName: {
            translationKey: "item:obsidianBoat"
          },
          description: {
            translationKey: "item:obsidianBoatDescription"
          },
          type: "Item",
          textureInfo: "obsidian_boat",
          heldItemGlb: "Obsidian Boat Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Obsidian Boat": {
          type: "Item",
          textureInfo: "obsidian_boat",
          heldItemGlb: "Obsidian Boat",
          weight: 1,
          heldItemScale: 4,
          stackable: !1
        },
        Speedboat: {
          displayName: {
            translationKey: "item:speedboat"
          },
          type: "Item",
          textureInfo: "speedboat",
          heldItemGlb: "Speedboat Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        INTERNAL_MESH_Speedboat: {
          type: "Item",
          textureInfo: "speedboat",
          heldItemGlb: "Speedboat",
          weight: 1,
          heldItemScale: 4,
          stackable: !1
        },
        "Wood Hang Glider": {
          displayName: {
            translationKey: "item:woodHangGlider"
          },
          type: "Item",
          textureInfo: "hang_glider",
          heldItemGlb: "Wood Hang Glider Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Wood Hang Glider": {
          type: "Item",
          textureInfo: "hang_glider",
          heldItemGlb: "Wood Hang Glider",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Iron Hang Glider": {
          displayName: {
            translationKey: "item:ironHangGlider"
          },
          type: "Item",
          textureInfo: "hang_glider_iron",
          heldItemGlb: "Iron Hang Glider Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Iron Hang Glider": {
          type: "Item",
          textureInfo: "hang_glider_iron",
          heldItemGlb: "Iron Hang Glider",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Gold Hang Glider": {
          displayName: {
            translationKey: "item:goldHangGlider"
          },
          type: "Item",
          textureInfo: "hang_glider_gold",
          heldItemGlb: "Gold Hang Glider Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Gold Hang Glider": {
          type: "Item",
          textureInfo: "hang_glider_gold",
          heldItemGlb: "Gold Hang Glider",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Diamond Hang Glider": {
          displayName: {
            translationKey: "item:diamondHangGlider"
          },
          type: "Item",
          textureInfo: "hang_glider_diamond",
          heldItemGlb: "Diamond Hang Glider Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Diamond Hang Glider": {
          type: "Item",
          textureInfo: "hang_glider_diamond",
          heldItemGlb: "Diamond Hang Glider",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        Hovercraft: {
          displayName: {
            translationKey: "item:hovercraft"
          },
          type: "Item",
          textureInfo: "hovercraft",
          heldItemGlb: "Hovercraft Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        INTERNAL_MESH_Hovercraft: {
          type: "Item",
          textureInfo: "hovercraft",
          heldItemGlb: "Hovercraft",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        ...(0, sc.H)((cB => `${cB} Kart`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}Kart`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_kart`,
          heldItemGlb: cB => `${cB} Kart Item`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        }),
        ...(0, sc.H)((cB => `INTERNAL_MESH_${cB} Kart`), {
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_kart`,
          heldItemGlb: cB => `${cB} Kart`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        }),
        "Off Roader": {
          displayName: {
            translationKey: "item:offRoader"
          },
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Off Roader": {
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Gold Mining Drill": {
          displayName: {
            translationKey: "item:goldMiningDrill"
          },
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Iron Mining Drill": {
          displayName: {
            translationKey: "item:ironMiningDrill"
          },
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Diamond Mining Drill": {
          displayName: {
            translationKey: "item:diamondMiningDrill"
          },
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Moonstone Mining Drill": {
          displayName: {
            translationKey: "item:moonstoneMiningDrill"
          },
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Off Roader Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Armored Car": {
          displayName: {
            translationKey: "item:armoredCar"
          },
          type: "Item",
          textureInfo: "armored_car",
          heldItemGlb: "Armored Car Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Gold Mining Drill": {
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Gold Mining Drill",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Iron Mining Drill": {
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Iron Mining Drill",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Diamond Mining Drill": {
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Diamond Mining Drill",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Moonstone Mining Drill": {
          type: "Item",
          textureInfo: "off_roader",
          heldItemGlb: "Moonstone Mining Drill",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "INTERNAL_MESH_Armored Car": {
          type: "Item",
          textureInfo: "armored_car",
          heldItemGlb: "Armored Car",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Light Blue Car": {
          displayName: {
            translationKey: "item:lightBlueCar"
          },
          type: "Item",
          textureInfo: "light_blue_car",
          heldItemGlb: "Car Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        INTERNAL_MESH_Car: {
          type: "Item",
          textureInfo: "light_blue_car",
          heldItemGlb: "Car",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        Snowball: {
          displayName: {
            translationKey: "item:snowball"
          },
          type: "Item",
          textureInfo: "snowball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:throwableItemDescription"
          },
          secondaryDamage: 4
        },
        "Snowball Launcher": {
          displayName: "Snowball Launcher",
          type: "FullAuto",
          textureInfo: "snowball",
          heldItemGlb: "Snowball",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: "Rapidly fires snowballs!",
          fireInterval: 216,
          secondaryDamage: 4,
          holdAsAiming: !1,
          hideAimingUI: !0
        },
        Pebble: {
          displayName: {
            translationKey: "item:pebble"
          },
          type: "Item",
          textureInfo: "pebble",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:throwableItemDescription"
          },
          secondaryDamage: 10
        },
        "Reinforced Pebble": {
          displayName: {
            translationKey: "item:reinforcedPebble"
          },
          type: "Item",
          textureInfo: "reinforced_pebble",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:throwableItemDescription"
          },
          secondaryDamage: 13
        },
        Bullet: {
          displayName: "Bullet",
          type: "Item",
          textureInfo: "arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        Ball: {
          displayName: {
            translationKey: "item:ball"
          },
          type: "Item",
          textureInfo: "ball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:ballDescription"
          }
        },
        "Reinforced Ball": {
          displayName: {
            translationKey: "item:reinforcedBall"
          },
          type: "Item",
          textureInfo: "reinforced_ball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:reinforcedBallDescription"
          }
        },
        "Frag Grenade": {
          displayName: {
            translationKey: "item:fragGrenade"
          },
          type: "Item",
          textureInfo: "frag_grenade",
          weight: 1,
          heldItemScale: 6,
          stackable: !0,
          description: {
            translationKey: "item:fragGrenadeDescription"
          }
        },
        "Mining Grenade": {
          displayName: {
            translationKey: "item:miningGrenade"
          },
          type: "Item",
          textureInfo: "mining_grenade",
          weight: 1,
          heldItemScale: 6,
          stackable: !0,
          description: {
            translationKey: "item:miningGrenadeDescription"
          }
        },
        "Smoke Grenade": {
          displayName: {
            translationKey: "item:smokeGrenade"
          },
          type: "Item",
          textureInfo: "smoke_grenade",
          weight: 1,
          heldItemScale: 6,
          stackable: !0,
          description: {
            translationKey: "item:smokeGrenadeDescription"
          }
        },
        "Moonstone Orb": {
          displayName: {
            translationKey: "item:moonstoneOrb"
          },
          type: "Item",
          textureInfo: "moonstone_orb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:moonstoneOrbDescription"
          }
        },
        Fireball: {
          displayName: {
            translationKey: "item:fireball"
          },
          type: "Item",
          textureInfo: "fireball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:fireballDescription"
          },
          secondaryDamage: 13
        },
        "Bouncy Bomb": {
          displayName: {
            translationKey: "item:bouncyBomb"
          },
          type: "Item",
          textureInfo: "bouncy_bomb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:bouncyBombDescription"
          },
          secondaryDamage: 5
        },
        RPG: {
          displayName: {
            translationKey: "item:rpg"
          },
          type: "FullAuto",
          textureInfo: "rpg",
          weight: 1,
          heldItemScale: 1.2,
          stackable: !0,
          description: {
            translationKey: "item:rpgDescription"
          },
          secondaryDamage: 13,
          holdAsAiming: !0,
          hideAimingUI: !0
        },
        "Obby RPG": {
          displayName: {
            translationKey: "item:rpg"
          },
          type: "FullAuto",
          textureInfo: "rpg",
          weight: 1,
          heldItemScale: 1.2,
          stackable: !1,
          description: {
            translationKey: "item:rpgDescription"
          },
          holdAsAiming: !0,
          hideAimingUI: !0,
          fireInterval: 817
        },
        "Super RPG": {
          displayName: {
            translationKey: "item:superRpg"
          },
          type: "FullAuto",
          textureInfo: "super_rpg",
          weight: 1,
          heldItemScale: 1.2,
          stackable: !0,
          description: {
            translationKey: "item:superRpgDescription"
          },
          secondaryDamage: 20,
          holdAsAiming: !0,
          hideAimingUI: !0
        },
        "Grenade Launcher": {
          displayName: {
            translationKey: "item:grenadeLauncher"
          },
          type: "FullAuto",
          textureInfo: "grenade_launcher",
          weight: 1,
          heldItemScale: 1.2,
          stackable: !0,
          description: {
            translationKey: "item:grenadeLauncherDescription"
          },
          secondaryDamage: 16,
          holdAsAiming: !0,
          hideAimingUI: !0
        },
        Iceball: {
          displayName: {
            translationKey: "item:iceball"
          },
          type: "Item",
          textureInfo: "iceball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:iceballDescription"
          },
          secondaryDamage: 8
        },
        "67 Base Projectile": {
          displayName: "67 Base Projectile",
          type: "Item",
          itemTexture: "67_projectile_base",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The base projectile for the 67 character in Heroes v Brainrots",
          secondaryDamage: 14
        },
        "67 Boosted Projectile": {
          displayName: "67 Boosted Projectile",
          type: "Item",
          itemTexture: "67_projectile_boosted",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The boosted projectile for the 67 character in Heroes v Brainrots",
          secondaryDamage: 19
        },
        "Capitano Grenade": {
          displayName: "Capitano Grenade",
          type: "Item",
          textureInfo: "moonstone_explosive_side",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "A small explosive grenade thrown by Capitano Explovissimo in Heroes v Brainrots"
        },
        "Scatter Pellet": {
          displayName: "Scatter Pellet",
          type: "Item",
          textureInfo: "pebble",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "Primary spread shot from Scatter in Heroes v Brainrots",
          secondaryDamage: 8
        },
        ...qB("Wood Bow", {
          displayName: {
            translationKey: "item:woodBow"
          },
          type: "Chargeable",
          textureName: "wood_bow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Wood Bow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          secondaryDamage: Math.floor(37.4),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Stone Bow", {
          displayName: {
            translationKey: "item:stoneBow"
          },
          type: "Chargeable",
          textureName: "stone_bow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Stone Bow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          secondaryDamage: Math.floor(45.9),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Iron Bow", {
          displayName: {
            translationKey: "item:ironBow"
          },
          type: "Chargeable",
          textureName: "iron_bow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Iron Bow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          secondaryDamage: Math.floor(57.8),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Gold Bow", {
          displayName: {
            translationKey: "item:goldBow"
          },
          type: "Chargeable",
          textureName: "gold_bow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Gold Bow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          secondaryDamage: Math.floor(62.9),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Diamond Bow", {
          displayName: {
            translationKey: "item:diamondBow"
          },
          type: "Chargeable",
          textureName: "diamond_bow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Diamond Bow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          secondaryDamage: Math.floor(68),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Wood Crossbow", {
          displayName: {
            translationKey: "item:woodCrossbow"
          },
          type: "Chargeable",
          textureName: "wood_crossbow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Wood Crossbow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Stone Crossbow", {
          displayName: {
            translationKey: "item:stoneCrossbow"
          },
          type: "Chargeable",
          textureName: "stone_crossbow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Stone Crossbow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Iron Crossbow", {
          displayName: {
            translationKey: "item:ironCrossbow"
          },
          type: "Chargeable",
          textureName: "iron_crossbow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Iron Crossbow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Gold Crossbow", {
          displayName: {
            translationKey: "item:goldCrossbow"
          },
          type: "Chargeable",
          textureName: "gold_crossbow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Gold Crossbow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        ...qB("Diamond Crossbow", {
          displayName: {
            translationKey: "item:diamondCrossbow"
          },
          type: "Chargeable",
          textureName: "diamond_crossbow",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Diamond Crossbow|meta|charging1",
          chargeStages: 4,
          chargeTime: 700,
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          },
          requiresArrow: !0
        }),
        "Wood Crossbow Charged": {
          displayName: {
            translationKey: "item:woodCrossbowCharged"
          },
          type: "Chargeable",
          textureInfo: "wood_crossbow_charged",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          secondaryDamage: Math.floor(37.4),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          }
        },
        "Stone Crossbow Charged": {
          displayName: {
            translationKey: "item:stoneCrossbowCharged"
          },
          type: "Chargeable",
          textureInfo: "stone_crossbow_charged",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          secondaryDamage: Math.floor(45.9),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          }
        },
        "Iron Crossbow Charged": {
          displayName: {
            translationKey: "item:ironCrossbowCharged"
          },
          type: "Chargeable",
          textureInfo: "iron_crossbow_charged",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          secondaryDamage: Math.floor(57.8),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          }
        },
        "Gold Crossbow Charged": {
          displayName: {
            translationKey: "item:goldCrossbowCharged"
          },
          type: "Chargeable",
          textureInfo: "gold_crossbow_charged",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          secondaryDamage: Math.floor(62.9),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          }
        },
        "Diamond Crossbow Charged": {
          displayName: {
            translationKey: "item:diamondCrossbowCharged"
          },
          type: "Chargeable",
          textureInfo: "diamond_crossbow_charged",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          secondaryDamage: Math.floor(68),
          holdAsAiming: !0,
          description: {
            translationKey: "item:bowDescription"
          }
        },
        Arrow: {
          displayName: {
            translationKey: "item:arrow"
          },
          type: "Item",
          textureInfo: "arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        ... function(cB, Bc) {
          console.assert("meta|dir1" === Bc.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
          const nc = {
            ...Bc
          };
          return delete nc.rootMetaDesc, {
            [cB]: {
              ...Bc,
              heldItemGlb: cB,
              textureInfo: Bc.textureName
            },
            [`${cB}|meta|dir2`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_2`
            },
            [`${cB}|meta|dir3`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_3`
            },
            [`${cB}|meta|dir4`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_4`
            },
            [`${cB}|meta|dir5`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_5`
            },
            [`${cB}|meta|dir6`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_6`
            },
            [`${cB}|meta|dir7`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_7`
            },
            [`${cB}|meta|dir8`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_8`
            },
            [`${cB}|meta|dir9`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_9`
            },
            [`${cB}|meta|dir10`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_10`
            },
            [`${cB}|meta|dir11`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_11`
            },
            [`${cB}|meta|dir12`]: {
              ...nc,
              displayName: cB,
              textureInfo: `${Bc.textureName}_dir_12`
            }
          }
        }("Compass", {
          displayName: {
            translationKey: "item:compass"
          },
          type: "Directional",
          textureName: "compass",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          rootMetaDesc: "Compass|meta|dir1",
          description: {
            translationKey: "item:compassDescription"
          }
        }),
        "Chunk Map": {
          displayName: "Chunk Map",
          type: "Item",
          textureInfo: "chunk_map",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0,
          description: "Drop into any locked chunk to instantly unlock it."
        },
        Bread: {
          displayName: {
            translationKey: "item:bread"
          },
          type: "Chargeable",
          textureInfo: "bread",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 24,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 950,
          rootMetaDesc: "Bread|meta|charging1"
        },
        "Bowl of Rice": {
          displayName: {
            translationKey: "item:bowlOfRice"
          },
          type: "Chargeable",
          textureInfo: "bowl_of_rice",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          eatable: !0,
          afterEatenItem: "Bowl",
          chargeSound: "eat1",
          eatHealAmt: 26,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 375,
          rootMetaDesc: "Bowl of Rice|meta|charging1"
        },
        Apple: {
          displayName: {
            translationKey: "item:apple"
          },
          type: "Chargeable",
          textureInfo: "apple",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 12,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Apple|meta|charging1"
        },
        Plum: {
          displayName: {
            translationKey: "item:plum"
          },
          type: "Chargeable",
          textureInfo: "plum",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:plumDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Plum|meta|charging1"
        },
        Coconut: {
          displayName: {
            translationKey: "item:coconut"
          },
          type: "Item",
          textureInfo: "coconut",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:coconutDescription"
          },
          secondaryDamage: 5
        },
        "Cracked Coconut": {
          displayName: {
            translationKey: "item:crackedCoconut"
          },
          type: "Chargeable",
          textureInfo: "cracked_coconut",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:crackedCoconutDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Cracked Coconut|meta|charging1"
        },
        Pear: {
          displayName: {
            translationKey: "item:pear"
          },
          type: "Chargeable",
          textureInfo: "pear",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:pearDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Pear|meta|charging1"
        },
        Cherry: {
          displayName: {
            translationKey: "item:cherry"
          },
          type: "Chargeable",
          textureInfo: "cherry",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:cherryDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Cherry|meta|charging1"
        },
        Banana: {
          displayName: {
            translationKey: "item:banana"
          },
          type: "Chargeable",
          textureInfo: "banana",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:bananaDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Banana|meta|charging1"
        },
        "Watermelon Slice": {
          displayName: {
            translationKey: "item:watermelonSlice"
          },
          type: "Chargeable",
          textureInfo: "watermelon_slice",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:watermelonSliceDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Watermelon Slice|meta|charging1"
        },
        "Gold Watermelon Slice": {
          displayName: {
            translationKey: "item:goldWatermelonSlice"
          },
          type: "Chargeable",
          textureInfo: "glistering_watermelon_slice",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:watermelonSliceDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Gold Watermelon Slice|meta|charging1"
        },
        "Melon Slice": {
          displayName: {
            translationKey: "item:melonSlice"
          },
          type: "Chargeable",
          textureInfo: "melon_slice",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:melonSliceDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Melon Slice|meta|charging1"
        },
        "Gold Melon Slice": {
          displayName: {
            translationKey: "item:goldMelonSlice"
          },
          type: "Chargeable",
          textureInfo: "glistering_melon_slice",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:melonSliceDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Gold Melon Slice|meta|charging1"
        },
        "Pumpkin Pie": {
          displayName: {
            translationKey: "item:pumpkinPie"
          },
          type: "Chargeable",
          textureInfo: "pumpkin_pie",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:pumpkinPieDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Pumpkin Pie|meta|charging1"
        },
        Corn: {
          displayName: {
            translationKey: "item:corn"
          },
          type: "Chargeable",
          textureInfo: "corn",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatShieldAmt: 20,
          description: {
            translationKey: "item:cornDescription"
          },
          chargeStages: 1,
          chargeTime: 850,
          rootMetaDesc: "Corn|meta|charging1"
        },
        Cornbread: {
          displayName: {
            translationKey: "item:cornbread"
          },
          type: "Chargeable",
          textureInfo: "cornbread",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 24,
          eatShieldAmt: 20,
          description: {
            translationKey: "item:cornbreadDescription"
          },
          chargeStages: 1,
          chargeTime: 950,
          rootMetaDesc: "Cornbread|meta|charging1"
        },
        "Chili Pepper": {
          displayName: {
            translationKey: "item:chiliPepper"
          },
          type: "Chargeable",
          textureInfo: "chili_pepper",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:chiliPepperDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Chili Pepper|meta|charging1"
        },
        Mango: {
          displayName: {
            translationKey: "item:mango"
          },
          type: "Item",
          textureInfo: "mango",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 5,
          description: {
            translationKey: "item:mangoDescription"
          }
        },
        Carrot: {
          displayName: {
            translationKey: "item:carrot"
          },
          type: "Chargeable",
          textureInfo: "carrot",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:carrotDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Carrot|meta|charging1"
        },
        "Gold Carrot": {
          displayName: {
            translationKey: "item:goldCarrot"
          },
          type: "Chargeable",
          textureInfo: "gold_carrot",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:goldCarrotDescription"
          },
          chargeStages: 1,
          chargeTime: 750,
          rootMetaDesc: "Gold Carrot|meta|charging1"
        },
        "Raw Potato": {
          displayName: {
            translationKey: "item:rawPotato"
          },
          type: "Chargeable",
          textureInfo: "raw_potato",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 20,
          description: {
            translationKey: "item:rawFoodDescription"
          },
          chargeStages: 1,
          chargeTime: 1050,
          rootMetaDesc: "Raw Potato|meta|charging1"
        },
        "Baked Potato": {
          displayName: {
            translationKey: "item:bakedPotato"
          },
          type: "Chargeable",
          textureInfo: "baked_potato",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 20,
          description: {
            translationKey: "item:bakedPotatoDescription"
          },
          chargeStages: 1,
          chargeTime: 1050,
          rootMetaDesc: "Baked Potato|meta|charging1"
        },
        Beetroot: {
          displayName: {
            translationKey: "item:beetroot"
          },
          type: "Chargeable",
          textureInfo: "beetroot",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "eat1",
          stackable: !0,
          description: {
            translationKey: "item:beetrootDescription"
          },
          chargeStages: 1,
          chargeTime: 1250,
          rootMetaDesc: "Beetroot|meta|charging1"
        },
        "Raw Porkchop": {
          displayName: {
            translationKey: "item:rawPorkchop"
          },
          type: "Chargeable",
          textureInfo: "raw_porkchop",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 25,
          description: {
            translationKey: "item:rawFoodDescription"
          },
          chargeStages: 1,
          chargeTime: 950,
          rootMetaDesc: "Raw Porkchop|meta|charging1"
        },
        "Cooked Porkchop": {
          displayName: {
            translationKey: "item:cookedPorkchop"
          },
          type: "Chargeable",
          textureInfo: "cooked_porkchop",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 25,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 950,
          rootMetaDesc: "Cooked Porkchop|meta|charging1"
        },
        "Raw Beef": {
          displayName: {
            translationKey: "item:rawBeef"
          },
          type: "Chargeable",
          textureInfo: "raw_beef",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 28,
          description: {
            translationKey: "item:rawFoodDescription"
          },
          chargeStages: 1,
          chargeTime: 1200,
          rootMetaDesc: "Raw Beef|meta|charging1"
        },
        Steak: {
          displayName: {
            translationKey: "item:steak"
          },
          type: "Chargeable",
          textureInfo: "steak",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 28,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 1200,
          rootMetaDesc: "Steak|meta|charging1"
        },
        "Raw Mutton": {
          displayName: {
            translationKey: "item:rawMutton"
          },
          type: "Chargeable",
          textureInfo: "raw_mutton",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 20,
          description: {
            translationKey: "item:rawFoodDescription"
          },
          chargeStages: 1,
          chargeTime: 800,
          rootMetaDesc: "Raw Mutton|meta|charging1"
        },
        "Cooked Mutton": {
          displayName: {
            translationKey: "item:cookedMutton"
          },
          type: "Chargeable",
          textureInfo: "cooked_mutton",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 20,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 800,
          rootMetaDesc: "Cooked Mutton|meta|charging1"
        },
        "Raw Venison": {
          displayName: {
            translationKey: "item:rawVenison"
          },
          type: "Chargeable",
          textureInfo: "raw_venison",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 16,
          description: {
            translationKey: "item:rawFoodDescription"
          },
          chargeStages: 1,
          chargeTime: 600,
          rootMetaDesc: "Raw Venison|meta|charging1"
        },
        "Cooked Venison": {
          displayName: {
            translationKey: "item:cookedVenison"
          },
          type: "Chargeable",
          textureInfo: "cooked_venison",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 16,
          description: {
            translationKey: "item:foodDescription"
          },
          chargeStages: 1,
          chargeTime: 600,
          rootMetaDesc: "Cooked Venison|meta|charging1"
        },
        "Rotten Flesh": {
          displayName: {
            translationKey: "item:rottenFlesh"
          },
          type: "Chargeable",
          textureInfo: "rotten_flesh",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          eatHealAmt: 15,
          description: {
            translationKey: "item:rottenFleshDescription"
          },
          chargeStages: 1,
          chargeTime: 850,
          rootMetaDesc: "Rotten Flesh|meta|charging1"
        },
        "Rotten Brain": {
          displayName: {
            translationKey: "item:rottenBrain"
          },
          type: "Chargeable",
          textureInfo: "rotten_brain",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          description: {
            translationKey: "item:rottenBrainDescription"
          },
          chargeStages: 1,
          chargeTime: 650,
          rootMetaDesc: "Rotten Brain|meta|charging1"
        },
        Bone: {
          displayName: {
            translationKey: "item:bone"
          },
          type: "Item",
          textureInfo: "bone",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Bone Meal": {
          displayName: {
            translationKey: "item:boneMeal"
          },
          type: "Item",
          textureInfo: "bone_meal",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:boneMealDescription"
          }
        },
        Leather: {
          displayName: {
            translationKey: "item:leather"
          },
          type: "Item",
          textureInfo: "leather",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Saddle: {
          displayName: {
            translationKey: "item:saddle"
          },
          type: "Item",
          textureInfo: "saddle",
          weight: 1,
          heldItemScale: 1,
          stackable: !1
        },
        "Spirit Saddle": {
          displayName: {
            translationKey: "item:spiritSaddle"
          },
          type: "Item",
          textureInfo: "spirit_saddle",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:spiritSaddleDescription"
          }
        },
        Fur: {
          displayName: {
            translationKey: "item:fur"
          },
          type: "Item",
          textureInfo: "fur",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:furDescription"
          }
        },
        "Golem Eye": {
          displayName: {
            translationKey: "item:golemEye"
          },
          type: "Item",
          textureInfo: "golem_eye",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:golemEyeDescription"
          }
        },
        "Knight Heart": {
          displayName: {
            translationKey: "item:knightHeart"
          },
          type: "Item",
          textureInfo: "knight_heart",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:knightHeartDescription"
          }
        },
        "Teleport Heart": {
          displayName: "Teleport Heart",
          type: "Item",
          textureInfo: "teleport_heart",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The still-beating core of a Blink. Salvaged from a Warp Stalker."
        },
        "Frost Shard": {
          displayName: "Frost Shard",
          type: "Item",
          textureInfo: "frost_shard",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "A splinter of cryogenic shell that never melts. Salvaged from a Frost Revenant."
        },
        "Molten Cog": {
          displayName: "Molten Cog",
          type: "Item",
          textureInfo: "molten_cog",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "A gear from an overload mechanism, seized mid-cycle. Salvaged from a Magma Warden."
        },
        "Choir Bell": {
          displayName: "Choir Bell",
          type: "Item",
          textureInfo: "choir_bell",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The toll that calls the dead. Salvaged from a Hollow Choir."
        },
        "Siege Core": {
          displayName: "Siege Core",
          type: "Item",
          textureInfo: "siege_core",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The firing heart of a barrage. Salvaged from a Siege Engine."
        },
        Flywheel: {
          displayName: "Flywheel",
          type: "Item",
          textureInfo: "flywheel",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "The wheel a room-mill spins around. Salvaged from a Carousel."
        },
        "Radiant Spark": {
          displayName: "Radiant Spark",
          type: "Item",
          textureInfo: "radiant_spark",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "A mote of the failure state itself. Salvaged from Breach Zero."
        },
        "Brood Sac": {
          displayName: "Brood Sac",
          type: "Item",
          textureInfo: "brood_sac",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "A sac filled with an acidic bile. Still full. Salvaged from a Broodfather."
        },
        Bandolier: {
          displayName: "Bandolier",
          type: "Item",
          textureInfo: "bandolier",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: "Her charge belt. Three still on it, and nobody has volunteered to count again. Salvaged from a Deadlock."
        },
        "Name Tag": {
          displayName: {
            translationKey: "item:nameTag"
          },
          type: "Item",
          textureInfo: "name_tag",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:nameTagDescription"
          }
        },
        Book: {
          displayName: {
            translationKey: "item:book"
          },
          type: "Item",
          textureInfo: "book",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:bookDescription"
          }
        },
        "Empty Bottle": {
          displayName: {
            translationKey: "item:emptyBottle"
          },
          type: "Item",
          textureInfo: "empty_bottle",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:emptyBottleDescription"
          }
        },
        "Water Bottle": {
          displayName: {
            translationKey: "item:waterBottle"
          },
          type: "Chargeable",
          textureInfo: "water_bottle",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:waterBottleDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Water Bottle|meta|charging1"
        },
        "Slowness Potion": {
          displayName: {
            translationKey: "item:slownessPotion"
          },
          type: "Chargeable",
          textureInfo: "slowness_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:slownessPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Slowness Potion|meta|charging1"
        },
        "Slowness Potion II": {
          displayName: {
            translationKey: "item:slownessPotionII"
          },
          type: "Chargeable",
          textureInfo: "slowness_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Slowness Potion",
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:slownessPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Slowness Potion II|meta|charging1"
        },
        "Splash Slowness Potion": {
          displayName: {
            translationKey: "item:splashSlownessPotion"
          },
          type: "Item",
          textureInfo: "splash_slowness_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashSlownessPotionDescription"
          },
          rootMetaDesc: "Splash Slowness Potion|meta|charging1"
        },
        "Splash Slowness Potion II": {
          displayName: {
            translationKey: "item:splashSlownessPotionII"
          },
          type: "Item",
          textureInfo: "splash_slowness_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Slowness Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashSlownessPotionDescription"
          },
          rootMetaDesc: "Splash Slowness Potion II|meta|charging1"
        },
        "Arrow of Slowness": {
          displayName: {
            translationKey: "item:arrowOfSlowness"
          },
          type: "Item",
          textureInfo: "slowness_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Poison Potion": {
          displayName: {
            translationKey: "item:poisonPotion"
          },
          type: "Chargeable",
          textureInfo: "poison",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:poisonPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Poison Potion|meta|charging1"
        },
        "Poison Potion II": {
          displayName: {
            translationKey: "item:poisonPotionII"
          },
          type: "Chargeable",
          textureInfo: "poison",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Poison Potion",
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:poisonPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Poison Potion II|meta|charging1"
        },
        "Splash Poison Potion": {
          displayName: {
            translationKey: "item:splashPoisonPotion"
          },
          type: "Item",
          textureInfo: "splash_poison",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashPoisonPotionDescription"
          },
          rootMetaDesc: "Splash Poison Potion|meta|charging1"
        },
        "Splash Poison Potion II": {
          displayName: {
            translationKey: "item:splashPoisonPotionII"
          },
          type: "Item",
          textureInfo: "splash_poison",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Poison Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashPoisonPotionDescription"
          },
          rootMetaDesc: "Splash Poison Potion II|meta|charging1"
        },
        "Arrow of Poison": {
          displayName: {
            translationKey: "item:arrowOfPoison"
          },
          type: "Item",
          textureInfo: "poison_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Weakness Potion": {
          displayName: {
            translationKey: "item:weaknessPotion"
          },
          type: "Chargeable",
          textureInfo: "weakness_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:weaknessPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Weakness Potion|meta|charging1"
        },
        "Weakness Potion II": {
          displayName: {
            translationKey: "item:weaknessPotionII"
          },
          type: "Chargeable",
          textureInfo: "weakness_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Weakness Potion",
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:weaknessPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Weakness Potion II|meta|charging1"
        },
        "Splash Weakness Potion": {
          displayName: {
            translationKey: "item:splashWeaknessPotion"
          },
          type: "Item",
          textureInfo: "splash_weakness_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashWeaknessPotionDescription"
          }
        },
        "Splash Weakness Potion II": {
          displayName: {
            translationKey: "item:splashWeaknessPotionII"
          },
          type: "Item",
          textureInfo: "splash_weakness_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Weakness Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashWeaknessPotionDescription"
          }
        },
        "Arrow of Weakness": {
          displayName: {
            translationKey: "item:arrowOfWeakness"
          },
          type: "Item",
          textureInfo: "weakness_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Instant Damage Potion": {
          displayName: {
            translationKey: "item:instantDamagePotion"
          },
          type: "Chargeable",
          textureInfo: "instant_damage_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:instantDamagePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Instant Damage Potion|meta|charging1"
        },
        "Instant Damage Potion II": {
          displayName: {
            translationKey: "item:instantDamagePotionII"
          },
          type: "Chargeable",
          textureInfo: "instant_damage_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Instant Damage Potion",
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:instantDamagePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Instant Damage Potion II|meta|charging1"
        },
        "Splash Instant Damage Potion": {
          displayName: {
            translationKey: "item:splashInstantDamagePotion"
          },
          type: "Item",
          textureInfo: "splash_instant_damage_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashInstantDamagePotionDescription"
          }
        },
        "Splash Instant Damage Potion II": {
          displayName: {
            translationKey: "item:splashInstantDamagePotionII"
          },
          type: "Item",
          textureInfo: "splash_instant_damage_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Instant Damage Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashInstantDamagePotionDescription"
          }
        },
        "Arrow of Instant Damage": {
          displayName: {
            translationKey: "item:arrowOfInstantDamage"
          },
          type: "Item",
          textureInfo: "instant_damage_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Milk Potion": {
          displayName: {
            translationKey: "item:milkPotion"
          },
          type: "Chargeable",
          textureInfo: "milk_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:milkPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Milk Potion|meta|charging1"
        },
        "Splash Milk Potion": {
          displayName: {
            translationKey: "item:splashMilkPotion"
          },
          type: "Item",
          textureInfo: "splash_milk_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:milkPotionDescription"
          }
        },
        "Arrow of Milk": {
          displayName: {
            translationKey: "item:arrowOfMilk"
          },
          type: "Item",
          textureInfo: "milk_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Speed Potion": {
          displayName: {
            translationKey: "item:speedPotion"
          },
          type: "Chargeable",
          textureInfo: "speed_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:speedPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Speed Potion|meta|charging1"
        },
        "Speed Potion II": {
          displayName: {
            translationKey: "item:speedPotionII"
          },
          type: "Chargeable",
          textureInfo: "speed_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Speed Potion",
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:speedPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Speed Potion II|meta|charging1"
        },
        "Splash Speed Potion": {
          displayName: {
            translationKey: "item:splashSpeedPotion"
          },
          type: "Item",
          textureInfo: "splash_speed_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashSpeedPotionDescription"
          },
          rootMetaDesc: "Splash Speed Potion|meta|charging1"
        },
        "Splash Speed Potion II": {
          displayName: {
            translationKey: "item:splashSpeedPotionII"
          },
          type: "Item",
          textureInfo: "splash_speed_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Speed Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashSpeedPotionDescription"
          }
        },
        "Arrow of Speed": {
          displayName: {
            translationKey: "item:arrowOfSpeed"
          },
          type: "Item",
          textureInfo: "speed_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Defense Potion": {
          displayName: {
            translationKey: "item:defensePotion"
          },
          type: "Chargeable",
          textureInfo: "defense_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:defensePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Defense Potion|meta|charging1"
        },
        "Defense Potion II": {
          displayName: {
            translationKey: "item:defensePotionII"
          },
          type: "Chargeable",
          textureInfo: "defense_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Defense Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:defensePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Defense Potion II|meta|charging1"
        },
        "Splash Defense Potion": {
          displayName: {
            translationKey: "item:splashDefensePotion"
          },
          type: "Item",
          textureInfo: "splash_defense_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashDefensePotionDescription"
          }
        },
        "Splash Defense Potion II": {
          displayName: {
            translationKey: "item:splashDefensePotionII"
          },
          type: "Item",
          textureInfo: "splash_defense_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Defense Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashDefensePotionDescription"
          }
        },
        "Arrow of Defense": {
          displayName: {
            translationKey: "item:arrowOfDefense"
          },
          type: "Item",
          textureInfo: "defense_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Strength Potion": {
          displayName: {
            translationKey: "item:strengthPotion"
          },
          type: "Chargeable",
          textureInfo: "strength_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:strengthPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Strength Potion|meta|charging1"
        },
        "Strength Potion II": {
          displayName: {
            translationKey: "item:strengthPotionII"
          },
          type: "Chargeable",
          textureInfo: "strength_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Strength Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:strengthPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Strength Potion II|meta|charging1"
        },
        "Splash Strength Potion": {
          displayName: {
            translationKey: "item:splashStrengthPotion"
          },
          type: "Item",
          textureInfo: "splash_strength_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashStrengthPotionDescription"
          }
        },
        "Splash Strength Potion II": {
          displayName: {
            translationKey: "item:splashStrengthPotionII"
          },
          type: "Item",
          textureInfo: "splash_strength_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Strength Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashStrengthPotionDescription"
          }
        },
        "Arrow of Strength": {
          displayName: {
            translationKey: "item:arrowOfStrength"
          },
          type: "Item",
          textureInfo: "strength_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Invisibility Potion": {
          displayName: {
            translationKey: "item:invisibilityPotion"
          },
          type: "Chargeable",
          textureInfo: "invisibility_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:invisibilityPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Invisibility Potion|meta|charging1"
        },
        "Splash Invisibility Potion": {
          displayName: {
            translationKey: "item:splashInvisibilityPotion"
          },
          type: "Item",
          textureInfo: "splash_invisibility_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashInvisibilityPotionDescription"
          }
        },
        "Arrow of Invisibility": {
          displayName: {
            translationKey: "item:arrowOfInvisibility"
          },
          type: "Item",
          textureInfo: "invisibility_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Jump Potion": {
          displayName: {
            translationKey: "item:jumpPotion"
          },
          type: "Chargeable",
          textureInfo: "jump_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:jumpPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1e3,
          rootMetaDesc: "Jump Potion|meta|charging1"
        },
        "Jump Potion II": {
          displayName: {
            translationKey: "item:jumpPotionII"
          },
          type: "Chargeable",
          textureInfo: "jump_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Jump Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:jumpPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1e3,
          rootMetaDesc: "Jump Potion II|meta|charging1"
        },
        "Splash Jump Potion": {
          displayName: {
            translationKey: "item:splashJumpPotion"
          },
          type: "Item",
          textureInfo: "splash_jump_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashJumpPotionDescription"
          }
        },
        "Splash Jump Potion II": {
          displayName: {
            translationKey: "item:splashJumpPotionII"
          },
          type: "Item",
          textureInfo: "splash_jump_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Jump Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashJumpPotionDescription"
          }
        },
        "Arrow of Jumping": {
          displayName: {
            translationKey: "item:arrowOfJumping"
          },
          type: "Item",
          textureInfo: "jump_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Knockback Potion": {
          displayName: {
            translationKey: "item:knockbackPotion"
          },
          type: "Chargeable",
          textureInfo: "knockback_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:knockbackPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Knockback Potion|meta|charging1"
        },
        "Splash Knockback Potion": {
          displayName: {
            translationKey: "item:splashKnockbackPotion"
          },
          type: "Item",
          textureInfo: "splash_knockback_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashKnockbackPotionDescription"
          }
        },
        "Splash Knockback Potion II": {
          displayName: {
            translationKey: "item:splashKnockbackPotionII"
          },
          type: "Item",
          textureInfo: "splash_knockback_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Knockback Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashKnockbackPotionDescription"
          }
        },
        "Arrow of Knockback": {
          displayName: {
            translationKey: "item:arrowOfKnockback"
          },
          type: "Item",
          textureInfo: "knockback_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Regeneration Potion": {
          displayName: {
            translationKey: "item:regenerationPotion"
          },
          type: "Chargeable",
          textureInfo: "regen_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:regenerationPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Regeneration Potion|meta|charging1"
        },
        "Regeneration Potion II": {
          displayName: {
            translationKey: "item:regenerationPotionII"
          },
          type: "Chargeable",
          textureInfo: "regen_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Regeneration Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:regenerationPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Regeneration Potion II|meta|charging1"
        },
        "Splash Regeneration Potion": {
          displayName: {
            translationKey: "item:splashRegenerationPotion"
          },
          type: "Item",
          textureInfo: "splash_regen_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashRegenerationPotionDescription"
          }
        },
        "Splash Regeneration Potion II": {
          displayName: {
            translationKey: "item:splashRegenerationPotionII"
          },
          type: "Item",
          textureInfo: "splash_regen_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Regeneration Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashRegenerationPotionDescription"
          }
        },
        "Arrow of Regeneration": {
          displayName: {
            translationKey: "item:arrowOfRegeneration"
          },
          type: "Item",
          textureInfo: "regen_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Instant Healing Potion": {
          displayName: {
            translationKey: "item:instantHealingPotion"
          },
          type: "Chargeable",
          textureInfo: "heal_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:instantHealingPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Instant Healing Potion|meta|charging1"
        },
        "Instant Healing Potion II": {
          displayName: {
            translationKey: "item:instantHealingPotionII"
          },
          type: "Chargeable",
          textureInfo: "heal_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Instant Healing Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:instantHealingPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Instant Healing Potion II|meta|charging1"
        },
        "Splash Instant Healing Potion": {
          displayName: {
            translationKey: "item:splashInstantHealingPotion"
          },
          type: "Item",
          textureInfo: "splash_heal_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashInstantHealingPotionDescription"
          }
        },
        "Splash Instant Healing Potion II": {
          displayName: {
            translationKey: "item:splashInstantHealingPotionII"
          },
          type: "Item",
          textureInfo: "splash_heal_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Instant Healing Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashInstantHealingPotionDescription"
          }
        },
        "Arrow of Instant Healing": {
          displayName: {
            translationKey: "item:arrowOfInstantHealing"
          },
          type: "Item",
          textureInfo: "heal_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Haste Potion": {
          displayName: {
            translationKey: "item:hastePotion"
          },
          type: "Chargeable",
          textureInfo: "haste_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:hastePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Haste Potion|meta|charging1"
        },
        "Haste Potion II": {
          displayName: {
            translationKey: "item:hastePotionII"
          },
          type: "Chargeable",
          textureInfo: "haste_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Haste Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:hastePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Haste Potion II|meta|charging1"
        },
        "Splash Haste Potion": {
          displayName: {
            translationKey: "item:splashHastePotion"
          },
          type: "Item",
          textureInfo: "splash_haste_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashHastePotionDescription"
          }
        },
        "Splash Haste Potion II": {
          displayName: {
            translationKey: "item:splashHastePotionII"
          },
          type: "Item",
          textureInfo: "splash_haste_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Haste Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashHastePotionDescription"
          }
        },
        "Arrow of Haste": {
          displayName: {
            translationKey: "item:arrowOfHaste"
          },
          type: "Item",
          textureInfo: "haste_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Shield Potion": {
          displayName: {
            translationKey: "item:shieldPotion"
          },
          type: "Chargeable",
          textureInfo: "shield_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:shieldPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Shield Potion|meta|charging1"
        },
        "Shield Potion II": {
          displayName: {
            translationKey: "item:shieldPotionII"
          },
          type: "Chargeable",
          textureInfo: "shield_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Shield Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:shieldPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Shield Potion II|meta|charging1"
        },
        "Splash Shield Potion": {
          displayName: {
            translationKey: "item:splashShieldPotion"
          },
          type: "Item",
          textureInfo: "splash_shield_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashShieldPotionDescription"
          }
        },
        "Splash Shield Potion II": {
          displayName: {
            translationKey: "item:splashShieldPotionII"
          },
          type: "Item",
          textureInfo: "splash_shield_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Shield Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashShieldPotionDescription"
          }
        },
        "Arrow of Shield": {
          displayName: {
            translationKey: "item:arrowOfShield"
          },
          type: "Item",
          textureInfo: "shield_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Double Jump Potion": {
          displayName: {
            translationKey: "item:doubleJumpPotion"
          },
          type: "Chargeable",
          textureInfo: "double_jump_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:doubleJumpPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Double Jump Potion|meta|charging1"
        },
        "Splash Double Jump Potion": {
          displayName: {
            translationKey: "item:splashDoubleJumpPotion"
          },
          type: "Item",
          textureInfo: "splash_double_jump_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashDoubleJumpPotionDescription"
          }
        },
        "Arrow of Double Jump": {
          displayName: {
            translationKey: "item:arrowOfDoubleJump"
          },
          type: "Item",
          textureInfo: "double_jump_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Heat Resistance Potion": {
          displayName: {
            translationKey: "item:heatResistancePotion"
          },
          type: "Chargeable",
          textureInfo: "heat_resistance_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:heatResistancePotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Heat Resistance Potion|meta|charging1"
        },
        "Splash Heat Resistance Potion": {
          displayName: {
            translationKey: "item:splashHeatResistancePotion"
          },
          type: "Item",
          textureInfo: "splash_heat_resistance_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashHeatResistancePotionDescription"
          }
        },
        "Arrow of Heat Resistance": {
          displayName: {
            translationKey: "item:arrowOfHeatResistance"
          },
          type: "Item",
          textureInfo: "heat_resistance_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "X-Ray Vision Potion": {
          displayName: {
            translationKey: "item:xRayVisionPotion"
          },
          type: "Chargeable",
          textureInfo: "x_ray_vision_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:xRayVisionPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "X-Ray Vision Potion|meta|charging1"
        },
        "Splash X-Ray Vision Potion": {
          displayName: {
            translationKey: "item:splashXRayVisionPotion"
          },
          type: "Item",
          textureInfo: "splash_x_ray_vision_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashXRayVisionPotionDescription"
          }
        },
        "Arrow of X-Ray Vision": {
          displayName: {
            translationKey: "item:arrowOfXRayVision"
          },
          type: "Item",
          textureInfo: "x_ray_vision_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Mining Yield Potion": {
          displayName: {
            translationKey: "item:miningYieldPotion"
          },
          type: "Chargeable",
          textureInfo: "mining_yield_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:miningYieldPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Mining Yield Potion|meta|charging1"
        },
        "Mining Yield Potion II": {
          displayName: {
            translationKey: "item:miningYieldPotionII"
          },
          type: "Chargeable",
          textureInfo: "mining_yield_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Mining Yield Potion",
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:miningYieldPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Mining Yield Potion II|meta|charging1"
        },
        "Splash Mining Yield Potion": {
          displayName: {
            translationKey: "item:splashMiningYieldPotion"
          },
          type: "Item",
          textureInfo: "splash_mining_yield_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashMiningYieldPotionDescription"
          }
        },
        "Splash Mining Yield Potion II": {
          displayName: {
            translationKey: "item:splashMiningYieldPotionII"
          },
          type: "Item",
          textureInfo: "splash_mining_yield_potion",
          weight: 1,
          heldItemScale: 1,
          heldItemGlb: "Splash Mining Yield Potion",
          stackable: !1,
          description: {
            translationKey: "item:splashMiningYieldPotionDescription"
          }
        },
        "Arrow of Mining Yield": {
          displayName: {
            translationKey: "item:arrowOfMiningYield"
          },
          type: "Item",
          textureInfo: "mining_yield_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Brain Rot Potion": {
          displayName: {
            translationKey: "item:brainRotPotion"
          },
          type: "Chargeable",
          textureInfo: "brain_rot_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:brainRotPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Brain Rot Potion|meta|charging1"
        },
        "Splash Brain Rot Potion": {
          displayName: {
            translationKey: "item:splashBrainRotPotion"
          },
          type: "Item",
          textureInfo: "splash_brain_rot_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashBrainRotPotionDescription"
          }
        },
        "Arrow of Brain Rot": {
          displayName: {
            translationKey: "item:arrowOfBrainRot"
          },
          type: "Item",
          textureInfo: "brain_rot_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Chaos Potion": {
          displayName: {
            translationKey: "item:chaosPotion"
          },
          type: "Chargeable",
          textureInfo: "chaos_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:chaosPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 600,
          rootMetaDesc: "Chaos Potion|meta|charging1"
        },
        "Teleportation Potion": {
          displayName: {
            translationKey: "item:teleportationPotion"
          },
          type: "Chargeable",
          textureInfo: "teleportation_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          afterEatenItem: "Empty Bottle",
          stackable: !1,
          description: {
            translationKey: "item:teleportationPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 600,
          rootMetaDesc: "Teleportation Potion|meta|charging1"
        },
        Ammo: {
          displayName: {
            translationKey: "item:ammo"
          },
          type: "Item",
          textureInfo: "ammo",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        ...ec("AK-47", {
          heldItemScale: 2
        }),
        ...ec("M16", {
          heldItemScale: 2
        }),
        ...ec("MP40", {
          heldItemScale: 2.5
        }),
        ...ec("TAR-21", {
          heldItemScale: 2.5
        }),
        ...ec("M1911", {
          heldItemScale: 2
        }),
        ...ec("One Shot Pistol", {
          heldItemScale: 2,
          heldItemGlb: "M1911",
          textureInfo: "M1911"
        }),
        ...ec("Double Barrel", {
          heldItemScale: 2.5,
          textureInfo: "Double-barreled"
        }),
        ...ec("AWP", {
          heldItemScale: 3
        }),
        ...ec("Deagle", {
          heldItemScale: 2
        }),
        ...ec("Striker-12", {
          heldItemScale: 2.5
        }),
        ...ec("VSR", {
          heldItemScale: 2.5
        }),
        ...ec("DMR", {
          heldItemScale: 2.5
        }),
        ...ec("Minigun", {
          heldItemScale: 3
        }),
        ...ec("FMR", {
          heldItemScale: 2
        }),
        ...ec("SKAR", {
          heldItemScale: 2.5
        }),
        ...ec("Block-19", {
          heldItemScale: 2.5
        }),
        ...ec("Mini Izu", {
          heldItemScale: 2
        }),
        ...ec("GPMG", {
          heldItemScale: 2.8
        }),
        "Gold Coin": {
          displayName: {
            translationKey: "item:goldCoin"
          },
          type: "Item",
          textureInfo: "gold_coin",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Updraft: {
          displayName: {
            translationKey: "item:updraft"
          },
          type: "FullAuto",
          textureInfo: "updraft",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:updraftDescription"
          },
          fireInterval: 515
        },
        Snowdash: {
          displayName: {
            translationKey: "item:snowdash"
          },
          type: "FullAuto",
          textureInfo: "snowdash",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:snowdashDescription"
          },
          fireInterval: 515
        },
        "Floor Creator": {
          displayName: {
            translationKey: "item:floorCreator"
          },
          type: "Item",
          textureInfo: "floor_creator",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:floorCreatorDescription"
          }
        },
        "Moonstone Remote Explosive": {
          displayName: {
            translationKey: "item:moonstoneRemoteExplosive"
          },
          type: "Item",
          textureInfo: "moonstone_remote_explosive",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:moonstoneRemoteExplosiveDescription"
          },
          heldItemGlb: "Moonstone Remote"
        },
        "Moonstone Remote": {
          displayName: {
            translationKey: "item:moonstoneRemote"
          },
          type: "Item",
          textureInfo: "moonstone_remote",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:moonstoneRemoteDescription"
          }
        },
        "Ice Bridge": {
          displayName: {
            translationKey: "item:iceBridge"
          },
          type: "Item",
          textureInfo: "ice_bridge",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:iceBridgeDescription"
          },
          bridgeLength: zB
        },
        "Maple Planks Bridge": {
          displayName: {
            translationKey: "item:maplePlanksBridge"
          },
          type: "Item",
          textureInfo: "maple_planks_bridge",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:maplePlanksBridgeDescription"
          },
          bridgeLength: zB
        },
        "Messy Stone Bridge": {
          displayName: {
            translationKey: "item:messyStoneBridge"
          },
          type: "Item",
          textureInfo: "messy_stone_bridge",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:messyStoneBridgeDescription"
          },
          bridgeLength: zB
        },
        ...(0, sc.H)((cB => `${cB} Balloon`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}Balloon`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_balloon`,
          heldItemGlb: cB => `${cB} Balloon Item`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:balloonDescription"
          }
        }),
        ...(0, sc.H)((cB => `INTERNAL_MESH_${cB} Balloon`), {
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_balloon`,
          heldItemGlb: cB => `${cB} Balloon`,
          type: "Item",
          weight: 1,
          heldItemScale: 4,
          stackable: !1
        }),
        ...(0, sc.H)((cB => `${cB} Popup Tower`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}PopupTower`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_popup_tower`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:popupTowerDescription"
          }
        }),
        ...(0, sc.H)((cB => `${cB} Paintball Gun`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}PaintballGun`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_paintball_gun`,
          type: "FullAuto",
          weight: 1,
          heldItemScale: .5,
          stackable: !1,
          description: {
            translationKey: "item:paintballGunDescription"
          },
          fireInterval: 167,
          secondaryDamage: 100,
          holdAsAiming: !0,
          hideAimingUI: !0
        }),
        ...(0, sc.H)((cB => `${cB} Paintball`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}Paintball`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_paintball`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:paintballDescription"
          }
        }),
        ...(0, sc.H)((cB => `${cB} Heavy Paintball Gun`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}HeavyPaintballGun`
          }),
          textureInfo: cB => `${(0,Vc.Rd)(cB)}_heavy_paintball_gun`,
          type: "FullAuto",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:paintballGunDescription"
          },
          fireInterval: 1015,
          secondaryDamage: 250,
          holdAsAiming: !0,
          hideAimingUI: !0
        }),
        ...(0, sc.H)((cB => `${cB} Paintball Explosive Item`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}PaintballExplosive`
          }),
          textureInfo: cB => `explosive_paint_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:paintballExplosiveDescription"
          }
        }),
        ...(0, sc.H)((cB => `${cB} Sticky Paintball Explosive Item`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}StickyPaintballExplosive`
          }),
          textureInfo: cB => `explosive_paint_sticky_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:stickyPaintballExplosiveDescription"
          }
        }),
        ...(0, sc.H)((cB => `${cB} Seeking Paintball Explosive Item`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}SeekingPaintballExplosive`
          }),
          textureInfo: cB => `explosive_paint_seeking_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:seekingPaintballExplosiveDescription"
          }
        }),
        ...(0, sc.H)((cB => `${cB} Quick Paintball Explosive Item`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}QuickPaintballExplosive`
          }),
          textureInfo: cB => `explosive_paint_quick_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:quickPaintballExplosiveDescription"
          }
        }),
        ... function(cB, Bc) {
          const nc = {},
            Vc = (0, sc.H)(cB, Bc);
          for (const Ic in Vc) Object.assign(nc, qB(Ic, Vc[Ic]));
          return nc
        }((cB => `${cB} Paint Bow`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}PaintBow`
          }),
          textureName: cB => `${(0,Vc.Rd)(cB)}_paint_bow`,
          rootMetaDesc: cB => `${cB} Paint Bow|meta|charging1`,
          type: "Chargeable",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1,
          chargeStages: 4,
          chargeTime: 1500,
          holdAsAiming: !0,
          description: {
            translationKey: "item:paintBowDescription"
          },
          minChargeStateToUse: 0
        }),
        ...Object.fromEntries(Mc.l.map((cB => {
          const Bc = (0, Vc.Nd)(cB),
            nc = (0, Vc.Rd)(cB);
          return [(0, Vc.Fb)(cB), {
            displayName: {
              translationKey: `item:${Bc}SpawnOrb`
            },
            type: "Item",
            textureInfo: `${nc}_spawn_orb`,
            weight: 1,
            heldItemScale: 1,
            stackable: !0,
            description: {
              translationKey: `item:${Bc}SpawnOrbDescription`,
              params: {
                mob: cB
              }
            }
          }]
        }))),
        "Mob Catcher": {
          displayName: {
            translationKey: "item:mobCatcher"
          },
          type: "Item",
          textureInfo: "mob_catcher",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:mobCatcherDescription"
          }
        },
        ...Object.fromEntries(Mc.h.flatMap((cB => {
          const Bc = (0, Vc.Rd)(cB);
          return Mc.i[cB].map((nc => {
            var Ic;
            const rB = "default" !== nc && (null === (Ic = mB[cB]) || void 0 === Ic ? void 0 : Ic.includes(nc)),
              uc = rB ? {
                heldItemGlb: (0, Vc.qb)(cB, "default")
              } : {};
            return [(0, Vc.qb)(cB, nc), {
              type: "Item",
              textureInfo: `caught_${Bc}_${rB?"default":nc}`,
              weight: 1,
              heldItemScale: 1,
              stackable: !1,
              ...uc
            }]
          }))
        }))),
        ...qB("Timed Spike Bomb", {
          displayName: {
            translationKey: "item:timedSpikeBomb"
          },
          type: "Chargeable",
          textureName: "timed_spike_bomb",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:timedSpikeBombDescription"
          },
          chargeStages: 4,
          chargeTime: 2e3,
          chargeSound: "fallsmall",
          rootMetaDesc: "Timed Spike Bomb|meta|charging1"
        }),
        "Toxin Ball": {
          displayName: {
            translationKey: "item:toxinBall"
          },
          type: "Item",
          textureInfo: "toxin_ball",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:toxinBallDescription"
          },
          secondaryDamage: 13
        },
        "Aura XP Fragment": {
          displayName: {
            translationKey: "item:auraXpFragment"
          },
          type: "Chargeable",
          textureInfo: "aura_xp_fragment",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          description: {
            translationKey: "item:auraXpFragmentDescription"
          },
          chargeStages: 1,
          chargeTime: 500,
          rootMetaDesc: "Aura XP Fragment|meta|charging1"
        },
        "Aura XP Orb": {
          displayName: {
            translationKey: "item:auraXpOrb"
          },
          type: "Chargeable",
          textureInfo: "aura_xp_orb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          eatable: !0,
          chargeSound: "eat1",
          description: {
            translationKey: "item:auraXpOrbDescription"
          },
          chargeStages: 1,
          chargeTime: 1250,
          rootMetaDesc: "Aura XP Orb|meta|charging1"
        },
        "Aura XP Potion": {
          displayName: {
            translationKey: "item:auraXpPotion"
          },
          type: "Chargeable",
          textureInfo: "aura_xp_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:auraXpPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Aura XP Potion|meta|charging1"
        },
        "Aura XP Potion II": {
          displayName: {
            translationKey: "item:auraXpPotionII"
          },
          type: "Chargeable",
          textureInfo: "aura_xp_potion",
          weight: 1,
          heldItemScale: 1,
          eatable: !0,
          chargeSound: "drink",
          stackable: !1,
          afterEatenItem: "Empty Bottle",
          description: {
            translationKey: "item:auraXpPotionDescription"
          },
          chargeStages: 1,
          chargeTime: 1600,
          rootMetaDesc: "Aura XP Potion II|meta|charging1"
        },
        "Splash Aura XP Potion": {
          displayName: {
            translationKey: "item:splashAuraXpPotion"
          },
          type: "Item",
          textureInfo: "splash_aura_xp_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashAuraXpPotionDescription"
          }
        },
        "Splash Aura XP Potion II": {
          displayName: {
            translationKey: "item:splashAuraXpPotionII"
          },
          type: "Item",
          textureInfo: "splash_aura_xp_potion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:splashAuraXpPotionDescription"
          }
        },
        "Arrow of Aura XP": {
          displayName: {
            translationKey: "item:arrowOfAuraXp"
          },
          type: "Item",
          textureInfo: "aura_xp_arrow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        Firecracker: {
          displayName: {
            translationKey: "item:firecracker"
          },
          type: "Item",
          textureInfo: "firecracker",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerDescription"
          },
          secondaryDamage: 15
        },
        "Rainbow Firecracker": {
          displayName: {
            translationKey: "item:rainbowFirecracker"
          },
          type: "Item",
          textureInfo: "firecracker_rainbow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerDescription"
          },
          secondaryDamage: 15
        },
        ...(0, sc.H)((cB => `${cB} Firecracker`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}Firecracker`
          }),
          textureInfo: cB => `firecracker_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerDescription"
          },
          secondaryDamage: 15
        }),
        "Firecracker Pebble": {
          displayName: {
            translationKey: "item:firecrackerPebble"
          },
          type: "Item",
          textureInfo: "firecracker_pebble",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerPebbleDescription"
          },
          secondaryDamage: 15
        },
        "Rainbow Firecracker Pebble": {
          displayName: {
            translationKey: "item:rainbowFirecrackerPebble"
          },
          type: "Item",
          textureInfo: "firecracker_pebble_rainbow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerPebbleDescription"
          },
          secondaryDamage: 15
        },
        ...(0, sc.H)((cB => `${cB} Firecracker Pebble`), {
          displayName: cB => ({
            translationKey: `item:${(0,Vc.Nd)(cB)}FirecrackerPebble`
          }),
          textureInfo: cB => `firecracker_pebble_${(0,Vc.Rd)(cB)}`,
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:firecrackerPebbleDescription"
          },
          secondaryDamage: 15
        }),
        "WorldBuilder Wand": {
          displayName: {
            translationKey: "item:worldBuilderWand"
          },
          type: "Item",
          textureInfo: "worldbuilder_wand",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:worldBuilderWandDescription"
          }
        },
        "Red Strongfish": {
          displayName: {
            translationKey: "item:redStrongfish"
          },
          type: "Item",
          textureInfo: "strongfish_red",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Green Strongfish": {
          displayName: {
            translationKey: "item:greenStrongfish"
          },
          type: "Item",
          textureInfo: "strongfish_green",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Moon Strongfish": {
          displayName: {
            translationKey: "item:moonStrongfish"
          },
          type: "Item",
          textureInfo: "strongfish_moon",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Wheatfish: {
          displayName: {
            translationKey: "item:wheatfish"
          },
          type: "Chargeable",
          textureInfo: "wheatfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0,
          description: {
            translationKey: "item:wheatfishDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          eatHealAmt: 15,
          rootMetaDesc: "Wheatfish|meta|charging1"
        },
        Moonfish: {
          displayName: {
            translationKey: "item:moonfish"
          },
          type: "Item",
          textureInfo: "moonfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        Bombfish: {
          displayName: {
            translationKey: "item:bombfish"
          },
          type: "Item",
          textureInfo: "bombfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Boomerang Fish": {
          displayName: {
            translationKey: "item:boomerangFish"
          },
          type: "Item",
          textureInfo: "boomerang_fish",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Root Flounder": {
          displayName: {
            translationKey: "item:rootFlounder"
          },
          type: "Item",
          textureInfo: "root_flounder",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Abyss Carp": {
          displayName: {
            translationKey: "item:abyssCarp"
          },
          type: "Item",
          textureInfo: "abyss_carp",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Boulder Bass": {
          displayName: {
            translationKey: "item:boulderBass"
          },
          type: "Item",
          textureInfo: "boulder_bass",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        Barnaclejaw: {
          displayName: {
            translationKey: "item:barnacleJaw"
          },
          type: "Item",
          textureInfo: "barnaclejaw",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        "Crystalized Wheatfish": {
          displayName: {
            translationKey: "item:crystalizedWheatfish"
          },
          type: "Item",
          textureInfo: "crystalized_wheatfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Darter: {
          displayName: {
            translationKey: "item:darter"
          },
          type: "Chargeable",
          textureInfo: "darter",
          weight: 1,
          heldItemScale: .5,
          stackable: !0,
          description: {
            translationKey: "item:darterDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          eatHealAmt: 10,
          rootMetaDesc: "Darter|meta|charging1"
        },
        "Shadow Darter": {
          displayName: {
            translationKey: "item:shadowDarter"
          },
          type: "Item",
          textureInfo: "darter_shadow",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Electric Eel": {
          displayName: {
            translationKey: "item:electricEel"
          },
          type: "Item",
          textureInfo: "electric_eel",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Grass Snapper": {
          displayName: {
            translationKey: "item:grassSnapper"
          },
          type: "Item",
          textureInfo: "grass_snapper",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Jungle Spinefish": {
          displayName: {
            translationKey: "item:jungleSpinefish"
          },
          type: "Item",
          textureInfo: "jungle_spinefish",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Mangler Catfish": {
          displayName: {
            translationKey: "item:manglerCatfish"
          },
          type: "Item",
          textureInfo: "mangler_catfish",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Mossback Arapaima": {
          displayName: {
            translationKey: "item:mossbackArapaima"
          },
          type: "Item",
          textureInfo: "mossback_arapaima",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Sandbelly Piranha": {
          displayName: {
            translationKey: "item:sandbellyPiranha"
          },
          type: "Chargeable",
          textureInfo: "sandbelly_piranha",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:sandbellyPiranhaDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          eatHealAmt: 10,
          rootMetaDesc: "Sandbelly Piranha|meta|charging1"
        },
        "Shadeback Ray": {
          displayName: {
            translationKey: "item:shadebackRay"
          },
          type: "Item",
          textureInfo: "shadeback_ray",
          weight: 2,
          heldItemScale: 1,
          stackable: !0
        },
        "Mudbelly Tilapia": {
          displayName: {
            translationKey: "item:mudbellyTilapia"
          },
          type: "Chargeable",
          textureInfo: "mudbelly_tilapia",
          weight: 1.5,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:mudbellyTilapiaDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          eatHealAmt: 30,
          rootMetaDesc: "Mudbelly Tilapia|meta|charging1"
        },
        "Mireback Carp": {
          displayName: {
            translationKey: "item:mirebackCarp"
          },
          type: "Item",
          textureInfo: "mireback_carp",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Rotslab Eel": {
          displayName: {
            translationKey: "item:rotslabEel"
          },
          type: "Item",
          textureInfo: "rotslab_eel",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Aether Minnow": {
          displayName: {
            translationKey: "item:aetherMinnow"
          },
          type: "Item",
          textureInfo: "aether_minnow",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Murkborne Ray": {
          displayName: {
            translationKey: "item:murkborneRay"
          },
          type: "Item",
          textureInfo: "murkborne_ray",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        "Eldertide Leviathan": {
          displayName: {
            translationKey: "item:eldertideLeviathan"
          },
          type: "Item",
          textureInfo: "eldertide_leviathan",
          weight: 1,
          heldItemScale: 3,
          stackable: !0
        },
        Oarfish: {
          displayName: {
            translationKey: "item:oarfish"
          },
          type: "Item",
          textureInfo: "oarfish",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        "Alpha Moon Strongfish": {
          displayName: {
            translationKey: "item:alphaMoonStrongfish"
          },
          type: "Item",
          textureInfo: "alpha_moon_strongfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Bamboo Catfish": {
          displayName: {
            translationKey: "item:bambooCatfish"
          },
          type: "Item",
          textureInfo: "bamboo_catfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Blackwater Bream": {
          displayName: {
            translationKey: "item:blackwaterBream"
          },
          type: "Item",
          textureInfo: "blackwater_bream",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Blackwater Leviathan": {
          displayName: {
            translationKey: "item:blackwaterLeviathan"
          },
          type: "Item",
          textureInfo: "blackwater_leviathan",
          weight: 1,
          heldItemScale: 5,
          stackable: !0
        },
        "Boned Sturgeon": {
          displayName: {
            translationKey: "item:bonedSturgeon"
          },
          type: "Item",
          textureInfo: "boned_sturgeon",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Bull Shark": {
          displayName: {
            translationKey: "item:bullShark"
          },
          type: "Item",
          textureInfo: "bull_shark",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        "Channel Sawfish": {
          displayName: {
            translationKey: "item:channelSawfish"
          },
          type: "Item",
          textureInfo: "channel_sawfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Coastal Mullet": {
          displayName: {
            translationKey: "item:coastalMullet"
          },
          type: "Item",
          textureInfo: "coastal_mullet",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Coelacanth: {
          displayName: {
            translationKey: "item:coelacanth"
          },
          type: "Item",
          textureInfo: "coelacanth",
          weight: 1,
          heldItemScale: 4,
          stackable: !0
        },
        "Driftwood Catfish": {
          displayName: {
            translationKey: "item:driftwoodCatfish"
          },
          type: "Item",
          textureInfo: "driftwood_catfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Eagle Ray": {
          displayName: {
            translationKey: "item:eagleRay"
          },
          type: "Item",
          textureInfo: "eagle_ray",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Giant Grouper": {
          displayName: {
            translationKey: "item:giantGrouper"
          },
          type: "Item",
          textureInfo: "giant_grouper",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Giant Moray": {
          displayName: {
            translationKey: "item:giantMoray"
          },
          type: "Item",
          textureInfo: "giant_moray",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Giant Stingray": {
          displayName: {
            translationKey: "item:giantStingray"
          },
          type: "Item",
          textureInfo: "giant_stingray",
          weight: 1,
          heldItemScale: 2,
          stackable: !0
        },
        "Golden Mahseer": {
          description: {
            translationKey: "item:goldenMahseerDescription"
          },
          displayName: {
            translationKey: "item:goldenMahseer"
          },
          type: "Item",
          textureInfo: "golden_mahseer",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Greenfin Loach": {
          displayName: {
            translationKey: "item:greenfinLoach"
          },
          type: "Item",
          textureInfo: "greenfin_loach",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Mangrove Herring": {
          displayName: {
            translationKey: "item:mangroveHerring"
          },
          type: "Item",
          textureInfo: "mangrove_herring",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Moonlit Boomerang Fish": {
          displayName: {
            translationKey: "item:moonlitBoomerangFish"
          },
          type: "Item",
          textureInfo: "moonlit_boomerang_fish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Moonstone Pupfish": {
          displayName: {
            translationKey: "item:moonstonePupfish"
          },
          type: "Chargeable",
          textureInfo: "moonstone_pupfish",
          weight: 1,
          heldItemScale: .75,
          stackable: !0,
          description: {
            translationKey: "item:moonstonePupfishDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          eatHealAmt: 10,
          rootMetaDesc: "Moonstone Pupfish|meta|charging1"
        },
        "Mudline Perch": {
          displayName: {
            translationKey: "item:mudlinePerch"
          },
          type: "Item",
          textureInfo: "mudline_perch",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Murk Stingray": {
          displayName: {
            translationKey: "item:murkStingray"
          },
          type: "Item",
          textureInfo: "murk_stingray",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        Needlefish: {
          displayName: {
            translationKey: "item:needlefish"
          },
          type: "Item",
          textureInfo: "needlefish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Nomai Moray": {
          displayName: {
            translationKey: "item:nomaiMoray"
          },
          type: "Item",
          textureInfo: "nomai_moray",
          weight: 1,
          heldItemScale: 1.5,
          stackable: !0
        },
        "Pearlescent Moonfish": {
          displayName: {
            translationKey: "item:pearlescentMoonfish"
          },
          type: "Item",
          textureInfo: "pearlescent_moonfish",
          weight: 1,
          heldItemScale: .75,
          stackable: !0
        },
        "Rainbow Guppy": {
          displayName: {
            translationKey: "item:rainbowGuppy"
          },
          type: "Item",
          textureInfo: "rainbow_guppy",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Red Snapper": {
          displayName: {
            translationKey: "item:redSnapper"
          },
          type: "Item",
          textureInfo: "red_snapper",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Reedglass Minnow": {
          displayName: {
            translationKey: "item:reedglassMinnow"
          },
          type: "Item",
          textureInfo: "reedglass_minnow",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Reef Sardine": {
          displayName: {
            translationKey: "item:reefSardine"
          },
          type: "Item",
          textureInfo: "reef_sardine",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Root Perch": {
          displayName: {
            translationKey: "item:rootPerch"
          },
          type: "Item",
          textureInfo: "root_perch",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Rust Scad": {
          displayName: {
            translationKey: "item:rustScad"
          },
          type: "Item",
          textureInfo: "rust_scad",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Seahorse: {
          displayName: {
            translationKey: "item:seahorse"
          },
          type: "Item",
          textureInfo: "seahorse",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Snakehead: {
          displayName: {
            translationKey: "item:snakehead"
          },
          type: "Item",
          textureInfo: "snakehead",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Spined Stickleback": {
          displayName: {
            translationKey: "item:spinedStickleback"
          },
          type: "Item",
          textureInfo: "spined_stickleback",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Stone Grouper": {
          displayName: {
            translationKey: "item:stoneGrouper"
          },
          type: "Item",
          textureInfo: "stone_grouper",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Sumpback Carp": {
          displayName: {
            translationKey: "item:sumpbackCarp"
          },
          type: "Item",
          textureInfo: "sumpback_carp",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Sunset Minnow": {
          displayName: {
            translationKey: "item:sunsetMinnow"
          },
          type: "Item",
          textureInfo: "sunset_minnow",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        Tarpon: {
          displayName: {
            translationKey: "item:tarpon"
          },
          type: "Item",
          textureInfo: "tarpon",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Threadfin Bream": {
          displayName: {
            translationKey: "item:threadfinBream"
          },
          type: "Item",
          textureInfo: "threadfin_bream",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Tri-Pointed Needlefish": {
          displayName: {
            translationKey: "item:triPointedNeedlefish"
          },
          type: "Item",
          textureInfo: "tri_pointed_needlefish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Game Dev Fish": {
          displayName: {
            translationKey: "item:gameDevFish"
          },
          type: "Item",
          textureInfo: "ellie_fish",
          weight: 1,
          heldItemScale: 1.75,
          stackable: !0
        },
        "Armoured Searobin": {
          displayName: {
            translationKey: "item:armouredSearobin"
          },
          type: "Item",
          textureInfo: "armoured_searobin",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Ash Lionfish": {
          displayName: {
            translationKey: "item:ashLionfish"
          },
          type: "Item",
          textureInfo: "ash_lionfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Barefrost Toothfish": {
          displayName: {
            translationKey: "item:barefrostToothfish"
          },
          type: "Item",
          textureInfo: "barefrost_toothfish",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Blackfin Icefish": {
          displayName: {
            translationKey: "item:blackfinIcefish"
          },
          type: "Item",
          textureInfo: "blackfin_icefish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Basalt Pipefish": {
          displayName: {
            translationKey: "item:basaltPipefish"
          },
          type: "Item",
          textureInfo: "basalt_pipefish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Brimstone Spikefish": {
          displayName: {
            translationKey: "item:brimstoneSpikefish"
          },
          type: "Item",
          textureInfo: "brimstone_spikefish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Cinder Leviathan": {
          displayName: {
            translationKey: "item:cinderLeviathan"
          },
          type: "Item",
          textureInfo: "cinder_leviathan",
          weight: 1,
          heldItemScale: 3,
          stackable: !0
        },
        "Crowned Flame Angelfish": {
          displayName: {
            translationKey: "item:crownedFlameAngelfish"
          },
          type: "Item",
          textureInfo: "crowned_flame_angelfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Deepwater Lanternfish": {
          displayName: {
            translationKey: "item:deepwaterLanternfish"
          },
          type: "Item",
          textureInfo: "deepwater_lanternfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Driftice Capelin": {
          displayName: {
            translationKey: "item:drifticeCapelin"
          },
          type: "Item",
          textureInfo: "driftice_capelin",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Ember Chub": {
          displayName: {
            translationKey: "item:emberChub"
          },
          type: "Item",
          textureInfo: "ember_chub",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Embermark Wrasse": {
          displayName: {
            translationKey: "item:embermarkWrasse"
          },
          type: "Item",
          textureInfo: "embermark_wrasse",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Eviota Vader": {
          displayName: {
            translationKey: "item:eviotaVader"
          },
          type: "Item",
          textureInfo: "eviota_vader",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Frost Herring": {
          displayName: {
            translationKey: "item:frostHerring"
          },
          type: "Item",
          textureInfo: "frost_herring",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Frost Wolf Eel": {
          displayName: {
            translationKey: "item:frostWolfEel"
          },
          type: "Item",
          textureInfo: "frost_wolf_eel",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Frostpaint Notie": {
          displayName: {
            translationKey: "item:frostpaintNotie"
          },
          type: "Item",
          textureInfo: "frostpaint_notie",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Frozen Grenadier": {
          displayName: {
            translationKey: "item:frozenGrenadier"
          },
          type: "Item",
          textureInfo: "frozen_grenadier",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Giant Trevally": {
          displayName: {
            translationKey: "item:giantTrevally"
          },
          type: "Item",
          textureInfo: "giant_trevally",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Glacial Lanternfish": {
          displayName: {
            translationKey: "item:glacialLanternfish"
          },
          type: "Item",
          textureInfo: "glacial_lanternfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Glacial Silverfish": {
          displayName: {
            translationKey: "item:glacialSilverfish"
          },
          type: "Item",
          textureInfo: "glacial_silverfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Heatwarp Flounder": {
          displayName: {
            translationKey: "item:heatwarpFlounder"
          },
          type: "Item",
          textureInfo: "heatwarp_flounder",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        Hatchetfish: {
          displayName: {
            translationKey: "item:hatchetfish"
          },
          type: "Item",
          textureInfo: "hatchetfish",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Ice Spined Notothenia": {
          displayName: {
            translationKey: "item:iceSpinedNotothenia"
          },
          type: "Item",
          textureInfo: "ice_spined_notothenia",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Iceshelf Skate": {
          displayName: {
            translationKey: "item:iceshelfSkate"
          },
          type: "Item",
          textureInfo: "iceshelf_skate",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Icy Sculpin": {
          displayName: {
            translationKey: "item:icySculpin"
          },
          type: "Item",
          textureInfo: "icy_sculpin",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Lavaflow Trout": {
          displayName: {
            translationKey: "item:lavaflowTrout"
          },
          type: "Item",
          textureInfo: "lavaflow_trout",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Lavawake Slopefish": {
          displayName: {
            translationKey: "item:lavawakeSlopefish"
          },
          type: "Item",
          textureInfo: "lavawake_slopefish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Magma Sardinella": {
          displayName: {
            translationKey: "item:magmaSardinella"
          },
          type: "Item",
          textureInfo: "magma_sardinella",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Magma Trout": {
          displayName: {
            translationKey: "item:magmaTrout"
          },
          type: "Item",
          textureInfo: "magma_trout",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Marbled Moray Cod": {
          displayName: {
            translationKey: "item:marbledMorayCod"
          },
          type: "Item",
          textureInfo: "marbled_moray_cod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Molten Lotella Cod": {
          displayName: {
            translationKey: "item:moltenLotellaCod"
          },
          type: "Item",
          textureInfo: "molten_lotella_cod",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Northern Wolffish": {
          displayName: {
            translationKey: "item:northernWolffish"
          },
          type: "Item",
          textureInfo: "northern_wolffish",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Paleice Rockcod": {
          displayName: {
            translationKey: "item:paleiceRockcod"
          },
          type: "Item",
          textureInfo: "paleice_rockcod",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Permafrost Halibut": {
          displayName: {
            translationKey: "item:permafrostHalibut"
          },
          type: "Item",
          textureInfo: "permafrost_halibut",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        Pithead: {
          displayName: {
            translationKey: "item:pithead"
          },
          type: "Item",
          textureInfo: "pithead",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Polarflash Electron": {
          displayName: {
            translationKey: "item:polarflashElectron"
          },
          type: "Item",
          textureInfo: "polarflash_electron",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Pyroclast Eel": {
          displayName: {
            translationKey: "item:pyroclastEel"
          },
          type: "Item",
          textureInfo: "pyroclast_eel",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Pyroscale Grouper": {
          displayName: {
            translationKey: "item:pyroscaleGrouper"
          },
          type: "Item",
          textureInfo: "pyroscale_grouper",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Red Pyreside": {
          displayName: {
            translationKey: "item:redPyreside"
          },
          type: "Item",
          textureInfo: "red_pyreside",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Rimesnouted Lancetfish": {
          displayName: {
            translationKey: "item:rimesnoutedLancetfish"
          },
          type: "Item",
          textureInfo: "rimesnouted_lancetfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Scorched Sunfish": {
          displayName: {
            translationKey: "item:scorchedSunfish"
          },
          type: "Item",
          textureInfo: "scorched_sunfish",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !0
        },
        "Scored Dace": {
          displayName: {
            translationKey: "item:scoredDace"
          },
          type: "Item",
          textureInfo: "scored_dace",
          weight: 1,
          heldItemScale: .5,
          stackable: !0
        },
        "Silver Dragonfish": {
          displayName: {
            translationKey: "item:silverDragonfish"
          },
          type: "Item",
          textureInfo: "silver_dragonfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Snow Haddock": {
          displayName: {
            translationKey: "item:snowHaddock"
          },
          type: "Item",
          textureInfo: "snow_haddock",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Volcanic Catfish": {
          displayName: {
            translationKey: "item:volcanicCatfish"
          },
          type: "Item",
          textureInfo: "volcanic_catfish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Volcanic Semperi": {
          displayName: {
            translationKey: "item:volcanicSemperi"
          },
          type: "Item",
          textureInfo: "volcanic_semperi",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Rusty Rod": {
          description: {
            translationKey: "item:rustyRodDescription"
          },
          displayName: {
            translationKey: "item:rustyRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [7e3, 9e3]
          },
          textureInfo: "rusty_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Lucky Rod": {
          description: {
            translationKey: "item:luckyRodDescription"
          },
          displayName: {
            translationKey: "item:luckyRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "lucky_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Sturdy Rod": {
          description: {
            translationKey: "item:sturdyRodDescription"
          },
          displayName: {
            translationKey: "item:sturdyRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [5e3, 7e3]
          },
          textureInfo: "sturdy_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Jungle Rod": {
          displayName: {
            translationKey: "item:jungleRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "jungle_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Draugr Rod": {
          displayName: {
            translationKey: "item:draugrRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "draugr_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Cursed Rod": {
          displayName: {
            translationKey: "item:cursedRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "cursed_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Tangle Resistant Rod": {
          displayName: {
            translationKey: "item:tangleResistantRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "tangle_resistant_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Speed Rod": {
          description: {
            translationKey: "item:speedRodDescription"
          },
          displayName: {
            translationKey: "item:speedRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "speed_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Carbon Rod": {
          displayName: {
            translationKey: "item:carbonRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "carbon_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Deep Sea Rod": {
          displayName: {
            translationKey: "item:deepSeaRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "deep_sea_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Master Rod": {
          displayName: {
            translationKey: "item:masterRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "master_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Obsidian Rod": {
          displayName: {
            translationKey: "item:obsidianRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "obsidian_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Molten Magma Rod": {
          displayName: {
            translationKey: "item:moltenMagmaRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "molten_magma_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Frost Rod": {
          displayName: {
            translationKey: "item:frostRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "frost_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Black Ice Rod": {
          displayName: {
            translationKey: "item:blackIceRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "black_ice_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        "Mythic Rod": {
          displayName: {
            translationKey: "item:mythicRod"
          },
          type: "Item",
          fishingRodInfo: {
            biteDelayMs: [2e3, 4e3]
          },
          textureInfo: "mythic_rod",
          weight: 1,
          heldItemScale: 1.25,
          stackable: !1
        },
        Acorn: {
          displayName: {
            translationKey: "item:acorn"
          },
          type: "Chargeable",
          textureInfo: "acorn",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:acornDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Acorn|meta|charging1"
        },
        "Acorn Jelly": {
          displayName: {
            translationKey: "item:acornJelly"
          },
          type: "Chargeable",
          textureInfo: "acorn_jelly",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:acornJellyDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Acorn Jelly|meta|charging1"
        },
        "Cow's Milk": {
          displayName: {
            translationKey: "item:cowsMilk"
          },
          type: "Chargeable",
          textureInfo: "cows_milk",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:cowsMilkDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "drink",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Cow's Milk|meta|charging1"
        },
        Cheese: {
          displayName: {
            translationKey: "item:cheese"
          },
          type: "Chargeable",
          textureInfo: "cheese",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:cheeseDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Cheese|meta|charging1"
        },
        "Caught Fish": {
          displayName: {
            translationKey: "item:caughtFish"
          },
          type: "Chargeable",
          textureInfo: "caught_fish",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:caughtFishDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Caught Fish|meta|charging1"
        },
        "Fish Fillet": {
          displayName: {
            translationKey: "item:fishFillet"
          },
          type: "Chargeable",
          textureInfo: "fish_fillet",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:fishFilletDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Fish Fillet|meta|charging1"
        },
        "Meaty Bone": {
          displayName: {
            translationKey: "item:meatyBone"
          },
          type: "Chargeable",
          textureInfo: "meaty_bone",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:meatyBoneDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Meaty Bone|meta|charging1"
        },
        "Blinding Pebble": {
          displayName: {
            translationKey: "item:blindingPebble"
          },
          type: "Item",
          textureInfo: "blinding_pebble",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:blindingPebbleDescription"
          },
          secondaryDamage: 15
        },
        "Sheep's Milk": {
          displayName: {
            translationKey: "item:sheepsMilk"
          },
          type: "Chargeable",
          textureInfo: "sheeps_milk",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:sheepsMilkDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "drink",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Sheep's Milk|meta|charging1"
        },
        "Yoghurt Pot": {
          displayName: {
            translationKey: "item:yoghurtPot"
          },
          type: "Chargeable",
          textureInfo: "yoghurt_pot",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:yoghurtPotDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Yoghurt Pot|meta|charging1"
        },
        Truffle: {
          displayName: {
            translationKey: "item:truffle"
          },
          type: "Chargeable",
          textureInfo: "truffle",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:truffleDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Truffle|meta|charging1"
        },
        "Truffle Oil": {
          displayName: {
            translationKey: "item:truffleOil"
          },
          type: "Chargeable",
          textureInfo: "truffle_oil",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:truffleOilDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "drink",
          chargeTime: 750,
          rootMetaDesc: "Truffle Oil|meta|charging1"
        },
        Oats: {
          displayName: {
            translationKey: "item:oats"
          },
          type: "Chargeable",
          textureInfo: "oats",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:oatsDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Oats|meta|charging1"
        },
        Porridge: {
          displayName: {
            translationKey: "item:porridge"
          },
          type: "Chargeable",
          textureInfo: "porridge",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:porridgeDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Porridge|meta|charging1"
        },
        Dates: {
          displayName: {
            translationKey: "item:dates"
          },
          type: "Chargeable",
          textureInfo: "dates",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:datesDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 500,
          eatHealAmt: 3,
          rootMetaDesc: "Dates|meta|charging1"
        },
        "Date Pudding": {
          displayName: {
            translationKey: "item:datePudding"
          },
          type: "Chargeable",
          textureInfo: "date_pudding",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:datePuddingDescription"
          },
          chargeStages: 1,
          eatable: !0,
          chargeSound: "eat1",
          chargeTime: 750,
          rootMetaDesc: "Date Pudding|meta|charging1"
        },
        Poop: {
          displayName: {
            translationKey: "item:poop"
          },
          type: "Item",
          textureInfo: "poop",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:poopDescription"
          },
          secondaryDamage: 1
        },
        Fertiliser: {
          displayName: {
            translationKey: "item:fertiliser"
          },
          type: "Item",
          textureInfo: "fertiliser",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          description: {
            translationKey: "item:fertiliserDescription"
          }
        },
        Medkit: {
          displayName: {
            translationKey: "item:medkit"
          },
          type: "Item",
          textureInfo: "medkit",
          weight: 1,
          heldItemScale: 1,
          stackable: !0
        },
        "Wood Spear": {
          displayName: {
            translationKey: "item:woodSpear"
          },
          type: "Tool",
          textureInfo: "wood_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 18,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1,
          abilityCooldownMs: 1600,
          dashImpulse: 18
        },
        "Stone Spear": {
          displayName: {
            translationKey: "item:stoneSpear"
          },
          type: "Tool",
          textureInfo: "stone_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 22,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2,
          abilityCooldownMs: 1600,
          dashImpulse: 20
        },
        "Iron Spear": {
          displayName: {
            translationKey: "item:ironSpear"
          },
          type: "Tool",
          textureInfo: "iron_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 28,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3,
          abilityCooldownMs: 1600,
          dashImpulse: 22
        },
        "Gold Spear": {
          displayName: {
            translationKey: "item:goldSpear"
          },
          type: "Tool",
          textureInfo: "gold_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 30,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4,
          abilityCooldownMs: 1600,
          dashImpulse: 25
        },
        "Diamond Spear": {
          displayName: {
            translationKey: "item:diamondSpear"
          },
          type: "Tool",
          textureInfo: "diamond_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 32,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5,
          abilityCooldownMs: 1600,
          dashImpulse: 28
        },
        "Moonstone Spear": {
          displayName: {
            translationKey: "item:moonstoneSpear"
          },
          type: "Tool",
          textureInfo: "moonstone_spear",
          weight: 1,
          heldItemScale: 1.1,
          damage: 32,
          attackRange: 5,
          description: {
            translationKey: "item:spearDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5,
          abilityCooldownMs: 1600,
          dashImpulse: 28
        },
        "Wood Dagger": {
          displayName: {
            translationKey: "item:woodDagger"
          },
          type: "Tool",
          textureInfo: "wood_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 20,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Dagger": {
          displayName: {
            translationKey: "item:stoneDagger"
          },
          type: "Tool",
          textureInfo: "stone_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 25,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Dagger": {
          displayName: {
            translationKey: "item:ironDagger"
          },
          type: "Tool",
          textureInfo: "iron_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 31,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Dagger": {
          displayName: {
            translationKey: "item:goldDagger"
          },
          type: "Tool",
          textureInfo: "gold_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 34,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Dagger": {
          displayName: {
            translationKey: "item:diamondDagger"
          },
          type: "Tool",
          textureInfo: "diamond_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 36,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Moonstone Dagger": {
          displayName: {
            translationKey: "item:moonstoneDagger"
          },
          type: "Tool",
          textureInfo: "moonstone_dagger",
          weight: 1,
          heldItemScale: 1.1,
          damage: 36,
          attackRange: 2.5,
          attackCooldownMs: 250,
          knockbackHorizontalScalar: .4,
          knockbackVerticalScalar: .8,
          comboInfo: pc,
          description: {
            translationKey: "item:daggerDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Wood Boomerang": {
          displayName: {
            translationKey: "item:woodBoomerang"
          },
          type: "Tool",
          textureInfo: "wood_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 11,
          secondaryDamage: 11,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Boomerang": {
          displayName: {
            translationKey: "item:stoneBoomerang"
          },
          type: "Tool",
          textureInfo: "stone_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 14,
          secondaryDamage: 14,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Boomerang": {
          displayName: {
            translationKey: "item:ironBoomerang"
          },
          type: "Tool",
          textureInfo: "iron_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 17,
          secondaryDamage: 17,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Boomerang": {
          displayName: {
            translationKey: "item:goldBoomerang"
          },
          type: "Tool",
          textureInfo: "gold_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 19,
          secondaryDamage: 19,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Boomerang": {
          displayName: {
            translationKey: "item:diamondBoomerang"
          },
          type: "Tool",
          textureInfo: "diamond_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 20,
          secondaryDamage: 20,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Moonstone Boomerang": {
          displayName: {
            translationKey: "item:moonstoneBoomerang"
          },
          type: "Tool",
          textureInfo: "moonstone_boomerang",
          weight: 1,
          heldItemScale: 1.1,
          damage: 20,
          secondaryDamage: 20,
          description: {
            translationKey: "item:boomerangDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Wood Club": {
          displayName: {
            translationKey: "item:woodClub"
          },
          type: "Tool",
          textureInfo: "wood_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 22,
          knockbackHorizontalScalar: 1.7,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Club": {
          displayName: {
            translationKey: "item:stoneClub"
          },
          type: "Tool",
          textureInfo: "stone_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 27,
          knockbackHorizontalScalar: 1.9,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Club": {
          displayName: {
            translationKey: "item:ironClub"
          },
          type: "Tool",
          textureInfo: "iron_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 34,
          knockbackHorizontalScalar: 2.1,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Club": {
          displayName: {
            translationKey: "item:goldClub"
          },
          type: "Tool",
          textureInfo: "gold_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 37,
          knockbackHorizontalScalar: 2.3,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Club": {
          displayName: {
            translationKey: "item:diamondClub"
          },
          type: "Tool",
          textureInfo: "diamond_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 40,
          knockbackHorizontalScalar: 2.5,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Moonstone Club": {
          displayName: {
            translationKey: "item:moonstoneClub"
          },
          type: "Tool",
          textureInfo: "moonstone_club",
          weight: 1,
          heldItemScale: 1.1,
          damage: 40,
          knockbackHorizontalScalar: 2.5,
          knockbackVerticalScalar: 1.2,
          description: {
            translationKey: "item:clubDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Wood Mace": {
          displayName: {
            translationKey: "item:woodMace"
          },
          type: "Tool",
          textureInfo: "wood_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 11,
          velocityMultiplier: 2.2,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Mace": {
          displayName: {
            translationKey: "item:stoneMace"
          },
          type: "Tool",
          textureInfo: "stone_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 14,
          velocityMultiplier: 2.4,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Mace": {
          displayName: {
            translationKey: "item:ironMace"
          },
          type: "Tool",
          textureInfo: "iron_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 17,
          velocityMultiplier: 2.6,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Mace": {
          displayName: {
            translationKey: "item:goldMace"
          },
          type: "Tool",
          textureInfo: "gold_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 19,
          velocityMultiplier: 2.8,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Mace": {
          displayName: {
            translationKey: "item:diamondMace"
          },
          type: "Tool",
          textureInfo: "diamond_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 20,
          velocityMultiplier: 3,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Moonstone Mace": {
          displayName: {
            translationKey: "item:moonstoneMace"
          },
          type: "Tool",
          textureInfo: "moonstone_mace",
          weight: 1,
          heldItemScale: 1.1,
          damage: 20,
          velocityMultiplier: 3,
          description: {
            translationKey: "item:maceDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Wood Whip": {
          displayName: {
            translationKey: "item:woodWhip"
          },
          type: "Tool",
          textureInfo: "wood_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 8,
          attackRange: 8,
          knockbackHorizontalScalar: -1,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 1
        },
        "Stone Whip": {
          displayName: {
            translationKey: "item:stoneWhip"
          },
          type: "Tool",
          textureInfo: "stone_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 11,
          attackRange: 8,
          knockbackHorizontalScalar: -1.2,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 2
        },
        "Iron Whip": {
          displayName: {
            translationKey: "item:ironWhip"
          },
          type: "Tool",
          textureInfo: "iron_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 14,
          attackRange: 8,
          knockbackHorizontalScalar: -1.4,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 3
        },
        "Gold Whip": {
          displayName: {
            translationKey: "item:goldWhip"
          },
          type: "Tool",
          textureInfo: "gold_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 16,
          attackRange: 8,
          knockbackHorizontalScalar: -1.6,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 4
        },
        "Diamond Whip": {
          displayName: {
            translationKey: "item:diamondWhip"
          },
          type: "Tool",
          textureInfo: "diamond_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 17,
          attackRange: 8,
          knockbackHorizontalScalar: -1.8,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Moonstone Whip": {
          displayName: {
            translationKey: "item:moonstoneWhip"
          },
          type: "Tool",
          textureInfo: "moonstone_whip",
          weight: 1,
          heldItemScale: 1.1,
          damage: 17,
          attackRange: 8,
          knockbackHorizontalScalar: -1.8,
          description: {
            translationKey: "item:whipDescription"
          },
          stackable: !1,
          harvests: null,
          multiplier: 2,
          level: 5
        },
        "Beef Stew": {
          displayName: {
            translationKey: "item:beefStew"
          },
          type: "Item",
          textureInfo: "beef_stew",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:beefStewDescription"
          }
        },
        Chicken: {
          displayName: {
            translationKey: "item:chicken"
          },
          type: "Item",
          textureInfo: "chicken",
          heldItemGlb: "chicken",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:chickenDescription"
          }
        },
        Coleslaw: {
          displayName: {
            translationKey: "item:coleslaw"
          },
          type: "Item",
          textureInfo: "coleslaw",
          heldItemGlb: "coleslaw",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:coleslawDescription"
          }
        },
        Egg: {
          displayName: {
            translationKey: "item:egg"
          },
          type: "Item",
          textureInfo: "egg",
          heldItemGlb: "egg",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:eggDescription"
          }
        },
        "Fish N Chips": {
          displayName: {
            translationKey: "item:fishNChips"
          },
          type: "Item",
          textureInfo: "fish_n_chips",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:fishNChipsDescription"
          }
        },
        "Fried Rice": {
          displayName: {
            translationKey: "item:friedRice"
          },
          type: "Item",
          textureInfo: "fried_rice",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:friedRiceDescription"
          }
        },
        Lettuce: {
          displayName: {
            translationKey: "item:lettuce"
          },
          type: "Item",
          textureInfo: "lettuce",
          heldItemGlb: "lettuce",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:lettuceDescription"
          }
        },
        Omelette: {
          displayName: {
            translationKey: "item:omelette"
          },
          type: "Item",
          textureInfo: "omelette",
          heldItemGlb: "omelette",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:omeletteDescription"
          }
        },
        Onion: {
          displayName: {
            translationKey: "item:onion"
          },
          type: "Item",
          textureInfo: "onion",
          heldItemGlb: "onion",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:onionDescription"
          }
        },
        "Red Cabbage": {
          displayName: {
            translationKey: "item:redCabbage"
          },
          type: "Item",
          textureInfo: "red_cabbage",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:redCabbageDescription"
          }
        },
        "Roast Dinner": {
          displayName: {
            translationKey: "item:roastDinner"
          },
          type: "Item",
          textureInfo: "roast_dinner",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:roastDinnerDescription"
          }
        },
        Salad: {
          displayName: {
            translationKey: "item:salad"
          },
          type: "Item",
          textureInfo: "salad",
          heldItemGlb: "salad",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:saladDescription"
          }
        },
        "Stuffed Pepper": {
          displayName: {
            translationKey: "item:stuffedPepper"
          },
          type: "Item",
          textureInfo: "stuffed_pepper",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:stuffedPepperDescription"
          }
        },
        Sushi: {
          displayName: {
            translationKey: "item:sushi"
          },
          type: "Item",
          textureInfo: "sushi",
          heldItemGlb: "sushi",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:sushiDescription"
          }
        },
        Tomato: {
          displayName: {
            translationKey: "item:tomato"
          },
          type: "Item",
          textureInfo: "tomato",
          heldItemGlb: "tomato",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:tomatoDescription"
          }
        },
        "Vegetable Soup": {
          displayName: {
            translationKey: "item:vegetableSoup"
          },
          type: "Item",
          textureInfo: "veg_soup",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:vegetableSoupDescription"
          }
        },
        "Common Lottery Ticket": {
          displayName: [{
            str: "Common Lottery Ticket",
            style: {
              color: "#4d4d4d"
            }
          }],
          description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
          type: "Item",
          textureInfo: "book",
          heldItemGlb: "Book",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Uncommon Lottery Ticket": {
          displayName: [{
            str: "Uncommon Lottery Ticket",
            style: {
              color: "#A9FF21"
            }
          }],
          description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
          type: "Item",
          textureInfo: "book",
          heldItemGlb: "Book",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Rare Lottery Ticket": {
          displayName: [{
            str: "Rare Lottery Ticket",
            style: {
              color: "#84E0FF"
            }
          }],
          description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
          type: "Item",
          textureInfo: "book",
          heldItemGlb: "Book",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Epic Lottery Ticket": {
          displayName: [{
            str: "Epic Lottery Ticket",
            style: {
              color: "#800080"
            }
          }],
          description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
          type: "Item",
          textureInfo: "book",
          heldItemGlb: "Book",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Legendary Lottery Ticket": {
          displayName: [{
            str: "Legendary Lottery Ticket",
            style: {
              color: "#ffa500"
            }
          }],
          description: "Take it to the Lottery stall in the spawn hub to redeem it for a reward.",
          type: "Item",
          textureInfo: "book",
          heldItemGlb: "Book",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        ...fc("Wood Clock", "clock_wood", {
          displayName: {
            translationKey: "item:woodClock"
          },
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:clockDescription"
          }
        }),
        ...fc("Gold Clock", "clock_gold", {
          displayName: {
            translationKey: "item:goldClock"
          },
          type: "Item",
          weight: 1,
          heldItemScale: 1,
          stackable: !1,
          description: {
            translationKey: "item:clockDescription"
          }
        }),
        "Lucky Sword Upgrade": {
          displayName: "Sword Upgrade",
          description: "Use to permanently advance your Sword tier for this match. Share spare upgrades with your team.",
          type: "Item",
          textureInfo: "lucky_sword_upgrade",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Lucky Armour Upgrade": {
          displayName: "Armour Upgrade",
          description: "Use to permanently advance your Armour tier for this match. Share spare upgrades with your team.",
          type: "Item",
          textureInfo: "lucky_armour_upgrade",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Lucky Tools Upgrade": {
          displayName: "Tools Upgrade",
          description: "Use to permanently advance your Pickaxe and Axe tier for this match. Share spare upgrades with your team.",
          type: "Item",
          textureInfo: "lucky_tools_upgrade",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Lucky Clover": {
          displayName: "Clovers",
          description: "Earned from lucky blocks, kills and beds. Spend them at your base's Lucky Trader and Lucky Upgrades.",
          type: "Item",
          textureInfo: "lucky_clover",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Void Net": {
          displayName: "Void Wings",
          description: "Keep one in your inventory. Falling into the void uses it up and puts you back on solid ground.",
          type: "Item",
          textureInfo: "void_net",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        },
        "Lucky Bomb": {
          displayName: "Lucky Bomb",
          description: "A random lucky effect for everyone it splashes, you included. Usually good!",
          type: "Item",
          textureInfo: "lucky_bomb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Unlucky Bomb": {
          displayName: "Unlucky Bomb",
          description: "A random unlucky effect for everyone it splashes, you included. Usually bad!",
          type: "Item",
          textureInfo: "unlucky_bomb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Swap Orb": {
          displayName: "Swap Orb",
          description: "Throw near an enemy or mob to swap places with them.",
          type: "Item",
          textureInfo: "swap_orb",
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          secondaryDamage: 1
        },
        "Golden Lucky Clover": {
          displayName: "Golden Clover",
          description: "A shiny golden four-leaf clover.",
          type: "Item",
          textureInfo: "golden_lucky_clover",
          weight: 0,
          heldItemScale: 1,
          stackable: !0
        }
      };
    for (const Nc of tB.p)
      for (const cB of Nc.materials)
        for (const Bc of Nc.kinds) {
          var aB, lc, Yc, Lc;
          const nc = null === (aB = Nc.inheritsFrom) || void 0 === aB ? void 0 : aB.call(Nc, Bc),
            Ic = (0, tB.m)(cB, Bc);
          if (hc[Ic]) throw new Error(`Item family "${Nc.name}" would overwrite the existing item "${Ic}"`);
          const rB = {
              displayName: null !== (lc = null === (Yc = Nc.displayName) || void 0 === Yc ? void 0 : Yc.call(Nc, Ic)) && void 0 !== lc ? lc : Ic
            },
            uc = null === (Lc = Nc.description) || void 0 === Lc ? void 0 : Lc.call(Nc, cB, Bc);
          if (void 0 !== uc && (rB.description = uc), !nc) {
            if (!Nc.metadata) throw new Error(`Item family "${Nc.name}" declares neither inheritsFrom nor metadata`);
            const cB = (0, Vc.Rd)(Ic);
            hc[Ic] = {
              ...Nc.metadata(Bc),
              ...rB,
              textureInfo: cB,
              heldItemGlb: cB
            };
            continue
          }
          const sc = (0, tB.m)(nc.material, nc.kind);
          if (!hc[sc]) throw new Error(`Item family "${Nc.name}" inherits "${Ic}" from "${sc}", which is not registered`);
          for (const Vc of tB.b) {
            const uc = hc[`${sc}${Vc}`];
            if (!uc) continue;
            const Mc = (0, tB.f)(uc.textureInfo, nc, cB, Bc),
              Pc = {
                ...uc,
                ...rB,
                textureInfo: Mc,
                heldItemGlb: Mc
              };
            uc.rootMetaDesc && (Pc.rootMetaDesc = uc.rootMetaDesc.replace(sc, Ic)), hc[`${Ic}${Vc}`] = Pc
          }
        }
    hc["Cracked Rubellite Pickaxe"] = {
      ...hc["Rubellite Pickaxe"],
      displayName: "Cracked Rubellite Pickaxe",
      description: "Ruby calls it cracked, not beaten. A sturdy pickaxe ready for the stubborn stone in her mine.",
      multiplier: 4.75,
      level: 3,
      damage: 24
    };
    for (const [Nc, Ec] of [
        ["Goldheart Engine", "goldheartEngine"],
        ["Deepbite Drill Tip", "deepbiteDrillTip"],
        ["Empty Fuel Cell", "emptyFuelCell"],
        ["Blackfire Fuel Cell", "blackfireFuelCell"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: (0, Vc.Rd)(Nc),
      weight: 1,
      heldItemScale: 1,
      stackable: !0
    };
    for (const [Nc, Ec] of [
        ["Doom Rivet", "doomRivet"],
        ["Doom Crest", "doomCrest"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: (0, Vc.Rd)(Nc),
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Raw Copper", "rawCopper", "raw_copper"],
        ["Copper Bar", "copperBar", "copper_bar"],
        ["Iron Grit", "ironGrit", "iron_grit"],
        ["Gold Grit", "goldGrit", "gold_grit"],
        ["Copper Grit", "copperGrit", "copper_grit"],
        ["Charcoal", "charcoal", "charcoal"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    hc["Recall Beacon"] = {
      displayName: {
        translationKey: "item:recallBeacon"
      },
      description: {
        translationKey: "item:recallBeaconDescription"
      },
      type: "Item",
      textureInfo: "recall_beacon",
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      showInCreativeInven: !1
    }, hc["Iron Hammer"] = {
      displayName: {
        translationKey: "item:ironHammer"
      },
      description: {
        translationKey: "item:ironHammerDescription"
      },
      type: "Tool",
      textureInfo: "iron_hammer",
      weight: 1,
      heldItemScale: 1,
      damage: 27,
      stackable: !1,
      harvests: "rock",
      multiplier: 2.5,
      level: 3,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Iron Plate", "ironPlate", "iron_plate"],
        ["Copper Wire", "copperWire", "copper_wire"],
        ["Motor", "motor", "motor"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Machine Parts", "machineParts", "machine_parts"],
        ["Relay Coil", "relayCoil", "relay_coil"],
        ["Deposit Seed (Copper)", "depositSeedCopper", "deposit_seed_copper"],
        ["Deposit Seed (Gold)", "depositSeedGold", "deposit_seed_gold"],
        ["Deposit Seed (Voltite)", "depositSeedVoltite", "deposit_seed_voltite"],
        ["Deposit Seed (Coal)", "depositSeedCoal", "deposit_seed_coal"],
        ["Deposit Seed (Iron)", "depositSeedIron", "deposit_seed_iron"],
        ["Deposit Seed (Stone)", "depositSeedStone", "deposit_seed_stone"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc, Wc] of [
        ["Steel Bar", "steelBar", "steel_bar", !0],
        ["Gold Plate", "goldPlate", "gold_plate", !0],
        ["Logic Board", "logicBoard", "logic_board", !0],
        ["Machine Hull", "machineHull", "machine_hull", !0],
        ["Raw Voltite", "rawVoltite", "raw_voltite", !0],
        ["Power Coupler", "powerCoupler", "power_coupler", !1],
        ["Ore Lens", "oreLens", "ore_lens", !1],
        ["Homing Beacon", "homingBeacon", "homing_beacon", !1],
        ["Pull Charm", "pullCharm", "pull_charm", !1]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: Wc,
      showInCreativeInven: !1
    };
    hc["Vein Breaker"] = {
      displayName: {
        translationKey: "item:veinBreaker"
      },
      description: {
        translationKey: "item:veinBreakerDescription"
      },
      type: "Tool",
      textureInfo: "vein_breaker",
      weight: 1,
      heldItemScale: 1,
      damage: 27,
      stackable: !1,
      harvests: "rock",
      multiplier: 6,
      level: 3,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc, Wc] of [
        ["Voltite Dust", "voltiteDust", "voltite_dust", !0],
        ["Voltite Cell", "voltiteCell", "voltite_cell", !0],
        ["Sky Pack", "skyPack", "sky_pack", !1],
        ["Dusk Moss", "duskMoss", "dusk_moss", !0]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: Wc,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Star Alloy", "starAlloy", "star_alloy"],
        ["Moonstone Dust", "moonstoneDust", "moonstone_dust"],
        ["Comet Shard", "cometShard", "comet_shard"],
        ["Comet Core", "cometCore", "comet_core"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    hc["Starbore Drill"] = {
      displayName: {
        translationKey: "item:starboreDrill"
      },
      description: {
        translationKey: "item:starboreDrillDescription"
      },
      type: "Tool",
      textureInfo: "starbore_drill",
      weight: 1,
      heldItemScale: 1,
      damage: 30,
      stackable: !1,
      harvests: "rock",
      multiplier: 8,
      level: 5,
      showInCreativeInven: !1
    };
    for (const Nc of [2, 3, 4, 5, 6, 7, 8, 9, 10]) hc[`Core Tier ${Nc}`] = {
      displayName: {
        translationKey: `item:coreTier${Nc}`
      },
      description: {
        translationKey: `item:coreTier${Nc}Description`
      },
      type: "Item",
      textureInfo: `core_tier_${Math.min(Nc,5)}`,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    hc["Arc Caster"] = {
      displayName: {
        translationKey: "item:arcCaster"
      },
      description: {
        translationKey: "item:arcCasterDescription"
      },
      type: "Item",
      textureInfo: "arc_caster",
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec] of [
        ["Helmet", .14],
        ["Chestplate", .25],
        ["Gauntlets", .12],
        ["Leggings", .2],
        ["Boots", .11]
      ]) hc[`Voltplate ${Nc}`] = {
      displayName: {
        translationKey: `item:voltplate${Nc}`
      },
      description: {
        translationKey: `item:voltplate${Nc}Description`
      },
      type: "Armour",
      textureInfo: `voltplate_${Nc.toLowerCase()}`,
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      armourReduction: Ec,
      showInCreativeInven: !1
    };
    for (const Nc of yB.e)
      for (const cB of yB.k) {
        const Bc = (0, yB.p)(Nc, cB);
        hc[Bc] = {
          displayName: {
            translationKey: `item:${(0,Vc.Nd)(Bc)}`
          },
          description: {
            translationKey: `item:sword${cB}Description`
          },
          type: "Item",
          textureInfo: (0, Vc.Rd)(Bc),
          weight: 1,
          heldItemScale: 1,
          stackable: !0,
          showInCreativeInven: !1
        }
      }
    hc["Moonstone Sword"] = {
      ...hc["Diamond Sword"],
      displayName: {
        translationKey: "item:moonstoneSword"
      },
      textureInfo: "moonstone_sword",
      showInCreativeInven: !1
    }, hc["Magmaward Fuel"] = {
      displayName: {
        translationKey: "item:magmawardFuel"
      },
      description: {
        translationKey: "item:magmawardFuelDescription"
      },
      type: "Item",
      textureInfo: "magmaward_fuel",
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Raw Uranium", "rawUranium", "raw_uranium"],
        ["Uranium Grit", "uraniumGrit", "uranium_grit"],
        ["Uranium Pellet", "uraniumPellet", "uranium_pellet"],
        ["Plutonium Pellet", "plutoniumPellet", "plutonium_pellet"],
        ["Spent Pellet", "spentPellet", "spent_pellet"],
        ["Glow Dust", "glowDust", "glow_dust"],
        ["Biomass", "biomass", "biomass"],
        ["Graphite", "graphite", "graphite"],
        ["Containment Plate", "containmentPlate", "containment_plate"],
        ["Heat Exchanger", "heatExchanger", "heat_exchanger"],
        ["Focus Lens", "focusLens", "focus_lens"],
        ["Nova Matter", "novaMatter", "nova_matter"],
        ["Deposit Seed (Uranium)", "depositSeedUranium", "deposit_seed_uranium"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc] of [
        ["Reactor Blueprint", "reactorBlueprint", "reactor_blueprint"],
        ["Wrench", "wrench", "wrench"],
        ["Advanced Coupler", "advancedCoupler", "advanced_coupler"],
        ["Nova Coupler", "novaCoupler", "nova_upgrade"]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      showInCreativeInven: !1
    };
    for (const Nc of ["Arc Caster", "Power Coupler", "Advanced Coupler", "Nova Coupler"]) hc[Nc].firstPersonHeldRotationOffset = hc.Flashlight.firstPersonHeldRotationOffset, hc[Nc].thirdPersonHeldRotationOffset = hc.Flashlight.thirdPersonHeldRotationOffset;
    for (const Nc of [11, 12, 13, 14, 15]) hc[`Core Tier ${Nc}`] = {
      displayName: {
        translationKey: `item:coreTier${Nc}`
      },
      description: {
        translationKey: `item:coreTier${Nc}Description`
      },
      type: "Item",
      textureInfo: "core_tier_5",
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec, oc, Wc] of [
        ["Jet Chestplate", "jetChestplate", "jetpack", 0],
        ["Nova Jet Chestplate", "novaJetChestplate", "nova_jetpack", .27]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Armour",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      armourReduction: Wc,
      showInCreativeInven: !1
    };
    for (const [Nc, Ec] of [
        ["Helmet", .15],
        ["Chestplate", .27],
        ["Gauntlets", .13],
        ["Leggings", .21],
        ["Boots", .12]
      ]) hc[`Nova ${Nc}`] = {
      displayName: {
        translationKey: `item:nova${Nc}`
      },
      description: {
        translationKey: `item:nova${Nc}Description`
      },
      type: "Armour",
      textureInfo: `nova_${Nc.toLowerCase()}`,
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      armourReduction: Ec,
      showInCreativeInven: !1
    };
    hc["Nova Blade"] = {
      displayName: {
        translationKey: "item:novaBlade"
      },
      description: {
        translationKey: "item:novaBladeDescription"
      },
      type: "Tool",
      textureInfo: "nova_blade",
      weight: 1,
      heldItemScale: 1.1,
      damage: 50,
      stackable: !1,
      harvests: null,
      multiplier: 2,
      level: 1,
      showInCreativeInven: !1
    }, hc["Mob Cage"] = {
      displayName: {
        translationKey: "item:mobCage"
      },
      description: {
        translationKey: "item:mobCageDescription"
      },
      type: "Item",
      textureInfo: "mob_cage",
      weight: 1,
      heldItemScale: 1,
      stackable: !0,
      showInCreativeInven: !1
    };
    for (const Nc of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) hc[`Caged ${Nc}`] = {
      displayName: {
        translationKey: `item:caged${Nc}`
      },
      description: {
        translationKey: "item:cagedMobDescription"
      },
      type: "Item",
      textureInfo: "mob_cage_filled",
      weight: 1,
      heldItemScale: 1,
      stackable: !1,
      showInCreativeInven: !1
    };
    hc["Nova Multitool"] = {
      displayName: {
        translationKey: "item:novaMultitool"
      },
      description: {
        translationKey: "item:novaMultitoolDescription"
      },
      type: "Tool",
      textureInfo: "nova_multitool",
      weight: 1,
      heldItemScale: 1,
      damage: 32,
      stackable: !1,
      harvests: "rock",
      multiplier: 1,
      level: 5,
      showInCreativeInven: !1
    }, hc["Pocket Terminal"] = {
      displayName: {
        translationKey: "item:pocketTerminal"
      },
      description: {
        translationKey: "item:pocketTerminalDescription"
      },
      type: "Item",
      textureInfo: "pocket_terminal",
      weight: 1,
      heldItemScale: .4,
      stackable: !1,
      showInCreativeInven: !1,
      firstPersonHeldRotationOffset: [-.53, 1.67, .02],
      thirdPersonHeldRotationOffset: [-Math.PI / 2, 0, 0]
    };
    for (const [Nc, Ec, oc, Wc] of [
        ["Comet Beacon", "cometBeacon", "comet_beacon", !0],
        ["Nova Wrench", "novaWrench", "nova_wrench", !1]
      ]) hc[Nc] = {
      displayName: {
        translationKey: `item:${Ec}`
      },
      description: {
        translationKey: `item:${Ec}Description`
      },
      type: "Item",
      textureInfo: oc,
      weight: 1,
      heldItemScale: 1,
      stackable: Wc,
      showInCreativeInven: !1
    };

    function gB(cB, Bc) {
      return [...cB, ...(0, tB.i)(tB.p, Bc)].map((cB => Cc[cB].id))
    }

    function Uc(cB) {
      return cB.split(" ")[0]
    }
    const bB = .0018;
    let Zc = Object.values(uc.g).reduce(((cB, Bc) => Math.max(cB, Bc.id)), 0) + 1;
    for (const Nc in hc) hc[Nc].id = Zc, hc[Nc].name = Nc, hc[Zc] = hc[Nc], (0, Ic.g)(hc, hc[Nc]), ++Zc;
    const Qc = {};
    for (const Nc in hc) Qc[Nc] = new rB.h(hc[Nc]);
    const Cc = {},
      vB = [uc.g, Qc].flatMap(Object.entries);
    for (const [Nc, Ec] of vB) Cc[Nc] = Ec, Cc[Ec.id] = Ec;
    for (const Nc of Sc.d) {
      const cB = Nc;
      if (!Cc[cB]) throw new Error(`Missing "${cB}" item for vehicle type "${Nc}"`)
    }
    const Dc = {};
    for (const Nc in hc)
      if ("rock" === hc[Nc].harvests) {
        const cB = hc[Nc].level;
        if (void 0 !== cB && "string" === typeof Nc)
          for (let Bc = 0; Bc <= cB; Bc++) {
            const nc = Dc[Bc];
            (void 0 === nc || cB < hc[nc].level) && (Dc[Bc] = Nc)
          }
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);