export const id = 248;
export const ids = [60, 248];
export const modules = {
  39780: (WW, iW, OW) => {
    var mW = {
      "./combat_1.png": 39785,
      "./dungeon_crumbling_crypt.png": 39793,
      "./dungeon_frozen_hollow.png": 39795,
      "./dungeon_wildwood_grove.png": 39803,
      "./dungeons.png": 39808,
      "./farming_1.png": 39811,
      "./fishing_1.png": 39819,
      "./hub.png": 39823,
      "./island.png": 39828,
      "./mining_1.png": 39830,
      "./mining_1_bridge.png": 39839,
      "./mining_1_gallery.png": 39848,
      "./mining_1_hollow.png": 39857,
      "./mining_1_village.png": 39863
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
    }, EW.resolve = NW, WW.exports = EW, EW.id = 39780
  },
  39881: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW, iW) {
      return mW.set(WW, iW), WW
    }

    function NW(WW) {
      var iW;
      return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
    }
  },
  39733: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW) {
        this.iZ = WW, this.beforeOpen = iW, this.afterClose = OW, this.open = !1, this.JA = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.JA && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(WW) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(WW)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.JA = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.JA || (this.snapshot = this.buildSnapshot(), this.iZ(this.snapshot))
      }
    }
  },
  39894: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      SkyblockEntityFacing: () => LW,
      needsSkyblockEntityFacing: () => PW
    });
    var mW = OW(639),
      EW = OW(2937),
      NW = OW(39897);

    function PW(WW, iW) {
      if (WW.metaInfo === mW.d || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
      if ("Pig" === WW.type) return "sitting" === WW.pose;
      if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
      let OW = null === iW || void 0 === iW ? void 0 : iW.get(WW.meshOpts);
      if (void 0 === OW) {
        var NW, PW;
        const mW = (0, EW.h)(WW);
        OW = !1, "pig_napoleon" === (null === mW || void 0 === mW || null === (NW = mW.opts.textures) || void 0 === NW ? void 0 : NW.head) ? OW = !0 : "npc_pig_head" === (null === mW || void 0 === mW || null === (PW = mW.opts.textures) || void 0 === PW ? void 0 : PW.head) && (OW = "sitting" === mW.opts.pose || "sitting"), iW && (iW.size >= 256 && iW.clear(), iW.set(WW.meshOpts, OW))
      }
      return "sitting" === OW ? "sitting" === WW.pose : OW
    }(0, NW.e)("skyblock", ((WW, iW) => {
      iW.setFacingTolerance(PW(WW) ? 0 : null)
    }));
    class LW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = WW, this.alsoVisit = iW, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = WW => {
          var iW;
          const OW = this.api.getEntityInfo(WW);
          OW && (PW(OW, this.meshFacingCache) && (this.api.setFacingTolerance(WW, 0), this.nextFacing.add(WW)), null === (iW = this.alsoVisit) || void 0 === iW || iW.call(this, WW, OW))
        }
      }
      hZ() {
        const {
          api: WW
        } = this, iW = this.nextFacing;
        WW.forEachEntity(this.visit);
        for (const OW of this.facing) iW.has(OW) || WW.setFacingTolerance(OW, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = iW
      }
      dispose() {
        for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39715: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => nL
    });
    const mW = "island";
    var EW = OW(39722);

    function NW(WW, iW, OW) {
      const NW = "local" === iW,
        LW = WW.background,
        cW = iW => LW ? (0, EW.e)(iW[0] - WW.mapOrigin[0], iW[2] - WW.mapOrigin[2], LW.bounds) : [50, 50],
        wW = (WW.insideDungeon ? [] : WW.landmarks).map((WW => {
          var iW, mW;
          return {
            id: WW.id,
            name: OW(WW.visited && WW.nameKey ? null !== (iW = WW.mapLabelKey) && void 0 !== iW ? iW : WW.nameKey : "skyblockGame:mapUnknown"),
            icon: WW.visited && null !== (mW = WW.icon) && void 0 !== mW ? mW : "unknown",
            visited: WW.visited,
            current: !1,
            position: cW(WW.position),
            travelKind: "landmark",
            travelId: WW.id
          }
        })),
        tW = WW.zones.map((iW => {
          var mW;
          return {
            id: iW.id,
            name: OW(iW.visited && iW.nameKey ? iW.nameKey : "skyblockGame:mapUnknown"),
            icon: iW.visited && null !== (mW = iW.icon) && void 0 !== mW ? mW : "unknown",
            visited: iW.visited,
            current: iW.id === WW.zoneId,
            position: iW.position,
            thumbnail: iW.visited ? iW.id : void 0,
            travelKind: "zone",
            travelId: iW.id
          }
        })),
        ZW = WW.insideDungeon || !LW ? [] : WW.portals.map((WW => {
          var iW;
          return {
            id: WW.id,
            name: OW(null !== (iW = WW.nameKey) && void 0 !== iW ? iW : "skyblockGame:mapUnknown"),
            icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
            visited: WW.visited,
            current: !1,
            position: cW(WW.position),
            colour: WW.colour,
            travelKind: "zone",
            travelId: WW.destination
          }
        })),
        xW = NW ? wW : tW,
        lW = xW.filter((WW => WW.visited)).length,
        AW = LW ? (LW.bounds.mapMaxX - LW.bounds.mapMinX) / (LW.bounds.mapMaxZ - LW.bounds.mapMinZ) : 2,
        bW = LW ? JSON.stringify([LW.bounds, WW.mapOrigin]) : "";
      return {
        local: NW,
        points: xW,
        portals: NW ? ZW : [],
        progress: xW.length ? OW("skyblockGame:mapDiscovered", {
          current: String(lW),
          total: String(xW.length)
        }) : null,
        percent: xW.length ? 100 * lW / xW.length : 0,
        canTravel: [...xW, ...NW ? ZW : []].some((WW => WW.visited && !WW.current)),
        noLandmarks: NW && !WW.insideDungeon && 0 === wW.length,
        background: LW ? {
          imageKey: LW.imageKey,
          fallbackImageKey: WW.zoneId,
          geometryKey: bW,
          label: OW(LW.labelKey),
          colour: LW.backgroundColour,
          ratio: AW
        } : null,
        connections: PW(WW.zones),
        minimap: LW ? {
          imageKey: LW.imageKey,
          fallbackImageKey: WW.zoneId,
          geometryKey: bW,
          label: OW(LW.labelKey),
          colour: LW.backgroundColour,
          caption: OW(WW.zoneId === mW ? "skyblockGame:zoneIsland" : LW.labelKey),
          width: (LW.bounds.mapMaxX - LW.bounds.mapMinX) / LW.minimapSpan * 100 + "%",
          height: (LW.bounds.mapMaxZ - LW.bounds.mapMinZ) / LW.minimapSpan * 100 + "%",
          markers: [...wW, ...ZW]
        } : null
      }
    }

    function PW(WW) {
      const iW = new Set;
      return WW.flatMap((OW => OW.connections.flatMap((mW => {
        const EW = WW.find((WW => WW.id === mW)),
          NW = [OW.id, mW].sort().join("|");
        return !EW || iW.has(NW) ? [] : (iW.add(NW), [{
          id: `${OW.id}-${mW}`,
          start: OW.position,
          end: EW.position,
          explored: OW.visited && EW.visited
        }])
      }))))
    }
    var LW = OW(39733);
    class cW extends LW.e {}
    const wW = "skyblockMapView";
    class tW extends cW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(WW, mW, EW), this.requestTravel = iW, this.translate = OW, this.now = NW, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (WW, iW) => {
          if (!this.map || this.pending || this.JA) return;
          const OW = ("zone" === WW ? this.map.zones : this.map.landmarks).find((WW => WW.id === iW));
          if (OW) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in OW && !OW.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (OW.visited)
              if ("zone" === WW && iW === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const OW = ++this.nextRequestId;
                this.pending = {
                  requestId: OW,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: WW,
                  id: iW,
                  requestId: OW
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
      yZ(WW) {
        var iW;
        if (!this.JA)
          if ("entities" !== WW.kind)
            if ("open" !== WW.kind) {
              var OW, mW;
              if ("snapshot" === WW.kind)(null === (OW = WW.snapshot) || void 0 === OW ? void 0 : OW.zoneId) !== (null === (mW = this.map) || void 0 === mW ? void 0 : mW.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = WW.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === WW.kind) {
                var EW;
                WW.requestId === (null === (EW = this.pending) || void 0 === EW ? void 0 : EW.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (WW.requestId === (null === (iW = this.pending) || void 0 === iW ? void 0 : iW.requestId)) {
                var NW;
                this.pending = null, this.feedbackKey = null !== (NW = WW.errorKey) && void 0 !== NW ? NW : "", null === WW.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = WW.entities
      }
      hZ() {
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
          presentation: this.map ? NW(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var ZW = OW(344);
    const xW = 67.5 * Math.PI / 180;

    function lW(WW, iW) {
      const OW = Math.abs(WW);
      if (OW > xW || iW.trackHalfWidth <= 0) return null;
      const mW = iW.trackHalfWidth,
        EW = iW.screenHalfWidth / (iW.tanHalfFovX * Math.max(.5, Math.cos(iW.pitch))),
        NW = Math.min(Math.atan(.6 * mW / EW), .75 * xW),
        PW = EW * Math.tan(NW);
      let LW;
      if (OW <= NW) LW = EW * Math.tan(OW);
      else {
        const WW = xW - NW,
          iW = Math.max(0, EW * WW / (Math.cos(NW) ** 2 * (mW - PW)) - 1),
          cW = (OW - NW) / WW;
        LW = PW + (mW - PW) * (1 + iW) * cW / (1 + iW * cW)
      }
      return 50 + Math.sign(WW) * LW * 50 / mW
    }
    class AW {
      constructor(WW, iW) {
        this.map = WW, this.visited = iW, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = iW ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const WW = this.map.getSnapshot().map;
        return !WW || WW.insideDungeon ? [] : WW.landmarks.filter((WW => WW.visited === this.visited)).map((WW => {
          var iW, OW;
          return {
            id: `landmark:${WW.id}`,
            position: WW.position,
            icon: null !== (iW = WW.icon) && void 0 !== iW ? iW : "unknown",
            nameKey: null !== (OW = WW.nameKey) && void 0 !== OW ? OW : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class bW {
      constructor(WW, iW, OW, mW) {
        this.map = WW, this.kind = iW, this.position = OW, this.alive = mW, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = iW, this.range = "enemy" === iW ? 48 : 64, this.limit = 12
      }
      Vk(WW) {
        if ("enemy" !== this.kind || this.alive(WW.ZO)) return this.position(WW.ZO)
      }
      getPoints() {
        const WW = [];
        for (const mW of this.map.getEntities()) {
          if (mW.kind !== this.kind || "enemy" === this.kind && !this.alive(mW.compassEntityId)) continue;
          const EW = this.position(mW.compassEntityId);
          var iW, OW;
          if (EW) WW.push({
            id: `${this.kind}:${mW.compassEntityId}`,
            ZO: mW.compassEntityId,
            kind: this.kind,
            icon: null !== (iW = mW.icon) && void 0 !== iW ? iW : mW.npcSkin ? `npc_${mW.npcSkin}` : this.kind,
            displayName: mW.displayName,
            position: EW,
            nameKey: null !== (OW = mW.nameKey) && void 0 !== OW ? OW : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return WW
      }
    }
    class jW {
      constructor(WW) {
        this.map = WW, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const WW = this.map.getSnapshot().map;
        return !WW || WW.insideDungeon ? [] : WW.portals.map((WW => {
          var iW;
          return {
            id: "portal:" + WW.id,
            kind: "portal",
            position: WW.position,
            nameKey: null !== (iW = WW.nameKey) && void 0 !== iW ? iW : "skyblockGame:compassUnvisitedZone",
            icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
            colour: WW.colour
          }
        }))
      }
    }
    class UW {
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

    function kW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.position;
      const EW = mW[0] - iW[0],
        NW = mW[2] - iW[2];
      return {
        ...WW,
        position: mW,
        offset: ZW.e.computeShortestRotation(OW, (0, ZW.Ab)([EW, 0, NW])),
        distance: Math.hypot(EW, mW[1] - iW[1], NW)
      }
    }
    let sW;

    function MW(WW, iW) {
      var OW;
      return (null === (OW = sW) || void 0 === OW ? void 0 : OW.locale) !== iW && (sW = {
        locale: iW,
        near: new Intl.NumberFormat(iW, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(iW, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (WW < 10 ? sW.near : sW.far).format(WW)
    }
    class KW {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(WW) {
        return this.providers.set(WW.id, WW), this.refreshAt = 0, () => {
          this.providers.get(WW.id) === WW && (this.providers.delete(WW.id), this.refreshAt = 0)
        }
      }
      frame(WW, iW, OW) {
        if (OW >= this.refreshAt) {
          this.refreshAt = OW + 200, this.candidates = [];
          for (const iW of this.providers.values()) {
            if (!iW.enabled) continue;
            const OW = iW.getPoints().map((iW => {
              const OW = iW.position;
              return {
                point: iW,
                distance: Math.hypot(OW[0] - WW[0], OW[1] - WW[1], OW[2] - WW[2])
              }
            })).filter((WW => WW.distance <= iW.range)).sort(((WW, iW) => WW.distance - iW.distance)).slice(0, iW.limit);
            for (const {
                point: WW
              }
              of OW) this.candidates.push({
              provider: iW,
              point: WW
            })
          }
        }
        const mW = [];
        for (const {
            point: EW,
            provider: NW
          }
          of this.candidates) {
          if (!NW.enabled) continue;
          const OW = NW.Vk ? NW.Vk(EW) : EW.position;
          if (OW) {
            const NW = kW(EW, WW, iW, OW);
            Math.abs(NW.offset) <= xW && mW.push(NW)
          }
        }
        return mW
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var SW = OW(3368),
      YW = OW(62);
    const yW = [{
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
      TW = yW.length;

    function JW(WW) {
      return WW >= TW ? 1 : WW + 1
    }
    const hW = "skyblockQuests",
      HW = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      nW = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function uW(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const OW = Math.max(0, Math.floor(WW)),
        mW = Math.floor(OW % 1e3 / 100),
        EW = Math.floor(OW / 1e3),
        NW = EW % 60,
        PW = Math.floor(EW / 60),
        LW = PW % 60,
        cW = Math.floor(PW / 60),
        wW = WW => WW < 10 ? `0${WW}` : String(WW),
        tW = iW ? `.${mW}` : "";
      return cW > 0 ? `${cW}:${wW(LW)}:${wW(NW)}${tW}` : `${LW}:${wW(NW)}${tW}`
    }
    const oW = "devquests",
      dW = "none",
      eW = {
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
      vW = "Compressed Messy Stone",
      gW = {
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
      DW = ["Stone", "Diorite", "Andesite", "Granite"],
      VW = new Set(DW),
      pW = (Object.keys(gW), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const fW = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function CW(WW, iW) {
      const OW = Math.floor(5 * WW / (2 * iW + 1));
      return Math.min(4, Math.max(0, OW))
    }
    var XW = OW(1230);
    var BW = OW(37503);
    var qW = OW(3361),
      RW = OW(27),
      GW = OW(10114);
    const IW = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      aW = 1e3;

    function rW(WW) {
      return Math.max(0, WW)
    }

    function zW(WW) {
      return 1 + .01 * rW(WW)
    }

    function FW(WW) {
      return 1 + .005 * rW(WW)
    }

    function QW(WW) {
      return 1 + .005 * rW(WW)
    }

    function Wi(WW) {
      return .01 * rW(WW)
    }

    function ii(WW) {
      return 150 / (150 + rW(WW))
    }

    function Oi(WW) {
      return 1 + .002 * rW(WW)
    }

    function mi(WW) {
      return Math.round(10 * WW) / 10
    }

    function Ei(WW, iW) {
      switch (WW) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: mi(100 * (FW(iW) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: mi(100 * (zW(iW) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: mi(100 * (QW(iW) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: mi(100 * Wi(iW))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: mi(100 * (1 - ii(iW)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: mi(100 * (Oi(iW) - 1))
          }
      }
    }

    function Ni(WW) {
      return "farming" === WW ? 200 : 100
    }

    function Pi(WW, iW) {
      if (!Number.isSafeInteger(WW) || WW < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const OW = Ni(iW),
        mW = WW => function(WW, iW) {
          return Ni(WW) * iW * (iW + 1) / 2
        }(iW, WW);
      let EW = Math.min(aW, Math.floor((Math.sqrt(8 * WW / OW + 1) - 1) / 2));
      return EW < aW && mW(EW + 1) <= WW ? EW++ : mW(EW) > WW && EW--, {
        totalXp: WW,
        level: EW,
        xpIntoLevel: WW - mW(EW),
        xpForNextLevel: EW === aW ? null : OW * (EW + 1)
      }
    }
    const Li = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function ci(WW) {
      return Li.has(WW)
    }
    const wi = new Set(ZW.mb);

    function ti(WW) {
      return wi.has(WW)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Zi = {
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
      xi = {
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
      li = {
        ...xi,
        ...Object.fromEntries(Object.entries(pW).map((WW => {
          let [iW, OW] = WW;
          return [iW, 9 * xi[OW]]
        })))
      },
      Ai = {
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
      bi = {
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
    const ji = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Ui = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function ki(WW) {
      return `rgb(${Ui[WW].join(", ")})`
    }

    function si(WW, iW, OW) {
      if (!OW) return WW(iW);
      const mW = {};
      for (const [EW, NW] of Object.entries(OW)) mW[EW] = "string" === typeof NW ? NW : WW(NW.translationKey);
      return WW(iW, mW)
    }
    class Mi {
      constructor(WW, iW) {
        this.now = WW, this.getJournal = iW, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.BL = !1, this.onShown = () => {}
      }
      enqueue(WW) {
        const iW = Ki(WW);
        if (iW) this.pending.push(WW);
        else {
          const iW = this.pending.findIndex(Ki);
          this.pending.splice(-1 === iW ? this.pending.length : iW, 0, WW)
        }
        return (null === this.current || null !== this.followUp && !iW) && (this.advance(), !0)
      }
      setHeld(WW) {
        return this.BL = WW, !WW && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      hZ() {
        const WW = this.getJournal(),
          iW = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === iW ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === iW || void 0 === iW ? void 0 : iW.kind) && WW && WW.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === iW || void 0 === iW ? void 0 : iW.kind)) {
          const WW = this.findFollowUp(this.current);
          if ("step" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || WW.questId !== iW.questId || WW.step.id !== iW.step.id) return this.showFollowUp(WW, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(WW, iW, OW) {
        var mW, EW, NW, PW;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, WW, OW);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, WW);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, WW, iW);
        const {
          questCompletionKind: LW,
          questCompletionNameKey: cW
        } = this.current, wW = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, tW = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, ZW = "step" === (null === (mW = this.followUp) || void 0 === mW ? void 0 : mW.kind) ? this.followUp : null, xW = "explore" === (null === (EW = this.followUp) || void 0 === EW ? void 0 : EW.kind);
        let lW;
        return lW = xW ? WW("skyblockGame:questExploreTitle") : null !== ZW ? "quest" === LW ? WW("skyblockGame:questNextQuestTitle", {
          quest: WW(ZW.questNameKey)
        }) : WW("skyblockGame:questNextStepTitle") : WW("started" === LW ? "skyblockGame:questStartedTitle" : "quest" === LW ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? LW : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: lW,
          name: xW ? iW("skyblockGame:questExploreName") : null !== ZW ? si(iW, ZW.step.nameKey, ZW.step.nameParams) : si(iW, cW, wW),
          description: xW ? iW("skyblockGame:questExploreDescription") : null === ZW ? null : si(iW, ZW.step.descriptionKey, ZW.step.descriptionParams),
          reward: null === this.followUp && tW > 0 ? iW("skyblockGame:questCoinRewardSuffix", {
            amount: tW.toLocaleString(OW)
          }) : null,
          iconItem: null !== (NW = null === ZW || void 0 === ZW ? void 0 : ZW.step.questIconItem) && void 0 !== NW ? NW : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== ZW && (null === (PW = this.getJournal()) || void 0 === PW ? void 0 : PW.trackedQuestId) === ZW.questId ? ZW.step.nameKey : null
        }
      }
      getSkillLevelView(WW, iW, OW) {
        let {
          skill: mW,
          beforeLevel: EW,
          level: NW
        } = WW;
        const PW = Ei(mW, EW),
          LW = Ei(mW, NW);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: iW(`skyblockGame:${mW}`),
          name: iW("skyblockGame:skillLevelUp", {
            to: NW.toLocaleString(OW)
          }),
          description: PW.percent === LW.percent ? null : iW(`${LW.translationKey}Change`, {
            before: PW.percent.toLocaleString(OW),
            after: LW.percent.toLocaleString(OW)
          }),
          reward: null,
          iconItem: ji[mW],
          accent: ki(mW),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(WW, iW) {
        let {
          landmarkNameKey: OW
        } = WW;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: iW("skyblockGame:landmarkDiscovered"),
          name: iW(OW),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(WW, iW, OW) {
        let {
          titleKey: mW,
          textKey: EW,
          params: NW = {},
          nameKeys: PW = {},
          iconItem: LW = null
        } = WW;
        const cW = {
          ...NW
        };
        for (const [wW, tW] of Object.entries(PW)) cW[wW] = iW(tW);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: iW(mW),
          name: OW(EW, cW),
          description: null,
          reward: null,
          iconItem: LW,
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
      showFollowUp(WW, iW) {
        null === WW || this.BL ? this.advance() : (this.followUp = WW, this.token++, this.shownAt = this.now(), this.expiresAt = null !== iW && void 0 !== iW ? iW : this.shownAt + this.durationMs())
      }
      findFollowUp(WW) {
        var iW;
        const OW = this.getJournal();
        if (!OW || this.hasPendingQuestPopup() || Ki(WW)) return null;
        const mW = "started" === WW.questCompletionKind ? OW.active.some((iW => iW.id === WW.questCompletionQuestId)) : "quest" === WW.questCompletionKind ? OW.completed.some((iW => iW.id === WW.questCompletionQuestId)) : [...OW.active, ...OW.completed].some((iW => iW.id === WW.questCompletionQuestId && iW.subquests.some((iW => iW.id === WW.questCompletionStepId && "completed" === iW.status))));
        if (!mW) return null;
        if ("quest" === WW.questCompletionKind && 0 === OW.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const EW = OW.active.find((WW => WW.id === OW.trackedQuestId)),
          NW = null !== (iW = null === EW || void 0 === EW ? void 0 : EW.subquests.find((WW => "ready" === WW.status))) && void 0 !== iW ? iW : null === EW || void 0 === EW ? void 0 : EW.subquests.find((WW => "active" === WW.status));
        return NW ? {
          kind: "step",
          questId: EW.id,
          questNameKey: EW.nameKey,
          step: NW
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((WW => !Ki(WW)))
      }
      advance() {
        var WW;
        this.current = this.BL ? null : null !== (WW = this.pending.shift()) && void 0 !== WW ? WW : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Ki(WW) {
      return Si(WW.questCompletionKind)
    }

    function Si(WW) {
      return "skillLevel" === WW || "landmark" === WW || "npcNote" === WW
    }
    var Yi = OW(39739),
      yi = OW(39747),
      Ti = OW(39701),
      Ji = OW(2955);
    const Hi = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function ni(WW) {
      const iW = new Ji.g(WW);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Hi.map((WW => {
          let {
            lobes: OW,
            amount: mW
          } = WW;
          return {
            lobes: OW[Math.floor(iW.next() * OW.length)],
            amount: mW[0] + iW.next() * (mW[1] - mW[0]),
            phase: 2 * iW.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function ui(WW) {
      let {
        radius: iW,
        squareness: OW,
        wobbles: mW,
        samples: EW
      } = WW;
      const NW = [];
      for (let PW = 0; PW < EW; PW++) {
        const WW = 2 * Math.PI * PW / EW,
          LW = Math.cos(WW),
          cW = Math.sin(WW),
          wW = iW * (Math.abs(LW) ** OW + Math.abs(cW) ** OW) ** (-1 / OW) * mW.reduce(((iW, OW) => {
            let {
              lobes: mW,
              amount: EW,
              phase: NW
            } = OW;
            return iW + EW * Math.sin(mW * WW + NW)
          }), 1);
        NW.push(`${(50+wW*LW).toFixed(2)} ${(50+wW*cW).toFixed(2)}`)
      }
      return `M${NW.join("L")}Z`
    }
    const oi = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class di {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.JA = !1, this.mountCompass = WW => {
          var iW;
          if (null === (iW = this.stopLayout) || void 0 === iW || iW.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !WW || this.JA) return;
          const OW = WW.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: WW,
            track: OW,
            label: WW.querySelector(".SkyblockCompassLabel")
          }, OW.replaceChildren();
          for (let EW = 0; EW < 4; EW++) {
            const WW = document.createElement("span");
            WW.className = "SkyblockCompassCardinal", OW.appendChild(WW), this.cardinals.push(WW)
          }
          const mW = (0, Ti.d)(oi, [WW], this.layout);
          this.stopLayout = () => {
            mW(), OW.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = WW => {
          this.terrain = this.JA ? null : WW, this.render(this.frame)
        }, this.mountMinimapSearchArea = WW => {
          this.mountSearchArea("minimap", WW)
        }, this.mountMapSearchArea = WW => {
          this.mountSearchArea("map", WW)
        }, this.mountPlayer = WW => {
          this.player = this.JA ? null : WW, this.render(this.frame)
        }, this.mountWaypoint = WW => {
          var iW, OW;
          if (null === (iW = this.stopWaypoint) || void 0 === iW || iW.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !WW || this.JA) return;
          const mW = WW.querySelector(".SkyblockQuestWaypointMarker");
          mW.replaceChildren((0, yi.c)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: WW,
            marker: mW,
            clip: WW.querySelector(".SkyblockQuestWaypointTextClip"),
            text: WW.querySelector(".SkyblockQuestWaypointText"),
            label: WW.querySelector(".SkyblockQuestWaypointLabel"),
            distance: WW.querySelector(".SkyblockQuestWaypointDistance"),
            hint: WW.querySelector(".SkyblockQuestWaypointHint")
          };
          const EW = () => {
              this.waypointMarkerSize = {
                width: mW.offsetWidth,
                height: mW.offsetHeight
              }, this.waypointInset = {
                x: mW.offsetWidth / 2 + 8,
                top: mW.offsetHeight + 8,
                bottom: 8
              }
            },
            NW = new ResizeObserver((() => {
              EW(), this.render(this.frame)
            }));
          NW.observe(mW, {
            box: "border-box"
          });
          const PW = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", PW), null === (OW = window.visualViewport) || void 0 === OW || OW.addEventListener("resize", PW), this.stopWaypoint = () => {
            var WW;
            NW.disconnect(), window.removeEventListener("resize", PW), null === (WW = window.visualViewport) || void 0 === WW || WW.removeEventListener("resize", PW)
          }, PW(), EW(), this.render(this.frame)
        }, this.mountWaypointOrigin = WW => {
          var iW;
          if (null === (iW = this.stopWaypointOrigin) || void 0 === iW || iW.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = WW && !this.JA ? Number(WW.dataset.notificationToken) : null, WW && !this.JA && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const iW = {
              nameKey: WW.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = iW;
            const OW = () => {
                const OW = WW.getBoundingClientRect();
                iW.x = (OW.left + OW.width / 2) / window.innerWidth * 100, iW.y = (OW.top + OW.height / 2) / window.innerHeight * 100
              },
              mW = new ResizeObserver(OW);
            mW.observe(WW.parentElement), mW.observe(WW), window.addEventListener("resize", OW), this.stopWaypointOrigin = () => {
              mW.disconnect(), window.removeEventListener("resize", OW)
            }, OW()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const WW = this.compass.root,
            iW = getComputedStyle(WW),
            OW = getComputedStyle(document.documentElement),
            mW = parseFloat(OW.fontSize),
            EW = parseFloat(iW.getPropertyValue("--compass-icon-size")) * mW,
            NW = "1" === iW.getPropertyValue("--compass-fit-top").trim(),
            PW = NW ? 1 : 8,
            LW = Array.from(document.querySelectorAll(oi), (WW => {
              var iW;
              return (null !== (iW = WW.querySelector(".MiddleTextTop")) && void 0 !== iW ? iW : WW).getBoundingClientRect()
            })).filter((WW => WW.width > 0 && WW.height > 0));
          let cW = (parseFloat(OW.getPropertyValue("--notchTop")) || 0) + PW,
            wW = "";
          if (NW) {
            const iW = window.innerWidth / 2,
              OW = WW.getBoundingClientRect().height,
              NW = [cW, ...LW.map((WW => Math.max(cW, WW.bottom + PW)))].sort(((WW, iW) => WW - iW));
            for (const WW of NW) {
              let NW = iW - 8;
              for (const mW of LW) mW.bottom + PW <= WW || mW.top >= WW + OW + PW || (NW = Math.min(NW, mW.right <= iW ? iW - mW.right - 8 : mW.left - iW - 8));
              const tW = 2 * NW - EW;
              if (tW >= 16 * mW) {
                wW = `${tW}px`, cW = WW;
                break
              }
            }
          }
          WW.style.maxWidth !== wW && (WW.style.maxWidth = wW);
          const tW = WW.getBoundingClientRect(),
            ZW = this.compassSize.trackHalfWidth;
          if (tW.width > 0) {
            const WW = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: WW.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * EW / WW.width
          }
          if (!wW)
            for (const xW of LW) xW.right > tW.left - 8 && xW.left < tW.right + 8 && (cW = Math.max(cW, xW.bottom + PW));
          WW.style.top = `${cW}px`, this.compassSize.trackHalfWidth !== ZW && this.render(this.frame)
        }
      }
      mountSearchArea(WW, iW) {
        this.searchAreas[WW] = this.JA ? null : iW, this.render(this.frame)
      }
      render(WW) {
        if (this.JA) return;
        if (this.frame = WW, this.compass && (ei(this.compass.root, !WW), WW)) {
          const iW = this.compassSize.trackHalfWidth / 50;
          WW.compass.cardinals.forEach(((WW, OW) => {
            const mW = this.cardinals[OW];
            mW.textContent !== WW.name && (mW.textContent = WW.name), ei(mW, WW.hidden), mW.style.translate = WW.left * iW + "px"
          }));
          const OW = new Set;
          WW.compass.markers.forEach(((mW, EW) => {
            var NW;
            OW.add(mW.id);
            let PW = this.markers.get(mW.id);
            PW || (PW = document.createElement("span"), PW.className = "SkyblockCompassMarker", this.markers.set(mW.id, PW), this.compass.track.appendChild(PW)), PW.dataset.icon !== mW.icon && (PW.dataset.icon = mW.icon, PW.replaceChildren((0, yi.c)(mW.icon))), PW.style.color = null !== (NW = mW.colour) && void 0 !== NW ? NW : "", PW.style.translate = mW.left * iW + "px", PW.style.zIndex = String(WW.compass.markers.length - EW), PW.title !== mW.name && (PW.title = mW.name)
          }));
          for (const [WW, mW] of this.markers) OW.has(WW) || (mW.remove(), this.markers.delete(WW));
          this.compass.label.textContent !== WW.compass.label && (this.compass.label.textContent = WW.compass.label)
        }
        this.terrain && (ei(this.terrain, !(null !== WW && void 0 !== WW && WW.minimap)), null !== WW && void 0 !== WW && WW.minimap && (this.terrain.style.transform = WW.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", WW.minimap.iconRotation)));
        const iW = null === WW || void 0 === WW ? void 0 : WW.searchArea;
        for (const OW of [this.searchAreas.minimap, this.searchAreas.map])
          if (OW && (ei(OW, !iW), iW)) {
            if (this.searchAreaPath.seed !== iW.shapeSeed && (this.searchAreaPath = {
                seed: iW.shapeSeed,
                d: ui(ni(iW.shapeSeed))
              }), OW.dataset.shapeSeed !== iW.shapeSeed) {
              OW.dataset.shapeSeed = iW.shapeSeed;
              for (const WW of OW.querySelectorAll("path")) WW.setAttribute("d", this.searchAreaPath.d)
            }
            OW.style.left = `${iW.left}%`, OW.style.top = `${iW.top}%`, OW.style.width = `${iW.width}%`, OW.style.height = `${iW.height}%`
          } if (this.player && (ei(this.player, !(null !== WW && void 0 !== WW && WW.player) || WW.player.hidden), null !== WW && void 0 !== WW && WW.player && (this.player.style.left = `${WW.player.left}%`, this.player.style.top = `${WW.player.top}%`, this.player.style.setProperty("--map-player-rotation", WW.player.rotation))), this.waypoint) {
          const {
            root: iW,
            marker: OW,
            clip: mW,
            text: EW,
            label: NW,
            distance: PW,
            hint: LW
          } = this.waypoint, cW = !(null !== WW && void 0 !== WW && WW.waypoint) || null !== WW.waypoint.popupToken && WW.waypoint.popupToken !== this.waypointOriginToken;
          ei(iW, cW);
          let wW = 1;
          const tW = this.waypointLaunch;
          if (!cW && tW && WW.waypoint.nameKey === tW.nameKey) {
            const WW = performance.now();
            tW.startedAt ??= WW, wW = Math.min(1, Math.max(0, (WW - tW.startedAt - 450) / 1e3)), OW.style.opacity = String(Math.min(1, (WW - tW.startedAt) / 150)), 1 === wW && (this.waypointLaunch = null)
          } else OW.style.opacity = "", tW && null !== tW.startedAt && (this.waypointLaunch = null);
          if (iW.classList.toggle("Launching", wW < 1), null !== WW && void 0 !== WW && WW.waypoint) {
            const iW = this.waypointInset,
              cW = "quest_talk" === WW.waypoint.markerIcon ? function(WW, iW, OW) {
                if (!WW.text || null === WW.blockHeight || 0 === WW.nearness) return WW;
                const mW = WW.blockHeight / 100 * OW.height,
                  EW = -WW.nearness * (vi * mW + iW.width / 2),
                  NW = WW.nearness * (gi * mW + iW.height / 2);
                return {
                  ...WW,
                  text: {
                    x: WW.text.x + EW / OW.width * 100,
                    y: WW.text.y + NW / OW.height * 100
                  }
                }
              }(WW.waypoint, this.waypointMarkerSize, this.viewport) : WW.waypoint,
              ZW = (0, Yi.b)(cW, iW, this.viewport),
              xW = wW * wW * (3 - 2 * wW),
              lW = wW < 1 ? tW.x + (ZW.x - tW.x) * xW : ZW.x,
              AW = wW < 1 ? tW.y + (ZW.y - tW.y) * xW : ZW.y;
            OW.style.translate = `${lW}vw ${AW}vh`, mW.style.clipPath = `inset(${iW.top}px ${iW.x}px ${iW.bottom}px)`, ei(EW, wW < 1 || !WW.waypoint.text), EW.style.opacity = String(1 - WW.waypoint.nearness), WW.waypoint.text && (EW.style.translate = `${WW.waypoint.text.x}vw ${WW.waypoint.text.y}vh`), NW.textContent !== WW.waypoint.name && (NW.textContent = WW.waypoint.name), this.markerIcon !== WW.waypoint.markerIcon && (this.markerIcon = WW.waypoint.markerIcon, OW.replaceChildren((0, yi.c)(this.markerIcon))), PW.textContent !== WW.waypoint.distance && (PW.textContent = WW.waypoint.distance), ei(LW, null === WW.waypoint.hint), null !== WW.waypoint.hint && LW.textContent !== WW.waypoint.hint && (LW.textContent = WW.waypoint.hint)
          }
        }
      }
      dispose() {
        var WW, iW;
        this.mountWaypointOrigin(null), this.render(null), null === (WW = this.stopLayout) || void 0 === WW || WW.call(this), this.stopLayout = null, null === (iW = this.stopWaypoint) || void 0 === iW || iW.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.JA = !0
      }
    }

    function ei(WW, iW) {
      WW.hidden !== iW && (WW.hidden = iW)
    }
    const vi = .55,
      gi = .6;
    var Di = OW(39726);
    const Vi = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class fi {
      constructor(WW, iW, OW, mW) {
        this.map = WW, this.quests = iW, this.compass = OW, this.display = new di, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.JA = !1, this.snapshot = null, this.texts = new Map, this.translate = mW
      }
      setTranslator(WW, iW) {
        this.translate = WW, this.locale = iW, this.metresFormat = new Intl.NumberFormat(iW), this.texts.clear()
      }
      translateCached(WW, iW) {
        const OW = void 0 === iW ? WW : `${WW} ${iW}`;
        let mW = this.texts.get(OW);
        return void 0 === mW && (this.texts.size >= 500 && this.texts.clear(), mW = this.translate(WW, void 0 === iW ? void 0 : {
          distance: iW
        }), this.texts.set(OW, mW)), mW
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(WW, iW, OW) {
        if (this.JA) return;
        if (!WW) return this.snapshot = null, void this.display.render(null);
        const mW = this.map.getSnapshot().map,
          NW = OW.cameraHeading,
          PW = {
            ...this.display.compassSize,
            tanHalfFovX: OW.tanHalfFovX,
            pitch: OW.cameraPitch
          },
          LW = [];
        if (mW)
          for (const EW of this.compass.frame(WW, NW, iW)) {
            const WW = lW(EW.offset, PW);
            null !== WW && LW.push({
              ...EW,
              left: WW
            })
          }
        const cW = function(WW, iW) {
            const OW = [],
              mW = WW => "quest" === WW.kind ? WW.distance - 1 : WW.distance,
              EW = [...WW].sort(((WW, iW) => mW(WW) - mW(iW) || WW.id.localeCompare(iW.id)));
            for (const NW of EW) {
              let WW = !1;
              if ("quest" !== NW.kind)
                for (const mW of OW)
                  if (Math.abs(mW.left - NW.left) < iW) {
                    WW = !0;
                    break
                  } WW || OW.push(NW)
            }
            return OW
          }(LW, this.display.compassSpacing),
          wW = function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              OW = null;
            for (const mW of WW) Math.abs(mW.offset) <= iW && (!OW || mW.distance < OW.distance || mW.distance === OW.distance && Math.abs(mW.offset) < Math.abs(OW.offset)) && (OW = mW);
            return OW
          }(cW),
          tW = WW => {
            var iW;
            return null !== (iW = WW.displayName) && void 0 !== iW ? iW : this.translateCached(WW.nameKey)
          },
          xW = {
            compass: {
              markers: cW.map((WW => ({
                id: WW.id,
                icon: WW.icon,
                colour: WW.colour,
                name: tW(WW),
                left: WW.left
              }))),
              cardinals: Di.e.map((WW => {
                let {
                  name: iW,
                  bearing: OW
                } = WW;
                const mW = lW(ZW.e.computeShortestRotation(NW, OW), PW);
                return {
                  name: iW,
                  left: null !== mW && void 0 !== mW ? mW : 0,
                  hidden: null === mW
                }
              })),
              label: wW ? `${tW(wW)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",MW(wW.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== mW && void 0 !== mW && mW.background) {
          const iW = WW[0] - mW.mapOrigin[0],
            OW = WW[2] - mW.mapOrigin[2],
            {
              rotation: PW,
              transform: LW
            } = (0, EW.f)(iW, OW, NW, mW.background.bounds);
          xW.minimap = {
            transform: LW,
            iconRotation: -PW + "rad"
          };
          const [cW, wW] = (0, EW.e)(iW, OW, mW.background.bounds);
          xW.player = {
            left: cW,
            top: wW,
            hidden: cW < 0 || wW < 0 || cW > 100 || wW > 100,
            rotation: -PW + "rad"
          }
        }
        const {
          waypoint: AW
        } = this.quests.getSnapshot();
        if ("search" === (null === AW || void 0 === AW ? void 0 : AW.questMarkerIcon) && null !== mW && void 0 !== mW && mW.background) {
          const {
            bounds: WW
          } = mW.background, [iW, OW] = (0, EW.e)(AW.position[0] - mW.mapOrigin[0], AW.position[2] - mW.mapOrigin[2], WW);
          xW.searchArea = {
            left: iW,
            top: OW,
            width: 6400 / (WW.mapMaxX - WW.mapMinX),
            height: 6400 / (WW.mapMaxZ - WW.mapMinZ),
            shapeSeed: AW.nameKey
          }
        }
        const bW = this.quests.getNotificationSnapshot(),
          jW = "completion" === (null === bW || void 0 === bW ? void 0 : bW.phase) && !Si(bW.kind);
        if (AW && !jW) {
          const iW = Math.hypot(...AW.position.map(((iW, OW) => iW - WW[OW]))),
            mW = Math.round(iW),
            EW = "talk" === AW.questMarkerIcon ? Math.min(1, Math.max(0, (10 - iW) / 5)) : 0,
            NW = OW.projectWorldPosToViewport(AW.position),
            PW = NW && OW.projectWorldPosToViewport([AW.position[0], AW.position[1] - 1, AW.position[2]]);
          xW.waypoint = {
            ...OW.projectWorldPosToScreenPos(AW.position),
            text: NW,
            nearness: EW * EW * (3 - 2 * EW),
            blockHeight: NW && PW ? PW.y - NW.y : null,
            name: this.translateCached(AW.nameKey),
            nameKey: AW.nameKey,
            markerIcon: AW.questMarkerIcon ? Vi[AW.questMarkerIcon] : "quest",
            popupToken: (null === bW || void 0 === bW ? void 0 : bW.waypointNameKey) === AW.nameKey ? bW.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(mW)),
            hint: "search" === AW.questMarkerIcon && Math.hypot(AW.position[0] - WW[0], AW.position[2] - WW[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = xW, this.display.render(xW)
      }
      dispose() {
        this.JA = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Ci = "skyblockSkillsView";
    class Xi extends cW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          OW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW => WW,
          mW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          EW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => WW;
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = iW, this.translate = OW, this.locale = mW, this.itemName = EW, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(WW, iW, OW) {
        this.translate = WW, this.locale = iW, this.itemName = OW, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(WW) {
        let iW = this.skillText.get(WW);
        return iW || (iW = {
          label: this.translate(`skyblockGame:${WW}`),
          description: this.translate(`skyblockGame:${WW}Description`)
        }, this.skillText.set(WW, iW)), iW
      }
      sources(WW) {
        if ("mining" === WW || "fishing" === WW) return this.buildSources(WW);
        let iW = this.sourceText.get(WW);
        return iW || (iW = this.buildSources(WW), this.sourceText.set(WW, iW)), iW
      }
      buildSources(WW) {
        const iW = this.translate;
        return "exploration" === WW ? [iW("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), iW("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === WW ? [iW("skyblockGame:logSource", {
          xp: this.number(Zi["Maple Log"])
        })] : "combat" === WW ? [iW("skyblockGame:creatureKillSource"), iW("skyblockGame:noEnvironmentalXp")] : "farming" === WW ? [iW("skyblockGame:cropSource", {
          xp: this.number(Ai["Wheat|FreshlyGrown"])
        }), iW("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), iW("skyblockGame:noYoungCropXp")] : Object.entries("mining" === WW ? li : bi).map((WW => {
          let [OW, mW] = WW;
          return iW("skyblockGame:itemXpSource", {
            item: this.itemName(OW),
            xp: this.number(mW)
          })
        }))
      }
      number(WW) {
        return WW.toLocaleString(this.locale)
      }
      benefit(WW, iW) {
        const OW = Ei(WW, iW);
        return this.translate(OW.translationKey, {
          bonus: this.number(OW.percent)
        })
      }
      yZ(WW) {
        if (!this.JA) {
          if ("snapshot" === WW.kind) this.progress = WW.progress, this.pending.clear(), this.recent = null;
          else if ("award" === WW.kind && this.progress) {
            const {
              award: iW
            } = WW;
            this.progress = {
              ...this.progress,
              [iW.skill]: iW.after
            };
            for (const [WW, mW] of this.pending) mW.skill === iW.skill && this.pending.delete(WW);
            const OW = iW.after.level > iW.before.level;
            this.recordGain(iW.skill, iW.amount, OW ? ++this.nextLevelUpToken : null), OW && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: iW.skill,
              beforeLevel: iW.before.level,
              level: iW.after.level
            })
          } else {
            if ("rejectBlock" === WW.kind) return void this.rejectBlock(WW.position);
            if ("open" === WW.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(WW, iW, OW) {
        if (!this.progress || this.JA || OW) return;
        const mW = function(WW, iW) {
          const OW = WW.split("|")[0];
          return "Air" === iW || iW === `Barkless ${WW}` ? Object.hasOwn(Zi, OW) ? {
            skill: "foraging",
            amount: Zi[OW]
          } : "Air" !== iW ? null : Object.hasOwn(li, WW) ? {
            skill: "mining",
            amount: li[WW]
          } : ci(WW) ? {
            skill: "farming",
            amount: 10
          } : ti(WW) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Ai, WW) ? {
            skill: "farming",
            amount: Ai[WW]
          } : Object.hasOwn(gW, WW) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(iW, "Air");
        if (!mW) return;
        const EW = WW.join(",");
        if (this.pending.has(EW)) return;
        const NW = this.predictedProgress(mW.skill).totalXp + mW.amount;
        Number.isSafeInteger(NW) && (this.pending.set(EW, {
          ...mW,
          expires: this.now() + 2e3
        }), this.recordGain(mW.skill, 0), this.emit())
      }
      rejectBlock(WW) {
        this.pending.delete(WW.join(",")) && this.emit()
      }
      hZ() {
        if (this.JA) return;
        let WW = !1;
        for (const [iW, OW] of this.pending) OW.expires <= this.now() && (this.pending.delete(iW), WW = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, WW = !0), WW && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(WW, iW) {
        var OW, mW;
        let EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const NW = (null === (OW = this.recent) || void 0 === OW ? void 0 : OW.skill) === WW && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          PW = (null === (mW = this.recent) || void 0 === mW ? void 0 : mW.skill) === WW && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: WW,
          confirmed: NW + iW,
          expires: this.now() + 3e3,
          levelUpToken: null !== EW && void 0 !== EW ? EW : PW
        }
      }
      pendingXp(WW) {
        let iW = 0;
        for (const OW of this.pending.values()) OW.skill === WW && (iW += OW.amount);
        return iW
      }
      predictedProgress(WW) {
        const iW = this.progress[WW],
          OW = this.pendingXp(WW);
        return OW ? Pi(iW.totalXp + OW, WW) : iW
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var WW, iW, OW;
        const mW = this.progress ? IW.map((WW => {
            const iW = this.predictedProgress(WW);
            return {
              ...this.text(WW),
              icon: ji[WW],
              benefit: this.benefit(WW, iW.level),
              sources: this.sources(WW),
              id: WW,
              selected: WW === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(iW.level)
              }),
              xp: null === iW.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(iW.xpIntoLevel),
                target: this.number(iW.xpForNextLevel)
              }),
              percent: null === iW.xpForNextLevel ? 100 : Math.min(100, iW.xpIntoLevel / iW.xpForNextLevel * 100)
            }
          })) : [],
          EW = mW.find((WW => {
            var iW;
            return WW.id === (null === (iW = this.recent) || void 0 === iW ? void 0 : iW.skill)
          })),
          NW = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: mW,
          detail: null !== (WW = mW.find((WW => WW.selected))) && void 0 !== WW ? WW : null,
          overallLevel: this.progress ? IW.reduce(((WW, iW) => WW + this.predictedProgress(iW).level), 0) : null,
          hud: EW && NW > 0 ? {
            skill: EW,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(NW)
            }),
            levelUpToken: null !== (iW = null === (OW = this.recent) || void 0 === OW ? void 0 : OW.levelUpToken) && void 0 !== iW ? iW : null,
            colour: ki(EW.id)
          } : null
        }
      }
    }
    const Bi = Math.max(1600, 600, 950) + 400,
      qi = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Ri = "skyblockQuestsView",
      Gi = "skyblockQuestNotificationView";
    class Ii extends cW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          PW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(WW, mW, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = iW, this.translate = OW, this.now = EW, this.locale = NW, this.publishNotification = PW, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var WW, iW;
          this.selected = null !== (WW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.trackedQuestId) && void 0 !== WW ? WW : null, this.show()
        }, this.select = WW => {
          this.selected = WW, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const WW = this.snapshot.detail;
          !this.JA && null !== WW && void 0 !== WW && WW.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(WW.id), this.emit())
        }, this.viewDialogue = () => {
          const WW = this.snapshot.detail;
          var iW;
          WW && (null === (iW = this.onViewDialogue) || void 0 === iW || iW.call(this, WW.id))
        }, this.notifications = new Mi(EW, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var WW, iW;
        return null !== (WW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.trackedQuestId) && void 0 !== WW ? WW : null
      }
      notify(WW) {
        !this.JA && this.notifications.enqueue(WW) && this.emitNotification()
      }
      setNotificationsHeld(WW) {
        (this.notifications.setHeld(WW) || WW) && this.emitNotification()
      }
      hZ() {
        var WW, iW;
        if (this.JA) return;
        this.notifications.hZ() && this.emitNotification();
        let OW = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, OW = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, OW = !0);
        const mW = ai(this.authoritative);
        null !== mW && void 0 !== mW && null !== (WW = mW.questClock) && void 0 !== WW && WW.running && this.clockText(mW) !== (null === (iW = this.snapshot.tracked) || void 0 === iW ? void 0 : iW.clock) && (OW = !0), OW && this.emit()
      }
      setTranslator(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = WW, this.locale = iW, this.emitNotification(), this.emit()
      }
      yZ(WW) {
        if (!this.JA)
          if ("completion" === WW.kind) this.notify(WW.questCompletion);
          else if ("landmark" === WW.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: WW.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === WW.kind) {
          var iW, OW, mW;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: WW.npcNoteTitleKey,
            textKey: WW.npcNoteTextKey,
            params: null !== (iW = WW.npcNoteParams) && void 0 !== iW ? iW : {},
            nameKeys: null !== (OW = WW.npcNoteNameKeys) && void 0 !== OW ? OW : {},
            iconItem: null !== (mW = WW.npcNoteIconItem) && void 0 !== mW ? mW : null
          })
        } else if ("open" === WW.kind) this.show();
        else if ("guidance" === WW.kind) this.waypoint = WW.waypoint, this.compassTarget = WW.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === WW.kind) {
          this.authoritative = WW.snapshot, this.notifications.hZ() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const iW = this.trackedStepPulse;
          this.updateTrackedStepPulse(WW.snapshot), this.emit(), this.trackedStepPulse > iW && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.JA || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var WW;
        return null !== (WW = this.translateWithIcons) && void 0 !== WW ? WW : this.translate
      }
      clockText(WW) {
        const iW = WW.questClock;
        if (!iW) return null;
        const OW = iW.elapsedMs + (iW.running ? this.now() - this.receivedAt : 0);
        return void 0 === iW.countdownFromMs ? uW(OW, !1) : uW(1e3 * Math.ceil(Math.max(0, iW.countdownFromMs - OW) / 1e3), !1)
      }
      updateTrackedStepPulse(WW) {
        var iW, OW, mW;
        const EW = ai(WW);
        if (!EW) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const NW = WW => EW.subquests.filter((iW => WW(iW.status))).map((WW => WW.id)),
          PW = NW((WW => "completed" === WW || "skipped" === WW)),
          LW = NW((WW => "locked" !== WW)),
          cW = (null === (iW = this.trackedSteps) || void 0 === iW ? void 0 : iW.questId) === EW.id && EW.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (cW) {
          const WW = PW.filter((WW => !cW.finished.has(WW))),
            iW = NW((WW => "active" === WW || "ready" === WW)).filter((WW => !cW.unlocked.has(WW)));
          WW.length > 0 && this.trackedStepPulse++, (WW.length > 0 || iW.length > 0) && (this.trackedChange = {
            finished: new Set(WW),
            unlocked: new Set(iW),
            expiresAt: this.now() + Bi
          })
        } else {
          var wW;
          this.trackedStepPulse = (null === (wW = this.trackedSteps) || void 0 === wW ? void 0 : wW.questId) === EW.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: EW.id,
          progress: EW.progress,
          finished: new Set([...null !== (OW = null === cW || void 0 === cW ? void 0 : cW.finished) && void 0 !== OW ? OW : [], ...PW]),
          unlocked: new Set([...null !== (mW = null === cW || void 0 === cW ? void 0 : cW.unlocked) && void 0 !== mW ? mW : [], ...LW])
        }
      }
      entry(WW, iW) {
        var OW, mW;
        const EW = WW.id === (null === (OW = this.authoritative) || void 0 === OW ? void 0 : OW.trackedQuestId),
          NW = this.now() < this.trackAvailableAt,
          PW = this.questTextTranslator(),
          LW = WW.subquests.map((iW => {
            var OW, mW, NW, LW, cW, wW;
            const tW = null !== (OW = iW.handInNpcName) && void 0 !== OW ? OW : WW.giverName,
              ZW = this.translate("skyblockGame:progress", {
                current: iW.progress.toLocaleString(this.locale),
                target: iW.target.toLocaleString(this.locale)
              }),
              xW = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: tW ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [iW.status],
              lW = "active" === iW.status || "ready" === iW.status;
            return {
              id: iW.id,
              name: si(PW, iW.nameKey, iW.nameParams),
              description: si(PW, iW.descriptionKey, iW.descriptionParams),
              progress: ZW,
              status: iW.status,
              statusLabel: xW ? this.translate(xW, {
                npc: tW
              }) : ZW,
              iconItem: lW && null !== (mW = iW.questIconItem) && void 0 !== mW ? mW : null,
              barPercent: "active" === iW.status && iW.showsProgressBar ? Math.min(100, 100 * iW.progress / iW.target) : null,
              justFinished: EW && null !== (NW = null === (LW = this.trackedChange) || void 0 === LW ? void 0 : LW.finished.has(iW.id)) && void 0 !== NW && NW,
              justUnlocked: EW && null !== (cW = null === (wW = this.trackedChange) || void 0 === wW ? void 0 : wW.unlocked.has(iW.id)) && void 0 !== cW && cW
            }
          }));
        return {
          id: WW.id,
          name: si(PW, WW.nameKey, WW.nameParams),
          description: si(PW, WW.descriptionKey, WW.descriptionParams),
          progress: iW ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: WW.progress.toLocaleString(this.locale),
            target: WW.target.toLocaleString(this.locale)
          }),
          completed: iW,
          tracked: EW,
          selected: WW.id === this.selected,
          canTrack: !iW && !EW && !NW,
          trackLabel: this.translate(EW ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : NW ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== WW.id,
          subquests: LW,
          focusStep: null !== (mW = LW.find((WW => null !== WW.barPercent))) && void 0 !== mW ? mW : null,
          clock: this.clockText(WW)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var WW, iW, OW, mW, EW, NW, PW, LW, cW, wW;
        const tW = [...null !== (WW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.active) && void 0 !== WW ? WW : [], ...null !== (OW = null === (mW = this.authoritative) || void 0 === mW ? void 0 : mW.completed) && void 0 !== OW ? OW : []];
        var ZW, xW, lW, AW;
        tW.some((WW => WW.id === this.selected)) || (this.selected = null !== (ZW = null !== (xW = null === (lW = this.authoritative) || void 0 === lW ? void 0 : lW.trackedQuestId) && void 0 !== xW ? xW : null === (AW = tW[0]) || void 0 === AW ? void 0 : AW.id) && void 0 !== ZW ? ZW : null);
        const bW = null !== (EW = null === (NW = this.authoritative) || void 0 === NW ? void 0 : NW.active.map((WW => this.entry(WW, !1)))) && void 0 !== EW ? EW : [];
        bW.sort(((WW, iW) => Number(iW.tracked) - Number(WW.tracked)));
        const jW = null !== (PW = null === (LW = this.authoritative) || void 0 === LW ? void 0 : LW.completed.map((WW => this.entry(WW, !0)))) && void 0 !== PW ? PW : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: bW,
          completed: jW,
          completedExpanded: this.completedExpanded,
          detail: null !== (cW = [...bW, ...jW].find((WW => WW.selected))) && void 0 !== cW ? cW : null,
          tracked: null !== (wW = bW.find((WW => WW.tracked))) && void 0 !== wW ? wW : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function ai(WW) {
      var iW;
      return null !== (iW = null === WW || void 0 === WW ? void 0 : WW.active.find((iW => iW.id === WW.trackedQuestId))) && void 0 !== iW ? iW : null
    }
    const ri = "skyblockDungeonsView";
    class zi extends cW {
      constructor(WW, iW) {
        let OW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          mW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = iW, this.locale = OW, this.requestEnter = mW, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            iW = null === WW || void 0 === WW ? void 0 : WW.difficulties[this.pageIndex];
          void 0 !== iW && null !== iW.unlockedBoss && (this.close(), this.requestEnter(WW.id, iW.difficulty))
        }
      }
      setTranslator(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = WW, this.locale = iW, this.emit()
      }
      yZ(WW) {
        var iW, OW;
        if (!this.JA) return "open" === WW.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== WW.kind ? "snapshot" === WW.kind && (this.authoritative = WW.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (iW = null === (OW = this.pickerEntry()) || void 0 === OW ? void 0 : OW.difficulties.length) && void 0 !== iW ? iW : 1) - 1)), null === WW.snapshot && this.open ? this.close() : this.emit()) : this.choose(WW.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(WW) {
        var iW;
        const OW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.dungeons.find((iW => iW.id === WW));
        void 0 !== OW ? this.open && this.pickerDungeonId === WW || (this.pickerDungeonId = WW, this.pageIndex = Math.max(0, OW.difficulties.findLastIndex((WW => null !== WW.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${WW}`)
      }
      turnTo(WW) {
        var iW, OW;
        const mW = null !== (iW = null === (OW = this.pickerEntry()) || void 0 === OW ? void 0 : OW.difficulties.length) && void 0 !== iW ? iW : 0;
        WW < 0 || WW >= mW || WW === this.pageIndex || (this.pageIndex = WW, this.emit())
      }
      pickerEntry() {
        var WW, iW;
        return null !== (WW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.dungeons.find((WW => WW.id === this.pickerDungeonId))) && void 0 !== WW ? WW : null
      }
      difficulty(WW) {
        const iW = WW.completions > 0,
          OW = null === WW.bestMs ? null : uW(WW.bestMs);
        return {
          difficulty: WW.difficulty,
          label: this.translate(HW[WW.difficulty]),
          colour: nW[WW.difficulty],
          beaten: iW,
          bestTime: OW,
          completions: WW.completions,
          summary: iW ? [null === OW ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: OW
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: WW.completions.toLocaleString(this.locale)
          })].filter((WW => null !== WW)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(WW) {
        const iW = WW.difficulties.map((WW => this.difficulty(WW))),
          OW = iW.filter((WW => WW.beaten)).length;
        return {
          id: WW.id,
          name: this.translate(WW.nameKey),
          selected: WW.id === this.selected,
          beatenSummary: `${OW} / ${iW.length}`,
          difficulties: iW
        }
      }
      picker() {
        const WW = this.pickerEntry();
        if (null === WW || 0 === WW.difficulties.length) return null;
        const iW = WW.difficulties.map(((iW, OW) => {
          var mW, EW, NW, PW;
          const LW = iW.unlockedBoss,
            cW = null === LW ? this.lockedHint(WW, OW) : null;
          return {
            ...this.difficulty(iW),
            unlocked: null !== LW,
            bossName: null === LW ? null : this.translate(LW.bossNameKey),
            bossMobType: null !== (mW = null === LW || void 0 === LW ? void 0 : LW.bossMobType) && void 0 !== mW ? mW : null,
            bossMobVariation: null !== (EW = null === LW || void 0 === LW ? void 0 : LW.bossMobVariation) && void 0 !== EW ? EW : null,
            lockedHint: null !== (NW = null === cW || void 0 === cW ? void 0 : cW.text) && void 0 !== NW ? NW : null,
            lockedHintHighlight: null !== (PW = null === cW || void 0 === cW ? void 0 : cW.highlight) && void 0 !== PW ? PW : null,
            current: OW === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(WW.nameKey),
          pages: iW,
          page: iW[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < iW.length - 1
        }
      }
      lockedHint(WW, iW) {
        var OW, mW, EW;
        if (0 === iW && "number" === typeof WW.combatLevelLock) {
          const iW = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: WW.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: iW,
            colour: ki("combat"),
            icon: ji.combat
          })
        }
        const NW = null !== (OW = null === (mW = this.authoritative) || void 0 === mW ? void 0 : mW.dungeons) && void 0 !== OW ? OW : [],
          PW = iW > 0 ? WW : null !== (EW = NW[NW.indexOf(WW) - 1]) && void 0 !== EW ? EW : null,
          LW = iW > 0 ? WW.difficulties[iW - 1] : null === PW || void 0 === PW ? void 0 : PW.difficulties[0];
        if (null === PW || void 0 === LW) return null;
        const cW = this.translate(PW.nameKey);
        if (null === LW.unlockedBoss) return PW === WW ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, LW.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: cW
        }, LW.difficulty);
        const wW = this.translate(LW.unlockedBoss.bossNameKey);
        return PW === WW ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: wW
        }, LW.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: wW,
            dungeon: cW
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(WW, iW, OW) {
        return this.hintHighlighting(WW, iW, "difficulty", {
          name: this.translate(HW[OW]),
          colour: nW[OW],
          icon: null
        })
      }
      hintHighlighting(WW, iW, OW, mW) {
        let {
          name: EW,
          colour: NW,
          icon: PW
        } = mW;
        const LW = this.translate(WW, {
          ...iW,
          [OW]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(WW, {
            ...iW,
            [OW]: EW
          }),
          highlight: 2 === LW.length ? {
            before: LW[0],
            name: EW,
            after: LW[1],
            colour: NW,
            icon: PW
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var WW, iW, OW;
        const mW = null !== (WW = null === (iW = this.authoritative) || void 0 === iW ? void 0 : iW.dungeons) && void 0 !== WW ? WW : [];
        var EW, NW;
        mW.some((WW => WW.id === this.selected)) || (this.selected = null !== (EW = null === (NW = mW[0]) || void 0 === NW ? void 0 : NW.id) && void 0 !== EW ? EW : null);
        const PW = mW.map((WW => this.entry(WW)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: PW,
          detail: null !== (OW = PW.find((WW => WW.selected))) && void 0 !== OW ? OW : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Fi = ["mining", "farming", "foraging", "fishing", "combat"],
      Qi = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      WO = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function iO() {
      for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
      return iW.map(((WW, iW) => ({
        amount: WW,
        coins: Qi[iW],
        xp: WO[iW]
      })))
    }
    const OO = iO(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      mO = iO(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      EO = iO(50, 100, 250, 500, 1e3, 2500, 5e3),
      NO = iO(25, 50, 100, 250, 500, 1e3),
      PO = iO(10, 25, 50, 100, 250, 500, 1e3),
      LO = iO(1, 5, 10, 25, 50);

    function cO(WW, iW) {
      return {
        id: WW,
        category: "fishing",
        item: iW,
        drops: [iW],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PO
      }
    }
    const wO = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: mO
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: EO
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: EO
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: NO
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: NO
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: mO
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: OO
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: OO
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: OO
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: EO
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: mO
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: mO
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: mO
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: EO
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: EO
      }, cO("wheatfish", "Wheatfish"), cO("darter", "Darter"), cO("sunset_minnow", "Sunset Minnow"), cO("root_flounder", "Root Flounder"), cO("greenfin_loach", "Greenfin Loach"), cO("red_strongfish", "Red Strongfish"), cO("green_strongfish", "Green Strongfish"), cO("boomerang_fish", "Boomerang Fish"), cO("seahorse", "Seahorse"), cO("spined_stickleback", "Spined Stickleback"), cO("moon_strongfish", "Moon Strongfish"), cO("boulder_bass", "Boulder Bass"), cO("grass_snapper", "Grass Snapper"), cO("crystal_wheatfish", "Crystalized Wheatfish", LO), cO("moonstone_pupfish", "Moonstone Pupfish", LO), cO("reedglass_minnow", "Reedglass Minnow"), cO("mangrove_herring", "Mangrove Herring"), cO("mudline_perch", "Mudline Perch"), cO("coastal_mullet", "Coastal Mullet"), cO("reef_sardine", "Reef Sardine"), cO("root_perch", "Root Perch"), cO("driftwood_catfish", "Driftwood Catfish"), cO("aether_minnow", "Aether Minnow"), cO("needlefish", "Tri-Pointed Needlefish"), cO("threadfin_bream", "Threadfin Bream"), cO("mudbelly_tilapia", "Mudbelly Tilapia"), cO("rotslab_eel", "Rotslab Eel"), cO("polarflash_electron", "Polarflash Electron"), cO("mireback_carp", "Mireback Carp"), cO("blackwater_bream", "Blackwater Bream"), cO("stone_grouper", "Stone Grouper"), cO("shadeback_ray", "Shadeback Ray"), cO("glacial_silverfish", "Glacial Silverfish"), cO("hatchetfish", "Hatchetfish"), cO("moonlit_boomerang", "Moonlit Boomerang Fish"), cO("murkborne_ray", "Murkborne Ray"), cO("bamboo_catfish", "Bamboo Catfish"), cO("mossback_arapaima", "Mossback Arapaima"), cO("murk_stingray", "Murk Stingray"), cO("channel_sawfish", "Channel Sawfish"), cO("boned_sturgeon", "Boned Sturgeon"), cO("oarfish", "Oarfish"), cO("snakehead", "Snakehead", LO), cO("eldertide_leviathan", "Eldertide Leviathan", LO), cO("pithead", "Pithead"), cO("electric_eel", "Electric Eel"), cO("shadow_darter", "Shadow Darter"), cO("abyss_carp", "Abyss Carp"), cO("nomai_moray", "Nomai Moray"), cO("silver_dragonfish", "Silver Dragonfish"), cO("giant_moray", "Giant Moray"), cO("coelacanth", "Coelacanth", LO), cO("frost_herring", "Frost Herring"), cO("permafrost_halibut", "Permafrost Halibut"), cO("glacial_lanternfish", "Glacial Lanternfish"), cO("frozen_grenadier", "Frozen Grenadier"), cO("blackfin_icefish", "Blackfin Icefish"), cO("moonfish", "Moonfish"), cO("alpha_strongfish", "Alpha Moon Strongfish"), cO("deep_lanternfish", "Deepwater Lanternfish", LO), cO("pearlescent_moonfish", "Pearlescent Moonfish", LO), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: mO
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: NO
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: NO
      }],
      tO = (new Map(wO.map((WW => [WW.id, WW]))), new Map),
      ZO = new Map;
    for (const uL of wO) {
      for (const [WW, iW] of Object.entries(null !== (xO = uL.blocks) && void 0 !== xO ? xO : {})) {
        var xO;
        tO.set(WW, {
          collection: uL,
          amount: iW
        })
      }
      for (const WW of null !== (lO = uL.drops) && void 0 !== lO ? lO : []) {
        var lO;
        ZO.set(WW, uL)
      }
    }

    function AO(WW, iW) {
      let OW = 0;
      for (; OW < WW.tiers.length && iW >= WW.tiers[OW].amount;) OW++;
      return OW
    }
    const bO = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function jO(WW) {
      return bO[WW - 1]
    }
    const UO = "skyblockCollectionsView";
    class kO extends cW {
      constructor(WW, iW) {
        let OW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          mW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW => WW;
        super(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = iW, this.locale = OW, this.itemName = mW, this.counts = null, this.category = "mining", this.selected = wO[0].id, this.snapshot = {
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
      setTranslator(WW, iW, OW) {
        this.translate = WW, this.locale = iW, this.itemName = OW, this.emit()
      }
      yZ(WW) {
        if (!this.JA)
          if ("collOpen" !== WW.kind) {
            (WW.collFull || null === this.counts) && (this.counts = new Map);
            for (const [iW, OW] of WW.collCounts) this.counts.set(iW, OW);
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
        const iW = this.inCategory(this.category).map((WW => this.collectionView(WW))),
          OW = wO.reduce(((WW, iW) => WW + this.tierOf(iW)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Fi.map((WW => this.categoryView(WW))),
          collections: iW,
          detail: null !== (WW = iW.find((WW => WW.selected))) && void 0 !== WW ? WW : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(OW)
          })
        }
      }
      categoryView(WW) {
        const iW = this.inCategory(WW),
          OW = iW.reduce(((WW, iW) => WW + this.tierOf(iW)), 0),
          mW = iW.reduce(((WW, iW) => WW + iW.tiers.length), 0);
        return {
          id: WW,
          label: this.translate(`skyblockGame:${WW}`),
          icon: ji[WW],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(OW),
            target: this.number(mW)
          }),
          selected: WW === this.category
        }
      }
      collectionView(WW) {
        var iW, OW;
        const mW = null !== (iW = this.counts.get(WW.id)) && void 0 !== iW ? iW : 0,
          EW = AO(WW, mW),
          NW = null !== (OW = WW.tiers[EW]) && void 0 !== OW ? OW : null,
          PW = 0 === EW ? 0 : WW.tiers[EW - 1].amount;
        return {
          id: WW.id,
          name: this.itemName(WW.item),
          icon: WW.item,
          selected: WW.id === this.selected,
          locked: 0 === mW,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(mW)
          }),
          tier: 0 === EW ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(EW),
          percent: null === NW ? 100 : Math.min(100, (mW - PW) / (NW.amount - PW) * 100),
          progress: null === NW ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(mW),
            target: this.number(NW.amount)
          }),
          nextReward: null === NW ? null : this.reward(WW, NW.coins, NW.xp)
        }
      }
      reward(WW, iW, OW) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(iW),
          xp: this.number(OW),
          skill: this.translate(`skyblockGame:${WW.category}`)
        })
      }
      tierLabel(WW) {
        return this.translate("skyblockGame:collectionTier", {
          tier: jO(WW)
        })
      }
      tierOf(WW) {
        var iW;
        return AO(WW, null !== (iW = this.counts.get(WW.id)) && void 0 !== iW ? iW : 0)
      }
      inCategory(WW) {
        return wO.filter((iW => iW.category === WW))
      }
      number(WW) {
        return WW.toLocaleString(this.locale)
      }
    }
    const sO = "skyblockPortalTransitView",
      MO = "skyblockPortalArrival";
    class KO {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.iZ = WW, this.storage = iW, this.now = OW, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      yZ(WW) {
        const iW = {
          zoneNameKey: WW.transitZoneNameKey,
          variation: WW.transitZoneVariation,
          colour: WW.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(MO, iW), this.show("departure", iW.zoneNameKey, iW.colour, WW.transitDurationMs, WW.transitDurationMs + 1500, (() => {
          this.storage.removeItem(MO)
        }))
      }
      resumeArrival(WW) {
        const iW = this.storage.getItem(MO);
        this.storage.removeItem(MO), null === iW || iW.variation !== WW || this.now() - iW.departedAt > 3e4 || this.show("arrival", iW.zoneNameKey, iW.colour, 3200, 2e4)
      }
      finishArrival(WW) {
        var iW;
        "arrival" === (null === (iW = this.view) || void 0 === iW ? void 0 : iW.phase) && this.view.token === WW && (this.clearTimer(), this.view = null, this.iZ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(WW, iW, OW, mW, EW, NW) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: WW,
          zoneNameKey: iW,
          colour: OW,
          durationMs: mW
        }, this.iZ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.iZ(null), null === NW || void 0 === NW || NW()
        }), EW)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const SO = "skyblockDailyRewardView",
      YO = "skyblockDailyRewardCoin";
    class yO {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.iZ = WW, this.isBusy = iW, this.holdQuestPopups = OW, this.onHeldCoinsChanged = mW, this.onCoinLanded = EW, this.onStarted = NW, this.onFinished = PW, this.onItemLanded = LW, this.now = cW, this.BL = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var WW, iW;
        return null !== (WW = null === (iW = this.playing) || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null
      }
      getHeldCoins() {
        var WW, iW;
        let OW = 0;
        for (const mW of this.BL) OW += mW.coins;
        return OW - (null !== (WW = null === (iW = this.playing) || void 0 === iW ? void 0 : iW.released) && void 0 !== WW ? WW : 0)
      }
      yZ(WW) {
        "dailyRewardClaimed" !== WW.kind ? (this.queue.push(WW), this.hZ()) : this.BL.push({
          coins: WW.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      hZ() {
        const WW = this.now();
        if (null === this.playing) return this.releaseUnshown(WW), void this.startNext(WW);
        const iW = this.playing,
          OW = WW - iW.startedAt,
          mW = iW.view.flyingCoins,
          EW = function(WW, iW) {
            let OW = 0;
            for (; OW < iW && JO(OW, iW) <= WW;) OW++;
            return OW
          }(OW, mW);
        if (EW !== iW.landed) {
          for (let WW = EW - iW.landed > 2 ? EW - 1 : iW.landed; WW < EW; WW++) this.onCoinLanded(WW, mW);
          iW.landed = EW, iW.released = Math.round(iW.view.coins * EW / mW), this.onHeldCoinsChanged()
        }
        for (; iW.itemsLanded < iW.view.items.length && 2e3 + 160 * iW.itemsLanded + 630 <= OW;) this.onItemLanded(iW.itemsLanded), iW.itemsLanded++;
        OW >= iW.view.durationMs && (this.finish(), this.startNext(WW))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.BL = [], this.iZ(null)
      }
      startNext(WW) {
        if (0 === this.queue.length || this.isBusy()) return;
        const iW = this.queue.shift();
        this.token++;
        const OW = {
          token: this.token,
          day: iW.dailyRewardDay,
          coins: iW.dailyRewardCoins,
          items: iW.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: iW.dailyRewardDay === TW ? 24 : 14
        };
        this.playing = {
          view: OW,
          startedAt: WW,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.iZ(OW), this.onStarted(OW)
      }
      finish() {
        this.BL.shift(), this.playing = null, this.holdQuestPopups(!1), this.iZ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(WW) {
        if (this.queue.length > 0 || 0 === this.BL.length) return;
        const iW = this.BL.length;
        this.BL = this.BL.filter((iW => WW - iW.receivedAt < 6e4)), this.BL.length !== iW && this.onHeldCoinsChanged()
      }
    }

    function TO(WW, iW) {
      return 450 + 715 * WW / (iW - 1)
    }

    function JO(WW, iW) {
      return TO(WW, iW) + 650
    }
    const hO = "skyblockMailboxView";
    class HO {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.iZ = WW, this.isBusy = iW, this.onStarted = OW, this.now = mW, this.waiting = [], this.playing = null, this.token = 0, this.itemName = WW => WW
      }
      getSnapshot() {
        var WW, iW;
        return null !== (WW = null === (iW = this.playing) || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null
      }
      setItemName(WW) {
        this.itemName = WW
      }
      yZ(WW) {
        this.waiting.push(...WW.mailLetters), this.hZ()
      }
      hZ() {
        const WW = this.now();
        null !== this.playing && WW - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.iZ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(WW)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.iZ(null)
      }
      start(WW) {
        const iW = this.waiting.slice(0, 3);
        this.token++;
        const OW = {
          token: this.token,
          letters: iW.map((WW => this.toView(WW))),
          more: this.waiting.length - iW.length,
          durationMs: 4500 + 700 * iW.length
        };
        this.waiting = [], this.playing = {
          view: OW,
          startedAt: WW
        }, this.iZ(OW), this.onStarted(OW)
      }
      toView(WW) {
        return {
          coins: WW.mailCoins,
          items: WW.mailItems.map((WW => {
            var iW;
            return {
              itemName: WW.mailItemName,
              amount: WW.mailItemAmount,
              label: null !== (iW = WW.mailItemLabel) && void 0 !== iW ? iW : this.itemName(WW.mailItemName)
            }
          })),
          reasonKey: WW.mailReasonKey,
          reasonParams: WW.mailReasonParams
        }
      }
    }
    const nO = "skyblockQuestGraphView",
      uO = "skyblockDevQuestJump";

    function oO(WW) {
      if (0 === WW.length) return "";
      const iW = [`M ${WW[0].x} ${WW[0].y}`];
      for (let mW = 1; mW < WW.length - 1; mW++) {
        const OW = WW[mW + 1];
        iW.push(`Q ${WW[mW].x} ${WW[mW].y} ${(WW[mW].x+OW.x)/2} ${(WW[mW].y+OW.y)/2}`)
      }
      const OW = WW[WW.length - 1];
      return iW.push(`L ${OW.x} ${OW.y}`), iW.join(" ")
    }

    function dO(WW, iW) {
      return WW < iW ? `${WW}|${iW}` : `${iW}|${WW}`
    }
    class eO extends cW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(WW, OW, mW), this.translate = iW, this.requestJump = EW, this.requestArrive = NW, this.storage = PW, this.now = LW, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      yZ(WW) {
        if (!this.JA)
          if ("graph" !== WW.kind) {
            if ("jumping" === WW.kind) {
              const iW = {
                questId: WW.graphQuestId,
                variation: WW.graphVariation,
                completes: WW.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(uO, iW)
            }
          } else {
            const iW = ++this.graphCount;
            OW.e(141).then((() => OW(7416))).then((OW => {
              let {
                default: mW
              } = OW;
              this.JA || iW !== this.graphCount || (this.layout = function(WW, iW, OW) {
                var mW, EW;
                const NW = new WW.graphlib.Graph;
                NW.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), NW.setDefaultEdgeLabel((() => ({})));
                const PW = new Set;
                for (const tW of iW) PW.add(tW.graphQuestId), NW.setNode(tW.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const LW = OW.filter((WW => PW.has(WW.graphFromId) && PW.has(WW.graphToId) && WW.graphFromId !== WW.graphToId)),
                  cW = new Map;
                for (const tW of [...LW].sort(((WW, iW) => Number("awaits" === WW.graphEdgeKind) - Number("awaits" === iW.graphEdgeKind)))) {
                  const WW = dO(tW.graphFromId, tW.graphToId);
                  cW.has(WW) || (cW.set(WW, tW), NW.setEdge(tW.graphFromId, tW.graphToId))
                }
                WW.layout(NW);
                const wW = NW.graph();
                return {
                  width: Math.ceil(null !== (mW = wW.width) && void 0 !== mW ? mW : 0),
                  height: Math.ceil(null !== (EW = wW.height) && void 0 !== EW ? EW : 0),
                  nodes: iW.map((WW => {
                    var iW, OW;
                    const mW = NW.node(WW.graphQuestId);
                    return {
                      node: WW,
                      left: (null !== (iW = mW.x) && void 0 !== iW ? iW : 0) - 95,
                      top: (null !== (OW = mW.y) && void 0 !== OW ? OW : 0) - 26
                    }
                  })),
                  edges: LW.map((WW => {
                    var iW;
                    const OW = cW.get(dO(WW.graphFromId, WW.graphToId)),
                      mW = null !== (iW = NW.edge(OW.graphFromId, OW.graphToId).points) && void 0 !== iW ? iW : [];
                    return {
                      edge: WW,
                      key: `${WW.graphFromId}|${WW.graphToId}|${WW.graphEdgeKind}`,
                      path: oO(OW.graphFromId === WW.graphFromId ? mW : [...mW].reverse())
                    }
                  })),
                  plans: new Map(iW.map((WW => [WW.graphQuestId, new Set([WW.graphQuestId, ...WW.graphPlanIds])])))
                }
              }(mW, WW.graphNodes, WW.graphEdges), this.show())
            })).catch((WW => {
              console.error("The quest graph could not be laid out", WW)
            }))
          }
      }
      resumeJump(WW) {
        const iW = this.storage.getItem(uO);
        this.storage.removeItem(uO), null === iW || iW.variation !== WW || this.now() - iW.departedAt > 6e4 || this.requestArrive(iW.questId, iW.completes)
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
        var WW, iW;
        return null !== (WW = null === this.hoveredId || null === (iW = this.layout) || void 0 === iW ? void 0 : iW.plans.get(this.hoveredId)) && void 0 !== WW ? WW : new Set
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
        const iW = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: WW.width,
          height: WW.height,
          nodes: WW.nodes.map((WW => {
            let {
              node: OW,
              left: mW,
              top: EW
            } = WW;
            return {
              id: OW.graphQuestId,
              name: this.translate(OW.graphNameKey),
              detail: null === OW.graphGiverName ? OW.graphZoneId : `${OW.graphGiverName} \xb7 ${OW.graphZoneId}`,
              state: OW.graphState,
              left: mW,
              top: EW,
              inPlan: iW.has(OW.graphQuestId),
              hovered: OW.graphQuestId === this.hoveredId
            }
          })),
          edges: WW.edges.map((WW => {
            let {
              edge: OW,
              key: mW,
              path: EW
            } = WW;
            return {
              key: mW,
              kind: OW.graphEdgeKind,
              path: EW,
              inPlan: iW.has(OW.graphFromId) && iW.has(OW.graphToId)
            }
          })),
          planning: iW.size > 0
        }
      }
    }
    var vO = OW(38210);
    const gO = 250,
      DO = 2150,
      VO = -2.8,
      pO = 2.2,
      fO = -27,
      CO = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      XO = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      BO = Math.round(50 + 1e3 * (XO.delay + XO.period / 2)),
      qO = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      RO = Array.from({
        length: 26
      }, ((WW, iW) => {
        const OW = 2.39996 * iW,
          mW = .5 + .618034 * iW % 1 * .23,
          EW = iW % 3 !== 2;
        return {
          rune: EW ? qO[7 * iW % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(OW)*mW).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(OW)*mW).toFixed(3)})`,
            "--spin": 40 * (iW % 5 - 2) + "deg",
            "--size": (EW ? 1 + iW % 4 * .2 : .3 + iW % 2 * .15) + "rem",
            "--duration": `${(1.8+7*iW%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*iW%3).toFixed(2)}s`
          }
        }
      }));

    function GO(WW, iW) {
      return Array.from({
        length: 30 + 3 * WW + (iW ? 10 : 0)
      }, ((WW, iW) => {
        const OW = iW < 4,
          mW = OW ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          EW = OW ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          NW = OW ? 2.2 : .6 + Math.random(),
          PW = OW ? .3 : Math.random() < .5 ? .16 : .24,
          LW = OW ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": mW,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${EW.toFixed(2)}rem`,
          "--length": `${NW.toFixed(2)}rem`,
          "--width": `${PW}rem`,
          "--duration": `${Math.round(LW)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function IO(WW) {
      let {
        zeta: iW,
        period: OW
      } = WW;
      const mW = 2 * Math.PI / OW;
      return {
        w: mW,
        decay: iW * mW / Math.sqrt(1 - iW * iW)
      }
    }
    let aO = !1;

    function rO() {
      if (aO) return;
      aO = !0;
      const WW = document.createElement("style");
      WW.textContent = function() {
        const WW = IO(CO),
          iW = IO(XO),
          OW = iW => Math.exp(-WW.decay * iW) * Math.sin(WW.w * iW),
          mW = OW(Math.atan(WW.w / WW.decay) / WW.w),
          EW = .25,
          NW = 2.15,
          PW = Math.round(215),
          LW = [];
        for (let cW = 0; cW <= PW; cW++) {
          const WW = cW / PW * NW;
          let wW = Math.sin(Math.min(WW, EW) / EW * Math.PI / 2) ** 2,
            tW = 0,
            ZW = 1,
            xW = 1 - .2 * wW,
            lW = 1;
          if (WW >= EW) {
            const PW = WW - EW,
              LW = Math.max(0, PW - .05);
            wW = Math.exp(-LW / .05), tW = OW(LW + CO.lead * (1 - Math.exp(-LW / CO.rush))) / mW;
            const cW = LW - XO.delay,
              AW = cW <= 0 ? 0 : 1 - Math.exp(-iW.decay * cW) * (Math.cos(iW.w * cW) + iW.decay / iW.w * Math.sin(iW.w * cW)),
              bW = Math.max(0, (WW - 1.77) / (NW - 1.77));
            ZW = (1 + (XO.to - 1) * AW) * (1 + .08 * bW), xW = 1.1 + 1.5 * Math.exp(-PW / .07) + .3 * Math.exp(-(((1e3 * PW - BO) / 100) ** 2)) + .8 * bW, lW = 1 - bW ** 1.5
          }
          const AW = .15 * wW + VO * tW,
            bW = -.1 * wW + pO * tW,
            jW = 3 * wW + fO * tW;
          LW.push(`${(cW/PW*100).toFixed(3)}% { opacity: ${lW.toFixed(3)}; transform: translate(${AW.toFixed(3)}rem, ${bW.toFixed(3)}rem) rotate(${jW.toFixed(2)}deg) scale(${ZW.toFixed(3)}); filter: brightness(${xW.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${LW.join(" ")} }`
      }(), document.head.append(WW)
    }
    const zO = "skyblockForgeView",
      FO = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class QO extends cW {
      constructor(WW, iW, OW, mW, EW) {
        super(WW, OW, mW), this.translate = iW, this.requestForge = EW, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (WW, iW) => {
          var OW, mW;
          null !== this.forging || (null !== (OW = this.owned[(0, vO.n)(iW, WW)]) && void 0 !== OW ? OW : 0) <= 0 || (this.selected[WW] = this.selected[WW] === iW ? null : iW, this.status = null, null === (mW = this.onPartSelected) || void 0 === mW || mW.call(this), this.emit())
        }, this.forge = WW => {
          var iW, OW;
          const mW = this.selectedParts();
          if (null === mW || this.isPending() || !this.open) return;
          const EW = (0, vO.m)(mW);
          if (null === EW || EW.coalCost > this.coal) return;
          const NW = this.preview(EW),
            PW = null !== (iW = null === (OW = this.onForgeStarted) || void 0 === OW ? void 0 : OW.call(this, NW.tier, NW.named, WW)) && void 0 !== iW ? iW : () => {};
          if (this.dropArrival(), WW) {
            const WW = {
              id: ++this.forgeId,
              preview: NW,
              timers: [],
              stopSounds: PW,
              landed: !1,
              reply: null
            };
            WW.timers.push(setTimeout((() => {
              WW.landed = !0, null !== WW.reply && (this.apply(WW.reply), WW.reply = null, this.emit())
            }), gO), setTimeout((() => {
              this.finishForge(WW)
            }), DO)), this.forging = WW
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(mW)
        }, this.snapshot = this.buildSnapshot()
      }
      yZ(WW) {
        var iW;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.forgeMessageKind) return this.dropForge(), this.apply(WW), this.status = null, this.show(), void(null === (iW = this.onOpened) || void 0 === iW || iW.call(this));
        const OW = this.forging;
        if (null !== OW && null !== WW.forgeRefusalKey) this.dropForge();
        else if (null !== OW && !OW.landed) return void(OW.reply = WW);
        this.apply(WW), this.emit()
      }
      apply(WW) {
        if (this.owned = WW.forgeOwnedParts, this.coal = WW.forgeCoalOwned, this.keepSelectionOwned("open" === WW.forgeMessageKind), null !== WW.forgeForgedSwordId) {
          var iW;
          const OW = (0, vO.m)(WW.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (iW = null === OW || void 0 === OW ? void 0 : OW.displayName) && void 0 !== iW ? iW : ""
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
        var iW;
        this.forging = null;
        const OW = this.selectedParts(),
          mW = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: WW.id,
          sameSword: null !== OW && (null === (iW = (0, vO.m)(OW)) || void 0 === iW ? void 0 : iW.displayName) === WW.preview.name,
          timer: mW
        }, this.emit()
      }
      dropForge() {
        const WW = this.forging;
        if (null !== WW) {
          this.forging = null;
          for (const iW of WW.timers) clearTimeout(iW);
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
        var WW, iW, OW;
        const mW = this.selectedParts(),
          EW = null === mW ? null : (0, vO.m)(mW),
          NW = null !== (WW = null === (iW = this.forging) || void 0 === iW ? void 0 : iW.preview) && void 0 !== WW ? WW : null === EW ? null : this.preview(EW);
        return {
          enabled: this.received,
          open: this.open,
          slots: vO.j.map((WW => ({
            kind: WW,
            label: this.translate(FO[WW]),
            parts: this.partsFor(WW)
          }))),
          coalOwned: this.coal,
          preview: NW,
          unformedSword: vO.i[null !== (OW = this.selected.Blade) && void 0 !== OW ? OW : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((WW => WW > 0)),
          canForge: null !== NW && !NW.coalShort && !this.isPending(),
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
        const iW = [];
        for (const mW of vO.e) {
          var OW;
          const EW = (0, vO.n)(mW, WW),
            NW = null !== (OW = this.owned[EW]) && void 0 !== OW ? OW : 0;
          NW > 0 && iW.push({
            material: mW,
            itemName: EW,
            owned: NW,
            selected: this.selected[WW] === mW,
            placeholder: !1
          })
        }
        if (0 === iW.length) {
          const OW = vO.e[0];
          iW.push({
            material: OW,
            itemName: (0, vO.n)(OW, WW),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return iW
      }
      stats(WW) {
        const iW = [{
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
        return WW.reachBonus > 0 && iW.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${WW.reachBonus.toFixed(1)}`,
          better: !0
        }), WW.damageReduction > 0 && iW.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*WW.damageReduction)}%`,
          better: !0
        }), iW
      }
      selectedParts() {
        const {
          Blade: WW,
          Guard: iW,
          Handle: OW
        } = this.selected;
        return null === WW || null === iW || null === OW ? null : {
          blade: WW,
          guard: iW,
          handle: OW
        }
      }
      keepSelectionOwned(WW) {
        for (const OW of vO.j) {
          var iW;
          const mW = this.selected[OW];
          if (null !== mW && (null !== (iW = this.owned[(0, vO.n)(mW, OW)]) && void 0 !== iW ? iW : 0) > 0) continue;
          if (!WW) {
            this.selected[OW] = null;
            continue
          }
          const EW = [...vO.e].reverse().find((WW => {
            var iW;
            return (null !== (iW = this.owned[(0, vO.n)(WW, OW)]) && void 0 !== iW ? iW : 0) > 0
          }));
          this.selected[OW] = null !== EW && void 0 !== EW ? EW : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Wm = "skyblockSmugglerView",
      im = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Om extends cW {
      constructor(WW, iW, OW, mW, EW) {
        super(WW, OW, mW), this.translate = iW, this.requestBuy = EW, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = WW => WW, this.onBought = null, this.buy = WW => {
          const iW = this.deals[WW];
          void 0 !== iW && !this.isPending() && this.open && !this.soldOut.has(WW) && this.canAfford(iW) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, WW))
        }, this.snapshot = this.buildSnapshot()
      }
      yZ(WW) {
        if (this.received = !0, this.day = WW.smugglerDay, this.deals = WW.smugglerDeals, this.rivets = WW.smugglerRivetsOwned, this.crests = WW.smugglerCrestsOwned, this.soldOut = new Set(WW.smugglerSoldOutSlots), this.rotatesAtMs = Date.now() + WW.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.smugglerMessageKind) return this.status = null, this.boughtSlot = null, void this.show();
        if (this.boughtSlot = WW.smugglerBoughtSlot, null !== WW.smugglerBoughtSlot) {
          var iW, OW;
          const mW = this.deals[WW.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === mW ? "" : this.dealName(mW),
              amount: String(null !== (iW = null === mW || void 0 === mW ? void 0 : mW.smugglerDealAmount) && void 0 !== iW ? iW : 0)
            }
          }, this.boughtCount++, null === (OW = this.onBought) || void 0 === OW || OW.call(this)
        } else null !== WW.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: WW.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(WW, iW, OW) {
        this.translate = WW, void 0 !== OW && (this.itemName = OW), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.boughtCount = 0
      }
      dealName(WW) {
        if (null !== WW.smugglerDealUniqueName) return WW.smugglerDealUniqueName;
        const iW = im[WW.smugglerDealItem];
        return void 0 === iW ? this.itemName(WW.smugglerDealItem) : this.translate(iW)
      }
      canAfford(WW) {
        return WW.smugglerDealRivets <= this.rivets && WW.smugglerDealCrests <= this.crests
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((WW, iW) => ({
            slot: iW,
            itemName: WW.smugglerDealItem,
            displayName: this.dealName(WW),
            enchantmentTier: WW.smugglerDealEnchantmentTier,
            amount: WW.smugglerDealAmount,
            rivets: WW.smugglerDealRivets,
            crests: WW.smugglerDealCrests,
            soldOut: this.soldOut.has(iW),
            justBought: this.boughtSlot === iW
          }))),
          rivetsOwned: this.rivets,
          crestsOwned: this.crests,
          rotatesAtMs: this.rotatesAtMs,
          pending: this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          boughtCount: this.boughtCount
        }
      }
      dispose() {
        this.received = !1, this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const mm = "skyblockPassageView",
      Em = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function Nm(WW, iW) {
      return WW(Em[iW])
    }

    function Pm(WW, iW, OW, mW) {
      const EW = Math.ceil((OW - mW) / 864e5),
        NW = Nm(WW, iW);
      return EW > 1 ? WW("skyblockGame:passageNextDays", {
        phase: NW,
        days: String(EW)
      }) : WW("skyblockGame:passageNextSoon", {
        phase: NW
      })
    }
    class Lm extends cW {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(WW, OW, mW), this.translate = iW, this.now = EW, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = WW => WW, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      yZ(WW) {
        this.message = WW, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(WW, iW, OW) {
        this.translate = WW, void 0 !== OW && (this.itemName = OW), this.emit()
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
          phaseName: Nm(this.translate, WW.passagePhase),
          visitors: WW.passageVisitors.map((WW => this.describe(WW))),
          resting: this.describe(WW.passageResting),
          nextPhase: WW.passageNextPhase,
          next: Pm(this.translate, WW.passageNextPhase, WW.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var cm = OW(39775);
    const wm = "skyblockKeepersChairView";
    class tm extends cW {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new cm.c;
        super(WW, OW, mW), this.translate = iW, this.requestAim = EW, this.now = NW, this.pacer = PW, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = WW => WW, this.aim = WW => {
          !this.awaitingReply && this.open && this.atChair && WW !== this.favoured && (null === WW || this.islands.some((iW => iW.keepersChairIslandId === WW && iW.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== WW && void 0 !== WW ? WW : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = PW.subscribe((() => {
          this.emit()
        }))
      }
      yZ(WW) {
        var iW, OW;
        this.received = !0;
        const mW = this.favoured,
          EW = this.atChair;
        var NW;
        return this.islands = WW.keepersChairIslands, this.favoured = WW.keepersChairFavoured, this.passage = null !== (iW = WW.keepersChairPassage) && void 0 !== iW ? iW : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (OW = WW.keepersChairAtChair) || void 0 === OW || OW, "place" === WW.keepersChairMessageKind ? (!EW && this.atChair && "refused" === (null === (NW = this.status) || void 0 === NW ? void 0 : NW.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === WW.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== WW.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: WW.keepersChairRefusalKey,
          island: null
        } : this.favoured !== mW && (this.status = null === this.favoured ? {
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
      setTranslator(WW, iW, OW) {
        this.translate = WW, void 0 !== OW && (this.itemName = OW), this.emit()
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
        const iW = this.islands.find((iW => iW.keepersChairIslandId === WW));
        return void 0 === iW ? WW : this.translate(iW.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const WW = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          iW = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((WW => {
            const iW = WW.keepersChairFeaturedFish;
            return {
              id: WW.keepersChairIslandId,
              name: this.translate(WW.keepersChairIslandNameKey),
              relit: WW.keepersChairIslandRelit,
              featuredFish: null === iW ? null : {
                itemName: iW,
                displayName: this.itemName(iW)
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
          almanac: null === iW ? null : {
            phase: iW.keepersChairPassagePhase,
            phaseName: Nm(this.translate, iW.keepersChairPassagePhase),
            nextPhase: iW.keepersChairPassageNextPhase,
            next: Pm(this.translate, iW.keepersChairPassageNextPhase, iW.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Zm = "skyblockReachLogView",
      xm = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      lm = "Caught Fish",
      Am = [1, 2, 4];

    function bm(WW, iW) {
      return WW.map((WW => ({
        ...WW,
        reachLogPageFish: WW.reachLogPageFish.map((WW => ({
          ...WW,
          reachLogFishFresh: iW(WW)
        })))
      })))
    }
    class jm extends cW {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new cm.c;
        super(WW, OW, mW), this.translate = iW, this.requestOpen = EW, this.pacer = NW, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = WW => WW, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = WW => {
          this.pages.some((iW => iW.reachLogIslandId === WW)) && (this.selected = WW, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = NW.subscribe((() => {
          this.emit()
        }))
      }
      yZ(WW) {
        if (this.received = !0, "status" === WW.reachLogMessageKind) return !0 === WW.reachLogNews && this.markNews(), this.serverFresh = WW.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const iW = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== WW.reachLogMessageKind)
          if (this.pageViews = null, this.pages = bm(WW.reachLogPages, (WW => WW.reachLogFishFresh || this.heldFresh.has(WW.reachLogFishItem))), this.letGoShown = WW.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, iW) this.showPages();
          else {
            for (const WW of this.pages)
              for (const iW of WW.reachLogPageFish) iW.reachLogFishFresh && this.heldFresh.add(iW.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(WW, iW, OW) {
        this.translate = WW, this.pageViews = null, void 0 !== OW && (this.itemName = OW), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = bm(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var WW, iW, OW, mW;
        const EW = this.pages.find((WW => WW.reachLogPageFish.some((WW => WW.reachLogFishFresh))));
        if (void 0 !== EW) return EW.reachLogIslandId;
        if (null !== this.selected && this.pages.some((WW => WW.reachLogIslandId === this.selected))) return this.selected;
        return null !== (WW = null !== (iW = null === (OW = this.pages.filter((WW => WW.reachLogIslandAwake)).at(-1)) || void 0 === OW ? void 0 : OW.reachLogIslandId) && void 0 !== iW ? iW : null === (mW = this.pages[0]) || void 0 === mW ? void 0 : mW.reachLogIslandId) && void 0 !== WW ? WW : null
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
          var iW;
          return {
            id: WW.reachLogIslandId,
            name: this.translate(WW.reachLogIslandNameKey),
            awake: WW.reachLogIslandAwake,
            gold: WW.reachLogPageGold,
            caught: WW.reachLogPageFish.filter((WW => WW.reachLogFishCaught && !WW.reachLogFishVisitor)).length,
            total: WW.reachLogPageFish.filter((WW => !WW.reachLogFishVisitor)).length,
            fish: WW.reachLogPageFish.map((WW => {
              const iW = WW.reachLogFishBestKg;
              return {
                itemName: WW.reachLogFishItem,
                name: WW.reachLogFishCaught ? this.itemName(WW.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: WW.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / WW.reachLogFishChance))
                }),
                best: WW.reachLogFishCaught ? null === iW ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: iW.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: WW.reachLogFishMarks,
                ribbons: Am.map((iW => 0 !== (WW.reachLogFishRibbons & iW))),
                glimmer: 0 !== (8 & WW.reachLogFishRibbons),
                halo: 0 !== (32 & WW.reachLogFishRibbons),
                fresh: WW.reachLogFishFresh,
                visitor: WW.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (iW = WW.reachLogPageReturner) && void 0 !== iW ? iW : null)
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
    const Um = "skyblockLampLightView";
    class km {
      constructor(WW, iW, OW, mW) {
        this.iZ = WW, this.translate = iW, this.requestCommand = OW, this.pacer = mW, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.JA = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = WW => {
          WW ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = WW => {
          this.send(`buy ${WW}`)
        }, this.socket = WW => {
          this.send(`socket ${null!==WW&&void 0!==WW?WW:dW}`)
        }, this.wearTint = WW => {
          this.send(`tint ${null!==WW&&void 0!==WW?WW:dW}`)
        }, this.setSituation = WW => {
          this.situation = WW, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = mW.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = mW.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      yZ(WW) {
        if (this.message = WW, null !== WW.lampLightShop && (this.shop = WW.lampLightShop), "open" === WW.lampLightKind && (this.refusalKey = null), "reply" === WW.lampLightKind) {
          var iW;
          const EW = null !== (iW = WW.lampLightReplyTag) && void 0 !== iW ? iW : null,
            NW = null !== EW && EW === this.offTag;
          var OW, mW;
          if (NW ? this.settleOff() : null !== EW && EW !== this.awaitingTag || this.settleReply(), this.refusalKey = WW.lampLightRefusalKey, null !== WW.lampLightBought && !NW) this.sparkle = {
            id: WW.lampLightBought,
            count: (null !== (OW = null === (mW = this.sparkle) || void 0 === mW ? void 0 : mW.count) && void 0 !== OW ? OW : 0) + 1
          }
        }
        WW.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === WW.lampLightKind && (this.lastGained = WW.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(WW) {
        WW !== this.atChair && (this.atChair = WW, WW && (this.refusalKey = null), this.emit())
      }
      setTranslator(WW, iW) {
        this.translate = WW, this.locale = null !== iW && void 0 !== iW ? iW : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.JA = !0
      }
      send(WW) {
        var iW;
        if (null !== this.awaitingTag || "ready" !== (null === (iW = this.message) || void 0 === iW ? void 0 : iW.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const OW = this.nextTag();
        this.awaitingTag = OW, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${WW} ${OW}`), this.emit()
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
        this.JA || (this.snapshot = this.buildSnapshot(), this.iZ(this.snapshot))
      }
      formatLight(WW) {
        return Math.floor(WW).toLocaleString(this.locale)
      }
      formatPercent(WW) {
        const iW = 100 * WW;
        return iW >= 10 ? Math.round(iW).toLocaleString(this.locale) : iW.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(WW, iW) {
        if ("bite" === WW) return this.translate("skyblockGame:lampLightBite", {
          seconds: (iW.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === WW) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(iW.lampLightRareChance)
        });
        if ("notice" === WW) return null === iW.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(iW.lampLightNoticeChance)
        });
        const OW = "meter" === WW ? iW.lampLightMeterCatches : iW.lampLightBloomCatches;
        return null === OW ? null : this.translate("meter" === WW ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(OW))
        })
      }
      oddsLines(WW, iW) {
        const OW = (WW, iW) => {
            var OW;
            return null !== (OW = {
              bite: iW.lampLightBiteMs,
              rare: iW.lampLightRareChance,
              meter: iW.lampLightMeterCatches,
              bloom: iW.lampLightBloomCatches,
              notice: iW.lampLightNoticeChance
            } [WW]) && void 0 !== OW ? OW : 0
          },
          mW = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          EW = [];
        for (const NW of ["bite", "rare", "meter", "bloom", "notice"]) {
          const PW = this.formatOdds(NW, WW),
            LW = this.formatOdds(NW, iW);
          if (null === PW || null === LW || "bite" !== NW && "rare" !== NW && PW === LW) continue;
          const cW = OW(NW, iW) - OW(NW, WW),
            wW = mW[NW] ? cW < 0 : cW > 0;
          EW.push({
            label: NW,
            before: PW,
            after: LW,
            tone: PW === LW ? "same" : wW ? "better" : "worse"
          })
        }
        return EW
      }
      charmView(WW, iW, OW) {
        const mW = WW.lampLightCharmId.charAt(0).toUpperCase() + WW.lampLightCharmId.slice(1),
          EW = "bloom" === this.situation;
        return {
          id: WW.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${mW}`),
          effect: this.translate(`skyblockGame:lampLightCharm${mW}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(WW.lampLightCharmCost)
          }),
          owned: WW.lampLightCharmOwned,
          affordable: OW >= WW.lampLightCharmCost,
          socketed: iW.lampLightSocketed === WW.lampLightCharmId,
          lines: this.oddsLines(EW ? iW.lampLightBareBloom : iW.lampLightBareOpen, EW ? WW.lampLightCharmBloom : WW.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var WW, iW, OW, mW;
        const EW = this.message,
          NW = "ready" === (null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) ? this.shop : null,
          PW = null !== (WW = null === EW || void 0 === EW ? void 0 : EW.lampLightBalance) && void 0 !== WW ? WW : 0,
          LW = this.atChair,
          cW = "loading" === (null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          wW = "ready" !== (null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) || LW ? null !== (iW = this.refusalKey) && void 0 !== iW ? iW : cW : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== EW && "locked" !== EW.lampLightStatus,
          status: null !== (OW = null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) && void 0 !== OW ? OW : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(PW)
          }),
          releasing: null !== (mW = null === EW || void 0 === EW ? void 0 : EW.lampLightReleasing) && void 0 !== mW && mW,
          gained: null === EW || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === EW || void 0 === EW ? void 0 : EW.lampLightStatus) && LW && !this.isPending(),
          situation: this.situation,
          shop: null === NW ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: NW.lampLightOddsRod,
              island: this.translate(NW.lampLightIslandNameKey)
            }),
            heldRod: null !== NW.lampLightHeldRod,
            charms: NW.lampLightCharms.map((WW => this.charmView(WW, NW, PW))),
            tints: NW.lampLightTints.map((WW => {
              const iW = WW.lampLightTintId,
                [OW, mW, EW] = WW.lampLightTintColour;
              return {
                id: iW,
                name: this.translate(`skyblockGame:lampLightTint${iW.charAt(0).toUpperCase()}${iW.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(WW.lampLightTintCost)
                }),
                owned: WW.lampLightTintOwned,
                affordable: PW >= WW.lampLightTintCost,
                wearing: NW.lampLightTint === iW,
                colour: `rgb(${OW}, ${mW}, ${EW})`
              }
            })),
            wearingIslandColours: null === NW.lampLightTint
          },
          notice: null === wW ? null : this.translate(wW),
          sparkle: this.sparkle
        }
      }
    }
    const sm = "skyblockMagmawardView";
    class Mm {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.iZ = WW, this.now = iW, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = fW.map((() => 0)), this.wornAt = fW.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      yZ(WW) {
        var iW, OW;
        const mW = fW.map(((iW, OW) => !0 === WW.magmawardPiecesWorn[OW]));
        if (!mW.includes(!0)) return this.snapshot = null, void this.iZ(null);
        const EW = this.now(),
          NW = this.snapshot;
        null === NW && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const PW = WW.magmawardFuelCarried,
          LW = !mW.includes(!1);
        let cW = null !== (iW = null === NW || void 0 === NW ? void 0 : NW.pulse) && void 0 !== iW ? iW : null,
          wW = null !== (OW = null === NW || void 0 === NW ? void 0 : NW.flare) && void 0 !== OW ? OW : null;
        WW.magmawardFuelBurned ? (cW = "burn", wW = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = EW, this.flareAt = EW) : null !== NW && PW > NW.fuel && (cW = "gain", this.pulseToken++, this.pulseAt = EW), LW && null !== NW && !NW.fullSet && (wW = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = EW, this.setLitAt = EW);
        const tW = fW.map(((WW, iW) => (mW[iW] && null !== NW && !NW.pieces[iW].worn && (this.wornTokens[iW]++, this.wornAt[iW] = EW), {
          itemName: WW,
          worn: mW[iW],
          wornToken: this.wornTokens[iW],
          justWorn: mW[iW] && this.isPlaying(this.wornAt[iW], EW)
        })));
        this.snapshot = {
          pieces: tW,
          wornCount: mW.filter(Boolean).length,
          fullSet: LW,
          fuel: PW,
          fuelState: PW <= 0 ? "empty" : PW <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, EW) ? cW : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, EW) ? wW : null,
          flareToken: this.flareToken,
          setLit: LW && this.isPlaying(this.setLitAt, EW),
          setLitToken: this.setLitToken
        }, this.iZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.iZ(null)
      }
      isPlaying(WW, iW) {
        return iW - WW < 1200
      }
    }
    const Km = "skyblockGlowtideView";
    class Sm {
      constructor(WW) {
        this.iZ = WW, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = WW => {
          this.arrow = WW, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      yZ(WW) {
        this.bloom = WW.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.iZ(null))
      }
      afterRender(WW, iW) {
        const OW = this.bloom;
        if (null === OW || null === WW) return;
        const mW = OW.glowtideBloomX - WW[0],
          EW = OW.glowtideBloomZ - WW[2],
          NW = Math.hypot(mW, EW),
          PW = this.snapshot,
          LW = null !== PW && void 0 !== PW && PW.inRange ? 1 : 0,
          cW = NW <= 12.5 + LW && WW[1] - OW.glowtideBloomY <= 10 + LW;
        !cW || null !== PW && void 0 !== PW && PW.inRange || this.inRangeToken++;
        const wW = {
          colour: OW.glowtideBloomColour,
          inRange: cW,
          distance: Math.round(NW),
          inRangeToken: this.inRangeToken
        };
        (null === PW || wW.colour !== PW.colour || wW.inRange !== PW.inRange || !cW && wW.distance !== PW.distance) && (this.snapshot = wW, this.iZ(wW));
        const tW = ZW.e.computeShortestRotation(iW, (0, ZW.Ab)([mW, 0, EW]));
        null === this.arrow || Math.abs(tW - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${tW}rad)`, this.arrowTurn = tW)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.iZ(null)
      }
    }
    const Ym = "skyblockGlowMeterView";
    class ym {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.iZ = WW, this.now = iW, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      yZ(WW) {
        const iW = this.now(),
          {
            glowMeterFill: OW,
            glowMeterCapacity: mW
          } = WW,
          EW = OW >= mW,
          NW = this.snapshot;
        null !== NW && (EW && !NW.full && (this.fullToken++, this.fullAt = iW), NW.full && !EW ? (this.burstToken++, this.burstAt = iW) : OW > NW.fill && (this.gainToken++, this.gainAt = iW)), this.snapshot = {
          fill: OW,
          aZ: mW,
          ratio: Math.min(1, Math.max(0, OW / mW)),
          full: EW,
          rares: WW.glowMeterRares,
          ready: EW && this.isPlaying(this.fullAt, iW),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, iW),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, iW),
          gainToken: this.gainToken
        }, this.iZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.iZ(null)
      }
      isPlaying(WW, iW) {
        return iW - WW < 2e3
      }
    }
    const Tm = "skyblockHushWaitView";
    class Jm {
      constructor(WW) {
        this.iZ = WW, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      yZ(WW) {
        let {
          hushWaitMs: iW,
          hushWaitTotalMs: OW,
          hushWaitLines: mW
        } = WW;
        if (this.clearTimers(), this.token++, 0 === mW.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (iW <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: mW[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const EW = Math.max(null !== OW && void 0 !== OW ? OW : iW, iW),
          NW = EW - iW,
          PW = WW => EW * WW / mW.length,
          LW = WW => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: EW,
              elapsedMs: NW,
              line: mW[WW],
              lineIndex: WW
            })
          };
        let cW = 0;
        for (; cW + 1 < mW.length && PW(cW + 1) <= NW;) cW++;
        LW(cW);
        for (let wW = cW + 1; wW < mW.length; wW++) this.later(PW(wW) - NW, (() => {
          LW(wW)
        }));
        this.later(iW, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(WW) {
        this.snapshot = WW, this.iZ(WW)
      }
      later(WW, iW) {
        this.timers.push(setTimeout(iW, WW))
      }
      clearTimers() {
        for (const WW of this.timers) clearTimeout(WW);
        this.timers = []
      }
    }
    const hm = "skyblockTideChartsView",
      Hm = 36e5,
      nm = 864e5;

    function um(WW, iW, OW) {
      const [mW, EW, NW, PW] = WW.tideChartArea, LW = Math.floor(iW), cW = Math.floor(OW);
      return LW >= mW && LW <= NW && cW >= EW && cW <= PW
    }

    function om(WW, iW, OW) {
      const [mW, EW, NW, PW] = WW.tideChartWater;
      return function(WW, iW, OW, mW, EW, NW) {
        const PW = 4 - CW(Math.floor(EW) - (WW - OW), OW);
        return 5 * CW(Math.floor(NW) - (iW - mW), mW) + PW
      }(mW, EW, NW, PW, iW, OW)
    }

    function dm(WW, iW, OW) {
      const mW = WW.tideCharts;
      for (let EW = 0; EW < mW.length; EW++)
        if (um(mW[EW], iW, OW)) return mW[EW];
      return null
    }

    function em(WW, iW, OW) {
      const mW = Math.max(0, iW - OW);
      return mW > nm ? WW("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(mW / nm))
      }) : mW > Hm ? WW("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(mW / Hm))
      }) : WW("skyblockGame:tideChartsTurnSoon")
    }
    class gm extends cW {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(WW, OW, mW), this.translate = iW, this.now = EW, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Kl = WW => {
          this.picked = WW, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      yZ(WW) {
        const iW = this.message;
        if (null !== iW)
          for (const mW of WW.tideCharts) {
            var OW;
            const WW = iW.tideCharts.find((WW => WW.tideChartIsland === mW.tideChartIsland)),
              EW = mW.tideChartLit & ~(null !== (OW = null === WW || void 0 === WW ? void 0 : WW.tideChartLit) && void 0 !== OW ? OW : 0);
            void 0 !== WW && 0 !== EW && (this.pulse = {
              island: mW.tideChartIsland,
              cells: EW,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = WW, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(WW, iW) {
        var OW;
        const mW = null === this.message || Number.isNaN(WW) ? null : dm(this.message, WW, iW),
          EW = null !== (OW = null === mW || void 0 === mW ? void 0 : mW.tideChartIsland) && void 0 !== OW ? OW : null,
          NW = null === mW ? -1 : function(WW, iW, OW) {
            const [mW, EW, NW, PW] = WW.tideChartWater;
            return function(WW, iW, OW, mW, EW, NW, PW) {
              return ((EW - WW) / (OW + PW)) ** 2 + ((NW - iW) / (mW + PW)) ** 2 <= 1
            }(mW, EW, NW, PW, iW, OW, 2) ? om(WW, iW, OW) : -1
          }(mW, WW, iW);
        return (EW !== this.hereIsland || NW !== this.hereCell) && (this.hereIsland = EW, this.hereCell = NW, null !== EW && (this.lastIsland = EW), !0)
      }
      afterRender(WW) {
        if (null === this.message) return;
        this.lastX = null === WW ? Number.NaN : WW[0], this.lastZ = null === WW ? Number.NaN : WW[2];
        const iW = this.locate(this.lastX, this.lastZ),
          OW = this.expirePulses();
        (iW || OW || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const WW = this.now();
        return !(!this.open || WW - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = WW, em(this.translate, this.message.tideChartTurnsInMs, WW - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(WW, iW) {
        const OW = null === this.message ? null : dm(this.message, WW, iW);
        if (null === OW) return;
        const mW = om(OW, WW, iW);
        0 === (OW.tideChartPreBlank & 1 << mW) && (this.cast = {
          island: OW.tideChartIsland,
          cell: mW,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const WW = this.now();
        let iW = !1;
        return 0 !== this.pulse.cells && WW - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, iW = !0), null !== this.cast && WW - this.cast.atMs >= 1500 && (this.cast = null, iW = !0), iW
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
      findChart(WW, iW) {
        var OW;
        return null !== (OW = WW.tideCharts.find((WW => WW.tideChartIsland === iW))) && void 0 !== OW ? OW : null
      }
      describe(WW) {
        var iW, OW, mW;
        const EW = WW.tideChartIsland,
          NW = [];
        for (let lW = 0; lW < 25; lW++) {
          const iW = 1 << lW;
          0 !== (WW.tideChartLit & iW) ? NW.push("lit") : 0 !== (WW.tideChartClear & iW) ? NW.push("clear") : 0 !== (WW.tideChartPreBlank & iW) ? NW.push("shore") : NW.push("water")
        }
        const PW = function(WW) {
            let iW = 0;
            for (let OW = WW >>> 0; 0 !== OW; OW &= OW - 1) iW++;
            return iW
          }(WW.tideChartLit),
          LW = WW.tideChartInkCount,
          cW = this.translate(WW.tideChartIslandNameKey),
          wW = this.translate("skyblockGame:tideChartsLit", {
            lit: String(PW),
            ink: String(LW)
          }),
          tW = null === WW.tideChartPictureNameKey ? null : this.translate(WW.tideChartPictureNameKey),
          ZW = this.hereIsland === EW && -1 !== this.hereCell ? this.hereCell : null,
          xW = [`${cW}: ${wW}.`];
        if (null !== tW && xW.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: tW
          })), null !== ZW) {
          const WW = Math.floor(ZW / 5) + 1,
            iW = ZW % 5 + 1;
          xW.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(WW),
            column: String(iW)
          }))
        }
        return {
          island: EW,
          islandName: cW,
          cells: NW,
          hereCell: ZW,
          lit: PW,
          ink: LW,
          litText: wW,
          pictureName: tW,
          gridLabel: xW.join(" "),
          pulseCells: this.pulse.island === EW ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (iW = this.cast) || void 0 === iW ? void 0 : iW.island) === EW ? this.cast.cell : null,
          castToken: null !== (OW = null === (mW = this.cast) || void 0 === mW ? void 0 : mW.token) && void 0 !== OW ? OW : 0
        }
      }
      buildSnapshot() {
        var WW, iW, OW;
        const mW = this.message;
        if (null === mW || 0 === mW.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const EW = this.findChart(mW, this.hereIsland),
          NW = null !== (WW = null !== (iW = null !== (OW = this.findChart(mW, this.open ? this.picked : null)) && void 0 !== OW ? OW : EW) && void 0 !== iW ? iW : this.findChart(mW, this.lastIsland)) && void 0 !== WW ? WW : mW.tideCharts[0],
          PW = null === EW ? null : this.describe(EW);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: PW,
          card: NW === EW ? PW : this.describe(NW),
          turnsText: em(this.translate, mW.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(mW.tideChartBookCount)
          }),
          tabs: mW.tideCharts.map((WW => ({
            island: WW.tideChartIsland,
            name: this.translate(WW.tideChartIslandNameKey),
            selected: WW.tideChartIsland === NW.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Dm = "skyblockRegularsView",
      Vm = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      pm = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function fm(WW, iW) {
      return "given" === WW ? iW.given : "owed" === WW ? iW.owed : iW.goal
    }
    class Cm extends cW {
      constructor(WW, iW, OW, mW) {
        super(WW, OW, mW), this.translate = iW, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = WW => WW, this.openIsland = WW => {
          this.selected = WW, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = WW => {
          this.selected = WW, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      yZ(WW) {
        this.message = WW, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const WW = this.openedFromReachLog;
        return this.openedFromReachLog = !1, WW
      }
      setTranslator(WW, iW, OW) {
        this.translate = WW, void 0 !== OW && (this.itemName = OW), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(WW, iW, OW) {
        return {
          text: this.translate(fm(WW, iW), OW),
          given: "given" === WW
        }
      }
      describeRegular(WW, iW) {
        const OW = this.translate,
          mW = null !== WW.regularKg,
          EW = WW.regularMeetings,
          NW = mW ? 0 === EW ? OW("skyblockGame:regularsNotMet") : 1 === EW ? OW("skyblockGame:regularsMeetingsOne") : OW("skyblockGame:regularsMeetings", {
            count: EW
          }) : "";
        return {
          id: WW.regularId,
          name: OW(WW.regularNameKey),
          line: OW(WW.regularLineKey),
          itemName: WW.regularFishItem,
          fishName: this.itemName(WW.regularFishItem),
          tagged: mW,
          size: null === WW.regularKg ? OW("skyblockGame:regularsNotTagged") : OW("skyblockGame:regularsSize", {
            kg: WW.regularKg.toFixed(1)
          }),
          meetings: NW,
          chance: OW("skyblockGame:regularsChance", {
            count: WW.regularOneInCasts
          }),
          resting: WW.regularRestingToday,
          gifts: [{
            text: OW("skyblockGame:regularsGiftFlare"),
            given: EW >= 3
          }, this.describeGift(WW.regularTintGift, Vm, {
            tint: OW(WW.regularTintNameKey)
          })],
          history: [...WW.regularHistory].reverse().map((WW => {
            const mW = WW.regularMeetingKg.toFixed(1),
              EW = iW - WW.regularMeetingDay;
            return EW <= 0 ? OW("skyblockGame:regularsToday", {
              kg: mW
            }) : OW("skyblockGame:regularsDaysAgo", {
              days: EW,
              kg: mW
            })
          }))
        }
      }
      describeIsland(WW, iW) {
        return {
          id: WW.regularsIslandId,
          name: this.translate(WW.regularsIslandNameKey),
          charm: this.describeGift(WW.regularsCharmGift, pm, {
            charm: this.translate(WW.regularsCharmNameKey)
          }),
          regulars: WW.regularsList.map((WW => this.describeRegular(WW, iW)))
        }
      }
      buildSnapshot() {
        var WW, iW, OW, mW;
        const EW = this.message;
        if (null === EW) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const NW = EW.regularsIslands.map((WW => this.describeIsland(WW, EW.regularsToday))),
          PW = null !== (WW = null !== (iW = null === (OW = NW.find((WW => WW.id === this.selected))) || void 0 === OW ? void 0 : OW.id) && void 0 !== iW ? iW : null === (mW = NW[0]) || void 0 === mW ? void 0 : mW.id) && void 0 !== WW ? WW : "";
        return {
          enabled: !0,
          open: this.open,
          selected: PW,
          islands: NW
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Xm = "skyblockHiddenWatersView";
    class Bm {
      constructor(WW) {
        this.iZ = WW, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      yZ(WW) {
        this.snapshot = function(WW) {
          const [iW, OW] = WW.hiddenWatersMapSize, mW = (WW, mW) => ({
            left: 1 - WW / iW,
            top: mW / OW
          }), EW = new Map;
          for (const [PW, LW] of WW.hiddenWatersGlimpses) {
            var NW;
            const WW = null !== (NW = EW.get(PW)) && void 0 !== NW ? NW : [];
            WW.push(LW), EW.set(PW, WW)
          }
          return {
            found: WW.hiddenWatersFound,
            total: WW.hiddenWatersTotal,
            aspect: OW / iW,
            pins: WW.hiddenWatersPins.map((WW => {
              let [iW, OW] = WW;
              return mW(iW, OW)
            })),
            islands: WW.hiddenWatersIslands.map((WW => {
              let [EW, NW, PW, LW] = WW;
              const {
                left: cW,
                top: wW
              } = mW(PW + 1, NW);
              return {
                left: cW,
                top: wW,
                width: (PW + 1 - EW) / iW,
                height: (LW + 1 - NW) / OW
              }
            })),
            glimpses: EW
          }
        }(WW), this.iZ(this.snapshot)
      }
    }
    const qm = "skyblockDialogueView";
    class Rm extends cW {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(WW, OW, mW), this.translate = iW, this.requestDialogue = EW, this.now = NW, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      yZ(WW) {
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
        const iW = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...iW,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const OW = this.selection;
        if ("quest" === OW.kind) {
          const WW = this.scripts.find((WW => WW.dialogueQuestId === OW.questId));
          return {
            ...iW,
            characters: [],
            questFocus: OW.questId,
            conversations: WW ? [this.conversation(WW)] : []
          }
        }
        const mW = [];
        for (let NW = this.scripts.length - 1; NW >= 0; NW--) {
          const WW = this.scripts[NW].dialogueLines;
          for (let iW = WW.length - 1; iW >= 0; iW--) mW.includes(WW[iW].dialogueSpeakerId) || mW.push(WW[iW].dialogueSpeakerId)
        }
        const EW = null !== OW.npcId && mW.includes(OW.npcId) ? OW.npcId : null !== (WW = mW[0]) && void 0 !== WW ? WW : null;
        return {
          ...iW,
          characters: mW.map((WW => {
            var iW, OW;
            return {
              id: WW,
              styling: null !== (iW = null === (OW = this.speakers.get(WW)) || void 0 === OW ? void 0 : OW.dialogueSpeakerStyling) && void 0 !== iW ? iW : WW,
              selected: WW === EW
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((WW => WW.dialogueLines.some((WW => WW.dialogueSpeakerId === EW)))).map((WW => this.conversation(WW))).reverse()
        }
      }
      conversation(WW) {
        let iW = null;
        return {
          questId: WW.dialogueQuestId,
          questName: this.translate(WW.dialogueQuestNameKey),
          completed: WW.dialogueQuestCompleted,
          lines: WW.dialogueLines.map(((WW, OW) => {
            var mW;
            const EW = WW.dialogueSpeakerId === iW || null === (mW = this.speakers.get(WW.dialogueSpeakerId)) || void 0 === mW ? void 0 : mW.dialogueSpeakerStyling;
            return iW = WW.dialogueSpeakerId, {
              key: OW,
              display: {
                line: {
                  translationKey: WW.dialogueLineKey,
                  params: this.params(WW.dialogueLineParams)
                },
                speakerName: EW,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(WW) {
        if (void 0 !== WW) return Object.fromEntries(Object.entries(WW).map((WW => {
          let [iW, OW] = WW;
          return [iW, "string" === typeof OW ? OW : this.translate(OW.translationKey)]
        })))
      }
    }
    var Gm = OW(625),
      Im = OW(1259),
      am = OW(100);
    const rm = "skyblockAutographsView";

    function zm(WW) {
      const iW = Gm.p[WW];
      return {
        label: iW.chatTag.map((WW => WW.str)).join(""),
        icon: iW.icon,
        colour: iW.mainRGB
      }
    }
    class Fm extends cW {
      constructor(WW) {
        let iW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = iW, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      yZ(WW) {
        this.signatures = WW.autographSignatures, WW.autographOpen ? this.show() : this.emit()
      }
      setTranslator(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = iW, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var WW;
        const iW = null !== (WW = this.signatures) && void 0 !== WW ? WW : [],
          OW = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          mW = [...iW].sort(((WW, iW) => Number(null !== iW.autographRank) - Number(null !== WW.autographRank) || iW.autographSignedAtMs - WW.autographSignedAtMs)).map((WW => ({
            key: `${WW.autographSignedAtMs}|${WW.autographSignerName}`,
            name: (0, Im.b)(WW.autographSignerName, !am.featureFlags.canSeeRealPlayerNames),
            rank: null === WW.autographRank ? null : zm(WW.autographRank),
            signedOn: OW.format(WW.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: mW,
          total: mW.length,
          rankTotal: mW.filter((WW => null !== WW.rank)).length
        }
      }
    }
    const Qm = "skyblockHudView",
      WE = () => {},
      iE = {
        getItem: () => null,
        setItem: WE,
        removeItem: WE
      };
    class OE {
      constructor(WW) {
        let {
          translate: iW,
          translateWithIcons: OW,
          setMenuOpen: mW = WE,
          dismissMenu: EW = () => {
            mW(!1)
          },
          publishSkills: NW = WE,
          publishQuests: PW = WE,
          publishQuestNotification: LW = WE,
          publishDungeons: cW = WE,
          publishCollections: wW = WE,
          publishMap: ZW = WE,
          publishHud: xW = WE,
          publishPortalTransit: lW = WE,
          publishDailyReward: AW = WE,
          publishMailbox: bW = WE,
          publishQuestGraph: jW = WE,
          publishForge: UW = WE,
          publishSmuggler: kW = WE,
          publishKeepersChair: sW = WE,
          publishReachLog: MW = WE,
          publishLampLight: SW = WE,
          publishMagmaward: YW = WE,
          publishGlowtide: yW = WE,
          publishGlowMeter: TW = WE,
          publishHushWait: JW = WE,
          publishPassage: hW = WE,
          publishTideCharts: HW = WE,
          publishRegulars: nW = WE,
          publishHiddenWaters: uW = WE,
          publishDialogue: oW = WE,
          publishAutographs: dW = WE,
          isLoadingScreenUp: eW = () => !1,
          onDailyRewardCoinLanded: vW = WE,
          onDailyRewardStarted: gW = WE,
          onDailyRewardFinished: DW = WE,
          onDailyRewardItemLanded: VW = WE,
          onMailboxStarted: pW = WE,
          journeyStorage: fW = iE,
          requestTracking: CW = WE,
          requestTravel: XW = WE,
          requestDungeonEnter: BW = WE,
          requestQuestJump: qW = WE,
          requestQuestArrive: RW = WE,
          requestForge: GW = WE,
          requestSmuggle: IW = WE,
          requestKeepersChairAim: aW = WE,
          requestReachLogOpen: rW = WE,
          requestLampLight: zW = WE,
          requestDialogue: FW = WE
        } = WW;
        this.navigation = void 0, this.map = void 0, this.compass = new KW, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new cm.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = WW => WW, this.close = () => {
          for (const WW of this.panels) WW.close()
        }, this.setMenuOpen = mW, this.publishHud = xW, this.portalTransit = new KO(lW, fW), this.magmaward = new Mm(YW), this.glowtide = new Sm(yW), this.glowMeter = new ym(TW), this.hushWait = new Jm(JW), this.dailyReward = new yO(AW, (() => eW() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (WW => {
          this.quests.setNotificationsHeld(WW)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), vW, gW, DW, VW);
        const QW = WW => {
          this.panels.some((WW => WW.isOpen())) || (WW ? EW() : this.setMenuOpen(!1))
        };
        this.skills = new Xi(NW, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), iW, void 0, void 0, QW), this.quests = new Ii(PW, CW, iW, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, QW, LW), this.dungeons = new zi(cW, iW, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, QW, BW), this.collections = new kO(wW, iW, (() => {
          this.beforePanelOpen(this.collections)
        }), QW), this.map = new tW(ZW, XW, iW, (() => {
          this.beforePanelOpen(this.map)
        }), QW), this.questGraph = new eO(jW, iW, (() => {
          this.beforePanelOpen(this.questGraph)
        }), QW, qW, RW, fW), this.forge = new QO(UW, iW, (() => {
          this.beforePanelOpen(this.forge)
        }), QW, GW), this.smuggler = new Om(kW, iW, (() => {
          this.beforePanelOpen(this.smuggler)
        }), QW, IW), this.lampLight = new km(SW, iW, zW, this.commandPacer), this.keepersChair = new tm(sW, iW, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (WW => {
          this.lampLight.onChairClosed(), QW(WW)
        }), aW, Date.now, this.commandPacer), this.reachLog = new jm(MW, iW, (() => {
          this.beforePanelOpen(this.reachLog)
        }), QW, rW, this.commandPacer), this.passage = new Lm(hW, iW, (() => {
          this.beforePanelOpen(this.passage)
        }), QW), this.tideCharts = new gm(HW, iW, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), QW), this.regulars = new Cm(nW, iW, (() => {
          this.beforePanelOpen(this.regulars)
        }), (WW => {
          this.regulars.takeReturnToReachLog() && !WW && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), QW(WW)
        })), this.hiddenWaters = new Bm(uW), this.dialogue = new Rm(oW, iW, (() => {
          this.beforePanelOpen(this.dialogue)
        }), QW, FW), this.autographs = new Fm(dW, (() => {
          this.beforePanelOpen(this.autographs)
        }), QW), this.mailbox = new HO(bW, (() => eW() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), pW), this.quests.translateWithIcons = null !== OW && void 0 !== OW ? OW : null, this.skills.onLevelUp = WW => {
          this.quests.notify(WW)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new fi(this.map, this.quests, this.compass, iW)
      }
      getHudSnapshot() {
        const WW = this.hudSnapshot,
          iW = this.dailyReward.getHeldCoins();
        return null === WW || iW <= 0 || !("hudPurseCoins" in WW) ? WW : {
          ...WW,
          hudPurseCoins: Math.max(0, WW.hudPurseCoins - iW)
        }
      }
      receiveHud(WW) {
        this.hudSnapshot = WW, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(WW) {
        this.setMenuOpen(!0);
        const iW = WW === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = WW;
        for (const OW of this.panels) OW === WW || iW && OW === this.reachLog || OW.close();
        this.openingPanel = null
      }
      setTranslator(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iW => this.resolveItemName(iW, WW);
        this.quests.translateWithIcons = null !== OW && void 0 !== OW ? OW : null, this.navigation.setTranslator(WW, iW), this.lampLight.setTranslator(WW, iW), this.mailbox.setItemName(mW);
        for (const EW of this.panels) EW.setTranslator(WW, iW, mW)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const WW of this.panels) WW.dispose()
      }
    }
    var mE = OW(1089),
      EE = OW.n(mE),
      NE = OW(25),
      PE = OW(37868),
      LE = OW(4613),
      cE = OW(2032),
      wE = OW(2021),
      tE = OW(35243),
      ZE = OW(1172),
      xE = OW(1526),
      lE = OW(1283);

    function AE(WW) {
      let {
        controller: iW,
        minimap: OW,
        children: mW
      } = WW;
      const EW = (0, xE.g)(Qm, iW.getHudSnapshot()),
        [NW, PW] = (0, YW.useState)(iW.skills.getSnapshot().overallLevel);
      (0, xE.e)(Ci, (WW => {
        PW(WW.overallLevel)
      }));
      const LW = (0, YW.useRef)(null);
      (0, xE.e)(YO, (WW => {
        ! function(WW, iW) {
          if (null === WW || "function" !== typeof WW.animate) return;
          const OW = iW ? 1.35 : 1.15;
          WW.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${OW})`
          }, {
            transform: "scale(1)"
          }], {
            duration: iW ? 320 : 160,
            easing: "ease-out"
          }), WW.classList.toggle("Receiving", !iW), iW && (WW.classList.remove("Shine"), WW.offsetWidth, WW.classList.add("Shine"))
        }(LW.current, WW)
      }));
      const {
        t: cW
      } = (0, ZE.B)(), {
        isTouchScreen: wW
      } = (0, NE.p)(["isTouchScreen"]), [tW, xW] = (0, YW.useState)(null);
      return (0, LE.l)(tW, ".SkyblockRightHud"), null !== EW || OW ? (0, lE.jsx)(PE.h, {
        placement: "topRight",
        children: (0, lE.jsxs)("div", {
          className: EE()("SkyblockRightHud", {
            TouchScreen: wW
          }),
          children: [OW, null !== EW && (0, lE.jsxs)("div", {
            ref: xW,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in EW ? (0, lE.jsx)("div", {
              className: "SkyblockHudHelp",
              children: EW.hudHelpText
            }) : (0, lE.jsxs)(lE.Fragment, {
              children: [(0, lE.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, lE.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, lE.jsx)("strong", {
                    style: {
                      color: ZW.M.cyanUiText
                    },
                    children: cW(EW.hudZoneNameKey)
                  }), null !== NW && (0, lE.jsx)("span", {
                    style: {
                      color: ZW.M.goldUiText
                    },
                    children: cW("skyblockGame:level", {
                      level: (0, tE.g)(NW)
                    })
                  })]
                }), (0, lE.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: LW,
                  children: [(0, lE.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, lE.jsx)(cE.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, tE.g)(EW.hudPurseCoins)]
                })]
              }), EW.hudClockText.length > 0 && (0, lE.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, lE.jsx)(wE.d, {
                  text: EW.hudClockText
                })
              })]
            }), mW, "hudZoneNameKey" in EW && (0, lE.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var bE = OW(39778);

    function jE(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)();
      return (0, lE.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: iW.display.mountPlayer,
        title: OW("skyblockGame:mapYouAreHere"),
        children: (0, lE.jsx)(bE.b, {
          icon: "player"
        })
      })
    }
    const UE = OW(39780),
      kE = Object.fromEntries(UE.keys().map((WW => [WW.replace(/^\.\/(.*)\.png$/, "$1"), UE(WW)])));

    function sE(WW, iW) {
      var OW;
      return null !== (OW = kE[WW]) && void 0 !== OW ? OW : kE[iW]
    }

    function ME(WW) {
      let {
        imageKey: iW,
        fallbackImageKey: OW,
        geometryKey: mW,
        alt: EW,
        className: NW
      } = WW;
      const [PW, LW] = (0, YW.useState)((() => function(WW, iW) {
        return [{
          id: 0,
          imageKey: WW,
          geometryKey: iW,
          phase: "shown"
        }]
      }(iW, mW))), cW = function(WW, iW, OW) {
        const mW = WW[WW.length - 1];
        if (mW.imageKey === iW && mW.geometryKey === OW) return WW;
        const EW = {
          id: mW.id + 1,
          imageKey: iW,
          geometryKey: OW,
          phase: "entering"
        };
        return mW.geometryKey === OW ? [{
          ...mW,
          phase: "leaving"
        }, EW] : [EW]
      }(PW, iW, mW);
      return cW !== PW && LW(cW), (0, lE.jsx)(lE.Fragment, {
        children: cW.map((WW => (0, lE.jsx)("img", {
          className: EE()("SkyblockMapTerrainImage", NW, {
            Entering: "entering" === WW.phase,
            Leaving: "leaving" === WW.phase
          }),
          src: sE(WW.imageKey, OW),
          alt: "leaving" === WW.phase ? "" : EW,
          onAnimationEnd: () => {
            LW((iW => function(WW, iW) {
              return WW.flatMap((WW => WW.id !== iW ? [WW] : "leaving" === WW.phase ? [] : [{
                ...WW,
                phase: "shown"
              }]))
            }(iW, WW.id)))
          }
        }, WW.id)))
      })
    }
    var KE = OW(5238),
      SE = OW(1532);

    function YE(WW) {
      if ("Tab" !== WW.key) return;
      const iW = Array.from(WW.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        OW = iW.indexOf(document.activeElement);
      var mW;
      if (WW.shiftKey && OW <= 0) WW.preventDefault(), null === (mW = iW.at(-1)) || void 0 === mW || mW.focus();
      else if (!WW.shiftKey && (-1 === OW || OW === iW.length - 1)) {
        var EW;
        WW.preventDefault(), null === (EW = iW[0]) || void 0 === EW || EW.focus()
      }
    }

    function yE() {
      const WW = (0, YW.useRef)(null);
      return (0, YW.useCallback)((iW => {
        var OW;
        iW ? (WW.current = document.activeElement, iW.focus()) : null === (OW = WW.current) || void 0 === OW || OW.focus()
      }), [])
    }

    function TE(WW) {
      let {
        percent: iW,
        label: OW,
        levelUpToken: mW,
        colour: EW
      } = WW;
      return (0, lE.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": OW,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": iW,
        "aria-valuetext": OW,
        children: [(0, lE.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${iW/100})`
          }
        }), null !== mW && void 0 !== mW && (0, lE.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": EW
          }
        }, mW)]
      })
    }

    function JE(WW) {
      let {
        mount: iW
      } = WW;
      return (0, lE.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: iW,
        hidden: !0,
        children: (0, lE.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, lE.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, lE.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function hE(WW, iW, OW, mW) {
      (0, YW.useLayoutEffect)((() => {
        const EW = WW.current;
        if (!OW || null === iW || void 0 === iW || !iW.local || !EW) return;
        const NW = Array.from(EW.querySelectorAll(".SkyblockMapNode")),
          PW = [...iW.points, ...iW.portals],
          LW = () => {
            const WW = EW.clientWidth,
              OW = EW.clientHeight,
              LW = NW.map(((EW, NW) => {
                const LW = PW[NW];
                return {
                  id: LW.id,
                  portal: NW >= iW.points.length,
                  x: LW.position[0] * WW / 100,
                  y: LW.position[1] * OW / 100,
                  width: EW.offsetWidth / mW,
                  height: EW.offsetHeight / mW
                }
              })),
              cW = new Map(PW.map(((WW, iW) => [WW.id, NW[iW]])));
            for (const iW of function(WW, iW, OW) {
                const mW = [],
                  EW = [...WW].sort(((WW, iW) => Number(iW.portal) - Number(WW.portal) || WW.id.localeCompare(iW.id)));
                for (const NW of EW) {
                  const WW = WW => Math.max(NW.width / 2, Math.min(iW - NW.width / 2, WW)),
                    EW = WW => Math.max(NW.height / 2, Math.min(OW - NW.height / 2, WW)),
                    PW = [WW(NW.x)],
                    LW = [EW(NW.y)];
                  for (const iW of mW) PW.push(WW(iW.x - (iW.width + NW.width) / 2 - 4), WW(iW.x + (iW.width + NW.width) / 2 + 4)), LW.push(EW(iW.y - (iW.height + NW.height) / 2 - 4), EW(iW.y + (iW.height + NW.height) / 2 + 4));
                  let cW = {
                      ...NW,
                      x: PW[0],
                      y: LW[0]
                    },
                    wW = 1 / 0,
                    tW = 1 / 0;
                  for (const iW of new Set(PW))
                    for (const WW of new Set(LW)) {
                      let OW = 0;
                      for (const PW of mW) OW += Math.max(0, (NW.width + PW.width) / 2 + 4 - Math.abs(iW - PW.x)) * Math.max(0, (NW.height + PW.height) / 2 + 4 - Math.abs(WW - PW.y));
                      const EW = (iW - NW.x) ** 2 + (WW - NW.y) ** 2;
                      (OW < wW || OW === wW && EW < tW) && (cW = {
                        ...NW,
                        x: iW,
                        y: WW
                      }, wW = OW, tW = EW)
                    }
                  mW.push(cW)
                }
                return mW
              }(LW, WW, OW)) {
              const WW = cW.get(iW.id);
              WW.style.left = `${iW.x}px`, WW.style.top = `${iW.y}px`
            }
          };
        LW();
        const cW = new ResizeObserver(LW);
        cW.observe(EW);
        for (const WW of NW) cW.observe(WW);
        return () => {
          cW.disconnect()
        }
      }), [WW, iW, OW, mW])
    }
    var HE = OW(39865),
      nE = OW(39876);

    function uE(WW) {
      var iW, OW, mW, EW;
      let {
        controller: NW,
        navigation: PW
      } = WW;
      const LW = (0, xE.g)(wW, NW.getSnapshot()),
        {
          t: cW
        } = (0, ZE.B)(),
        tW = yE(),
        ZW = LW.presentation,
        xW = (0, YW.useRef)(null),
        lW = (0, YW.useRef)(null),
        AW = Boolean(LW.open && (null === ZW || void 0 === ZW ? void 0 : ZW.local) && ZW.background),
        bW = (0, HE.b)(xW, AW, `${LW.open}|${LW.tab}|${null===ZW||void 0===ZW||null===(iW=ZW.background)||void 0===iW?void 0:iW.geometryKey}`, null !== (OW = null === ZW || void 0 === ZW || null === (mW = ZW.background) || void 0 === mW ? void 0 : mW.ratio) && void 0 !== OW ? OW : 2);
      if (hE(lW, ZW, LW.open, bW.view.zoom), !ZW || !LW.open) return null;
      const jW = ZW.local ? ZW.background : null,
        UW = {
          "--map-ratio": String(null !== (EW = null === jW || void 0 === jW ? void 0 : jW.ratio) && void 0 !== EW ? EW : 2),
          backgroundColor: null === jW || void 0 === jW ? void 0 : jW.colour
        },
        kW = {
          "--map-zoom": String(bW.view.zoom),
          transform: `translate(${100*bW.view.x}%, ${100*bW.view.y}%) scale(${bW.view.zoom})`
        };
      return (0, lE.jsx)(KE.b, {
        show: LW.open,
        close: NW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: tW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, lE.jsx)("h2", {
                id: "skyblockMapTitle",
                children: cW("skyblockGame:map")
              }), ZW.minimap && (0, lE.jsx)("p", {
                children: ZW.minimap.caption
              })]
            }), (0, lE.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((WW => (0, lE.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": WW === LW.tab ? "true" : void 0,
                className: EE()({
                  Selected: WW === LW.tab
                }),
                "aria-pressed": WW === LW.tab,
                onClick: () => {
                  NW.selectTab(WW)
                },
                children: cW("local" === WW ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, WW)))
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: NW.dismiss
            })]
          }), (0, lE.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, lE.jsxs)("div", {
              ref: xW,
              className: EE()("SkyblockMapCanvas", {
                Local: ZW.local,
                Overview: !ZW.local,
                Zoomed: bW.view.zoom > 1
              }),
              style: UW,
              children: [(0, lE.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: AW ? kW : void 0,
                children: (0, lE.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: lW,
                  children: [jW && (0, lE.jsx)(ME, {
                    className: "SkyblockMapTerrain",
                    imageKey: jW.imageKey,
                    fallbackImageKey: jW.fallbackImageKey,
                    geometryKey: jW.geometryKey,
                    alt: jW.label
                  }), ZW.local && (0, lE.jsx)(JE, {
                    mount: PW.display.mountMapSearchArea
                  }), !ZW.local && (0, lE.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: ZW.connections.map((WW => (0, lE.jsx)("line", {
                      className: EE()({
                        Explored: WW.explored
                      }),
                      x1: WW.start[0],
                      y1: WW.start[1],
                      x2: WW.end[0],
                      y2: WW.end[1]
                    }, WW.id)))
                  }), ZW.points.map((WW => {
                    const iW = !ZW.local && WW.thumbnail ? kE[WW.thumbnail] : void 0;
                    return (0, lE.jsxs)("div", {
                      className: EE()("SkyblockMapNode", {
                        Current: WW.current
                      }),
                      style: {
                        left: `${WW.position[0]}%`,
                        top: `${WW.position[1]}%`
                      },
                      children: [(0, lE.jsxs)(SE.f, {
                        className: EE()("SkyblockMapPin", {
                          Unknown: !WW.visited,
                          Current: WW.current
                        }),
                        disabled: LW.pending,
                        onClick: () => {
                          NW.travel(WW.travelKind, WW.travelId)
                        },
                        children: [iW && (0, lE.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: iW,
                          alt: ""
                        }), !iW && (0, lE.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, lE.jsx)(bE.b, {
                            icon: WW.icon
                          })
                        }), (0, lE.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: WW.name
                        })]
                      }), WW.current && (0, lE.jsx)("span", {
                        className: EE()("SkyblockMapHereBadge", {
                          Above: WW.position[1] > 50
                        }),
                        children: cW("skyblockGame:mapYouAreHere")
                      })]
                    }, WW.id)
                  })), ZW.portals.map((WW => (0, lE.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${WW.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${WW.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, lE.jsxs)(SE.f, {
                      className: "SkyblockMapPin",
                      disabled: LW.pending,
                      onClick: () => {
                        NW.travel(WW.travelKind, WW.travelId)
                      },
                      children: [(0, lE.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: WW.colour
                        },
                        "aria-hidden": "true",
                        children: (0, lE.jsx)(bE.b, {
                          icon: WW.icon
                        })
                      }), (0, lE.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: WW.name
                      })]
                    })
                  }, WW.id))), ZW.local && (0, lE.jsx)(jE, {
                    controller: PW
                  })]
                })
              }), AW && (0, lE.jsx)(nE.e, {
                zoom: bW,
                zoomInLabel: cW("skyblockGame:mapZoomIn"),
                zoomOutLabel: cW("skyblockGame:mapZoomOut")
              }), (0, lE.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: LW.feedback
              })]
            })
          }), (0, lE.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [ZW.progress && (0, lE.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, lE.jsx)("span", {
                children: ZW.progress
              }), (0, lE.jsx)(TE, {
                percent: ZW.percent,
                label: ZW.progress
              })]
            }), ZW.noLandmarks && (0, lE.jsx)("span", {
              children: cW("skyblockGame:mapNoLandmarks")
            }), ZW.canTravel && (0, lE.jsx)("span", {
              className: "SkyblockMapHint",
              children: cW("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function oE(WW) {
      let {
        view: iW,
        controller: OW,
        navigation: mW
      } = WW;
      const {
        t: EW
      } = (0, ZE.B)(), {
        isTouchScreen: NW
      } = (0, NE.p)(["isTouchScreen"]);
      return (0, lE.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": EW("skyblockGame:mapLocal"),
        children: [NW && (0, lE.jsx)(SE.f, {
          className: "SkyblockMinimapOpen",
          onClick: OW.showLocal,
          children: EW("skyblockGame:map")
        }), (0, lE.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: iW.colour
          },
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: mW.display.mountTerrain,
            style: {
              width: iW.width,
              height: iW.height
            },
            children: [(0, lE.jsx)(ME, {
              imageKey: iW.imageKey,
              fallbackImageKey: iW.fallbackImageKey,
              geometryKey: iW.geometryKey,
              alt: iW.label
            }), (0, lE.jsx)(JE, {
              mount: mW.display.mountMinimapSearchArea
            }), iW.markers.map((WW => (0, lE.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${WW.position[0]}%`,
                top: `${WW.position[1]}%`,
                color: WW.colour
              },
              title: WW.name,
              children: (0, lE.jsx)(bE.b, {
                icon: WW.icon
              })
            }, WW.id)))]
          }), (0, lE.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: EW("skyblockGame:mapYouAreHere"),
            children: (0, lE.jsx)(bE.b, {
              icon: "player"
            })
          })]
        }), (0, lE.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: iW.caption
        })]
      })
    }

    function dE(WW) {
      let {
        controller: iW
      } = WW;
      return (0, lE.jsxs)("div", {
        className: "SkyblockCompass",
        ref: iW.display.mountCompass,
        children: [(0, lE.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, lE.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, lE.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function eE(WW) {
      let {
        controller: iW,
        surface: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)(), EW = (0, xE.g)(Ci, iW.getSnapshot()), NW = yE();
      return EW.enabled ? (0, lE.jsxs)(lE.Fragment, {
        children: ["hud" === OW && (0, lE.jsx)(PE.h, {
          placement: "statBars",
          children: EW.hud && (0, lE.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": EW.hud.colour
            },
            children: [(0, lE.jsx)(TE, {
              percent: EW.hud.skill.percent,
              label: EW.hud.skill.xp,
              levelUpToken: EW.hud.levelUpToken,
              colour: EW.hud.colour
            }), (0, lE.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, lE.jsxs)("span", {
                children: [EW.hud.skill.label, " \xb7 ", EW.hud.skill.level]
              }), (0, lE.jsx)("span", {
                children: EW.hud.gain
              })]
            })]
          })
        }), "hud" === OW && (0, lE.jsx)(PE.h, {
          children: EW.hud && (0, lE.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, lE.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, lE.jsx)("strong", {
                children: EW.hud.skill.label
              }), (0, lE.jsx)("span", {
                children: EW.hud.gain
              })]
            }), (0, lE.jsx)(TE, {
              percent: EW.hud.skill.percent,
              label: EW.hud.skill.xp,
              levelUpToken: EW.hud.levelUpToken,
              colour: EW.hud.colour
            }), (0, lE.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, lE.jsx)("span", {
                children: EW.hud.skill.level
              }), (0, lE.jsx)("span", {
                children: EW.hud.skill.xp
              })]
            })]
          })
        }), "menu" === OW && (0, lE.jsx)(KE.b, {
          show: EW.open,
          close: iW.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, lE.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: NW,
            onKeyDown: YE,
            children: [(0, lE.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, lE.jsxs)("div", {
                children: [(0, lE.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: mW("skyblockGame:skills")
                }), (0, lE.jsx)("p", {
                  children: mW("skyblockGame:skillsIntro")
                })]
              }), (0, lE.jsx)(SE.l, {
                padIgnore: !0,
                onClick: iW.dismiss
              })]
            }), (0, lE.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, lE.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: EW.skills.map((WW => (0, lE.jsxs)(SE.f, {
                  className: EE()("SkyblockSkillCard", {
                    Selected: WW.selected
                  }),
                  ariaPressed: WW.selected,
                  onClick: () => {
                    iW.select(WW.id)
                  },
                  children: [(0, lE.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, lE.jsx)(cE.b, {
                      itemName: WW.icon,
                      amount: 0
                    })
                  }), (0, lE.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, lE.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, lE.jsx)("strong", {
                        children: WW.label
                      }), (0, lE.jsx)("span", {
                        children: WW.level
                      })]
                    }), (0, lE.jsx)(TE, {
                      percent: WW.percent,
                      label: `${WW.label}: ${WW.xp}`
                    }), (0, lE.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: WW.xp
                    })]
                  })]
                }, WW.id)))
              }), EW.detail && (0, lE.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, lE.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, lE.jsx)(cE.b, {
                    itemName: EW.detail.icon,
                    amount: 0
                  })
                }), (0, lE.jsx)("h3", {
                  children: EW.detail.label
                }), (0, lE.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: EW.detail.level
                }), (0, lE.jsx)("p", {
                  children: EW.detail.description
                }), (0, lE.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, lE.jsx)("strong", {
                    children: mW("skyblockGame:currentBenefit")
                  }), (0, lE.jsx)("span", {
                    children: EW.detail.benefit
                  })]
                }), (0, lE.jsx)(TE, {
                  percent: EW.detail.percent,
                  label: EW.detail.xp
                }), (0, lE.jsx)("p", {
                  children: EW.detail.xp
                }), (0, lE.jsx)("h4", {
                  children: mW("skyblockGame:earnXp")
                }), (0, lE.jsx)("ul", {
                  children: EW.detail.sources.map((WW => (0, lE.jsx)("li", {
                    children: WW
                  }, WW)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var vE = OW(1434),
      gE = OW(5593),
      DE = OW(327);

    function VE(WW) {
      let {
        item: iW
      } = WW;
      return (0, lE.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, lE.jsx)(cE.b, {
          itemName: iW,
          amount: 0
        })
      })
    }

    function pE(WW) {
      let {
        name: iW,
        percent: OW,
        progress: mW
      } = WW;
      return (0, lE.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, lE.jsx)(TE, {
          percent: OW,
          label: `${(0,DE.vb)(iW)}: ${mW}`
        }), (0, lE.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: mW
        })]
      })
    }

    function fE(WW) {
      let {
        subquests: iW,
        showDescriptions: OW = !1
      } = WW;
      return (0, lE.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: iW.map((WW => {
          const iW = OW && "completed" === WW.status,
            mW = (0, lE.jsxs)("li", {
              className: EE()("SkyblockQuestStep", WW.status, {
                JustFinished: WW.justFinished,
                JustUnlocked: WW.justUnlocked
              }),
              tabIndex: iW ? 0 : void 0,
              children: [null !== WW.iconItem && (0, lE.jsx)(VE, {
                item: WW.iconItem
              }), null === WW.iconItem && (0, lE.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === WW.status ? "\u2713" : "skipped" === WW.status ? "\u2212" : "\u25cb"
              }), (0, lE.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, lE.jsx)("strong", {
                  children: (0, lE.jsx)(gE.b, {
                    text: WW.name
                  })
                }), OW && !iW && (0, lE.jsx)("span", {
                  children: (0, lE.jsx)(gE.b, {
                    text: WW.description
                  })
                }), null !== WW.barPercent && (0, lE.jsx)(pE, {
                  name: WW.name,
                  percent: WW.barPercent,
                  progress: WW.progress
                }), null === WW.barPercent && !iW && (0, lE.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: WW.statusLabel
                })]
              })]
            }, WW.id);
          return iW ? (0, lE.jsx)(vE.f, {
            delayShow: 200,
            tooltipInner: (0, lE.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, lE.jsx)("span", {
                children: (0, lE.jsx)(gE.b, {
                  text: WW.description
                })
              }), (0, lE.jsx)("strong", {
                children: WW.statusLabel
              })]
            }),
            children: mW
          }, WW.id) : mW
        }))
      })
    }

    function CE(WW) {
      let {
        quest: iW,
        select: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)(), EW = iW.focusStep;
      return (0, lE.jsxs)(SE.f, {
        className: EE()("SkyblockQuestCard", {
          Selected: iW.selected,
          Tracked: iW.tracked
        }),
        onClick: () => {
          OW(iW.id)
        },
        children: [(0, lE.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, lE.jsx)("strong", {
            children: (0, lE.jsx)(gE.b, {
              text: iW.name
            })
          }), iW.tracked && (0, lE.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: mW("skyblockGame:currentQuest")
          })]
        }), EW && (0, lE.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== EW.iconItem && (0, lE.jsx)(VE, {
            item: EW.iconItem
          }), (0, lE.jsx)(pE, {
            name: EW.name,
            percent: EW.barPercent,
            progress: EW.progress
          })]
        }), (0, lE.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: iW.progress
        })]
      })
    }

    function XE(WW) {
      let {
        controller: iW,
        surface: OW
      } = WW;
      const mW = (0, xE.g)(Ri, iW.getSnapshot()),
        {
          t: EW
        } = (0, ZE.B)(),
        NW = yE();
      return mW.enabled ? (0, lE.jsxs)(lE.Fragment, {
        children: ["hud" === OW && (0, lE.jsx)(lE.Fragment, {
          children: mW.tracked && (0, lE.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: qi,
            children: (0, lE.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [mW.trackedStepPulse > 0 && (0, lE.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, mW.trackedStepPulse), (0, lE.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: EW("skyblockGame:currentQuest")
              }), (0, lE.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, lE.jsx)("strong", {
                  children: (0, lE.jsx)(gE.b, {
                    text: mW.tracked.name
                  })
                }), null !== mW.tracked.clock && (0, lE.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: mW.tracked.clock
                })]
              }), (0, lE.jsx)(fE, {
                subquests: mW.tracked.subquests
              })]
            })
          })
        }), "menu" === OW && (0, lE.jsx)(KE.b, {
          show: mW.open,
          close: iW.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, lE.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: NW,
            onKeyDown: YE,
            children: [(0, lE.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, lE.jsx)("div", {
                children: (0, lE.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: EW("skyblockGame:quests")
                })
              }), (0, lE.jsx)(SE.l, {
                padIgnore: !0,
                onClick: iW.dismiss
              })]
            }), (0, lE.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, lE.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, lE.jsx)("h3", {
                  children: EW("skyblockGame:current")
                }), 0 === mW.active.length && (0, lE.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: EW("skyblockGame:noActiveQuests")
                }), mW.active.map((WW => (0, lE.jsx)(CE, {
                  quest: WW,
                  select: iW.select
                }, WW.id))), (0, lE.jsx)("h3", {
                  children: (0, lE.jsxs)("button", {
                    type: "button",
                    className: EE()("SkyblockQuestSectionToggle", {
                      Expanded: mW.completedExpanded
                    }),
                    "aria-expanded": mW.completedExpanded,
                    onClick: iW.toggleCompleted,
                    children: [(0, lE.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), EW("skyblockGame:completed"), (0, lE.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: mW.completed.length
                    })]
                  })
                }), mW.completedExpanded && 0 === mW.completed.length && (0, lE.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: EW("skyblockGame:noCompletedQuests")
                }), mW.completedExpanded && mW.completed.map((WW => (0, lE.jsx)(CE, {
                  quest: WW,
                  select: iW.select
                }, WW.id)))]
              }), mW.detail && (0, lE.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [mW.detail.completed && (0, lE.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: EW("skyblockGame:completedQuest")
                }), (0, lE.jsx)("h3", {
                  children: (0, lE.jsx)(gE.b, {
                    text: mW.detail.name
                  })
                }), (0, lE.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, lE.jsx)(gE.b, {
                    text: mW.detail.description
                  })
                }), (0, lE.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [mW.detail.progress, null !== mW.detail.clock && (0, lE.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: mW.detail.clock
                  })]
                }), (0, lE.jsx)(fE, {
                  subquests: mW.detail.subquests,
                  showDescriptions: !0
                }), mW.detail.tracked && (0, lE.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: mW.detail.trackLabel
                }), !mW.detail.completed && !mW.detail.tracked && (0, lE.jsx)(SE.n, {
                  onClick: iW.trackSelected,
                  disabled: !mW.detail.canTrack,
                  children: mW.detail.trackLabel
                }), mW.detail.canViewDialogue && (0, lE.jsx)(SE.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: iW.viewDialogue,
                  children: EW("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var BE = OW(1391),
      qE = OW(3637);

    function RE(WW, iW, OW, mW, EW) {
      const NW = WW => "linear" === EW ? WW : {
          YO: EW,
          point: WW
        },
        PW = {};
      for (const [LW, cW] of mW)
        for (const [iW, OW] of Object.entries(WW(LW, cW, NW))) PW[iW] ??= {
          timeline: []
        }, PW[iW].timeline.push(OW);
      return {
        kO: iW,
        loop: OW,
        MO: PW
      }
    }
    const GE = .547,
      IE = .022,
      aE = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      rE = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function zE(WW, iW, OW) {
      const {
        drop: mW = 0,
        shift: EW = 0,
        torso: NW = 0,
        nod: PW = 0,
        tilt: LW = 0,
        legs: cW = [0, 0],
        arms: wW = 0,
        spread: tW = 0
      } = iW, ZW = GE * Math.cos(NW) - IE * Math.sin(NW), xW = GE * Math.sin(NW) + IE * Math.cos(NW), lW = OW([0, -mW, EW]);
      return {
        LowerBody: {
          timeFraction: WW,
          position: lW,
          rotation: OW([0, 0, 0])
        },
        UpperBody: {
          timeFraction: WW,
          position: lW,
          rotation: OW([NW, 0, LW])
        },
        HeadMesh: {
          timeFraction: WW,
          position: OW([0, ZW - GE - mW, xW - IE + EW]),
          rotation: OW([NW + PW, 0, LW])
        },
        LegLeftMesh: {
          timeFraction: WW,
          rotation: OW([cW[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: WW,
          rotation: OW([cW[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: OW([wW, 0, tW])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: OW([wW, 0, -tW])
        }
      }
    }

    function FE(WW, iW, OW) {
      return RE(zE, WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function QE(WW) {
      return "number" === typeof WW ? [WW, WW] : WW
    }

    function WN(WW, iW, OW) {
      const {
        rise: mW = 0,
        shift: EW = 0,
        torso: NW = 0,
        twist: PW = 0,
        tilt: LW = 0,
        nod: cW = 0,
        cock: wW = 0,
        arms: tW = 0,
        spread: ZW = 0
      } = iW, [xW, lW] = QE(tW), [AW, bW] = QE(ZW);
      return {
        TorsoNode: {
          timeFraction: WW,
          position: OW([0, mW, EW]),
          rotation: OW([NW, PW, LW])
        },
        HeadMesh: {
          timeFraction: WW,
          rotation: OW([cW, 0, wW])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: OW([xW, 0, AW])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: OW([lW, 0, -bW])
        }
      }
    }
    const iN = [1.0625, -1, 0];

    function ON(WW) {
      return "number" === typeof WW ? [WW, WW] : WW
    }

    function mN(WW, iW, OW) {
      const {
        drop: mW = 0,
        shift: EW = 0,
        torso: NW = 0,
        tilt: PW = 0,
        nod: LW = 0,
        cock: cW = 0,
        legs: wW = [0, 0],
        arms: tW = 0,
        spread: ZW = 0
      } = iW, [xW, lW] = ON(tW), [AW, bW] = ON(ZW), jW = -NW, UW = -PW, [kW, sW, MW] = function(WW, iW) {
        const [OW, mW, EW] = [-iN[0], iN[1], -iN[2]], NW = OW * Math.cos(iW) - mW * Math.sin(iW), PW = OW * Math.sin(iW) + mW * Math.cos(iW);
        return [NW - OW, -(PW * Math.cos(WW) - EW * Math.sin(WW) - mW), PW * Math.sin(WW) + EW * Math.cos(WW) - EW]
      }(jW, UW), KW = OW([0, -mW, EW]);
      return {
        TorsoNode: {
          timeFraction: WW,
          position: OW([kW, sW - mW, MW + EW]),
          rotation: OW([jW, 0, UW])
        },
        HeadMesh: {
          timeFraction: WW,
          rotation: OW([-LW, 0, -cW])
        },
        ArmLeftMesh: {
          timeFraction: WW,
          rotation: OW([-xW, 0, -AW])
        },
        ArmRightMesh: {
          timeFraction: WW,
          rotation: OW([-lW, 0, bW])
        },
        LegLeftMesh: {
          timeFraction: WW,
          position: KW,
          rotation: OW([-wW[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: WW,
          position: KW,
          rotation: OW([-wW[1], 0, 0])
        }
      }
    }
    var EN = OW(38320),
      NN = OW(39661),
      PN = OW(39881);

    function LN(WW, iW, OW) {
      var mW, EW;
      const NW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return WW + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - WW) * OW
        },
        [PW, LW] = null !== (mW = WW.legs) && void 0 !== mW ? mW : [0, 0],
        [cW, wW] = null !== (EW = iW.legs) && void 0 !== EW ? EW : [0, 0];
      return {
        drop: NW(WW.drop, iW.drop),
        shift: NW(WW.shift, iW.shift),
        torso: NW(WW.torso, iW.torso),
        nod: NW(WW.nod, iW.nod),
        tilt: NW(WW.tilt, iW.tilt),
        legs: [NW(PW, cW), NW(LW, wW)],
        arms: NW(WW.arms, iW.arms),
        spread: NW(WW.spread, iW.spread)
      }
    }
    const cN = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      wN = FE(4400, !0, [
        [0, cN],
        [.16, {
          ...cN,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, cN],
        [.44, {
          ...cN,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, LN(cN, aE, .7)],
        [.66, LN(cN, aE, .78)],
        [.74, LN(cN, rE, .65)],
        [.86, {
          ...cN,
          drop: .14
        }],
        [1, cN]
      ], "catmull-rom-spline"),
      tN = {
        ...cN,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ZN = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      xN = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      lN = {
        caveGolem: wN,
        magmaGolem: FE(3600, !0, [
          [0, tN],
          [.12, {
            ...tN,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...tN,
            tilt: -.08
          }],
          [.4, {
            ...tN,
            tilt: .06,
            drop: .11
          }],
          [.52, LN(tN, aE, .9)],
          [.62, LN(tN, rE, .8)],
          [.7, LN(tN, rE, .45)],
          [.78, LN(tN, rE, .85)],
          [.9, {
            ...tN,
            drop: .17
          }],
          [1, tN]
        ], "catmull-rom-spline"),
        frostWraith: function(WW, iW, OW) {
          return RE(WN, WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ZN],
          [.14, {
            ...ZN,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ZN,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ZN,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ZN,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ZN,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ZN,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ZN,
            rise: .16,
            tilt: -.04
          }],
          [1, ZN]
        ], "catmull-rom-spline"),
        tikiTerror: function(WW, iW, OW) {
          return RE(mN, WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, xN],
          [.16, {
            ...xN,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, xN],
          [.44, {
            ...xN,
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
            ...xN,
            drop: .1
          }],
          [1, xN]
        ], "catmull-rom-spline")
      },
      AN = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      bN = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      jN = Object.fromEntries(Object.entries(lN).map((WW => {
        let [iW, OW] = WW;
        return [iW, (0, PN.e)((0, EN.h)(OW), iW)]
      })));

    function UN(WW) {
      const iW = function(WW) {
        var iW;
        const OW = (0, NN.c)(WW).poseRig;
        return null !== (iW = bN[WW]) && void 0 !== iW ? iW : void 0 === OW ? null : AN[OW]
      }(WW);
      return null === iW ? null : jN[iW]
    }

    function kN(WW) {
      return {
        "--difficulty-colour": WW
      }
    }
    const sN = (0, YW.lazy)((() => (0, qE.b)(OW.e(229).then((() => OW(53703))), (WW => WW.MobPreview))));

    function MN(WW) {
      var iW, OW, mW;
      let {
        picker: EW,
        controller: NW
      } = WW;
      const {
        t: PW
      } = (0, ZE.B)(), LW = yE(), {
        page: cW
      } = EW;
      return (0, lE.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: LW,
        onKeyDown: WW => {
          "ArrowLeft" === WW.key ? (WW.preventDefault(), WW.stopPropagation(), NW.previous()) : "ArrowRight" === WW.key ? (WW.preventDefault(), WW.stopPropagation(), NW.next()) : YE(WW)
        },
        style: kN(cW.colour),
        children: [(0, lE.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, lE.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: EW.dungeonName
          }), (0, lE.jsx)(SE.l, {
            padIgnore: !0,
            onClick: NW.dismiss
          })]
        }), (0, lE.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, lE.jsx)(SE.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !EW.canPrevious,
              onClick: NW.previous,
              children: (0, lE.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, lE.jsx)(BE.c, {
                  name: "angle-up"
                })
              })
            }), (0, lE.jsxs)("div", {
              className: EE()("SkyblockBossPickerBoss", {
                Locked: !cW.unlocked
              }),
              children: [null !== cW.bossMobType && (0, lE.jsx)(YW.Suspense, {
                fallback: (0, lE.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, lE.jsx)(sN, {
                  className: "SkyblockBossPickerModel",
                  mobType: cW.bossMobType,
                  variation: cW.bossMobVariation,
                  animation: null !== (iW = UN(cW.bossMobType)) && void 0 !== iW ? iW : void 0
                })
              }), null === cW.bossMobType && (0, lE.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, lE.jsx)(SE.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !EW.canNext,
              onClick: NW.next,
              children: (0, lE.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, lE.jsx)(BE.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, lE.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [cW.beaten && (0, lE.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), cW.label]
            }), (0, lE.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (OW = cW.bossName) && void 0 !== OW ? OW : "???"
            }), (0, lE.jsxs)("span", {
              className: EE()("SkyblockBossPickerRecord", {
                Locked: null !== cW.lockedHint
              }),
              children: [null !== cW.lockedHintHighlight && (0, lE.jsxs)(lE.Fragment, {
                children: [cW.lockedHintHighlight.before, (0, lE.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: kN(cW.lockedHintHighlight.colour),
                  children: [null !== cW.lockedHintHighlight.icon && (0, lE.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, lE.jsx)(cE.b, {
                      itemName: cW.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), cW.lockedHintHighlight.name]
                }), cW.lockedHintHighlight.after]
              }), null === cW.lockedHintHighlight && (null !== (mW = cW.lockedHint) && void 0 !== mW ? mW : cW.summary)]
            })]
          }), (0, lE.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: EW.pages.map((WW => (0, lE.jsx)("span", {
              className: EE()("SkyblockBossPickerDot", {
                Current: WW.current,
                Locked: !WW.unlocked
              }),
              style: kN(WW.colour)
            }, WW.difficulty)))
          }), (0, lE.jsx)(SE.s, {
            className: "SkyblockBossPickerFight",
            disabled: !cW.unlocked,
            onClick: NW.enter,
            children: PW("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function KN(WW) {
      let {
        dungeon: iW,
        select: OW
      } = WW;
      return (0, lE.jsxs)(SE.f, {
        className: EE()("SkyblockDungeonCard", {
          Selected: iW.selected
        }),
        onClick: () => {
          OW(iW.id)
        },
        children: [(0, lE.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, lE.jsx)("strong", {
            children: iW.name
          }), (0, lE.jsx)("span", {
            children: iW.beatenSummary
          })]
        }), (0, lE.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: iW.difficulties.map((WW => (0, lE.jsxs)("span", {
            className: EE()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: WW.beaten
            }),
            style: kN(WW.colour),
            title: WW.summary,
            children: [WW.beaten && (0, lE.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), WW.label]
          }, WW.difficulty)))
        })]
      })
    }

    function SN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(ri, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE();
      return OW.enabled ? (0, lE.jsxs)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [OW.picker && (0, lE.jsx)(MN, {
          picker: OW.picker,
          controller: iW
        }), !OW.picker && (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: mW("skyblockGame:dungeons")
              }), (0, lE.jsx)("p", {
                children: mW("skyblockGame:dungeonsIntro")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: iW.dismiss
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, lE.jsx)("div", {
              className: "SkyblockDungeonList",
              children: OW.dungeons.map((WW => (0, lE.jsx)(KN, {
                dungeon: WW,
                select: iW.select
              }, WW.id)))
            }), OW.detail && (0, lE.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, lE.jsx)("h3", {
                children: OW.detail.name
              }), (0, lE.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: OW.detail.difficulties.map((WW => (0, lE.jsxs)("li", {
                  className: EE()("SkyblockDungeonRecord", {
                    Beaten: WW.beaten
                  }),
                  children: [(0, lE.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: kN(WW.colour),
                    children: [WW.beaten && (0, lE.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), WW.label]
                  }), (0, lE.jsx)("span", {
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

    function YN(WW) {
      let {
        collection: iW,
        select: OW
      } = WW;
      return (0, lE.jsxs)(SE.f, {
        className: EE()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: iW.selected,
          Locked: iW.locked
        }),
        ariaPressed: iW.selected,
        onClick: () => {
          OW(iW.id)
        },
        children: [(0, lE.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, lE.jsx)(cE.b, {
            itemName: iW.icon,
            amount: 0
          })
        }), (0, lE.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, lE.jsx)("strong", {
              children: iW.name
            }), (0, lE.jsx)("span", {
              children: iW.tier
            })]
          }), (0, lE.jsx)(TE, {
            percent: iW.percent,
            label: `${iW.name}: ${iW.progress}`
          }), (0, lE.jsx)("span", {
            className: "SkyblockSkillXp",
            children: iW.progress
          })]
        })]
      })
    }

    function yN(WW) {
      let {
        collection: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, lE.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, lE.jsx)(cE.b, {
            itemName: iW.icon,
            amount: 0
          })
        }), (0, lE.jsx)("h3", {
          children: iW.name
        }), (0, lE.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: iW.tier
        }), (0, lE.jsx)("p", {
          children: iW.locked ? OW("skyblockGame:collectionLocked") : iW.count
        }), null !== iW.nextReward && (0, lE.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, lE.jsx)("strong", {
            children: OW("skyblockGame:collectionNextReward")
          }), (0, lE.jsx)("span", {
            children: iW.nextReward
          })]
        }), (0, lE.jsx)(TE, {
          percent: iW.percent,
          label: iW.progress
        }), (0, lE.jsx)("p", {
          children: iW.progress
        })]
      })
    }

    function TN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(UO, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE();
      return OW.enabled ? (0, lE.jsx)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: mW("skyblockGame:collections")
              }), (0, lE.jsxs)("p", {
                children: [mW("skyblockGame:collectionsIntro"), " ", OW.tiersUnlocked]
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: iW.dismiss
            })]
          }), (0, lE.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: OW.categories.map((WW => (0, lE.jsxs)(SE.f, {
              className: EE()("SkyblockCollectionCategory", {
                Selected: WW.selected
              }),
              ariaPressed: WW.selected,
              padTabSelected: WW.selected,
              onClick: () => {
                iW.selectCategory(WW.id)
              },
              children: [(0, lE.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, lE.jsx)(cE.b, {
                  itemName: WW.icon,
                  amount: 0
                })
              }), (0, lE.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, lE.jsx)("strong", {
                  children: WW.label
                }), (0, lE.jsx)("span", {
                  children: WW.tiers
                })]
              })]
            }, WW.id)))
          }), (0, lE.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, lE.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: OW.collections.map((WW => (0, lE.jsx)(YN, {
                collection: WW,
                select: iW.select
              }, WW.id)))
            }), OW.detail && (0, lE.jsx)(yN, {
              collection: OW.detail
            })]
          })]
        })
      }) : null
    }
    const JN = ["completed", "active", "available", "locked"],
      hN = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function HN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(nO, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE();
      return OW.enabled ? (0, lE.jsx)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: mW("skyblockDevQuests:title")
              }), (0, lE.jsx)("p", {
                children: mW("skyblockDevQuests:intro")
              })]
            }), (0, lE.jsx)(SE.l, {
              onClick: iW.dismiss
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [JN.map((WW => (0, lE.jsx)("span", {
              className: EE()("SkyblockQuestGraphLegendState", WW),
              children: mW(`skyblockDevQuests:state_${WW}`)
            }, WW))), hN.map((WW => (0, lE.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, lE.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, lE.jsx)("line", {
                  className: EE()("SkyblockQuestGraphEdge", WW),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), mW(`skyblockDevQuests:edge_${WW}`)]
            }, WW)))]
          }), (0, lE.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, lE.jsxs)("div", {
              className: EE()("SkyblockQuestGraphCanvas", {
                Planning: OW.planning
              }),
              style: {
                width: OW.width,
                height: OW.height
              },
              children: [(0, lE.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: OW.width,
                height: OW.height,
                "aria-hidden": "true",
                children: [(0, lE.jsx)("defs", {
                  children: (0, lE.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, lE.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), OW.edges.map((WW => (0, lE.jsx)("path", {
                  className: EE()("SkyblockQuestGraphEdge", WW.kind, {
                    InPlan: WW.inPlan
                  }),
                  d: WW.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, WW.key)))]
              }), OW.nodes.map((WW => (0, lE.jsxs)("button", {
                type: "button",
                className: EE()("SkyblockQuestGraphNode", WW.state, {
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
                  iW.hover(WW.id)
                },
                onMouseLeave: () => {
                  iW.hover(null)
                },
                onFocus: () => {
                  iW.hover(WW.id)
                },
                onBlur: () => {
                  iW.hover(null)
                },
                onClick: () => {
                  iW.jump(WW.id)
                },
                children: [(0, lE.jsx)("strong", {
                  children: WW.name
                }), (0, lE.jsx)("span", {
                  children: WW.detail
                })]
              }, WW.id)))]
            })
          })]
        })
      }) : null
    }
    const nN = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      uN = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${BO}ms`,
        "--forge-duration": "2150ms"
      },
      oN = Array.from({
        length: 18
      }, ((WW, iW) => ({
        "--ember-left": `${(4+92*(.618034*iW%1)).toFixed(1)}%`,
        "--ember-size": 3 + iW % 3 * 2 + "px",
        "--ember-drift": 14 * (iW % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*iW%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*iW%8).toFixed(2)}s`
      })));

    function dN(WW) {
      if (WW.style.removeProperty("--part-size"), null === WW.parentElement || "wrap" === getComputedStyle(WW.parentElement).flexWrap) return;
      const iW = [...WW.children],
        OW = getComputedStyle(WW),
        mW = parseFloat(OW.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        EW = (WW.clientHeight - parseFloat(OW.rowGap) * (iW.length - 1)) / iW.length,
        NW = iW.map((WW => {
          const iW = getComputedStyle(WW),
            OW = WW.querySelector("h3"),
            NW = WW.querySelector(".SkyblockForgeParts");
          if (null === OW || null === NW) return mW;
          const PW = EW - parseFloat(iW.paddingTop) - parseFloat(iW.paddingBottom) - OW.offsetHeight - parseFloat(getComputedStyle(OW).marginBottom),
            LW = parseFloat(getComputedStyle(NW).columnGap),
            cW = NW.children.length;
          let wW = 0;
          for (let mW = 1; mW <= cW; mW++) {
            const WW = Math.ceil(cW / mW);
            wW = Math.max(wW, Math.min((NW.clientWidth - LW * (mW - 1)) / mW, (PW - LW * (WW - 1)) / WW))
          }
          return wW
        }));
      WW.style.setProperty("--part-size", `${Math.floor(Math.max(mW,Math.min(...NW)))}px`)
    }

    function eN(WW) {
      var iW, OW, mW, EW, NW;
      let {
        controller: PW
      } = WW;
      const LW = (0, xE.g)(zO, PW.getSnapshot()),
        {
          t: cW
        } = (0, ZE.B)(),
        wW = yE(),
        tW = function() {
          const WW = (0, YW.useRef)(null),
            iW = (0, YW.useRef)(null);
          return (0, YW.useLayoutEffect)((() => {
            null !== WW.current && dN(WW.current)
          })), (0, YW.useCallback)((OW => {
            var mW;
            null === (mW = iW.current) || void 0 === mW || mW.disconnect(), iW.current = null, WW.current = OW, null !== OW && (iW.current = new ResizeObserver((() => {
              dN(OW)
            })), iW.current.observe(OW))
          }), [])
        }(),
        xW = function(WW) {
          const iW = (0, YW.useRef)(null);
          return (0, YW.useLayoutEffect)((() => {
            const WW = iW.current;
            if (null !== WW) {
              WW.style.removeProperty("font-size");
              for (let iW = 1.7; iW > 1.1 && WW.scrollWidth > WW.clientWidth; iW -= .1) WW.style.fontSize = iW - .1 + "rem"
            }
          }), [WW]), (0, YW.useCallback)((WW => {
            iW.current = WW
          }), [])
        }(null === (iW = LW.preview) || void 0 === iW ? void 0 : iW.name),
        lW = (0, YW.useRef)(null),
        AW = (0, YW.useRef)({}),
        bW = LW.forging,
        jW = null !== (OW = null === bW || void 0 === bW ? void 0 : bW.preview.tier) && void 0 !== OW ? OW : 0,
        UW = null !== (mW = null === bW || void 0 === bW ? void 0 : bW.preview.named) && void 0 !== mW && mW,
        kW = (0, YW.useMemo)((() => {
          return null === bW ? null : {
            flames: (WW = jW, iW = UW, Array.from({
              length: 26 + 6 * WW + (iW ? 20 : 0)
            }, ((WW, iW) => {
              const OW = iW < 6,
                mW = Math.random() * Math.PI * 2,
                EW = OW ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                NW = Math.cos(mW) * EW,
                PW = Math.sin(mW) * EW - 2 - 3 * Math.random(),
                LW = Math.random(),
                [cW, wW, tW] = OW ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : LW < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : LW < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [LW < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": cW,
                "--x0": `${(.15*NW).toFixed(2)}rem`,
                "--y0": `${(.15*PW).toFixed(2)}rem`,
                "--x": `${NW.toFixed(2)}rem`,
                "--y": `${PW.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${wW.toFixed(2)}rem`,
                "--duration": `${Math.round(tW)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: GO(jW, UW)
          };
          var WW, iW
        }), [null === bW || void 0 === bW ? void 0 : bW.id]);
      if (!LW.enabled) return null;
      const sW = LW.preview,
        MW = LW.arriving,
        KW = null !== MW && !MW.sameSword,
        SW = null !== sW && (0, lE.jsx)(cE.b, {
          itemName: sW.baseSword,
          amount: 0,
          enchantmentTier: sW.enchantmentTier
        });
      return (0, lE.jsx)(KE.b, {
        show: LW.open,
        close: PW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: wW,
          onKeyDown: YE,
          children: [(0, lE.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: oN.map(((WW, iW) => (0, lE.jsx)("span", {
              style: WW
            }, iW)))
          }), (0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: cW("skyblockGame:forgeTitle")
              }), (0, lE.jsx)("p", {
                children: cW("skyblockGame:forgeIntro")
              })]
            }), (0, lE.jsx)(SE.l, {
              onClick: PW.dismiss
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, lE.jsx)("div", {
              ref: tW,
              className: EE()("SkyblockForgeSlots", {
                Locked: null !== bW
              }),
              children: LW.slots.map((WW => (0, lE.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, lE.jsx)("h3", {
                  children: WW.label
                }), (0, lE.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: WW.parts.map((iW => (0, lE.jsx)("button", {
                    type: "button",
                    className: EE()("SkyblockForgePart", {
                      Selected: iW.selected,
                      Missing: iW.placeholder
                    }),
                    disabled: iW.placeholder,
                    title: iW.placeholder ? cW("skyblockGame:forgePickParts") : iW.itemName,
                    "aria-pressed": iW.selected,
                    onClick: () => {
                      PW.select(WW.kind, iW.material)
                    },
                    children: (0, lE.jsx)(cE.b, {
                      itemName: iW.itemName,
                      amount: iW.owned
                    })
                  }, iW.material)))
                })]
              }, WW.kind)))
            }), (0, lE.jsxs)("div", {
              className: EE()("SkyblockForgeAnvil", {
                Named: null === sW || void 0 === sW ? void 0 : sW.named
              }),
              style: {
                "--tier": null === sW ? "transparent" : ZW.kb[sW.enchantmentTier]
              },
              children: [(0, lE.jsxs)("div", {
                className: EE()("SkyblockForgeAltar", {
                  Forging: null !== bW
                }),
                style: null === bW ? void 0 : uN,
                children: [(0, lE.jsxs)("div", {
                  className: EE()("SkyblockForgeMount", {
                    Arrive: null !== MW
                  }),
                  children: [null === sW && (0, lE.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, lE.jsx)(cE.b, {
                      itemName: LW.unformedSword,
                      amount: 0
                    })
                  }), null !== sW && (0, lE.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== sW && null === bW && (0, lE.jsx)("div", {
                    ref: lW,
                    className: "SkyblockForgeFloat",
                    children: (0, lE.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: SW
                    })
                  }), null !== sW && (0, lE.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: RO.map(((WW, iW) => (0, lE.jsx)("span", {
                      className: EE()({
                        Rune: "" !== WW.rune
                      }),
                      style: WW.style,
                      children: WW.rune
                    }, iW)))
                  }), null !== bW && null !== kW && (0, lE.jsxs)(lE.Fragment, {
                    children: [(0, lE.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: kW.flames.map(((WW, iW) => (0, lE.jsx)("span", {
                        style: WW
                      }, iW)))
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: AW.current,
                      children: (0, lE.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: SW
                      })
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (jW >= 4 || UW) && (0, lE.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: kW.sparks.map(((WW, iW) => (0, lE.jsx)("span", {
                        style: WW
                      }, iW)))
                    }), (0, lE.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, lE.jsx)("p", {
                  className: EE()("SkyblockForgeStatus", null === (EW = LW.status) || void 0 === EW ? void 0 : EW.tone),
                  children: null === (NW = LW.status) || void 0 === NW ? void 0 : NW.text
                })]
              }), null === sW && (0, lE.jsx)("p", {
                className: EE()("SkyblockForgeName Waiting", {
                  ArriveText: KW
                }),
                children: cW(LW.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== sW && (0, lE.jsx)("h3", {
                ref: xW,
                className: EE()("SkyblockForgeName", {
                  ArriveText: KW
                }),
                title: sW.name,
                children: sW.name
              }), (null === sW || void 0 === sW ? void 0 : sW.named) && (0, lE.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: cW("skyblockGame:forgeSecret")
              }), (0, lE.jsxs)(SE.s, {
                className: "SkyblockForgeButton",
                disabled: !LW.canForge,
                title: null === sW ? void 0 : cW("skyblockGame:forgeCoalOwned", {
                  owned: String(LW.coalOwned)
                }),
                onClick: () => {
                  AW.current = function(WW) {
                    const iW = null === WW ? "none" : getComputedStyle(WW).transform,
                      OW = new DOMMatrixReadOnly("none" === iW ? void 0 : iW);
                    return {
                      "--settle-y": `${OW.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(OW.b,OW.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(lW.current), rO(), PW.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [cW("skyblockGame:forgeButton"), null !== sW && (0, lE.jsxs)("span", {
                  className: EE()("SkyblockForgeCost", {
                    Short: sW.coalShort
                  }),
                  children: [(0, lE.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, lE.jsx)(cE.b, {
                      itemName: vO.b,
                      amount: 0
                    })
                  }), sW.coalCost]
                })]
              })]
            }), (0, lE.jsxs)("div", {
              className: EE()("SkyblockForgeDetails", {
                Named: null === sW || void 0 === sW ? void 0 : sW.named
              }),
              children: [(0, lE.jsx)("p", {
                className: EE()("SkyblockForgeLore", {
                  ArriveText: KW
                }),
                title: null === sW || void 0 === sW ? void 0 : sW.lore,
                children: null === sW || void 0 === sW ? void 0 : sW.lore
              }), (0, lE.jsxs)("dl", {
                className: EE()("SkyblockForgeStats", {
                  ArriveText: KW
                }),
                children: [null === sW && nN.map((WW => (0, lE.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, lE.jsx)("dt", {
                    children: cW(WW)
                  }), (0, lE.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, WW))), null === sW || void 0 === sW ? void 0 : sW.stats.map((WW => (0, lE.jsxs)("div", {
                  className: EE()("SkyblockForgeStat", {
                    Better: WW.better
                  }),
                  children: [(0, lE.jsx)("dt", {
                    children: WW.label
                  }), (0, lE.jsx)("dd", {
                    children: WW.value
                  })]
                }, WW.label)))]
              }), (0, lE.jsx)("ul", {
                className: EE()("SkyblockForgeEffects", {
                  ArriveText: KW
                }),
                children: null === sW || void 0 === sW ? void 0 : sW.effects.map((WW => (0, lE.jsx)("li", {
                  children: WW
                }, WW)))
              })]
            })]
          })]
        })
      })
    }
    var vN = OW(39888);
    const gN = "Doom Rivet",
      DN = "Doom Crest",
      VN = {
        title: "skyblockGame:smugglerTitle",
        intro: "skyblockGame:smugglerIntro",
        buy: "skyblockGame:smugglerBuy",
        justBought: "skyblockGame:smugglerJustBought",
        soldOut: "skyblockGame:smugglerSoldOut",
        amount: "skyblockGame:smugglerAmount",
        rotatesSoon: "skyblockGame:smugglerRotatesSoon",
        rotatesMinutes: "skyblockGame:smugglerRotatesMinutes",
        rotatesHours: "skyblockGame:smugglerRotatesHours"
      };

    function pN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(Wm, iW.getSnapshot()),
        mW = yE();
      return OW.enabled ? (0, lE.jsx)(vN.b, {
        keys: VN,
        open: OW.open,
        onDismiss: iW.dismiss,
        wallet: [{
          itemName: gN,
          amount: OW.rivetsOwned
        }, {
          itemName: DN,
          amount: OW.crestsOwned
        }],
        deals: OW.deals.map((WW => ({
          ...WW,
          prices: [{
            itemName: gN,
            amount: WW.rivets,
            owned: OW.rivetsOwned
          }, {
            itemName: DN,
            amount: WW.crests,
            owned: OW.crestsOwned
          }].filter((WW => {
            let {
              amount: iW
            } = WW;
            return iW > 0
          }))
        }))),
        rotatesAtMs: OW.rotatesAtMs,
        status: OW.status,
        pending: OW.pending,
        boughtCount: OW.boughtCount,
        onBuy: iW.buy,
        panelRef: mW,
        onKeyDown: YE
      }) : null
    }

    function fN(WW) {
      let {
        phase: iW,
        className: OW
      } = WW;
      return (0, lE.jsx)("span", {
        className: EE()("SkyblockMoon", `Moon-${iW}`, OW),
        "aria-hidden": "true"
      })
    }

    function CN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(mm, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)();
      return OW.enabled ? (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: EE()("SkyblockPassageChip", OW.open && "Open"),
          "aria-label": mW("skyblockGame:passageChipLabel", {
            phase: OW.phaseName
          }),
          title: mW("skyblockGame:passageChipLabel", {
            phase: OW.phaseName
          }),
          onMouseDown: WW => {
            WW.preventDefault()
          },
          onClick: iW.toggle,
          children: (0, lE.jsx)(fN, {
            phase: OW.phase
          }, OW.phase)
        })
      }) : null
    }

    function XN(WW) {
      let {
        fish: iW
      } = WW;
      return (0, lE.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, lE.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, lE.jsx)(cE.b, {
            itemName: iW.itemName,
            amount: 0
          })
        }), (0, lE.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: iW.displayName
          }), (0, lE.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: iW.where
          })]
        })]
      })
    }

    function BN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(mm, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE();
      return OW.enabled ? (0, lE.jsx)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, lE.jsx)(fN, {
              phase: OW.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: mW("skyblockGame:passageTitle")
              }), (0, lE.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: OW.phaseName
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: iW.dismiss
            })]
          }), (0, lE.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: mW("skyblockGame:passageIntro")
          }), (0, lE.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, lE.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, lE.jsx)("h3", {
                children: mW("skyblockGame:passageVisiting")
              }), (0, lE.jsx)("ul", {
                className: "SkyblockPassageList",
                children: OW.visitors.map((WW => (0, lE.jsx)(XN, {
                  fish: WW
                }, WW.itemName)))
              })]
            }), (0, lE.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== OW.resting && (0, lE.jsxs)(lE.Fragment, {
                children: [(0, lE.jsx)("h3", {
                  children: mW("skyblockGame:passageResting")
                }), (0, lE.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, lE.jsx)(XN, {
                    fish: OW.resting
                  })
                })]
              }), (0, lE.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, lE.jsx)(fN, {
                  phase: OW.nextPhase
                }), (0, lE.jsx)("span", {
                  children: OW.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function qN() {
      return (0, lE.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((WW => (0, lE.jsx)("i", {
          style: {
            "--sparkle-index": WW
          }
        }, WW)))
      })
    }

    function RN(WW) {
      var iW;
      let {
        charm: OW,
        view: mW,
        controller: EW
      } = WW;
      const {
        t: NW
      } = (0, ZE.B)(), PW = mW.shop, LW = (null === (iW = mW.sparkle) || void 0 === iW ? void 0 : iW.id) === OW.id;
      return (0, lE.jsxs)("li", {
        className: EE()("SkyblockLampLightCharm", OW.owned && "Owned", OW.socketed && "Socketed"),
        children: [LW && (0, lE.jsx)(qN, {}, mW.sparkle.count), (0, lE.jsx)("h4", {
          children: OW.name
        }), (0, lE.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: OW.effect
        }), (0, lE.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: OW.lines.map((WW => (0, lE.jsxs)("li", {
            className: EE()("SkyblockLampLightOddsLine", "better" === WW.tone ? "Better" : "worse" === WW.tone ? "Worse" : "Same"),
            children: [(0, lE.jsx)("span", {
              className: "Before",
              children: WW.before
            }), (0, lE.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, lE.jsx)("span", {
              className: "After",
              children: WW.after
            })]
          }, WW.label)))
        }), (0, lE.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: OW.owned ? OW.socketed ? (0, lE.jsxs)(lE.Fragment, {
            children: [(0, lE.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: NW("skyblockGame:lampLightSocketed")
            }), (0, lE.jsx)(SE.Z, {
              disabled: !mW.canCommand,
              ariaLabel: NW("skyblockGame:lampLightRemoveLabel", {
                charm: OW.name
              }),
              onClick: () => {
                EW.socket(null)
              },
              children: NW("skyblockGame:lampLightRemove")
            })]
          }) : (0, lE.jsx)(SE.f, {
            disabled: !mW.canCommand || !PW.heldRod,
            ariaLabel: NW("skyblockGame:lampLightSocketLabel", {
              charm: OW.name
            }),
            onClick: () => {
              EW.socket(OW.id)
            },
            children: NW("skyblockGame:lampLightSocket")
          }) : (0, lE.jsx)(SE.f, {
            disabled: !mW.canCommand || !OW.affordable,
            ariaLabel: NW("skyblockGame:lampLightBuyLabel", {
              item: OW.name,
              cost: OW.cost
            }),
            onClick: () => {
              EW.buy(OW.id)
            },
            children: OW.cost
          })
        })]
      })
    }

    function GN(WW) {
      var iW;
      let {
        tint: OW,
        view: mW,
        controller: EW
      } = WW;
      const {
        t: NW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("li", {
        className: EE()("SkyblockLampLightTint", OW.wearing && "Wearing"),
        style: {
          "--tint-colour": OW.colour
        },
        children: [(null === (iW = mW.sparkle) || void 0 === iW ? void 0 : iW.id) === OW.id && (0, lE.jsx)(qN, {}, mW.sparkle.count), (0, lE.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, lE.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: OW.name
        }), OW.wearing ? (0, lE.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: NW("skyblockGame:lampLightWearing")
        }) : (0, lE.jsx)(SE.f, {
          disabled: !mW.canCommand || !OW.owned && !OW.affordable,
          ariaLabel: OW.owned ? NW("skyblockGame:lampLightWearLabel", {
            tint: OW.name
          }) : NW("skyblockGame:lampLightBuyLabel", {
            item: OW.name,
            cost: OW.cost
          }),
          onClick: () => {
            OW.owned ? EW.wearTint(OW.id) : EW.buy(OW.id)
          },
          children: OW.owned ? NW("skyblockGame:lampLightWear") : OW.cost
        })]
      })
    }

    function IN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(Um, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = OW.shop;
      return (0, lE.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, lE.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: OW.balance
          }), (0, lE.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": OW.releasing,
            className: EE()("SkyblockLampLightSwitch", OW.releasing && "On"),
            disabled: OW.releasing ? "ready" !== OW.status : !OW.canCommand,
            onClick: () => {
              iW.setRelease(!OW.releasing)
            },
            children: [(0, lE.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, lE.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), mW("skyblockGame:lampLightRelease")]
          }), (0, lE.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: mW("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== OW.notice && (0, lE.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: OW.notice
        }), null !== EW && (0, lE.jsxs)(lE.Fragment, {
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, lE.jsx)("h3", {
              children: mW("skyblockGame:lampLightCharms")
            }), (0, lE.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: EW.oddsFor
            }), (0, lE.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((WW => (0, lE.jsx)("button", {
                type: "button",
                "aria-pressed": OW.situation === WW,
                className: EE()("SkyblockLampLightSituation", OW.situation === WW && "Selected"),
                onClick: () => {
                  iW.setSituation(WW)
                },
                children: mW("open" === WW ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, WW)))
            })]
          }), !EW.heldRod && (0, lE.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: mW("skyblockGame:lampLightHoldRod")
          }), (0, lE.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: EW.charms.map((WW => (0, lE.jsx)(RN, {
              charm: WW,
              view: OW,
              controller: iW
            }, WW.id)))
          }), (0, lE.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, lE.jsx)("h3", {
              children: mW("skyblockGame:lampLightTints")
            })
          }), (0, lE.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, lE.jsxs)("li", {
              className: EE()("SkyblockLampLightTint", "Islands", EW.wearingIslandColours && "Wearing"),
              children: [(0, lE.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, lE.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: mW("skyblockGame:lampLightIslandColours")
              }), EW.wearingIslandColours ? (0, lE.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: mW("skyblockGame:lampLightWearing")
              }) : (0, lE.jsx)(SE.f, {
                disabled: !OW.canCommand,
                ariaLabel: mW("skyblockGame:lampLightWearLabel", {
                  tint: mW("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  iW.wearTint(null)
                },
                children: mW("skyblockGame:lampLightWear")
              })]
            }), EW.tints.map((WW => (0, lE.jsx)(GN, {
              tint: WW,
              view: OW,
              controller: iW
            }, WW.id)))]
          })]
        })]
      })
    }

    function aN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(Um, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)();
      return OW.releasing ? (0, lE.jsx)(PE.h, {
        children: (0, lE.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            iW.setRelease(!1)
          },
          children: [(0, lE.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, lE.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [mW("skyblockGame:lampLightReleasing"), " \xb7 ", OW.balance]
          }), (0, lE.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: mW("skyblockGame:lampLightKeepCatches")
          }), null !== OW.gained && (0, lE.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: OW.gained.text
          }, OW.gained.count)]
        })
      }) : null
    }

    function rN(WW) {
      let {
        island: iW,
        view: OW,
        aim: mW
      } = WW;
      const {
        t: EW
      } = (0, ZE.B)(), NW = iW.featuredFish;
      return (0, lE.jsxs)("li", {
        className: EE()("SkyblockKeepersChairIsland", `Island-${iW.id}`, iW.favoured && "Aimed", !iW.relit && "Dark"),
        children: [(0, lE.jsx)("h3", {
          children: iW.name
        }), iW.relit && null !== NW ? (0, lE.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: EW("skyblockGame:keepersChairTideNotice")
          }), (0, lE.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, lE.jsx)(cE.b, {
              itemName: NW.itemName,
              amount: 0
            })
          }), (0, lE.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: NW.displayName
          })]
        }) : (0, lE.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, lE.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: EW("skyblockGame:keepersChairDark")
          })
        }), iW.relit && (iW.favoured ? (0, lE.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: EW("skyblockGame:keepersChairAimed")
        }) : (0, lE.jsx)(SE.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !OW.canAim,
          ariaLabel: EW("skyblockGame:keepersChairAimLabel", {
            island: iW.name
          }),
          onClick: () => {
            mW(iW.id)
          },
          children: EW("skyblockGame:keepersChairAim")
        }))]
      }, iW.favoured ? OW.aimedCount : 0)
    }

    function zN(WW) {
      let {
        controller: iW,
        lampLight: OW
      } = WW;
      const mW = (0, xE.g)(wm, iW.getSnapshot()),
        EW = (0, xE.g)(Um, OW.getSnapshot()),
        [NW, PW] = (0, YW.useState)("lamp"),
        {
          t: LW
        } = (0, ZE.B)(),
        cW = yE();
      if (!mW.enabled) return null;
      const wW = "light" === NW && EW.enabled;
      return (0, lE.jsx)(KE.b, {
        show: mW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: EE()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", wW && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: cW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: LW("skyblockGame:keepersChairTitle")
              }), (0, lE.jsx)("p", {
                children: LW(wW ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              ariaLabel: LW("skyblockGame:keepersChairClose"),
              onClick: iW.dismiss
            })]
          }), EW.enabled && (0, lE.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((WW => (0, lE.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === WW === wW,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === WW === wW ? "true" : void 0,
              className: EE()("SkyblockKeepersChairTab", "light" === WW === wW && "Selected"),
              onClick: () => {
                PW(WW)
              },
              children: [LW("lamp" === WW ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === WW && (0, lE.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: EW.balance
              })]
            }, WW)))
          }), wW ? (0, lE.jsx)(IN, {
            controller: OW
          }) : (0, lE.jsx)(FN, {
            view: mW,
            controller: iW
          })]
        })
      })
    }

    function FN(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)();
      return (0, lE.jsxs)(lE.Fragment, {
        children: [(0, lE.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: iW.islands.map((WW => (0, lE.jsx)(rN, {
            island: WW,
            view: iW,
            aim: OW.aim
          }, WW.id)))
        }), null !== iW.almanac && (0, lE.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: mW("skyblockGame:passageTitle")
          }), (0, lE.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, lE.jsx)(fN, {
              phase: iW.almanac.phase
            }), iW.almanac.phaseName]
          }), (0, lE.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, lE.jsx)(fN, {
              phase: iW.almanac.nextPhase
            }), iW.almanac.next]
          })]
        }), (0, lE.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: mW("skyblockGame:keepersChairFavour")
          }), iW.aimed && (0, lE.jsx)(SE.Z, {
            className: "SkyblockKeepersChairRest",
            disabled: !iW.canAim,
            onClick: () => {
              OW.aim(null)
            },
            children: mW("skyblockGame:keepersChairRest")
          })]
        }), null !== iW.status && (0, lE.jsx)("p", {
          className: EE()("SkyblockKeepersChairStatus", "refused" === iW.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: iW.status.text
        })]
      })
    }

    function QN(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(Zm, iW.getSnapshot());
      if (!mW.enabled) return null;
      const EW = mW.freshCount > 0 ? OW("skyblockGame:reachLogOpenNews", {
        count: mW.freshCount
      }) : OW("skyblockGame:reachLogOpen");
      return (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsxs)("button", {
          type: "button",
          className: EE()("SkyblockReachLogButton", mW.freshCount > 0 && "HasNews", mW.pending && "Pending"),
          "aria-label": EW,
          title: EW,
          onClick: iW.ask,
          children: [mW.news && (0, lE.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${mW.newsToken}`), (0, lE.jsx)("span", {
            className: EE()("SkyblockReachLogIcon", mW.news && "Jump"),
            "aria-hidden": "true",
            children: (0, lE.jsx)(cE.b, {
              itemName: lm,
              amount: 0
            })
          }, `icon:${mW.newsToken}`), mW.freshCount > 0 && (0, lE.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: mW.freshCount
          })]
        })
      })
    }

    function WP(WW) {
      let {
        gift: iW
      } = WW;
      return (0, lE.jsx)("li", {
        className: EE()("SkyblockRegularsGift", iW.given && "Given"),
        children: iW.text
      })
    }

    function iP(WW) {
      let {
        regular: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("li", {
        className: EE()("SkyblockRegularsCard", iW.tagged ? "Tagged" : "Untagged", iW.resting && "Resting"),
        children: [(0, lE.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: iW.fishName,
            children: (0, lE.jsx)(cE.b, {
              itemName: iW.itemName,
              amount: 0
            })
          }), (0, lE.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, lE.jsx)("h3", {
              children: iW.name
            }), (0, lE.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: iW.fishName
            })]
          })]
        }), (0, lE.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: iW.line
        }), (0, lE.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: iW.size
          }), iW.tagged && (0, lE.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: iW.resting ? OW("skyblockGame:regularsResting") : iW.meetings
          })]
        }), (0, lE.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: iW.chance
        }), (0, lE.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: iW.gifts.map((WW => (0, lE.jsx)(WP, {
            gift: WW
          }, WW.text)))
        }), iW.history.length > 0 && (0, lE.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: iW.history.map(((WW, iW) => (0, lE.jsx)("li", {
            children: WW
          }, iW)))
        })]
      })
    }

    function OP(WW) {
      let {
        controller: iW,
        island: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)(), EW = (0, xE.g)(Dm, iW.getSnapshot()), NW = EW.islands.find((WW => WW.id === OW));
      if (!EW.enabled || void 0 === NW) return null;
      const PW = mW("skyblockGame:regularsOpen");
      return (0, lE.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": PW,
        title: PW,
        onClick: () => {
          iW.openIsland(OW)
        },
        children: [(0, lE.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: mW("skyblockGame:regularsTitle")
        }), NW.regulars.map((WW => (0, lE.jsx)("span", {
          className: EE()("SkyblockRegularsStripIcon", WW.tagged && "Tagged"),
          title: WW.name,
          children: (0, lE.jsx)(cE.b, {
            itemName: WW.itemName,
            amount: 0
          })
        }, WW.id)))]
      })
    }

    function mP(WW) {
      var iW;
      let {
        controller: OW
      } = WW;
      const mW = (0, xE.g)(Dm, OW.getSnapshot()),
        {
          t: EW
        } = (0, ZE.B)(),
        NW = yE();
      if (!mW.enabled) return null;
      const PW = null !== (iW = mW.islands.find((WW => WW.id === mW.selected))) && void 0 !== iW ? iW : null;
      return (0, lE.jsx)(KE.b, {
        show: mW.open,
        close: OW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: NW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: EW("skyblockGame:regularsTitle")
              }), (0, lE.jsx)("p", {
                children: EW("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: OW.dismiss
            })]
          }), (0, lE.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: mW.islands.map((WW => {
              const iW = WW.id === mW.selected;
              return (0, lE.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": iW,
                "data-pad-tab": !0,
                "data-pad-selected": iW ? "true" : void 0,
                className: EE()("SkyblockReachLogTab", `Island-${WW.id}`, iW && "Selected", WW.charm.given && "GoldPage"),
                onClick: () => {
                  OW.selectIsland(WW.id)
                },
                children: (0, lE.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: WW.name
                })
              }, WW.id)
            }))
          }), (0, lE.jsxs)("div", {
            className: EE()("SkyblockRegularsPage", null !== PW && `Island-${PW.id}`),
            role: "tabpanel",
            children: [(0, lE.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: EW("skyblockGame:regularsHow")
            }), null !== PW && (0, lE.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: PW.regulars.map((WW => (0, lE.jsx)(iP, {
                regular: WW
              }, WW.id)))
            })]
          }), null !== PW && (0, lE.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, lE.jsx)("span", {
              className: EE()("SkyblockRegularsCharm", PW.charm.given && "Given"),
              children: PW.charm.text
            })
          })]
        })
      })
    }
    const EP = [{
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
      NP = Array.from({
        length: 6
      }, ((WW, iW) => ({
        "--x": `${(88*(.618034*iW%1)).toFixed(1)}%`,
        "--y": `${(10+37*iW%70).toFixed(1)}%`,
        "--size": 7 + iW % 3 * 3 + "rem",
        "--drift-x": 3 * (iW % 3 - 1) + "rem",
        "--drift-y": 2 * (iW % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + iW % 4 * 3 + "s",
        "--delay": 2.5 * -iW + "s"
      }))),
      PP = Array.from({
        length: 14
      }, ((WW, iW) => ({
        "--left": `${(3+94*((.618034*iW+.3)%1)).toFixed(1)}%`,
        "--size": 4 + iW % 4 * 2 + "px",
        "--sway": iW % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*iW%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*iW%12).toFixed(2)}s`
      }))),
      LP = (0, YW.memo)((function(WW) {
        let {
          island: iW
        } = WW;
        return (0, lE.jsxs)("div", {
          className: EE()("SkyblockReachLogDepths", null !== iW && `Island-${iW}`),
          "aria-hidden": "true",
          children: [EP.map(((WW, iW) => (0, lE.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: WW
          }, `shaft${iW}`))), NP.map(((WW, iW) => (0, lE.jsx)("span", {
            className: EE()("SkyblockReachLogMote", iW % 2 === 1 && "Violet"),
            style: WW
          }, `mote${iW}`))), PP.map(((WW, iW) => (0, lE.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: WW
          }, `bubble${iW}`)))]
        })
      })),
      cP = 100;

    function wP(WW) {
      let {
        view: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)();
      if (null === iW || 0 === iW.total) return null;
      const mW = cP * iW.aspect,
        EW = OW("skyblockGame:hiddenWatersCount", {
          found: iW.found,
          total: iW.total
        });
      return (0, lE.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${OW("skyblockGame:hiddenWatersTitle")}: ${EW}`,
        children: [(0, lE.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${mW}`,
          "aria-hidden": "true",
          children: [iW.islands.map(((WW, iW) => (0, lE.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (WW.left + WW.width / 2) * cP,
            cy: (WW.top + WW.height / 2) * mW,
            rx: WW.width / 2 * cP,
            ry: WW.height / 2 * mW
          }, iW))), iW.pins.map(((WW, iW) => (0, lE.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: WW.left * cP,
            cy: WW.top * mW,
            r: 13
          }, iW)))]
        }), (0, lE.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, lE.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: OW("skyblockGame:hiddenWatersTitle")
          }), (0, lE.jsx)("span", {
            className: iW.found === iW.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: EW
          })]
        })]
      })
    }

    function tP(WW) {
      let {
        view: iW,
        island: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)(), EW = null === iW || void 0 === iW ? void 0 : iW.glimpses.get(OW);
      return void 0 === EW || 0 === EW.length ? null : (0, lE.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, lE.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: mW("skyblockGame:hiddenWatersGlimpsed")
        }), (0, lE.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: EW.map((WW => (0, lE.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, lE.jsx)(cE.b, {
              itemName: WW,
              amount: 0
            })
          }, WW)))
        })]
      })
    }
    const ZP = ["Bronze", "Silver", "Gold"],
      xP = [{
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
      lP = xP.slice(0, 2);

    function AP(WW) {
      return WW ? xP : lP
    }

    function bP(WW) {
      let {
        fish: iW,
        letGoShown: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [ZP.map(((WW, OW) => {
          const EW = OW < iW.marks;
          return (0, lE.jsx)("span", {
            className: EE()("SkyblockReachLogPip", WW, EW && "Earned", EW && iW.fresh && OW === iW.marks - 1 && "Newest"),
            title: mW(xm[OW])
          }, WW)
        })), (0, lE.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), AP(OW).map(((WW, OW) => (0, lE.jsx)("span", {
          className: EE()("SkyblockReachLogRibbon", WW.className, !0 === iW.ribbons[OW] && "Earned"),
          title: mW(WW.titleKey)
        }, WW.className)))]
      })
    }

    function jP(WW) {
      let {
        letGoShown: iW,
        haloShown: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, lE.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: mW("skyblockGame:reachLogMarks"),
          children: [(0, lE.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), mW("skyblockGame:reachLogLegendMarks")]
        }), AP(iW).map((WW => (0, lE.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: mW(WW.titleKey),
          children: [(0, lE.jsx)("span", {
            className: EE()("SkyblockReachLogRibbon", WW.className, "Earned")
          }), mW(WW.legendKey)]
        }, WW.className))), (0, lE.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: mW("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, lE.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), mW("skyblockGame:reachLogLegendGlimmer")]
        }), OW && (0, lE.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: mW("skyblockGame:reachLogHaloTitle"),
          children: [(0, lE.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), mW("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function UP(WW) {
      let {
        returner: iW
      } = WW;
      return (0, lE.jsxs)("div", {
        className: EE()("SkyblockReachLogReturner", iW.back && "Back"),
        children: [(0, lE.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, lE.jsx)(cE.b, {
            itemName: iW.itemName,
            amount: 0
          })
        }), (0, lE.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: iW.line
        })]
      })
    }

    function kP(WW) {
      let {
        fish: iW,
        letGoShown: OW
      } = WW;
      const {
        t: mW
      } = (0, ZE.B)();
      return (0, lE.jsxs)("li", {
        className: EE()("SkyblockReachLogCard", iW.caught ? "Caught" : "Unknown", iW.marks >= 3 && "GoldCard", iW.fresh && "Fresh", iW.visitor && "Visitor"),
        children: [iW.visitor && (0, lE.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: mW("skyblockGame:reachLogVisitor")
        }), iW.fresh && Array.from({
          length: 4
        }, ((WW, iW) => (0, lE.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, iW))), (0, lE.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [iW.halo && (0, lE.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: mW("skyblockGame:reachLogHaloTitle")
          }), (0, lE.jsx)(cE.b, {
            itemName: iW.itemName,
            amount: 0
          }), iW.glimmer && (0, lE.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: mW("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, lE.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: iW.name
        }), (0, lE.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: iW.chance
        }), (0, lE.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: iW.best
        }), (0, lE.jsx)(bP, {
          fish: iW,
          letGoShown: OW
        })]
      })
    }

    function sP(WW) {
      let {
        page: iW,
        letGoShown: OW,
        hiddenWaters: mW
      } = WW;
      const {
        t: EW
      } = (0, ZE.B)();
      return iW.awake ? (0, lE.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: iW.fish.map((WW => (0, lE.jsx)(kP, {
          fish: WW,
          letGoShown: OW
        }, WW.itemName)))
      }) : (0, lE.jsxs)(lE.Fragment, {
        children: [(0, lE.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: EW("skyblockGame:reachLogAsleep")
        }), (0, lE.jsx)(tP, {
          view: mW,
          island: iW.id
        })]
      })
    }

    function MP(WW) {
      var iW, OW;
      let {
        controller: mW,
        regulars: EW,
        hiddenWaters: NW
      } = WW;
      const PW = (0, xE.g)(Zm, mW.getSnapshot()),
        LW = function(WW) {
          return (0, xE.g)(Xm, WW.getSnapshot())
        }(NW),
        cW = (0, xE.g)(Dm, EW.getSnapshot()),
        {
          t: wW
        } = (0, ZE.B)(),
        tW = yE();
      if (!PW.enabled) return null;
      const ZW = null !== (iW = PW.pages.find((WW => WW.id === PW.selected))) && void 0 !== iW ? iW : null;
      return (0, lE.jsx)(KE.b, {
        show: PW.open,
        close: mW.dismiss,
        togglePointerLock: !1,
        className: EE()("SkyblockSkillsOverlay", cW.open && "SkyblockReachLogUnderLedger"),
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: tW,
          onKeyDown: YE,
          children: [(0, lE.jsx)(LP, {
            island: null !== (OW = null === ZW || void 0 === ZW ? void 0 : ZW.id) && void 0 !== OW ? OW : null
          }), (0, lE.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: wW("skyblockGame:reachLogTitle")
              }), (0, lE.jsx)("p", {
                children: wW("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, lE.jsx)(wP, {
              view: LW
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: mW.dismiss
            })]
          }), (0, lE.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: PW.pages.map((WW => {
              const iW = WW.id === PW.selected,
                OW = WW.fish.some((WW => WW.fresh));
              return (0, lE.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": iW,
                "data-pad-tab": !0,
                "data-pad-selected": iW ? "true" : void 0,
                className: EE()("SkyblockReachLogTab", `Island-${WW.id}`, iW && "Selected", !WW.awake && "Asleep", WW.gold && "GoldPage", OW && "HasNews"),
                onClick: () => {
                  mW.selectPage(WW.id)
                },
                children: [(0, lE.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: WW.name
                }), WW.awake && (0, lE.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: wW("skyblockGame:reachLogCaughtCount", {
                    caught: WW.caught,
                    total: WW.total
                  })
                })]
              }, WW.id)
            }))
          }), (0, lE.jsxs)("div", {
            className: EE()("SkyblockReachLogPage", null !== ZW && `Island-${ZW.id}`),
            role: "tabpanel",
            children: [null !== ZW && (0, lE.jsx)(sP, {
              page: ZW,
              letGoShown: PW.letGoShown,
              hiddenWaters: LW
            }), !0 === (null === ZW || void 0 === ZW ? void 0 : ZW.awake) && null !== ZW.returner && (0, lE.jsx)(UP, {
              returner: ZW.returner
            }), !0 === (null === ZW || void 0 === ZW ? void 0 : ZW.awake) && (0, lE.jsx)(OP, {
              controller: EW,
              island: ZW.id
            })]
          }), (0, lE.jsx)("footer", {
            className: EE()("SkyblockReachLogFooter", null !== ZW && `Island-${ZW.id}`, !0 === (null === ZW || void 0 === ZW ? void 0 : ZW.gold) && "GoldPage"),
            children: !0 === (null === ZW || void 0 === ZW ? void 0 : ZW.gold) ? (0, lE.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: wW("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, lE.jsxs)(lE.Fragment, {
              children: [(0, lE.jsx)(jP, {
                letGoShown: PW.letGoShown,
                haloShown: !0 === (null === ZW || void 0 === ZW ? void 0 : ZW.fish.some((WW => WW.halo)))
              }), (0, lE.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: wW("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var KP = OW(5590);

    function SP(WW) {
      let {
        conversation: iW,
        completedLabel: OW
      } = WW;
      return (0, lE.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, lE.jsxs)("header", {
          children: [(0, lE.jsx)("h3", {
            children: iW.questName
          }), iW.completed && (0, lE.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: OW
          })]
        }), iW.lines.map((WW => (0, lE.jsx)(KP.e, {
          display: WW.display
        }, WW.key)))]
      })
    }

    function YP(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(qm, iW.getSnapshot()), EW = yE();
      if (!mW.enabled) return null;
      const NW = !mW.loading && 0 === mW.conversations.length;
      return (0, lE.jsx)(KE.b, {
        show: mW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: OW("skyblockDialogue:title")
              }), (0, lE.jsx)("p", {
                children: OW("skyblockDialogue:intro")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: iW.dismiss
            })]
          }), (0, lE.jsxs)("div", {
            className: EE()("SkyblockDialogueBody", {
              SingleColumn: null !== mW.questFocus || 0 === mW.characters.length
            }),
            children: [null === mW.questFocus && mW.characters.length > 0 && (0, lE.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: mW.characters.map((WW => (0, lE.jsx)(SE.f, {
                className: EE()("SkyblockDialogueCharacter", {
                  Selected: WW.selected
                }),
                onClick: () => {
                  iW.selectCharacter(WW.id)
                },
                children: (0, lE.jsx)(wE.d, {
                  text: WW.styling
                })
              }, WW.id)))
            }), (0, lE.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== mW.questFocus && (0, lE.jsx)(SE.f, {
                className: "SkyblockDialogueBack",
                onClick: iW.showCharacters,
                children: OW("skyblockDialogue:allCharacters")
              }), mW.loading && (0, lE.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: OW("skyblockDialogue:loading")
              }), NW && (0, lE.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: OW(null === mW.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), mW.conversations.map((WW => (0, lE.jsx)(SP, {
                conversation: WW,
                completedLabel: mW.completedLabel
              }, WW.questId)))]
            })]
          })]
        })
      })
    }

    function yP(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(rm, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE();
      return OW.enabled ? (0, lE.jsx)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: mW("skyblockGame:autographBook")
              }), (0, lE.jsx)("p", {
                children: mW("skyblockGame:autographBookIntro")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              onClick: iW.dismiss
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, lE.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, lE.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, lE.jsx)("strong", {
                  children: OW.total
                }), (0, lE.jsx)("span", {
                  children: mW("skyblockGame:autographTotal")
                })]
              }), (0, lE.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, lE.jsx)("strong", {
                  children: OW.rankTotal
                }), (0, lE.jsx)("span", {
                  children: mW("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === OW.entries.length ? (0, lE.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: mW("skyblockGame:autographBookEmpty")
            }) : (0, lE.jsx)("ul", {
              className: "SkyblockAutographList",
              children: OW.entries.map((WW => (0, lE.jsxs)("li", {
                className: EE()("SkyblockAutograph", {
                  Ranked: null !== WW.rank
                }),
                style: null === WW.rank ? void 0 : {
                  color: WW.rank.colour
                },
                children: [null !== WW.rank && (0, lE.jsx)(BE.c, {
                  className: "SkyblockAutographRankIcon",
                  name: WW.rank.icon,
                  kit: (0, BE.e)(WW.rank.icon)
                }), (0, lE.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, lE.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: WW.name
                  }), (0, lE.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== WW.rank && (0, lE.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: WW.rank.label
                    }), (0, lE.jsx)("span", {
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
    const TP = (0, YW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        return (0, lE.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: iW.display.mountWaypoint,
          children: [(0, lE.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, lE.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, lE.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, lE.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, lE.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, lE.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      JP = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function hP(WW) {
      return "next" === WW.phase ? "\u2192" : JP[WW.kind]
    }
    const HP = (0, YW.memo)((function(WW) {
      let {
        controller: iW,
        display: OW
      } = WW;
      const mW = (0, xE.g)(Gi, iW.getNotificationSnapshot()),
        [EW, NW] = (0, YW.useState)(!1);
      return (0, xE.e)("qteStateUpdated", (WW => {
        NW(WW.isActive)
      })), (0, lE.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (EW ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [mW && (0, lE.jsxs)("div", {
          className: `SkyblockQuestNotification ${mW.kind} ${mW.phase}`,
          style: {
            "--quest-notification-duration": `${mW.durationMs}ms`,
            ...mW.accent && {
              "--quest-notification-accent": mW.accent
            }
          },
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (mW.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, lE.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: hP(mW)
            }), mW.iconItem && (0, lE.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, lE.jsx)(cE.b, {
                itemName: mW.iconItem,
                amount: 0
              })
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, lE.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: mW.title
            }), (0, lE.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, lE.jsx)(gE.b, {
                text: mW.name
              })
            }), mW.description && (0, lE.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, lE.jsx)(gE.b, {
                text: mW.description
              })
            }), mW.reward && (0, lE.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, lE.jsx)(gE.b, {
                text: mW.reward
              })
            })]
          })]
        }, mW.token), (null === mW || void 0 === mW ? void 0 : mW.waypointNameKey) && (0, lE.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": mW.waypointNameKey,
          "data-notification-token": mW.token,
          ref: OW.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${mW.token}`)]
      })
    }));

    function nP(WW) {
      const iW = parseInt(WW.replace("#", ""), 16);
      return `${iW>>16&255}, ${iW>>8&255}, ${255&iW}`
    }
    const uP = (0, YW.memo)((function(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(sO, iW.getSnapshot());
      if (!mW) return null;
      const EW = "arrival" === mW.phase;
      return (0, lE.jsxs)("div", {
        className: EE()("SkyblockPortalTransit", {
          Departure: !EW,
          Arrival: EW
        }),
        style: {
          "--portal-rgb": nP(mW.colour),
          "--portal-duration": `${mW.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, lE.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, lE.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            iW.finishArrival(mW.token)
          }
        }), (0, lE.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, lE.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !EW && (0, lE.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: OW("skyblockGame:portalTransitHeading")
          }), (0, lE.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: OW(mW.zoneNameKey)
          })]
        })]
      }, mW.token)
    }));

    function oP() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function dP() {
      const WW = document.querySelector(".SkyblockHudCoins"),
        iW = null === WW || void 0 === WW ? void 0 : WW.getBoundingClientRect();
      return iW && iW.width > 0 ? {
        x: iW.left + Math.min(iW.width, 24) / 2,
        y: iW.top + iW.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function eP(WW) {
      return {
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2
      }
    }

    function vP() {
      var WW;
      const iW = null === (WW = document.querySelector(".HotBar")) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
      return iW && iW.width > 0 ? eP(iW) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function gP(WW) {
      let {
        items: iW,
        origins: OW,
        target: mW
      } = WW;
      return (0, lE.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: iW.map(((WW, iW) => {
          const EW = OW[iW];
          return (0, lE.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${EW.x}px`,
              top: `${EW.y}px`,
              "--item-dx": mW.x - EW.x + "px",
              "--item-dy": mW.y - EW.y + "px",
              "--item-delay": 2e3 + 160 * iW + "ms",
              "--item-flight": "700ms"
            },
            children: (0, lE.jsx)(cE.b, {
              itemName: WW.dailyRewardItemName,
              amount: 0
            })
          }, WW.dailyRewardItemName)
        }))
      })
    }

    function DP(WW, iW) {
      const OW = -Math.PI / 2 + 1.25 * (WW / (iW - 1) * 2 - 1),
        mW = 70 + WW % 3 * 22;
      return {
        x: Math.cos(OW) * mW,
        y: Math.sin(OW) * mW * .7
      }
    }

    function VP(WW) {
      let {
        origin: iW,
        target: OW,
        count: mW
      } = WW;
      const EW = [];
      for (let NW = 0; NW < mW; NW++) {
        const WW = DP(NW, mW);
        EW.push((0, lE.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${iW.x}px`,
            top: `${iW.y}px`,
            "--coin-bx": `${WW.x}px`,
            "--coin-by": `${WW.y}px`,
            "--coin-dx": OW.x - iW.x + "px",
            "--coin-dy": OW.y - iW.y + "px",
            "--coin-delay": `${TO(NW,mW)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, lE.jsx)(cE.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, NW))
      }
      return (0, lE.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: EW
      })
    }

    function pP(WW) {
      let {
        day: iW
      } = WW;
      const OW = yW[iW - 1];
      return (0, lE.jsxs)(lE.Fragment, {
        children: [(0, lE.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, lE.jsx)(cE.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, tE.g)(OW.dailyRewardCoins)]
        }), OW.dailyRewardItems.map((WW => (0, lE.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, lE.jsx)(cE.b, {
            itemName: WW.dailyRewardItemName,
            amount: 0
          }), "\xd7", WW.dailyRewardItemAmount]
        }, WW.dailyRewardItemName)))]
      })
    }

    function fP(WW) {
      let {
        day: iW
      } = WW;
      const OW = JW(iW);
      return (0, lE.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: yW.map(((WW, mW) => {
          const EW = mW + 1;
          return (0, lE.jsxs)("li", {
            className: EE()("SkyblockDailyRewardTile", {
              Claimed: EW < iW && EW !== OW,
              Today: EW === iW,
              Tomorrow: EW === OW,
              Jackpot: EW === TW
            }),
            children: [(0, lE.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: EW
            }), (0, lE.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, lE.jsx)(cE.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, tE.g)(WW.dailyRewardCoins)]
            }), WW.dailyRewardItems.map((WW => (0, lE.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, lE.jsx)(cE.b, {
                itemName: WW.dailyRewardItemName,
                amount: 0
              }), "\xd7", WW.dailyRewardItemAmount]
            }, WW.dailyRewardItemName)))]
          }, EW)
        }))
      })
    }

    function CP(WW) {
      let {
        view: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, YW.useRef)(null), EW = (0, YW.useRef)(null), [NW, PW] = (0, YW.useState)(null);
      (0, YW.useLayoutEffect)((() => {
        var WW;
        const iW = null === (WW = mW.current) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
        if (iW) {
          var OW, NW;
          const WW = Array.from(null !== (OW = null === (NW = EW.current) || void 0 === NW ? void 0 : NW.children) && void 0 !== OW ? OW : [], (WW => eP(WW.getBoundingClientRect())));
          PW({
            origin: eP(iW),
            target: dP(),
            itemOrigins: WW,
            itemTarget: vP()
          })
        }
      }), []);
      const LW = JW(iW.day),
        cW = function(WW, iW) {
          const [OW, mW] = (0, YW.useState)((() => oP() ? WW : 0));
          return (0, YW.useEffect)((() => {
            if (oP()) return;
            const OW = performance.now();
            let EW = 0;
            const NW = PW => {
              const LW = Math.min(Math.max((PW - OW) / iW, 0), 1);
              mW(Math.round(WW * (1 - (1 - LW) ** 3))), LW < 1 && (EW = requestAnimationFrame(NW))
            };
            return EW = requestAnimationFrame(NW), () => {
              cancelAnimationFrame(EW)
            }
          }), [WW, iW]), OW
        }(iW.coins, 450);
      return (0, lE.jsxs)("div", {
        className: EE()("SkyblockDailyReward", {
          Jackpot: iW.day === TW
        }),
        style: {
          "--daily-duration": `${iW.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, lE.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, lE.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, lE.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: OW("skyblockGame:dailyRewardTitle")
            }), (0, lE.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: OW("skyblockGame:dailyRewardDay", {
                day: String(iW.day)
              })
            })]
          }), (0, lE.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: mW,
            children: [(0, lE.jsx)(cE.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, lE.jsxs)("span", {
              children: ["+", (0, tE.g)(cW)]
            })]
          }), iW.items.length > 0 && (0, lE.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: EW,
            children: iW.items.map((WW => (0, lE.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, lE.jsx)(cE.b, {
                itemName: WW.dailyRewardItemName,
                amount: 0
              }), "\xd7", WW.dailyRewardItemAmount]
            }, WW.dailyRewardItemName)))
          }), (0, lE.jsx)(fP, {
            day: iW.day
          }), (0, lE.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [OW("skyblockGame:dailyRewardComeBack"), (0, lE.jsx)(pP, {
              day: LW
            })]
          })]
        }), null !== NW && (0, lE.jsx)(VP, {
          origin: NW.origin,
          target: NW.target,
          count: iW.flyingCoins
        }), null !== NW && NW.itemOrigins.length === iW.items.length && (0, lE.jsx)(gP, {
          items: iW.items,
          origins: NW.itemOrigins,
          target: NW.itemTarget
        })]
      })
    }
    const XP = (0, YW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        const OW = (0, xE.g)(SO, iW.getSnapshot());
        return OW ? (0, lE.jsx)(CP, {
          view: OW
        }, OW.token) : null
      })),
      BP = "Gold Coin";

    function qP(WW) {
      return 650 + 220 * WW
    }

    function RP(WW) {
      return {
        "--letter-delay": `${qP(WW)}ms`,
        "--letter-land": `${qP(WW)+300}ms`
      }
    }

    function GP(WW) {
      let {
        letterCount: iW
      } = WW;
      return (0, lE.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, lE.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, lE.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, lE.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: iW
        }, ((WW, iW) => (0, lE.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: RP(iW),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, iW)))]
      })
    }

    function IP(WW) {
      var iW, OW, mW;
      let {
        letter: EW,
        index: NW
      } = WW;
      const {
        t: PW
      } = (0, ZE.B)(), LW = null !== (iW = null === (OW = EW.items[0]) || void 0 === OW ? void 0 : OW.itemName) && void 0 !== iW ? iW : BP;
      return (0, lE.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: RP(NW),
        children: [(0, lE.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, lE.jsx)(cE.b, {
            itemName: LW,
            amount: 0
          })
        }), (0, lE.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: PW(EW.reasonKey, null !== (mW = EW.reasonParams) && void 0 !== mW ? mW : void 0)
        }), (0, lE.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [EW.coins > 0 && (0, lE.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, lE.jsx)(cE.b, {
              itemName: BP,
              amount: 0
            }), "+", (0, tE.g)(EW.coins)]
          }), EW.items.map(((WW, iW) => (0, lE.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, lE.jsx)(cE.b, {
              itemName: WW.itemName,
              amount: 0
            }), WW.label, " \xd7", WW.amount]
          }, iW)))]
        })]
      })
    }

    function aP(WW) {
      let {
        view: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)();
      return (0, lE.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${iW.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${qP(iW.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, lE.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, lE.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, lE.jsx)(GP, {
              letterCount: iW.letters.length
            }), (0, lE.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: OW("skyblockGame:mailboxTitle")
            })]
          }), (0, lE.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: iW.letters.map(((WW, iW) => (0, lE.jsx)(IP, {
              letter: WW,
              index: iW
            }, iW)))
          }), iW.more > 0 && (0, lE.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: OW("skyblockGame:mailboxMore", {
              count: String(iW.more)
            })
          })]
        })
      })
    }
    const rP = (0, YW.memo)((function(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(hO, iW.getSnapshot());
      return OW ? (0, lE.jsx)(aP, {
        view: OW
      }, OW.token) : null
    }));

    function zP(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(sm, iW.getSnapshot());
      if (null === mW) return null;
      const EW = mW.fullSet ? "empty" === mW.fuelState ? {
        text: OW("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: OW("skyblockGame:magmawardHudFullSet", {
          worn: String(mW.wornCount)
        }),
        tone: "partial"
      };
      return (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsxs)("div", {
          className: EE()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${mW.fuelState}`, {
            "SkyblockMagmawardHud-partial": !mW.fullSet,
            "SkyblockMagmawardHud-armed": mW.fullSet && "empty" !== mW.fuelState
          }),
          children: [null !== mW.flare && (0, lE.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${mW.flare}`
          }, `flare:${mW.flareToken}`), (0, lE.jsx)("div", {
            className: EE()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: mW.setLit
            }),
            children: mW.pieces.map(((WW, iW) => (0, lE.jsx)("div", {
              className: EE()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: WW.worn,
                SkyblockMagmawardPieceJustWorn: WW.justWorn
              }),
              children: (0, lE.jsx)(cE.b, {
                itemName: WW.itemName,
                amount: 0
              })
            }, `${iW}:${WW.wornToken}`)))
          }, `pieces:${mW.setLitToken}`), (0, lE.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, lE.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, lE.jsxs)("div", {
              className: EE()("SkyblockMagmawardFuelCounter", mW.pulse && `SkyblockMagmawardFuelCounter-${mW.pulse}`),
              children: [(0, lE.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, lE.jsx)(cE.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, lE.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: mW.fuel
              })]
            }, `counter:${mW.pulseToken}`), "burn" === mW.pulse && (0, lE.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${mW.pulseToken}`)]
          }), EW && (0, lE.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${EW.tone} SmallTextBold`,
            children: EW.text
          })]
        })
      })
    }

    function FP(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW,
        selectedLanguage: mW
      } = (0, ZE.B)(), EW = (0, xE.g)(Km, iW.getSnapshot());
      return null === EW ? null : (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsxs)("div", {
          className: EE()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: EW.inRange
          }),
          style: {
            "--glowtide-colour": EW.colour
          },
          "aria-label": OW("skyblockGame:glowtideChipLabel"),
          children: [(0, lE.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), EW.inRange ? (0, lE.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: OW("skyblockGame:glowtideChipInRange")
          }, `call:${EW.inRangeToken}`) : (0, lE.jsxs)(lE.Fragment, {
            children: [(0, lE.jsx)("div", {
              ref: iW.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, lE.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: OW("skyblockGame:waypointDistance", {
                distance: MW(EW.distance, mW.code)
              })
            })]
          })]
        })
      })
    }

    function QP(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(Ym, iW.getSnapshot());
      return null === mW ? null : (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsxs)("div", {
          className: EE()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: mW.full
          }),
          "aria-label": OW("skyblockGame:glowMeterLabel", {
            fill: String(mW.fill),
            aZ: String(mW.aZ)
          }),
          children: [mW.burst && (0, lE.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${mW.burstToken}`), (0, lE.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, lE.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${mW.ratio})`
              }
            }), mW.gained && (0, lE.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${mW.gainToken}`), mW.full && Array.from({
              length: 5
            }, ((WW, iW) => (0, lE.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, iW)))]
          }), mW.full && mW.rares.map((WW => (0, lE.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, lE.jsx)(cE.b, {
              itemName: WW,
              amount: 0
            })
          }, WW))), mW.ready && (0, lE.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, lE.jsx)("span", {
              children: OW("skyblockGame:glowMeterReady")
            })
          }, `ready:${mW.fullToken}`)]
        })
      })
    }

    function WL(WW) {
      let {
        controller: iW
      } = WW;
      const {
        t: OW
      } = (0, ZE.B)(), mW = (0, xE.g)(Tm, iW.getSnapshot());
      if (null === mW) return null;
      const EW = "waiting" === mW.phase,
        NW = {
          animationDuration: `${mW.waitMs}ms`,
          animationDelay: -mW.elapsedMs + "ms"
        },
        PW = EW ? void 0 : {
          animationDuration: `${mW.waitMs}ms`
        };
      return (0, lE.jsxs)("div", {
        className: EW ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [EW && (0, lE.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((WW, iW) => (0, lE.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, iW))), (0, lE.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: NW
          }), (0, lE.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, lE.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, lE.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: NW
            })]
          }), (0, lE.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, lE.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: PW,
          children: OW(mW.line)
        }, mW.lineIndex)]
      }, mW.token)
    }

    function iL(WW) {
      let {
        chart: iW,
        showHere: OW,
        className: mW
      } = WW;
      return (0, lE.jsx)("div", {
        className: EE()("SkyblockTideChartGrid", mW, null !== iW.pictureName && "Complete"),
        "aria-hidden": "true",
        children: iW.cells.map(((WW, mW) => {
          const EW = 0 !== (iW.pulseCells & 1 << mW),
            NW = iW.castCell === mW;
          return (0, lE.jsx)("span", {
            className: EE()("SkyblockTideChartCell", `Cell-${WW}`, EW && "Pulse", NW && "Cast", OW && iW.hereCell === mW && "Here")
          }, `${mW}:${EW?`p${iW.pulseToken}`:""}:${NW?`c${iW.castToken}`:""}`)
        }))
      })
    }

    function OL(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(hm, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = OW.chip;
      if (!OW.enabled || null === EW) return null;
      const NW = mW("skyblockGame:tideChartsChipLabel", {
        island: EW.islandName,
        lit: String(EW.lit),
        ink: String(EW.ink)
      });
      return (0, lE.jsx)(PE.h, {
        placement: "statBars",
        children: (0, lE.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: EE()("SkyblockTideChartsChip", OW.open && "Open", null !== EW.pictureName && "Complete"),
          "aria-label": NW,
          title: NW,
          onMouseDown: WW => {
            WW.preventDefault()
          },
          onClick: iW.toggle,
          children: [(0, lE.jsx)(iL, {
            chart: EW,
            showHere: !1,
            className: "Mini"
          }), (0, lE.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [EW.lit, "/", EW.ink]
          })]
        })
      })
    }

    function mL(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, xE.g)(hm, iW.getSnapshot()),
        {
          t: mW
        } = (0, ZE.B)(),
        EW = yE(),
        NW = OW.card;
      return OW.enabled && null !== NW ? (0, lE.jsx)(KE.b, {
        show: OW.open,
        close: iW.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, lE.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: EW,
          onKeyDown: YE,
          children: [(0, lE.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, lE.jsxs)("div", {
              children: [(0, lE.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: mW("skyblockGame:tideChartsTitle")
              }), (0, lE.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: mW("skyblockGame:tideChartsIntro")
              })]
            }), (0, lE.jsx)(SE.l, {
              padIgnore: !0,
              ariaLabel: mW("skyblockGame:tideChartsClose"),
              onClick: iW.dismiss
            })]
          }), OW.tabs.length > 1 && (0, lE.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": mW("skyblockGame:tideChartsIslands"),
            children: OW.tabs.map((WW => (0, lE.jsx)("button", {
              type: "button",
              className: EE()("SkyblockTideChartsTab", WW.selected && "Selected"),
              "aria-pressed": WW.selected,
              onClick: () => {
                iW.Kl(WW.island)
              },
              children: WW.name
            }, WW.island)))
          }), (0, lE.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, lE.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": NW.gridLabel,
              children: (0, lE.jsx)(iL, {
                chart: NW,
                showHere: !0,
                className: "Large"
              })
            }), (0, lE.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, lE.jsx)("h3", {
                children: NW.islandName
              }), (0, lE.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: NW.litText
              }), null === NW.pictureName ? (0, lE.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: mW("skyblockGame:tideChartsPictureHidden")
              }) : (0, lE.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: mW("skyblockGame:tideChartsPictureRevealed", {
                  picture: NW.pictureName
                })
              }, NW.pictureName), (0, lE.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, lE.jsxs)("li", {
                  children: [(0, lE.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), mW("skyblockGame:tideChartsLegendLit")]
                }), (0, lE.jsxs)("li", {
                  children: [(0, lE.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), mW("skyblockGame:tideChartsLegendClear")]
                }), null !== NW.hereCell && (0, lE.jsxs)("li", {
                  children: [(0, lE.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), mW("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, lE.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, lE.jsx)("span", {
                  children: OW.turnsText
                }), (0, lE.jsx)("span", {
                  children: OW.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function EL(WW) {
      var iW;
      let {
        controller: OW
      } = WW;
      const {
        selectedLanguage: mW
      } = (0, ZE.B)(), EW = mW.code;
      (0, YW.useEffect)((() => {
        OW.setTranslator(((WW, iW) => (0, ZE.u)(EW, WW, iW)), EW, ((WW, iW) => (0, ZE.p)(EW, WW, iW)))
      }), [OW, EW]);
      const NW = (0, xE.g)(wW, OW.map.getSnapshot()),
        {
          openInGameMenuName: PW
        } = (0, NE.p)(["openInGameMenuName"]);
      return (0, lE.jsxs)(lE.Fragment, {
        children: [(0, lE.jsx)(HP, {
          controller: OW.quests,
          display: OW.navigation.display
        }), NW.enabled && !PW && (0, lE.jsx)(dE, {
          controller: OW.navigation
        }), (0, lE.jsx)(AE, {
          controller: OW,
          minimap: NW.enabled && (null === (iW = NW.presentation) || void 0 === iW ? void 0 : iW.minimap) && (0, lE.jsx)(oE, {
            view: NW.presentation.minimap,
            navigation: OW.navigation,
            controller: OW.map
          }),
          children: (0, lE.jsx)(XE, {
            controller: OW.quests,
            surface: "hud"
          })
        }), (0, lE.jsx)(TP, {
          controller: OW.navigation
        }), (0, lE.jsx)(uP, {
          controller: OW.portalTransit
        }), (0, lE.jsx)(XP, {
          controller: OW.dailyReward
        }), (0, lE.jsx)(rP, {
          controller: OW.mailbox
        }), (0, lE.jsx)(zP, {
          controller: OW.magmaward
        }), (0, lE.jsx)(FP, {
          controller: OW.glowtide
        }), (0, lE.jsx)(CN, {
          controller: OW.passage
        }), (0, lE.jsx)(OL, {
          controller: OW.tideCharts
        }), (0, lE.jsx)(QP, {
          controller: OW.glowMeter
        }), (0, lE.jsx)(QN, {
          controller: OW.reachLog
        }), (0, lE.jsx)(WL, {
          controller: OW.hushWait
        }), (0, lE.jsx)(aN, {
          controller: OW.lampLight
        }), (0, lE.jsx)(eE, {
          controller: OW.skills,
          surface: "hud"
        })]
      })
    }

    function NL(WW) {
      let {
        controller: iW
      } = WW;
      return (0, lE.jsxs)(lE.Fragment, {
        children: [(0, lE.jsx)(uE, {
          controller: iW.map,
          navigation: iW.navigation
        }), (0, lE.jsx)(eE, {
          controller: iW.skills,
          surface: "menu"
        }), (0, lE.jsx)(XE, {
          controller: iW.quests,
          surface: "menu"
        }), (0, lE.jsx)(SN, {
          controller: iW.dungeons
        }), (0, lE.jsx)(TN, {
          controller: iW.collections
        }), (0, lE.jsx)(HN, {
          controller: iW.questGraph
        }), (0, lE.jsx)(eN, {
          controller: iW.forge
        }), (0, lE.jsx)(pN, {
          controller: iW.smuggler
        }), (0, lE.jsx)(zN, {
          controller: iW.keepersChair,
          lampLight: iW.lampLight
        }), (0, lE.jsx)(MP, {
          controller: iW.reachLog,
          regulars: iW.regulars,
          hiddenWaters: iW.hiddenWaters
        }), (0, lE.jsx)(mP, {
          controller: iW.regulars
        }), (0, lE.jsx)(BN, {
          controller: iW.passage
        }), (0, lE.jsx)(mL, {
          controller: iW.tideCharts
        }), (0, lE.jsx)(YP, {
          controller: iW.dialogue
        }), (0, lE.jsx)(yP, {
          controller: iW.autographs
        })]
      })
    }
    var PL = OW(37559);
    const LL = gO + BO;

    function cL(WW, iW) {
      const OW = [{
        sound: "rpgKnifeSlice1",
        beat: gO,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: gO,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: gO,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: gO,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: gO,
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
        Kl: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: LL + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        Kl: !0,
        beat: LL + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: LL + 60,
        lead: 180,
        volume: .5 + .06 * WW,
        rate: .82 + .07 * WW
      }];
      return WW >= 4 && OW.push({
        sound: "exp_levelup",
        beat: LL + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), iW && OW.push({
        sound: "trumpetFlare",
        beat: LL + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), OW.push({
        sound: "harp_pling",
        beat: DO,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), OW
    }
    class wL {
      constructor(WW) {
        this.deps = WW, this.pending = new Map, this.localHook = null
      }
      hookWaiting(WW, iW) {
        this.pending.delete(WW);
        const OW = this.deps.now();
        if (null === iW) {
          var mW;
          if ((null === (mW = this.localHook) || void 0 === mW ? void 0 : mW.hookId) === WW) {
            const WW = OW >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(WW)
          }
          return
        }
        const EW = OW + iW;
        this.settle(WW, EW) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(WW, {
          untilMs: OW + 1e3,
          biteAtMs: EW
        }))
      }
      getLocalHook() {
        var WW, iW;
        return null !== (WW = null === (iW = this.localHook) || void 0 === iW ? void 0 : iW.hookId) && void 0 !== WW ? WW : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const WW = this.deps.now();
        for (const [iW, {
            untilMs: OW,
            biteAtMs: mW
          }] of this.pending)(this.settle(iW, mW) || WW > OW) && this.pending.delete(iW)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(WW, iW) {
        const OW = this.deps.getLineOwner(WW);
        if (null === OW) return !1;
        if (!this.deps.isLocalPlayer(OW)) return !0;
        if (this.localHook = {
            hookId: WW,
            biteAtMs: iW
          }, !this.deps.isHushWaiting()) {
          const [iW, OW] = this.deps.getHookPosition(WW);
          this.deps.onCastLanded(iW, OW)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var tL = OW(2937);
    const ZL = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      xL = {
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
    class lL {
      constructor(WW) {
        this.deps = WW, this.tell = null
      }
      receiveTell(WW) {
        let {
          biteTellTier: iW
        } = WW;
        this.tell = {
          tier: iW,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(WW) {
        const iW = this.tell;
        if (this.tell = null, !WW) return;
        const OW = null !== iW && this.deps.now() - iW.atMs <= 3e3 ? iW.tier : 0;
        this.deps.vibrate(ZL[OW])
      }
      burstAtHook() {
        const WW = this.tell,
          iW = this.deps.getLocalHookPosition();
        null === WW || WW.burst || null === iW || (WW.burst = !0, this.deps.playParticles(function(WW, iW) {
          let [OW, mW, EW] = iW;
          const {
            count: NW,
            rise: PW,
            colour: LW
          } = xL[WW], [cW, wW, tW] = LW;
          return {
            texture: "glint",
            pos1: [OW - .3, mW, EW - .3],
            pos2: [OW + .3, mW + .2, EW + .3],
            dir1: [-.6, PW, -.6],
            dir2: [.6, 1.4 * PW, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: NW,
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
              minColor: [cW, wW, tW, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [cW, wW, tW, 0],
              maxColor: [cW, wW, tW, 0]
            }],
            blendMode: tL.d.Add,
            hideDist: 48
          }
        }(WW.tier, iW)))
      }
    }
    var AL = OW(1244),
      bL = OW(2042),
      jL = OW(39),
      UL = OW(39890),
      kL = OW(182);
    const sL = kL.f.ZU * kL.f.playerEyeToHeightRatio;
    class ML {
      constructor(WW) {
        this.host = WW, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      yZ(WW) {
        this.lava = WW, this.nextUpdateAt = 0
      }
      hZ() {
        var WW;
        const iW = this.host.now();
        if (iW < this.nextUpdateAt) return;
        this.nextUpdateAt = iW + 250;
        const OW = this.host.playerPosition(),
          mW = OW && this.findNearest([OW[0], OW[1] + sL, OW[2]]);
        if (!mW || mW.distance >= 40) return void this.stop();
        const EW = .5 * Math.min(1, (40 - mW.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(EW) : this.loop = this.host.play("lavaFlow", EW, mW.position, 40 + sL, 9, !0), null === (WW = this.loop) || void 0 === WW || WW.setPosition(mW.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var WW;
        null === (WW = this.loop) || void 0 === WW || WW.stop(), this.loop = null
      }
      findNearest(WW) {
        let iW = -1,
          OW = 1 / 0;
        for (let mW = 0; mW < this.lava.length; mW += 3) {
          const EW = this.lava[mW] - WW[0],
            NW = this.lava[mW + 1] - WW[1],
            PW = this.lava[mW + 2] - WW[2],
            LW = EW * EW + NW * NW + PW * PW;
          LW < OW && (OW = LW, iW = mW)
        }
        return iW < 0 ? null : {
          position: [this.lava[iW], this.lava[iW + 1], this.lava[iW + 2]],
          distance: Math.sqrt(OW)
        }
      }
    }
    var KL = OW(2029),
      SL = OW(39894);
    const YL = {
      "Grey Portal": "Gray"
    };
    for (const uL of ZW.yc) YL[`${uL} Portal`] = uL;
    const yL = Object.keys(YL),
      TL = Object.fromEntries(yL.map((WW => [WW, (0, ZW.Y)(ZW.M[`${(0,ZW.qe)(YL[WW])}Team`])])));
    Object.fromEntries(yL.map((WW => [WW, ZW.M[`${(0,ZW.qe)(YL[WW])}UiText`]])));
    class JL {
      constructor(WW, iW) {
        this.presentation = WW, this.portal = iW, this.unlocked = void 0
      }
      yZ(WW) {
        const iW = !1 === this.unlocked && WW;
        this.unlocked = WW, this.hZ();
        const {
          min: OW,
          max: mW,
          unlockedBlock: EW
        } = this.portal;
        if (iW && this.presentation.hasChunk(...OW)) {
          const [WW, iW, NW] = TL[EW];
          this.presentation.playParticles({
            pos1: [...OW],
            pos2: mW.map((WW => WW + 1)),
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
              minColor: [WW, iW, NW, 1],
              maxColor: [Math.min(255, WW + 55), Math.min(255, iW + 55), Math.min(255, NW + 90), 1]
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
      hZ() {
        var WW;
        const iW = this.unlocked ? this.portal.unlockedBlock : null !== (WW = this.portal.lockedBlock) && void 0 !== WW ? WW : "Light Gray Portal",
          {
            min: OW,
            max: mW
          } = this.portal;
        for (let EW = OW[0]; EW <= mW[0]; EW++)
          for (let WW = OW[1]; WW <= mW[1]; WW++)
            for (let NW = OW[2]; NW <= mW[2]; NW++) this.presentation.hasChunk(EW, WW, NW) && this.presentation.Yk(EW, WW, NW) !== iW && this.presentation.xH(EW, WW, NW, iW)
      }
    }
    var hL = OW(39771);
    OW(39752);
    const HL = {
        farming_1: {
          raises: WW => "NPC" === WW.type && "chef" === WW.variation,
          rise: .4
        },
        fishing_1: {
          raises: WW => "Draugr Warper" === WW.type,
          rise: .4
        }
      },
      nL = (WW, iW, OW, EW) => {
        let {
          localPlayerId: NW
        } = EW;
        const PW = new OE({
          translate: (WW, iW) => (0, ZE.u)(AL.e.get().getCurrentLanguageCode(), WW, iW),
          translateWithIcons: (WW, iW) => (0, ZE.p)(AL.e.get().getCurrentLanguageCode(), WW, iW),
          setMenuOpen: WW => {
            WW ? (0, qW.H)() : (0, qW.m)()
          },
          dismissMenu: qW.q,
          publishSkills: WW => {
            RW.l.iZ(Ci, WW, !0)
          },
          publishQuests: WW => {
            RW.l.iZ(Ri, WW, !0)
          },
          publishQuestNotification: WW => {
            RW.l.iZ(Gi, WW, !0)
          },
          publishDungeons: WW => {
            RW.l.iZ(ri, WW, !0)
          },
          publishCollections: WW => {
            RW.l.iZ(UO, WW, !0)
          },
          publishMap: WW => {
            RW.l.iZ(wW, WW, !0)
          },
          publishHud: WW => {
            RW.l.iZ(Qm, WW, !0)
          },
          publishPortalTransit: WW => {
            RW.l.iZ(sO, WW, !0)
          },
          isLoadingScreenUp: () => NE.d.get("loadingOverlayVisible"),
          publishDailyReward: WW => {
            RW.l.iZ(SO, WW, !0)
          },
          publishMailbox: WW => {
            RW.l.iZ(hO, WW, !0)
          },
          publishQuestGraph: WW => {
            RW.l.iZ(nO, WW, !0)
          },
          publishForge: WW => {
            RW.l.iZ(zO, WW, !0)
          },
          publishSmuggler: WW => {
            RW.l.iZ(Wm, WW, !0)
          },
          publishKeepersChair: WW => {
            RW.l.iZ(wm, WW, !0)
          },
          publishReachLog: WW => {
            RW.l.iZ(Zm, WW, !0)
          },
          publishLampLight: WW => {
            RW.l.iZ(Um, WW, !0)
          },
          publishMagmaward: WW => {
            RW.l.iZ(sm, WW, !0)
          },
          publishGlowtide: WW => {
            RW.l.iZ(Km, WW, !0)
          },
          publishGlowMeter: WW => {
            RW.l.iZ(Ym, WW, !0)
          },
          publishHushWait: WW => {
            RW.l.iZ(Tm, WW, !0)
          },
          publishPassage: WW => {
            RW.l.iZ(mm, WW, !0)
          },
          publishTideCharts: WW => {
            RW.l.iZ(hm, WW, !0)
          },
          publishRegulars: WW => {
            RW.l.iZ(Dm, WW, !0)
          },
          publishHiddenWaters: WW => {
            RW.l.iZ(Xm, WW, !0)
          },
          publishDialogue: WW => {
            RW.l.iZ(qm, WW, !0)
          },
          publishAutographs: WW => {
            RW.l.iZ(rm, WW, !0)
          },
          onDailyRewardStarted: WW => {
            uW.playSound(NW, WW.day === TW ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (WW, iW) => {
            uW.playSound(NW, "exp_collect", .35, 1 + .6 * WW / (iW - 1)), RW.l.iZ(YO, WW === iW - 1)
          },
          onDailyRewardItemLanded: WW => {
            uW.playSound(NW, "pickUp", .6, 1 + .15 * WW)
          },
          onMailboxStarted: () => {
            uW.playSound(NW, "rpgMetalClick", .6, 1), uW.playSound(NW, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            uW.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: jL.j,
          requestTracking: WW => {
            uW.sendCommand(`quests track ${WW}`)
          },
          requestDungeonEnter: (WW, iW) => {
            uW.sendCommand(`dungeonEnter ${WW} ${iW}`)
          },
          requestQuestJump: WW => {
            uW.sendCommand(`${oW} jump ${WW}`)
          },
          requestQuestArrive: (WW, iW) => {
            const OW = `${oW} arrive ${WW}`;
            uW.sendCommand(iW ? `${OW} complete` : OW)
          },
          requestForge: WW => {
            let {
              blade: iW,
              guard: OW,
              handle: mW
            } = WW;
            uW.sendCommand(`forge ${iW} ${OW} ${mW}`)
          },
          requestDialogue: () => {
            uW.sendCommand("quests dialogue")
          },
          requestSmuggle: (WW, iW) => {
            uW.sendCommand(`smuggle ${WW} ${iW}`)
          },
          requestKeepersChairAim: WW => {
            uW.sendCommand(`keeperschair-aim ${WW}`)
          },
          requestReachLogOpen: () => {
            uW.sendCommand("reachlog-open")
          },
          requestLampLight: WW => {
            uW.sendCommand(`${WW}`)
          },
          requestTravel: WW => {
            uW.sendCommand(`map travel ${WW.kind} ${WW.id} ${WW.requestId}`)
          }
        });
        let LW, cW, tW, xW, lW, kW, sW, MW, KW, yW, JW, HW, nW, uW, dW = null;
        const DW = HL[null !== OW && void 0 !== OW ? OW : ""],
          fW = (WW, iW) => {
            null !== DW && void 0 !== DW && DW.raises(iW) && uW.setNametagOffset(WW, DW.rise)
          },
          CW = new lL({
            getLocalHookPosition: () => {
              const WW = IW.getLocalHook();
              return null !== WW && uW.checkValid(WW) ? uW.Vk(WW) : null
            },
            playParticles: WW => {
              uW.playParticleEffect(WW)
            },
            vibrate: WW => {
              GW.g.play("fishBite", WW)
            },
            now: () => performance.now()
          }),
          IW = new wL({
            getLineOwner: WW => uW.checkValid(WW) ? uW.getLineOwner(WW) : null,
            isLocalPlayer: WW => uW.isLocalPlayer(WW),
            getHookPosition: WW => {
              const [iW, , OW] = uW.Vk(WW);
              return [iW, OW]
            },
            isHushWaiting: () => {
              var WW;
              return "waiting" === (null === (WW = PW.hushWait.getSnapshot()) || void 0 === WW ? void 0 : WW.phase)
            },
            onCastLanded: (WW, iW) => {
              PW.tideCharts.castLanded(WW, iW)
            },
            onLocalHookSettled: () => {
              CW.onLocalHookSettled()
            },
            onLocalWaitEnded: WW => {
              CW.onLocalWaitEnded(WW)
            },
            now: () => performance.now()
          }),
          aW = new ML({
            now: () => performance.now(),
            playerPosition: () => uW.checkValid(NW) ? uW.Vk(NW) : null,
            play: (WW, iW, OW, mW, EW, PW) => uW.playSound(NW, WW, iW, 1, {
              FO: OW,
              maxHearDist: mW,
              refDistance: EW
            }, PW)
          }),
          rW = new Map;
        let zW;
        return {
          onCreate: WW => {
            if (uW = WW, dW = new SL.SkyblockEntityFacing(WW, DW ? fW : null), PW.portalTransit.resumeArrival(null !== OW && void 0 !== OW ? OW : null), (null !== OW && void 0 !== OW ? OW : mW) === mW) {
              let WW = -1 / 0;
              zW = RW.l.subscribe("toggleMenu", (iW => {
                const OW = performance.now();
                "inventory|Workbench" !== iW || "cross_to_hub" !== PW.quests.getTrackedQuestId() || OW - WW < 1e4 || (WW = OW, uW.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [mW, EW] of Object.entries(null !== (iW = eW[null !== OW && void 0 !== OW ? OW : ""]) && void 0 !== iW ? iW : {})) {
              var iW;
              rW.set(mW, new JL({
                hasChunk: (iW, OW, mW) => WW.isBlockInLoadedChunk(iW, OW, mW),
                Yk: (iW, OW, mW) => WW.blockIdToBlockName(WW.getBlockId(iW, OW, mW)),
                xH: (iW, OW, mW, EW) => {
                  WW.xH(iW, OW, mW, EW)
                },
                playParticles: iW => {
                  WW.playParticleEffect(iW)
                }
              }, EW))
            }
            nW = (0, KL.f)((WW => (0, yi.f)(WW) ? (0, yi.c)(WW) : null)), PW.resolveItemName = (iW, OW) => {
              const mW = WW.getItemStat(NW, iW, "displayName");
              return mW && "object" === typeof mW && "translationKey" in mW ? OW(mW.translationKey, (0, ZE.o)(mW.params, bL.e.shown)) : "string" === typeof mW ? OW(mW) : iW
            }, PW.quests.notifications.onShown = WW => {
              "quest" === WW ? uW.playSound(NW, "magicAccent1", 1, 1) : "skillLevel" === WW ? uW.playSound(NW, "magicAccent1", 1, .6) : "landmark" === WW ? uW.playSound(NW, "trumpetFlare", 1, .6) : "npcNote" === WW ? uW.playSound(NW, "magicAccent2", .8, 1.1) : "started" === WW ? uW.playSound(NW, (0, PL.h)("bigDrumSwish"), 1, 1) : uW.playSound(NW, (0, PL.h)("rpgHandleSmallLeather"), 1, 1)
            }, PW.forge.onPartSelected = () => {
              uW.playSound(NW, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, PW.forge.onOpened = () => {
              ! function(WW) {
                WW.preloadSounds(cL(4, !0).map((WW => WW.sound)))
              }(WW)
            }, PW.forge.onForgeStarted = (iW, OW, mW) => function(WW, iW, OW, mW, EW) {
              const NW = [],
                PW = [],
                LW = OW => {
                  const mW = WW.playSound(iW, OW.Kl ? (0, PL.h)(OW.sound) : OW.sound, OW.volume, OW.rate);
                  mW && (PW.push(mW), void 0 !== OW.cutAfter && NW.push(setTimeout((() => {
                    mW.fade(mW.getVolume(), 0, 300)
                  }), OW.cutAfter)))
                };
              for (const cW of cL(OW, mW)) EW ? NW.push(setTimeout((() => {
                LW(cW)
              }), Math.max(0, cW.beat - cW.lead / cW.rate))) : cW.beat !== gO && "magicAccent2" !== cW.sound && "trumpetFlare" !== cW.sound || LW(cW);
              return () => {
                for (const WW of NW) clearTimeout(WW);
                for (const WW of PW) WW.fade(WW.getVolume(), 0, 120)
              }
            }(WW, NW, iW, OW, mW), PW.smuggler.onBought = () => {
              (0, UL.e)(uW, NW)
            }, PW.compass.register(new AW(PW.map, !0)), PW.compass.register(new AW(PW.map, !1)), PW.compass.register(new jW(PW.map)), PW.compass.register(new UW((() => PW.quests.getSnapshot().compassTarget)));
            for (const OW of ["enemy", "npc"]) PW.compass.register(new bW(PW.map, OW, (iW => WW.checkValid(iW) ? WW.Vk(iW) : void 0), (iW => WW.isAlive(iW))))
          },
          onAfterRender: (WW, iW) => {
            const OW = uW.checkValid(NW) ? uW.Vk(NW) : null;
            PW.navigation.afterRender(OW, performance.now(), iW), PW.glowtide.afterRender(OW, iW.cameraHeading), PW.tideCharts.afterRender(OW), IW.afterRender()
          },
          onClose: () => {
            var WW, iW, OW, mW, EW, NW, wW, ZW, AW, bW, jW, UW, kW, SW, YW;
            zW && RW.l.unsubscribe(zW), null === (WW = nW) || void 0 === WW || WW(), aW.dispose(), null === (iW = dW) || void 0 === iW || iW.dispose(), IW.dispose(), PW.dispose(), null === (OW = LW) || void 0 === OW || OW(), null === (mW = cW) || void 0 === mW || mW(), null === (EW = tW) || void 0 === EW || EW(), null === (NW = xW) || void 0 === NW || NW(), null === (wW = lW) || void 0 === wW || wW(), null === (ZW = sW) || void 0 === ZW || ZW(), null === (AW = undefined) || void 0 === AW || AW(), null === (bW = MW) || void 0 === bW || bW(), null === (jW = KW) || void 0 === jW || jW(), null === (UW = yW) || void 0 === UW || UW(), null === (kW = JW) || void 0 === kW || kW(), null === (SW = undefined) || void 0 === SW || SW(), null === (YW = HW) || void 0 === YW || YW()
          },
          onPlayerChangeBlock: (WW, iW, mW, EW, LW, cW) => {
            if (WW === NW && "Air" === cW) {
              const WW = uW.getClientOption(NW, "creative");
              PW.skills.predictBlock([iW, mW, EW], LW, WW);
              const cW = function(WW, iW) {
                  if ("hub" === iW || "farming_1" === iW || "mining_1" === iW) return !VW.has(WW) || "hub" !== iW && "mining_1" !== iW ? Object.hasOwn(gW, WW) ? gW[WW] : void 0 : vW
                }(LW, OW),
                wW = ("hub" === OW || "mining_1" === OW) && (ZW.jd.some((WW => WW === LW)) || Object.hasOwn(pW, LW) || "mining_1" === OW && "Block of Coal" === LW);
              WW || void 0 === cW && !wW || uW.xH(iW, mW, EW, null !== cW && void 0 !== cW ? cW : vW)
            }
          },
          onPlayerAttackEntity: (WW, iW) => {
            if (WW !== NW || "Player" !== uW.getEntityType(iW)) return;
            const [OW, mW, EW] = uW.Vk(iW);
            uW.burstParticlePreset("critical", [OW, mW + 1, EW], 10)
          },
          onChangeBlockFail: WW => {
            for (const {
                Zi: iW
              }
              of WW) PW.skills.rejectBlock(iW)
          },
          onReceivedMessageFromServer: (WW, iW) => {
            if ("skyblockGatedPortal" === WW) {
              var OW;
              const [WW, mW] = iW;
              return void(null === (OW = rW.get(WW)) || void 0 === OW || OW.yZ(mW))
            }
            if ("skyblockDailyReward" === WW) return void PW.dailyReward.yZ(iW);
            if ("skyblockMailbox" === WW) return void PW.mailbox.yZ(iW);
            if ("skyblockPortalTransit" === WW) return void PW.portalTransit.yZ(iW);
            if ("skyblockLava" === WW) return void aW.yZ(iW);
            if ("skyblockForge" === WW) return void PW.forge.yZ(iW);
            if ("skyblockMagmaward" === WW) return void PW.magmaward.yZ(iW);
            if ("skyblockGlowtide" === WW) return void PW.glowtide.yZ(iW);
            if ("skyblockGlowMeter" === WW) return void PW.glowMeter.yZ(iW);
            if ("skyblockHushWait" === WW) return void PW.hushWait.yZ(iW);
            if ("skyblockPassage" === WW) {
              const WW = iW;
              return PW.passage.yZ(WW), PW.reachLog.receivePassagePhase(WW.passagePhase), yW ??= (0, SW.y)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: PW.passage.show
              }), void PW.keepersChair.receivePassage({
                keepersChairPassagePhase: WW.passagePhase,
                keepersChairPassageNextPhase: WW.passageNextPhase,
                keepersChairPassageTurnsInMs: WW.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === WW) {
              const WW = iW;
              return PW.tideCharts.yZ(WW), void(WW.tideCharts.length > 0 && (JW ??= (0, SW.y)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: PW.tideCharts.show
              })))
            }
            if (WW === XW.r) {
              var mW;
              const {
                hookId: WW,
                waiting: OW
              } = iW;
              return void IW.hookWaiting(WW, null !== (mW = null === OW || void 0 === OW ? void 0 : OW.remainingMs) && void 0 !== mW ? mW : null)
            }
            if ("skyblockBiteTell" === WW) return void CW.receiveTell(iW);
            if ("skyblockSmuggler" === WW) return void PW.smuggler.yZ(iW);
            if ("skyblockKeepersChair" === WW) return PW.keepersChair.yZ(iW), void PW.lampLight.setAtChair(PW.keepersChair.isAtChair());
            if ("skyblockLampLight" === WW) {
              const WW = iW;
              var EW;
              if (PW.lampLight.yZ(WW), WW.lampLightReleasing) KW ??= (0, SW.y)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  PW.lampLight.setRelease(!1)
                }
              });
              else null === (EW = KW) || void 0 === EW || EW(), KW = void 0;
              return
            }
            if ("skyblockRegulars" === WW) return void PW.regulars.yZ(iW);
            if ("skyblockHiddenWaters" === WW) return void PW.hiddenWaters.yZ(iW);
            if ("skyblockReachLog" === WW) return PW.reachLog.yZ(iW), void(MW ??= (0, SW.y)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: lm
              },
              onClick: PW.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === WW) {
              for (const [WW, OW, mW, EW] of iW) uW.xH(WW, OW, mW, EW);
              return
            }
            if ("skyblockHud" === WW) PW.receiveHud(iW);
            else if ("skyblockMap" === WW) PW.map.yZ(iW);
            else if (WW === BW.e) PW.skills.yZ(iW);
            else if (WW === hW && "dialogue" === iW.kind) PW.dialogue.yZ(iW);
            else if (WW === hW) PW.quests.yZ(iW);
            else if ("skyblockDungeons" === WW) PW.dungeons.yZ(iW);
            else if ("sbCollections" === WW) PW.collections.yZ(iW);
            else if ("skyblockQuestGraph" === WW) PW.questGraph.yZ(iW);
            else {
              if ("skyblockAutographs" !== WW) return;
              PW.autographs.yZ(iW)
            }
            if (!cW && PW.map.getSnapshot().enabled) {
              const WW = (0, SW.y)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: PW.map.show
                }),
                iW = (0, qW.L)(PW.map.show);
              cW = () => {
                WW(), iW()
              }
            }!tW && PW.skills.getSnapshot().enabled && (tW = (0, SW.y)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: PW.skills.show
            })), !sW && PW.collections.getSnapshot().enabled && (sW = (0, SW.y)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: PW.collections.show
            })), !xW && PW.quests.getSnapshot().enabled && (xW = (0, SW.y)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: PW.quests.show
            })), !HW && PW.autographs.getSnapshot().enabled && (HW = (0, SW.y)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: PW.autographs.show
            }));
            const NW = PW.dungeons.getSnapshot().enabled;
            var wW;
            (tW || xW || NW) && kW !== NW && (kW = NW, null === (wW = lW) || void 0 === wW || wW(), lW = (0, SW.y)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: hL
              },
              disabled: !NW,
              panel: !0,
              onClick: PW.dungeons.show
            }));
            LW || (LW = (0, qW.O)((0, YW.createElement)(EL, {
              controller: PW
            }), {
              content: (0, YW.createElement)(NL, {
                controller: PW
              }),
              onClose: PW.close
            }))
          },
          hZ: () => {
            var WW;
            for (const iW of rW.values()) iW.hZ();
            aW.hZ(), null === (WW = dW) || void 0 === WW || WW.hZ(), PW.skills.hZ(), PW.quests.hZ(), PW.dailyReward.hZ(), PW.mailbox.hZ(), PW.map.hZ()
          }
        }
      }
  },
  39726: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      f: () => EW
    });
    var mW = OW(344);
    const EW = (0, mW.Ab)([0, 0, -1]),
      NW = [{
        name: "S",
        bearing: (0, mW.Ab)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, mW.Ab)([-1, 0, 0])
      }, {
        name: "N",
        bearing: EW
      }, {
        name: "W",
        bearing: (0, mW.Ab)([1, 0, 0])
      }]
  },
  39722: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => NW
    });
    var mW = OW(39726);

    function EW(WW, iW, OW) {
      return [100 * (OW.mapMaxX - WW) / (OW.mapMaxX - OW.mapMinX), 100 * (iW - OW.mapMinZ) / (OW.mapMaxZ - OW.mapMinZ)]
    }

    function NW(WW, iW, OW, NW) {
      const [PW, LW] = EW(WW, iW, NW), cW = mW.f - OW;
      return {
        rotation: cW,
        transform: `rotate(${cW}rad) translate(-${PW}%, -${LW}%)`
      }
    }
  },
  37503: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => mW
    });
    const mW = "skyblockSkills",
      EW = "skills_test_gym"
  },
  39785: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39793: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39795: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39803: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39808: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39811: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39819: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39823: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39828: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39830: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39839: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39848: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39857: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39863: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);