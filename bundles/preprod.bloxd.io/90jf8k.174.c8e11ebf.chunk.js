export const id = 174;
export const ids = [41, 174];
export const modules = {
  36958: (FF, WF, SF) => {
    var CF = {
      "./combat_1.png": 36965,
      "./dungeon_crumbling_crypt.png": 36971,
      "./dungeon_frozen_hollow.png": 36973,
      "./dungeon_wildwood_grove.png": 36976,
      "./dungeons.png": 36978,
      "./farming_1.png": 36981,
      "./fishing_1.png": 36987,
      "./hub.png": 36993,
      "./island.png": 37002,
      "./mining_1.png": 37005,
      "./mining_1_bridge.png": 37012,
      "./mining_1_gallery.png": 37015,
      "./mining_1_hollow.png": 37023,
      "./mining_1_village.png": 37030
    };

    function AF(FF) {
      var WF = uF(FF);
      return SF(WF)
    }

    function uF(FF) {
      if (!SF.o(CF, FF)) {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }
      return CF[FF]
    }
    AF.keys = function() {
      return Object.keys(CF)
    }, AF.resolve = uF, FF.exports = AF, AF.id = 36958
  },
  37038: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      f: () => uF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      return CF.set(FF, WF), FF
    }

    function uF(FF) {
      var WF;
      return null !== (WF = CF.get(FF)) && void 0 !== WF ? WF : null
    }
  },
  36945: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      var CF;
      const {
        width: AF,
        height: uF
      } = SF, hF = null !== (CF = FF.text) && void 0 !== CF ? CF : FF, bW = (hF.x / 100 - .5) * AF, dF = (hF.y / 100 - .5) * uF, PF = AF / 2 - WF.x;
      if (null !== FF.text && Math.abs(bW) <= PF && dF >= WF.top - uF / 2 && dF <= uF / 2 - WF.bottom) return {
        x: hF.x,
        y: hF.y
      };
      const RF = Math.min(0 === bW ? 1 / 0 : PF / Math.abs(bW), dF > 0 ? (uF / 2 - WF.bottom) / dF : dF < 0 ? (WF.top - uF / 2) / dF : 1 / 0);
      return !Number.isFinite(RF) || RF < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bW * RF / AF * 100,
        y: 50 + dF * RF / uF * 100
      }
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  37040: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      SkyblockEntityFacing: () => bW,
      needsSkyblockEntityFacing: () => hF
    });
    var CF = SF(36949),
      AF = SF(3434),
      uF = SF(37047);

    function hF(FF, WF) {
      if (FF.metaInfo === CF.p || "Iron Guardian" === FF.type || "Gold Guardian" === FF.type) return !0;
      if ("Pig" === FF.type) return "sitting" === FF.pose;
      if ("Person" !== FF.meshKind || void 0 === FF.meshOpts) return !1;
      let SF = null === WF || void 0 === WF ? void 0 : WF.get(FF.meshOpts);
      if (void 0 === SF) {
        var uF, hF;
        const CF = (0, AF.j)(FF);
        SF = !1, "pig_napoleon" === (null === CF || void 0 === CF || null === (uF = CF.opts.textures) || void 0 === uF ? void 0 : uF.head) ? SF = !0 : "npc_pig_head" === (null === CF || void 0 === CF || null === (hF = CF.opts.textures) || void 0 === hF ? void 0 : hF.head) && (SF = "sitting" === CF.opts.pose || "sitting"), WF && (WF.size >= 256 && WF.clear(), WF.set(FF.meshOpts, SF))
      }
      return "sitting" === SF ? "sitting" === FF.pose : SF
    }(0, uF.f)("skyblock", ((FF, WF) => {
      WF.setFacingTolerance(hF(FF) ? 0 : null)
    }));
    class bW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = FF, this.alsoVisit = WF, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = FF => {
          var WF;
          const SF = this.api.getEntityInfo(FF);
          SF && (hF(SF, this.meshFacingCache) && (this.api.setFacingTolerance(FF, 0), this.nextFacing.add(FF)), null === (WF = this.alsoVisit) || void 0 === WF || WF.call(this, FF, SF))
        }
      }
      lF() {
        const {
          api: FF
        } = this, WF = this.nextFacing;
        FF.forEachEntity(this.visit);
        for (const SF of this.facing) WF.has(SF) || FF.setFacingTolerance(SF, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = WF
      }
      dispose() {
        for (const FF of this.facing) this.api.setFacingTolerance(FF, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  36937: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => Sd
    });
    const CF = "island";
    var AF = SF(271);
    const uF = (0, AF.Gb)([0, 0, -1]),
      hF = [{
        name: "S",
        bearing: (0, AF.Gb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, AF.Gb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: uF
      }, {
        name: "W",
        bearing: (0, AF.Gb)([1, 0, 0])
      }];

    function bW(FF, WF, SF) {
      return [100 * (SF.mapMaxX - FF) / (SF.mapMaxX - SF.mapMinX), 100 * (WF - SF.mapMinZ) / (SF.mapMaxZ - SF.mapMinZ)]
    }

    function dF(FF, WF, SF) {
      const AF = "local" === WF,
        uF = FF.background,
        hF = WF => uF ? bW(WF[0] - FF.mapOrigin[0], WF[2] - FF.mapOrigin[2], uF.bounds) : [50, 50],
        dF = (FF.insideDungeon ? [] : FF.landmarks).map((FF => {
          var WF, CF;
          return {
            id: FF.id,
            name: SF(FF.visited && FF.nameKey ? null !== (WF = FF.mapLabelKey) && void 0 !== WF ? WF : FF.nameKey : "skyblockGame:mapUnknown"),
            icon: FF.visited && null !== (CF = FF.icon) && void 0 !== CF ? CF : "unknown",
            visited: FF.visited,
            current: !1,
            position: hF(FF.position),
            travelKind: "landmark",
            travelId: FF.id
          }
        })),
        RF = FF.zones.map((WF => {
          var CF;
          return {
            id: WF.id,
            name: SF(WF.visited && WF.nameKey ? WF.nameKey : "skyblockGame:mapUnknown"),
            icon: WF.visited && null !== (CF = WF.icon) && void 0 !== CF ? CF : "unknown",
            visited: WF.visited,
            current: WF.id === FF.zoneId,
            position: WF.position,
            thumbnail: WF.visited ? WF.id : void 0,
            travelKind: "zone",
            travelId: WF.id
          }
        })),
        iW = FF.insideDungeon || !uF ? [] : FF.portals.map((FF => {
          var WF;
          return {
            id: FF.id,
            name: SF(null !== (WF = FF.nameKey) && void 0 !== WF ? WF : "skyblockGame:mapUnknown"),
            icon: FF.visited ? "dungeons" === FF.destination ? "portal_orange" : "portal" : "unknown",
            visited: FF.visited,
            current: !1,
            position: hF(FF.position),
            colour: FF.colour,
            travelKind: "zone",
            travelId: FF.destination
          }
        })),
        eF = AF ? dF : RF,
        EF = eF.filter((FF => FF.visited)).length,
        QF = uF ? (uF.bounds.mapMaxX - uF.bounds.mapMinX) / (uF.bounds.mapMaxZ - uF.bounds.mapMinZ) : 2,
        rW = uF ? JSON.stringify([uF.bounds, FF.mapOrigin]) : "";
      return {
        local: AF,
        points: eF,
        portals: AF ? iW : [],
        progress: eF.length ? SF("skyblockGame:mapDiscovered", {
          current: String(EF),
          total: String(eF.length)
        }) : null,
        percent: eF.length ? 100 * EF / eF.length : 0,
        canTravel: [...eF, ...AF ? iW : []].some((FF => FF.visited && !FF.current)),
        noLandmarks: AF && !FF.insideDungeon && 0 === dF.length,
        background: uF ? {
          imageKey: uF.imageKey,
          fallbackImageKey: FF.zoneId,
          geometryKey: rW,
          label: SF(uF.labelKey),
          colour: uF.backgroundColour,
          ratio: QF
        } : null,
        connections: PF(FF.zones),
        minimap: uF ? {
          imageKey: uF.imageKey,
          fallbackImageKey: FF.zoneId,
          geometryKey: rW,
          label: SF(uF.labelKey),
          colour: uF.backgroundColour,
          caption: SF(FF.zoneId === CF ? "skyblockGame:zoneIsland" : uF.labelKey),
          width: (uF.bounds.mapMaxX - uF.bounds.mapMinX) / uF.minimapSpan * 100 + "%",
          height: (uF.bounds.mapMaxZ - uF.bounds.mapMinZ) / uF.minimapSpan * 100 + "%",
          markers: [...dF, ...iW]
        } : null
      }
    }

    function PF(FF) {
      const WF = new Set;
      return FF.flatMap((SF => SF.connections.flatMap((CF => {
        const AF = FF.find((FF => FF.id === CF)),
          uF = [SF.id, CF].sort().join("|");
        return !AF || WF.has(uF) ? [] : (WF.add(uF), [{
          id: `${SF.id}-${CF}`,
          start: SF.position,
          end: AF.position,
          explored: SF.visited && AF.visited
        }])
      }))))
    }
    class RF {
      constructor(FF, WF, SF) {
        this.Uu = FF, this.beforeOpen = WF, this.afterClose = SF, this.open = !1, this.DC = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.DC && (this.open = !0, this.beforeOpen(), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      closePanel(FF) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(FF)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.DC = !0
      }
      emit() {
        this.DC || (this.snapshot = this.buildSnapshot(), this.Uu(this.snapshot))
      }
    }
    const iW = "skyblockMapView";
    class eF extends RF {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(FF, CF, AF), this.requestTravel = WF, this.translate = SF, this.now = uF, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = FF => {
          this.tab = FF, this.feedbackKey = "", this.emit()
        }, this.travel = (FF, WF) => {
          if (!this.map || this.pending || this.DC) return;
          const SF = ("zone" === FF ? this.map.zones : this.map.landmarks).find((FF => FF.id === WF));
          if (SF) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in SF && !SF.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (SF.visited)
              if ("zone" === FF && WF === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const SF = ++this.nextRequestId;
                this.pending = {
                  requestId: SF,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: FF,
                  id: WF,
                  requestId: SF
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
      setTranslator(FF) {
        this.translate = FF, this.emit()
      }
      xA(FF) {
        var WF;
        if (!this.DC)
          if ("entities" !== FF.kind)
            if ("open" !== FF.kind) {
              var SF, CF;
              if ("snapshot" === FF.kind)(null === (SF = FF.snapshot) || void 0 === SF ? void 0 : SF.zoneId) !== (null === (CF = this.map) || void 0 === CF ? void 0 : CF.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = FF.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === FF.kind) {
                var AF;
                FF.requestId === (null === (AF = this.pending) || void 0 === AF ? void 0 : AF.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (FF.requestId === (null === (WF = this.pending) || void 0 === WF ? void 0 : WF.requestId)) {
                var uF;
                this.pending = null, this.feedbackKey = null !== (uF = FF.errorKey) && void 0 !== uF ? uF : "", null === FF.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = FF.entities
      }
      lF() {
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
          presentation: this.map ? dF(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const EF = 67.5 * Math.PI / 180;

    function QF(FF, WF) {
      const SF = Math.abs(FF);
      if (SF > EF || WF.trackHalfWidth <= 0) return null;
      const CF = WF.trackHalfWidth,
        AF = WF.screenHalfWidth / (WF.tanHalfFovX * Math.max(.5, Math.cos(WF.pitch))),
        uF = Math.min(Math.atan(.6 * CF / AF), .75 * EF),
        hF = AF * Math.tan(uF);
      let bW;
      if (SF <= uF) bW = AF * Math.tan(SF);
      else {
        const FF = EF - uF,
          WF = Math.max(0, AF * FF / (Math.cos(uF) ** 2 * (CF - hF)) - 1),
          dF = (SF - uF) / FF;
        bW = hF + (CF - hF) * (1 + WF) * dF / (1 + WF * dF)
      }
      return 50 + Math.sign(FF) * bW * 50 / CF
    }
    class rW {
      constructor(FF, WF) {
        this.map = FF, this.visited = WF, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = WF ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const FF = this.map.getSnapshot().map;
        return !FF || FF.insideDungeon ? [] : FF.landmarks.filter((FF => FF.visited === this.visited)).map((FF => {
          var WF, SF;
          return {
            id: `landmark:${FF.id}`,
            position: FF.position,
            icon: null !== (WF = FF.icon) && void 0 !== WF ? WF : "unknown",
            nameKey: null !== (SF = FF.nameKey) && void 0 !== SF ? SF : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class gW {
      constructor(FF, WF, SF, CF) {
        this.map = FF, this.kind = WF, this.position = SF, this.alive = CF, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = WF, this.range = "enemy" === WF ? 48 : 64, this.limit = 12
      }
      fD(FF) {
        if ("enemy" !== this.kind || this.alive(FF.JY)) return this.position(FF.JY)
      }
      getPoints() {
        const FF = [];
        for (const CF of this.map.getEntities()) {
          if (CF.kind !== this.kind || "enemy" === this.kind && !this.alive(CF.compassEntityId)) continue;
          const AF = this.position(CF.compassEntityId);
          var WF, SF;
          if (AF) FF.push({
            id: `${this.kind}:${CF.compassEntityId}`,
            JY: CF.compassEntityId,
            kind: this.kind,
            icon: null !== (WF = CF.icon) && void 0 !== WF ? WF : CF.npcSkin ? `npc_${CF.npcSkin}` : this.kind,
            displayName: CF.displayName,
            position: AF,
            nameKey: null !== (SF = CF.nameKey) && void 0 !== SF ? SF : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return FF
      }
    }
    class tW {
      constructor(FF) {
        this.map = FF, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const FF = this.map.getSnapshot().map;
        return !FF || FF.insideDungeon ? [] : FF.portals.map((FF => {
          var WF;
          return {
            id: "portal:" + FF.id,
            kind: "portal",
            position: FF.position,
            nameKey: null !== (WF = FF.nameKey) && void 0 !== WF ? WF : "skyblockGame:compassUnvisitedZone",
            icon: FF.visited ? "dungeons" === FF.destination ? "portal_orange" : "portal" : "unknown",
            colour: FF.colour
          }
        }))
      }
    }
    class TF {
      constructor(FF) {
        this.target = FF, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const FF = this.target();
        return FF ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: FF.position,
          nameKey: FF.nameKey
        }] : []
      }
    }

    function aW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.position;
      const uF = CF[0] - WF[0],
        hF = CF[2] - WF[2];
      return {
        ...FF,
        position: CF,
        offset: AF.c.computeShortestRotation(SF, (0, AF.Gb)([uF, 0, hF])),
        distance: Math.hypot(uF, CF[1] - WF[1], hF)
      }
    }
    let kW;

    function qW(FF, WF) {
      var SF;
      return (null === (SF = kW) || void 0 === SF ? void 0 : SF.locale) !== WF && (kW = {
        locale: WF,
        near: new Intl.NumberFormat(WF, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(WF, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (FF < 10 ? kW.near : kW.far).format(FF)
    }
    class VF {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(FF) {
        return this.providers.set(FF.id, FF), this.refreshAt = 0, () => {
          this.providers.get(FF.id) === FF && (this.providers.delete(FF.id), this.refreshAt = 0)
        }
      }
      frame(FF, WF, SF) {
        if (SF >= this.refreshAt) {
          this.refreshAt = SF + 200, this.candidates = [];
          for (const WF of this.providers.values()) {
            if (!WF.enabled) continue;
            const SF = WF.getPoints().map((WF => {
              const SF = WF.position;
              return {
                point: WF,
                distance: Math.hypot(SF[0] - FF[0], SF[1] - FF[1], SF[2] - FF[2])
              }
            })).filter((FF => FF.distance <= WF.range)).sort(((FF, WF) => FF.distance - WF.distance)).slice(0, WF.limit);
            for (const {
                point: FF
              }
              of SF) this.candidates.push({
              provider: WF,
              point: FF
            })
          }
        }
        const CF = [];
        for (const {
            point: AF,
            provider: uF
          }
          of this.candidates) {
          if (!uF.enabled) continue;
          const SF = uF.fD ? uF.fD(AF) : AF.position;
          if (SF) {
            const uF = aW(AF, FF, WF, SF);
            Math.abs(uF.offset) <= EF && CF.push(uF)
          }
        }
        return CF
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var NF = SF(35133),
      DF = SF(46);
    const LF = [{
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
      mW = LF.length;

    function OF(FF) {
      return FF >= mW ? 1 : FF + 1
    }
    const xW = "skyblockQuests";
    var ZF = SF(36949);
    const oF = "devquests",
      YF = "none",
      MF = {
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
      cW = "Compressed Messy Stone",
      GF = {
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
      zW = ["Stone", "Diorite", "Andesite", "Granite"],
      IF = new Set(zW),
      fF = (Object.keys(GF), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const yW = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function sF(FF, WF) {
      const SF = Math.floor(5 * FF / (2 * WF + 1));
      return Math.min(4, Math.max(0, SF))
    }
    var nF = SF(1101);
    var HF = SF(34948);
    var KF = SF(35131),
      wF = SF(20),
      XF = SF(7818);
    const UF = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      BF = 1e3;

    function jW(FF) {
      return Math.max(0, FF)
    }

    function vW(FF) {
      return 1 + .01 * jW(FF)
    }

    function JF(FF) {
      return 1 + .005 * jW(FF)
    }

    function pF(FF) {
      return 1 + .005 * jW(FF)
    }

    function lF(FF) {
      return .01 * jW(FF)
    }

    function FW(FF) {
      return 150 / (150 + jW(FF))
    }

    function WW(FF) {
      return 1 + .002 * jW(FF)
    }

    function SW(FF) {
      return Math.round(10 * FF) / 10
    }

    function CW(FF, WF) {
      switch (FF) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: SW(100 * (JF(WF) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: SW(100 * (vW(WF) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: SW(100 * (pF(WF) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: SW(100 * lF(WF))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: SW(100 * (1 - FW(WF)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: SW(100 * (WW(WF) - 1))
          }
      }
    }

    function AW(FF) {
      return "farming" === FF ? 200 : 100
    }

    function uW(FF, WF) {
      if (!Number.isSafeInteger(FF) || FF < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const SF = AW(WF),
        CF = FF => function(FF, WF) {
          return AW(FF) * WF * (WF + 1) / 2
        }(WF, FF);
      let AF = Math.min(BF, Math.floor((Math.sqrt(8 * FF / SF + 1) - 1) / 2));
      return AF < BF && CF(AF + 1) <= FF ? AF++ : CF(AF) > FF && AF--, {
        totalXp: FF,
        level: AF,
        xpIntoLevel: FF - CF(AF),
        xpForNextLevel: AF === BF ? null : SF * (AF + 1)
      }
    }
    const hW = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function bS(FF) {
      return hW.has(FF)
    }
    const dW = new Set(AF.tb);

    function PW(FF) {
      return dW.has(FF)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const RW = {
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
      iS = {
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
      eW = {
        ...iS,
        ...Object.fromEntries(Object.entries(fF).map((FF => {
          let [WF, SF] = FF;
          return [WF, 9 * iS[SF]]
        })))
      },
      EW = {
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
      QW = {
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
    const rS = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      gS = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function tS(FF) {
      return `rgb(${gS[FF].join(", ")})`
    }

    function TW(FF, WF, SF) {
      if (!SF) return FF(WF);
      const CF = {};
      for (const [AF, uF] of Object.entries(SF)) CF[AF] = "string" === typeof uF ? uF : FF(uF.translationKey);
      return FF(WF, CF)
    }
    class aS {
      constructor(FF, WF) {
        this.now = FF, this.getJournal = WF, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.yS = !1, this.onShown = () => {}
      }
      enqueue(FF) {
        const WF = kS(FF);
        if (WF) this.pending.push(FF);
        else {
          const WF = this.pending.findIndex(kS);
          this.pending.splice(-1 === WF ? this.pending.length : WF, 0, FF)
        }
        return (null === this.current || null !== this.followUp && !WF) && (this.advance(), !0)
      }
      setHeld(FF) {
        return this.yS = FF, !FF && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      lF() {
        const FF = this.getJournal(),
          WF = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === WF ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === WF || void 0 === WF ? void 0 : WF.kind) && FF && FF.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === WF || void 0 === WF ? void 0 : WF.kind)) {
          const FF = this.findFollowUp(this.current);
          if ("step" !== (null === FF || void 0 === FF ? void 0 : FF.kind) || FF.questId !== WF.questId || FF.step.id !== WF.step.id) return this.showFollowUp(FF, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(FF, WF, SF) {
        var CF, AF, uF, hF;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, FF, SF);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, FF);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, FF, WF);
        const {
          questCompletionKind: bW,
          questCompletionNameKey: dF
        } = this.current, PF = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, RF = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, iW = "step" === (null === (CF = this.followUp) || void 0 === CF ? void 0 : CF.kind) ? this.followUp : null, eF = "explore" === (null === (AF = this.followUp) || void 0 === AF ? void 0 : AF.kind);
        let EF;
        return EF = eF ? FF("skyblockGame:questExploreTitle") : null !== iW ? "quest" === bW ? FF("skyblockGame:questNextQuestTitle", {
          quest: FF(iW.questNameKey)
        }) : FF("skyblockGame:questNextStepTitle") : FF("started" === bW ? "skyblockGame:questStartedTitle" : "quest" === bW ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? bW : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: EF,
          name: eF ? WF("skyblockGame:questExploreName") : null !== iW ? TW(WF, iW.step.nameKey, iW.step.nameParams) : TW(WF, dF, PF),
          description: eF ? WF("skyblockGame:questExploreDescription") : null === iW ? null : TW(WF, iW.step.descriptionKey, iW.step.descriptionParams),
          reward: null === this.followUp && RF > 0 ? WF("skyblockGame:questCoinRewardSuffix", {
            amount: RF.toLocaleString(SF)
          }) : null,
          iconItem: null !== (uF = null === iW || void 0 === iW ? void 0 : iW.step.questIconItem) && void 0 !== uF ? uF : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== iW && (null === (hF = this.getJournal()) || void 0 === hF ? void 0 : hF.trackedQuestId) === iW.questId ? iW.step.nameKey : null
        }
      }
      getSkillLevelView(FF, WF, SF) {
        let {
          skill: CF,
          beforeLevel: AF,
          level: uF
        } = FF;
        const hF = CW(CF, AF),
          bW = CW(CF, uF);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: WF(`skyblockGame:${CF}`),
          name: WF("skyblockGame:skillLevelUp", {
            to: uF.toLocaleString(SF)
          }),
          description: hF.percent === bW.percent ? null : WF(`${bW.translationKey}Change`, {
            before: hF.percent.toLocaleString(SF),
            after: bW.percent.toLocaleString(SF)
          }),
          reward: null,
          iconItem: rS[CF],
          accent: tS(CF),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(FF, WF) {
        let {
          landmarkNameKey: SF
        } = FF;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: WF("skyblockGame:landmarkDiscovered"),
          name: WF(SF),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(FF, WF, SF) {
        let {
          titleKey: CF,
          textKey: AF,
          params: uF = {},
          nameKeys: hF = {},
          iconItem: bW = null
        } = FF;
        const dF = {
          ...uF
        };
        for (const [PF, RF] of Object.entries(hF)) dF[PF] = WF(RF);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: WF(CF),
          name: SF(AF, dF),
          description: null,
          reward: null,
          iconItem: bW,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var FF;
        if (null !== this.followUp) return 5600;
        switch (null === (FF = this.current) || void 0 === FF ? void 0 : FF.questCompletionKind) {
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
      showFollowUp(FF, WF) {
        null === FF || this.yS ? this.advance() : (this.followUp = FF, this.token++, this.shownAt = this.now(), this.expiresAt = null !== WF && void 0 !== WF ? WF : this.shownAt + this.durationMs())
      }
      findFollowUp(FF) {
        var WF;
        const SF = this.getJournal();
        if (!SF || this.hasPendingQuestPopup() || kS(FF)) return null;
        const CF = "started" === FF.questCompletionKind ? SF.active.some((WF => WF.id === FF.questCompletionQuestId)) : "quest" === FF.questCompletionKind ? SF.completed.some((WF => WF.id === FF.questCompletionQuestId)) : [...SF.active, ...SF.completed].some((WF => WF.id === FF.questCompletionQuestId && WF.subquests.some((WF => WF.id === FF.questCompletionStepId && "completed" === WF.status))));
        if (!CF) return null;
        if ("quest" === FF.questCompletionKind && 0 === SF.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const AF = SF.active.find((FF => FF.id === SF.trackedQuestId)),
          uF = null !== (WF = null === AF || void 0 === AF ? void 0 : AF.subquests.find((FF => "ready" === FF.status))) && void 0 !== WF ? WF : null === AF || void 0 === AF ? void 0 : AF.subquests.find((FF => "active" === FF.status));
        return uF ? {
          kind: "step",
          questId: AF.id,
          questNameKey: AF.nameKey,
          step: uF
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((FF => !kS(FF)))
      }
      advance() {
        var FF;
        this.current = this.yS ? null : null !== (FF = this.pending.shift()) && void 0 !== FF ? FF : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function kS(FF) {
      return qS(FF.questCompletionKind)
    }

    function qS(FF) {
      return "skillLevel" === FF || "landmark" === FF || "npcNote" === FF
    }
    var VW = SF(36945);
    const NW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      DW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      LW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      mS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      OW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==",
      xS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      ZW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const oW = SF.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const YW = SF.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      MW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var cS = SF(17527),
      GW = SF(19664),
      zS = SF(22021),
      IW = SF(23590),
      fW = SF(25216);
    const yS = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: cS,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: GW,
      cow: OW,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: SF(25228),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: NW,
      fishing_1: NW,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: DW,
      guardian_iron: LW,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: zS,
      mines: IW,
      mining_1: IW,
      npc: mS,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: OW,
      npc_draugr_warper: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAb0lEQVR4nGNgIBIwIrH/41PDCFPU+/IzVlXF4rxgdSwwgUV33oFpXh42MP35yy+sVv///x9is8GxR2D6gpUcRAEjxGYmZF2nvv/BygYBuNUwk0BASoKHIe38M+wKQZLIAMa/iOZGsDuxehtVDWEAAHwCHXf9ctZjAAAAAElFTkSuQmCC",
      npc_dwarf_blue_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf//51lRMAMWxf/TM0r+/z/AjoLTM0owFENMeSCBirGY+l+r/SpY8OGmBjBGFkNR6DD9FVwRDIPEyFYIVowDkwYAEBZzAwnUgyIAAAAASUVORK5CYII=",
      npc_dwarf_braided_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwX9deRUUzIBFMYYiXIr/h5rqYMUYCr9+/wUWjLE2AGNkMRSF6Q6mcEUwDBLDUIiuCNlkDA/hwKQBAPnYUUW1+JaKAAAAAElFTkSuQmCC",
      npc_dwarf_child: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX8lZeX/6hoaYAxiY1P8f1trHlbMgKb4/5qGDKwYQ+HX77/+q0jKwxWA2CAxDIVEW32gqwRDEUgMq4dwYNIAAP19arcJQ+nsAAAAAElFTkSuQmCC",
      npc_dwarf_forked_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwX91DQ0UzIBFMVhick4EXBGMja74f1tKAFaMofDr91//VSTlwSaBMIgNEsOqEN2NWBWCTFFSVkbBIDGsHsKBSQMAnGRas5Ev2yIAAAAASUVORK5CYII=",
      npc_dwarf_ginger_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIBP8R8NYwf//B9hRMAMWxf//n2f9//+BBCo+z4qh+P/dFd0YGKvCr99//WfQ8/z/dNMUMAaxwWLoCt/umPn/ZaMLCgaJYSgEmfK4wgEFg03G5iEcmDQAAGl2d4woNRHRAAAAAElFTkSuQmCC",
      npc_dwarf_grey_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQklEQVR4nGNgIBP8R8NYwX8vUxsUzIBFMYYiXIr/O+mbYcUYCr9+//VfRVIebhKIDRLDUJiSkoIVk60QrBgHJg0AAIrsWQuZyZ2qAAAAAElFTkSuQmCC",
      npc_dwarf_hair_buns: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgIBP8R8NYwX8tRXkUzIBF8X81OZn/ilKSYBqZzYCmGCw4JTsarhDGxlD49fsvsOC8omQwRhZDUbisLBOuCIZBYhgK0RUhm4zhIRyYNAAAK2NaB/Me8/sAAAAASUVORK5CYII=",
      npc_dwarf_purple_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8bw8D/LqYRYAxiY1P8/+TEQqyYAU3x/z2tWVgxhsKv33+BBZFNgomhKIS5DR2TrRCsGAcmDQAAxtNi2UvD/ZAAAAAASUVORK5CYII=",
      npc_dwarf_red_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXUlEQVR4nGNgIBP8R8NYwf//DyT+/3cqhOAHElgV/y8urv///zwrCi4ursdQDJEEmYiMz7NiKpxiZvXfUEnr/7npBWAMYoPEsCqEKQLhDdUR/5uNTchXCFaMA5MGAHoVbT+3iic1AAAAAElFTkSuQmCC",
      npc_dwarf_short_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX91DQ0UzIBF8f9trXlYMQOa4v9rGjKwYgyFX7//AgsimwQTQ1F4oKsEw40gMQyFIFOUlJVRMDY3ghXjwKQBAAoPYHs6ybo9AAAAAElFTkSuQmCC",
      npc_farmer_gill: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWUlEQVR4nGNgIBP8R8NYwf+bW0v+b53gD8cMOBT/X2cfgYIZsChEMQmfqf/PXrr1X0Je///rLS1gDGKDxLAq/LS/E67wZF/G/2XrdmFXCFOETyFYMQ5MGgAAx9NujhmsqqEAAAAASUVORK5CYII=",
      npc_fire_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf8jtqZwvNJMH6tiFEX4FP//v5EDK8ZQ+PX7r/8WQuz/1+YFgjGIDRLDULi9LAKuCIZBYhgKJ+nJYcVYPYQDkwYAY/ZlGR1JAIkAAAAASUVORK5CYII=",
      npc_forge_mother: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8x4FRwP+vzy+AJSKd7MEYWQxF4avbJ8EYphDGx1D49fsvTBOhYigKfS0s/l9dPAsFg8SwKpyYkAVXBGLjVPj/POv//x+0Ifg8K1aFYMXEBA9BAACWKnGnkFHGrQAAAABJRU5ErkJggg==",
      npc_goblin_goggles: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNkQAX/0fiMGAyQIhMPGxRVZ3YcgathwqUIBKBi/2Gq//tMzWDw4HBkwAZ2/NjPsCV7Btzq/1+//2LQ1dFkSMgoBQssmNHNcPnKdQZuTjawgXCFTd0zsJpYV5oBVsgCEzj+7wRWhTAA8wwcPNt2A4zRAUrw4DAMWQ1hAADlHCXxWLGl2AAAAABJRU5ErkJggg==",
      npc_goblin_mad_scientist: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAV0lEQVR4nGNgIBP8R8NYwX/PzoT/qpZGYAxiY1P8//8DCayYAU3x/7OXboEFkRXAxFAUfv3+67+SsvL//+dZwRjEBolhKIQpQMcYCkGOx4axeggHJg0AAFKzbFf/ov6kAAAAAElFTkSuQmCC",
      npc_gold_guardian: DW,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: LW,
      npc_jackal_priest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdklEQVR4nGNgQID/UIyVzwQT1NTUZBAWFoYrALFBYjDFjDCF/zdyMGADjP4/wBQLTODVVXkGh8UwCyDgQOw/BgaGmyhWg8GZcxexsjEUmhjpM3z79g2MQWxkALcaBP79/cvAwc4OZyO8gGYiPoDQghqGuNQQBgAoCCX1U3QMRQAAAABJRU5ErkJggg==",
      npc_minotaur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAaklEQVR4nGNgIAP8R6KR2Sjg/9fnF8AKMgJ8wBhZDEXhq9snwRimEMbHUPj1+6//DBYBCBMtAiBi6ApBkhMTsv5fXTwLjEHsODc37Ar/n2eFKwSxcSp8sGHO//8ftMEYxMamEKwYByYNAABmXHNFjN9ucgAAAABJRU5ErkJggg==",
      npc_minotaur_elder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAg0lEQVR4nGNgIBIwIrH/41PDBFP09fkFMKMuJxWMQQAq9h9ZIcPXLz8ZXt0+CTcGxAaJwQBcIbeMIYOYqjlcAsQGiaG78X9ZajxDvJ01iuMWHjrK0DV7IVgd3EQQ2LMX4k50NgiwIHPy8mczMCiqgdlaOrcYyqdFYVgN9x0WgKyGMAAArq0oYNR0jFIAAAAASUVORK5CYII=",
      npc_minotaur_warrior: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nGNkQAX/0fiMGAyQooWVjiiq4tv3o6th+P/q9sn//z9oo+BXt0/+h9nCgmLE/VuoFvMgmHCF3DKGDIycvxmq3XzA/G137jHwcediKuwLDme4ungWXCKKgYFh3fLtDAcvQ/hMyDbt2XsBKxtF4Y8/vxn8A4wYuHmZwBjEBolhDR5Un2BVQxgAAJW+Nj/Gsfy4AAAAAElFTkSuQmCC",
      npc_monster_hunter_lorenzo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH9NLa3/ru5eYBoZM6AphkvsrU0BY5wKv37/9d/awAauEMQGiWEoPNmaDVcEw7PigjAVIlsHw3gVIrsRm0KwYmKChyAAAIfVZAdaM2LxAAAAAElFTkSuQmCC",
      npc_npc_pig_head: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4/3Lyjv9fe3bCJMHsl5N3YCj+/3/HfQjecAWOX2JVuOHKfwZ1U7giEBunQpB1yBinwkJta7giEBurwrOXbv3/+v0XCgaJYfU5DkwaAADzDIUDTIstKgAAAABJRU5ErkJggg==",
      npc_painter_spencer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR42mNgIBIwovH/45JHVvj/XZc7w+/vfxme3GViYGBgYDBetAuuBqbw/+MKB6xWynYcYGBgYGCEK/z6/ReDsoYpg5OsMAMDAwPDvsdvGe7eOM3AzcmGqjDFyZPh26+fKKZ9+/mDYcPpYwwMDAyMTMT6Gq4Q3TR8wfOfyCDEDwAFFSX0ZxYXtAAAAABJRU5ErkJggg==",
      npc_pig: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARklEQVR4nGNgIAP8x4FRwP/3x87A8ds9R+CYAU0xiiQMP1y0FlOhu7YJhkKQGFYTQSYgY5xWg0yAKYKxyXYjWDExwUMQAABoKIoUBfmEPAAAAABJRU5ErkJggg==",
      npc_pig_napoleon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoAD8h2K84L++ofF/V3dvvIr/gxRtszH9//X7LzCbAYvi///Ps/6Xk5dHwSAxdMX//2+48p9B3RRMw9gvJ+/ArvBrz04UjFNhobY1XBGIjU0hWDEOTBoAAIrnYG/Xae9eAAAAAElFTkSuQmCC",
      npc_pig_worker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIAP8R8NYwf/YhDQ4dnb1xKnhP0gSHesbGmMo/v9/w5X/DOqmYBrGfjl5B3aFhdrW/7/27ARjEBunQpAEOsZQGGLn+L8oKvD/1++/wBjEBolh9RAOTBoAAGcEbivle0KRAAAAAElFTkSuQmCC",
      npc_piggy_banker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXElEQVR4nGNgIBP8R8NYwX9Xd+//2jq6cMyAQ/F/OXn5//8fSPz/f54VzGbAohAsgQ2jK/7/f8OV/wzqpmAaxn45eQd2hV97dqJgnAoLta3hikBsbArBinFg0gAAgophxWZsQvAAAAAASUVORK5CYII=",
      npc_portal_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg==",
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC",
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: xS,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: oW,
      quest_talk: YW,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: MW,
      watermelon: fW
    };

    function sW(FF, WF) {
      const SF = document.createElement("img");
      return SF.className = WF, SF.src = FF, SF.alt = "", SF.draggable = !1, SF
    }

    function nW(FF) {
      var WF;
      const SF = null !== (WF = yS[FF]) && void 0 !== WF ? WF : FF.startsWith("npc_") ? mS : MW;
      if ("portal" !== FF) return sW(SF, "SkyblockMapIcon");
      const CF = document.createElement("span");
      CF.className = "SkyblockMapIcon Portal";
      const AF = document.createElement("span");
      return AF.className = "SkyblockMapIconTint", AF.style.maskImage = AF.style.webkitMaskImage = `url("${ZW}")`, CF.append(sW(SF, "SkyblockMapIconLayer"), AF, sW(ZW, "SkyblockMapIconLayer SkyblockMapIconShade")), CF
    }
    var HW = SF(36934),
      KW = SF(3444);
    const wW = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function XW(FF) {
      const WF = new KW.k(FF);
      return {
        radius: 45,
        squareness: 3,
        wobbles: wW.map((FF => {
          let {
            lobes: SF,
            amount: CF
          } = FF;
          return {
            lobes: SF[Math.floor(WF.next() * SF.length)],
            amount: CF[0] + WF.next() * (CF[1] - CF[0]),
            phase: 2 * WF.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function UW(FF) {
      let {
        radius: WF,
        squareness: SF,
        wobbles: CF,
        samples: AF
      } = FF;
      const uF = [];
      for (let hF = 0; hF < AF; hF++) {
        const FF = 2 * Math.PI * hF / AF,
          bW = Math.cos(FF),
          dF = Math.sin(FF),
          PF = WF * (Math.abs(bW) ** SF + Math.abs(dF) ** SF) ** (-1 / SF) * CF.reduce(((WF, SF) => {
            let {
              lobes: CF,
              amount: AF,
              phase: uF
            } = SF;
            return WF + AF * Math.sin(CF * FF + uF)
          }), 1);
        uF.push(`${(50+PF*bW).toFixed(2)} ${(50+PF*dF).toFixed(2)}`)
      }
      return `M${uF.join("L")}Z`
    }
    const BW = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class jS {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.DC = !1, this.mountCompass = FF => {
          var WF;
          if (null === (WF = this.stopLayout) || void 0 === WF || WF.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !FF || this.DC) return;
          const SF = FF.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: FF,
            track: SF,
            label: FF.querySelector(".SkyblockCompassLabel")
          }, SF.replaceChildren();
          for (let AF = 0; AF < 4; AF++) {
            const FF = document.createElement("span");
            FF.className = "SkyblockCompassCardinal", SF.appendChild(FF), this.cardinals.push(FF)
          }
          const CF = (0, HW.b)(BW, [FF], this.layout);
          this.stopLayout = () => {
            CF(), SF.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = FF => {
          this.terrain = this.DC ? null : FF, this.render(this.frame)
        }, this.mountMinimapSearchArea = FF => {
          this.mountSearchArea("minimap", FF)
        }, this.mountMapSearchArea = FF => {
          this.mountSearchArea("map", FF)
        }, this.mountPlayer = FF => {
          this.player = this.DC ? null : FF, this.render(this.frame)
        }, this.mountWaypoint = FF => {
          var WF, SF;
          if (null === (WF = this.stopWaypoint) || void 0 === WF || WF.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !FF || this.DC) return;
          const CF = FF.querySelector(".SkyblockQuestWaypointMarker");
          CF.replaceChildren(nW("quest")), this.markerIcon = "quest", this.waypoint = {
            root: FF,
            marker: CF,
            clip: FF.querySelector(".SkyblockQuestWaypointTextClip"),
            text: FF.querySelector(".SkyblockQuestWaypointText"),
            label: FF.querySelector(".SkyblockQuestWaypointLabel"),
            distance: FF.querySelector(".SkyblockQuestWaypointDistance"),
            hint: FF.querySelector(".SkyblockQuestWaypointHint")
          };
          const AF = () => {
              this.waypointMarkerSize = {
                width: CF.offsetWidth,
                height: CF.offsetHeight
              }, this.waypointInset = {
                x: CF.offsetWidth / 2 + 8,
                top: CF.offsetHeight + 8,
                bottom: 8
              }
            },
            uF = new ResizeObserver((() => {
              AF(), this.render(this.frame)
            }));
          uF.observe(CF, {
            box: "border-box"
          });
          const hF = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", hF), null === (SF = window.visualViewport) || void 0 === SF || SF.addEventListener("resize", hF), this.stopWaypoint = () => {
            var FF;
            uF.disconnect(), window.removeEventListener("resize", hF), null === (FF = window.visualViewport) || void 0 === FF || FF.removeEventListener("resize", hF)
          }, hF(), AF(), this.render(this.frame)
        }, this.mountWaypointOrigin = FF => {
          var WF;
          if (null === (WF = this.stopWaypointOrigin) || void 0 === WF || WF.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = FF && !this.DC ? Number(FF.dataset.notificationToken) : null, FF && !this.DC && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const WF = {
              nameKey: FF.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = WF;
            const SF = () => {
                const SF = FF.getBoundingClientRect();
                WF.x = (SF.left + SF.width / 2) / window.innerWidth * 100, WF.y = (SF.top + SF.height / 2) / window.innerHeight * 100
              },
              CF = new ResizeObserver(SF);
            CF.observe(FF.parentElement), CF.observe(FF), window.addEventListener("resize", SF), this.stopWaypointOrigin = () => {
              CF.disconnect(), window.removeEventListener("resize", SF)
            }, SF()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const FF = this.compass.root,
            WF = getComputedStyle(FF),
            SF = getComputedStyle(document.documentElement),
            CF = parseFloat(SF.fontSize),
            AF = parseFloat(WF.getPropertyValue("--compass-icon-size")) * CF,
            uF = "1" === WF.getPropertyValue("--compass-fit-top").trim(),
            hF = uF ? 1 : 8,
            bW = Array.from(document.querySelectorAll(BW), (FF => {
              var WF;
              return (null !== (WF = FF.querySelector(".MiddleTextTop")) && void 0 !== WF ? WF : FF).getBoundingClientRect()
            })).filter((FF => FF.width > 0 && FF.height > 0));
          let dF = (parseFloat(SF.getPropertyValue("--notchTop")) || 0) + hF,
            PF = "";
          if (uF) {
            const WF = window.innerWidth / 2,
              SF = FF.getBoundingClientRect().height,
              uF = [dF, ...bW.map((FF => Math.max(dF, FF.bottom + hF)))].sort(((FF, WF) => FF - WF));
            for (const FF of uF) {
              let uF = WF - 8;
              for (const CF of bW) CF.bottom + hF <= FF || CF.top >= FF + SF + hF || (uF = Math.min(uF, CF.right <= WF ? WF - CF.right - 8 : CF.left - WF - 8));
              const RF = 2 * uF - AF;
              if (RF >= 16 * CF) {
                PF = `${RF}px`, dF = FF;
                break
              }
            }
          }
          FF.style.maxWidth !== PF && (FF.style.maxWidth = PF);
          const RF = FF.getBoundingClientRect(),
            iW = this.compassSize.trackHalfWidth;
          if (RF.width > 0) {
            const FF = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: FF.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * AF / FF.width
          }
          if (!PF)
            for (const eF of bW) eF.right > RF.left - 8 && eF.left < RF.right + 8 && (dF = Math.max(dF, eF.bottom + hF));
          FF.style.top = `${dF}px`, this.compassSize.trackHalfWidth !== iW && this.render(this.frame)
        }
      }
      mountSearchArea(FF, WF) {
        this.searchAreas[FF] = this.DC ? null : WF, this.render(this.frame)
      }
      render(FF) {
        if (this.DC) return;
        if (this.frame = FF, this.compass && (vS(this.compass.root, !FF), FF)) {
          const WF = this.compassSize.trackHalfWidth / 50;
          FF.compass.cardinals.forEach(((FF, SF) => {
            const CF = this.cardinals[SF];
            CF.textContent !== FF.name && (CF.textContent = FF.name), vS(CF, FF.hidden), CF.style.translate = FF.left * WF + "px"
          }));
          const SF = new Set;
          FF.compass.markers.forEach(((CF, AF) => {
            var uF;
            SF.add(CF.id);
            let hF = this.markers.get(CF.id);
            hF || (hF = document.createElement("span"), hF.className = "SkyblockCompassMarker", this.markers.set(CF.id, hF), this.compass.track.appendChild(hF)), hF.dataset.icon !== CF.icon && (hF.dataset.icon = CF.icon, hF.replaceChildren(nW(CF.icon))), hF.style.color = null !== (uF = CF.colour) && void 0 !== uF ? uF : "", hF.style.translate = CF.left * WF + "px", hF.style.zIndex = String(FF.compass.markers.length - AF), hF.title !== CF.name && (hF.title = CF.name)
          }));
          for (const [FF, CF] of this.markers) SF.has(FF) || (CF.remove(), this.markers.delete(FF));
          this.compass.label.textContent !== FF.compass.label && (this.compass.label.textContent = FF.compass.label)
        }
        this.terrain && (vS(this.terrain, !(null !== FF && void 0 !== FF && FF.minimap)), null !== FF && void 0 !== FF && FF.minimap && (this.terrain.style.transform = FF.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", FF.minimap.iconRotation)));
        const WF = null === FF || void 0 === FF ? void 0 : FF.searchArea;
        for (const SF of [this.searchAreas.minimap, this.searchAreas.map])
          if (SF && (vS(SF, !WF), WF)) {
            if (this.searchAreaPath.seed !== WF.shapeSeed && (this.searchAreaPath = {
                seed: WF.shapeSeed,
                d: UW(XW(WF.shapeSeed))
              }), SF.dataset.shapeSeed !== WF.shapeSeed) {
              SF.dataset.shapeSeed = WF.shapeSeed;
              for (const FF of SF.querySelectorAll("path")) FF.setAttribute("d", this.searchAreaPath.d)
            }
            SF.style.left = `${WF.left}%`, SF.style.top = `${WF.top}%`, SF.style.width = `${WF.width}%`, SF.style.height = `${WF.height}%`
          } if (this.player && (vS(this.player, !(null !== FF && void 0 !== FF && FF.player) || FF.player.hidden), null !== FF && void 0 !== FF && FF.player && (this.player.style.left = `${FF.player.left}%`, this.player.style.top = `${FF.player.top}%`, this.player.style.setProperty("--map-player-rotation", FF.player.rotation))), this.waypoint) {
          const {
            root: WF,
            marker: SF,
            clip: CF,
            text: AF,
            label: uF,
            distance: hF,
            hint: bW
          } = this.waypoint, dF = !(null !== FF && void 0 !== FF && FF.waypoint) || null !== FF.waypoint.popupToken && FF.waypoint.popupToken !== this.waypointOriginToken;
          vS(WF, dF);
          let PF = 1;
          const RF = this.waypointLaunch;
          if (!dF && RF && FF.waypoint.nameKey === RF.nameKey) {
            const FF = performance.now();
            RF.startedAt ??= FF, PF = Math.min(1, Math.max(0, (FF - RF.startedAt - 450) / 1e3)), SF.style.opacity = String(Math.min(1, (FF - RF.startedAt) / 150)), 1 === PF && (this.waypointLaunch = null)
          } else SF.style.opacity = "", RF && null !== RF.startedAt && (this.waypointLaunch = null);
          if (WF.classList.toggle("Launching", PF < 1), null !== FF && void 0 !== FF && FF.waypoint) {
            const WF = this.waypointInset,
              dF = "quest_talk" === FF.waypoint.markerIcon ? function(FF, WF, SF) {
                if (!FF.text || null === FF.blockHeight || 0 === FF.nearness) return FF;
                const CF = FF.blockHeight / 100 * SF.height,
                  AF = -FF.nearness * (JW * CF + WF.width / 2),
                  uF = FF.nearness * (pW * CF + WF.height / 2);
                return {
                  ...FF,
                  text: {
                    x: FF.text.x + AF / SF.width * 100,
                    y: FF.text.y + uF / SF.height * 100
                  }
                }
              }(FF.waypoint, this.waypointMarkerSize, this.viewport) : FF.waypoint,
              iW = (0, VW.d)(dF, WF, this.viewport),
              eF = PF * PF * (3 - 2 * PF),
              EF = PF < 1 ? RF.x + (iW.x - RF.x) * eF : iW.x,
              QF = PF < 1 ? RF.y + (iW.y - RF.y) * eF : iW.y;
            SF.style.translate = `${EF}vw ${QF}vh`, CF.style.clipPath = `inset(${WF.top}px ${WF.x}px ${WF.bottom}px)`, vS(AF, PF < 1 || !FF.waypoint.text), AF.style.opacity = String(1 - FF.waypoint.nearness), FF.waypoint.text && (AF.style.translate = `${FF.waypoint.text.x}vw ${FF.waypoint.text.y}vh`), uF.textContent !== FF.waypoint.name && (uF.textContent = FF.waypoint.name), this.markerIcon !== FF.waypoint.markerIcon && (this.markerIcon = FF.waypoint.markerIcon, SF.replaceChildren(nW(this.markerIcon))), hF.textContent !== FF.waypoint.distance && (hF.textContent = FF.waypoint.distance), vS(bW, null === FF.waypoint.hint), null !== FF.waypoint.hint && bW.textContent !== FF.waypoint.hint && (bW.textContent = FF.waypoint.hint)
          }
        }
      }
      dispose() {
        var FF, WF;
        this.mountWaypointOrigin(null), this.render(null), null === (FF = this.stopLayout) || void 0 === FF || FF.call(this), this.stopLayout = null, null === (WF = this.stopWaypoint) || void 0 === WF || WF.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.DC = !0
      }
    }

    function vS(FF, WF) {
      FF.hidden !== WF && (FF.hidden = WF)
    }
    const JW = .55,
      pW = .6;
    const lW = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class FS {
      constructor(FF, WF, SF, CF) {
        this.map = FF, this.quests = WF, this.compass = SF, this.display = new jS, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.DC = !1, this.snapshot = null, this.texts = new Map, this.translate = CF
      }
      setTranslator(FF, WF) {
        this.translate = FF, this.locale = WF, this.metresFormat = new Intl.NumberFormat(WF), this.texts.clear()
      }
      translateCached(FF, WF) {
        const SF = void 0 === WF ? FF : `${FF} ${WF}`;
        let CF = this.texts.get(SF);
        return void 0 === CF && (this.texts.size >= 500 && this.texts.clear(), CF = this.translate(FF, void 0 === WF ? void 0 : {
          distance: WF
        }), this.texts.set(SF, CF)), CF
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(FF, WF, SF) {
        if (this.DC) return;
        if (!FF) return this.snapshot = null, void this.display.render(null);
        const CF = this.map.getSnapshot().map,
          dF = SF.cameraHeading,
          PF = {
            ...this.display.compassSize,
            tanHalfFovX: SF.tanHalfFovX,
            pitch: SF.cameraPitch
          },
          RF = [];
        if (CF)
          for (const AF of this.compass.frame(FF, dF, WF)) {
            const FF = QF(AF.offset, PF);
            null !== FF && RF.push({
              ...AF,
              left: FF
            })
          }
        const iW = function(FF, WF) {
            const SF = [],
              CF = FF => "quest" === FF.kind ? FF.distance - 1 : FF.distance,
              AF = [...FF].sort(((FF, WF) => CF(FF) - CF(WF) || FF.id.localeCompare(WF.id)));
            for (const uF of AF) {
              let FF = !1;
              if ("quest" !== uF.kind)
                for (const CF of SF)
                  if (Math.abs(CF.left - uF.left) < WF) {
                    FF = !0;
                    break
                  } FF || SF.push(uF)
            }
            return SF
          }(RF, this.display.compassSpacing),
          eF = function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              SF = null;
            for (const CF of FF) Math.abs(CF.offset) <= WF && (!SF || CF.distance < SF.distance || CF.distance === SF.distance && Math.abs(CF.offset) < Math.abs(SF.offset)) && (SF = CF);
            return SF
          }(iW),
          EF = FF => {
            var WF;
            return null !== (WF = FF.displayName) && void 0 !== WF ? WF : this.translateCached(FF.nameKey)
          },
          rW = {
            compass: {
              markers: iW.map((FF => ({
                id: FF.id,
                icon: FF.icon,
                colour: FF.colour,
                name: EF(FF),
                left: FF.left
              }))),
              cardinals: hF.map((FF => {
                let {
                  name: WF,
                  bearing: SF
                } = FF;
                const CF = QF(AF.c.computeShortestRotation(dF, SF), PF);
                return {
                  name: WF,
                  left: null !== CF && void 0 !== CF ? CF : 0,
                  hidden: null === CF
                }
              })),
              label: eF ? `${EF(eF)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",qW(eF.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== CF && void 0 !== CF && CF.background) {
          const WF = FF[0] - CF.mapOrigin[0],
            SF = FF[2] - CF.mapOrigin[2],
            {
              rotation: AF,
              transform: hF
            } = function(FF, WF, SF, CF) {
              const [AF, hF] = bW(FF, WF, CF), dF = uF - SF;
              return {
                rotation: dF,
                transform: `rotate(${dF}rad) translate(-${AF}%, -${hF}%)`
              }
            }(WF, SF, dF, CF.background.bounds);
          rW.minimap = {
            transform: hF,
            iconRotation: -AF + "rad"
          };
          const [PF, RF] = bW(WF, SF, CF.background.bounds);
          rW.player = {
            left: PF,
            top: RF,
            hidden: PF < 0 || RF < 0 || PF > 100 || RF > 100,
            rotation: -AF + "rad"
          }
        }
        const {
          waypoint: gW
        } = this.quests.getSnapshot();
        if ("search" === (null === gW || void 0 === gW ? void 0 : gW.questMarkerIcon) && null !== CF && void 0 !== CF && CF.background) {
          const {
            bounds: FF
          } = CF.background, [WF, SF] = bW(gW.position[0] - CF.mapOrigin[0], gW.position[2] - CF.mapOrigin[2], FF);
          rW.searchArea = {
            left: WF,
            top: SF,
            width: 6400 / (FF.mapMaxX - FF.mapMinX),
            height: 6400 / (FF.mapMaxZ - FF.mapMinZ),
            shapeSeed: gW.nameKey
          }
        }
        const tW = this.quests.getNotificationSnapshot(),
          TF = "completion" === (null === tW || void 0 === tW ? void 0 : tW.phase) && !qS(tW.kind);
        if (gW && !TF) {
          const WF = Math.hypot(...gW.position.map(((WF, SF) => WF - FF[SF]))),
            CF = Math.round(WF),
            AF = "talk" === gW.questMarkerIcon ? Math.min(1, Math.max(0, (10 - WF) / 5)) : 0,
            uF = SF.projectWorldPosToViewport(gW.position),
            hF = uF && SF.projectWorldPosToViewport([gW.position[0], gW.position[1] - 1, gW.position[2]]);
          rW.waypoint = {
            ...SF.projectWorldPosToScreenPos(gW.position),
            text: uF,
            nearness: AF * AF * (3 - 2 * AF),
            blockHeight: uF && hF ? hF.y - uF.y : null,
            name: this.translateCached(gW.nameKey),
            nameKey: gW.nameKey,
            markerIcon: gW.questMarkerIcon ? lW[gW.questMarkerIcon] : "quest",
            popupToken: (null === tW || void 0 === tW ? void 0 : tW.waypointNameKey) === gW.nameKey ? tW.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(CF)),
            hint: "search" === gW.questMarkerIcon && Math.hypot(gW.position[0] - FF[0], gW.position[2] - FF[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = rW, this.display.render(rW)
      }
      dispose() {
        this.DC = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const WS = "skyblockSkillsView";
    class SS extends RF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          SF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF => FF,
          CF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          AF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : FF => FF;
        super(FF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = WF, this.translate = SF, this.locale = CF, this.itemName = AF, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = FF => {
          this.selected = FF, this.emit()
        }
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, this.locale = WF, this.itemName = SF, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(FF) {
        let WF = this.skillText.get(FF);
        return WF || (WF = {
          label: this.translate(`skyblockGame:${FF}`),
          description: this.translate(`skyblockGame:${FF}Description`)
        }, this.skillText.set(FF, WF)), WF
      }
      sources(FF) {
        if ("mining" === FF || "fishing" === FF) return this.buildSources(FF);
        let WF = this.sourceText.get(FF);
        return WF || (WF = this.buildSources(FF), this.sourceText.set(FF, WF)), WF
      }
      buildSources(FF) {
        const WF = this.translate;
        return "exploration" === FF ? [WF("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), WF("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === FF ? [WF("skyblockGame:logSource", {
          xp: this.number(RW["Maple Log"])
        })] : "combat" === FF ? [WF("skyblockGame:creatureKillSource"), WF("skyblockGame:noEnvironmentalXp")] : "farming" === FF ? [WF("skyblockGame:cropSource", {
          xp: this.number(EW["Wheat|FreshlyGrown"])
        }), WF("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), WF("skyblockGame:noYoungCropXp")] : Object.entries("mining" === FF ? eW : QW).map((FF => {
          let [SF, CF] = FF;
          return WF("skyblockGame:itemXpSource", {
            item: this.itemName(SF),
            xp: this.number(CF)
          })
        }))
      }
      number(FF) {
        return FF.toLocaleString(this.locale)
      }
      benefit(FF, WF) {
        const SF = CW(FF, WF);
        return this.translate(SF.translationKey, {
          bonus: this.number(SF.percent)
        })
      }
      xA(FF) {
        if (!this.DC) {
          if ("snapshot" === FF.kind) this.progress = FF.progress, this.pending.clear(), this.recent = null;
          else if ("award" === FF.kind && this.progress) {
            const {
              award: WF
            } = FF;
            this.progress = {
              ...this.progress,
              [WF.skill]: WF.after
            };
            for (const [FF, CF] of this.pending) CF.skill === WF.skill && this.pending.delete(FF);
            const SF = WF.after.level > WF.before.level;
            this.recordGain(WF.skill, WF.amount, SF ? ++this.nextLevelUpToken : null), SF && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: WF.skill,
              beforeLevel: WF.before.level,
              level: WF.after.level
            })
          } else {
            if ("rejectBlock" === FF.kind) return void this.rejectBlock(FF.position);
            if ("open" === FF.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(FF, WF, SF) {
        if (!this.progress || this.DC || SF) return;
        const CF = function(FF, WF) {
          const SF = FF.split("|")[0];
          return "Air" === WF || WF === `Barkless ${FF}` ? Object.hasOwn(RW, SF) ? {
            skill: "foraging",
            amount: RW[SF]
          } : "Air" !== WF ? null : Object.hasOwn(eW, FF) ? {
            skill: "mining",
            amount: eW[FF]
          } : bS(FF) ? {
            skill: "farming",
            amount: 10
          } : PW(FF) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(EW, FF) ? {
            skill: "farming",
            amount: EW[FF]
          } : Object.hasOwn(GF, FF) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(WF, "Air");
        if (!CF) return;
        const AF = FF.join(",");
        if (this.pending.has(AF)) return;
        const uF = this.predictedProgress(CF.skill).totalXp + CF.amount;
        Number.isSafeInteger(uF) && (this.pending.set(AF, {
          ...CF,
          expires: this.now() + 2e3
        }), this.recordGain(CF.skill, 0), this.emit())
      }
      rejectBlock(FF) {
        this.pending.delete(FF.join(",")) && this.emit()
      }
      lF() {
        if (this.DC) return;
        let FF = !1;
        for (const [WF, SF] of this.pending) SF.expires <= this.now() && (this.pending.delete(WF), FF = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, FF = !0), FF && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(FF, WF) {
        var SF, CF;
        let AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const uF = (null === (SF = this.recent) || void 0 === SF ? void 0 : SF.skill) === FF && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          hF = (null === (CF = this.recent) || void 0 === CF ? void 0 : CF.skill) === FF && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: FF,
          confirmed: uF + WF,
          expires: this.now() + 3e3,
          levelUpToken: null !== AF && void 0 !== AF ? AF : hF
        }
      }
      pendingXp(FF) {
        let WF = 0;
        for (const SF of this.pending.values()) SF.skill === FF && (WF += SF.amount);
        return WF
      }
      predictedProgress(FF) {
        const WF = this.progress[FF],
          SF = this.pendingXp(FF);
        return SF ? uW(WF.totalXp + SF, FF) : WF
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var FF, WF, SF;
        const CF = this.progress ? UF.map((FF => {
            const WF = this.predictedProgress(FF);
            return {
              ...this.text(FF),
              icon: rS[FF],
              benefit: this.benefit(FF, WF.level),
              sources: this.sources(FF),
              id: FF,
              selected: FF === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(WF.level)
              }),
              xp: null === WF.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(WF.xpIntoLevel),
                target: this.number(WF.xpForNextLevel)
              }),
              percent: null === WF.xpForNextLevel ? 100 : Math.min(100, WF.xpIntoLevel / WF.xpForNextLevel * 100)
            }
          })) : [],
          AF = CF.find((FF => {
            var WF;
            return FF.id === (null === (WF = this.recent) || void 0 === WF ? void 0 : WF.skill)
          })),
          uF = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: CF,
          detail: null !== (FF = CF.find((FF => FF.selected))) && void 0 !== FF ? FF : null,
          overallLevel: this.progress ? UF.reduce(((FF, WF) => FF + this.predictedProgress(WF).level), 0) : null,
          hud: AF && uF > 0 ? {
            skill: AF,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(uF)
            }),
            levelUpToken: null !== (WF = null === (SF = this.recent) || void 0 === SF ? void 0 : SF.levelUpToken) && void 0 !== WF ? WF : null,
            colour: tS(AF.id)
          } : null
        }
      }
    }
    const CS = Math.max(1600, 600, 950) + 400,
      AS = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      uS = "skyblockQuestsView",
      hS = "skyblockQuestNotificationView";
    class bC extends RF {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          hF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(FF, CF, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = WF, this.translate = SF, this.now = AF, this.locale = uF, this.publishNotification = hF, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var FF, WF;
          this.selected = null !== (FF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.trackedQuestId) && void 0 !== FF ? FF : null, this.show()
        }, this.select = FF => {
          this.selected = FF, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const FF = this.snapshot.detail;
          !this.DC && null !== FF && void 0 !== FF && FF.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(FF.id), this.emit())
        }, this.viewDialogue = () => {
          const FF = this.snapshot.detail;
          var WF;
          FF && (null === (WF = this.onViewDialogue) || void 0 === WF || WF.call(this, FF.id))
        }, this.notifications = new aS(AF, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var FF, WF;
        return null !== (FF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.trackedQuestId) && void 0 !== FF ? FF : null
      }
      notify(FF) {
        !this.DC && this.notifications.enqueue(FF) && this.emitNotification()
      }
      setNotificationsHeld(FF) {
        (this.notifications.setHeld(FF) || FF) && this.emitNotification()
      }
      lF() {
        var FF, WF;
        if (this.DC) return;
        this.notifications.lF() && this.emitNotification();
        let SF = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, SF = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, SF = !0);
        const CF = dS(this.authoritative);
        null !== CF && void 0 !== CF && null !== (FF = CF.questClock) && void 0 !== FF && FF.running && this.clockText(CF) !== (null === (WF = this.snapshot.tracked) || void 0 === WF ? void 0 : WF.clock) && (SF = !0), SF && this.emit()
      }
      setTranslator(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = FF, this.locale = WF, this.emitNotification(), this.emit()
      }
      xA(FF) {
        if (!this.DC)
          if ("completion" === FF.kind) this.notify(FF.questCompletion);
          else if ("landmark" === FF.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: FF.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === FF.kind) {
          var WF, SF, CF;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: FF.npcNoteTitleKey,
            textKey: FF.npcNoteTextKey,
            params: null !== (WF = FF.npcNoteParams) && void 0 !== WF ? WF : {},
            nameKeys: null !== (SF = FF.npcNoteNameKeys) && void 0 !== SF ? SF : {},
            iconItem: null !== (CF = FF.npcNoteIconItem) && void 0 !== CF ? CF : null
          })
        } else if ("open" === FF.kind) this.show();
        else if ("guidance" === FF.kind) this.waypoint = FF.waypoint, this.compassTarget = FF.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === FF.kind) {
          this.authoritative = FF.snapshot, this.notifications.lF() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const WF = this.trackedStepPulse;
          this.updateTrackedStepPulse(FF.snapshot), this.emit(), this.trackedStepPulse > WF && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.DC || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var FF;
        return null !== (FF = this.translateWithIcons) && void 0 !== FF ? FF : this.translate
      }
      clockText(FF) {
        const WF = FF.questClock;
        if (!WF) return null;
        const SF = WF.elapsedMs + (WF.running ? this.now() - this.receivedAt : 0);
        return void 0 === WF.countdownFromMs ? (0, ZF.q)(SF, !1) : (0, ZF.q)(1e3 * Math.ceil(Math.max(0, WF.countdownFromMs - SF) / 1e3), !1)
      }
      updateTrackedStepPulse(FF) {
        var WF, SF, CF;
        const AF = dS(FF);
        if (!AF) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const uF = FF => AF.subquests.filter((WF => FF(WF.status))).map((FF => FF.id)),
          hF = uF((FF => "completed" === FF || "skipped" === FF)),
          bW = uF((FF => "locked" !== FF)),
          dF = (null === (WF = this.trackedSteps) || void 0 === WF ? void 0 : WF.questId) === AF.id && AF.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (dF) {
          const FF = hF.filter((FF => !dF.finished.has(FF))),
            WF = uF((FF => "active" === FF || "ready" === FF)).filter((FF => !dF.unlocked.has(FF)));
          FF.length > 0 && this.trackedStepPulse++, (FF.length > 0 || WF.length > 0) && (this.trackedChange = {
            finished: new Set(FF),
            unlocked: new Set(WF),
            expiresAt: this.now() + CS
          })
        } else {
          var PF;
          this.trackedStepPulse = (null === (PF = this.trackedSteps) || void 0 === PF ? void 0 : PF.questId) === AF.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: AF.id,
          progress: AF.progress,
          finished: new Set([...null !== (SF = null === dF || void 0 === dF ? void 0 : dF.finished) && void 0 !== SF ? SF : [], ...hF]),
          unlocked: new Set([...null !== (CF = null === dF || void 0 === dF ? void 0 : dF.unlocked) && void 0 !== CF ? CF : [], ...bW])
        }
      }
      entry(FF, WF) {
        var SF, CF;
        const AF = FF.id === (null === (SF = this.authoritative) || void 0 === SF ? void 0 : SF.trackedQuestId),
          uF = this.now() < this.trackAvailableAt,
          hF = this.questTextTranslator(),
          bW = FF.subquests.map((WF => {
            var SF, CF, uF, bW, dF, PF;
            const RF = null !== (SF = WF.handInNpcName) && void 0 !== SF ? SF : FF.giverName,
              iW = this.translate("skyblockGame:progress", {
                current: WF.progress.toLocaleString(this.locale),
                target: WF.target.toLocaleString(this.locale)
              }),
              eF = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: RF ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [WF.status],
              EF = "active" === WF.status || "ready" === WF.status;
            return {
              id: WF.id,
              name: TW(hF, WF.nameKey, WF.nameParams),
              description: TW(hF, WF.descriptionKey, WF.descriptionParams),
              progress: iW,
              status: WF.status,
              statusLabel: eF ? this.translate(eF, {
                npc: RF
              }) : iW,
              iconItem: EF && null !== (CF = WF.questIconItem) && void 0 !== CF ? CF : null,
              barPercent: "active" === WF.status && WF.showsProgressBar ? Math.min(100, 100 * WF.progress / WF.target) : null,
              justFinished: AF && null !== (uF = null === (bW = this.trackedChange) || void 0 === bW ? void 0 : bW.finished.has(WF.id)) && void 0 !== uF && uF,
              justUnlocked: AF && null !== (dF = null === (PF = this.trackedChange) || void 0 === PF ? void 0 : PF.unlocked.has(WF.id)) && void 0 !== dF && dF
            }
          }));
        return {
          id: FF.id,
          name: TW(hF, FF.nameKey, FF.nameParams),
          description: TW(hF, FF.descriptionKey, FF.descriptionParams),
          progress: WF ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: FF.progress.toLocaleString(this.locale),
            target: FF.target.toLocaleString(this.locale)
          }),
          completed: WF,
          tracked: AF,
          selected: FF.id === this.selected,
          canTrack: !WF && !AF && !uF,
          trackLabel: this.translate(AF ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : uF ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== FF.id,
          subquests: bW,
          focusStep: null !== (CF = bW.find((FF => null !== FF.barPercent))) && void 0 !== CF ? CF : null,
          clock: this.clockText(FF)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var FF, WF, SF, CF, AF, uF, hF, bW, dF, PF;
        const RF = [...null !== (FF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.active) && void 0 !== FF ? FF : [], ...null !== (SF = null === (CF = this.authoritative) || void 0 === CF ? void 0 : CF.completed) && void 0 !== SF ? SF : []];
        var iW, eF, EF, QF;
        RF.some((FF => FF.id === this.selected)) || (this.selected = null !== (iW = null !== (eF = null === (EF = this.authoritative) || void 0 === EF ? void 0 : EF.trackedQuestId) && void 0 !== eF ? eF : null === (QF = RF[0]) || void 0 === QF ? void 0 : QF.id) && void 0 !== iW ? iW : null);
        const rW = null !== (AF = null === (uF = this.authoritative) || void 0 === uF ? void 0 : uF.active.map((FF => this.entry(FF, !1)))) && void 0 !== AF ? AF : [];
        rW.sort(((FF, WF) => Number(WF.tracked) - Number(FF.tracked)));
        const gW = null !== (hF = null === (bW = this.authoritative) || void 0 === bW ? void 0 : bW.completed.map((FF => this.entry(FF, !0)))) && void 0 !== hF ? hF : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: rW,
          completed: gW,
          completedExpanded: this.completedExpanded,
          detail: null !== (dF = [...rW, ...gW].find((FF => FF.selected))) && void 0 !== dF ? dF : null,
          tracked: null !== (PF = rW.find((FF => FF.tracked))) && void 0 !== PF ? PF : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function dS(FF) {
      var WF;
      return null !== (WF = null === FF || void 0 === FF ? void 0 : FF.active.find((WF => WF.id === FF.trackedQuestId))) && void 0 !== WF ? WF : null
    }
    const PS = "skyblockDungeonsView";
    class RS extends RF {
      constructor(FF, WF) {
        let SF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          CF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(FF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = WF, this.locale = SF, this.requestEnter = CF, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = FF => {
          this.selected = FF, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const FF = this.pickerEntry(),
            WF = null === FF || void 0 === FF ? void 0 : FF.difficulties[this.pageIndex];
          void 0 !== WF && null !== WF.unlockedBoss && (this.close(), this.requestEnter(FF.id, WF.difficulty))
        }
      }
      setTranslator(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = FF, this.locale = WF, this.emit()
      }
      xA(FF) {
        var WF, SF;
        if (!this.DC) return "open" === FF.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== FF.kind ? "snapshot" === FF.kind && (this.authoritative = FF.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (WF = null === (SF = this.pickerEntry()) || void 0 === SF ? void 0 : SF.difficulties.length) && void 0 !== WF ? WF : 1) - 1)), null === FF.snapshot && this.open ? this.close() : this.emit()) : this.choose(FF.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(FF) {
        var WF;
        const SF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.dungeons.find((WF => WF.id === FF));
        void 0 !== SF ? this.open && this.pickerDungeonId === FF || (this.pickerDungeonId = FF, this.pageIndex = Math.max(0, SF.difficulties.findLastIndex((FF => null !== FF.unlockedBoss))), this.open ? this.emit() : this.show()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${FF}`)
      }
      turnTo(FF) {
        var WF, SF;
        const CF = null !== (WF = null === (SF = this.pickerEntry()) || void 0 === SF ? void 0 : SF.difficulties.length) && void 0 !== WF ? WF : 0;
        FF < 0 || FF >= CF || FF === this.pageIndex || (this.pageIndex = FF, this.emit())
      }
      pickerEntry() {
        var FF, WF;
        return null !== (FF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.dungeons.find((FF => FF.id === this.pickerDungeonId))) && void 0 !== FF ? FF : null
      }
      difficulty(FF) {
        const WF = FF.completions > 0,
          SF = null === FF.bestMs ? null : (0, ZF.q)(FF.bestMs);
        return {
          difficulty: FF.difficulty,
          label: this.translate(ZF.d[FF.difficulty]),
          colour: ZF.f[FF.difficulty],
          beaten: WF,
          bestTime: SF,
          completions: FF.completions,
          summary: WF ? [null === SF ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: SF
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: FF.completions.toLocaleString(this.locale)
          })].filter((FF => null !== FF)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(FF) {
        const WF = FF.difficulties.map((FF => this.difficulty(FF))),
          SF = WF.filter((FF => FF.beaten)).length;
        return {
          id: FF.id,
          name: this.translate(FF.nameKey),
          selected: FF.id === this.selected,
          beatenSummary: `${SF} / ${WF.length}`,
          difficulties: WF
        }
      }
      picker() {
        const FF = this.pickerEntry();
        if (null === FF || 0 === FF.difficulties.length) return null;
        const WF = FF.difficulties.map(((WF, SF) => {
          var CF, AF, uF, hF;
          const bW = WF.unlockedBoss,
            dF = null === bW ? this.lockedHint(FF, SF) : null;
          return {
            ...this.difficulty(WF),
            unlocked: null !== bW,
            bossName: null === bW ? null : this.translate(bW.bossNameKey),
            bossMobType: null !== (CF = null === bW || void 0 === bW ? void 0 : bW.bossMobType) && void 0 !== CF ? CF : null,
            bossMobVariation: null !== (AF = null === bW || void 0 === bW ? void 0 : bW.bossMobVariation) && void 0 !== AF ? AF : null,
            lockedHint: null !== (uF = null === dF || void 0 === dF ? void 0 : dF.text) && void 0 !== uF ? uF : null,
            lockedHintHighlight: null !== (hF = null === dF || void 0 === dF ? void 0 : dF.highlight) && void 0 !== hF ? hF : null,
            current: SF === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(FF.nameKey),
          pages: WF,
          page: WF[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < WF.length - 1
        }
      }
      lockedHint(FF, WF) {
        var SF, CF, AF;
        if (0 === WF && "number" === typeof FF.combatLevelLock) {
          const WF = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: FF.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: WF,
            colour: tS("combat"),
            icon: rS.combat
          })
        }
        const uF = null !== (SF = null === (CF = this.authoritative) || void 0 === CF ? void 0 : CF.dungeons) && void 0 !== SF ? SF : [],
          hF = WF > 0 ? FF : null !== (AF = uF[uF.indexOf(FF) - 1]) && void 0 !== AF ? AF : null,
          bW = WF > 0 ? FF.difficulties[WF - 1] : null === hF || void 0 === hF ? void 0 : hF.difficulties[0];
        if (null === hF || void 0 === bW) return null;
        const dF = this.translate(hF.nameKey);
        if (null === bW.unlockedBoss) return hF === FF ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, bW.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: dF
        }, bW.difficulty);
        const PF = this.translate(bW.unlockedBoss.bossNameKey);
        return hF === FF ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: PF
        }, bW.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: PF,
            dungeon: dF
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(FF, WF, SF) {
        return this.hintHighlighting(FF, WF, "difficulty", {
          name: this.translate(ZF.d[SF]),
          colour: ZF.f[SF],
          icon: null
        })
      }
      hintHighlighting(FF, WF, SF, CF) {
        let {
          name: AF,
          colour: uF,
          icon: hF
        } = CF;
        const bW = this.translate(FF, {
          ...WF,
          [SF]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(FF, {
            ...WF,
            [SF]: AF
          }),
          highlight: 2 === bW.length ? {
            before: bW[0],
            name: AF,
            after: bW[1],
            colour: uF,
            icon: hF
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var FF, WF, SF;
        const CF = null !== (FF = null === (WF = this.authoritative) || void 0 === WF ? void 0 : WF.dungeons) && void 0 !== FF ? FF : [];
        var AF, uF;
        CF.some((FF => FF.id === this.selected)) || (this.selected = null !== (AF = null === (uF = CF[0]) || void 0 === uF ? void 0 : uF.id) && void 0 !== AF ? AF : null);
        const hF = CF.map((FF => this.entry(FF)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: hF,
          detail: null !== (SF = hF.find((FF => FF.selected))) && void 0 !== SF ? SF : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const iC = ["mining", "farming", "foraging", "fishing", "combat"],
      eS = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      ES = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function QS() {
      for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
      return WF.map(((FF, WF) => ({
        amount: FF,
        coins: eS[WF],
        xp: ES[WF]
      })))
    }
    const rC = QS(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      gC = QS(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      tC = QS(50, 100, 250, 500, 1e3, 2500, 5e3),
      TS = QS(25, 50, 100, 250, 500, 1e3),
      aC = QS(10, 25, 50, 100, 250, 500, 1e3),
      kC = QS(1, 5, 10, 25, 50);

    function qC(FF, WF) {
      return {
        id: FF,
        category: "fishing",
        item: WF,
        drops: [WF],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aC
      }
    }
    const VS = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: gC
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: tC
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: tC
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: TS
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: TS
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: gC
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: rC
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: rC
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: rC
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: tC
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: gC
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: gC
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: gC
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: tC
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: tC
      }, qC("wheatfish", "Wheatfish"), qC("darter", "Darter"), qC("sunset_minnow", "Sunset Minnow"), qC("root_flounder", "Root Flounder"), qC("greenfin_loach", "Greenfin Loach"), qC("red_strongfish", "Red Strongfish"), qC("green_strongfish", "Green Strongfish"), qC("boomerang_fish", "Boomerang Fish"), qC("seahorse", "Seahorse"), qC("spined_stickleback", "Spined Stickleback"), qC("moon_strongfish", "Moon Strongfish"), qC("boulder_bass", "Boulder Bass"), qC("grass_snapper", "Grass Snapper"), qC("crystal_wheatfish", "Crystalized Wheatfish", kC), qC("moonstone_pupfish", "Moonstone Pupfish", kC), qC("reedglass_minnow", "Reedglass Minnow"), qC("mangrove_herring", "Mangrove Herring"), qC("mudline_perch", "Mudline Perch"), qC("coastal_mullet", "Coastal Mullet"), qC("reef_sardine", "Reef Sardine"), qC("root_perch", "Root Perch"), qC("driftwood_catfish", "Driftwood Catfish"), qC("aether_minnow", "Aether Minnow"), qC("needlefish", "Tri-Pointed Needlefish"), qC("threadfin_bream", "Threadfin Bream"), qC("mudbelly_tilapia", "Mudbelly Tilapia"), qC("rotslab_eel", "Rotslab Eel"), qC("polarflash_electron", "Polarflash Electron"), qC("mireback_carp", "Mireback Carp"), qC("blackwater_bream", "Blackwater Bream"), qC("stone_grouper", "Stone Grouper"), qC("shadeback_ray", "Shadeback Ray"), qC("glacial_silverfish", "Glacial Silverfish"), qC("hatchetfish", "Hatchetfish"), qC("moonlit_boomerang", "Moonlit Boomerang Fish"), qC("murkborne_ray", "Murkborne Ray"), qC("bamboo_catfish", "Bamboo Catfish"), qC("mossback_arapaima", "Mossback Arapaima"), qC("murk_stingray", "Murk Stingray"), qC("channel_sawfish", "Channel Sawfish"), qC("boned_sturgeon", "Boned Sturgeon"), qC("oarfish", "Oarfish"), qC("snakehead", "Snakehead", kC), qC("eldertide_leviathan", "Eldertide Leviathan", kC), qC("pithead", "Pithead"), qC("electric_eel", "Electric Eel"), qC("shadow_darter", "Shadow Darter"), qC("abyss_carp", "Abyss Carp"), qC("nomai_moray", "Nomai Moray"), qC("silver_dragonfish", "Silver Dragonfish"), qC("giant_moray", "Giant Moray"), qC("coelacanth", "Coelacanth", kC), qC("frost_herring", "Frost Herring"), qC("permafrost_halibut", "Permafrost Halibut"), qC("glacial_lanternfish", "Glacial Lanternfish"), qC("frozen_grenadier", "Frozen Grenadier"), qC("blackfin_icefish", "Blackfin Icefish"), qC("moonfish", "Moonfish"), qC("alpha_strongfish", "Alpha Moon Strongfish"), qC("deep_lanternfish", "Deepwater Lanternfish", kC), qC("pearlescent_moonfish", "Pearlescent Moonfish", kC), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: gC
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: TS
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: TS
      }],
      NS = (new Map(VS.map((FF => [FF.id, FF]))), new Map),
      DS = new Map;
    for (const Cd of VS) {
      for (const [FF, WF] of Object.entries(null !== (LS = Cd.blocks) && void 0 !== LS ? LS : {})) {
        var LS;
        NS.set(FF, {
          collection: Cd,
          amount: WF
        })
      }
      for (const FF of null !== (mC = Cd.drops) && void 0 !== mC ? mC : []) {
        var mC;
        DS.set(FF, Cd)
      }
    }

    function OS(FF, WF) {
      let SF = 0;
      for (; SF < FF.tiers.length && WF >= FF.tiers[SF].amount;) SF++;
      return SF
    }
    const xC = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function ZS(FF) {
      return xC[FF - 1]
    }
    const oS = "skyblockCollectionsView";
    class YS extends RF {
      constructor(FF, WF) {
        let SF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          CF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : FF => FF;
        super(FF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = WF, this.locale = SF, this.itemName = CF, this.counts = null, this.category = "mining", this.selected = VS[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = FF => {
          this.category = FF, this.selected = this.inCategory(FF)[0].id, this.emit()
        }, this.select = FF => {
          this.selected = FF, this.emit()
        }
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, this.locale = WF, this.itemName = SF, this.emit()
      }
      xA(FF) {
        if (!this.DC)
          if ("collOpen" !== FF.kind) {
            (FF.collFull || null === this.counts) && (this.counts = new Map);
            for (const [WF, SF] of FF.collCounts) this.counts.set(WF, SF);
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
        var FF;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const WF = this.inCategory(this.category).map((FF => this.collectionView(FF))),
          SF = VS.reduce(((FF, WF) => FF + this.tierOf(WF)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: iC.map((FF => this.categoryView(FF))),
          collections: WF,
          detail: null !== (FF = WF.find((FF => FF.selected))) && void 0 !== FF ? FF : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(SF)
          })
        }
      }
      categoryView(FF) {
        const WF = this.inCategory(FF),
          SF = WF.reduce(((FF, WF) => FF + this.tierOf(WF)), 0),
          CF = WF.reduce(((FF, WF) => FF + WF.tiers.length), 0);
        return {
          id: FF,
          label: this.translate(`skyblockGame:${FF}`),
          icon: rS[FF],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(SF),
            target: this.number(CF)
          }),
          selected: FF === this.category
        }
      }
      collectionView(FF) {
        var WF, SF;
        const CF = null !== (WF = this.counts.get(FF.id)) && void 0 !== WF ? WF : 0,
          AF = OS(FF, CF),
          uF = null !== (SF = FF.tiers[AF]) && void 0 !== SF ? SF : null,
          hF = 0 === AF ? 0 : FF.tiers[AF - 1].amount;
        return {
          id: FF.id,
          name: this.itemName(FF.item),
          icon: FF.item,
          selected: FF.id === this.selected,
          locked: 0 === CF,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(CF)
          }),
          tier: 0 === AF ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(AF),
          percent: null === uF ? 100 : Math.min(100, (CF - hF) / (uF.amount - hF) * 100),
          progress: null === uF ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(CF),
            target: this.number(uF.amount)
          }),
          nextReward: null === uF ? null : this.reward(FF, uF.coins, uF.xp)
        }
      }
      reward(FF, WF, SF) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(WF),
          xp: this.number(SF),
          skill: this.translate(`skyblockGame:${FF.category}`)
        })
      }
      tierLabel(FF) {
        return this.translate("skyblockGame:collectionTier", {
          tier: ZS(FF)
        })
      }
      tierOf(FF) {
        var WF;
        return OS(FF, null !== (WF = this.counts.get(FF.id)) && void 0 !== WF ? WF : 0)
      }
      inCategory(FF) {
        return VS.filter((WF => WF.category === FF))
      }
      number(FF) {
        return FF.toLocaleString(this.locale)
      }
    }
    const MS = "skyblockPortalTransitView",
      cC = "skyblockPortalArrival";
    class GS {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Uu = FF, this.storage = WF, this.now = SF, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      xA(FF) {
        const WF = {
          zoneNameKey: FF.transitZoneNameKey,
          variation: FF.transitZoneVariation,
          colour: FF.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(cC, WF), this.show("departure", WF.zoneNameKey, WF.colour, FF.transitDurationMs, FF.transitDurationMs + 1500, (() => {
          this.storage.removeItem(cC)
        }))
      }
      resumeArrival(FF) {
        const WF = this.storage.getItem(cC);
        this.storage.removeItem(cC), null === WF || WF.variation !== FF || this.now() - WF.departedAt > 3e4 || this.show("arrival", WF.zoneNameKey, WF.colour, 3200, 2e4)
      }
      finishArrival(FF) {
        var WF;
        "arrival" === (null === (WF = this.view) || void 0 === WF ? void 0 : WF.phase) && this.view.token === FF && (this.clearTimer(), this.view = null, this.Uu(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(FF, WF, SF, CF, AF, uF) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: FF,
          zoneNameKey: WF,
          colour: SF,
          durationMs: CF
        }, this.Uu(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Uu(null), null === uF || void 0 === uF || uF()
        }), AF)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const zC = "skyblockDailyRewardView",
      IS = "skyblockDailyRewardCoin";
    class fS {
      constructor(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Uu = FF, this.isBusy = WF, this.holdQuestPopups = SF, this.onHeldCoinsChanged = CF, this.onCoinLanded = AF, this.onStarted = uF, this.onFinished = hF, this.onItemLanded = bW, this.now = dF, this.yS = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var FF, WF;
        return null !== (FF = null === (WF = this.playing) || void 0 === WF ? void 0 : WF.view) && void 0 !== FF ? FF : null
      }
      getHeldCoins() {
        var FF, WF;
        let SF = 0;
        for (const CF of this.yS) SF += CF.coins;
        return SF - (null !== (FF = null === (WF = this.playing) || void 0 === WF ? void 0 : WF.released) && void 0 !== FF ? FF : 0)
      }
      xA(FF) {
        "dailyRewardClaimed" !== FF.kind ? (this.queue.push(FF), this.lF()) : this.yS.push({
          coins: FF.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      lF() {
        const FF = this.now();
        if (null === this.playing) return this.releaseUnshown(FF), void this.startNext(FF);
        const WF = this.playing,
          SF = FF - WF.startedAt,
          CF = WF.view.flyingCoins,
          AF = function(FF, WF) {
            let SF = 0;
            for (; SF < WF && sS(SF, WF) <= FF;) SF++;
            return SF
          }(SF, CF);
        if (AF !== WF.landed) {
          for (let FF = AF - WF.landed > 2 ? AF - 1 : WF.landed; FF < AF; FF++) this.onCoinLanded(FF, CF);
          WF.landed = AF, WF.released = Math.round(WF.view.coins * AF / CF), this.onHeldCoinsChanged()
        }
        for (; WF.itemsLanded < WF.view.items.length && 2e3 + 160 * WF.itemsLanded + 630 <= SF;) this.onItemLanded(WF.itemsLanded), WF.itemsLanded++;
        SF >= WF.view.durationMs && (this.finish(), this.startNext(FF))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.yS = [], this.Uu(null)
      }
      startNext(FF) {
        if (0 === this.queue.length || this.isBusy()) return;
        const WF = this.queue.shift();
        this.token++;
        const SF = {
          token: this.token,
          day: WF.dailyRewardDay,
          coins: WF.dailyRewardCoins,
          items: WF.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: WF.dailyRewardDay === mW ? 24 : 14
        };
        this.playing = {
          view: SF,
          startedAt: FF,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Uu(SF), this.onStarted(SF)
      }
      finish() {
        this.yS.shift(), this.playing = null, this.holdQuestPopups(!1), this.Uu(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(FF) {
        if (this.queue.length > 0 || 0 === this.yS.length) return;
        const WF = this.yS.length;
        this.yS = this.yS.filter((WF => FF - WF.receivedAt < 6e4)), this.yS.length !== WF && this.onHeldCoinsChanged()
      }
    }

    function yC(FF, WF) {
      return 450 + 715 * FF / (WF - 1)
    }

    function sS(FF, WF) {
      return yC(FF, WF) + 650
    }
    const nS = "skyblockMailboxView";
    class HS {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Uu = FF, this.isBusy = WF, this.onStarted = SF, this.now = CF, this.waiting = [], this.playing = null, this.token = 0, this.itemName = FF => FF
      }
      getSnapshot() {
        var FF, WF;
        return null !== (FF = null === (WF = this.playing) || void 0 === WF ? void 0 : WF.view) && void 0 !== FF ? FF : null
      }
      setItemName(FF) {
        this.itemName = FF
      }
      xA(FF) {
        this.waiting.push(...FF.mailLetters), this.lF()
      }
      lF() {
        const FF = this.now();
        null !== this.playing && FF - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Uu(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(FF)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Uu(null)
      }
      start(FF) {
        const WF = this.waiting.slice(0, 3);
        this.token++;
        const SF = {
          token: this.token,
          letters: WF.map((FF => this.toView(FF))),
          more: this.waiting.length - WF.length,
          durationMs: 4500 + 700 * WF.length
        };
        this.waiting = [], this.playing = {
          view: SF,
          startedAt: FF
        }, this.Uu(SF), this.onStarted(SF)
      }
      toView(FF) {
        return {
          coins: FF.mailCoins,
          items: FF.mailItems.map((FF => {
            var WF;
            return {
              itemName: FF.mailItemName,
              amount: FF.mailItemAmount,
              label: null !== (WF = FF.mailItemLabel) && void 0 !== WF ? WF : this.itemName(FF.mailItemName)
            }
          })),
          reasonKey: FF.mailReasonKey,
          reasonParams: FF.mailReasonParams
        }
      }
    }
    const KS = "skyblockQuestGraphView",
      wS = "skyblockDevQuestJump";

    function XS(FF) {
      if (0 === FF.length) return "";
      const WF = [`M ${FF[0].x} ${FF[0].y}`];
      for (let CF = 1; CF < FF.length - 1; CF++) {
        const SF = FF[CF + 1];
        WF.push(`Q ${FF[CF].x} ${FF[CF].y} ${(FF[CF].x+SF.x)/2} ${(FF[CF].y+SF.y)/2}`)
      }
      const SF = FF[FF.length - 1];
      return WF.push(`L ${SF.x} ${SF.y}`), WF.join(" ")
    }

    function US(FF, WF) {
      return FF < WF ? `${FF}|${WF}` : `${WF}|${FF}`
    }
    class BS extends RF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(FF, SF, CF), this.translate = WF, this.requestJump = AF, this.requestArrive = uF, this.storage = hF, this.now = bW, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = FF => {
          FF !== this.hoveredId && (this.hoveredId = FF, this.emit())
        }, this.jump = FF => {
          this.close(), this.requestJump(FF)
        }
      }
      xA(FF) {
        if (!this.DC)
          if ("graph" !== FF.kind) {
            if ("jumping" === FF.kind) {
              const WF = {
                questId: FF.graphQuestId,
                variation: FF.graphVariation,
                completes: FF.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(wS, WF)
            }
          } else {
            const WF = ++this.graphCount;
            SF.e(96).then((() => SF(5405))).then((SF => {
              let {
                default: CF
              } = SF;
              this.DC || WF !== this.graphCount || (this.layout = function(FF, WF, SF) {
                var CF, AF;
                const uF = new FF.graphlib.Graph;
                uF.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), uF.setDefaultEdgeLabel((() => ({})));
                const hF = new Set;
                for (const RF of WF) hF.add(RF.graphQuestId), uF.setNode(RF.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const bW = SF.filter((FF => hF.has(FF.graphFromId) && hF.has(FF.graphToId) && FF.graphFromId !== FF.graphToId)),
                  dF = new Map;
                for (const RF of [...bW].sort(((FF, WF) => Number("awaits" === FF.graphEdgeKind) - Number("awaits" === WF.graphEdgeKind)))) {
                  const FF = US(RF.graphFromId, RF.graphToId);
                  dF.has(FF) || (dF.set(FF, RF), uF.setEdge(RF.graphFromId, RF.graphToId))
                }
                FF.layout(uF);
                const PF = uF.graph();
                return {
                  width: Math.ceil(null !== (CF = PF.width) && void 0 !== CF ? CF : 0),
                  height: Math.ceil(null !== (AF = PF.height) && void 0 !== AF ? AF : 0),
                  nodes: WF.map((FF => {
                    var WF, SF;
                    const CF = uF.node(FF.graphQuestId);
                    return {
                      node: FF,
                      left: (null !== (WF = CF.x) && void 0 !== WF ? WF : 0) - 95,
                      top: (null !== (SF = CF.y) && void 0 !== SF ? SF : 0) - 26
                    }
                  })),
                  edges: bW.map((FF => {
                    var WF;
                    const SF = dF.get(US(FF.graphFromId, FF.graphToId)),
                      CF = null !== (WF = uF.edge(SF.graphFromId, SF.graphToId).points) && void 0 !== WF ? WF : [];
                    return {
                      edge: FF,
                      key: `${FF.graphFromId}|${FF.graphToId}|${FF.graphEdgeKind}`,
                      path: XS(SF.graphFromId === FF.graphFromId ? CF : [...CF].reverse())
                    }
                  })),
                  plans: new Map(WF.map((FF => [FF.graphQuestId, new Set([FF.graphQuestId, ...FF.graphPlanIds])])))
                }
              }(CF, FF.graphNodes, FF.graphEdges), this.show())
            })).catch((FF => {
              console.error("The quest graph could not be laid out", FF)
            }))
          }
      }
      resumeJump(FF) {
        const WF = this.storage.getItem(wS);
        this.storage.removeItem(wS), null === WF || WF.variation !== FF || this.now() - WF.departedAt > 6e4 || this.requestArrive(WF.questId, WF.completes)
      }
      setTranslator(FF) {
        this.translate = FF, this.emit()
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
        var FF, WF;
        return null !== (FF = null === this.hoveredId || null === (WF = this.layout) || void 0 === WF ? void 0 : WF.plans.get(this.hoveredId)) && void 0 !== FF ? FF : new Set
      }
      buildSnapshot() {
        const FF = this.layout;
        if (null === FF) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const WF = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: FF.width,
          height: FF.height,
          nodes: FF.nodes.map((FF => {
            let {
              node: SF,
              left: CF,
              top: AF
            } = FF;
            return {
              id: SF.graphQuestId,
              name: this.translate(SF.graphNameKey),
              detail: null === SF.graphGiverName ? SF.graphZoneId : `${SF.graphGiverName} \xb7 ${SF.graphZoneId}`,
              state: SF.graphState,
              left: CF,
              top: AF,
              inPlan: WF.has(SF.graphQuestId),
              hovered: SF.graphQuestId === this.hoveredId
            }
          })),
          edges: FF.edges.map((FF => {
            let {
              edge: SF,
              key: CF,
              path: AF
            } = FF;
            return {
              key: CF,
              kind: SF.graphEdgeKind,
              path: AF,
              inPlan: WF.has(SF.graphFromId) && WF.has(SF.graphToId)
            }
          })),
          planning: WF.size > 0
        }
      }
    }
    var jC = SF(35515);
    const vC = 250,
      JS = 2150,
      pS = -2.8,
      lS = 2.2,
      FC = -27,
      WC = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      SC = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      CC = Math.round(50 + 1e3 * (SC.delay + SC.period / 2)),
      AC = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      uC = Array.from({
        length: 26
      }, ((FF, WF) => {
        const SF = 2.39996 * WF,
          CF = .5 + .618034 * WF % 1 * .23,
          AF = WF % 3 !== 2;
        return {
          rune: AF ? AC[7 * WF % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(SF)*CF).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(SF)*CF).toFixed(3)})`,
            "--spin": 40 * (WF % 5 - 2) + "deg",
            "--size": (AF ? 1 + WF % 4 * .2 : .3 + WF % 2 * .15) + "rem",
            "--duration": `${(1.8+7*WF%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*WF%3).toFixed(2)}s`
          }
        }
      }));

    function hC(FF, WF) {
      return Array.from({
        length: 30 + 3 * FF + (WF ? 10 : 0)
      }, ((FF, WF) => {
        const SF = WF < 4,
          CF = SF ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          AF = SF ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          uF = SF ? 2.2 : .6 + Math.random(),
          hF = SF ? .3 : Math.random() < .5 ? .16 : .24,
          bW = SF ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": CF,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${AF.toFixed(2)}rem`,
          "--length": `${uF.toFixed(2)}rem`,
          "--width": `${hF}rem`,
          "--duration": `${Math.round(bW)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function bA(FF) {
      let {
        zeta: WF,
        period: SF
      } = FF;
      const CF = 2 * Math.PI / SF;
      return {
        w: CF,
        decay: WF * CF / Math.sqrt(1 - WF * WF)
      }
    }
    let dC = !1;

    function PC() {
      if (dC) return;
      dC = !0;
      const FF = document.createElement("style");
      FF.textContent = function() {
        const FF = bA(WC),
          WF = bA(SC),
          SF = WF => Math.exp(-FF.decay * WF) * Math.sin(FF.w * WF),
          CF = SF(Math.atan(FF.w / FF.decay) / FF.w),
          AF = .25,
          uF = 2.15,
          hF = Math.round(215),
          bW = [];
        for (let dF = 0; dF <= hF; dF++) {
          const FF = dF / hF * uF;
          let PF = Math.sin(Math.min(FF, AF) / AF * Math.PI / 2) ** 2,
            RF = 0,
            iW = 1,
            eF = 1 - .2 * PF,
            EF = 1;
          if (FF >= AF) {
            const hF = FF - AF,
              bW = Math.max(0, hF - .05);
            PF = Math.exp(-bW / .05), RF = SF(bW + WC.lead * (1 - Math.exp(-bW / WC.rush))) / CF;
            const dF = bW - SC.delay,
              QF = dF <= 0 ? 0 : 1 - Math.exp(-WF.decay * dF) * (Math.cos(WF.w * dF) + WF.decay / WF.w * Math.sin(WF.w * dF)),
              rW = Math.max(0, (FF - 1.77) / (uF - 1.77));
            iW = (1 + (SC.to - 1) * QF) * (1 + .08 * rW), eF = 1.1 + 1.5 * Math.exp(-hF / .07) + .3 * Math.exp(-(((1e3 * hF - CC) / 100) ** 2)) + .8 * rW, EF = 1 - rW ** 1.5
          }
          const QF = .15 * PF + pS * RF,
            rW = -.1 * PF + lS * RF,
            gW = 3 * PF + FC * RF;
          bW.push(`${(dF/hF*100).toFixed(3)}% { opacity: ${EF.toFixed(3)}; transform: translate(${QF.toFixed(3)}rem, ${rW.toFixed(3)}rem) rotate(${gW.toFixed(2)}deg) scale(${iW.toFixed(3)}); filter: brightness(${eF.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${bW.join(" ")} }`
      }(), document.head.append(FF)
    }
    const RC = "skyblockForgeView",
      iA = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class eC extends RF {
      constructor(FF, WF, SF, CF, AF) {
        super(FF, SF, CF), this.translate = WF, this.requestForge = AF, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (FF, WF) => {
          var SF, CF;
          null !== this.forging || (null !== (SF = this.owned[(0, jC.s)(WF, FF)]) && void 0 !== SF ? SF : 0) <= 0 || (this.selected[FF] = this.selected[FF] === WF ? null : WF, this.status = null, null === (CF = this.onPartSelected) || void 0 === CF || CF.call(this), this.emit())
        }, this.forge = FF => {
          var WF, SF;
          const CF = this.selectedParts();
          if (null === CF || this.isPending() || !this.open) return;
          const AF = (0, jC.p)(CF);
          if (null === AF || AF.coalCost > this.coal) return;
          const uF = this.preview(AF),
            hF = null !== (WF = null === (SF = this.onForgeStarted) || void 0 === SF ? void 0 : SF.call(this, uF.tier, uF.named, FF)) && void 0 !== WF ? WF : () => {};
          if (this.dropArrival(), FF) {
            const FF = {
              id: ++this.forgeId,
              preview: uF,
              timers: [],
              stopSounds: hF,
              landed: !1,
              reply: null
            };
            FF.timers.push(setTimeout((() => {
              FF.landed = !0, null !== FF.reply && (this.apply(FF.reply), FF.reply = null, this.emit())
            }), vC), setTimeout((() => {
              this.finishForge(FF)
            }), JS)), this.forging = FF
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(CF)
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === FF.forgeMessageKind) return this.dropForge(), this.apply(FF), this.status = null, void this.show();
        const WF = this.forging;
        if (null !== WF && null !== FF.forgeRefusalKey) this.dropForge();
        else if (null !== WF && !WF.landed) return void(WF.reply = FF);
        this.apply(FF), this.emit()
      }
      apply(FF) {
        if (this.owned = FF.forgeOwnedParts, this.coal = FF.forgeCoalOwned, this.keepSelectionOwned("open" === FF.forgeMessageKind), null !== FF.forgeForgedSwordId) {
          var WF;
          const SF = (0, jC.p)(FF.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (WF = null === SF || void 0 === SF ? void 0 : SF.displayName) && void 0 !== WF ? WF : ""
            }
          }
        } else null !== FF.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: FF.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(FF) {
        this.translate = FF, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(FF) {
        var WF;
        this.forging = null;
        const SF = this.selectedParts(),
          CF = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: FF.id,
          sameSword: null !== SF && (null === (WF = (0, jC.p)(SF)) || void 0 === WF ? void 0 : WF.displayName) === FF.preview.name,
          timer: CF
        }, this.emit()
      }
      dropForge() {
        const FF = this.forging;
        if (null !== FF) {
          this.forging = null;
          for (const WF of FF.timers) clearTimeout(WF);
          FF.stopSounds(), null !== FF.reply && this.apply(FF.reply)
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
        var FF, WF, SF;
        const CF = this.selectedParts(),
          AF = null === CF ? null : (0, jC.p)(CF),
          uF = null !== (FF = null === (WF = this.forging) || void 0 === WF ? void 0 : WF.preview) && void 0 !== FF ? FF : null === AF ? null : this.preview(AF);
        return {
          enabled: this.received,
          open: this.open,
          slots: jC.o.map((FF => ({
            kind: FF,
            label: this.translate(iA[FF]),
            parts: this.partsFor(FF)
          }))),
          coalOwned: this.coal,
          preview: uF,
          unformedSword: jC.m[null !== (SF = this.selected.Blade) && void 0 !== SF ? SF : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((FF => FF > 0)),
          canForge: null !== uF && !uF.coalShort && !this.isPending(),
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
      preview(FF) {
        return {
          name: FF.displayName,
          lore: FF.lore,
          baseSword: FF.baseSword,
          enchantmentTier: FF.enchantmentTier,
          tier: Number(FF.enchantmentTier.slice(-1)),
          named: FF.named,
          stats: this.stats(FF),
          effects: FF.effects,
          coalCost: FF.coalCost,
          coalShort: null === this.forging && FF.coalCost > this.coal
        }
      }
      partsFor(FF) {
        const WF = [];
        for (const CF of jC.i) {
          var SF;
          const AF = (0, jC.s)(CF, FF),
            uF = null !== (SF = this.owned[AF]) && void 0 !== SF ? SF : 0;
          uF > 0 && WF.push({
            material: CF,
            itemName: AF,
            owned: uF,
            selected: this.selected[FF] === CF,
            placeholder: !1
          })
        }
        if (0 === WF.length) {
          const SF = jC.i[0];
          WF.push({
            material: SF,
            itemName: (0, jC.s)(SF, FF),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return WF
      }
      stats(FF) {
        const WF = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${FF.powerMultiplier.toFixed(2)}`,
          better: FF.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${FF.damageMultiplier.toFixed(2)}`,
          better: FF.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/FF.cooldownMultiplier).toFixed(2)}`,
          better: FF.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${FF.knockbackMultiplier.toFixed(2)}`,
          better: FF.knockbackMultiplier > 1
        }];
        return FF.reachBonus > 0 && WF.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${FF.reachBonus.toFixed(1)}`,
          better: !0
        }), FF.damageReduction > 0 && WF.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*FF.damageReduction)}%`,
          better: !0
        }), WF
      }
      selectedParts() {
        const {
          Blade: FF,
          Guard: WF,
          Handle: SF
        } = this.selected;
        return null === FF || null === WF || null === SF ? null : {
          blade: FF,
          guard: WF,
          handle: SF
        }
      }
      keepSelectionOwned(FF) {
        for (const SF of jC.o) {
          var WF;
          const CF = this.selected[SF];
          if (null !== CF && (null !== (WF = this.owned[(0, jC.s)(CF, SF)]) && void 0 !== WF ? WF : 0) > 0) continue;
          if (!FF) {
            this.selected[SF] = null;
            continue
          }
          const AF = [...jC.i].reverse().find((FF => {
            var WF;
            return (null !== (WF = this.owned[(0, jC.s)(FF, SF)]) && void 0 !== WF ? WF : 0) > 0
          }));
          this.selected[SF] = null !== AF && void 0 !== AF ? AF : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const EC = "skyblockSmugglerView",
      QC = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class rA extends RF {
      constructor(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(FF, SF, CF), this.translate = WF, this.requestBuy = AF, this.now = uF, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = FF => FF, this.onBought = null, this.buy = FF => {
          const WF = this.deals[FF];
          void 0 !== WF && !this.isPending() && this.open && !this.soldOut.has(FF) && this.canAfford(WF) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, FF))
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        if (this.received = !0, this.day = FF.smugglerDay, this.deals = FF.smugglerDeals, this.rivets = FF.smugglerRivetsOwned, this.crests = FF.smugglerCrestsOwned, this.soldOut = new Set(FF.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + FF.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === FF.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = FF.smugglerBoughtSlot, null !== FF.smugglerBoughtSlot) {
          var WF, SF;
          const CF = this.deals[FF.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === CF ? "" : this.dealName(CF),
              amount: String(null !== (WF = null === CF || void 0 === CF ? void 0 : CF.smugglerDealAmount) && void 0 !== WF ? WF : 0)
            }
          }, this.boughtCount++, null === (SF = this.onBought) || void 0 === SF || SF.call(this)
        } else null !== FF.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: FF.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, void 0 !== SF && (this.itemName = SF), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(FF) {
        if (null !== FF.smugglerDealUniqueName) return FF.smugglerDealUniqueName;
        const WF = QC[FF.smugglerDealItem];
        return void 0 === WF ? this.itemName(FF.smugglerDealItem) : this.translate(WF)
      }
      canAfford(FF) {
        return FF.smugglerDealRivets <= this.rivets && FF.smugglerDealCrests <= this.crests
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
        const FF = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return FF <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : FF < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(FF)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(FF / 60)),
          minutes: String(FF % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((FF, WF) => ({
            slot: WF,
            itemName: FF.smugglerDealItem,
            displayName: this.dealName(FF),
            enchantmentTier: FF.smugglerDealEnchantmentTier,
            amount: FF.smugglerDealAmount,
            rivets: FF.smugglerDealRivets,
            crests: FF.smugglerDealCrests,
            affordable: this.canAfford(FF),
            soldOut: this.soldOut.has(WF),
            justBought: this.boughtSlot === WF
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
    const gA = "skyblockPassageView",
      tA = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function TC(FF, WF) {
      return FF(tA[WF])
    }

    function aA(FF, WF, SF, CF) {
      const AF = Math.ceil((SF - CF) / 864e5),
        uF = TC(FF, WF);
      return AF > 1 ? FF("skyblockGame:passageNextDays", {
        phase: uF,
        days: String(AF)
      }) : FF("skyblockGame:passageNextSoon", {
        phase: uF
      })
    }
    class kA extends RF {
      constructor(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(FF, SF, CF), this.translate = WF, this.now = AF, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = FF => FF, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        this.message = FF, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, void 0 !== SF && (this.itemName = SF), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(FF) {
        return {
          itemName: FF.passageFish,
          displayName: this.itemName(FF.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(FF.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const FF = this.message;
        return null === FF ? {
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
          phase: FF.passagePhase,
          phaseName: TC(this.translate, FF.passagePhase),
          visitors: FF.passageVisitors.map((FF => this.describe(FF))),
          resting: this.describe(FF.passageResting),
          nextPhase: FF.passageNextPhase,
          next: aA(this.translate, FF.passageNextPhase, FF.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    class qA {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12e3,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
        this.limit = FF, this.windowMs = WF, this.spacingMs = SF, this.now = CF, this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const FF of this.priority) FF.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const FF = this.now();
        this.sent.push(FF), this.lastSentAt = FF, this.schedule(), this.notify()
      }
      addPriority(FF) {
        return this.priority.add(FF), () => {
          this.priority.delete(FF)
        }
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const FF of this.priority)
          if (FF.waiting()) return !0;
        return !1
      }
      prune() {
        const FF = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= FF;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const FF = this.now(),
          WF = this.lastSentAt + this.spacingMs,
          SF = Math.min(WF > FF ? WF : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        SF !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, SF - FF)))
      }
      notify() {
        for (const FF of this.listeners) FF()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    const VC = "skyblockKeepersChairView";
    class NC extends RF {
      constructor(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new qA;
        super(FF, SF, CF), this.translate = WF, this.requestAim = AF, this.now = uF, this.pacer = hF, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = FF => FF, this.aim = FF => {
          !this.awaitingReply && this.open && this.atChair && FF !== this.favoured && (null === FF || this.islands.some((WF => WF.keepersChairIslandId === FF && WF.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== FF && void 0 !== FF ? FF : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = hF.subscribe((() => {
          this.emit()
        }))
      }
      xA(FF) {
        var WF, SF;
        this.received = !0;
        const CF = this.favoured,
          AF = this.atChair;
        var uF;
        return this.islands = FF.keepersChairIslands, this.favoured = FF.keepersChairFavoured, this.passage = null !== (WF = FF.keepersChairPassage) && void 0 !== WF ? WF : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (SF = FF.keepersChairAtChair) || void 0 === SF || SF, "place" === FF.keepersChairMessageKind ? (!AF && this.atChair && "refused" === (null === (uF = this.status) || void 0 === uF ? void 0 : uF.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === FF.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== FF.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: FF.keepersChairRefusalKey,
          island: null
        } : this.favoured !== CF && (this.status = null === this.favoured ? {
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
      receivePassage(FF) {
        this.received && (this.passage = FF, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, void 0 !== SF && (this.itemName = SF), this.emit()
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
      islandName(FF) {
        const WF = this.islands.find((WF => WF.keepersChairIslandId === FF));
        return void 0 === WF ? FF : this.translate(WF.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const FF = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          WF = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((FF => {
            const WF = FF.keepersChairFeaturedFish;
            return {
              id: FF.keepersChairIslandId,
              name: this.translate(FF.keepersChairIslandNameKey),
              relit: FF.keepersChairIslandRelit,
              featuredFish: null === WF ? null : {
                itemName: WF,
                displayName: this.itemName(WF)
              },
              favoured: FF.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === FF ? null : {
            tone: FF.tone,
            text: this.translate(FF.key, null === FF.island ? void 0 : {
              island: this.islandName(FF.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === WF ? null : {
            phase: WF.keepersChairPassagePhase,
            phaseName: TC(this.translate, WF.keepersChairPassagePhase),
            nextPhase: WF.keepersChairPassageNextPhase,
            next: aA(this.translate, WF.keepersChairPassageNextPhase, WF.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const DC = "skyblockReachLogView",
      LC = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      mA = "Caught Fish",
      OC = [1, 2, 4];

    function xA(FF, WF) {
      return FF.map((FF => ({
        ...FF,
        reachLogPageFish: FF.reachLogPageFish.map((FF => ({
          ...FF,
          reachLogFishFresh: WF(FF)
        })))
      })))
    }
    class ZC extends RF {
      constructor(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new qA;
        super(FF, SF, CF), this.translate = WF, this.requestOpen = AF, this.pacer = uF, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = FF => FF, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = FF => {
          this.pages.some((WF => WF.reachLogIslandId === FF)) && (this.selected = FF, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = uF.subscribe((() => {
          this.emit()
        }))
      }
      xA(FF) {
        if (this.received = !0, "status" === FF.reachLogMessageKind) return !0 === FF.reachLogNews && this.markNews(), this.serverFresh = FF.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const WF = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== FF.reachLogMessageKind)
          if (this.pageViews = null, this.pages = xA(FF.reachLogPages, (FF => FF.reachLogFishFresh || this.heldFresh.has(FF.reachLogFishItem))), this.letGoShown = FF.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, WF) this.showPages();
          else {
            for (const FF of this.pages)
              for (const WF of FF.reachLogPageFish) WF.reachLogFishFresh && this.heldFresh.add(WF.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, this.pageViews = null, void 0 !== SF && (this.itemName = SF), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = xA(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var FF, WF, SF, CF;
        const AF = this.pages.find((FF => FF.reachLogPageFish.some((FF => FF.reachLogFishFresh))));
        if (void 0 !== AF) return AF.reachLogIslandId;
        if (null !== this.selected && this.pages.some((FF => FF.reachLogIslandId === this.selected))) return this.selected;
        return null !== (FF = null !== (WF = null === (SF = this.pages.filter((FF => FF.reachLogIslandAwake)).at(-1)) || void 0 === SF ? void 0 : SF.reachLogIslandId) && void 0 !== WF ? WF : null === (CF = this.pages[0]) || void 0 === CF ? void 0 : CF.reachLogIslandId) && void 0 !== FF ? FF : null
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
        return this.pages.map((FF => {
          var WF;
          return {
            id: FF.reachLogIslandId,
            name: this.translate(FF.reachLogIslandNameKey),
            awake: FF.reachLogIslandAwake,
            gold: FF.reachLogPageGold,
            caught: FF.reachLogPageFish.filter((FF => FF.reachLogFishCaught && !FF.reachLogFishVisitor)).length,
            total: FF.reachLogPageFish.filter((FF => !FF.reachLogFishVisitor)).length,
            fish: FF.reachLogPageFish.map((FF => {
              const WF = FF.reachLogFishBestKg;
              return {
                itemName: FF.reachLogFishItem,
                name: FF.reachLogFishCaught ? this.itemName(FF.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: FF.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / FF.reachLogFishChance))
                }),
                best: FF.reachLogFishCaught ? null === WF ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: WF.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: FF.reachLogFishMarks,
                ribbons: OC.map((WF => 0 !== (FF.reachLogFishRibbons & WF))),
                glimmer: 0 !== (8 & FF.reachLogFishRibbons),
                halo: 0 !== (32 & FF.reachLogFishRibbons),
                fresh: FF.reachLogFishFresh,
                visitor: FF.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (WF = FF.reachLogPageReturner) && void 0 !== WF ? WF : null)
          }
        }))
      }
      buildReturner(FF) {
        return null === FF ? null : {
          itemName: FF.reachLogReturnerFishItem,
          line: this.translate(FF.reachLogReturnerLineKey, {
            name: this.translate(FF.reachLogReturnerNameKey),
            trinket: this.translate(FF.reachLogReturnerTrinketKey)
          }),
          back: FF.reachLogReturnerBack
        }
      }
      receivePassagePhase(FF) {
        null !== this.passagePhase && this.passagePhase !== FF && (this.pagesCurrent = !1), this.passagePhase = FF
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const oC = "skyblockLampLightView";
    class YC {
      constructor(FF, WF, SF, CF) {
        this.Uu = FF, this.translate = WF, this.requestCommand = SF, this.pacer = CF, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.DC = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = FF => {
          FF ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = FF => {
          this.send(`buy ${FF}`)
        }, this.socket = FF => {
          this.send(`socket ${null!==FF&&void 0!==FF?FF:YF}`)
        }, this.wearTint = FF => {
          this.send(`tint ${null!==FF&&void 0!==FF?FF:YF}`)
        }, this.setSituation = FF => {
          this.situation = FF, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = CF.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = CF.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      xA(FF) {
        if (this.message = FF, null !== FF.lampLightShop && (this.shop = FF.lampLightShop), "open" === FF.lampLightKind && (this.refusalKey = null), "reply" === FF.lampLightKind) {
          var WF;
          const AF = null !== (WF = FF.lampLightReplyTag) && void 0 !== WF ? WF : null,
            uF = null !== AF && AF === this.offTag;
          var SF, CF;
          if (uF ? this.settleOff() : null !== AF && AF !== this.awaitingTag || this.settleReply(), this.refusalKey = FF.lampLightRefusalKey, null !== FF.lampLightBought && !uF) this.sparkle = {
            id: FF.lampLightBought,
            count: (null !== (SF = null === (CF = this.sparkle) || void 0 === CF ? void 0 : CF.count) && void 0 !== SF ? SF : 0) + 1
          }
        }
        FF.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === FF.lampLightKind && (this.lastGained = FF.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(FF) {
        FF !== this.atChair && (this.atChair = FF, FF && (this.refusalKey = null), this.emit())
      }
      setTranslator(FF, WF) {
        this.translate = FF, this.locale = null !== WF && void 0 !== WF ? WF : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.DC = !0
      }
      send(FF) {
        var WF;
        if (null !== this.awaitingTag || "ready" !== (null === (WF = this.message) || void 0 === WF ? void 0 : WF.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const SF = this.nextTag();
        this.awaitingTag = SF, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${FF} ${SF}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const FF = this.nextTag();
        this.offTag = FF, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${FF}`)
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
        this.DC || (this.snapshot = this.buildSnapshot(), this.Uu(this.snapshot))
      }
      formatLight(FF) {
        return Math.floor(FF).toLocaleString(this.locale)
      }
      formatPercent(FF) {
        const WF = 100 * FF;
        return WF >= 10 ? Math.round(WF).toLocaleString(this.locale) : WF.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(FF, WF) {
        if ("bite" === FF) return this.translate("skyblockGame:lampLightBite", {
          seconds: (WF.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === FF) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(WF.lampLightRareChance)
        });
        if ("notice" === FF) return null === WF.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(WF.lampLightNoticeChance)
        });
        const SF = "meter" === FF ? WF.lampLightMeterCatches : WF.lampLightBloomCatches;
        return null === SF ? null : this.translate("meter" === FF ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(SF))
        })
      }
      oddsLines(FF, WF) {
        const SF = (FF, WF) => {
            var SF;
            return null !== (SF = {
              bite: WF.lampLightBiteMs,
              rare: WF.lampLightRareChance,
              meter: WF.lampLightMeterCatches,
              bloom: WF.lampLightBloomCatches,
              notice: WF.lampLightNoticeChance
            } [FF]) && void 0 !== SF ? SF : 0
          },
          CF = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          AF = [];
        for (const uF of ["bite", "rare", "meter", "bloom", "notice"]) {
          const hF = this.formatOdds(uF, FF),
            bW = this.formatOdds(uF, WF);
          if (null === hF || null === bW || "bite" !== uF && "rare" !== uF && hF === bW) continue;
          const dF = SF(uF, WF) - SF(uF, FF),
            PF = CF[uF] ? dF < 0 : dF > 0;
          AF.push({
            label: uF,
            before: hF,
            after: bW,
            tone: hF === bW ? "same" : PF ? "better" : "worse"
          })
        }
        return AF
      }
      charmView(FF, WF, SF) {
        const CF = FF.lampLightCharmId.charAt(0).toUpperCase() + FF.lampLightCharmId.slice(1),
          AF = "bloom" === this.situation;
        return {
          id: FF.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${CF}`),
          effect: this.translate(`skyblockGame:lampLightCharm${CF}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(FF.lampLightCharmCost)
          }),
          owned: FF.lampLightCharmOwned,
          affordable: SF >= FF.lampLightCharmCost,
          socketed: WF.lampLightSocketed === FF.lampLightCharmId,
          lines: this.oddsLines(AF ? WF.lampLightBareBloom : WF.lampLightBareOpen, AF ? FF.lampLightCharmBloom : FF.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var FF, WF, SF, CF;
        const AF = this.message,
          uF = "ready" === (null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) ? this.shop : null,
          hF = null !== (FF = null === AF || void 0 === AF ? void 0 : AF.lampLightBalance) && void 0 !== FF ? FF : 0,
          bW = this.atChair,
          dF = "loading" === (null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          PF = "ready" !== (null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) || bW ? null !== (WF = this.refusalKey) && void 0 !== WF ? WF : dF : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== AF && "locked" !== AF.lampLightStatus,
          status: null !== (SF = null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) && void 0 !== SF ? SF : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(hF)
          }),
          releasing: null !== (CF = null === AF || void 0 === AF ? void 0 : AF.lampLightReleasing) && void 0 !== CF && CF,
          gained: null === AF || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === AF || void 0 === AF ? void 0 : AF.lampLightStatus) && bW && !this.isPending(),
          situation: this.situation,
          shop: null === uF ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: uF.lampLightOddsRod,
              island: this.translate(uF.lampLightIslandNameKey)
            }),
            heldRod: null !== uF.lampLightHeldRod,
            charms: uF.lampLightCharms.map((FF => this.charmView(FF, uF, hF))),
            tints: uF.lampLightTints.map((FF => {
              const WF = FF.lampLightTintId,
                [SF, CF, AF] = FF.lampLightTintColour;
              return {
                id: WF,
                name: this.translate(`skyblockGame:lampLightTint${WF.charAt(0).toUpperCase()}${WF.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(FF.lampLightTintCost)
                }),
                owned: FF.lampLightTintOwned,
                affordable: hF >= FF.lampLightTintCost,
                wearing: uF.lampLightTint === WF,
                colour: `rgb(${SF}, ${CF}, ${AF})`
              }
            })),
            wearingIslandColours: null === uF.lampLightTint
          },
          notice: null === PF ? null : this.translate(PF),
          sparkle: this.sparkle
        }
      }
    }
    const MC = "skyblockMagmawardView";
    class cA {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uu = FF, this.now = WF, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = yW.map((() => 0)), this.wornAt = yW.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      xA(FF) {
        var WF, SF;
        const CF = yW.map(((WF, SF) => !0 === FF.magmawardPiecesWorn[SF]));
        if (!CF.includes(!0)) return this.snapshot = null, void this.Uu(null);
        const AF = this.now(),
          uF = this.snapshot;
        null === uF && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const hF = FF.magmawardFuelCarried,
          bW = !CF.includes(!1);
        let dF = null !== (WF = null === uF || void 0 === uF ? void 0 : uF.pulse) && void 0 !== WF ? WF : null,
          PF = null !== (SF = null === uF || void 0 === uF ? void 0 : uF.flare) && void 0 !== SF ? SF : null;
        FF.magmawardFuelBurned ? (dF = "burn", PF = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = AF, this.flareAt = AF) : null !== uF && hF > uF.fuel && (dF = "gain", this.pulseToken++, this.pulseAt = AF), bW && null !== uF && !uF.fullSet && (PF = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = AF, this.setLitAt = AF);
        const RF = yW.map(((FF, WF) => (CF[WF] && null !== uF && !uF.pieces[WF].worn && (this.wornTokens[WF]++, this.wornAt[WF] = AF), {
          itemName: FF,
          worn: CF[WF],
          wornToken: this.wornTokens[WF],
          justWorn: CF[WF] && this.isPlaying(this.wornAt[WF], AF)
        })));
        this.snapshot = {
          pieces: RF,
          wornCount: CF.filter(Boolean).length,
          fullSet: bW,
          fuel: hF,
          fuelState: hF <= 0 ? "empty" : hF <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, AF) ? dF : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, AF) ? PF : null,
          flareToken: this.flareToken,
          setLit: bW && this.isPlaying(this.setLitAt, AF),
          setLitToken: this.setLitToken
        }, this.Uu(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uu(null)
      }
      isPlaying(FF, WF) {
        return WF - FF < 1200
      }
    }
    const GC = "skyblockGlowtideView";
    class zA {
      constructor(FF) {
        this.Uu = FF, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = FF => {
          this.arrow = FF, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      xA(FF) {
        this.bloom = FF.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Uu(null))
      }
      afterRender(FF, WF) {
        const SF = this.bloom;
        if (null === SF || null === FF) return;
        const CF = SF.glowtideBloomX - FF[0],
          uF = SF.glowtideBloomZ - FF[2],
          hF = Math.hypot(CF, uF),
          bW = this.snapshot,
          dF = null !== bW && void 0 !== bW && bW.inRange ? 1 : 0,
          PF = hF <= 12.5 + dF && FF[1] - SF.glowtideBloomY <= 10 + dF;
        !PF || null !== bW && void 0 !== bW && bW.inRange || this.inRangeToken++;
        const RF = {
          colour: SF.glowtideBloomColour,
          inRange: PF,
          distance: Math.round(hF),
          inRangeToken: this.inRangeToken
        };
        (null === bW || RF.colour !== bW.colour || RF.inRange !== bW.inRange || !PF && RF.distance !== bW.distance) && (this.snapshot = RF, this.Uu(RF));
        const iW = AF.c.computeShortestRotation(WF, (0, AF.Gb)([CF, 0, uF]));
        null === this.arrow || Math.abs(iW - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${iW}rad)`, this.arrowTurn = iW)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Uu(null)
      }
    }
    const IC = "skyblockGlowMeterView";
    class fC {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uu = FF, this.now = WF, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      xA(FF) {
        const WF = this.now(),
          {
            glowMeterFill: SF,
            glowMeterCapacity: CF
          } = FF,
          AF = SF >= CF,
          uF = this.snapshot;
        null !== uF && (AF && !uF.full && (this.fullToken++, this.fullAt = WF), uF.full && !AF ? (this.burstToken++, this.burstAt = WF) : SF > uF.fill && (this.gainToken++, this.gainAt = WF)), this.snapshot = {
          fill: SF,
          ZF: CF,
          ratio: Math.min(1, Math.max(0, SF / CF)),
          full: AF,
          rares: FF.glowMeterRares,
          ready: AF && this.isPlaying(this.fullAt, WF),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, WF),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, WF),
          gainToken: this.gainToken
        }, this.Uu(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uu(null)
      }
      isPlaying(FF, WF) {
        return WF - FF < 2e3
      }
    }
    const yA = "skyblockHushWaitView";
    class sC {
      constructor(FF) {
        this.Uu = FF, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      xA(FF) {
        let {
          hushWaitMs: WF,
          hushWaitTotalMs: SF,
          hushWaitLines: CF
        } = FF;
        if (this.clearTimers(), this.token++, 0 === CF.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (WF <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: CF[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const AF = Math.max(null !== SF && void 0 !== SF ? SF : WF, WF),
          uF = AF - WF,
          hF = FF => AF * FF / CF.length,
          bW = FF => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: AF,
              elapsedMs: uF,
              line: CF[FF],
              lineIndex: FF
            })
          };
        let dF = 0;
        for (; dF + 1 < CF.length && hF(dF + 1) <= uF;) dF++;
        bW(dF);
        for (let PF = dF + 1; PF < CF.length; PF++) this.later(hF(PF) - uF, (() => {
          bW(PF)
        }));
        this.later(WF, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(FF) {
        this.snapshot = FF, this.Uu(FF)
      }
      later(FF, WF) {
        this.timers.push(setTimeout(WF, FF))
      }
      clearTimers() {
        for (const FF of this.timers) clearTimeout(FF);
        this.timers = []
      }
    }
    const nC = "skyblockTideChartsView",
      HC = 36e5,
      KC = 864e5;

    function wC(FF, WF, SF) {
      const [CF, AF, uF, hF] = FF.tideChartArea, bW = Math.floor(WF), dF = Math.floor(SF);
      return bW >= CF && bW <= uF && dF >= AF && dF <= hF
    }

    function XC(FF, WF, SF) {
      const [CF, AF, uF, hF] = FF.tideChartWater;
      return function(FF, WF, SF, CF, AF, uF) {
        const hF = 4 - sF(Math.floor(AF) - (FF - SF), SF);
        return 5 * sF(Math.floor(uF) - (WF - CF), CF) + hF
      }(CF, AF, uF, hF, WF, SF)
    }

    function UC(FF, WF, SF) {
      const CF = FF.tideCharts;
      for (let AF = 0; AF < CF.length; AF++)
        if (wC(CF[AF], WF, SF)) return CF[AF];
      return null
    }

    function BC(FF, WF, SF) {
      const CF = Math.max(0, WF - SF);
      return CF > KC ? FF("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(CF / KC))
      }) : CF > HC ? FF("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(CF / HC))
      }) : FF("skyblockGame:tideChartsTurnSoon")
    }
    class jA extends RF {
      constructor(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(FF, SF, CF), this.translate = WF, this.now = AF, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.lW = FF => {
          this.picked = FF, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        const WF = this.message;
        if (null !== WF)
          for (const CF of FF.tideCharts) {
            var SF;
            const FF = WF.tideCharts.find((FF => FF.tideChartIsland === CF.tideChartIsland)),
              AF = CF.tideChartLit & ~(null !== (SF = null === FF || void 0 === FF ? void 0 : FF.tideChartLit) && void 0 !== SF ? SF : 0);
            void 0 !== FF && 0 !== AF && (this.pulse = {
              island: CF.tideChartIsland,
              cells: AF,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = FF, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(FF, WF) {
        var SF;
        const CF = null === this.message || Number.isNaN(FF) ? null : UC(this.message, FF, WF),
          AF = null !== (SF = null === CF || void 0 === CF ? void 0 : CF.tideChartIsland) && void 0 !== SF ? SF : null,
          uF = null === CF ? -1 : function(FF, WF, SF) {
            const [CF, AF, uF, hF] = FF.tideChartWater;
            return function(FF, WF, SF, CF, AF, uF, hF) {
              return ((AF - FF) / (SF + hF)) ** 2 + ((uF - WF) / (CF + hF)) ** 2 <= 1
            }(CF, AF, uF, hF, WF, SF, 2) ? XC(FF, WF, SF) : -1
          }(CF, FF, WF);
        return (AF !== this.hereIsland || uF !== this.hereCell) && (this.hereIsland = AF, this.hereCell = uF, null !== AF && (this.lastIsland = AF), !0)
      }
      afterRender(FF) {
        if (null === this.message) return;
        this.lastX = null === FF ? Number.NaN : FF[0], this.lastZ = null === FF ? Number.NaN : FF[2];
        const WF = this.locate(this.lastX, this.lastZ),
          SF = this.expirePulses();
        (WF || SF || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const FF = this.now();
        return !(!this.open || FF - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = FF, BC(this.translate, this.message.tideChartTurnsInMs, FF - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(FF, WF) {
        const SF = null === this.message ? null : UC(this.message, FF, WF);
        if (null === SF) return;
        const CF = XC(SF, FF, WF);
        0 === (SF.tideChartPreBlank & 1 << CF) && (this.cast = {
          island: SF.tideChartIsland,
          cell: CF,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const FF = this.now();
        let WF = !1;
        return 0 !== this.pulse.cells && FF - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, WF = !0), null !== this.cast && FF - this.cast.atMs >= 1500 && (this.cast = null, WF = !0), WF
      }
      setTranslator(FF) {
        this.translate = FF, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(FF, WF) {
        var SF;
        return null !== (SF = FF.tideCharts.find((FF => FF.tideChartIsland === WF))) && void 0 !== SF ? SF : null
      }
      describe(FF) {
        var WF, SF, CF;
        const AF = FF.tideChartIsland,
          uF = [];
        for (let EF = 0; EF < 25; EF++) {
          const WF = 1 << EF;
          0 !== (FF.tideChartLit & WF) ? uF.push("lit") : 0 !== (FF.tideChartClear & WF) ? uF.push("clear") : 0 !== (FF.tideChartPreBlank & WF) ? uF.push("shore") : uF.push("water")
        }
        const hF = function(FF) {
            let WF = 0;
            for (let SF = FF >>> 0; 0 !== SF; SF &= SF - 1) WF++;
            return WF
          }(FF.tideChartLit),
          bW = FF.tideChartInkCount,
          dF = this.translate(FF.tideChartIslandNameKey),
          PF = this.translate("skyblockGame:tideChartsLit", {
            lit: String(hF),
            ink: String(bW)
          }),
          RF = null === FF.tideChartPictureNameKey ? null : this.translate(FF.tideChartPictureNameKey),
          iW = this.hereIsland === AF && -1 !== this.hereCell ? this.hereCell : null,
          eF = [`${dF}: ${PF}.`];
        if (null !== RF && eF.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: RF
          })), null !== iW) {
          const FF = Math.floor(iW / 5) + 1,
            WF = iW % 5 + 1;
          eF.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(FF),
            column: String(WF)
          }))
        }
        return {
          island: AF,
          islandName: dF,
          cells: uF,
          hereCell: iW,
          lit: hF,
          ink: bW,
          litText: PF,
          pictureName: RF,
          gridLabel: eF.join(" "),
          pulseCells: this.pulse.island === AF ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (WF = this.cast) || void 0 === WF ? void 0 : WF.island) === AF ? this.cast.cell : null,
          castToken: null !== (SF = null === (CF = this.cast) || void 0 === CF ? void 0 : CF.token) && void 0 !== SF ? SF : 0
        }
      }
      buildSnapshot() {
        var FF, WF, SF;
        const CF = this.message;
        if (null === CF || 0 === CF.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const AF = this.findChart(CF, this.hereIsland),
          uF = null !== (FF = null !== (WF = null !== (SF = this.findChart(CF, this.open ? this.picked : null)) && void 0 !== SF ? SF : AF) && void 0 !== WF ? WF : this.findChart(CF, this.lastIsland)) && void 0 !== FF ? FF : CF.tideCharts[0],
          hF = null === AF ? null : this.describe(AF);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: hF,
          card: uF === AF ? hF : this.describe(uF),
          turnsText: BC(this.translate, CF.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(CF.tideChartBookCount)
          }),
          tabs: CF.tideCharts.map((FF => ({
            island: FF.tideChartIsland,
            name: this.translate(FF.tideChartIslandNameKey),
            selected: FF.tideChartIsland === uF.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const vA = "skyblockRegularsView",
      JC = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      pC = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function lC(FF, WF) {
      return "given" === FF ? WF.given : "owed" === FF ? WF.owed : WF.goal
    }
    class FA extends RF {
      constructor(FF, WF, SF, CF) {
        super(FF, SF, CF), this.translate = WF, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = FF => FF, this.openIsland = FF => {
          this.selected = FF, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = FF => {
          this.selected = FF, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        this.message = FF, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const FF = this.openedFromReachLog;
        return this.openedFromReachLog = !1, FF
      }
      setTranslator(FF, WF, SF) {
        this.translate = FF, void 0 !== SF && (this.itemName = SF), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(FF, WF, SF) {
        return {
          text: this.translate(lC(FF, WF), SF),
          given: "given" === FF
        }
      }
      describeRegular(FF, WF) {
        const SF = this.translate,
          CF = null !== FF.regularKg,
          AF = FF.regularMeetings,
          uF = CF ? 0 === AF ? SF("skyblockGame:regularsNotMet") : 1 === AF ? SF("skyblockGame:regularsMeetingsOne") : SF("skyblockGame:regularsMeetings", {
            count: AF
          }) : "";
        return {
          id: FF.regularId,
          name: SF(FF.regularNameKey),
          line: SF(FF.regularLineKey),
          itemName: FF.regularFishItem,
          fishName: this.itemName(FF.regularFishItem),
          tagged: CF,
          size: null === FF.regularKg ? SF("skyblockGame:regularsNotTagged") : SF("skyblockGame:regularsSize", {
            kg: FF.regularKg.toFixed(1)
          }),
          meetings: uF,
          chance: SF("skyblockGame:regularsChance", {
            count: FF.regularOneInCasts
          }),
          resting: FF.regularRestingToday,
          gifts: [{
            text: SF("skyblockGame:regularsGiftFlare"),
            given: AF >= 3
          }, this.describeGift(FF.regularTintGift, JC, {
            tint: SF(FF.regularTintNameKey)
          })],
          history: [...FF.regularHistory].reverse().map((FF => {
            const CF = FF.regularMeetingKg.toFixed(1),
              AF = WF - FF.regularMeetingDay;
            return AF <= 0 ? SF("skyblockGame:regularsToday", {
              kg: CF
            }) : SF("skyblockGame:regularsDaysAgo", {
              days: AF,
              kg: CF
            })
          }))
        }
      }
      describeIsland(FF, WF) {
        return {
          id: FF.regularsIslandId,
          name: this.translate(FF.regularsIslandNameKey),
          charm: this.describeGift(FF.regularsCharmGift, pC, {
            charm: this.translate(FF.regularsCharmNameKey)
          }),
          regulars: FF.regularsList.map((FF => this.describeRegular(FF, WF)))
        }
      }
      buildSnapshot() {
        var FF, WF, SF, CF;
        const AF = this.message;
        if (null === AF) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const uF = AF.regularsIslands.map((FF => this.describeIsland(FF, AF.regularsToday))),
          hF = null !== (FF = null !== (WF = null === (SF = uF.find((FF => FF.id === this.selected))) || void 0 === SF ? void 0 : SF.id) && void 0 !== WF ? WF : null === (CF = uF[0]) || void 0 === CF ? void 0 : CF.id) && void 0 !== FF ? FF : "";
        return {
          enabled: !0,
          open: this.open,
          selected: hF,
          islands: uF
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const WA = "skyblockHiddenWatersView";
    class SA {
      constructor(FF) {
        this.Uu = FF, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      xA(FF) {
        this.snapshot = function(FF) {
          const [WF, SF] = FF.hiddenWatersMapSize, CF = (FF, CF) => ({
            left: 1 - FF / WF,
            top: CF / SF
          }), AF = new Map;
          for (const [hF, bW] of FF.hiddenWatersGlimpses) {
            var uF;
            const FF = null !== (uF = AF.get(hF)) && void 0 !== uF ? uF : [];
            FF.push(bW), AF.set(hF, FF)
          }
          return {
            found: FF.hiddenWatersFound,
            total: FF.hiddenWatersTotal,
            aspect: SF / WF,
            pins: FF.hiddenWatersPins.map((FF => {
              let [WF, SF] = FF;
              return CF(WF, SF)
            })),
            islands: FF.hiddenWatersIslands.map((FF => {
              let [AF, uF, hF, bW] = FF;
              const {
                left: dF,
                top: PF
              } = CF(hF + 1, uF);
              return {
                left: dF,
                top: PF,
                width: (hF + 1 - AF) / WF,
                height: (bW + 1 - uF) / SF
              }
            })),
            glimpses: AF
          }
        }(FF), this.Uu(this.snapshot)
      }
    }
    const CA = "skyblockDialogueView";
    class AA extends RF {
      constructor(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(FF, SF, CF), this.translate = WF, this.requestDialogue = AF, this.now = uF, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = FF => {
          this.selection = {
            kind: "quest",
            questId: FF
          }, this.request(), this.show()
        }, this.selectCharacter = FF => {
          this.selection = {
            kind: "character",
            npcId: FF
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      xA(FF) {
        this.received = !0, this.scripts = FF.questDialogueScripts, this.speakers = new Map(FF.questDialogueSpeakers.map((FF => [FF.dialogueSpeakerId, FF]))), this.emit()
      }
      setTranslator(FF) {
        this.translate = FF, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const FF = this.now();
        FF >= this.requestAvailableAt && (this.requestAvailableAt = FF + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var FF;
        const WF = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...WF,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const SF = this.selection;
        if ("quest" === SF.kind) {
          const FF = this.scripts.find((FF => FF.dialogueQuestId === SF.questId));
          return {
            ...WF,
            characters: [],
            questFocus: SF.questId,
            conversations: FF ? [this.conversation(FF)] : []
          }
        }
        const CF = [];
        for (let uF = this.scripts.length - 1; uF >= 0; uF--) {
          const FF = this.scripts[uF].dialogueLines;
          for (let WF = FF.length - 1; WF >= 0; WF--) CF.includes(FF[WF].dialogueSpeakerId) || CF.push(FF[WF].dialogueSpeakerId)
        }
        const AF = null !== SF.npcId && CF.includes(SF.npcId) ? SF.npcId : null !== (FF = CF[0]) && void 0 !== FF ? FF : null;
        return {
          ...WF,
          characters: CF.map((FF => {
            var WF, SF;
            return {
              id: FF,
              styling: null !== (WF = null === (SF = this.speakers.get(FF)) || void 0 === SF ? void 0 : SF.dialogueSpeakerStyling) && void 0 !== WF ? WF : FF,
              selected: FF === AF
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((FF => FF.dialogueLines.some((FF => FF.dialogueSpeakerId === AF)))).map((FF => this.conversation(FF))).reverse()
        }
      }
      conversation(FF) {
        let WF = null;
        return {
          questId: FF.dialogueQuestId,
          questName: this.translate(FF.dialogueQuestNameKey),
          completed: FF.dialogueQuestCompleted,
          lines: FF.dialogueLines.map(((FF, SF) => {
            var CF;
            const AF = FF.dialogueSpeakerId === WF || null === (CF = this.speakers.get(FF.dialogueSpeakerId)) || void 0 === CF ? void 0 : CF.dialogueSpeakerStyling;
            return WF = FF.dialogueSpeakerId, {
              key: SF,
              display: {
                line: {
                  translationKey: FF.dialogueLineKey,
                  params: this.params(FF.dialogueLineParams)
                },
                speakerName: AF,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(FF) {
        if (void 0 !== FF) return Object.fromEntries(Object.entries(FF).map((FF => {
          let [WF, SF] = FF;
          return [WF, "string" === typeof SF ? SF : this.translate(SF.translationKey)]
        })))
      }
    }
    var uA = SF(553),
      hA = SF(1126),
      bu = SF(89);
    const dA = "skyblockAutographsView";

    function PA(FF) {
      const WF = uA.n[FF];
      return {
        label: WF.chatTag.map((FF => FF.str)).join(""),
        icon: WF.icon,
        colour: WF.mainRGB
      }
    }
    class RA extends RF {
      constructor(FF) {
        let WF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = WF, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      xA(FF) {
        this.signatures = FF.autographSignatures, FF.autographOpen ? this.show() : this.emit()
      }
      setTranslator(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = WF, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var FF;
        const WF = null !== (FF = this.signatures) && void 0 !== FF ? FF : [],
          SF = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          CF = [...WF].sort(((FF, WF) => Number(null !== WF.autographRank) - Number(null !== FF.autographRank) || WF.autographSignedAtMs - FF.autographSignedAtMs)).map((FF => ({
            key: `${FF.autographSignedAtMs}|${FF.autographSignerName}`,
            name: (0, hA.c)(FF.autographSignerName, !bu.featureFlags.canSeeRealPlayerNames),
            rank: null === FF.autographRank ? null : PA(FF.autographRank),
            signedOn: SF.format(FF.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: CF,
          total: CF.length,
          rankTotal: CF.filter((FF => null !== FF.rank)).length
        }
      }
    }
    const iu = "skyblockHudView",
      eA = () => {},
      EA = {
        getItem: () => null,
        setItem: eA,
        removeItem: eA
      };
    class QA {
      constructor(FF) {
        let {
          translate: WF,
          translateWithIcons: SF,
          setMenuOpen: CF = eA,
          dismissMenu: AF = () => {
            CF(!1)
          },
          publishSkills: uF = eA,
          publishQuests: hF = eA,
          publishQuestNotification: bW = eA,
          publishDungeons: dF = eA,
          publishCollections: PF = eA,
          publishMap: RF = eA,
          publishHud: iW = eA,
          publishPortalTransit: EF = eA,
          publishDailyReward: QF = eA,
          publishMailbox: rW = eA,
          publishQuestGraph: gW = eA,
          publishForge: tW = eA,
          publishSmuggler: TF = eA,
          publishKeepersChair: aW = eA,
          publishReachLog: kW = eA,
          publishLampLight: qW = eA,
          publishMagmaward: NF = eA,
          publishGlowtide: DF = eA,
          publishGlowMeter: LF = eA,
          publishHushWait: mW = eA,
          publishPassage: OF = eA,
          publishTideCharts: xW = eA,
          publishRegulars: ZF = eA,
          publishHiddenWaters: oF = eA,
          publishDialogue: YF = eA,
          publishAutographs: MF = eA,
          isLoadingScreenUp: cW = () => !1,
          onDailyRewardCoinLanded: GF = eA,
          onDailyRewardStarted: zW = eA,
          onDailyRewardFinished: IF = eA,
          onDailyRewardItemLanded: fF = eA,
          onMailboxStarted: yW = eA,
          journeyStorage: sF = EA,
          requestTracking: nF = eA,
          requestTravel: HF = eA,
          requestDungeonEnter: KF = eA,
          requestQuestJump: wF = eA,
          requestQuestArrive: XF = eA,
          requestForge: UF = eA,
          requestSmuggle: BF = eA,
          requestKeepersChairAim: jW = eA,
          requestReachLogOpen: vW = eA,
          requestLampLight: JF = eA,
          requestDialogue: pF = eA
        } = FF;
        this.navigation = void 0, this.map = void 0, this.compass = new VF, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new qA, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = FF => FF, this.close = () => {
          for (const FF of this.panels) FF.close()
        }, this.setMenuOpen = CF, this.publishHud = iW, this.portalTransit = new GS(EF, sF), this.magmaward = new cA(NF), this.glowtide = new zA(DF), this.glowMeter = new fC(LF), this.hushWait = new sC(mW), this.dailyReward = new fS(QF, (() => cW() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (FF => {
          this.quests.setNotificationsHeld(FF)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), GF, zW, IF, fF);
        const lF = FF => {
          this.panels.some((FF => FF.isOpen())) || (FF ? AF() : this.setMenuOpen(!1))
        };
        this.skills = new SS(uF, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), WF, void 0, void 0, lF), this.quests = new bC(hF, nF, WF, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, lF, bW), this.dungeons = new RS(dF, WF, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, lF, KF), this.collections = new YS(PF, WF, (() => {
          this.beforePanelOpen(this.collections)
        }), lF), this.map = new eF(RF, HF, WF, (() => {
          this.beforePanelOpen(this.map)
        }), lF), this.questGraph = new BS(gW, WF, (() => {
          this.beforePanelOpen(this.questGraph)
        }), lF, wF, XF, sF), this.forge = new eC(tW, WF, (() => {
          this.beforePanelOpen(this.forge)
        }), lF, UF), this.smuggler = new rA(TF, WF, (() => {
          this.beforePanelOpen(this.smuggler)
        }), lF, BF), this.lampLight = new YC(qW, WF, JF, this.commandPacer), this.keepersChair = new NC(aW, WF, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (FF => {
          this.lampLight.onChairClosed(), lF(FF)
        }), jW, Date.now, this.commandPacer), this.reachLog = new ZC(kW, WF, (() => {
          this.beforePanelOpen(this.reachLog)
        }), lF, vW, this.commandPacer), this.passage = new kA(OF, WF, (() => {
          this.beforePanelOpen(this.passage)
        }), lF), this.tideCharts = new jA(xW, WF, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), lF), this.regulars = new FA(ZF, WF, (() => {
          this.beforePanelOpen(this.regulars)
        }), (FF => {
          this.regulars.takeReturnToReachLog() && !FF && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), lF(FF)
        })), this.hiddenWaters = new SA(oF), this.dialogue = new AA(YF, WF, (() => {
          this.beforePanelOpen(this.dialogue)
        }), lF, pF), this.autographs = new RA(MF, (() => {
          this.beforePanelOpen(this.autographs)
        }), lF), this.mailbox = new HS(rW, (() => cW() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), yW), this.quests.translateWithIcons = null !== SF && void 0 !== SF ? SF : null, this.skills.onLevelUp = FF => {
          this.quests.notify(FF)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new FS(this.map, this.quests, this.compass, WF)
      }
      getHudSnapshot() {
        const FF = this.hudSnapshot,
          WF = this.dailyReward.getHeldCoins();
        return null === FF || WF <= 0 || !("hudPurseCoins" in FF) ? FF : {
          ...FF,
          hudPurseCoins: Math.max(0, FF.hudPurseCoins - WF)
        }
      }
      receiveHud(FF) {
        this.hudSnapshot = FF, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(FF) {
        this.setMenuOpen(!0);
        const WF = FF === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = FF;
        for (const SF of this.panels) SF === FF || WF && SF === this.reachLog || SF.close();
        this.openingPanel = null
      }
      setTranslator(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WF => this.resolveItemName(WF, FF);
        this.quests.translateWithIcons = null !== SF && void 0 !== SF ? SF : null, this.navigation.setTranslator(FF, WF), this.lampLight.setTranslator(FF, WF), this.mailbox.setItemName(CF);
        for (const AF of this.panels) AF.setTranslator(FF, WF, CF)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const FF of this.panels) FF.dispose()
      }
    }
    var ru = SF(918),
      gu = SF.n(ru),
      tu = SF(11),
      TA = SF(35122),
      au = SF(1563),
      ku = SF(1546),
      qu = SF(8222),
      VA = SF(1046),
      NA = SF(1262),
      DA = SF(971);

    function LA(FF) {
      let {
        controller: WF,
        minimap: SF,
        children: CF
      } = FF;
      const uF = (0, NA.i)(iu, WF.getHudSnapshot()),
        [hF, bW] = (0, DF.useState)(WF.skills.getSnapshot().overallLevel);
      (0, NA.e)(WS, (FF => {
        bW(FF.overallLevel)
      }));
      const dF = (0, DF.useRef)(null);
      (0, NA.e)(IS, (FF => {
        ! function(FF, WF) {
          if (null === FF || "function" !== typeof FF.animate) return;
          const SF = WF ? 1.35 : 1.15;
          FF.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${SF})`
          }, {
            transform: "scale(1)"
          }], {
            duration: WF ? 320 : 160,
            easing: "ease-out"
          }), FF.classList.toggle("Receiving", !WF), WF && (FF.classList.remove("Shine"), FF.offsetWidth, FF.classList.add("Shine"))
        }(dF.current, FF)
      }));
      const {
        t: PF
      } = (0, VA.B)(), {
        isTouchScreen: RF
      } = (0, tu.d)(["isTouchScreen"]);
      return null !== uF || SF ? (0, DA.jsx)(TA.e, {
        placement: "topRight",
        children: (0, DA.jsxs)("div", {
          className: gu()("SkyblockRightHud", {
            TouchScreen: RF
          }),
          children: [SF, null !== uF && (0, DA.jsxs)("div", {
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in uF ? (0, DA.jsx)("div", {
              className: "SkyblockHudHelp",
              children: uF.hudHelpText
            }) : (0, DA.jsxs)(DA.Fragment, {
              children: [(0, DA.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, DA.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, DA.jsx)("strong", {
                    style: {
                      color: AF.D.cyanUiText
                    },
                    children: PF(uF.hudZoneNameKey)
                  }), null !== hF && (0, DA.jsx)("span", {
                    style: {
                      color: AF.D.goldUiText
                    },
                    children: PF("skyblockGame:level", {
                      level: (0, qu.f)(hF)
                    })
                  })]
                }), (0, DA.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: dF,
                  children: [(0, DA.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, DA.jsx)(au.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, qu.f)(uF.hudPurseCoins)]
                })]
              }), uF.hudClockText.length > 0 && (0, DA.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, DA.jsx)(ku.d, {
                  text: uF.hudClockText
                })
              })]
            }), CF, "hudZoneNameKey" in uF && (0, DA.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function mu(FF) {
      let {
        icon: WF
      } = FF;
      const SF = (0, DF.useCallback)((FF => {
        null === FF || void 0 === FF || FF.replaceChildren(nW(WF))
      }), [WF]);
      return (0, DA.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: SF
      })
    }

    function OA(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)();
      return (0, DA.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: WF.display.mountPlayer,
        title: SF("skyblockGame:mapYouAreHere"),
        children: (0, DA.jsx)(mu, {
          icon: "player"
        })
      })
    }
    const xu = SF(36958),
      ZA = Object.fromEntries(xu.keys().map((FF => [FF.replace(/^\.\/(.*)\.png$/, "$1"), xu(FF)])));

    function oA(FF, WF) {
      var SF;
      return null !== (SF = ZA[FF]) && void 0 !== SF ? SF : ZA[WF]
    }

    function YA(FF) {
      let {
        imageKey: WF,
        fallbackImageKey: SF,
        geometryKey: CF,
        alt: AF,
        className: uF
      } = FF;
      const [hF, bW] = (0, DF.useState)((() => function(FF, WF) {
        return [{
          id: 0,
          imageKey: FF,
          geometryKey: WF,
          phase: "shown"
        }]
      }(WF, CF))), dF = function(FF, WF, SF) {
        const CF = FF[FF.length - 1];
        if (CF.imageKey === WF && CF.geometryKey === SF) return FF;
        const AF = {
          id: CF.id + 1,
          imageKey: WF,
          geometryKey: SF,
          phase: "entering"
        };
        return CF.geometryKey === SF ? [{
          ...CF,
          phase: "leaving"
        }, AF] : [AF]
      }(hF, WF, CF);
      return dF !== hF && bW(dF), (0, DA.jsx)(DA.Fragment, {
        children: dF.map((FF => (0, DA.jsx)("img", {
          className: gu()("SkyblockMapTerrainImage", uF, {
            Entering: "entering" === FF.phase,
            Leaving: "leaving" === FF.phase
          }),
          src: oA(FF.imageKey, SF),
          alt: "leaving" === FF.phase ? "" : AF,
          onAnimationEnd: () => {
            bW((WF => function(FF, WF) {
              return FF.flatMap((FF => FF.id !== WF ? [FF] : "leaving" === FF.phase ? [] : [{
                ...FF,
                phase: "shown"
              }]))
            }(WF, FF.id)))
          }
        }, FF.id)))
      })
    }
    var MA = SF(3616),
      cu = SF(1266);

    function GA(FF) {
      if ("Tab" !== FF.key) return;
      const WF = Array.from(FF.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        SF = WF.indexOf(document.activeElement);
      var CF;
      if (FF.shiftKey && SF <= 0) FF.preventDefault(), null === (CF = WF.at(-1)) || void 0 === CF || CF.focus();
      else if (!FF.shiftKey && (-1 === SF || SF === WF.length - 1)) {
        var AF;
        FF.preventDefault(), null === (AF = WF[0]) || void 0 === AF || AF.focus()
      }
    }

    function zu() {
      const FF = (0, DF.useRef)(null);
      return (0, DF.useCallback)((WF => {
        var SF;
        WF ? (FF.current = document.activeElement, WF.focus()) : null === (SF = FF.current) || void 0 === SF || SF.focus()
      }), [])
    }

    function IA(FF) {
      let {
        percent: WF,
        label: SF,
        levelUpToken: CF,
        colour: AF
      } = FF;
      return (0, DA.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": SF,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": WF,
        "aria-valuetext": SF,
        children: [(0, DA.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${WF/100})`
          }
        }), null !== CF && void 0 !== CF && (0, DA.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": AF
          }
        }, CF)]
      })
    }

    function fA(FF) {
      let {
        mount: WF
      } = FF;
      return (0, DA.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: WF,
        hidden: !0,
        children: (0, DA.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, DA.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, DA.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function yu(FF, WF, SF, CF) {
      (0, DF.useLayoutEffect)((() => {
        const AF = FF.current;
        if (!SF || null === WF || void 0 === WF || !WF.local || !AF) return;
        const uF = Array.from(AF.querySelectorAll(".SkyblockMapNode")),
          hF = [...WF.points, ...WF.portals],
          bW = () => {
            const FF = AF.clientWidth,
              SF = AF.clientHeight,
              bW = uF.map(((AF, uF) => {
                const bW = hF[uF];
                return {
                  id: bW.id,
                  portal: uF >= WF.points.length,
                  x: bW.position[0] * FF / 100,
                  y: bW.position[1] * SF / 100,
                  width: AF.offsetWidth / CF,
                  height: AF.offsetHeight / CF
                }
              })),
              dF = new Map(hF.map(((FF, WF) => [FF.id, uF[WF]])));
            for (const WF of function(FF, WF, SF) {
                const CF = [],
                  AF = [...FF].sort(((FF, WF) => Number(WF.portal) - Number(FF.portal) || FF.id.localeCompare(WF.id)));
                for (const uF of AF) {
                  const FF = FF => Math.max(uF.width / 2, Math.min(WF - uF.width / 2, FF)),
                    AF = FF => Math.max(uF.height / 2, Math.min(SF - uF.height / 2, FF)),
                    hF = [FF(uF.x)],
                    bW = [AF(uF.y)];
                  for (const WF of CF) hF.push(FF(WF.x - (WF.width + uF.width) / 2 - 4), FF(WF.x + (WF.width + uF.width) / 2 + 4)), bW.push(AF(WF.y - (WF.height + uF.height) / 2 - 4), AF(WF.y + (WF.height + uF.height) / 2 + 4));
                  let dF = {
                      ...uF,
                      x: hF[0],
                      y: bW[0]
                    },
                    PF = 1 / 0,
                    RF = 1 / 0;
                  for (const WF of new Set(hF))
                    for (const FF of new Set(bW)) {
                      let SF = 0;
                      for (const hF of CF) SF += Math.max(0, (uF.width + hF.width) / 2 + 4 - Math.abs(WF - hF.x)) * Math.max(0, (uF.height + hF.height) / 2 + 4 - Math.abs(FF - hF.y));
                      const AF = (WF - uF.x) ** 2 + (FF - uF.y) ** 2;
                      (SF < PF || SF === PF && AF < RF) && (dF = {
                        ...uF,
                        x: WF,
                        y: FF
                      }, PF = SF, RF = AF)
                    }
                  CF.push(dF)
                }
                return CF
              }(bW, FF, SF)) {
              const FF = dF.get(WF.id);
              FF.style.left = `${WF.x}px`, FF.style.top = `${WF.y}px`
            }
          };
        bW();
        const dF = new ResizeObserver(bW);
        dF.observe(AF);
        for (const FF of uF) dF.observe(FF);
        return () => {
          dF.disconnect()
        }
      }), [FF, WF, SF, CF])
    }
    const sA = {
        zoom: 1,
        x: 0,
        y: 0
      },
      nA = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function HA(FF, WF, SF) {
      return Math.min(SF, Math.max(WF, FF))
    }

    function KA(FF, WF, SF) {
      const CF = Math.min(1, SF * WF / FF),
        AF = Math.min(1, FF / (SF * WF));
      return {
        x0: (1 - CF) / 2,
        y0: (1 - AF) / 2,
        x1: (1 + CF) / 2,
        y1: (1 + AF) / 2
      }
    }

    function wA(FF, WF, SF, CF) {
      const AF = WF * (CF - SF);
      if (AF <= 1) return .5 - WF * (SF + CF) / 2;
      const uF = .45 * Math.min(1, AF - 1);
      return HA(FF, 1 - WF * CF - uF, uF - WF * SF)
    }

    function XA(FF, WF) {
      const SF = HA(FF.zoom, 1, 12);
      return {
        zoom: SF,
        x: wA(FF.x, SF, WF.x0, WF.x1),
        y: wA(FF.y, SF, WF.y0, WF.y1)
      }
    }

    function UA(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nA;
      const uF = HA(FF.zoom * WF, 1, 12),
        hF = uF / FF.zoom;
      return XA({
        zoom: uF,
        x: SF - (SF - FF.x) * hF,
        y: CF - (CF - FF.y) * hF
      }, AF)
    }

    function BA(FF, WF, SF, CF) {
      const [AF, uF] = (0, DF.useState)(sA);
      (0, DF.useEffect)((() => {
        uF(sA)
      }), [SF]), (0, DF.useEffect)((() => {
        const SF = FF.current;
        if (!WF || !SF) return;
        const AF = () => KA(SF.clientWidth, SF.clientHeight, CF),
          hF = FF => {
            const WF = SF.getBoundingClientRect();
            return {
              x: (FF.clientX - WF.left) / WF.width,
              y: (FF.clientY - WF.top) / WF.height
            }
          },
          bW = new Map;
        let dF = {
            x: 0,
            y: 0
          },
          PF = !1,
          RF = 0;
        const iW = FF => {
            FF.preventDefault();
            const WF = FF.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * FF.deltaY : FF.deltaY,
              SF = hF(FF);
            uF((FF => UA(FF, Math.exp(.0015 * -WF), SF.x, SF.y, AF())))
          },
          eF = FF => {
            "mouse" === FF.pointerType && 0 !== FF.button || (bW.set(FF.pointerId, hF(FF)), 1 === bW.size && (dF = {
              x: FF.clientX,
              y: FF.clientY
            }, PF = !1), RF = 0)
          },
          EF = FF => {
            const WF = bW.get(FF.pointerId);
            if (!WF) return;
            const CF = hF(FF);
            if (bW.set(FF.pointerId, CF), 2 === bW.size) {
              const [FF, WF] = [...bW.values()], SF = Math.hypot(FF.x - WF.x, FF.y - WF.y);
              if (RF > 0) {
                const CF = SF / RF;
                uF((SF => UA(SF, CF, (FF.x + WF.x) / 2, (FF.y + WF.y) / 2, AF())))
              }
              return RF = SF, void(PF = !0)
            }!PF && Math.hypot(FF.clientX - dF.x, FF.clientY - dF.y) < 4 || (PF || (PF = !0, SF.setPointerCapture(FF.pointerId)), uF((FF => function(FF, WF, SF) {
              let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nA;
              return XA({
                zoom: FF.zoom,
                x: FF.x + WF,
                y: FF.y + SF
              }, CF)
            }(FF, CF.x - WF.x, CF.y - WF.y, AF()))))
          },
          QF = FF => {
            bW.delete(FF.pointerId), RF = 0
          },
          rW = FF => {
            PF && (FF.stopPropagation(), FF.preventDefault(), PF = !1)
          },
          gW = new ResizeObserver((() => {
            uF((FF => XA(FF, AF())))
          }));
        return gW.observe(SF), SF.addEventListener("wheel", iW, {
          passive: !1
        }), SF.addEventListener("pointerdown", eF), SF.addEventListener("pointermove", EF), SF.addEventListener("pointerup", QF), SF.addEventListener("pointercancel", QF), SF.addEventListener("click", rW, !0), () => {
          gW.disconnect(), SF.removeEventListener("wheel", iW), SF.removeEventListener("pointerdown", eF), SF.removeEventListener("pointermove", EF), SF.removeEventListener("pointerup", QF), SF.removeEventListener("pointercancel", QF), SF.removeEventListener("click", rW, !0)
        }
      }), [FF, WF, SF, CF]);
      return {
        view: AF,
        zoomBy: WF => {
          const SF = FF.current;
          SF && uF((FF => UA(FF, WF, .5, .5, KA(SF.clientWidth, SF.clientHeight, CF))))
        }
      }
    }

    function ju(FF) {
      var WF, SF, CF, AF;
      let {
        controller: uF,
        navigation: hF
      } = FF;
      const bW = (0, NA.i)(iW, uF.getSnapshot()),
        {
          t: dF
        } = (0, VA.B)(),
        PF = zu(),
        RF = bW.presentation,
        eF = (0, DF.useRef)(null),
        EF = (0, DF.useRef)(null),
        QF = Boolean(bW.open && (null === RF || void 0 === RF ? void 0 : RF.local) && RF.background),
        rW = BA(eF, QF, `${bW.open}|${bW.tab}|${null===RF||void 0===RF||null===(WF=RF.background)||void 0===WF?void 0:WF.geometryKey}`, null !== (SF = null === RF || void 0 === RF || null === (CF = RF.background) || void 0 === CF ? void 0 : CF.ratio) && void 0 !== SF ? SF : 2);
      if (yu(EF, RF, bW.open, rW.view.zoom), !RF || !bW.open) return null;
      const gW = RF.local ? RF.background : null,
        tW = {
          "--map-ratio": String(null !== (AF = null === gW || void 0 === gW ? void 0 : gW.ratio) && void 0 !== AF ? AF : 2),
          backgroundColor: null === gW || void 0 === gW ? void 0 : gW.colour
        },
        TF = {
          "--map-zoom": String(rW.view.zoom),
          transform: `translate(${100*rW.view.x}%, ${100*rW.view.y}%) scale(${rW.view.zoom})`
        };
      return (0, DA.jsx)(MA.b, {
        show: bW.open,
        close: uF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: PF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, DA.jsx)("h2", {
                id: "skyblockMapTitle",
                children: dF("skyblockGame:map")
              }), RF.minimap && (0, DA.jsx)("p", {
                children: RF.minimap.caption
              })]
            }), (0, DA.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((FF => (0, DA.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": FF === bW.tab ? "true" : void 0,
                className: gu()({
                  Selected: FF === bW.tab
                }),
                "aria-pressed": FF === bW.tab,
                onClick: () => {
                  uF.selectTab(FF)
                },
                children: dF("local" === FF ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, FF)))
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: uF.dismiss
            })]
          }), (0, DA.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, DA.jsxs)("div", {
              ref: eF,
              className: gu()("SkyblockMapCanvas", {
                Local: RF.local,
                Overview: !RF.local,
                Zoomed: rW.view.zoom > 1
              }),
              style: tW,
              children: [(0, DA.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: QF ? TF : void 0,
                children: (0, DA.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: EF,
                  children: [gW && (0, DA.jsx)(YA, {
                    className: "SkyblockMapTerrain",
                    imageKey: gW.imageKey,
                    fallbackImageKey: gW.fallbackImageKey,
                    geometryKey: gW.geometryKey,
                    alt: gW.label
                  }), RF.local && (0, DA.jsx)(fA, {
                    mount: hF.display.mountMapSearchArea
                  }), !RF.local && (0, DA.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: RF.connections.map((FF => (0, DA.jsx)("line", {
                      className: gu()({
                        Explored: FF.explored
                      }),
                      x1: FF.start[0],
                      y1: FF.start[1],
                      x2: FF.end[0],
                      y2: FF.end[1]
                    }, FF.id)))
                  }), RF.points.map((FF => {
                    const WF = !RF.local && FF.thumbnail ? ZA[FF.thumbnail] : void 0;
                    return (0, DA.jsxs)("div", {
                      className: gu()("SkyblockMapNode", {
                        Current: FF.current
                      }),
                      style: {
                        left: `${FF.position[0]}%`,
                        top: `${FF.position[1]}%`
                      },
                      children: [(0, DA.jsxs)(cu.e, {
                        className: gu()("SkyblockMapPin", {
                          Unknown: !FF.visited,
                          Current: FF.current
                        }),
                        disabled: bW.pending,
                        onClick: () => {
                          uF.travel(FF.travelKind, FF.travelId)
                        },
                        children: [WF && (0, DA.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: WF,
                          alt: ""
                        }), !WF && (0, DA.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, DA.jsx)(mu, {
                            icon: FF.icon
                          })
                        }), (0, DA.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: FF.name
                        })]
                      }), FF.current && (0, DA.jsx)("span", {
                        className: gu()("SkyblockMapHereBadge", {
                          Above: FF.position[1] > 50
                        }),
                        children: dF("skyblockGame:mapYouAreHere")
                      })]
                    }, FF.id)
                  })), RF.portals.map((FF => (0, DA.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${FF.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${FF.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, DA.jsxs)(cu.e, {
                      className: "SkyblockMapPin",
                      disabled: bW.pending,
                      onClick: () => {
                        uF.travel(FF.travelKind, FF.travelId)
                      },
                      children: [(0, DA.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: FF.colour
                        },
                        "aria-hidden": "true",
                        children: (0, DA.jsx)(mu, {
                          icon: FF.icon
                        })
                      }), (0, DA.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: FF.name
                      })]
                    })
                  }, FF.id))), RF.local && (0, DA.jsx)(OA, {
                    controller: hF
                  })]
                })
              }), QF && (0, DA.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, DA.jsx)("button", {
                  type: "button",
                  "aria-label": dF("skyblockGame:mapZoomIn"),
                  disabled: rW.view.zoom >= 12,
                  onClick: () => {
                    rW.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, DA.jsx)("button", {
                  type: "button",
                  "aria-label": dF("skyblockGame:mapZoomOut"),
                  disabled: rW.view.zoom <= 1,
                  onClick: () => {
                    rW.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, DA.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: bW.feedback
              })]
            })
          }), (0, DA.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [RF.progress && (0, DA.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, DA.jsx)("span", {
                children: RF.progress
              }), (0, DA.jsx)(IA, {
                percent: RF.percent,
                label: RF.progress
              })]
            }), RF.noLandmarks && (0, DA.jsx)("span", {
              children: dF("skyblockGame:mapNoLandmarks")
            }), RF.canTravel && (0, DA.jsx)("span", {
              className: "SkyblockMapHint",
              children: dF("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function vu(FF) {
      let {
        view: WF,
        controller: SF,
        navigation: CF
      } = FF;
      const {
        t: AF
      } = (0, VA.B)(), {
        isTouchScreen: uF
      } = (0, tu.d)(["isTouchScreen"]);
      return (0, DA.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": AF("skyblockGame:mapLocal"),
        children: [uF && (0, DA.jsx)(cu.e, {
          className: "SkyblockMinimapOpen",
          onClick: SF.showLocal,
          children: AF("skyblockGame:map")
        }), (0, DA.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: WF.colour
          },
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: CF.display.mountTerrain,
            style: {
              width: WF.width,
              height: WF.height
            },
            children: [(0, DA.jsx)(YA, {
              imageKey: WF.imageKey,
              fallbackImageKey: WF.fallbackImageKey,
              geometryKey: WF.geometryKey,
              alt: WF.label
            }), (0, DA.jsx)(fA, {
              mount: CF.display.mountMinimapSearchArea
            }), WF.markers.map((FF => (0, DA.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${FF.position[0]}%`,
                top: `${FF.position[1]}%`,
                color: FF.colour
              },
              title: FF.name,
              children: (0, DA.jsx)(mu, {
                icon: FF.icon
              })
            }, FF.id)))]
          }), (0, DA.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: AF("skyblockGame:mapYouAreHere"),
            children: (0, DA.jsx)(mu, {
              icon: "player"
            })
          })]
        }), (0, DA.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: WF.caption
        })]
      })
    }

    function JA(FF) {
      let {
        controller: WF
      } = FF;
      return (0, DA.jsxs)("div", {
        className: "SkyblockCompass",
        ref: WF.display.mountCompass,
        children: [(0, DA.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, DA.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, DA.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function pA(FF) {
      let {
        controller: WF,
        surface: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)(), AF = (0, NA.i)(WS, WF.getSnapshot()), uF = zu();
      return AF.enabled ? (0, DA.jsxs)(DA.Fragment, {
        children: ["hud" === SF && (0, DA.jsx)(TA.e, {
          placement: "statBars",
          children: AF.hud && (0, DA.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": AF.hud.colour
            },
            children: [(0, DA.jsx)(IA, {
              percent: AF.hud.skill.percent,
              label: AF.hud.skill.xp,
              levelUpToken: AF.hud.levelUpToken,
              colour: AF.hud.colour
            }), (0, DA.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, DA.jsxs)("span", {
                children: [AF.hud.skill.label, " \xb7 ", AF.hud.skill.level]
              }), (0, DA.jsx)("span", {
                children: AF.hud.gain
              })]
            })]
          })
        }), "hud" === SF && (0, DA.jsx)(TA.e, {
          children: AF.hud && (0, DA.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, DA.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, DA.jsx)("strong", {
                children: AF.hud.skill.label
              }), (0, DA.jsx)("span", {
                children: AF.hud.gain
              })]
            }), (0, DA.jsx)(IA, {
              percent: AF.hud.skill.percent,
              label: AF.hud.skill.xp,
              levelUpToken: AF.hud.levelUpToken,
              colour: AF.hud.colour
            }), (0, DA.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, DA.jsx)("span", {
                children: AF.hud.skill.level
              }), (0, DA.jsx)("span", {
                children: AF.hud.skill.xp
              })]
            })]
          })
        }), "menu" === SF && (0, DA.jsx)(MA.b, {
          show: AF.open,
          close: WF.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, DA.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: uF,
            onKeyDown: GA,
            children: [(0, DA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, DA.jsxs)("div", {
                children: [(0, DA.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: CF("skyblockGame:skills")
                }), (0, DA.jsx)("p", {
                  children: CF("skyblockGame:skillsIntro")
                })]
              }), (0, DA.jsx)(cu.h, {
                padIgnore: !0,
                onClick: WF.dismiss
              })]
            }), (0, DA.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, DA.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: AF.skills.map((FF => (0, DA.jsxs)(cu.e, {
                  className: gu()("SkyblockSkillCard", {
                    Selected: FF.selected
                  }),
                  ariaPressed: FF.selected,
                  onClick: () => {
                    WF.select(FF.id)
                  },
                  children: [(0, DA.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, DA.jsx)(au.b, {
                      itemName: FF.icon,
                      amount: 0
                    })
                  }), (0, DA.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, DA.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, DA.jsx)("strong", {
                        children: FF.label
                      }), (0, DA.jsx)("span", {
                        children: FF.level
                      })]
                    }), (0, DA.jsx)(IA, {
                      percent: FF.percent,
                      label: `${FF.label}: ${FF.xp}`
                    }), (0, DA.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: FF.xp
                    })]
                  })]
                }, FF.id)))
              }), AF.detail && (0, DA.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, DA.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, DA.jsx)(au.b, {
                    itemName: AF.detail.icon,
                    amount: 0
                  })
                }), (0, DA.jsx)("h3", {
                  children: AF.detail.label
                }), (0, DA.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: AF.detail.level
                }), (0, DA.jsx)("p", {
                  children: AF.detail.description
                }), (0, DA.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, DA.jsx)("strong", {
                    children: CF("skyblockGame:currentBenefit")
                  }), (0, DA.jsx)("span", {
                    children: AF.detail.benefit
                  })]
                }), (0, DA.jsx)(IA, {
                  percent: AF.detail.percent,
                  label: AF.detail.xp
                }), (0, DA.jsx)("p", {
                  children: AF.detail.xp
                }), (0, DA.jsx)("h4", {
                  children: CF("skyblockGame:earnXp")
                }), (0, DA.jsx)("ul", {
                  children: AF.detail.sources.map((FF => (0, DA.jsx)("li", {
                    children: FF
                  }, FF)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var lA = SF(1198),
      Fu = SF(3832),
      Wu = SF(220);

    function Su(FF) {
      let {
        item: WF
      } = FF;
      return (0, DA.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, DA.jsx)(au.b, {
          itemName: WF,
          amount: 0
        })
      })
    }

    function Cu(FF) {
      let {
        name: WF,
        percent: SF,
        progress: CF
      } = FF;
      return (0, DA.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, DA.jsx)(IA, {
          percent: SF,
          label: `${(0,Wu.tb)(WF)}: ${CF}`
        }), (0, DA.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: CF
        })]
      })
    }

    function Au(FF) {
      let {
        subquests: WF,
        showDescriptions: SF = !1
      } = FF;
      return (0, DA.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: WF.map((FF => {
          const WF = SF && "completed" === FF.status,
            CF = (0, DA.jsxs)("li", {
              className: gu()("SkyblockQuestStep", FF.status, {
                JustFinished: FF.justFinished,
                JustUnlocked: FF.justUnlocked
              }),
              tabIndex: WF ? 0 : void 0,
              children: [null !== FF.iconItem && (0, DA.jsx)(Su, {
                item: FF.iconItem
              }), null === FF.iconItem && (0, DA.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === FF.status ? "\u2713" : "skipped" === FF.status ? "\u2212" : "\u25cb"
              }), (0, DA.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, DA.jsx)("strong", {
                  children: (0, DA.jsx)(Fu.c, {
                    text: FF.name
                  })
                }), SF && !WF && (0, DA.jsx)("span", {
                  children: (0, DA.jsx)(Fu.c, {
                    text: FF.description
                  })
                }), null !== FF.barPercent && (0, DA.jsx)(Cu, {
                  name: FF.name,
                  percent: FF.barPercent,
                  progress: FF.progress
                }), null === FF.barPercent && !WF && (0, DA.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: FF.statusLabel
                })]
              })]
            }, FF.id);
          return WF ? (0, DA.jsx)(lA.g, {
            delayShow: 200,
            tooltipInner: (0, DA.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, DA.jsx)("span", {
                children: (0, DA.jsx)(Fu.c, {
                  text: FF.description
                })
              }), (0, DA.jsx)("strong", {
                children: FF.statusLabel
              })]
            }),
            children: CF
          }, FF.id) : CF
        }))
      })
    }

    function uu(FF) {
      let {
        quest: WF,
        select: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)(), AF = WF.focusStep;
      return (0, DA.jsxs)(cu.e, {
        className: gu()("SkyblockQuestCard", {
          Selected: WF.selected,
          Tracked: WF.tracked
        }),
        onClick: () => {
          SF(WF.id)
        },
        children: [(0, DA.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, DA.jsx)("strong", {
            children: (0, DA.jsx)(Fu.c, {
              text: WF.name
            })
          }), WF.tracked && (0, DA.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: CF("skyblockGame:currentQuest")
          })]
        }), AF && (0, DA.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== AF.iconItem && (0, DA.jsx)(Su, {
            item: AF.iconItem
          }), (0, DA.jsx)(Cu, {
            name: AF.name,
            percent: AF.barPercent,
            progress: AF.progress
          })]
        }), (0, DA.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: WF.progress
        })]
      })
    }

    function hu(FF) {
      let {
        controller: WF,
        surface: SF
      } = FF;
      const CF = (0, NA.i)(uS, WF.getSnapshot()),
        {
          t: AF
        } = (0, VA.B)(),
        uF = zu();
      return CF.enabled ? (0, DA.jsxs)(DA.Fragment, {
        children: ["hud" === SF && (0, DA.jsx)(DA.Fragment, {
          children: CF.tracked && (0, DA.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: AS,
            children: (0, DA.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [CF.trackedStepPulse > 0 && (0, DA.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, CF.trackedStepPulse), (0, DA.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: AF("skyblockGame:currentQuest")
              }), (0, DA.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, DA.jsx)("strong", {
                  children: (0, DA.jsx)(Fu.c, {
                    text: CF.tracked.name
                  })
                }), null !== CF.tracked.clock && (0, DA.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: CF.tracked.clock
                })]
              }), (0, DA.jsx)(Au, {
                subquests: CF.tracked.subquests
              })]
            })
          })
        }), "menu" === SF && (0, DA.jsx)(MA.b, {
          show: CF.open,
          close: WF.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, DA.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: uF,
            onKeyDown: GA,
            children: [(0, DA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, DA.jsx)("div", {
                children: (0, DA.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: AF("skyblockGame:quests")
                })
              }), (0, DA.jsx)(cu.h, {
                padIgnore: !0,
                onClick: WF.dismiss
              })]
            }), (0, DA.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, DA.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, DA.jsx)("h3", {
                  children: AF("skyblockGame:current")
                }), 0 === CF.active.length && (0, DA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: AF("skyblockGame:noActiveQuests")
                }), CF.active.map((FF => (0, DA.jsx)(uu, {
                  quest: FF,
                  select: WF.select
                }, FF.id))), (0, DA.jsx)("h3", {
                  children: (0, DA.jsxs)("button", {
                    type: "button",
                    className: gu()("SkyblockQuestSectionToggle", {
                      Expanded: CF.completedExpanded
                    }),
                    "aria-expanded": CF.completedExpanded,
                    onClick: WF.toggleCompleted,
                    children: [(0, DA.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), AF("skyblockGame:completed"), (0, DA.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: CF.completed.length
                    })]
                  })
                }), CF.completedExpanded && 0 === CF.completed.length && (0, DA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: AF("skyblockGame:noCompletedQuests")
                }), CF.completedExpanded && CF.completed.map((FF => (0, DA.jsx)(uu, {
                  quest: FF,
                  select: WF.select
                }, FF.id)))]
              }), CF.detail && (0, DA.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [CF.detail.completed && (0, DA.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: AF("skyblockGame:completedQuest")
                }), (0, DA.jsx)("h3", {
                  children: (0, DA.jsx)(Fu.c, {
                    text: CF.detail.name
                  })
                }), (0, DA.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, DA.jsx)(Fu.c, {
                    text: CF.detail.description
                  })
                }), (0, DA.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [CF.detail.progress, null !== CF.detail.clock && (0, DA.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: CF.detail.clock
                  })]
                }), (0, DA.jsx)(Au, {
                  subquests: CF.detail.subquests,
                  showDescriptions: !0
                }), CF.detail.tracked && (0, DA.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: CF.detail.trackLabel
                }), !CF.detail.completed && !CF.detail.tracked && (0, DA.jsx)(cu.k, {
                  onClick: WF.trackSelected,
                  disabled: !CF.detail.canTrack,
                  children: CF.detail.trackLabel
                }), CF.detail.canViewDialogue && (0, DA.jsx)(cu.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: WF.viewDialogue,
                  children: AF("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var bh = SF(929),
      du = SF(2038);

    function Pu(FF, WF, SF, CF, AF) {
      const uF = FF => "linear" === AF ? FF : {
          MFF: AF,
          point: FF
        },
        hF = {};
      for (const [bW, dF] of CF)
        for (const [WF, SF] of Object.entries(FF(bW, dF, uF))) hF[WF] ??= {
          timeline: []
        }, hF[WF].timeline.push(SF);
      return {
        xWF: WF,
        loop: SF,
        oFF: hF
      }
    }
    const Ru = .547,
      ih = .022,
      eu = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Eu = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Qu(FF, WF, SF) {
      const {
        drop: CF = 0,
        shift: AF = 0,
        torso: uF = 0,
        nod: hF = 0,
        tilt: bW = 0,
        legs: dF = [0, 0],
        arms: PF = 0,
        spread: RF = 0
      } = WF, iW = Ru * Math.cos(uF) - ih * Math.sin(uF), eF = Ru * Math.sin(uF) + ih * Math.cos(uF), EF = SF([0, -CF, AF]);
      return {
        LowerBody: {
          timeFraction: FF,
          position: EF,
          rotation: SF([0, 0, 0])
        },
        UpperBody: {
          timeFraction: FF,
          position: EF,
          rotation: SF([uF, 0, bW])
        },
        HeadMesh: {
          timeFraction: FF,
          position: SF([0, iW - Ru - CF, eF - ih + AF]),
          rotation: SF([uF + hF, 0, bW])
        },
        LegLeftMesh: {
          timeFraction: FF,
          rotation: SF([dF[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: FF,
          rotation: SF([dF[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: FF,
          rotation: SF([PF, 0, RF])
        },
        ArmRightMesh: {
          timeFraction: FF,
          rotation: SF([PF, 0, -RF])
        }
      }
    }

    function rh(FF, WF, SF) {
      return Pu(Qu, FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function gh(FF) {
      return "number" === typeof FF ? [FF, FF] : FF
    }

    function th(FF, WF, SF) {
      const {
        rise: CF = 0,
        shift: AF = 0,
        torso: uF = 0,
        twist: hF = 0,
        tilt: bW = 0,
        nod: dF = 0,
        cock: PF = 0,
        arms: RF = 0,
        spread: iW = 0
      } = WF, [eF, EF] = gh(RF), [QF, rW] = gh(iW);
      return {
        TorsoNode: {
          timeFraction: FF,
          position: SF([0, CF, AF]),
          rotation: SF([uF, hF, bW])
        },
        HeadMesh: {
          timeFraction: FF,
          rotation: SF([dF, 0, PF])
        },
        ArmLeftMesh: {
          timeFraction: FF,
          rotation: SF([eF, 0, QF])
        },
        ArmRightMesh: {
          timeFraction: FF,
          rotation: SF([EF, 0, -rW])
        }
      }
    }
    const Tu = [1.0625, -1, 0];

    function ah(FF) {
      return "number" === typeof FF ? [FF, FF] : FF
    }

    function kh(FF, WF, SF) {
      const {
        drop: CF = 0,
        shift: AF = 0,
        torso: uF = 0,
        tilt: hF = 0,
        nod: bW = 0,
        cock: dF = 0,
        legs: PF = [0, 0],
        arms: RF = 0,
        spread: iW = 0
      } = WF, [eF, EF] = ah(RF), [QF, rW] = ah(iW), gW = -uF, tW = -hF, [TF, aW, kW] = function(FF, WF) {
        const [SF, CF, AF] = [-Tu[0], Tu[1], -Tu[2]], uF = SF * Math.cos(WF) - CF * Math.sin(WF), hF = SF * Math.sin(WF) + CF * Math.cos(WF);
        return [uF - SF, -(hF * Math.cos(FF) - AF * Math.sin(FF) - CF), hF * Math.sin(FF) + AF * Math.cos(FF) - AF]
      }(gW, tW), qW = SF([0, -CF, AF]);
      return {
        TorsoNode: {
          timeFraction: FF,
          position: SF([TF, aW - CF, kW + AF]),
          rotation: SF([gW, 0, tW])
        },
        HeadMesh: {
          timeFraction: FF,
          rotation: SF([-bW, 0, -dF])
        },
        ArmLeftMesh: {
          timeFraction: FF,
          rotation: SF([-eF, 0, -QF])
        },
        ArmRightMesh: {
          timeFraction: FF,
          rotation: SF([-EF, 0, rW])
        },
        LegLeftMesh: {
          timeFraction: FF,
          position: qW,
          rotation: SF([-PF[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: FF,
          position: qW,
          rotation: SF([-PF[1], 0, 0])
        }
      }
    }
    var qh = SF(35983),
      Vu = SF(36909),
      Nu = SF(37038);

    function Du(FF, WF, SF) {
      var CF, AF;
      const uF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return FF + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - FF) * SF
        },
        [hF, bW] = null !== (CF = FF.legs) && void 0 !== CF ? CF : [0, 0],
        [dF, PF] = null !== (AF = WF.legs) && void 0 !== AF ? AF : [0, 0];
      return {
        drop: uF(FF.drop, WF.drop),
        shift: uF(FF.shift, WF.shift),
        torso: uF(FF.torso, WF.torso),
        nod: uF(FF.nod, WF.nod),
        tilt: uF(FF.tilt, WF.tilt),
        legs: [uF(hF, dF), uF(bW, PF)],
        arms: uF(FF.arms, WF.arms),
        spread: uF(FF.spread, WF.spread)
      }
    }
    const Lu = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      mh = rh(4400, !0, [
        [0, Lu],
        [.16, {
          ...Lu,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Lu],
        [.44, {
          ...Lu,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Du(Lu, eu, .7)],
        [.66, Du(Lu, eu, .78)],
        [.74, Du(Lu, Eu, .65)],
        [.86, {
          ...Lu,
          drop: .14
        }],
        [1, Lu]
      ], "catmull-rom-spline"),
      Ou = {
        ...Lu,
        drop: .14,
        torso: .3,
        spread: .4
      },
      xh = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Zu = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      ou = {
        caveGolem: mh,
        magmaGolem: rh(3600, !0, [
          [0, Ou],
          [.12, {
            ...Ou,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ou,
            tilt: -.08
          }],
          [.4, {
            ...Ou,
            tilt: .06,
            drop: .11
          }],
          [.52, Du(Ou, eu, .9)],
          [.62, Du(Ou, Eu, .8)],
          [.7, Du(Ou, Eu, .45)],
          [.78, Du(Ou, Eu, .85)],
          [.9, {
            ...Ou,
            drop: .17
          }],
          [1, Ou]
        ], "catmull-rom-spline"),
        frostWraith: function(FF, WF, SF) {
          return Pu(th, FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, xh],
          [.14, {
            ...xh,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...xh,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...xh,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...xh,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...xh,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...xh,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...xh,
            rise: .16,
            tilt: -.04
          }],
          [1, xh]
        ], "catmull-rom-spline"),
        tikiTerror: function(FF, WF, SF) {
          return Pu(kh, FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Zu],
          [.16, {
            ...Zu,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Zu],
          [.44, {
            ...Zu,
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
            ...Zu,
            drop: .1
          }],
          [1, Zu]
        ], "catmull-rom-spline")
      },
      Yu = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Mu = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      ch = Object.fromEntries(Object.entries(ou).map((FF => {
        let [WF, SF] = FF;
        return [WF, (0, Nu.c)((0, qh.h)(SF), WF)]
      })));

    function Gu(FF) {
      const WF = function(FF) {
        var WF;
        const SF = (0, Vu.d)(FF).poseRig;
        return null !== (WF = Mu[FF]) && void 0 !== WF ? WF : void 0 === SF ? null : Yu[SF]
      }(FF);
      return null === WF ? null : ch[WF]
    }

    function zh(FF) {
      return {
        "--difficulty-colour": FF
      }
    }
    const Iu = (0, DF.lazy)((() => (0, du.e)(SF.e(197).then((() => SF(39379))), (FF => FF.MobPreview))));

    function fu(FF) {
      var WF, SF, CF;
      let {
        picker: AF,
        controller: uF
      } = FF;
      const {
        t: hF
      } = (0, VA.B)(), bW = zu(), {
        page: dF
      } = AF;
      return (0, DA.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: bW,
        onKeyDown: FF => {
          "ArrowLeft" === FF.key ? (FF.preventDefault(), FF.stopPropagation(), uF.previous()) : "ArrowRight" === FF.key ? (FF.preventDefault(), FF.stopPropagation(), uF.next()) : GA(FF)
        },
        style: zh(dF.colour),
        children: [(0, DA.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, DA.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: AF.dungeonName
          }), (0, DA.jsx)(cu.h, {
            padIgnore: !0,
            onClick: uF.dismiss
          })]
        }), (0, DA.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, DA.jsx)(cu.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !AF.canPrevious,
              onClick: uF.previous,
              children: (0, DA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, DA.jsx)(bh.e, {
                  name: "angle-up"
                })
              })
            }), (0, DA.jsxs)("div", {
              className: gu()("SkyblockBossPickerBoss", {
                Locked: !dF.unlocked
              }),
              children: [null !== dF.bossMobType && (0, DA.jsx)(DF.Suspense, {
                fallback: (0, DA.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, DA.jsx)(Iu, {
                  className: "SkyblockBossPickerModel",
                  mobType: dF.bossMobType,
                  variation: dF.bossMobVariation,
                  animation: null !== (WF = Gu(dF.bossMobType)) && void 0 !== WF ? WF : void 0
                })
              }), null === dF.bossMobType && (0, DA.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, DA.jsx)(cu.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !AF.canNext,
              onClick: uF.next,
              children: (0, DA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, DA.jsx)(bh.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, DA.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [dF.beaten && (0, DA.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), dF.label]
            }), (0, DA.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (SF = dF.bossName) && void 0 !== SF ? SF : "???"
            }), (0, DA.jsxs)("span", {
              className: gu()("SkyblockBossPickerRecord", {
                Locked: null !== dF.lockedHint
              }),
              children: [null !== dF.lockedHintHighlight && (0, DA.jsxs)(DA.Fragment, {
                children: [dF.lockedHintHighlight.before, (0, DA.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: zh(dF.lockedHintHighlight.colour),
                  children: [null !== dF.lockedHintHighlight.icon && (0, DA.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, DA.jsx)(au.b, {
                      itemName: dF.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), dF.lockedHintHighlight.name]
                }), dF.lockedHintHighlight.after]
              }), null === dF.lockedHintHighlight && (null !== (CF = dF.lockedHint) && void 0 !== CF ? CF : dF.summary)]
            })]
          }), (0, DA.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: AF.pages.map((FF => (0, DA.jsx)("span", {
              className: gu()("SkyblockBossPickerDot", {
                Current: FF.current,
                Locked: !FF.unlocked
              }),
              style: zh(FF.colour)
            }, FF.difficulty)))
          }), (0, DA.jsx)(cu.r, {
            className: "SkyblockBossPickerFight",
            disabled: !dF.unlocked,
            onClick: uF.enter,
            children: hF("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function yh(FF) {
      let {
        dungeon: WF,
        select: SF
      } = FF;
      return (0, DA.jsxs)(cu.e, {
        className: gu()("SkyblockDungeonCard", {
          Selected: WF.selected
        }),
        onClick: () => {
          SF(WF.id)
        },
        children: [(0, DA.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, DA.jsx)("strong", {
            children: WF.name
          }), (0, DA.jsx)("span", {
            children: WF.beatenSummary
          })]
        }), (0, DA.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: WF.difficulties.map((FF => (0, DA.jsxs)("span", {
            className: gu()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: FF.beaten
            }),
            style: zh(FF.colour),
            title: FF.summary,
            children: [FF.beaten && (0, DA.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), FF.label]
          }, FF.difficulty)))
        })]
      })
    }

    function su(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(PS, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsxs)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [SF.picker && (0, DA.jsx)(fu, {
          picker: SF.picker,
          controller: WF
        }), !SF.picker && (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: CF("skyblockGame:dungeons")
              }), (0, DA.jsx)("p", {
                children: CF("skyblockGame:dungeonsIntro")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: WF.dismiss
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, DA.jsx)("div", {
              className: "SkyblockDungeonList",
              children: SF.dungeons.map((FF => (0, DA.jsx)(yh, {
                dungeon: FF,
                select: WF.select
              }, FF.id)))
            }), SF.detail && (0, DA.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, DA.jsx)("h3", {
                children: SF.detail.name
              }), (0, DA.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: SF.detail.difficulties.map((FF => (0, DA.jsxs)("li", {
                  className: gu()("SkyblockDungeonRecord", {
                    Beaten: FF.beaten
                  }),
                  children: [(0, DA.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: zh(FF.colour),
                    children: [FF.beaten && (0, DA.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), FF.label]
                  }), (0, DA.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: FF.summary
                  })]
                }, FF.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function nu(FF) {
      let {
        collection: WF,
        select: SF
      } = FF;
      return (0, DA.jsxs)(cu.e, {
        className: gu()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: WF.selected,
          Locked: WF.locked
        }),
        ariaPressed: WF.selected,
        onClick: () => {
          SF(WF.id)
        },
        children: [(0, DA.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, DA.jsx)(au.b, {
            itemName: WF.icon,
            amount: 0
          })
        }), (0, DA.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, DA.jsx)("strong", {
              children: WF.name
            }), (0, DA.jsx)("span", {
              children: WF.tier
            })]
          }), (0, DA.jsx)(IA, {
            percent: WF.percent,
            label: `${WF.name}: ${WF.progress}`
          }), (0, DA.jsx)("span", {
            className: "SkyblockSkillXp",
            children: WF.progress
          })]
        })]
      })
    }

    function Hu(FF) {
      let {
        collection: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)();
      return (0, DA.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, DA.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, DA.jsx)(au.b, {
            itemName: WF.icon,
            amount: 0
          })
        }), (0, DA.jsx)("h3", {
          children: WF.name
        }), (0, DA.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: WF.tier
        }), (0, DA.jsx)("p", {
          children: WF.locked ? SF("skyblockGame:collectionLocked") : WF.count
        }), null !== WF.nextReward && (0, DA.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, DA.jsx)("strong", {
            children: SF("skyblockGame:collectionNextReward")
          }), (0, DA.jsx)("span", {
            children: WF.nextReward
          })]
        }), (0, DA.jsx)(IA, {
          percent: WF.percent,
          label: WF.progress
        }), (0, DA.jsx)("p", {
          children: WF.progress
        })]
      })
    }

    function Ku(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(oS, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: CF("skyblockGame:collections")
              }), (0, DA.jsxs)("p", {
                children: [CF("skyblockGame:collectionsIntro"), " ", SF.tiersUnlocked]
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: WF.dismiss
            })]
          }), (0, DA.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: SF.categories.map((FF => (0, DA.jsxs)(cu.e, {
              className: gu()("SkyblockCollectionCategory", {
                Selected: FF.selected
              }),
              ariaPressed: FF.selected,
              padTabSelected: FF.selected,
              onClick: () => {
                WF.selectCategory(FF.id)
              },
              children: [(0, DA.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, DA.jsx)(au.b, {
                  itemName: FF.icon,
                  amount: 0
                })
              }), (0, DA.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, DA.jsx)("strong", {
                  children: FF.label
                }), (0, DA.jsx)("span", {
                  children: FF.tiers
                })]
              })]
            }, FF.id)))
          }), (0, DA.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, DA.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: SF.collections.map((FF => (0, DA.jsx)(nu, {
                collection: FF,
                select: WF.select
              }, FF.id)))
            }), SF.detail && (0, DA.jsx)(Hu, {
              collection: SF.detail
            })]
          })]
        })
      }) : null
    }
    const wu = ["completed", "active", "available", "locked"],
      Xu = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Uu(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(KS, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: CF("skyblockDevQuests:title")
              }), (0, DA.jsx)("p", {
                children: CF("skyblockDevQuests:intro")
              })]
            }), (0, DA.jsx)(cu.h, {
              onClick: WF.dismiss
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [wu.map((FF => (0, DA.jsx)("span", {
              className: gu()("SkyblockQuestGraphLegendState", FF),
              children: CF(`skyblockDevQuests:state_${FF}`)
            }, FF))), Xu.map((FF => (0, DA.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, DA.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, DA.jsx)("line", {
                  className: gu()("SkyblockQuestGraphEdge", FF),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), CF(`skyblockDevQuests:edge_${FF}`)]
            }, FF)))]
          }), (0, DA.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, DA.jsxs)("div", {
              className: gu()("SkyblockQuestGraphCanvas", {
                Planning: SF.planning
              }),
              style: {
                width: SF.width,
                height: SF.height
              },
              children: [(0, DA.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: SF.width,
                height: SF.height,
                "aria-hidden": "true",
                children: [(0, DA.jsx)("defs", {
                  children: (0, DA.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, DA.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), SF.edges.map((FF => (0, DA.jsx)("path", {
                  className: gu()("SkyblockQuestGraphEdge", FF.kind, {
                    InPlan: FF.inPlan
                  }),
                  d: FF.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, FF.key)))]
              }), SF.nodes.map((FF => (0, DA.jsxs)("button", {
                type: "button",
                className: gu()("SkyblockQuestGraphNode", FF.state, {
                  InPlan: FF.inPlan,
                  Hovered: FF.hovered
                }),
                style: {
                  left: FF.left,
                  top: FF.top,
                  width: 190,
                  height: 52
                },
                title: FF.id,
                onMouseEnter: () => {
                  WF.hover(FF.id)
                },
                onMouseLeave: () => {
                  WF.hover(null)
                },
                onFocus: () => {
                  WF.hover(FF.id)
                },
                onBlur: () => {
                  WF.hover(null)
                },
                onClick: () => {
                  WF.jump(FF.id)
                },
                children: [(0, DA.jsx)("strong", {
                  children: FF.name
                }), (0, DA.jsx)("span", {
                  children: FF.detail
                })]
              }, FF.id)))]
            })
          })]
        })
      }) : null
    }
    const Bu = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      jh = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${CC}ms`,
        "--forge-duration": "2150ms"
      },
      vh = Array.from({
        length: 18
      }, ((FF, WF) => ({
        "--ember-left": `${(4+92*(.618034*WF%1)).toFixed(1)}%`,
        "--ember-size": 3 + WF % 3 * 2 + "px",
        "--ember-drift": 14 * (WF % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*WF%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*WF%8).toFixed(2)}s`
      })));

    function Ju(FF) {
      if (FF.style.removeProperty("--part-size"), null === FF.parentElement || "wrap" === getComputedStyle(FF.parentElement).flexWrap) return;
      const WF = [...FF.children],
        SF = getComputedStyle(FF),
        CF = parseFloat(SF.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        AF = (FF.clientHeight - parseFloat(SF.rowGap) * (WF.length - 1)) / WF.length,
        uF = WF.map((FF => {
          const WF = getComputedStyle(FF),
            SF = FF.querySelector("h3"),
            uF = FF.querySelector(".SkyblockForgeParts");
          if (null === SF || null === uF) return CF;
          const hF = AF - parseFloat(WF.paddingTop) - parseFloat(WF.paddingBottom) - SF.offsetHeight - parseFloat(getComputedStyle(SF).marginBottom),
            bW = parseFloat(getComputedStyle(uF).columnGap),
            dF = uF.children.length;
          let PF = 0;
          for (let CF = 1; CF <= dF; CF++) {
            const FF = Math.ceil(dF / CF);
            PF = Math.max(PF, Math.min((uF.clientWidth - bW * (CF - 1)) / CF, (hF - bW * (FF - 1)) / FF))
          }
          return PF
        }));
      FF.style.setProperty("--part-size", `${Math.floor(Math.max(CF,Math.min(...uF)))}px`)
    }

    function pu(FF) {
      var WF, SF, CF, uF, hF;
      let {
        controller: bW
      } = FF;
      const dF = (0, NA.i)(RC, bW.getSnapshot()),
        {
          t: PF
        } = (0, VA.B)(),
        RF = zu(),
        iW = function() {
          const FF = (0, DF.useRef)(null),
            WF = (0, DF.useRef)(null);
          return (0, DF.useLayoutEffect)((() => {
            null !== FF.current && Ju(FF.current)
          })), (0, DF.useCallback)((SF => {
            var CF;
            null === (CF = WF.current) || void 0 === CF || CF.disconnect(), WF.current = null, FF.current = SF, null !== SF && (WF.current = new ResizeObserver((() => {
              Ju(SF)
            })), WF.current.observe(SF))
          }), [])
        }(),
        eF = function(FF) {
          const WF = (0, DF.useRef)(null);
          return (0, DF.useLayoutEffect)((() => {
            const FF = WF.current;
            if (null !== FF) {
              FF.style.removeProperty("font-size");
              for (let WF = 1.7; WF > 1.1 && FF.scrollWidth > FF.clientWidth; WF -= .1) FF.style.fontSize = WF - .1 + "rem"
            }
          }), [FF]), (0, DF.useCallback)((FF => {
            WF.current = FF
          }), [])
        }(null === (WF = dF.preview) || void 0 === WF ? void 0 : WF.name),
        EF = (0, DF.useRef)(null),
        QF = (0, DF.useRef)({}),
        rW = dF.forging,
        gW = null !== (SF = null === rW || void 0 === rW ? void 0 : rW.preview.tier) && void 0 !== SF ? SF : 0,
        tW = null !== (CF = null === rW || void 0 === rW ? void 0 : rW.preview.named) && void 0 !== CF && CF,
        TF = (0, DF.useMemo)((() => {
          return null === rW ? null : {
            flames: (FF = gW, WF = tW, Array.from({
              length: 26 + 6 * FF + (WF ? 20 : 0)
            }, ((FF, WF) => {
              const SF = WF < 6,
                CF = Math.random() * Math.PI * 2,
                AF = SF ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                uF = Math.cos(CF) * AF,
                hF = Math.sin(CF) * AF - 2 - 3 * Math.random(),
                bW = Math.random(),
                [dF, PF, RF] = SF ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : bW < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : bW < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [bW < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": dF,
                "--x0": `${(.15*uF).toFixed(2)}rem`,
                "--y0": `${(.15*hF).toFixed(2)}rem`,
                "--x": `${uF.toFixed(2)}rem`,
                "--y": `${hF.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${PF.toFixed(2)}rem`,
                "--duration": `${Math.round(RF)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: hC(gW, tW)
          };
          var FF, WF
        }), [null === rW || void 0 === rW ? void 0 : rW.id]);
      if (!dF.enabled) return null;
      const aW = dF.preview,
        kW = dF.arriving,
        qW = null !== kW && !kW.sameSword,
        VF = null !== aW && (0, DA.jsx)(au.b, {
          itemName: aW.baseSword,
          amount: 0,
          enchantmentTier: aW.enchantmentTier
        });
      return (0, DA.jsx)(MA.b, {
        show: dF.open,
        close: bW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: RF,
          onKeyDown: GA,
          children: [(0, DA.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: vh.map(((FF, WF) => (0, DA.jsx)("span", {
              style: FF
            }, WF)))
          }), (0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: PF("skyblockGame:forgeTitle")
              }), (0, DA.jsx)("p", {
                children: PF("skyblockGame:forgeIntro")
              })]
            }), (0, DA.jsx)(cu.h, {
              onClick: bW.dismiss
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, DA.jsx)("div", {
              ref: iW,
              className: gu()("SkyblockForgeSlots", {
                Locked: null !== rW
              }),
              children: dF.slots.map((FF => (0, DA.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, DA.jsx)("h3", {
                  children: FF.label
                }), (0, DA.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: FF.parts.map((WF => (0, DA.jsx)("button", {
                    type: "button",
                    className: gu()("SkyblockForgePart", {
                      Selected: WF.selected,
                      Missing: WF.placeholder
                    }),
                    disabled: WF.placeholder,
                    title: WF.placeholder ? PF("skyblockGame:forgePickParts") : WF.itemName,
                    "aria-pressed": WF.selected,
                    onClick: () => {
                      bW.select(FF.kind, WF.material)
                    },
                    children: (0, DA.jsx)(au.b, {
                      itemName: WF.itemName,
                      amount: WF.owned
                    })
                  }, WF.material)))
                })]
              }, FF.kind)))
            }), (0, DA.jsxs)("div", {
              className: gu()("SkyblockForgeAnvil", {
                Named: null === aW || void 0 === aW ? void 0 : aW.named
              }),
              style: {
                "--tier": null === aW ? "transparent" : AF.sb[aW.enchantmentTier]
              },
              children: [(0, DA.jsxs)("div", {
                className: gu()("SkyblockForgeAltar", {
                  Forging: null !== rW
                }),
                style: null === rW ? void 0 : jh,
                children: [(0, DA.jsxs)("div", {
                  className: gu()("SkyblockForgeMount", {
                    Arrive: null !== kW
                  }),
                  children: [null === aW && (0, DA.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, DA.jsx)(au.b, {
                      itemName: dF.unformedSword,
                      amount: 0
                    })
                  }), null !== aW && (0, DA.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== aW && null === rW && (0, DA.jsx)("div", {
                    ref: EF,
                    className: "SkyblockForgeFloat",
                    children: (0, DA.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: VF
                    })
                  }), null !== aW && (0, DA.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: uC.map(((FF, WF) => (0, DA.jsx)("span", {
                      className: gu()({
                        Rune: "" !== FF.rune
                      }),
                      style: FF.style,
                      children: FF.rune
                    }, WF)))
                  }), null !== rW && null !== TF && (0, DA.jsxs)(DA.Fragment, {
                    children: [(0, DA.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: TF.flames.map(((FF, WF) => (0, DA.jsx)("span", {
                        style: FF
                      }, WF)))
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: QF.current,
                      children: (0, DA.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: VF
                      })
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (gW >= 4 || tW) && (0, DA.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: TF.sparks.map(((FF, WF) => (0, DA.jsx)("span", {
                        style: FF
                      }, WF)))
                    }), (0, DA.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, DA.jsx)("p", {
                  className: gu()("SkyblockForgeStatus", null === (uF = dF.status) || void 0 === uF ? void 0 : uF.tone),
                  children: null === (hF = dF.status) || void 0 === hF ? void 0 : hF.text
                })]
              }), null === aW && (0, DA.jsx)("p", {
                className: gu()("SkyblockForgeName Waiting", {
                  ArriveText: qW
                }),
                children: PF(dF.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== aW && (0, DA.jsx)("h3", {
                ref: eF,
                className: gu()("SkyblockForgeName", {
                  ArriveText: qW
                }),
                title: aW.name,
                children: aW.name
              }), (null === aW || void 0 === aW ? void 0 : aW.named) && (0, DA.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: PF("skyblockGame:forgeSecret")
              }), (0, DA.jsxs)(cu.r, {
                className: "SkyblockForgeButton",
                disabled: !dF.canForge,
                title: null === aW ? void 0 : PF("skyblockGame:forgeCoalOwned", {
                  owned: String(dF.coalOwned)
                }),
                onClick: () => {
                  QF.current = function(FF) {
                    const WF = null === FF ? "none" : getComputedStyle(FF).transform,
                      SF = new DOMMatrixReadOnly("none" === WF ? void 0 : WF);
                    return {
                      "--settle-y": `${SF.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(SF.b,SF.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(EF.current), PC(), bW.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [PF("skyblockGame:forgeButton"), null !== aW && (0, DA.jsxs)("span", {
                  className: gu()("SkyblockForgeCost", {
                    Short: aW.coalShort
                  }),
                  children: [(0, DA.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, DA.jsx)(au.b, {
                      itemName: jC.e,
                      amount: 0
                    })
                  }), aW.coalCost]
                })]
              })]
            }), (0, DA.jsxs)("div", {
              className: gu()("SkyblockForgeDetails", {
                Named: null === aW || void 0 === aW ? void 0 : aW.named
              }),
              children: [(0, DA.jsx)("p", {
                className: gu()("SkyblockForgeLore", {
                  ArriveText: qW
                }),
                title: null === aW || void 0 === aW ? void 0 : aW.lore,
                children: null === aW || void 0 === aW ? void 0 : aW.lore
              }), (0, DA.jsxs)("dl", {
                className: gu()("SkyblockForgeStats", {
                  ArriveText: qW
                }),
                children: [null === aW && Bu.map((FF => (0, DA.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, DA.jsx)("dt", {
                    children: PF(FF)
                  }), (0, DA.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, FF))), null === aW || void 0 === aW ? void 0 : aW.stats.map((FF => (0, DA.jsxs)("div", {
                  className: gu()("SkyblockForgeStat", {
                    Better: FF.better
                  }),
                  children: [(0, DA.jsx)("dt", {
                    children: FF.label
                  }), (0, DA.jsx)("dd", {
                    children: FF.value
                  })]
                }, FF.label)))]
              }), (0, DA.jsx)("ul", {
                className: gu()("SkyblockForgeEffects", {
                  ArriveText: qW
                }),
                children: null === aW || void 0 === aW ? void 0 : aW.effects.map((FF => (0, DA.jsx)("li", {
                  children: FF
                }, FF)))
              })]
            })]
          })]
        })
      })
    }
    const lu = "Doom Rivet",
      Fh = "Doom Crest";

    function Wh(FF) {
      let {
        itemName: WF,
        amount: SF,
        owned: CF
      } = FF;
      return (0, DA.jsxs)("span", {
        className: gu()("SkyblockSmugglerPrice", {
          Short: SF > CF
        }),
        children: [(0, DA.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, DA.jsx)(au.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, DA.jsx)("span", {
          children: SF
        })]
      })
    }

    function Sh(FF) {
      return FF.justBought ? "skyblockGame:smugglerJustBought" : FF.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Ch(FF) {
      let {
        deal: WF,
        view: SF,
        buy: CF
      } = FF;
      const {
        t: AF
      } = (0, VA.B)();
      return (0, DA.jsxs)("div", {
        className: gu()("SkyblockSmugglerPocket", {
          Bought: WF.justBought,
          Unaffordable: !WF.affordable,
          SoldOut: WF.soldOut && !WF.justBought
        }),
        children: [(0, DA.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, DA.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, DA.jsx)(au.b, {
            itemName: WF.itemName,
            amount: 0,
            enchantmentTier: WF.enchantmentTier
          }), WF.amount > 1 && (0, DA.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: AF("skyblockGame:smugglerAmount", {
              amount: WF.amount
            })
          })]
        }), (0, DA.jsx)("h3", {
          children: WF.displayName
        }), (0, DA.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [WF.rivets > 0 && (0, DA.jsx)(Wh, {
              itemName: lu,
              amount: WF.rivets,
              owned: SF.rivetsOwned
            }), WF.crests > 0 && (0, DA.jsx)(Wh, {
              itemName: Fh,
              amount: WF.crests,
              owned: SF.crestsOwned
            })]
          }), (0, DA.jsx)(cu.e, {
            className: "SkyblockSmugglerBuy",
            disabled: WF.soldOut || !WF.affordable || SF.pending,
            onClick: () => {
              CF(WF.slot)
            },
            children: AF(Sh(WF))
          })]
        })]
      }, WF.justBought ? SF.boughtCount : 0)
    }

    function Ah(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(EC, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, DA.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, DA.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: CF("skyblockGame:smugglerTitle")
              }), (0, DA.jsx)("p", {
                children: CF("skyblockGame:smugglerIntro")
              })]
            }), (0, DA.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, DA.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, DA.jsx)(Wh, {
                  itemName: lu,
                  amount: SF.rivetsOwned,
                  owned: SF.rivetsOwned
                }), (0, DA.jsx)(Wh, {
                  itemName: Fh,
                  amount: SF.crestsOwned,
                  owned: SF.crestsOwned
                })]
              }), (0, DA.jsx)(cu.h, {
                onClick: WF.dismiss
              })]
            })]
          }), (0, DA.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: SF.deals.map((FF => (0, DA.jsx)(Ch, {
              deal: FF,
              view: SF,
              buy: WF.buy
            }, FF.slot)))
          }), (0, DA.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, DA.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: SF.rotatesText
            }), null !== SF.status && (0, DA.jsx)("span", {
              className: gu()("SkyblockSmugglerStatus", SF.status.tone),
              children: SF.status.text
            })]
          })]
        })
      }) : null
    }

    function uh(FF) {
      let {
        phase: WF,
        className: SF
      } = FF;
      return (0, DA.jsx)("span", {
        className: gu()("SkyblockMoon", `Moon-${WF}`, SF),
        "aria-hidden": "true"
      })
    }

    function hh(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(gA, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)();
      return SF.enabled ? (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: gu()("SkyblockPassageChip", SF.open && "Open"),
          "aria-label": CF("skyblockGame:passageChipLabel", {
            phase: SF.phaseName
          }),
          title: CF("skyblockGame:passageChipLabel", {
            phase: SF.phaseName
          }),
          onMouseDown: FF => {
            FF.preventDefault()
          },
          onClick: WF.toggle,
          children: (0, DA.jsx)(uh, {
            phase: SF.phase
          }, SF.phase)
        })
      }) : null
    }

    function bb(FF) {
      let {
        fish: WF
      } = FF;
      return (0, DA.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, DA.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, DA.jsx)(au.b, {
            itemName: WF.itemName,
            amount: 0
          })
        }), (0, DA.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: WF.displayName
          }), (0, DA.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: WF.where
          })]
        })]
      })
    }

    function dh(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(gA, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, DA.jsx)(uh, {
              phase: SF.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: CF("skyblockGame:passageTitle")
              }), (0, DA.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: SF.phaseName
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: WF.dismiss
            })]
          }), (0, DA.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: CF("skyblockGame:passageIntro")
          }), (0, DA.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, DA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, DA.jsx)("h3", {
                children: CF("skyblockGame:passageVisiting")
              }), (0, DA.jsx)("ul", {
                className: "SkyblockPassageList",
                children: SF.visitors.map((FF => (0, DA.jsx)(bb, {
                  fish: FF
                }, FF.itemName)))
              })]
            }), (0, DA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== SF.resting && (0, DA.jsxs)(DA.Fragment, {
                children: [(0, DA.jsx)("h3", {
                  children: CF("skyblockGame:passageResting")
                }), (0, DA.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, DA.jsx)(bb, {
                    fish: SF.resting
                  })
                })]
              }), (0, DA.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, DA.jsx)(uh, {
                  phase: SF.nextPhase
                }), (0, DA.jsx)("span", {
                  children: SF.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Ph() {
      return (0, DA.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((FF => (0, DA.jsx)("i", {
          style: {
            "--sparkle-index": FF
          }
        }, FF)))
      })
    }

    function Rh(FF) {
      var WF;
      let {
        charm: SF,
        view: CF,
        controller: AF
      } = FF;
      const {
        t: uF
      } = (0, VA.B)(), hF = CF.shop, bW = (null === (WF = CF.sparkle) || void 0 === WF ? void 0 : WF.id) === SF.id;
      return (0, DA.jsxs)("li", {
        className: gu()("SkyblockLampLightCharm", SF.owned && "Owned", SF.socketed && "Socketed"),
        children: [bW && (0, DA.jsx)(Ph, {}, CF.sparkle.count), (0, DA.jsx)("h4", {
          children: SF.name
        }), (0, DA.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: SF.effect
        }), (0, DA.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: SF.lines.map((FF => (0, DA.jsxs)("li", {
            className: gu()("SkyblockLampLightOddsLine", "better" === FF.tone ? "Better" : "worse" === FF.tone ? "Worse" : "Same"),
            children: [(0, DA.jsx)("span", {
              className: "Before",
              children: FF.before
            }), (0, DA.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, DA.jsx)("span", {
              className: "After",
              children: FF.after
            })]
          }, FF.label)))
        }), (0, DA.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: SF.owned ? SF.socketed ? (0, DA.jsxs)(DA.Fragment, {
            children: [(0, DA.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: uF("skyblockGame:lampLightSocketed")
            }), (0, DA.jsx)(cu.N, {
              disabled: !CF.canCommand,
              ariaLabel: uF("skyblockGame:lampLightRemoveLabel", {
                charm: SF.name
              }),
              onClick: () => {
                AF.socket(null)
              },
              children: uF("skyblockGame:lampLightRemove")
            })]
          }) : (0, DA.jsx)(cu.e, {
            disabled: !CF.canCommand || !hF.heldRod,
            ariaLabel: uF("skyblockGame:lampLightSocketLabel", {
              charm: SF.name
            }),
            onClick: () => {
              AF.socket(SF.id)
            },
            children: uF("skyblockGame:lampLightSocket")
          }) : (0, DA.jsx)(cu.e, {
            disabled: !CF.canCommand || !SF.affordable,
            ariaLabel: uF("skyblockGame:lampLightBuyLabel", {
              item: SF.name,
              cost: SF.cost
            }),
            onClick: () => {
              AF.buy(SF.id)
            },
            children: SF.cost
          })
        })]
      })
    }

    function ib(FF) {
      var WF;
      let {
        tint: SF,
        view: CF,
        controller: AF
      } = FF;
      const {
        t: uF
      } = (0, VA.B)();
      return (0, DA.jsxs)("li", {
        className: gu()("SkyblockLampLightTint", SF.wearing && "Wearing"),
        style: {
          "--tint-colour": SF.colour
        },
        children: [(null === (WF = CF.sparkle) || void 0 === WF ? void 0 : WF.id) === SF.id && (0, DA.jsx)(Ph, {}, CF.sparkle.count), (0, DA.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, DA.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: SF.name
        }), SF.wearing ? (0, DA.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: uF("skyblockGame:lampLightWearing")
        }) : (0, DA.jsx)(cu.e, {
          disabled: !CF.canCommand || !SF.owned && !SF.affordable,
          ariaLabel: SF.owned ? uF("skyblockGame:lampLightWearLabel", {
            tint: SF.name
          }) : uF("skyblockGame:lampLightBuyLabel", {
            item: SF.name,
            cost: SF.cost
          }),
          onClick: () => {
            SF.owned ? AF.wearTint(SF.id) : AF.buy(SF.id)
          },
          children: SF.owned ? uF("skyblockGame:lampLightWear") : SF.cost
        })]
      })
    }

    function eh(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(oC, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = SF.shop;
      return (0, DA.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, DA.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: SF.balance
          }), (0, DA.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": SF.releasing,
            className: gu()("SkyblockLampLightSwitch", SF.releasing && "On"),
            disabled: SF.releasing ? "ready" !== SF.status : !SF.canCommand,
            onClick: () => {
              WF.setRelease(!SF.releasing)
            },
            children: [(0, DA.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, DA.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), CF("skyblockGame:lampLightRelease")]
          }), (0, DA.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: CF("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== SF.notice && (0, DA.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: SF.notice
        }), null !== AF && (0, DA.jsxs)(DA.Fragment, {
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, DA.jsx)("h3", {
              children: CF("skyblockGame:lampLightCharms")
            }), (0, DA.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: AF.oddsFor
            }), (0, DA.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((FF => (0, DA.jsx)("button", {
                type: "button",
                "aria-pressed": SF.situation === FF,
                className: gu()("SkyblockLampLightSituation", SF.situation === FF && "Selected"),
                onClick: () => {
                  WF.setSituation(FF)
                },
                children: CF("open" === FF ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, FF)))
            })]
          }), !AF.heldRod && (0, DA.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: CF("skyblockGame:lampLightHoldRod")
          }), (0, DA.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: AF.charms.map((FF => (0, DA.jsx)(Rh, {
              charm: FF,
              view: SF,
              controller: WF
            }, FF.id)))
          }), (0, DA.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, DA.jsx)("h3", {
              children: CF("skyblockGame:lampLightTints")
            })
          }), (0, DA.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, DA.jsxs)("li", {
              className: gu()("SkyblockLampLightTint", "Islands", AF.wearingIslandColours && "Wearing"),
              children: [(0, DA.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, DA.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: CF("skyblockGame:lampLightIslandColours")
              }), AF.wearingIslandColours ? (0, DA.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: CF("skyblockGame:lampLightWearing")
              }) : (0, DA.jsx)(cu.e, {
                disabled: !SF.canCommand,
                ariaLabel: CF("skyblockGame:lampLightWearLabel", {
                  tint: CF("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  WF.wearTint(null)
                },
                children: CF("skyblockGame:lampLightWear")
              })]
            }), AF.tints.map((FF => (0, DA.jsx)(ib, {
              tint: FF,
              view: SF,
              controller: WF
            }, FF.id)))]
          })]
        })]
      })
    }

    function Eh(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(oC, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)();
      return SF.releasing ? (0, DA.jsx)(TA.e, {
        children: (0, DA.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            WF.setRelease(!1)
          },
          children: [(0, DA.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, DA.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [CF("skyblockGame:lampLightReleasing"), " \xb7 ", SF.balance]
          }), (0, DA.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: CF("skyblockGame:lampLightKeepCatches")
          }), null !== SF.gained && (0, DA.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: SF.gained.text
          }, SF.gained.count)]
        })
      }) : null
    }

    function Qh(FF) {
      let {
        island: WF,
        view: SF,
        aim: CF
      } = FF;
      const {
        t: AF
      } = (0, VA.B)(), uF = WF.featuredFish;
      return (0, DA.jsxs)("li", {
        className: gu()("SkyblockKeepersChairIsland", `Island-${WF.id}`, WF.favoured && "Aimed", !WF.relit && "Dark"),
        children: [(0, DA.jsx)("h3", {
          children: WF.name
        }), WF.relit && null !== uF ? (0, DA.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: AF("skyblockGame:keepersChairTideNotice")
          }), (0, DA.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, DA.jsx)(au.b, {
              itemName: uF.itemName,
              amount: 0
            })
          }), (0, DA.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: uF.displayName
          })]
        }) : (0, DA.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, DA.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: AF("skyblockGame:keepersChairDark")
          })
        }), WF.relit && (WF.favoured ? (0, DA.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: AF("skyblockGame:keepersChairAimed")
        }) : (0, DA.jsx)(cu.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !SF.canAim,
          ariaLabel: AF("skyblockGame:keepersChairAimLabel", {
            island: WF.name
          }),
          onClick: () => {
            CF(WF.id)
          },
          children: AF("skyblockGame:keepersChairAim")
        }))]
      }, WF.favoured ? SF.aimedCount : 0)
    }

    function rb(FF) {
      let {
        controller: WF,
        lampLight: SF
      } = FF;
      const CF = (0, NA.i)(VC, WF.getSnapshot()),
        AF = (0, NA.i)(oC, SF.getSnapshot()),
        [uF, hF] = (0, DF.useState)("lamp"),
        {
          t: bW
        } = (0, VA.B)(),
        dF = zu();
      if (!CF.enabled) return null;
      const PF = "light" === uF && AF.enabled;
      return (0, DA.jsx)(MA.b, {
        show: CF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: gu()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", PF && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: dF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: bW("skyblockGame:keepersChairTitle")
              }), (0, DA.jsx)("p", {
                children: bW(PF ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              ariaLabel: bW("skyblockGame:keepersChairClose"),
              onClick: WF.dismiss
            })]
          }), AF.enabled && (0, DA.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((FF => (0, DA.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === FF === PF,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === FF === PF ? "true" : void 0,
              className: gu()("SkyblockKeepersChairTab", "light" === FF === PF && "Selected"),
              onClick: () => {
                hF(FF)
              },
              children: [bW("lamp" === FF ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === FF && (0, DA.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: AF.balance
              })]
            }, FF)))
          }), PF ? (0, DA.jsx)(eh, {
            controller: SF
          }) : (0, DA.jsx)(gb, {
            view: CF,
            controller: WF
          })]
        })
      })
    }

    function gb(FF) {
      let {
        view: WF,
        controller: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)();
      return (0, DA.jsxs)(DA.Fragment, {
        children: [(0, DA.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: WF.islands.map((FF => (0, DA.jsx)(Qh, {
            island: FF,
            view: WF,
            aim: SF.aim
          }, FF.id)))
        }), null !== WF.almanac && (0, DA.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: CF("skyblockGame:passageTitle")
          }), (0, DA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, DA.jsx)(uh, {
              phase: WF.almanac.phase
            }), WF.almanac.phaseName]
          }), (0, DA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, DA.jsx)(uh, {
              phase: WF.almanac.nextPhase
            }), WF.almanac.next]
          })]
        }), (0, DA.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: CF("skyblockGame:keepersChairFavour")
          }), WF.aimed && (0, DA.jsx)(cu.N, {
            className: "SkyblockKeepersChairRest",
            disabled: !WF.canAim,
            onClick: () => {
              SF.aim(null)
            },
            children: CF("skyblockGame:keepersChairRest")
          })]
        }), null !== WF.status && (0, DA.jsx)("p", {
          className: gu()("SkyblockKeepersChairStatus", "refused" === WF.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: WF.status.text
        })]
      })
    }

    function tb(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(DC, WF.getSnapshot());
      if (!CF.enabled) return null;
      const AF = CF.freshCount > 0 ? SF("skyblockGame:reachLogOpenNews", {
        count: CF.freshCount
      }) : SF("skyblockGame:reachLogOpen");
      return (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsxs)("button", {
          type: "button",
          className: gu()("SkyblockReachLogButton", CF.freshCount > 0 && "HasNews", CF.pending && "Pending"),
          "aria-label": AF,
          title: AF,
          onClick: WF.ask,
          children: [CF.news && (0, DA.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${CF.newsToken}`), (0, DA.jsx)("span", {
            className: gu()("SkyblockReachLogIcon", CF.news && "Jump"),
            "aria-hidden": "true",
            children: (0, DA.jsx)(au.b, {
              itemName: mA,
              amount: 0
            })
          }, `icon:${CF.newsToken}`), CF.freshCount > 0 && (0, DA.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: CF.freshCount
          })]
        })
      })
    }

    function Th(FF) {
      let {
        gift: WF
      } = FF;
      return (0, DA.jsx)("li", {
        className: gu()("SkyblockRegularsGift", WF.given && "Given"),
        children: WF.text
      })
    }

    function ab(FF) {
      let {
        regular: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)();
      return (0, DA.jsxs)("li", {
        className: gu()("SkyblockRegularsCard", WF.tagged ? "Tagged" : "Untagged", WF.resting && "Resting"),
        children: [(0, DA.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: WF.fishName,
            children: (0, DA.jsx)(au.b, {
              itemName: WF.itemName,
              amount: 0
            })
          }), (0, DA.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, DA.jsx)("h3", {
              children: WF.name
            }), (0, DA.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: WF.fishName
            })]
          })]
        }), (0, DA.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: WF.line
        }), (0, DA.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: WF.size
          }), WF.tagged && (0, DA.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: WF.resting ? SF("skyblockGame:regularsResting") : WF.meetings
          })]
        }), (0, DA.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: WF.chance
        }), (0, DA.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: WF.gifts.map((FF => (0, DA.jsx)(Th, {
            gift: FF
          }, FF.text)))
        }), WF.history.length > 0 && (0, DA.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: WF.history.map(((FF, WF) => (0, DA.jsx)("li", {
            children: FF
          }, WF)))
        })]
      })
    }

    function kb(FF) {
      let {
        controller: WF,
        island: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)(), AF = (0, NA.i)(vA, WF.getSnapshot()), uF = AF.islands.find((FF => FF.id === SF));
      if (!AF.enabled || void 0 === uF) return null;
      const hF = CF("skyblockGame:regularsOpen");
      return (0, DA.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": hF,
        title: hF,
        onClick: () => {
          WF.openIsland(SF)
        },
        children: [(0, DA.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: CF("skyblockGame:regularsTitle")
        }), uF.regulars.map((FF => (0, DA.jsx)("span", {
          className: gu()("SkyblockRegularsStripIcon", FF.tagged && "Tagged"),
          title: FF.name,
          children: (0, DA.jsx)(au.b, {
            itemName: FF.itemName,
            amount: 0
          })
        }, FF.id)))]
      })
    }

    function qb(FF) {
      var WF;
      let {
        controller: SF
      } = FF;
      const CF = (0, NA.i)(vA, SF.getSnapshot()),
        {
          t: AF
        } = (0, VA.B)(),
        uF = zu();
      if (!CF.enabled) return null;
      const hF = null !== (WF = CF.islands.find((FF => FF.id === CF.selected))) && void 0 !== WF ? WF : null;
      return (0, DA.jsx)(MA.b, {
        show: CF.open,
        close: SF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: uF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: AF("skyblockGame:regularsTitle")
              }), (0, DA.jsx)("p", {
                children: AF("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: SF.dismiss
            })]
          }), (0, DA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: CF.islands.map((FF => {
              const WF = FF.id === CF.selected;
              return (0, DA.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": WF,
                "data-pad-tab": !0,
                "data-pad-selected": WF ? "true" : void 0,
                className: gu()("SkyblockReachLogTab", `Island-${FF.id}`, WF && "Selected", FF.charm.given && "GoldPage"),
                onClick: () => {
                  SF.selectIsland(FF.id)
                },
                children: (0, DA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: FF.name
                })
              }, FF.id)
            }))
          }), (0, DA.jsxs)("div", {
            className: gu()("SkyblockRegularsPage", null !== hF && `Island-${hF.id}`),
            role: "tabpanel",
            children: [(0, DA.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: AF("skyblockGame:regularsHow")
            }), null !== hF && (0, DA.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: hF.regulars.map((FF => (0, DA.jsx)(ab, {
                regular: FF
              }, FF.id)))
            })]
          }), null !== hF && (0, DA.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, DA.jsx)("span", {
              className: gu()("SkyblockRegularsCharm", hF.charm.given && "Given"),
              children: hF.charm.text
            })
          })]
        })
      })
    }
    const Vh = [{
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
      Nh = Array.from({
        length: 6
      }, ((FF, WF) => ({
        "--x": `${(88*(.618034*WF%1)).toFixed(1)}%`,
        "--y": `${(10+37*WF%70).toFixed(1)}%`,
        "--size": 7 + WF % 3 * 3 + "rem",
        "--drift-x": 3 * (WF % 3 - 1) + "rem",
        "--drift-y": 2 * (WF % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + WF % 4 * 3 + "s",
        "--delay": 2.5 * -WF + "s"
      }))),
      Dh = Array.from({
        length: 14
      }, ((FF, WF) => ({
        "--left": `${(3+94*((.618034*WF+.3)%1)).toFixed(1)}%`,
        "--size": 4 + WF % 4 * 2 + "px",
        "--sway": WF % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*WF%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*WF%12).toFixed(2)}s`
      }))),
      Lh = (0, DF.memo)((function(FF) {
        let {
          island: WF
        } = FF;
        return (0, DA.jsxs)("div", {
          className: gu()("SkyblockReachLogDepths", null !== WF && `Island-${WF}`),
          "aria-hidden": "true",
          children: [Vh.map(((FF, WF) => (0, DA.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: FF
          }, `shaft${WF}`))), Nh.map(((FF, WF) => (0, DA.jsx)("span", {
            className: gu()("SkyblockReachLogMote", WF % 2 === 1 && "Violet"),
            style: FF
          }, `mote${WF}`))), Dh.map(((FF, WF) => (0, DA.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: FF
          }, `bubble${WF}`)))]
        })
      })),
      mb = 100;

    function Oh(FF) {
      let {
        view: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)();
      if (null === WF || 0 === WF.total) return null;
      const CF = mb * WF.aspect,
        AF = SF("skyblockGame:hiddenWatersCount", {
          found: WF.found,
          total: WF.total
        });
      return (0, DA.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${SF("skyblockGame:hiddenWatersTitle")}: ${AF}`,
        children: [(0, DA.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${CF}`,
          "aria-hidden": "true",
          children: [WF.islands.map(((FF, WF) => (0, DA.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (FF.left + FF.width / 2) * mb,
            cy: (FF.top + FF.height / 2) * CF,
            rx: FF.width / 2 * mb,
            ry: FF.height / 2 * CF
          }, WF))), WF.pins.map(((FF, WF) => (0, DA.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: FF.left * mb,
            cy: FF.top * CF,
            r: 13
          }, WF)))]
        }), (0, DA.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, DA.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: SF("skyblockGame:hiddenWatersTitle")
          }), (0, DA.jsx)("span", {
            className: WF.found === WF.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: AF
          })]
        })]
      })
    }

    function xb(FF) {
      let {
        view: WF,
        island: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)(), AF = null === WF || void 0 === WF ? void 0 : WF.glimpses.get(SF);
      return void 0 === AF || 0 === AF.length ? null : (0, DA.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, DA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: CF("skyblockGame:hiddenWatersGlimpsed")
        }), (0, DA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: AF.map((FF => (0, DA.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, DA.jsx)(au.b, {
              itemName: FF,
              amount: 0
            })
          }, FF)))
        })]
      })
    }
    const Zh = ["Bronze", "Silver", "Gold"],
      oh = [{
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
      Yh = oh.slice(0, 2);

    function Mh(FF) {
      return FF ? oh : Yh
    }

    function cb(FF) {
      let {
        fish: WF,
        letGoShown: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)();
      return (0, DA.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Zh.map(((FF, SF) => {
          const AF = SF < WF.marks;
          return (0, DA.jsx)("span", {
            className: gu()("SkyblockReachLogPip", FF, AF && "Earned", AF && WF.fresh && SF === WF.marks - 1 && "Newest"),
            title: CF(LC[SF])
          }, FF)
        })), (0, DA.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Mh(SF).map(((FF, SF) => (0, DA.jsx)("span", {
          className: gu()("SkyblockReachLogRibbon", FF.className, !0 === WF.ribbons[SF] && "Earned"),
          title: CF(FF.titleKey)
        }, FF.className)))]
      })
    }

    function Gh(FF) {
      let {
        letGoShown: WF,
        haloShown: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)();
      return (0, DA.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, DA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: CF("skyblockGame:reachLogMarks"),
          children: [(0, DA.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), CF("skyblockGame:reachLogLegendMarks")]
        }), Mh(WF).map((FF => (0, DA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: CF(FF.titleKey),
          children: [(0, DA.jsx)("span", {
            className: gu()("SkyblockReachLogRibbon", FF.className, "Earned")
          }), CF(FF.legendKey)]
        }, FF.className))), (0, DA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: CF("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, DA.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), CF("skyblockGame:reachLogLegendGlimmer")]
        }), SF && (0, DA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: CF("skyblockGame:reachLogHaloTitle"),
          children: [(0, DA.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), CF("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function zb(FF) {
      let {
        returner: WF
      } = FF;
      return (0, DA.jsxs)("div", {
        className: gu()("SkyblockReachLogReturner", WF.back && "Back"),
        children: [(0, DA.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, DA.jsx)(au.b, {
            itemName: WF.itemName,
            amount: 0
          })
        }), (0, DA.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: WF.line
        })]
      })
    }

    function Ih(FF) {
      let {
        fish: WF,
        letGoShown: SF
      } = FF;
      const {
        t: CF
      } = (0, VA.B)();
      return (0, DA.jsxs)("li", {
        className: gu()("SkyblockReachLogCard", WF.caught ? "Caught" : "Unknown", WF.marks >= 3 && "GoldCard", WF.fresh && "Fresh", WF.visitor && "Visitor"),
        children: [WF.visitor && (0, DA.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: CF("skyblockGame:reachLogVisitor")
        }), WF.fresh && Array.from({
          length: 4
        }, ((FF, WF) => (0, DA.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, WF))), (0, DA.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [WF.halo && (0, DA.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: CF("skyblockGame:reachLogHaloTitle")
          }), (0, DA.jsx)(au.b, {
            itemName: WF.itemName,
            amount: 0
          }), WF.glimmer && (0, DA.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: CF("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, DA.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: WF.name
        }), (0, DA.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: WF.chance
        }), (0, DA.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: WF.best
        }), (0, DA.jsx)(cb, {
          fish: WF,
          letGoShown: SF
        })]
      })
    }

    function fh(FF) {
      let {
        page: WF,
        letGoShown: SF,
        hiddenWaters: CF
      } = FF;
      const {
        t: AF
      } = (0, VA.B)();
      return WF.awake ? (0, DA.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: WF.fish.map((FF => (0, DA.jsx)(Ih, {
          fish: FF,
          letGoShown: SF
        }, FF.itemName)))
      }) : (0, DA.jsxs)(DA.Fragment, {
        children: [(0, DA.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: AF("skyblockGame:reachLogAsleep")
        }), (0, DA.jsx)(xb, {
          view: CF,
          island: WF.id
        })]
      })
    }

    function yb(FF) {
      var WF, SF;
      let {
        controller: CF,
        regulars: AF,
        hiddenWaters: uF
      } = FF;
      const hF = (0, NA.i)(DC, CF.getSnapshot()),
        bW = function(FF) {
          return (0, NA.i)(WA, FF.getSnapshot())
        }(uF),
        dF = (0, NA.i)(vA, AF.getSnapshot()),
        {
          t: PF
        } = (0, VA.B)(),
        RF = zu();
      if (!hF.enabled) return null;
      const iW = null !== (WF = hF.pages.find((FF => FF.id === hF.selected))) && void 0 !== WF ? WF : null;
      return (0, DA.jsx)(MA.b, {
        show: hF.open,
        close: CF.dismiss,
        togglePointerLock: !1,
        className: gu()("SkyblockSkillsOverlay", dF.open && "SkyblockReachLogUnderLedger"),
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: RF,
          onKeyDown: GA,
          children: [(0, DA.jsx)(Lh, {
            island: null !== (SF = null === iW || void 0 === iW ? void 0 : iW.id) && void 0 !== SF ? SF : null
          }), (0, DA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: PF("skyblockGame:reachLogTitle")
              }), (0, DA.jsx)("p", {
                children: PF("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, DA.jsx)(Oh, {
              view: bW
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: CF.dismiss
            })]
          }), (0, DA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: hF.pages.map((FF => {
              const WF = FF.id === hF.selected,
                SF = FF.fish.some((FF => FF.fresh));
              return (0, DA.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": WF,
                "data-pad-tab": !0,
                "data-pad-selected": WF ? "true" : void 0,
                className: gu()("SkyblockReachLogTab", `Island-${FF.id}`, WF && "Selected", !FF.awake && "Asleep", FF.gold && "GoldPage", SF && "HasNews"),
                onClick: () => {
                  CF.selectPage(FF.id)
                },
                children: [(0, DA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: FF.name
                }), FF.awake && (0, DA.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: PF("skyblockGame:reachLogCaughtCount", {
                    caught: FF.caught,
                    total: FF.total
                  })
                })]
              }, FF.id)
            }))
          }), (0, DA.jsxs)("div", {
            className: gu()("SkyblockReachLogPage", null !== iW && `Island-${iW.id}`),
            role: "tabpanel",
            children: [null !== iW && (0, DA.jsx)(fh, {
              page: iW,
              letGoShown: hF.letGoShown,
              hiddenWaters: bW
            }), !0 === (null === iW || void 0 === iW ? void 0 : iW.awake) && null !== iW.returner && (0, DA.jsx)(zb, {
              returner: iW.returner
            }), !0 === (null === iW || void 0 === iW ? void 0 : iW.awake) && (0, DA.jsx)(kb, {
              controller: AF,
              island: iW.id
            })]
          }), (0, DA.jsx)("footer", {
            className: gu()("SkyblockReachLogFooter", null !== iW && `Island-${iW.id}`, !0 === (null === iW || void 0 === iW ? void 0 : iW.gold) && "GoldPage"),
            children: !0 === (null === iW || void 0 === iW ? void 0 : iW.gold) ? (0, DA.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: PF("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, DA.jsxs)(DA.Fragment, {
              children: [(0, DA.jsx)(Gh, {
                letGoShown: hF.letGoShown,
                haloShown: !0 === (null === iW || void 0 === iW ? void 0 : iW.fish.some((FF => FF.halo)))
              }), (0, DA.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: PF("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var sh = SF(3823);

    function nh(FF) {
      let {
        conversation: WF,
        completedLabel: SF
      } = FF;
      return (0, DA.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, DA.jsxs)("header", {
          children: [(0, DA.jsx)("h3", {
            children: WF.questName
          }), WF.completed && (0, DA.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: SF
          })]
        }), WF.lines.map((FF => (0, DA.jsx)(sh.c, {
          display: FF.display
        }, FF.key)))]
      })
    }

    function Hh(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(CA, WF.getSnapshot()), AF = zu();
      if (!CF.enabled) return null;
      const uF = !CF.loading && 0 === CF.conversations.length;
      return (0, DA.jsx)(MA.b, {
        show: CF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: SF("skyblockDialogue:title")
              }), (0, DA.jsx)("p", {
                children: SF("skyblockDialogue:intro")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: WF.dismiss
            })]
          }), (0, DA.jsxs)("div", {
            className: gu()("SkyblockDialogueBody", {
              SingleColumn: null !== CF.questFocus || 0 === CF.characters.length
            }),
            children: [null === CF.questFocus && CF.characters.length > 0 && (0, DA.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: CF.characters.map((FF => (0, DA.jsx)(cu.e, {
                className: gu()("SkyblockDialogueCharacter", {
                  Selected: FF.selected
                }),
                onClick: () => {
                  WF.selectCharacter(FF.id)
                },
                children: (0, DA.jsx)(ku.d, {
                  text: FF.styling
                })
              }, FF.id)))
            }), (0, DA.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== CF.questFocus && (0, DA.jsx)(cu.e, {
                className: "SkyblockDialogueBack",
                onClick: WF.showCharacters,
                children: SF("skyblockDialogue:allCharacters")
              }), CF.loading && (0, DA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: SF("skyblockDialogue:loading")
              }), uF && (0, DA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: SF(null === CF.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), CF.conversations.map((FF => (0, DA.jsx)(nh, {
                conversation: FF,
                completedLabel: CF.completedLabel
              }, FF.questId)))]
            })]
          })]
        })
      })
    }

    function Kh(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(dA, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu();
      return SF.enabled ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: CF("skyblockGame:autographBook")
              }), (0, DA.jsx)("p", {
                children: CF("skyblockGame:autographBookIntro")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              onClick: WF.dismiss
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, DA.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, DA.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, DA.jsx)("strong", {
                  children: SF.total
                }), (0, DA.jsx)("span", {
                  children: CF("skyblockGame:autographTotal")
                })]
              }), (0, DA.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, DA.jsx)("strong", {
                  children: SF.rankTotal
                }), (0, DA.jsx)("span", {
                  children: CF("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === SF.entries.length ? (0, DA.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: CF("skyblockGame:autographBookEmpty")
            }) : (0, DA.jsx)("ul", {
              className: "SkyblockAutographList",
              children: SF.entries.map((FF => (0, DA.jsxs)("li", {
                className: gu()("SkyblockAutograph", {
                  Ranked: null !== FF.rank
                }),
                style: null === FF.rank ? void 0 : {
                  color: FF.rank.colour
                },
                children: [null !== FF.rank && (0, DA.jsx)(bh.e, {
                  className: "SkyblockAutographRankIcon",
                  name: FF.rank.icon,
                  kit: (0, bh.h)(FF.rank.icon)
                }), (0, DA.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, DA.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: FF.name
                  }), (0, DA.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== FF.rank && (0, DA.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: FF.rank.label
                    }), (0, DA.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: FF.signedOn
                    })]
                  })]
                })]
              }, FF.key)))
            })]
          })]
        })
      }) : null
    }
    const wh = (0, DF.memo)((function(FF) {
        let {
          controller: WF
        } = FF;
        return (0, DA.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: WF.display.mountWaypoint,
          children: [(0, DA.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, DA.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, DA.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, DA.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, DA.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, DA.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Xh = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Uh(FF) {
      return "next" === FF.phase ? "\u2192" : Xh[FF.kind]
    }
    const Bh = (0, DF.memo)((function(FF) {
      let {
        controller: WF,
        display: SF
      } = FF;
      const CF = (0, NA.i)(hS, WF.getNotificationSnapshot()),
        [AF, uF] = (0, DF.useState)(!1);
      return (0, NA.e)("qteStateUpdated", (FF => {
        uF(FF.isActive)
      })), (0, DA.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (AF ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [CF && (0, DA.jsxs)("div", {
          className: `SkyblockQuestNotification ${CF.kind} ${CF.phase}`,
          style: {
            "--quest-notification-duration": `${CF.durationMs}ms`,
            ...CF.accent && {
              "--quest-notification-accent": CF.accent
            }
          },
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (CF.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, DA.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Uh(CF)
            }), CF.iconItem && (0, DA.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, DA.jsx)(au.b, {
                itemName: CF.iconItem,
                amount: 0
              })
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, DA.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: CF.title
            }), (0, DA.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, DA.jsx)(Fu.c, {
                text: CF.name
              })
            }), CF.description && (0, DA.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, DA.jsx)(Fu.c, {
                text: CF.description
              })
            }), CF.reward && (0, DA.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, DA.jsx)(Fu.c, {
                text: CF.reward
              })
            })]
          })]
        }, CF.token), (null === CF || void 0 === CF ? void 0 : CF.waypointNameKey) && (0, DA.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": CF.waypointNameKey,
          "data-notification-token": CF.token,
          ref: SF.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${CF.token}`)]
      })
    }));

    function jb(FF) {
      const WF = parseInt(FF.replace("#", ""), 16);
      return `${WF>>16&255}, ${WF>>8&255}, ${255&WF}`
    }
    const vb = (0, DF.memo)((function(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(MS, WF.getSnapshot());
      if (!CF) return null;
      const AF = "arrival" === CF.phase;
      return (0, DA.jsxs)("div", {
        className: gu()("SkyblockPortalTransit", {
          Departure: !AF,
          Arrival: AF
        }),
        style: {
          "--portal-rgb": jb(CF.colour),
          "--portal-duration": `${CF.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, DA.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, DA.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            WF.finishArrival(CF.token)
          }
        }), (0, DA.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, DA.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !AF && (0, DA.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: SF("skyblockGame:portalTransitHeading")
          }), (0, DA.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: SF(CF.zoneNameKey)
          })]
        })]
      }, CF.token)
    }));

    function Jh() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ph() {
      const FF = document.querySelector(".SkyblockHudCoins"),
        WF = null === FF || void 0 === FF ? void 0 : FF.getBoundingClientRect();
      return WF && WF.width > 0 ? {
        x: WF.left + Math.min(WF.width, 24) / 2,
        y: WF.top + WF.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function lh(FF) {
      return {
        x: FF.left + FF.width / 2,
        y: FF.top + FF.height / 2
      }
    }

    function Fb() {
      var FF;
      const WF = null === (FF = document.querySelector(".HotBar")) || void 0 === FF ? void 0 : FF.getBoundingClientRect();
      return WF && WF.width > 0 ? lh(WF) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Wb(FF) {
      let {
        items: WF,
        origins: SF,
        target: CF
      } = FF;
      return (0, DA.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: WF.map(((FF, WF) => {
          const AF = SF[WF];
          return (0, DA.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${AF.x}px`,
              top: `${AF.y}px`,
              "--item-dx": CF.x - AF.x + "px",
              "--item-dy": CF.y - AF.y + "px",
              "--item-delay": 2e3 + 160 * WF + "ms",
              "--item-flight": "700ms"
            },
            children: (0, DA.jsx)(au.b, {
              itemName: FF.dailyRewardItemName,
              amount: 0
            })
          }, FF.dailyRewardItemName)
        }))
      })
    }

    function Sb(FF, WF) {
      const SF = -Math.PI / 2 + 1.25 * (FF / (WF - 1) * 2 - 1),
        CF = 70 + FF % 3 * 22;
      return {
        x: Math.cos(SF) * CF,
        y: Math.sin(SF) * CF * .7
      }
    }

    function Cb(FF) {
      let {
        origin: WF,
        target: SF,
        count: CF
      } = FF;
      const AF = [];
      for (let uF = 0; uF < CF; uF++) {
        const FF = Sb(uF, CF);
        AF.push((0, DA.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${WF.x}px`,
            top: `${WF.y}px`,
            "--coin-bx": `${FF.x}px`,
            "--coin-by": `${FF.y}px`,
            "--coin-dx": SF.x - WF.x + "px",
            "--coin-dy": SF.y - WF.y + "px",
            "--coin-delay": `${yC(uF,CF)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, DA.jsx)(au.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, uF))
      }
      return (0, DA.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: AF
      })
    }

    function Ab(FF) {
      let {
        day: WF
      } = FF;
      const SF = LF[WF - 1];
      return (0, DA.jsxs)(DA.Fragment, {
        children: [(0, DA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, DA.jsx)(au.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, qu.f)(SF.dailyRewardCoins)]
        }), SF.dailyRewardItems.map((FF => (0, DA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, DA.jsx)(au.b, {
            itemName: FF.dailyRewardItemName,
            amount: 0
          }), "\xd7", FF.dailyRewardItemAmount]
        }, FF.dailyRewardItemName)))]
      })
    }

    function ub(FF) {
      let {
        day: WF
      } = FF;
      const SF = OF(WF);
      return (0, DA.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: LF.map(((FF, CF) => {
          const AF = CF + 1;
          return (0, DA.jsxs)("li", {
            className: gu()("SkyblockDailyRewardTile", {
              Claimed: AF < WF && AF !== SF,
              Today: AF === WF,
              Tomorrow: AF === SF,
              Jackpot: AF === mW
            }),
            children: [(0, DA.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: AF
            }), (0, DA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, DA.jsx)(au.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, qu.f)(FF.dailyRewardCoins)]
            }), FF.dailyRewardItems.map((FF => (0, DA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, DA.jsx)(au.b, {
                itemName: FF.dailyRewardItemName,
                amount: 0
              }), "\xd7", FF.dailyRewardItemAmount]
            }, FF.dailyRewardItemName)))]
          }, AF)
        }))
      })
    }

    function hb(FF) {
      let {
        view: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, DF.useRef)(null), AF = (0, DF.useRef)(null), [uF, hF] = (0, DF.useState)(null);
      (0, DF.useLayoutEffect)((() => {
        var FF;
        const WF = null === (FF = CF.current) || void 0 === FF ? void 0 : FF.getBoundingClientRect();
        if (WF) {
          var SF, uF;
          const FF = Array.from(null !== (SF = null === (uF = AF.current) || void 0 === uF ? void 0 : uF.children) && void 0 !== SF ? SF : [], (FF => lh(FF.getBoundingClientRect())));
          hF({
            origin: lh(WF),
            target: ph(),
            itemOrigins: FF,
            itemTarget: Fb()
          })
        }
      }), []);
      const bW = OF(WF.day),
        dF = function(FF, WF) {
          const [SF, CF] = (0, DF.useState)((() => Jh() ? FF : 0));
          return (0, DF.useEffect)((() => {
            if (Jh()) return;
            const SF = performance.now();
            let AF = 0;
            const uF = hF => {
              const bW = Math.min(Math.max((hF - SF) / WF, 0), 1);
              CF(Math.round(FF * (1 - (1 - bW) ** 3))), bW < 1 && (AF = requestAnimationFrame(uF))
            };
            return AF = requestAnimationFrame(uF), () => {
              cancelAnimationFrame(AF)
            }
          }), [FF, WF]), SF
        }(WF.coins, 450);
      return (0, DA.jsxs)("div", {
        className: gu()("SkyblockDailyReward", {
          Jackpot: WF.day === mW
        }),
        style: {
          "--daily-duration": `${WF.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, DA.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, DA.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, DA.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: SF("skyblockGame:dailyRewardTitle")
            }), (0, DA.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: SF("skyblockGame:dailyRewardDay", {
                day: String(WF.day)
              })
            })]
          }), (0, DA.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: CF,
            children: [(0, DA.jsx)(au.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, DA.jsxs)("span", {
              children: ["+", (0, qu.f)(dF)]
            })]
          }), WF.items.length > 0 && (0, DA.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: AF,
            children: WF.items.map((FF => (0, DA.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, DA.jsx)(au.b, {
                itemName: FF.dailyRewardItemName,
                amount: 0
              }), "\xd7", FF.dailyRewardItemAmount]
            }, FF.dailyRewardItemName)))
          }), (0, DA.jsx)(ub, {
            day: WF.day
          }), (0, DA.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [SF("skyblockGame:dailyRewardComeBack"), (0, DA.jsx)(Ab, {
              day: bW
            })]
          })]
        }), null !== uF && (0, DA.jsx)(Cb, {
          origin: uF.origin,
          target: uF.target,
          count: WF.flyingCoins
        }), null !== uF && uF.itemOrigins.length === WF.items.length && (0, DA.jsx)(Wb, {
          items: WF.items,
          origins: uF.itemOrigins,
          target: uF.itemTarget
        })]
      })
    }
    const bd = (0, DF.memo)((function(FF) {
        let {
          controller: WF
        } = FF;
        const SF = (0, NA.i)(zC, WF.getSnapshot());
        return SF ? (0, DA.jsx)(hb, {
          view: SF
        }, SF.token) : null
      })),
      db = "Gold Coin";

    function Pb(FF) {
      return 650 + 220 * FF
    }

    function Rb(FF) {
      return {
        "--letter-delay": `${Pb(FF)}ms`,
        "--letter-land": `${Pb(FF)+300}ms`
      }
    }

    function eb(FF) {
      let {
        letterCount: WF
      } = FF;
      return (0, DA.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, DA.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, DA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, DA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: WF
        }, ((FF, WF) => (0, DA.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Rb(WF),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, WF)))]
      })
    }

    function Eb(FF) {
      var WF, SF, CF;
      let {
        letter: AF,
        index: uF
      } = FF;
      const {
        t: hF
      } = (0, VA.B)(), bW = null !== (WF = null === (SF = AF.items[0]) || void 0 === SF ? void 0 : SF.itemName) && void 0 !== WF ? WF : db;
      return (0, DA.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Rb(uF),
        children: [(0, DA.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, DA.jsx)(au.b, {
            itemName: bW,
            amount: 0
          })
        }), (0, DA.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: hF(AF.reasonKey, null !== (CF = AF.reasonParams) && void 0 !== CF ? CF : void 0)
        }), (0, DA.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [AF.coins > 0 && (0, DA.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, DA.jsx)(au.b, {
              itemName: db,
              amount: 0
            }), "+", (0, qu.f)(AF.coins)]
          }), AF.items.map(((FF, WF) => (0, DA.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, DA.jsx)(au.b, {
              itemName: FF.itemName,
              amount: 0
            }), FF.label, " \xd7", FF.amount]
          }, WF)))]
        })]
      })
    }

    function Qb(FF) {
      let {
        view: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)();
      return (0, DA.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${WF.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Pb(WF.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, DA.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, DA.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, DA.jsx)(eb, {
              letterCount: WF.letters.length
            }), (0, DA.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: SF("skyblockGame:mailboxTitle")
            })]
          }), (0, DA.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: WF.letters.map(((FF, WF) => (0, DA.jsx)(Eb, {
              letter: FF,
              index: WF
            }, WF)))
          }), WF.more > 0 && (0, DA.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: SF("skyblockGame:mailboxMore", {
              count: String(WF.more)
            })
          })]
        })
      })
    }
    const rd = (0, DF.memo)((function(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(nS, WF.getSnapshot());
      return SF ? (0, DA.jsx)(Qb, {
        view: SF
      }, SF.token) : null
    }));

    function gd(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(MC, WF.getSnapshot());
      if (null === CF) return null;
      const AF = CF.fullSet ? "empty" === CF.fuelState ? {
        text: SF("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: SF("skyblockGame:magmawardHudFullSet", {
          worn: String(CF.wornCount)
        }),
        tone: "partial"
      };
      return (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsxs)("div", {
          className: gu()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${CF.fuelState}`, {
            "SkyblockMagmawardHud-partial": !CF.fullSet,
            "SkyblockMagmawardHud-armed": CF.fullSet && "empty" !== CF.fuelState
          }),
          children: [null !== CF.flare && (0, DA.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${CF.flare}`
          }, `flare:${CF.flareToken}`), (0, DA.jsx)("div", {
            className: gu()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: CF.setLit
            }),
            children: CF.pieces.map(((FF, WF) => (0, DA.jsx)("div", {
              className: gu()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: FF.worn,
                SkyblockMagmawardPieceJustWorn: FF.justWorn
              }),
              children: (0, DA.jsx)(au.b, {
                itemName: FF.itemName,
                amount: 0
              })
            }, `${WF}:${FF.wornToken}`)))
          }, `pieces:${CF.setLitToken}`), (0, DA.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, DA.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, DA.jsxs)("div", {
              className: gu()("SkyblockMagmawardFuelCounter", CF.pulse && `SkyblockMagmawardFuelCounter-${CF.pulse}`),
              children: [(0, DA.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, DA.jsx)(au.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, DA.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: CF.fuel
              })]
            }, `counter:${CF.pulseToken}`), "burn" === CF.pulse && (0, DA.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${CF.pulseToken}`)]
          }), AF && (0, DA.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${AF.tone} SmallTextBold`,
            children: AF.text
          })]
        })
      })
    }

    function td(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF,
        selectedLanguage: CF
      } = (0, VA.B)(), AF = (0, NA.i)(GC, WF.getSnapshot());
      return null === AF ? null : (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsxs)("div", {
          className: gu()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: AF.inRange
          }),
          style: {
            "--glowtide-colour": AF.colour
          },
          "aria-label": SF("skyblockGame:glowtideChipLabel"),
          children: [(0, DA.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), AF.inRange ? (0, DA.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: SF("skyblockGame:glowtideChipInRange")
          }, `call:${AF.inRangeToken}`) : (0, DA.jsxs)(DA.Fragment, {
            children: [(0, DA.jsx)("div", {
              ref: WF.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, DA.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: SF("skyblockGame:waypointDistance", {
                distance: qW(AF.distance, CF.code)
              })
            })]
          })]
        })
      })
    }

    function Tb(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(IC, WF.getSnapshot());
      return null === CF ? null : (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsxs)("div", {
          className: gu()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: CF.full
          }),
          "aria-label": SF("skyblockGame:glowMeterLabel", {
            fill: String(CF.fill),
            ZF: String(CF.ZF)
          }),
          children: [CF.burst && (0, DA.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${CF.burstToken}`), (0, DA.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, DA.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${CF.ratio})`
              }
            }), CF.gained && (0, DA.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${CF.gainToken}`), CF.full && Array.from({
              length: 5
            }, ((FF, WF) => (0, DA.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, WF)))]
          }), CF.full && CF.rares.map((FF => (0, DA.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, DA.jsx)(au.b, {
              itemName: FF,
              amount: 0
            })
          }, FF))), CF.ready && (0, DA.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, DA.jsx)("span", {
              children: SF("skyblockGame:glowMeterReady")
            })
          }, `ready:${CF.fullToken}`)]
        })
      })
    }

    function ad(FF) {
      let {
        controller: WF
      } = FF;
      const {
        t: SF
      } = (0, VA.B)(), CF = (0, NA.i)(yA, WF.getSnapshot());
      if (null === CF) return null;
      const AF = "waiting" === CF.phase,
        uF = {
          animationDuration: `${CF.waitMs}ms`,
          animationDelay: -CF.elapsedMs + "ms"
        },
        hF = AF ? void 0 : {
          animationDuration: `${CF.waitMs}ms`
        };
      return (0, DA.jsxs)("div", {
        className: AF ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [AF && (0, DA.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((FF, WF) => (0, DA.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, WF))), (0, DA.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: uF
          }), (0, DA.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, DA.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, DA.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: uF
            })]
          }), (0, DA.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, DA.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: hF,
          children: SF(CF.line)
        }, CF.lineIndex)]
      }, CF.token)
    }

    function kd(FF) {
      let {
        chart: WF,
        showHere: SF,
        className: CF
      } = FF;
      return (0, DA.jsx)("div", {
        className: gu()("SkyblockTideChartGrid", CF, null !== WF.pictureName && "Complete"),
        "aria-hidden": "true",
        children: WF.cells.map(((FF, CF) => {
          const AF = 0 !== (WF.pulseCells & 1 << CF),
            uF = WF.castCell === CF;
          return (0, DA.jsx)("span", {
            className: gu()("SkyblockTideChartCell", `Cell-${FF}`, AF && "Pulse", uF && "Cast", SF && WF.hereCell === CF && "Here")
          }, `${CF}:${AF?`p${WF.pulseToken}`:""}:${uF?`c${WF.castToken}`:""}`)
        }))
      })
    }

    function qd(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(nC, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = SF.chip;
      if (!SF.enabled || null === AF) return null;
      const uF = CF("skyblockGame:tideChartsChipLabel", {
        island: AF.islandName,
        lit: String(AF.lit),
        ink: String(AF.ink)
      });
      return (0, DA.jsx)(TA.e, {
        placement: "statBars",
        children: (0, DA.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: gu()("SkyblockTideChartsChip", SF.open && "Open", null !== AF.pictureName && "Complete"),
          "aria-label": uF,
          title: uF,
          onMouseDown: FF => {
            FF.preventDefault()
          },
          onClick: WF.toggle,
          children: [(0, DA.jsx)(kd, {
            chart: AF,
            showHere: !1,
            className: "Mini"
          }), (0, DA.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [AF.lit, "/", AF.ink]
          })]
        })
      })
    }

    function Vb(FF) {
      let {
        controller: WF
      } = FF;
      const SF = (0, NA.i)(nC, WF.getSnapshot()),
        {
          t: CF
        } = (0, VA.B)(),
        AF = zu(),
        uF = SF.card;
      return SF.enabled && null !== uF ? (0, DA.jsx)(MA.b, {
        show: SF.open,
        close: WF.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, DA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: AF,
          onKeyDown: GA,
          children: [(0, DA.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, DA.jsxs)("div", {
              children: [(0, DA.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: CF("skyblockGame:tideChartsTitle")
              }), (0, DA.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: CF("skyblockGame:tideChartsIntro")
              })]
            }), (0, DA.jsx)(cu.h, {
              padIgnore: !0,
              ariaLabel: CF("skyblockGame:tideChartsClose"),
              onClick: WF.dismiss
            })]
          }), SF.tabs.length > 1 && (0, DA.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": CF("skyblockGame:tideChartsIslands"),
            children: SF.tabs.map((FF => (0, DA.jsx)("button", {
              type: "button",
              className: gu()("SkyblockTideChartsTab", FF.selected && "Selected"),
              "aria-pressed": FF.selected,
              onClick: () => {
                WF.lW(FF.island)
              },
              children: FF.name
            }, FF.island)))
          }), (0, DA.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, DA.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": uF.gridLabel,
              children: (0, DA.jsx)(kd, {
                chart: uF,
                showHere: !0,
                className: "Large"
              })
            }), (0, DA.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, DA.jsx)("h3", {
                children: uF.islandName
              }), (0, DA.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: uF.litText
              }), null === uF.pictureName ? (0, DA.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: CF("skyblockGame:tideChartsPictureHidden")
              }) : (0, DA.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: CF("skyblockGame:tideChartsPictureRevealed", {
                  picture: uF.pictureName
                })
              }, uF.pictureName), (0, DA.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, DA.jsxs)("li", {
                  children: [(0, DA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), CF("skyblockGame:tideChartsLegendLit")]
                }), (0, DA.jsxs)("li", {
                  children: [(0, DA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), CF("skyblockGame:tideChartsLegendClear")]
                }), null !== uF.hereCell && (0, DA.jsxs)("li", {
                  children: [(0, DA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), CF("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, DA.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, DA.jsx)("span", {
                  children: SF.turnsText
                }), (0, DA.jsx)("span", {
                  children: SF.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Nb(FF) {
      var WF;
      let {
        controller: SF
      } = FF;
      const {
        selectedLanguage: CF
      } = (0, VA.B)(), AF = CF.code;
      (0, DF.useEffect)((() => {
        SF.setTranslator(((FF, WF) => (0, VA.w)(AF, FF, WF)), AF, ((FF, WF) => (0, VA.o)(AF, FF, WF)))
      }), [SF, AF]);
      const uF = (0, NA.i)(iW, SF.map.getSnapshot()),
        {
          openInGameMenuName: hF
        } = (0, tu.d)(["openInGameMenuName"]);
      return (0, DA.jsxs)(DA.Fragment, {
        children: [(0, DA.jsx)(Bh, {
          controller: SF.quests,
          display: SF.navigation.display
        }), uF.enabled && !hF && (0, DA.jsx)(JA, {
          controller: SF.navigation
        }), (0, DA.jsx)(LA, {
          controller: SF,
          minimap: uF.enabled && (null === (WF = uF.presentation) || void 0 === WF ? void 0 : WF.minimap) && (0, DA.jsx)(vu, {
            view: uF.presentation.minimap,
            navigation: SF.navigation,
            controller: SF.map
          }),
          children: (0, DA.jsx)(hu, {
            controller: SF.quests,
            surface: "hud"
          })
        }), (0, DA.jsx)(wh, {
          controller: SF.navigation
        }), (0, DA.jsx)(vb, {
          controller: SF.portalTransit
        }), (0, DA.jsx)(bd, {
          controller: SF.dailyReward
        }), (0, DA.jsx)(rd, {
          controller: SF.mailbox
        }), (0, DA.jsx)(gd, {
          controller: SF.magmaward
        }), (0, DA.jsx)(td, {
          controller: SF.glowtide
        }), (0, DA.jsx)(hh, {
          controller: SF.passage
        }), (0, DA.jsx)(qd, {
          controller: SF.tideCharts
        }), (0, DA.jsx)(Tb, {
          controller: SF.glowMeter
        }), (0, DA.jsx)(tb, {
          controller: SF.reachLog
        }), (0, DA.jsx)(ad, {
          controller: SF.hushWait
        }), (0, DA.jsx)(Eh, {
          controller: SF.lampLight
        }), (0, DA.jsx)(pA, {
          controller: SF.skills,
          surface: "hud"
        })]
      })
    }

    function Db(FF) {
      let {
        controller: WF
      } = FF;
      return (0, DA.jsxs)(DA.Fragment, {
        children: [(0, DA.jsx)(ju, {
          controller: WF.map,
          navigation: WF.navigation
        }), (0, DA.jsx)(pA, {
          controller: WF.skills,
          surface: "menu"
        }), (0, DA.jsx)(hu, {
          controller: WF.quests,
          surface: "menu"
        }), (0, DA.jsx)(su, {
          controller: WF.dungeons
        }), (0, DA.jsx)(Ku, {
          controller: WF.collections
        }), (0, DA.jsx)(Uu, {
          controller: WF.questGraph
        }), (0, DA.jsx)(pu, {
          controller: WF.forge
        }), (0, DA.jsx)(Ah, {
          controller: WF.smuggler
        }), (0, DA.jsx)(rb, {
          controller: WF.keepersChair,
          lampLight: WF.lampLight
        }), (0, DA.jsx)(yb, {
          controller: WF.reachLog,
          regulars: WF.regulars,
          hiddenWaters: WF.hiddenWaters
        }), (0, DA.jsx)(qb, {
          controller: WF.regulars
        }), (0, DA.jsx)(dh, {
          controller: WF.passage
        }), (0, DA.jsx)(Vb, {
          controller: WF.tideCharts
        }), (0, DA.jsx)(Hh, {
          controller: WF.dialogue
        }), (0, DA.jsx)(Kh, {
          controller: WF.autographs
        })]
      })
    }
    var Lb = SF(35247);
    const md = vC + CC;

    function Ob(FF, WF, SF, CF, AF) {
      const uF = [],
        hF = [],
        bW = SF => {
          const CF = FF.playSound(WF, SF.sound, SF.volume, SF.rate);
          CF && (hF.push(CF), void 0 !== SF.cutAfter && uF.push(setTimeout((() => {
            CF.fade(CF.getVolume(), 0, 300)
          }), SF.cutAfter)))
        };
      for (const dF of function(FF, WF) {
          const SF = [{
            sound: "rpgKnifeSlice1",
            beat: vC,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: vC,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: vC,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: vC,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: vC,
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
            sound: (0, Lb.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: md + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Lb.e)("bigDrumSwish"),
            beat: md + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: md + 60,
            lead: 180,
            volume: .5 + .06 * FF,
            rate: .82 + .07 * FF
          }];
          return FF >= 4 && SF.push({
            sound: "exp_levelup",
            beat: md + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), WF && SF.push({
            sound: "trumpetFlare",
            beat: md + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), SF.push({
            sound: "harp_pling",
            beat: JS,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), SF
        }(SF, CF)) AF ? uF.push(setTimeout((() => {
        bW(dF)
      }), Math.max(0, dF.beat - dF.lead / dF.rate))) : dF.beat !== vC && "magicAccent2" !== dF.sound && "trumpetFlare" !== dF.sound || bW(dF);
      return () => {
        for (const FF of uF) clearTimeout(FF);
        for (const FF of hF) FF.fade(FF.getVolume(), 0, 120)
      }
    }
    class xd {
      constructor(FF) {
        this.deps = FF, this.pending = new Map, this.localHook = null
      }
      hookWaiting(FF, WF) {
        this.pending.delete(FF);
        const SF = this.deps.now();
        if (null === WF) {
          var CF;
          if ((null === (CF = this.localHook) || void 0 === CF ? void 0 : CF.hookId) === FF) {
            const FF = SF >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(FF)
          }
          return
        }
        const AF = SF + WF;
        this.settle(FF, AF) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(FF, {
          untilMs: SF + 1e3,
          biteAtMs: AF
        }))
      }
      getLocalHook() {
        var FF, WF;
        return null !== (FF = null === (WF = this.localHook) || void 0 === WF ? void 0 : WF.hookId) && void 0 !== FF ? FF : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const FF = this.deps.now();
        for (const [WF, {
            untilMs: SF,
            biteAtMs: CF
          }] of this.pending)(this.settle(WF, CF) || FF > SF) && this.pending.delete(WF)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(FF, WF) {
        const SF = this.deps.getLineOwner(FF);
        if (null === SF) return !1;
        if (!this.deps.isLocalPlayer(SF)) return !0;
        if (this.localHook = {
            hookId: FF,
            biteAtMs: WF
          }, !this.deps.isHushWaiting()) {
          const [WF, SF] = this.deps.getHookPosition(FF);
          this.deps.onCastLanded(WF, SF)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Zb = SF(3434);
    const ob = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Yb = {
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
    class Mb {
      constructor(FF) {
        this.deps = FF, this.tell = null
      }
      receiveTell(FF) {
        let {
          biteTellTier: WF
        } = FF;
        this.tell = {
          tier: WF,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(FF) {
        const WF = this.tell;
        if (this.tell = null, !FF) return;
        const SF = null !== WF && this.deps.now() - WF.atMs <= 3e3 ? WF.tier : 0;
        this.deps.vibrate(ob[SF])
      }
      burstAtHook() {
        const FF = this.tell,
          WF = this.deps.getLocalHookPosition();
        null === FF || FF.burst || null === WF || (FF.burst = !0, this.deps.playParticles(function(FF, WF) {
          let [SF, CF, AF] = WF;
          const {
            count: uF,
            rise: hF,
            colour: bW
          } = Yb[FF], [dF, PF, RF] = bW;
          return {
            texture: "glint",
            pos1: [SF - .3, CF, AF - .3],
            pos2: [SF + .3, CF + .2, AF + .3],
            dir1: [-.6, hF, -.6],
            dir2: [.6, 1.4 * hF, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: uF,
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
              minColor: [dF, PF, RF, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [dF, PF, RF, 0],
              maxColor: [dF, PF, RF, 0]
            }],
            blendMode: Zb.f.Add,
            hideDist: 48
          }
        }(FF.tier, WF)))
      }
    }
    var cd = SF(1115),
      Gb = SF(1580),
      zd = SF(33);

    function Ib(FF, WF) {
      return [{
        timeFraction: 0,
        minColor: [255 * FF[0], 255 * FF[1], 255 * FF[2], 1],
        maxColor: [255 * WF[0], 255 * WF[1], 255 * WF[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const fb = [0, 0, 0],
      yd = {
        texture: "glint",
        mipmaps: !1,
        ZF: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: fb,
        dir2: fb,
        blendMode: Zb.f.OneOne
      },
      sb = {
        ...yd,
        colorGradients: Ib([1, .88, .38], [1, .65, .15])
      },
      nb = {
        ...yd,
        colorGradients: Ib([.55, .95, 1], [.9, 1, 1])
      },
      Hb = [.5, .5, .5],
      Kb = {
        texture: "glint",
        mipmaps: !1,
        ZF: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Ib([1, .12, .12], [1, .35, .2]),
        blendMode: Zb.f.OneOne
      };
    class wb {
      constructor() {
        this.drops = new Map
      }
      xA(FF, WF) {
        if ("overflowFlash" === WF.kind) {
          const [SF, CF, AF] = WF.position, uF = FF.createParticles(Kb, {
            pos: [SF, CF, AF],
            half: Hb
          });
          return uF.emit(18), void uF.stop()
        }
        this.drops.has(WF.itemId) || this.drops.set(WF.itemId, {
          owner: WF.owner,
          cosmetic: WF.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      lF(FF) {
        if (0 === this.drops.size) return;
        const WF = performance.now(),
          SF = FF.getCameraPosition();
        let CF = 0;
        for (const uF of this.drops.values()) null !== uF.particles && CF++;
        for (const [uF, hF] of this.drops) {
          const bW = FF.getPositionView(uF);
          if (null === bW) {
            var AF;
            if (hF.seen || WF - hF.markedAt > 5e3) null !== hF.particles && CF--, null === (AF = hF.particles) || void 0 === AF || AF.stop(), this.drops.delete(uF);
            continue
          }
          hF.cosmetic || !FF.isLocalPlayer(hF.owner) || hF.pickupDelayCleared || (FF.clearPickupDelay(uF), hF.pickupDelayCleared = !0);
          const dF = hF.lastPosition,
            PF = hF.seen && (bW[0] - dF[0]) ** 2 + (bW[1] - dF[1]) ** 2 + (bW[2] - dF[2]) ** 2 > 4e-4,
            RF = (bW[0] - SF[0]) ** 2 + (bW[1] - SF[1]) ** 2 + (bW[2] - SF[2]) ** 2 < 2025;
          hF.seen = !0, dF[0] = bW[0], dF[1] = bW[1], dF[2] = bW[2], PF && (hF.lastMovingAt = WF), null !== hF.particles && (!RF || WF - hF.lastMovingAt > 500) && (hF.particles.stop(), hF.particles = null, CF--), PF && RF && null === hF.particles && CF < 32 && (hF.particles = FF.createParticles(hF.cosmetic ? nb : sb, {
            pos: bW
          }), CF++), null !== hF.particles && (hF.particles.moveTo(bW), hF.particles.setEmitRate(PF ? 12 : 0)), !PF && null === hF.particles && WF - Math.max(hF.lastMovingAt, hF.markedAt) > 2e3 && this.drops.delete(uF)
        }
      }
      dispose() {
        for (const WF of this.drops.values()) {
          var FF;
          null === (FF = WF.particles) || void 0 === FF || FF.stop()
        }
        this.drops.clear()
      }
    }
    var Xb = SF(161);
    const Ub = Xb.h.aN * Xb.h.playerEyeToHeightRatio;
    class Bb {
      constructor(FF) {
        this.host = FF, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      xA(FF) {
        this.lava = FF, this.nextUpdateAt = 0
      }
      lF() {
        var FF;
        const WF = this.host.now();
        if (WF < this.nextUpdateAt) return;
        this.nextUpdateAt = WF + 250;
        const SF = this.host.playerPosition(),
          CF = SF && this.findNearest([SF[0], SF[1] + Ub, SF[2]]);
        if (!CF || CF.distance >= 40) return void this.stop();
        const AF = .5 * Math.min(1, (40 - CF.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(AF) : this.loop = this.host.play("lavaFlow", AF, CF.position, 40 + Ub, 9, !0), null === (FF = this.loop) || void 0 === FF || FF.setPosition(CF.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var FF;
        null === (FF = this.loop) || void 0 === FF || FF.stop(), this.loop = null
      }
      findNearest(FF) {
        let WF = -1,
          SF = 1 / 0;
        for (let CF = 0; CF < this.lava.length; CF += 3) {
          const AF = this.lava[CF] - FF[0],
            uF = this.lava[CF + 1] - FF[1],
            hF = this.lava[CF + 2] - FF[2],
            bW = AF * AF + uF * uF + hF * hF;
          bW < SF && (SF = bW, WF = CF)
        }
        return WF < 0 ? null : {
          position: [this.lava[WF], this.lava[WF + 1], this.lava[WF + 2]],
          distance: Math.sqrt(SF)
        }
      }
    }
    var jd = SF(1555),
      vd = SF(37040);
    const Jb = {
      "Grey Portal": "Gray"
    };
    for (const Cd of AF.Dc) Jb[`${Cd} Portal`] = Cd;
    const pb = Object.keys(Jb),
      lb = Object.fromEntries(pb.map((FF => [FF, (0, AF.U)(AF.D[`${(0,AF.xe)(Jb[FF])}Team`])])));
    Object.fromEntries(pb.map((FF => [FF, AF.D[`${(0,AF.xe)(Jb[FF])}UiText`]])));
    class Fd {
      constructor(FF, WF) {
        this.presentation = FF, this.portal = WF, this.unlocked = void 0
      }
      xA(FF) {
        const WF = !1 === this.unlocked && FF;
        this.unlocked = FF, this.lF();
        const {
          min: SF,
          max: CF,
          unlockedBlock: AF
        } = this.portal;
        if (WF && this.presentation.hasChunk(...SF)) {
          const [FF, WF, uF] = lb[AF];
          this.presentation.playParticles({
            pos1: [...SF],
            pos2: CF.map((FF => FF + 1)),
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
              minColor: [FF, WF, uF, 1],
              maxColor: [Math.min(255, FF + 55), Math.min(255, WF + 55), Math.min(255, uF + 90), 1]
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
      lF() {
        var FF;
        const WF = this.unlocked ? this.portal.unlockedBlock : null !== (FF = this.portal.lockedBlock) && void 0 !== FF ? FF : "Light Gray Portal",
          {
            min: SF,
            max: CF
          } = this.portal;
        for (let AF = SF[0]; AF <= CF[0]; AF++)
          for (let FF = SF[1]; FF <= CF[1]; FF++)
            for (let uF = SF[2]; uF <= CF[2]; uF++) this.presentation.hasChunk(AF, FF, uF) && this.presentation.dD(AF, FF, uF) !== WF && this.presentation.rSF(AF, FF, uF, WF)
      }
    }
    const Wd = {
        farming_1: {
          raises: FF => "NPC" === FF.type && "chef" === FF.variation,
          rise: .4
        },
        fishing_1: {
          raises: FF => "Draugr Warper" === FF.type,
          rise: .4
        }
      },
      Sd = (FF, WF, SF, uF) => {
        let {
          localPlayerId: hF
        } = uF;
        const bW = new QA({
          translate: (FF, WF) => (0, VA.w)(cd.h.get().getCurrentLanguageCode(), FF, WF),
          translateWithIcons: (FF, WF) => (0, VA.o)(cd.h.get().getCurrentLanguageCode(), FF, WF),
          setMenuOpen: FF => {
            FF ? (0, KF.n)() : (0, KF.d)()
          },
          dismissMenu: KF.e,
          publishSkills: FF => {
            wF.j.Uu(WS, FF, !0)
          },
          publishQuests: FF => {
            wF.j.Uu(uS, FF, !0)
          },
          publishQuestNotification: FF => {
            wF.j.Uu(hS, FF, !0)
          },
          publishDungeons: FF => {
            wF.j.Uu(PS, FF, !0)
          },
          publishCollections: FF => {
            wF.j.Uu(oS, FF, !0)
          },
          publishMap: FF => {
            wF.j.Uu(iW, FF, !0)
          },
          publishHud: FF => {
            wF.j.Uu(iu, FF, !0)
          },
          publishPortalTransit: FF => {
            wF.j.Uu(MS, FF, !0)
          },
          isLoadingScreenUp: () => tu.b.get("loadingOverlayVisible"),
          publishDailyReward: FF => {
            wF.j.Uu(zC, FF, !0)
          },
          publishMailbox: FF => {
            wF.j.Uu(nS, FF, !0)
          },
          publishQuestGraph: FF => {
            wF.j.Uu(KS, FF, !0)
          },
          publishForge: FF => {
            wF.j.Uu(RC, FF, !0)
          },
          publishSmuggler: FF => {
            wF.j.Uu(EC, FF, !0)
          },
          publishKeepersChair: FF => {
            wF.j.Uu(VC, FF, !0)
          },
          publishReachLog: FF => {
            wF.j.Uu(DC, FF, !0)
          },
          publishLampLight: FF => {
            wF.j.Uu(oC, FF, !0)
          },
          publishMagmaward: FF => {
            wF.j.Uu(MC, FF, !0)
          },
          publishGlowtide: FF => {
            wF.j.Uu(GC, FF, !0)
          },
          publishGlowMeter: FF => {
            wF.j.Uu(IC, FF, !0)
          },
          publishHushWait: FF => {
            wF.j.Uu(yA, FF, !0)
          },
          publishPassage: FF => {
            wF.j.Uu(gA, FF, !0)
          },
          publishTideCharts: FF => {
            wF.j.Uu(nC, FF, !0)
          },
          publishRegulars: FF => {
            wF.j.Uu(vA, FF, !0)
          },
          publishHiddenWaters: FF => {
            wF.j.Uu(WA, FF, !0)
          },
          publishDialogue: FF => {
            wF.j.Uu(CA, FF, !0)
          },
          publishAutographs: FF => {
            wF.j.Uu(dA, FF, !0)
          },
          onDailyRewardStarted: FF => {
            yW.playSound(hF, FF.day === mW ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (FF, WF) => {
            yW.playSound(hF, "exp_collect", .35, 1 + .6 * FF / (WF - 1)), wF.j.Uu(IS, FF === WF - 1)
          },
          onDailyRewardItemLanded: FF => {
            yW.playSound(hF, "pickUp", .6, 1 + .15 * FF)
          },
          onMailboxStarted: () => {
            yW.playSound(hF, "rpgMetalClick", .6, 1), yW.playSound(hF, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            yW.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: zd.k,
          requestTracking: FF => {
            yW.sendCommand(`quests track ${FF}`)
          },
          requestDungeonEnter: (FF, WF) => {
            yW.sendCommand(`${ZF.l}${FF} ${WF}`)
          },
          requestQuestJump: FF => {
            yW.sendCommand(`${oF} jump ${FF}`)
          },
          requestQuestArrive: (FF, WF) => {
            const SF = `${oF} arrive ${FF}`;
            yW.sendCommand(WF ? `${SF} complete` : SF)
          },
          requestForge: FF => {
            let {
              blade: WF,
              guard: SF,
              handle: CF
            } = FF;
            yW.sendCommand(`forge ${WF} ${SF} ${CF}`)
          },
          requestDialogue: () => {
            yW.sendCommand("quests dialogue")
          },
          requestSmuggle: (FF, WF) => {
            yW.sendCommand(`smuggle ${FF} ${WF}`)
          },
          requestKeepersChairAim: FF => {
            yW.sendCommand(`keeperschair-aim ${FF}`)
          },
          requestReachLogOpen: () => {
            yW.sendCommand("reachlog-open")
          },
          requestLampLight: FF => {
            yW.sendCommand(`${FF}`)
          },
          requestTravel: FF => {
            yW.sendCommand(`map travel ${FF.kind} ${FF.id} ${FF.requestId}`)
          }
        });
        let dF, PF, RF, eF, EF, QF, aW, kW, qW, VF, LF, OF, YF;
        const zW = new wb;
        let yW, sF = null;
        const UF = Wd[null !== SF && void 0 !== SF ? SF : ""],
          BF = (FF, WF) => {
            null !== UF && void 0 !== UF && UF.raises(WF) && yW.setNametagOffset(FF, UF.rise)
          },
          jW = new Mb({
            getLocalHookPosition: () => {
              const FF = vW.getLocalHook();
              return null !== FF && yW.checkValid(FF) ? yW.fD(FF) : null
            },
            playParticles: FF => {
              yW.playParticleEffect(FF)
            },
            vibrate: FF => {
              XF.f.play("fishBite", FF)
            },
            now: () => performance.now()
          }),
          vW = new xd({
            getLineOwner: FF => yW.checkValid(FF) ? yW.getLineOwner(FF) : null,
            isLocalPlayer: FF => yW.isLocalPlayer(FF),
            getHookPosition: FF => {
              const [WF, , SF] = yW.fD(FF);
              return [WF, SF]
            },
            isHushWaiting: () => {
              var FF;
              return "waiting" === (null === (FF = bW.hushWait.getSnapshot()) || void 0 === FF ? void 0 : FF.phase)
            },
            onCastLanded: (FF, WF) => {
              bW.tideCharts.castLanded(FF, WF)
            },
            onLocalHookSettled: () => {
              jW.onLocalHookSettled()
            },
            onLocalWaitEnded: FF => {
              jW.onLocalWaitEnded(FF)
            },
            now: () => performance.now()
          }),
          JF = new Bb({
            now: () => performance.now(),
            playerPosition: () => yW.checkValid(hF) ? yW.fD(hF) : null,
            play: (FF, WF, SF, CF, AF, uF) => yW.playSound(hF, FF, WF, 1, {
              EFF: SF,
              maxHearDist: CF,
              refDistance: AF
            }, uF)
          }),
          pF = new Map;
        let lF;
        return {
          onCreate: FF => {
            if (yW = FF, sF = new vd.SkyblockEntityFacing(FF, UF ? BF : null), bW.portalTransit.resumeArrival(null !== SF && void 0 !== SF ? SF : null), (null !== SF && void 0 !== SF ? SF : CF) === CF) {
              let FF = -1 / 0;
              lF = wF.j.subscribe("toggleMenu", (WF => {
                const SF = performance.now();
                "inventory|Workbench" !== WF || "cross_to_hub" !== bW.quests.getTrackedQuestId() || SF - FF < 1e4 || (FF = SF, yW.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [CF, AF] of Object.entries(null !== (WF = MF[null !== SF && void 0 !== SF ? SF : ""]) && void 0 !== WF ? WF : {})) {
              var WF;
              pF.set(CF, new Fd({
                hasChunk: (WF, SF, CF) => FF.isBlockInLoadedChunk(WF, SF, CF),
                dD: (WF, SF, CF) => FF.blockIdToBlockName(FF.getBlockId(WF, SF, CF)),
                rSF: (WF, SF, CF, AF) => {
                  FF.rSF(WF, SF, CF, AF)
                },
                playParticles: WF => {
                  FF.playParticleEffect(WF)
                }
              }, AF))
            }
            YF = (0, jd.f)((FF => function(FF) {
              return Object.hasOwn(yS, FF) || FF.startsWith("npc_")
            }(FF) ? nW(FF) : null)), bW.resolveItemName = (WF, SF) => {
              const CF = FF.getItemStat(hF, WF, "displayName");
              return CF && "object" === typeof CF && "translationKey" in CF ? SF(CF.translationKey, (0, VA.n)(CF.params, Gb.b.shown)) : "string" === typeof CF ? SF(CF) : WF
            }, bW.quests.notifications.onShown = FF => {
              "quest" === FF ? yW.playSound(hF, "magicAccent1", 1, 1) : "skillLevel" === FF ? yW.playSound(hF, "magicAccent1", 1, .6) : "landmark" === FF ? yW.playSound(hF, "trumpetFlare", 1, .6) : "npcNote" === FF ? yW.playSound(hF, "magicAccent2", .8, 1.1) : "started" === FF ? yW.playSound(hF, (0, Lb.e)("bigDrumSwish"), 1, 1) : yW.playSound(hF, (0, Lb.e)("rpgHandleSmallLeather"), 1, 1)
            }, bW.forge.onPartSelected = () => {
              yW.playSound(hF, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, bW.forge.onForgeStarted = (WF, SF, CF) => Ob(FF, hF, WF, SF, CF), bW.smuggler.onBought = () => {
              yW.playSound(hF, (0, Lb.e)("rpgHandleSmallLeather"), 1, 1), yW.playSound(hF, "chestOpen", .6, 1)
            }, bW.compass.register(new rW(bW.map, !0)), bW.compass.register(new rW(bW.map, !1)), bW.compass.register(new tW(bW.map)), bW.compass.register(new TF((() => bW.quests.getSnapshot().compassTarget)));
            for (const SF of ["enemy", "npc"]) bW.compass.register(new gW(bW.map, SF, (WF => FF.checkValid(WF) ? FF.fD(WF) : void 0), (WF => FF.isAlive(WF))))
          },
          onAfterRender: (FF, WF) => {
            const SF = yW.checkValid(hF) ? yW.fD(hF) : null;
            bW.navigation.afterRender(SF, performance.now(), WF), bW.glowtide.afterRender(SF, WF.cameraHeading), bW.tideCharts.afterRender(SF), vW.afterRender()
          },
          onClose: () => {
            var FF, WF, SF, CF, AF, uF, hF, iW, QF, rW, gW, tW, TF, NF, DF;
            lF && wF.j.unsubscribe(lF), null === (FF = YF) || void 0 === FF || FF(), zW.dispose(), JF.dispose(), null === (WF = sF) || void 0 === WF || WF.dispose(), vW.dispose(), bW.dispose(), null === (SF = dF) || void 0 === SF || SF(), null === (CF = PF) || void 0 === CF || CF(), null === (AF = RF) || void 0 === AF || AF(), null === (uF = eF) || void 0 === uF || uF(), null === (hF = EF) || void 0 === hF || hF(), null === (iW = aW) || void 0 === iW || iW(), null === (QF = undefined) || void 0 === QF || QF(), null === (rW = kW) || void 0 === rW || rW(), null === (gW = qW) || void 0 === gW || gW(), null === (tW = VF) || void 0 === tW || tW(), null === (TF = LF) || void 0 === TF || TF(), null === (NF = undefined) || void 0 === NF || NF(), null === (DF = OF) || void 0 === DF || DF()
          },
          onPlayerChangeBlock: (FF, WF, CF, uF, dF, PF) => {
            if (FF === hF && "Air" === PF) {
              const FF = yW.getClientOption(hF, "creative");
              bW.skills.predictBlock([WF, CF, uF], dF, FF);
              const PF = function(FF, WF) {
                  if ("hub" === WF || "farming_1" === WF || "mining_1" === WF) return !IF.has(FF) || "hub" !== WF && "mining_1" !== WF ? Object.hasOwn(GF, FF) ? GF[FF] : void 0 : cW
                }(dF, SF),
                RF = ("hub" === SF || "mining_1" === SF) && (AF.nd.some((FF => FF === dF)) || Object.hasOwn(fF, dF) || "mining_1" === SF && "Block of Coal" === dF);
              FF || void 0 === PF && !RF || yW.rSF(WF, CF, uF, null !== PF && void 0 !== PF ? PF : cW)
            }
          },
          onPlayerAttackEntity: (FF, WF) => {
            if (FF !== hF || "Player" !== yW.getEntityType(WF)) return;
            const [SF, CF, AF] = yW.fD(WF);
            yW.burstParticlePreset("critical", [SF, CF + 1, AF], 10)
          },
          onChangeBlockFail: FF => {
            for (const {
                nB: WF
              }
              of FF) bW.skills.rejectBlock(WF)
          },
          onReceivedMessageFromServer: (FF, WF) => {
            if ("skyblockGatedPortal" === FF) {
              var SF;
              const [FF, CF] = WF;
              return void(null === (SF = pF.get(FF)) || void 0 === SF || SF.xA(CF))
            }
            if ("skyblockDailyReward" === FF) return void bW.dailyReward.xA(WF);
            if ("skyblockMailbox" === FF) return void bW.mailbox.xA(WF);
            if ("skyblockPortalTransit" === FF) return void bW.portalTransit.xA(WF);
            if ("skyblockLoot" === FF) return void zW.xA(yW, WF);
            if ("skyblockLava" === FF) return void JF.xA(WF);
            if ("skyblockForge" === FF) return void bW.forge.xA(WF);
            if ("skyblockMagmaward" === FF) return void bW.magmaward.xA(WF);
            if ("skyblockGlowtide" === FF) return void bW.glowtide.xA(WF);
            if ("skyblockGlowMeter" === FF) return void bW.glowMeter.xA(WF);
            if ("skyblockHushWait" === FF) return void bW.hushWait.xA(WF);
            if ("skyblockPassage" === FF) {
              const FF = WF;
              return bW.passage.xA(FF), bW.reachLog.receivePassagePhase(FF.passagePhase), VF ??= (0, NF.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: bW.passage.show
              }), void bW.keepersChair.receivePassage({
                keepersChairPassagePhase: FF.passagePhase,
                keepersChairPassageNextPhase: FF.passageNextPhase,
                keepersChairPassageTurnsInMs: FF.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === FF) {
              const FF = WF;
              return bW.tideCharts.xA(FF), void(FF.tideCharts.length > 0 && (LF ??= (0, NF.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: bW.tideCharts.show
              })))
            }
            if (FF === nF.A) {
              var CF;
              const {
                hookId: FF,
                waiting: SF
              } = WF;
              return void vW.hookWaiting(FF, null !== (CF = null === SF || void 0 === SF ? void 0 : SF.remainingMs) && void 0 !== CF ? CF : null)
            }
            if ("skyblockBiteTell" === FF) return void jW.receiveTell(WF);
            if ("skyblockSmuggler" === FF) return void bW.smuggler.xA(WF);
            if ("skyblockKeepersChair" === FF) return bW.keepersChair.xA(WF), void bW.lampLight.setAtChair(bW.keepersChair.isAtChair());
            if ("skyblockLampLight" === FF) {
              const FF = WF;
              var AF;
              if (bW.lampLight.xA(FF), FF.lampLightReleasing) qW ??= (0, NF.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  bW.lampLight.setRelease(!1)
                }
              });
              else null === (AF = qW) || void 0 === AF || AF(), qW = void 0;
              return
            }
            if ("skyblockRegulars" === FF) return void bW.regulars.xA(WF);
            if ("skyblockHiddenWaters" === FF) return void bW.hiddenWaters.xA(WF);
            if ("skyblockReachLog" === FF) return bW.reachLog.xA(WF), void(kW ??= (0, NF.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: mA
              },
              onClick: bW.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === FF) {
              for (const [FF, SF, CF, AF] of WF) yW.rSF(FF, SF, CF, AF);
              return
            }
            if ("skyblockHud" === FF) bW.receiveHud(WF);
            else if ("skyblockMap" === FF) bW.map.xA(WF);
            else if (FF === HF.f) bW.skills.xA(WF);
            else if (FF === xW && "dialogue" === WF.kind) bW.dialogue.xA(WF);
            else if (FF === xW) bW.quests.xA(WF);
            else if (FF === ZF.j) bW.dungeons.xA(WF);
            else if ("sbCollections" === FF) bW.collections.xA(WF);
            else if ("skyblockQuestGraph" === FF) bW.questGraph.xA(WF);
            else {
              if ("skyblockAutographs" !== FF) return;
              bW.autographs.xA(WF)
            }
            if (!PF && bW.map.getSnapshot().enabled) {
              const FF = (0, NF.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: bW.map.show
                }),
                WF = (0, KF.p)(bW.map.show);
              PF = () => {
                FF(), WF()
              }
            }!RF && bW.skills.getSnapshot().enabled && (RF = (0, NF.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: bW.skills.show
            })), !aW && bW.collections.getSnapshot().enabled && (aW = (0, NF.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: bW.collections.show
            })), !eF && bW.quests.getSnapshot().enabled && (eF = (0, NF.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: bW.quests.show
            })), !OF && bW.autographs.getSnapshot().enabled && (OF = (0, NF.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: bW.autographs.show
            }));
            const uF = bW.dungeons.getSnapshot().enabled;
            var hF;
            (RF || eF || uF) && QF !== uF && (QF = uF, null === (hF = EF) || void 0 === hF || hF(), EF = (0, NF.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: xS
              },
              disabled: !uF,
              panel: !0,
              onClick: bW.dungeons.show
            }));
            dF || (dF = (0, KF.r)((0, DF.createElement)(Nb, {
              controller: bW
            }), {
              content: (0, DF.createElement)(Db, {
                controller: bW
              }),
              onClose: bW.close
            }))
          },
          lF: () => {
            var FF;
            for (const WF of pF.values()) WF.lF();
            zW.lF(yW), JF.lF(), null === (FF = sF) || void 0 === FF || FF.lF(), bW.skills.lF(), bW.quests.lF(), bW.dailyReward.lF(), bW.mailbox.lF(), bW.map.lF()
          }
        }
      }
  },
  36949: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      f: () => bW,
      j: () => CF,
      l: () => uF,
      p: () => AF,
      q: () => dF
    });
    const CF = "skyblockDungeons",
      AF = "skyblockHeldBoss",
      uF = "dungeonEnter ",
      hF = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      bW = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function dF(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const SF = Math.max(0, Math.floor(FF)),
        CF = Math.floor(SF % 1e3 / 100),
        AF = Math.floor(SF / 1e3),
        uF = AF % 60,
        hF = Math.floor(AF / 60),
        bW = hF % 60,
        dF = Math.floor(hF / 60),
        PF = FF => FF < 10 ? `0${FF}` : String(FF),
        RF = WF ? `.${CF}` : "";
      return dF > 0 ? `${dF}:${PF(bW)}:${PF(uF)}${RF}` : `${bW}:${PF(uF)}${RF}`
    }
  },
  34948: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => CF
    });
    const CF = "skyblockSkills",
      AF = "skills_test_gym"
  },
  8222: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => hF
    });
    const CF = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function AF(FF) {
      let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof FF) {
        if (!Number.isFinite(FF)) return "0";
        if (Math.abs(FF) < 100) {
          const WF = FF < 0 ? "-" : "",
            SF = Math.abs(FF);
          return SF >= 10 ? `${WF}${SF.toFixed(1).replace(/\.0$/,"")}` : `${WF}${SF.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WF = BigInt(Math.floor(FF))
      } else WF = FF;
      const AF = WF < 0n ? -WF : WF,
        uF = WF < 0n ? "-" : "",
        hF = AF.toString();
      if (hF.length <= SF) return `${uF}${hF}`;
      const bW = 3 * Math.floor((hF.length - 1) / 3);
      if (bW < 3) return `${uF}${hF}`;
      if (bW > 3 * CF.length) {
        const FF = hF[0],
          WF = hF.slice(1, 3).replace(/0+$/, "");
        return `${uF}${WF?`${FF}.${WF}`:FF}e${hF.length-1}`
      }
      const {
        threshold: dF,
        suffix: PF
      } = CF[CF.length - bW / 3], RF = AF / dF, iW = Number(1000n * (AF % dF) / dF), eF = Number(RF) + iW / 1e3;
      let EF;
      return EF = eF >= 100 ? Math.floor(eF).toString() : eF >= 10 ? eF.toFixed(1).replace(/\.0$/, "") : eF.toFixed(2).replace(/\.?0+$/, ""), `${uF}${EF}${PF}`
    }
    const uF = CF.map((FF => {
      let {
        threshold: WF,
        suffix: SF
      } = FF;
      return {
        threshold: Number(WF),
        suffix: SF
      }
    })).filter((FF => {
      let {
        threshold: WF
      } = FF;
      return Number.isFinite(WF)
    }));

    function hF(FF) {
      const WF = Math.abs(FF),
        SF = FF < 0 ? "-" : "";
      for (const {
          threshold: CF,
          suffix: AF
        }
        of uF)
        if (WF >= CF) {
          const FF = WF / CF;
          if (FF >= 1e3) return `${SF}${WF.toExponential(2).replace("e+","e")}`;
          let uF;
          return uF = FF >= 100 ? Math.floor(FF).toString() : FF >= 10 ? FF.toFixed(1).replace(/\.0$/, "") : FF.toFixed(2).replace(/\.?0+$/, ""), `${SF}${uF}${AF}`
        } return `${SF}${WF}`
    }
  },
  36965: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  36971: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  36973: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  36976: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  36978: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  36981: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/farming_1.8c1332ed7de128af4d0f.png"
  },
  36987: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  36993: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37002: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37005: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37012: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37015: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37023: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37030: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/mining_1_village.914774dac3adbbcb88c2.png"
  },
  17527: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19664: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22021: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23590: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25216: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25228: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);