export const id = 241;
export const ids = [59, 241];
export const modules = {
  39475: (HH, BH, LH) => {
    var AH = {
      "./combat_1.png": 39480,
      "./dungeon_crumbling_crypt.png": 39484,
      "./dungeon_frozen_hollow.png": 39487,
      "./dungeon_wildwood_grove.png": 39496,
      "./dungeons.png": 39501,
      "./farming_1.png": 39510,
      "./fishing_1.png": 39514,
      "./hub.png": 39517,
      "./island.png": 39524,
      "./mining_1.png": 39526,
      "./mining_1_bridge.png": 39528,
      "./mining_1_gallery.png": 39533,
      "./mining_1_hollow.png": 39538,
      "./mining_1_village.png": 39545
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 39475
  },
  39550: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH, BH) {
      return AH.set(HH, BH), HH
    }

    function SH(HH) {
      var BH;
      return null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
    }
  },
  39421: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH, BH, LH) {
        this.AX = HH, this.beforeOpen = BH, this.afterClose = LH, this.open = !1, this.Mu = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Mu && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(HH) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(HH)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Mu = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Mu || (this.snapshot = this.buildSnapshot(), this.AX(this.snapshot))
      }
    }
  },
  39559: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      SkyblockEntityFacing: () => tH,
      needsSkyblockEntityFacing: () => hH
    });
    var AH = LH(614),
      rH = LH(4617),
      SH = LH(39568);

    function hH(HH, BH) {
      if (HH.metaInfo === AH.e || "Iron Guardian" === HH.type || "Gold Guardian" === HH.type) return !0;
      if ("Pig" === HH.type) return "sitting" === HH.pose;
      if ("Person" !== HH.meshKind || void 0 === HH.meshOpts) return !1;
      let LH = null === BH || void 0 === BH ? void 0 : BH.get(HH.meshOpts);
      if (void 0 === LH) {
        var SH, hH;
        const AH = (0, rH.i)(HH);
        LH = !1, "pig_napoleon" === (null === AH || void 0 === AH || null === (SH = AH.opts.textures) || void 0 === SH ? void 0 : SH.head) ? LH = !0 : "npc_pig_head" === (null === AH || void 0 === AH || null === (hH = AH.opts.textures) || void 0 === hH ? void 0 : hH.head) && (LH = "sitting" === AH.opts.pose || "sitting"), BH && (BH.size >= 256 && BH.clear(), BH.set(HH.meshOpts, LH))
      }
      return "sitting" === LH ? "sitting" === HH.pose : LH
    }(0, SH.c)("skyblock", ((HH, BH) => {
      BH.setFacingTolerance(hH(HH) ? 0 : null)
    }));
    class tH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = HH, this.alsoVisit = BH, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = HH => {
          var BH;
          const LH = this.api.getEntityInfo(HH);
          LH && (hH(LH, this.meshFacingCache) && (this.api.setFacingTolerance(HH, 0), this.nextFacing.add(HH)), null === (BH = this.alsoVisit) || void 0 === BH || BH.call(this, HH, LH))
        }
      }
      IX() {
        const {
          api: HH
        } = this, BH = this.nextFacing;
        HH.forEachEntity(this.visit);
        for (const LH of this.facing) BH.has(LH) || HH.setFacingTolerance(LH, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = BH
      }
      dispose() {
        for (const HH of this.facing) this.api.setFacingTolerance(HH, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39403: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => Kt
    });
    const AH = "island";
    var rH = LH(39408);

    function SH(HH, BH, LH) {
      const SH = "local" === BH,
        tH = HH.background,
        zH = BH => tH ? (0, rH.c)(BH[0] - HH.mapOrigin[0], BH[2] - HH.mapOrigin[2], tH.bounds) : [50, 50],
        CH = (HH.insideDungeon ? [] : HH.landmarks).map((HH => {
          var BH, AH;
          return {
            id: HH.id,
            name: LH(HH.visited && HH.nameKey ? null !== (BH = HH.mapLabelKey) && void 0 !== BH ? BH : HH.nameKey : "skyblockGame:mapUnknown"),
            icon: HH.visited && null !== (AH = HH.icon) && void 0 !== AH ? AH : "unknown",
            visited: HH.visited,
            current: !1,
            position: zH(HH.position),
            travelKind: "landmark",
            travelId: HH.id
          }
        })),
        EH = HH.zones.map((BH => {
          var AH;
          return {
            id: BH.id,
            name: LH(BH.visited && BH.nameKey ? BH.nameKey : "skyblockGame:mapUnknown"),
            icon: BH.visited && null !== (AH = BH.icon) && void 0 !== AH ? AH : "unknown",
            visited: BH.visited,
            current: BH.id === HH.zoneId,
            position: BH.position,
            thumbnail: BH.visited ? BH.id : void 0,
            travelKind: "zone",
            travelId: BH.id
          }
        })),
        XH = HH.insideDungeon || !tH ? [] : HH.portals.map((HH => {
          var BH;
          return {
            id: HH.id,
            name: LH(null !== (BH = HH.nameKey) && void 0 !== BH ? BH : "skyblockGame:mapUnknown"),
            icon: HH.visited ? "dungeons" === HH.destination ? "portal_orange" : "portal" : "unknown",
            visited: HH.visited,
            current: !1,
            position: zH(HH.position),
            colour: HH.colour,
            travelKind: "zone",
            travelId: HH.destination
          }
        })),
        GH = SH ? CH : EH,
        YH = GH.filter((HH => HH.visited)).length,
        uH = tH ? (tH.bounds.mapMaxX - tH.bounds.mapMinX) / (tH.bounds.mapMaxZ - tH.bounds.mapMinZ) : 2,
        QH = tH ? JSON.stringify([tH.bounds, HH.mapOrigin]) : "";
      return {
        local: SH,
        points: GH,
        portals: SH ? XH : [],
        progress: GH.length ? LH("skyblockGame:mapDiscovered", {
          current: String(YH),
          total: String(GH.length)
        }) : null,
        percent: GH.length ? 100 * YH / GH.length : 0,
        canTravel: [...GH, ...SH ? XH : []].some((HH => HH.visited && !HH.current)),
        noLandmarks: SH && !HH.insideDungeon && 0 === CH.length,
        background: tH ? {
          imageKey: tH.imageKey,
          fallbackImageKey: HH.zoneId,
          geometryKey: QH,
          label: LH(tH.labelKey),
          colour: tH.backgroundColour,
          ratio: uH
        } : null,
        connections: hH(HH.zones),
        minimap: tH ? {
          imageKey: tH.imageKey,
          fallbackImageKey: HH.zoneId,
          geometryKey: QH,
          label: LH(tH.labelKey),
          colour: tH.backgroundColour,
          caption: LH(HH.zoneId === AH ? "skyblockGame:zoneIsland" : tH.labelKey),
          width: (tH.bounds.mapMaxX - tH.bounds.mapMinX) / tH.minimapSpan * 100 + "%",
          height: (tH.bounds.mapMaxZ - tH.bounds.mapMinZ) / tH.minimapSpan * 100 + "%",
          markers: [...CH, ...XH]
        } : null
      }
    }

    function hH(HH) {
      const BH = new Set;
      return HH.flatMap((LH => LH.connections.flatMap((AH => {
        const rH = HH.find((HH => HH.id === AH)),
          SH = [LH.id, AH].sort().join("|");
        return !rH || BH.has(SH) ? [] : (BH.add(SH), [{
          id: `${LH.id}-${AH}`,
          start: LH.position,
          end: rH.position,
          explored: LH.visited && rH.visited
        }])
      }))))
    }
    var tH = LH(39421);
    class zH extends tH.b {}
    const CH = "skyblockMapView";
    class EH extends zH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(HH, AH, rH), this.requestTravel = BH, this.translate = LH, this.now = SH, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = HH => {
          this.tab = HH, this.feedbackKey = "", this.emit()
        }, this.travel = (HH, BH) => {
          if (!this.map || this.pending || this.Mu) return;
          const LH = ("zone" === HH ? this.map.zones : this.map.landmarks).find((HH => HH.id === BH));
          if (LH) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in LH && !LH.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (LH.visited)
              if ("zone" === HH && BH === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const LH = ++this.nextRequestId;
                this.pending = {
                  requestId: LH,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: HH,
                  id: BH,
                  requestId: LH
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
      setTranslator(HH) {
        this.translate = HH, this.emit()
      }
      kX(HH) {
        var BH;
        if (!this.Mu)
          if ("entities" !== HH.kind)
            if ("open" !== HH.kind) {
              var LH, AH;
              if ("snapshot" === HH.kind)(null === (LH = HH.snapshot) || void 0 === LH ? void 0 : LH.zoneId) !== (null === (AH = this.map) || void 0 === AH ? void 0 : AH.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = HH.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === HH.kind) {
                var rH;
                HH.requestId === (null === (rH = this.pending) || void 0 === rH ? void 0 : rH.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (HH.requestId === (null === (BH = this.pending) || void 0 === BH ? void 0 : BH.requestId)) {
                var SH;
                this.pending = null, this.feedbackKey = null !== (SH = HH.errorKey) && void 0 !== SH ? SH : "", null === HH.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = HH.entities
      }
      IX() {
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
          presentation: this.map ? SH(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var XH = LH(317);
    const GH = 67.5 * Math.PI / 180;

    function YH(HH, BH) {
      const LH = Math.abs(HH);
      if (LH > GH || BH.trackHalfWidth <= 0) return null;
      const AH = BH.trackHalfWidth,
        rH = BH.screenHalfWidth / (BH.tanHalfFovX * Math.max(.5, Math.cos(BH.pitch))),
        SH = Math.min(Math.atan(.6 * AH / rH), .75 * GH),
        hH = rH * Math.tan(SH);
      let tH;
      if (LH <= SH) tH = rH * Math.tan(LH);
      else {
        const HH = GH - SH,
          BH = Math.max(0, rH * HH / (Math.cos(SH) ** 2 * (AH - hH)) - 1),
          zH = (LH - SH) / HH;
        tH = hH + (AH - hH) * (1 + BH) * zH / (1 + BH * zH)
      }
      return 50 + Math.sign(HH) * tH * 50 / AH
    }
    class uH {
      constructor(HH, BH) {
        this.map = HH, this.visited = BH, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = BH ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const HH = this.map.getSnapshot().map;
        return !HH || HH.insideDungeon ? [] : HH.landmarks.filter((HH => HH.visited === this.visited)).map((HH => {
          var BH, LH;
          return {
            id: `landmark:${HH.id}`,
            position: HH.position,
            icon: null !== (BH = HH.icon) && void 0 !== BH ? BH : "unknown",
            nameKey: null !== (LH = HH.nameKey) && void 0 !== LH ? LH : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class QH {
      constructor(HH, BH, LH, AH) {
        this.map = HH, this.kind = BH, this.position = LH, this.alive = AH, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = BH, this.range = "enemy" === BH ? 48 : 64, this.limit = 12
      }
      hT(HH) {
        if ("enemy" !== this.kind || this.alive(HH.vB)) return this.position(HH.vB)
      }
      getPoints() {
        const HH = [];
        for (const AH of this.map.getEntities()) {
          if (AH.kind !== this.kind || "enemy" === this.kind && !this.alive(AH.compassEntityId)) continue;
          const rH = this.position(AH.compassEntityId);
          var BH, LH;
          if (rH) HH.push({
            id: `${this.kind}:${AH.compassEntityId}`,
            vB: AH.compassEntityId,
            kind: this.kind,
            icon: null !== (BH = AH.icon) && void 0 !== BH ? BH : AH.npcSkin ? `npc_${AH.npcSkin}` : this.kind,
            displayName: AH.displayName,
            position: rH,
            nameKey: null !== (LH = AH.nameKey) && void 0 !== LH ? LH : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return HH
      }
    }
    class WH {
      constructor(HH) {
        this.map = HH, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const HH = this.map.getSnapshot().map;
        return !HH || HH.insideDungeon ? [] : HH.portals.map((HH => {
          var BH;
          return {
            id: "portal:" + HH.id,
            kind: "portal",
            position: HH.position,
            nameKey: null !== (BH = HH.nameKey) && void 0 !== BH ? BH : "skyblockGame:compassUnvisitedZone",
            icon: HH.visited ? "dungeons" === HH.destination ? "portal_orange" : "portal" : "unknown",
            colour: HH.colour
          }
        }))
      }
    }
    class MH {
      constructor(HH) {
        this.target = HH, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const HH = this.target();
        return HH ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: HH.position,
          nameKey: HH.nameKey
        }] : []
      }
    }

    function xH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.position;
      const rH = AH[0] - BH[0],
        SH = AH[2] - BH[2];
      return {
        ...HH,
        position: AH,
        offset: XH.d.computeShortestRotation(LH, (0, XH.yb)([rH, 0, SH])),
        distance: Math.hypot(rH, AH[1] - BH[1], SH)
      }
    }
    let vH;

    function PH(HH, BH) {
      var LH;
      return (null === (LH = vH) || void 0 === LH ? void 0 : LH.locale) !== BH && (vH = {
        locale: BH,
        near: new Intl.NumberFormat(BH, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(BH, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (HH < 10 ? vH.near : vH.far).format(HH)
    }
    class TH {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(HH) {
        return this.providers.set(HH.id, HH), this.refreshAt = 0, () => {
          this.providers.get(HH.id) === HH && (this.providers.delete(HH.id), this.refreshAt = 0)
        }
      }
      frame(HH, BH, LH) {
        if (LH >= this.refreshAt) {
          this.refreshAt = LH + 200, this.candidates = [];
          for (const BH of this.providers.values()) {
            if (!BH.enabled) continue;
            const LH = BH.getPoints().map((BH => {
              const LH = BH.position;
              return {
                point: BH,
                distance: Math.hypot(LH[0] - HH[0], LH[1] - HH[1], LH[2] - HH[2])
              }
            })).filter((HH => HH.distance <= BH.range)).sort(((HH, BH) => HH.distance - BH.distance)).slice(0, BH.limit);
            for (const {
                point: HH
              }
              of LH) this.candidates.push({
              provider: BH,
              point: HH
            })
          }
        }
        const AH = [];
        for (const {
            point: rH,
            provider: SH
          }
          of this.candidates) {
          if (!SH.enabled) continue;
          const LH = SH.hT ? SH.hT(rH) : rH.position;
          if (LH) {
            const SH = xH(rH, HH, BH, LH);
            Math.abs(SH.offset) <= GH && AH.push(SH)
          }
        }
        return AH
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var UH = LH(37479),
      VH = LH(45);
    const OH = [{
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
      bH = OH.length;

    function kH(HH) {
      return HH >= bH ? 1 : HH + 1
    }
    const mH = "skyblockQuests",
      oH = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      IH = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function fH(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const LH = Math.max(0, Math.floor(HH)),
        AH = Math.floor(LH % 1e3 / 100),
        rH = Math.floor(LH / 1e3),
        SH = rH % 60,
        hH = Math.floor(rH / 60),
        tH = hH % 60,
        zH = Math.floor(hH / 60),
        CH = HH => HH < 10 ? `0${HH}` : String(HH),
        EH = BH ? `.${AH}` : "";
      return zH > 0 ? `${zH}:${CH(tH)}:${CH(SH)}${EH}` : `${tH}:${CH(SH)}${EH}`
    }
    const lH = "devquests",
      KH = "none",
      cH = {
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
      eH = "Compressed Messy Stone",
      qH = {
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
      gH = ["Stone", "Diorite", "Andesite", "Granite"],
      NH = new Set(gH),
      RH = (Object.keys(qH), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const jH = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function nH(HH, BH) {
      const LH = Math.floor(5 * HH / (2 * BH + 1));
      return Math.min(4, Math.max(0, LH))
    }
    var FH = LH(1182);
    var DH = LH(37235);
    var wH = LH(37474),
      ZH = LH(18),
      dH = LH(9577);
    const aH = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      sH = 1e3;

    function JH(HH) {
      return Math.max(0, HH)
    }

    function iH(HH) {
      return 1 + .01 * JH(HH)
    }

    function pH(HH) {
      return 1 + .005 * JH(HH)
    }

    function yH(HH) {
      return 1 + .005 * JH(HH)
    }

    function HB(HH) {
      return .01 * JH(HH)
    }

    function BB(HH) {
      return 150 / (150 + JH(HH))
    }

    function LB(HH) {
      return 1 + .002 * JH(HH)
    }

    function AB(HH) {
      return Math.round(10 * HH) / 10
    }

    function rB(HH, BH) {
      switch (HH) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: AB(100 * (pH(BH) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: AB(100 * (iH(BH) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: AB(100 * (yH(BH) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: AB(100 * HB(BH))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: AB(100 * (1 - BB(BH)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: AB(100 * (LB(BH) - 1))
          }
      }
    }

    function SB(HH) {
      return "farming" === HH ? 200 : 100
    }

    function hB(HH, BH) {
      if (!Number.isSafeInteger(HH) || HH < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const LH = SB(BH),
        AH = HH => function(HH, BH) {
          return SB(HH) * BH * (BH + 1) / 2
        }(BH, HH);
      let rH = Math.min(sH, Math.floor((Math.sqrt(8 * HH / LH + 1) - 1) / 2));
      return rH < sH && AH(rH + 1) <= HH ? rH++ : AH(rH) > HH && rH--, {
        totalXp: HH,
        level: rH,
        xpIntoLevel: HH - AH(rH),
        xpForNextLevel: rH === sH ? null : LH * (rH + 1)
      }
    }
    const tB = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function zB(HH) {
      return tB.has(HH)
    }
    const CB = new Set(XH.ob);

    function EB(HH) {
      return CB.has(HH)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const XB = {
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
      GB = {
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
      YB = {
        ...GB,
        ...Object.fromEntries(Object.entries(RH).map((HH => {
          let [BH, LH] = HH;
          return [BH, 9 * GB[LH]]
        })))
      },
      uB = {
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
      QB = {
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
    const WB = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      MB = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function xB(HH) {
      return `rgb(${MB[HH].join(", ")})`
    }

    function vB(HH, BH, LH) {
      if (!LH) return HH(BH);
      const AH = {};
      for (const [rH, SH] of Object.entries(LH)) AH[rH] = "string" === typeof SH ? SH : HH(SH.translationKey);
      return HH(BH, AH)
    }
    class PB {
      constructor(HH, BH) {
        this.now = HH, this.getJournal = BH, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.LX = !1, this.onShown = () => {}
      }
      enqueue(HH) {
        const BH = TB(HH);
        if (BH) this.pending.push(HH);
        else {
          const BH = this.pending.findIndex(TB);
          this.pending.splice(-1 === BH ? this.pending.length : BH, 0, HH)
        }
        return (null === this.current || null !== this.followUp && !BH) && (this.advance(), !0)
      }
      setHeld(HH) {
        return this.LX = HH, !HH && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      IX() {
        const HH = this.getJournal(),
          BH = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === BH ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === BH || void 0 === BH ? void 0 : BH.kind) && HH && HH.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === BH || void 0 === BH ? void 0 : BH.kind)) {
          const HH = this.findFollowUp(this.current);
          if ("step" !== (null === HH || void 0 === HH ? void 0 : HH.kind) || HH.questId !== BH.questId || HH.step.id !== BH.step.id) return this.showFollowUp(HH, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(HH, BH, LH) {
        var AH, rH, SH, hH;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, HH, LH);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, HH);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, HH, BH);
        const {
          questCompletionKind: tH,
          questCompletionNameKey: zH
        } = this.current, CH = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, EH = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, XH = "step" === (null === (AH = this.followUp) || void 0 === AH ? void 0 : AH.kind) ? this.followUp : null, GH = "explore" === (null === (rH = this.followUp) || void 0 === rH ? void 0 : rH.kind);
        let YH;
        return YH = GH ? HH("skyblockGame:questExploreTitle") : null !== XH ? "quest" === tH ? HH("skyblockGame:questNextQuestTitle", {
          quest: HH(XH.questNameKey)
        }) : HH("skyblockGame:questNextStepTitle") : HH("started" === tH ? "skyblockGame:questStartedTitle" : "quest" === tH ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? tH : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: YH,
          name: GH ? BH("skyblockGame:questExploreName") : null !== XH ? vB(BH, XH.step.nameKey, XH.step.nameParams) : vB(BH, zH, CH),
          description: GH ? BH("skyblockGame:questExploreDescription") : null === XH ? null : vB(BH, XH.step.descriptionKey, XH.step.descriptionParams),
          reward: null === this.followUp && EH > 0 ? BH("skyblockGame:questCoinRewardSuffix", {
            amount: EH.toLocaleString(LH)
          }) : null,
          iconItem: null !== (SH = null === XH || void 0 === XH ? void 0 : XH.step.questIconItem) && void 0 !== SH ? SH : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== XH && (null === (hH = this.getJournal()) || void 0 === hH ? void 0 : hH.trackedQuestId) === XH.questId ? XH.step.nameKey : null
        }
      }
      getSkillLevelView(HH, BH, LH) {
        let {
          skill: AH,
          beforeLevel: rH,
          level: SH
        } = HH;
        const hH = rB(AH, rH),
          tH = rB(AH, SH);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: BH(`skyblockGame:${AH}`),
          name: BH("skyblockGame:skillLevelUp", {
            to: SH.toLocaleString(LH)
          }),
          description: hH.percent === tH.percent ? null : BH(`${tH.translationKey}Change`, {
            before: hH.percent.toLocaleString(LH),
            after: tH.percent.toLocaleString(LH)
          }),
          reward: null,
          iconItem: WB[AH],
          accent: xB(AH),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(HH, BH) {
        let {
          landmarkNameKey: LH
        } = HH;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: BH("skyblockGame:landmarkDiscovered"),
          name: BH(LH),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(HH, BH, LH) {
        let {
          titleKey: AH,
          textKey: rH,
          params: SH = {},
          nameKeys: hH = {},
          iconItem: tH = null
        } = HH;
        const zH = {
          ...SH
        };
        for (const [CH, EH] of Object.entries(hH)) zH[CH] = BH(EH);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: BH(AH),
          name: LH(rH, zH),
          description: null,
          reward: null,
          iconItem: tH,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var HH;
        if (null !== this.followUp) return 5600;
        switch (null === (HH = this.current) || void 0 === HH ? void 0 : HH.questCompletionKind) {
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
      showFollowUp(HH, BH) {
        null === HH || this.LX ? this.advance() : (this.followUp = HH, this.token++, this.shownAt = this.now(), this.expiresAt = null !== BH && void 0 !== BH ? BH : this.shownAt + this.durationMs())
      }
      findFollowUp(HH) {
        var BH;
        const LH = this.getJournal();
        if (!LH || this.hasPendingQuestPopup() || TB(HH)) return null;
        const AH = "started" === HH.questCompletionKind ? LH.active.some((BH => BH.id === HH.questCompletionQuestId)) : "quest" === HH.questCompletionKind ? LH.completed.some((BH => BH.id === HH.questCompletionQuestId)) : [...LH.active, ...LH.completed].some((BH => BH.id === HH.questCompletionQuestId && BH.subquests.some((BH => BH.id === HH.questCompletionStepId && "completed" === BH.status))));
        if (!AH) return null;
        if ("quest" === HH.questCompletionKind && 0 === LH.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const rH = LH.active.find((HH => HH.id === LH.trackedQuestId)),
          SH = null !== (BH = null === rH || void 0 === rH ? void 0 : rH.subquests.find((HH => "ready" === HH.status))) && void 0 !== BH ? BH : null === rH || void 0 === rH ? void 0 : rH.subquests.find((HH => "active" === HH.status));
        return SH ? {
          kind: "step",
          questId: rH.id,
          questNameKey: rH.nameKey,
          step: SH
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((HH => !TB(HH)))
      }
      advance() {
        var HH;
        this.current = this.LX ? null : null !== (HH = this.pending.shift()) && void 0 !== HH ? HH : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function TB(HH) {
      return UB(HH.questCompletionKind)
    }

    function UB(HH) {
      return "skillLevel" === HH || "landmark" === HH || "npcNote" === HH
    }
    var VB = LH(39425),
      OB = LH(39433),
      bB = LH(39388),
      kB = LH(4627);
    const mB = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function oB(HH) {
      const BH = new kB.g(HH);
      return {
        radius: 45,
        squareness: 3,
        wobbles: mB.map((HH => {
          let {
            lobes: LH,
            amount: AH
          } = HH;
          return {
            lobes: LH[Math.floor(BH.next() * LH.length)],
            amount: AH[0] + BH.next() * (AH[1] - AH[0]),
            phase: 2 * BH.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function IB(HH) {
      let {
        radius: BH,
        squareness: LH,
        wobbles: AH,
        samples: rH
      } = HH;
      const SH = [];
      for (let hH = 0; hH < rH; hH++) {
        const HH = 2 * Math.PI * hH / rH,
          tH = Math.cos(HH),
          zH = Math.sin(HH),
          CH = BH * (Math.abs(tH) ** LH + Math.abs(zH) ** LH) ** (-1 / LH) * AH.reduce(((BH, LH) => {
            let {
              lobes: AH,
              amount: rH,
              phase: SH
            } = LH;
            return BH + rH * Math.sin(AH * HH + SH)
          }), 1);
        SH.push(`${(50+CH*tH).toFixed(2)} ${(50+CH*zH).toFixed(2)}`)
      }
      return `M${SH.join("L")}Z`
    }
    const fB = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class lB {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Mu = !1, this.mountCompass = HH => {
          var BH;
          if (null === (BH = this.stopLayout) || void 0 === BH || BH.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !HH || this.Mu) return;
          const LH = HH.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: HH,
            track: LH,
            label: HH.querySelector(".SkyblockCompassLabel")
          }, LH.replaceChildren();
          for (let rH = 0; rH < 4; rH++) {
            const HH = document.createElement("span");
            HH.className = "SkyblockCompassCardinal", LH.appendChild(HH), this.cardinals.push(HH)
          }
          const AH = (0, bB.c)(fB, [HH], this.layout);
          this.stopLayout = () => {
            AH(), LH.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = HH => {
          this.terrain = this.Mu ? null : HH, this.render(this.frame)
        }, this.mountMinimapSearchArea = HH => {
          this.mountSearchArea("minimap", HH)
        }, this.mountMapSearchArea = HH => {
          this.mountSearchArea("map", HH)
        }, this.mountPlayer = HH => {
          this.player = this.Mu ? null : HH, this.render(this.frame)
        }, this.mountWaypoint = HH => {
          var BH, LH;
          if (null === (BH = this.stopWaypoint) || void 0 === BH || BH.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !HH || this.Mu) return;
          const AH = HH.querySelector(".SkyblockQuestWaypointMarker");
          AH.replaceChildren((0, OB.e)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: HH,
            marker: AH,
            clip: HH.querySelector(".SkyblockQuestWaypointTextClip"),
            text: HH.querySelector(".SkyblockQuestWaypointText"),
            label: HH.querySelector(".SkyblockQuestWaypointLabel"),
            distance: HH.querySelector(".SkyblockQuestWaypointDistance"),
            hint: HH.querySelector(".SkyblockQuestWaypointHint")
          };
          const rH = () => {
              this.waypointMarkerSize = {
                width: AH.offsetWidth,
                height: AH.offsetHeight
              }, this.waypointInset = {
                x: AH.offsetWidth / 2 + 8,
                top: AH.offsetHeight + 8,
                bottom: 8
              }
            },
            SH = new ResizeObserver((() => {
              rH(), this.render(this.frame)
            }));
          SH.observe(AH, {
            box: "border-box"
          });
          const hH = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", hH), null === (LH = window.visualViewport) || void 0 === LH || LH.addEventListener("resize", hH), this.stopWaypoint = () => {
            var HH;
            SH.disconnect(), window.removeEventListener("resize", hH), null === (HH = window.visualViewport) || void 0 === HH || HH.removeEventListener("resize", hH)
          }, hH(), rH(), this.render(this.frame)
        }, this.mountWaypointOrigin = HH => {
          var BH;
          if (null === (BH = this.stopWaypointOrigin) || void 0 === BH || BH.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = HH && !this.Mu ? Number(HH.dataset.notificationToken) : null, HH && !this.Mu && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const BH = {
              nameKey: HH.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = BH;
            const LH = () => {
                const LH = HH.getBoundingClientRect();
                BH.x = (LH.left + LH.width / 2) / window.innerWidth * 100, BH.y = (LH.top + LH.height / 2) / window.innerHeight * 100
              },
              AH = new ResizeObserver(LH);
            AH.observe(HH.parentElement), AH.observe(HH), window.addEventListener("resize", LH), this.stopWaypointOrigin = () => {
              AH.disconnect(), window.removeEventListener("resize", LH)
            }, LH()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const HH = this.compass.root,
            BH = getComputedStyle(HH),
            LH = getComputedStyle(document.documentElement),
            AH = parseFloat(LH.fontSize),
            rH = parseFloat(BH.getPropertyValue("--compass-icon-size")) * AH,
            SH = "1" === BH.getPropertyValue("--compass-fit-top").trim(),
            hH = SH ? 1 : 8,
            tH = Array.from(document.querySelectorAll(fB), (HH => {
              var BH;
              return (null !== (BH = HH.querySelector(".MiddleTextTop")) && void 0 !== BH ? BH : HH).getBoundingClientRect()
            })).filter((HH => HH.width > 0 && HH.height > 0));
          let zH = (parseFloat(LH.getPropertyValue("--notchTop")) || 0) + hH,
            CH = "";
          if (SH) {
            const BH = window.innerWidth / 2,
              LH = HH.getBoundingClientRect().height,
              SH = [zH, ...tH.map((HH => Math.max(zH, HH.bottom + hH)))].sort(((HH, BH) => HH - BH));
            for (const HH of SH) {
              let SH = BH - 8;
              for (const AH of tH) AH.bottom + hH <= HH || AH.top >= HH + LH + hH || (SH = Math.min(SH, AH.right <= BH ? BH - AH.right - 8 : AH.left - BH - 8));
              const EH = 2 * SH - rH;
              if (EH >= 16 * AH) {
                CH = `${EH}px`, zH = HH;
                break
              }
            }
          }
          HH.style.maxWidth !== CH && (HH.style.maxWidth = CH);
          const EH = HH.getBoundingClientRect(),
            XH = this.compassSize.trackHalfWidth;
          if (EH.width > 0) {
            const HH = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: HH.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * rH / HH.width
          }
          if (!CH)
            for (const GH of tH) GH.right > EH.left - 8 && GH.left < EH.right + 8 && (zH = Math.max(zH, GH.bottom + hH));
          HH.style.top = `${zH}px`, this.compassSize.trackHalfWidth !== XH && this.render(this.frame)
        }
      }
      mountSearchArea(HH, BH) {
        this.searchAreas[HH] = this.Mu ? null : BH, this.render(this.frame)
      }
      render(HH) {
        if (this.Mu) return;
        if (this.frame = HH, this.compass && (KB(this.compass.root, !HH), HH)) {
          const BH = this.compassSize.trackHalfWidth / 50;
          HH.compass.cardinals.forEach(((HH, LH) => {
            const AH = this.cardinals[LH];
            AH.textContent !== HH.name && (AH.textContent = HH.name), KB(AH, HH.hidden), AH.style.translate = HH.left * BH + "px"
          }));
          const LH = new Set;
          HH.compass.markers.forEach(((AH, rH) => {
            var SH;
            LH.add(AH.id);
            let hH = this.markers.get(AH.id);
            hH || (hH = document.createElement("span"), hH.className = "SkyblockCompassMarker", this.markers.set(AH.id, hH), this.compass.track.appendChild(hH)), hH.dataset.icon !== AH.icon && (hH.dataset.icon = AH.icon, hH.replaceChildren((0, OB.e)(AH.icon))), hH.style.color = null !== (SH = AH.colour) && void 0 !== SH ? SH : "", hH.style.translate = AH.left * BH + "px", hH.style.zIndex = String(HH.compass.markers.length - rH), hH.title !== AH.name && (hH.title = AH.name)
          }));
          for (const [HH, AH] of this.markers) LH.has(HH) || (AH.remove(), this.markers.delete(HH));
          this.compass.label.textContent !== HH.compass.label && (this.compass.label.textContent = HH.compass.label)
        }
        this.terrain && (KB(this.terrain, !(null !== HH && void 0 !== HH && HH.minimap)), null !== HH && void 0 !== HH && HH.minimap && (this.terrain.style.transform = HH.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", HH.minimap.iconRotation)));
        const BH = null === HH || void 0 === HH ? void 0 : HH.searchArea;
        for (const LH of [this.searchAreas.minimap, this.searchAreas.map])
          if (LH && (KB(LH, !BH), BH)) {
            if (this.searchAreaPath.seed !== BH.shapeSeed && (this.searchAreaPath = {
                seed: BH.shapeSeed,
                d: IB(oB(BH.shapeSeed))
              }), LH.dataset.shapeSeed !== BH.shapeSeed) {
              LH.dataset.shapeSeed = BH.shapeSeed;
              for (const HH of LH.querySelectorAll("path")) HH.setAttribute("d", this.searchAreaPath.d)
            }
            LH.style.left = `${BH.left}%`, LH.style.top = `${BH.top}%`, LH.style.width = `${BH.width}%`, LH.style.height = `${BH.height}%`
          } if (this.player && (KB(this.player, !(null !== HH && void 0 !== HH && HH.player) || HH.player.hidden), null !== HH && void 0 !== HH && HH.player && (this.player.style.left = `${HH.player.left}%`, this.player.style.top = `${HH.player.top}%`, this.player.style.setProperty("--map-player-rotation", HH.player.rotation))), this.waypoint) {
          const {
            root: BH,
            marker: LH,
            clip: AH,
            text: rH,
            label: SH,
            distance: hH,
            hint: tH
          } = this.waypoint, zH = !(null !== HH && void 0 !== HH && HH.waypoint) || null !== HH.waypoint.popupToken && HH.waypoint.popupToken !== this.waypointOriginToken;
          KB(BH, zH);
          let CH = 1;
          const EH = this.waypointLaunch;
          if (!zH && EH && HH.waypoint.nameKey === EH.nameKey) {
            const HH = performance.now();
            EH.startedAt ??= HH, CH = Math.min(1, Math.max(0, (HH - EH.startedAt - 450) / 1e3)), LH.style.opacity = String(Math.min(1, (HH - EH.startedAt) / 150)), 1 === CH && (this.waypointLaunch = null)
          } else LH.style.opacity = "", EH && null !== EH.startedAt && (this.waypointLaunch = null);
          if (BH.classList.toggle("Launching", CH < 1), null !== HH && void 0 !== HH && HH.waypoint) {
            const BH = this.waypointInset,
              zH = "quest_talk" === HH.waypoint.markerIcon ? function(HH, BH, LH) {
                if (!HH.text || null === HH.blockHeight || 0 === HH.nearness) return HH;
                const AH = HH.blockHeight / 100 * LH.height,
                  rH = -HH.nearness * (cB * AH + BH.width / 2),
                  SH = HH.nearness * (eB * AH + BH.height / 2);
                return {
                  ...HH,
                  text: {
                    x: HH.text.x + rH / LH.width * 100,
                    y: HH.text.y + SH / LH.height * 100
                  }
                }
              }(HH.waypoint, this.waypointMarkerSize, this.viewport) : HH.waypoint,
              XH = (0, VB.e)(zH, BH, this.viewport),
              GH = CH * CH * (3 - 2 * CH),
              YH = CH < 1 ? EH.x + (XH.x - EH.x) * GH : XH.x,
              uH = CH < 1 ? EH.y + (XH.y - EH.y) * GH : XH.y;
            LH.style.translate = `${YH}vw ${uH}vh`, AH.style.clipPath = `inset(${BH.top}px ${BH.x}px ${BH.bottom}px)`, KB(rH, CH < 1 || !HH.waypoint.text), rH.style.opacity = String(1 - HH.waypoint.nearness), HH.waypoint.text && (rH.style.translate = `${HH.waypoint.text.x}vw ${HH.waypoint.text.y}vh`), SH.textContent !== HH.waypoint.name && (SH.textContent = HH.waypoint.name), this.markerIcon !== HH.waypoint.markerIcon && (this.markerIcon = HH.waypoint.markerIcon, LH.replaceChildren((0, OB.e)(this.markerIcon))), hH.textContent !== HH.waypoint.distance && (hH.textContent = HH.waypoint.distance), KB(tH, null === HH.waypoint.hint), null !== HH.waypoint.hint && tH.textContent !== HH.waypoint.hint && (tH.textContent = HH.waypoint.hint)
          }
        }
      }
      dispose() {
        var HH, BH;
        this.mountWaypointOrigin(null), this.render(null), null === (HH = this.stopLayout) || void 0 === HH || HH.call(this), this.stopLayout = null, null === (BH = this.stopWaypoint) || void 0 === BH || BH.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Mu = !0
      }
    }

    function KB(HH, BH) {
      HH.hidden !== BH && (HH.hidden = BH)
    }
    const cB = .55,
      eB = .6;
    var qB = LH(39415);
    const gB = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class NB {
      constructor(HH, BH, LH, AH) {
        this.map = HH, this.quests = BH, this.compass = LH, this.display = new lB, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Mu = !1, this.snapshot = null, this.texts = new Map, this.translate = AH
      }
      setTranslator(HH, BH) {
        this.translate = HH, this.locale = BH, this.metresFormat = new Intl.NumberFormat(BH), this.texts.clear()
      }
      translateCached(HH, BH) {
        const LH = void 0 === BH ? HH : `${HH} ${BH}`;
        let AH = this.texts.get(LH);
        return void 0 === AH && (this.texts.size >= 500 && this.texts.clear(), AH = this.translate(HH, void 0 === BH ? void 0 : {
          distance: BH
        }), this.texts.set(LH, AH)), AH
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(HH, BH, LH) {
        if (this.Mu) return;
        if (!HH) return this.snapshot = null, void this.display.render(null);
        const AH = this.map.getSnapshot().map,
          SH = LH.cameraHeading,
          hH = {
            ...this.display.compassSize,
            tanHalfFovX: LH.tanHalfFovX,
            pitch: LH.cameraPitch
          },
          tH = [];
        if (AH)
          for (const rH of this.compass.frame(HH, SH, BH)) {
            const HH = YH(rH.offset, hH);
            null !== HH && tH.push({
              ...rH,
              left: HH
            })
          }
        const zH = function(HH, BH) {
            const LH = [],
              AH = HH => "quest" === HH.kind ? HH.distance - 1 : HH.distance,
              rH = [...HH].sort(((HH, BH) => AH(HH) - AH(BH) || HH.id.localeCompare(BH.id)));
            for (const SH of rH) {
              let HH = !1;
              if ("quest" !== SH.kind)
                for (const AH of LH)
                  if (Math.abs(AH.left - SH.left) < BH) {
                    HH = !0;
                    break
                  } HH || LH.push(SH)
            }
            return LH
          }(tH, this.display.compassSpacing),
          CH = function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              LH = null;
            for (const AH of HH) Math.abs(AH.offset) <= BH && (!LH || AH.distance < LH.distance || AH.distance === LH.distance && Math.abs(AH.offset) < Math.abs(LH.offset)) && (LH = AH);
            return LH
          }(zH),
          EH = HH => {
            var BH;
            return null !== (BH = HH.displayName) && void 0 !== BH ? BH : this.translateCached(HH.nameKey)
          },
          GH = {
            compass: {
              markers: zH.map((HH => ({
                id: HH.id,
                icon: HH.icon,
                colour: HH.colour,
                name: EH(HH),
                left: HH.left
              }))),
              cardinals: qB.e.map((HH => {
                let {
                  name: BH,
                  bearing: LH
                } = HH;
                const AH = YH(XH.d.computeShortestRotation(SH, LH), hH);
                return {
                  name: BH,
                  left: null !== AH && void 0 !== AH ? AH : 0,
                  hidden: null === AH
                }
              })),
              label: CH ? `${EH(CH)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",PH(CH.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== AH && void 0 !== AH && AH.background) {
          const BH = HH[0] - AH.mapOrigin[0],
            LH = HH[2] - AH.mapOrigin[2],
            {
              rotation: hH,
              transform: tH
            } = (0, rH.e)(BH, LH, SH, AH.background.bounds);
          GH.minimap = {
            transform: tH,
            iconRotation: -hH + "rad"
          };
          const [zH, CH] = (0, rH.c)(BH, LH, AH.background.bounds);
          GH.player = {
            left: zH,
            top: CH,
            hidden: zH < 0 || CH < 0 || zH > 100 || CH > 100,
            rotation: -hH + "rad"
          }
        }
        const {
          waypoint: uH
        } = this.quests.getSnapshot();
        if ("search" === (null === uH || void 0 === uH ? void 0 : uH.questMarkerIcon) && null !== AH && void 0 !== AH && AH.background) {
          const {
            bounds: HH
          } = AH.background, [BH, LH] = (0, rH.c)(uH.position[0] - AH.mapOrigin[0], uH.position[2] - AH.mapOrigin[2], HH);
          GH.searchArea = {
            left: BH,
            top: LH,
            width: 6400 / (HH.mapMaxX - HH.mapMinX),
            height: 6400 / (HH.mapMaxZ - HH.mapMinZ),
            shapeSeed: uH.nameKey
          }
        }
        const QH = this.quests.getNotificationSnapshot(),
          WH = "completion" === (null === QH || void 0 === QH ? void 0 : QH.phase) && !UB(QH.kind);
        if (uH && !WH) {
          const BH = Math.hypot(...uH.position.map(((BH, LH) => BH - HH[LH]))),
            AH = Math.round(BH),
            rH = "talk" === uH.questMarkerIcon ? Math.min(1, Math.max(0, (10 - BH) / 5)) : 0,
            SH = LH.projectWorldPosToViewport(uH.position),
            hH = SH && LH.projectWorldPosToViewport([uH.position[0], uH.position[1] - 1, uH.position[2]]);
          GH.waypoint = {
            ...LH.projectWorldPosToScreenPos(uH.position),
            text: SH,
            nearness: rH * rH * (3 - 2 * rH),
            blockHeight: SH && hH ? hH.y - SH.y : null,
            name: this.translateCached(uH.nameKey),
            nameKey: uH.nameKey,
            markerIcon: uH.questMarkerIcon ? gB[uH.questMarkerIcon] : "quest",
            popupToken: (null === QH || void 0 === QH ? void 0 : QH.waypointNameKey) === uH.nameKey ? QH.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(AH)),
            hint: "search" === uH.questMarkerIcon && Math.hypot(uH.position[0] - HH[0], uH.position[2] - HH[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = GH, this.display.render(GH)
      }
      dispose() {
        this.Mu = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const RB = "skyblockSkillsView";
    class jB extends zH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          LH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH => HH,
          AH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          rH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH => HH;
        super(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = BH, this.translate = LH, this.locale = AH, this.itemName = rH, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = HH => {
          this.selected = HH, this.emit()
        }
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, this.locale = BH, this.itemName = LH, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(HH) {
        let BH = this.skillText.get(HH);
        return BH || (BH = {
          label: this.translate(`skyblockGame:${HH}`),
          description: this.translate(`skyblockGame:${HH}Description`)
        }, this.skillText.set(HH, BH)), BH
      }
      sources(HH) {
        if ("mining" === HH || "fishing" === HH) return this.buildSources(HH);
        let BH = this.sourceText.get(HH);
        return BH || (BH = this.buildSources(HH), this.sourceText.set(HH, BH)), BH
      }
      buildSources(HH) {
        const BH = this.translate;
        return "exploration" === HH ? [BH("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), BH("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === HH ? [BH("skyblockGame:logSource", {
          xp: this.number(XB["Maple Log"])
        })] : "combat" === HH ? [BH("skyblockGame:creatureKillSource"), BH("skyblockGame:noEnvironmentalXp")] : "farming" === HH ? [BH("skyblockGame:cropSource", {
          xp: this.number(uB["Wheat|FreshlyGrown"])
        }), BH("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), BH("skyblockGame:noYoungCropXp")] : Object.entries("mining" === HH ? YB : QB).map((HH => {
          let [LH, AH] = HH;
          return BH("skyblockGame:itemXpSource", {
            item: this.itemName(LH),
            xp: this.number(AH)
          })
        }))
      }
      number(HH) {
        return HH.toLocaleString(this.locale)
      }
      benefit(HH, BH) {
        const LH = rB(HH, BH);
        return this.translate(LH.translationKey, {
          bonus: this.number(LH.percent)
        })
      }
      kX(HH) {
        if (!this.Mu) {
          if ("snapshot" === HH.kind) this.progress = HH.progress, this.pending.clear(), this.recent = null;
          else if ("award" === HH.kind && this.progress) {
            const {
              award: BH
            } = HH;
            this.progress = {
              ...this.progress,
              [BH.skill]: BH.after
            };
            for (const [HH, AH] of this.pending) AH.skill === BH.skill && this.pending.delete(HH);
            const LH = BH.after.level > BH.before.level;
            this.recordGain(BH.skill, BH.amount, LH ? ++this.nextLevelUpToken : null), LH && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: BH.skill,
              beforeLevel: BH.before.level,
              level: BH.after.level
            })
          } else {
            if ("rejectBlock" === HH.kind) return void this.rejectBlock(HH.position);
            if ("open" === HH.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(HH, BH, LH) {
        if (!this.progress || this.Mu || LH) return;
        const AH = function(HH, BH) {
          const LH = HH.split("|")[0];
          return "Air" === BH || BH === `Barkless ${HH}` ? Object.hasOwn(XB, LH) ? {
            skill: "foraging",
            amount: XB[LH]
          } : "Air" !== BH ? null : Object.hasOwn(YB, HH) ? {
            skill: "mining",
            amount: YB[HH]
          } : zB(HH) ? {
            skill: "farming",
            amount: 10
          } : EB(HH) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(uB, HH) ? {
            skill: "farming",
            amount: uB[HH]
          } : Object.hasOwn(qH, HH) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(BH, "Air");
        if (!AH) return;
        const rH = HH.join(",");
        if (this.pending.has(rH)) return;
        const SH = this.predictedProgress(AH.skill).totalXp + AH.amount;
        Number.isSafeInteger(SH) && (this.pending.set(rH, {
          ...AH,
          expires: this.now() + 2e3
        }), this.recordGain(AH.skill, 0), this.emit())
      }
      rejectBlock(HH) {
        this.pending.delete(HH.join(",")) && this.emit()
      }
      IX() {
        if (this.Mu) return;
        let HH = !1;
        for (const [BH, LH] of this.pending) LH.expires <= this.now() && (this.pending.delete(BH), HH = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, HH = !0), HH && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(HH, BH) {
        var LH, AH;
        let rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const SH = (null === (LH = this.recent) || void 0 === LH ? void 0 : LH.skill) === HH && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          hH = (null === (AH = this.recent) || void 0 === AH ? void 0 : AH.skill) === HH && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: HH,
          confirmed: SH + BH,
          expires: this.now() + 3e3,
          levelUpToken: null !== rH && void 0 !== rH ? rH : hH
        }
      }
      pendingXp(HH) {
        let BH = 0;
        for (const LH of this.pending.values()) LH.skill === HH && (BH += LH.amount);
        return BH
      }
      predictedProgress(HH) {
        const BH = this.progress[HH],
          LH = this.pendingXp(HH);
        return LH ? hB(BH.totalXp + LH, HH) : BH
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var HH, BH, LH;
        const AH = this.progress ? aH.map((HH => {
            const BH = this.predictedProgress(HH);
            return {
              ...this.text(HH),
              icon: WB[HH],
              benefit: this.benefit(HH, BH.level),
              sources: this.sources(HH),
              id: HH,
              selected: HH === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(BH.level)
              }),
              xp: null === BH.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(BH.xpIntoLevel),
                target: this.number(BH.xpForNextLevel)
              }),
              percent: null === BH.xpForNextLevel ? 100 : Math.min(100, BH.xpIntoLevel / BH.xpForNextLevel * 100)
            }
          })) : [],
          rH = AH.find((HH => {
            var BH;
            return HH.id === (null === (BH = this.recent) || void 0 === BH ? void 0 : BH.skill)
          })),
          SH = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: AH,
          detail: null !== (HH = AH.find((HH => HH.selected))) && void 0 !== HH ? HH : null,
          overallLevel: this.progress ? aH.reduce(((HH, BH) => HH + this.predictedProgress(BH).level), 0) : null,
          hud: rH && SH > 0 ? {
            skill: rH,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(SH)
            }),
            levelUpToken: null !== (BH = null === (LH = this.recent) || void 0 === LH ? void 0 : LH.levelUpToken) && void 0 !== BH ? BH : null,
            colour: xB(rH.id)
          } : null
        }
      }
    }
    const nB = Math.max(1600, 600, 950) + 400,
      FB = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      DB = "skyblockQuestsView",
      wB = "skyblockQuestNotificationView";
    class ZB extends zH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          hH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(HH, AH, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = BH, this.translate = LH, this.now = rH, this.locale = SH, this.publishNotification = hH, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var HH, BH;
          this.selected = null !== (HH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.trackedQuestId) && void 0 !== HH ? HH : null, this.show()
        }, this.select = HH => {
          this.selected = HH, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const HH = this.snapshot.detail;
          !this.Mu && null !== HH && void 0 !== HH && HH.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(HH.id), this.emit())
        }, this.viewDialogue = () => {
          const HH = this.snapshot.detail;
          var BH;
          HH && (null === (BH = this.onViewDialogue) || void 0 === BH || BH.call(this, HH.id))
        }, this.notifications = new PB(rH, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var HH, BH;
        return null !== (HH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.trackedQuestId) && void 0 !== HH ? HH : null
      }
      notify(HH) {
        !this.Mu && this.notifications.enqueue(HH) && this.emitNotification()
      }
      setNotificationsHeld(HH) {
        (this.notifications.setHeld(HH) || HH) && this.emitNotification()
      }
      IX() {
        var HH, BH;
        if (this.Mu) return;
        this.notifications.IX() && this.emitNotification();
        let LH = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, LH = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, LH = !0);
        const AH = dB(this.authoritative);
        null !== AH && void 0 !== AH && null !== (HH = AH.questClock) && void 0 !== HH && HH.running && this.clockText(AH) !== (null === (BH = this.snapshot.tracked) || void 0 === BH ? void 0 : BH.clock) && (LH = !0), LH && this.emit()
      }
      setTranslator(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = HH, this.locale = BH, this.emitNotification(), this.emit()
      }
      kX(HH) {
        if (!this.Mu)
          if ("completion" === HH.kind) this.notify(HH.questCompletion);
          else if ("landmark" === HH.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: HH.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === HH.kind) {
          var BH, LH, AH;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: HH.npcNoteTitleKey,
            textKey: HH.npcNoteTextKey,
            params: null !== (BH = HH.npcNoteParams) && void 0 !== BH ? BH : {},
            nameKeys: null !== (LH = HH.npcNoteNameKeys) && void 0 !== LH ? LH : {},
            iconItem: null !== (AH = HH.npcNoteIconItem) && void 0 !== AH ? AH : null
          })
        } else if ("open" === HH.kind) this.show();
        else if ("guidance" === HH.kind) this.waypoint = HH.waypoint, this.compassTarget = HH.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === HH.kind) {
          this.authoritative = HH.snapshot, this.notifications.IX() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const BH = this.trackedStepPulse;
          this.updateTrackedStepPulse(HH.snapshot), this.emit(), this.trackedStepPulse > BH && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Mu || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var HH;
        return null !== (HH = this.translateWithIcons) && void 0 !== HH ? HH : this.translate
      }
      clockText(HH) {
        const BH = HH.questClock;
        if (!BH) return null;
        const LH = BH.elapsedMs + (BH.running ? this.now() - this.receivedAt : 0);
        return void 0 === BH.countdownFromMs ? fH(LH, !1) : fH(1e3 * Math.ceil(Math.max(0, BH.countdownFromMs - LH) / 1e3), !1)
      }
      updateTrackedStepPulse(HH) {
        var BH, LH, AH;
        const rH = dB(HH);
        if (!rH) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const SH = HH => rH.subquests.filter((BH => HH(BH.status))).map((HH => HH.id)),
          hH = SH((HH => "completed" === HH || "skipped" === HH)),
          tH = SH((HH => "locked" !== HH)),
          zH = (null === (BH = this.trackedSteps) || void 0 === BH ? void 0 : BH.questId) === rH.id && rH.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (zH) {
          const HH = hH.filter((HH => !zH.finished.has(HH))),
            BH = SH((HH => "active" === HH || "ready" === HH)).filter((HH => !zH.unlocked.has(HH)));
          HH.length > 0 && this.trackedStepPulse++, (HH.length > 0 || BH.length > 0) && (this.trackedChange = {
            finished: new Set(HH),
            unlocked: new Set(BH),
            expiresAt: this.now() + nB
          })
        } else {
          var CH;
          this.trackedStepPulse = (null === (CH = this.trackedSteps) || void 0 === CH ? void 0 : CH.questId) === rH.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: rH.id,
          progress: rH.progress,
          finished: new Set([...null !== (LH = null === zH || void 0 === zH ? void 0 : zH.finished) && void 0 !== LH ? LH : [], ...hH]),
          unlocked: new Set([...null !== (AH = null === zH || void 0 === zH ? void 0 : zH.unlocked) && void 0 !== AH ? AH : [], ...tH])
        }
      }
      entry(HH, BH) {
        var LH, AH;
        const rH = HH.id === (null === (LH = this.authoritative) || void 0 === LH ? void 0 : LH.trackedQuestId),
          SH = this.now() < this.trackAvailableAt,
          hH = this.questTextTranslator(),
          tH = HH.subquests.map((BH => {
            var LH, AH, SH, tH, zH, CH;
            const EH = null !== (LH = BH.handInNpcName) && void 0 !== LH ? LH : HH.giverName,
              XH = this.translate("skyblockGame:progress", {
                current: BH.progress.toLocaleString(this.locale),
                target: BH.target.toLocaleString(this.locale)
              }),
              GH = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: EH ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [BH.status],
              YH = "active" === BH.status || "ready" === BH.status;
            return {
              id: BH.id,
              name: vB(hH, BH.nameKey, BH.nameParams),
              description: vB(hH, BH.descriptionKey, BH.descriptionParams),
              progress: XH,
              status: BH.status,
              statusLabel: GH ? this.translate(GH, {
                npc: EH
              }) : XH,
              iconItem: YH && null !== (AH = BH.questIconItem) && void 0 !== AH ? AH : null,
              barPercent: "active" === BH.status && BH.showsProgressBar ? Math.min(100, 100 * BH.progress / BH.target) : null,
              justFinished: rH && null !== (SH = null === (tH = this.trackedChange) || void 0 === tH ? void 0 : tH.finished.has(BH.id)) && void 0 !== SH && SH,
              justUnlocked: rH && null !== (zH = null === (CH = this.trackedChange) || void 0 === CH ? void 0 : CH.unlocked.has(BH.id)) && void 0 !== zH && zH
            }
          }));
        return {
          id: HH.id,
          name: vB(hH, HH.nameKey, HH.nameParams),
          description: vB(hH, HH.descriptionKey, HH.descriptionParams),
          progress: BH ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: HH.progress.toLocaleString(this.locale),
            target: HH.target.toLocaleString(this.locale)
          }),
          completed: BH,
          tracked: rH,
          selected: HH.id === this.selected,
          canTrack: !BH && !rH && !SH,
          trackLabel: this.translate(rH ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : SH ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== HH.id,
          subquests: tH,
          focusStep: null !== (AH = tH.find((HH => null !== HH.barPercent))) && void 0 !== AH ? AH : null,
          clock: this.clockText(HH)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH;
        const EH = [...null !== (HH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.active) && void 0 !== HH ? HH : [], ...null !== (LH = null === (AH = this.authoritative) || void 0 === AH ? void 0 : AH.completed) && void 0 !== LH ? LH : []];
        var XH, GH, YH, uH;
        EH.some((HH => HH.id === this.selected)) || (this.selected = null !== (XH = null !== (GH = null === (YH = this.authoritative) || void 0 === YH ? void 0 : YH.trackedQuestId) && void 0 !== GH ? GH : null === (uH = EH[0]) || void 0 === uH ? void 0 : uH.id) && void 0 !== XH ? XH : null);
        const QH = null !== (rH = null === (SH = this.authoritative) || void 0 === SH ? void 0 : SH.active.map((HH => this.entry(HH, !1)))) && void 0 !== rH ? rH : [];
        QH.sort(((HH, BH) => Number(BH.tracked) - Number(HH.tracked)));
        const WH = null !== (hH = null === (tH = this.authoritative) || void 0 === tH ? void 0 : tH.completed.map((HH => this.entry(HH, !0)))) && void 0 !== hH ? hH : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: QH,
          completed: WH,
          completedExpanded: this.completedExpanded,
          detail: null !== (zH = [...QH, ...WH].find((HH => HH.selected))) && void 0 !== zH ? zH : null,
          tracked: null !== (CH = QH.find((HH => HH.tracked))) && void 0 !== CH ? CH : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function dB(HH) {
      var BH;
      return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.active.find((BH => BH.id === HH.trackedQuestId))) && void 0 !== BH ? BH : null
    }
    const aB = "skyblockDungeonsView";
    class sB extends zH {
      constructor(HH, BH) {
        let LH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          AH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = BH, this.locale = LH, this.requestEnter = AH, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = HH => {
          this.selected = HH, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const HH = this.pickerEntry(),
            BH = null === HH || void 0 === HH ? void 0 : HH.difficulties[this.pageIndex];
          void 0 !== BH && null !== BH.unlockedBoss && (this.close(), this.requestEnter(HH.id, BH.difficulty))
        }
      }
      setTranslator(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = HH, this.locale = BH, this.emit()
      }
      kX(HH) {
        var BH, LH;
        if (!this.Mu) return "open" === HH.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== HH.kind ? "snapshot" === HH.kind && (this.authoritative = HH.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (BH = null === (LH = this.pickerEntry()) || void 0 === LH ? void 0 : LH.difficulties.length) && void 0 !== BH ? BH : 1) - 1)), null === HH.snapshot && this.open ? this.close() : this.emit()) : this.choose(HH.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(HH) {
        var BH;
        const LH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.dungeons.find((BH => BH.id === HH));
        void 0 !== LH ? this.open && this.pickerDungeonId === HH || (this.pickerDungeonId = HH, this.pageIndex = Math.max(0, LH.difficulties.findLastIndex((HH => null !== HH.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${HH}`)
      }
      turnTo(HH) {
        var BH, LH;
        const AH = null !== (BH = null === (LH = this.pickerEntry()) || void 0 === LH ? void 0 : LH.difficulties.length) && void 0 !== BH ? BH : 0;
        HH < 0 || HH >= AH || HH === this.pageIndex || (this.pageIndex = HH, this.emit())
      }
      pickerEntry() {
        var HH, BH;
        return null !== (HH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.dungeons.find((HH => HH.id === this.pickerDungeonId))) && void 0 !== HH ? HH : null
      }
      difficulty(HH) {
        const BH = HH.completions > 0,
          LH = null === HH.bestMs ? null : fH(HH.bestMs);
        return {
          difficulty: HH.difficulty,
          label: this.translate(oH[HH.difficulty]),
          colour: IH[HH.difficulty],
          beaten: BH,
          bestTime: LH,
          completions: HH.completions,
          summary: BH ? [null === LH ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: LH
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: HH.completions.toLocaleString(this.locale)
          })].filter((HH => null !== HH)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(HH) {
        const BH = HH.difficulties.map((HH => this.difficulty(HH))),
          LH = BH.filter((HH => HH.beaten)).length;
        return {
          id: HH.id,
          name: this.translate(HH.nameKey),
          selected: HH.id === this.selected,
          beatenSummary: `${LH} / ${BH.length}`,
          difficulties: BH
        }
      }
      picker() {
        const HH = this.pickerEntry();
        if (null === HH || 0 === HH.difficulties.length) return null;
        const BH = HH.difficulties.map(((BH, LH) => {
          var AH, rH, SH, hH;
          const tH = BH.unlockedBoss,
            zH = null === tH ? this.lockedHint(HH, LH) : null;
          return {
            ...this.difficulty(BH),
            unlocked: null !== tH,
            bossName: null === tH ? null : this.translate(tH.bossNameKey),
            bossMobType: null !== (AH = null === tH || void 0 === tH ? void 0 : tH.bossMobType) && void 0 !== AH ? AH : null,
            bossMobVariation: null !== (rH = null === tH || void 0 === tH ? void 0 : tH.bossMobVariation) && void 0 !== rH ? rH : null,
            lockedHint: null !== (SH = null === zH || void 0 === zH ? void 0 : zH.text) && void 0 !== SH ? SH : null,
            lockedHintHighlight: null !== (hH = null === zH || void 0 === zH ? void 0 : zH.highlight) && void 0 !== hH ? hH : null,
            current: LH === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(HH.nameKey),
          pages: BH,
          page: BH[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < BH.length - 1
        }
      }
      lockedHint(HH, BH) {
        var LH, AH, rH;
        if (0 === BH && "number" === typeof HH.combatLevelLock) {
          const BH = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: HH.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: BH,
            colour: xB("combat"),
            icon: WB.combat
          })
        }
        const SH = null !== (LH = null === (AH = this.authoritative) || void 0 === AH ? void 0 : AH.dungeons) && void 0 !== LH ? LH : [],
          hH = BH > 0 ? HH : null !== (rH = SH[SH.indexOf(HH) - 1]) && void 0 !== rH ? rH : null,
          tH = BH > 0 ? HH.difficulties[BH - 1] : null === hH || void 0 === hH ? void 0 : hH.difficulties[0];
        if (null === hH || void 0 === tH) return null;
        const zH = this.translate(hH.nameKey);
        if (null === tH.unlockedBoss) return hH === HH ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, tH.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: zH
        }, tH.difficulty);
        const CH = this.translate(tH.unlockedBoss.bossNameKey);
        return hH === HH ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: CH
        }, tH.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: CH,
            dungeon: zH
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(HH, BH, LH) {
        return this.hintHighlighting(HH, BH, "difficulty", {
          name: this.translate(oH[LH]),
          colour: IH[LH],
          icon: null
        })
      }
      hintHighlighting(HH, BH, LH, AH) {
        let {
          name: rH,
          colour: SH,
          icon: hH
        } = AH;
        const tH = this.translate(HH, {
          ...BH,
          [LH]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(HH, {
            ...BH,
            [LH]: rH
          }),
          highlight: 2 === tH.length ? {
            before: tH[0],
            name: rH,
            after: tH[1],
            colour: SH,
            icon: hH
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var HH, BH, LH;
        const AH = null !== (HH = null === (BH = this.authoritative) || void 0 === BH ? void 0 : BH.dungeons) && void 0 !== HH ? HH : [];
        var rH, SH;
        AH.some((HH => HH.id === this.selected)) || (this.selected = null !== (rH = null === (SH = AH[0]) || void 0 === SH ? void 0 : SH.id) && void 0 !== rH ? rH : null);
        const hH = AH.map((HH => this.entry(HH)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: hH,
          detail: null !== (LH = hH.find((HH => HH.selected))) && void 0 !== LH ? LH : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const JB = ["mining", "farming", "foraging", "fishing", "combat"],
      iB = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      pB = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function yB() {
      for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
      return BH.map(((HH, BH) => ({
        amount: HH,
        coins: iB[BH],
        xp: pB[BH]
      })))
    }
    const HL = yB(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      BL = yB(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      LL = yB(50, 100, 250, 500, 1e3, 2500, 5e3),
      AL = yB(25, 50, 100, 250, 500, 1e3),
      rL = yB(10, 25, 50, 100, 250, 500, 1e3),
      SL = yB(1, 5, 10, 25, 50);

    function hL(HH, BH) {
      return {
        id: HH,
        category: "fishing",
        item: BH,
        drops: [BH],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rL
      }
    }
    const tL = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: BL
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: LL
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: LL
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: AL
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: AL
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: BL
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: HL
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: HL
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: HL
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: LL
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: BL
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: BL
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: BL
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: LL
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: LL
      }, hL("wheatfish", "Wheatfish"), hL("darter", "Darter"), hL("sunset_minnow", "Sunset Minnow"), hL("root_flounder", "Root Flounder"), hL("greenfin_loach", "Greenfin Loach"), hL("red_strongfish", "Red Strongfish"), hL("green_strongfish", "Green Strongfish"), hL("boomerang_fish", "Boomerang Fish"), hL("seahorse", "Seahorse"), hL("spined_stickleback", "Spined Stickleback"), hL("moon_strongfish", "Moon Strongfish"), hL("boulder_bass", "Boulder Bass"), hL("grass_snapper", "Grass Snapper"), hL("crystal_wheatfish", "Crystalized Wheatfish", SL), hL("moonstone_pupfish", "Moonstone Pupfish", SL), hL("reedglass_minnow", "Reedglass Minnow"), hL("mangrove_herring", "Mangrove Herring"), hL("mudline_perch", "Mudline Perch"), hL("coastal_mullet", "Coastal Mullet"), hL("reef_sardine", "Reef Sardine"), hL("root_perch", "Root Perch"), hL("driftwood_catfish", "Driftwood Catfish"), hL("aether_minnow", "Aether Minnow"), hL("needlefish", "Tri-Pointed Needlefish"), hL("threadfin_bream", "Threadfin Bream"), hL("mudbelly_tilapia", "Mudbelly Tilapia"), hL("rotslab_eel", "Rotslab Eel"), hL("polarflash_electron", "Polarflash Electron"), hL("mireback_carp", "Mireback Carp"), hL("blackwater_bream", "Blackwater Bream"), hL("stone_grouper", "Stone Grouper"), hL("shadeback_ray", "Shadeback Ray"), hL("glacial_silverfish", "Glacial Silverfish"), hL("hatchetfish", "Hatchetfish"), hL("moonlit_boomerang", "Moonlit Boomerang Fish"), hL("murkborne_ray", "Murkborne Ray"), hL("bamboo_catfish", "Bamboo Catfish"), hL("mossback_arapaima", "Mossback Arapaima"), hL("murk_stingray", "Murk Stingray"), hL("channel_sawfish", "Channel Sawfish"), hL("boned_sturgeon", "Boned Sturgeon"), hL("oarfish", "Oarfish"), hL("snakehead", "Snakehead", SL), hL("eldertide_leviathan", "Eldertide Leviathan", SL), hL("pithead", "Pithead"), hL("electric_eel", "Electric Eel"), hL("shadow_darter", "Shadow Darter"), hL("abyss_carp", "Abyss Carp"), hL("nomai_moray", "Nomai Moray"), hL("silver_dragonfish", "Silver Dragonfish"), hL("giant_moray", "Giant Moray"), hL("coelacanth", "Coelacanth", SL), hL("frost_herring", "Frost Herring"), hL("permafrost_halibut", "Permafrost Halibut"), hL("glacial_lanternfish", "Glacial Lanternfish"), hL("frozen_grenadier", "Frozen Grenadier"), hL("blackfin_icefish", "Blackfin Icefish"), hL("moonfish", "Moonfish"), hL("alpha_strongfish", "Alpha Moon Strongfish"), hL("deep_lanternfish", "Deepwater Lanternfish", SL), hL("pearlescent_moonfish", "Pearlescent Moonfish", SL), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: BL
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: AL
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: AL
      }],
      zL = (new Map(tL.map((HH => [HH.id, HH]))), new Map),
      CL = new Map;
    for (const ct of tL) {
      for (const [HH, BH] of Object.entries(null !== (EL = ct.blocks) && void 0 !== EL ? EL : {})) {
        var EL;
        zL.set(HH, {
          collection: ct,
          amount: BH
        })
      }
      for (const HH of null !== (XL = ct.drops) && void 0 !== XL ? XL : []) {
        var XL;
        CL.set(HH, ct)
      }
    }

    function GL(HH, BH) {
      let LH = 0;
      for (; LH < HH.tiers.length && BH >= HH.tiers[LH].amount;) LH++;
      return LH
    }
    const YL = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function uL(HH) {
      return YL[HH - 1]
    }
    const QL = "skyblockCollectionsView";
    class WL extends zH {
      constructor(HH, BH) {
        let LH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          AH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH => HH;
        super(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = BH, this.locale = LH, this.itemName = AH, this.counts = null, this.category = "mining", this.selected = tL[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = HH => {
          this.category = HH, this.selected = this.inCategory(HH)[0].id, this.emit()
        }, this.select = HH => {
          this.selected = HH, this.emit()
        }
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, this.locale = BH, this.itemName = LH, this.emit()
      }
      kX(HH) {
        if (!this.Mu)
          if ("collOpen" !== HH.kind) {
            (HH.collFull || null === this.counts) && (this.counts = new Map);
            for (const [BH, LH] of HH.collCounts) this.counts.set(BH, LH);
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
        var HH;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const BH = this.inCategory(this.category).map((HH => this.collectionView(HH))),
          LH = tL.reduce(((HH, BH) => HH + this.tierOf(BH)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: JB.map((HH => this.categoryView(HH))),
          collections: BH,
          detail: null !== (HH = BH.find((HH => HH.selected))) && void 0 !== HH ? HH : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(LH)
          })
        }
      }
      categoryView(HH) {
        const BH = this.inCategory(HH),
          LH = BH.reduce(((HH, BH) => HH + this.tierOf(BH)), 0),
          AH = BH.reduce(((HH, BH) => HH + BH.tiers.length), 0);
        return {
          id: HH,
          label: this.translate(`skyblockGame:${HH}`),
          icon: WB[HH],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(LH),
            target: this.number(AH)
          }),
          selected: HH === this.category
        }
      }
      collectionView(HH) {
        var BH, LH;
        const AH = null !== (BH = this.counts.get(HH.id)) && void 0 !== BH ? BH : 0,
          rH = GL(HH, AH),
          SH = null !== (LH = HH.tiers[rH]) && void 0 !== LH ? LH : null,
          hH = 0 === rH ? 0 : HH.tiers[rH - 1].amount;
        return {
          id: HH.id,
          name: this.itemName(HH.item),
          icon: HH.item,
          selected: HH.id === this.selected,
          locked: 0 === AH,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(AH)
          }),
          tier: 0 === rH ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(rH),
          percent: null === SH ? 100 : Math.min(100, (AH - hH) / (SH.amount - hH) * 100),
          progress: null === SH ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(AH),
            target: this.number(SH.amount)
          }),
          nextReward: null === SH ? null : this.reward(HH, SH.coins, SH.xp)
        }
      }
      reward(HH, BH, LH) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(BH),
          xp: this.number(LH),
          skill: this.translate(`skyblockGame:${HH.category}`)
        })
      }
      tierLabel(HH) {
        return this.translate("skyblockGame:collectionTier", {
          tier: uL(HH)
        })
      }
      tierOf(HH) {
        var BH;
        return GL(HH, null !== (BH = this.counts.get(HH.id)) && void 0 !== BH ? BH : 0)
      }
      inCategory(HH) {
        return tL.filter((BH => BH.category === HH))
      }
      number(HH) {
        return HH.toLocaleString(this.locale)
      }
    }
    const ML = "skyblockPortalTransitView",
      xL = "skyblockPortalArrival";
    class vL {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.AX = HH, this.storage = BH, this.now = LH, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      kX(HH) {
        const BH = {
          zoneNameKey: HH.transitZoneNameKey,
          variation: HH.transitZoneVariation,
          colour: HH.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(xL, BH), this.show("departure", BH.zoneNameKey, BH.colour, HH.transitDurationMs, HH.transitDurationMs + 1500, (() => {
          this.storage.removeItem(xL)
        }))
      }
      resumeArrival(HH) {
        const BH = this.storage.getItem(xL);
        this.storage.removeItem(xL), null === BH || BH.variation !== HH || this.now() - BH.departedAt > 3e4 || this.show("arrival", BH.zoneNameKey, BH.colour, 3200, 2e4)
      }
      finishArrival(HH) {
        var BH;
        "arrival" === (null === (BH = this.view) || void 0 === BH ? void 0 : BH.phase) && this.view.token === HH && (this.clearTimer(), this.view = null, this.AX(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(HH, BH, LH, AH, rH, SH) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: HH,
          zoneNameKey: BH,
          colour: LH,
          durationMs: AH
        }, this.AX(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.AX(null), null === SH || void 0 === SH || SH()
        }), rH)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const PL = "skyblockDailyRewardView",
      TL = "skyblockDailyRewardCoin";
    class UL {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.AX = HH, this.isBusy = BH, this.holdQuestPopups = LH, this.onHeldCoinsChanged = AH, this.onCoinLanded = rH, this.onStarted = SH, this.onFinished = hH, this.onItemLanded = tH, this.now = zH, this.LX = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var HH, BH;
        return null !== (HH = null === (BH = this.playing) || void 0 === BH ? void 0 : BH.view) && void 0 !== HH ? HH : null
      }
      getHeldCoins() {
        var HH, BH;
        let LH = 0;
        for (const AH of this.LX) LH += AH.coins;
        return LH - (null !== (HH = null === (BH = this.playing) || void 0 === BH ? void 0 : BH.released) && void 0 !== HH ? HH : 0)
      }
      kX(HH) {
        "dailyRewardClaimed" !== HH.kind ? (this.queue.push(HH), this.IX()) : this.LX.push({
          coins: HH.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      IX() {
        const HH = this.now();
        if (null === this.playing) return this.releaseUnshown(HH), void this.startNext(HH);
        const BH = this.playing,
          LH = HH - BH.startedAt,
          AH = BH.view.flyingCoins,
          rH = function(HH, BH) {
            let LH = 0;
            for (; LH < BH && OL(LH, BH) <= HH;) LH++;
            return LH
          }(LH, AH);
        if (rH !== BH.landed) {
          for (let HH = rH - BH.landed > 2 ? rH - 1 : BH.landed; HH < rH; HH++) this.onCoinLanded(HH, AH);
          BH.landed = rH, BH.released = Math.round(BH.view.coins * rH / AH), this.onHeldCoinsChanged()
        }
        for (; BH.itemsLanded < BH.view.items.length && 2e3 + 160 * BH.itemsLanded + 630 <= LH;) this.onItemLanded(BH.itemsLanded), BH.itemsLanded++;
        LH >= BH.view.durationMs && (this.finish(), this.startNext(HH))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.LX = [], this.AX(null)
      }
      startNext(HH) {
        if (0 === this.queue.length || this.isBusy()) return;
        const BH = this.queue.shift();
        this.token++;
        const LH = {
          token: this.token,
          day: BH.dailyRewardDay,
          coins: BH.dailyRewardCoins,
          items: BH.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: BH.dailyRewardDay === bH ? 24 : 14
        };
        this.playing = {
          view: LH,
          startedAt: HH,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.AX(LH), this.onStarted(LH)
      }
      finish() {
        this.LX.shift(), this.playing = null, this.holdQuestPopups(!1), this.AX(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(HH) {
        if (this.queue.length > 0 || 0 === this.LX.length) return;
        const BH = this.LX.length;
        this.LX = this.LX.filter((BH => HH - BH.receivedAt < 6e4)), this.LX.length !== BH && this.onHeldCoinsChanged()
      }
    }

    function VL(HH, BH) {
      return 450 + 715 * HH / (BH - 1)
    }

    function OL(HH, BH) {
      return VL(HH, BH) + 650
    }
    const bL = "skyblockMailboxView";
    class kL {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.AX = HH, this.isBusy = BH, this.onStarted = LH, this.now = AH, this.waiting = [], this.playing = null, this.token = 0, this.itemName = HH => HH
      }
      getSnapshot() {
        var HH, BH;
        return null !== (HH = null === (BH = this.playing) || void 0 === BH ? void 0 : BH.view) && void 0 !== HH ? HH : null
      }
      setItemName(HH) {
        this.itemName = HH
      }
      kX(HH) {
        this.waiting.push(...HH.mailLetters), this.IX()
      }
      IX() {
        const HH = this.now();
        null !== this.playing && HH - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.AX(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(HH)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.AX(null)
      }
      start(HH) {
        const BH = this.waiting.slice(0, 3);
        this.token++;
        const LH = {
          token: this.token,
          letters: BH.map((HH => this.toView(HH))),
          more: this.waiting.length - BH.length,
          durationMs: 4500 + 700 * BH.length
        };
        this.waiting = [], this.playing = {
          view: LH,
          startedAt: HH
        }, this.AX(LH), this.onStarted(LH)
      }
      toView(HH) {
        return {
          coins: HH.mailCoins,
          items: HH.mailItems.map((HH => {
            var BH;
            return {
              itemName: HH.mailItemName,
              amount: HH.mailItemAmount,
              label: null !== (BH = HH.mailItemLabel) && void 0 !== BH ? BH : this.itemName(HH.mailItemName)
            }
          })),
          reasonKey: HH.mailReasonKey,
          reasonParams: HH.mailReasonParams
        }
      }
    }
    const mL = "skyblockQuestGraphView",
      oL = "skyblockDevQuestJump";

    function IL(HH) {
      if (0 === HH.length) return "";
      const BH = [`M ${HH[0].x} ${HH[0].y}`];
      for (let AH = 1; AH < HH.length - 1; AH++) {
        const LH = HH[AH + 1];
        BH.push(`Q ${HH[AH].x} ${HH[AH].y} ${(HH[AH].x+LH.x)/2} ${(HH[AH].y+LH.y)/2}`)
      }
      const LH = HH[HH.length - 1];
      return BH.push(`L ${LH.x} ${LH.y}`), BH.join(" ")
    }

    function fL(HH, BH) {
      return HH < BH ? `${HH}|${BH}` : `${BH}|${HH}`
    }
    class lL extends zH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(HH, LH, AH), this.translate = BH, this.requestJump = rH, this.requestArrive = SH, this.storage = hH, this.now = tH, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = HH => {
          HH !== this.hoveredId && (this.hoveredId = HH, this.emit())
        }, this.jump = HH => {
          this.close(), this.requestJump(HH)
        }
      }
      kX(HH) {
        if (!this.Mu)
          if ("graph" !== HH.kind) {
            if ("jumping" === HH.kind) {
              const BH = {
                questId: HH.graphQuestId,
                variation: HH.graphVariation,
                completes: HH.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(oL, BH)
            }
          } else {
            const BH = ++this.graphCount;
            LH.e(133).then((() => LH(6977))).then((LH => {
              let {
                default: AH
              } = LH;
              this.Mu || BH !== this.graphCount || (this.layout = function(HH, BH, LH) {
                var AH, rH;
                const SH = new HH.graphlib.Graph;
                SH.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), SH.setDefaultEdgeLabel((() => ({})));
                const hH = new Set;
                for (const EH of BH) hH.add(EH.graphQuestId), SH.setNode(EH.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const tH = LH.filter((HH => hH.has(HH.graphFromId) && hH.has(HH.graphToId) && HH.graphFromId !== HH.graphToId)),
                  zH = new Map;
                for (const EH of [...tH].sort(((HH, BH) => Number("awaits" === HH.graphEdgeKind) - Number("awaits" === BH.graphEdgeKind)))) {
                  const HH = fL(EH.graphFromId, EH.graphToId);
                  zH.has(HH) || (zH.set(HH, EH), SH.setEdge(EH.graphFromId, EH.graphToId))
                }
                HH.layout(SH);
                const CH = SH.graph();
                return {
                  width: Math.ceil(null !== (AH = CH.width) && void 0 !== AH ? AH : 0),
                  height: Math.ceil(null !== (rH = CH.height) && void 0 !== rH ? rH : 0),
                  nodes: BH.map((HH => {
                    var BH, LH;
                    const AH = SH.node(HH.graphQuestId);
                    return {
                      node: HH,
                      left: (null !== (BH = AH.x) && void 0 !== BH ? BH : 0) - 95,
                      top: (null !== (LH = AH.y) && void 0 !== LH ? LH : 0) - 26
                    }
                  })),
                  edges: tH.map((HH => {
                    var BH;
                    const LH = zH.get(fL(HH.graphFromId, HH.graphToId)),
                      AH = null !== (BH = SH.edge(LH.graphFromId, LH.graphToId).points) && void 0 !== BH ? BH : [];
                    return {
                      edge: HH,
                      key: `${HH.graphFromId}|${HH.graphToId}|${HH.graphEdgeKind}`,
                      path: IL(LH.graphFromId === HH.graphFromId ? AH : [...AH].reverse())
                    }
                  })),
                  plans: new Map(BH.map((HH => [HH.graphQuestId, new Set([HH.graphQuestId, ...HH.graphPlanIds])])))
                }
              }(AH, HH.graphNodes, HH.graphEdges), this.show())
            })).catch((HH => {
              console.error("The quest graph could not be laid out", HH)
            }))
          }
      }
      resumeJump(HH) {
        const BH = this.storage.getItem(oL);
        this.storage.removeItem(oL), null === BH || BH.variation !== HH || this.now() - BH.departedAt > 6e4 || this.requestArrive(BH.questId, BH.completes)
      }
      setTranslator(HH) {
        this.translate = HH, this.emit()
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
        var HH, BH;
        return null !== (HH = null === this.hoveredId || null === (BH = this.layout) || void 0 === BH ? void 0 : BH.plans.get(this.hoveredId)) && void 0 !== HH ? HH : new Set
      }
      buildSnapshot() {
        const HH = this.layout;
        if (null === HH) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const BH = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: HH.width,
          height: HH.height,
          nodes: HH.nodes.map((HH => {
            let {
              node: LH,
              left: AH,
              top: rH
            } = HH;
            return {
              id: LH.graphQuestId,
              name: this.translate(LH.graphNameKey),
              detail: null === LH.graphGiverName ? LH.graphZoneId : `${LH.graphGiverName} \xb7 ${LH.graphZoneId}`,
              state: LH.graphState,
              left: AH,
              top: rH,
              inPlan: BH.has(LH.graphQuestId),
              hovered: LH.graphQuestId === this.hoveredId
            }
          })),
          edges: HH.edges.map((HH => {
            let {
              edge: LH,
              key: AH,
              path: rH
            } = HH;
            return {
              key: AH,
              kind: LH.graphEdgeKind,
              path: rH,
              inPlan: BH.has(LH.graphFromId) && BH.has(LH.graphToId)
            }
          })),
          planning: BH.size > 0
        }
      }
    }
    var KL = LH(37933);
    const cL = 250,
      eL = 2150,
      qL = -2.8,
      gL = 2.2,
      NL = -27,
      RL = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      jL = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      nL = Math.round(50 + 1e3 * (jL.delay + jL.period / 2)),
      FL = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      DL = Array.from({
        length: 26
      }, ((HH, BH) => {
        const LH = 2.39996 * BH,
          AH = .5 + .618034 * BH % 1 * .23,
          rH = BH % 3 !== 2;
        return {
          rune: rH ? FL[7 * BH % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(LH)*AH).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(LH)*AH).toFixed(3)})`,
            "--spin": 40 * (BH % 5 - 2) + "deg",
            "--size": (rH ? 1 + BH % 4 * .2 : .3 + BH % 2 * .15) + "rem",
            "--duration": `${(1.8+7*BH%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*BH%3).toFixed(2)}s`
          }
        }
      }));

    function wL(HH, BH) {
      return Array.from({
        length: 30 + 3 * HH + (BH ? 10 : 0)
      }, ((HH, BH) => {
        const LH = BH < 4,
          AH = LH ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          rH = LH ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          SH = LH ? 2.2 : .6 + Math.random(),
          hH = LH ? .3 : Math.random() < .5 ? .16 : .24,
          tH = LH ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": AH,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${rH.toFixed(2)}rem`,
          "--length": `${SH.toFixed(2)}rem`,
          "--width": `${hH}rem`,
          "--duration": `${Math.round(tH)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function ZL(HH) {
      let {
        zeta: BH,
        period: LH
      } = HH;
      const AH = 2 * Math.PI / LH;
      return {
        w: AH,
        decay: BH * AH / Math.sqrt(1 - BH * BH)
      }
    }
    let dL = !1;

    function aL() {
      if (dL) return;
      dL = !0;
      const HH = document.createElement("style");
      HH.textContent = function() {
        const HH = ZL(RL),
          BH = ZL(jL),
          LH = BH => Math.exp(-HH.decay * BH) * Math.sin(HH.w * BH),
          AH = LH(Math.atan(HH.w / HH.decay) / HH.w),
          rH = .25,
          SH = 2.15,
          hH = Math.round(215),
          tH = [];
        for (let zH = 0; zH <= hH; zH++) {
          const HH = zH / hH * SH;
          let CH = Math.sin(Math.min(HH, rH) / rH * Math.PI / 2) ** 2,
            EH = 0,
            XH = 1,
            GH = 1 - .2 * CH,
            YH = 1;
          if (HH >= rH) {
            const hH = HH - rH,
              tH = Math.max(0, hH - .05);
            CH = Math.exp(-tH / .05), EH = LH(tH + RL.lead * (1 - Math.exp(-tH / RL.rush))) / AH;
            const zH = tH - jL.delay,
              uH = zH <= 0 ? 0 : 1 - Math.exp(-BH.decay * zH) * (Math.cos(BH.w * zH) + BH.decay / BH.w * Math.sin(BH.w * zH)),
              QH = Math.max(0, (HH - 1.77) / (SH - 1.77));
            XH = (1 + (jL.to - 1) * uH) * (1 + .08 * QH), GH = 1.1 + 1.5 * Math.exp(-hH / .07) + .3 * Math.exp(-(((1e3 * hH - nL) / 100) ** 2)) + .8 * QH, YH = 1 - QH ** 1.5
          }
          const uH = .15 * CH + qL * EH,
            QH = -.1 * CH + gL * EH,
            WH = 3 * CH + NL * EH;
          tH.push(`${(zH/hH*100).toFixed(3)}% { opacity: ${YH.toFixed(3)}; transform: translate(${uH.toFixed(3)}rem, ${QH.toFixed(3)}rem) rotate(${WH.toFixed(2)}deg) scale(${XH.toFixed(3)}); filter: brightness(${GH.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${tH.join(" ")} }`
      }(), document.head.append(HH)
    }
    const sL = "skyblockForgeView",
      JL = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class iL extends zH {
      constructor(HH, BH, LH, AH, rH) {
        super(HH, LH, AH), this.translate = BH, this.requestForge = rH, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (HH, BH) => {
          var LH, AH;
          null !== this.forging || (null !== (LH = this.owned[(0, KL.t)(BH, HH)]) && void 0 !== LH ? LH : 0) <= 0 || (this.selected[HH] = this.selected[HH] === BH ? null : BH, this.status = null, null === (AH = this.onPartSelected) || void 0 === AH || AH.call(this), this.emit())
        }, this.forge = HH => {
          var BH, LH;
          const AH = this.selectedParts();
          if (null === AH || this.isPending() || !this.open) return;
          const rH = (0, KL.p)(AH);
          if (null === rH || rH.coalCost > this.coal) return;
          const SH = this.preview(rH),
            hH = null !== (BH = null === (LH = this.onForgeStarted) || void 0 === LH ? void 0 : LH.call(this, SH.tier, SH.named, HH)) && void 0 !== BH ? BH : () => {};
          if (this.dropArrival(), HH) {
            const HH = {
              id: ++this.forgeId,
              preview: SH,
              timers: [],
              stopSounds: hH,
              landed: !1,
              reply: null
            };
            HH.timers.push(setTimeout((() => {
              HH.landed = !0, null !== HH.reply && (this.apply(HH.reply), HH.reply = null, this.emit())
            }), cL), setTimeout((() => {
              this.finishForge(HH)
            }), eL)), this.forging = HH
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(AH)
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        var BH;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === HH.forgeMessageKind) return this.dropForge(), this.apply(HH), this.status = null, this.show(), void(null === (BH = this.onOpened) || void 0 === BH || BH.call(this));
        const LH = this.forging;
        if (null !== LH && null !== HH.forgeRefusalKey) this.dropForge();
        else if (null !== LH && !LH.landed) return void(LH.reply = HH);
        this.apply(HH), this.emit()
      }
      apply(HH) {
        if (this.owned = HH.forgeOwnedParts, this.coal = HH.forgeCoalOwned, this.keepSelectionOwned("open" === HH.forgeMessageKind), null !== HH.forgeForgedSwordId) {
          var BH;
          const LH = (0, KL.p)(HH.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (BH = null === LH || void 0 === LH ? void 0 : LH.displayName) && void 0 !== BH ? BH : ""
            }
          }
        } else null !== HH.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: HH.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(HH) {
        this.translate = HH, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(HH) {
        var BH;
        this.forging = null;
        const LH = this.selectedParts(),
          AH = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: HH.id,
          sameSword: null !== LH && (null === (BH = (0, KL.p)(LH)) || void 0 === BH ? void 0 : BH.displayName) === HH.preview.name,
          timer: AH
        }, this.emit()
      }
      dropForge() {
        const HH = this.forging;
        if (null !== HH) {
          this.forging = null;
          for (const BH of HH.timers) clearTimeout(BH);
          HH.stopSounds(), null !== HH.reply && this.apply(HH.reply)
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
        var HH, BH, LH;
        const AH = this.selectedParts(),
          rH = null === AH ? null : (0, KL.p)(AH),
          SH = null !== (HH = null === (BH = this.forging) || void 0 === BH ? void 0 : BH.preview) && void 0 !== HH ? HH : null === rH ? null : this.preview(rH);
        return {
          enabled: this.received,
          open: this.open,
          slots: KL.m.map((HH => ({
            kind: HH,
            label: this.translate(JL[HH]),
            parts: this.partsFor(HH)
          }))),
          coalOwned: this.coal,
          preview: SH,
          unformedSword: KL.j[null !== (LH = this.selected.Blade) && void 0 !== LH ? LH : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((HH => HH > 0)),
          canForge: null !== SH && !SH.coalShort && !this.isPending(),
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
      preview(HH) {
        return {
          name: HH.displayName,
          lore: HH.lore,
          baseSword: HH.baseSword,
          enchantmentTier: HH.enchantmentTier,
          tier: Number(HH.enchantmentTier.slice(-1)),
          named: HH.named,
          stats: this.stats(HH),
          effects: HH.effects,
          coalCost: HH.coalCost,
          coalShort: null === this.forging && HH.coalCost > this.coal
        }
      }
      partsFor(HH) {
        const BH = [];
        for (const AH of KL.g) {
          var LH;
          const rH = (0, KL.t)(AH, HH),
            SH = null !== (LH = this.owned[rH]) && void 0 !== LH ? LH : 0;
          SH > 0 && BH.push({
            material: AH,
            itemName: rH,
            owned: SH,
            selected: this.selected[HH] === AH,
            placeholder: !1
          })
        }
        if (0 === BH.length) {
          const LH = KL.g[0];
          BH.push({
            material: LH,
            itemName: (0, KL.t)(LH, HH),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return BH
      }
      stats(HH) {
        const BH = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${HH.powerMultiplier.toFixed(2)}`,
          better: HH.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${HH.damageMultiplier.toFixed(2)}`,
          better: HH.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/HH.cooldownMultiplier).toFixed(2)}`,
          better: HH.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${HH.knockbackMultiplier.toFixed(2)}`,
          better: HH.knockbackMultiplier > 1
        }];
        return HH.reachBonus > 0 && BH.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${HH.reachBonus.toFixed(1)}`,
          better: !0
        }), HH.damageReduction > 0 && BH.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*HH.damageReduction)}%`,
          better: !0
        }), BH
      }
      selectedParts() {
        const {
          Blade: HH,
          Guard: BH,
          Handle: LH
        } = this.selected;
        return null === HH || null === BH || null === LH ? null : {
          blade: HH,
          guard: BH,
          handle: LH
        }
      }
      keepSelectionOwned(HH) {
        for (const LH of KL.m) {
          var BH;
          const AH = this.selected[LH];
          if (null !== AH && (null !== (BH = this.owned[(0, KL.t)(AH, LH)]) && void 0 !== BH ? BH : 0) > 0) continue;
          if (!HH) {
            this.selected[LH] = null;
            continue
          }
          const rH = [...KL.g].reverse().find((HH => {
            var BH;
            return (null !== (BH = this.owned[(0, KL.t)(HH, LH)]) && void 0 !== BH ? BH : 0) > 0
          }));
          this.selected[LH] = null !== rH && void 0 !== rH ? rH : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const pL = "skyblockSmugglerView",
      yL = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class HA extends zH {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(HH, LH, AH), this.translate = BH, this.requestBuy = rH, this.now = SH, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = HH => HH, this.onBought = null, this.buy = HH => {
          const BH = this.deals[HH];
          void 0 !== BH && !this.isPending() && this.open && !this.soldOut.has(HH) && this.canAfford(BH) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, HH))
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        if (this.received = !0, this.day = HH.smugglerDay, this.deals = HH.smugglerDeals, this.rivets = HH.smugglerRivetsOwned, this.crests = HH.smugglerCrestsOwned, this.soldOut = new Set(HH.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + HH.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === HH.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = HH.smugglerBoughtSlot, null !== HH.smugglerBoughtSlot) {
          var BH, LH;
          const AH = this.deals[HH.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === AH ? "" : this.dealName(AH),
              amount: String(null !== (BH = null === AH || void 0 === AH ? void 0 : AH.smugglerDealAmount) && void 0 !== BH ? BH : 0)
            }
          }, this.boughtCount++, null === (LH = this.onBought) || void 0 === LH || LH.call(this)
        } else null !== HH.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: HH.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, void 0 !== LH && (this.itemName = LH), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(HH) {
        if (null !== HH.smugglerDealUniqueName) return HH.smugglerDealUniqueName;
        const BH = yL[HH.smugglerDealItem];
        return void 0 === BH ? this.itemName(HH.smugglerDealItem) : this.translate(BH)
      }
      canAfford(HH) {
        return HH.smugglerDealRivets <= this.rivets && HH.smugglerDealCrests <= this.crests
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
        const HH = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return HH <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : HH < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(HH)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(HH / 60)),
          minutes: String(HH % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((HH, BH) => ({
            slot: BH,
            itemName: HH.smugglerDealItem,
            displayName: this.dealName(HH),
            enchantmentTier: HH.smugglerDealEnchantmentTier,
            amount: HH.smugglerDealAmount,
            rivets: HH.smugglerDealRivets,
            crests: HH.smugglerDealCrests,
            affordable: this.canAfford(HH),
            soldOut: this.soldOut.has(BH),
            justBought: this.boughtSlot === BH
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
    const BA = "skyblockPassageView",
      LA = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function AA(HH, BH) {
      return HH(LA[BH])
    }

    function rA(HH, BH, LH, AH) {
      const rH = Math.ceil((LH - AH) / 864e5),
        SH = AA(HH, BH);
      return rH > 1 ? HH("skyblockGame:passageNextDays", {
        phase: SH,
        days: String(rH)
      }) : HH("skyblockGame:passageNextSoon", {
        phase: SH
      })
    }
    class SA extends zH {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(HH, LH, AH), this.translate = BH, this.now = rH, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = HH => HH, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        this.message = HH, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, void 0 !== LH && (this.itemName = LH), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(HH) {
        return {
          itemName: HH.passageFish,
          displayName: this.itemName(HH.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(HH.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const HH = this.message;
        return null === HH ? {
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
          phase: HH.passagePhase,
          phaseName: AA(this.translate, HH.passagePhase),
          visitors: HH.passageVisitors.map((HH => this.describe(HH))),
          resting: this.describe(HH.passageResting),
          nextPhase: HH.passageNextPhase,
          next: rA(this.translate, HH.passageNextPhase, HH.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var hA = LH(39461);
    const tA = "skyblockKeepersChairView";
    class zA extends zH {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new hA.c;
        super(HH, LH, AH), this.translate = BH, this.requestAim = rH, this.now = SH, this.pacer = hH, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = HH => HH, this.aim = HH => {
          !this.awaitingReply && this.open && this.atChair && HH !== this.favoured && (null === HH || this.islands.some((BH => BH.keepersChairIslandId === HH && BH.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== HH && void 0 !== HH ? HH : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = hH.subscribe((() => {
          this.emit()
        }))
      }
      kX(HH) {
        var BH, LH;
        this.received = !0;
        const AH = this.favoured,
          rH = this.atChair;
        var SH;
        return this.islands = HH.keepersChairIslands, this.favoured = HH.keepersChairFavoured, this.passage = null !== (BH = HH.keepersChairPassage) && void 0 !== BH ? BH : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (LH = HH.keepersChairAtChair) || void 0 === LH || LH, "place" === HH.keepersChairMessageKind ? (!rH && this.atChair && "refused" === (null === (SH = this.status) || void 0 === SH ? void 0 : SH.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === HH.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== HH.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: HH.keepersChairRefusalKey,
          island: null
        } : this.favoured !== AH && (this.status = null === this.favoured ? {
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
      receivePassage(HH) {
        this.received && (this.passage = HH, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, void 0 !== LH && (this.itemName = LH), this.emit()
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
      islandName(HH) {
        const BH = this.islands.find((BH => BH.keepersChairIslandId === HH));
        return void 0 === BH ? HH : this.translate(BH.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const HH = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          BH = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((HH => {
            const BH = HH.keepersChairFeaturedFish;
            return {
              id: HH.keepersChairIslandId,
              name: this.translate(HH.keepersChairIslandNameKey),
              relit: HH.keepersChairIslandRelit,
              featuredFish: null === BH ? null : {
                itemName: BH,
                displayName: this.itemName(BH)
              },
              favoured: HH.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === HH ? null : {
            tone: HH.tone,
            text: this.translate(HH.key, null === HH.island ? void 0 : {
              island: this.islandName(HH.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === BH ? null : {
            phase: BH.keepersChairPassagePhase,
            phaseName: AA(this.translate, BH.keepersChairPassagePhase),
            nextPhase: BH.keepersChairPassageNextPhase,
            next: rA(this.translate, BH.keepersChairPassageNextPhase, BH.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const CA = "skyblockReachLogView",
      EA = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      XA = "Caught Fish",
      GA = [1, 2, 4];

    function YA(HH, BH) {
      return HH.map((HH => ({
        ...HH,
        reachLogPageFish: HH.reachLogPageFish.map((HH => ({
          ...HH,
          reachLogFishFresh: BH(HH)
        })))
      })))
    }
    class uA extends zH {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new hA.c;
        super(HH, LH, AH), this.translate = BH, this.requestOpen = rH, this.pacer = SH, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = HH => HH, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = HH => {
          this.pages.some((BH => BH.reachLogIslandId === HH)) && (this.selected = HH, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = SH.subscribe((() => {
          this.emit()
        }))
      }
      kX(HH) {
        if (this.received = !0, "status" === HH.reachLogMessageKind) return !0 === HH.reachLogNews && this.markNews(), this.serverFresh = HH.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const BH = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== HH.reachLogMessageKind)
          if (this.pageViews = null, this.pages = YA(HH.reachLogPages, (HH => HH.reachLogFishFresh || this.heldFresh.has(HH.reachLogFishItem))), this.letGoShown = HH.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, BH) this.showPages();
          else {
            for (const HH of this.pages)
              for (const BH of HH.reachLogPageFish) BH.reachLogFishFresh && this.heldFresh.add(BH.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, this.pageViews = null, void 0 !== LH && (this.itemName = LH), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = YA(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var HH, BH, LH, AH;
        const rH = this.pages.find((HH => HH.reachLogPageFish.some((HH => HH.reachLogFishFresh))));
        if (void 0 !== rH) return rH.reachLogIslandId;
        if (null !== this.selected && this.pages.some((HH => HH.reachLogIslandId === this.selected))) return this.selected;
        return null !== (HH = null !== (BH = null === (LH = this.pages.filter((HH => HH.reachLogIslandAwake)).at(-1)) || void 0 === LH ? void 0 : LH.reachLogIslandId) && void 0 !== BH ? BH : null === (AH = this.pages[0]) || void 0 === AH ? void 0 : AH.reachLogIslandId) && void 0 !== HH ? HH : null
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
        return this.pages.map((HH => {
          var BH;
          return {
            id: HH.reachLogIslandId,
            name: this.translate(HH.reachLogIslandNameKey),
            awake: HH.reachLogIslandAwake,
            gold: HH.reachLogPageGold,
            caught: HH.reachLogPageFish.filter((HH => HH.reachLogFishCaught && !HH.reachLogFishVisitor)).length,
            total: HH.reachLogPageFish.filter((HH => !HH.reachLogFishVisitor)).length,
            fish: HH.reachLogPageFish.map((HH => {
              const BH = HH.reachLogFishBestKg;
              return {
                itemName: HH.reachLogFishItem,
                name: HH.reachLogFishCaught ? this.itemName(HH.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: HH.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / HH.reachLogFishChance))
                }),
                best: HH.reachLogFishCaught ? null === BH ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: BH.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: HH.reachLogFishMarks,
                ribbons: GA.map((BH => 0 !== (HH.reachLogFishRibbons & BH))),
                glimmer: 0 !== (8 & HH.reachLogFishRibbons),
                halo: 0 !== (32 & HH.reachLogFishRibbons),
                fresh: HH.reachLogFishFresh,
                visitor: HH.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (BH = HH.reachLogPageReturner) && void 0 !== BH ? BH : null)
          }
        }))
      }
      buildReturner(HH) {
        return null === HH ? null : {
          itemName: HH.reachLogReturnerFishItem,
          line: this.translate(HH.reachLogReturnerLineKey, {
            name: this.translate(HH.reachLogReturnerNameKey),
            trinket: this.translate(HH.reachLogReturnerTrinketKey)
          }),
          back: HH.reachLogReturnerBack
        }
      }
      receivePassagePhase(HH) {
        null !== this.passagePhase && this.passagePhase !== HH && (this.pagesCurrent = !1), this.passagePhase = HH
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const QA = "skyblockLampLightView";
    class WA {
      constructor(HH, BH, LH, AH) {
        this.AX = HH, this.translate = BH, this.requestCommand = LH, this.pacer = AH, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Mu = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = HH => {
          HH ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = HH => {
          this.send(`buy ${HH}`)
        }, this.socket = HH => {
          this.send(`socket ${null!==HH&&void 0!==HH?HH:KH}`)
        }, this.wearTint = HH => {
          this.send(`tint ${null!==HH&&void 0!==HH?HH:KH}`)
        }, this.setSituation = HH => {
          this.situation = HH, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = AH.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = AH.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      kX(HH) {
        if (this.message = HH, null !== HH.lampLightShop && (this.shop = HH.lampLightShop), "open" === HH.lampLightKind && (this.refusalKey = null), "reply" === HH.lampLightKind) {
          var BH;
          const rH = null !== (BH = HH.lampLightReplyTag) && void 0 !== BH ? BH : null,
            SH = null !== rH && rH === this.offTag;
          var LH, AH;
          if (SH ? this.settleOff() : null !== rH && rH !== this.awaitingTag || this.settleReply(), this.refusalKey = HH.lampLightRefusalKey, null !== HH.lampLightBought && !SH) this.sparkle = {
            id: HH.lampLightBought,
            count: (null !== (LH = null === (AH = this.sparkle) || void 0 === AH ? void 0 : AH.count) && void 0 !== LH ? LH : 0) + 1
          }
        }
        HH.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === HH.lampLightKind && (this.lastGained = HH.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(HH) {
        HH !== this.atChair && (this.atChair = HH, HH && (this.refusalKey = null), this.emit())
      }
      setTranslator(HH, BH) {
        this.translate = HH, this.locale = null !== BH && void 0 !== BH ? BH : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Mu = !0
      }
      send(HH) {
        var BH;
        if (null !== this.awaitingTag || "ready" !== (null === (BH = this.message) || void 0 === BH ? void 0 : BH.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const LH = this.nextTag();
        this.awaitingTag = LH, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${HH} ${LH}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const HH = this.nextTag();
        this.offTag = HH, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${HH}`)
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
        this.Mu || (this.snapshot = this.buildSnapshot(), this.AX(this.snapshot))
      }
      formatLight(HH) {
        return Math.floor(HH).toLocaleString(this.locale)
      }
      formatPercent(HH) {
        const BH = 100 * HH;
        return BH >= 10 ? Math.round(BH).toLocaleString(this.locale) : BH.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(HH, BH) {
        if ("bite" === HH) return this.translate("skyblockGame:lampLightBite", {
          seconds: (BH.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === HH) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(BH.lampLightRareChance)
        });
        if ("notice" === HH) return null === BH.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(BH.lampLightNoticeChance)
        });
        const LH = "meter" === HH ? BH.lampLightMeterCatches : BH.lampLightBloomCatches;
        return null === LH ? null : this.translate("meter" === HH ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(LH))
        })
      }
      oddsLines(HH, BH) {
        const LH = (HH, BH) => {
            var LH;
            return null !== (LH = {
              bite: BH.lampLightBiteMs,
              rare: BH.lampLightRareChance,
              meter: BH.lampLightMeterCatches,
              bloom: BH.lampLightBloomCatches,
              notice: BH.lampLightNoticeChance
            } [HH]) && void 0 !== LH ? LH : 0
          },
          AH = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          rH = [];
        for (const SH of ["bite", "rare", "meter", "bloom", "notice"]) {
          const hH = this.formatOdds(SH, HH),
            tH = this.formatOdds(SH, BH);
          if (null === hH || null === tH || "bite" !== SH && "rare" !== SH && hH === tH) continue;
          const zH = LH(SH, BH) - LH(SH, HH),
            CH = AH[SH] ? zH < 0 : zH > 0;
          rH.push({
            label: SH,
            before: hH,
            after: tH,
            tone: hH === tH ? "same" : CH ? "better" : "worse"
          })
        }
        return rH
      }
      charmView(HH, BH, LH) {
        const AH = HH.lampLightCharmId.charAt(0).toUpperCase() + HH.lampLightCharmId.slice(1),
          rH = "bloom" === this.situation;
        return {
          id: HH.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${AH}`),
          effect: this.translate(`skyblockGame:lampLightCharm${AH}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(HH.lampLightCharmCost)
          }),
          owned: HH.lampLightCharmOwned,
          affordable: LH >= HH.lampLightCharmCost,
          socketed: BH.lampLightSocketed === HH.lampLightCharmId,
          lines: this.oddsLines(rH ? BH.lampLightBareBloom : BH.lampLightBareOpen, rH ? HH.lampLightCharmBloom : HH.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var HH, BH, LH, AH;
        const rH = this.message,
          SH = "ready" === (null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) ? this.shop : null,
          hH = null !== (HH = null === rH || void 0 === rH ? void 0 : rH.lampLightBalance) && void 0 !== HH ? HH : 0,
          tH = this.atChair,
          zH = "loading" === (null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          CH = "ready" !== (null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) || tH ? null !== (BH = this.refusalKey) && void 0 !== BH ? BH : zH : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== rH && "locked" !== rH.lampLightStatus,
          status: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) && void 0 !== LH ? LH : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(hH)
          }),
          releasing: null !== (AH = null === rH || void 0 === rH ? void 0 : rH.lampLightReleasing) && void 0 !== AH && AH,
          gained: null === rH || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === rH || void 0 === rH ? void 0 : rH.lampLightStatus) && tH && !this.isPending(),
          situation: this.situation,
          shop: null === SH ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: SH.lampLightOddsRod,
              island: this.translate(SH.lampLightIslandNameKey)
            }),
            heldRod: null !== SH.lampLightHeldRod,
            charms: SH.lampLightCharms.map((HH => this.charmView(HH, SH, hH))),
            tints: SH.lampLightTints.map((HH => {
              const BH = HH.lampLightTintId,
                [LH, AH, rH] = HH.lampLightTintColour;
              return {
                id: BH,
                name: this.translate(`skyblockGame:lampLightTint${BH.charAt(0).toUpperCase()}${BH.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(HH.lampLightTintCost)
                }),
                owned: HH.lampLightTintOwned,
                affordable: hH >= HH.lampLightTintCost,
                wearing: SH.lampLightTint === BH,
                colour: `rgb(${LH}, ${AH}, ${rH})`
              }
            })),
            wearingIslandColours: null === SH.lampLightTint
          },
          notice: null === CH ? null : this.translate(CH),
          sparkle: this.sparkle
        }
      }
    }
    const MA = "skyblockMagmawardView";
    class xA {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.AX = HH, this.now = BH, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = jH.map((() => 0)), this.wornAt = jH.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      kX(HH) {
        var BH, LH;
        const AH = jH.map(((BH, LH) => !0 === HH.magmawardPiecesWorn[LH]));
        if (!AH.includes(!0)) return this.snapshot = null, void this.AX(null);
        const rH = this.now(),
          SH = this.snapshot;
        null === SH && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const hH = HH.magmawardFuelCarried,
          tH = !AH.includes(!1);
        let zH = null !== (BH = null === SH || void 0 === SH ? void 0 : SH.pulse) && void 0 !== BH ? BH : null,
          CH = null !== (LH = null === SH || void 0 === SH ? void 0 : SH.flare) && void 0 !== LH ? LH : null;
        HH.magmawardFuelBurned ? (zH = "burn", CH = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = rH, this.flareAt = rH) : null !== SH && hH > SH.fuel && (zH = "gain", this.pulseToken++, this.pulseAt = rH), tH && null !== SH && !SH.fullSet && (CH = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = rH, this.setLitAt = rH);
        const EH = jH.map(((HH, BH) => (AH[BH] && null !== SH && !SH.pieces[BH].worn && (this.wornTokens[BH]++, this.wornAt[BH] = rH), {
          itemName: HH,
          worn: AH[BH],
          wornToken: this.wornTokens[BH],
          justWorn: AH[BH] && this.isPlaying(this.wornAt[BH], rH)
        })));
        this.snapshot = {
          pieces: EH,
          wornCount: AH.filter(Boolean).length,
          fullSet: tH,
          fuel: hH,
          fuelState: hH <= 0 ? "empty" : hH <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, rH) ? zH : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, rH) ? CH : null,
          flareToken: this.flareToken,
          setLit: tH && this.isPlaying(this.setLitAt, rH),
          setLitToken: this.setLitToken
        }, this.AX(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.AX(null)
      }
      isPlaying(HH, BH) {
        return BH - HH < 1200
      }
    }
    const vA = "skyblockGlowtideView";
    class PA {
      constructor(HH) {
        this.AX = HH, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = HH => {
          this.arrow = HH, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      kX(HH) {
        this.bloom = HH.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.AX(null))
      }
      afterRender(HH, BH) {
        const LH = this.bloom;
        if (null === LH || null === HH) return;
        const AH = LH.glowtideBloomX - HH[0],
          rH = LH.glowtideBloomZ - HH[2],
          SH = Math.hypot(AH, rH),
          hH = this.snapshot,
          tH = null !== hH && void 0 !== hH && hH.inRange ? 1 : 0,
          zH = SH <= 12.5 + tH && HH[1] - LH.glowtideBloomY <= 10 + tH;
        !zH || null !== hH && void 0 !== hH && hH.inRange || this.inRangeToken++;
        const CH = {
          colour: LH.glowtideBloomColour,
          inRange: zH,
          distance: Math.round(SH),
          inRangeToken: this.inRangeToken
        };
        (null === hH || CH.colour !== hH.colour || CH.inRange !== hH.inRange || !zH && CH.distance !== hH.distance) && (this.snapshot = CH, this.AX(CH));
        const EH = XH.d.computeShortestRotation(BH, (0, XH.yb)([AH, 0, rH]));
        null === this.arrow || Math.abs(EH - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${EH}rad)`, this.arrowTurn = EH)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.AX(null)
      }
    }
    const TA = "skyblockGlowMeterView";
    class UA {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.AX = HH, this.now = BH, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      kX(HH) {
        const BH = this.now(),
          {
            glowMeterFill: LH,
            glowMeterCapacity: AH
          } = HH,
          rH = LH >= AH,
          SH = this.snapshot;
        null !== SH && (rH && !SH.full && (this.fullToken++, this.fullAt = BH), SH.full && !rH ? (this.burstToken++, this.burstAt = BH) : LH > SH.fill && (this.gainToken++, this.gainAt = BH)), this.snapshot = {
          fill: LH,
          aX: AH,
          ratio: Math.min(1, Math.max(0, LH / AH)),
          full: rH,
          rares: HH.glowMeterRares,
          ready: rH && this.isPlaying(this.fullAt, BH),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, BH),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, BH),
          gainToken: this.gainToken
        }, this.AX(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.AX(null)
      }
      isPlaying(HH, BH) {
        return BH - HH < 2e3
      }
    }
    const VA = "skyblockHushWaitView";
    class OA {
      constructor(HH) {
        this.AX = HH, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      kX(HH) {
        let {
          hushWaitMs: BH,
          hushWaitTotalMs: LH,
          hushWaitLines: AH
        } = HH;
        if (this.clearTimers(), this.token++, 0 === AH.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (BH <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: AH[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const rH = Math.max(null !== LH && void 0 !== LH ? LH : BH, BH),
          SH = rH - BH,
          hH = HH => rH * HH / AH.length,
          tH = HH => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: rH,
              elapsedMs: SH,
              line: AH[HH],
              lineIndex: HH
            })
          };
        let zH = 0;
        for (; zH + 1 < AH.length && hH(zH + 1) <= SH;) zH++;
        tH(zH);
        for (let CH = zH + 1; CH < AH.length; CH++) this.later(hH(CH) - SH, (() => {
          tH(CH)
        }));
        this.later(BH, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(HH) {
        this.snapshot = HH, this.AX(HH)
      }
      later(HH, BH) {
        this.timers.push(setTimeout(BH, HH))
      }
      clearTimers() {
        for (const HH of this.timers) clearTimeout(HH);
        this.timers = []
      }
    }
    const bA = "skyblockTideChartsView",
      kA = 36e5,
      mA = 864e5;

    function oA(HH, BH, LH) {
      const [AH, rH, SH, hH] = HH.tideChartArea, tH = Math.floor(BH), zH = Math.floor(LH);
      return tH >= AH && tH <= SH && zH >= rH && zH <= hH
    }

    function IA(HH, BH, LH) {
      const [AH, rH, SH, hH] = HH.tideChartWater;
      return function(HH, BH, LH, AH, rH, SH) {
        const hH = 4 - nH(Math.floor(rH) - (HH - LH), LH);
        return 5 * nH(Math.floor(SH) - (BH - AH), AH) + hH
      }(AH, rH, SH, hH, BH, LH)
    }

    function fA(HH, BH, LH) {
      const AH = HH.tideCharts;
      for (let rH = 0; rH < AH.length; rH++)
        if (oA(AH[rH], BH, LH)) return AH[rH];
      return null
    }

    function lA(HH, BH, LH) {
      const AH = Math.max(0, BH - LH);
      return AH > mA ? HH("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(AH / mA))
      }) : AH > kA ? HH("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(AH / kA))
      }) : HH("skyblockGame:tideChartsTurnSoon")
    }
    class KA extends zH {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(HH, LH, AH), this.translate = BH, this.now = rH, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.XY = HH => {
          this.picked = HH, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        const BH = this.message;
        if (null !== BH)
          for (const AH of HH.tideCharts) {
            var LH;
            const HH = BH.tideCharts.find((HH => HH.tideChartIsland === AH.tideChartIsland)),
              rH = AH.tideChartLit & ~(null !== (LH = null === HH || void 0 === HH ? void 0 : HH.tideChartLit) && void 0 !== LH ? LH : 0);
            void 0 !== HH && 0 !== rH && (this.pulse = {
              island: AH.tideChartIsland,
              cells: rH,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = HH, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(HH, BH) {
        var LH;
        const AH = null === this.message || Number.isNaN(HH) ? null : fA(this.message, HH, BH),
          rH = null !== (LH = null === AH || void 0 === AH ? void 0 : AH.tideChartIsland) && void 0 !== LH ? LH : null,
          SH = null === AH ? -1 : function(HH, BH, LH) {
            const [AH, rH, SH, hH] = HH.tideChartWater;
            return function(HH, BH, LH, AH, rH, SH, hH) {
              return ((rH - HH) / (LH + hH)) ** 2 + ((SH - BH) / (AH + hH)) ** 2 <= 1
            }(AH, rH, SH, hH, BH, LH, 2) ? IA(HH, BH, LH) : -1
          }(AH, HH, BH);
        return (rH !== this.hereIsland || SH !== this.hereCell) && (this.hereIsland = rH, this.hereCell = SH, null !== rH && (this.lastIsland = rH), !0)
      }
      afterRender(HH) {
        if (null === this.message) return;
        this.lastX = null === HH ? Number.NaN : HH[0], this.lastZ = null === HH ? Number.NaN : HH[2];
        const BH = this.locate(this.lastX, this.lastZ),
          LH = this.expirePulses();
        (BH || LH || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const HH = this.now();
        return !(!this.open || HH - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = HH, lA(this.translate, this.message.tideChartTurnsInMs, HH - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(HH, BH) {
        const LH = null === this.message ? null : fA(this.message, HH, BH);
        if (null === LH) return;
        const AH = IA(LH, HH, BH);
        0 === (LH.tideChartPreBlank & 1 << AH) && (this.cast = {
          island: LH.tideChartIsland,
          cell: AH,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const HH = this.now();
        let BH = !1;
        return 0 !== this.pulse.cells && HH - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, BH = !0), null !== this.cast && HH - this.cast.atMs >= 1500 && (this.cast = null, BH = !0), BH
      }
      setTranslator(HH) {
        this.translate = HH, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(HH, BH) {
        var LH;
        return null !== (LH = HH.tideCharts.find((HH => HH.tideChartIsland === BH))) && void 0 !== LH ? LH : null
      }
      describe(HH) {
        var BH, LH, AH;
        const rH = HH.tideChartIsland,
          SH = [];
        for (let YH = 0; YH < 25; YH++) {
          const BH = 1 << YH;
          0 !== (HH.tideChartLit & BH) ? SH.push("lit") : 0 !== (HH.tideChartClear & BH) ? SH.push("clear") : 0 !== (HH.tideChartPreBlank & BH) ? SH.push("shore") : SH.push("water")
        }
        const hH = function(HH) {
            let BH = 0;
            for (let LH = HH >>> 0; 0 !== LH; LH &= LH - 1) BH++;
            return BH
          }(HH.tideChartLit),
          tH = HH.tideChartInkCount,
          zH = this.translate(HH.tideChartIslandNameKey),
          CH = this.translate("skyblockGame:tideChartsLit", {
            lit: String(hH),
            ink: String(tH)
          }),
          EH = null === HH.tideChartPictureNameKey ? null : this.translate(HH.tideChartPictureNameKey),
          XH = this.hereIsland === rH && -1 !== this.hereCell ? this.hereCell : null,
          GH = [`${zH}: ${CH}.`];
        if (null !== EH && GH.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: EH
          })), null !== XH) {
          const HH = Math.floor(XH / 5) + 1,
            BH = XH % 5 + 1;
          GH.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(HH),
            column: String(BH)
          }))
        }
        return {
          island: rH,
          islandName: zH,
          cells: SH,
          hereCell: XH,
          lit: hH,
          ink: tH,
          litText: CH,
          pictureName: EH,
          gridLabel: GH.join(" "),
          pulseCells: this.pulse.island === rH ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (BH = this.cast) || void 0 === BH ? void 0 : BH.island) === rH ? this.cast.cell : null,
          castToken: null !== (LH = null === (AH = this.cast) || void 0 === AH ? void 0 : AH.token) && void 0 !== LH ? LH : 0
        }
      }
      buildSnapshot() {
        var HH, BH, LH;
        const AH = this.message;
        if (null === AH || 0 === AH.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const rH = this.findChart(AH, this.hereIsland),
          SH = null !== (HH = null !== (BH = null !== (LH = this.findChart(AH, this.open ? this.picked : null)) && void 0 !== LH ? LH : rH) && void 0 !== BH ? BH : this.findChart(AH, this.lastIsland)) && void 0 !== HH ? HH : AH.tideCharts[0],
          hH = null === rH ? null : this.describe(rH);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: hH,
          card: SH === rH ? hH : this.describe(SH),
          turnsText: lA(this.translate, AH.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(AH.tideChartBookCount)
          }),
          tabs: AH.tideCharts.map((HH => ({
            island: HH.tideChartIsland,
            name: this.translate(HH.tideChartIslandNameKey),
            selected: HH.tideChartIsland === SH.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const cA = "skyblockRegularsView",
      eA = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      qA = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function gA(HH, BH) {
      return "given" === HH ? BH.given : "owed" === HH ? BH.owed : BH.goal
    }
    class NA extends zH {
      constructor(HH, BH, LH, AH) {
        super(HH, LH, AH), this.translate = BH, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = HH => HH, this.openIsland = HH => {
          this.selected = HH, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = HH => {
          this.selected = HH, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        this.message = HH, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const HH = this.openedFromReachLog;
        return this.openedFromReachLog = !1, HH
      }
      setTranslator(HH, BH, LH) {
        this.translate = HH, void 0 !== LH && (this.itemName = LH), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(HH, BH, LH) {
        return {
          text: this.translate(gA(HH, BH), LH),
          given: "given" === HH
        }
      }
      describeRegular(HH, BH) {
        const LH = this.translate,
          AH = null !== HH.regularKg,
          rH = HH.regularMeetings,
          SH = AH ? 0 === rH ? LH("skyblockGame:regularsNotMet") : 1 === rH ? LH("skyblockGame:regularsMeetingsOne") : LH("skyblockGame:regularsMeetings", {
            count: rH
          }) : "";
        return {
          id: HH.regularId,
          name: LH(HH.regularNameKey),
          line: LH(HH.regularLineKey),
          itemName: HH.regularFishItem,
          fishName: this.itemName(HH.regularFishItem),
          tagged: AH,
          size: null === HH.regularKg ? LH("skyblockGame:regularsNotTagged") : LH("skyblockGame:regularsSize", {
            kg: HH.regularKg.toFixed(1)
          }),
          meetings: SH,
          chance: LH("skyblockGame:regularsChance", {
            count: HH.regularOneInCasts
          }),
          resting: HH.regularRestingToday,
          gifts: [{
            text: LH("skyblockGame:regularsGiftFlare"),
            given: rH >= 3
          }, this.describeGift(HH.regularTintGift, eA, {
            tint: LH(HH.regularTintNameKey)
          })],
          history: [...HH.regularHistory].reverse().map((HH => {
            const AH = HH.regularMeetingKg.toFixed(1),
              rH = BH - HH.regularMeetingDay;
            return rH <= 0 ? LH("skyblockGame:regularsToday", {
              kg: AH
            }) : LH("skyblockGame:regularsDaysAgo", {
              days: rH,
              kg: AH
            })
          }))
        }
      }
      describeIsland(HH, BH) {
        return {
          id: HH.regularsIslandId,
          name: this.translate(HH.regularsIslandNameKey),
          charm: this.describeGift(HH.regularsCharmGift, qA, {
            charm: this.translate(HH.regularsCharmNameKey)
          }),
          regulars: HH.regularsList.map((HH => this.describeRegular(HH, BH)))
        }
      }
      buildSnapshot() {
        var HH, BH, LH, AH;
        const rH = this.message;
        if (null === rH) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const SH = rH.regularsIslands.map((HH => this.describeIsland(HH, rH.regularsToday))),
          hH = null !== (HH = null !== (BH = null === (LH = SH.find((HH => HH.id === this.selected))) || void 0 === LH ? void 0 : LH.id) && void 0 !== BH ? BH : null === (AH = SH[0]) || void 0 === AH ? void 0 : AH.id) && void 0 !== HH ? HH : "";
        return {
          enabled: !0,
          open: this.open,
          selected: hH,
          islands: SH
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const RA = "skyblockHiddenWatersView";
    class jA {
      constructor(HH) {
        this.AX = HH, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      kX(HH) {
        this.snapshot = function(HH) {
          const [BH, LH] = HH.hiddenWatersMapSize, AH = (HH, AH) => ({
            left: 1 - HH / BH,
            top: AH / LH
          }), rH = new Map;
          for (const [hH, tH] of HH.hiddenWatersGlimpses) {
            var SH;
            const HH = null !== (SH = rH.get(hH)) && void 0 !== SH ? SH : [];
            HH.push(tH), rH.set(hH, HH)
          }
          return {
            found: HH.hiddenWatersFound,
            total: HH.hiddenWatersTotal,
            aspect: LH / BH,
            pins: HH.hiddenWatersPins.map((HH => {
              let [BH, LH] = HH;
              return AH(BH, LH)
            })),
            islands: HH.hiddenWatersIslands.map((HH => {
              let [rH, SH, hH, tH] = HH;
              const {
                left: zH,
                top: CH
              } = AH(hH + 1, SH);
              return {
                left: zH,
                top: CH,
                width: (hH + 1 - rH) / BH,
                height: (tH + 1 - SH) / LH
              }
            })),
            glimpses: rH
          }
        }(HH), this.AX(this.snapshot)
      }
    }
    const nA = "skyblockDialogueView";
    class FA extends zH {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(HH, LH, AH), this.translate = BH, this.requestDialogue = rH, this.now = SH, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = HH => {
          this.selection = {
            kind: "quest",
            questId: HH
          }, this.request(), this.show()
        }, this.selectCharacter = HH => {
          this.selection = {
            kind: "character",
            npcId: HH
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      kX(HH) {
        this.received = !0, this.scripts = HH.questDialogueScripts, this.speakers = new Map(HH.questDialogueSpeakers.map((HH => [HH.dialogueSpeakerId, HH]))), this.emit()
      }
      setTranslator(HH) {
        this.translate = HH, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const HH = this.now();
        HH >= this.requestAvailableAt && (this.requestAvailableAt = HH + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var HH;
        const BH = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...BH,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const LH = this.selection;
        if ("quest" === LH.kind) {
          const HH = this.scripts.find((HH => HH.dialogueQuestId === LH.questId));
          return {
            ...BH,
            characters: [],
            questFocus: LH.questId,
            conversations: HH ? [this.conversation(HH)] : []
          }
        }
        const AH = [];
        for (let SH = this.scripts.length - 1; SH >= 0; SH--) {
          const HH = this.scripts[SH].dialogueLines;
          for (let BH = HH.length - 1; BH >= 0; BH--) AH.includes(HH[BH].dialogueSpeakerId) || AH.push(HH[BH].dialogueSpeakerId)
        }
        const rH = null !== LH.npcId && AH.includes(LH.npcId) ? LH.npcId : null !== (HH = AH[0]) && void 0 !== HH ? HH : null;
        return {
          ...BH,
          characters: AH.map((HH => {
            var BH, LH;
            return {
              id: HH,
              styling: null !== (BH = null === (LH = this.speakers.get(HH)) || void 0 === LH ? void 0 : LH.dialogueSpeakerStyling) && void 0 !== BH ? BH : HH,
              selected: HH === rH
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((HH => HH.dialogueLines.some((HH => HH.dialogueSpeakerId === rH)))).map((HH => this.conversation(HH))).reverse()
        }
      }
      conversation(HH) {
        let BH = null;
        return {
          questId: HH.dialogueQuestId,
          questName: this.translate(HH.dialogueQuestNameKey),
          completed: HH.dialogueQuestCompleted,
          lines: HH.dialogueLines.map(((HH, LH) => {
            var AH;
            const rH = HH.dialogueSpeakerId === BH || null === (AH = this.speakers.get(HH.dialogueSpeakerId)) || void 0 === AH ? void 0 : AH.dialogueSpeakerStyling;
            return BH = HH.dialogueSpeakerId, {
              key: LH,
              display: {
                line: {
                  translationKey: HH.dialogueLineKey,
                  params: this.params(HH.dialogueLineParams)
                },
                speakerName: rH,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(HH) {
        if (void 0 !== HH) return Object.fromEntries(Object.entries(HH).map((HH => {
          let [BH, LH] = HH;
          return [BH, "string" === typeof LH ? LH : this.translate(LH.translationKey)]
        })))
      }
    }
    var DA = LH(602),
      wA = LH(1206),
      ZA = LH(81);
    const dA = "skyblockAutographsView";

    function aA(HH) {
      const BH = DA.j[HH];
      return {
        label: BH.chatTag.map((HH => HH.str)).join(""),
        icon: BH.icon,
        colour: BH.mainRGB
      }
    }
    class sA extends zH {
      constructor(HH) {
        let BH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = BH, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      kX(HH) {
        this.signatures = HH.autographSignatures, HH.autographOpen ? this.show() : this.emit()
      }
      setTranslator(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = BH, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var HH;
        const BH = null !== (HH = this.signatures) && void 0 !== HH ? HH : [],
          LH = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          AH = [...BH].sort(((HH, BH) => Number(null !== BH.autographRank) - Number(null !== HH.autographRank) || BH.autographSignedAtMs - HH.autographSignedAtMs)).map((HH => ({
            key: `${HH.autographSignedAtMs}|${HH.autographSignerName}`,
            name: (0, wA.b)(HH.autographSignerName, !ZA.featureFlags.canSeeRealPlayerNames),
            rank: null === HH.autographRank ? null : aA(HH.autographRank),
            signedOn: LH.format(HH.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: AH,
          total: AH.length,
          rankTotal: AH.filter((HH => null !== HH.rank)).length
        }
      }
    }
    const JA = "skyblockHudView",
      iA = () => {},
      pA = {
        getItem: () => null,
        setItem: iA,
        removeItem: iA
      };
    class yA {
      constructor(HH) {
        let {
          translate: BH,
          translateWithIcons: LH,
          setMenuOpen: AH = iA,
          dismissMenu: rH = () => {
            AH(!1)
          },
          publishSkills: SH = iA,
          publishQuests: hH = iA,
          publishQuestNotification: tH = iA,
          publishDungeons: zH = iA,
          publishCollections: CH = iA,
          publishMap: XH = iA,
          publishHud: GH = iA,
          publishPortalTransit: YH = iA,
          publishDailyReward: uH = iA,
          publishMailbox: QH = iA,
          publishQuestGraph: WH = iA,
          publishForge: MH = iA,
          publishSmuggler: xH = iA,
          publishKeepersChair: vH = iA,
          publishReachLog: PH = iA,
          publishLampLight: UH = iA,
          publishMagmaward: VH = iA,
          publishGlowtide: OH = iA,
          publishGlowMeter: bH = iA,
          publishHushWait: kH = iA,
          publishPassage: mH = iA,
          publishTideCharts: oH = iA,
          publishRegulars: IH = iA,
          publishHiddenWaters: fH = iA,
          publishDialogue: lH = iA,
          publishAutographs: KH = iA,
          isLoadingScreenUp: cH = () => !1,
          onDailyRewardCoinLanded: eH = iA,
          onDailyRewardStarted: qH = iA,
          onDailyRewardFinished: gH = iA,
          onDailyRewardItemLanded: NH = iA,
          onMailboxStarted: RH = iA,
          journeyStorage: jH = pA,
          requestTracking: nH = iA,
          requestTravel: FH = iA,
          requestDungeonEnter: DH = iA,
          requestQuestJump: wH = iA,
          requestQuestArrive: ZH = iA,
          requestForge: dH = iA,
          requestSmuggle: aH = iA,
          requestKeepersChairAim: sH = iA,
          requestReachLogOpen: JH = iA,
          requestLampLight: iH = iA,
          requestDialogue: pH = iA
        } = HH;
        this.navigation = void 0, this.map = void 0, this.compass = new TH, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new hA.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = HH => HH, this.close = () => {
          for (const HH of this.panels) HH.close()
        }, this.setMenuOpen = AH, this.publishHud = GH, this.portalTransit = new vL(YH, jH), this.magmaward = new xA(VH), this.glowtide = new PA(OH), this.glowMeter = new UA(bH), this.hushWait = new OA(kH), this.dailyReward = new UL(uH, (() => cH() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (HH => {
          this.quests.setNotificationsHeld(HH)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), eH, qH, gH, NH);
        const yH = HH => {
          this.panels.some((HH => HH.isOpen())) || (HH ? rH() : this.setMenuOpen(!1))
        };
        this.skills = new jB(SH, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), BH, void 0, void 0, yH), this.quests = new ZB(hH, nH, BH, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, yH, tH), this.dungeons = new sB(zH, BH, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, yH, DH), this.collections = new WL(CH, BH, (() => {
          this.beforePanelOpen(this.collections)
        }), yH), this.map = new EH(XH, FH, BH, (() => {
          this.beforePanelOpen(this.map)
        }), yH), this.questGraph = new lL(WH, BH, (() => {
          this.beforePanelOpen(this.questGraph)
        }), yH, wH, ZH, jH), this.forge = new iL(MH, BH, (() => {
          this.beforePanelOpen(this.forge)
        }), yH, dH), this.smuggler = new HA(xH, BH, (() => {
          this.beforePanelOpen(this.smuggler)
        }), yH, aH), this.lampLight = new WA(UH, BH, iH, this.commandPacer), this.keepersChair = new zA(vH, BH, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (HH => {
          this.lampLight.onChairClosed(), yH(HH)
        }), sH, Date.now, this.commandPacer), this.reachLog = new uA(PH, BH, (() => {
          this.beforePanelOpen(this.reachLog)
        }), yH, JH, this.commandPacer), this.passage = new SA(mH, BH, (() => {
          this.beforePanelOpen(this.passage)
        }), yH), this.tideCharts = new KA(oH, BH, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), yH), this.regulars = new NA(IH, BH, (() => {
          this.beforePanelOpen(this.regulars)
        }), (HH => {
          this.regulars.takeReturnToReachLog() && !HH && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), yH(HH)
        })), this.hiddenWaters = new jA(fH), this.dialogue = new FA(lH, BH, (() => {
          this.beforePanelOpen(this.dialogue)
        }), yH, pH), this.autographs = new sA(KH, (() => {
          this.beforePanelOpen(this.autographs)
        }), yH), this.mailbox = new kL(QH, (() => cH() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), RH), this.quests.translateWithIcons = null !== LH && void 0 !== LH ? LH : null, this.skills.onLevelUp = HH => {
          this.quests.notify(HH)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new NB(this.map, this.quests, this.compass, BH)
      }
      getHudSnapshot() {
        const HH = this.hudSnapshot,
          BH = this.dailyReward.getHeldCoins();
        return null === HH || BH <= 0 || !("hudPurseCoins" in HH) ? HH : {
          ...HH,
          hudPurseCoins: Math.max(0, HH.hudPurseCoins - BH)
        }
      }
      receiveHud(HH) {
        this.hudSnapshot = HH, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(HH) {
        this.setMenuOpen(!0);
        const BH = HH === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = HH;
        for (const LH of this.panels) LH === HH || BH && LH === this.reachLog || LH.close();
        this.openingPanel = null
      }
      setTranslator(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BH => this.resolveItemName(BH, HH);
        this.quests.translateWithIcons = null !== LH && void 0 !== LH ? LH : null, this.navigation.setTranslator(HH, BH), this.lampLight.setTranslator(HH, BH), this.mailbox.setItemName(AH);
        for (const rH of this.panels) rH.setTranslator(HH, BH, AH)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const HH of this.panels) HH.dispose()
      }
    }
    var Hr = LH(1038),
      Br = LH.n(Hr),
      Lr = LH(15),
      Ar = LH(37472),
      rr = LH(3770),
      Sr = LH(1986),
      hr = LH(1967),
      tr = LH(35008),
      zr = LH(1123),
      Cr = LH(1450),
      Er = LH(1225);

    function Xr(HH) {
      let {
        controller: BH,
        minimap: LH,
        children: AH
      } = HH;
      const rH = (0, Cr.e)(JA, BH.getHudSnapshot()),
        [SH, hH] = (0, VH.useState)(BH.skills.getSnapshot().overallLevel);
      (0, Cr.d)(RB, (HH => {
        hH(HH.overallLevel)
      }));
      const tH = (0, VH.useRef)(null);
      (0, Cr.d)(TL, (HH => {
        ! function(HH, BH) {
          if (null === HH || "function" !== typeof HH.animate) return;
          const LH = BH ? 1.35 : 1.15;
          HH.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${LH})`
          }, {
            transform: "scale(1)"
          }], {
            duration: BH ? 320 : 160,
            easing: "ease-out"
          }), HH.classList.toggle("Receiving", !BH), BH && (HH.classList.remove("Shine"), HH.offsetWidth, HH.classList.add("Shine"))
        }(tH.current, HH)
      }));
      const {
        t: zH
      } = (0, zr.B)(), {
        isTouchScreen: CH
      } = (0, Lr.m)(["isTouchScreen"]), [EH, GH] = (0, VH.useState)(null);
      return (0, rr.h)(EH, ".SkyblockRightHud"), null !== rH || LH ? (0, Er.jsx)(Ar.e, {
        placement: "topRight",
        children: (0, Er.jsxs)("div", {
          className: Br()("SkyblockRightHud", {
            TouchScreen: CH
          }),
          children: [LH, null !== rH && (0, Er.jsxs)("div", {
            ref: GH,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in rH ? (0, Er.jsx)("div", {
              className: "SkyblockHudHelp",
              children: rH.hudHelpText
            }) : (0, Er.jsxs)(Er.Fragment, {
              children: [(0, Er.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Er.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Er.jsx)("strong", {
                    style: {
                      color: XH.K.cyanUiText
                    },
                    children: zH(rH.hudZoneNameKey)
                  }), null !== SH && (0, Er.jsx)("span", {
                    style: {
                      color: XH.K.goldUiText
                    },
                    children: zH("skyblockGame:level", {
                      level: (0, tr.f)(SH)
                    })
                  })]
                }), (0, Er.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: tH,
                  children: [(0, Er.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, tr.f)(rH.hudPurseCoins)]
                })]
              }), rH.hudClockText.length > 0 && (0, Er.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Er.jsx)(hr.b, {
                  text: rH.hudClockText
                })
              })]
            }), AH, "hudZoneNameKey" in rH && (0, Er.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var Gr = LH(39467);

    function Yr(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)();
      return (0, Er.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: BH.display.mountPlayer,
        title: LH("skyblockGame:mapYouAreHere"),
        children: (0, Er.jsx)(Gr.d, {
          icon: "player"
        })
      })
    }
    const ur = LH(39475),
      Qr = Object.fromEntries(ur.keys().map((HH => [HH.replace(/^\.\/(.*)\.png$/, "$1"), ur(HH)])));

    function Wr(HH, BH) {
      var LH;
      return null !== (LH = Qr[HH]) && void 0 !== LH ? LH : Qr[BH]
    }

    function Mr(HH) {
      let {
        imageKey: BH,
        fallbackImageKey: LH,
        geometryKey: AH,
        alt: rH,
        className: SH
      } = HH;
      const [hH, tH] = (0, VH.useState)((() => function(HH, BH) {
        return [{
          id: 0,
          imageKey: HH,
          geometryKey: BH,
          phase: "shown"
        }]
      }(BH, AH))), zH = function(HH, BH, LH) {
        const AH = HH[HH.length - 1];
        if (AH.imageKey === BH && AH.geometryKey === LH) return HH;
        const rH = {
          id: AH.id + 1,
          imageKey: BH,
          geometryKey: LH,
          phase: "entering"
        };
        return AH.geometryKey === LH ? [{
          ...AH,
          phase: "leaving"
        }, rH] : [rH]
      }(hH, BH, AH);
      return zH !== hH && tH(zH), (0, Er.jsx)(Er.Fragment, {
        children: zH.map((HH => (0, Er.jsx)("img", {
          className: Br()("SkyblockMapTerrainImage", SH, {
            Entering: "entering" === HH.phase,
            Leaving: "leaving" === HH.phase
          }),
          src: Wr(HH.imageKey, LH),
          alt: "leaving" === HH.phase ? "" : rH,
          onAnimationEnd: () => {
            tH((BH => function(HH, BH) {
              return HH.flatMap((HH => HH.id !== BH ? [HH] : "leaving" === HH.phase ? [] : [{
                ...HH,
                phase: "shown"
              }]))
            }(BH, HH.id)))
          }
        }, HH.id)))
      })
    }
    var xr = LH(4941),
      vr = LH(1455);

    function Pr(HH) {
      if ("Tab" !== HH.key) return;
      const BH = Array.from(HH.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        LH = BH.indexOf(document.activeElement);
      var AH;
      if (HH.shiftKey && LH <= 0) HH.preventDefault(), null === (AH = BH.at(-1)) || void 0 === AH || AH.focus();
      else if (!HH.shiftKey && (-1 === LH || LH === BH.length - 1)) {
        var rH;
        HH.preventDefault(), null === (rH = BH[0]) || void 0 === rH || rH.focus()
      }
    }

    function Tr() {
      const HH = (0, VH.useRef)(null);
      return (0, VH.useCallback)((BH => {
        var LH;
        BH ? (HH.current = document.activeElement, BH.focus()) : null === (LH = HH.current) || void 0 === LH || LH.focus()
      }), [])
    }

    function Ur(HH) {
      let {
        percent: BH,
        label: LH,
        levelUpToken: AH,
        colour: rH
      } = HH;
      return (0, Er.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": LH,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": BH,
        "aria-valuetext": LH,
        children: [(0, Er.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${BH/100})`
          }
        }), null !== AH && void 0 !== AH && (0, Er.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": rH
          }
        }, AH)]
      })
    }

    function Vr(HH) {
      let {
        mount: BH
      } = HH;
      return (0, Er.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: BH,
        hidden: !0,
        children: (0, Er.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Er.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Er.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Or(HH, BH, LH, AH) {
      (0, VH.useLayoutEffect)((() => {
        const rH = HH.current;
        if (!LH || null === BH || void 0 === BH || !BH.local || !rH) return;
        const SH = Array.from(rH.querySelectorAll(".SkyblockMapNode")),
          hH = [...BH.points, ...BH.portals],
          tH = () => {
            const HH = rH.clientWidth,
              LH = rH.clientHeight,
              tH = SH.map(((rH, SH) => {
                const tH = hH[SH];
                return {
                  id: tH.id,
                  portal: SH >= BH.points.length,
                  x: tH.position[0] * HH / 100,
                  y: tH.position[1] * LH / 100,
                  width: rH.offsetWidth / AH,
                  height: rH.offsetHeight / AH
                }
              })),
              zH = new Map(hH.map(((HH, BH) => [HH.id, SH[BH]])));
            for (const BH of function(HH, BH, LH) {
                const AH = [],
                  rH = [...HH].sort(((HH, BH) => Number(BH.portal) - Number(HH.portal) || HH.id.localeCompare(BH.id)));
                for (const SH of rH) {
                  const HH = HH => Math.max(SH.width / 2, Math.min(BH - SH.width / 2, HH)),
                    rH = HH => Math.max(SH.height / 2, Math.min(LH - SH.height / 2, HH)),
                    hH = [HH(SH.x)],
                    tH = [rH(SH.y)];
                  for (const BH of AH) hH.push(HH(BH.x - (BH.width + SH.width) / 2 - 4), HH(BH.x + (BH.width + SH.width) / 2 + 4)), tH.push(rH(BH.y - (BH.height + SH.height) / 2 - 4), rH(BH.y + (BH.height + SH.height) / 2 + 4));
                  let zH = {
                      ...SH,
                      x: hH[0],
                      y: tH[0]
                    },
                    CH = 1 / 0,
                    EH = 1 / 0;
                  for (const BH of new Set(hH))
                    for (const HH of new Set(tH)) {
                      let LH = 0;
                      for (const hH of AH) LH += Math.max(0, (SH.width + hH.width) / 2 + 4 - Math.abs(BH - hH.x)) * Math.max(0, (SH.height + hH.height) / 2 + 4 - Math.abs(HH - hH.y));
                      const rH = (BH - SH.x) ** 2 + (HH - SH.y) ** 2;
                      (LH < CH || LH === CH && rH < EH) && (zH = {
                        ...SH,
                        x: BH,
                        y: HH
                      }, CH = LH, EH = rH)
                    }
                  AH.push(zH)
                }
                return AH
              }(tH, HH, LH)) {
              const HH = zH.get(BH.id);
              HH.style.left = `${BH.x}px`, HH.style.top = `${BH.y}px`
            }
          };
        tH();
        const zH = new ResizeObserver(tH);
        zH.observe(rH);
        for (const HH of SH) zH.observe(HH);
        return () => {
          zH.disconnect()
        }
      }), [HH, BH, LH, AH])
    }
    const br = {
        zoom: 1,
        x: 0,
        y: 0
      },
      kr = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function mr(HH, BH, LH) {
      return Math.min(LH, Math.max(BH, HH))
    }

    function or(HH, BH, LH) {
      const AH = Math.min(1, LH * BH / HH),
        rH = Math.min(1, HH / (LH * BH));
      return {
        x0: (1 - AH) / 2,
        y0: (1 - rH) / 2,
        x1: (1 + AH) / 2,
        y1: (1 + rH) / 2
      }
    }

    function Ir(HH, BH, LH, AH) {
      const rH = BH * (AH - LH);
      if (rH <= 1) return .5 - BH * (LH + AH) / 2;
      const SH = .45 * Math.min(1, rH - 1);
      return mr(HH, 1 - BH * AH - SH, SH - BH * LH)
    }

    function fr(HH, BH) {
      const LH = mr(HH.zoom, 1, 12);
      return {
        zoom: LH,
        x: Ir(HH.x, LH, BH.x0, BH.x1),
        y: Ir(HH.y, LH, BH.y0, BH.y1)
      }
    }

    function lr(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kr;
      const SH = mr(HH.zoom * BH, 1, 12),
        hH = SH / HH.zoom;
      return fr({
        zoom: SH,
        x: LH - (LH - HH.x) * hH,
        y: AH - (AH - HH.y) * hH
      }, rH)
    }

    function Kr(HH, BH, LH, AH) {
      const [rH, SH] = (0, VH.useState)(br);
      (0, VH.useEffect)((() => {
        SH(br)
      }), [LH]), (0, VH.useEffect)((() => {
        const LH = HH.current;
        if (!BH || !LH) return;
        const rH = () => or(LH.clientWidth, LH.clientHeight, AH),
          hH = HH => {
            const BH = LH.getBoundingClientRect();
            return {
              x: (HH.clientX - BH.left) / BH.width,
              y: (HH.clientY - BH.top) / BH.height
            }
          },
          tH = new Map;
        let zH = {
            x: 0,
            y: 0
          },
          CH = !1,
          EH = 0;
        const XH = HH => {
            HH.preventDefault();
            const BH = HH.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * HH.deltaY : HH.deltaY,
              LH = hH(HH);
            SH((HH => lr(HH, Math.exp(.0015 * -BH), LH.x, LH.y, rH())))
          },
          GH = HH => {
            "mouse" === HH.pointerType && 0 !== HH.button || (tH.set(HH.pointerId, hH(HH)), 1 === tH.size && (zH = {
              x: HH.clientX,
              y: HH.clientY
            }, CH = !1), EH = 0)
          },
          YH = HH => {
            const BH = tH.get(HH.pointerId);
            if (!BH) return;
            const AH = hH(HH);
            if (tH.set(HH.pointerId, AH), 2 === tH.size) {
              const [HH, BH] = [...tH.values()], LH = Math.hypot(HH.x - BH.x, HH.y - BH.y);
              if (EH > 0) {
                const AH = LH / EH;
                SH((LH => lr(LH, AH, (HH.x + BH.x) / 2, (HH.y + BH.y) / 2, rH())))
              }
              return EH = LH, void(CH = !0)
            }!CH && Math.hypot(HH.clientX - zH.x, HH.clientY - zH.y) < 4 || (CH || (CH = !0, LH.setPointerCapture(HH.pointerId)), SH((HH => function(HH, BH, LH) {
              let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kr;
              return fr({
                zoom: HH.zoom,
                x: HH.x + BH,
                y: HH.y + LH
              }, AH)
            }(HH, AH.x - BH.x, AH.y - BH.y, rH()))))
          },
          uH = HH => {
            tH.delete(HH.pointerId), EH = 0
          },
          QH = HH => {
            CH && (HH.stopPropagation(), HH.preventDefault(), CH = !1)
          },
          WH = new ResizeObserver((() => {
            SH((HH => fr(HH, rH())))
          }));
        return WH.observe(LH), LH.addEventListener("wheel", XH, {
          passive: !1
        }), LH.addEventListener("pointerdown", GH), LH.addEventListener("pointermove", YH), LH.addEventListener("pointerup", uH), LH.addEventListener("pointercancel", uH), LH.addEventListener("click", QH, !0), () => {
          WH.disconnect(), LH.removeEventListener("wheel", XH), LH.removeEventListener("pointerdown", GH), LH.removeEventListener("pointermove", YH), LH.removeEventListener("pointerup", uH), LH.removeEventListener("pointercancel", uH), LH.removeEventListener("click", QH, !0)
        }
      }), [HH, BH, LH, AH]);
      return {
        view: rH,
        zoomBy: BH => {
          const LH = HH.current;
          LH && SH((HH => lr(HH, BH, .5, .5, or(LH.clientWidth, LH.clientHeight, AH))))
        }
      }
    }

    function cr(HH) {
      var BH, LH, AH, rH;
      let {
        controller: SH,
        navigation: hH
      } = HH;
      const tH = (0, Cr.e)(CH, SH.getSnapshot()),
        {
          t: zH
        } = (0, zr.B)(),
        EH = Tr(),
        XH = tH.presentation,
        GH = (0, VH.useRef)(null),
        YH = (0, VH.useRef)(null),
        uH = Boolean(tH.open && (null === XH || void 0 === XH ? void 0 : XH.local) && XH.background),
        QH = Kr(GH, uH, `${tH.open}|${tH.tab}|${null===XH||void 0===XH||null===(BH=XH.background)||void 0===BH?void 0:BH.geometryKey}`, null !== (LH = null === XH || void 0 === XH || null === (AH = XH.background) || void 0 === AH ? void 0 : AH.ratio) && void 0 !== LH ? LH : 2);
      if (Or(YH, XH, tH.open, QH.view.zoom), !XH || !tH.open) return null;
      const WH = XH.local ? XH.background : null,
        MH = {
          "--map-ratio": String(null !== (rH = null === WH || void 0 === WH ? void 0 : WH.ratio) && void 0 !== rH ? rH : 2),
          backgroundColor: null === WH || void 0 === WH ? void 0 : WH.colour
        },
        xH = {
          "--map-zoom": String(QH.view.zoom),
          transform: `translate(${100*QH.view.x}%, ${100*QH.view.y}%) scale(${QH.view.zoom})`
        };
      return (0, Er.jsx)(xr.b, {
        show: tH.open,
        close: SH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: EH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Er.jsx)("h2", {
                id: "skyblockMapTitle",
                children: zH("skyblockGame:map")
              }), XH.minimap && (0, Er.jsx)("p", {
                children: XH.minimap.caption
              })]
            }), (0, Er.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((HH => (0, Er.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": HH === tH.tab ? "true" : void 0,
                className: Br()({
                  Selected: HH === tH.tab
                }),
                "aria-pressed": HH === tH.tab,
                onClick: () => {
                  SH.selectTab(HH)
                },
                children: zH("local" === HH ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, HH)))
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: SH.dismiss
            })]
          }), (0, Er.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Er.jsxs)("div", {
              ref: GH,
              className: Br()("SkyblockMapCanvas", {
                Local: XH.local,
                Overview: !XH.local,
                Zoomed: QH.view.zoom > 1
              }),
              style: MH,
              children: [(0, Er.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: uH ? xH : void 0,
                children: (0, Er.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: YH,
                  children: [WH && (0, Er.jsx)(Mr, {
                    className: "SkyblockMapTerrain",
                    imageKey: WH.imageKey,
                    fallbackImageKey: WH.fallbackImageKey,
                    geometryKey: WH.geometryKey,
                    alt: WH.label
                  }), XH.local && (0, Er.jsx)(Vr, {
                    mount: hH.display.mountMapSearchArea
                  }), !XH.local && (0, Er.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: XH.connections.map((HH => (0, Er.jsx)("line", {
                      className: Br()({
                        Explored: HH.explored
                      }),
                      x1: HH.start[0],
                      y1: HH.start[1],
                      x2: HH.end[0],
                      y2: HH.end[1]
                    }, HH.id)))
                  }), XH.points.map((HH => {
                    const BH = !XH.local && HH.thumbnail ? Qr[HH.thumbnail] : void 0;
                    return (0, Er.jsxs)("div", {
                      className: Br()("SkyblockMapNode", {
                        Current: HH.current
                      }),
                      style: {
                        left: `${HH.position[0]}%`,
                        top: `${HH.position[1]}%`
                      },
                      children: [(0, Er.jsxs)(vr.i, {
                        className: Br()("SkyblockMapPin", {
                          Unknown: !HH.visited,
                          Current: HH.current
                        }),
                        disabled: tH.pending,
                        onClick: () => {
                          SH.travel(HH.travelKind, HH.travelId)
                        },
                        children: [BH && (0, Er.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: BH,
                          alt: ""
                        }), !BH && (0, Er.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Er.jsx)(Gr.d, {
                            icon: HH.icon
                          })
                        }), (0, Er.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: HH.name
                        })]
                      }), HH.current && (0, Er.jsx)("span", {
                        className: Br()("SkyblockMapHereBadge", {
                          Above: HH.position[1] > 50
                        }),
                        children: zH("skyblockGame:mapYouAreHere")
                      })]
                    }, HH.id)
                  })), XH.portals.map((HH => (0, Er.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${HH.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${HH.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Er.jsxs)(vr.i, {
                      className: "SkyblockMapPin",
                      disabled: tH.pending,
                      onClick: () => {
                        SH.travel(HH.travelKind, HH.travelId)
                      },
                      children: [(0, Er.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: HH.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Er.jsx)(Gr.d, {
                          icon: HH.icon
                        })
                      }), (0, Er.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: HH.name
                      })]
                    })
                  }, HH.id))), XH.local && (0, Er.jsx)(Yr, {
                    controller: hH
                  })]
                })
              }), uH && (0, Er.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Er.jsx)("button", {
                  type: "button",
                  "aria-label": zH("skyblockGame:mapZoomIn"),
                  disabled: QH.view.zoom >= 12,
                  onClick: () => {
                    QH.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Er.jsx)("button", {
                  type: "button",
                  "aria-label": zH("skyblockGame:mapZoomOut"),
                  disabled: QH.view.zoom <= 1,
                  onClick: () => {
                    QH.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Er.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: tH.feedback
              })]
            })
          }), (0, Er.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [XH.progress && (0, Er.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Er.jsx)("span", {
                children: XH.progress
              }), (0, Er.jsx)(Ur, {
                percent: XH.percent,
                label: XH.progress
              })]
            }), XH.noLandmarks && (0, Er.jsx)("span", {
              children: zH("skyblockGame:mapNoLandmarks")
            }), XH.canTravel && (0, Er.jsx)("span", {
              className: "SkyblockMapHint",
              children: zH("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function er(HH) {
      let {
        view: BH,
        controller: LH,
        navigation: AH
      } = HH;
      const {
        t: rH
      } = (0, zr.B)(), {
        isTouchScreen: SH
      } = (0, Lr.m)(["isTouchScreen"]);
      return (0, Er.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": rH("skyblockGame:mapLocal"),
        children: [SH && (0, Er.jsx)(vr.i, {
          className: "SkyblockMinimapOpen",
          onClick: LH.showLocal,
          children: rH("skyblockGame:map")
        }), (0, Er.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: BH.colour
          },
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: AH.display.mountTerrain,
            style: {
              width: BH.width,
              height: BH.height
            },
            children: [(0, Er.jsx)(Mr, {
              imageKey: BH.imageKey,
              fallbackImageKey: BH.fallbackImageKey,
              geometryKey: BH.geometryKey,
              alt: BH.label
            }), (0, Er.jsx)(Vr, {
              mount: AH.display.mountMinimapSearchArea
            }), BH.markers.map((HH => (0, Er.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${HH.position[0]}%`,
                top: `${HH.position[1]}%`,
                color: HH.colour
              },
              title: HH.name,
              children: (0, Er.jsx)(Gr.d, {
                icon: HH.icon
              })
            }, HH.id)))]
          }), (0, Er.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: rH("skyblockGame:mapYouAreHere"),
            children: (0, Er.jsx)(Gr.d, {
              icon: "player"
            })
          })]
        }), (0, Er.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: BH.caption
        })]
      })
    }

    function qr(HH) {
      let {
        controller: BH
      } = HH;
      return (0, Er.jsxs)("div", {
        className: "SkyblockCompass",
        ref: BH.display.mountCompass,
        children: [(0, Er.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Er.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Er.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function gr(HH) {
      let {
        controller: BH,
        surface: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)(), rH = (0, Cr.e)(RB, BH.getSnapshot()), SH = Tr();
      return rH.enabled ? (0, Er.jsxs)(Er.Fragment, {
        children: ["hud" === LH && (0, Er.jsx)(Ar.e, {
          placement: "statBars",
          children: rH.hud && (0, Er.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": rH.hud.colour
            },
            children: [(0, Er.jsx)(Ur, {
              percent: rH.hud.skill.percent,
              label: rH.hud.skill.xp,
              levelUpToken: rH.hud.levelUpToken,
              colour: rH.hud.colour
            }), (0, Er.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Er.jsxs)("span", {
                children: [rH.hud.skill.label, " \xb7 ", rH.hud.skill.level]
              }), (0, Er.jsx)("span", {
                children: rH.hud.gain
              })]
            })]
          })
        }), "hud" === LH && (0, Er.jsx)(Ar.e, {
          children: rH.hud && (0, Er.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Er.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Er.jsx)("strong", {
                children: rH.hud.skill.label
              }), (0, Er.jsx)("span", {
                children: rH.hud.gain
              })]
            }), (0, Er.jsx)(Ur, {
              percent: rH.hud.skill.percent,
              label: rH.hud.skill.xp,
              levelUpToken: rH.hud.levelUpToken,
              colour: rH.hud.colour
            }), (0, Er.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Er.jsx)("span", {
                children: rH.hud.skill.level
              }), (0, Er.jsx)("span", {
                children: rH.hud.skill.xp
              })]
            })]
          })
        }), "menu" === LH && (0, Er.jsx)(xr.b, {
          show: rH.open,
          close: BH.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Er.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: SH,
            onKeyDown: Pr,
            children: [(0, Er.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Er.jsxs)("div", {
                children: [(0, Er.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: AH("skyblockGame:skills")
                }), (0, Er.jsx)("p", {
                  children: AH("skyblockGame:skillsIntro")
                })]
              }), (0, Er.jsx)(vr.q, {
                padIgnore: !0,
                onClick: BH.dismiss
              })]
            }), (0, Er.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Er.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: rH.skills.map((HH => (0, Er.jsxs)(vr.i, {
                  className: Br()("SkyblockSkillCard", {
                    Selected: HH.selected
                  }),
                  ariaPressed: HH.selected,
                  onClick: () => {
                    BH.select(HH.id)
                  },
                  children: [(0, Er.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: HH.icon,
                      amount: 0
                    })
                  }), (0, Er.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Er.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Er.jsx)("strong", {
                        children: HH.label
                      }), (0, Er.jsx)("span", {
                        children: HH.level
                      })]
                    }), (0, Er.jsx)(Ur, {
                      percent: HH.percent,
                      label: `${HH.label}: ${HH.xp}`
                    }), (0, Er.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: HH.xp
                    })]
                  })]
                }, HH.id)))
              }), rH.detail && (0, Er.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Er.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Er.jsx)(Sr.e, {
                    itemName: rH.detail.icon,
                    amount: 0
                  })
                }), (0, Er.jsx)("h3", {
                  children: rH.detail.label
                }), (0, Er.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: rH.detail.level
                }), (0, Er.jsx)("p", {
                  children: rH.detail.description
                }), (0, Er.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Er.jsx)("strong", {
                    children: AH("skyblockGame:currentBenefit")
                  }), (0, Er.jsx)("span", {
                    children: rH.detail.benefit
                  })]
                }), (0, Er.jsx)(Ur, {
                  percent: rH.detail.percent,
                  label: rH.detail.xp
                }), (0, Er.jsx)("p", {
                  children: rH.detail.xp
                }), (0, Er.jsx)("h4", {
                  children: AH("skyblockGame:earnXp")
                }), (0, Er.jsx)("ul", {
                  children: rH.detail.sources.map((HH => (0, Er.jsx)("li", {
                    children: HH
                  }, HH)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Nr = LH(1365),
      Rr = LH(5314),
      jr = LH(304);

    function nr(HH) {
      let {
        item: BH
      } = HH;
      return (0, Er.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Er.jsx)(Sr.e, {
          itemName: BH,
          amount: 0
        })
      })
    }

    function Fr(HH) {
      let {
        name: BH,
        percent: LH,
        progress: AH
      } = HH;
      return (0, Er.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Er.jsx)(Ur, {
          percent: LH,
          label: `${(0,jr.zb)(BH)}: ${AH}`
        }), (0, Er.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: AH
        })]
      })
    }

    function Dr(HH) {
      let {
        subquests: BH,
        showDescriptions: LH = !1
      } = HH;
      return (0, Er.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: BH.map((HH => {
          const BH = LH && "completed" === HH.status,
            AH = (0, Er.jsxs)("li", {
              className: Br()("SkyblockQuestStep", HH.status, {
                JustFinished: HH.justFinished,
                JustUnlocked: HH.justUnlocked
              }),
              tabIndex: BH ? 0 : void 0,
              children: [null !== HH.iconItem && (0, Er.jsx)(nr, {
                item: HH.iconItem
              }), null === HH.iconItem && (0, Er.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === HH.status ? "\u2713" : "skipped" === HH.status ? "\u2212" : "\u25cb"
              }), (0, Er.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Er.jsx)("strong", {
                  children: (0, Er.jsx)(Rr.b, {
                    text: HH.name
                  })
                }), LH && !BH && (0, Er.jsx)("span", {
                  children: (0, Er.jsx)(Rr.b, {
                    text: HH.description
                  })
                }), null !== HH.barPercent && (0, Er.jsx)(Fr, {
                  name: HH.name,
                  percent: HH.barPercent,
                  progress: HH.progress
                }), null === HH.barPercent && !BH && (0, Er.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: HH.statusLabel
                })]
              })]
            }, HH.id);
          return BH ? (0, Er.jsx)(Nr.g, {
            delayShow: 200,
            tooltipInner: (0, Er.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Er.jsx)("span", {
                children: (0, Er.jsx)(Rr.b, {
                  text: HH.description
                })
              }), (0, Er.jsx)("strong", {
                children: HH.statusLabel
              })]
            }),
            children: AH
          }, HH.id) : AH
        }))
      })
    }

    function wr(HH) {
      let {
        quest: BH,
        select: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)(), rH = BH.focusStep;
      return (0, Er.jsxs)(vr.i, {
        className: Br()("SkyblockQuestCard", {
          Selected: BH.selected,
          Tracked: BH.tracked
        }),
        onClick: () => {
          LH(BH.id)
        },
        children: [(0, Er.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Er.jsx)("strong", {
            children: (0, Er.jsx)(Rr.b, {
              text: BH.name
            })
          }), BH.tracked && (0, Er.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: AH("skyblockGame:currentQuest")
          })]
        }), rH && (0, Er.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== rH.iconItem && (0, Er.jsx)(nr, {
            item: rH.iconItem
          }), (0, Er.jsx)(Fr, {
            name: rH.name,
            percent: rH.barPercent,
            progress: rH.progress
          })]
        }), (0, Er.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: BH.progress
        })]
      })
    }

    function Zr(HH) {
      let {
        controller: BH,
        surface: LH
      } = HH;
      const AH = (0, Cr.e)(DB, BH.getSnapshot()),
        {
          t: rH
        } = (0, zr.B)(),
        SH = Tr();
      return AH.enabled ? (0, Er.jsxs)(Er.Fragment, {
        children: ["hud" === LH && (0, Er.jsx)(Er.Fragment, {
          children: AH.tracked && (0, Er.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: FB,
            children: (0, Er.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [AH.trackedStepPulse > 0 && (0, Er.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, AH.trackedStepPulse), (0, Er.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: rH("skyblockGame:currentQuest")
              }), (0, Er.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Er.jsx)("strong", {
                  children: (0, Er.jsx)(Rr.b, {
                    text: AH.tracked.name
                  })
                }), null !== AH.tracked.clock && (0, Er.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: AH.tracked.clock
                })]
              }), (0, Er.jsx)(Dr, {
                subquests: AH.tracked.subquests
              })]
            })
          })
        }), "menu" === LH && (0, Er.jsx)(xr.b, {
          show: AH.open,
          close: BH.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Er.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: SH,
            onKeyDown: Pr,
            children: [(0, Er.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Er.jsx)("div", {
                children: (0, Er.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: rH("skyblockGame:quests")
                })
              }), (0, Er.jsx)(vr.q, {
                padIgnore: !0,
                onClick: BH.dismiss
              })]
            }), (0, Er.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Er.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Er.jsx)("h3", {
                  children: rH("skyblockGame:current")
                }), 0 === AH.active.length && (0, Er.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: rH("skyblockGame:noActiveQuests")
                }), AH.active.map((HH => (0, Er.jsx)(wr, {
                  quest: HH,
                  select: BH.select
                }, HH.id))), (0, Er.jsx)("h3", {
                  children: (0, Er.jsxs)("button", {
                    type: "button",
                    className: Br()("SkyblockQuestSectionToggle", {
                      Expanded: AH.completedExpanded
                    }),
                    "aria-expanded": AH.completedExpanded,
                    onClick: BH.toggleCompleted,
                    children: [(0, Er.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), rH("skyblockGame:completed"), (0, Er.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: AH.completed.length
                    })]
                  })
                }), AH.completedExpanded && 0 === AH.completed.length && (0, Er.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: rH("skyblockGame:noCompletedQuests")
                }), AH.completedExpanded && AH.completed.map((HH => (0, Er.jsx)(wr, {
                  quest: HH,
                  select: BH.select
                }, HH.id)))]
              }), AH.detail && (0, Er.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [AH.detail.completed && (0, Er.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: rH("skyblockGame:completedQuest")
                }), (0, Er.jsx)("h3", {
                  children: (0, Er.jsx)(Rr.b, {
                    text: AH.detail.name
                  })
                }), (0, Er.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Er.jsx)(Rr.b, {
                    text: AH.detail.description
                  })
                }), (0, Er.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [AH.detail.progress, null !== AH.detail.clock && (0, Er.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: AH.detail.clock
                  })]
                }), (0, Er.jsx)(Dr, {
                  subquests: AH.detail.subquests,
                  showDescriptions: !0
                }), AH.detail.tracked && (0, Er.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: AH.detail.trackLabel
                }), !AH.detail.completed && !AH.detail.tracked && (0, Er.jsx)(vr.u, {
                  onClick: BH.trackSelected,
                  disabled: !AH.detail.canTrack,
                  children: AH.detail.trackLabel
                }), AH.detail.canViewDialogue && (0, Er.jsx)(vr.i, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: BH.viewDialogue,
                  children: rH("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var dr = LH(1315),
      ar = LH(2864);

    function sr(HH, BH, LH, AH, rH) {
      const SH = HH => "linear" === rH ? HH : {
          lB: rH,
          point: HH
        },
        hH = {};
      for (const [tH, zH] of AH)
        for (const [BH, LH] of Object.entries(HH(tH, zH, SH))) hH[BH] ??= {
          timeline: []
        }, hH[BH].timeline.push(LH);
      return {
        kB: BH,
        loop: LH,
        oB: hH
      }
    }
    const Jr = .547,
      ir = .022,
      pr = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      yr = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function HS(HH, BH, LH) {
      const {
        drop: AH = 0,
        shift: rH = 0,
        torso: SH = 0,
        nod: hH = 0,
        tilt: tH = 0,
        legs: zH = [0, 0],
        arms: CH = 0,
        spread: EH = 0
      } = BH, XH = Jr * Math.cos(SH) - ir * Math.sin(SH), GH = Jr * Math.sin(SH) + ir * Math.cos(SH), YH = LH([0, -AH, rH]);
      return {
        LowerBody: {
          timeFraction: HH,
          position: YH,
          rotation: LH([0, 0, 0])
        },
        UpperBody: {
          timeFraction: HH,
          position: YH,
          rotation: LH([SH, 0, tH])
        },
        HeadMesh: {
          timeFraction: HH,
          position: LH([0, XH - Jr - AH, GH - ir + rH]),
          rotation: LH([SH + hH, 0, tH])
        },
        LegLeftMesh: {
          timeFraction: HH,
          rotation: LH([zH[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: HH,
          rotation: LH([zH[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: HH,
          rotation: LH([CH, 0, EH])
        },
        ArmRightMesh: {
          timeFraction: HH,
          rotation: LH([CH, 0, -EH])
        }
      }
    }

    function BS(HH, BH, LH) {
      return sr(HS, HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function LS(HH) {
      return "number" === typeof HH ? [HH, HH] : HH
    }

    function AS(HH, BH, LH) {
      const {
        rise: AH = 0,
        shift: rH = 0,
        torso: SH = 0,
        twist: hH = 0,
        tilt: tH = 0,
        nod: zH = 0,
        cock: CH = 0,
        arms: EH = 0,
        spread: XH = 0
      } = BH, [GH, YH] = LS(EH), [uH, QH] = LS(XH);
      return {
        TorsoNode: {
          timeFraction: HH,
          position: LH([0, AH, rH]),
          rotation: LH([SH, hH, tH])
        },
        HeadMesh: {
          timeFraction: HH,
          rotation: LH([zH, 0, CH])
        },
        ArmLeftMesh: {
          timeFraction: HH,
          rotation: LH([GH, 0, uH])
        },
        ArmRightMesh: {
          timeFraction: HH,
          rotation: LH([YH, 0, -QH])
        }
      }
    }
    const rS = [1.0625, -1, 0];

    function SS(HH) {
      return "number" === typeof HH ? [HH, HH] : HH
    }

    function hS(HH, BH, LH) {
      const {
        drop: AH = 0,
        shift: rH = 0,
        torso: SH = 0,
        tilt: hH = 0,
        nod: tH = 0,
        cock: zH = 0,
        legs: CH = [0, 0],
        arms: EH = 0,
        spread: XH = 0
      } = BH, [GH, YH] = SS(EH), [uH, QH] = SS(XH), WH = -SH, MH = -hH, [xH, vH, PH] = function(HH, BH) {
        const [LH, AH, rH] = [-rS[0], rS[1], -rS[2]], SH = LH * Math.cos(BH) - AH * Math.sin(BH), hH = LH * Math.sin(BH) + AH * Math.cos(BH);
        return [SH - LH, -(hH * Math.cos(HH) - rH * Math.sin(HH) - AH), hH * Math.sin(HH) + rH * Math.cos(HH) - rH]
      }(WH, MH), TH = LH([0, -AH, rH]);
      return {
        TorsoNode: {
          timeFraction: HH,
          position: LH([xH, vH - AH, PH + rH]),
          rotation: LH([WH, 0, MH])
        },
        HeadMesh: {
          timeFraction: HH,
          rotation: LH([-tH, 0, -zH])
        },
        ArmLeftMesh: {
          timeFraction: HH,
          rotation: LH([-GH, 0, -uH])
        },
        ArmRightMesh: {
          timeFraction: HH,
          rotation: LH([-YH, 0, QH])
        },
        LegLeftMesh: {
          timeFraction: HH,
          position: TH,
          rotation: LH([-CH[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: HH,
          position: TH,
          rotation: LH([-CH[1], 0, 0])
        }
      }
    }
    var tS = LH(38029),
      zS = LH(39342),
      CS = LH(39550);

    function ES(HH, BH, LH) {
      var AH, rH;
      const SH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return HH + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - HH) * LH
        },
        [hH, tH] = null !== (AH = HH.legs) && void 0 !== AH ? AH : [0, 0],
        [zH, CH] = null !== (rH = BH.legs) && void 0 !== rH ? rH : [0, 0];
      return {
        drop: SH(HH.drop, BH.drop),
        shift: SH(HH.shift, BH.shift),
        torso: SH(HH.torso, BH.torso),
        nod: SH(HH.nod, BH.nod),
        tilt: SH(HH.tilt, BH.tilt),
        legs: [SH(hH, zH), SH(tH, CH)],
        arms: SH(HH.arms, BH.arms),
        spread: SH(HH.spread, BH.spread)
      }
    }
    const XS = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      GS = BS(4400, !0, [
        [0, XS],
        [.16, {
          ...XS,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, XS],
        [.44, {
          ...XS,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, ES(XS, pr, .7)],
        [.66, ES(XS, pr, .78)],
        [.74, ES(XS, yr, .65)],
        [.86, {
          ...XS,
          drop: .14
        }],
        [1, XS]
      ], "catmull-rom-spline"),
      YS = {
        ...XS,
        drop: .14,
        torso: .3,
        spread: .4
      },
      uS = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      QS = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      WS = {
        caveGolem: GS,
        magmaGolem: BS(3600, !0, [
          [0, YS],
          [.12, {
            ...YS,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...YS,
            tilt: -.08
          }],
          [.4, {
            ...YS,
            tilt: .06,
            drop: .11
          }],
          [.52, ES(YS, pr, .9)],
          [.62, ES(YS, yr, .8)],
          [.7, ES(YS, yr, .45)],
          [.78, ES(YS, yr, .85)],
          [.9, {
            ...YS,
            drop: .17
          }],
          [1, YS]
        ], "catmull-rom-spline"),
        frostWraith: function(HH, BH, LH) {
          return sr(AS, HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, uS],
          [.14, {
            ...uS,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...uS,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...uS,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...uS,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...uS,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...uS,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...uS,
            rise: .16,
            tilt: -.04
          }],
          [1, uS]
        ], "catmull-rom-spline"),
        tikiTerror: function(HH, BH, LH) {
          return sr(hS, HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, QS],
          [.16, {
            ...QS,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, QS],
          [.44, {
            ...QS,
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
            ...QS,
            drop: .1
          }],
          [1, QS]
        ], "catmull-rom-spline")
      },
      MS = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      xS = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      vS = Object.fromEntries(Object.entries(WS).map((HH => {
        let [BH, LH] = HH;
        return [BH, (0, CS.d)((0, tS.h)(LH), BH)]
      })));

    function PS(HH) {
      const BH = function(HH) {
        var BH;
        const LH = (0, zS.d)(HH).poseRig;
        return null !== (BH = xS[HH]) && void 0 !== BH ? BH : void 0 === LH ? null : MS[LH]
      }(HH);
      return null === BH ? null : vS[BH]
    }

    function TS(HH) {
      return {
        "--difficulty-colour": HH
      }
    }
    const US = (0, VH.lazy)((() => (0, ar.d)(LH.e(223).then((() => LH(45006))), (HH => HH.MobPreview))));

    function VS(HH) {
      var BH, LH, AH;
      let {
        picker: rH,
        controller: SH
      } = HH;
      const {
        t: hH
      } = (0, zr.B)(), tH = Tr(), {
        page: zH
      } = rH;
      return (0, Er.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: tH,
        onKeyDown: HH => {
          "ArrowLeft" === HH.key ? (HH.preventDefault(), HH.stopPropagation(), SH.previous()) : "ArrowRight" === HH.key ? (HH.preventDefault(), HH.stopPropagation(), SH.next()) : Pr(HH)
        },
        style: TS(zH.colour),
        children: [(0, Er.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Er.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: rH.dungeonName
          }), (0, Er.jsx)(vr.q, {
            padIgnore: !0,
            onClick: SH.dismiss
          })]
        }), (0, Er.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Er.jsx)(vr.i, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !rH.canPrevious,
              onClick: SH.previous,
              children: (0, Er.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Er.jsx)(dr.c, {
                  name: "angle-up"
                })
              })
            }), (0, Er.jsxs)("div", {
              className: Br()("SkyblockBossPickerBoss", {
                Locked: !zH.unlocked
              }),
              children: [null !== zH.bossMobType && (0, Er.jsx)(VH.Suspense, {
                fallback: (0, Er.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Er.jsx)(US, {
                  className: "SkyblockBossPickerModel",
                  mobType: zH.bossMobType,
                  variation: zH.bossMobVariation,
                  animation: null !== (BH = PS(zH.bossMobType)) && void 0 !== BH ? BH : void 0
                })
              }), null === zH.bossMobType && (0, Er.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Er.jsx)(vr.i, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !rH.canNext,
              onClick: SH.next,
              children: (0, Er.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Er.jsx)(dr.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Er.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [zH.beaten && (0, Er.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), zH.label]
            }), (0, Er.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (LH = zH.bossName) && void 0 !== LH ? LH : "???"
            }), (0, Er.jsxs)("span", {
              className: Br()("SkyblockBossPickerRecord", {
                Locked: null !== zH.lockedHint
              }),
              children: [null !== zH.lockedHintHighlight && (0, Er.jsxs)(Er.Fragment, {
                children: [zH.lockedHintHighlight.before, (0, Er.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: TS(zH.lockedHintHighlight.colour),
                  children: [null !== zH.lockedHintHighlight.icon && (0, Er.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: zH.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), zH.lockedHintHighlight.name]
                }), zH.lockedHintHighlight.after]
              }), null === zH.lockedHintHighlight && (null !== (AH = zH.lockedHint) && void 0 !== AH ? AH : zH.summary)]
            })]
          }), (0, Er.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: rH.pages.map((HH => (0, Er.jsx)("span", {
              className: Br()("SkyblockBossPickerDot", {
                Current: HH.current,
                Locked: !HH.unlocked
              }),
              style: TS(HH.colour)
            }, HH.difficulty)))
          }), (0, Er.jsx)(vr.x, {
            className: "SkyblockBossPickerFight",
            disabled: !zH.unlocked,
            onClick: SH.enter,
            children: hH("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function OS(HH) {
      let {
        dungeon: BH,
        select: LH
      } = HH;
      return (0, Er.jsxs)(vr.i, {
        className: Br()("SkyblockDungeonCard", {
          Selected: BH.selected
        }),
        onClick: () => {
          LH(BH.id)
        },
        children: [(0, Er.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Er.jsx)("strong", {
            children: BH.name
          }), (0, Er.jsx)("span", {
            children: BH.beatenSummary
          })]
        }), (0, Er.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: BH.difficulties.map((HH => (0, Er.jsxs)("span", {
            className: Br()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: HH.beaten
            }),
            style: TS(HH.colour),
            title: HH.summary,
            children: [HH.beaten && (0, Er.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), HH.label]
          }, HH.difficulty)))
        })]
      })
    }

    function bS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(aB, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsxs)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [LH.picker && (0, Er.jsx)(VS, {
          picker: LH.picker,
          controller: BH
        }), !LH.picker && (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: AH("skyblockGame:dungeons")
              }), (0, Er.jsx)("p", {
                children: AH("skyblockGame:dungeonsIntro")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: BH.dismiss
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Er.jsx)("div", {
              className: "SkyblockDungeonList",
              children: LH.dungeons.map((HH => (0, Er.jsx)(OS, {
                dungeon: HH,
                select: BH.select
              }, HH.id)))
            }), LH.detail && (0, Er.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Er.jsx)("h3", {
                children: LH.detail.name
              }), (0, Er.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: LH.detail.difficulties.map((HH => (0, Er.jsxs)("li", {
                  className: Br()("SkyblockDungeonRecord", {
                    Beaten: HH.beaten
                  }),
                  children: [(0, Er.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: TS(HH.colour),
                    children: [HH.beaten && (0, Er.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), HH.label]
                  }), (0, Er.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: HH.summary
                  })]
                }, HH.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function kS(HH) {
      let {
        collection: BH,
        select: LH
      } = HH;
      return (0, Er.jsxs)(vr.i, {
        className: Br()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: BH.selected,
          Locked: BH.locked
        }),
        ariaPressed: BH.selected,
        onClick: () => {
          LH(BH.id)
        },
        children: [(0, Er.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Er.jsx)(Sr.e, {
            itemName: BH.icon,
            amount: 0
          })
        }), (0, Er.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Er.jsx)("strong", {
              children: BH.name
            }), (0, Er.jsx)("span", {
              children: BH.tier
            })]
          }), (0, Er.jsx)(Ur, {
            percent: BH.percent,
            label: `${BH.name}: ${BH.progress}`
          }), (0, Er.jsx)("span", {
            className: "SkyblockSkillXp",
            children: BH.progress
          })]
        })]
      })
    }

    function mS(HH) {
      let {
        collection: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)();
      return (0, Er.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Er.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Er.jsx)(Sr.e, {
            itemName: BH.icon,
            amount: 0
          })
        }), (0, Er.jsx)("h3", {
          children: BH.name
        }), (0, Er.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: BH.tier
        }), (0, Er.jsx)("p", {
          children: BH.locked ? LH("skyblockGame:collectionLocked") : BH.count
        }), null !== BH.nextReward && (0, Er.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Er.jsx)("strong", {
            children: LH("skyblockGame:collectionNextReward")
          }), (0, Er.jsx)("span", {
            children: BH.nextReward
          })]
        }), (0, Er.jsx)(Ur, {
          percent: BH.percent,
          label: BH.progress
        }), (0, Er.jsx)("p", {
          children: BH.progress
        })]
      })
    }

    function oS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(QL, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: AH("skyblockGame:collections")
              }), (0, Er.jsxs)("p", {
                children: [AH("skyblockGame:collectionsIntro"), " ", LH.tiersUnlocked]
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: BH.dismiss
            })]
          }), (0, Er.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: LH.categories.map((HH => (0, Er.jsxs)(vr.i, {
              className: Br()("SkyblockCollectionCategory", {
                Selected: HH.selected
              }),
              ariaPressed: HH.selected,
              padTabSelected: HH.selected,
              onClick: () => {
                BH.selectCategory(HH.id)
              },
              children: [(0, Er.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Er.jsx)(Sr.e, {
                  itemName: HH.icon,
                  amount: 0
                })
              }), (0, Er.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Er.jsx)("strong", {
                  children: HH.label
                }), (0, Er.jsx)("span", {
                  children: HH.tiers
                })]
              })]
            }, HH.id)))
          }), (0, Er.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Er.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: LH.collections.map((HH => (0, Er.jsx)(kS, {
                collection: HH,
                select: BH.select
              }, HH.id)))
            }), LH.detail && (0, Er.jsx)(mS, {
              collection: LH.detail
            })]
          })]
        })
      }) : null
    }
    const IS = ["completed", "active", "available", "locked"],
      fS = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function lS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(mL, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: AH("skyblockDevQuests:title")
              }), (0, Er.jsx)("p", {
                children: AH("skyblockDevQuests:intro")
              })]
            }), (0, Er.jsx)(vr.q, {
              onClick: BH.dismiss
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [IS.map((HH => (0, Er.jsx)("span", {
              className: Br()("SkyblockQuestGraphLegendState", HH),
              children: AH(`skyblockDevQuests:state_${HH}`)
            }, HH))), fS.map((HH => (0, Er.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Er.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Er.jsx)("line", {
                  className: Br()("SkyblockQuestGraphEdge", HH),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), AH(`skyblockDevQuests:edge_${HH}`)]
            }, HH)))]
          }), (0, Er.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Er.jsxs)("div", {
              className: Br()("SkyblockQuestGraphCanvas", {
                Planning: LH.planning
              }),
              style: {
                width: LH.width,
                height: LH.height
              },
              children: [(0, Er.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: LH.width,
                height: LH.height,
                "aria-hidden": "true",
                children: [(0, Er.jsx)("defs", {
                  children: (0, Er.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Er.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), LH.edges.map((HH => (0, Er.jsx)("path", {
                  className: Br()("SkyblockQuestGraphEdge", HH.kind, {
                    InPlan: HH.inPlan
                  }),
                  d: HH.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, HH.key)))]
              }), LH.nodes.map((HH => (0, Er.jsxs)("button", {
                type: "button",
                className: Br()("SkyblockQuestGraphNode", HH.state, {
                  InPlan: HH.inPlan,
                  Hovered: HH.hovered
                }),
                style: {
                  left: HH.left,
                  top: HH.top,
                  width: 190,
                  height: 52
                },
                title: HH.id,
                onMouseEnter: () => {
                  BH.hover(HH.id)
                },
                onMouseLeave: () => {
                  BH.hover(null)
                },
                onFocus: () => {
                  BH.hover(HH.id)
                },
                onBlur: () => {
                  BH.hover(null)
                },
                onClick: () => {
                  BH.jump(HH.id)
                },
                children: [(0, Er.jsx)("strong", {
                  children: HH.name
                }), (0, Er.jsx)("span", {
                  children: HH.detail
                })]
              }, HH.id)))]
            })
          })]
        })
      }) : null
    }
    const KS = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      cS = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${nL}ms`,
        "--forge-duration": "2150ms"
      },
      eS = Array.from({
        length: 18
      }, ((HH, BH) => ({
        "--ember-left": `${(4+92*(.618034*BH%1)).toFixed(1)}%`,
        "--ember-size": 3 + BH % 3 * 2 + "px",
        "--ember-drift": 14 * (BH % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*BH%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*BH%8).toFixed(2)}s`
      })));

    function qS(HH) {
      if (HH.style.removeProperty("--part-size"), null === HH.parentElement || "wrap" === getComputedStyle(HH.parentElement).flexWrap) return;
      const BH = [...HH.children],
        LH = getComputedStyle(HH),
        AH = parseFloat(LH.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        rH = (HH.clientHeight - parseFloat(LH.rowGap) * (BH.length - 1)) / BH.length,
        SH = BH.map((HH => {
          const BH = getComputedStyle(HH),
            LH = HH.querySelector("h3"),
            SH = HH.querySelector(".SkyblockForgeParts");
          if (null === LH || null === SH) return AH;
          const hH = rH - parseFloat(BH.paddingTop) - parseFloat(BH.paddingBottom) - LH.offsetHeight - parseFloat(getComputedStyle(LH).marginBottom),
            tH = parseFloat(getComputedStyle(SH).columnGap),
            zH = SH.children.length;
          let CH = 0;
          for (let AH = 1; AH <= zH; AH++) {
            const HH = Math.ceil(zH / AH);
            CH = Math.max(CH, Math.min((SH.clientWidth - tH * (AH - 1)) / AH, (hH - tH * (HH - 1)) / HH))
          }
          return CH
        }));
      HH.style.setProperty("--part-size", `${Math.floor(Math.max(AH,Math.min(...SH)))}px`)
    }

    function gS(HH) {
      var BH, LH, AH, rH, SH;
      let {
        controller: hH
      } = HH;
      const tH = (0, Cr.e)(sL, hH.getSnapshot()),
        {
          t: zH
        } = (0, zr.B)(),
        CH = Tr(),
        EH = function() {
          const HH = (0, VH.useRef)(null),
            BH = (0, VH.useRef)(null);
          return (0, VH.useLayoutEffect)((() => {
            null !== HH.current && qS(HH.current)
          })), (0, VH.useCallback)((LH => {
            var AH;
            null === (AH = BH.current) || void 0 === AH || AH.disconnect(), BH.current = null, HH.current = LH, null !== LH && (BH.current = new ResizeObserver((() => {
              qS(LH)
            })), BH.current.observe(LH))
          }), [])
        }(),
        GH = function(HH) {
          const BH = (0, VH.useRef)(null);
          return (0, VH.useLayoutEffect)((() => {
            const HH = BH.current;
            if (null !== HH) {
              HH.style.removeProperty("font-size");
              for (let BH = 1.7; BH > 1.1 && HH.scrollWidth > HH.clientWidth; BH -= .1) HH.style.fontSize = BH - .1 + "rem"
            }
          }), [HH]), (0, VH.useCallback)((HH => {
            BH.current = HH
          }), [])
        }(null === (BH = tH.preview) || void 0 === BH ? void 0 : BH.name),
        YH = (0, VH.useRef)(null),
        uH = (0, VH.useRef)({}),
        QH = tH.forging,
        WH = null !== (LH = null === QH || void 0 === QH ? void 0 : QH.preview.tier) && void 0 !== LH ? LH : 0,
        MH = null !== (AH = null === QH || void 0 === QH ? void 0 : QH.preview.named) && void 0 !== AH && AH,
        xH = (0, VH.useMemo)((() => {
          return null === QH ? null : {
            flames: (HH = WH, BH = MH, Array.from({
              length: 26 + 6 * HH + (BH ? 20 : 0)
            }, ((HH, BH) => {
              const LH = BH < 6,
                AH = Math.random() * Math.PI * 2,
                rH = LH ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                SH = Math.cos(AH) * rH,
                hH = Math.sin(AH) * rH - 2 - 3 * Math.random(),
                tH = Math.random(),
                [zH, CH, EH] = LH ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : tH < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : tH < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [tH < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": zH,
                "--x0": `${(.15*SH).toFixed(2)}rem`,
                "--y0": `${(.15*hH).toFixed(2)}rem`,
                "--x": `${SH.toFixed(2)}rem`,
                "--y": `${hH.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${CH.toFixed(2)}rem`,
                "--duration": `${Math.round(EH)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: wL(WH, MH)
          };
          var HH, BH
        }), [null === QH || void 0 === QH ? void 0 : QH.id]);
      if (!tH.enabled) return null;
      const vH = tH.preview,
        PH = tH.arriving,
        TH = null !== PH && !PH.sameSword,
        UH = null !== vH && (0, Er.jsx)(Sr.e, {
          itemName: vH.baseSword,
          amount: 0,
          enchantmentTier: vH.enchantmentTier
        });
      return (0, Er.jsx)(xr.b, {
        show: tH.open,
        close: hH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: CH,
          onKeyDown: Pr,
          children: [(0, Er.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: eS.map(((HH, BH) => (0, Er.jsx)("span", {
              style: HH
            }, BH)))
          }), (0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: zH("skyblockGame:forgeTitle")
              }), (0, Er.jsx)("p", {
                children: zH("skyblockGame:forgeIntro")
              })]
            }), (0, Er.jsx)(vr.q, {
              onClick: hH.dismiss
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Er.jsx)("div", {
              ref: EH,
              className: Br()("SkyblockForgeSlots", {
                Locked: null !== QH
              }),
              children: tH.slots.map((HH => (0, Er.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Er.jsx)("h3", {
                  children: HH.label
                }), (0, Er.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: HH.parts.map((BH => (0, Er.jsx)("button", {
                    type: "button",
                    className: Br()("SkyblockForgePart", {
                      Selected: BH.selected,
                      Missing: BH.placeholder
                    }),
                    disabled: BH.placeholder,
                    title: BH.placeholder ? zH("skyblockGame:forgePickParts") : BH.itemName,
                    "aria-pressed": BH.selected,
                    onClick: () => {
                      hH.select(HH.kind, BH.material)
                    },
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: BH.itemName,
                      amount: BH.owned
                    })
                  }, BH.material)))
                })]
              }, HH.kind)))
            }), (0, Er.jsxs)("div", {
              className: Br()("SkyblockForgeAnvil", {
                Named: null === vH || void 0 === vH ? void 0 : vH.named
              }),
              style: {
                "--tier": null === vH ? "transparent" : XH.lb[vH.enchantmentTier]
              },
              children: [(0, Er.jsxs)("div", {
                className: Br()("SkyblockForgeAltar", {
                  Forging: null !== QH
                }),
                style: null === QH ? void 0 : cS,
                children: [(0, Er.jsxs)("div", {
                  className: Br()("SkyblockForgeMount", {
                    Arrive: null !== PH
                  }),
                  children: [null === vH && (0, Er.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: tH.unformedSword,
                      amount: 0
                    })
                  }), null !== vH && (0, Er.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== vH && null === QH && (0, Er.jsx)("div", {
                    ref: YH,
                    className: "SkyblockForgeFloat",
                    children: (0, Er.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: UH
                    })
                  }), null !== vH && (0, Er.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: DL.map(((HH, BH) => (0, Er.jsx)("span", {
                      className: Br()({
                        Rune: "" !== HH.rune
                      }),
                      style: HH.style,
                      children: HH.rune
                    }, BH)))
                  }), null !== QH && null !== xH && (0, Er.jsxs)(Er.Fragment, {
                    children: [(0, Er.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: xH.flames.map(((HH, BH) => (0, Er.jsx)("span", {
                        style: HH
                      }, BH)))
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: uH.current,
                      children: (0, Er.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: UH
                      })
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (WH >= 4 || MH) && (0, Er.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: xH.sparks.map(((HH, BH) => (0, Er.jsx)("span", {
                        style: HH
                      }, BH)))
                    }), (0, Er.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Er.jsx)("p", {
                  className: Br()("SkyblockForgeStatus", null === (rH = tH.status) || void 0 === rH ? void 0 : rH.tone),
                  children: null === (SH = tH.status) || void 0 === SH ? void 0 : SH.text
                })]
              }), null === vH && (0, Er.jsx)("p", {
                className: Br()("SkyblockForgeName Waiting", {
                  ArriveText: TH
                }),
                children: zH(tH.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== vH && (0, Er.jsx)("h3", {
                ref: GH,
                className: Br()("SkyblockForgeName", {
                  ArriveText: TH
                }),
                title: vH.name,
                children: vH.name
              }), (null === vH || void 0 === vH ? void 0 : vH.named) && (0, Er.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: zH("skyblockGame:forgeSecret")
              }), (0, Er.jsxs)(vr.x, {
                className: "SkyblockForgeButton",
                disabled: !tH.canForge,
                title: null === vH ? void 0 : zH("skyblockGame:forgeCoalOwned", {
                  owned: String(tH.coalOwned)
                }),
                onClick: () => {
                  uH.current = function(HH) {
                    const BH = null === HH ? "none" : getComputedStyle(HH).transform,
                      LH = new DOMMatrixReadOnly("none" === BH ? void 0 : BH);
                    return {
                      "--settle-y": `${LH.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(LH.b,LH.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(YH.current), aL(), hH.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [zH("skyblockGame:forgeButton"), null !== vH && (0, Er.jsxs)("span", {
                  className: Br()("SkyblockForgeCost", {
                    Short: vH.coalShort
                  }),
                  children: [(0, Er.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Er.jsx)(Sr.e, {
                      itemName: KL.e,
                      amount: 0
                    })
                  }), vH.coalCost]
                })]
              })]
            }), (0, Er.jsxs)("div", {
              className: Br()("SkyblockForgeDetails", {
                Named: null === vH || void 0 === vH ? void 0 : vH.named
              }),
              children: [(0, Er.jsx)("p", {
                className: Br()("SkyblockForgeLore", {
                  ArriveText: TH
                }),
                title: null === vH || void 0 === vH ? void 0 : vH.lore,
                children: null === vH || void 0 === vH ? void 0 : vH.lore
              }), (0, Er.jsxs)("dl", {
                className: Br()("SkyblockForgeStats", {
                  ArriveText: TH
                }),
                children: [null === vH && KS.map((HH => (0, Er.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Er.jsx)("dt", {
                    children: zH(HH)
                  }), (0, Er.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, HH))), null === vH || void 0 === vH ? void 0 : vH.stats.map((HH => (0, Er.jsxs)("div", {
                  className: Br()("SkyblockForgeStat", {
                    Better: HH.better
                  }),
                  children: [(0, Er.jsx)("dt", {
                    children: HH.label
                  }), (0, Er.jsx)("dd", {
                    children: HH.value
                  })]
                }, HH.label)))]
              }), (0, Er.jsx)("ul", {
                className: Br()("SkyblockForgeEffects", {
                  ArriveText: TH
                }),
                children: null === vH || void 0 === vH ? void 0 : vH.effects.map((HH => (0, Er.jsx)("li", {
                  children: HH
                }, HH)))
              })]
            })]
          })]
        })
      })
    }
    const NS = "Doom Rivet",
      RS = "Doom Crest";

    function jS(HH) {
      let {
        itemName: BH,
        amount: LH,
        owned: AH
      } = HH;
      return (0, Er.jsxs)("span", {
        className: Br()("SkyblockSmugglerPrice", {
          Short: LH > AH
        }),
        children: [(0, Er.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Er.jsx)(Sr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, Er.jsx)("span", {
          children: LH
        })]
      })
    }

    function nS(HH) {
      return HH.justBought ? "skyblockGame:smugglerJustBought" : HH.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function FS(HH) {
      let {
        deal: BH,
        view: LH,
        buy: AH
      } = HH;
      const {
        t: rH
      } = (0, zr.B)();
      return (0, Er.jsxs)("div", {
        className: Br()("SkyblockSmugglerPocket", {
          Bought: BH.justBought,
          Unaffordable: !BH.affordable,
          SoldOut: BH.soldOut && !BH.justBought
        }),
        children: [(0, Er.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Er.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Er.jsx)(Sr.e, {
            itemName: BH.itemName,
            amount: 0,
            enchantmentTier: BH.enchantmentTier
          }), BH.amount > 1 && (0, Er.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: rH("skyblockGame:smugglerAmount", {
              amount: BH.amount
            })
          })]
        }), (0, Er.jsx)("h3", {
          children: BH.displayName
        }), (0, Er.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [BH.rivets > 0 && (0, Er.jsx)(jS, {
              itemName: NS,
              amount: BH.rivets,
              owned: LH.rivetsOwned
            }), BH.crests > 0 && (0, Er.jsx)(jS, {
              itemName: RS,
              amount: BH.crests,
              owned: LH.crestsOwned
            })]
          }), (0, Er.jsx)(vr.i, {
            className: "SkyblockSmugglerBuy",
            disabled: BH.soldOut || !BH.affordable || LH.pending,
            onClick: () => {
              AH(BH.slot)
            },
            children: rH(nS(BH))
          })]
        })]
      }, BH.justBought ? LH.boughtCount : 0)
    }

    function DS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(pL, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Er.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Er.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: AH("skyblockGame:smugglerTitle")
              }), (0, Er.jsx)("p", {
                children: AH("skyblockGame:smugglerIntro")
              })]
            }), (0, Er.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Er.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Er.jsx)(jS, {
                  itemName: NS,
                  amount: LH.rivetsOwned,
                  owned: LH.rivetsOwned
                }), (0, Er.jsx)(jS, {
                  itemName: RS,
                  amount: LH.crestsOwned,
                  owned: LH.crestsOwned
                })]
              }), (0, Er.jsx)(vr.q, {
                onClick: BH.dismiss
              })]
            })]
          }), (0, Er.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: LH.deals.map((HH => (0, Er.jsx)(FS, {
              deal: HH,
              view: LH,
              buy: BH.buy
            }, HH.slot)))
          }), (0, Er.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Er.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: LH.rotatesText
            }), null !== LH.status && (0, Er.jsx)("span", {
              className: Br()("SkyblockSmugglerStatus", LH.status.tone),
              children: LH.status.text
            })]
          })]
        })
      }) : null
    }

    function wS(HH) {
      let {
        phase: BH,
        className: LH
      } = HH;
      return (0, Er.jsx)("span", {
        className: Br()("SkyblockMoon", `Moon-${BH}`, LH),
        "aria-hidden": "true"
      })
    }

    function ZS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(BA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)();
      return LH.enabled ? (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Br()("SkyblockPassageChip", LH.open && "Open"),
          "aria-label": AH("skyblockGame:passageChipLabel", {
            phase: LH.phaseName
          }),
          title: AH("skyblockGame:passageChipLabel", {
            phase: LH.phaseName
          }),
          onMouseDown: HH => {
            HH.preventDefault()
          },
          onClick: BH.toggle,
          children: (0, Er.jsx)(wS, {
            phase: LH.phase
          }, LH.phase)
        })
      }) : null
    }

    function dS(HH) {
      let {
        fish: BH
      } = HH;
      return (0, Er.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Er.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Er.jsx)(Sr.e, {
            itemName: BH.itemName,
            amount: 0
          })
        }), (0, Er.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: BH.displayName
          }), (0, Er.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: BH.where
          })]
        })]
      })
    }

    function aS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(BA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Er.jsx)(wS, {
              phase: LH.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: AH("skyblockGame:passageTitle")
              }), (0, Er.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: LH.phaseName
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: BH.dismiss
            })]
          }), (0, Er.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: AH("skyblockGame:passageIntro")
          }), (0, Er.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Er.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Er.jsx)("h3", {
                children: AH("skyblockGame:passageVisiting")
              }), (0, Er.jsx)("ul", {
                className: "SkyblockPassageList",
                children: LH.visitors.map((HH => (0, Er.jsx)(dS, {
                  fish: HH
                }, HH.itemName)))
              })]
            }), (0, Er.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== LH.resting && (0, Er.jsxs)(Er.Fragment, {
                children: [(0, Er.jsx)("h3", {
                  children: AH("skyblockGame:passageResting")
                }), (0, Er.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Er.jsx)(dS, {
                    fish: LH.resting
                  })
                })]
              }), (0, Er.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Er.jsx)(wS, {
                  phase: LH.nextPhase
                }), (0, Er.jsx)("span", {
                  children: LH.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function sS() {
      return (0, Er.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((HH => (0, Er.jsx)("i", {
          style: {
            "--sparkle-index": HH
          }
        }, HH)))
      })
    }

    function JS(HH) {
      var BH;
      let {
        charm: LH,
        view: AH,
        controller: rH
      } = HH;
      const {
        t: SH
      } = (0, zr.B)(), hH = AH.shop, tH = (null === (BH = AH.sparkle) || void 0 === BH ? void 0 : BH.id) === LH.id;
      return (0, Er.jsxs)("li", {
        className: Br()("SkyblockLampLightCharm", LH.owned && "Owned", LH.socketed && "Socketed"),
        children: [tH && (0, Er.jsx)(sS, {}, AH.sparkle.count), (0, Er.jsx)("h4", {
          children: LH.name
        }), (0, Er.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: LH.effect
        }), (0, Er.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: LH.lines.map((HH => (0, Er.jsxs)("li", {
            className: Br()("SkyblockLampLightOddsLine", "better" === HH.tone ? "Better" : "worse" === HH.tone ? "Worse" : "Same"),
            children: [(0, Er.jsx)("span", {
              className: "Before",
              children: HH.before
            }), (0, Er.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Er.jsx)("span", {
              className: "After",
              children: HH.after
            })]
          }, HH.label)))
        }), (0, Er.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: LH.owned ? LH.socketed ? (0, Er.jsxs)(Er.Fragment, {
            children: [(0, Er.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: SH("skyblockGame:lampLightSocketed")
            }), (0, Er.jsx)(vr.W, {
              disabled: !AH.canCommand,
              ariaLabel: SH("skyblockGame:lampLightRemoveLabel", {
                charm: LH.name
              }),
              onClick: () => {
                rH.socket(null)
              },
              children: SH("skyblockGame:lampLightRemove")
            })]
          }) : (0, Er.jsx)(vr.i, {
            disabled: !AH.canCommand || !hH.heldRod,
            ariaLabel: SH("skyblockGame:lampLightSocketLabel", {
              charm: LH.name
            }),
            onClick: () => {
              rH.socket(LH.id)
            },
            children: SH("skyblockGame:lampLightSocket")
          }) : (0, Er.jsx)(vr.i, {
            disabled: !AH.canCommand || !LH.affordable,
            ariaLabel: SH("skyblockGame:lampLightBuyLabel", {
              item: LH.name,
              cost: LH.cost
            }),
            onClick: () => {
              rH.buy(LH.id)
            },
            children: LH.cost
          })
        })]
      })
    }

    function iS(HH) {
      var BH;
      let {
        tint: LH,
        view: AH,
        controller: rH
      } = HH;
      const {
        t: SH
      } = (0, zr.B)();
      return (0, Er.jsxs)("li", {
        className: Br()("SkyblockLampLightTint", LH.wearing && "Wearing"),
        style: {
          "--tint-colour": LH.colour
        },
        children: [(null === (BH = AH.sparkle) || void 0 === BH ? void 0 : BH.id) === LH.id && (0, Er.jsx)(sS, {}, AH.sparkle.count), (0, Er.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Er.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: LH.name
        }), LH.wearing ? (0, Er.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: SH("skyblockGame:lampLightWearing")
        }) : (0, Er.jsx)(vr.i, {
          disabled: !AH.canCommand || !LH.owned && !LH.affordable,
          ariaLabel: LH.owned ? SH("skyblockGame:lampLightWearLabel", {
            tint: LH.name
          }) : SH("skyblockGame:lampLightBuyLabel", {
            item: LH.name,
            cost: LH.cost
          }),
          onClick: () => {
            LH.owned ? rH.wearTint(LH.id) : rH.buy(LH.id)
          },
          children: LH.owned ? SH("skyblockGame:lampLightWear") : LH.cost
        })]
      })
    }

    function pS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(QA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = LH.shop;
      return (0, Er.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Er.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: LH.balance
          }), (0, Er.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": LH.releasing,
            className: Br()("SkyblockLampLightSwitch", LH.releasing && "On"),
            disabled: LH.releasing ? "ready" !== LH.status : !LH.canCommand,
            onClick: () => {
              BH.setRelease(!LH.releasing)
            },
            children: [(0, Er.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Er.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), AH("skyblockGame:lampLightRelease")]
          }), (0, Er.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: AH("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== LH.notice && (0, Er.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: LH.notice
        }), null !== rH && (0, Er.jsxs)(Er.Fragment, {
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Er.jsx)("h3", {
              children: AH("skyblockGame:lampLightCharms")
            }), (0, Er.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: rH.oddsFor
            }), (0, Er.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((HH => (0, Er.jsx)("button", {
                type: "button",
                "aria-pressed": LH.situation === HH,
                className: Br()("SkyblockLampLightSituation", LH.situation === HH && "Selected"),
                onClick: () => {
                  BH.setSituation(HH)
                },
                children: AH("open" === HH ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, HH)))
            })]
          }), !rH.heldRod && (0, Er.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: AH("skyblockGame:lampLightHoldRod")
          }), (0, Er.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: rH.charms.map((HH => (0, Er.jsx)(JS, {
              charm: HH,
              view: LH,
              controller: BH
            }, HH.id)))
          }), (0, Er.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Er.jsx)("h3", {
              children: AH("skyblockGame:lampLightTints")
            })
          }), (0, Er.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Er.jsxs)("li", {
              className: Br()("SkyblockLampLightTint", "Islands", rH.wearingIslandColours && "Wearing"),
              children: [(0, Er.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Er.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: AH("skyblockGame:lampLightIslandColours")
              }), rH.wearingIslandColours ? (0, Er.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: AH("skyblockGame:lampLightWearing")
              }) : (0, Er.jsx)(vr.i, {
                disabled: !LH.canCommand,
                ariaLabel: AH("skyblockGame:lampLightWearLabel", {
                  tint: AH("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  BH.wearTint(null)
                },
                children: AH("skyblockGame:lampLightWear")
              })]
            }), rH.tints.map((HH => (0, Er.jsx)(iS, {
              tint: HH,
              view: LH,
              controller: BH
            }, HH.id)))]
          })]
        })]
      })
    }

    function yS(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(QA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)();
      return LH.releasing ? (0, Er.jsx)(Ar.e, {
        children: (0, Er.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            BH.setRelease(!1)
          },
          children: [(0, Er.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Er.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [AH("skyblockGame:lampLightReleasing"), " \xb7 ", LH.balance]
          }), (0, Er.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: AH("skyblockGame:lampLightKeepCatches")
          }), null !== LH.gained && (0, Er.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: LH.gained.text
          }, LH.gained.count)]
        })
      }) : null
    }

    function Hh(HH) {
      let {
        island: BH,
        view: LH,
        aim: AH
      } = HH;
      const {
        t: rH
      } = (0, zr.B)(), SH = BH.featuredFish;
      return (0, Er.jsxs)("li", {
        className: Br()("SkyblockKeepersChairIsland", `Island-${BH.id}`, BH.favoured && "Aimed", !BH.relit && "Dark"),
        children: [(0, Er.jsx)("h3", {
          children: BH.name
        }), BH.relit && null !== SH ? (0, Er.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: rH("skyblockGame:keepersChairTideNotice")
          }), (0, Er.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Er.jsx)(Sr.e, {
              itemName: SH.itemName,
              amount: 0
            })
          }), (0, Er.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: SH.displayName
          })]
        }) : (0, Er.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Er.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: rH("skyblockGame:keepersChairDark")
          })
        }), BH.relit && (BH.favoured ? (0, Er.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: rH("skyblockGame:keepersChairAimed")
        }) : (0, Er.jsx)(vr.i, {
          className: "SkyblockKeepersChairAim",
          disabled: !LH.canAim,
          ariaLabel: rH("skyblockGame:keepersChairAimLabel", {
            island: BH.name
          }),
          onClick: () => {
            AH(BH.id)
          },
          children: rH("skyblockGame:keepersChairAim")
        }))]
      }, BH.favoured ? LH.aimedCount : 0)
    }

    function Bh(HH) {
      let {
        controller: BH,
        lampLight: LH
      } = HH;
      const AH = (0, Cr.e)(tA, BH.getSnapshot()),
        rH = (0, Cr.e)(QA, LH.getSnapshot()),
        [SH, hH] = (0, VH.useState)("lamp"),
        {
          t: tH
        } = (0, zr.B)(),
        zH = Tr();
      if (!AH.enabled) return null;
      const CH = "light" === SH && rH.enabled;
      return (0, Er.jsx)(xr.b, {
        show: AH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: Br()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", CH && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: zH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: tH("skyblockGame:keepersChairTitle")
              }), (0, Er.jsx)("p", {
                children: tH(CH ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              ariaLabel: tH("skyblockGame:keepersChairClose"),
              onClick: BH.dismiss
            })]
          }), rH.enabled && (0, Er.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((HH => (0, Er.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === HH === CH,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === HH === CH ? "true" : void 0,
              className: Br()("SkyblockKeepersChairTab", "light" === HH === CH && "Selected"),
              onClick: () => {
                hH(HH)
              },
              children: [tH("lamp" === HH ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === HH && (0, Er.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: rH.balance
              })]
            }, HH)))
          }), CH ? (0, Er.jsx)(pS, {
            controller: LH
          }) : (0, Er.jsx)(Lh, {
            view: AH,
            controller: BH
          })]
        })
      })
    }

    function Lh(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)();
      return (0, Er.jsxs)(Er.Fragment, {
        children: [(0, Er.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: BH.islands.map((HH => (0, Er.jsx)(Hh, {
            island: HH,
            view: BH,
            aim: LH.aim
          }, HH.id)))
        }), null !== BH.almanac && (0, Er.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: AH("skyblockGame:passageTitle")
          }), (0, Er.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Er.jsx)(wS, {
              phase: BH.almanac.phase
            }), BH.almanac.phaseName]
          }), (0, Er.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Er.jsx)(wS, {
              phase: BH.almanac.nextPhase
            }), BH.almanac.next]
          })]
        }), (0, Er.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: AH("skyblockGame:keepersChairFavour")
          }), BH.aimed && (0, Er.jsx)(vr.W, {
            className: "SkyblockKeepersChairRest",
            disabled: !BH.canAim,
            onClick: () => {
              LH.aim(null)
            },
            children: AH("skyblockGame:keepersChairRest")
          })]
        }), null !== BH.status && (0, Er.jsx)("p", {
          className: Br()("SkyblockKeepersChairStatus", "refused" === BH.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: BH.status.text
        })]
      })
    }

    function Ah(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(CA, BH.getSnapshot());
      if (!AH.enabled) return null;
      const rH = AH.freshCount > 0 ? LH("skyblockGame:reachLogOpenNews", {
        count: AH.freshCount
      }) : LH("skyblockGame:reachLogOpen");
      return (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsxs)("button", {
          type: "button",
          className: Br()("SkyblockReachLogButton", AH.freshCount > 0 && "HasNews", AH.pending && "Pending"),
          "aria-label": rH,
          title: rH,
          onClick: BH.ask,
          children: [AH.news && (0, Er.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${AH.newsToken}`), (0, Er.jsx)("span", {
            className: Br()("SkyblockReachLogIcon", AH.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Er.jsx)(Sr.e, {
              itemName: XA,
              amount: 0
            })
          }, `icon:${AH.newsToken}`), AH.freshCount > 0 && (0, Er.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: AH.freshCount
          })]
        })
      })
    }

    function rh(HH) {
      let {
        gift: BH
      } = HH;
      return (0, Er.jsx)("li", {
        className: Br()("SkyblockRegularsGift", BH.given && "Given"),
        children: BH.text
      })
    }

    function Sh(HH) {
      let {
        regular: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)();
      return (0, Er.jsxs)("li", {
        className: Br()("SkyblockRegularsCard", BH.tagged ? "Tagged" : "Untagged", BH.resting && "Resting"),
        children: [(0, Er.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: BH.fishName,
            children: (0, Er.jsx)(Sr.e, {
              itemName: BH.itemName,
              amount: 0
            })
          }), (0, Er.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Er.jsx)("h3", {
              children: BH.name
            }), (0, Er.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: BH.fishName
            })]
          })]
        }), (0, Er.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: BH.line
        }), (0, Er.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: BH.size
          }), BH.tagged && (0, Er.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: BH.resting ? LH("skyblockGame:regularsResting") : BH.meetings
          })]
        }), (0, Er.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: BH.chance
        }), (0, Er.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: BH.gifts.map((HH => (0, Er.jsx)(rh, {
            gift: HH
          }, HH.text)))
        }), BH.history.length > 0 && (0, Er.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: BH.history.map(((HH, BH) => (0, Er.jsx)("li", {
            children: HH
          }, BH)))
        })]
      })
    }

    function hh(HH) {
      let {
        controller: BH,
        island: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)(), rH = (0, Cr.e)(cA, BH.getSnapshot()), SH = rH.islands.find((HH => HH.id === LH));
      if (!rH.enabled || void 0 === SH) return null;
      const hH = AH("skyblockGame:regularsOpen");
      return (0, Er.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": hH,
        title: hH,
        onClick: () => {
          BH.openIsland(LH)
        },
        children: [(0, Er.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: AH("skyblockGame:regularsTitle")
        }), SH.regulars.map((HH => (0, Er.jsx)("span", {
          className: Br()("SkyblockRegularsStripIcon", HH.tagged && "Tagged"),
          title: HH.name,
          children: (0, Er.jsx)(Sr.e, {
            itemName: HH.itemName,
            amount: 0
          })
        }, HH.id)))]
      })
    }

    function th(HH) {
      var BH;
      let {
        controller: LH
      } = HH;
      const AH = (0, Cr.e)(cA, LH.getSnapshot()),
        {
          t: rH
        } = (0, zr.B)(),
        SH = Tr();
      if (!AH.enabled) return null;
      const hH = null !== (BH = AH.islands.find((HH => HH.id === AH.selected))) && void 0 !== BH ? BH : null;
      return (0, Er.jsx)(xr.b, {
        show: AH.open,
        close: LH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: SH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: rH("skyblockGame:regularsTitle")
              }), (0, Er.jsx)("p", {
                children: rH("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: LH.dismiss
            })]
          }), (0, Er.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: AH.islands.map((HH => {
              const BH = HH.id === AH.selected;
              return (0, Er.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": BH,
                "data-pad-tab": !0,
                "data-pad-selected": BH ? "true" : void 0,
                className: Br()("SkyblockReachLogTab", `Island-${HH.id}`, BH && "Selected", HH.charm.given && "GoldPage"),
                onClick: () => {
                  LH.selectIsland(HH.id)
                },
                children: (0, Er.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: HH.name
                })
              }, HH.id)
            }))
          }), (0, Er.jsxs)("div", {
            className: Br()("SkyblockRegularsPage", null !== hH && `Island-${hH.id}`),
            role: "tabpanel",
            children: [(0, Er.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: rH("skyblockGame:regularsHow")
            }), null !== hH && (0, Er.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: hH.regulars.map((HH => (0, Er.jsx)(Sh, {
                regular: HH
              }, HH.id)))
            })]
          }), null !== hH && (0, Er.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Er.jsx)("span", {
              className: Br()("SkyblockRegularsCharm", hH.charm.given && "Given"),
              children: hH.charm.text
            })
          })]
        })
      })
    }
    const zh = [{
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
      Ch = Array.from({
        length: 6
      }, ((HH, BH) => ({
        "--x": `${(88*(.618034*BH%1)).toFixed(1)}%`,
        "--y": `${(10+37*BH%70).toFixed(1)}%`,
        "--size": 7 + BH % 3 * 3 + "rem",
        "--drift-x": 3 * (BH % 3 - 1) + "rem",
        "--drift-y": 2 * (BH % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + BH % 4 * 3 + "s",
        "--delay": 2.5 * -BH + "s"
      }))),
      Eh = Array.from({
        length: 14
      }, ((HH, BH) => ({
        "--left": `${(3+94*((.618034*BH+.3)%1)).toFixed(1)}%`,
        "--size": 4 + BH % 4 * 2 + "px",
        "--sway": BH % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*BH%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*BH%12).toFixed(2)}s`
      }))),
      Xh = (0, VH.memo)((function(HH) {
        let {
          island: BH
        } = HH;
        return (0, Er.jsxs)("div", {
          className: Br()("SkyblockReachLogDepths", null !== BH && `Island-${BH}`),
          "aria-hidden": "true",
          children: [zh.map(((HH, BH) => (0, Er.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: HH
          }, `shaft${BH}`))), Ch.map(((HH, BH) => (0, Er.jsx)("span", {
            className: Br()("SkyblockReachLogMote", BH % 2 === 1 && "Violet"),
            style: HH
          }, `mote${BH}`))), Eh.map(((HH, BH) => (0, Er.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: HH
          }, `bubble${BH}`)))]
        })
      })),
      Gh = 100;

    function Yh(HH) {
      let {
        view: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)();
      if (null === BH || 0 === BH.total) return null;
      const AH = Gh * BH.aspect,
        rH = LH("skyblockGame:hiddenWatersCount", {
          found: BH.found,
          total: BH.total
        });
      return (0, Er.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${LH("skyblockGame:hiddenWatersTitle")}: ${rH}`,
        children: [(0, Er.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${AH}`,
          "aria-hidden": "true",
          children: [BH.islands.map(((HH, BH) => (0, Er.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (HH.left + HH.width / 2) * Gh,
            cy: (HH.top + HH.height / 2) * AH,
            rx: HH.width / 2 * Gh,
            ry: HH.height / 2 * AH
          }, BH))), BH.pins.map(((HH, BH) => (0, Er.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: HH.left * Gh,
            cy: HH.top * AH,
            r: 13
          }, BH)))]
        }), (0, Er.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Er.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: LH("skyblockGame:hiddenWatersTitle")
          }), (0, Er.jsx)("span", {
            className: BH.found === BH.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: rH
          })]
        })]
      })
    }

    function uh(HH) {
      let {
        view: BH,
        island: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)(), rH = null === BH || void 0 === BH ? void 0 : BH.glimpses.get(LH);
      return void 0 === rH || 0 === rH.length ? null : (0, Er.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Er.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: AH("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Er.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: rH.map((HH => (0, Er.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Er.jsx)(Sr.e, {
              itemName: HH,
              amount: 0
            })
          }, HH)))
        })]
      })
    }
    const Qh = ["Bronze", "Silver", "Gold"],
      Wh = [{
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
      Mh = Wh.slice(0, 2);

    function xh(HH) {
      return HH ? Wh : Mh
    }

    function vh(HH) {
      let {
        fish: BH,
        letGoShown: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)();
      return (0, Er.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Qh.map(((HH, LH) => {
          const rH = LH < BH.marks;
          return (0, Er.jsx)("span", {
            className: Br()("SkyblockReachLogPip", HH, rH && "Earned", rH && BH.fresh && LH === BH.marks - 1 && "Newest"),
            title: AH(EA[LH])
          }, HH)
        })), (0, Er.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), xh(LH).map(((HH, LH) => (0, Er.jsx)("span", {
          className: Br()("SkyblockReachLogRibbon", HH.className, !0 === BH.ribbons[LH] && "Earned"),
          title: AH(HH.titleKey)
        }, HH.className)))]
      })
    }

    function Ph(HH) {
      let {
        letGoShown: BH,
        haloShown: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)();
      return (0, Er.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Er.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: AH("skyblockGame:reachLogMarks"),
          children: [(0, Er.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), AH("skyblockGame:reachLogLegendMarks")]
        }), xh(BH).map((HH => (0, Er.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: AH(HH.titleKey),
          children: [(0, Er.jsx)("span", {
            className: Br()("SkyblockReachLogRibbon", HH.className, "Earned")
          }), AH(HH.legendKey)]
        }, HH.className))), (0, Er.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: AH("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Er.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), AH("skyblockGame:reachLogLegendGlimmer")]
        }), LH && (0, Er.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: AH("skyblockGame:reachLogHaloTitle"),
          children: [(0, Er.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), AH("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Th(HH) {
      let {
        returner: BH
      } = HH;
      return (0, Er.jsxs)("div", {
        className: Br()("SkyblockReachLogReturner", BH.back && "Back"),
        children: [(0, Er.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Er.jsx)(Sr.e, {
            itemName: BH.itemName,
            amount: 0
          })
        }), (0, Er.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: BH.line
        })]
      })
    }

    function Uh(HH) {
      let {
        fish: BH,
        letGoShown: LH
      } = HH;
      const {
        t: AH
      } = (0, zr.B)();
      return (0, Er.jsxs)("li", {
        className: Br()("SkyblockReachLogCard", BH.caught ? "Caught" : "Unknown", BH.marks >= 3 && "GoldCard", BH.fresh && "Fresh", BH.visitor && "Visitor"),
        children: [BH.visitor && (0, Er.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: AH("skyblockGame:reachLogVisitor")
        }), BH.fresh && Array.from({
          length: 4
        }, ((HH, BH) => (0, Er.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, BH))), (0, Er.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [BH.halo && (0, Er.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: AH("skyblockGame:reachLogHaloTitle")
          }), (0, Er.jsx)(Sr.e, {
            itemName: BH.itemName,
            amount: 0
          }), BH.glimmer && (0, Er.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: AH("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Er.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: BH.name
        }), (0, Er.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: BH.chance
        }), (0, Er.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: BH.best
        }), (0, Er.jsx)(vh, {
          fish: BH,
          letGoShown: LH
        })]
      })
    }

    function Vh(HH) {
      let {
        page: BH,
        letGoShown: LH,
        hiddenWaters: AH
      } = HH;
      const {
        t: rH
      } = (0, zr.B)();
      return BH.awake ? (0, Er.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: BH.fish.map((HH => (0, Er.jsx)(Uh, {
          fish: HH,
          letGoShown: LH
        }, HH.itemName)))
      }) : (0, Er.jsxs)(Er.Fragment, {
        children: [(0, Er.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: rH("skyblockGame:reachLogAsleep")
        }), (0, Er.jsx)(uh, {
          view: AH,
          island: BH.id
        })]
      })
    }

    function Oh(HH) {
      var BH, LH;
      let {
        controller: AH,
        regulars: rH,
        hiddenWaters: SH
      } = HH;
      const hH = (0, Cr.e)(CA, AH.getSnapshot()),
        tH = function(HH) {
          return (0, Cr.e)(RA, HH.getSnapshot())
        }(SH),
        zH = (0, Cr.e)(cA, rH.getSnapshot()),
        {
          t: CH
        } = (0, zr.B)(),
        EH = Tr();
      if (!hH.enabled) return null;
      const XH = null !== (BH = hH.pages.find((HH => HH.id === hH.selected))) && void 0 !== BH ? BH : null;
      return (0, Er.jsx)(xr.b, {
        show: hH.open,
        close: AH.dismiss,
        togglePointerLock: !1,
        className: Br()("SkyblockSkillsOverlay", zH.open && "SkyblockReachLogUnderLedger"),
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: EH,
          onKeyDown: Pr,
          children: [(0, Er.jsx)(Xh, {
            island: null !== (LH = null === XH || void 0 === XH ? void 0 : XH.id) && void 0 !== LH ? LH : null
          }), (0, Er.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: CH("skyblockGame:reachLogTitle")
              }), (0, Er.jsx)("p", {
                children: CH("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Er.jsx)(Yh, {
              view: tH
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: AH.dismiss
            })]
          }), (0, Er.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: hH.pages.map((HH => {
              const BH = HH.id === hH.selected,
                LH = HH.fish.some((HH => HH.fresh));
              return (0, Er.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": BH,
                "data-pad-tab": !0,
                "data-pad-selected": BH ? "true" : void 0,
                className: Br()("SkyblockReachLogTab", `Island-${HH.id}`, BH && "Selected", !HH.awake && "Asleep", HH.gold && "GoldPage", LH && "HasNews"),
                onClick: () => {
                  AH.selectPage(HH.id)
                },
                children: [(0, Er.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: HH.name
                }), HH.awake && (0, Er.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: CH("skyblockGame:reachLogCaughtCount", {
                    caught: HH.caught,
                    total: HH.total
                  })
                })]
              }, HH.id)
            }))
          }), (0, Er.jsxs)("div", {
            className: Br()("SkyblockReachLogPage", null !== XH && `Island-${XH.id}`),
            role: "tabpanel",
            children: [null !== XH && (0, Er.jsx)(Vh, {
              page: XH,
              letGoShown: hH.letGoShown,
              hiddenWaters: tH
            }), !0 === (null === XH || void 0 === XH ? void 0 : XH.awake) && null !== XH.returner && (0, Er.jsx)(Th, {
              returner: XH.returner
            }), !0 === (null === XH || void 0 === XH ? void 0 : XH.awake) && (0, Er.jsx)(hh, {
              controller: rH,
              island: XH.id
            })]
          }), (0, Er.jsx)("footer", {
            className: Br()("SkyblockReachLogFooter", null !== XH && `Island-${XH.id}`, !0 === (null === XH || void 0 === XH ? void 0 : XH.gold) && "GoldPage"),
            children: !0 === (null === XH || void 0 === XH ? void 0 : XH.gold) ? (0, Er.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: CH("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Er.jsxs)(Er.Fragment, {
              children: [(0, Er.jsx)(Ph, {
                letGoShown: hH.letGoShown,
                haloShown: !0 === (null === XH || void 0 === XH ? void 0 : XH.fish.some((HH => HH.halo)))
              }), (0, Er.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: CH("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var bh = LH(5308);

    function kh(HH) {
      let {
        conversation: BH,
        completedLabel: LH
      } = HH;
      return (0, Er.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Er.jsxs)("header", {
          children: [(0, Er.jsx)("h3", {
            children: BH.questName
          }), BH.completed && (0, Er.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: LH
          })]
        }), BH.lines.map((HH => (0, Er.jsx)(bh.e, {
          display: HH.display
        }, HH.key)))]
      })
    }

    function mh(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(nA, BH.getSnapshot()), rH = Tr();
      if (!AH.enabled) return null;
      const SH = !AH.loading && 0 === AH.conversations.length;
      return (0, Er.jsx)(xr.b, {
        show: AH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: LH("skyblockDialogue:title")
              }), (0, Er.jsx)("p", {
                children: LH("skyblockDialogue:intro")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: BH.dismiss
            })]
          }), (0, Er.jsxs)("div", {
            className: Br()("SkyblockDialogueBody", {
              SingleColumn: null !== AH.questFocus || 0 === AH.characters.length
            }),
            children: [null === AH.questFocus && AH.characters.length > 0 && (0, Er.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: AH.characters.map((HH => (0, Er.jsx)(vr.i, {
                className: Br()("SkyblockDialogueCharacter", {
                  Selected: HH.selected
                }),
                onClick: () => {
                  BH.selectCharacter(HH.id)
                },
                children: (0, Er.jsx)(hr.b, {
                  text: HH.styling
                })
              }, HH.id)))
            }), (0, Er.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== AH.questFocus && (0, Er.jsx)(vr.i, {
                className: "SkyblockDialogueBack",
                onClick: BH.showCharacters,
                children: LH("skyblockDialogue:allCharacters")
              }), AH.loading && (0, Er.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: LH("skyblockDialogue:loading")
              }), SH && (0, Er.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: LH(null === AH.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), AH.conversations.map((HH => (0, Er.jsx)(kh, {
                conversation: HH,
                completedLabel: AH.completedLabel
              }, HH.questId)))]
            })]
          })]
        })
      })
    }

    function oh(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(dA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr();
      return LH.enabled ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: AH("skyblockGame:autographBook")
              }), (0, Er.jsx)("p", {
                children: AH("skyblockGame:autographBookIntro")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              onClick: BH.dismiss
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Er.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Er.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Er.jsx)("strong", {
                  children: LH.total
                }), (0, Er.jsx)("span", {
                  children: AH("skyblockGame:autographTotal")
                })]
              }), (0, Er.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Er.jsx)("strong", {
                  children: LH.rankTotal
                }), (0, Er.jsx)("span", {
                  children: AH("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === LH.entries.length ? (0, Er.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: AH("skyblockGame:autographBookEmpty")
            }) : (0, Er.jsx)("ul", {
              className: "SkyblockAutographList",
              children: LH.entries.map((HH => (0, Er.jsxs)("li", {
                className: Br()("SkyblockAutograph", {
                  Ranked: null !== HH.rank
                }),
                style: null === HH.rank ? void 0 : {
                  color: HH.rank.colour
                },
                children: [null !== HH.rank && (0, Er.jsx)(dr.c, {
                  className: "SkyblockAutographRankIcon",
                  name: HH.rank.icon,
                  kit: (0, dr.f)(HH.rank.icon)
                }), (0, Er.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Er.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: HH.name
                  }), (0, Er.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== HH.rank && (0, Er.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: HH.rank.label
                    }), (0, Er.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: HH.signedOn
                    })]
                  })]
                })]
              }, HH.key)))
            })]
          })]
        })
      }) : null
    }
    const Ih = (0, VH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        return (0, Er.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: BH.display.mountWaypoint,
          children: [(0, Er.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Er.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Er.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Er.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Er.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Er.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      fh = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function lh(HH) {
      return "next" === HH.phase ? "\u2192" : fh[HH.kind]
    }
    const Kh = (0, VH.memo)((function(HH) {
      let {
        controller: BH,
        display: LH
      } = HH;
      const AH = (0, Cr.e)(wB, BH.getNotificationSnapshot()),
        [rH, SH] = (0, VH.useState)(!1);
      return (0, Cr.d)("qteStateUpdated", (HH => {
        SH(HH.isActive)
      })), (0, Er.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (rH ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [AH && (0, Er.jsxs)("div", {
          className: `SkyblockQuestNotification ${AH.kind} ${AH.phase}`,
          style: {
            "--quest-notification-duration": `${AH.durationMs}ms`,
            ...AH.accent && {
              "--quest-notification-accent": AH.accent
            }
          },
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (AH.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Er.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: lh(AH)
            }), AH.iconItem && (0, Er.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Er.jsx)(Sr.e, {
                itemName: AH.iconItem,
                amount: 0
              })
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Er.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: AH.title
            }), (0, Er.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Er.jsx)(Rr.b, {
                text: AH.name
              })
            }), AH.description && (0, Er.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Er.jsx)(Rr.b, {
                text: AH.description
              })
            }), AH.reward && (0, Er.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Er.jsx)(Rr.b, {
                text: AH.reward
              })
            })]
          })]
        }, AH.token), (null === AH || void 0 === AH ? void 0 : AH.waypointNameKey) && (0, Er.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": AH.waypointNameKey,
          "data-notification-token": AH.token,
          ref: LH.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${AH.token}`)]
      })
    }));

    function ch(HH) {
      const BH = parseInt(HH.replace("#", ""), 16);
      return `${BH>>16&255}, ${BH>>8&255}, ${255&BH}`
    }
    const eh = (0, VH.memo)((function(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(ML, BH.getSnapshot());
      if (!AH) return null;
      const rH = "arrival" === AH.phase;
      return (0, Er.jsxs)("div", {
        className: Br()("SkyblockPortalTransit", {
          Departure: !rH,
          Arrival: rH
        }),
        style: {
          "--portal-rgb": ch(AH.colour),
          "--portal-duration": `${AH.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Er.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Er.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            BH.finishArrival(AH.token)
          }
        }), (0, Er.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Er.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !rH && (0, Er.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: LH("skyblockGame:portalTransitHeading")
          }), (0, Er.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: LH(AH.zoneNameKey)
          })]
        })]
      }, AH.token)
    }));

    function qh() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function gh() {
      const HH = document.querySelector(".SkyblockHudCoins"),
        BH = null === HH || void 0 === HH ? void 0 : HH.getBoundingClientRect();
      return BH && BH.width > 0 ? {
        x: BH.left + Math.min(BH.width, 24) / 2,
        y: BH.top + BH.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Nh(HH) {
      return {
        x: HH.left + HH.width / 2,
        y: HH.top + HH.height / 2
      }
    }

    function Rh() {
      var HH;
      const BH = null === (HH = document.querySelector(".HotBar")) || void 0 === HH ? void 0 : HH.getBoundingClientRect();
      return BH && BH.width > 0 ? Nh(BH) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function jh(HH) {
      let {
        items: BH,
        origins: LH,
        target: AH
      } = HH;
      return (0, Er.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: BH.map(((HH, BH) => {
          const rH = LH[BH];
          return (0, Er.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${rH.x}px`,
              top: `${rH.y}px`,
              "--item-dx": AH.x - rH.x + "px",
              "--item-dy": AH.y - rH.y + "px",
              "--item-delay": 2e3 + 160 * BH + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Er.jsx)(Sr.e, {
              itemName: HH.dailyRewardItemName,
              amount: 0
            })
          }, HH.dailyRewardItemName)
        }))
      })
    }

    function nh(HH, BH) {
      const LH = -Math.PI / 2 + 1.25 * (HH / (BH - 1) * 2 - 1),
        AH = 70 + HH % 3 * 22;
      return {
        x: Math.cos(LH) * AH,
        y: Math.sin(LH) * AH * .7
      }
    }

    function Fh(HH) {
      let {
        origin: BH,
        target: LH,
        count: AH
      } = HH;
      const rH = [];
      for (let SH = 0; SH < AH; SH++) {
        const HH = nh(SH, AH);
        rH.push((0, Er.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${BH.x}px`,
            top: `${BH.y}px`,
            "--coin-bx": `${HH.x}px`,
            "--coin-by": `${HH.y}px`,
            "--coin-dx": LH.x - BH.x + "px",
            "--coin-dy": LH.y - BH.y + "px",
            "--coin-delay": `${VL(SH,AH)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Er.jsx)(Sr.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, SH))
      }
      return (0, Er.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: rH
      })
    }

    function Dh(HH) {
      let {
        day: BH
      } = HH;
      const LH = OH[BH - 1];
      return (0, Er.jsxs)(Er.Fragment, {
        children: [(0, Er.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Er.jsx)(Sr.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, tr.f)(LH.dailyRewardCoins)]
        }), LH.dailyRewardItems.map((HH => (0, Er.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Er.jsx)(Sr.e, {
            itemName: HH.dailyRewardItemName,
            amount: 0
          }), "\xd7", HH.dailyRewardItemAmount]
        }, HH.dailyRewardItemName)))]
      })
    }

    function wh(HH) {
      let {
        day: BH
      } = HH;
      const LH = kH(BH);
      return (0, Er.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: OH.map(((HH, AH) => {
          const rH = AH + 1;
          return (0, Er.jsxs)("li", {
            className: Br()("SkyblockDailyRewardTile", {
              Claimed: rH < BH && rH !== LH,
              Today: rH === BH,
              Tomorrow: rH === LH,
              Jackpot: rH === bH
            }),
            children: [(0, Er.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: rH
            }), (0, Er.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Er.jsx)(Sr.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, tr.f)(HH.dailyRewardCoins)]
            }), HH.dailyRewardItems.map((HH => (0, Er.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Er.jsx)(Sr.e, {
                itemName: HH.dailyRewardItemName,
                amount: 0
              }), "\xd7", HH.dailyRewardItemAmount]
            }, HH.dailyRewardItemName)))]
          }, rH)
        }))
      })
    }

    function Zh(HH) {
      let {
        view: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, VH.useRef)(null), rH = (0, VH.useRef)(null), [SH, hH] = (0, VH.useState)(null);
      (0, VH.useLayoutEffect)((() => {
        var HH;
        const BH = null === (HH = AH.current) || void 0 === HH ? void 0 : HH.getBoundingClientRect();
        if (BH) {
          var LH, SH;
          const HH = Array.from(null !== (LH = null === (SH = rH.current) || void 0 === SH ? void 0 : SH.children) && void 0 !== LH ? LH : [], (HH => Nh(HH.getBoundingClientRect())));
          hH({
            origin: Nh(BH),
            target: gh(),
            itemOrigins: HH,
            itemTarget: Rh()
          })
        }
      }), []);
      const tH = kH(BH.day),
        zH = function(HH, BH) {
          const [LH, AH] = (0, VH.useState)((() => qh() ? HH : 0));
          return (0, VH.useEffect)((() => {
            if (qh()) return;
            const LH = performance.now();
            let rH = 0;
            const SH = hH => {
              const tH = Math.min(Math.max((hH - LH) / BH, 0), 1);
              AH(Math.round(HH * (1 - (1 - tH) ** 3))), tH < 1 && (rH = requestAnimationFrame(SH))
            };
            return rH = requestAnimationFrame(SH), () => {
              cancelAnimationFrame(rH)
            }
          }), [HH, BH]), LH
        }(BH.coins, 450);
      return (0, Er.jsxs)("div", {
        className: Br()("SkyblockDailyReward", {
          Jackpot: BH.day === bH
        }),
        style: {
          "--daily-duration": `${BH.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Er.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Er.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Er.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: LH("skyblockGame:dailyRewardTitle")
            }), (0, Er.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: LH("skyblockGame:dailyRewardDay", {
                day: String(BH.day)
              })
            })]
          }), (0, Er.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: AH,
            children: [(0, Er.jsx)(Sr.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Er.jsxs)("span", {
              children: ["+", (0, tr.f)(zH)]
            })]
          }), BH.items.length > 0 && (0, Er.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: rH,
            children: BH.items.map((HH => (0, Er.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Er.jsx)(Sr.e, {
                itemName: HH.dailyRewardItemName,
                amount: 0
              }), "\xd7", HH.dailyRewardItemAmount]
            }, HH.dailyRewardItemName)))
          }), (0, Er.jsx)(wh, {
            day: BH.day
          }), (0, Er.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [LH("skyblockGame:dailyRewardComeBack"), (0, Er.jsx)(Dh, {
              day: tH
            })]
          })]
        }), null !== SH && (0, Er.jsx)(Fh, {
          origin: SH.origin,
          target: SH.target,
          count: BH.flyingCoins
        }), null !== SH && SH.itemOrigins.length === BH.items.length && (0, Er.jsx)(jh, {
          items: BH.items,
          origins: SH.itemOrigins,
          target: SH.itemTarget
        })]
      })
    }
    const dh = (0, VH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        const LH = (0, Cr.e)(PL, BH.getSnapshot());
        return LH ? (0, Er.jsx)(Zh, {
          view: LH
        }, LH.token) : null
      })),
      ah = "Gold Coin";

    function sh(HH) {
      return 650 + 220 * HH
    }

    function Jh(HH) {
      return {
        "--letter-delay": `${sh(HH)}ms`,
        "--letter-land": `${sh(HH)+300}ms`
      }
    }

    function ih(HH) {
      let {
        letterCount: BH
      } = HH;
      return (0, Er.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Er.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Er.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Er.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: BH
        }, ((HH, BH) => (0, Er.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Jh(BH),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, BH)))]
      })
    }

    function ph(HH) {
      var BH, LH, AH;
      let {
        letter: rH,
        index: SH
      } = HH;
      const {
        t: hH
      } = (0, zr.B)(), tH = null !== (BH = null === (LH = rH.items[0]) || void 0 === LH ? void 0 : LH.itemName) && void 0 !== BH ? BH : ah;
      return (0, Er.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Jh(SH),
        children: [(0, Er.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Er.jsx)(Sr.e, {
            itemName: tH,
            amount: 0
          })
        }), (0, Er.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: hH(rH.reasonKey, null !== (AH = rH.reasonParams) && void 0 !== AH ? AH : void 0)
        }), (0, Er.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [rH.coins > 0 && (0, Er.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Er.jsx)(Sr.e, {
              itemName: ah,
              amount: 0
            }), "+", (0, tr.f)(rH.coins)]
          }), rH.items.map(((HH, BH) => (0, Er.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Er.jsx)(Sr.e, {
              itemName: HH.itemName,
              amount: 0
            }), HH.label, " \xd7", HH.amount]
          }, BH)))]
        })]
      })
    }

    function yh(HH) {
      let {
        view: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)();
      return (0, Er.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${BH.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${sh(BH.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Er.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Er.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Er.jsx)(ih, {
              letterCount: BH.letters.length
            }), (0, Er.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: LH("skyblockGame:mailboxTitle")
            })]
          }), (0, Er.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: BH.letters.map(((HH, BH) => (0, Er.jsx)(ph, {
              letter: HH,
              index: BH
            }, BH)))
          }), BH.more > 0 && (0, Er.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: LH("skyblockGame:mailboxMore", {
              count: String(BH.more)
            })
          })]
        })
      })
    }
    const Ht = (0, VH.memo)((function(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(bL, BH.getSnapshot());
      return LH ? (0, Er.jsx)(yh, {
        view: LH
      }, LH.token) : null
    }));

    function Bt(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(MA, BH.getSnapshot());
      if (null === AH) return null;
      const rH = AH.fullSet ? "empty" === AH.fuelState ? {
        text: LH("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: LH("skyblockGame:magmawardHudFullSet", {
          worn: String(AH.wornCount)
        }),
        tone: "partial"
      };
      return (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsxs)("div", {
          className: Br()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${AH.fuelState}`, {
            "SkyblockMagmawardHud-partial": !AH.fullSet,
            "SkyblockMagmawardHud-armed": AH.fullSet && "empty" !== AH.fuelState
          }),
          children: [null !== AH.flare && (0, Er.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${AH.flare}`
          }, `flare:${AH.flareToken}`), (0, Er.jsx)("div", {
            className: Br()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: AH.setLit
            }),
            children: AH.pieces.map(((HH, BH) => (0, Er.jsx)("div", {
              className: Br()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: HH.worn,
                SkyblockMagmawardPieceJustWorn: HH.justWorn
              }),
              children: (0, Er.jsx)(Sr.e, {
                itemName: HH.itemName,
                amount: 0
              })
            }, `${BH}:${HH.wornToken}`)))
          }, `pieces:${AH.setLitToken}`), (0, Er.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Er.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Er.jsxs)("div", {
              className: Br()("SkyblockMagmawardFuelCounter", AH.pulse && `SkyblockMagmawardFuelCounter-${AH.pulse}`),
              children: [(0, Er.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Er.jsx)(Sr.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Er.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: AH.fuel
              })]
            }, `counter:${AH.pulseToken}`), "burn" === AH.pulse && (0, Er.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${AH.pulseToken}`)]
          }), rH && (0, Er.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${rH.tone} SmallTextBold`,
            children: rH.text
          })]
        })
      })
    }

    function Lt(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH,
        selectedLanguage: AH
      } = (0, zr.B)(), rH = (0, Cr.e)(vA, BH.getSnapshot());
      return null === rH ? null : (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsxs)("div", {
          className: Br()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: rH.inRange
          }),
          style: {
            "--glowtide-colour": rH.colour
          },
          "aria-label": LH("skyblockGame:glowtideChipLabel"),
          children: [(0, Er.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), rH.inRange ? (0, Er.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: LH("skyblockGame:glowtideChipInRange")
          }, `call:${rH.inRangeToken}`) : (0, Er.jsxs)(Er.Fragment, {
            children: [(0, Er.jsx)("div", {
              ref: BH.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Er.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: LH("skyblockGame:waypointDistance", {
                distance: PH(rH.distance, AH.code)
              })
            })]
          })]
        })
      })
    }

    function At(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(TA, BH.getSnapshot());
      return null === AH ? null : (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsxs)("div", {
          className: Br()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: AH.full
          }),
          "aria-label": LH("skyblockGame:glowMeterLabel", {
            fill: String(AH.fill),
            aX: String(AH.aX)
          }),
          children: [AH.burst && (0, Er.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${AH.burstToken}`), (0, Er.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Er.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${AH.ratio})`
              }
            }), AH.gained && (0, Er.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${AH.gainToken}`), AH.full && Array.from({
              length: 5
            }, ((HH, BH) => (0, Er.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, BH)))]
          }), AH.full && AH.rares.map((HH => (0, Er.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Er.jsx)(Sr.e, {
              itemName: HH,
              amount: 0
            })
          }, HH))), AH.ready && (0, Er.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Er.jsx)("span", {
              children: LH("skyblockGame:glowMeterReady")
            })
          }, `ready:${AH.fullToken}`)]
        })
      })
    }

    function rt(HH) {
      let {
        controller: BH
      } = HH;
      const {
        t: LH
      } = (0, zr.B)(), AH = (0, Cr.e)(VA, BH.getSnapshot());
      if (null === AH) return null;
      const rH = "waiting" === AH.phase,
        SH = {
          animationDuration: `${AH.waitMs}ms`,
          animationDelay: -AH.elapsedMs + "ms"
        },
        hH = rH ? void 0 : {
          animationDuration: `${AH.waitMs}ms`
        };
      return (0, Er.jsxs)("div", {
        className: rH ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [rH && (0, Er.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((HH, BH) => (0, Er.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, BH))), (0, Er.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: SH
          }), (0, Er.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Er.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Er.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: SH
            })]
          }), (0, Er.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Er.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: hH,
          children: LH(AH.line)
        }, AH.lineIndex)]
      }, AH.token)
    }

    function St(HH) {
      let {
        chart: BH,
        showHere: LH,
        className: AH
      } = HH;
      return (0, Er.jsx)("div", {
        className: Br()("SkyblockTideChartGrid", AH, null !== BH.pictureName && "Complete"),
        "aria-hidden": "true",
        children: BH.cells.map(((HH, AH) => {
          const rH = 0 !== (BH.pulseCells & 1 << AH),
            SH = BH.castCell === AH;
          return (0, Er.jsx)("span", {
            className: Br()("SkyblockTideChartCell", `Cell-${HH}`, rH && "Pulse", SH && "Cast", LH && BH.hereCell === AH && "Here")
          }, `${AH}:${rH?`p${BH.pulseToken}`:""}:${SH?`c${BH.castToken}`:""}`)
        }))
      })
    }

    function ht(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(bA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = LH.chip;
      if (!LH.enabled || null === rH) return null;
      const SH = AH("skyblockGame:tideChartsChipLabel", {
        island: rH.islandName,
        lit: String(rH.lit),
        ink: String(rH.ink)
      });
      return (0, Er.jsx)(Ar.e, {
        placement: "statBars",
        children: (0, Er.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Br()("SkyblockTideChartsChip", LH.open && "Open", null !== rH.pictureName && "Complete"),
          "aria-label": SH,
          title: SH,
          onMouseDown: HH => {
            HH.preventDefault()
          },
          onClick: BH.toggle,
          children: [(0, Er.jsx)(St, {
            chart: rH,
            showHere: !1,
            className: "Mini"
          }), (0, Er.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [rH.lit, "/", rH.ink]
          })]
        })
      })
    }

    function tt(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, Cr.e)(bA, BH.getSnapshot()),
        {
          t: AH
        } = (0, zr.B)(),
        rH = Tr(),
        SH = LH.card;
      return LH.enabled && null !== SH ? (0, Er.jsx)(xr.b, {
        show: LH.open,
        close: BH.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Er.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: rH,
          onKeyDown: Pr,
          children: [(0, Er.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Er.jsxs)("div", {
              children: [(0, Er.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: AH("skyblockGame:tideChartsTitle")
              }), (0, Er.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: AH("skyblockGame:tideChartsIntro")
              })]
            }), (0, Er.jsx)(vr.q, {
              padIgnore: !0,
              ariaLabel: AH("skyblockGame:tideChartsClose"),
              onClick: BH.dismiss
            })]
          }), LH.tabs.length > 1 && (0, Er.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": AH("skyblockGame:tideChartsIslands"),
            children: LH.tabs.map((HH => (0, Er.jsx)("button", {
              type: "button",
              className: Br()("SkyblockTideChartsTab", HH.selected && "Selected"),
              "aria-pressed": HH.selected,
              onClick: () => {
                BH.XY(HH.island)
              },
              children: HH.name
            }, HH.island)))
          }), (0, Er.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Er.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": SH.gridLabel,
              children: (0, Er.jsx)(St, {
                chart: SH,
                showHere: !0,
                className: "Large"
              })
            }), (0, Er.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Er.jsx)("h3", {
                children: SH.islandName
              }), (0, Er.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: SH.litText
              }), null === SH.pictureName ? (0, Er.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: AH("skyblockGame:tideChartsPictureHidden")
              }) : (0, Er.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: AH("skyblockGame:tideChartsPictureRevealed", {
                  picture: SH.pictureName
                })
              }, SH.pictureName), (0, Er.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Er.jsxs)("li", {
                  children: [(0, Er.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), AH("skyblockGame:tideChartsLegendLit")]
                }), (0, Er.jsxs)("li", {
                  children: [(0, Er.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), AH("skyblockGame:tideChartsLegendClear")]
                }), null !== SH.hereCell && (0, Er.jsxs)("li", {
                  children: [(0, Er.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), AH("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Er.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Er.jsx)("span", {
                  children: LH.turnsText
                }), (0, Er.jsx)("span", {
                  children: LH.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function zt(HH) {
      var BH;
      let {
        controller: LH
      } = HH;
      const {
        selectedLanguage: AH
      } = (0, zr.B)(), rH = AH.code;
      (0, VH.useEffect)((() => {
        LH.setTranslator(((HH, BH) => (0, zr.u)(rH, HH, BH)), rH, ((HH, BH) => (0, zr.r)(rH, HH, BH)))
      }), [LH, rH]);
      const SH = (0, Cr.e)(CH, LH.map.getSnapshot()),
        {
          openInGameMenuName: hH
        } = (0, Lr.m)(["openInGameMenuName"]);
      return (0, Er.jsxs)(Er.Fragment, {
        children: [(0, Er.jsx)(Kh, {
          controller: LH.quests,
          display: LH.navigation.display
        }), SH.enabled && !hH && (0, Er.jsx)(qr, {
          controller: LH.navigation
        }), (0, Er.jsx)(Xr, {
          controller: LH,
          minimap: SH.enabled && (null === (BH = SH.presentation) || void 0 === BH ? void 0 : BH.minimap) && (0, Er.jsx)(er, {
            view: SH.presentation.minimap,
            navigation: LH.navigation,
            controller: LH.map
          }),
          children: (0, Er.jsx)(Zr, {
            controller: LH.quests,
            surface: "hud"
          })
        }), (0, Er.jsx)(Ih, {
          controller: LH.navigation
        }), (0, Er.jsx)(eh, {
          controller: LH.portalTransit
        }), (0, Er.jsx)(dh, {
          controller: LH.dailyReward
        }), (0, Er.jsx)(Ht, {
          controller: LH.mailbox
        }), (0, Er.jsx)(Bt, {
          controller: LH.magmaward
        }), (0, Er.jsx)(Lt, {
          controller: LH.glowtide
        }), (0, Er.jsx)(ZS, {
          controller: LH.passage
        }), (0, Er.jsx)(ht, {
          controller: LH.tideCharts
        }), (0, Er.jsx)(At, {
          controller: LH.glowMeter
        }), (0, Er.jsx)(Ah, {
          controller: LH.reachLog
        }), (0, Er.jsx)(rt, {
          controller: LH.hushWait
        }), (0, Er.jsx)(yS, {
          controller: LH.lampLight
        }), (0, Er.jsx)(gr, {
          controller: LH.skills,
          surface: "hud"
        })]
      })
    }

    function Ct(HH) {
      let {
        controller: BH
      } = HH;
      return (0, Er.jsxs)(Er.Fragment, {
        children: [(0, Er.jsx)(cr, {
          controller: BH.map,
          navigation: BH.navigation
        }), (0, Er.jsx)(gr, {
          controller: BH.skills,
          surface: "menu"
        }), (0, Er.jsx)(Zr, {
          controller: BH.quests,
          surface: "menu"
        }), (0, Er.jsx)(bS, {
          controller: BH.dungeons
        }), (0, Er.jsx)(oS, {
          controller: BH.collections
        }), (0, Er.jsx)(lS, {
          controller: BH.questGraph
        }), (0, Er.jsx)(gS, {
          controller: BH.forge
        }), (0, Er.jsx)(DS, {
          controller: BH.smuggler
        }), (0, Er.jsx)(Bh, {
          controller: BH.keepersChair,
          lampLight: BH.lampLight
        }), (0, Er.jsx)(Oh, {
          controller: BH.reachLog,
          regulars: BH.regulars,
          hiddenWaters: BH.hiddenWaters
        }), (0, Er.jsx)(th, {
          controller: BH.regulars
        }), (0, Er.jsx)(aS, {
          controller: BH.passage
        }), (0, Er.jsx)(tt, {
          controller: BH.tideCharts
        }), (0, Er.jsx)(mh, {
          controller: BH.dialogue
        }), (0, Er.jsx)(oh, {
          controller: BH.autographs
        })]
      })
    }
    var Et = LH(37617);
    const Xt = cL + nL;

    function Gt(HH, BH) {
      const LH = [{
        sound: "rpgKnifeSlice1",
        beat: cL,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: cL,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: cL,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: cL,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: cL,
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
        XY: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: Xt + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        XY: !0,
        beat: Xt + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: Xt + 60,
        lead: 180,
        volume: .5 + .06 * HH,
        rate: .82 + .07 * HH
      }];
      return HH >= 4 && LH.push({
        sound: "exp_levelup",
        beat: Xt + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), BH && LH.push({
        sound: "trumpetFlare",
        beat: Xt + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), LH.push({
        sound: "harp_pling",
        beat: eL,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), LH
    }
    class Yt {
      constructor(HH) {
        this.deps = HH, this.pending = new Map, this.localHook = null
      }
      hookWaiting(HH, BH) {
        this.pending.delete(HH);
        const LH = this.deps.now();
        if (null === BH) {
          var AH;
          if ((null === (AH = this.localHook) || void 0 === AH ? void 0 : AH.hookId) === HH) {
            const HH = LH >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(HH)
          }
          return
        }
        const rH = LH + BH;
        this.settle(HH, rH) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(HH, {
          untilMs: LH + 1e3,
          biteAtMs: rH
        }))
      }
      getLocalHook() {
        var HH, BH;
        return null !== (HH = null === (BH = this.localHook) || void 0 === BH ? void 0 : BH.hookId) && void 0 !== HH ? HH : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const HH = this.deps.now();
        for (const [BH, {
            untilMs: LH,
            biteAtMs: AH
          }] of this.pending)(this.settle(BH, AH) || HH > LH) && this.pending.delete(BH)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(HH, BH) {
        const LH = this.deps.getLineOwner(HH);
        if (null === LH) return !1;
        if (!this.deps.isLocalPlayer(LH)) return !0;
        if (this.localHook = {
            hookId: HH,
            biteAtMs: BH
          }, !this.deps.isHushWaiting()) {
          const [BH, LH] = this.deps.getHookPosition(HH);
          this.deps.onCastLanded(BH, LH)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var ut = LH(4617);
    const Qt = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Wt = {
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
    class Mt {
      constructor(HH) {
        this.deps = HH, this.tell = null
      }
      receiveTell(HH) {
        let {
          biteTellTier: BH
        } = HH;
        this.tell = {
          tier: BH,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(HH) {
        const BH = this.tell;
        if (this.tell = null, !HH) return;
        const LH = null !== BH && this.deps.now() - BH.atMs <= 3e3 ? BH.tier : 0;
        this.deps.vibrate(Qt[LH])
      }
      burstAtHook() {
        const HH = this.tell,
          BH = this.deps.getLocalHookPosition();
        null === HH || HH.burst || null === BH || (HH.burst = !0, this.deps.playParticles(function(HH, BH) {
          let [LH, AH, rH] = BH;
          const {
            count: SH,
            rise: hH,
            colour: tH
          } = Wt[HH], [zH, CH, EH] = tH;
          return {
            texture: "glint",
            pos1: [LH - .3, AH, rH - .3],
            pos2: [LH + .3, AH + .2, rH + .3],
            dir1: [-.6, hH, -.6],
            dir2: [.6, 1.4 * hH, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: SH,
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
              minColor: [zH, CH, EH, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [zH, CH, EH, 0],
              maxColor: [zH, CH, EH, 0]
            }],
            blendMode: ut.f.Add,
            hideDist: 48
          }
        }(HH.tier, BH)))
      }
    }
    var xt = LH(1194),
      vt = LH(2003),
      Pt = LH(30),
      Tt = LH(176);
    const Ut = Tt.g.iW * Tt.g.playerEyeToHeightRatio;
    class Vt {
      constructor(HH) {
        this.host = HH, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      kX(HH) {
        this.lava = HH, this.nextUpdateAt = 0
      }
      IX() {
        var HH;
        const BH = this.host.now();
        if (BH < this.nextUpdateAt) return;
        this.nextUpdateAt = BH + 250;
        const LH = this.host.playerPosition(),
          AH = LH && this.findNearest([LH[0], LH[1] + Ut, LH[2]]);
        if (!AH || AH.distance >= 40) return void this.stop();
        const rH = .5 * Math.min(1, (40 - AH.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(rH) : this.loop = this.host.play("lavaFlow", rH, AH.position, 40 + Ut, 9, !0), null === (HH = this.loop) || void 0 === HH || HH.setPosition(AH.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var HH;
        null === (HH = this.loop) || void 0 === HH || HH.stop(), this.loop = null
      }
      findNearest(HH) {
        let BH = -1,
          LH = 1 / 0;
        for (let AH = 0; AH < this.lava.length; AH += 3) {
          const rH = this.lava[AH] - HH[0],
            SH = this.lava[AH + 1] - HH[1],
            hH = this.lava[AH + 2] - HH[2],
            tH = rH * rH + SH * SH + hH * hH;
          tH < LH && (LH = tH, BH = AH)
        }
        return BH < 0 ? null : {
          position: [this.lava[BH], this.lava[BH + 1], this.lava[BH + 2]],
          distance: Math.sqrt(LH)
        }
      }
    }
    var Ot = LH(1981),
      bt = LH(39559);
    const kt = {
      "Grey Portal": "Gray"
    };
    for (const ct of XH.Mc) kt[`${ct} Portal`] = ct;
    const mt = Object.keys(kt),
      ot = Object.fromEntries(mt.map((HH => [HH, (0, XH.W)(XH.K[`${(0,XH.Fe)(kt[HH])}Team`])])));
    Object.fromEntries(mt.map((HH => [HH, XH.K[`${(0,XH.Fe)(kt[HH])}UiText`]])));
    class It {
      constructor(HH, BH) {
        this.presentation = HH, this.portal = BH, this.unlocked = void 0
      }
      kX(HH) {
        const BH = !1 === this.unlocked && HH;
        this.unlocked = HH, this.IX();
        const {
          min: LH,
          max: AH,
          unlockedBlock: rH
        } = this.portal;
        if (BH && this.presentation.hasChunk(...LH)) {
          const [HH, BH, SH] = ot[rH];
          this.presentation.playParticles({
            pos1: [...LH],
            pos2: AH.map((HH => HH + 1)),
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
              minColor: [HH, BH, SH, 1],
              maxColor: [Math.min(255, HH + 55), Math.min(255, BH + 55), Math.min(255, SH + 90), 1]
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
      IX() {
        var HH;
        const BH = this.unlocked ? this.portal.unlockedBlock : null !== (HH = this.portal.lockedBlock) && void 0 !== HH ? HH : "Light Gray Portal",
          {
            min: LH,
            max: AH
          } = this.portal;
        for (let rH = LH[0]; rH <= AH[0]; rH++)
          for (let HH = LH[1]; HH <= AH[1]; HH++)
            for (let SH = LH[2]; SH <= AH[2]; SH++) this.presentation.hasChunk(rH, HH, SH) && this.presentation.Fv(rH, HH, SH) !== BH && this.presentation.oq(rH, HH, SH, BH)
      }
    }
    var ft = LH(39454);
    LH(39440);
    const lt = {
        farming_1: {
          raises: HH => "NPC" === HH.type && "chef" === HH.variation,
          rise: .4
        },
        fishing_1: {
          raises: HH => "Draugr Warper" === HH.type,
          rise: .4
        }
      },
      Kt = (HH, BH, LH, rH) => {
        let {
          localPlayerId: SH
        } = rH;
        const hH = new yA({
          translate: (HH, BH) => (0, zr.u)(xt.g.get().getCurrentLanguageCode(), HH, BH),
          translateWithIcons: (HH, BH) => (0, zr.r)(xt.g.get().getCurrentLanguageCode(), HH, BH),
          setMenuOpen: HH => {
            HH ? (0, wH.t)() : (0, wH.g)()
          },
          dismissMenu: wH.j,
          publishSkills: HH => {
            ZH.k.AX(RB, HH, !0)
          },
          publishQuests: HH => {
            ZH.k.AX(DB, HH, !0)
          },
          publishQuestNotification: HH => {
            ZH.k.AX(wB, HH, !0)
          },
          publishDungeons: HH => {
            ZH.k.AX(aB, HH, !0)
          },
          publishCollections: HH => {
            ZH.k.AX(QL, HH, !0)
          },
          publishMap: HH => {
            ZH.k.AX(CH, HH, !0)
          },
          publishHud: HH => {
            ZH.k.AX(JA, HH, !0)
          },
          publishPortalTransit: HH => {
            ZH.k.AX(ML, HH, !0)
          },
          isLoadingScreenUp: () => Lr.c.get("loadingOverlayVisible"),
          publishDailyReward: HH => {
            ZH.k.AX(PL, HH, !0)
          },
          publishMailbox: HH => {
            ZH.k.AX(bL, HH, !0)
          },
          publishQuestGraph: HH => {
            ZH.k.AX(mL, HH, !0)
          },
          publishForge: HH => {
            ZH.k.AX(sL, HH, !0)
          },
          publishSmuggler: HH => {
            ZH.k.AX(pL, HH, !0)
          },
          publishKeepersChair: HH => {
            ZH.k.AX(tA, HH, !0)
          },
          publishReachLog: HH => {
            ZH.k.AX(CA, HH, !0)
          },
          publishLampLight: HH => {
            ZH.k.AX(QA, HH, !0)
          },
          publishMagmaward: HH => {
            ZH.k.AX(MA, HH, !0)
          },
          publishGlowtide: HH => {
            ZH.k.AX(vA, HH, !0)
          },
          publishGlowMeter: HH => {
            ZH.k.AX(TA, HH, !0)
          },
          publishHushWait: HH => {
            ZH.k.AX(VA, HH, !0)
          },
          publishPassage: HH => {
            ZH.k.AX(BA, HH, !0)
          },
          publishTideCharts: HH => {
            ZH.k.AX(bA, HH, !0)
          },
          publishRegulars: HH => {
            ZH.k.AX(cA, HH, !0)
          },
          publishHiddenWaters: HH => {
            ZH.k.AX(RA, HH, !0)
          },
          publishDialogue: HH => {
            ZH.k.AX(nA, HH, !0)
          },
          publishAutographs: HH => {
            ZH.k.AX(dA, HH, !0)
          },
          onDailyRewardStarted: HH => {
            fH.playSound(SH, HH.day === bH ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (HH, BH) => {
            fH.playSound(SH, "exp_collect", .35, 1 + .6 * HH / (BH - 1)), ZH.k.AX(TL, HH === BH - 1)
          },
          onDailyRewardItemLanded: HH => {
            fH.playSound(SH, "pickUp", .6, 1 + .15 * HH)
          },
          onMailboxStarted: () => {
            fH.playSound(SH, "rpgMetalClick", .6, 1), fH.playSound(SH, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            fH.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Pt.f,
          requestTracking: HH => {
            fH.sendCommand(`quests track ${HH}`)
          },
          requestDungeonEnter: (HH, BH) => {
            fH.sendCommand(`dungeonEnter ${HH} ${BH}`)
          },
          requestQuestJump: HH => {
            fH.sendCommand(`${lH} jump ${HH}`)
          },
          requestQuestArrive: (HH, BH) => {
            const LH = `${lH} arrive ${HH}`;
            fH.sendCommand(BH ? `${LH} complete` : LH)
          },
          requestForge: HH => {
            let {
              blade: BH,
              guard: LH,
              handle: AH
            } = HH;
            fH.sendCommand(`forge ${BH} ${LH} ${AH}`)
          },
          requestDialogue: () => {
            fH.sendCommand("quests dialogue")
          },
          requestSmuggle: (HH, BH) => {
            fH.sendCommand(`smuggle ${HH} ${BH}`)
          },
          requestKeepersChairAim: HH => {
            fH.sendCommand(`keeperschair-aim ${HH}`)
          },
          requestReachLogOpen: () => {
            fH.sendCommand("reachlog-open")
          },
          requestLampLight: HH => {
            fH.sendCommand(`${HH}`)
          },
          requestTravel: HH => {
            fH.sendCommand(`map travel ${HH.kind} ${HH.id} ${HH.requestId}`)
          }
        });
        let tH, zH, EH, GH, YH, xH, vH, PH, TH, OH, kH, oH, IH, fH, KH = null;
        const gH = lt[null !== LH && void 0 !== LH ? LH : ""],
          jH = (HH, BH) => {
            null !== gH && void 0 !== gH && gH.raises(BH) && fH.setNametagOffset(HH, gH.rise)
          },
          nH = new Mt({
            getLocalHookPosition: () => {
              const HH = aH.getLocalHook();
              return null !== HH && fH.checkValid(HH) ? fH.hT(HH) : null
            },
            playParticles: HH => {
              fH.playParticleEffect(HH)
            },
            vibrate: HH => {
              dH.g.play("fishBite", HH)
            },
            now: () => performance.now()
          }),
          aH = new Yt({
            getLineOwner: HH => fH.checkValid(HH) ? fH.getLineOwner(HH) : null,
            isLocalPlayer: HH => fH.isLocalPlayer(HH),
            getHookPosition: HH => {
              const [BH, , LH] = fH.hT(HH);
              return [BH, LH]
            },
            isHushWaiting: () => {
              var HH;
              return "waiting" === (null === (HH = hH.hushWait.getSnapshot()) || void 0 === HH ? void 0 : HH.phase)
            },
            onCastLanded: (HH, BH) => {
              hH.tideCharts.castLanded(HH, BH)
            },
            onLocalHookSettled: () => {
              nH.onLocalHookSettled()
            },
            onLocalWaitEnded: HH => {
              nH.onLocalWaitEnded(HH)
            },
            now: () => performance.now()
          }),
          sH = new Vt({
            now: () => performance.now(),
            playerPosition: () => fH.checkValid(SH) ? fH.hT(SH) : null,
            play: (HH, BH, LH, AH, rH, hH) => fH.playSound(SH, HH, BH, 1, {
              SH: LH,
              maxHearDist: AH,
              refDistance: rH
            }, hH)
          }),
          JH = new Map;
        let iH;
        return {
          onCreate: HH => {
            if (fH = HH, KH = new bt.SkyblockEntityFacing(HH, gH ? jH : null), hH.portalTransit.resumeArrival(null !== LH && void 0 !== LH ? LH : null), (null !== LH && void 0 !== LH ? LH : AH) === AH) {
              let HH = -1 / 0;
              iH = ZH.k.subscribe("toggleMenu", (BH => {
                const LH = performance.now();
                "inventory|Workbench" !== BH || "cross_to_hub" !== hH.quests.getTrackedQuestId() || LH - HH < 1e4 || (HH = LH, fH.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [AH, rH] of Object.entries(null !== (BH = cH[null !== LH && void 0 !== LH ? LH : ""]) && void 0 !== BH ? BH : {})) {
              var BH;
              JH.set(AH, new It({
                hasChunk: (BH, LH, AH) => HH.isBlockInLoadedChunk(BH, LH, AH),
                Fv: (BH, LH, AH) => HH.blockIdToBlockName(HH.getBlockId(BH, LH, AH)),
                oq: (BH, LH, AH, rH) => {
                  HH.oq(BH, LH, AH, rH)
                },
                playParticles: BH => {
                  HH.playParticleEffect(BH)
                }
              }, rH))
            }
            IH = (0, Ot.f)((HH => (0, OB.i)(HH) ? (0, OB.e)(HH) : null)), hH.resolveItemName = (BH, LH) => {
              const AH = HH.getItemStat(SH, BH, "displayName");
              return AH && "object" === typeof AH && "translationKey" in AH ? LH(AH.translationKey, (0, zr.q)(AH.params, vt.c.shown)) : "string" === typeof AH ? LH(AH) : BH
            }, hH.quests.notifications.onShown = HH => {
              "quest" === HH ? fH.playSound(SH, "magicAccent1", 1, 1) : "skillLevel" === HH ? fH.playSound(SH, "magicAccent1", 1, .6) : "landmark" === HH ? fH.playSound(SH, "trumpetFlare", 1, .6) : "npcNote" === HH ? fH.playSound(SH, "magicAccent2", .8, 1.1) : "started" === HH ? fH.playSound(SH, (0, Et.h)("bigDrumSwish"), 1, 1) : fH.playSound(SH, (0, Et.h)("rpgHandleSmallLeather"), 1, 1)
            }, hH.forge.onPartSelected = () => {
              fH.playSound(SH, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, hH.forge.onOpened = () => {
              ! function(HH) {
                HH.preloadSounds(Gt(4, !0).map((HH => HH.sound)))
              }(HH)
            }, hH.forge.onForgeStarted = (BH, LH, AH) => function(HH, BH, LH, AH, rH) {
              const SH = [],
                hH = [],
                tH = LH => {
                  const AH = HH.playSound(BH, LH.XY ? (0, Et.h)(LH.sound) : LH.sound, LH.volume, LH.rate);
                  AH && (hH.push(AH), void 0 !== LH.cutAfter && SH.push(setTimeout((() => {
                    AH.fade(AH.getVolume(), 0, 300)
                  }), LH.cutAfter)))
                };
              for (const zH of Gt(LH, AH)) rH ? SH.push(setTimeout((() => {
                tH(zH)
              }), Math.max(0, zH.beat - zH.lead / zH.rate))) : zH.beat !== cL && "magicAccent2" !== zH.sound && "trumpetFlare" !== zH.sound || tH(zH);
              return () => {
                for (const HH of SH) clearTimeout(HH);
                for (const HH of hH) HH.fade(HH.getVolume(), 0, 120)
              }
            }(HH, SH, BH, LH, AH), hH.smuggler.onBought = () => {
              fH.playSound(SH, (0, Et.h)("rpgHandleSmallLeather"), 1, 1), fH.playSound(SH, "chestOpen", .6, 1)
            }, hH.compass.register(new uH(hH.map, !0)), hH.compass.register(new uH(hH.map, !1)), hH.compass.register(new WH(hH.map)), hH.compass.register(new MH((() => hH.quests.getSnapshot().compassTarget)));
            for (const LH of ["enemy", "npc"]) hH.compass.register(new QH(hH.map, LH, (BH => HH.checkValid(BH) ? HH.hT(BH) : void 0), (BH => HH.isAlive(BH))))
          },
          onAfterRender: (HH, BH) => {
            const LH = fH.checkValid(SH) ? fH.hT(SH) : null;
            hH.navigation.afterRender(LH, performance.now(), BH), hH.glowtide.afterRender(LH, BH.cameraHeading), hH.tideCharts.afterRender(LH), aH.afterRender()
          },
          onClose: () => {
            var HH, BH, LH, AH, rH, SH, CH, XH, uH, QH, WH, MH, xH, UH, VH;
            iH && ZH.k.unsubscribe(iH), null === (HH = IH) || void 0 === HH || HH(), sH.dispose(), null === (BH = KH) || void 0 === BH || BH.dispose(), aH.dispose(), hH.dispose(), null === (LH = tH) || void 0 === LH || LH(), null === (AH = zH) || void 0 === AH || AH(), null === (rH = EH) || void 0 === rH || rH(), null === (SH = GH) || void 0 === SH || SH(), null === (CH = YH) || void 0 === CH || CH(), null === (XH = vH) || void 0 === XH || XH(), null === (uH = undefined) || void 0 === uH || uH(), null === (QH = PH) || void 0 === QH || QH(), null === (WH = TH) || void 0 === WH || WH(), null === (MH = OH) || void 0 === MH || MH(), null === (xH = kH) || void 0 === xH || xH(), null === (UH = undefined) || void 0 === UH || UH(), null === (VH = oH) || void 0 === VH || VH()
          },
          onPlayerChangeBlock: (HH, BH, AH, rH, tH, zH) => {
            if (HH === SH && "Air" === zH) {
              const HH = fH.getClientOption(SH, "creative");
              hH.skills.predictBlock([BH, AH, rH], tH, HH);
              const zH = function(HH, BH) {
                  if ("hub" === BH || "farming_1" === BH || "mining_1" === BH) return !NH.has(HH) || "hub" !== BH && "mining_1" !== BH ? Object.hasOwn(qH, HH) ? qH[HH] : void 0 : eH
                }(tH, LH),
                CH = ("hub" === LH || "mining_1" === LH) && (XH.yd.some((HH => HH === tH)) || Object.hasOwn(RH, tH) || "mining_1" === LH && "Block of Coal" === tH);
              HH || void 0 === zH && !CH || fH.oq(BH, AH, rH, null !== zH && void 0 !== zH ? zH : eH)
            }
          },
          onPlayerAttackEntity: (HH, BH) => {
            if (HH !== SH || "Player" !== fH.getEntityType(BH)) return;
            const [LH, AH, rH] = fH.hT(BH);
            fH.burstParticlePreset("critical", [LH, AH + 1, rH], 10)
          },
          onChangeBlockFail: HH => {
            for (const {
                sA: BH
              }
              of HH) hH.skills.rejectBlock(BH)
          },
          onReceivedMessageFromServer: (HH, BH) => {
            if ("skyblockGatedPortal" === HH) {
              var LH;
              const [HH, AH] = BH;
              return void(null === (LH = JH.get(HH)) || void 0 === LH || LH.kX(AH))
            }
            if ("skyblockDailyReward" === HH) return void hH.dailyReward.kX(BH);
            if ("skyblockMailbox" === HH) return void hH.mailbox.kX(BH);
            if ("skyblockPortalTransit" === HH) return void hH.portalTransit.kX(BH);
            if ("skyblockLava" === HH) return void sH.kX(BH);
            if ("skyblockForge" === HH) return void hH.forge.kX(BH);
            if ("skyblockMagmaward" === HH) return void hH.magmaward.kX(BH);
            if ("skyblockGlowtide" === HH) return void hH.glowtide.kX(BH);
            if ("skyblockGlowMeter" === HH) return void hH.glowMeter.kX(BH);
            if ("skyblockHushWait" === HH) return void hH.hushWait.kX(BH);
            if ("skyblockPassage" === HH) {
              const HH = BH;
              return hH.passage.kX(HH), hH.reachLog.receivePassagePhase(HH.passagePhase), OH ??= (0, UH.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: hH.passage.show
              }), void hH.keepersChair.receivePassage({
                keepersChairPassagePhase: HH.passagePhase,
                keepersChairPassageNextPhase: HH.passageNextPhase,
                keepersChairPassageTurnsInMs: HH.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === HH) {
              const HH = BH;
              return hH.tideCharts.kX(HH), void(HH.tideCharts.length > 0 && (kH ??= (0, UH.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: hH.tideCharts.show
              })))
            }
            if (HH === FH.y) {
              var AH;
              const {
                hookId: HH,
                waiting: LH
              } = BH;
              return void aH.hookWaiting(HH, null !== (AH = null === LH || void 0 === LH ? void 0 : LH.remainingMs) && void 0 !== AH ? AH : null)
            }
            if ("skyblockBiteTell" === HH) return void nH.receiveTell(BH);
            if ("skyblockSmuggler" === HH) return void hH.smuggler.kX(BH);
            if ("skyblockKeepersChair" === HH) return hH.keepersChair.kX(BH), void hH.lampLight.setAtChair(hH.keepersChair.isAtChair());
            if ("skyblockLampLight" === HH) {
              const HH = BH;
              var rH;
              if (hH.lampLight.kX(HH), HH.lampLightReleasing) TH ??= (0, UH.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  hH.lampLight.setRelease(!1)
                }
              });
              else null === (rH = TH) || void 0 === rH || rH(), TH = void 0;
              return
            }
            if ("skyblockRegulars" === HH) return void hH.regulars.kX(BH);
            if ("skyblockHiddenWaters" === HH) return void hH.hiddenWaters.kX(BH);
            if ("skyblockReachLog" === HH) return hH.reachLog.kX(BH), void(PH ??= (0, UH.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: XA
              },
              onClick: hH.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === HH) {
              for (const [HH, LH, AH, rH] of BH) fH.oq(HH, LH, AH, rH);
              return
            }
            if ("skyblockHud" === HH) hH.receiveHud(BH);
            else if ("skyblockMap" === HH) hH.map.kX(BH);
            else if (HH === DH.e) hH.skills.kX(BH);
            else if (HH === mH && "dialogue" === BH.kind) hH.dialogue.kX(BH);
            else if (HH === mH) hH.quests.kX(BH);
            else if ("skyblockDungeons" === HH) hH.dungeons.kX(BH);
            else if ("sbCollections" === HH) hH.collections.kX(BH);
            else if ("skyblockQuestGraph" === HH) hH.questGraph.kX(BH);
            else {
              if ("skyblockAutographs" !== HH) return;
              hH.autographs.kX(BH)
            }
            if (!zH && hH.map.getSnapshot().enabled) {
              const HH = (0, UH.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: hH.map.show
                }),
                BH = (0, wH.u)(hH.map.show);
              zH = () => {
                HH(), BH()
              }
            }!EH && hH.skills.getSnapshot().enabled && (EH = (0, UH.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: hH.skills.show
            })), !vH && hH.collections.getSnapshot().enabled && (vH = (0, UH.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: hH.collections.show
            })), !GH && hH.quests.getSnapshot().enabled && (GH = (0, UH.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: hH.quests.show
            })), !oH && hH.autographs.getSnapshot().enabled && (oH = (0, UH.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: hH.autographs.show
            }));
            const SH = hH.dungeons.getSnapshot().enabled;
            var CH;
            (EH || GH || SH) && xH !== SH && (xH = SH, null === (CH = YH) || void 0 === CH || CH(), YH = (0, UH.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: ft
              },
              disabled: !SH,
              panel: !0,
              onClick: hH.dungeons.show
            }));
            tH || (tH = (0, wH.v)((0, VH.createElement)(zt, {
              controller: hH
            }), {
              content: (0, VH.createElement)(Ct, {
                controller: hH
              }),
              onClose: hH.close
            }))
          },
          IX: () => {
            var HH;
            for (const BH of JH.values()) BH.IX();
            sH.IX(), null === (HH = KH) || void 0 === HH || HH.IX(), hH.skills.IX(), hH.quests.IX(), hH.dailyReward.IX(), hH.mailbox.IX(), hH.map.IX()
          }
        }
      }
  },
  39415: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => rH
    });
    var AH = LH(317);
    const rH = (0, AH.yb)([0, 0, -1]),
      SH = [{
        name: "S",
        bearing: (0, AH.yb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, AH.yb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: rH
      }, {
        name: "W",
        bearing: (0, AH.yb)([1, 0, 0])
      }]
  },
  39408: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(39415);

    function rH(HH, BH, LH) {
      return [100 * (LH.mapMaxX - HH) / (LH.mapMaxX - LH.mapMinX), 100 * (BH - LH.mapMinZ) / (LH.mapMaxZ - LH.mapMinZ)]
    }

    function SH(HH, BH, LH, SH) {
      const [hH, tH] = rH(HH, BH, SH), zH = AH.f - LH;
      return {
        rotation: zH,
        transform: `rotate(${zH}rad) translate(-${hH}%, -${tH}%)`
      }
    }
  },
  37235: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => AH
    });
    const AH = "skyblockSkills",
      rH = "skills_test_gym"
  },
  39480: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39484: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39487: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39496: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39501: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39510: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39514: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39517: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39524: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39526: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39528: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39533: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39538: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39545: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);