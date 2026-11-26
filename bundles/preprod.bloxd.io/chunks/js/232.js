export const id = 232;
export const ids = [59, 232];
export const modules = {
  39382: (UU, XU, zU) => {
    var cU = {
      "./combat_1.png": 39386,
      "./dungeon_crumbling_crypt.png": 39390,
      "./dungeon_frozen_hollow.png": 39393,
      "./dungeon_wildwood_grove.png": 39400,
      "./dungeons.png": 39402,
      "./farming_1.png": 39407,
      "./fishing_1.png": 39415,
      "./hub.png": 39421,
      "./island.png": 39429,
      "./mining_1.png": 39434,
      "./mining_1_bridge.png": 39436,
      "./mining_1_gallery.png": 39441,
      "./mining_1_hollow.png": 39445,
      "./mining_1_village.png": 39447
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 39382
  },
  39453: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU, XU) {
      return cU.set(UU, XU), UU
    }

    function QU(UU) {
      var XU;
      return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
    }
  },
  39324: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      constructor(UU, XU, zU) {
        this.UY = UU, this.beforeOpen = XU, this.afterClose = zU, this.open = !1, this.kp = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kp && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(UU) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(UU)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.kp = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kp || (this.snapshot = this.buildSnapshot(), this.UY(this.snapshot))
      }
    }
  },
  39455: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      SkyblockEntityFacing: () => FU,
      needsSkyblockEntityFacing: () => AU
    });
    var cU = zU(638),
      yU = zU(4608),
      QU = zU(39462);

    function AU(UU, XU) {
      if (UU.metaInfo === cU.b || "Iron Guardian" === UU.type || "Gold Guardian" === UU.type) return !0;
      if ("Pig" === UU.type) return "sitting" === UU.pose;
      if ("Person" !== UU.meshKind || void 0 === UU.meshOpts) return !1;
      let zU = null === XU || void 0 === XU ? void 0 : XU.get(UU.meshOpts);
      if (void 0 === zU) {
        var QU, AU;
        const cU = (0, yU.i)(UU);
        zU = !1, "pig_napoleon" === (null === cU || void 0 === cU || null === (QU = cU.opts.textures) || void 0 === QU ? void 0 : QU.head) ? zU = !0 : "npc_pig_head" === (null === cU || void 0 === cU || null === (AU = cU.opts.textures) || void 0 === AU ? void 0 : AU.head) && (zU = "sitting" === cU.opts.pose || "sitting"), XU && (XU.size >= 256 && XU.clear(), XU.set(UU.meshOpts, zU))
      }
      return "sitting" === zU ? "sitting" === UU.pose : zU
    }(0, QU.i)("skyblock", ((UU, XU) => {
      XU.setFacingTolerance(AU(UU) ? 0 : null)
    }));
    class FU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = UU, this.alsoVisit = XU, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = UU => {
          var XU;
          const zU = this.api.getEntityInfo(UU);
          zU && (AU(zU, this.meshFacingCache) && (this.api.setFacingTolerance(UU, 0), this.nextFacing.add(UU)), null === (XU = this.alsoVisit) || void 0 === XU || XU.call(this, UU, zU))
        }
      }
      LY() {
        const {
          api: UU
        } = this, XU = this.nextFacing;
        UU.forEachEntity(this.visit);
        for (const zU of this.facing) XU.has(zU) || UU.setFacingTolerance(zU, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = XU
      }
      dispose() {
        for (const UU of this.facing) this.api.setFacingTolerance(UU, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39303: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => wF
    });
    const cU = "island";
    var yU = zU(39311);

    function QU(UU, XU, zU) {
      const QU = "local" === XU,
        FU = UU.background,
        oU = XU => FU ? (0, yU.e)(XU[0] - UU.mapOrigin[0], XU[2] - UU.mapOrigin[2], FU.bounds) : [50, 50],
        DU = (UU.insideDungeon ? [] : UU.landmarks).map((UU => {
          var XU, cU;
          return {
            id: UU.id,
            name: zU(UU.visited && UU.nameKey ? null !== (XU = UU.mapLabelKey) && void 0 !== XU ? XU : UU.nameKey : "skyblockGame:mapUnknown"),
            icon: UU.visited && null !== (cU = UU.icon) && void 0 !== cU ? cU : "unknown",
            visited: UU.visited,
            current: !1,
            position: oU(UU.position),
            travelKind: "landmark",
            travelId: UU.id
          }
        })),
        EU = UU.zones.map((XU => {
          var cU;
          return {
            id: XU.id,
            name: zU(XU.visited && XU.nameKey ? XU.nameKey : "skyblockGame:mapUnknown"),
            icon: XU.visited && null !== (cU = XU.icon) && void 0 !== cU ? cU : "unknown",
            visited: XU.visited,
            current: XU.id === UU.zoneId,
            position: XU.position,
            thumbnail: XU.visited ? XU.id : void 0,
            travelKind: "zone",
            travelId: XU.id
          }
        })),
        YU = UU.insideDungeon || !FU ? [] : UU.portals.map((UU => {
          var XU;
          return {
            id: UU.id,
            name: zU(null !== (XU = UU.nameKey) && void 0 !== XU ? XU : "skyblockGame:mapUnknown"),
            icon: UU.visited ? "dungeons" === UU.destination ? "portal_orange" : "portal" : "unknown",
            visited: UU.visited,
            current: !1,
            position: oU(UU.position),
            colour: UU.colour,
            travelKind: "zone",
            travelId: UU.destination
          }
        })),
        NU = QU ? DU : EU,
        IU = NU.filter((UU => UU.visited)).length,
        pU = FU ? (FU.bounds.mapMaxX - FU.bounds.mapMinX) / (FU.bounds.mapMaxZ - FU.bounds.mapMinZ) : 2,
        aU = FU ? JSON.stringify([FU.bounds, UU.mapOrigin]) : "";
      return {
        local: QU,
        points: NU,
        portals: QU ? YU : [],
        progress: NU.length ? zU("skyblockGame:mapDiscovered", {
          current: String(IU),
          total: String(NU.length)
        }) : null,
        percent: NU.length ? 100 * IU / NU.length : 0,
        canTravel: [...NU, ...QU ? YU : []].some((UU => UU.visited && !UU.current)),
        noLandmarks: QU && !UU.insideDungeon && 0 === DU.length,
        background: FU ? {
          imageKey: FU.imageKey,
          fallbackImageKey: UU.zoneId,
          geometryKey: aU,
          label: zU(FU.labelKey),
          colour: FU.backgroundColour,
          ratio: pU
        } : null,
        connections: AU(UU.zones),
        minimap: FU ? {
          imageKey: FU.imageKey,
          fallbackImageKey: UU.zoneId,
          geometryKey: aU,
          label: zU(FU.labelKey),
          colour: FU.backgroundColour,
          caption: zU(UU.zoneId === cU ? "skyblockGame:zoneIsland" : FU.labelKey),
          width: (FU.bounds.mapMaxX - FU.bounds.mapMinX) / FU.minimapSpan * 100 + "%",
          height: (FU.bounds.mapMaxZ - FU.bounds.mapMinZ) / FU.minimapSpan * 100 + "%",
          markers: [...DU, ...YU]
        } : null
      }
    }

    function AU(UU) {
      const XU = new Set;
      return UU.flatMap((zU => zU.connections.flatMap((cU => {
        const yU = UU.find((UU => UU.id === cU)),
          QU = [zU.id, cU].sort().join("|");
        return !yU || XU.has(QU) ? [] : (XU.add(QU), [{
          id: `${zU.id}-${cU}`,
          start: zU.position,
          end: yU.position,
          explored: zU.visited && yU.visited
        }])
      }))))
    }
    var FU = zU(39324);
    class oU extends FU.b {}
    const DU = "skyblockMapView";
    class EU extends oU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, cU, yU), this.requestTravel = XU, this.translate = zU, this.now = QU, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = UU => {
          this.tab = UU, this.feedbackKey = "", this.emit()
        }, this.travel = (UU, XU) => {
          if (!this.map || this.pending || this.kp) return;
          const zU = ("zone" === UU ? this.map.zones : this.map.landmarks).find((UU => UU.id === XU));
          if (zU) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in zU && !zU.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (zU.visited)
              if ("zone" === UU && XU === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const zU = ++this.nextRequestId;
                this.pending = {
                  requestId: zU,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: UU,
                  id: XU,
                  requestId: zU
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
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      PY(UU) {
        var XU;
        if (!this.kp)
          if ("entities" !== UU.kind)
            if ("open" !== UU.kind) {
              var zU, cU;
              if ("snapshot" === UU.kind)(null === (zU = UU.snapshot) || void 0 === zU ? void 0 : zU.zoneId) !== (null === (cU = this.map) || void 0 === cU ? void 0 : cU.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = UU.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === UU.kind) {
                var yU;
                UU.requestId === (null === (yU = this.pending) || void 0 === yU ? void 0 : yU.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (UU.requestId === (null === (XU = this.pending) || void 0 === XU ? void 0 : XU.requestId)) {
                var QU;
                this.pending = null, this.feedbackKey = null !== (QU = UU.errorKey) && void 0 !== QU ? QU : "", null === UU.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = UU.entities
      }
      LY() {
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
          presentation: this.map ? QU(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var YU = zU(344);
    const NU = 67.5 * Math.PI / 180;

    function IU(UU, XU) {
      const zU = Math.abs(UU);
      if (zU > NU || XU.trackHalfWidth <= 0) return null;
      const cU = XU.trackHalfWidth,
        yU = XU.screenHalfWidth / (XU.tanHalfFovX * Math.max(.5, Math.cos(XU.pitch))),
        QU = Math.min(Math.atan(.6 * cU / yU), .75 * NU),
        AU = yU * Math.tan(QU);
      let FU;
      if (zU <= QU) FU = yU * Math.tan(zU);
      else {
        const UU = NU - QU,
          XU = Math.max(0, yU * UU / (Math.cos(QU) ** 2 * (cU - AU)) - 1),
          oU = (zU - QU) / UU;
        FU = AU + (cU - AU) * (1 + XU) * oU / (1 + XU * oU)
      }
      return 50 + Math.sign(UU) * FU * 50 / cU
    }
    class pU {
      constructor(UU, XU) {
        this.map = UU, this.visited = XU, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = XU ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const UU = this.map.getSnapshot().map;
        return !UU || UU.insideDungeon ? [] : UU.landmarks.filter((UU => UU.visited === this.visited)).map((UU => {
          var XU, zU;
          return {
            id: `landmark:${UU.id}`,
            position: UU.position,
            icon: null !== (XU = UU.icon) && void 0 !== XU ? XU : "unknown",
            nameKey: null !== (zU = UU.nameKey) && void 0 !== zU ? zU : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class aU {
      constructor(UU, XU, zU, cU) {
        this.map = UU, this.kind = XU, this.position = zU, this.alive = cU, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = XU, this.range = "enemy" === XU ? 48 : 64, this.limit = 12
      }
      wG(UU) {
        if ("enemy" !== this.kind || this.alive(UU.FX)) return this.position(UU.FX)
      }
      getPoints() {
        const UU = [];
        for (const cU of this.map.getEntities()) {
          if (cU.kind !== this.kind || "enemy" === this.kind && !this.alive(cU.compassEntityId)) continue;
          const yU = this.position(cU.compassEntityId);
          var XU, zU;
          if (yU) UU.push({
            id: `${this.kind}:${cU.compassEntityId}`,
            FX: cU.compassEntityId,
            kind: this.kind,
            icon: null !== (XU = cU.icon) && void 0 !== XU ? XU : cU.npcSkin ? `npc_${cU.npcSkin}` : this.kind,
            displayName: cU.displayName,
            position: yU,
            nameKey: null !== (zU = cU.nameKey) && void 0 !== zU ? zU : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return UU
      }
    }
    class tU {
      constructor(UU) {
        this.map = UU, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const UU = this.map.getSnapshot().map;
        return !UU || UU.insideDungeon ? [] : UU.portals.map((UU => {
          var XU;
          return {
            id: "portal:" + UU.id,
            kind: "portal",
            position: UU.position,
            nameKey: null !== (XU = UU.nameKey) && void 0 !== XU ? XU : "skyblockGame:compassUnvisitedZone",
            icon: UU.visited ? "dungeons" === UU.destination ? "portal_orange" : "portal" : "unknown",
            colour: UU.colour
          }
        }))
      }
    }
    class gU {
      constructor(UU) {
        this.target = UU, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const UU = this.target();
        return UU ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: UU.position,
          nameKey: UU.nameKey
        }] : []
      }
    }

    function kU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.position;
      const yU = cU[0] - XU[0],
        QU = cU[2] - XU[2];
      return {
        ...UU,
        position: cU,
        offset: YU.d.computeShortestRotation(zU, (0, YU.Cb)([yU, 0, QU])),
        distance: Math.hypot(yU, cU[1] - XU[1], QU)
      }
    }
    let GU;

    function BU(UU, XU) {
      var zU;
      return (null === (zU = GU) || void 0 === zU ? void 0 : zU.locale) !== XU && (GU = {
        locale: XU,
        near: new Intl.NumberFormat(XU, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(XU, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (UU < 10 ? GU.near : GU.far).format(UU)
    }
    class ZU {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(UU) {
        return this.providers.set(UU.id, UU), this.refreshAt = 0, () => {
          this.providers.get(UU.id) === UU && (this.providers.delete(UU.id), this.refreshAt = 0)
        }
      }
      frame(UU, XU, zU) {
        if (zU >= this.refreshAt) {
          this.refreshAt = zU + 200, this.candidates = [];
          for (const XU of this.providers.values()) {
            if (!XU.enabled) continue;
            const zU = XU.getPoints().map((XU => {
              const zU = XU.position;
              return {
                point: XU,
                distance: Math.hypot(zU[0] - UU[0], zU[1] - UU[1], zU[2] - UU[2])
              }
            })).filter((UU => UU.distance <= XU.range)).sort(((UU, XU) => UU.distance - XU.distance)).slice(0, XU.limit);
            for (const {
                point: UU
              }
              of zU) this.candidates.push({
              provider: XU,
              point: UU
            })
          }
        }
        const cU = [];
        for (const {
            point: yU,
            provider: QU
          }
          of this.candidates) {
          if (!QU.enabled) continue;
          const zU = QU.wG ? QU.wG(yU) : yU.position;
          if (zU) {
            const QU = kU(yU, UU, XU, zU);
            Math.abs(QU.offset) <= NU && cU.push(QU)
          }
        }
        return cU
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var RU = zU(37334),
      PU = zU(61);
    const WU = [{
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
      dU = WU.length;

    function LU(UU) {
      return UU >= dU ? 1 : UU + 1
    }
    const eU = "skyblockQuests",
      CU = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      wU = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function qU(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const zU = Math.max(0, Math.floor(UU)),
        cU = Math.floor(zU % 1e3 / 100),
        yU = Math.floor(zU / 1e3),
        QU = yU % 60,
        AU = Math.floor(yU / 60),
        FU = AU % 60,
        oU = Math.floor(AU / 60),
        DU = UU => UU < 10 ? `0${UU}` : String(UU),
        EU = XU ? `.${cU}` : "";
      return oU > 0 ? `${oU}:${DU(FU)}:${DU(QU)}${EU}` : `${FU}:${DU(QU)}${EU}`
    }
    const OU = "devquests",
      SU = "none",
      rU = {
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
      uU = "Compressed Messy Stone",
      fU = {
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
      iU = ["Stone", "Diorite", "Andesite", "Granite"],
      HU = new Set(iU),
      MU = (Object.keys(fU), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const vU = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function VU(UU, XU) {
      const zU = Math.floor(5 * UU / (2 * XU + 1));
      return Math.min(4, Math.max(0, zU))
    }
    var sU = zU(1258);
    var nU = zU(37067);
    var mU = zU(37325),
      lU = zU(31),
      xU = zU(9449);
    const JU = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      jU = 1e3;

    function KU(UU) {
      return Math.max(0, UU)
    }

    function bU(UU) {
      return 1 + .01 * KU(UU)
    }

    function TU(UU) {
      return 1 + .005 * KU(UU)
    }

    function hU(UU) {
      return 1 + .005 * KU(UU)
    }

    function UX(UU) {
      return .01 * KU(UU)
    }

    function XX(UU) {
      return 150 / (150 + KU(UU))
    }

    function zX(UU) {
      return 1 + .002 * KU(UU)
    }

    function cX(UU) {
      return Math.round(10 * UU) / 10
    }

    function yX(UU, XU) {
      switch (UU) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: cX(100 * (TU(XU) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: cX(100 * (bU(XU) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: cX(100 * (hU(XU) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: cX(100 * UX(XU))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: cX(100 * (1 - XX(XU)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: cX(100 * (zX(XU) - 1))
          }
      }
    }

    function QX(UU) {
      return "farming" === UU ? 200 : 100
    }

    function AX(UU, XU) {
      if (!Number.isSafeInteger(UU) || UU < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const zU = QX(XU),
        cU = UU => function(UU, XU) {
          return QX(UU) * XU * (XU + 1) / 2
        }(XU, UU);
      let yU = Math.min(jU, Math.floor((Math.sqrt(8 * UU / zU + 1) - 1) / 2));
      return yU < jU && cU(yU + 1) <= UU ? yU++ : cU(yU) > UU && yU--, {
        totalXp: UU,
        level: yU,
        xpIntoLevel: UU - cU(yU),
        xpForNextLevel: yU === jU ? null : zU * (yU + 1)
      }
    }
    const FX = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function oX(UU) {
      return FX.has(UU)
    }
    const DX = new Set(YU.sb);

    function EX(UU) {
      return DX.has(UU)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const YX = {
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
      NX = {
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
      IX = {
        ...NX,
        ...Object.fromEntries(Object.entries(MU).map((UU => {
          let [XU, zU] = UU;
          return [XU, 9 * NX[zU]]
        })))
      },
      pX = {
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
      aX = {
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
    const tX = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      gX = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function kX(UU) {
      return `rgb(${gX[UU].join(", ")})`
    }

    function GX(UU, XU, zU) {
      if (!zU) return UU(XU);
      const cU = {};
      for (const [yU, QU] of Object.entries(zU)) cU[yU] = "string" === typeof QU ? QU : UU(QU.translationKey);
      return UU(XU, cU)
    }
    class BX {
      constructor(UU, XU) {
        this.now = UU, this.getJournal = XU, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.uD = !1, this.onShown = () => {}
      }
      enqueue(UU) {
        const XU = ZX(UU);
        if (XU) this.pending.push(UU);
        else {
          const XU = this.pending.findIndex(ZX);
          this.pending.splice(-1 === XU ? this.pending.length : XU, 0, UU)
        }
        return (null === this.current || null !== this.followUp && !XU) && (this.advance(), !0)
      }
      setHeld(UU) {
        return this.uD = UU, !UU && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      LY() {
        const UU = this.getJournal(),
          XU = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === XU ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === XU || void 0 === XU ? void 0 : XU.kind) && UU && UU.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === XU || void 0 === XU ? void 0 : XU.kind)) {
          const UU = this.findFollowUp(this.current);
          if ("step" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || UU.questId !== XU.questId || UU.step.id !== XU.step.id) return this.showFollowUp(UU, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(UU, XU, zU) {
        var cU, yU, QU, AU;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, UU, zU);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, UU);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, UU, XU);
        const {
          questCompletionKind: FU,
          questCompletionNameKey: oU
        } = this.current, DU = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, EU = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, YU = "step" === (null === (cU = this.followUp) || void 0 === cU ? void 0 : cU.kind) ? this.followUp : null, NU = "explore" === (null === (yU = this.followUp) || void 0 === yU ? void 0 : yU.kind);
        let IU;
        return IU = NU ? UU("skyblockGame:questExploreTitle") : null !== YU ? "quest" === FU ? UU("skyblockGame:questNextQuestTitle", {
          quest: UU(YU.questNameKey)
        }) : UU("skyblockGame:questNextStepTitle") : UU("started" === FU ? "skyblockGame:questStartedTitle" : "quest" === FU ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? FU : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: IU,
          name: NU ? XU("skyblockGame:questExploreName") : null !== YU ? GX(XU, YU.step.nameKey, YU.step.nameParams) : GX(XU, oU, DU),
          description: NU ? XU("skyblockGame:questExploreDescription") : null === YU ? null : GX(XU, YU.step.descriptionKey, YU.step.descriptionParams),
          reward: null === this.followUp && EU > 0 ? XU("skyblockGame:questCoinRewardSuffix", {
            amount: EU.toLocaleString(zU)
          }) : null,
          iconItem: null !== (QU = null === YU || void 0 === YU ? void 0 : YU.step.questIconItem) && void 0 !== QU ? QU : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== YU && (null === (AU = this.getJournal()) || void 0 === AU ? void 0 : AU.trackedQuestId) === YU.questId ? YU.step.nameKey : null
        }
      }
      getSkillLevelView(UU, XU, zU) {
        let {
          skill: cU,
          beforeLevel: yU,
          level: QU
        } = UU;
        const AU = yX(cU, yU),
          FU = yX(cU, QU);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: XU(`skyblockGame:${cU}`),
          name: XU("skyblockGame:skillLevelUp", {
            to: QU.toLocaleString(zU)
          }),
          description: AU.percent === FU.percent ? null : XU(`${FU.translationKey}Change`, {
            before: AU.percent.toLocaleString(zU),
            after: FU.percent.toLocaleString(zU)
          }),
          reward: null,
          iconItem: tX[cU],
          accent: kX(cU),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(UU, XU) {
        let {
          landmarkNameKey: zU
        } = UU;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: XU("skyblockGame:landmarkDiscovered"),
          name: XU(zU),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(UU, XU, zU) {
        let {
          titleKey: cU,
          textKey: yU,
          params: QU = {},
          nameKeys: AU = {},
          iconItem: FU = null
        } = UU;
        const oU = {
          ...QU
        };
        for (const [DU, EU] of Object.entries(AU)) oU[DU] = XU(EU);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: XU(cU),
          name: zU(yU, oU),
          description: null,
          reward: null,
          iconItem: FU,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var UU;
        if (null !== this.followUp) return 5600;
        switch (null === (UU = this.current) || void 0 === UU ? void 0 : UU.questCompletionKind) {
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
      showFollowUp(UU, XU) {
        null === UU || this.uD ? this.advance() : (this.followUp = UU, this.token++, this.shownAt = this.now(), this.expiresAt = null !== XU && void 0 !== XU ? XU : this.shownAt + this.durationMs())
      }
      findFollowUp(UU) {
        var XU;
        const zU = this.getJournal();
        if (!zU || this.hasPendingQuestPopup() || ZX(UU)) return null;
        const cU = "started" === UU.questCompletionKind ? zU.active.some((XU => XU.id === UU.questCompletionQuestId)) : "quest" === UU.questCompletionKind ? zU.completed.some((XU => XU.id === UU.questCompletionQuestId)) : [...zU.active, ...zU.completed].some((XU => XU.id === UU.questCompletionQuestId && XU.subquests.some((XU => XU.id === UU.questCompletionStepId && "completed" === XU.status))));
        if (!cU) return null;
        if ("quest" === UU.questCompletionKind && 0 === zU.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const yU = zU.active.find((UU => UU.id === zU.trackedQuestId)),
          QU = null !== (XU = null === yU || void 0 === yU ? void 0 : yU.subquests.find((UU => "ready" === UU.status))) && void 0 !== XU ? XU : null === yU || void 0 === yU ? void 0 : yU.subquests.find((UU => "active" === UU.status));
        return QU ? {
          kind: "step",
          questId: yU.id,
          questNameKey: yU.nameKey,
          step: QU
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((UU => !ZX(UU)))
      }
      advance() {
        var UU;
        this.current = this.uD ? null : null !== (UU = this.pending.shift()) && void 0 !== UU ? UU : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function ZX(UU) {
      return RX(UU.questCompletionKind)
    }

    function RX(UU) {
      return "skillLevel" === UU || "landmark" === UU || "npcNote" === UU
    }
    var PX = zU(39331),
      WX = zU(39339),
      dX = zU(39296),
      LX = zU(39367);
    const eX = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class CX {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.kp = !1, this.mountCompass = UU => {
          var XU;
          if (null === (XU = this.stopLayout) || void 0 === XU || XU.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !UU || this.kp) return;
          const zU = UU.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: UU,
            track: zU,
            label: UU.querySelector(".SkyblockCompassLabel")
          }, zU.replaceChildren();
          for (let yU = 0; yU < 4; yU++) {
            const UU = document.createElement("span");
            UU.className = "SkyblockCompassCardinal", zU.appendChild(UU), this.cardinals.push(UU)
          }
          const cU = (0, dX.e)(eX, [UU], this.layout);
          this.stopLayout = () => {
            cU(), zU.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = UU => {
          this.terrain = this.kp ? null : UU, this.render(this.frame)
        }, this.mountMinimapSearchArea = UU => {
          this.mountSearchArea("minimap", UU)
        }, this.mountMapSearchArea = UU => {
          this.mountSearchArea("map", UU)
        }, this.mountPlayer = UU => {
          this.player = this.kp ? null : UU, this.render(this.frame)
        }, this.mountWaypoint = UU => {
          var XU, zU;
          if (null === (XU = this.stopWaypoint) || void 0 === XU || XU.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !UU || this.kp) return;
          const cU = UU.querySelector(".SkyblockQuestWaypointMarker");
          cU.replaceChildren((0, WX.e)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: UU,
            marker: cU,
            clip: UU.querySelector(".SkyblockQuestWaypointTextClip"),
            text: UU.querySelector(".SkyblockQuestWaypointText"),
            label: UU.querySelector(".SkyblockQuestWaypointLabel"),
            distance: UU.querySelector(".SkyblockQuestWaypointDistance"),
            hint: UU.querySelector(".SkyblockQuestWaypointHint")
          };
          const yU = () => {
              this.waypointMarkerSize = {
                width: cU.offsetWidth,
                height: cU.offsetHeight
              }, this.waypointInset = {
                x: cU.offsetWidth / 2 + 8,
                top: cU.offsetHeight + 8,
                bottom: 8
              }
            },
            QU = new ResizeObserver((() => {
              yU(), this.render(this.frame)
            }));
          QU.observe(cU, {
            box: "border-box"
          });
          const AU = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", AU), null === (zU = window.visualViewport) || void 0 === zU || zU.addEventListener("resize", AU), this.stopWaypoint = () => {
            var UU;
            QU.disconnect(), window.removeEventListener("resize", AU), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", AU)
          }, AU(), yU(), this.render(this.frame)
        }, this.mountWaypointOrigin = UU => {
          var XU;
          if (null === (XU = this.stopWaypointOrigin) || void 0 === XU || XU.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = UU && !this.kp ? Number(UU.dataset.notificationToken) : null, UU && !this.kp && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const XU = {
              nameKey: UU.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = XU;
            const zU = () => {
                const zU = UU.getBoundingClientRect();
                XU.x = (zU.left + zU.width / 2) / window.innerWidth * 100, XU.y = (zU.top + zU.height / 2) / window.innerHeight * 100
              },
              cU = new ResizeObserver(zU);
            cU.observe(UU.parentElement), cU.observe(UU), window.addEventListener("resize", zU), this.stopWaypointOrigin = () => {
              cU.disconnect(), window.removeEventListener("resize", zU)
            }, zU()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const UU = this.compass.root,
            XU = getComputedStyle(UU),
            zU = getComputedStyle(document.documentElement),
            cU = parseFloat(zU.fontSize),
            yU = parseFloat(XU.getPropertyValue("--compass-icon-size")) * cU,
            QU = "1" === XU.getPropertyValue("--compass-fit-top").trim(),
            AU = QU ? 1 : 8,
            FU = Array.from(document.querySelectorAll(eX), (UU => {
              var XU;
              return (null !== (XU = UU.querySelector(".MiddleTextTop")) && void 0 !== XU ? XU : UU).getBoundingClientRect()
            })).filter((UU => UU.width > 0 && UU.height > 0));
          let oU = (parseFloat(zU.getPropertyValue("--notchTop")) || 0) + AU,
            DU = "";
          if (QU) {
            const XU = window.innerWidth / 2,
              zU = UU.getBoundingClientRect().height,
              QU = [oU, ...FU.map((UU => Math.max(oU, UU.bottom + AU)))].sort(((UU, XU) => UU - XU));
            for (const UU of QU) {
              let QU = XU - 8;
              for (const cU of FU) cU.bottom + AU <= UU || cU.top >= UU + zU + AU || (QU = Math.min(QU, cU.right <= XU ? XU - cU.right - 8 : cU.left - XU - 8));
              const EU = 2 * QU - yU;
              if (EU >= 16 * cU) {
                DU = `${EU}px`, oU = UU;
                break
              }
            }
          }
          UU.style.maxWidth !== DU && (UU.style.maxWidth = DU);
          const EU = UU.getBoundingClientRect(),
            YU = this.compassSize.trackHalfWidth;
          if (EU.width > 0) {
            const UU = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: UU.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * yU / UU.width
          }
          if (!DU)
            for (const NU of FU) NU.right > EU.left - 8 && NU.left < EU.right + 8 && (oU = Math.max(oU, NU.bottom + AU));
          UU.style.top = `${oU}px`, this.compassSize.trackHalfWidth !== YU && this.render(this.frame)
        }
      }
      mountSearchArea(UU, XU) {
        this.searchAreas[UU] = this.kp ? null : XU, this.render(this.frame)
      }
      render(UU) {
        if (this.kp) return;
        if (this.frame = UU, this.compass && (wX(this.compass.root, !UU), UU)) {
          const XU = this.compassSize.trackHalfWidth / 50;
          UU.compass.cardinals.forEach(((UU, zU) => {
            const cU = this.cardinals[zU];
            cU.textContent !== UU.name && (cU.textContent = UU.name), wX(cU, UU.hidden), cU.style.translate = UU.left * XU + "px"
          }));
          const zU = new Set;
          UU.compass.markers.forEach(((cU, yU) => {
            var QU;
            zU.add(cU.id);
            let AU = this.markers.get(cU.id);
            AU || (AU = document.createElement("span"), AU.className = "SkyblockCompassMarker", this.markers.set(cU.id, AU), this.compass.track.appendChild(AU)), AU.dataset.icon !== cU.icon && (AU.dataset.icon = cU.icon, AU.replaceChildren((0, WX.e)(cU.icon))), AU.style.color = null !== (QU = cU.colour) && void 0 !== QU ? QU : "", AU.style.translate = cU.left * XU + "px", AU.style.zIndex = String(UU.compass.markers.length - yU), AU.title !== cU.name && (AU.title = cU.name)
          }));
          for (const [UU, cU] of this.markers) zU.has(UU) || (cU.remove(), this.markers.delete(UU));
          this.compass.label.textContent !== UU.compass.label && (this.compass.label.textContent = UU.compass.label)
        }
        this.terrain && (wX(this.terrain, !(null !== UU && void 0 !== UU && UU.minimap)), null !== UU && void 0 !== UU && UU.minimap && (this.terrain.style.transform = UU.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", UU.minimap.iconRotation)));
        const XU = null === UU || void 0 === UU ? void 0 : UU.searchArea;
        for (const zU of [this.searchAreas.minimap, this.searchAreas.map])
          if (zU && (wX(zU, !XU), XU)) {
            if (this.searchAreaPath.seed !== XU.shapeSeed && (this.searchAreaPath = {
                seed: XU.shapeSeed,
                d: (0, LX.i)((0, LX.e)(XU.shapeSeed))
              }), zU.dataset.shapeSeed !== XU.shapeSeed) {
              zU.dataset.shapeSeed = XU.shapeSeed;
              for (const UU of zU.querySelectorAll("path")) UU.setAttribute("d", this.searchAreaPath.d)
            }
            zU.style.left = `${XU.left}%`, zU.style.top = `${XU.top}%`, zU.style.width = `${XU.width}%`, zU.style.height = `${XU.height}%`
          } if (this.player && (wX(this.player, !(null !== UU && void 0 !== UU && UU.player) || UU.player.hidden), null !== UU && void 0 !== UU && UU.player && (this.player.style.left = `${UU.player.left}%`, this.player.style.top = `${UU.player.top}%`, this.player.style.setProperty("--map-player-rotation", UU.player.rotation))), this.waypoint) {
          const {
            root: XU,
            marker: zU,
            clip: cU,
            text: yU,
            label: QU,
            distance: AU,
            hint: FU
          } = this.waypoint, oU = !(null !== UU && void 0 !== UU && UU.waypoint) || null !== UU.waypoint.popupToken && UU.waypoint.popupToken !== this.waypointOriginToken;
          wX(XU, oU);
          let DU = 1;
          const EU = this.waypointLaunch;
          if (!oU && EU && UU.waypoint.nameKey === EU.nameKey) {
            const UU = performance.now();
            EU.startedAt ??= UU, DU = Math.min(1, Math.max(0, (UU - EU.startedAt - 450) / 1e3)), zU.style.opacity = String(Math.min(1, (UU - EU.startedAt) / 150)), 1 === DU && (this.waypointLaunch = null)
          } else zU.style.opacity = "", EU && null !== EU.startedAt && (this.waypointLaunch = null);
          if (XU.classList.toggle("Launching", DU < 1), null !== UU && void 0 !== UU && UU.waypoint) {
            const XU = this.waypointInset,
              oU = "quest_talk" === UU.waypoint.markerIcon ? function(UU, XU, zU) {
                if (!UU.text || null === UU.blockHeight || 0 === UU.nearness) return UU;
                const cU = UU.blockHeight / 100 * zU.height,
                  yU = -UU.nearness * (qX * cU + XU.width / 2),
                  QU = UU.nearness * (OX * cU + XU.height / 2);
                return {
                  ...UU,
                  text: {
                    x: UU.text.x + yU / zU.width * 100,
                    y: UU.text.y + QU / zU.height * 100
                  }
                }
              }(UU.waypoint, this.waypointMarkerSize, this.viewport) : UU.waypoint,
              YU = (0, PX.d)(oU, XU, this.viewport),
              NU = DU * DU * (3 - 2 * DU),
              IU = DU < 1 ? EU.x + (YU.x - EU.x) * NU : YU.x,
              pU = DU < 1 ? EU.y + (YU.y - EU.y) * NU : YU.y;
            zU.style.translate = `${IU}vw ${pU}vh`, cU.style.clipPath = `inset(${XU.top}px ${XU.x}px ${XU.bottom}px)`, wX(yU, DU < 1 || !UU.waypoint.text), yU.style.opacity = String(1 - UU.waypoint.nearness), UU.waypoint.text && (yU.style.translate = `${UU.waypoint.text.x}vw ${UU.waypoint.text.y}vh`), QU.textContent !== UU.waypoint.name && (QU.textContent = UU.waypoint.name), this.markerIcon !== UU.waypoint.markerIcon && (this.markerIcon = UU.waypoint.markerIcon, zU.replaceChildren((0, WX.e)(this.markerIcon))), AU.textContent !== UU.waypoint.distance && (AU.textContent = UU.waypoint.distance), wX(FU, null === UU.waypoint.hint), null !== UU.waypoint.hint && FU.textContent !== UU.waypoint.hint && (FU.textContent = UU.waypoint.hint)
          }
        }
      }
      dispose() {
        var UU, XU;
        this.mountWaypointOrigin(null), this.render(null), null === (UU = this.stopLayout) || void 0 === UU || UU.call(this), this.stopLayout = null, null === (XU = this.stopWaypoint) || void 0 === XU || XU.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.kp = !0
      }
    }

    function wX(UU, XU) {
      UU.hidden !== XU && (UU.hidden = XU)
    }
    const qX = .55,
      OX = .6;
    var SX = zU(39315);
    const rX = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class uX {
      constructor(UU, XU, zU, cU) {
        this.map = UU, this.quests = XU, this.compass = zU, this.display = new CX, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.kp = !1, this.snapshot = null, this.texts = new Map, this.translate = cU
      }
      setTranslator(UU, XU) {
        this.translate = UU, this.locale = XU, this.metresFormat = new Intl.NumberFormat(XU), this.texts.clear()
      }
      translateCached(UU, XU) {
        const zU = void 0 === XU ? UU : `${UU} ${XU}`;
        let cU = this.texts.get(zU);
        return void 0 === cU && (this.texts.size >= 500 && this.texts.clear(), cU = this.translate(UU, void 0 === XU ? void 0 : {
          distance: XU
        }), this.texts.set(zU, cU)), cU
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(UU, XU, zU) {
        if (this.kp) return;
        if (!UU) return this.snapshot = null, void this.display.render(null);
        const cU = this.map.getSnapshot().map,
          QU = zU.cameraHeading,
          AU = {
            ...this.display.compassSize,
            tanHalfFovX: zU.tanHalfFovX,
            pitch: zU.cameraPitch
          },
          FU = [];
        if (cU)
          for (const yU of this.compass.frame(UU, QU, XU)) {
            const UU = IU(yU.offset, AU);
            null !== UU && FU.push({
              ...yU,
              left: UU
            })
          }
        const oU = function(UU, XU) {
            const zU = [],
              cU = UU => "quest" === UU.kind ? UU.distance - 1 : UU.distance,
              yU = [...UU].sort(((UU, XU) => cU(UU) - cU(XU) || UU.id.localeCompare(XU.id)));
            for (const QU of yU) {
              let UU = !1;
              if ("quest" !== QU.kind)
                for (const cU of zU)
                  if (Math.abs(cU.left - QU.left) < XU) {
                    UU = !0;
                    break
                  } UU || zU.push(QU)
            }
            return zU
          }(FU, this.display.compassSpacing),
          DU = function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              zU = null;
            for (const cU of UU) Math.abs(cU.offset) <= XU && (!zU || cU.distance < zU.distance || cU.distance === zU.distance && Math.abs(cU.offset) < Math.abs(zU.offset)) && (zU = cU);
            return zU
          }(oU),
          EU = UU => {
            var XU;
            return null !== (XU = UU.displayName) && void 0 !== XU ? XU : this.translateCached(UU.nameKey)
          },
          NU = {
            compass: {
              markers: oU.map((UU => ({
                id: UU.id,
                icon: UU.icon,
                colour: UU.colour,
                name: EU(UU),
                left: UU.left
              }))),
              cardinals: SX.d.map((UU => {
                let {
                  name: XU,
                  bearing: zU
                } = UU;
                const cU = IU(YU.d.computeShortestRotation(QU, zU), AU);
                return {
                  name: XU,
                  left: null !== cU && void 0 !== cU ? cU : 0,
                  hidden: null === cU
                }
              })),
              label: DU ? `${EU(DU)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",BU(DU.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== cU && void 0 !== cU && cU.background) {
          const XU = UU[0] - cU.mapOrigin[0],
            zU = UU[2] - cU.mapOrigin[2],
            {
              rotation: AU,
              transform: FU
            } = (0, yU.i)(XU, zU, QU, cU.background.bounds);
          NU.minimap = {
            transform: FU,
            iconRotation: -AU + "rad"
          };
          const [oU, DU] = (0, yU.e)(XU, zU, cU.background.bounds);
          NU.player = {
            left: oU,
            top: DU,
            hidden: oU < 0 || DU < 0 || oU > 100 || DU > 100,
            rotation: -AU + "rad"
          }
        }
        const {
          waypoint: pU
        } = this.quests.getSnapshot();
        if ("search" === (null === pU || void 0 === pU ? void 0 : pU.questMarkerIcon) && null !== cU && void 0 !== cU && cU.background) {
          const {
            bounds: UU
          } = cU.background, [XU, zU] = (0, yU.e)(pU.position[0] - cU.mapOrigin[0], pU.position[2] - cU.mapOrigin[2], UU);
          NU.searchArea = {
            left: XU,
            top: zU,
            width: 6400 / (UU.mapMaxX - UU.mapMinX),
            height: 6400 / (UU.mapMaxZ - UU.mapMinZ),
            shapeSeed: pU.nameKey
          }
        }
        const aU = this.quests.getNotificationSnapshot(),
          tU = "completion" === (null === aU || void 0 === aU ? void 0 : aU.phase) && !RX(aU.kind);
        if (pU && !tU) {
          const XU = Math.hypot(...pU.position.map(((XU, zU) => XU - UU[zU]))),
            cU = Math.round(XU),
            yU = "talk" === pU.questMarkerIcon ? Math.min(1, Math.max(0, (10 - XU) / 5)) : 0,
            QU = zU.projectWorldPosToViewport(pU.position),
            AU = QU && zU.projectWorldPosToViewport([pU.position[0], pU.position[1] - 1, pU.position[2]]);
          NU.waypoint = {
            ...zU.projectWorldPosToScreenPos(pU.position),
            text: QU,
            nearness: yU * yU * (3 - 2 * yU),
            blockHeight: QU && AU ? AU.y - QU.y : null,
            name: this.translateCached(pU.nameKey),
            nameKey: pU.nameKey,
            markerIcon: pU.questMarkerIcon ? rX[pU.questMarkerIcon] : "quest",
            popupToken: (null === aU || void 0 === aU ? void 0 : aU.waypointNameKey) === pU.nameKey ? aU.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(cU)),
            hint: "search" === pU.questMarkerIcon && Math.hypot(pU.position[0] - UU[0], pU.position[2] - UU[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = NU, this.display.render(NU)
      }
      dispose() {
        this.kp = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const fX = "skyblockSkillsView";
    class iX extends oU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          zU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU => UU,
          cU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          yU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => UU;
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = XU, this.translate = zU, this.locale = cU, this.itemName = yU, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, this.locale = XU, this.itemName = zU, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(UU) {
        let XU = this.skillText.get(UU);
        return XU || (XU = {
          label: this.translate(`skyblockGame:${UU}`),
          description: this.translate(`skyblockGame:${UU}Description`)
        }, this.skillText.set(UU, XU)), XU
      }
      sources(UU) {
        if ("mining" === UU || "fishing" === UU) return this.buildSources(UU);
        let XU = this.sourceText.get(UU);
        return XU || (XU = this.buildSources(UU), this.sourceText.set(UU, XU)), XU
      }
      buildSources(UU) {
        const XU = this.translate;
        return "exploration" === UU ? [XU("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), XU("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === UU ? [XU("skyblockGame:logSource", {
          xp: this.number(YX["Maple Log"])
        })] : "combat" === UU ? [XU("skyblockGame:creatureKillSource"), XU("skyblockGame:noEnvironmentalXp")] : "farming" === UU ? [XU("skyblockGame:cropSource", {
          xp: this.number(pX["Wheat|FreshlyGrown"])
        }), XU("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), XU("skyblockGame:noYoungCropXp")] : Object.entries("mining" === UU ? IX : aX).map((UU => {
          let [zU, cU] = UU;
          return XU("skyblockGame:itemXpSource", {
            item: this.itemName(zU),
            xp: this.number(cU)
          })
        }))
      }
      number(UU) {
        return UU.toLocaleString(this.locale)
      }
      benefit(UU, XU) {
        const zU = yX(UU, XU);
        return this.translate(zU.translationKey, {
          bonus: this.number(zU.percent)
        })
      }
      PY(UU) {
        if (!this.kp) {
          if ("snapshot" === UU.kind) this.progress = UU.progress, this.pending.clear(), this.recent = null;
          else if ("award" === UU.kind && this.progress) {
            const {
              award: XU
            } = UU;
            this.progress = {
              ...this.progress,
              [XU.skill]: XU.after
            };
            for (const [UU, cU] of this.pending) cU.skill === XU.skill && this.pending.delete(UU);
            const zU = XU.after.level > XU.before.level;
            this.recordGain(XU.skill, XU.amount, zU ? ++this.nextLevelUpToken : null), zU && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: XU.skill,
              beforeLevel: XU.before.level,
              level: XU.after.level
            })
          } else {
            if ("rejectBlock" === UU.kind) return void this.rejectBlock(UU.position);
            if ("open" === UU.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(UU, XU, zU) {
        if (!this.progress || this.kp || zU) return;
        const cU = function(UU, XU) {
          const zU = UU.split("|")[0];
          return "Air" === XU || XU === `Barkless ${UU}` ? Object.hasOwn(YX, zU) ? {
            skill: "foraging",
            amount: YX[zU]
          } : "Air" !== XU ? null : Object.hasOwn(IX, UU) ? {
            skill: "mining",
            amount: IX[UU]
          } : oX(UU) ? {
            skill: "farming",
            amount: 10
          } : EX(UU) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(pX, UU) ? {
            skill: "farming",
            amount: pX[UU]
          } : Object.hasOwn(fU, UU) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(XU, "Air");
        if (!cU) return;
        const yU = UU.join(",");
        if (this.pending.has(yU)) return;
        const QU = this.predictedProgress(cU.skill).totalXp + cU.amount;
        Number.isSafeInteger(QU) && (this.pending.set(yU, {
          ...cU,
          expires: this.now() + 2e3
        }), this.recordGain(cU.skill, 0), this.emit())
      }
      rejectBlock(UU) {
        this.pending.delete(UU.join(",")) && this.emit()
      }
      LY() {
        if (this.kp) return;
        let UU = !1;
        for (const [XU, zU] of this.pending) zU.expires <= this.now() && (this.pending.delete(XU), UU = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, UU = !0), UU && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(UU, XU) {
        var zU, cU;
        let yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QU = (null === (zU = this.recent) || void 0 === zU ? void 0 : zU.skill) === UU && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          AU = (null === (cU = this.recent) || void 0 === cU ? void 0 : cU.skill) === UU && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: UU,
          confirmed: QU + XU,
          expires: this.now() + 3e3,
          levelUpToken: null !== yU && void 0 !== yU ? yU : AU
        }
      }
      pendingXp(UU) {
        let XU = 0;
        for (const zU of this.pending.values()) zU.skill === UU && (XU += zU.amount);
        return XU
      }
      predictedProgress(UU) {
        const XU = this.progress[UU],
          zU = this.pendingXp(UU);
        return zU ? AX(XU.totalXp + zU, UU) : XU
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var UU, XU, zU;
        const cU = this.progress ? JU.map((UU => {
            const XU = this.predictedProgress(UU);
            return {
              ...this.text(UU),
              icon: tX[UU],
              benefit: this.benefit(UU, XU.level),
              sources: this.sources(UU),
              id: UU,
              selected: UU === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(XU.level)
              }),
              xp: null === XU.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(XU.xpIntoLevel),
                target: this.number(XU.xpForNextLevel)
              }),
              percent: null === XU.xpForNextLevel ? 100 : Math.min(100, XU.xpIntoLevel / XU.xpForNextLevel * 100)
            }
          })) : [],
          yU = cU.find((UU => {
            var XU;
            return UU.id === (null === (XU = this.recent) || void 0 === XU ? void 0 : XU.skill)
          })),
          QU = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: cU,
          detail: null !== (UU = cU.find((UU => UU.selected))) && void 0 !== UU ? UU : null,
          overallLevel: this.progress ? JU.reduce(((UU, XU) => UU + this.predictedProgress(XU).level), 0) : null,
          hud: yU && QU > 0 ? {
            skill: yU,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(QU)
            }),
            levelUpToken: null !== (XU = null === (zU = this.recent) || void 0 === zU ? void 0 : zU.levelUpToken) && void 0 !== XU ? XU : null,
            colour: kX(yU.id)
          } : null
        }
      }
    }
    const HX = Math.max(1600, 600, 950) + 400,
      MX = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      vX = "skyblockQuestsView",
      VX = "skyblockQuestNotificationView";
    class sX extends oU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          AU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(UU, cU, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = XU, this.translate = zU, this.now = yU, this.locale = QU, this.publishNotification = AU, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var UU, XU;
          this.selected = null !== (UU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.trackedQuestId) && void 0 !== UU ? UU : null, this.show()
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const UU = this.snapshot.detail;
          !this.kp && null !== UU && void 0 !== UU && UU.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(UU.id), this.emit())
        }, this.viewDialogue = () => {
          const UU = this.snapshot.detail;
          var XU;
          UU && (null === (XU = this.onViewDialogue) || void 0 === XU || XU.call(this, UU.id))
        }, this.notifications = new BX(yU, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var UU, XU;
        return null !== (UU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.trackedQuestId) && void 0 !== UU ? UU : null
      }
      notify(UU) {
        !this.kp && this.notifications.enqueue(UU) && this.emitNotification()
      }
      setNotificationsHeld(UU) {
        (this.notifications.setHeld(UU) || UU) && this.emitNotification()
      }
      LY() {
        var UU, XU;
        if (this.kp) return;
        this.notifications.LY() && this.emitNotification();
        let zU = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, zU = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, zU = !0);
        const cU = nX(this.authoritative);
        null !== cU && void 0 !== cU && null !== (UU = cU.questClock) && void 0 !== UU && UU.running && this.clockText(cU) !== (null === (XU = this.snapshot.tracked) || void 0 === XU ? void 0 : XU.clock) && (zU = !0), zU && this.emit()
      }
      setTranslator(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = UU, this.locale = XU, this.emitNotification(), this.emit()
      }
      PY(UU) {
        if (!this.kp)
          if ("completion" === UU.kind) this.notify(UU.questCompletion);
          else if ("landmark" === UU.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: UU.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === UU.kind) {
          var XU, zU, cU;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: UU.npcNoteTitleKey,
            textKey: UU.npcNoteTextKey,
            params: null !== (XU = UU.npcNoteParams) && void 0 !== XU ? XU : {},
            nameKeys: null !== (zU = UU.npcNoteNameKeys) && void 0 !== zU ? zU : {},
            iconItem: null !== (cU = UU.npcNoteIconItem) && void 0 !== cU ? cU : null
          })
        } else if ("open" === UU.kind) this.show();
        else if ("guidance" === UU.kind) this.waypoint = UU.waypoint, this.compassTarget = UU.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === UU.kind) {
          this.authoritative = UU.snapshot, this.notifications.LY() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const XU = this.trackedStepPulse;
          this.updateTrackedStepPulse(UU.snapshot), this.emit(), this.trackedStepPulse > XU && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.kp || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var UU;
        return null !== (UU = this.translateWithIcons) && void 0 !== UU ? UU : this.translate
      }
      clockText(UU) {
        const XU = UU.questClock;
        if (!XU) return null;
        const zU = XU.elapsedMs + (XU.running ? this.now() - this.receivedAt : 0);
        return void 0 === XU.countdownFromMs ? qU(zU, !1) : qU(1e3 * Math.ceil(Math.max(0, XU.countdownFromMs - zU) / 1e3), !1)
      }
      updateTrackedStepPulse(UU) {
        var XU, zU, cU;
        const yU = nX(UU);
        if (!yU) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const QU = UU => yU.subquests.filter((XU => UU(XU.status))).map((UU => UU.id)),
          AU = QU((UU => "completed" === UU || "skipped" === UU)),
          FU = QU((UU => "locked" !== UU)),
          oU = (null === (XU = this.trackedSteps) || void 0 === XU ? void 0 : XU.questId) === yU.id && yU.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (oU) {
          const UU = AU.filter((UU => !oU.finished.has(UU))),
            XU = QU((UU => "active" === UU || "ready" === UU)).filter((UU => !oU.unlocked.has(UU)));
          UU.length > 0 && this.trackedStepPulse++, (UU.length > 0 || XU.length > 0) && (this.trackedChange = {
            finished: new Set(UU),
            unlocked: new Set(XU),
            expiresAt: this.now() + HX
          })
        } else {
          var DU;
          this.trackedStepPulse = (null === (DU = this.trackedSteps) || void 0 === DU ? void 0 : DU.questId) === yU.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: yU.id,
          progress: yU.progress,
          finished: new Set([...null !== (zU = null === oU || void 0 === oU ? void 0 : oU.finished) && void 0 !== zU ? zU : [], ...AU]),
          unlocked: new Set([...null !== (cU = null === oU || void 0 === oU ? void 0 : oU.unlocked) && void 0 !== cU ? cU : [], ...FU])
        }
      }
      entry(UU, XU) {
        var zU, cU;
        const yU = UU.id === (null === (zU = this.authoritative) || void 0 === zU ? void 0 : zU.trackedQuestId),
          QU = this.now() < this.trackAvailableAt,
          AU = this.questTextTranslator(),
          FU = UU.subquests.map((XU => {
            var zU, cU, QU, FU, oU, DU;
            const EU = null !== (zU = XU.handInNpcName) && void 0 !== zU ? zU : UU.giverName,
              YU = this.translate("skyblockGame:progress", {
                current: XU.progress.toLocaleString(this.locale),
                target: XU.target.toLocaleString(this.locale)
              }),
              NU = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: EU ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [XU.status],
              IU = "active" === XU.status || "ready" === XU.status;
            return {
              id: XU.id,
              name: GX(AU, XU.nameKey, XU.nameParams),
              description: GX(AU, XU.descriptionKey, XU.descriptionParams),
              progress: YU,
              status: XU.status,
              statusLabel: NU ? this.translate(NU, {
                npc: EU
              }) : YU,
              iconItem: IU && null !== (cU = XU.questIconItem) && void 0 !== cU ? cU : null,
              barPercent: "active" === XU.status && XU.showsProgressBar ? Math.min(100, 100 * XU.progress / XU.target) : null,
              justFinished: yU && null !== (QU = null === (FU = this.trackedChange) || void 0 === FU ? void 0 : FU.finished.has(XU.id)) && void 0 !== QU && QU,
              justUnlocked: yU && null !== (oU = null === (DU = this.trackedChange) || void 0 === DU ? void 0 : DU.unlocked.has(XU.id)) && void 0 !== oU && oU
            }
          }));
        return {
          id: UU.id,
          name: GX(AU, UU.nameKey, UU.nameParams),
          description: GX(AU, UU.descriptionKey, UU.descriptionParams),
          progress: XU ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: UU.progress.toLocaleString(this.locale),
            target: UU.target.toLocaleString(this.locale)
          }),
          completed: XU,
          tracked: yU,
          selected: UU.id === this.selected,
          canTrack: !XU && !yU && !QU,
          trackLabel: this.translate(yU ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : QU ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== UU.id,
          subquests: FU,
          focusStep: null !== (cU = FU.find((UU => null !== UU.barPercent))) && void 0 !== cU ? cU : null,
          clock: this.clockText(UU)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var UU, XU, zU, cU, yU, QU, AU, FU, oU, DU;
        const EU = [...null !== (UU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.active) && void 0 !== UU ? UU : [], ...null !== (zU = null === (cU = this.authoritative) || void 0 === cU ? void 0 : cU.completed) && void 0 !== zU ? zU : []];
        var YU, NU, IU, pU;
        EU.some((UU => UU.id === this.selected)) || (this.selected = null !== (YU = null !== (NU = null === (IU = this.authoritative) || void 0 === IU ? void 0 : IU.trackedQuestId) && void 0 !== NU ? NU : null === (pU = EU[0]) || void 0 === pU ? void 0 : pU.id) && void 0 !== YU ? YU : null);
        const aU = null !== (yU = null === (QU = this.authoritative) || void 0 === QU ? void 0 : QU.active.map((UU => this.entry(UU, !1)))) && void 0 !== yU ? yU : [];
        aU.sort(((UU, XU) => Number(XU.tracked) - Number(UU.tracked)));
        const tU = null !== (AU = null === (FU = this.authoritative) || void 0 === FU ? void 0 : FU.completed.map((UU => this.entry(UU, !0)))) && void 0 !== AU ? AU : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: aU,
          completed: tU,
          completedExpanded: this.completedExpanded,
          detail: null !== (oU = [...aU, ...tU].find((UU => UU.selected))) && void 0 !== oU ? oU : null,
          tracked: null !== (DU = aU.find((UU => UU.tracked))) && void 0 !== DU ? DU : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function nX(UU) {
      var XU;
      return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.active.find((XU => XU.id === UU.trackedQuestId))) && void 0 !== XU ? XU : null
    }
    const mX = "skyblockDungeonsView";
    class lX extends oU {
      constructor(UU, XU) {
        let zU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          cU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = XU, this.locale = zU, this.requestEnter = cU, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const UU = this.pickerEntry(),
            XU = null === UU || void 0 === UU ? void 0 : UU.difficulties[this.pageIndex];
          void 0 !== XU && null !== XU.unlockedBoss && (this.close(), this.requestEnter(UU.id, XU.difficulty))
        }
      }
      setTranslator(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = UU, this.locale = XU, this.emit()
      }
      PY(UU) {
        var XU, zU;
        if (!this.kp) return "open" === UU.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== UU.kind ? "snapshot" === UU.kind && (this.authoritative = UU.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (XU = null === (zU = this.pickerEntry()) || void 0 === zU ? void 0 : zU.difficulties.length) && void 0 !== XU ? XU : 1) - 1)), null === UU.snapshot && this.open ? this.close() : this.emit()) : this.choose(UU.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(UU) {
        var XU;
        const zU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.dungeons.find((XU => XU.id === UU));
        void 0 !== zU ? this.open && this.pickerDungeonId === UU || (this.pickerDungeonId = UU, this.pageIndex = Math.max(0, zU.difficulties.findLastIndex((UU => null !== UU.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${UU}`)
      }
      turnTo(UU) {
        var XU, zU;
        const cU = null !== (XU = null === (zU = this.pickerEntry()) || void 0 === zU ? void 0 : zU.difficulties.length) && void 0 !== XU ? XU : 0;
        UU < 0 || UU >= cU || UU === this.pageIndex || (this.pageIndex = UU, this.emit())
      }
      pickerEntry() {
        var UU, XU;
        return null !== (UU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.dungeons.find((UU => UU.id === this.pickerDungeonId))) && void 0 !== UU ? UU : null
      }
      difficulty(UU) {
        const XU = UU.completions > 0,
          zU = null === UU.bestMs ? null : qU(UU.bestMs);
        return {
          difficulty: UU.difficulty,
          label: this.translate(CU[UU.difficulty]),
          colour: wU[UU.difficulty],
          beaten: XU,
          bestTime: zU,
          completions: UU.completions,
          summary: XU ? [null === zU ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: zU
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: UU.completions.toLocaleString(this.locale)
          })].filter((UU => null !== UU)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(UU) {
        const XU = UU.difficulties.map((UU => this.difficulty(UU))),
          zU = XU.filter((UU => UU.beaten)).length;
        return {
          id: UU.id,
          name: this.translate(UU.nameKey),
          selected: UU.id === this.selected,
          beatenSummary: `${zU} / ${XU.length}`,
          difficulties: XU
        }
      }
      picker() {
        const UU = this.pickerEntry();
        if (null === UU || 0 === UU.difficulties.length) return null;
        const XU = UU.difficulties.map(((XU, zU) => {
          var cU, yU, QU, AU;
          const FU = XU.unlockedBoss,
            oU = null === FU ? this.lockedHint(UU, zU) : null;
          return {
            ...this.difficulty(XU),
            unlocked: null !== FU,
            bossName: null === FU ? null : this.translate(FU.bossNameKey),
            bossMobType: null !== (cU = null === FU || void 0 === FU ? void 0 : FU.bossMobType) && void 0 !== cU ? cU : null,
            bossMobVariation: null !== (yU = null === FU || void 0 === FU ? void 0 : FU.bossMobVariation) && void 0 !== yU ? yU : null,
            lockedHint: null !== (QU = null === oU || void 0 === oU ? void 0 : oU.text) && void 0 !== QU ? QU : null,
            lockedHintHighlight: null !== (AU = null === oU || void 0 === oU ? void 0 : oU.highlight) && void 0 !== AU ? AU : null,
            current: zU === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(UU.nameKey),
          pages: XU,
          page: XU[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < XU.length - 1
        }
      }
      lockedHint(UU, XU) {
        var zU, cU, yU;
        if (0 === XU && "number" === typeof UU.combatLevelLock) {
          const XU = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: UU.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: XU,
            colour: kX("combat"),
            icon: tX.combat
          })
        }
        const QU = null !== (zU = null === (cU = this.authoritative) || void 0 === cU ? void 0 : cU.dungeons) && void 0 !== zU ? zU : [],
          AU = XU > 0 ? UU : null !== (yU = QU[QU.indexOf(UU) - 1]) && void 0 !== yU ? yU : null,
          FU = XU > 0 ? UU.difficulties[XU - 1] : null === AU || void 0 === AU ? void 0 : AU.difficulties[0];
        if (null === AU || void 0 === FU) return null;
        const oU = this.translate(AU.nameKey);
        if (null === FU.unlockedBoss) return AU === UU ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, FU.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: oU
        }, FU.difficulty);
        const DU = this.translate(FU.unlockedBoss.bossNameKey);
        return AU === UU ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: DU
        }, FU.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: DU,
            dungeon: oU
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(UU, XU, zU) {
        return this.hintHighlighting(UU, XU, "difficulty", {
          name: this.translate(CU[zU]),
          colour: wU[zU],
          icon: null
        })
      }
      hintHighlighting(UU, XU, zU, cU) {
        let {
          name: yU,
          colour: QU,
          icon: AU
        } = cU;
        const FU = this.translate(UU, {
          ...XU,
          [zU]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(UU, {
            ...XU,
            [zU]: yU
          }),
          highlight: 2 === FU.length ? {
            before: FU[0],
            name: yU,
            after: FU[1],
            colour: QU,
            icon: AU
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var UU, XU, zU;
        const cU = null !== (UU = null === (XU = this.authoritative) || void 0 === XU ? void 0 : XU.dungeons) && void 0 !== UU ? UU : [];
        var yU, QU;
        cU.some((UU => UU.id === this.selected)) || (this.selected = null !== (yU = null === (QU = cU[0]) || void 0 === QU ? void 0 : QU.id) && void 0 !== yU ? yU : null);
        const AU = cU.map((UU => this.entry(UU)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: AU,
          detail: null !== (zU = AU.find((UU => UU.selected))) && void 0 !== zU ? zU : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const xX = ["mining", "farming", "foraging", "fishing", "combat"],
      JX = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      jX = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function KX() {
      for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
      return XU.map(((UU, XU) => ({
        amount: UU,
        coins: JX[XU],
        xp: jX[XU]
      })))
    }
    const bX = KX(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      TX = KX(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      hX = KX(50, 100, 250, 500, 1e3, 2500, 5e3),
      Uz = KX(25, 50, 100, 250, 500, 1e3),
      Xz = KX(10, 25, 50, 100, 250, 500, 1e3),
      zz = KX(1, 5, 10, 25, 50);

    function cz(UU, XU) {
      return {
        id: UU,
        category: "fishing",
        item: XU,
        drops: [XU],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xz
      }
    }
    const yz = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: TX
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: hX
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: hX
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Uz
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Uz
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: TX
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: bX
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: bX
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: bX
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: hX
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: TX
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: TX
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: TX
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: hX
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: hX
      }, cz("wheatfish", "Wheatfish"), cz("darter", "Darter"), cz("sunset_minnow", "Sunset Minnow"), cz("root_flounder", "Root Flounder"), cz("greenfin_loach", "Greenfin Loach"), cz("red_strongfish", "Red Strongfish"), cz("green_strongfish", "Green Strongfish"), cz("boomerang_fish", "Boomerang Fish"), cz("seahorse", "Seahorse"), cz("spined_stickleback", "Spined Stickleback"), cz("moon_strongfish", "Moon Strongfish"), cz("boulder_bass", "Boulder Bass"), cz("grass_snapper", "Grass Snapper"), cz("crystal_wheatfish", "Crystalized Wheatfish", zz), cz("moonstone_pupfish", "Moonstone Pupfish", zz), cz("reedglass_minnow", "Reedglass Minnow"), cz("mangrove_herring", "Mangrove Herring"), cz("mudline_perch", "Mudline Perch"), cz("coastal_mullet", "Coastal Mullet"), cz("reef_sardine", "Reef Sardine"), cz("root_perch", "Root Perch"), cz("driftwood_catfish", "Driftwood Catfish"), cz("aether_minnow", "Aether Minnow"), cz("needlefish", "Tri-Pointed Needlefish"), cz("threadfin_bream", "Threadfin Bream"), cz("mudbelly_tilapia", "Mudbelly Tilapia"), cz("rotslab_eel", "Rotslab Eel"), cz("polarflash_electron", "Polarflash Electron"), cz("mireback_carp", "Mireback Carp"), cz("blackwater_bream", "Blackwater Bream"), cz("stone_grouper", "Stone Grouper"), cz("shadeback_ray", "Shadeback Ray"), cz("glacial_silverfish", "Glacial Silverfish"), cz("hatchetfish", "Hatchetfish"), cz("moonlit_boomerang", "Moonlit Boomerang Fish"), cz("murkborne_ray", "Murkborne Ray"), cz("bamboo_catfish", "Bamboo Catfish"), cz("mossback_arapaima", "Mossback Arapaima"), cz("murk_stingray", "Murk Stingray"), cz("channel_sawfish", "Channel Sawfish"), cz("boned_sturgeon", "Boned Sturgeon"), cz("oarfish", "Oarfish"), cz("snakehead", "Snakehead", zz), cz("eldertide_leviathan", "Eldertide Leviathan", zz), cz("pithead", "Pithead"), cz("electric_eel", "Electric Eel"), cz("shadow_darter", "Shadow Darter"), cz("abyss_carp", "Abyss Carp"), cz("nomai_moray", "Nomai Moray"), cz("silver_dragonfish", "Silver Dragonfish"), cz("giant_moray", "Giant Moray"), cz("coelacanth", "Coelacanth", zz), cz("frost_herring", "Frost Herring"), cz("permafrost_halibut", "Permafrost Halibut"), cz("glacial_lanternfish", "Glacial Lanternfish"), cz("frozen_grenadier", "Frozen Grenadier"), cz("blackfin_icefish", "Blackfin Icefish"), cz("moonfish", "Moonfish"), cz("alpha_strongfish", "Alpha Moon Strongfish"), cz("deep_lanternfish", "Deepwater Lanternfish", zz), cz("pearlescent_moonfish", "Pearlescent Moonfish", zz), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: TX
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Uz
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Uz
      }],
      Qz = (new Map(yz.map((UU => [UU.id, UU]))), new Map),
      Az = new Map;
    for (const qF of yz) {
      for (const [UU, XU] of Object.entries(null !== (Fz = qF.blocks) && void 0 !== Fz ? Fz : {})) {
        var Fz;
        Qz.set(UU, {
          collection: qF,
          amount: XU
        })
      }
      for (const UU of null !== (oz = qF.drops) && void 0 !== oz ? oz : []) {
        var oz;
        Az.set(UU, qF)
      }
    }

    function Dz(UU, XU) {
      let zU = 0;
      for (; zU < UU.tiers.length && XU >= UU.tiers[zU].amount;) zU++;
      return zU
    }
    const Ez = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Yz(UU) {
      return Ez[UU - 1]
    }
    const Nz = "skyblockCollectionsView";
    class Iz extends oU {
      constructor(UU, XU) {
        let zU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          cU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => UU;
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = XU, this.locale = zU, this.itemName = cU, this.counts = null, this.category = "mining", this.selected = yz[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = UU => {
          this.category = UU, this.selected = this.inCategory(UU)[0].id, this.emit()
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, this.locale = XU, this.itemName = zU, this.emit()
      }
      PY(UU) {
        if (!this.kp)
          if ("collOpen" !== UU.kind) {
            (UU.collFull || null === this.counts) && (this.counts = new Map);
            for (const [XU, zU] of UU.collCounts) this.counts.set(XU, zU);
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
        var UU;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const XU = this.inCategory(this.category).map((UU => this.collectionView(UU))),
          zU = yz.reduce(((UU, XU) => UU + this.tierOf(XU)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: xX.map((UU => this.categoryView(UU))),
          collections: XU,
          detail: null !== (UU = XU.find((UU => UU.selected))) && void 0 !== UU ? UU : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(zU)
          })
        }
      }
      categoryView(UU) {
        const XU = this.inCategory(UU),
          zU = XU.reduce(((UU, XU) => UU + this.tierOf(XU)), 0),
          cU = XU.reduce(((UU, XU) => UU + XU.tiers.length), 0);
        return {
          id: UU,
          label: this.translate(`skyblockGame:${UU}`),
          icon: tX[UU],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(zU),
            target: this.number(cU)
          }),
          selected: UU === this.category
        }
      }
      collectionView(UU) {
        var XU, zU;
        const cU = null !== (XU = this.counts.get(UU.id)) && void 0 !== XU ? XU : 0,
          yU = Dz(UU, cU),
          QU = null !== (zU = UU.tiers[yU]) && void 0 !== zU ? zU : null,
          AU = 0 === yU ? 0 : UU.tiers[yU - 1].amount;
        return {
          id: UU.id,
          name: this.itemName(UU.item),
          icon: UU.item,
          selected: UU.id === this.selected,
          locked: 0 === cU,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(cU)
          }),
          tier: 0 === yU ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(yU),
          percent: null === QU ? 100 : Math.min(100, (cU - AU) / (QU.amount - AU) * 100),
          progress: null === QU ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(cU),
            target: this.number(QU.amount)
          }),
          nextReward: null === QU ? null : this.reward(UU, QU.coins, QU.xp)
        }
      }
      reward(UU, XU, zU) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(XU),
          xp: this.number(zU),
          skill: this.translate(`skyblockGame:${UU.category}`)
        })
      }
      tierLabel(UU) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Yz(UU)
        })
      }
      tierOf(UU) {
        var XU;
        return Dz(UU, null !== (XU = this.counts.get(UU.id)) && void 0 !== XU ? XU : 0)
      }
      inCategory(UU) {
        return yz.filter((XU => XU.category === UU))
      }
      number(UU) {
        return UU.toLocaleString(this.locale)
      }
    }
    const pz = "skyblockPortalTransitView",
      az = "skyblockPortalArrival";
    class tz {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.UY = UU, this.storage = XU, this.now = zU, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      PY(UU) {
        const XU = {
          zoneNameKey: UU.transitZoneNameKey,
          variation: UU.transitZoneVariation,
          colour: UU.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(az, XU), this.show("departure", XU.zoneNameKey, XU.colour, UU.transitDurationMs, UU.transitDurationMs + 1500, (() => {
          this.storage.removeItem(az)
        }))
      }
      resumeArrival(UU) {
        const XU = this.storage.getItem(az);
        this.storage.removeItem(az), null === XU || XU.variation !== UU || this.now() - XU.departedAt > 3e4 || this.show("arrival", XU.zoneNameKey, XU.colour, 3200, 2e4)
      }
      finishArrival(UU) {
        var XU;
        "arrival" === (null === (XU = this.view) || void 0 === XU ? void 0 : XU.phase) && this.view.token === UU && (this.clearTimer(), this.view = null, this.UY(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(UU, XU, zU, cU, yU, QU) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: UU,
          zoneNameKey: XU,
          colour: zU,
          durationMs: cU
        }, this.UY(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.UY(null), null === QU || void 0 === QU || QU()
        }), yU)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const gz = "skyblockDailyRewardView",
      kz = "skyblockDailyRewardCoin";
    class Gz {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.UY = UU, this.isBusy = XU, this.holdQuestPopups = zU, this.onHeldCoinsChanged = cU, this.onCoinLanded = yU, this.onStarted = QU, this.onFinished = AU, this.onItemLanded = FU, this.now = oU, this.uD = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var UU, XU;
        return null !== (UU = null === (XU = this.playing) || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null
      }
      getHeldCoins() {
        var UU, XU;
        let zU = 0;
        for (const cU of this.uD) zU += cU.coins;
        return zU - (null !== (UU = null === (XU = this.playing) || void 0 === XU ? void 0 : XU.released) && void 0 !== UU ? UU : 0)
      }
      PY(UU) {
        "dailyRewardClaimed" !== UU.kind ? (this.queue.push(UU), this.LY()) : this.uD.push({
          coins: UU.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      LY() {
        const UU = this.now();
        if (null === this.playing) return this.releaseUnshown(UU), void this.startNext(UU);
        const XU = this.playing,
          zU = UU - XU.startedAt,
          cU = XU.view.flyingCoins,
          yU = function(UU, XU) {
            let zU = 0;
            for (; zU < XU && Zz(zU, XU) <= UU;) zU++;
            return zU
          }(zU, cU);
        if (yU !== XU.landed) {
          for (let UU = yU - XU.landed > 2 ? yU - 1 : XU.landed; UU < yU; UU++) this.onCoinLanded(UU, cU);
          XU.landed = yU, XU.released = Math.round(XU.view.coins * yU / cU), this.onHeldCoinsChanged()
        }
        for (; XU.itemsLanded < XU.view.items.length && 2e3 + 160 * XU.itemsLanded + 630 <= zU;) this.onItemLanded(XU.itemsLanded), XU.itemsLanded++;
        zU >= XU.view.durationMs && (this.finish(), this.startNext(UU))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.uD = [], this.UY(null)
      }
      startNext(UU) {
        if (0 === this.queue.length || this.isBusy()) return;
        const XU = this.queue.shift();
        this.token++;
        const zU = {
          token: this.token,
          day: XU.dailyRewardDay,
          coins: XU.dailyRewardCoins,
          items: XU.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: XU.dailyRewardDay === dU ? 24 : 14
        };
        this.playing = {
          view: zU,
          startedAt: UU,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.UY(zU), this.onStarted(zU)
      }
      finish() {
        this.uD.shift(), this.playing = null, this.holdQuestPopups(!1), this.UY(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(UU) {
        if (this.queue.length > 0 || 0 === this.uD.length) return;
        const XU = this.uD.length;
        this.uD = this.uD.filter((XU => UU - XU.receivedAt < 6e4)), this.uD.length !== XU && this.onHeldCoinsChanged()
      }
    }

    function Bz(UU, XU) {
      return 450 + 715 * UU / (XU - 1)
    }

    function Zz(UU, XU) {
      return Bz(UU, XU) + 650
    }
    const Rz = "skyblockMailboxView";
    class Pz {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.UY = UU, this.isBusy = XU, this.onStarted = zU, this.now = cU, this.waiting = [], this.playing = null, this.token = 0, this.itemName = UU => UU
      }
      getSnapshot() {
        var UU, XU;
        return null !== (UU = null === (XU = this.playing) || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null
      }
      setItemName(UU) {
        this.itemName = UU
      }
      PY(UU) {
        this.waiting.push(...UU.mailLetters), this.LY()
      }
      LY() {
        const UU = this.now();
        null !== this.playing && UU - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.UY(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(UU)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.UY(null)
      }
      start(UU) {
        const XU = this.waiting.slice(0, 3);
        this.token++;
        const zU = {
          token: this.token,
          letters: XU.map((UU => this.toView(UU))),
          more: this.waiting.length - XU.length,
          durationMs: 4500 + 700 * XU.length
        };
        this.waiting = [], this.playing = {
          view: zU,
          startedAt: UU
        }, this.UY(zU), this.onStarted(zU)
      }
      toView(UU) {
        return {
          coins: UU.mailCoins,
          items: UU.mailItems.map((UU => {
            var XU;
            return {
              itemName: UU.mailItemName,
              amount: UU.mailItemAmount,
              label: null !== (XU = UU.mailItemLabel) && void 0 !== XU ? XU : this.itemName(UU.mailItemName)
            }
          })),
          reasonKey: UU.mailReasonKey,
          reasonParams: UU.mailReasonParams
        }
      }
    }
    const Wz = "skyblockQuestGraphView",
      dz = "skyblockDevQuestJump";

    function Lz(UU) {
      if (0 === UU.length) return "";
      const XU = [`M ${UU[0].x} ${UU[0].y}`];
      for (let cU = 1; cU < UU.length - 1; cU++) {
        const zU = UU[cU + 1];
        XU.push(`Q ${UU[cU].x} ${UU[cU].y} ${(UU[cU].x+zU.x)/2} ${(UU[cU].y+zU.y)/2}`)
      }
      const zU = UU[UU.length - 1];
      return XU.push(`L ${zU.x} ${zU.y}`), XU.join(" ")
    }

    function ez(UU, XU) {
      return UU < XU ? `${UU}|${XU}` : `${XU}|${UU}`
    }
    class Cz extends oU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(UU, zU, cU), this.translate = XU, this.requestJump = yU, this.requestArrive = QU, this.storage = AU, this.now = FU, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = UU => {
          UU !== this.hoveredId && (this.hoveredId = UU, this.emit())
        }, this.jump = UU => {
          this.close(), this.requestJump(UU)
        }
      }
      PY(UU) {
        if (!this.kp)
          if ("graph" !== UU.kind) {
            if ("jumping" === UU.kind) {
              const XU = {
                questId: UU.graphQuestId,
                variation: UU.graphVariation,
                completes: UU.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(dz, XU)
            }
          } else {
            const XU = ++this.graphCount;
            zU.e(131).then((() => zU(7025))).then((zU => {
              let {
                default: cU
              } = zU;
              this.kp || XU !== this.graphCount || (this.layout = function(UU, XU, zU) {
                var cU, yU;
                const QU = new UU.graphlib.Graph;
                QU.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), QU.setDefaultEdgeLabel((() => ({})));
                const AU = new Set;
                for (const EU of XU) AU.add(EU.graphQuestId), QU.setNode(EU.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const FU = zU.filter((UU => AU.has(UU.graphFromId) && AU.has(UU.graphToId) && UU.graphFromId !== UU.graphToId)),
                  oU = new Map;
                for (const EU of [...FU].sort(((UU, XU) => Number("awaits" === UU.graphEdgeKind) - Number("awaits" === XU.graphEdgeKind)))) {
                  const UU = ez(EU.graphFromId, EU.graphToId);
                  oU.has(UU) || (oU.set(UU, EU), QU.setEdge(EU.graphFromId, EU.graphToId))
                }
                UU.layout(QU);
                const DU = QU.graph();
                return {
                  width: Math.ceil(null !== (cU = DU.width) && void 0 !== cU ? cU : 0),
                  height: Math.ceil(null !== (yU = DU.height) && void 0 !== yU ? yU : 0),
                  nodes: XU.map((UU => {
                    var XU, zU;
                    const cU = QU.node(UU.graphQuestId);
                    return {
                      node: UU,
                      left: (null !== (XU = cU.x) && void 0 !== XU ? XU : 0) - 95,
                      top: (null !== (zU = cU.y) && void 0 !== zU ? zU : 0) - 26
                    }
                  })),
                  edges: FU.map((UU => {
                    var XU;
                    const zU = oU.get(ez(UU.graphFromId, UU.graphToId)),
                      cU = null !== (XU = QU.edge(zU.graphFromId, zU.graphToId).points) && void 0 !== XU ? XU : [];
                    return {
                      edge: UU,
                      key: `${UU.graphFromId}|${UU.graphToId}|${UU.graphEdgeKind}`,
                      path: Lz(zU.graphFromId === UU.graphFromId ? cU : [...cU].reverse())
                    }
                  })),
                  plans: new Map(XU.map((UU => [UU.graphQuestId, new Set([UU.graphQuestId, ...UU.graphPlanIds])])))
                }
              }(cU, UU.graphNodes, UU.graphEdges), this.show())
            })).catch((UU => {
              console.error("The quest graph could not be laid out", UU)
            }))
          }
      }
      resumeJump(UU) {
        const XU = this.storage.getItem(dz);
        this.storage.removeItem(dz), null === XU || XU.variation !== UU || this.now() - XU.departedAt > 6e4 || this.requestArrive(XU.questId, XU.completes)
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
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
        var UU, XU;
        return null !== (UU = null === this.hoveredId || null === (XU = this.layout) || void 0 === XU ? void 0 : XU.plans.get(this.hoveredId)) && void 0 !== UU ? UU : new Set
      }
      buildSnapshot() {
        const UU = this.layout;
        if (null === UU) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const XU = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: UU.width,
          height: UU.height,
          nodes: UU.nodes.map((UU => {
            let {
              node: zU,
              left: cU,
              top: yU
            } = UU;
            return {
              id: zU.graphQuestId,
              name: this.translate(zU.graphNameKey),
              detail: null === zU.graphGiverName ? zU.graphZoneId : `${zU.graphGiverName} \xb7 ${zU.graphZoneId}`,
              state: zU.graphState,
              left: cU,
              top: yU,
              inPlan: XU.has(zU.graphQuestId),
              hovered: zU.graphQuestId === this.hoveredId
            }
          })),
          edges: UU.edges.map((UU => {
            let {
              edge: zU,
              key: cU,
              path: yU
            } = UU;
            return {
              key: cU,
              kind: zU.graphEdgeKind,
              path: yU,
              inPlan: XU.has(zU.graphFromId) && XU.has(zU.graphToId)
            }
          })),
          planning: XU.size > 0
        }
      }
    }
    var wz = zU(37786);
    const qz = 250,
      Oz = 2150,
      Sz = -2.8,
      rz = 2.2,
      uz = -27,
      fz = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      iz = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Hz = Math.round(50 + 1e3 * (iz.delay + iz.period / 2)),
      Mz = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      vz = Array.from({
        length: 26
      }, ((UU, XU) => {
        const zU = 2.39996 * XU,
          cU = .5 + .618034 * XU % 1 * .23,
          yU = XU % 3 !== 2;
        return {
          rune: yU ? Mz[7 * XU % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(zU)*cU).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(zU)*cU).toFixed(3)})`,
            "--spin": 40 * (XU % 5 - 2) + "deg",
            "--size": (yU ? 1 + XU % 4 * .2 : .3 + XU % 2 * .15) + "rem",
            "--duration": `${(1.8+7*XU%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*XU%3).toFixed(2)}s`
          }
        }
      }));

    function Vz(UU, XU) {
      return Array.from({
        length: 30 + 3 * UU + (XU ? 10 : 0)
      }, ((UU, XU) => {
        const zU = XU < 4,
          cU = zU ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          yU = zU ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          QU = zU ? 2.2 : .6 + Math.random(),
          AU = zU ? .3 : Math.random() < .5 ? .16 : .24,
          FU = zU ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": cU,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${yU.toFixed(2)}rem`,
          "--length": `${QU.toFixed(2)}rem`,
          "--width": `${AU}rem`,
          "--duration": `${Math.round(FU)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function sz(UU) {
      let {
        zeta: XU,
        period: zU
      } = UU;
      const cU = 2 * Math.PI / zU;
      return {
        w: cU,
        decay: XU * cU / Math.sqrt(1 - XU * XU)
      }
    }
    let nz = !1;

    function mz() {
      if (nz) return;
      nz = !0;
      const UU = document.createElement("style");
      UU.textContent = function() {
        const UU = sz(fz),
          XU = sz(iz),
          zU = XU => Math.exp(-UU.decay * XU) * Math.sin(UU.w * XU),
          cU = zU(Math.atan(UU.w / UU.decay) / UU.w),
          yU = .25,
          QU = 2.15,
          AU = Math.round(215),
          FU = [];
        for (let oU = 0; oU <= AU; oU++) {
          const UU = oU / AU * QU;
          let DU = Math.sin(Math.min(UU, yU) / yU * Math.PI / 2) ** 2,
            EU = 0,
            YU = 1,
            NU = 1 - .2 * DU,
            IU = 1;
          if (UU >= yU) {
            const AU = UU - yU,
              FU = Math.max(0, AU - .05);
            DU = Math.exp(-FU / .05), EU = zU(FU + fz.lead * (1 - Math.exp(-FU / fz.rush))) / cU;
            const oU = FU - iz.delay,
              pU = oU <= 0 ? 0 : 1 - Math.exp(-XU.decay * oU) * (Math.cos(XU.w * oU) + XU.decay / XU.w * Math.sin(XU.w * oU)),
              aU = Math.max(0, (UU - 1.77) / (QU - 1.77));
            YU = (1 + (iz.to - 1) * pU) * (1 + .08 * aU), NU = 1.1 + 1.5 * Math.exp(-AU / .07) + .3 * Math.exp(-(((1e3 * AU - Hz) / 100) ** 2)) + .8 * aU, IU = 1 - aU ** 1.5
          }
          const pU = .15 * DU + Sz * EU,
            aU = -.1 * DU + rz * EU,
            tU = 3 * DU + uz * EU;
          FU.push(`${(oU/AU*100).toFixed(3)}% { opacity: ${IU.toFixed(3)}; transform: translate(${pU.toFixed(3)}rem, ${aU.toFixed(3)}rem) rotate(${tU.toFixed(2)}deg) scale(${YU.toFixed(3)}); filter: brightness(${NU.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${FU.join(" ")} }`
      }(), document.head.append(UU)
    }
    const lz = "skyblockForgeView",
      xz = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Jz extends oU {
      constructor(UU, XU, zU, cU, yU) {
        super(UU, zU, cU), this.translate = XU, this.requestForge = yU, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (UU, XU) => {
          var zU, cU;
          null !== this.forging || (null !== (zU = this.owned[(0, wz.q)(XU, UU)]) && void 0 !== zU ? zU : 0) <= 0 || (this.selected[UU] = this.selected[UU] === XU ? null : XU, this.status = null, null === (cU = this.onPartSelected) || void 0 === cU || cU.call(this), this.emit())
        }, this.forge = UU => {
          var XU, zU;
          const cU = this.selectedParts();
          if (null === cU || this.isPending() || !this.open) return;
          const yU = (0, wz.o)(cU);
          if (null === yU || yU.coalCost > this.coal) return;
          const QU = this.preview(yU),
            AU = null !== (XU = null === (zU = this.onForgeStarted) || void 0 === zU ? void 0 : zU.call(this, QU.tier, QU.named, UU)) && void 0 !== XU ? XU : () => {};
          if (this.dropArrival(), UU) {
            const UU = {
              id: ++this.forgeId,
              preview: QU,
              timers: [],
              stopSounds: AU,
              landed: !1,
              reply: null
            };
            UU.timers.push(setTimeout((() => {
              UU.landed = !0, null !== UU.reply && (this.apply(UU.reply), UU.reply = null, this.emit())
            }), qz), setTimeout((() => {
              this.finishForge(UU)
            }), Oz)), this.forging = UU
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(cU)
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        var XU;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.forgeMessageKind) return this.dropForge(), this.apply(UU), this.status = null, this.show(), void(null === (XU = this.onOpened) || void 0 === XU || XU.call(this));
        const zU = this.forging;
        if (null !== zU && null !== UU.forgeRefusalKey) this.dropForge();
        else if (null !== zU && !zU.landed) return void(zU.reply = UU);
        this.apply(UU), this.emit()
      }
      apply(UU) {
        if (this.owned = UU.forgeOwnedParts, this.coal = UU.forgeCoalOwned, this.keepSelectionOwned("open" === UU.forgeMessageKind), null !== UU.forgeForgedSwordId) {
          var XU;
          const zU = (0, wz.o)(UU.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (XU = null === zU || void 0 === zU ? void 0 : zU.displayName) && void 0 !== XU ? XU : ""
            }
          }
        } else null !== UU.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: UU.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(UU) {
        var XU;
        this.forging = null;
        const zU = this.selectedParts(),
          cU = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: UU.id,
          sameSword: null !== zU && (null === (XU = (0, wz.o)(zU)) || void 0 === XU ? void 0 : XU.displayName) === UU.preview.name,
          timer: cU
        }, this.emit()
      }
      dropForge() {
        const UU = this.forging;
        if (null !== UU) {
          this.forging = null;
          for (const XU of UU.timers) clearTimeout(XU);
          UU.stopSounds(), null !== UU.reply && this.apply(UU.reply)
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
        var UU, XU, zU;
        const cU = this.selectedParts(),
          yU = null === cU ? null : (0, wz.o)(cU),
          QU = null !== (UU = null === (XU = this.forging) || void 0 === XU ? void 0 : XU.preview) && void 0 !== UU ? UU : null === yU ? null : this.preview(yU);
        return {
          enabled: this.received,
          open: this.open,
          slots: wz.m.map((UU => ({
            kind: UU,
            label: this.translate(xz[UU]),
            parts: this.partsFor(UU)
          }))),
          coalOwned: this.coal,
          preview: QU,
          unformedSword: wz.j[null !== (zU = this.selected.Blade) && void 0 !== zU ? zU : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((UU => UU > 0)),
          canForge: null !== QU && !QU.coalShort && !this.isPending(),
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
      preview(UU) {
        return {
          name: UU.displayName,
          lore: UU.lore,
          baseSword: UU.baseSword,
          enchantmentTier: UU.enchantmentTier,
          tier: Number(UU.enchantmentTier.slice(-1)),
          named: UU.named,
          stats: this.stats(UU),
          effects: UU.effects,
          coalCost: UU.coalCost,
          coalShort: null === this.forging && UU.coalCost > this.coal
        }
      }
      partsFor(UU) {
        const XU = [];
        for (const cU of wz.i) {
          var zU;
          const yU = (0, wz.q)(cU, UU),
            QU = null !== (zU = this.owned[yU]) && void 0 !== zU ? zU : 0;
          QU > 0 && XU.push({
            material: cU,
            itemName: yU,
            owned: QU,
            selected: this.selected[UU] === cU,
            placeholder: !1
          })
        }
        if (0 === XU.length) {
          const zU = wz.i[0];
          XU.push({
            material: zU,
            itemName: (0, wz.q)(zU, UU),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return XU
      }
      stats(UU) {
        const XU = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${UU.powerMultiplier.toFixed(2)}`,
          better: UU.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${UU.damageMultiplier.toFixed(2)}`,
          better: UU.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/UU.cooldownMultiplier).toFixed(2)}`,
          better: UU.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${UU.knockbackMultiplier.toFixed(2)}`,
          better: UU.knockbackMultiplier > 1
        }];
        return UU.reachBonus > 0 && XU.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${UU.reachBonus.toFixed(1)}`,
          better: !0
        }), UU.damageReduction > 0 && XU.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*UU.damageReduction)}%`,
          better: !0
        }), XU
      }
      selectedParts() {
        const {
          Blade: UU,
          Guard: XU,
          Handle: zU
        } = this.selected;
        return null === UU || null === XU || null === zU ? null : {
          blade: UU,
          guard: XU,
          handle: zU
        }
      }
      keepSelectionOwned(UU) {
        for (const zU of wz.m) {
          var XU;
          const cU = this.selected[zU];
          if (null !== cU && (null !== (XU = this.owned[(0, wz.q)(cU, zU)]) && void 0 !== XU ? XU : 0) > 0) continue;
          if (!UU) {
            this.selected[zU] = null;
            continue
          }
          const yU = [...wz.i].reverse().find((UU => {
            var XU;
            return (null !== (XU = this.owned[(0, wz.q)(UU, zU)]) && void 0 !== XU ? XU : 0) > 0
          }));
          this.selected[zU] = null !== yU && void 0 !== yU ? yU : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const jz = "skyblockSmugglerView",
      Kz = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class bz extends oU {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, zU, cU), this.translate = XU, this.requestBuy = yU, this.now = QU, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = UU => UU, this.onBought = null, this.buy = UU => {
          const XU = this.deals[UU];
          void 0 !== XU && !this.isPending() && this.open && !this.soldOut.has(UU) && this.canAfford(XU) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, UU))
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        if (this.received = !0, this.day = UU.smugglerDay, this.deals = UU.smugglerDeals, this.rivets = UU.smugglerRivetsOwned, this.crests = UU.smugglerCrestsOwned, this.soldOut = new Set(UU.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + UU.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = UU.smugglerBoughtSlot, null !== UU.smugglerBoughtSlot) {
          var XU, zU;
          const cU = this.deals[UU.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === cU ? "" : this.dealName(cU),
              amount: String(null !== (XU = null === cU || void 0 === cU ? void 0 : cU.smugglerDealAmount) && void 0 !== XU ? XU : 0)
            }
          }, this.boughtCount++, null === (zU = this.onBought) || void 0 === zU || zU.call(this)
        } else null !== UU.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: UU.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, void 0 !== zU && (this.itemName = zU), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(UU) {
        if (null !== UU.smugglerDealUniqueName) return UU.smugglerDealUniqueName;
        const XU = Kz[UU.smugglerDealItem];
        return void 0 === XU ? this.itemName(UU.smugglerDealItem) : this.translate(XU)
      }
      canAfford(UU) {
        return UU.smugglerDealRivets <= this.rivets && UU.smugglerDealCrests <= this.crests
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
        const UU = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return UU <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : UU < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(UU)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(UU / 60)),
          minutes: String(UU % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((UU, XU) => ({
            slot: XU,
            itemName: UU.smugglerDealItem,
            displayName: this.dealName(UU),
            enchantmentTier: UU.smugglerDealEnchantmentTier,
            amount: UU.smugglerDealAmount,
            rivets: UU.smugglerDealRivets,
            crests: UU.smugglerDealCrests,
            affordable: this.canAfford(UU),
            soldOut: this.soldOut.has(XU),
            justBought: this.boughtSlot === XU
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
    const Tz = "skyblockPassageView",
      hz = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function Uc(UU, XU) {
      return UU(hz[XU])
    }

    function Xc(UU, XU, zU, cU) {
      const yU = Math.ceil((zU - cU) / 864e5),
        QU = Uc(UU, XU);
      return yU > 1 ? UU("skyblockGame:passageNextDays", {
        phase: QU,
        days: String(yU)
      }) : UU("skyblockGame:passageNextSoon", {
        phase: QU
      })
    }
    class zc extends oU {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(UU, zU, cU), this.translate = XU, this.now = yU, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = UU => UU, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        this.message = UU, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, void 0 !== zU && (this.itemName = zU), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(UU) {
        return {
          itemName: UU.passageFish,
          displayName: this.itemName(UU.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(UU.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const UU = this.message;
        return null === UU ? {
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
          phase: UU.passagePhase,
          phaseName: Uc(this.translate, UU.passagePhase),
          visitors: UU.passageVisitors.map((UU => this.describe(UU))),
          resting: this.describe(UU.passageResting),
          nextPhase: UU.passageNextPhase,
          next: Xc(this.translate, UU.passageNextPhase, UU.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var cc = zU(39374);
    const yc = "skyblockKeepersChairView";
    class Qc extends oU {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new cc.d;
        super(UU, zU, cU), this.translate = XU, this.requestAim = yU, this.now = QU, this.pacer = AU, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = UU => UU, this.aim = UU => {
          !this.awaitingReply && this.open && this.atChair && UU !== this.favoured && (null === UU || this.islands.some((XU => XU.keepersChairIslandId === UU && XU.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== UU && void 0 !== UU ? UU : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = AU.subscribe((() => {
          this.emit()
        }))
      }
      PY(UU) {
        var XU, zU;
        this.received = !0;
        const cU = this.favoured,
          yU = this.atChair;
        var QU;
        return this.islands = UU.keepersChairIslands, this.favoured = UU.keepersChairFavoured, this.passage = null !== (XU = UU.keepersChairPassage) && void 0 !== XU ? XU : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (zU = UU.keepersChairAtChair) || void 0 === zU || zU, "place" === UU.keepersChairMessageKind ? (!yU && this.atChair && "refused" === (null === (QU = this.status) || void 0 === QU ? void 0 : QU.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== UU.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: UU.keepersChairRefusalKey,
          island: null
        } : this.favoured !== cU && (this.status = null === this.favoured ? {
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
      receivePassage(UU) {
        this.received && (this.passage = UU, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, void 0 !== zU && (this.itemName = zU), this.emit()
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
      islandName(UU) {
        const XU = this.islands.find((XU => XU.keepersChairIslandId === UU));
        return void 0 === XU ? UU : this.translate(XU.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const UU = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          XU = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((UU => {
            const XU = UU.keepersChairFeaturedFish;
            return {
              id: UU.keepersChairIslandId,
              name: this.translate(UU.keepersChairIslandNameKey),
              relit: UU.keepersChairIslandRelit,
              featuredFish: null === XU ? null : {
                itemName: XU,
                displayName: this.itemName(XU)
              },
              favoured: UU.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === UU ? null : {
            tone: UU.tone,
            text: this.translate(UU.key, null === UU.island ? void 0 : {
              island: this.islandName(UU.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === XU ? null : {
            phase: XU.keepersChairPassagePhase,
            phaseName: Uc(this.translate, XU.keepersChairPassagePhase),
            nextPhase: XU.keepersChairPassageNextPhase,
            next: Xc(this.translate, XU.keepersChairPassageNextPhase, XU.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Ac = "skyblockReachLogView",
      Fc = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      oc = "Caught Fish",
      Dc = [1, 2, 4];

    function Ec(UU, XU) {
      return UU.map((UU => ({
        ...UU,
        reachLogPageFish: UU.reachLogPageFish.map((UU => ({
          ...UU,
          reachLogFishFresh: XU(UU)
        })))
      })))
    }
    class Yc extends oU {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new cc.d;
        super(UU, zU, cU), this.translate = XU, this.requestOpen = yU, this.pacer = QU, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = UU => UU, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = UU => {
          this.pages.some((XU => XU.reachLogIslandId === UU)) && (this.selected = UU, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = QU.subscribe((() => {
          this.emit()
        }))
      }
      PY(UU) {
        if (this.received = !0, "status" === UU.reachLogMessageKind) return !0 === UU.reachLogNews && this.markNews(), this.serverFresh = UU.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const XU = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== UU.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Ec(UU.reachLogPages, (UU => UU.reachLogFishFresh || this.heldFresh.has(UU.reachLogFishItem))), this.letGoShown = UU.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, XU) this.showPages();
          else {
            for (const UU of this.pages)
              for (const XU of UU.reachLogPageFish) XU.reachLogFishFresh && this.heldFresh.add(XU.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, this.pageViews = null, void 0 !== zU && (this.itemName = zU), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Ec(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var UU, XU, zU, cU;
        const yU = this.pages.find((UU => UU.reachLogPageFish.some((UU => UU.reachLogFishFresh))));
        if (void 0 !== yU) return yU.reachLogIslandId;
        if (null !== this.selected && this.pages.some((UU => UU.reachLogIslandId === this.selected))) return this.selected;
        return null !== (UU = null !== (XU = null === (zU = this.pages.filter((UU => UU.reachLogIslandAwake)).at(-1)) || void 0 === zU ? void 0 : zU.reachLogIslandId) && void 0 !== XU ? XU : null === (cU = this.pages[0]) || void 0 === cU ? void 0 : cU.reachLogIslandId) && void 0 !== UU ? UU : null
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
        return this.pages.map((UU => {
          var XU;
          return {
            id: UU.reachLogIslandId,
            name: this.translate(UU.reachLogIslandNameKey),
            awake: UU.reachLogIslandAwake,
            gold: UU.reachLogPageGold,
            caught: UU.reachLogPageFish.filter((UU => UU.reachLogFishCaught && !UU.reachLogFishVisitor)).length,
            total: UU.reachLogPageFish.filter((UU => !UU.reachLogFishVisitor)).length,
            fish: UU.reachLogPageFish.map((UU => {
              const XU = UU.reachLogFishBestKg;
              return {
                itemName: UU.reachLogFishItem,
                name: UU.reachLogFishCaught ? this.itemName(UU.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: UU.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / UU.reachLogFishChance))
                }),
                best: UU.reachLogFishCaught ? null === XU ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: XU.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: UU.reachLogFishMarks,
                ribbons: Dc.map((XU => 0 !== (UU.reachLogFishRibbons & XU))),
                glimmer: 0 !== (8 & UU.reachLogFishRibbons),
                halo: 0 !== (32 & UU.reachLogFishRibbons),
                fresh: UU.reachLogFishFresh,
                visitor: UU.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (XU = UU.reachLogPageReturner) && void 0 !== XU ? XU : null)
          }
        }))
      }
      buildReturner(UU) {
        return null === UU ? null : {
          itemName: UU.reachLogReturnerFishItem,
          line: this.translate(UU.reachLogReturnerLineKey, {
            name: this.translate(UU.reachLogReturnerNameKey),
            trinket: this.translate(UU.reachLogReturnerTrinketKey)
          }),
          back: UU.reachLogReturnerBack
        }
      }
      receivePassagePhase(UU) {
        null !== this.passagePhase && this.passagePhase !== UU && (this.pagesCurrent = !1), this.passagePhase = UU
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Nc = "skyblockLampLightView";
    class Ic {
      constructor(UU, XU, zU, cU) {
        this.UY = UU, this.translate = XU, this.requestCommand = zU, this.pacer = cU, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.kp = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = UU => {
          UU ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = UU => {
          this.send(`buy ${UU}`)
        }, this.socket = UU => {
          this.send(`socket ${null!==UU&&void 0!==UU?UU:SU}`)
        }, this.wearTint = UU => {
          this.send(`tint ${null!==UU&&void 0!==UU?UU:SU}`)
        }, this.setSituation = UU => {
          this.situation = UU, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = cU.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = cU.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      PY(UU) {
        if (this.message = UU, null !== UU.lampLightShop && (this.shop = UU.lampLightShop), "open" === UU.lampLightKind && (this.refusalKey = null), "reply" === UU.lampLightKind) {
          var XU;
          const yU = null !== (XU = UU.lampLightReplyTag) && void 0 !== XU ? XU : null,
            QU = null !== yU && yU === this.offTag;
          var zU, cU;
          if (QU ? this.settleOff() : null !== yU && yU !== this.awaitingTag || this.settleReply(), this.refusalKey = UU.lampLightRefusalKey, null !== UU.lampLightBought && !QU) this.sparkle = {
            id: UU.lampLightBought,
            count: (null !== (zU = null === (cU = this.sparkle) || void 0 === cU ? void 0 : cU.count) && void 0 !== zU ? zU : 0) + 1
          }
        }
        UU.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === UU.lampLightKind && (this.lastGained = UU.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(UU) {
        UU !== this.atChair && (this.atChair = UU, UU && (this.refusalKey = null), this.emit())
      }
      setTranslator(UU, XU) {
        this.translate = UU, this.locale = null !== XU && void 0 !== XU ? XU : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.kp = !0
      }
      send(UU) {
        var XU;
        if (null !== this.awaitingTag || "ready" !== (null === (XU = this.message) || void 0 === XU ? void 0 : XU.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const zU = this.nextTag();
        this.awaitingTag = zU, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${UU} ${zU}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const UU = this.nextTag();
        this.offTag = UU, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${UU}`)
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
        this.kp || (this.snapshot = this.buildSnapshot(), this.UY(this.snapshot))
      }
      formatLight(UU) {
        return Math.floor(UU).toLocaleString(this.locale)
      }
      formatPercent(UU) {
        const XU = 100 * UU;
        return XU >= 10 ? Math.round(XU).toLocaleString(this.locale) : XU.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(UU, XU) {
        if ("bite" === UU) return this.translate("skyblockGame:lampLightBite", {
          seconds: (XU.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === UU) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(XU.lampLightRareChance)
        });
        if ("notice" === UU) return null === XU.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(XU.lampLightNoticeChance)
        });
        const zU = "meter" === UU ? XU.lampLightMeterCatches : XU.lampLightBloomCatches;
        return null === zU ? null : this.translate("meter" === UU ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(zU))
        })
      }
      oddsLines(UU, XU) {
        const zU = (UU, XU) => {
            var zU;
            return null !== (zU = {
              bite: XU.lampLightBiteMs,
              rare: XU.lampLightRareChance,
              meter: XU.lampLightMeterCatches,
              bloom: XU.lampLightBloomCatches,
              notice: XU.lampLightNoticeChance
            } [UU]) && void 0 !== zU ? zU : 0
          },
          cU = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          yU = [];
        for (const QU of ["bite", "rare", "meter", "bloom", "notice"]) {
          const AU = this.formatOdds(QU, UU),
            FU = this.formatOdds(QU, XU);
          if (null === AU || null === FU || "bite" !== QU && "rare" !== QU && AU === FU) continue;
          const oU = zU(QU, XU) - zU(QU, UU),
            DU = cU[QU] ? oU < 0 : oU > 0;
          yU.push({
            label: QU,
            before: AU,
            after: FU,
            tone: AU === FU ? "same" : DU ? "better" : "worse"
          })
        }
        return yU
      }
      charmView(UU, XU, zU) {
        const cU = UU.lampLightCharmId.charAt(0).toUpperCase() + UU.lampLightCharmId.slice(1),
          yU = "bloom" === this.situation;
        return {
          id: UU.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${cU}`),
          effect: this.translate(`skyblockGame:lampLightCharm${cU}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(UU.lampLightCharmCost)
          }),
          owned: UU.lampLightCharmOwned,
          affordable: zU >= UU.lampLightCharmCost,
          socketed: XU.lampLightSocketed === UU.lampLightCharmId,
          lines: this.oddsLines(yU ? XU.lampLightBareBloom : XU.lampLightBareOpen, yU ? UU.lampLightCharmBloom : UU.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var UU, XU, zU, cU;
        const yU = this.message,
          QU = "ready" === (null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) ? this.shop : null,
          AU = null !== (UU = null === yU || void 0 === yU ? void 0 : yU.lampLightBalance) && void 0 !== UU ? UU : 0,
          FU = this.atChair,
          oU = "loading" === (null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          DU = "ready" !== (null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) || FU ? null !== (XU = this.refusalKey) && void 0 !== XU ? XU : oU : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== yU && "locked" !== yU.lampLightStatus,
          status: null !== (zU = null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) && void 0 !== zU ? zU : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(AU)
          }),
          releasing: null !== (cU = null === yU || void 0 === yU ? void 0 : yU.lampLightReleasing) && void 0 !== cU && cU,
          gained: null === yU || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === yU || void 0 === yU ? void 0 : yU.lampLightStatus) && FU && !this.isPending(),
          situation: this.situation,
          shop: null === QU ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: QU.lampLightOddsRod,
              island: this.translate(QU.lampLightIslandNameKey)
            }),
            heldRod: null !== QU.lampLightHeldRod,
            charms: QU.lampLightCharms.map((UU => this.charmView(UU, QU, AU))),
            tints: QU.lampLightTints.map((UU => {
              const XU = UU.lampLightTintId,
                [zU, cU, yU] = UU.lampLightTintColour;
              return {
                id: XU,
                name: this.translate(`skyblockGame:lampLightTint${XU.charAt(0).toUpperCase()}${XU.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(UU.lampLightTintCost)
                }),
                owned: UU.lampLightTintOwned,
                affordable: AU >= UU.lampLightTintCost,
                wearing: QU.lampLightTint === XU,
                colour: `rgb(${zU}, ${cU}, ${yU})`
              }
            })),
            wearingIslandColours: null === QU.lampLightTint
          },
          notice: null === DU ? null : this.translate(DU),
          sparkle: this.sparkle
        }
      }
    }
    const pc = "skyblockMagmawardView";
    class ac {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.UY = UU, this.now = XU, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = vU.map((() => 0)), this.wornAt = vU.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      PY(UU) {
        var XU, zU;
        const cU = vU.map(((XU, zU) => !0 === UU.magmawardPiecesWorn[zU]));
        if (!cU.includes(!0)) return this.snapshot = null, void this.UY(null);
        const yU = this.now(),
          QU = this.snapshot;
        null === QU && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const AU = UU.magmawardFuelCarried,
          FU = !cU.includes(!1);
        let oU = null !== (XU = null === QU || void 0 === QU ? void 0 : QU.pulse) && void 0 !== XU ? XU : null,
          DU = null !== (zU = null === QU || void 0 === QU ? void 0 : QU.flare) && void 0 !== zU ? zU : null;
        UU.magmawardFuelBurned ? (oU = "burn", DU = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = yU, this.flareAt = yU) : null !== QU && AU > QU.fuel && (oU = "gain", this.pulseToken++, this.pulseAt = yU), FU && null !== QU && !QU.fullSet && (DU = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = yU, this.setLitAt = yU);
        const EU = vU.map(((UU, XU) => (cU[XU] && null !== QU && !QU.pieces[XU].worn && (this.wornTokens[XU]++, this.wornAt[XU] = yU), {
          itemName: UU,
          worn: cU[XU],
          wornToken: this.wornTokens[XU],
          justWorn: cU[XU] && this.isPlaying(this.wornAt[XU], yU)
        })));
        this.snapshot = {
          pieces: EU,
          wornCount: cU.filter(Boolean).length,
          fullSet: FU,
          fuel: AU,
          fuelState: AU <= 0 ? "empty" : AU <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, yU) ? oU : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, yU) ? DU : null,
          flareToken: this.flareToken,
          setLit: FU && this.isPlaying(this.setLitAt, yU),
          setLitToken: this.setLitToken
        }, this.UY(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.UY(null)
      }
      isPlaying(UU, XU) {
        return XU - UU < 1200
      }
    }
    const tc = "skyblockGlowtideView";
    class gc {
      constructor(UU) {
        this.UY = UU, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = UU => {
          this.arrow = UU, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      PY(UU) {
        this.bloom = UU.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.UY(null))
      }
      afterRender(UU, XU) {
        const zU = this.bloom;
        if (null === zU || null === UU) return;
        const cU = zU.glowtideBloomX - UU[0],
          yU = zU.glowtideBloomZ - UU[2],
          QU = Math.hypot(cU, yU),
          AU = this.snapshot,
          FU = null !== AU && void 0 !== AU && AU.inRange ? 1 : 0,
          oU = QU <= 12.5 + FU && UU[1] - zU.glowtideBloomY <= 10 + FU;
        !oU || null !== AU && void 0 !== AU && AU.inRange || this.inRangeToken++;
        const DU = {
          colour: zU.glowtideBloomColour,
          inRange: oU,
          distance: Math.round(QU),
          inRangeToken: this.inRangeToken
        };
        (null === AU || DU.colour !== AU.colour || DU.inRange !== AU.inRange || !oU && DU.distance !== AU.distance) && (this.snapshot = DU, this.UY(DU));
        const EU = YU.d.computeShortestRotation(XU, (0, YU.Cb)([cU, 0, yU]));
        null === this.arrow || Math.abs(EU - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${EU}rad)`, this.arrowTurn = EU)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.UY(null)
      }
    }
    const kc = "skyblockGlowMeterView";
    class Gc {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.UY = UU, this.now = XU, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      PY(UU) {
        const XU = this.now(),
          {
            glowMeterFill: zU,
            glowMeterCapacity: cU
          } = UU,
          yU = zU >= cU,
          QU = this.snapshot;
        null !== QU && (yU && !QU.full && (this.fullToken++, this.fullAt = XU), QU.full && !yU ? (this.burstToken++, this.burstAt = XU) : zU > QU.fill && (this.gainToken++, this.gainAt = XU)), this.snapshot = {
          fill: zU,
          xY: cU,
          ratio: Math.min(1, Math.max(0, zU / cU)),
          full: yU,
          rares: UU.glowMeterRares,
          ready: yU && this.isPlaying(this.fullAt, XU),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, XU),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, XU),
          gainToken: this.gainToken
        }, this.UY(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.UY(null)
      }
      isPlaying(UU, XU) {
        return XU - UU < 2e3
      }
    }
    const Bc = "skyblockHushWaitView";
    class Zc {
      constructor(UU) {
        this.UY = UU, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      PY(UU) {
        let {
          hushWaitMs: XU,
          hushWaitTotalMs: zU,
          hushWaitLines: cU
        } = UU;
        if (this.clearTimers(), this.token++, 0 === cU.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (XU <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: cU[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const yU = Math.max(null !== zU && void 0 !== zU ? zU : XU, XU),
          QU = yU - XU,
          AU = UU => yU * UU / cU.length,
          FU = UU => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: yU,
              elapsedMs: QU,
              line: cU[UU],
              lineIndex: UU
            })
          };
        let oU = 0;
        for (; oU + 1 < cU.length && AU(oU + 1) <= QU;) oU++;
        FU(oU);
        for (let DU = oU + 1; DU < cU.length; DU++) this.later(AU(DU) - QU, (() => {
          FU(DU)
        }));
        this.later(XU, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(UU) {
        this.snapshot = UU, this.UY(UU)
      }
      later(UU, XU) {
        this.timers.push(setTimeout(XU, UU))
      }
      clearTimers() {
        for (const UU of this.timers) clearTimeout(UU);
        this.timers = []
      }
    }
    const Rc = "skyblockTideChartsView",
      Pc = 36e5,
      Wc = 864e5;

    function dc(UU, XU, zU) {
      const [cU, yU, QU, AU] = UU.tideChartArea, FU = Math.floor(XU), oU = Math.floor(zU);
      return FU >= cU && FU <= QU && oU >= yU && oU <= AU
    }

    function Lc(UU, XU, zU) {
      const [cU, yU, QU, AU] = UU.tideChartWater;
      return function(UU, XU, zU, cU, yU, QU) {
        const AU = 4 - VU(Math.floor(yU) - (UU - zU), zU);
        return 5 * VU(Math.floor(QU) - (XU - cU), cU) + AU
      }(cU, yU, QU, AU, XU, zU)
    }

    function ec(UU, XU, zU) {
      const cU = UU.tideCharts;
      for (let yU = 0; yU < cU.length; yU++)
        if (dc(cU[yU], XU, zU)) return cU[yU];
      return null
    }

    function Cc(UU, XU, zU) {
      const cU = Math.max(0, XU - zU);
      return cU > Wc ? UU("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(cU / Wc))
      }) : cU > Pc ? UU("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(cU / Pc))
      }) : UU("skyblockGame:tideChartsTurnSoon")
    }
    class wc extends oU {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(UU, zU, cU), this.translate = XU, this.now = yU, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.DI = UU => {
          this.picked = UU, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        const XU = this.message;
        if (null !== XU)
          for (const cU of UU.tideCharts) {
            var zU;
            const UU = XU.tideCharts.find((UU => UU.tideChartIsland === cU.tideChartIsland)),
              yU = cU.tideChartLit & ~(null !== (zU = null === UU || void 0 === UU ? void 0 : UU.tideChartLit) && void 0 !== zU ? zU : 0);
            void 0 !== UU && 0 !== yU && (this.pulse = {
              island: cU.tideChartIsland,
              cells: yU,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = UU, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(UU, XU) {
        var zU;
        const cU = null === this.message || Number.isNaN(UU) ? null : ec(this.message, UU, XU),
          yU = null !== (zU = null === cU || void 0 === cU ? void 0 : cU.tideChartIsland) && void 0 !== zU ? zU : null,
          QU = null === cU ? -1 : function(UU, XU, zU) {
            const [cU, yU, QU, AU] = UU.tideChartWater;
            return function(UU, XU, zU, cU, yU, QU, AU) {
              return ((yU - UU) / (zU + AU)) ** 2 + ((QU - XU) / (cU + AU)) ** 2 <= 1
            }(cU, yU, QU, AU, XU, zU, 2) ? Lc(UU, XU, zU) : -1
          }(cU, UU, XU);
        return (yU !== this.hereIsland || QU !== this.hereCell) && (this.hereIsland = yU, this.hereCell = QU, null !== yU && (this.lastIsland = yU), !0)
      }
      afterRender(UU) {
        if (null === this.message) return;
        this.lastX = null === UU ? Number.NaN : UU[0], this.lastZ = null === UU ? Number.NaN : UU[2];
        const XU = this.locate(this.lastX, this.lastZ),
          zU = this.expirePulses();
        (XU || zU || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const UU = this.now();
        return !(!this.open || UU - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = UU, Cc(this.translate, this.message.tideChartTurnsInMs, UU - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(UU, XU) {
        const zU = null === this.message ? null : ec(this.message, UU, XU);
        if (null === zU) return;
        const cU = Lc(zU, UU, XU);
        0 === (zU.tideChartPreBlank & 1 << cU) && (this.cast = {
          island: zU.tideChartIsland,
          cell: cU,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const UU = this.now();
        let XU = !1;
        return 0 !== this.pulse.cells && UU - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, XU = !0), null !== this.cast && UU - this.cast.atMs >= 1500 && (this.cast = null, XU = !0), XU
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(UU, XU) {
        var zU;
        return null !== (zU = UU.tideCharts.find((UU => UU.tideChartIsland === XU))) && void 0 !== zU ? zU : null
      }
      describe(UU) {
        var XU, zU, cU;
        const yU = UU.tideChartIsland,
          QU = [];
        for (let IU = 0; IU < 25; IU++) {
          const XU = 1 << IU;
          0 !== (UU.tideChartLit & XU) ? QU.push("lit") : 0 !== (UU.tideChartClear & XU) ? QU.push("clear") : 0 !== (UU.tideChartPreBlank & XU) ? QU.push("shore") : QU.push("water")
        }
        const AU = function(UU) {
            let XU = 0;
            for (let zU = UU >>> 0; 0 !== zU; zU &= zU - 1) XU++;
            return XU
          }(UU.tideChartLit),
          FU = UU.tideChartInkCount,
          oU = this.translate(UU.tideChartIslandNameKey),
          DU = this.translate("skyblockGame:tideChartsLit", {
            lit: String(AU),
            ink: String(FU)
          }),
          EU = null === UU.tideChartPictureNameKey ? null : this.translate(UU.tideChartPictureNameKey),
          YU = this.hereIsland === yU && -1 !== this.hereCell ? this.hereCell : null,
          NU = [`${oU}: ${DU}.`];
        if (null !== EU && NU.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: EU
          })), null !== YU) {
          const UU = Math.floor(YU / 5) + 1,
            XU = YU % 5 + 1;
          NU.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(UU),
            column: String(XU)
          }))
        }
        return {
          island: yU,
          islandName: oU,
          cells: QU,
          hereCell: YU,
          lit: AU,
          ink: FU,
          litText: DU,
          pictureName: EU,
          gridLabel: NU.join(" "),
          pulseCells: this.pulse.island === yU ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (XU = this.cast) || void 0 === XU ? void 0 : XU.island) === yU ? this.cast.cell : null,
          castToken: null !== (zU = null === (cU = this.cast) || void 0 === cU ? void 0 : cU.token) && void 0 !== zU ? zU : 0
        }
      }
      buildSnapshot() {
        var UU, XU, zU;
        const cU = this.message;
        if (null === cU || 0 === cU.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const yU = this.findChart(cU, this.hereIsland),
          QU = null !== (UU = null !== (XU = null !== (zU = this.findChart(cU, this.open ? this.picked : null)) && void 0 !== zU ? zU : yU) && void 0 !== XU ? XU : this.findChart(cU, this.lastIsland)) && void 0 !== UU ? UU : cU.tideCharts[0],
          AU = null === yU ? null : this.describe(yU);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: AU,
          card: QU === yU ? AU : this.describe(QU),
          turnsText: Cc(this.translate, cU.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(cU.tideChartBookCount)
          }),
          tabs: cU.tideCharts.map((UU => ({
            island: UU.tideChartIsland,
            name: this.translate(UU.tideChartIslandNameKey),
            selected: UU.tideChartIsland === QU.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const qc = "skyblockRegularsView",
      Oc = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Sc = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function rc(UU, XU) {
      return "given" === UU ? XU.given : "owed" === UU ? XU.owed : XU.goal
    }
    class uc extends oU {
      constructor(UU, XU, zU, cU) {
        super(UU, zU, cU), this.translate = XU, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = UU => UU, this.openIsland = UU => {
          this.selected = UU, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = UU => {
          this.selected = UU, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        this.message = UU, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const UU = this.openedFromReachLog;
        return this.openedFromReachLog = !1, UU
      }
      setTranslator(UU, XU, zU) {
        this.translate = UU, void 0 !== zU && (this.itemName = zU), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(UU, XU, zU) {
        return {
          text: this.translate(rc(UU, XU), zU),
          given: "given" === UU
        }
      }
      describeRegular(UU, XU) {
        const zU = this.translate,
          cU = null !== UU.regularKg,
          yU = UU.regularMeetings,
          QU = cU ? 0 === yU ? zU("skyblockGame:regularsNotMet") : 1 === yU ? zU("skyblockGame:regularsMeetingsOne") : zU("skyblockGame:regularsMeetings", {
            count: yU
          }) : "";
        return {
          id: UU.regularId,
          name: zU(UU.regularNameKey),
          line: zU(UU.regularLineKey),
          itemName: UU.regularFishItem,
          fishName: this.itemName(UU.regularFishItem),
          tagged: cU,
          size: null === UU.regularKg ? zU("skyblockGame:regularsNotTagged") : zU("skyblockGame:regularsSize", {
            kg: UU.regularKg.toFixed(1)
          }),
          meetings: QU,
          chance: zU("skyblockGame:regularsChance", {
            count: UU.regularOneInCasts
          }),
          resting: UU.regularRestingToday,
          gifts: [{
            text: zU("skyblockGame:regularsGiftFlare"),
            given: yU >= 3
          }, this.describeGift(UU.regularTintGift, Oc, {
            tint: zU(UU.regularTintNameKey)
          })],
          history: [...UU.regularHistory].reverse().map((UU => {
            const cU = UU.regularMeetingKg.toFixed(1),
              yU = XU - UU.regularMeetingDay;
            return yU <= 0 ? zU("skyblockGame:regularsToday", {
              kg: cU
            }) : zU("skyblockGame:regularsDaysAgo", {
              days: yU,
              kg: cU
            })
          }))
        }
      }
      describeIsland(UU, XU) {
        return {
          id: UU.regularsIslandId,
          name: this.translate(UU.regularsIslandNameKey),
          charm: this.describeGift(UU.regularsCharmGift, Sc, {
            charm: this.translate(UU.regularsCharmNameKey)
          }),
          regulars: UU.regularsList.map((UU => this.describeRegular(UU, XU)))
        }
      }
      buildSnapshot() {
        var UU, XU, zU, cU;
        const yU = this.message;
        if (null === yU) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const QU = yU.regularsIslands.map((UU => this.describeIsland(UU, yU.regularsToday))),
          AU = null !== (UU = null !== (XU = null === (zU = QU.find((UU => UU.id === this.selected))) || void 0 === zU ? void 0 : zU.id) && void 0 !== XU ? XU : null === (cU = QU[0]) || void 0 === cU ? void 0 : cU.id) && void 0 !== UU ? UU : "";
        return {
          enabled: !0,
          open: this.open,
          selected: AU,
          islands: QU
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const fc = "skyblockHiddenWatersView";
    class ic {
      constructor(UU) {
        this.UY = UU, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      PY(UU) {
        this.snapshot = function(UU) {
          const [XU, zU] = UU.hiddenWatersMapSize, cU = (UU, cU) => ({
            left: 1 - UU / XU,
            top: cU / zU
          }), yU = new Map;
          for (const [AU, FU] of UU.hiddenWatersGlimpses) {
            var QU;
            const UU = null !== (QU = yU.get(AU)) && void 0 !== QU ? QU : [];
            UU.push(FU), yU.set(AU, UU)
          }
          return {
            found: UU.hiddenWatersFound,
            total: UU.hiddenWatersTotal,
            aspect: zU / XU,
            pins: UU.hiddenWatersPins.map((UU => {
              let [XU, zU] = UU;
              return cU(XU, zU)
            })),
            islands: UU.hiddenWatersIslands.map((UU => {
              let [yU, QU, AU, FU] = UU;
              const {
                left: oU,
                top: DU
              } = cU(AU + 1, QU);
              return {
                left: oU,
                top: DU,
                width: (AU + 1 - yU) / XU,
                height: (FU + 1 - QU) / zU
              }
            })),
            glimpses: yU
          }
        }(UU), this.UY(this.snapshot)
      }
    }
    const Hc = "skyblockDialogueView";
    class Mc extends oU {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, zU, cU), this.translate = XU, this.requestDialogue = yU, this.now = QU, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = UU => {
          this.selection = {
            kind: "quest",
            questId: UU
          }, this.request(), this.show()
        }, this.selectCharacter = UU => {
          this.selection = {
            kind: "character",
            npcId: UU
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      PY(UU) {
        this.received = !0, this.scripts = UU.questDialogueScripts, this.speakers = new Map(UU.questDialogueSpeakers.map((UU => [UU.dialogueSpeakerId, UU]))), this.emit()
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const UU = this.now();
        UU >= this.requestAvailableAt && (this.requestAvailableAt = UU + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var UU;
        const XU = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...XU,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const zU = this.selection;
        if ("quest" === zU.kind) {
          const UU = this.scripts.find((UU => UU.dialogueQuestId === zU.questId));
          return {
            ...XU,
            characters: [],
            questFocus: zU.questId,
            conversations: UU ? [this.conversation(UU)] : []
          }
        }
        const cU = [];
        for (let QU = this.scripts.length - 1; QU >= 0; QU--) {
          const UU = this.scripts[QU].dialogueLines;
          for (let XU = UU.length - 1; XU >= 0; XU--) cU.includes(UU[XU].dialogueSpeakerId) || cU.push(UU[XU].dialogueSpeakerId)
        }
        const yU = null !== zU.npcId && cU.includes(zU.npcId) ? zU.npcId : null !== (UU = cU[0]) && void 0 !== UU ? UU : null;
        return {
          ...XU,
          characters: cU.map((UU => {
            var XU, zU;
            return {
              id: UU,
              styling: null !== (XU = null === (zU = this.speakers.get(UU)) || void 0 === zU ? void 0 : zU.dialogueSpeakerStyling) && void 0 !== XU ? XU : UU,
              selected: UU === yU
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((UU => UU.dialogueLines.some((UU => UU.dialogueSpeakerId === yU)))).map((UU => this.conversation(UU))).reverse()
        }
      }
      conversation(UU) {
        let XU = null;
        return {
          questId: UU.dialogueQuestId,
          questName: this.translate(UU.dialogueQuestNameKey),
          completed: UU.dialogueQuestCompleted,
          lines: UU.dialogueLines.map(((UU, zU) => {
            var cU;
            const yU = UU.dialogueSpeakerId === XU || null === (cU = this.speakers.get(UU.dialogueSpeakerId)) || void 0 === cU ? void 0 : cU.dialogueSpeakerStyling;
            return XU = UU.dialogueSpeakerId, {
              key: zU,
              display: {
                line: {
                  translationKey: UU.dialogueLineKey,
                  params: this.params(UU.dialogueLineParams)
                },
                speakerName: yU,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(UU) {
        if (void 0 !== UU) return Object.fromEntries(Object.entries(UU).map((UU => {
          let [XU, zU] = UU;
          return [XU, "string" === typeof zU ? zU : this.translate(zU.translationKey)]
        })))
      }
    }
    var vc = zU(625),
      Vc = zU(1280),
      sc = zU(97);
    const nc = "skyblockAutographsView";

    function mc(UU) {
      const XU = vc.m[UU];
      return {
        label: XU.chatTag.map((UU => UU.str)).join(""),
        icon: XU.icon,
        colour: XU.mainRGB
      }
    }
    class lc extends oU {
      constructor(UU) {
        let XU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = XU, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      PY(UU) {
        this.signatures = UU.autographSignatures, UU.autographOpen ? this.show() : this.emit()
      }
      setTranslator(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = XU, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var UU;
        const XU = null !== (UU = this.signatures) && void 0 !== UU ? UU : [],
          zU = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          cU = [...XU].sort(((UU, XU) => Number(null !== XU.autographRank) - Number(null !== UU.autographRank) || XU.autographSignedAtMs - UU.autographSignedAtMs)).map((UU => ({
            key: `${UU.autographSignedAtMs}|${UU.autographSignerName}`,
            name: (0, Vc.b)(UU.autographSignerName, !sc.featureFlags.canSeeRealPlayerNames),
            rank: null === UU.autographRank ? null : mc(UU.autographRank),
            signedOn: zU.format(UU.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: cU,
          total: cU.length,
          rankTotal: cU.filter((UU => null !== UU.rank)).length
        }
      }
    }
    const xc = "skyblockHudView",
      Jc = () => {},
      jc = {
        getItem: () => null,
        setItem: Jc,
        removeItem: Jc
      };
    class Kc {
      constructor(UU) {
        let {
          translate: XU,
          translateWithIcons: zU,
          setMenuOpen: cU = Jc,
          dismissMenu: yU = () => {
            cU(!1)
          },
          publishSkills: QU = Jc,
          publishQuests: AU = Jc,
          publishQuestNotification: FU = Jc,
          publishDungeons: oU = Jc,
          publishCollections: DU = Jc,
          publishMap: YU = Jc,
          publishHud: NU = Jc,
          publishPortalTransit: IU = Jc,
          publishDailyReward: pU = Jc,
          publishMailbox: aU = Jc,
          publishQuestGraph: tU = Jc,
          publishForge: gU = Jc,
          publishSmuggler: kU = Jc,
          publishKeepersChair: GU = Jc,
          publishReachLog: BU = Jc,
          publishLampLight: RU = Jc,
          publishMagmaward: PU = Jc,
          publishGlowtide: WU = Jc,
          publishGlowMeter: dU = Jc,
          publishHushWait: LU = Jc,
          publishPassage: eU = Jc,
          publishTideCharts: CU = Jc,
          publishRegulars: wU = Jc,
          publishHiddenWaters: qU = Jc,
          publishDialogue: OU = Jc,
          publishAutographs: SU = Jc,
          isLoadingScreenUp: rU = () => !1,
          onDailyRewardCoinLanded: uU = Jc,
          onDailyRewardStarted: fU = Jc,
          onDailyRewardFinished: iU = Jc,
          onDailyRewardItemLanded: HU = Jc,
          onMailboxStarted: MU = Jc,
          journeyStorage: vU = jc,
          requestTracking: VU = Jc,
          requestTravel: sU = Jc,
          requestDungeonEnter: nU = Jc,
          requestQuestJump: mU = Jc,
          requestQuestArrive: lU = Jc,
          requestForge: xU = Jc,
          requestSmuggle: JU = Jc,
          requestKeepersChairAim: jU = Jc,
          requestReachLogOpen: KU = Jc,
          requestLampLight: bU = Jc,
          requestDialogue: TU = Jc
        } = UU;
        this.navigation = void 0, this.map = void 0, this.compass = new ZU, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new cc.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = UU => UU, this.close = () => {
          for (const UU of this.panels) UU.close()
        }, this.setMenuOpen = cU, this.publishHud = NU, this.portalTransit = new tz(IU, vU), this.magmaward = new ac(PU), this.glowtide = new gc(WU), this.glowMeter = new Gc(dU), this.hushWait = new Zc(LU), this.dailyReward = new Gz(pU, (() => rU() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (UU => {
          this.quests.setNotificationsHeld(UU)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), uU, fU, iU, HU);
        const hU = UU => {
          this.panels.some((UU => UU.isOpen())) || (UU ? yU() : this.setMenuOpen(!1))
        };
        this.skills = new iX(QU, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), XU, void 0, void 0, hU), this.quests = new sX(AU, VU, XU, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, hU, FU), this.dungeons = new lX(oU, XU, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, hU, nU), this.collections = new Iz(DU, XU, (() => {
          this.beforePanelOpen(this.collections)
        }), hU), this.map = new EU(YU, sU, XU, (() => {
          this.beforePanelOpen(this.map)
        }), hU), this.questGraph = new Cz(tU, XU, (() => {
          this.beforePanelOpen(this.questGraph)
        }), hU, mU, lU, vU), this.forge = new Jz(gU, XU, (() => {
          this.beforePanelOpen(this.forge)
        }), hU, xU), this.smuggler = new bz(kU, XU, (() => {
          this.beforePanelOpen(this.smuggler)
        }), hU, JU), this.lampLight = new Ic(RU, XU, bU, this.commandPacer), this.keepersChair = new Qc(GU, XU, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (UU => {
          this.lampLight.onChairClosed(), hU(UU)
        }), jU, Date.now, this.commandPacer), this.reachLog = new Yc(BU, XU, (() => {
          this.beforePanelOpen(this.reachLog)
        }), hU, KU, this.commandPacer), this.passage = new zc(eU, XU, (() => {
          this.beforePanelOpen(this.passage)
        }), hU), this.tideCharts = new wc(CU, XU, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), hU), this.regulars = new uc(wU, XU, (() => {
          this.beforePanelOpen(this.regulars)
        }), (UU => {
          this.regulars.takeReturnToReachLog() && !UU && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), hU(UU)
        })), this.hiddenWaters = new ic(qU), this.dialogue = new Mc(OU, XU, (() => {
          this.beforePanelOpen(this.dialogue)
        }), hU, TU), this.autographs = new lc(SU, (() => {
          this.beforePanelOpen(this.autographs)
        }), hU), this.mailbox = new Pz(aU, (() => rU() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), MU), this.quests.translateWithIcons = null !== zU && void 0 !== zU ? zU : null, this.skills.onLevelUp = UU => {
          this.quests.notify(UU)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new uX(this.map, this.quests, this.compass, XU)
      }
      getHudSnapshot() {
        const UU = this.hudSnapshot,
          XU = this.dailyReward.getHeldCoins();
        return null === UU || XU <= 0 || !("hudPurseCoins" in UU) ? UU : {
          ...UU,
          hudPurseCoins: Math.max(0, UU.hudPurseCoins - XU)
        }
      }
      receiveHud(UU) {
        this.hudSnapshot = UU, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(UU) {
        this.setMenuOpen(!0);
        const XU = UU === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = UU;
        for (const zU of this.panels) zU === UU || XU && zU === this.reachLog || zU.close();
        this.openingPanel = null
      }
      setTranslator(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XU => this.resolveItemName(XU, UU);
        this.quests.translateWithIcons = null !== zU && void 0 !== zU ? zU : null, this.navigation.setTranslator(UU, XU), this.lampLight.setTranslator(UU, XU), this.mailbox.setItemName(cU);
        for (const yU of this.panels) yU.setTranslator(UU, XU, cU)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const UU of this.panels) UU.dispose()
      }
    }
    var bc = zU(1106),
      Tc = zU.n(bc),
      hc = zU(27),
      Uy = zU(37318),
      Xy = zU(3796),
      zy = zU(1993),
      cy = zU(1978),
      yy = zU(34891),
      Qy = zU(1193),
      Ay = zU(1492),
      Fy = zU(1305);

    function oy(UU) {
      let {
        controller: XU,
        minimap: zU,
        children: cU
      } = UU;
      const yU = (0, Ay.j)(xc, XU.getHudSnapshot()),
        [QU, AU] = (0, PU.useState)(XU.skills.getSnapshot().overallLevel);
      (0, Ay.f)(fX, (UU => {
        AU(UU.overallLevel)
      }));
      const FU = (0, PU.useRef)(null);
      (0, Ay.f)(kz, (UU => {
        ! function(UU, XU) {
          if (null === UU || "function" !== typeof UU.animate) return;
          const zU = XU ? 1.35 : 1.15;
          UU.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${zU})`
          }, {
            transform: "scale(1)"
          }], {
            duration: XU ? 320 : 160,
            easing: "ease-out"
          }), UU.classList.toggle("Receiving", !XU), XU && (UU.classList.remove("Shine"), UU.offsetWidth, UU.classList.add("Shine"))
        }(FU.current, UU)
      }));
      const {
        t: oU
      } = (0, Qy.I)(), {
        isTouchScreen: DU
      } = (0, hc.q)(["isTouchScreen"]), [EU, NU] = (0, PU.useState)(null);
      return (0, Xy.l)(EU, ".SkyblockRightHud"), null !== yU || zU ? (0, Fy.jsx)(Uy.e, {
        placement: "topRight",
        children: (0, Fy.jsxs)("div", {
          className: Tc()("SkyblockRightHud", {
            TouchScreen: DU
          }),
          children: [zU, null !== yU && (0, Fy.jsxs)("div", {
            ref: NU,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in yU ? (0, Fy.jsx)("div", {
              className: "SkyblockHudHelp",
              children: yU.hudHelpText
            }) : (0, Fy.jsxs)(Fy.Fragment, {
              children: [(0, Fy.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Fy.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Fy.jsx)("strong", {
                    style: {
                      color: YU.H.cyanUiText
                    },
                    children: oU(yU.hudZoneNameKey)
                  }), null !== QU && (0, Fy.jsx)("span", {
                    style: {
                      color: YU.H.goldUiText
                    },
                    children: oU("skyblockGame:level", {
                      level: (0, yy.f)(QU)
                    })
                  })]
                }), (0, Fy.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: FU,
                  children: [(0, Fy.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, yy.f)(yU.hudPurseCoins)]
                })]
              }), yU.hudClockText.length > 0 && (0, Fy.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Fy.jsx)(cy.d, {
                  text: yU.hudClockText
                })
              })]
            }), cU, "hudZoneNameKey" in yU && (0, Fy.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var Dy = zU(39378);

    function Ey(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)();
      return (0, Fy.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: XU.display.mountPlayer,
        title: zU("skyblockGame:mapYouAreHere"),
        children: (0, Fy.jsx)(Dy.e, {
          icon: "player"
        })
      })
    }
    const Yy = zU(39382),
      Ny = Object.fromEntries(Yy.keys().map((UU => [UU.replace(/^\.\/(.*)\.png$/, "$1"), Yy(UU)])));

    function Iy(UU, XU) {
      var zU;
      return null !== (zU = Ny[UU]) && void 0 !== zU ? zU : Ny[XU]
    }

    function py(UU) {
      let {
        imageKey: XU,
        fallbackImageKey: zU,
        geometryKey: cU,
        alt: yU,
        className: QU
      } = UU;
      const [AU, FU] = (0, PU.useState)((() => function(UU, XU) {
        return [{
          id: 0,
          imageKey: UU,
          geometryKey: XU,
          phase: "shown"
        }]
      }(XU, cU))), oU = function(UU, XU, zU) {
        const cU = UU[UU.length - 1];
        if (cU.imageKey === XU && cU.geometryKey === zU) return UU;
        const yU = {
          id: cU.id + 1,
          imageKey: XU,
          geometryKey: zU,
          phase: "entering"
        };
        return cU.geometryKey === zU ? [{
          ...cU,
          phase: "leaving"
        }, yU] : [yU]
      }(AU, XU, cU);
      return oU !== AU && FU(oU), (0, Fy.jsx)(Fy.Fragment, {
        children: oU.map((UU => (0, Fy.jsx)("img", {
          className: Tc()("SkyblockMapTerrainImage", QU, {
            Entering: "entering" === UU.phase,
            Leaving: "leaving" === UU.phase
          }),
          src: Iy(UU.imageKey, zU),
          alt: "leaving" === UU.phase ? "" : yU,
          onAnimationEnd: () => {
            FU((XU => function(UU, XU) {
              return UU.flatMap((UU => UU.id !== XU ? [UU] : "leaving" === UU.phase ? [] : [{
                ...UU,
                phase: "shown"
              }]))
            }(XU, UU.id)))
          }
        }, UU.id)))
      })
    }
    var ay = zU(4968),
      ty = zU(1494);

    function gy(UU) {
      if ("Tab" !== UU.key) return;
      const XU = Array.from(UU.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        zU = XU.indexOf(document.activeElement);
      var cU;
      if (UU.shiftKey && zU <= 0) UU.preventDefault(), null === (cU = XU.at(-1)) || void 0 === cU || cU.focus();
      else if (!UU.shiftKey && (-1 === zU || zU === XU.length - 1)) {
        var yU;
        UU.preventDefault(), null === (yU = XU[0]) || void 0 === yU || yU.focus()
      }
    }

    function ky() {
      const UU = (0, PU.useRef)(null);
      return (0, PU.useCallback)((XU => {
        var zU;
        XU ? (UU.current = document.activeElement, XU.focus()) : null === (zU = UU.current) || void 0 === zU || zU.focus()
      }), [])
    }

    function Gy(UU) {
      let {
        percent: XU,
        label: zU,
        levelUpToken: cU,
        colour: yU
      } = UU;
      return (0, Fy.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": zU,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": XU,
        "aria-valuetext": zU,
        children: [(0, Fy.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${XU/100})`
          }
        }), null !== cU && void 0 !== cU && (0, Fy.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": yU
          }
        }, cU)]
      })
    }

    function By(UU) {
      let {
        mount: XU
      } = UU;
      return (0, Fy.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: XU,
        hidden: !0,
        children: (0, Fy.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Fy.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Fy.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Zy(UU, XU, zU, cU) {
      (0, PU.useLayoutEffect)((() => {
        const yU = UU.current;
        if (!zU || null === XU || void 0 === XU || !XU.local || !yU) return;
        const QU = Array.from(yU.querySelectorAll(".SkyblockMapNode")),
          AU = [...XU.points, ...XU.portals],
          FU = () => {
            const UU = yU.clientWidth,
              zU = yU.clientHeight,
              FU = QU.map(((yU, QU) => {
                const FU = AU[QU];
                return {
                  id: FU.id,
                  portal: QU >= XU.points.length,
                  x: FU.position[0] * UU / 100,
                  y: FU.position[1] * zU / 100,
                  width: yU.offsetWidth / cU,
                  height: yU.offsetHeight / cU
                }
              })),
              oU = new Map(AU.map(((UU, XU) => [UU.id, QU[XU]])));
            for (const XU of function(UU, XU, zU) {
                const cU = [],
                  yU = [...UU].sort(((UU, XU) => Number(XU.portal) - Number(UU.portal) || UU.id.localeCompare(XU.id)));
                for (const QU of yU) {
                  const UU = UU => Math.max(QU.width / 2, Math.min(XU - QU.width / 2, UU)),
                    yU = UU => Math.max(QU.height / 2, Math.min(zU - QU.height / 2, UU)),
                    AU = [UU(QU.x)],
                    FU = [yU(QU.y)];
                  for (const XU of cU) AU.push(UU(XU.x - (XU.width + QU.width) / 2 - 4), UU(XU.x + (XU.width + QU.width) / 2 + 4)), FU.push(yU(XU.y - (XU.height + QU.height) / 2 - 4), yU(XU.y + (XU.height + QU.height) / 2 + 4));
                  let oU = {
                      ...QU,
                      x: AU[0],
                      y: FU[0]
                    },
                    DU = 1 / 0,
                    EU = 1 / 0;
                  for (const XU of new Set(AU))
                    for (const UU of new Set(FU)) {
                      let zU = 0;
                      for (const AU of cU) zU += Math.max(0, (QU.width + AU.width) / 2 + 4 - Math.abs(XU - AU.x)) * Math.max(0, (QU.height + AU.height) / 2 + 4 - Math.abs(UU - AU.y));
                      const yU = (XU - QU.x) ** 2 + (UU - QU.y) ** 2;
                      (zU < DU || zU === DU && yU < EU) && (oU = {
                        ...QU,
                        x: XU,
                        y: UU
                      }, DU = zU, EU = yU)
                    }
                  cU.push(oU)
                }
                return cU
              }(FU, UU, zU)) {
              const UU = oU.get(XU.id);
              UU.style.left = `${XU.x}px`, UU.style.top = `${XU.y}px`
            }
          };
        FU();
        const oU = new ResizeObserver(FU);
        oU.observe(yU);
        for (const UU of QU) oU.observe(UU);
        return () => {
          oU.disconnect()
        }
      }), [UU, XU, zU, cU])
    }
    const Ry = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Py = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Wy(UU, XU, zU) {
      return Math.min(zU, Math.max(XU, UU))
    }

    function dy(UU, XU, zU) {
      const cU = Math.min(1, zU * XU / UU),
        yU = Math.min(1, UU / (zU * XU));
      return {
        x0: (1 - cU) / 2,
        y0: (1 - yU) / 2,
        x1: (1 + cU) / 2,
        y1: (1 + yU) / 2
      }
    }

    function Ly(UU, XU, zU, cU) {
      const yU = XU * (cU - zU);
      if (yU <= 1) return .5 - XU * (zU + cU) / 2;
      const QU = .45 * Math.min(1, yU - 1);
      return Wy(UU, 1 - XU * cU - QU, QU - XU * zU)
    }

    function ey(UU, XU) {
      const zU = Wy(UU.zoom, 1, 12);
      return {
        zoom: zU,
        x: Ly(UU.x, zU, XU.x0, XU.x1),
        y: Ly(UU.y, zU, XU.y0, XU.y1)
      }
    }

    function Cy(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Py;
      const QU = Wy(UU.zoom * XU, 1, 12),
        AU = QU / UU.zoom;
      return ey({
        zoom: QU,
        x: zU - (zU - UU.x) * AU,
        y: cU - (cU - UU.y) * AU
      }, yU)
    }

    function wy(UU, XU, zU, cU) {
      const [yU, QU] = (0, PU.useState)(Ry);
      (0, PU.useEffect)((() => {
        QU(Ry)
      }), [zU]), (0, PU.useEffect)((() => {
        const zU = UU.current;
        if (!XU || !zU) return;
        const yU = () => dy(zU.clientWidth, zU.clientHeight, cU),
          AU = UU => {
            const XU = zU.getBoundingClientRect();
            return {
              x: (UU.clientX - XU.left) / XU.width,
              y: (UU.clientY - XU.top) / XU.height
            }
          },
          FU = new Map;
        let oU = {
            x: 0,
            y: 0
          },
          DU = !1,
          EU = 0;
        const YU = UU => {
            UU.preventDefault();
            const XU = UU.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * UU.deltaY : UU.deltaY,
              zU = AU(UU);
            QU((UU => Cy(UU, Math.exp(.0015 * -XU), zU.x, zU.y, yU())))
          },
          NU = UU => {
            "mouse" === UU.pointerType && 0 !== UU.button || (FU.set(UU.pointerId, AU(UU)), 1 === FU.size && (oU = {
              x: UU.clientX,
              y: UU.clientY
            }, DU = !1), EU = 0)
          },
          IU = UU => {
            const XU = FU.get(UU.pointerId);
            if (!XU) return;
            const cU = AU(UU);
            if (FU.set(UU.pointerId, cU), 2 === FU.size) {
              const [UU, XU] = [...FU.values()], zU = Math.hypot(UU.x - XU.x, UU.y - XU.y);
              if (EU > 0) {
                const cU = zU / EU;
                QU((zU => Cy(zU, cU, (UU.x + XU.x) / 2, (UU.y + XU.y) / 2, yU())))
              }
              return EU = zU, void(DU = !0)
            }!DU && Math.hypot(UU.clientX - oU.x, UU.clientY - oU.y) < 4 || (DU || (DU = !0, zU.setPointerCapture(UU.pointerId)), QU((UU => function(UU, XU, zU) {
              let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Py;
              return ey({
                zoom: UU.zoom,
                x: UU.x + XU,
                y: UU.y + zU
              }, cU)
            }(UU, cU.x - XU.x, cU.y - XU.y, yU()))))
          },
          pU = UU => {
            FU.delete(UU.pointerId), EU = 0
          },
          aU = UU => {
            DU && (UU.stopPropagation(), UU.preventDefault(), DU = !1)
          },
          tU = new ResizeObserver((() => {
            QU((UU => ey(UU, yU())))
          }));
        return tU.observe(zU), zU.addEventListener("wheel", YU, {
          passive: !1
        }), zU.addEventListener("pointerdown", NU), zU.addEventListener("pointermove", IU), zU.addEventListener("pointerup", pU), zU.addEventListener("pointercancel", pU), zU.addEventListener("click", aU, !0), () => {
          tU.disconnect(), zU.removeEventListener("wheel", YU), zU.removeEventListener("pointerdown", NU), zU.removeEventListener("pointermove", IU), zU.removeEventListener("pointerup", pU), zU.removeEventListener("pointercancel", pU), zU.removeEventListener("click", aU, !0)
        }
      }), [UU, XU, zU, cU]);
      return {
        view: yU,
        zoomBy: XU => {
          const zU = UU.current;
          zU && QU((UU => Cy(UU, XU, .5, .5, dy(zU.clientWidth, zU.clientHeight, cU))))
        }
      }
    }

    function qy(UU) {
      var XU, zU, cU, yU;
      let {
        controller: QU,
        navigation: AU
      } = UU;
      const FU = (0, Ay.j)(DU, QU.getSnapshot()),
        {
          t: oU
        } = (0, Qy.I)(),
        EU = ky(),
        YU = FU.presentation,
        NU = (0, PU.useRef)(null),
        IU = (0, PU.useRef)(null),
        pU = Boolean(FU.open && (null === YU || void 0 === YU ? void 0 : YU.local) && YU.background),
        aU = wy(NU, pU, `${FU.open}|${FU.tab}|${null===YU||void 0===YU||null===(XU=YU.background)||void 0===XU?void 0:XU.geometryKey}`, null !== (zU = null === YU || void 0 === YU || null === (cU = YU.background) || void 0 === cU ? void 0 : cU.ratio) && void 0 !== zU ? zU : 2);
      if (Zy(IU, YU, FU.open, aU.view.zoom), !YU || !FU.open) return null;
      const tU = YU.local ? YU.background : null,
        gU = {
          "--map-ratio": String(null !== (yU = null === tU || void 0 === tU ? void 0 : tU.ratio) && void 0 !== yU ? yU : 2),
          backgroundColor: null === tU || void 0 === tU ? void 0 : tU.colour
        },
        kU = {
          "--map-zoom": String(aU.view.zoom),
          transform: `translate(${100*aU.view.x}%, ${100*aU.view.y}%) scale(${aU.view.zoom})`
        };
      return (0, Fy.jsx)(ay.c, {
        show: FU.open,
        close: QU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: EU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockMapTitle",
                children: oU("skyblockGame:map")
              }), YU.minimap && (0, Fy.jsx)("p", {
                children: YU.minimap.caption
              })]
            }), (0, Fy.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((UU => (0, Fy.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": UU === FU.tab ? "true" : void 0,
                className: Tc()({
                  Selected: UU === FU.tab
                }),
                "aria-pressed": UU === FU.tab,
                onClick: () => {
                  QU.selectTab(UU)
                },
                children: oU("local" === UU ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, UU)))
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: QU.dismiss
            })]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Fy.jsxs)("div", {
              ref: NU,
              className: Tc()("SkyblockMapCanvas", {
                Local: YU.local,
                Overview: !YU.local,
                Zoomed: aU.view.zoom > 1
              }),
              style: gU,
              children: [(0, Fy.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: pU ? kU : void 0,
                children: (0, Fy.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: IU,
                  children: [tU && (0, Fy.jsx)(py, {
                    className: "SkyblockMapTerrain",
                    imageKey: tU.imageKey,
                    fallbackImageKey: tU.fallbackImageKey,
                    geometryKey: tU.geometryKey,
                    alt: tU.label
                  }), YU.local && (0, Fy.jsx)(By, {
                    mount: AU.display.mountMapSearchArea
                  }), !YU.local && (0, Fy.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: YU.connections.map((UU => (0, Fy.jsx)("line", {
                      className: Tc()({
                        Explored: UU.explored
                      }),
                      x1: UU.start[0],
                      y1: UU.start[1],
                      x2: UU.end[0],
                      y2: UU.end[1]
                    }, UU.id)))
                  }), YU.points.map((UU => {
                    const XU = !YU.local && UU.thumbnail ? Ny[UU.thumbnail] : void 0;
                    return (0, Fy.jsxs)("div", {
                      className: Tc()("SkyblockMapNode", {
                        Current: UU.current
                      }),
                      style: {
                        left: `${UU.position[0]}%`,
                        top: `${UU.position[1]}%`
                      },
                      children: [(0, Fy.jsxs)(ty.f, {
                        className: Tc()("SkyblockMapPin", {
                          Unknown: !UU.visited,
                          Current: UU.current
                        }),
                        disabled: FU.pending,
                        onClick: () => {
                          QU.travel(UU.travelKind, UU.travelId)
                        },
                        children: [XU && (0, Fy.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: XU,
                          alt: ""
                        }), !XU && (0, Fy.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Fy.jsx)(Dy.e, {
                            icon: UU.icon
                          })
                        }), (0, Fy.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: UU.name
                        })]
                      }), UU.current && (0, Fy.jsx)("span", {
                        className: Tc()("SkyblockMapHereBadge", {
                          Above: UU.position[1] > 50
                        }),
                        children: oU("skyblockGame:mapYouAreHere")
                      })]
                    }, UU.id)
                  })), YU.portals.map((UU => (0, Fy.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${UU.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${UU.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Fy.jsxs)(ty.f, {
                      className: "SkyblockMapPin",
                      disabled: FU.pending,
                      onClick: () => {
                        QU.travel(UU.travelKind, UU.travelId)
                      },
                      children: [(0, Fy.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: UU.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Fy.jsx)(Dy.e, {
                          icon: UU.icon
                        })
                      }), (0, Fy.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: UU.name
                      })]
                    })
                  }, UU.id))), YU.local && (0, Fy.jsx)(Ey, {
                    controller: AU
                  })]
                })
              }), pU && (0, Fy.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Fy.jsx)("button", {
                  type: "button",
                  "aria-label": oU("skyblockGame:mapZoomIn"),
                  disabled: aU.view.zoom >= 12,
                  onClick: () => {
                    aU.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Fy.jsx)("button", {
                  type: "button",
                  "aria-label": oU("skyblockGame:mapZoomOut"),
                  disabled: aU.view.zoom <= 1,
                  onClick: () => {
                    aU.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Fy.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: FU.feedback
              })]
            })
          }), (0, Fy.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [YU.progress && (0, Fy.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Fy.jsx)("span", {
                children: YU.progress
              }), (0, Fy.jsx)(Gy, {
                percent: YU.percent,
                label: YU.progress
              })]
            }), YU.noLandmarks && (0, Fy.jsx)("span", {
              children: oU("skyblockGame:mapNoLandmarks")
            }), YU.canTravel && (0, Fy.jsx)("span", {
              className: "SkyblockMapHint",
              children: oU("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Oy(UU) {
      let {
        view: XU,
        controller: zU,
        navigation: cU
      } = UU;
      const {
        t: yU
      } = (0, Qy.I)(), {
        isTouchScreen: QU
      } = (0, hc.q)(["isTouchScreen"]);
      return (0, Fy.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": yU("skyblockGame:mapLocal"),
        children: [QU && (0, Fy.jsx)(ty.f, {
          className: "SkyblockMinimapOpen",
          onClick: zU.showLocal,
          children: yU("skyblockGame:map")
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: XU.colour
          },
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: cU.display.mountTerrain,
            style: {
              width: XU.width,
              height: XU.height
            },
            children: [(0, Fy.jsx)(py, {
              imageKey: XU.imageKey,
              fallbackImageKey: XU.fallbackImageKey,
              geometryKey: XU.geometryKey,
              alt: XU.label
            }), (0, Fy.jsx)(By, {
              mount: cU.display.mountMinimapSearchArea
            }), XU.markers.map((UU => (0, Fy.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${UU.position[0]}%`,
                top: `${UU.position[1]}%`,
                color: UU.colour
              },
              title: UU.name,
              children: (0, Fy.jsx)(Dy.e, {
                icon: UU.icon
              })
            }, UU.id)))]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: yU("skyblockGame:mapYouAreHere"),
            children: (0, Fy.jsx)(Dy.e, {
              icon: "player"
            })
          })]
        }), (0, Fy.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: XU.caption
        })]
      })
    }

    function Sy(UU) {
      let {
        controller: XU
      } = UU;
      return (0, Fy.jsxs)("div", {
        className: "SkyblockCompass",
        ref: XU.display.mountCompass,
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Fy.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Fy.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ry(UU) {
      let {
        controller: XU,
        surface: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)(), yU = (0, Ay.j)(fX, XU.getSnapshot()), QU = ky();
      return yU.enabled ? (0, Fy.jsxs)(Fy.Fragment, {
        children: ["hud" === zU && (0, Fy.jsx)(Uy.e, {
          placement: "statBars",
          children: yU.hud && (0, Fy.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": yU.hud.colour
            },
            children: [(0, Fy.jsx)(Gy, {
              percent: yU.hud.skill.percent,
              label: yU.hud.skill.xp,
              levelUpToken: yU.hud.levelUpToken,
              colour: yU.hud.colour
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Fy.jsxs)("span", {
                children: [yU.hud.skill.label, " \xb7 ", yU.hud.skill.level]
              }), (0, Fy.jsx)("span", {
                children: yU.hud.gain
              })]
            })]
          })
        }), "hud" === zU && (0, Fy.jsx)(Uy.e, {
          children: yU.hud && (0, Fy.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Fy.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Fy.jsx)("strong", {
                children: yU.hud.skill.label
              }), (0, Fy.jsx)("span", {
                children: yU.hud.gain
              })]
            }), (0, Fy.jsx)(Gy, {
              percent: yU.hud.skill.percent,
              label: yU.hud.skill.xp,
              levelUpToken: yU.hud.levelUpToken,
              colour: yU.hud.colour
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Fy.jsx)("span", {
                children: yU.hud.skill.level
              }), (0, Fy.jsx)("span", {
                children: yU.hud.skill.xp
              })]
            })]
          })
        }), "menu" === zU && (0, Fy.jsx)(ay.c, {
          show: yU.open,
          close: XU.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Fy.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: QU,
            onKeyDown: gy,
            children: [(0, Fy.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Fy.jsxs)("div", {
                children: [(0, Fy.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: cU("skyblockGame:skills")
                }), (0, Fy.jsx)("p", {
                  children: cU("skyblockGame:skillsIntro")
                })]
              }), (0, Fy.jsx)(ty.k, {
                padIgnore: !0,
                onClick: XU.dismiss
              })]
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Fy.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: yU.skills.map((UU => (0, Fy.jsxs)(ty.f, {
                  className: Tc()("SkyblockSkillCard", {
                    Selected: UU.selected
                  }),
                  ariaPressed: UU.selected,
                  onClick: () => {
                    XU.select(UU.id)
                  },
                  children: [(0, Fy.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: UU.icon,
                      amount: 0
                    })
                  }), (0, Fy.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Fy.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Fy.jsx)("strong", {
                        children: UU.label
                      }), (0, Fy.jsx)("span", {
                        children: UU.level
                      })]
                    }), (0, Fy.jsx)(Gy, {
                      percent: UU.percent,
                      label: `${UU.label}: ${UU.xp}`
                    }), (0, Fy.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: UU.xp
                    })]
                  })]
                }, UU.id)))
              }), yU.detail && (0, Fy.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Fy.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Fy.jsx)(zy.c, {
                    itemName: yU.detail.icon,
                    amount: 0
                  })
                }), (0, Fy.jsx)("h3", {
                  children: yU.detail.label
                }), (0, Fy.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: yU.detail.level
                }), (0, Fy.jsx)("p", {
                  children: yU.detail.description
                }), (0, Fy.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Fy.jsx)("strong", {
                    children: cU("skyblockGame:currentBenefit")
                  }), (0, Fy.jsx)("span", {
                    children: yU.detail.benefit
                  })]
                }), (0, Fy.jsx)(Gy, {
                  percent: yU.detail.percent,
                  label: yU.detail.xp
                }), (0, Fy.jsx)("p", {
                  children: yU.detail.xp
                }), (0, Fy.jsx)("h4", {
                  children: cU("skyblockGame:earnXp")
                }), (0, Fy.jsx)("ul", {
                  children: yU.detail.sources.map((UU => (0, Fy.jsx)("li", {
                    children: UU
                  }, UU)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var uy = zU(1420),
      fy = zU(5360),
      iy = zU(320);

    function Hy(UU) {
      let {
        item: XU
      } = UU;
      return (0, Fy.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Fy.jsx)(zy.c, {
          itemName: XU,
          amount: 0
        })
      })
    }

    function My(UU) {
      let {
        name: XU,
        percent: zU,
        progress: cU
      } = UU;
      return (0, Fy.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Fy.jsx)(Gy, {
          percent: zU,
          label: `${(0,iy.ub)(XU)}: ${cU}`
        }), (0, Fy.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: cU
        })]
      })
    }

    function vy(UU) {
      let {
        subquests: XU,
        showDescriptions: zU = !1
      } = UU;
      return (0, Fy.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: XU.map((UU => {
          const XU = zU && "completed" === UU.status,
            cU = (0, Fy.jsxs)("li", {
              className: Tc()("SkyblockQuestStep", UU.status, {
                JustFinished: UU.justFinished,
                JustUnlocked: UU.justUnlocked
              }),
              tabIndex: XU ? 0 : void 0,
              children: [null !== UU.iconItem && (0, Fy.jsx)(Hy, {
                item: UU.iconItem
              }), null === UU.iconItem && (0, Fy.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === UU.status ? "\u2713" : "skipped" === UU.status ? "\u2212" : "\u25cb"
              }), (0, Fy.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Fy.jsx)("strong", {
                  children: (0, Fy.jsx)(fy.e, {
                    text: UU.name
                  })
                }), zU && !XU && (0, Fy.jsx)("span", {
                  children: (0, Fy.jsx)(fy.e, {
                    text: UU.description
                  })
                }), null !== UU.barPercent && (0, Fy.jsx)(My, {
                  name: UU.name,
                  percent: UU.barPercent,
                  progress: UU.progress
                }), null === UU.barPercent && !XU && (0, Fy.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: UU.statusLabel
                })]
              })]
            }, UU.id);
          return XU ? (0, Fy.jsx)(uy.d, {
            delayShow: 200,
            tooltipInner: (0, Fy.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Fy.jsx)("span", {
                children: (0, Fy.jsx)(fy.e, {
                  text: UU.description
                })
              }), (0, Fy.jsx)("strong", {
                children: UU.statusLabel
              })]
            }),
            children: cU
          }, UU.id) : cU
        }))
      })
    }

    function Vy(UU) {
      let {
        quest: XU,
        select: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)(), yU = XU.focusStep;
      return (0, Fy.jsxs)(ty.f, {
        className: Tc()("SkyblockQuestCard", {
          Selected: XU.selected,
          Tracked: XU.tracked
        }),
        onClick: () => {
          zU(XU.id)
        },
        children: [(0, Fy.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Fy.jsx)("strong", {
            children: (0, Fy.jsx)(fy.e, {
              text: XU.name
            })
          }), XU.tracked && (0, Fy.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: cU("skyblockGame:currentQuest")
          })]
        }), yU && (0, Fy.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== yU.iconItem && (0, Fy.jsx)(Hy, {
            item: yU.iconItem
          }), (0, Fy.jsx)(My, {
            name: yU.name,
            percent: yU.barPercent,
            progress: yU.progress
          })]
        }), (0, Fy.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: XU.progress
        })]
      })
    }

    function sy(UU) {
      let {
        controller: XU,
        surface: zU
      } = UU;
      const cU = (0, Ay.j)(vX, XU.getSnapshot()),
        {
          t: yU
        } = (0, Qy.I)(),
        QU = ky();
      return cU.enabled ? (0, Fy.jsxs)(Fy.Fragment, {
        children: ["hud" === zU && (0, Fy.jsx)(Fy.Fragment, {
          children: cU.tracked && (0, Fy.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: MX,
            children: (0, Fy.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [cU.trackedStepPulse > 0 && (0, Fy.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, cU.trackedStepPulse), (0, Fy.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: yU("skyblockGame:currentQuest")
              }), (0, Fy.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Fy.jsx)("strong", {
                  children: (0, Fy.jsx)(fy.e, {
                    text: cU.tracked.name
                  })
                }), null !== cU.tracked.clock && (0, Fy.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: cU.tracked.clock
                })]
              }), (0, Fy.jsx)(vy, {
                subquests: cU.tracked.subquests
              })]
            })
          })
        }), "menu" === zU && (0, Fy.jsx)(ay.c, {
          show: cU.open,
          close: XU.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Fy.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: QU,
            onKeyDown: gy,
            children: [(0, Fy.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Fy.jsx)("div", {
                children: (0, Fy.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: yU("skyblockGame:quests")
                })
              }), (0, Fy.jsx)(ty.k, {
                padIgnore: !0,
                onClick: XU.dismiss
              })]
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Fy.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Fy.jsx)("h3", {
                  children: yU("skyblockGame:current")
                }), 0 === cU.active.length && (0, Fy.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: yU("skyblockGame:noActiveQuests")
                }), cU.active.map((UU => (0, Fy.jsx)(Vy, {
                  quest: UU,
                  select: XU.select
                }, UU.id))), (0, Fy.jsx)("h3", {
                  children: (0, Fy.jsxs)("button", {
                    type: "button",
                    className: Tc()("SkyblockQuestSectionToggle", {
                      Expanded: cU.completedExpanded
                    }),
                    "aria-expanded": cU.completedExpanded,
                    onClick: XU.toggleCompleted,
                    children: [(0, Fy.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), yU("skyblockGame:completed"), (0, Fy.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: cU.completed.length
                    })]
                  })
                }), cU.completedExpanded && 0 === cU.completed.length && (0, Fy.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: yU("skyblockGame:noCompletedQuests")
                }), cU.completedExpanded && cU.completed.map((UU => (0, Fy.jsx)(Vy, {
                  quest: UU,
                  select: XU.select
                }, UU.id)))]
              }), cU.detail && (0, Fy.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [cU.detail.completed && (0, Fy.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: yU("skyblockGame:completedQuest")
                }), (0, Fy.jsx)("h3", {
                  children: (0, Fy.jsx)(fy.e, {
                    text: cU.detail.name
                  })
                }), (0, Fy.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Fy.jsx)(fy.e, {
                    text: cU.detail.description
                  })
                }), (0, Fy.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [cU.detail.progress, null !== cU.detail.clock && (0, Fy.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: cU.detail.clock
                  })]
                }), (0, Fy.jsx)(vy, {
                  subquests: cU.detail.subquests,
                  showDescriptions: !0
                }), cU.detail.tracked && (0, Fy.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: cU.detail.trackLabel
                }), !cU.detail.completed && !cU.detail.tracked && (0, Fy.jsx)(ty.l, {
                  onClick: XU.trackSelected,
                  disabled: !cU.detail.canTrack,
                  children: cU.detail.trackLabel
                }), cU.detail.canViewDialogue && (0, Fy.jsx)(ty.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: XU.viewDialogue,
                  children: yU("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ny = zU(1390),
      my = zU(2858);

    function ly(UU, XU, zU, cU, yU) {
      const QU = UU => "linear" === yU ? UU : {
          GX: yU,
          point: UU
        },
        AU = {};
      for (const [FU, oU] of cU)
        for (const [XU, zU] of Object.entries(UU(FU, oU, QU))) AU[XU] ??= {
          timeline: []
        }, AU[XU].timeline.push(zU);
      return {
        pX: XU,
        loop: zU,
        tX: AU
      }
    }
    const xy = .547,
      Jy = .022,
      jy = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Ky = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function by(UU, XU, zU) {
      const {
        drop: cU = 0,
        shift: yU = 0,
        torso: QU = 0,
        nod: AU = 0,
        tilt: FU = 0,
        legs: oU = [0, 0],
        arms: DU = 0,
        spread: EU = 0
      } = XU, YU = xy * Math.cos(QU) - Jy * Math.sin(QU), NU = xy * Math.sin(QU) + Jy * Math.cos(QU), IU = zU([0, -cU, yU]);
      return {
        LowerBody: {
          timeFraction: UU,
          position: IU,
          rotation: zU([0, 0, 0])
        },
        UpperBody: {
          timeFraction: UU,
          position: IU,
          rotation: zU([QU, 0, FU])
        },
        HeadMesh: {
          timeFraction: UU,
          position: zU([0, YU - xy - cU, NU - Jy + yU]),
          rotation: zU([QU + AU, 0, FU])
        },
        LegLeftMesh: {
          timeFraction: UU,
          rotation: zU([oU[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: UU,
          rotation: zU([oU[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: zU([DU, 0, EU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: zU([DU, 0, -EU])
        }
      }
    }

    function Ty(UU, XU, zU) {
      return ly(by, UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function hy(UU) {
      return "number" === typeof UU ? [UU, UU] : UU
    }

    function UQ(UU, XU, zU) {
      const {
        rise: cU = 0,
        shift: yU = 0,
        torso: QU = 0,
        twist: AU = 0,
        tilt: FU = 0,
        nod: oU = 0,
        cock: DU = 0,
        arms: EU = 0,
        spread: YU = 0
      } = XU, [NU, IU] = hy(EU), [pU, aU] = hy(YU);
      return {
        TorsoNode: {
          timeFraction: UU,
          position: zU([0, cU, yU]),
          rotation: zU([QU, AU, FU])
        },
        HeadMesh: {
          timeFraction: UU,
          rotation: zU([oU, 0, DU])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: zU([NU, 0, pU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: zU([IU, 0, -aU])
        }
      }
    }
    const XQ = [1.0625, -1, 0];

    function zQ(UU) {
      return "number" === typeof UU ? [UU, UU] : UU
    }

    function cQ(UU, XU, zU) {
      const {
        drop: cU = 0,
        shift: yU = 0,
        torso: QU = 0,
        tilt: AU = 0,
        nod: FU = 0,
        cock: oU = 0,
        legs: DU = [0, 0],
        arms: EU = 0,
        spread: YU = 0
      } = XU, [NU, IU] = zQ(EU), [pU, aU] = zQ(YU), tU = -QU, gU = -AU, [kU, GU, BU] = function(UU, XU) {
        const [zU, cU, yU] = [-XQ[0], XQ[1], -XQ[2]], QU = zU * Math.cos(XU) - cU * Math.sin(XU), AU = zU * Math.sin(XU) + cU * Math.cos(XU);
        return [QU - zU, -(AU * Math.cos(UU) - yU * Math.sin(UU) - cU), AU * Math.sin(UU) + yU * Math.cos(UU) - yU]
      }(tU, gU), ZU = zU([0, -cU, yU]);
      return {
        TorsoNode: {
          timeFraction: UU,
          position: zU([kU, GU - cU, BU + yU]),
          rotation: zU([tU, 0, gU])
        },
        HeadMesh: {
          timeFraction: UU,
          rotation: zU([-FU, 0, -oU])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: zU([-NU, 0, -pU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: zU([-IU, 0, aU])
        },
        LegLeftMesh: {
          timeFraction: UU,
          position: ZU,
          rotation: zU([-DU[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: UU,
          position: ZU,
          rotation: zU([-DU[1], 0, 0])
        }
      }
    }
    var yQ = zU(37876),
      QQ = zU(39250),
      AQ = zU(39453);

    function FQ(UU, XU, zU) {
      var cU, yU;
      const QU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return UU + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - UU) * zU
        },
        [AU, FU] = null !== (cU = UU.legs) && void 0 !== cU ? cU : [0, 0],
        [oU, DU] = null !== (yU = XU.legs) && void 0 !== yU ? yU : [0, 0];
      return {
        drop: QU(UU.drop, XU.drop),
        shift: QU(UU.shift, XU.shift),
        torso: QU(UU.torso, XU.torso),
        nod: QU(UU.nod, XU.nod),
        tilt: QU(UU.tilt, XU.tilt),
        legs: [QU(AU, oU), QU(FU, DU)],
        arms: QU(UU.arms, XU.arms),
        spread: QU(UU.spread, XU.spread)
      }
    }
    const oQ = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      DQ = Ty(4400, !0, [
        [0, oQ],
        [.16, {
          ...oQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, oQ],
        [.44, {
          ...oQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, FQ(oQ, jy, .7)],
        [.66, FQ(oQ, jy, .78)],
        [.74, FQ(oQ, Ky, .65)],
        [.86, {
          ...oQ,
          drop: .14
        }],
        [1, oQ]
      ], "catmull-rom-spline"),
      EQ = {
        ...oQ,
        drop: .14,
        torso: .3,
        spread: .4
      },
      YQ = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      NQ = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      IQ = {
        caveGolem: DQ,
        magmaGolem: Ty(3600, !0, [
          [0, EQ],
          [.12, {
            ...EQ,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...EQ,
            tilt: -.08
          }],
          [.4, {
            ...EQ,
            tilt: .06,
            drop: .11
          }],
          [.52, FQ(EQ, jy, .9)],
          [.62, FQ(EQ, Ky, .8)],
          [.7, FQ(EQ, Ky, .45)],
          [.78, FQ(EQ, Ky, .85)],
          [.9, {
            ...EQ,
            drop: .17
          }],
          [1, EQ]
        ], "catmull-rom-spline"),
        frostWraith: function(UU, XU, zU) {
          return ly(UQ, UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, YQ],
          [.14, {
            ...YQ,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...YQ,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...YQ,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...YQ,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...YQ,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...YQ,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...YQ,
            rise: .16,
            tilt: -.04
          }],
          [1, YQ]
        ], "catmull-rom-spline"),
        tikiTerror: function(UU, XU, zU) {
          return ly(cQ, UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, NQ],
          [.16, {
            ...NQ,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, NQ],
          [.44, {
            ...NQ,
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
            ...NQ,
            drop: .1
          }],
          [1, NQ]
        ], "catmull-rom-spline")
      },
      pQ = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      aQ = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      tQ = Object.fromEntries(Object.entries(IQ).map((UU => {
        let [XU, zU] = UU;
        return [XU, (0, AQ.d)((0, yQ.g)(zU), XU)]
      })));

    function gQ(UU) {
      const XU = function(UU) {
        var XU;
        const zU = (0, QQ.b)(UU).poseRig;
        return null !== (XU = aQ[UU]) && void 0 !== XU ? XU : void 0 === zU ? null : pQ[zU]
      }(UU);
      return null === XU ? null : tQ[XU]
    }

    function kQ(UU) {
      return {
        "--difficulty-colour": UU
      }
    }
    const GQ = (0, PU.lazy)((() => (0, my.d)(zU.e(217).then((() => zU(44200))), (UU => UU.MobPreview))));

    function BQ(UU) {
      var XU, zU, cU;
      let {
        picker: yU,
        controller: QU
      } = UU;
      const {
        t: AU
      } = (0, Qy.I)(), FU = ky(), {
        page: oU
      } = yU;
      return (0, Fy.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: FU,
        onKeyDown: UU => {
          "ArrowLeft" === UU.key ? (UU.preventDefault(), UU.stopPropagation(), QU.previous()) : "ArrowRight" === UU.key ? (UU.preventDefault(), UU.stopPropagation(), QU.next()) : gy(UU)
        },
        style: kQ(oU.colour),
        children: [(0, Fy.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Fy.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: yU.dungeonName
          }), (0, Fy.jsx)(ty.k, {
            padIgnore: !0,
            onClick: QU.dismiss
          })]
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Fy.jsx)(ty.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !yU.canPrevious,
              onClick: QU.previous,
              children: (0, Fy.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Fy.jsx)(ny.d, {
                  name: "angle-up"
                })
              })
            }), (0, Fy.jsxs)("div", {
              className: Tc()("SkyblockBossPickerBoss", {
                Locked: !oU.unlocked
              }),
              children: [null !== oU.bossMobType && (0, Fy.jsx)(PU.Suspense, {
                fallback: (0, Fy.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Fy.jsx)(GQ, {
                  className: "SkyblockBossPickerModel",
                  mobType: oU.bossMobType,
                  variation: oU.bossMobVariation,
                  animation: null !== (XU = gQ(oU.bossMobType)) && void 0 !== XU ? XU : void 0
                })
              }), null === oU.bossMobType && (0, Fy.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Fy.jsx)(ty.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !yU.canNext,
              onClick: QU.next,
              children: (0, Fy.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Fy.jsx)(ny.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Fy.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [oU.beaten && (0, Fy.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), oU.label]
            }), (0, Fy.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (zU = oU.bossName) && void 0 !== zU ? zU : "???"
            }), (0, Fy.jsxs)("span", {
              className: Tc()("SkyblockBossPickerRecord", {
                Locked: null !== oU.lockedHint
              }),
              children: [null !== oU.lockedHintHighlight && (0, Fy.jsxs)(Fy.Fragment, {
                children: [oU.lockedHintHighlight.before, (0, Fy.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: kQ(oU.lockedHintHighlight.colour),
                  children: [null !== oU.lockedHintHighlight.icon && (0, Fy.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: oU.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), oU.lockedHintHighlight.name]
                }), oU.lockedHintHighlight.after]
              }), null === oU.lockedHintHighlight && (null !== (cU = oU.lockedHint) && void 0 !== cU ? cU : oU.summary)]
            })]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: yU.pages.map((UU => (0, Fy.jsx)("span", {
              className: Tc()("SkyblockBossPickerDot", {
                Current: UU.current,
                Locked: !UU.unlocked
              }),
              style: kQ(UU.colour)
            }, UU.difficulty)))
          }), (0, Fy.jsx)(ty.n, {
            className: "SkyblockBossPickerFight",
            disabled: !oU.unlocked,
            onClick: QU.enter,
            children: AU("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function ZQ(UU) {
      let {
        dungeon: XU,
        select: zU
      } = UU;
      return (0, Fy.jsxs)(ty.f, {
        className: Tc()("SkyblockDungeonCard", {
          Selected: XU.selected
        }),
        onClick: () => {
          zU(XU.id)
        },
        children: [(0, Fy.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Fy.jsx)("strong", {
            children: XU.name
          }), (0, Fy.jsx)("span", {
            children: XU.beatenSummary
          })]
        }), (0, Fy.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: XU.difficulties.map((UU => (0, Fy.jsxs)("span", {
            className: Tc()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: UU.beaten
            }),
            style: kQ(UU.colour),
            title: UU.summary,
            children: [UU.beaten && (0, Fy.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), UU.label]
          }, UU.difficulty)))
        })]
      })
    }

    function RQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(mX, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsxs)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [zU.picker && (0, Fy.jsx)(BQ, {
          picker: zU.picker,
          controller: XU
        }), !zU.picker && (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: cU("skyblockGame:dungeons")
              }), (0, Fy.jsx)("p", {
                children: cU("skyblockGame:dungeonsIntro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Fy.jsx)("div", {
              className: "SkyblockDungeonList",
              children: zU.dungeons.map((UU => (0, Fy.jsx)(ZQ, {
                dungeon: UU,
                select: XU.select
              }, UU.id)))
            }), zU.detail && (0, Fy.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Fy.jsx)("h3", {
                children: zU.detail.name
              }), (0, Fy.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: zU.detail.difficulties.map((UU => (0, Fy.jsxs)("li", {
                  className: Tc()("SkyblockDungeonRecord", {
                    Beaten: UU.beaten
                  }),
                  children: [(0, Fy.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: kQ(UU.colour),
                    children: [UU.beaten && (0, Fy.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), UU.label]
                  }), (0, Fy.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: UU.summary
                  })]
                }, UU.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function PQ(UU) {
      let {
        collection: XU,
        select: zU
      } = UU;
      return (0, Fy.jsxs)(ty.f, {
        className: Tc()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: XU.selected,
          Locked: XU.locked
        }),
        ariaPressed: XU.selected,
        onClick: () => {
          zU(XU.id)
        },
        children: [(0, Fy.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Fy.jsx)(zy.c, {
            itemName: XU.icon,
            amount: 0
          })
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Fy.jsx)("strong", {
              children: XU.name
            }), (0, Fy.jsx)("span", {
              children: XU.tier
            })]
          }), (0, Fy.jsx)(Gy, {
            percent: XU.percent,
            label: `${XU.name}: ${XU.progress}`
          }), (0, Fy.jsx)("span", {
            className: "SkyblockSkillXp",
            children: XU.progress
          })]
        })]
      })
    }

    function WQ(UU) {
      let {
        collection: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Fy.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Fy.jsx)(zy.c, {
            itemName: XU.icon,
            amount: 0
          })
        }), (0, Fy.jsx)("h3", {
          children: XU.name
        }), (0, Fy.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: XU.tier
        }), (0, Fy.jsx)("p", {
          children: XU.locked ? zU("skyblockGame:collectionLocked") : XU.count
        }), null !== XU.nextReward && (0, Fy.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Fy.jsx)("strong", {
            children: zU("skyblockGame:collectionNextReward")
          }), (0, Fy.jsx)("span", {
            children: XU.nextReward
          })]
        }), (0, Fy.jsx)(Gy, {
          percent: XU.percent,
          label: XU.progress
        }), (0, Fy.jsx)("p", {
          children: XU.progress
        })]
      })
    }

    function dQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Nz, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: cU("skyblockGame:collections")
              }), (0, Fy.jsxs)("p", {
                children: [cU("skyblockGame:collectionsIntro"), " ", zU.tiersUnlocked]
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: zU.categories.map((UU => (0, Fy.jsxs)(ty.f, {
              className: Tc()("SkyblockCollectionCategory", {
                Selected: UU.selected
              }),
              ariaPressed: UU.selected,
              padTabSelected: UU.selected,
              onClick: () => {
                XU.selectCategory(UU.id)
              },
              children: [(0, Fy.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Fy.jsx)(zy.c, {
                  itemName: UU.icon,
                  amount: 0
                })
              }), (0, Fy.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Fy.jsx)("strong", {
                  children: UU.label
                }), (0, Fy.jsx)("span", {
                  children: UU.tiers
                })]
              })]
            }, UU.id)))
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Fy.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: zU.collections.map((UU => (0, Fy.jsx)(PQ, {
                collection: UU,
                select: XU.select
              }, UU.id)))
            }), zU.detail && (0, Fy.jsx)(WQ, {
              collection: zU.detail
            })]
          })]
        })
      }) : null
    }
    const LQ = ["completed", "active", "available", "locked"],
      eQ = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function CQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Wz, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: cU("skyblockDevQuests:title")
              }), (0, Fy.jsx)("p", {
                children: cU("skyblockDevQuests:intro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [LQ.map((UU => (0, Fy.jsx)("span", {
              className: Tc()("SkyblockQuestGraphLegendState", UU),
              children: cU(`skyblockDevQuests:state_${UU}`)
            }, UU))), eQ.map((UU => (0, Fy.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Fy.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Fy.jsx)("line", {
                  className: Tc()("SkyblockQuestGraphEdge", UU),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), cU(`skyblockDevQuests:edge_${UU}`)]
            }, UU)))]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Fy.jsxs)("div", {
              className: Tc()("SkyblockQuestGraphCanvas", {
                Planning: zU.planning
              }),
              style: {
                width: zU.width,
                height: zU.height
              },
              children: [(0, Fy.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: zU.width,
                height: zU.height,
                "aria-hidden": "true",
                children: [(0, Fy.jsx)("defs", {
                  children: (0, Fy.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Fy.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), zU.edges.map((UU => (0, Fy.jsx)("path", {
                  className: Tc()("SkyblockQuestGraphEdge", UU.kind, {
                    InPlan: UU.inPlan
                  }),
                  d: UU.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, UU.key)))]
              }), zU.nodes.map((UU => (0, Fy.jsxs)("button", {
                type: "button",
                className: Tc()("SkyblockQuestGraphNode", UU.state, {
                  InPlan: UU.inPlan,
                  Hovered: UU.hovered
                }),
                style: {
                  left: UU.left,
                  top: UU.top,
                  width: 190,
                  height: 52
                },
                title: UU.id,
                onMouseEnter: () => {
                  XU.hover(UU.id)
                },
                onMouseLeave: () => {
                  XU.hover(null)
                },
                onFocus: () => {
                  XU.hover(UU.id)
                },
                onBlur: () => {
                  XU.hover(null)
                },
                onClick: () => {
                  XU.jump(UU.id)
                },
                children: [(0, Fy.jsx)("strong", {
                  children: UU.name
                }), (0, Fy.jsx)("span", {
                  children: UU.detail
                })]
              }, UU.id)))]
            })
          })]
        })
      }) : null
    }
    const wQ = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      qQ = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Hz}ms`,
        "--forge-duration": "2150ms"
      },
      OQ = Array.from({
        length: 18
      }, ((UU, XU) => ({
        "--ember-left": `${(4+92*(.618034*XU%1)).toFixed(1)}%`,
        "--ember-size": 3 + XU % 3 * 2 + "px",
        "--ember-drift": 14 * (XU % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*XU%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*XU%8).toFixed(2)}s`
      })));

    function SQ(UU) {
      if (UU.style.removeProperty("--part-size"), null === UU.parentElement || "wrap" === getComputedStyle(UU.parentElement).flexWrap) return;
      const XU = [...UU.children],
        zU = getComputedStyle(UU),
        cU = parseFloat(zU.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        yU = (UU.clientHeight - parseFloat(zU.rowGap) * (XU.length - 1)) / XU.length,
        QU = XU.map((UU => {
          const XU = getComputedStyle(UU),
            zU = UU.querySelector("h3"),
            QU = UU.querySelector(".SkyblockForgeParts");
          if (null === zU || null === QU) return cU;
          const AU = yU - parseFloat(XU.paddingTop) - parseFloat(XU.paddingBottom) - zU.offsetHeight - parseFloat(getComputedStyle(zU).marginBottom),
            FU = parseFloat(getComputedStyle(QU).columnGap),
            oU = QU.children.length;
          let DU = 0;
          for (let cU = 1; cU <= oU; cU++) {
            const UU = Math.ceil(oU / cU);
            DU = Math.max(DU, Math.min((QU.clientWidth - FU * (cU - 1)) / cU, (AU - FU * (UU - 1)) / UU))
          }
          return DU
        }));
      UU.style.setProperty("--part-size", `${Math.floor(Math.max(cU,Math.min(...QU)))}px`)
    }

    function rQ(UU) {
      var XU, zU, cU, yU, QU;
      let {
        controller: AU
      } = UU;
      const FU = (0, Ay.j)(lz, AU.getSnapshot()),
        {
          t: oU
        } = (0, Qy.I)(),
        DU = ky(),
        EU = function() {
          const UU = (0, PU.useRef)(null),
            XU = (0, PU.useRef)(null);
          return (0, PU.useLayoutEffect)((() => {
            null !== UU.current && SQ(UU.current)
          })), (0, PU.useCallback)((zU => {
            var cU;
            null === (cU = XU.current) || void 0 === cU || cU.disconnect(), XU.current = null, UU.current = zU, null !== zU && (XU.current = new ResizeObserver((() => {
              SQ(zU)
            })), XU.current.observe(zU))
          }), [])
        }(),
        NU = function(UU) {
          const XU = (0, PU.useRef)(null);
          return (0, PU.useLayoutEffect)((() => {
            const UU = XU.current;
            if (null !== UU) {
              UU.style.removeProperty("font-size");
              for (let XU = 1.7; XU > 1.1 && UU.scrollWidth > UU.clientWidth; XU -= .1) UU.style.fontSize = XU - .1 + "rem"
            }
          }), [UU]), (0, PU.useCallback)((UU => {
            XU.current = UU
          }), [])
        }(null === (XU = FU.preview) || void 0 === XU ? void 0 : XU.name),
        IU = (0, PU.useRef)(null),
        pU = (0, PU.useRef)({}),
        aU = FU.forging,
        tU = null !== (zU = null === aU || void 0 === aU ? void 0 : aU.preview.tier) && void 0 !== zU ? zU : 0,
        gU = null !== (cU = null === aU || void 0 === aU ? void 0 : aU.preview.named) && void 0 !== cU && cU,
        kU = (0, PU.useMemo)((() => {
          return null === aU ? null : {
            flames: (UU = tU, XU = gU, Array.from({
              length: 26 + 6 * UU + (XU ? 20 : 0)
            }, ((UU, XU) => {
              const zU = XU < 6,
                cU = Math.random() * Math.PI * 2,
                yU = zU ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                QU = Math.cos(cU) * yU,
                AU = Math.sin(cU) * yU - 2 - 3 * Math.random(),
                FU = Math.random(),
                [oU, DU, EU] = zU ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : FU < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : FU < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [FU < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": oU,
                "--x0": `${(.15*QU).toFixed(2)}rem`,
                "--y0": `${(.15*AU).toFixed(2)}rem`,
                "--x": `${QU.toFixed(2)}rem`,
                "--y": `${AU.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${DU.toFixed(2)}rem`,
                "--duration": `${Math.round(EU)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Vz(tU, gU)
          };
          var UU, XU
        }), [null === aU || void 0 === aU ? void 0 : aU.id]);
      if (!FU.enabled) return null;
      const GU = FU.preview,
        BU = FU.arriving,
        ZU = null !== BU && !BU.sameSword,
        RU = null !== GU && (0, Fy.jsx)(zy.c, {
          itemName: GU.baseSword,
          amount: 0,
          enchantmentTier: GU.enchantmentTier
        });
      return (0, Fy.jsx)(ay.c, {
        show: FU.open,
        close: AU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: DU,
          onKeyDown: gy,
          children: [(0, Fy.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: OQ.map(((UU, XU) => (0, Fy.jsx)("span", {
              style: UU
            }, XU)))
          }), (0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: oU("skyblockGame:forgeTitle")
              }), (0, Fy.jsx)("p", {
                children: oU("skyblockGame:forgeIntro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              onClick: AU.dismiss
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Fy.jsx)("div", {
              ref: EU,
              className: Tc()("SkyblockForgeSlots", {
                Locked: null !== aU
              }),
              children: FU.slots.map((UU => (0, Fy.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Fy.jsx)("h3", {
                  children: UU.label
                }), (0, Fy.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: UU.parts.map((XU => (0, Fy.jsx)("button", {
                    type: "button",
                    className: Tc()("SkyblockForgePart", {
                      Selected: XU.selected,
                      Missing: XU.placeholder
                    }),
                    disabled: XU.placeholder,
                    title: XU.placeholder ? oU("skyblockGame:forgePickParts") : XU.itemName,
                    "aria-pressed": XU.selected,
                    onClick: () => {
                      AU.select(UU.kind, XU.material)
                    },
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: XU.itemName,
                      amount: XU.owned
                    })
                  }, XU.material)))
                })]
              }, UU.kind)))
            }), (0, Fy.jsxs)("div", {
              className: Tc()("SkyblockForgeAnvil", {
                Named: null === GU || void 0 === GU ? void 0 : GU.named
              }),
              style: {
                "--tier": null === GU ? "transparent" : YU.pb[GU.enchantmentTier]
              },
              children: [(0, Fy.jsxs)("div", {
                className: Tc()("SkyblockForgeAltar", {
                  Forging: null !== aU
                }),
                style: null === aU ? void 0 : qQ,
                children: [(0, Fy.jsxs)("div", {
                  className: Tc()("SkyblockForgeMount", {
                    Arrive: null !== BU
                  }),
                  children: [null === GU && (0, Fy.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: FU.unformedSword,
                      amount: 0
                    })
                  }), null !== GU && (0, Fy.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== GU && null === aU && (0, Fy.jsx)("div", {
                    ref: IU,
                    className: "SkyblockForgeFloat",
                    children: (0, Fy.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: RU
                    })
                  }), null !== GU && (0, Fy.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: vz.map(((UU, XU) => (0, Fy.jsx)("span", {
                      className: Tc()({
                        Rune: "" !== UU.rune
                      }),
                      style: UU.style,
                      children: UU.rune
                    }, XU)))
                  }), null !== aU && null !== kU && (0, Fy.jsxs)(Fy.Fragment, {
                    children: [(0, Fy.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: kU.flames.map(((UU, XU) => (0, Fy.jsx)("span", {
                        style: UU
                      }, XU)))
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: pU.current,
                      children: (0, Fy.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: RU
                      })
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (tU >= 4 || gU) && (0, Fy.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: kU.sparks.map(((UU, XU) => (0, Fy.jsx)("span", {
                        style: UU
                      }, XU)))
                    }), (0, Fy.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Fy.jsx)("p", {
                  className: Tc()("SkyblockForgeStatus", null === (yU = FU.status) || void 0 === yU ? void 0 : yU.tone),
                  children: null === (QU = FU.status) || void 0 === QU ? void 0 : QU.text
                })]
              }), null === GU && (0, Fy.jsx)("p", {
                className: Tc()("SkyblockForgeName Waiting", {
                  ArriveText: ZU
                }),
                children: oU(FU.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== GU && (0, Fy.jsx)("h3", {
                ref: NU,
                className: Tc()("SkyblockForgeName", {
                  ArriveText: ZU
                }),
                title: GU.name,
                children: GU.name
              }), (null === GU || void 0 === GU ? void 0 : GU.named) && (0, Fy.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: oU("skyblockGame:forgeSecret")
              }), (0, Fy.jsxs)(ty.n, {
                className: "SkyblockForgeButton",
                disabled: !FU.canForge,
                title: null === GU ? void 0 : oU("skyblockGame:forgeCoalOwned", {
                  owned: String(FU.coalOwned)
                }),
                onClick: () => {
                  pU.current = function(UU) {
                    const XU = null === UU ? "none" : getComputedStyle(UU).transform,
                      zU = new DOMMatrixReadOnly("none" === XU ? void 0 : XU);
                    return {
                      "--settle-y": `${zU.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(zU.b,zU.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(IU.current), mz(), AU.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [oU("skyblockGame:forgeButton"), null !== GU && (0, Fy.jsxs)("span", {
                  className: Tc()("SkyblockForgeCost", {
                    Short: GU.coalShort
                  }),
                  children: [(0, Fy.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Fy.jsx)(zy.c, {
                      itemName: wz.e,
                      amount: 0
                    })
                  }), GU.coalCost]
                })]
              })]
            }), (0, Fy.jsxs)("div", {
              className: Tc()("SkyblockForgeDetails", {
                Named: null === GU || void 0 === GU ? void 0 : GU.named
              }),
              children: [(0, Fy.jsx)("p", {
                className: Tc()("SkyblockForgeLore", {
                  ArriveText: ZU
                }),
                title: null === GU || void 0 === GU ? void 0 : GU.lore,
                children: null === GU || void 0 === GU ? void 0 : GU.lore
              }), (0, Fy.jsxs)("dl", {
                className: Tc()("SkyblockForgeStats", {
                  ArriveText: ZU
                }),
                children: [null === GU && wQ.map((UU => (0, Fy.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Fy.jsx)("dt", {
                    children: oU(UU)
                  }), (0, Fy.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, UU))), null === GU || void 0 === GU ? void 0 : GU.stats.map((UU => (0, Fy.jsxs)("div", {
                  className: Tc()("SkyblockForgeStat", {
                    Better: UU.better
                  }),
                  children: [(0, Fy.jsx)("dt", {
                    children: UU.label
                  }), (0, Fy.jsx)("dd", {
                    children: UU.value
                  })]
                }, UU.label)))]
              }), (0, Fy.jsx)("ul", {
                className: Tc()("SkyblockForgeEffects", {
                  ArriveText: ZU
                }),
                children: null === GU || void 0 === GU ? void 0 : GU.effects.map((UU => (0, Fy.jsx)("li", {
                  children: UU
                }, UU)))
              })]
            })]
          })]
        })
      })
    }
    const uQ = "Doom Rivet",
      fQ = "Doom Crest";

    function iQ(UU) {
      let {
        itemName: XU,
        amount: zU,
        owned: cU
      } = UU;
      return (0, Fy.jsxs)("span", {
        className: Tc()("SkyblockSmugglerPrice", {
          Short: zU > cU
        }),
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Fy.jsx)(zy.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, Fy.jsx)("span", {
          children: zU
        })]
      })
    }

    function HQ(UU) {
      return UU.justBought ? "skyblockGame:smugglerJustBought" : UU.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function MQ(UU) {
      let {
        deal: XU,
        view: zU,
        buy: cU
      } = UU;
      const {
        t: yU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("div", {
        className: Tc()("SkyblockSmugglerPocket", {
          Bought: XU.justBought,
          Unaffordable: !XU.affordable,
          SoldOut: XU.soldOut && !XU.justBought
        }),
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Fy.jsx)(zy.c, {
            itemName: XU.itemName,
            amount: 0,
            enchantmentTier: XU.enchantmentTier
          }), XU.amount > 1 && (0, Fy.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: yU("skyblockGame:smugglerAmount", {
              amount: XU.amount
            })
          })]
        }), (0, Fy.jsx)("h3", {
          children: XU.displayName
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [XU.rivets > 0 && (0, Fy.jsx)(iQ, {
              itemName: uQ,
              amount: XU.rivets,
              owned: zU.rivetsOwned
            }), XU.crests > 0 && (0, Fy.jsx)(iQ, {
              itemName: fQ,
              amount: XU.crests,
              owned: zU.crestsOwned
            })]
          }), (0, Fy.jsx)(ty.f, {
            className: "SkyblockSmugglerBuy",
            disabled: XU.soldOut || !XU.affordable || zU.pending,
            onClick: () => {
              cU(XU.slot)
            },
            children: yU(HQ(XU))
          })]
        })]
      }, XU.justBought ? zU.boughtCount : 0)
    }

    function vQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(jz, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Fy.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Fy.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: cU("skyblockGame:smugglerTitle")
              }), (0, Fy.jsx)("p", {
                children: cU("skyblockGame:smugglerIntro")
              })]
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Fy.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Fy.jsx)(iQ, {
                  itemName: uQ,
                  amount: zU.rivetsOwned,
                  owned: zU.rivetsOwned
                }), (0, Fy.jsx)(iQ, {
                  itemName: fQ,
                  amount: zU.crestsOwned,
                  owned: zU.crestsOwned
                })]
              }), (0, Fy.jsx)(ty.k, {
                onClick: XU.dismiss
              })]
            })]
          }), (0, Fy.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: zU.deals.map((UU => (0, Fy.jsx)(MQ, {
              deal: UU,
              view: zU,
              buy: XU.buy
            }, UU.slot)))
          }), (0, Fy.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: zU.rotatesText
            }), null !== zU.status && (0, Fy.jsx)("span", {
              className: Tc()("SkyblockSmugglerStatus", zU.status.tone),
              children: zU.status.text
            })]
          })]
        })
      }) : null
    }

    function VQ(UU) {
      let {
        phase: XU,
        className: zU
      } = UU;
      return (0, Fy.jsx)("span", {
        className: Tc()("SkyblockMoon", `Moon-${XU}`, zU),
        "aria-hidden": "true"
      })
    }

    function sQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Tz, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)();
      return zU.enabled ? (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Tc()("SkyblockPassageChip", zU.open && "Open"),
          "aria-label": cU("skyblockGame:passageChipLabel", {
            phase: zU.phaseName
          }),
          title: cU("skyblockGame:passageChipLabel", {
            phase: zU.phaseName
          }),
          onMouseDown: UU => {
            UU.preventDefault()
          },
          onClick: XU.toggle,
          children: (0, Fy.jsx)(VQ, {
            phase: zU.phase
          }, zU.phase)
        })
      }) : null
    }

    function nQ(UU) {
      let {
        fish: XU
      } = UU;
      return (0, Fy.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Fy.jsx)(zy.c, {
            itemName: XU.itemName,
            amount: 0
          })
        }), (0, Fy.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: XU.displayName
          }), (0, Fy.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: XU.where
          })]
        })]
      })
    }

    function mQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Tz, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Fy.jsx)(VQ, {
              phase: zU.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: cU("skyblockGame:passageTitle")
              }), (0, Fy.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: zU.phaseName
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: cU("skyblockGame:passageIntro")
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Fy.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Fy.jsx)("h3", {
                children: cU("skyblockGame:passageVisiting")
              }), (0, Fy.jsx)("ul", {
                className: "SkyblockPassageList",
                children: zU.visitors.map((UU => (0, Fy.jsx)(nQ, {
                  fish: UU
                }, UU.itemName)))
              })]
            }), (0, Fy.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== zU.resting && (0, Fy.jsxs)(Fy.Fragment, {
                children: [(0, Fy.jsx)("h3", {
                  children: cU("skyblockGame:passageResting")
                }), (0, Fy.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Fy.jsx)(nQ, {
                    fish: zU.resting
                  })
                })]
              }), (0, Fy.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Fy.jsx)(VQ, {
                  phase: zU.nextPhase
                }), (0, Fy.jsx)("span", {
                  children: zU.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function lQ() {
      return (0, Fy.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((UU => (0, Fy.jsx)("i", {
          style: {
            "--sparkle-index": UU
          }
        }, UU)))
      })
    }

    function xQ(UU) {
      var XU;
      let {
        charm: zU,
        view: cU,
        controller: yU
      } = UU;
      const {
        t: QU
      } = (0, Qy.I)(), AU = cU.shop, FU = (null === (XU = cU.sparkle) || void 0 === XU ? void 0 : XU.id) === zU.id;
      return (0, Fy.jsxs)("li", {
        className: Tc()("SkyblockLampLightCharm", zU.owned && "Owned", zU.socketed && "Socketed"),
        children: [FU && (0, Fy.jsx)(lQ, {}, cU.sparkle.count), (0, Fy.jsx)("h4", {
          children: zU.name
        }), (0, Fy.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: zU.effect
        }), (0, Fy.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: zU.lines.map((UU => (0, Fy.jsxs)("li", {
            className: Tc()("SkyblockLampLightOddsLine", "better" === UU.tone ? "Better" : "worse" === UU.tone ? "Worse" : "Same"),
            children: [(0, Fy.jsx)("span", {
              className: "Before",
              children: UU.before
            }), (0, Fy.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Fy.jsx)("span", {
              className: "After",
              children: UU.after
            })]
          }, UU.label)))
        }), (0, Fy.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: zU.owned ? zU.socketed ? (0, Fy.jsxs)(Fy.Fragment, {
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: QU("skyblockGame:lampLightSocketed")
            }), (0, Fy.jsx)(ty.O, {
              disabled: !cU.canCommand,
              ariaLabel: QU("skyblockGame:lampLightRemoveLabel", {
                charm: zU.name
              }),
              onClick: () => {
                yU.socket(null)
              },
              children: QU("skyblockGame:lampLightRemove")
            })]
          }) : (0, Fy.jsx)(ty.f, {
            disabled: !cU.canCommand || !AU.heldRod,
            ariaLabel: QU("skyblockGame:lampLightSocketLabel", {
              charm: zU.name
            }),
            onClick: () => {
              yU.socket(zU.id)
            },
            children: QU("skyblockGame:lampLightSocket")
          }) : (0, Fy.jsx)(ty.f, {
            disabled: !cU.canCommand || !zU.affordable,
            ariaLabel: QU("skyblockGame:lampLightBuyLabel", {
              item: zU.name,
              cost: zU.cost
            }),
            onClick: () => {
              yU.buy(zU.id)
            },
            children: zU.cost
          })
        })]
      })
    }

    function JQ(UU) {
      var XU;
      let {
        tint: zU,
        view: cU,
        controller: yU
      } = UU;
      const {
        t: QU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("li", {
        className: Tc()("SkyblockLampLightTint", zU.wearing && "Wearing"),
        style: {
          "--tint-colour": zU.colour
        },
        children: [(null === (XU = cU.sparkle) || void 0 === XU ? void 0 : XU.id) === zU.id && (0, Fy.jsx)(lQ, {}, cU.sparkle.count), (0, Fy.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Fy.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: zU.name
        }), zU.wearing ? (0, Fy.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: QU("skyblockGame:lampLightWearing")
        }) : (0, Fy.jsx)(ty.f, {
          disabled: !cU.canCommand || !zU.owned && !zU.affordable,
          ariaLabel: zU.owned ? QU("skyblockGame:lampLightWearLabel", {
            tint: zU.name
          }) : QU("skyblockGame:lampLightBuyLabel", {
            item: zU.name,
            cost: zU.cost
          }),
          onClick: () => {
            zU.owned ? yU.wearTint(zU.id) : yU.buy(zU.id)
          },
          children: zU.owned ? QU("skyblockGame:lampLightWear") : zU.cost
        })]
      })
    }

    function jQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Nc, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = zU.shop;
      return (0, Fy.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Fy.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: zU.balance
          }), (0, Fy.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": zU.releasing,
            className: Tc()("SkyblockLampLightSwitch", zU.releasing && "On"),
            disabled: zU.releasing ? "ready" !== zU.status : !zU.canCommand,
            onClick: () => {
              XU.setRelease(!zU.releasing)
            },
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Fy.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), cU("skyblockGame:lampLightRelease")]
          }), (0, Fy.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: cU("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== zU.notice && (0, Fy.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: zU.notice
        }), null !== yU && (0, Fy.jsxs)(Fy.Fragment, {
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Fy.jsx)("h3", {
              children: cU("skyblockGame:lampLightCharms")
            }), (0, Fy.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: yU.oddsFor
            }), (0, Fy.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((UU => (0, Fy.jsx)("button", {
                type: "button",
                "aria-pressed": zU.situation === UU,
                className: Tc()("SkyblockLampLightSituation", zU.situation === UU && "Selected"),
                onClick: () => {
                  XU.setSituation(UU)
                },
                children: cU("open" === UU ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, UU)))
            })]
          }), !yU.heldRod && (0, Fy.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: cU("skyblockGame:lampLightHoldRod")
          }), (0, Fy.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: yU.charms.map((UU => (0, Fy.jsx)(xQ, {
              charm: UU,
              view: zU,
              controller: XU
            }, UU.id)))
          }), (0, Fy.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Fy.jsx)("h3", {
              children: cU("skyblockGame:lampLightTints")
            })
          }), (0, Fy.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Fy.jsxs)("li", {
              className: Tc()("SkyblockLampLightTint", "Islands", yU.wearingIslandColours && "Wearing"),
              children: [(0, Fy.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Fy.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: cU("skyblockGame:lampLightIslandColours")
              }), yU.wearingIslandColours ? (0, Fy.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: cU("skyblockGame:lampLightWearing")
              }) : (0, Fy.jsx)(ty.f, {
                disabled: !zU.canCommand,
                ariaLabel: cU("skyblockGame:lampLightWearLabel", {
                  tint: cU("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  XU.wearTint(null)
                },
                children: cU("skyblockGame:lampLightWear")
              })]
            }), yU.tints.map((UU => (0, Fy.jsx)(JQ, {
              tint: UU,
              view: zU,
              controller: XU
            }, UU.id)))]
          })]
        })]
      })
    }

    function KQ(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Nc, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)();
      return zU.releasing ? (0, Fy.jsx)(Uy.e, {
        children: (0, Fy.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            XU.setRelease(!1)
          },
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Fy.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [cU("skyblockGame:lampLightReleasing"), " \xb7 ", zU.balance]
          }), (0, Fy.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: cU("skyblockGame:lampLightKeepCatches")
          }), null !== zU.gained && (0, Fy.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: zU.gained.text
          }, zU.gained.count)]
        })
      }) : null
    }

    function bQ(UU) {
      let {
        island: XU,
        view: zU,
        aim: cU
      } = UU;
      const {
        t: yU
      } = (0, Qy.I)(), QU = XU.featuredFish;
      return (0, Fy.jsxs)("li", {
        className: Tc()("SkyblockKeepersChairIsland", `Island-${XU.id}`, XU.favoured && "Aimed", !XU.relit && "Dark"),
        children: [(0, Fy.jsx)("h3", {
          children: XU.name
        }), XU.relit && null !== QU ? (0, Fy.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: yU("skyblockGame:keepersChairTideNotice")
          }), (0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Fy.jsx)(zy.c, {
              itemName: QU.itemName,
              amount: 0
            })
          }), (0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: QU.displayName
          })]
        }) : (0, Fy.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: yU("skyblockGame:keepersChairDark")
          })
        }), XU.relit && (XU.favoured ? (0, Fy.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: yU("skyblockGame:keepersChairAimed")
        }) : (0, Fy.jsx)(ty.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !zU.canAim,
          ariaLabel: yU("skyblockGame:keepersChairAimLabel", {
            island: XU.name
          }),
          onClick: () => {
            cU(XU.id)
          },
          children: yU("skyblockGame:keepersChairAim")
        }))]
      }, XU.favoured ? zU.aimedCount : 0)
    }

    function TQ(UU) {
      let {
        controller: XU,
        lampLight: zU
      } = UU;
      const cU = (0, Ay.j)(yc, XU.getSnapshot()),
        yU = (0, Ay.j)(Nc, zU.getSnapshot()),
        [QU, AU] = (0, PU.useState)("lamp"),
        {
          t: FU
        } = (0, Qy.I)(),
        oU = ky();
      if (!cU.enabled) return null;
      const DU = "light" === QU && yU.enabled;
      return (0, Fy.jsx)(ay.c, {
        show: cU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: Tc()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", DU && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: oU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: FU("skyblockGame:keepersChairTitle")
              }), (0, Fy.jsx)("p", {
                children: FU(DU ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              ariaLabel: FU("skyblockGame:keepersChairClose"),
              onClick: XU.dismiss
            })]
          }), yU.enabled && (0, Fy.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((UU => (0, Fy.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === UU === DU,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === UU === DU ? "true" : void 0,
              className: Tc()("SkyblockKeepersChairTab", "light" === UU === DU && "Selected"),
              onClick: () => {
                AU(UU)
              },
              children: [FU("lamp" === UU ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === UU && (0, Fy.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: yU.balance
              })]
            }, UU)))
          }), DU ? (0, Fy.jsx)(jQ, {
            controller: zU
          }) : (0, Fy.jsx)(hQ, {
            view: cU,
            controller: XU
          })]
        })
      })
    }

    function hQ(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)(Fy.Fragment, {
        children: [(0, Fy.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: XU.islands.map((UU => (0, Fy.jsx)(bQ, {
            island: UU,
            view: XU,
            aim: zU.aim
          }, UU.id)))
        }), null !== XU.almanac && (0, Fy.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: cU("skyblockGame:passageTitle")
          }), (0, Fy.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Fy.jsx)(VQ, {
              phase: XU.almanac.phase
            }), XU.almanac.phaseName]
          }), (0, Fy.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Fy.jsx)(VQ, {
              phase: XU.almanac.nextPhase
            }), XU.almanac.next]
          })]
        }), (0, Fy.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: cU("skyblockGame:keepersChairFavour")
          }), XU.aimed && (0, Fy.jsx)(ty.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !XU.canAim,
            onClick: () => {
              zU.aim(null)
            },
            children: cU("skyblockGame:keepersChairRest")
          })]
        }), null !== XU.status && (0, Fy.jsx)("p", {
          className: Tc()("SkyblockKeepersChairStatus", "refused" === XU.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: XU.status.text
        })]
      })
    }

    function UA(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(Ac, XU.getSnapshot());
      if (!cU.enabled) return null;
      const yU = cU.freshCount > 0 ? zU("skyblockGame:reachLogOpenNews", {
        count: cU.freshCount
      }) : zU("skyblockGame:reachLogOpen");
      return (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsxs)("button", {
          type: "button",
          className: Tc()("SkyblockReachLogButton", cU.freshCount > 0 && "HasNews", cU.pending && "Pending"),
          "aria-label": yU,
          title: yU,
          onClick: XU.ask,
          children: [cU.news && (0, Fy.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${cU.newsToken}`), (0, Fy.jsx)("span", {
            className: Tc()("SkyblockReachLogIcon", cU.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Fy.jsx)(zy.c, {
              itemName: oc,
              amount: 0
            })
          }, `icon:${cU.newsToken}`), cU.freshCount > 0 && (0, Fy.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: cU.freshCount
          })]
        })
      })
    }

    function XA(UU) {
      let {
        gift: XU
      } = UU;
      return (0, Fy.jsx)("li", {
        className: Tc()("SkyblockRegularsGift", XU.given && "Given"),
        children: XU.text
      })
    }

    function zA(UU) {
      let {
        regular: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("li", {
        className: Tc()("SkyblockRegularsCard", XU.tagged ? "Tagged" : "Untagged", XU.resting && "Resting"),
        children: [(0, Fy.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: XU.fishName,
            children: (0, Fy.jsx)(zy.c, {
              itemName: XU.itemName,
              amount: 0
            })
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Fy.jsx)("h3", {
              children: XU.name
            }), (0, Fy.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: XU.fishName
            })]
          })]
        }), (0, Fy.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: XU.line
        }), (0, Fy.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: XU.size
          }), XU.tagged && (0, Fy.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: XU.resting ? zU("skyblockGame:regularsResting") : XU.meetings
          })]
        }), (0, Fy.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: XU.chance
        }), (0, Fy.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: XU.gifts.map((UU => (0, Fy.jsx)(XA, {
            gift: UU
          }, UU.text)))
        }), XU.history.length > 0 && (0, Fy.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: XU.history.map(((UU, XU) => (0, Fy.jsx)("li", {
            children: UU
          }, XU)))
        })]
      })
    }

    function cA(UU) {
      let {
        controller: XU,
        island: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)(), yU = (0, Ay.j)(qc, XU.getSnapshot()), QU = yU.islands.find((UU => UU.id === zU));
      if (!yU.enabled || void 0 === QU) return null;
      const AU = cU("skyblockGame:regularsOpen");
      return (0, Fy.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": AU,
        title: AU,
        onClick: () => {
          XU.openIsland(zU)
        },
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: cU("skyblockGame:regularsTitle")
        }), QU.regulars.map((UU => (0, Fy.jsx)("span", {
          className: Tc()("SkyblockRegularsStripIcon", UU.tagged && "Tagged"),
          title: UU.name,
          children: (0, Fy.jsx)(zy.c, {
            itemName: UU.itemName,
            amount: 0
          })
        }, UU.id)))]
      })
    }

    function yA(UU) {
      var XU;
      let {
        controller: zU
      } = UU;
      const cU = (0, Ay.j)(qc, zU.getSnapshot()),
        {
          t: yU
        } = (0, Qy.I)(),
        QU = ky();
      if (!cU.enabled) return null;
      const AU = null !== (XU = cU.islands.find((UU => UU.id === cU.selected))) && void 0 !== XU ? XU : null;
      return (0, Fy.jsx)(ay.c, {
        show: cU.open,
        close: zU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: QU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: yU("skyblockGame:regularsTitle")
              }), (0, Fy.jsx)("p", {
                children: yU("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: zU.dismiss
            })]
          }), (0, Fy.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: cU.islands.map((UU => {
              const XU = UU.id === cU.selected;
              return (0, Fy.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": XU,
                "data-pad-tab": !0,
                "data-pad-selected": XU ? "true" : void 0,
                className: Tc()("SkyblockReachLogTab", `Island-${UU.id}`, XU && "Selected", UU.charm.given && "GoldPage"),
                onClick: () => {
                  zU.selectIsland(UU.id)
                },
                children: (0, Fy.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: UU.name
                })
              }, UU.id)
            }))
          }), (0, Fy.jsxs)("div", {
            className: Tc()("SkyblockRegularsPage", null !== AU && `Island-${AU.id}`),
            role: "tabpanel",
            children: [(0, Fy.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: yU("skyblockGame:regularsHow")
            }), null !== AU && (0, Fy.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: AU.regulars.map((UU => (0, Fy.jsx)(zA, {
                regular: UU
              }, UU.id)))
            })]
          }), null !== AU && (0, Fy.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Fy.jsx)("span", {
              className: Tc()("SkyblockRegularsCharm", AU.charm.given && "Given"),
              children: AU.charm.text
            })
          })]
        })
      })
    }
    const QA = [{
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
      AA = Array.from({
        length: 6
      }, ((UU, XU) => ({
        "--x": `${(88*(.618034*XU%1)).toFixed(1)}%`,
        "--y": `${(10+37*XU%70).toFixed(1)}%`,
        "--size": 7 + XU % 3 * 3 + "rem",
        "--drift-x": 3 * (XU % 3 - 1) + "rem",
        "--drift-y": 2 * (XU % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + XU % 4 * 3 + "s",
        "--delay": 2.5 * -XU + "s"
      }))),
      FA = Array.from({
        length: 14
      }, ((UU, XU) => ({
        "--left": `${(3+94*((.618034*XU+.3)%1)).toFixed(1)}%`,
        "--size": 4 + XU % 4 * 2 + "px",
        "--sway": XU % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*XU%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*XU%12).toFixed(2)}s`
      }))),
      oA = (0, PU.memo)((function(UU) {
        let {
          island: XU
        } = UU;
        return (0, Fy.jsxs)("div", {
          className: Tc()("SkyblockReachLogDepths", null !== XU && `Island-${XU}`),
          "aria-hidden": "true",
          children: [QA.map(((UU, XU) => (0, Fy.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: UU
          }, `shaft${XU}`))), AA.map(((UU, XU) => (0, Fy.jsx)("span", {
            className: Tc()("SkyblockReachLogMote", XU % 2 === 1 && "Violet"),
            style: UU
          }, `mote${XU}`))), FA.map(((UU, XU) => (0, Fy.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: UU
          }, `bubble${XU}`)))]
        })
      })),
      DA = 100;

    function EA(UU) {
      let {
        view: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)();
      if (null === XU || 0 === XU.total) return null;
      const cU = DA * XU.aspect,
        yU = zU("skyblockGame:hiddenWatersCount", {
          found: XU.found,
          total: XU.total
        });
      return (0, Fy.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${zU("skyblockGame:hiddenWatersTitle")}: ${yU}`,
        children: [(0, Fy.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${cU}`,
          "aria-hidden": "true",
          children: [XU.islands.map(((UU, XU) => (0, Fy.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (UU.left + UU.width / 2) * DA,
            cy: (UU.top + UU.height / 2) * cU,
            rx: UU.width / 2 * DA,
            ry: UU.height / 2 * cU
          }, XU))), XU.pins.map(((UU, XU) => (0, Fy.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: UU.left * DA,
            cy: UU.top * cU,
            r: 13
          }, XU)))]
        }), (0, Fy.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: zU("skyblockGame:hiddenWatersTitle")
          }), (0, Fy.jsx)("span", {
            className: XU.found === XU.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: yU
          })]
        })]
      })
    }

    function YA(UU) {
      let {
        view: XU,
        island: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)(), yU = null === XU || void 0 === XU ? void 0 : XU.glimpses.get(zU);
      return void 0 === yU || 0 === yU.length ? null : (0, Fy.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: cU("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Fy.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: yU.map((UU => (0, Fy.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Fy.jsx)(zy.c, {
              itemName: UU,
              amount: 0
            })
          }, UU)))
        })]
      })
    }
    const NA = ["Bronze", "Silver", "Gold"],
      IA = [{
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
      pA = IA.slice(0, 2);

    function aA(UU) {
      return UU ? IA : pA
    }

    function tA(UU) {
      let {
        fish: XU,
        letGoShown: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [NA.map(((UU, zU) => {
          const yU = zU < XU.marks;
          return (0, Fy.jsx)("span", {
            className: Tc()("SkyblockReachLogPip", UU, yU && "Earned", yU && XU.fresh && zU === XU.marks - 1 && "Newest"),
            title: cU(Fc[zU])
          }, UU)
        })), (0, Fy.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), aA(zU).map(((UU, zU) => (0, Fy.jsx)("span", {
          className: Tc()("SkyblockReachLogRibbon", UU.className, !0 === XU.ribbons[zU] && "Earned"),
          title: cU(UU.titleKey)
        }, UU.className)))]
      })
    }

    function gA(UU) {
      let {
        letGoShown: XU,
        haloShown: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Fy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: cU("skyblockGame:reachLogMarks"),
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), cU("skyblockGame:reachLogLegendMarks")]
        }), aA(XU).map((UU => (0, Fy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: cU(UU.titleKey),
          children: [(0, Fy.jsx)("span", {
            className: Tc()("SkyblockReachLogRibbon", UU.className, "Earned")
          }), cU(UU.legendKey)]
        }, UU.className))), (0, Fy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: cU("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), cU("skyblockGame:reachLogLegendGlimmer")]
        }), zU && (0, Fy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: cU("skyblockGame:reachLogHaloTitle"),
          children: [(0, Fy.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), cU("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function kA(UU) {
      let {
        returner: XU
      } = UU;
      return (0, Fy.jsxs)("div", {
        className: Tc()("SkyblockReachLogReturner", XU.back && "Back"),
        children: [(0, Fy.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Fy.jsx)(zy.c, {
            itemName: XU.itemName,
            amount: 0
          })
        }), (0, Fy.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: XU.line
        })]
      })
    }

    function GA(UU) {
      let {
        fish: XU,
        letGoShown: zU
      } = UU;
      const {
        t: cU
      } = (0, Qy.I)();
      return (0, Fy.jsxs)("li", {
        className: Tc()("SkyblockReachLogCard", XU.caught ? "Caught" : "Unknown", XU.marks >= 3 && "GoldCard", XU.fresh && "Fresh", XU.visitor && "Visitor"),
        children: [XU.visitor && (0, Fy.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: cU("skyblockGame:reachLogVisitor")
        }), XU.fresh && Array.from({
          length: 4
        }, ((UU, XU) => (0, Fy.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, XU))), (0, Fy.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [XU.halo && (0, Fy.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: cU("skyblockGame:reachLogHaloTitle")
          }), (0, Fy.jsx)(zy.c, {
            itemName: XU.itemName,
            amount: 0
          }), XU.glimmer && (0, Fy.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: cU("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Fy.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: XU.name
        }), (0, Fy.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: XU.chance
        }), (0, Fy.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: XU.best
        }), (0, Fy.jsx)(tA, {
          fish: XU,
          letGoShown: zU
        })]
      })
    }

    function BA(UU) {
      let {
        page: XU,
        letGoShown: zU,
        hiddenWaters: cU
      } = UU;
      const {
        t: yU
      } = (0, Qy.I)();
      return XU.awake ? (0, Fy.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: XU.fish.map((UU => (0, Fy.jsx)(GA, {
          fish: UU,
          letGoShown: zU
        }, UU.itemName)))
      }) : (0, Fy.jsxs)(Fy.Fragment, {
        children: [(0, Fy.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: yU("skyblockGame:reachLogAsleep")
        }), (0, Fy.jsx)(YA, {
          view: cU,
          island: XU.id
        })]
      })
    }

    function ZA(UU) {
      var XU, zU;
      let {
        controller: cU,
        regulars: yU,
        hiddenWaters: QU
      } = UU;
      const AU = (0, Ay.j)(Ac, cU.getSnapshot()),
        FU = function(UU) {
          return (0, Ay.j)(fc, UU.getSnapshot())
        }(QU),
        oU = (0, Ay.j)(qc, yU.getSnapshot()),
        {
          t: DU
        } = (0, Qy.I)(),
        EU = ky();
      if (!AU.enabled) return null;
      const YU = null !== (XU = AU.pages.find((UU => UU.id === AU.selected))) && void 0 !== XU ? XU : null;
      return (0, Fy.jsx)(ay.c, {
        show: AU.open,
        close: cU.dismiss,
        togglePointerLock: !1,
        className: Tc()("SkyblockSkillsOverlay", oU.open && "SkyblockReachLogUnderLedger"),
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: EU,
          onKeyDown: gy,
          children: [(0, Fy.jsx)(oA, {
            island: null !== (zU = null === YU || void 0 === YU ? void 0 : YU.id) && void 0 !== zU ? zU : null
          }), (0, Fy.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: DU("skyblockGame:reachLogTitle")
              }), (0, Fy.jsx)("p", {
                children: DU("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Fy.jsx)(EA, {
              view: FU
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: cU.dismiss
            })]
          }), (0, Fy.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: AU.pages.map((UU => {
              const XU = UU.id === AU.selected,
                zU = UU.fish.some((UU => UU.fresh));
              return (0, Fy.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": XU,
                "data-pad-tab": !0,
                "data-pad-selected": XU ? "true" : void 0,
                className: Tc()("SkyblockReachLogTab", `Island-${UU.id}`, XU && "Selected", !UU.awake && "Asleep", UU.gold && "GoldPage", zU && "HasNews"),
                onClick: () => {
                  cU.selectPage(UU.id)
                },
                children: [(0, Fy.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: UU.name
                }), UU.awake && (0, Fy.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: DU("skyblockGame:reachLogCaughtCount", {
                    caught: UU.caught,
                    total: UU.total
                  })
                })]
              }, UU.id)
            }))
          }), (0, Fy.jsxs)("div", {
            className: Tc()("SkyblockReachLogPage", null !== YU && `Island-${YU.id}`),
            role: "tabpanel",
            children: [null !== YU && (0, Fy.jsx)(BA, {
              page: YU,
              letGoShown: AU.letGoShown,
              hiddenWaters: FU
            }), !0 === (null === YU || void 0 === YU ? void 0 : YU.awake) && null !== YU.returner && (0, Fy.jsx)(kA, {
              returner: YU.returner
            }), !0 === (null === YU || void 0 === YU ? void 0 : YU.awake) && (0, Fy.jsx)(cA, {
              controller: yU,
              island: YU.id
            })]
          }), (0, Fy.jsx)("footer", {
            className: Tc()("SkyblockReachLogFooter", null !== YU && `Island-${YU.id}`, !0 === (null === YU || void 0 === YU ? void 0 : YU.gold) && "GoldPage"),
            children: !0 === (null === YU || void 0 === YU ? void 0 : YU.gold) ? (0, Fy.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: DU("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Fy.jsxs)(Fy.Fragment, {
              children: [(0, Fy.jsx)(gA, {
                letGoShown: AU.letGoShown,
                haloShown: !0 === (null === YU || void 0 === YU ? void 0 : YU.fish.some((UU => UU.halo)))
              }), (0, Fy.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: DU("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var RA = zU(5358);

    function PA(UU) {
      let {
        conversation: XU,
        completedLabel: zU
      } = UU;
      return (0, Fy.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Fy.jsxs)("header", {
          children: [(0, Fy.jsx)("h3", {
            children: XU.questName
          }), XU.completed && (0, Fy.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: zU
          })]
        }), XU.lines.map((UU => (0, Fy.jsx)(RA.d, {
          display: UU.display
        }, UU.key)))]
      })
    }

    function WA(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(Hc, XU.getSnapshot()), yU = ky();
      if (!cU.enabled) return null;
      const QU = !cU.loading && 0 === cU.conversations.length;
      return (0, Fy.jsx)(ay.c, {
        show: cU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: zU("skyblockDialogue:title")
              }), (0, Fy.jsx)("p", {
                children: zU("skyblockDialogue:intro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsxs)("div", {
            className: Tc()("SkyblockDialogueBody", {
              SingleColumn: null !== cU.questFocus || 0 === cU.characters.length
            }),
            children: [null === cU.questFocus && cU.characters.length > 0 && (0, Fy.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: cU.characters.map((UU => (0, Fy.jsx)(ty.f, {
                className: Tc()("SkyblockDialogueCharacter", {
                  Selected: UU.selected
                }),
                onClick: () => {
                  XU.selectCharacter(UU.id)
                },
                children: (0, Fy.jsx)(cy.d, {
                  text: UU.styling
                })
              }, UU.id)))
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== cU.questFocus && (0, Fy.jsx)(ty.f, {
                className: "SkyblockDialogueBack",
                onClick: XU.showCharacters,
                children: zU("skyblockDialogue:allCharacters")
              }), cU.loading && (0, Fy.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: zU("skyblockDialogue:loading")
              }), QU && (0, Fy.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: zU(null === cU.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), cU.conversations.map((UU => (0, Fy.jsx)(PA, {
                conversation: UU,
                completedLabel: cU.completedLabel
              }, UU.questId)))]
            })]
          })]
        })
      })
    }

    function dA(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(nc, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky();
      return zU.enabled ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: cU("skyblockGame:autographBook")
              }), (0, Fy.jsx)("p", {
                children: cU("skyblockGame:autographBookIntro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              onClick: XU.dismiss
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Fy.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Fy.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Fy.jsx)("strong", {
                  children: zU.total
                }), (0, Fy.jsx)("span", {
                  children: cU("skyblockGame:autographTotal")
                })]
              }), (0, Fy.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Fy.jsx)("strong", {
                  children: zU.rankTotal
                }), (0, Fy.jsx)("span", {
                  children: cU("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === zU.entries.length ? (0, Fy.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: cU("skyblockGame:autographBookEmpty")
            }) : (0, Fy.jsx)("ul", {
              className: "SkyblockAutographList",
              children: zU.entries.map((UU => (0, Fy.jsxs)("li", {
                className: Tc()("SkyblockAutograph", {
                  Ranked: null !== UU.rank
                }),
                style: null === UU.rank ? void 0 : {
                  color: UU.rank.colour
                },
                children: [null !== UU.rank && (0, Fy.jsx)(ny.d, {
                  className: "SkyblockAutographRankIcon",
                  name: UU.rank.icon,
                  kit: (0, ny.g)(UU.rank.icon)
                }), (0, Fy.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Fy.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: UU.name
                  }), (0, Fy.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== UU.rank && (0, Fy.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: UU.rank.label
                    }), (0, Fy.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: UU.signedOn
                    })]
                  })]
                })]
              }, UU.key)))
            })]
          })]
        })
      }) : null
    }
    const LA = (0, PU.memo)((function(UU) {
        let {
          controller: XU
        } = UU;
        return (0, Fy.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: XU.display.mountWaypoint,
          children: [(0, Fy.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Fy.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Fy.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Fy.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Fy.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Fy.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      eA = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function CA(UU) {
      return "next" === UU.phase ? "\u2192" : eA[UU.kind]
    }
    const wA = (0, PU.memo)((function(UU) {
      let {
        controller: XU,
        display: zU
      } = UU;
      const cU = (0, Ay.j)(VX, XU.getNotificationSnapshot()),
        [yU, QU] = (0, PU.useState)(!1);
      return (0, Ay.f)("qteStateUpdated", (UU => {
        QU(UU.isActive)
      })), (0, Fy.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (yU ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [cU && (0, Fy.jsxs)("div", {
          className: `SkyblockQuestNotification ${cU.kind} ${cU.phase}`,
          style: {
            "--quest-notification-duration": `${cU.durationMs}ms`,
            ...cU.accent && {
              "--quest-notification-accent": cU.accent
            }
          },
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (cU.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: CA(cU)
            }), cU.iconItem && (0, Fy.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Fy.jsx)(zy.c, {
                itemName: cU.iconItem,
                amount: 0
              })
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: cU.title
            }), (0, Fy.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Fy.jsx)(fy.e, {
                text: cU.name
              })
            }), cU.description && (0, Fy.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Fy.jsx)(fy.e, {
                text: cU.description
              })
            }), cU.reward && (0, Fy.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Fy.jsx)(fy.e, {
                text: cU.reward
              })
            })]
          })]
        }, cU.token), (null === cU || void 0 === cU ? void 0 : cU.waypointNameKey) && (0, Fy.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": cU.waypointNameKey,
          "data-notification-token": cU.token,
          ref: zU.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${cU.token}`)]
      })
    }));

    function qA(UU) {
      const XU = parseInt(UU.replace("#", ""), 16);
      return `${XU>>16&255}, ${XU>>8&255}, ${255&XU}`
    }
    const OA = (0, PU.memo)((function(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(pz, XU.getSnapshot());
      if (!cU) return null;
      const yU = "arrival" === cU.phase;
      return (0, Fy.jsxs)("div", {
        className: Tc()("SkyblockPortalTransit", {
          Departure: !yU,
          Arrival: yU
        }),
        style: {
          "--portal-rgb": qA(cU.colour),
          "--portal-duration": `${cU.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Fy.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Fy.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            XU.finishArrival(cU.token)
          }
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Fy.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !yU && (0, Fy.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: zU("skyblockGame:portalTransitHeading")
          }), (0, Fy.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: zU(cU.zoneNameKey)
          })]
        })]
      }, cU.token)
    }));

    function SA() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function rA() {
      const UU = document.querySelector(".SkyblockHudCoins"),
        XU = null === UU || void 0 === UU ? void 0 : UU.getBoundingClientRect();
      return XU && XU.width > 0 ? {
        x: XU.left + Math.min(XU.width, 24) / 2,
        y: XU.top + XU.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function uA(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2
      }
    }

    function fA() {
      var UU;
      const XU = null === (UU = document.querySelector(".HotBar")) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
      return XU && XU.width > 0 ? uA(XU) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function iA(UU) {
      let {
        items: XU,
        origins: zU,
        target: cU
      } = UU;
      return (0, Fy.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: XU.map(((UU, XU) => {
          const yU = zU[XU];
          return (0, Fy.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${yU.x}px`,
              top: `${yU.y}px`,
              "--item-dx": cU.x - yU.x + "px",
              "--item-dy": cU.y - yU.y + "px",
              "--item-delay": 2e3 + 160 * XU + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Fy.jsx)(zy.c, {
              itemName: UU.dailyRewardItemName,
              amount: 0
            })
          }, UU.dailyRewardItemName)
        }))
      })
    }

    function HA(UU, XU) {
      const zU = -Math.PI / 2 + 1.25 * (UU / (XU - 1) * 2 - 1),
        cU = 70 + UU % 3 * 22;
      return {
        x: Math.cos(zU) * cU,
        y: Math.sin(zU) * cU * .7
      }
    }

    function MA(UU) {
      let {
        origin: XU,
        target: zU,
        count: cU
      } = UU;
      const yU = [];
      for (let QU = 0; QU < cU; QU++) {
        const UU = HA(QU, cU);
        yU.push((0, Fy.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${XU.x}px`,
            top: `${XU.y}px`,
            "--coin-bx": `${UU.x}px`,
            "--coin-by": `${UU.y}px`,
            "--coin-dx": zU.x - XU.x + "px",
            "--coin-dy": zU.y - XU.y + "px",
            "--coin-delay": `${Bz(QU,cU)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Fy.jsx)(zy.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, QU))
      }
      return (0, Fy.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: yU
      })
    }

    function vA(UU) {
      let {
        day: XU
      } = UU;
      const zU = WU[XU - 1];
      return (0, Fy.jsxs)(Fy.Fragment, {
        children: [(0, Fy.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Fy.jsx)(zy.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, yy.f)(zU.dailyRewardCoins)]
        }), zU.dailyRewardItems.map((UU => (0, Fy.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Fy.jsx)(zy.c, {
            itemName: UU.dailyRewardItemName,
            amount: 0
          }), "\xd7", UU.dailyRewardItemAmount]
        }, UU.dailyRewardItemName)))]
      })
    }

    function VA(UU) {
      let {
        day: XU
      } = UU;
      const zU = LU(XU);
      return (0, Fy.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: WU.map(((UU, cU) => {
          const yU = cU + 1;
          return (0, Fy.jsxs)("li", {
            className: Tc()("SkyblockDailyRewardTile", {
              Claimed: yU < XU && yU !== zU,
              Today: yU === XU,
              Tomorrow: yU === zU,
              Jackpot: yU === dU
            }),
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: yU
            }), (0, Fy.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Fy.jsx)(zy.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, yy.f)(UU.dailyRewardCoins)]
            }), UU.dailyRewardItems.map((UU => (0, Fy.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Fy.jsx)(zy.c, {
                itemName: UU.dailyRewardItemName,
                amount: 0
              }), "\xd7", UU.dailyRewardItemAmount]
            }, UU.dailyRewardItemName)))]
          }, yU)
        }))
      })
    }

    function sA(UU) {
      let {
        view: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, PU.useRef)(null), yU = (0, PU.useRef)(null), [QU, AU] = (0, PU.useState)(null);
      (0, PU.useLayoutEffect)((() => {
        var UU;
        const XU = null === (UU = cU.current) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
        if (XU) {
          var zU, QU;
          const UU = Array.from(null !== (zU = null === (QU = yU.current) || void 0 === QU ? void 0 : QU.children) && void 0 !== zU ? zU : [], (UU => uA(UU.getBoundingClientRect())));
          AU({
            origin: uA(XU),
            target: rA(),
            itemOrigins: UU,
            itemTarget: fA()
          })
        }
      }), []);
      const FU = LU(XU.day),
        oU = function(UU, XU) {
          const [zU, cU] = (0, PU.useState)((() => SA() ? UU : 0));
          return (0, PU.useEffect)((() => {
            if (SA()) return;
            const zU = performance.now();
            let yU = 0;
            const QU = AU => {
              const FU = Math.min(Math.max((AU - zU) / XU, 0), 1);
              cU(Math.round(UU * (1 - (1 - FU) ** 3))), FU < 1 && (yU = requestAnimationFrame(QU))
            };
            return yU = requestAnimationFrame(QU), () => {
              cancelAnimationFrame(yU)
            }
          }), [UU, XU]), zU
        }(XU.coins, 450);
      return (0, Fy.jsxs)("div", {
        className: Tc()("SkyblockDailyReward", {
          Jackpot: XU.day === dU
        }),
        style: {
          "--daily-duration": `${XU.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Fy.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Fy.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: zU("skyblockGame:dailyRewardTitle")
            }), (0, Fy.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: zU("skyblockGame:dailyRewardDay", {
                day: String(XU.day)
              })
            })]
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: cU,
            children: [(0, Fy.jsx)(zy.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Fy.jsxs)("span", {
              children: ["+", (0, yy.f)(oU)]
            })]
          }), XU.items.length > 0 && (0, Fy.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: yU,
            children: XU.items.map((UU => (0, Fy.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Fy.jsx)(zy.c, {
                itemName: UU.dailyRewardItemName,
                amount: 0
              }), "\xd7", UU.dailyRewardItemAmount]
            }, UU.dailyRewardItemName)))
          }), (0, Fy.jsx)(VA, {
            day: XU.day
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [zU("skyblockGame:dailyRewardComeBack"), (0, Fy.jsx)(vA, {
              day: FU
            })]
          })]
        }), null !== QU && (0, Fy.jsx)(MA, {
          origin: QU.origin,
          target: QU.target,
          count: XU.flyingCoins
        }), null !== QU && QU.itemOrigins.length === XU.items.length && (0, Fy.jsx)(iA, {
          items: XU.items,
          origins: QU.itemOrigins,
          target: QU.itemTarget
        })]
      })
    }
    const nA = (0, PU.memo)((function(UU) {
        let {
          controller: XU
        } = UU;
        const zU = (0, Ay.j)(gz, XU.getSnapshot());
        return zU ? (0, Fy.jsx)(sA, {
          view: zU
        }, zU.token) : null
      })),
      mA = "Gold Coin";

    function lA(UU) {
      return 650 + 220 * UU
    }

    function xA(UU) {
      return {
        "--letter-delay": `${lA(UU)}ms`,
        "--letter-land": `${lA(UU)+300}ms`
      }
    }

    function JA(UU) {
      let {
        letterCount: XU
      } = UU;
      return (0, Fy.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Fy.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Fy.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Fy.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: XU
        }, ((UU, XU) => (0, Fy.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: xA(XU),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, XU)))]
      })
    }

    function jA(UU) {
      var XU, zU, cU;
      let {
        letter: yU,
        index: QU
      } = UU;
      const {
        t: AU
      } = (0, Qy.I)(), FU = null !== (XU = null === (zU = yU.items[0]) || void 0 === zU ? void 0 : zU.itemName) && void 0 !== XU ? XU : mA;
      return (0, Fy.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: xA(QU),
        children: [(0, Fy.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Fy.jsx)(zy.c, {
            itemName: FU,
            amount: 0
          })
        }), (0, Fy.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: AU(yU.reasonKey, null !== (cU = yU.reasonParams) && void 0 !== cU ? cU : void 0)
        }), (0, Fy.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [yU.coins > 0 && (0, Fy.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Fy.jsx)(zy.c, {
              itemName: mA,
              amount: 0
            }), "+", (0, yy.f)(yU.coins)]
          }), yU.items.map(((UU, XU) => (0, Fy.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Fy.jsx)(zy.c, {
              itemName: UU.itemName,
              amount: 0
            }), UU.label, " \xd7", UU.amount]
          }, XU)))]
        })]
      })
    }

    function KA(UU) {
      let {
        view: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)();
      return (0, Fy.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${XU.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${lA(XU.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Fy.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Fy.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Fy.jsx)(JA, {
              letterCount: XU.letters.length
            }), (0, Fy.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: zU("skyblockGame:mailboxTitle")
            })]
          }), (0, Fy.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: XU.letters.map(((UU, XU) => (0, Fy.jsx)(jA, {
              letter: UU,
              index: XU
            }, XU)))
          }), XU.more > 0 && (0, Fy.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: zU("skyblockGame:mailboxMore", {
              count: String(XU.more)
            })
          })]
        })
      })
    }
    const bA = (0, PU.memo)((function(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Rz, XU.getSnapshot());
      return zU ? (0, Fy.jsx)(KA, {
        view: zU
      }, zU.token) : null
    }));

    function TA(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(pc, XU.getSnapshot());
      if (null === cU) return null;
      const yU = cU.fullSet ? "empty" === cU.fuelState ? {
        text: zU("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: zU("skyblockGame:magmawardHudFullSet", {
          worn: String(cU.wornCount)
        }),
        tone: "partial"
      };
      return (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsxs)("div", {
          className: Tc()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${cU.fuelState}`, {
            "SkyblockMagmawardHud-partial": !cU.fullSet,
            "SkyblockMagmawardHud-armed": cU.fullSet && "empty" !== cU.fuelState
          }),
          children: [null !== cU.flare && (0, Fy.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${cU.flare}`
          }, `flare:${cU.flareToken}`), (0, Fy.jsx)("div", {
            className: Tc()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: cU.setLit
            }),
            children: cU.pieces.map(((UU, XU) => (0, Fy.jsx)("div", {
              className: Tc()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: UU.worn,
                SkyblockMagmawardPieceJustWorn: UU.justWorn
              }),
              children: (0, Fy.jsx)(zy.c, {
                itemName: UU.itemName,
                amount: 0
              })
            }, `${XU}:${UU.wornToken}`)))
          }, `pieces:${cU.setLitToken}`), (0, Fy.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Fy.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Fy.jsxs)("div", {
              className: Tc()("SkyblockMagmawardFuelCounter", cU.pulse && `SkyblockMagmawardFuelCounter-${cU.pulse}`),
              children: [(0, Fy.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Fy.jsx)(zy.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Fy.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: cU.fuel
              })]
            }, `counter:${cU.pulseToken}`), "burn" === cU.pulse && (0, Fy.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${cU.pulseToken}`)]
          }), yU && (0, Fy.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${yU.tone} SmallTextBold`,
            children: yU.text
          })]
        })
      })
    }

    function hA(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU,
        selectedLanguage: cU
      } = (0, Qy.I)(), yU = (0, Ay.j)(tc, XU.getSnapshot());
      return null === yU ? null : (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsxs)("div", {
          className: Tc()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: yU.inRange
          }),
          style: {
            "--glowtide-colour": yU.colour
          },
          "aria-label": zU("skyblockGame:glowtideChipLabel"),
          children: [(0, Fy.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), yU.inRange ? (0, Fy.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: zU("skyblockGame:glowtideChipInRange")
          }, `call:${yU.inRangeToken}`) : (0, Fy.jsxs)(Fy.Fragment, {
            children: [(0, Fy.jsx)("div", {
              ref: XU.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Fy.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: zU("skyblockGame:waypointDistance", {
                distance: BU(yU.distance, cU.code)
              })
            })]
          })]
        })
      })
    }

    function UF(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(kc, XU.getSnapshot());
      return null === cU ? null : (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsxs)("div", {
          className: Tc()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: cU.full
          }),
          "aria-label": zU("skyblockGame:glowMeterLabel", {
            fill: String(cU.fill),
            xY: String(cU.xY)
          }),
          children: [cU.burst && (0, Fy.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${cU.burstToken}`), (0, Fy.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Fy.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${cU.ratio})`
              }
            }), cU.gained && (0, Fy.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${cU.gainToken}`), cU.full && Array.from({
              length: 5
            }, ((UU, XU) => (0, Fy.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, XU)))]
          }), cU.full && cU.rares.map((UU => (0, Fy.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Fy.jsx)(zy.c, {
              itemName: UU,
              amount: 0
            })
          }, UU))), cU.ready && (0, Fy.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Fy.jsx)("span", {
              children: zU("skyblockGame:glowMeterReady")
            })
          }, `ready:${cU.fullToken}`)]
        })
      })
    }

    function XF(UU) {
      let {
        controller: XU
      } = UU;
      const {
        t: zU
      } = (0, Qy.I)(), cU = (0, Ay.j)(Bc, XU.getSnapshot());
      if (null === cU) return null;
      const yU = "waiting" === cU.phase,
        QU = {
          animationDuration: `${cU.waitMs}ms`,
          animationDelay: -cU.elapsedMs + "ms"
        },
        AU = yU ? void 0 : {
          animationDuration: `${cU.waitMs}ms`
        };
      return (0, Fy.jsxs)("div", {
        className: yU ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [yU && (0, Fy.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((UU, XU) => (0, Fy.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, XU))), (0, Fy.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: QU
          }), (0, Fy.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Fy.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Fy.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: QU
            })]
          }), (0, Fy.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Fy.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: AU,
          children: zU(cU.line)
        }, cU.lineIndex)]
      }, cU.token)
    }

    function zF(UU) {
      let {
        chart: XU,
        showHere: zU,
        className: cU
      } = UU;
      return (0, Fy.jsx)("div", {
        className: Tc()("SkyblockTideChartGrid", cU, null !== XU.pictureName && "Complete"),
        "aria-hidden": "true",
        children: XU.cells.map(((UU, cU) => {
          const yU = 0 !== (XU.pulseCells & 1 << cU),
            QU = XU.castCell === cU;
          return (0, Fy.jsx)("span", {
            className: Tc()("SkyblockTideChartCell", `Cell-${UU}`, yU && "Pulse", QU && "Cast", zU && XU.hereCell === cU && "Here")
          }, `${cU}:${yU?`p${XU.pulseToken}`:""}:${QU?`c${XU.castToken}`:""}`)
        }))
      })
    }

    function cF(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Rc, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = zU.chip;
      if (!zU.enabled || null === yU) return null;
      const QU = cU("skyblockGame:tideChartsChipLabel", {
        island: yU.islandName,
        lit: String(yU.lit),
        ink: String(yU.ink)
      });
      return (0, Fy.jsx)(Uy.e, {
        placement: "statBars",
        children: (0, Fy.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Tc()("SkyblockTideChartsChip", zU.open && "Open", null !== yU.pictureName && "Complete"),
          "aria-label": QU,
          title: QU,
          onMouseDown: UU => {
            UU.preventDefault()
          },
          onClick: XU.toggle,
          children: [(0, Fy.jsx)(zF, {
            chart: yU,
            showHere: !1,
            className: "Mini"
          }), (0, Fy.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [yU.lit, "/", yU.ink]
          })]
        })
      })
    }

    function yF(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, Ay.j)(Rc, XU.getSnapshot()),
        {
          t: cU
        } = (0, Qy.I)(),
        yU = ky(),
        QU = zU.card;
      return zU.enabled && null !== QU ? (0, Fy.jsx)(ay.c, {
        show: zU.open,
        close: XU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Fy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: yU,
          onKeyDown: gy,
          children: [(0, Fy.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Fy.jsxs)("div", {
              children: [(0, Fy.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: cU("skyblockGame:tideChartsTitle")
              }), (0, Fy.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: cU("skyblockGame:tideChartsIntro")
              })]
            }), (0, Fy.jsx)(ty.k, {
              padIgnore: !0,
              ariaLabel: cU("skyblockGame:tideChartsClose"),
              onClick: XU.dismiss
            })]
          }), zU.tabs.length > 1 && (0, Fy.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": cU("skyblockGame:tideChartsIslands"),
            children: zU.tabs.map((UU => (0, Fy.jsx)("button", {
              type: "button",
              className: Tc()("SkyblockTideChartsTab", UU.selected && "Selected"),
              "aria-pressed": UU.selected,
              onClick: () => {
                XU.DI(UU.island)
              },
              children: UU.name
            }, UU.island)))
          }), (0, Fy.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Fy.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": QU.gridLabel,
              children: (0, Fy.jsx)(zF, {
                chart: QU,
                showHere: !0,
                className: "Large"
              })
            }), (0, Fy.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Fy.jsx)("h3", {
                children: QU.islandName
              }), (0, Fy.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: QU.litText
              }), null === QU.pictureName ? (0, Fy.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: cU("skyblockGame:tideChartsPictureHidden")
              }) : (0, Fy.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: cU("skyblockGame:tideChartsPictureRevealed", {
                  picture: QU.pictureName
                })
              }, QU.pictureName), (0, Fy.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Fy.jsxs)("li", {
                  children: [(0, Fy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), cU("skyblockGame:tideChartsLegendLit")]
                }), (0, Fy.jsxs)("li", {
                  children: [(0, Fy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), cU("skyblockGame:tideChartsLegendClear")]
                }), null !== QU.hereCell && (0, Fy.jsxs)("li", {
                  children: [(0, Fy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), cU("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Fy.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Fy.jsx)("span", {
                  children: zU.turnsText
                }), (0, Fy.jsx)("span", {
                  children: zU.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function QF(UU) {
      var XU;
      let {
        controller: zU
      } = UU;
      const {
        selectedLanguage: cU
      } = (0, Qy.I)(), yU = cU.code;
      (0, PU.useEffect)((() => {
        zU.setTranslator(((UU, XU) => (0, Qy.A)(yU, UU, XU)), yU, ((UU, XU) => (0, Qy.t)(yU, UU, XU)))
      }), [zU, yU]);
      const QU = (0, Ay.j)(DU, zU.map.getSnapshot()),
        {
          openInGameMenuName: AU
        } = (0, hc.q)(["openInGameMenuName"]);
      return (0, Fy.jsxs)(Fy.Fragment, {
        children: [(0, Fy.jsx)(wA, {
          controller: zU.quests,
          display: zU.navigation.display
        }), QU.enabled && !AU && (0, Fy.jsx)(Sy, {
          controller: zU.navigation
        }), (0, Fy.jsx)(oy, {
          controller: zU,
          minimap: QU.enabled && (null === (XU = QU.presentation) || void 0 === XU ? void 0 : XU.minimap) && (0, Fy.jsx)(Oy, {
            view: QU.presentation.minimap,
            navigation: zU.navigation,
            controller: zU.map
          }),
          children: (0, Fy.jsx)(sy, {
            controller: zU.quests,
            surface: "hud"
          })
        }), (0, Fy.jsx)(LA, {
          controller: zU.navigation
        }), (0, Fy.jsx)(OA, {
          controller: zU.portalTransit
        }), (0, Fy.jsx)(nA, {
          controller: zU.dailyReward
        }), (0, Fy.jsx)(bA, {
          controller: zU.mailbox
        }), (0, Fy.jsx)(TA, {
          controller: zU.magmaward
        }), (0, Fy.jsx)(hA, {
          controller: zU.glowtide
        }), (0, Fy.jsx)(sQ, {
          controller: zU.passage
        }), (0, Fy.jsx)(cF, {
          controller: zU.tideCharts
        }), (0, Fy.jsx)(UF, {
          controller: zU.glowMeter
        }), (0, Fy.jsx)(UA, {
          controller: zU.reachLog
        }), (0, Fy.jsx)(XF, {
          controller: zU.hushWait
        }), (0, Fy.jsx)(KQ, {
          controller: zU.lampLight
        }), (0, Fy.jsx)(ry, {
          controller: zU.skills,
          surface: "hud"
        })]
      })
    }

    function AF(UU) {
      let {
        controller: XU
      } = UU;
      return (0, Fy.jsxs)(Fy.Fragment, {
        children: [(0, Fy.jsx)(qy, {
          controller: XU.map,
          navigation: XU.navigation
        }), (0, Fy.jsx)(ry, {
          controller: XU.skills,
          surface: "menu"
        }), (0, Fy.jsx)(sy, {
          controller: XU.quests,
          surface: "menu"
        }), (0, Fy.jsx)(RQ, {
          controller: XU.dungeons
        }), (0, Fy.jsx)(dQ, {
          controller: XU.collections
        }), (0, Fy.jsx)(CQ, {
          controller: XU.questGraph
        }), (0, Fy.jsx)(rQ, {
          controller: XU.forge
        }), (0, Fy.jsx)(vQ, {
          controller: XU.smuggler
        }), (0, Fy.jsx)(TQ, {
          controller: XU.keepersChair,
          lampLight: XU.lampLight
        }), (0, Fy.jsx)(ZA, {
          controller: XU.reachLog,
          regulars: XU.regulars,
          hiddenWaters: XU.hiddenWaters
        }), (0, Fy.jsx)(yA, {
          controller: XU.regulars
        }), (0, Fy.jsx)(mQ, {
          controller: XU.passage
        }), (0, Fy.jsx)(yF, {
          controller: XU.tideCharts
        }), (0, Fy.jsx)(WA, {
          controller: XU.dialogue
        }), (0, Fy.jsx)(dA, {
          controller: XU.autographs
        })]
      })
    }
    var FF = zU(37480);
    const oF = qz + Hz;

    function DF(UU, XU) {
      const zU = [{
        sound: "rpgKnifeSlice1",
        beat: qz,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: qz,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: qz,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: qz,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: qz,
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
        DI: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: oF + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        DI: !0,
        beat: oF + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: oF + 60,
        lead: 180,
        volume: .5 + .06 * UU,
        rate: .82 + .07 * UU
      }];
      return UU >= 4 && zU.push({
        sound: "exp_levelup",
        beat: oF + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), XU && zU.push({
        sound: "trumpetFlare",
        beat: oF + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), zU.push({
        sound: "harp_pling",
        beat: Oz,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), zU
    }
    class EF {
      constructor(UU) {
        this.deps = UU, this.pending = new Map, this.localHook = null
      }
      hookWaiting(UU, XU) {
        this.pending.delete(UU);
        const zU = this.deps.now();
        if (null === XU) {
          var cU;
          if ((null === (cU = this.localHook) || void 0 === cU ? void 0 : cU.hookId) === UU) {
            const UU = zU >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(UU)
          }
          return
        }
        const yU = zU + XU;
        this.settle(UU, yU) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(UU, {
          untilMs: zU + 1e3,
          biteAtMs: yU
        }))
      }
      getLocalHook() {
        var UU, XU;
        return null !== (UU = null === (XU = this.localHook) || void 0 === XU ? void 0 : XU.hookId) && void 0 !== UU ? UU : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const UU = this.deps.now();
        for (const [XU, {
            untilMs: zU,
            biteAtMs: cU
          }] of this.pending)(this.settle(XU, cU) || UU > zU) && this.pending.delete(XU)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(UU, XU) {
        const zU = this.deps.getLineOwner(UU);
        if (null === zU) return !1;
        if (!this.deps.isLocalPlayer(zU)) return !0;
        if (this.localHook = {
            hookId: UU,
            biteAtMs: XU
          }, !this.deps.isHushWaiting()) {
          const [XU, zU] = this.deps.getHookPosition(UU);
          this.deps.onCastLanded(XU, zU)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var YF = zU(4608);
    const NF = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      IF = {
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
    class pF {
      constructor(UU) {
        this.deps = UU, this.tell = null
      }
      receiveTell(UU) {
        let {
          biteTellTier: XU
        } = UU;
        this.tell = {
          tier: XU,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(UU) {
        const XU = this.tell;
        if (this.tell = null, !UU) return;
        const zU = null !== XU && this.deps.now() - XU.atMs <= 3e3 ? XU.tier : 0;
        this.deps.vibrate(NF[zU])
      }
      burstAtHook() {
        const UU = this.tell,
          XU = this.deps.getLocalHookPosition();
        null === UU || UU.burst || null === XU || (UU.burst = !0, this.deps.playParticles(function(UU, XU) {
          let [zU, cU, yU] = XU;
          const {
            count: QU,
            rise: AU,
            colour: FU
          } = IF[UU], [oU, DU, EU] = FU;
          return {
            texture: "glint",
            pos1: [zU - .3, cU, yU - .3],
            pos2: [zU + .3, cU + .2, yU + .3],
            dir1: [-.6, AU, -.6],
            dir2: [.6, 1.4 * AU, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: QU,
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
              minColor: [oU, DU, EU, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [oU, DU, EU, 0],
              maxColor: [oU, DU, EU, 0]
            }],
            blendMode: YF.f.Add,
            hideDist: 48
          }
        }(UU.tier, XU)))
      }
    }
    var aF = zU(1266),
      tF = zU(2012),
      gF = zU(42),
      kF = zU(212);
    const GF = kF.f.cg * kF.f.playerEyeToHeightRatio;
    class BF {
      constructor(UU) {
        this.host = UU, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      PY(UU) {
        this.lava = UU, this.nextUpdateAt = 0
      }
      LY() {
        var UU;
        const XU = this.host.now();
        if (XU < this.nextUpdateAt) return;
        this.nextUpdateAt = XU + 250;
        const zU = this.host.playerPosition(),
          cU = zU && this.findNearest([zU[0], zU[1] + GF, zU[2]]);
        if (!cU || cU.distance >= 40) return void this.stop();
        const yU = .5 * Math.min(1, (40 - cU.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(yU) : this.loop = this.host.play("lavaFlow", yU, cU.position, 40 + GF, 9, !0), null === (UU = this.loop) || void 0 === UU || UU.setPosition(cU.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var UU;
        null === (UU = this.loop) || void 0 === UU || UU.stop(), this.loop = null
      }
      findNearest(UU) {
        let XU = -1,
          zU = 1 / 0;
        for (let cU = 0; cU < this.lava.length; cU += 3) {
          const yU = this.lava[cU] - UU[0],
            QU = this.lava[cU + 1] - UU[1],
            AU = this.lava[cU + 2] - UU[2],
            FU = yU * yU + QU * QU + AU * AU;
          FU < zU && (zU = FU, XU = cU)
        }
        return XU < 0 ? null : {
          position: [this.lava[XU], this.lava[XU + 1], this.lava[XU + 2]],
          distance: Math.sqrt(zU)
        }
      }
    }
    var ZF = zU(1989),
      RF = zU(39455);
    const PF = {
      "Grey Portal": "Gray"
    };
    for (const qF of YU.Oc) PF[`${qF} Portal`] = qF;
    const WF = Object.keys(PF),
      dF = Object.fromEntries(WF.map((UU => [UU, (0, YU.W)(YU.H[`${(0,YU.Ie)(PF[UU])}Team`])])));
    Object.fromEntries(WF.map((UU => [UU, YU.H[`${(0,YU.Ie)(PF[UU])}UiText`]])));
    class LF {
      constructor(UU, XU) {
        this.presentation = UU, this.portal = XU, this.unlocked = void 0
      }
      PY(UU) {
        const XU = !1 === this.unlocked && UU;
        this.unlocked = UU, this.LY();
        const {
          min: zU,
          max: cU,
          unlockedBlock: yU
        } = this.portal;
        if (XU && this.presentation.hasChunk(...zU)) {
          const [UU, XU, QU] = dF[yU];
          this.presentation.playParticles({
            pos1: [...zU],
            pos2: cU.map((UU => UU + 1)),
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
              minColor: [UU, XU, QU, 1],
              maxColor: [Math.min(255, UU + 55), Math.min(255, XU + 55), Math.min(255, QU + 90), 1]
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
      LY() {
        var UU;
        const XU = this.unlocked ? this.portal.unlockedBlock : null !== (UU = this.portal.lockedBlock) && void 0 !== UU ? UU : "Light Gray Portal",
          {
            min: zU,
            max: cU
          } = this.portal;
        for (let yU = zU[0]; yU <= cU[0]; yU++)
          for (let UU = zU[1]; UU <= cU[1]; UU++)
            for (let QU = zU[2]; QU <= cU[2]; QU++) this.presentation.hasChunk(yU, UU, QU) && this.presentation.pG(yU, UU, QU) !== XU && this.presentation.Jw(yU, UU, QU, XU)
      }
    }
    var eF = zU(39361);
    zU(39342);
    const CF = {
        farming_1: {
          raises: UU => "NPC" === UU.type && "chef" === UU.variation,
          rise: .4
        },
        fishing_1: {
          raises: UU => "Draugr Warper" === UU.type,
          rise: .4
        }
      },
      wF = (UU, XU, zU, yU) => {
        let {
          localPlayerId: QU
        } = yU;
        const AU = new Kc({
          translate: (UU, XU) => (0, Qy.A)(aF.h.get().getCurrentLanguageCode(), UU, XU),
          translateWithIcons: (UU, XU) => (0, Qy.t)(aF.h.get().getCurrentLanguageCode(), UU, XU),
          setMenuOpen: UU => {
            UU ? (0, mU.r)() : (0, mU.j)()
          },
          dismissMenu: mU.l,
          publishSkills: UU => {
            lU.k.UY(fX, UU, !0)
          },
          publishQuests: UU => {
            lU.k.UY(vX, UU, !0)
          },
          publishQuestNotification: UU => {
            lU.k.UY(VX, UU, !0)
          },
          publishDungeons: UU => {
            lU.k.UY(mX, UU, !0)
          },
          publishCollections: UU => {
            lU.k.UY(Nz, UU, !0)
          },
          publishMap: UU => {
            lU.k.UY(DU, UU, !0)
          },
          publishHud: UU => {
            lU.k.UY(xc, UU, !0)
          },
          publishPortalTransit: UU => {
            lU.k.UY(pz, UU, !0)
          },
          isLoadingScreenUp: () => hc.e.get("loadingOverlayVisible"),
          publishDailyReward: UU => {
            lU.k.UY(gz, UU, !0)
          },
          publishMailbox: UU => {
            lU.k.UY(Rz, UU, !0)
          },
          publishQuestGraph: UU => {
            lU.k.UY(Wz, UU, !0)
          },
          publishForge: UU => {
            lU.k.UY(lz, UU, !0)
          },
          publishSmuggler: UU => {
            lU.k.UY(jz, UU, !0)
          },
          publishKeepersChair: UU => {
            lU.k.UY(yc, UU, !0)
          },
          publishReachLog: UU => {
            lU.k.UY(Ac, UU, !0)
          },
          publishLampLight: UU => {
            lU.k.UY(Nc, UU, !0)
          },
          publishMagmaward: UU => {
            lU.k.UY(pc, UU, !0)
          },
          publishGlowtide: UU => {
            lU.k.UY(tc, UU, !0)
          },
          publishGlowMeter: UU => {
            lU.k.UY(kc, UU, !0)
          },
          publishHushWait: UU => {
            lU.k.UY(Bc, UU, !0)
          },
          publishPassage: UU => {
            lU.k.UY(Tz, UU, !0)
          },
          publishTideCharts: UU => {
            lU.k.UY(Rc, UU, !0)
          },
          publishRegulars: UU => {
            lU.k.UY(qc, UU, !0)
          },
          publishHiddenWaters: UU => {
            lU.k.UY(fc, UU, !0)
          },
          publishDialogue: UU => {
            lU.k.UY(Hc, UU, !0)
          },
          publishAutographs: UU => {
            lU.k.UY(nc, UU, !0)
          },
          onDailyRewardStarted: UU => {
            qU.playSound(QU, UU.day === dU ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (UU, XU) => {
            qU.playSound(QU, "exp_collect", .35, 1 + .6 * UU / (XU - 1)), lU.k.UY(kz, UU === XU - 1)
          },
          onDailyRewardItemLanded: UU => {
            qU.playSound(QU, "pickUp", .6, 1 + .15 * UU)
          },
          onMailboxStarted: () => {
            qU.playSound(QU, "rpgMetalClick", .6, 1), qU.playSound(QU, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            qU.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: gF.n,
          requestTracking: UU => {
            qU.sendCommand(`quests track ${UU}`)
          },
          requestDungeonEnter: (UU, XU) => {
            qU.sendCommand(`dungeonEnter ${UU} ${XU}`)
          },
          requestQuestJump: UU => {
            qU.sendCommand(`${OU} jump ${UU}`)
          },
          requestQuestArrive: (UU, XU) => {
            const zU = `${OU} arrive ${UU}`;
            qU.sendCommand(XU ? `${zU} complete` : zU)
          },
          requestForge: UU => {
            let {
              blade: XU,
              guard: zU,
              handle: cU
            } = UU;
            qU.sendCommand(`forge ${XU} ${zU} ${cU}`)
          },
          requestDialogue: () => {
            qU.sendCommand("quests dialogue")
          },
          requestSmuggle: (UU, XU) => {
            qU.sendCommand(`smuggle ${UU} ${XU}`)
          },
          requestKeepersChairAim: UU => {
            qU.sendCommand(`keeperschair-aim ${UU}`)
          },
          requestReachLogOpen: () => {
            qU.sendCommand("reachlog-open")
          },
          requestLampLight: UU => {
            qU.sendCommand(`${UU}`)
          },
          requestTravel: UU => {
            qU.sendCommand(`map travel ${UU.kind} ${UU.id} ${UU.requestId}`)
          }
        });
        let FU, oU, EU, NU, IU, kU, GU, BU, ZU, WU, LU, CU, wU, qU, SU = null;
        const iU = CF[null !== zU && void 0 !== zU ? zU : ""],
          vU = (UU, XU) => {
            null !== iU && void 0 !== iU && iU.raises(XU) && qU.setNametagOffset(UU, iU.rise)
          },
          VU = new pF({
            getLocalHookPosition: () => {
              const UU = JU.getLocalHook();
              return null !== UU && qU.checkValid(UU) ? qU.wG(UU) : null
            },
            playParticles: UU => {
              qU.playParticleEffect(UU)
            },
            vibrate: UU => {
              xU.e.play("fishBite", UU)
            },
            now: () => performance.now()
          }),
          JU = new EF({
            getLineOwner: UU => qU.checkValid(UU) ? qU.getLineOwner(UU) : null,
            isLocalPlayer: UU => qU.isLocalPlayer(UU),
            getHookPosition: UU => {
              const [XU, , zU] = qU.wG(UU);
              return [XU, zU]
            },
            isHushWaiting: () => {
              var UU;
              return "waiting" === (null === (UU = AU.hushWait.getSnapshot()) || void 0 === UU ? void 0 : UU.phase)
            },
            onCastLanded: (UU, XU) => {
              AU.tideCharts.castLanded(UU, XU)
            },
            onLocalHookSettled: () => {
              VU.onLocalHookSettled()
            },
            onLocalWaitEnded: UU => {
              VU.onLocalWaitEnded(UU)
            },
            now: () => performance.now()
          }),
          jU = new BF({
            now: () => performance.now(),
            playerPosition: () => qU.checkValid(QU) ? qU.wG(QU) : null,
            play: (UU, XU, zU, cU, yU, AU) => qU.playSound(QU, UU, XU, 1, {
              qy: zU,
              maxHearDist: cU,
              refDistance: yU
            }, AU)
          }),
          KU = new Map;
        let bU;
        return {
          onCreate: UU => {
            if (qU = UU, SU = new RF.SkyblockEntityFacing(UU, iU ? vU : null), AU.portalTransit.resumeArrival(null !== zU && void 0 !== zU ? zU : null), (null !== zU && void 0 !== zU ? zU : cU) === cU) {
              let UU = -1 / 0;
              bU = lU.k.subscribe("toggleMenu", (XU => {
                const zU = performance.now();
                "inventory|Workbench" !== XU || "cross_to_hub" !== AU.quests.getTrackedQuestId() || zU - UU < 1e4 || (UU = zU, qU.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [cU, yU] of Object.entries(null !== (XU = rU[null !== zU && void 0 !== zU ? zU : ""]) && void 0 !== XU ? XU : {})) {
              var XU;
              KU.set(cU, new LF({
                hasChunk: (XU, zU, cU) => UU.isBlockInLoadedChunk(XU, zU, cU),
                pG: (XU, zU, cU) => UU.blockIdToBlockName(UU.getBlockId(XU, zU, cU)),
                Jw: (XU, zU, cU, yU) => {
                  UU.Jw(XU, zU, cU, yU)
                },
                playParticles: XU => {
                  UU.playParticleEffect(XU)
                }
              }, yU))
            }
            wU = (0, ZF.c)((UU => (0, WX.f)(UU) ? (0, WX.e)(UU) : null)), AU.resolveItemName = (XU, zU) => {
              const cU = UU.getItemStat(QU, XU, "displayName");
              return cU && "object" === typeof cU && "translationKey" in cU ? zU(cU.translationKey, (0, Qy.p)(cU.params, tF.c.shown)) : "string" === typeof cU ? zU(cU) : XU
            }, AU.quests.notifications.onShown = UU => {
              "quest" === UU ? qU.playSound(QU, "magicAccent1", 1, 1) : "skillLevel" === UU ? qU.playSound(QU, "magicAccent1", 1, .6) : "landmark" === UU ? qU.playSound(QU, "trumpetFlare", 1, .6) : "npcNote" === UU ? qU.playSound(QU, "magicAccent2", .8, 1.1) : "started" === UU ? qU.playSound(QU, (0, FF.f)("bigDrumSwish"), 1, 1) : qU.playSound(QU, (0, FF.f)("rpgHandleSmallLeather"), 1, 1)
            }, AU.forge.onPartSelected = () => {
              qU.playSound(QU, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, AU.forge.onOpened = () => {
              ! function(UU) {
                UU.preloadSounds(DF(4, !0).map((UU => UU.sound)))
              }(UU)
            }, AU.forge.onForgeStarted = (XU, zU, cU) => function(UU, XU, zU, cU, yU) {
              const QU = [],
                AU = [],
                FU = zU => {
                  const cU = UU.playSound(XU, zU.DI ? (0, FF.f)(zU.sound) : zU.sound, zU.volume, zU.rate);
                  cU && (AU.push(cU), void 0 !== zU.cutAfter && QU.push(setTimeout((() => {
                    cU.fade(cU.getVolume(), 0, 300)
                  }), zU.cutAfter)))
                };
              for (const oU of DF(zU, cU)) yU ? QU.push(setTimeout((() => {
                FU(oU)
              }), Math.max(0, oU.beat - oU.lead / oU.rate))) : oU.beat !== qz && "magicAccent2" !== oU.sound && "trumpetFlare" !== oU.sound || FU(oU);
              return () => {
                for (const UU of QU) clearTimeout(UU);
                for (const UU of AU) UU.fade(UU.getVolume(), 0, 120)
              }
            }(UU, QU, XU, zU, cU), AU.smuggler.onBought = () => {
              qU.playSound(QU, (0, FF.f)("rpgHandleSmallLeather"), 1, 1), qU.playSound(QU, "chestOpen", .6, 1)
            }, AU.compass.register(new pU(AU.map, !0)), AU.compass.register(new pU(AU.map, !1)), AU.compass.register(new tU(AU.map)), AU.compass.register(new gU((() => AU.quests.getSnapshot().compassTarget)));
            for (const zU of ["enemy", "npc"]) AU.compass.register(new aU(AU.map, zU, (XU => UU.checkValid(XU) ? UU.wG(XU) : void 0), (XU => UU.isAlive(XU))))
          },
          onAfterRender: (UU, XU) => {
            const zU = qU.checkValid(QU) ? qU.wG(QU) : null;
            AU.navigation.afterRender(zU, performance.now(), XU), AU.glowtide.afterRender(zU, XU.cameraHeading), AU.tideCharts.afterRender(zU), JU.afterRender()
          },
          onClose: () => {
            var UU, XU, zU, cU, yU, QU, DU, YU, pU, aU, tU, gU, kU, RU, PU;
            bU && lU.k.unsubscribe(bU), null === (UU = wU) || void 0 === UU || UU(), jU.dispose(), null === (XU = SU) || void 0 === XU || XU.dispose(), JU.dispose(), AU.dispose(), null === (zU = FU) || void 0 === zU || zU(), null === (cU = oU) || void 0 === cU || cU(), null === (yU = EU) || void 0 === yU || yU(), null === (QU = NU) || void 0 === QU || QU(), null === (DU = IU) || void 0 === DU || DU(), null === (YU = GU) || void 0 === YU || YU(), null === (pU = undefined) || void 0 === pU || pU(), null === (aU = BU) || void 0 === aU || aU(), null === (tU = ZU) || void 0 === tU || tU(), null === (gU = WU) || void 0 === gU || gU(), null === (kU = LU) || void 0 === kU || kU(), null === (RU = undefined) || void 0 === RU || RU(), null === (PU = CU) || void 0 === PU || PU()
          },
          onPlayerChangeBlock: (UU, XU, cU, yU, FU, oU) => {
            if (UU === QU && "Air" === oU) {
              const UU = qU.getClientOption(QU, "creative");
              AU.skills.predictBlock([XU, cU, yU], FU, UU);
              const oU = function(UU, XU) {
                  if ("hub" === XU || "farming_1" === XU || "mining_1" === XU) return !HU.has(UU) || "hub" !== XU && "mining_1" !== XU ? Object.hasOwn(fU, UU) ? fU[UU] : void 0 : uU
                }(FU, zU),
                DU = ("hub" === zU || "mining_1" === zU) && (YU.Fd.some((UU => UU === FU)) || Object.hasOwn(MU, FU) || "mining_1" === zU && "Block of Coal" === FU);
              UU || void 0 === oU && !DU || qU.Jw(XU, cU, yU, null !== oU && void 0 !== oU ? oU : uU)
            }
          },
          onPlayerAttackEntity: (UU, XU) => {
            if (UU !== QU || "Player" !== qU.getEntityType(XU)) return;
            const [zU, cU, yU] = qU.wG(XU);
            qU.burstParticlePreset("critical", [zU, cU + 1, yU], 10)
          },
          onChangeBlockFail: UU => {
            for (const {
                wc: XU
              }
              of UU) AU.skills.rejectBlock(XU)
          },
          onReceivedMessageFromServer: (UU, XU) => {
            if ("skyblockGatedPortal" === UU) {
              var zU;
              const [UU, cU] = XU;
              return void(null === (zU = KU.get(UU)) || void 0 === zU || zU.PY(cU))
            }
            if ("skyblockDailyReward" === UU) return void AU.dailyReward.PY(XU);
            if ("skyblockMailbox" === UU) return void AU.mailbox.PY(XU);
            if ("skyblockPortalTransit" === UU) return void AU.portalTransit.PY(XU);
            if ("skyblockLava" === UU) return void jU.PY(XU);
            if ("skyblockForge" === UU) return void AU.forge.PY(XU);
            if ("skyblockMagmaward" === UU) return void AU.magmaward.PY(XU);
            if ("skyblockGlowtide" === UU) return void AU.glowtide.PY(XU);
            if ("skyblockGlowMeter" === UU) return void AU.glowMeter.PY(XU);
            if ("skyblockHushWait" === UU) return void AU.hushWait.PY(XU);
            if ("skyblockPassage" === UU) {
              const UU = XU;
              return AU.passage.PY(UU), AU.reachLog.receivePassagePhase(UU.passagePhase), WU ??= (0, RU.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: AU.passage.show
              }), void AU.keepersChair.receivePassage({
                keepersChairPassagePhase: UU.passagePhase,
                keepersChairPassageNextPhase: UU.passageNextPhase,
                keepersChairPassageTurnsInMs: UU.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === UU) {
              const UU = XU;
              return AU.tideCharts.PY(UU), void(UU.tideCharts.length > 0 && (LU ??= (0, RU.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: AU.tideCharts.show
              })))
            }
            if (UU === sU.B) {
              var cU;
              const {
                hookId: UU,
                waiting: zU
              } = XU;
              return void JU.hookWaiting(UU, null !== (cU = null === zU || void 0 === zU ? void 0 : zU.remainingMs) && void 0 !== cU ? cU : null)
            }
            if ("skyblockBiteTell" === UU) return void VU.receiveTell(XU);
            if ("skyblockSmuggler" === UU) return void AU.smuggler.PY(XU);
            if ("skyblockKeepersChair" === UU) return AU.keepersChair.PY(XU), void AU.lampLight.setAtChair(AU.keepersChair.isAtChair());
            if ("skyblockLampLight" === UU) {
              const UU = XU;
              var yU;
              if (AU.lampLight.PY(UU), UU.lampLightReleasing) ZU ??= (0, RU.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  AU.lampLight.setRelease(!1)
                }
              });
              else null === (yU = ZU) || void 0 === yU || yU(), ZU = void 0;
              return
            }
            if ("skyblockRegulars" === UU) return void AU.regulars.PY(XU);
            if ("skyblockHiddenWaters" === UU) return void AU.hiddenWaters.PY(XU);
            if ("skyblockReachLog" === UU) return AU.reachLog.PY(XU), void(BU ??= (0, RU.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: oc
              },
              onClick: AU.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === UU) {
              for (const [UU, zU, cU, yU] of XU) qU.Jw(UU, zU, cU, yU);
              return
            }
            if ("skyblockHud" === UU) AU.receiveHud(XU);
            else if ("skyblockMap" === UU) AU.map.PY(XU);
            else if (UU === nU.h) AU.skills.PY(XU);
            else if (UU === eU && "dialogue" === XU.kind) AU.dialogue.PY(XU);
            else if (UU === eU) AU.quests.PY(XU);
            else if ("skyblockDungeons" === UU) AU.dungeons.PY(XU);
            else if ("sbCollections" === UU) AU.collections.PY(XU);
            else if ("skyblockQuestGraph" === UU) AU.questGraph.PY(XU);
            else {
              if ("skyblockAutographs" !== UU) return;
              AU.autographs.PY(XU)
            }
            if (!oU && AU.map.getSnapshot().enabled) {
              const UU = (0, RU.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: AU.map.show
                }),
                XU = (0, mU.t)(AU.map.show);
              oU = () => {
                UU(), XU()
              }
            }!EU && AU.skills.getSnapshot().enabled && (EU = (0, RU.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: AU.skills.show
            })), !GU && AU.collections.getSnapshot().enabled && (GU = (0, RU.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: AU.collections.show
            })), !NU && AU.quests.getSnapshot().enabled && (NU = (0, RU.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: AU.quests.show
            })), !CU && AU.autographs.getSnapshot().enabled && (CU = (0, RU.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: AU.autographs.show
            }));
            const QU = AU.dungeons.getSnapshot().enabled;
            var DU;
            (EU || NU || QU) && kU !== QU && (kU = QU, null === (DU = IU) || void 0 === DU || DU(), IU = (0, RU.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: eF
              },
              disabled: !QU,
              panel: !0,
              onClick: AU.dungeons.show
            }));
            FU || (FU = (0, mU.u)((0, PU.createElement)(QF, {
              controller: AU
            }), {
              content: (0, PU.createElement)(AF, {
                controller: AU
              }),
              onClose: AU.close
            }))
          },
          LY: () => {
            var UU;
            for (const XU of KU.values()) XU.LY();
            jU.LY(), null === (UU = SU) || void 0 === UU || UU.LY(), AU.skills.LY(), AU.quests.LY(), AU.dailyReward.LY(), AU.mailbox.LY(), AU.map.LY()
          }
        }
      }
  },
  39315: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      g: () => yU
    });
    var cU = zU(344);
    const yU = (0, cU.Cb)([0, 0, -1]),
      QU = [{
        name: "S",
        bearing: (0, cU.Cb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, cU.Cb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: yU
      }, {
        name: "W",
        bearing: (0, cU.Cb)([1, 0, 0])
      }]
  },
  39311: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      i: () => QU
    });
    var cU = zU(39315);

    function yU(UU, XU, zU) {
      return [100 * (zU.mapMaxX - UU) / (zU.mapMaxX - zU.mapMinX), 100 * (XU - zU.mapMinZ) / (zU.mapMaxZ - zU.mapMinZ)]
    }

    function QU(UU, XU, zU, QU) {
      const [AU, FU] = yU(UU, XU, QU), oU = cU.g - zU;
      return {
        rotation: oU,
        transform: `rotate(${oU}rad) translate(-${AU}%, -${FU}%)`
      }
    }
  },
  39367: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => AU
    });
    var cU = zU(4619);
    const yU = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function QU(UU) {
      const XU = new cU.l(UU);
      return {
        radius: 45,
        squareness: 3,
        wobbles: yU.map((UU => {
          let {
            lobes: zU,
            amount: cU
          } = UU;
          return {
            lobes: zU[Math.floor(XU.next() * zU.length)],
            amount: cU[0] + XU.next() * (cU[1] - cU[0]),
            phase: 2 * XU.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function AU(UU) {
      let {
        radius: XU,
        squareness: zU,
        wobbles: cU,
        samples: yU
      } = UU;
      const QU = [];
      for (let AU = 0; AU < yU; AU++) {
        const UU = 2 * Math.PI * AU / yU,
          FU = Math.cos(UU),
          oU = Math.sin(UU),
          DU = XU * (Math.abs(FU) ** zU + Math.abs(oU) ** zU) ** (-1 / zU) * cU.reduce(((XU, zU) => {
            let {
              lobes: cU,
              amount: yU,
              phase: QU
            } = zU;
            return XU + yU * Math.sin(cU * UU + QU)
          }), 1);
        QU.push(`${(50+DU*FU).toFixed(2)} ${(50+DU*oU).toFixed(2)}`)
      }
      return `M${QU.join("L")}Z`
    }
  },
  37067: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => cU
    });
    const cU = "skyblockSkills",
      yU = "skills_test_gym"
  },
  39386: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39390: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39393: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39400: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39402: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39407: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39415: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39421: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39429: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39434: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39436: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39441: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39445: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39447: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);