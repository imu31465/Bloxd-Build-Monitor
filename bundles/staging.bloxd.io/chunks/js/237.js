export const id = 237;
export const ids = [58, 237];
export const modules = {
  39828: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      c: () => UV
    });
    const JV = new WeakMap;

    function YV(VV, eV) {
      return JV.set(VV, eV), VV
    }

    function UV(VV) {
      var eV;
      return null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
    }
  },
  39687: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV) {
        this.QZ = VV, this.beforeOpen = eV, this.afterClose = xV, this.open = !1, this.ik = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ik && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(VV) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(VV)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ik = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ik || (this.snapshot = this.buildSnapshot(), this.QZ(this.snapshot))
      }
    }
  },
  39833: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      SkyblockEntityFacing: () => pV,
      needsSkyblockEntityFacing: () => yV
    });
    var JV = xV(654),
      YV = xV(4642),
      UV = xV(39842);

    function yV(VV, eV) {
      if (VV.metaInfo === JV.d || "Iron Guardian" === VV.type || "Gold Guardian" === VV.type) return !0;
      if ("Pig" === VV.type) return "sitting" === VV.pose;
      if ("Person" !== VV.meshKind || void 0 === VV.meshOpts) return !1;
      let xV = null === eV || void 0 === eV ? void 0 : eV.get(VV.meshOpts);
      if (void 0 === xV) {
        var UV, yV;
        const JV = (0, YV.h)(VV);
        xV = !1, "pig_napoleon" === (null === JV || void 0 === JV || null === (UV = JV.opts.textures) || void 0 === UV ? void 0 : UV.head) ? xV = !0 : "npc_pig_head" === (null === JV || void 0 === JV || null === (yV = JV.opts.textures) || void 0 === yV ? void 0 : yV.head) && (xV = "sitting" === JV.opts.pose || "sitting"), eV && (eV.size >= 256 && eV.clear(), eV.set(VV.meshOpts, xV))
      }
      return "sitting" === xV ? "sitting" === VV.pose : xV
    }(0, UV.d)("skyblock", ((VV, eV) => {
      eV.setFacingTolerance(yV(VV) ? 0 : null)
    }));
    class pV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = VV, this.alsoVisit = eV, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = VV => {
          var eV;
          const xV = this.api.getEntityInfo(VV);
          xV && (yV(xV, this.meshFacingCache) && (this.api.setFacingTolerance(VV, 0), this.nextFacing.add(VV)), null === (eV = this.alsoVisit) || void 0 === eV || eV.call(this, VV, xV))
        }
      }
      iZ() {
        const {
          api: VV
        } = this, eV = this.nextFacing;
        VV.forEachEntity(this.visit);
        for (const xV of this.facing) eV.has(xV) || VV.setFacingTolerance(xV, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = eV
      }
      dispose() {
        for (const VV of this.facing) this.api.setFacingTolerance(VV, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39671: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => op
    });
    const JV = "island";
    var YV = xV(39678);

    function UV(VV, eV, xV) {
      const UV = "local" === eV,
        pV = VV.background,
        QV = eV => pV ? (0, YV.c)(eV[0] - VV.mapOrigin[0], eV[2] - VV.mapOrigin[2], pV.bounds) : [50, 50],
        nV = (VV.insideDungeon ? [] : VV.landmarks).map((VV => {
          var eV, JV;
          return {
            id: VV.id,
            name: xV(VV.visited && VV.nameKey ? null !== (eV = VV.mapLabelKey) && void 0 !== eV ? eV : VV.nameKey : "skyblockGame:mapUnknown"),
            icon: VV.visited && null !== (JV = VV.icon) && void 0 !== JV ? JV : "unknown",
            visited: VV.visited,
            current: !1,
            position: QV(VV.position),
            travelKind: "landmark",
            travelId: VV.id
          }
        })),
        wV = VV.zones.map((eV => {
          var JV;
          return {
            id: eV.id,
            name: xV(eV.visited && eV.nameKey ? eV.nameKey : "skyblockGame:mapUnknown"),
            icon: eV.visited && null !== (JV = eV.icon) && void 0 !== JV ? JV : "unknown",
            visited: eV.visited,
            current: eV.id === VV.zoneId,
            position: eV.position,
            thumbnail: eV.visited ? eV.id : void 0,
            travelKind: "zone",
            travelId: eV.id
          }
        })),
        ZV = VV.insideDungeon || !pV ? [] : VV.portals.map((VV => {
          var eV;
          return {
            id: VV.id,
            name: xV(null !== (eV = VV.nameKey) && void 0 !== eV ? eV : "skyblockGame:mapUnknown"),
            icon: VV.visited ? "dungeons" === VV.destination ? "portal_orange" : "portal" : "unknown",
            visited: VV.visited,
            current: !1,
            position: QV(VV.position),
            colour: VV.colour,
            travelKind: "zone",
            travelId: VV.destination
          }
        })),
        vV = UV ? nV : wV,
        rV = vV.filter((VV => VV.visited)).length,
        kV = pV ? (pV.bounds.mapMaxX - pV.bounds.mapMinX) / (pV.bounds.mapMaxZ - pV.bounds.mapMinZ) : 2,
        bV = pV ? JSON.stringify([pV.bounds, VV.mapOrigin]) : "";
      return {
        local: UV,
        points: vV,
        portals: UV ? ZV : [],
        progress: vV.length ? xV("skyblockGame:mapDiscovered", {
          current: String(rV),
          total: String(vV.length)
        }) : null,
        percent: vV.length ? 100 * rV / vV.length : 0,
        canTravel: [...vV, ...UV ? ZV : []].some((VV => VV.visited && !VV.current)),
        noLandmarks: UV && !VV.insideDungeon && 0 === nV.length,
        background: pV ? {
          imageKey: pV.imageKey,
          fallbackImageKey: VV.zoneId,
          geometryKey: bV,
          label: xV(pV.labelKey),
          colour: pV.backgroundColour,
          ratio: kV
        } : null,
        connections: yV(VV.zones),
        minimap: pV ? {
          imageKey: pV.imageKey,
          fallbackImageKey: VV.zoneId,
          geometryKey: bV,
          label: xV(pV.labelKey),
          colour: pV.backgroundColour,
          caption: xV(VV.zoneId === JV ? "skyblockGame:zoneIsland" : pV.labelKey),
          width: (pV.bounds.mapMaxX - pV.bounds.mapMinX) / pV.minimapSpan * 100 + "%",
          height: (pV.bounds.mapMaxZ - pV.bounds.mapMinZ) / pV.minimapSpan * 100 + "%",
          markers: [...nV, ...ZV]
        } : null
      }
    }

    function yV(VV) {
      const eV = new Set;
      return VV.flatMap((xV => xV.connections.flatMap((JV => {
        const YV = VV.find((VV => VV.id === JV)),
          UV = [xV.id, JV].sort().join("|");
        return !YV || eV.has(UV) ? [] : (eV.add(UV), [{
          id: `${xV.id}-${JV}`,
          start: xV.position,
          end: YV.position,
          explored: xV.visited && YV.visited
        }])
      }))))
    }
    var pV = xV(39687);
    class QV extends pV.c {}
    const nV = "skyblockMapView";
    class wV extends QV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(VV, JV, YV), this.requestTravel = eV, this.translate = xV, this.now = UV, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = VV => {
          this.tab = VV, this.feedbackKey = "", this.emit()
        }, this.travel = (VV, eV) => {
          if (!this.map || this.pending || this.ik) return;
          const xV = ("zone" === VV ? this.map.zones : this.map.landmarks).find((VV => VV.id === eV));
          if (xV) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in xV && !xV.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (xV.visited)
              if ("zone" === VV && eV === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const xV = ++this.nextRequestId;
                this.pending = {
                  requestId: xV,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: VV,
                  id: eV,
                  requestId: xV
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
      setTranslator(VV) {
        this.translate = VV, this.emit()
      }
      RZ(VV) {
        var eV;
        if (!this.ik)
          if ("entities" !== VV.kind)
            if ("open" !== VV.kind) {
              var xV, JV;
              if ("snapshot" === VV.kind)(null === (xV = VV.snapshot) || void 0 === xV ? void 0 : xV.zoneId) !== (null === (JV = this.map) || void 0 === JV ? void 0 : JV.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = VV.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === VV.kind) {
                var YV;
                VV.requestId === (null === (YV = this.pending) || void 0 === YV ? void 0 : YV.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (VV.requestId === (null === (eV = this.pending) || void 0 === eV ? void 0 : eV.requestId)) {
                var UV;
                this.pending = null, this.feedbackKey = null !== (UV = VV.errorKey) && void 0 !== UV ? UV : "", null === VV.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = VV.entities
      }
      iZ() {
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
          presentation: this.map ? UV(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var ZV = xV(375);
    const vV = 67.5 * Math.PI / 180;

    function rV(VV, eV) {
      const xV = Math.abs(VV);
      if (xV > vV || eV.trackHalfWidth <= 0) return null;
      const JV = eV.trackHalfWidth,
        YV = eV.screenHalfWidth / (eV.tanHalfFovX * Math.max(.5, Math.cos(eV.pitch))),
        UV = Math.min(Math.atan(.6 * JV / YV), .75 * vV),
        yV = YV * Math.tan(UV);
      let pV;
      if (xV <= UV) pV = YV * Math.tan(xV);
      else {
        const VV = vV - UV,
          eV = Math.max(0, YV * VV / (Math.cos(UV) ** 2 * (JV - yV)) - 1),
          QV = (xV - UV) / VV;
        pV = yV + (JV - yV) * (1 + eV) * QV / (1 + eV * QV)
      }
      return 50 + Math.sign(VV) * pV * 50 / JV
    }
    class kV {
      constructor(VV, eV) {
        this.map = VV, this.visited = eV, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = eV ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const VV = this.map.getSnapshot().map;
        return !VV || VV.insideDungeon ? [] : VV.landmarks.filter((VV => VV.visited === this.visited)).map((VV => {
          var eV, xV;
          return {
            id: `landmark:${VV.id}`,
            position: VV.position,
            icon: null !== (eV = VV.icon) && void 0 !== eV ? eV : "unknown",
            nameKey: null !== (xV = VV.nameKey) && void 0 !== xV ? xV : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class bV {
      constructor(VV, eV, xV, JV) {
        this.map = VV, this.kind = eV, this.position = xV, this.alive = JV, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = eV, this.range = "enemy" === eV ? 48 : 64, this.limit = 12
      }
      YF(VV) {
        if ("enemy" !== this.kind || this.alive(VV.EY)) return this.position(VV.EY)
      }
      getPoints() {
        const VV = [];
        for (const JV of this.map.getEntities()) {
          if (JV.kind !== this.kind || "enemy" === this.kind && !this.alive(JV.compassEntityId)) continue;
          const YV = this.position(JV.compassEntityId);
          var eV, xV;
          if (YV) VV.push({
            id: `${this.kind}:${JV.compassEntityId}`,
            EY: JV.compassEntityId,
            kind: this.kind,
            icon: null !== (eV = JV.icon) && void 0 !== eV ? eV : JV.npcSkin ? `npc_${JV.npcSkin}` : this.kind,
            displayName: JV.displayName,
            position: YV,
            nameKey: null !== (xV = JV.nameKey) && void 0 !== xV ? xV : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return VV
      }
    }
    class EV {
      constructor(VV) {
        this.map = VV, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const VV = this.map.getSnapshot().map;
        return !VV || VV.insideDungeon ? [] : VV.portals.map((VV => {
          var eV;
          return {
            id: "portal:" + VV.id,
            kind: "portal",
            position: VV.position,
            nameKey: null !== (eV = VV.nameKey) && void 0 !== eV ? eV : "skyblockGame:compassUnvisitedZone",
            icon: VV.visited ? "dungeons" === VV.destination ? "portal_orange" : "portal" : "unknown",
            colour: VV.colour
          }
        }))
      }
    }
    class BV {
      constructor(VV) {
        this.target = VV, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const VV = this.target();
        return VV ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: VV.position,
          nameKey: VV.nameKey
        }] : []
      }
    }

    function jV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.position;
      const YV = JV[0] - eV[0],
        UV = JV[2] - eV[2];
      return {
        ...VV,
        position: JV,
        offset: ZV.b.computeShortestRotation(xV, (0, ZV.Cb)([YV, 0, UV])),
        distance: Math.hypot(YV, JV[1] - eV[1], UV)
      }
    }
    let qV;

    function tV(VV, eV) {
      var xV;
      return (null === (xV = qV) || void 0 === xV ? void 0 : xV.locale) !== eV && (qV = {
        locale: eV,
        near: new Intl.NumberFormat(eV, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(eV, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (VV < 10 ? qV.near : qV.far).format(VV)
    }
    class FV {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(VV) {
        return this.providers.set(VV.id, VV), this.refreshAt = 0, () => {
          this.providers.get(VV.id) === VV && (this.providers.delete(VV.id), this.refreshAt = 0)
        }
      }
      frame(VV, eV, xV) {
        if (xV >= this.refreshAt) {
          this.refreshAt = xV + 200, this.candidates = [];
          for (const eV of this.providers.values()) {
            if (!eV.enabled) continue;
            const xV = eV.getPoints().map((eV => {
              const xV = eV.position;
              return {
                point: eV,
                distance: Math.hypot(xV[0] - VV[0], xV[1] - VV[1], xV[2] - VV[2])
              }
            })).filter((VV => VV.distance <= eV.range)).sort(((VV, eV) => VV.distance - eV.distance)).slice(0, eV.limit);
            for (const {
                point: VV
              }
              of xV) this.candidates.push({
              provider: eV,
              point: VV
            })
          }
        }
        const JV = [];
        for (const {
            point: YV,
            provider: UV
          }
          of this.candidates) {
          if (!UV.enabled) continue;
          const xV = UV.YF ? UV.YF(YV) : YV.position;
          if (xV) {
            const UV = jV(YV, VV, eV, xV);
            Math.abs(UV.offset) <= vV && JV.push(UV)
          }
        }
        return JV
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var TV = xV(37771),
      PV = xV(62);
    const AV = [{
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
      NV = AV.length;

    function XV(VV) {
      return VV >= NV ? 1 : VV + 1
    }
    const MV = "skyblockQuests",
      zV = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      GV = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function WV(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const xV = Math.max(0, Math.floor(VV)),
        JV = Math.floor(xV % 1e3 / 100),
        YV = Math.floor(xV / 1e3),
        UV = YV % 60,
        yV = Math.floor(YV / 60),
        pV = yV % 60,
        QV = Math.floor(yV / 60),
        nV = VV => VV < 10 ? `0${VV}` : String(VV),
        wV = eV ? `.${JV}` : "";
      return QV > 0 ? `${QV}:${nV(pV)}:${nV(UV)}${wV}` : `${pV}:${nV(UV)}${wV}`
    }
    const RV = "devquests",
      gV = "none",
      DV = {
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
      iV = "Compressed Messy Stone",
      CV = {
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
      aV = ["Stone", "Diorite", "Andesite", "Granite"],
      oV = new Set(aV),
      cV = (Object.keys(CV), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const hV = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function lV(VV, eV) {
      const xV = Math.floor(5 * VV / (2 * eV + 1));
      return Math.min(4, Math.max(0, xV))
    }
    var LV = xV(1269);
    var fV = xV(37507);
    var mV = xV(37762),
      KV = xV(32),
      HV = xV(9477);
    const uV = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      sV = 1e3;

    function SV(VV) {
      return Math.max(0, VV)
    }

    function IV(VV) {
      return 1 + .01 * SV(VV)
    }

    function dV(VV) {
      return 1 + .005 * SV(VV)
    }

    function OV(VV) {
      return 1 + .005 * SV(VV)
    }

    function Ve(VV) {
      return .01 * SV(VV)
    }

    function ee(VV) {
      return 150 / (150 + SV(VV))
    }

    function xe(VV) {
      return 1 + .002 * SV(VV)
    }

    function Je(VV) {
      return Math.round(10 * VV) / 10
    }

    function Ye(VV, eV) {
      switch (VV) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Je(100 * (dV(eV) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Je(100 * (IV(eV) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Je(100 * (OV(eV) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Je(100 * Ve(eV))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Je(100 * (1 - ee(eV)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Je(100 * (xe(eV) - 1))
          }
      }
    }

    function Ue(VV) {
      return "farming" === VV ? 200 : 100
    }

    function ye(VV, eV) {
      if (!Number.isSafeInteger(VV) || VV < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const xV = Ue(eV),
        JV = VV => function(VV, eV) {
          return Ue(VV) * eV * (eV + 1) / 2
        }(eV, VV);
      let YV = Math.min(sV, Math.floor((Math.sqrt(8 * VV / xV + 1) - 1) / 2));
      return YV < sV && JV(YV + 1) <= VV ? YV++ : JV(YV) > VV && YV--, {
        totalXp: VV,
        level: YV,
        xpIntoLevel: VV - JV(YV),
        xpForNextLevel: YV === sV ? null : xV * (YV + 1)
      }
    }
    const pe = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Qe(VV) {
      return pe.has(VV)
    }
    const ne = new Set(ZV.nb);

    function we(VV) {
      return ne.has(VV)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Ze = {
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
      ve = {
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
      re = {
        ...ve,
        ...Object.fromEntries(Object.entries(cV).map((VV => {
          let [eV, xV] = VV;
          return [eV, 9 * ve[xV]]
        })))
      },
      ke = {
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
      be = {
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
    const Ee = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Be = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function je(VV) {
      return `rgb(${Be[VV].join(", ")})`
    }

    function qe(VV, eV, xV) {
      if (!xV) return VV(eV);
      const JV = {};
      for (const [YV, UV] of Object.entries(xV)) JV[YV] = "string" === typeof UV ? UV : VV(UV.translationKey);
      return VV(eV, JV)
    }
    class te {
      constructor(VV, eV) {
        this.now = VV, this.getJournal = eV, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.hn = !1, this.onShown = () => {}
      }
      enqueue(VV) {
        const eV = Fe(VV);
        if (eV) this.pending.push(VV);
        else {
          const eV = this.pending.findIndex(Fe);
          this.pending.splice(-1 === eV ? this.pending.length : eV, 0, VV)
        }
        return (null === this.current || null !== this.followUp && !eV) && (this.advance(), !0)
      }
      setHeld(VV) {
        return this.hn = VV, !VV && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      iZ() {
        const VV = this.getJournal(),
          eV = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === eV ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === eV || void 0 === eV ? void 0 : eV.kind) && VV && VV.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === eV || void 0 === eV ? void 0 : eV.kind)) {
          const VV = this.findFollowUp(this.current);
          if ("step" !== (null === VV || void 0 === VV ? void 0 : VV.kind) || VV.questId !== eV.questId || VV.step.id !== eV.step.id) return this.showFollowUp(VV, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(VV, eV, xV) {
        var JV, YV, UV, yV;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, VV, xV);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, VV);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, VV, eV);
        const {
          questCompletionKind: pV,
          questCompletionNameKey: QV
        } = this.current, nV = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, wV = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, ZV = "step" === (null === (JV = this.followUp) || void 0 === JV ? void 0 : JV.kind) ? this.followUp : null, vV = "explore" === (null === (YV = this.followUp) || void 0 === YV ? void 0 : YV.kind);
        let rV;
        return rV = vV ? VV("skyblockGame:questExploreTitle") : null !== ZV ? "quest" === pV ? VV("skyblockGame:questNextQuestTitle", {
          quest: VV(ZV.questNameKey)
        }) : VV("skyblockGame:questNextStepTitle") : VV("started" === pV ? "skyblockGame:questStartedTitle" : "quest" === pV ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? pV : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: rV,
          name: vV ? eV("skyblockGame:questExploreName") : null !== ZV ? qe(eV, ZV.step.nameKey, ZV.step.nameParams) : qe(eV, QV, nV),
          description: vV ? eV("skyblockGame:questExploreDescription") : null === ZV ? null : qe(eV, ZV.step.descriptionKey, ZV.step.descriptionParams),
          reward: null === this.followUp && wV > 0 ? eV("skyblockGame:questCoinRewardSuffix", {
            amount: wV.toLocaleString(xV)
          }) : null,
          iconItem: null !== (UV = null === ZV || void 0 === ZV ? void 0 : ZV.step.questIconItem) && void 0 !== UV ? UV : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== ZV && (null === (yV = this.getJournal()) || void 0 === yV ? void 0 : yV.trackedQuestId) === ZV.questId ? ZV.step.nameKey : null
        }
      }
      getSkillLevelView(VV, eV, xV) {
        let {
          skill: JV,
          beforeLevel: YV,
          level: UV
        } = VV;
        const yV = Ye(JV, YV),
          pV = Ye(JV, UV);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: eV(`skyblockGame:${JV}`),
          name: eV("skyblockGame:skillLevelUp", {
            to: UV.toLocaleString(xV)
          }),
          description: yV.percent === pV.percent ? null : eV(`${pV.translationKey}Change`, {
            before: yV.percent.toLocaleString(xV),
            after: pV.percent.toLocaleString(xV)
          }),
          reward: null,
          iconItem: Ee[JV],
          accent: je(JV),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(VV, eV) {
        let {
          landmarkNameKey: xV
        } = VV;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: eV("skyblockGame:landmarkDiscovered"),
          name: eV(xV),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(VV, eV, xV) {
        let {
          titleKey: JV,
          textKey: YV,
          params: UV = {},
          nameKeys: yV = {},
          iconItem: pV = null
        } = VV;
        const QV = {
          ...UV
        };
        for (const [nV, wV] of Object.entries(yV)) QV[nV] = eV(wV);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: eV(JV),
          name: xV(YV, QV),
          description: null,
          reward: null,
          iconItem: pV,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var VV;
        if (null !== this.followUp) return 5600;
        switch (null === (VV = this.current) || void 0 === VV ? void 0 : VV.questCompletionKind) {
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
      showFollowUp(VV, eV) {
        null === VV || this.hn ? this.advance() : (this.followUp = VV, this.token++, this.shownAt = this.now(), this.expiresAt = null !== eV && void 0 !== eV ? eV : this.shownAt + this.durationMs())
      }
      findFollowUp(VV) {
        var eV;
        const xV = this.getJournal();
        if (!xV || this.hasPendingQuestPopup() || Fe(VV)) return null;
        const JV = "started" === VV.questCompletionKind ? xV.active.some((eV => eV.id === VV.questCompletionQuestId)) : "quest" === VV.questCompletionKind ? xV.completed.some((eV => eV.id === VV.questCompletionQuestId)) : [...xV.active, ...xV.completed].some((eV => eV.id === VV.questCompletionQuestId && eV.subquests.some((eV => eV.id === VV.questCompletionStepId && "completed" === eV.status))));
        if (!JV) return null;
        if ("quest" === VV.questCompletionKind && 0 === xV.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const YV = xV.active.find((VV => VV.id === xV.trackedQuestId)),
          UV = null !== (eV = null === YV || void 0 === YV ? void 0 : YV.subquests.find((VV => "ready" === VV.status))) && void 0 !== eV ? eV : null === YV || void 0 === YV ? void 0 : YV.subquests.find((VV => "active" === VV.status));
        return UV ? {
          kind: "step",
          questId: YV.id,
          questNameKey: YV.nameKey,
          step: UV
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((VV => !Fe(VV)))
      }
      advance() {
        var VV;
        this.current = this.hn ? null : null !== (VV = this.pending.shift()) && void 0 !== VV ? VV : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Fe(VV) {
      return Te(VV.questCompletionKind)
    }

    function Te(VV) {
      return "skillLevel" === VV || "landmark" === VV || "npcNote" === VV
    }
    var Pe = xV(39693),
      Ae = xV(39696),
      Ne = xV(39665),
      Xe = xV(39725);
    const Me = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class ze {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.ik = !1, this.mountCompass = VV => {
          var eV;
          if (null === (eV = this.stopLayout) || void 0 === eV || eV.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !VV || this.ik) return;
          const xV = VV.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: VV,
            track: xV,
            label: VV.querySelector(".SkyblockCompassLabel")
          }, xV.replaceChildren();
          for (let YV = 0; YV < 4; YV++) {
            const VV = document.createElement("span");
            VV.className = "SkyblockCompassCardinal", xV.appendChild(VV), this.cardinals.push(VV)
          }
          const JV = (0, Ne.b)(Me, [VV], this.layout);
          this.stopLayout = () => {
            JV(), xV.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = VV => {
          this.terrain = this.ik ? null : VV, this.render(this.frame)
        }, this.mountMinimapSearchArea = VV => {
          this.mountSearchArea("minimap", VV)
        }, this.mountMapSearchArea = VV => {
          this.mountSearchArea("map", VV)
        }, this.mountPlayer = VV => {
          this.player = this.ik ? null : VV, this.render(this.frame)
        }, this.mountWaypoint = VV => {
          var eV, xV;
          if (null === (eV = this.stopWaypoint) || void 0 === eV || eV.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !VV || this.ik) return;
          const JV = VV.querySelector(".SkyblockQuestWaypointMarker");
          JV.replaceChildren((0, Ae.c)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: VV,
            marker: JV,
            clip: VV.querySelector(".SkyblockQuestWaypointTextClip"),
            text: VV.querySelector(".SkyblockQuestWaypointText"),
            label: VV.querySelector(".SkyblockQuestWaypointLabel"),
            distance: VV.querySelector(".SkyblockQuestWaypointDistance"),
            hint: VV.querySelector(".SkyblockQuestWaypointHint")
          };
          const YV = () => {
              this.waypointMarkerSize = {
                width: JV.offsetWidth,
                height: JV.offsetHeight
              }, this.waypointInset = {
                x: JV.offsetWidth / 2 + 8,
                top: JV.offsetHeight + 8,
                bottom: 8
              }
            },
            UV = new ResizeObserver((() => {
              YV(), this.render(this.frame)
            }));
          UV.observe(JV, {
            box: "border-box"
          });
          const yV = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", yV), null === (xV = window.visualViewport) || void 0 === xV || xV.addEventListener("resize", yV), this.stopWaypoint = () => {
            var VV;
            UV.disconnect(), window.removeEventListener("resize", yV), null === (VV = window.visualViewport) || void 0 === VV || VV.removeEventListener("resize", yV)
          }, yV(), YV(), this.render(this.frame)
        }, this.mountWaypointOrigin = VV => {
          var eV;
          if (null === (eV = this.stopWaypointOrigin) || void 0 === eV || eV.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = VV && !this.ik ? Number(VV.dataset.notificationToken) : null, VV && !this.ik && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const eV = {
              nameKey: VV.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = eV;
            const xV = () => {
                const xV = VV.getBoundingClientRect();
                eV.x = (xV.left + xV.width / 2) / window.innerWidth * 100, eV.y = (xV.top + xV.height / 2) / window.innerHeight * 100
              },
              JV = new ResizeObserver(xV);
            JV.observe(VV.parentElement), JV.observe(VV), window.addEventListener("resize", xV), this.stopWaypointOrigin = () => {
              JV.disconnect(), window.removeEventListener("resize", xV)
            }, xV()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const VV = this.compass.root,
            eV = getComputedStyle(VV),
            xV = getComputedStyle(document.documentElement),
            JV = parseFloat(xV.fontSize),
            YV = parseFloat(eV.getPropertyValue("--compass-icon-size")) * JV,
            UV = "1" === eV.getPropertyValue("--compass-fit-top").trim(),
            yV = UV ? 1 : 8,
            pV = Array.from(document.querySelectorAll(Me), (VV => {
              var eV;
              return (null !== (eV = VV.querySelector(".MiddleTextTop")) && void 0 !== eV ? eV : VV).getBoundingClientRect()
            })).filter((VV => VV.width > 0 && VV.height > 0));
          let QV = (parseFloat(xV.getPropertyValue("--notchTop")) || 0) + yV,
            nV = "";
          if (UV) {
            const eV = window.innerWidth / 2,
              xV = VV.getBoundingClientRect().height,
              UV = [QV, ...pV.map((VV => Math.max(QV, VV.bottom + yV)))].sort(((VV, eV) => VV - eV));
            for (const VV of UV) {
              let UV = eV - 8;
              for (const JV of pV) JV.bottom + yV <= VV || JV.top >= VV + xV + yV || (UV = Math.min(UV, JV.right <= eV ? eV - JV.right - 8 : JV.left - eV - 8));
              const wV = 2 * UV - YV;
              if (wV >= 16 * JV) {
                nV = `${wV}px`, QV = VV;
                break
              }
            }
          }
          VV.style.maxWidth !== nV && (VV.style.maxWidth = nV);
          const wV = VV.getBoundingClientRect(),
            ZV = this.compassSize.trackHalfWidth;
          if (wV.width > 0) {
            const VV = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: VV.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * YV / VV.width
          }
          if (!nV)
            for (const vV of pV) vV.right > wV.left - 8 && vV.left < wV.right + 8 && (QV = Math.max(QV, vV.bottom + yV));
          VV.style.top = `${QV}px`, this.compassSize.trackHalfWidth !== ZV && this.render(this.frame)
        }
      }
      mountSearchArea(VV, eV) {
        this.searchAreas[VV] = this.ik ? null : eV, this.render(this.frame)
      }
      render(VV) {
        if (this.ik) return;
        if (this.frame = VV, this.compass && (Ge(this.compass.root, !VV), VV)) {
          const eV = this.compassSize.trackHalfWidth / 50;
          VV.compass.cardinals.forEach(((VV, xV) => {
            const JV = this.cardinals[xV];
            JV.textContent !== VV.name && (JV.textContent = VV.name), Ge(JV, VV.hidden), JV.style.translate = VV.left * eV + "px"
          }));
          const xV = new Set;
          VV.compass.markers.forEach(((JV, YV) => {
            var UV;
            xV.add(JV.id);
            let yV = this.markers.get(JV.id);
            yV || (yV = document.createElement("span"), yV.className = "SkyblockCompassMarker", this.markers.set(JV.id, yV), this.compass.track.appendChild(yV)), yV.dataset.icon !== JV.icon && (yV.dataset.icon = JV.icon, yV.replaceChildren((0, Ae.c)(JV.icon))), yV.style.color = null !== (UV = JV.colour) && void 0 !== UV ? UV : "", yV.style.translate = JV.left * eV + "px", yV.style.zIndex = String(VV.compass.markers.length - YV), yV.title !== JV.name && (yV.title = JV.name)
          }));
          for (const [VV, JV] of this.markers) xV.has(VV) || (JV.remove(), this.markers.delete(VV));
          this.compass.label.textContent !== VV.compass.label && (this.compass.label.textContent = VV.compass.label)
        }
        this.terrain && (Ge(this.terrain, !(null !== VV && void 0 !== VV && VV.minimap)), null !== VV && void 0 !== VV && VV.minimap && (this.terrain.style.transform = VV.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", VV.minimap.iconRotation)));
        const eV = null === VV || void 0 === VV ? void 0 : VV.searchArea;
        for (const xV of [this.searchAreas.minimap, this.searchAreas.map])
          if (xV && (Ge(xV, !eV), eV)) {
            if (this.searchAreaPath.seed !== eV.shapeSeed && (this.searchAreaPath = {
                seed: eV.shapeSeed,
                d: (0, Xe.d)((0, Xe.b)(eV.shapeSeed))
              }), xV.dataset.shapeSeed !== eV.shapeSeed) {
              xV.dataset.shapeSeed = eV.shapeSeed;
              for (const VV of xV.querySelectorAll("path")) VV.setAttribute("d", this.searchAreaPath.d)
            }
            xV.style.left = `${eV.left}%`, xV.style.top = `${eV.top}%`, xV.style.width = `${eV.width}%`, xV.style.height = `${eV.height}%`
          } if (this.player && (Ge(this.player, !(null !== VV && void 0 !== VV && VV.player) || VV.player.hidden), null !== VV && void 0 !== VV && VV.player && (this.player.style.left = `${VV.player.left}%`, this.player.style.top = `${VV.player.top}%`, this.player.style.setProperty("--map-player-rotation", VV.player.rotation))), this.waypoint) {
          const {
            root: eV,
            marker: xV,
            clip: JV,
            text: YV,
            label: UV,
            distance: yV,
            hint: pV
          } = this.waypoint, QV = !(null !== VV && void 0 !== VV && VV.waypoint) || null !== VV.waypoint.popupToken && VV.waypoint.popupToken !== this.waypointOriginToken;
          Ge(eV, QV);
          let nV = 1;
          const wV = this.waypointLaunch;
          if (!QV && wV && VV.waypoint.nameKey === wV.nameKey) {
            const VV = performance.now();
            wV.startedAt ??= VV, nV = Math.min(1, Math.max(0, (VV - wV.startedAt - 450) / 1e3)), xV.style.opacity = String(Math.min(1, (VV - wV.startedAt) / 150)), 1 === nV && (this.waypointLaunch = null)
          } else xV.style.opacity = "", wV && null !== wV.startedAt && (this.waypointLaunch = null);
          if (eV.classList.toggle("Launching", nV < 1), null !== VV && void 0 !== VV && VV.waypoint) {
            const eV = this.waypointInset,
              QV = "quest_talk" === VV.waypoint.markerIcon ? function(VV, eV, xV) {
                if (!VV.text || null === VV.blockHeight || 0 === VV.nearness) return VV;
                const JV = VV.blockHeight / 100 * xV.height,
                  YV = -VV.nearness * (We * JV + eV.width / 2),
                  UV = VV.nearness * (Re * JV + eV.height / 2);
                return {
                  ...VV,
                  text: {
                    x: VV.text.x + YV / xV.width * 100,
                    y: VV.text.y + UV / xV.height * 100
                  }
                }
              }(VV.waypoint, this.waypointMarkerSize, this.viewport) : VV.waypoint,
              ZV = (0, Pe.c)(QV, eV, this.viewport),
              vV = nV * nV * (3 - 2 * nV),
              rV = nV < 1 ? wV.x + (ZV.x - wV.x) * vV : ZV.x,
              kV = nV < 1 ? wV.y + (ZV.y - wV.y) * vV : ZV.y;
            xV.style.translate = `${rV}vw ${kV}vh`, JV.style.clipPath = `inset(${eV.top}px ${eV.x}px ${eV.bottom}px)`, Ge(YV, nV < 1 || !VV.waypoint.text), YV.style.opacity = String(1 - VV.waypoint.nearness), VV.waypoint.text && (YV.style.translate = `${VV.waypoint.text.x}vw ${VV.waypoint.text.y}vh`), UV.textContent !== VV.waypoint.name && (UV.textContent = VV.waypoint.name), this.markerIcon !== VV.waypoint.markerIcon && (this.markerIcon = VV.waypoint.markerIcon, xV.replaceChildren((0, Ae.c)(this.markerIcon))), yV.textContent !== VV.waypoint.distance && (yV.textContent = VV.waypoint.distance), Ge(pV, null === VV.waypoint.hint), null !== VV.waypoint.hint && pV.textContent !== VV.waypoint.hint && (pV.textContent = VV.waypoint.hint)
          }
        }
      }
      dispose() {
        var VV, eV;
        this.mountWaypointOrigin(null), this.render(null), null === (VV = this.stopLayout) || void 0 === VV || VV.call(this), this.stopLayout = null, null === (eV = this.stopWaypoint) || void 0 === eV || eV.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.ik = !0
      }
    }

    function Ge(VV, eV) {
      VV.hidden !== eV && (VV.hidden = eV)
    }
    const We = .55,
      Re = .6;
    var ge = xV(39683);
    const De = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class ie {
      constructor(VV, eV, xV, JV) {
        this.map = VV, this.quests = eV, this.compass = xV, this.display = new ze, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.ik = !1, this.snapshot = null, this.texts = new Map, this.translate = JV
      }
      setTranslator(VV, eV) {
        this.translate = VV, this.locale = eV, this.metresFormat = new Intl.NumberFormat(eV), this.texts.clear()
      }
      translateCached(VV, eV) {
        const xV = void 0 === eV ? VV : `${VV} ${eV}`;
        let JV = this.texts.get(xV);
        return void 0 === JV && (this.texts.size >= 500 && this.texts.clear(), JV = this.translate(VV, void 0 === eV ? void 0 : {
          distance: eV
        }), this.texts.set(xV, JV)), JV
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(VV, eV, xV) {
        if (this.ik) return;
        if (!VV) return this.snapshot = null, void this.display.render(null);
        const JV = this.map.getSnapshot().map,
          UV = xV.cameraHeading,
          yV = {
            ...this.display.compassSize,
            tanHalfFovX: xV.tanHalfFovX,
            pitch: xV.cameraPitch
          },
          pV = [];
        if (JV)
          for (const YV of this.compass.frame(VV, UV, eV)) {
            const VV = rV(YV.offset, yV);
            null !== VV && pV.push({
              ...YV,
              left: VV
            })
          }
        const QV = function(VV, eV) {
            const xV = [],
              JV = VV => "quest" === VV.kind ? VV.distance - 1 : VV.distance,
              YV = [...VV].sort(((VV, eV) => JV(VV) - JV(eV) || VV.id.localeCompare(eV.id)));
            for (const UV of YV) {
              let VV = !1;
              if ("quest" !== UV.kind)
                for (const JV of xV)
                  if (Math.abs(JV.left - UV.left) < eV) {
                    VV = !0;
                    break
                  } VV || xV.push(UV)
            }
            return xV
          }(pV, this.display.compassSpacing),
          nV = function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              xV = null;
            for (const JV of VV) Math.abs(JV.offset) <= eV && (!xV || JV.distance < xV.distance || JV.distance === xV.distance && Math.abs(JV.offset) < Math.abs(xV.offset)) && (xV = JV);
            return xV
          }(QV),
          wV = VV => {
            var eV;
            return null !== (eV = VV.displayName) && void 0 !== eV ? eV : this.translateCached(VV.nameKey)
          },
          vV = {
            compass: {
              markers: QV.map((VV => ({
                id: VV.id,
                icon: VV.icon,
                colour: VV.colour,
                name: wV(VV),
                left: VV.left
              }))),
              cardinals: ge.d.map((VV => {
                let {
                  name: eV,
                  bearing: xV
                } = VV;
                const JV = rV(ZV.b.computeShortestRotation(UV, xV), yV);
                return {
                  name: eV,
                  left: null !== JV && void 0 !== JV ? JV : 0,
                  hidden: null === JV
                }
              })),
              label: nV ? `${wV(nV)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",tV(nV.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== JV && void 0 !== JV && JV.background) {
          const eV = VV[0] - JV.mapOrigin[0],
            xV = VV[2] - JV.mapOrigin[2],
            {
              rotation: yV,
              transform: pV
            } = (0, YV.g)(eV, xV, UV, JV.background.bounds);
          vV.minimap = {
            transform: pV,
            iconRotation: -yV + "rad"
          };
          const [QV, nV] = (0, YV.c)(eV, xV, JV.background.bounds);
          vV.player = {
            left: QV,
            top: nV,
            hidden: QV < 0 || nV < 0 || QV > 100 || nV > 100,
            rotation: -yV + "rad"
          }
        }
        const {
          waypoint: kV
        } = this.quests.getSnapshot();
        if ("search" === (null === kV || void 0 === kV ? void 0 : kV.questMarkerIcon) && null !== JV && void 0 !== JV && JV.background) {
          const {
            bounds: VV
          } = JV.background, [eV, xV] = (0, YV.c)(kV.position[0] - JV.mapOrigin[0], kV.position[2] - JV.mapOrigin[2], VV);
          vV.searchArea = {
            left: eV,
            top: xV,
            width: 6400 / (VV.mapMaxX - VV.mapMinX),
            height: 6400 / (VV.mapMaxZ - VV.mapMinZ),
            shapeSeed: kV.nameKey
          }
        }
        const bV = this.quests.getNotificationSnapshot(),
          EV = "completion" === (null === bV || void 0 === bV ? void 0 : bV.phase) && !Te(bV.kind);
        if (kV && !EV) {
          const eV = Math.hypot(...kV.position.map(((eV, xV) => eV - VV[xV]))),
            JV = Math.round(eV),
            YV = "talk" === kV.questMarkerIcon ? Math.min(1, Math.max(0, (10 - eV) / 5)) : 0,
            UV = xV.projectWorldPosToViewport(kV.position),
            yV = UV && xV.projectWorldPosToViewport([kV.position[0], kV.position[1] - 1, kV.position[2]]);
          vV.waypoint = {
            ...xV.projectWorldPosToScreenPos(kV.position),
            text: UV,
            nearness: YV * YV * (3 - 2 * YV),
            blockHeight: UV && yV ? yV.y - UV.y : null,
            name: this.translateCached(kV.nameKey),
            nameKey: kV.nameKey,
            markerIcon: kV.questMarkerIcon ? De[kV.questMarkerIcon] : "quest",
            popupToken: (null === bV || void 0 === bV ? void 0 : bV.waypointNameKey) === kV.nameKey ? bV.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(JV)),
            hint: "search" === kV.questMarkerIcon && Math.hypot(kV.position[0] - VV[0], kV.position[2] - VV[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = vV, this.display.render(vV)
      }
      dispose() {
        this.ik = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Ce = "skyblockSkillsView";
    class ae extends QV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          xV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV => VV,
          JV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          YV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV => VV;
        super(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = eV, this.translate = xV, this.locale = JV, this.itemName = YV, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = VV => {
          this.selected = VV, this.emit()
        }
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, this.locale = eV, this.itemName = xV, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(VV) {
        let eV = this.skillText.get(VV);
        return eV || (eV = {
          label: this.translate(`skyblockGame:${VV}`),
          description: this.translate(`skyblockGame:${VV}Description`)
        }, this.skillText.set(VV, eV)), eV
      }
      sources(VV) {
        if ("mining" === VV || "fishing" === VV) return this.buildSources(VV);
        let eV = this.sourceText.get(VV);
        return eV || (eV = this.buildSources(VV), this.sourceText.set(VV, eV)), eV
      }
      buildSources(VV) {
        const eV = this.translate;
        return "exploration" === VV ? [eV("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), eV("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === VV ? [eV("skyblockGame:logSource", {
          xp: this.number(Ze["Maple Log"])
        })] : "combat" === VV ? [eV("skyblockGame:creatureKillSource"), eV("skyblockGame:noEnvironmentalXp")] : "farming" === VV ? [eV("skyblockGame:cropSource", {
          xp: this.number(ke["Wheat|FreshlyGrown"])
        }), eV("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), eV("skyblockGame:noYoungCropXp")] : Object.entries("mining" === VV ? re : be).map((VV => {
          let [xV, JV] = VV;
          return eV("skyblockGame:itemXpSource", {
            item: this.itemName(xV),
            xp: this.number(JV)
          })
        }))
      }
      number(VV) {
        return VV.toLocaleString(this.locale)
      }
      benefit(VV, eV) {
        const xV = Ye(VV, eV);
        return this.translate(xV.translationKey, {
          bonus: this.number(xV.percent)
        })
      }
      RZ(VV) {
        if (!this.ik) {
          if ("snapshot" === VV.kind) this.progress = VV.progress, this.pending.clear(), this.recent = null;
          else if ("award" === VV.kind && this.progress) {
            const {
              award: eV
            } = VV;
            this.progress = {
              ...this.progress,
              [eV.skill]: eV.after
            };
            for (const [VV, JV] of this.pending) JV.skill === eV.skill && this.pending.delete(VV);
            const xV = eV.after.level > eV.before.level;
            this.recordGain(eV.skill, eV.amount, xV ? ++this.nextLevelUpToken : null), xV && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: eV.skill,
              beforeLevel: eV.before.level,
              level: eV.after.level
            })
          } else {
            if ("rejectBlock" === VV.kind) return void this.rejectBlock(VV.position);
            if ("open" === VV.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(VV, eV, xV) {
        if (!this.progress || this.ik || xV) return;
        const JV = function(VV, eV) {
          const xV = VV.split("|")[0];
          return "Air" === eV || eV === `Barkless ${VV}` ? Object.hasOwn(Ze, xV) ? {
            skill: "foraging",
            amount: Ze[xV]
          } : "Air" !== eV ? null : Object.hasOwn(re, VV) ? {
            skill: "mining",
            amount: re[VV]
          } : Qe(VV) ? {
            skill: "farming",
            amount: 10
          } : we(VV) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(ke, VV) ? {
            skill: "farming",
            amount: ke[VV]
          } : Object.hasOwn(CV, VV) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(eV, "Air");
        if (!JV) return;
        const YV = VV.join(",");
        if (this.pending.has(YV)) return;
        const UV = this.predictedProgress(JV.skill).totalXp + JV.amount;
        Number.isSafeInteger(UV) && (this.pending.set(YV, {
          ...JV,
          expires: this.now() + 2e3
        }), this.recordGain(JV.skill, 0), this.emit())
      }
      rejectBlock(VV) {
        this.pending.delete(VV.join(",")) && this.emit()
      }
      iZ() {
        if (this.ik) return;
        let VV = !1;
        for (const [eV, xV] of this.pending) xV.expires <= this.now() && (this.pending.delete(eV), VV = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, VV = !0), VV && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(VV, eV) {
        var xV, JV;
        let YV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const UV = (null === (xV = this.recent) || void 0 === xV ? void 0 : xV.skill) === VV && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          yV = (null === (JV = this.recent) || void 0 === JV ? void 0 : JV.skill) === VV && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: VV,
          confirmed: UV + eV,
          expires: this.now() + 3e3,
          levelUpToken: null !== YV && void 0 !== YV ? YV : yV
        }
      }
      pendingXp(VV) {
        let eV = 0;
        for (const xV of this.pending.values()) xV.skill === VV && (eV += xV.amount);
        return eV
      }
      predictedProgress(VV) {
        const eV = this.progress[VV],
          xV = this.pendingXp(VV);
        return xV ? ye(eV.totalXp + xV, VV) : eV
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var VV, eV, xV;
        const JV = this.progress ? uV.map((VV => {
            const eV = this.predictedProgress(VV);
            return {
              ...this.text(VV),
              icon: Ee[VV],
              benefit: this.benefit(VV, eV.level),
              sources: this.sources(VV),
              id: VV,
              selected: VV === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(eV.level)
              }),
              xp: null === eV.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(eV.xpIntoLevel),
                target: this.number(eV.xpForNextLevel)
              }),
              percent: null === eV.xpForNextLevel ? 100 : Math.min(100, eV.xpIntoLevel / eV.xpForNextLevel * 100)
            }
          })) : [],
          YV = JV.find((VV => {
            var eV;
            return VV.id === (null === (eV = this.recent) || void 0 === eV ? void 0 : eV.skill)
          })),
          UV = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: JV,
          detail: null !== (VV = JV.find((VV => VV.selected))) && void 0 !== VV ? VV : null,
          overallLevel: this.progress ? uV.reduce(((VV, eV) => VV + this.predictedProgress(eV).level), 0) : null,
          hud: YV && UV > 0 ? {
            skill: YV,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(UV)
            }),
            levelUpToken: null !== (eV = null === (xV = this.recent) || void 0 === xV ? void 0 : xV.levelUpToken) && void 0 !== eV ? eV : null,
            colour: je(YV.id)
          } : null
        }
      }
    }
    const oe = Math.max(1600, 600, 950) + 400,
      ce = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      he = "skyblockQuestsView",
      le = "skyblockQuestNotificationView";
    class Le extends QV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          yV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(VV, JV, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = eV, this.translate = xV, this.now = YV, this.locale = UV, this.publishNotification = yV, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var VV, eV;
          this.selected = null !== (VV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.trackedQuestId) && void 0 !== VV ? VV : null, this.show()
        }, this.select = VV => {
          this.selected = VV, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const VV = this.snapshot.detail;
          !this.ik && null !== VV && void 0 !== VV && VV.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(VV.id), this.emit())
        }, this.viewDialogue = () => {
          const VV = this.snapshot.detail;
          var eV;
          VV && (null === (eV = this.onViewDialogue) || void 0 === eV || eV.call(this, VV.id))
        }, this.notifications = new te(YV, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var VV, eV;
        return null !== (VV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.trackedQuestId) && void 0 !== VV ? VV : null
      }
      notify(VV) {
        !this.ik && this.notifications.enqueue(VV) && this.emitNotification()
      }
      setNotificationsHeld(VV) {
        (this.notifications.setHeld(VV) || VV) && this.emitNotification()
      }
      iZ() {
        var VV, eV;
        if (this.ik) return;
        this.notifications.iZ() && this.emitNotification();
        let xV = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, xV = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, xV = !0);
        const JV = fe(this.authoritative);
        null !== JV && void 0 !== JV && null !== (VV = JV.questClock) && void 0 !== VV && VV.running && this.clockText(JV) !== (null === (eV = this.snapshot.tracked) || void 0 === eV ? void 0 : eV.clock) && (xV = !0), xV && this.emit()
      }
      setTranslator(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = VV, this.locale = eV, this.emitNotification(), this.emit()
      }
      RZ(VV) {
        if (!this.ik)
          if ("completion" === VV.kind) this.notify(VV.questCompletion);
          else if ("landmark" === VV.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: VV.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === VV.kind) {
          var eV, xV, JV;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: VV.npcNoteTitleKey,
            textKey: VV.npcNoteTextKey,
            params: null !== (eV = VV.npcNoteParams) && void 0 !== eV ? eV : {},
            nameKeys: null !== (xV = VV.npcNoteNameKeys) && void 0 !== xV ? xV : {},
            iconItem: null !== (JV = VV.npcNoteIconItem) && void 0 !== JV ? JV : null
          })
        } else if ("open" === VV.kind) this.show();
        else if ("guidance" === VV.kind) this.waypoint = VV.waypoint, this.compassTarget = VV.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === VV.kind) {
          this.authoritative = VV.snapshot, this.notifications.iZ() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const eV = this.trackedStepPulse;
          this.updateTrackedStepPulse(VV.snapshot), this.emit(), this.trackedStepPulse > eV && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.ik || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var VV;
        return null !== (VV = this.translateWithIcons) && void 0 !== VV ? VV : this.translate
      }
      clockText(VV) {
        const eV = VV.questClock;
        if (!eV) return null;
        const xV = eV.elapsedMs + (eV.running ? this.now() - this.receivedAt : 0);
        return void 0 === eV.countdownFromMs ? WV(xV, !1) : WV(1e3 * Math.ceil(Math.max(0, eV.countdownFromMs - xV) / 1e3), !1)
      }
      updateTrackedStepPulse(VV) {
        var eV, xV, JV;
        const YV = fe(VV);
        if (!YV) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const UV = VV => YV.subquests.filter((eV => VV(eV.status))).map((VV => VV.id)),
          yV = UV((VV => "completed" === VV || "skipped" === VV)),
          pV = UV((VV => "locked" !== VV)),
          QV = (null === (eV = this.trackedSteps) || void 0 === eV ? void 0 : eV.questId) === YV.id && YV.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (QV) {
          const VV = yV.filter((VV => !QV.finished.has(VV))),
            eV = UV((VV => "active" === VV || "ready" === VV)).filter((VV => !QV.unlocked.has(VV)));
          VV.length > 0 && this.trackedStepPulse++, (VV.length > 0 || eV.length > 0) && (this.trackedChange = {
            finished: new Set(VV),
            unlocked: new Set(eV),
            expiresAt: this.now() + oe
          })
        } else {
          var nV;
          this.trackedStepPulse = (null === (nV = this.trackedSteps) || void 0 === nV ? void 0 : nV.questId) === YV.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: YV.id,
          progress: YV.progress,
          finished: new Set([...null !== (xV = null === QV || void 0 === QV ? void 0 : QV.finished) && void 0 !== xV ? xV : [], ...yV]),
          unlocked: new Set([...null !== (JV = null === QV || void 0 === QV ? void 0 : QV.unlocked) && void 0 !== JV ? JV : [], ...pV])
        }
      }
      entry(VV, eV) {
        var xV, JV;
        const YV = VV.id === (null === (xV = this.authoritative) || void 0 === xV ? void 0 : xV.trackedQuestId),
          UV = this.now() < this.trackAvailableAt,
          yV = this.questTextTranslator(),
          pV = VV.subquests.map((eV => {
            var xV, JV, UV, pV, QV, nV;
            const wV = null !== (xV = eV.handInNpcName) && void 0 !== xV ? xV : VV.giverName,
              ZV = this.translate("skyblockGame:progress", {
                current: eV.progress.toLocaleString(this.locale),
                target: eV.target.toLocaleString(this.locale)
              }),
              vV = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: wV ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [eV.status],
              rV = "active" === eV.status || "ready" === eV.status;
            return {
              id: eV.id,
              name: qe(yV, eV.nameKey, eV.nameParams),
              description: qe(yV, eV.descriptionKey, eV.descriptionParams),
              progress: ZV,
              status: eV.status,
              statusLabel: vV ? this.translate(vV, {
                npc: wV
              }) : ZV,
              iconItem: rV && null !== (JV = eV.questIconItem) && void 0 !== JV ? JV : null,
              barPercent: "active" === eV.status && eV.showsProgressBar ? Math.min(100, 100 * eV.progress / eV.target) : null,
              justFinished: YV && null !== (UV = null === (pV = this.trackedChange) || void 0 === pV ? void 0 : pV.finished.has(eV.id)) && void 0 !== UV && UV,
              justUnlocked: YV && null !== (QV = null === (nV = this.trackedChange) || void 0 === nV ? void 0 : nV.unlocked.has(eV.id)) && void 0 !== QV && QV
            }
          }));
        return {
          id: VV.id,
          name: qe(yV, VV.nameKey, VV.nameParams),
          description: qe(yV, VV.descriptionKey, VV.descriptionParams),
          progress: eV ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: VV.progress.toLocaleString(this.locale),
            target: VV.target.toLocaleString(this.locale)
          }),
          completed: eV,
          tracked: YV,
          selected: VV.id === this.selected,
          canTrack: !eV && !YV && !UV,
          trackLabel: this.translate(YV ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : UV ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== VV.id,
          subquests: pV,
          focusStep: null !== (JV = pV.find((VV => null !== VV.barPercent))) && void 0 !== JV ? JV : null,
          clock: this.clockText(VV)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var VV, eV, xV, JV, YV, UV, yV, pV, QV, nV;
        const wV = [...null !== (VV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.active) && void 0 !== VV ? VV : [], ...null !== (xV = null === (JV = this.authoritative) || void 0 === JV ? void 0 : JV.completed) && void 0 !== xV ? xV : []];
        var ZV, vV, rV, kV;
        wV.some((VV => VV.id === this.selected)) || (this.selected = null !== (ZV = null !== (vV = null === (rV = this.authoritative) || void 0 === rV ? void 0 : rV.trackedQuestId) && void 0 !== vV ? vV : null === (kV = wV[0]) || void 0 === kV ? void 0 : kV.id) && void 0 !== ZV ? ZV : null);
        const bV = null !== (YV = null === (UV = this.authoritative) || void 0 === UV ? void 0 : UV.active.map((VV => this.entry(VV, !1)))) && void 0 !== YV ? YV : [];
        bV.sort(((VV, eV) => Number(eV.tracked) - Number(VV.tracked)));
        const EV = null !== (yV = null === (pV = this.authoritative) || void 0 === pV ? void 0 : pV.completed.map((VV => this.entry(VV, !0)))) && void 0 !== yV ? yV : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: bV,
          completed: EV,
          completedExpanded: this.completedExpanded,
          detail: null !== (QV = [...bV, ...EV].find((VV => VV.selected))) && void 0 !== QV ? QV : null,
          tracked: null !== (nV = bV.find((VV => VV.tracked))) && void 0 !== nV ? nV : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function fe(VV) {
      var eV;
      return null !== (eV = null === VV || void 0 === VV ? void 0 : VV.active.find((eV => eV.id === VV.trackedQuestId))) && void 0 !== eV ? eV : null
    }
    const me = "skyblockDungeonsView";
    class Ke extends QV {
      constructor(VV, eV) {
        let xV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          JV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = eV, this.locale = xV, this.requestEnter = JV, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = VV => {
          this.selected = VV, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const VV = this.pickerEntry(),
            eV = null === VV || void 0 === VV ? void 0 : VV.difficulties[this.pageIndex];
          void 0 !== eV && null !== eV.unlockedBoss && (this.close(), this.requestEnter(VV.id, eV.difficulty))
        }
      }
      setTranslator(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = VV, this.locale = eV, this.emit()
      }
      RZ(VV) {
        var eV, xV;
        if (!this.ik) return "open" === VV.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== VV.kind ? "snapshot" === VV.kind && (this.authoritative = VV.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (eV = null === (xV = this.pickerEntry()) || void 0 === xV ? void 0 : xV.difficulties.length) && void 0 !== eV ? eV : 1) - 1)), null === VV.snapshot && this.open ? this.close() : this.emit()) : this.choose(VV.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(VV) {
        var eV;
        const xV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.dungeons.find((eV => eV.id === VV));
        void 0 !== xV ? this.open && this.pickerDungeonId === VV || (this.pickerDungeonId = VV, this.pageIndex = Math.max(0, xV.difficulties.findLastIndex((VV => null !== VV.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${VV}`)
      }
      turnTo(VV) {
        var eV, xV;
        const JV = null !== (eV = null === (xV = this.pickerEntry()) || void 0 === xV ? void 0 : xV.difficulties.length) && void 0 !== eV ? eV : 0;
        VV < 0 || VV >= JV || VV === this.pageIndex || (this.pageIndex = VV, this.emit())
      }
      pickerEntry() {
        var VV, eV;
        return null !== (VV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.dungeons.find((VV => VV.id === this.pickerDungeonId))) && void 0 !== VV ? VV : null
      }
      difficulty(VV) {
        const eV = VV.completions > 0,
          xV = null === VV.bestMs ? null : WV(VV.bestMs);
        return {
          difficulty: VV.difficulty,
          label: this.translate(zV[VV.difficulty]),
          colour: GV[VV.difficulty],
          beaten: eV,
          bestTime: xV,
          completions: VV.completions,
          summary: eV ? [null === xV ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: xV
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: VV.completions.toLocaleString(this.locale)
          })].filter((VV => null !== VV)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(VV) {
        const eV = VV.difficulties.map((VV => this.difficulty(VV))),
          xV = eV.filter((VV => VV.beaten)).length;
        return {
          id: VV.id,
          name: this.translate(VV.nameKey),
          selected: VV.id === this.selected,
          beatenSummary: `${xV} / ${eV.length}`,
          difficulties: eV
        }
      }
      picker() {
        const VV = this.pickerEntry();
        if (null === VV || 0 === VV.difficulties.length) return null;
        const eV = VV.difficulties.map(((eV, xV) => {
          var JV, YV, UV, yV;
          const pV = eV.unlockedBoss,
            QV = null === pV ? this.lockedHint(VV, xV) : null;
          return {
            ...this.difficulty(eV),
            unlocked: null !== pV,
            bossName: null === pV ? null : this.translate(pV.bossNameKey),
            bossMobType: null !== (JV = null === pV || void 0 === pV ? void 0 : pV.bossMobType) && void 0 !== JV ? JV : null,
            bossMobVariation: null !== (YV = null === pV || void 0 === pV ? void 0 : pV.bossMobVariation) && void 0 !== YV ? YV : null,
            lockedHint: null !== (UV = null === QV || void 0 === QV ? void 0 : QV.text) && void 0 !== UV ? UV : null,
            lockedHintHighlight: null !== (yV = null === QV || void 0 === QV ? void 0 : QV.highlight) && void 0 !== yV ? yV : null,
            current: xV === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(VV.nameKey),
          pages: eV,
          page: eV[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < eV.length - 1
        }
      }
      lockedHint(VV, eV) {
        var xV, JV, YV;
        if (0 === eV && "number" === typeof VV.combatLevelLock) {
          const eV = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: VV.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: eV,
            colour: je("combat"),
            icon: Ee.combat
          })
        }
        const UV = null !== (xV = null === (JV = this.authoritative) || void 0 === JV ? void 0 : JV.dungeons) && void 0 !== xV ? xV : [],
          yV = eV > 0 ? VV : null !== (YV = UV[UV.indexOf(VV) - 1]) && void 0 !== YV ? YV : null,
          pV = eV > 0 ? VV.difficulties[eV - 1] : null === yV || void 0 === yV ? void 0 : yV.difficulties[0];
        if (null === yV || void 0 === pV) return null;
        const QV = this.translate(yV.nameKey);
        if (null === pV.unlockedBoss) return yV === VV ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, pV.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: QV
        }, pV.difficulty);
        const nV = this.translate(pV.unlockedBoss.bossNameKey);
        return yV === VV ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: nV
        }, pV.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: nV,
            dungeon: QV
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(VV, eV, xV) {
        return this.hintHighlighting(VV, eV, "difficulty", {
          name: this.translate(zV[xV]),
          colour: GV[xV],
          icon: null
        })
      }
      hintHighlighting(VV, eV, xV, JV) {
        let {
          name: YV,
          colour: UV,
          icon: yV
        } = JV;
        const pV = this.translate(VV, {
          ...eV,
          [xV]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(VV, {
            ...eV,
            [xV]: YV
          }),
          highlight: 2 === pV.length ? {
            before: pV[0],
            name: YV,
            after: pV[1],
            colour: UV,
            icon: yV
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var VV, eV, xV;
        const JV = null !== (VV = null === (eV = this.authoritative) || void 0 === eV ? void 0 : eV.dungeons) && void 0 !== VV ? VV : [];
        var YV, UV;
        JV.some((VV => VV.id === this.selected)) || (this.selected = null !== (YV = null === (UV = JV[0]) || void 0 === UV ? void 0 : UV.id) && void 0 !== YV ? YV : null);
        const yV = JV.map((VV => this.entry(VV)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: yV,
          detail: null !== (xV = yV.find((VV => VV.selected))) && void 0 !== xV ? xV : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const He = ["mining", "farming", "foraging", "fishing", "combat"],
      ue = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      se = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Se() {
      for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
      return eV.map(((VV, eV) => ({
        amount: VV,
        coins: ue[eV],
        xp: se[eV]
      })))
    }
    const Ie = Se(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      de = Se(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Oe = Se(50, 100, 250, 500, 1e3, 2500, 5e3),
      Vx = Se(25, 50, 100, 250, 500, 1e3),
      ex = Se(10, 25, 50, 100, 250, 500, 1e3),
      xx = Se(1, 5, 10, 25, 50);

    function Jx(VV, eV) {
      return {
        id: VV,
        category: "fishing",
        item: eV,
        drops: [eV],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ex
      }
    }
    const Yx = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: de
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Oe
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Oe
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Vx
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Vx
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: de
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Ie
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Ie
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Ie
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Oe
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: de
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: de
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: de
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Oe
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Oe
      }, Jx("wheatfish", "Wheatfish"), Jx("darter", "Darter"), Jx("sunset_minnow", "Sunset Minnow"), Jx("root_flounder", "Root Flounder"), Jx("greenfin_loach", "Greenfin Loach"), Jx("red_strongfish", "Red Strongfish"), Jx("green_strongfish", "Green Strongfish"), Jx("boomerang_fish", "Boomerang Fish"), Jx("seahorse", "Seahorse"), Jx("spined_stickleback", "Spined Stickleback"), Jx("moon_strongfish", "Moon Strongfish"), Jx("boulder_bass", "Boulder Bass"), Jx("grass_snapper", "Grass Snapper"), Jx("crystal_wheatfish", "Crystalized Wheatfish", xx), Jx("moonstone_pupfish", "Moonstone Pupfish", xx), Jx("reedglass_minnow", "Reedglass Minnow"), Jx("mangrove_herring", "Mangrove Herring"), Jx("mudline_perch", "Mudline Perch"), Jx("coastal_mullet", "Coastal Mullet"), Jx("reef_sardine", "Reef Sardine"), Jx("root_perch", "Root Perch"), Jx("driftwood_catfish", "Driftwood Catfish"), Jx("aether_minnow", "Aether Minnow"), Jx("needlefish", "Tri-Pointed Needlefish"), Jx("threadfin_bream", "Threadfin Bream"), Jx("mudbelly_tilapia", "Mudbelly Tilapia"), Jx("rotslab_eel", "Rotslab Eel"), Jx("polarflash_electron", "Polarflash Electron"), Jx("mireback_carp", "Mireback Carp"), Jx("blackwater_bream", "Blackwater Bream"), Jx("stone_grouper", "Stone Grouper"), Jx("shadeback_ray", "Shadeback Ray"), Jx("glacial_silverfish", "Glacial Silverfish"), Jx("hatchetfish", "Hatchetfish"), Jx("moonlit_boomerang", "Moonlit Boomerang Fish"), Jx("murkborne_ray", "Murkborne Ray"), Jx("bamboo_catfish", "Bamboo Catfish"), Jx("mossback_arapaima", "Mossback Arapaima"), Jx("murk_stingray", "Murk Stingray"), Jx("channel_sawfish", "Channel Sawfish"), Jx("boned_sturgeon", "Boned Sturgeon"), Jx("oarfish", "Oarfish"), Jx("snakehead", "Snakehead", xx), Jx("eldertide_leviathan", "Eldertide Leviathan", xx), Jx("pithead", "Pithead"), Jx("electric_eel", "Electric Eel"), Jx("shadow_darter", "Shadow Darter"), Jx("abyss_carp", "Abyss Carp"), Jx("nomai_moray", "Nomai Moray"), Jx("silver_dragonfish", "Silver Dragonfish"), Jx("giant_moray", "Giant Moray"), Jx("coelacanth", "Coelacanth", xx), Jx("frost_herring", "Frost Herring"), Jx("permafrost_halibut", "Permafrost Halibut"), Jx("glacial_lanternfish", "Glacial Lanternfish"), Jx("frozen_grenadier", "Frozen Grenadier"), Jx("blackfin_icefish", "Blackfin Icefish"), Jx("moonfish", "Moonfish"), Jx("alpha_strongfish", "Alpha Moon Strongfish"), Jx("deep_lanternfish", "Deepwater Lanternfish", xx), Jx("pearlescent_moonfish", "Pearlescent Moonfish", xx), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: de
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Vx
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Vx
      }],
      Ux = (new Map(Yx.map((VV => [VV.id, VV]))), new Map),
      yx = new Map;
    for (const cp of Yx) {
      for (const [VV, eV] of Object.entries(null !== (px = cp.blocks) && void 0 !== px ? px : {})) {
        var px;
        Ux.set(VV, {
          collection: cp,
          amount: eV
        })
      }
      for (const VV of null !== (Qx = cp.drops) && void 0 !== Qx ? Qx : []) {
        var Qx;
        yx.set(VV, cp)
      }
    }

    function nx(VV, eV) {
      let xV = 0;
      for (; xV < VV.tiers.length && eV >= VV.tiers[xV].amount;) xV++;
      return xV
    }
    const wx = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Zx(VV) {
      return wx[VV - 1]
    }
    const vx = "skyblockCollectionsView";
    class rx extends QV {
      constructor(VV, eV) {
        let xV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          JV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV => VV;
        super(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = eV, this.locale = xV, this.itemName = JV, this.counts = null, this.category = "mining", this.selected = Yx[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = VV => {
          this.category = VV, this.selected = this.inCategory(VV)[0].id, this.emit()
        }, this.select = VV => {
          this.selected = VV, this.emit()
        }
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, this.locale = eV, this.itemName = xV, this.emit()
      }
      RZ(VV) {
        if (!this.ik)
          if ("collOpen" !== VV.kind) {
            (VV.collFull || null === this.counts) && (this.counts = new Map);
            for (const [eV, xV] of VV.collCounts) this.counts.set(eV, xV);
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
        var VV;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const eV = this.inCategory(this.category).map((VV => this.collectionView(VV))),
          xV = Yx.reduce(((VV, eV) => VV + this.tierOf(eV)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: He.map((VV => this.categoryView(VV))),
          collections: eV,
          detail: null !== (VV = eV.find((VV => VV.selected))) && void 0 !== VV ? VV : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(xV)
          })
        }
      }
      categoryView(VV) {
        const eV = this.inCategory(VV),
          xV = eV.reduce(((VV, eV) => VV + this.tierOf(eV)), 0),
          JV = eV.reduce(((VV, eV) => VV + eV.tiers.length), 0);
        return {
          id: VV,
          label: this.translate(`skyblockGame:${VV}`),
          icon: Ee[VV],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(xV),
            target: this.number(JV)
          }),
          selected: VV === this.category
        }
      }
      collectionView(VV) {
        var eV, xV;
        const JV = null !== (eV = this.counts.get(VV.id)) && void 0 !== eV ? eV : 0,
          YV = nx(VV, JV),
          UV = null !== (xV = VV.tiers[YV]) && void 0 !== xV ? xV : null,
          yV = 0 === YV ? 0 : VV.tiers[YV - 1].amount;
        return {
          id: VV.id,
          name: this.itemName(VV.item),
          icon: VV.item,
          selected: VV.id === this.selected,
          locked: 0 === JV,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(JV)
          }),
          tier: 0 === YV ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(YV),
          percent: null === UV ? 100 : Math.min(100, (JV - yV) / (UV.amount - yV) * 100),
          progress: null === UV ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(JV),
            target: this.number(UV.amount)
          }),
          nextReward: null === UV ? null : this.reward(VV, UV.coins, UV.xp)
        }
      }
      reward(VV, eV, xV) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(eV),
          xp: this.number(xV),
          skill: this.translate(`skyblockGame:${VV.category}`)
        })
      }
      tierLabel(VV) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Zx(VV)
        })
      }
      tierOf(VV) {
        var eV;
        return nx(VV, null !== (eV = this.counts.get(VV.id)) && void 0 !== eV ? eV : 0)
      }
      inCategory(VV) {
        return Yx.filter((eV => eV.category === VV))
      }
      number(VV) {
        return VV.toLocaleString(this.locale)
      }
    }
    const kx = "skyblockPortalTransitView",
      bx = "skyblockPortalArrival";
    class Ex {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.QZ = VV, this.storage = eV, this.now = xV, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      RZ(VV) {
        const eV = {
          zoneNameKey: VV.transitZoneNameKey,
          variation: VV.transitZoneVariation,
          colour: VV.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(bx, eV), this.show("departure", eV.zoneNameKey, eV.colour, VV.transitDurationMs, VV.transitDurationMs + 1500, (() => {
          this.storage.removeItem(bx)
        }))
      }
      resumeArrival(VV) {
        const eV = this.storage.getItem(bx);
        this.storage.removeItem(bx), null === eV || eV.variation !== VV || this.now() - eV.departedAt > 3e4 || this.show("arrival", eV.zoneNameKey, eV.colour, 3200, 2e4)
      }
      finishArrival(VV) {
        var eV;
        "arrival" === (null === (eV = this.view) || void 0 === eV ? void 0 : eV.phase) && this.view.token === VV && (this.clearTimer(), this.view = null, this.QZ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(VV, eV, xV, JV, YV, UV) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: VV,
          zoneNameKey: eV,
          colour: xV,
          durationMs: JV
        }, this.QZ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.QZ(null), null === UV || void 0 === UV || UV()
        }), YV)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Bx = "skyblockDailyRewardView",
      jx = "skyblockDailyRewardCoin";
    class qx {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.QZ = VV, this.isBusy = eV, this.holdQuestPopups = xV, this.onHeldCoinsChanged = JV, this.onCoinLanded = YV, this.onStarted = UV, this.onFinished = yV, this.onItemLanded = pV, this.now = QV, this.hn = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var VV, eV;
        return null !== (VV = null === (eV = this.playing) || void 0 === eV ? void 0 : eV.view) && void 0 !== VV ? VV : null
      }
      getHeldCoins() {
        var VV, eV;
        let xV = 0;
        for (const JV of this.hn) xV += JV.coins;
        return xV - (null !== (VV = null === (eV = this.playing) || void 0 === eV ? void 0 : eV.released) && void 0 !== VV ? VV : 0)
      }
      RZ(VV) {
        "dailyRewardClaimed" !== VV.kind ? (this.queue.push(VV), this.iZ()) : this.hn.push({
          coins: VV.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      iZ() {
        const VV = this.now();
        if (null === this.playing) return this.releaseUnshown(VV), void this.startNext(VV);
        const eV = this.playing,
          xV = VV - eV.startedAt,
          JV = eV.view.flyingCoins,
          YV = function(VV, eV) {
            let xV = 0;
            for (; xV < eV && Fx(xV, eV) <= VV;) xV++;
            return xV
          }(xV, JV);
        if (YV !== eV.landed) {
          for (let VV = YV - eV.landed > 2 ? YV - 1 : eV.landed; VV < YV; VV++) this.onCoinLanded(VV, JV);
          eV.landed = YV, eV.released = Math.round(eV.view.coins * YV / JV), this.onHeldCoinsChanged()
        }
        for (; eV.itemsLanded < eV.view.items.length && 2e3 + 160 * eV.itemsLanded + 630 <= xV;) this.onItemLanded(eV.itemsLanded), eV.itemsLanded++;
        xV >= eV.view.durationMs && (this.finish(), this.startNext(VV))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.hn = [], this.QZ(null)
      }
      startNext(VV) {
        if (0 === this.queue.length || this.isBusy()) return;
        const eV = this.queue.shift();
        this.token++;
        const xV = {
          token: this.token,
          day: eV.dailyRewardDay,
          coins: eV.dailyRewardCoins,
          items: eV.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: eV.dailyRewardDay === NV ? 24 : 14
        };
        this.playing = {
          view: xV,
          startedAt: VV,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.QZ(xV), this.onStarted(xV)
      }
      finish() {
        this.hn.shift(), this.playing = null, this.holdQuestPopups(!1), this.QZ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(VV) {
        if (this.queue.length > 0 || 0 === this.hn.length) return;
        const eV = this.hn.length;
        this.hn = this.hn.filter((eV => VV - eV.receivedAt < 6e4)), this.hn.length !== eV && this.onHeldCoinsChanged()
      }
    }

    function tx(VV, eV) {
      return 450 + 715 * VV / (eV - 1)
    }

    function Fx(VV, eV) {
      return tx(VV, eV) + 650
    }
    const Tx = "skyblockMailboxView";
    class Px {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.QZ = VV, this.isBusy = eV, this.onStarted = xV, this.now = JV, this.waiting = [], this.playing = null, this.token = 0, this.itemName = VV => VV
      }
      getSnapshot() {
        var VV, eV;
        return null !== (VV = null === (eV = this.playing) || void 0 === eV ? void 0 : eV.view) && void 0 !== VV ? VV : null
      }
      setItemName(VV) {
        this.itemName = VV
      }
      RZ(VV) {
        this.waiting.push(...VV.mailLetters), this.iZ()
      }
      iZ() {
        const VV = this.now();
        null !== this.playing && VV - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.QZ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(VV)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.QZ(null)
      }
      start(VV) {
        const eV = this.waiting.slice(0, 3);
        this.token++;
        const xV = {
          token: this.token,
          letters: eV.map((VV => this.toView(VV))),
          more: this.waiting.length - eV.length,
          durationMs: 4500 + 700 * eV.length
        };
        this.waiting = [], this.playing = {
          view: xV,
          startedAt: VV
        }, this.QZ(xV), this.onStarted(xV)
      }
      toView(VV) {
        return {
          coins: VV.mailCoins,
          items: VV.mailItems.map((VV => {
            var eV;
            return {
              itemName: VV.mailItemName,
              amount: VV.mailItemAmount,
              label: null !== (eV = VV.mailItemLabel) && void 0 !== eV ? eV : this.itemName(VV.mailItemName)
            }
          })),
          reasonKey: VV.mailReasonKey,
          reasonParams: VV.mailReasonParams
        }
      }
    }
    const Ax = "skyblockQuestGraphView",
      Nx = "skyblockDevQuestJump";

    function Xx(VV) {
      if (0 === VV.length) return "";
      const eV = [`M ${VV[0].x} ${VV[0].y}`];
      for (let JV = 1; JV < VV.length - 1; JV++) {
        const xV = VV[JV + 1];
        eV.push(`Q ${VV[JV].x} ${VV[JV].y} ${(VV[JV].x+xV.x)/2} ${(VV[JV].y+xV.y)/2}`)
      }
      const xV = VV[VV.length - 1];
      return eV.push(`L ${xV.x} ${xV.y}`), eV.join(" ")
    }

    function Mx(VV, eV) {
      return VV < eV ? `${VV}|${eV}` : `${eV}|${VV}`
    }
    class zx extends QV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(VV, xV, JV), this.translate = eV, this.requestJump = YV, this.requestArrive = UV, this.storage = yV, this.now = pV, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = VV => {
          VV !== this.hoveredId && (this.hoveredId = VV, this.emit())
        }, this.jump = VV => {
          this.close(), this.requestJump(VV)
        }
      }
      RZ(VV) {
        if (!this.ik)
          if ("graph" !== VV.kind) {
            if ("jumping" === VV.kind) {
              const eV = {
                questId: VV.graphQuestId,
                variation: VV.graphVariation,
                completes: VV.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Nx, eV)
            }
          } else {
            const eV = ++this.graphCount;
            xV.e(133).then((() => xV(6987))).then((xV => {
              let {
                default: JV
              } = xV;
              this.ik || eV !== this.graphCount || (this.layout = function(VV, eV, xV) {
                var JV, YV;
                const UV = new VV.graphlib.Graph;
                UV.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), UV.setDefaultEdgeLabel((() => ({})));
                const yV = new Set;
                for (const wV of eV) yV.add(wV.graphQuestId), UV.setNode(wV.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const pV = xV.filter((VV => yV.has(VV.graphFromId) && yV.has(VV.graphToId) && VV.graphFromId !== VV.graphToId)),
                  QV = new Map;
                for (const wV of [...pV].sort(((VV, eV) => Number("awaits" === VV.graphEdgeKind) - Number("awaits" === eV.graphEdgeKind)))) {
                  const VV = Mx(wV.graphFromId, wV.graphToId);
                  QV.has(VV) || (QV.set(VV, wV), UV.setEdge(wV.graphFromId, wV.graphToId))
                }
                VV.layout(UV);
                const nV = UV.graph();
                return {
                  width: Math.ceil(null !== (JV = nV.width) && void 0 !== JV ? JV : 0),
                  height: Math.ceil(null !== (YV = nV.height) && void 0 !== YV ? YV : 0),
                  nodes: eV.map((VV => {
                    var eV, xV;
                    const JV = UV.node(VV.graphQuestId);
                    return {
                      node: VV,
                      left: (null !== (eV = JV.x) && void 0 !== eV ? eV : 0) - 95,
                      top: (null !== (xV = JV.y) && void 0 !== xV ? xV : 0) - 26
                    }
                  })),
                  edges: pV.map((VV => {
                    var eV;
                    const xV = QV.get(Mx(VV.graphFromId, VV.graphToId)),
                      JV = null !== (eV = UV.edge(xV.graphFromId, xV.graphToId).points) && void 0 !== eV ? eV : [];
                    return {
                      edge: VV,
                      key: `${VV.graphFromId}|${VV.graphToId}|${VV.graphEdgeKind}`,
                      path: Xx(xV.graphFromId === VV.graphFromId ? JV : [...JV].reverse())
                    }
                  })),
                  plans: new Map(eV.map((VV => [VV.graphQuestId, new Set([VV.graphQuestId, ...VV.graphPlanIds])])))
                }
              }(JV, VV.graphNodes, VV.graphEdges), this.show())
            })).catch((VV => {
              console.error("The quest graph could not be laid out", VV)
            }))
          }
      }
      resumeJump(VV) {
        const eV = this.storage.getItem(Nx);
        this.storage.removeItem(Nx), null === eV || eV.variation !== VV || this.now() - eV.departedAt > 6e4 || this.requestArrive(eV.questId, eV.completes)
      }
      setTranslator(VV) {
        this.translate = VV, this.emit()
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
        var VV, eV;
        return null !== (VV = null === this.hoveredId || null === (eV = this.layout) || void 0 === eV ? void 0 : eV.plans.get(this.hoveredId)) && void 0 !== VV ? VV : new Set
      }
      buildSnapshot() {
        const VV = this.layout;
        if (null === VV) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const eV = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: VV.width,
          height: VV.height,
          nodes: VV.nodes.map((VV => {
            let {
              node: xV,
              left: JV,
              top: YV
            } = VV;
            return {
              id: xV.graphQuestId,
              name: this.translate(xV.graphNameKey),
              detail: null === xV.graphGiverName ? xV.graphZoneId : `${xV.graphGiverName} \xb7 ${xV.graphZoneId}`,
              state: xV.graphState,
              left: JV,
              top: YV,
              inPlan: eV.has(xV.graphQuestId),
              hovered: xV.graphQuestId === this.hoveredId
            }
          })),
          edges: VV.edges.map((VV => {
            let {
              edge: xV,
              key: JV,
              path: YV
            } = VV;
            return {
              key: JV,
              kind: xV.graphEdgeKind,
              path: YV,
              inPlan: eV.has(xV.graphFromId) && eV.has(xV.graphToId)
            }
          })),
          planning: eV.size > 0
        }
      }
    }
    var Gx = xV(38239);
    const Wx = 250,
      Rx = 2150,
      gx = -2.8,
      Dx = 2.2,
      ix = -27,
      Cx = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      ax = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      ox = Math.round(50 + 1e3 * (ax.delay + ax.period / 2)),
      cx = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      hx = Array.from({
        length: 26
      }, ((VV, eV) => {
        const xV = 2.39996 * eV,
          JV = .5 + .618034 * eV % 1 * .23,
          YV = eV % 3 !== 2;
        return {
          rune: YV ? cx[7 * eV % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(xV)*JV).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(xV)*JV).toFixed(3)})`,
            "--spin": 40 * (eV % 5 - 2) + "deg",
            "--size": (YV ? 1 + eV % 4 * .2 : .3 + eV % 2 * .15) + "rem",
            "--duration": `${(1.8+7*eV%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*eV%3).toFixed(2)}s`
          }
        }
      }));

    function lx(VV, eV) {
      return Array.from({
        length: 30 + 3 * VV + (eV ? 10 : 0)
      }, ((VV, eV) => {
        const xV = eV < 4,
          JV = xV ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          YV = xV ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          UV = xV ? 2.2 : .6 + Math.random(),
          yV = xV ? .3 : Math.random() < .5 ? .16 : .24,
          pV = xV ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": JV,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${YV.toFixed(2)}rem`,
          "--length": `${UV.toFixed(2)}rem`,
          "--width": `${yV}rem`,
          "--duration": `${Math.round(pV)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Lx(VV) {
      let {
        zeta: eV,
        period: xV
      } = VV;
      const JV = 2 * Math.PI / xV;
      return {
        w: JV,
        decay: eV * JV / Math.sqrt(1 - eV * eV)
      }
    }
    let fx = !1;

    function mx() {
      if (fx) return;
      fx = !0;
      const VV = document.createElement("style");
      VV.textContent = function() {
        const VV = Lx(Cx),
          eV = Lx(ax),
          xV = eV => Math.exp(-VV.decay * eV) * Math.sin(VV.w * eV),
          JV = xV(Math.atan(VV.w / VV.decay) / VV.w),
          YV = .25,
          UV = 2.15,
          yV = Math.round(215),
          pV = [];
        for (let QV = 0; QV <= yV; QV++) {
          const VV = QV / yV * UV;
          let nV = Math.sin(Math.min(VV, YV) / YV * Math.PI / 2) ** 2,
            wV = 0,
            ZV = 1,
            vV = 1 - .2 * nV,
            rV = 1;
          if (VV >= YV) {
            const yV = VV - YV,
              pV = Math.max(0, yV - .05);
            nV = Math.exp(-pV / .05), wV = xV(pV + Cx.lead * (1 - Math.exp(-pV / Cx.rush))) / JV;
            const QV = pV - ax.delay,
              kV = QV <= 0 ? 0 : 1 - Math.exp(-eV.decay * QV) * (Math.cos(eV.w * QV) + eV.decay / eV.w * Math.sin(eV.w * QV)),
              bV = Math.max(0, (VV - 1.77) / (UV - 1.77));
            ZV = (1 + (ax.to - 1) * kV) * (1 + .08 * bV), vV = 1.1 + 1.5 * Math.exp(-yV / .07) + .3 * Math.exp(-(((1e3 * yV - ox) / 100) ** 2)) + .8 * bV, rV = 1 - bV ** 1.5
          }
          const kV = .15 * nV + gx * wV,
            bV = -.1 * nV + Dx * wV,
            EV = 3 * nV + ix * wV;
          pV.push(`${(QV/yV*100).toFixed(3)}% { opacity: ${rV.toFixed(3)}; transform: translate(${kV.toFixed(3)}rem, ${bV.toFixed(3)}rem) rotate(${EV.toFixed(2)}deg) scale(${ZV.toFixed(3)}); filter: brightness(${vV.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${pV.join(" ")} }`
      }(), document.head.append(VV)
    }
    const Kx = "skyblockForgeView",
      Hx = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class ux extends QV {
      constructor(VV, eV, xV, JV, YV) {
        super(VV, xV, JV), this.translate = eV, this.requestForge = YV, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (VV, eV) => {
          var xV, JV;
          null !== this.forging || (null !== (xV = this.owned[(0, Gx.p)(eV, VV)]) && void 0 !== xV ? xV : 0) <= 0 || (this.selected[VV] = this.selected[VV] === eV ? null : eV, this.status = null, null === (JV = this.onPartSelected) || void 0 === JV || JV.call(this), this.emit())
        }, this.forge = VV => {
          var eV, xV;
          const JV = this.selectedParts();
          if (null === JV || this.isPending() || !this.open) return;
          const YV = (0, Gx.m)(JV);
          if (null === YV || YV.coalCost > this.coal) return;
          const UV = this.preview(YV),
            yV = null !== (eV = null === (xV = this.onForgeStarted) || void 0 === xV ? void 0 : xV.call(this, UV.tier, UV.named, VV)) && void 0 !== eV ? eV : () => {};
          if (this.dropArrival(), VV) {
            const VV = {
              id: ++this.forgeId,
              preview: UV,
              timers: [],
              stopSounds: yV,
              landed: !1,
              reply: null
            };
            VV.timers.push(setTimeout((() => {
              VV.landed = !0, null !== VV.reply && (this.apply(VV.reply), VV.reply = null, this.emit())
            }), Wx), setTimeout((() => {
              this.finishForge(VV)
            }), Rx)), this.forging = VV
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(JV)
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        var eV;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === VV.forgeMessageKind) return this.dropForge(), this.apply(VV), this.status = null, this.show(), void(null === (eV = this.onOpened) || void 0 === eV || eV.call(this));
        const xV = this.forging;
        if (null !== xV && null !== VV.forgeRefusalKey) this.dropForge();
        else if (null !== xV && !xV.landed) return void(xV.reply = VV);
        this.apply(VV), this.emit()
      }
      apply(VV) {
        if (this.owned = VV.forgeOwnedParts, this.coal = VV.forgeCoalOwned, this.keepSelectionOwned("open" === VV.forgeMessageKind), null !== VV.forgeForgedSwordId) {
          var eV;
          const xV = (0, Gx.m)(VV.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (eV = null === xV || void 0 === xV ? void 0 : xV.displayName) && void 0 !== eV ? eV : ""
            }
          }
        } else null !== VV.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: VV.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(VV) {
        this.translate = VV, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(VV) {
        var eV;
        this.forging = null;
        const xV = this.selectedParts(),
          JV = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: VV.id,
          sameSword: null !== xV && (null === (eV = (0, Gx.m)(xV)) || void 0 === eV ? void 0 : eV.displayName) === VV.preview.name,
          timer: JV
        }, this.emit()
      }
      dropForge() {
        const VV = this.forging;
        if (null !== VV) {
          this.forging = null;
          for (const eV of VV.timers) clearTimeout(eV);
          VV.stopSounds(), null !== VV.reply && this.apply(VV.reply)
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
        var VV, eV, xV;
        const JV = this.selectedParts(),
          YV = null === JV ? null : (0, Gx.m)(JV),
          UV = null !== (VV = null === (eV = this.forging) || void 0 === eV ? void 0 : eV.preview) && void 0 !== VV ? VV : null === YV ? null : this.preview(YV);
        return {
          enabled: this.received,
          open: this.open,
          slots: Gx.l.map((VV => ({
            kind: VV,
            label: this.translate(Hx[VV]),
            parts: this.partsFor(VV)
          }))),
          coalOwned: this.coal,
          preview: UV,
          unformedSword: Gx.h[null !== (xV = this.selected.Blade) && void 0 !== xV ? xV : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((VV => VV > 0)),
          canForge: null !== UV && !UV.coalShort && !this.isPending(),
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
      preview(VV) {
        return {
          name: VV.displayName,
          lore: VV.lore,
          baseSword: VV.baseSword,
          enchantmentTier: VV.enchantmentTier,
          tier: Number(VV.enchantmentTier.slice(-1)),
          named: VV.named,
          stats: this.stats(VV),
          effects: VV.effects,
          coalCost: VV.coalCost,
          coalShort: null === this.forging && VV.coalCost > this.coal
        }
      }
      partsFor(VV) {
        const eV = [];
        for (const JV of Gx.g) {
          var xV;
          const YV = (0, Gx.p)(JV, VV),
            UV = null !== (xV = this.owned[YV]) && void 0 !== xV ? xV : 0;
          UV > 0 && eV.push({
            material: JV,
            itemName: YV,
            owned: UV,
            selected: this.selected[VV] === JV,
            placeholder: !1
          })
        }
        if (0 === eV.length) {
          const xV = Gx.g[0];
          eV.push({
            material: xV,
            itemName: (0, Gx.p)(xV, VV),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return eV
      }
      stats(VV) {
        const eV = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${VV.powerMultiplier.toFixed(2)}`,
          better: VV.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${VV.damageMultiplier.toFixed(2)}`,
          better: VV.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/VV.cooldownMultiplier).toFixed(2)}`,
          better: VV.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${VV.knockbackMultiplier.toFixed(2)}`,
          better: VV.knockbackMultiplier > 1
        }];
        return VV.reachBonus > 0 && eV.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${VV.reachBonus.toFixed(1)}`,
          better: !0
        }), VV.damageReduction > 0 && eV.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*VV.damageReduction)}%`,
          better: !0
        }), eV
      }
      selectedParts() {
        const {
          Blade: VV,
          Guard: eV,
          Handle: xV
        } = this.selected;
        return null === VV || null === eV || null === xV ? null : {
          blade: VV,
          guard: eV,
          handle: xV
        }
      }
      keepSelectionOwned(VV) {
        for (const xV of Gx.l) {
          var eV;
          const JV = this.selected[xV];
          if (null !== JV && (null !== (eV = this.owned[(0, Gx.p)(JV, xV)]) && void 0 !== eV ? eV : 0) > 0) continue;
          if (!VV) {
            this.selected[xV] = null;
            continue
          }
          const YV = [...Gx.g].reverse().find((VV => {
            var eV;
            return (null !== (eV = this.owned[(0, Gx.p)(VV, xV)]) && void 0 !== eV ? eV : 0) > 0
          }));
          this.selected[xV] = null !== YV && void 0 !== YV ? YV : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const sx = "skyblockSmugglerView",
      Sx = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Ix extends QV {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(VV, xV, JV), this.translate = eV, this.requestBuy = YV, this.now = UV, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = VV => VV, this.onBought = null, this.buy = VV => {
          const eV = this.deals[VV];
          void 0 !== eV && !this.isPending() && this.open && !this.soldOut.has(VV) && this.canAfford(eV) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, VV))
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        if (this.received = !0, this.day = VV.smugglerDay, this.deals = VV.smugglerDeals, this.rivets = VV.smugglerRivetsOwned, this.crests = VV.smugglerCrestsOwned, this.soldOut = new Set(VV.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + VV.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === VV.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = VV.smugglerBoughtSlot, null !== VV.smugglerBoughtSlot) {
          var eV, xV;
          const JV = this.deals[VV.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === JV ? "" : this.dealName(JV),
              amount: String(null !== (eV = null === JV || void 0 === JV ? void 0 : JV.smugglerDealAmount) && void 0 !== eV ? eV : 0)
            }
          }, this.boughtCount++, null === (xV = this.onBought) || void 0 === xV || xV.call(this)
        } else null !== VV.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: VV.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, void 0 !== xV && (this.itemName = xV), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(VV) {
        if (null !== VV.smugglerDealUniqueName) return VV.smugglerDealUniqueName;
        const eV = Sx[VV.smugglerDealItem];
        return void 0 === eV ? this.itemName(VV.smugglerDealItem) : this.translate(eV)
      }
      canAfford(VV) {
        return VV.smugglerDealRivets <= this.rivets && VV.smugglerDealCrests <= this.crests
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
        const VV = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return VV <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : VV < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(VV)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(VV / 60)),
          minutes: String(VV % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((VV, eV) => ({
            slot: eV,
            itemName: VV.smugglerDealItem,
            displayName: this.dealName(VV),
            enchantmentTier: VV.smugglerDealEnchantmentTier,
            amount: VV.smugglerDealAmount,
            rivets: VV.smugglerDealRivets,
            crests: VV.smugglerDealCrests,
            affordable: this.canAfford(VV),
            soldOut: this.soldOut.has(eV),
            justBought: this.boughtSlot === eV
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
    const dx = "skyblockPassageView",
      Ox = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function VJ(VV, eV) {
      return VV(Ox[eV])
    }

    function eJ(VV, eV, xV, JV) {
      const YV = Math.ceil((xV - JV) / 864e5),
        UV = VJ(VV, eV);
      return YV > 1 ? VV("skyblockGame:passageNextDays", {
        phase: UV,
        days: String(YV)
      }) : VV("skyblockGame:passageNextSoon", {
        phase: UV
      })
    }
    class xJ extends QV {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(VV, xV, JV), this.translate = eV, this.now = YV, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = VV => VV, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        this.message = VV, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, void 0 !== xV && (this.itemName = xV), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(VV) {
        return {
          itemName: VV.passageFish,
          displayName: this.itemName(VV.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(VV.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const VV = this.message;
        return null === VV ? {
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
          phase: VV.passagePhase,
          phaseName: VJ(this.translate, VV.passagePhase),
          visitors: VV.passageVisitors.map((VV => this.describe(VV))),
          resting: this.describe(VV.passageResting),
          nextPhase: VV.passageNextPhase,
          next: eJ(this.translate, VV.passageNextPhase, VV.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var JJ = xV(39728);
    const YJ = "skyblockKeepersChairView";
    class UJ extends QV {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new JJ.c;
        super(VV, xV, JV), this.translate = eV, this.requestAim = YV, this.now = UV, this.pacer = yV, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = VV => VV, this.aim = VV => {
          !this.awaitingReply && this.open && this.atChair && VV !== this.favoured && (null === VV || this.islands.some((eV => eV.keepersChairIslandId === VV && eV.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== VV && void 0 !== VV ? VV : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = yV.subscribe((() => {
          this.emit()
        }))
      }
      RZ(VV) {
        var eV, xV;
        this.received = !0;
        const JV = this.favoured,
          YV = this.atChair;
        var UV;
        return this.islands = VV.keepersChairIslands, this.favoured = VV.keepersChairFavoured, this.passage = null !== (eV = VV.keepersChairPassage) && void 0 !== eV ? eV : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (xV = VV.keepersChairAtChair) || void 0 === xV || xV, "place" === VV.keepersChairMessageKind ? (!YV && this.atChair && "refused" === (null === (UV = this.status) || void 0 === UV ? void 0 : UV.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === VV.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== VV.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: VV.keepersChairRefusalKey,
          island: null
        } : this.favoured !== JV && (this.status = null === this.favoured ? {
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
      receivePassage(VV) {
        this.received && (this.passage = VV, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, void 0 !== xV && (this.itemName = xV), this.emit()
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
      islandName(VV) {
        const eV = this.islands.find((eV => eV.keepersChairIslandId === VV));
        return void 0 === eV ? VV : this.translate(eV.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const VV = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          eV = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((VV => {
            const eV = VV.keepersChairFeaturedFish;
            return {
              id: VV.keepersChairIslandId,
              name: this.translate(VV.keepersChairIslandNameKey),
              relit: VV.keepersChairIslandRelit,
              featuredFish: null === eV ? null : {
                itemName: eV,
                displayName: this.itemName(eV)
              },
              favoured: VV.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === VV ? null : {
            tone: VV.tone,
            text: this.translate(VV.key, null === VV.island ? void 0 : {
              island: this.islandName(VV.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === eV ? null : {
            phase: eV.keepersChairPassagePhase,
            phaseName: VJ(this.translate, eV.keepersChairPassagePhase),
            nextPhase: eV.keepersChairPassageNextPhase,
            next: eJ(this.translate, eV.keepersChairPassageNextPhase, eV.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const yJ = "skyblockReachLogView",
      pJ = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      QJ = "Caught Fish",
      nJ = [1, 2, 4];

    function wJ(VV, eV) {
      return VV.map((VV => ({
        ...VV,
        reachLogPageFish: VV.reachLogPageFish.map((VV => ({
          ...VV,
          reachLogFishFresh: eV(VV)
        })))
      })))
    }
    class ZJ extends QV {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new JJ.c;
        super(VV, xV, JV), this.translate = eV, this.requestOpen = YV, this.pacer = UV, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = VV => VV, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = VV => {
          this.pages.some((eV => eV.reachLogIslandId === VV)) && (this.selected = VV, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = UV.subscribe((() => {
          this.emit()
        }))
      }
      RZ(VV) {
        if (this.received = !0, "status" === VV.reachLogMessageKind) return !0 === VV.reachLogNews && this.markNews(), this.serverFresh = VV.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const eV = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== VV.reachLogMessageKind)
          if (this.pageViews = null, this.pages = wJ(VV.reachLogPages, (VV => VV.reachLogFishFresh || this.heldFresh.has(VV.reachLogFishItem))), this.letGoShown = VV.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, eV) this.showPages();
          else {
            for (const VV of this.pages)
              for (const eV of VV.reachLogPageFish) eV.reachLogFishFresh && this.heldFresh.add(eV.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, this.pageViews = null, void 0 !== xV && (this.itemName = xV), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = wJ(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var VV, eV, xV, JV;
        const YV = this.pages.find((VV => VV.reachLogPageFish.some((VV => VV.reachLogFishFresh))));
        if (void 0 !== YV) return YV.reachLogIslandId;
        if (null !== this.selected && this.pages.some((VV => VV.reachLogIslandId === this.selected))) return this.selected;
        return null !== (VV = null !== (eV = null === (xV = this.pages.filter((VV => VV.reachLogIslandAwake)).at(-1)) || void 0 === xV ? void 0 : xV.reachLogIslandId) && void 0 !== eV ? eV : null === (JV = this.pages[0]) || void 0 === JV ? void 0 : JV.reachLogIslandId) && void 0 !== VV ? VV : null
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
        return this.pages.map((VV => {
          var eV;
          return {
            id: VV.reachLogIslandId,
            name: this.translate(VV.reachLogIslandNameKey),
            awake: VV.reachLogIslandAwake,
            gold: VV.reachLogPageGold,
            caught: VV.reachLogPageFish.filter((VV => VV.reachLogFishCaught && !VV.reachLogFishVisitor)).length,
            total: VV.reachLogPageFish.filter((VV => !VV.reachLogFishVisitor)).length,
            fish: VV.reachLogPageFish.map((VV => {
              const eV = VV.reachLogFishBestKg;
              return {
                itemName: VV.reachLogFishItem,
                name: VV.reachLogFishCaught ? this.itemName(VV.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: VV.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / VV.reachLogFishChance))
                }),
                best: VV.reachLogFishCaught ? null === eV ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: eV.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: VV.reachLogFishMarks,
                ribbons: nJ.map((eV => 0 !== (VV.reachLogFishRibbons & eV))),
                glimmer: 0 !== (8 & VV.reachLogFishRibbons),
                halo: 0 !== (32 & VV.reachLogFishRibbons),
                fresh: VV.reachLogFishFresh,
                visitor: VV.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (eV = VV.reachLogPageReturner) && void 0 !== eV ? eV : null)
          }
        }))
      }
      buildReturner(VV) {
        return null === VV ? null : {
          itemName: VV.reachLogReturnerFishItem,
          line: this.translate(VV.reachLogReturnerLineKey, {
            name: this.translate(VV.reachLogReturnerNameKey),
            trinket: this.translate(VV.reachLogReturnerTrinketKey)
          }),
          back: VV.reachLogReturnerBack
        }
      }
      receivePassagePhase(VV) {
        null !== this.passagePhase && this.passagePhase !== VV && (this.pagesCurrent = !1), this.passagePhase = VV
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const vJ = "skyblockLampLightView";
    class rJ {
      constructor(VV, eV, xV, JV) {
        this.QZ = VV, this.translate = eV, this.requestCommand = xV, this.pacer = JV, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.ik = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = VV => {
          VV ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = VV => {
          this.send(`buy ${VV}`)
        }, this.socket = VV => {
          this.send(`socket ${null!==VV&&void 0!==VV?VV:gV}`)
        }, this.wearTint = VV => {
          this.send(`tint ${null!==VV&&void 0!==VV?VV:gV}`)
        }, this.setSituation = VV => {
          this.situation = VV, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = JV.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = JV.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      RZ(VV) {
        if (this.message = VV, null !== VV.lampLightShop && (this.shop = VV.lampLightShop), "open" === VV.lampLightKind && (this.refusalKey = null), "reply" === VV.lampLightKind) {
          var eV;
          const YV = null !== (eV = VV.lampLightReplyTag) && void 0 !== eV ? eV : null,
            UV = null !== YV && YV === this.offTag;
          var xV, JV;
          if (UV ? this.settleOff() : null !== YV && YV !== this.awaitingTag || this.settleReply(), this.refusalKey = VV.lampLightRefusalKey, null !== VV.lampLightBought && !UV) this.sparkle = {
            id: VV.lampLightBought,
            count: (null !== (xV = null === (JV = this.sparkle) || void 0 === JV ? void 0 : JV.count) && void 0 !== xV ? xV : 0) + 1
          }
        }
        VV.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === VV.lampLightKind && (this.lastGained = VV.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(VV) {
        VV !== this.atChair && (this.atChair = VV, VV && (this.refusalKey = null), this.emit())
      }
      setTranslator(VV, eV) {
        this.translate = VV, this.locale = null !== eV && void 0 !== eV ? eV : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.ik = !0
      }
      send(VV) {
        var eV;
        if (null !== this.awaitingTag || "ready" !== (null === (eV = this.message) || void 0 === eV ? void 0 : eV.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const xV = this.nextTag();
        this.awaitingTag = xV, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${VV} ${xV}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const VV = this.nextTag();
        this.offTag = VV, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${VV}`)
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
        this.ik || (this.snapshot = this.buildSnapshot(), this.QZ(this.snapshot))
      }
      formatLight(VV) {
        return Math.floor(VV).toLocaleString(this.locale)
      }
      formatPercent(VV) {
        const eV = 100 * VV;
        return eV >= 10 ? Math.round(eV).toLocaleString(this.locale) : eV.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(VV, eV) {
        if ("bite" === VV) return this.translate("skyblockGame:lampLightBite", {
          seconds: (eV.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === VV) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(eV.lampLightRareChance)
        });
        if ("notice" === VV) return null === eV.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(eV.lampLightNoticeChance)
        });
        const xV = "meter" === VV ? eV.lampLightMeterCatches : eV.lampLightBloomCatches;
        return null === xV ? null : this.translate("meter" === VV ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(xV))
        })
      }
      oddsLines(VV, eV) {
        const xV = (VV, eV) => {
            var xV;
            return null !== (xV = {
              bite: eV.lampLightBiteMs,
              rare: eV.lampLightRareChance,
              meter: eV.lampLightMeterCatches,
              bloom: eV.lampLightBloomCatches,
              notice: eV.lampLightNoticeChance
            } [VV]) && void 0 !== xV ? xV : 0
          },
          JV = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          YV = [];
        for (const UV of ["bite", "rare", "meter", "bloom", "notice"]) {
          const yV = this.formatOdds(UV, VV),
            pV = this.formatOdds(UV, eV);
          if (null === yV || null === pV || "bite" !== UV && "rare" !== UV && yV === pV) continue;
          const QV = xV(UV, eV) - xV(UV, VV),
            nV = JV[UV] ? QV < 0 : QV > 0;
          YV.push({
            label: UV,
            before: yV,
            after: pV,
            tone: yV === pV ? "same" : nV ? "better" : "worse"
          })
        }
        return YV
      }
      charmView(VV, eV, xV) {
        const JV = VV.lampLightCharmId.charAt(0).toUpperCase() + VV.lampLightCharmId.slice(1),
          YV = "bloom" === this.situation;
        return {
          id: VV.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${JV}`),
          effect: this.translate(`skyblockGame:lampLightCharm${JV}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(VV.lampLightCharmCost)
          }),
          owned: VV.lampLightCharmOwned,
          affordable: xV >= VV.lampLightCharmCost,
          socketed: eV.lampLightSocketed === VV.lampLightCharmId,
          lines: this.oddsLines(YV ? eV.lampLightBareBloom : eV.lampLightBareOpen, YV ? VV.lampLightCharmBloom : VV.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var VV, eV, xV, JV;
        const YV = this.message,
          UV = "ready" === (null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) ? this.shop : null,
          yV = null !== (VV = null === YV || void 0 === YV ? void 0 : YV.lampLightBalance) && void 0 !== VV ? VV : 0,
          pV = this.atChair,
          QV = "loading" === (null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          nV = "ready" !== (null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) || pV ? null !== (eV = this.refusalKey) && void 0 !== eV ? eV : QV : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== YV && "locked" !== YV.lampLightStatus,
          status: null !== (xV = null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) && void 0 !== xV ? xV : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(yV)
          }),
          releasing: null !== (JV = null === YV || void 0 === YV ? void 0 : YV.lampLightReleasing) && void 0 !== JV && JV,
          gained: null === YV || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === YV || void 0 === YV ? void 0 : YV.lampLightStatus) && pV && !this.isPending(),
          situation: this.situation,
          shop: null === UV ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: UV.lampLightOddsRod,
              island: this.translate(UV.lampLightIslandNameKey)
            }),
            heldRod: null !== UV.lampLightHeldRod,
            charms: UV.lampLightCharms.map((VV => this.charmView(VV, UV, yV))),
            tints: UV.lampLightTints.map((VV => {
              const eV = VV.lampLightTintId,
                [xV, JV, YV] = VV.lampLightTintColour;
              return {
                id: eV,
                name: this.translate(`skyblockGame:lampLightTint${eV.charAt(0).toUpperCase()}${eV.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(VV.lampLightTintCost)
                }),
                owned: VV.lampLightTintOwned,
                affordable: yV >= VV.lampLightTintCost,
                wearing: UV.lampLightTint === eV,
                colour: `rgb(${xV}, ${JV}, ${YV})`
              }
            })),
            wearingIslandColours: null === UV.lampLightTint
          },
          notice: null === nV ? null : this.translate(nV),
          sparkle: this.sparkle
        }
      }
    }
    const kJ = "skyblockMagmawardView";
    class bJ {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.QZ = VV, this.now = eV, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = hV.map((() => 0)), this.wornAt = hV.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      RZ(VV) {
        var eV, xV;
        const JV = hV.map(((eV, xV) => !0 === VV.magmawardPiecesWorn[xV]));
        if (!JV.includes(!0)) return this.snapshot = null, void this.QZ(null);
        const YV = this.now(),
          UV = this.snapshot;
        null === UV && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const yV = VV.magmawardFuelCarried,
          pV = !JV.includes(!1);
        let QV = null !== (eV = null === UV || void 0 === UV ? void 0 : UV.pulse) && void 0 !== eV ? eV : null,
          nV = null !== (xV = null === UV || void 0 === UV ? void 0 : UV.flare) && void 0 !== xV ? xV : null;
        VV.magmawardFuelBurned ? (QV = "burn", nV = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = YV, this.flareAt = YV) : null !== UV && yV > UV.fuel && (QV = "gain", this.pulseToken++, this.pulseAt = YV), pV && null !== UV && !UV.fullSet && (nV = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = YV, this.setLitAt = YV);
        const wV = hV.map(((VV, eV) => (JV[eV] && null !== UV && !UV.pieces[eV].worn && (this.wornTokens[eV]++, this.wornAt[eV] = YV), {
          itemName: VV,
          worn: JV[eV],
          wornToken: this.wornTokens[eV],
          justWorn: JV[eV] && this.isPlaying(this.wornAt[eV], YV)
        })));
        this.snapshot = {
          pieces: wV,
          wornCount: JV.filter(Boolean).length,
          fullSet: pV,
          fuel: yV,
          fuelState: yV <= 0 ? "empty" : yV <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, YV) ? QV : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, YV) ? nV : null,
          flareToken: this.flareToken,
          setLit: pV && this.isPlaying(this.setLitAt, YV),
          setLitToken: this.setLitToken
        }, this.QZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.QZ(null)
      }
      isPlaying(VV, eV) {
        return eV - VV < 1200
      }
    }
    const EJ = "skyblockGlowtideView";
    class BJ {
      constructor(VV) {
        this.QZ = VV, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = VV => {
          this.arrow = VV, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      RZ(VV) {
        this.bloom = VV.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.QZ(null))
      }
      afterRender(VV, eV) {
        const xV = this.bloom;
        if (null === xV || null === VV) return;
        const JV = xV.glowtideBloomX - VV[0],
          YV = xV.glowtideBloomZ - VV[2],
          UV = Math.hypot(JV, YV),
          yV = this.snapshot,
          pV = null !== yV && void 0 !== yV && yV.inRange ? 1 : 0,
          QV = UV <= 12.5 + pV && VV[1] - xV.glowtideBloomY <= 10 + pV;
        !QV || null !== yV && void 0 !== yV && yV.inRange || this.inRangeToken++;
        const nV = {
          colour: xV.glowtideBloomColour,
          inRange: QV,
          distance: Math.round(UV),
          inRangeToken: this.inRangeToken
        };
        (null === yV || nV.colour !== yV.colour || nV.inRange !== yV.inRange || !QV && nV.distance !== yV.distance) && (this.snapshot = nV, this.QZ(nV));
        const wV = ZV.b.computeShortestRotation(eV, (0, ZV.Cb)([JV, 0, YV]));
        null === this.arrow || Math.abs(wV - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${wV}rad)`, this.arrowTurn = wV)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.QZ(null)
      }
    }
    const jJ = "skyblockGlowMeterView";
    class qJ {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.QZ = VV, this.now = eV, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      RZ(VV) {
        const eV = this.now(),
          {
            glowMeterFill: xV,
            glowMeterCapacity: JV
          } = VV,
          YV = xV >= JV,
          UV = this.snapshot;
        null !== UV && (YV && !UV.full && (this.fullToken++, this.fullAt = eV), UV.full && !YV ? (this.burstToken++, this.burstAt = eV) : xV > UV.fill && (this.gainToken++, this.gainAt = eV)), this.snapshot = {
          fill: xV,
          Jv: JV,
          ratio: Math.min(1, Math.max(0, xV / JV)),
          full: YV,
          rares: VV.glowMeterRares,
          ready: YV && this.isPlaying(this.fullAt, eV),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, eV),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, eV),
          gainToken: this.gainToken
        }, this.QZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.QZ(null)
      }
      isPlaying(VV, eV) {
        return eV - VV < 2e3
      }
    }
    const tJ = "skyblockHushWaitView";
    class FJ {
      constructor(VV) {
        this.QZ = VV, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      RZ(VV) {
        let {
          hushWaitMs: eV,
          hushWaitTotalMs: xV,
          hushWaitLines: JV
        } = VV;
        if (this.clearTimers(), this.token++, 0 === JV.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (eV <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: JV[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const YV = Math.max(null !== xV && void 0 !== xV ? xV : eV, eV),
          UV = YV - eV,
          yV = VV => YV * VV / JV.length,
          pV = VV => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: YV,
              elapsedMs: UV,
              line: JV[VV],
              lineIndex: VV
            })
          };
        let QV = 0;
        for (; QV + 1 < JV.length && yV(QV + 1) <= UV;) QV++;
        pV(QV);
        for (let nV = QV + 1; nV < JV.length; nV++) this.later(yV(nV) - UV, (() => {
          pV(nV)
        }));
        this.later(eV, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(VV) {
        this.snapshot = VV, this.QZ(VV)
      }
      later(VV, eV) {
        this.timers.push(setTimeout(eV, VV))
      }
      clearTimers() {
        for (const VV of this.timers) clearTimeout(VV);
        this.timers = []
      }
    }
    const TJ = "skyblockTideChartsView",
      PJ = 36e5,
      AJ = 864e5;

    function NJ(VV, eV, xV) {
      const [JV, YV, UV, yV] = VV.tideChartArea, pV = Math.floor(eV), QV = Math.floor(xV);
      return pV >= JV && pV <= UV && QV >= YV && QV <= yV
    }

    function XJ(VV, eV, xV) {
      const [JV, YV, UV, yV] = VV.tideChartWater;
      return function(VV, eV, xV, JV, YV, UV) {
        const yV = 4 - lV(Math.floor(YV) - (VV - xV), xV);
        return 5 * lV(Math.floor(UV) - (eV - JV), JV) + yV
      }(JV, YV, UV, yV, eV, xV)
    }

    function MJ(VV, eV, xV) {
      const JV = VV.tideCharts;
      for (let YV = 0; YV < JV.length; YV++)
        if (NJ(JV[YV], eV, xV)) return JV[YV];
      return null
    }

    function zJ(VV, eV, xV) {
      const JV = Math.max(0, eV - xV);
      return JV > AJ ? VV("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(JV / AJ))
      }) : JV > PJ ? VV("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(JV / PJ))
      }) : VV("skyblockGame:tideChartsTurnSoon")
    }
    class GJ extends QV {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(VV, xV, JV), this.translate = eV, this.now = YV, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Pr = VV => {
          this.picked = VV, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        const eV = this.message;
        if (null !== eV)
          for (const JV of VV.tideCharts) {
            var xV;
            const VV = eV.tideCharts.find((VV => VV.tideChartIsland === JV.tideChartIsland)),
              YV = JV.tideChartLit & ~(null !== (xV = null === VV || void 0 === VV ? void 0 : VV.tideChartLit) && void 0 !== xV ? xV : 0);
            void 0 !== VV && 0 !== YV && (this.pulse = {
              island: JV.tideChartIsland,
              cells: YV,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = VV, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(VV, eV) {
        var xV;
        const JV = null === this.message || Number.isNaN(VV) ? null : MJ(this.message, VV, eV),
          YV = null !== (xV = null === JV || void 0 === JV ? void 0 : JV.tideChartIsland) && void 0 !== xV ? xV : null,
          UV = null === JV ? -1 : function(VV, eV, xV) {
            const [JV, YV, UV, yV] = VV.tideChartWater;
            return function(VV, eV, xV, JV, YV, UV, yV) {
              return ((YV - VV) / (xV + yV)) ** 2 + ((UV - eV) / (JV + yV)) ** 2 <= 1
            }(JV, YV, UV, yV, eV, xV, 2) ? XJ(VV, eV, xV) : -1
          }(JV, VV, eV);
        return (YV !== this.hereIsland || UV !== this.hereCell) && (this.hereIsland = YV, this.hereCell = UV, null !== YV && (this.lastIsland = YV), !0)
      }
      afterRender(VV) {
        if (null === this.message) return;
        this.lastX = null === VV ? Number.NaN : VV[0], this.lastZ = null === VV ? Number.NaN : VV[2];
        const eV = this.locate(this.lastX, this.lastZ),
          xV = this.expirePulses();
        (eV || xV || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const VV = this.now();
        return !(!this.open || VV - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = VV, zJ(this.translate, this.message.tideChartTurnsInMs, VV - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(VV, eV) {
        const xV = null === this.message ? null : MJ(this.message, VV, eV);
        if (null === xV) return;
        const JV = XJ(xV, VV, eV);
        0 === (xV.tideChartPreBlank & 1 << JV) && (this.cast = {
          island: xV.tideChartIsland,
          cell: JV,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const VV = this.now();
        let eV = !1;
        return 0 !== this.pulse.cells && VV - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, eV = !0), null !== this.cast && VV - this.cast.atMs >= 1500 && (this.cast = null, eV = !0), eV
      }
      setTranslator(VV) {
        this.translate = VV, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(VV, eV) {
        var xV;
        return null !== (xV = VV.tideCharts.find((VV => VV.tideChartIsland === eV))) && void 0 !== xV ? xV : null
      }
      describe(VV) {
        var eV, xV, JV;
        const YV = VV.tideChartIsland,
          UV = [];
        for (let rV = 0; rV < 25; rV++) {
          const eV = 1 << rV;
          0 !== (VV.tideChartLit & eV) ? UV.push("lit") : 0 !== (VV.tideChartClear & eV) ? UV.push("clear") : 0 !== (VV.tideChartPreBlank & eV) ? UV.push("shore") : UV.push("water")
        }
        const yV = function(VV) {
            let eV = 0;
            for (let xV = VV >>> 0; 0 !== xV; xV &= xV - 1) eV++;
            return eV
          }(VV.tideChartLit),
          pV = VV.tideChartInkCount,
          QV = this.translate(VV.tideChartIslandNameKey),
          nV = this.translate("skyblockGame:tideChartsLit", {
            lit: String(yV),
            ink: String(pV)
          }),
          wV = null === VV.tideChartPictureNameKey ? null : this.translate(VV.tideChartPictureNameKey),
          ZV = this.hereIsland === YV && -1 !== this.hereCell ? this.hereCell : null,
          vV = [`${QV}: ${nV}.`];
        if (null !== wV && vV.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: wV
          })), null !== ZV) {
          const VV = Math.floor(ZV / 5) + 1,
            eV = ZV % 5 + 1;
          vV.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(VV),
            column: String(eV)
          }))
        }
        return {
          island: YV,
          islandName: QV,
          cells: UV,
          hereCell: ZV,
          lit: yV,
          ink: pV,
          litText: nV,
          pictureName: wV,
          gridLabel: vV.join(" "),
          pulseCells: this.pulse.island === YV ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (eV = this.cast) || void 0 === eV ? void 0 : eV.island) === YV ? this.cast.cell : null,
          castToken: null !== (xV = null === (JV = this.cast) || void 0 === JV ? void 0 : JV.token) && void 0 !== xV ? xV : 0
        }
      }
      buildSnapshot() {
        var VV, eV, xV;
        const JV = this.message;
        if (null === JV || 0 === JV.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const YV = this.findChart(JV, this.hereIsland),
          UV = null !== (VV = null !== (eV = null !== (xV = this.findChart(JV, this.open ? this.picked : null)) && void 0 !== xV ? xV : YV) && void 0 !== eV ? eV : this.findChart(JV, this.lastIsland)) && void 0 !== VV ? VV : JV.tideCharts[0],
          yV = null === YV ? null : this.describe(YV);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: yV,
          card: UV === YV ? yV : this.describe(UV),
          turnsText: zJ(this.translate, JV.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(JV.tideChartBookCount)
          }),
          tabs: JV.tideCharts.map((VV => ({
            island: VV.tideChartIsland,
            name: this.translate(VV.tideChartIslandNameKey),
            selected: VV.tideChartIsland === UV.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const WJ = "skyblockRegularsView",
      RJ = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      gJ = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function DJ(VV, eV) {
      return "given" === VV ? eV.given : "owed" === VV ? eV.owed : eV.goal
    }
    class iJ extends QV {
      constructor(VV, eV, xV, JV) {
        super(VV, xV, JV), this.translate = eV, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = VV => VV, this.openIsland = VV => {
          this.selected = VV, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = VV => {
          this.selected = VV, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        this.message = VV, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const VV = this.openedFromReachLog;
        return this.openedFromReachLog = !1, VV
      }
      setTranslator(VV, eV, xV) {
        this.translate = VV, void 0 !== xV && (this.itemName = xV), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(VV, eV, xV) {
        return {
          text: this.translate(DJ(VV, eV), xV),
          given: "given" === VV
        }
      }
      describeRegular(VV, eV) {
        const xV = this.translate,
          JV = null !== VV.regularKg,
          YV = VV.regularMeetings,
          UV = JV ? 0 === YV ? xV("skyblockGame:regularsNotMet") : 1 === YV ? xV("skyblockGame:regularsMeetingsOne") : xV("skyblockGame:regularsMeetings", {
            count: YV
          }) : "";
        return {
          id: VV.regularId,
          name: xV(VV.regularNameKey),
          line: xV(VV.regularLineKey),
          itemName: VV.regularFishItem,
          fishName: this.itemName(VV.regularFishItem),
          tagged: JV,
          size: null === VV.regularKg ? xV("skyblockGame:regularsNotTagged") : xV("skyblockGame:regularsSize", {
            kg: VV.regularKg.toFixed(1)
          }),
          meetings: UV,
          chance: xV("skyblockGame:regularsChance", {
            count: VV.regularOneInCasts
          }),
          resting: VV.regularRestingToday,
          gifts: [{
            text: xV("skyblockGame:regularsGiftFlare"),
            given: YV >= 3
          }, this.describeGift(VV.regularTintGift, RJ, {
            tint: xV(VV.regularTintNameKey)
          })],
          history: [...VV.regularHistory].reverse().map((VV => {
            const JV = VV.regularMeetingKg.toFixed(1),
              YV = eV - VV.regularMeetingDay;
            return YV <= 0 ? xV("skyblockGame:regularsToday", {
              kg: JV
            }) : xV("skyblockGame:regularsDaysAgo", {
              days: YV,
              kg: JV
            })
          }))
        }
      }
      describeIsland(VV, eV) {
        return {
          id: VV.regularsIslandId,
          name: this.translate(VV.regularsIslandNameKey),
          charm: this.describeGift(VV.regularsCharmGift, gJ, {
            charm: this.translate(VV.regularsCharmNameKey)
          }),
          regulars: VV.regularsList.map((VV => this.describeRegular(VV, eV)))
        }
      }
      buildSnapshot() {
        var VV, eV, xV, JV;
        const YV = this.message;
        if (null === YV) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const UV = YV.regularsIslands.map((VV => this.describeIsland(VV, YV.regularsToday))),
          yV = null !== (VV = null !== (eV = null === (xV = UV.find((VV => VV.id === this.selected))) || void 0 === xV ? void 0 : xV.id) && void 0 !== eV ? eV : null === (JV = UV[0]) || void 0 === JV ? void 0 : JV.id) && void 0 !== VV ? VV : "";
        return {
          enabled: !0,
          open: this.open,
          selected: yV,
          islands: UV
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const CJ = "skyblockHiddenWatersView";
    class aJ {
      constructor(VV) {
        this.QZ = VV, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      RZ(VV) {
        this.snapshot = function(VV) {
          const [eV, xV] = VV.hiddenWatersMapSize, JV = (VV, JV) => ({
            left: 1 - VV / eV,
            top: JV / xV
          }), YV = new Map;
          for (const [yV, pV] of VV.hiddenWatersGlimpses) {
            var UV;
            const VV = null !== (UV = YV.get(yV)) && void 0 !== UV ? UV : [];
            VV.push(pV), YV.set(yV, VV)
          }
          return {
            found: VV.hiddenWatersFound,
            total: VV.hiddenWatersTotal,
            aspect: xV / eV,
            pins: VV.hiddenWatersPins.map((VV => {
              let [eV, xV] = VV;
              return JV(eV, xV)
            })),
            islands: VV.hiddenWatersIslands.map((VV => {
              let [YV, UV, yV, pV] = VV;
              const {
                left: QV,
                top: nV
              } = JV(yV + 1, UV);
              return {
                left: QV,
                top: nV,
                width: (yV + 1 - YV) / eV,
                height: (pV + 1 - UV) / xV
              }
            })),
            glimpses: YV
          }
        }(VV), this.QZ(this.snapshot)
      }
    }
    const oJ = "skyblockDialogueView";
    class cJ extends QV {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(VV, xV, JV), this.translate = eV, this.requestDialogue = YV, this.now = UV, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = VV => {
          this.selection = {
            kind: "quest",
            questId: VV
          }, this.request(), this.show()
        }, this.selectCharacter = VV => {
          this.selection = {
            kind: "character",
            npcId: VV
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      RZ(VV) {
        this.received = !0, this.scripts = VV.questDialogueScripts, this.speakers = new Map(VV.questDialogueSpeakers.map((VV => [VV.dialogueSpeakerId, VV]))), this.emit()
      }
      setTranslator(VV) {
        this.translate = VV, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const VV = this.now();
        VV >= this.requestAvailableAt && (this.requestAvailableAt = VV + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var VV;
        const eV = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...eV,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const xV = this.selection;
        if ("quest" === xV.kind) {
          const VV = this.scripts.find((VV => VV.dialogueQuestId === xV.questId));
          return {
            ...eV,
            characters: [],
            questFocus: xV.questId,
            conversations: VV ? [this.conversation(VV)] : []
          }
        }
        const JV = [];
        for (let UV = this.scripts.length - 1; UV >= 0; UV--) {
          const VV = this.scripts[UV].dialogueLines;
          for (let eV = VV.length - 1; eV >= 0; eV--) JV.includes(VV[eV].dialogueSpeakerId) || JV.push(VV[eV].dialogueSpeakerId)
        }
        const YV = null !== xV.npcId && JV.includes(xV.npcId) ? xV.npcId : null !== (VV = JV[0]) && void 0 !== VV ? VV : null;
        return {
          ...eV,
          characters: JV.map((VV => {
            var eV, xV;
            return {
              id: VV,
              styling: null !== (eV = null === (xV = this.speakers.get(VV)) || void 0 === xV ? void 0 : xV.dialogueSpeakerStyling) && void 0 !== eV ? eV : VV,
              selected: VV === YV
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((VV => VV.dialogueLines.some((VV => VV.dialogueSpeakerId === YV)))).map((VV => this.conversation(VV))).reverse()
        }
      }
      conversation(VV) {
        let eV = null;
        return {
          questId: VV.dialogueQuestId,
          questName: this.translate(VV.dialogueQuestNameKey),
          completed: VV.dialogueQuestCompleted,
          lines: VV.dialogueLines.map(((VV, xV) => {
            var JV;
            const YV = VV.dialogueSpeakerId === eV || null === (JV = this.speakers.get(VV.dialogueSpeakerId)) || void 0 === JV ? void 0 : JV.dialogueSpeakerStyling;
            return eV = VV.dialogueSpeakerId, {
              key: xV,
              display: {
                line: {
                  translationKey: VV.dialogueLineKey,
                  params: this.params(VV.dialogueLineParams)
                },
                speakerName: YV,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(VV) {
        if (void 0 !== VV) return Object.fromEntries(Object.entries(VV).map((VV => {
          let [eV, xV] = VV;
          return [eV, "string" === typeof xV ? xV : this.translate(xV.translationKey)]
        })))
      }
    }
    var hJ = xV(642),
      lJ = xV(1293),
      LJ = xV(99);
    const fJ = "skyblockAutographsView";

    function mJ(VV) {
      const eV = hJ.n[VV];
      return {
        label: eV.chatTag.map((VV => VV.str)).join(""),
        icon: eV.icon,
        colour: eV.mainRGB
      }
    }
    class KJ extends QV {
      constructor(VV) {
        let eV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = eV, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      RZ(VV) {
        this.signatures = VV.autographSignatures, VV.autographOpen ? this.show() : this.emit()
      }
      setTranslator(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = eV, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var VV;
        const eV = null !== (VV = this.signatures) && void 0 !== VV ? VV : [],
          xV = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          JV = [...eV].sort(((VV, eV) => Number(null !== eV.autographRank) - Number(null !== VV.autographRank) || eV.autographSignedAtMs - VV.autographSignedAtMs)).map((VV => ({
            key: `${VV.autographSignedAtMs}|${VV.autographSignerName}`,
            name: (0, lJ.b)(VV.autographSignerName, !LJ.featureFlags.canSeeRealPlayerNames),
            rank: null === VV.autographRank ? null : mJ(VV.autographRank),
            signedOn: xV.format(VV.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: JV,
          total: JV.length,
          rankTotal: JV.filter((VV => null !== VV.rank)).length
        }
      }
    }
    const HJ = "skyblockHudView",
      uJ = () => {},
      sJ = {
        getItem: () => null,
        setItem: uJ,
        removeItem: uJ
      };
    class SJ {
      constructor(VV) {
        let {
          translate: eV,
          translateWithIcons: xV,
          setMenuOpen: JV = uJ,
          dismissMenu: YV = () => {
            JV(!1)
          },
          publishSkills: UV = uJ,
          publishQuests: yV = uJ,
          publishQuestNotification: pV = uJ,
          publishDungeons: QV = uJ,
          publishCollections: nV = uJ,
          publishMap: ZV = uJ,
          publishHud: vV = uJ,
          publishPortalTransit: rV = uJ,
          publishDailyReward: kV = uJ,
          publishMailbox: bV = uJ,
          publishQuestGraph: EV = uJ,
          publishForge: BV = uJ,
          publishSmuggler: jV = uJ,
          publishKeepersChair: qV = uJ,
          publishReachLog: tV = uJ,
          publishLampLight: TV = uJ,
          publishMagmaward: PV = uJ,
          publishGlowtide: AV = uJ,
          publishGlowMeter: NV = uJ,
          publishHushWait: XV = uJ,
          publishPassage: MV = uJ,
          publishTideCharts: zV = uJ,
          publishRegulars: GV = uJ,
          publishHiddenWaters: WV = uJ,
          publishDialogue: RV = uJ,
          publishAutographs: gV = uJ,
          isLoadingScreenUp: DV = () => !1,
          onDailyRewardCoinLanded: iV = uJ,
          onDailyRewardStarted: CV = uJ,
          onDailyRewardFinished: aV = uJ,
          onDailyRewardItemLanded: oV = uJ,
          onMailboxStarted: cV = uJ,
          journeyStorage: hV = sJ,
          requestTracking: lV = uJ,
          requestTravel: LV = uJ,
          requestDungeonEnter: fV = uJ,
          requestQuestJump: mV = uJ,
          requestQuestArrive: KV = uJ,
          requestForge: HV = uJ,
          requestSmuggle: uV = uJ,
          requestKeepersChairAim: sV = uJ,
          requestReachLogOpen: SV = uJ,
          requestLampLight: IV = uJ,
          requestDialogue: dV = uJ
        } = VV;
        this.navigation = void 0, this.map = void 0, this.compass = new FV, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new JJ.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = VV => VV, this.close = () => {
          for (const VV of this.panels) VV.close()
        }, this.setMenuOpen = JV, this.publishHud = vV, this.portalTransit = new Ex(rV, hV), this.magmaward = new bJ(PV), this.glowtide = new BJ(AV), this.glowMeter = new qJ(NV), this.hushWait = new FJ(XV), this.dailyReward = new qx(kV, (() => DV() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (VV => {
          this.quests.setNotificationsHeld(VV)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), iV, CV, aV, oV);
        const OV = VV => {
          this.panels.some((VV => VV.isOpen())) || (VV ? YV() : this.setMenuOpen(!1))
        };
        this.skills = new ae(UV, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), eV, void 0, void 0, OV), this.quests = new Le(yV, lV, eV, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, OV, pV), this.dungeons = new Ke(QV, eV, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, OV, fV), this.collections = new rx(nV, eV, (() => {
          this.beforePanelOpen(this.collections)
        }), OV), this.map = new wV(ZV, LV, eV, (() => {
          this.beforePanelOpen(this.map)
        }), OV), this.questGraph = new zx(EV, eV, (() => {
          this.beforePanelOpen(this.questGraph)
        }), OV, mV, KV, hV), this.forge = new ux(BV, eV, (() => {
          this.beforePanelOpen(this.forge)
        }), OV, HV), this.smuggler = new Ix(jV, eV, (() => {
          this.beforePanelOpen(this.smuggler)
        }), OV, uV), this.lampLight = new rJ(TV, eV, IV, this.commandPacer), this.keepersChair = new UJ(qV, eV, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (VV => {
          this.lampLight.onChairClosed(), OV(VV)
        }), sV, Date.now, this.commandPacer), this.reachLog = new ZJ(tV, eV, (() => {
          this.beforePanelOpen(this.reachLog)
        }), OV, SV, this.commandPacer), this.passage = new xJ(MV, eV, (() => {
          this.beforePanelOpen(this.passage)
        }), OV), this.tideCharts = new GJ(zV, eV, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), OV), this.regulars = new iJ(GV, eV, (() => {
          this.beforePanelOpen(this.regulars)
        }), (VV => {
          this.regulars.takeReturnToReachLog() && !VV && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), OV(VV)
        })), this.hiddenWaters = new aJ(WV), this.dialogue = new cJ(RV, eV, (() => {
          this.beforePanelOpen(this.dialogue)
        }), OV, dV), this.autographs = new KJ(gV, (() => {
          this.beforePanelOpen(this.autographs)
        }), OV), this.mailbox = new Px(bV, (() => DV() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), cV), this.quests.translateWithIcons = null !== xV && void 0 !== xV ? xV : null, this.skills.onLevelUp = VV => {
          this.quests.notify(VV)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new ie(this.map, this.quests, this.compass, eV)
      }
      getHudSnapshot() {
        const VV = this.hudSnapshot,
          eV = this.dailyReward.getHeldCoins();
        return null === VV || eV <= 0 || !("hudPurseCoins" in VV) ? VV : {
          ...VV,
          hudPurseCoins: Math.max(0, VV.hudPurseCoins - eV)
        }
      }
      receiveHud(VV) {
        this.hudSnapshot = VV, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(VV) {
        this.setMenuOpen(!0);
        const eV = VV === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = VV;
        for (const xV of this.panels) xV === VV || eV && xV === this.reachLog || xV.close();
        this.openingPanel = null
      }
      setTranslator(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eV => this.resolveItemName(eV, VV);
        this.quests.translateWithIcons = null !== xV && void 0 !== xV ? xV : null, this.navigation.setTranslator(VV, eV), this.lampLight.setTranslator(VV, eV), this.mailbox.setItemName(JV);
        for (const YV of this.panels) YV.setTranslator(VV, eV, JV)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const VV of this.panels) VV.dispose()
      }
    }
    var IJ = xV(1146),
      dJ = xV.n(IJ),
      OJ = xV(27),
      VY = xV(37756),
      eY = xV(3848),
      xY = xV(2039),
      JY = xV(2021),
      YY = xV(35325),
      UY = xV(1220),
      yY = xV(1542),
      pY = xV(1321);

    function QY(VV) {
      let {
        controller: eV,
        minimap: xV,
        children: JV
      } = VV;
      const YV = (0, yY.j)(HJ, eV.getHudSnapshot()),
        [UV, yV] = (0, PV.useState)(eV.skills.getSnapshot().overallLevel);
      (0, yY.g)(Ce, (VV => {
        yV(VV.overallLevel)
      }));
      const pV = (0, PV.useRef)(null);
      (0, yY.g)(jx, (VV => {
        ! function(VV, eV) {
          if (null === VV || "function" !== typeof VV.animate) return;
          const xV = eV ? 1.35 : 1.15;
          VV.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${xV})`
          }, {
            transform: "scale(1)"
          }], {
            duration: eV ? 320 : 160,
            easing: "ease-out"
          }), VV.classList.toggle("Receiving", !eV), eV && (VV.classList.remove("Shine"), VV.offsetWidth, VV.classList.add("Shine"))
        }(pV.current, VV)
      }));
      const {
        t: QV
      } = (0, UY.A)(), {
        isTouchScreen: nV
      } = (0, OJ.l)(["isTouchScreen"]), [wV, vV] = (0, PV.useState)(null);
      return (0, eY.j)(wV, ".SkyblockRightHud"), null !== YV || xV ? (0, pY.jsx)(VY.e, {
        placement: "topRight",
        children: (0, pY.jsxs)("div", {
          className: dJ()("SkyblockRightHud", {
            TouchScreen: nV
          }),
          children: [xV, null !== YV && (0, pY.jsxs)("div", {
            ref: vV,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in YV ? (0, pY.jsx)("div", {
              className: "SkyblockHudHelp",
              children: YV.hudHelpText
            }) : (0, pY.jsxs)(pY.Fragment, {
              children: [(0, pY.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, pY.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, pY.jsx)("strong", {
                    style: {
                      color: ZV.E.cyanUiText
                    },
                    children: QV(YV.hudZoneNameKey)
                  }), null !== UV && (0, pY.jsx)("span", {
                    style: {
                      color: ZV.E.goldUiText
                    },
                    children: QV("skyblockGame:level", {
                      level: (0, YY.d)(UV)
                    })
                  })]
                }), (0, pY.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: pV,
                  children: [(0, pY.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, pY.jsx)(xY.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, YY.d)(YV.hudPurseCoins)]
                })]
              }), YV.hudClockText.length > 0 && (0, pY.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, pY.jsx)(JY.b, {
                  text: YV.hudClockText
                })
              })]
            }), JV, "hudZoneNameKey" in YV && (0, pY.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var nY = xV(39735);

    function wY(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)();
      return (0, pY.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: eV.display.mountPlayer,
        title: xV("skyblockGame:mapYouAreHere"),
        children: (0, pY.jsx)(nY.b, {
          icon: "player"
        })
      })
    }
    const ZY = xV(39742),
      vY = Object.fromEntries(ZY.keys().map((VV => [VV.replace(/^\.\/(.*)\.png$/, "$1"), ZY(VV)])));

    function rY(VV, eV) {
      var xV;
      return null !== (xV = vY[VV]) && void 0 !== xV ? xV : vY[eV]
    }

    function kY(VV) {
      let {
        imageKey: eV,
        fallbackImageKey: xV,
        geometryKey: JV,
        alt: YV,
        className: UV
      } = VV;
      const [yV, pV] = (0, PV.useState)((() => function(VV, eV) {
        return [{
          id: 0,
          imageKey: VV,
          geometryKey: eV,
          phase: "shown"
        }]
      }(eV, JV))), QV = function(VV, eV, xV) {
        const JV = VV[VV.length - 1];
        if (JV.imageKey === eV && JV.geometryKey === xV) return VV;
        const YV = {
          id: JV.id + 1,
          imageKey: eV,
          geometryKey: xV,
          phase: "entering"
        };
        return JV.geometryKey === xV ? [{
          ...JV,
          phase: "leaving"
        }, YV] : [YV]
      }(yV, eV, JV);
      return QV !== yV && pV(QV), (0, pY.jsx)(pY.Fragment, {
        children: QV.map((VV => (0, pY.jsx)("img", {
          className: dJ()("SkyblockMapTerrainImage", UV, {
            Entering: "entering" === VV.phase,
            Leaving: "leaving" === VV.phase
          }),
          src: rY(VV.imageKey, xV),
          alt: "leaving" === VV.phase ? "" : YV,
          onAnimationEnd: () => {
            pV((eV => function(VV, eV) {
              return VV.flatMap((VV => VV.id !== eV ? [VV] : "leaving" === VV.phase ? [] : [{
                ...VV,
                phase: "shown"
              }]))
            }(eV, VV.id)))
          }
        }, VV.id)))
      })
    }
    var bY = xV(5011),
      EY = xV(1551);

    function BY(VV) {
      if ("Tab" !== VV.key) return;
      const eV = Array.from(VV.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        xV = eV.indexOf(document.activeElement);
      var JV;
      if (VV.shiftKey && xV <= 0) VV.preventDefault(), null === (JV = eV.at(-1)) || void 0 === JV || JV.focus();
      else if (!VV.shiftKey && (-1 === xV || xV === eV.length - 1)) {
        var YV;
        VV.preventDefault(), null === (YV = eV[0]) || void 0 === YV || YV.focus()
      }
    }

    function jY() {
      const VV = (0, PV.useRef)(null);
      return (0, PV.useCallback)((eV => {
        var xV;
        eV ? (VV.current = document.activeElement, eV.focus()) : null === (xV = VV.current) || void 0 === xV || xV.focus()
      }), [])
    }

    function qY(VV) {
      let {
        percent: eV,
        label: xV,
        levelUpToken: JV,
        colour: YV
      } = VV;
      return (0, pY.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": xV,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": eV,
        "aria-valuetext": xV,
        children: [(0, pY.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${eV/100})`
          }
        }), null !== JV && void 0 !== JV && (0, pY.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": YV
          }
        }, JV)]
      })
    }

    function tY(VV) {
      let {
        mount: eV
      } = VV;
      return (0, pY.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: eV,
        hidden: !0,
        children: (0, pY.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, pY.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, pY.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function FY(VV, eV, xV, JV) {
      (0, PV.useLayoutEffect)((() => {
        const YV = VV.current;
        if (!xV || null === eV || void 0 === eV || !eV.local || !YV) return;
        const UV = Array.from(YV.querySelectorAll(".SkyblockMapNode")),
          yV = [...eV.points, ...eV.portals],
          pV = () => {
            const VV = YV.clientWidth,
              xV = YV.clientHeight,
              pV = UV.map(((YV, UV) => {
                const pV = yV[UV];
                return {
                  id: pV.id,
                  portal: UV >= eV.points.length,
                  x: pV.position[0] * VV / 100,
                  y: pV.position[1] * xV / 100,
                  width: YV.offsetWidth / JV,
                  height: YV.offsetHeight / JV
                }
              })),
              QV = new Map(yV.map(((VV, eV) => [VV.id, UV[eV]])));
            for (const eV of function(VV, eV, xV) {
                const JV = [],
                  YV = [...VV].sort(((VV, eV) => Number(eV.portal) - Number(VV.portal) || VV.id.localeCompare(eV.id)));
                for (const UV of YV) {
                  const VV = VV => Math.max(UV.width / 2, Math.min(eV - UV.width / 2, VV)),
                    YV = VV => Math.max(UV.height / 2, Math.min(xV - UV.height / 2, VV)),
                    yV = [VV(UV.x)],
                    pV = [YV(UV.y)];
                  for (const eV of JV) yV.push(VV(eV.x - (eV.width + UV.width) / 2 - 4), VV(eV.x + (eV.width + UV.width) / 2 + 4)), pV.push(YV(eV.y - (eV.height + UV.height) / 2 - 4), YV(eV.y + (eV.height + UV.height) / 2 + 4));
                  let QV = {
                      ...UV,
                      x: yV[0],
                      y: pV[0]
                    },
                    nV = 1 / 0,
                    wV = 1 / 0;
                  for (const eV of new Set(yV))
                    for (const VV of new Set(pV)) {
                      let xV = 0;
                      for (const yV of JV) xV += Math.max(0, (UV.width + yV.width) / 2 + 4 - Math.abs(eV - yV.x)) * Math.max(0, (UV.height + yV.height) / 2 + 4 - Math.abs(VV - yV.y));
                      const YV = (eV - UV.x) ** 2 + (VV - UV.y) ** 2;
                      (xV < nV || xV === nV && YV < wV) && (QV = {
                        ...UV,
                        x: eV,
                        y: VV
                      }, nV = xV, wV = YV)
                    }
                  JV.push(QV)
                }
                return JV
              }(pV, VV, xV)) {
              const VV = QV.get(eV.id);
              VV.style.left = `${eV.x}px`, VV.style.top = `${eV.y}px`
            }
          };
        pV();
        const QV = new ResizeObserver(pV);
        QV.observe(YV);
        for (const VV of UV) QV.observe(VV);
        return () => {
          QV.disconnect()
        }
      }), [VV, eV, xV, JV])
    }
    const TY = {
        zoom: 1,
        x: 0,
        y: 0
      },
      PY = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function AY(VV, eV, xV) {
      return Math.min(xV, Math.max(eV, VV))
    }

    function NY(VV, eV, xV) {
      const JV = Math.min(1, xV * eV / VV),
        YV = Math.min(1, VV / (xV * eV));
      return {
        x0: (1 - JV) / 2,
        y0: (1 - YV) / 2,
        x1: (1 + JV) / 2,
        y1: (1 + YV) / 2
      }
    }

    function XY(VV, eV, xV, JV) {
      const YV = eV * (JV - xV);
      if (YV <= 1) return .5 - eV * (xV + JV) / 2;
      const UV = .45 * Math.min(1, YV - 1);
      return AY(VV, 1 - eV * JV - UV, UV - eV * xV)
    }

    function MY(VV, eV) {
      const xV = AY(VV.zoom, 1, 12);
      return {
        zoom: xV,
        x: XY(VV.x, xV, eV.x0, eV.x1),
        y: XY(VV.y, xV, eV.y0, eV.y1)
      }
    }

    function zY(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : PY;
      const UV = AY(VV.zoom * eV, 1, 12),
        yV = UV / VV.zoom;
      return MY({
        zoom: UV,
        x: xV - (xV - VV.x) * yV,
        y: JV - (JV - VV.y) * yV
      }, YV)
    }

    function GY(VV, eV, xV, JV) {
      const [YV, UV] = (0, PV.useState)(TY);
      (0, PV.useEffect)((() => {
        UV(TY)
      }), [xV]), (0, PV.useEffect)((() => {
        const xV = VV.current;
        if (!eV || !xV) return;
        const YV = () => NY(xV.clientWidth, xV.clientHeight, JV),
          yV = VV => {
            const eV = xV.getBoundingClientRect();
            return {
              x: (VV.clientX - eV.left) / eV.width,
              y: (VV.clientY - eV.top) / eV.height
            }
          },
          pV = new Map;
        let QV = {
            x: 0,
            y: 0
          },
          nV = !1,
          wV = 0;
        const ZV = VV => {
            VV.preventDefault();
            const eV = VV.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * VV.deltaY : VV.deltaY,
              xV = yV(VV);
            UV((VV => zY(VV, Math.exp(.0015 * -eV), xV.x, xV.y, YV())))
          },
          vV = VV => {
            "mouse" === VV.pointerType && 0 !== VV.button || (pV.set(VV.pointerId, yV(VV)), 1 === pV.size && (QV = {
              x: VV.clientX,
              y: VV.clientY
            }, nV = !1), wV = 0)
          },
          rV = VV => {
            const eV = pV.get(VV.pointerId);
            if (!eV) return;
            const JV = yV(VV);
            if (pV.set(VV.pointerId, JV), 2 === pV.size) {
              const [VV, eV] = [...pV.values()], xV = Math.hypot(VV.x - eV.x, VV.y - eV.y);
              if (wV > 0) {
                const JV = xV / wV;
                UV((xV => zY(xV, JV, (VV.x + eV.x) / 2, (VV.y + eV.y) / 2, YV())))
              }
              return wV = xV, void(nV = !0)
            }!nV && Math.hypot(VV.clientX - QV.x, VV.clientY - QV.y) < 4 || (nV || (nV = !0, xV.setPointerCapture(VV.pointerId)), UV((VV => function(VV, eV, xV) {
              let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : PY;
              return MY({
                zoom: VV.zoom,
                x: VV.x + eV,
                y: VV.y + xV
              }, JV)
            }(VV, JV.x - eV.x, JV.y - eV.y, YV()))))
          },
          kV = VV => {
            pV.delete(VV.pointerId), wV = 0
          },
          bV = VV => {
            nV && (VV.stopPropagation(), VV.preventDefault(), nV = !1)
          },
          EV = new ResizeObserver((() => {
            UV((VV => MY(VV, YV())))
          }));
        return EV.observe(xV), xV.addEventListener("wheel", ZV, {
          passive: !1
        }), xV.addEventListener("pointerdown", vV), xV.addEventListener("pointermove", rV), xV.addEventListener("pointerup", kV), xV.addEventListener("pointercancel", kV), xV.addEventListener("click", bV, !0), () => {
          EV.disconnect(), xV.removeEventListener("wheel", ZV), xV.removeEventListener("pointerdown", vV), xV.removeEventListener("pointermove", rV), xV.removeEventListener("pointerup", kV), xV.removeEventListener("pointercancel", kV), xV.removeEventListener("click", bV, !0)
        }
      }), [VV, eV, xV, JV]);
      return {
        view: YV,
        zoomBy: eV => {
          const xV = VV.current;
          xV && UV((VV => zY(VV, eV, .5, .5, NY(xV.clientWidth, xV.clientHeight, JV))))
        }
      }
    }

    function WY(VV) {
      var eV, xV, JV, YV;
      let {
        controller: UV,
        navigation: yV
      } = VV;
      const pV = (0, yY.j)(nV, UV.getSnapshot()),
        {
          t: QV
        } = (0, UY.A)(),
        wV = jY(),
        ZV = pV.presentation,
        vV = (0, PV.useRef)(null),
        rV = (0, PV.useRef)(null),
        kV = Boolean(pV.open && (null === ZV || void 0 === ZV ? void 0 : ZV.local) && ZV.background),
        bV = GY(vV, kV, `${pV.open}|${pV.tab}|${null===ZV||void 0===ZV||null===(eV=ZV.background)||void 0===eV?void 0:eV.geometryKey}`, null !== (xV = null === ZV || void 0 === ZV || null === (JV = ZV.background) || void 0 === JV ? void 0 : JV.ratio) && void 0 !== xV ? xV : 2);
      if (FY(rV, ZV, pV.open, bV.view.zoom), !ZV || !pV.open) return null;
      const EV = ZV.local ? ZV.background : null,
        BV = {
          "--map-ratio": String(null !== (YV = null === EV || void 0 === EV ? void 0 : EV.ratio) && void 0 !== YV ? YV : 2),
          backgroundColor: null === EV || void 0 === EV ? void 0 : EV.colour
        },
        jV = {
          "--map-zoom": String(bV.view.zoom),
          transform: `translate(${100*bV.view.x}%, ${100*bV.view.y}%) scale(${bV.view.zoom})`
        };
      return (0, pY.jsx)(bY.e, {
        show: pV.open,
        close: UV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: wV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, pY.jsx)("h2", {
                id: "skyblockMapTitle",
                children: QV("skyblockGame:map")
              }), ZV.minimap && (0, pY.jsx)("p", {
                children: ZV.minimap.caption
              })]
            }), (0, pY.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((VV => (0, pY.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": VV === pV.tab ? "true" : void 0,
                className: dJ()({
                  Selected: VV === pV.tab
                }),
                "aria-pressed": VV === pV.tab,
                onClick: () => {
                  UV.selectTab(VV)
                },
                children: QV("local" === VV ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, VV)))
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: UV.dismiss
            })]
          }), (0, pY.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, pY.jsxs)("div", {
              ref: vV,
              className: dJ()("SkyblockMapCanvas", {
                Local: ZV.local,
                Overview: !ZV.local,
                Zoomed: bV.view.zoom > 1
              }),
              style: BV,
              children: [(0, pY.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: kV ? jV : void 0,
                children: (0, pY.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: rV,
                  children: [EV && (0, pY.jsx)(kY, {
                    className: "SkyblockMapTerrain",
                    imageKey: EV.imageKey,
                    fallbackImageKey: EV.fallbackImageKey,
                    geometryKey: EV.geometryKey,
                    alt: EV.label
                  }), ZV.local && (0, pY.jsx)(tY, {
                    mount: yV.display.mountMapSearchArea
                  }), !ZV.local && (0, pY.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: ZV.connections.map((VV => (0, pY.jsx)("line", {
                      className: dJ()({
                        Explored: VV.explored
                      }),
                      x1: VV.start[0],
                      y1: VV.start[1],
                      x2: VV.end[0],
                      y2: VV.end[1]
                    }, VV.id)))
                  }), ZV.points.map((VV => {
                    const eV = !ZV.local && VV.thumbnail ? vY[VV.thumbnail] : void 0;
                    return (0, pY.jsxs)("div", {
                      className: dJ()("SkyblockMapNode", {
                        Current: VV.current
                      }),
                      style: {
                        left: `${VV.position[0]}%`,
                        top: `${VV.position[1]}%`
                      },
                      children: [(0, pY.jsxs)(EY.f, {
                        className: dJ()("SkyblockMapPin", {
                          Unknown: !VV.visited,
                          Current: VV.current
                        }),
                        disabled: pV.pending,
                        onClick: () => {
                          UV.travel(VV.travelKind, VV.travelId)
                        },
                        children: [eV && (0, pY.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: eV,
                          alt: ""
                        }), !eV && (0, pY.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, pY.jsx)(nY.b, {
                            icon: VV.icon
                          })
                        }), (0, pY.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: VV.name
                        })]
                      }), VV.current && (0, pY.jsx)("span", {
                        className: dJ()("SkyblockMapHereBadge", {
                          Above: VV.position[1] > 50
                        }),
                        children: QV("skyblockGame:mapYouAreHere")
                      })]
                    }, VV.id)
                  })), ZV.portals.map((VV => (0, pY.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${VV.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${VV.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, pY.jsxs)(EY.f, {
                      className: "SkyblockMapPin",
                      disabled: pV.pending,
                      onClick: () => {
                        UV.travel(VV.travelKind, VV.travelId)
                      },
                      children: [(0, pY.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: VV.colour
                        },
                        "aria-hidden": "true",
                        children: (0, pY.jsx)(nY.b, {
                          icon: VV.icon
                        })
                      }), (0, pY.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: VV.name
                      })]
                    })
                  }, VV.id))), ZV.local && (0, pY.jsx)(wY, {
                    controller: yV
                  })]
                })
              }), kV && (0, pY.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, pY.jsx)("button", {
                  type: "button",
                  "aria-label": QV("skyblockGame:mapZoomIn"),
                  disabled: bV.view.zoom >= 12,
                  onClick: () => {
                    bV.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, pY.jsx)("button", {
                  type: "button",
                  "aria-label": QV("skyblockGame:mapZoomOut"),
                  disabled: bV.view.zoom <= 1,
                  onClick: () => {
                    bV.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, pY.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: pV.feedback
              })]
            })
          }), (0, pY.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [ZV.progress && (0, pY.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, pY.jsx)("span", {
                children: ZV.progress
              }), (0, pY.jsx)(qY, {
                percent: ZV.percent,
                label: ZV.progress
              })]
            }), ZV.noLandmarks && (0, pY.jsx)("span", {
              children: QV("skyblockGame:mapNoLandmarks")
            }), ZV.canTravel && (0, pY.jsx)("span", {
              className: "SkyblockMapHint",
              children: QV("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function RY(VV) {
      let {
        view: eV,
        controller: xV,
        navigation: JV
      } = VV;
      const {
        t: YV
      } = (0, UY.A)(), {
        isTouchScreen: UV
      } = (0, OJ.l)(["isTouchScreen"]);
      return (0, pY.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": YV("skyblockGame:mapLocal"),
        children: [UV && (0, pY.jsx)(EY.f, {
          className: "SkyblockMinimapOpen",
          onClick: xV.showLocal,
          children: YV("skyblockGame:map")
        }), (0, pY.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: eV.colour
          },
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: JV.display.mountTerrain,
            style: {
              width: eV.width,
              height: eV.height
            },
            children: [(0, pY.jsx)(kY, {
              imageKey: eV.imageKey,
              fallbackImageKey: eV.fallbackImageKey,
              geometryKey: eV.geometryKey,
              alt: eV.label
            }), (0, pY.jsx)(tY, {
              mount: JV.display.mountMinimapSearchArea
            }), eV.markers.map((VV => (0, pY.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${VV.position[0]}%`,
                top: `${VV.position[1]}%`,
                color: VV.colour
              },
              title: VV.name,
              children: (0, pY.jsx)(nY.b, {
                icon: VV.icon
              })
            }, VV.id)))]
          }), (0, pY.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: YV("skyblockGame:mapYouAreHere"),
            children: (0, pY.jsx)(nY.b, {
              icon: "player"
            })
          })]
        }), (0, pY.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: eV.caption
        })]
      })
    }

    function gY(VV) {
      let {
        controller: eV
      } = VV;
      return (0, pY.jsxs)("div", {
        className: "SkyblockCompass",
        ref: eV.display.mountCompass,
        children: [(0, pY.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, pY.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, pY.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function DY(VV) {
      let {
        controller: eV,
        surface: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)(), YV = (0, yY.j)(Ce, eV.getSnapshot()), UV = jY();
      return YV.enabled ? (0, pY.jsxs)(pY.Fragment, {
        children: ["hud" === xV && (0, pY.jsx)(VY.e, {
          placement: "statBars",
          children: YV.hud && (0, pY.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": YV.hud.colour
            },
            children: [(0, pY.jsx)(qY, {
              percent: YV.hud.skill.percent,
              label: YV.hud.skill.xp,
              levelUpToken: YV.hud.levelUpToken,
              colour: YV.hud.colour
            }), (0, pY.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, pY.jsxs)("span", {
                children: [YV.hud.skill.label, " \xb7 ", YV.hud.skill.level]
              }), (0, pY.jsx)("span", {
                children: YV.hud.gain
              })]
            })]
          })
        }), "hud" === xV && (0, pY.jsx)(VY.e, {
          children: YV.hud && (0, pY.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, pY.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, pY.jsx)("strong", {
                children: YV.hud.skill.label
              }), (0, pY.jsx)("span", {
                children: YV.hud.gain
              })]
            }), (0, pY.jsx)(qY, {
              percent: YV.hud.skill.percent,
              label: YV.hud.skill.xp,
              levelUpToken: YV.hud.levelUpToken,
              colour: YV.hud.colour
            }), (0, pY.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, pY.jsx)("span", {
                children: YV.hud.skill.level
              }), (0, pY.jsx)("span", {
                children: YV.hud.skill.xp
              })]
            })]
          })
        }), "menu" === xV && (0, pY.jsx)(bY.e, {
          show: YV.open,
          close: eV.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, pY.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: UV,
            onKeyDown: BY,
            children: [(0, pY.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, pY.jsxs)("div", {
                children: [(0, pY.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: JV("skyblockGame:skills")
                }), (0, pY.jsx)("p", {
                  children: JV("skyblockGame:skillsIntro")
                })]
              }), (0, pY.jsx)(EY.k, {
                padIgnore: !0,
                onClick: eV.dismiss
              })]
            }), (0, pY.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, pY.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: YV.skills.map((VV => (0, pY.jsxs)(EY.f, {
                  className: dJ()("SkyblockSkillCard", {
                    Selected: VV.selected
                  }),
                  ariaPressed: VV.selected,
                  onClick: () => {
                    eV.select(VV.id)
                  },
                  children: [(0, pY.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, pY.jsx)(xY.e, {
                      itemName: VV.icon,
                      amount: 0
                    })
                  }), (0, pY.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, pY.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, pY.jsx)("strong", {
                        children: VV.label
                      }), (0, pY.jsx)("span", {
                        children: VV.level
                      })]
                    }), (0, pY.jsx)(qY, {
                      percent: VV.percent,
                      label: `${VV.label}: ${VV.xp}`
                    }), (0, pY.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: VV.xp
                    })]
                  })]
                }, VV.id)))
              }), YV.detail && (0, pY.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, pY.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, pY.jsx)(xY.e, {
                    itemName: YV.detail.icon,
                    amount: 0
                  })
                }), (0, pY.jsx)("h3", {
                  children: YV.detail.label
                }), (0, pY.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: YV.detail.level
                }), (0, pY.jsx)("p", {
                  children: YV.detail.description
                }), (0, pY.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, pY.jsx)("strong", {
                    children: JV("skyblockGame:currentBenefit")
                  }), (0, pY.jsx)("span", {
                    children: YV.detail.benefit
                  })]
                }), (0, pY.jsx)(qY, {
                  percent: YV.detail.percent,
                  label: YV.detail.xp
                }), (0, pY.jsx)("p", {
                  children: YV.detail.xp
                }), (0, pY.jsx)("h4", {
                  children: JV("skyblockGame:earnXp")
                }), (0, pY.jsx)("ul", {
                  children: YV.detail.sources.map((VV => (0, pY.jsx)("li", {
                    children: VV
                  }, VV)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var iY = xV(1446),
      CY = xV(5335),
      aY = xV(364);

    function oY(VV) {
      let {
        item: eV
      } = VV;
      return (0, pY.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, pY.jsx)(xY.e, {
          itemName: eV,
          amount: 0
        })
      })
    }

    function cY(VV) {
      let {
        name: eV,
        percent: xV,
        progress: JV
      } = VV;
      return (0, pY.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, pY.jsx)(qY, {
          percent: xV,
          label: `${(0,aY.rb)(eV)}: ${JV}`
        }), (0, pY.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: JV
        })]
      })
    }

    function hY(VV) {
      let {
        subquests: eV,
        showDescriptions: xV = !1
      } = VV;
      return (0, pY.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: eV.map((VV => {
          const eV = xV && "completed" === VV.status,
            JV = (0, pY.jsxs)("li", {
              className: dJ()("SkyblockQuestStep", VV.status, {
                JustFinished: VV.justFinished,
                JustUnlocked: VV.justUnlocked
              }),
              tabIndex: eV ? 0 : void 0,
              children: [null !== VV.iconItem && (0, pY.jsx)(oY, {
                item: VV.iconItem
              }), null === VV.iconItem && (0, pY.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === VV.status ? "\u2713" : "skipped" === VV.status ? "\u2212" : "\u25cb"
              }), (0, pY.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, pY.jsx)("strong", {
                  children: (0, pY.jsx)(CY.e, {
                    text: VV.name
                  })
                }), xV && !eV && (0, pY.jsx)("span", {
                  children: (0, pY.jsx)(CY.e, {
                    text: VV.description
                  })
                }), null !== VV.barPercent && (0, pY.jsx)(cY, {
                  name: VV.name,
                  percent: VV.barPercent,
                  progress: VV.progress
                }), null === VV.barPercent && !eV && (0, pY.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: VV.statusLabel
                })]
              })]
            }, VV.id);
          return eV ? (0, pY.jsx)(iY.d, {
            delayShow: 200,
            tooltipInner: (0, pY.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, pY.jsx)("span", {
                children: (0, pY.jsx)(CY.e, {
                  text: VV.description
                })
              }), (0, pY.jsx)("strong", {
                children: VV.statusLabel
              })]
            }),
            children: JV
          }, VV.id) : JV
        }))
      })
    }

    function lY(VV) {
      let {
        quest: eV,
        select: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)(), YV = eV.focusStep;
      return (0, pY.jsxs)(EY.f, {
        className: dJ()("SkyblockQuestCard", {
          Selected: eV.selected,
          Tracked: eV.tracked
        }),
        onClick: () => {
          xV(eV.id)
        },
        children: [(0, pY.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, pY.jsx)("strong", {
            children: (0, pY.jsx)(CY.e, {
              text: eV.name
            })
          }), eV.tracked && (0, pY.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: JV("skyblockGame:currentQuest")
          })]
        }), YV && (0, pY.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== YV.iconItem && (0, pY.jsx)(oY, {
            item: YV.iconItem
          }), (0, pY.jsx)(cY, {
            name: YV.name,
            percent: YV.barPercent,
            progress: YV.progress
          })]
        }), (0, pY.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: eV.progress
        })]
      })
    }

    function LY(VV) {
      let {
        controller: eV,
        surface: xV
      } = VV;
      const JV = (0, yY.j)(he, eV.getSnapshot()),
        {
          t: YV
        } = (0, UY.A)(),
        UV = jY();
      return JV.enabled ? (0, pY.jsxs)(pY.Fragment, {
        children: ["hud" === xV && (0, pY.jsx)(pY.Fragment, {
          children: JV.tracked && (0, pY.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: ce,
            children: (0, pY.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [JV.trackedStepPulse > 0 && (0, pY.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, JV.trackedStepPulse), (0, pY.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: YV("skyblockGame:currentQuest")
              }), (0, pY.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, pY.jsx)("strong", {
                  children: (0, pY.jsx)(CY.e, {
                    text: JV.tracked.name
                  })
                }), null !== JV.tracked.clock && (0, pY.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: JV.tracked.clock
                })]
              }), (0, pY.jsx)(hY, {
                subquests: JV.tracked.subquests
              })]
            })
          })
        }), "menu" === xV && (0, pY.jsx)(bY.e, {
          show: JV.open,
          close: eV.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, pY.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: UV,
            onKeyDown: BY,
            children: [(0, pY.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, pY.jsx)("div", {
                children: (0, pY.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: YV("skyblockGame:quests")
                })
              }), (0, pY.jsx)(EY.k, {
                padIgnore: !0,
                onClick: eV.dismiss
              })]
            }), (0, pY.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, pY.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, pY.jsx)("h3", {
                  children: YV("skyblockGame:current")
                }), 0 === JV.active.length && (0, pY.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: YV("skyblockGame:noActiveQuests")
                }), JV.active.map((VV => (0, pY.jsx)(lY, {
                  quest: VV,
                  select: eV.select
                }, VV.id))), (0, pY.jsx)("h3", {
                  children: (0, pY.jsxs)("button", {
                    type: "button",
                    className: dJ()("SkyblockQuestSectionToggle", {
                      Expanded: JV.completedExpanded
                    }),
                    "aria-expanded": JV.completedExpanded,
                    onClick: eV.toggleCompleted,
                    children: [(0, pY.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), YV("skyblockGame:completed"), (0, pY.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: JV.completed.length
                    })]
                  })
                }), JV.completedExpanded && 0 === JV.completed.length && (0, pY.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: YV("skyblockGame:noCompletedQuests")
                }), JV.completedExpanded && JV.completed.map((VV => (0, pY.jsx)(lY, {
                  quest: VV,
                  select: eV.select
                }, VV.id)))]
              }), JV.detail && (0, pY.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [JV.detail.completed && (0, pY.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: YV("skyblockGame:completedQuest")
                }), (0, pY.jsx)("h3", {
                  children: (0, pY.jsx)(CY.e, {
                    text: JV.detail.name
                  })
                }), (0, pY.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, pY.jsx)(CY.e, {
                    text: JV.detail.description
                  })
                }), (0, pY.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [JV.detail.progress, null !== JV.detail.clock && (0, pY.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: JV.detail.clock
                  })]
                }), (0, pY.jsx)(hY, {
                  subquests: JV.detail.subquests,
                  showDescriptions: !0
                }), JV.detail.tracked && (0, pY.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: JV.detail.trackLabel
                }), !JV.detail.completed && !JV.detail.tracked && (0, pY.jsx)(EY.m, {
                  onClick: eV.trackSelected,
                  disabled: !JV.detail.canTrack,
                  children: JV.detail.trackLabel
                }), JV.detail.canViewDialogue && (0, pY.jsx)(EY.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: eV.viewDialogue,
                  children: YV("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var fY = xV(1414),
      mY = xV(2919);

    function KY(VV, eV, xV, JV, YV) {
      const UV = VV => "linear" === YV ? VV : {
          zY: YV,
          point: VV
        },
        yV = {};
      for (const [pV, QV] of JV)
        for (const [eV, xV] of Object.entries(VV(pV, QV, UV))) yV[eV] ??= {
          timeline: []
        }, yV[eV].timeline.push(xV);
      return {
        PY: eV,
        loop: xV,
        NY: yV
      }
    }
    const HY = .547,
      uY = .022,
      sY = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      SY = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function IY(VV, eV, xV) {
      const {
        drop: JV = 0,
        shift: YV = 0,
        torso: UV = 0,
        nod: yV = 0,
        tilt: pV = 0,
        legs: QV = [0, 0],
        arms: nV = 0,
        spread: wV = 0
      } = eV, ZV = HY * Math.cos(UV) - uY * Math.sin(UV), vV = HY * Math.sin(UV) + uY * Math.cos(UV), rV = xV([0, -JV, YV]);
      return {
        LowerBody: {
          timeFraction: VV,
          position: rV,
          rotation: xV([0, 0, 0])
        },
        UpperBody: {
          timeFraction: VV,
          position: rV,
          rotation: xV([UV, 0, pV])
        },
        HeadMesh: {
          timeFraction: VV,
          position: xV([0, ZV - HY - JV, vV - uY + YV]),
          rotation: xV([UV + yV, 0, pV])
        },
        LegLeftMesh: {
          timeFraction: VV,
          rotation: xV([QV[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: VV,
          rotation: xV([QV[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: VV,
          rotation: xV([nV, 0, wV])
        },
        ArmRightMesh: {
          timeFraction: VV,
          rotation: xV([nV, 0, -wV])
        }
      }
    }

    function dY(VV, eV, xV) {
      return KY(IY, VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function OY(VV) {
      return "number" === typeof VV ? [VV, VV] : VV
    }

    function VU(VV, eV, xV) {
      const {
        rise: JV = 0,
        shift: YV = 0,
        torso: UV = 0,
        twist: yV = 0,
        tilt: pV = 0,
        nod: QV = 0,
        cock: nV = 0,
        arms: wV = 0,
        spread: ZV = 0
      } = eV, [vV, rV] = OY(wV), [kV, bV] = OY(ZV);
      return {
        TorsoNode: {
          timeFraction: VV,
          position: xV([0, JV, YV]),
          rotation: xV([UV, yV, pV])
        },
        HeadMesh: {
          timeFraction: VV,
          rotation: xV([QV, 0, nV])
        },
        ArmLeftMesh: {
          timeFraction: VV,
          rotation: xV([vV, 0, kV])
        },
        ArmRightMesh: {
          timeFraction: VV,
          rotation: xV([rV, 0, -bV])
        }
      }
    }
    const eU = [1.0625, -1, 0];

    function xU(VV) {
      return "number" === typeof VV ? [VV, VV] : VV
    }

    function JU(VV, eV, xV) {
      const {
        drop: JV = 0,
        shift: YV = 0,
        torso: UV = 0,
        tilt: yV = 0,
        nod: pV = 0,
        cock: QV = 0,
        legs: nV = [0, 0],
        arms: wV = 0,
        spread: ZV = 0
      } = eV, [vV, rV] = xU(wV), [kV, bV] = xU(ZV), EV = -UV, BV = -yV, [jV, qV, tV] = function(VV, eV) {
        const [xV, JV, YV] = [-eU[0], eU[1], -eU[2]], UV = xV * Math.cos(eV) - JV * Math.sin(eV), yV = xV * Math.sin(eV) + JV * Math.cos(eV);
        return [UV - xV, -(yV * Math.cos(VV) - YV * Math.sin(VV) - JV), yV * Math.sin(VV) + YV * Math.cos(VV) - YV]
      }(EV, BV), FV = xV([0, -JV, YV]);
      return {
        TorsoNode: {
          timeFraction: VV,
          position: xV([jV, qV - JV, tV + YV]),
          rotation: xV([EV, 0, BV])
        },
        HeadMesh: {
          timeFraction: VV,
          rotation: xV([-pV, 0, -QV])
        },
        ArmLeftMesh: {
          timeFraction: VV,
          rotation: xV([-vV, 0, -kV])
        },
        ArmRightMesh: {
          timeFraction: VV,
          rotation: xV([-rV, 0, bV])
        },
        LegLeftMesh: {
          timeFraction: VV,
          position: FV,
          rotation: xV([-nV[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: VV,
          position: FV,
          rotation: xV([-nV[1], 0, 0])
        }
      }
    }
    var YU = xV(38340),
      UU = xV(39624),
      yU = xV(39828);

    function pU(VV, eV, xV) {
      var JV, YV;
      const UV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return VV + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - VV) * xV
        },
        [yV, pV] = null !== (JV = VV.legs) && void 0 !== JV ? JV : [0, 0],
        [QV, nV] = null !== (YV = eV.legs) && void 0 !== YV ? YV : [0, 0];
      return {
        drop: UV(VV.drop, eV.drop),
        shift: UV(VV.shift, eV.shift),
        torso: UV(VV.torso, eV.torso),
        nod: UV(VV.nod, eV.nod),
        tilt: UV(VV.tilt, eV.tilt),
        legs: [UV(yV, QV), UV(pV, nV)],
        arms: UV(VV.arms, eV.arms),
        spread: UV(VV.spread, eV.spread)
      }
    }
    const QU = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      nU = dY(4400, !0, [
        [0, QU],
        [.16, {
          ...QU,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, QU],
        [.44, {
          ...QU,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, pU(QU, sY, .7)],
        [.66, pU(QU, sY, .78)],
        [.74, pU(QU, SY, .65)],
        [.86, {
          ...QU,
          drop: .14
        }],
        [1, QU]
      ], "catmull-rom-spline"),
      wU = {
        ...QU,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ZU = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      vU = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      rU = {
        caveGolem: nU,
        magmaGolem: dY(3600, !0, [
          [0, wU],
          [.12, {
            ...wU,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...wU,
            tilt: -.08
          }],
          [.4, {
            ...wU,
            tilt: .06,
            drop: .11
          }],
          [.52, pU(wU, sY, .9)],
          [.62, pU(wU, SY, .8)],
          [.7, pU(wU, SY, .45)],
          [.78, pU(wU, SY, .85)],
          [.9, {
            ...wU,
            drop: .17
          }],
          [1, wU]
        ], "catmull-rom-spline"),
        frostWraith: function(VV, eV, xV) {
          return KY(VU, VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ZU],
          [.14, {
            ...ZU,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ZU,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ZU,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ZU,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ZU,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ZU,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ZU,
            rise: .16,
            tilt: -.04
          }],
          [1, ZU]
        ], "catmull-rom-spline"),
        tikiTerror: function(VV, eV, xV) {
          return KY(JU, VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, vU],
          [.16, {
            ...vU,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, vU],
          [.44, {
            ...vU,
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
            ...vU,
            drop: .1
          }],
          [1, vU]
        ], "catmull-rom-spline")
      },
      kU = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      bU = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      EU = Object.fromEntries(Object.entries(rU).map((VV => {
        let [eV, xV] = VV;
        return [eV, (0, yU.b)((0, YU.e)(xV), eV)]
      })));

    function BU(VV) {
      const eV = function(VV) {
        var eV;
        const xV = (0, UU.d)(VV).poseRig;
        return null !== (eV = bU[VV]) && void 0 !== eV ? eV : void 0 === xV ? null : kU[xV]
      }(VV);
      return null === eV ? null : EU[eV]
    }

    function jU(VV) {
      return {
        "--difficulty-colour": VV
      }
    }
    const qU = (0, PV.lazy)((() => (0, mY.c)(xV.e(226).then((() => xV(44421))), (VV => VV.MobPreview))));

    function tU(VV) {
      var eV, xV, JV;
      let {
        picker: YV,
        controller: UV
      } = VV;
      const {
        t: yV
      } = (0, UY.A)(), pV = jY(), {
        page: QV
      } = YV;
      return (0, pY.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: pV,
        onKeyDown: VV => {
          "ArrowLeft" === VV.key ? (VV.preventDefault(), VV.stopPropagation(), UV.previous()) : "ArrowRight" === VV.key ? (VV.preventDefault(), VV.stopPropagation(), UV.next()) : BY(VV)
        },
        style: jU(QV.colour),
        children: [(0, pY.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, pY.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: YV.dungeonName
          }), (0, pY.jsx)(EY.k, {
            padIgnore: !0,
            onClick: UV.dismiss
          })]
        }), (0, pY.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, pY.jsx)(EY.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !YV.canPrevious,
              onClick: UV.previous,
              children: (0, pY.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, pY.jsx)(fY.b, {
                  name: "angle-up"
                })
              })
            }), (0, pY.jsxs)("div", {
              className: dJ()("SkyblockBossPickerBoss", {
                Locked: !QV.unlocked
              }),
              children: [null !== QV.bossMobType && (0, pY.jsx)(PV.Suspense, {
                fallback: (0, pY.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, pY.jsx)(qU, {
                  className: "SkyblockBossPickerModel",
                  mobType: QV.bossMobType,
                  variation: QV.bossMobVariation,
                  animation: null !== (eV = BU(QV.bossMobType)) && void 0 !== eV ? eV : void 0
                })
              }), null === QV.bossMobType && (0, pY.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, pY.jsx)(EY.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !YV.canNext,
              onClick: UV.next,
              children: (0, pY.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, pY.jsx)(fY.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, pY.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [QV.beaten && (0, pY.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), QV.label]
            }), (0, pY.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (xV = QV.bossName) && void 0 !== xV ? xV : "???"
            }), (0, pY.jsxs)("span", {
              className: dJ()("SkyblockBossPickerRecord", {
                Locked: null !== QV.lockedHint
              }),
              children: [null !== QV.lockedHintHighlight && (0, pY.jsxs)(pY.Fragment, {
                children: [QV.lockedHintHighlight.before, (0, pY.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: jU(QV.lockedHintHighlight.colour),
                  children: [null !== QV.lockedHintHighlight.icon && (0, pY.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, pY.jsx)(xY.e, {
                      itemName: QV.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), QV.lockedHintHighlight.name]
                }), QV.lockedHintHighlight.after]
              }), null === QV.lockedHintHighlight && (null !== (JV = QV.lockedHint) && void 0 !== JV ? JV : QV.summary)]
            })]
          }), (0, pY.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: YV.pages.map((VV => (0, pY.jsx)("span", {
              className: dJ()("SkyblockBossPickerDot", {
                Current: VV.current,
                Locked: !VV.unlocked
              }),
              style: jU(VV.colour)
            }, VV.difficulty)))
          }), (0, pY.jsx)(EY.q, {
            className: "SkyblockBossPickerFight",
            disabled: !QV.unlocked,
            onClick: UV.enter,
            children: yV("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function FU(VV) {
      let {
        dungeon: eV,
        select: xV
      } = VV;
      return (0, pY.jsxs)(EY.f, {
        className: dJ()("SkyblockDungeonCard", {
          Selected: eV.selected
        }),
        onClick: () => {
          xV(eV.id)
        },
        children: [(0, pY.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, pY.jsx)("strong", {
            children: eV.name
          }), (0, pY.jsx)("span", {
            children: eV.beatenSummary
          })]
        }), (0, pY.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: eV.difficulties.map((VV => (0, pY.jsxs)("span", {
            className: dJ()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: VV.beaten
            }),
            style: jU(VV.colour),
            title: VV.summary,
            children: [VV.beaten && (0, pY.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), VV.label]
          }, VV.difficulty)))
        })]
      })
    }

    function TU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(me, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsxs)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [xV.picker && (0, pY.jsx)(tU, {
          picker: xV.picker,
          controller: eV
        }), !xV.picker && (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: JV("skyblockGame:dungeons")
              }), (0, pY.jsx)("p", {
                children: JV("skyblockGame:dungeonsIntro")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: eV.dismiss
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, pY.jsx)("div", {
              className: "SkyblockDungeonList",
              children: xV.dungeons.map((VV => (0, pY.jsx)(FU, {
                dungeon: VV,
                select: eV.select
              }, VV.id)))
            }), xV.detail && (0, pY.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, pY.jsx)("h3", {
                children: xV.detail.name
              }), (0, pY.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: xV.detail.difficulties.map((VV => (0, pY.jsxs)("li", {
                  className: dJ()("SkyblockDungeonRecord", {
                    Beaten: VV.beaten
                  }),
                  children: [(0, pY.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: jU(VV.colour),
                    children: [VV.beaten && (0, pY.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), VV.label]
                  }), (0, pY.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: VV.summary
                  })]
                }, VV.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function PU(VV) {
      let {
        collection: eV,
        select: xV
      } = VV;
      return (0, pY.jsxs)(EY.f, {
        className: dJ()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: eV.selected,
          Locked: eV.locked
        }),
        ariaPressed: eV.selected,
        onClick: () => {
          xV(eV.id)
        },
        children: [(0, pY.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, pY.jsx)(xY.e, {
            itemName: eV.icon,
            amount: 0
          })
        }), (0, pY.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, pY.jsx)("strong", {
              children: eV.name
            }), (0, pY.jsx)("span", {
              children: eV.tier
            })]
          }), (0, pY.jsx)(qY, {
            percent: eV.percent,
            label: `${eV.name}: ${eV.progress}`
          }), (0, pY.jsx)("span", {
            className: "SkyblockSkillXp",
            children: eV.progress
          })]
        })]
      })
    }

    function AU(VV) {
      let {
        collection: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)();
      return (0, pY.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, pY.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, pY.jsx)(xY.e, {
            itemName: eV.icon,
            amount: 0
          })
        }), (0, pY.jsx)("h3", {
          children: eV.name
        }), (0, pY.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: eV.tier
        }), (0, pY.jsx)("p", {
          children: eV.locked ? xV("skyblockGame:collectionLocked") : eV.count
        }), null !== eV.nextReward && (0, pY.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, pY.jsx)("strong", {
            children: xV("skyblockGame:collectionNextReward")
          }), (0, pY.jsx)("span", {
            children: eV.nextReward
          })]
        }), (0, pY.jsx)(qY, {
          percent: eV.percent,
          label: eV.progress
        }), (0, pY.jsx)("p", {
          children: eV.progress
        })]
      })
    }

    function NU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(vx, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: JV("skyblockGame:collections")
              }), (0, pY.jsxs)("p", {
                children: [JV("skyblockGame:collectionsIntro"), " ", xV.tiersUnlocked]
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: eV.dismiss
            })]
          }), (0, pY.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: xV.categories.map((VV => (0, pY.jsxs)(EY.f, {
              className: dJ()("SkyblockCollectionCategory", {
                Selected: VV.selected
              }),
              ariaPressed: VV.selected,
              padTabSelected: VV.selected,
              onClick: () => {
                eV.selectCategory(VV.id)
              },
              children: [(0, pY.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, pY.jsx)(xY.e, {
                  itemName: VV.icon,
                  amount: 0
                })
              }), (0, pY.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, pY.jsx)("strong", {
                  children: VV.label
                }), (0, pY.jsx)("span", {
                  children: VV.tiers
                })]
              })]
            }, VV.id)))
          }), (0, pY.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, pY.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: xV.collections.map((VV => (0, pY.jsx)(PU, {
                collection: VV,
                select: eV.select
              }, VV.id)))
            }), xV.detail && (0, pY.jsx)(AU, {
              collection: xV.detail
            })]
          })]
        })
      }) : null
    }
    const XU = ["completed", "active", "available", "locked"],
      MU = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function zU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(Ax, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: JV("skyblockDevQuests:title")
              }), (0, pY.jsx)("p", {
                children: JV("skyblockDevQuests:intro")
              })]
            }), (0, pY.jsx)(EY.k, {
              onClick: eV.dismiss
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [XU.map((VV => (0, pY.jsx)("span", {
              className: dJ()("SkyblockQuestGraphLegendState", VV),
              children: JV(`skyblockDevQuests:state_${VV}`)
            }, VV))), MU.map((VV => (0, pY.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, pY.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, pY.jsx)("line", {
                  className: dJ()("SkyblockQuestGraphEdge", VV),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), JV(`skyblockDevQuests:edge_${VV}`)]
            }, VV)))]
          }), (0, pY.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, pY.jsxs)("div", {
              className: dJ()("SkyblockQuestGraphCanvas", {
                Planning: xV.planning
              }),
              style: {
                width: xV.width,
                height: xV.height
              },
              children: [(0, pY.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: xV.width,
                height: xV.height,
                "aria-hidden": "true",
                children: [(0, pY.jsx)("defs", {
                  children: (0, pY.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, pY.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), xV.edges.map((VV => (0, pY.jsx)("path", {
                  className: dJ()("SkyblockQuestGraphEdge", VV.kind, {
                    InPlan: VV.inPlan
                  }),
                  d: VV.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, VV.key)))]
              }), xV.nodes.map((VV => (0, pY.jsxs)("button", {
                type: "button",
                className: dJ()("SkyblockQuestGraphNode", VV.state, {
                  InPlan: VV.inPlan,
                  Hovered: VV.hovered
                }),
                style: {
                  left: VV.left,
                  top: VV.top,
                  width: 190,
                  height: 52
                },
                title: VV.id,
                onMouseEnter: () => {
                  eV.hover(VV.id)
                },
                onMouseLeave: () => {
                  eV.hover(null)
                },
                onFocus: () => {
                  eV.hover(VV.id)
                },
                onBlur: () => {
                  eV.hover(null)
                },
                onClick: () => {
                  eV.jump(VV.id)
                },
                children: [(0, pY.jsx)("strong", {
                  children: VV.name
                }), (0, pY.jsx)("span", {
                  children: VV.detail
                })]
              }, VV.id)))]
            })
          })]
        })
      }) : null
    }
    const GU = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      WU = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${ox}ms`,
        "--forge-duration": "2150ms"
      },
      RU = Array.from({
        length: 18
      }, ((VV, eV) => ({
        "--ember-left": `${(4+92*(.618034*eV%1)).toFixed(1)}%`,
        "--ember-size": 3 + eV % 3 * 2 + "px",
        "--ember-drift": 14 * (eV % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*eV%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*eV%8).toFixed(2)}s`
      })));

    function gU(VV) {
      if (VV.style.removeProperty("--part-size"), null === VV.parentElement || "wrap" === getComputedStyle(VV.parentElement).flexWrap) return;
      const eV = [...VV.children],
        xV = getComputedStyle(VV),
        JV = parseFloat(xV.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        YV = (VV.clientHeight - parseFloat(xV.rowGap) * (eV.length - 1)) / eV.length,
        UV = eV.map((VV => {
          const eV = getComputedStyle(VV),
            xV = VV.querySelector("h3"),
            UV = VV.querySelector(".SkyblockForgeParts");
          if (null === xV || null === UV) return JV;
          const yV = YV - parseFloat(eV.paddingTop) - parseFloat(eV.paddingBottom) - xV.offsetHeight - parseFloat(getComputedStyle(xV).marginBottom),
            pV = parseFloat(getComputedStyle(UV).columnGap),
            QV = UV.children.length;
          let nV = 0;
          for (let JV = 1; JV <= QV; JV++) {
            const VV = Math.ceil(QV / JV);
            nV = Math.max(nV, Math.min((UV.clientWidth - pV * (JV - 1)) / JV, (yV - pV * (VV - 1)) / VV))
          }
          return nV
        }));
      VV.style.setProperty("--part-size", `${Math.floor(Math.max(JV,Math.min(...UV)))}px`)
    }

    function DU(VV) {
      var eV, xV, JV, YV, UV;
      let {
        controller: yV
      } = VV;
      const pV = (0, yY.j)(Kx, yV.getSnapshot()),
        {
          t: QV
        } = (0, UY.A)(),
        nV = jY(),
        wV = function() {
          const VV = (0, PV.useRef)(null),
            eV = (0, PV.useRef)(null);
          return (0, PV.useLayoutEffect)((() => {
            null !== VV.current && gU(VV.current)
          })), (0, PV.useCallback)((xV => {
            var JV;
            null === (JV = eV.current) || void 0 === JV || JV.disconnect(), eV.current = null, VV.current = xV, null !== xV && (eV.current = new ResizeObserver((() => {
              gU(xV)
            })), eV.current.observe(xV))
          }), [])
        }(),
        vV = function(VV) {
          const eV = (0, PV.useRef)(null);
          return (0, PV.useLayoutEffect)((() => {
            const VV = eV.current;
            if (null !== VV) {
              VV.style.removeProperty("font-size");
              for (let eV = 1.7; eV > 1.1 && VV.scrollWidth > VV.clientWidth; eV -= .1) VV.style.fontSize = eV - .1 + "rem"
            }
          }), [VV]), (0, PV.useCallback)((VV => {
            eV.current = VV
          }), [])
        }(null === (eV = pV.preview) || void 0 === eV ? void 0 : eV.name),
        rV = (0, PV.useRef)(null),
        kV = (0, PV.useRef)({}),
        bV = pV.forging,
        EV = null !== (xV = null === bV || void 0 === bV ? void 0 : bV.preview.tier) && void 0 !== xV ? xV : 0,
        BV = null !== (JV = null === bV || void 0 === bV ? void 0 : bV.preview.named) && void 0 !== JV && JV,
        jV = (0, PV.useMemo)((() => {
          return null === bV ? null : {
            flames: (VV = EV, eV = BV, Array.from({
              length: 26 + 6 * VV + (eV ? 20 : 0)
            }, ((VV, eV) => {
              const xV = eV < 6,
                JV = Math.random() * Math.PI * 2,
                YV = xV ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                UV = Math.cos(JV) * YV,
                yV = Math.sin(JV) * YV - 2 - 3 * Math.random(),
                pV = Math.random(),
                [QV, nV, wV] = xV ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : pV < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : pV < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [pV < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": QV,
                "--x0": `${(.15*UV).toFixed(2)}rem`,
                "--y0": `${(.15*yV).toFixed(2)}rem`,
                "--x": `${UV.toFixed(2)}rem`,
                "--y": `${yV.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${nV.toFixed(2)}rem`,
                "--duration": `${Math.round(wV)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: lx(EV, BV)
          };
          var VV, eV
        }), [null === bV || void 0 === bV ? void 0 : bV.id]);
      if (!pV.enabled) return null;
      const qV = pV.preview,
        tV = pV.arriving,
        FV = null !== tV && !tV.sameSword,
        TV = null !== qV && (0, pY.jsx)(xY.e, {
          itemName: qV.baseSword,
          amount: 0,
          enchantmentTier: qV.enchantmentTier
        });
      return (0, pY.jsx)(bY.e, {
        show: pV.open,
        close: yV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: nV,
          onKeyDown: BY,
          children: [(0, pY.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: RU.map(((VV, eV) => (0, pY.jsx)("span", {
              style: VV
            }, eV)))
          }), (0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: QV("skyblockGame:forgeTitle")
              }), (0, pY.jsx)("p", {
                children: QV("skyblockGame:forgeIntro")
              })]
            }), (0, pY.jsx)(EY.k, {
              onClick: yV.dismiss
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, pY.jsx)("div", {
              ref: wV,
              className: dJ()("SkyblockForgeSlots", {
                Locked: null !== bV
              }),
              children: pV.slots.map((VV => (0, pY.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, pY.jsx)("h3", {
                  children: VV.label
                }), (0, pY.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: VV.parts.map((eV => (0, pY.jsx)("button", {
                    type: "button",
                    className: dJ()("SkyblockForgePart", {
                      Selected: eV.selected,
                      Missing: eV.placeholder
                    }),
                    disabled: eV.placeholder,
                    title: eV.placeholder ? QV("skyblockGame:forgePickParts") : eV.itemName,
                    "aria-pressed": eV.selected,
                    onClick: () => {
                      yV.select(VV.kind, eV.material)
                    },
                    children: (0, pY.jsx)(xY.e, {
                      itemName: eV.itemName,
                      amount: eV.owned
                    })
                  }, eV.material)))
                })]
              }, VV.kind)))
            }), (0, pY.jsxs)("div", {
              className: dJ()("SkyblockForgeAnvil", {
                Named: null === qV || void 0 === qV ? void 0 : qV.named
              }),
              style: {
                "--tier": null === qV ? "transparent" : ZV.kb[qV.enchantmentTier]
              },
              children: [(0, pY.jsxs)("div", {
                className: dJ()("SkyblockForgeAltar", {
                  Forging: null !== bV
                }),
                style: null === bV ? void 0 : WU,
                children: [(0, pY.jsxs)("div", {
                  className: dJ()("SkyblockForgeMount", {
                    Arrive: null !== tV
                  }),
                  children: [null === qV && (0, pY.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, pY.jsx)(xY.e, {
                      itemName: pV.unformedSword,
                      amount: 0
                    })
                  }), null !== qV && (0, pY.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== qV && null === bV && (0, pY.jsx)("div", {
                    ref: rV,
                    className: "SkyblockForgeFloat",
                    children: (0, pY.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: TV
                    })
                  }), null !== qV && (0, pY.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: hx.map(((VV, eV) => (0, pY.jsx)("span", {
                      className: dJ()({
                        Rune: "" !== VV.rune
                      }),
                      style: VV.style,
                      children: VV.rune
                    }, eV)))
                  }), null !== bV && null !== jV && (0, pY.jsxs)(pY.Fragment, {
                    children: [(0, pY.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: jV.flames.map(((VV, eV) => (0, pY.jsx)("span", {
                        style: VV
                      }, eV)))
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: kV.current,
                      children: (0, pY.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: TV
                      })
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (EV >= 4 || BV) && (0, pY.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: jV.sparks.map(((VV, eV) => (0, pY.jsx)("span", {
                        style: VV
                      }, eV)))
                    }), (0, pY.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, pY.jsx)("p", {
                  className: dJ()("SkyblockForgeStatus", null === (YV = pV.status) || void 0 === YV ? void 0 : YV.tone),
                  children: null === (UV = pV.status) || void 0 === UV ? void 0 : UV.text
                })]
              }), null === qV && (0, pY.jsx)("p", {
                className: dJ()("SkyblockForgeName Waiting", {
                  ArriveText: FV
                }),
                children: QV(pV.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== qV && (0, pY.jsx)("h3", {
                ref: vV,
                className: dJ()("SkyblockForgeName", {
                  ArriveText: FV
                }),
                title: qV.name,
                children: qV.name
              }), (null === qV || void 0 === qV ? void 0 : qV.named) && (0, pY.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: QV("skyblockGame:forgeSecret")
              }), (0, pY.jsxs)(EY.q, {
                className: "SkyblockForgeButton",
                disabled: !pV.canForge,
                title: null === qV ? void 0 : QV("skyblockGame:forgeCoalOwned", {
                  owned: String(pV.coalOwned)
                }),
                onClick: () => {
                  kV.current = function(VV) {
                    const eV = null === VV ? "none" : getComputedStyle(VV).transform,
                      xV = new DOMMatrixReadOnly("none" === eV ? void 0 : eV);
                    return {
                      "--settle-y": `${xV.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(xV.b,xV.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(rV.current), mx(), yV.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [QV("skyblockGame:forgeButton"), null !== qV && (0, pY.jsxs)("span", {
                  className: dJ()("SkyblockForgeCost", {
                    Short: qV.coalShort
                  }),
                  children: [(0, pY.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, pY.jsx)(xY.e, {
                      itemName: Gx.d,
                      amount: 0
                    })
                  }), qV.coalCost]
                })]
              })]
            }), (0, pY.jsxs)("div", {
              className: dJ()("SkyblockForgeDetails", {
                Named: null === qV || void 0 === qV ? void 0 : qV.named
              }),
              children: [(0, pY.jsx)("p", {
                className: dJ()("SkyblockForgeLore", {
                  ArriveText: FV
                }),
                title: null === qV || void 0 === qV ? void 0 : qV.lore,
                children: null === qV || void 0 === qV ? void 0 : qV.lore
              }), (0, pY.jsxs)("dl", {
                className: dJ()("SkyblockForgeStats", {
                  ArriveText: FV
                }),
                children: [null === qV && GU.map((VV => (0, pY.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, pY.jsx)("dt", {
                    children: QV(VV)
                  }), (0, pY.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, VV))), null === qV || void 0 === qV ? void 0 : qV.stats.map((VV => (0, pY.jsxs)("div", {
                  className: dJ()("SkyblockForgeStat", {
                    Better: VV.better
                  }),
                  children: [(0, pY.jsx)("dt", {
                    children: VV.label
                  }), (0, pY.jsx)("dd", {
                    children: VV.value
                  })]
                }, VV.label)))]
              }), (0, pY.jsx)("ul", {
                className: dJ()("SkyblockForgeEffects", {
                  ArriveText: FV
                }),
                children: null === qV || void 0 === qV ? void 0 : qV.effects.map((VV => (0, pY.jsx)("li", {
                  children: VV
                }, VV)))
              })]
            })]
          })]
        })
      })
    }
    const iU = "Doom Rivet",
      CU = "Doom Crest";

    function aU(VV) {
      let {
        itemName: eV,
        amount: xV,
        owned: JV
      } = VV;
      return (0, pY.jsxs)("span", {
        className: dJ()("SkyblockSmugglerPrice", {
          Short: xV > JV
        }),
        children: [(0, pY.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, pY.jsx)(xY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, pY.jsx)("span", {
          children: xV
        })]
      })
    }

    function oU(VV) {
      return VV.justBought ? "skyblockGame:smugglerJustBought" : VV.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function cU(VV) {
      let {
        deal: eV,
        view: xV,
        buy: JV
      } = VV;
      const {
        t: YV
      } = (0, UY.A)();
      return (0, pY.jsxs)("div", {
        className: dJ()("SkyblockSmugglerPocket", {
          Bought: eV.justBought,
          Unaffordable: !eV.affordable,
          SoldOut: eV.soldOut && !eV.justBought
        }),
        children: [(0, pY.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, pY.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, pY.jsx)(xY.e, {
            itemName: eV.itemName,
            amount: 0,
            enchantmentTier: eV.enchantmentTier
          }), eV.amount > 1 && (0, pY.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: YV("skyblockGame:smugglerAmount", {
              amount: eV.amount
            })
          })]
        }), (0, pY.jsx)("h3", {
          children: eV.displayName
        }), (0, pY.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [eV.rivets > 0 && (0, pY.jsx)(aU, {
              itemName: iU,
              amount: eV.rivets,
              owned: xV.rivetsOwned
            }), eV.crests > 0 && (0, pY.jsx)(aU, {
              itemName: CU,
              amount: eV.crests,
              owned: xV.crestsOwned
            })]
          }), (0, pY.jsx)(EY.f, {
            className: "SkyblockSmugglerBuy",
            disabled: eV.soldOut || !eV.affordable || xV.pending,
            onClick: () => {
              JV(eV.slot)
            },
            children: YV(oU(eV))
          })]
        })]
      }, eV.justBought ? xV.boughtCount : 0)
    }

    function hU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(sx, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, pY.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, pY.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: JV("skyblockGame:smugglerTitle")
              }), (0, pY.jsx)("p", {
                children: JV("skyblockGame:smugglerIntro")
              })]
            }), (0, pY.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, pY.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, pY.jsx)(aU, {
                  itemName: iU,
                  amount: xV.rivetsOwned,
                  owned: xV.rivetsOwned
                }), (0, pY.jsx)(aU, {
                  itemName: CU,
                  amount: xV.crestsOwned,
                  owned: xV.crestsOwned
                })]
              }), (0, pY.jsx)(EY.k, {
                onClick: eV.dismiss
              })]
            })]
          }), (0, pY.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: xV.deals.map((VV => (0, pY.jsx)(cU, {
              deal: VV,
              view: xV,
              buy: eV.buy
            }, VV.slot)))
          }), (0, pY.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, pY.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: xV.rotatesText
            }), null !== xV.status && (0, pY.jsx)("span", {
              className: dJ()("SkyblockSmugglerStatus", xV.status.tone),
              children: xV.status.text
            })]
          })]
        })
      }) : null
    }

    function lU(VV) {
      let {
        phase: eV,
        className: xV
      } = VV;
      return (0, pY.jsx)("span", {
        className: dJ()("SkyblockMoon", `Moon-${eV}`, xV),
        "aria-hidden": "true"
      })
    }

    function LU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(dx, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)();
      return xV.enabled ? (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: dJ()("SkyblockPassageChip", xV.open && "Open"),
          "aria-label": JV("skyblockGame:passageChipLabel", {
            phase: xV.phaseName
          }),
          title: JV("skyblockGame:passageChipLabel", {
            phase: xV.phaseName
          }),
          onMouseDown: VV => {
            VV.preventDefault()
          },
          onClick: eV.toggle,
          children: (0, pY.jsx)(lU, {
            phase: xV.phase
          }, xV.phase)
        })
      }) : null
    }

    function fU(VV) {
      let {
        fish: eV
      } = VV;
      return (0, pY.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, pY.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, pY.jsx)(xY.e, {
            itemName: eV.itemName,
            amount: 0
          })
        }), (0, pY.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: eV.displayName
          }), (0, pY.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: eV.where
          })]
        })]
      })
    }

    function mU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(dx, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, pY.jsx)(lU, {
              phase: xV.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: JV("skyblockGame:passageTitle")
              }), (0, pY.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: xV.phaseName
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: eV.dismiss
            })]
          }), (0, pY.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: JV("skyblockGame:passageIntro")
          }), (0, pY.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, pY.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, pY.jsx)("h3", {
                children: JV("skyblockGame:passageVisiting")
              }), (0, pY.jsx)("ul", {
                className: "SkyblockPassageList",
                children: xV.visitors.map((VV => (0, pY.jsx)(fU, {
                  fish: VV
                }, VV.itemName)))
              })]
            }), (0, pY.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== xV.resting && (0, pY.jsxs)(pY.Fragment, {
                children: [(0, pY.jsx)("h3", {
                  children: JV("skyblockGame:passageResting")
                }), (0, pY.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, pY.jsx)(fU, {
                    fish: xV.resting
                  })
                })]
              }), (0, pY.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, pY.jsx)(lU, {
                  phase: xV.nextPhase
                }), (0, pY.jsx)("span", {
                  children: xV.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function KU() {
      return (0, pY.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((VV => (0, pY.jsx)("i", {
          style: {
            "--sparkle-index": VV
          }
        }, VV)))
      })
    }

    function HU(VV) {
      var eV;
      let {
        charm: xV,
        view: JV,
        controller: YV
      } = VV;
      const {
        t: UV
      } = (0, UY.A)(), yV = JV.shop, pV = (null === (eV = JV.sparkle) || void 0 === eV ? void 0 : eV.id) === xV.id;
      return (0, pY.jsxs)("li", {
        className: dJ()("SkyblockLampLightCharm", xV.owned && "Owned", xV.socketed && "Socketed"),
        children: [pV && (0, pY.jsx)(KU, {}, JV.sparkle.count), (0, pY.jsx)("h4", {
          children: xV.name
        }), (0, pY.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: xV.effect
        }), (0, pY.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: xV.lines.map((VV => (0, pY.jsxs)("li", {
            className: dJ()("SkyblockLampLightOddsLine", "better" === VV.tone ? "Better" : "worse" === VV.tone ? "Worse" : "Same"),
            children: [(0, pY.jsx)("span", {
              className: "Before",
              children: VV.before
            }), (0, pY.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, pY.jsx)("span", {
              className: "After",
              children: VV.after
            })]
          }, VV.label)))
        }), (0, pY.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: xV.owned ? xV.socketed ? (0, pY.jsxs)(pY.Fragment, {
            children: [(0, pY.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: UV("skyblockGame:lampLightSocketed")
            }), (0, pY.jsx)(EY.M, {
              disabled: !JV.canCommand,
              ariaLabel: UV("skyblockGame:lampLightRemoveLabel", {
                charm: xV.name
              }),
              onClick: () => {
                YV.socket(null)
              },
              children: UV("skyblockGame:lampLightRemove")
            })]
          }) : (0, pY.jsx)(EY.f, {
            disabled: !JV.canCommand || !yV.heldRod,
            ariaLabel: UV("skyblockGame:lampLightSocketLabel", {
              charm: xV.name
            }),
            onClick: () => {
              YV.socket(xV.id)
            },
            children: UV("skyblockGame:lampLightSocket")
          }) : (0, pY.jsx)(EY.f, {
            disabled: !JV.canCommand || !xV.affordable,
            ariaLabel: UV("skyblockGame:lampLightBuyLabel", {
              item: xV.name,
              cost: xV.cost
            }),
            onClick: () => {
              YV.buy(xV.id)
            },
            children: xV.cost
          })
        })]
      })
    }

    function uU(VV) {
      var eV;
      let {
        tint: xV,
        view: JV,
        controller: YV
      } = VV;
      const {
        t: UV
      } = (0, UY.A)();
      return (0, pY.jsxs)("li", {
        className: dJ()("SkyblockLampLightTint", xV.wearing && "Wearing"),
        style: {
          "--tint-colour": xV.colour
        },
        children: [(null === (eV = JV.sparkle) || void 0 === eV ? void 0 : eV.id) === xV.id && (0, pY.jsx)(KU, {}, JV.sparkle.count), (0, pY.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, pY.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: xV.name
        }), xV.wearing ? (0, pY.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: UV("skyblockGame:lampLightWearing")
        }) : (0, pY.jsx)(EY.f, {
          disabled: !JV.canCommand || !xV.owned && !xV.affordable,
          ariaLabel: xV.owned ? UV("skyblockGame:lampLightWearLabel", {
            tint: xV.name
          }) : UV("skyblockGame:lampLightBuyLabel", {
            item: xV.name,
            cost: xV.cost
          }),
          onClick: () => {
            xV.owned ? YV.wearTint(xV.id) : YV.buy(xV.id)
          },
          children: xV.owned ? UV("skyblockGame:lampLightWear") : xV.cost
        })]
      })
    }

    function sU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(vJ, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = xV.shop;
      return (0, pY.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, pY.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: xV.balance
          }), (0, pY.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": xV.releasing,
            className: dJ()("SkyblockLampLightSwitch", xV.releasing && "On"),
            disabled: xV.releasing ? "ready" !== xV.status : !xV.canCommand,
            onClick: () => {
              eV.setRelease(!xV.releasing)
            },
            children: [(0, pY.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, pY.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), JV("skyblockGame:lampLightRelease")]
          }), (0, pY.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: JV("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== xV.notice && (0, pY.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: xV.notice
        }), null !== YV && (0, pY.jsxs)(pY.Fragment, {
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, pY.jsx)("h3", {
              children: JV("skyblockGame:lampLightCharms")
            }), (0, pY.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: YV.oddsFor
            }), (0, pY.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((VV => (0, pY.jsx)("button", {
                type: "button",
                "aria-pressed": xV.situation === VV,
                className: dJ()("SkyblockLampLightSituation", xV.situation === VV && "Selected"),
                onClick: () => {
                  eV.setSituation(VV)
                },
                children: JV("open" === VV ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, VV)))
            })]
          }), !YV.heldRod && (0, pY.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: JV("skyblockGame:lampLightHoldRod")
          }), (0, pY.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: YV.charms.map((VV => (0, pY.jsx)(HU, {
              charm: VV,
              view: xV,
              controller: eV
            }, VV.id)))
          }), (0, pY.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, pY.jsx)("h3", {
              children: JV("skyblockGame:lampLightTints")
            })
          }), (0, pY.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, pY.jsxs)("li", {
              className: dJ()("SkyblockLampLightTint", "Islands", YV.wearingIslandColours && "Wearing"),
              children: [(0, pY.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, pY.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: JV("skyblockGame:lampLightIslandColours")
              }), YV.wearingIslandColours ? (0, pY.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: JV("skyblockGame:lampLightWearing")
              }) : (0, pY.jsx)(EY.f, {
                disabled: !xV.canCommand,
                ariaLabel: JV("skyblockGame:lampLightWearLabel", {
                  tint: JV("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  eV.wearTint(null)
                },
                children: JV("skyblockGame:lampLightWear")
              })]
            }), YV.tints.map((VV => (0, pY.jsx)(uU, {
              tint: VV,
              view: xV,
              controller: eV
            }, VV.id)))]
          })]
        })]
      })
    }

    function SU(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(vJ, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)();
      return xV.releasing ? (0, pY.jsx)(VY.e, {
        children: (0, pY.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            eV.setRelease(!1)
          },
          children: [(0, pY.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, pY.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [JV("skyblockGame:lampLightReleasing"), " \xb7 ", xV.balance]
          }), (0, pY.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: JV("skyblockGame:lampLightKeepCatches")
          }), null !== xV.gained && (0, pY.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: xV.gained.text
          }, xV.gained.count)]
        })
      }) : null
    }

    function IU(VV) {
      let {
        island: eV,
        view: xV,
        aim: JV
      } = VV;
      const {
        t: YV
      } = (0, UY.A)(), UV = eV.featuredFish;
      return (0, pY.jsxs)("li", {
        className: dJ()("SkyblockKeepersChairIsland", `Island-${eV.id}`, eV.favoured && "Aimed", !eV.relit && "Dark"),
        children: [(0, pY.jsx)("h3", {
          children: eV.name
        }), eV.relit && null !== UV ? (0, pY.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: YV("skyblockGame:keepersChairTideNotice")
          }), (0, pY.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, pY.jsx)(xY.e, {
              itemName: UV.itemName,
              amount: 0
            })
          }), (0, pY.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: UV.displayName
          })]
        }) : (0, pY.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, pY.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: YV("skyblockGame:keepersChairDark")
          })
        }), eV.relit && (eV.favoured ? (0, pY.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: YV("skyblockGame:keepersChairAimed")
        }) : (0, pY.jsx)(EY.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !xV.canAim,
          ariaLabel: YV("skyblockGame:keepersChairAimLabel", {
            island: eV.name
          }),
          onClick: () => {
            JV(eV.id)
          },
          children: YV("skyblockGame:keepersChairAim")
        }))]
      }, eV.favoured ? xV.aimedCount : 0)
    }

    function dU(VV) {
      let {
        controller: eV,
        lampLight: xV
      } = VV;
      const JV = (0, yY.j)(YJ, eV.getSnapshot()),
        YV = (0, yY.j)(vJ, xV.getSnapshot()),
        [UV, yV] = (0, PV.useState)("lamp"),
        {
          t: pV
        } = (0, UY.A)(),
        QV = jY();
      if (!JV.enabled) return null;
      const nV = "light" === UV && YV.enabled;
      return (0, pY.jsx)(bY.e, {
        show: JV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: dJ()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", nV && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: QV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: pV("skyblockGame:keepersChairTitle")
              }), (0, pY.jsx)("p", {
                children: pV(nV ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              ariaLabel: pV("skyblockGame:keepersChairClose"),
              onClick: eV.dismiss
            })]
          }), YV.enabled && (0, pY.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((VV => (0, pY.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === VV === nV,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === VV === nV ? "true" : void 0,
              className: dJ()("SkyblockKeepersChairTab", "light" === VV === nV && "Selected"),
              onClick: () => {
                yV(VV)
              },
              children: [pV("lamp" === VV ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === VV && (0, pY.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: YV.balance
              })]
            }, VV)))
          }), nV ? (0, pY.jsx)(sU, {
            controller: xV
          }) : (0, pY.jsx)(OU, {
            view: JV,
            controller: eV
          })]
        })
      })
    }

    function OU(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)();
      return (0, pY.jsxs)(pY.Fragment, {
        children: [(0, pY.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: eV.islands.map((VV => (0, pY.jsx)(IU, {
            island: VV,
            view: eV,
            aim: xV.aim
          }, VV.id)))
        }), null !== eV.almanac && (0, pY.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: JV("skyblockGame:passageTitle")
          }), (0, pY.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, pY.jsx)(lU, {
              phase: eV.almanac.phase
            }), eV.almanac.phaseName]
          }), (0, pY.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, pY.jsx)(lU, {
              phase: eV.almanac.nextPhase
            }), eV.almanac.next]
          })]
        }), (0, pY.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: JV("skyblockGame:keepersChairFavour")
          }), eV.aimed && (0, pY.jsx)(EY.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !eV.canAim,
            onClick: () => {
              xV.aim(null)
            },
            children: JV("skyblockGame:keepersChairRest")
          })]
        }), null !== eV.status && (0, pY.jsx)("p", {
          className: dJ()("SkyblockKeepersChairStatus", "refused" === eV.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: eV.status.text
        })]
      })
    }

    function Vy(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(yJ, eV.getSnapshot());
      if (!JV.enabled) return null;
      const YV = JV.freshCount > 0 ? xV("skyblockGame:reachLogOpenNews", {
        count: JV.freshCount
      }) : xV("skyblockGame:reachLogOpen");
      return (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsxs)("button", {
          type: "button",
          className: dJ()("SkyblockReachLogButton", JV.freshCount > 0 && "HasNews", JV.pending && "Pending"),
          "aria-label": YV,
          title: YV,
          onClick: eV.ask,
          children: [JV.news && (0, pY.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${JV.newsToken}`), (0, pY.jsx)("span", {
            className: dJ()("SkyblockReachLogIcon", JV.news && "Jump"),
            "aria-hidden": "true",
            children: (0, pY.jsx)(xY.e, {
              itemName: QJ,
              amount: 0
            })
          }, `icon:${JV.newsToken}`), JV.freshCount > 0 && (0, pY.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: JV.freshCount
          })]
        })
      })
    }

    function ey(VV) {
      let {
        gift: eV
      } = VV;
      return (0, pY.jsx)("li", {
        className: dJ()("SkyblockRegularsGift", eV.given && "Given"),
        children: eV.text
      })
    }

    function xy(VV) {
      let {
        regular: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)();
      return (0, pY.jsxs)("li", {
        className: dJ()("SkyblockRegularsCard", eV.tagged ? "Tagged" : "Untagged", eV.resting && "Resting"),
        children: [(0, pY.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: eV.fishName,
            children: (0, pY.jsx)(xY.e, {
              itemName: eV.itemName,
              amount: 0
            })
          }), (0, pY.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, pY.jsx)("h3", {
              children: eV.name
            }), (0, pY.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: eV.fishName
            })]
          })]
        }), (0, pY.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: eV.line
        }), (0, pY.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: eV.size
          }), eV.tagged && (0, pY.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: eV.resting ? xV("skyblockGame:regularsResting") : eV.meetings
          })]
        }), (0, pY.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: eV.chance
        }), (0, pY.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: eV.gifts.map((VV => (0, pY.jsx)(ey, {
            gift: VV
          }, VV.text)))
        }), eV.history.length > 0 && (0, pY.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: eV.history.map(((VV, eV) => (0, pY.jsx)("li", {
            children: VV
          }, eV)))
        })]
      })
    }

    function Jy(VV) {
      let {
        controller: eV,
        island: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)(), YV = (0, yY.j)(WJ, eV.getSnapshot()), UV = YV.islands.find((VV => VV.id === xV));
      if (!YV.enabled || void 0 === UV) return null;
      const yV = JV("skyblockGame:regularsOpen");
      return (0, pY.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": yV,
        title: yV,
        onClick: () => {
          eV.openIsland(xV)
        },
        children: [(0, pY.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: JV("skyblockGame:regularsTitle")
        }), UV.regulars.map((VV => (0, pY.jsx)("span", {
          className: dJ()("SkyblockRegularsStripIcon", VV.tagged && "Tagged"),
          title: VV.name,
          children: (0, pY.jsx)(xY.e, {
            itemName: VV.itemName,
            amount: 0
          })
        }, VV.id)))]
      })
    }

    function Yy(VV) {
      var eV;
      let {
        controller: xV
      } = VV;
      const JV = (0, yY.j)(WJ, xV.getSnapshot()),
        {
          t: YV
        } = (0, UY.A)(),
        UV = jY();
      if (!JV.enabled) return null;
      const yV = null !== (eV = JV.islands.find((VV => VV.id === JV.selected))) && void 0 !== eV ? eV : null;
      return (0, pY.jsx)(bY.e, {
        show: JV.open,
        close: xV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: UV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: YV("skyblockGame:regularsTitle")
              }), (0, pY.jsx)("p", {
                children: YV("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: xV.dismiss
            })]
          }), (0, pY.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: JV.islands.map((VV => {
              const eV = VV.id === JV.selected;
              return (0, pY.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": eV,
                "data-pad-tab": !0,
                "data-pad-selected": eV ? "true" : void 0,
                className: dJ()("SkyblockReachLogTab", `Island-${VV.id}`, eV && "Selected", VV.charm.given && "GoldPage"),
                onClick: () => {
                  xV.selectIsland(VV.id)
                },
                children: (0, pY.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: VV.name
                })
              }, VV.id)
            }))
          }), (0, pY.jsxs)("div", {
            className: dJ()("SkyblockRegularsPage", null !== yV && `Island-${yV.id}`),
            role: "tabpanel",
            children: [(0, pY.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: YV("skyblockGame:regularsHow")
            }), null !== yV && (0, pY.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: yV.regulars.map((VV => (0, pY.jsx)(xy, {
                regular: VV
              }, VV.id)))
            })]
          }), null !== yV && (0, pY.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, pY.jsx)("span", {
              className: dJ()("SkyblockRegularsCharm", yV.charm.given && "Given"),
              children: yV.charm.text
            })
          })]
        })
      })
    }
    const Uy = [{
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
      yy = Array.from({
        length: 6
      }, ((VV, eV) => ({
        "--x": `${(88*(.618034*eV%1)).toFixed(1)}%`,
        "--y": `${(10+37*eV%70).toFixed(1)}%`,
        "--size": 7 + eV % 3 * 3 + "rem",
        "--drift-x": 3 * (eV % 3 - 1) + "rem",
        "--drift-y": 2 * (eV % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + eV % 4 * 3 + "s",
        "--delay": 2.5 * -eV + "s"
      }))),
      py = Array.from({
        length: 14
      }, ((VV, eV) => ({
        "--left": `${(3+94*((.618034*eV+.3)%1)).toFixed(1)}%`,
        "--size": 4 + eV % 4 * 2 + "px",
        "--sway": eV % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*eV%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*eV%12).toFixed(2)}s`
      }))),
      Qy = (0, PV.memo)((function(VV) {
        let {
          island: eV
        } = VV;
        return (0, pY.jsxs)("div", {
          className: dJ()("SkyblockReachLogDepths", null !== eV && `Island-${eV}`),
          "aria-hidden": "true",
          children: [Uy.map(((VV, eV) => (0, pY.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: VV
          }, `shaft${eV}`))), yy.map(((VV, eV) => (0, pY.jsx)("span", {
            className: dJ()("SkyblockReachLogMote", eV % 2 === 1 && "Violet"),
            style: VV
          }, `mote${eV}`))), py.map(((VV, eV) => (0, pY.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: VV
          }, `bubble${eV}`)))]
        })
      })),
      ny = 100;

    function wy(VV) {
      let {
        view: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)();
      if (null === eV || 0 === eV.total) return null;
      const JV = ny * eV.aspect,
        YV = xV("skyblockGame:hiddenWatersCount", {
          found: eV.found,
          total: eV.total
        });
      return (0, pY.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${xV("skyblockGame:hiddenWatersTitle")}: ${YV}`,
        children: [(0, pY.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${JV}`,
          "aria-hidden": "true",
          children: [eV.islands.map(((VV, eV) => (0, pY.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (VV.left + VV.width / 2) * ny,
            cy: (VV.top + VV.height / 2) * JV,
            rx: VV.width / 2 * ny,
            ry: VV.height / 2 * JV
          }, eV))), eV.pins.map(((VV, eV) => (0, pY.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: VV.left * ny,
            cy: VV.top * JV,
            r: 13
          }, eV)))]
        }), (0, pY.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, pY.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: xV("skyblockGame:hiddenWatersTitle")
          }), (0, pY.jsx)("span", {
            className: eV.found === eV.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: YV
          })]
        })]
      })
    }

    function Zy(VV) {
      let {
        view: eV,
        island: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)(), YV = null === eV || void 0 === eV ? void 0 : eV.glimpses.get(xV);
      return void 0 === YV || 0 === YV.length ? null : (0, pY.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, pY.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: JV("skyblockGame:hiddenWatersGlimpsed")
        }), (0, pY.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: YV.map((VV => (0, pY.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, pY.jsx)(xY.e, {
              itemName: VV,
              amount: 0
            })
          }, VV)))
        })]
      })
    }
    const vy = ["Bronze", "Silver", "Gold"],
      ry = [{
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
      ky = ry.slice(0, 2);

    function by(VV) {
      return VV ? ry : ky
    }

    function Ey(VV) {
      let {
        fish: eV,
        letGoShown: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)();
      return (0, pY.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [vy.map(((VV, xV) => {
          const YV = xV < eV.marks;
          return (0, pY.jsx)("span", {
            className: dJ()("SkyblockReachLogPip", VV, YV && "Earned", YV && eV.fresh && xV === eV.marks - 1 && "Newest"),
            title: JV(pJ[xV])
          }, VV)
        })), (0, pY.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), by(xV).map(((VV, xV) => (0, pY.jsx)("span", {
          className: dJ()("SkyblockReachLogRibbon", VV.className, !0 === eV.ribbons[xV] && "Earned"),
          title: JV(VV.titleKey)
        }, VV.className)))]
      })
    }

    function By(VV) {
      let {
        letGoShown: eV,
        haloShown: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)();
      return (0, pY.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, pY.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: JV("skyblockGame:reachLogMarks"),
          children: [(0, pY.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), JV("skyblockGame:reachLogLegendMarks")]
        }), by(eV).map((VV => (0, pY.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: JV(VV.titleKey),
          children: [(0, pY.jsx)("span", {
            className: dJ()("SkyblockReachLogRibbon", VV.className, "Earned")
          }), JV(VV.legendKey)]
        }, VV.className))), (0, pY.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: JV("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, pY.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), JV("skyblockGame:reachLogLegendGlimmer")]
        }), xV && (0, pY.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: JV("skyblockGame:reachLogHaloTitle"),
          children: [(0, pY.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), JV("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function jy(VV) {
      let {
        returner: eV
      } = VV;
      return (0, pY.jsxs)("div", {
        className: dJ()("SkyblockReachLogReturner", eV.back && "Back"),
        children: [(0, pY.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, pY.jsx)(xY.e, {
            itemName: eV.itemName,
            amount: 0
          })
        }), (0, pY.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: eV.line
        })]
      })
    }

    function qy(VV) {
      let {
        fish: eV,
        letGoShown: xV
      } = VV;
      const {
        t: JV
      } = (0, UY.A)();
      return (0, pY.jsxs)("li", {
        className: dJ()("SkyblockReachLogCard", eV.caught ? "Caught" : "Unknown", eV.marks >= 3 && "GoldCard", eV.fresh && "Fresh", eV.visitor && "Visitor"),
        children: [eV.visitor && (0, pY.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: JV("skyblockGame:reachLogVisitor")
        }), eV.fresh && Array.from({
          length: 4
        }, ((VV, eV) => (0, pY.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, eV))), (0, pY.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [eV.halo && (0, pY.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: JV("skyblockGame:reachLogHaloTitle")
          }), (0, pY.jsx)(xY.e, {
            itemName: eV.itemName,
            amount: 0
          }), eV.glimmer && (0, pY.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: JV("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, pY.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: eV.name
        }), (0, pY.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: eV.chance
        }), (0, pY.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: eV.best
        }), (0, pY.jsx)(Ey, {
          fish: eV,
          letGoShown: xV
        })]
      })
    }

    function ty(VV) {
      let {
        page: eV,
        letGoShown: xV,
        hiddenWaters: JV
      } = VV;
      const {
        t: YV
      } = (0, UY.A)();
      return eV.awake ? (0, pY.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: eV.fish.map((VV => (0, pY.jsx)(qy, {
          fish: VV,
          letGoShown: xV
        }, VV.itemName)))
      }) : (0, pY.jsxs)(pY.Fragment, {
        children: [(0, pY.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: YV("skyblockGame:reachLogAsleep")
        }), (0, pY.jsx)(Zy, {
          view: JV,
          island: eV.id
        })]
      })
    }

    function Fy(VV) {
      var eV, xV;
      let {
        controller: JV,
        regulars: YV,
        hiddenWaters: UV
      } = VV;
      const yV = (0, yY.j)(yJ, JV.getSnapshot()),
        pV = function(VV) {
          return (0, yY.j)(CJ, VV.getSnapshot())
        }(UV),
        QV = (0, yY.j)(WJ, YV.getSnapshot()),
        {
          t: nV
        } = (0, UY.A)(),
        wV = jY();
      if (!yV.enabled) return null;
      const ZV = null !== (eV = yV.pages.find((VV => VV.id === yV.selected))) && void 0 !== eV ? eV : null;
      return (0, pY.jsx)(bY.e, {
        show: yV.open,
        close: JV.dismiss,
        togglePointerLock: !1,
        className: dJ()("SkyblockSkillsOverlay", QV.open && "SkyblockReachLogUnderLedger"),
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: wV,
          onKeyDown: BY,
          children: [(0, pY.jsx)(Qy, {
            island: null !== (xV = null === ZV || void 0 === ZV ? void 0 : ZV.id) && void 0 !== xV ? xV : null
          }), (0, pY.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: nV("skyblockGame:reachLogTitle")
              }), (0, pY.jsx)("p", {
                children: nV("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, pY.jsx)(wy, {
              view: pV
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: JV.dismiss
            })]
          }), (0, pY.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: yV.pages.map((VV => {
              const eV = VV.id === yV.selected,
                xV = VV.fish.some((VV => VV.fresh));
              return (0, pY.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": eV,
                "data-pad-tab": !0,
                "data-pad-selected": eV ? "true" : void 0,
                className: dJ()("SkyblockReachLogTab", `Island-${VV.id}`, eV && "Selected", !VV.awake && "Asleep", VV.gold && "GoldPage", xV && "HasNews"),
                onClick: () => {
                  JV.selectPage(VV.id)
                },
                children: [(0, pY.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: VV.name
                }), VV.awake && (0, pY.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: nV("skyblockGame:reachLogCaughtCount", {
                    caught: VV.caught,
                    total: VV.total
                  })
                })]
              }, VV.id)
            }))
          }), (0, pY.jsxs)("div", {
            className: dJ()("SkyblockReachLogPage", null !== ZV && `Island-${ZV.id}`),
            role: "tabpanel",
            children: [null !== ZV && (0, pY.jsx)(ty, {
              page: ZV,
              letGoShown: yV.letGoShown,
              hiddenWaters: pV
            }), !0 === (null === ZV || void 0 === ZV ? void 0 : ZV.awake) && null !== ZV.returner && (0, pY.jsx)(jy, {
              returner: ZV.returner
            }), !0 === (null === ZV || void 0 === ZV ? void 0 : ZV.awake) && (0, pY.jsx)(Jy, {
              controller: YV,
              island: ZV.id
            })]
          }), (0, pY.jsx)("footer", {
            className: dJ()("SkyblockReachLogFooter", null !== ZV && `Island-${ZV.id}`, !0 === (null === ZV || void 0 === ZV ? void 0 : ZV.gold) && "GoldPage"),
            children: !0 === (null === ZV || void 0 === ZV ? void 0 : ZV.gold) ? (0, pY.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: nV("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, pY.jsxs)(pY.Fragment, {
              children: [(0, pY.jsx)(By, {
                letGoShown: yV.letGoShown,
                haloShown: !0 === (null === ZV || void 0 === ZV ? void 0 : ZV.fish.some((VV => VV.halo)))
              }), (0, pY.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: nV("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Ty = xV(5333);

    function Py(VV) {
      let {
        conversation: eV,
        completedLabel: xV
      } = VV;
      return (0, pY.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, pY.jsxs)("header", {
          children: [(0, pY.jsx)("h3", {
            children: eV.questName
          }), eV.completed && (0, pY.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: xV
          })]
        }), eV.lines.map((VV => (0, pY.jsx)(Ty.e, {
          display: VV.display
        }, VV.key)))]
      })
    }

    function Ay(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(oJ, eV.getSnapshot()), YV = jY();
      if (!JV.enabled) return null;
      const UV = !JV.loading && 0 === JV.conversations.length;
      return (0, pY.jsx)(bY.e, {
        show: JV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: xV("skyblockDialogue:title")
              }), (0, pY.jsx)("p", {
                children: xV("skyblockDialogue:intro")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: eV.dismiss
            })]
          }), (0, pY.jsxs)("div", {
            className: dJ()("SkyblockDialogueBody", {
              SingleColumn: null !== JV.questFocus || 0 === JV.characters.length
            }),
            children: [null === JV.questFocus && JV.characters.length > 0 && (0, pY.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: JV.characters.map((VV => (0, pY.jsx)(EY.f, {
                className: dJ()("SkyblockDialogueCharacter", {
                  Selected: VV.selected
                }),
                onClick: () => {
                  eV.selectCharacter(VV.id)
                },
                children: (0, pY.jsx)(JY.b, {
                  text: VV.styling
                })
              }, VV.id)))
            }), (0, pY.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== JV.questFocus && (0, pY.jsx)(EY.f, {
                className: "SkyblockDialogueBack",
                onClick: eV.showCharacters,
                children: xV("skyblockDialogue:allCharacters")
              }), JV.loading && (0, pY.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: xV("skyblockDialogue:loading")
              }), UV && (0, pY.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: xV(null === JV.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), JV.conversations.map((VV => (0, pY.jsx)(Py, {
                conversation: VV,
                completedLabel: JV.completedLabel
              }, VV.questId)))]
            })]
          })]
        })
      })
    }

    function Ny(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(fJ, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY();
      return xV.enabled ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: JV("skyblockGame:autographBook")
              }), (0, pY.jsx)("p", {
                children: JV("skyblockGame:autographBookIntro")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              onClick: eV.dismiss
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, pY.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, pY.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, pY.jsx)("strong", {
                  children: xV.total
                }), (0, pY.jsx)("span", {
                  children: JV("skyblockGame:autographTotal")
                })]
              }), (0, pY.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, pY.jsx)("strong", {
                  children: xV.rankTotal
                }), (0, pY.jsx)("span", {
                  children: JV("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === xV.entries.length ? (0, pY.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: JV("skyblockGame:autographBookEmpty")
            }) : (0, pY.jsx)("ul", {
              className: "SkyblockAutographList",
              children: xV.entries.map((VV => (0, pY.jsxs)("li", {
                className: dJ()("SkyblockAutograph", {
                  Ranked: null !== VV.rank
                }),
                style: null === VV.rank ? void 0 : {
                  color: VV.rank.colour
                },
                children: [null !== VV.rank && (0, pY.jsx)(fY.b, {
                  className: "SkyblockAutographRankIcon",
                  name: VV.rank.icon,
                  kit: (0, fY.c)(VV.rank.icon)
                }), (0, pY.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, pY.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: VV.name
                  }), (0, pY.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== VV.rank && (0, pY.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: VV.rank.label
                    }), (0, pY.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: VV.signedOn
                    })]
                  })]
                })]
              }, VV.key)))
            })]
          })]
        })
      }) : null
    }
    const Xy = (0, PV.memo)((function(VV) {
        let {
          controller: eV
        } = VV;
        return (0, pY.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: eV.display.mountWaypoint,
          children: [(0, pY.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, pY.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, pY.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, pY.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, pY.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, pY.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      My = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function zy(VV) {
      return "next" === VV.phase ? "\u2192" : My[VV.kind]
    }
    const Gy = (0, PV.memo)((function(VV) {
      let {
        controller: eV,
        display: xV
      } = VV;
      const JV = (0, yY.j)(le, eV.getNotificationSnapshot()),
        [YV, UV] = (0, PV.useState)(!1);
      return (0, yY.g)("qteStateUpdated", (VV => {
        UV(VV.isActive)
      })), (0, pY.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (YV ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [JV && (0, pY.jsxs)("div", {
          className: `SkyblockQuestNotification ${JV.kind} ${JV.phase}`,
          style: {
            "--quest-notification-duration": `${JV.durationMs}ms`,
            ...JV.accent && {
              "--quest-notification-accent": JV.accent
            }
          },
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (JV.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, pY.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: zy(JV)
            }), JV.iconItem && (0, pY.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, pY.jsx)(xY.e, {
                itemName: JV.iconItem,
                amount: 0
              })
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, pY.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: JV.title
            }), (0, pY.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, pY.jsx)(CY.e, {
                text: JV.name
              })
            }), JV.description && (0, pY.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, pY.jsx)(CY.e, {
                text: JV.description
              })
            }), JV.reward && (0, pY.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, pY.jsx)(CY.e, {
                text: JV.reward
              })
            })]
          })]
        }, JV.token), (null === JV || void 0 === JV ? void 0 : JV.waypointNameKey) && (0, pY.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": JV.waypointNameKey,
          "data-notification-token": JV.token,
          ref: xV.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${JV.token}`)]
      })
    }));

    function Wy(VV) {
      const eV = parseInt(VV.replace("#", ""), 16);
      return `${eV>>16&255}, ${eV>>8&255}, ${255&eV}`
    }
    const Ry = (0, PV.memo)((function(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(kx, eV.getSnapshot());
      if (!JV) return null;
      const YV = "arrival" === JV.phase;
      return (0, pY.jsxs)("div", {
        className: dJ()("SkyblockPortalTransit", {
          Departure: !YV,
          Arrival: YV
        }),
        style: {
          "--portal-rgb": Wy(JV.colour),
          "--portal-duration": `${JV.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, pY.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, pY.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            eV.finishArrival(JV.token)
          }
        }), (0, pY.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, pY.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !YV && (0, pY.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: xV("skyblockGame:portalTransitHeading")
          }), (0, pY.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: xV(JV.zoneNameKey)
          })]
        })]
      }, JV.token)
    }));

    function gy() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Dy() {
      const VV = document.querySelector(".SkyblockHudCoins"),
        eV = null === VV || void 0 === VV ? void 0 : VV.getBoundingClientRect();
      return eV && eV.width > 0 ? {
        x: eV.left + Math.min(eV.width, 24) / 2,
        y: eV.top + eV.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function iy(VV) {
      return {
        x: VV.left + VV.width / 2,
        y: VV.top + VV.height / 2
      }
    }

    function Cy() {
      var VV;
      const eV = null === (VV = document.querySelector(".HotBar")) || void 0 === VV ? void 0 : VV.getBoundingClientRect();
      return eV && eV.width > 0 ? iy(eV) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function ay(VV) {
      let {
        items: eV,
        origins: xV,
        target: JV
      } = VV;
      return (0, pY.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: eV.map(((VV, eV) => {
          const YV = xV[eV];
          return (0, pY.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${YV.x}px`,
              top: `${YV.y}px`,
              "--item-dx": JV.x - YV.x + "px",
              "--item-dy": JV.y - YV.y + "px",
              "--item-delay": 2e3 + 160 * eV + "ms",
              "--item-flight": "700ms"
            },
            children: (0, pY.jsx)(xY.e, {
              itemName: VV.dailyRewardItemName,
              amount: 0
            })
          }, VV.dailyRewardItemName)
        }))
      })
    }

    function oy(VV, eV) {
      const xV = -Math.PI / 2 + 1.25 * (VV / (eV - 1) * 2 - 1),
        JV = 70 + VV % 3 * 22;
      return {
        x: Math.cos(xV) * JV,
        y: Math.sin(xV) * JV * .7
      }
    }

    function cy(VV) {
      let {
        origin: eV,
        target: xV,
        count: JV
      } = VV;
      const YV = [];
      for (let UV = 0; UV < JV; UV++) {
        const VV = oy(UV, JV);
        YV.push((0, pY.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${eV.x}px`,
            top: `${eV.y}px`,
            "--coin-bx": `${VV.x}px`,
            "--coin-by": `${VV.y}px`,
            "--coin-dx": xV.x - eV.x + "px",
            "--coin-dy": xV.y - eV.y + "px",
            "--coin-delay": `${tx(UV,JV)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, pY.jsx)(xY.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, UV))
      }
      return (0, pY.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: YV
      })
    }

    function hy(VV) {
      let {
        day: eV
      } = VV;
      const xV = AV[eV - 1];
      return (0, pY.jsxs)(pY.Fragment, {
        children: [(0, pY.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, pY.jsx)(xY.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, YY.d)(xV.dailyRewardCoins)]
        }), xV.dailyRewardItems.map((VV => (0, pY.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, pY.jsx)(xY.e, {
            itemName: VV.dailyRewardItemName,
            amount: 0
          }), "\xd7", VV.dailyRewardItemAmount]
        }, VV.dailyRewardItemName)))]
      })
    }

    function ly(VV) {
      let {
        day: eV
      } = VV;
      const xV = XV(eV);
      return (0, pY.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: AV.map(((VV, JV) => {
          const YV = JV + 1;
          return (0, pY.jsxs)("li", {
            className: dJ()("SkyblockDailyRewardTile", {
              Claimed: YV < eV && YV !== xV,
              Today: YV === eV,
              Tomorrow: YV === xV,
              Jackpot: YV === NV
            }),
            children: [(0, pY.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: YV
            }), (0, pY.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, pY.jsx)(xY.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, YY.d)(VV.dailyRewardCoins)]
            }), VV.dailyRewardItems.map((VV => (0, pY.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, pY.jsx)(xY.e, {
                itemName: VV.dailyRewardItemName,
                amount: 0
              }), "\xd7", VV.dailyRewardItemAmount]
            }, VV.dailyRewardItemName)))]
          }, YV)
        }))
      })
    }

    function Ly(VV) {
      let {
        view: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, PV.useRef)(null), YV = (0, PV.useRef)(null), [UV, yV] = (0, PV.useState)(null);
      (0, PV.useLayoutEffect)((() => {
        var VV;
        const eV = null === (VV = JV.current) || void 0 === VV ? void 0 : VV.getBoundingClientRect();
        if (eV) {
          var xV, UV;
          const VV = Array.from(null !== (xV = null === (UV = YV.current) || void 0 === UV ? void 0 : UV.children) && void 0 !== xV ? xV : [], (VV => iy(VV.getBoundingClientRect())));
          yV({
            origin: iy(eV),
            target: Dy(),
            itemOrigins: VV,
            itemTarget: Cy()
          })
        }
      }), []);
      const pV = XV(eV.day),
        QV = function(VV, eV) {
          const [xV, JV] = (0, PV.useState)((() => gy() ? VV : 0));
          return (0, PV.useEffect)((() => {
            if (gy()) return;
            const xV = performance.now();
            let YV = 0;
            const UV = yV => {
              const pV = Math.min(Math.max((yV - xV) / eV, 0), 1);
              JV(Math.round(VV * (1 - (1 - pV) ** 3))), pV < 1 && (YV = requestAnimationFrame(UV))
            };
            return YV = requestAnimationFrame(UV), () => {
              cancelAnimationFrame(YV)
            }
          }), [VV, eV]), xV
        }(eV.coins, 450);
      return (0, pY.jsxs)("div", {
        className: dJ()("SkyblockDailyReward", {
          Jackpot: eV.day === NV
        }),
        style: {
          "--daily-duration": `${eV.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, pY.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, pY.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, pY.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: xV("skyblockGame:dailyRewardTitle")
            }), (0, pY.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: xV("skyblockGame:dailyRewardDay", {
                day: String(eV.day)
              })
            })]
          }), (0, pY.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: JV,
            children: [(0, pY.jsx)(xY.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, pY.jsxs)("span", {
              children: ["+", (0, YY.d)(QV)]
            })]
          }), eV.items.length > 0 && (0, pY.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: YV,
            children: eV.items.map((VV => (0, pY.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, pY.jsx)(xY.e, {
                itemName: VV.dailyRewardItemName,
                amount: 0
              }), "\xd7", VV.dailyRewardItemAmount]
            }, VV.dailyRewardItemName)))
          }), (0, pY.jsx)(ly, {
            day: eV.day
          }), (0, pY.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [xV("skyblockGame:dailyRewardComeBack"), (0, pY.jsx)(hy, {
              day: pV
            })]
          })]
        }), null !== UV && (0, pY.jsx)(cy, {
          origin: UV.origin,
          target: UV.target,
          count: eV.flyingCoins
        }), null !== UV && UV.itemOrigins.length === eV.items.length && (0, pY.jsx)(ay, {
          items: eV.items,
          origins: UV.itemOrigins,
          target: UV.itemTarget
        })]
      })
    }
    const fy = (0, PV.memo)((function(VV) {
        let {
          controller: eV
        } = VV;
        const xV = (0, yY.j)(Bx, eV.getSnapshot());
        return xV ? (0, pY.jsx)(Ly, {
          view: xV
        }, xV.token) : null
      })),
      my = "Gold Coin";

    function Ky(VV) {
      return 650 + 220 * VV
    }

    function Hy(VV) {
      return {
        "--letter-delay": `${Ky(VV)}ms`,
        "--letter-land": `${Ky(VV)+300}ms`
      }
    }

    function uy(VV) {
      let {
        letterCount: eV
      } = VV;
      return (0, pY.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, pY.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, pY.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, pY.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: eV
        }, ((VV, eV) => (0, pY.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Hy(eV),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, eV)))]
      })
    }

    function sy(VV) {
      var eV, xV, JV;
      let {
        letter: YV,
        index: UV
      } = VV;
      const {
        t: yV
      } = (0, UY.A)(), pV = null !== (eV = null === (xV = YV.items[0]) || void 0 === xV ? void 0 : xV.itemName) && void 0 !== eV ? eV : my;
      return (0, pY.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Hy(UV),
        children: [(0, pY.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, pY.jsx)(xY.e, {
            itemName: pV,
            amount: 0
          })
        }), (0, pY.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: yV(YV.reasonKey, null !== (JV = YV.reasonParams) && void 0 !== JV ? JV : void 0)
        }), (0, pY.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [YV.coins > 0 && (0, pY.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, pY.jsx)(xY.e, {
              itemName: my,
              amount: 0
            }), "+", (0, YY.d)(YV.coins)]
          }), YV.items.map(((VV, eV) => (0, pY.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, pY.jsx)(xY.e, {
              itemName: VV.itemName,
              amount: 0
            }), VV.label, " \xd7", VV.amount]
          }, eV)))]
        })]
      })
    }

    function Sy(VV) {
      let {
        view: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)();
      return (0, pY.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${eV.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Ky(eV.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, pY.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, pY.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, pY.jsx)(uy, {
              letterCount: eV.letters.length
            }), (0, pY.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: xV("skyblockGame:mailboxTitle")
            })]
          }), (0, pY.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: eV.letters.map(((VV, eV) => (0, pY.jsx)(sy, {
              letter: VV,
              index: eV
            }, eV)))
          }), eV.more > 0 && (0, pY.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: xV("skyblockGame:mailboxMore", {
              count: String(eV.more)
            })
          })]
        })
      })
    }
    const Iy = (0, PV.memo)((function(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(Tx, eV.getSnapshot());
      return xV ? (0, pY.jsx)(Sy, {
        view: xV
      }, xV.token) : null
    }));

    function dy(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(kJ, eV.getSnapshot());
      if (null === JV) return null;
      const YV = JV.fullSet ? "empty" === JV.fuelState ? {
        text: xV("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: xV("skyblockGame:magmawardHudFullSet", {
          worn: String(JV.wornCount)
        }),
        tone: "partial"
      };
      return (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsxs)("div", {
          className: dJ()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${JV.fuelState}`, {
            "SkyblockMagmawardHud-partial": !JV.fullSet,
            "SkyblockMagmawardHud-armed": JV.fullSet && "empty" !== JV.fuelState
          }),
          children: [null !== JV.flare && (0, pY.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${JV.flare}`
          }, `flare:${JV.flareToken}`), (0, pY.jsx)("div", {
            className: dJ()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: JV.setLit
            }),
            children: JV.pieces.map(((VV, eV) => (0, pY.jsx)("div", {
              className: dJ()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: VV.worn,
                SkyblockMagmawardPieceJustWorn: VV.justWorn
              }),
              children: (0, pY.jsx)(xY.e, {
                itemName: VV.itemName,
                amount: 0
              })
            }, `${eV}:${VV.wornToken}`)))
          }, `pieces:${JV.setLitToken}`), (0, pY.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, pY.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, pY.jsxs)("div", {
              className: dJ()("SkyblockMagmawardFuelCounter", JV.pulse && `SkyblockMagmawardFuelCounter-${JV.pulse}`),
              children: [(0, pY.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, pY.jsx)(xY.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, pY.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: JV.fuel
              })]
            }, `counter:${JV.pulseToken}`), "burn" === JV.pulse && (0, pY.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${JV.pulseToken}`)]
          }), YV && (0, pY.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${YV.tone} SmallTextBold`,
            children: YV.text
          })]
        })
      })
    }

    function Oy(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV,
        selectedLanguage: JV
      } = (0, UY.A)(), YV = (0, yY.j)(EJ, eV.getSnapshot());
      return null === YV ? null : (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsxs)("div", {
          className: dJ()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: YV.inRange
          }),
          style: {
            "--glowtide-colour": YV.colour
          },
          "aria-label": xV("skyblockGame:glowtideChipLabel"),
          children: [(0, pY.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), YV.inRange ? (0, pY.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: xV("skyblockGame:glowtideChipInRange")
          }, `call:${YV.inRangeToken}`) : (0, pY.jsxs)(pY.Fragment, {
            children: [(0, pY.jsx)("div", {
              ref: eV.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, pY.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: xV("skyblockGame:waypointDistance", {
                distance: tV(YV.distance, JV.code)
              })
            })]
          })]
        })
      })
    }

    function Vp(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(jJ, eV.getSnapshot());
      return null === JV ? null : (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsxs)("div", {
          className: dJ()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: JV.full
          }),
          "aria-label": xV("skyblockGame:glowMeterLabel", {
            fill: String(JV.fill),
            Jv: String(JV.Jv)
          }),
          children: [JV.burst && (0, pY.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${JV.burstToken}`), (0, pY.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, pY.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${JV.ratio})`
              }
            }), JV.gained && (0, pY.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${JV.gainToken}`), JV.full && Array.from({
              length: 5
            }, ((VV, eV) => (0, pY.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, eV)))]
          }), JV.full && JV.rares.map((VV => (0, pY.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, pY.jsx)(xY.e, {
              itemName: VV,
              amount: 0
            })
          }, VV))), JV.ready && (0, pY.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, pY.jsx)("span", {
              children: xV("skyblockGame:glowMeterReady")
            })
          }, `ready:${JV.fullToken}`)]
        })
      })
    }

    function ep(VV) {
      let {
        controller: eV
      } = VV;
      const {
        t: xV
      } = (0, UY.A)(), JV = (0, yY.j)(tJ, eV.getSnapshot());
      if (null === JV) return null;
      const YV = "waiting" === JV.phase,
        UV = {
          animationDuration: `${JV.waitMs}ms`,
          animationDelay: -JV.elapsedMs + "ms"
        },
        yV = YV ? void 0 : {
          animationDuration: `${JV.waitMs}ms`
        };
      return (0, pY.jsxs)("div", {
        className: YV ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [YV && (0, pY.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((VV, eV) => (0, pY.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, eV))), (0, pY.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: UV
          }), (0, pY.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, pY.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, pY.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: UV
            })]
          }), (0, pY.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, pY.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: yV,
          children: xV(JV.line)
        }, JV.lineIndex)]
      }, JV.token)
    }

    function xp(VV) {
      let {
        chart: eV,
        showHere: xV,
        className: JV
      } = VV;
      return (0, pY.jsx)("div", {
        className: dJ()("SkyblockTideChartGrid", JV, null !== eV.pictureName && "Complete"),
        "aria-hidden": "true",
        children: eV.cells.map(((VV, JV) => {
          const YV = 0 !== (eV.pulseCells & 1 << JV),
            UV = eV.castCell === JV;
          return (0, pY.jsx)("span", {
            className: dJ()("SkyblockTideChartCell", `Cell-${VV}`, YV && "Pulse", UV && "Cast", xV && eV.hereCell === JV && "Here")
          }, `${JV}:${YV?`p${eV.pulseToken}`:""}:${UV?`c${eV.castToken}`:""}`)
        }))
      })
    }

    function Jp(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(TJ, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = xV.chip;
      if (!xV.enabled || null === YV) return null;
      const UV = JV("skyblockGame:tideChartsChipLabel", {
        island: YV.islandName,
        lit: String(YV.lit),
        ink: String(YV.ink)
      });
      return (0, pY.jsx)(VY.e, {
        placement: "statBars",
        children: (0, pY.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: dJ()("SkyblockTideChartsChip", xV.open && "Open", null !== YV.pictureName && "Complete"),
          "aria-label": UV,
          title: UV,
          onMouseDown: VV => {
            VV.preventDefault()
          },
          onClick: eV.toggle,
          children: [(0, pY.jsx)(xp, {
            chart: YV,
            showHere: !1,
            className: "Mini"
          }), (0, pY.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [YV.lit, "/", YV.ink]
          })]
        })
      })
    }

    function Yp(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, yY.j)(TJ, eV.getSnapshot()),
        {
          t: JV
        } = (0, UY.A)(),
        YV = jY(),
        UV = xV.card;
      return xV.enabled && null !== UV ? (0, pY.jsx)(bY.e, {
        show: xV.open,
        close: eV.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pY.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: YV,
          onKeyDown: BY,
          children: [(0, pY.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, pY.jsxs)("div", {
              children: [(0, pY.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: JV("skyblockGame:tideChartsTitle")
              }), (0, pY.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: JV("skyblockGame:tideChartsIntro")
              })]
            }), (0, pY.jsx)(EY.k, {
              padIgnore: !0,
              ariaLabel: JV("skyblockGame:tideChartsClose"),
              onClick: eV.dismiss
            })]
          }), xV.tabs.length > 1 && (0, pY.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": JV("skyblockGame:tideChartsIslands"),
            children: xV.tabs.map((VV => (0, pY.jsx)("button", {
              type: "button",
              className: dJ()("SkyblockTideChartsTab", VV.selected && "Selected"),
              "aria-pressed": VV.selected,
              onClick: () => {
                eV.Pr(VV.island)
              },
              children: VV.name
            }, VV.island)))
          }), (0, pY.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, pY.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": UV.gridLabel,
              children: (0, pY.jsx)(xp, {
                chart: UV,
                showHere: !0,
                className: "Large"
              })
            }), (0, pY.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, pY.jsx)("h3", {
                children: UV.islandName
              }), (0, pY.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: UV.litText
              }), null === UV.pictureName ? (0, pY.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: JV("skyblockGame:tideChartsPictureHidden")
              }) : (0, pY.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: JV("skyblockGame:tideChartsPictureRevealed", {
                  picture: UV.pictureName
                })
              }, UV.pictureName), (0, pY.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, pY.jsxs)("li", {
                  children: [(0, pY.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), JV("skyblockGame:tideChartsLegendLit")]
                }), (0, pY.jsxs)("li", {
                  children: [(0, pY.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), JV("skyblockGame:tideChartsLegendClear")]
                }), null !== UV.hereCell && (0, pY.jsxs)("li", {
                  children: [(0, pY.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), JV("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, pY.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, pY.jsx)("span", {
                  children: xV.turnsText
                }), (0, pY.jsx)("span", {
                  children: xV.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Up(VV) {
      var eV;
      let {
        controller: xV
      } = VV;
      const {
        selectedLanguage: JV
      } = (0, UY.A)(), YV = JV.code;
      (0, PV.useEffect)((() => {
        xV.setTranslator(((VV, eV) => (0, UY.u)(YV, VV, eV)), YV, ((VV, eV) => (0, UY.r)(YV, VV, eV)))
      }), [xV, YV]);
      const UV = (0, yY.j)(nV, xV.map.getSnapshot()),
        {
          openInGameMenuName: yV
        } = (0, OJ.l)(["openInGameMenuName"]);
      return (0, pY.jsxs)(pY.Fragment, {
        children: [(0, pY.jsx)(Gy, {
          controller: xV.quests,
          display: xV.navigation.display
        }), UV.enabled && !yV && (0, pY.jsx)(gY, {
          controller: xV.navigation
        }), (0, pY.jsx)(QY, {
          controller: xV,
          minimap: UV.enabled && (null === (eV = UV.presentation) || void 0 === eV ? void 0 : eV.minimap) && (0, pY.jsx)(RY, {
            view: UV.presentation.minimap,
            navigation: xV.navigation,
            controller: xV.map
          }),
          children: (0, pY.jsx)(LY, {
            controller: xV.quests,
            surface: "hud"
          })
        }), (0, pY.jsx)(Xy, {
          controller: xV.navigation
        }), (0, pY.jsx)(Ry, {
          controller: xV.portalTransit
        }), (0, pY.jsx)(fy, {
          controller: xV.dailyReward
        }), (0, pY.jsx)(Iy, {
          controller: xV.mailbox
        }), (0, pY.jsx)(dy, {
          controller: xV.magmaward
        }), (0, pY.jsx)(Oy, {
          controller: xV.glowtide
        }), (0, pY.jsx)(LU, {
          controller: xV.passage
        }), (0, pY.jsx)(Jp, {
          controller: xV.tideCharts
        }), (0, pY.jsx)(Vp, {
          controller: xV.glowMeter
        }), (0, pY.jsx)(Vy, {
          controller: xV.reachLog
        }), (0, pY.jsx)(ep, {
          controller: xV.hushWait
        }), (0, pY.jsx)(SU, {
          controller: xV.lampLight
        }), (0, pY.jsx)(DY, {
          controller: xV.skills,
          surface: "hud"
        })]
      })
    }

    function yp(VV) {
      let {
        controller: eV
      } = VV;
      return (0, pY.jsxs)(pY.Fragment, {
        children: [(0, pY.jsx)(WY, {
          controller: eV.map,
          navigation: eV.navigation
        }), (0, pY.jsx)(DY, {
          controller: eV.skills,
          surface: "menu"
        }), (0, pY.jsx)(LY, {
          controller: eV.quests,
          surface: "menu"
        }), (0, pY.jsx)(TU, {
          controller: eV.dungeons
        }), (0, pY.jsx)(NU, {
          controller: eV.collections
        }), (0, pY.jsx)(zU, {
          controller: eV.questGraph
        }), (0, pY.jsx)(DU, {
          controller: eV.forge
        }), (0, pY.jsx)(hU, {
          controller: eV.smuggler
        }), (0, pY.jsx)(dU, {
          controller: eV.keepersChair,
          lampLight: eV.lampLight
        }), (0, pY.jsx)(Fy, {
          controller: eV.reachLog,
          regulars: eV.regulars,
          hiddenWaters: eV.hiddenWaters
        }), (0, pY.jsx)(Yy, {
          controller: eV.regulars
        }), (0, pY.jsx)(mU, {
          controller: eV.passage
        }), (0, pY.jsx)(Yp, {
          controller: eV.tideCharts
        }), (0, pY.jsx)(Ay, {
          controller: eV.dialogue
        }), (0, pY.jsx)(Ny, {
          controller: eV.autographs
        })]
      })
    }
    var pp = xV(37930);
    const Qp = Wx + ox;

    function np(VV, eV) {
      const xV = [{
        sound: "rpgKnifeSlice1",
        beat: Wx,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: Wx,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: Wx,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: Wx,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: Wx,
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
        Pr: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: Qp + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        Pr: !0,
        beat: Qp + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: Qp + 60,
        lead: 180,
        volume: .5 + .06 * VV,
        rate: .82 + .07 * VV
      }];
      return VV >= 4 && xV.push({
        sound: "exp_levelup",
        beat: Qp + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), eV && xV.push({
        sound: "trumpetFlare",
        beat: Qp + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), xV.push({
        sound: "harp_pling",
        beat: Rx,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), xV
    }
    class wp {
      constructor(VV) {
        this.deps = VV, this.pending = new Map, this.localHook = null
      }
      hookWaiting(VV, eV) {
        this.pending.delete(VV);
        const xV = this.deps.now();
        if (null === eV) {
          var JV;
          if ((null === (JV = this.localHook) || void 0 === JV ? void 0 : JV.hookId) === VV) {
            const VV = xV >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(VV)
          }
          return
        }
        const YV = xV + eV;
        this.settle(VV, YV) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(VV, {
          untilMs: xV + 1e3,
          biteAtMs: YV
        }))
      }
      getLocalHook() {
        var VV, eV;
        return null !== (VV = null === (eV = this.localHook) || void 0 === eV ? void 0 : eV.hookId) && void 0 !== VV ? VV : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const VV = this.deps.now();
        for (const [eV, {
            untilMs: xV,
            biteAtMs: JV
          }] of this.pending)(this.settle(eV, JV) || VV > xV) && this.pending.delete(eV)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(VV, eV) {
        const xV = this.deps.getLineOwner(VV);
        if (null === xV) return !1;
        if (!this.deps.isLocalPlayer(xV)) return !0;
        if (this.localHook = {
            hookId: VV,
            biteAtMs: eV
          }, !this.deps.isHushWaiting()) {
          const [eV, xV] = this.deps.getHookPosition(VV);
          this.deps.onCastLanded(eV, xV)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Zp = xV(4642);
    const vp = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      rp = {
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
    class kp {
      constructor(VV) {
        this.deps = VV, this.tell = null
      }
      receiveTell(VV) {
        let {
          biteTellTier: eV
        } = VV;
        this.tell = {
          tier: eV,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(VV) {
        const eV = this.tell;
        if (this.tell = null, !VV) return;
        const xV = null !== eV && this.deps.now() - eV.atMs <= 3e3 ? eV.tier : 0;
        this.deps.vibrate(vp[xV])
      }
      burstAtHook() {
        const VV = this.tell,
          eV = this.deps.getLocalHookPosition();
        null === VV || VV.burst || null === eV || (VV.burst = !0, this.deps.playParticles(function(VV, eV) {
          let [xV, JV, YV] = eV;
          const {
            count: UV,
            rise: yV,
            colour: pV
          } = rp[VV], [QV, nV, wV] = pV;
          return {
            texture: "glint",
            pos1: [xV - .3, JV, YV - .3],
            pos2: [xV + .3, JV + .2, YV + .3],
            dir1: [-.6, yV, -.6],
            dir2: [.6, 1.4 * yV, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: UV,
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
              minColor: [QV, nV, wV, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [QV, nV, wV, 0],
              maxColor: [QV, nV, wV, 0]
            }],
            blendMode: Zp.g.Add,
            hideDist: 48
          }
        }(VV.tier, eV)))
      }
    }
    var bp = xV(1279),
      Ep = xV(2059),
      Bp = xV(40);

    function jp(VV, eV) {
      return [{
        timeFraction: 0,
        minColor: [255 * VV[0], 255 * VV[1], 255 * VV[2], 1],
        maxColor: [255 * eV[0], 255 * eV[1], 255 * eV[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const qp = [0, 0, 0],
      tp = {
        texture: "glint",
        mipmaps: !1,
        Jv: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: qp,
        dir2: qp,
        blendMode: Zp.g.OneOne
      },
      Fp = {
        ...tp,
        colorGradients: jp([1, .88, .38], [1, .65, .15])
      },
      Tp = {
        ...tp,
        colorGradients: jp([.55, .95, 1], [.9, 1, 1])
      },
      Pp = [.5, .5, .5],
      Ap = {
        texture: "glint",
        mipmaps: !1,
        Jv: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: jp([1, .12, .12], [1, .35, .2]),
        blendMode: Zp.g.OneOne
      };
    class Np {
      constructor() {
        this.drops = new Map
      }
      RZ(VV, eV) {
        if ("overflowFlash" === eV.kind) {
          const [xV, JV, YV] = eV.position, UV = VV.createParticles(Ap, {
            pos: [xV, JV, YV],
            half: Pp
          });
          return UV.emit(18), void UV.stop()
        }
        this.drops.has(eV.itemId) || this.drops.set(eV.itemId, {
          owner: eV.owner,
          cosmetic: eV.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      iZ(VV) {
        if (0 === this.drops.size) return;
        const eV = performance.now(),
          xV = VV.getCameraPosition();
        let JV = 0;
        for (const UV of this.drops.values()) null !== UV.particles && JV++;
        for (const [UV, yV] of this.drops) {
          const pV = VV.getPositionView(UV);
          if (null === pV) {
            var YV;
            if (yV.seen || eV - yV.markedAt > 5e3) null !== yV.particles && JV--, null === (YV = yV.particles) || void 0 === YV || YV.stop(), this.drops.delete(UV);
            continue
          }
          yV.cosmetic || !VV.isLocalPlayer(yV.owner) || yV.pickupDelayCleared || (VV.clearPickupDelay(UV), yV.pickupDelayCleared = !0);
          const QV = yV.lastPosition,
            nV = yV.seen && (pV[0] - QV[0]) ** 2 + (pV[1] - QV[1]) ** 2 + (pV[2] - QV[2]) ** 2 > 4e-4,
            wV = (pV[0] - xV[0]) ** 2 + (pV[1] - xV[1]) ** 2 + (pV[2] - xV[2]) ** 2 < 2025;
          yV.seen = !0, QV[0] = pV[0], QV[1] = pV[1], QV[2] = pV[2], nV && (yV.lastMovingAt = eV), null !== yV.particles && (!wV || eV - yV.lastMovingAt > 500) && (yV.particles.stop(), yV.particles = null, JV--), nV && wV && null === yV.particles && JV < 32 && (yV.particles = VV.createParticles(yV.cosmetic ? Tp : Fp, {
            pos: pV
          }), JV++), null !== yV.particles && (yV.particles.moveTo(pV), yV.particles.setEmitRate(nV ? 12 : 0)), !nV && null === yV.particles && eV - Math.max(yV.lastMovingAt, yV.markedAt) > 2e3 && this.drops.delete(UV)
        }
      }
      dispose() {
        for (const eV of this.drops.values()) {
          var VV;
          null === (VV = eV.particles) || void 0 === VV || VV.stop()
        }
        this.drops.clear()
      }
    }
    var Xp = xV(206);
    const Mp = Xp.f.nB * Xp.f.playerEyeToHeightRatio;
    class zp {
      constructor(VV) {
        this.host = VV, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      RZ(VV) {
        this.lava = VV, this.nextUpdateAt = 0
      }
      iZ() {
        var VV;
        const eV = this.host.now();
        if (eV < this.nextUpdateAt) return;
        this.nextUpdateAt = eV + 250;
        const xV = this.host.playerPosition(),
          JV = xV && this.findNearest([xV[0], xV[1] + Mp, xV[2]]);
        if (!JV || JV.distance >= 40) return void this.stop();
        const YV = .5 * Math.min(1, (40 - JV.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(YV) : this.loop = this.host.play("lavaFlow", YV, JV.position, 40 + Mp, 9, !0), null === (VV = this.loop) || void 0 === VV || VV.setPosition(JV.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var VV;
        null === (VV = this.loop) || void 0 === VV || VV.stop(), this.loop = null
      }
      findNearest(VV) {
        let eV = -1,
          xV = 1 / 0;
        for (let JV = 0; JV < this.lava.length; JV += 3) {
          const YV = this.lava[JV] - VV[0],
            UV = this.lava[JV + 1] - VV[1],
            yV = this.lava[JV + 2] - VV[2],
            pV = YV * YV + UV * UV + yV * yV;
          pV < xV && (xV = pV, eV = JV)
        }
        return eV < 0 ? null : {
          position: [this.lava[eV], this.lava[eV + 1], this.lava[eV + 2]],
          distance: Math.sqrt(xV)
        }
      }
    }
    var Gp = xV(2033),
      Wp = xV(39833);
    const Rp = {
      "Grey Portal": "Gray"
    };
    for (const cp of ZV.Lc) Rp[`${cp} Portal`] = cp;
    const gp = Object.keys(Rp),
      Dp = Object.fromEntries(gp.map((VV => [VV, (0, ZV.V)(ZV.E[`${(0,ZV.ue)(Rp[VV])}Team`])])));
    Object.fromEntries(gp.map((VV => [VV, ZV.E[`${(0,ZV.ue)(Rp[VV])}UiText`]])));
    class ip {
      constructor(VV, eV) {
        this.presentation = VV, this.portal = eV, this.unlocked = void 0
      }
      RZ(VV) {
        const eV = !1 === this.unlocked && VV;
        this.unlocked = VV, this.iZ();
        const {
          min: xV,
          max: JV,
          unlockedBlock: YV
        } = this.portal;
        if (eV && this.presentation.hasChunk(...xV)) {
          const [VV, eV, UV] = Dp[YV];
          this.presentation.playParticles({
            pos1: [...xV],
            pos2: JV.map((VV => VV + 1)),
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
              minColor: [VV, eV, UV, 1],
              maxColor: [Math.min(255, VV + 55), Math.min(255, eV + 55), Math.min(255, UV + 90), 1]
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
      iZ() {
        var VV;
        const eV = this.unlocked ? this.portal.unlockedBlock : null !== (VV = this.portal.lockedBlock) && void 0 !== VV ? VV : "Light Gray Portal",
          {
            min: xV,
            max: JV
          } = this.portal;
        for (let YV = xV[0]; YV <= JV[0]; YV++)
          for (let VV = xV[1]; VV <= JV[1]; VV++)
            for (let UV = xV[2]; UV <= JV[2]; UV++) this.presentation.hasChunk(YV, VV, UV) && this.presentation.mq(YV, VV, UV) !== eV && this.presentation.gR(YV, VV, UV, eV)
      }
    }
    var Cp = xV(39720);
    xV(39698);
    const ap = {
        farming_1: {
          raises: VV => "NPC" === VV.type && "chef" === VV.variation,
          rise: .4
        },
        fishing_1: {
          raises: VV => "Draugr Warper" === VV.type,
          rise: .4
        }
      },
      op = (VV, eV, xV, YV) => {
        let {
          localPlayerId: UV
        } = YV;
        const yV = new SJ({
          translate: (VV, eV) => (0, UY.u)(bp.c.get().getCurrentLanguageCode(), VV, eV),
          translateWithIcons: (VV, eV) => (0, UY.r)(bp.c.get().getCurrentLanguageCode(), VV, eV),
          setMenuOpen: VV => {
            VV ? (0, mV.r)() : (0, mV.i)()
          },
          dismissMenu: mV.m,
          publishSkills: VV => {
            KV.h.QZ(Ce, VV, !0)
          },
          publishQuests: VV => {
            KV.h.QZ(he, VV, !0)
          },
          publishQuestNotification: VV => {
            KV.h.QZ(le, VV, !0)
          },
          publishDungeons: VV => {
            KV.h.QZ(me, VV, !0)
          },
          publishCollections: VV => {
            KV.h.QZ(vx, VV, !0)
          },
          publishMap: VV => {
            KV.h.QZ(nV, VV, !0)
          },
          publishHud: VV => {
            KV.h.QZ(HJ, VV, !0)
          },
          publishPortalTransit: VV => {
            KV.h.QZ(kx, VV, !0)
          },
          isLoadingScreenUp: () => OJ.b.get("loadingOverlayVisible"),
          publishDailyReward: VV => {
            KV.h.QZ(Bx, VV, !0)
          },
          publishMailbox: VV => {
            KV.h.QZ(Tx, VV, !0)
          },
          publishQuestGraph: VV => {
            KV.h.QZ(Ax, VV, !0)
          },
          publishForge: VV => {
            KV.h.QZ(Kx, VV, !0)
          },
          publishSmuggler: VV => {
            KV.h.QZ(sx, VV, !0)
          },
          publishKeepersChair: VV => {
            KV.h.QZ(YJ, VV, !0)
          },
          publishReachLog: VV => {
            KV.h.QZ(yJ, VV, !0)
          },
          publishLampLight: VV => {
            KV.h.QZ(vJ, VV, !0)
          },
          publishMagmaward: VV => {
            KV.h.QZ(kJ, VV, !0)
          },
          publishGlowtide: VV => {
            KV.h.QZ(EJ, VV, !0)
          },
          publishGlowMeter: VV => {
            KV.h.QZ(jJ, VV, !0)
          },
          publishHushWait: VV => {
            KV.h.QZ(tJ, VV, !0)
          },
          publishPassage: VV => {
            KV.h.QZ(dx, VV, !0)
          },
          publishTideCharts: VV => {
            KV.h.QZ(TJ, VV, !0)
          },
          publishRegulars: VV => {
            KV.h.QZ(WJ, VV, !0)
          },
          publishHiddenWaters: VV => {
            KV.h.QZ(CJ, VV, !0)
          },
          publishDialogue: VV => {
            KV.h.QZ(oJ, VV, !0)
          },
          publishAutographs: VV => {
            KV.h.QZ(fJ, VV, !0)
          },
          onDailyRewardStarted: VV => {
            gV.playSound(UV, VV.day === NV ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (VV, eV) => {
            gV.playSound(UV, "exp_collect", .35, 1 + .6 * VV / (eV - 1)), KV.h.QZ(jx, VV === eV - 1)
          },
          onDailyRewardItemLanded: VV => {
            gV.playSound(UV, "pickUp", .6, 1 + .15 * VV)
          },
          onMailboxStarted: () => {
            gV.playSound(UV, "rpgMetalClick", .6, 1), gV.playSound(UV, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            gV.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Bp.q,
          requestTracking: VV => {
            gV.sendCommand(`quests track ${VV}`)
          },
          requestDungeonEnter: (VV, eV) => {
            gV.sendCommand(`dungeonEnter ${VV} ${eV}`)
          },
          requestQuestJump: VV => {
            gV.sendCommand(`${RV} jump ${VV}`)
          },
          requestQuestArrive: (VV, eV) => {
            const xV = `${RV} arrive ${VV}`;
            gV.sendCommand(eV ? `${xV} complete` : xV)
          },
          requestForge: VV => {
            let {
              blade: eV,
              guard: xV,
              handle: JV
            } = VV;
            gV.sendCommand(`forge ${eV} ${xV} ${JV}`)
          },
          requestDialogue: () => {
            gV.sendCommand("quests dialogue")
          },
          requestSmuggle: (VV, eV) => {
            gV.sendCommand(`smuggle ${VV} ${eV}`)
          },
          requestKeepersChairAim: VV => {
            gV.sendCommand(`keeperschair-aim ${VV}`)
          },
          requestReachLogOpen: () => {
            gV.sendCommand("reachlog-open")
          },
          requestLampLight: VV => {
            gV.sendCommand(`${VV}`)
          },
          requestTravel: VV => {
            gV.sendCommand(`map travel ${VV.kind} ${VV.id} ${VV.requestId}`)
          }
        });
        let pV, QV, wV, vV, rV, jV, qV, tV, FV, AV, XV, zV, GV;
        const WV = new Np;
        let gV, aV = null;
        const hV = ap[null !== xV && void 0 !== xV ? xV : ""],
          lV = (VV, eV) => {
            null !== hV && void 0 !== hV && hV.raises(eV) && gV.setNametagOffset(VV, hV.rise)
          },
          uV = new kp({
            getLocalHookPosition: () => {
              const VV = sV.getLocalHook();
              return null !== VV && gV.checkValid(VV) ? gV.YF(VV) : null
            },
            playParticles: VV => {
              gV.playParticleEffect(VV)
            },
            vibrate: VV => {
              HV.g.play("fishBite", VV)
            },
            now: () => performance.now()
          }),
          sV = new wp({
            getLineOwner: VV => gV.checkValid(VV) ? gV.getLineOwner(VV) : null,
            isLocalPlayer: VV => gV.isLocalPlayer(VV),
            getHookPosition: VV => {
              const [eV, , xV] = gV.YF(VV);
              return [eV, xV]
            },
            isHushWaiting: () => {
              var VV;
              return "waiting" === (null === (VV = yV.hushWait.getSnapshot()) || void 0 === VV ? void 0 : VV.phase)
            },
            onCastLanded: (VV, eV) => {
              yV.tideCharts.castLanded(VV, eV)
            },
            onLocalHookSettled: () => {
              uV.onLocalHookSettled()
            },
            onLocalWaitEnded: VV => {
              uV.onLocalWaitEnded(VV)
            },
            now: () => performance.now()
          }),
          SV = new zp({
            now: () => performance.now(),
            playerPosition: () => gV.checkValid(UV) ? gV.YF(UV) : null,
            play: (VV, eV, xV, JV, YV, yV) => gV.playSound(UV, VV, eV, 1, {
              cY: xV,
              maxHearDist: JV,
              refDistance: YV
            }, yV)
          }),
          IV = new Map;
        let dV;
        return {
          onCreate: VV => {
            if (gV = VV, aV = new Wp.SkyblockEntityFacing(VV, hV ? lV : null), yV.portalTransit.resumeArrival(null !== xV && void 0 !== xV ? xV : null), (null !== xV && void 0 !== xV ? xV : JV) === JV) {
              let VV = -1 / 0;
              dV = KV.h.subscribe("toggleMenu", (eV => {
                const xV = performance.now();
                "inventory|Workbench" !== eV || "cross_to_hub" !== yV.quests.getTrackedQuestId() || xV - VV < 1e4 || (VV = xV, gV.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [JV, YV] of Object.entries(null !== (eV = DV[null !== xV && void 0 !== xV ? xV : ""]) && void 0 !== eV ? eV : {})) {
              var eV;
              IV.set(JV, new ip({
                hasChunk: (eV, xV, JV) => VV.isBlockInLoadedChunk(eV, xV, JV),
                mq: (eV, xV, JV) => VV.blockIdToBlockName(VV.getBlockId(eV, xV, JV)),
                gR: (eV, xV, JV, YV) => {
                  VV.gR(eV, xV, JV, YV)
                },
                playParticles: eV => {
                  VV.playParticleEffect(eV)
                }
              }, YV))
            }
            GV = (0, Gp.d)((VV => (0, Ae.g)(VV) ? (0, Ae.c)(VV) : null)), yV.resolveItemName = (eV, xV) => {
              const JV = VV.getItemStat(UV, eV, "displayName");
              return JV && "object" === typeof JV && "translationKey" in JV ? xV(JV.translationKey, (0, UY.p)(JV.params, Ep.e.shown)) : "string" === typeof JV ? xV(JV) : eV
            }, yV.quests.notifications.onShown = VV => {
              "quest" === VV ? gV.playSound(UV, "magicAccent1", 1, 1) : "skillLevel" === VV ? gV.playSound(UV, "magicAccent1", 1, .6) : "landmark" === VV ? gV.playSound(UV, "trumpetFlare", 1, .6) : "npcNote" === VV ? gV.playSound(UV, "magicAccent2", .8, 1.1) : "started" === VV ? gV.playSound(UV, (0, pp.f)("bigDrumSwish"), 1, 1) : gV.playSound(UV, (0, pp.f)("rpgHandleSmallLeather"), 1, 1)
            }, yV.forge.onPartSelected = () => {
              gV.playSound(UV, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, yV.forge.onOpened = () => {
              ! function(VV) {
                VV.preloadSounds(np(4, !0).map((VV => VV.sound)))
              }(VV)
            }, yV.forge.onForgeStarted = (eV, xV, JV) => function(VV, eV, xV, JV, YV) {
              const UV = [],
                yV = [],
                pV = xV => {
                  const JV = VV.playSound(eV, xV.Pr ? (0, pp.f)(xV.sound) : xV.sound, xV.volume, xV.rate);
                  JV && (yV.push(JV), void 0 !== xV.cutAfter && UV.push(setTimeout((() => {
                    JV.fade(JV.getVolume(), 0, 300)
                  }), xV.cutAfter)))
                };
              for (const QV of np(xV, JV)) YV ? UV.push(setTimeout((() => {
                pV(QV)
              }), Math.max(0, QV.beat - QV.lead / QV.rate))) : QV.beat !== Wx && "magicAccent2" !== QV.sound && "trumpetFlare" !== QV.sound || pV(QV);
              return () => {
                for (const VV of UV) clearTimeout(VV);
                for (const VV of yV) VV.fade(VV.getVolume(), 0, 120)
              }
            }(VV, UV, eV, xV, JV), yV.smuggler.onBought = () => {
              gV.playSound(UV, (0, pp.f)("rpgHandleSmallLeather"), 1, 1), gV.playSound(UV, "chestOpen", .6, 1)
            }, yV.compass.register(new kV(yV.map, !0)), yV.compass.register(new kV(yV.map, !1)), yV.compass.register(new EV(yV.map)), yV.compass.register(new BV((() => yV.quests.getSnapshot().compassTarget)));
            for (const xV of ["enemy", "npc"]) yV.compass.register(new bV(yV.map, xV, (eV => VV.checkValid(eV) ? VV.YF(eV) : void 0), (eV => VV.isAlive(eV))))
          },
          onAfterRender: (VV, eV) => {
            const xV = gV.checkValid(UV) ? gV.YF(UV) : null;
            yV.navigation.afterRender(xV, performance.now(), eV), yV.glowtide.afterRender(xV, eV.cameraHeading), yV.tideCharts.afterRender(xV), sV.afterRender()
          },
          onClose: () => {
            var VV, eV, xV, JV, YV, UV, nV, ZV, kV, bV, EV, BV, jV, TV, PV;
            dV && KV.h.unsubscribe(dV), null === (VV = GV) || void 0 === VV || VV(), WV.dispose(), SV.dispose(), null === (eV = aV) || void 0 === eV || eV.dispose(), sV.dispose(), yV.dispose(), null === (xV = pV) || void 0 === xV || xV(), null === (JV = QV) || void 0 === JV || JV(), null === (YV = wV) || void 0 === YV || YV(), null === (UV = vV) || void 0 === UV || UV(), null === (nV = rV) || void 0 === nV || nV(), null === (ZV = qV) || void 0 === ZV || ZV(), null === (kV = undefined) || void 0 === kV || kV(), null === (bV = tV) || void 0 === bV || bV(), null === (EV = FV) || void 0 === EV || EV(), null === (BV = AV) || void 0 === BV || BV(), null === (jV = XV) || void 0 === jV || jV(), null === (TV = undefined) || void 0 === TV || TV(), null === (PV = zV) || void 0 === PV || PV()
          },
          onPlayerChangeBlock: (VV, eV, JV, YV, pV, QV) => {
            if (VV === UV && "Air" === QV) {
              const VV = gV.getClientOption(UV, "creative");
              yV.skills.predictBlock([eV, JV, YV], pV, VV);
              const QV = function(VV, eV) {
                  if ("hub" === eV || "farming_1" === eV || "mining_1" === eV) return !oV.has(VV) || "hub" !== eV && "mining_1" !== eV ? Object.hasOwn(CV, VV) ? CV[VV] : void 0 : iV
                }(pV, xV),
                nV = ("hub" === xV || "mining_1" === xV) && (ZV.md.some((VV => VV === pV)) || Object.hasOwn(cV, pV) || "mining_1" === xV && "Block of Coal" === pV);
              VV || void 0 === QV && !nV || gV.gR(eV, JV, YV, null !== QV && void 0 !== QV ? QV : iV)
            }
          },
          onPlayerAttackEntity: (VV, eV) => {
            if (VV !== UV || "Player" !== gV.getEntityType(eV)) return;
            const [xV, JV, YV] = gV.YF(eV);
            gV.burstParticlePreset("critical", [xV, JV + 1, YV], 10)
          },
          onChangeBlockFail: VV => {
            for (const {
                RJ: eV
              }
              of VV) yV.skills.rejectBlock(eV)
          },
          onReceivedMessageFromServer: (VV, eV) => {
            if ("skyblockGatedPortal" === VV) {
              var xV;
              const [VV, JV] = eV;
              return void(null === (xV = IV.get(VV)) || void 0 === xV || xV.RZ(JV))
            }
            if ("skyblockDailyReward" === VV) return void yV.dailyReward.RZ(eV);
            if ("skyblockMailbox" === VV) return void yV.mailbox.RZ(eV);
            if ("skyblockPortalTransit" === VV) return void yV.portalTransit.RZ(eV);
            if ("skyblockLoot" === VV) return void WV.RZ(gV, eV);
            if ("skyblockLava" === VV) return void SV.RZ(eV);
            if ("skyblockForge" === VV) return void yV.forge.RZ(eV);
            if ("skyblockMagmaward" === VV) return void yV.magmaward.RZ(eV);
            if ("skyblockGlowtide" === VV) return void yV.glowtide.RZ(eV);
            if ("skyblockGlowMeter" === VV) return void yV.glowMeter.RZ(eV);
            if ("skyblockHushWait" === VV) return void yV.hushWait.RZ(eV);
            if ("skyblockPassage" === VV) {
              const VV = eV;
              return yV.passage.RZ(VV), yV.reachLog.receivePassagePhase(VV.passagePhase), AV ??= (0, TV.s)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: yV.passage.show
              }), void yV.keepersChair.receivePassage({
                keepersChairPassagePhase: VV.passagePhase,
                keepersChairPassageNextPhase: VV.passageNextPhase,
                keepersChairPassageTurnsInMs: VV.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === VV) {
              const VV = eV;
              return yV.tideCharts.RZ(VV), void(VV.tideCharts.length > 0 && (XV ??= (0, TV.s)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: yV.tideCharts.show
              })))
            }
            if (VV === LV.C) {
              var JV;
              const {
                hookId: VV,
                waiting: xV
              } = eV;
              return void sV.hookWaiting(VV, null !== (JV = null === xV || void 0 === xV ? void 0 : xV.remainingMs) && void 0 !== JV ? JV : null)
            }
            if ("skyblockBiteTell" === VV) return void uV.receiveTell(eV);
            if ("skyblockSmuggler" === VV) return void yV.smuggler.RZ(eV);
            if ("skyblockKeepersChair" === VV) return yV.keepersChair.RZ(eV), void yV.lampLight.setAtChair(yV.keepersChair.isAtChair());
            if ("skyblockLampLight" === VV) {
              const VV = eV;
              var YV;
              if (yV.lampLight.RZ(VV), VV.lampLightReleasing) FV ??= (0, TV.s)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  yV.lampLight.setRelease(!1)
                }
              });
              else null === (YV = FV) || void 0 === YV || YV(), FV = void 0;
              return
            }
            if ("skyblockRegulars" === VV) return void yV.regulars.RZ(eV);
            if ("skyblockHiddenWaters" === VV) return void yV.hiddenWaters.RZ(eV);
            if ("skyblockReachLog" === VV) return yV.reachLog.RZ(eV), void(tV ??= (0, TV.s)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: QJ
              },
              onClick: yV.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === VV) {
              for (const [VV, xV, JV, YV] of eV) gV.gR(VV, xV, JV, YV);
              return
            }
            if ("skyblockHud" === VV) yV.receiveHud(eV);
            else if ("skyblockMap" === VV) yV.map.RZ(eV);
            else if (VV === fV.f) yV.skills.RZ(eV);
            else if (VV === MV && "dialogue" === eV.kind) yV.dialogue.RZ(eV);
            else if (VV === MV) yV.quests.RZ(eV);
            else if ("skyblockDungeons" === VV) yV.dungeons.RZ(eV);
            else if ("sbCollections" === VV) yV.collections.RZ(eV);
            else if ("skyblockQuestGraph" === VV) yV.questGraph.RZ(eV);
            else {
              if ("skyblockAutographs" !== VV) return;
              yV.autographs.RZ(eV)
            }
            if (!QV && yV.map.getSnapshot().enabled) {
              const VV = (0, TV.s)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: yV.map.show
                }),
                eV = (0, mV.v)(yV.map.show);
              QV = () => {
                VV(), eV()
              }
            }!wV && yV.skills.getSnapshot().enabled && (wV = (0, TV.s)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: yV.skills.show
            })), !qV && yV.collections.getSnapshot().enabled && (qV = (0, TV.s)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: yV.collections.show
            })), !vV && yV.quests.getSnapshot().enabled && (vV = (0, TV.s)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: yV.quests.show
            })), !zV && yV.autographs.getSnapshot().enabled && (zV = (0, TV.s)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: yV.autographs.show
            }));
            const UV = yV.dungeons.getSnapshot().enabled;
            var nV;
            (wV || vV || UV) && jV !== UV && (jV = UV, null === (nV = rV) || void 0 === nV || nV(), rV = (0, TV.s)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Cp
              },
              disabled: !UV,
              panel: !0,
              onClick: yV.dungeons.show
            }));
            pV || (pV = (0, mV.z)((0, PV.createElement)(Up, {
              controller: yV
            }), {
              content: (0, PV.createElement)(yp, {
                controller: yV
              }),
              onClose: yV.close
            }))
          },
          iZ: () => {
            var VV;
            for (const eV of IV.values()) eV.iZ();
            WV.iZ(gV), SV.iZ(), null === (VV = aV) || void 0 === VV || VV.iZ(), yV.skills.iZ(), yV.quests.iZ(), yV.dailyReward.iZ(), yV.mailbox.iZ(), yV.map.iZ()
          }
        }
      }
  },
  39683: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => YV
    });
    var JV = xV(375);
    const YV = (0, JV.Cb)([0, 0, -1]),
      UV = [{
        name: "S",
        bearing: (0, JV.Cb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, JV.Cb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: YV
      }, {
        name: "W",
        bearing: (0, JV.Cb)([1, 0, 0])
      }]
  },
  39678: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      g: () => UV
    });
    var JV = xV(39683);

    function YV(VV, eV, xV) {
      return [100 * (xV.mapMaxX - VV) / (xV.mapMaxX - xV.mapMinX), 100 * (eV - xV.mapMinZ) / (xV.mapMaxZ - xV.mapMinZ)]
    }

    function UV(VV, eV, xV, UV) {
      const [yV, pV] = YV(VV, eV, UV), QV = JV.f - xV;
      return {
        rotation: QV,
        transform: `rotate(${QV}rad) translate(-${yV}%, -${pV}%)`
      }
    }
  },
  39725: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => yV
    });
    var JV = xV(4648);
    const YV = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function UV(VV) {
      const eV = new JV.l(VV);
      return {
        radius: 45,
        squareness: 3,
        wobbles: YV.map((VV => {
          let {
            lobes: xV,
            amount: JV
          } = VV;
          return {
            lobes: xV[Math.floor(eV.next() * xV.length)],
            amount: JV[0] + eV.next() * (JV[1] - JV[0]),
            phase: 2 * eV.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function yV(VV) {
      let {
        radius: eV,
        squareness: xV,
        wobbles: JV,
        samples: YV
      } = VV;
      const UV = [];
      for (let yV = 0; yV < YV; yV++) {
        const VV = 2 * Math.PI * yV / YV,
          pV = Math.cos(VV),
          QV = Math.sin(VV),
          nV = eV * (Math.abs(pV) ** xV + Math.abs(QV) ** xV) ** (-1 / xV) * JV.reduce(((eV, xV) => {
            let {
              lobes: JV,
              amount: YV,
              phase: UV
            } = xV;
            return eV + YV * Math.sin(JV * VV + UV)
          }), 1);
        UV.push(`${(50+nV*pV).toFixed(2)} ${(50+nV*QV).toFixed(2)}`)
      }
      return `M${UV.join("L")}Z`
    }
  },
  37507: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      f: () => JV
    });
    const JV = "skyblockSkills",
      YV = "skills_test_gym"
  },
  39742: (VV, eV, xV) => {
    var JV = {
      "./combat_1.png": 39749,
      "./dungeon_crumbling_crypt.png": 39756,
      "./dungeon_frozen_hollow.png": 39758,
      "./dungeon_wildwood_grove.png": 39767,
      "./dungeons.png": 39769,
      "./farming_1.png": 39771,
      "./fishing_1.png": 39779,
      "./hub.png": 39788,
      "./island.png": 39792,
      "./mining_1.png": 39796,
      "./mining_1_bridge.png": 39805,
      "./mining_1_gallery.png": 39813,
      "./mining_1_hollow.png": 39816,
      "./mining_1_village.png": 39820
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 39742
  },
  39749: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39756: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39758: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39767: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39769: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39771: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39779: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39788: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39792: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39796: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39805: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39813: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39816: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39820: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);