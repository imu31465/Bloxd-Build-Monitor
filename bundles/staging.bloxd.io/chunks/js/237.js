export const id = 237;
export const ids = [58, 237];
export const modules = {
  39586: (MM, rM, iM) => {
    var OM = {
      "./combat_1.png": 39588,
      "./dungeon_crumbling_crypt.png": 39596,
      "./dungeon_frozen_hollow.png": 39605,
      "./dungeon_wildwood_grove.png": 39614,
      "./dungeons.png": 39621,
      "./farming_1.png": 39628,
      "./fishing_1.png": 39634,
      "./hub.png": 39639,
      "./island.png": 39645,
      "./mining_1.png": 39648,
      "./mining_1_bridge.png": 39653,
      "./mining_1_gallery.png": 39658,
      "./mining_1_hollow.png": 39660,
      "./mining_1_village.png": 39666
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 39586
  },
  39673: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM
    });
    const OM = new WeakMap;

    function SM(MM, rM) {
      return OM.set(MM, rM), MM
    }

    function jM(MM) {
      var rM;
      return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
    }
  },
  39536: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM) {
        this.Tz = MM, this.beforeOpen = rM, this.afterClose = iM, this.open = !1, this.dh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.dh && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(MM) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(MM)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.dh = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.dh || (this.snapshot = this.buildSnapshot(), this.Tz(this.snapshot))
      }
    }
  },
  39676: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      SkyblockEntityFacing: () => PM,
      needsSkyblockEntityFacing: () => aM
    });
    var OM = iM(620),
      SM = iM(4577),
      jM = iM(39678);

    function aM(MM, rM) {
      if (MM.metaInfo === OM.c || "Iron Guardian" === MM.type || "Gold Guardian" === MM.type) return !0;
      if ("Pig" === MM.type) return "sitting" === MM.pose;
      if ("Person" !== MM.meshKind || void 0 === MM.meshOpts) return !1;
      let iM = null === rM || void 0 === rM ? void 0 : rM.get(MM.meshOpts);
      if (void 0 === iM) {
        var jM, aM;
        const OM = (0, SM.g)(MM);
        iM = !1, "pig_napoleon" === (null === OM || void 0 === OM || null === (jM = OM.opts.textures) || void 0 === jM ? void 0 : jM.head) ? iM = !0 : "npc_pig_head" === (null === OM || void 0 === OM || null === (aM = OM.opts.textures) || void 0 === aM ? void 0 : aM.head) && (iM = "sitting" === OM.opts.pose || "sitting"), rM && (rM.size >= 256 && rM.clear(), rM.set(MM.meshOpts, iM))
      }
      return "sitting" === iM ? "sitting" === MM.pose : iM
    }(0, jM.g)("skyblock", ((MM, rM) => {
      rM.setFacingTolerance(aM(MM) ? 0 : null)
    }));
    class PM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = MM, this.alsoVisit = rM, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = MM => {
          var rM;
          const iM = this.api.getEntityInfo(MM);
          iM && (aM(iM, this.meshFacingCache) && (this.api.setFacingTolerance(MM, 0), this.nextFacing.add(MM)), null === (rM = this.alsoVisit) || void 0 === rM || rM.call(this, MM, iM))
        }
      }
      bL() {
        const {
          api: MM
        } = this, rM = this.nextFacing;
        MM.forEachEntity(this.visit);
        for (const iM of this.facing) rM.has(iM) || MM.setFacingTolerance(iM, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = rM
      }
      dispose() {
        for (const MM of this.facing) this.api.setFacingTolerance(MM, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39519: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => NP
    });
    const OM = "island";
    var SM = iM(39526);

    function jM(MM, rM, iM) {
      const jM = "local" === rM,
        PM = MM.background,
        nM = rM => PM ? (0, SM.c)(rM[0] - MM.mapOrigin[0], rM[2] - MM.mapOrigin[2], PM.bounds) : [50, 50],
        QM = (MM.insideDungeon ? [] : MM.landmarks).map((MM => {
          var rM, OM;
          return {
            id: MM.id,
            name: iM(MM.visited && MM.nameKey ? null !== (rM = MM.mapLabelKey) && void 0 !== rM ? rM : MM.nameKey : "skyblockGame:mapUnknown"),
            icon: MM.visited && null !== (OM = MM.icon) && void 0 !== OM ? OM : "unknown",
            visited: MM.visited,
            current: !1,
            position: nM(MM.position),
            travelKind: "landmark",
            travelId: MM.id
          }
        })),
        zM = MM.zones.map((rM => {
          var OM;
          return {
            id: rM.id,
            name: iM(rM.visited && rM.nameKey ? rM.nameKey : "skyblockGame:mapUnknown"),
            icon: rM.visited && null !== (OM = rM.icon) && void 0 !== OM ? OM : "unknown",
            visited: rM.visited,
            current: rM.id === MM.zoneId,
            position: rM.position,
            thumbnail: rM.visited ? rM.id : void 0,
            travelKind: "zone",
            travelId: rM.id
          }
        })),
        LM = MM.insideDungeon || !PM ? [] : MM.portals.map((MM => {
          var rM;
          return {
            id: MM.id,
            name: iM(null !== (rM = MM.nameKey) && void 0 !== rM ? rM : "skyblockGame:mapUnknown"),
            icon: MM.visited ? "dungeons" === MM.destination ? "portal_orange" : "portal" : "unknown",
            visited: MM.visited,
            current: !1,
            position: nM(MM.position),
            colour: MM.colour,
            travelKind: "zone",
            travelId: MM.destination
          }
        })),
        mM = jM ? QM : zM,
        HM = mM.filter((MM => MM.visited)).length,
        hM = PM ? (PM.bounds.mapMaxX - PM.bounds.mapMinX) / (PM.bounds.mapMaxZ - PM.bounds.mapMinZ) : 2,
        JM = PM ? JSON.stringify([PM.bounds, MM.mapOrigin]) : "";
      return {
        local: jM,
        points: mM,
        portals: jM ? LM : [],
        progress: mM.length ? iM("skyblockGame:mapDiscovered", {
          current: String(HM),
          total: String(mM.length)
        }) : null,
        percent: mM.length ? 100 * HM / mM.length : 0,
        canTravel: [...mM, ...jM ? LM : []].some((MM => MM.visited && !MM.current)),
        noLandmarks: jM && !MM.insideDungeon && 0 === QM.length,
        background: PM ? {
          imageKey: PM.imageKey,
          fallbackImageKey: MM.zoneId,
          geometryKey: JM,
          label: iM(PM.labelKey),
          colour: PM.backgroundColour,
          ratio: hM
        } : null,
        connections: aM(MM.zones),
        minimap: PM ? {
          imageKey: PM.imageKey,
          fallbackImageKey: MM.zoneId,
          geometryKey: JM,
          label: iM(PM.labelKey),
          colour: PM.backgroundColour,
          caption: iM(MM.zoneId === OM ? "skyblockGame:zoneIsland" : PM.labelKey),
          width: (PM.bounds.mapMaxX - PM.bounds.mapMinX) / PM.minimapSpan * 100 + "%",
          height: (PM.bounds.mapMaxZ - PM.bounds.mapMinZ) / PM.minimapSpan * 100 + "%",
          markers: [...QM, ...LM]
        } : null
      }
    }

    function aM(MM) {
      const rM = new Set;
      return MM.flatMap((iM => iM.connections.flatMap((OM => {
        const SM = MM.find((MM => MM.id === OM)),
          jM = [iM.id, OM].sort().join("|");
        return !SM || rM.has(jM) ? [] : (rM.add(jM), [{
          id: `${iM.id}-${OM}`,
          start: iM.position,
          end: SM.position,
          explored: iM.visited && SM.visited
        }])
      }))))
    }
    var PM = iM(39536);
    class nM extends PM.e {}
    const QM = "skyblockMapView";
    class zM extends nM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(MM, OM, SM), this.requestTravel = rM, this.translate = iM, this.now = jM, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = MM => {
          this.tab = MM, this.feedbackKey = "", this.emit()
        }, this.travel = (MM, rM) => {
          if (!this.map || this.pending || this.dh) return;
          const iM = ("zone" === MM ? this.map.zones : this.map.landmarks).find((MM => MM.id === rM));
          if (iM) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in iM && !iM.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (iM.visited)
              if ("zone" === MM && rM === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const iM = ++this.nextRequestId;
                this.pending = {
                  requestId: iM,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: MM,
                  id: rM,
                  requestId: iM
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
      setTranslator(MM) {
        this.translate = MM, this.emit()
      }
      GL(MM) {
        var rM;
        if (!this.dh)
          if ("entities" !== MM.kind)
            if ("open" !== MM.kind) {
              var iM, OM;
              if ("snapshot" === MM.kind)(null === (iM = MM.snapshot) || void 0 === iM ? void 0 : iM.zoneId) !== (null === (OM = this.map) || void 0 === OM ? void 0 : OM.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = MM.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === MM.kind) {
                var SM;
                MM.requestId === (null === (SM = this.pending) || void 0 === SM ? void 0 : SM.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (MM.requestId === (null === (rM = this.pending) || void 0 === rM ? void 0 : rM.requestId)) {
                var jM;
                this.pending = null, this.feedbackKey = null !== (jM = MM.errorKey) && void 0 !== jM ? jM : "", null === MM.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = MM.entities
      }
      bL() {
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
          presentation: this.map ? jM(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var LM = iM(332);
    const mM = 67.5 * Math.PI / 180;

    function HM(MM, rM) {
      const iM = Math.abs(MM);
      if (iM > mM || rM.trackHalfWidth <= 0) return null;
      const OM = rM.trackHalfWidth,
        SM = rM.screenHalfWidth / (rM.tanHalfFovX * Math.max(.5, Math.cos(rM.pitch))),
        jM = Math.min(Math.atan(.6 * OM / SM), .75 * mM),
        aM = SM * Math.tan(jM);
      let PM;
      if (iM <= jM) PM = SM * Math.tan(iM);
      else {
        const MM = mM - jM,
          rM = Math.max(0, SM * MM / (Math.cos(jM) ** 2 * (OM - aM)) - 1),
          nM = (iM - jM) / MM;
        PM = aM + (OM - aM) * (1 + rM) * nM / (1 + rM * nM)
      }
      return 50 + Math.sign(MM) * PM * 50 / OM
    }
    class hM {
      constructor(MM, rM) {
        this.map = MM, this.visited = rM, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = rM ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const MM = this.map.getSnapshot().map;
        return !MM || MM.insideDungeon ? [] : MM.landmarks.filter((MM => MM.visited === this.visited)).map((MM => {
          var rM, iM;
          return {
            id: `landmark:${MM.id}`,
            position: MM.position,
            icon: null !== (rM = MM.icon) && void 0 !== rM ? rM : "unknown",
            nameKey: null !== (iM = MM.nameKey) && void 0 !== iM ? iM : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class JM {
      constructor(MM, rM, iM, OM) {
        this.map = MM, this.kind = rM, this.position = iM, this.alive = OM, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = rM, this.range = "enemy" === rM ? 48 : 64, this.limit = 12
      }
      XE(MM) {
        if ("enemy" !== this.kind || this.alive(MM.QS)) return this.position(MM.QS)
      }
      getPoints() {
        const MM = [];
        for (const OM of this.map.getEntities()) {
          if (OM.kind !== this.kind || "enemy" === this.kind && !this.alive(OM.compassEntityId)) continue;
          const SM = this.position(OM.compassEntityId);
          var rM, iM;
          if (SM) MM.push({
            id: `${this.kind}:${OM.compassEntityId}`,
            QS: OM.compassEntityId,
            kind: this.kind,
            icon: null !== (rM = OM.icon) && void 0 !== rM ? rM : OM.npcSkin ? `npc_${OM.npcSkin}` : this.kind,
            displayName: OM.displayName,
            position: SM,
            nameKey: null !== (iM = OM.nameKey) && void 0 !== iM ? iM : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return MM
      }
    }
    class dM {
      constructor(MM) {
        this.map = MM, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const MM = this.map.getSnapshot().map;
        return !MM || MM.insideDungeon ? [] : MM.portals.map((MM => {
          var rM;
          return {
            id: "portal:" + MM.id,
            kind: "portal",
            position: MM.position,
            nameKey: null !== (rM = MM.nameKey) && void 0 !== rM ? rM : "skyblockGame:compassUnvisitedZone",
            icon: MM.visited ? "dungeons" === MM.destination ? "portal_orange" : "portal" : "unknown",
            colour: MM.colour
          }
        }))
      }
    }
    class yM {
      constructor(MM) {
        this.target = MM, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const MM = this.target();
        return MM ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: MM.position,
          nameKey: MM.nameKey
        }] : []
      }
    }

    function lM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.position;
      const SM = OM[0] - rM[0],
        jM = OM[2] - rM[2];
      return {
        ...MM,
        position: OM,
        offset: LM.d.computeShortestRotation(iM, (0, LM.wb)([SM, 0, jM])),
        distance: Math.hypot(SM, OM[1] - rM[1], jM)
      }
    }
    let EM;

    function UM(MM, rM) {
      var iM;
      return (null === (iM = EM) || void 0 === iM ? void 0 : iM.locale) !== rM && (EM = {
        locale: rM,
        near: new Intl.NumberFormat(rM, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(rM, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (MM < 10 ? EM.near : EM.far).format(MM)
    }
    class GM {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(MM) {
        return this.providers.set(MM.id, MM), this.refreshAt = 0, () => {
          this.providers.get(MM.id) === MM && (this.providers.delete(MM.id), this.refreshAt = 0)
        }
      }
      frame(MM, rM, iM) {
        if (iM >= this.refreshAt) {
          this.refreshAt = iM + 200, this.candidates = [];
          for (const rM of this.providers.values()) {
            if (!rM.enabled) continue;
            const iM = rM.getPoints().map((rM => {
              const iM = rM.position;
              return {
                point: rM,
                distance: Math.hypot(iM[0] - MM[0], iM[1] - MM[1], iM[2] - MM[2])
              }
            })).filter((MM => MM.distance <= rM.range)).sort(((MM, rM) => MM.distance - rM.distance)).slice(0, rM.limit);
            for (const {
                point: MM
              }
              of iM) this.candidates.push({
              provider: rM,
              point: MM
            })
          }
        }
        const OM = [];
        for (const {
            point: SM,
            provider: jM
          }
          of this.candidates) {
          if (!jM.enabled) continue;
          const iM = jM.XE ? jM.XE(SM) : SM.position;
          if (iM) {
            const jM = lM(SM, MM, rM, iM);
            Math.abs(jM.offset) <= mM && OM.push(jM)
          }
        }
        return OM
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var CM = iM(37544),
      eM = iM(44);
    const bM = [{
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
      wM = bM.length;

    function tM(MM) {
      return MM >= wM ? 1 : MM + 1
    }
    const gM = "skyblockQuests",
      uM = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      RM = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function pM(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const iM = Math.max(0, Math.floor(MM)),
        OM = Math.floor(iM % 1e3 / 100),
        SM = Math.floor(iM / 1e3),
        jM = SM % 60,
        aM = Math.floor(SM / 60),
        PM = aM % 60,
        nM = Math.floor(aM / 60),
        QM = MM => MM < 10 ? `0${MM}` : String(MM),
        zM = rM ? `.${OM}` : "";
      return nM > 0 ? `${nM}:${QM(PM)}:${QM(jM)}${zM}` : `${PM}:${QM(jM)}${zM}`
    }
    const WM = "devquests",
      sM = "none",
      DM = {
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
      kM = "Compressed Messy Stone",
      ZM = {
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
      oM = ["Stone", "Diorite", "Andesite", "Granite"],
      fM = new Set(oM),
      YM = (Object.keys(ZM), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const NM = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function AM(MM, rM) {
      const iM = Math.floor(5 * MM / (2 * rM + 1));
      return Math.min(4, Math.max(0, iM))
    }
    var xM = iM(1242);
    var vM = iM(37305);
    var FM = iM(37542),
      BM = iM(22),
      XM = iM(9467);
    const IM = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      KM = 1e3;

    function qM(MM) {
      return Math.max(0, MM)
    }

    function TM(MM) {
      return 1 + .01 * qM(MM)
    }

    function VM(MM) {
      return 1 + .005 * qM(MM)
    }

    function cM(MM) {
      return 1 + .005 * qM(MM)
    }

    function Mr(MM) {
      return .01 * qM(MM)
    }

    function rr(MM) {
      return 150 / (150 + qM(MM))
    }

    function ir(MM) {
      return 1 + .002 * qM(MM)
    }

    function Or(MM) {
      return Math.round(10 * MM) / 10
    }

    function Sr(MM, rM) {
      switch (MM) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Or(100 * (VM(rM) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Or(100 * (TM(rM) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Or(100 * (cM(rM) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Or(100 * Mr(rM))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Or(100 * (1 - rr(rM)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Or(100 * (ir(rM) - 1))
          }
      }
    }

    function jr(MM) {
      return "farming" === MM ? 200 : 100
    }

    function ar(MM, rM) {
      if (!Number.isSafeInteger(MM) || MM < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const iM = jr(rM),
        OM = MM => function(MM, rM) {
          return jr(MM) * rM * (rM + 1) / 2
        }(rM, MM);
      let SM = Math.min(KM, Math.floor((Math.sqrt(8 * MM / iM + 1) - 1) / 2));
      return SM < KM && OM(SM + 1) <= MM ? SM++ : OM(SM) > MM && SM--, {
        totalXp: MM,
        level: SM,
        xpIntoLevel: MM - OM(SM),
        xpForNextLevel: SM === KM ? null : iM * (SM + 1)
      }
    }
    const Pr = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function nr(MM) {
      return Pr.has(MM)
    }
    const Qr = new Set(LM.lb);

    function zr(MM) {
      return Qr.has(MM)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Lr = {
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
      mr = {
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
      Hr = {
        ...mr,
        ...Object.fromEntries(Object.entries(YM).map((MM => {
          let [rM, iM] = MM;
          return [rM, 9 * mr[iM]]
        })))
      },
      hr = {
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
      Jr = {
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
    const dr = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      yr = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function lr(MM) {
      return `rgb(${yr[MM].join(", ")})`
    }

    function Er(MM, rM, iM) {
      if (!iM) return MM(rM);
      const OM = {};
      for (const [SM, jM] of Object.entries(iM)) OM[SM] = "string" === typeof jM ? jM : MM(jM.translationKey);
      return MM(rM, OM)
    }
    class Ur {
      constructor(MM, rM) {
        this.now = MM, this.getJournal = rM, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.sQ = !1, this.onShown = () => {}
      }
      enqueue(MM) {
        const rM = Gr(MM);
        if (rM) this.pending.push(MM);
        else {
          const rM = this.pending.findIndex(Gr);
          this.pending.splice(-1 === rM ? this.pending.length : rM, 0, MM)
        }
        return (null === this.current || null !== this.followUp && !rM) && (this.advance(), !0)
      }
      setHeld(MM) {
        return this.sQ = MM, !MM && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      bL() {
        const MM = this.getJournal(),
          rM = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === rM ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === rM || void 0 === rM ? void 0 : rM.kind) && MM && MM.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === rM || void 0 === rM ? void 0 : rM.kind)) {
          const MM = this.findFollowUp(this.current);
          if ("step" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || MM.questId !== rM.questId || MM.step.id !== rM.step.id) return this.showFollowUp(MM, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(MM, rM, iM) {
        var OM, SM, jM, aM;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, MM, iM);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, MM);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, MM, rM);
        const {
          questCompletionKind: PM,
          questCompletionNameKey: nM
        } = this.current, QM = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, zM = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, LM = "step" === (null === (OM = this.followUp) || void 0 === OM ? void 0 : OM.kind) ? this.followUp : null, mM = "explore" === (null === (SM = this.followUp) || void 0 === SM ? void 0 : SM.kind);
        let HM;
        return HM = mM ? MM("skyblockGame:questExploreTitle") : null !== LM ? "quest" === PM ? MM("skyblockGame:questNextQuestTitle", {
          quest: MM(LM.questNameKey)
        }) : MM("skyblockGame:questNextStepTitle") : MM("started" === PM ? "skyblockGame:questStartedTitle" : "quest" === PM ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? PM : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: HM,
          name: mM ? rM("skyblockGame:questExploreName") : null !== LM ? Er(rM, LM.step.nameKey, LM.step.nameParams) : Er(rM, nM, QM),
          description: mM ? rM("skyblockGame:questExploreDescription") : null === LM ? null : Er(rM, LM.step.descriptionKey, LM.step.descriptionParams),
          reward: null === this.followUp && zM > 0 ? rM("skyblockGame:questCoinRewardSuffix", {
            amount: zM.toLocaleString(iM)
          }) : null,
          iconItem: null !== (jM = null === LM || void 0 === LM ? void 0 : LM.step.questIconItem) && void 0 !== jM ? jM : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== LM && (null === (aM = this.getJournal()) || void 0 === aM ? void 0 : aM.trackedQuestId) === LM.questId ? LM.step.nameKey : null
        }
      }
      getSkillLevelView(MM, rM, iM) {
        let {
          skill: OM,
          beforeLevel: SM,
          level: jM
        } = MM;
        const aM = Sr(OM, SM),
          PM = Sr(OM, jM);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: rM(`skyblockGame:${OM}`),
          name: rM("skyblockGame:skillLevelUp", {
            to: jM.toLocaleString(iM)
          }),
          description: aM.percent === PM.percent ? null : rM(`${PM.translationKey}Change`, {
            before: aM.percent.toLocaleString(iM),
            after: PM.percent.toLocaleString(iM)
          }),
          reward: null,
          iconItem: dr[OM],
          accent: lr(OM),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(MM, rM) {
        let {
          landmarkNameKey: iM
        } = MM;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: rM("skyblockGame:landmarkDiscovered"),
          name: rM(iM),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(MM, rM, iM) {
        let {
          titleKey: OM,
          textKey: SM,
          params: jM = {},
          nameKeys: aM = {},
          iconItem: PM = null
        } = MM;
        const nM = {
          ...jM
        };
        for (const [QM, zM] of Object.entries(aM)) nM[QM] = rM(zM);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: rM(OM),
          name: iM(SM, nM),
          description: null,
          reward: null,
          iconItem: PM,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var MM;
        if (null !== this.followUp) return 5600;
        switch (null === (MM = this.current) || void 0 === MM ? void 0 : MM.questCompletionKind) {
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
      showFollowUp(MM, rM) {
        null === MM || this.sQ ? this.advance() : (this.followUp = MM, this.token++, this.shownAt = this.now(), this.expiresAt = null !== rM && void 0 !== rM ? rM : this.shownAt + this.durationMs())
      }
      findFollowUp(MM) {
        var rM;
        const iM = this.getJournal();
        if (!iM || this.hasPendingQuestPopup() || Gr(MM)) return null;
        const OM = "started" === MM.questCompletionKind ? iM.active.some((rM => rM.id === MM.questCompletionQuestId)) : "quest" === MM.questCompletionKind ? iM.completed.some((rM => rM.id === MM.questCompletionQuestId)) : [...iM.active, ...iM.completed].some((rM => rM.id === MM.questCompletionQuestId && rM.subquests.some((rM => rM.id === MM.questCompletionStepId && "completed" === rM.status))));
        if (!OM) return null;
        if ("quest" === MM.questCompletionKind && 0 === iM.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const SM = iM.active.find((MM => MM.id === iM.trackedQuestId)),
          jM = null !== (rM = null === SM || void 0 === SM ? void 0 : SM.subquests.find((MM => "ready" === MM.status))) && void 0 !== rM ? rM : null === SM || void 0 === SM ? void 0 : SM.subquests.find((MM => "active" === MM.status));
        return jM ? {
          kind: "step",
          questId: SM.id,
          questNameKey: SM.nameKey,
          step: jM
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((MM => !Gr(MM)))
      }
      advance() {
        var MM;
        this.current = this.sQ ? null : null !== (MM = this.pending.shift()) && void 0 !== MM ? MM : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Gr(MM) {
      return Cr(MM.questCompletionKind)
    }

    function Cr(MM) {
      return "skillLevel" === MM || "landmark" === MM || "npcNote" === MM
    }
    var er = iM(39543),
      br = iM(39548),
      wr = iM(39509),
      tr = iM(39571);
    const gr = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class ur {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.dh = !1, this.mountCompass = MM => {
          var rM;
          if (null === (rM = this.stopLayout) || void 0 === rM || rM.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !MM || this.dh) return;
          const iM = MM.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: MM,
            track: iM,
            label: MM.querySelector(".SkyblockCompassLabel")
          }, iM.replaceChildren();
          for (let SM = 0; SM < 4; SM++) {
            const MM = document.createElement("span");
            MM.className = "SkyblockCompassCardinal", iM.appendChild(MM), this.cardinals.push(MM)
          }
          const OM = (0, wr.b)(gr, [MM], this.layout);
          this.stopLayout = () => {
            OM(), iM.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = MM => {
          this.terrain = this.dh ? null : MM, this.render(this.frame)
        }, this.mountMinimapSearchArea = MM => {
          this.mountSearchArea("minimap", MM)
        }, this.mountMapSearchArea = MM => {
          this.mountSearchArea("map", MM)
        }, this.mountPlayer = MM => {
          this.player = this.dh ? null : MM, this.render(this.frame)
        }, this.mountWaypoint = MM => {
          var rM, iM;
          if (null === (rM = this.stopWaypoint) || void 0 === rM || rM.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !MM || this.dh) return;
          const OM = MM.querySelector(".SkyblockQuestWaypointMarker");
          OM.replaceChildren((0, br.d)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: MM,
            marker: OM,
            clip: MM.querySelector(".SkyblockQuestWaypointTextClip"),
            text: MM.querySelector(".SkyblockQuestWaypointText"),
            label: MM.querySelector(".SkyblockQuestWaypointLabel"),
            distance: MM.querySelector(".SkyblockQuestWaypointDistance"),
            hint: MM.querySelector(".SkyblockQuestWaypointHint")
          };
          const SM = () => {
              this.waypointMarkerSize = {
                width: OM.offsetWidth,
                height: OM.offsetHeight
              }, this.waypointInset = {
                x: OM.offsetWidth / 2 + 8,
                top: OM.offsetHeight + 8,
                bottom: 8
              }
            },
            jM = new ResizeObserver((() => {
              SM(), this.render(this.frame)
            }));
          jM.observe(OM, {
            box: "border-box"
          });
          const aM = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", aM), null === (iM = window.visualViewport) || void 0 === iM || iM.addEventListener("resize", aM), this.stopWaypoint = () => {
            var MM;
            jM.disconnect(), window.removeEventListener("resize", aM), null === (MM = window.visualViewport) || void 0 === MM || MM.removeEventListener("resize", aM)
          }, aM(), SM(), this.render(this.frame)
        }, this.mountWaypointOrigin = MM => {
          var rM;
          if (null === (rM = this.stopWaypointOrigin) || void 0 === rM || rM.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = MM && !this.dh ? Number(MM.dataset.notificationToken) : null, MM && !this.dh && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const rM = {
              nameKey: MM.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = rM;
            const iM = () => {
                const iM = MM.getBoundingClientRect();
                rM.x = (iM.left + iM.width / 2) / window.innerWidth * 100, rM.y = (iM.top + iM.height / 2) / window.innerHeight * 100
              },
              OM = new ResizeObserver(iM);
            OM.observe(MM.parentElement), OM.observe(MM), window.addEventListener("resize", iM), this.stopWaypointOrigin = () => {
              OM.disconnect(), window.removeEventListener("resize", iM)
            }, iM()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const MM = this.compass.root,
            rM = getComputedStyle(MM),
            iM = getComputedStyle(document.documentElement),
            OM = parseFloat(iM.fontSize),
            SM = parseFloat(rM.getPropertyValue("--compass-icon-size")) * OM,
            jM = "1" === rM.getPropertyValue("--compass-fit-top").trim(),
            aM = jM ? 1 : 8,
            PM = Array.from(document.querySelectorAll(gr), (MM => {
              var rM;
              return (null !== (rM = MM.querySelector(".MiddleTextTop")) && void 0 !== rM ? rM : MM).getBoundingClientRect()
            })).filter((MM => MM.width > 0 && MM.height > 0));
          let nM = (parseFloat(iM.getPropertyValue("--notchTop")) || 0) + aM,
            QM = "";
          if (jM) {
            const rM = window.innerWidth / 2,
              iM = MM.getBoundingClientRect().height,
              jM = [nM, ...PM.map((MM => Math.max(nM, MM.bottom + aM)))].sort(((MM, rM) => MM - rM));
            for (const MM of jM) {
              let jM = rM - 8;
              for (const OM of PM) OM.bottom + aM <= MM || OM.top >= MM + iM + aM || (jM = Math.min(jM, OM.right <= rM ? rM - OM.right - 8 : OM.left - rM - 8));
              const zM = 2 * jM - SM;
              if (zM >= 16 * OM) {
                QM = `${zM}px`, nM = MM;
                break
              }
            }
          }
          MM.style.maxWidth !== QM && (MM.style.maxWidth = QM);
          const zM = MM.getBoundingClientRect(),
            LM = this.compassSize.trackHalfWidth;
          if (zM.width > 0) {
            const MM = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: MM.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * SM / MM.width
          }
          if (!QM)
            for (const mM of PM) mM.right > zM.left - 8 && mM.left < zM.right + 8 && (nM = Math.max(nM, mM.bottom + aM));
          MM.style.top = `${nM}px`, this.compassSize.trackHalfWidth !== LM && this.render(this.frame)
        }
      }
      mountSearchArea(MM, rM) {
        this.searchAreas[MM] = this.dh ? null : rM, this.render(this.frame)
      }
      render(MM) {
        if (this.dh) return;
        if (this.frame = MM, this.compass && (Rr(this.compass.root, !MM), MM)) {
          const rM = this.compassSize.trackHalfWidth / 50;
          MM.compass.cardinals.forEach(((MM, iM) => {
            const OM = this.cardinals[iM];
            OM.textContent !== MM.name && (OM.textContent = MM.name), Rr(OM, MM.hidden), OM.style.translate = MM.left * rM + "px"
          }));
          const iM = new Set;
          MM.compass.markers.forEach(((OM, SM) => {
            var jM;
            iM.add(OM.id);
            let aM = this.markers.get(OM.id);
            aM || (aM = document.createElement("span"), aM.className = "SkyblockCompassMarker", this.markers.set(OM.id, aM), this.compass.track.appendChild(aM)), aM.dataset.icon !== OM.icon && (aM.dataset.icon = OM.icon, aM.replaceChildren((0, br.d)(OM.icon))), aM.style.color = null !== (jM = OM.colour) && void 0 !== jM ? jM : "", aM.style.translate = OM.left * rM + "px", aM.style.zIndex = String(MM.compass.markers.length - SM), aM.title !== OM.name && (aM.title = OM.name)
          }));
          for (const [MM, OM] of this.markers) iM.has(MM) || (OM.remove(), this.markers.delete(MM));
          this.compass.label.textContent !== MM.compass.label && (this.compass.label.textContent = MM.compass.label)
        }
        this.terrain && (Rr(this.terrain, !(null !== MM && void 0 !== MM && MM.minimap)), null !== MM && void 0 !== MM && MM.minimap && (this.terrain.style.transform = MM.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", MM.minimap.iconRotation)));
        const rM = null === MM || void 0 === MM ? void 0 : MM.searchArea;
        for (const iM of [this.searchAreas.minimap, this.searchAreas.map])
          if (iM && (Rr(iM, !rM), rM)) {
            if (this.searchAreaPath.seed !== rM.shapeSeed && (this.searchAreaPath = {
                seed: rM.shapeSeed,
                d: (0, tr.f)((0, tr.d)(rM.shapeSeed))
              }), iM.dataset.shapeSeed !== rM.shapeSeed) {
              iM.dataset.shapeSeed = rM.shapeSeed;
              for (const MM of iM.querySelectorAll("path")) MM.setAttribute("d", this.searchAreaPath.d)
            }
            iM.style.left = `${rM.left}%`, iM.style.top = `${rM.top}%`, iM.style.width = `${rM.width}%`, iM.style.height = `${rM.height}%`
          } if (this.player && (Rr(this.player, !(null !== MM && void 0 !== MM && MM.player) || MM.player.hidden), null !== MM && void 0 !== MM && MM.player && (this.player.style.left = `${MM.player.left}%`, this.player.style.top = `${MM.player.top}%`, this.player.style.setProperty("--map-player-rotation", MM.player.rotation))), this.waypoint) {
          const {
            root: rM,
            marker: iM,
            clip: OM,
            text: SM,
            label: jM,
            distance: aM,
            hint: PM
          } = this.waypoint, nM = !(null !== MM && void 0 !== MM && MM.waypoint) || null !== MM.waypoint.popupToken && MM.waypoint.popupToken !== this.waypointOriginToken;
          Rr(rM, nM);
          let QM = 1;
          const zM = this.waypointLaunch;
          if (!nM && zM && MM.waypoint.nameKey === zM.nameKey) {
            const MM = performance.now();
            zM.startedAt ??= MM, QM = Math.min(1, Math.max(0, (MM - zM.startedAt - 450) / 1e3)), iM.style.opacity = String(Math.min(1, (MM - zM.startedAt) / 150)), 1 === QM && (this.waypointLaunch = null)
          } else iM.style.opacity = "", zM && null !== zM.startedAt && (this.waypointLaunch = null);
          if (rM.classList.toggle("Launching", QM < 1), null !== MM && void 0 !== MM && MM.waypoint) {
            const rM = this.waypointInset,
              nM = "quest_talk" === MM.waypoint.markerIcon ? function(MM, rM, iM) {
                if (!MM.text || null === MM.blockHeight || 0 === MM.nearness) return MM;
                const OM = MM.blockHeight / 100 * iM.height,
                  SM = -MM.nearness * (pr * OM + rM.width / 2),
                  jM = MM.nearness * (Wr * OM + rM.height / 2);
                return {
                  ...MM,
                  text: {
                    x: MM.text.x + SM / iM.width * 100,
                    y: MM.text.y + jM / iM.height * 100
                  }
                }
              }(MM.waypoint, this.waypointMarkerSize, this.viewport) : MM.waypoint,
              LM = (0, er.c)(nM, rM, this.viewport),
              mM = QM * QM * (3 - 2 * QM),
              HM = QM < 1 ? zM.x + (LM.x - zM.x) * mM : LM.x,
              hM = QM < 1 ? zM.y + (LM.y - zM.y) * mM : LM.y;
            iM.style.translate = `${HM}vw ${hM}vh`, OM.style.clipPath = `inset(${rM.top}px ${rM.x}px ${rM.bottom}px)`, Rr(SM, QM < 1 || !MM.waypoint.text), SM.style.opacity = String(1 - MM.waypoint.nearness), MM.waypoint.text && (SM.style.translate = `${MM.waypoint.text.x}vw ${MM.waypoint.text.y}vh`), jM.textContent !== MM.waypoint.name && (jM.textContent = MM.waypoint.name), this.markerIcon !== MM.waypoint.markerIcon && (this.markerIcon = MM.waypoint.markerIcon, iM.replaceChildren((0, br.d)(this.markerIcon))), aM.textContent !== MM.waypoint.distance && (aM.textContent = MM.waypoint.distance), Rr(PM, null === MM.waypoint.hint), null !== MM.waypoint.hint && PM.textContent !== MM.waypoint.hint && (PM.textContent = MM.waypoint.hint)
          }
        }
      }
      dispose() {
        var MM, rM;
        this.mountWaypointOrigin(null), this.render(null), null === (MM = this.stopLayout) || void 0 === MM || MM.call(this), this.stopLayout = null, null === (rM = this.stopWaypoint) || void 0 === rM || rM.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.dh = !0
      }
    }

    function Rr(MM, rM) {
      MM.hidden !== rM && (MM.hidden = rM)
    }
    const pr = .55,
      Wr = .6;
    var sr = iM(39532);
    const Dr = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class kr {
      constructor(MM, rM, iM, OM) {
        this.map = MM, this.quests = rM, this.compass = iM, this.display = new ur, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.dh = !1, this.snapshot = null, this.texts = new Map, this.translate = OM
      }
      setTranslator(MM, rM) {
        this.translate = MM, this.locale = rM, this.metresFormat = new Intl.NumberFormat(rM), this.texts.clear()
      }
      translateCached(MM, rM) {
        const iM = void 0 === rM ? MM : `${MM} ${rM}`;
        let OM = this.texts.get(iM);
        return void 0 === OM && (this.texts.size >= 500 && this.texts.clear(), OM = this.translate(MM, void 0 === rM ? void 0 : {
          distance: rM
        }), this.texts.set(iM, OM)), OM
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(MM, rM, iM) {
        if (this.dh) return;
        if (!MM) return this.snapshot = null, void this.display.render(null);
        const OM = this.map.getSnapshot().map,
          jM = iM.cameraHeading,
          aM = {
            ...this.display.compassSize,
            tanHalfFovX: iM.tanHalfFovX,
            pitch: iM.cameraPitch
          },
          PM = [];
        if (OM)
          for (const SM of this.compass.frame(MM, jM, rM)) {
            const MM = HM(SM.offset, aM);
            null !== MM && PM.push({
              ...SM,
              left: MM
            })
          }
        const nM = function(MM, rM) {
            const iM = [],
              OM = MM => "quest" === MM.kind ? MM.distance - 1 : MM.distance,
              SM = [...MM].sort(((MM, rM) => OM(MM) - OM(rM) || MM.id.localeCompare(rM.id)));
            for (const jM of SM) {
              let MM = !1;
              if ("quest" !== jM.kind)
                for (const OM of iM)
                  if (Math.abs(OM.left - jM.left) < rM) {
                    MM = !0;
                    break
                  } MM || iM.push(jM)
            }
            return iM
          }(PM, this.display.compassSpacing),
          QM = function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              iM = null;
            for (const OM of MM) Math.abs(OM.offset) <= rM && (!iM || OM.distance < iM.distance || OM.distance === iM.distance && Math.abs(OM.offset) < Math.abs(iM.offset)) && (iM = OM);
            return iM
          }(nM),
          zM = MM => {
            var rM;
            return null !== (rM = MM.displayName) && void 0 !== rM ? rM : this.translateCached(MM.nameKey)
          },
          mM = {
            compass: {
              markers: nM.map((MM => ({
                id: MM.id,
                icon: MM.icon,
                colour: MM.colour,
                name: zM(MM),
                left: MM.left
              }))),
              cardinals: sr.d.map((MM => {
                let {
                  name: rM,
                  bearing: iM
                } = MM;
                const OM = HM(LM.d.computeShortestRotation(jM, iM), aM);
                return {
                  name: rM,
                  left: null !== OM && void 0 !== OM ? OM : 0,
                  hidden: null === OM
                }
              })),
              label: QM ? `${zM(QM)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",UM(QM.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== OM && void 0 !== OM && OM.background) {
          const rM = MM[0] - OM.mapOrigin[0],
            iM = MM[2] - OM.mapOrigin[2],
            {
              rotation: aM,
              transform: PM
            } = (0, SM.d)(rM, iM, jM, OM.background.bounds);
          mM.minimap = {
            transform: PM,
            iconRotation: -aM + "rad"
          };
          const [nM, QM] = (0, SM.c)(rM, iM, OM.background.bounds);
          mM.player = {
            left: nM,
            top: QM,
            hidden: nM < 0 || QM < 0 || nM > 100 || QM > 100,
            rotation: -aM + "rad"
          }
        }
        const {
          waypoint: hM
        } = this.quests.getSnapshot();
        if ("search" === (null === hM || void 0 === hM ? void 0 : hM.questMarkerIcon) && null !== OM && void 0 !== OM && OM.background) {
          const {
            bounds: MM
          } = OM.background, [rM, iM] = (0, SM.c)(hM.position[0] - OM.mapOrigin[0], hM.position[2] - OM.mapOrigin[2], MM);
          mM.searchArea = {
            left: rM,
            top: iM,
            width: 6400 / (MM.mapMaxX - MM.mapMinX),
            height: 6400 / (MM.mapMaxZ - MM.mapMinZ),
            shapeSeed: hM.nameKey
          }
        }
        const JM = this.quests.getNotificationSnapshot(),
          dM = "completion" === (null === JM || void 0 === JM ? void 0 : JM.phase) && !Cr(JM.kind);
        if (hM && !dM) {
          const rM = Math.hypot(...hM.position.map(((rM, iM) => rM - MM[iM]))),
            OM = Math.round(rM),
            SM = "talk" === hM.questMarkerIcon ? Math.min(1, Math.max(0, (10 - rM) / 5)) : 0,
            jM = iM.projectWorldPosToViewport(hM.position),
            aM = jM && iM.projectWorldPosToViewport([hM.position[0], hM.position[1] - 1, hM.position[2]]);
          mM.waypoint = {
            ...iM.projectWorldPosToScreenPos(hM.position),
            text: jM,
            nearness: SM * SM * (3 - 2 * SM),
            blockHeight: jM && aM ? aM.y - jM.y : null,
            name: this.translateCached(hM.nameKey),
            nameKey: hM.nameKey,
            markerIcon: hM.questMarkerIcon ? Dr[hM.questMarkerIcon] : "quest",
            popupToken: (null === JM || void 0 === JM ? void 0 : JM.waypointNameKey) === hM.nameKey ? JM.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(OM)),
            hint: "search" === hM.questMarkerIcon && Math.hypot(hM.position[0] - MM[0], hM.position[2] - MM[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = mM, this.display.render(mM)
      }
      dispose() {
        this.dh = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Zr = "skyblockSkillsView";
    class or extends nM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          iM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM => MM,
          OM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          SM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM => MM;
        super(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = rM, this.translate = iM, this.locale = OM, this.itemName = SM, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = MM => {
          this.selected = MM, this.emit()
        }
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, this.locale = rM, this.itemName = iM, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(MM) {
        let rM = this.skillText.get(MM);
        return rM || (rM = {
          label: this.translate(`skyblockGame:${MM}`),
          description: this.translate(`skyblockGame:${MM}Description`)
        }, this.skillText.set(MM, rM)), rM
      }
      sources(MM) {
        if ("mining" === MM || "fishing" === MM) return this.buildSources(MM);
        let rM = this.sourceText.get(MM);
        return rM || (rM = this.buildSources(MM), this.sourceText.set(MM, rM)), rM
      }
      buildSources(MM) {
        const rM = this.translate;
        return "exploration" === MM ? [rM("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), rM("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === MM ? [rM("skyblockGame:logSource", {
          xp: this.number(Lr["Maple Log"])
        })] : "combat" === MM ? [rM("skyblockGame:creatureKillSource"), rM("skyblockGame:noEnvironmentalXp")] : "farming" === MM ? [rM("skyblockGame:cropSource", {
          xp: this.number(hr["Wheat|FreshlyGrown"])
        }), rM("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), rM("skyblockGame:noYoungCropXp")] : Object.entries("mining" === MM ? Hr : Jr).map((MM => {
          let [iM, OM] = MM;
          return rM("skyblockGame:itemXpSource", {
            item: this.itemName(iM),
            xp: this.number(OM)
          })
        }))
      }
      number(MM) {
        return MM.toLocaleString(this.locale)
      }
      benefit(MM, rM) {
        const iM = Sr(MM, rM);
        return this.translate(iM.translationKey, {
          bonus: this.number(iM.percent)
        })
      }
      GL(MM) {
        if (!this.dh) {
          if ("snapshot" === MM.kind) this.progress = MM.progress, this.pending.clear(), this.recent = null;
          else if ("award" === MM.kind && this.progress) {
            const {
              award: rM
            } = MM;
            this.progress = {
              ...this.progress,
              [rM.skill]: rM.after
            };
            for (const [MM, OM] of this.pending) OM.skill === rM.skill && this.pending.delete(MM);
            const iM = rM.after.level > rM.before.level;
            this.recordGain(rM.skill, rM.amount, iM ? ++this.nextLevelUpToken : null), iM && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: rM.skill,
              beforeLevel: rM.before.level,
              level: rM.after.level
            })
          } else {
            if ("rejectBlock" === MM.kind) return void this.rejectBlock(MM.position);
            if ("open" === MM.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(MM, rM, iM) {
        if (!this.progress || this.dh || iM) return;
        const OM = function(MM, rM) {
          const iM = MM.split("|")[0];
          return "Air" === rM || rM === `Barkless ${MM}` ? Object.hasOwn(Lr, iM) ? {
            skill: "foraging",
            amount: Lr[iM]
          } : "Air" !== rM ? null : Object.hasOwn(Hr, MM) ? {
            skill: "mining",
            amount: Hr[MM]
          } : nr(MM) ? {
            skill: "farming",
            amount: 10
          } : zr(MM) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(hr, MM) ? {
            skill: "farming",
            amount: hr[MM]
          } : Object.hasOwn(ZM, MM) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(rM, "Air");
        if (!OM) return;
        const SM = MM.join(",");
        if (this.pending.has(SM)) return;
        const jM = this.predictedProgress(OM.skill).totalXp + OM.amount;
        Number.isSafeInteger(jM) && (this.pending.set(SM, {
          ...OM,
          expires: this.now() + 2e3
        }), this.recordGain(OM.skill, 0), this.emit())
      }
      rejectBlock(MM) {
        this.pending.delete(MM.join(",")) && this.emit()
      }
      bL() {
        if (this.dh) return;
        let MM = !1;
        for (const [rM, iM] of this.pending) iM.expires <= this.now() && (this.pending.delete(rM), MM = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, MM = !0), MM && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(MM, rM) {
        var iM, OM;
        let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const jM = (null === (iM = this.recent) || void 0 === iM ? void 0 : iM.skill) === MM && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          aM = (null === (OM = this.recent) || void 0 === OM ? void 0 : OM.skill) === MM && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: MM,
          confirmed: jM + rM,
          expires: this.now() + 3e3,
          levelUpToken: null !== SM && void 0 !== SM ? SM : aM
        }
      }
      pendingXp(MM) {
        let rM = 0;
        for (const iM of this.pending.values()) iM.skill === MM && (rM += iM.amount);
        return rM
      }
      predictedProgress(MM) {
        const rM = this.progress[MM],
          iM = this.pendingXp(MM);
        return iM ? ar(rM.totalXp + iM, MM) : rM
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var MM, rM, iM;
        const OM = this.progress ? IM.map((MM => {
            const rM = this.predictedProgress(MM);
            return {
              ...this.text(MM),
              icon: dr[MM],
              benefit: this.benefit(MM, rM.level),
              sources: this.sources(MM),
              id: MM,
              selected: MM === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(rM.level)
              }),
              xp: null === rM.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(rM.xpIntoLevel),
                target: this.number(rM.xpForNextLevel)
              }),
              percent: null === rM.xpForNextLevel ? 100 : Math.min(100, rM.xpIntoLevel / rM.xpForNextLevel * 100)
            }
          })) : [],
          SM = OM.find((MM => {
            var rM;
            return MM.id === (null === (rM = this.recent) || void 0 === rM ? void 0 : rM.skill)
          })),
          jM = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: OM,
          detail: null !== (MM = OM.find((MM => MM.selected))) && void 0 !== MM ? MM : null,
          overallLevel: this.progress ? IM.reduce(((MM, rM) => MM + this.predictedProgress(rM).level), 0) : null,
          hud: SM && jM > 0 ? {
            skill: SM,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(jM)
            }),
            levelUpToken: null !== (rM = null === (iM = this.recent) || void 0 === iM ? void 0 : iM.levelUpToken) && void 0 !== rM ? rM : null,
            colour: lr(SM.id)
          } : null
        }
      }
    }
    const fr = Math.max(1600, 600, 950) + 400,
      Yr = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Nr = "skyblockQuestsView",
      Ar = "skyblockQuestNotificationView";
    class xr extends nM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          aM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(MM, OM, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = rM, this.translate = iM, this.now = SM, this.locale = jM, this.publishNotification = aM, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var MM, rM;
          this.selected = null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.trackedQuestId) && void 0 !== MM ? MM : null, this.show()
        }, this.select = MM => {
          this.selected = MM, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const MM = this.snapshot.detail;
          !this.dh && null !== MM && void 0 !== MM && MM.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(MM.id), this.emit())
        }, this.viewDialogue = () => {
          const MM = this.snapshot.detail;
          var rM;
          MM && (null === (rM = this.onViewDialogue) || void 0 === rM || rM.call(this, MM.id))
        }, this.notifications = new Ur(SM, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var MM, rM;
        return null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.trackedQuestId) && void 0 !== MM ? MM : null
      }
      notify(MM) {
        !this.dh && this.notifications.enqueue(MM) && this.emitNotification()
      }
      setNotificationsHeld(MM) {
        (this.notifications.setHeld(MM) || MM) && this.emitNotification()
      }
      bL() {
        var MM, rM;
        if (this.dh) return;
        this.notifications.bL() && this.emitNotification();
        let iM = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, iM = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, iM = !0);
        const OM = vr(this.authoritative);
        null !== OM && void 0 !== OM && null !== (MM = OM.questClock) && void 0 !== MM && MM.running && this.clockText(OM) !== (null === (rM = this.snapshot.tracked) || void 0 === rM ? void 0 : rM.clock) && (iM = !0), iM && this.emit()
      }
      setTranslator(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = MM, this.locale = rM, this.emitNotification(), this.emit()
      }
      GL(MM) {
        if (!this.dh)
          if ("completion" === MM.kind) this.notify(MM.questCompletion);
          else if ("landmark" === MM.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: MM.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === MM.kind) {
          var rM, iM, OM;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: MM.npcNoteTitleKey,
            textKey: MM.npcNoteTextKey,
            params: null !== (rM = MM.npcNoteParams) && void 0 !== rM ? rM : {},
            nameKeys: null !== (iM = MM.npcNoteNameKeys) && void 0 !== iM ? iM : {},
            iconItem: null !== (OM = MM.npcNoteIconItem) && void 0 !== OM ? OM : null
          })
        } else if ("open" === MM.kind) this.show();
        else if ("guidance" === MM.kind) this.waypoint = MM.waypoint, this.compassTarget = MM.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === MM.kind) {
          this.authoritative = MM.snapshot, this.notifications.bL() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const rM = this.trackedStepPulse;
          this.updateTrackedStepPulse(MM.snapshot), this.emit(), this.trackedStepPulse > rM && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.dh || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var MM;
        return null !== (MM = this.translateWithIcons) && void 0 !== MM ? MM : this.translate
      }
      clockText(MM) {
        const rM = MM.questClock;
        if (!rM) return null;
        const iM = rM.elapsedMs + (rM.running ? this.now() - this.receivedAt : 0);
        return void 0 === rM.countdownFromMs ? pM(iM, !1) : pM(1e3 * Math.ceil(Math.max(0, rM.countdownFromMs - iM) / 1e3), !1)
      }
      updateTrackedStepPulse(MM) {
        var rM, iM, OM;
        const SM = vr(MM);
        if (!SM) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const jM = MM => SM.subquests.filter((rM => MM(rM.status))).map((MM => MM.id)),
          aM = jM((MM => "completed" === MM || "skipped" === MM)),
          PM = jM((MM => "locked" !== MM)),
          nM = (null === (rM = this.trackedSteps) || void 0 === rM ? void 0 : rM.questId) === SM.id && SM.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (nM) {
          const MM = aM.filter((MM => !nM.finished.has(MM))),
            rM = jM((MM => "active" === MM || "ready" === MM)).filter((MM => !nM.unlocked.has(MM)));
          MM.length > 0 && this.trackedStepPulse++, (MM.length > 0 || rM.length > 0) && (this.trackedChange = {
            finished: new Set(MM),
            unlocked: new Set(rM),
            expiresAt: this.now() + fr
          })
        } else {
          var QM;
          this.trackedStepPulse = (null === (QM = this.trackedSteps) || void 0 === QM ? void 0 : QM.questId) === SM.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: SM.id,
          progress: SM.progress,
          finished: new Set([...null !== (iM = null === nM || void 0 === nM ? void 0 : nM.finished) && void 0 !== iM ? iM : [], ...aM]),
          unlocked: new Set([...null !== (OM = null === nM || void 0 === nM ? void 0 : nM.unlocked) && void 0 !== OM ? OM : [], ...PM])
        }
      }
      entry(MM, rM) {
        var iM, OM;
        const SM = MM.id === (null === (iM = this.authoritative) || void 0 === iM ? void 0 : iM.trackedQuestId),
          jM = this.now() < this.trackAvailableAt,
          aM = this.questTextTranslator(),
          PM = MM.subquests.map((rM => {
            var iM, OM, jM, PM, nM, QM;
            const zM = null !== (iM = rM.handInNpcName) && void 0 !== iM ? iM : MM.giverName,
              LM = this.translate("skyblockGame:progress", {
                current: rM.progress.toLocaleString(this.locale),
                target: rM.target.toLocaleString(this.locale)
              }),
              mM = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: zM ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [rM.status],
              HM = "active" === rM.status || "ready" === rM.status;
            return {
              id: rM.id,
              name: Er(aM, rM.nameKey, rM.nameParams),
              description: Er(aM, rM.descriptionKey, rM.descriptionParams),
              progress: LM,
              status: rM.status,
              statusLabel: mM ? this.translate(mM, {
                npc: zM
              }) : LM,
              iconItem: HM && null !== (OM = rM.questIconItem) && void 0 !== OM ? OM : null,
              barPercent: "active" === rM.status && rM.showsProgressBar ? Math.min(100, 100 * rM.progress / rM.target) : null,
              justFinished: SM && null !== (jM = null === (PM = this.trackedChange) || void 0 === PM ? void 0 : PM.finished.has(rM.id)) && void 0 !== jM && jM,
              justUnlocked: SM && null !== (nM = null === (QM = this.trackedChange) || void 0 === QM ? void 0 : QM.unlocked.has(rM.id)) && void 0 !== nM && nM
            }
          }));
        return {
          id: MM.id,
          name: Er(aM, MM.nameKey, MM.nameParams),
          description: Er(aM, MM.descriptionKey, MM.descriptionParams),
          progress: rM ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: MM.progress.toLocaleString(this.locale),
            target: MM.target.toLocaleString(this.locale)
          }),
          completed: rM,
          tracked: SM,
          selected: MM.id === this.selected,
          canTrack: !rM && !SM && !jM,
          trackLabel: this.translate(SM ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : jM ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== MM.id,
          subquests: PM,
          focusStep: null !== (OM = PM.find((MM => null !== MM.barPercent))) && void 0 !== OM ? OM : null,
          clock: this.clockText(MM)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var MM, rM, iM, OM, SM, jM, aM, PM, nM, QM;
        const zM = [...null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.active) && void 0 !== MM ? MM : [], ...null !== (iM = null === (OM = this.authoritative) || void 0 === OM ? void 0 : OM.completed) && void 0 !== iM ? iM : []];
        var LM, mM, HM, hM;
        zM.some((MM => MM.id === this.selected)) || (this.selected = null !== (LM = null !== (mM = null === (HM = this.authoritative) || void 0 === HM ? void 0 : HM.trackedQuestId) && void 0 !== mM ? mM : null === (hM = zM[0]) || void 0 === hM ? void 0 : hM.id) && void 0 !== LM ? LM : null);
        const JM = null !== (SM = null === (jM = this.authoritative) || void 0 === jM ? void 0 : jM.active.map((MM => this.entry(MM, !1)))) && void 0 !== SM ? SM : [];
        JM.sort(((MM, rM) => Number(rM.tracked) - Number(MM.tracked)));
        const dM = null !== (aM = null === (PM = this.authoritative) || void 0 === PM ? void 0 : PM.completed.map((MM => this.entry(MM, !0)))) && void 0 !== aM ? aM : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: JM,
          completed: dM,
          completedExpanded: this.completedExpanded,
          detail: null !== (nM = [...JM, ...dM].find((MM => MM.selected))) && void 0 !== nM ? nM : null,
          tracked: null !== (QM = JM.find((MM => MM.tracked))) && void 0 !== QM ? QM : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function vr(MM) {
      var rM;
      return null !== (rM = null === MM || void 0 === MM ? void 0 : MM.active.find((rM => rM.id === MM.trackedQuestId))) && void 0 !== rM ? rM : null
    }
    const Fr = "skyblockDungeonsView";
    class Br extends nM {
      constructor(MM, rM) {
        let iM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          OM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = rM, this.locale = iM, this.requestEnter = OM, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = MM => {
          this.selected = MM, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const MM = this.pickerEntry(),
            rM = null === MM || void 0 === MM ? void 0 : MM.difficulties[this.pageIndex];
          void 0 !== rM && null !== rM.unlockedBoss && (this.close(), this.requestEnter(MM.id, rM.difficulty))
        }
      }
      setTranslator(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = MM, this.locale = rM, this.emit()
      }
      GL(MM) {
        var rM, iM;
        if (!this.dh) return "open" === MM.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== MM.kind ? "snapshot" === MM.kind && (this.authoritative = MM.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (rM = null === (iM = this.pickerEntry()) || void 0 === iM ? void 0 : iM.difficulties.length) && void 0 !== rM ? rM : 1) - 1)), null === MM.snapshot && this.open ? this.close() : this.emit()) : this.choose(MM.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(MM) {
        var rM;
        const iM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.dungeons.find((rM => rM.id === MM));
        void 0 !== iM ? this.open && this.pickerDungeonId === MM || (this.pickerDungeonId = MM, this.pageIndex = Math.max(0, iM.difficulties.findLastIndex((MM => null !== MM.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${MM}`)
      }
      turnTo(MM) {
        var rM, iM;
        const OM = null !== (rM = null === (iM = this.pickerEntry()) || void 0 === iM ? void 0 : iM.difficulties.length) && void 0 !== rM ? rM : 0;
        MM < 0 || MM >= OM || MM === this.pageIndex || (this.pageIndex = MM, this.emit())
      }
      pickerEntry() {
        var MM, rM;
        return null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.dungeons.find((MM => MM.id === this.pickerDungeonId))) && void 0 !== MM ? MM : null
      }
      difficulty(MM) {
        const rM = MM.completions > 0,
          iM = null === MM.bestMs ? null : pM(MM.bestMs);
        return {
          difficulty: MM.difficulty,
          label: this.translate(uM[MM.difficulty]),
          colour: RM[MM.difficulty],
          beaten: rM,
          bestTime: iM,
          completions: MM.completions,
          summary: rM ? [null === iM ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: iM
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: MM.completions.toLocaleString(this.locale)
          })].filter((MM => null !== MM)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(MM) {
        const rM = MM.difficulties.map((MM => this.difficulty(MM))),
          iM = rM.filter((MM => MM.beaten)).length;
        return {
          id: MM.id,
          name: this.translate(MM.nameKey),
          selected: MM.id === this.selected,
          beatenSummary: `${iM} / ${rM.length}`,
          difficulties: rM
        }
      }
      picker() {
        const MM = this.pickerEntry();
        if (null === MM || 0 === MM.difficulties.length) return null;
        const rM = MM.difficulties.map(((rM, iM) => {
          var OM, SM, jM, aM;
          const PM = rM.unlockedBoss,
            nM = null === PM ? this.lockedHint(MM, iM) : null;
          return {
            ...this.difficulty(rM),
            unlocked: null !== PM,
            bossName: null === PM ? null : this.translate(PM.bossNameKey),
            bossMobType: null !== (OM = null === PM || void 0 === PM ? void 0 : PM.bossMobType) && void 0 !== OM ? OM : null,
            bossMobVariation: null !== (SM = null === PM || void 0 === PM ? void 0 : PM.bossMobVariation) && void 0 !== SM ? SM : null,
            lockedHint: null !== (jM = null === nM || void 0 === nM ? void 0 : nM.text) && void 0 !== jM ? jM : null,
            lockedHintHighlight: null !== (aM = null === nM || void 0 === nM ? void 0 : nM.highlight) && void 0 !== aM ? aM : null,
            current: iM === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(MM.nameKey),
          pages: rM,
          page: rM[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < rM.length - 1
        }
      }
      lockedHint(MM, rM) {
        var iM, OM, SM;
        if (0 === rM && "number" === typeof MM.combatLevelLock) {
          const rM = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: MM.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: rM,
            colour: lr("combat"),
            icon: dr.combat
          })
        }
        const jM = null !== (iM = null === (OM = this.authoritative) || void 0 === OM ? void 0 : OM.dungeons) && void 0 !== iM ? iM : [],
          aM = rM > 0 ? MM : null !== (SM = jM[jM.indexOf(MM) - 1]) && void 0 !== SM ? SM : null,
          PM = rM > 0 ? MM.difficulties[rM - 1] : null === aM || void 0 === aM ? void 0 : aM.difficulties[0];
        if (null === aM || void 0 === PM) return null;
        const nM = this.translate(aM.nameKey);
        if (null === PM.unlockedBoss) return aM === MM ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, PM.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: nM
        }, PM.difficulty);
        const QM = this.translate(PM.unlockedBoss.bossNameKey);
        return aM === MM ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: QM
        }, PM.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: QM,
            dungeon: nM
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(MM, rM, iM) {
        return this.hintHighlighting(MM, rM, "difficulty", {
          name: this.translate(uM[iM]),
          colour: RM[iM],
          icon: null
        })
      }
      hintHighlighting(MM, rM, iM, OM) {
        let {
          name: SM,
          colour: jM,
          icon: aM
        } = OM;
        const PM = this.translate(MM, {
          ...rM,
          [iM]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(MM, {
            ...rM,
            [iM]: SM
          }),
          highlight: 2 === PM.length ? {
            before: PM[0],
            name: SM,
            after: PM[1],
            colour: jM,
            icon: aM
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var MM, rM, iM;
        const OM = null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.dungeons) && void 0 !== MM ? MM : [];
        var SM, jM;
        OM.some((MM => MM.id === this.selected)) || (this.selected = null !== (SM = null === (jM = OM[0]) || void 0 === jM ? void 0 : jM.id) && void 0 !== SM ? SM : null);
        const aM = OM.map((MM => this.entry(MM)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: aM,
          detail: null !== (iM = aM.find((MM => MM.selected))) && void 0 !== iM ? iM : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Xr = ["mining", "farming", "foraging", "fishing", "combat"],
      Ir = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Kr = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function qr() {
      for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
      return rM.map(((MM, rM) => ({
        amount: MM,
        coins: Ir[rM],
        xp: Kr[rM]
      })))
    }
    const Tr = qr(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Vr = qr(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      cr = qr(50, 100, 250, 500, 1e3, 2500, 5e3),
      Mi = qr(25, 50, 100, 250, 500, 1e3),
      ri = qr(10, 25, 50, 100, 250, 500, 1e3),
      ii = qr(1, 5, 10, 25, 50);

    function Oi(MM, rM) {
      return {
        id: MM,
        category: "fishing",
        item: rM,
        drops: [rM],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ri
      }
    }
    const Si = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Vr
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: cr
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: cr
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Mi
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Mi
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Vr
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Tr
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Tr
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Tr
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: cr
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Vr
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Vr
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Vr
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: cr
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: cr
      }, Oi("wheatfish", "Wheatfish"), Oi("darter", "Darter"), Oi("sunset_minnow", "Sunset Minnow"), Oi("root_flounder", "Root Flounder"), Oi("greenfin_loach", "Greenfin Loach"), Oi("red_strongfish", "Red Strongfish"), Oi("green_strongfish", "Green Strongfish"), Oi("boomerang_fish", "Boomerang Fish"), Oi("seahorse", "Seahorse"), Oi("spined_stickleback", "Spined Stickleback"), Oi("moon_strongfish", "Moon Strongfish"), Oi("boulder_bass", "Boulder Bass"), Oi("grass_snapper", "Grass Snapper"), Oi("crystal_wheatfish", "Crystalized Wheatfish", ii), Oi("moonstone_pupfish", "Moonstone Pupfish", ii), Oi("reedglass_minnow", "Reedglass Minnow"), Oi("mangrove_herring", "Mangrove Herring"), Oi("mudline_perch", "Mudline Perch"), Oi("coastal_mullet", "Coastal Mullet"), Oi("reef_sardine", "Reef Sardine"), Oi("root_perch", "Root Perch"), Oi("driftwood_catfish", "Driftwood Catfish"), Oi("aether_minnow", "Aether Minnow"), Oi("needlefish", "Tri-Pointed Needlefish"), Oi("threadfin_bream", "Threadfin Bream"), Oi("mudbelly_tilapia", "Mudbelly Tilapia"), Oi("rotslab_eel", "Rotslab Eel"), Oi("polarflash_electron", "Polarflash Electron"), Oi("mireback_carp", "Mireback Carp"), Oi("blackwater_bream", "Blackwater Bream"), Oi("stone_grouper", "Stone Grouper"), Oi("shadeback_ray", "Shadeback Ray"), Oi("glacial_silverfish", "Glacial Silverfish"), Oi("hatchetfish", "Hatchetfish"), Oi("moonlit_boomerang", "Moonlit Boomerang Fish"), Oi("murkborne_ray", "Murkborne Ray"), Oi("bamboo_catfish", "Bamboo Catfish"), Oi("mossback_arapaima", "Mossback Arapaima"), Oi("murk_stingray", "Murk Stingray"), Oi("channel_sawfish", "Channel Sawfish"), Oi("boned_sturgeon", "Boned Sturgeon"), Oi("oarfish", "Oarfish"), Oi("snakehead", "Snakehead", ii), Oi("eldertide_leviathan", "Eldertide Leviathan", ii), Oi("pithead", "Pithead"), Oi("electric_eel", "Electric Eel"), Oi("shadow_darter", "Shadow Darter"), Oi("abyss_carp", "Abyss Carp"), Oi("nomai_moray", "Nomai Moray"), Oi("silver_dragonfish", "Silver Dragonfish"), Oi("giant_moray", "Giant Moray"), Oi("coelacanth", "Coelacanth", ii), Oi("frost_herring", "Frost Herring"), Oi("permafrost_halibut", "Permafrost Halibut"), Oi("glacial_lanternfish", "Glacial Lanternfish"), Oi("frozen_grenadier", "Frozen Grenadier"), Oi("blackfin_icefish", "Blackfin Icefish"), Oi("moonfish", "Moonfish"), Oi("alpha_strongfish", "Alpha Moon Strongfish"), Oi("deep_lanternfish", "Deepwater Lanternfish", ii), Oi("pearlescent_moonfish", "Pearlescent Moonfish", ii), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Vr
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Mi
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Mi
      }],
      ji = (new Map(Si.map((MM => [MM.id, MM]))), new Map),
      ai = new Map;
    for (const AP of Si) {
      for (const [MM, rM] of Object.entries(null !== (Pi = AP.blocks) && void 0 !== Pi ? Pi : {})) {
        var Pi;
        ji.set(MM, {
          collection: AP,
          amount: rM
        })
      }
      for (const MM of null !== (ni = AP.drops) && void 0 !== ni ? ni : []) {
        var ni;
        ai.set(MM, AP)
      }
    }

    function Qi(MM, rM) {
      let iM = 0;
      for (; iM < MM.tiers.length && rM >= MM.tiers[iM].amount;) iM++;
      return iM
    }
    const zi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Li(MM) {
      return zi[MM - 1]
    }
    const mi = "skyblockCollectionsView";
    class Hi extends nM {
      constructor(MM, rM) {
        let iM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          OM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM => MM;
        super(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = rM, this.locale = iM, this.itemName = OM, this.counts = null, this.category = "mining", this.selected = Si[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = MM => {
          this.category = MM, this.selected = this.inCategory(MM)[0].id, this.emit()
        }, this.select = MM => {
          this.selected = MM, this.emit()
        }
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, this.locale = rM, this.itemName = iM, this.emit()
      }
      GL(MM) {
        if (!this.dh)
          if ("collOpen" !== MM.kind) {
            (MM.collFull || null === this.counts) && (this.counts = new Map);
            for (const [rM, iM] of MM.collCounts) this.counts.set(rM, iM);
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
        var MM;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const rM = this.inCategory(this.category).map((MM => this.collectionView(MM))),
          iM = Si.reduce(((MM, rM) => MM + this.tierOf(rM)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Xr.map((MM => this.categoryView(MM))),
          collections: rM,
          detail: null !== (MM = rM.find((MM => MM.selected))) && void 0 !== MM ? MM : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(iM)
          })
        }
      }
      categoryView(MM) {
        const rM = this.inCategory(MM),
          iM = rM.reduce(((MM, rM) => MM + this.tierOf(rM)), 0),
          OM = rM.reduce(((MM, rM) => MM + rM.tiers.length), 0);
        return {
          id: MM,
          label: this.translate(`skyblockGame:${MM}`),
          icon: dr[MM],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(iM),
            target: this.number(OM)
          }),
          selected: MM === this.category
        }
      }
      collectionView(MM) {
        var rM, iM;
        const OM = null !== (rM = this.counts.get(MM.id)) && void 0 !== rM ? rM : 0,
          SM = Qi(MM, OM),
          jM = null !== (iM = MM.tiers[SM]) && void 0 !== iM ? iM : null,
          aM = 0 === SM ? 0 : MM.tiers[SM - 1].amount;
        return {
          id: MM.id,
          name: this.itemName(MM.item),
          icon: MM.item,
          selected: MM.id === this.selected,
          locked: 0 === OM,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(OM)
          }),
          tier: 0 === SM ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(SM),
          percent: null === jM ? 100 : Math.min(100, (OM - aM) / (jM.amount - aM) * 100),
          progress: null === jM ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(OM),
            target: this.number(jM.amount)
          }),
          nextReward: null === jM ? null : this.reward(MM, jM.coins, jM.xp)
        }
      }
      reward(MM, rM, iM) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(rM),
          xp: this.number(iM),
          skill: this.translate(`skyblockGame:${MM.category}`)
        })
      }
      tierLabel(MM) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Li(MM)
        })
      }
      tierOf(MM) {
        var rM;
        return Qi(MM, null !== (rM = this.counts.get(MM.id)) && void 0 !== rM ? rM : 0)
      }
      inCategory(MM) {
        return Si.filter((rM => rM.category === MM))
      }
      number(MM) {
        return MM.toLocaleString(this.locale)
      }
    }
    const Ji = "skyblockPortalTransitView",
      di = "skyblockPortalArrival";
    class yi {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Tz = MM, this.storage = rM, this.now = iM, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      GL(MM) {
        const rM = {
          zoneNameKey: MM.transitZoneNameKey,
          variation: MM.transitZoneVariation,
          colour: MM.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(di, rM), this.show("departure", rM.zoneNameKey, rM.colour, MM.transitDurationMs, MM.transitDurationMs + 1500, (() => {
          this.storage.removeItem(di)
        }))
      }
      resumeArrival(MM) {
        const rM = this.storage.getItem(di);
        this.storage.removeItem(di), null === rM || rM.variation !== MM || this.now() - rM.departedAt > 3e4 || this.show("arrival", rM.zoneNameKey, rM.colour, 3200, 2e4)
      }
      finishArrival(MM) {
        var rM;
        "arrival" === (null === (rM = this.view) || void 0 === rM ? void 0 : rM.phase) && this.view.token === MM && (this.clearTimer(), this.view = null, this.Tz(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(MM, rM, iM, OM, SM, jM) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: MM,
          zoneNameKey: rM,
          colour: iM,
          durationMs: OM
        }, this.Tz(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Tz(null), null === jM || void 0 === jM || jM()
        }), SM)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const li = "skyblockDailyRewardView",
      Ei = "skyblockDailyRewardCoin";
    class Ui {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Tz = MM, this.isBusy = rM, this.holdQuestPopups = iM, this.onHeldCoinsChanged = OM, this.onCoinLanded = SM, this.onStarted = jM, this.onFinished = aM, this.onItemLanded = PM, this.now = nM, this.sQ = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var MM, rM;
        return null !== (MM = null === (rM = this.playing) || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null
      }
      getHeldCoins() {
        var MM, rM;
        let iM = 0;
        for (const OM of this.sQ) iM += OM.coins;
        return iM - (null !== (MM = null === (rM = this.playing) || void 0 === rM ? void 0 : rM.released) && void 0 !== MM ? MM : 0)
      }
      GL(MM) {
        "dailyRewardClaimed" !== MM.kind ? (this.queue.push(MM), this.bL()) : this.sQ.push({
          coins: MM.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      bL() {
        const MM = this.now();
        if (null === this.playing) return this.releaseUnshown(MM), void this.startNext(MM);
        const rM = this.playing,
          iM = MM - rM.startedAt,
          OM = rM.view.flyingCoins,
          SM = function(MM, rM) {
            let iM = 0;
            for (; iM < rM && Ci(iM, rM) <= MM;) iM++;
            return iM
          }(iM, OM);
        if (SM !== rM.landed) {
          for (let MM = SM - rM.landed > 2 ? SM - 1 : rM.landed; MM < SM; MM++) this.onCoinLanded(MM, OM);
          rM.landed = SM, rM.released = Math.round(rM.view.coins * SM / OM), this.onHeldCoinsChanged()
        }
        for (; rM.itemsLanded < rM.view.items.length && 2e3 + 160 * rM.itemsLanded + 630 <= iM;) this.onItemLanded(rM.itemsLanded), rM.itemsLanded++;
        iM >= rM.view.durationMs && (this.finish(), this.startNext(MM))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.sQ = [], this.Tz(null)
      }
      startNext(MM) {
        if (0 === this.queue.length || this.isBusy()) return;
        const rM = this.queue.shift();
        this.token++;
        const iM = {
          token: this.token,
          day: rM.dailyRewardDay,
          coins: rM.dailyRewardCoins,
          items: rM.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: rM.dailyRewardDay === wM ? 24 : 14
        };
        this.playing = {
          view: iM,
          startedAt: MM,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Tz(iM), this.onStarted(iM)
      }
      finish() {
        this.sQ.shift(), this.playing = null, this.holdQuestPopups(!1), this.Tz(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(MM) {
        if (this.queue.length > 0 || 0 === this.sQ.length) return;
        const rM = this.sQ.length;
        this.sQ = this.sQ.filter((rM => MM - rM.receivedAt < 6e4)), this.sQ.length !== rM && this.onHeldCoinsChanged()
      }
    }

    function Gi(MM, rM) {
      return 450 + 715 * MM / (rM - 1)
    }

    function Ci(MM, rM) {
      return Gi(MM, rM) + 650
    }
    const ei = "skyblockMailboxView";
    class bi {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Tz = MM, this.isBusy = rM, this.onStarted = iM, this.now = OM, this.waiting = [], this.playing = null, this.token = 0, this.itemName = MM => MM
      }
      getSnapshot() {
        var MM, rM;
        return null !== (MM = null === (rM = this.playing) || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null
      }
      setItemName(MM) {
        this.itemName = MM
      }
      GL(MM) {
        this.waiting.push(...MM.mailLetters), this.bL()
      }
      bL() {
        const MM = this.now();
        null !== this.playing && MM - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Tz(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(MM)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Tz(null)
      }
      start(MM) {
        const rM = this.waiting.slice(0, 3);
        this.token++;
        const iM = {
          token: this.token,
          letters: rM.map((MM => this.toView(MM))),
          more: this.waiting.length - rM.length,
          durationMs: 4500 + 700 * rM.length
        };
        this.waiting = [], this.playing = {
          view: iM,
          startedAt: MM
        }, this.Tz(iM), this.onStarted(iM)
      }
      toView(MM) {
        return {
          coins: MM.mailCoins,
          items: MM.mailItems.map((MM => {
            var rM;
            return {
              itemName: MM.mailItemName,
              amount: MM.mailItemAmount,
              label: null !== (rM = MM.mailItemLabel) && void 0 !== rM ? rM : this.itemName(MM.mailItemName)
            }
          })),
          reasonKey: MM.mailReasonKey,
          reasonParams: MM.mailReasonParams
        }
      }
    }
    const wi = "skyblockQuestGraphView",
      ti = "skyblockDevQuestJump";

    function gi(MM) {
      if (0 === MM.length) return "";
      const rM = [`M ${MM[0].x} ${MM[0].y}`];
      for (let OM = 1; OM < MM.length - 1; OM++) {
        const iM = MM[OM + 1];
        rM.push(`Q ${MM[OM].x} ${MM[OM].y} ${(MM[OM].x+iM.x)/2} ${(MM[OM].y+iM.y)/2}`)
      }
      const iM = MM[MM.length - 1];
      return rM.push(`L ${iM.x} ${iM.y}`), rM.join(" ")
    }

    function ui(MM, rM) {
      return MM < rM ? `${MM}|${rM}` : `${rM}|${MM}`
    }
    class Ri extends nM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(MM, iM, OM), this.translate = rM, this.requestJump = SM, this.requestArrive = jM, this.storage = aM, this.now = PM, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = MM => {
          MM !== this.hoveredId && (this.hoveredId = MM, this.emit())
        }, this.jump = MM => {
          this.close(), this.requestJump(MM)
        }
      }
      GL(MM) {
        if (!this.dh)
          if ("graph" !== MM.kind) {
            if ("jumping" === MM.kind) {
              const rM = {
                questId: MM.graphQuestId,
                variation: MM.graphVariation,
                completes: MM.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(ti, rM)
            }
          } else {
            const rM = ++this.graphCount;
            iM.e(133).then((() => iM(6888))).then((iM => {
              let {
                default: OM
              } = iM;
              this.dh || rM !== this.graphCount || (this.layout = function(MM, rM, iM) {
                var OM, SM;
                const jM = new MM.graphlib.Graph;
                jM.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), jM.setDefaultEdgeLabel((() => ({})));
                const aM = new Set;
                for (const zM of rM) aM.add(zM.graphQuestId), jM.setNode(zM.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const PM = iM.filter((MM => aM.has(MM.graphFromId) && aM.has(MM.graphToId) && MM.graphFromId !== MM.graphToId)),
                  nM = new Map;
                for (const zM of [...PM].sort(((MM, rM) => Number("awaits" === MM.graphEdgeKind) - Number("awaits" === rM.graphEdgeKind)))) {
                  const MM = ui(zM.graphFromId, zM.graphToId);
                  nM.has(MM) || (nM.set(MM, zM), jM.setEdge(zM.graphFromId, zM.graphToId))
                }
                MM.layout(jM);
                const QM = jM.graph();
                return {
                  width: Math.ceil(null !== (OM = QM.width) && void 0 !== OM ? OM : 0),
                  height: Math.ceil(null !== (SM = QM.height) && void 0 !== SM ? SM : 0),
                  nodes: rM.map((MM => {
                    var rM, iM;
                    const OM = jM.node(MM.graphQuestId);
                    return {
                      node: MM,
                      left: (null !== (rM = OM.x) && void 0 !== rM ? rM : 0) - 95,
                      top: (null !== (iM = OM.y) && void 0 !== iM ? iM : 0) - 26
                    }
                  })),
                  edges: PM.map((MM => {
                    var rM;
                    const iM = nM.get(ui(MM.graphFromId, MM.graphToId)),
                      OM = null !== (rM = jM.edge(iM.graphFromId, iM.graphToId).points) && void 0 !== rM ? rM : [];
                    return {
                      edge: MM,
                      key: `${MM.graphFromId}|${MM.graphToId}|${MM.graphEdgeKind}`,
                      path: gi(iM.graphFromId === MM.graphFromId ? OM : [...OM].reverse())
                    }
                  })),
                  plans: new Map(rM.map((MM => [MM.graphQuestId, new Set([MM.graphQuestId, ...MM.graphPlanIds])])))
                }
              }(OM, MM.graphNodes, MM.graphEdges), this.show())
            })).catch((MM => {
              console.error("The quest graph could not be laid out", MM)
            }))
          }
      }
      resumeJump(MM) {
        const rM = this.storage.getItem(ti);
        this.storage.removeItem(ti), null === rM || rM.variation !== MM || this.now() - rM.departedAt > 6e4 || this.requestArrive(rM.questId, rM.completes)
      }
      setTranslator(MM) {
        this.translate = MM, this.emit()
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
        var MM, rM;
        return null !== (MM = null === this.hoveredId || null === (rM = this.layout) || void 0 === rM ? void 0 : rM.plans.get(this.hoveredId)) && void 0 !== MM ? MM : new Set
      }
      buildSnapshot() {
        const MM = this.layout;
        if (null === MM) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const rM = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: MM.width,
          height: MM.height,
          nodes: MM.nodes.map((MM => {
            let {
              node: iM,
              left: OM,
              top: SM
            } = MM;
            return {
              id: iM.graphQuestId,
              name: this.translate(iM.graphNameKey),
              detail: null === iM.graphGiverName ? iM.graphZoneId : `${iM.graphGiverName} \xb7 ${iM.graphZoneId}`,
              state: iM.graphState,
              left: OM,
              top: SM,
              inPlan: rM.has(iM.graphQuestId),
              hovered: iM.graphQuestId === this.hoveredId
            }
          })),
          edges: MM.edges.map((MM => {
            let {
              edge: iM,
              key: OM,
              path: SM
            } = MM;
            return {
              key: OM,
              kind: iM.graphEdgeKind,
              path: SM,
              inPlan: rM.has(iM.graphFromId) && rM.has(iM.graphToId)
            }
          })),
          planning: rM.size > 0
        }
      }
    }
    var Wi = iM(37996);
    const si = 250,
      Di = 2150,
      ki = -2.8,
      Zi = 2.2,
      oi = -27,
      fi = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Yi = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Ni = Math.round(50 + 1e3 * (Yi.delay + Yi.period / 2)),
      Ai = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      xi = Array.from({
        length: 26
      }, ((MM, rM) => {
        const iM = 2.39996 * rM,
          OM = .5 + .618034 * rM % 1 * .23,
          SM = rM % 3 !== 2;
        return {
          rune: SM ? Ai[7 * rM % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(iM)*OM).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(iM)*OM).toFixed(3)})`,
            "--spin": 40 * (rM % 5 - 2) + "deg",
            "--size": (SM ? 1 + rM % 4 * .2 : .3 + rM % 2 * .15) + "rem",
            "--duration": `${(1.8+7*rM%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*rM%3).toFixed(2)}s`
          }
        }
      }));

    function vi(MM, rM) {
      return Array.from({
        length: 30 + 3 * MM + (rM ? 10 : 0)
      }, ((MM, rM) => {
        const iM = rM < 4,
          OM = iM ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          SM = iM ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          jM = iM ? 2.2 : .6 + Math.random(),
          aM = iM ? .3 : Math.random() < .5 ? .16 : .24,
          PM = iM ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": OM,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${SM.toFixed(2)}rem`,
          "--length": `${jM.toFixed(2)}rem`,
          "--width": `${aM}rem`,
          "--duration": `${Math.round(PM)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Fi(MM) {
      let {
        zeta: rM,
        period: iM
      } = MM;
      const OM = 2 * Math.PI / iM;
      return {
        w: OM,
        decay: rM * OM / Math.sqrt(1 - rM * rM)
      }
    }
    let Bi = !1;

    function Xi() {
      if (Bi) return;
      Bi = !0;
      const MM = document.createElement("style");
      MM.textContent = function() {
        const MM = Fi(fi),
          rM = Fi(Yi),
          iM = rM => Math.exp(-MM.decay * rM) * Math.sin(MM.w * rM),
          OM = iM(Math.atan(MM.w / MM.decay) / MM.w),
          SM = .25,
          jM = 2.15,
          aM = Math.round(215),
          PM = [];
        for (let nM = 0; nM <= aM; nM++) {
          const MM = nM / aM * jM;
          let QM = Math.sin(Math.min(MM, SM) / SM * Math.PI / 2) ** 2,
            zM = 0,
            LM = 1,
            mM = 1 - .2 * QM,
            HM = 1;
          if (MM >= SM) {
            const aM = MM - SM,
              PM = Math.max(0, aM - .05);
            QM = Math.exp(-PM / .05), zM = iM(PM + fi.lead * (1 - Math.exp(-PM / fi.rush))) / OM;
            const nM = PM - Yi.delay,
              hM = nM <= 0 ? 0 : 1 - Math.exp(-rM.decay * nM) * (Math.cos(rM.w * nM) + rM.decay / rM.w * Math.sin(rM.w * nM)),
              JM = Math.max(0, (MM - 1.77) / (jM - 1.77));
            LM = (1 + (Yi.to - 1) * hM) * (1 + .08 * JM), mM = 1.1 + 1.5 * Math.exp(-aM / .07) + .3 * Math.exp(-(((1e3 * aM - Ni) / 100) ** 2)) + .8 * JM, HM = 1 - JM ** 1.5
          }
          const hM = .15 * QM + ki * zM,
            JM = -.1 * QM + Zi * zM,
            dM = 3 * QM + oi * zM;
          PM.push(`${(nM/aM*100).toFixed(3)}% { opacity: ${HM.toFixed(3)}; transform: translate(${hM.toFixed(3)}rem, ${JM.toFixed(3)}rem) rotate(${dM.toFixed(2)}deg) scale(${LM.toFixed(3)}); filter: brightness(${mM.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${PM.join(" ")} }`
      }(), document.head.append(MM)
    }
    const Ii = "skyblockForgeView",
      Ki = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class qi extends nM {
      constructor(MM, rM, iM, OM, SM) {
        super(MM, iM, OM), this.translate = rM, this.requestForge = SM, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (MM, rM) => {
          var iM, OM;
          null !== this.forging || (null !== (iM = this.owned[(0, Wi.q)(rM, MM)]) && void 0 !== iM ? iM : 0) <= 0 || (this.selected[MM] = this.selected[MM] === rM ? null : rM, this.status = null, null === (OM = this.onPartSelected) || void 0 === OM || OM.call(this), this.emit())
        }, this.forge = MM => {
          var rM, iM;
          const OM = this.selectedParts();
          if (null === OM || this.isPending() || !this.open) return;
          const SM = (0, Wi.m)(OM);
          if (null === SM || SM.coalCost > this.coal) return;
          const jM = this.preview(SM),
            aM = null !== (rM = null === (iM = this.onForgeStarted) || void 0 === iM ? void 0 : iM.call(this, jM.tier, jM.named, MM)) && void 0 !== rM ? rM : () => {};
          if (this.dropArrival(), MM) {
            const MM = {
              id: ++this.forgeId,
              preview: jM,
              timers: [],
              stopSounds: aM,
              landed: !1,
              reply: null
            };
            MM.timers.push(setTimeout((() => {
              MM.landed = !0, null !== MM.reply && (this.apply(MM.reply), MM.reply = null, this.emit())
            }), si), setTimeout((() => {
              this.finishForge(MM)
            }), Di)), this.forging = MM
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(OM)
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        var rM;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === MM.forgeMessageKind) return this.dropForge(), this.apply(MM), this.status = null, this.show(), void(null === (rM = this.onOpened) || void 0 === rM || rM.call(this));
        const iM = this.forging;
        if (null !== iM && null !== MM.forgeRefusalKey) this.dropForge();
        else if (null !== iM && !iM.landed) return void(iM.reply = MM);
        this.apply(MM), this.emit()
      }
      apply(MM) {
        if (this.owned = MM.forgeOwnedParts, this.coal = MM.forgeCoalOwned, this.keepSelectionOwned("open" === MM.forgeMessageKind), null !== MM.forgeForgedSwordId) {
          var rM;
          const iM = (0, Wi.m)(MM.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (rM = null === iM || void 0 === iM ? void 0 : iM.displayName) && void 0 !== rM ? rM : ""
            }
          }
        } else null !== MM.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: MM.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(MM) {
        this.translate = MM, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(MM) {
        var rM;
        this.forging = null;
        const iM = this.selectedParts(),
          OM = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: MM.id,
          sameSword: null !== iM && (null === (rM = (0, Wi.m)(iM)) || void 0 === rM ? void 0 : rM.displayName) === MM.preview.name,
          timer: OM
        }, this.emit()
      }
      dropForge() {
        const MM = this.forging;
        if (null !== MM) {
          this.forging = null;
          for (const rM of MM.timers) clearTimeout(rM);
          MM.stopSounds(), null !== MM.reply && this.apply(MM.reply)
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
        var MM, rM, iM;
        const OM = this.selectedParts(),
          SM = null === OM ? null : (0, Wi.m)(OM),
          jM = null !== (MM = null === (rM = this.forging) || void 0 === rM ? void 0 : rM.preview) && void 0 !== MM ? MM : null === SM ? null : this.preview(SM);
        return {
          enabled: this.received,
          open: this.open,
          slots: Wi.l.map((MM => ({
            kind: MM,
            label: this.translate(Ki[MM]),
            parts: this.partsFor(MM)
          }))),
          coalOwned: this.coal,
          preview: jM,
          unformedSword: Wi.k[null !== (iM = this.selected.Blade) && void 0 !== iM ? iM : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((MM => MM > 0)),
          canForge: null !== jM && !jM.coalShort && !this.isPending(),
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
      preview(MM) {
        return {
          name: MM.displayName,
          lore: MM.lore,
          baseSword: MM.baseSword,
          enchantmentTier: MM.enchantmentTier,
          tier: Number(MM.enchantmentTier.slice(-1)),
          named: MM.named,
          stats: this.stats(MM),
          effects: MM.effects,
          coalCost: MM.coalCost,
          coalShort: null === this.forging && MM.coalCost > this.coal
        }
      }
      partsFor(MM) {
        const rM = [];
        for (const OM of Wi.h) {
          var iM;
          const SM = (0, Wi.q)(OM, MM),
            jM = null !== (iM = this.owned[SM]) && void 0 !== iM ? iM : 0;
          jM > 0 && rM.push({
            material: OM,
            itemName: SM,
            owned: jM,
            selected: this.selected[MM] === OM,
            placeholder: !1
          })
        }
        if (0 === rM.length) {
          const iM = Wi.h[0];
          rM.push({
            material: iM,
            itemName: (0, Wi.q)(iM, MM),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return rM
      }
      stats(MM) {
        const rM = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${MM.powerMultiplier.toFixed(2)}`,
          better: MM.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${MM.damageMultiplier.toFixed(2)}`,
          better: MM.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/MM.cooldownMultiplier).toFixed(2)}`,
          better: MM.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${MM.knockbackMultiplier.toFixed(2)}`,
          better: MM.knockbackMultiplier > 1
        }];
        return MM.reachBonus > 0 && rM.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${MM.reachBonus.toFixed(1)}`,
          better: !0
        }), MM.damageReduction > 0 && rM.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*MM.damageReduction)}%`,
          better: !0
        }), rM
      }
      selectedParts() {
        const {
          Blade: MM,
          Guard: rM,
          Handle: iM
        } = this.selected;
        return null === MM || null === rM || null === iM ? null : {
          blade: MM,
          guard: rM,
          handle: iM
        }
      }
      keepSelectionOwned(MM) {
        for (const iM of Wi.l) {
          var rM;
          const OM = this.selected[iM];
          if (null !== OM && (null !== (rM = this.owned[(0, Wi.q)(OM, iM)]) && void 0 !== rM ? rM : 0) > 0) continue;
          if (!MM) {
            this.selected[iM] = null;
            continue
          }
          const SM = [...Wi.h].reverse().find((MM => {
            var rM;
            return (null !== (rM = this.owned[(0, Wi.q)(MM, iM)]) && void 0 !== rM ? rM : 0) > 0
          }));
          this.selected[iM] = null !== SM && void 0 !== SM ? SM : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Ti = "skyblockSmugglerView",
      Vi = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class ci extends nM {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(MM, iM, OM), this.translate = rM, this.requestBuy = SM, this.now = jM, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = MM => MM, this.onBought = null, this.buy = MM => {
          const rM = this.deals[MM];
          void 0 !== rM && !this.isPending() && this.open && !this.soldOut.has(MM) && this.canAfford(rM) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, MM))
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        if (this.received = !0, this.day = MM.smugglerDay, this.deals = MM.smugglerDeals, this.rivets = MM.smugglerRivetsOwned, this.crests = MM.smugglerCrestsOwned, this.soldOut = new Set(MM.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + MM.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === MM.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = MM.smugglerBoughtSlot, null !== MM.smugglerBoughtSlot) {
          var rM, iM;
          const OM = this.deals[MM.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === OM ? "" : this.dealName(OM),
              amount: String(null !== (rM = null === OM || void 0 === OM ? void 0 : OM.smugglerDealAmount) && void 0 !== rM ? rM : 0)
            }
          }, this.boughtCount++, null === (iM = this.onBought) || void 0 === iM || iM.call(this)
        } else null !== MM.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: MM.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, void 0 !== iM && (this.itemName = iM), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(MM) {
        if (null !== MM.smugglerDealUniqueName) return MM.smugglerDealUniqueName;
        const rM = Vi[MM.smugglerDealItem];
        return void 0 === rM ? this.itemName(MM.smugglerDealItem) : this.translate(rM)
      }
      canAfford(MM) {
        return MM.smugglerDealRivets <= this.rivets && MM.smugglerDealCrests <= this.crests
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
        const MM = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return MM <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : MM < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(MM)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(MM / 60)),
          minutes: String(MM % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((MM, rM) => ({
            slot: rM,
            itemName: MM.smugglerDealItem,
            displayName: this.dealName(MM),
            enchantmentTier: MM.smugglerDealEnchantmentTier,
            amount: MM.smugglerDealAmount,
            rivets: MM.smugglerDealRivets,
            crests: MM.smugglerDealCrests,
            affordable: this.canAfford(MM),
            soldOut: this.soldOut.has(rM),
            justBought: this.boughtSlot === rM
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
    const MO = "skyblockPassageView",
      rO = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function iO(MM, rM) {
      return MM(rO[rM])
    }

    function OO(MM, rM, iM, OM) {
      const SM = Math.ceil((iM - OM) / 864e5),
        jM = iO(MM, rM);
      return SM > 1 ? MM("skyblockGame:passageNextDays", {
        phase: jM,
        days: String(SM)
      }) : MM("skyblockGame:passageNextSoon", {
        phase: jM
      })
    }
    class SO extends nM {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(MM, iM, OM), this.translate = rM, this.now = SM, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = MM => MM, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        this.message = MM, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, void 0 !== iM && (this.itemName = iM), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(MM) {
        return {
          itemName: MM.passageFish,
          displayName: this.itemName(MM.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(MM.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const MM = this.message;
        return null === MM ? {
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
          phase: MM.passagePhase,
          phaseName: iO(this.translate, MM.passagePhase),
          visitors: MM.passageVisitors.map((MM => this.describe(MM))),
          resting: this.describe(MM.passageResting),
          nextPhase: MM.passageNextPhase,
          next: OO(this.translate, MM.passageNextPhase, MM.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var jO = iM(39578);
    const aO = "skyblockKeepersChairView";
    class PO extends nM {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new jO.e;
        super(MM, iM, OM), this.translate = rM, this.requestAim = SM, this.now = jM, this.pacer = aM, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = MM => MM, this.aim = MM => {
          !this.awaitingReply && this.open && this.atChair && MM !== this.favoured && (null === MM || this.islands.some((rM => rM.keepersChairIslandId === MM && rM.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== MM && void 0 !== MM ? MM : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = aM.subscribe((() => {
          this.emit()
        }))
      }
      GL(MM) {
        var rM, iM;
        this.received = !0;
        const OM = this.favoured,
          SM = this.atChair;
        var jM;
        return this.islands = MM.keepersChairIslands, this.favoured = MM.keepersChairFavoured, this.passage = null !== (rM = MM.keepersChairPassage) && void 0 !== rM ? rM : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (iM = MM.keepersChairAtChair) || void 0 === iM || iM, "place" === MM.keepersChairMessageKind ? (!SM && this.atChair && "refused" === (null === (jM = this.status) || void 0 === jM ? void 0 : jM.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === MM.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== MM.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: MM.keepersChairRefusalKey,
          island: null
        } : this.favoured !== OM && (this.status = null === this.favoured ? {
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
      receivePassage(MM) {
        this.received && (this.passage = MM, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, void 0 !== iM && (this.itemName = iM), this.emit()
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
      islandName(MM) {
        const rM = this.islands.find((rM => rM.keepersChairIslandId === MM));
        return void 0 === rM ? MM : this.translate(rM.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const MM = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          rM = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((MM => {
            const rM = MM.keepersChairFeaturedFish;
            return {
              id: MM.keepersChairIslandId,
              name: this.translate(MM.keepersChairIslandNameKey),
              relit: MM.keepersChairIslandRelit,
              featuredFish: null === rM ? null : {
                itemName: rM,
                displayName: this.itemName(rM)
              },
              favoured: MM.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === MM ? null : {
            tone: MM.tone,
            text: this.translate(MM.key, null === MM.island ? void 0 : {
              island: this.islandName(MM.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === rM ? null : {
            phase: rM.keepersChairPassagePhase,
            phaseName: iO(this.translate, rM.keepersChairPassagePhase),
            nextPhase: rM.keepersChairPassageNextPhase,
            next: OO(this.translate, rM.keepersChairPassageNextPhase, rM.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const nO = "skyblockReachLogView",
      QO = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      zO = "Caught Fish",
      LO = [1, 2, 4];

    function mO(MM, rM) {
      return MM.map((MM => ({
        ...MM,
        reachLogPageFish: MM.reachLogPageFish.map((MM => ({
          ...MM,
          reachLogFishFresh: rM(MM)
        })))
      })))
    }
    class HO extends nM {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new jO.e;
        super(MM, iM, OM), this.translate = rM, this.requestOpen = SM, this.pacer = jM, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = MM => MM, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = MM => {
          this.pages.some((rM => rM.reachLogIslandId === MM)) && (this.selected = MM, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = jM.subscribe((() => {
          this.emit()
        }))
      }
      GL(MM) {
        if (this.received = !0, "status" === MM.reachLogMessageKind) return !0 === MM.reachLogNews && this.markNews(), this.serverFresh = MM.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const rM = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== MM.reachLogMessageKind)
          if (this.pageViews = null, this.pages = mO(MM.reachLogPages, (MM => MM.reachLogFishFresh || this.heldFresh.has(MM.reachLogFishItem))), this.letGoShown = MM.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, rM) this.showPages();
          else {
            for (const MM of this.pages)
              for (const rM of MM.reachLogPageFish) rM.reachLogFishFresh && this.heldFresh.add(rM.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, this.pageViews = null, void 0 !== iM && (this.itemName = iM), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = mO(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var MM, rM, iM, OM;
        const SM = this.pages.find((MM => MM.reachLogPageFish.some((MM => MM.reachLogFishFresh))));
        if (void 0 !== SM) return SM.reachLogIslandId;
        if (null !== this.selected && this.pages.some((MM => MM.reachLogIslandId === this.selected))) return this.selected;
        return null !== (MM = null !== (rM = null === (iM = this.pages.filter((MM => MM.reachLogIslandAwake)).at(-1)) || void 0 === iM ? void 0 : iM.reachLogIslandId) && void 0 !== rM ? rM : null === (OM = this.pages[0]) || void 0 === OM ? void 0 : OM.reachLogIslandId) && void 0 !== MM ? MM : null
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
        return this.pages.map((MM => {
          var rM;
          return {
            id: MM.reachLogIslandId,
            name: this.translate(MM.reachLogIslandNameKey),
            awake: MM.reachLogIslandAwake,
            gold: MM.reachLogPageGold,
            caught: MM.reachLogPageFish.filter((MM => MM.reachLogFishCaught && !MM.reachLogFishVisitor)).length,
            total: MM.reachLogPageFish.filter((MM => !MM.reachLogFishVisitor)).length,
            fish: MM.reachLogPageFish.map((MM => {
              const rM = MM.reachLogFishBestKg;
              return {
                itemName: MM.reachLogFishItem,
                name: MM.reachLogFishCaught ? this.itemName(MM.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: MM.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / MM.reachLogFishChance))
                }),
                best: MM.reachLogFishCaught ? null === rM ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: rM.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: MM.reachLogFishMarks,
                ribbons: LO.map((rM => 0 !== (MM.reachLogFishRibbons & rM))),
                glimmer: 0 !== (8 & MM.reachLogFishRibbons),
                halo: 0 !== (32 & MM.reachLogFishRibbons),
                fresh: MM.reachLogFishFresh,
                visitor: MM.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (rM = MM.reachLogPageReturner) && void 0 !== rM ? rM : null)
          }
        }))
      }
      buildReturner(MM) {
        return null === MM ? null : {
          itemName: MM.reachLogReturnerFishItem,
          line: this.translate(MM.reachLogReturnerLineKey, {
            name: this.translate(MM.reachLogReturnerNameKey),
            trinket: this.translate(MM.reachLogReturnerTrinketKey)
          }),
          back: MM.reachLogReturnerBack
        }
      }
      receivePassagePhase(MM) {
        null !== this.passagePhase && this.passagePhase !== MM && (this.pagesCurrent = !1), this.passagePhase = MM
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const hO = "skyblockLampLightView";
    class JO {
      constructor(MM, rM, iM, OM) {
        this.Tz = MM, this.translate = rM, this.requestCommand = iM, this.pacer = OM, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.dh = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = MM => {
          MM ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = MM => {
          this.send(`buy ${MM}`)
        }, this.socket = MM => {
          this.send(`socket ${null!==MM&&void 0!==MM?MM:sM}`)
        }, this.wearTint = MM => {
          this.send(`tint ${null!==MM&&void 0!==MM?MM:sM}`)
        }, this.setSituation = MM => {
          this.situation = MM, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = OM.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = OM.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      GL(MM) {
        if (this.message = MM, null !== MM.lampLightShop && (this.shop = MM.lampLightShop), "open" === MM.lampLightKind && (this.refusalKey = null), "reply" === MM.lampLightKind) {
          var rM;
          const SM = null !== (rM = MM.lampLightReplyTag) && void 0 !== rM ? rM : null,
            jM = null !== SM && SM === this.offTag;
          var iM, OM;
          if (jM ? this.settleOff() : null !== SM && SM !== this.awaitingTag || this.settleReply(), this.refusalKey = MM.lampLightRefusalKey, null !== MM.lampLightBought && !jM) this.sparkle = {
            id: MM.lampLightBought,
            count: (null !== (iM = null === (OM = this.sparkle) || void 0 === OM ? void 0 : OM.count) && void 0 !== iM ? iM : 0) + 1
          }
        }
        MM.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === MM.lampLightKind && (this.lastGained = MM.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(MM) {
        MM !== this.atChair && (this.atChair = MM, MM && (this.refusalKey = null), this.emit())
      }
      setTranslator(MM, rM) {
        this.translate = MM, this.locale = null !== rM && void 0 !== rM ? rM : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.dh = !0
      }
      send(MM) {
        var rM;
        if (null !== this.awaitingTag || "ready" !== (null === (rM = this.message) || void 0 === rM ? void 0 : rM.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const iM = this.nextTag();
        this.awaitingTag = iM, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${MM} ${iM}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const MM = this.nextTag();
        this.offTag = MM, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${MM}`)
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
        this.dh || (this.snapshot = this.buildSnapshot(), this.Tz(this.snapshot))
      }
      formatLight(MM) {
        return Math.floor(MM).toLocaleString(this.locale)
      }
      formatPercent(MM) {
        const rM = 100 * MM;
        return rM >= 10 ? Math.round(rM).toLocaleString(this.locale) : rM.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(MM, rM) {
        if ("bite" === MM) return this.translate("skyblockGame:lampLightBite", {
          seconds: (rM.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === MM) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(rM.lampLightRareChance)
        });
        if ("notice" === MM) return null === rM.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(rM.lampLightNoticeChance)
        });
        const iM = "meter" === MM ? rM.lampLightMeterCatches : rM.lampLightBloomCatches;
        return null === iM ? null : this.translate("meter" === MM ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(iM))
        })
      }
      oddsLines(MM, rM) {
        const iM = (MM, rM) => {
            var iM;
            return null !== (iM = {
              bite: rM.lampLightBiteMs,
              rare: rM.lampLightRareChance,
              meter: rM.lampLightMeterCatches,
              bloom: rM.lampLightBloomCatches,
              notice: rM.lampLightNoticeChance
            } [MM]) && void 0 !== iM ? iM : 0
          },
          OM = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          SM = [];
        for (const jM of ["bite", "rare", "meter", "bloom", "notice"]) {
          const aM = this.formatOdds(jM, MM),
            PM = this.formatOdds(jM, rM);
          if (null === aM || null === PM || "bite" !== jM && "rare" !== jM && aM === PM) continue;
          const nM = iM(jM, rM) - iM(jM, MM),
            QM = OM[jM] ? nM < 0 : nM > 0;
          SM.push({
            label: jM,
            before: aM,
            after: PM,
            tone: aM === PM ? "same" : QM ? "better" : "worse"
          })
        }
        return SM
      }
      charmView(MM, rM, iM) {
        const OM = MM.lampLightCharmId.charAt(0).toUpperCase() + MM.lampLightCharmId.slice(1),
          SM = "bloom" === this.situation;
        return {
          id: MM.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${OM}`),
          effect: this.translate(`skyblockGame:lampLightCharm${OM}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(MM.lampLightCharmCost)
          }),
          owned: MM.lampLightCharmOwned,
          affordable: iM >= MM.lampLightCharmCost,
          socketed: rM.lampLightSocketed === MM.lampLightCharmId,
          lines: this.oddsLines(SM ? rM.lampLightBareBloom : rM.lampLightBareOpen, SM ? MM.lampLightCharmBloom : MM.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var MM, rM, iM, OM;
        const SM = this.message,
          jM = "ready" === (null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) ? this.shop : null,
          aM = null !== (MM = null === SM || void 0 === SM ? void 0 : SM.lampLightBalance) && void 0 !== MM ? MM : 0,
          PM = this.atChair,
          nM = "loading" === (null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          QM = "ready" !== (null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) || PM ? null !== (rM = this.refusalKey) && void 0 !== rM ? rM : nM : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== SM && "locked" !== SM.lampLightStatus,
          status: null !== (iM = null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) && void 0 !== iM ? iM : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(aM)
          }),
          releasing: null !== (OM = null === SM || void 0 === SM ? void 0 : SM.lampLightReleasing) && void 0 !== OM && OM,
          gained: null === SM || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === SM || void 0 === SM ? void 0 : SM.lampLightStatus) && PM && !this.isPending(),
          situation: this.situation,
          shop: null === jM ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: jM.lampLightOddsRod,
              island: this.translate(jM.lampLightIslandNameKey)
            }),
            heldRod: null !== jM.lampLightHeldRod,
            charms: jM.lampLightCharms.map((MM => this.charmView(MM, jM, aM))),
            tints: jM.lampLightTints.map((MM => {
              const rM = MM.lampLightTintId,
                [iM, OM, SM] = MM.lampLightTintColour;
              return {
                id: rM,
                name: this.translate(`skyblockGame:lampLightTint${rM.charAt(0).toUpperCase()}${rM.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(MM.lampLightTintCost)
                }),
                owned: MM.lampLightTintOwned,
                affordable: aM >= MM.lampLightTintCost,
                wearing: jM.lampLightTint === rM,
                colour: `rgb(${iM}, ${OM}, ${SM})`
              }
            })),
            wearingIslandColours: null === jM.lampLightTint
          },
          notice: null === QM ? null : this.translate(QM),
          sparkle: this.sparkle
        }
      }
    }
    const dO = "skyblockMagmawardView";
    class yO {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Tz = MM, this.now = rM, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = NM.map((() => 0)), this.wornAt = NM.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      GL(MM) {
        var rM, iM;
        const OM = NM.map(((rM, iM) => !0 === MM.magmawardPiecesWorn[iM]));
        if (!OM.includes(!0)) return this.snapshot = null, void this.Tz(null);
        const SM = this.now(),
          jM = this.snapshot;
        null === jM && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const aM = MM.magmawardFuelCarried,
          PM = !OM.includes(!1);
        let nM = null !== (rM = null === jM || void 0 === jM ? void 0 : jM.pulse) && void 0 !== rM ? rM : null,
          QM = null !== (iM = null === jM || void 0 === jM ? void 0 : jM.flare) && void 0 !== iM ? iM : null;
        MM.magmawardFuelBurned ? (nM = "burn", QM = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = SM, this.flareAt = SM) : null !== jM && aM > jM.fuel && (nM = "gain", this.pulseToken++, this.pulseAt = SM), PM && null !== jM && !jM.fullSet && (QM = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = SM, this.setLitAt = SM);
        const zM = NM.map(((MM, rM) => (OM[rM] && null !== jM && !jM.pieces[rM].worn && (this.wornTokens[rM]++, this.wornAt[rM] = SM), {
          itemName: MM,
          worn: OM[rM],
          wornToken: this.wornTokens[rM],
          justWorn: OM[rM] && this.isPlaying(this.wornAt[rM], SM)
        })));
        this.snapshot = {
          pieces: zM,
          wornCount: OM.filter(Boolean).length,
          fullSet: PM,
          fuel: aM,
          fuelState: aM <= 0 ? "empty" : aM <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, SM) ? nM : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, SM) ? QM : null,
          flareToken: this.flareToken,
          setLit: PM && this.isPlaying(this.setLitAt, SM),
          setLitToken: this.setLitToken
        }, this.Tz(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Tz(null)
      }
      isPlaying(MM, rM) {
        return rM - MM < 1200
      }
    }
    const lO = "skyblockGlowtideView";
    class EO {
      constructor(MM) {
        this.Tz = MM, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = MM => {
          this.arrow = MM, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      GL(MM) {
        this.bloom = MM.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Tz(null))
      }
      afterRender(MM, rM) {
        const iM = this.bloom;
        if (null === iM || null === MM) return;
        const OM = iM.glowtideBloomX - MM[0],
          SM = iM.glowtideBloomZ - MM[2],
          jM = Math.hypot(OM, SM),
          aM = this.snapshot,
          PM = null !== aM && void 0 !== aM && aM.inRange ? 1 : 0,
          nM = jM <= 12.5 + PM && MM[1] - iM.glowtideBloomY <= 10 + PM;
        !nM || null !== aM && void 0 !== aM && aM.inRange || this.inRangeToken++;
        const QM = {
          colour: iM.glowtideBloomColour,
          inRange: nM,
          distance: Math.round(jM),
          inRangeToken: this.inRangeToken
        };
        (null === aM || QM.colour !== aM.colour || QM.inRange !== aM.inRange || !nM && QM.distance !== aM.distance) && (this.snapshot = QM, this.Tz(QM));
        const zM = LM.d.computeShortestRotation(rM, (0, LM.wb)([OM, 0, SM]));
        null === this.arrow || Math.abs(zM - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${zM}rad)`, this.arrowTurn = zM)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Tz(null)
      }
    }
    const UO = "skyblockGlowMeterView";
    class GO {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Tz = MM, this.now = rM, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      GL(MM) {
        const rM = this.now(),
          {
            glowMeterFill: iM,
            glowMeterCapacity: OM
          } = MM,
          SM = iM >= OM,
          jM = this.snapshot;
        null !== jM && (SM && !jM.full && (this.fullToken++, this.fullAt = rM), jM.full && !SM ? (this.burstToken++, this.burstAt = rM) : iM > jM.fill && (this.gainToken++, this.gainAt = rM)), this.snapshot = {
          fill: iM,
          vL: OM,
          ratio: Math.min(1, Math.max(0, iM / OM)),
          full: SM,
          rares: MM.glowMeterRares,
          ready: SM && this.isPlaying(this.fullAt, rM),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, rM),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, rM),
          gainToken: this.gainToken
        }, this.Tz(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Tz(null)
      }
      isPlaying(MM, rM) {
        return rM - MM < 2e3
      }
    }
    const CO = "skyblockHushWaitView";
    class eO {
      constructor(MM) {
        this.Tz = MM, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      GL(MM) {
        let {
          hushWaitMs: rM,
          hushWaitTotalMs: iM,
          hushWaitLines: OM
        } = MM;
        if (this.clearTimers(), this.token++, 0 === OM.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (rM <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: OM[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const SM = Math.max(null !== iM && void 0 !== iM ? iM : rM, rM),
          jM = SM - rM,
          aM = MM => SM * MM / OM.length,
          PM = MM => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: SM,
              elapsedMs: jM,
              line: OM[MM],
              lineIndex: MM
            })
          };
        let nM = 0;
        for (; nM + 1 < OM.length && aM(nM + 1) <= jM;) nM++;
        PM(nM);
        for (let QM = nM + 1; QM < OM.length; QM++) this.later(aM(QM) - jM, (() => {
          PM(QM)
        }));
        this.later(rM, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(MM) {
        this.snapshot = MM, this.Tz(MM)
      }
      later(MM, rM) {
        this.timers.push(setTimeout(rM, MM))
      }
      clearTimers() {
        for (const MM of this.timers) clearTimeout(MM);
        this.timers = []
      }
    }
    const bO = "skyblockTideChartsView",
      wO = 36e5,
      tO = 864e5;

    function gO(MM, rM, iM) {
      const [OM, SM, jM, aM] = MM.tideChartArea, PM = Math.floor(rM), nM = Math.floor(iM);
      return PM >= OM && PM <= jM && nM >= SM && nM <= aM
    }

    function uO(MM, rM, iM) {
      const [OM, SM, jM, aM] = MM.tideChartWater;
      return function(MM, rM, iM, OM, SM, jM) {
        const aM = 4 - AM(Math.floor(SM) - (MM - iM), iM);
        return 5 * AM(Math.floor(jM) - (rM - OM), OM) + aM
      }(OM, SM, jM, aM, rM, iM)
    }

    function RO(MM, rM, iM) {
      const OM = MM.tideCharts;
      for (let SM = 0; SM < OM.length; SM++)
        if (gO(OM[SM], rM, iM)) return OM[SM];
      return null
    }

    function pO(MM, rM, iM) {
      const OM = Math.max(0, rM - iM);
      return OM > tO ? MM("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(OM / tO))
      }) : OM > wO ? MM("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(OM / wO))
      }) : MM("skyblockGame:tideChartsTurnSoon")
    }
    class WO extends nM {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(MM, iM, OM), this.translate = rM, this.now = SM, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.LH = MM => {
          this.picked = MM, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        const rM = this.message;
        if (null !== rM)
          for (const OM of MM.tideCharts) {
            var iM;
            const MM = rM.tideCharts.find((MM => MM.tideChartIsland === OM.tideChartIsland)),
              SM = OM.tideChartLit & ~(null !== (iM = null === MM || void 0 === MM ? void 0 : MM.tideChartLit) && void 0 !== iM ? iM : 0);
            void 0 !== MM && 0 !== SM && (this.pulse = {
              island: OM.tideChartIsland,
              cells: SM,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = MM, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(MM, rM) {
        var iM;
        const OM = null === this.message || Number.isNaN(MM) ? null : RO(this.message, MM, rM),
          SM = null !== (iM = null === OM || void 0 === OM ? void 0 : OM.tideChartIsland) && void 0 !== iM ? iM : null,
          jM = null === OM ? -1 : function(MM, rM, iM) {
            const [OM, SM, jM, aM] = MM.tideChartWater;
            return function(MM, rM, iM, OM, SM, jM, aM) {
              return ((SM - MM) / (iM + aM)) ** 2 + ((jM - rM) / (OM + aM)) ** 2 <= 1
            }(OM, SM, jM, aM, rM, iM, 2) ? uO(MM, rM, iM) : -1
          }(OM, MM, rM);
        return (SM !== this.hereIsland || jM !== this.hereCell) && (this.hereIsland = SM, this.hereCell = jM, null !== SM && (this.lastIsland = SM), !0)
      }
      afterRender(MM) {
        if (null === this.message) return;
        this.lastX = null === MM ? Number.NaN : MM[0], this.lastZ = null === MM ? Number.NaN : MM[2];
        const rM = this.locate(this.lastX, this.lastZ),
          iM = this.expirePulses();
        (rM || iM || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const MM = this.now();
        return !(!this.open || MM - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = MM, pO(this.translate, this.message.tideChartTurnsInMs, MM - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(MM, rM) {
        const iM = null === this.message ? null : RO(this.message, MM, rM);
        if (null === iM) return;
        const OM = uO(iM, MM, rM);
        0 === (iM.tideChartPreBlank & 1 << OM) && (this.cast = {
          island: iM.tideChartIsland,
          cell: OM,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const MM = this.now();
        let rM = !1;
        return 0 !== this.pulse.cells && MM - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, rM = !0), null !== this.cast && MM - this.cast.atMs >= 1500 && (this.cast = null, rM = !0), rM
      }
      setTranslator(MM) {
        this.translate = MM, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(MM, rM) {
        var iM;
        return null !== (iM = MM.tideCharts.find((MM => MM.tideChartIsland === rM))) && void 0 !== iM ? iM : null
      }
      describe(MM) {
        var rM, iM, OM;
        const SM = MM.tideChartIsland,
          jM = [];
        for (let HM = 0; HM < 25; HM++) {
          const rM = 1 << HM;
          0 !== (MM.tideChartLit & rM) ? jM.push("lit") : 0 !== (MM.tideChartClear & rM) ? jM.push("clear") : 0 !== (MM.tideChartPreBlank & rM) ? jM.push("shore") : jM.push("water")
        }
        const aM = function(MM) {
            let rM = 0;
            for (let iM = MM >>> 0; 0 !== iM; iM &= iM - 1) rM++;
            return rM
          }(MM.tideChartLit),
          PM = MM.tideChartInkCount,
          nM = this.translate(MM.tideChartIslandNameKey),
          QM = this.translate("skyblockGame:tideChartsLit", {
            lit: String(aM),
            ink: String(PM)
          }),
          zM = null === MM.tideChartPictureNameKey ? null : this.translate(MM.tideChartPictureNameKey),
          LM = this.hereIsland === SM && -1 !== this.hereCell ? this.hereCell : null,
          mM = [`${nM}: ${QM}.`];
        if (null !== zM && mM.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: zM
          })), null !== LM) {
          const MM = Math.floor(LM / 5) + 1,
            rM = LM % 5 + 1;
          mM.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(MM),
            column: String(rM)
          }))
        }
        return {
          island: SM,
          islandName: nM,
          cells: jM,
          hereCell: LM,
          lit: aM,
          ink: PM,
          litText: QM,
          pictureName: zM,
          gridLabel: mM.join(" "),
          pulseCells: this.pulse.island === SM ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (rM = this.cast) || void 0 === rM ? void 0 : rM.island) === SM ? this.cast.cell : null,
          castToken: null !== (iM = null === (OM = this.cast) || void 0 === OM ? void 0 : OM.token) && void 0 !== iM ? iM : 0
        }
      }
      buildSnapshot() {
        var MM, rM, iM;
        const OM = this.message;
        if (null === OM || 0 === OM.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const SM = this.findChart(OM, this.hereIsland),
          jM = null !== (MM = null !== (rM = null !== (iM = this.findChart(OM, this.open ? this.picked : null)) && void 0 !== iM ? iM : SM) && void 0 !== rM ? rM : this.findChart(OM, this.lastIsland)) && void 0 !== MM ? MM : OM.tideCharts[0],
          aM = null === SM ? null : this.describe(SM);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: aM,
          card: jM === SM ? aM : this.describe(jM),
          turnsText: pO(this.translate, OM.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(OM.tideChartBookCount)
          }),
          tabs: OM.tideCharts.map((MM => ({
            island: MM.tideChartIsland,
            name: this.translate(MM.tideChartIslandNameKey),
            selected: MM.tideChartIsland === jM.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const sO = "skyblockRegularsView",
      DO = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      kO = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function ZO(MM, rM) {
      return "given" === MM ? rM.given : "owed" === MM ? rM.owed : rM.goal
    }
    class oO extends nM {
      constructor(MM, rM, iM, OM) {
        super(MM, iM, OM), this.translate = rM, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = MM => MM, this.openIsland = MM => {
          this.selected = MM, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = MM => {
          this.selected = MM, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        this.message = MM, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const MM = this.openedFromReachLog;
        return this.openedFromReachLog = !1, MM
      }
      setTranslator(MM, rM, iM) {
        this.translate = MM, void 0 !== iM && (this.itemName = iM), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(MM, rM, iM) {
        return {
          text: this.translate(ZO(MM, rM), iM),
          given: "given" === MM
        }
      }
      describeRegular(MM, rM) {
        const iM = this.translate,
          OM = null !== MM.regularKg,
          SM = MM.regularMeetings,
          jM = OM ? 0 === SM ? iM("skyblockGame:regularsNotMet") : 1 === SM ? iM("skyblockGame:regularsMeetingsOne") : iM("skyblockGame:regularsMeetings", {
            count: SM
          }) : "";
        return {
          id: MM.regularId,
          name: iM(MM.regularNameKey),
          line: iM(MM.regularLineKey),
          itemName: MM.regularFishItem,
          fishName: this.itemName(MM.regularFishItem),
          tagged: OM,
          size: null === MM.regularKg ? iM("skyblockGame:regularsNotTagged") : iM("skyblockGame:regularsSize", {
            kg: MM.regularKg.toFixed(1)
          }),
          meetings: jM,
          chance: iM("skyblockGame:regularsChance", {
            count: MM.regularOneInCasts
          }),
          resting: MM.regularRestingToday,
          gifts: [{
            text: iM("skyblockGame:regularsGiftFlare"),
            given: SM >= 3
          }, this.describeGift(MM.regularTintGift, DO, {
            tint: iM(MM.regularTintNameKey)
          })],
          history: [...MM.regularHistory].reverse().map((MM => {
            const OM = MM.regularMeetingKg.toFixed(1),
              SM = rM - MM.regularMeetingDay;
            return SM <= 0 ? iM("skyblockGame:regularsToday", {
              kg: OM
            }) : iM("skyblockGame:regularsDaysAgo", {
              days: SM,
              kg: OM
            })
          }))
        }
      }
      describeIsland(MM, rM) {
        return {
          id: MM.regularsIslandId,
          name: this.translate(MM.regularsIslandNameKey),
          charm: this.describeGift(MM.regularsCharmGift, kO, {
            charm: this.translate(MM.regularsCharmNameKey)
          }),
          regulars: MM.regularsList.map((MM => this.describeRegular(MM, rM)))
        }
      }
      buildSnapshot() {
        var MM, rM, iM, OM;
        const SM = this.message;
        if (null === SM) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const jM = SM.regularsIslands.map((MM => this.describeIsland(MM, SM.regularsToday))),
          aM = null !== (MM = null !== (rM = null === (iM = jM.find((MM => MM.id === this.selected))) || void 0 === iM ? void 0 : iM.id) && void 0 !== rM ? rM : null === (OM = jM[0]) || void 0 === OM ? void 0 : OM.id) && void 0 !== MM ? MM : "";
        return {
          enabled: !0,
          open: this.open,
          selected: aM,
          islands: jM
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const fO = "skyblockHiddenWatersView";
    class YO {
      constructor(MM) {
        this.Tz = MM, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      GL(MM) {
        this.snapshot = function(MM) {
          const [rM, iM] = MM.hiddenWatersMapSize, OM = (MM, OM) => ({
            left: 1 - MM / rM,
            top: OM / iM
          }), SM = new Map;
          for (const [aM, PM] of MM.hiddenWatersGlimpses) {
            var jM;
            const MM = null !== (jM = SM.get(aM)) && void 0 !== jM ? jM : [];
            MM.push(PM), SM.set(aM, MM)
          }
          return {
            found: MM.hiddenWatersFound,
            total: MM.hiddenWatersTotal,
            aspect: iM / rM,
            pins: MM.hiddenWatersPins.map((MM => {
              let [rM, iM] = MM;
              return OM(rM, iM)
            })),
            islands: MM.hiddenWatersIslands.map((MM => {
              let [SM, jM, aM, PM] = MM;
              const {
                left: nM,
                top: QM
              } = OM(aM + 1, jM);
              return {
                left: nM,
                top: QM,
                width: (aM + 1 - SM) / rM,
                height: (PM + 1 - jM) / iM
              }
            })),
            glimpses: SM
          }
        }(MM), this.Tz(this.snapshot)
      }
    }
    const NO = "skyblockDialogueView";
    class AO extends nM {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(MM, iM, OM), this.translate = rM, this.requestDialogue = SM, this.now = jM, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = MM => {
          this.selection = {
            kind: "quest",
            questId: MM
          }, this.request(), this.show()
        }, this.selectCharacter = MM => {
          this.selection = {
            kind: "character",
            npcId: MM
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      GL(MM) {
        this.received = !0, this.scripts = MM.questDialogueScripts, this.speakers = new Map(MM.questDialogueSpeakers.map((MM => [MM.dialogueSpeakerId, MM]))), this.emit()
      }
      setTranslator(MM) {
        this.translate = MM, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const MM = this.now();
        MM >= this.requestAvailableAt && (this.requestAvailableAt = MM + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var MM;
        const rM = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...rM,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const iM = this.selection;
        if ("quest" === iM.kind) {
          const MM = this.scripts.find((MM => MM.dialogueQuestId === iM.questId));
          return {
            ...rM,
            characters: [],
            questFocus: iM.questId,
            conversations: MM ? [this.conversation(MM)] : []
          }
        }
        const OM = [];
        for (let jM = this.scripts.length - 1; jM >= 0; jM--) {
          const MM = this.scripts[jM].dialogueLines;
          for (let rM = MM.length - 1; rM >= 0; rM--) OM.includes(MM[rM].dialogueSpeakerId) || OM.push(MM[rM].dialogueSpeakerId)
        }
        const SM = null !== iM.npcId && OM.includes(iM.npcId) ? iM.npcId : null !== (MM = OM[0]) && void 0 !== MM ? MM : null;
        return {
          ...rM,
          characters: OM.map((MM => {
            var rM, iM;
            return {
              id: MM,
              styling: null !== (rM = null === (iM = this.speakers.get(MM)) || void 0 === iM ? void 0 : iM.dialogueSpeakerStyling) && void 0 !== rM ? rM : MM,
              selected: MM === SM
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((MM => MM.dialogueLines.some((MM => MM.dialogueSpeakerId === SM)))).map((MM => this.conversation(MM))).reverse()
        }
      }
      conversation(MM) {
        let rM = null;
        return {
          questId: MM.dialogueQuestId,
          questName: this.translate(MM.dialogueQuestNameKey),
          completed: MM.dialogueQuestCompleted,
          lines: MM.dialogueLines.map(((MM, iM) => {
            var OM;
            const SM = MM.dialogueSpeakerId === rM || null === (OM = this.speakers.get(MM.dialogueSpeakerId)) || void 0 === OM ? void 0 : OM.dialogueSpeakerStyling;
            return rM = MM.dialogueSpeakerId, {
              key: iM,
              display: {
                line: {
                  translationKey: MM.dialogueLineKey,
                  params: this.params(MM.dialogueLineParams)
                },
                speakerName: SM,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(MM) {
        if (void 0 !== MM) return Object.fromEntries(Object.entries(MM).map((MM => {
          let [rM, iM] = MM;
          return [rM, "string" === typeof iM ? iM : this.translate(iM.translationKey)]
        })))
      }
    }
    var xO = iM(605),
      vO = iM(1279),
      FO = iM(83);
    const BO = "skyblockAutographsView";

    function XO(MM) {
      const rM = xO.n[MM];
      return {
        label: rM.chatTag.map((MM => MM.str)).join(""),
        icon: rM.icon,
        colour: rM.mainRGB
      }
    }
    class IO extends nM {
      constructor(MM) {
        let rM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = rM, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      GL(MM) {
        this.signatures = MM.autographSignatures, MM.autographOpen ? this.show() : this.emit()
      }
      setTranslator(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = rM, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var MM;
        const rM = null !== (MM = this.signatures) && void 0 !== MM ? MM : [],
          iM = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          OM = [...rM].sort(((MM, rM) => Number(null !== rM.autographRank) - Number(null !== MM.autographRank) || rM.autographSignedAtMs - MM.autographSignedAtMs)).map((MM => ({
            key: `${MM.autographSignedAtMs}|${MM.autographSignerName}`,
            name: (0, vO.e)(MM.autographSignerName, !FO.featureFlags.canSeeRealPlayerNames),
            rank: null === MM.autographRank ? null : XO(MM.autographRank),
            signedOn: iM.format(MM.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: OM,
          total: OM.length,
          rankTotal: OM.filter((MM => null !== MM.rank)).length
        }
      }
    }
    const KO = "skyblockHudView",
      qO = () => {},
      TO = {
        getItem: () => null,
        setItem: qO,
        removeItem: qO
      };
    class VO {
      constructor(MM) {
        let {
          translate: rM,
          translateWithIcons: iM,
          setMenuOpen: OM = qO,
          dismissMenu: SM = () => {
            OM(!1)
          },
          publishSkills: jM = qO,
          publishQuests: aM = qO,
          publishQuestNotification: PM = qO,
          publishDungeons: nM = qO,
          publishCollections: QM = qO,
          publishMap: LM = qO,
          publishHud: mM = qO,
          publishPortalTransit: HM = qO,
          publishDailyReward: hM = qO,
          publishMailbox: JM = qO,
          publishQuestGraph: dM = qO,
          publishForge: yM = qO,
          publishSmuggler: lM = qO,
          publishKeepersChair: EM = qO,
          publishReachLog: UM = qO,
          publishLampLight: CM = qO,
          publishMagmaward: eM = qO,
          publishGlowtide: bM = qO,
          publishGlowMeter: wM = qO,
          publishHushWait: tM = qO,
          publishPassage: gM = qO,
          publishTideCharts: uM = qO,
          publishRegulars: RM = qO,
          publishHiddenWaters: pM = qO,
          publishDialogue: WM = qO,
          publishAutographs: sM = qO,
          isLoadingScreenUp: DM = () => !1,
          onDailyRewardCoinLanded: kM = qO,
          onDailyRewardStarted: ZM = qO,
          onDailyRewardFinished: oM = qO,
          onDailyRewardItemLanded: fM = qO,
          onMailboxStarted: YM = qO,
          journeyStorage: NM = TO,
          requestTracking: AM = qO,
          requestTravel: xM = qO,
          requestDungeonEnter: vM = qO,
          requestQuestJump: FM = qO,
          requestQuestArrive: BM = qO,
          requestForge: XM = qO,
          requestSmuggle: IM = qO,
          requestKeepersChairAim: KM = qO,
          requestReachLogOpen: qM = qO,
          requestLampLight: TM = qO,
          requestDialogue: VM = qO
        } = MM;
        this.navigation = void 0, this.map = void 0, this.compass = new GM, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new jO.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = MM => MM, this.close = () => {
          for (const MM of this.panels) MM.close()
        }, this.setMenuOpen = OM, this.publishHud = mM, this.portalTransit = new yi(HM, NM), this.magmaward = new yO(eM), this.glowtide = new EO(bM), this.glowMeter = new GO(wM), this.hushWait = new eO(tM), this.dailyReward = new Ui(hM, (() => DM() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (MM => {
          this.quests.setNotificationsHeld(MM)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), kM, ZM, oM, fM);
        const cM = MM => {
          this.panels.some((MM => MM.isOpen())) || (MM ? SM() : this.setMenuOpen(!1))
        };
        this.skills = new or(jM, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), rM, void 0, void 0, cM), this.quests = new xr(aM, AM, rM, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, cM, PM), this.dungeons = new Br(nM, rM, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, cM, vM), this.collections = new Hi(QM, rM, (() => {
          this.beforePanelOpen(this.collections)
        }), cM), this.map = new zM(LM, xM, rM, (() => {
          this.beforePanelOpen(this.map)
        }), cM), this.questGraph = new Ri(dM, rM, (() => {
          this.beforePanelOpen(this.questGraph)
        }), cM, FM, BM, NM), this.forge = new qi(yM, rM, (() => {
          this.beforePanelOpen(this.forge)
        }), cM, XM), this.smuggler = new ci(lM, rM, (() => {
          this.beforePanelOpen(this.smuggler)
        }), cM, IM), this.lampLight = new JO(CM, rM, TM, this.commandPacer), this.keepersChair = new PO(EM, rM, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (MM => {
          this.lampLight.onChairClosed(), cM(MM)
        }), KM, Date.now, this.commandPacer), this.reachLog = new HO(UM, rM, (() => {
          this.beforePanelOpen(this.reachLog)
        }), cM, qM, this.commandPacer), this.passage = new SO(gM, rM, (() => {
          this.beforePanelOpen(this.passage)
        }), cM), this.tideCharts = new WO(uM, rM, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), cM), this.regulars = new oO(RM, rM, (() => {
          this.beforePanelOpen(this.regulars)
        }), (MM => {
          this.regulars.takeReturnToReachLog() && !MM && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), cM(MM)
        })), this.hiddenWaters = new YO(pM), this.dialogue = new AO(WM, rM, (() => {
          this.beforePanelOpen(this.dialogue)
        }), cM, VM), this.autographs = new IO(sM, (() => {
          this.beforePanelOpen(this.autographs)
        }), cM), this.mailbox = new bi(JM, (() => DM() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), YM), this.quests.translateWithIcons = null !== iM && void 0 !== iM ? iM : null, this.skills.onLevelUp = MM => {
          this.quests.notify(MM)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new kr(this.map, this.quests, this.compass, rM)
      }
      getHudSnapshot() {
        const MM = this.hudSnapshot,
          rM = this.dailyReward.getHeldCoins();
        return null === MM || rM <= 0 || !("hudPurseCoins" in MM) ? MM : {
          ...MM,
          hudPurseCoins: Math.max(0, MM.hudPurseCoins - rM)
        }
      }
      receiveHud(MM) {
        this.hudSnapshot = MM, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(MM) {
        this.setMenuOpen(!0);
        const rM = MM === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = MM;
        for (const iM of this.panels) iM === MM || rM && iM === this.reachLog || iM.close();
        this.openingPanel = null
      }
      setTranslator(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rM => this.resolveItemName(rM, MM);
        this.quests.translateWithIcons = null !== iM && void 0 !== iM ? iM : null, this.navigation.setTranslator(MM, rM), this.lampLight.setTranslator(MM, rM), this.mailbox.setItemName(OM);
        for (const SM of this.panels) SM.setTranslator(MM, rM, OM)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const MM of this.panels) MM.dispose()
      }
    }
    var cO = iM(1116),
      MS = iM.n(cO),
      rS = iM(19),
      iS = iM(37538),
      OS = iM(3815),
      SS = iM(2026),
      jS = iM(2006),
      aS = iM(35040),
      PS = iM(1188),
      nS = iM(1516),
      QS = iM(1303);

    function zS(MM) {
      let {
        controller: rM,
        minimap: iM,
        children: OM
      } = MM;
      const SM = (0, nS.e)(KO, rM.getHudSnapshot()),
        [jM, aM] = (0, eM.useState)(rM.skills.getSnapshot().overallLevel);
      (0, nS.d)(Zr, (MM => {
        aM(MM.overallLevel)
      }));
      const PM = (0, eM.useRef)(null);
      (0, nS.d)(Ei, (MM => {
        ! function(MM, rM) {
          if (null === MM || "function" !== typeof MM.animate) return;
          const iM = rM ? 1.35 : 1.15;
          MM.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${iM})`
          }, {
            transform: "scale(1)"
          }], {
            duration: rM ? 320 : 160,
            easing: "ease-out"
          }), MM.classList.toggle("Receiving", !rM), rM && (MM.classList.remove("Shine"), MM.offsetWidth, MM.classList.add("Shine"))
        }(PM.current, MM)
      }));
      const {
        t: nM
      } = (0, PS.A)(), {
        isTouchScreen: QM
      } = (0, rS.m)(["isTouchScreen"]), [zM, mM] = (0, eM.useState)(null);
      return (0, OS.j)(zM, ".SkyblockRightHud"), null !== SM || iM ? (0, QS.jsx)(iS.i, {
        placement: "topRight",
        children: (0, QS.jsxs)("div", {
          className: MS()("SkyblockRightHud", {
            TouchScreen: QM
          }),
          children: [iM, null !== SM && (0, QS.jsxs)("div", {
            ref: mM,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in SM ? (0, QS.jsx)("div", {
              className: "SkyblockHudHelp",
              children: SM.hudHelpText
            }) : (0, QS.jsxs)(QS.Fragment, {
              children: [(0, QS.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, QS.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, QS.jsx)("strong", {
                    style: {
                      color: LM.L.cyanUiText
                    },
                    children: nM(SM.hudZoneNameKey)
                  }), null !== jM && (0, QS.jsx)("span", {
                    style: {
                      color: LM.L.goldUiText
                    },
                    children: nM("skyblockGame:level", {
                      level: (0, aS.g)(jM)
                    })
                  })]
                }), (0, QS.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: PM,
                  children: [(0, QS.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, QS.jsx)(SS.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, aS.g)(SM.hudPurseCoins)]
                })]
              }), SM.hudClockText.length > 0 && (0, QS.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, QS.jsx)(jS.b, {
                  text: SM.hudClockText
                })
              })]
            }), OM, "hudZoneNameKey" in SM && (0, QS.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var LS = iM(39580);

    function mS(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)();
      return (0, QS.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: rM.display.mountPlayer,
        title: iM("skyblockGame:mapYouAreHere"),
        children: (0, QS.jsx)(LS.c, {
          icon: "player"
        })
      })
    }
    const HS = iM(39586),
      hS = Object.fromEntries(HS.keys().map((MM => [MM.replace(/^\.\/(.*)\.png$/, "$1"), HS(MM)])));

    function JS(MM, rM) {
      var iM;
      return null !== (iM = hS[MM]) && void 0 !== iM ? iM : hS[rM]
    }

    function dS(MM) {
      let {
        imageKey: rM,
        fallbackImageKey: iM,
        geometryKey: OM,
        alt: SM,
        className: jM
      } = MM;
      const [aM, PM] = (0, eM.useState)((() => function(MM, rM) {
        return [{
          id: 0,
          imageKey: MM,
          geometryKey: rM,
          phase: "shown"
        }]
      }(rM, OM))), nM = function(MM, rM, iM) {
        const OM = MM[MM.length - 1];
        if (OM.imageKey === rM && OM.geometryKey === iM) return MM;
        const SM = {
          id: OM.id + 1,
          imageKey: rM,
          geometryKey: iM,
          phase: "entering"
        };
        return OM.geometryKey === iM ? [{
          ...OM,
          phase: "leaving"
        }, SM] : [SM]
      }(aM, rM, OM);
      return nM !== aM && PM(nM), (0, QS.jsx)(QS.Fragment, {
        children: nM.map((MM => (0, QS.jsx)("img", {
          className: MS()("SkyblockMapTerrainImage", jM, {
            Entering: "entering" === MM.phase,
            Leaving: "leaving" === MM.phase
          }),
          src: JS(MM.imageKey, iM),
          alt: "leaving" === MM.phase ? "" : SM,
          onAnimationEnd: () => {
            PM((rM => function(MM, rM) {
              return MM.flatMap((MM => MM.id !== rM ? [MM] : "leaving" === MM.phase ? [] : [{
                ...MM,
                phase: "shown"
              }]))
            }(rM, MM.id)))
          }
        }, MM.id)))
      })
    }
    var yS = iM(4917),
      lS = iM(1520);

    function ES(MM) {
      if ("Tab" !== MM.key) return;
      const rM = Array.from(MM.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        iM = rM.indexOf(document.activeElement);
      var OM;
      if (MM.shiftKey && iM <= 0) MM.preventDefault(), null === (OM = rM.at(-1)) || void 0 === OM || OM.focus();
      else if (!MM.shiftKey && (-1 === iM || iM === rM.length - 1)) {
        var SM;
        MM.preventDefault(), null === (SM = rM[0]) || void 0 === SM || SM.focus()
      }
    }

    function US() {
      const MM = (0, eM.useRef)(null);
      return (0, eM.useCallback)((rM => {
        var iM;
        rM ? (MM.current = document.activeElement, rM.focus()) : null === (iM = MM.current) || void 0 === iM || iM.focus()
      }), [])
    }

    function GS(MM) {
      let {
        percent: rM,
        label: iM,
        levelUpToken: OM,
        colour: SM
      } = MM;
      return (0, QS.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": iM,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": rM,
        "aria-valuetext": iM,
        children: [(0, QS.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${rM/100})`
          }
        }), null !== OM && void 0 !== OM && (0, QS.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": SM
          }
        }, OM)]
      })
    }

    function CS(MM) {
      let {
        mount: rM
      } = MM;
      return (0, QS.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: rM,
        hidden: !0,
        children: (0, QS.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, QS.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, QS.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function eS(MM, rM, iM, OM) {
      (0, eM.useLayoutEffect)((() => {
        const SM = MM.current;
        if (!iM || null === rM || void 0 === rM || !rM.local || !SM) return;
        const jM = Array.from(SM.querySelectorAll(".SkyblockMapNode")),
          aM = [...rM.points, ...rM.portals],
          PM = () => {
            const MM = SM.clientWidth,
              iM = SM.clientHeight,
              PM = jM.map(((SM, jM) => {
                const PM = aM[jM];
                return {
                  id: PM.id,
                  portal: jM >= rM.points.length,
                  x: PM.position[0] * MM / 100,
                  y: PM.position[1] * iM / 100,
                  width: SM.offsetWidth / OM,
                  height: SM.offsetHeight / OM
                }
              })),
              nM = new Map(aM.map(((MM, rM) => [MM.id, jM[rM]])));
            for (const rM of function(MM, rM, iM) {
                const OM = [],
                  SM = [...MM].sort(((MM, rM) => Number(rM.portal) - Number(MM.portal) || MM.id.localeCompare(rM.id)));
                for (const jM of SM) {
                  const MM = MM => Math.max(jM.width / 2, Math.min(rM - jM.width / 2, MM)),
                    SM = MM => Math.max(jM.height / 2, Math.min(iM - jM.height / 2, MM)),
                    aM = [MM(jM.x)],
                    PM = [SM(jM.y)];
                  for (const rM of OM) aM.push(MM(rM.x - (rM.width + jM.width) / 2 - 4), MM(rM.x + (rM.width + jM.width) / 2 + 4)), PM.push(SM(rM.y - (rM.height + jM.height) / 2 - 4), SM(rM.y + (rM.height + jM.height) / 2 + 4));
                  let nM = {
                      ...jM,
                      x: aM[0],
                      y: PM[0]
                    },
                    QM = 1 / 0,
                    zM = 1 / 0;
                  for (const rM of new Set(aM))
                    for (const MM of new Set(PM)) {
                      let iM = 0;
                      for (const aM of OM) iM += Math.max(0, (jM.width + aM.width) / 2 + 4 - Math.abs(rM - aM.x)) * Math.max(0, (jM.height + aM.height) / 2 + 4 - Math.abs(MM - aM.y));
                      const SM = (rM - jM.x) ** 2 + (MM - jM.y) ** 2;
                      (iM < QM || iM === QM && SM < zM) && (nM = {
                        ...jM,
                        x: rM,
                        y: MM
                      }, QM = iM, zM = SM)
                    }
                  OM.push(nM)
                }
                return OM
              }(PM, MM, iM)) {
              const MM = nM.get(rM.id);
              MM.style.left = `${rM.x}px`, MM.style.top = `${rM.y}px`
            }
          };
        PM();
        const nM = new ResizeObserver(PM);
        nM.observe(SM);
        for (const MM of jM) nM.observe(MM);
        return () => {
          nM.disconnect()
        }
      }), [MM, rM, iM, OM])
    }
    const bS = {
        zoom: 1,
        x: 0,
        y: 0
      },
      wS = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function tS(MM, rM, iM) {
      return Math.min(iM, Math.max(rM, MM))
    }

    function gS(MM, rM, iM) {
      const OM = Math.min(1, iM * rM / MM),
        SM = Math.min(1, MM / (iM * rM));
      return {
        x0: (1 - OM) / 2,
        y0: (1 - SM) / 2,
        x1: (1 + OM) / 2,
        y1: (1 + SM) / 2
      }
    }

    function uS(MM, rM, iM, OM) {
      const SM = rM * (OM - iM);
      if (SM <= 1) return .5 - rM * (iM + OM) / 2;
      const jM = .45 * Math.min(1, SM - 1);
      return tS(MM, 1 - rM * OM - jM, jM - rM * iM)
    }

    function RS(MM, rM) {
      const iM = tS(MM.zoom, 1, 12);
      return {
        zoom: iM,
        x: uS(MM.x, iM, rM.x0, rM.x1),
        y: uS(MM.y, iM, rM.y0, rM.y1)
      }
    }

    function pS(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wS;
      const jM = tS(MM.zoom * rM, 1, 12),
        aM = jM / MM.zoom;
      return RS({
        zoom: jM,
        x: iM - (iM - MM.x) * aM,
        y: OM - (OM - MM.y) * aM
      }, SM)
    }

    function WS(MM, rM, iM, OM) {
      const [SM, jM] = (0, eM.useState)(bS);
      (0, eM.useEffect)((() => {
        jM(bS)
      }), [iM]), (0, eM.useEffect)((() => {
        const iM = MM.current;
        if (!rM || !iM) return;
        const SM = () => gS(iM.clientWidth, iM.clientHeight, OM),
          aM = MM => {
            const rM = iM.getBoundingClientRect();
            return {
              x: (MM.clientX - rM.left) / rM.width,
              y: (MM.clientY - rM.top) / rM.height
            }
          },
          PM = new Map;
        let nM = {
            x: 0,
            y: 0
          },
          QM = !1,
          zM = 0;
        const LM = MM => {
            MM.preventDefault();
            const rM = MM.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * MM.deltaY : MM.deltaY,
              iM = aM(MM);
            jM((MM => pS(MM, Math.exp(.0015 * -rM), iM.x, iM.y, SM())))
          },
          mM = MM => {
            "mouse" === MM.pointerType && 0 !== MM.button || (PM.set(MM.pointerId, aM(MM)), 1 === PM.size && (nM = {
              x: MM.clientX,
              y: MM.clientY
            }, QM = !1), zM = 0)
          },
          HM = MM => {
            const rM = PM.get(MM.pointerId);
            if (!rM) return;
            const OM = aM(MM);
            if (PM.set(MM.pointerId, OM), 2 === PM.size) {
              const [MM, rM] = [...PM.values()], iM = Math.hypot(MM.x - rM.x, MM.y - rM.y);
              if (zM > 0) {
                const OM = iM / zM;
                jM((iM => pS(iM, OM, (MM.x + rM.x) / 2, (MM.y + rM.y) / 2, SM())))
              }
              return zM = iM, void(QM = !0)
            }!QM && Math.hypot(MM.clientX - nM.x, MM.clientY - nM.y) < 4 || (QM || (QM = !0, iM.setPointerCapture(MM.pointerId)), jM((MM => function(MM, rM, iM) {
              let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wS;
              return RS({
                zoom: MM.zoom,
                x: MM.x + rM,
                y: MM.y + iM
              }, OM)
            }(MM, OM.x - rM.x, OM.y - rM.y, SM()))))
          },
          hM = MM => {
            PM.delete(MM.pointerId), zM = 0
          },
          JM = MM => {
            QM && (MM.stopPropagation(), MM.preventDefault(), QM = !1)
          },
          dM = new ResizeObserver((() => {
            jM((MM => RS(MM, SM())))
          }));
        return dM.observe(iM), iM.addEventListener("wheel", LM, {
          passive: !1
        }), iM.addEventListener("pointerdown", mM), iM.addEventListener("pointermove", HM), iM.addEventListener("pointerup", hM), iM.addEventListener("pointercancel", hM), iM.addEventListener("click", JM, !0), () => {
          dM.disconnect(), iM.removeEventListener("wheel", LM), iM.removeEventListener("pointerdown", mM), iM.removeEventListener("pointermove", HM), iM.removeEventListener("pointerup", hM), iM.removeEventListener("pointercancel", hM), iM.removeEventListener("click", JM, !0)
        }
      }), [MM, rM, iM, OM]);
      return {
        view: SM,
        zoomBy: rM => {
          const iM = MM.current;
          iM && jM((MM => pS(MM, rM, .5, .5, gS(iM.clientWidth, iM.clientHeight, OM))))
        }
      }
    }

    function sS(MM) {
      var rM, iM, OM, SM;
      let {
        controller: jM,
        navigation: aM
      } = MM;
      const PM = (0, nS.e)(QM, jM.getSnapshot()),
        {
          t: nM
        } = (0, PS.A)(),
        zM = US(),
        LM = PM.presentation,
        mM = (0, eM.useRef)(null),
        HM = (0, eM.useRef)(null),
        hM = Boolean(PM.open && (null === LM || void 0 === LM ? void 0 : LM.local) && LM.background),
        JM = WS(mM, hM, `${PM.open}|${PM.tab}|${null===LM||void 0===LM||null===(rM=LM.background)||void 0===rM?void 0:rM.geometryKey}`, null !== (iM = null === LM || void 0 === LM || null === (OM = LM.background) || void 0 === OM ? void 0 : OM.ratio) && void 0 !== iM ? iM : 2);
      if (eS(HM, LM, PM.open, JM.view.zoom), !LM || !PM.open) return null;
      const dM = LM.local ? LM.background : null,
        yM = {
          "--map-ratio": String(null !== (SM = null === dM || void 0 === dM ? void 0 : dM.ratio) && void 0 !== SM ? SM : 2),
          backgroundColor: null === dM || void 0 === dM ? void 0 : dM.colour
        },
        lM = {
          "--map-zoom": String(JM.view.zoom),
          transform: `translate(${100*JM.view.x}%, ${100*JM.view.y}%) scale(${JM.view.zoom})`
        };
      return (0, QS.jsx)(yS.e, {
        show: PM.open,
        close: jM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: zM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, QS.jsx)("h2", {
                id: "skyblockMapTitle",
                children: nM("skyblockGame:map")
              }), LM.minimap && (0, QS.jsx)("p", {
                children: LM.minimap.caption
              })]
            }), (0, QS.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((MM => (0, QS.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": MM === PM.tab ? "true" : void 0,
                className: MS()({
                  Selected: MM === PM.tab
                }),
                "aria-pressed": MM === PM.tab,
                onClick: () => {
                  jM.selectTab(MM)
                },
                children: nM("local" === MM ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, MM)))
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: jM.dismiss
            })]
          }), (0, QS.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, QS.jsxs)("div", {
              ref: mM,
              className: MS()("SkyblockMapCanvas", {
                Local: LM.local,
                Overview: !LM.local,
                Zoomed: JM.view.zoom > 1
              }),
              style: yM,
              children: [(0, QS.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: hM ? lM : void 0,
                children: (0, QS.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: HM,
                  children: [dM && (0, QS.jsx)(dS, {
                    className: "SkyblockMapTerrain",
                    imageKey: dM.imageKey,
                    fallbackImageKey: dM.fallbackImageKey,
                    geometryKey: dM.geometryKey,
                    alt: dM.label
                  }), LM.local && (0, QS.jsx)(CS, {
                    mount: aM.display.mountMapSearchArea
                  }), !LM.local && (0, QS.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: LM.connections.map((MM => (0, QS.jsx)("line", {
                      className: MS()({
                        Explored: MM.explored
                      }),
                      x1: MM.start[0],
                      y1: MM.start[1],
                      x2: MM.end[0],
                      y2: MM.end[1]
                    }, MM.id)))
                  }), LM.points.map((MM => {
                    const rM = !LM.local && MM.thumbnail ? hS[MM.thumbnail] : void 0;
                    return (0, QS.jsxs)("div", {
                      className: MS()("SkyblockMapNode", {
                        Current: MM.current
                      }),
                      style: {
                        left: `${MM.position[0]}%`,
                        top: `${MM.position[1]}%`
                      },
                      children: [(0, QS.jsxs)(lS.e, {
                        className: MS()("SkyblockMapPin", {
                          Unknown: !MM.visited,
                          Current: MM.current
                        }),
                        disabled: PM.pending,
                        onClick: () => {
                          jM.travel(MM.travelKind, MM.travelId)
                        },
                        children: [rM && (0, QS.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: rM,
                          alt: ""
                        }), !rM && (0, QS.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, QS.jsx)(LS.c, {
                            icon: MM.icon
                          })
                        }), (0, QS.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: MM.name
                        })]
                      }), MM.current && (0, QS.jsx)("span", {
                        className: MS()("SkyblockMapHereBadge", {
                          Above: MM.position[1] > 50
                        }),
                        children: nM("skyblockGame:mapYouAreHere")
                      })]
                    }, MM.id)
                  })), LM.portals.map((MM => (0, QS.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${MM.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${MM.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, QS.jsxs)(lS.e, {
                      className: "SkyblockMapPin",
                      disabled: PM.pending,
                      onClick: () => {
                        jM.travel(MM.travelKind, MM.travelId)
                      },
                      children: [(0, QS.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: MM.colour
                        },
                        "aria-hidden": "true",
                        children: (0, QS.jsx)(LS.c, {
                          icon: MM.icon
                        })
                      }), (0, QS.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: MM.name
                      })]
                    })
                  }, MM.id))), LM.local && (0, QS.jsx)(mS, {
                    controller: aM
                  })]
                })
              }), hM && (0, QS.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, QS.jsx)("button", {
                  type: "button",
                  "aria-label": nM("skyblockGame:mapZoomIn"),
                  disabled: JM.view.zoom >= 12,
                  onClick: () => {
                    JM.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, QS.jsx)("button", {
                  type: "button",
                  "aria-label": nM("skyblockGame:mapZoomOut"),
                  disabled: JM.view.zoom <= 1,
                  onClick: () => {
                    JM.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, QS.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: PM.feedback
              })]
            })
          }), (0, QS.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [LM.progress && (0, QS.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, QS.jsx)("span", {
                children: LM.progress
              }), (0, QS.jsx)(GS, {
                percent: LM.percent,
                label: LM.progress
              })]
            }), LM.noLandmarks && (0, QS.jsx)("span", {
              children: nM("skyblockGame:mapNoLandmarks")
            }), LM.canTravel && (0, QS.jsx)("span", {
              className: "SkyblockMapHint",
              children: nM("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function DS(MM) {
      let {
        view: rM,
        controller: iM,
        navigation: OM
      } = MM;
      const {
        t: SM
      } = (0, PS.A)(), {
        isTouchScreen: jM
      } = (0, rS.m)(["isTouchScreen"]);
      return (0, QS.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": SM("skyblockGame:mapLocal"),
        children: [jM && (0, QS.jsx)(lS.e, {
          className: "SkyblockMinimapOpen",
          onClick: iM.showLocal,
          children: SM("skyblockGame:map")
        }), (0, QS.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: rM.colour
          },
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: OM.display.mountTerrain,
            style: {
              width: rM.width,
              height: rM.height
            },
            children: [(0, QS.jsx)(dS, {
              imageKey: rM.imageKey,
              fallbackImageKey: rM.fallbackImageKey,
              geometryKey: rM.geometryKey,
              alt: rM.label
            }), (0, QS.jsx)(CS, {
              mount: OM.display.mountMinimapSearchArea
            }), rM.markers.map((MM => (0, QS.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${MM.position[0]}%`,
                top: `${MM.position[1]}%`,
                color: MM.colour
              },
              title: MM.name,
              children: (0, QS.jsx)(LS.c, {
                icon: MM.icon
              })
            }, MM.id)))]
          }), (0, QS.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: SM("skyblockGame:mapYouAreHere"),
            children: (0, QS.jsx)(LS.c, {
              icon: "player"
            })
          })]
        }), (0, QS.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: rM.caption
        })]
      })
    }

    function kS(MM) {
      let {
        controller: rM
      } = MM;
      return (0, QS.jsxs)("div", {
        className: "SkyblockCompass",
        ref: rM.display.mountCompass,
        children: [(0, QS.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, QS.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, QS.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ZS(MM) {
      let {
        controller: rM,
        surface: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)(), SM = (0, nS.e)(Zr, rM.getSnapshot()), jM = US();
      return SM.enabled ? (0, QS.jsxs)(QS.Fragment, {
        children: ["hud" === iM && (0, QS.jsx)(iS.i, {
          placement: "statBars",
          children: SM.hud && (0, QS.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": SM.hud.colour
            },
            children: [(0, QS.jsx)(GS, {
              percent: SM.hud.skill.percent,
              label: SM.hud.skill.xp,
              levelUpToken: SM.hud.levelUpToken,
              colour: SM.hud.colour
            }), (0, QS.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, QS.jsxs)("span", {
                children: [SM.hud.skill.label, " \xb7 ", SM.hud.skill.level]
              }), (0, QS.jsx)("span", {
                children: SM.hud.gain
              })]
            })]
          })
        }), "hud" === iM && (0, QS.jsx)(iS.i, {
          children: SM.hud && (0, QS.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, QS.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, QS.jsx)("strong", {
                children: SM.hud.skill.label
              }), (0, QS.jsx)("span", {
                children: SM.hud.gain
              })]
            }), (0, QS.jsx)(GS, {
              percent: SM.hud.skill.percent,
              label: SM.hud.skill.xp,
              levelUpToken: SM.hud.levelUpToken,
              colour: SM.hud.colour
            }), (0, QS.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, QS.jsx)("span", {
                children: SM.hud.skill.level
              }), (0, QS.jsx)("span", {
                children: SM.hud.skill.xp
              })]
            })]
          })
        }), "menu" === iM && (0, QS.jsx)(yS.e, {
          show: SM.open,
          close: rM.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, QS.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: jM,
            onKeyDown: ES,
            children: [(0, QS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, QS.jsxs)("div", {
                children: [(0, QS.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: OM("skyblockGame:skills")
                }), (0, QS.jsx)("p", {
                  children: OM("skyblockGame:skillsIntro")
                })]
              }), (0, QS.jsx)(lS.l, {
                padIgnore: !0,
                onClick: rM.dismiss
              })]
            }), (0, QS.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, QS.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: SM.skills.map((MM => (0, QS.jsxs)(lS.e, {
                  className: MS()("SkyblockSkillCard", {
                    Selected: MM.selected
                  }),
                  ariaPressed: MM.selected,
                  onClick: () => {
                    rM.select(MM.id)
                  },
                  children: [(0, QS.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, QS.jsx)(SS.b, {
                      itemName: MM.icon,
                      amount: 0
                    })
                  }), (0, QS.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, QS.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, QS.jsx)("strong", {
                        children: MM.label
                      }), (0, QS.jsx)("span", {
                        children: MM.level
                      })]
                    }), (0, QS.jsx)(GS, {
                      percent: MM.percent,
                      label: `${MM.label}: ${MM.xp}`
                    }), (0, QS.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: MM.xp
                    })]
                  })]
                }, MM.id)))
              }), SM.detail && (0, QS.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, QS.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, QS.jsx)(SS.b, {
                    itemName: SM.detail.icon,
                    amount: 0
                  })
                }), (0, QS.jsx)("h3", {
                  children: SM.detail.label
                }), (0, QS.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: SM.detail.level
                }), (0, QS.jsx)("p", {
                  children: SM.detail.description
                }), (0, QS.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, QS.jsx)("strong", {
                    children: OM("skyblockGame:currentBenefit")
                  }), (0, QS.jsx)("span", {
                    children: SM.detail.benefit
                  })]
                }), (0, QS.jsx)(GS, {
                  percent: SM.detail.percent,
                  label: SM.detail.xp
                }), (0, QS.jsx)("p", {
                  children: SM.detail.xp
                }), (0, QS.jsx)("h4", {
                  children: OM("skyblockGame:earnXp")
                }), (0, QS.jsx)("ul", {
                  children: SM.detail.sources.map((MM => (0, QS.jsx)("li", {
                    children: MM
                  }, MM)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var oS = iM(1440),
      fS = iM(5242),
      YS = iM(313);

    function NS(MM) {
      let {
        item: rM
      } = MM;
      return (0, QS.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, QS.jsx)(SS.b, {
          itemName: rM,
          amount: 0
        })
      })
    }

    function AS(MM) {
      let {
        name: rM,
        percent: iM,
        progress: OM
      } = MM;
      return (0, QS.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, QS.jsx)(GS, {
          percent: iM,
          label: `${(0,YS.lb)(rM)}: ${OM}`
        }), (0, QS.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: OM
        })]
      })
    }

    function xS(MM) {
      let {
        subquests: rM,
        showDescriptions: iM = !1
      } = MM;
      return (0, QS.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: rM.map((MM => {
          const rM = iM && "completed" === MM.status,
            OM = (0, QS.jsxs)("li", {
              className: MS()("SkyblockQuestStep", MM.status, {
                JustFinished: MM.justFinished,
                JustUnlocked: MM.justUnlocked
              }),
              tabIndex: rM ? 0 : void 0,
              children: [null !== MM.iconItem && (0, QS.jsx)(NS, {
                item: MM.iconItem
              }), null === MM.iconItem && (0, QS.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === MM.status ? "\u2713" : "skipped" === MM.status ? "\u2212" : "\u25cb"
              }), (0, QS.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, QS.jsx)("strong", {
                  children: (0, QS.jsx)(fS.c, {
                    text: MM.name
                  })
                }), iM && !rM && (0, QS.jsx)("span", {
                  children: (0, QS.jsx)(fS.c, {
                    text: MM.description
                  })
                }), null !== MM.barPercent && (0, QS.jsx)(AS, {
                  name: MM.name,
                  percent: MM.barPercent,
                  progress: MM.progress
                }), null === MM.barPercent && !rM && (0, QS.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: MM.statusLabel
                })]
              })]
            }, MM.id);
          return rM ? (0, QS.jsx)(oS.i, {
            delayShow: 200,
            tooltipInner: (0, QS.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, QS.jsx)("span", {
                children: (0, QS.jsx)(fS.c, {
                  text: MM.description
                })
              }), (0, QS.jsx)("strong", {
                children: MM.statusLabel
              })]
            }),
            children: OM
          }, MM.id) : OM
        }))
      })
    }

    function vS(MM) {
      let {
        quest: rM,
        select: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)(), SM = rM.focusStep;
      return (0, QS.jsxs)(lS.e, {
        className: MS()("SkyblockQuestCard", {
          Selected: rM.selected,
          Tracked: rM.tracked
        }),
        onClick: () => {
          iM(rM.id)
        },
        children: [(0, QS.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, QS.jsx)("strong", {
            children: (0, QS.jsx)(fS.c, {
              text: rM.name
            })
          }), rM.tracked && (0, QS.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: OM("skyblockGame:currentQuest")
          })]
        }), SM && (0, QS.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== SM.iconItem && (0, QS.jsx)(NS, {
            item: SM.iconItem
          }), (0, QS.jsx)(AS, {
            name: SM.name,
            percent: SM.barPercent,
            progress: SM.progress
          })]
        }), (0, QS.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: rM.progress
        })]
      })
    }

    function FS(MM) {
      let {
        controller: rM,
        surface: iM
      } = MM;
      const OM = (0, nS.e)(Nr, rM.getSnapshot()),
        {
          t: SM
        } = (0, PS.A)(),
        jM = US();
      return OM.enabled ? (0, QS.jsxs)(QS.Fragment, {
        children: ["hud" === iM && (0, QS.jsx)(QS.Fragment, {
          children: OM.tracked && (0, QS.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Yr,
            children: (0, QS.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [OM.trackedStepPulse > 0 && (0, QS.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, OM.trackedStepPulse), (0, QS.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: SM("skyblockGame:currentQuest")
              }), (0, QS.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, QS.jsx)("strong", {
                  children: (0, QS.jsx)(fS.c, {
                    text: OM.tracked.name
                  })
                }), null !== OM.tracked.clock && (0, QS.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: OM.tracked.clock
                })]
              }), (0, QS.jsx)(xS, {
                subquests: OM.tracked.subquests
              })]
            })
          })
        }), "menu" === iM && (0, QS.jsx)(yS.e, {
          show: OM.open,
          close: rM.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, QS.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: jM,
            onKeyDown: ES,
            children: [(0, QS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, QS.jsx)("div", {
                children: (0, QS.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: SM("skyblockGame:quests")
                })
              }), (0, QS.jsx)(lS.l, {
                padIgnore: !0,
                onClick: rM.dismiss
              })]
            }), (0, QS.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, QS.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, QS.jsx)("h3", {
                  children: SM("skyblockGame:current")
                }), 0 === OM.active.length && (0, QS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: SM("skyblockGame:noActiveQuests")
                }), OM.active.map((MM => (0, QS.jsx)(vS, {
                  quest: MM,
                  select: rM.select
                }, MM.id))), (0, QS.jsx)("h3", {
                  children: (0, QS.jsxs)("button", {
                    type: "button",
                    className: MS()("SkyblockQuestSectionToggle", {
                      Expanded: OM.completedExpanded
                    }),
                    "aria-expanded": OM.completedExpanded,
                    onClick: rM.toggleCompleted,
                    children: [(0, QS.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), SM("skyblockGame:completed"), (0, QS.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: OM.completed.length
                    })]
                  })
                }), OM.completedExpanded && 0 === OM.completed.length && (0, QS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: SM("skyblockGame:noCompletedQuests")
                }), OM.completedExpanded && OM.completed.map((MM => (0, QS.jsx)(vS, {
                  quest: MM,
                  select: rM.select
                }, MM.id)))]
              }), OM.detail && (0, QS.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [OM.detail.completed && (0, QS.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: SM("skyblockGame:completedQuest")
                }), (0, QS.jsx)("h3", {
                  children: (0, QS.jsx)(fS.c, {
                    text: OM.detail.name
                  })
                }), (0, QS.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, QS.jsx)(fS.c, {
                    text: OM.detail.description
                  })
                }), (0, QS.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [OM.detail.progress, null !== OM.detail.clock && (0, QS.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: OM.detail.clock
                  })]
                }), (0, QS.jsx)(xS, {
                  subquests: OM.detail.subquests,
                  showDescriptions: !0
                }), OM.detail.tracked && (0, QS.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: OM.detail.trackLabel
                }), !OM.detail.completed && !OM.detail.tracked && (0, QS.jsx)(lS.p, {
                  onClick: rM.trackSelected,
                  disabled: !OM.detail.canTrack,
                  children: OM.detail.trackLabel
                }), OM.detail.canViewDialogue && (0, QS.jsx)(lS.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: rM.viewDialogue,
                  children: SM("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var BS = iM(1398),
      XS = iM(2843);

    function IS(MM, rM, iM, OM, SM) {
      const jM = MM => "linear" === SM ? MM : {
          bS: SM,
          point: MM
        },
        aM = {};
      for (const [PM, nM] of OM)
        for (const [rM, iM] of Object.entries(MM(PM, nM, jM))) aM[rM] ??= {
          timeline: []
        }, aM[rM].timeline.push(iM);
      return {
        yS: rM,
        loop: iM,
        GS: aM
      }
    }
    const KS = .547,
      qS = .022,
      TS = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      VS = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function cS(MM, rM, iM) {
      const {
        drop: OM = 0,
        shift: SM = 0,
        torso: jM = 0,
        nod: aM = 0,
        tilt: PM = 0,
        legs: nM = [0, 0],
        arms: QM = 0,
        spread: zM = 0
      } = rM, LM = KS * Math.cos(jM) - qS * Math.sin(jM), mM = KS * Math.sin(jM) + qS * Math.cos(jM), HM = iM([0, -OM, SM]);
      return {
        LowerBody: {
          timeFraction: MM,
          position: HM,
          rotation: iM([0, 0, 0])
        },
        UpperBody: {
          timeFraction: MM,
          position: HM,
          rotation: iM([jM, 0, PM])
        },
        HeadMesh: {
          timeFraction: MM,
          position: iM([0, LM - KS - OM, mM - qS + SM]),
          rotation: iM([jM + aM, 0, PM])
        },
        LegLeftMesh: {
          timeFraction: MM,
          rotation: iM([nM[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: MM,
          rotation: iM([nM[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: MM,
          rotation: iM([QM, 0, zM])
        },
        ArmRightMesh: {
          timeFraction: MM,
          rotation: iM([QM, 0, -zM])
        }
      }
    }

    function Mj(MM, rM, iM) {
      return IS(cS, MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function rj(MM) {
      return "number" === typeof MM ? [MM, MM] : MM
    }

    function ij(MM, rM, iM) {
      const {
        rise: OM = 0,
        shift: SM = 0,
        torso: jM = 0,
        twist: aM = 0,
        tilt: PM = 0,
        nod: nM = 0,
        cock: QM = 0,
        arms: zM = 0,
        spread: LM = 0
      } = rM, [mM, HM] = rj(zM), [hM, JM] = rj(LM);
      return {
        TorsoNode: {
          timeFraction: MM,
          position: iM([0, OM, SM]),
          rotation: iM([jM, aM, PM])
        },
        HeadMesh: {
          timeFraction: MM,
          rotation: iM([nM, 0, QM])
        },
        ArmLeftMesh: {
          timeFraction: MM,
          rotation: iM([mM, 0, hM])
        },
        ArmRightMesh: {
          timeFraction: MM,
          rotation: iM([HM, 0, -JM])
        }
      }
    }
    const Oj = [1.0625, -1, 0];

    function Sj(MM) {
      return "number" === typeof MM ? [MM, MM] : MM
    }

    function jj(MM, rM, iM) {
      const {
        drop: OM = 0,
        shift: SM = 0,
        torso: jM = 0,
        tilt: aM = 0,
        nod: PM = 0,
        cock: nM = 0,
        legs: QM = [0, 0],
        arms: zM = 0,
        spread: LM = 0
      } = rM, [mM, HM] = Sj(zM), [hM, JM] = Sj(LM), dM = -jM, yM = -aM, [lM, EM, UM] = function(MM, rM) {
        const [iM, OM, SM] = [-Oj[0], Oj[1], -Oj[2]], jM = iM * Math.cos(rM) - OM * Math.sin(rM), aM = iM * Math.sin(rM) + OM * Math.cos(rM);
        return [jM - iM, -(aM * Math.cos(MM) - SM * Math.sin(MM) - OM), aM * Math.sin(MM) + SM * Math.cos(MM) - SM]
      }(dM, yM), GM = iM([0, -OM, SM]);
      return {
        TorsoNode: {
          timeFraction: MM,
          position: iM([lM, EM - OM, UM + SM]),
          rotation: iM([dM, 0, yM])
        },
        HeadMesh: {
          timeFraction: MM,
          rotation: iM([-PM, 0, -nM])
        },
        ArmLeftMesh: {
          timeFraction: MM,
          rotation: iM([-mM, 0, -hM])
        },
        ArmRightMesh: {
          timeFraction: MM,
          rotation: iM([-HM, 0, JM])
        },
        LegLeftMesh: {
          timeFraction: MM,
          position: GM,
          rotation: iM([-QM[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: MM,
          position: GM,
          rotation: iM([-QM[1], 0, 0])
        }
      }
    }
    var aj = iM(38111),
      Pj = iM(39471),
      nj = iM(39673);

    function Qj(MM, rM, iM) {
      var OM, SM;
      const jM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return MM + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - MM) * iM
        },
        [aM, PM] = null !== (OM = MM.legs) && void 0 !== OM ? OM : [0, 0],
        [nM, QM] = null !== (SM = rM.legs) && void 0 !== SM ? SM : [0, 0];
      return {
        drop: jM(MM.drop, rM.drop),
        shift: jM(MM.shift, rM.shift),
        torso: jM(MM.torso, rM.torso),
        nod: jM(MM.nod, rM.nod),
        tilt: jM(MM.tilt, rM.tilt),
        legs: [jM(aM, nM), jM(PM, QM)],
        arms: jM(MM.arms, rM.arms),
        spread: jM(MM.spread, rM.spread)
      }
    }
    const zj = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Lj = Mj(4400, !0, [
        [0, zj],
        [.16, {
          ...zj,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, zj],
        [.44, {
          ...zj,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Qj(zj, TS, .7)],
        [.66, Qj(zj, TS, .78)],
        [.74, Qj(zj, VS, .65)],
        [.86, {
          ...zj,
          drop: .14
        }],
        [1, zj]
      ], "catmull-rom-spline"),
      mj = {
        ...zj,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Hj = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      hj = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Jj = {
        caveGolem: Lj,
        magmaGolem: Mj(3600, !0, [
          [0, mj],
          [.12, {
            ...mj,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...mj,
            tilt: -.08
          }],
          [.4, {
            ...mj,
            tilt: .06,
            drop: .11
          }],
          [.52, Qj(mj, TS, .9)],
          [.62, Qj(mj, VS, .8)],
          [.7, Qj(mj, VS, .45)],
          [.78, Qj(mj, VS, .85)],
          [.9, {
            ...mj,
            drop: .17
          }],
          [1, mj]
        ], "catmull-rom-spline"),
        frostWraith: function(MM, rM, iM) {
          return IS(ij, MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Hj],
          [.14, {
            ...Hj,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Hj,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Hj,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Hj,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Hj,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Hj,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Hj,
            rise: .16,
            tilt: -.04
          }],
          [1, Hj]
        ], "catmull-rom-spline"),
        tikiTerror: function(MM, rM, iM) {
          return IS(jj, MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, hj],
          [.16, {
            ...hj,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, hj],
          [.44, {
            ...hj,
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
            ...hj,
            drop: .1
          }],
          [1, hj]
        ], "catmull-rom-spline")
      },
      dj = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      yj = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      lj = Object.fromEntries(Object.entries(Jj).map((MM => {
        let [rM, iM] = MM;
        return [rM, (0, nj.d)((0, aj.f)(iM), rM)]
      })));

    function Ej(MM) {
      const rM = function(MM) {
        var rM;
        const iM = (0, Pj.d)(MM).poseRig;
        return null !== (rM = yj[MM]) && void 0 !== rM ? rM : void 0 === iM ? null : dj[iM]
      }(MM);
      return null === rM ? null : lj[rM]
    }

    function Uj(MM) {
      return {
        "--difficulty-colour": MM
      }
    }
    const Gj = (0, eM.lazy)((() => (0, XS.e)(iM.e(226).then((() => iM(44180))), (MM => MM.MobPreview))));

    function Cj(MM) {
      var rM, iM, OM;
      let {
        picker: SM,
        controller: jM
      } = MM;
      const {
        t: aM
      } = (0, PS.A)(), PM = US(), {
        page: nM
      } = SM;
      return (0, QS.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: PM,
        onKeyDown: MM => {
          "ArrowLeft" === MM.key ? (MM.preventDefault(), MM.stopPropagation(), jM.previous()) : "ArrowRight" === MM.key ? (MM.preventDefault(), MM.stopPropagation(), jM.next()) : ES(MM)
        },
        style: Uj(nM.colour),
        children: [(0, QS.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, QS.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: SM.dungeonName
          }), (0, QS.jsx)(lS.l, {
            padIgnore: !0,
            onClick: jM.dismiss
          })]
        }), (0, QS.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, QS.jsx)(lS.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !SM.canPrevious,
              onClick: jM.previous,
              children: (0, QS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, QS.jsx)(BS.b, {
                  name: "angle-up"
                })
              })
            }), (0, QS.jsxs)("div", {
              className: MS()("SkyblockBossPickerBoss", {
                Locked: !nM.unlocked
              }),
              children: [null !== nM.bossMobType && (0, QS.jsx)(eM.Suspense, {
                fallback: (0, QS.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, QS.jsx)(Gj, {
                  className: "SkyblockBossPickerModel",
                  mobType: nM.bossMobType,
                  variation: nM.bossMobVariation,
                  animation: null !== (rM = Ej(nM.bossMobType)) && void 0 !== rM ? rM : void 0
                })
              }), null === nM.bossMobType && (0, QS.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, QS.jsx)(lS.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !SM.canNext,
              onClick: jM.next,
              children: (0, QS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, QS.jsx)(BS.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, QS.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [nM.beaten && (0, QS.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), nM.label]
            }), (0, QS.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (iM = nM.bossName) && void 0 !== iM ? iM : "???"
            }), (0, QS.jsxs)("span", {
              className: MS()("SkyblockBossPickerRecord", {
                Locked: null !== nM.lockedHint
              }),
              children: [null !== nM.lockedHintHighlight && (0, QS.jsxs)(QS.Fragment, {
                children: [nM.lockedHintHighlight.before, (0, QS.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Uj(nM.lockedHintHighlight.colour),
                  children: [null !== nM.lockedHintHighlight.icon && (0, QS.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, QS.jsx)(SS.b, {
                      itemName: nM.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), nM.lockedHintHighlight.name]
                }), nM.lockedHintHighlight.after]
              }), null === nM.lockedHintHighlight && (null !== (OM = nM.lockedHint) && void 0 !== OM ? OM : nM.summary)]
            })]
          }), (0, QS.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: SM.pages.map((MM => (0, QS.jsx)("span", {
              className: MS()("SkyblockBossPickerDot", {
                Current: MM.current,
                Locked: !MM.unlocked
              }),
              style: Uj(MM.colour)
            }, MM.difficulty)))
          }), (0, QS.jsx)(lS.u, {
            className: "SkyblockBossPickerFight",
            disabled: !nM.unlocked,
            onClick: jM.enter,
            children: aM("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function ej(MM) {
      let {
        dungeon: rM,
        select: iM
      } = MM;
      return (0, QS.jsxs)(lS.e, {
        className: MS()("SkyblockDungeonCard", {
          Selected: rM.selected
        }),
        onClick: () => {
          iM(rM.id)
        },
        children: [(0, QS.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, QS.jsx)("strong", {
            children: rM.name
          }), (0, QS.jsx)("span", {
            children: rM.beatenSummary
          })]
        }), (0, QS.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: rM.difficulties.map((MM => (0, QS.jsxs)("span", {
            className: MS()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: MM.beaten
            }),
            style: Uj(MM.colour),
            title: MM.summary,
            children: [MM.beaten && (0, QS.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), MM.label]
          }, MM.difficulty)))
        })]
      })
    }

    function bj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(Fr, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsxs)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [iM.picker && (0, QS.jsx)(Cj, {
          picker: iM.picker,
          controller: rM
        }), !iM.picker && (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: OM("skyblockGame:dungeons")
              }), (0, QS.jsx)("p", {
                children: OM("skyblockGame:dungeonsIntro")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: rM.dismiss
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, QS.jsx)("div", {
              className: "SkyblockDungeonList",
              children: iM.dungeons.map((MM => (0, QS.jsx)(ej, {
                dungeon: MM,
                select: rM.select
              }, MM.id)))
            }), iM.detail && (0, QS.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, QS.jsx)("h3", {
                children: iM.detail.name
              }), (0, QS.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: iM.detail.difficulties.map((MM => (0, QS.jsxs)("li", {
                  className: MS()("SkyblockDungeonRecord", {
                    Beaten: MM.beaten
                  }),
                  children: [(0, QS.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Uj(MM.colour),
                    children: [MM.beaten && (0, QS.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), MM.label]
                  }), (0, QS.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: MM.summary
                  })]
                }, MM.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function wj(MM) {
      let {
        collection: rM,
        select: iM
      } = MM;
      return (0, QS.jsxs)(lS.e, {
        className: MS()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: rM.selected,
          Locked: rM.locked
        }),
        ariaPressed: rM.selected,
        onClick: () => {
          iM(rM.id)
        },
        children: [(0, QS.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, QS.jsx)(SS.b, {
            itemName: rM.icon,
            amount: 0
          })
        }), (0, QS.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, QS.jsx)("strong", {
              children: rM.name
            }), (0, QS.jsx)("span", {
              children: rM.tier
            })]
          }), (0, QS.jsx)(GS, {
            percent: rM.percent,
            label: `${rM.name}: ${rM.progress}`
          }), (0, QS.jsx)("span", {
            className: "SkyblockSkillXp",
            children: rM.progress
          })]
        })]
      })
    }

    function tj(MM) {
      let {
        collection: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)();
      return (0, QS.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, QS.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, QS.jsx)(SS.b, {
            itemName: rM.icon,
            amount: 0
          })
        }), (0, QS.jsx)("h3", {
          children: rM.name
        }), (0, QS.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: rM.tier
        }), (0, QS.jsx)("p", {
          children: rM.locked ? iM("skyblockGame:collectionLocked") : rM.count
        }), null !== rM.nextReward && (0, QS.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, QS.jsx)("strong", {
            children: iM("skyblockGame:collectionNextReward")
          }), (0, QS.jsx)("span", {
            children: rM.nextReward
          })]
        }), (0, QS.jsx)(GS, {
          percent: rM.percent,
          label: rM.progress
        }), (0, QS.jsx)("p", {
          children: rM.progress
        })]
      })
    }

    function gj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(mi, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: OM("skyblockGame:collections")
              }), (0, QS.jsxs)("p", {
                children: [OM("skyblockGame:collectionsIntro"), " ", iM.tiersUnlocked]
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: rM.dismiss
            })]
          }), (0, QS.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: iM.categories.map((MM => (0, QS.jsxs)(lS.e, {
              className: MS()("SkyblockCollectionCategory", {
                Selected: MM.selected
              }),
              ariaPressed: MM.selected,
              padTabSelected: MM.selected,
              onClick: () => {
                rM.selectCategory(MM.id)
              },
              children: [(0, QS.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, QS.jsx)(SS.b, {
                  itemName: MM.icon,
                  amount: 0
                })
              }), (0, QS.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, QS.jsx)("strong", {
                  children: MM.label
                }), (0, QS.jsx)("span", {
                  children: MM.tiers
                })]
              })]
            }, MM.id)))
          }), (0, QS.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, QS.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: iM.collections.map((MM => (0, QS.jsx)(wj, {
                collection: MM,
                select: rM.select
              }, MM.id)))
            }), iM.detail && (0, QS.jsx)(tj, {
              collection: iM.detail
            })]
          })]
        })
      }) : null
    }
    const uj = ["completed", "active", "available", "locked"],
      Rj = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function pj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(wi, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: OM("skyblockDevQuests:title")
              }), (0, QS.jsx)("p", {
                children: OM("skyblockDevQuests:intro")
              })]
            }), (0, QS.jsx)(lS.l, {
              onClick: rM.dismiss
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [uj.map((MM => (0, QS.jsx)("span", {
              className: MS()("SkyblockQuestGraphLegendState", MM),
              children: OM(`skyblockDevQuests:state_${MM}`)
            }, MM))), Rj.map((MM => (0, QS.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, QS.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, QS.jsx)("line", {
                  className: MS()("SkyblockQuestGraphEdge", MM),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), OM(`skyblockDevQuests:edge_${MM}`)]
            }, MM)))]
          }), (0, QS.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, QS.jsxs)("div", {
              className: MS()("SkyblockQuestGraphCanvas", {
                Planning: iM.planning
              }),
              style: {
                width: iM.width,
                height: iM.height
              },
              children: [(0, QS.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: iM.width,
                height: iM.height,
                "aria-hidden": "true",
                children: [(0, QS.jsx)("defs", {
                  children: (0, QS.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, QS.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), iM.edges.map((MM => (0, QS.jsx)("path", {
                  className: MS()("SkyblockQuestGraphEdge", MM.kind, {
                    InPlan: MM.inPlan
                  }),
                  d: MM.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, MM.key)))]
              }), iM.nodes.map((MM => (0, QS.jsxs)("button", {
                type: "button",
                className: MS()("SkyblockQuestGraphNode", MM.state, {
                  InPlan: MM.inPlan,
                  Hovered: MM.hovered
                }),
                style: {
                  left: MM.left,
                  top: MM.top,
                  width: 190,
                  height: 52
                },
                title: MM.id,
                onMouseEnter: () => {
                  rM.hover(MM.id)
                },
                onMouseLeave: () => {
                  rM.hover(null)
                },
                onFocus: () => {
                  rM.hover(MM.id)
                },
                onBlur: () => {
                  rM.hover(null)
                },
                onClick: () => {
                  rM.jump(MM.id)
                },
                children: [(0, QS.jsx)("strong", {
                  children: MM.name
                }), (0, QS.jsx)("span", {
                  children: MM.detail
                })]
              }, MM.id)))]
            })
          })]
        })
      }) : null
    }
    const Wj = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      sj = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Ni}ms`,
        "--forge-duration": "2150ms"
      },
      Dj = Array.from({
        length: 18
      }, ((MM, rM) => ({
        "--ember-left": `${(4+92*(.618034*rM%1)).toFixed(1)}%`,
        "--ember-size": 3 + rM % 3 * 2 + "px",
        "--ember-drift": 14 * (rM % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*rM%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*rM%8).toFixed(2)}s`
      })));

    function kj(MM) {
      if (MM.style.removeProperty("--part-size"), null === MM.parentElement || "wrap" === getComputedStyle(MM.parentElement).flexWrap) return;
      const rM = [...MM.children],
        iM = getComputedStyle(MM),
        OM = parseFloat(iM.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        SM = (MM.clientHeight - parseFloat(iM.rowGap) * (rM.length - 1)) / rM.length,
        jM = rM.map((MM => {
          const rM = getComputedStyle(MM),
            iM = MM.querySelector("h3"),
            jM = MM.querySelector(".SkyblockForgeParts");
          if (null === iM || null === jM) return OM;
          const aM = SM - parseFloat(rM.paddingTop) - parseFloat(rM.paddingBottom) - iM.offsetHeight - parseFloat(getComputedStyle(iM).marginBottom),
            PM = parseFloat(getComputedStyle(jM).columnGap),
            nM = jM.children.length;
          let QM = 0;
          for (let OM = 1; OM <= nM; OM++) {
            const MM = Math.ceil(nM / OM);
            QM = Math.max(QM, Math.min((jM.clientWidth - PM * (OM - 1)) / OM, (aM - PM * (MM - 1)) / MM))
          }
          return QM
        }));
      MM.style.setProperty("--part-size", `${Math.floor(Math.max(OM,Math.min(...jM)))}px`)
    }

    function Zj(MM) {
      var rM, iM, OM, SM, jM;
      let {
        controller: aM
      } = MM;
      const PM = (0, nS.e)(Ii, aM.getSnapshot()),
        {
          t: nM
        } = (0, PS.A)(),
        QM = US(),
        zM = function() {
          const MM = (0, eM.useRef)(null),
            rM = (0, eM.useRef)(null);
          return (0, eM.useLayoutEffect)((() => {
            null !== MM.current && kj(MM.current)
          })), (0, eM.useCallback)((iM => {
            var OM;
            null === (OM = rM.current) || void 0 === OM || OM.disconnect(), rM.current = null, MM.current = iM, null !== iM && (rM.current = new ResizeObserver((() => {
              kj(iM)
            })), rM.current.observe(iM))
          }), [])
        }(),
        mM = function(MM) {
          const rM = (0, eM.useRef)(null);
          return (0, eM.useLayoutEffect)((() => {
            const MM = rM.current;
            if (null !== MM) {
              MM.style.removeProperty("font-size");
              for (let rM = 1.7; rM > 1.1 && MM.scrollWidth > MM.clientWidth; rM -= .1) MM.style.fontSize = rM - .1 + "rem"
            }
          }), [MM]), (0, eM.useCallback)((MM => {
            rM.current = MM
          }), [])
        }(null === (rM = PM.preview) || void 0 === rM ? void 0 : rM.name),
        HM = (0, eM.useRef)(null),
        hM = (0, eM.useRef)({}),
        JM = PM.forging,
        dM = null !== (iM = null === JM || void 0 === JM ? void 0 : JM.preview.tier) && void 0 !== iM ? iM : 0,
        yM = null !== (OM = null === JM || void 0 === JM ? void 0 : JM.preview.named) && void 0 !== OM && OM,
        lM = (0, eM.useMemo)((() => {
          return null === JM ? null : {
            flames: (MM = dM, rM = yM, Array.from({
              length: 26 + 6 * MM + (rM ? 20 : 0)
            }, ((MM, rM) => {
              const iM = rM < 6,
                OM = Math.random() * Math.PI * 2,
                SM = iM ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                jM = Math.cos(OM) * SM,
                aM = Math.sin(OM) * SM - 2 - 3 * Math.random(),
                PM = Math.random(),
                [nM, QM, zM] = iM ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : PM < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : PM < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [PM < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": nM,
                "--x0": `${(.15*jM).toFixed(2)}rem`,
                "--y0": `${(.15*aM).toFixed(2)}rem`,
                "--x": `${jM.toFixed(2)}rem`,
                "--y": `${aM.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${QM.toFixed(2)}rem`,
                "--duration": `${Math.round(zM)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: vi(dM, yM)
          };
          var MM, rM
        }), [null === JM || void 0 === JM ? void 0 : JM.id]);
      if (!PM.enabled) return null;
      const EM = PM.preview,
        UM = PM.arriving,
        GM = null !== UM && !UM.sameSword,
        CM = null !== EM && (0, QS.jsx)(SS.b, {
          itemName: EM.baseSword,
          amount: 0,
          enchantmentTier: EM.enchantmentTier
        });
      return (0, QS.jsx)(yS.e, {
        show: PM.open,
        close: aM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: QM,
          onKeyDown: ES,
          children: [(0, QS.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Dj.map(((MM, rM) => (0, QS.jsx)("span", {
              style: MM
            }, rM)))
          }), (0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: nM("skyblockGame:forgeTitle")
              }), (0, QS.jsx)("p", {
                children: nM("skyblockGame:forgeIntro")
              })]
            }), (0, QS.jsx)(lS.l, {
              onClick: aM.dismiss
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, QS.jsx)("div", {
              ref: zM,
              className: MS()("SkyblockForgeSlots", {
                Locked: null !== JM
              }),
              children: PM.slots.map((MM => (0, QS.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, QS.jsx)("h3", {
                  children: MM.label
                }), (0, QS.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: MM.parts.map((rM => (0, QS.jsx)("button", {
                    type: "button",
                    className: MS()("SkyblockForgePart", {
                      Selected: rM.selected,
                      Missing: rM.placeholder
                    }),
                    disabled: rM.placeholder,
                    title: rM.placeholder ? nM("skyblockGame:forgePickParts") : rM.itemName,
                    "aria-pressed": rM.selected,
                    onClick: () => {
                      aM.select(MM.kind, rM.material)
                    },
                    children: (0, QS.jsx)(SS.b, {
                      itemName: rM.itemName,
                      amount: rM.owned
                    })
                  }, rM.material)))
                })]
              }, MM.kind)))
            }), (0, QS.jsxs)("div", {
              className: MS()("SkyblockForgeAnvil", {
                Named: null === EM || void 0 === EM ? void 0 : EM.named
              }),
              style: {
                "--tier": null === EM ? "transparent" : LM.kb[EM.enchantmentTier]
              },
              children: [(0, QS.jsxs)("div", {
                className: MS()("SkyblockForgeAltar", {
                  Forging: null !== JM
                }),
                style: null === JM ? void 0 : sj,
                children: [(0, QS.jsxs)("div", {
                  className: MS()("SkyblockForgeMount", {
                    Arrive: null !== UM
                  }),
                  children: [null === EM && (0, QS.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, QS.jsx)(SS.b, {
                      itemName: PM.unformedSword,
                      amount: 0
                    })
                  }), null !== EM && (0, QS.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== EM && null === JM && (0, QS.jsx)("div", {
                    ref: HM,
                    className: "SkyblockForgeFloat",
                    children: (0, QS.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: CM
                    })
                  }), null !== EM && (0, QS.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: xi.map(((MM, rM) => (0, QS.jsx)("span", {
                      className: MS()({
                        Rune: "" !== MM.rune
                      }),
                      style: MM.style,
                      children: MM.rune
                    }, rM)))
                  }), null !== JM && null !== lM && (0, QS.jsxs)(QS.Fragment, {
                    children: [(0, QS.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: lM.flames.map(((MM, rM) => (0, QS.jsx)("span", {
                        style: MM
                      }, rM)))
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: hM.current,
                      children: (0, QS.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: CM
                      })
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (dM >= 4 || yM) && (0, QS.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: lM.sparks.map(((MM, rM) => (0, QS.jsx)("span", {
                        style: MM
                      }, rM)))
                    }), (0, QS.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, QS.jsx)("p", {
                  className: MS()("SkyblockForgeStatus", null === (SM = PM.status) || void 0 === SM ? void 0 : SM.tone),
                  children: null === (jM = PM.status) || void 0 === jM ? void 0 : jM.text
                })]
              }), null === EM && (0, QS.jsx)("p", {
                className: MS()("SkyblockForgeName Waiting", {
                  ArriveText: GM
                }),
                children: nM(PM.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== EM && (0, QS.jsx)("h3", {
                ref: mM,
                className: MS()("SkyblockForgeName", {
                  ArriveText: GM
                }),
                title: EM.name,
                children: EM.name
              }), (null === EM || void 0 === EM ? void 0 : EM.named) && (0, QS.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: nM("skyblockGame:forgeSecret")
              }), (0, QS.jsxs)(lS.u, {
                className: "SkyblockForgeButton",
                disabled: !PM.canForge,
                title: null === EM ? void 0 : nM("skyblockGame:forgeCoalOwned", {
                  owned: String(PM.coalOwned)
                }),
                onClick: () => {
                  hM.current = function(MM) {
                    const rM = null === MM ? "none" : getComputedStyle(MM).transform,
                      iM = new DOMMatrixReadOnly("none" === rM ? void 0 : rM);
                    return {
                      "--settle-y": `${iM.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(iM.b,iM.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(HM.current), Xi(), aM.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [nM("skyblockGame:forgeButton"), null !== EM && (0, QS.jsxs)("span", {
                  className: MS()("SkyblockForgeCost", {
                    Short: EM.coalShort
                  }),
                  children: [(0, QS.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, QS.jsx)(SS.b, {
                      itemName: Wi.d,
                      amount: 0
                    })
                  }), EM.coalCost]
                })]
              })]
            }), (0, QS.jsxs)("div", {
              className: MS()("SkyblockForgeDetails", {
                Named: null === EM || void 0 === EM ? void 0 : EM.named
              }),
              children: [(0, QS.jsx)("p", {
                className: MS()("SkyblockForgeLore", {
                  ArriveText: GM
                }),
                title: null === EM || void 0 === EM ? void 0 : EM.lore,
                children: null === EM || void 0 === EM ? void 0 : EM.lore
              }), (0, QS.jsxs)("dl", {
                className: MS()("SkyblockForgeStats", {
                  ArriveText: GM
                }),
                children: [null === EM && Wj.map((MM => (0, QS.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, QS.jsx)("dt", {
                    children: nM(MM)
                  }), (0, QS.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, MM))), null === EM || void 0 === EM ? void 0 : EM.stats.map((MM => (0, QS.jsxs)("div", {
                  className: MS()("SkyblockForgeStat", {
                    Better: MM.better
                  }),
                  children: [(0, QS.jsx)("dt", {
                    children: MM.label
                  }), (0, QS.jsx)("dd", {
                    children: MM.value
                  })]
                }, MM.label)))]
              }), (0, QS.jsx)("ul", {
                className: MS()("SkyblockForgeEffects", {
                  ArriveText: GM
                }),
                children: null === EM || void 0 === EM ? void 0 : EM.effects.map((MM => (0, QS.jsx)("li", {
                  children: MM
                }, MM)))
              })]
            })]
          })]
        })
      })
    }
    const oj = "Doom Rivet",
      fj = "Doom Crest";

    function Yj(MM) {
      let {
        itemName: rM,
        amount: iM,
        owned: OM
      } = MM;
      return (0, QS.jsxs)("span", {
        className: MS()("SkyblockSmugglerPrice", {
          Short: iM > OM
        }),
        children: [(0, QS.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, QS.jsx)(SS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, QS.jsx)("span", {
          children: iM
        })]
      })
    }

    function Nj(MM) {
      return MM.justBought ? "skyblockGame:smugglerJustBought" : MM.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Aj(MM) {
      let {
        deal: rM,
        view: iM,
        buy: OM
      } = MM;
      const {
        t: SM
      } = (0, PS.A)();
      return (0, QS.jsxs)("div", {
        className: MS()("SkyblockSmugglerPocket", {
          Bought: rM.justBought,
          Unaffordable: !rM.affordable,
          SoldOut: rM.soldOut && !rM.justBought
        }),
        children: [(0, QS.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, QS.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, QS.jsx)(SS.b, {
            itemName: rM.itemName,
            amount: 0,
            enchantmentTier: rM.enchantmentTier
          }), rM.amount > 1 && (0, QS.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: SM("skyblockGame:smugglerAmount", {
              amount: rM.amount
            })
          })]
        }), (0, QS.jsx)("h3", {
          children: rM.displayName
        }), (0, QS.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [rM.rivets > 0 && (0, QS.jsx)(Yj, {
              itemName: oj,
              amount: rM.rivets,
              owned: iM.rivetsOwned
            }), rM.crests > 0 && (0, QS.jsx)(Yj, {
              itemName: fj,
              amount: rM.crests,
              owned: iM.crestsOwned
            })]
          }), (0, QS.jsx)(lS.e, {
            className: "SkyblockSmugglerBuy",
            disabled: rM.soldOut || !rM.affordable || iM.pending,
            onClick: () => {
              OM(rM.slot)
            },
            children: SM(Nj(rM))
          })]
        })]
      }, rM.justBought ? iM.boughtCount : 0)
    }

    function xj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(Ti, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, QS.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, QS.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: OM("skyblockGame:smugglerTitle")
              }), (0, QS.jsx)("p", {
                children: OM("skyblockGame:smugglerIntro")
              })]
            }), (0, QS.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, QS.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, QS.jsx)(Yj, {
                  itemName: oj,
                  amount: iM.rivetsOwned,
                  owned: iM.rivetsOwned
                }), (0, QS.jsx)(Yj, {
                  itemName: fj,
                  amount: iM.crestsOwned,
                  owned: iM.crestsOwned
                })]
              }), (0, QS.jsx)(lS.l, {
                onClick: rM.dismiss
              })]
            })]
          }), (0, QS.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: iM.deals.map((MM => (0, QS.jsx)(Aj, {
              deal: MM,
              view: iM,
              buy: rM.buy
            }, MM.slot)))
          }), (0, QS.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, QS.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: iM.rotatesText
            }), null !== iM.status && (0, QS.jsx)("span", {
              className: MS()("SkyblockSmugglerStatus", iM.status.tone),
              children: iM.status.text
            })]
          })]
        })
      }) : null
    }

    function vj(MM) {
      let {
        phase: rM,
        className: iM
      } = MM;
      return (0, QS.jsx)("span", {
        className: MS()("SkyblockMoon", `Moon-${rM}`, iM),
        "aria-hidden": "true"
      })
    }

    function Fj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(MO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)();
      return iM.enabled ? (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: MS()("SkyblockPassageChip", iM.open && "Open"),
          "aria-label": OM("skyblockGame:passageChipLabel", {
            phase: iM.phaseName
          }),
          title: OM("skyblockGame:passageChipLabel", {
            phase: iM.phaseName
          }),
          onMouseDown: MM => {
            MM.preventDefault()
          },
          onClick: rM.toggle,
          children: (0, QS.jsx)(vj, {
            phase: iM.phase
          }, iM.phase)
        })
      }) : null
    }

    function Bj(MM) {
      let {
        fish: rM
      } = MM;
      return (0, QS.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, QS.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, QS.jsx)(SS.b, {
            itemName: rM.itemName,
            amount: 0
          })
        }), (0, QS.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: rM.displayName
          }), (0, QS.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: rM.where
          })]
        })]
      })
    }

    function Xj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(MO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, QS.jsx)(vj, {
              phase: iM.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: OM("skyblockGame:passageTitle")
              }), (0, QS.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: iM.phaseName
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: rM.dismiss
            })]
          }), (0, QS.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: OM("skyblockGame:passageIntro")
          }), (0, QS.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, QS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, QS.jsx)("h3", {
                children: OM("skyblockGame:passageVisiting")
              }), (0, QS.jsx)("ul", {
                className: "SkyblockPassageList",
                children: iM.visitors.map((MM => (0, QS.jsx)(Bj, {
                  fish: MM
                }, MM.itemName)))
              })]
            }), (0, QS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== iM.resting && (0, QS.jsxs)(QS.Fragment, {
                children: [(0, QS.jsx)("h3", {
                  children: OM("skyblockGame:passageResting")
                }), (0, QS.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, QS.jsx)(Bj, {
                    fish: iM.resting
                  })
                })]
              }), (0, QS.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, QS.jsx)(vj, {
                  phase: iM.nextPhase
                }), (0, QS.jsx)("span", {
                  children: iM.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Ij() {
      return (0, QS.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((MM => (0, QS.jsx)("i", {
          style: {
            "--sparkle-index": MM
          }
        }, MM)))
      })
    }

    function Kj(MM) {
      var rM;
      let {
        charm: iM,
        view: OM,
        controller: SM
      } = MM;
      const {
        t: jM
      } = (0, PS.A)(), aM = OM.shop, PM = (null === (rM = OM.sparkle) || void 0 === rM ? void 0 : rM.id) === iM.id;
      return (0, QS.jsxs)("li", {
        className: MS()("SkyblockLampLightCharm", iM.owned && "Owned", iM.socketed && "Socketed"),
        children: [PM && (0, QS.jsx)(Ij, {}, OM.sparkle.count), (0, QS.jsx)("h4", {
          children: iM.name
        }), (0, QS.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: iM.effect
        }), (0, QS.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: iM.lines.map((MM => (0, QS.jsxs)("li", {
            className: MS()("SkyblockLampLightOddsLine", "better" === MM.tone ? "Better" : "worse" === MM.tone ? "Worse" : "Same"),
            children: [(0, QS.jsx)("span", {
              className: "Before",
              children: MM.before
            }), (0, QS.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, QS.jsx)("span", {
              className: "After",
              children: MM.after
            })]
          }, MM.label)))
        }), (0, QS.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: iM.owned ? iM.socketed ? (0, QS.jsxs)(QS.Fragment, {
            children: [(0, QS.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: jM("skyblockGame:lampLightSocketed")
            }), (0, QS.jsx)(lS.V, {
              disabled: !OM.canCommand,
              ariaLabel: jM("skyblockGame:lampLightRemoveLabel", {
                charm: iM.name
              }),
              onClick: () => {
                SM.socket(null)
              },
              children: jM("skyblockGame:lampLightRemove")
            })]
          }) : (0, QS.jsx)(lS.e, {
            disabled: !OM.canCommand || !aM.heldRod,
            ariaLabel: jM("skyblockGame:lampLightSocketLabel", {
              charm: iM.name
            }),
            onClick: () => {
              SM.socket(iM.id)
            },
            children: jM("skyblockGame:lampLightSocket")
          }) : (0, QS.jsx)(lS.e, {
            disabled: !OM.canCommand || !iM.affordable,
            ariaLabel: jM("skyblockGame:lampLightBuyLabel", {
              item: iM.name,
              cost: iM.cost
            }),
            onClick: () => {
              SM.buy(iM.id)
            },
            children: iM.cost
          })
        })]
      })
    }

    function qj(MM) {
      var rM;
      let {
        tint: iM,
        view: OM,
        controller: SM
      } = MM;
      const {
        t: jM
      } = (0, PS.A)();
      return (0, QS.jsxs)("li", {
        className: MS()("SkyblockLampLightTint", iM.wearing && "Wearing"),
        style: {
          "--tint-colour": iM.colour
        },
        children: [(null === (rM = OM.sparkle) || void 0 === rM ? void 0 : rM.id) === iM.id && (0, QS.jsx)(Ij, {}, OM.sparkle.count), (0, QS.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, QS.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: iM.name
        }), iM.wearing ? (0, QS.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: jM("skyblockGame:lampLightWearing")
        }) : (0, QS.jsx)(lS.e, {
          disabled: !OM.canCommand || !iM.owned && !iM.affordable,
          ariaLabel: iM.owned ? jM("skyblockGame:lampLightWearLabel", {
            tint: iM.name
          }) : jM("skyblockGame:lampLightBuyLabel", {
            item: iM.name,
            cost: iM.cost
          }),
          onClick: () => {
            iM.owned ? SM.wearTint(iM.id) : SM.buy(iM.id)
          },
          children: iM.owned ? jM("skyblockGame:lampLightWear") : iM.cost
        })]
      })
    }

    function Tj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(hO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = iM.shop;
      return (0, QS.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, QS.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: iM.balance
          }), (0, QS.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": iM.releasing,
            className: MS()("SkyblockLampLightSwitch", iM.releasing && "On"),
            disabled: iM.releasing ? "ready" !== iM.status : !iM.canCommand,
            onClick: () => {
              rM.setRelease(!iM.releasing)
            },
            children: [(0, QS.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, QS.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), OM("skyblockGame:lampLightRelease")]
          }), (0, QS.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: OM("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== iM.notice && (0, QS.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: iM.notice
        }), null !== SM && (0, QS.jsxs)(QS.Fragment, {
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, QS.jsx)("h3", {
              children: OM("skyblockGame:lampLightCharms")
            }), (0, QS.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: SM.oddsFor
            }), (0, QS.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((MM => (0, QS.jsx)("button", {
                type: "button",
                "aria-pressed": iM.situation === MM,
                className: MS()("SkyblockLampLightSituation", iM.situation === MM && "Selected"),
                onClick: () => {
                  rM.setSituation(MM)
                },
                children: OM("open" === MM ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, MM)))
            })]
          }), !SM.heldRod && (0, QS.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: OM("skyblockGame:lampLightHoldRod")
          }), (0, QS.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: SM.charms.map((MM => (0, QS.jsx)(Kj, {
              charm: MM,
              view: iM,
              controller: rM
            }, MM.id)))
          }), (0, QS.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, QS.jsx)("h3", {
              children: OM("skyblockGame:lampLightTints")
            })
          }), (0, QS.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, QS.jsxs)("li", {
              className: MS()("SkyblockLampLightTint", "Islands", SM.wearingIslandColours && "Wearing"),
              children: [(0, QS.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, QS.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: OM("skyblockGame:lampLightIslandColours")
              }), SM.wearingIslandColours ? (0, QS.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: OM("skyblockGame:lampLightWearing")
              }) : (0, QS.jsx)(lS.e, {
                disabled: !iM.canCommand,
                ariaLabel: OM("skyblockGame:lampLightWearLabel", {
                  tint: OM("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  rM.wearTint(null)
                },
                children: OM("skyblockGame:lampLightWear")
              })]
            }), SM.tints.map((MM => (0, QS.jsx)(qj, {
              tint: MM,
              view: iM,
              controller: rM
            }, MM.id)))]
          })]
        })]
      })
    }

    function Vj(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(hO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)();
      return iM.releasing ? (0, QS.jsx)(iS.i, {
        children: (0, QS.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            rM.setRelease(!1)
          },
          children: [(0, QS.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, QS.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [OM("skyblockGame:lampLightReleasing"), " \xb7 ", iM.balance]
          }), (0, QS.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: OM("skyblockGame:lampLightKeepCatches")
          }), null !== iM.gained && (0, QS.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: iM.gained.text
          }, iM.gained.count)]
        })
      }) : null
    }

    function cj(MM) {
      let {
        island: rM,
        view: iM,
        aim: OM
      } = MM;
      const {
        t: SM
      } = (0, PS.A)(), jM = rM.featuredFish;
      return (0, QS.jsxs)("li", {
        className: MS()("SkyblockKeepersChairIsland", `Island-${rM.id}`, rM.favoured && "Aimed", !rM.relit && "Dark"),
        children: [(0, QS.jsx)("h3", {
          children: rM.name
        }), rM.relit && null !== jM ? (0, QS.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: SM("skyblockGame:keepersChairTideNotice")
          }), (0, QS.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, QS.jsx)(SS.b, {
              itemName: jM.itemName,
              amount: 0
            })
          }), (0, QS.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: jM.displayName
          })]
        }) : (0, QS.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, QS.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: SM("skyblockGame:keepersChairDark")
          })
        }), rM.relit && (rM.favoured ? (0, QS.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: SM("skyblockGame:keepersChairAimed")
        }) : (0, QS.jsx)(lS.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !iM.canAim,
          ariaLabel: SM("skyblockGame:keepersChairAimLabel", {
            island: rM.name
          }),
          onClick: () => {
            OM(rM.id)
          },
          children: SM("skyblockGame:keepersChairAim")
        }))]
      }, rM.favoured ? iM.aimedCount : 0)
    }

    function Ma(MM) {
      let {
        controller: rM,
        lampLight: iM
      } = MM;
      const OM = (0, nS.e)(aO, rM.getSnapshot()),
        SM = (0, nS.e)(hO, iM.getSnapshot()),
        [jM, aM] = (0, eM.useState)("lamp"),
        {
          t: PM
        } = (0, PS.A)(),
        nM = US();
      if (!OM.enabled) return null;
      const QM = "light" === jM && SM.enabled;
      return (0, QS.jsx)(yS.e, {
        show: OM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: MS()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", QM && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: nM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: PM("skyblockGame:keepersChairTitle")
              }), (0, QS.jsx)("p", {
                children: PM(QM ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              ariaLabel: PM("skyblockGame:keepersChairClose"),
              onClick: rM.dismiss
            })]
          }), SM.enabled && (0, QS.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((MM => (0, QS.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === MM === QM,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === MM === QM ? "true" : void 0,
              className: MS()("SkyblockKeepersChairTab", "light" === MM === QM && "Selected"),
              onClick: () => {
                aM(MM)
              },
              children: [PM("lamp" === MM ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === MM && (0, QS.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: SM.balance
              })]
            }, MM)))
          }), QM ? (0, QS.jsx)(Tj, {
            controller: iM
          }) : (0, QS.jsx)(ra, {
            view: OM,
            controller: rM
          })]
        })
      })
    }

    function ra(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)();
      return (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: rM.islands.map((MM => (0, QS.jsx)(cj, {
            island: MM,
            view: rM,
            aim: iM.aim
          }, MM.id)))
        }), null !== rM.almanac && (0, QS.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: OM("skyblockGame:passageTitle")
          }), (0, QS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, QS.jsx)(vj, {
              phase: rM.almanac.phase
            }), rM.almanac.phaseName]
          }), (0, QS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, QS.jsx)(vj, {
              phase: rM.almanac.nextPhase
            }), rM.almanac.next]
          })]
        }), (0, QS.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: OM("skyblockGame:keepersChairFavour")
          }), rM.aimed && (0, QS.jsx)(lS.V, {
            className: "SkyblockKeepersChairRest",
            disabled: !rM.canAim,
            onClick: () => {
              iM.aim(null)
            },
            children: OM("skyblockGame:keepersChairRest")
          })]
        }), null !== rM.status && (0, QS.jsx)("p", {
          className: MS()("SkyblockKeepersChairStatus", "refused" === rM.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: rM.status.text
        })]
      })
    }

    function ia(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(nO, rM.getSnapshot());
      if (!OM.enabled) return null;
      const SM = OM.freshCount > 0 ? iM("skyblockGame:reachLogOpenNews", {
        count: OM.freshCount
      }) : iM("skyblockGame:reachLogOpen");
      return (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsxs)("button", {
          type: "button",
          className: MS()("SkyblockReachLogButton", OM.freshCount > 0 && "HasNews", OM.pending && "Pending"),
          "aria-label": SM,
          title: SM,
          onClick: rM.ask,
          children: [OM.news && (0, QS.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${OM.newsToken}`), (0, QS.jsx)("span", {
            className: MS()("SkyblockReachLogIcon", OM.news && "Jump"),
            "aria-hidden": "true",
            children: (0, QS.jsx)(SS.b, {
              itemName: zO,
              amount: 0
            })
          }, `icon:${OM.newsToken}`), OM.freshCount > 0 && (0, QS.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: OM.freshCount
          })]
        })
      })
    }

    function Oa(MM) {
      let {
        gift: rM
      } = MM;
      return (0, QS.jsx)("li", {
        className: MS()("SkyblockRegularsGift", rM.given && "Given"),
        children: rM.text
      })
    }

    function Sa(MM) {
      let {
        regular: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)();
      return (0, QS.jsxs)("li", {
        className: MS()("SkyblockRegularsCard", rM.tagged ? "Tagged" : "Untagged", rM.resting && "Resting"),
        children: [(0, QS.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: rM.fishName,
            children: (0, QS.jsx)(SS.b, {
              itemName: rM.itemName,
              amount: 0
            })
          }), (0, QS.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, QS.jsx)("h3", {
              children: rM.name
            }), (0, QS.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: rM.fishName
            })]
          })]
        }), (0, QS.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: rM.line
        }), (0, QS.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: rM.size
          }), rM.tagged && (0, QS.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: rM.resting ? iM("skyblockGame:regularsResting") : rM.meetings
          })]
        }), (0, QS.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: rM.chance
        }), (0, QS.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: rM.gifts.map((MM => (0, QS.jsx)(Oa, {
            gift: MM
          }, MM.text)))
        }), rM.history.length > 0 && (0, QS.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: rM.history.map(((MM, rM) => (0, QS.jsx)("li", {
            children: MM
          }, rM)))
        })]
      })
    }

    function ja(MM) {
      let {
        controller: rM,
        island: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)(), SM = (0, nS.e)(sO, rM.getSnapshot()), jM = SM.islands.find((MM => MM.id === iM));
      if (!SM.enabled || void 0 === jM) return null;
      const aM = OM("skyblockGame:regularsOpen");
      return (0, QS.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": aM,
        title: aM,
        onClick: () => {
          rM.openIsland(iM)
        },
        children: [(0, QS.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: OM("skyblockGame:regularsTitle")
        }), jM.regulars.map((MM => (0, QS.jsx)("span", {
          className: MS()("SkyblockRegularsStripIcon", MM.tagged && "Tagged"),
          title: MM.name,
          children: (0, QS.jsx)(SS.b, {
            itemName: MM.itemName,
            amount: 0
          })
        }, MM.id)))]
      })
    }

    function aa(MM) {
      var rM;
      let {
        controller: iM
      } = MM;
      const OM = (0, nS.e)(sO, iM.getSnapshot()),
        {
          t: SM
        } = (0, PS.A)(),
        jM = US();
      if (!OM.enabled) return null;
      const aM = null !== (rM = OM.islands.find((MM => MM.id === OM.selected))) && void 0 !== rM ? rM : null;
      return (0, QS.jsx)(yS.e, {
        show: OM.open,
        close: iM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: jM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: SM("skyblockGame:regularsTitle")
              }), (0, QS.jsx)("p", {
                children: SM("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: iM.dismiss
            })]
          }), (0, QS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: OM.islands.map((MM => {
              const rM = MM.id === OM.selected;
              return (0, QS.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": rM,
                "data-pad-tab": !0,
                "data-pad-selected": rM ? "true" : void 0,
                className: MS()("SkyblockReachLogTab", `Island-${MM.id}`, rM && "Selected", MM.charm.given && "GoldPage"),
                onClick: () => {
                  iM.selectIsland(MM.id)
                },
                children: (0, QS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: MM.name
                })
              }, MM.id)
            }))
          }), (0, QS.jsxs)("div", {
            className: MS()("SkyblockRegularsPage", null !== aM && `Island-${aM.id}`),
            role: "tabpanel",
            children: [(0, QS.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: SM("skyblockGame:regularsHow")
            }), null !== aM && (0, QS.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: aM.regulars.map((MM => (0, QS.jsx)(Sa, {
                regular: MM
              }, MM.id)))
            })]
          }), null !== aM && (0, QS.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, QS.jsx)("span", {
              className: MS()("SkyblockRegularsCharm", aM.charm.given && "Given"),
              children: aM.charm.text
            })
          })]
        })
      })
    }
    const Pa = [{
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
      na = Array.from({
        length: 6
      }, ((MM, rM) => ({
        "--x": `${(88*(.618034*rM%1)).toFixed(1)}%`,
        "--y": `${(10+37*rM%70).toFixed(1)}%`,
        "--size": 7 + rM % 3 * 3 + "rem",
        "--drift-x": 3 * (rM % 3 - 1) + "rem",
        "--drift-y": 2 * (rM % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + rM % 4 * 3 + "s",
        "--delay": 2.5 * -rM + "s"
      }))),
      Qa = Array.from({
        length: 14
      }, ((MM, rM) => ({
        "--left": `${(3+94*((.618034*rM+.3)%1)).toFixed(1)}%`,
        "--size": 4 + rM % 4 * 2 + "px",
        "--sway": rM % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*rM%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*rM%12).toFixed(2)}s`
      }))),
      za = (0, eM.memo)((function(MM) {
        let {
          island: rM
        } = MM;
        return (0, QS.jsxs)("div", {
          className: MS()("SkyblockReachLogDepths", null !== rM && `Island-${rM}`),
          "aria-hidden": "true",
          children: [Pa.map(((MM, rM) => (0, QS.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: MM
          }, `shaft${rM}`))), na.map(((MM, rM) => (0, QS.jsx)("span", {
            className: MS()("SkyblockReachLogMote", rM % 2 === 1 && "Violet"),
            style: MM
          }, `mote${rM}`))), Qa.map(((MM, rM) => (0, QS.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: MM
          }, `bubble${rM}`)))]
        })
      })),
      La = 100;

    function ma(MM) {
      let {
        view: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)();
      if (null === rM || 0 === rM.total) return null;
      const OM = La * rM.aspect,
        SM = iM("skyblockGame:hiddenWatersCount", {
          found: rM.found,
          total: rM.total
        });
      return (0, QS.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${iM("skyblockGame:hiddenWatersTitle")}: ${SM}`,
        children: [(0, QS.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${OM}`,
          "aria-hidden": "true",
          children: [rM.islands.map(((MM, rM) => (0, QS.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (MM.left + MM.width / 2) * La,
            cy: (MM.top + MM.height / 2) * OM,
            rx: MM.width / 2 * La,
            ry: MM.height / 2 * OM
          }, rM))), rM.pins.map(((MM, rM) => (0, QS.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: MM.left * La,
            cy: MM.top * OM,
            r: 13
          }, rM)))]
        }), (0, QS.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, QS.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: iM("skyblockGame:hiddenWatersTitle")
          }), (0, QS.jsx)("span", {
            className: rM.found === rM.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: SM
          })]
        })]
      })
    }

    function Ha(MM) {
      let {
        view: rM,
        island: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)(), SM = null === rM || void 0 === rM ? void 0 : rM.glimpses.get(iM);
      return void 0 === SM || 0 === SM.length ? null : (0, QS.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, QS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: OM("skyblockGame:hiddenWatersGlimpsed")
        }), (0, QS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: SM.map((MM => (0, QS.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, QS.jsx)(SS.b, {
              itemName: MM,
              amount: 0
            })
          }, MM)))
        })]
      })
    }
    const ha = ["Bronze", "Silver", "Gold"],
      Ja = [{
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
      da = Ja.slice(0, 2);

    function ya(MM) {
      return MM ? Ja : da
    }

    function la(MM) {
      let {
        fish: rM,
        letGoShown: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)();
      return (0, QS.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [ha.map(((MM, iM) => {
          const SM = iM < rM.marks;
          return (0, QS.jsx)("span", {
            className: MS()("SkyblockReachLogPip", MM, SM && "Earned", SM && rM.fresh && iM === rM.marks - 1 && "Newest"),
            title: OM(QO[iM])
          }, MM)
        })), (0, QS.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), ya(iM).map(((MM, iM) => (0, QS.jsx)("span", {
          className: MS()("SkyblockReachLogRibbon", MM.className, !0 === rM.ribbons[iM] && "Earned"),
          title: OM(MM.titleKey)
        }, MM.className)))]
      })
    }

    function Ea(MM) {
      let {
        letGoShown: rM,
        haloShown: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)();
      return (0, QS.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, QS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: OM("skyblockGame:reachLogMarks"),
          children: [(0, QS.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), OM("skyblockGame:reachLogLegendMarks")]
        }), ya(rM).map((MM => (0, QS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: OM(MM.titleKey),
          children: [(0, QS.jsx)("span", {
            className: MS()("SkyblockReachLogRibbon", MM.className, "Earned")
          }), OM(MM.legendKey)]
        }, MM.className))), (0, QS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: OM("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, QS.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), OM("skyblockGame:reachLogLegendGlimmer")]
        }), iM && (0, QS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: OM("skyblockGame:reachLogHaloTitle"),
          children: [(0, QS.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), OM("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Ua(MM) {
      let {
        returner: rM
      } = MM;
      return (0, QS.jsxs)("div", {
        className: MS()("SkyblockReachLogReturner", rM.back && "Back"),
        children: [(0, QS.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, QS.jsx)(SS.b, {
            itemName: rM.itemName,
            amount: 0
          })
        }), (0, QS.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: rM.line
        })]
      })
    }

    function Ga(MM) {
      let {
        fish: rM,
        letGoShown: iM
      } = MM;
      const {
        t: OM
      } = (0, PS.A)();
      return (0, QS.jsxs)("li", {
        className: MS()("SkyblockReachLogCard", rM.caught ? "Caught" : "Unknown", rM.marks >= 3 && "GoldCard", rM.fresh && "Fresh", rM.visitor && "Visitor"),
        children: [rM.visitor && (0, QS.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: OM("skyblockGame:reachLogVisitor")
        }), rM.fresh && Array.from({
          length: 4
        }, ((MM, rM) => (0, QS.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, rM))), (0, QS.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [rM.halo && (0, QS.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: OM("skyblockGame:reachLogHaloTitle")
          }), (0, QS.jsx)(SS.b, {
            itemName: rM.itemName,
            amount: 0
          }), rM.glimmer && (0, QS.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: OM("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, QS.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: rM.name
        }), (0, QS.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: rM.chance
        }), (0, QS.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: rM.best
        }), (0, QS.jsx)(la, {
          fish: rM,
          letGoShown: iM
        })]
      })
    }

    function Ca(MM) {
      let {
        page: rM,
        letGoShown: iM,
        hiddenWaters: OM
      } = MM;
      const {
        t: SM
      } = (0, PS.A)();
      return rM.awake ? (0, QS.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: rM.fish.map((MM => (0, QS.jsx)(Ga, {
          fish: MM,
          letGoShown: iM
        }, MM.itemName)))
      }) : (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: SM("skyblockGame:reachLogAsleep")
        }), (0, QS.jsx)(Ha, {
          view: OM,
          island: rM.id
        })]
      })
    }

    function ea(MM) {
      var rM, iM;
      let {
        controller: OM,
        regulars: SM,
        hiddenWaters: jM
      } = MM;
      const aM = (0, nS.e)(nO, OM.getSnapshot()),
        PM = function(MM) {
          return (0, nS.e)(fO, MM.getSnapshot())
        }(jM),
        nM = (0, nS.e)(sO, SM.getSnapshot()),
        {
          t: QM
        } = (0, PS.A)(),
        zM = US();
      if (!aM.enabled) return null;
      const LM = null !== (rM = aM.pages.find((MM => MM.id === aM.selected))) && void 0 !== rM ? rM : null;
      return (0, QS.jsx)(yS.e, {
        show: aM.open,
        close: OM.dismiss,
        togglePointerLock: !1,
        className: MS()("SkyblockSkillsOverlay", nM.open && "SkyblockReachLogUnderLedger"),
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: zM,
          onKeyDown: ES,
          children: [(0, QS.jsx)(za, {
            island: null !== (iM = null === LM || void 0 === LM ? void 0 : LM.id) && void 0 !== iM ? iM : null
          }), (0, QS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: QM("skyblockGame:reachLogTitle")
              }), (0, QS.jsx)("p", {
                children: QM("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, QS.jsx)(ma, {
              view: PM
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: OM.dismiss
            })]
          }), (0, QS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: aM.pages.map((MM => {
              const rM = MM.id === aM.selected,
                iM = MM.fish.some((MM => MM.fresh));
              return (0, QS.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": rM,
                "data-pad-tab": !0,
                "data-pad-selected": rM ? "true" : void 0,
                className: MS()("SkyblockReachLogTab", `Island-${MM.id}`, rM && "Selected", !MM.awake && "Asleep", MM.gold && "GoldPage", iM && "HasNews"),
                onClick: () => {
                  OM.selectPage(MM.id)
                },
                children: [(0, QS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: MM.name
                }), MM.awake && (0, QS.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: QM("skyblockGame:reachLogCaughtCount", {
                    caught: MM.caught,
                    total: MM.total
                  })
                })]
              }, MM.id)
            }))
          }), (0, QS.jsxs)("div", {
            className: MS()("SkyblockReachLogPage", null !== LM && `Island-${LM.id}`),
            role: "tabpanel",
            children: [null !== LM && (0, QS.jsx)(Ca, {
              page: LM,
              letGoShown: aM.letGoShown,
              hiddenWaters: PM
            }), !0 === (null === LM || void 0 === LM ? void 0 : LM.awake) && null !== LM.returner && (0, QS.jsx)(Ua, {
              returner: LM.returner
            }), !0 === (null === LM || void 0 === LM ? void 0 : LM.awake) && (0, QS.jsx)(ja, {
              controller: SM,
              island: LM.id
            })]
          }), (0, QS.jsx)("footer", {
            className: MS()("SkyblockReachLogFooter", null !== LM && `Island-${LM.id}`, !0 === (null === LM || void 0 === LM ? void 0 : LM.gold) && "GoldPage"),
            children: !0 === (null === LM || void 0 === LM ? void 0 : LM.gold) ? (0, QS.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: QM("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, QS.jsxs)(QS.Fragment, {
              children: [(0, QS.jsx)(Ea, {
                letGoShown: aM.letGoShown,
                haloShown: !0 === (null === LM || void 0 === LM ? void 0 : LM.fish.some((MM => MM.halo)))
              }), (0, QS.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: QM("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var ba = iM(5233);

    function wa(MM) {
      let {
        conversation: rM,
        completedLabel: iM
      } = MM;
      return (0, QS.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, QS.jsxs)("header", {
          children: [(0, QS.jsx)("h3", {
            children: rM.questName
          }), rM.completed && (0, QS.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: iM
          })]
        }), rM.lines.map((MM => (0, QS.jsx)(ba.b, {
          display: MM.display
        }, MM.key)))]
      })
    }

    function ta(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(NO, rM.getSnapshot()), SM = US();
      if (!OM.enabled) return null;
      const jM = !OM.loading && 0 === OM.conversations.length;
      return (0, QS.jsx)(yS.e, {
        show: OM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: iM("skyblockDialogue:title")
              }), (0, QS.jsx)("p", {
                children: iM("skyblockDialogue:intro")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: rM.dismiss
            })]
          }), (0, QS.jsxs)("div", {
            className: MS()("SkyblockDialogueBody", {
              SingleColumn: null !== OM.questFocus || 0 === OM.characters.length
            }),
            children: [null === OM.questFocus && OM.characters.length > 0 && (0, QS.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: OM.characters.map((MM => (0, QS.jsx)(lS.e, {
                className: MS()("SkyblockDialogueCharacter", {
                  Selected: MM.selected
                }),
                onClick: () => {
                  rM.selectCharacter(MM.id)
                },
                children: (0, QS.jsx)(jS.b, {
                  text: MM.styling
                })
              }, MM.id)))
            }), (0, QS.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== OM.questFocus && (0, QS.jsx)(lS.e, {
                className: "SkyblockDialogueBack",
                onClick: rM.showCharacters,
                children: iM("skyblockDialogue:allCharacters")
              }), OM.loading && (0, QS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: iM("skyblockDialogue:loading")
              }), jM && (0, QS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: iM(null === OM.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), OM.conversations.map((MM => (0, QS.jsx)(wa, {
                conversation: MM,
                completedLabel: OM.completedLabel
              }, MM.questId)))]
            })]
          })]
        })
      })
    }

    function ga(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(BO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US();
      return iM.enabled ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: OM("skyblockGame:autographBook")
              }), (0, QS.jsx)("p", {
                children: OM("skyblockGame:autographBookIntro")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              onClick: rM.dismiss
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, QS.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, QS.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, QS.jsx)("strong", {
                  children: iM.total
                }), (0, QS.jsx)("span", {
                  children: OM("skyblockGame:autographTotal")
                })]
              }), (0, QS.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, QS.jsx)("strong", {
                  children: iM.rankTotal
                }), (0, QS.jsx)("span", {
                  children: OM("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === iM.entries.length ? (0, QS.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: OM("skyblockGame:autographBookEmpty")
            }) : (0, QS.jsx)("ul", {
              className: "SkyblockAutographList",
              children: iM.entries.map((MM => (0, QS.jsxs)("li", {
                className: MS()("SkyblockAutograph", {
                  Ranked: null !== MM.rank
                }),
                style: null === MM.rank ? void 0 : {
                  color: MM.rank.colour
                },
                children: [null !== MM.rank && (0, QS.jsx)(BS.b, {
                  className: "SkyblockAutographRankIcon",
                  name: MM.rank.icon,
                  kit: (0, BS.d)(MM.rank.icon)
                }), (0, QS.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, QS.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: MM.name
                  }), (0, QS.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== MM.rank && (0, QS.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: MM.rank.label
                    }), (0, QS.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: MM.signedOn
                    })]
                  })]
                })]
              }, MM.key)))
            })]
          })]
        })
      }) : null
    }
    const ua = (0, eM.memo)((function(MM) {
        let {
          controller: rM
        } = MM;
        return (0, QS.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: rM.display.mountWaypoint,
          children: [(0, QS.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, QS.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, QS.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, QS.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, QS.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, QS.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Ra = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function pa(MM) {
      return "next" === MM.phase ? "\u2192" : Ra[MM.kind]
    }
    const Wa = (0, eM.memo)((function(MM) {
      let {
        controller: rM,
        display: iM
      } = MM;
      const OM = (0, nS.e)(Ar, rM.getNotificationSnapshot()),
        [SM, jM] = (0, eM.useState)(!1);
      return (0, nS.d)("qteStateUpdated", (MM => {
        jM(MM.isActive)
      })), (0, QS.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (SM ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [OM && (0, QS.jsxs)("div", {
          className: `SkyblockQuestNotification ${OM.kind} ${OM.phase}`,
          style: {
            "--quest-notification-duration": `${OM.durationMs}ms`,
            ...OM.accent && {
              "--quest-notification-accent": OM.accent
            }
          },
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (OM.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, QS.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: pa(OM)
            }), OM.iconItem && (0, QS.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, QS.jsx)(SS.b, {
                itemName: OM.iconItem,
                amount: 0
              })
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, QS.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: OM.title
            }), (0, QS.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, QS.jsx)(fS.c, {
                text: OM.name
              })
            }), OM.description && (0, QS.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, QS.jsx)(fS.c, {
                text: OM.description
              })
            }), OM.reward && (0, QS.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, QS.jsx)(fS.c, {
                text: OM.reward
              })
            })]
          })]
        }, OM.token), (null === OM || void 0 === OM ? void 0 : OM.waypointNameKey) && (0, QS.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": OM.waypointNameKey,
          "data-notification-token": OM.token,
          ref: iM.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${OM.token}`)]
      })
    }));

    function sa(MM) {
      const rM = parseInt(MM.replace("#", ""), 16);
      return `${rM>>16&255}, ${rM>>8&255}, ${255&rM}`
    }
    const Da = (0, eM.memo)((function(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(Ji, rM.getSnapshot());
      if (!OM) return null;
      const SM = "arrival" === OM.phase;
      return (0, QS.jsxs)("div", {
        className: MS()("SkyblockPortalTransit", {
          Departure: !SM,
          Arrival: SM
        }),
        style: {
          "--portal-rgb": sa(OM.colour),
          "--portal-duration": `${OM.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, QS.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, QS.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            rM.finishArrival(OM.token)
          }
        }), (0, QS.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, QS.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !SM && (0, QS.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: iM("skyblockGame:portalTransitHeading")
          }), (0, QS.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: iM(OM.zoneNameKey)
          })]
        })]
      }, OM.token)
    }));

    function ka() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Za() {
      const MM = document.querySelector(".SkyblockHudCoins"),
        rM = null === MM || void 0 === MM ? void 0 : MM.getBoundingClientRect();
      return rM && rM.width > 0 ? {
        x: rM.left + Math.min(rM.width, 24) / 2,
        y: rM.top + rM.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function oa(MM) {
      return {
        x: MM.left + MM.width / 2,
        y: MM.top + MM.height / 2
      }
    }

    function fa() {
      var MM;
      const rM = null === (MM = document.querySelector(".HotBar")) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
      return rM && rM.width > 0 ? oa(rM) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Ya(MM) {
      let {
        items: rM,
        origins: iM,
        target: OM
      } = MM;
      return (0, QS.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: rM.map(((MM, rM) => {
          const SM = iM[rM];
          return (0, QS.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${SM.x}px`,
              top: `${SM.y}px`,
              "--item-dx": OM.x - SM.x + "px",
              "--item-dy": OM.y - SM.y + "px",
              "--item-delay": 2e3 + 160 * rM + "ms",
              "--item-flight": "700ms"
            },
            children: (0, QS.jsx)(SS.b, {
              itemName: MM.dailyRewardItemName,
              amount: 0
            })
          }, MM.dailyRewardItemName)
        }))
      })
    }

    function Na(MM, rM) {
      const iM = -Math.PI / 2 + 1.25 * (MM / (rM - 1) * 2 - 1),
        OM = 70 + MM % 3 * 22;
      return {
        x: Math.cos(iM) * OM,
        y: Math.sin(iM) * OM * .7
      }
    }

    function Aa(MM) {
      let {
        origin: rM,
        target: iM,
        count: OM
      } = MM;
      const SM = [];
      for (let jM = 0; jM < OM; jM++) {
        const MM = Na(jM, OM);
        SM.push((0, QS.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${rM.x}px`,
            top: `${rM.y}px`,
            "--coin-bx": `${MM.x}px`,
            "--coin-by": `${MM.y}px`,
            "--coin-dx": iM.x - rM.x + "px",
            "--coin-dy": iM.y - rM.y + "px",
            "--coin-delay": `${Gi(jM,OM)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, QS.jsx)(SS.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, jM))
      }
      return (0, QS.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: SM
      })
    }

    function xa(MM) {
      let {
        day: rM
      } = MM;
      const iM = bM[rM - 1];
      return (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, QS.jsx)(SS.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, aS.g)(iM.dailyRewardCoins)]
        }), iM.dailyRewardItems.map((MM => (0, QS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, QS.jsx)(SS.b, {
            itemName: MM.dailyRewardItemName,
            amount: 0
          }), "\xd7", MM.dailyRewardItemAmount]
        }, MM.dailyRewardItemName)))]
      })
    }

    function va(MM) {
      let {
        day: rM
      } = MM;
      const iM = tM(rM);
      return (0, QS.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: bM.map(((MM, OM) => {
          const SM = OM + 1;
          return (0, QS.jsxs)("li", {
            className: MS()("SkyblockDailyRewardTile", {
              Claimed: SM < rM && SM !== iM,
              Today: SM === rM,
              Tomorrow: SM === iM,
              Jackpot: SM === wM
            }),
            children: [(0, QS.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: SM
            }), (0, QS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, QS.jsx)(SS.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, aS.g)(MM.dailyRewardCoins)]
            }), MM.dailyRewardItems.map((MM => (0, QS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, QS.jsx)(SS.b, {
                itemName: MM.dailyRewardItemName,
                amount: 0
              }), "\xd7", MM.dailyRewardItemAmount]
            }, MM.dailyRewardItemName)))]
          }, SM)
        }))
      })
    }

    function Fa(MM) {
      let {
        view: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, eM.useRef)(null), SM = (0, eM.useRef)(null), [jM, aM] = (0, eM.useState)(null);
      (0, eM.useLayoutEffect)((() => {
        var MM;
        const rM = null === (MM = OM.current) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
        if (rM) {
          var iM, jM;
          const MM = Array.from(null !== (iM = null === (jM = SM.current) || void 0 === jM ? void 0 : jM.children) && void 0 !== iM ? iM : [], (MM => oa(MM.getBoundingClientRect())));
          aM({
            origin: oa(rM),
            target: Za(),
            itemOrigins: MM,
            itemTarget: fa()
          })
        }
      }), []);
      const PM = tM(rM.day),
        nM = function(MM, rM) {
          const [iM, OM] = (0, eM.useState)((() => ka() ? MM : 0));
          return (0, eM.useEffect)((() => {
            if (ka()) return;
            const iM = performance.now();
            let SM = 0;
            const jM = aM => {
              const PM = Math.min(Math.max((aM - iM) / rM, 0), 1);
              OM(Math.round(MM * (1 - (1 - PM) ** 3))), PM < 1 && (SM = requestAnimationFrame(jM))
            };
            return SM = requestAnimationFrame(jM), () => {
              cancelAnimationFrame(SM)
            }
          }), [MM, rM]), iM
        }(rM.coins, 450);
      return (0, QS.jsxs)("div", {
        className: MS()("SkyblockDailyReward", {
          Jackpot: rM.day === wM
        }),
        style: {
          "--daily-duration": `${rM.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, QS.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, QS.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, QS.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: iM("skyblockGame:dailyRewardTitle")
            }), (0, QS.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: iM("skyblockGame:dailyRewardDay", {
                day: String(rM.day)
              })
            })]
          }), (0, QS.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: OM,
            children: [(0, QS.jsx)(SS.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, QS.jsxs)("span", {
              children: ["+", (0, aS.g)(nM)]
            })]
          }), rM.items.length > 0 && (0, QS.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: SM,
            children: rM.items.map((MM => (0, QS.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, QS.jsx)(SS.b, {
                itemName: MM.dailyRewardItemName,
                amount: 0
              }), "\xd7", MM.dailyRewardItemAmount]
            }, MM.dailyRewardItemName)))
          }), (0, QS.jsx)(va, {
            day: rM.day
          }), (0, QS.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [iM("skyblockGame:dailyRewardComeBack"), (0, QS.jsx)(xa, {
              day: PM
            })]
          })]
        }), null !== jM && (0, QS.jsx)(Aa, {
          origin: jM.origin,
          target: jM.target,
          count: rM.flyingCoins
        }), null !== jM && jM.itemOrigins.length === rM.items.length && (0, QS.jsx)(Ya, {
          items: rM.items,
          origins: jM.itemOrigins,
          target: jM.itemTarget
        })]
      })
    }
    const Ba = (0, eM.memo)((function(MM) {
        let {
          controller: rM
        } = MM;
        const iM = (0, nS.e)(li, rM.getSnapshot());
        return iM ? (0, QS.jsx)(Fa, {
          view: iM
        }, iM.token) : null
      })),
      Xa = "Gold Coin";

    function Ia(MM) {
      return 650 + 220 * MM
    }

    function Ka(MM) {
      return {
        "--letter-delay": `${Ia(MM)}ms`,
        "--letter-land": `${Ia(MM)+300}ms`
      }
    }

    function qa(MM) {
      let {
        letterCount: rM
      } = MM;
      return (0, QS.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, QS.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, QS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, QS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: rM
        }, ((MM, rM) => (0, QS.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Ka(rM),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, rM)))]
      })
    }

    function Ta(MM) {
      var rM, iM, OM;
      let {
        letter: SM,
        index: jM
      } = MM;
      const {
        t: aM
      } = (0, PS.A)(), PM = null !== (rM = null === (iM = SM.items[0]) || void 0 === iM ? void 0 : iM.itemName) && void 0 !== rM ? rM : Xa;
      return (0, QS.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Ka(jM),
        children: [(0, QS.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, QS.jsx)(SS.b, {
            itemName: PM,
            amount: 0
          })
        }), (0, QS.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: aM(SM.reasonKey, null !== (OM = SM.reasonParams) && void 0 !== OM ? OM : void 0)
        }), (0, QS.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [SM.coins > 0 && (0, QS.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, QS.jsx)(SS.b, {
              itemName: Xa,
              amount: 0
            }), "+", (0, aS.g)(SM.coins)]
          }), SM.items.map(((MM, rM) => (0, QS.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, QS.jsx)(SS.b, {
              itemName: MM.itemName,
              amount: 0
            }), MM.label, " \xd7", MM.amount]
          }, rM)))]
        })]
      })
    }

    function Va(MM) {
      let {
        view: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)();
      return (0, QS.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${rM.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Ia(rM.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, QS.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, QS.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, QS.jsx)(qa, {
              letterCount: rM.letters.length
            }), (0, QS.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: iM("skyblockGame:mailboxTitle")
            })]
          }), (0, QS.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: rM.letters.map(((MM, rM) => (0, QS.jsx)(Ta, {
              letter: MM,
              index: rM
            }, rM)))
          }), rM.more > 0 && (0, QS.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: iM("skyblockGame:mailboxMore", {
              count: String(rM.more)
            })
          })]
        })
      })
    }
    const ca = (0, eM.memo)((function(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(ei, rM.getSnapshot());
      return iM ? (0, QS.jsx)(Va, {
        view: iM
      }, iM.token) : null
    }));

    function MP(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(dO, rM.getSnapshot());
      if (null === OM) return null;
      const SM = OM.fullSet ? "empty" === OM.fuelState ? {
        text: iM("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: iM("skyblockGame:magmawardHudFullSet", {
          worn: String(OM.wornCount)
        }),
        tone: "partial"
      };
      return (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsxs)("div", {
          className: MS()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${OM.fuelState}`, {
            "SkyblockMagmawardHud-partial": !OM.fullSet,
            "SkyblockMagmawardHud-armed": OM.fullSet && "empty" !== OM.fuelState
          }),
          children: [null !== OM.flare && (0, QS.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${OM.flare}`
          }, `flare:${OM.flareToken}`), (0, QS.jsx)("div", {
            className: MS()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: OM.setLit
            }),
            children: OM.pieces.map(((MM, rM) => (0, QS.jsx)("div", {
              className: MS()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: MM.worn,
                SkyblockMagmawardPieceJustWorn: MM.justWorn
              }),
              children: (0, QS.jsx)(SS.b, {
                itemName: MM.itemName,
                amount: 0
              })
            }, `${rM}:${MM.wornToken}`)))
          }, `pieces:${OM.setLitToken}`), (0, QS.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, QS.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, QS.jsxs)("div", {
              className: MS()("SkyblockMagmawardFuelCounter", OM.pulse && `SkyblockMagmawardFuelCounter-${OM.pulse}`),
              children: [(0, QS.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, QS.jsx)(SS.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, QS.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: OM.fuel
              })]
            }, `counter:${OM.pulseToken}`), "burn" === OM.pulse && (0, QS.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${OM.pulseToken}`)]
          }), SM && (0, QS.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${SM.tone} SmallTextBold`,
            children: SM.text
          })]
        })
      })
    }

    function rP(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM,
        selectedLanguage: OM
      } = (0, PS.A)(), SM = (0, nS.e)(lO, rM.getSnapshot());
      return null === SM ? null : (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsxs)("div", {
          className: MS()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: SM.inRange
          }),
          style: {
            "--glowtide-colour": SM.colour
          },
          "aria-label": iM("skyblockGame:glowtideChipLabel"),
          children: [(0, QS.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), SM.inRange ? (0, QS.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: iM("skyblockGame:glowtideChipInRange")
          }, `call:${SM.inRangeToken}`) : (0, QS.jsxs)(QS.Fragment, {
            children: [(0, QS.jsx)("div", {
              ref: rM.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, QS.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: iM("skyblockGame:waypointDistance", {
                distance: UM(SM.distance, OM.code)
              })
            })]
          })]
        })
      })
    }

    function iP(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(UO, rM.getSnapshot());
      return null === OM ? null : (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsxs)("div", {
          className: MS()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: OM.full
          }),
          "aria-label": iM("skyblockGame:glowMeterLabel", {
            fill: String(OM.fill),
            vL: String(OM.vL)
          }),
          children: [OM.burst && (0, QS.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${OM.burstToken}`), (0, QS.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, QS.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${OM.ratio})`
              }
            }), OM.gained && (0, QS.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${OM.gainToken}`), OM.full && Array.from({
              length: 5
            }, ((MM, rM) => (0, QS.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, rM)))]
          }), OM.full && OM.rares.map((MM => (0, QS.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, QS.jsx)(SS.b, {
              itemName: MM,
              amount: 0
            })
          }, MM))), OM.ready && (0, QS.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, QS.jsx)("span", {
              children: iM("skyblockGame:glowMeterReady")
            })
          }, `ready:${OM.fullToken}`)]
        })
      })
    }

    function OP(MM) {
      let {
        controller: rM
      } = MM;
      const {
        t: iM
      } = (0, PS.A)(), OM = (0, nS.e)(CO, rM.getSnapshot());
      if (null === OM) return null;
      const SM = "waiting" === OM.phase,
        jM = {
          animationDuration: `${OM.waitMs}ms`,
          animationDelay: -OM.elapsedMs + "ms"
        },
        aM = SM ? void 0 : {
          animationDuration: `${OM.waitMs}ms`
        };
      return (0, QS.jsxs)("div", {
        className: SM ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [SM && (0, QS.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((MM, rM) => (0, QS.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, rM))), (0, QS.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: jM
          }), (0, QS.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, QS.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, QS.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: jM
            })]
          }), (0, QS.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, QS.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: aM,
          children: iM(OM.line)
        }, OM.lineIndex)]
      }, OM.token)
    }

    function SP(MM) {
      let {
        chart: rM,
        showHere: iM,
        className: OM
      } = MM;
      return (0, QS.jsx)("div", {
        className: MS()("SkyblockTideChartGrid", OM, null !== rM.pictureName && "Complete"),
        "aria-hidden": "true",
        children: rM.cells.map(((MM, OM) => {
          const SM = 0 !== (rM.pulseCells & 1 << OM),
            jM = rM.castCell === OM;
          return (0, QS.jsx)("span", {
            className: MS()("SkyblockTideChartCell", `Cell-${MM}`, SM && "Pulse", jM && "Cast", iM && rM.hereCell === OM && "Here")
          }, `${OM}:${SM?`p${rM.pulseToken}`:""}:${jM?`c${rM.castToken}`:""}`)
        }))
      })
    }

    function jP(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(bO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = iM.chip;
      if (!iM.enabled || null === SM) return null;
      const jM = OM("skyblockGame:tideChartsChipLabel", {
        island: SM.islandName,
        lit: String(SM.lit),
        ink: String(SM.ink)
      });
      return (0, QS.jsx)(iS.i, {
        placement: "statBars",
        children: (0, QS.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: MS()("SkyblockTideChartsChip", iM.open && "Open", null !== SM.pictureName && "Complete"),
          "aria-label": jM,
          title: jM,
          onMouseDown: MM => {
            MM.preventDefault()
          },
          onClick: rM.toggle,
          children: [(0, QS.jsx)(SP, {
            chart: SM,
            showHere: !1,
            className: "Mini"
          }), (0, QS.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [SM.lit, "/", SM.ink]
          })]
        })
      })
    }

    function aP(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, nS.e)(bO, rM.getSnapshot()),
        {
          t: OM
        } = (0, PS.A)(),
        SM = US(),
        jM = iM.card;
      return iM.enabled && null !== jM ? (0, QS.jsx)(yS.e, {
        show: iM.open,
        close: rM.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: SM,
          onKeyDown: ES,
          children: [(0, QS.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: OM("skyblockGame:tideChartsTitle")
              }), (0, QS.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: OM("skyblockGame:tideChartsIntro")
              })]
            }), (0, QS.jsx)(lS.l, {
              padIgnore: !0,
              ariaLabel: OM("skyblockGame:tideChartsClose"),
              onClick: rM.dismiss
            })]
          }), iM.tabs.length > 1 && (0, QS.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": OM("skyblockGame:tideChartsIslands"),
            children: iM.tabs.map((MM => (0, QS.jsx)("button", {
              type: "button",
              className: MS()("SkyblockTideChartsTab", MM.selected && "Selected"),
              "aria-pressed": MM.selected,
              onClick: () => {
                rM.LH(MM.island)
              },
              children: MM.name
            }, MM.island)))
          }), (0, QS.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, QS.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": jM.gridLabel,
              children: (0, QS.jsx)(SP, {
                chart: jM,
                showHere: !0,
                className: "Large"
              })
            }), (0, QS.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, QS.jsx)("h3", {
                children: jM.islandName
              }), (0, QS.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: jM.litText
              }), null === jM.pictureName ? (0, QS.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: OM("skyblockGame:tideChartsPictureHidden")
              }) : (0, QS.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: OM("skyblockGame:tideChartsPictureRevealed", {
                  picture: jM.pictureName
                })
              }, jM.pictureName), (0, QS.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, QS.jsxs)("li", {
                  children: [(0, QS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), OM("skyblockGame:tideChartsLegendLit")]
                }), (0, QS.jsxs)("li", {
                  children: [(0, QS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), OM("skyblockGame:tideChartsLegendClear")]
                }), null !== jM.hereCell && (0, QS.jsxs)("li", {
                  children: [(0, QS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), OM("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, QS.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, QS.jsx)("span", {
                  children: iM.turnsText
                }), (0, QS.jsx)("span", {
                  children: iM.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function PP(MM) {
      var rM;
      let {
        controller: iM
      } = MM;
      const {
        selectedLanguage: OM
      } = (0, PS.A)(), SM = OM.code;
      (0, eM.useEffect)((() => {
        iM.setTranslator(((MM, rM) => (0, PS.x)(SM, MM, rM)), SM, ((MM, rM) => (0, PS.r)(SM, MM, rM)))
      }), [iM, SM]);
      const jM = (0, nS.e)(QM, iM.map.getSnapshot()),
        {
          openInGameMenuName: aM
        } = (0, rS.m)(["openInGameMenuName"]);
      return (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsx)(Wa, {
          controller: iM.quests,
          display: iM.navigation.display
        }), jM.enabled && !aM && (0, QS.jsx)(kS, {
          controller: iM.navigation
        }), (0, QS.jsx)(zS, {
          controller: iM,
          minimap: jM.enabled && (null === (rM = jM.presentation) || void 0 === rM ? void 0 : rM.minimap) && (0, QS.jsx)(DS, {
            view: jM.presentation.minimap,
            navigation: iM.navigation,
            controller: iM.map
          }),
          children: (0, QS.jsx)(FS, {
            controller: iM.quests,
            surface: "hud"
          })
        }), (0, QS.jsx)(ua, {
          controller: iM.navigation
        }), (0, QS.jsx)(Da, {
          controller: iM.portalTransit
        }), (0, QS.jsx)(Ba, {
          controller: iM.dailyReward
        }), (0, QS.jsx)(ca, {
          controller: iM.mailbox
        }), (0, QS.jsx)(MP, {
          controller: iM.magmaward
        }), (0, QS.jsx)(rP, {
          controller: iM.glowtide
        }), (0, QS.jsx)(Fj, {
          controller: iM.passage
        }), (0, QS.jsx)(jP, {
          controller: iM.tideCharts
        }), (0, QS.jsx)(iP, {
          controller: iM.glowMeter
        }), (0, QS.jsx)(ia, {
          controller: iM.reachLog
        }), (0, QS.jsx)(OP, {
          controller: iM.hushWait
        }), (0, QS.jsx)(Vj, {
          controller: iM.lampLight
        }), (0, QS.jsx)(ZS, {
          controller: iM.skills,
          surface: "hud"
        })]
      })
    }

    function nP(MM) {
      let {
        controller: rM
      } = MM;
      return (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsx)(sS, {
          controller: rM.map,
          navigation: rM.navigation
        }), (0, QS.jsx)(ZS, {
          controller: rM.skills,
          surface: "menu"
        }), (0, QS.jsx)(FS, {
          controller: rM.quests,
          surface: "menu"
        }), (0, QS.jsx)(bj, {
          controller: rM.dungeons
        }), (0, QS.jsx)(gj, {
          controller: rM.collections
        }), (0, QS.jsx)(pj, {
          controller: rM.questGraph
        }), (0, QS.jsx)(Zj, {
          controller: rM.forge
        }), (0, QS.jsx)(xj, {
          controller: rM.smuggler
        }), (0, QS.jsx)(Ma, {
          controller: rM.keepersChair,
          lampLight: rM.lampLight
        }), (0, QS.jsx)(ea, {
          controller: rM.reachLog,
          regulars: rM.regulars,
          hiddenWaters: rM.hiddenWaters
        }), (0, QS.jsx)(aa, {
          controller: rM.regulars
        }), (0, QS.jsx)(Xj, {
          controller: rM.passage
        }), (0, QS.jsx)(aP, {
          controller: rM.tideCharts
        }), (0, QS.jsx)(ta, {
          controller: rM.dialogue
        }), (0, QS.jsx)(ga, {
          controller: rM.autographs
        })]
      })
    }
    var QP = iM(37705);
    const zP = si + Ni;

    function LP(MM, rM) {
      const iM = [{
        sound: "rpgKnifeSlice1",
        beat: si,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: si,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: si,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: si,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: si,
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
        LH: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: zP + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        LH: !0,
        beat: zP + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: zP + 60,
        lead: 180,
        volume: .5 + .06 * MM,
        rate: .82 + .07 * MM
      }];
      return MM >= 4 && iM.push({
        sound: "exp_levelup",
        beat: zP + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), rM && iM.push({
        sound: "trumpetFlare",
        beat: zP + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), iM.push({
        sound: "harp_pling",
        beat: Di,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), iM
    }
    class mP {
      constructor(MM) {
        this.deps = MM, this.pending = new Map, this.localHook = null
      }
      hookWaiting(MM, rM) {
        this.pending.delete(MM);
        const iM = this.deps.now();
        if (null === rM) {
          var OM;
          if ((null === (OM = this.localHook) || void 0 === OM ? void 0 : OM.hookId) === MM) {
            const MM = iM >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(MM)
          }
          return
        }
        const SM = iM + rM;
        this.settle(MM, SM) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(MM, {
          untilMs: iM + 1e3,
          biteAtMs: SM
        }))
      }
      getLocalHook() {
        var MM, rM;
        return null !== (MM = null === (rM = this.localHook) || void 0 === rM ? void 0 : rM.hookId) && void 0 !== MM ? MM : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const MM = this.deps.now();
        for (const [rM, {
            untilMs: iM,
            biteAtMs: OM
          }] of this.pending)(this.settle(rM, OM) || MM > iM) && this.pending.delete(rM)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(MM, rM) {
        const iM = this.deps.getLineOwner(MM);
        if (null === iM) return !1;
        if (!this.deps.isLocalPlayer(iM)) return !0;
        if (this.localHook = {
            hookId: MM,
            biteAtMs: rM
          }, !this.deps.isHushWaiting()) {
          const [rM, iM] = this.deps.getHookPosition(MM);
          this.deps.onCastLanded(rM, iM)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var HP = iM(4577);
    const hP = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      JP = {
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
    class dP {
      constructor(MM) {
        this.deps = MM, this.tell = null
      }
      receiveTell(MM) {
        let {
          biteTellTier: rM
        } = MM;
        this.tell = {
          tier: rM,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(MM) {
        const rM = this.tell;
        if (this.tell = null, !MM) return;
        const iM = null !== rM && this.deps.now() - rM.atMs <= 3e3 ? rM.tier : 0;
        this.deps.vibrate(hP[iM])
      }
      burstAtHook() {
        const MM = this.tell,
          rM = this.deps.getLocalHookPosition();
        null === MM || MM.burst || null === rM || (MM.burst = !0, this.deps.playParticles(function(MM, rM) {
          let [iM, OM, SM] = rM;
          const {
            count: jM,
            rise: aM,
            colour: PM
          } = JP[MM], [nM, QM, zM] = PM;
          return {
            texture: "glint",
            pos1: [iM - .3, OM, SM - .3],
            pos2: [iM + .3, OM + .2, SM + .3],
            dir1: [-.6, aM, -.6],
            dir2: [.6, 1.4 * aM, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: jM,
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
              minColor: [nM, QM, zM, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [nM, QM, zM, 0],
              maxColor: [nM, QM, zM, 0]
            }],
            blendMode: HP.d.Add,
            hideDist: 48
          }
        }(MM.tier, rM)))
      }
    }
    var yP = iM(1258),
      lP = iM(2045),
      EP = iM(30);

    function UP(MM, rM) {
      return [{
        timeFraction: 0,
        minColor: [255 * MM[0], 255 * MM[1], 255 * MM[2], 1],
        maxColor: [255 * rM[0], 255 * rM[1], 255 * rM[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const GP = [0, 0, 0],
      CP = {
        texture: "glint",
        mipmaps: !1,
        vL: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: GP,
        dir2: GP,
        blendMode: HP.d.OneOne
      },
      eP = {
        ...CP,
        colorGradients: UP([1, .88, .38], [1, .65, .15])
      },
      bP = {
        ...CP,
        colorGradients: UP([.55, .95, 1], [.9, 1, 1])
      },
      wP = [.5, .5, .5],
      tP = {
        texture: "glint",
        mipmaps: !1,
        vL: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: UP([1, .12, .12], [1, .35, .2]),
        blendMode: HP.d.OneOne
      };
    class gP {
      constructor() {
        this.drops = new Map
      }
      GL(MM, rM) {
        if ("overflowFlash" === rM.kind) {
          const [iM, OM, SM] = rM.position, jM = MM.createParticles(tP, {
            pos: [iM, OM, SM],
            half: wP
          });
          return jM.emit(18), void jM.stop()
        }
        this.drops.has(rM.itemId) || this.drops.set(rM.itemId, {
          owner: rM.owner,
          cosmetic: rM.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      bL(MM) {
        if (0 === this.drops.size) return;
        const rM = performance.now(),
          iM = MM.getCameraPosition();
        let OM = 0;
        for (const jM of this.drops.values()) null !== jM.particles && OM++;
        for (const [jM, aM] of this.drops) {
          const PM = MM.getPositionView(jM);
          if (null === PM) {
            var SM;
            if (aM.seen || rM - aM.markedAt > 5e3) null !== aM.particles && OM--, null === (SM = aM.particles) || void 0 === SM || SM.stop(), this.drops.delete(jM);
            continue
          }
          aM.cosmetic || !MM.isLocalPlayer(aM.owner) || aM.pickupDelayCleared || (MM.clearPickupDelay(jM), aM.pickupDelayCleared = !0);
          const nM = aM.lastPosition,
            QM = aM.seen && (PM[0] - nM[0]) ** 2 + (PM[1] - nM[1]) ** 2 + (PM[2] - nM[2]) ** 2 > 4e-4,
            zM = (PM[0] - iM[0]) ** 2 + (PM[1] - iM[1]) ** 2 + (PM[2] - iM[2]) ** 2 < 2025;
          aM.seen = !0, nM[0] = PM[0], nM[1] = PM[1], nM[2] = PM[2], QM && (aM.lastMovingAt = rM), null !== aM.particles && (!zM || rM - aM.lastMovingAt > 500) && (aM.particles.stop(), aM.particles = null, OM--), QM && zM && null === aM.particles && OM < 32 && (aM.particles = MM.createParticles(aM.cosmetic ? bP : eP, {
            pos: PM
          }), OM++), null !== aM.particles && (aM.particles.moveTo(PM), aM.particles.setEmitRate(QM ? 12 : 0)), !QM && null === aM.particles && rM - Math.max(aM.lastMovingAt, aM.markedAt) > 2e3 && this.drops.delete(jM)
        }
      }
      dispose() {
        for (const rM of this.drops.values()) {
          var MM;
          null === (MM = rM.particles) || void 0 === MM || MM.stop()
        }
        this.drops.clear()
      }
    }
    var uP = iM(181);
    const RP = uP.f.jy * uP.f.playerEyeToHeightRatio;
    class pP {
      constructor(MM) {
        this.host = MM, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      GL(MM) {
        this.lava = MM, this.nextUpdateAt = 0
      }
      bL() {
        var MM;
        const rM = this.host.now();
        if (rM < this.nextUpdateAt) return;
        this.nextUpdateAt = rM + 250;
        const iM = this.host.playerPosition(),
          OM = iM && this.findNearest([iM[0], iM[1] + RP, iM[2]]);
        if (!OM || OM.distance >= 40) return void this.stop();
        const SM = .5 * Math.min(1, (40 - OM.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(SM) : this.loop = this.host.play("lavaFlow", SM, OM.position, 40 + RP, 9, !0), null === (MM = this.loop) || void 0 === MM || MM.setPosition(OM.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var MM;
        null === (MM = this.loop) || void 0 === MM || MM.stop(), this.loop = null
      }
      findNearest(MM) {
        let rM = -1,
          iM = 1 / 0;
        for (let OM = 0; OM < this.lava.length; OM += 3) {
          const SM = this.lava[OM] - MM[0],
            jM = this.lava[OM + 1] - MM[1],
            aM = this.lava[OM + 2] - MM[2],
            PM = SM * SM + jM * jM + aM * aM;
          PM < iM && (iM = PM, rM = OM)
        }
        return rM < 0 ? null : {
          position: [this.lava[rM], this.lava[rM + 1], this.lava[rM + 2]],
          distance: Math.sqrt(iM)
        }
      }
    }
    var WP = iM(2022),
      sP = iM(39676);
    const DP = {
      "Grey Portal": "Gray"
    };
    for (const AP of LM.Ec) DP[`${AP} Portal`] = AP;
    const kP = Object.keys(DP),
      ZP = Object.fromEntries(kP.map((MM => [MM, (0, LM.X)(LM.L[`${(0,LM.me)(DP[MM])}Team`])])));
    Object.fromEntries(kP.map((MM => [MM, LM.L[`${(0,LM.me)(DP[MM])}UiText`]])));
    class oP {
      constructor(MM, rM) {
        this.presentation = MM, this.portal = rM, this.unlocked = void 0
      }
      GL(MM) {
        const rM = !1 === this.unlocked && MM;
        this.unlocked = MM, this.bL();
        const {
          min: iM,
          max: OM,
          unlockedBlock: SM
        } = this.portal;
        if (rM && this.presentation.hasChunk(...iM)) {
          const [MM, rM, jM] = ZP[SM];
          this.presentation.playParticles({
            pos1: [...iM],
            pos2: OM.map((MM => MM + 1)),
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
              minColor: [MM, rM, jM, 1],
              maxColor: [Math.min(255, MM + 55), Math.min(255, rM + 55), Math.min(255, jM + 90), 1]
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
      bL() {
        var MM;
        const rM = this.unlocked ? this.portal.unlockedBlock : null !== (MM = this.portal.lockedBlock) && void 0 !== MM ? MM : "Light Gray Portal",
          {
            min: iM,
            max: OM
          } = this.portal;
        for (let SM = iM[0]; SM <= OM[0]; SM++)
          for (let MM = iM[1]; MM <= OM[1]; MM++)
            for (let jM = iM[2]; jM <= OM[2]; jM++) this.presentation.hasChunk(SM, MM, jM) && this.presentation.sE(SM, MM, jM) !== rM && this.presentation.cW(SM, MM, jM, rM)
      }
    }
    var fP = iM(39565);
    iM(39552);
    const YP = {
        farming_1: {
          raises: MM => "NPC" === MM.type && "chef" === MM.variation,
          rise: .4
        },
        fishing_1: {
          raises: MM => "Draugr Warper" === MM.type,
          rise: .4
        }
      },
      NP = (MM, rM, iM, SM) => {
        let {
          localPlayerId: jM
        } = SM;
        const aM = new VO({
          translate: (MM, rM) => (0, PS.x)(yP.e.get().getCurrentLanguageCode(), MM, rM),
          translateWithIcons: (MM, rM) => (0, PS.r)(yP.e.get().getCurrentLanguageCode(), MM, rM),
          setMenuOpen: MM => {
            MM ? (0, FM.w)() : (0, FM.k)()
          },
          dismissMenu: FM.n,
          publishSkills: MM => {
            BM.i.Tz(Zr, MM, !0)
          },
          publishQuests: MM => {
            BM.i.Tz(Nr, MM, !0)
          },
          publishQuestNotification: MM => {
            BM.i.Tz(Ar, MM, !0)
          },
          publishDungeons: MM => {
            BM.i.Tz(Fr, MM, !0)
          },
          publishCollections: MM => {
            BM.i.Tz(mi, MM, !0)
          },
          publishMap: MM => {
            BM.i.Tz(QM, MM, !0)
          },
          publishHud: MM => {
            BM.i.Tz(KO, MM, !0)
          },
          publishPortalTransit: MM => {
            BM.i.Tz(Ji, MM, !0)
          },
          isLoadingScreenUp: () => rS.d.get("loadingOverlayVisible"),
          publishDailyReward: MM => {
            BM.i.Tz(li, MM, !0)
          },
          publishMailbox: MM => {
            BM.i.Tz(ei, MM, !0)
          },
          publishQuestGraph: MM => {
            BM.i.Tz(wi, MM, !0)
          },
          publishForge: MM => {
            BM.i.Tz(Ii, MM, !0)
          },
          publishSmuggler: MM => {
            BM.i.Tz(Ti, MM, !0)
          },
          publishKeepersChair: MM => {
            BM.i.Tz(aO, MM, !0)
          },
          publishReachLog: MM => {
            BM.i.Tz(nO, MM, !0)
          },
          publishLampLight: MM => {
            BM.i.Tz(hO, MM, !0)
          },
          publishMagmaward: MM => {
            BM.i.Tz(dO, MM, !0)
          },
          publishGlowtide: MM => {
            BM.i.Tz(lO, MM, !0)
          },
          publishGlowMeter: MM => {
            BM.i.Tz(UO, MM, !0)
          },
          publishHushWait: MM => {
            BM.i.Tz(CO, MM, !0)
          },
          publishPassage: MM => {
            BM.i.Tz(MO, MM, !0)
          },
          publishTideCharts: MM => {
            BM.i.Tz(bO, MM, !0)
          },
          publishRegulars: MM => {
            BM.i.Tz(sO, MM, !0)
          },
          publishHiddenWaters: MM => {
            BM.i.Tz(fO, MM, !0)
          },
          publishDialogue: MM => {
            BM.i.Tz(NO, MM, !0)
          },
          publishAutographs: MM => {
            BM.i.Tz(BO, MM, !0)
          },
          onDailyRewardStarted: MM => {
            sM.playSound(jM, MM.day === wM ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (MM, rM) => {
            sM.playSound(jM, "exp_collect", .35, 1 + .6 * MM / (rM - 1)), BM.i.Tz(Ei, MM === rM - 1)
          },
          onDailyRewardItemLanded: MM => {
            sM.playSound(jM, "pickUp", .6, 1 + .15 * MM)
          },
          onMailboxStarted: () => {
            sM.playSound(jM, "rpgMetalClick", .6, 1), sM.playSound(jM, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            sM.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: EP.k,
          requestTracking: MM => {
            sM.sendCommand(`quests track ${MM}`)
          },
          requestDungeonEnter: (MM, rM) => {
            sM.sendCommand(`dungeonEnter ${MM} ${rM}`)
          },
          requestQuestJump: MM => {
            sM.sendCommand(`${WM} jump ${MM}`)
          },
          requestQuestArrive: (MM, rM) => {
            const iM = `${WM} arrive ${MM}`;
            sM.sendCommand(rM ? `${iM} complete` : iM)
          },
          requestForge: MM => {
            let {
              blade: rM,
              guard: iM,
              handle: OM
            } = MM;
            sM.sendCommand(`forge ${rM} ${iM} ${OM}`)
          },
          requestDialogue: () => {
            sM.sendCommand("quests dialogue")
          },
          requestSmuggle: (MM, rM) => {
            sM.sendCommand(`smuggle ${MM} ${rM}`)
          },
          requestKeepersChairAim: MM => {
            sM.sendCommand(`keeperschair-aim ${MM}`)
          },
          requestReachLogOpen: () => {
            sM.sendCommand("reachlog-open")
          },
          requestLampLight: MM => {
            sM.sendCommand(`${MM}`)
          },
          requestTravel: MM => {
            sM.sendCommand(`map travel ${MM.kind} ${MM.id} ${MM.requestId}`)
          }
        });
        let PM, nM, zM, mM, HM, lM, EM, UM, GM, bM, tM, uM, RM;
        const pM = new gP;
        let sM, oM = null;
        const NM = YP[null !== iM && void 0 !== iM ? iM : ""],
          AM = (MM, rM) => {
            null !== NM && void 0 !== NM && NM.raises(rM) && sM.setNametagOffset(MM, NM.rise)
          },
          IM = new dP({
            getLocalHookPosition: () => {
              const MM = KM.getLocalHook();
              return null !== MM && sM.checkValid(MM) ? sM.XE(MM) : null
            },
            playParticles: MM => {
              sM.playParticleEffect(MM)
            },
            vibrate: MM => {
              XM.e.play("fishBite", MM)
            },
            now: () => performance.now()
          }),
          KM = new mP({
            getLineOwner: MM => sM.checkValid(MM) ? sM.getLineOwner(MM) : null,
            isLocalPlayer: MM => sM.isLocalPlayer(MM),
            getHookPosition: MM => {
              const [rM, , iM] = sM.XE(MM);
              return [rM, iM]
            },
            isHushWaiting: () => {
              var MM;
              return "waiting" === (null === (MM = aM.hushWait.getSnapshot()) || void 0 === MM ? void 0 : MM.phase)
            },
            onCastLanded: (MM, rM) => {
              aM.tideCharts.castLanded(MM, rM)
            },
            onLocalHookSettled: () => {
              IM.onLocalHookSettled()
            },
            onLocalWaitEnded: MM => {
              IM.onLocalWaitEnded(MM)
            },
            now: () => performance.now()
          }),
          qM = new pP({
            now: () => performance.now(),
            playerPosition: () => sM.checkValid(jM) ? sM.XE(jM) : null,
            play: (MM, rM, iM, OM, SM, aM) => sM.playSound(jM, MM, rM, 1, {
              kS: iM,
              maxHearDist: OM,
              refDistance: SM
            }, aM)
          }),
          TM = new Map;
        let VM;
        return {
          onCreate: MM => {
            if (sM = MM, oM = new sP.SkyblockEntityFacing(MM, NM ? AM : null), aM.portalTransit.resumeArrival(null !== iM && void 0 !== iM ? iM : null), (null !== iM && void 0 !== iM ? iM : OM) === OM) {
              let MM = -1 / 0;
              VM = BM.i.subscribe("toggleMenu", (rM => {
                const iM = performance.now();
                "inventory|Workbench" !== rM || "cross_to_hub" !== aM.quests.getTrackedQuestId() || iM - MM < 1e4 || (MM = iM, sM.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [OM, SM] of Object.entries(null !== (rM = DM[null !== iM && void 0 !== iM ? iM : ""]) && void 0 !== rM ? rM : {})) {
              var rM;
              TM.set(OM, new oP({
                hasChunk: (rM, iM, OM) => MM.isBlockInLoadedChunk(rM, iM, OM),
                sE: (rM, iM, OM) => MM.blockIdToBlockName(MM.getBlockId(rM, iM, OM)),
                cW: (rM, iM, OM, SM) => {
                  MM.cW(rM, iM, OM, SM)
                },
                playParticles: rM => {
                  MM.playParticleEffect(rM)
                }
              }, SM))
            }
            RM = (0, WP.e)((MM => (0, br.f)(MM) ? (0, br.d)(MM) : null)), aM.resolveItemName = (rM, iM) => {
              const OM = MM.getItemStat(jM, rM, "displayName");
              return OM && "object" === typeof OM && "translationKey" in OM ? iM(OM.translationKey, (0, PS.o)(OM.params, lP.c.shown)) : "string" === typeof OM ? iM(OM) : rM
            }, aM.quests.notifications.onShown = MM => {
              "quest" === MM ? sM.playSound(jM, "magicAccent1", 1, 1) : "skillLevel" === MM ? sM.playSound(jM, "magicAccent1", 1, .6) : "landmark" === MM ? sM.playSound(jM, "trumpetFlare", 1, .6) : "npcNote" === MM ? sM.playSound(jM, "magicAccent2", .8, 1.1) : "started" === MM ? sM.playSound(jM, (0, QP.f)("bigDrumSwish"), 1, 1) : sM.playSound(jM, (0, QP.f)("rpgHandleSmallLeather"), 1, 1)
            }, aM.forge.onPartSelected = () => {
              sM.playSound(jM, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, aM.forge.onOpened = () => {
              ! function(MM) {
                MM.preloadSounds(LP(4, !0).map((MM => MM.sound)))
              }(MM)
            }, aM.forge.onForgeStarted = (rM, iM, OM) => function(MM, rM, iM, OM, SM) {
              const jM = [],
                aM = [],
                PM = iM => {
                  const OM = MM.playSound(rM, iM.LH ? (0, QP.f)(iM.sound) : iM.sound, iM.volume, iM.rate);
                  OM && (aM.push(OM), void 0 !== iM.cutAfter && jM.push(setTimeout((() => {
                    OM.fade(OM.getVolume(), 0, 300)
                  }), iM.cutAfter)))
                };
              for (const nM of LP(iM, OM)) SM ? jM.push(setTimeout((() => {
                PM(nM)
              }), Math.max(0, nM.beat - nM.lead / nM.rate))) : nM.beat !== si && "magicAccent2" !== nM.sound && "trumpetFlare" !== nM.sound || PM(nM);
              return () => {
                for (const MM of jM) clearTimeout(MM);
                for (const MM of aM) MM.fade(MM.getVolume(), 0, 120)
              }
            }(MM, jM, rM, iM, OM), aM.smuggler.onBought = () => {
              sM.playSound(jM, (0, QP.f)("rpgHandleSmallLeather"), 1, 1), sM.playSound(jM, "chestOpen", .6, 1)
            }, aM.compass.register(new hM(aM.map, !0)), aM.compass.register(new hM(aM.map, !1)), aM.compass.register(new dM(aM.map)), aM.compass.register(new yM((() => aM.quests.getSnapshot().compassTarget)));
            for (const iM of ["enemy", "npc"]) aM.compass.register(new JM(aM.map, iM, (rM => MM.checkValid(rM) ? MM.XE(rM) : void 0), (rM => MM.isAlive(rM))))
          },
          onAfterRender: (MM, rM) => {
            const iM = sM.checkValid(jM) ? sM.XE(jM) : null;
            aM.navigation.afterRender(iM, performance.now(), rM), aM.glowtide.afterRender(iM, rM.cameraHeading), aM.tideCharts.afterRender(iM), KM.afterRender()
          },
          onClose: () => {
            var MM, rM, iM, OM, SM, jM, QM, LM, hM, JM, dM, yM, lM, CM, eM;
            VM && BM.i.unsubscribe(VM), null === (MM = RM) || void 0 === MM || MM(), pM.dispose(), qM.dispose(), null === (rM = oM) || void 0 === rM || rM.dispose(), KM.dispose(), aM.dispose(), null === (iM = PM) || void 0 === iM || iM(), null === (OM = nM) || void 0 === OM || OM(), null === (SM = zM) || void 0 === SM || SM(), null === (jM = mM) || void 0 === jM || jM(), null === (QM = HM) || void 0 === QM || QM(), null === (LM = EM) || void 0 === LM || LM(), null === (hM = undefined) || void 0 === hM || hM(), null === (JM = UM) || void 0 === JM || JM(), null === (dM = GM) || void 0 === dM || dM(), null === (yM = bM) || void 0 === yM || yM(), null === (lM = tM) || void 0 === lM || lM(), null === (CM = undefined) || void 0 === CM || CM(), null === (eM = uM) || void 0 === eM || eM()
          },
          onPlayerChangeBlock: (MM, rM, OM, SM, PM, nM) => {
            if (MM === jM && "Air" === nM) {
              const MM = sM.getClientOption(jM, "creative");
              aM.skills.predictBlock([rM, OM, SM], PM, MM);
              const nM = function(MM, rM) {
                  if ("hub" === rM || "farming_1" === rM || "mining_1" === rM) return !fM.has(MM) || "hub" !== rM && "mining_1" !== rM ? Object.hasOwn(ZM, MM) ? ZM[MM] : void 0 : kM
                }(PM, iM),
                QM = ("hub" === iM || "mining_1" === iM) && (LM.od.some((MM => MM === PM)) || Object.hasOwn(YM, PM) || "mining_1" === iM && "Block of Coal" === PM);
              MM || void 0 === nM && !QM || sM.cW(rM, OM, SM, null !== nM && void 0 !== nM ? nM : kM)
            }
          },
          onPlayerAttackEntity: (MM, rM) => {
            if (MM !== jM || "Player" !== sM.getEntityType(rM)) return;
            const [iM, OM, SM] = sM.XE(rM);
            sM.burstParticlePreset("critical", [iM, OM + 1, SM], 10)
          },
          onChangeBlockFail: MM => {
            for (const {
                GO: rM
              }
              of MM) aM.skills.rejectBlock(rM)
          },
          onReceivedMessageFromServer: (MM, rM) => {
            if ("skyblockGatedPortal" === MM) {
              var iM;
              const [MM, OM] = rM;
              return void(null === (iM = TM.get(MM)) || void 0 === iM || iM.GL(OM))
            }
            if ("skyblockDailyReward" === MM) return void aM.dailyReward.GL(rM);
            if ("skyblockMailbox" === MM) return void aM.mailbox.GL(rM);
            if ("skyblockPortalTransit" === MM) return void aM.portalTransit.GL(rM);
            if ("skyblockLoot" === MM) return void pM.GL(sM, rM);
            if ("skyblockLava" === MM) return void qM.GL(rM);
            if ("skyblockForge" === MM) return void aM.forge.GL(rM);
            if ("skyblockMagmaward" === MM) return void aM.magmaward.GL(rM);
            if ("skyblockGlowtide" === MM) return void aM.glowtide.GL(rM);
            if ("skyblockGlowMeter" === MM) return void aM.glowMeter.GL(rM);
            if ("skyblockHushWait" === MM) return void aM.hushWait.GL(rM);
            if ("skyblockPassage" === MM) {
              const MM = rM;
              return aM.passage.GL(MM), aM.reachLog.receivePassagePhase(MM.passagePhase), bM ??= (0, CM.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: aM.passage.show
              }), void aM.keepersChair.receivePassage({
                keepersChairPassagePhase: MM.passagePhase,
                keepersChairPassageNextPhase: MM.passageNextPhase,
                keepersChairPassageTurnsInMs: MM.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === MM) {
              const MM = rM;
              return aM.tideCharts.GL(MM), void(MM.tideCharts.length > 0 && (tM ??= (0, CM.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: aM.tideCharts.show
              })))
            }
            if (MM === xM.y) {
              var OM;
              const {
                hookId: MM,
                waiting: iM
              } = rM;
              return void KM.hookWaiting(MM, null !== (OM = null === iM || void 0 === iM ? void 0 : iM.remainingMs) && void 0 !== OM ? OM : null)
            }
            if ("skyblockBiteTell" === MM) return void IM.receiveTell(rM);
            if ("skyblockSmuggler" === MM) return void aM.smuggler.GL(rM);
            if ("skyblockKeepersChair" === MM) return aM.keepersChair.GL(rM), void aM.lampLight.setAtChair(aM.keepersChair.isAtChair());
            if ("skyblockLampLight" === MM) {
              const MM = rM;
              var SM;
              if (aM.lampLight.GL(MM), MM.lampLightReleasing) GM ??= (0, CM.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  aM.lampLight.setRelease(!1)
                }
              });
              else null === (SM = GM) || void 0 === SM || SM(), GM = void 0;
              return
            }
            if ("skyblockRegulars" === MM) return void aM.regulars.GL(rM);
            if ("skyblockHiddenWaters" === MM) return void aM.hiddenWaters.GL(rM);
            if ("skyblockReachLog" === MM) return aM.reachLog.GL(rM), void(UM ??= (0, CM.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: zO
              },
              onClick: aM.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === MM) {
              for (const [MM, iM, OM, SM] of rM) sM.cW(MM, iM, OM, SM);
              return
            }
            if ("skyblockHud" === MM) aM.receiveHud(rM);
            else if ("skyblockMap" === MM) aM.map.GL(rM);
            else if (MM === vM.f) aM.skills.GL(rM);
            else if (MM === gM && "dialogue" === rM.kind) aM.dialogue.GL(rM);
            else if (MM === gM) aM.quests.GL(rM);
            else if ("skyblockDungeons" === MM) aM.dungeons.GL(rM);
            else if ("sbCollections" === MM) aM.collections.GL(rM);
            else if ("skyblockQuestGraph" === MM) aM.questGraph.GL(rM);
            else {
              if ("skyblockAutographs" !== MM) return;
              aM.autographs.GL(rM)
            }
            if (!nM && aM.map.getSnapshot().enabled) {
              const MM = (0, CM.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: aM.map.show
                }),
                rM = (0, FM.A)(aM.map.show);
              nM = () => {
                MM(), rM()
              }
            }!zM && aM.skills.getSnapshot().enabled && (zM = (0, CM.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: aM.skills.show
            })), !EM && aM.collections.getSnapshot().enabled && (EM = (0, CM.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: aM.collections.show
            })), !mM && aM.quests.getSnapshot().enabled && (mM = (0, CM.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: aM.quests.show
            })), !uM && aM.autographs.getSnapshot().enabled && (uM = (0, CM.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: aM.autographs.show
            }));
            const jM = aM.dungeons.getSnapshot().enabled;
            var QM;
            (zM || mM || jM) && lM !== jM && (lM = jM, null === (QM = HM) || void 0 === QM || QM(), HM = (0, CM.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: fP
              },
              disabled: !jM,
              panel: !0,
              onClick: aM.dungeons.show
            }));
            PM || (PM = (0, FM.C)((0, eM.createElement)(PP, {
              controller: aM
            }), {
              content: (0, eM.createElement)(nP, {
                controller: aM
              }),
              onClose: aM.close
            }))
          },
          bL: () => {
            var MM;
            for (const rM of TM.values()) rM.bL();
            pM.bL(sM), qM.bL(), null === (MM = oM) || void 0 === MM || MM.bL(), aM.skills.bL(), aM.quests.bL(), aM.dailyReward.bL(), aM.mailbox.bL(), aM.map.bL()
          }
        }
      }
  },
  39532: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => SM
    });
    var OM = iM(332);
    const SM = (0, OM.wb)([0, 0, -1]),
      jM = [{
        name: "S",
        bearing: (0, OM.wb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, OM.wb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: SM
      }, {
        name: "W",
        bearing: (0, OM.wb)([1, 0, 0])
      }]
  },
  39526: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      d: () => jM
    });
    var OM = iM(39532);

    function SM(MM, rM, iM) {
      return [100 * (iM.mapMaxX - MM) / (iM.mapMaxX - iM.mapMinX), 100 * (rM - iM.mapMinZ) / (iM.mapMaxZ - iM.mapMinZ)]
    }

    function jM(MM, rM, iM, jM) {
      const [aM, PM] = SM(MM, rM, jM), nM = OM.g - iM;
      return {
        rotation: nM,
        transform: `rotate(${nM}rad) translate(-${aM}%, -${PM}%)`
      }
    }
  },
  39571: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => aM
    });
    var OM = iM(4586);
    const SM = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function jM(MM) {
      const rM = new OM.h(MM);
      return {
        radius: 45,
        squareness: 3,
        wobbles: SM.map((MM => {
          let {
            lobes: iM,
            amount: OM
          } = MM;
          return {
            lobes: iM[Math.floor(rM.next() * iM.length)],
            amount: OM[0] + rM.next() * (OM[1] - OM[0]),
            phase: 2 * rM.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function aM(MM) {
      let {
        radius: rM,
        squareness: iM,
        wobbles: OM,
        samples: SM
      } = MM;
      const jM = [];
      for (let aM = 0; aM < SM; aM++) {
        const MM = 2 * Math.PI * aM / SM,
          PM = Math.cos(MM),
          nM = Math.sin(MM),
          QM = rM * (Math.abs(PM) ** iM + Math.abs(nM) ** iM) ** (-1 / iM) * OM.reduce(((rM, iM) => {
            let {
              lobes: OM,
              amount: SM,
              phase: jM
            } = iM;
            return rM + SM * Math.sin(OM * MM + jM)
          }), 1);
        jM.push(`${(50+QM*PM).toFixed(2)} ${(50+QM*nM).toFixed(2)}`)
      }
      return `M${jM.join("L")}Z`
    }
  },
  37305: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM
    });
    const OM = "skyblockSkills",
      SM = "skills_test_gym"
  },
  39588: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39596: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39605: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39614: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39621: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39628: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39634: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39639: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39645: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39648: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39653: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39658: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39660: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39666: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);