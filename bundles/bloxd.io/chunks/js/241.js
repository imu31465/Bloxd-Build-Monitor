export const id = 241;
export const ids = [59, 241];
export const modules = {
  39240: (BB, OB, GB) => {
    var YB = {
      "./combat_1.png": 39246,
      "./dungeon_crumbling_crypt.png": 39250,
      "./dungeon_frozen_hollow.png": 39258,
      "./dungeon_wildwood_grove.png": 39267,
      "./dungeons.png": 39273,
      "./farming_1.png": 39275,
      "./fishing_1.png": 39279,
      "./hub.png": 39286,
      "./island.png": 39291,
      "./mining_1.png": 39297,
      "./mining_1_bridge.png": 39302,
      "./mining_1_gallery.png": 39310,
      "./mining_1_hollow.png": 39319,
      "./mining_1_village.png": 39325
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
    }, DB.resolve = QB, BB.exports = DB, DB.id = 39240
  },
  39331: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB, OB) {
      return YB.set(BB, OB), BB
    }

    function QB(BB) {
      var OB;
      return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
    }
  },
  39200: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    class YB {
      constructor(BB, OB, GB) {
        this.tM = BB, this.beforeOpen = OB, this.afterClose = GB, this.open = !1, this.Vp = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Vp && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Vp = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Vp || (this.snapshot = this.buildSnapshot(), this.tM(this.snapshot))
      }
    }
  },
  39338: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      SkyblockEntityFacing: () => jB,
      needsSkyblockEntityFacing: () => oB
    });
    var YB = GB(635),
      DB = GB(4642),
      QB = GB(39342);

    function oB(BB, OB) {
      if (BB.metaInfo === YB.c || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let GB = null === OB || void 0 === OB ? void 0 : OB.get(BB.meshOpts);
      if (void 0 === GB) {
        var QB, oB;
        const YB = (0, DB.i)(BB);
        GB = !1, "pig_napoleon" === (null === YB || void 0 === YB || null === (QB = YB.opts.textures) || void 0 === QB ? void 0 : QB.head) ? GB = !0 : "npc_pig_head" === (null === YB || void 0 === YB || null === (oB = YB.opts.textures) || void 0 === oB ? void 0 : oB.head) && (GB = "sitting" === YB.opts.pose || "sitting"), OB && (OB.size >= 256 && OB.clear(), OB.set(BB.meshOpts, GB))
      }
      return "sitting" === GB ? "sitting" === BB.pose : GB
    }(0, QB.f)("skyblock", ((BB, OB) => {
      OB.setFacingTolerance(oB(BB) ? 0 : null)
    }));
    class jB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = OB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var OB;
          const GB = this.api.getEntityInfo(BB);
          GB && (oB(GB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (OB = this.alsoVisit) || void 0 === OB || OB.call(this, BB, GB))
        }
      }
      kP() {
        const {
          api: BB
        } = this, OB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const GB of this.facing) OB.has(GB) || BB.setFacingTolerance(GB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = OB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39184: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => Lj
    });
    const YB = "island";
    var DB = GB(39189);

    function QB(BB, OB, GB) {
      const QB = "local" === OB,
        jB = BB.background,
        yB = OB => jB ? (0, DB.c)(OB[0] - BB.mapOrigin[0], OB[2] - BB.mapOrigin[2], jB.bounds) : [50, 50],
        JB = (BB.insideDungeon ? [] : BB.landmarks).map((BB => {
          var OB, YB;
          return {
            id: BB.id,
            name: GB(BB.visited && BB.nameKey ? null !== (OB = BB.mapLabelKey) && void 0 !== OB ? OB : BB.nameKey : "skyblockGame:mapUnknown"),
            icon: BB.visited && null !== (YB = BB.icon) && void 0 !== YB ? YB : "unknown",
            visited: BB.visited,
            current: !1,
            position: yB(BB.position),
            travelKind: "landmark",
            travelId: BB.id
          }
        })),
        MB = BB.zones.map((OB => {
          var YB;
          return {
            id: OB.id,
            name: GB(OB.visited && OB.nameKey ? OB.nameKey : "skyblockGame:mapUnknown"),
            icon: OB.visited && null !== (YB = OB.icon) && void 0 !== YB ? YB : "unknown",
            visited: OB.visited,
            current: OB.id === BB.zoneId,
            position: OB.position,
            thumbnail: OB.visited ? OB.id : void 0,
            travelKind: "zone",
            travelId: OB.id
          }
        })),
        PB = BB.insideDungeon || !jB ? [] : BB.portals.map((BB => {
          var OB;
          return {
            id: BB.id,
            name: GB(null !== (OB = BB.nameKey) && void 0 !== OB ? OB : "skyblockGame:mapUnknown"),
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            visited: BB.visited,
            current: !1,
            position: yB(BB.position),
            colour: BB.colour,
            travelKind: "zone",
            travelId: BB.destination
          }
        })),
        zB = QB ? JB : MB,
        lB = zB.filter((BB => BB.visited)).length,
        pB = jB ? (jB.bounds.mapMaxX - jB.bounds.mapMinX) / (jB.bounds.mapMaxZ - jB.bounds.mapMinZ) : 2,
        qB = jB ? JSON.stringify([jB.bounds, BB.mapOrigin]) : "";
      return {
        local: QB,
        points: zB,
        portals: QB ? PB : [],
        progress: zB.length ? GB("skyblockGame:mapDiscovered", {
          current: String(lB),
          total: String(zB.length)
        }) : null,
        percent: zB.length ? 100 * lB / zB.length : 0,
        canTravel: [...zB, ...QB ? PB : []].some((BB => BB.visited && !BB.current)),
        noLandmarks: QB && !BB.insideDungeon && 0 === JB.length,
        background: jB ? {
          imageKey: jB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: qB,
          label: GB(jB.labelKey),
          colour: jB.backgroundColour,
          ratio: pB
        } : null,
        connections: oB(BB.zones),
        minimap: jB ? {
          imageKey: jB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: qB,
          label: GB(jB.labelKey),
          colour: jB.backgroundColour,
          caption: GB(BB.zoneId === YB ? "skyblockGame:zoneIsland" : jB.labelKey),
          width: (jB.bounds.mapMaxX - jB.bounds.mapMinX) / jB.minimapSpan * 100 + "%",
          height: (jB.bounds.mapMaxZ - jB.bounds.mapMinZ) / jB.minimapSpan * 100 + "%",
          markers: [...JB, ...PB]
        } : null
      }
    }

    function oB(BB) {
      const OB = new Set;
      return BB.flatMap((GB => GB.connections.flatMap((YB => {
        const DB = BB.find((BB => BB.id === YB)),
          QB = [GB.id, YB].sort().join("|");
        return !DB || OB.has(QB) ? [] : (OB.add(QB), [{
          id: `${GB.id}-${YB}`,
          start: GB.position,
          end: DB.position,
          explored: GB.visited && DB.visited
        }])
      }))))
    }
    var jB = GB(39200);
    class yB extends jB.d {}
    const JB = "skyblockMapView";
    class MB extends yB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, YB, DB), this.requestTravel = OB, this.translate = GB, this.now = QB, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = BB => {
          this.tab = BB, this.feedbackKey = "", this.emit()
        }, this.travel = (BB, OB) => {
          if (!this.map || this.pending || this.Vp) return;
          const GB = ("zone" === BB ? this.map.zones : this.map.landmarks).find((BB => BB.id === OB));
          if (GB) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in GB && !GB.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (GB.visited)
              if ("zone" === BB && OB === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const GB = ++this.nextRequestId;
                this.pending = {
                  requestId: GB,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: BB,
                  id: OB,
                  requestId: GB
                })
              }
            else this.feedbackKey = "skyblockGame:mapVisitFirst";
            this.emit()
          }
        }
      }
      getEntities() {
        return this.entities
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      nP(BB) {
        var OB;
        if (!this.Vp)
          if ("entities" !== BB.kind)
            if ("open" !== BB.kind) {
              var GB, YB;
              if ("snapshot" === BB.kind)(null === (GB = BB.snapshot) || void 0 === GB ? void 0 : GB.zoneId) !== (null === (YB = this.map) || void 0 === YB ? void 0 : YB.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = BB.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === BB.kind) {
                var DB;
                BB.requestId === (null === (DB = this.pending) || void 0 === DB ? void 0 : DB.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (BB.requestId === (null === (OB = this.pending) || void 0 === OB ? void 0 : OB.requestId)) {
                var QB;
                this.pending = null, this.feedbackKey = null !== (QB = BB.errorKey) && void 0 !== QB ? QB : "", null === BB.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = BB.entities
      }
      kP() {
        this.pending && this.now() >= this.pending.expiresAt && (this.pending = null, this.feedbackKey = "skyblockGame:mapTravelTimeout", this.emit())
      }
      dispose() {
        this.map = null, this.pending = null, super.dispose()
      }
      isEnabled() {
        return null !== this.map
      }
      buildSnapshot() {
        return {
          presentation: this.map ? QB(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var PB = GB(353);
    const zB = 67.5 * Math.PI / 180;

    function lB(BB, OB) {
      const GB = Math.abs(BB);
      if (GB > zB || OB.trackHalfWidth <= 0) return null;
      const YB = OB.trackHalfWidth,
        DB = OB.screenHalfWidth / (OB.tanHalfFovX * Math.max(.5, Math.cos(OB.pitch))),
        QB = Math.min(Math.atan(.6 * YB / DB), .75 * zB),
        oB = DB * Math.tan(QB);
      let jB;
      if (GB <= QB) jB = DB * Math.tan(GB);
      else {
        const BB = zB - QB,
          OB = Math.max(0, DB * BB / (Math.cos(QB) ** 2 * (YB - oB)) - 1),
          yB = (GB - QB) / BB;
        jB = oB + (YB - oB) * (1 + OB) * yB / (1 + OB * yB)
      }
      return 50 + Math.sign(BB) * jB * 50 / YB
    }
    class pB {
      constructor(BB, OB) {
        this.map = BB, this.visited = OB, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = OB ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.landmarks.filter((BB => BB.visited === this.visited)).map((BB => {
          var OB, GB;
          return {
            id: `landmark:${BB.id}`,
            position: BB.position,
            icon: null !== (OB = BB.icon) && void 0 !== OB ? OB : "unknown",
            nameKey: null !== (GB = BB.nameKey) && void 0 !== GB ? GB : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class qB {
      constructor(BB, OB, GB, YB) {
        this.map = BB, this.kind = OB, this.position = GB, this.alive = YB, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = OB, this.range = "enemy" === OB ? 48 : 64, this.limit = 12
      }
      pR(BB) {
        if ("enemy" !== this.kind || this.alive(BB.MG)) return this.position(BB.MG)
      }
      getPoints() {
        const BB = [];
        for (const YB of this.map.getEntities()) {
          if (YB.kind !== this.kind || "enemy" === this.kind && !this.alive(YB.compassEntityId)) continue;
          const DB = this.position(YB.compassEntityId);
          var OB, GB;
          if (DB) BB.push({
            id: `${this.kind}:${YB.compassEntityId}`,
            MG: YB.compassEntityId,
            kind: this.kind,
            icon: null !== (OB = YB.icon) && void 0 !== OB ? OB : YB.npcSkin ? `npc_${YB.npcSkin}` : this.kind,
            displayName: YB.displayName,
            position: DB,
            nameKey: null !== (GB = YB.nameKey) && void 0 !== GB ? GB : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return BB
      }
    }
    class ZB {
      constructor(BB) {
        this.map = BB, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.portals.map((BB => {
          var OB;
          return {
            id: "portal:" + BB.id,
            kind: "portal",
            position: BB.position,
            nameKey: null !== (OB = BB.nameKey) && void 0 !== OB ? OB : "skyblockGame:compassUnvisitedZone",
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            colour: BB.colour
          }
        }))
      }
    }
    class NB {
      constructor(BB) {
        this.target = BB, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const BB = this.target();
        return BB ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: BB.position,
          nameKey: BB.nameKey
        }] : []
      }
    }

    function RB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.position;
      const DB = YB[0] - OB[0],
        QB = YB[2] - OB[2];
      return {
        ...BB,
        position: YB,
        offset: PB.b.computeShortestRotation(GB, (0, PB.Kb)([DB, 0, QB])),
        distance: Math.hypot(DB, YB[1] - OB[1], QB)
      }
    }
    let WB;

    function AB(BB, OB) {
      var GB;
      return (null === (GB = WB) || void 0 === GB ? void 0 : GB.locale) !== OB && (WB = {
        locale: OB,
        near: new Intl.NumberFormat(OB, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(OB, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (BB < 10 ? WB.near : WB.far).format(BB)
    }
    class VB {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(BB) {
        return this.providers.set(BB.id, BB), this.refreshAt = 0, () => {
          this.providers.get(BB.id) === BB && (this.providers.delete(BB.id), this.refreshAt = 0)
        }
      }
      frame(BB, OB, GB) {
        if (GB >= this.refreshAt) {
          this.refreshAt = GB + 200, this.candidates = [];
          for (const OB of this.providers.values()) {
            if (!OB.enabled) continue;
            const GB = OB.getPoints().map((OB => {
              const GB = OB.position;
              return {
                point: OB,
                distance: Math.hypot(GB[0] - BB[0], GB[1] - BB[1], GB[2] - BB[2])
              }
            })).filter((BB => BB.distance <= OB.range)).sort(((BB, OB) => BB.distance - OB.distance)).slice(0, OB.limit);
            for (const {
                point: BB
              }
              of GB) this.candidates.push({
              provider: OB,
              point: BB
            })
          }
        }
        const YB = [];
        for (const {
            point: DB,
            provider: QB
          }
          of this.candidates) {
          if (!QB.enabled) continue;
          const GB = QB.pR ? QB.pR(DB) : DB.position;
          if (GB) {
            const QB = RB(DB, BB, OB, GB);
            Math.abs(QB.offset) <= zB && YB.push(QB)
          }
        }
        return YB
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var SB = GB(37270),
      nB = GB(56);
    const UB = [{
        dailyRewardCoins: 1e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 3e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 4e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 5500,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 7e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 9e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 2
        }]
      }, {
        dailyRewardCoins: 25e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 3
        }, {
          dailyRewardItemName: "Diamond",
          dailyRewardItemAmount: 1
        }]
      }],
      fB = UB.length;

    function kB(BB) {
      return BB >= fB ? 1 : BB + 1
    }
    const dB = "skyblockQuests",
      KB = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      uB = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function mB(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const GB = Math.max(0, Math.floor(BB)),
        YB = Math.floor(GB % 1e3 / 100),
        DB = Math.floor(GB / 1e3),
        QB = DB % 60,
        oB = Math.floor(DB / 60),
        jB = oB % 60,
        yB = Math.floor(oB / 60),
        JB = BB => BB < 10 ? `0${BB}` : String(BB),
        MB = OB ? `.${YB}` : "";
      return yB > 0 ? `${yB}:${JB(jB)}:${JB(QB)}${MB}` : `${jB}:${JB(QB)}${MB}`
    }
    const IB = "devquests",
      FB = "none",
      iB = {
        hub: {
          farming_1: {
            min: [4, 16, 90],
            max: [4, 18, 91],
            unlockedBlock: "Yellow Portal"
          },
          mining_1: {
            min: [95, 16, 2],
            max: [97, 18, 2],
            unlockedBlock: "Cyan Portal"
          },
          combat_1: {
            min: [207, 36, 49],
            max: [208, 38, 49],
            unlockedBlock: "Red Portal"
          },
          fishing_1: {
            min: [6, 20, 149],
            max: [6, 22, 150],
            unlockedBlock: "Blue Portal"
          }
        },
        combat_1: {
          tower_roof: {
            min: [202, 69, 151],
            max: [203, 71, 151],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          },
          tower_exit: {
            min: [202, 80, 133],
            max: [203, 82, 133],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          }
        }
      },
      LB = "Compressed Messy Stone",
      gB = {
        "Grass Block": "Useless Soil",
        "Pine Grass Block": "Useless Soil",
        "Jungle Grass Block": "Useless Soil",
        "Dry Grass Block": "Useless Soil",
        "Overgrown Grass Block": "Useless Soil",
        "Overgrown Pine Grass Block": "Useless Soil",
        "Overgrown Jungle Grass Block": "Useless Soil",
        "Overgrown Dry Grass Block": "Useless Soil",
        Dirt: "Messy Dirt",
        Sand: "Sandstone",
        Gravel: "Smooth Andesite"
      },
      rB = ["Stone", "Diorite", "Andesite", "Granite"],
      XB = new Set(rB),
      wB = (Object.keys(gB), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const EB = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function cB(BB, OB) {
      const GB = Math.floor(5 * BB / (2 * OB + 1));
      return Math.min(4, Math.max(0, GB))
    }
    var hB = GB(1238);
    var aB = GB(37048);
    var eB = GB(37267),
      TB = GB(25),
      bB = GB(9545);
    const CB = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      HB = 1e3;

    function vB(BB) {
      return Math.max(0, BB)
    }

    function sB(BB) {
      return 1 + .01 * vB(BB)
    }

    function xB(BB) {
      return 1 + .005 * vB(BB)
    }

    function tB(BB) {
      return 1 + .005 * vB(BB)
    }

    function BO(BB) {
      return .01 * vB(BB)
    }

    function OO(BB) {
      return 150 / (150 + vB(BB))
    }

    function GO(BB) {
      return 1 + .002 * vB(BB)
    }

    function YO(BB) {
      return Math.round(10 * BB) / 10
    }

    function DO(BB, OB) {
      switch (BB) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: YO(100 * (xB(OB) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: YO(100 * (sB(OB) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: YO(100 * (tB(OB) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: YO(100 * BO(OB))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: YO(100 * (1 - OO(OB)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: YO(100 * (GO(OB) - 1))
          }
      }
    }

    function QO(BB) {
      return "farming" === BB ? 200 : 100
    }

    function oO(BB, OB) {
      if (!Number.isSafeInteger(BB) || BB < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const GB = QO(OB),
        YB = BB => function(BB, OB) {
          return QO(BB) * OB * (OB + 1) / 2
        }(OB, BB);
      let DB = Math.min(HB, Math.floor((Math.sqrt(8 * BB / GB + 1) - 1) / 2));
      return DB < HB && YB(DB + 1) <= BB ? DB++ : YB(DB) > BB && DB--, {
        totalXp: BB,
        level: DB,
        xpIntoLevel: BB - YB(DB),
        xpForNextLevel: DB === HB ? null : GB * (DB + 1)
      }
    }
    const jO = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function yO(BB) {
      return jO.has(BB)
    }
    const JO = new Set(PB.xb);

    function MO(BB) {
      return JO.has(BB)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const PO = {
        "Maple Log": 10,
        "Pine Log": 10,
        "Plum Log": 10,
        "Cedar Log": 10,
        "Aspen Log": 10,
        "Jungle Log": 10,
        "Palm Log": 10,
        "Pear Log": 10,
        "Cherry Log": 10,
        "Spectral Log": 10,
        "Mango Log": 10
      },
      zO = {
        Stone: 2,
        Diorite: 18,
        Granite: 18,
        Andesite: 18,
        "Coal Ore": 10,
        "Iron Ore": 15,
        "Gold Ore": 20,
        "Diamond Ore": 30,
        "Moonstone Ore": 40,
        "Block of Coal": 15,
        "Block of Gold": 30
      },
      lO = {
        ...zO,
        ...Object.fromEntries(Object.entries(wB).map((BB => {
          let [OB, GB] = BB;
          return [OB, 9 * zO[GB]]
        })))
      },
      pO = {
        Watermelon: 10,
        Melon: 10,
        "Wheat|FreshlyGrown": 10,
        "Rice|FreshlyGrown": 10,
        "Corn Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|Lava|FreshlyGrown": 10,
        "Tomato Plant|FreshlyGrown": 10,
        "Tomato Plant|Top|FreshlyGrown": 10,
        "Carrot Plant|FreshlyGrown": 10,
        "Potato Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|Top|FreshlyGrown": 10,
        "Coffee Plant|FreshlyGrown": 10,
        "Lettuce Plant|FreshlyGrown": 10,
        "Cauliflower Plant|FreshlyGrown": 10,
        "Parsnip Plant|FreshlyGrown": 10,
        "Red Cabbage Plant|FreshlyGrown": 10,
        "Beetroot Plant|FreshlyGrown": 10
      },
      qO = {
        Wheatfish: 25,
        Darter: 25,
        "Sunset Minnow": 25,
        "Root Flounder": 25,
        "Greenfin Loach": 25,
        "Red Strongfish": 30,
        "Green Strongfish": 30,
        "Boomerang Fish": 30,
        Seahorse: 30,
        "Spined Stickleback": 30,
        "Moon Strongfish": 40,
        "Boulder Bass": 40,
        "Grass Snapper": 40,
        "Crystalized Wheatfish": 55,
        "Moonstone Pupfish": 55,
        "Reedglass Minnow": 35,
        "Mangrove Herring": 35,
        "Mudline Perch": 35,
        "Coastal Mullet": 35,
        "Reef Sardine": 35,
        "Root Perch": 40,
        "Aether Minnow": 40,
        "Driftwood Catfish": 45,
        "Tri-Pointed Needlefish": 70,
        "Threadfin Bream": 40,
        "Mudbelly Tilapia": 40,
        "Rotslab Eel": 40,
        "Polarflash Electron": 45,
        Hatchetfish: 45,
        "Mireback Carp": 50,
        "Blackwater Bream": 50,
        "Stone Grouper": 55,
        "Shadeback Ray": 60,
        "Glacial Silverfish": 60,
        "Moonlit Boomerang Fish": 90,
        "Murkborne Ray": 90,
        "Bamboo Catfish": 50,
        "Mossback Arapaima": 60,
        "Murk Stingray": 65,
        "Channel Sawfish": 70,
        "Boned Sturgeon": 75,
        Oarfish: 90,
        Snakehead: 160,
        "Eldertide Leviathan": 250,
        Pithead: 50,
        "Electric Eel": 60,
        "Shadow Darter": 60,
        "Abyss Carp": 65,
        "Nomai Moray": 75,
        "Silver Dragonfish": 80,
        "Giant Moray": 100,
        Coelacanth: 250,
        "Frost Herring": 60,
        "Permafrost Halibut": 70,
        "Glacial Lanternfish": 80,
        "Frozen Grenadier": 85,
        "Blackfin Icefish": 100,
        Moonfish: 120,
        "Alpha Moon Strongfish": 140,
        "Deepwater Lanternfish": 300,
        "Pearlescent Moonfish": 300,
        "Game Dev Fish": 50
      };
    const ZO = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      NO = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function RO(BB) {
      return `rgb(${NO[BB].join(", ")})`
    }

    function WO(BB, OB, GB) {
      if (!GB) return BB(OB);
      const YB = {};
      for (const [DB, QB] of Object.entries(GB)) YB[DB] = "string" === typeof QB ? QB : BB(QB.translationKey);
      return BB(OB, YB)
    }
    class AO {
      constructor(BB, OB) {
        this.now = BB, this.getJournal = OB, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.sJ = !1, this.onShown = () => {}
      }
      enqueue(BB) {
        const OB = VO(BB);
        if (OB) this.pending.push(BB);
        else {
          const OB = this.pending.findIndex(VO);
          this.pending.splice(-1 === OB ? this.pending.length : OB, 0, BB)
        }
        return (null === this.current || null !== this.followUp && !OB) && (this.advance(), !0)
      }
      setHeld(BB) {
        return this.sJ = BB, !BB && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      kP() {
        const BB = this.getJournal(),
          OB = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === OB ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === OB || void 0 === OB ? void 0 : OB.kind) && BB && BB.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === OB || void 0 === OB ? void 0 : OB.kind)) {
          const BB = this.findFollowUp(this.current);
          if ("step" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || BB.questId !== OB.questId || BB.step.id !== OB.step.id) return this.showFollowUp(BB, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(BB, OB, GB) {
        var YB, DB, QB, oB;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, BB, GB);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, BB);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, BB, OB);
        const {
          questCompletionKind: jB,
          questCompletionNameKey: yB
        } = this.current, JB = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, MB = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, PB = "step" === (null === (YB = this.followUp) || void 0 === YB ? void 0 : YB.kind) ? this.followUp : null, zB = "explore" === (null === (DB = this.followUp) || void 0 === DB ? void 0 : DB.kind);
        let lB;
        return lB = zB ? BB("skyblockGame:questExploreTitle") : null !== PB ? "quest" === jB ? BB("skyblockGame:questNextQuestTitle", {
          quest: BB(PB.questNameKey)
        }) : BB("skyblockGame:questNextStepTitle") : BB("started" === jB ? "skyblockGame:questStartedTitle" : "quest" === jB ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? jB : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: lB,
          name: zB ? OB("skyblockGame:questExploreName") : null !== PB ? WO(OB, PB.step.nameKey, PB.step.nameParams) : WO(OB, yB, JB),
          description: zB ? OB("skyblockGame:questExploreDescription") : null === PB ? null : WO(OB, PB.step.descriptionKey, PB.step.descriptionParams),
          reward: null === this.followUp && MB > 0 ? OB("skyblockGame:questCoinRewardSuffix", {
            amount: MB.toLocaleString(GB)
          }) : null,
          iconItem: null !== (QB = null === PB || void 0 === PB ? void 0 : PB.step.questIconItem) && void 0 !== QB ? QB : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== PB && (null === (oB = this.getJournal()) || void 0 === oB ? void 0 : oB.trackedQuestId) === PB.questId ? PB.step.nameKey : null
        }
      }
      getSkillLevelView(BB, OB, GB) {
        let {
          skill: YB,
          beforeLevel: DB,
          level: QB
        } = BB;
        const oB = DO(YB, DB),
          jB = DO(YB, QB);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: OB(`skyblockGame:${YB}`),
          name: OB("skyblockGame:skillLevelUp", {
            to: QB.toLocaleString(GB)
          }),
          description: oB.percent === jB.percent ? null : OB(`${jB.translationKey}Change`, {
            before: oB.percent.toLocaleString(GB),
            after: jB.percent.toLocaleString(GB)
          }),
          reward: null,
          iconItem: ZO[YB],
          accent: RO(YB),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(BB, OB) {
        let {
          landmarkNameKey: GB
        } = BB;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: OB("skyblockGame:landmarkDiscovered"),
          name: OB(GB),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(BB, OB, GB) {
        let {
          titleKey: YB,
          textKey: DB,
          params: QB = {},
          nameKeys: oB = {},
          iconItem: jB = null
        } = BB;
        const yB = {
          ...QB
        };
        for (const [JB, MB] of Object.entries(oB)) yB[JB] = OB(MB);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: OB(YB),
          name: GB(DB, yB),
          description: null,
          reward: null,
          iconItem: jB,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var BB;
        if (null !== this.followUp) return 5600;
        switch (null === (BB = this.current) || void 0 === BB ? void 0 : BB.questCompletionKind) {
          case "quest":
            return 4800;
          case "started":
            return 4e3;
          case "skillLevel":
            return 3e3;
          case "landmark":
            return 3500;
          case "npcNote":
            return 8e3;
          default:
            return 2400
        }
      }
      showFollowUp(BB, OB) {
        null === BB || this.sJ ? this.advance() : (this.followUp = BB, this.token++, this.shownAt = this.now(), this.expiresAt = null !== OB && void 0 !== OB ? OB : this.shownAt + this.durationMs())
      }
      findFollowUp(BB) {
        var OB;
        const GB = this.getJournal();
        if (!GB || this.hasPendingQuestPopup() || VO(BB)) return null;
        const YB = "started" === BB.questCompletionKind ? GB.active.some((OB => OB.id === BB.questCompletionQuestId)) : "quest" === BB.questCompletionKind ? GB.completed.some((OB => OB.id === BB.questCompletionQuestId)) : [...GB.active, ...GB.completed].some((OB => OB.id === BB.questCompletionQuestId && OB.subquests.some((OB => OB.id === BB.questCompletionStepId && "completed" === OB.status))));
        if (!YB) return null;
        if ("quest" === BB.questCompletionKind && 0 === GB.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const DB = GB.active.find((BB => BB.id === GB.trackedQuestId)),
          QB = null !== (OB = null === DB || void 0 === DB ? void 0 : DB.subquests.find((BB => "ready" === BB.status))) && void 0 !== OB ? OB : null === DB || void 0 === DB ? void 0 : DB.subquests.find((BB => "active" === BB.status));
        return QB ? {
          kind: "step",
          questId: DB.id,
          questNameKey: DB.nameKey,
          step: QB
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((BB => !VO(BB)))
      }
      advance() {
        var BB;
        this.current = this.sJ ? null : null !== (BB = this.pending.shift()) && void 0 !== BB ? BB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function VO(BB) {
      return SO(BB.questCompletionKind)
    }

    function SO(BB) {
      return "skillLevel" === BB || "landmark" === BB || "npcNote" === BB
    }
    var nO = GB(39205),
      UO = GB(39207),
      fO = GB(39173),
      kO = GB(4656);
    const dO = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function KO(BB) {
      const OB = new kO.d(BB);
      return {
        radius: 45,
        squareness: 3,
        wobbles: dO.map((BB => {
          let {
            lobes: GB,
            amount: YB
          } = BB;
          return {
            lobes: GB[Math.floor(OB.next() * GB.length)],
            amount: YB[0] + OB.next() * (YB[1] - YB[0]),
            phase: 2 * OB.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function uO(BB) {
      let {
        radius: OB,
        squareness: GB,
        wobbles: YB,
        samples: DB
      } = BB;
      const QB = [];
      for (let oB = 0; oB < DB; oB++) {
        const BB = 2 * Math.PI * oB / DB,
          jB = Math.cos(BB),
          yB = Math.sin(BB),
          JB = OB * (Math.abs(jB) ** GB + Math.abs(yB) ** GB) ** (-1 / GB) * YB.reduce(((OB, GB) => {
            let {
              lobes: YB,
              amount: DB,
              phase: QB
            } = GB;
            return OB + DB * Math.sin(YB * BB + QB)
          }), 1);
        QB.push(`${(50+JB*jB).toFixed(2)} ${(50+JB*yB).toFixed(2)}`)
      }
      return `M${QB.join("L")}Z`
    }
    const mO = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class IO {
      constructor() {
        this.compassSpacing = 1, this.compassSize = {
          trackHalfWidth: 0,
          screenHalfWidth: 0
        }, this.compass = null, this.terrain = null, this.searchAreaPath = {
          seed: "",
          d: ""
        }, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
          width: 0,
          height: 0
        }, this.waypointInset = {
          x: 8,
          top: 8,
          bottom: 8
        }, this.viewport = {
          width: 0,
          height: 0
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Vp = !1, this.mountCompass = BB => {
          var OB;
          if (null === (OB = this.stopLayout) || void 0 === OB || OB.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !BB || this.Vp) return;
          const GB = BB.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: BB,
            track: GB,
            label: BB.querySelector(".SkyblockCompassLabel")
          }, GB.replaceChildren();
          for (let DB = 0; DB < 4; DB++) {
            const BB = document.createElement("span");
            BB.className = "SkyblockCompassCardinal", GB.appendChild(BB), this.cardinals.push(BB)
          }
          const YB = (0, fO.d)(mO, [BB], this.layout);
          this.stopLayout = () => {
            YB(), GB.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = BB => {
          this.terrain = this.Vp ? null : BB, this.render(this.frame)
        }, this.mountMinimapSearchArea = BB => {
          this.mountSearchArea("minimap", BB)
        }, this.mountMapSearchArea = BB => {
          this.mountSearchArea("map", BB)
        }, this.mountPlayer = BB => {
          this.player = this.Vp ? null : BB, this.render(this.frame)
        }, this.mountWaypoint = BB => {
          var OB, GB;
          if (null === (OB = this.stopWaypoint) || void 0 === OB || OB.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !BB || this.Vp) return;
          const YB = BB.querySelector(".SkyblockQuestWaypointMarker");
          YB.replaceChildren((0, UO.c)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: BB,
            marker: YB,
            clip: BB.querySelector(".SkyblockQuestWaypointTextClip"),
            text: BB.querySelector(".SkyblockQuestWaypointText"),
            label: BB.querySelector(".SkyblockQuestWaypointLabel"),
            distance: BB.querySelector(".SkyblockQuestWaypointDistance"),
            hint: BB.querySelector(".SkyblockQuestWaypointHint")
          };
          const DB = () => {
              this.waypointMarkerSize = {
                width: YB.offsetWidth,
                height: YB.offsetHeight
              }, this.waypointInset = {
                x: YB.offsetWidth / 2 + 8,
                top: YB.offsetHeight + 8,
                bottom: 8
              }
            },
            QB = new ResizeObserver((() => {
              DB(), this.render(this.frame)
            }));
          QB.observe(YB, {
            box: "border-box"
          });
          const oB = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", oB), null === (GB = window.visualViewport) || void 0 === GB || GB.addEventListener("resize", oB), this.stopWaypoint = () => {
            var BB;
            QB.disconnect(), window.removeEventListener("resize", oB), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", oB)
          }, oB(), DB(), this.render(this.frame)
        }, this.mountWaypointOrigin = BB => {
          var OB;
          if (null === (OB = this.stopWaypointOrigin) || void 0 === OB || OB.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = BB && !this.Vp ? Number(BB.dataset.notificationToken) : null, BB && !this.Vp && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const OB = {
              nameKey: BB.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = OB;
            const GB = () => {
                const GB = BB.getBoundingClientRect();
                OB.x = (GB.left + GB.width / 2) / window.innerWidth * 100, OB.y = (GB.top + GB.height / 2) / window.innerHeight * 100
              },
              YB = new ResizeObserver(GB);
            YB.observe(BB.parentElement), YB.observe(BB), window.addEventListener("resize", GB), this.stopWaypointOrigin = () => {
              YB.disconnect(), window.removeEventListener("resize", GB)
            }, GB()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const BB = this.compass.root,
            OB = getComputedStyle(BB),
            GB = getComputedStyle(document.documentElement),
            YB = parseFloat(GB.fontSize),
            DB = parseFloat(OB.getPropertyValue("--compass-icon-size")) * YB,
            QB = "1" === OB.getPropertyValue("--compass-fit-top").trim(),
            oB = QB ? 1 : 8,
            jB = Array.from(document.querySelectorAll(mO), (BB => {
              var OB;
              return (null !== (OB = BB.querySelector(".MiddleTextTop")) && void 0 !== OB ? OB : BB).getBoundingClientRect()
            })).filter((BB => BB.width > 0 && BB.height > 0));
          let yB = (parseFloat(GB.getPropertyValue("--notchTop")) || 0) + oB,
            JB = "";
          if (QB) {
            const OB = window.innerWidth / 2,
              GB = BB.getBoundingClientRect().height,
              QB = [yB, ...jB.map((BB => Math.max(yB, BB.bottom + oB)))].sort(((BB, OB) => BB - OB));
            for (const BB of QB) {
              let QB = OB - 8;
              for (const YB of jB) YB.bottom + oB <= BB || YB.top >= BB + GB + oB || (QB = Math.min(QB, YB.right <= OB ? OB - YB.right - 8 : YB.left - OB - 8));
              const MB = 2 * QB - DB;
              if (MB >= 16 * YB) {
                JB = `${MB}px`, yB = BB;
                break
              }
            }
          }
          BB.style.maxWidth !== JB && (BB.style.maxWidth = JB);
          const MB = BB.getBoundingClientRect(),
            PB = this.compassSize.trackHalfWidth;
          if (MB.width > 0) {
            const BB = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: BB.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * DB / BB.width
          }
          if (!JB)
            for (const zB of jB) zB.right > MB.left - 8 && zB.left < MB.right + 8 && (yB = Math.max(yB, zB.bottom + oB));
          BB.style.top = `${yB}px`, this.compassSize.trackHalfWidth !== PB && this.render(this.frame)
        }
      }
      mountSearchArea(BB, OB) {
        this.searchAreas[BB] = this.Vp ? null : OB, this.render(this.frame)
      }
      render(BB) {
        if (this.Vp) return;
        if (this.frame = BB, this.compass && (FO(this.compass.root, !BB), BB)) {
          const OB = this.compassSize.trackHalfWidth / 50;
          BB.compass.cardinals.forEach(((BB, GB) => {
            const YB = this.cardinals[GB];
            YB.textContent !== BB.name && (YB.textContent = BB.name), FO(YB, BB.hidden), YB.style.translate = BB.left * OB + "px"
          }));
          const GB = new Set;
          BB.compass.markers.forEach(((YB, DB) => {
            var QB;
            GB.add(YB.id);
            let oB = this.markers.get(YB.id);
            oB || (oB = document.createElement("span"), oB.className = "SkyblockCompassMarker", this.markers.set(YB.id, oB), this.compass.track.appendChild(oB)), oB.dataset.icon !== YB.icon && (oB.dataset.icon = YB.icon, oB.replaceChildren((0, UO.c)(YB.icon))), oB.style.color = null !== (QB = YB.colour) && void 0 !== QB ? QB : "", oB.style.translate = YB.left * OB + "px", oB.style.zIndex = String(BB.compass.markers.length - DB), oB.title !== YB.name && (oB.title = YB.name)
          }));
          for (const [BB, YB] of this.markers) GB.has(BB) || (YB.remove(), this.markers.delete(BB));
          this.compass.label.textContent !== BB.compass.label && (this.compass.label.textContent = BB.compass.label)
        }
        this.terrain && (FO(this.terrain, !(null !== BB && void 0 !== BB && BB.minimap)), null !== BB && void 0 !== BB && BB.minimap && (this.terrain.style.transform = BB.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", BB.minimap.iconRotation)));
        const OB = null === BB || void 0 === BB ? void 0 : BB.searchArea;
        for (const GB of [this.searchAreas.minimap, this.searchAreas.map])
          if (GB && (FO(GB, !OB), OB)) {
            if (this.searchAreaPath.seed !== OB.shapeSeed && (this.searchAreaPath = {
                seed: OB.shapeSeed,
                d: uO(KO(OB.shapeSeed))
              }), GB.dataset.shapeSeed !== OB.shapeSeed) {
              GB.dataset.shapeSeed = OB.shapeSeed;
              for (const BB of GB.querySelectorAll("path")) BB.setAttribute("d", this.searchAreaPath.d)
            }
            GB.style.left = `${OB.left}%`, GB.style.top = `${OB.top}%`, GB.style.width = `${OB.width}%`, GB.style.height = `${OB.height}%`
          } if (this.player && (FO(this.player, !(null !== BB && void 0 !== BB && BB.player) || BB.player.hidden), null !== BB && void 0 !== BB && BB.player && (this.player.style.left = `${BB.player.left}%`, this.player.style.top = `${BB.player.top}%`, this.player.style.setProperty("--map-player-rotation", BB.player.rotation))), this.waypoint) {
          const {
            root: OB,
            marker: GB,
            clip: YB,
            text: DB,
            label: QB,
            distance: oB,
            hint: jB
          } = this.waypoint, yB = !(null !== BB && void 0 !== BB && BB.waypoint) || null !== BB.waypoint.popupToken && BB.waypoint.popupToken !== this.waypointOriginToken;
          FO(OB, yB);
          let JB = 1;
          const MB = this.waypointLaunch;
          if (!yB && MB && BB.waypoint.nameKey === MB.nameKey) {
            const BB = performance.now();
            MB.startedAt ??= BB, JB = Math.min(1, Math.max(0, (BB - MB.startedAt - 450) / 1e3)), GB.style.opacity = String(Math.min(1, (BB - MB.startedAt) / 150)), 1 === JB && (this.waypointLaunch = null)
          } else GB.style.opacity = "", MB && null !== MB.startedAt && (this.waypointLaunch = null);
          if (OB.classList.toggle("Launching", JB < 1), null !== BB && void 0 !== BB && BB.waypoint) {
            const OB = this.waypointInset,
              yB = "quest_talk" === BB.waypoint.markerIcon ? function(BB, OB, GB) {
                if (!BB.text || null === BB.blockHeight || 0 === BB.nearness) return BB;
                const YB = BB.blockHeight / 100 * GB.height,
                  DB = -BB.nearness * (iO * YB + OB.width / 2),
                  QB = BB.nearness * (LO * YB + OB.height / 2);
                return {
                  ...BB,
                  text: {
                    x: BB.text.x + DB / GB.width * 100,
                    y: BB.text.y + QB / GB.height * 100
                  }
                }
              }(BB.waypoint, this.waypointMarkerSize, this.viewport) : BB.waypoint,
              PB = (0, nO.b)(yB, OB, this.viewport),
              zB = JB * JB * (3 - 2 * JB),
              lB = JB < 1 ? MB.x + (PB.x - MB.x) * zB : PB.x,
              pB = JB < 1 ? MB.y + (PB.y - MB.y) * zB : PB.y;
            GB.style.translate = `${lB}vw ${pB}vh`, YB.style.clipPath = `inset(${OB.top}px ${OB.x}px ${OB.bottom}px)`, FO(DB, JB < 1 || !BB.waypoint.text), DB.style.opacity = String(1 - BB.waypoint.nearness), BB.waypoint.text && (DB.style.translate = `${BB.waypoint.text.x}vw ${BB.waypoint.text.y}vh`), QB.textContent !== BB.waypoint.name && (QB.textContent = BB.waypoint.name), this.markerIcon !== BB.waypoint.markerIcon && (this.markerIcon = BB.waypoint.markerIcon, GB.replaceChildren((0, UO.c)(this.markerIcon))), oB.textContent !== BB.waypoint.distance && (oB.textContent = BB.waypoint.distance), FO(jB, null === BB.waypoint.hint), null !== BB.waypoint.hint && jB.textContent !== BB.waypoint.hint && (jB.textContent = BB.waypoint.hint)
          }
        }
      }
      dispose() {
        var BB, OB;
        this.mountWaypointOrigin(null), this.render(null), null === (BB = this.stopLayout) || void 0 === BB || BB.call(this), this.stopLayout = null, null === (OB = this.stopWaypoint) || void 0 === OB || OB.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Vp = !0
      }
    }

    function FO(BB, OB) {
      BB.hidden !== OB && (BB.hidden = OB)
    }
    const iO = .55,
      LO = .6;
    var gO = GB(39193);
    const rO = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class XO {
      constructor(BB, OB, GB, YB) {
        this.map = BB, this.quests = OB, this.compass = GB, this.display = new IO, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Vp = !1, this.snapshot = null, this.texts = new Map, this.translate = YB
      }
      setTranslator(BB, OB) {
        this.translate = BB, this.locale = OB, this.metresFormat = new Intl.NumberFormat(OB), this.texts.clear()
      }
      translateCached(BB, OB) {
        const GB = void 0 === OB ? BB : `${BB} ${OB}`;
        let YB = this.texts.get(GB);
        return void 0 === YB && (this.texts.size >= 500 && this.texts.clear(), YB = this.translate(BB, void 0 === OB ? void 0 : {
          distance: OB
        }), this.texts.set(GB, YB)), YB
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(BB, OB, GB) {
        if (this.Vp) return;
        if (!BB) return this.snapshot = null, void this.display.render(null);
        const YB = this.map.getSnapshot().map,
          QB = GB.cameraHeading,
          oB = {
            ...this.display.compassSize,
            tanHalfFovX: GB.tanHalfFovX,
            pitch: GB.cameraPitch
          },
          jB = [];
        if (YB)
          for (const DB of this.compass.frame(BB, QB, OB)) {
            const BB = lB(DB.offset, oB);
            null !== BB && jB.push({
              ...DB,
              left: BB
            })
          }
        const yB = function(BB, OB) {
            const GB = [],
              YB = BB => "quest" === BB.kind ? BB.distance - 1 : BB.distance,
              DB = [...BB].sort(((BB, OB) => YB(BB) - YB(OB) || BB.id.localeCompare(OB.id)));
            for (const QB of DB) {
              let BB = !1;
              if ("quest" !== QB.kind)
                for (const YB of GB)
                  if (Math.abs(YB.left - QB.left) < OB) {
                    BB = !0;
                    break
                  } BB || GB.push(QB)
            }
            return GB
          }(jB, this.display.compassSpacing),
          JB = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              GB = null;
            for (const YB of BB) Math.abs(YB.offset) <= OB && (!GB || YB.distance < GB.distance || YB.distance === GB.distance && Math.abs(YB.offset) < Math.abs(GB.offset)) && (GB = YB);
            return GB
          }(yB),
          MB = BB => {
            var OB;
            return null !== (OB = BB.displayName) && void 0 !== OB ? OB : this.translateCached(BB.nameKey)
          },
          zB = {
            compass: {
              markers: yB.map((BB => ({
                id: BB.id,
                icon: BB.icon,
                colour: BB.colour,
                name: MB(BB),
                left: BB.left
              }))),
              cardinals: gO.b.map((BB => {
                let {
                  name: OB,
                  bearing: GB
                } = BB;
                const YB = lB(PB.b.computeShortestRotation(QB, GB), oB);
                return {
                  name: OB,
                  left: null !== YB && void 0 !== YB ? YB : 0,
                  hidden: null === YB
                }
              })),
              label: JB ? `${MB(JB)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",AB(JB.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== YB && void 0 !== YB && YB.background) {
          const OB = BB[0] - YB.mapOrigin[0],
            GB = BB[2] - YB.mapOrigin[2],
            {
              rotation: oB,
              transform: jB
            } = (0, DB.d)(OB, GB, QB, YB.background.bounds);
          zB.minimap = {
            transform: jB,
            iconRotation: -oB + "rad"
          };
          const [yB, JB] = (0, DB.c)(OB, GB, YB.background.bounds);
          zB.player = {
            left: yB,
            top: JB,
            hidden: yB < 0 || JB < 0 || yB > 100 || JB > 100,
            rotation: -oB + "rad"
          }
        }
        const {
          waypoint: pB
        } = this.quests.getSnapshot();
        if ("search" === (null === pB || void 0 === pB ? void 0 : pB.questMarkerIcon) && null !== YB && void 0 !== YB && YB.background) {
          const {
            bounds: BB
          } = YB.background, [OB, GB] = (0, DB.c)(pB.position[0] - YB.mapOrigin[0], pB.position[2] - YB.mapOrigin[2], BB);
          zB.searchArea = {
            left: OB,
            top: GB,
            width: 6400 / (BB.mapMaxX - BB.mapMinX),
            height: 6400 / (BB.mapMaxZ - BB.mapMinZ),
            shapeSeed: pB.nameKey
          }
        }
        const qB = this.quests.getNotificationSnapshot(),
          ZB = "completion" === (null === qB || void 0 === qB ? void 0 : qB.phase) && !SO(qB.kind);
        if (pB && !ZB) {
          const OB = Math.hypot(...pB.position.map(((OB, GB) => OB - BB[GB]))),
            YB = Math.round(OB),
            DB = "talk" === pB.questMarkerIcon ? Math.min(1, Math.max(0, (10 - OB) / 5)) : 0,
            QB = GB.projectWorldPosToViewport(pB.position),
            oB = QB && GB.projectWorldPosToViewport([pB.position[0], pB.position[1] - 1, pB.position[2]]);
          zB.waypoint = {
            ...GB.projectWorldPosToScreenPos(pB.position),
            text: QB,
            nearness: DB * DB * (3 - 2 * DB),
            blockHeight: QB && oB ? oB.y - QB.y : null,
            name: this.translateCached(pB.nameKey),
            nameKey: pB.nameKey,
            markerIcon: pB.questMarkerIcon ? rO[pB.questMarkerIcon] : "quest",
            popupToken: (null === qB || void 0 === qB ? void 0 : qB.waypointNameKey) === pB.nameKey ? qB.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(YB)),
            hint: "search" === pB.questMarkerIcon && Math.hypot(pB.position[0] - BB[0], pB.position[2] - BB[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = zB, this.display.render(zB)
      }
      dispose() {
        this.Vp = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const wO = "skyblockSkillsView";
    class EO extends yB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB,
          YB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          DB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = OB, this.translate = GB, this.locale = YB, this.itemName = DB, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, this.locale = OB, this.itemName = GB, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(BB) {
        let OB = this.skillText.get(BB);
        return OB || (OB = {
          label: this.translate(`skyblockGame:${BB}`),
          description: this.translate(`skyblockGame:${BB}Description`)
        }, this.skillText.set(BB, OB)), OB
      }
      sources(BB) {
        if ("mining" === BB || "fishing" === BB) return this.buildSources(BB);
        let OB = this.sourceText.get(BB);
        return OB || (OB = this.buildSources(BB), this.sourceText.set(BB, OB)), OB
      }
      buildSources(BB) {
        const OB = this.translate;
        return "exploration" === BB ? [OB("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), OB("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === BB ? [OB("skyblockGame:logSource", {
          xp: this.number(PO["Maple Log"])
        })] : "combat" === BB ? [OB("skyblockGame:creatureKillSource"), OB("skyblockGame:noEnvironmentalXp")] : "farming" === BB ? [OB("skyblockGame:cropSource", {
          xp: this.number(pO["Wheat|FreshlyGrown"])
        }), OB("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), OB("skyblockGame:noYoungCropXp")] : Object.entries("mining" === BB ? lO : qO).map((BB => {
          let [GB, YB] = BB;
          return OB("skyblockGame:itemXpSource", {
            item: this.itemName(GB),
            xp: this.number(YB)
          })
        }))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
      benefit(BB, OB) {
        const GB = DO(BB, OB);
        return this.translate(GB.translationKey, {
          bonus: this.number(GB.percent)
        })
      }
      nP(BB) {
        if (!this.Vp) {
          if ("snapshot" === BB.kind) this.progress = BB.progress, this.pending.clear(), this.recent = null;
          else if ("award" === BB.kind && this.progress) {
            const {
              award: OB
            } = BB;
            this.progress = {
              ...this.progress,
              [OB.skill]: OB.after
            };
            for (const [BB, YB] of this.pending) YB.skill === OB.skill && this.pending.delete(BB);
            const GB = OB.after.level > OB.before.level;
            this.recordGain(OB.skill, OB.amount, GB ? ++this.nextLevelUpToken : null), GB && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: OB.skill,
              beforeLevel: OB.before.level,
              level: OB.after.level
            })
          } else {
            if ("rejectBlock" === BB.kind) return void this.rejectBlock(BB.position);
            if ("open" === BB.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(BB, OB, GB) {
        if (!this.progress || this.Vp || GB) return;
        const YB = function(BB, OB) {
          const GB = BB.split("|")[0];
          return "Air" === OB || OB === `Barkless ${BB}` ? Object.hasOwn(PO, GB) ? {
            skill: "foraging",
            amount: PO[GB]
          } : "Air" !== OB ? null : Object.hasOwn(lO, BB) ? {
            skill: "mining",
            amount: lO[BB]
          } : yO(BB) ? {
            skill: "farming",
            amount: 10
          } : MO(BB) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(pO, BB) ? {
            skill: "farming",
            amount: pO[BB]
          } : Object.hasOwn(gB, BB) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(OB, "Air");
        if (!YB) return;
        const DB = BB.join(",");
        if (this.pending.has(DB)) return;
        const QB = this.predictedProgress(YB.skill).totalXp + YB.amount;
        Number.isSafeInteger(QB) && (this.pending.set(DB, {
          ...YB,
          expires: this.now() + 2e3
        }), this.recordGain(YB.skill, 0), this.emit())
      }
      rejectBlock(BB) {
        this.pending.delete(BB.join(",")) && this.emit()
      }
      kP() {
        if (this.Vp) return;
        let BB = !1;
        for (const [OB, GB] of this.pending) GB.expires <= this.now() && (this.pending.delete(OB), BB = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, BB = !0), BB && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(BB, OB) {
        var GB, YB;
        let DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QB = (null === (GB = this.recent) || void 0 === GB ? void 0 : GB.skill) === BB && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          oB = (null === (YB = this.recent) || void 0 === YB ? void 0 : YB.skill) === BB && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: BB,
          confirmed: QB + OB,
          expires: this.now() + 3e3,
          levelUpToken: null !== DB && void 0 !== DB ? DB : oB
        }
      }
      pendingXp(BB) {
        let OB = 0;
        for (const GB of this.pending.values()) GB.skill === BB && (OB += GB.amount);
        return OB
      }
      predictedProgress(BB) {
        const OB = this.progress[BB],
          GB = this.pendingXp(BB);
        return GB ? oO(OB.totalXp + GB, BB) : OB
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var BB, OB, GB;
        const YB = this.progress ? CB.map((BB => {
            const OB = this.predictedProgress(BB);
            return {
              ...this.text(BB),
              icon: ZO[BB],
              benefit: this.benefit(BB, OB.level),
              sources: this.sources(BB),
              id: BB,
              selected: BB === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(OB.level)
              }),
              xp: null === OB.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(OB.xpIntoLevel),
                target: this.number(OB.xpForNextLevel)
              }),
              percent: null === OB.xpForNextLevel ? 100 : Math.min(100, OB.xpIntoLevel / OB.xpForNextLevel * 100)
            }
          })) : [],
          DB = YB.find((BB => {
            var OB;
            return BB.id === (null === (OB = this.recent) || void 0 === OB ? void 0 : OB.skill)
          })),
          QB = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: YB,
          detail: null !== (BB = YB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          overallLevel: this.progress ? CB.reduce(((BB, OB) => BB + this.predictedProgress(OB).level), 0) : null,
          hud: DB && QB > 0 ? {
            skill: DB,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(QB)
            }),
            levelUpToken: null !== (OB = null === (GB = this.recent) || void 0 === GB ? void 0 : GB.levelUpToken) && void 0 !== OB ? OB : null,
            colour: RO(DB.id)
          } : null
        }
      }
    }
    const cO = Math.max(1600, 600, 950) + 400,
      hO = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      aO = "skyblockQuestsView",
      eO = "skyblockQuestNotificationView";
    class TO extends yB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          oB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(BB, YB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = OB, this.translate = GB, this.now = DB, this.locale = QB, this.publishNotification = oB, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
          enabled: !1,
          open: !1,
          active: [],
          completed: [],
          completedExpanded: !1,
          detail: null,
          tracked: null,
          trackedStepPulse: 0,
          waypoint: null,
          compassTarget: null
        }, this.getNotificationSnapshot = () => this.notificationSnapshot, this.showTracked = () => {
          var BB, OB;
          this.selected = null !== (BB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.trackedQuestId) && void 0 !== BB ? BB : null, this.show()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const BB = this.snapshot.detail;
          !this.Vp && null !== BB && void 0 !== BB && BB.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(BB.id), this.emit())
        }, this.viewDialogue = () => {
          const BB = this.snapshot.detail;
          var OB;
          BB && (null === (OB = this.onViewDialogue) || void 0 === OB || OB.call(this, BB.id))
        }, this.notifications = new AO(DB, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var BB, OB;
        return null !== (BB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.trackedQuestId) && void 0 !== BB ? BB : null
      }
      notify(BB) {
        !this.Vp && this.notifications.enqueue(BB) && this.emitNotification()
      }
      setNotificationsHeld(BB) {
        (this.notifications.setHeld(BB) || BB) && this.emitNotification()
      }
      kP() {
        var BB, OB;
        if (this.Vp) return;
        this.notifications.kP() && this.emitNotification();
        let GB = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, GB = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, GB = !0);
        const YB = bO(this.authoritative);
        null !== YB && void 0 !== YB && null !== (BB = YB.questClock) && void 0 !== BB && BB.running && this.clockText(YB) !== (null === (OB = this.snapshot.tracked) || void 0 === OB ? void 0 : OB.clock) && (GB = !0), GB && this.emit()
      }
      setTranslator(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = OB, this.emitNotification(), this.emit()
      }
      nP(BB) {
        if (!this.Vp)
          if ("completion" === BB.kind) this.notify(BB.questCompletion);
          else if ("landmark" === BB.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: BB.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === BB.kind) {
          var OB, GB, YB;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: BB.npcNoteTitleKey,
            textKey: BB.npcNoteTextKey,
            params: null !== (OB = BB.npcNoteParams) && void 0 !== OB ? OB : {},
            nameKeys: null !== (GB = BB.npcNoteNameKeys) && void 0 !== GB ? GB : {},
            iconItem: null !== (YB = BB.npcNoteIconItem) && void 0 !== YB ? YB : null
          })
        } else if ("open" === BB.kind) this.show();
        else if ("guidance" === BB.kind) this.waypoint = BB.waypoint, this.compassTarget = BB.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === BB.kind) {
          this.authoritative = BB.snapshot, this.notifications.kP() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const OB = this.trackedStepPulse;
          this.updateTrackedStepPulse(BB.snapshot), this.emit(), this.trackedStepPulse > OB && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Vp || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var BB;
        return null !== (BB = this.translateWithIcons) && void 0 !== BB ? BB : this.translate
      }
      clockText(BB) {
        const OB = BB.questClock;
        if (!OB) return null;
        const GB = OB.elapsedMs + (OB.running ? this.now() - this.receivedAt : 0);
        return void 0 === OB.countdownFromMs ? mB(GB, !1) : mB(1e3 * Math.ceil(Math.max(0, OB.countdownFromMs - GB) / 1e3), !1)
      }
      updateTrackedStepPulse(BB) {
        var OB, GB, YB;
        const DB = bO(BB);
        if (!DB) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const QB = BB => DB.subquests.filter((OB => BB(OB.status))).map((BB => BB.id)),
          oB = QB((BB => "completed" === BB || "skipped" === BB)),
          jB = QB((BB => "locked" !== BB)),
          yB = (null === (OB = this.trackedSteps) || void 0 === OB ? void 0 : OB.questId) === DB.id && DB.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (yB) {
          const BB = oB.filter((BB => !yB.finished.has(BB))),
            OB = QB((BB => "active" === BB || "ready" === BB)).filter((BB => !yB.unlocked.has(BB)));
          BB.length > 0 && this.trackedStepPulse++, (BB.length > 0 || OB.length > 0) && (this.trackedChange = {
            finished: new Set(BB),
            unlocked: new Set(OB),
            expiresAt: this.now() + cO
          })
        } else {
          var JB;
          this.trackedStepPulse = (null === (JB = this.trackedSteps) || void 0 === JB ? void 0 : JB.questId) === DB.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: DB.id,
          progress: DB.progress,
          finished: new Set([...null !== (GB = null === yB || void 0 === yB ? void 0 : yB.finished) && void 0 !== GB ? GB : [], ...oB]),
          unlocked: new Set([...null !== (YB = null === yB || void 0 === yB ? void 0 : yB.unlocked) && void 0 !== YB ? YB : [], ...jB])
        }
      }
      entry(BB, OB) {
        var GB, YB;
        const DB = BB.id === (null === (GB = this.authoritative) || void 0 === GB ? void 0 : GB.trackedQuestId),
          QB = this.now() < this.trackAvailableAt,
          oB = this.questTextTranslator(),
          jB = BB.subquests.map((OB => {
            var GB, YB, QB, jB, yB, JB;
            const MB = null !== (GB = OB.handInNpcName) && void 0 !== GB ? GB : BB.giverName,
              PB = this.translate("skyblockGame:progress", {
                current: OB.progress.toLocaleString(this.locale),
                target: OB.target.toLocaleString(this.locale)
              }),
              zB = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: MB ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [OB.status],
              lB = "active" === OB.status || "ready" === OB.status;
            return {
              id: OB.id,
              name: WO(oB, OB.nameKey, OB.nameParams),
              description: WO(oB, OB.descriptionKey, OB.descriptionParams),
              progress: PB,
              status: OB.status,
              statusLabel: zB ? this.translate(zB, {
                npc: MB
              }) : PB,
              iconItem: lB && null !== (YB = OB.questIconItem) && void 0 !== YB ? YB : null,
              barPercent: "active" === OB.status && OB.showsProgressBar ? Math.min(100, 100 * OB.progress / OB.target) : null,
              justFinished: DB && null !== (QB = null === (jB = this.trackedChange) || void 0 === jB ? void 0 : jB.finished.has(OB.id)) && void 0 !== QB && QB,
              justUnlocked: DB && null !== (yB = null === (JB = this.trackedChange) || void 0 === JB ? void 0 : JB.unlocked.has(OB.id)) && void 0 !== yB && yB
            }
          }));
        return {
          id: BB.id,
          name: WO(oB, BB.nameKey, BB.nameParams),
          description: WO(oB, BB.descriptionKey, BB.descriptionParams),
          progress: OB ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: BB.progress.toLocaleString(this.locale),
            target: BB.target.toLocaleString(this.locale)
          }),
          completed: OB,
          tracked: DB,
          selected: BB.id === this.selected,
          canTrack: !OB && !DB && !QB,
          trackLabel: this.translate(DB ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : QB ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== BB.id,
          subquests: jB,
          focusStep: null !== (YB = jB.find((BB => null !== BB.barPercent))) && void 0 !== YB ? YB : null,
          clock: this.clockText(BB)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, OB, GB, YB, DB, QB, oB, jB, yB, JB;
        const MB = [...null !== (BB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.active) && void 0 !== BB ? BB : [], ...null !== (GB = null === (YB = this.authoritative) || void 0 === YB ? void 0 : YB.completed) && void 0 !== GB ? GB : []];
        var PB, zB, lB, pB;
        MB.some((BB => BB.id === this.selected)) || (this.selected = null !== (PB = null !== (zB = null === (lB = this.authoritative) || void 0 === lB ? void 0 : lB.trackedQuestId) && void 0 !== zB ? zB : null === (pB = MB[0]) || void 0 === pB ? void 0 : pB.id) && void 0 !== PB ? PB : null);
        const qB = null !== (DB = null === (QB = this.authoritative) || void 0 === QB ? void 0 : QB.active.map((BB => this.entry(BB, !1)))) && void 0 !== DB ? DB : [];
        qB.sort(((BB, OB) => Number(OB.tracked) - Number(BB.tracked)));
        const ZB = null !== (oB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.completed.map((BB => this.entry(BB, !0)))) && void 0 !== oB ? oB : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: qB,
          completed: ZB,
          completedExpanded: this.completedExpanded,
          detail: null !== (yB = [...qB, ...ZB].find((BB => BB.selected))) && void 0 !== yB ? yB : null,
          tracked: null !== (JB = qB.find((BB => BB.tracked))) && void 0 !== JB ? JB : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function bO(BB) {
      var OB;
      return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.active.find((OB => OB.id === BB.trackedQuestId))) && void 0 !== OB ? OB : null
    }
    const CO = "skyblockDungeonsView";
    class HO extends yB {
      constructor(BB, OB) {
        let GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          YB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = OB, this.locale = GB, this.requestEnter = YB, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const BB = this.pickerEntry(),
            OB = null === BB || void 0 === BB ? void 0 : BB.difficulties[this.pageIndex];
          void 0 !== OB && null !== OB.unlockedBoss && (this.close(), this.requestEnter(BB.id, OB.difficulty))
        }
      }
      setTranslator(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = OB, this.emit()
      }
      nP(BB) {
        var OB, GB;
        if (!this.Vp) return "open" === BB.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== BB.kind ? "snapshot" === BB.kind && (this.authoritative = BB.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (OB = null === (GB = this.pickerEntry()) || void 0 === GB ? void 0 : GB.difficulties.length) && void 0 !== OB ? OB : 1) - 1)), null === BB.snapshot && this.open ? this.close() : this.emit()) : this.choose(BB.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(BB) {
        var OB;
        const GB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.dungeons.find((OB => OB.id === BB));
        void 0 !== GB ? this.open && this.pickerDungeonId === BB || (this.pickerDungeonId = BB, this.pageIndex = Math.max(0, GB.difficulties.findLastIndex((BB => null !== BB.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${BB}`)
      }
      turnTo(BB) {
        var OB, GB;
        const YB = null !== (OB = null === (GB = this.pickerEntry()) || void 0 === GB ? void 0 : GB.difficulties.length) && void 0 !== OB ? OB : 0;
        BB < 0 || BB >= YB || BB === this.pageIndex || (this.pageIndex = BB, this.emit())
      }
      pickerEntry() {
        var BB, OB;
        return null !== (BB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.dungeons.find((BB => BB.id === this.pickerDungeonId))) && void 0 !== BB ? BB : null
      }
      difficulty(BB) {
        const OB = BB.completions > 0,
          GB = null === BB.bestMs ? null : mB(BB.bestMs);
        return {
          difficulty: BB.difficulty,
          label: this.translate(KB[BB.difficulty]),
          colour: uB[BB.difficulty],
          beaten: OB,
          bestTime: GB,
          completions: BB.completions,
          summary: OB ? [null === GB ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: GB
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: BB.completions.toLocaleString(this.locale)
          })].filter((BB => null !== BB)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(BB) {
        const OB = BB.difficulties.map((BB => this.difficulty(BB))),
          GB = OB.filter((BB => BB.beaten)).length;
        return {
          id: BB.id,
          name: this.translate(BB.nameKey),
          selected: BB.id === this.selected,
          beatenSummary: `${GB} / ${OB.length}`,
          difficulties: OB
        }
      }
      picker() {
        const BB = this.pickerEntry();
        if (null === BB || 0 === BB.difficulties.length) return null;
        const OB = BB.difficulties.map(((OB, GB) => {
          var YB, DB, QB, oB;
          const jB = OB.unlockedBoss,
            yB = null === jB ? this.lockedHint(BB, GB) : null;
          return {
            ...this.difficulty(OB),
            unlocked: null !== jB,
            bossName: null === jB ? null : this.translate(jB.bossNameKey),
            bossMobType: null !== (YB = null === jB || void 0 === jB ? void 0 : jB.bossMobType) && void 0 !== YB ? YB : null,
            bossMobVariation: null !== (DB = null === jB || void 0 === jB ? void 0 : jB.bossMobVariation) && void 0 !== DB ? DB : null,
            lockedHint: null !== (QB = null === yB || void 0 === yB ? void 0 : yB.text) && void 0 !== QB ? QB : null,
            lockedHintHighlight: null !== (oB = null === yB || void 0 === yB ? void 0 : yB.highlight) && void 0 !== oB ? oB : null,
            current: GB === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(BB.nameKey),
          pages: OB,
          page: OB[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < OB.length - 1
        }
      }
      lockedHint(BB, OB) {
        var GB, YB, DB;
        if (0 === OB && "number" === typeof BB.combatLevelLock) {
          const OB = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: BB.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: OB,
            colour: RO("combat"),
            icon: ZO.combat
          })
        }
        const QB = null !== (GB = null === (YB = this.authoritative) || void 0 === YB ? void 0 : YB.dungeons) && void 0 !== GB ? GB : [],
          oB = OB > 0 ? BB : null !== (DB = QB[QB.indexOf(BB) - 1]) && void 0 !== DB ? DB : null,
          jB = OB > 0 ? BB.difficulties[OB - 1] : null === oB || void 0 === oB ? void 0 : oB.difficulties[0];
        if (null === oB || void 0 === jB) return null;
        const yB = this.translate(oB.nameKey);
        if (null === jB.unlockedBoss) return oB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, jB.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: yB
        }, jB.difficulty);
        const JB = this.translate(jB.unlockedBoss.bossNameKey);
        return oB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: JB
        }, jB.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: JB,
            dungeon: yB
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(BB, OB, GB) {
        return this.hintHighlighting(BB, OB, "difficulty", {
          name: this.translate(KB[GB]),
          colour: uB[GB],
          icon: null
        })
      }
      hintHighlighting(BB, OB, GB, YB) {
        let {
          name: DB,
          colour: QB,
          icon: oB
        } = YB;
        const jB = this.translate(BB, {
          ...OB,
          [GB]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(BB, {
            ...OB,
            [GB]: DB
          }),
          highlight: 2 === jB.length ? {
            before: jB[0],
            name: DB,
            after: jB[1],
            colour: QB,
            icon: oB
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, OB, GB;
        const YB = null !== (BB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.dungeons) && void 0 !== BB ? BB : [];
        var DB, QB;
        YB.some((BB => BB.id === this.selected)) || (this.selected = null !== (DB = null === (QB = YB[0]) || void 0 === QB ? void 0 : QB.id) && void 0 !== DB ? DB : null);
        const oB = YB.map((BB => this.entry(BB)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: oB,
          detail: null !== (GB = oB.find((BB => BB.selected))) && void 0 !== GB ? GB : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const vO = ["mining", "farming", "foraging", "fishing", "combat"],
      sO = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      xO = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function tO() {
      for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
      return OB.map(((BB, OB) => ({
        amount: BB,
        coins: sO[OB],
        xp: xO[OB]
      })))
    }
    const BG = tO(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      OG = tO(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      GG = tO(50, 100, 250, 500, 1e3, 2500, 5e3),
      YG = tO(25, 50, 100, 250, 500, 1e3),
      DG = tO(10, 25, 50, 100, 250, 500, 1e3),
      QG = tO(1, 5, 10, 25, 50);

    function oG(BB, OB) {
      return {
        id: BB,
        category: "fishing",
        item: OB,
        drops: [OB],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DG
      }
    }
    const jG = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: OG
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: GG
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: GG
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: YG
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: YG
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: OG
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: BG
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: BG
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: BG
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: GG
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: OG
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: OG
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: OG
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: GG
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: GG
      }, oG("wheatfish", "Wheatfish"), oG("darter", "Darter"), oG("sunset_minnow", "Sunset Minnow"), oG("root_flounder", "Root Flounder"), oG("greenfin_loach", "Greenfin Loach"), oG("red_strongfish", "Red Strongfish"), oG("green_strongfish", "Green Strongfish"), oG("boomerang_fish", "Boomerang Fish"), oG("seahorse", "Seahorse"), oG("spined_stickleback", "Spined Stickleback"), oG("moon_strongfish", "Moon Strongfish"), oG("boulder_bass", "Boulder Bass"), oG("grass_snapper", "Grass Snapper"), oG("crystal_wheatfish", "Crystalized Wheatfish", QG), oG("moonstone_pupfish", "Moonstone Pupfish", QG), oG("reedglass_minnow", "Reedglass Minnow"), oG("mangrove_herring", "Mangrove Herring"), oG("mudline_perch", "Mudline Perch"), oG("coastal_mullet", "Coastal Mullet"), oG("reef_sardine", "Reef Sardine"), oG("root_perch", "Root Perch"), oG("driftwood_catfish", "Driftwood Catfish"), oG("aether_minnow", "Aether Minnow"), oG("needlefish", "Tri-Pointed Needlefish"), oG("threadfin_bream", "Threadfin Bream"), oG("mudbelly_tilapia", "Mudbelly Tilapia"), oG("rotslab_eel", "Rotslab Eel"), oG("polarflash_electron", "Polarflash Electron"), oG("mireback_carp", "Mireback Carp"), oG("blackwater_bream", "Blackwater Bream"), oG("stone_grouper", "Stone Grouper"), oG("shadeback_ray", "Shadeback Ray"), oG("glacial_silverfish", "Glacial Silverfish"), oG("hatchetfish", "Hatchetfish"), oG("moonlit_boomerang", "Moonlit Boomerang Fish"), oG("murkborne_ray", "Murkborne Ray"), oG("bamboo_catfish", "Bamboo Catfish"), oG("mossback_arapaima", "Mossback Arapaima"), oG("murk_stingray", "Murk Stingray"), oG("channel_sawfish", "Channel Sawfish"), oG("boned_sturgeon", "Boned Sturgeon"), oG("oarfish", "Oarfish"), oG("snakehead", "Snakehead", QG), oG("eldertide_leviathan", "Eldertide Leviathan", QG), oG("pithead", "Pithead"), oG("electric_eel", "Electric Eel"), oG("shadow_darter", "Shadow Darter"), oG("abyss_carp", "Abyss Carp"), oG("nomai_moray", "Nomai Moray"), oG("silver_dragonfish", "Silver Dragonfish"), oG("giant_moray", "Giant Moray"), oG("coelacanth", "Coelacanth", QG), oG("frost_herring", "Frost Herring"), oG("permafrost_halibut", "Permafrost Halibut"), oG("glacial_lanternfish", "Glacial Lanternfish"), oG("frozen_grenadier", "Frozen Grenadier"), oG("blackfin_icefish", "Blackfin Icefish"), oG("moonfish", "Moonfish"), oG("alpha_strongfish", "Alpha Moon Strongfish"), oG("deep_lanternfish", "Deepwater Lanternfish", QG), oG("pearlescent_moonfish", "Pearlescent Moonfish", QG), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: OG
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: YG
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: YG
      }],
      yG = (new Map(jG.map((BB => [BB.id, BB]))), new Map),
      JG = new Map;
    for (const gj of jG) {
      for (const [BB, OB] of Object.entries(null !== (MG = gj.blocks) && void 0 !== MG ? MG : {})) {
        var MG;
        yG.set(BB, {
          collection: gj,
          amount: OB
        })
      }
      for (const BB of null !== (PG = gj.drops) && void 0 !== PG ? PG : []) {
        var PG;
        JG.set(BB, gj)
      }
    }

    function zG(BB, OB) {
      let GB = 0;
      for (; GB < BB.tiers.length && OB >= BB.tiers[GB].amount;) GB++;
      return GB
    }
    const lG = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function pG(BB) {
      return lG[BB - 1]
    }
    const qG = "skyblockCollectionsView";
    class ZG extends yB {
      constructor(BB, OB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          YB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = OB, this.locale = GB, this.itemName = YB, this.counts = null, this.category = "mining", this.selected = jG[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = BB => {
          this.category = BB, this.selected = this.inCategory(BB)[0].id, this.emit()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, this.locale = OB, this.itemName = GB, this.emit()
      }
      nP(BB) {
        if (!this.Vp)
          if ("collOpen" !== BB.kind) {
            (BB.collFull || null === this.counts) && (this.counts = new Map);
            for (const [OB, GB] of BB.collCounts) this.counts.set(OB, GB);
            this.emit()
          } else this.show()
      }
      dispose() {
        this.counts = null, super.dispose()
      }
      isEnabled() {
        return null !== this.counts
      }
      buildSnapshot() {
        var BB;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const OB = this.inCategory(this.category).map((BB => this.collectionView(BB))),
          GB = jG.reduce(((BB, OB) => BB + this.tierOf(OB)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: vO.map((BB => this.categoryView(BB))),
          collections: OB,
          detail: null !== (BB = OB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(GB)
          })
        }
      }
      categoryView(BB) {
        const OB = this.inCategory(BB),
          GB = OB.reduce(((BB, OB) => BB + this.tierOf(OB)), 0),
          YB = OB.reduce(((BB, OB) => BB + OB.tiers.length), 0);
        return {
          id: BB,
          label: this.translate(`skyblockGame:${BB}`),
          icon: ZO[BB],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(GB),
            target: this.number(YB)
          }),
          selected: BB === this.category
        }
      }
      collectionView(BB) {
        var OB, GB;
        const YB = null !== (OB = this.counts.get(BB.id)) && void 0 !== OB ? OB : 0,
          DB = zG(BB, YB),
          QB = null !== (GB = BB.tiers[DB]) && void 0 !== GB ? GB : null,
          oB = 0 === DB ? 0 : BB.tiers[DB - 1].amount;
        return {
          id: BB.id,
          name: this.itemName(BB.item),
          icon: BB.item,
          selected: BB.id === this.selected,
          locked: 0 === YB,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(YB)
          }),
          tier: 0 === DB ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(DB),
          percent: null === QB ? 100 : Math.min(100, (YB - oB) / (QB.amount - oB) * 100),
          progress: null === QB ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(YB),
            target: this.number(QB.amount)
          }),
          nextReward: null === QB ? null : this.reward(BB, QB.coins, QB.xp)
        }
      }
      reward(BB, OB, GB) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(OB),
          xp: this.number(GB),
          skill: this.translate(`skyblockGame:${BB.category}`)
        })
      }
      tierLabel(BB) {
        return this.translate("skyblockGame:collectionTier", {
          tier: pG(BB)
        })
      }
      tierOf(BB) {
        var OB;
        return zG(BB, null !== (OB = this.counts.get(BB.id)) && void 0 !== OB ? OB : 0)
      }
      inCategory(BB) {
        return jG.filter((OB => OB.category === BB))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
    }
    const NG = "skyblockPortalTransitView",
      RG = "skyblockPortalArrival";
    class WG {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.tM = BB, this.storage = OB, this.now = GB, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      nP(BB) {
        const OB = {
          zoneNameKey: BB.transitZoneNameKey,
          variation: BB.transitZoneVariation,
          colour: BB.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(RG, OB), this.show("departure", OB.zoneNameKey, OB.colour, BB.transitDurationMs, BB.transitDurationMs + 1500, (() => {
          this.storage.removeItem(RG)
        }))
      }
      resumeArrival(BB) {
        const OB = this.storage.getItem(RG);
        this.storage.removeItem(RG), null === OB || OB.variation !== BB || this.now() - OB.departedAt > 3e4 || this.show("arrival", OB.zoneNameKey, OB.colour, 3200, 2e4)
      }
      finishArrival(BB) {
        var OB;
        "arrival" === (null === (OB = this.view) || void 0 === OB ? void 0 : OB.phase) && this.view.token === BB && (this.clearTimer(), this.view = null, this.tM(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(BB, OB, GB, YB, DB, QB) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: BB,
          zoneNameKey: OB,
          colour: GB,
          durationMs: YB
        }, this.tM(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.tM(null), null === QB || void 0 === QB || QB()
        }), DB)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const AG = "skyblockDailyRewardView",
      VG = "skyblockDailyRewardCoin";
    class SG {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.tM = BB, this.isBusy = OB, this.holdQuestPopups = GB, this.onHeldCoinsChanged = YB, this.onCoinLanded = DB, this.onStarted = QB, this.onFinished = oB, this.onItemLanded = jB, this.now = yB, this.sJ = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var BB, OB;
        return null !== (BB = null === (OB = this.playing) || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null
      }
      getHeldCoins() {
        var BB, OB;
        let GB = 0;
        for (const YB of this.sJ) GB += YB.coins;
        return GB - (null !== (BB = null === (OB = this.playing) || void 0 === OB ? void 0 : OB.released) && void 0 !== BB ? BB : 0)
      }
      nP(BB) {
        "dailyRewardClaimed" !== BB.kind ? (this.queue.push(BB), this.kP()) : this.sJ.push({
          coins: BB.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      kP() {
        const BB = this.now();
        if (null === this.playing) return this.releaseUnshown(BB), void this.startNext(BB);
        const OB = this.playing,
          GB = BB - OB.startedAt,
          YB = OB.view.flyingCoins,
          DB = function(BB, OB) {
            let GB = 0;
            for (; GB < OB && UG(GB, OB) <= BB;) GB++;
            return GB
          }(GB, YB);
        if (DB !== OB.landed) {
          for (let BB = DB - OB.landed > 2 ? DB - 1 : OB.landed; BB < DB; BB++) this.onCoinLanded(BB, YB);
          OB.landed = DB, OB.released = Math.round(OB.view.coins * DB / YB), this.onHeldCoinsChanged()
        }
        for (; OB.itemsLanded < OB.view.items.length && 2e3 + 160 * OB.itemsLanded + 630 <= GB;) this.onItemLanded(OB.itemsLanded), OB.itemsLanded++;
        GB >= OB.view.durationMs && (this.finish(), this.startNext(BB))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.sJ = [], this.tM(null)
      }
      startNext(BB) {
        if (0 === this.queue.length || this.isBusy()) return;
        const OB = this.queue.shift();
        this.token++;
        const GB = {
          token: this.token,
          day: OB.dailyRewardDay,
          coins: OB.dailyRewardCoins,
          items: OB.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: OB.dailyRewardDay === fB ? 24 : 14
        };
        this.playing = {
          view: GB,
          startedAt: BB,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.tM(GB), this.onStarted(GB)
      }
      finish() {
        this.sJ.shift(), this.playing = null, this.holdQuestPopups(!1), this.tM(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(BB) {
        if (this.queue.length > 0 || 0 === this.sJ.length) return;
        const OB = this.sJ.length;
        this.sJ = this.sJ.filter((OB => BB - OB.receivedAt < 6e4)), this.sJ.length !== OB && this.onHeldCoinsChanged()
      }
    }

    function nG(BB, OB) {
      return 450 + 715 * BB / (OB - 1)
    }

    function UG(BB, OB) {
      return nG(BB, OB) + 650
    }
    const fG = "skyblockMailboxView";
    class kG {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.tM = BB, this.isBusy = OB, this.onStarted = GB, this.now = YB, this.waiting = [], this.playing = null, this.token = 0, this.itemName = BB => BB
      }
      getSnapshot() {
        var BB, OB;
        return null !== (BB = null === (OB = this.playing) || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null
      }
      setItemName(BB) {
        this.itemName = BB
      }
      nP(BB) {
        this.waiting.push(...BB.mailLetters), this.kP()
      }
      kP() {
        const BB = this.now();
        null !== this.playing && BB - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.tM(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(BB)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.tM(null)
      }
      start(BB) {
        const OB = this.waiting.slice(0, 3);
        this.token++;
        const GB = {
          token: this.token,
          letters: OB.map((BB => this.toView(BB))),
          more: this.waiting.length - OB.length,
          durationMs: 4500 + 700 * OB.length
        };
        this.waiting = [], this.playing = {
          view: GB,
          startedAt: BB
        }, this.tM(GB), this.onStarted(GB)
      }
      toView(BB) {
        return {
          coins: BB.mailCoins,
          items: BB.mailItems.map((BB => {
            var OB;
            return {
              itemName: BB.mailItemName,
              amount: BB.mailItemAmount,
              label: null !== (OB = BB.mailItemLabel) && void 0 !== OB ? OB : this.itemName(BB.mailItemName)
            }
          })),
          reasonKey: BB.mailReasonKey,
          reasonParams: BB.mailReasonParams
        }
      }
    }
    const dG = "skyblockQuestGraphView",
      KG = "skyblockDevQuestJump";

    function uG(BB) {
      if (0 === BB.length) return "";
      const OB = [`M ${BB[0].x} ${BB[0].y}`];
      for (let YB = 1; YB < BB.length - 1; YB++) {
        const GB = BB[YB + 1];
        OB.push(`Q ${BB[YB].x} ${BB[YB].y} ${(BB[YB].x+GB.x)/2} ${(BB[YB].y+GB.y)/2}`)
      }
      const GB = BB[BB.length - 1];
      return OB.push(`L ${GB.x} ${GB.y}`), OB.join(" ")
    }

    function mG(BB, OB) {
      return BB < OB ? `${BB}|${OB}` : `${OB}|${BB}`
    }
    class IG extends yB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(BB, GB, YB), this.translate = OB, this.requestJump = DB, this.requestArrive = QB, this.storage = oB, this.now = jB, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = BB => {
          BB !== this.hoveredId && (this.hoveredId = BB, this.emit())
        }, this.jump = BB => {
          this.close(), this.requestJump(BB)
        }
      }
      nP(BB) {
        if (!this.Vp)
          if ("graph" !== BB.kind) {
            if ("jumping" === BB.kind) {
              const OB = {
                questId: BB.graphQuestId,
                variation: BB.graphVariation,
                completes: BB.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(KG, OB)
            }
          } else {
            const OB = ++this.graphCount;
            GB.e(133).then((() => GB(6950))).then((GB => {
              let {
                default: YB
              } = GB;
              this.Vp || OB !== this.graphCount || (this.layout = function(BB, OB, GB) {
                var YB, DB;
                const QB = new BB.graphlib.Graph;
                QB.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), QB.setDefaultEdgeLabel((() => ({})));
                const oB = new Set;
                for (const MB of OB) oB.add(MB.graphQuestId), QB.setNode(MB.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const jB = GB.filter((BB => oB.has(BB.graphFromId) && oB.has(BB.graphToId) && BB.graphFromId !== BB.graphToId)),
                  yB = new Map;
                for (const MB of [...jB].sort(((BB, OB) => Number("awaits" === BB.graphEdgeKind) - Number("awaits" === OB.graphEdgeKind)))) {
                  const BB = mG(MB.graphFromId, MB.graphToId);
                  yB.has(BB) || (yB.set(BB, MB), QB.setEdge(MB.graphFromId, MB.graphToId))
                }
                BB.layout(QB);
                const JB = QB.graph();
                return {
                  width: Math.ceil(null !== (YB = JB.width) && void 0 !== YB ? YB : 0),
                  height: Math.ceil(null !== (DB = JB.height) && void 0 !== DB ? DB : 0),
                  nodes: OB.map((BB => {
                    var OB, GB;
                    const YB = QB.node(BB.graphQuestId);
                    return {
                      node: BB,
                      left: (null !== (OB = YB.x) && void 0 !== OB ? OB : 0) - 95,
                      top: (null !== (GB = YB.y) && void 0 !== GB ? GB : 0) - 26
                    }
                  })),
                  edges: jB.map((BB => {
                    var OB;
                    const GB = yB.get(mG(BB.graphFromId, BB.graphToId)),
                      YB = null !== (OB = QB.edge(GB.graphFromId, GB.graphToId).points) && void 0 !== OB ? OB : [];
                    return {
                      edge: BB,
                      key: `${BB.graphFromId}|${BB.graphToId}|${BB.graphEdgeKind}`,
                      path: uG(GB.graphFromId === BB.graphFromId ? YB : [...YB].reverse())
                    }
                  })),
                  plans: new Map(OB.map((BB => [BB.graphQuestId, new Set([BB.graphQuestId, ...BB.graphPlanIds])])))
                }
              }(YB, BB.graphNodes, BB.graphEdges), this.show())
            })).catch((BB => {
              console.error("The quest graph could not be laid out", BB)
            }))
          }
      }
      resumeJump(BB) {
        const OB = this.storage.getItem(KG);
        this.storage.removeItem(KG), null === OB || OB.variation !== BB || this.now() - OB.departedAt > 6e4 || this.requestArrive(OB.questId, OB.completes)
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      dispose() {
        this.layout = null, this.hoveredId = null, super.dispose()
      }
      onClosed() {
        this.hoveredId = null
      }
      isEnabled() {
        return null !== this.layout
      }
      getPlan() {
        var BB, OB;
        return null !== (BB = null === this.hoveredId || null === (OB = this.layout) || void 0 === OB ? void 0 : OB.plans.get(this.hoveredId)) && void 0 !== BB ? BB : new Set
      }
      buildSnapshot() {
        const BB = this.layout;
        if (null === BB) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const OB = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: BB.width,
          height: BB.height,
          nodes: BB.nodes.map((BB => {
            let {
              node: GB,
              left: YB,
              top: DB
            } = BB;
            return {
              id: GB.graphQuestId,
              name: this.translate(GB.graphNameKey),
              detail: null === GB.graphGiverName ? GB.graphZoneId : `${GB.graphGiverName} \xb7 ${GB.graphZoneId}`,
              state: GB.graphState,
              left: YB,
              top: DB,
              inPlan: OB.has(GB.graphQuestId),
              hovered: GB.graphQuestId === this.hoveredId
            }
          })),
          edges: BB.edges.map((BB => {
            let {
              edge: GB,
              key: YB,
              path: DB
            } = BB;
            return {
              key: YB,
              kind: GB.graphEdgeKind,
              path: DB,
              inPlan: OB.has(GB.graphFromId) && OB.has(GB.graphToId)
            }
          })),
          planning: OB.size > 0
        }
      }
    }
    var FG = GB(37747);
    const iG = 250,
      LG = 2150,
      gG = -2.8,
      rG = 2.2,
      XG = -27,
      wG = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      EG = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      cG = Math.round(50 + 1e3 * (EG.delay + EG.period / 2)),
      hG = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      aG = Array.from({
        length: 26
      }, ((BB, OB) => {
        const GB = 2.39996 * OB,
          YB = .5 + .618034 * OB % 1 * .23,
          DB = OB % 3 !== 2;
        return {
          rune: DB ? hG[7 * OB % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(GB)*YB).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(GB)*YB).toFixed(3)})`,
            "--spin": 40 * (OB % 5 - 2) + "deg",
            "--size": (DB ? 1 + OB % 4 * .2 : .3 + OB % 2 * .15) + "rem",
            "--duration": `${(1.8+7*OB%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*OB%3).toFixed(2)}s`
          }
        }
      }));

    function eG(BB, OB) {
      return Array.from({
        length: 30 + 3 * BB + (OB ? 10 : 0)
      }, ((BB, OB) => {
        const GB = OB < 4,
          YB = GB ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          DB = GB ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          QB = GB ? 2.2 : .6 + Math.random(),
          oB = GB ? .3 : Math.random() < .5 ? .16 : .24,
          jB = GB ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": YB,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${DB.toFixed(2)}rem`,
          "--length": `${QB.toFixed(2)}rem`,
          "--width": `${oB}rem`,
          "--duration": `${Math.round(jB)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function TG(BB) {
      let {
        zeta: OB,
        period: GB
      } = BB;
      const YB = 2 * Math.PI / GB;
      return {
        w: YB,
        decay: OB * YB / Math.sqrt(1 - OB * OB)
      }
    }
    let bG = !1;

    function CG() {
      if (bG) return;
      bG = !0;
      const BB = document.createElement("style");
      BB.textContent = function() {
        const BB = TG(wG),
          OB = TG(EG),
          GB = OB => Math.exp(-BB.decay * OB) * Math.sin(BB.w * OB),
          YB = GB(Math.atan(BB.w / BB.decay) / BB.w),
          DB = .25,
          QB = 2.15,
          oB = Math.round(215),
          jB = [];
        for (let yB = 0; yB <= oB; yB++) {
          const BB = yB / oB * QB;
          let JB = Math.sin(Math.min(BB, DB) / DB * Math.PI / 2) ** 2,
            MB = 0,
            PB = 1,
            zB = 1 - .2 * JB,
            lB = 1;
          if (BB >= DB) {
            const oB = BB - DB,
              jB = Math.max(0, oB - .05);
            JB = Math.exp(-jB / .05), MB = GB(jB + wG.lead * (1 - Math.exp(-jB / wG.rush))) / YB;
            const yB = jB - EG.delay,
              pB = yB <= 0 ? 0 : 1 - Math.exp(-OB.decay * yB) * (Math.cos(OB.w * yB) + OB.decay / OB.w * Math.sin(OB.w * yB)),
              qB = Math.max(0, (BB - 1.77) / (QB - 1.77));
            PB = (1 + (EG.to - 1) * pB) * (1 + .08 * qB), zB = 1.1 + 1.5 * Math.exp(-oB / .07) + .3 * Math.exp(-(((1e3 * oB - cG) / 100) ** 2)) + .8 * qB, lB = 1 - qB ** 1.5
          }
          const pB = .15 * JB + gG * MB,
            qB = -.1 * JB + rG * MB,
            ZB = 3 * JB + XG * MB;
          jB.push(`${(yB/oB*100).toFixed(3)}% { opacity: ${lB.toFixed(3)}; transform: translate(${pB.toFixed(3)}rem, ${qB.toFixed(3)}rem) rotate(${ZB.toFixed(2)}deg) scale(${PB.toFixed(3)}); filter: brightness(${zB.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${jB.join(" ")} }`
      }(), document.head.append(BB)
    }
    const HG = "skyblockForgeView",
      vG = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class sG extends yB {
      constructor(BB, OB, GB, YB, DB) {
        super(BB, GB, YB), this.translate = OB, this.requestForge = DB, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (BB, OB) => {
          var GB, YB;
          null !== this.forging || (null !== (GB = this.owned[(0, FG.q)(OB, BB)]) && void 0 !== GB ? GB : 0) <= 0 || (this.selected[BB] = this.selected[BB] === OB ? null : OB, this.status = null, null === (YB = this.onPartSelected) || void 0 === YB || YB.call(this), this.emit())
        }, this.forge = BB => {
          var OB, GB;
          const YB = this.selectedParts();
          if (null === YB || this.isPending() || !this.open) return;
          const DB = (0, FG.n)(YB);
          if (null === DB || DB.coalCost > this.coal) return;
          const QB = this.preview(DB),
            oB = null !== (OB = null === (GB = this.onForgeStarted) || void 0 === GB ? void 0 : GB.call(this, QB.tier, QB.named, BB)) && void 0 !== OB ? OB : () => {};
          if (this.dropArrival(), BB) {
            const BB = {
              id: ++this.forgeId,
              preview: QB,
              timers: [],
              stopSounds: oB,
              landed: !1,
              reply: null
            };
            BB.timers.push(setTimeout((() => {
              BB.landed = !0, null !== BB.reply && (this.apply(BB.reply), BB.reply = null, this.emit())
            }), iG), setTimeout((() => {
              this.finishForge(BB)
            }), LG)), this.forging = BB
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(YB)
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        var OB;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.forgeMessageKind) return this.dropForge(), this.apply(BB), this.status = null, this.show(), void(null === (OB = this.onOpened) || void 0 === OB || OB.call(this));
        const GB = this.forging;
        if (null !== GB && null !== BB.forgeRefusalKey) this.dropForge();
        else if (null !== GB && !GB.landed) return void(GB.reply = BB);
        this.apply(BB), this.emit()
      }
      apply(BB) {
        if (this.owned = BB.forgeOwnedParts, this.coal = BB.forgeCoalOwned, this.keepSelectionOwned("open" === BB.forgeMessageKind), null !== BB.forgeForgedSwordId) {
          var OB;
          const GB = (0, FG.n)(BB.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (OB = null === GB || void 0 === GB ? void 0 : GB.displayName) && void 0 !== OB ? OB : ""
            }
          }
        } else null !== BB.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: BB.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(BB) {
        var OB;
        this.forging = null;
        const GB = this.selectedParts(),
          YB = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: BB.id,
          sameSword: null !== GB && (null === (OB = (0, FG.n)(GB)) || void 0 === OB ? void 0 : OB.displayName) === BB.preview.name,
          timer: YB
        }, this.emit()
      }
      dropForge() {
        const BB = this.forging;
        if (null !== BB) {
          this.forging = null;
          for (const OB of BB.timers) clearTimeout(OB);
          BB.stopSounds(), null !== BB.reply && this.apply(BB.reply)
        }
      }
      dropArrival() {
        null !== this.arriving && (clearTimeout(this.arriving.timer), this.arriving = null)
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        var BB, OB, GB;
        const YB = this.selectedParts(),
          DB = null === YB ? null : (0, FG.n)(YB),
          QB = null !== (BB = null === (OB = this.forging) || void 0 === OB ? void 0 : OB.preview) && void 0 !== BB ? BB : null === DB ? null : this.preview(DB);
        return {
          enabled: this.received,
          open: this.open,
          slots: FG.l.map((BB => ({
            kind: BB,
            label: this.translate(vG[BB]),
            parts: this.partsFor(BB)
          }))),
          coalOwned: this.coal,
          preview: QB,
          unformedSword: FG.i[null !== (GB = this.selected.Blade) && void 0 !== GB ? GB : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((BB => BB > 0)),
          canForge: null !== QB && !QB.coalShort && !this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          forging: null === this.forging ? null : {
            id: this.forging.id,
            preview: this.forging.preview
          },
          arriving: null === this.arriving ? null : {
            id: this.arriving.id,
            sameSword: this.arriving.sameSword
          }
        }
      }
      preview(BB) {
        return {
          name: BB.displayName,
          lore: BB.lore,
          baseSword: BB.baseSword,
          enchantmentTier: BB.enchantmentTier,
          tier: Number(BB.enchantmentTier.slice(-1)),
          named: BB.named,
          stats: this.stats(BB),
          effects: BB.effects,
          coalCost: BB.coalCost,
          coalShort: null === this.forging && BB.coalCost > this.coal
        }
      }
      partsFor(BB) {
        const OB = [];
        for (const YB of FG.g) {
          var GB;
          const DB = (0, FG.q)(YB, BB),
            QB = null !== (GB = this.owned[DB]) && void 0 !== GB ? GB : 0;
          QB > 0 && OB.push({
            material: YB,
            itemName: DB,
            owned: QB,
            selected: this.selected[BB] === YB,
            placeholder: !1
          })
        }
        if (0 === OB.length) {
          const GB = FG.g[0];
          OB.push({
            material: GB,
            itemName: (0, FG.q)(GB, BB),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return OB
      }
      stats(BB) {
        const OB = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${BB.powerMultiplier.toFixed(2)}`,
          better: BB.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${BB.damageMultiplier.toFixed(2)}`,
          better: BB.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/BB.cooldownMultiplier).toFixed(2)}`,
          better: BB.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${BB.knockbackMultiplier.toFixed(2)}`,
          better: BB.knockbackMultiplier > 1
        }];
        return BB.reachBonus > 0 && OB.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${BB.reachBonus.toFixed(1)}`,
          better: !0
        }), BB.damageReduction > 0 && OB.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*BB.damageReduction)}%`,
          better: !0
        }), OB
      }
      selectedParts() {
        const {
          Blade: BB,
          Guard: OB,
          Handle: GB
        } = this.selected;
        return null === BB || null === OB || null === GB ? null : {
          blade: BB,
          guard: OB,
          handle: GB
        }
      }
      keepSelectionOwned(BB) {
        for (const GB of FG.l) {
          var OB;
          const YB = this.selected[GB];
          if (null !== YB && (null !== (OB = this.owned[(0, FG.q)(YB, GB)]) && void 0 !== OB ? OB : 0) > 0) continue;
          if (!BB) {
            this.selected[GB] = null;
            continue
          }
          const DB = [...FG.g].reverse().find((BB => {
            var OB;
            return (null !== (OB = this.owned[(0, FG.q)(BB, GB)]) && void 0 !== OB ? OB : 0) > 0
          }));
          this.selected[GB] = null !== DB && void 0 !== DB ? DB : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const xG = "skyblockSmugglerView",
      tG = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class BY extends yB {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, GB, YB), this.translate = OB, this.requestBuy = DB, this.now = QB, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = BB => BB, this.onBought = null, this.buy = BB => {
          const OB = this.deals[BB];
          void 0 !== OB && !this.isPending() && this.open && !this.soldOut.has(BB) && this.canAfford(OB) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, BB))
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        if (this.received = !0, this.day = BB.smugglerDay, this.deals = BB.smugglerDeals, this.rivets = BB.smugglerRivetsOwned, this.crests = BB.smugglerCrestsOwned, this.soldOut = new Set(BB.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + BB.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = BB.smugglerBoughtSlot, null !== BB.smugglerBoughtSlot) {
          var OB, GB;
          const YB = this.deals[BB.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === YB ? "" : this.dealName(YB),
              amount: String(null !== (OB = null === YB || void 0 === YB ? void 0 : YB.smugglerDealAmount) && void 0 !== OB ? OB : 0)
            }
          }, this.boughtCount++, null === (GB = this.onBought) || void 0 === GB || GB.call(this)
        } else null !== BB.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: BB.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, void 0 !== GB && (this.itemName = GB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(BB) {
        if (null !== BB.smugglerDealUniqueName) return BB.smugglerDealUniqueName;
        const OB = tG[BB.smugglerDealItem];
        return void 0 === OB ? this.itemName(BB.smugglerDealItem) : this.translate(OB)
      }
      canAfford(BB) {
        return BB.smugglerDealRivets <= this.rivets && BB.smugglerDealCrests <= this.crests
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      startCountdown() {
        this.stopCountdown(), this.countdown = setInterval((() => {
          this.emit()
        }), 15e3)
      }
      stopCountdown() {
        null !== this.countdown && (clearInterval(this.countdown), this.countdown = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      rotatesText() {
        const BB = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return BB <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : BB < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(BB)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(BB / 60)),
          minutes: String(BB % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((BB, OB) => ({
            slot: OB,
            itemName: BB.smugglerDealItem,
            displayName: this.dealName(BB),
            enchantmentTier: BB.smugglerDealEnchantmentTier,
            amount: BB.smugglerDealAmount,
            rivets: BB.smugglerDealRivets,
            crests: BB.smugglerDealCrests,
            affordable: this.canAfford(BB),
            soldOut: this.soldOut.has(OB),
            justBought: this.boughtSlot === OB
          }))),
          rivetsOwned: this.rivets,
          crestsOwned: this.crests,
          rotatesText: this.received ? this.rotatesText() : "",
          pending: this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          boughtCount: this.boughtCount
        }
      }
      dispose() {
        this.received = !1, this.clearReplyTimeout(), this.stopCountdown(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const OY = "skyblockPassageView",
      GY = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function YY(BB, OB) {
      return BB(GY[OB])
    }

    function DY(BB, OB, GB, YB) {
      const DB = Math.ceil((GB - YB) / 864e5),
        QB = YY(BB, OB);
      return DB > 1 ? BB("skyblockGame:passageNextDays", {
        phase: QB,
        days: String(DB)
      }) : BB("skyblockGame:passageNextSoon", {
        phase: QB
      })
    }
    class QY extends yB {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, GB, YB), this.translate = OB, this.now = DB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = BB => BB, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        this.message = BB, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, void 0 !== GB && (this.itemName = GB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(BB) {
        return {
          itemName: BB.passageFish,
          displayName: this.itemName(BB.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(BB.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const BB = this.message;
        return null === BB ? {
          enabled: !1,
          open: !1,
          phase: "new",
          phaseName: "",
          visitors: [],
          resting: null,
          nextPhase: "waxing",
          next: ""
        } : {
          enabled: !0,
          open: this.open,
          phase: BB.passagePhase,
          phaseName: YY(this.translate, BB.passagePhase),
          visitors: BB.passageVisitors.map((BB => this.describe(BB))),
          resting: this.describe(BB.passageResting),
          nextPhase: BB.passageNextPhase,
          next: DY(this.translate, BB.passageNextPhase, BB.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var oY = GB(39226);
    const jY = "skyblockKeepersChairView";
    class yY extends yB {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new oY.d;
        super(BB, GB, YB), this.translate = OB, this.requestAim = DB, this.now = QB, this.pacer = oB, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = BB => BB, this.aim = BB => {
          !this.awaitingReply && this.open && this.atChair && BB !== this.favoured && (null === BB || this.islands.some((OB => OB.keepersChairIslandId === BB && OB.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== BB && void 0 !== BB ? BB : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = oB.subscribe((() => {
          this.emit()
        }))
      }
      nP(BB) {
        var OB, GB;
        this.received = !0;
        const YB = this.favoured,
          DB = this.atChair;
        var QB;
        return this.islands = BB.keepersChairIslands, this.favoured = BB.keepersChairFavoured, this.passage = null !== (OB = BB.keepersChairPassage) && void 0 !== OB ? OB : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (GB = BB.keepersChairAtChair) || void 0 === GB || GB, "place" === BB.keepersChairMessageKind ? (!DB && this.atChair && "refused" === (null === (QB = this.status) || void 0 === QB ? void 0 : QB.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== BB.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: BB.keepersChairRefusalKey,
          island: null
        } : this.favoured !== YB && (this.status = null === this.favoured ? {
          tone: "aimed",
          key: "skyblockGame:keepersChairRestedStatus",
          island: null
        } : {
          tone: "aimed",
          key: "skyblockGame:keepersChairAimedStatus",
          island: this.favoured
        }, this.aimedCount++), this.emit()) : this.emit()))
      }
      isAtChair() {
        return this.atChair
      }
      receivePassage(BB) {
        this.received && (this.passage = BB, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, void 0 !== GB && (this.itemName = GB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.aimedCount = 0
      }
      isPending() {
        return this.awaitingReply || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      islandName(BB) {
        const OB = this.islands.find((OB => OB.keepersChairIslandId === BB));
        return void 0 === OB ? BB : this.translate(OB.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const BB = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          OB = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((BB => {
            const OB = BB.keepersChairFeaturedFish;
            return {
              id: BB.keepersChairIslandId,
              name: this.translate(BB.keepersChairIslandNameKey),
              relit: BB.keepersChairIslandRelit,
              featuredFish: null === OB ? null : {
                itemName: OB,
                displayName: this.itemName(OB)
              },
              favoured: BB.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === BB ? null : {
            tone: BB.tone,
            text: this.translate(BB.key, null === BB.island ? void 0 : {
              island: this.islandName(BB.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === OB ? null : {
            phase: OB.keepersChairPassagePhase,
            phaseName: YY(this.translate, OB.keepersChairPassagePhase),
            nextPhase: OB.keepersChairPassageNextPhase,
            next: DY(this.translate, OB.keepersChairPassageNextPhase, OB.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const JY = "skyblockReachLogView",
      MY = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      PY = "Caught Fish",
      zY = [1, 2, 4];

    function lY(BB, OB) {
      return BB.map((BB => ({
        ...BB,
        reachLogPageFish: BB.reachLogPageFish.map((BB => ({
          ...BB,
          reachLogFishFresh: OB(BB)
        })))
      })))
    }
    class pY extends yB {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new oY.d;
        super(BB, GB, YB), this.translate = OB, this.requestOpen = DB, this.pacer = QB, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = BB => BB, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = BB => {
          this.pages.some((OB => OB.reachLogIslandId === BB)) && (this.selected = BB, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = QB.subscribe((() => {
          this.emit()
        }))
      }
      nP(BB) {
        if (this.received = !0, "status" === BB.reachLogMessageKind) return !0 === BB.reachLogNews && this.markNews(), this.serverFresh = BB.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const OB = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== BB.reachLogMessageKind)
          if (this.pageViews = null, this.pages = lY(BB.reachLogPages, (BB => BB.reachLogFishFresh || this.heldFresh.has(BB.reachLogFishItem))), this.letGoShown = BB.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, OB) this.showPages();
          else {
            for (const BB of this.pages)
              for (const OB of BB.reachLogPageFish) OB.reachLogFishFresh && this.heldFresh.add(OB.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, this.pageViews = null, void 0 !== GB && (this.itemName = GB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = lY(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var BB, OB, GB, YB;
        const DB = this.pages.find((BB => BB.reachLogPageFish.some((BB => BB.reachLogFishFresh))));
        if (void 0 !== DB) return DB.reachLogIslandId;
        if (null !== this.selected && this.pages.some((BB => BB.reachLogIslandId === this.selected))) return this.selected;
        return null !== (BB = null !== (OB = null === (GB = this.pages.filter((BB => BB.reachLogIslandAwake)).at(-1)) || void 0 === GB ? void 0 : GB.reachLogIslandId) && void 0 !== OB ? OB : null === (YB = this.pages[0]) || void 0 === YB ? void 0 : YB.reachLogIslandId) && void 0 !== BB ? BB : null
      }
      markNews() {
        this.newsToken++, this.news = !0, this.clearNewsTimeout(), this.newsTimeout = setTimeout((() => {
          this.newsTimeout = null, this.news = !1, this.emit()
        }), 1200)
      }
      clearNewsTimeout() {
        null !== this.newsTimeout && (clearTimeout(this.newsTimeout), this.newsTimeout = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          pending: this.awaitingReply || this.pacer.isPacing(),
          freshCount: this.serverFresh + this.heldFresh.size,
          news: this.news,
          newsToken: this.newsToken,
          selected: this.selected,
          letGoShown: this.letGoShown,
          pages: this.pageViews ??= this.buildPages()
        }
      }
      buildPages() {
        return this.pages.map((BB => {
          var OB;
          return {
            id: BB.reachLogIslandId,
            name: this.translate(BB.reachLogIslandNameKey),
            awake: BB.reachLogIslandAwake,
            gold: BB.reachLogPageGold,
            caught: BB.reachLogPageFish.filter((BB => BB.reachLogFishCaught && !BB.reachLogFishVisitor)).length,
            total: BB.reachLogPageFish.filter((BB => !BB.reachLogFishVisitor)).length,
            fish: BB.reachLogPageFish.map((BB => {
              const OB = BB.reachLogFishBestKg;
              return {
                itemName: BB.reachLogFishItem,
                name: BB.reachLogFishCaught ? this.itemName(BB.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: BB.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / BB.reachLogFishChance))
                }),
                best: BB.reachLogFishCaught ? null === OB ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: OB.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: BB.reachLogFishMarks,
                ribbons: zY.map((OB => 0 !== (BB.reachLogFishRibbons & OB))),
                glimmer: 0 !== (8 & BB.reachLogFishRibbons),
                halo: 0 !== (32 & BB.reachLogFishRibbons),
                fresh: BB.reachLogFishFresh,
                visitor: BB.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (OB = BB.reachLogPageReturner) && void 0 !== OB ? OB : null)
          }
        }))
      }
      buildReturner(BB) {
        return null === BB ? null : {
          itemName: BB.reachLogReturnerFishItem,
          line: this.translate(BB.reachLogReturnerLineKey, {
            name: this.translate(BB.reachLogReturnerNameKey),
            trinket: this.translate(BB.reachLogReturnerTrinketKey)
          }),
          back: BB.reachLogReturnerBack
        }
      }
      receivePassagePhase(BB) {
        null !== this.passagePhase && this.passagePhase !== BB && (this.pagesCurrent = !1), this.passagePhase = BB
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const qY = "skyblockLampLightView";
    class ZY {
      constructor(BB, OB, GB, YB) {
        this.tM = BB, this.translate = OB, this.requestCommand = GB, this.pacer = YB, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Vp = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = BB => {
          BB ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = BB => {
          this.send(`buy ${BB}`)
        }, this.socket = BB => {
          this.send(`socket ${null!==BB&&void 0!==BB?BB:FB}`)
        }, this.wearTint = BB => {
          this.send(`tint ${null!==BB&&void 0!==BB?BB:FB}`)
        }, this.setSituation = BB => {
          this.situation = BB, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = YB.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = YB.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      nP(BB) {
        if (this.message = BB, null !== BB.lampLightShop && (this.shop = BB.lampLightShop), "open" === BB.lampLightKind && (this.refusalKey = null), "reply" === BB.lampLightKind) {
          var OB;
          const DB = null !== (OB = BB.lampLightReplyTag) && void 0 !== OB ? OB : null,
            QB = null !== DB && DB === this.offTag;
          var GB, YB;
          if (QB ? this.settleOff() : null !== DB && DB !== this.awaitingTag || this.settleReply(), this.refusalKey = BB.lampLightRefusalKey, null !== BB.lampLightBought && !QB) this.sparkle = {
            id: BB.lampLightBought,
            count: (null !== (GB = null === (YB = this.sparkle) || void 0 === YB ? void 0 : YB.count) && void 0 !== GB ? GB : 0) + 1
          }
        }
        BB.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === BB.lampLightKind && (this.lastGained = BB.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(BB) {
        BB !== this.atChair && (this.atChair = BB, BB && (this.refusalKey = null), this.emit())
      }
      setTranslator(BB, OB) {
        this.translate = BB, this.locale = null !== OB && void 0 !== OB ? OB : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Vp = !0
      }
      send(BB) {
        var OB;
        if (null !== this.awaitingTag || "ready" !== (null === (OB = this.message) || void 0 === OB ? void 0 : OB.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const GB = this.nextTag();
        this.awaitingTag = GB, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${BB} ${GB}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const BB = this.nextTag();
        this.offTag = BB, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${BB}`)
      }
      nextTag() {
        return this.lastTag = this.lastTag % 999999 + 1, this.lastTag
      }
      settleOff() {
        this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, null !== this.offTimeout && (clearTimeout(this.offTimeout), this.offTimeout = null)
      }
      settleReply() {
        this.awaitingTag = null, this.clearReplyTimeout()
      }
      isPending() {
        return null !== this.awaitingTag || this.offQueued || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      emit() {
        this.Vp || (this.snapshot = this.buildSnapshot(), this.tM(this.snapshot))
      }
      formatLight(BB) {
        return Math.floor(BB).toLocaleString(this.locale)
      }
      formatPercent(BB) {
        const OB = 100 * BB;
        return OB >= 10 ? Math.round(OB).toLocaleString(this.locale) : OB.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(BB, OB) {
        if ("bite" === BB) return this.translate("skyblockGame:lampLightBite", {
          seconds: (OB.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === BB) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(OB.lampLightRareChance)
        });
        if ("notice" === BB) return null === OB.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(OB.lampLightNoticeChance)
        });
        const GB = "meter" === BB ? OB.lampLightMeterCatches : OB.lampLightBloomCatches;
        return null === GB ? null : this.translate("meter" === BB ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(GB))
        })
      }
      oddsLines(BB, OB) {
        const GB = (BB, OB) => {
            var GB;
            return null !== (GB = {
              bite: OB.lampLightBiteMs,
              rare: OB.lampLightRareChance,
              meter: OB.lampLightMeterCatches,
              bloom: OB.lampLightBloomCatches,
              notice: OB.lampLightNoticeChance
            } [BB]) && void 0 !== GB ? GB : 0
          },
          YB = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          DB = [];
        for (const QB of ["bite", "rare", "meter", "bloom", "notice"]) {
          const oB = this.formatOdds(QB, BB),
            jB = this.formatOdds(QB, OB);
          if (null === oB || null === jB || "bite" !== QB && "rare" !== QB && oB === jB) continue;
          const yB = GB(QB, OB) - GB(QB, BB),
            JB = YB[QB] ? yB < 0 : yB > 0;
          DB.push({
            label: QB,
            before: oB,
            after: jB,
            tone: oB === jB ? "same" : JB ? "better" : "worse"
          })
        }
        return DB
      }
      charmView(BB, OB, GB) {
        const YB = BB.lampLightCharmId.charAt(0).toUpperCase() + BB.lampLightCharmId.slice(1),
          DB = "bloom" === this.situation;
        return {
          id: BB.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${YB}`),
          effect: this.translate(`skyblockGame:lampLightCharm${YB}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(BB.lampLightCharmCost)
          }),
          owned: BB.lampLightCharmOwned,
          affordable: GB >= BB.lampLightCharmCost,
          socketed: OB.lampLightSocketed === BB.lampLightCharmId,
          lines: this.oddsLines(DB ? OB.lampLightBareBloom : OB.lampLightBareOpen, DB ? BB.lampLightCharmBloom : BB.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var BB, OB, GB, YB;
        const DB = this.message,
          QB = "ready" === (null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) ? this.shop : null,
          oB = null !== (BB = null === DB || void 0 === DB ? void 0 : DB.lampLightBalance) && void 0 !== BB ? BB : 0,
          jB = this.atChair,
          yB = "loading" === (null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          JB = "ready" !== (null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) || jB ? null !== (OB = this.refusalKey) && void 0 !== OB ? OB : yB : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== DB && "locked" !== DB.lampLightStatus,
          status: null !== (GB = null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) && void 0 !== GB ? GB : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(oB)
          }),
          releasing: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.lampLightReleasing) && void 0 !== YB && YB,
          gained: null === DB || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === DB || void 0 === DB ? void 0 : DB.lampLightStatus) && jB && !this.isPending(),
          situation: this.situation,
          shop: null === QB ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: QB.lampLightOddsRod,
              island: this.translate(QB.lampLightIslandNameKey)
            }),
            heldRod: null !== QB.lampLightHeldRod,
            charms: QB.lampLightCharms.map((BB => this.charmView(BB, QB, oB))),
            tints: QB.lampLightTints.map((BB => {
              const OB = BB.lampLightTintId,
                [GB, YB, DB] = BB.lampLightTintColour;
              return {
                id: OB,
                name: this.translate(`skyblockGame:lampLightTint${OB.charAt(0).toUpperCase()}${OB.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(BB.lampLightTintCost)
                }),
                owned: BB.lampLightTintOwned,
                affordable: oB >= BB.lampLightTintCost,
                wearing: QB.lampLightTint === OB,
                colour: `rgb(${GB}, ${YB}, ${DB})`
              }
            })),
            wearingIslandColours: null === QB.lampLightTint
          },
          notice: null === JB ? null : this.translate(JB),
          sparkle: this.sparkle
        }
      }
    }
    const NY = "skyblockMagmawardView";
    class RY {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.tM = BB, this.now = OB, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = EB.map((() => 0)), this.wornAt = EB.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      nP(BB) {
        var OB, GB;
        const YB = EB.map(((OB, GB) => !0 === BB.magmawardPiecesWorn[GB]));
        if (!YB.includes(!0)) return this.snapshot = null, void this.tM(null);
        const DB = this.now(),
          QB = this.snapshot;
        null === QB && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const oB = BB.magmawardFuelCarried,
          jB = !YB.includes(!1);
        let yB = null !== (OB = null === QB || void 0 === QB ? void 0 : QB.pulse) && void 0 !== OB ? OB : null,
          JB = null !== (GB = null === QB || void 0 === QB ? void 0 : QB.flare) && void 0 !== GB ? GB : null;
        BB.magmawardFuelBurned ? (yB = "burn", JB = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = DB, this.flareAt = DB) : null !== QB && oB > QB.fuel && (yB = "gain", this.pulseToken++, this.pulseAt = DB), jB && null !== QB && !QB.fullSet && (JB = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = DB, this.setLitAt = DB);
        const MB = EB.map(((BB, OB) => (YB[OB] && null !== QB && !QB.pieces[OB].worn && (this.wornTokens[OB]++, this.wornAt[OB] = DB), {
          itemName: BB,
          worn: YB[OB],
          wornToken: this.wornTokens[OB],
          justWorn: YB[OB] && this.isPlaying(this.wornAt[OB], DB)
        })));
        this.snapshot = {
          pieces: MB,
          wornCount: YB.filter(Boolean).length,
          fullSet: jB,
          fuel: oB,
          fuelState: oB <= 0 ? "empty" : oB <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, DB) ? yB : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, DB) ? JB : null,
          flareToken: this.flareToken,
          setLit: jB && this.isPlaying(this.setLitAt, DB),
          setLitToken: this.setLitToken
        }, this.tM(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.tM(null)
      }
      isPlaying(BB, OB) {
        return OB - BB < 1200
      }
    }
    const WY = "skyblockGlowtideView";
    class AY {
      constructor(BB) {
        this.tM = BB, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = BB => {
          this.arrow = BB, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      nP(BB) {
        this.bloom = BB.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.tM(null))
      }
      afterRender(BB, OB) {
        const GB = this.bloom;
        if (null === GB || null === BB) return;
        const YB = GB.glowtideBloomX - BB[0],
          DB = GB.glowtideBloomZ - BB[2],
          QB = Math.hypot(YB, DB),
          oB = this.snapshot,
          jB = null !== oB && void 0 !== oB && oB.inRange ? 1 : 0,
          yB = QB <= 12.5 + jB && BB[1] - GB.glowtideBloomY <= 10 + jB;
        !yB || null !== oB && void 0 !== oB && oB.inRange || this.inRangeToken++;
        const JB = {
          colour: GB.glowtideBloomColour,
          inRange: yB,
          distance: Math.round(QB),
          inRangeToken: this.inRangeToken
        };
        (null === oB || JB.colour !== oB.colour || JB.inRange !== oB.inRange || !yB && JB.distance !== oB.distance) && (this.snapshot = JB, this.tM(JB));
        const MB = PB.b.computeShortestRotation(OB, (0, PB.Kb)([YB, 0, DB]));
        null === this.arrow || Math.abs(MB - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${MB}rad)`, this.arrowTurn = MB)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.tM(null)
      }
    }
    const VY = "skyblockGlowMeterView";
    class SY {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.tM = BB, this.now = OB, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      nP(BB) {
        const OB = this.now(),
          {
            glowMeterFill: GB,
            glowMeterCapacity: YB
          } = BB,
          DB = GB >= YB,
          QB = this.snapshot;
        null !== QB && (DB && !QB.full && (this.fullToken++, this.fullAt = OB), QB.full && !DB ? (this.burstToken++, this.burstAt = OB) : GB > QB.fill && (this.gainToken++, this.gainAt = OB)), this.snapshot = {
          fill: GB,
          CP: YB,
          ratio: Math.min(1, Math.max(0, GB / YB)),
          full: DB,
          rares: BB.glowMeterRares,
          ready: DB && this.isPlaying(this.fullAt, OB),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, OB),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, OB),
          gainToken: this.gainToken
        }, this.tM(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.tM(null)
      }
      isPlaying(BB, OB) {
        return OB - BB < 2e3
      }
    }
    const nY = "skyblockHushWaitView";
    class UY {
      constructor(BB) {
        this.tM = BB, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      nP(BB) {
        let {
          hushWaitMs: OB,
          hushWaitTotalMs: GB,
          hushWaitLines: YB
        } = BB;
        if (this.clearTimers(), this.token++, 0 === YB.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (OB <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: YB[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const DB = Math.max(null !== GB && void 0 !== GB ? GB : OB, OB),
          QB = DB - OB,
          oB = BB => DB * BB / YB.length,
          jB = BB => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: DB,
              elapsedMs: QB,
              line: YB[BB],
              lineIndex: BB
            })
          };
        let yB = 0;
        for (; yB + 1 < YB.length && oB(yB + 1) <= QB;) yB++;
        jB(yB);
        for (let JB = yB + 1; JB < YB.length; JB++) this.later(oB(JB) - QB, (() => {
          jB(JB)
        }));
        this.later(OB, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(BB) {
        this.snapshot = BB, this.tM(BB)
      }
      later(BB, OB) {
        this.timers.push(setTimeout(OB, BB))
      }
      clearTimers() {
        for (const BB of this.timers) clearTimeout(BB);
        this.timers = []
      }
    }
    const fY = "skyblockTideChartsView",
      kY = 36e5,
      dY = 864e5;

    function KY(BB, OB, GB) {
      const [YB, DB, QB, oB] = BB.tideChartArea, jB = Math.floor(OB), yB = Math.floor(GB);
      return jB >= YB && jB <= QB && yB >= DB && yB <= oB
    }

    function uY(BB, OB, GB) {
      const [YB, DB, QB, oB] = BB.tideChartWater;
      return function(BB, OB, GB, YB, DB, QB) {
        const oB = 4 - cB(Math.floor(DB) - (BB - GB), GB);
        return 5 * cB(Math.floor(QB) - (OB - YB), YB) + oB
      }(YB, DB, QB, oB, OB, GB)
    }

    function mY(BB, OB, GB) {
      const YB = BB.tideCharts;
      for (let DB = 0; DB < YB.length; DB++)
        if (KY(YB[DB], OB, GB)) return YB[DB];
      return null
    }

    function IY(BB, OB, GB) {
      const YB = Math.max(0, OB - GB);
      return YB > dY ? BB("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(YB / dY))
      }) : YB > kY ? BB("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(YB / kY))
      }) : BB("skyblockGame:tideChartsTurnSoon")
    }
    class FY extends yB {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, GB, YB), this.translate = OB, this.now = DB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.pl = BB => {
          this.picked = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        const OB = this.message;
        if (null !== OB)
          for (const YB of BB.tideCharts) {
            var GB;
            const BB = OB.tideCharts.find((BB => BB.tideChartIsland === YB.tideChartIsland)),
              DB = YB.tideChartLit & ~(null !== (GB = null === BB || void 0 === BB ? void 0 : BB.tideChartLit) && void 0 !== GB ? GB : 0);
            void 0 !== BB && 0 !== DB && (this.pulse = {
              island: YB.tideChartIsland,
              cells: DB,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = BB, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(BB, OB) {
        var GB;
        const YB = null === this.message || Number.isNaN(BB) ? null : mY(this.message, BB, OB),
          DB = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.tideChartIsland) && void 0 !== GB ? GB : null,
          QB = null === YB ? -1 : function(BB, OB, GB) {
            const [YB, DB, QB, oB] = BB.tideChartWater;
            return function(BB, OB, GB, YB, DB, QB, oB) {
              return ((DB - BB) / (GB + oB)) ** 2 + ((QB - OB) / (YB + oB)) ** 2 <= 1
            }(YB, DB, QB, oB, OB, GB, 2) ? uY(BB, OB, GB) : -1
          }(YB, BB, OB);
        return (DB !== this.hereIsland || QB !== this.hereCell) && (this.hereIsland = DB, this.hereCell = QB, null !== DB && (this.lastIsland = DB), !0)
      }
      afterRender(BB) {
        if (null === this.message) return;
        this.lastX = null === BB ? Number.NaN : BB[0], this.lastZ = null === BB ? Number.NaN : BB[2];
        const OB = this.locate(this.lastX, this.lastZ),
          GB = this.expirePulses();
        (OB || GB || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const BB = this.now();
        return !(!this.open || BB - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = BB, IY(this.translate, this.message.tideChartTurnsInMs, BB - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(BB, OB) {
        const GB = null === this.message ? null : mY(this.message, BB, OB);
        if (null === GB) return;
        const YB = uY(GB, BB, OB);
        0 === (GB.tideChartPreBlank & 1 << YB) && (this.cast = {
          island: GB.tideChartIsland,
          cell: YB,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const BB = this.now();
        let OB = !1;
        return 0 !== this.pulse.cells && BB - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, OB = !0), null !== this.cast && BB - this.cast.atMs >= 1500 && (this.cast = null, OB = !0), OB
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(BB, OB) {
        var GB;
        return null !== (GB = BB.tideCharts.find((BB => BB.tideChartIsland === OB))) && void 0 !== GB ? GB : null
      }
      describe(BB) {
        var OB, GB, YB;
        const DB = BB.tideChartIsland,
          QB = [];
        for (let lB = 0; lB < 25; lB++) {
          const OB = 1 << lB;
          0 !== (BB.tideChartLit & OB) ? QB.push("lit") : 0 !== (BB.tideChartClear & OB) ? QB.push("clear") : 0 !== (BB.tideChartPreBlank & OB) ? QB.push("shore") : QB.push("water")
        }
        const oB = function(BB) {
            let OB = 0;
            for (let GB = BB >>> 0; 0 !== GB; GB &= GB - 1) OB++;
            return OB
          }(BB.tideChartLit),
          jB = BB.tideChartInkCount,
          yB = this.translate(BB.tideChartIslandNameKey),
          JB = this.translate("skyblockGame:tideChartsLit", {
            lit: String(oB),
            ink: String(jB)
          }),
          MB = null === BB.tideChartPictureNameKey ? null : this.translate(BB.tideChartPictureNameKey),
          PB = this.hereIsland === DB && -1 !== this.hereCell ? this.hereCell : null,
          zB = [`${yB}: ${JB}.`];
        if (null !== MB && zB.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: MB
          })), null !== PB) {
          const BB = Math.floor(PB / 5) + 1,
            OB = PB % 5 + 1;
          zB.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(BB),
            column: String(OB)
          }))
        }
        return {
          island: DB,
          islandName: yB,
          cells: QB,
          hereCell: PB,
          lit: oB,
          ink: jB,
          litText: JB,
          pictureName: MB,
          gridLabel: zB.join(" "),
          pulseCells: this.pulse.island === DB ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (OB = this.cast) || void 0 === OB ? void 0 : OB.island) === DB ? this.cast.cell : null,
          castToken: null !== (GB = null === (YB = this.cast) || void 0 === YB ? void 0 : YB.token) && void 0 !== GB ? GB : 0
        }
      }
      buildSnapshot() {
        var BB, OB, GB;
        const YB = this.message;
        if (null === YB || 0 === YB.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const DB = this.findChart(YB, this.hereIsland),
          QB = null !== (BB = null !== (OB = null !== (GB = this.findChart(YB, this.open ? this.picked : null)) && void 0 !== GB ? GB : DB) && void 0 !== OB ? OB : this.findChart(YB, this.lastIsland)) && void 0 !== BB ? BB : YB.tideCharts[0],
          oB = null === DB ? null : this.describe(DB);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: oB,
          card: QB === DB ? oB : this.describe(QB),
          turnsText: IY(this.translate, YB.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(YB.tideChartBookCount)
          }),
          tabs: YB.tideCharts.map((BB => ({
            island: BB.tideChartIsland,
            name: this.translate(BB.tideChartIslandNameKey),
            selected: BB.tideChartIsland === QB.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const iY = "skyblockRegularsView",
      LY = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      gY = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function rY(BB, OB) {
      return "given" === BB ? OB.given : "owed" === BB ? OB.owed : OB.goal
    }
    class XY extends yB {
      constructor(BB, OB, GB, YB) {
        super(BB, GB, YB), this.translate = OB, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = BB => BB, this.openIsland = BB => {
          this.selected = BB, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = BB => {
          this.selected = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        this.message = BB, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const BB = this.openedFromReachLog;
        return this.openedFromReachLog = !1, BB
      }
      setTranslator(BB, OB, GB) {
        this.translate = BB, void 0 !== GB && (this.itemName = GB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(BB, OB, GB) {
        return {
          text: this.translate(rY(BB, OB), GB),
          given: "given" === BB
        }
      }
      describeRegular(BB, OB) {
        const GB = this.translate,
          YB = null !== BB.regularKg,
          DB = BB.regularMeetings,
          QB = YB ? 0 === DB ? GB("skyblockGame:regularsNotMet") : 1 === DB ? GB("skyblockGame:regularsMeetingsOne") : GB("skyblockGame:regularsMeetings", {
            count: DB
          }) : "";
        return {
          id: BB.regularId,
          name: GB(BB.regularNameKey),
          line: GB(BB.regularLineKey),
          itemName: BB.regularFishItem,
          fishName: this.itemName(BB.regularFishItem),
          tagged: YB,
          size: null === BB.regularKg ? GB("skyblockGame:regularsNotTagged") : GB("skyblockGame:regularsSize", {
            kg: BB.regularKg.toFixed(1)
          }),
          meetings: QB,
          chance: GB("skyblockGame:regularsChance", {
            count: BB.regularOneInCasts
          }),
          resting: BB.regularRestingToday,
          gifts: [{
            text: GB("skyblockGame:regularsGiftFlare"),
            given: DB >= 3
          }, this.describeGift(BB.regularTintGift, LY, {
            tint: GB(BB.regularTintNameKey)
          })],
          history: [...BB.regularHistory].reverse().map((BB => {
            const YB = BB.regularMeetingKg.toFixed(1),
              DB = OB - BB.regularMeetingDay;
            return DB <= 0 ? GB("skyblockGame:regularsToday", {
              kg: YB
            }) : GB("skyblockGame:regularsDaysAgo", {
              days: DB,
              kg: YB
            })
          }))
        }
      }
      describeIsland(BB, OB) {
        return {
          id: BB.regularsIslandId,
          name: this.translate(BB.regularsIslandNameKey),
          charm: this.describeGift(BB.regularsCharmGift, gY, {
            charm: this.translate(BB.regularsCharmNameKey)
          }),
          regulars: BB.regularsList.map((BB => this.describeRegular(BB, OB)))
        }
      }
      buildSnapshot() {
        var BB, OB, GB, YB;
        const DB = this.message;
        if (null === DB) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const QB = DB.regularsIslands.map((BB => this.describeIsland(BB, DB.regularsToday))),
          oB = null !== (BB = null !== (OB = null === (GB = QB.find((BB => BB.id === this.selected))) || void 0 === GB ? void 0 : GB.id) && void 0 !== OB ? OB : null === (YB = QB[0]) || void 0 === YB ? void 0 : YB.id) && void 0 !== BB ? BB : "";
        return {
          enabled: !0,
          open: this.open,
          selected: oB,
          islands: QB
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const wY = "skyblockHiddenWatersView";
    class EY {
      constructor(BB) {
        this.tM = BB, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      nP(BB) {
        this.snapshot = function(BB) {
          const [OB, GB] = BB.hiddenWatersMapSize, YB = (BB, YB) => ({
            left: 1 - BB / OB,
            top: YB / GB
          }), DB = new Map;
          for (const [oB, jB] of BB.hiddenWatersGlimpses) {
            var QB;
            const BB = null !== (QB = DB.get(oB)) && void 0 !== QB ? QB : [];
            BB.push(jB), DB.set(oB, BB)
          }
          return {
            found: BB.hiddenWatersFound,
            total: BB.hiddenWatersTotal,
            aspect: GB / OB,
            pins: BB.hiddenWatersPins.map((BB => {
              let [OB, GB] = BB;
              return YB(OB, GB)
            })),
            islands: BB.hiddenWatersIslands.map((BB => {
              let [DB, QB, oB, jB] = BB;
              const {
                left: yB,
                top: JB
              } = YB(oB + 1, QB);
              return {
                left: yB,
                top: JB,
                width: (oB + 1 - DB) / OB,
                height: (jB + 1 - QB) / GB
              }
            })),
            glimpses: DB
          }
        }(BB), this.tM(this.snapshot)
      }
    }
    const cY = "skyblockDialogueView";
    class hY extends yB {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, GB, YB), this.translate = OB, this.requestDialogue = DB, this.now = QB, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = BB => {
          this.selection = {
            kind: "quest",
            questId: BB
          }, this.request(), this.show()
        }, this.selectCharacter = BB => {
          this.selection = {
            kind: "character",
            npcId: BB
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      nP(BB) {
        this.received = !0, this.scripts = BB.questDialogueScripts, this.speakers = new Map(BB.questDialogueSpeakers.map((BB => [BB.dialogueSpeakerId, BB]))), this.emit()
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const BB = this.now();
        BB >= this.requestAvailableAt && (this.requestAvailableAt = BB + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var BB;
        const OB = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...OB,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const GB = this.selection;
        if ("quest" === GB.kind) {
          const BB = this.scripts.find((BB => BB.dialogueQuestId === GB.questId));
          return {
            ...OB,
            characters: [],
            questFocus: GB.questId,
            conversations: BB ? [this.conversation(BB)] : []
          }
        }
        const YB = [];
        for (let QB = this.scripts.length - 1; QB >= 0; QB--) {
          const BB = this.scripts[QB].dialogueLines;
          for (let OB = BB.length - 1; OB >= 0; OB--) YB.includes(BB[OB].dialogueSpeakerId) || YB.push(BB[OB].dialogueSpeakerId)
        }
        const DB = null !== GB.npcId && YB.includes(GB.npcId) ? GB.npcId : null !== (BB = YB[0]) && void 0 !== BB ? BB : null;
        return {
          ...OB,
          characters: YB.map((BB => {
            var OB, GB;
            return {
              id: BB,
              styling: null !== (OB = null === (GB = this.speakers.get(BB)) || void 0 === GB ? void 0 : GB.dialogueSpeakerStyling) && void 0 !== OB ? OB : BB,
              selected: BB === DB
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((BB => BB.dialogueLines.some((BB => BB.dialogueSpeakerId === DB)))).map((BB => this.conversation(BB))).reverse()
        }
      }
      conversation(BB) {
        let OB = null;
        return {
          questId: BB.dialogueQuestId,
          questName: this.translate(BB.dialogueQuestNameKey),
          completed: BB.dialogueQuestCompleted,
          lines: BB.dialogueLines.map(((BB, GB) => {
            var YB;
            const DB = BB.dialogueSpeakerId === OB || null === (YB = this.speakers.get(BB.dialogueSpeakerId)) || void 0 === YB ? void 0 : YB.dialogueSpeakerStyling;
            return OB = BB.dialogueSpeakerId, {
              key: GB,
              display: {
                line: {
                  translationKey: BB.dialogueLineKey,
                  params: this.params(BB.dialogueLineParams)
                },
                speakerName: DB,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(BB) {
        if (void 0 !== BB) return Object.fromEntries(Object.entries(BB).map((BB => {
          let [OB, GB] = BB;
          return [OB, "string" === typeof GB ? GB : this.translate(GB.translationKey)]
        })))
      }
    }
    var aY = GB(627),
      eY = GB(1262),
      TY = GB(92);
    const bY = "skyblockAutographsView";

    function CY(BB) {
      const OB = aY.l[BB];
      return {
        label: OB.chatTag.map((BB => BB.str)).join(""),
        icon: OB.icon,
        colour: OB.mainRGB
      }
    }
    class HY extends yB {
      constructor(BB) {
        let OB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = OB, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      nP(BB) {
        this.signatures = BB.autographSignatures, BB.autographOpen ? this.show() : this.emit()
      }
      setTranslator(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = OB, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var BB;
        const OB = null !== (BB = this.signatures) && void 0 !== BB ? BB : [],
          GB = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          YB = [...OB].sort(((BB, OB) => Number(null !== OB.autographRank) - Number(null !== BB.autographRank) || OB.autographSignedAtMs - BB.autographSignedAtMs)).map((BB => ({
            key: `${BB.autographSignedAtMs}|${BB.autographSignerName}`,
            name: (0, eY.e)(BB.autographSignerName, !TY.featureFlags.canSeeRealPlayerNames),
            rank: null === BB.autographRank ? null : CY(BB.autographRank),
            signedOn: GB.format(BB.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: YB,
          total: YB.length,
          rankTotal: YB.filter((BB => null !== BB.rank)).length
        }
      }
    }
    const vY = "skyblockHudView",
      sY = () => {},
      xY = {
        getItem: () => null,
        setItem: sY,
        removeItem: sY
      };
    class tY {
      constructor(BB) {
        let {
          translate: OB,
          translateWithIcons: GB,
          setMenuOpen: YB = sY,
          dismissMenu: DB = () => {
            YB(!1)
          },
          publishSkills: QB = sY,
          publishQuests: oB = sY,
          publishQuestNotification: jB = sY,
          publishDungeons: yB = sY,
          publishCollections: JB = sY,
          publishMap: PB = sY,
          publishHud: zB = sY,
          publishPortalTransit: lB = sY,
          publishDailyReward: pB = sY,
          publishMailbox: qB = sY,
          publishQuestGraph: ZB = sY,
          publishForge: NB = sY,
          publishSmuggler: RB = sY,
          publishKeepersChair: WB = sY,
          publishReachLog: AB = sY,
          publishLampLight: SB = sY,
          publishMagmaward: nB = sY,
          publishGlowtide: UB = sY,
          publishGlowMeter: fB = sY,
          publishHushWait: kB = sY,
          publishPassage: dB = sY,
          publishTideCharts: KB = sY,
          publishRegulars: uB = sY,
          publishHiddenWaters: mB = sY,
          publishDialogue: IB = sY,
          publishAutographs: FB = sY,
          isLoadingScreenUp: iB = () => !1,
          onDailyRewardCoinLanded: LB = sY,
          onDailyRewardStarted: gB = sY,
          onDailyRewardFinished: rB = sY,
          onDailyRewardItemLanded: XB = sY,
          onMailboxStarted: wB = sY,
          journeyStorage: EB = xY,
          requestTracking: cB = sY,
          requestTravel: hB = sY,
          requestDungeonEnter: aB = sY,
          requestQuestJump: eB = sY,
          requestQuestArrive: TB = sY,
          requestForge: bB = sY,
          requestSmuggle: CB = sY,
          requestKeepersChairAim: HB = sY,
          requestReachLogOpen: vB = sY,
          requestLampLight: sB = sY,
          requestDialogue: xB = sY
        } = BB;
        this.navigation = void 0, this.map = void 0, this.compass = new VB, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new oY.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = BB => BB, this.close = () => {
          for (const BB of this.panels) BB.close()
        }, this.setMenuOpen = YB, this.publishHud = zB, this.portalTransit = new WG(lB, EB), this.magmaward = new RY(nB), this.glowtide = new AY(UB), this.glowMeter = new SY(fB), this.hushWait = new UY(kB), this.dailyReward = new SG(pB, (() => iB() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (BB => {
          this.quests.setNotificationsHeld(BB)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), LB, gB, rB, XB);
        const tB = BB => {
          this.panels.some((BB => BB.isOpen())) || (BB ? DB() : this.setMenuOpen(!1))
        };
        this.skills = new EO(QB, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), OB, void 0, void 0, tB), this.quests = new TO(oB, cB, OB, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, tB, jB), this.dungeons = new HO(yB, OB, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, tB, aB), this.collections = new ZG(JB, OB, (() => {
          this.beforePanelOpen(this.collections)
        }), tB), this.map = new MB(PB, hB, OB, (() => {
          this.beforePanelOpen(this.map)
        }), tB), this.questGraph = new IG(ZB, OB, (() => {
          this.beforePanelOpen(this.questGraph)
        }), tB, eB, TB, EB), this.forge = new sG(NB, OB, (() => {
          this.beforePanelOpen(this.forge)
        }), tB, bB), this.smuggler = new BY(RB, OB, (() => {
          this.beforePanelOpen(this.smuggler)
        }), tB, CB), this.lampLight = new ZY(SB, OB, sB, this.commandPacer), this.keepersChair = new yY(WB, OB, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (BB => {
          this.lampLight.onChairClosed(), tB(BB)
        }), HB, Date.now, this.commandPacer), this.reachLog = new pY(AB, OB, (() => {
          this.beforePanelOpen(this.reachLog)
        }), tB, vB, this.commandPacer), this.passage = new QY(dB, OB, (() => {
          this.beforePanelOpen(this.passage)
        }), tB), this.tideCharts = new FY(KB, OB, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), tB), this.regulars = new XY(uB, OB, (() => {
          this.beforePanelOpen(this.regulars)
        }), (BB => {
          this.regulars.takeReturnToReachLog() && !BB && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), tB(BB)
        })), this.hiddenWaters = new EY(mB), this.dialogue = new hY(IB, OB, (() => {
          this.beforePanelOpen(this.dialogue)
        }), tB, xB), this.autographs = new HY(FB, (() => {
          this.beforePanelOpen(this.autographs)
        }), tB), this.mailbox = new kG(qB, (() => iB() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), wB), this.quests.translateWithIcons = null !== GB && void 0 !== GB ? GB : null, this.skills.onLevelUp = BB => {
          this.quests.notify(BB)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new XO(this.map, this.quests, this.compass, OB)
      }
      getHudSnapshot() {
        const BB = this.hudSnapshot,
          OB = this.dailyReward.getHeldCoins();
        return null === BB || OB <= 0 || !("hudPurseCoins" in BB) ? BB : {
          ...BB,
          hudPurseCoins: Math.max(0, BB.hudPurseCoins - OB)
        }
      }
      receiveHud(BB) {
        this.hudSnapshot = BB, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(BB) {
        this.setMenuOpen(!0);
        const OB = BB === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = BB;
        for (const GB of this.panels) GB === BB || OB && GB === this.reachLog || GB.close();
        this.openingPanel = null
      }
      setTranslator(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB => this.resolveItemName(OB, BB);
        this.quests.translateWithIcons = null !== GB && void 0 !== GB ? GB : null, this.navigation.setTranslator(BB, OB), this.lampLight.setTranslator(BB, OB), this.mailbox.setItemName(YB);
        for (const DB of this.panels) DB.setTranslator(BB, OB, YB)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const BB of this.panels) BB.dispose()
      }
    }
    var BD = GB(1090),
      OD = GB.n(BD),
      GD = GB(16),
      YD = GB(37263),
      DD = GB(3831),
      QD = GB(2012),
      oD = GB(2e3),
      jD = GB(34815),
      yD = GB(1175),
      JD = GB(1480),
      MD = GB(1282);

    function PD(BB) {
      let {
        controller: OB,
        minimap: GB,
        children: YB
      } = BB;
      const DB = (0, JD.i)(vY, OB.getHudSnapshot()),
        [QB, oB] = (0, nB.useState)(OB.skills.getSnapshot().overallLevel);
      (0, JD.f)(wO, (BB => {
        oB(BB.overallLevel)
      }));
      const jB = (0, nB.useRef)(null);
      (0, JD.f)(VG, (BB => {
        ! function(BB, OB) {
          if (null === BB || "function" !== typeof BB.animate) return;
          const GB = OB ? 1.35 : 1.15;
          BB.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${GB})`
          }, {
            transform: "scale(1)"
          }], {
            duration: OB ? 320 : 160,
            easing: "ease-out"
          }), BB.classList.toggle("Receiving", !OB), OB && (BB.classList.remove("Shine"), BB.offsetWidth, BB.classList.add("Shine"))
        }(jB.current, BB)
      }));
      const {
        t: yB
      } = (0, yD.H)(), {
        isTouchScreen: JB
      } = (0, GD.o)(["isTouchScreen"]), [MB, zB] = (0, nB.useState)(null);
      return (0, DD.m)(MB, ".SkyblockRightHud"), null !== DB || GB ? (0, MD.jsx)(YD.e, {
        placement: "topRight",
        children: (0, MD.jsxs)("div", {
          className: OD()("SkyblockRightHud", {
            TouchScreen: JB
          }),
          children: [GB, null !== DB && (0, MD.jsxs)("div", {
            ref: zB,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in DB ? (0, MD.jsx)("div", {
              className: "SkyblockHudHelp",
              children: DB.hudHelpText
            }) : (0, MD.jsxs)(MD.Fragment, {
              children: [(0, MD.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, MD.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, MD.jsx)("strong", {
                    style: {
                      color: PB.J.cyanUiText
                    },
                    children: yB(DB.hudZoneNameKey)
                  }), null !== QB && (0, MD.jsx)("span", {
                    style: {
                      color: PB.J.goldUiText
                    },
                    children: yB("skyblockGame:level", {
                      level: (0, jD.g)(QB)
                    })
                  })]
                }), (0, MD.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: jB,
                  children: [(0, MD.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, MD.jsx)(QD.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, jD.g)(DB.hudPurseCoins)]
                })]
              }), DB.hudClockText.length > 0 && (0, MD.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, MD.jsx)(oD.b, {
                  text: DB.hudClockText
                })
              })]
            }), YB, "hudZoneNameKey" in DB && (0, MD.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var zD = GB(39235);

    function lD(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)();
      return (0, MD.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: OB.display.mountPlayer,
        title: GB("skyblockGame:mapYouAreHere"),
        children: (0, MD.jsx)(zD.e, {
          icon: "player"
        })
      })
    }
    const pD = GB(39240),
      qD = Object.fromEntries(pD.keys().map((BB => [BB.replace(/^\.\/(.*)\.png$/, "$1"), pD(BB)])));

    function ZD(BB, OB) {
      var GB;
      return null !== (GB = qD[BB]) && void 0 !== GB ? GB : qD[OB]
    }

    function ND(BB) {
      let {
        imageKey: OB,
        fallbackImageKey: GB,
        geometryKey: YB,
        alt: DB,
        className: QB
      } = BB;
      const [oB, jB] = (0, nB.useState)((() => function(BB, OB) {
        return [{
          id: 0,
          imageKey: BB,
          geometryKey: OB,
          phase: "shown"
        }]
      }(OB, YB))), yB = function(BB, OB, GB) {
        const YB = BB[BB.length - 1];
        if (YB.imageKey === OB && YB.geometryKey === GB) return BB;
        const DB = {
          id: YB.id + 1,
          imageKey: OB,
          geometryKey: GB,
          phase: "entering"
        };
        return YB.geometryKey === GB ? [{
          ...YB,
          phase: "leaving"
        }, DB] : [DB]
      }(oB, OB, YB);
      return yB !== oB && jB(yB), (0, MD.jsx)(MD.Fragment, {
        children: yB.map((BB => (0, MD.jsx)("img", {
          className: OD()("SkyblockMapTerrainImage", QB, {
            Entering: "entering" === BB.phase,
            Leaving: "leaving" === BB.phase
          }),
          src: ZD(BB.imageKey, GB),
          alt: "leaving" === BB.phase ? "" : DB,
          onAnimationEnd: () => {
            jB((OB => function(BB, OB) {
              return BB.flatMap((BB => BB.id !== OB ? [BB] : "leaving" === BB.phase ? [] : [{
                ...BB,
                phase: "shown"
              }]))
            }(OB, BB.id)))
          }
        }, BB.id)))
      })
    }
    var RD = GB(4946),
      WD = GB(1485);

    function AD(BB) {
      if ("Tab" !== BB.key) return;
      const OB = Array.from(BB.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        GB = OB.indexOf(document.activeElement);
      var YB;
      if (BB.shiftKey && GB <= 0) BB.preventDefault(), null === (YB = OB.at(-1)) || void 0 === YB || YB.focus();
      else if (!BB.shiftKey && (-1 === GB || GB === OB.length - 1)) {
        var DB;
        BB.preventDefault(), null === (DB = OB[0]) || void 0 === DB || DB.focus()
      }
    }

    function VD() {
      const BB = (0, nB.useRef)(null);
      return (0, nB.useCallback)((OB => {
        var GB;
        OB ? (BB.current = document.activeElement, OB.focus()) : null === (GB = BB.current) || void 0 === GB || GB.focus()
      }), [])
    }

    function SD(BB) {
      let {
        percent: OB,
        label: GB,
        levelUpToken: YB,
        colour: DB
      } = BB;
      return (0, MD.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": GB,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": OB,
        "aria-valuetext": GB,
        children: [(0, MD.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${OB/100})`
          }
        }), null !== YB && void 0 !== YB && (0, MD.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": DB
          }
        }, YB)]
      })
    }

    function nD(BB) {
      let {
        mount: OB
      } = BB;
      return (0, MD.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: OB,
        hidden: !0,
        children: (0, MD.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, MD.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, MD.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function UD(BB, OB, GB, YB) {
      (0, nB.useLayoutEffect)((() => {
        const DB = BB.current;
        if (!GB || null === OB || void 0 === OB || !OB.local || !DB) return;
        const QB = Array.from(DB.querySelectorAll(".SkyblockMapNode")),
          oB = [...OB.points, ...OB.portals],
          jB = () => {
            const BB = DB.clientWidth,
              GB = DB.clientHeight,
              jB = QB.map(((DB, QB) => {
                const jB = oB[QB];
                return {
                  id: jB.id,
                  portal: QB >= OB.points.length,
                  x: jB.position[0] * BB / 100,
                  y: jB.position[1] * GB / 100,
                  width: DB.offsetWidth / YB,
                  height: DB.offsetHeight / YB
                }
              })),
              yB = new Map(oB.map(((BB, OB) => [BB.id, QB[OB]])));
            for (const OB of function(BB, OB, GB) {
                const YB = [],
                  DB = [...BB].sort(((BB, OB) => Number(OB.portal) - Number(BB.portal) || BB.id.localeCompare(OB.id)));
                for (const QB of DB) {
                  const BB = BB => Math.max(QB.width / 2, Math.min(OB - QB.width / 2, BB)),
                    DB = BB => Math.max(QB.height / 2, Math.min(GB - QB.height / 2, BB)),
                    oB = [BB(QB.x)],
                    jB = [DB(QB.y)];
                  for (const OB of YB) oB.push(BB(OB.x - (OB.width + QB.width) / 2 - 4), BB(OB.x + (OB.width + QB.width) / 2 + 4)), jB.push(DB(OB.y - (OB.height + QB.height) / 2 - 4), DB(OB.y + (OB.height + QB.height) / 2 + 4));
                  let yB = {
                      ...QB,
                      x: oB[0],
                      y: jB[0]
                    },
                    JB = 1 / 0,
                    MB = 1 / 0;
                  for (const OB of new Set(oB))
                    for (const BB of new Set(jB)) {
                      let GB = 0;
                      for (const oB of YB) GB += Math.max(0, (QB.width + oB.width) / 2 + 4 - Math.abs(OB - oB.x)) * Math.max(0, (QB.height + oB.height) / 2 + 4 - Math.abs(BB - oB.y));
                      const DB = (OB - QB.x) ** 2 + (BB - QB.y) ** 2;
                      (GB < JB || GB === JB && DB < MB) && (yB = {
                        ...QB,
                        x: OB,
                        y: BB
                      }, JB = GB, MB = DB)
                    }
                  YB.push(yB)
                }
                return YB
              }(jB, BB, GB)) {
              const BB = yB.get(OB.id);
              BB.style.left = `${OB.x}px`, BB.style.top = `${OB.y}px`
            }
          };
        jB();
        const yB = new ResizeObserver(jB);
        yB.observe(DB);
        for (const BB of QB) yB.observe(BB);
        return () => {
          yB.disconnect()
        }
      }), [BB, OB, GB, YB])
    }
    const fD = {
        zoom: 1,
        x: 0,
        y: 0
      },
      kD = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function dD(BB, OB, GB) {
      return Math.min(GB, Math.max(OB, BB))
    }

    function KD(BB, OB, GB) {
      const YB = Math.min(1, GB * OB / BB),
        DB = Math.min(1, BB / (GB * OB));
      return {
        x0: (1 - YB) / 2,
        y0: (1 - DB) / 2,
        x1: (1 + YB) / 2,
        y1: (1 + DB) / 2
      }
    }

    function uD(BB, OB, GB, YB) {
      const DB = OB * (YB - GB);
      if (DB <= 1) return .5 - OB * (GB + YB) / 2;
      const QB = .45 * Math.min(1, DB - 1);
      return dD(BB, 1 - OB * YB - QB, QB - OB * GB)
    }

    function mD(BB, OB) {
      const GB = dD(BB.zoom, 1, 12);
      return {
        zoom: GB,
        x: uD(BB.x, GB, OB.x0, OB.x1),
        y: uD(BB.y, GB, OB.y0, OB.y1)
      }
    }

    function ID(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kD;
      const QB = dD(BB.zoom * OB, 1, 12),
        oB = QB / BB.zoom;
      return mD({
        zoom: QB,
        x: GB - (GB - BB.x) * oB,
        y: YB - (YB - BB.y) * oB
      }, DB)
    }

    function FD(BB, OB, GB, YB) {
      const [DB, QB] = (0, nB.useState)(fD);
      (0, nB.useEffect)((() => {
        QB(fD)
      }), [GB]), (0, nB.useEffect)((() => {
        const GB = BB.current;
        if (!OB || !GB) return;
        const DB = () => KD(GB.clientWidth, GB.clientHeight, YB),
          oB = BB => {
            const OB = GB.getBoundingClientRect();
            return {
              x: (BB.clientX - OB.left) / OB.width,
              y: (BB.clientY - OB.top) / OB.height
            }
          },
          jB = new Map;
        let yB = {
            x: 0,
            y: 0
          },
          JB = !1,
          MB = 0;
        const PB = BB => {
            BB.preventDefault();
            const OB = BB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * BB.deltaY : BB.deltaY,
              GB = oB(BB);
            QB((BB => ID(BB, Math.exp(.0015 * -OB), GB.x, GB.y, DB())))
          },
          zB = BB => {
            "mouse" === BB.pointerType && 0 !== BB.button || (jB.set(BB.pointerId, oB(BB)), 1 === jB.size && (yB = {
              x: BB.clientX,
              y: BB.clientY
            }, JB = !1), MB = 0)
          },
          lB = BB => {
            const OB = jB.get(BB.pointerId);
            if (!OB) return;
            const YB = oB(BB);
            if (jB.set(BB.pointerId, YB), 2 === jB.size) {
              const [BB, OB] = [...jB.values()], GB = Math.hypot(BB.x - OB.x, BB.y - OB.y);
              if (MB > 0) {
                const YB = GB / MB;
                QB((GB => ID(GB, YB, (BB.x + OB.x) / 2, (BB.y + OB.y) / 2, DB())))
              }
              return MB = GB, void(JB = !0)
            }!JB && Math.hypot(BB.clientX - yB.x, BB.clientY - yB.y) < 4 || (JB || (JB = !0, GB.setPointerCapture(BB.pointerId)), QB((BB => function(BB, OB, GB) {
              let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kD;
              return mD({
                zoom: BB.zoom,
                x: BB.x + OB,
                y: BB.y + GB
              }, YB)
            }(BB, YB.x - OB.x, YB.y - OB.y, DB()))))
          },
          pB = BB => {
            jB.delete(BB.pointerId), MB = 0
          },
          qB = BB => {
            JB && (BB.stopPropagation(), BB.preventDefault(), JB = !1)
          },
          ZB = new ResizeObserver((() => {
            QB((BB => mD(BB, DB())))
          }));
        return ZB.observe(GB), GB.addEventListener("wheel", PB, {
          passive: !1
        }), GB.addEventListener("pointerdown", zB), GB.addEventListener("pointermove", lB), GB.addEventListener("pointerup", pB), GB.addEventListener("pointercancel", pB), GB.addEventListener("click", qB, !0), () => {
          ZB.disconnect(), GB.removeEventListener("wheel", PB), GB.removeEventListener("pointerdown", zB), GB.removeEventListener("pointermove", lB), GB.removeEventListener("pointerup", pB), GB.removeEventListener("pointercancel", pB), GB.removeEventListener("click", qB, !0)
        }
      }), [BB, OB, GB, YB]);
      return {
        view: DB,
        zoomBy: OB => {
          const GB = BB.current;
          GB && QB((BB => ID(BB, OB, .5, .5, KD(GB.clientWidth, GB.clientHeight, YB))))
        }
      }
    }

    function iD(BB) {
      var OB, GB, YB, DB;
      let {
        controller: QB,
        navigation: oB
      } = BB;
      const jB = (0, JD.i)(JB, QB.getSnapshot()),
        {
          t: yB
        } = (0, yD.H)(),
        MB = VD(),
        PB = jB.presentation,
        zB = (0, nB.useRef)(null),
        lB = (0, nB.useRef)(null),
        pB = Boolean(jB.open && (null === PB || void 0 === PB ? void 0 : PB.local) && PB.background),
        qB = FD(zB, pB, `${jB.open}|${jB.tab}|${null===PB||void 0===PB||null===(OB=PB.background)||void 0===OB?void 0:OB.geometryKey}`, null !== (GB = null === PB || void 0 === PB || null === (YB = PB.background) || void 0 === YB ? void 0 : YB.ratio) && void 0 !== GB ? GB : 2);
      if (UD(lB, PB, jB.open, qB.view.zoom), !PB || !jB.open) return null;
      const ZB = PB.local ? PB.background : null,
        NB = {
          "--map-ratio": String(null !== (DB = null === ZB || void 0 === ZB ? void 0 : ZB.ratio) && void 0 !== DB ? DB : 2),
          backgroundColor: null === ZB || void 0 === ZB ? void 0 : ZB.colour
        },
        RB = {
          "--map-zoom": String(qB.view.zoom),
          transform: `translate(${100*qB.view.x}%, ${100*qB.view.y}%) scale(${qB.view.zoom})`
        };
      return (0, MD.jsx)(RD.d, {
        show: jB.open,
        close: QB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: MB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, MD.jsx)("h2", {
                id: "skyblockMapTitle",
                children: yB("skyblockGame:map")
              }), PB.minimap && (0, MD.jsx)("p", {
                children: PB.minimap.caption
              })]
            }), (0, MD.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((BB => (0, MD.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": BB === jB.tab ? "true" : void 0,
                className: OD()({
                  Selected: BB === jB.tab
                }),
                "aria-pressed": BB === jB.tab,
                onClick: () => {
                  QB.selectTab(BB)
                },
                children: yB("local" === BB ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, BB)))
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: QB.dismiss
            })]
          }), (0, MD.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, MD.jsxs)("div", {
              ref: zB,
              className: OD()("SkyblockMapCanvas", {
                Local: PB.local,
                Overview: !PB.local,
                Zoomed: qB.view.zoom > 1
              }),
              style: NB,
              children: [(0, MD.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: pB ? RB : void 0,
                children: (0, MD.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: lB,
                  children: [ZB && (0, MD.jsx)(ND, {
                    className: "SkyblockMapTerrain",
                    imageKey: ZB.imageKey,
                    fallbackImageKey: ZB.fallbackImageKey,
                    geometryKey: ZB.geometryKey,
                    alt: ZB.label
                  }), PB.local && (0, MD.jsx)(nD, {
                    mount: oB.display.mountMapSearchArea
                  }), !PB.local && (0, MD.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: PB.connections.map((BB => (0, MD.jsx)("line", {
                      className: OD()({
                        Explored: BB.explored
                      }),
                      x1: BB.start[0],
                      y1: BB.start[1],
                      x2: BB.end[0],
                      y2: BB.end[1]
                    }, BB.id)))
                  }), PB.points.map((BB => {
                    const OB = !PB.local && BB.thumbnail ? qD[BB.thumbnail] : void 0;
                    return (0, MD.jsxs)("div", {
                      className: OD()("SkyblockMapNode", {
                        Current: BB.current
                      }),
                      style: {
                        left: `${BB.position[0]}%`,
                        top: `${BB.position[1]}%`
                      },
                      children: [(0, MD.jsxs)(WD.f, {
                        className: OD()("SkyblockMapPin", {
                          Unknown: !BB.visited,
                          Current: BB.current
                        }),
                        disabled: jB.pending,
                        onClick: () => {
                          QB.travel(BB.travelKind, BB.travelId)
                        },
                        children: [OB && (0, MD.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: OB,
                          alt: ""
                        }), !OB && (0, MD.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, MD.jsx)(zD.e, {
                            icon: BB.icon
                          })
                        }), (0, MD.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: BB.name
                        })]
                      }), BB.current && (0, MD.jsx)("span", {
                        className: OD()("SkyblockMapHereBadge", {
                          Above: BB.position[1] > 50
                        }),
                        children: yB("skyblockGame:mapYouAreHere")
                      })]
                    }, BB.id)
                  })), PB.portals.map((BB => (0, MD.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${BB.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${BB.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, MD.jsxs)(WD.f, {
                      className: "SkyblockMapPin",
                      disabled: jB.pending,
                      onClick: () => {
                        QB.travel(BB.travelKind, BB.travelId)
                      },
                      children: [(0, MD.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: BB.colour
                        },
                        "aria-hidden": "true",
                        children: (0, MD.jsx)(zD.e, {
                          icon: BB.icon
                        })
                      }), (0, MD.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: BB.name
                      })]
                    })
                  }, BB.id))), PB.local && (0, MD.jsx)(lD, {
                    controller: oB
                  })]
                })
              }), pB && (0, MD.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, MD.jsx)("button", {
                  type: "button",
                  "aria-label": yB("skyblockGame:mapZoomIn"),
                  disabled: qB.view.zoom >= 12,
                  onClick: () => {
                    qB.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, MD.jsx)("button", {
                  type: "button",
                  "aria-label": yB("skyblockGame:mapZoomOut"),
                  disabled: qB.view.zoom <= 1,
                  onClick: () => {
                    qB.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, MD.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: jB.feedback
              })]
            })
          }), (0, MD.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [PB.progress && (0, MD.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, MD.jsx)("span", {
                children: PB.progress
              }), (0, MD.jsx)(SD, {
                percent: PB.percent,
                label: PB.progress
              })]
            }), PB.noLandmarks && (0, MD.jsx)("span", {
              children: yB("skyblockGame:mapNoLandmarks")
            }), PB.canTravel && (0, MD.jsx)("span", {
              className: "SkyblockMapHint",
              children: yB("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function LD(BB) {
      let {
        view: OB,
        controller: GB,
        navigation: YB
      } = BB;
      const {
        t: DB
      } = (0, yD.H)(), {
        isTouchScreen: QB
      } = (0, GD.o)(["isTouchScreen"]);
      return (0, MD.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": DB("skyblockGame:mapLocal"),
        children: [QB && (0, MD.jsx)(WD.f, {
          className: "SkyblockMinimapOpen",
          onClick: GB.showLocal,
          children: DB("skyblockGame:map")
        }), (0, MD.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: OB.colour
          },
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: YB.display.mountTerrain,
            style: {
              width: OB.width,
              height: OB.height
            },
            children: [(0, MD.jsx)(ND, {
              imageKey: OB.imageKey,
              fallbackImageKey: OB.fallbackImageKey,
              geometryKey: OB.geometryKey,
              alt: OB.label
            }), (0, MD.jsx)(nD, {
              mount: YB.display.mountMinimapSearchArea
            }), OB.markers.map((BB => (0, MD.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${BB.position[0]}%`,
                top: `${BB.position[1]}%`,
                color: BB.colour
              },
              title: BB.name,
              children: (0, MD.jsx)(zD.e, {
                icon: BB.icon
              })
            }, BB.id)))]
          }), (0, MD.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: DB("skyblockGame:mapYouAreHere"),
            children: (0, MD.jsx)(zD.e, {
              icon: "player"
            })
          })]
        }), (0, MD.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: OB.caption
        })]
      })
    }

    function gD(BB) {
      let {
        controller: OB
      } = BB;
      return (0, MD.jsxs)("div", {
        className: "SkyblockCompass",
        ref: OB.display.mountCompass,
        children: [(0, MD.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, MD.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, MD.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function rD(BB) {
      let {
        controller: OB,
        surface: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)(), DB = (0, JD.i)(wO, OB.getSnapshot()), QB = VD();
      return DB.enabled ? (0, MD.jsxs)(MD.Fragment, {
        children: ["hud" === GB && (0, MD.jsx)(YD.e, {
          placement: "statBars",
          children: DB.hud && (0, MD.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": DB.hud.colour
            },
            children: [(0, MD.jsx)(SD, {
              percent: DB.hud.skill.percent,
              label: DB.hud.skill.xp,
              levelUpToken: DB.hud.levelUpToken,
              colour: DB.hud.colour
            }), (0, MD.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, MD.jsxs)("span", {
                children: [DB.hud.skill.label, " \xb7 ", DB.hud.skill.level]
              }), (0, MD.jsx)("span", {
                children: DB.hud.gain
              })]
            })]
          })
        }), "hud" === GB && (0, MD.jsx)(YD.e, {
          children: DB.hud && (0, MD.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, MD.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, MD.jsx)("strong", {
                children: DB.hud.skill.label
              }), (0, MD.jsx)("span", {
                children: DB.hud.gain
              })]
            }), (0, MD.jsx)(SD, {
              percent: DB.hud.skill.percent,
              label: DB.hud.skill.xp,
              levelUpToken: DB.hud.levelUpToken,
              colour: DB.hud.colour
            }), (0, MD.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, MD.jsx)("span", {
                children: DB.hud.skill.level
              }), (0, MD.jsx)("span", {
                children: DB.hud.skill.xp
              })]
            })]
          })
        }), "menu" === GB && (0, MD.jsx)(RD.d, {
          show: DB.open,
          close: OB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, MD.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: QB,
            onKeyDown: AD,
            children: [(0, MD.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, MD.jsxs)("div", {
                children: [(0, MD.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: YB("skyblockGame:skills")
                }), (0, MD.jsx)("p", {
                  children: YB("skyblockGame:skillsIntro")
                })]
              }), (0, MD.jsx)(WD.m, {
                padIgnore: !0,
                onClick: OB.dismiss
              })]
            }), (0, MD.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, MD.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: DB.skills.map((BB => (0, MD.jsxs)(WD.f, {
                  className: OD()("SkyblockSkillCard", {
                    Selected: BB.selected
                  }),
                  ariaPressed: BB.selected,
                  onClick: () => {
                    OB.select(BB.id)
                  },
                  children: [(0, MD.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, MD.jsx)(QD.c, {
                      itemName: BB.icon,
                      amount: 0
                    })
                  }), (0, MD.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, MD.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, MD.jsx)("strong", {
                        children: BB.label
                      }), (0, MD.jsx)("span", {
                        children: BB.level
                      })]
                    }), (0, MD.jsx)(SD, {
                      percent: BB.percent,
                      label: `${BB.label}: ${BB.xp}`
                    }), (0, MD.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: BB.xp
                    })]
                  })]
                }, BB.id)))
              }), DB.detail && (0, MD.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, MD.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, MD.jsx)(QD.c, {
                    itemName: DB.detail.icon,
                    amount: 0
                  })
                }), (0, MD.jsx)("h3", {
                  children: DB.detail.label
                }), (0, MD.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: DB.detail.level
                }), (0, MD.jsx)("p", {
                  children: DB.detail.description
                }), (0, MD.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, MD.jsx)("strong", {
                    children: YB("skyblockGame:currentBenefit")
                  }), (0, MD.jsx)("span", {
                    children: DB.detail.benefit
                  })]
                }), (0, MD.jsx)(SD, {
                  percent: DB.detail.percent,
                  label: DB.detail.xp
                }), (0, MD.jsx)("p", {
                  children: DB.detail.xp
                }), (0, MD.jsx)("h4", {
                  children: YB("skyblockGame:earnXp")
                }), (0, MD.jsx)("ul", {
                  children: DB.detail.sources.map((BB => (0, MD.jsx)("li", {
                    children: BB
                  }, BB)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var XD = GB(1405),
      wD = GB(5335),
      ED = GB(331);

    function cD(BB) {
      let {
        item: OB
      } = BB;
      return (0, MD.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, MD.jsx)(QD.c, {
          itemName: OB,
          amount: 0
        })
      })
    }

    function hD(BB) {
      let {
        name: OB,
        percent: GB,
        progress: YB
      } = BB;
      return (0, MD.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, MD.jsx)(SD, {
          percent: GB,
          label: `${(0,ED.tb)(OB)}: ${YB}`
        }), (0, MD.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: YB
        })]
      })
    }

    function aD(BB) {
      let {
        subquests: OB,
        showDescriptions: GB = !1
      } = BB;
      return (0, MD.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: OB.map((BB => {
          const OB = GB && "completed" === BB.status,
            YB = (0, MD.jsxs)("li", {
              className: OD()("SkyblockQuestStep", BB.status, {
                JustFinished: BB.justFinished,
                JustUnlocked: BB.justUnlocked
              }),
              tabIndex: OB ? 0 : void 0,
              children: [null !== BB.iconItem && (0, MD.jsx)(cD, {
                item: BB.iconItem
              }), null === BB.iconItem && (0, MD.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === BB.status ? "\u2713" : "skipped" === BB.status ? "\u2212" : "\u25cb"
              }), (0, MD.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, MD.jsx)("strong", {
                  children: (0, MD.jsx)(wD.c, {
                    text: BB.name
                  })
                }), GB && !OB && (0, MD.jsx)("span", {
                  children: (0, MD.jsx)(wD.c, {
                    text: BB.description
                  })
                }), null !== BB.barPercent && (0, MD.jsx)(hD, {
                  name: BB.name,
                  percent: BB.barPercent,
                  progress: BB.progress
                }), null === BB.barPercent && !OB && (0, MD.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: BB.statusLabel
                })]
              })]
            }, BB.id);
          return OB ? (0, MD.jsx)(XD.g, {
            delayShow: 200,
            tooltipInner: (0, MD.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, MD.jsx)("span", {
                children: (0, MD.jsx)(wD.c, {
                  text: BB.description
                })
              }), (0, MD.jsx)("strong", {
                children: BB.statusLabel
              })]
            }),
            children: YB
          }, BB.id) : YB
        }))
      })
    }

    function eD(BB) {
      let {
        quest: OB,
        select: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)(), DB = OB.focusStep;
      return (0, MD.jsxs)(WD.f, {
        className: OD()("SkyblockQuestCard", {
          Selected: OB.selected,
          Tracked: OB.tracked
        }),
        onClick: () => {
          GB(OB.id)
        },
        children: [(0, MD.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, MD.jsx)("strong", {
            children: (0, MD.jsx)(wD.c, {
              text: OB.name
            })
          }), OB.tracked && (0, MD.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: YB("skyblockGame:currentQuest")
          })]
        }), DB && (0, MD.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== DB.iconItem && (0, MD.jsx)(cD, {
            item: DB.iconItem
          }), (0, MD.jsx)(hD, {
            name: DB.name,
            percent: DB.barPercent,
            progress: DB.progress
          })]
        }), (0, MD.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: OB.progress
        })]
      })
    }

    function TD(BB) {
      let {
        controller: OB,
        surface: GB
      } = BB;
      const YB = (0, JD.i)(aO, OB.getSnapshot()),
        {
          t: DB
        } = (0, yD.H)(),
        QB = VD();
      return YB.enabled ? (0, MD.jsxs)(MD.Fragment, {
        children: ["hud" === GB && (0, MD.jsx)(MD.Fragment, {
          children: YB.tracked && (0, MD.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: hO,
            children: (0, MD.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [YB.trackedStepPulse > 0 && (0, MD.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, YB.trackedStepPulse), (0, MD.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: DB("skyblockGame:currentQuest")
              }), (0, MD.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, MD.jsx)("strong", {
                  children: (0, MD.jsx)(wD.c, {
                    text: YB.tracked.name
                  })
                }), null !== YB.tracked.clock && (0, MD.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: YB.tracked.clock
                })]
              }), (0, MD.jsx)(aD, {
                subquests: YB.tracked.subquests
              })]
            })
          })
        }), "menu" === GB && (0, MD.jsx)(RD.d, {
          show: YB.open,
          close: OB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, MD.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: QB,
            onKeyDown: AD,
            children: [(0, MD.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, MD.jsx)("div", {
                children: (0, MD.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: DB("skyblockGame:quests")
                })
              }), (0, MD.jsx)(WD.m, {
                padIgnore: !0,
                onClick: OB.dismiss
              })]
            }), (0, MD.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, MD.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, MD.jsx)("h3", {
                  children: DB("skyblockGame:current")
                }), 0 === YB.active.length && (0, MD.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: DB("skyblockGame:noActiveQuests")
                }), YB.active.map((BB => (0, MD.jsx)(eD, {
                  quest: BB,
                  select: OB.select
                }, BB.id))), (0, MD.jsx)("h3", {
                  children: (0, MD.jsxs)("button", {
                    type: "button",
                    className: OD()("SkyblockQuestSectionToggle", {
                      Expanded: YB.completedExpanded
                    }),
                    "aria-expanded": YB.completedExpanded,
                    onClick: OB.toggleCompleted,
                    children: [(0, MD.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), DB("skyblockGame:completed"), (0, MD.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: YB.completed.length
                    })]
                  })
                }), YB.completedExpanded && 0 === YB.completed.length && (0, MD.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: DB("skyblockGame:noCompletedQuests")
                }), YB.completedExpanded && YB.completed.map((BB => (0, MD.jsx)(eD, {
                  quest: BB,
                  select: OB.select
                }, BB.id)))]
              }), YB.detail && (0, MD.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [YB.detail.completed && (0, MD.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: DB("skyblockGame:completedQuest")
                }), (0, MD.jsx)("h3", {
                  children: (0, MD.jsx)(wD.c, {
                    text: YB.detail.name
                  })
                }), (0, MD.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, MD.jsx)(wD.c, {
                    text: YB.detail.description
                  })
                }), (0, MD.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [YB.detail.progress, null !== YB.detail.clock && (0, MD.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: YB.detail.clock
                  })]
                }), (0, MD.jsx)(aD, {
                  subquests: YB.detail.subquests,
                  showDescriptions: !0
                }), YB.detail.tracked && (0, MD.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: YB.detail.trackLabel
                }), !YB.detail.completed && !YB.detail.tracked && (0, MD.jsx)(WD.q, {
                  onClick: OB.trackSelected,
                  disabled: !YB.detail.canTrack,
                  children: YB.detail.trackLabel
                }), YB.detail.canViewDialogue && (0, MD.jsx)(WD.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: OB.viewDialogue,
                  children: DB("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var bD = GB(1383),
      CD = GB(2898);

    function HD(BB, OB, GB, YB, DB) {
      const QB = BB => "linear" === DB ? BB : {
          nG: DB,
          point: BB
        },
        oB = {};
      for (const [jB, yB] of YB)
        for (const [OB, GB] of Object.entries(BB(jB, yB, QB))) oB[OB] ??= {
          timeline: []
        }, oB[OB].timeline.push(GB);
      return {
        NG: OB,
        loop: GB,
        AG: oB
      }
    }
    const vD = .547,
      sD = .022,
      xD = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      tD = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function BQ(BB, OB, GB) {
      const {
        drop: YB = 0,
        shift: DB = 0,
        torso: QB = 0,
        nod: oB = 0,
        tilt: jB = 0,
        legs: yB = [0, 0],
        arms: JB = 0,
        spread: MB = 0
      } = OB, PB = vD * Math.cos(QB) - sD * Math.sin(QB), zB = vD * Math.sin(QB) + sD * Math.cos(QB), lB = GB([0, -YB, DB]);
      return {
        LowerBody: {
          timeFraction: BB,
          position: lB,
          rotation: GB([0, 0, 0])
        },
        UpperBody: {
          timeFraction: BB,
          position: lB,
          rotation: GB([QB, 0, jB])
        },
        HeadMesh: {
          timeFraction: BB,
          position: GB([0, PB - vD - YB, zB - sD + DB]),
          rotation: GB([QB + oB, 0, jB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          rotation: GB([yB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          rotation: GB([yB[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: GB([JB, 0, MB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: GB([JB, 0, -MB])
        }
      }
    }

    function OQ(BB, OB, GB) {
      return HD(BQ, BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function GQ(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function YQ(BB, OB, GB) {
      const {
        rise: YB = 0,
        shift: DB = 0,
        torso: QB = 0,
        twist: oB = 0,
        tilt: jB = 0,
        nod: yB = 0,
        cock: JB = 0,
        arms: MB = 0,
        spread: PB = 0
      } = OB, [zB, lB] = GQ(MB), [pB, qB] = GQ(PB);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: GB([0, YB, DB]),
          rotation: GB([QB, oB, jB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: GB([yB, 0, JB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: GB([zB, 0, pB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: GB([lB, 0, -qB])
        }
      }
    }
    const DQ = [1.0625, -1, 0];

    function QQ(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function oQ(BB, OB, GB) {
      const {
        drop: YB = 0,
        shift: DB = 0,
        torso: QB = 0,
        tilt: oB = 0,
        nod: jB = 0,
        cock: yB = 0,
        legs: JB = [0, 0],
        arms: MB = 0,
        spread: PB = 0
      } = OB, [zB, lB] = QQ(MB), [pB, qB] = QQ(PB), ZB = -QB, NB = -oB, [RB, WB, AB] = function(BB, OB) {
        const [GB, YB, DB] = [-DQ[0], DQ[1], -DQ[2]], QB = GB * Math.cos(OB) - YB * Math.sin(OB), oB = GB * Math.sin(OB) + YB * Math.cos(OB);
        return [QB - GB, -(oB * Math.cos(BB) - DB * Math.sin(BB) - YB), oB * Math.sin(BB) + DB * Math.cos(BB) - DB]
      }(ZB, NB), VB = GB([0, -YB, DB]);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: GB([RB, WB - YB, AB + DB]),
          rotation: GB([ZB, 0, NB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: GB([-jB, 0, -yB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: GB([-zB, 0, -pB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: GB([-lB, 0, qB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          position: VB,
          rotation: GB([-JB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          position: VB,
          rotation: GB([-JB[1], 0, 0])
        }
      }
    }
    var jQ = GB(37841),
      yQ = GB(39127),
      JQ = GB(39331);

    function MQ(BB, OB, GB) {
      var YB, DB;
      const QB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return BB + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - BB) * GB
        },
        [oB, jB] = null !== (YB = BB.legs) && void 0 !== YB ? YB : [0, 0],
        [yB, JB] = null !== (DB = OB.legs) && void 0 !== DB ? DB : [0, 0];
      return {
        drop: QB(BB.drop, OB.drop),
        shift: QB(BB.shift, OB.shift),
        torso: QB(BB.torso, OB.torso),
        nod: QB(BB.nod, OB.nod),
        tilt: QB(BB.tilt, OB.tilt),
        legs: [QB(oB, yB), QB(jB, JB)],
        arms: QB(BB.arms, OB.arms),
        spread: QB(BB.spread, OB.spread)
      }
    }
    const PQ = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      zQ = OQ(4400, !0, [
        [0, PQ],
        [.16, {
          ...PQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, PQ],
        [.44, {
          ...PQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, MQ(PQ, xD, .7)],
        [.66, MQ(PQ, xD, .78)],
        [.74, MQ(PQ, tD, .65)],
        [.86, {
          ...PQ,
          drop: .14
        }],
        [1, PQ]
      ], "catmull-rom-spline"),
      lQ = {
        ...PQ,
        drop: .14,
        torso: .3,
        spread: .4
      },
      pQ = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      qQ = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      ZQ = {
        caveGolem: zQ,
        magmaGolem: OQ(3600, !0, [
          [0, lQ],
          [.12, {
            ...lQ,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...lQ,
            tilt: -.08
          }],
          [.4, {
            ...lQ,
            tilt: .06,
            drop: .11
          }],
          [.52, MQ(lQ, xD, .9)],
          [.62, MQ(lQ, tD, .8)],
          [.7, MQ(lQ, tD, .45)],
          [.78, MQ(lQ, tD, .85)],
          [.9, {
            ...lQ,
            drop: .17
          }],
          [1, lQ]
        ], "catmull-rom-spline"),
        frostWraith: function(BB, OB, GB) {
          return HD(YQ, BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, pQ],
          [.14, {
            ...pQ,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...pQ,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...pQ,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...pQ,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...pQ,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...pQ,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...pQ,
            rise: .16,
            tilt: -.04
          }],
          [1, pQ]
        ], "catmull-rom-spline"),
        tikiTerror: function(BB, OB, GB) {
          return HD(oQ, BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, qQ],
          [.16, {
            ...qQ,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, qQ],
          [.44, {
            ...qQ,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.56, {
            drop: -.03,
            torso: -.28,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.64, {
            drop: -.03,
            torso: -.32,
            tilt: .05,
            nod: -.52,
            legs: [-.12, .12],
            arms: -1.5,
            spread: 1.2
          }],
          [.72, {
            drop: -.03,
            torso: -.28,
            tilt: -.05,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.86, {
            ...qQ,
            drop: .1
          }],
          [1, qQ]
        ], "catmull-rom-spline")
      },
      NQ = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      RQ = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      WQ = Object.fromEntries(Object.entries(ZQ).map((BB => {
        let [OB, GB] = BB;
        return [OB, (0, JQ.d)((0, jQ.e)(GB), OB)]
      })));

    function AQ(BB) {
      const OB = function(BB) {
        var OB;
        const GB = (0, yQ.b)(BB).poseRig;
        return null !== (OB = RQ[BB]) && void 0 !== OB ? OB : void 0 === GB ? null : NQ[GB]
      }(BB);
      return null === OB ? null : WQ[OB]
    }

    function VQ(BB) {
      return {
        "--difficulty-colour": BB
      }
    }
    const SQ = (0, nB.lazy)((() => (0, CD.e)(GB.e(223).then((() => GB(44665))), (BB => BB.MobPreview))));

    function nQ(BB) {
      var OB, GB, YB;
      let {
        picker: DB,
        controller: QB
      } = BB;
      const {
        t: oB
      } = (0, yD.H)(), jB = VD(), {
        page: yB
      } = DB;
      return (0, MD.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: jB,
        onKeyDown: BB => {
          "ArrowLeft" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), QB.previous()) : "ArrowRight" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), QB.next()) : AD(BB)
        },
        style: VQ(yB.colour),
        children: [(0, MD.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, MD.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: DB.dungeonName
          }), (0, MD.jsx)(WD.m, {
            padIgnore: !0,
            onClick: QB.dismiss
          })]
        }), (0, MD.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, MD.jsx)(WD.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !DB.canPrevious,
              onClick: QB.previous,
              children: (0, MD.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, MD.jsx)(bD.b, {
                  name: "angle-up"
                })
              })
            }), (0, MD.jsxs)("div", {
              className: OD()("SkyblockBossPickerBoss", {
                Locked: !yB.unlocked
              }),
              children: [null !== yB.bossMobType && (0, MD.jsx)(nB.Suspense, {
                fallback: (0, MD.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, MD.jsx)(SQ, {
                  className: "SkyblockBossPickerModel",
                  mobType: yB.bossMobType,
                  variation: yB.bossMobVariation,
                  animation: null !== (OB = AQ(yB.bossMobType)) && void 0 !== OB ? OB : void 0
                })
              }), null === yB.bossMobType && (0, MD.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, MD.jsx)(WD.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !DB.canNext,
              onClick: QB.next,
              children: (0, MD.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, MD.jsx)(bD.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, MD.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [yB.beaten && (0, MD.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), yB.label]
            }), (0, MD.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (GB = yB.bossName) && void 0 !== GB ? GB : "???"
            }), (0, MD.jsxs)("span", {
              className: OD()("SkyblockBossPickerRecord", {
                Locked: null !== yB.lockedHint
              }),
              children: [null !== yB.lockedHintHighlight && (0, MD.jsxs)(MD.Fragment, {
                children: [yB.lockedHintHighlight.before, (0, MD.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: VQ(yB.lockedHintHighlight.colour),
                  children: [null !== yB.lockedHintHighlight.icon && (0, MD.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, MD.jsx)(QD.c, {
                      itemName: yB.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), yB.lockedHintHighlight.name]
                }), yB.lockedHintHighlight.after]
              }), null === yB.lockedHintHighlight && (null !== (YB = yB.lockedHint) && void 0 !== YB ? YB : yB.summary)]
            })]
          }), (0, MD.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: DB.pages.map((BB => (0, MD.jsx)("span", {
              className: OD()("SkyblockBossPickerDot", {
                Current: BB.current,
                Locked: !BB.unlocked
              }),
              style: VQ(BB.colour)
            }, BB.difficulty)))
          }), (0, MD.jsx)(WD.v, {
            className: "SkyblockBossPickerFight",
            disabled: !yB.unlocked,
            onClick: QB.enter,
            children: oB("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function UQ(BB) {
      let {
        dungeon: OB,
        select: GB
      } = BB;
      return (0, MD.jsxs)(WD.f, {
        className: OD()("SkyblockDungeonCard", {
          Selected: OB.selected
        }),
        onClick: () => {
          GB(OB.id)
        },
        children: [(0, MD.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, MD.jsx)("strong", {
            children: OB.name
          }), (0, MD.jsx)("span", {
            children: OB.beatenSummary
          })]
        }), (0, MD.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: OB.difficulties.map((BB => (0, MD.jsxs)("span", {
            className: OD()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: BB.beaten
            }),
            style: VQ(BB.colour),
            title: BB.summary,
            children: [BB.beaten && (0, MD.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), BB.label]
          }, BB.difficulty)))
        })]
      })
    }

    function fQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(CO, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsxs)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [GB.picker && (0, MD.jsx)(nQ, {
          picker: GB.picker,
          controller: OB
        }), !GB.picker && (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: YB("skyblockGame:dungeons")
              }), (0, MD.jsx)("p", {
                children: YB("skyblockGame:dungeonsIntro")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: OB.dismiss
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, MD.jsx)("div", {
              className: "SkyblockDungeonList",
              children: GB.dungeons.map((BB => (0, MD.jsx)(UQ, {
                dungeon: BB,
                select: OB.select
              }, BB.id)))
            }), GB.detail && (0, MD.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, MD.jsx)("h3", {
                children: GB.detail.name
              }), (0, MD.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: GB.detail.difficulties.map((BB => (0, MD.jsxs)("li", {
                  className: OD()("SkyblockDungeonRecord", {
                    Beaten: BB.beaten
                  }),
                  children: [(0, MD.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: VQ(BB.colour),
                    children: [BB.beaten && (0, MD.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), BB.label]
                  }), (0, MD.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: BB.summary
                  })]
                }, BB.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function kQ(BB) {
      let {
        collection: OB,
        select: GB
      } = BB;
      return (0, MD.jsxs)(WD.f, {
        className: OD()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: OB.selected,
          Locked: OB.locked
        }),
        ariaPressed: OB.selected,
        onClick: () => {
          GB(OB.id)
        },
        children: [(0, MD.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, MD.jsx)(QD.c, {
            itemName: OB.icon,
            amount: 0
          })
        }), (0, MD.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, MD.jsx)("strong", {
              children: OB.name
            }), (0, MD.jsx)("span", {
              children: OB.tier
            })]
          }), (0, MD.jsx)(SD, {
            percent: OB.percent,
            label: `${OB.name}: ${OB.progress}`
          }), (0, MD.jsx)("span", {
            className: "SkyblockSkillXp",
            children: OB.progress
          })]
        })]
      })
    }

    function dQ(BB) {
      let {
        collection: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)();
      return (0, MD.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, MD.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, MD.jsx)(QD.c, {
            itemName: OB.icon,
            amount: 0
          })
        }), (0, MD.jsx)("h3", {
          children: OB.name
        }), (0, MD.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: OB.tier
        }), (0, MD.jsx)("p", {
          children: OB.locked ? GB("skyblockGame:collectionLocked") : OB.count
        }), null !== OB.nextReward && (0, MD.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, MD.jsx)("strong", {
            children: GB("skyblockGame:collectionNextReward")
          }), (0, MD.jsx)("span", {
            children: OB.nextReward
          })]
        }), (0, MD.jsx)(SD, {
          percent: OB.percent,
          label: OB.progress
        }), (0, MD.jsx)("p", {
          children: OB.progress
        })]
      })
    }

    function KQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(qG, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: YB("skyblockGame:collections")
              }), (0, MD.jsxs)("p", {
                children: [YB("skyblockGame:collectionsIntro"), " ", GB.tiersUnlocked]
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: OB.dismiss
            })]
          }), (0, MD.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: GB.categories.map((BB => (0, MD.jsxs)(WD.f, {
              className: OD()("SkyblockCollectionCategory", {
                Selected: BB.selected
              }),
              ariaPressed: BB.selected,
              padTabSelected: BB.selected,
              onClick: () => {
                OB.selectCategory(BB.id)
              },
              children: [(0, MD.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, MD.jsx)(QD.c, {
                  itemName: BB.icon,
                  amount: 0
                })
              }), (0, MD.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, MD.jsx)("strong", {
                  children: BB.label
                }), (0, MD.jsx)("span", {
                  children: BB.tiers
                })]
              })]
            }, BB.id)))
          }), (0, MD.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, MD.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: GB.collections.map((BB => (0, MD.jsx)(kQ, {
                collection: BB,
                select: OB.select
              }, BB.id)))
            }), GB.detail && (0, MD.jsx)(dQ, {
              collection: GB.detail
            })]
          })]
        })
      }) : null
    }
    const uQ = ["completed", "active", "available", "locked"],
      mQ = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function IQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(dG, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: YB("skyblockDevQuests:title")
              }), (0, MD.jsx)("p", {
                children: YB("skyblockDevQuests:intro")
              })]
            }), (0, MD.jsx)(WD.m, {
              onClick: OB.dismiss
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [uQ.map((BB => (0, MD.jsx)("span", {
              className: OD()("SkyblockQuestGraphLegendState", BB),
              children: YB(`skyblockDevQuests:state_${BB}`)
            }, BB))), mQ.map((BB => (0, MD.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, MD.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, MD.jsx)("line", {
                  className: OD()("SkyblockQuestGraphEdge", BB),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), YB(`skyblockDevQuests:edge_${BB}`)]
            }, BB)))]
          }), (0, MD.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, MD.jsxs)("div", {
              className: OD()("SkyblockQuestGraphCanvas", {
                Planning: GB.planning
              }),
              style: {
                width: GB.width,
                height: GB.height
              },
              children: [(0, MD.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: GB.width,
                height: GB.height,
                "aria-hidden": "true",
                children: [(0, MD.jsx)("defs", {
                  children: (0, MD.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, MD.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), GB.edges.map((BB => (0, MD.jsx)("path", {
                  className: OD()("SkyblockQuestGraphEdge", BB.kind, {
                    InPlan: BB.inPlan
                  }),
                  d: BB.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, BB.key)))]
              }), GB.nodes.map((BB => (0, MD.jsxs)("button", {
                type: "button",
                className: OD()("SkyblockQuestGraphNode", BB.state, {
                  InPlan: BB.inPlan,
                  Hovered: BB.hovered
                }),
                style: {
                  left: BB.left,
                  top: BB.top,
                  width: 190,
                  height: 52
                },
                title: BB.id,
                onMouseEnter: () => {
                  OB.hover(BB.id)
                },
                onMouseLeave: () => {
                  OB.hover(null)
                },
                onFocus: () => {
                  OB.hover(BB.id)
                },
                onBlur: () => {
                  OB.hover(null)
                },
                onClick: () => {
                  OB.jump(BB.id)
                },
                children: [(0, MD.jsx)("strong", {
                  children: BB.name
                }), (0, MD.jsx)("span", {
                  children: BB.detail
                })]
              }, BB.id)))]
            })
          })]
        })
      }) : null
    }
    const FQ = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      iQ = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${cG}ms`,
        "--forge-duration": "2150ms"
      },
      LQ = Array.from({
        length: 18
      }, ((BB, OB) => ({
        "--ember-left": `${(4+92*(.618034*OB%1)).toFixed(1)}%`,
        "--ember-size": 3 + OB % 3 * 2 + "px",
        "--ember-drift": 14 * (OB % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*OB%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*OB%8).toFixed(2)}s`
      })));

    function gQ(BB) {
      if (BB.style.removeProperty("--part-size"), null === BB.parentElement || "wrap" === getComputedStyle(BB.parentElement).flexWrap) return;
      const OB = [...BB.children],
        GB = getComputedStyle(BB),
        YB = parseFloat(GB.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        DB = (BB.clientHeight - parseFloat(GB.rowGap) * (OB.length - 1)) / OB.length,
        QB = OB.map((BB => {
          const OB = getComputedStyle(BB),
            GB = BB.querySelector("h3"),
            QB = BB.querySelector(".SkyblockForgeParts");
          if (null === GB || null === QB) return YB;
          const oB = DB - parseFloat(OB.paddingTop) - parseFloat(OB.paddingBottom) - GB.offsetHeight - parseFloat(getComputedStyle(GB).marginBottom),
            jB = parseFloat(getComputedStyle(QB).columnGap),
            yB = QB.children.length;
          let JB = 0;
          for (let YB = 1; YB <= yB; YB++) {
            const BB = Math.ceil(yB / YB);
            JB = Math.max(JB, Math.min((QB.clientWidth - jB * (YB - 1)) / YB, (oB - jB * (BB - 1)) / BB))
          }
          return JB
        }));
      BB.style.setProperty("--part-size", `${Math.floor(Math.max(YB,Math.min(...QB)))}px`)
    }

    function rQ(BB) {
      var OB, GB, YB, DB, QB;
      let {
        controller: oB
      } = BB;
      const jB = (0, JD.i)(HG, oB.getSnapshot()),
        {
          t: yB
        } = (0, yD.H)(),
        JB = VD(),
        MB = function() {
          const BB = (0, nB.useRef)(null),
            OB = (0, nB.useRef)(null);
          return (0, nB.useLayoutEffect)((() => {
            null !== BB.current && gQ(BB.current)
          })), (0, nB.useCallback)((GB => {
            var YB;
            null === (YB = OB.current) || void 0 === YB || YB.disconnect(), OB.current = null, BB.current = GB, null !== GB && (OB.current = new ResizeObserver((() => {
              gQ(GB)
            })), OB.current.observe(GB))
          }), [])
        }(),
        zB = function(BB) {
          const OB = (0, nB.useRef)(null);
          return (0, nB.useLayoutEffect)((() => {
            const BB = OB.current;
            if (null !== BB) {
              BB.style.removeProperty("font-size");
              for (let OB = 1.7; OB > 1.1 && BB.scrollWidth > BB.clientWidth; OB -= .1) BB.style.fontSize = OB - .1 + "rem"
            }
          }), [BB]), (0, nB.useCallback)((BB => {
            OB.current = BB
          }), [])
        }(null === (OB = jB.preview) || void 0 === OB ? void 0 : OB.name),
        lB = (0, nB.useRef)(null),
        pB = (0, nB.useRef)({}),
        qB = jB.forging,
        ZB = null !== (GB = null === qB || void 0 === qB ? void 0 : qB.preview.tier) && void 0 !== GB ? GB : 0,
        NB = null !== (YB = null === qB || void 0 === qB ? void 0 : qB.preview.named) && void 0 !== YB && YB,
        RB = (0, nB.useMemo)((() => {
          return null === qB ? null : {
            flames: (BB = ZB, OB = NB, Array.from({
              length: 26 + 6 * BB + (OB ? 20 : 0)
            }, ((BB, OB) => {
              const GB = OB < 6,
                YB = Math.random() * Math.PI * 2,
                DB = GB ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                QB = Math.cos(YB) * DB,
                oB = Math.sin(YB) * DB - 2 - 3 * Math.random(),
                jB = Math.random(),
                [yB, JB, MB] = GB ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : jB < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : jB < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [jB < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": yB,
                "--x0": `${(.15*QB).toFixed(2)}rem`,
                "--y0": `${(.15*oB).toFixed(2)}rem`,
                "--x": `${QB.toFixed(2)}rem`,
                "--y": `${oB.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${JB.toFixed(2)}rem`,
                "--duration": `${Math.round(MB)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: eG(ZB, NB)
          };
          var BB, OB
        }), [null === qB || void 0 === qB ? void 0 : qB.id]);
      if (!jB.enabled) return null;
      const WB = jB.preview,
        AB = jB.arriving,
        VB = null !== AB && !AB.sameSword,
        SB = null !== WB && (0, MD.jsx)(QD.c, {
          itemName: WB.baseSword,
          amount: 0,
          enchantmentTier: WB.enchantmentTier
        });
      return (0, MD.jsx)(RD.d, {
        show: jB.open,
        close: oB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: AD,
          children: [(0, MD.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: LQ.map(((BB, OB) => (0, MD.jsx)("span", {
              style: BB
            }, OB)))
          }), (0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: yB("skyblockGame:forgeTitle")
              }), (0, MD.jsx)("p", {
                children: yB("skyblockGame:forgeIntro")
              })]
            }), (0, MD.jsx)(WD.m, {
              onClick: oB.dismiss
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, MD.jsx)("div", {
              ref: MB,
              className: OD()("SkyblockForgeSlots", {
                Locked: null !== qB
              }),
              children: jB.slots.map((BB => (0, MD.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, MD.jsx)("h3", {
                  children: BB.label
                }), (0, MD.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: BB.parts.map((OB => (0, MD.jsx)("button", {
                    type: "button",
                    className: OD()("SkyblockForgePart", {
                      Selected: OB.selected,
                      Missing: OB.placeholder
                    }),
                    disabled: OB.placeholder,
                    title: OB.placeholder ? yB("skyblockGame:forgePickParts") : OB.itemName,
                    "aria-pressed": OB.selected,
                    onClick: () => {
                      oB.select(BB.kind, OB.material)
                    },
                    children: (0, MD.jsx)(QD.c, {
                      itemName: OB.itemName,
                      amount: OB.owned
                    })
                  }, OB.material)))
                })]
              }, BB.kind)))
            }), (0, MD.jsxs)("div", {
              className: OD()("SkyblockForgeAnvil", {
                Named: null === WB || void 0 === WB ? void 0 : WB.named
              }),
              style: {
                "--tier": null === WB ? "transparent" : PB.ub[WB.enchantmentTier]
              },
              children: [(0, MD.jsxs)("div", {
                className: OD()("SkyblockForgeAltar", {
                  Forging: null !== qB
                }),
                style: null === qB ? void 0 : iQ,
                children: [(0, MD.jsxs)("div", {
                  className: OD()("SkyblockForgeMount", {
                    Arrive: null !== AB
                  }),
                  children: [null === WB && (0, MD.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, MD.jsx)(QD.c, {
                      itemName: jB.unformedSword,
                      amount: 0
                    })
                  }), null !== WB && (0, MD.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== WB && null === qB && (0, MD.jsx)("div", {
                    ref: lB,
                    className: "SkyblockForgeFloat",
                    children: (0, MD.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: SB
                    })
                  }), null !== WB && (0, MD.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: aG.map(((BB, OB) => (0, MD.jsx)("span", {
                      className: OD()({
                        Rune: "" !== BB.rune
                      }),
                      style: BB.style,
                      children: BB.rune
                    }, OB)))
                  }), null !== qB && null !== RB && (0, MD.jsxs)(MD.Fragment, {
                    children: [(0, MD.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: RB.flames.map(((BB, OB) => (0, MD.jsx)("span", {
                        style: BB
                      }, OB)))
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: pB.current,
                      children: (0, MD.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: SB
                      })
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (ZB >= 4 || NB) && (0, MD.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: RB.sparks.map(((BB, OB) => (0, MD.jsx)("span", {
                        style: BB
                      }, OB)))
                    }), (0, MD.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, MD.jsx)("p", {
                  className: OD()("SkyblockForgeStatus", null === (DB = jB.status) || void 0 === DB ? void 0 : DB.tone),
                  children: null === (QB = jB.status) || void 0 === QB ? void 0 : QB.text
                })]
              }), null === WB && (0, MD.jsx)("p", {
                className: OD()("SkyblockForgeName Waiting", {
                  ArriveText: VB
                }),
                children: yB(jB.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== WB && (0, MD.jsx)("h3", {
                ref: zB,
                className: OD()("SkyblockForgeName", {
                  ArriveText: VB
                }),
                title: WB.name,
                children: WB.name
              }), (null === WB || void 0 === WB ? void 0 : WB.named) && (0, MD.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: yB("skyblockGame:forgeSecret")
              }), (0, MD.jsxs)(WD.v, {
                className: "SkyblockForgeButton",
                disabled: !jB.canForge,
                title: null === WB ? void 0 : yB("skyblockGame:forgeCoalOwned", {
                  owned: String(jB.coalOwned)
                }),
                onClick: () => {
                  pB.current = function(BB) {
                    const OB = null === BB ? "none" : getComputedStyle(BB).transform,
                      GB = new DOMMatrixReadOnly("none" === OB ? void 0 : OB);
                    return {
                      "--settle-y": `${GB.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(GB.b,GB.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(lB.current), CG(), oB.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [yB("skyblockGame:forgeButton"), null !== WB && (0, MD.jsxs)("span", {
                  className: OD()("SkyblockForgeCost", {
                    Short: WB.coalShort
                  }),
                  children: [(0, MD.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, MD.jsx)(QD.c, {
                      itemName: FG.c,
                      amount: 0
                    })
                  }), WB.coalCost]
                })]
              })]
            }), (0, MD.jsxs)("div", {
              className: OD()("SkyblockForgeDetails", {
                Named: null === WB || void 0 === WB ? void 0 : WB.named
              }),
              children: [(0, MD.jsx)("p", {
                className: OD()("SkyblockForgeLore", {
                  ArriveText: VB
                }),
                title: null === WB || void 0 === WB ? void 0 : WB.lore,
                children: null === WB || void 0 === WB ? void 0 : WB.lore
              }), (0, MD.jsxs)("dl", {
                className: OD()("SkyblockForgeStats", {
                  ArriveText: VB
                }),
                children: [null === WB && FQ.map((BB => (0, MD.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, MD.jsx)("dt", {
                    children: yB(BB)
                  }), (0, MD.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, BB))), null === WB || void 0 === WB ? void 0 : WB.stats.map((BB => (0, MD.jsxs)("div", {
                  className: OD()("SkyblockForgeStat", {
                    Better: BB.better
                  }),
                  children: [(0, MD.jsx)("dt", {
                    children: BB.label
                  }), (0, MD.jsx)("dd", {
                    children: BB.value
                  })]
                }, BB.label)))]
              }), (0, MD.jsx)("ul", {
                className: OD()("SkyblockForgeEffects", {
                  ArriveText: VB
                }),
                children: null === WB || void 0 === WB ? void 0 : WB.effects.map((BB => (0, MD.jsx)("li", {
                  children: BB
                }, BB)))
              })]
            })]
          })]
        })
      })
    }
    const XQ = "Doom Rivet",
      wQ = "Doom Crest";

    function EQ(BB) {
      let {
        itemName: OB,
        amount: GB,
        owned: YB
      } = BB;
      return (0, MD.jsxs)("span", {
        className: OD()("SkyblockSmugglerPrice", {
          Short: GB > YB
        }),
        children: [(0, MD.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, MD.jsx)(QD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, MD.jsx)("span", {
          children: GB
        })]
      })
    }

    function cQ(BB) {
      return BB.justBought ? "skyblockGame:smugglerJustBought" : BB.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function hQ(BB) {
      let {
        deal: OB,
        view: GB,
        buy: YB
      } = BB;
      const {
        t: DB
      } = (0, yD.H)();
      return (0, MD.jsxs)("div", {
        className: OD()("SkyblockSmugglerPocket", {
          Bought: OB.justBought,
          Unaffordable: !OB.affordable,
          SoldOut: OB.soldOut && !OB.justBought
        }),
        children: [(0, MD.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, MD.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, MD.jsx)(QD.c, {
            itemName: OB.itemName,
            amount: 0,
            enchantmentTier: OB.enchantmentTier
          }), OB.amount > 1 && (0, MD.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: DB("skyblockGame:smugglerAmount", {
              amount: OB.amount
            })
          })]
        }), (0, MD.jsx)("h3", {
          children: OB.displayName
        }), (0, MD.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [OB.rivets > 0 && (0, MD.jsx)(EQ, {
              itemName: XQ,
              amount: OB.rivets,
              owned: GB.rivetsOwned
            }), OB.crests > 0 && (0, MD.jsx)(EQ, {
              itemName: wQ,
              amount: OB.crests,
              owned: GB.crestsOwned
            })]
          }), (0, MD.jsx)(WD.f, {
            className: "SkyblockSmugglerBuy",
            disabled: OB.soldOut || !OB.affordable || GB.pending,
            onClick: () => {
              YB(OB.slot)
            },
            children: DB(cQ(OB))
          })]
        })]
      }, OB.justBought ? GB.boughtCount : 0)
    }

    function aQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(xG, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, MD.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, MD.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: YB("skyblockGame:smugglerTitle")
              }), (0, MD.jsx)("p", {
                children: YB("skyblockGame:smugglerIntro")
              })]
            }), (0, MD.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, MD.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, MD.jsx)(EQ, {
                  itemName: XQ,
                  amount: GB.rivetsOwned,
                  owned: GB.rivetsOwned
                }), (0, MD.jsx)(EQ, {
                  itemName: wQ,
                  amount: GB.crestsOwned,
                  owned: GB.crestsOwned
                })]
              }), (0, MD.jsx)(WD.m, {
                onClick: OB.dismiss
              })]
            })]
          }), (0, MD.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: GB.deals.map((BB => (0, MD.jsx)(hQ, {
              deal: BB,
              view: GB,
              buy: OB.buy
            }, BB.slot)))
          }), (0, MD.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, MD.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: GB.rotatesText
            }), null !== GB.status && (0, MD.jsx)("span", {
              className: OD()("SkyblockSmugglerStatus", GB.status.tone),
              children: GB.status.text
            })]
          })]
        })
      }) : null
    }

    function eQ(BB) {
      let {
        phase: OB,
        className: GB
      } = BB;
      return (0, MD.jsx)("span", {
        className: OD()("SkyblockMoon", `Moon-${OB}`, GB),
        "aria-hidden": "true"
      })
    }

    function TQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(OY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)();
      return GB.enabled ? (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: OD()("SkyblockPassageChip", GB.open && "Open"),
          "aria-label": YB("skyblockGame:passageChipLabel", {
            phase: GB.phaseName
          }),
          title: YB("skyblockGame:passageChipLabel", {
            phase: GB.phaseName
          }),
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: OB.toggle,
          children: (0, MD.jsx)(eQ, {
            phase: GB.phase
          }, GB.phase)
        })
      }) : null
    }

    function bQ(BB) {
      let {
        fish: OB
      } = BB;
      return (0, MD.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, MD.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, MD.jsx)(QD.c, {
            itemName: OB.itemName,
            amount: 0
          })
        }), (0, MD.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: OB.displayName
          }), (0, MD.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: OB.where
          })]
        })]
      })
    }

    function CQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(OY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, MD.jsx)(eQ, {
              phase: GB.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: YB("skyblockGame:passageTitle")
              }), (0, MD.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: GB.phaseName
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: OB.dismiss
            })]
          }), (0, MD.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: YB("skyblockGame:passageIntro")
          }), (0, MD.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, MD.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, MD.jsx)("h3", {
                children: YB("skyblockGame:passageVisiting")
              }), (0, MD.jsx)("ul", {
                className: "SkyblockPassageList",
                children: GB.visitors.map((BB => (0, MD.jsx)(bQ, {
                  fish: BB
                }, BB.itemName)))
              })]
            }), (0, MD.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== GB.resting && (0, MD.jsxs)(MD.Fragment, {
                children: [(0, MD.jsx)("h3", {
                  children: YB("skyblockGame:passageResting")
                }), (0, MD.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, MD.jsx)(bQ, {
                    fish: GB.resting
                  })
                })]
              }), (0, MD.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, MD.jsx)(eQ, {
                  phase: GB.nextPhase
                }), (0, MD.jsx)("span", {
                  children: GB.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function HQ() {
      return (0, MD.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((BB => (0, MD.jsx)("i", {
          style: {
            "--sparkle-index": BB
          }
        }, BB)))
      })
    }

    function vQ(BB) {
      var OB;
      let {
        charm: GB,
        view: YB,
        controller: DB
      } = BB;
      const {
        t: QB
      } = (0, yD.H)(), oB = YB.shop, jB = (null === (OB = YB.sparkle) || void 0 === OB ? void 0 : OB.id) === GB.id;
      return (0, MD.jsxs)("li", {
        className: OD()("SkyblockLampLightCharm", GB.owned && "Owned", GB.socketed && "Socketed"),
        children: [jB && (0, MD.jsx)(HQ, {}, YB.sparkle.count), (0, MD.jsx)("h4", {
          children: GB.name
        }), (0, MD.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: GB.effect
        }), (0, MD.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: GB.lines.map((BB => (0, MD.jsxs)("li", {
            className: OD()("SkyblockLampLightOddsLine", "better" === BB.tone ? "Better" : "worse" === BB.tone ? "Worse" : "Same"),
            children: [(0, MD.jsx)("span", {
              className: "Before",
              children: BB.before
            }), (0, MD.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, MD.jsx)("span", {
              className: "After",
              children: BB.after
            })]
          }, BB.label)))
        }), (0, MD.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: GB.owned ? GB.socketed ? (0, MD.jsxs)(MD.Fragment, {
            children: [(0, MD.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: QB("skyblockGame:lampLightSocketed")
            }), (0, MD.jsx)(WD.Z, {
              disabled: !YB.canCommand,
              ariaLabel: QB("skyblockGame:lampLightRemoveLabel", {
                charm: GB.name
              }),
              onClick: () => {
                DB.socket(null)
              },
              children: QB("skyblockGame:lampLightRemove")
            })]
          }) : (0, MD.jsx)(WD.f, {
            disabled: !YB.canCommand || !oB.heldRod,
            ariaLabel: QB("skyblockGame:lampLightSocketLabel", {
              charm: GB.name
            }),
            onClick: () => {
              DB.socket(GB.id)
            },
            children: QB("skyblockGame:lampLightSocket")
          }) : (0, MD.jsx)(WD.f, {
            disabled: !YB.canCommand || !GB.affordable,
            ariaLabel: QB("skyblockGame:lampLightBuyLabel", {
              item: GB.name,
              cost: GB.cost
            }),
            onClick: () => {
              DB.buy(GB.id)
            },
            children: GB.cost
          })
        })]
      })
    }

    function sQ(BB) {
      var OB;
      let {
        tint: GB,
        view: YB,
        controller: DB
      } = BB;
      const {
        t: QB
      } = (0, yD.H)();
      return (0, MD.jsxs)("li", {
        className: OD()("SkyblockLampLightTint", GB.wearing && "Wearing"),
        style: {
          "--tint-colour": GB.colour
        },
        children: [(null === (OB = YB.sparkle) || void 0 === OB ? void 0 : OB.id) === GB.id && (0, MD.jsx)(HQ, {}, YB.sparkle.count), (0, MD.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, MD.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: GB.name
        }), GB.wearing ? (0, MD.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: QB("skyblockGame:lampLightWearing")
        }) : (0, MD.jsx)(WD.f, {
          disabled: !YB.canCommand || !GB.owned && !GB.affordable,
          ariaLabel: GB.owned ? QB("skyblockGame:lampLightWearLabel", {
            tint: GB.name
          }) : QB("skyblockGame:lampLightBuyLabel", {
            item: GB.name,
            cost: GB.cost
          }),
          onClick: () => {
            GB.owned ? DB.wearTint(GB.id) : DB.buy(GB.id)
          },
          children: GB.owned ? QB("skyblockGame:lampLightWear") : GB.cost
        })]
      })
    }

    function xQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(qY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = GB.shop;
      return (0, MD.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, MD.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: GB.balance
          }), (0, MD.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": GB.releasing,
            className: OD()("SkyblockLampLightSwitch", GB.releasing && "On"),
            disabled: GB.releasing ? "ready" !== GB.status : !GB.canCommand,
            onClick: () => {
              OB.setRelease(!GB.releasing)
            },
            children: [(0, MD.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, MD.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), YB("skyblockGame:lampLightRelease")]
          }), (0, MD.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: YB("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== GB.notice && (0, MD.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: GB.notice
        }), null !== DB && (0, MD.jsxs)(MD.Fragment, {
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, MD.jsx)("h3", {
              children: YB("skyblockGame:lampLightCharms")
            }), (0, MD.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: DB.oddsFor
            }), (0, MD.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((BB => (0, MD.jsx)("button", {
                type: "button",
                "aria-pressed": GB.situation === BB,
                className: OD()("SkyblockLampLightSituation", GB.situation === BB && "Selected"),
                onClick: () => {
                  OB.setSituation(BB)
                },
                children: YB("open" === BB ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, BB)))
            })]
          }), !DB.heldRod && (0, MD.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: YB("skyblockGame:lampLightHoldRod")
          }), (0, MD.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: DB.charms.map((BB => (0, MD.jsx)(vQ, {
              charm: BB,
              view: GB,
              controller: OB
            }, BB.id)))
          }), (0, MD.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, MD.jsx)("h3", {
              children: YB("skyblockGame:lampLightTints")
            })
          }), (0, MD.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, MD.jsxs)("li", {
              className: OD()("SkyblockLampLightTint", "Islands", DB.wearingIslandColours && "Wearing"),
              children: [(0, MD.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, MD.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: YB("skyblockGame:lampLightIslandColours")
              }), DB.wearingIslandColours ? (0, MD.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: YB("skyblockGame:lampLightWearing")
              }) : (0, MD.jsx)(WD.f, {
                disabled: !GB.canCommand,
                ariaLabel: YB("skyblockGame:lampLightWearLabel", {
                  tint: YB("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  OB.wearTint(null)
                },
                children: YB("skyblockGame:lampLightWear")
              })]
            }), DB.tints.map((BB => (0, MD.jsx)(sQ, {
              tint: BB,
              view: GB,
              controller: OB
            }, BB.id)))]
          })]
        })]
      })
    }

    function tQ(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(qY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)();
      return GB.releasing ? (0, MD.jsx)(YD.e, {
        children: (0, MD.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            OB.setRelease(!1)
          },
          children: [(0, MD.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, MD.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [YB("skyblockGame:lampLightReleasing"), " \xb7 ", GB.balance]
          }), (0, MD.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: YB("skyblockGame:lampLightKeepCatches")
          }), null !== GB.gained && (0, MD.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: GB.gained.text
          }, GB.gained.count)]
        })
      }) : null
    }

    function Bo(BB) {
      let {
        island: OB,
        view: GB,
        aim: YB
      } = BB;
      const {
        t: DB
      } = (0, yD.H)(), QB = OB.featuredFish;
      return (0, MD.jsxs)("li", {
        className: OD()("SkyblockKeepersChairIsland", `Island-${OB.id}`, OB.favoured && "Aimed", !OB.relit && "Dark"),
        children: [(0, MD.jsx)("h3", {
          children: OB.name
        }), OB.relit && null !== QB ? (0, MD.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: DB("skyblockGame:keepersChairTideNotice")
          }), (0, MD.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, MD.jsx)(QD.c, {
              itemName: QB.itemName,
              amount: 0
            })
          }), (0, MD.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: QB.displayName
          })]
        }) : (0, MD.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, MD.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: DB("skyblockGame:keepersChairDark")
          })
        }), OB.relit && (OB.favoured ? (0, MD.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: DB("skyblockGame:keepersChairAimed")
        }) : (0, MD.jsx)(WD.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !GB.canAim,
          ariaLabel: DB("skyblockGame:keepersChairAimLabel", {
            island: OB.name
          }),
          onClick: () => {
            YB(OB.id)
          },
          children: DB("skyblockGame:keepersChairAim")
        }))]
      }, OB.favoured ? GB.aimedCount : 0)
    }

    function Oo(BB) {
      let {
        controller: OB,
        lampLight: GB
      } = BB;
      const YB = (0, JD.i)(jY, OB.getSnapshot()),
        DB = (0, JD.i)(qY, GB.getSnapshot()),
        [QB, oB] = (0, nB.useState)("lamp"),
        {
          t: jB
        } = (0, yD.H)(),
        yB = VD();
      if (!YB.enabled) return null;
      const JB = "light" === QB && DB.enabled;
      return (0, MD.jsx)(RD.d, {
        show: YB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: OD()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", JB && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: jB("skyblockGame:keepersChairTitle")
              }), (0, MD.jsx)("p", {
                children: jB(JB ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              ariaLabel: jB("skyblockGame:keepersChairClose"),
              onClick: OB.dismiss
            })]
          }), DB.enabled && (0, MD.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((BB => (0, MD.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === BB === JB,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === BB === JB ? "true" : void 0,
              className: OD()("SkyblockKeepersChairTab", "light" === BB === JB && "Selected"),
              onClick: () => {
                oB(BB)
              },
              children: [jB("lamp" === BB ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === BB && (0, MD.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: DB.balance
              })]
            }, BB)))
          }), JB ? (0, MD.jsx)(xQ, {
            controller: GB
          }) : (0, MD.jsx)(Go, {
            view: YB,
            controller: OB
          })]
        })
      })
    }

    function Go(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)();
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: OB.islands.map((BB => (0, MD.jsx)(Bo, {
            island: BB,
            view: OB,
            aim: GB.aim
          }, BB.id)))
        }), null !== OB.almanac && (0, MD.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: YB("skyblockGame:passageTitle")
          }), (0, MD.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, MD.jsx)(eQ, {
              phase: OB.almanac.phase
            }), OB.almanac.phaseName]
          }), (0, MD.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, MD.jsx)(eQ, {
              phase: OB.almanac.nextPhase
            }), OB.almanac.next]
          })]
        }), (0, MD.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: YB("skyblockGame:keepersChairFavour")
          }), OB.aimed && (0, MD.jsx)(WD.Z, {
            className: "SkyblockKeepersChairRest",
            disabled: !OB.canAim,
            onClick: () => {
              GB.aim(null)
            },
            children: YB("skyblockGame:keepersChairRest")
          })]
        }), null !== OB.status && (0, MD.jsx)("p", {
          className: OD()("SkyblockKeepersChairStatus", "refused" === OB.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: OB.status.text
        })]
      })
    }

    function Yo(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(JY, OB.getSnapshot());
      if (!YB.enabled) return null;
      const DB = YB.freshCount > 0 ? GB("skyblockGame:reachLogOpenNews", {
        count: YB.freshCount
      }) : GB("skyblockGame:reachLogOpen");
      return (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsxs)("button", {
          type: "button",
          className: OD()("SkyblockReachLogButton", YB.freshCount > 0 && "HasNews", YB.pending && "Pending"),
          "aria-label": DB,
          title: DB,
          onClick: OB.ask,
          children: [YB.news && (0, MD.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${YB.newsToken}`), (0, MD.jsx)("span", {
            className: OD()("SkyblockReachLogIcon", YB.news && "Jump"),
            "aria-hidden": "true",
            children: (0, MD.jsx)(QD.c, {
              itemName: PY,
              amount: 0
            })
          }, `icon:${YB.newsToken}`), YB.freshCount > 0 && (0, MD.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: YB.freshCount
          })]
        })
      })
    }

    function Do(BB) {
      let {
        gift: OB
      } = BB;
      return (0, MD.jsx)("li", {
        className: OD()("SkyblockRegularsGift", OB.given && "Given"),
        children: OB.text
      })
    }

    function Qo(BB) {
      let {
        regular: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)();
      return (0, MD.jsxs)("li", {
        className: OD()("SkyblockRegularsCard", OB.tagged ? "Tagged" : "Untagged", OB.resting && "Resting"),
        children: [(0, MD.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: OB.fishName,
            children: (0, MD.jsx)(QD.c, {
              itemName: OB.itemName,
              amount: 0
            })
          }), (0, MD.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, MD.jsx)("h3", {
              children: OB.name
            }), (0, MD.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: OB.fishName
            })]
          })]
        }), (0, MD.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: OB.line
        }), (0, MD.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: OB.size
          }), OB.tagged && (0, MD.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: OB.resting ? GB("skyblockGame:regularsResting") : OB.meetings
          })]
        }), (0, MD.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: OB.chance
        }), (0, MD.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: OB.gifts.map((BB => (0, MD.jsx)(Do, {
            gift: BB
          }, BB.text)))
        }), OB.history.length > 0 && (0, MD.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: OB.history.map(((BB, OB) => (0, MD.jsx)("li", {
            children: BB
          }, OB)))
        })]
      })
    }

    function oo(BB) {
      let {
        controller: OB,
        island: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)(), DB = (0, JD.i)(iY, OB.getSnapshot()), QB = DB.islands.find((BB => BB.id === GB));
      if (!DB.enabled || void 0 === QB) return null;
      const oB = YB("skyblockGame:regularsOpen");
      return (0, MD.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": oB,
        title: oB,
        onClick: () => {
          OB.openIsland(GB)
        },
        children: [(0, MD.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: YB("skyblockGame:regularsTitle")
        }), QB.regulars.map((BB => (0, MD.jsx)("span", {
          className: OD()("SkyblockRegularsStripIcon", BB.tagged && "Tagged"),
          title: BB.name,
          children: (0, MD.jsx)(QD.c, {
            itemName: BB.itemName,
            amount: 0
          })
        }, BB.id)))]
      })
    }

    function jo(BB) {
      var OB;
      let {
        controller: GB
      } = BB;
      const YB = (0, JD.i)(iY, GB.getSnapshot()),
        {
          t: DB
        } = (0, yD.H)(),
        QB = VD();
      if (!YB.enabled) return null;
      const oB = null !== (OB = YB.islands.find((BB => BB.id === YB.selected))) && void 0 !== OB ? OB : null;
      return (0, MD.jsx)(RD.d, {
        show: YB.open,
        close: GB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: QB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: DB("skyblockGame:regularsTitle")
              }), (0, MD.jsx)("p", {
                children: DB("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: GB.dismiss
            })]
          }), (0, MD.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: YB.islands.map((BB => {
              const OB = BB.id === YB.selected;
              return (0, MD.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": OB,
                "data-pad-tab": !0,
                "data-pad-selected": OB ? "true" : void 0,
                className: OD()("SkyblockReachLogTab", `Island-${BB.id}`, OB && "Selected", BB.charm.given && "GoldPage"),
                onClick: () => {
                  GB.selectIsland(BB.id)
                },
                children: (0, MD.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                })
              }, BB.id)
            }))
          }), (0, MD.jsxs)("div", {
            className: OD()("SkyblockRegularsPage", null !== oB && `Island-${oB.id}`),
            role: "tabpanel",
            children: [(0, MD.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: DB("skyblockGame:regularsHow")
            }), null !== oB && (0, MD.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: oB.regulars.map((BB => (0, MD.jsx)(Qo, {
                regular: BB
              }, BB.id)))
            })]
          }), null !== oB && (0, MD.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, MD.jsx)("span", {
              className: OD()("SkyblockRegularsCharm", oB.charm.given && "Given"),
              children: oB.charm.text
            })
          })]
        })
      })
    }
    const yo = [{
        "--left": "12%",
        "--tilt": "14deg",
        "--duration": "11s",
        "--delay": "-3s"
      }, {
        "--left": "62%",
        "--tilt": "-10deg",
        "--duration": "14s",
        "--delay": "-9s"
      }],
      Jo = Array.from({
        length: 6
      }, ((BB, OB) => ({
        "--x": `${(88*(.618034*OB%1)).toFixed(1)}%`,
        "--y": `${(10+37*OB%70).toFixed(1)}%`,
        "--size": 7 + OB % 3 * 3 + "rem",
        "--drift-x": 3 * (OB % 3 - 1) + "rem",
        "--drift-y": 2 * (OB % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + OB % 4 * 3 + "s",
        "--delay": 2.5 * -OB + "s"
      }))),
      Mo = Array.from({
        length: 14
      }, ((BB, OB) => ({
        "--left": `${(3+94*((.618034*OB+.3)%1)).toFixed(1)}%`,
        "--size": 4 + OB % 4 * 2 + "px",
        "--sway": OB % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*OB%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*OB%12).toFixed(2)}s`
      }))),
      Po = (0, nB.memo)((function(BB) {
        let {
          island: OB
        } = BB;
        return (0, MD.jsxs)("div", {
          className: OD()("SkyblockReachLogDepths", null !== OB && `Island-${OB}`),
          "aria-hidden": "true",
          children: [yo.map(((BB, OB) => (0, MD.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: BB
          }, `shaft${OB}`))), Jo.map(((BB, OB) => (0, MD.jsx)("span", {
            className: OD()("SkyblockReachLogMote", OB % 2 === 1 && "Violet"),
            style: BB
          }, `mote${OB}`))), Mo.map(((BB, OB) => (0, MD.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: BB
          }, `bubble${OB}`)))]
        })
      })),
      zo = 100;

    function po(BB) {
      let {
        view: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)();
      if (null === OB || 0 === OB.total) return null;
      const YB = zo * OB.aspect,
        DB = GB("skyblockGame:hiddenWatersCount", {
          found: OB.found,
          total: OB.total
        });
      return (0, MD.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${GB("skyblockGame:hiddenWatersTitle")}: ${DB}`,
        children: [(0, MD.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${YB}`,
          "aria-hidden": "true",
          children: [OB.islands.map(((BB, OB) => (0, MD.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (BB.left + BB.width / 2) * zo,
            cy: (BB.top + BB.height / 2) * YB,
            rx: BB.width / 2 * zo,
            ry: BB.height / 2 * YB
          }, OB))), OB.pins.map(((BB, OB) => (0, MD.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: BB.left * zo,
            cy: BB.top * YB,
            r: 13
          }, OB)))]
        }), (0, MD.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, MD.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: GB("skyblockGame:hiddenWatersTitle")
          }), (0, MD.jsx)("span", {
            className: OB.found === OB.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: DB
          })]
        })]
      })
    }

    function qo(BB) {
      let {
        view: OB,
        island: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)(), DB = null === OB || void 0 === OB ? void 0 : OB.glimpses.get(GB);
      return void 0 === DB || 0 === DB.length ? null : (0, MD.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, MD.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: YB("skyblockGame:hiddenWatersGlimpsed")
        }), (0, MD.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: DB.map((BB => (0, MD.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, MD.jsx)(QD.c, {
              itemName: BB,
              amount: 0
            })
          }, BB)))
        })]
      })
    }
    const Zo = ["Bronze", "Silver", "Gold"],
      No = [{
        className: "Bloom",
        titleKey: "skyblockGame:reachLogRibbonBloomTitle",
        legendKey: "skyblockGame:reachLogLegendBloom"
      }, {
        className: "Chart",
        titleKey: "skyblockGame:reachLogRibbonChartTitle",
        legendKey: "skyblockGame:reachLogLegendChart"
      }, {
        className: "LetGo",
        titleKey: "skyblockGame:reachLogRibbonLetGoTitle",
        legendKey: "skyblockGame:reachLogLegendLetGo"
      }],
      Ro = No.slice(0, 2);

    function Wo(BB) {
      return BB ? No : Ro
    }

    function Ao(BB) {
      let {
        fish: OB,
        letGoShown: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)();
      return (0, MD.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Zo.map(((BB, GB) => {
          const DB = GB < OB.marks;
          return (0, MD.jsx)("span", {
            className: OD()("SkyblockReachLogPip", BB, DB && "Earned", DB && OB.fresh && GB === OB.marks - 1 && "Newest"),
            title: YB(MY[GB])
          }, BB)
        })), (0, MD.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Wo(GB).map(((BB, GB) => (0, MD.jsx)("span", {
          className: OD()("SkyblockReachLogRibbon", BB.className, !0 === OB.ribbons[GB] && "Earned"),
          title: YB(BB.titleKey)
        }, BB.className)))]
      })
    }

    function Vo(BB) {
      let {
        letGoShown: OB,
        haloShown: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)();
      return (0, MD.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, MD.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: YB("skyblockGame:reachLogMarks"),
          children: [(0, MD.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), YB("skyblockGame:reachLogLegendMarks")]
        }), Wo(OB).map((BB => (0, MD.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: YB(BB.titleKey),
          children: [(0, MD.jsx)("span", {
            className: OD()("SkyblockReachLogRibbon", BB.className, "Earned")
          }), YB(BB.legendKey)]
        }, BB.className))), (0, MD.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: YB("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, MD.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), YB("skyblockGame:reachLogLegendGlimmer")]
        }), GB && (0, MD.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: YB("skyblockGame:reachLogHaloTitle"),
          children: [(0, MD.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), YB("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function So(BB) {
      let {
        returner: OB
      } = BB;
      return (0, MD.jsxs)("div", {
        className: OD()("SkyblockReachLogReturner", OB.back && "Back"),
        children: [(0, MD.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, MD.jsx)(QD.c, {
            itemName: OB.itemName,
            amount: 0
          })
        }), (0, MD.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: OB.line
        })]
      })
    }

    function no(BB) {
      let {
        fish: OB,
        letGoShown: GB
      } = BB;
      const {
        t: YB
      } = (0, yD.H)();
      return (0, MD.jsxs)("li", {
        className: OD()("SkyblockReachLogCard", OB.caught ? "Caught" : "Unknown", OB.marks >= 3 && "GoldCard", OB.fresh && "Fresh", OB.visitor && "Visitor"),
        children: [OB.visitor && (0, MD.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: YB("skyblockGame:reachLogVisitor")
        }), OB.fresh && Array.from({
          length: 4
        }, ((BB, OB) => (0, MD.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, OB))), (0, MD.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [OB.halo && (0, MD.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: YB("skyblockGame:reachLogHaloTitle")
          }), (0, MD.jsx)(QD.c, {
            itemName: OB.itemName,
            amount: 0
          }), OB.glimmer && (0, MD.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: YB("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, MD.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: OB.name
        }), (0, MD.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: OB.chance
        }), (0, MD.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: OB.best
        }), (0, MD.jsx)(Ao, {
          fish: OB,
          letGoShown: GB
        })]
      })
    }

    function Uo(BB) {
      let {
        page: OB,
        letGoShown: GB,
        hiddenWaters: YB
      } = BB;
      const {
        t: DB
      } = (0, yD.H)();
      return OB.awake ? (0, MD.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: OB.fish.map((BB => (0, MD.jsx)(no, {
          fish: BB,
          letGoShown: GB
        }, BB.itemName)))
      }) : (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: DB("skyblockGame:reachLogAsleep")
        }), (0, MD.jsx)(qo, {
          view: YB,
          island: OB.id
        })]
      })
    }

    function fo(BB) {
      var OB, GB;
      let {
        controller: YB,
        regulars: DB,
        hiddenWaters: QB
      } = BB;
      const oB = (0, JD.i)(JY, YB.getSnapshot()),
        jB = function(BB) {
          return (0, JD.i)(wY, BB.getSnapshot())
        }(QB),
        yB = (0, JD.i)(iY, DB.getSnapshot()),
        {
          t: JB
        } = (0, yD.H)(),
        MB = VD();
      if (!oB.enabled) return null;
      const PB = null !== (OB = oB.pages.find((BB => BB.id === oB.selected))) && void 0 !== OB ? OB : null;
      return (0, MD.jsx)(RD.d, {
        show: oB.open,
        close: YB.dismiss,
        togglePointerLock: !1,
        className: OD()("SkyblockSkillsOverlay", yB.open && "SkyblockReachLogUnderLedger"),
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: MB,
          onKeyDown: AD,
          children: [(0, MD.jsx)(Po, {
            island: null !== (GB = null === PB || void 0 === PB ? void 0 : PB.id) && void 0 !== GB ? GB : null
          }), (0, MD.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: JB("skyblockGame:reachLogTitle")
              }), (0, MD.jsx)("p", {
                children: JB("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, MD.jsx)(po, {
              view: jB
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: YB.dismiss
            })]
          }), (0, MD.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: oB.pages.map((BB => {
              const OB = BB.id === oB.selected,
                GB = BB.fish.some((BB => BB.fresh));
              return (0, MD.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": OB,
                "data-pad-tab": !0,
                "data-pad-selected": OB ? "true" : void 0,
                className: OD()("SkyblockReachLogTab", `Island-${BB.id}`, OB && "Selected", !BB.awake && "Asleep", BB.gold && "GoldPage", GB && "HasNews"),
                onClick: () => {
                  YB.selectPage(BB.id)
                },
                children: [(0, MD.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                }), BB.awake && (0, MD.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: JB("skyblockGame:reachLogCaughtCount", {
                    caught: BB.caught,
                    total: BB.total
                  })
                })]
              }, BB.id)
            }))
          }), (0, MD.jsxs)("div", {
            className: OD()("SkyblockReachLogPage", null !== PB && `Island-${PB.id}`),
            role: "tabpanel",
            children: [null !== PB && (0, MD.jsx)(Uo, {
              page: PB,
              letGoShown: oB.letGoShown,
              hiddenWaters: jB
            }), !0 === (null === PB || void 0 === PB ? void 0 : PB.awake) && null !== PB.returner && (0, MD.jsx)(So, {
              returner: PB.returner
            }), !0 === (null === PB || void 0 === PB ? void 0 : PB.awake) && (0, MD.jsx)(oo, {
              controller: DB,
              island: PB.id
            })]
          }), (0, MD.jsx)("footer", {
            className: OD()("SkyblockReachLogFooter", null !== PB && `Island-${PB.id}`, !0 === (null === PB || void 0 === PB ? void 0 : PB.gold) && "GoldPage"),
            children: !0 === (null === PB || void 0 === PB ? void 0 : PB.gold) ? (0, MD.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: JB("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, MD.jsxs)(MD.Fragment, {
              children: [(0, MD.jsx)(Vo, {
                letGoShown: oB.letGoShown,
                haloShown: !0 === (null === PB || void 0 === PB ? void 0 : PB.fish.some((BB => BB.halo)))
              }), (0, MD.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: JB("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var ko = GB(5326);

    function Ko(BB) {
      let {
        conversation: OB,
        completedLabel: GB
      } = BB;
      return (0, MD.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, MD.jsxs)("header", {
          children: [(0, MD.jsx)("h3", {
            children: OB.questName
          }), OB.completed && (0, MD.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: GB
          })]
        }), OB.lines.map((BB => (0, MD.jsx)(ko.e, {
          display: BB.display
        }, BB.key)))]
      })
    }

    function uo(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(cY, OB.getSnapshot()), DB = VD();
      if (!YB.enabled) return null;
      const QB = !YB.loading && 0 === YB.conversations.length;
      return (0, MD.jsx)(RD.d, {
        show: YB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: GB("skyblockDialogue:title")
              }), (0, MD.jsx)("p", {
                children: GB("skyblockDialogue:intro")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: OB.dismiss
            })]
          }), (0, MD.jsxs)("div", {
            className: OD()("SkyblockDialogueBody", {
              SingleColumn: null !== YB.questFocus || 0 === YB.characters.length
            }),
            children: [null === YB.questFocus && YB.characters.length > 0 && (0, MD.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: YB.characters.map((BB => (0, MD.jsx)(WD.f, {
                className: OD()("SkyblockDialogueCharacter", {
                  Selected: BB.selected
                }),
                onClick: () => {
                  OB.selectCharacter(BB.id)
                },
                children: (0, MD.jsx)(oD.b, {
                  text: BB.styling
                })
              }, BB.id)))
            }), (0, MD.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== YB.questFocus && (0, MD.jsx)(WD.f, {
                className: "SkyblockDialogueBack",
                onClick: OB.showCharacters,
                children: GB("skyblockDialogue:allCharacters")
              }), YB.loading && (0, MD.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: GB("skyblockDialogue:loading")
              }), QB && (0, MD.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: GB(null === YB.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), YB.conversations.map((BB => (0, MD.jsx)(Ko, {
                conversation: BB,
                completedLabel: YB.completedLabel
              }, BB.questId)))]
            })]
          })]
        })
      })
    }

    function mo(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(bY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD();
      return GB.enabled ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: YB("skyblockGame:autographBook")
              }), (0, MD.jsx)("p", {
                children: YB("skyblockGame:autographBookIntro")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              onClick: OB.dismiss
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, MD.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, MD.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, MD.jsx)("strong", {
                  children: GB.total
                }), (0, MD.jsx)("span", {
                  children: YB("skyblockGame:autographTotal")
                })]
              }), (0, MD.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, MD.jsx)("strong", {
                  children: GB.rankTotal
                }), (0, MD.jsx)("span", {
                  children: YB("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === GB.entries.length ? (0, MD.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: YB("skyblockGame:autographBookEmpty")
            }) : (0, MD.jsx)("ul", {
              className: "SkyblockAutographList",
              children: GB.entries.map((BB => (0, MD.jsxs)("li", {
                className: OD()("SkyblockAutograph", {
                  Ranked: null !== BB.rank
                }),
                style: null === BB.rank ? void 0 : {
                  color: BB.rank.colour
                },
                children: [null !== BB.rank && (0, MD.jsx)(bD.b, {
                  className: "SkyblockAutographRankIcon",
                  name: BB.rank.icon,
                  kit: (0, bD.e)(BB.rank.icon)
                }), (0, MD.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, MD.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: BB.name
                  }), (0, MD.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== BB.rank && (0, MD.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: BB.rank.label
                    }), (0, MD.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: BB.signedOn
                    })]
                  })]
                })]
              }, BB.key)))
            })]
          })]
        })
      }) : null
    }
    const Io = (0, nB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        return (0, MD.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: OB.display.mountWaypoint,
          children: [(0, MD.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, MD.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, MD.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, MD.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, MD.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, MD.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Fo = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function io(BB) {
      return "next" === BB.phase ? "\u2192" : Fo[BB.kind]
    }
    const Lo = (0, nB.memo)((function(BB) {
      let {
        controller: OB,
        display: GB
      } = BB;
      const YB = (0, JD.i)(eO, OB.getNotificationSnapshot()),
        [DB, QB] = (0, nB.useState)(!1);
      return (0, JD.f)("qteStateUpdated", (BB => {
        QB(BB.isActive)
      })), (0, MD.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (DB ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [YB && (0, MD.jsxs)("div", {
          className: `SkyblockQuestNotification ${YB.kind} ${YB.phase}`,
          style: {
            "--quest-notification-duration": `${YB.durationMs}ms`,
            ...YB.accent && {
              "--quest-notification-accent": YB.accent
            }
          },
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (YB.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, MD.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: io(YB)
            }), YB.iconItem && (0, MD.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, MD.jsx)(QD.c, {
                itemName: YB.iconItem,
                amount: 0
              })
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, MD.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: YB.title
            }), (0, MD.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, MD.jsx)(wD.c, {
                text: YB.name
              })
            }), YB.description && (0, MD.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, MD.jsx)(wD.c, {
                text: YB.description
              })
            }), YB.reward && (0, MD.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, MD.jsx)(wD.c, {
                text: YB.reward
              })
            })]
          })]
        }, YB.token), (null === YB || void 0 === YB ? void 0 : YB.waypointNameKey) && (0, MD.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": YB.waypointNameKey,
          "data-notification-token": YB.token,
          ref: GB.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${YB.token}`)]
      })
    }));

    function go(BB) {
      const OB = parseInt(BB.replace("#", ""), 16);
      return `${OB>>16&255}, ${OB>>8&255}, ${255&OB}`
    }
    const ro = (0, nB.memo)((function(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(NG, OB.getSnapshot());
      if (!YB) return null;
      const DB = "arrival" === YB.phase;
      return (0, MD.jsxs)("div", {
        className: OD()("SkyblockPortalTransit", {
          Departure: !DB,
          Arrival: DB
        }),
        style: {
          "--portal-rgb": go(YB.colour),
          "--portal-duration": `${YB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, MD.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, MD.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            OB.finishArrival(YB.token)
          }
        }), (0, MD.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, MD.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !DB && (0, MD.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: GB("skyblockGame:portalTransitHeading")
          }), (0, MD.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: GB(YB.zoneNameKey)
          })]
        })]
      }, YB.token)
    }));

    function Xo() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function wo() {
      const BB = document.querySelector(".SkyblockHudCoins"),
        OB = null === BB || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return OB && OB.width > 0 ? {
        x: OB.left + Math.min(OB.width, 24) / 2,
        y: OB.top + OB.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Eo(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }
    }

    function co() {
      var BB;
      const OB = null === (BB = document.querySelector(".HotBar")) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return OB && OB.width > 0 ? Eo(OB) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function ho(BB) {
      let {
        items: OB,
        origins: GB,
        target: YB
      } = BB;
      return (0, MD.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: OB.map(((BB, OB) => {
          const DB = GB[OB];
          return (0, MD.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${DB.x}px`,
              top: `${DB.y}px`,
              "--item-dx": YB.x - DB.x + "px",
              "--item-dy": YB.y - DB.y + "px",
              "--item-delay": 2e3 + 160 * OB + "ms",
              "--item-flight": "700ms"
            },
            children: (0, MD.jsx)(QD.c, {
              itemName: BB.dailyRewardItemName,
              amount: 0
            })
          }, BB.dailyRewardItemName)
        }))
      })
    }

    function ao(BB, OB) {
      const GB = -Math.PI / 2 + 1.25 * (BB / (OB - 1) * 2 - 1),
        YB = 70 + BB % 3 * 22;
      return {
        x: Math.cos(GB) * YB,
        y: Math.sin(GB) * YB * .7
      }
    }

    function eo(BB) {
      let {
        origin: OB,
        target: GB,
        count: YB
      } = BB;
      const DB = [];
      for (let QB = 0; QB < YB; QB++) {
        const BB = ao(QB, YB);
        DB.push((0, MD.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${OB.x}px`,
            top: `${OB.y}px`,
            "--coin-bx": `${BB.x}px`,
            "--coin-by": `${BB.y}px`,
            "--coin-dx": GB.x - OB.x + "px",
            "--coin-dy": GB.y - OB.y + "px",
            "--coin-delay": `${nG(QB,YB)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, MD.jsx)(QD.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, QB))
      }
      return (0, MD.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: DB
      })
    }

    function To(BB) {
      let {
        day: OB
      } = BB;
      const GB = UB[OB - 1];
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, MD.jsx)(QD.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, jD.g)(GB.dailyRewardCoins)]
        }), GB.dailyRewardItems.map((BB => (0, MD.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, MD.jsx)(QD.c, {
            itemName: BB.dailyRewardItemName,
            amount: 0
          }), "\xd7", BB.dailyRewardItemAmount]
        }, BB.dailyRewardItemName)))]
      })
    }

    function bo(BB) {
      let {
        day: OB
      } = BB;
      const GB = kB(OB);
      return (0, MD.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: UB.map(((BB, YB) => {
          const DB = YB + 1;
          return (0, MD.jsxs)("li", {
            className: OD()("SkyblockDailyRewardTile", {
              Claimed: DB < OB && DB !== GB,
              Today: DB === OB,
              Tomorrow: DB === GB,
              Jackpot: DB === fB
            }),
            children: [(0, MD.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: DB
            }), (0, MD.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, MD.jsx)(QD.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, jD.g)(BB.dailyRewardCoins)]
            }), BB.dailyRewardItems.map((BB => (0, MD.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, MD.jsx)(QD.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))]
          }, DB)
        }))
      })
    }

    function Co(BB) {
      let {
        view: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, nB.useRef)(null), DB = (0, nB.useRef)(null), [QB, oB] = (0, nB.useState)(null);
      (0, nB.useLayoutEffect)((() => {
        var BB;
        const OB = null === (BB = YB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (OB) {
          var GB, QB;
          const BB = Array.from(null !== (GB = null === (QB = DB.current) || void 0 === QB ? void 0 : QB.children) && void 0 !== GB ? GB : [], (BB => Eo(BB.getBoundingClientRect())));
          oB({
            origin: Eo(OB),
            target: wo(),
            itemOrigins: BB,
            itemTarget: co()
          })
        }
      }), []);
      const jB = kB(OB.day),
        yB = function(BB, OB) {
          const [GB, YB] = (0, nB.useState)((() => Xo() ? BB : 0));
          return (0, nB.useEffect)((() => {
            if (Xo()) return;
            const GB = performance.now();
            let DB = 0;
            const QB = oB => {
              const jB = Math.min(Math.max((oB - GB) / OB, 0), 1);
              YB(Math.round(BB * (1 - (1 - jB) ** 3))), jB < 1 && (DB = requestAnimationFrame(QB))
            };
            return DB = requestAnimationFrame(QB), () => {
              cancelAnimationFrame(DB)
            }
          }), [BB, OB]), GB
        }(OB.coins, 450);
      return (0, MD.jsxs)("div", {
        className: OD()("SkyblockDailyReward", {
          Jackpot: OB.day === fB
        }),
        style: {
          "--daily-duration": `${OB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, MD.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, MD.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, MD.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: GB("skyblockGame:dailyRewardTitle")
            }), (0, MD.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: GB("skyblockGame:dailyRewardDay", {
                day: String(OB.day)
              })
            })]
          }), (0, MD.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: YB,
            children: [(0, MD.jsx)(QD.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, MD.jsxs)("span", {
              children: ["+", (0, jD.g)(yB)]
            })]
          }), OB.items.length > 0 && (0, MD.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: DB,
            children: OB.items.map((BB => (0, MD.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, MD.jsx)(QD.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))
          }), (0, MD.jsx)(bo, {
            day: OB.day
          }), (0, MD.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [GB("skyblockGame:dailyRewardComeBack"), (0, MD.jsx)(To, {
              day: jB
            })]
          })]
        }), null !== QB && (0, MD.jsx)(eo, {
          origin: QB.origin,
          target: QB.target,
          count: OB.flyingCoins
        }), null !== QB && QB.itemOrigins.length === OB.items.length && (0, MD.jsx)(ho, {
          items: OB.items,
          origins: QB.itemOrigins,
          target: QB.itemTarget
        })]
      })
    }
    const Ho = (0, nB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        const GB = (0, JD.i)(AG, OB.getSnapshot());
        return GB ? (0, MD.jsx)(Co, {
          view: GB
        }, GB.token) : null
      })),
      vo = "Gold Coin";

    function so(BB) {
      return 650 + 220 * BB
    }

    function xo(BB) {
      return {
        "--letter-delay": `${so(BB)}ms`,
        "--letter-land": `${so(BB)+300}ms`
      }
    }

    function to(BB) {
      let {
        letterCount: OB
      } = BB;
      return (0, MD.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, MD.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, MD.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, MD.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: OB
        }, ((BB, OB) => (0, MD.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: xo(OB),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, OB)))]
      })
    }

    function Bj(BB) {
      var OB, GB, YB;
      let {
        letter: DB,
        index: QB
      } = BB;
      const {
        t: oB
      } = (0, yD.H)(), jB = null !== (OB = null === (GB = DB.items[0]) || void 0 === GB ? void 0 : GB.itemName) && void 0 !== OB ? OB : vo;
      return (0, MD.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: xo(QB),
        children: [(0, MD.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, MD.jsx)(QD.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, MD.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: oB(DB.reasonKey, null !== (YB = DB.reasonParams) && void 0 !== YB ? YB : void 0)
        }), (0, MD.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [DB.coins > 0 && (0, MD.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, MD.jsx)(QD.c, {
              itemName: vo,
              amount: 0
            }), "+", (0, jD.g)(DB.coins)]
          }), DB.items.map(((BB, OB) => (0, MD.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, MD.jsx)(QD.c, {
              itemName: BB.itemName,
              amount: 0
            }), BB.label, " \xd7", BB.amount]
          }, OB)))]
        })]
      })
    }

    function Oj(BB) {
      let {
        view: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)();
      return (0, MD.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${OB.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${so(OB.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, MD.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, MD.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, MD.jsx)(to, {
              letterCount: OB.letters.length
            }), (0, MD.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: GB("skyblockGame:mailboxTitle")
            })]
          }), (0, MD.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: OB.letters.map(((BB, OB) => (0, MD.jsx)(Bj, {
              letter: BB,
              index: OB
            }, OB)))
          }), OB.more > 0 && (0, MD.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: GB("skyblockGame:mailboxMore", {
              count: String(OB.more)
            })
          })]
        })
      })
    }
    const Gj = (0, nB.memo)((function(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(fG, OB.getSnapshot());
      return GB ? (0, MD.jsx)(Oj, {
        view: GB
      }, GB.token) : null
    }));

    function Yj(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(NY, OB.getSnapshot());
      if (null === YB) return null;
      const DB = YB.fullSet ? "empty" === YB.fuelState ? {
        text: GB("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: GB("skyblockGame:magmawardHudFullSet", {
          worn: String(YB.wornCount)
        }),
        tone: "partial"
      };
      return (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsxs)("div", {
          className: OD()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${YB.fuelState}`, {
            "SkyblockMagmawardHud-partial": !YB.fullSet,
            "SkyblockMagmawardHud-armed": YB.fullSet && "empty" !== YB.fuelState
          }),
          children: [null !== YB.flare && (0, MD.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${YB.flare}`
          }, `flare:${YB.flareToken}`), (0, MD.jsx)("div", {
            className: OD()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: YB.setLit
            }),
            children: YB.pieces.map(((BB, OB) => (0, MD.jsx)("div", {
              className: OD()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: BB.worn,
                SkyblockMagmawardPieceJustWorn: BB.justWorn
              }),
              children: (0, MD.jsx)(QD.c, {
                itemName: BB.itemName,
                amount: 0
              })
            }, `${OB}:${BB.wornToken}`)))
          }, `pieces:${YB.setLitToken}`), (0, MD.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, MD.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, MD.jsxs)("div", {
              className: OD()("SkyblockMagmawardFuelCounter", YB.pulse && `SkyblockMagmawardFuelCounter-${YB.pulse}`),
              children: [(0, MD.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, MD.jsx)(QD.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, MD.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: YB.fuel
              })]
            }, `counter:${YB.pulseToken}`), "burn" === YB.pulse && (0, MD.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${YB.pulseToken}`)]
          }), DB && (0, MD.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${DB.tone} SmallTextBold`,
            children: DB.text
          })]
        })
      })
    }

    function Dj(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB,
        selectedLanguage: YB
      } = (0, yD.H)(), DB = (0, JD.i)(WY, OB.getSnapshot());
      return null === DB ? null : (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsxs)("div", {
          className: OD()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: DB.inRange
          }),
          style: {
            "--glowtide-colour": DB.colour
          },
          "aria-label": GB("skyblockGame:glowtideChipLabel"),
          children: [(0, MD.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), DB.inRange ? (0, MD.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: GB("skyblockGame:glowtideChipInRange")
          }, `call:${DB.inRangeToken}`) : (0, MD.jsxs)(MD.Fragment, {
            children: [(0, MD.jsx)("div", {
              ref: OB.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, MD.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: GB("skyblockGame:waypointDistance", {
                distance: AB(DB.distance, YB.code)
              })
            })]
          })]
        })
      })
    }

    function Qj(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(VY, OB.getSnapshot());
      return null === YB ? null : (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsxs)("div", {
          className: OD()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: YB.full
          }),
          "aria-label": GB("skyblockGame:glowMeterLabel", {
            fill: String(YB.fill),
            CP: String(YB.CP)
          }),
          children: [YB.burst && (0, MD.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${YB.burstToken}`), (0, MD.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, MD.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${YB.ratio})`
              }
            }), YB.gained && (0, MD.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${YB.gainToken}`), YB.full && Array.from({
              length: 5
            }, ((BB, OB) => (0, MD.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, OB)))]
          }), YB.full && YB.rares.map((BB => (0, MD.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, MD.jsx)(QD.c, {
              itemName: BB,
              amount: 0
            })
          }, BB))), YB.ready && (0, MD.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, MD.jsx)("span", {
              children: GB("skyblockGame:glowMeterReady")
            })
          }, `ready:${YB.fullToken}`)]
        })
      })
    }

    function oj(BB) {
      let {
        controller: OB
      } = BB;
      const {
        t: GB
      } = (0, yD.H)(), YB = (0, JD.i)(nY, OB.getSnapshot());
      if (null === YB) return null;
      const DB = "waiting" === YB.phase,
        QB = {
          animationDuration: `${YB.waitMs}ms`,
          animationDelay: -YB.elapsedMs + "ms"
        },
        oB = DB ? void 0 : {
          animationDuration: `${YB.waitMs}ms`
        };
      return (0, MD.jsxs)("div", {
        className: DB ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [DB && (0, MD.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((BB, OB) => (0, MD.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, OB))), (0, MD.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: QB
          }), (0, MD.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, MD.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, MD.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: QB
            })]
          }), (0, MD.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, MD.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: oB,
          children: GB(YB.line)
        }, YB.lineIndex)]
      }, YB.token)
    }

    function jj(BB) {
      let {
        chart: OB,
        showHere: GB,
        className: YB
      } = BB;
      return (0, MD.jsx)("div", {
        className: OD()("SkyblockTideChartGrid", YB, null !== OB.pictureName && "Complete"),
        "aria-hidden": "true",
        children: OB.cells.map(((BB, YB) => {
          const DB = 0 !== (OB.pulseCells & 1 << YB),
            QB = OB.castCell === YB;
          return (0, MD.jsx)("span", {
            className: OD()("SkyblockTideChartCell", `Cell-${BB}`, DB && "Pulse", QB && "Cast", GB && OB.hereCell === YB && "Here")
          }, `${YB}:${DB?`p${OB.pulseToken}`:""}:${QB?`c${OB.castToken}`:""}`)
        }))
      })
    }

    function yj(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(fY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = GB.chip;
      if (!GB.enabled || null === DB) return null;
      const QB = YB("skyblockGame:tideChartsChipLabel", {
        island: DB.islandName,
        lit: String(DB.lit),
        ink: String(DB.ink)
      });
      return (0, MD.jsx)(YD.e, {
        placement: "statBars",
        children: (0, MD.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: OD()("SkyblockTideChartsChip", GB.open && "Open", null !== DB.pictureName && "Complete"),
          "aria-label": QB,
          title: QB,
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: OB.toggle,
          children: [(0, MD.jsx)(jj, {
            chart: DB,
            showHere: !1,
            className: "Mini"
          }), (0, MD.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [DB.lit, "/", DB.ink]
          })]
        })
      })
    }

    function Jj(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, JD.i)(fY, OB.getSnapshot()),
        {
          t: YB
        } = (0, yD.H)(),
        DB = VD(),
        QB = GB.card;
      return GB.enabled && null !== QB ? (0, MD.jsx)(RD.d, {
        show: GB.open,
        close: OB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, MD.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: DB,
          onKeyDown: AD,
          children: [(0, MD.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, MD.jsxs)("div", {
              children: [(0, MD.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: YB("skyblockGame:tideChartsTitle")
              }), (0, MD.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: YB("skyblockGame:tideChartsIntro")
              })]
            }), (0, MD.jsx)(WD.m, {
              padIgnore: !0,
              ariaLabel: YB("skyblockGame:tideChartsClose"),
              onClick: OB.dismiss
            })]
          }), GB.tabs.length > 1 && (0, MD.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": YB("skyblockGame:tideChartsIslands"),
            children: GB.tabs.map((BB => (0, MD.jsx)("button", {
              type: "button",
              className: OD()("SkyblockTideChartsTab", BB.selected && "Selected"),
              "aria-pressed": BB.selected,
              onClick: () => {
                OB.pl(BB.island)
              },
              children: BB.name
            }, BB.island)))
          }), (0, MD.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, MD.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": QB.gridLabel,
              children: (0, MD.jsx)(jj, {
                chart: QB,
                showHere: !0,
                className: "Large"
              })
            }), (0, MD.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, MD.jsx)("h3", {
                children: QB.islandName
              }), (0, MD.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: QB.litText
              }), null === QB.pictureName ? (0, MD.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: YB("skyblockGame:tideChartsPictureHidden")
              }) : (0, MD.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: YB("skyblockGame:tideChartsPictureRevealed", {
                  picture: QB.pictureName
                })
              }, QB.pictureName), (0, MD.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, MD.jsxs)("li", {
                  children: [(0, MD.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), YB("skyblockGame:tideChartsLegendLit")]
                }), (0, MD.jsxs)("li", {
                  children: [(0, MD.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), YB("skyblockGame:tideChartsLegendClear")]
                }), null !== QB.hereCell && (0, MD.jsxs)("li", {
                  children: [(0, MD.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), YB("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, MD.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, MD.jsx)("span", {
                  children: GB.turnsText
                }), (0, MD.jsx)("span", {
                  children: GB.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Mj(BB) {
      var OB;
      let {
        controller: GB
      } = BB;
      const {
        selectedLanguage: YB
      } = (0, yD.H)(), DB = YB.code;
      (0, nB.useEffect)((() => {
        GB.setTranslator(((BB, OB) => (0, yD.C)(DB, BB, OB)), DB, ((BB, OB) => (0, yD.x)(DB, BB, OB)))
      }), [GB, DB]);
      const QB = (0, JD.i)(JB, GB.map.getSnapshot()),
        {
          openInGameMenuName: oB
        } = (0, GD.o)(["openInGameMenuName"]);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)(Lo, {
          controller: GB.quests,
          display: GB.navigation.display
        }), QB.enabled && !oB && (0, MD.jsx)(gD, {
          controller: GB.navigation
        }), (0, MD.jsx)(PD, {
          controller: GB,
          minimap: QB.enabled && (null === (OB = QB.presentation) || void 0 === OB ? void 0 : OB.minimap) && (0, MD.jsx)(LD, {
            view: QB.presentation.minimap,
            navigation: GB.navigation,
            controller: GB.map
          }),
          children: (0, MD.jsx)(TD, {
            controller: GB.quests,
            surface: "hud"
          })
        }), (0, MD.jsx)(Io, {
          controller: GB.navigation
        }), (0, MD.jsx)(ro, {
          controller: GB.portalTransit
        }), (0, MD.jsx)(Ho, {
          controller: GB.dailyReward
        }), (0, MD.jsx)(Gj, {
          controller: GB.mailbox
        }), (0, MD.jsx)(Yj, {
          controller: GB.magmaward
        }), (0, MD.jsx)(Dj, {
          controller: GB.glowtide
        }), (0, MD.jsx)(TQ, {
          controller: GB.passage
        }), (0, MD.jsx)(yj, {
          controller: GB.tideCharts
        }), (0, MD.jsx)(Qj, {
          controller: GB.glowMeter
        }), (0, MD.jsx)(Yo, {
          controller: GB.reachLog
        }), (0, MD.jsx)(oj, {
          controller: GB.hushWait
        }), (0, MD.jsx)(tQ, {
          controller: GB.lampLight
        }), (0, MD.jsx)(rD, {
          controller: GB.skills,
          surface: "hud"
        })]
      })
    }

    function Pj(BB) {
      let {
        controller: OB
      } = BB;
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)(iD, {
          controller: OB.map,
          navigation: OB.navigation
        }), (0, MD.jsx)(rD, {
          controller: OB.skills,
          surface: "menu"
        }), (0, MD.jsx)(TD, {
          controller: OB.quests,
          surface: "menu"
        }), (0, MD.jsx)(fQ, {
          controller: OB.dungeons
        }), (0, MD.jsx)(KQ, {
          controller: OB.collections
        }), (0, MD.jsx)(IQ, {
          controller: OB.questGraph
        }), (0, MD.jsx)(rQ, {
          controller: OB.forge
        }), (0, MD.jsx)(aQ, {
          controller: OB.smuggler
        }), (0, MD.jsx)(Oo, {
          controller: OB.keepersChair,
          lampLight: OB.lampLight
        }), (0, MD.jsx)(fo, {
          controller: OB.reachLog,
          regulars: OB.regulars,
          hiddenWaters: OB.hiddenWaters
        }), (0, MD.jsx)(jo, {
          controller: OB.regulars
        }), (0, MD.jsx)(CQ, {
          controller: OB.passage
        }), (0, MD.jsx)(Jj, {
          controller: OB.tideCharts
        }), (0, MD.jsx)(uo, {
          controller: OB.dialogue
        }), (0, MD.jsx)(mo, {
          controller: OB.autographs
        })]
      })
    }
    var zj = GB(37436);
    const lj = iG + cG;

    function pj(BB, OB) {
      const GB = [{
        sound: "rpgKnifeSlice1",
        beat: iG,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: iG,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: iG,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: iG,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: iG,
        lead: 60,
        volume: .6,
        rate: 1
      }, {
        sound: "zapAccent1",
        beat: 360,
        lead: 60,
        volume: .3,
        rate: 1.3
      }, {
        sound: "firecracker",
        pl: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: lj + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        pl: !0,
        beat: lj + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: lj + 60,
        lead: 180,
        volume: .5 + .06 * BB,
        rate: .82 + .07 * BB
      }];
      return BB >= 4 && GB.push({
        sound: "exp_levelup",
        beat: lj + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), OB && GB.push({
        sound: "trumpetFlare",
        beat: lj + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), GB.push({
        sound: "harp_pling",
        beat: LG,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), GB
    }
    class qj {
      constructor(BB) {
        this.deps = BB, this.pending = new Map, this.localHook = null
      }
      hookWaiting(BB, OB) {
        this.pending.delete(BB);
        const GB = this.deps.now();
        if (null === OB) {
          var YB;
          if ((null === (YB = this.localHook) || void 0 === YB ? void 0 : YB.hookId) === BB) {
            const BB = GB >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(BB)
          }
          return
        }
        const DB = GB + OB;
        this.settle(BB, DB) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(BB, {
          untilMs: GB + 1e3,
          biteAtMs: DB
        }))
      }
      getLocalHook() {
        var BB, OB;
        return null !== (BB = null === (OB = this.localHook) || void 0 === OB ? void 0 : OB.hookId) && void 0 !== BB ? BB : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const BB = this.deps.now();
        for (const [OB, {
            untilMs: GB,
            biteAtMs: YB
          }] of this.pending)(this.settle(OB, YB) || BB > GB) && this.pending.delete(OB)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(BB, OB) {
        const GB = this.deps.getLineOwner(BB);
        if (null === GB) return !1;
        if (!this.deps.isLocalPlayer(GB)) return !0;
        if (this.localHook = {
            hookId: BB,
            biteAtMs: OB
          }, !this.deps.isHushWaiting()) {
          const [OB, GB] = this.deps.getHookPosition(BB);
          this.deps.onCastLanded(OB, GB)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Zj = GB(4642);
    const Nj = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Rj = {
        1: {
          count: 24,
          rise: 2.5,
          colour: [79, 237, 237]
        },
        2: {
          count: 40,
          rise: 3.5,
          colour: [245, 209, 66]
        },
        3: {
          count: 64,
          rise: 5,
          colour: [206, 145, 206]
        }
      };
    class Wj {
      constructor(BB) {
        this.deps = BB, this.tell = null
      }
      receiveTell(BB) {
        let {
          biteTellTier: OB
        } = BB;
        this.tell = {
          tier: OB,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(BB) {
        const OB = this.tell;
        if (this.tell = null, !BB) return;
        const GB = null !== OB && this.deps.now() - OB.atMs <= 3e3 ? OB.tier : 0;
        this.deps.vibrate(Nj[GB])
      }
      burstAtHook() {
        const BB = this.tell,
          OB = this.deps.getLocalHookPosition();
        null === BB || BB.burst || null === OB || (BB.burst = !0, this.deps.playParticles(function(BB, OB) {
          let [GB, YB, DB] = OB;
          const {
            count: QB,
            rise: oB,
            colour: jB
          } = Rj[BB], [yB, JB, MB] = jB;
          return {
            texture: "glint",
            pos1: [GB - .3, YB, DB - .3],
            pos2: [GB + .3, YB + .2, DB + .3],
            dir1: [-.6, oB, -.6],
            dir2: [.6, 1.4 * oB, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: QB,
            gravity: [0, -4, 0],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }, {
              timeFraction: 1,
              factor: .2,
              factor2: .2
            }],
            colorGradients: [{
              timeFraction: 0,
              minColor: [yB, JB, MB, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [yB, JB, MB, 0],
              maxColor: [yB, JB, MB, 0]
            }],
            blendMode: Zj.f.Add,
            hideDist: 48
          }
        }(BB.tier, OB)))
      }
    }
    var Aj = GB(1253),
      Vj = GB(2027),
      Sj = GB(31),
      nj = GB(192);
    const Uj = nj.f.xZ * nj.f.playerEyeToHeightRatio;
    class fj {
      constructor(BB) {
        this.host = BB, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      nP(BB) {
        this.lava = BB, this.nextUpdateAt = 0
      }
      kP() {
        var BB;
        const OB = this.host.now();
        if (OB < this.nextUpdateAt) return;
        this.nextUpdateAt = OB + 250;
        const GB = this.host.playerPosition(),
          YB = GB && this.findNearest([GB[0], GB[1] + Uj, GB[2]]);
        if (!YB || YB.distance >= 40) return void this.stop();
        const DB = .5 * Math.min(1, (40 - YB.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(DB) : this.loop = this.host.play("lavaFlow", DB, YB.position, 40 + Uj, 9, !0), null === (BB = this.loop) || void 0 === BB || BB.setPosition(YB.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var BB;
        null === (BB = this.loop) || void 0 === BB || BB.stop(), this.loop = null
      }
      findNearest(BB) {
        let OB = -1,
          GB = 1 / 0;
        for (let YB = 0; YB < this.lava.length; YB += 3) {
          const DB = this.lava[YB] - BB[0],
            QB = this.lava[YB + 1] - BB[1],
            oB = this.lava[YB + 2] - BB[2],
            jB = DB * DB + QB * QB + oB * oB;
          jB < GB && (GB = jB, OB = YB)
        }
        return OB < 0 ? null : {
          position: [this.lava[OB], this.lava[OB + 1], this.lava[OB + 2]],
          distance: Math.sqrt(GB)
        }
      }
    }
    var kj = GB(2010),
      dj = GB(39338);
    const Kj = {
      "Grey Portal": "Gray"
    };
    for (const gj of PB.Vc) Kj[`${gj} Portal`] = gj;
    const uj = Object.keys(Kj),
      mj = Object.fromEntries(uj.map((BB => [BB, (0, PB.Y)(PB.J[`${(0,PB.ef)(Kj[BB])}Team`])])));
    Object.fromEntries(uj.map((BB => [BB, PB.J[`${(0,PB.ef)(Kj[BB])}UiText`]])));
    class Ij {
      constructor(BB, OB) {
        this.presentation = BB, this.portal = OB, this.unlocked = void 0
      }
      nP(BB) {
        const OB = !1 === this.unlocked && BB;
        this.unlocked = BB, this.kP();
        const {
          min: GB,
          max: YB,
          unlockedBlock: DB
        } = this.portal;
        if (OB && this.presentation.hasChunk(...GB)) {
          const [BB, OB, QB] = mj[DB];
          this.presentation.playParticles({
            pos1: [...GB],
            pos2: YB.map((BB => BB + 1)),
            dir1: [-1, 0, -1],
            dir2: [1, 1, 1],
            texture: "glint",
            minLifeTime: .4,
            maxLifeTime: 1.2,
            minEmitPower: .5,
            maxEmitPower: 1.5,
            minSize: .12,
            maxSize: .25,
            manualEmitCount: 80,
            hideDist: 64,
            gravity: [0, .5, 0],
            colorGradients: [{
              timeFraction: 0,
              minColor: [BB, OB, QB, 1],
              maxColor: [Math.min(255, BB + 55), Math.min(255, OB + 55), Math.min(255, QB + 90), 1]
            }],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }],
            blendMode: 1
          })
        }
      }
      kP() {
        var BB;
        const OB = this.unlocked ? this.portal.unlockedBlock : null !== (BB = this.portal.lockedBlock) && void 0 !== BB ? BB : "Light Gray Portal",
          {
            min: GB,
            max: YB
          } = this.portal;
        for (let DB = GB[0]; DB <= YB[0]; DB++)
          for (let BB = GB[1]; BB <= YB[1]; BB++)
            for (let QB = GB[2]; QB <= YB[2]; QB++) this.presentation.hasChunk(DB, BB, QB) && this.presentation.jR(DB, BB, QB) !== OB && this.presentation.qm(DB, BB, QB, OB)
      }
    }
    var Fj = GB(39224);
    GB(39209);
    const ij = {
        farming_1: {
          raises: BB => "NPC" === BB.type && "chef" === BB.variation,
          rise: .4
        },
        fishing_1: {
          raises: BB => "Draugr Warper" === BB.type,
          rise: .4
        }
      },
      Lj = (BB, OB, GB, DB) => {
        let {
          localPlayerId: QB
        } = DB;
        const oB = new tY({
          translate: (BB, OB) => (0, yD.C)(Aj.e.get().getCurrentLanguageCode(), BB, OB),
          translateWithIcons: (BB, OB) => (0, yD.x)(Aj.e.get().getCurrentLanguageCode(), BB, OB),
          setMenuOpen: BB => {
            BB ? (0, eB.o)() : (0, eB.g)()
          },
          dismissMenu: eB.i,
          publishSkills: BB => {
            TB.o.tM(wO, BB, !0)
          },
          publishQuests: BB => {
            TB.o.tM(aO, BB, !0)
          },
          publishQuestNotification: BB => {
            TB.o.tM(eO, BB, !0)
          },
          publishDungeons: BB => {
            TB.o.tM(CO, BB, !0)
          },
          publishCollections: BB => {
            TB.o.tM(qG, BB, !0)
          },
          publishMap: BB => {
            TB.o.tM(JB, BB, !0)
          },
          publishHud: BB => {
            TB.o.tM(vY, BB, !0)
          },
          publishPortalTransit: BB => {
            TB.o.tM(NG, BB, !0)
          },
          isLoadingScreenUp: () => GD.c.get("loadingOverlayVisible"),
          publishDailyReward: BB => {
            TB.o.tM(AG, BB, !0)
          },
          publishMailbox: BB => {
            TB.o.tM(fG, BB, !0)
          },
          publishQuestGraph: BB => {
            TB.o.tM(dG, BB, !0)
          },
          publishForge: BB => {
            TB.o.tM(HG, BB, !0)
          },
          publishSmuggler: BB => {
            TB.o.tM(xG, BB, !0)
          },
          publishKeepersChair: BB => {
            TB.o.tM(jY, BB, !0)
          },
          publishReachLog: BB => {
            TB.o.tM(JY, BB, !0)
          },
          publishLampLight: BB => {
            TB.o.tM(qY, BB, !0)
          },
          publishMagmaward: BB => {
            TB.o.tM(NY, BB, !0)
          },
          publishGlowtide: BB => {
            TB.o.tM(WY, BB, !0)
          },
          publishGlowMeter: BB => {
            TB.o.tM(VY, BB, !0)
          },
          publishHushWait: BB => {
            TB.o.tM(nY, BB, !0)
          },
          publishPassage: BB => {
            TB.o.tM(OY, BB, !0)
          },
          publishTideCharts: BB => {
            TB.o.tM(fY, BB, !0)
          },
          publishRegulars: BB => {
            TB.o.tM(iY, BB, !0)
          },
          publishHiddenWaters: BB => {
            TB.o.tM(wY, BB, !0)
          },
          publishDialogue: BB => {
            TB.o.tM(cY, BB, !0)
          },
          publishAutographs: BB => {
            TB.o.tM(bY, BB, !0)
          },
          onDailyRewardStarted: BB => {
            mB.playSound(QB, BB.day === fB ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (BB, OB) => {
            mB.playSound(QB, "exp_collect", .35, 1 + .6 * BB / (OB - 1)), TB.o.tM(VG, BB === OB - 1)
          },
          onDailyRewardItemLanded: BB => {
            mB.playSound(QB, "pickUp", .6, 1 + .15 * BB)
          },
          onMailboxStarted: () => {
            mB.playSound(QB, "rpgMetalClick", .6, 1), mB.playSound(QB, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            mB.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Sj.i,
          requestTracking: BB => {
            mB.sendCommand(`quests track ${BB}`)
          },
          requestDungeonEnter: (BB, OB) => {
            mB.sendCommand(`dungeonEnter ${BB} ${OB}`)
          },
          requestQuestJump: BB => {
            mB.sendCommand(`${IB} jump ${BB}`)
          },
          requestQuestArrive: (BB, OB) => {
            const GB = `${IB} arrive ${BB}`;
            mB.sendCommand(OB ? `${GB} complete` : GB)
          },
          requestForge: BB => {
            let {
              blade: OB,
              guard: GB,
              handle: YB
            } = BB;
            mB.sendCommand(`forge ${OB} ${GB} ${YB}`)
          },
          requestDialogue: () => {
            mB.sendCommand("quests dialogue")
          },
          requestSmuggle: (BB, OB) => {
            mB.sendCommand(`smuggle ${BB} ${OB}`)
          },
          requestKeepersChairAim: BB => {
            mB.sendCommand(`keeperschair-aim ${BB}`)
          },
          requestReachLogOpen: () => {
            mB.sendCommand("reachlog-open")
          },
          requestLampLight: BB => {
            mB.sendCommand(`${BB}`)
          },
          requestTravel: BB => {
            mB.sendCommand(`map travel ${BB.kind} ${BB.id} ${BB.requestId}`)
          }
        });
        let jB, yB, MB, zB, lB, RB, WB, AB, VB, UB, kB, KB, uB, mB, FB = null;
        const rB = ij[null !== GB && void 0 !== GB ? GB : ""],
          EB = (BB, OB) => {
            null !== rB && void 0 !== rB && rB.raises(OB) && mB.setNametagOffset(BB, rB.rise)
          },
          cB = new Wj({
            getLocalHookPosition: () => {
              const BB = CB.getLocalHook();
              return null !== BB && mB.checkValid(BB) ? mB.pR(BB) : null
            },
            playParticles: BB => {
              mB.playParticleEffect(BB)
            },
            vibrate: BB => {
              bB.h.play("fishBite", BB)
            },
            now: () => performance.now()
          }),
          CB = new qj({
            getLineOwner: BB => mB.checkValid(BB) ? mB.getLineOwner(BB) : null,
            isLocalPlayer: BB => mB.isLocalPlayer(BB),
            getHookPosition: BB => {
              const [OB, , GB] = mB.pR(BB);
              return [OB, GB]
            },
            isHushWaiting: () => {
              var BB;
              return "waiting" === (null === (BB = oB.hushWait.getSnapshot()) || void 0 === BB ? void 0 : BB.phase)
            },
            onCastLanded: (BB, OB) => {
              oB.tideCharts.castLanded(BB, OB)
            },
            onLocalHookSettled: () => {
              cB.onLocalHookSettled()
            },
            onLocalWaitEnded: BB => {
              cB.onLocalWaitEnded(BB)
            },
            now: () => performance.now()
          }),
          HB = new fj({
            now: () => performance.now(),
            playerPosition: () => mB.checkValid(QB) ? mB.pR(QB) : null,
            play: (BB, OB, GB, YB, DB, oB) => mB.playSound(QB, BB, OB, 1, {
              fD: GB,
              maxHearDist: YB,
              refDistance: DB
            }, oB)
          }),
          vB = new Map;
        let sB;
        return {
          onCreate: BB => {
            if (mB = BB, FB = new dj.SkyblockEntityFacing(BB, rB ? EB : null), oB.portalTransit.resumeArrival(null !== GB && void 0 !== GB ? GB : null), (null !== GB && void 0 !== GB ? GB : YB) === YB) {
              let BB = -1 / 0;
              sB = TB.o.subscribe("toggleMenu", (OB => {
                const GB = performance.now();
                "inventory|Workbench" !== OB || "cross_to_hub" !== oB.quests.getTrackedQuestId() || GB - BB < 1e4 || (BB = GB, mB.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [YB, DB] of Object.entries(null !== (OB = iB[null !== GB && void 0 !== GB ? GB : ""]) && void 0 !== OB ? OB : {})) {
              var OB;
              vB.set(YB, new Ij({
                hasChunk: (OB, GB, YB) => BB.isBlockInLoadedChunk(OB, GB, YB),
                jR: (OB, GB, YB) => BB.blockIdToBlockName(BB.getBlockId(OB, GB, YB)),
                qm: (OB, GB, YB, DB) => {
                  BB.qm(OB, GB, YB, DB)
                },
                playParticles: OB => {
                  BB.playParticleEffect(OB)
                }
              }, DB))
            }
            uB = (0, kj.g)((BB => (0, UO.g)(BB) ? (0, UO.c)(BB) : null)), oB.resolveItemName = (OB, GB) => {
              const YB = BB.getItemStat(QB, OB, "displayName");
              return YB && "object" === typeof YB && "translationKey" in YB ? GB(YB.translationKey, (0, yD.v)(YB.params, Vj.d.shown)) : "string" === typeof YB ? GB(YB) : OB
            }, oB.quests.notifications.onShown = BB => {
              "quest" === BB ? mB.playSound(QB, "magicAccent1", 1, 1) : "skillLevel" === BB ? mB.playSound(QB, "magicAccent1", 1, .6) : "landmark" === BB ? mB.playSound(QB, "trumpetFlare", 1, .6) : "npcNote" === BB ? mB.playSound(QB, "magicAccent2", .8, 1.1) : "started" === BB ? mB.playSound(QB, (0, zj.f)("bigDrumSwish"), 1, 1) : mB.playSound(QB, (0, zj.f)("rpgHandleSmallLeather"), 1, 1)
            }, oB.forge.onPartSelected = () => {
              mB.playSound(QB, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, oB.forge.onOpened = () => {
              ! function(BB) {
                BB.preloadSounds(pj(4, !0).map((BB => BB.sound)))
              }(BB)
            }, oB.forge.onForgeStarted = (OB, GB, YB) => function(BB, OB, GB, YB, DB) {
              const QB = [],
                oB = [],
                jB = GB => {
                  const YB = BB.playSound(OB, GB.pl ? (0, zj.f)(GB.sound) : GB.sound, GB.volume, GB.rate);
                  YB && (oB.push(YB), void 0 !== GB.cutAfter && QB.push(setTimeout((() => {
                    YB.fade(YB.getVolume(), 0, 300)
                  }), GB.cutAfter)))
                };
              for (const yB of pj(GB, YB)) DB ? QB.push(setTimeout((() => {
                jB(yB)
              }), Math.max(0, yB.beat - yB.lead / yB.rate))) : yB.beat !== iG && "magicAccent2" !== yB.sound && "trumpetFlare" !== yB.sound || jB(yB);
              return () => {
                for (const BB of QB) clearTimeout(BB);
                for (const BB of oB) BB.fade(BB.getVolume(), 0, 120)
              }
            }(BB, QB, OB, GB, YB), oB.smuggler.onBought = () => {
              mB.playSound(QB, (0, zj.f)("rpgHandleSmallLeather"), 1, 1), mB.playSound(QB, "chestOpen", .6, 1)
            }, oB.compass.register(new pB(oB.map, !0)), oB.compass.register(new pB(oB.map, !1)), oB.compass.register(new ZB(oB.map)), oB.compass.register(new NB((() => oB.quests.getSnapshot().compassTarget)));
            for (const GB of ["enemy", "npc"]) oB.compass.register(new qB(oB.map, GB, (OB => BB.checkValid(OB) ? BB.pR(OB) : void 0), (OB => BB.isAlive(OB))))
          },
          onAfterRender: (BB, OB) => {
            const GB = mB.checkValid(QB) ? mB.pR(QB) : null;
            oB.navigation.afterRender(GB, performance.now(), OB), oB.glowtide.afterRender(GB, OB.cameraHeading), oB.tideCharts.afterRender(GB), CB.afterRender()
          },
          onClose: () => {
            var BB, OB, GB, YB, DB, QB, JB, PB, pB, qB, ZB, NB, RB, SB, nB;
            sB && TB.o.unsubscribe(sB), null === (BB = uB) || void 0 === BB || BB(), HB.dispose(), null === (OB = FB) || void 0 === OB || OB.dispose(), CB.dispose(), oB.dispose(), null === (GB = jB) || void 0 === GB || GB(), null === (YB = yB) || void 0 === YB || YB(), null === (DB = MB) || void 0 === DB || DB(), null === (QB = zB) || void 0 === QB || QB(), null === (JB = lB) || void 0 === JB || JB(), null === (PB = WB) || void 0 === PB || PB(), null === (pB = undefined) || void 0 === pB || pB(), null === (qB = AB) || void 0 === qB || qB(), null === (ZB = VB) || void 0 === ZB || ZB(), null === (NB = UB) || void 0 === NB || NB(), null === (RB = kB) || void 0 === RB || RB(), null === (SB = undefined) || void 0 === SB || SB(), null === (nB = KB) || void 0 === nB || nB()
          },
          onPlayerChangeBlock: (BB, OB, YB, DB, jB, yB) => {
            if (BB === QB && "Air" === yB) {
              const BB = mB.getClientOption(QB, "creative");
              oB.skills.predictBlock([OB, YB, DB], jB, BB);
              const yB = function(BB, OB) {
                  if ("hub" === OB || "farming_1" === OB || "mining_1" === OB) return !XB.has(BB) || "hub" !== OB && "mining_1" !== OB ? Object.hasOwn(gB, BB) ? gB[BB] : void 0 : LB
                }(jB, GB),
                JB = ("hub" === GB || "mining_1" === GB) && (PB.Nd.some((BB => BB === jB)) || Object.hasOwn(wB, jB) || "mining_1" === GB && "Block of Coal" === jB);
              BB || void 0 === yB && !JB || mB.qm(OB, YB, DB, null !== yB && void 0 !== yB ? yB : LB)
            }
          },
          onPlayerAttackEntity: (BB, OB) => {
            if (BB !== QB || "Player" !== mB.getEntityType(OB)) return;
            const [GB, YB, DB] = mB.pR(OB);
            mB.burstParticlePreset("critical", [GB, YB + 1, DB], 10)
          },
          onChangeBlockFail: BB => {
            for (const {
                wQ: OB
              }
              of BB) oB.skills.rejectBlock(OB)
          },
          onReceivedMessageFromServer: (BB, OB) => {
            if ("skyblockGatedPortal" === BB) {
              var GB;
              const [BB, YB] = OB;
              return void(null === (GB = vB.get(BB)) || void 0 === GB || GB.nP(YB))
            }
            if ("skyblockDailyReward" === BB) return void oB.dailyReward.nP(OB);
            if ("skyblockMailbox" === BB) return void oB.mailbox.nP(OB);
            if ("skyblockPortalTransit" === BB) return void oB.portalTransit.nP(OB);
            if ("skyblockLava" === BB) return void HB.nP(OB);
            if ("skyblockForge" === BB) return void oB.forge.nP(OB);
            if ("skyblockMagmaward" === BB) return void oB.magmaward.nP(OB);
            if ("skyblockGlowtide" === BB) return void oB.glowtide.nP(OB);
            if ("skyblockGlowMeter" === BB) return void oB.glowMeter.nP(OB);
            if ("skyblockHushWait" === BB) return void oB.hushWait.nP(OB);
            if ("skyblockPassage" === BB) {
              const BB = OB;
              return oB.passage.nP(BB), oB.reachLog.receivePassagePhase(BB.passagePhase), UB ??= (0, SB.z)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: oB.passage.show
              }), void oB.keepersChair.receivePassage({
                keepersChairPassagePhase: BB.passagePhase,
                keepersChairPassageNextPhase: BB.passageNextPhase,
                keepersChairPassageTurnsInMs: BB.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === BB) {
              const BB = OB;
              return oB.tideCharts.nP(BB), void(BB.tideCharts.length > 0 && (kB ??= (0, SB.z)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: oB.tideCharts.show
              })))
            }
            if (BB === hB.y) {
              var YB;
              const {
                hookId: BB,
                waiting: GB
              } = OB;
              return void CB.hookWaiting(BB, null !== (YB = null === GB || void 0 === GB ? void 0 : GB.remainingMs) && void 0 !== YB ? YB : null)
            }
            if ("skyblockBiteTell" === BB) return void cB.receiveTell(OB);
            if ("skyblockSmuggler" === BB) return void oB.smuggler.nP(OB);
            if ("skyblockKeepersChair" === BB) return oB.keepersChair.nP(OB), void oB.lampLight.setAtChair(oB.keepersChair.isAtChair());
            if ("skyblockLampLight" === BB) {
              const BB = OB;
              var DB;
              if (oB.lampLight.nP(BB), BB.lampLightReleasing) VB ??= (0, SB.z)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  oB.lampLight.setRelease(!1)
                }
              });
              else null === (DB = VB) || void 0 === DB || DB(), VB = void 0;
              return
            }
            if ("skyblockRegulars" === BB) return void oB.regulars.nP(OB);
            if ("skyblockHiddenWaters" === BB) return void oB.hiddenWaters.nP(OB);
            if ("skyblockReachLog" === BB) return oB.reachLog.nP(OB), void(AB ??= (0, SB.z)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: PY
              },
              onClick: oB.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === BB) {
              for (const [BB, GB, YB, DB] of OB) mB.qm(BB, GB, YB, DB);
              return
            }
            if ("skyblockHud" === BB) oB.receiveHud(OB);
            else if ("skyblockMap" === BB) oB.map.nP(OB);
            else if (BB === aB.g) oB.skills.nP(OB);
            else if (BB === dB && "dialogue" === OB.kind) oB.dialogue.nP(OB);
            else if (BB === dB) oB.quests.nP(OB);
            else if ("skyblockDungeons" === BB) oB.dungeons.nP(OB);
            else if ("sbCollections" === BB) oB.collections.nP(OB);
            else if ("skyblockQuestGraph" === BB) oB.questGraph.nP(OB);
            else {
              if ("skyblockAutographs" !== BB) return;
              oB.autographs.nP(OB)
            }
            if (!yB && oB.map.getSnapshot().enabled) {
              const BB = (0, SB.z)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: oB.map.show
                }),
                OB = (0, eB.r)(oB.map.show);
              yB = () => {
                BB(), OB()
              }
            }!MB && oB.skills.getSnapshot().enabled && (MB = (0, SB.z)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: oB.skills.show
            })), !WB && oB.collections.getSnapshot().enabled && (WB = (0, SB.z)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: oB.collections.show
            })), !zB && oB.quests.getSnapshot().enabled && (zB = (0, SB.z)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: oB.quests.show
            })), !KB && oB.autographs.getSnapshot().enabled && (KB = (0, SB.z)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: oB.autographs.show
            }));
            const QB = oB.dungeons.getSnapshot().enabled;
            var JB;
            (MB || zB || QB) && RB !== QB && (RB = QB, null === (JB = lB) || void 0 === JB || JB(), lB = (0, SB.z)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Fj
              },
              disabled: !QB,
              panel: !0,
              onClick: oB.dungeons.show
            }));
            jB || (jB = (0, eB.s)((0, nB.createElement)(Mj, {
              controller: oB
            }), {
              content: (0, nB.createElement)(Pj, {
                controller: oB
              }),
              onClose: oB.close
            }))
          },
          kP: () => {
            var BB;
            for (const OB of vB.values()) OB.kP();
            HB.kP(), null === (BB = FB) || void 0 === BB || BB.kP(), oB.skills.kP(), oB.quests.kP(), oB.dailyReward.kP(), oB.mailbox.kP(), oB.map.kP()
          }
        }
      }
  },
  39193: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      c: () => DB
    });
    var YB = GB(353);
    const DB = (0, YB.Kb)([0, 0, -1]),
      QB = [{
        name: "S",
        bearing: (0, YB.Kb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, YB.Kb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: DB
      }, {
        name: "W",
        bearing: (0, YB.Kb)([1, 0, 0])
      }]
  },
  39189: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB
    });
    var YB = GB(39193);

    function DB(BB, OB, GB) {
      return [100 * (GB.mapMaxX - BB) / (GB.mapMaxX - GB.mapMinX), 100 * (OB - GB.mapMinZ) / (GB.mapMaxZ - GB.mapMinZ)]
    }

    function QB(BB, OB, GB, QB) {
      const [oB, jB] = DB(BB, OB, QB), yB = YB.c - GB;
      return {
        rotation: yB,
        transform: `rotate(${yB}rad) translate(-${oB}%, -${jB}%)`
      }
    }
  },
  37048: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      g: () => YB
    });
    const YB = "skyblockSkills",
      DB = "skills_test_gym"
  },
  39246: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39250: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39258: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39267: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39273: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39275: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39279: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39286: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39291: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39297: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39302: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39310: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39319: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39325: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);