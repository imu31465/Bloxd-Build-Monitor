export const id = 174;
export const ids = [41, 174];
export const modules = {
  36594: (WW, RW, MW) => {
    var wW = {
      "./combat_1.png": 36603,
      "./dungeon_crumbling_crypt.png": 36611,
      "./dungeon_frozen_hollow.png": 36616,
      "./dungeon_wildwood_grove.png": 36622,
      "./dungeons.png": 36625,
      "./farming_1.png": 36629,
      "./fishing_1.png": 36632,
      "./hub.png": 36635,
      "./island.png": 36640,
      "./mining_1.png": 36646,
      "./mining_1_bridge.png": 36653,
      "./mining_1_gallery.png": 36660,
      "./mining_1_hollow.png": 36669,
      "./mining_1_village.png": 36678
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
    }, CW.resolve = zR, WW.exports = CW, CW.id = 36594
  },
  36680: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      return wW.set(WW, RW), WW
    }

    function zR(WW) {
      var RW;
      return null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : null
    }
  },
  36578: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      var wW;
      const {
        width: CW,
        height: zR
      } = MW, AW = null !== (wW = WW.text) && void 0 !== wW ? wW : WW, bR = (AW.x / 100 - .5) * CW, yR = (AW.y / 100 - .5) * zR, NW = CW / 2 - RW.x;
      if (null !== WW.text && Math.abs(bR) <= NW && yR >= RW.top - zR / 2 && yR <= zR / 2 - RW.bottom) return {
        x: AW.x,
        y: AW.y
      };
      const eW = Math.min(0 === bR ? 1 / 0 : NW / Math.abs(bR), yR > 0 ? (zR / 2 - RW.bottom) / yR : yR < 0 ? (RW.top - zR / 2) / yR : 1 / 0);
      return !Number.isFinite(eW) || eW < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bR * eW / CW * 100,
        y: 50 + yR * eW / zR * 100
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  36683: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      SkyblockEntityFacing: () => bR,
      needsSkyblockEntityFacing: () => AW
    });
    var wW = MW(36586),
      CW = MW(3357),
      zR = MW(36688);

    function AW(WW, RW) {
      if (WW.metaInfo === wW.k || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
      if ("Pig" === WW.type) return "sitting" === WW.pose;
      if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
      let MW = null === RW || void 0 === RW ? void 0 : RW.get(WW.meshOpts);
      if (void 0 === MW) {
        var zR, AW;
        const wW = (0, CW.i)(WW);
        MW = !1, "pig_napoleon" === (null === wW || void 0 === wW || null === (zR = wW.opts.textures) || void 0 === zR ? void 0 : zR.head) ? MW = !0 : "npc_pig_head" === (null === wW || void 0 === wW || null === (AW = wW.opts.textures) || void 0 === AW ? void 0 : AW.head) && (MW = "sitting" === wW.opts.pose || "sitting"), RW && (RW.size >= 256 && RW.clear(), RW.set(WW.meshOpts, MW))
      }
      return "sitting" === MW ? "sitting" === WW.pose : MW
    }(0, zR.g)("skyblock", ((WW, RW) => {
      RW.setFacingTolerance(AW(WW) ? 0 : null)
    }));
    class bR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = WW, this.alsoVisit = RW, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = WW => {
          var RW;
          const MW = this.api.getEntityInfo(WW);
          MW && (AW(MW, this.meshFacingCache) && (this.api.setFacingTolerance(WW, 0), this.nextFacing.add(WW)), null === (RW = this.alsoVisit) || void 0 === RW || RW.call(this, WW, MW))
        }
      }
      WR() {
        const {
          api: WW
        } = this, RW = this.nextFacing;
        WW.forEachEntity(this.visit);
        for (const MW of this.facing) RW.has(MW) || WW.setFacingTolerance(MW, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = RW
      }
      dispose() {
        for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  36575: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => Ry
    });
    const wW = "island";
    var CW = MW(284);
    const zR = (0, CW.xb)([0, 0, -1]),
      AW = [{
        name: "S",
        bearing: (0, CW.xb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, CW.xb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: zR
      }, {
        name: "W",
        bearing: (0, CW.xb)([1, 0, 0])
      }];

    function bR(WW, RW, MW) {
      return [100 * (MW.mapMaxX - WW) / (MW.mapMaxX - MW.mapMinX), 100 * (RW - MW.mapMinZ) / (MW.mapMaxZ - MW.mapMinZ)]
    }

    function yR(WW, RW, MW) {
      const CW = "local" === RW,
        zR = WW.background,
        AW = RW => zR ? bR(RW[0] - WW.mapOrigin[0], RW[2] - WW.mapOrigin[2], zR.bounds) : [50, 50],
        yR = (WW.insideDungeon ? [] : WW.landmarks).map((WW => {
          var RW, wW;
          return {
            id: WW.id,
            name: MW(WW.visited && WW.nameKey ? null !== (RW = WW.mapLabelKey) && void 0 !== RW ? RW : WW.nameKey : "skyblockGame:mapUnknown"),
            icon: WW.visited && null !== (wW = WW.icon) && void 0 !== wW ? wW : "unknown",
            visited: WW.visited,
            current: !1,
            position: AW(WW.position),
            travelKind: "landmark",
            travelId: WW.id
          }
        })),
        eW = WW.zones.map((RW => {
          var wW;
          return {
            id: RW.id,
            name: MW(RW.visited && RW.nameKey ? RW.nameKey : "skyblockGame:mapUnknown"),
            icon: RW.visited && null !== (wW = RW.icon) && void 0 !== wW ? wW : "unknown",
            visited: RW.visited,
            current: RW.id === WW.zoneId,
            position: RW.position,
            thumbnail: RW.visited ? RW.id : void 0,
            travelKind: "zone",
            travelId: RW.id
          }
        })),
        BW = WW.insideDungeon || !zR ? [] : WW.portals.map((WW => {
          var RW;
          return {
            id: WW.id,
            name: MW(null !== (RW = WW.nameKey) && void 0 !== RW ? RW : "skyblockGame:mapUnknown"),
            icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
            visited: WW.visited,
            current: !1,
            position: AW(WW.position),
            colour: WW.colour,
            travelKind: "zone",
            travelId: WW.destination
          }
        })),
        tR = CW ? yR : eW,
        TW = tR.filter((WW => WW.visited)).length,
        gR = zR ? (zR.bounds.mapMaxX - zR.bounds.mapMinX) / (zR.bounds.mapMaxZ - zR.bounds.mapMinZ) : 2,
        iR = zR ? JSON.stringify([zR.bounds, WW.mapOrigin]) : "";
      return {
        local: CW,
        points: tR,
        portals: CW ? BW : [],
        progress: tR.length ? MW("skyblockGame:mapDiscovered", {
          current: String(TW),
          total: String(tR.length)
        }) : null,
        percent: tR.length ? 100 * TW / tR.length : 0,
        canTravel: [...tR, ...CW ? BW : []].some((WW => WW.visited && !WW.current)),
        noLandmarks: CW && !WW.insideDungeon && 0 === yR.length,
        background: zR ? {
          imageKey: zR.imageKey,
          fallbackImageKey: WW.zoneId,
          geometryKey: iR,
          label: MW(zR.labelKey),
          colour: zR.backgroundColour,
          ratio: gR
        } : null,
        connections: NW(WW.zones),
        minimap: zR ? {
          imageKey: zR.imageKey,
          fallbackImageKey: WW.zoneId,
          geometryKey: iR,
          label: MW(zR.labelKey),
          colour: zR.backgroundColour,
          caption: MW(WW.zoneId === wW ? "skyblockGame:zoneIsland" : zR.labelKey),
          width: (zR.bounds.mapMaxX - zR.bounds.mapMinX) / zR.minimapSpan * 100 + "%",
          height: (zR.bounds.mapMaxZ - zR.bounds.mapMinZ) / zR.minimapSpan * 100 + "%",
          markers: [...yR, ...BW]
        } : null
      }
    }

    function NW(WW) {
      const RW = new Set;
      return WW.flatMap((MW => MW.connections.flatMap((wW => {
        const CW = WW.find((WW => WW.id === wW)),
          zR = [MW.id, wW].sort().join("|");
        return !CW || RW.has(zR) ? [] : (RW.add(zR), [{
          id: `${MW.id}-${wW}`,
          start: MW.position,
          end: CW.position,
          explored: MW.visited && CW.visited
        }])
      }))))
    }
    class eW {
      constructor(WW, RW, MW) {
        this.Sz = WW, this.beforeOpen = RW, this.afterClose = MW, this.open = !1, this.Qw = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Qw && (this.open = !0, this.beforeOpen(), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      closePanel(WW) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(WW)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Qw = !0
      }
      emit() {
        this.Qw || (this.snapshot = this.buildSnapshot(), this.Sz(this.snapshot))
      }
    }
    const BW = "skyblockMapView";
    class tR extends eW {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(WW, wW, CW), this.requestTravel = RW, this.translate = MW, this.now = zR, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = WW => {
          this.tab = WW, this.feedbackKey = "", this.emit()
        }, this.travel = (WW, RW) => {
          if (!this.map || this.pending || this.Qw) return;
          const MW = ("zone" === WW ? this.map.zones : this.map.landmarks).find((WW => WW.id === RW));
          if (MW) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in MW && !MW.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (MW.visited)
              if ("zone" === WW && RW === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const MW = ++this.nextRequestId;
                this.pending = {
                  requestId: MW,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: WW,
                  id: RW,
                  requestId: MW
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
      setTranslator(WW) {
        this.translate = WW, this.emit()
      }
      jC(WW) {
        var RW;
        if (!this.Qw)
          if ("entities" !== WW.kind)
            if ("open" !== WW.kind) {
              var MW, wW;
              if ("snapshot" === WW.kind)(null === (MW = WW.snapshot) || void 0 === MW ? void 0 : MW.zoneId) !== (null === (wW = this.map) || void 0 === wW ? void 0 : wW.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = WW.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === WW.kind) {
                var CW;
                WW.requestId === (null === (CW = this.pending) || void 0 === CW ? void 0 : CW.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (WW.requestId === (null === (RW = this.pending) || void 0 === RW ? void 0 : RW.requestId)) {
                var zR;
                this.pending = null, this.feedbackKey = null !== (zR = WW.errorKey) && void 0 !== zR ? zR : "", null === WW.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = WW.entities
      }
      WR() {
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
          presentation: this.map ? yR(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const TW = 67.5 * Math.PI / 180;

    function gR(WW, RW) {
      const MW = Math.abs(WW);
      if (MW > TW || RW.trackHalfWidth <= 0) return null;
      const wW = RW.trackHalfWidth,
        CW = RW.screenHalfWidth / (RW.tanHalfFovX * Math.max(.5, Math.cos(RW.pitch))),
        zR = Math.min(Math.atan(.6 * wW / CW), .75 * TW),
        AW = CW * Math.tan(zR);
      let bR;
      if (MW <= zR) bR = CW * Math.tan(MW);
      else {
        const WW = TW - zR,
          RW = Math.max(0, CW * WW / (Math.cos(zR) ** 2 * (wW - AW)) - 1),
          yR = (MW - zR) / WW;
        bR = AW + (wW - AW) * (1 + RW) * yR / (1 + RW * yR)
      }
      return 50 + Math.sign(WW) * bR * 50 / wW
    }
    class iR {
      constructor(WW, RW) {
        this.map = WW, this.visited = RW, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = RW ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const WW = this.map.getSnapshot().map;
        return !WW || WW.insideDungeon ? [] : WW.landmarks.filter((WW => WW.visited === this.visited)).map((WW => {
          var RW, MW;
          return {
            id: `landmark:${WW.id}`,
            position: WW.position,
            icon: null !== (RW = WW.icon) && void 0 !== RW ? RW : "unknown",
            nameKey: null !== (MW = WW.nameKey) && void 0 !== MW ? MW : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class YW {
      constructor(WW, RW, MW, wW) {
        this.map = WW, this.kind = RW, this.position = MW, this.alive = wW, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = RW, this.range = "enemy" === RW ? 48 : 64, this.limit = 12
      }
      yX(WW) {
        if ("enemy" !== this.kind || this.alive(WW.XE)) return this.position(WW.XE)
      }
      getPoints() {
        const WW = [];
        for (const wW of this.map.getEntities()) {
          if (wW.kind !== this.kind || "enemy" === this.kind && !this.alive(wW.compassEntityId)) continue;
          const CW = this.position(wW.compassEntityId);
          var RW, MW;
          if (CW) WW.push({
            id: `${this.kind}:${wW.compassEntityId}`,
            XE: wW.compassEntityId,
            kind: this.kind,
            icon: null !== (RW = wW.icon) && void 0 !== RW ? RW : wW.npcSkin ? `npc_${wW.npcSkin}` : this.kind,
            displayName: wW.displayName,
            position: CW,
            nameKey: null !== (MW = wW.nameKey) && void 0 !== MW ? MW : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return WW
      }
    }
    class JW {
      constructor(WW) {
        this.map = WW, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const WW = this.map.getSnapshot().map;
        return !WW || WW.insideDungeon ? [] : WW.portals.map((WW => {
          var RW;
          return {
            id: "portal:" + WW.id,
            kind: "portal",
            position: WW.position,
            nameKey: null !== (RW = WW.nameKey) && void 0 !== RW ? RW : "skyblockGame:compassUnvisitedZone",
            icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
            colour: WW.colour
          }
        }))
      }
    }
    class PW {
      constructor(WW) {
        this.target = WW, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const WW = this.target();
        return WW ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: WW.position,
          nameKey: WW.nameKey
        }] : []
      }
    }

    function IW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.position;
      const zR = wW[0] - RW[0],
        AW = wW[2] - RW[2];
      return {
        ...WW,
        position: wW,
        offset: CW.d.computeShortestRotation(MW, (0, CW.xb)([zR, 0, AW])),
        distance: Math.hypot(zR, wW[1] - RW[1], AW)
      }
    }
    let oW;

    function lW(WW, RW) {
      var MW;
      return (null === (MW = oW) || void 0 === MW ? void 0 : MW.locale) !== RW && (oW = {
        locale: RW,
        near: new Intl.NumberFormat(RW, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(RW, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (WW < 10 ? oW.near : oW.far).format(WW)
    }
    class FW {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(WW) {
        return this.providers.set(WW.id, WW), this.refreshAt = 0, () => {
          this.providers.get(WW.id) === WW && (this.providers.delete(WW.id), this.refreshAt = 0)
        }
      }
      frame(WW, RW, MW) {
        if (MW >= this.refreshAt) {
          this.refreshAt = MW + 200, this.candidates = [];
          for (const RW of this.providers.values()) {
            if (!RW.enabled) continue;
            const MW = RW.getPoints().map((RW => {
              const MW = RW.position;
              return {
                point: RW,
                distance: Math.hypot(MW[0] - WW[0], MW[1] - WW[1], MW[2] - WW[2])
              }
            })).filter((WW => WW.distance <= RW.range)).sort(((WW, RW) => WW.distance - RW.distance)).slice(0, RW.limit);
            for (const {
                point: WW
              }
              of MW) this.candidates.push({
              provider: RW,
              point: WW
            })
          }
        }
        const wW = [];
        for (const {
            point: CW,
            provider: zR
          }
          of this.candidates) {
          if (!zR.enabled) continue;
          const MW = zR.yX ? zR.yX(CW) : CW.position;
          if (MW) {
            const zR = IW(CW, WW, RW, MW);
            Math.abs(zR.offset) <= TW && wW.push(zR)
          }
        }
        return wW
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var fW = MW(34838),
      QW = MW(75);
    const rR = [{
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
      cR = rR.length;

    function XW(WW) {
      return WW >= cR ? 1 : WW + 1
    }
    const jR = "skyblockQuests";
    var kR = MW(36586);
    const aR = "devquests",
      sW = "none",
      dW = {
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
      pW = "Compressed Messy Stone",
      hW = {
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
      UW = ["Stone", "Diorite", "Andesite", "Granite"],
      EW = new Set(UW),
      VW = (Object.keys(hW), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const mR = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function xR(WW, RW) {
      const MW = Math.floor(5 * WW / (2 * RW + 1));
      return Math.min(4, Math.max(0, MW))
    }
    var vR = MW(1066);
    var KW = MW(34660);
    var uW = MW(34830),
      OW = MW(33),
      nW = MW(7759);
    const GW = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      LW = 1e3;

    function HW(WW) {
      return Math.max(0, WW)
    }

    function DW(WW) {
      return 1 + .01 * HW(WW)
    }

    function qR(WW) {
      return 1 + .005 * HW(WW)
    }

    function ZW(WW) {
      return 1 + .005 * HW(WW)
    }

    function SW(WW) {
      return .01 * HW(WW)
    }

    function WR(WW) {
      return 150 / (150 + HW(WW))
    }

    function RR(WW) {
      return 1 + .002 * HW(WW)
    }

    function MR(WW) {
      return Math.round(10 * WW) / 10
    }

    function wR(WW, RW) {
      switch (WW) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: MR(100 * (qR(RW) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: MR(100 * (DW(RW) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: MR(100 * (ZW(RW) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: MR(100 * SW(RW))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: MR(100 * (1 - WR(RW)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: MR(100 * (RR(RW) - 1))
          }
      }
    }

    function CR(WW) {
      return "farming" === WW ? 200 : 100
    }

    function zM(WW, RW) {
      if (!Number.isSafeInteger(WW) || WW < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const MW = CR(RW),
        wW = WW => function(WW, RW) {
          return CR(WW) * RW * (RW + 1) / 2
        }(RW, WW);
      let CW = Math.min(LW, Math.floor((Math.sqrt(8 * WW / MW + 1) - 1) / 2));
      return CW < LW && wW(CW + 1) <= WW ? CW++ : wW(CW) > WW && CW--, {
        totalXp: WW,
        level: CW,
        xpIntoLevel: WW - wW(CW),
        xpForNextLevel: CW === LW ? null : MW * (CW + 1)
      }
    }
    const AR = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function bM(WW) {
      return AR.has(WW)
    }
    const yM = new Set(CW.ob);

    function NR(WW) {
      return yM.has(WW)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const eR = {
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
      BR = {
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
      tM = {
        ...BR,
        ...Object.fromEntries(Object.entries(VW).map((WW => {
          let [RW, MW] = WW;
          return [RW, 9 * BR[MW]]
        })))
      },
      TR = {
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
      gM = {
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
    const iM = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      YR = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function JR(WW) {
      return `rgb(${YR[WW].join(", ")})`
    }

    function PR(WW, RW, MW) {
      if (!MW) return WW(RW);
      const wW = {};
      for (const [CW, zR] of Object.entries(MW)) wW[CW] = "string" === typeof zR ? zR : WW(zR.translationKey);
      return WW(RW, wW)
    }
    class IR {
      constructor(WW, RW) {
        this.now = WW, this.getJournal = RW, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.mM = !1, this.onShown = () => {}
      }
      enqueue(WW) {
        const RW = oR(WW);
        if (RW) this.pending.push(WW);
        else {
          const RW = this.pending.findIndex(oR);
          this.pending.splice(-1 === RW ? this.pending.length : RW, 0, WW)
        }
        return (null === this.current || null !== this.followUp && !RW) && (this.advance(), !0)
      }
      setHeld(WW) {
        return this.mM = WW, !WW && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      WR() {
        const WW = this.getJournal(),
          RW = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === RW ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === RW || void 0 === RW ? void 0 : RW.kind) && WW && WW.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === RW || void 0 === RW ? void 0 : RW.kind)) {
          const WW = this.findFollowUp(this.current);
          if ("step" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || WW.questId !== RW.questId || WW.step.id !== RW.step.id) return this.showFollowUp(WW, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(WW, RW, MW) {
        var wW, CW, zR, AW;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, WW, MW);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, WW);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, WW, RW);
        const {
          questCompletionKind: bR,
          questCompletionNameKey: yR
        } = this.current, NW = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, eW = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, BW = "step" === (null === (wW = this.followUp) || void 0 === wW ? void 0 : wW.kind) ? this.followUp : null, tR = "explore" === (null === (CW = this.followUp) || void 0 === CW ? void 0 : CW.kind);
        let TW;
        return TW = tR ? WW("skyblockGame:questExploreTitle") : null !== BW ? "quest" === bR ? WW("skyblockGame:questNextQuestTitle", {
          quest: WW(BW.questNameKey)
        }) : WW("skyblockGame:questNextStepTitle") : WW("started" === bR ? "skyblockGame:questStartedTitle" : "quest" === bR ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? bR : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: TW,
          name: tR ? RW("skyblockGame:questExploreName") : null !== BW ? PR(RW, BW.step.nameKey, BW.step.nameParams) : PR(RW, yR, NW),
          description: tR ? RW("skyblockGame:questExploreDescription") : null === BW ? null : PR(RW, BW.step.descriptionKey, BW.step.descriptionParams),
          reward: null === this.followUp && eW > 0 ? RW("skyblockGame:questCoinRewardSuffix", {
            amount: eW.toLocaleString(MW)
          }) : null,
          iconItem: null !== (zR = null === BW || void 0 === BW ? void 0 : BW.step.questIconItem) && void 0 !== zR ? zR : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== BW && (null === (AW = this.getJournal()) || void 0 === AW ? void 0 : AW.trackedQuestId) === BW.questId ? BW.step.nameKey : null
        }
      }
      getSkillLevelView(WW, RW, MW) {
        let {
          skill: wW,
          beforeLevel: CW,
          level: zR
        } = WW;
        const AW = wR(wW, CW),
          bR = wR(wW, zR);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: RW(`skyblockGame:${wW}`),
          name: RW("skyblockGame:skillLevelUp", {
            to: zR.toLocaleString(MW)
          }),
          description: AW.percent === bR.percent ? null : RW(`${bR.translationKey}Change`, {
            before: AW.percent.toLocaleString(MW),
            after: bR.percent.toLocaleString(MW)
          }),
          reward: null,
          iconItem: iM[wW],
          accent: JR(wW),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(WW, RW) {
        let {
          landmarkNameKey: MW
        } = WW;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: RW("skyblockGame:landmarkDiscovered"),
          name: RW(MW),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(WW, RW, MW) {
        let {
          titleKey: wW,
          textKey: CW,
          params: zR = {},
          nameKeys: AW = {},
          iconItem: bR = null
        } = WW;
        const yR = {
          ...zR
        };
        for (const [NW, eW] of Object.entries(AW)) yR[NW] = RW(eW);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: RW(wW),
          name: MW(CW, yR),
          description: null,
          reward: null,
          iconItem: bR,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var WW;
        if (null !== this.followUp) return 5600;
        switch (null === (WW = this.current) || void 0 === WW ? void 0 : WW.questCompletionKind) {
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
      showFollowUp(WW, RW) {
        null === WW || this.mM ? this.advance() : (this.followUp = WW, this.token++, this.shownAt = this.now(), this.expiresAt = null !== RW && void 0 !== RW ? RW : this.shownAt + this.durationMs())
      }
      findFollowUp(WW) {
        var RW;
        const MW = this.getJournal();
        if (!MW || this.hasPendingQuestPopup() || oR(WW)) return null;
        const wW = "started" === WW.questCompletionKind ? MW.active.some((RW => RW.id === WW.questCompletionQuestId)) : "quest" === WW.questCompletionKind ? MW.completed.some((RW => RW.id === WW.questCompletionQuestId)) : [...MW.active, ...MW.completed].some((RW => RW.id === WW.questCompletionQuestId && RW.subquests.some((RW => RW.id === WW.questCompletionStepId && "completed" === RW.status))));
        if (!wW) return null;
        if ("quest" === WW.questCompletionKind && 0 === MW.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const CW = MW.active.find((WW => WW.id === MW.trackedQuestId)),
          zR = null !== (RW = null === CW || void 0 === CW ? void 0 : CW.subquests.find((WW => "ready" === WW.status))) && void 0 !== RW ? RW : null === CW || void 0 === CW ? void 0 : CW.subquests.find((WW => "active" === WW.status));
        return zR ? {
          kind: "step",
          questId: CW.id,
          questNameKey: CW.nameKey,
          step: zR
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((WW => !oR(WW)))
      }
      advance() {
        var WW;
        this.current = this.mM ? null : null !== (WW = this.pending.shift()) && void 0 !== WW ? WW : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function oR(WW) {
      return lR(WW.questCompletionKind)
    }

    function lR(WW) {
      return "skillLevel" === WW || "landmark" === WW || "npcNote" === WW
    }
    var FR = MW(36578);
    const fR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      QR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      rM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      cM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      XR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==",
      jM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      kM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const aM = MW.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const sR = MW.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      dR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var pR = MW(17238),
      hR = MW(19335),
      UR = MW(21699),
      ER = MW(23231),
      VR = MW(24939);
    const mM = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: pR,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: hR,
      cow: XR,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: MW(24959),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: fR,
      fishing_1: fR,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: QR,
      guardian_iron: rM,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: UR,
      mines: ER,
      mining_1: ER,
      npc: cM,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: XR,
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
      npc_gold_guardian: QR,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: rM,
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
      npc_wolf_security: jM,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: aM,
      quest_talk: sR,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: dR,
      watermelon: VR
    };

    function xM(WW, RW) {
      const MW = document.createElement("img");
      return MW.className = RW, MW.src = WW, MW.alt = "", MW.draggable = !1, MW
    }

    function vM(WW) {
      var RW;
      const MW = null !== (RW = mM[WW]) && void 0 !== RW ? RW : WW.startsWith("npc_") ? cM : dR;
      if ("portal" !== WW) return xM(MW, "SkyblockMapIcon");
      const wW = document.createElement("span");
      wW.className = "SkyblockMapIcon Portal";
      const CW = document.createElement("span");
      return CW.className = "SkyblockMapIconTint", CW.style.maskImage = CW.style.webkitMaskImage = `url("${kM}")`, wW.append(xM(MW, "SkyblockMapIconLayer"), CW, xM(kM, "SkyblockMapIconLayer SkyblockMapIconShade")), wW
    }
    var KR = MW(36571),
      uR = MW(3367);
    const OR = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function nR(WW) {
      const RW = new uR.g(WW);
      return {
        radius: 45,
        squareness: 3,
        wobbles: OR.map((WW => {
          let {
            lobes: MW,
            amount: wW
          } = WW;
          return {
            lobes: MW[Math.floor(RW.next() * MW.length)],
            amount: wW[0] + RW.next() * (wW[1] - wW[0]),
            phase: 2 * RW.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function GR(WW) {
      let {
        radius: RW,
        squareness: MW,
        wobbles: wW,
        samples: CW
      } = WW;
      const zR = [];
      for (let AW = 0; AW < CW; AW++) {
        const WW = 2 * Math.PI * AW / CW,
          bR = Math.cos(WW),
          yR = Math.sin(WW),
          NW = RW * (Math.abs(bR) ** MW + Math.abs(yR) ** MW) ** (-1 / MW) * wW.reduce(((RW, MW) => {
            let {
              lobes: wW,
              amount: CW,
              phase: zR
            } = MW;
            return RW + CW * Math.sin(wW * WW + zR)
          }), 1);
        zR.push(`${(50+NW*bR).toFixed(2)} ${(50+NW*yR).toFixed(2)}`)
      }
      return `M${zR.join("L")}Z`
    }
    const LR = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class HR {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Qw = !1, this.mountCompass = WW => {
          var RW;
          if (null === (RW = this.stopLayout) || void 0 === RW || RW.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !WW || this.Qw) return;
          const MW = WW.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: WW,
            track: MW,
            label: WW.querySelector(".SkyblockCompassLabel")
          }, MW.replaceChildren();
          for (let CW = 0; CW < 4; CW++) {
            const WW = document.createElement("span");
            WW.className = "SkyblockCompassCardinal", MW.appendChild(WW), this.cardinals.push(WW)
          }
          const wW = (0, KR.d)(LR, [WW], this.layout);
          this.stopLayout = () => {
            wW(), MW.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = WW => {
          this.terrain = this.Qw ? null : WW, this.render(this.frame)
        }, this.mountMinimapSearchArea = WW => {
          this.mountSearchArea("minimap", WW)
        }, this.mountMapSearchArea = WW => {
          this.mountSearchArea("map", WW)
        }, this.mountPlayer = WW => {
          this.player = this.Qw ? null : WW, this.render(this.frame)
        }, this.mountWaypoint = WW => {
          var RW, MW;
          if (null === (RW = this.stopWaypoint) || void 0 === RW || RW.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !WW || this.Qw) return;
          const wW = WW.querySelector(".SkyblockQuestWaypointMarker");
          wW.replaceChildren(vM("quest")), this.markerIcon = "quest", this.waypoint = {
            root: WW,
            marker: wW,
            clip: WW.querySelector(".SkyblockQuestWaypointTextClip"),
            text: WW.querySelector(".SkyblockQuestWaypointText"),
            label: WW.querySelector(".SkyblockQuestWaypointLabel"),
            distance: WW.querySelector(".SkyblockQuestWaypointDistance"),
            hint: WW.querySelector(".SkyblockQuestWaypointHint")
          };
          const CW = () => {
              this.waypointMarkerSize = {
                width: wW.offsetWidth,
                height: wW.offsetHeight
              }, this.waypointInset = {
                x: wW.offsetWidth / 2 + 8,
                top: wW.offsetHeight + 8,
                bottom: 8
              }
            },
            zR = new ResizeObserver((() => {
              CW(), this.render(this.frame)
            }));
          zR.observe(wW, {
            box: "border-box"
          });
          const AW = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", AW), null === (MW = window.visualViewport) || void 0 === MW || MW.addEventListener("resize", AW), this.stopWaypoint = () => {
            var WW;
            zR.disconnect(), window.removeEventListener("resize", AW), null === (WW = window.visualViewport) || void 0 === WW || WW.removeEventListener("resize", AW)
          }, AW(), CW(), this.render(this.frame)
        }, this.mountWaypointOrigin = WW => {
          var RW;
          if (null === (RW = this.stopWaypointOrigin) || void 0 === RW || RW.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = WW && !this.Qw ? Number(WW.dataset.notificationToken) : null, WW && !this.Qw && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const RW = {
              nameKey: WW.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = RW;
            const MW = () => {
                const MW = WW.getBoundingClientRect();
                RW.x = (MW.left + MW.width / 2) / window.innerWidth * 100, RW.y = (MW.top + MW.height / 2) / window.innerHeight * 100
              },
              wW = new ResizeObserver(MW);
            wW.observe(WW.parentElement), wW.observe(WW), window.addEventListener("resize", MW), this.stopWaypointOrigin = () => {
              wW.disconnect(), window.removeEventListener("resize", MW)
            }, MW()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const WW = this.compass.root,
            RW = getComputedStyle(WW),
            MW = getComputedStyle(document.documentElement),
            wW = parseFloat(MW.fontSize),
            CW = parseFloat(RW.getPropertyValue("--compass-icon-size")) * wW,
            zR = "1" === RW.getPropertyValue("--compass-fit-top").trim(),
            AW = zR ? 1 : 8,
            bR = Array.from(document.querySelectorAll(LR), (WW => {
              var RW;
              return (null !== (RW = WW.querySelector(".MiddleTextTop")) && void 0 !== RW ? RW : WW).getBoundingClientRect()
            })).filter((WW => WW.width > 0 && WW.height > 0));
          let yR = (parseFloat(MW.getPropertyValue("--notchTop")) || 0) + AW,
            NW = "";
          if (zR) {
            const RW = window.innerWidth / 2,
              MW = WW.getBoundingClientRect().height,
              zR = [yR, ...bR.map((WW => Math.max(yR, WW.bottom + AW)))].sort(((WW, RW) => WW - RW));
            for (const WW of zR) {
              let zR = RW - 8;
              for (const wW of bR) wW.bottom + AW <= WW || wW.top >= WW + MW + AW || (zR = Math.min(zR, wW.right <= RW ? RW - wW.right - 8 : wW.left - RW - 8));
              const eW = 2 * zR - CW;
              if (eW >= 16 * wW) {
                NW = `${eW}px`, yR = WW;
                break
              }
            }
          }
          WW.style.maxWidth !== NW && (WW.style.maxWidth = NW);
          const eW = WW.getBoundingClientRect(),
            BW = this.compassSize.trackHalfWidth;
          if (eW.width > 0) {
            const WW = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: WW.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * CW / WW.width
          }
          if (!NW)
            for (const tR of bR) tR.right > eW.left - 8 && tR.left < eW.right + 8 && (yR = Math.max(yR, tR.bottom + AW));
          WW.style.top = `${yR}px`, this.compassSize.trackHalfWidth !== BW && this.render(this.frame)
        }
      }
      mountSearchArea(WW, RW) {
        this.searchAreas[WW] = this.Qw ? null : RW, this.render(this.frame)
      }
      render(WW) {
        if (this.Qw) return;
        if (this.frame = WW, this.compass && (DR(this.compass.root, !WW), WW)) {
          const RW = this.compassSize.trackHalfWidth / 50;
          WW.compass.cardinals.forEach(((WW, MW) => {
            const wW = this.cardinals[MW];
            wW.textContent !== WW.name && (wW.textContent = WW.name), DR(wW, WW.hidden), wW.style.translate = WW.left * RW + "px"
          }));
          const MW = new Set;
          WW.compass.markers.forEach(((wW, CW) => {
            var zR;
            MW.add(wW.id);
            let AW = this.markers.get(wW.id);
            AW || (AW = document.createElement("span"), AW.className = "SkyblockCompassMarker", this.markers.set(wW.id, AW), this.compass.track.appendChild(AW)), AW.dataset.icon !== wW.icon && (AW.dataset.icon = wW.icon, AW.replaceChildren(vM(wW.icon))), AW.style.color = null !== (zR = wW.colour) && void 0 !== zR ? zR : "", AW.style.translate = wW.left * RW + "px", AW.style.zIndex = String(WW.compass.markers.length - CW), AW.title !== wW.name && (AW.title = wW.name)
          }));
          for (const [WW, wW] of this.markers) MW.has(WW) || (wW.remove(), this.markers.delete(WW));
          this.compass.label.textContent !== WW.compass.label && (this.compass.label.textContent = WW.compass.label)
        }
        this.terrain && (DR(this.terrain, !(null !== WW && void 0 !== WW && WW.minimap)), null !== WW && void 0 !== WW && WW.minimap && (this.terrain.style.transform = WW.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", WW.minimap.iconRotation)));
        const RW = null === WW || void 0 === WW ? void 0 : WW.searchArea;
        for (const MW of [this.searchAreas.minimap, this.searchAreas.map])
          if (MW && (DR(MW, !RW), RW)) {
            if (this.searchAreaPath.seed !== RW.shapeSeed && (this.searchAreaPath = {
                seed: RW.shapeSeed,
                d: GR(nR(RW.shapeSeed))
              }), MW.dataset.shapeSeed !== RW.shapeSeed) {
              MW.dataset.shapeSeed = RW.shapeSeed;
              for (const WW of MW.querySelectorAll("path")) WW.setAttribute("d", this.searchAreaPath.d)
            }
            MW.style.left = `${RW.left}%`, MW.style.top = `${RW.top}%`, MW.style.width = `${RW.width}%`, MW.style.height = `${RW.height}%`
          } if (this.player && (DR(this.player, !(null !== WW && void 0 !== WW && WW.player) || WW.player.hidden), null !== WW && void 0 !== WW && WW.player && (this.player.style.left = `${WW.player.left}%`, this.player.style.top = `${WW.player.top}%`, this.player.style.setProperty("--map-player-rotation", WW.player.rotation))), this.waypoint) {
          const {
            root: RW,
            marker: MW,
            clip: wW,
            text: CW,
            label: zR,
            distance: AW,
            hint: bR
          } = this.waypoint, yR = !(null !== WW && void 0 !== WW && WW.waypoint) || null !== WW.waypoint.popupToken && WW.waypoint.popupToken !== this.waypointOriginToken;
          DR(RW, yR);
          let NW = 1;
          const eW = this.waypointLaunch;
          if (!yR && eW && WW.waypoint.nameKey === eW.nameKey) {
            const WW = performance.now();
            eW.startedAt ??= WW, NW = Math.min(1, Math.max(0, (WW - eW.startedAt - 450) / 1e3)), MW.style.opacity = String(Math.min(1, (WW - eW.startedAt) / 150)), 1 === NW && (this.waypointLaunch = null)
          } else MW.style.opacity = "", eW && null !== eW.startedAt && (this.waypointLaunch = null);
          if (RW.classList.toggle("Launching", NW < 1), null !== WW && void 0 !== WW && WW.waypoint) {
            const RW = this.waypointInset,
              yR = "quest_talk" === WW.waypoint.markerIcon ? function(WW, RW, MW) {
                if (!WW.text || null === WW.blockHeight || 0 === WW.nearness) return WW;
                const wW = WW.blockHeight / 100 * MW.height,
                  CW = -WW.nearness * (qM * wW + RW.width / 2),
                  zR = WW.nearness * (ZR * wW + RW.height / 2);
                return {
                  ...WW,
                  text: {
                    x: WW.text.x + CW / MW.width * 100,
                    y: WW.text.y + zR / MW.height * 100
                  }
                }
              }(WW.waypoint, this.waypointMarkerSize, this.viewport) : WW.waypoint,
              BW = (0, FR.d)(yR, RW, this.viewport),
              tR = NW * NW * (3 - 2 * NW),
              TW = NW < 1 ? eW.x + (BW.x - eW.x) * tR : BW.x,
              gR = NW < 1 ? eW.y + (BW.y - eW.y) * tR : BW.y;
            MW.style.translate = `${TW}vw ${gR}vh`, wW.style.clipPath = `inset(${RW.top}px ${RW.x}px ${RW.bottom}px)`, DR(CW, NW < 1 || !WW.waypoint.text), CW.style.opacity = String(1 - WW.waypoint.nearness), WW.waypoint.text && (CW.style.translate = `${WW.waypoint.text.x}vw ${WW.waypoint.text.y}vh`), zR.textContent !== WW.waypoint.name && (zR.textContent = WW.waypoint.name), this.markerIcon !== WW.waypoint.markerIcon && (this.markerIcon = WW.waypoint.markerIcon, MW.replaceChildren(vM(this.markerIcon))), AW.textContent !== WW.waypoint.distance && (AW.textContent = WW.waypoint.distance), DR(bR, null === WW.waypoint.hint), null !== WW.waypoint.hint && bR.textContent !== WW.waypoint.hint && (bR.textContent = WW.waypoint.hint)
          }
        }
      }
      dispose() {
        var WW, RW;
        this.mountWaypointOrigin(null), this.render(null), null === (WW = this.stopLayout) || void 0 === WW || WW.call(this), this.stopLayout = null, null === (RW = this.stopWaypoint) || void 0 === RW || RW.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Qw = !0
      }
    }

    function DR(WW, RW) {
      WW.hidden !== RW && (WW.hidden = RW)
    }
    const qM = .55,
      ZR = .6;
    const SR = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class WM {
      constructor(WW, RW, MW, wW) {
        this.map = WW, this.quests = RW, this.compass = MW, this.display = new HR, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Qw = !1, this.snapshot = null, this.texts = new Map, this.translate = wW
      }
      setTranslator(WW, RW) {
        this.translate = WW, this.locale = RW, this.metresFormat = new Intl.NumberFormat(RW), this.texts.clear()
      }
      translateCached(WW, RW) {
        const MW = void 0 === RW ? WW : `${WW} ${RW}`;
        let wW = this.texts.get(MW);
        return void 0 === wW && (this.texts.size >= 500 && this.texts.clear(), wW = this.translate(WW, void 0 === RW ? void 0 : {
          distance: RW
        }), this.texts.set(MW, wW)), wW
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(WW, RW, MW) {
        if (this.Qw) return;
        if (!WW) return this.snapshot = null, void this.display.render(null);
        const wW = this.map.getSnapshot().map,
          yR = MW.cameraHeading,
          NW = {
            ...this.display.compassSize,
            tanHalfFovX: MW.tanHalfFovX,
            pitch: MW.cameraPitch
          },
          eW = [];
        if (wW)
          for (const CW of this.compass.frame(WW, yR, RW)) {
            const WW = gR(CW.offset, NW);
            null !== WW && eW.push({
              ...CW,
              left: WW
            })
          }
        const BW = function(WW, RW) {
            const MW = [],
              wW = WW => "quest" === WW.kind ? WW.distance - 1 : WW.distance,
              CW = [...WW].sort(((WW, RW) => wW(WW) - wW(RW) || WW.id.localeCompare(RW.id)));
            for (const zR of CW) {
              let WW = !1;
              if ("quest" !== zR.kind)
                for (const wW of MW)
                  if (Math.abs(wW.left - zR.left) < RW) {
                    WW = !0;
                    break
                  } WW || MW.push(zR)
            }
            return MW
          }(eW, this.display.compassSpacing),
          tR = function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              MW = null;
            for (const wW of WW) Math.abs(wW.offset) <= RW && (!MW || wW.distance < MW.distance || wW.distance === MW.distance && Math.abs(wW.offset) < Math.abs(MW.offset)) && (MW = wW);
            return MW
          }(BW),
          TW = WW => {
            var RW;
            return null !== (RW = WW.displayName) && void 0 !== RW ? RW : this.translateCached(WW.nameKey)
          },
          iR = {
            compass: {
              markers: BW.map((WW => ({
                id: WW.id,
                icon: WW.icon,
                colour: WW.colour,
                name: TW(WW),
                left: WW.left
              }))),
              cardinals: AW.map((WW => {
                let {
                  name: RW,
                  bearing: MW
                } = WW;
                const wW = gR(CW.d.computeShortestRotation(yR, MW), NW);
                return {
                  name: RW,
                  left: null !== wW && void 0 !== wW ? wW : 0,
                  hidden: null === wW
                }
              })),
              label: tR ? `${TW(tR)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",lW(tR.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== wW && void 0 !== wW && wW.background) {
          const RW = WW[0] - wW.mapOrigin[0],
            MW = WW[2] - wW.mapOrigin[2],
            {
              rotation: CW,
              transform: AW
            } = function(WW, RW, MW, wW) {
              const [CW, AW] = bR(WW, RW, wW), yR = zR - MW;
              return {
                rotation: yR,
                transform: `rotate(${yR}rad) translate(-${CW}%, -${AW}%)`
              }
            }(RW, MW, yR, wW.background.bounds);
          iR.minimap = {
            transform: AW,
            iconRotation: -CW + "rad"
          };
          const [NW, eW] = bR(RW, MW, wW.background.bounds);
          iR.player = {
            left: NW,
            top: eW,
            hidden: NW < 0 || eW < 0 || NW > 100 || eW > 100,
            rotation: -CW + "rad"
          }
        }
        const {
          waypoint: YW
        } = this.quests.getSnapshot();
        if ("search" === (null === YW || void 0 === YW ? void 0 : YW.questMarkerIcon) && null !== wW && void 0 !== wW && wW.background) {
          const {
            bounds: WW
          } = wW.background, [RW, MW] = bR(YW.position[0] - wW.mapOrigin[0], YW.position[2] - wW.mapOrigin[2], WW);
          iR.searchArea = {
            left: RW,
            top: MW,
            width: 6400 / (WW.mapMaxX - WW.mapMinX),
            height: 6400 / (WW.mapMaxZ - WW.mapMinZ),
            shapeSeed: YW.nameKey
          }
        }
        const JW = this.quests.getNotificationSnapshot(),
          PW = "completion" === (null === JW || void 0 === JW ? void 0 : JW.phase) && !lR(JW.kind);
        if (YW && !PW) {
          const RW = Math.hypot(...YW.position.map(((RW, MW) => RW - WW[MW]))),
            wW = Math.round(RW),
            CW = "talk" === YW.questMarkerIcon ? Math.min(1, Math.max(0, (10 - RW) / 5)) : 0,
            zR = MW.projectWorldPosToViewport(YW.position),
            AW = zR && MW.projectWorldPosToViewport([YW.position[0], YW.position[1] - 1, YW.position[2]]);
          iR.waypoint = {
            ...MW.projectWorldPosToScreenPos(YW.position),
            text: zR,
            nearness: CW * CW * (3 - 2 * CW),
            blockHeight: zR && AW ? AW.y - zR.y : null,
            name: this.translateCached(YW.nameKey),
            nameKey: YW.nameKey,
            markerIcon: YW.questMarkerIcon ? SR[YW.questMarkerIcon] : "quest",
            popupToken: (null === JW || void 0 === JW ? void 0 : JW.waypointNameKey) === YW.nameKey ? JW.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(wW)),
            hint: "search" === YW.questMarkerIcon && Math.hypot(YW.position[0] - WW[0], YW.position[2] - WW[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = iR, this.display.render(iR)
      }
      dispose() {
        this.Qw = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const RM = "skyblockSkillsView";
    class MM extends eW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          MW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW => WW,
          wW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          CW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => WW;
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = RW, this.translate = MW, this.locale = wW, this.itemName = CW, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = WW => {
          this.selected = WW, this.emit()
        }
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, this.locale = RW, this.itemName = MW, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(WW) {
        let RW = this.skillText.get(WW);
        return RW || (RW = {
          label: this.translate(`skyblockGame:${WW}`),
          description: this.translate(`skyblockGame:${WW}Description`)
        }, this.skillText.set(WW, RW)), RW
      }
      sources(WW) {
        if ("mining" === WW || "fishing" === WW) return this.buildSources(WW);
        let RW = this.sourceText.get(WW);
        return RW || (RW = this.buildSources(WW), this.sourceText.set(WW, RW)), RW
      }
      buildSources(WW) {
        const RW = this.translate;
        return "exploration" === WW ? [RW("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), RW("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === WW ? [RW("skyblockGame:logSource", {
          xp: this.number(eR["Maple Log"])
        })] : "combat" === WW ? [RW("skyblockGame:creatureKillSource"), RW("skyblockGame:noEnvironmentalXp")] : "farming" === WW ? [RW("skyblockGame:cropSource", {
          xp: this.number(TR["Wheat|FreshlyGrown"])
        }), RW("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), RW("skyblockGame:noYoungCropXp")] : Object.entries("mining" === WW ? tM : gM).map((WW => {
          let [MW, wW] = WW;
          return RW("skyblockGame:itemXpSource", {
            item: this.itemName(MW),
            xp: this.number(wW)
          })
        }))
      }
      number(WW) {
        return WW.toLocaleString(this.locale)
      }
      benefit(WW, RW) {
        const MW = wR(WW, RW);
        return this.translate(MW.translationKey, {
          bonus: this.number(MW.percent)
        })
      }
      jC(WW) {
        if (!this.Qw) {
          if ("snapshot" === WW.kind) this.progress = WW.progress, this.pending.clear(), this.recent = null;
          else if ("award" === WW.kind && this.progress) {
            const {
              award: RW
            } = WW;
            this.progress = {
              ...this.progress,
              [RW.skill]: RW.after
            };
            for (const [WW, wW] of this.pending) wW.skill === RW.skill && this.pending.delete(WW);
            const MW = RW.after.level > RW.before.level;
            this.recordGain(RW.skill, RW.amount, MW ? ++this.nextLevelUpToken : null), MW && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: RW.skill,
              beforeLevel: RW.before.level,
              level: RW.after.level
            })
          } else {
            if ("rejectBlock" === WW.kind) return void this.rejectBlock(WW.position);
            if ("open" === WW.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(WW, RW, MW) {
        if (!this.progress || this.Qw || MW) return;
        const wW = function(WW, RW) {
          const MW = WW.split("|")[0];
          return "Air" === RW || RW === `Barkless ${WW}` ? Object.hasOwn(eR, MW) ? {
            skill: "foraging",
            amount: eR[MW]
          } : "Air" !== RW ? null : Object.hasOwn(tM, WW) ? {
            skill: "mining",
            amount: tM[WW]
          } : bM(WW) ? {
            skill: "farming",
            amount: 10
          } : NR(WW) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(TR, WW) ? {
            skill: "farming",
            amount: TR[WW]
          } : Object.hasOwn(hW, WW) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(RW, "Air");
        if (!wW) return;
        const CW = WW.join(",");
        if (this.pending.has(CW)) return;
        const zR = this.predictedProgress(wW.skill).totalXp + wW.amount;
        Number.isSafeInteger(zR) && (this.pending.set(CW, {
          ...wW,
          expires: this.now() + 2e3
        }), this.recordGain(wW.skill, 0), this.emit())
      }
      rejectBlock(WW) {
        this.pending.delete(WW.join(",")) && this.emit()
      }
      WR() {
        if (this.Qw) return;
        let WW = !1;
        for (const [RW, MW] of this.pending) MW.expires <= this.now() && (this.pending.delete(RW), WW = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, WW = !0), WW && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(WW, RW) {
        var MW, wW;
        let CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const zR = (null === (MW = this.recent) || void 0 === MW ? void 0 : MW.skill) === WW && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          AW = (null === (wW = this.recent) || void 0 === wW ? void 0 : wW.skill) === WW && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: WW,
          confirmed: zR + RW,
          expires: this.now() + 3e3,
          levelUpToken: null !== CW && void 0 !== CW ? CW : AW
        }
      }
      pendingXp(WW) {
        let RW = 0;
        for (const MW of this.pending.values()) MW.skill === WW && (RW += MW.amount);
        return RW
      }
      predictedProgress(WW) {
        const RW = this.progress[WW],
          MW = this.pendingXp(WW);
        return MW ? zM(RW.totalXp + MW, WW) : RW
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var WW, RW, MW;
        const wW = this.progress ? GW.map((WW => {
            const RW = this.predictedProgress(WW);
            return {
              ...this.text(WW),
              icon: iM[WW],
              benefit: this.benefit(WW, RW.level),
              sources: this.sources(WW),
              id: WW,
              selected: WW === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(RW.level)
              }),
              xp: null === RW.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(RW.xpIntoLevel),
                target: this.number(RW.xpForNextLevel)
              }),
              percent: null === RW.xpForNextLevel ? 100 : Math.min(100, RW.xpIntoLevel / RW.xpForNextLevel * 100)
            }
          })) : [],
          CW = wW.find((WW => {
            var RW;
            return WW.id === (null === (RW = this.recent) || void 0 === RW ? void 0 : RW.skill)
          })),
          zR = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: wW,
          detail: null !== (WW = wW.find((WW => WW.selected))) && void 0 !== WW ? WW : null,
          overallLevel: this.progress ? GW.reduce(((WW, RW) => WW + this.predictedProgress(RW).level), 0) : null,
          hud: CW && zR > 0 ? {
            skill: CW,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(zR)
            }),
            levelUpToken: null !== (RW = null === (MW = this.recent) || void 0 === MW ? void 0 : MW.levelUpToken) && void 0 !== RW ? RW : null,
            colour: JR(CW.id)
          } : null
        }
      }
    }
    const wM = Math.max(1600, 600, 950) + 400,
      CM = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      zw = "skyblockQuestsView",
      AM = "skyblockQuestNotificationView";
    class bw extends eW {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          AW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(WW, wW, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = RW, this.translate = MW, this.now = CW, this.locale = zR, this.publishNotification = AW, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var WW, RW;
          this.selected = null !== (WW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.trackedQuestId) && void 0 !== WW ? WW : null, this.show()
        }, this.select = WW => {
          this.selected = WW, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const WW = this.snapshot.detail;
          !this.Qw && null !== WW && void 0 !== WW && WW.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(WW.id), this.emit())
        }, this.viewDialogue = () => {
          const WW = this.snapshot.detail;
          var RW;
          WW && (null === (RW = this.onViewDialogue) || void 0 === RW || RW.call(this, WW.id))
        }, this.notifications = new IR(CW, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var WW, RW;
        return null !== (WW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.trackedQuestId) && void 0 !== WW ? WW : null
      }
      notify(WW) {
        !this.Qw && this.notifications.enqueue(WW) && this.emitNotification()
      }
      setNotificationsHeld(WW) {
        (this.notifications.setHeld(WW) || WW) && this.emitNotification()
      }
      WR() {
        var WW, RW;
        if (this.Qw) return;
        this.notifications.WR() && this.emitNotification();
        let MW = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, MW = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, MW = !0);
        const wW = yw(this.authoritative);
        null !== wW && void 0 !== wW && null !== (WW = wW.questClock) && void 0 !== WW && WW.running && this.clockText(wW) !== (null === (RW = this.snapshot.tracked) || void 0 === RW ? void 0 : RW.clock) && (MW = !0), MW && this.emit()
      }
      setTranslator(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = WW, this.locale = RW, this.emitNotification(), this.emit()
      }
      jC(WW) {
        if (!this.Qw)
          if ("completion" === WW.kind) this.notify(WW.questCompletion);
          else if ("landmark" === WW.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: WW.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === WW.kind) {
          var RW, MW, wW;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: WW.npcNoteTitleKey,
            textKey: WW.npcNoteTextKey,
            params: null !== (RW = WW.npcNoteParams) && void 0 !== RW ? RW : {},
            nameKeys: null !== (MW = WW.npcNoteNameKeys) && void 0 !== MW ? MW : {},
            iconItem: null !== (wW = WW.npcNoteIconItem) && void 0 !== wW ? wW : null
          })
        } else if ("open" === WW.kind) this.show();
        else if ("guidance" === WW.kind) this.waypoint = WW.waypoint, this.compassTarget = WW.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === WW.kind) {
          this.authoritative = WW.snapshot, this.notifications.WR() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const RW = this.trackedStepPulse;
          this.updateTrackedStepPulse(WW.snapshot), this.emit(), this.trackedStepPulse > RW && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Qw || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var WW;
        return null !== (WW = this.translateWithIcons) && void 0 !== WW ? WW : this.translate
      }
      clockText(WW) {
        const RW = WW.questClock;
        if (!RW) return null;
        const MW = RW.elapsedMs + (RW.running ? this.now() - this.receivedAt : 0);
        return void 0 === RW.countdownFromMs ? (0, kR.n)(MW, !1) : (0, kR.n)(1e3 * Math.ceil(Math.max(0, RW.countdownFromMs - MW) / 1e3), !1)
      }
      updateTrackedStepPulse(WW) {
        var RW, MW, wW;
        const CW = yw(WW);
        if (!CW) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const zR = WW => CW.subquests.filter((RW => WW(RW.status))).map((WW => WW.id)),
          AW = zR((WW => "completed" === WW || "skipped" === WW)),
          bR = zR((WW => "locked" !== WW)),
          yR = (null === (RW = this.trackedSteps) || void 0 === RW ? void 0 : RW.questId) === CW.id && CW.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (yR) {
          const WW = AW.filter((WW => !yR.finished.has(WW))),
            RW = zR((WW => "active" === WW || "ready" === WW)).filter((WW => !yR.unlocked.has(WW)));
          WW.length > 0 && this.trackedStepPulse++, (WW.length > 0 || RW.length > 0) && (this.trackedChange = {
            finished: new Set(WW),
            unlocked: new Set(RW),
            expiresAt: this.now() + wM
          })
        } else {
          var NW;
          this.trackedStepPulse = (null === (NW = this.trackedSteps) || void 0 === NW ? void 0 : NW.questId) === CW.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: CW.id,
          progress: CW.progress,
          finished: new Set([...null !== (MW = null === yR || void 0 === yR ? void 0 : yR.finished) && void 0 !== MW ? MW : [], ...AW]),
          unlocked: new Set([...null !== (wW = null === yR || void 0 === yR ? void 0 : yR.unlocked) && void 0 !== wW ? wW : [], ...bR])
        }
      }
      entry(WW, RW) {
        var MW, wW;
        const CW = WW.id === (null === (MW = this.authoritative) || void 0 === MW ? void 0 : MW.trackedQuestId),
          zR = this.now() < this.trackAvailableAt,
          AW = this.questTextTranslator(),
          bR = WW.subquests.map((RW => {
            var MW, wW, zR, bR, yR, NW;
            const eW = null !== (MW = RW.handInNpcName) && void 0 !== MW ? MW : WW.giverName,
              BW = this.translate("skyblockGame:progress", {
                current: RW.progress.toLocaleString(this.locale),
                target: RW.target.toLocaleString(this.locale)
              }),
              tR = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: eW ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [RW.status],
              TW = "active" === RW.status || "ready" === RW.status;
            return {
              id: RW.id,
              name: PR(AW, RW.nameKey, RW.nameParams),
              description: PR(AW, RW.descriptionKey, RW.descriptionParams),
              progress: BW,
              status: RW.status,
              statusLabel: tR ? this.translate(tR, {
                npc: eW
              }) : BW,
              iconItem: TW && null !== (wW = RW.questIconItem) && void 0 !== wW ? wW : null,
              barPercent: "active" === RW.status && RW.showsProgressBar ? Math.min(100, 100 * RW.progress / RW.target) : null,
              justFinished: CW && null !== (zR = null === (bR = this.trackedChange) || void 0 === bR ? void 0 : bR.finished.has(RW.id)) && void 0 !== zR && zR,
              justUnlocked: CW && null !== (yR = null === (NW = this.trackedChange) || void 0 === NW ? void 0 : NW.unlocked.has(RW.id)) && void 0 !== yR && yR
            }
          }));
        return {
          id: WW.id,
          name: PR(AW, WW.nameKey, WW.nameParams),
          description: PR(AW, WW.descriptionKey, WW.descriptionParams),
          progress: RW ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: WW.progress.toLocaleString(this.locale),
            target: WW.target.toLocaleString(this.locale)
          }),
          completed: RW,
          tracked: CW,
          selected: WW.id === this.selected,
          canTrack: !RW && !CW && !zR,
          trackLabel: this.translate(CW ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : zR ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== WW.id,
          subquests: bR,
          focusStep: null !== (wW = bR.find((WW => null !== WW.barPercent))) && void 0 !== wW ? wW : null,
          clock: this.clockText(WW)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var WW, RW, MW, wW, CW, zR, AW, bR, yR, NW;
        const eW = [...null !== (WW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.active) && void 0 !== WW ? WW : [], ...null !== (MW = null === (wW = this.authoritative) || void 0 === wW ? void 0 : wW.completed) && void 0 !== MW ? MW : []];
        var BW, tR, TW, gR;
        eW.some((WW => WW.id === this.selected)) || (this.selected = null !== (BW = null !== (tR = null === (TW = this.authoritative) || void 0 === TW ? void 0 : TW.trackedQuestId) && void 0 !== tR ? tR : null === (gR = eW[0]) || void 0 === gR ? void 0 : gR.id) && void 0 !== BW ? BW : null);
        const iR = null !== (CW = null === (zR = this.authoritative) || void 0 === zR ? void 0 : zR.active.map((WW => this.entry(WW, !1)))) && void 0 !== CW ? CW : [];
        iR.sort(((WW, RW) => Number(RW.tracked) - Number(WW.tracked)));
        const YW = null !== (AW = null === (bR = this.authoritative) || void 0 === bR ? void 0 : bR.completed.map((WW => this.entry(WW, !0)))) && void 0 !== AW ? AW : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: iR,
          completed: YW,
          completedExpanded: this.completedExpanded,
          detail: null !== (yR = [...iR, ...YW].find((WW => WW.selected))) && void 0 !== yR ? yR : null,
          tracked: null !== (NW = iR.find((WW => WW.tracked))) && void 0 !== NW ? NW : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function yw(WW) {
      var RW;
      return null !== (RW = null === WW || void 0 === WW ? void 0 : WW.active.find((RW => RW.id === WW.trackedQuestId))) && void 0 !== RW ? RW : null
    }
    const NM = "skyblockDungeonsView";
    class eM extends eW {
      constructor(WW, RW) {
        let MW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          wW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = RW, this.locale = MW, this.requestEnter = wW, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = WW => {
          this.selected = WW, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const WW = this.pickerEntry(),
            RW = null === WW || void 0 === WW ? void 0 : WW.difficulties[this.pageIndex];
          void 0 !== RW && null !== RW.unlockedBoss && (this.close(), this.requestEnter(WW.id, RW.difficulty))
        }
      }
      setTranslator(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = WW, this.locale = RW, this.emit()
      }
      jC(WW) {
        var RW, MW;
        if (!this.Qw) return "open" === WW.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== WW.kind ? "snapshot" === WW.kind && (this.authoritative = WW.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (RW = null === (MW = this.pickerEntry()) || void 0 === MW ? void 0 : MW.difficulties.length) && void 0 !== RW ? RW : 1) - 1)), null === WW.snapshot && this.open ? this.close() : this.emit()) : this.choose(WW.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(WW) {
        var RW;
        const MW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.dungeons.find((RW => RW.id === WW));
        void 0 !== MW ? this.open && this.pickerDungeonId === WW || (this.pickerDungeonId = WW, this.pageIndex = Math.max(0, MW.difficulties.findLastIndex((WW => null !== WW.unlockedBoss))), this.open ? this.emit() : this.show()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${WW}`)
      }
      turnTo(WW) {
        var RW, MW;
        const wW = null !== (RW = null === (MW = this.pickerEntry()) || void 0 === MW ? void 0 : MW.difficulties.length) && void 0 !== RW ? RW : 0;
        WW < 0 || WW >= wW || WW === this.pageIndex || (this.pageIndex = WW, this.emit())
      }
      pickerEntry() {
        var WW, RW;
        return null !== (WW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.dungeons.find((WW => WW.id === this.pickerDungeonId))) && void 0 !== WW ? WW : null
      }
      difficulty(WW) {
        const RW = WW.completions > 0,
          MW = null === WW.bestMs ? null : (0, kR.n)(WW.bestMs);
        return {
          difficulty: WW.difficulty,
          label: this.translate(kR.e[WW.difficulty]),
          colour: kR.f[WW.difficulty],
          beaten: RW,
          bestTime: MW,
          completions: WW.completions,
          summary: RW ? [null === MW ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: MW
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: WW.completions.toLocaleString(this.locale)
          })].filter((WW => null !== WW)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(WW) {
        const RW = WW.difficulties.map((WW => this.difficulty(WW))),
          MW = RW.filter((WW => WW.beaten)).length;
        return {
          id: WW.id,
          name: this.translate(WW.nameKey),
          selected: WW.id === this.selected,
          beatenSummary: `${MW} / ${RW.length}`,
          difficulties: RW
        }
      }
      picker() {
        const WW = this.pickerEntry();
        if (null === WW || 0 === WW.difficulties.length) return null;
        const RW = WW.difficulties.map(((RW, MW) => {
          var wW, CW, zR, AW;
          const bR = RW.unlockedBoss,
            yR = null === bR ? this.lockedHint(WW, MW) : null;
          return {
            ...this.difficulty(RW),
            unlocked: null !== bR,
            bossName: null === bR ? null : this.translate(bR.bossNameKey),
            bossMobType: null !== (wW = null === bR || void 0 === bR ? void 0 : bR.bossMobType) && void 0 !== wW ? wW : null,
            bossMobVariation: null !== (CW = null === bR || void 0 === bR ? void 0 : bR.bossMobVariation) && void 0 !== CW ? CW : null,
            lockedHint: null !== (zR = null === yR || void 0 === yR ? void 0 : yR.text) && void 0 !== zR ? zR : null,
            lockedHintHighlight: null !== (AW = null === yR || void 0 === yR ? void 0 : yR.highlight) && void 0 !== AW ? AW : null,
            current: MW === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(WW.nameKey),
          pages: RW,
          page: RW[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < RW.length - 1
        }
      }
      lockedHint(WW, RW) {
        var MW, wW, CW;
        if (0 === RW && "number" === typeof WW.combatLevelLock) {
          const RW = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: WW.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: RW,
            colour: JR("combat"),
            icon: iM.combat
          })
        }
        const zR = null !== (MW = null === (wW = this.authoritative) || void 0 === wW ? void 0 : wW.dungeons) && void 0 !== MW ? MW : [],
          AW = RW > 0 ? WW : null !== (CW = zR[zR.indexOf(WW) - 1]) && void 0 !== CW ? CW : null,
          bR = RW > 0 ? WW.difficulties[RW - 1] : null === AW || void 0 === AW ? void 0 : AW.difficulties[0];
        if (null === AW || void 0 === bR) return null;
        const yR = this.translate(AW.nameKey);
        if (null === bR.unlockedBoss) return AW === WW ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, bR.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: yR
        }, bR.difficulty);
        const NW = this.translate(bR.unlockedBoss.bossNameKey);
        return AW === WW ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: NW
        }, bR.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: NW,
            dungeon: yR
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(WW, RW, MW) {
        return this.hintHighlighting(WW, RW, "difficulty", {
          name: this.translate(kR.e[MW]),
          colour: kR.f[MW],
          icon: null
        })
      }
      hintHighlighting(WW, RW, MW, wW) {
        let {
          name: CW,
          colour: zR,
          icon: AW
        } = wW;
        const bR = this.translate(WW, {
          ...RW,
          [MW]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(WW, {
            ...RW,
            [MW]: CW
          }),
          highlight: 2 === bR.length ? {
            before: bR[0],
            name: CW,
            after: bR[1],
            colour: zR,
            icon: AW
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var WW, RW, MW;
        const wW = null !== (WW = null === (RW = this.authoritative) || void 0 === RW ? void 0 : RW.dungeons) && void 0 !== WW ? WW : [];
        var CW, zR;
        wW.some((WW => WW.id === this.selected)) || (this.selected = null !== (CW = null === (zR = wW[0]) || void 0 === zR ? void 0 : zR.id) && void 0 !== CW ? CW : null);
        const AW = wW.map((WW => this.entry(WW)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: AW,
          detail: null !== (MW = AW.find((WW => WW.selected))) && void 0 !== MW ? MW : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const BM = ["mining", "farming", "foraging", "fishing", "combat"],
      tw = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      TM = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function gw() {
      for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
      return RW.map(((WW, RW) => ({
        amount: WW,
        coins: tw[RW],
        xp: TM[RW]
      })))
    }
    const iw = gw(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      YM = gw(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      JM = gw(50, 100, 250, 500, 1e3, 2500, 5e3),
      PM = gw(25, 50, 100, 250, 500, 1e3),
      IM = gw(10, 25, 50, 100, 250, 500, 1e3),
      oM = gw(1, 5, 10, 25, 50);

    function lM(WW, RW) {
      return {
        id: WW,
        category: "fishing",
        item: RW,
        drops: [RW],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IM
      }
    }
    const FM = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: YM
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: JM
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: JM
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: PM
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: PM
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: YM
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: iw
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: iw
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: iw
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: JM
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: YM
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: YM
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: YM
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: JM
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: JM
      }, lM("wheatfish", "Wheatfish"), lM("darter", "Darter"), lM("sunset_minnow", "Sunset Minnow"), lM("root_flounder", "Root Flounder"), lM("greenfin_loach", "Greenfin Loach"), lM("red_strongfish", "Red Strongfish"), lM("green_strongfish", "Green Strongfish"), lM("boomerang_fish", "Boomerang Fish"), lM("seahorse", "Seahorse"), lM("spined_stickleback", "Spined Stickleback"), lM("moon_strongfish", "Moon Strongfish"), lM("boulder_bass", "Boulder Bass"), lM("grass_snapper", "Grass Snapper"), lM("crystal_wheatfish", "Crystalized Wheatfish", oM), lM("moonstone_pupfish", "Moonstone Pupfish", oM), lM("reedglass_minnow", "Reedglass Minnow"), lM("mangrove_herring", "Mangrove Herring"), lM("mudline_perch", "Mudline Perch"), lM("coastal_mullet", "Coastal Mullet"), lM("reef_sardine", "Reef Sardine"), lM("root_perch", "Root Perch"), lM("driftwood_catfish", "Driftwood Catfish"), lM("aether_minnow", "Aether Minnow"), lM("needlefish", "Tri-Pointed Needlefish"), lM("threadfin_bream", "Threadfin Bream"), lM("mudbelly_tilapia", "Mudbelly Tilapia"), lM("rotslab_eel", "Rotslab Eel"), lM("polarflash_electron", "Polarflash Electron"), lM("mireback_carp", "Mireback Carp"), lM("blackwater_bream", "Blackwater Bream"), lM("stone_grouper", "Stone Grouper"), lM("shadeback_ray", "Shadeback Ray"), lM("glacial_silverfish", "Glacial Silverfish"), lM("hatchetfish", "Hatchetfish"), lM("moonlit_boomerang", "Moonlit Boomerang Fish"), lM("murkborne_ray", "Murkborne Ray"), lM("bamboo_catfish", "Bamboo Catfish"), lM("mossback_arapaima", "Mossback Arapaima"), lM("murk_stingray", "Murk Stingray"), lM("channel_sawfish", "Channel Sawfish"), lM("boned_sturgeon", "Boned Sturgeon"), lM("oarfish", "Oarfish"), lM("snakehead", "Snakehead", oM), lM("eldertide_leviathan", "Eldertide Leviathan", oM), lM("pithead", "Pithead"), lM("electric_eel", "Electric Eel"), lM("shadow_darter", "Shadow Darter"), lM("abyss_carp", "Abyss Carp"), lM("nomai_moray", "Nomai Moray"), lM("silver_dragonfish", "Silver Dragonfish"), lM("giant_moray", "Giant Moray"), lM("coelacanth", "Coelacanth", oM), lM("frost_herring", "Frost Herring"), lM("permafrost_halibut", "Permafrost Halibut"), lM("glacial_lanternfish", "Glacial Lanternfish"), lM("frozen_grenadier", "Frozen Grenadier"), lM("blackfin_icefish", "Blackfin Icefish"), lM("moonfish", "Moonfish"), lM("alpha_strongfish", "Alpha Moon Strongfish"), lM("deep_lanternfish", "Deepwater Lanternfish", oM), lM("pearlescent_moonfish", "Pearlescent Moonfish", oM), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: YM
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: PM
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: PM
      }],
      fM = (new Map(FM.map((WW => [WW.id, WW]))), new Map),
      QM = new Map;
    for (const My of FM) {
      for (const [WW, RW] of Object.entries(null !== (rw = My.blocks) && void 0 !== rw ? rw : {})) {
        var rw;
        fM.set(WW, {
          collection: My,
          amount: RW
        })
      }
      for (const WW of null !== (cwW = My.drops) && void 0 !== cwW ? cwW : []) {
        var cwW;
        QM.set(WW, My)
      }
    }

    function XM(WW, RW) {
      let MW = 0;
      for (; MW < WW.tiers.length && RW >= WW.tiers[MW].amount;) MW++;
      return MW
    }
    const jw = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function kw(WW) {
      return jw[WW - 1]
    }
    const aw = "skyblockCollectionsView";
    class sM extends eW {
      constructor(WW, RW) {
        let MW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          wW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => WW;
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = RW, this.locale = MW, this.itemName = wW, this.counts = null, this.category = "mining", this.selected = FM[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = WW => {
          this.category = WW, this.selected = this.inCategory(WW)[0].id, this.emit()
        }, this.select = WW => {
          this.selected = WW, this.emit()
        }
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, this.locale = RW, this.itemName = MW, this.emit()
      }
      jC(WW) {
        if (!this.Qw)
          if ("collOpen" !== WW.kind) {
            (WW.collFull || null === this.counts) && (this.counts = new Map);
            for (const [RW, MW] of WW.collCounts) this.counts.set(RW, MW);
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
        var WW;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const RW = this.inCategory(this.category).map((WW => this.collectionView(WW))),
          MW = FM.reduce(((WW, RW) => WW + this.tierOf(RW)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: BM.map((WW => this.categoryView(WW))),
          collections: RW,
          detail: null !== (WW = RW.find((WW => WW.selected))) && void 0 !== WW ? WW : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(MW)
          })
        }
      }
      categoryView(WW) {
        const RW = this.inCategory(WW),
          MW = RW.reduce(((WW, RW) => WW + this.tierOf(RW)), 0),
          wW = RW.reduce(((WW, RW) => WW + RW.tiers.length), 0);
        return {
          id: WW,
          label: this.translate(`skyblockGame:${WW}`),
          icon: iM[WW],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(MW),
            target: this.number(wW)
          }),
          selected: WW === this.category
        }
      }
      collectionView(WW) {
        var RW, MW;
        const wW = null !== (RW = this.counts.get(WW.id)) && void 0 !== RW ? RW : 0,
          CW = XM(WW, wW),
          zR = null !== (MW = WW.tiers[CW]) && void 0 !== MW ? MW : null,
          AW = 0 === CW ? 0 : WW.tiers[CW - 1].amount;
        return {
          id: WW.id,
          name: this.itemName(WW.item),
          icon: WW.item,
          selected: WW.id === this.selected,
          locked: 0 === wW,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(wW)
          }),
          tier: 0 === CW ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(CW),
          percent: null === zR ? 100 : Math.min(100, (wW - AW) / (zR.amount - AW) * 100),
          progress: null === zR ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(wW),
            target: this.number(zR.amount)
          }),
          nextReward: null === zR ? null : this.reward(WW, zR.coins, zR.xp)
        }
      }
      reward(WW, RW, MW) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(RW),
          xp: this.number(MW),
          skill: this.translate(`skyblockGame:${WW.category}`)
        })
      }
      tierLabel(WW) {
        return this.translate("skyblockGame:collectionTier", {
          tier: kw(WW)
        })
      }
      tierOf(WW) {
        var RW;
        return XM(WW, null !== (RW = this.counts.get(WW.id)) && void 0 !== RW ? RW : 0)
      }
      inCategory(WW) {
        return FM.filter((RW => RW.category === WW))
      }
      number(WW) {
        return WW.toLocaleString(this.locale)
      }
    }
    const dM = "skyblockPortalTransitView",
      pM = "skyblockPortalArrival";
    class hM {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Sz = WW, this.storage = RW, this.now = MW, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      jC(WW) {
        const RW = {
          zoneNameKey: WW.transitZoneNameKey,
          variation: WW.transitZoneVariation,
          colour: WW.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(pM, RW), this.show("departure", RW.zoneNameKey, RW.colour, WW.transitDurationMs, WW.transitDurationMs + 1500, (() => {
          this.storage.removeItem(pM)
        }))
      }
      resumeArrival(WW) {
        const RW = this.storage.getItem(pM);
        this.storage.removeItem(pM), null === RW || RW.variation !== WW || this.now() - RW.departedAt > 3e4 || this.show("arrival", RW.zoneNameKey, RW.colour, 3200, 2e4)
      }
      finishArrival(WW) {
        var RW;
        "arrival" === (null === (RW = this.view) || void 0 === RW ? void 0 : RW.phase) && this.view.token === WW && (this.clearTimer(), this.view = null, this.Sz(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(WW, RW, MW, wW, CW, zR) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: WW,
          zoneNameKey: RW,
          colour: MW,
          durationMs: wW
        }, this.Sz(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Sz(null), null === zR || void 0 === zR || zR()
        }), CW)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const UM = "skyblockDailyRewardView",
      EM = "skyblockDailyRewardCoin";
    class VM {
      constructor(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Sz = WW, this.isBusy = RW, this.holdQuestPopups = MW, this.onHeldCoinsChanged = wW, this.onCoinLanded = CW, this.onStarted = zR, this.onFinished = AW, this.onItemLanded = bR, this.now = yR, this.mM = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var WW, RW;
        return null !== (WW = null === (RW = this.playing) || void 0 === RW ? void 0 : RW.view) && void 0 !== WW ? WW : null
      }
      getHeldCoins() {
        var WW, RW;
        let MW = 0;
        for (const wW of this.mM) MW += wW.coins;
        return MW - (null !== (WW = null === (RW = this.playing) || void 0 === RW ? void 0 : RW.released) && void 0 !== WW ? WW : 0)
      }
      jC(WW) {
        "dailyRewardClaimed" !== WW.kind ? (this.queue.push(WW), this.WR()) : this.mM.push({
          coins: WW.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      WR() {
        const WW = this.now();
        if (null === this.playing) return this.releaseUnshown(WW), void this.startNext(WW);
        const RW = this.playing,
          MW = WW - RW.startedAt,
          wW = RW.view.flyingCoins,
          CW = function(WW, RW) {
            let MW = 0;
            for (; MW < RW && xw(MW, RW) <= WW;) MW++;
            return MW
          }(MW, wW);
        if (CW !== RW.landed) {
          for (let WW = CW - RW.landed > 2 ? CW - 1 : RW.landed; WW < CW; WW++) this.onCoinLanded(WW, wW);
          RW.landed = CW, RW.released = Math.round(RW.view.coins * CW / wW), this.onHeldCoinsChanged()
        }
        for (; RW.itemsLanded < RW.view.items.length && 2e3 + 160 * RW.itemsLanded + 630 <= MW;) this.onItemLanded(RW.itemsLanded), RW.itemsLanded++;
        MW >= RW.view.durationMs && (this.finish(), this.startNext(WW))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.mM = [], this.Sz(null)
      }
      startNext(WW) {
        if (0 === this.queue.length || this.isBusy()) return;
        const RW = this.queue.shift();
        this.token++;
        const MW = {
          token: this.token,
          day: RW.dailyRewardDay,
          coins: RW.dailyRewardCoins,
          items: RW.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: RW.dailyRewardDay === cR ? 24 : 14
        };
        this.playing = {
          view: MW,
          startedAt: WW,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Sz(MW), this.onStarted(MW)
      }
      finish() {
        this.mM.shift(), this.playing = null, this.holdQuestPopups(!1), this.Sz(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(WW) {
        if (this.queue.length > 0 || 0 === this.mM.length) return;
        const RW = this.mM.length;
        this.mM = this.mM.filter((RW => WW - RW.receivedAt < 6e4)), this.mM.length !== RW && this.onHeldCoinsChanged()
      }
    }

    function mw(WW, RW) {
      return 450 + 715 * WW / (RW - 1)
    }

    function xw(WW, RW) {
      return mw(WW, RW) + 650
    }
    const vw = "skyblockMailboxView";
    class KM {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Sz = WW, this.isBusy = RW, this.onStarted = MW, this.now = wW, this.waiting = [], this.playing = null, this.token = 0, this.itemName = WW => WW
      }
      getSnapshot() {
        var WW, RW;
        return null !== (WW = null === (RW = this.playing) || void 0 === RW ? void 0 : RW.view) && void 0 !== WW ? WW : null
      }
      setItemName(WW) {
        this.itemName = WW
      }
      jC(WW) {
        this.waiting.push(...WW.mailLetters), this.WR()
      }
      WR() {
        const WW = this.now();
        null !== this.playing && WW - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Sz(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(WW)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Sz(null)
      }
      start(WW) {
        const RW = this.waiting.slice(0, 3);
        this.token++;
        const MW = {
          token: this.token,
          letters: RW.map((WW => this.toView(WW))),
          more: this.waiting.length - RW.length,
          durationMs: 4500 + 700 * RW.length
        };
        this.waiting = [], this.playing = {
          view: MW,
          startedAt: WW
        }, this.Sz(MW), this.onStarted(MW)
      }
      toView(WW) {
        return {
          coins: WW.mailCoins,
          items: WW.mailItems.map((WW => {
            var RW;
            return {
              itemName: WW.mailItemName,
              amount: WW.mailItemAmount,
              label: null !== (RW = WW.mailItemLabel) && void 0 !== RW ? RW : this.itemName(WW.mailItemName)
            }
          })),
          reasonKey: WW.mailReasonKey,
          reasonParams: WW.mailReasonParams
        }
      }
    }
    const uM = "skyblockQuestGraphView",
      OM = "skyblockDevQuestJump";

    function nM(WW) {
      if (0 === WW.length) return "";
      const RW = [`M ${WW[0].x} ${WW[0].y}`];
      for (let wW = 1; wW < WW.length - 1; wW++) {
        const MW = WW[wW + 1];
        RW.push(`Q ${WW[wW].x} ${WW[wW].y} ${(WW[wW].x+MW.x)/2} ${(WW[wW].y+MW.y)/2}`)
      }
      const MW = WW[WW.length - 1];
      return RW.push(`L ${MW.x} ${MW.y}`), RW.join(" ")
    }

    function GM(WW, RW) {
      return WW < RW ? `${WW}|${RW}` : `${RW}|${WW}`
    }
    class LM extends eW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(WW, MW, wW), this.translate = RW, this.requestJump = CW, this.requestArrive = zR, this.storage = AW, this.now = bR, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = WW => {
          WW !== this.hoveredId && (this.hoveredId = WW, this.emit())
        }, this.jump = WW => {
          this.close(), this.requestJump(WW)
        }
      }
      jC(WW) {
        if (!this.Qw)
          if ("graph" !== WW.kind) {
            if ("jumping" === WW.kind) {
              const RW = {
                questId: WW.graphQuestId,
                variation: WW.graphVariation,
                completes: WW.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(OM, RW)
            }
          } else {
            const RW = ++this.graphCount;
            MW.e(96).then((() => MW(5428))).then((MW => {
              let {
                default: wW
              } = MW;
              this.Qw || RW !== this.graphCount || (this.layout = function(WW, RW, MW) {
                var wW, CW;
                const zR = new WW.graphlib.Graph;
                zR.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), zR.setDefaultEdgeLabel((() => ({})));
                const AW = new Set;
                for (const eW of RW) AW.add(eW.graphQuestId), zR.setNode(eW.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const bR = MW.filter((WW => AW.has(WW.graphFromId) && AW.has(WW.graphToId) && WW.graphFromId !== WW.graphToId)),
                  yR = new Map;
                for (const eW of [...bR].sort(((WW, RW) => Number("awaits" === WW.graphEdgeKind) - Number("awaits" === RW.graphEdgeKind)))) {
                  const WW = GM(eW.graphFromId, eW.graphToId);
                  yR.has(WW) || (yR.set(WW, eW), zR.setEdge(eW.graphFromId, eW.graphToId))
                }
                WW.layout(zR);
                const NW = zR.graph();
                return {
                  width: Math.ceil(null !== (wW = NW.width) && void 0 !== wW ? wW : 0),
                  height: Math.ceil(null !== (CW = NW.height) && void 0 !== CW ? CW : 0),
                  nodes: RW.map((WW => {
                    var RW, MW;
                    const wW = zR.node(WW.graphQuestId);
                    return {
                      node: WW,
                      left: (null !== (RW = wW.x) && void 0 !== RW ? RW : 0) - 95,
                      top: (null !== (MW = wW.y) && void 0 !== MW ? MW : 0) - 26
                    }
                  })),
                  edges: bR.map((WW => {
                    var RW;
                    const MW = yR.get(GM(WW.graphFromId, WW.graphToId)),
                      wW = null !== (RW = zR.edge(MW.graphFromId, MW.graphToId).points) && void 0 !== RW ? RW : [];
                    return {
                      edge: WW,
                      key: `${WW.graphFromId}|${WW.graphToId}|${WW.graphEdgeKind}`,
                      path: nM(MW.graphFromId === WW.graphFromId ? wW : [...wW].reverse())
                    }
                  })),
                  plans: new Map(RW.map((WW => [WW.graphQuestId, new Set([WW.graphQuestId, ...WW.graphPlanIds])])))
                }
              }(wW, WW.graphNodes, WW.graphEdges), this.show())
            })).catch((WW => {
              console.error("The quest graph could not be laid out", WW)
            }))
          }
      }
      resumeJump(WW) {
        const RW = this.storage.getItem(OM);
        this.storage.removeItem(OM), null === RW || RW.variation !== WW || this.now() - RW.departedAt > 6e4 || this.requestArrive(RW.questId, RW.completes)
      }
      setTranslator(WW) {
        this.translate = WW, this.emit()
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
        var WW, RW;
        return null !== (WW = null === this.hoveredId || null === (RW = this.layout) || void 0 === RW ? void 0 : RW.plans.get(this.hoveredId)) && void 0 !== WW ? WW : new Set
      }
      buildSnapshot() {
        const WW = this.layout;
        if (null === WW) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const RW = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: WW.width,
          height: WW.height,
          nodes: WW.nodes.map((WW => {
            let {
              node: MW,
              left: wW,
              top: CW
            } = WW;
            return {
              id: MW.graphQuestId,
              name: this.translate(MW.graphNameKey),
              detail: null === MW.graphGiverName ? MW.graphZoneId : `${MW.graphGiverName} \xb7 ${MW.graphZoneId}`,
              state: MW.graphState,
              left: wW,
              top: CW,
              inPlan: RW.has(MW.graphQuestId),
              hovered: MW.graphQuestId === this.hoveredId
            }
          })),
          edges: WW.edges.map((WW => {
            let {
              edge: MW,
              key: wW,
              path: CW
            } = WW;
            return {
              key: wW,
              kind: MW.graphEdgeKind,
              path: CW,
              inPlan: RW.has(MW.graphFromId) && RW.has(MW.graphToId)
            }
          })),
          planning: RW.size > 0
        }
      }
    }
    var HM = MW(35212);
    const DM = 250,
      qw = 2150,
      ZM = -2.8,
      SM = 2.2,
      Ww = -27,
      Rw = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Mw = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      ww = Math.round(50 + 1e3 * (Mw.delay + Mw.period / 2)),
      Cw = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      zC = Array.from({
        length: 26
      }, ((WW, RW) => {
        const MW = 2.39996 * RW,
          wW = .5 + .618034 * RW % 1 * .23,
          CW = RW % 3 !== 2;
        return {
          rune: CW ? Cw[7 * RW % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(MW)*wW).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(MW)*wW).toFixed(3)})`,
            "--spin": 40 * (RW % 5 - 2) + "deg",
            "--size": (CW ? 1 + RW % 4 * .2 : .3 + RW % 2 * .15) + "rem",
            "--duration": `${(1.8+7*RW%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*RW%3).toFixed(2)}s`
          }
        }
      }));

    function Aw(WW, RW) {
      return Array.from({
        length: 30 + 3 * WW + (RW ? 10 : 0)
      }, ((WW, RW) => {
        const MW = RW < 4,
          wW = MW ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          CW = MW ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          zR = MW ? 2.2 : .6 + Math.random(),
          AW = MW ? .3 : Math.random() < .5 ? .16 : .24,
          bR = MW ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": wW,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${CW.toFixed(2)}rem`,
          "--length": `${zR.toFixed(2)}rem`,
          "--width": `${AW}rem`,
          "--duration": `${Math.round(bR)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function bC(WW) {
      let {
        zeta: RW,
        period: MW
      } = WW;
      const wW = 2 * Math.PI / MW;
      return {
        w: wW,
        decay: RW * wW / Math.sqrt(1 - RW * RW)
      }
    }
    let yC = !1;

    function Nw() {
      if (yC) return;
      yC = !0;
      const WW = document.createElement("style");
      WW.textContent = function() {
        const WW = bC(Rw),
          RW = bC(Mw),
          MW = RW => Math.exp(-WW.decay * RW) * Math.sin(WW.w * RW),
          wW = MW(Math.atan(WW.w / WW.decay) / WW.w),
          CW = .25,
          zR = 2.15,
          AW = Math.round(215),
          bR = [];
        for (let yR = 0; yR <= AW; yR++) {
          const WW = yR / AW * zR;
          let NW = Math.sin(Math.min(WW, CW) / CW * Math.PI / 2) ** 2,
            eW = 0,
            BW = 1,
            tR = 1 - .2 * NW,
            TW = 1;
          if (WW >= CW) {
            const AW = WW - CW,
              bR = Math.max(0, AW - .05);
            NW = Math.exp(-bR / .05), eW = MW(bR + Rw.lead * (1 - Math.exp(-bR / Rw.rush))) / wW;
            const yR = bR - Mw.delay,
              gR = yR <= 0 ? 0 : 1 - Math.exp(-RW.decay * yR) * (Math.cos(RW.w * yR) + RW.decay / RW.w * Math.sin(RW.w * yR)),
              iR = Math.max(0, (WW - 1.77) / (zR - 1.77));
            BW = (1 + (Mw.to - 1) * gR) * (1 + .08 * iR), tR = 1.1 + 1.5 * Math.exp(-AW / .07) + .3 * Math.exp(-(((1e3 * AW - ww) / 100) ** 2)) + .8 * iR, TW = 1 - iR ** 1.5
          }
          const gR = .15 * NW + ZM * eW,
            iR = -.1 * NW + SM * eW,
            YW = 3 * NW + Ww * eW;
          bR.push(`${(yR/AW*100).toFixed(3)}% { opacity: ${TW.toFixed(3)}; transform: translate(${gR.toFixed(3)}rem, ${iR.toFixed(3)}rem) rotate(${YW.toFixed(2)}deg) scale(${BW.toFixed(3)}); filter: brightness(${tR.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${bR.join(" ")} }`
      }(), document.head.append(WW)
    }
    const ew = "skyblockForgeView",
      Bw = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class tC extends eW {
      constructor(WW, RW, MW, wW, CW) {
        super(WW, MW, wW), this.translate = RW, this.requestForge = CW, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (WW, RW) => {
          var MW, wW;
          null !== this.forging || (null !== (MW = this.owned[(0, HM.o)(RW, WW)]) && void 0 !== MW ? MW : 0) <= 0 || (this.selected[WW] = this.selected[WW] === RW ? null : RW, this.status = null, null === (wW = this.onPartSelected) || void 0 === wW || wW.call(this), this.emit())
        }, this.forge = WW => {
          var RW, MW;
          const wW = this.selectedParts();
          if (null === wW || this.isPending() || !this.open) return;
          const CW = (0, HM.k)(wW);
          if (null === CW || CW.coalCost > this.coal) return;
          const zR = this.preview(CW),
            AW = null !== (RW = null === (MW = this.onForgeStarted) || void 0 === MW ? void 0 : MW.call(this, zR.tier, zR.named, WW)) && void 0 !== RW ? RW : () => {};
          if (this.dropArrival(), WW) {
            const WW = {
              id: ++this.forgeId,
              preview: zR,
              timers: [],
              stopSounds: AW,
              landed: !1,
              reply: null
            };
            WW.timers.push(setTimeout((() => {
              WW.landed = !0, null !== WW.reply && (this.apply(WW.reply), WW.reply = null, this.emit())
            }), DM), setTimeout((() => {
              this.finishForge(WW)
            }), qw)), this.forging = WW
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(wW)
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.forgeMessageKind) return this.dropForge(), this.apply(WW), this.status = null, void this.show();
        const RW = this.forging;
        if (null !== RW && null !== WW.forgeRefusalKey) this.dropForge();
        else if (null !== RW && !RW.landed) return void(RW.reply = WW);
        this.apply(WW), this.emit()
      }
      apply(WW) {
        if (this.owned = WW.forgeOwnedParts, this.coal = WW.forgeCoalOwned, this.keepSelectionOwned("open" === WW.forgeMessageKind), null !== WW.forgeForgedSwordId) {
          var RW;
          const MW = (0, HM.k)(WW.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (RW = null === MW || void 0 === MW ? void 0 : MW.displayName) && void 0 !== RW ? RW : ""
            }
          }
        } else null !== WW.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: WW.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(WW) {
        this.translate = WW, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(WW) {
        var RW;
        this.forging = null;
        const MW = this.selectedParts(),
          wW = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: WW.id,
          sameSword: null !== MW && (null === (RW = (0, HM.k)(MW)) || void 0 === RW ? void 0 : RW.displayName) === WW.preview.name,
          timer: wW
        }, this.emit()
      }
      dropForge() {
        const WW = this.forging;
        if (null !== WW) {
          this.forging = null;
          for (const RW of WW.timers) clearTimeout(RW);
          WW.stopSounds(), null !== WW.reply && this.apply(WW.reply)
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
        var WW, RW, MW;
        const wW = this.selectedParts(),
          CW = null === wW ? null : (0, HM.k)(wW),
          zR = null !== (WW = null === (RW = this.forging) || void 0 === RW ? void 0 : RW.preview) && void 0 !== WW ? WW : null === CW ? null : this.preview(CW);
        return {
          enabled: this.received,
          open: this.open,
          slots: HM.j.map((WW => ({
            kind: WW,
            label: this.translate(Bw[WW]),
            parts: this.partsFor(WW)
          }))),
          coalOwned: this.coal,
          preview: zR,
          unformedSword: HM.g[null !== (MW = this.selected.Blade) && void 0 !== MW ? MW : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((WW => WW > 0)),
          canForge: null !== zR && !zR.coalShort && !this.isPending(),
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
      preview(WW) {
        return {
          name: WW.displayName,
          lore: WW.lore,
          baseSword: WW.baseSword,
          enchantmentTier: WW.enchantmentTier,
          tier: Number(WW.enchantmentTier.slice(-1)),
          named: WW.named,
          stats: this.stats(WW),
          effects: WW.effects,
          coalCost: WW.coalCost,
          coalShort: null === this.forging && WW.coalCost > this.coal
        }
      }
      partsFor(WW) {
        const RW = [];
        for (const wW of HM.c) {
          var MW;
          const CW = (0, HM.o)(wW, WW),
            zR = null !== (MW = this.owned[CW]) && void 0 !== MW ? MW : 0;
          zR > 0 && RW.push({
            material: wW,
            itemName: CW,
            owned: zR,
            selected: this.selected[WW] === wW,
            placeholder: !1
          })
        }
        if (0 === RW.length) {
          const MW = HM.c[0];
          RW.push({
            material: MW,
            itemName: (0, HM.o)(MW, WW),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return RW
      }
      stats(WW) {
        const RW = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${WW.powerMultiplier.toFixed(2)}`,
          better: WW.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${WW.damageMultiplier.toFixed(2)}`,
          better: WW.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/WW.cooldownMultiplier).toFixed(2)}`,
          better: WW.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${WW.knockbackMultiplier.toFixed(2)}`,
          better: WW.knockbackMultiplier > 1
        }];
        return WW.reachBonus > 0 && RW.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${WW.reachBonus.toFixed(1)}`,
          better: !0
        }), WW.damageReduction > 0 && RW.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*WW.damageReduction)}%`,
          better: !0
        }), RW
      }
      selectedParts() {
        const {
          Blade: WW,
          Guard: RW,
          Handle: MW
        } = this.selected;
        return null === WW || null === RW || null === MW ? null : {
          blade: WW,
          guard: RW,
          handle: MW
        }
      }
      keepSelectionOwned(WW) {
        for (const MW of HM.j) {
          var RW;
          const wW = this.selected[MW];
          if (null !== wW && (null !== (RW = this.owned[(0, HM.o)(wW, MW)]) && void 0 !== RW ? RW : 0) > 0) continue;
          if (!WW) {
            this.selected[MW] = null;
            continue
          }
          const CW = [...HM.c].reverse().find((WW => {
            var RW;
            return (null !== (RW = this.owned[(0, HM.o)(WW, MW)]) && void 0 !== RW ? RW : 0) > 0
          }));
          this.selected[MW] = null !== CW && void 0 !== CW ? CW : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Tw = "skyblockSmugglerView",
      gC = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class iC extends eW {
      constructor(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(WW, MW, wW), this.translate = RW, this.requestBuy = CW, this.now = zR, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = WW => WW, this.onBought = null, this.buy = WW => {
          const RW = this.deals[WW];
          void 0 !== RW && !this.isPending() && this.open && !this.soldOut.has(WW) && this.canAfford(RW) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, WW))
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        if (this.received = !0, this.day = WW.smugglerDay, this.deals = WW.smugglerDeals, this.rivets = WW.smugglerRivetsOwned, this.crests = WW.smugglerCrestsOwned, this.soldOut = new Set(WW.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + WW.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = WW.smugglerBoughtSlot, null !== WW.smugglerBoughtSlot) {
          var RW, MW;
          const wW = this.deals[WW.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === wW ? "" : this.dealName(wW),
              amount: String(null !== (RW = null === wW || void 0 === wW ? void 0 : wW.smugglerDealAmount) && void 0 !== RW ? RW : 0)
            }
          }, this.boughtCount++, null === (MW = this.onBought) || void 0 === MW || MW.call(this)
        } else null !== WW.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: WW.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, void 0 !== MW && (this.itemName = MW), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(WW) {
        if (null !== WW.smugglerDealUniqueName) return WW.smugglerDealUniqueName;
        const RW = gC[WW.smugglerDealItem];
        return void 0 === RW ? this.itemName(WW.smugglerDealItem) : this.translate(RW)
      }
      canAfford(WW) {
        return WW.smugglerDealRivets <= this.rivets && WW.smugglerDealCrests <= this.crests
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
        const WW = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return WW <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : WW < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(WW)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(WW / 60)),
          minutes: String(WW % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((WW, RW) => ({
            slot: RW,
            itemName: WW.smugglerDealItem,
            displayName: this.dealName(WW),
            enchantmentTier: WW.smugglerDealEnchantmentTier,
            amount: WW.smugglerDealAmount,
            rivets: WW.smugglerDealRivets,
            crests: WW.smugglerDealCrests,
            affordable: this.canAfford(WW),
            soldOut: this.soldOut.has(RW),
            justBought: this.boughtSlot === RW
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
    const Yw = "skyblockPassageView",
      Jw = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function Pw(WW, RW) {
      return WW(Jw[RW])
    }

    function Iw(WW, RW, MW, wW) {
      const CW = Math.ceil((MW - wW) / 864e5),
        zR = Pw(WW, RW);
      return CW > 1 ? WW("skyblockGame:passageNextDays", {
        phase: zR,
        days: String(CW)
      }) : WW("skyblockGame:passageNextSoon", {
        phase: zR
      })
    }
    class ow extends eW {
      constructor(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(WW, MW, wW), this.translate = RW, this.now = CW, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = WW => WW, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        this.message = WW, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, void 0 !== MW && (this.itemName = MW), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(WW) {
        return {
          itemName: WW.passageFish,
          displayName: this.itemName(WW.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(WW.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const WW = this.message;
        return null === WW ? {
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
          phase: WW.passagePhase,
          phaseName: Pw(this.translate, WW.passagePhase),
          visitors: WW.passageVisitors.map((WW => this.describe(WW))),
          resting: this.describe(WW.passageResting),
          nextPhase: WW.passageNextPhase,
          next: Iw(this.translate, WW.passageNextPhase, WW.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    class lw {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12e3,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
        this.limit = WW, this.windowMs = RW, this.spacingMs = MW, this.now = wW, this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const WW of this.priority) WW.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const WW = this.now();
        this.sent.push(WW), this.lastSentAt = WW, this.schedule(), this.notify()
      }
      addPriority(WW) {
        return this.priority.add(WW), () => {
          this.priority.delete(WW)
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const WW of this.priority)
          if (WW.waiting()) return !0;
        return !1
      }
      prune() {
        const WW = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= WW;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const WW = this.now(),
          RW = this.lastSentAt + this.spacingMs,
          MW = Math.min(RW > WW ? RW : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        MW !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, MW - WW)))
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    const Fw = "skyblockKeepersChairView";
    class fw extends eW {
      constructor(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new lw;
        super(WW, MW, wW), this.translate = RW, this.requestAim = CW, this.now = zR, this.pacer = AW, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = WW => WW, this.aim = WW => {
          !this.awaitingReply && this.open && this.atChair && WW !== this.favoured && (null === WW || this.islands.some((RW => RW.keepersChairIslandId === WW && RW.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== WW && void 0 !== WW ? WW : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = AW.subscribe((() => {
          this.emit()
        }))
      }
      jC(WW) {
        var RW, MW;
        this.received = !0;
        const wW = this.favoured,
          CW = this.atChair;
        var zR;
        return this.islands = WW.keepersChairIslands, this.favoured = WW.keepersChairFavoured, this.passage = null !== (RW = WW.keepersChairPassage) && void 0 !== RW ? RW : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (MW = WW.keepersChairAtChair) || void 0 === MW || MW, "place" === WW.keepersChairMessageKind ? (!CW && this.atChair && "refused" === (null === (zR = this.status) || void 0 === zR ? void 0 : zR.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== WW.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: WW.keepersChairRefusalKey,
          island: null
        } : this.favoured !== wW && (this.status = null === this.favoured ? {
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
      receivePassage(WW) {
        this.received && (this.passage = WW, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, void 0 !== MW && (this.itemName = MW), this.emit()
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
      islandName(WW) {
        const RW = this.islands.find((RW => RW.keepersChairIslandId === WW));
        return void 0 === RW ? WW : this.translate(RW.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const WW = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          RW = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((WW => {
            const RW = WW.keepersChairFeaturedFish;
            return {
              id: WW.keepersChairIslandId,
              name: this.translate(WW.keepersChairIslandNameKey),
              relit: WW.keepersChairIslandRelit,
              featuredFish: null === RW ? null : {
                itemName: RW,
                displayName: this.itemName(RW)
              },
              favoured: WW.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === WW ? null : {
            tone: WW.tone,
            text: this.translate(WW.key, null === WW.island ? void 0 : {
              island: this.islandName(WW.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === RW ? null : {
            phase: RW.keepersChairPassagePhase,
            phaseName: Pw(this.translate, RW.keepersChairPassagePhase),
            nextPhase: RW.keepersChairPassageNextPhase,
            next: Iw(this.translate, RW.keepersChairPassageNextPhase, RW.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Qw = "skyblockReachLogView",
      rC = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      cC = "Caught Fish",
      Xw = [1, 2, 4];

    function jC(WW, RW) {
      return WW.map((WW => ({
        ...WW,
        reachLogPageFish: WW.reachLogPageFish.map((WW => ({
          ...WW,
          reachLogFishFresh: RW(WW)
        })))
      })))
    }
    class kC extends eW {
      constructor(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new lw;
        super(WW, MW, wW), this.translate = RW, this.requestOpen = CW, this.pacer = zR, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = WW => WW, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = WW => {
          this.pages.some((RW => RW.reachLogIslandId === WW)) && (this.selected = WW, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = zR.subscribe((() => {
          this.emit()
        }))
      }
      jC(WW) {
        if (this.received = !0, "status" === WW.reachLogMessageKind) return !0 === WW.reachLogNews && this.markNews(), this.serverFresh = WW.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const RW = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== WW.reachLogMessageKind)
          if (this.pageViews = null, this.pages = jC(WW.reachLogPages, (WW => WW.reachLogFishFresh || this.heldFresh.has(WW.reachLogFishItem))), this.letGoShown = WW.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, RW) this.showPages();
          else {
            for (const WW of this.pages)
              for (const RW of WW.reachLogPageFish) RW.reachLogFishFresh && this.heldFresh.add(RW.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, this.pageViews = null, void 0 !== MW && (this.itemName = MW), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = jC(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var WW, RW, MW, wW;
        const CW = this.pages.find((WW => WW.reachLogPageFish.some((WW => WW.reachLogFishFresh))));
        if (void 0 !== CW) return CW.reachLogIslandId;
        if (null !== this.selected && this.pages.some((WW => WW.reachLogIslandId === this.selected))) return this.selected;
        return null !== (WW = null !== (RW = null === (MW = this.pages.filter((WW => WW.reachLogIslandAwake)).at(-1)) || void 0 === MW ? void 0 : MW.reachLogIslandId) && void 0 !== RW ? RW : null === (wW = this.pages[0]) || void 0 === wW ? void 0 : wW.reachLogIslandId) && void 0 !== WW ? WW : null
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
        return this.pages.map((WW => {
          var RW;
          return {
            id: WW.reachLogIslandId,
            name: this.translate(WW.reachLogIslandNameKey),
            awake: WW.reachLogIslandAwake,
            gold: WW.reachLogPageGold,
            caught: WW.reachLogPageFish.filter((WW => WW.reachLogFishCaught && !WW.reachLogFishVisitor)).length,
            total: WW.reachLogPageFish.filter((WW => !WW.reachLogFishVisitor)).length,
            fish: WW.reachLogPageFish.map((WW => {
              const RW = WW.reachLogFishBestKg;
              return {
                itemName: WW.reachLogFishItem,
                name: WW.reachLogFishCaught ? this.itemName(WW.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: WW.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / WW.reachLogFishChance))
                }),
                best: WW.reachLogFishCaught ? null === RW ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: RW.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: WW.reachLogFishMarks,
                ribbons: Xw.map((RW => 0 !== (WW.reachLogFishRibbons & RW))),
                glimmer: 0 !== (8 & WW.reachLogFishRibbons),
                halo: 0 !== (32 & WW.reachLogFishRibbons),
                fresh: WW.reachLogFishFresh,
                visitor: WW.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (RW = WW.reachLogPageReturner) && void 0 !== RW ? RW : null)
          }
        }))
      }
      buildReturner(WW) {
        return null === WW ? null : {
          itemName: WW.reachLogReturnerFishItem,
          line: this.translate(WW.reachLogReturnerLineKey, {
            name: this.translate(WW.reachLogReturnerNameKey),
            trinket: this.translate(WW.reachLogReturnerTrinketKey)
          }),
          back: WW.reachLogReturnerBack
        }
      }
      receivePassagePhase(WW) {
        null !== this.passagePhase && this.passagePhase !== WW && (this.pagesCurrent = !1), this.passagePhase = WW
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const aC = "skyblockLampLightView";
    class sw {
      constructor(WW, RW, MW, wW) {
        this.Sz = WW, this.translate = RW, this.requestCommand = MW, this.pacer = wW, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Qw = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = WW => {
          WW ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = WW => {
          this.send(`buy ${WW}`)
        }, this.socket = WW => {
          this.send(`socket ${null!==WW&&void 0!==WW?WW:sW}`)
        }, this.wearTint = WW => {
          this.send(`tint ${null!==WW&&void 0!==WW?WW:sW}`)
        }, this.setSituation = WW => {
          this.situation = WW, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = wW.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = wW.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      jC(WW) {
        if (this.message = WW, null !== WW.lampLightShop && (this.shop = WW.lampLightShop), "open" === WW.lampLightKind && (this.refusalKey = null), "reply" === WW.lampLightKind) {
          var RW;
          const CW = null !== (RW = WW.lampLightReplyTag) && void 0 !== RW ? RW : null,
            zR = null !== CW && CW === this.offTag;
          var MW, wW;
          if (zR ? this.settleOff() : null !== CW && CW !== this.awaitingTag || this.settleReply(), this.refusalKey = WW.lampLightRefusalKey, null !== WW.lampLightBought && !zR) this.sparkle = {
            id: WW.lampLightBought,
            count: (null !== (MW = null === (wW = this.sparkle) || void 0 === wW ? void 0 : wW.count) && void 0 !== MW ? MW : 0) + 1
          }
        }
        WW.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === WW.lampLightKind && (this.lastGained = WW.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(WW) {
        WW !== this.atChair && (this.atChair = WW, WW && (this.refusalKey = null), this.emit())
      }
      setTranslator(WW, RW) {
        this.translate = WW, this.locale = null !== RW && void 0 !== RW ? RW : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Qw = !0
      }
      send(WW) {
        var RW;
        if (null !== this.awaitingTag || "ready" !== (null === (RW = this.message) || void 0 === RW ? void 0 : RW.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const MW = this.nextTag();
        this.awaitingTag = MW, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${WW} ${MW}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const WW = this.nextTag();
        this.offTag = WW, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${WW}`)
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
        this.Qw || (this.snapshot = this.buildSnapshot(), this.Sz(this.snapshot))
      }
      formatLight(WW) {
        return Math.floor(WW).toLocaleString(this.locale)
      }
      formatPercent(WW) {
        const RW = 100 * WW;
        return RW >= 10 ? Math.round(RW).toLocaleString(this.locale) : RW.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(WW, RW) {
        if ("bite" === WW) return this.translate("skyblockGame:lampLightBite", {
          seconds: (RW.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === WW) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(RW.lampLightRareChance)
        });
        if ("notice" === WW) return null === RW.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(RW.lampLightNoticeChance)
        });
        const MW = "meter" === WW ? RW.lampLightMeterCatches : RW.lampLightBloomCatches;
        return null === MW ? null : this.translate("meter" === WW ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(MW))
        })
      }
      oddsLines(WW, RW) {
        const MW = (WW, RW) => {
            var MW;
            return null !== (MW = {
              bite: RW.lampLightBiteMs,
              rare: RW.lampLightRareChance,
              meter: RW.lampLightMeterCatches,
              bloom: RW.lampLightBloomCatches,
              notice: RW.lampLightNoticeChance
            } [WW]) && void 0 !== MW ? MW : 0
          },
          wW = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          CW = [];
        for (const zR of ["bite", "rare", "meter", "bloom", "notice"]) {
          const AW = this.formatOdds(zR, WW),
            bR = this.formatOdds(zR, RW);
          if (null === AW || null === bR || "bite" !== zR && "rare" !== zR && AW === bR) continue;
          const yR = MW(zR, RW) - MW(zR, WW),
            NW = wW[zR] ? yR < 0 : yR > 0;
          CW.push({
            label: zR,
            before: AW,
            after: bR,
            tone: AW === bR ? "same" : NW ? "better" : "worse"
          })
        }
        return CW
      }
      charmView(WW, RW, MW) {
        const wW = WW.lampLightCharmId.charAt(0).toUpperCase() + WW.lampLightCharmId.slice(1),
          CW = "bloom" === this.situation;
        return {
          id: WW.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${wW}`),
          effect: this.translate(`skyblockGame:lampLightCharm${wW}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(WW.lampLightCharmCost)
          }),
          owned: WW.lampLightCharmOwned,
          affordable: MW >= WW.lampLightCharmCost,
          socketed: RW.lampLightSocketed === WW.lampLightCharmId,
          lines: this.oddsLines(CW ? RW.lampLightBareBloom : RW.lampLightBareOpen, CW ? WW.lampLightCharmBloom : WW.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var WW, RW, MW, wW;
        const CW = this.message,
          zR = "ready" === (null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) ? this.shop : null,
          AW = null !== (WW = null === CW || void 0 === CW ? void 0 : CW.lampLightBalance) && void 0 !== WW ? WW : 0,
          bR = this.atChair,
          yR = "loading" === (null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          NW = "ready" !== (null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) || bR ? null !== (RW = this.refusalKey) && void 0 !== RW ? RW : yR : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== CW && "locked" !== CW.lampLightStatus,
          status: null !== (MW = null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) && void 0 !== MW ? MW : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(AW)
          }),
          releasing: null !== (wW = null === CW || void 0 === CW ? void 0 : CW.lampLightReleasing) && void 0 !== wW && wW,
          gained: null === CW || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === CW || void 0 === CW ? void 0 : CW.lampLightStatus) && bR && !this.isPending(),
          situation: this.situation,
          shop: null === zR ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: zR.lampLightOddsRod,
              island: this.translate(zR.lampLightIslandNameKey)
            }),
            heldRod: null !== zR.lampLightHeldRod,
            charms: zR.lampLightCharms.map((WW => this.charmView(WW, zR, AW))),
            tints: zR.lampLightTints.map((WW => {
              const RW = WW.lampLightTintId,
                [MW, wW, CW] = WW.lampLightTintColour;
              return {
                id: RW,
                name: this.translate(`skyblockGame:lampLightTint${RW.charAt(0).toUpperCase()}${RW.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(WW.lampLightTintCost)
                }),
                owned: WW.lampLightTintOwned,
                affordable: AW >= WW.lampLightTintCost,
                wearing: zR.lampLightTint === RW,
                colour: `rgb(${MW}, ${wW}, ${CW})`
              }
            })),
            wearingIslandColours: null === zR.lampLightTint
          },
          notice: null === NW ? null : this.translate(NW),
          sparkle: this.sparkle
        }
      }
    }
    const dw = "skyblockMagmawardView";
    class pw {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Sz = WW, this.now = RW, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = mR.map((() => 0)), this.wornAt = mR.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      jC(WW) {
        var RW, MW;
        const wW = mR.map(((RW, MW) => !0 === WW.magmawardPiecesWorn[MW]));
        if (!wW.includes(!0)) return this.snapshot = null, void this.Sz(null);
        const CW = this.now(),
          zR = this.snapshot;
        null === zR && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const AW = WW.magmawardFuelCarried,
          bR = !wW.includes(!1);
        let yR = null !== (RW = null === zR || void 0 === zR ? void 0 : zR.pulse) && void 0 !== RW ? RW : null,
          NW = null !== (MW = null === zR || void 0 === zR ? void 0 : zR.flare) && void 0 !== MW ? MW : null;
        WW.magmawardFuelBurned ? (yR = "burn", NW = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = CW, this.flareAt = CW) : null !== zR && AW > zR.fuel && (yR = "gain", this.pulseToken++, this.pulseAt = CW), bR && null !== zR && !zR.fullSet && (NW = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = CW, this.setLitAt = CW);
        const eW = mR.map(((WW, RW) => (wW[RW] && null !== zR && !zR.pieces[RW].worn && (this.wornTokens[RW]++, this.wornAt[RW] = CW), {
          itemName: WW,
          worn: wW[RW],
          wornToken: this.wornTokens[RW],
          justWorn: wW[RW] && this.isPlaying(this.wornAt[RW], CW)
        })));
        this.snapshot = {
          pieces: eW,
          wornCount: wW.filter(Boolean).length,
          fullSet: bR,
          fuel: AW,
          fuelState: AW <= 0 ? "empty" : AW <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, CW) ? yR : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, CW) ? NW : null,
          flareToken: this.flareToken,
          setLit: bR && this.isPlaying(this.setLitAt, CW),
          setLitToken: this.setLitToken
        }, this.Sz(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Sz(null)
      }
      isPlaying(WW, RW) {
        return RW - WW < 1200
      }
    }
    const hw = "skyblockGlowtideView";
    class Uw {
      constructor(WW) {
        this.Sz = WW, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = WW => {
          this.arrow = WW, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      jC(WW) {
        this.bloom = WW.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Sz(null))
      }
      afterRender(WW, RW) {
        const MW = this.bloom;
        if (null === MW || null === WW) return;
        const wW = MW.glowtideBloomX - WW[0],
          zR = MW.glowtideBloomZ - WW[2],
          AW = Math.hypot(wW, zR),
          bR = this.snapshot,
          yR = null !== bR && void 0 !== bR && bR.inRange ? 1 : 0,
          NW = AW <= 12.5 + yR && WW[1] - MW.glowtideBloomY <= 10 + yR;
        !NW || null !== bR && void 0 !== bR && bR.inRange || this.inRangeToken++;
        const eW = {
          colour: MW.glowtideBloomColour,
          inRange: NW,
          distance: Math.round(AW),
          inRangeToken: this.inRangeToken
        };
        (null === bR || eW.colour !== bR.colour || eW.inRange !== bR.inRange || !NW && eW.distance !== bR.distance) && (this.snapshot = eW, this.Sz(eW));
        const BW = CW.d.computeShortestRotation(RW, (0, CW.xb)([wW, 0, zR]));
        null === this.arrow || Math.abs(BW - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${BW}rad)`, this.arrowTurn = BW)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Sz(null)
      }
    }
    const Ew = "skyblockGlowMeterView";
    class Vw {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Sz = WW, this.now = RW, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      jC(WW) {
        const RW = this.now(),
          {
            glowMeterFill: MW,
            glowMeterCapacity: wW
          } = WW,
          CW = MW >= wW,
          zR = this.snapshot;
        null !== zR && (CW && !zR.full && (this.fullToken++, this.fullAt = RW), zR.full && !CW ? (this.burstToken++, this.burstAt = RW) : MW > zR.fill && (this.gainToken++, this.gainAt = RW)), this.snapshot = {
          fill: MW,
          aR: wW,
          ratio: Math.min(1, Math.max(0, MW / wW)),
          full: CW,
          rares: WW.glowMeterRares,
          ready: CW && this.isPlaying(this.fullAt, RW),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, RW),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, RW),
          gainToken: this.gainToken
        }, this.Sz(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Sz(null)
      }
      isPlaying(WW, RW) {
        return RW - WW < 2e3
      }
    }
    const mC = "skyblockHushWaitView";
    class xC {
      constructor(WW) {
        this.Sz = WW, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      jC(WW) {
        let {
          hushWaitMs: RW,
          hushWaitTotalMs: MW,
          hushWaitLines: wW
        } = WW;
        if (this.clearTimers(), this.token++, 0 === wW.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (RW <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: wW[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const CW = Math.max(null !== MW && void 0 !== MW ? MW : RW, RW),
          zR = CW - RW,
          AW = WW => CW * WW / wW.length,
          bR = WW => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: CW,
              elapsedMs: zR,
              line: wW[WW],
              lineIndex: WW
            })
          };
        let yR = 0;
        for (; yR + 1 < wW.length && AW(yR + 1) <= zR;) yR++;
        bR(yR);
        for (let NW = yR + 1; NW < wW.length; NW++) this.later(AW(NW) - zR, (() => {
          bR(NW)
        }));
        this.later(RW, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(WW) {
        this.snapshot = WW, this.Sz(WW)
      }
      later(WW, RW) {
        this.timers.push(setTimeout(RW, WW))
      }
      clearTimers() {
        for (const WW of this.timers) clearTimeout(WW);
        this.timers = []
      }
    }
    const vC = "skyblockTideChartsView",
      Kw = 36e5,
      uw = 864e5;

    function Ow(WW, RW, MW) {
      const [wW, CW, zR, AW] = WW.tideChartArea, bR = Math.floor(RW), yR = Math.floor(MW);
      return bR >= wW && bR <= zR && yR >= CW && yR <= AW
    }

    function nw(WW, RW, MW) {
      const [wW, CW, zR, AW] = WW.tideChartWater;
      return function(WW, RW, MW, wW, CW, zR) {
        const AW = 4 - xR(Math.floor(CW) - (WW - MW), MW);
        return 5 * xR(Math.floor(zR) - (RW - wW), wW) + AW
      }(wW, CW, zR, AW, RW, MW)
    }

    function Gw(WW, RW, MW) {
      const wW = WW.tideCharts;
      for (let CW = 0; CW < wW.length; CW++)
        if (Ow(wW[CW], RW, MW)) return wW[CW];
      return null
    }

    function Lw(WW, RW, MW) {
      const wW = Math.max(0, RW - MW);
      return wW > uw ? WW("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(wW / uw))
      }) : wW > Kw ? WW("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(wW / Kw))
      }) : WW("skyblockGame:tideChartsTurnSoon")
    }
    class Hw extends eW {
      constructor(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(WW, MW, wW), this.translate = RW, this.now = CW, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.WM = WW => {
          this.picked = WW, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        const RW = this.message;
        if (null !== RW)
          for (const wW of WW.tideCharts) {
            var MW;
            const WW = RW.tideCharts.find((WW => WW.tideChartIsland === wW.tideChartIsland)),
              CW = wW.tideChartLit & ~(null !== (MW = null === WW || void 0 === WW ? void 0 : WW.tideChartLit) && void 0 !== MW ? MW : 0);
            void 0 !== WW && 0 !== CW && (this.pulse = {
              island: wW.tideChartIsland,
              cells: CW,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = WW, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(WW, RW) {
        var MW;
        const wW = null === this.message || Number.isNaN(WW) ? null : Gw(this.message, WW, RW),
          CW = null !== (MW = null === wW || void 0 === wW ? void 0 : wW.tideChartIsland) && void 0 !== MW ? MW : null,
          zR = null === wW ? -1 : function(WW, RW, MW) {
            const [wW, CW, zR, AW] = WW.tideChartWater;
            return function(WW, RW, MW, wW, CW, zR, AW) {
              return ((CW - WW) / (MW + AW)) ** 2 + ((zR - RW) / (wW + AW)) ** 2 <= 1
            }(wW, CW, zR, AW, RW, MW, 2) ? nw(WW, RW, MW) : -1
          }(wW, WW, RW);
        return (CW !== this.hereIsland || zR !== this.hereCell) && (this.hereIsland = CW, this.hereCell = zR, null !== CW && (this.lastIsland = CW), !0)
      }
      afterRender(WW) {
        if (null === this.message) return;
        this.lastX = null === WW ? Number.NaN : WW[0], this.lastZ = null === WW ? Number.NaN : WW[2];
        const RW = this.locate(this.lastX, this.lastZ),
          MW = this.expirePulses();
        (RW || MW || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const WW = this.now();
        return !(!this.open || WW - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = WW, Lw(this.translate, this.message.tideChartTurnsInMs, WW - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(WW, RW) {
        const MW = null === this.message ? null : Gw(this.message, WW, RW);
        if (null === MW) return;
        const wW = nw(MW, WW, RW);
        0 === (MW.tideChartPreBlank & 1 << wW) && (this.cast = {
          island: MW.tideChartIsland,
          cell: wW,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const WW = this.now();
        let RW = !1;
        return 0 !== this.pulse.cells && WW - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, RW = !0), null !== this.cast && WW - this.cast.atMs >= 1500 && (this.cast = null, RW = !0), RW
      }
      setTranslator(WW) {
        this.translate = WW, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(WW, RW) {
        var MW;
        return null !== (MW = WW.tideCharts.find((WW => WW.tideChartIsland === RW))) && void 0 !== MW ? MW : null
      }
      describe(WW) {
        var RW, MW, wW;
        const CW = WW.tideChartIsland,
          zR = [];
        for (let TW = 0; TW < 25; TW++) {
          const RW = 1 << TW;
          0 !== (WW.tideChartLit & RW) ? zR.push("lit") : 0 !== (WW.tideChartClear & RW) ? zR.push("clear") : 0 !== (WW.tideChartPreBlank & RW) ? zR.push("shore") : zR.push("water")
        }
        const AW = function(WW) {
            let RW = 0;
            for (let MW = WW >>> 0; 0 !== MW; MW &= MW - 1) RW++;
            return RW
          }(WW.tideChartLit),
          bR = WW.tideChartInkCount,
          yR = this.translate(WW.tideChartIslandNameKey),
          NW = this.translate("skyblockGame:tideChartsLit", {
            lit: String(AW),
            ink: String(bR)
          }),
          eW = null === WW.tideChartPictureNameKey ? null : this.translate(WW.tideChartPictureNameKey),
          BW = this.hereIsland === CW && -1 !== this.hereCell ? this.hereCell : null,
          tR = [`${yR}: ${NW}.`];
        if (null !== eW && tR.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: eW
          })), null !== BW) {
          const WW = Math.floor(BW / 5) + 1,
            RW = BW % 5 + 1;
          tR.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(WW),
            column: String(RW)
          }))
        }
        return {
          island: CW,
          islandName: yR,
          cells: zR,
          hereCell: BW,
          lit: AW,
          ink: bR,
          litText: NW,
          pictureName: eW,
          gridLabel: tR.join(" "),
          pulseCells: this.pulse.island === CW ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (RW = this.cast) || void 0 === RW ? void 0 : RW.island) === CW ? this.cast.cell : null,
          castToken: null !== (MW = null === (wW = this.cast) || void 0 === wW ? void 0 : wW.token) && void 0 !== MW ? MW : 0
        }
      }
      buildSnapshot() {
        var WW, RW, MW;
        const wW = this.message;
        if (null === wW || 0 === wW.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const CW = this.findChart(wW, this.hereIsland),
          zR = null !== (WW = null !== (RW = null !== (MW = this.findChart(wW, this.open ? this.picked : null)) && void 0 !== MW ? MW : CW) && void 0 !== RW ? RW : this.findChart(wW, this.lastIsland)) && void 0 !== WW ? WW : wW.tideCharts[0],
          AW = null === CW ? null : this.describe(CW);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: AW,
          card: zR === CW ? AW : this.describe(zR),
          turnsText: Lw(this.translate, wW.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(wW.tideChartBookCount)
          }),
          tabs: wW.tideCharts.map((WW => ({
            island: WW.tideChartIsland,
            name: this.translate(WW.tideChartIslandNameKey),
            selected: WW.tideChartIsland === zR.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Dw = "skyblockRegularsView",
      qC = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Zw = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Sw(WW, RW) {
      return "given" === WW ? RW.given : "owed" === WW ? RW.owed : RW.goal
    }
    class WC extends eW {
      constructor(WW, RW, MW, wW) {
        super(WW, MW, wW), this.translate = RW, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = WW => WW, this.openIsland = WW => {
          this.selected = WW, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = WW => {
          this.selected = WW, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        this.message = WW, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const WW = this.openedFromReachLog;
        return this.openedFromReachLog = !1, WW
      }
      setTranslator(WW, RW, MW) {
        this.translate = WW, void 0 !== MW && (this.itemName = MW), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(WW, RW, MW) {
        return {
          text: this.translate(Sw(WW, RW), MW),
          given: "given" === WW
        }
      }
      describeRegular(WW, RW) {
        const MW = this.translate,
          wW = null !== WW.regularKg,
          CW = WW.regularMeetings,
          zR = wW ? 0 === CW ? MW("skyblockGame:regularsNotMet") : 1 === CW ? MW("skyblockGame:regularsMeetingsOne") : MW("skyblockGame:regularsMeetings", {
            count: CW
          }) : "";
        return {
          id: WW.regularId,
          name: MW(WW.regularNameKey),
          line: MW(WW.regularLineKey),
          itemName: WW.regularFishItem,
          fishName: this.itemName(WW.regularFishItem),
          tagged: wW,
          size: null === WW.regularKg ? MW("skyblockGame:regularsNotTagged") : MW("skyblockGame:regularsSize", {
            kg: WW.regularKg.toFixed(1)
          }),
          meetings: zR,
          chance: MW("skyblockGame:regularsChance", {
            count: WW.regularOneInCasts
          }),
          resting: WW.regularRestingToday,
          gifts: [{
            text: MW("skyblockGame:regularsGiftFlare"),
            given: CW >= 3
          }, this.describeGift(WW.regularTintGift, qC, {
            tint: MW(WW.regularTintNameKey)
          })],
          history: [...WW.regularHistory].reverse().map((WW => {
            const wW = WW.regularMeetingKg.toFixed(1),
              CW = RW - WW.regularMeetingDay;
            return CW <= 0 ? MW("skyblockGame:regularsToday", {
              kg: wW
            }) : MW("skyblockGame:regularsDaysAgo", {
              days: CW,
              kg: wW
            })
          }))
        }
      }
      describeIsland(WW, RW) {
        return {
          id: WW.regularsIslandId,
          name: this.translate(WW.regularsIslandNameKey),
          charm: this.describeGift(WW.regularsCharmGift, Zw, {
            charm: this.translate(WW.regularsCharmNameKey)
          }),
          regulars: WW.regularsList.map((WW => this.describeRegular(WW, RW)))
        }
      }
      buildSnapshot() {
        var WW, RW, MW, wW;
        const CW = this.message;
        if (null === CW) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const zR = CW.regularsIslands.map((WW => this.describeIsland(WW, CW.regularsToday))),
          AW = null !== (WW = null !== (RW = null === (MW = zR.find((WW => WW.id === this.selected))) || void 0 === MW ? void 0 : MW.id) && void 0 !== RW ? RW : null === (wW = zR[0]) || void 0 === wW ? void 0 : wW.id) && void 0 !== WW ? WW : "";
        return {
          enabled: !0,
          open: this.open,
          selected: AW,
          islands: zR
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const RC = "skyblockHiddenWatersView";
    class MC {
      constructor(WW) {
        this.Sz = WW, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      jC(WW) {
        this.snapshot = function(WW) {
          const [RW, MW] = WW.hiddenWatersMapSize, wW = (WW, wW) => ({
            left: 1 - WW / RW,
            top: wW / MW
          }), CW = new Map;
          for (const [AW, bR] of WW.hiddenWatersGlimpses) {
            var zR;
            const WW = null !== (zR = CW.get(AW)) && void 0 !== zR ? zR : [];
            WW.push(bR), CW.set(AW, WW)
          }
          return {
            found: WW.hiddenWatersFound,
            total: WW.hiddenWatersTotal,
            aspect: MW / RW,
            pins: WW.hiddenWatersPins.map((WW => {
              let [RW, MW] = WW;
              return wW(RW, MW)
            })),
            islands: WW.hiddenWatersIslands.map((WW => {
              let [CW, zR, AW, bR] = WW;
              const {
                left: yR,
                top: NW
              } = wW(AW + 1, zR);
              return {
                left: yR,
                top: NW,
                width: (AW + 1 - CW) / RW,
                height: (bR + 1 - zR) / MW
              }
            })),
            glimpses: CW
          }
        }(WW), this.Sz(this.snapshot)
      }
    }
    const wC = "skyblockDialogueView";
    class CC extends eW {
      constructor(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(WW, MW, wW), this.translate = RW, this.requestDialogue = CW, this.now = zR, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = WW => {
          this.selection = {
            kind: "quest",
            questId: WW
          }, this.request(), this.show()
        }, this.selectCharacter = WW => {
          this.selection = {
            kind: "character",
            npcId: WW
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      jC(WW) {
        this.received = !0, this.scripts = WW.questDialogueScripts, this.speakers = new Map(WW.questDialogueSpeakers.map((WW => [WW.dialogueSpeakerId, WW]))), this.emit()
      }
      setTranslator(WW) {
        this.translate = WW, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const WW = this.now();
        WW >= this.requestAvailableAt && (this.requestAvailableAt = WW + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var WW;
        const RW = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...RW,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const MW = this.selection;
        if ("quest" === MW.kind) {
          const WW = this.scripts.find((WW => WW.dialogueQuestId === MW.questId));
          return {
            ...RW,
            characters: [],
            questFocus: MW.questId,
            conversations: WW ? [this.conversation(WW)] : []
          }
        }
        const wW = [];
        for (let zR = this.scripts.length - 1; zR >= 0; zR--) {
          const WW = this.scripts[zR].dialogueLines;
          for (let RW = WW.length - 1; RW >= 0; RW--) wW.includes(WW[RW].dialogueSpeakerId) || wW.push(WW[RW].dialogueSpeakerId)
        }
        const CW = null !== MW.npcId && wW.includes(MW.npcId) ? MW.npcId : null !== (WW = wW[0]) && void 0 !== WW ? WW : null;
        return {
          ...RW,
          characters: wW.map((WW => {
            var RW, MW;
            return {
              id: WW,
              styling: null !== (RW = null === (MW = this.speakers.get(WW)) || void 0 === MW ? void 0 : MW.dialogueSpeakerStyling) && void 0 !== RW ? RW : WW,
              selected: WW === CW
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((WW => WW.dialogueLines.some((WW => WW.dialogueSpeakerId === CW)))).map((WW => this.conversation(WW))).reverse()
        }
      }
      conversation(WW) {
        let RW = null;
        return {
          questId: WW.dialogueQuestId,
          questName: this.translate(WW.dialogueQuestNameKey),
          completed: WW.dialogueQuestCompleted,
          lines: WW.dialogueLines.map(((WW, MW) => {
            var wW;
            const CW = WW.dialogueSpeakerId === RW || null === (wW = this.speakers.get(WW.dialogueSpeakerId)) || void 0 === wW ? void 0 : wW.dialogueSpeakerStyling;
            return RW = WW.dialogueSpeakerId, {
              key: MW,
              display: {
                line: {
                  translationKey: WW.dialogueLineKey,
                  params: this.params(WW.dialogueLineParams)
                },
                speakerName: CW,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(WW) {
        if (void 0 !== WW) return Object.fromEntries(Object.entries(WW).map((WW => {
          let [RW, MW] = WW;
          return [RW, "string" === typeof MW ? MW : this.translate(MW.translationKey)]
        })))
      }
    }
    var zz = MW(540),
      AC = MW(1099),
      bz = MW(116);
    const yz = "skyblockAutographsView";

    function NC(WW) {
      const RW = zz.l[WW];
      return {
        label: RW.chatTag.map((WW => WW.str)).join(""),
        icon: RW.icon,
        colour: RW.mainRGB
      }
    }
    class eC extends eW {
      constructor(WW) {
        let RW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = RW, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      jC(WW) {
        this.signatures = WW.autographSignatures, WW.autographOpen ? this.show() : this.emit()
      }
      setTranslator(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = RW, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var WW;
        const RW = null !== (WW = this.signatures) && void 0 !== WW ? WW : [],
          MW = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          wW = [...RW].sort(((WW, RW) => Number(null !== RW.autographRank) - Number(null !== WW.autographRank) || RW.autographSignedAtMs - WW.autographSignedAtMs)).map((WW => ({
            key: `${WW.autographSignedAtMs}|${WW.autographSignerName}`,
            name: (0, AC.d)(WW.autographSignerName, !bz.featureFlags.canSeeRealPlayerNames),
            rank: null === WW.autographRank ? null : NC(WW.autographRank),
            signedOn: MW.format(WW.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: wW,
          total: wW.length,
          rankTotal: wW.filter((WW => null !== WW.rank)).length
        }
      }
    }
    const BC = "skyblockHudView",
      tz = () => {},
      TC = {
        getItem: () => null,
        setItem: tz,
        removeItem: tz
      };
    class gz {
      constructor(WW) {
        let {
          translate: RW,
          translateWithIcons: MW,
          setMenuOpen: wW = tz,
          dismissMenu: CW = () => {
            wW(!1)
          },
          publishSkills: zR = tz,
          publishQuests: AW = tz,
          publishQuestNotification: bR = tz,
          publishDungeons: yR = tz,
          publishCollections: NW = tz,
          publishMap: eW = tz,
          publishHud: BW = tz,
          publishPortalTransit: TW = tz,
          publishDailyReward: gR = tz,
          publishMailbox: iR = tz,
          publishQuestGraph: YW = tz,
          publishForge: JW = tz,
          publishSmuggler: PW = tz,
          publishKeepersChair: IW = tz,
          publishReachLog: oW = tz,
          publishLampLight: lW = tz,
          publishMagmaward: fW = tz,
          publishGlowtide: QW = tz,
          publishGlowMeter: rR = tz,
          publishHushWait: cR = tz,
          publishPassage: XW = tz,
          publishTideCharts: jR = tz,
          publishRegulars: kR = tz,
          publishHiddenWaters: aR = tz,
          publishDialogue: sW = tz,
          publishAutographs: dW = tz,
          isLoadingScreenUp: pW = () => !1,
          onDailyRewardCoinLanded: hW = tz,
          onDailyRewardStarted: UW = tz,
          onDailyRewardFinished: EW = tz,
          onDailyRewardItemLanded: VW = tz,
          onMailboxStarted: mR = tz,
          journeyStorage: xR = TC,
          requestTracking: vR = tz,
          requestTravel: KW = tz,
          requestDungeonEnter: uW = tz,
          requestQuestJump: OW = tz,
          requestQuestArrive: nW = tz,
          requestForge: GW = tz,
          requestSmuggle: LW = tz,
          requestKeepersChairAim: HW = tz,
          requestReachLogOpen: DW = tz,
          requestLampLight: qR = tz,
          requestDialogue: ZW = tz
        } = WW;
        this.navigation = void 0, this.map = void 0, this.compass = new FW, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new lw, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = WW => WW, this.close = () => {
          for (const WW of this.panels) WW.close()
        }, this.setMenuOpen = wW, this.publishHud = BW, this.portalTransit = new hM(TW, xR), this.magmaward = new pw(fW), this.glowtide = new Uw(QW), this.glowMeter = new Vw(rR), this.hushWait = new xC(cR), this.dailyReward = new VM(gR, (() => pW() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (WW => {
          this.quests.setNotificationsHeld(WW)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), hW, UW, EW, VW);
        const SW = WW => {
          this.panels.some((WW => WW.isOpen())) || (WW ? CW() : this.setMenuOpen(!1))
        };
        this.skills = new MM(zR, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), RW, void 0, void 0, SW), this.quests = new bw(AW, vR, RW, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, SW, bR), this.dungeons = new eM(yR, RW, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, SW, uW), this.collections = new sM(NW, RW, (() => {
          this.beforePanelOpen(this.collections)
        }), SW), this.map = new tR(eW, KW, RW, (() => {
          this.beforePanelOpen(this.map)
        }), SW), this.questGraph = new LM(YW, RW, (() => {
          this.beforePanelOpen(this.questGraph)
        }), SW, OW, nW, xR), this.forge = new tC(JW, RW, (() => {
          this.beforePanelOpen(this.forge)
        }), SW, GW), this.smuggler = new iC(PW, RW, (() => {
          this.beforePanelOpen(this.smuggler)
        }), SW, LW), this.lampLight = new sw(lW, RW, qR, this.commandPacer), this.keepersChair = new fw(IW, RW, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (WW => {
          this.lampLight.onChairClosed(), SW(WW)
        }), HW, Date.now, this.commandPacer), this.reachLog = new kC(oW, RW, (() => {
          this.beforePanelOpen(this.reachLog)
        }), SW, DW, this.commandPacer), this.passage = new ow(XW, RW, (() => {
          this.beforePanelOpen(this.passage)
        }), SW), this.tideCharts = new Hw(jR, RW, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), SW), this.regulars = new WC(kR, RW, (() => {
          this.beforePanelOpen(this.regulars)
        }), (WW => {
          this.regulars.takeReturnToReachLog() && !WW && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), SW(WW)
        })), this.hiddenWaters = new MC(aR), this.dialogue = new CC(sW, RW, (() => {
          this.beforePanelOpen(this.dialogue)
        }), SW, ZW), this.autographs = new eC(dW, (() => {
          this.beforePanelOpen(this.autographs)
        }), SW), this.mailbox = new KM(iR, (() => pW() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), mR), this.quests.translateWithIcons = null !== MW && void 0 !== MW ? MW : null, this.skills.onLevelUp = WW => {
          this.quests.notify(WW)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new WM(this.map, this.quests, this.compass, RW)
      }
      getHudSnapshot() {
        const WW = this.hudSnapshot,
          RW = this.dailyReward.getHeldCoins();
        return null === WW || RW <= 0 || !("hudPurseCoins" in WW) ? WW : {
          ...WW,
          hudPurseCoins: Math.max(0, WW.hudPurseCoins - RW)
        }
      }
      receiveHud(WW) {
        this.hudSnapshot = WW, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(WW) {
        this.setMenuOpen(!0);
        const RW = WW === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = WW;
        for (const MW of this.panels) MW === WW || RW && MW === this.reachLog || MW.close();
        this.openingPanel = null
      }
      setTranslator(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RW => this.resolveItemName(RW, WW);
        this.quests.translateWithIcons = null !== MW && void 0 !== MW ? MW : null, this.navigation.setTranslator(WW, RW), this.lampLight.setTranslator(WW, RW), this.mailbox.setItemName(wW);
        for (const CW of this.panels) CW.setTranslator(WW, RW, wW)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const WW of this.panels) WW.dispose()
      }
    }
    var iz = MW(897),
      YC = MW.n(iz),
      JC = MW(27),
      PC = MW(34827),
      IC = MW(1537),
      oC = MW(1523),
      lC = MW(8157),
      FC = MW(1027),
      fC = MW(1253),
      QC = MW(940);

    function rz(WW) {
      let {
        controller: RW,
        minimap: MW,
        children: wW
      } = WW;
      const zR = (0, fC.i)(BC, RW.getHudSnapshot()),
        [AW, bR] = (0, QW.useState)(RW.skills.getSnapshot().overallLevel);
      (0, fC.f)(RM, (WW => {
        bR(WW.overallLevel)
      }));
      const yR = (0, QW.useRef)(null);
      (0, fC.f)(EM, (WW => {
        ! function(WW, RW) {
          if (null === WW || "function" !== typeof WW.animate) return;
          const MW = RW ? 1.35 : 1.15;
          WW.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${MW})`
          }, {
            transform: "scale(1)"
          }], {
            duration: RW ? 320 : 160,
            easing: "ease-out"
          }), WW.classList.toggle("Receiving", !RW), RW && (WW.classList.remove("Shine"), WW.offsetWidth, WW.classList.add("Shine"))
        }(yR.current, WW)
      }));
      const {
        t: NW
      } = (0, FC.C)(), {
        isTouchScreen: eW
      } = (0, JC.i)(["isTouchScreen"]);
      return null !== zR || MW ? (0, QC.jsx)(PC.g, {
        placement: "topRight",
        children: (0, QC.jsxs)("div", {
          className: YC()("SkyblockRightHud", {
            TouchScreen: eW
          }),
          children: [MW, null !== zR && (0, QC.jsxs)("div", {
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in zR ? (0, QC.jsx)("div", {
              className: "SkyblockHudHelp",
              children: zR.hudHelpText
            }) : (0, QC.jsxs)(QC.Fragment, {
              children: [(0, QC.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, QC.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, QC.jsx)("strong", {
                    style: {
                      color: CW.G.cyanUiText
                    },
                    children: NW(zR.hudZoneNameKey)
                  }), null !== AW && (0, QC.jsx)("span", {
                    style: {
                      color: CW.G.goldUiText
                    },
                    children: NW("skyblockGame:level", {
                      level: (0, lC.g)(AW)
                    })
                  })]
                }), (0, QC.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: yR,
                  children: [(0, QC.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, QC.jsx)(IC.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, lC.g)(zR.hudPurseCoins)]
                })]
              }), zR.hudClockText.length > 0 && (0, QC.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, QC.jsx)(oC.c, {
                  text: zR.hudClockText
                })
              })]
            }), wW, "hudZoneNameKey" in zR && (0, QC.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function cz(WW) {
      let {
        icon: RW
      } = WW;
      const MW = (0, QW.useCallback)((WW => {
        null === WW || void 0 === WW || WW.replaceChildren(vM(RW))
      }), [RW]);
      return (0, QC.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: MW
      })
    }

    function XC(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)();
      return (0, QC.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: RW.display.mountPlayer,
        title: MW("skyblockGame:mapYouAreHere"),
        children: (0, QC.jsx)(cz, {
          icon: "player"
        })
      })
    }
    const jz = MW(36594),
      kz = Object.fromEntries(jz.keys().map((WW => [WW.replace(/^\.\/(.*)\.png$/, "$1"), jz(WW)])));

    function az(WW, RW) {
      var MW;
      return null !== (MW = kz[WW]) && void 0 !== MW ? MW : kz[RW]
    }

    function sC(WW) {
      let {
        imageKey: RW,
        fallbackImageKey: MW,
        geometryKey: wW,
        alt: CW,
        className: zR
      } = WW;
      const [AW, bR] = (0, QW.useState)((() => function(WW, RW) {
        return [{
          id: 0,
          imageKey: WW,
          geometryKey: RW,
          phase: "shown"
        }]
      }(RW, wW))), yR = function(WW, RW, MW) {
        const wW = WW[WW.length - 1];
        if (wW.imageKey === RW && wW.geometryKey === MW) return WW;
        const CW = {
          id: wW.id + 1,
          imageKey: RW,
          geometryKey: MW,
          phase: "entering"
        };
        return wW.geometryKey === MW ? [{
          ...wW,
          phase: "leaving"
        }, CW] : [CW]
      }(AW, RW, wW);
      return yR !== AW && bR(yR), (0, QC.jsx)(QC.Fragment, {
        children: yR.map((WW => (0, QC.jsx)("img", {
          className: YC()("SkyblockMapTerrainImage", zR, {
            Entering: "entering" === WW.phase,
            Leaving: "leaving" === WW.phase
          }),
          src: az(WW.imageKey, MW),
          alt: "leaving" === WW.phase ? "" : CW,
          onAnimationEnd: () => {
            bR((RW => function(WW, RW) {
              return WW.flatMap((WW => WW.id !== RW ? [WW] : "leaving" === WW.phase ? [] : [{
                ...WW,
                phase: "shown"
              }]))
            }(RW, WW.id)))
          }
        }, WW.id)))
      })
    }
    var dC = MW(3573),
      pC = MW(1255);

    function hC(WW) {
      if ("Tab" !== WW.key) return;
      const RW = Array.from(WW.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        MW = RW.indexOf(document.activeElement);
      var wW;
      if (WW.shiftKey && MW <= 0) WW.preventDefault(), null === (wW = RW.at(-1)) || void 0 === wW || wW.focus();
      else if (!WW.shiftKey && (-1 === MW || MW === RW.length - 1)) {
        var CW;
        WW.preventDefault(), null === (CW = RW[0]) || void 0 === CW || CW.focus()
      }
    }

    function UC() {
      const WW = (0, QW.useRef)(null);
      return (0, QW.useCallback)((RW => {
        var MW;
        RW ? (WW.current = document.activeElement, RW.focus()) : null === (MW = WW.current) || void 0 === MW || MW.focus()
      }), [])
    }

    function EC(WW) {
      let {
        percent: RW,
        label: MW,
        levelUpToken: wW,
        colour: CW
      } = WW;
      return (0, QC.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": MW,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": RW,
        "aria-valuetext": MW,
        children: [(0, QC.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${RW/100})`
          }
        }), null !== wW && void 0 !== wW && (0, QC.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": CW
          }
        }, wW)]
      })
    }

    function VC(WW) {
      let {
        mount: RW
      } = WW;
      return (0, QC.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: RW,
        hidden: !0,
        children: (0, QC.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, QC.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, QC.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function mz(WW, RW, MW, wW) {
      (0, QW.useLayoutEffect)((() => {
        const CW = WW.current;
        if (!MW || null === RW || void 0 === RW || !RW.local || !CW) return;
        const zR = Array.from(CW.querySelectorAll(".SkyblockMapNode")),
          AW = [...RW.points, ...RW.portals],
          bR = () => {
            const WW = CW.clientWidth,
              MW = CW.clientHeight,
              bR = zR.map(((CW, zR) => {
                const bR = AW[zR];
                return {
                  id: bR.id,
                  portal: zR >= RW.points.length,
                  x: bR.position[0] * WW / 100,
                  y: bR.position[1] * MW / 100,
                  width: CW.offsetWidth / wW,
                  height: CW.offsetHeight / wW
                }
              })),
              yR = new Map(AW.map(((WW, RW) => [WW.id, zR[RW]])));
            for (const RW of function(WW, RW, MW) {
                const wW = [],
                  CW = [...WW].sort(((WW, RW) => Number(RW.portal) - Number(WW.portal) || WW.id.localeCompare(RW.id)));
                for (const zR of CW) {
                  const WW = WW => Math.max(zR.width / 2, Math.min(RW - zR.width / 2, WW)),
                    CW = WW => Math.max(zR.height / 2, Math.min(MW - zR.height / 2, WW)),
                    AW = [WW(zR.x)],
                    bR = [CW(zR.y)];
                  for (const RW of wW) AW.push(WW(RW.x - (RW.width + zR.width) / 2 - 4), WW(RW.x + (RW.width + zR.width) / 2 + 4)), bR.push(CW(RW.y - (RW.height + zR.height) / 2 - 4), CW(RW.y + (RW.height + zR.height) / 2 + 4));
                  let yR = {
                      ...zR,
                      x: AW[0],
                      y: bR[0]
                    },
                    NW = 1 / 0,
                    eW = 1 / 0;
                  for (const RW of new Set(AW))
                    for (const WW of new Set(bR)) {
                      let MW = 0;
                      for (const AW of wW) MW += Math.max(0, (zR.width + AW.width) / 2 + 4 - Math.abs(RW - AW.x)) * Math.max(0, (zR.height + AW.height) / 2 + 4 - Math.abs(WW - AW.y));
                      const CW = (RW - zR.x) ** 2 + (WW - zR.y) ** 2;
                      (MW < NW || MW === NW && CW < eW) && (yR = {
                        ...zR,
                        x: RW,
                        y: WW
                      }, NW = MW, eW = CW)
                    }
                  wW.push(yR)
                }
                return wW
              }(bR, WW, MW)) {
              const WW = yR.get(RW.id);
              WW.style.left = `${RW.x}px`, WW.style.top = `${RW.y}px`
            }
          };
        bR();
        const yR = new ResizeObserver(bR);
        yR.observe(CW);
        for (const WW of zR) yR.observe(WW);
        return () => {
          yR.disconnect()
        }
      }), [WW, RW, MW, wW])
    }
    const xz = {
        zoom: 1,
        x: 0,
        y: 0
      },
      vz = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function KC(WW, RW, MW) {
      return Math.min(MW, Math.max(RW, WW))
    }

    function uC(WW, RW, MW) {
      const wW = Math.min(1, MW * RW / WW),
        CW = Math.min(1, WW / (MW * RW));
      return {
        x0: (1 - wW) / 2,
        y0: (1 - CW) / 2,
        x1: (1 + wW) / 2,
        y1: (1 + CW) / 2
      }
    }

    function OC(WW, RW, MW, wW) {
      const CW = RW * (wW - MW);
      if (CW <= 1) return .5 - RW * (MW + wW) / 2;
      const zR = .45 * Math.min(1, CW - 1);
      return KC(WW, 1 - RW * wW - zR, zR - RW * MW)
    }

    function nC(WW, RW) {
      const MW = KC(WW.zoom, 1, 12);
      return {
        zoom: MW,
        x: OC(WW.x, MW, RW.x0, RW.x1),
        y: OC(WW.y, MW, RW.y0, RW.y1)
      }
    }

    function GC(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vz;
      const zR = KC(WW.zoom * RW, 1, 12),
        AW = zR / WW.zoom;
      return nC({
        zoom: zR,
        x: MW - (MW - WW.x) * AW,
        y: wW - (wW - WW.y) * AW
      }, CW)
    }

    function LC(WW, RW, MW, wW) {
      const [CW, zR] = (0, QW.useState)(xz);
      (0, QW.useEffect)((() => {
        zR(xz)
      }), [MW]), (0, QW.useEffect)((() => {
        const MW = WW.current;
        if (!RW || !MW) return;
        const CW = () => uC(MW.clientWidth, MW.clientHeight, wW),
          AW = WW => {
            const RW = MW.getBoundingClientRect();
            return {
              x: (WW.clientX - RW.left) / RW.width,
              y: (WW.clientY - RW.top) / RW.height
            }
          },
          bR = new Map;
        let yR = {
            x: 0,
            y: 0
          },
          NW = !1,
          eW = 0;
        const BW = WW => {
            WW.preventDefault();
            const RW = WW.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * WW.deltaY : WW.deltaY,
              MW = AW(WW);
            zR((WW => GC(WW, Math.exp(.0015 * -RW), MW.x, MW.y, CW())))
          },
          tR = WW => {
            "mouse" === WW.pointerType && 0 !== WW.button || (bR.set(WW.pointerId, AW(WW)), 1 === bR.size && (yR = {
              x: WW.clientX,
              y: WW.clientY
            }, NW = !1), eW = 0)
          },
          TW = WW => {
            const RW = bR.get(WW.pointerId);
            if (!RW) return;
            const wW = AW(WW);
            if (bR.set(WW.pointerId, wW), 2 === bR.size) {
              const [WW, RW] = [...bR.values()], MW = Math.hypot(WW.x - RW.x, WW.y - RW.y);
              if (eW > 0) {
                const wW = MW / eW;
                zR((MW => GC(MW, wW, (WW.x + RW.x) / 2, (WW.y + RW.y) / 2, CW())))
              }
              return eW = MW, void(NW = !0)
            }!NW && Math.hypot(WW.clientX - yR.x, WW.clientY - yR.y) < 4 || (NW || (NW = !0, MW.setPointerCapture(WW.pointerId)), zR((WW => function(WW, RW, MW) {
              let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vz;
              return nC({
                zoom: WW.zoom,
                x: WW.x + RW,
                y: WW.y + MW
              }, wW)
            }(WW, wW.x - RW.x, wW.y - RW.y, CW()))))
          },
          gR = WW => {
            bR.delete(WW.pointerId), eW = 0
          },
          iR = WW => {
            NW && (WW.stopPropagation(), WW.preventDefault(), NW = !1)
          },
          YW = new ResizeObserver((() => {
            zR((WW => nC(WW, CW())))
          }));
        return YW.observe(MW), MW.addEventListener("wheel", BW, {
          passive: !1
        }), MW.addEventListener("pointerdown", tR), MW.addEventListener("pointermove", TW), MW.addEventListener("pointerup", gR), MW.addEventListener("pointercancel", gR), MW.addEventListener("click", iR, !0), () => {
          YW.disconnect(), MW.removeEventListener("wheel", BW), MW.removeEventListener("pointerdown", tR), MW.removeEventListener("pointermove", TW), MW.removeEventListener("pointerup", gR), MW.removeEventListener("pointercancel", gR), MW.removeEventListener("click", iR, !0)
        }
      }), [WW, RW, MW, wW]);
      return {
        view: CW,
        zoomBy: RW => {
          const MW = WW.current;
          MW && zR((WW => GC(WW, RW, .5, .5, uC(MW.clientWidth, MW.clientHeight, wW))))
        }
      }
    }

    function HC(WW) {
      var RW, MW, wW, CW;
      let {
        controller: zR,
        navigation: AW
      } = WW;
      const bR = (0, fC.i)(BW, zR.getSnapshot()),
        {
          t: yR
        } = (0, FC.C)(),
        NW = UC(),
        eW = bR.presentation,
        tR = (0, QW.useRef)(null),
        TW = (0, QW.useRef)(null),
        gR = Boolean(bR.open && (null === eW || void 0 === eW ? void 0 : eW.local) && eW.background),
        iR = LC(tR, gR, `${bR.open}|${bR.tab}|${null===eW||void 0===eW||null===(RW=eW.background)||void 0===RW?void 0:RW.geometryKey}`, null !== (MW = null === eW || void 0 === eW || null === (wW = eW.background) || void 0 === wW ? void 0 : wW.ratio) && void 0 !== MW ? MW : 2);
      if (mz(TW, eW, bR.open, iR.view.zoom), !eW || !bR.open) return null;
      const YW = eW.local ? eW.background : null,
        JW = {
          "--map-ratio": String(null !== (CW = null === YW || void 0 === YW ? void 0 : YW.ratio) && void 0 !== CW ? CW : 2),
          backgroundColor: null === YW || void 0 === YW ? void 0 : YW.colour
        },
        PW = {
          "--map-zoom": String(iR.view.zoom),
          transform: `translate(${100*iR.view.x}%, ${100*iR.view.y}%) scale(${iR.view.zoom})`
        };
      return (0, QC.jsx)(dC.b, {
        show: bR.open,
        close: zR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: NW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, QC.jsx)("h2", {
                id: "skyblockMapTitle",
                children: yR("skyblockGame:map")
              }), eW.minimap && (0, QC.jsx)("p", {
                children: eW.minimap.caption
              })]
            }), (0, QC.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((WW => (0, QC.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": WW === bR.tab ? "true" : void 0,
                className: YC()({
                  Selected: WW === bR.tab
                }),
                "aria-pressed": WW === bR.tab,
                onClick: () => {
                  zR.selectTab(WW)
                },
                children: yR("local" === WW ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, WW)))
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: zR.dismiss
            })]
          }), (0, QC.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, QC.jsxs)("div", {
              ref: tR,
              className: YC()("SkyblockMapCanvas", {
                Local: eW.local,
                Overview: !eW.local,
                Zoomed: iR.view.zoom > 1
              }),
              style: JW,
              children: [(0, QC.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: gR ? PW : void 0,
                children: (0, QC.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: TW,
                  children: [YW && (0, QC.jsx)(sC, {
                    className: "SkyblockMapTerrain",
                    imageKey: YW.imageKey,
                    fallbackImageKey: YW.fallbackImageKey,
                    geometryKey: YW.geometryKey,
                    alt: YW.label
                  }), eW.local && (0, QC.jsx)(VC, {
                    mount: AW.display.mountMapSearchArea
                  }), !eW.local && (0, QC.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: eW.connections.map((WW => (0, QC.jsx)("line", {
                      className: YC()({
                        Explored: WW.explored
                      }),
                      x1: WW.start[0],
                      y1: WW.start[1],
                      x2: WW.end[0],
                      y2: WW.end[1]
                    }, WW.id)))
                  }), eW.points.map((WW => {
                    const RW = !eW.local && WW.thumbnail ? kz[WW.thumbnail] : void 0;
                    return (0, QC.jsxs)("div", {
                      className: YC()("SkyblockMapNode", {
                        Current: WW.current
                      }),
                      style: {
                        left: `${WW.position[0]}%`,
                        top: `${WW.position[1]}%`
                      },
                      children: [(0, QC.jsxs)(pC.h, {
                        className: YC()("SkyblockMapPin", {
                          Unknown: !WW.visited,
                          Current: WW.current
                        }),
                        disabled: bR.pending,
                        onClick: () => {
                          zR.travel(WW.travelKind, WW.travelId)
                        },
                        children: [RW && (0, QC.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: RW,
                          alt: ""
                        }), !RW && (0, QC.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, QC.jsx)(cz, {
                            icon: WW.icon
                          })
                        }), (0, QC.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: WW.name
                        })]
                      }), WW.current && (0, QC.jsx)("span", {
                        className: YC()("SkyblockMapHereBadge", {
                          Above: WW.position[1] > 50
                        }),
                        children: yR("skyblockGame:mapYouAreHere")
                      })]
                    }, WW.id)
                  })), eW.portals.map((WW => (0, QC.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${WW.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${WW.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, QC.jsxs)(pC.h, {
                      className: "SkyblockMapPin",
                      disabled: bR.pending,
                      onClick: () => {
                        zR.travel(WW.travelKind, WW.travelId)
                      },
                      children: [(0, QC.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: WW.colour
                        },
                        "aria-hidden": "true",
                        children: (0, QC.jsx)(cz, {
                          icon: WW.icon
                        })
                      }), (0, QC.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: WW.name
                      })]
                    })
                  }, WW.id))), eW.local && (0, QC.jsx)(XC, {
                    controller: AW
                  })]
                })
              }), gR && (0, QC.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, QC.jsx)("button", {
                  type: "button",
                  "aria-label": yR("skyblockGame:mapZoomIn"),
                  disabled: iR.view.zoom >= 12,
                  onClick: () => {
                    iR.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, QC.jsx)("button", {
                  type: "button",
                  "aria-label": yR("skyblockGame:mapZoomOut"),
                  disabled: iR.view.zoom <= 1,
                  onClick: () => {
                    iR.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, QC.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: bR.feedback
              })]
            })
          }), (0, QC.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [eW.progress && (0, QC.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, QC.jsx)("span", {
                children: eW.progress
              }), (0, QC.jsx)(EC, {
                percent: eW.percent,
                label: eW.progress
              })]
            }), eW.noLandmarks && (0, QC.jsx)("span", {
              children: yR("skyblockGame:mapNoLandmarks")
            }), eW.canTravel && (0, QC.jsx)("span", {
              className: "SkyblockMapHint",
              children: yR("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function DC(WW) {
      let {
        view: RW,
        controller: MW,
        navigation: wW
      } = WW;
      const {
        t: CW
      } = (0, FC.C)(), {
        isTouchScreen: zR
      } = (0, JC.i)(["isTouchScreen"]);
      return (0, QC.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": CW("skyblockGame:mapLocal"),
        children: [zR && (0, QC.jsx)(pC.h, {
          className: "SkyblockMinimapOpen",
          onClick: MW.showLocal,
          children: CW("skyblockGame:map")
        }), (0, QC.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: RW.colour
          },
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: wW.display.mountTerrain,
            style: {
              width: RW.width,
              height: RW.height
            },
            children: [(0, QC.jsx)(sC, {
              imageKey: RW.imageKey,
              fallbackImageKey: RW.fallbackImageKey,
              geometryKey: RW.geometryKey,
              alt: RW.label
            }), (0, QC.jsx)(VC, {
              mount: wW.display.mountMinimapSearchArea
            }), RW.markers.map((WW => (0, QC.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${WW.position[0]}%`,
                top: `${WW.position[1]}%`,
                color: WW.colour
              },
              title: WW.name,
              children: (0, QC.jsx)(cz, {
                icon: WW.icon
              })
            }, WW.id)))]
          }), (0, QC.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: CW("skyblockGame:mapYouAreHere"),
            children: (0, QC.jsx)(cz, {
              icon: "player"
            })
          })]
        }), (0, QC.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: RW.caption
        })]
      })
    }

    function qz(WW) {
      let {
        controller: RW
      } = WW;
      return (0, QC.jsxs)("div", {
        className: "SkyblockCompass",
        ref: RW.display.mountCompass,
        children: [(0, QC.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, QC.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, QC.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ZC(WW) {
      let {
        controller: RW,
        surface: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)(), CW = (0, fC.i)(RM, RW.getSnapshot()), zR = UC();
      return CW.enabled ? (0, QC.jsxs)(QC.Fragment, {
        children: ["hud" === MW && (0, QC.jsx)(PC.g, {
          placement: "statBars",
          children: CW.hud && (0, QC.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": CW.hud.colour
            },
            children: [(0, QC.jsx)(EC, {
              percent: CW.hud.skill.percent,
              label: CW.hud.skill.xp,
              levelUpToken: CW.hud.levelUpToken,
              colour: CW.hud.colour
            }), (0, QC.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, QC.jsxs)("span", {
                children: [CW.hud.skill.label, " \xb7 ", CW.hud.skill.level]
              }), (0, QC.jsx)("span", {
                children: CW.hud.gain
              })]
            })]
          })
        }), "hud" === MW && (0, QC.jsx)(PC.g, {
          children: CW.hud && (0, QC.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, QC.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, QC.jsx)("strong", {
                children: CW.hud.skill.label
              }), (0, QC.jsx)("span", {
                children: CW.hud.gain
              })]
            }), (0, QC.jsx)(EC, {
              percent: CW.hud.skill.percent,
              label: CW.hud.skill.xp,
              levelUpToken: CW.hud.levelUpToken,
              colour: CW.hud.colour
            }), (0, QC.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, QC.jsx)("span", {
                children: CW.hud.skill.level
              }), (0, QC.jsx)("span", {
                children: CW.hud.skill.xp
              })]
            })]
          })
        }), "menu" === MW && (0, QC.jsx)(dC.b, {
          show: CW.open,
          close: RW.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, QC.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: zR,
            onKeyDown: hC,
            children: [(0, QC.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, QC.jsxs)("div", {
                children: [(0, QC.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: wW("skyblockGame:skills")
                }), (0, QC.jsx)("p", {
                  children: wW("skyblockGame:skillsIntro")
                })]
              }), (0, QC.jsx)(pC.l, {
                padIgnore: !0,
                onClick: RW.dismiss
              })]
            }), (0, QC.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, QC.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: CW.skills.map((WW => (0, QC.jsxs)(pC.h, {
                  className: YC()("SkyblockSkillCard", {
                    Selected: WW.selected
                  }),
                  ariaPressed: WW.selected,
                  onClick: () => {
                    RW.select(WW.id)
                  },
                  children: [(0, QC.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, QC.jsx)(IC.c, {
                      itemName: WW.icon,
                      amount: 0
                    })
                  }), (0, QC.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, QC.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, QC.jsx)("strong", {
                        children: WW.label
                      }), (0, QC.jsx)("span", {
                        children: WW.level
                      })]
                    }), (0, QC.jsx)(EC, {
                      percent: WW.percent,
                      label: `${WW.label}: ${WW.xp}`
                    }), (0, QC.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: WW.xp
                    })]
                  })]
                }, WW.id)))
              }), CW.detail && (0, QC.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, QC.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, QC.jsx)(IC.c, {
                    itemName: CW.detail.icon,
                    amount: 0
                  })
                }), (0, QC.jsx)("h3", {
                  children: CW.detail.label
                }), (0, QC.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: CW.detail.level
                }), (0, QC.jsx)("p", {
                  children: CW.detail.description
                }), (0, QC.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, QC.jsx)("strong", {
                    children: wW("skyblockGame:currentBenefit")
                  }), (0, QC.jsx)("span", {
                    children: CW.detail.benefit
                  })]
                }), (0, QC.jsx)(EC, {
                  percent: CW.detail.percent,
                  label: CW.detail.xp
                }), (0, QC.jsx)("p", {
                  children: CW.detail.xp
                }), (0, QC.jsx)("h4", {
                  children: wW("skyblockGame:earnXp")
                }), (0, QC.jsx)("ul", {
                  children: CW.detail.sources.map((WW => (0, QC.jsx)("li", {
                    children: WW
                  }, WW)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var SC = MW(1180),
      Wz = MW(3811),
      Rz = MW(232);

    function Mz(WW) {
      let {
        item: RW
      } = WW;
      return (0, QC.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, QC.jsx)(IC.c, {
          itemName: RW,
          amount: 0
        })
      })
    }

    function wz(WW) {
      let {
        name: RW,
        percent: MW,
        progress: wW
      } = WW;
      return (0, QC.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, QC.jsx)(EC, {
          percent: MW,
          label: `${(0,Rz.pb)(RW)}: ${wW}`
        }), (0, QC.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: wW
        })]
      })
    }

    function Cz(WW) {
      let {
        subquests: RW,
        showDescriptions: MW = !1
      } = WW;
      return (0, QC.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: RW.map((WW => {
          const RW = MW && "completed" === WW.status,
            wW = (0, QC.jsxs)("li", {
              className: YC()("SkyblockQuestStep", WW.status, {
                JustFinished: WW.justFinished,
                JustUnlocked: WW.justUnlocked
              }),
              tabIndex: RW ? 0 : void 0,
              children: [null !== WW.iconItem && (0, QC.jsx)(Mz, {
                item: WW.iconItem
              }), null === WW.iconItem && (0, QC.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === WW.status ? "\u2713" : "skipped" === WW.status ? "\u2212" : "\u25cb"
              }), (0, QC.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, QC.jsx)("strong", {
                  children: (0, QC.jsx)(Wz.b, {
                    text: WW.name
                  })
                }), MW && !RW && (0, QC.jsx)("span", {
                  children: (0, QC.jsx)(Wz.b, {
                    text: WW.description
                  })
                }), null !== WW.barPercent && (0, QC.jsx)(wz, {
                  name: WW.name,
                  percent: WW.barPercent,
                  progress: WW.progress
                }), null === WW.barPercent && !RW && (0, QC.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: WW.statusLabel
                })]
              })]
            }, WW.id);
          return RW ? (0, QC.jsx)(SC.e, {
            delayShow: 200,
            tooltipInner: (0, QC.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, QC.jsx)("span", {
                children: (0, QC.jsx)(Wz.b, {
                  text: WW.description
                })
              }), (0, QC.jsx)("strong", {
                children: WW.statusLabel
              })]
            }),
            children: wW
          }, WW.id) : wW
        }))
      })
    }

    function zA(WW) {
      let {
        quest: RW,
        select: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)(), CW = RW.focusStep;
      return (0, QC.jsxs)(pC.h, {
        className: YC()("SkyblockQuestCard", {
          Selected: RW.selected,
          Tracked: RW.tracked
        }),
        onClick: () => {
          MW(RW.id)
        },
        children: [(0, QC.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, QC.jsx)("strong", {
            children: (0, QC.jsx)(Wz.b, {
              text: RW.name
            })
          }), RW.tracked && (0, QC.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: wW("skyblockGame:currentQuest")
          })]
        }), CW && (0, QC.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== CW.iconItem && (0, QC.jsx)(Mz, {
            item: CW.iconItem
          }), (0, QC.jsx)(wz, {
            name: CW.name,
            percent: CW.barPercent,
            progress: CW.progress
          })]
        }), (0, QC.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: RW.progress
        })]
      })
    }

    function Az(WW) {
      let {
        controller: RW,
        surface: MW
      } = WW;
      const wW = (0, fC.i)(zw, RW.getSnapshot()),
        {
          t: CW
        } = (0, FC.C)(),
        zR = UC();
      return wW.enabled ? (0, QC.jsxs)(QC.Fragment, {
        children: ["hud" === MW && (0, QC.jsx)(QC.Fragment, {
          children: wW.tracked && (0, QC.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: CM,
            children: (0, QC.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [wW.trackedStepPulse > 0 && (0, QC.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, wW.trackedStepPulse), (0, QC.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: CW("skyblockGame:currentQuest")
              }), (0, QC.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, QC.jsx)("strong", {
                  children: (0, QC.jsx)(Wz.b, {
                    text: wW.tracked.name
                  })
                }), null !== wW.tracked.clock && (0, QC.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: wW.tracked.clock
                })]
              }), (0, QC.jsx)(Cz, {
                subquests: wW.tracked.subquests
              })]
            })
          })
        }), "menu" === MW && (0, QC.jsx)(dC.b, {
          show: wW.open,
          close: RW.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, QC.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: zR,
            onKeyDown: hC,
            children: [(0, QC.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, QC.jsx)("div", {
                children: (0, QC.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: CW("skyblockGame:quests")
                })
              }), (0, QC.jsx)(pC.l, {
                padIgnore: !0,
                onClick: RW.dismiss
              })]
            }), (0, QC.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, QC.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, QC.jsx)("h3", {
                  children: CW("skyblockGame:current")
                }), 0 === wW.active.length && (0, QC.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: CW("skyblockGame:noActiveQuests")
                }), wW.active.map((WW => (0, QC.jsx)(zA, {
                  quest: WW,
                  select: RW.select
                }, WW.id))), (0, QC.jsx)("h3", {
                  children: (0, QC.jsxs)("button", {
                    type: "button",
                    className: YC()("SkyblockQuestSectionToggle", {
                      Expanded: wW.completedExpanded
                    }),
                    "aria-expanded": wW.completedExpanded,
                    onClick: RW.toggleCompleted,
                    children: [(0, QC.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), CW("skyblockGame:completed"), (0, QC.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: wW.completed.length
                    })]
                  })
                }), wW.completedExpanded && 0 === wW.completed.length && (0, QC.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: CW("skyblockGame:noCompletedQuests")
                }), wW.completedExpanded && wW.completed.map((WW => (0, QC.jsx)(zA, {
                  quest: WW,
                  select: RW.select
                }, WW.id)))]
              }), wW.detail && (0, QC.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [wW.detail.completed && (0, QC.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: CW("skyblockGame:completedQuest")
                }), (0, QC.jsx)("h3", {
                  children: (0, QC.jsx)(Wz.b, {
                    text: wW.detail.name
                  })
                }), (0, QC.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, QC.jsx)(Wz.b, {
                    text: wW.detail.description
                  })
                }), (0, QC.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [wW.detail.progress, null !== wW.detail.clock && (0, QC.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: wW.detail.clock
                  })]
                }), (0, QC.jsx)(Cz, {
                  subquests: wW.detail.subquests,
                  showDescriptions: !0
                }), wW.detail.tracked && (0, QC.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: wW.detail.trackLabel
                }), !wW.detail.completed && !wW.detail.tracked && (0, QC.jsx)(pC.m, {
                  onClick: RW.trackSelected,
                  disabled: !wW.detail.canTrack,
                  children: wW.detail.trackLabel
                }), wW.detail.canViewDialogue && (0, QC.jsx)(pC.h, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: RW.viewDialogue,
                  children: CW("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var bA = MW(904),
      yA = MW(2036);

    function Nz(WW, RW, MW, wW, CW) {
      const zR = WW => "linear" === CW ? WW : {
          bRW: CW,
          point: WW
        },
        AW = {};
      for (const [bR, yR] of wW)
        for (const [RW, MW] of Object.entries(WW(bR, yR, zR))) AW[RW] ??= {
          timeline: []
        }, AW[RW].timeline.push(MW);
      return {
        wWW: RW,
        loop: MW,
        zRW: AW
      }
    }
    const ez = .547,
      Bz = .022,
      tA = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Tz = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function gA(WW, RW, MW) {
      const {
        drop: wW = 0,
        shift: CW = 0,
        torso: zR = 0,
        nod: AW = 0,
        tilt: bR = 0,
        legs: yR = [0, 0],
        arms: NW = 0,
        spread: eW = 0
      } = RW, BW = ez * Math.cos(zR) - Bz * Math.sin(zR), tR = ez * Math.sin(zR) + Bz * Math.cos(zR), TW = MW([0, -wW, CW]);
      return {
        LowerBody: {
          timeFraction: WW,
          position: TW,
          rotation: MW([0, 0, 0])
        },
        UpperBody: {
          timeFraction: WW,
          position: TW,
          rotation: MW([zR, 0, bR])
        },
        HeadMesh: {
          timeFraction: WW,
          position: MW([0, BW - ez - wW, tR - Bz + CW]),
          rotation: MW([zR + AW, 0, bR])
        },
        LegLeftMesh: {
          timeFraction: WW,
          rotation: MW([yR[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: WW,
          rotation: MW([yR[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: MW([NW, 0, eW])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: MW([NW, 0, -eW])
        }
      }
    }

    function iA(WW, RW, MW) {
      return Nz(gA, WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Yz(WW) {
      return "number" === typeof WW ? [WW, WW] : WW
    }

    function Jz(WW, RW, MW) {
      const {
        rise: wW = 0,
        shift: CW = 0,
        torso: zR = 0,
        twist: AW = 0,
        tilt: bR = 0,
        nod: yR = 0,
        cock: NW = 0,
        arms: eW = 0,
        spread: BW = 0
      } = RW, [tR, TW] = Yz(eW), [gR, iR] = Yz(BW);
      return {
        TorsoNode: {
          timeFraction: WW,
          position: MW([0, wW, CW]),
          rotation: MW([zR, AW, bR])
        },
        HeadMesh: {
          timeFraction: WW,
          rotation: MW([yR, 0, NW])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: MW([tR, 0, gR])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: MW([TW, 0, -iR])
        }
      }
    }
    const Pz = [1.0625, -1, 0];

    function Iz(WW) {
      return "number" === typeof WW ? [WW, WW] : WW
    }

    function oz(WW, RW, MW) {
      const {
        drop: wW = 0,
        shift: CW = 0,
        torso: zR = 0,
        tilt: AW = 0,
        nod: bR = 0,
        cock: yR = 0,
        legs: NW = [0, 0],
        arms: eW = 0,
        spread: BW = 0
      } = RW, [tR, TW] = Iz(eW), [gR, iR] = Iz(BW), YW = -zR, JW = -AW, [PW, IW, oW] = function(WW, RW) {
        const [MW, wW, CW] = [-Pz[0], Pz[1], -Pz[2]], zR = MW * Math.cos(RW) - wW * Math.sin(RW), AW = MW * Math.sin(RW) + wW * Math.cos(RW);
        return [zR - MW, -(AW * Math.cos(WW) - CW * Math.sin(WW) - wW), AW * Math.sin(WW) + CW * Math.cos(WW) - CW]
      }(YW, JW), lW = MW([0, -wW, CW]);
      return {
        TorsoNode: {
          timeFraction: WW,
          position: MW([PW, IW - wW, oW + CW]),
          rotation: MW([YW, 0, JW])
        },
        HeadMesh: {
          timeFraction: WW,
          rotation: MW([-bR, 0, -yR])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: MW([-tR, 0, -gR])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: MW([-TW, 0, iR])
        },
        LegLeftMesh: {
          timeFraction: WW,
          position: lW,
          rotation: MW([-NW[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: WW,
          position: lW,
          rotation: MW([-NW[1], 0, 0])
        }
      }
    }
    var lz = MW(35678),
      Fz = MW(36537),
      fz = MW(36680);

    function Qz(WW, RW, MW) {
      var wW, CW;
      const zR = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return WW + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - WW) * MW
        },
        [AW, bR] = null !== (wW = WW.legs) && void 0 !== wW ? wW : [0, 0],
        [yR, NW] = null !== (CW = RW.legs) && void 0 !== CW ? CW : [0, 0];
      return {
        drop: zR(WW.drop, RW.drop),
        shift: zR(WW.shift, RW.shift),
        torso: zR(WW.torso, RW.torso),
        nod: zR(WW.nod, RW.nod),
        tilt: zR(WW.tilt, RW.tilt),
        legs: [zR(AW, yR), zR(bR, NW)],
        arms: zR(WW.arms, RW.arms),
        spread: zR(WW.spread, RW.spread)
      }
    }
    const rA = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      cA = iA(4400, !0, [
        [0, rA],
        [.16, {
          ...rA,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, rA],
        [.44, {
          ...rA,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Qz(rA, tA, .7)],
        [.66, Qz(rA, tA, .78)],
        [.74, Qz(rA, Tz, .65)],
        [.86, {
          ...rA,
          drop: .14
        }],
        [1, rA]
      ], "catmull-rom-spline"),
      Xz = {
        ...rA,
        drop: .14,
        torso: .3,
        spread: .4
      },
      jA = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      kA = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      aA = {
        caveGolem: cA,
        magmaGolem: iA(3600, !0, [
          [0, Xz],
          [.12, {
            ...Xz,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Xz,
            tilt: -.08
          }],
          [.4, {
            ...Xz,
            tilt: .06,
            drop: .11
          }],
          [.52, Qz(Xz, tA, .9)],
          [.62, Qz(Xz, Tz, .8)],
          [.7, Qz(Xz, Tz, .45)],
          [.78, Qz(Xz, Tz, .85)],
          [.9, {
            ...Xz,
            drop: .17
          }],
          [1, Xz]
        ], "catmull-rom-spline"),
        frostWraith: function(WW, RW, MW) {
          return Nz(Jz, WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, jA],
          [.14, {
            ...jA,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...jA,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...jA,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...jA,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...jA,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...jA,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...jA,
            rise: .16,
            tilt: -.04
          }],
          [1, jA]
        ], "catmull-rom-spline"),
        tikiTerror: function(WW, RW, MW) {
          return Nz(oz, WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, kA],
          [.16, {
            ...kA,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, kA],
          [.44, {
            ...kA,
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
            ...kA,
            drop: .1
          }],
          [1, kA]
        ], "catmull-rom-spline")
      },
      sz = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      dz = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      pz = Object.fromEntries(Object.entries(aA).map((WW => {
        let [RW, MW] = WW;
        return [RW, (0, fz.e)((0, lz.h)(MW), RW)]
      })));

    function hz(WW) {
      const RW = function(WW) {
        var RW;
        const MW = (0, Fz.d)(WW).poseRig;
        return null !== (RW = dz[WW]) && void 0 !== RW ? RW : void 0 === MW ? null : sz[MW]
      }(WW);
      return null === RW ? null : pz[RW]
    }

    function Uz(WW) {
      return {
        "--difficulty-colour": WW
      }
    }
    const Ez = (0, QW.lazy)((() => (0, yA.b)(MW.e(197).then((() => MW(38998))), (WW => WW.MobPreview))));

    function Vz(WW) {
      var RW, MW, wW;
      let {
        picker: CW,
        controller: zR
      } = WW;
      const {
        t: AW
      } = (0, FC.C)(), bR = UC(), {
        page: yR
      } = CW;
      return (0, QC.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: bR,
        onKeyDown: WW => {
          "ArrowLeft" === WW.key ? (WW.preventDefault(), WW.stopPropagation(), zR.previous()) : "ArrowRight" === WW.key ? (WW.preventDefault(), WW.stopPropagation(), zR.next()) : hC(WW)
        },
        style: Uz(yR.colour),
        children: [(0, QC.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, QC.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: CW.dungeonName
          }), (0, QC.jsx)(pC.l, {
            padIgnore: !0,
            onClick: zR.dismiss
          })]
        }), (0, QC.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, QC.jsx)(pC.h, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !CW.canPrevious,
              onClick: zR.previous,
              children: (0, QC.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, QC.jsx)(bA.e, {
                  name: "angle-up"
                })
              })
            }), (0, QC.jsxs)("div", {
              className: YC()("SkyblockBossPickerBoss", {
                Locked: !yR.unlocked
              }),
              children: [null !== yR.bossMobType && (0, QC.jsx)(QW.Suspense, {
                fallback: (0, QC.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, QC.jsx)(Ez, {
                  className: "SkyblockBossPickerModel",
                  mobType: yR.bossMobType,
                  variation: yR.bossMobVariation,
                  animation: null !== (RW = hz(yR.bossMobType)) && void 0 !== RW ? RW : void 0
                })
              }), null === yR.bossMobType && (0, QC.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, QC.jsx)(pC.h, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !CW.canNext,
              onClick: zR.next,
              children: (0, QC.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, QC.jsx)(bA.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, QC.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [yR.beaten && (0, QC.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), yR.label]
            }), (0, QC.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (MW = yR.bossName) && void 0 !== MW ? MW : "???"
            }), (0, QC.jsxs)("span", {
              className: YC()("SkyblockBossPickerRecord", {
                Locked: null !== yR.lockedHint
              }),
              children: [null !== yR.lockedHintHighlight && (0, QC.jsxs)(QC.Fragment, {
                children: [yR.lockedHintHighlight.before, (0, QC.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Uz(yR.lockedHintHighlight.colour),
                  children: [null !== yR.lockedHintHighlight.icon && (0, QC.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, QC.jsx)(IC.c, {
                      itemName: yR.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), yR.lockedHintHighlight.name]
                }), yR.lockedHintHighlight.after]
              }), null === yR.lockedHintHighlight && (null !== (wW = yR.lockedHint) && void 0 !== wW ? wW : yR.summary)]
            })]
          }), (0, QC.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: CW.pages.map((WW => (0, QC.jsx)("span", {
              className: YC()("SkyblockBossPickerDot", {
                Current: WW.current,
                Locked: !WW.unlocked
              }),
              style: Uz(WW.colour)
            }, WW.difficulty)))
          }), (0, QC.jsx)(pC.r, {
            className: "SkyblockBossPickerFight",
            disabled: !yR.unlocked,
            onClick: zR.enter,
            children: AW("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function mA(WW) {
      let {
        dungeon: RW,
        select: MW
      } = WW;
      return (0, QC.jsxs)(pC.h, {
        className: YC()("SkyblockDungeonCard", {
          Selected: RW.selected
        }),
        onClick: () => {
          MW(RW.id)
        },
        children: [(0, QC.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, QC.jsx)("strong", {
            children: RW.name
          }), (0, QC.jsx)("span", {
            children: RW.beatenSummary
          })]
        }), (0, QC.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: RW.difficulties.map((WW => (0, QC.jsxs)("span", {
            className: YC()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: WW.beaten
            }),
            style: Uz(WW.colour),
            title: WW.summary,
            children: [WW.beaten && (0, QC.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), WW.label]
          }, WW.difficulty)))
        })]
      })
    }

    function xA(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(NM, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsxs)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [MW.picker && (0, QC.jsx)(Vz, {
          picker: MW.picker,
          controller: RW
        }), !MW.picker && (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: wW("skyblockGame:dungeons")
              }), (0, QC.jsx)("p", {
                children: wW("skyblockGame:dungeonsIntro")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: RW.dismiss
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, QC.jsx)("div", {
              className: "SkyblockDungeonList",
              children: MW.dungeons.map((WW => (0, QC.jsx)(mA, {
                dungeon: WW,
                select: RW.select
              }, WW.id)))
            }), MW.detail && (0, QC.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, QC.jsx)("h3", {
                children: MW.detail.name
              }), (0, QC.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: MW.detail.difficulties.map((WW => (0, QC.jsxs)("li", {
                  className: YC()("SkyblockDungeonRecord", {
                    Beaten: WW.beaten
                  }),
                  children: [(0, QC.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Uz(WW.colour),
                    children: [WW.beaten && (0, QC.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), WW.label]
                  }), (0, QC.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: WW.summary
                  })]
                }, WW.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function vA(WW) {
      let {
        collection: RW,
        select: MW
      } = WW;
      return (0, QC.jsxs)(pC.h, {
        className: YC()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: RW.selected,
          Locked: RW.locked
        }),
        ariaPressed: RW.selected,
        onClick: () => {
          MW(RW.id)
        },
        children: [(0, QC.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, QC.jsx)(IC.c, {
            itemName: RW.icon,
            amount: 0
          })
        }), (0, QC.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, QC.jsx)("strong", {
              children: RW.name
            }), (0, QC.jsx)("span", {
              children: RW.tier
            })]
          }), (0, QC.jsx)(EC, {
            percent: RW.percent,
            label: `${RW.name}: ${RW.progress}`
          }), (0, QC.jsx)("span", {
            className: "SkyblockSkillXp",
            children: RW.progress
          })]
        })]
      })
    }

    function Kz(WW) {
      let {
        collection: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)();
      return (0, QC.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, QC.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, QC.jsx)(IC.c, {
            itemName: RW.icon,
            amount: 0
          })
        }), (0, QC.jsx)("h3", {
          children: RW.name
        }), (0, QC.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: RW.tier
        }), (0, QC.jsx)("p", {
          children: RW.locked ? MW("skyblockGame:collectionLocked") : RW.count
        }), null !== RW.nextReward && (0, QC.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, QC.jsx)("strong", {
            children: MW("skyblockGame:collectionNextReward")
          }), (0, QC.jsx)("span", {
            children: RW.nextReward
          })]
        }), (0, QC.jsx)(EC, {
          percent: RW.percent,
          label: RW.progress
        }), (0, QC.jsx)("p", {
          children: RW.progress
        })]
      })
    }

    function uz(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(aw, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: wW("skyblockGame:collections")
              }), (0, QC.jsxs)("p", {
                children: [wW("skyblockGame:collectionsIntro"), " ", MW.tiersUnlocked]
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: RW.dismiss
            })]
          }), (0, QC.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: MW.categories.map((WW => (0, QC.jsxs)(pC.h, {
              className: YC()("SkyblockCollectionCategory", {
                Selected: WW.selected
              }),
              ariaPressed: WW.selected,
              padTabSelected: WW.selected,
              onClick: () => {
                RW.selectCategory(WW.id)
              },
              children: [(0, QC.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, QC.jsx)(IC.c, {
                  itemName: WW.icon,
                  amount: 0
                })
              }), (0, QC.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, QC.jsx)("strong", {
                  children: WW.label
                }), (0, QC.jsx)("span", {
                  children: WW.tiers
                })]
              })]
            }, WW.id)))
          }), (0, QC.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, QC.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: MW.collections.map((WW => (0, QC.jsx)(vA, {
                collection: WW,
                select: RW.select
              }, WW.id)))
            }), MW.detail && (0, QC.jsx)(Kz, {
              collection: MW.detail
            })]
          })]
        })
      }) : null
    }
    const Oz = ["completed", "active", "available", "locked"],
      nz = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Gz(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(uM, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: wW("skyblockDevQuests:title")
              }), (0, QC.jsx)("p", {
                children: wW("skyblockDevQuests:intro")
              })]
            }), (0, QC.jsx)(pC.l, {
              onClick: RW.dismiss
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Oz.map((WW => (0, QC.jsx)("span", {
              className: YC()("SkyblockQuestGraphLegendState", WW),
              children: wW(`skyblockDevQuests:state_${WW}`)
            }, WW))), nz.map((WW => (0, QC.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, QC.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, QC.jsx)("line", {
                  className: YC()("SkyblockQuestGraphEdge", WW),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), wW(`skyblockDevQuests:edge_${WW}`)]
            }, WW)))]
          }), (0, QC.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, QC.jsxs)("div", {
              className: YC()("SkyblockQuestGraphCanvas", {
                Planning: MW.planning
              }),
              style: {
                width: MW.width,
                height: MW.height
              },
              children: [(0, QC.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: MW.width,
                height: MW.height,
                "aria-hidden": "true",
                children: [(0, QC.jsx)("defs", {
                  children: (0, QC.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, QC.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), MW.edges.map((WW => (0, QC.jsx)("path", {
                  className: YC()("SkyblockQuestGraphEdge", WW.kind, {
                    InPlan: WW.inPlan
                  }),
                  d: WW.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, WW.key)))]
              }), MW.nodes.map((WW => (0, QC.jsxs)("button", {
                type: "button",
                className: YC()("SkyblockQuestGraphNode", WW.state, {
                  InPlan: WW.inPlan,
                  Hovered: WW.hovered
                }),
                style: {
                  left: WW.left,
                  top: WW.top,
                  width: 190,
                  height: 52
                },
                title: WW.id,
                onMouseEnter: () => {
                  RW.hover(WW.id)
                },
                onMouseLeave: () => {
                  RW.hover(null)
                },
                onFocus: () => {
                  RW.hover(WW.id)
                },
                onBlur: () => {
                  RW.hover(null)
                },
                onClick: () => {
                  RW.jump(WW.id)
                },
                children: [(0, QC.jsx)("strong", {
                  children: WW.name
                }), (0, QC.jsx)("span", {
                  children: WW.detail
                })]
              }, WW.id)))]
            })
          })]
        })
      }) : null
    }
    const Lz = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Hz = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${ww}ms`,
        "--forge-duration": "2150ms"
      },
      Dz = Array.from({
        length: 18
      }, ((WW, RW) => ({
        "--ember-left": `${(4+92*(.618034*RW%1)).toFixed(1)}%`,
        "--ember-size": 3 + RW % 3 * 2 + "px",
        "--ember-drift": 14 * (RW % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*RW%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*RW%8).toFixed(2)}s`
      })));

    function qA(WW) {
      if (WW.style.removeProperty("--part-size"), null === WW.parentElement || "wrap" === getComputedStyle(WW.parentElement).flexWrap) return;
      const RW = [...WW.children],
        MW = getComputedStyle(WW),
        wW = parseFloat(MW.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        CW = (WW.clientHeight - parseFloat(MW.rowGap) * (RW.length - 1)) / RW.length,
        zR = RW.map((WW => {
          const RW = getComputedStyle(WW),
            MW = WW.querySelector("h3"),
            zR = WW.querySelector(".SkyblockForgeParts");
          if (null === MW || null === zR) return wW;
          const AW = CW - parseFloat(RW.paddingTop) - parseFloat(RW.paddingBottom) - MW.offsetHeight - parseFloat(getComputedStyle(MW).marginBottom),
            bR = parseFloat(getComputedStyle(zR).columnGap),
            yR = zR.children.length;
          let NW = 0;
          for (let wW = 1; wW <= yR; wW++) {
            const WW = Math.ceil(yR / wW);
            NW = Math.max(NW, Math.min((zR.clientWidth - bR * (wW - 1)) / wW, (AW - bR * (WW - 1)) / WW))
          }
          return NW
        }));
      WW.style.setProperty("--part-size", `${Math.floor(Math.max(wW,Math.min(...zR)))}px`)
    }

    function Zz(WW) {
      var RW, MW, wW, zR, AW;
      let {
        controller: bR
      } = WW;
      const yR = (0, fC.i)(ew, bR.getSnapshot()),
        {
          t: NW
        } = (0, FC.C)(),
        eW = UC(),
        BW = function() {
          const WW = (0, QW.useRef)(null),
            RW = (0, QW.useRef)(null);
          return (0, QW.useLayoutEffect)((() => {
            null !== WW.current && qA(WW.current)
          })), (0, QW.useCallback)((MW => {
            var wW;
            null === (wW = RW.current) || void 0 === wW || wW.disconnect(), RW.current = null, WW.current = MW, null !== MW && (RW.current = new ResizeObserver((() => {
              qA(MW)
            })), RW.current.observe(MW))
          }), [])
        }(),
        tR = function(WW) {
          const RW = (0, QW.useRef)(null);
          return (0, QW.useLayoutEffect)((() => {
            const WW = RW.current;
            if (null !== WW) {
              WW.style.removeProperty("font-size");
              for (let RW = 1.7; RW > 1.1 && WW.scrollWidth > WW.clientWidth; RW -= .1) WW.style.fontSize = RW - .1 + "rem"
            }
          }), [WW]), (0, QW.useCallback)((WW => {
            RW.current = WW
          }), [])
        }(null === (RW = yR.preview) || void 0 === RW ? void 0 : RW.name),
        TW = (0, QW.useRef)(null),
        gR = (0, QW.useRef)({}),
        iR = yR.forging,
        YW = null !== (MW = null === iR || void 0 === iR ? void 0 : iR.preview.tier) && void 0 !== MW ? MW : 0,
        JW = null !== (wW = null === iR || void 0 === iR ? void 0 : iR.preview.named) && void 0 !== wW && wW,
        PW = (0, QW.useMemo)((() => {
          return null === iR ? null : {
            flames: (WW = YW, RW = JW, Array.from({
              length: 26 + 6 * WW + (RW ? 20 : 0)
            }, ((WW, RW) => {
              const MW = RW < 6,
                wW = Math.random() * Math.PI * 2,
                CW = MW ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                zR = Math.cos(wW) * CW,
                AW = Math.sin(wW) * CW - 2 - 3 * Math.random(),
                bR = Math.random(),
                [yR, NW, eW] = MW ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : bR < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : bR < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [bR < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": yR,
                "--x0": `${(.15*zR).toFixed(2)}rem`,
                "--y0": `${(.15*AW).toFixed(2)}rem`,
                "--x": `${zR.toFixed(2)}rem`,
                "--y": `${AW.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${NW.toFixed(2)}rem`,
                "--duration": `${Math.round(eW)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Aw(YW, JW)
          };
          var WW, RW
        }), [null === iR || void 0 === iR ? void 0 : iR.id]);
      if (!yR.enabled) return null;
      const IW = yR.preview,
        oW = yR.arriving,
        lW = null !== oW && !oW.sameSword,
        FW = null !== IW && (0, QC.jsx)(IC.c, {
          itemName: IW.baseSword,
          amount: 0,
          enchantmentTier: IW.enchantmentTier
        });
      return (0, QC.jsx)(dC.b, {
        show: yR.open,
        close: bR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: eW,
          onKeyDown: hC,
          children: [(0, QC.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Dz.map(((WW, RW) => (0, QC.jsx)("span", {
              style: WW
            }, RW)))
          }), (0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: NW("skyblockGame:forgeTitle")
              }), (0, QC.jsx)("p", {
                children: NW("skyblockGame:forgeIntro")
              })]
            }), (0, QC.jsx)(pC.l, {
              onClick: bR.dismiss
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, QC.jsx)("div", {
              ref: BW,
              className: YC()("SkyblockForgeSlots", {
                Locked: null !== iR
              }),
              children: yR.slots.map((WW => (0, QC.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, QC.jsx)("h3", {
                  children: WW.label
                }), (0, QC.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: WW.parts.map((RW => (0, QC.jsx)("button", {
                    type: "button",
                    className: YC()("SkyblockForgePart", {
                      Selected: RW.selected,
                      Missing: RW.placeholder
                    }),
                    disabled: RW.placeholder,
                    title: RW.placeholder ? NW("skyblockGame:forgePickParts") : RW.itemName,
                    "aria-pressed": RW.selected,
                    onClick: () => {
                      bR.select(WW.kind, RW.material)
                    },
                    children: (0, QC.jsx)(IC.c, {
                      itemName: RW.itemName,
                      amount: RW.owned
                    })
                  }, RW.material)))
                })]
              }, WW.kind)))
            }), (0, QC.jsxs)("div", {
              className: YC()("SkyblockForgeAnvil", {
                Named: null === IW || void 0 === IW ? void 0 : IW.named
              }),
              style: {
                "--tier": null === IW ? "transparent" : CW.lb[IW.enchantmentTier]
              },
              children: [(0, QC.jsxs)("div", {
                className: YC()("SkyblockForgeAltar", {
                  Forging: null !== iR
                }),
                style: null === iR ? void 0 : Hz,
                children: [(0, QC.jsxs)("div", {
                  className: YC()("SkyblockForgeMount", {
                    Arrive: null !== oW
                  }),
                  children: [null === IW && (0, QC.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, QC.jsx)(IC.c, {
                      itemName: yR.unformedSword,
                      amount: 0
                    })
                  }), null !== IW && (0, QC.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== IW && null === iR && (0, QC.jsx)("div", {
                    ref: TW,
                    className: "SkyblockForgeFloat",
                    children: (0, QC.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: FW
                    })
                  }), null !== IW && (0, QC.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: zC.map(((WW, RW) => (0, QC.jsx)("span", {
                      className: YC()({
                        Rune: "" !== WW.rune
                      }),
                      style: WW.style,
                      children: WW.rune
                    }, RW)))
                  }), null !== iR && null !== PW && (0, QC.jsxs)(QC.Fragment, {
                    children: [(0, QC.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: PW.flames.map(((WW, RW) => (0, QC.jsx)("span", {
                        style: WW
                      }, RW)))
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: gR.current,
                      children: (0, QC.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: FW
                      })
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (YW >= 4 || JW) && (0, QC.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: PW.sparks.map(((WW, RW) => (0, QC.jsx)("span", {
                        style: WW
                      }, RW)))
                    }), (0, QC.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, QC.jsx)("p", {
                  className: YC()("SkyblockForgeStatus", null === (zR = yR.status) || void 0 === zR ? void 0 : zR.tone),
                  children: null === (AW = yR.status) || void 0 === AW ? void 0 : AW.text
                })]
              }), null === IW && (0, QC.jsx)("p", {
                className: YC()("SkyblockForgeName Waiting", {
                  ArriveText: lW
                }),
                children: NW(yR.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== IW && (0, QC.jsx)("h3", {
                ref: tR,
                className: YC()("SkyblockForgeName", {
                  ArriveText: lW
                }),
                title: IW.name,
                children: IW.name
              }), (null === IW || void 0 === IW ? void 0 : IW.named) && (0, QC.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: NW("skyblockGame:forgeSecret")
              }), (0, QC.jsxs)(pC.r, {
                className: "SkyblockForgeButton",
                disabled: !yR.canForge,
                title: null === IW ? void 0 : NW("skyblockGame:forgeCoalOwned", {
                  owned: String(yR.coalOwned)
                }),
                onClick: () => {
                  gR.current = function(WW) {
                    const RW = null === WW ? "none" : getComputedStyle(WW).transform,
                      MW = new DOMMatrixReadOnly("none" === RW ? void 0 : RW);
                    return {
                      "--settle-y": `${MW.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(MW.b,MW.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(TW.current), Nw(), bR.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [NW("skyblockGame:forgeButton"), null !== IW && (0, QC.jsxs)("span", {
                  className: YC()("SkyblockForgeCost", {
                    Short: IW.coalShort
                  }),
                  children: [(0, QC.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, QC.jsx)(IC.c, {
                      itemName: HM.b,
                      amount: 0
                    })
                  }), IW.coalCost]
                })]
              })]
            }), (0, QC.jsxs)("div", {
              className: YC()("SkyblockForgeDetails", {
                Named: null === IW || void 0 === IW ? void 0 : IW.named
              }),
              children: [(0, QC.jsx)("p", {
                className: YC()("SkyblockForgeLore", {
                  ArriveText: lW
                }),
                title: null === IW || void 0 === IW ? void 0 : IW.lore,
                children: null === IW || void 0 === IW ? void 0 : IW.lore
              }), (0, QC.jsxs)("dl", {
                className: YC()("SkyblockForgeStats", {
                  ArriveText: lW
                }),
                children: [null === IW && Lz.map((WW => (0, QC.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, QC.jsx)("dt", {
                    children: NW(WW)
                  }), (0, QC.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, WW))), null === IW || void 0 === IW ? void 0 : IW.stats.map((WW => (0, QC.jsxs)("div", {
                  className: YC()("SkyblockForgeStat", {
                    Better: WW.better
                  }),
                  children: [(0, QC.jsx)("dt", {
                    children: WW.label
                  }), (0, QC.jsx)("dd", {
                    children: WW.value
                  })]
                }, WW.label)))]
              }), (0, QC.jsx)("ul", {
                className: YC()("SkyblockForgeEffects", {
                  ArriveText: lW
                }),
                children: null === IW || void 0 === IW ? void 0 : IW.effects.map((WW => (0, QC.jsx)("li", {
                  children: WW
                }, WW)))
              })]
            })]
          })]
        })
      })
    }
    const Sz = "Doom Rivet",
      WA = "Doom Crest";

    function RA(WW) {
      let {
        itemName: RW,
        amount: MW,
        owned: wW
      } = WW;
      return (0, QC.jsxs)("span", {
        className: YC()("SkyblockSmugglerPrice", {
          Short: MW > wW
        }),
        children: [(0, QC.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, QC.jsx)(IC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, QC.jsx)("span", {
          children: MW
        })]
      })
    }

    function MA(WW) {
      return WW.justBought ? "skyblockGame:smugglerJustBought" : WW.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function wA(WW) {
      let {
        deal: RW,
        view: MW,
        buy: wW
      } = WW;
      const {
        t: CW
      } = (0, FC.C)();
      return (0, QC.jsxs)("div", {
        className: YC()("SkyblockSmugglerPocket", {
          Bought: RW.justBought,
          Unaffordable: !RW.affordable,
          SoldOut: RW.soldOut && !RW.justBought
        }),
        children: [(0, QC.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, QC.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, QC.jsx)(IC.c, {
            itemName: RW.itemName,
            amount: 0,
            enchantmentTier: RW.enchantmentTier
          }), RW.amount > 1 && (0, QC.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: CW("skyblockGame:smugglerAmount", {
              amount: RW.amount
            })
          })]
        }), (0, QC.jsx)("h3", {
          children: RW.displayName
        }), (0, QC.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [RW.rivets > 0 && (0, QC.jsx)(RA, {
              itemName: Sz,
              amount: RW.rivets,
              owned: MW.rivetsOwned
            }), RW.crests > 0 && (0, QC.jsx)(RA, {
              itemName: WA,
              amount: RW.crests,
              owned: MW.crestsOwned
            })]
          }), (0, QC.jsx)(pC.h, {
            className: "SkyblockSmugglerBuy",
            disabled: RW.soldOut || !RW.affordable || MW.pending,
            onClick: () => {
              wW(RW.slot)
            },
            children: CW(MA(RW))
          })]
        })]
      }, RW.justBought ? MW.boughtCount : 0)
    }

    function CA(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(Tw, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, QC.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, QC.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: wW("skyblockGame:smugglerTitle")
              }), (0, QC.jsx)("p", {
                children: wW("skyblockGame:smugglerIntro")
              })]
            }), (0, QC.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, QC.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, QC.jsx)(RA, {
                  itemName: Sz,
                  amount: MW.rivetsOwned,
                  owned: MW.rivetsOwned
                }), (0, QC.jsx)(RA, {
                  itemName: WA,
                  amount: MW.crestsOwned,
                  owned: MW.crestsOwned
                })]
              }), (0, QC.jsx)(pC.l, {
                onClick: RW.dismiss
              })]
            })]
          }), (0, QC.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: MW.deals.map((WW => (0, QC.jsx)(wA, {
              deal: WW,
              view: MW,
              buy: RW.buy
            }, WW.slot)))
          }), (0, QC.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, QC.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: MW.rotatesText
            }), null !== MW.status && (0, QC.jsx)("span", {
              className: YC()("SkyblockSmugglerStatus", MW.status.tone),
              children: MW.status.text
            })]
          })]
        })
      }) : null
    }

    function zb(WW) {
      let {
        phase: RW,
        className: MW
      } = WW;
      return (0, QC.jsx)("span", {
        className: YC()("SkyblockMoon", `Moon-${RW}`, MW),
        "aria-hidden": "true"
      })
    }

    function AA(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(Yw, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)();
      return MW.enabled ? (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: YC()("SkyblockPassageChip", MW.open && "Open"),
          "aria-label": wW("skyblockGame:passageChipLabel", {
            phase: MW.phaseName
          }),
          title: wW("skyblockGame:passageChipLabel", {
            phase: MW.phaseName
          }),
          onMouseDown: WW => {
            WW.preventDefault()
          },
          onClick: RW.toggle,
          children: (0, QC.jsx)(zb, {
            phase: MW.phase
          }, MW.phase)
        })
      }) : null
    }

    function bb(WW) {
      let {
        fish: RW
      } = WW;
      return (0, QC.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, QC.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, QC.jsx)(IC.c, {
            itemName: RW.itemName,
            amount: 0
          })
        }), (0, QC.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: RW.displayName
          }), (0, QC.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: RW.where
          })]
        })]
      })
    }

    function yb(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(Yw, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, QC.jsx)(zb, {
              phase: MW.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: wW("skyblockGame:passageTitle")
              }), (0, QC.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: MW.phaseName
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: RW.dismiss
            })]
          }), (0, QC.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: wW("skyblockGame:passageIntro")
          }), (0, QC.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, QC.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, QC.jsx)("h3", {
                children: wW("skyblockGame:passageVisiting")
              }), (0, QC.jsx)("ul", {
                className: "SkyblockPassageList",
                children: MW.visitors.map((WW => (0, QC.jsx)(bb, {
                  fish: WW
                }, WW.itemName)))
              })]
            }), (0, QC.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== MW.resting && (0, QC.jsxs)(QC.Fragment, {
                children: [(0, QC.jsx)("h3", {
                  children: wW("skyblockGame:passageResting")
                }), (0, QC.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, QC.jsx)(bb, {
                    fish: MW.resting
                  })
                })]
              }), (0, QC.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, QC.jsx)(zb, {
                  phase: MW.nextPhase
                }), (0, QC.jsx)("span", {
                  children: MW.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function NA() {
      return (0, QC.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((WW => (0, QC.jsx)("i", {
          style: {
            "--sparkle-index": WW
          }
        }, WW)))
      })
    }

    function eA(WW) {
      var RW;
      let {
        charm: MW,
        view: wW,
        controller: CW
      } = WW;
      const {
        t: zR
      } = (0, FC.C)(), AW = wW.shop, bR = (null === (RW = wW.sparkle) || void 0 === RW ? void 0 : RW.id) === MW.id;
      return (0, QC.jsxs)("li", {
        className: YC()("SkyblockLampLightCharm", MW.owned && "Owned", MW.socketed && "Socketed"),
        children: [bR && (0, QC.jsx)(NA, {}, wW.sparkle.count), (0, QC.jsx)("h4", {
          children: MW.name
        }), (0, QC.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: MW.effect
        }), (0, QC.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: MW.lines.map((WW => (0, QC.jsxs)("li", {
            className: YC()("SkyblockLampLightOddsLine", "better" === WW.tone ? "Better" : "worse" === WW.tone ? "Worse" : "Same"),
            children: [(0, QC.jsx)("span", {
              className: "Before",
              children: WW.before
            }), (0, QC.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, QC.jsx)("span", {
              className: "After",
              children: WW.after
            })]
          }, WW.label)))
        }), (0, QC.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: MW.owned ? MW.socketed ? (0, QC.jsxs)(QC.Fragment, {
            children: [(0, QC.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: zR("skyblockGame:lampLightSocketed")
            }), (0, QC.jsx)(pC.O, {
              disabled: !wW.canCommand,
              ariaLabel: zR("skyblockGame:lampLightRemoveLabel", {
                charm: MW.name
              }),
              onClick: () => {
                CW.socket(null)
              },
              children: zR("skyblockGame:lampLightRemove")
            })]
          }) : (0, QC.jsx)(pC.h, {
            disabled: !wW.canCommand || !AW.heldRod,
            ariaLabel: zR("skyblockGame:lampLightSocketLabel", {
              charm: MW.name
            }),
            onClick: () => {
              CW.socket(MW.id)
            },
            children: zR("skyblockGame:lampLightSocket")
          }) : (0, QC.jsx)(pC.h, {
            disabled: !wW.canCommand || !MW.affordable,
            ariaLabel: zR("skyblockGame:lampLightBuyLabel", {
              item: MW.name,
              cost: MW.cost
            }),
            onClick: () => {
              CW.buy(MW.id)
            },
            children: MW.cost
          })
        })]
      })
    }

    function BA(WW) {
      var RW;
      let {
        tint: MW,
        view: wW,
        controller: CW
      } = WW;
      const {
        t: zR
      } = (0, FC.C)();
      return (0, QC.jsxs)("li", {
        className: YC()("SkyblockLampLightTint", MW.wearing && "Wearing"),
        style: {
          "--tint-colour": MW.colour
        },
        children: [(null === (RW = wW.sparkle) || void 0 === RW ? void 0 : RW.id) === MW.id && (0, QC.jsx)(NA, {}, wW.sparkle.count), (0, QC.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, QC.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: MW.name
        }), MW.wearing ? (0, QC.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: zR("skyblockGame:lampLightWearing")
        }) : (0, QC.jsx)(pC.h, {
          disabled: !wW.canCommand || !MW.owned && !MW.affordable,
          ariaLabel: MW.owned ? zR("skyblockGame:lampLightWearLabel", {
            tint: MW.name
          }) : zR("skyblockGame:lampLightBuyLabel", {
            item: MW.name,
            cost: MW.cost
          }),
          onClick: () => {
            MW.owned ? CW.wearTint(MW.id) : CW.buy(MW.id)
          },
          children: MW.owned ? zR("skyblockGame:lampLightWear") : MW.cost
        })]
      })
    }

    function tb(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(aC, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = MW.shop;
      return (0, QC.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, QC.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: MW.balance
          }), (0, QC.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": MW.releasing,
            className: YC()("SkyblockLampLightSwitch", MW.releasing && "On"),
            disabled: MW.releasing ? "ready" !== MW.status : !MW.canCommand,
            onClick: () => {
              RW.setRelease(!MW.releasing)
            },
            children: [(0, QC.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, QC.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), wW("skyblockGame:lampLightRelease")]
          }), (0, QC.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: wW("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== MW.notice && (0, QC.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: MW.notice
        }), null !== CW && (0, QC.jsxs)(QC.Fragment, {
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, QC.jsx)("h3", {
              children: wW("skyblockGame:lampLightCharms")
            }), (0, QC.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: CW.oddsFor
            }), (0, QC.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((WW => (0, QC.jsx)("button", {
                type: "button",
                "aria-pressed": MW.situation === WW,
                className: YC()("SkyblockLampLightSituation", MW.situation === WW && "Selected"),
                onClick: () => {
                  RW.setSituation(WW)
                },
                children: wW("open" === WW ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, WW)))
            })]
          }), !CW.heldRod && (0, QC.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: wW("skyblockGame:lampLightHoldRod")
          }), (0, QC.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: CW.charms.map((WW => (0, QC.jsx)(eA, {
              charm: WW,
              view: MW,
              controller: RW
            }, WW.id)))
          }), (0, QC.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, QC.jsx)("h3", {
              children: wW("skyblockGame:lampLightTints")
            })
          }), (0, QC.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, QC.jsxs)("li", {
              className: YC()("SkyblockLampLightTint", "Islands", CW.wearingIslandColours && "Wearing"),
              children: [(0, QC.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, QC.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: wW("skyblockGame:lampLightIslandColours")
              }), CW.wearingIslandColours ? (0, QC.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: wW("skyblockGame:lampLightWearing")
              }) : (0, QC.jsx)(pC.h, {
                disabled: !MW.canCommand,
                ariaLabel: wW("skyblockGame:lampLightWearLabel", {
                  tint: wW("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  RW.wearTint(null)
                },
                children: wW("skyblockGame:lampLightWear")
              })]
            }), CW.tints.map((WW => (0, QC.jsx)(BA, {
              tint: WW,
              view: MW,
              controller: RW
            }, WW.id)))]
          })]
        })]
      })
    }

    function TA(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(aC, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)();
      return MW.releasing ? (0, QC.jsx)(PC.g, {
        children: (0, QC.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            RW.setRelease(!1)
          },
          children: [(0, QC.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, QC.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [wW("skyblockGame:lampLightReleasing"), " \xb7 ", MW.balance]
          }), (0, QC.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: wW("skyblockGame:lampLightKeepCatches")
          }), null !== MW.gained && (0, QC.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: MW.gained.text
          }, MW.gained.count)]
        })
      }) : null
    }

    function gb(WW) {
      let {
        island: RW,
        view: MW,
        aim: wW
      } = WW;
      const {
        t: CW
      } = (0, FC.C)(), zR = RW.featuredFish;
      return (0, QC.jsxs)("li", {
        className: YC()("SkyblockKeepersChairIsland", `Island-${RW.id}`, RW.favoured && "Aimed", !RW.relit && "Dark"),
        children: [(0, QC.jsx)("h3", {
          children: RW.name
        }), RW.relit && null !== zR ? (0, QC.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: CW("skyblockGame:keepersChairTideNotice")
          }), (0, QC.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, QC.jsx)(IC.c, {
              itemName: zR.itemName,
              amount: 0
            })
          }), (0, QC.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: zR.displayName
          })]
        }) : (0, QC.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, QC.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: CW("skyblockGame:keepersChairDark")
          })
        }), RW.relit && (RW.favoured ? (0, QC.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: CW("skyblockGame:keepersChairAimed")
        }) : (0, QC.jsx)(pC.h, {
          className: "SkyblockKeepersChairAim",
          disabled: !MW.canAim,
          ariaLabel: CW("skyblockGame:keepersChairAimLabel", {
            island: RW.name
          }),
          onClick: () => {
            wW(RW.id)
          },
          children: CW("skyblockGame:keepersChairAim")
        }))]
      }, RW.favoured ? MW.aimedCount : 0)
    }

    function ib(WW) {
      let {
        controller: RW,
        lampLight: MW
      } = WW;
      const wW = (0, fC.i)(Fw, RW.getSnapshot()),
        CW = (0, fC.i)(aC, MW.getSnapshot()),
        [zR, AW] = (0, QW.useState)("lamp"),
        {
          t: bR
        } = (0, FC.C)(),
        yR = UC();
      if (!wW.enabled) return null;
      const NW = "light" === zR && CW.enabled;
      return (0, QC.jsx)(dC.b, {
        show: wW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: YC()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", NW && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: yR,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: bR("skyblockGame:keepersChairTitle")
              }), (0, QC.jsx)("p", {
                children: bR(NW ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              ariaLabel: bR("skyblockGame:keepersChairClose"),
              onClick: RW.dismiss
            })]
          }), CW.enabled && (0, QC.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((WW => (0, QC.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === WW === NW,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === WW === NW ? "true" : void 0,
              className: YC()("SkyblockKeepersChairTab", "light" === WW === NW && "Selected"),
              onClick: () => {
                AW(WW)
              },
              children: [bR("lamp" === WW ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === WW && (0, QC.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: CW.balance
              })]
            }, WW)))
          }), NW ? (0, QC.jsx)(tb, {
            controller: MW
          }) : (0, QC.jsx)(YA, {
            view: wW,
            controller: RW
          })]
        })
      })
    }

    function YA(WW) {
      let {
        view: RW,
        controller: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)();
      return (0, QC.jsxs)(QC.Fragment, {
        children: [(0, QC.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: RW.islands.map((WW => (0, QC.jsx)(gb, {
            island: WW,
            view: RW,
            aim: MW.aim
          }, WW.id)))
        }), null !== RW.almanac && (0, QC.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: wW("skyblockGame:passageTitle")
          }), (0, QC.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, QC.jsx)(zb, {
              phase: RW.almanac.phase
            }), RW.almanac.phaseName]
          }), (0, QC.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, QC.jsx)(zb, {
              phase: RW.almanac.nextPhase
            }), RW.almanac.next]
          })]
        }), (0, QC.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: wW("skyblockGame:keepersChairFavour")
          }), RW.aimed && (0, QC.jsx)(pC.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !RW.canAim,
            onClick: () => {
              MW.aim(null)
            },
            children: wW("skyblockGame:keepersChairRest")
          })]
        }), null !== RW.status && (0, QC.jsx)("p", {
          className: YC()("SkyblockKeepersChairStatus", "refused" === RW.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: RW.status.text
        })]
      })
    }

    function JA(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(Qw, RW.getSnapshot());
      if (!wW.enabled) return null;
      const CW = wW.freshCount > 0 ? MW("skyblockGame:reachLogOpenNews", {
        count: wW.freshCount
      }) : MW("skyblockGame:reachLogOpen");
      return (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsxs)("button", {
          type: "button",
          className: YC()("SkyblockReachLogButton", wW.freshCount > 0 && "HasNews", wW.pending && "Pending"),
          "aria-label": CW,
          title: CW,
          onClick: RW.ask,
          children: [wW.news && (0, QC.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${wW.newsToken}`), (0, QC.jsx)("span", {
            className: YC()("SkyblockReachLogIcon", wW.news && "Jump"),
            "aria-hidden": "true",
            children: (0, QC.jsx)(IC.c, {
              itemName: cC,
              amount: 0
            })
          }, `icon:${wW.newsToken}`), wW.freshCount > 0 && (0, QC.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: wW.freshCount
          })]
        })
      })
    }

    function PA(WW) {
      let {
        gift: RW
      } = WW;
      return (0, QC.jsx)("li", {
        className: YC()("SkyblockRegularsGift", RW.given && "Given"),
        children: RW.text
      })
    }

    function IA(WW) {
      let {
        regular: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)();
      return (0, QC.jsxs)("li", {
        className: YC()("SkyblockRegularsCard", RW.tagged ? "Tagged" : "Untagged", RW.resting && "Resting"),
        children: [(0, QC.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: RW.fishName,
            children: (0, QC.jsx)(IC.c, {
              itemName: RW.itemName,
              amount: 0
            })
          }), (0, QC.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, QC.jsx)("h3", {
              children: RW.name
            }), (0, QC.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: RW.fishName
            })]
          })]
        }), (0, QC.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: RW.line
        }), (0, QC.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: RW.size
          }), RW.tagged && (0, QC.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: RW.resting ? MW("skyblockGame:regularsResting") : RW.meetings
          })]
        }), (0, QC.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: RW.chance
        }), (0, QC.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: RW.gifts.map((WW => (0, QC.jsx)(PA, {
            gift: WW
          }, WW.text)))
        }), RW.history.length > 0 && (0, QC.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: RW.history.map(((WW, RW) => (0, QC.jsx)("li", {
            children: WW
          }, RW)))
        })]
      })
    }

    function oA(WW) {
      let {
        controller: RW,
        island: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)(), CW = (0, fC.i)(Dw, RW.getSnapshot()), zR = CW.islands.find((WW => WW.id === MW));
      if (!CW.enabled || void 0 === zR) return null;
      const AW = wW("skyblockGame:regularsOpen");
      return (0, QC.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": AW,
        title: AW,
        onClick: () => {
          RW.openIsland(MW)
        },
        children: [(0, QC.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: wW("skyblockGame:regularsTitle")
        }), zR.regulars.map((WW => (0, QC.jsx)("span", {
          className: YC()("SkyblockRegularsStripIcon", WW.tagged && "Tagged"),
          title: WW.name,
          children: (0, QC.jsx)(IC.c, {
            itemName: WW.itemName,
            amount: 0
          })
        }, WW.id)))]
      })
    }

    function lA(WW) {
      var RW;
      let {
        controller: MW
      } = WW;
      const wW = (0, fC.i)(Dw, MW.getSnapshot()),
        {
          t: CW
        } = (0, FC.C)(),
        zR = UC();
      if (!wW.enabled) return null;
      const AW = null !== (RW = wW.islands.find((WW => WW.id === wW.selected))) && void 0 !== RW ? RW : null;
      return (0, QC.jsx)(dC.b, {
        show: wW.open,
        close: MW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: zR,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: CW("skyblockGame:regularsTitle")
              }), (0, QC.jsx)("p", {
                children: CW("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: MW.dismiss
            })]
          }), (0, QC.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: wW.islands.map((WW => {
              const RW = WW.id === wW.selected;
              return (0, QC.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": RW,
                "data-pad-tab": !0,
                "data-pad-selected": RW ? "true" : void 0,
                className: YC()("SkyblockReachLogTab", `Island-${WW.id}`, RW && "Selected", WW.charm.given && "GoldPage"),
                onClick: () => {
                  MW.selectIsland(WW.id)
                },
                children: (0, QC.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: WW.name
                })
              }, WW.id)
            }))
          }), (0, QC.jsxs)("div", {
            className: YC()("SkyblockRegularsPage", null !== AW && `Island-${AW.id}`),
            role: "tabpanel",
            children: [(0, QC.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: CW("skyblockGame:regularsHow")
            }), null !== AW && (0, QC.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: AW.regulars.map((WW => (0, QC.jsx)(IA, {
                regular: WW
              }, WW.id)))
            })]
          }), null !== AW && (0, QC.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, QC.jsx)("span", {
              className: YC()("SkyblockRegularsCharm", AW.charm.given && "Given"),
              children: AW.charm.text
            })
          })]
        })
      })
    }
    const FA = [{
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
      fA = Array.from({
        length: 6
      }, ((WW, RW) => ({
        "--x": `${(88*(.618034*RW%1)).toFixed(1)}%`,
        "--y": `${(10+37*RW%70).toFixed(1)}%`,
        "--size": 7 + RW % 3 * 3 + "rem",
        "--drift-x": 3 * (RW % 3 - 1) + "rem",
        "--drift-y": 2 * (RW % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + RW % 4 * 3 + "s",
        "--delay": 2.5 * -RW + "s"
      }))),
      QA = Array.from({
        length: 14
      }, ((WW, RW) => ({
        "--left": `${(3+94*((.618034*RW+.3)%1)).toFixed(1)}%`,
        "--size": 4 + RW % 4 * 2 + "px",
        "--sway": RW % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*RW%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*RW%12).toFixed(2)}s`
      }))),
      rb = (0, QW.memo)((function(WW) {
        let {
          island: RW
        } = WW;
        return (0, QC.jsxs)("div", {
          className: YC()("SkyblockReachLogDepths", null !== RW && `Island-${RW}`),
          "aria-hidden": "true",
          children: [FA.map(((WW, RW) => (0, QC.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: WW
          }, `shaft${RW}`))), fA.map(((WW, RW) => (0, QC.jsx)("span", {
            className: YC()("SkyblockReachLogMote", RW % 2 === 1 && "Violet"),
            style: WW
          }, `mote${RW}`))), QA.map(((WW, RW) => (0, QC.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: WW
          }, `bubble${RW}`)))]
        })
      })),
      cb = 100;

    function XA(WW) {
      let {
        view: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)();
      if (null === RW || 0 === RW.total) return null;
      const wW = cb * RW.aspect,
        CW = MW("skyblockGame:hiddenWatersCount", {
          found: RW.found,
          total: RW.total
        });
      return (0, QC.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${MW("skyblockGame:hiddenWatersTitle")}: ${CW}`,
        children: [(0, QC.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${wW}`,
          "aria-hidden": "true",
          children: [RW.islands.map(((WW, RW) => (0, QC.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (WW.left + WW.width / 2) * cb,
            cy: (WW.top + WW.height / 2) * wW,
            rx: WW.width / 2 * cb,
            ry: WW.height / 2 * wW
          }, RW))), RW.pins.map(((WW, RW) => (0, QC.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: WW.left * cb,
            cy: WW.top * wW,
            r: 13
          }, RW)))]
        }), (0, QC.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, QC.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: MW("skyblockGame:hiddenWatersTitle")
          }), (0, QC.jsx)("span", {
            className: RW.found === RW.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: CW
          })]
        })]
      })
    }

    function jb(WW) {
      let {
        view: RW,
        island: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)(), CW = null === RW || void 0 === RW ? void 0 : RW.glimpses.get(MW);
      return void 0 === CW || 0 === CW.length ? null : (0, QC.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, QC.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: wW("skyblockGame:hiddenWatersGlimpsed")
        }), (0, QC.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: CW.map((WW => (0, QC.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, QC.jsx)(IC.c, {
              itemName: WW,
              amount: 0
            })
          }, WW)))
        })]
      })
    }
    const kb = ["Bronze", "Silver", "Gold"],
      ab = [{
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
      sA = ab.slice(0, 2);

    function dA(WW) {
      return WW ? ab : sA
    }

    function pA(WW) {
      let {
        fish: RW,
        letGoShown: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)();
      return (0, QC.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [kb.map(((WW, MW) => {
          const CW = MW < RW.marks;
          return (0, QC.jsx)("span", {
            className: YC()("SkyblockReachLogPip", WW, CW && "Earned", CW && RW.fresh && MW === RW.marks - 1 && "Newest"),
            title: wW(rC[MW])
          }, WW)
        })), (0, QC.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), dA(MW).map(((WW, MW) => (0, QC.jsx)("span", {
          className: YC()("SkyblockReachLogRibbon", WW.className, !0 === RW.ribbons[MW] && "Earned"),
          title: wW(WW.titleKey)
        }, WW.className)))]
      })
    }

    function hA(WW) {
      let {
        letGoShown: RW,
        haloShown: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)();
      return (0, QC.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, QC.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wW("skyblockGame:reachLogMarks"),
          children: [(0, QC.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), wW("skyblockGame:reachLogLegendMarks")]
        }), dA(RW).map((WW => (0, QC.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wW(WW.titleKey),
          children: [(0, QC.jsx)("span", {
            className: YC()("SkyblockReachLogRibbon", WW.className, "Earned")
          }), wW(WW.legendKey)]
        }, WW.className))), (0, QC.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wW("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, QC.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), wW("skyblockGame:reachLogLegendGlimmer")]
        }), MW && (0, QC.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wW("skyblockGame:reachLogHaloTitle"),
          children: [(0, QC.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), wW("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function UA(WW) {
      let {
        returner: RW
      } = WW;
      return (0, QC.jsxs)("div", {
        className: YC()("SkyblockReachLogReturner", RW.back && "Back"),
        children: [(0, QC.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, QC.jsx)(IC.c, {
            itemName: RW.itemName,
            amount: 0
          })
        }), (0, QC.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: RW.line
        })]
      })
    }

    function EA(WW) {
      let {
        fish: RW,
        letGoShown: MW
      } = WW;
      const {
        t: wW
      } = (0, FC.C)();
      return (0, QC.jsxs)("li", {
        className: YC()("SkyblockReachLogCard", RW.caught ? "Caught" : "Unknown", RW.marks >= 3 && "GoldCard", RW.fresh && "Fresh", RW.visitor && "Visitor"),
        children: [RW.visitor && (0, QC.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: wW("skyblockGame:reachLogVisitor")
        }), RW.fresh && Array.from({
          length: 4
        }, ((WW, RW) => (0, QC.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, RW))), (0, QC.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [RW.halo && (0, QC.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: wW("skyblockGame:reachLogHaloTitle")
          }), (0, QC.jsx)(IC.c, {
            itemName: RW.itemName,
            amount: 0
          }), RW.glimmer && (0, QC.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: wW("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, QC.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: RW.name
        }), (0, QC.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: RW.chance
        }), (0, QC.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: RW.best
        }), (0, QC.jsx)(pA, {
          fish: RW,
          letGoShown: MW
        })]
      })
    }

    function VA(WW) {
      let {
        page: RW,
        letGoShown: MW,
        hiddenWaters: wW
      } = WW;
      const {
        t: CW
      } = (0, FC.C)();
      return RW.awake ? (0, QC.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: RW.fish.map((WW => (0, QC.jsx)(EA, {
          fish: WW,
          letGoShown: MW
        }, WW.itemName)))
      }) : (0, QC.jsxs)(QC.Fragment, {
        children: [(0, QC.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: CW("skyblockGame:reachLogAsleep")
        }), (0, QC.jsx)(jb, {
          view: wW,
          island: RW.id
        })]
      })
    }

    function mb(WW) {
      var RW, MW;
      let {
        controller: wW,
        regulars: CW,
        hiddenWaters: zR
      } = WW;
      const AW = (0, fC.i)(Qw, wW.getSnapshot()),
        bR = function(WW) {
          return (0, fC.i)(RC, WW.getSnapshot())
        }(zR),
        yR = (0, fC.i)(Dw, CW.getSnapshot()),
        {
          t: NW
        } = (0, FC.C)(),
        eW = UC();
      if (!AW.enabled) return null;
      const BW = null !== (RW = AW.pages.find((WW => WW.id === AW.selected))) && void 0 !== RW ? RW : null;
      return (0, QC.jsx)(dC.b, {
        show: AW.open,
        close: wW.dismiss,
        togglePointerLock: !1,
        className: YC()("SkyblockSkillsOverlay", yR.open && "SkyblockReachLogUnderLedger"),
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: eW,
          onKeyDown: hC,
          children: [(0, QC.jsx)(rb, {
            island: null !== (MW = null === BW || void 0 === BW ? void 0 : BW.id) && void 0 !== MW ? MW : null
          }), (0, QC.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: NW("skyblockGame:reachLogTitle")
              }), (0, QC.jsx)("p", {
                children: NW("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, QC.jsx)(XA, {
              view: bR
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: wW.dismiss
            })]
          }), (0, QC.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: AW.pages.map((WW => {
              const RW = WW.id === AW.selected,
                MW = WW.fish.some((WW => WW.fresh));
              return (0, QC.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": RW,
                "data-pad-tab": !0,
                "data-pad-selected": RW ? "true" : void 0,
                className: YC()("SkyblockReachLogTab", `Island-${WW.id}`, RW && "Selected", !WW.awake && "Asleep", WW.gold && "GoldPage", MW && "HasNews"),
                onClick: () => {
                  wW.selectPage(WW.id)
                },
                children: [(0, QC.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: WW.name
                }), WW.awake && (0, QC.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: NW("skyblockGame:reachLogCaughtCount", {
                    caught: WW.caught,
                    total: WW.total
                  })
                })]
              }, WW.id)
            }))
          }), (0, QC.jsxs)("div", {
            className: YC()("SkyblockReachLogPage", null !== BW && `Island-${BW.id}`),
            role: "tabpanel",
            children: [null !== BW && (0, QC.jsx)(VA, {
              page: BW,
              letGoShown: AW.letGoShown,
              hiddenWaters: bR
            }), !0 === (null === BW || void 0 === BW ? void 0 : BW.awake) && null !== BW.returner && (0, QC.jsx)(UA, {
              returner: BW.returner
            }), !0 === (null === BW || void 0 === BW ? void 0 : BW.awake) && (0, QC.jsx)(oA, {
              controller: CW,
              island: BW.id
            })]
          }), (0, QC.jsx)("footer", {
            className: YC()("SkyblockReachLogFooter", null !== BW && `Island-${BW.id}`, !0 === (null === BW || void 0 === BW ? void 0 : BW.gold) && "GoldPage"),
            children: !0 === (null === BW || void 0 === BW ? void 0 : BW.gold) ? (0, QC.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: NW("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, QC.jsxs)(QC.Fragment, {
              children: [(0, QC.jsx)(hA, {
                letGoShown: AW.letGoShown,
                haloShown: !0 === (null === BW || void 0 === BW ? void 0 : BW.fish.some((WW => WW.halo)))
              }), (0, QC.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: NW("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var xb = MW(3803);

    function vb(WW) {
      let {
        conversation: RW,
        completedLabel: MW
      } = WW;
      return (0, QC.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, QC.jsxs)("header", {
          children: [(0, QC.jsx)("h3", {
            children: RW.questName
          }), RW.completed && (0, QC.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: MW
          })]
        }), RW.lines.map((WW => (0, QC.jsx)(xb.d, {
          display: WW.display
        }, WW.key)))]
      })
    }

    function KA(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(wC, RW.getSnapshot()), CW = UC();
      if (!wW.enabled) return null;
      const zR = !wW.loading && 0 === wW.conversations.length;
      return (0, QC.jsx)(dC.b, {
        show: wW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: MW("skyblockDialogue:title")
              }), (0, QC.jsx)("p", {
                children: MW("skyblockDialogue:intro")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: RW.dismiss
            })]
          }), (0, QC.jsxs)("div", {
            className: YC()("SkyblockDialogueBody", {
              SingleColumn: null !== wW.questFocus || 0 === wW.characters.length
            }),
            children: [null === wW.questFocus && wW.characters.length > 0 && (0, QC.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: wW.characters.map((WW => (0, QC.jsx)(pC.h, {
                className: YC()("SkyblockDialogueCharacter", {
                  Selected: WW.selected
                }),
                onClick: () => {
                  RW.selectCharacter(WW.id)
                },
                children: (0, QC.jsx)(oC.c, {
                  text: WW.styling
                })
              }, WW.id)))
            }), (0, QC.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== wW.questFocus && (0, QC.jsx)(pC.h, {
                className: "SkyblockDialogueBack",
                onClick: RW.showCharacters,
                children: MW("skyblockDialogue:allCharacters")
              }), wW.loading && (0, QC.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: MW("skyblockDialogue:loading")
              }), zR && (0, QC.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: MW(null === wW.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), wW.conversations.map((WW => (0, QC.jsx)(vb, {
                conversation: WW,
                completedLabel: wW.completedLabel
              }, WW.questId)))]
            })]
          })]
        })
      })
    }

    function uA(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(yz, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC();
      return MW.enabled ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: wW("skyblockGame:autographBook")
              }), (0, QC.jsx)("p", {
                children: wW("skyblockGame:autographBookIntro")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              onClick: RW.dismiss
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, QC.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, QC.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, QC.jsx)("strong", {
                  children: MW.total
                }), (0, QC.jsx)("span", {
                  children: wW("skyblockGame:autographTotal")
                })]
              }), (0, QC.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, QC.jsx)("strong", {
                  children: MW.rankTotal
                }), (0, QC.jsx)("span", {
                  children: wW("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === MW.entries.length ? (0, QC.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: wW("skyblockGame:autographBookEmpty")
            }) : (0, QC.jsx)("ul", {
              className: "SkyblockAutographList",
              children: MW.entries.map((WW => (0, QC.jsxs)("li", {
                className: YC()("SkyblockAutograph", {
                  Ranked: null !== WW.rank
                }),
                style: null === WW.rank ? void 0 : {
                  color: WW.rank.colour
                },
                children: [null !== WW.rank && (0, QC.jsx)(bA.e, {
                  className: "SkyblockAutographRankIcon",
                  name: WW.rank.icon,
                  kit: (0, bA.g)(WW.rank.icon)
                }), (0, QC.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, QC.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: WW.name
                  }), (0, QC.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== WW.rank && (0, QC.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: WW.rank.label
                    }), (0, QC.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: WW.signedOn
                    })]
                  })]
                })]
              }, WW.key)))
            })]
          })]
        })
      }) : null
    }
    const OA = (0, QW.memo)((function(WW) {
        let {
          controller: RW
        } = WW;
        return (0, QC.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: RW.display.mountWaypoint,
          children: [(0, QC.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, QC.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, QC.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, QC.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, QC.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, QC.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      nA = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function GA(WW) {
      return "next" === WW.phase ? "\u2192" : nA[WW.kind]
    }
    const LA = (0, QW.memo)((function(WW) {
      let {
        controller: RW,
        display: MW
      } = WW;
      const wW = (0, fC.i)(AM, RW.getNotificationSnapshot()),
        [CW, zR] = (0, QW.useState)(!1);
      return (0, fC.f)("qteStateUpdated", (WW => {
        zR(WW.isActive)
      })), (0, QC.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (CW ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [wW && (0, QC.jsxs)("div", {
          className: `SkyblockQuestNotification ${wW.kind} ${wW.phase}`,
          style: {
            "--quest-notification-duration": `${wW.durationMs}ms`,
            ...wW.accent && {
              "--quest-notification-accent": wW.accent
            }
          },
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (wW.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, QC.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: GA(wW)
            }), wW.iconItem && (0, QC.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, QC.jsx)(IC.c, {
                itemName: wW.iconItem,
                amount: 0
              })
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, QC.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: wW.title
            }), (0, QC.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, QC.jsx)(Wz.b, {
                text: wW.name
              })
            }), wW.description && (0, QC.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, QC.jsx)(Wz.b, {
                text: wW.description
              })
            }), wW.reward && (0, QC.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, QC.jsx)(Wz.b, {
                text: wW.reward
              })
            })]
          })]
        }, wW.token), (null === wW || void 0 === wW ? void 0 : wW.waypointNameKey) && (0, QC.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": wW.waypointNameKey,
          "data-notification-token": wW.token,
          ref: MW.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${wW.token}`)]
      })
    }));

    function HA(WW) {
      const RW = parseInt(WW.replace("#", ""), 16);
      return `${RW>>16&255}, ${RW>>8&255}, ${255&RW}`
    }
    const DA = (0, QW.memo)((function(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(dM, RW.getSnapshot());
      if (!wW) return null;
      const CW = "arrival" === wW.phase;
      return (0, QC.jsxs)("div", {
        className: YC()("SkyblockPortalTransit", {
          Departure: !CW,
          Arrival: CW
        }),
        style: {
          "--portal-rgb": HA(wW.colour),
          "--portal-duration": `${wW.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, QC.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, QC.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            RW.finishArrival(wW.token)
          }
        }), (0, QC.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, QC.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !CW && (0, QC.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: MW("skyblockGame:portalTransitHeading")
          }), (0, QC.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: MW(wW.zoneNameKey)
          })]
        })]
      }, wW.token)
    }));

    function qb() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ZA() {
      const WW = document.querySelector(".SkyblockHudCoins"),
        RW = null === WW || void 0 === WW ? void 0 : WW.getBoundingClientRect();
      return RW && RW.width > 0 ? {
        x: RW.left + Math.min(RW.width, 24) / 2,
        y: RW.top + RW.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function SA(WW) {
      return {
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2
      }
    }

    function Wb() {
      var WW;
      const RW = null === (WW = document.querySelector(".HotBar")) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
      return RW && RW.width > 0 ? SA(RW) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Rb(WW) {
      let {
        items: RW,
        origins: MW,
        target: wW
      } = WW;
      return (0, QC.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: RW.map(((WW, RW) => {
          const CW = MW[RW];
          return (0, QC.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${CW.x}px`,
              top: `${CW.y}px`,
              "--item-dx": wW.x - CW.x + "px",
              "--item-dy": wW.y - CW.y + "px",
              "--item-delay": 2e3 + 160 * RW + "ms",
              "--item-flight": "700ms"
            },
            children: (0, QC.jsx)(IC.c, {
              itemName: WW.dailyRewardItemName,
              amount: 0
            })
          }, WW.dailyRewardItemName)
        }))
      })
    }

    function Mb(WW, RW) {
      const MW = -Math.PI / 2 + 1.25 * (WW / (RW - 1) * 2 - 1),
        wW = 70 + WW % 3 * 22;
      return {
        x: Math.cos(MW) * wW,
        y: Math.sin(MW) * wW * .7
      }
    }

    function wb(WW) {
      let {
        origin: RW,
        target: MW,
        count: wW
      } = WW;
      const CW = [];
      for (let zR = 0; zR < wW; zR++) {
        const WW = Mb(zR, wW);
        CW.push((0, QC.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${RW.x}px`,
            top: `${RW.y}px`,
            "--coin-bx": `${WW.x}px`,
            "--coin-by": `${WW.y}px`,
            "--coin-dx": MW.x - RW.x + "px",
            "--coin-dy": MW.y - RW.y + "px",
            "--coin-delay": `${mw(zR,wW)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, QC.jsx)(IC.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, zR))
      }
      return (0, QC.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: CW
      })
    }

    function Cb(WW) {
      let {
        day: RW
      } = WW;
      const MW = rR[RW - 1];
      return (0, QC.jsxs)(QC.Fragment, {
        children: [(0, QC.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, QC.jsx)(IC.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, lC.g)(MW.dailyRewardCoins)]
        }), MW.dailyRewardItems.map((WW => (0, QC.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, QC.jsx)(IC.c, {
            itemName: WW.dailyRewardItemName,
            amount: 0
          }), "\xd7", WW.dailyRewardItemAmount]
        }, WW.dailyRewardItemName)))]
      })
    }

    function zy(WW) {
      let {
        day: RW
      } = WW;
      const MW = XW(RW);
      return (0, QC.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: rR.map(((WW, wW) => {
          const CW = wW + 1;
          return (0, QC.jsxs)("li", {
            className: YC()("SkyblockDailyRewardTile", {
              Claimed: CW < RW && CW !== MW,
              Today: CW === RW,
              Tomorrow: CW === MW,
              Jackpot: CW === cR
            }),
            children: [(0, QC.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: CW
            }), (0, QC.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, QC.jsx)(IC.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, lC.g)(WW.dailyRewardCoins)]
            }), WW.dailyRewardItems.map((WW => (0, QC.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, QC.jsx)(IC.c, {
                itemName: WW.dailyRewardItemName,
                amount: 0
              }), "\xd7", WW.dailyRewardItemAmount]
            }, WW.dailyRewardItemName)))]
          }, CW)
        }))
      })
    }

    function Ab(WW) {
      let {
        view: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, QW.useRef)(null), CW = (0, QW.useRef)(null), [zR, AW] = (0, QW.useState)(null);
      (0, QW.useLayoutEffect)((() => {
        var WW;
        const RW = null === (WW = wW.current) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
        if (RW) {
          var MW, zR;
          const WW = Array.from(null !== (MW = null === (zR = CW.current) || void 0 === zR ? void 0 : zR.children) && void 0 !== MW ? MW : [], (WW => SA(WW.getBoundingClientRect())));
          AW({
            origin: SA(RW),
            target: ZA(),
            itemOrigins: WW,
            itemTarget: Wb()
          })
        }
      }), []);
      const bR = XW(RW.day),
        yR = function(WW, RW) {
          const [MW, wW] = (0, QW.useState)((() => qb() ? WW : 0));
          return (0, QW.useEffect)((() => {
            if (qb()) return;
            const MW = performance.now();
            let CW = 0;
            const zR = AW => {
              const bR = Math.min(Math.max((AW - MW) / RW, 0), 1);
              wW(Math.round(WW * (1 - (1 - bR) ** 3))), bR < 1 && (CW = requestAnimationFrame(zR))
            };
            return CW = requestAnimationFrame(zR), () => {
              cancelAnimationFrame(CW)
            }
          }), [WW, RW]), MW
        }(RW.coins, 450);
      return (0, QC.jsxs)("div", {
        className: YC()("SkyblockDailyReward", {
          Jackpot: RW.day === cR
        }),
        style: {
          "--daily-duration": `${RW.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, QC.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, QC.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, QC.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: MW("skyblockGame:dailyRewardTitle")
            }), (0, QC.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: MW("skyblockGame:dailyRewardDay", {
                day: String(RW.day)
              })
            })]
          }), (0, QC.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: wW,
            children: [(0, QC.jsx)(IC.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, QC.jsxs)("span", {
              children: ["+", (0, lC.g)(yR)]
            })]
          }), RW.items.length > 0 && (0, QC.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: CW,
            children: RW.items.map((WW => (0, QC.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, QC.jsx)(IC.c, {
                itemName: WW.dailyRewardItemName,
                amount: 0
              }), "\xd7", WW.dailyRewardItemAmount]
            }, WW.dailyRewardItemName)))
          }), (0, QC.jsx)(zy, {
            day: RW.day
          }), (0, QC.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [MW("skyblockGame:dailyRewardComeBack"), (0, QC.jsx)(Cb, {
              day: bR
            })]
          })]
        }), null !== zR && (0, QC.jsx)(wb, {
          origin: zR.origin,
          target: zR.target,
          count: RW.flyingCoins
        }), null !== zR && zR.itemOrigins.length === RW.items.length && (0, QC.jsx)(Rb, {
          items: RW.items,
          origins: zR.itemOrigins,
          target: zR.itemTarget
        })]
      })
    }
    const by = (0, QW.memo)((function(WW) {
        let {
          controller: RW
        } = WW;
        const MW = (0, fC.i)(UM, RW.getSnapshot());
        return MW ? (0, QC.jsx)(Ab, {
          view: MW
        }, MW.token) : null
      })),
      yy = "Gold Coin";

    function Nb(WW) {
      return 650 + 220 * WW
    }

    function eb(WW) {
      return {
        "--letter-delay": `${Nb(WW)}ms`,
        "--letter-land": `${Nb(WW)+300}ms`
      }
    }

    function Bb(WW) {
      let {
        letterCount: RW
      } = WW;
      return (0, QC.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, QC.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, QC.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, QC.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: RW
        }, ((WW, RW) => (0, QC.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: eb(RW),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, RW)))]
      })
    }

    function ty(WW) {
      var RW, MW, wW;
      let {
        letter: CW,
        index: zR
      } = WW;
      const {
        t: AW
      } = (0, FC.C)(), bR = null !== (RW = null === (MW = CW.items[0]) || void 0 === MW ? void 0 : MW.itemName) && void 0 !== RW ? RW : yy;
      return (0, QC.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: eb(zR),
        children: [(0, QC.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, QC.jsx)(IC.c, {
            itemName: bR,
            amount: 0
          })
        }), (0, QC.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: AW(CW.reasonKey, null !== (wW = CW.reasonParams) && void 0 !== wW ? wW : void 0)
        }), (0, QC.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [CW.coins > 0 && (0, QC.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, QC.jsx)(IC.c, {
              itemName: yy,
              amount: 0
            }), "+", (0, lC.g)(CW.coins)]
          }), CW.items.map(((WW, RW) => (0, QC.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, QC.jsx)(IC.c, {
              itemName: WW.itemName,
              amount: 0
            }), WW.label, " \xd7", WW.amount]
          }, RW)))]
        })]
      })
    }

    function Tb(WW) {
      let {
        view: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)();
      return (0, QC.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${RW.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Nb(RW.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, QC.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, QC.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, QC.jsx)(Bb, {
              letterCount: RW.letters.length
            }), (0, QC.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: MW("skyblockGame:mailboxTitle")
            })]
          }), (0, QC.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: RW.letters.map(((WW, RW) => (0, QC.jsx)(ty, {
              letter: WW,
              index: RW
            }, RW)))
          }), RW.more > 0 && (0, QC.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: MW("skyblockGame:mailboxMore", {
              count: String(RW.more)
            })
          })]
        })
      })
    }
    const gy = (0, QW.memo)((function(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(vw, RW.getSnapshot());
      return MW ? (0, QC.jsx)(Tb, {
        view: MW
      }, MW.token) : null
    }));

    function iy(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(dw, RW.getSnapshot());
      if (null === wW) return null;
      const CW = wW.fullSet ? "empty" === wW.fuelState ? {
        text: MW("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: MW("skyblockGame:magmawardHudFullSet", {
          worn: String(wW.wornCount)
        }),
        tone: "partial"
      };
      return (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsxs)("div", {
          className: YC()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${wW.fuelState}`, {
            "SkyblockMagmawardHud-partial": !wW.fullSet,
            "SkyblockMagmawardHud-armed": wW.fullSet && "empty" !== wW.fuelState
          }),
          children: [null !== wW.flare && (0, QC.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${wW.flare}`
          }, `flare:${wW.flareToken}`), (0, QC.jsx)("div", {
            className: YC()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: wW.setLit
            }),
            children: wW.pieces.map(((WW, RW) => (0, QC.jsx)("div", {
              className: YC()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: WW.worn,
                SkyblockMagmawardPieceJustWorn: WW.justWorn
              }),
              children: (0, QC.jsx)(IC.c, {
                itemName: WW.itemName,
                amount: 0
              })
            }, `${RW}:${WW.wornToken}`)))
          }, `pieces:${wW.setLitToken}`), (0, QC.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, QC.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, QC.jsxs)("div", {
              className: YC()("SkyblockMagmawardFuelCounter", wW.pulse && `SkyblockMagmawardFuelCounter-${wW.pulse}`),
              children: [(0, QC.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, QC.jsx)(IC.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, QC.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: wW.fuel
              })]
            }, `counter:${wW.pulseToken}`), "burn" === wW.pulse && (0, QC.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${wW.pulseToken}`)]
          }), CW && (0, QC.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${CW.tone} SmallTextBold`,
            children: CW.text
          })]
        })
      })
    }

    function Yb(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW,
        selectedLanguage: wW
      } = (0, FC.C)(), CW = (0, fC.i)(hw, RW.getSnapshot());
      return null === CW ? null : (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsxs)("div", {
          className: YC()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: CW.inRange
          }),
          style: {
            "--glowtide-colour": CW.colour
          },
          "aria-label": MW("skyblockGame:glowtideChipLabel"),
          children: [(0, QC.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), CW.inRange ? (0, QC.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: MW("skyblockGame:glowtideChipInRange")
          }, `call:${CW.inRangeToken}`) : (0, QC.jsxs)(QC.Fragment, {
            children: [(0, QC.jsx)("div", {
              ref: RW.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, QC.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: MW("skyblockGame:waypointDistance", {
                distance: lW(CW.distance, wW.code)
              })
            })]
          })]
        })
      })
    }

    function Jb(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(Ew, RW.getSnapshot());
      return null === wW ? null : (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsxs)("div", {
          className: YC()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: wW.full
          }),
          "aria-label": MW("skyblockGame:glowMeterLabel", {
            fill: String(wW.fill),
            aR: String(wW.aR)
          }),
          children: [wW.burst && (0, QC.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${wW.burstToken}`), (0, QC.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, QC.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${wW.ratio})`
              }
            }), wW.gained && (0, QC.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${wW.gainToken}`), wW.full && Array.from({
              length: 5
            }, ((WW, RW) => (0, QC.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, RW)))]
          }), wW.full && wW.rares.map((WW => (0, QC.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, QC.jsx)(IC.c, {
              itemName: WW,
              amount: 0
            })
          }, WW))), wW.ready && (0, QC.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, QC.jsx)("span", {
              children: MW("skyblockGame:glowMeterReady")
            })
          }, `ready:${wW.fullToken}`)]
        })
      })
    }

    function Pb(WW) {
      let {
        controller: RW
      } = WW;
      const {
        t: MW
      } = (0, FC.C)(), wW = (0, fC.i)(mC, RW.getSnapshot());
      if (null === wW) return null;
      const CW = "waiting" === wW.phase,
        zR = {
          animationDuration: `${wW.waitMs}ms`,
          animationDelay: -wW.elapsedMs + "ms"
        },
        AW = CW ? void 0 : {
          animationDuration: `${wW.waitMs}ms`
        };
      return (0, QC.jsxs)("div", {
        className: CW ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [CW && (0, QC.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((WW, RW) => (0, QC.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, RW))), (0, QC.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: zR
          }), (0, QC.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, QC.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, QC.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: zR
            })]
          }), (0, QC.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, QC.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: AW,
          children: MW(wW.line)
        }, wW.lineIndex)]
      }, wW.token)
    }

    function Ib(WW) {
      let {
        chart: RW,
        showHere: MW,
        className: wW
      } = WW;
      return (0, QC.jsx)("div", {
        className: YC()("SkyblockTideChartGrid", wW, null !== RW.pictureName && "Complete"),
        "aria-hidden": "true",
        children: RW.cells.map(((WW, wW) => {
          const CW = 0 !== (RW.pulseCells & 1 << wW),
            zR = RW.castCell === wW;
          return (0, QC.jsx)("span", {
            className: YC()("SkyblockTideChartCell", `Cell-${WW}`, CW && "Pulse", zR && "Cast", MW && RW.hereCell === wW && "Here")
          }, `${wW}:${CW?`p${RW.pulseToken}`:""}:${zR?`c${RW.castToken}`:""}`)
        }))
      })
    }

    function ob(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(vC, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = MW.chip;
      if (!MW.enabled || null === CW) return null;
      const zR = wW("skyblockGame:tideChartsChipLabel", {
        island: CW.islandName,
        lit: String(CW.lit),
        ink: String(CW.ink)
      });
      return (0, QC.jsx)(PC.g, {
        placement: "statBars",
        children: (0, QC.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: YC()("SkyblockTideChartsChip", MW.open && "Open", null !== CW.pictureName && "Complete"),
          "aria-label": zR,
          title: zR,
          onMouseDown: WW => {
            WW.preventDefault()
          },
          onClick: RW.toggle,
          children: [(0, QC.jsx)(Ib, {
            chart: CW,
            showHere: !1,
            className: "Mini"
          }), (0, QC.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [CW.lit, "/", CW.ink]
          })]
        })
      })
    }

    function lb(WW) {
      let {
        controller: RW
      } = WW;
      const MW = (0, fC.i)(vC, RW.getSnapshot()),
        {
          t: wW
        } = (0, FC.C)(),
        CW = UC(),
        zR = MW.card;
      return MW.enabled && null !== zR ? (0, QC.jsx)(dC.b, {
        show: MW.open,
        close: RW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, QC.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: CW,
          onKeyDown: hC,
          children: [(0, QC.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, QC.jsxs)("div", {
              children: [(0, QC.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: wW("skyblockGame:tideChartsTitle")
              }), (0, QC.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: wW("skyblockGame:tideChartsIntro")
              })]
            }), (0, QC.jsx)(pC.l, {
              padIgnore: !0,
              ariaLabel: wW("skyblockGame:tideChartsClose"),
              onClick: RW.dismiss
            })]
          }), MW.tabs.length > 1 && (0, QC.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": wW("skyblockGame:tideChartsIslands"),
            children: MW.tabs.map((WW => (0, QC.jsx)("button", {
              type: "button",
              className: YC()("SkyblockTideChartsTab", WW.selected && "Selected"),
              "aria-pressed": WW.selected,
              onClick: () => {
                RW.WM(WW.island)
              },
              children: WW.name
            }, WW.island)))
          }), (0, QC.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, QC.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": zR.gridLabel,
              children: (0, QC.jsx)(Ib, {
                chart: zR,
                showHere: !0,
                className: "Large"
              })
            }), (0, QC.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, QC.jsx)("h3", {
                children: zR.islandName
              }), (0, QC.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: zR.litText
              }), null === zR.pictureName ? (0, QC.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: wW("skyblockGame:tideChartsPictureHidden")
              }) : (0, QC.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: wW("skyblockGame:tideChartsPictureRevealed", {
                  picture: zR.pictureName
                })
              }, zR.pictureName), (0, QC.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, QC.jsxs)("li", {
                  children: [(0, QC.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), wW("skyblockGame:tideChartsLegendLit")]
                }), (0, QC.jsxs)("li", {
                  children: [(0, QC.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), wW("skyblockGame:tideChartsLegendClear")]
                }), null !== zR.hereCell && (0, QC.jsxs)("li", {
                  children: [(0, QC.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), wW("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, QC.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, QC.jsx)("span", {
                  children: MW.turnsText
                }), (0, QC.jsx)("span", {
                  children: MW.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Fb(WW) {
      var RW;
      let {
        controller: MW
      } = WW;
      const {
        selectedLanguage: wW
      } = (0, FC.C)(), CW = wW.code;
      (0, QW.useEffect)((() => {
        MW.setTranslator(((WW, RW) => (0, FC.w)(CW, WW, RW)), CW, ((WW, RW) => (0, FC.s)(CW, WW, RW)))
      }), [MW, CW]);
      const zR = (0, fC.i)(BW, MW.map.getSnapshot()),
        {
          openInGameMenuName: AW
        } = (0, JC.i)(["openInGameMenuName"]);
      return (0, QC.jsxs)(QC.Fragment, {
        children: [(0, QC.jsx)(LA, {
          controller: MW.quests,
          display: MW.navigation.display
        }), zR.enabled && !AW && (0, QC.jsx)(qz, {
          controller: MW.navigation
        }), (0, QC.jsx)(rz, {
          controller: MW,
          minimap: zR.enabled && (null === (RW = zR.presentation) || void 0 === RW ? void 0 : RW.minimap) && (0, QC.jsx)(DC, {
            view: zR.presentation.minimap,
            navigation: MW.navigation,
            controller: MW.map
          }),
          children: (0, QC.jsx)(Az, {
            controller: MW.quests,
            surface: "hud"
          })
        }), (0, QC.jsx)(OA, {
          controller: MW.navigation
        }), (0, QC.jsx)(DA, {
          controller: MW.portalTransit
        }), (0, QC.jsx)(by, {
          controller: MW.dailyReward
        }), (0, QC.jsx)(gy, {
          controller: MW.mailbox
        }), (0, QC.jsx)(iy, {
          controller: MW.magmaward
        }), (0, QC.jsx)(Yb, {
          controller: MW.glowtide
        }), (0, QC.jsx)(AA, {
          controller: MW.passage
        }), (0, QC.jsx)(ob, {
          controller: MW.tideCharts
        }), (0, QC.jsx)(Jb, {
          controller: MW.glowMeter
        }), (0, QC.jsx)(JA, {
          controller: MW.reachLog
        }), (0, QC.jsx)(Pb, {
          controller: MW.hushWait
        }), (0, QC.jsx)(TA, {
          controller: MW.lampLight
        }), (0, QC.jsx)(ZC, {
          controller: MW.skills,
          surface: "hud"
        })]
      })
    }

    function fb(WW) {
      let {
        controller: RW
      } = WW;
      return (0, QC.jsxs)(QC.Fragment, {
        children: [(0, QC.jsx)(HC, {
          controller: RW.map,
          navigation: RW.navigation
        }), (0, QC.jsx)(ZC, {
          controller: RW.skills,
          surface: "menu"
        }), (0, QC.jsx)(Az, {
          controller: RW.quests,
          surface: "menu"
        }), (0, QC.jsx)(xA, {
          controller: RW.dungeons
        }), (0, QC.jsx)(uz, {
          controller: RW.collections
        }), (0, QC.jsx)(Gz, {
          controller: RW.questGraph
        }), (0, QC.jsx)(Zz, {
          controller: RW.forge
        }), (0, QC.jsx)(CA, {
          controller: RW.smuggler
        }), (0, QC.jsx)(ib, {
          controller: RW.keepersChair,
          lampLight: RW.lampLight
        }), (0, QC.jsx)(mb, {
          controller: RW.reachLog,
          regulars: RW.regulars,
          hiddenWaters: RW.hiddenWaters
        }), (0, QC.jsx)(lA, {
          controller: RW.regulars
        }), (0, QC.jsx)(yb, {
          controller: RW.passage
        }), (0, QC.jsx)(lb, {
          controller: RW.tideCharts
        }), (0, QC.jsx)(KA, {
          controller: RW.dialogue
        }), (0, QC.jsx)(uA, {
          controller: RW.autographs
        })]
      })
    }
    var Qb = MW(34960);
    const ry = DM + ww;

    function cy(WW, RW, MW, wW, CW) {
      const zR = [],
        AW = [],
        bR = MW => {
          const wW = WW.playSound(RW, MW.sound, MW.volume, MW.rate);
          wW && (AW.push(wW), void 0 !== MW.cutAfter && zR.push(setTimeout((() => {
            wW.fade(wW.getVolume(), 0, 300)
          }), MW.cutAfter)))
        };
      for (const yR of function(WW, RW) {
          const MW = [{
            sound: "rpgKnifeSlice1",
            beat: DM,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: DM,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: DM,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: DM,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: DM,
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
            sound: (0, Qb.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: ry + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Qb.e)("bigDrumSwish"),
            beat: ry + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: ry + 60,
            lead: 180,
            volume: .5 + .06 * WW,
            rate: .82 + .07 * WW
          }];
          return WW >= 4 && MW.push({
            sound: "exp_levelup",
            beat: ry + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), RW && MW.push({
            sound: "trumpetFlare",
            beat: ry + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), MW.push({
            sound: "harp_pling",
            beat: qw,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), MW
        }(MW, wW)) CW ? zR.push(setTimeout((() => {
        bR(yR)
      }), Math.max(0, yR.beat - yR.lead / yR.rate))) : yR.beat !== DM && "magicAccent2" !== yR.sound && "trumpetFlare" !== yR.sound || bR(yR);
      return () => {
        for (const WW of zR) clearTimeout(WW);
        for (const WW of AW) WW.fade(WW.getVolume(), 0, 120)
      }
    }
    class Xb {
      constructor(WW) {
        this.deps = WW, this.pending = new Map, this.localHook = null
      }
      hookWaiting(WW, RW) {
        this.pending.delete(WW);
        const MW = this.deps.now();
        if (null === RW) {
          var wW;
          if ((null === (wW = this.localHook) || void 0 === wW ? void 0 : wW.hookId) === WW) {
            const WW = MW >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(WW)
          }
          return
        }
        const CW = MW + RW;
        this.settle(WW, CW) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(WW, {
          untilMs: MW + 1e3,
          biteAtMs: CW
        }))
      }
      getLocalHook() {
        var WW, RW;
        return null !== (WW = null === (RW = this.localHook) || void 0 === RW ? void 0 : RW.hookId) && void 0 !== WW ? WW : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const WW = this.deps.now();
        for (const [RW, {
            untilMs: MW,
            biteAtMs: wW
          }] of this.pending)(this.settle(RW, wW) || WW > MW) && this.pending.delete(RW)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(WW, RW) {
        const MW = this.deps.getLineOwner(WW);
        if (null === MW) return !1;
        if (!this.deps.isLocalPlayer(MW)) return !0;
        if (this.localHook = {
            hookId: WW,
            biteAtMs: RW
          }, !this.deps.isHushWaiting()) {
          const [RW, MW] = this.deps.getHookPosition(WW);
          this.deps.onCastLanded(RW, MW)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var jy = MW(3357);
    const ky = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      ay = {
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
    class sb {
      constructor(WW) {
        this.deps = WW, this.tell = null
      }
      receiveTell(WW) {
        let {
          biteTellTier: RW
        } = WW;
        this.tell = {
          tier: RW,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(WW) {
        const RW = this.tell;
        if (this.tell = null, !WW) return;
        const MW = null !== RW && this.deps.now() - RW.atMs <= 3e3 ? RW.tier : 0;
        this.deps.vibrate(ky[MW])
      }
      burstAtHook() {
        const WW = this.tell,
          RW = this.deps.getLocalHookPosition();
        null === WW || WW.burst || null === RW || (WW.burst = !0, this.deps.playParticles(function(WW, RW) {
          let [MW, wW, CW] = RW;
          const {
            count: zR,
            rise: AW,
            colour: bR
          } = ay[WW], [yR, NW, eW] = bR;
          return {
            texture: "glint",
            pos1: [MW - .3, wW, CW - .3],
            pos2: [MW + .3, wW + .2, CW + .3],
            dir1: [-.6, AW, -.6],
            dir2: [.6, 1.4 * AW, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: zR,
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
              minColor: [yR, NW, eW, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [yR, NW, eW, 0],
              maxColor: [yR, NW, eW, 0]
            }],
            blendMode: jy.f.Add,
            hideDist: 48
          }
        }(WW.tier, RW)))
      }
    }
    var db = MW(1080),
      pb = MW(1548),
      hb = MW(50);

    function Ub(WW, RW) {
      return [{
        timeFraction: 0,
        minColor: [255 * WW[0], 255 * WW[1], 255 * WW[2], 1],
        maxColor: [255 * RW[0], 255 * RW[1], 255 * RW[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Eb = [0, 0, 0],
      Vb = {
        texture: "glint",
        mipmaps: !1,
        aR: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Eb,
        dir2: Eb,
        blendMode: jy.f.OneOne
      },
      my = {
        ...Vb,
        colorGradients: Ub([1, .88, .38], [1, .65, .15])
      },
      xy = {
        ...Vb,
        colorGradients: Ub([.55, .95, 1], [.9, 1, 1])
      },
      vy = [.5, .5, .5],
      Kb = {
        texture: "glint",
        mipmaps: !1,
        aR: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Ub([1, .12, .12], [1, .35, .2]),
        blendMode: jy.f.OneOne
      };
    class ub {
      constructor() {
        this.drops = new Map
      }
      jC(WW, RW) {
        if ("overflowFlash" === RW.kind) {
          const [MW, wW, CW] = RW.position, zR = WW.createParticles(Kb, {
            pos: [MW, wW, CW],
            half: vy
          });
          return zR.emit(18), void zR.stop()
        }
        this.drops.has(RW.itemId) || this.drops.set(RW.itemId, {
          owner: RW.owner,
          cosmetic: RW.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      WR(WW) {
        if (0 === this.drops.size) return;
        const RW = performance.now(),
          MW = WW.getCameraPosition();
        let wW = 0;
        for (const zR of this.drops.values()) null !== zR.particles && wW++;
        for (const [zR, AW] of this.drops) {
          const bR = WW.getPositionView(zR);
          if (null === bR) {
            var CW;
            if (AW.seen || RW - AW.markedAt > 5e3) null !== AW.particles && wW--, null === (CW = AW.particles) || void 0 === CW || CW.stop(), this.drops.delete(zR);
            continue
          }
          AW.cosmetic || !WW.isLocalPlayer(AW.owner) || AW.pickupDelayCleared || (WW.clearPickupDelay(zR), AW.pickupDelayCleared = !0);
          const yR = AW.lastPosition,
            NW = AW.seen && (bR[0] - yR[0]) ** 2 + (bR[1] - yR[1]) ** 2 + (bR[2] - yR[2]) ** 2 > 4e-4,
            eW = (bR[0] - MW[0]) ** 2 + (bR[1] - MW[1]) ** 2 + (bR[2] - MW[2]) ** 2 < 2025;
          AW.seen = !0, yR[0] = bR[0], yR[1] = bR[1], yR[2] = bR[2], NW && (AW.lastMovingAt = RW), null !== AW.particles && (!eW || RW - AW.lastMovingAt > 500) && (AW.particles.stop(), AW.particles = null, wW--), NW && eW && null === AW.particles && wW < 32 && (AW.particles = WW.createParticles(AW.cosmetic ? xy : my, {
            pos: bR
          }), wW++), null !== AW.particles && (AW.particles.moveTo(bR), AW.particles.setEmitRate(NW ? 12 : 0)), !NW && null === AW.particles && RW - Math.max(AW.lastMovingAt, AW.markedAt) > 2e3 && this.drops.delete(zR)
        }
      }
      dispose() {
        for (const RW of this.drops.values()) {
          var WW;
          null === (WW = RW.particles) || void 0 === WW || WW.stop()
        }
        this.drops.clear()
      }
    }
    var Ob = MW(173);
    const nb = Ob.c.yI * Ob.c.playerEyeToHeightRatio;
    class Gb {
      constructor(WW) {
        this.host = WW, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      jC(WW) {
        this.lava = WW, this.nextUpdateAt = 0
      }
      WR() {
        var WW;
        const RW = this.host.now();
        if (RW < this.nextUpdateAt) return;
        this.nextUpdateAt = RW + 250;
        const MW = this.host.playerPosition(),
          wW = MW && this.findNearest([MW[0], MW[1] + nb, MW[2]]);
        if (!wW || wW.distance >= 40) return void this.stop();
        const CW = .5 * Math.min(1, (40 - wW.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(CW) : this.loop = this.host.play("lavaFlow", CW, wW.position, 40 + nb, 9, !0), null === (WW = this.loop) || void 0 === WW || WW.setPosition(wW.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var WW;
        null === (WW = this.loop) || void 0 === WW || WW.stop(), this.loop = null
      }
      findNearest(WW) {
        let RW = -1,
          MW = 1 / 0;
        for (let wW = 0; wW < this.lava.length; wW += 3) {
          const CW = this.lava[wW] - WW[0],
            zR = this.lava[wW + 1] - WW[1],
            AW = this.lava[wW + 2] - WW[2],
            bR = CW * CW + zR * zR + AW * AW;
          bR < MW && (MW = bR, RW = wW)
        }
        return RW < 0 ? null : {
          position: [this.lava[RW], this.lava[RW + 1], this.lava[RW + 2]],
          distance: Math.sqrt(MW)
        }
      }
    }
    var Lb = MW(1533),
      Hb = MW(36683);
    const Db = {
      "Grey Portal": "Gray"
    };
    for (const My of CW.Fc) Db[`${My} Portal`] = My;
    const qy = Object.keys(Db),
      Zb = Object.fromEntries(qy.map((WW => [WW, (0, CW.U)(CW.G[`${(0,CW.oe)(Db[WW])}Team`])])));
    Object.fromEntries(qy.map((WW => [WW, CW.G[`${(0,CW.oe)(Db[WW])}UiText`]])));
    class Sb {
      constructor(WW, RW) {
        this.presentation = WW, this.portal = RW, this.unlocked = void 0
      }
      jC(WW) {
        const RW = !1 === this.unlocked && WW;
        this.unlocked = WW, this.WR();
        const {
          min: MW,
          max: wW,
          unlockedBlock: CW
        } = this.portal;
        if (RW && this.presentation.hasChunk(...MW)) {
          const [WW, RW, zR] = Zb[CW];
          this.presentation.playParticles({
            pos1: [...MW],
            pos2: wW.map((WW => WW + 1)),
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
              minColor: [WW, RW, zR, 1],
              maxColor: [Math.min(255, WW + 55), Math.min(255, RW + 55), Math.min(255, zR + 90), 1]
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
      WR() {
        var WW;
        const RW = this.unlocked ? this.portal.unlockedBlock : null !== (WW = this.portal.lockedBlock) && void 0 !== WW ? WW : "Light Gray Portal",
          {
            min: MW,
            max: wW
          } = this.portal;
        for (let CW = MW[0]; CW <= wW[0]; CW++)
          for (let WW = MW[1]; WW <= wW[1]; WW++)
            for (let zR = MW[2]; zR <= wW[2]; zR++) this.presentation.hasChunk(CW, WW, zR) && this.presentation.uF(CW, WW, zR) !== RW && this.presentation.tMW(CW, WW, zR, RW)
      }
    }
    const Wy = {
        farming_1: {
          raises: WW => "NPC" === WW.type && "chef" === WW.variation,
          rise: .4
        },
        fishing_1: {
          raises: WW => "Draugr Warper" === WW.type,
          rise: .4
        }
      },
      Ry = (WW, RW, MW, zR) => {
        let {
          localPlayerId: AW
        } = zR;
        const bR = new gz({
          translate: (WW, RW) => (0, FC.w)(db.d.get().getCurrentLanguageCode(), WW, RW),
          translateWithIcons: (WW, RW) => (0, FC.s)(db.d.get().getCurrentLanguageCode(), WW, RW),
          setMenuOpen: WW => {
            WW ? (0, uW.j)() : (0, uW.e)()
          },
          dismissMenu: uW.f,
          publishSkills: WW => {
            OW.k.Sz(RM, WW, !0)
          },
          publishQuests: WW => {
            OW.k.Sz(zw, WW, !0)
          },
          publishQuestNotification: WW => {
            OW.k.Sz(AM, WW, !0)
          },
          publishDungeons: WW => {
            OW.k.Sz(NM, WW, !0)
          },
          publishCollections: WW => {
            OW.k.Sz(aw, WW, !0)
          },
          publishMap: WW => {
            OW.k.Sz(BW, WW, !0)
          },
          publishHud: WW => {
            OW.k.Sz(BC, WW, !0)
          },
          publishPortalTransit: WW => {
            OW.k.Sz(dM, WW, !0)
          },
          isLoadingScreenUp: () => JC.b.get("loadingOverlayVisible"),
          publishDailyReward: WW => {
            OW.k.Sz(UM, WW, !0)
          },
          publishMailbox: WW => {
            OW.k.Sz(vw, WW, !0)
          },
          publishQuestGraph: WW => {
            OW.k.Sz(uM, WW, !0)
          },
          publishForge: WW => {
            OW.k.Sz(ew, WW, !0)
          },
          publishSmuggler: WW => {
            OW.k.Sz(Tw, WW, !0)
          },
          publishKeepersChair: WW => {
            OW.k.Sz(Fw, WW, !0)
          },
          publishReachLog: WW => {
            OW.k.Sz(Qw, WW, !0)
          },
          publishLampLight: WW => {
            OW.k.Sz(aC, WW, !0)
          },
          publishMagmaward: WW => {
            OW.k.Sz(dw, WW, !0)
          },
          publishGlowtide: WW => {
            OW.k.Sz(hw, WW, !0)
          },
          publishGlowMeter: WW => {
            OW.k.Sz(Ew, WW, !0)
          },
          publishHushWait: WW => {
            OW.k.Sz(mC, WW, !0)
          },
          publishPassage: WW => {
            OW.k.Sz(Yw, WW, !0)
          },
          publishTideCharts: WW => {
            OW.k.Sz(vC, WW, !0)
          },
          publishRegulars: WW => {
            OW.k.Sz(Dw, WW, !0)
          },
          publishHiddenWaters: WW => {
            OW.k.Sz(RC, WW, !0)
          },
          publishDialogue: WW => {
            OW.k.Sz(wC, WW, !0)
          },
          publishAutographs: WW => {
            OW.k.Sz(yz, WW, !0)
          },
          onDailyRewardStarted: WW => {
            mR.playSound(AW, WW.day === cR ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (WW, RW) => {
            mR.playSound(AW, "exp_collect", .35, 1 + .6 * WW / (RW - 1)), OW.k.Sz(EM, WW === RW - 1)
          },
          onDailyRewardItemLanded: WW => {
            mR.playSound(AW, "pickUp", .6, 1 + .15 * WW)
          },
          onMailboxStarted: () => {
            mR.playSound(AW, "rpgMetalClick", .6, 1), mR.playSound(AW, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            mR.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: hb.j,
          requestTracking: WW => {
            mR.sendCommand(`quests track ${WW}`)
          },
          requestDungeonEnter: (WW, RW) => {
            mR.sendCommand(`${kR.j}${WW} ${RW}`)
          },
          requestQuestJump: WW => {
            mR.sendCommand(`${aR} jump ${WW}`)
          },
          requestQuestArrive: (WW, RW) => {
            const MW = `${aR} arrive ${WW}`;
            mR.sendCommand(RW ? `${MW} complete` : MW)
          },
          requestForge: WW => {
            let {
              blade: RW,
              guard: MW,
              handle: wW
            } = WW;
            mR.sendCommand(`forge ${RW} ${MW} ${wW}`)
          },
          requestDialogue: () => {
            mR.sendCommand("quests dialogue")
          },
          requestSmuggle: (WW, RW) => {
            mR.sendCommand(`smuggle ${WW} ${RW}`)
          },
          requestKeepersChairAim: WW => {
            mR.sendCommand(`keeperschair-aim ${WW}`)
          },
          requestReachLogOpen: () => {
            mR.sendCommand("reachlog-open")
          },
          requestLampLight: WW => {
            mR.sendCommand(`${WW}`)
          },
          requestTravel: WW => {
            mR.sendCommand(`map travel ${WW.kind} ${WW.id} ${WW.requestId}`)
          }
        });
        let yR, NW, eW, tR, TW, gR, IW, oW, lW, FW, rR, XW, sW;
        const UW = new ub;
        let mR, xR = null;
        const GW = Wy[null !== MW && void 0 !== MW ? MW : ""],
          LW = (WW, RW) => {
            null !== GW && void 0 !== GW && GW.raises(RW) && mR.setNametagOffset(WW, GW.rise)
          },
          HW = new sb({
            getLocalHookPosition: () => {
              const WW = DW.getLocalHook();
              return null !== WW && mR.checkValid(WW) ? mR.yX(WW) : null
            },
            playParticles: WW => {
              mR.playParticleEffect(WW)
            },
            vibrate: WW => {
              nW.d.play("fishBite", WW)
            },
            now: () => performance.now()
          }),
          DW = new Xb({
            getLineOwner: WW => mR.checkValid(WW) ? mR.getLineOwner(WW) : null,
            isLocalPlayer: WW => mR.isLocalPlayer(WW),
            getHookPosition: WW => {
              const [RW, , MW] = mR.yX(WW);
              return [RW, MW]
            },
            isHushWaiting: () => {
              var WW;
              return "waiting" === (null === (WW = bR.hushWait.getSnapshot()) || void 0 === WW ? void 0 : WW.phase)
            },
            onCastLanded: (WW, RW) => {
              bR.tideCharts.castLanded(WW, RW)
            },
            onLocalHookSettled: () => {
              HW.onLocalHookSettled()
            },
            onLocalWaitEnded: WW => {
              HW.onLocalWaitEnded(WW)
            },
            now: () => performance.now()
          }),
          qR = new Gb({
            now: () => performance.now(),
            playerPosition: () => mR.checkValid(AW) ? mR.yX(AW) : null,
            play: (WW, RW, MW, wW, CW, zR) => mR.playSound(AW, WW, RW, 1, {
              N7: MW,
              maxHearDist: wW,
              refDistance: CW
            }, zR)
          }),
          ZW = new Map;
        let SW;
        return {
          onCreate: WW => {
            if (mR = WW, xR = new Hb.SkyblockEntityFacing(WW, GW ? LW : null), bR.portalTransit.resumeArrival(null !== MW && void 0 !== MW ? MW : null), (null !== MW && void 0 !== MW ? MW : wW) === wW) {
              let WW = -1 / 0;
              SW = OW.k.subscribe("toggleMenu", (RW => {
                const MW = performance.now();
                "inventory|Workbench" !== RW || "cross_to_hub" !== bR.quests.getTrackedQuestId() || MW - WW < 1e4 || (WW = MW, mR.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [wW, CW] of Object.entries(null !== (RW = dW[null !== MW && void 0 !== MW ? MW : ""]) && void 0 !== RW ? RW : {})) {
              var RW;
              ZW.set(wW, new Sb({
                hasChunk: (RW, MW, wW) => WW.isBlockInLoadedChunk(RW, MW, wW),
                uF: (RW, MW, wW) => WW.blockIdToBlockName(WW.getBlockId(RW, MW, wW)),
                tMW: (RW, MW, wW, CW) => {
                  WW.tMW(RW, MW, wW, CW)
                },
                playParticles: RW => {
                  WW.playParticleEffect(RW)
                }
              }, CW))
            }
            sW = (0, Lb.g)((WW => function(WW) {
              return Object.hasOwn(mM, WW) || WW.startsWith("npc_")
            }(WW) ? vM(WW) : null)), bR.resolveItemName = (RW, MW) => {
              const wW = WW.getItemStat(AW, RW, "displayName");
              return wW && "object" === typeof wW && "translationKey" in wW ? MW(wW.translationKey, (0, FC.p)(wW.params, pb.d.shown)) : "string" === typeof wW ? MW(wW) : RW
            }, bR.quests.notifications.onShown = WW => {
              "quest" === WW ? mR.playSound(AW, "magicAccent1", 1, 1) : "skillLevel" === WW ? mR.playSound(AW, "magicAccent1", 1, .6) : "landmark" === WW ? mR.playSound(AW, "trumpetFlare", 1, .6) : "npcNote" === WW ? mR.playSound(AW, "magicAccent2", .8, 1.1) : "started" === WW ? mR.playSound(AW, (0, Qb.e)("bigDrumSwish"), 1, 1) : mR.playSound(AW, (0, Qb.e)("rpgHandleSmallLeather"), 1, 1)
            }, bR.forge.onPartSelected = () => {
              mR.playSound(AW, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, bR.forge.onForgeStarted = (RW, MW, wW) => cy(WW, AW, RW, MW, wW), bR.smuggler.onBought = () => {
              mR.playSound(AW, (0, Qb.e)("rpgHandleSmallLeather"), 1, 1), mR.playSound(AW, "chestOpen", .6, 1)
            }, bR.compass.register(new iR(bR.map, !0)), bR.compass.register(new iR(bR.map, !1)), bR.compass.register(new JW(bR.map)), bR.compass.register(new PW((() => bR.quests.getSnapshot().compassTarget)));
            for (const MW of ["enemy", "npc"]) bR.compass.register(new YW(bR.map, MW, (RW => WW.checkValid(RW) ? WW.yX(RW) : void 0), (RW => WW.isAlive(RW))))
          },
          onAfterRender: (WW, RW) => {
            const MW = mR.checkValid(AW) ? mR.yX(AW) : null;
            bR.navigation.afterRender(MW, performance.now(), RW), bR.glowtide.afterRender(MW, RW.cameraHeading), bR.tideCharts.afterRender(MW), DW.afterRender()
          },
          onClose: () => {
            var WW, RW, MW, wW, CW, zR, AW, BW, gR, iR, YW, JW, PW, fW, QW;
            SW && OW.k.unsubscribe(SW), null === (WW = sW) || void 0 === WW || WW(), UW.dispose(), qR.dispose(), null === (RW = xR) || void 0 === RW || RW.dispose(), DW.dispose(), bR.dispose(), null === (MW = yR) || void 0 === MW || MW(), null === (wW = NW) || void 0 === wW || wW(), null === (CW = eW) || void 0 === CW || CW(), null === (zR = tR) || void 0 === zR || zR(), null === (AW = TW) || void 0 === AW || AW(), null === (BW = IW) || void 0 === BW || BW(), null === (gR = undefined) || void 0 === gR || gR(), null === (iR = oW) || void 0 === iR || iR(), null === (YW = lW) || void 0 === YW || YW(), null === (JW = FW) || void 0 === JW || JW(), null === (PW = rR) || void 0 === PW || PW(), null === (fW = undefined) || void 0 === fW || fW(), null === (QW = XW) || void 0 === QW || QW()
          },
          onPlayerChangeBlock: (WW, RW, wW, zR, yR, NW) => {
            if (WW === AW && "Air" === NW) {
              const WW = mR.getClientOption(AW, "creative");
              bR.skills.predictBlock([RW, wW, zR], yR, WW);
              const NW = function(WW, RW) {
                  if ("hub" === RW || "farming_1" === RW || "mining_1" === RW) return !EW.has(WW) || "hub" !== RW && "mining_1" !== RW ? Object.hasOwn(hW, WW) ? hW[WW] : void 0 : pW
                }(yR, MW),
                eW = ("hub" === MW || "mining_1" === MW) && (CW.nd.some((WW => WW === yR)) || Object.hasOwn(VW, yR) || "mining_1" === MW && "Block of Coal" === yR);
              WW || void 0 === NW && !eW || mR.tMW(RW, wW, zR, null !== NW && void 0 !== NW ? NW : pW)
            }
          },
          onPlayerAttackEntity: (WW, RW) => {
            if (WW !== AW || "Player" !== mR.getEntityType(RW)) return;
            const [MW, wW, CW] = mR.yX(RW);
            mR.burstParticlePreset("critical", [MW, wW + 1, CW], 10)
          },
          onChangeBlockFail: WW => {
            for (const {
                bS: RW
              }
              of WW) bR.skills.rejectBlock(RW)
          },
          onReceivedMessageFromServer: (WW, RW) => {
            if ("skyblockGatedPortal" === WW) {
              var MW;
              const [WW, wW] = RW;
              return void(null === (MW = ZW.get(WW)) || void 0 === MW || MW.jC(wW))
            }
            if ("skyblockDailyReward" === WW) return void bR.dailyReward.jC(RW);
            if ("skyblockMailbox" === WW) return void bR.mailbox.jC(RW);
            if ("skyblockPortalTransit" === WW) return void bR.portalTransit.jC(RW);
            if ("skyblockLoot" === WW) return void UW.jC(mR, RW);
            if ("skyblockLava" === WW) return void qR.jC(RW);
            if ("skyblockForge" === WW) return void bR.forge.jC(RW);
            if ("skyblockMagmaward" === WW) return void bR.magmaward.jC(RW);
            if ("skyblockGlowtide" === WW) return void bR.glowtide.jC(RW);
            if ("skyblockGlowMeter" === WW) return void bR.glowMeter.jC(RW);
            if ("skyblockHushWait" === WW) return void bR.hushWait.jC(RW);
            if ("skyblockPassage" === WW) {
              const WW = RW;
              return bR.passage.jC(WW), bR.reachLog.receivePassagePhase(WW.passagePhase), FW ??= (0, fW.A)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: bR.passage.show
              }), void bR.keepersChair.receivePassage({
                keepersChairPassagePhase: WW.passagePhase,
                keepersChairPassageNextPhase: WW.passageNextPhase,
                keepersChairPassageTurnsInMs: WW.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === WW) {
              const WW = RW;
              return bR.tideCharts.jC(WW), void(WW.tideCharts.length > 0 && (rR ??= (0, fW.A)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: bR.tideCharts.show
              })))
            }
            if (WW === vR.D) {
              var wW;
              const {
                hookId: WW,
                waiting: MW
              } = RW;
              return void DW.hookWaiting(WW, null !== (wW = null === MW || void 0 === MW ? void 0 : MW.remainingMs) && void 0 !== wW ? wW : null)
            }
            if ("skyblockBiteTell" === WW) return void HW.receiveTell(RW);
            if ("skyblockSmuggler" === WW) return void bR.smuggler.jC(RW);
            if ("skyblockKeepersChair" === WW) return bR.keepersChair.jC(RW), void bR.lampLight.setAtChair(bR.keepersChair.isAtChair());
            if ("skyblockLampLight" === WW) {
              const WW = RW;
              var CW;
              if (bR.lampLight.jC(WW), WW.lampLightReleasing) lW ??= (0, fW.A)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  bR.lampLight.setRelease(!1)
                }
              });
              else null === (CW = lW) || void 0 === CW || CW(), lW = void 0;
              return
            }
            if ("skyblockRegulars" === WW) return void bR.regulars.jC(RW);
            if ("skyblockHiddenWaters" === WW) return void bR.hiddenWaters.jC(RW);
            if ("skyblockReachLog" === WW) return bR.reachLog.jC(RW), void(oW ??= (0, fW.A)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: cC
              },
              onClick: bR.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === WW) {
              for (const [WW, MW, wW, CW] of RW) mR.tMW(WW, MW, wW, CW);
              return
            }
            if ("skyblockHud" === WW) bR.receiveHud(RW);
            else if ("skyblockMap" === WW) bR.map.jC(RW);
            else if (WW === KW.c) bR.skills.jC(RW);
            else if (WW === jR && "dialogue" === RW.kind) bR.dialogue.jC(RW);
            else if (WW === jR) bR.quests.jC(RW);
            else if (WW === kR.g) bR.dungeons.jC(RW);
            else if ("sbCollections" === WW) bR.collections.jC(RW);
            else if ("skyblockQuestGraph" === WW) bR.questGraph.jC(RW);
            else {
              if ("skyblockAutographs" !== WW) return;
              bR.autographs.jC(RW)
            }
            if (!NW && bR.map.getSnapshot().enabled) {
              const WW = (0, fW.A)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: bR.map.show
                }),
                RW = (0, uW.k)(bR.map.show);
              NW = () => {
                WW(), RW()
              }
            }!eW && bR.skills.getSnapshot().enabled && (eW = (0, fW.A)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: bR.skills.show
            })), !IW && bR.collections.getSnapshot().enabled && (IW = (0, fW.A)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: bR.collections.show
            })), !tR && bR.quests.getSnapshot().enabled && (tR = (0, fW.A)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: bR.quests.show
            })), !XW && bR.autographs.getSnapshot().enabled && (XW = (0, fW.A)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: bR.autographs.show
            }));
            const zR = bR.dungeons.getSnapshot().enabled;
            var AW;
            (eW || tR || zR) && gR !== zR && (gR = zR, null === (AW = TW) || void 0 === AW || AW(), TW = (0, fW.A)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: jM
              },
              disabled: !zR,
              panel: !0,
              onClick: bR.dungeons.show
            }));
            yR || (yR = (0, uW.l)((0, QW.createElement)(Fb, {
              controller: bR
            }), {
              content: (0, QW.createElement)(fb, {
                controller: bR
              }),
              onClose: bR.close
            }))
          },
          WR: () => {
            var WW;
            for (const RW of ZW.values()) RW.WR();
            UW.WR(mR), qR.WR(), null === (WW = xR) || void 0 === WW || WW.WR(), bR.skills.WR(), bR.quests.WR(), bR.dailyReward.WR(), bR.mailbox.WR(), bR.map.WR()
          }
        }
      }
  },
  36586: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      f: () => bR,
      g: () => wW,
      j: () => zR,
      k: () => CW,
      n: () => yR
    });
    const wW = "skyblockDungeons",
      CW = "skyblockHeldBoss",
      zR = "dungeonEnter ",
      AW = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      bR = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function yR(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const MW = Math.max(0, Math.floor(WW)),
        wW = Math.floor(MW % 1e3 / 100),
        CW = Math.floor(MW / 1e3),
        zR = CW % 60,
        AW = Math.floor(CW / 60),
        bR = AW % 60,
        yR = Math.floor(AW / 60),
        NW = WW => WW < 10 ? `0${WW}` : String(WW),
        eW = RW ? `.${wW}` : "";
      return yR > 0 ? `${yR}:${NW(bR)}:${NW(zR)}${eW}` : `${bR}:${NW(zR)}${eW}`
    }
  },
  34660: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      c: () => wW
    });
    const wW = "skyblockSkills",
      CW = "skills_test_gym"
  },
  8157: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      g: () => AW
    });
    const wW = [{
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

    function CW(WW) {
      let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof WW) {
        if (!Number.isFinite(WW)) return "0";
        if (Math.abs(WW) < 100) {
          const RW = WW < 0 ? "-" : "",
            MW = Math.abs(WW);
          return MW >= 10 ? `${RW}${MW.toFixed(1).replace(/\.0$/,"")}` : `${RW}${MW.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RW = BigInt(Math.floor(WW))
      } else RW = WW;
      const CW = RW < 0n ? -RW : RW,
        zR = RW < 0n ? "-" : "",
        AW = CW.toString();
      if (AW.length <= MW) return `${zR}${AW}`;
      const bR = 3 * Math.floor((AW.length - 1) / 3);
      if (bR < 3) return `${zR}${AW}`;
      if (bR > 3 * wW.length) {
        const WW = AW[0],
          RW = AW.slice(1, 3).replace(/0+$/, "");
        return `${zR}${RW?`${WW}.${RW}`:WW}e${AW.length-1}`
      }
      const {
        threshold: yR,
        suffix: NW
      } = wW[wW.length - bR / 3], eW = CW / yR, BW = Number(1000n * (CW % yR) / yR), tR = Number(eW) + BW / 1e3;
      let TW;
      return TW = tR >= 100 ? Math.floor(tR).toString() : tR >= 10 ? tR.toFixed(1).replace(/\.0$/, "") : tR.toFixed(2).replace(/\.?0+$/, ""), `${zR}${TW}${NW}`
    }
    const zR = wW.map((WW => {
      let {
        threshold: RW,
        suffix: MW
      } = WW;
      return {
        threshold: Number(RW),
        suffix: MW
      }
    })).filter((WW => {
      let {
        threshold: RW
      } = WW;
      return Number.isFinite(RW)
    }));

    function AW(WW) {
      const RW = Math.abs(WW),
        MW = WW < 0 ? "-" : "";
      for (const {
          threshold: wW,
          suffix: CW
        }
        of zR)
        if (RW >= wW) {
          const WW = RW / wW;
          if (WW >= 1e3) return `${MW}${RW.toExponential(2).replace("e+","e")}`;
          let zR;
          return zR = WW >= 100 ? Math.floor(WW).toString() : WW >= 10 ? WW.toFixed(1).replace(/\.0$/, "") : WW.toFixed(2).replace(/\.?0+$/, ""), `${MW}${zR}${CW}`
        } return `${MW}${RW}`
    }
  },
  36603: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  36611: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  36616: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  36622: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  36625: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  36629: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/farming_1.8c1332ed7de128af4d0f.png"
  },
  36632: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  36635: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/hub.8b20a64678134496251d.png"
  },
  36640: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  36646: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  36653: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  36660: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  36669: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  36678: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/mining_1_village.914774dac3adbbcb88c2.png"
  },
  17238: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19335: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  21699: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23231: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  24939: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  24959: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);