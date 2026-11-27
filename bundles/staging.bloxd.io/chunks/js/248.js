export const id = 248;
export const ids = [60, 248];
export const modules = {
  39862: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => uR
    });
    const yR = new WeakMap;

    function tR(RR, JR) {
      return yR.set(RR, JR), RR
    }

    function uR(RR) {
      var JR;
      return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
    }
  },
  39727: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor(RR, JR, GR) {
        this.JK = RR, this.beforeOpen = JR, this.afterClose = GR, this.open = !1, this.He = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.He && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(RR) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(RR)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.He = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.He || (this.snapshot = this.buildSnapshot(), this.JK(this.snapshot))
      }
    }
  },
  39880: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SkyblockEntityFacing: () => qR,
      needsSkyblockEntityFacing: () => ZR
    });
    var yR = GR(671),
      tR = GR(3017),
      uR = GR(39889);

    function ZR(RR, JR) {
      if (RR.metaInfo === yR.e || "Iron Guardian" === RR.type || "Gold Guardian" === RR.type) return !0;
      if ("Pig" === RR.type) return "sitting" === RR.pose;
      if ("Person" !== RR.meshKind || void 0 === RR.meshOpts) return !1;
      let GR = null === JR || void 0 === JR ? void 0 : JR.get(RR.meshOpts);
      if (void 0 === GR) {
        var uR, ZR;
        const yR = (0, tR.g)(RR);
        GR = !1, "pig_napoleon" === (null === yR || void 0 === yR || null === (uR = yR.opts.textures) || void 0 === uR ? void 0 : uR.head) ? GR = !0 : "npc_pig_head" === (null === yR || void 0 === yR || null === (ZR = yR.opts.textures) || void 0 === ZR ? void 0 : ZR.head) && (GR = "sitting" === yR.opts.pose || "sitting"), JR && (JR.size >= 256 && JR.clear(), JR.set(RR.meshOpts, GR))
      }
      return "sitting" === GR ? "sitting" === RR.pose : GR
    }(0, uR.e)("skyblock", ((RR, JR) => {
      JR.setFacingTolerance(ZR(RR) ? 0 : null)
    }));
    class qR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = RR, this.alsoVisit = JR, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = RR => {
          var JR;
          const GR = this.api.getEntityInfo(RR);
          GR && (ZR(GR, this.meshFacingCache) && (this.api.setFacingTolerance(RR, 0), this.nextFacing.add(RR)), null === (JR = this.alsoVisit) || void 0 === JR || JR.call(this, RR, GR))
        }
      }
      gK() {
        const {
          api: RR
        } = this, JR = this.nextFacing;
        RR.forEachEntity(this.visit);
        for (const GR of this.facing) JR.has(GR) || RR.setFacingTolerance(GR, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = JR
      }
      dispose() {
        for (const RR of this.facing) this.api.setFacingTolerance(RR, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39705: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => gq
    });
    const yR = "island";
    var tR = GR(39713);

    function uR(RR, JR, GR) {
      const uR = "local" === JR,
        qR = RR.background,
        iR = JR => qR ? (0, tR.d)(JR[0] - RR.mapOrigin[0], JR[2] - RR.mapOrigin[2], qR.bounds) : [50, 50],
        fR = (RR.insideDungeon ? [] : RR.landmarks).map((RR => {
          var JR, yR;
          return {
            id: RR.id,
            name: GR(RR.visited && RR.nameKey ? null !== (JR = RR.mapLabelKey) && void 0 !== JR ? JR : RR.nameKey : "skyblockGame:mapUnknown"),
            icon: RR.visited && null !== (yR = RR.icon) && void 0 !== yR ? yR : "unknown",
            visited: RR.visited,
            current: !1,
            position: iR(RR.position),
            travelKind: "landmark",
            travelId: RR.id
          }
        })),
        VR = RR.zones.map((JR => {
          var yR;
          return {
            id: JR.id,
            name: GR(JR.visited && JR.nameKey ? JR.nameKey : "skyblockGame:mapUnknown"),
            icon: JR.visited && null !== (yR = JR.icon) && void 0 !== yR ? yR : "unknown",
            visited: JR.visited,
            current: JR.id === RR.zoneId,
            position: JR.position,
            thumbnail: JR.visited ? JR.id : void 0,
            travelKind: "zone",
            travelId: JR.id
          }
        })),
        KR = RR.insideDungeon || !qR ? [] : RR.portals.map((RR => {
          var JR;
          return {
            id: RR.id,
            name: GR(null !== (JR = RR.nameKey) && void 0 !== JR ? JR : "skyblockGame:mapUnknown"),
            icon: RR.visited ? "dungeons" === RR.destination ? "portal_orange" : "portal" : "unknown",
            visited: RR.visited,
            current: !1,
            position: iR(RR.position),
            colour: RR.colour,
            travelKind: "zone",
            travelId: RR.destination
          }
        })),
        wR = uR ? fR : VR,
        rR = wR.filter((RR => RR.visited)).length,
        eR = qR ? (qR.bounds.mapMaxX - qR.bounds.mapMinX) / (qR.bounds.mapMaxZ - qR.bounds.mapMinZ) : 2,
        aR = qR ? JSON.stringify([qR.bounds, RR.mapOrigin]) : "";
      return {
        local: uR,
        points: wR,
        portals: uR ? KR : [],
        progress: wR.length ? GR("skyblockGame:mapDiscovered", {
          current: String(rR),
          total: String(wR.length)
        }) : null,
        percent: wR.length ? 100 * rR / wR.length : 0,
        canTravel: [...wR, ...uR ? KR : []].some((RR => RR.visited && !RR.current)),
        noLandmarks: uR && !RR.insideDungeon && 0 === fR.length,
        background: qR ? {
          imageKey: qR.imageKey,
          fallbackImageKey: RR.zoneId,
          geometryKey: aR,
          label: GR(qR.labelKey),
          colour: qR.backgroundColour,
          ratio: eR
        } : null,
        connections: ZR(RR.zones),
        minimap: qR ? {
          imageKey: qR.imageKey,
          fallbackImageKey: RR.zoneId,
          geometryKey: aR,
          label: GR(qR.labelKey),
          colour: qR.backgroundColour,
          caption: GR(RR.zoneId === yR ? "skyblockGame:zoneIsland" : qR.labelKey),
          width: (qR.bounds.mapMaxX - qR.bounds.mapMinX) / qR.minimapSpan * 100 + "%",
          height: (qR.bounds.mapMaxZ - qR.bounds.mapMinZ) / qR.minimapSpan * 100 + "%",
          markers: [...fR, ...KR]
        } : null
      }
    }

    function ZR(RR) {
      const JR = new Set;
      return RR.flatMap((GR => GR.connections.flatMap((yR => {
        const tR = RR.find((RR => RR.id === yR)),
          uR = [GR.id, yR].sort().join("|");
        return !tR || JR.has(uR) ? [] : (JR.add(uR), [{
          id: `${GR.id}-${yR}`,
          start: GR.position,
          end: tR.position,
          explored: GR.visited && tR.visited
        }])
      }))))
    }
    var qR = GR(39727);
    class iR extends qR.d {}
    const fR = "skyblockMapView";
    class VR extends iR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(RR, yR, tR), this.requestTravel = JR, this.translate = GR, this.now = uR, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = RR => {
          this.tab = RR, this.feedbackKey = "", this.emit()
        }, this.travel = (RR, JR) => {
          if (!this.map || this.pending || this.He) return;
          const GR = ("zone" === RR ? this.map.zones : this.map.landmarks).find((RR => RR.id === JR));
          if (GR) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in GR && !GR.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (GR.visited)
              if ("zone" === RR && JR === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const GR = ++this.nextRequestId;
                this.pending = {
                  requestId: GR,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: RR,
                  id: JR,
                  requestId: GR
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
      setTranslator(RR) {
        this.translate = RR, this.emit()
      }
      BK(RR) {
        var JR;
        if (!this.He)
          if ("entities" !== RR.kind)
            if ("open" !== RR.kind) {
              var GR, yR;
              if ("snapshot" === RR.kind)(null === (GR = RR.snapshot) || void 0 === GR ? void 0 : GR.zoneId) !== (null === (yR = this.map) || void 0 === yR ? void 0 : yR.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = RR.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === RR.kind) {
                var tR;
                RR.requestId === (null === (tR = this.pending) || void 0 === tR ? void 0 : tR.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (RR.requestId === (null === (JR = this.pending) || void 0 === JR ? void 0 : JR.requestId)) {
                var uR;
                this.pending = null, this.feedbackKey = null !== (uR = RR.errorKey) && void 0 !== uR ? uR : "", null === RR.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = RR.entities
      }
      gK() {
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
          presentation: this.map ? uR(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var KR = GR(377);
    const wR = 67.5 * Math.PI / 180;

    function rR(RR, JR) {
      const GR = Math.abs(RR);
      if (GR > wR || JR.trackHalfWidth <= 0) return null;
      const yR = JR.trackHalfWidth,
        tR = JR.screenHalfWidth / (JR.tanHalfFovX * Math.max(.5, Math.cos(JR.pitch))),
        uR = Math.min(Math.atan(.6 * yR / tR), .75 * wR),
        ZR = tR * Math.tan(uR);
      let qR;
      if (GR <= uR) qR = tR * Math.tan(GR);
      else {
        const RR = wR - uR,
          JR = Math.max(0, tR * RR / (Math.cos(uR) ** 2 * (yR - ZR)) - 1),
          iR = (GR - uR) / RR;
        qR = ZR + (yR - ZR) * (1 + JR) * iR / (1 + JR * iR)
      }
      return 50 + Math.sign(RR) * qR * 50 / yR
    }
    class eR {
      constructor(RR, JR) {
        this.map = RR, this.visited = JR, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = JR ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const RR = this.map.getSnapshot().map;
        return !RR || RR.insideDungeon ? [] : RR.landmarks.filter((RR => RR.visited === this.visited)).map((RR => {
          var JR, GR;
          return {
            id: `landmark:${RR.id}`,
            position: RR.position,
            icon: null !== (JR = RR.icon) && void 0 !== JR ? JR : "unknown",
            nameKey: null !== (GR = RR.nameKey) && void 0 !== GR ? GR : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class aR {
      constructor(RR, JR, GR, yR) {
        this.map = RR, this.kind = JR, this.position = GR, this.alive = yR, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = JR, this.range = "enemy" === JR ? 48 : 64, this.limit = 12
      }
      vW(RR) {
        if ("enemy" !== this.kind || this.alive(RR.fG)) return this.position(RR.fG)
      }
      getPoints() {
        const RR = [];
        for (const yR of this.map.getEntities()) {
          if (yR.kind !== this.kind || "enemy" === this.kind && !this.alive(yR.compassEntityId)) continue;
          const tR = this.position(yR.compassEntityId);
          var JR, GR;
          if (tR) RR.push({
            id: `${this.kind}:${yR.compassEntityId}`,
            fG: yR.compassEntityId,
            kind: this.kind,
            icon: null !== (JR = yR.icon) && void 0 !== JR ? JR : yR.npcSkin ? `npc_${yR.npcSkin}` : this.kind,
            displayName: yR.displayName,
            position: tR,
            nameKey: null !== (GR = yR.nameKey) && void 0 !== GR ? GR : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return RR
      }
    }
    class LR {
      constructor(RR) {
        this.map = RR, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const RR = this.map.getSnapshot().map;
        return !RR || RR.insideDungeon ? [] : RR.portals.map((RR => {
          var JR;
          return {
            id: "portal:" + RR.id,
            kind: "portal",
            position: RR.position,
            nameKey: null !== (JR = RR.nameKey) && void 0 !== JR ? JR : "skyblockGame:compassUnvisitedZone",
            icon: RR.visited ? "dungeons" === RR.destination ? "portal_orange" : "portal" : "unknown",
            colour: RR.colour
          }
        }))
      }
    }
    class nR {
      constructor(RR) {
        this.target = RR, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const RR = this.target();
        return RR ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: RR.position,
          nameKey: RR.nameKey
        }] : []
      }
    }

    function UR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.position;
      const tR = yR[0] - JR[0],
        uR = yR[2] - JR[2];
      return {
        ...RR,
        position: yR,
        offset: KR.e.computeShortestRotation(GR, (0, KR.Bb)([tR, 0, uR])),
        distance: Math.hypot(tR, yR[1] - JR[1], uR)
      }
    }
    let WR;

    function AR(RR, JR) {
      var GR;
      return (null === (GR = WR) || void 0 === GR ? void 0 : GR.locale) !== JR && (WR = {
        locale: JR,
        near: new Intl.NumberFormat(JR, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(JR, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (RR < 10 ? WR.near : WR.far).format(RR)
    }
    class CR {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(RR) {
        return this.providers.set(RR.id, RR), this.refreshAt = 0, () => {
          this.providers.get(RR.id) === RR && (this.providers.delete(RR.id), this.refreshAt = 0)
        }
      }
      frame(RR, JR, GR) {
        if (GR >= this.refreshAt) {
          this.refreshAt = GR + 200, this.candidates = [];
          for (const JR of this.providers.values()) {
            if (!JR.enabled) continue;
            const GR = JR.getPoints().map((JR => {
              const GR = JR.position;
              return {
                point: JR,
                distance: Math.hypot(GR[0] - RR[0], GR[1] - RR[1], GR[2] - RR[2])
              }
            })).filter((RR => RR.distance <= JR.range)).sort(((RR, JR) => RR.distance - JR.distance)).slice(0, JR.limit);
            for (const {
                point: RR
              }
              of GR) this.candidates.push({
              provider: JR,
              point: RR
            })
          }
        }
        const yR = [];
        for (const {
            point: tR,
            provider: uR
          }
          of this.candidates) {
          if (!uR.enabled) continue;
          const GR = uR.vW ? uR.vW(tR) : tR.position;
          if (GR) {
            const uR = UR(tR, RR, JR, GR);
            Math.abs(uR.offset) <= wR && yR.push(uR)
          }
        }
        return yR
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var XR = GR(3498),
      MR = GR(66);
    const BR = [{
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
      lR = BR.length;

    function pR(RR) {
      return RR >= lR ? 1 : RR + 1
    }
    const gR = "skyblockQuests",
      bR = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      vR = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function OR(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const GR = Math.max(0, Math.floor(RR)),
        yR = Math.floor(GR % 1e3 / 100),
        tR = Math.floor(GR / 1e3),
        uR = tR % 60,
        ZR = Math.floor(tR / 60),
        qR = ZR % 60,
        iR = Math.floor(ZR / 60),
        fR = RR => RR < 10 ? `0${RR}` : String(RR),
        VR = JR ? `.${yR}` : "";
      return iR > 0 ? `${iR}:${fR(qR)}:${fR(uR)}${VR}` : `${qR}:${fR(uR)}${VR}`
    }
    const xR = "devquests",
      NR = "none",
      DR = {
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
      HR = "Compressed Messy Stone",
      oR = {
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
      cR = ["Stone", "Diorite", "Andesite", "Granite"],
      PR = new Set(cR),
      IR = (Object.keys(oR), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const mR = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function zR(RR, JR) {
      const GR = Math.floor(5 * RR / (2 * JR + 1));
      return Math.min(4, Math.max(0, GR))
    }
    var SR = GR(1336);
    var jR = GR(37415);
    var dR = GR(3494),
      ER = GR(32),
      YR = GR(10238);
    const kR = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      QR = 1e3;

    function FR(RR) {
      return Math.max(0, RR)
    }

    function TR(RR) {
      return 1 + .01 * FR(RR)
    }

    function sR(RR) {
      return 1 + .005 * FR(RR)
    }

    function hR(RR) {
      return 1 + .005 * FR(RR)
    }

    function RJ(RR) {
      return .01 * FR(RR)
    }

    function JJ(RR) {
      return 150 / (150 + FR(RR))
    }

    function GJ(RR) {
      return 1 + .002 * FR(RR)
    }

    function yJ(RR) {
      return Math.round(10 * RR) / 10
    }

    function tJ(RR, JR) {
      switch (RR) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: yJ(100 * (sR(JR) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: yJ(100 * (TR(JR) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: yJ(100 * (hR(JR) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: yJ(100 * RJ(JR))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: yJ(100 * (1 - JJ(JR)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: yJ(100 * (GJ(JR) - 1))
          }
      }
    }

    function uJ(RR) {
      return "farming" === RR ? 200 : 100
    }

    function ZJ(RR, JR) {
      if (!Number.isSafeInteger(RR) || RR < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const GR = uJ(JR),
        yR = RR => function(RR, JR) {
          return uJ(RR) * JR * (JR + 1) / 2
        }(JR, RR);
      let tR = Math.min(QR, Math.floor((Math.sqrt(8 * RR / GR + 1) - 1) / 2));
      return tR < QR && yR(tR + 1) <= RR ? tR++ : yR(tR) > RR && tR--, {
        totalXp: RR,
        level: tR,
        xpIntoLevel: RR - yR(tR),
        xpForNextLevel: tR === QR ? null : GR * (tR + 1)
      }
    }
    const qJ = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function iJ(RR) {
      return qJ.has(RR)
    }
    const fJ = new Set(KR.nb);

    function VJ(RR) {
      return fJ.has(RR)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const KJ = {
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
      wJ = {
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
      rJ = {
        ...wJ,
        ...Object.fromEntries(Object.entries(IR).map((RR => {
          let [JR, GR] = RR;
          return [JR, 9 * wJ[GR]]
        })))
      },
      eJ = {
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
      aJ = {
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
    const LJ = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      nJ = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function UJ(RR) {
      return `rgb(${nJ[RR].join(", ")})`
    }

    function WJ(RR, JR, GR) {
      if (!GR) return RR(JR);
      const yR = {};
      for (const [tR, uR] of Object.entries(GR)) yR[tR] = "string" === typeof uR ? uR : RR(uR.translationKey);
      return RR(JR, yR)
    }
    class AJ {
      constructor(RR, JR) {
        this.now = RR, this.getJournal = JR, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Qq = !1, this.onShown = () => {}
      }
      enqueue(RR) {
        const JR = CJ(RR);
        if (JR) this.pending.push(RR);
        else {
          const JR = this.pending.findIndex(CJ);
          this.pending.splice(-1 === JR ? this.pending.length : JR, 0, RR)
        }
        return (null === this.current || null !== this.followUp && !JR) && (this.advance(), !0)
      }
      setHeld(RR) {
        return this.Qq = RR, !RR && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      gK() {
        const RR = this.getJournal(),
          JR = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === JR ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === JR || void 0 === JR ? void 0 : JR.kind) && RR && RR.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === JR || void 0 === JR ? void 0 : JR.kind)) {
          const RR = this.findFollowUp(this.current);
          if ("step" !== (null === RR || void 0 === RR ? void 0 : RR.kind) || RR.questId !== JR.questId || RR.step.id !== JR.step.id) return this.showFollowUp(RR, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(RR, JR, GR) {
        var yR, tR, uR, ZR;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, RR, GR);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, RR);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, RR, JR);
        const {
          questCompletionKind: qR,
          questCompletionNameKey: iR
        } = this.current, fR = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, VR = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, KR = "step" === (null === (yR = this.followUp) || void 0 === yR ? void 0 : yR.kind) ? this.followUp : null, wR = "explore" === (null === (tR = this.followUp) || void 0 === tR ? void 0 : tR.kind);
        let rR;
        return rR = wR ? RR("skyblockGame:questExploreTitle") : null !== KR ? "quest" === qR ? RR("skyblockGame:questNextQuestTitle", {
          quest: RR(KR.questNameKey)
        }) : RR("skyblockGame:questNextStepTitle") : RR("started" === qR ? "skyblockGame:questStartedTitle" : "quest" === qR ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? qR : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: rR,
          name: wR ? JR("skyblockGame:questExploreName") : null !== KR ? WJ(JR, KR.step.nameKey, KR.step.nameParams) : WJ(JR, iR, fR),
          description: wR ? JR("skyblockGame:questExploreDescription") : null === KR ? null : WJ(JR, KR.step.descriptionKey, KR.step.descriptionParams),
          reward: null === this.followUp && VR > 0 ? JR("skyblockGame:questCoinRewardSuffix", {
            amount: VR.toLocaleString(GR)
          }) : null,
          iconItem: null !== (uR = null === KR || void 0 === KR ? void 0 : KR.step.questIconItem) && void 0 !== uR ? uR : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== KR && (null === (ZR = this.getJournal()) || void 0 === ZR ? void 0 : ZR.trackedQuestId) === KR.questId ? KR.step.nameKey : null
        }
      }
      getSkillLevelView(RR, JR, GR) {
        let {
          skill: yR,
          beforeLevel: tR,
          level: uR
        } = RR;
        const ZR = tJ(yR, tR),
          qR = tJ(yR, uR);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: JR(`skyblockGame:${yR}`),
          name: JR("skyblockGame:skillLevelUp", {
            to: uR.toLocaleString(GR)
          }),
          description: ZR.percent === qR.percent ? null : JR(`${qR.translationKey}Change`, {
            before: ZR.percent.toLocaleString(GR),
            after: qR.percent.toLocaleString(GR)
          }),
          reward: null,
          iconItem: LJ[yR],
          accent: UJ(yR),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(RR, JR) {
        let {
          landmarkNameKey: GR
        } = RR;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: JR("skyblockGame:landmarkDiscovered"),
          name: JR(GR),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(RR, JR, GR) {
        let {
          titleKey: yR,
          textKey: tR,
          params: uR = {},
          nameKeys: ZR = {},
          iconItem: qR = null
        } = RR;
        const iR = {
          ...uR
        };
        for (const [fR, VR] of Object.entries(ZR)) iR[fR] = JR(VR);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: JR(yR),
          name: GR(tR, iR),
          description: null,
          reward: null,
          iconItem: qR,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var RR;
        if (null !== this.followUp) return 5600;
        switch (null === (RR = this.current) || void 0 === RR ? void 0 : RR.questCompletionKind) {
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
      showFollowUp(RR, JR) {
        null === RR || this.Qq ? this.advance() : (this.followUp = RR, this.token++, this.shownAt = this.now(), this.expiresAt = null !== JR && void 0 !== JR ? JR : this.shownAt + this.durationMs())
      }
      findFollowUp(RR) {
        var JR;
        const GR = this.getJournal();
        if (!GR || this.hasPendingQuestPopup() || CJ(RR)) return null;
        const yR = "started" === RR.questCompletionKind ? GR.active.some((JR => JR.id === RR.questCompletionQuestId)) : "quest" === RR.questCompletionKind ? GR.completed.some((JR => JR.id === RR.questCompletionQuestId)) : [...GR.active, ...GR.completed].some((JR => JR.id === RR.questCompletionQuestId && JR.subquests.some((JR => JR.id === RR.questCompletionStepId && "completed" === JR.status))));
        if (!yR) return null;
        if ("quest" === RR.questCompletionKind && 0 === GR.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const tR = GR.active.find((RR => RR.id === GR.trackedQuestId)),
          uR = null !== (JR = null === tR || void 0 === tR ? void 0 : tR.subquests.find((RR => "ready" === RR.status))) && void 0 !== JR ? JR : null === tR || void 0 === tR ? void 0 : tR.subquests.find((RR => "active" === RR.status));
        return uR ? {
          kind: "step",
          questId: tR.id,
          questNameKey: tR.nameKey,
          step: uR
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((RR => !CJ(RR)))
      }
      advance() {
        var RR;
        this.current = this.Qq ? null : null !== (RR = this.pending.shift()) && void 0 !== RR ? RR : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function CJ(RR) {
      return XJ(RR.questCompletionKind)
    }

    function XJ(RR) {
      return "skillLevel" === RR || "landmark" === RR || "npcNote" === RR
    }
    var MJ = GR(39731),
      BJ = GR(39739),
      lJ = GR(39691),
      pJ = GR(3031);
    const gJ = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function bJ(RR) {
      const JR = new pJ.i(RR);
      return {
        radius: 45,
        squareness: 3,
        wobbles: gJ.map((RR => {
          let {
            lobes: GR,
            amount: yR
          } = RR;
          return {
            lobes: GR[Math.floor(JR.next() * GR.length)],
            amount: yR[0] + JR.next() * (yR[1] - yR[0]),
            phase: 2 * JR.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function vJ(RR) {
      let {
        radius: JR,
        squareness: GR,
        wobbles: yR,
        samples: tR
      } = RR;
      const uR = [];
      for (let ZR = 0; ZR < tR; ZR++) {
        const RR = 2 * Math.PI * ZR / tR,
          qR = Math.cos(RR),
          iR = Math.sin(RR),
          fR = JR * (Math.abs(qR) ** GR + Math.abs(iR) ** GR) ** (-1 / GR) * yR.reduce(((JR, GR) => {
            let {
              lobes: yR,
              amount: tR,
              phase: uR
            } = GR;
            return JR + tR * Math.sin(yR * RR + uR)
          }), 1);
        uR.push(`${(50+fR*qR).toFixed(2)} ${(50+fR*iR).toFixed(2)}`)
      }
      return `M${uR.join("L")}Z`
    }
    const OJ = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class xJ {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.He = !1, this.mountCompass = RR => {
          var JR;
          if (null === (JR = this.stopLayout) || void 0 === JR || JR.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !RR || this.He) return;
          const GR = RR.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: RR,
            track: GR,
            label: RR.querySelector(".SkyblockCompassLabel")
          }, GR.replaceChildren();
          for (let tR = 0; tR < 4; tR++) {
            const RR = document.createElement("span");
            RR.className = "SkyblockCompassCardinal", GR.appendChild(RR), this.cardinals.push(RR)
          }
          const yR = (0, lJ.c)(OJ, [RR], this.layout);
          this.stopLayout = () => {
            yR(), GR.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = RR => {
          this.terrain = this.He ? null : RR, this.render(this.frame)
        }, this.mountMinimapSearchArea = RR => {
          this.mountSearchArea("minimap", RR)
        }, this.mountMapSearchArea = RR => {
          this.mountSearchArea("map", RR)
        }, this.mountPlayer = RR => {
          this.player = this.He ? null : RR, this.render(this.frame)
        }, this.mountWaypoint = RR => {
          var JR, GR;
          if (null === (JR = this.stopWaypoint) || void 0 === JR || JR.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !RR || this.He) return;
          const yR = RR.querySelector(".SkyblockQuestWaypointMarker");
          yR.replaceChildren((0, BJ.d)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: RR,
            marker: yR,
            clip: RR.querySelector(".SkyblockQuestWaypointTextClip"),
            text: RR.querySelector(".SkyblockQuestWaypointText"),
            label: RR.querySelector(".SkyblockQuestWaypointLabel"),
            distance: RR.querySelector(".SkyblockQuestWaypointDistance"),
            hint: RR.querySelector(".SkyblockQuestWaypointHint")
          };
          const tR = () => {
              this.waypointMarkerSize = {
                width: yR.offsetWidth,
                height: yR.offsetHeight
              }, this.waypointInset = {
                x: yR.offsetWidth / 2 + 8,
                top: yR.offsetHeight + 8,
                bottom: 8
              }
            },
            uR = new ResizeObserver((() => {
              tR(), this.render(this.frame)
            }));
          uR.observe(yR, {
            box: "border-box"
          });
          const ZR = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", ZR), null === (GR = window.visualViewport) || void 0 === GR || GR.addEventListener("resize", ZR), this.stopWaypoint = () => {
            var RR;
            uR.disconnect(), window.removeEventListener("resize", ZR), null === (RR = window.visualViewport) || void 0 === RR || RR.removeEventListener("resize", ZR)
          }, ZR(), tR(), this.render(this.frame)
        }, this.mountWaypointOrigin = RR => {
          var JR;
          if (null === (JR = this.stopWaypointOrigin) || void 0 === JR || JR.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = RR && !this.He ? Number(RR.dataset.notificationToken) : null, RR && !this.He && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const JR = {
              nameKey: RR.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = JR;
            const GR = () => {
                const GR = RR.getBoundingClientRect();
                JR.x = (GR.left + GR.width / 2) / window.innerWidth * 100, JR.y = (GR.top + GR.height / 2) / window.innerHeight * 100
              },
              yR = new ResizeObserver(GR);
            yR.observe(RR.parentElement), yR.observe(RR), window.addEventListener("resize", GR), this.stopWaypointOrigin = () => {
              yR.disconnect(), window.removeEventListener("resize", GR)
            }, GR()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const RR = this.compass.root,
            JR = getComputedStyle(RR),
            GR = getComputedStyle(document.documentElement),
            yR = parseFloat(GR.fontSize),
            tR = parseFloat(JR.getPropertyValue("--compass-icon-size")) * yR,
            uR = "1" === JR.getPropertyValue("--compass-fit-top").trim(),
            ZR = uR ? 1 : 8,
            qR = Array.from(document.querySelectorAll(OJ), (RR => {
              var JR;
              return (null !== (JR = RR.querySelector(".MiddleTextTop")) && void 0 !== JR ? JR : RR).getBoundingClientRect()
            })).filter((RR => RR.width > 0 && RR.height > 0));
          let iR = (parseFloat(GR.getPropertyValue("--notchTop")) || 0) + ZR,
            fR = "";
          if (uR) {
            const JR = window.innerWidth / 2,
              GR = RR.getBoundingClientRect().height,
              uR = [iR, ...qR.map((RR => Math.max(iR, RR.bottom + ZR)))].sort(((RR, JR) => RR - JR));
            for (const RR of uR) {
              let uR = JR - 8;
              for (const yR of qR) yR.bottom + ZR <= RR || yR.top >= RR + GR + ZR || (uR = Math.min(uR, yR.right <= JR ? JR - yR.right - 8 : yR.left - JR - 8));
              const VR = 2 * uR - tR;
              if (VR >= 16 * yR) {
                fR = `${VR}px`, iR = RR;
                break
              }
            }
          }
          RR.style.maxWidth !== fR && (RR.style.maxWidth = fR);
          const VR = RR.getBoundingClientRect(),
            KR = this.compassSize.trackHalfWidth;
          if (VR.width > 0) {
            const RR = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: RR.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * tR / RR.width
          }
          if (!fR)
            for (const wR of qR) wR.right > VR.left - 8 && wR.left < VR.right + 8 && (iR = Math.max(iR, wR.bottom + ZR));
          RR.style.top = `${iR}px`, this.compassSize.trackHalfWidth !== KR && this.render(this.frame)
        }
      }
      mountSearchArea(RR, JR) {
        this.searchAreas[RR] = this.He ? null : JR, this.render(this.frame)
      }
      render(RR) {
        if (this.He) return;
        if (this.frame = RR, this.compass && (NJ(this.compass.root, !RR), RR)) {
          const JR = this.compassSize.trackHalfWidth / 50;
          RR.compass.cardinals.forEach(((RR, GR) => {
            const yR = this.cardinals[GR];
            yR.textContent !== RR.name && (yR.textContent = RR.name), NJ(yR, RR.hidden), yR.style.translate = RR.left * JR + "px"
          }));
          const GR = new Set;
          RR.compass.markers.forEach(((yR, tR) => {
            var uR;
            GR.add(yR.id);
            let ZR = this.markers.get(yR.id);
            ZR || (ZR = document.createElement("span"), ZR.className = "SkyblockCompassMarker", this.markers.set(yR.id, ZR), this.compass.track.appendChild(ZR)), ZR.dataset.icon !== yR.icon && (ZR.dataset.icon = yR.icon, ZR.replaceChildren((0, BJ.d)(yR.icon))), ZR.style.color = null !== (uR = yR.colour) && void 0 !== uR ? uR : "", ZR.style.translate = yR.left * JR + "px", ZR.style.zIndex = String(RR.compass.markers.length - tR), ZR.title !== yR.name && (ZR.title = yR.name)
          }));
          for (const [RR, yR] of this.markers) GR.has(RR) || (yR.remove(), this.markers.delete(RR));
          this.compass.label.textContent !== RR.compass.label && (this.compass.label.textContent = RR.compass.label)
        }
        this.terrain && (NJ(this.terrain, !(null !== RR && void 0 !== RR && RR.minimap)), null !== RR && void 0 !== RR && RR.minimap && (this.terrain.style.transform = RR.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", RR.minimap.iconRotation)));
        const JR = null === RR || void 0 === RR ? void 0 : RR.searchArea;
        for (const GR of [this.searchAreas.minimap, this.searchAreas.map])
          if (GR && (NJ(GR, !JR), JR)) {
            if (this.searchAreaPath.seed !== JR.shapeSeed && (this.searchAreaPath = {
                seed: JR.shapeSeed,
                d: vJ(bJ(JR.shapeSeed))
              }), GR.dataset.shapeSeed !== JR.shapeSeed) {
              GR.dataset.shapeSeed = JR.shapeSeed;
              for (const RR of GR.querySelectorAll("path")) RR.setAttribute("d", this.searchAreaPath.d)
            }
            GR.style.left = `${JR.left}%`, GR.style.top = `${JR.top}%`, GR.style.width = `${JR.width}%`, GR.style.height = `${JR.height}%`
          } if (this.player && (NJ(this.player, !(null !== RR && void 0 !== RR && RR.player) || RR.player.hidden), null !== RR && void 0 !== RR && RR.player && (this.player.style.left = `${RR.player.left}%`, this.player.style.top = `${RR.player.top}%`, this.player.style.setProperty("--map-player-rotation", RR.player.rotation))), this.waypoint) {
          const {
            root: JR,
            marker: GR,
            clip: yR,
            text: tR,
            label: uR,
            distance: ZR,
            hint: qR
          } = this.waypoint, iR = !(null !== RR && void 0 !== RR && RR.waypoint) || null !== RR.waypoint.popupToken && RR.waypoint.popupToken !== this.waypointOriginToken;
          NJ(JR, iR);
          let fR = 1;
          const VR = this.waypointLaunch;
          if (!iR && VR && RR.waypoint.nameKey === VR.nameKey) {
            const RR = performance.now();
            VR.startedAt ??= RR, fR = Math.min(1, Math.max(0, (RR - VR.startedAt - 450) / 1e3)), GR.style.opacity = String(Math.min(1, (RR - VR.startedAt) / 150)), 1 === fR && (this.waypointLaunch = null)
          } else GR.style.opacity = "", VR && null !== VR.startedAt && (this.waypointLaunch = null);
          if (JR.classList.toggle("Launching", fR < 1), null !== RR && void 0 !== RR && RR.waypoint) {
            const JR = this.waypointInset,
              iR = "quest_talk" === RR.waypoint.markerIcon ? function(RR, JR, GR) {
                if (!RR.text || null === RR.blockHeight || 0 === RR.nearness) return RR;
                const yR = RR.blockHeight / 100 * GR.height,
                  tR = -RR.nearness * (DJ * yR + JR.width / 2),
                  uR = RR.nearness * (HJ * yR + JR.height / 2);
                return {
                  ...RR,
                  text: {
                    x: RR.text.x + tR / GR.width * 100,
                    y: RR.text.y + uR / GR.height * 100
                  }
                }
              }(RR.waypoint, this.waypointMarkerSize, this.viewport) : RR.waypoint,
              KR = (0, MJ.d)(iR, JR, this.viewport),
              wR = fR * fR * (3 - 2 * fR),
              rR = fR < 1 ? VR.x + (KR.x - VR.x) * wR : KR.x,
              eR = fR < 1 ? VR.y + (KR.y - VR.y) * wR : KR.y;
            GR.style.translate = `${rR}vw ${eR}vh`, yR.style.clipPath = `inset(${JR.top}px ${JR.x}px ${JR.bottom}px)`, NJ(tR, fR < 1 || !RR.waypoint.text), tR.style.opacity = String(1 - RR.waypoint.nearness), RR.waypoint.text && (tR.style.translate = `${RR.waypoint.text.x}vw ${RR.waypoint.text.y}vh`), uR.textContent !== RR.waypoint.name && (uR.textContent = RR.waypoint.name), this.markerIcon !== RR.waypoint.markerIcon && (this.markerIcon = RR.waypoint.markerIcon, GR.replaceChildren((0, BJ.d)(this.markerIcon))), ZR.textContent !== RR.waypoint.distance && (ZR.textContent = RR.waypoint.distance), NJ(qR, null === RR.waypoint.hint), null !== RR.waypoint.hint && qR.textContent !== RR.waypoint.hint && (qR.textContent = RR.waypoint.hint)
          }
        }
      }
      dispose() {
        var RR, JR;
        this.mountWaypointOrigin(null), this.render(null), null === (RR = this.stopLayout) || void 0 === RR || RR.call(this), this.stopLayout = null, null === (JR = this.stopWaypoint) || void 0 === JR || JR.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.He = !0
      }
    }

    function NJ(RR, JR) {
      RR.hidden !== JR && (RR.hidden = JR)
    }
    const DJ = .55,
      HJ = .6;
    var oJ = GR(39722);
    const cJ = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class PJ {
      constructor(RR, JR, GR, yR) {
        this.map = RR, this.quests = JR, this.compass = GR, this.display = new xJ, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.He = !1, this.snapshot = null, this.texts = new Map, this.translate = yR
      }
      setTranslator(RR, JR) {
        this.translate = RR, this.locale = JR, this.metresFormat = new Intl.NumberFormat(JR), this.texts.clear()
      }
      translateCached(RR, JR) {
        const GR = void 0 === JR ? RR : `${RR} ${JR}`;
        let yR = this.texts.get(GR);
        return void 0 === yR && (this.texts.size >= 500 && this.texts.clear(), yR = this.translate(RR, void 0 === JR ? void 0 : {
          distance: JR
        }), this.texts.set(GR, yR)), yR
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(RR, JR, GR) {
        if (this.He) return;
        if (!RR) return this.snapshot = null, void this.display.render(null);
        const yR = this.map.getSnapshot().map,
          uR = GR.cameraHeading,
          ZR = {
            ...this.display.compassSize,
            tanHalfFovX: GR.tanHalfFovX,
            pitch: GR.cameraPitch
          },
          qR = [];
        if (yR)
          for (const tR of this.compass.frame(RR, uR, JR)) {
            const RR = rR(tR.offset, ZR);
            null !== RR && qR.push({
              ...tR,
              left: RR
            })
          }
        const iR = function(RR, JR) {
            const GR = [],
              yR = RR => "quest" === RR.kind ? RR.distance - 1 : RR.distance,
              tR = [...RR].sort(((RR, JR) => yR(RR) - yR(JR) || RR.id.localeCompare(JR.id)));
            for (const uR of tR) {
              let RR = !1;
              if ("quest" !== uR.kind)
                for (const yR of GR)
                  if (Math.abs(yR.left - uR.left) < JR) {
                    RR = !0;
                    break
                  } RR || GR.push(uR)
            }
            return GR
          }(qR, this.display.compassSpacing),
          fR = function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              GR = null;
            for (const yR of RR) Math.abs(yR.offset) <= JR && (!GR || yR.distance < GR.distance || yR.distance === GR.distance && Math.abs(yR.offset) < Math.abs(GR.offset)) && (GR = yR);
            return GR
          }(iR),
          VR = RR => {
            var JR;
            return null !== (JR = RR.displayName) && void 0 !== JR ? JR : this.translateCached(RR.nameKey)
          },
          wR = {
            compass: {
              markers: iR.map((RR => ({
                id: RR.id,
                icon: RR.icon,
                colour: RR.colour,
                name: VR(RR),
                left: RR.left
              }))),
              cardinals: oJ.e.map((RR => {
                let {
                  name: JR,
                  bearing: GR
                } = RR;
                const yR = rR(KR.e.computeShortestRotation(uR, GR), ZR);
                return {
                  name: JR,
                  left: null !== yR && void 0 !== yR ? yR : 0,
                  hidden: null === yR
                }
              })),
              label: fR ? `${VR(fR)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",AR(fR.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== yR && void 0 !== yR && yR.background) {
          const JR = RR[0] - yR.mapOrigin[0],
            GR = RR[2] - yR.mapOrigin[2],
            {
              rotation: ZR,
              transform: qR
            } = (0, tR.h)(JR, GR, uR, yR.background.bounds);
          wR.minimap = {
            transform: qR,
            iconRotation: -ZR + "rad"
          };
          const [iR, fR] = (0, tR.d)(JR, GR, yR.background.bounds);
          wR.player = {
            left: iR,
            top: fR,
            hidden: iR < 0 || fR < 0 || iR > 100 || fR > 100,
            rotation: -ZR + "rad"
          }
        }
        const {
          waypoint: eR
        } = this.quests.getSnapshot();
        if ("search" === (null === eR || void 0 === eR ? void 0 : eR.questMarkerIcon) && null !== yR && void 0 !== yR && yR.background) {
          const {
            bounds: RR
          } = yR.background, [JR, GR] = (0, tR.d)(eR.position[0] - yR.mapOrigin[0], eR.position[2] - yR.mapOrigin[2], RR);
          wR.searchArea = {
            left: JR,
            top: GR,
            width: 6400 / (RR.mapMaxX - RR.mapMinX),
            height: 6400 / (RR.mapMaxZ - RR.mapMinZ),
            shapeSeed: eR.nameKey
          }
        }
        const aR = this.quests.getNotificationSnapshot(),
          LR = "completion" === (null === aR || void 0 === aR ? void 0 : aR.phase) && !XJ(aR.kind);
        if (eR && !LR) {
          const JR = Math.hypot(...eR.position.map(((JR, GR) => JR - RR[GR]))),
            yR = Math.round(JR),
            tR = "talk" === eR.questMarkerIcon ? Math.min(1, Math.max(0, (10 - JR) / 5)) : 0,
            uR = GR.projectWorldPosToViewport(eR.position),
            ZR = uR && GR.projectWorldPosToViewport([eR.position[0], eR.position[1] - 1, eR.position[2]]);
          wR.waypoint = {
            ...GR.projectWorldPosToScreenPos(eR.position),
            text: uR,
            nearness: tR * tR * (3 - 2 * tR),
            blockHeight: uR && ZR ? ZR.y - uR.y : null,
            name: this.translateCached(eR.nameKey),
            nameKey: eR.nameKey,
            markerIcon: eR.questMarkerIcon ? cJ[eR.questMarkerIcon] : "quest",
            popupToken: (null === aR || void 0 === aR ? void 0 : aR.waypointNameKey) === eR.nameKey ? aR.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(yR)),
            hint: "search" === eR.questMarkerIcon && Math.hypot(eR.position[0] - RR[0], eR.position[2] - RR[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = wR, this.display.render(wR)
      }
      dispose() {
        this.He = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const IJ = "skyblockSkillsView";
    class mJ extends iR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          GR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR => RR,
          yR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          tR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR => RR;
        super(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = JR, this.translate = GR, this.locale = yR, this.itemName = tR, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = RR => {
          this.selected = RR, this.emit()
        }
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, this.locale = JR, this.itemName = GR, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(RR) {
        let JR = this.skillText.get(RR);
        return JR || (JR = {
          label: this.translate(`skyblockGame:${RR}`),
          description: this.translate(`skyblockGame:${RR}Description`)
        }, this.skillText.set(RR, JR)), JR
      }
      sources(RR) {
        if ("mining" === RR || "fishing" === RR) return this.buildSources(RR);
        let JR = this.sourceText.get(RR);
        return JR || (JR = this.buildSources(RR), this.sourceText.set(RR, JR)), JR
      }
      buildSources(RR) {
        const JR = this.translate;
        return "exploration" === RR ? [JR("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), JR("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === RR ? [JR("skyblockGame:logSource", {
          xp: this.number(KJ["Maple Log"])
        })] : "combat" === RR ? [JR("skyblockGame:creatureKillSource"), JR("skyblockGame:noEnvironmentalXp")] : "farming" === RR ? [JR("skyblockGame:cropSource", {
          xp: this.number(eJ["Wheat|FreshlyGrown"])
        }), JR("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), JR("skyblockGame:noYoungCropXp")] : Object.entries("mining" === RR ? rJ : aJ).map((RR => {
          let [GR, yR] = RR;
          return JR("skyblockGame:itemXpSource", {
            item: this.itemName(GR),
            xp: this.number(yR)
          })
        }))
      }
      number(RR) {
        return RR.toLocaleString(this.locale)
      }
      benefit(RR, JR) {
        const GR = tJ(RR, JR);
        return this.translate(GR.translationKey, {
          bonus: this.number(GR.percent)
        })
      }
      BK(RR) {
        if (!this.He) {
          if ("snapshot" === RR.kind) this.progress = RR.progress, this.pending.clear(), this.recent = null;
          else if ("award" === RR.kind && this.progress) {
            const {
              award: JR
            } = RR;
            this.progress = {
              ...this.progress,
              [JR.skill]: JR.after
            };
            for (const [RR, yR] of this.pending) yR.skill === JR.skill && this.pending.delete(RR);
            const GR = JR.after.level > JR.before.level;
            this.recordGain(JR.skill, JR.amount, GR ? ++this.nextLevelUpToken : null), GR && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: JR.skill,
              beforeLevel: JR.before.level,
              level: JR.after.level
            })
          } else {
            if ("rejectBlock" === RR.kind) return void this.rejectBlock(RR.position);
            if ("open" === RR.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(RR, JR, GR) {
        if (!this.progress || this.He || GR) return;
        const yR = function(RR, JR) {
          const GR = RR.split("|")[0];
          return "Air" === JR || JR === `Barkless ${RR}` ? Object.hasOwn(KJ, GR) ? {
            skill: "foraging",
            amount: KJ[GR]
          } : "Air" !== JR ? null : Object.hasOwn(rJ, RR) ? {
            skill: "mining",
            amount: rJ[RR]
          } : iJ(RR) ? {
            skill: "farming",
            amount: 10
          } : VJ(RR) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(eJ, RR) ? {
            skill: "farming",
            amount: eJ[RR]
          } : Object.hasOwn(oR, RR) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(JR, "Air");
        if (!yR) return;
        const tR = RR.join(",");
        if (this.pending.has(tR)) return;
        const uR = this.predictedProgress(yR.skill).totalXp + yR.amount;
        Number.isSafeInteger(uR) && (this.pending.set(tR, {
          ...yR,
          expires: this.now() + 2e3
        }), this.recordGain(yR.skill, 0), this.emit())
      }
      rejectBlock(RR) {
        this.pending.delete(RR.join(",")) && this.emit()
      }
      gK() {
        if (this.He) return;
        let RR = !1;
        for (const [JR, GR] of this.pending) GR.expires <= this.now() && (this.pending.delete(JR), RR = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, RR = !0), RR && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(RR, JR) {
        var GR, yR;
        let tR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const uR = (null === (GR = this.recent) || void 0 === GR ? void 0 : GR.skill) === RR && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          ZR = (null === (yR = this.recent) || void 0 === yR ? void 0 : yR.skill) === RR && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: RR,
          confirmed: uR + JR,
          expires: this.now() + 3e3,
          levelUpToken: null !== tR && void 0 !== tR ? tR : ZR
        }
      }
      pendingXp(RR) {
        let JR = 0;
        for (const GR of this.pending.values()) GR.skill === RR && (JR += GR.amount);
        return JR
      }
      predictedProgress(RR) {
        const JR = this.progress[RR],
          GR = this.pendingXp(RR);
        return GR ? ZJ(JR.totalXp + GR, RR) : JR
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var RR, JR, GR;
        const yR = this.progress ? kR.map((RR => {
            const JR = this.predictedProgress(RR);
            return {
              ...this.text(RR),
              icon: LJ[RR],
              benefit: this.benefit(RR, JR.level),
              sources: this.sources(RR),
              id: RR,
              selected: RR === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(JR.level)
              }),
              xp: null === JR.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(JR.xpIntoLevel),
                target: this.number(JR.xpForNextLevel)
              }),
              percent: null === JR.xpForNextLevel ? 100 : Math.min(100, JR.xpIntoLevel / JR.xpForNextLevel * 100)
            }
          })) : [],
          tR = yR.find((RR => {
            var JR;
            return RR.id === (null === (JR = this.recent) || void 0 === JR ? void 0 : JR.skill)
          })),
          uR = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: yR,
          detail: null !== (RR = yR.find((RR => RR.selected))) && void 0 !== RR ? RR : null,
          overallLevel: this.progress ? kR.reduce(((RR, JR) => RR + this.predictedProgress(JR).level), 0) : null,
          hud: tR && uR > 0 ? {
            skill: tR,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(uR)
            }),
            levelUpToken: null !== (JR = null === (GR = this.recent) || void 0 === GR ? void 0 : GR.levelUpToken) && void 0 !== JR ? JR : null,
            colour: UJ(tR.id)
          } : null
        }
      }
    }
    const zJ = Math.max(1600, 600, 950) + 400,
      SJ = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      jJ = "skyblockQuestsView",
      dJ = "skyblockQuestNotificationView";
    class EJ extends iR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          ZR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(RR, yR, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = JR, this.translate = GR, this.now = tR, this.locale = uR, this.publishNotification = ZR, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var RR, JR;
          this.selected = null !== (RR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.trackedQuestId) && void 0 !== RR ? RR : null, this.show()
        }, this.select = RR => {
          this.selected = RR, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const RR = this.snapshot.detail;
          !this.He && null !== RR && void 0 !== RR && RR.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(RR.id), this.emit())
        }, this.viewDialogue = () => {
          const RR = this.snapshot.detail;
          var JR;
          RR && (null === (JR = this.onViewDialogue) || void 0 === JR || JR.call(this, RR.id))
        }, this.notifications = new AJ(tR, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var RR, JR;
        return null !== (RR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.trackedQuestId) && void 0 !== RR ? RR : null
      }
      notify(RR) {
        !this.He && this.notifications.enqueue(RR) && this.emitNotification()
      }
      setNotificationsHeld(RR) {
        (this.notifications.setHeld(RR) || RR) && this.emitNotification()
      }
      gK() {
        var RR, JR;
        if (this.He) return;
        this.notifications.gK() && this.emitNotification();
        let GR = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, GR = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, GR = !0);
        const yR = YJ(this.authoritative);
        null !== yR && void 0 !== yR && null !== (RR = yR.questClock) && void 0 !== RR && RR.running && this.clockText(yR) !== (null === (JR = this.snapshot.tracked) || void 0 === JR ? void 0 : JR.clock) && (GR = !0), GR && this.emit()
      }
      setTranslator(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = RR, this.locale = JR, this.emitNotification(), this.emit()
      }
      BK(RR) {
        if (!this.He)
          if ("completion" === RR.kind) this.notify(RR.questCompletion);
          else if ("landmark" === RR.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: RR.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === RR.kind) {
          var JR, GR, yR;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: RR.npcNoteTitleKey,
            textKey: RR.npcNoteTextKey,
            params: null !== (JR = RR.npcNoteParams) && void 0 !== JR ? JR : {},
            nameKeys: null !== (GR = RR.npcNoteNameKeys) && void 0 !== GR ? GR : {},
            iconItem: null !== (yR = RR.npcNoteIconItem) && void 0 !== yR ? yR : null
          })
        } else if ("open" === RR.kind) this.show();
        else if ("guidance" === RR.kind) this.waypoint = RR.waypoint, this.compassTarget = RR.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === RR.kind) {
          this.authoritative = RR.snapshot, this.notifications.gK() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const JR = this.trackedStepPulse;
          this.updateTrackedStepPulse(RR.snapshot), this.emit(), this.trackedStepPulse > JR && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.He || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var RR;
        return null !== (RR = this.translateWithIcons) && void 0 !== RR ? RR : this.translate
      }
      clockText(RR) {
        const JR = RR.questClock;
        if (!JR) return null;
        const GR = JR.elapsedMs + (JR.running ? this.now() - this.receivedAt : 0);
        return void 0 === JR.countdownFromMs ? OR(GR, !1) : OR(1e3 * Math.ceil(Math.max(0, JR.countdownFromMs - GR) / 1e3), !1)
      }
      updateTrackedStepPulse(RR) {
        var JR, GR, yR;
        const tR = YJ(RR);
        if (!tR) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const uR = RR => tR.subquests.filter((JR => RR(JR.status))).map((RR => RR.id)),
          ZR = uR((RR => "completed" === RR || "skipped" === RR)),
          qR = uR((RR => "locked" !== RR)),
          iR = (null === (JR = this.trackedSteps) || void 0 === JR ? void 0 : JR.questId) === tR.id && tR.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (iR) {
          const RR = ZR.filter((RR => !iR.finished.has(RR))),
            JR = uR((RR => "active" === RR || "ready" === RR)).filter((RR => !iR.unlocked.has(RR)));
          RR.length > 0 && this.trackedStepPulse++, (RR.length > 0 || JR.length > 0) && (this.trackedChange = {
            finished: new Set(RR),
            unlocked: new Set(JR),
            expiresAt: this.now() + zJ
          })
        } else {
          var fR;
          this.trackedStepPulse = (null === (fR = this.trackedSteps) || void 0 === fR ? void 0 : fR.questId) === tR.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: tR.id,
          progress: tR.progress,
          finished: new Set([...null !== (GR = null === iR || void 0 === iR ? void 0 : iR.finished) && void 0 !== GR ? GR : [], ...ZR]),
          unlocked: new Set([...null !== (yR = null === iR || void 0 === iR ? void 0 : iR.unlocked) && void 0 !== yR ? yR : [], ...qR])
        }
      }
      entry(RR, JR) {
        var GR, yR;
        const tR = RR.id === (null === (GR = this.authoritative) || void 0 === GR ? void 0 : GR.trackedQuestId),
          uR = this.now() < this.trackAvailableAt,
          ZR = this.questTextTranslator(),
          qR = RR.subquests.map((JR => {
            var GR, yR, uR, qR, iR, fR;
            const VR = null !== (GR = JR.handInNpcName) && void 0 !== GR ? GR : RR.giverName,
              KR = this.translate("skyblockGame:progress", {
                current: JR.progress.toLocaleString(this.locale),
                target: JR.target.toLocaleString(this.locale)
              }),
              wR = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: VR ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [JR.status],
              rR = "active" === JR.status || "ready" === JR.status;
            return {
              id: JR.id,
              name: WJ(ZR, JR.nameKey, JR.nameParams),
              description: WJ(ZR, JR.descriptionKey, JR.descriptionParams),
              progress: KR,
              status: JR.status,
              statusLabel: wR ? this.translate(wR, {
                npc: VR
              }) : KR,
              iconItem: rR && null !== (yR = JR.questIconItem) && void 0 !== yR ? yR : null,
              barPercent: "active" === JR.status && JR.showsProgressBar ? Math.min(100, 100 * JR.progress / JR.target) : null,
              justFinished: tR && null !== (uR = null === (qR = this.trackedChange) || void 0 === qR ? void 0 : qR.finished.has(JR.id)) && void 0 !== uR && uR,
              justUnlocked: tR && null !== (iR = null === (fR = this.trackedChange) || void 0 === fR ? void 0 : fR.unlocked.has(JR.id)) && void 0 !== iR && iR
            }
          }));
        return {
          id: RR.id,
          name: WJ(ZR, RR.nameKey, RR.nameParams),
          description: WJ(ZR, RR.descriptionKey, RR.descriptionParams),
          progress: JR ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: RR.progress.toLocaleString(this.locale),
            target: RR.target.toLocaleString(this.locale)
          }),
          completed: JR,
          tracked: tR,
          selected: RR.id === this.selected,
          canTrack: !JR && !tR && !uR,
          trackLabel: this.translate(tR ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : uR ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== RR.id,
          subquests: qR,
          focusStep: null !== (yR = qR.find((RR => null !== RR.barPercent))) && void 0 !== yR ? yR : null,
          clock: this.clockText(RR)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR;
        const VR = [...null !== (RR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.active) && void 0 !== RR ? RR : [], ...null !== (GR = null === (yR = this.authoritative) || void 0 === yR ? void 0 : yR.completed) && void 0 !== GR ? GR : []];
        var KR, wR, rR, eR;
        VR.some((RR => RR.id === this.selected)) || (this.selected = null !== (KR = null !== (wR = null === (rR = this.authoritative) || void 0 === rR ? void 0 : rR.trackedQuestId) && void 0 !== wR ? wR : null === (eR = VR[0]) || void 0 === eR ? void 0 : eR.id) && void 0 !== KR ? KR : null);
        const aR = null !== (tR = null === (uR = this.authoritative) || void 0 === uR ? void 0 : uR.active.map((RR => this.entry(RR, !1)))) && void 0 !== tR ? tR : [];
        aR.sort(((RR, JR) => Number(JR.tracked) - Number(RR.tracked)));
        const LR = null !== (ZR = null === (qR = this.authoritative) || void 0 === qR ? void 0 : qR.completed.map((RR => this.entry(RR, !0)))) && void 0 !== ZR ? ZR : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: aR,
          completed: LR,
          completedExpanded: this.completedExpanded,
          detail: null !== (iR = [...aR, ...LR].find((RR => RR.selected))) && void 0 !== iR ? iR : null,
          tracked: null !== (fR = aR.find((RR => RR.tracked))) && void 0 !== fR ? fR : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function YJ(RR) {
      var JR;
      return null !== (JR = null === RR || void 0 === RR ? void 0 : RR.active.find((JR => JR.id === RR.trackedQuestId))) && void 0 !== JR ? JR : null
    }
    const kJ = "skyblockDungeonsView";
    class QJ extends iR {
      constructor(RR, JR) {
        let GR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          yR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = JR, this.locale = GR, this.requestEnter = yR, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = RR => {
          this.selected = RR, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const RR = this.pickerEntry(),
            JR = null === RR || void 0 === RR ? void 0 : RR.difficulties[this.pageIndex];
          void 0 !== JR && null !== JR.unlockedBoss && (this.close(), this.requestEnter(RR.id, JR.difficulty))
        }
      }
      setTranslator(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = RR, this.locale = JR, this.emit()
      }
      BK(RR) {
        var JR, GR;
        if (!this.He) return "open" === RR.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== RR.kind ? "snapshot" === RR.kind && (this.authoritative = RR.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (JR = null === (GR = this.pickerEntry()) || void 0 === GR ? void 0 : GR.difficulties.length) && void 0 !== JR ? JR : 1) - 1)), null === RR.snapshot && this.open ? this.close() : this.emit()) : this.choose(RR.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(RR) {
        var JR;
        const GR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.dungeons.find((JR => JR.id === RR));
        void 0 !== GR ? this.open && this.pickerDungeonId === RR || (this.pickerDungeonId = RR, this.pageIndex = Math.max(0, GR.difficulties.findLastIndex((RR => null !== RR.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${RR}`)
      }
      turnTo(RR) {
        var JR, GR;
        const yR = null !== (JR = null === (GR = this.pickerEntry()) || void 0 === GR ? void 0 : GR.difficulties.length) && void 0 !== JR ? JR : 0;
        RR < 0 || RR >= yR || RR === this.pageIndex || (this.pageIndex = RR, this.emit())
      }
      pickerEntry() {
        var RR, JR;
        return null !== (RR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.dungeons.find((RR => RR.id === this.pickerDungeonId))) && void 0 !== RR ? RR : null
      }
      difficulty(RR) {
        const JR = RR.completions > 0,
          GR = null === RR.bestMs ? null : OR(RR.bestMs);
        return {
          difficulty: RR.difficulty,
          label: this.translate(bR[RR.difficulty]),
          colour: vR[RR.difficulty],
          beaten: JR,
          bestTime: GR,
          completions: RR.completions,
          summary: JR ? [null === GR ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: GR
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: RR.completions.toLocaleString(this.locale)
          })].filter((RR => null !== RR)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(RR) {
        const JR = RR.difficulties.map((RR => this.difficulty(RR))),
          GR = JR.filter((RR => RR.beaten)).length;
        return {
          id: RR.id,
          name: this.translate(RR.nameKey),
          selected: RR.id === this.selected,
          beatenSummary: `${GR} / ${JR.length}`,
          difficulties: JR
        }
      }
      picker() {
        const RR = this.pickerEntry();
        if (null === RR || 0 === RR.difficulties.length) return null;
        const JR = RR.difficulties.map(((JR, GR) => {
          var yR, tR, uR, ZR;
          const qR = JR.unlockedBoss,
            iR = null === qR ? this.lockedHint(RR, GR) : null;
          return {
            ...this.difficulty(JR),
            unlocked: null !== qR,
            bossName: null === qR ? null : this.translate(qR.bossNameKey),
            bossMobType: null !== (yR = null === qR || void 0 === qR ? void 0 : qR.bossMobType) && void 0 !== yR ? yR : null,
            bossMobVariation: null !== (tR = null === qR || void 0 === qR ? void 0 : qR.bossMobVariation) && void 0 !== tR ? tR : null,
            lockedHint: null !== (uR = null === iR || void 0 === iR ? void 0 : iR.text) && void 0 !== uR ? uR : null,
            lockedHintHighlight: null !== (ZR = null === iR || void 0 === iR ? void 0 : iR.highlight) && void 0 !== ZR ? ZR : null,
            current: GR === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(RR.nameKey),
          pages: JR,
          page: JR[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < JR.length - 1
        }
      }
      lockedHint(RR, JR) {
        var GR, yR, tR;
        if (0 === JR && "number" === typeof RR.combatLevelLock) {
          const JR = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: RR.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: JR,
            colour: UJ("combat"),
            icon: LJ.combat
          })
        }
        const uR = null !== (GR = null === (yR = this.authoritative) || void 0 === yR ? void 0 : yR.dungeons) && void 0 !== GR ? GR : [],
          ZR = JR > 0 ? RR : null !== (tR = uR[uR.indexOf(RR) - 1]) && void 0 !== tR ? tR : null,
          qR = JR > 0 ? RR.difficulties[JR - 1] : null === ZR || void 0 === ZR ? void 0 : ZR.difficulties[0];
        if (null === ZR || void 0 === qR) return null;
        const iR = this.translate(ZR.nameKey);
        if (null === qR.unlockedBoss) return ZR === RR ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, qR.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: iR
        }, qR.difficulty);
        const fR = this.translate(qR.unlockedBoss.bossNameKey);
        return ZR === RR ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: fR
        }, qR.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: fR,
            dungeon: iR
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(RR, JR, GR) {
        return this.hintHighlighting(RR, JR, "difficulty", {
          name: this.translate(bR[GR]),
          colour: vR[GR],
          icon: null
        })
      }
      hintHighlighting(RR, JR, GR, yR) {
        let {
          name: tR,
          colour: uR,
          icon: ZR
        } = yR;
        const qR = this.translate(RR, {
          ...JR,
          [GR]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(RR, {
            ...JR,
            [GR]: tR
          }),
          highlight: 2 === qR.length ? {
            before: qR[0],
            name: tR,
            after: qR[1],
            colour: uR,
            icon: ZR
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var RR, JR, GR;
        const yR = null !== (RR = null === (JR = this.authoritative) || void 0 === JR ? void 0 : JR.dungeons) && void 0 !== RR ? RR : [];
        var tR, uR;
        yR.some((RR => RR.id === this.selected)) || (this.selected = null !== (tR = null === (uR = yR[0]) || void 0 === uR ? void 0 : uR.id) && void 0 !== tR ? tR : null);
        const ZR = yR.map((RR => this.entry(RR)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: ZR,
          detail: null !== (GR = ZR.find((RR => RR.selected))) && void 0 !== GR ? GR : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const FJ = ["mining", "farming", "foraging", "fishing", "combat"],
      TJ = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      sJ = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function hJ() {
      for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
      return JR.map(((RR, JR) => ({
        amount: RR,
        coins: TJ[JR],
        xp: sJ[JR]
      })))
    }
    const RG = hJ(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      JG = hJ(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      GG = hJ(50, 100, 250, 500, 1e3, 2500, 5e3),
      yG = hJ(25, 50, 100, 250, 500, 1e3),
      tG = hJ(10, 25, 50, 100, 250, 500, 1e3),
      uG = hJ(1, 5, 10, 25, 50);

    function ZG(RR, JR) {
      return {
        id: RR,
        category: "fishing",
        item: JR,
        drops: [JR],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tG
      }
    }
    const qG = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: JG
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
        tiers: yG
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: yG
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: JG
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: RG
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: RG
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: RG
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
        tiers: JG
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: JG
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: JG
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
      }, ZG("wheatfish", "Wheatfish"), ZG("darter", "Darter"), ZG("sunset_minnow", "Sunset Minnow"), ZG("root_flounder", "Root Flounder"), ZG("greenfin_loach", "Greenfin Loach"), ZG("red_strongfish", "Red Strongfish"), ZG("green_strongfish", "Green Strongfish"), ZG("boomerang_fish", "Boomerang Fish"), ZG("seahorse", "Seahorse"), ZG("spined_stickleback", "Spined Stickleback"), ZG("moon_strongfish", "Moon Strongfish"), ZG("boulder_bass", "Boulder Bass"), ZG("grass_snapper", "Grass Snapper"), ZG("crystal_wheatfish", "Crystalized Wheatfish", uG), ZG("moonstone_pupfish", "Moonstone Pupfish", uG), ZG("reedglass_minnow", "Reedglass Minnow"), ZG("mangrove_herring", "Mangrove Herring"), ZG("mudline_perch", "Mudline Perch"), ZG("coastal_mullet", "Coastal Mullet"), ZG("reef_sardine", "Reef Sardine"), ZG("root_perch", "Root Perch"), ZG("driftwood_catfish", "Driftwood Catfish"), ZG("aether_minnow", "Aether Minnow"), ZG("needlefish", "Tri-Pointed Needlefish"), ZG("threadfin_bream", "Threadfin Bream"), ZG("mudbelly_tilapia", "Mudbelly Tilapia"), ZG("rotslab_eel", "Rotslab Eel"), ZG("polarflash_electron", "Polarflash Electron"), ZG("mireback_carp", "Mireback Carp"), ZG("blackwater_bream", "Blackwater Bream"), ZG("stone_grouper", "Stone Grouper"), ZG("shadeback_ray", "Shadeback Ray"), ZG("glacial_silverfish", "Glacial Silverfish"), ZG("hatchetfish", "Hatchetfish"), ZG("moonlit_boomerang", "Moonlit Boomerang Fish"), ZG("murkborne_ray", "Murkborne Ray"), ZG("bamboo_catfish", "Bamboo Catfish"), ZG("mossback_arapaima", "Mossback Arapaima"), ZG("murk_stingray", "Murk Stingray"), ZG("channel_sawfish", "Channel Sawfish"), ZG("boned_sturgeon", "Boned Sturgeon"), ZG("oarfish", "Oarfish"), ZG("snakehead", "Snakehead", uG), ZG("eldertide_leviathan", "Eldertide Leviathan", uG), ZG("pithead", "Pithead"), ZG("electric_eel", "Electric Eel"), ZG("shadow_darter", "Shadow Darter"), ZG("abyss_carp", "Abyss Carp"), ZG("nomai_moray", "Nomai Moray"), ZG("silver_dragonfish", "Silver Dragonfish"), ZG("giant_moray", "Giant Moray"), ZG("coelacanth", "Coelacanth", uG), ZG("frost_herring", "Frost Herring"), ZG("permafrost_halibut", "Permafrost Halibut"), ZG("glacial_lanternfish", "Glacial Lanternfish"), ZG("frozen_grenadier", "Frozen Grenadier"), ZG("blackfin_icefish", "Blackfin Icefish"), ZG("moonfish", "Moonfish"), ZG("alpha_strongfish", "Alpha Moon Strongfish"), ZG("deep_lanternfish", "Deepwater Lanternfish", uG), ZG("pearlescent_moonfish", "Pearlescent Moonfish", uG), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: JG
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: yG
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: yG
      }],
      iG = (new Map(qG.map((RR => [RR.id, RR]))), new Map),
      fG = new Map;
    for (const bq of qG) {
      for (const [RR, JR] of Object.entries(null !== (VG = bq.blocks) && void 0 !== VG ? VG : {})) {
        var VG;
        iG.set(RR, {
          collection: bq,
          amount: JR
        })
      }
      for (const RR of null !== (KG = bq.drops) && void 0 !== KG ? KG : []) {
        var KG;
        fG.set(RR, bq)
      }
    }

    function wG(RR, JR) {
      let GR = 0;
      for (; GR < RR.tiers.length && JR >= RR.tiers[GR].amount;) GR++;
      return GR
    }
    const rG = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function eG(RR) {
      return rG[RR - 1]
    }
    const aG = "skyblockCollectionsView";
    class LG extends iR {
      constructor(RR, JR) {
        let GR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          yR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR => RR;
        super(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = JR, this.locale = GR, this.itemName = yR, this.counts = null, this.category = "mining", this.selected = qG[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = RR => {
          this.category = RR, this.selected = this.inCategory(RR)[0].id, this.emit()
        }, this.select = RR => {
          this.selected = RR, this.emit()
        }
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, this.locale = JR, this.itemName = GR, this.emit()
      }
      BK(RR) {
        if (!this.He)
          if ("collOpen" !== RR.kind) {
            (RR.collFull || null === this.counts) && (this.counts = new Map);
            for (const [JR, GR] of RR.collCounts) this.counts.set(JR, GR);
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
        var RR;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const JR = this.inCategory(this.category).map((RR => this.collectionView(RR))),
          GR = qG.reduce(((RR, JR) => RR + this.tierOf(JR)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: FJ.map((RR => this.categoryView(RR))),
          collections: JR,
          detail: null !== (RR = JR.find((RR => RR.selected))) && void 0 !== RR ? RR : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(GR)
          })
        }
      }
      categoryView(RR) {
        const JR = this.inCategory(RR),
          GR = JR.reduce(((RR, JR) => RR + this.tierOf(JR)), 0),
          yR = JR.reduce(((RR, JR) => RR + JR.tiers.length), 0);
        return {
          id: RR,
          label: this.translate(`skyblockGame:${RR}`),
          icon: LJ[RR],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(GR),
            target: this.number(yR)
          }),
          selected: RR === this.category
        }
      }
      collectionView(RR) {
        var JR, GR;
        const yR = null !== (JR = this.counts.get(RR.id)) && void 0 !== JR ? JR : 0,
          tR = wG(RR, yR),
          uR = null !== (GR = RR.tiers[tR]) && void 0 !== GR ? GR : null,
          ZR = 0 === tR ? 0 : RR.tiers[tR - 1].amount;
        return {
          id: RR.id,
          name: this.itemName(RR.item),
          icon: RR.item,
          selected: RR.id === this.selected,
          locked: 0 === yR,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(yR)
          }),
          tier: 0 === tR ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(tR),
          percent: null === uR ? 100 : Math.min(100, (yR - ZR) / (uR.amount - ZR) * 100),
          progress: null === uR ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(yR),
            target: this.number(uR.amount)
          }),
          nextReward: null === uR ? null : this.reward(RR, uR.coins, uR.xp)
        }
      }
      reward(RR, JR, GR) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(JR),
          xp: this.number(GR),
          skill: this.translate(`skyblockGame:${RR.category}`)
        })
      }
      tierLabel(RR) {
        return this.translate("skyblockGame:collectionTier", {
          tier: eG(RR)
        })
      }
      tierOf(RR) {
        var JR;
        return wG(RR, null !== (JR = this.counts.get(RR.id)) && void 0 !== JR ? JR : 0)
      }
      inCategory(RR) {
        return qG.filter((JR => JR.category === RR))
      }
      number(RR) {
        return RR.toLocaleString(this.locale)
      }
    }
    const nG = "skyblockPortalTransitView",
      UG = "skyblockPortalArrival";
    class WG {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.JK = RR, this.storage = JR, this.now = GR, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      BK(RR) {
        const JR = {
          zoneNameKey: RR.transitZoneNameKey,
          variation: RR.transitZoneVariation,
          colour: RR.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(UG, JR), this.show("departure", JR.zoneNameKey, JR.colour, RR.transitDurationMs, RR.transitDurationMs + 1500, (() => {
          this.storage.removeItem(UG)
        }))
      }
      resumeArrival(RR) {
        const JR = this.storage.getItem(UG);
        this.storage.removeItem(UG), null === JR || JR.variation !== RR || this.now() - JR.departedAt > 3e4 || this.show("arrival", JR.zoneNameKey, JR.colour, 3200, 2e4)
      }
      finishArrival(RR) {
        var JR;
        "arrival" === (null === (JR = this.view) || void 0 === JR ? void 0 : JR.phase) && this.view.token === RR && (this.clearTimer(), this.view = null, this.JK(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(RR, JR, GR, yR, tR, uR) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: RR,
          zoneNameKey: JR,
          colour: GR,
          durationMs: yR
        }, this.JK(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.JK(null), null === uR || void 0 === uR || uR()
        }), tR)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const AG = "skyblockDailyRewardView",
      CG = "skyblockDailyRewardCoin";
    class XG {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.JK = RR, this.isBusy = JR, this.holdQuestPopups = GR, this.onHeldCoinsChanged = yR, this.onCoinLanded = tR, this.onStarted = uR, this.onFinished = ZR, this.onItemLanded = qR, this.now = iR, this.Qq = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var RR, JR;
        return null !== (RR = null === (JR = this.playing) || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null
      }
      getHeldCoins() {
        var RR, JR;
        let GR = 0;
        for (const yR of this.Qq) GR += yR.coins;
        return GR - (null !== (RR = null === (JR = this.playing) || void 0 === JR ? void 0 : JR.released) && void 0 !== RR ? RR : 0)
      }
      BK(RR) {
        "dailyRewardClaimed" !== RR.kind ? (this.queue.push(RR), this.gK()) : this.Qq.push({
          coins: RR.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      gK() {
        const RR = this.now();
        if (null === this.playing) return this.releaseUnshown(RR), void this.startNext(RR);
        const JR = this.playing,
          GR = RR - JR.startedAt,
          yR = JR.view.flyingCoins,
          tR = function(RR, JR) {
            let GR = 0;
            for (; GR < JR && BG(GR, JR) <= RR;) GR++;
            return GR
          }(GR, yR);
        if (tR !== JR.landed) {
          for (let RR = tR - JR.landed > 2 ? tR - 1 : JR.landed; RR < tR; RR++) this.onCoinLanded(RR, yR);
          JR.landed = tR, JR.released = Math.round(JR.view.coins * tR / yR), this.onHeldCoinsChanged()
        }
        for (; JR.itemsLanded < JR.view.items.length && 2e3 + 160 * JR.itemsLanded + 630 <= GR;) this.onItemLanded(JR.itemsLanded), JR.itemsLanded++;
        GR >= JR.view.durationMs && (this.finish(), this.startNext(RR))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Qq = [], this.JK(null)
      }
      startNext(RR) {
        if (0 === this.queue.length || this.isBusy()) return;
        const JR = this.queue.shift();
        this.token++;
        const GR = {
          token: this.token,
          day: JR.dailyRewardDay,
          coins: JR.dailyRewardCoins,
          items: JR.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: JR.dailyRewardDay === lR ? 24 : 14
        };
        this.playing = {
          view: GR,
          startedAt: RR,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.JK(GR), this.onStarted(GR)
      }
      finish() {
        this.Qq.shift(), this.playing = null, this.holdQuestPopups(!1), this.JK(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(RR) {
        if (this.queue.length > 0 || 0 === this.Qq.length) return;
        const JR = this.Qq.length;
        this.Qq = this.Qq.filter((JR => RR - JR.receivedAt < 6e4)), this.Qq.length !== JR && this.onHeldCoinsChanged()
      }
    }

    function MG(RR, JR) {
      return 450 + 715 * RR / (JR - 1)
    }

    function BG(RR, JR) {
      return MG(RR, JR) + 650
    }
    const lG = "skyblockMailboxView";
    class pG {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.JK = RR, this.isBusy = JR, this.onStarted = GR, this.now = yR, this.waiting = [], this.playing = null, this.token = 0, this.itemName = RR => RR
      }
      getSnapshot() {
        var RR, JR;
        return null !== (RR = null === (JR = this.playing) || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null
      }
      setItemName(RR) {
        this.itemName = RR
      }
      BK(RR) {
        this.waiting.push(...RR.mailLetters), this.gK()
      }
      gK() {
        const RR = this.now();
        null !== this.playing && RR - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.JK(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(RR)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.JK(null)
      }
      start(RR) {
        const JR = this.waiting.slice(0, 3);
        this.token++;
        const GR = {
          token: this.token,
          letters: JR.map((RR => this.toView(RR))),
          more: this.waiting.length - JR.length,
          durationMs: 4500 + 700 * JR.length
        };
        this.waiting = [], this.playing = {
          view: GR,
          startedAt: RR
        }, this.JK(GR), this.onStarted(GR)
      }
      toView(RR) {
        return {
          coins: RR.mailCoins,
          items: RR.mailItems.map((RR => {
            var JR;
            return {
              itemName: RR.mailItemName,
              amount: RR.mailItemAmount,
              label: null !== (JR = RR.mailItemLabel) && void 0 !== JR ? JR : this.itemName(RR.mailItemName)
            }
          })),
          reasonKey: RR.mailReasonKey,
          reasonParams: RR.mailReasonParams
        }
      }
    }
    const gG = "skyblockQuestGraphView",
      bG = "skyblockDevQuestJump";

    function vG(RR) {
      if (0 === RR.length) return "";
      const JR = [`M ${RR[0].x} ${RR[0].y}`];
      for (let yR = 1; yR < RR.length - 1; yR++) {
        const GR = RR[yR + 1];
        JR.push(`Q ${RR[yR].x} ${RR[yR].y} ${(RR[yR].x+GR.x)/2} ${(RR[yR].y+GR.y)/2}`)
      }
      const GR = RR[RR.length - 1];
      return JR.push(`L ${GR.x} ${GR.y}`), JR.join(" ")
    }

    function OG(RR, JR) {
      return RR < JR ? `${RR}|${JR}` : `${JR}|${RR}`
    }
    class xG extends iR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(RR, GR, yR), this.translate = JR, this.requestJump = tR, this.requestArrive = uR, this.storage = ZR, this.now = qR, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = RR => {
          RR !== this.hoveredId && (this.hoveredId = RR, this.emit())
        }, this.jump = RR => {
          this.close(), this.requestJump(RR)
        }
      }
      BK(RR) {
        if (!this.He)
          if ("graph" !== RR.kind) {
            if ("jumping" === RR.kind) {
              const JR = {
                questId: RR.graphQuestId,
                variation: RR.graphVariation,
                completes: RR.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(bG, JR)
            }
          } else {
            const JR = ++this.graphCount;
            GR.e(141).then((() => GR(7550))).then((GR => {
              let {
                default: yR
              } = GR;
              this.He || JR !== this.graphCount || (this.layout = function(RR, JR, GR) {
                var yR, tR;
                const uR = new RR.graphlib.Graph;
                uR.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), uR.setDefaultEdgeLabel((() => ({})));
                const ZR = new Set;
                for (const VR of JR) ZR.add(VR.graphQuestId), uR.setNode(VR.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const qR = GR.filter((RR => ZR.has(RR.graphFromId) && ZR.has(RR.graphToId) && RR.graphFromId !== RR.graphToId)),
                  iR = new Map;
                for (const VR of [...qR].sort(((RR, JR) => Number("awaits" === RR.graphEdgeKind) - Number("awaits" === JR.graphEdgeKind)))) {
                  const RR = OG(VR.graphFromId, VR.graphToId);
                  iR.has(RR) || (iR.set(RR, VR), uR.setEdge(VR.graphFromId, VR.graphToId))
                }
                RR.layout(uR);
                const fR = uR.graph();
                return {
                  width: Math.ceil(null !== (yR = fR.width) && void 0 !== yR ? yR : 0),
                  height: Math.ceil(null !== (tR = fR.height) && void 0 !== tR ? tR : 0),
                  nodes: JR.map((RR => {
                    var JR, GR;
                    const yR = uR.node(RR.graphQuestId);
                    return {
                      node: RR,
                      left: (null !== (JR = yR.x) && void 0 !== JR ? JR : 0) - 95,
                      top: (null !== (GR = yR.y) && void 0 !== GR ? GR : 0) - 26
                    }
                  })),
                  edges: qR.map((RR => {
                    var JR;
                    const GR = iR.get(OG(RR.graphFromId, RR.graphToId)),
                      yR = null !== (JR = uR.edge(GR.graphFromId, GR.graphToId).points) && void 0 !== JR ? JR : [];
                    return {
                      edge: RR,
                      key: `${RR.graphFromId}|${RR.graphToId}|${RR.graphEdgeKind}`,
                      path: vG(GR.graphFromId === RR.graphFromId ? yR : [...yR].reverse())
                    }
                  })),
                  plans: new Map(JR.map((RR => [RR.graphQuestId, new Set([RR.graphQuestId, ...RR.graphPlanIds])])))
                }
              }(yR, RR.graphNodes, RR.graphEdges), this.show())
            })).catch((RR => {
              console.error("The quest graph could not be laid out", RR)
            }))
          }
      }
      resumeJump(RR) {
        const JR = this.storage.getItem(bG);
        this.storage.removeItem(bG), null === JR || JR.variation !== RR || this.now() - JR.departedAt > 6e4 || this.requestArrive(JR.questId, JR.completes)
      }
      setTranslator(RR) {
        this.translate = RR, this.emit()
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
        var RR, JR;
        return null !== (RR = null === this.hoveredId || null === (JR = this.layout) || void 0 === JR ? void 0 : JR.plans.get(this.hoveredId)) && void 0 !== RR ? RR : new Set
      }
      buildSnapshot() {
        const RR = this.layout;
        if (null === RR) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const JR = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: RR.width,
          height: RR.height,
          nodes: RR.nodes.map((RR => {
            let {
              node: GR,
              left: yR,
              top: tR
            } = RR;
            return {
              id: GR.graphQuestId,
              name: this.translate(GR.graphNameKey),
              detail: null === GR.graphGiverName ? GR.graphZoneId : `${GR.graphGiverName} \xb7 ${GR.graphZoneId}`,
              state: GR.graphState,
              left: yR,
              top: tR,
              inPlan: JR.has(GR.graphQuestId),
              hovered: GR.graphQuestId === this.hoveredId
            }
          })),
          edges: RR.edges.map((RR => {
            let {
              edge: GR,
              key: yR,
              path: tR
            } = RR;
            return {
              key: yR,
              kind: GR.graphEdgeKind,
              path: tR,
              inPlan: JR.has(GR.graphFromId) && JR.has(GR.graphToId)
            }
          })),
          planning: JR.size > 0
        }
      }
    }
    var NG = GR(38172);
    const DG = 250,
      HG = 2150,
      oG = -2.8,
      cG = 2.2,
      PG = -27,
      IG = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      mG = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      zG = Math.round(50 + 1e3 * (mG.delay + mG.period / 2)),
      SG = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      jG = Array.from({
        length: 26
      }, ((RR, JR) => {
        const GR = 2.39996 * JR,
          yR = .5 + .618034 * JR % 1 * .23,
          tR = JR % 3 !== 2;
        return {
          rune: tR ? SG[7 * JR % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(GR)*yR).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(GR)*yR).toFixed(3)})`,
            "--spin": 40 * (JR % 5 - 2) + "deg",
            "--size": (tR ? 1 + JR % 4 * .2 : .3 + JR % 2 * .15) + "rem",
            "--duration": `${(1.8+7*JR%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*JR%3).toFixed(2)}s`
          }
        }
      }));

    function dG(RR, JR) {
      return Array.from({
        length: 30 + 3 * RR + (JR ? 10 : 0)
      }, ((RR, JR) => {
        const GR = JR < 4,
          yR = GR ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          tR = GR ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          uR = GR ? 2.2 : .6 + Math.random(),
          ZR = GR ? .3 : Math.random() < .5 ? .16 : .24,
          qR = GR ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": yR,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${tR.toFixed(2)}rem`,
          "--length": `${uR.toFixed(2)}rem`,
          "--width": `${ZR}rem`,
          "--duration": `${Math.round(qR)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function EG(RR) {
      let {
        zeta: JR,
        period: GR
      } = RR;
      const yR = 2 * Math.PI / GR;
      return {
        w: yR,
        decay: JR * yR / Math.sqrt(1 - JR * JR)
      }
    }
    let YG = !1;

    function kG() {
      if (YG) return;
      YG = !0;
      const RR = document.createElement("style");
      RR.textContent = function() {
        const RR = EG(IG),
          JR = EG(mG),
          GR = JR => Math.exp(-RR.decay * JR) * Math.sin(RR.w * JR),
          yR = GR(Math.atan(RR.w / RR.decay) / RR.w),
          tR = .25,
          uR = 2.15,
          ZR = Math.round(215),
          qR = [];
        for (let iR = 0; iR <= ZR; iR++) {
          const RR = iR / ZR * uR;
          let fR = Math.sin(Math.min(RR, tR) / tR * Math.PI / 2) ** 2,
            VR = 0,
            KR = 1,
            wR = 1 - .2 * fR,
            rR = 1;
          if (RR >= tR) {
            const ZR = RR - tR,
              qR = Math.max(0, ZR - .05);
            fR = Math.exp(-qR / .05), VR = GR(qR + IG.lead * (1 - Math.exp(-qR / IG.rush))) / yR;
            const iR = qR - mG.delay,
              eR = iR <= 0 ? 0 : 1 - Math.exp(-JR.decay * iR) * (Math.cos(JR.w * iR) + JR.decay / JR.w * Math.sin(JR.w * iR)),
              aR = Math.max(0, (RR - 1.77) / (uR - 1.77));
            KR = (1 + (mG.to - 1) * eR) * (1 + .08 * aR), wR = 1.1 + 1.5 * Math.exp(-ZR / .07) + .3 * Math.exp(-(((1e3 * ZR - zG) / 100) ** 2)) + .8 * aR, rR = 1 - aR ** 1.5
          }
          const eR = .15 * fR + oG * VR,
            aR = -.1 * fR + cG * VR,
            LR = 3 * fR + PG * VR;
          qR.push(`${(iR/ZR*100).toFixed(3)}% { opacity: ${rR.toFixed(3)}; transform: translate(${eR.toFixed(3)}rem, ${aR.toFixed(3)}rem) rotate(${LR.toFixed(2)}deg) scale(${KR.toFixed(3)}); filter: brightness(${wR.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${qR.join(" ")} }`
      }(), document.head.append(RR)
    }
    const QG = "skyblockForgeView",
      FG = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class TG extends iR {
      constructor(RR, JR, GR, yR, tR) {
        super(RR, GR, yR), this.translate = JR, this.requestForge = tR, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (RR, JR) => {
          var GR, yR;
          null !== this.forging || (null !== (GR = this.owned[(0, NG.p)(JR, RR)]) && void 0 !== GR ? GR : 0) <= 0 || (this.selected[RR] = this.selected[RR] === JR ? null : JR, this.status = null, null === (yR = this.onPartSelected) || void 0 === yR || yR.call(this), this.emit())
        }, this.forge = RR => {
          var JR, GR;
          const yR = this.selectedParts();
          if (null === yR || this.isPending() || !this.open) return;
          const tR = (0, NG.m)(yR);
          if (null === tR || tR.coalCost > this.coal) return;
          const uR = this.preview(tR),
            ZR = null !== (JR = null === (GR = this.onForgeStarted) || void 0 === GR ? void 0 : GR.call(this, uR.tier, uR.named, RR)) && void 0 !== JR ? JR : () => {};
          if (this.dropArrival(), RR) {
            const RR = {
              id: ++this.forgeId,
              preview: uR,
              timers: [],
              stopSounds: ZR,
              landed: !1,
              reply: null
            };
            RR.timers.push(setTimeout((() => {
              RR.landed = !0, null !== RR.reply && (this.apply(RR.reply), RR.reply = null, this.emit())
            }), DG), setTimeout((() => {
              this.finishForge(RR)
            }), HG)), this.forging = RR
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(yR)
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        var JR;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === RR.forgeMessageKind) return this.dropForge(), this.apply(RR), this.status = null, this.show(), void(null === (JR = this.onOpened) || void 0 === JR || JR.call(this));
        const GR = this.forging;
        if (null !== GR && null !== RR.forgeRefusalKey) this.dropForge();
        else if (null !== GR && !GR.landed) return void(GR.reply = RR);
        this.apply(RR), this.emit()
      }
      apply(RR) {
        if (this.owned = RR.forgeOwnedParts, this.coal = RR.forgeCoalOwned, this.keepSelectionOwned("open" === RR.forgeMessageKind), null !== RR.forgeForgedSwordId) {
          var JR;
          const GR = (0, NG.m)(RR.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (JR = null === GR || void 0 === GR ? void 0 : GR.displayName) && void 0 !== JR ? JR : ""
            }
          }
        } else null !== RR.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: RR.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(RR) {
        this.translate = RR, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(RR) {
        var JR;
        this.forging = null;
        const GR = this.selectedParts(),
          yR = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: RR.id,
          sameSword: null !== GR && (null === (JR = (0, NG.m)(GR)) || void 0 === JR ? void 0 : JR.displayName) === RR.preview.name,
          timer: yR
        }, this.emit()
      }
      dropForge() {
        const RR = this.forging;
        if (null !== RR) {
          this.forging = null;
          for (const JR of RR.timers) clearTimeout(JR);
          RR.stopSounds(), null !== RR.reply && this.apply(RR.reply)
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
        var RR, JR, GR;
        const yR = this.selectedParts(),
          tR = null === yR ? null : (0, NG.m)(yR),
          uR = null !== (RR = null === (JR = this.forging) || void 0 === JR ? void 0 : JR.preview) && void 0 !== RR ? RR : null === tR ? null : this.preview(tR);
        return {
          enabled: this.received,
          open: this.open,
          slots: NG.i.map((RR => ({
            kind: RR,
            label: this.translate(FG[RR]),
            parts: this.partsFor(RR)
          }))),
          coalOwned: this.coal,
          preview: uR,
          unformedSword: NG.h[null !== (GR = this.selected.Blade) && void 0 !== GR ? GR : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((RR => RR > 0)),
          canForge: null !== uR && !uR.coalShort && !this.isPending(),
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
      preview(RR) {
        return {
          name: RR.displayName,
          lore: RR.lore,
          baseSword: RR.baseSword,
          enchantmentTier: RR.enchantmentTier,
          tier: Number(RR.enchantmentTier.slice(-1)),
          named: RR.named,
          stats: this.stats(RR),
          effects: RR.effects,
          coalCost: RR.coalCost,
          coalShort: null === this.forging && RR.coalCost > this.coal
        }
      }
      partsFor(RR) {
        const JR = [];
        for (const yR of NG.g) {
          var GR;
          const tR = (0, NG.p)(yR, RR),
            uR = null !== (GR = this.owned[tR]) && void 0 !== GR ? GR : 0;
          uR > 0 && JR.push({
            material: yR,
            itemName: tR,
            owned: uR,
            selected: this.selected[RR] === yR,
            placeholder: !1
          })
        }
        if (0 === JR.length) {
          const GR = NG.g[0];
          JR.push({
            material: GR,
            itemName: (0, NG.p)(GR, RR),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return JR
      }
      stats(RR) {
        const JR = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${RR.powerMultiplier.toFixed(2)}`,
          better: RR.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${RR.damageMultiplier.toFixed(2)}`,
          better: RR.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/RR.cooldownMultiplier).toFixed(2)}`,
          better: RR.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${RR.knockbackMultiplier.toFixed(2)}`,
          better: RR.knockbackMultiplier > 1
        }];
        return RR.reachBonus > 0 && JR.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${RR.reachBonus.toFixed(1)}`,
          better: !0
        }), RR.damageReduction > 0 && JR.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*RR.damageReduction)}%`,
          better: !0
        }), JR
      }
      selectedParts() {
        const {
          Blade: RR,
          Guard: JR,
          Handle: GR
        } = this.selected;
        return null === RR || null === JR || null === GR ? null : {
          blade: RR,
          guard: JR,
          handle: GR
        }
      }
      keepSelectionOwned(RR) {
        for (const GR of NG.i) {
          var JR;
          const yR = this.selected[GR];
          if (null !== yR && (null !== (JR = this.owned[(0, NG.p)(yR, GR)]) && void 0 !== JR ? JR : 0) > 0) continue;
          if (!RR) {
            this.selected[GR] = null;
            continue
          }
          const tR = [...NG.g].reverse().find((RR => {
            var JR;
            return (null !== (JR = this.owned[(0, NG.p)(RR, GR)]) && void 0 !== JR ? JR : 0) > 0
          }));
          this.selected[GR] = null !== tR && void 0 !== tR ? tR : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const sG = "skyblockSmugglerView",
      hG = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Ry extends iR {
      constructor(RR, JR, GR, yR, tR) {
        super(RR, GR, yR), this.translate = JR, this.requestBuy = tR, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = RR => RR, this.onBought = null, this.buy = RR => {
          const JR = this.deals[RR];
          void 0 !== JR && !this.isPending() && this.open && !this.soldOut.has(RR) && this.canAfford(JR) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, RR))
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        if (this.received = !0, this.day = RR.smugglerDay, this.deals = RR.smugglerDeals, this.rivets = RR.smugglerRivetsOwned, this.crests = RR.smugglerCrestsOwned, this.soldOut = new Set(RR.smugglerSoldOutSlots), this.rotatesAtMs = Date.now() + RR.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === RR.smugglerMessageKind) return this.status = null, this.boughtSlot = null, void this.show();
        if (this.boughtSlot = RR.smugglerBoughtSlot, null !== RR.smugglerBoughtSlot) {
          var JR, GR;
          const yR = this.deals[RR.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === yR ? "" : this.dealName(yR),
              amount: String(null !== (JR = null === yR || void 0 === yR ? void 0 : yR.smugglerDealAmount) && void 0 !== JR ? JR : 0)
            }
          }, this.boughtCount++, null === (GR = this.onBought) || void 0 === GR || GR.call(this)
        } else null !== RR.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: RR.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, void 0 !== GR && (this.itemName = GR), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.boughtCount = 0
      }
      dealName(RR) {
        if (null !== RR.smugglerDealUniqueName) return RR.smugglerDealUniqueName;
        const JR = hG[RR.smugglerDealItem];
        return void 0 === JR ? this.itemName(RR.smugglerDealItem) : this.translate(JR)
      }
      canAfford(RR) {
        return RR.smugglerDealRivets <= this.rivets && RR.smugglerDealCrests <= this.crests
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
          deals: this.deals.map(((RR, JR) => ({
            slot: JR,
            itemName: RR.smugglerDealItem,
            displayName: this.dealName(RR),
            enchantmentTier: RR.smugglerDealEnchantmentTier,
            amount: RR.smugglerDealAmount,
            rivets: RR.smugglerDealRivets,
            crests: RR.smugglerDealCrests,
            soldOut: this.soldOut.has(JR),
            justBought: this.boughtSlot === JR
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
    const Jy = "skyblockPassageView",
      Gy = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function yy(RR, JR) {
      return RR(Gy[JR])
    }

    function ty(RR, JR, GR, yR) {
      const tR = Math.ceil((GR - yR) / 864e5),
        uR = yy(RR, JR);
      return tR > 1 ? RR("skyblockGame:passageNextDays", {
        phase: uR,
        days: String(tR)
      }) : RR("skyblockGame:passageNextSoon", {
        phase: uR
      })
    }
    class uy extends iR {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(RR, GR, yR), this.translate = JR, this.now = tR, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = RR => RR, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        this.message = RR, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, void 0 !== GR && (this.itemName = GR), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(RR) {
        return {
          itemName: RR.passageFish,
          displayName: this.itemName(RR.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(RR.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const RR = this.message;
        return null === RR ? {
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
          phase: RR.passagePhase,
          phaseName: yy(this.translate, RR.passagePhase),
          visitors: RR.passageVisitors.map((RR => this.describe(RR))),
          resting: this.describe(RR.passageResting),
          nextPhase: RR.passageNextPhase,
          next: ty(this.translate, RR.passageNextPhase, RR.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Zy = GR(39767);
    const qy = "skyblockKeepersChairView";
    class iy extends iR {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Zy.c;
        super(RR, GR, yR), this.translate = JR, this.requestAim = tR, this.now = uR, this.pacer = ZR, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = RR => RR, this.aim = RR => {
          !this.awaitingReply && this.open && this.atChair && RR !== this.favoured && (null === RR || this.islands.some((JR => JR.keepersChairIslandId === RR && JR.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== RR && void 0 !== RR ? RR : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ZR.subscribe((() => {
          this.emit()
        }))
      }
      BK(RR) {
        var JR, GR;
        this.received = !0;
        const yR = this.favoured,
          tR = this.atChair;
        var uR;
        return this.islands = RR.keepersChairIslands, this.favoured = RR.keepersChairFavoured, this.passage = null !== (JR = RR.keepersChairPassage) && void 0 !== JR ? JR : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (GR = RR.keepersChairAtChair) || void 0 === GR || GR, "place" === RR.keepersChairMessageKind ? (!tR && this.atChair && "refused" === (null === (uR = this.status) || void 0 === uR ? void 0 : uR.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === RR.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== RR.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: RR.keepersChairRefusalKey,
          island: null
        } : this.favoured !== yR && (this.status = null === this.favoured ? {
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
      receivePassage(RR) {
        this.received && (this.passage = RR, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, void 0 !== GR && (this.itemName = GR), this.emit()
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
      islandName(RR) {
        const JR = this.islands.find((JR => JR.keepersChairIslandId === RR));
        return void 0 === JR ? RR : this.translate(JR.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const RR = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          JR = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((RR => {
            const JR = RR.keepersChairFeaturedFish;
            return {
              id: RR.keepersChairIslandId,
              name: this.translate(RR.keepersChairIslandNameKey),
              relit: RR.keepersChairIslandRelit,
              featuredFish: null === JR ? null : {
                itemName: JR,
                displayName: this.itemName(JR)
              },
              favoured: RR.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === RR ? null : {
            tone: RR.tone,
            text: this.translate(RR.key, null === RR.island ? void 0 : {
              island: this.islandName(RR.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === JR ? null : {
            phase: JR.keepersChairPassagePhase,
            phaseName: yy(this.translate, JR.keepersChairPassagePhase),
            nextPhase: JR.keepersChairPassageNextPhase,
            next: ty(this.translate, JR.keepersChairPassageNextPhase, JR.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const fy = "skyblockReachLogView",
      Vy = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Ky = "Caught Fish",
      wy = [1, 2, 4];

    function ry(RR, JR) {
      return RR.map((RR => ({
        ...RR,
        reachLogPageFish: RR.reachLogPageFish.map((RR => ({
          ...RR,
          reachLogFishFresh: JR(RR)
        })))
      })))
    }
    class ey extends iR {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Zy.c;
        super(RR, GR, yR), this.translate = JR, this.requestOpen = tR, this.pacer = uR, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = RR => RR, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = RR => {
          this.pages.some((JR => JR.reachLogIslandId === RR)) && (this.selected = RR, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = uR.subscribe((() => {
          this.emit()
        }))
      }
      BK(RR) {
        if (this.received = !0, "status" === RR.reachLogMessageKind) return !0 === RR.reachLogNews && this.markNews(), this.serverFresh = RR.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const JR = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== RR.reachLogMessageKind)
          if (this.pageViews = null, this.pages = ry(RR.reachLogPages, (RR => RR.reachLogFishFresh || this.heldFresh.has(RR.reachLogFishItem))), this.letGoShown = RR.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, JR) this.showPages();
          else {
            for (const RR of this.pages)
              for (const JR of RR.reachLogPageFish) JR.reachLogFishFresh && this.heldFresh.add(JR.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, this.pageViews = null, void 0 !== GR && (this.itemName = GR), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = ry(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var RR, JR, GR, yR;
        const tR = this.pages.find((RR => RR.reachLogPageFish.some((RR => RR.reachLogFishFresh))));
        if (void 0 !== tR) return tR.reachLogIslandId;
        if (null !== this.selected && this.pages.some((RR => RR.reachLogIslandId === this.selected))) return this.selected;
        return null !== (RR = null !== (JR = null === (GR = this.pages.filter((RR => RR.reachLogIslandAwake)).at(-1)) || void 0 === GR ? void 0 : GR.reachLogIslandId) && void 0 !== JR ? JR : null === (yR = this.pages[0]) || void 0 === yR ? void 0 : yR.reachLogIslandId) && void 0 !== RR ? RR : null
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
        return this.pages.map((RR => {
          var JR;
          return {
            id: RR.reachLogIslandId,
            name: this.translate(RR.reachLogIslandNameKey),
            awake: RR.reachLogIslandAwake,
            gold: RR.reachLogPageGold,
            caught: RR.reachLogPageFish.filter((RR => RR.reachLogFishCaught && !RR.reachLogFishVisitor)).length,
            total: RR.reachLogPageFish.filter((RR => !RR.reachLogFishVisitor)).length,
            fish: RR.reachLogPageFish.map((RR => {
              const JR = RR.reachLogFishBestKg;
              return {
                itemName: RR.reachLogFishItem,
                name: RR.reachLogFishCaught ? this.itemName(RR.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: RR.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / RR.reachLogFishChance))
                }),
                best: RR.reachLogFishCaught ? null === JR ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: JR.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: RR.reachLogFishMarks,
                ribbons: wy.map((JR => 0 !== (RR.reachLogFishRibbons & JR))),
                glimmer: 0 !== (8 & RR.reachLogFishRibbons),
                halo: 0 !== (32 & RR.reachLogFishRibbons),
                fresh: RR.reachLogFishFresh,
                visitor: RR.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (JR = RR.reachLogPageReturner) && void 0 !== JR ? JR : null)
          }
        }))
      }
      buildReturner(RR) {
        return null === RR ? null : {
          itemName: RR.reachLogReturnerFishItem,
          line: this.translate(RR.reachLogReturnerLineKey, {
            name: this.translate(RR.reachLogReturnerNameKey),
            trinket: this.translate(RR.reachLogReturnerTrinketKey)
          }),
          back: RR.reachLogReturnerBack
        }
      }
      receivePassagePhase(RR) {
        null !== this.passagePhase && this.passagePhase !== RR && (this.pagesCurrent = !1), this.passagePhase = RR
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const ay = "skyblockLampLightView";
    class Ly {
      constructor(RR, JR, GR, yR) {
        this.JK = RR, this.translate = JR, this.requestCommand = GR, this.pacer = yR, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.He = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = RR => {
          RR ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = RR => {
          this.send(`buy ${RR}`)
        }, this.socket = RR => {
          this.send(`socket ${null!==RR&&void 0!==RR?RR:NR}`)
        }, this.wearTint = RR => {
          this.send(`tint ${null!==RR&&void 0!==RR?RR:NR}`)
        }, this.setSituation = RR => {
          this.situation = RR, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = yR.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = yR.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      BK(RR) {
        if (this.message = RR, null !== RR.lampLightShop && (this.shop = RR.lampLightShop), "open" === RR.lampLightKind && (this.refusalKey = null), "reply" === RR.lampLightKind) {
          var JR;
          const tR = null !== (JR = RR.lampLightReplyTag) && void 0 !== JR ? JR : null,
            uR = null !== tR && tR === this.offTag;
          var GR, yR;
          if (uR ? this.settleOff() : null !== tR && tR !== this.awaitingTag || this.settleReply(), this.refusalKey = RR.lampLightRefusalKey, null !== RR.lampLightBought && !uR) this.sparkle = {
            id: RR.lampLightBought,
            count: (null !== (GR = null === (yR = this.sparkle) || void 0 === yR ? void 0 : yR.count) && void 0 !== GR ? GR : 0) + 1
          }
        }
        RR.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === RR.lampLightKind && (this.lastGained = RR.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(RR) {
        RR !== this.atChair && (this.atChair = RR, RR && (this.refusalKey = null), this.emit())
      }
      setTranslator(RR, JR) {
        this.translate = RR, this.locale = null !== JR && void 0 !== JR ? JR : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.He = !0
      }
      send(RR) {
        var JR;
        if (null !== this.awaitingTag || "ready" !== (null === (JR = this.message) || void 0 === JR ? void 0 : JR.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const GR = this.nextTag();
        this.awaitingTag = GR, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${RR} ${GR}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const RR = this.nextTag();
        this.offTag = RR, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${RR}`)
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
        this.He || (this.snapshot = this.buildSnapshot(), this.JK(this.snapshot))
      }
      formatLight(RR) {
        return Math.floor(RR).toLocaleString(this.locale)
      }
      formatPercent(RR) {
        const JR = 100 * RR;
        return JR >= 10 ? Math.round(JR).toLocaleString(this.locale) : JR.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(RR, JR) {
        if ("bite" === RR) return this.translate("skyblockGame:lampLightBite", {
          seconds: (JR.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === RR) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(JR.lampLightRareChance)
        });
        if ("notice" === RR) return null === JR.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(JR.lampLightNoticeChance)
        });
        const GR = "meter" === RR ? JR.lampLightMeterCatches : JR.lampLightBloomCatches;
        return null === GR ? null : this.translate("meter" === RR ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(GR))
        })
      }
      oddsLines(RR, JR) {
        const GR = (RR, JR) => {
            var GR;
            return null !== (GR = {
              bite: JR.lampLightBiteMs,
              rare: JR.lampLightRareChance,
              meter: JR.lampLightMeterCatches,
              bloom: JR.lampLightBloomCatches,
              notice: JR.lampLightNoticeChance
            } [RR]) && void 0 !== GR ? GR : 0
          },
          yR = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          tR = [];
        for (const uR of ["bite", "rare", "meter", "bloom", "notice"]) {
          const ZR = this.formatOdds(uR, RR),
            qR = this.formatOdds(uR, JR);
          if (null === ZR || null === qR || "bite" !== uR && "rare" !== uR && ZR === qR) continue;
          const iR = GR(uR, JR) - GR(uR, RR),
            fR = yR[uR] ? iR < 0 : iR > 0;
          tR.push({
            label: uR,
            before: ZR,
            after: qR,
            tone: ZR === qR ? "same" : fR ? "better" : "worse"
          })
        }
        return tR
      }
      charmView(RR, JR, GR) {
        const yR = RR.lampLightCharmId.charAt(0).toUpperCase() + RR.lampLightCharmId.slice(1),
          tR = "bloom" === this.situation;
        return {
          id: RR.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${yR}`),
          effect: this.translate(`skyblockGame:lampLightCharm${yR}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(RR.lampLightCharmCost)
          }),
          owned: RR.lampLightCharmOwned,
          affordable: GR >= RR.lampLightCharmCost,
          socketed: JR.lampLightSocketed === RR.lampLightCharmId,
          lines: this.oddsLines(tR ? JR.lampLightBareBloom : JR.lampLightBareOpen, tR ? RR.lampLightCharmBloom : RR.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var RR, JR, GR, yR;
        const tR = this.message,
          uR = "ready" === (null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) ? this.shop : null,
          ZR = null !== (RR = null === tR || void 0 === tR ? void 0 : tR.lampLightBalance) && void 0 !== RR ? RR : 0,
          qR = this.atChair,
          iR = "loading" === (null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          fR = "ready" !== (null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) || qR ? null !== (JR = this.refusalKey) && void 0 !== JR ? JR : iR : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== tR && "locked" !== tR.lampLightStatus,
          status: null !== (GR = null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) && void 0 !== GR ? GR : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(ZR)
          }),
          releasing: null !== (yR = null === tR || void 0 === tR ? void 0 : tR.lampLightReleasing) && void 0 !== yR && yR,
          gained: null === tR || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === tR || void 0 === tR ? void 0 : tR.lampLightStatus) && qR && !this.isPending(),
          situation: this.situation,
          shop: null === uR ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: uR.lampLightOddsRod,
              island: this.translate(uR.lampLightIslandNameKey)
            }),
            heldRod: null !== uR.lampLightHeldRod,
            charms: uR.lampLightCharms.map((RR => this.charmView(RR, uR, ZR))),
            tints: uR.lampLightTints.map((RR => {
              const JR = RR.lampLightTintId,
                [GR, yR, tR] = RR.lampLightTintColour;
              return {
                id: JR,
                name: this.translate(`skyblockGame:lampLightTint${JR.charAt(0).toUpperCase()}${JR.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(RR.lampLightTintCost)
                }),
                owned: RR.lampLightTintOwned,
                affordable: ZR >= RR.lampLightTintCost,
                wearing: uR.lampLightTint === JR,
                colour: `rgb(${GR}, ${yR}, ${tR})`
              }
            })),
            wearingIslandColours: null === uR.lampLightTint
          },
          notice: null === fR ? null : this.translate(fR),
          sparkle: this.sparkle
        }
      }
    }
    const ny = "skyblockMagmawardView";
    class Uy {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.JK = RR, this.now = JR, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = mR.map((() => 0)), this.wornAt = mR.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      BK(RR) {
        var JR, GR;
        const yR = mR.map(((JR, GR) => !0 === RR.magmawardPiecesWorn[GR]));
        if (!yR.includes(!0)) return this.snapshot = null, void this.JK(null);
        const tR = this.now(),
          uR = this.snapshot;
        null === uR && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const ZR = RR.magmawardFuelCarried,
          qR = !yR.includes(!1);
        let iR = null !== (JR = null === uR || void 0 === uR ? void 0 : uR.pulse) && void 0 !== JR ? JR : null,
          fR = null !== (GR = null === uR || void 0 === uR ? void 0 : uR.flare) && void 0 !== GR ? GR : null;
        RR.magmawardFuelBurned ? (iR = "burn", fR = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = tR, this.flareAt = tR) : null !== uR && ZR > uR.fuel && (iR = "gain", this.pulseToken++, this.pulseAt = tR), qR && null !== uR && !uR.fullSet && (fR = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = tR, this.setLitAt = tR);
        const VR = mR.map(((RR, JR) => (yR[JR] && null !== uR && !uR.pieces[JR].worn && (this.wornTokens[JR]++, this.wornAt[JR] = tR), {
          itemName: RR,
          worn: yR[JR],
          wornToken: this.wornTokens[JR],
          justWorn: yR[JR] && this.isPlaying(this.wornAt[JR], tR)
        })));
        this.snapshot = {
          pieces: VR,
          wornCount: yR.filter(Boolean).length,
          fullSet: qR,
          fuel: ZR,
          fuelState: ZR <= 0 ? "empty" : ZR <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, tR) ? iR : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, tR) ? fR : null,
          flareToken: this.flareToken,
          setLit: qR && this.isPlaying(this.setLitAt, tR),
          setLitToken: this.setLitToken
        }, this.JK(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.JK(null)
      }
      isPlaying(RR, JR) {
        return JR - RR < 1200
      }
    }
    const Wy = "skyblockGlowtideView";
    class Ay {
      constructor(RR) {
        this.JK = RR, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = RR => {
          this.arrow = RR, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      BK(RR) {
        this.bloom = RR.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.JK(null))
      }
      afterRender(RR, JR) {
        const GR = this.bloom;
        if (null === GR || null === RR) return;
        const yR = GR.glowtideBloomX - RR[0],
          tR = GR.glowtideBloomZ - RR[2],
          uR = Math.hypot(yR, tR),
          ZR = this.snapshot,
          qR = null !== ZR && void 0 !== ZR && ZR.inRange ? 1 : 0,
          iR = uR <= 12.5 + qR && RR[1] - GR.glowtideBloomY <= 10 + qR;
        !iR || null !== ZR && void 0 !== ZR && ZR.inRange || this.inRangeToken++;
        const fR = {
          colour: GR.glowtideBloomColour,
          inRange: iR,
          distance: Math.round(uR),
          inRangeToken: this.inRangeToken
        };
        (null === ZR || fR.colour !== ZR.colour || fR.inRange !== ZR.inRange || !iR && fR.distance !== ZR.distance) && (this.snapshot = fR, this.JK(fR));
        const VR = KR.e.computeShortestRotation(JR, (0, KR.Bb)([yR, 0, tR]));
        null === this.arrow || Math.abs(VR - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${VR}rad)`, this.arrowTurn = VR)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.JK(null)
      }
    }
    const Cy = "skyblockGlowMeterView";
    class Xy {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.JK = RR, this.now = JR, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      BK(RR) {
        const JR = this.now(),
          {
            glowMeterFill: GR,
            glowMeterCapacity: yR
          } = RR,
          tR = GR >= yR,
          uR = this.snapshot;
        null !== uR && (tR && !uR.full && (this.fullToken++, this.fullAt = JR), uR.full && !tR ? (this.burstToken++, this.burstAt = JR) : GR > uR.fill && (this.gainToken++, this.gainAt = JR)), this.snapshot = {
          fill: GR,
          hK: yR,
          ratio: Math.min(1, Math.max(0, GR / yR)),
          full: tR,
          rares: RR.glowMeterRares,
          ready: tR && this.isPlaying(this.fullAt, JR),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, JR),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, JR),
          gainToken: this.gainToken
        }, this.JK(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.JK(null)
      }
      isPlaying(RR, JR) {
        return JR - RR < 2e3
      }
    }
    const My = "skyblockHushWaitView";
    class By {
      constructor(RR) {
        this.JK = RR, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      BK(RR) {
        let {
          hushWaitMs: JR,
          hushWaitTotalMs: GR,
          hushWaitLines: yR
        } = RR;
        if (this.clearTimers(), this.token++, 0 === yR.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (JR <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: yR[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const tR = Math.max(null !== GR && void 0 !== GR ? GR : JR, JR),
          uR = tR - JR,
          ZR = RR => tR * RR / yR.length,
          qR = RR => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: tR,
              elapsedMs: uR,
              line: yR[RR],
              lineIndex: RR
            })
          };
        let iR = 0;
        for (; iR + 1 < yR.length && ZR(iR + 1) <= uR;) iR++;
        qR(iR);
        for (let fR = iR + 1; fR < yR.length; fR++) this.later(ZR(fR) - uR, (() => {
          qR(fR)
        }));
        this.later(JR, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(RR) {
        this.snapshot = RR, this.JK(RR)
      }
      later(RR, JR) {
        this.timers.push(setTimeout(JR, RR))
      }
      clearTimers() {
        for (const RR of this.timers) clearTimeout(RR);
        this.timers = []
      }
    }
    const ly = "skyblockTideChartsView",
      py = 36e5,
      gy = 864e5;

    function by(RR, JR, GR) {
      const [yR, tR, uR, ZR] = RR.tideChartArea, qR = Math.floor(JR), iR = Math.floor(GR);
      return qR >= yR && qR <= uR && iR >= tR && iR <= ZR
    }

    function vy(RR, JR, GR) {
      const [yR, tR, uR, ZR] = RR.tideChartWater;
      return function(RR, JR, GR, yR, tR, uR) {
        const ZR = 4 - zR(Math.floor(tR) - (RR - GR), GR);
        return 5 * zR(Math.floor(uR) - (JR - yR), yR) + ZR
      }(yR, tR, uR, ZR, JR, GR)
    }

    function Oy(RR, JR, GR) {
      const yR = RR.tideCharts;
      for (let tR = 0; tR < yR.length; tR++)
        if (by(yR[tR], JR, GR)) return yR[tR];
      return null
    }

    function xy(RR, JR, GR) {
      const yR = Math.max(0, JR - GR);
      return yR > gy ? RR("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(yR / gy))
      }) : yR > py ? RR("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(yR / py))
      }) : RR("skyblockGame:tideChartsTurnSoon")
    }
    class Ny extends iR {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(RR, GR, yR), this.translate = JR, this.now = tR, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Ur = RR => {
          this.picked = RR, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        const JR = this.message;
        if (null !== JR)
          for (const yR of RR.tideCharts) {
            var GR;
            const RR = JR.tideCharts.find((RR => RR.tideChartIsland === yR.tideChartIsland)),
              tR = yR.tideChartLit & ~(null !== (GR = null === RR || void 0 === RR ? void 0 : RR.tideChartLit) && void 0 !== GR ? GR : 0);
            void 0 !== RR && 0 !== tR && (this.pulse = {
              island: yR.tideChartIsland,
              cells: tR,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = RR, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(RR, JR) {
        var GR;
        const yR = null === this.message || Number.isNaN(RR) ? null : Oy(this.message, RR, JR),
          tR = null !== (GR = null === yR || void 0 === yR ? void 0 : yR.tideChartIsland) && void 0 !== GR ? GR : null,
          uR = null === yR ? -1 : function(RR, JR, GR) {
            const [yR, tR, uR, ZR] = RR.tideChartWater;
            return function(RR, JR, GR, yR, tR, uR, ZR) {
              return ((tR - RR) / (GR + ZR)) ** 2 + ((uR - JR) / (yR + ZR)) ** 2 <= 1
            }(yR, tR, uR, ZR, JR, GR, 2) ? vy(RR, JR, GR) : -1
          }(yR, RR, JR);
        return (tR !== this.hereIsland || uR !== this.hereCell) && (this.hereIsland = tR, this.hereCell = uR, null !== tR && (this.lastIsland = tR), !0)
      }
      afterRender(RR) {
        if (null === this.message) return;
        this.lastX = null === RR ? Number.NaN : RR[0], this.lastZ = null === RR ? Number.NaN : RR[2];
        const JR = this.locate(this.lastX, this.lastZ),
          GR = this.expirePulses();
        (JR || GR || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const RR = this.now();
        return !(!this.open || RR - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = RR, xy(this.translate, this.message.tideChartTurnsInMs, RR - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(RR, JR) {
        const GR = null === this.message ? null : Oy(this.message, RR, JR);
        if (null === GR) return;
        const yR = vy(GR, RR, JR);
        0 === (GR.tideChartPreBlank & 1 << yR) && (this.cast = {
          island: GR.tideChartIsland,
          cell: yR,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const RR = this.now();
        let JR = !1;
        return 0 !== this.pulse.cells && RR - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, JR = !0), null !== this.cast && RR - this.cast.atMs >= 1500 && (this.cast = null, JR = !0), JR
      }
      setTranslator(RR) {
        this.translate = RR, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(RR, JR) {
        var GR;
        return null !== (GR = RR.tideCharts.find((RR => RR.tideChartIsland === JR))) && void 0 !== GR ? GR : null
      }
      describe(RR) {
        var JR, GR, yR;
        const tR = RR.tideChartIsland,
          uR = [];
        for (let rR = 0; rR < 25; rR++) {
          const JR = 1 << rR;
          0 !== (RR.tideChartLit & JR) ? uR.push("lit") : 0 !== (RR.tideChartClear & JR) ? uR.push("clear") : 0 !== (RR.tideChartPreBlank & JR) ? uR.push("shore") : uR.push("water")
        }
        const ZR = function(RR) {
            let JR = 0;
            for (let GR = RR >>> 0; 0 !== GR; GR &= GR - 1) JR++;
            return JR
          }(RR.tideChartLit),
          qR = RR.tideChartInkCount,
          iR = this.translate(RR.tideChartIslandNameKey),
          fR = this.translate("skyblockGame:tideChartsLit", {
            lit: String(ZR),
            ink: String(qR)
          }),
          VR = null === RR.tideChartPictureNameKey ? null : this.translate(RR.tideChartPictureNameKey),
          KR = this.hereIsland === tR && -1 !== this.hereCell ? this.hereCell : null,
          wR = [`${iR}: ${fR}.`];
        if (null !== VR && wR.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: VR
          })), null !== KR) {
          const RR = Math.floor(KR / 5) + 1,
            JR = KR % 5 + 1;
          wR.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(RR),
            column: String(JR)
          }))
        }
        return {
          island: tR,
          islandName: iR,
          cells: uR,
          hereCell: KR,
          lit: ZR,
          ink: qR,
          litText: fR,
          pictureName: VR,
          gridLabel: wR.join(" "),
          pulseCells: this.pulse.island === tR ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (JR = this.cast) || void 0 === JR ? void 0 : JR.island) === tR ? this.cast.cell : null,
          castToken: null !== (GR = null === (yR = this.cast) || void 0 === yR ? void 0 : yR.token) && void 0 !== GR ? GR : 0
        }
      }
      buildSnapshot() {
        var RR, JR, GR;
        const yR = this.message;
        if (null === yR || 0 === yR.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const tR = this.findChart(yR, this.hereIsland),
          uR = null !== (RR = null !== (JR = null !== (GR = this.findChart(yR, this.open ? this.picked : null)) && void 0 !== GR ? GR : tR) && void 0 !== JR ? JR : this.findChart(yR, this.lastIsland)) && void 0 !== RR ? RR : yR.tideCharts[0],
          ZR = null === tR ? null : this.describe(tR);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: ZR,
          card: uR === tR ? ZR : this.describe(uR),
          turnsText: xy(this.translate, yR.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(yR.tideChartBookCount)
          }),
          tabs: yR.tideCharts.map((RR => ({
            island: RR.tideChartIsland,
            name: this.translate(RR.tideChartIslandNameKey),
            selected: RR.tideChartIsland === uR.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Dy = "skyblockRegularsView",
      Hy = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      oy = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function cy(RR, JR) {
      return "given" === RR ? JR.given : "owed" === RR ? JR.owed : JR.goal
    }
    class Py extends iR {
      constructor(RR, JR, GR, yR) {
        super(RR, GR, yR), this.translate = JR, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = RR => RR, this.openIsland = RR => {
          this.selected = RR, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = RR => {
          this.selected = RR, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        this.message = RR, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const RR = this.openedFromReachLog;
        return this.openedFromReachLog = !1, RR
      }
      setTranslator(RR, JR, GR) {
        this.translate = RR, void 0 !== GR && (this.itemName = GR), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(RR, JR, GR) {
        return {
          text: this.translate(cy(RR, JR), GR),
          given: "given" === RR
        }
      }
      describeRegular(RR, JR) {
        const GR = this.translate,
          yR = null !== RR.regularKg,
          tR = RR.regularMeetings,
          uR = yR ? 0 === tR ? GR("skyblockGame:regularsNotMet") : 1 === tR ? GR("skyblockGame:regularsMeetingsOne") : GR("skyblockGame:regularsMeetings", {
            count: tR
          }) : "";
        return {
          id: RR.regularId,
          name: GR(RR.regularNameKey),
          line: GR(RR.regularLineKey),
          itemName: RR.regularFishItem,
          fishName: this.itemName(RR.regularFishItem),
          tagged: yR,
          size: null === RR.regularKg ? GR("skyblockGame:regularsNotTagged") : GR("skyblockGame:regularsSize", {
            kg: RR.regularKg.toFixed(1)
          }),
          meetings: uR,
          chance: GR("skyblockGame:regularsChance", {
            count: RR.regularOneInCasts
          }),
          resting: RR.regularRestingToday,
          gifts: [{
            text: GR("skyblockGame:regularsGiftFlare"),
            given: tR >= 3
          }, this.describeGift(RR.regularTintGift, Hy, {
            tint: GR(RR.regularTintNameKey)
          })],
          history: [...RR.regularHistory].reverse().map((RR => {
            const yR = RR.regularMeetingKg.toFixed(1),
              tR = JR - RR.regularMeetingDay;
            return tR <= 0 ? GR("skyblockGame:regularsToday", {
              kg: yR
            }) : GR("skyblockGame:regularsDaysAgo", {
              days: tR,
              kg: yR
            })
          }))
        }
      }
      describeIsland(RR, JR) {
        return {
          id: RR.regularsIslandId,
          name: this.translate(RR.regularsIslandNameKey),
          charm: this.describeGift(RR.regularsCharmGift, oy, {
            charm: this.translate(RR.regularsCharmNameKey)
          }),
          regulars: RR.regularsList.map((RR => this.describeRegular(RR, JR)))
        }
      }
      buildSnapshot() {
        var RR, JR, GR, yR;
        const tR = this.message;
        if (null === tR) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const uR = tR.regularsIslands.map((RR => this.describeIsland(RR, tR.regularsToday))),
          ZR = null !== (RR = null !== (JR = null === (GR = uR.find((RR => RR.id === this.selected))) || void 0 === GR ? void 0 : GR.id) && void 0 !== JR ? JR : null === (yR = uR[0]) || void 0 === yR ? void 0 : yR.id) && void 0 !== RR ? RR : "";
        return {
          enabled: !0,
          open: this.open,
          selected: ZR,
          islands: uR
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Iy = "skyblockHiddenWatersView";
    class my {
      constructor(RR) {
        this.JK = RR, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      BK(RR) {
        this.snapshot = function(RR) {
          const [JR, GR] = RR.hiddenWatersMapSize, yR = (RR, yR) => ({
            left: 1 - RR / JR,
            top: yR / GR
          }), tR = new Map;
          for (const [ZR, qR] of RR.hiddenWatersGlimpses) {
            var uR;
            const RR = null !== (uR = tR.get(ZR)) && void 0 !== uR ? uR : [];
            RR.push(qR), tR.set(ZR, RR)
          }
          return {
            found: RR.hiddenWatersFound,
            total: RR.hiddenWatersTotal,
            aspect: GR / JR,
            pins: RR.hiddenWatersPins.map((RR => {
              let [JR, GR] = RR;
              return yR(JR, GR)
            })),
            islands: RR.hiddenWatersIslands.map((RR => {
              let [tR, uR, ZR, qR] = RR;
              const {
                left: iR,
                top: fR
              } = yR(ZR + 1, uR);
              return {
                left: iR,
                top: fR,
                width: (ZR + 1 - tR) / JR,
                height: (qR + 1 - uR) / GR
              }
            })),
            glimpses: tR
          }
        }(RR), this.JK(this.snapshot)
      }
    }
    const zy = "skyblockDialogueView";
    class Sy extends iR {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(RR, GR, yR), this.translate = JR, this.requestDialogue = tR, this.now = uR, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = RR => {
          this.selection = {
            kind: "quest",
            questId: RR
          }, this.request(), this.show()
        }, this.selectCharacter = RR => {
          this.selection = {
            kind: "character",
            npcId: RR
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BK(RR) {
        this.received = !0, this.scripts = RR.questDialogueScripts, this.speakers = new Map(RR.questDialogueSpeakers.map((RR => [RR.dialogueSpeakerId, RR]))), this.emit()
      }
      setTranslator(RR) {
        this.translate = RR, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const RR = this.now();
        RR >= this.requestAvailableAt && (this.requestAvailableAt = RR + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var RR;
        const JR = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...JR,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const GR = this.selection;
        if ("quest" === GR.kind) {
          const RR = this.scripts.find((RR => RR.dialogueQuestId === GR.questId));
          return {
            ...JR,
            characters: [],
            questFocus: GR.questId,
            conversations: RR ? [this.conversation(RR)] : []
          }
        }
        const yR = [];
        for (let uR = this.scripts.length - 1; uR >= 0; uR--) {
          const RR = this.scripts[uR].dialogueLines;
          for (let JR = RR.length - 1; JR >= 0; JR--) yR.includes(RR[JR].dialogueSpeakerId) || yR.push(RR[JR].dialogueSpeakerId)
        }
        const tR = null !== GR.npcId && yR.includes(GR.npcId) ? GR.npcId : null !== (RR = yR[0]) && void 0 !== RR ? RR : null;
        return {
          ...JR,
          characters: yR.map((RR => {
            var JR, GR;
            return {
              id: RR,
              styling: null !== (JR = null === (GR = this.speakers.get(RR)) || void 0 === GR ? void 0 : GR.dialogueSpeakerStyling) && void 0 !== JR ? JR : RR,
              selected: RR === tR
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((RR => RR.dialogueLines.some((RR => RR.dialogueSpeakerId === tR)))).map((RR => this.conversation(RR))).reverse()
        }
      }
      conversation(RR) {
        let JR = null;
        return {
          questId: RR.dialogueQuestId,
          questName: this.translate(RR.dialogueQuestNameKey),
          completed: RR.dialogueQuestCompleted,
          lines: RR.dialogueLines.map(((RR, GR) => {
            var yR;
            const tR = RR.dialogueSpeakerId === JR || null === (yR = this.speakers.get(RR.dialogueSpeakerId)) || void 0 === yR ? void 0 : yR.dialogueSpeakerStyling;
            return JR = RR.dialogueSpeakerId, {
              key: GR,
              display: {
                line: {
                  translationKey: RR.dialogueLineKey,
                  params: this.params(RR.dialogueLineParams)
                },
                speakerName: tR,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(RR) {
        if (void 0 !== RR) return Object.fromEntries(Object.entries(RR).map((RR => {
          let [JR, GR] = RR;
          return [JR, "string" === typeof GR ? GR : this.translate(GR.translationKey)]
        })))
      }
    }
    var jy = GR(656),
      dy = GR(1359),
      Ey = GR(103);
    const Yy = "skyblockAutographsView";

    function ky(RR) {
      const JR = jy.n[RR];
      return {
        label: JR.chatTag.map((RR => RR.str)).join(""),
        icon: JR.icon,
        colour: JR.mainRGB
      }
    }
    class Qy extends iR {
      constructor(RR) {
        let JR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = JR, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      BK(RR) {
        this.signatures = RR.autographSignatures, RR.autographOpen ? this.show() : this.emit()
      }
      setTranslator(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = JR, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var RR;
        const JR = null !== (RR = this.signatures) && void 0 !== RR ? RR : [],
          GR = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          yR = [...JR].sort(((RR, JR) => Number(null !== JR.autographRank) - Number(null !== RR.autographRank) || JR.autographSignedAtMs - RR.autographSignedAtMs)).map((RR => ({
            key: `${RR.autographSignedAtMs}|${RR.autographSignerName}`,
            name: (0, dy.e)(RR.autographSignerName, !Ey.featureFlags.canSeeRealPlayerNames),
            rank: null === RR.autographRank ? null : ky(RR.autographRank),
            signedOn: GR.format(RR.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: yR,
          total: yR.length,
          rankTotal: yR.filter((RR => null !== RR.rank)).length
        }
      }
    }
    const Fy = "skyblockHudView",
      Ty = () => {},
      sy = {
        getItem: () => null,
        setItem: Ty,
        removeItem: Ty
      };
    class hy {
      constructor(RR) {
        let {
          translate: JR,
          translateWithIcons: GR,
          setMenuOpen: yR = Ty,
          dismissMenu: tR = () => {
            yR(!1)
          },
          publishSkills: uR = Ty,
          publishQuests: ZR = Ty,
          publishQuestNotification: qR = Ty,
          publishDungeons: iR = Ty,
          publishCollections: fR = Ty,
          publishMap: KR = Ty,
          publishHud: wR = Ty,
          publishPortalTransit: rR = Ty,
          publishDailyReward: eR = Ty,
          publishMailbox: aR = Ty,
          publishQuestGraph: LR = Ty,
          publishForge: nR = Ty,
          publishSmuggler: UR = Ty,
          publishKeepersChair: WR = Ty,
          publishReachLog: AR = Ty,
          publishLampLight: XR = Ty,
          publishMagmaward: MR = Ty,
          publishGlowtide: BR = Ty,
          publishGlowMeter: lR = Ty,
          publishHushWait: pR = Ty,
          publishPassage: gR = Ty,
          publishTideCharts: bR = Ty,
          publishRegulars: vR = Ty,
          publishHiddenWaters: OR = Ty,
          publishDialogue: xR = Ty,
          publishAutographs: NR = Ty,
          isLoadingScreenUp: DR = () => !1,
          onDailyRewardCoinLanded: HR = Ty,
          onDailyRewardStarted: oR = Ty,
          onDailyRewardFinished: cR = Ty,
          onDailyRewardItemLanded: PR = Ty,
          onMailboxStarted: IR = Ty,
          journeyStorage: mR = sy,
          requestTracking: zR = Ty,
          requestTravel: SR = Ty,
          requestDungeonEnter: jR = Ty,
          requestQuestJump: dR = Ty,
          requestQuestArrive: ER = Ty,
          requestForge: YR = Ty,
          requestSmuggle: kR = Ty,
          requestKeepersChairAim: QR = Ty,
          requestReachLogOpen: FR = Ty,
          requestLampLight: TR = Ty,
          requestDialogue: sR = Ty
        } = RR;
        this.navigation = void 0, this.map = void 0, this.compass = new CR, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Zy.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = RR => RR, this.close = () => {
          for (const RR of this.panels) RR.close()
        }, this.setMenuOpen = yR, this.publishHud = wR, this.portalTransit = new WG(rR, mR), this.magmaward = new Uy(MR), this.glowtide = new Ay(BR), this.glowMeter = new Xy(lR), this.hushWait = new By(pR), this.dailyReward = new XG(eR, (() => DR() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (RR => {
          this.quests.setNotificationsHeld(RR)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), HR, oR, cR, PR);
        const hR = RR => {
          this.panels.some((RR => RR.isOpen())) || (RR ? tR() : this.setMenuOpen(!1))
        };
        this.skills = new mJ(uR, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), JR, void 0, void 0, hR), this.quests = new EJ(ZR, zR, JR, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, hR, qR), this.dungeons = new QJ(iR, JR, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, hR, jR), this.collections = new LG(fR, JR, (() => {
          this.beforePanelOpen(this.collections)
        }), hR), this.map = new VR(KR, SR, JR, (() => {
          this.beforePanelOpen(this.map)
        }), hR), this.questGraph = new xG(LR, JR, (() => {
          this.beforePanelOpen(this.questGraph)
        }), hR, dR, ER, mR), this.forge = new TG(nR, JR, (() => {
          this.beforePanelOpen(this.forge)
        }), hR, YR), this.smuggler = new Ry(UR, JR, (() => {
          this.beforePanelOpen(this.smuggler)
        }), hR, kR), this.lampLight = new Ly(XR, JR, TR, this.commandPacer), this.keepersChair = new iy(WR, JR, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (RR => {
          this.lampLight.onChairClosed(), hR(RR)
        }), QR, Date.now, this.commandPacer), this.reachLog = new ey(AR, JR, (() => {
          this.beforePanelOpen(this.reachLog)
        }), hR, FR, this.commandPacer), this.passage = new uy(gR, JR, (() => {
          this.beforePanelOpen(this.passage)
        }), hR), this.tideCharts = new Ny(bR, JR, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), hR), this.regulars = new Py(vR, JR, (() => {
          this.beforePanelOpen(this.regulars)
        }), (RR => {
          this.regulars.takeReturnToReachLog() && !RR && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), hR(RR)
        })), this.hiddenWaters = new my(OR), this.dialogue = new Sy(xR, JR, (() => {
          this.beforePanelOpen(this.dialogue)
        }), hR, sR), this.autographs = new Qy(NR, (() => {
          this.beforePanelOpen(this.autographs)
        }), hR), this.mailbox = new pG(aR, (() => DR() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), IR), this.quests.translateWithIcons = null !== GR && void 0 !== GR ? GR : null, this.skills.onLevelUp = RR => {
          this.quests.notify(RR)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new PJ(this.map, this.quests, this.compass, JR)
      }
      getHudSnapshot() {
        const RR = this.hudSnapshot,
          JR = this.dailyReward.getHeldCoins();
        return null === RR || JR <= 0 || !("hudPurseCoins" in RR) ? RR : {
          ...RR,
          hudPurseCoins: Math.max(0, RR.hudPurseCoins - JR)
        }
      }
      receiveHud(RR) {
        this.hudSnapshot = RR, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(RR) {
        this.setMenuOpen(!0);
        const JR = RR === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = RR;
        for (const GR of this.panels) GR === RR || JR && GR === this.reachLog || GR.close();
        this.openingPanel = null
      }
      setTranslator(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JR => this.resolveItemName(JR, RR);
        this.quests.translateWithIcons = null !== GR && void 0 !== GR ? GR : null, this.navigation.setTranslator(RR, JR), this.lampLight.setTranslator(RR, JR), this.mailbox.setItemName(yR);
        for (const tR of this.panels) tR.setTranslator(RR, JR, yR)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const RR of this.panels) RR.dispose()
      }
    }
    var Rt = GR(1163),
      Jt = GR.n(Rt),
      Gt = GR(25),
      yt = GR(37796),
      tt = GR(4717),
      ut = GR(2123),
      Zt = GR(2105),
      qt = GR(35174),
      it = GR(1270),
      ft = GR(1581),
      Vt = GR(1378);

    function Kt(RR) {
      let {
        controller: JR,
        minimap: GR,
        children: yR
      } = RR;
      const tR = (0, ft.h)(Fy, JR.getHudSnapshot()),
        [uR, ZR] = (0, MR.useState)(JR.skills.getSnapshot().overallLevel);
      (0, ft.f)(IJ, (RR => {
        ZR(RR.overallLevel)
      }));
      const qR = (0, MR.useRef)(null);
      (0, ft.f)(CG, (RR => {
        ! function(RR, JR) {
          if (null === RR || "function" !== typeof RR.animate) return;
          const GR = JR ? 1.35 : 1.15;
          RR.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${GR})`
          }, {
            transform: "scale(1)"
          }], {
            duration: JR ? 320 : 160,
            easing: "ease-out"
          }), RR.classList.toggle("Receiving", !JR), JR && (RR.classList.remove("Shine"), RR.offsetWidth, RR.classList.add("Shine"))
        }(qR.current, RR)
      }));
      const {
        t: iR
      } = (0, it.A)(), {
        isTouchScreen: fR
      } = (0, Gt.o)(["isTouchScreen"]), [VR, wR] = (0, MR.useState)(null);
      return (0, tt.l)(VR, ".SkyblockRightHud"), null !== tR || GR ? (0, Vt.jsx)(yt.d, {
        placement: "topRight",
        children: (0, Vt.jsxs)("div", {
          className: Jt()("SkyblockRightHud", {
            TouchScreen: fR
          }),
          children: [GR, null !== tR && (0, Vt.jsxs)("div", {
            ref: wR,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in tR ? (0, Vt.jsx)("div", {
              className: "SkyblockHudHelp",
              children: tR.hudHelpText
            }) : (0, Vt.jsxs)(Vt.Fragment, {
              children: [(0, Vt.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Vt.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Vt.jsx)("strong", {
                    style: {
                      color: KR.C.cyanUiText
                    },
                    children: iR(tR.hudZoneNameKey)
                  }), null !== uR && (0, Vt.jsx)("span", {
                    style: {
                      color: KR.C.goldUiText
                    },
                    children: iR("skyblockGame:level", {
                      level: (0, qt.i)(uR)
                    })
                  })]
                }), (0, Vt.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: qR,
                  children: [(0, Vt.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, qt.i)(tR.hudPurseCoins)]
                })]
              }), tR.hudClockText.length > 0 && (0, Vt.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Vt.jsx)(Zt.c, {
                  text: tR.hudClockText
                })
              })]
            }), yR, "hudZoneNameKey" in tR && (0, Vt.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var wt = GR(39769);

    function rt(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)();
      return (0, Vt.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: JR.display.mountPlayer,
        title: GR("skyblockGame:mapYouAreHere"),
        children: (0, Vt.jsx)(wt.d, {
          icon: "player"
        })
      })
    }
    const et = GR(39773),
      Lt = Object.fromEntries(et.keys().map((RR => [RR.replace(/^\.\/(.*)\.png$/, "$1"), et(RR)])));

    function nt(RR, JR) {
      var GR;
      return null !== (GR = Lt[RR]) && void 0 !== GR ? GR : Lt[JR]
    }

    function Ut(RR) {
      let {
        imageKey: JR,
        fallbackImageKey: GR,
        geometryKey: yR,
        alt: tR,
        className: uR
      } = RR;
      const [ZR, qR] = (0, MR.useState)((() => function(RR, JR) {
        return [{
          id: 0,
          imageKey: RR,
          geometryKey: JR,
          phase: "shown"
        }]
      }(JR, yR))), iR = function(RR, JR, GR) {
        const yR = RR[RR.length - 1];
        if (yR.imageKey === JR && yR.geometryKey === GR) return RR;
        const tR = {
          id: yR.id + 1,
          imageKey: JR,
          geometryKey: GR,
          phase: "entering"
        };
        return yR.geometryKey === GR ? [{
          ...yR,
          phase: "leaving"
        }, tR] : [tR]
      }(ZR, JR, yR);
      return iR !== ZR && qR(iR), (0, Vt.jsx)(Vt.Fragment, {
        children: iR.map((RR => (0, Vt.jsx)("img", {
          className: Jt()("SkyblockMapTerrainImage", uR, {
            Entering: "entering" === RR.phase,
            Leaving: "leaving" === RR.phase
          }),
          src: nt(RR.imageKey, GR),
          alt: "leaving" === RR.phase ? "" : tR,
          onAnimationEnd: () => {
            qR((JR => function(RR, JR) {
              return RR.flatMap((RR => RR.id !== JR ? [RR] : "leaving" === RR.phase ? [] : [{
                ...RR,
                phase: "shown"
              }]))
            }(JR, RR.id)))
          }
        }, RR.id)))
      })
    }
    var Wt = GR(5338),
      At = GR(1590);

    function Ct(RR) {
      if ("Tab" !== RR.key) return;
      const JR = Array.from(RR.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        GR = JR.indexOf(document.activeElement);
      var yR;
      if (RR.shiftKey && GR <= 0) RR.preventDefault(), null === (yR = JR.at(-1)) || void 0 === yR || yR.focus();
      else if (!RR.shiftKey && (-1 === GR || GR === JR.length - 1)) {
        var tR;
        RR.preventDefault(), null === (tR = JR[0]) || void 0 === tR || tR.focus()
      }
    }

    function Xt() {
      const RR = (0, MR.useRef)(null);
      return (0, MR.useCallback)((JR => {
        var GR;
        JR ? (RR.current = document.activeElement, JR.focus()) : null === (GR = RR.current) || void 0 === GR || GR.focus()
      }), [])
    }

    function Mt(RR) {
      let {
        percent: JR,
        label: GR,
        levelUpToken: yR,
        colour: tR
      } = RR;
      return (0, Vt.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": GR,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": JR,
        "aria-valuetext": GR,
        children: [(0, Vt.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${JR/100})`
          }
        }), null !== yR && void 0 !== yR && (0, Vt.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": tR
          }
        }, yR)]
      })
    }

    function Bt(RR) {
      let {
        mount: JR
      } = RR;
      return (0, Vt.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: JR,
        hidden: !0,
        children: (0, Vt.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Vt.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Vt.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function lt(RR, JR, GR, yR) {
      (0, MR.useLayoutEffect)((() => {
        const tR = RR.current;
        if (!GR || null === JR || void 0 === JR || !JR.local || !tR) return;
        const uR = Array.from(tR.querySelectorAll(".SkyblockMapNode")),
          ZR = [...JR.points, ...JR.portals],
          qR = () => {
            const RR = tR.clientWidth,
              GR = tR.clientHeight,
              qR = uR.map(((tR, uR) => {
                const qR = ZR[uR];
                return {
                  id: qR.id,
                  portal: uR >= JR.points.length,
                  x: qR.position[0] * RR / 100,
                  y: qR.position[1] * GR / 100,
                  width: tR.offsetWidth / yR,
                  height: tR.offsetHeight / yR
                }
              })),
              iR = new Map(ZR.map(((RR, JR) => [RR.id, uR[JR]])));
            for (const JR of function(RR, JR, GR) {
                const yR = [],
                  tR = [...RR].sort(((RR, JR) => Number(JR.portal) - Number(RR.portal) || RR.id.localeCompare(JR.id)));
                for (const uR of tR) {
                  const RR = RR => Math.max(uR.width / 2, Math.min(JR - uR.width / 2, RR)),
                    tR = RR => Math.max(uR.height / 2, Math.min(GR - uR.height / 2, RR)),
                    ZR = [RR(uR.x)],
                    qR = [tR(uR.y)];
                  for (const JR of yR) ZR.push(RR(JR.x - (JR.width + uR.width) / 2 - 4), RR(JR.x + (JR.width + uR.width) / 2 + 4)), qR.push(tR(JR.y - (JR.height + uR.height) / 2 - 4), tR(JR.y + (JR.height + uR.height) / 2 + 4));
                  let iR = {
                      ...uR,
                      x: ZR[0],
                      y: qR[0]
                    },
                    fR = 1 / 0,
                    VR = 1 / 0;
                  for (const JR of new Set(ZR))
                    for (const RR of new Set(qR)) {
                      let GR = 0;
                      for (const ZR of yR) GR += Math.max(0, (uR.width + ZR.width) / 2 + 4 - Math.abs(JR - ZR.x)) * Math.max(0, (uR.height + ZR.height) / 2 + 4 - Math.abs(RR - ZR.y));
                      const tR = (JR - uR.x) ** 2 + (RR - uR.y) ** 2;
                      (GR < fR || GR === fR && tR < VR) && (iR = {
                        ...uR,
                        x: JR,
                        y: RR
                      }, fR = GR, VR = tR)
                    }
                  yR.push(iR)
                }
                return yR
              }(qR, RR, GR)) {
              const RR = iR.get(JR.id);
              RR.style.left = `${JR.x}px`, RR.style.top = `${JR.y}px`
            }
          };
        qR();
        const iR = new ResizeObserver(qR);
        iR.observe(tR);
        for (const RR of uR) iR.observe(RR);
        return () => {
          iR.disconnect()
        }
      }), [RR, JR, GR, yR])
    }
    var pt = GR(39844),
      gt = GR(39855);

    function bt(RR) {
      var JR, GR, yR, tR;
      let {
        controller: uR,
        navigation: ZR
      } = RR;
      const qR = (0, ft.h)(fR, uR.getSnapshot()),
        {
          t: iR
        } = (0, it.A)(),
        VR = Xt(),
        KR = qR.presentation,
        wR = (0, MR.useRef)(null),
        rR = (0, MR.useRef)(null),
        eR = Boolean(qR.open && (null === KR || void 0 === KR ? void 0 : KR.local) && KR.background),
        aR = (0, pt.c)(wR, eR, `${qR.open}|${qR.tab}|${null===KR||void 0===KR||null===(JR=KR.background)||void 0===JR?void 0:JR.geometryKey}`, null !== (GR = null === KR || void 0 === KR || null === (yR = KR.background) || void 0 === yR ? void 0 : yR.ratio) && void 0 !== GR ? GR : 2);
      if (lt(rR, KR, qR.open, aR.view.zoom), !KR || !qR.open) return null;
      const LR = KR.local ? KR.background : null,
        nR = {
          "--map-ratio": String(null !== (tR = null === LR || void 0 === LR ? void 0 : LR.ratio) && void 0 !== tR ? tR : 2),
          backgroundColor: null === LR || void 0 === LR ? void 0 : LR.colour
        },
        UR = {
          "--map-zoom": String(aR.view.zoom),
          transform: `translate(${100*aR.view.x}%, ${100*aR.view.y}%) scale(${aR.view.zoom})`
        };
      return (0, Vt.jsx)(Wt.e, {
        show: qR.open,
        close: uR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: VR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockMapTitle",
                children: iR("skyblockGame:map")
              }), KR.minimap && (0, Vt.jsx)("p", {
                children: KR.minimap.caption
              })]
            }), (0, Vt.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((RR => (0, Vt.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": RR === qR.tab ? "true" : void 0,
                className: Jt()({
                  Selected: RR === qR.tab
                }),
                "aria-pressed": RR === qR.tab,
                onClick: () => {
                  uR.selectTab(RR)
                },
                children: iR("local" === RR ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, RR)))
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: uR.dismiss
            })]
          }), (0, Vt.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Vt.jsxs)("div", {
              ref: wR,
              className: Jt()("SkyblockMapCanvas", {
                Local: KR.local,
                Overview: !KR.local,
                Zoomed: aR.view.zoom > 1
              }),
              style: nR,
              children: [(0, Vt.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: eR ? UR : void 0,
                children: (0, Vt.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: rR,
                  children: [LR && (0, Vt.jsx)(Ut, {
                    className: "SkyblockMapTerrain",
                    imageKey: LR.imageKey,
                    fallbackImageKey: LR.fallbackImageKey,
                    geometryKey: LR.geometryKey,
                    alt: LR.label
                  }), KR.local && (0, Vt.jsx)(Bt, {
                    mount: ZR.display.mountMapSearchArea
                  }), !KR.local && (0, Vt.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: KR.connections.map((RR => (0, Vt.jsx)("line", {
                      className: Jt()({
                        Explored: RR.explored
                      }),
                      x1: RR.start[0],
                      y1: RR.start[1],
                      x2: RR.end[0],
                      y2: RR.end[1]
                    }, RR.id)))
                  }), KR.points.map((RR => {
                    const JR = !KR.local && RR.thumbnail ? Lt[RR.thumbnail] : void 0;
                    return (0, Vt.jsxs)("div", {
                      className: Jt()("SkyblockMapNode", {
                        Current: RR.current
                      }),
                      style: {
                        left: `${RR.position[0]}%`,
                        top: `${RR.position[1]}%`
                      },
                      children: [(0, Vt.jsxs)(At.g, {
                        className: Jt()("SkyblockMapPin", {
                          Unknown: !RR.visited,
                          Current: RR.current
                        }),
                        disabled: qR.pending,
                        onClick: () => {
                          uR.travel(RR.travelKind, RR.travelId)
                        },
                        children: [JR && (0, Vt.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: JR,
                          alt: ""
                        }), !JR && (0, Vt.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Vt.jsx)(wt.d, {
                            icon: RR.icon
                          })
                        }), (0, Vt.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: RR.name
                        })]
                      }), RR.current && (0, Vt.jsx)("span", {
                        className: Jt()("SkyblockMapHereBadge", {
                          Above: RR.position[1] > 50
                        }),
                        children: iR("skyblockGame:mapYouAreHere")
                      })]
                    }, RR.id)
                  })), KR.portals.map((RR => (0, Vt.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${RR.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${RR.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Vt.jsxs)(At.g, {
                      className: "SkyblockMapPin",
                      disabled: qR.pending,
                      onClick: () => {
                        uR.travel(RR.travelKind, RR.travelId)
                      },
                      children: [(0, Vt.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: RR.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Vt.jsx)(wt.d, {
                          icon: RR.icon
                        })
                      }), (0, Vt.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: RR.name
                      })]
                    })
                  }, RR.id))), KR.local && (0, Vt.jsx)(rt, {
                    controller: ZR
                  })]
                })
              }), eR && (0, Vt.jsx)(gt.b, {
                zoom: aR,
                zoomInLabel: iR("skyblockGame:mapZoomIn"),
                zoomOutLabel: iR("skyblockGame:mapZoomOut")
              }), (0, Vt.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: qR.feedback
              })]
            })
          }), (0, Vt.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [KR.progress && (0, Vt.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Vt.jsx)("span", {
                children: KR.progress
              }), (0, Vt.jsx)(Mt, {
                percent: KR.percent,
                label: KR.progress
              })]
            }), KR.noLandmarks && (0, Vt.jsx)("span", {
              children: iR("skyblockGame:mapNoLandmarks")
            }), KR.canTravel && (0, Vt.jsx)("span", {
              className: "SkyblockMapHint",
              children: iR("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function vt(RR) {
      let {
        view: JR,
        controller: GR,
        navigation: yR
      } = RR;
      const {
        t: tR
      } = (0, it.A)(), {
        isTouchScreen: uR
      } = (0, Gt.o)(["isTouchScreen"]);
      return (0, Vt.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": tR("skyblockGame:mapLocal"),
        children: [uR && (0, Vt.jsx)(At.g, {
          className: "SkyblockMinimapOpen",
          onClick: GR.showLocal,
          children: tR("skyblockGame:map")
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: JR.colour
          },
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: yR.display.mountTerrain,
            style: {
              width: JR.width,
              height: JR.height
            },
            children: [(0, Vt.jsx)(Ut, {
              imageKey: JR.imageKey,
              fallbackImageKey: JR.fallbackImageKey,
              geometryKey: JR.geometryKey,
              alt: JR.label
            }), (0, Vt.jsx)(Bt, {
              mount: yR.display.mountMinimapSearchArea
            }), JR.markers.map((RR => (0, Vt.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${RR.position[0]}%`,
                top: `${RR.position[1]}%`,
                color: RR.colour
              },
              title: RR.name,
              children: (0, Vt.jsx)(wt.d, {
                icon: RR.icon
              })
            }, RR.id)))]
          }), (0, Vt.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: tR("skyblockGame:mapYouAreHere"),
            children: (0, Vt.jsx)(wt.d, {
              icon: "player"
            })
          })]
        }), (0, Vt.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: JR.caption
        })]
      })
    }

    function Ot(RR) {
      let {
        controller: JR
      } = RR;
      return (0, Vt.jsxs)("div", {
        className: "SkyblockCompass",
        ref: JR.display.mountCompass,
        children: [(0, Vt.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Vt.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Vt.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function xt(RR) {
      let {
        controller: JR,
        surface: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)(), tR = (0, ft.h)(IJ, JR.getSnapshot()), uR = Xt();
      return tR.enabled ? (0, Vt.jsxs)(Vt.Fragment, {
        children: ["hud" === GR && (0, Vt.jsx)(yt.d, {
          placement: "statBars",
          children: tR.hud && (0, Vt.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": tR.hud.colour
            },
            children: [(0, Vt.jsx)(Mt, {
              percent: tR.hud.skill.percent,
              label: tR.hud.skill.xp,
              levelUpToken: tR.hud.levelUpToken,
              colour: tR.hud.colour
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Vt.jsxs)("span", {
                children: [tR.hud.skill.label, " \xb7 ", tR.hud.skill.level]
              }), (0, Vt.jsx)("span", {
                children: tR.hud.gain
              })]
            })]
          })
        }), "hud" === GR && (0, Vt.jsx)(yt.d, {
          children: tR.hud && (0, Vt.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Vt.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Vt.jsx)("strong", {
                children: tR.hud.skill.label
              }), (0, Vt.jsx)("span", {
                children: tR.hud.gain
              })]
            }), (0, Vt.jsx)(Mt, {
              percent: tR.hud.skill.percent,
              label: tR.hud.skill.xp,
              levelUpToken: tR.hud.levelUpToken,
              colour: tR.hud.colour
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Vt.jsx)("span", {
                children: tR.hud.skill.level
              }), (0, Vt.jsx)("span", {
                children: tR.hud.skill.xp
              })]
            })]
          })
        }), "menu" === GR && (0, Vt.jsx)(Wt.e, {
          show: tR.open,
          close: JR.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Vt.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: uR,
            onKeyDown: Ct,
            children: [(0, Vt.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Vt.jsxs)("div", {
                children: [(0, Vt.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: yR("skyblockGame:skills")
                }), (0, Vt.jsx)("p", {
                  children: yR("skyblockGame:skillsIntro")
                })]
              }), (0, Vt.jsx)(At.l, {
                padIgnore: !0,
                onClick: JR.dismiss
              })]
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Vt.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: tR.skills.map((RR => (0, Vt.jsxs)(At.g, {
                  className: Jt()("SkyblockSkillCard", {
                    Selected: RR.selected
                  }),
                  ariaPressed: RR.selected,
                  onClick: () => {
                    JR.select(RR.id)
                  },
                  children: [(0, Vt.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: RR.icon,
                      amount: 0
                    })
                  }), (0, Vt.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Vt.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Vt.jsx)("strong", {
                        children: RR.label
                      }), (0, Vt.jsx)("span", {
                        children: RR.level
                      })]
                    }), (0, Vt.jsx)(Mt, {
                      percent: RR.percent,
                      label: `${RR.label}: ${RR.xp}`
                    }), (0, Vt.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: RR.xp
                    })]
                  })]
                }, RR.id)))
              }), tR.detail && (0, Vt.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Vt.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Vt.jsx)(ut.b, {
                    itemName: tR.detail.icon,
                    amount: 0
                  })
                }), (0, Vt.jsx)("h3", {
                  children: tR.detail.label
                }), (0, Vt.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: tR.detail.level
                }), (0, Vt.jsx)("p", {
                  children: tR.detail.description
                }), (0, Vt.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Vt.jsx)("strong", {
                    children: yR("skyblockGame:currentBenefit")
                  }), (0, Vt.jsx)("span", {
                    children: tR.detail.benefit
                  })]
                }), (0, Vt.jsx)(Mt, {
                  percent: tR.detail.percent,
                  label: tR.detail.xp
                }), (0, Vt.jsx)("p", {
                  children: tR.detail.xp
                }), (0, Vt.jsx)("h4", {
                  children: yR("skyblockGame:earnXp")
                }), (0, Vt.jsx)("ul", {
                  children: tR.detail.sources.map((RR => (0, Vt.jsx)("li", {
                    children: RR
                  }, RR)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Nt = GR(1501),
      Dt = GR(5719),
      Ht = GR(359);

    function ot(RR) {
      let {
        item: JR
      } = RR;
      return (0, Vt.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Vt.jsx)(ut.b, {
          itemName: JR,
          amount: 0
        })
      })
    }

    function ct(RR) {
      let {
        name: JR,
        percent: GR,
        progress: yR
      } = RR;
      return (0, Vt.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Vt.jsx)(Mt, {
          percent: GR,
          label: `${(0,Ht.ob)(JR)}: ${yR}`
        }), (0, Vt.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: yR
        })]
      })
    }

    function Pt(RR) {
      let {
        subquests: JR,
        showDescriptions: GR = !1
      } = RR;
      return (0, Vt.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: JR.map((RR => {
          const JR = GR && "completed" === RR.status,
            yR = (0, Vt.jsxs)("li", {
              className: Jt()("SkyblockQuestStep", RR.status, {
                JustFinished: RR.justFinished,
                JustUnlocked: RR.justUnlocked
              }),
              tabIndex: JR ? 0 : void 0,
              children: [null !== RR.iconItem && (0, Vt.jsx)(ot, {
                item: RR.iconItem
              }), null === RR.iconItem && (0, Vt.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === RR.status ? "\u2713" : "skipped" === RR.status ? "\u2212" : "\u25cb"
              }), (0, Vt.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Vt.jsx)("strong", {
                  children: (0, Vt.jsx)(Dt.b, {
                    text: RR.name
                  })
                }), GR && !JR && (0, Vt.jsx)("span", {
                  children: (0, Vt.jsx)(Dt.b, {
                    text: RR.description
                  })
                }), null !== RR.barPercent && (0, Vt.jsx)(ct, {
                  name: RR.name,
                  percent: RR.barPercent,
                  progress: RR.progress
                }), null === RR.barPercent && !JR && (0, Vt.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: RR.statusLabel
                })]
              })]
            }, RR.id);
          return JR ? (0, Vt.jsx)(Nt.h, {
            delayShow: 200,
            tooltipInner: (0, Vt.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Vt.jsx)("span", {
                children: (0, Vt.jsx)(Dt.b, {
                  text: RR.description
                })
              }), (0, Vt.jsx)("strong", {
                children: RR.statusLabel
              })]
            }),
            children: yR
          }, RR.id) : yR
        }))
      })
    }

    function It(RR) {
      let {
        quest: JR,
        select: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)(), tR = JR.focusStep;
      return (0, Vt.jsxs)(At.g, {
        className: Jt()("SkyblockQuestCard", {
          Selected: JR.selected,
          Tracked: JR.tracked
        }),
        onClick: () => {
          GR(JR.id)
        },
        children: [(0, Vt.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Vt.jsx)("strong", {
            children: (0, Vt.jsx)(Dt.b, {
              text: JR.name
            })
          }), JR.tracked && (0, Vt.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: yR("skyblockGame:currentQuest")
          })]
        }), tR && (0, Vt.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== tR.iconItem && (0, Vt.jsx)(ot, {
            item: tR.iconItem
          }), (0, Vt.jsx)(ct, {
            name: tR.name,
            percent: tR.barPercent,
            progress: tR.progress
          })]
        }), (0, Vt.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: JR.progress
        })]
      })
    }

    function mt(RR) {
      let {
        controller: JR,
        surface: GR
      } = RR;
      const yR = (0, ft.h)(jJ, JR.getSnapshot()),
        {
          t: tR
        } = (0, it.A)(),
        uR = Xt();
      return yR.enabled ? (0, Vt.jsxs)(Vt.Fragment, {
        children: ["hud" === GR && (0, Vt.jsx)(Vt.Fragment, {
          children: yR.tracked && (0, Vt.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: SJ,
            children: (0, Vt.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [yR.trackedStepPulse > 0 && (0, Vt.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, yR.trackedStepPulse), (0, Vt.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: tR("skyblockGame:currentQuest")
              }), (0, Vt.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Vt.jsx)("strong", {
                  children: (0, Vt.jsx)(Dt.b, {
                    text: yR.tracked.name
                  })
                }), null !== yR.tracked.clock && (0, Vt.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: yR.tracked.clock
                })]
              }), (0, Vt.jsx)(Pt, {
                subquests: yR.tracked.subquests
              })]
            })
          })
        }), "menu" === GR && (0, Vt.jsx)(Wt.e, {
          show: yR.open,
          close: JR.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Vt.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: uR,
            onKeyDown: Ct,
            children: [(0, Vt.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Vt.jsx)("div", {
                children: (0, Vt.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: tR("skyblockGame:quests")
                })
              }), (0, Vt.jsx)(At.l, {
                padIgnore: !0,
                onClick: JR.dismiss
              })]
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Vt.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Vt.jsx)("h3", {
                  children: tR("skyblockGame:current")
                }), 0 === yR.active.length && (0, Vt.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: tR("skyblockGame:noActiveQuests")
                }), yR.active.map((RR => (0, Vt.jsx)(It, {
                  quest: RR,
                  select: JR.select
                }, RR.id))), (0, Vt.jsx)("h3", {
                  children: (0, Vt.jsxs)("button", {
                    type: "button",
                    className: Jt()("SkyblockQuestSectionToggle", {
                      Expanded: yR.completedExpanded
                    }),
                    "aria-expanded": yR.completedExpanded,
                    onClick: JR.toggleCompleted,
                    children: [(0, Vt.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), tR("skyblockGame:completed"), (0, Vt.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: yR.completed.length
                    })]
                  })
                }), yR.completedExpanded && 0 === yR.completed.length && (0, Vt.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: tR("skyblockGame:noCompletedQuests")
                }), yR.completedExpanded && yR.completed.map((RR => (0, Vt.jsx)(It, {
                  quest: RR,
                  select: JR.select
                }, RR.id)))]
              }), yR.detail && (0, Vt.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [yR.detail.completed && (0, Vt.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: tR("skyblockGame:completedQuest")
                }), (0, Vt.jsx)("h3", {
                  children: (0, Vt.jsx)(Dt.b, {
                    text: yR.detail.name
                  })
                }), (0, Vt.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Vt.jsx)(Dt.b, {
                    text: yR.detail.description
                  })
                }), (0, Vt.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [yR.detail.progress, null !== yR.detail.clock && (0, Vt.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: yR.detail.clock
                  })]
                }), (0, Vt.jsx)(Pt, {
                  subquests: yR.detail.subquests,
                  showDescriptions: !0
                }), yR.detail.tracked && (0, Vt.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: yR.detail.trackLabel
                }), !yR.detail.completed && !yR.detail.tracked && (0, Vt.jsx)(At.n, {
                  onClick: JR.trackSelected,
                  disabled: !yR.detail.canTrack,
                  children: yR.detail.trackLabel
                }), yR.detail.canViewDialogue && (0, Vt.jsx)(At.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: JR.viewDialogue,
                  children: tR("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var zt = GR(1468),
      St = GR(3731);

    function jt(RR, JR, GR, yR, tR) {
      const uR = RR => "linear" === tR ? RR : {
          CG: tR,
          point: RR
        },
        ZR = {};
      for (const [qR, iR] of yR)
        for (const [JR, GR] of Object.entries(RR(qR, iR, uR))) ZR[JR] ??= {
          timeline: []
        }, ZR[JR].timeline.push(GR);
      return {
        LG: JR,
        loop: GR,
        UG: ZR
      }
    }
    const dt = .547,
      Et = .022,
      Yt = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      kt = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Qt(RR, JR, GR) {
      const {
        drop: yR = 0,
        shift: tR = 0,
        torso: uR = 0,
        nod: ZR = 0,
        tilt: qR = 0,
        legs: iR = [0, 0],
        arms: fR = 0,
        spread: VR = 0
      } = JR, KR = dt * Math.cos(uR) - Et * Math.sin(uR), wR = dt * Math.sin(uR) + Et * Math.cos(uR), rR = GR([0, -yR, tR]);
      return {
        LowerBody: {
          timeFraction: RR,
          position: rR,
          rotation: GR([0, 0, 0])
        },
        UpperBody: {
          timeFraction: RR,
          position: rR,
          rotation: GR([uR, 0, qR])
        },
        HeadMesh: {
          timeFraction: RR,
          position: GR([0, KR - dt - yR, wR - Et + tR]),
          rotation: GR([uR + ZR, 0, qR])
        },
        LegLeftMesh: {
          timeFraction: RR,
          rotation: GR([iR[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: RR,
          rotation: GR([iR[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: RR,
          rotation: GR([fR, 0, VR])
        },
        ArmRightMesh: {
          timeFraction: RR,
          rotation: GR([fR, 0, -VR])
        }
      }
    }

    function Ft(RR, JR, GR) {
      return jt(Qt, RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Tt(RR) {
      return "number" === typeof RR ? [RR, RR] : RR
    }

    function st(RR, JR, GR) {
      const {
        rise: yR = 0,
        shift: tR = 0,
        torso: uR = 0,
        twist: ZR = 0,
        tilt: qR = 0,
        nod: iR = 0,
        cock: fR = 0,
        arms: VR = 0,
        spread: KR = 0
      } = JR, [wR, rR] = Tt(VR), [eR, aR] = Tt(KR);
      return {
        TorsoNode: {
          timeFraction: RR,
          position: GR([0, yR, tR]),
          rotation: GR([uR, ZR, qR])
        },
        HeadMesh: {
          timeFraction: RR,
          rotation: GR([iR, 0, fR])
        },
        ArmLeftMesh: {
          timeFraction: RR,
          rotation: GR([wR, 0, eR])
        },
        ArmRightMesh: {
          timeFraction: RR,
          rotation: GR([rR, 0, -aR])
        }
      }
    }
    const ht = [1.0625, -1, 0];

    function Ru(RR) {
      return "number" === typeof RR ? [RR, RR] : RR
    }

    function Ju(RR, JR, GR) {
      const {
        drop: yR = 0,
        shift: tR = 0,
        torso: uR = 0,
        tilt: ZR = 0,
        nod: qR = 0,
        cock: iR = 0,
        legs: fR = [0, 0],
        arms: VR = 0,
        spread: KR = 0
      } = JR, [wR, rR] = Ru(VR), [eR, aR] = Ru(KR), LR = -uR, nR = -ZR, [UR, WR, AR] = function(RR, JR) {
        const [GR, yR, tR] = [-ht[0], ht[1], -ht[2]], uR = GR * Math.cos(JR) - yR * Math.sin(JR), ZR = GR * Math.sin(JR) + yR * Math.cos(JR);
        return [uR - GR, -(ZR * Math.cos(RR) - tR * Math.sin(RR) - yR), ZR * Math.sin(RR) + tR * Math.cos(RR) - tR]
      }(LR, nR), CR = GR([0, -yR, tR]);
      return {
        TorsoNode: {
          timeFraction: RR,
          position: GR([UR, WR - yR, AR + tR]),
          rotation: GR([LR, 0, nR])
        },
        HeadMesh: {
          timeFraction: RR,
          rotation: GR([-qR, 0, -iR])
        },
        ArmLeftMesh: {
          timeFraction: RR,
          rotation: GR([-wR, 0, -eR])
        },
        ArmRightMesh: {
          timeFraction: RR,
          rotation: GR([-rR, 0, aR])
        },
        LegLeftMesh: {
          timeFraction: RR,
          position: CR,
          rotation: GR([-fR[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: RR,
          position: CR,
          rotation: GR([-fR[1], 0, 0])
        }
      }
    }
    var Gu = GR(38275),
      yu = GR(39630),
      tu = GR(39862);

    function uu(RR, JR, GR) {
      var yR, tR;
      const uR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return RR + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - RR) * GR
        },
        [ZR, qR] = null !== (yR = RR.legs) && void 0 !== yR ? yR : [0, 0],
        [iR, fR] = null !== (tR = JR.legs) && void 0 !== tR ? tR : [0, 0];
      return {
        drop: uR(RR.drop, JR.drop),
        shift: uR(RR.shift, JR.shift),
        torso: uR(RR.torso, JR.torso),
        nod: uR(RR.nod, JR.nod),
        tilt: uR(RR.tilt, JR.tilt),
        legs: [uR(ZR, iR), uR(qR, fR)],
        arms: uR(RR.arms, JR.arms),
        spread: uR(RR.spread, JR.spread)
      }
    }
    const Zu = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      qu = Ft(4400, !0, [
        [0, Zu],
        [.16, {
          ...Zu,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Zu],
        [.44, {
          ...Zu,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, uu(Zu, Yt, .7)],
        [.66, uu(Zu, Yt, .78)],
        [.74, uu(Zu, kt, .65)],
        [.86, {
          ...Zu,
          drop: .14
        }],
        [1, Zu]
      ], "catmull-rom-spline"),
      iu = {
        ...Zu,
        drop: .14,
        torso: .3,
        spread: .4
      },
      fu = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Vu = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Ku = {
        caveGolem: qu,
        magmaGolem: Ft(3600, !0, [
          [0, iu],
          [.12, {
            ...iu,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...iu,
            tilt: -.08
          }],
          [.4, {
            ...iu,
            tilt: .06,
            drop: .11
          }],
          [.52, uu(iu, Yt, .9)],
          [.62, uu(iu, kt, .8)],
          [.7, uu(iu, kt, .45)],
          [.78, uu(iu, kt, .85)],
          [.9, {
            ...iu,
            drop: .17
          }],
          [1, iu]
        ], "catmull-rom-spline"),
        frostWraith: function(RR, JR, GR) {
          return jt(st, RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, fu],
          [.14, {
            ...fu,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...fu,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...fu,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...fu,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...fu,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...fu,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...fu,
            rise: .16,
            tilt: -.04
          }],
          [1, fu]
        ], "catmull-rom-spline"),
        tikiTerror: function(RR, JR, GR) {
          return jt(Ju, RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Vu],
          [.16, {
            ...Vu,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Vu],
          [.44, {
            ...Vu,
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
            ...Vu,
            drop: .1
          }],
          [1, Vu]
        ], "catmull-rom-spline")
      },
      wu = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      ru = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      eu = Object.fromEntries(Object.entries(Ku).map((RR => {
        let [JR, GR] = RR;
        return [JR, (0, tu.c)((0, Gu.h)(GR), JR)]
      })));

    function au(RR) {
      const JR = function(RR) {
        var JR;
        const GR = (0, yu.d)(RR).poseRig;
        return null !== (JR = ru[RR]) && void 0 !== JR ? JR : void 0 === GR ? null : wu[GR]
      }(RR);
      return null === JR ? null : eu[JR]
    }

    function Lu(RR) {
      return {
        "--difficulty-colour": RR
      }
    }
    const nu = (0, MR.lazy)((() => (0, St.b)(GR.e(229).then((() => GR(53531))), (RR => RR.MobPreview))));

    function Uu(RR) {
      var JR, GR, yR;
      let {
        picker: tR,
        controller: uR
      } = RR;
      const {
        t: ZR
      } = (0, it.A)(), qR = Xt(), {
        page: iR
      } = tR;
      return (0, Vt.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: qR,
        onKeyDown: RR => {
          "ArrowLeft" === RR.key ? (RR.preventDefault(), RR.stopPropagation(), uR.previous()) : "ArrowRight" === RR.key ? (RR.preventDefault(), RR.stopPropagation(), uR.next()) : Ct(RR)
        },
        style: Lu(iR.colour),
        children: [(0, Vt.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Vt.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: tR.dungeonName
          }), (0, Vt.jsx)(At.l, {
            padIgnore: !0,
            onClick: uR.dismiss
          })]
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Vt.jsx)(At.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !tR.canPrevious,
              onClick: uR.previous,
              children: (0, Vt.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Vt.jsx)(zt.d, {
                  name: "angle-up"
                })
              })
            }), (0, Vt.jsxs)("div", {
              className: Jt()("SkyblockBossPickerBoss", {
                Locked: !iR.unlocked
              }),
              children: [null !== iR.bossMobType && (0, Vt.jsx)(MR.Suspense, {
                fallback: (0, Vt.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Vt.jsx)(nu, {
                  className: "SkyblockBossPickerModel",
                  mobType: iR.bossMobType,
                  variation: iR.bossMobVariation,
                  animation: null !== (JR = au(iR.bossMobType)) && void 0 !== JR ? JR : void 0
                })
              }), null === iR.bossMobType && (0, Vt.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Vt.jsx)(At.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !tR.canNext,
              onClick: uR.next,
              children: (0, Vt.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Vt.jsx)(zt.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Vt.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [iR.beaten && (0, Vt.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), iR.label]
            }), (0, Vt.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (GR = iR.bossName) && void 0 !== GR ? GR : "???"
            }), (0, Vt.jsxs)("span", {
              className: Jt()("SkyblockBossPickerRecord", {
                Locked: null !== iR.lockedHint
              }),
              children: [null !== iR.lockedHintHighlight && (0, Vt.jsxs)(Vt.Fragment, {
                children: [iR.lockedHintHighlight.before, (0, Vt.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Lu(iR.lockedHintHighlight.colour),
                  children: [null !== iR.lockedHintHighlight.icon && (0, Vt.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: iR.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), iR.lockedHintHighlight.name]
                }), iR.lockedHintHighlight.after]
              }), null === iR.lockedHintHighlight && (null !== (yR = iR.lockedHint) && void 0 !== yR ? yR : iR.summary)]
            })]
          }), (0, Vt.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: tR.pages.map((RR => (0, Vt.jsx)("span", {
              className: Jt()("SkyblockBossPickerDot", {
                Current: RR.current,
                Locked: !RR.unlocked
              }),
              style: Lu(RR.colour)
            }, RR.difficulty)))
          }), (0, Vt.jsx)(At.r, {
            className: "SkyblockBossPickerFight",
            disabled: !iR.unlocked,
            onClick: uR.enter,
            children: ZR("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Wu(RR) {
      let {
        dungeon: JR,
        select: GR
      } = RR;
      return (0, Vt.jsxs)(At.g, {
        className: Jt()("SkyblockDungeonCard", {
          Selected: JR.selected
        }),
        onClick: () => {
          GR(JR.id)
        },
        children: [(0, Vt.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Vt.jsx)("strong", {
            children: JR.name
          }), (0, Vt.jsx)("span", {
            children: JR.beatenSummary
          })]
        }), (0, Vt.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: JR.difficulties.map((RR => (0, Vt.jsxs)("span", {
            className: Jt()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: RR.beaten
            }),
            style: Lu(RR.colour),
            title: RR.summary,
            children: [RR.beaten && (0, Vt.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), RR.label]
          }, RR.difficulty)))
        })]
      })
    }

    function Au(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(kJ, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt();
      return GR.enabled ? (0, Vt.jsxs)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [GR.picker && (0, Vt.jsx)(Uu, {
          picker: GR.picker,
          controller: JR
        }), !GR.picker && (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: yR("skyblockGame:dungeons")
              }), (0, Vt.jsx)("p", {
                children: yR("skyblockGame:dungeonsIntro")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Vt.jsx)("div", {
              className: "SkyblockDungeonList",
              children: GR.dungeons.map((RR => (0, Vt.jsx)(Wu, {
                dungeon: RR,
                select: JR.select
              }, RR.id)))
            }), GR.detail && (0, Vt.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Vt.jsx)("h3", {
                children: GR.detail.name
              }), (0, Vt.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: GR.detail.difficulties.map((RR => (0, Vt.jsxs)("li", {
                  className: Jt()("SkyblockDungeonRecord", {
                    Beaten: RR.beaten
                  }),
                  children: [(0, Vt.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Lu(RR.colour),
                    children: [RR.beaten && (0, Vt.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), RR.label]
                  }), (0, Vt.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: RR.summary
                  })]
                }, RR.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Cu(RR) {
      let {
        collection: JR,
        select: GR
      } = RR;
      return (0, Vt.jsxs)(At.g, {
        className: Jt()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: JR.selected,
          Locked: JR.locked
        }),
        ariaPressed: JR.selected,
        onClick: () => {
          GR(JR.id)
        },
        children: [(0, Vt.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Vt.jsx)(ut.b, {
            itemName: JR.icon,
            amount: 0
          })
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Vt.jsx)("strong", {
              children: JR.name
            }), (0, Vt.jsx)("span", {
              children: JR.tier
            })]
          }), (0, Vt.jsx)(Mt, {
            percent: JR.percent,
            label: `${JR.name}: ${JR.progress}`
          }), (0, Vt.jsx)("span", {
            className: "SkyblockSkillXp",
            children: JR.progress
          })]
        })]
      })
    }

    function Xu(RR) {
      let {
        collection: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)();
      return (0, Vt.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Vt.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Vt.jsx)(ut.b, {
            itemName: JR.icon,
            amount: 0
          })
        }), (0, Vt.jsx)("h3", {
          children: JR.name
        }), (0, Vt.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: JR.tier
        }), (0, Vt.jsx)("p", {
          children: JR.locked ? GR("skyblockGame:collectionLocked") : JR.count
        }), null !== JR.nextReward && (0, Vt.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Vt.jsx)("strong", {
            children: GR("skyblockGame:collectionNextReward")
          }), (0, Vt.jsx)("span", {
            children: JR.nextReward
          })]
        }), (0, Vt.jsx)(Mt, {
          percent: JR.percent,
          label: JR.progress
        }), (0, Vt.jsx)("p", {
          children: JR.progress
        })]
      })
    }

    function Mu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(aG, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt();
      return GR.enabled ? (0, Vt.jsx)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: yR("skyblockGame:collections")
              }), (0, Vt.jsxs)("p", {
                children: [yR("skyblockGame:collectionsIntro"), " ", GR.tiersUnlocked]
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: GR.categories.map((RR => (0, Vt.jsxs)(At.g, {
              className: Jt()("SkyblockCollectionCategory", {
                Selected: RR.selected
              }),
              ariaPressed: RR.selected,
              padTabSelected: RR.selected,
              onClick: () => {
                JR.selectCategory(RR.id)
              },
              children: [(0, Vt.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Vt.jsx)(ut.b, {
                  itemName: RR.icon,
                  amount: 0
                })
              }), (0, Vt.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Vt.jsx)("strong", {
                  children: RR.label
                }), (0, Vt.jsx)("span", {
                  children: RR.tiers
                })]
              })]
            }, RR.id)))
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Vt.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: GR.collections.map((RR => (0, Vt.jsx)(Cu, {
                collection: RR,
                select: JR.select
              }, RR.id)))
            }), GR.detail && (0, Vt.jsx)(Xu, {
              collection: GR.detail
            })]
          })]
        })
      }) : null
    }
    const Bu = ["completed", "active", "available", "locked"],
      lu = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function pu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(gG, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt();
      return GR.enabled ? (0, Vt.jsx)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: yR("skyblockDevQuests:title")
              }), (0, Vt.jsx)("p", {
                children: yR("skyblockDevQuests:intro")
              })]
            }), (0, Vt.jsx)(At.l, {
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Bu.map((RR => (0, Vt.jsx)("span", {
              className: Jt()("SkyblockQuestGraphLegendState", RR),
              children: yR(`skyblockDevQuests:state_${RR}`)
            }, RR))), lu.map((RR => (0, Vt.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Vt.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Vt.jsx)("line", {
                  className: Jt()("SkyblockQuestGraphEdge", RR),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), yR(`skyblockDevQuests:edge_${RR}`)]
            }, RR)))]
          }), (0, Vt.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Vt.jsxs)("div", {
              className: Jt()("SkyblockQuestGraphCanvas", {
                Planning: GR.planning
              }),
              style: {
                width: GR.width,
                height: GR.height
              },
              children: [(0, Vt.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: GR.width,
                height: GR.height,
                "aria-hidden": "true",
                children: [(0, Vt.jsx)("defs", {
                  children: (0, Vt.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Vt.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), GR.edges.map((RR => (0, Vt.jsx)("path", {
                  className: Jt()("SkyblockQuestGraphEdge", RR.kind, {
                    InPlan: RR.inPlan
                  }),
                  d: RR.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, RR.key)))]
              }), GR.nodes.map((RR => (0, Vt.jsxs)("button", {
                type: "button",
                className: Jt()("SkyblockQuestGraphNode", RR.state, {
                  InPlan: RR.inPlan,
                  Hovered: RR.hovered
                }),
                style: {
                  left: RR.left,
                  top: RR.top,
                  width: 190,
                  height: 52
                },
                title: RR.id,
                onMouseEnter: () => {
                  JR.hover(RR.id)
                },
                onMouseLeave: () => {
                  JR.hover(null)
                },
                onFocus: () => {
                  JR.hover(RR.id)
                },
                onBlur: () => {
                  JR.hover(null)
                },
                onClick: () => {
                  JR.jump(RR.id)
                },
                children: [(0, Vt.jsx)("strong", {
                  children: RR.name
                }), (0, Vt.jsx)("span", {
                  children: RR.detail
                })]
              }, RR.id)))]
            })
          })]
        })
      }) : null
    }
    const gu = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      bu = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${zG}ms`,
        "--forge-duration": "2150ms"
      },
      vu = Array.from({
        length: 18
      }, ((RR, JR) => ({
        "--ember-left": `${(4+92*(.618034*JR%1)).toFixed(1)}%`,
        "--ember-size": 3 + JR % 3 * 2 + "px",
        "--ember-drift": 14 * (JR % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*JR%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*JR%8).toFixed(2)}s`
      })));

    function Ou(RR) {
      if (RR.style.removeProperty("--part-size"), null === RR.parentElement || "wrap" === getComputedStyle(RR.parentElement).flexWrap) return;
      const JR = [...RR.children],
        GR = getComputedStyle(RR),
        yR = parseFloat(GR.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        tR = (RR.clientHeight - parseFloat(GR.rowGap) * (JR.length - 1)) / JR.length,
        uR = JR.map((RR => {
          const JR = getComputedStyle(RR),
            GR = RR.querySelector("h3"),
            uR = RR.querySelector(".SkyblockForgeParts");
          if (null === GR || null === uR) return yR;
          const ZR = tR - parseFloat(JR.paddingTop) - parseFloat(JR.paddingBottom) - GR.offsetHeight - parseFloat(getComputedStyle(GR).marginBottom),
            qR = parseFloat(getComputedStyle(uR).columnGap),
            iR = uR.children.length;
          let fR = 0;
          for (let yR = 1; yR <= iR; yR++) {
            const RR = Math.ceil(iR / yR);
            fR = Math.max(fR, Math.min((uR.clientWidth - qR * (yR - 1)) / yR, (ZR - qR * (RR - 1)) / RR))
          }
          return fR
        }));
      RR.style.setProperty("--part-size", `${Math.floor(Math.max(yR,Math.min(...uR)))}px`)
    }

    function xu(RR) {
      var JR, GR, yR, tR, uR;
      let {
        controller: ZR
      } = RR;
      const qR = (0, ft.h)(QG, ZR.getSnapshot()),
        {
          t: iR
        } = (0, it.A)(),
        fR = Xt(),
        VR = function() {
          const RR = (0, MR.useRef)(null),
            JR = (0, MR.useRef)(null);
          return (0, MR.useLayoutEffect)((() => {
            null !== RR.current && Ou(RR.current)
          })), (0, MR.useCallback)((GR => {
            var yR;
            null === (yR = JR.current) || void 0 === yR || yR.disconnect(), JR.current = null, RR.current = GR, null !== GR && (JR.current = new ResizeObserver((() => {
              Ou(GR)
            })), JR.current.observe(GR))
          }), [])
        }(),
        wR = function(RR) {
          const JR = (0, MR.useRef)(null);
          return (0, MR.useLayoutEffect)((() => {
            const RR = JR.current;
            if (null !== RR) {
              RR.style.removeProperty("font-size");
              for (let JR = 1.7; JR > 1.1 && RR.scrollWidth > RR.clientWidth; JR -= .1) RR.style.fontSize = JR - .1 + "rem"
            }
          }), [RR]), (0, MR.useCallback)((RR => {
            JR.current = RR
          }), [])
        }(null === (JR = qR.preview) || void 0 === JR ? void 0 : JR.name),
        rR = (0, MR.useRef)(null),
        eR = (0, MR.useRef)({}),
        aR = qR.forging,
        LR = null !== (GR = null === aR || void 0 === aR ? void 0 : aR.preview.tier) && void 0 !== GR ? GR : 0,
        nR = null !== (yR = null === aR || void 0 === aR ? void 0 : aR.preview.named) && void 0 !== yR && yR,
        UR = (0, MR.useMemo)((() => {
          return null === aR ? null : {
            flames: (RR = LR, JR = nR, Array.from({
              length: 26 + 6 * RR + (JR ? 20 : 0)
            }, ((RR, JR) => {
              const GR = JR < 6,
                yR = Math.random() * Math.PI * 2,
                tR = GR ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                uR = Math.cos(yR) * tR,
                ZR = Math.sin(yR) * tR - 2 - 3 * Math.random(),
                qR = Math.random(),
                [iR, fR, VR] = GR ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : qR < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : qR < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [qR < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": iR,
                "--x0": `${(.15*uR).toFixed(2)}rem`,
                "--y0": `${(.15*ZR).toFixed(2)}rem`,
                "--x": `${uR.toFixed(2)}rem`,
                "--y": `${ZR.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${fR.toFixed(2)}rem`,
                "--duration": `${Math.round(VR)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: dG(LR, nR)
          };
          var RR, JR
        }), [null === aR || void 0 === aR ? void 0 : aR.id]);
      if (!qR.enabled) return null;
      const WR = qR.preview,
        AR = qR.arriving,
        CR = null !== AR && !AR.sameSword,
        XR = null !== WR && (0, Vt.jsx)(ut.b, {
          itemName: WR.baseSword,
          amount: 0,
          enchantmentTier: WR.enchantmentTier
        });
      return (0, Vt.jsx)(Wt.e, {
        show: qR.open,
        close: ZR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: fR,
          onKeyDown: Ct,
          children: [(0, Vt.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: vu.map(((RR, JR) => (0, Vt.jsx)("span", {
              style: RR
            }, JR)))
          }), (0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: iR("skyblockGame:forgeTitle")
              }), (0, Vt.jsx)("p", {
                children: iR("skyblockGame:forgeIntro")
              })]
            }), (0, Vt.jsx)(At.l, {
              onClick: ZR.dismiss
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Vt.jsx)("div", {
              ref: VR,
              className: Jt()("SkyblockForgeSlots", {
                Locked: null !== aR
              }),
              children: qR.slots.map((RR => (0, Vt.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Vt.jsx)("h3", {
                  children: RR.label
                }), (0, Vt.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: RR.parts.map((JR => (0, Vt.jsx)("button", {
                    type: "button",
                    className: Jt()("SkyblockForgePart", {
                      Selected: JR.selected,
                      Missing: JR.placeholder
                    }),
                    disabled: JR.placeholder,
                    title: JR.placeholder ? iR("skyblockGame:forgePickParts") : JR.itemName,
                    "aria-pressed": JR.selected,
                    onClick: () => {
                      ZR.select(RR.kind, JR.material)
                    },
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: JR.itemName,
                      amount: JR.owned
                    })
                  }, JR.material)))
                })]
              }, RR.kind)))
            }), (0, Vt.jsxs)("div", {
              className: Jt()("SkyblockForgeAnvil", {
                Named: null === WR || void 0 === WR ? void 0 : WR.named
              }),
              style: {
                "--tier": null === WR ? "transparent" : KR.kb[WR.enchantmentTier]
              },
              children: [(0, Vt.jsxs)("div", {
                className: Jt()("SkyblockForgeAltar", {
                  Forging: null !== aR
                }),
                style: null === aR ? void 0 : bu,
                children: [(0, Vt.jsxs)("div", {
                  className: Jt()("SkyblockForgeMount", {
                    Arrive: null !== AR
                  }),
                  children: [null === WR && (0, Vt.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: qR.unformedSword,
                      amount: 0
                    })
                  }), null !== WR && (0, Vt.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== WR && null === aR && (0, Vt.jsx)("div", {
                    ref: rR,
                    className: "SkyblockForgeFloat",
                    children: (0, Vt.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: XR
                    })
                  }), null !== WR && (0, Vt.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: jG.map(((RR, JR) => (0, Vt.jsx)("span", {
                      className: Jt()({
                        Rune: "" !== RR.rune
                      }),
                      style: RR.style,
                      children: RR.rune
                    }, JR)))
                  }), null !== aR && null !== UR && (0, Vt.jsxs)(Vt.Fragment, {
                    children: [(0, Vt.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: UR.flames.map(((RR, JR) => (0, Vt.jsx)("span", {
                        style: RR
                      }, JR)))
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: eR.current,
                      children: (0, Vt.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: XR
                      })
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (LR >= 4 || nR) && (0, Vt.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: UR.sparks.map(((RR, JR) => (0, Vt.jsx)("span", {
                        style: RR
                      }, JR)))
                    }), (0, Vt.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Vt.jsx)("p", {
                  className: Jt()("SkyblockForgeStatus", null === (tR = qR.status) || void 0 === tR ? void 0 : tR.tone),
                  children: null === (uR = qR.status) || void 0 === uR ? void 0 : uR.text
                })]
              }), null === WR && (0, Vt.jsx)("p", {
                className: Jt()("SkyblockForgeName Waiting", {
                  ArriveText: CR
                }),
                children: iR(qR.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== WR && (0, Vt.jsx)("h3", {
                ref: wR,
                className: Jt()("SkyblockForgeName", {
                  ArriveText: CR
                }),
                title: WR.name,
                children: WR.name
              }), (null === WR || void 0 === WR ? void 0 : WR.named) && (0, Vt.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: iR("skyblockGame:forgeSecret")
              }), (0, Vt.jsxs)(At.r, {
                className: "SkyblockForgeButton",
                disabled: !qR.canForge,
                title: null === WR ? void 0 : iR("skyblockGame:forgeCoalOwned", {
                  owned: String(qR.coalOwned)
                }),
                onClick: () => {
                  eR.current = function(RR) {
                    const JR = null === RR ? "none" : getComputedStyle(RR).transform,
                      GR = new DOMMatrixReadOnly("none" === JR ? void 0 : JR);
                    return {
                      "--settle-y": `${GR.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(GR.b,GR.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(rR.current), kG(), ZR.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [iR("skyblockGame:forgeButton"), null !== WR && (0, Vt.jsxs)("span", {
                  className: Jt()("SkyblockForgeCost", {
                    Short: WR.coalShort
                  }),
                  children: [(0, Vt.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Vt.jsx)(ut.b, {
                      itemName: NG.e,
                      amount: 0
                    })
                  }), WR.coalCost]
                })]
              })]
            }), (0, Vt.jsxs)("div", {
              className: Jt()("SkyblockForgeDetails", {
                Named: null === WR || void 0 === WR ? void 0 : WR.named
              }),
              children: [(0, Vt.jsx)("p", {
                className: Jt()("SkyblockForgeLore", {
                  ArriveText: CR
                }),
                title: null === WR || void 0 === WR ? void 0 : WR.lore,
                children: null === WR || void 0 === WR ? void 0 : WR.lore
              }), (0, Vt.jsxs)("dl", {
                className: Jt()("SkyblockForgeStats", {
                  ArriveText: CR
                }),
                children: [null === WR && gu.map((RR => (0, Vt.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Vt.jsx)("dt", {
                    children: iR(RR)
                  }), (0, Vt.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, RR))), null === WR || void 0 === WR ? void 0 : WR.stats.map((RR => (0, Vt.jsxs)("div", {
                  className: Jt()("SkyblockForgeStat", {
                    Better: RR.better
                  }),
                  children: [(0, Vt.jsx)("dt", {
                    children: RR.label
                  }), (0, Vt.jsx)("dd", {
                    children: RR.value
                  })]
                }, RR.label)))]
              }), (0, Vt.jsx)("ul", {
                className: Jt()("SkyblockForgeEffects", {
                  ArriveText: CR
                }),
                children: null === WR || void 0 === WR ? void 0 : WR.effects.map((RR => (0, Vt.jsx)("li", {
                  children: RR
                }, RR)))
              })]
            })]
          })]
        })
      })
    }
    var Nu = GR(39869);
    const Du = "Doom Rivet",
      Hu = "Doom Crest",
      ou = {
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

    function cu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(sG, JR.getSnapshot()),
        yR = Xt();
      return GR.enabled ? (0, Vt.jsx)(Nu.e, {
        keys: ou,
        open: GR.open,
        onDismiss: JR.dismiss,
        wallet: [{
          itemName: Du,
          amount: GR.rivetsOwned
        }, {
          itemName: Hu,
          amount: GR.crestsOwned
        }],
        deals: GR.deals.map((RR => ({
          ...RR,
          prices: [{
            itemName: Du,
            amount: RR.rivets,
            owned: GR.rivetsOwned
          }, {
            itemName: Hu,
            amount: RR.crests,
            owned: GR.crestsOwned
          }].filter((RR => {
            let {
              amount: JR
            } = RR;
            return JR > 0
          }))
        }))),
        rotatesAtMs: GR.rotatesAtMs,
        status: GR.status,
        pending: GR.pending,
        boughtCount: GR.boughtCount,
        onBuy: JR.buy,
        panelRef: yR,
        onKeyDown: Ct
      }) : null
    }

    function Pu(RR) {
      let {
        phase: JR,
        className: GR
      } = RR;
      return (0, Vt.jsx)("span", {
        className: Jt()("SkyblockMoon", `Moon-${JR}`, GR),
        "aria-hidden": "true"
      })
    }

    function Iu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(Jy, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)();
      return GR.enabled ? (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Jt()("SkyblockPassageChip", GR.open && "Open"),
          "aria-label": yR("skyblockGame:passageChipLabel", {
            phase: GR.phaseName
          }),
          title: yR("skyblockGame:passageChipLabel", {
            phase: GR.phaseName
          }),
          onMouseDown: RR => {
            RR.preventDefault()
          },
          onClick: JR.toggle,
          children: (0, Vt.jsx)(Pu, {
            phase: GR.phase
          }, GR.phase)
        })
      }) : null
    }

    function mu(RR) {
      let {
        fish: JR
      } = RR;
      return (0, Vt.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Vt.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Vt.jsx)(ut.b, {
            itemName: JR.itemName,
            amount: 0
          })
        }), (0, Vt.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: JR.displayName
          }), (0, Vt.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: JR.where
          })]
        })]
      })
    }

    function zu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(Jy, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt();
      return GR.enabled ? (0, Vt.jsx)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Vt.jsx)(Pu, {
              phase: GR.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: yR("skyblockGame:passageTitle")
              }), (0, Vt.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: GR.phaseName
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: yR("skyblockGame:passageIntro")
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Vt.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Vt.jsx)("h3", {
                children: yR("skyblockGame:passageVisiting")
              }), (0, Vt.jsx)("ul", {
                className: "SkyblockPassageList",
                children: GR.visitors.map((RR => (0, Vt.jsx)(mu, {
                  fish: RR
                }, RR.itemName)))
              })]
            }), (0, Vt.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== GR.resting && (0, Vt.jsxs)(Vt.Fragment, {
                children: [(0, Vt.jsx)("h3", {
                  children: yR("skyblockGame:passageResting")
                }), (0, Vt.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Vt.jsx)(mu, {
                    fish: GR.resting
                  })
                })]
              }), (0, Vt.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Vt.jsx)(Pu, {
                  phase: GR.nextPhase
                }), (0, Vt.jsx)("span", {
                  children: GR.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Su() {
      return (0, Vt.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((RR => (0, Vt.jsx)("i", {
          style: {
            "--sparkle-index": RR
          }
        }, RR)))
      })
    }

    function ju(RR) {
      var JR;
      let {
        charm: GR,
        view: yR,
        controller: tR
      } = RR;
      const {
        t: uR
      } = (0, it.A)(), ZR = yR.shop, qR = (null === (JR = yR.sparkle) || void 0 === JR ? void 0 : JR.id) === GR.id;
      return (0, Vt.jsxs)("li", {
        className: Jt()("SkyblockLampLightCharm", GR.owned && "Owned", GR.socketed && "Socketed"),
        children: [qR && (0, Vt.jsx)(Su, {}, yR.sparkle.count), (0, Vt.jsx)("h4", {
          children: GR.name
        }), (0, Vt.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: GR.effect
        }), (0, Vt.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: GR.lines.map((RR => (0, Vt.jsxs)("li", {
            className: Jt()("SkyblockLampLightOddsLine", "better" === RR.tone ? "Better" : "worse" === RR.tone ? "Worse" : "Same"),
            children: [(0, Vt.jsx)("span", {
              className: "Before",
              children: RR.before
            }), (0, Vt.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Vt.jsx)("span", {
              className: "After",
              children: RR.after
            })]
          }, RR.label)))
        }), (0, Vt.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: GR.owned ? GR.socketed ? (0, Vt.jsxs)(Vt.Fragment, {
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: uR("skyblockGame:lampLightSocketed")
            }), (0, Vt.jsx)(At.U, {
              disabled: !yR.canCommand,
              ariaLabel: uR("skyblockGame:lampLightRemoveLabel", {
                charm: GR.name
              }),
              onClick: () => {
                tR.socket(null)
              },
              children: uR("skyblockGame:lampLightRemove")
            })]
          }) : (0, Vt.jsx)(At.g, {
            disabled: !yR.canCommand || !ZR.heldRod,
            ariaLabel: uR("skyblockGame:lampLightSocketLabel", {
              charm: GR.name
            }),
            onClick: () => {
              tR.socket(GR.id)
            },
            children: uR("skyblockGame:lampLightSocket")
          }) : (0, Vt.jsx)(At.g, {
            disabled: !yR.canCommand || !GR.affordable,
            ariaLabel: uR("skyblockGame:lampLightBuyLabel", {
              item: GR.name,
              cost: GR.cost
            }),
            onClick: () => {
              tR.buy(GR.id)
            },
            children: GR.cost
          })
        })]
      })
    }

    function du(RR) {
      var JR;
      let {
        tint: GR,
        view: yR,
        controller: tR
      } = RR;
      const {
        t: uR
      } = (0, it.A)();
      return (0, Vt.jsxs)("li", {
        className: Jt()("SkyblockLampLightTint", GR.wearing && "Wearing"),
        style: {
          "--tint-colour": GR.colour
        },
        children: [(null === (JR = yR.sparkle) || void 0 === JR ? void 0 : JR.id) === GR.id && (0, Vt.jsx)(Su, {}, yR.sparkle.count), (0, Vt.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Vt.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: GR.name
        }), GR.wearing ? (0, Vt.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: uR("skyblockGame:lampLightWearing")
        }) : (0, Vt.jsx)(At.g, {
          disabled: !yR.canCommand || !GR.owned && !GR.affordable,
          ariaLabel: GR.owned ? uR("skyblockGame:lampLightWearLabel", {
            tint: GR.name
          }) : uR("skyblockGame:lampLightBuyLabel", {
            item: GR.name,
            cost: GR.cost
          }),
          onClick: () => {
            GR.owned ? tR.wearTint(GR.id) : tR.buy(GR.id)
          },
          children: GR.owned ? uR("skyblockGame:lampLightWear") : GR.cost
        })]
      })
    }

    function Eu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(ay, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = GR.shop;
      return (0, Vt.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Vt.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: GR.balance
          }), (0, Vt.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": GR.releasing,
            className: Jt()("SkyblockLampLightSwitch", GR.releasing && "On"),
            disabled: GR.releasing ? "ready" !== GR.status : !GR.canCommand,
            onClick: () => {
              JR.setRelease(!GR.releasing)
            },
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Vt.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), yR("skyblockGame:lampLightRelease")]
          }), (0, Vt.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: yR("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== GR.notice && (0, Vt.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: GR.notice
        }), null !== tR && (0, Vt.jsxs)(Vt.Fragment, {
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Vt.jsx)("h3", {
              children: yR("skyblockGame:lampLightCharms")
            }), (0, Vt.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: tR.oddsFor
            }), (0, Vt.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((RR => (0, Vt.jsx)("button", {
                type: "button",
                "aria-pressed": GR.situation === RR,
                className: Jt()("SkyblockLampLightSituation", GR.situation === RR && "Selected"),
                onClick: () => {
                  JR.setSituation(RR)
                },
                children: yR("open" === RR ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, RR)))
            })]
          }), !tR.heldRod && (0, Vt.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: yR("skyblockGame:lampLightHoldRod")
          }), (0, Vt.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: tR.charms.map((RR => (0, Vt.jsx)(ju, {
              charm: RR,
              view: GR,
              controller: JR
            }, RR.id)))
          }), (0, Vt.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Vt.jsx)("h3", {
              children: yR("skyblockGame:lampLightTints")
            })
          }), (0, Vt.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Vt.jsxs)("li", {
              className: Jt()("SkyblockLampLightTint", "Islands", tR.wearingIslandColours && "Wearing"),
              children: [(0, Vt.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Vt.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: yR("skyblockGame:lampLightIslandColours")
              }), tR.wearingIslandColours ? (0, Vt.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: yR("skyblockGame:lampLightWearing")
              }) : (0, Vt.jsx)(At.g, {
                disabled: !GR.canCommand,
                ariaLabel: yR("skyblockGame:lampLightWearLabel", {
                  tint: yR("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  JR.wearTint(null)
                },
                children: yR("skyblockGame:lampLightWear")
              })]
            }), tR.tints.map((RR => (0, Vt.jsx)(du, {
              tint: RR,
              view: GR,
              controller: JR
            }, RR.id)))]
          })]
        })]
      })
    }

    function Yu(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(ay, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)();
      return GR.releasing ? (0, Vt.jsx)(yt.d, {
        children: (0, Vt.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            JR.setRelease(!1)
          },
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Vt.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [yR("skyblockGame:lampLightReleasing"), " \xb7 ", GR.balance]
          }), (0, Vt.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: yR("skyblockGame:lampLightKeepCatches")
          }), null !== GR.gained && (0, Vt.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: GR.gained.text
          }, GR.gained.count)]
        })
      }) : null
    }

    function ku(RR) {
      let {
        island: JR,
        view: GR,
        aim: yR
      } = RR;
      const {
        t: tR
      } = (0, it.A)(), uR = JR.featuredFish;
      return (0, Vt.jsxs)("li", {
        className: Jt()("SkyblockKeepersChairIsland", `Island-${JR.id}`, JR.favoured && "Aimed", !JR.relit && "Dark"),
        children: [(0, Vt.jsx)("h3", {
          children: JR.name
        }), JR.relit && null !== uR ? (0, Vt.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: tR("skyblockGame:keepersChairTideNotice")
          }), (0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Vt.jsx)(ut.b, {
              itemName: uR.itemName,
              amount: 0
            })
          }), (0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: uR.displayName
          })]
        }) : (0, Vt.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: tR("skyblockGame:keepersChairDark")
          })
        }), JR.relit && (JR.favoured ? (0, Vt.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: tR("skyblockGame:keepersChairAimed")
        }) : (0, Vt.jsx)(At.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !GR.canAim,
          ariaLabel: tR("skyblockGame:keepersChairAimLabel", {
            island: JR.name
          }),
          onClick: () => {
            yR(JR.id)
          },
          children: tR("skyblockGame:keepersChairAim")
        }))]
      }, JR.favoured ? GR.aimedCount : 0)
    }

    function Qu(RR) {
      let {
        controller: JR,
        lampLight: GR
      } = RR;
      const yR = (0, ft.h)(qy, JR.getSnapshot()),
        tR = (0, ft.h)(ay, GR.getSnapshot()),
        [uR, ZR] = (0, MR.useState)("lamp"),
        {
          t: qR
        } = (0, it.A)(),
        iR = Xt();
      if (!yR.enabled) return null;
      const fR = "light" === uR && tR.enabled;
      return (0, Vt.jsx)(Wt.e, {
        show: yR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: Jt()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", fR && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: iR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: qR("skyblockGame:keepersChairTitle")
              }), (0, Vt.jsx)("p", {
                children: qR(fR ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              ariaLabel: qR("skyblockGame:keepersChairClose"),
              onClick: JR.dismiss
            })]
          }), tR.enabled && (0, Vt.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((RR => (0, Vt.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === RR === fR,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === RR === fR ? "true" : void 0,
              className: Jt()("SkyblockKeepersChairTab", "light" === RR === fR && "Selected"),
              onClick: () => {
                ZR(RR)
              },
              children: [qR("lamp" === RR ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === RR && (0, Vt.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: tR.balance
              })]
            }, RR)))
          }), fR ? (0, Vt.jsx)(Eu, {
            controller: GR
          }) : (0, Vt.jsx)(Fu, {
            view: yR,
            controller: JR
          })]
        })
      })
    }

    function Fu(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)();
      return (0, Vt.jsxs)(Vt.Fragment, {
        children: [(0, Vt.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: JR.islands.map((RR => (0, Vt.jsx)(ku, {
            island: RR,
            view: JR,
            aim: GR.aim
          }, RR.id)))
        }), null !== JR.almanac && (0, Vt.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: yR("skyblockGame:passageTitle")
          }), (0, Vt.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Vt.jsx)(Pu, {
              phase: JR.almanac.phase
            }), JR.almanac.phaseName]
          }), (0, Vt.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Vt.jsx)(Pu, {
              phase: JR.almanac.nextPhase
            }), JR.almanac.next]
          })]
        }), (0, Vt.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: yR("skyblockGame:keepersChairFavour")
          }), JR.aimed && (0, Vt.jsx)(At.U, {
            className: "SkyblockKeepersChairRest",
            disabled: !JR.canAim,
            onClick: () => {
              GR.aim(null)
            },
            children: yR("skyblockGame:keepersChairRest")
          })]
        }), null !== JR.status && (0, Vt.jsx)("p", {
          className: Jt()("SkyblockKeepersChairStatus", "refused" === JR.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: JR.status.text
        })]
      })
    }

    function Tu(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(fy, JR.getSnapshot());
      if (!yR.enabled) return null;
      const tR = yR.freshCount > 0 ? GR("skyblockGame:reachLogOpenNews", {
        count: yR.freshCount
      }) : GR("skyblockGame:reachLogOpen");
      return (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsxs)("button", {
          type: "button",
          className: Jt()("SkyblockReachLogButton", yR.freshCount > 0 && "HasNews", yR.pending && "Pending"),
          "aria-label": tR,
          title: tR,
          onClick: JR.ask,
          children: [yR.news && (0, Vt.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${yR.newsToken}`), (0, Vt.jsx)("span", {
            className: Jt()("SkyblockReachLogIcon", yR.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Vt.jsx)(ut.b, {
              itemName: Ky,
              amount: 0
            })
          }, `icon:${yR.newsToken}`), yR.freshCount > 0 && (0, Vt.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: yR.freshCount
          })]
        })
      })
    }

    function su(RR) {
      let {
        gift: JR
      } = RR;
      return (0, Vt.jsx)("li", {
        className: Jt()("SkyblockRegularsGift", JR.given && "Given"),
        children: JR.text
      })
    }

    function hu(RR) {
      let {
        regular: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)();
      return (0, Vt.jsxs)("li", {
        className: Jt()("SkyblockRegularsCard", JR.tagged ? "Tagged" : "Untagged", JR.resting && "Resting"),
        children: [(0, Vt.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: JR.fishName,
            children: (0, Vt.jsx)(ut.b, {
              itemName: JR.itemName,
              amount: 0
            })
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Vt.jsx)("h3", {
              children: JR.name
            }), (0, Vt.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: JR.fishName
            })]
          })]
        }), (0, Vt.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: JR.line
        }), (0, Vt.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: JR.size
          }), JR.tagged && (0, Vt.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: JR.resting ? GR("skyblockGame:regularsResting") : JR.meetings
          })]
        }), (0, Vt.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: JR.chance
        }), (0, Vt.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: JR.gifts.map((RR => (0, Vt.jsx)(su, {
            gift: RR
          }, RR.text)))
        }), JR.history.length > 0 && (0, Vt.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: JR.history.map(((RR, JR) => (0, Vt.jsx)("li", {
            children: RR
          }, JR)))
        })]
      })
    }

    function RZ(RR) {
      let {
        controller: JR,
        island: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)(), tR = (0, ft.h)(Dy, JR.getSnapshot()), uR = tR.islands.find((RR => RR.id === GR));
      if (!tR.enabled || void 0 === uR) return null;
      const ZR = yR("skyblockGame:regularsOpen");
      return (0, Vt.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": ZR,
        title: ZR,
        onClick: () => {
          JR.openIsland(GR)
        },
        children: [(0, Vt.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: yR("skyblockGame:regularsTitle")
        }), uR.regulars.map((RR => (0, Vt.jsx)("span", {
          className: Jt()("SkyblockRegularsStripIcon", RR.tagged && "Tagged"),
          title: RR.name,
          children: (0, Vt.jsx)(ut.b, {
            itemName: RR.itemName,
            amount: 0
          })
        }, RR.id)))]
      })
    }

    function JZ(RR) {
      var JR;
      let {
        controller: GR
      } = RR;
      const yR = (0, ft.h)(Dy, GR.getSnapshot()),
        {
          t: tR
        } = (0, it.A)(),
        uR = Xt();
      if (!yR.enabled) return null;
      const ZR = null !== (JR = yR.islands.find((RR => RR.id === yR.selected))) && void 0 !== JR ? JR : null;
      return (0, Vt.jsx)(Wt.e, {
        show: yR.open,
        close: GR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: uR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: tR("skyblockGame:regularsTitle")
              }), (0, Vt.jsx)("p", {
                children: tR("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: GR.dismiss
            })]
          }), (0, Vt.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: yR.islands.map((RR => {
              const JR = RR.id === yR.selected;
              return (0, Vt.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": JR,
                "data-pad-tab": !0,
                "data-pad-selected": JR ? "true" : void 0,
                className: Jt()("SkyblockReachLogTab", `Island-${RR.id}`, JR && "Selected", RR.charm.given && "GoldPage"),
                onClick: () => {
                  GR.selectIsland(RR.id)
                },
                children: (0, Vt.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: RR.name
                })
              }, RR.id)
            }))
          }), (0, Vt.jsxs)("div", {
            className: Jt()("SkyblockRegularsPage", null !== ZR && `Island-${ZR.id}`),
            role: "tabpanel",
            children: [(0, Vt.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: tR("skyblockGame:regularsHow")
            }), null !== ZR && (0, Vt.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: ZR.regulars.map((RR => (0, Vt.jsx)(hu, {
                regular: RR
              }, RR.id)))
            })]
          }), null !== ZR && (0, Vt.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Vt.jsx)("span", {
              className: Jt()("SkyblockRegularsCharm", ZR.charm.given && "Given"),
              children: ZR.charm.text
            })
          })]
        })
      })
    }
    const GZ = [{
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
      yZ = Array.from({
        length: 6
      }, ((RR, JR) => ({
        "--x": `${(88*(.618034*JR%1)).toFixed(1)}%`,
        "--y": `${(10+37*JR%70).toFixed(1)}%`,
        "--size": 7 + JR % 3 * 3 + "rem",
        "--drift-x": 3 * (JR % 3 - 1) + "rem",
        "--drift-y": 2 * (JR % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + JR % 4 * 3 + "s",
        "--delay": 2.5 * -JR + "s"
      }))),
      tZ = Array.from({
        length: 14
      }, ((RR, JR) => ({
        "--left": `${(3+94*((.618034*JR+.3)%1)).toFixed(1)}%`,
        "--size": 4 + JR % 4 * 2 + "px",
        "--sway": JR % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*JR%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*JR%12).toFixed(2)}s`
      }))),
      uZ = (0, MR.memo)((function(RR) {
        let {
          island: JR
        } = RR;
        return (0, Vt.jsxs)("div", {
          className: Jt()("SkyblockReachLogDepths", null !== JR && `Island-${JR}`),
          "aria-hidden": "true",
          children: [GZ.map(((RR, JR) => (0, Vt.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: RR
          }, `shaft${JR}`))), yZ.map(((RR, JR) => (0, Vt.jsx)("span", {
            className: Jt()("SkyblockReachLogMote", JR % 2 === 1 && "Violet"),
            style: RR
          }, `mote${JR}`))), tZ.map(((RR, JR) => (0, Vt.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: RR
          }, `bubble${JR}`)))]
        })
      })),
      ZZ = 100;

    function qZ(RR) {
      let {
        view: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)();
      if (null === JR || 0 === JR.total) return null;
      const yR = ZZ * JR.aspect,
        tR = GR("skyblockGame:hiddenWatersCount", {
          found: JR.found,
          total: JR.total
        });
      return (0, Vt.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${GR("skyblockGame:hiddenWatersTitle")}: ${tR}`,
        children: [(0, Vt.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${yR}`,
          "aria-hidden": "true",
          children: [JR.islands.map(((RR, JR) => (0, Vt.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (RR.left + RR.width / 2) * ZZ,
            cy: (RR.top + RR.height / 2) * yR,
            rx: RR.width / 2 * ZZ,
            ry: RR.height / 2 * yR
          }, JR))), JR.pins.map(((RR, JR) => (0, Vt.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: RR.left * ZZ,
            cy: RR.top * yR,
            r: 13
          }, JR)))]
        }), (0, Vt.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: GR("skyblockGame:hiddenWatersTitle")
          }), (0, Vt.jsx)("span", {
            className: JR.found === JR.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: tR
          })]
        })]
      })
    }

    function iZ(RR) {
      let {
        view: JR,
        island: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)(), tR = null === JR || void 0 === JR ? void 0 : JR.glimpses.get(GR);
      return void 0 === tR || 0 === tR.length ? null : (0, Vt.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Vt.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: yR("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Vt.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: tR.map((RR => (0, Vt.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Vt.jsx)(ut.b, {
              itemName: RR,
              amount: 0
            })
          }, RR)))
        })]
      })
    }
    const fZ = ["Bronze", "Silver", "Gold"],
      VZ = [{
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
      KZ = VZ.slice(0, 2);

    function wZ(RR) {
      return RR ? VZ : KZ
    }

    function rZ(RR) {
      let {
        fish: JR,
        letGoShown: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)();
      return (0, Vt.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [fZ.map(((RR, GR) => {
          const tR = GR < JR.marks;
          return (0, Vt.jsx)("span", {
            className: Jt()("SkyblockReachLogPip", RR, tR && "Earned", tR && JR.fresh && GR === JR.marks - 1 && "Newest"),
            title: yR(Vy[GR])
          }, RR)
        })), (0, Vt.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), wZ(GR).map(((RR, GR) => (0, Vt.jsx)("span", {
          className: Jt()("SkyblockReachLogRibbon", RR.className, !0 === JR.ribbons[GR] && "Earned"),
          title: yR(RR.titleKey)
        }, RR.className)))]
      })
    }

    function eZ(RR) {
      let {
        letGoShown: JR,
        haloShown: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)();
      return (0, Vt.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Vt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: yR("skyblockGame:reachLogMarks"),
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), yR("skyblockGame:reachLogLegendMarks")]
        }), wZ(JR).map((RR => (0, Vt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: yR(RR.titleKey),
          children: [(0, Vt.jsx)("span", {
            className: Jt()("SkyblockReachLogRibbon", RR.className, "Earned")
          }), yR(RR.legendKey)]
        }, RR.className))), (0, Vt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: yR("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), yR("skyblockGame:reachLogLegendGlimmer")]
        }), GR && (0, Vt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: yR("skyblockGame:reachLogHaloTitle"),
          children: [(0, Vt.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), yR("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function aZ(RR) {
      let {
        returner: JR
      } = RR;
      return (0, Vt.jsxs)("div", {
        className: Jt()("SkyblockReachLogReturner", JR.back && "Back"),
        children: [(0, Vt.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Vt.jsx)(ut.b, {
            itemName: JR.itemName,
            amount: 0
          })
        }), (0, Vt.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: JR.line
        })]
      })
    }

    function LZ(RR) {
      let {
        fish: JR,
        letGoShown: GR
      } = RR;
      const {
        t: yR
      } = (0, it.A)();
      return (0, Vt.jsxs)("li", {
        className: Jt()("SkyblockReachLogCard", JR.caught ? "Caught" : "Unknown", JR.marks >= 3 && "GoldCard", JR.fresh && "Fresh", JR.visitor && "Visitor"),
        children: [JR.visitor && (0, Vt.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: yR("skyblockGame:reachLogVisitor")
        }), JR.fresh && Array.from({
          length: 4
        }, ((RR, JR) => (0, Vt.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, JR))), (0, Vt.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [JR.halo && (0, Vt.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: yR("skyblockGame:reachLogHaloTitle")
          }), (0, Vt.jsx)(ut.b, {
            itemName: JR.itemName,
            amount: 0
          }), JR.glimmer && (0, Vt.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: yR("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Vt.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: JR.name
        }), (0, Vt.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: JR.chance
        }), (0, Vt.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: JR.best
        }), (0, Vt.jsx)(rZ, {
          fish: JR,
          letGoShown: GR
        })]
      })
    }

    function nZ(RR) {
      let {
        page: JR,
        letGoShown: GR,
        hiddenWaters: yR
      } = RR;
      const {
        t: tR
      } = (0, it.A)();
      return JR.awake ? (0, Vt.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: JR.fish.map((RR => (0, Vt.jsx)(LZ, {
          fish: RR,
          letGoShown: GR
        }, RR.itemName)))
      }) : (0, Vt.jsxs)(Vt.Fragment, {
        children: [(0, Vt.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: tR("skyblockGame:reachLogAsleep")
        }), (0, Vt.jsx)(iZ, {
          view: yR,
          island: JR.id
        })]
      })
    }

    function UZ(RR) {
      var JR, GR;
      let {
        controller: yR,
        regulars: tR,
        hiddenWaters: uR
      } = RR;
      const ZR = (0, ft.h)(fy, yR.getSnapshot()),
        qR = function(RR) {
          return (0, ft.h)(Iy, RR.getSnapshot())
        }(uR),
        iR = (0, ft.h)(Dy, tR.getSnapshot()),
        {
          t: fR
        } = (0, it.A)(),
        VR = Xt();
      if (!ZR.enabled) return null;
      const KR = null !== (JR = ZR.pages.find((RR => RR.id === ZR.selected))) && void 0 !== JR ? JR : null;
      return (0, Vt.jsx)(Wt.e, {
        show: ZR.open,
        close: yR.dismiss,
        togglePointerLock: !1,
        className: Jt()("SkyblockSkillsOverlay", iR.open && "SkyblockReachLogUnderLedger"),
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: VR,
          onKeyDown: Ct,
          children: [(0, Vt.jsx)(uZ, {
            island: null !== (GR = null === KR || void 0 === KR ? void 0 : KR.id) && void 0 !== GR ? GR : null
          }), (0, Vt.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: fR("skyblockGame:reachLogTitle")
              }), (0, Vt.jsx)("p", {
                children: fR("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Vt.jsx)(qZ, {
              view: qR
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: yR.dismiss
            })]
          }), (0, Vt.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ZR.pages.map((RR => {
              const JR = RR.id === ZR.selected,
                GR = RR.fish.some((RR => RR.fresh));
              return (0, Vt.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": JR,
                "data-pad-tab": !0,
                "data-pad-selected": JR ? "true" : void 0,
                className: Jt()("SkyblockReachLogTab", `Island-${RR.id}`, JR && "Selected", !RR.awake && "Asleep", RR.gold && "GoldPage", GR && "HasNews"),
                onClick: () => {
                  yR.selectPage(RR.id)
                },
                children: [(0, Vt.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: RR.name
                }), RR.awake && (0, Vt.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: fR("skyblockGame:reachLogCaughtCount", {
                    caught: RR.caught,
                    total: RR.total
                  })
                })]
              }, RR.id)
            }))
          }), (0, Vt.jsxs)("div", {
            className: Jt()("SkyblockReachLogPage", null !== KR && `Island-${KR.id}`),
            role: "tabpanel",
            children: [null !== KR && (0, Vt.jsx)(nZ, {
              page: KR,
              letGoShown: ZR.letGoShown,
              hiddenWaters: qR
            }), !0 === (null === KR || void 0 === KR ? void 0 : KR.awake) && null !== KR.returner && (0, Vt.jsx)(aZ, {
              returner: KR.returner
            }), !0 === (null === KR || void 0 === KR ? void 0 : KR.awake) && (0, Vt.jsx)(RZ, {
              controller: tR,
              island: KR.id
            })]
          }), (0, Vt.jsx)("footer", {
            className: Jt()("SkyblockReachLogFooter", null !== KR && `Island-${KR.id}`, !0 === (null === KR || void 0 === KR ? void 0 : KR.gold) && "GoldPage"),
            children: !0 === (null === KR || void 0 === KR ? void 0 : KR.gold) ? (0, Vt.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: fR("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Vt.jsxs)(Vt.Fragment, {
              children: [(0, Vt.jsx)(eZ, {
                letGoShown: ZR.letGoShown,
                haloShown: !0 === (null === KR || void 0 === KR ? void 0 : KR.fish.some((RR => RR.halo)))
              }), (0, Vt.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: fR("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var WZ = GR(5712);

    function AZ(RR) {
      let {
        conversation: JR,
        completedLabel: GR
      } = RR;
      return (0, Vt.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Vt.jsxs)("header", {
          children: [(0, Vt.jsx)("h3", {
            children: JR.questName
          }), JR.completed && (0, Vt.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: GR
          })]
        }), JR.lines.map((RR => (0, Vt.jsx)(WZ.b, {
          display: RR.display
        }, RR.key)))]
      })
    }

    function CZ(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(zy, JR.getSnapshot()), tR = Xt();
      if (!yR.enabled) return null;
      const uR = !yR.loading && 0 === yR.conversations.length;
      return (0, Vt.jsx)(Wt.e, {
        show: yR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: GR("skyblockDialogue:title")
              }), (0, Vt.jsx)("p", {
                children: GR("skyblockDialogue:intro")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsxs)("div", {
            className: Jt()("SkyblockDialogueBody", {
              SingleColumn: null !== yR.questFocus || 0 === yR.characters.length
            }),
            children: [null === yR.questFocus && yR.characters.length > 0 && (0, Vt.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: yR.characters.map((RR => (0, Vt.jsx)(At.g, {
                className: Jt()("SkyblockDialogueCharacter", {
                  Selected: RR.selected
                }),
                onClick: () => {
                  JR.selectCharacter(RR.id)
                },
                children: (0, Vt.jsx)(Zt.c, {
                  text: RR.styling
                })
              }, RR.id)))
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== yR.questFocus && (0, Vt.jsx)(At.g, {
                className: "SkyblockDialogueBack",
                onClick: JR.showCharacters,
                children: GR("skyblockDialogue:allCharacters")
              }), yR.loading && (0, Vt.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: GR("skyblockDialogue:loading")
              }), uR && (0, Vt.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: GR(null === yR.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), yR.conversations.map((RR => (0, Vt.jsx)(AZ, {
                conversation: RR,
                completedLabel: yR.completedLabel
              }, RR.questId)))]
            })]
          })]
        })
      })
    }

    function XZ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(Yy, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt();
      return GR.enabled ? (0, Vt.jsx)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: yR("skyblockGame:autographBook")
              }), (0, Vt.jsx)("p", {
                children: yR("skyblockGame:autographBookIntro")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              onClick: JR.dismiss
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Vt.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Vt.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Vt.jsx)("strong", {
                  children: GR.total
                }), (0, Vt.jsx)("span", {
                  children: yR("skyblockGame:autographTotal")
                })]
              }), (0, Vt.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Vt.jsx)("strong", {
                  children: GR.rankTotal
                }), (0, Vt.jsx)("span", {
                  children: yR("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === GR.entries.length ? (0, Vt.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: yR("skyblockGame:autographBookEmpty")
            }) : (0, Vt.jsx)("ul", {
              className: "SkyblockAutographList",
              children: GR.entries.map((RR => (0, Vt.jsxs)("li", {
                className: Jt()("SkyblockAutograph", {
                  Ranked: null !== RR.rank
                }),
                style: null === RR.rank ? void 0 : {
                  color: RR.rank.colour
                },
                children: [null !== RR.rank && (0, Vt.jsx)(zt.d, {
                  className: "SkyblockAutographRankIcon",
                  name: RR.rank.icon,
                  kit: (0, zt.f)(RR.rank.icon)
                }), (0, Vt.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Vt.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: RR.name
                  }), (0, Vt.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== RR.rank && (0, Vt.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: RR.rank.label
                    }), (0, Vt.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: RR.signedOn
                    })]
                  })]
                })]
              }, RR.key)))
            })]
          })]
        })
      }) : null
    }
    const MZ = (0, MR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        return (0, Vt.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: JR.display.mountWaypoint,
          children: [(0, Vt.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Vt.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Vt.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Vt.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Vt.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Vt.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      BZ = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function lZ(RR) {
      return "next" === RR.phase ? "\u2192" : BZ[RR.kind]
    }
    const pZ = (0, MR.memo)((function(RR) {
      let {
        controller: JR,
        display: GR
      } = RR;
      const yR = (0, ft.h)(dJ, JR.getNotificationSnapshot()),
        [tR, uR] = (0, MR.useState)(!1);
      return (0, ft.f)("qteStateUpdated", (RR => {
        uR(RR.isActive)
      })), (0, Vt.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (tR ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [yR && (0, Vt.jsxs)("div", {
          className: `SkyblockQuestNotification ${yR.kind} ${yR.phase}`,
          style: {
            "--quest-notification-duration": `${yR.durationMs}ms`,
            ...yR.accent && {
              "--quest-notification-accent": yR.accent
            }
          },
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (yR.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: lZ(yR)
            }), yR.iconItem && (0, Vt.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Vt.jsx)(ut.b, {
                itemName: yR.iconItem,
                amount: 0
              })
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: yR.title
            }), (0, Vt.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Vt.jsx)(Dt.b, {
                text: yR.name
              })
            }), yR.description && (0, Vt.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Vt.jsx)(Dt.b, {
                text: yR.description
              })
            }), yR.reward && (0, Vt.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Vt.jsx)(Dt.b, {
                text: yR.reward
              })
            })]
          })]
        }, yR.token), (null === yR || void 0 === yR ? void 0 : yR.waypointNameKey) && (0, Vt.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": yR.waypointNameKey,
          "data-notification-token": yR.token,
          ref: GR.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${yR.token}`)]
      })
    }));

    function gZ(RR) {
      const JR = parseInt(RR.replace("#", ""), 16);
      return `${JR>>16&255}, ${JR>>8&255}, ${255&JR}`
    }
    const bZ = (0, MR.memo)((function(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(nG, JR.getSnapshot());
      if (!yR) return null;
      const tR = "arrival" === yR.phase;
      return (0, Vt.jsxs)("div", {
        className: Jt()("SkyblockPortalTransit", {
          Departure: !tR,
          Arrival: tR
        }),
        style: {
          "--portal-rgb": gZ(yR.colour),
          "--portal-duration": `${yR.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Vt.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Vt.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            JR.finishArrival(yR.token)
          }
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Vt.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !tR && (0, Vt.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: GR("skyblockGame:portalTransitHeading")
          }), (0, Vt.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: GR(yR.zoneNameKey)
          })]
        })]
      }, yR.token)
    }));

    function vZ() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function OZ() {
      const RR = document.querySelector(".SkyblockHudCoins"),
        JR = null === RR || void 0 === RR ? void 0 : RR.getBoundingClientRect();
      return JR && JR.width > 0 ? {
        x: JR.left + Math.min(JR.width, 24) / 2,
        y: JR.top + JR.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function xZ(RR) {
      return {
        x: RR.left + RR.width / 2,
        y: RR.top + RR.height / 2
      }
    }

    function NZ() {
      var RR;
      const JR = null === (RR = document.querySelector(".HotBar")) || void 0 === RR ? void 0 : RR.getBoundingClientRect();
      return JR && JR.width > 0 ? xZ(JR) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function DZ(RR) {
      let {
        items: JR,
        origins: GR,
        target: yR
      } = RR;
      return (0, Vt.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: JR.map(((RR, JR) => {
          const tR = GR[JR];
          return (0, Vt.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${tR.x}px`,
              top: `${tR.y}px`,
              "--item-dx": yR.x - tR.x + "px",
              "--item-dy": yR.y - tR.y + "px",
              "--item-delay": 2e3 + 160 * JR + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Vt.jsx)(ut.b, {
              itemName: RR.dailyRewardItemName,
              amount: 0
            })
          }, RR.dailyRewardItemName)
        }))
      })
    }

    function HZ(RR, JR) {
      const GR = -Math.PI / 2 + 1.25 * (RR / (JR - 1) * 2 - 1),
        yR = 70 + RR % 3 * 22;
      return {
        x: Math.cos(GR) * yR,
        y: Math.sin(GR) * yR * .7
      }
    }

    function oZ(RR) {
      let {
        origin: JR,
        target: GR,
        count: yR
      } = RR;
      const tR = [];
      for (let uR = 0; uR < yR; uR++) {
        const RR = HZ(uR, yR);
        tR.push((0, Vt.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${JR.x}px`,
            top: `${JR.y}px`,
            "--coin-bx": `${RR.x}px`,
            "--coin-by": `${RR.y}px`,
            "--coin-dx": GR.x - JR.x + "px",
            "--coin-dy": GR.y - JR.y + "px",
            "--coin-delay": `${MG(uR,yR)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Vt.jsx)(ut.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, uR))
      }
      return (0, Vt.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: tR
      })
    }

    function cZ(RR) {
      let {
        day: JR
      } = RR;
      const GR = BR[JR - 1];
      return (0, Vt.jsxs)(Vt.Fragment, {
        children: [(0, Vt.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Vt.jsx)(ut.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, qt.i)(GR.dailyRewardCoins)]
        }), GR.dailyRewardItems.map((RR => (0, Vt.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Vt.jsx)(ut.b, {
            itemName: RR.dailyRewardItemName,
            amount: 0
          }), "\xd7", RR.dailyRewardItemAmount]
        }, RR.dailyRewardItemName)))]
      })
    }

    function PZ(RR) {
      let {
        day: JR
      } = RR;
      const GR = pR(JR);
      return (0, Vt.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: BR.map(((RR, yR) => {
          const tR = yR + 1;
          return (0, Vt.jsxs)("li", {
            className: Jt()("SkyblockDailyRewardTile", {
              Claimed: tR < JR && tR !== GR,
              Today: tR === JR,
              Tomorrow: tR === GR,
              Jackpot: tR === lR
            }),
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: tR
            }), (0, Vt.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Vt.jsx)(ut.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, qt.i)(RR.dailyRewardCoins)]
            }), RR.dailyRewardItems.map((RR => (0, Vt.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Vt.jsx)(ut.b, {
                itemName: RR.dailyRewardItemName,
                amount: 0
              }), "\xd7", RR.dailyRewardItemAmount]
            }, RR.dailyRewardItemName)))]
          }, tR)
        }))
      })
    }

    function IZ(RR) {
      let {
        view: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, MR.useRef)(null), tR = (0, MR.useRef)(null), [uR, ZR] = (0, MR.useState)(null);
      (0, MR.useLayoutEffect)((() => {
        var RR;
        const JR = null === (RR = yR.current) || void 0 === RR ? void 0 : RR.getBoundingClientRect();
        if (JR) {
          var GR, uR;
          const RR = Array.from(null !== (GR = null === (uR = tR.current) || void 0 === uR ? void 0 : uR.children) && void 0 !== GR ? GR : [], (RR => xZ(RR.getBoundingClientRect())));
          ZR({
            origin: xZ(JR),
            target: OZ(),
            itemOrigins: RR,
            itemTarget: NZ()
          })
        }
      }), []);
      const qR = pR(JR.day),
        iR = function(RR, JR) {
          const [GR, yR] = (0, MR.useState)((() => vZ() ? RR : 0));
          return (0, MR.useEffect)((() => {
            if (vZ()) return;
            const GR = performance.now();
            let tR = 0;
            const uR = ZR => {
              const qR = Math.min(Math.max((ZR - GR) / JR, 0), 1);
              yR(Math.round(RR * (1 - (1 - qR) ** 3))), qR < 1 && (tR = requestAnimationFrame(uR))
            };
            return tR = requestAnimationFrame(uR), () => {
              cancelAnimationFrame(tR)
            }
          }), [RR, JR]), GR
        }(JR.coins, 450);
      return (0, Vt.jsxs)("div", {
        className: Jt()("SkyblockDailyReward", {
          Jackpot: JR.day === lR
        }),
        style: {
          "--daily-duration": `${JR.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Vt.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Vt.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: GR("skyblockGame:dailyRewardTitle")
            }), (0, Vt.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: GR("skyblockGame:dailyRewardDay", {
                day: String(JR.day)
              })
            })]
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: yR,
            children: [(0, Vt.jsx)(ut.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Vt.jsxs)("span", {
              children: ["+", (0, qt.i)(iR)]
            })]
          }), JR.items.length > 0 && (0, Vt.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: tR,
            children: JR.items.map((RR => (0, Vt.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Vt.jsx)(ut.b, {
                itemName: RR.dailyRewardItemName,
                amount: 0
              }), "\xd7", RR.dailyRewardItemAmount]
            }, RR.dailyRewardItemName)))
          }), (0, Vt.jsx)(PZ, {
            day: JR.day
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [GR("skyblockGame:dailyRewardComeBack"), (0, Vt.jsx)(cZ, {
              day: qR
            })]
          })]
        }), null !== uR && (0, Vt.jsx)(oZ, {
          origin: uR.origin,
          target: uR.target,
          count: JR.flyingCoins
        }), null !== uR && uR.itemOrigins.length === JR.items.length && (0, Vt.jsx)(DZ, {
          items: JR.items,
          origins: uR.itemOrigins,
          target: uR.itemTarget
        })]
      })
    }
    const mZ = (0, MR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        const GR = (0, ft.h)(AG, JR.getSnapshot());
        return GR ? (0, Vt.jsx)(IZ, {
          view: GR
        }, GR.token) : null
      })),
      zZ = "Gold Coin";

    function SZ(RR) {
      return 650 + 220 * RR
    }

    function jZ(RR) {
      return {
        "--letter-delay": `${SZ(RR)}ms`,
        "--letter-land": `${SZ(RR)+300}ms`
      }
    }

    function dZ(RR) {
      let {
        letterCount: JR
      } = RR;
      return (0, Vt.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Vt.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Vt.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Vt.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: JR
        }, ((RR, JR) => (0, Vt.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: jZ(JR),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, JR)))]
      })
    }

    function EZ(RR) {
      var JR, GR, yR;
      let {
        letter: tR,
        index: uR
      } = RR;
      const {
        t: ZR
      } = (0, it.A)(), qR = null !== (JR = null === (GR = tR.items[0]) || void 0 === GR ? void 0 : GR.itemName) && void 0 !== JR ? JR : zZ;
      return (0, Vt.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: jZ(uR),
        children: [(0, Vt.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Vt.jsx)(ut.b, {
            itemName: qR,
            amount: 0
          })
        }), (0, Vt.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: ZR(tR.reasonKey, null !== (yR = tR.reasonParams) && void 0 !== yR ? yR : void 0)
        }), (0, Vt.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [tR.coins > 0 && (0, Vt.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Vt.jsx)(ut.b, {
              itemName: zZ,
              amount: 0
            }), "+", (0, qt.i)(tR.coins)]
          }), tR.items.map(((RR, JR) => (0, Vt.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Vt.jsx)(ut.b, {
              itemName: RR.itemName,
              amount: 0
            }), RR.label, " \xd7", RR.amount]
          }, JR)))]
        })]
      })
    }

    function YZ(RR) {
      let {
        view: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)();
      return (0, Vt.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${JR.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${SZ(JR.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Vt.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Vt.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Vt.jsx)(dZ, {
              letterCount: JR.letters.length
            }), (0, Vt.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: GR("skyblockGame:mailboxTitle")
            })]
          }), (0, Vt.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: JR.letters.map(((RR, JR) => (0, Vt.jsx)(EZ, {
              letter: RR,
              index: JR
            }, JR)))
          }), JR.more > 0 && (0, Vt.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: GR("skyblockGame:mailboxMore", {
              count: String(JR.more)
            })
          })]
        })
      })
    }
    const kZ = (0, MR.memo)((function(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(lG, JR.getSnapshot());
      return GR ? (0, Vt.jsx)(YZ, {
        view: GR
      }, GR.token) : null
    }));

    function QZ(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(ny, JR.getSnapshot());
      if (null === yR) return null;
      const tR = yR.fullSet ? "empty" === yR.fuelState ? {
        text: GR("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: GR("skyblockGame:magmawardHudFullSet", {
          worn: String(yR.wornCount)
        }),
        tone: "partial"
      };
      return (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsxs)("div", {
          className: Jt()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${yR.fuelState}`, {
            "SkyblockMagmawardHud-partial": !yR.fullSet,
            "SkyblockMagmawardHud-armed": yR.fullSet && "empty" !== yR.fuelState
          }),
          children: [null !== yR.flare && (0, Vt.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${yR.flare}`
          }, `flare:${yR.flareToken}`), (0, Vt.jsx)("div", {
            className: Jt()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: yR.setLit
            }),
            children: yR.pieces.map(((RR, JR) => (0, Vt.jsx)("div", {
              className: Jt()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: RR.worn,
                SkyblockMagmawardPieceJustWorn: RR.justWorn
              }),
              children: (0, Vt.jsx)(ut.b, {
                itemName: RR.itemName,
                amount: 0
              })
            }, `${JR}:${RR.wornToken}`)))
          }, `pieces:${yR.setLitToken}`), (0, Vt.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Vt.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Vt.jsxs)("div", {
              className: Jt()("SkyblockMagmawardFuelCounter", yR.pulse && `SkyblockMagmawardFuelCounter-${yR.pulse}`),
              children: [(0, Vt.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Vt.jsx)(ut.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Vt.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: yR.fuel
              })]
            }, `counter:${yR.pulseToken}`), "burn" === yR.pulse && (0, Vt.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${yR.pulseToken}`)]
          }), tR && (0, Vt.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${tR.tone} SmallTextBold`,
            children: tR.text
          })]
        })
      })
    }

    function FZ(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR,
        selectedLanguage: yR
      } = (0, it.A)(), tR = (0, ft.h)(Wy, JR.getSnapshot());
      return null === tR ? null : (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsxs)("div", {
          className: Jt()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: tR.inRange
          }),
          style: {
            "--glowtide-colour": tR.colour
          },
          "aria-label": GR("skyblockGame:glowtideChipLabel"),
          children: [(0, Vt.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), tR.inRange ? (0, Vt.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: GR("skyblockGame:glowtideChipInRange")
          }, `call:${tR.inRangeToken}`) : (0, Vt.jsxs)(Vt.Fragment, {
            children: [(0, Vt.jsx)("div", {
              ref: JR.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Vt.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: GR("skyblockGame:waypointDistance", {
                distance: AR(tR.distance, yR.code)
              })
            })]
          })]
        })
      })
    }

    function TZ(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(Cy, JR.getSnapshot());
      return null === yR ? null : (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsxs)("div", {
          className: Jt()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: yR.full
          }),
          "aria-label": GR("skyblockGame:glowMeterLabel", {
            fill: String(yR.fill),
            hK: String(yR.hK)
          }),
          children: [yR.burst && (0, Vt.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${yR.burstToken}`), (0, Vt.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Vt.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${yR.ratio})`
              }
            }), yR.gained && (0, Vt.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${yR.gainToken}`), yR.full && Array.from({
              length: 5
            }, ((RR, JR) => (0, Vt.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, JR)))]
          }), yR.full && yR.rares.map((RR => (0, Vt.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Vt.jsx)(ut.b, {
              itemName: RR,
              amount: 0
            })
          }, RR))), yR.ready && (0, Vt.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Vt.jsx)("span", {
              children: GR("skyblockGame:glowMeterReady")
            })
          }, `ready:${yR.fullToken}`)]
        })
      })
    }

    function sZ(RR) {
      let {
        controller: JR
      } = RR;
      const {
        t: GR
      } = (0, it.A)(), yR = (0, ft.h)(My, JR.getSnapshot());
      if (null === yR) return null;
      const tR = "waiting" === yR.phase,
        uR = {
          animationDuration: `${yR.waitMs}ms`,
          animationDelay: -yR.elapsedMs + "ms"
        },
        ZR = tR ? void 0 : {
          animationDuration: `${yR.waitMs}ms`
        };
      return (0, Vt.jsxs)("div", {
        className: tR ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [tR && (0, Vt.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((RR, JR) => (0, Vt.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, JR))), (0, Vt.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: uR
          }), (0, Vt.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Vt.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Vt.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: uR
            })]
          }), (0, Vt.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Vt.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: ZR,
          children: GR(yR.line)
        }, yR.lineIndex)]
      }, yR.token)
    }

    function hZ(RR) {
      let {
        chart: JR,
        showHere: GR,
        className: yR
      } = RR;
      return (0, Vt.jsx)("div", {
        className: Jt()("SkyblockTideChartGrid", yR, null !== JR.pictureName && "Complete"),
        "aria-hidden": "true",
        children: JR.cells.map(((RR, yR) => {
          const tR = 0 !== (JR.pulseCells & 1 << yR),
            uR = JR.castCell === yR;
          return (0, Vt.jsx)("span", {
            className: Jt()("SkyblockTideChartCell", `Cell-${RR}`, tR && "Pulse", uR && "Cast", GR && JR.hereCell === yR && "Here")
          }, `${yR}:${tR?`p${JR.pulseToken}`:""}:${uR?`c${JR.castToken}`:""}`)
        }))
      })
    }

    function Rq(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(ly, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = GR.chip;
      if (!GR.enabled || null === tR) return null;
      const uR = yR("skyblockGame:tideChartsChipLabel", {
        island: tR.islandName,
        lit: String(tR.lit),
        ink: String(tR.ink)
      });
      return (0, Vt.jsx)(yt.d, {
        placement: "statBars",
        children: (0, Vt.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Jt()("SkyblockTideChartsChip", GR.open && "Open", null !== tR.pictureName && "Complete"),
          "aria-label": uR,
          title: uR,
          onMouseDown: RR => {
            RR.preventDefault()
          },
          onClick: JR.toggle,
          children: [(0, Vt.jsx)(hZ, {
            chart: tR,
            showHere: !1,
            className: "Mini"
          }), (0, Vt.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [tR.lit, "/", tR.ink]
          })]
        })
      })
    }

    function Jq(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, ft.h)(ly, JR.getSnapshot()),
        {
          t: yR
        } = (0, it.A)(),
        tR = Xt(),
        uR = GR.card;
      return GR.enabled && null !== uR ? (0, Vt.jsx)(Wt.e, {
        show: GR.open,
        close: JR.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Vt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: tR,
          onKeyDown: Ct,
          children: [(0, Vt.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Vt.jsxs)("div", {
              children: [(0, Vt.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: yR("skyblockGame:tideChartsTitle")
              }), (0, Vt.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: yR("skyblockGame:tideChartsIntro")
              })]
            }), (0, Vt.jsx)(At.l, {
              padIgnore: !0,
              ariaLabel: yR("skyblockGame:tideChartsClose"),
              onClick: JR.dismiss
            })]
          }), GR.tabs.length > 1 && (0, Vt.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": yR("skyblockGame:tideChartsIslands"),
            children: GR.tabs.map((RR => (0, Vt.jsx)("button", {
              type: "button",
              className: Jt()("SkyblockTideChartsTab", RR.selected && "Selected"),
              "aria-pressed": RR.selected,
              onClick: () => {
                JR.Ur(RR.island)
              },
              children: RR.name
            }, RR.island)))
          }), (0, Vt.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Vt.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": uR.gridLabel,
              children: (0, Vt.jsx)(hZ, {
                chart: uR,
                showHere: !0,
                className: "Large"
              })
            }), (0, Vt.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Vt.jsx)("h3", {
                children: uR.islandName
              }), (0, Vt.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: uR.litText
              }), null === uR.pictureName ? (0, Vt.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: yR("skyblockGame:tideChartsPictureHidden")
              }) : (0, Vt.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: yR("skyblockGame:tideChartsPictureRevealed", {
                  picture: uR.pictureName
                })
              }, uR.pictureName), (0, Vt.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Vt.jsxs)("li", {
                  children: [(0, Vt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), yR("skyblockGame:tideChartsLegendLit")]
                }), (0, Vt.jsxs)("li", {
                  children: [(0, Vt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), yR("skyblockGame:tideChartsLegendClear")]
                }), null !== uR.hereCell && (0, Vt.jsxs)("li", {
                  children: [(0, Vt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), yR("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Vt.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Vt.jsx)("span", {
                  children: GR.turnsText
                }), (0, Vt.jsx)("span", {
                  children: GR.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Gq(RR) {
      var JR;
      let {
        controller: GR
      } = RR;
      const {
        selectedLanguage: yR
      } = (0, it.A)(), tR = yR.code;
      (0, MR.useEffect)((() => {
        GR.setTranslator(((RR, JR) => (0, it.w)(tR, RR, JR)), tR, ((RR, JR) => (0, it.r)(tR, RR, JR)))
      }), [GR, tR]);
      const uR = (0, ft.h)(fR, GR.map.getSnapshot()),
        {
          openInGameMenuName: ZR
        } = (0, Gt.o)(["openInGameMenuName"]);
      return (0, Vt.jsxs)(Vt.Fragment, {
        children: [(0, Vt.jsx)(pZ, {
          controller: GR.quests,
          display: GR.navigation.display
        }), uR.enabled && !ZR && (0, Vt.jsx)(Ot, {
          controller: GR.navigation
        }), (0, Vt.jsx)(Kt, {
          controller: GR,
          minimap: uR.enabled && (null === (JR = uR.presentation) || void 0 === JR ? void 0 : JR.minimap) && (0, Vt.jsx)(vt, {
            view: uR.presentation.minimap,
            navigation: GR.navigation,
            controller: GR.map
          }),
          children: (0, Vt.jsx)(mt, {
            controller: GR.quests,
            surface: "hud"
          })
        }), (0, Vt.jsx)(MZ, {
          controller: GR.navigation
        }), (0, Vt.jsx)(bZ, {
          controller: GR.portalTransit
        }), (0, Vt.jsx)(mZ, {
          controller: GR.dailyReward
        }), (0, Vt.jsx)(kZ, {
          controller: GR.mailbox
        }), (0, Vt.jsx)(QZ, {
          controller: GR.magmaward
        }), (0, Vt.jsx)(FZ, {
          controller: GR.glowtide
        }), (0, Vt.jsx)(Iu, {
          controller: GR.passage
        }), (0, Vt.jsx)(Rq, {
          controller: GR.tideCharts
        }), (0, Vt.jsx)(TZ, {
          controller: GR.glowMeter
        }), (0, Vt.jsx)(Tu, {
          controller: GR.reachLog
        }), (0, Vt.jsx)(sZ, {
          controller: GR.hushWait
        }), (0, Vt.jsx)(Yu, {
          controller: GR.lampLight
        }), (0, Vt.jsx)(xt, {
          controller: GR.skills,
          surface: "hud"
        })]
      })
    }

    function yq(RR) {
      let {
        controller: JR
      } = RR;
      return (0, Vt.jsxs)(Vt.Fragment, {
        children: [(0, Vt.jsx)(bt, {
          controller: JR.map,
          navigation: JR.navigation
        }), (0, Vt.jsx)(xt, {
          controller: JR.skills,
          surface: "menu"
        }), (0, Vt.jsx)(mt, {
          controller: JR.quests,
          surface: "menu"
        }), (0, Vt.jsx)(Au, {
          controller: JR.dungeons
        }), (0, Vt.jsx)(Mu, {
          controller: JR.collections
        }), (0, Vt.jsx)(pu, {
          controller: JR.questGraph
        }), (0, Vt.jsx)(xu, {
          controller: JR.forge
        }), (0, Vt.jsx)(cu, {
          controller: JR.smuggler
        }), (0, Vt.jsx)(Qu, {
          controller: JR.keepersChair,
          lampLight: JR.lampLight
        }), (0, Vt.jsx)(UZ, {
          controller: JR.reachLog,
          regulars: JR.regulars,
          hiddenWaters: JR.hiddenWaters
        }), (0, Vt.jsx)(JZ, {
          controller: JR.regulars
        }), (0, Vt.jsx)(zu, {
          controller: JR.passage
        }), (0, Vt.jsx)(Jq, {
          controller: JR.tideCharts
        }), (0, Vt.jsx)(CZ, {
          controller: JR.dialogue
        }), (0, Vt.jsx)(XZ, {
          controller: JR.autographs
        })]
      })
    }
    var tq = GR(37470);
    const uq = DG + zG;

    function Zq(RR, JR) {
      const GR = [{
        sound: "rpgKnifeSlice1",
        beat: DG,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: DG,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: DG,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: DG,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: DG,
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
        Ur: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: uq + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        Ur: !0,
        beat: uq + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: uq + 60,
        lead: 180,
        volume: .5 + .06 * RR,
        rate: .82 + .07 * RR
      }];
      return RR >= 4 && GR.push({
        sound: "exp_levelup",
        beat: uq + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), JR && GR.push({
        sound: "trumpetFlare",
        beat: uq + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), GR.push({
        sound: "harp_pling",
        beat: HG,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), GR
    }
    class qq {
      constructor(RR) {
        this.deps = RR, this.pending = new Map, this.localHook = null
      }
      hookWaiting(RR, JR) {
        this.pending.delete(RR);
        const GR = this.deps.now();
        if (null === JR) {
          var yR;
          if ((null === (yR = this.localHook) || void 0 === yR ? void 0 : yR.hookId) === RR) {
            const RR = GR >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(RR)
          }
          return
        }
        const tR = GR + JR;
        this.settle(RR, tR) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(RR, {
          untilMs: GR + 1e3,
          biteAtMs: tR
        }))
      }
      getLocalHook() {
        var RR, JR;
        return null !== (RR = null === (JR = this.localHook) || void 0 === JR ? void 0 : JR.hookId) && void 0 !== RR ? RR : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const RR = this.deps.now();
        for (const [JR, {
            untilMs: GR,
            biteAtMs: yR
          }] of this.pending)(this.settle(JR, yR) || RR > GR) && this.pending.delete(JR)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(RR, JR) {
        const GR = this.deps.getLineOwner(RR);
        if (null === GR) return !1;
        if (!this.deps.isLocalPlayer(GR)) return !0;
        if (this.localHook = {
            hookId: RR,
            biteAtMs: JR
          }, !this.deps.isHushWaiting()) {
          const [JR, GR] = this.deps.getHookPosition(RR);
          this.deps.onCastLanded(JR, GR)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var iq = GR(3017);
    const fq = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Vq = {
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
    class Kq {
      constructor(RR) {
        this.deps = RR, this.tell = null
      }
      receiveTell(RR) {
        let {
          biteTellTier: JR
        } = RR;
        this.tell = {
          tier: JR,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(RR) {
        const JR = this.tell;
        if (this.tell = null, !RR) return;
        const GR = null !== JR && this.deps.now() - JR.atMs <= 3e3 ? JR.tier : 0;
        this.deps.vibrate(fq[GR])
      }
      burstAtHook() {
        const RR = this.tell,
          JR = this.deps.getLocalHookPosition();
        null === RR || RR.burst || null === JR || (RR.burst = !0, this.deps.playParticles(function(RR, JR) {
          let [GR, yR, tR] = JR;
          const {
            count: uR,
            rise: ZR,
            colour: qR
          } = Vq[RR], [iR, fR, VR] = qR;
          return {
            texture: "glint",
            pos1: [GR - .3, yR, tR - .3],
            pos2: [GR + .3, yR + .2, tR + .3],
            dir1: [-.6, ZR, -.6],
            dir2: [.6, 1.4 * ZR, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: uR,
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
              minColor: [iR, fR, VR, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [iR, fR, VR, 0],
              maxColor: [iR, fR, VR, 0]
            }],
            blendMode: iq.c.Add,
            hideDist: 48
          }
        }(RR.tier, JR)))
      }
    }
    var wq = GR(1343),
      rq = GR(2137),
      eq = GR(46),
      aq = GR(39878),
      Lq = GR(203);
    const nq = Lq.g.Kn * Lq.g.playerEyeToHeightRatio;
    class Uq {
      constructor(RR) {
        this.host = RR, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      BK(RR) {
        this.lava = RR, this.nextUpdateAt = 0
      }
      gK() {
        var RR;
        const JR = this.host.now();
        if (JR < this.nextUpdateAt) return;
        this.nextUpdateAt = JR + 250;
        const GR = this.host.playerPosition(),
          yR = GR && this.findNearest([GR[0], GR[1] + nq, GR[2]]);
        if (!yR || yR.distance >= 40) return void this.stop();
        const tR = .5 * Math.min(1, (40 - yR.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(tR) : this.loop = this.host.play("lavaFlow", tR, yR.position, 40 + nq, 9, !0), null === (RR = this.loop) || void 0 === RR || RR.setPosition(yR.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var RR;
        null === (RR = this.loop) || void 0 === RR || RR.stop(), this.loop = null
      }
      findNearest(RR) {
        let JR = -1,
          GR = 1 / 0;
        for (let yR = 0; yR < this.lava.length; yR += 3) {
          const tR = this.lava[yR] - RR[0],
            uR = this.lava[yR + 1] - RR[1],
            ZR = this.lava[yR + 2] - RR[2],
            qR = tR * tR + uR * uR + ZR * ZR;
          qR < GR && (GR = qR, JR = yR)
        }
        return JR < 0 ? null : {
          position: [this.lava[JR], this.lava[JR + 1], this.lava[JR + 2]],
          distance: Math.sqrt(GR)
        }
      }
    }
    var Wq = GR(2115),
      Aq = GR(39880);
    const Cq = {
      "Grey Portal": "Gray"
    };
    for (const bq of KR.Cc) Cq[`${bq} Portal`] = bq;
    const Xq = Object.keys(Cq),
      Mq = Object.fromEntries(Xq.map((RR => [RR, (0, KR.P)(KR.C[`${(0,KR.ve)(Cq[RR])}Team`])])));
    Object.fromEntries(Xq.map((RR => [RR, KR.C[`${(0,KR.ve)(Cq[RR])}UiText`]])));
    class Bq {
      constructor(RR, JR) {
        this.presentation = RR, this.portal = JR, this.unlocked = void 0
      }
      BK(RR) {
        const JR = !1 === this.unlocked && RR;
        this.unlocked = RR, this.gK();
        const {
          min: GR,
          max: yR,
          unlockedBlock: tR
        } = this.portal;
        if (JR && this.presentation.hasChunk(...GR)) {
          const [RR, JR, uR] = Mq[tR];
          this.presentation.playParticles({
            pos1: [...GR],
            pos2: yR.map((RR => RR + 1)),
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
              minColor: [RR, JR, uR, 1],
              maxColor: [Math.min(255, RR + 55), Math.min(255, JR + 55), Math.min(255, uR + 90), 1]
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
      gK() {
        var RR;
        const JR = this.unlocked ? this.portal.unlockedBlock : null !== (RR = this.portal.lockedBlock) && void 0 !== RR ? RR : "Light Gray Portal",
          {
            min: GR,
            max: yR
          } = this.portal;
        for (let tR = GR[0]; tR <= yR[0]; tR++)
          for (let RR = GR[1]; RR <= yR[1]; RR++)
            for (let uR = GR[2]; uR <= yR[2]; uR++) this.presentation.hasChunk(tR, RR, uR) && this.presentation.rW(tR, RR, uR) !== JR && this.presentation.lD(tR, RR, uR, JR)
      }
    }
    var lq = GR(39758);
    GR(39741);
    const pq = {
        farming_1: {
          raises: RR => "NPC" === RR.type && "chef" === RR.variation,
          rise: .4
        },
        fishing_1: {
          raises: RR => "Draugr Warper" === RR.type,
          rise: .4
        }
      },
      gq = (RR, JR, GR, tR) => {
        let {
          localPlayerId: uR
        } = tR;
        const ZR = new hy({
          translate: (RR, JR) => (0, it.w)(wq.g.get().getCurrentLanguageCode(), RR, JR),
          translateWithIcons: (RR, JR) => (0, it.r)(wq.g.get().getCurrentLanguageCode(), RR, JR),
          setMenuOpen: RR => {
            RR ? (0, dR.t)() : (0, dR.h)()
          },
          dismissMenu: dR.j,
          publishSkills: RR => {
            ER.n.JK(IJ, RR, !0)
          },
          publishQuests: RR => {
            ER.n.JK(jJ, RR, !0)
          },
          publishQuestNotification: RR => {
            ER.n.JK(dJ, RR, !0)
          },
          publishDungeons: RR => {
            ER.n.JK(kJ, RR, !0)
          },
          publishCollections: RR => {
            ER.n.JK(aG, RR, !0)
          },
          publishMap: RR => {
            ER.n.JK(fR, RR, !0)
          },
          publishHud: RR => {
            ER.n.JK(Fy, RR, !0)
          },
          publishPortalTransit: RR => {
            ER.n.JK(nG, RR, !0)
          },
          isLoadingScreenUp: () => Gt.d.get("loadingOverlayVisible"),
          publishDailyReward: RR => {
            ER.n.JK(AG, RR, !0)
          },
          publishMailbox: RR => {
            ER.n.JK(lG, RR, !0)
          },
          publishQuestGraph: RR => {
            ER.n.JK(gG, RR, !0)
          },
          publishForge: RR => {
            ER.n.JK(QG, RR, !0)
          },
          publishSmuggler: RR => {
            ER.n.JK(sG, RR, !0)
          },
          publishKeepersChair: RR => {
            ER.n.JK(qy, RR, !0)
          },
          publishReachLog: RR => {
            ER.n.JK(fy, RR, !0)
          },
          publishLampLight: RR => {
            ER.n.JK(ay, RR, !0)
          },
          publishMagmaward: RR => {
            ER.n.JK(ny, RR, !0)
          },
          publishGlowtide: RR => {
            ER.n.JK(Wy, RR, !0)
          },
          publishGlowMeter: RR => {
            ER.n.JK(Cy, RR, !0)
          },
          publishHushWait: RR => {
            ER.n.JK(My, RR, !0)
          },
          publishPassage: RR => {
            ER.n.JK(Jy, RR, !0)
          },
          publishTideCharts: RR => {
            ER.n.JK(ly, RR, !0)
          },
          publishRegulars: RR => {
            ER.n.JK(Dy, RR, !0)
          },
          publishHiddenWaters: RR => {
            ER.n.JK(Iy, RR, !0)
          },
          publishDialogue: RR => {
            ER.n.JK(zy, RR, !0)
          },
          publishAutographs: RR => {
            ER.n.JK(Yy, RR, !0)
          },
          onDailyRewardStarted: RR => {
            OR.playSound(uR, RR.day === lR ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (RR, JR) => {
            OR.playSound(uR, "exp_collect", .35, 1 + .6 * RR / (JR - 1)), ER.n.JK(CG, RR === JR - 1)
          },
          onDailyRewardItemLanded: RR => {
            OR.playSound(uR, "pickUp", .6, 1 + .15 * RR)
          },
          onMailboxStarted: () => {
            OR.playSound(uR, "rpgMetalClick", .6, 1), OR.playSound(uR, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            OR.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: eq.k,
          requestTracking: RR => {
            OR.sendCommand(`quests track ${RR}`)
          },
          requestDungeonEnter: (RR, JR) => {
            OR.sendCommand(`dungeonEnter ${RR} ${JR}`)
          },
          requestQuestJump: RR => {
            OR.sendCommand(`${xR} jump ${RR}`)
          },
          requestQuestArrive: (RR, JR) => {
            const GR = `${xR} arrive ${RR}`;
            OR.sendCommand(JR ? `${GR} complete` : GR)
          },
          requestForge: RR => {
            let {
              blade: JR,
              guard: GR,
              handle: yR
            } = RR;
            OR.sendCommand(`forge ${JR} ${GR} ${yR}`)
          },
          requestDialogue: () => {
            OR.sendCommand("quests dialogue")
          },
          requestSmuggle: (RR, JR) => {
            OR.sendCommand(`smuggle ${RR} ${JR}`)
          },
          requestKeepersChairAim: RR => {
            OR.sendCommand(`keeperschair-aim ${RR}`)
          },
          requestReachLogOpen: () => {
            OR.sendCommand("reachlog-open")
          },
          requestLampLight: RR => {
            OR.sendCommand(`${RR}`)
          },
          requestTravel: RR => {
            OR.sendCommand(`map travel ${RR.kind} ${RR.id} ${RR.requestId}`)
          }
        });
        let qR, iR, VR, wR, rR, UR, WR, AR, CR, BR, pR, bR, vR, OR, NR = null;
        const cR = pq[null !== GR && void 0 !== GR ? GR : ""],
          mR = (RR, JR) => {
            null !== cR && void 0 !== cR && cR.raises(JR) && OR.setNametagOffset(RR, cR.rise)
          },
          zR = new Kq({
            getLocalHookPosition: () => {
              const RR = kR.getLocalHook();
              return null !== RR && OR.checkValid(RR) ? OR.vW(RR) : null
            },
            playParticles: RR => {
              OR.playParticleEffect(RR)
            },
            vibrate: RR => {
              YR.e.play("fishBite", RR)
            },
            now: () => performance.now()
          }),
          kR = new qq({
            getLineOwner: RR => OR.checkValid(RR) ? OR.getLineOwner(RR) : null,
            isLocalPlayer: RR => OR.isLocalPlayer(RR),
            getHookPosition: RR => {
              const [JR, , GR] = OR.vW(RR);
              return [JR, GR]
            },
            isHushWaiting: () => {
              var RR;
              return "waiting" === (null === (RR = ZR.hushWait.getSnapshot()) || void 0 === RR ? void 0 : RR.phase)
            },
            onCastLanded: (RR, JR) => {
              ZR.tideCharts.castLanded(RR, JR)
            },
            onLocalHookSettled: () => {
              zR.onLocalHookSettled()
            },
            onLocalWaitEnded: RR => {
              zR.onLocalWaitEnded(RR)
            },
            now: () => performance.now()
          }),
          QR = new Uq({
            now: () => performance.now(),
            playerPosition: () => OR.checkValid(uR) ? OR.vW(uR) : null,
            play: (RR, JR, GR, yR, tR, ZR) => OR.playSound(uR, RR, JR, 1, {
              TG: GR,
              maxHearDist: yR,
              refDistance: tR
            }, ZR)
          }),
          FR = new Map;
        let TR;
        return {
          onCreate: RR => {
            if (OR = RR, NR = new Aq.SkyblockEntityFacing(RR, cR ? mR : null), ZR.portalTransit.resumeArrival(null !== GR && void 0 !== GR ? GR : null), (null !== GR && void 0 !== GR ? GR : yR) === yR) {
              let RR = -1 / 0;
              TR = ER.n.subscribe("toggleMenu", (JR => {
                const GR = performance.now();
                "inventory|Workbench" !== JR || "cross_to_hub" !== ZR.quests.getTrackedQuestId() || GR - RR < 1e4 || (RR = GR, OR.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [yR, tR] of Object.entries(null !== (JR = DR[null !== GR && void 0 !== GR ? GR : ""]) && void 0 !== JR ? JR : {})) {
              var JR;
              FR.set(yR, new Bq({
                hasChunk: (JR, GR, yR) => RR.isBlockInLoadedChunk(JR, GR, yR),
                rW: (JR, GR, yR) => RR.blockIdToBlockName(RR.getBlockId(JR, GR, yR)),
                lD: (JR, GR, yR, tR) => {
                  RR.lD(JR, GR, yR, tR)
                },
                playParticles: JR => {
                  RR.playParticleEffect(JR)
                }
              }, tR))
            }
            vR = (0, Wq.h)((RR => (0, BJ.g)(RR) ? (0, BJ.d)(RR) : null)), ZR.resolveItemName = (JR, GR) => {
              const yR = RR.getItemStat(uR, JR, "displayName");
              return yR && "object" === typeof yR && "translationKey" in yR ? GR(yR.translationKey, (0, it.o)(yR.params, rq.e.shown)) : "string" === typeof yR ? GR(yR) : JR
            }, ZR.quests.notifications.onShown = RR => {
              "quest" === RR ? OR.playSound(uR, "magicAccent1", 1, 1) : "skillLevel" === RR ? OR.playSound(uR, "magicAccent1", 1, .6) : "landmark" === RR ? OR.playSound(uR, "trumpetFlare", 1, .6) : "npcNote" === RR ? OR.playSound(uR, "magicAccent2", .8, 1.1) : "started" === RR ? OR.playSound(uR, (0, tq.f)("bigDrumSwish"), 1, 1) : OR.playSound(uR, (0, tq.f)("rpgHandleSmallLeather"), 1, 1)
            }, ZR.forge.onPartSelected = () => {
              OR.playSound(uR, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, ZR.forge.onOpened = () => {
              ! function(RR) {
                RR.preloadSounds(Zq(4, !0).map((RR => RR.sound)))
              }(RR)
            }, ZR.forge.onForgeStarted = (JR, GR, yR) => function(RR, JR, GR, yR, tR) {
              const uR = [],
                ZR = [],
                qR = GR => {
                  const yR = RR.playSound(JR, GR.Ur ? (0, tq.f)(GR.sound) : GR.sound, GR.volume, GR.rate);
                  yR && (ZR.push(yR), void 0 !== GR.cutAfter && uR.push(setTimeout((() => {
                    yR.fade(yR.getVolume(), 0, 300)
                  }), GR.cutAfter)))
                };
              for (const iR of Zq(GR, yR)) tR ? uR.push(setTimeout((() => {
                qR(iR)
              }), Math.max(0, iR.beat - iR.lead / iR.rate))) : iR.beat !== DG && "magicAccent2" !== iR.sound && "trumpetFlare" !== iR.sound || qR(iR);
              return () => {
                for (const RR of uR) clearTimeout(RR);
                for (const RR of ZR) RR.fade(RR.getVolume(), 0, 120)
              }
            }(RR, uR, JR, GR, yR), ZR.smuggler.onBought = () => {
              (0, aq.e)(OR, uR)
            }, ZR.compass.register(new eR(ZR.map, !0)), ZR.compass.register(new eR(ZR.map, !1)), ZR.compass.register(new LR(ZR.map)), ZR.compass.register(new nR((() => ZR.quests.getSnapshot().compassTarget)));
            for (const GR of ["enemy", "npc"]) ZR.compass.register(new aR(ZR.map, GR, (JR => RR.checkValid(JR) ? RR.vW(JR) : void 0), (JR => RR.isAlive(JR))))
          },
          onAfterRender: (RR, JR) => {
            const GR = OR.checkValid(uR) ? OR.vW(uR) : null;
            ZR.navigation.afterRender(GR, performance.now(), JR), ZR.glowtide.afterRender(GR, JR.cameraHeading), ZR.tideCharts.afterRender(GR), kR.afterRender()
          },
          onClose: () => {
            var RR, JR, GR, yR, tR, uR, fR, KR, eR, aR, LR, nR, UR, XR, MR;
            TR && ER.n.unsubscribe(TR), null === (RR = vR) || void 0 === RR || RR(), QR.dispose(), null === (JR = NR) || void 0 === JR || JR.dispose(), kR.dispose(), ZR.dispose(), null === (GR = qR) || void 0 === GR || GR(), null === (yR = iR) || void 0 === yR || yR(), null === (tR = VR) || void 0 === tR || tR(), null === (uR = wR) || void 0 === uR || uR(), null === (fR = rR) || void 0 === fR || fR(), null === (KR = WR) || void 0 === KR || KR(), null === (eR = undefined) || void 0 === eR || eR(), null === (aR = AR) || void 0 === aR || aR(), null === (LR = CR) || void 0 === LR || LR(), null === (nR = BR) || void 0 === nR || nR(), null === (UR = pR) || void 0 === UR || UR(), null === (XR = undefined) || void 0 === XR || XR(), null === (MR = bR) || void 0 === MR || MR()
          },
          onPlayerChangeBlock: (RR, JR, yR, tR, qR, iR) => {
            if (RR === uR && "Air" === iR) {
              const RR = OR.getClientOption(uR, "creative");
              ZR.skills.predictBlock([JR, yR, tR], qR, RR);
              const iR = function(RR, JR) {
                  if ("hub" === JR || "farming_1" === JR || "mining_1" === JR) return !PR.has(RR) || "hub" !== JR && "mining_1" !== JR ? Object.hasOwn(oR, RR) ? oR[RR] : void 0 : HR
                }(qR, GR),
                fR = ("hub" === GR || "mining_1" === GR) && (KR.od.some((RR => RR === qR)) || Object.hasOwn(IR, qR) || "mining_1" === GR && "Block of Coal" === qR);
              RR || void 0 === iR && !fR || OR.lD(JR, yR, tR, null !== iR && void 0 !== iR ? iR : HR)
            }
          },
          onPlayerAttackEntity: (RR, JR) => {
            if (RR !== uR || "Player" !== OR.getEntityType(JR)) return;
            const [GR, yR, tR] = OR.vW(JR);
            OR.burstParticlePreset("critical", [GR, yR + 1, tR], 10)
          },
          onChangeBlockFail: RR => {
            for (const {
                rJ: JR
              }
              of RR) ZR.skills.rejectBlock(JR)
          },
          onReceivedMessageFromServer: (RR, JR) => {
            if ("skyblockGatedPortal" === RR) {
              var GR;
              const [RR, yR] = JR;
              return void(null === (GR = FR.get(RR)) || void 0 === GR || GR.BK(yR))
            }
            if ("skyblockDailyReward" === RR) return void ZR.dailyReward.BK(JR);
            if ("skyblockMailbox" === RR) return void ZR.mailbox.BK(JR);
            if ("skyblockPortalTransit" === RR) return void ZR.portalTransit.BK(JR);
            if ("skyblockLava" === RR) return void QR.BK(JR);
            if ("skyblockForge" === RR) return void ZR.forge.BK(JR);
            if ("skyblockMagmaward" === RR) return void ZR.magmaward.BK(JR);
            if ("skyblockGlowtide" === RR) return void ZR.glowtide.BK(JR);
            if ("skyblockGlowMeter" === RR) return void ZR.glowMeter.BK(JR);
            if ("skyblockHushWait" === RR) return void ZR.hushWait.BK(JR);
            if ("skyblockPassage" === RR) {
              const RR = JR;
              return ZR.passage.BK(RR), ZR.reachLog.receivePassagePhase(RR.passagePhase), BR ??= (0, XR.p)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: ZR.passage.show
              }), void ZR.keepersChair.receivePassage({
                keepersChairPassagePhase: RR.passagePhase,
                keepersChairPassageNextPhase: RR.passageNextPhase,
                keepersChairPassageTurnsInMs: RR.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === RR) {
              const RR = JR;
              return ZR.tideCharts.BK(RR), void(RR.tideCharts.length > 0 && (pR ??= (0, XR.p)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: ZR.tideCharts.show
              })))
            }
            if (RR === SR.B) {
              var yR;
              const {
                hookId: RR,
                waiting: GR
              } = JR;
              return void kR.hookWaiting(RR, null !== (yR = null === GR || void 0 === GR ? void 0 : GR.remainingMs) && void 0 !== yR ? yR : null)
            }
            if ("skyblockBiteTell" === RR) return void zR.receiveTell(JR);
            if ("skyblockSmuggler" === RR) return void ZR.smuggler.BK(JR);
            if ("skyblockKeepersChair" === RR) return ZR.keepersChair.BK(JR), void ZR.lampLight.setAtChair(ZR.keepersChair.isAtChair());
            if ("skyblockLampLight" === RR) {
              const RR = JR;
              var tR;
              if (ZR.lampLight.BK(RR), RR.lampLightReleasing) CR ??= (0, XR.p)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  ZR.lampLight.setRelease(!1)
                }
              });
              else null === (tR = CR) || void 0 === tR || tR(), CR = void 0;
              return
            }
            if ("skyblockRegulars" === RR) return void ZR.regulars.BK(JR);
            if ("skyblockHiddenWaters" === RR) return void ZR.hiddenWaters.BK(JR);
            if ("skyblockReachLog" === RR) return ZR.reachLog.BK(JR), void(AR ??= (0, XR.p)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Ky
              },
              onClick: ZR.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === RR) {
              for (const [RR, GR, yR, tR] of JR) OR.lD(RR, GR, yR, tR);
              return
            }
            if ("skyblockHud" === RR) ZR.receiveHud(JR);
            else if ("skyblockMap" === RR) ZR.map.BK(JR);
            else if (RR === jR.g) ZR.skills.BK(JR);
            else if (RR === gR && "dialogue" === JR.kind) ZR.dialogue.BK(JR);
            else if (RR === gR) ZR.quests.BK(JR);
            else if ("skyblockDungeons" === RR) ZR.dungeons.BK(JR);
            else if ("sbCollections" === RR) ZR.collections.BK(JR);
            else if ("skyblockQuestGraph" === RR) ZR.questGraph.BK(JR);
            else {
              if ("skyblockAutographs" !== RR) return;
              ZR.autographs.BK(JR)
            }
            if (!iR && ZR.map.getSnapshot().enabled) {
              const RR = (0, XR.p)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: ZR.map.show
                }),
                JR = (0, dR.B)(ZR.map.show);
              iR = () => {
                RR(), JR()
              }
            }!VR && ZR.skills.getSnapshot().enabled && (VR = (0, XR.p)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: ZR.skills.show
            })), !WR && ZR.collections.getSnapshot().enabled && (WR = (0, XR.p)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: ZR.collections.show
            })), !wR && ZR.quests.getSnapshot().enabled && (wR = (0, XR.p)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: ZR.quests.show
            })), !bR && ZR.autographs.getSnapshot().enabled && (bR = (0, XR.p)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: ZR.autographs.show
            }));
            const uR = ZR.dungeons.getSnapshot().enabled;
            var fR;
            (VR || wR || uR) && UR !== uR && (UR = uR, null === (fR = rR) || void 0 === fR || fR(), rR = (0, XR.p)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: lq
              },
              disabled: !uR,
              panel: !0,
              onClick: ZR.dungeons.show
            }));
            qR || (qR = (0, dR.G)((0, MR.createElement)(Gq, {
              controller: ZR
            }), {
              content: (0, MR.createElement)(yq, {
                controller: ZR
              }),
              onClose: ZR.close
            }))
          },
          gK: () => {
            var RR;
            for (const JR of FR.values()) JR.gK();
            QR.gK(), null === (RR = NR) || void 0 === RR || RR.gK(), ZR.skills.gK(), ZR.quests.gK(), ZR.dailyReward.gK(), ZR.mailbox.gK(), ZR.map.gK()
          }
        }
      }
  },
  39722: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      g: () => tR
    });
    var yR = GR(377);
    const tR = (0, yR.Bb)([0, 0, -1]),
      uR = [{
        name: "S",
        bearing: (0, yR.Bb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, yR.Bb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: tR
      }, {
        name: "W",
        bearing: (0, yR.Bb)([1, 0, 0])
      }]
  },
  39713: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      h: () => uR
    });
    var yR = GR(39722);

    function tR(RR, JR, GR) {
      return [100 * (GR.mapMaxX - RR) / (GR.mapMaxX - GR.mapMinX), 100 * (JR - GR.mapMinZ) / (GR.mapMaxZ - GR.mapMinZ)]
    }

    function uR(RR, JR, GR, uR) {
      const [ZR, qR] = tR(RR, JR, uR), iR = yR.g - GR;
      return {
        rotation: iR,
        transform: `rotate(${iR}rad) translate(-${ZR}%, -${qR}%)`
      }
    }
  },
  37415: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => yR
    });
    const yR = "skyblockSkills",
      tR = "skills_test_gym"
  },
  39773: (RR, JR, GR) => {
    var yR = {
      "./combat_1.png": 39776,
      "./dungeon_crumbling_crypt.png": 39781,
      "./dungeon_frozen_hollow.png": 39786,
      "./dungeon_wildwood_grove.png": 39791,
      "./dungeons.png": 39795,
      "./farming_1.png": 39800,
      "./fishing_1.png": 39808,
      "./hub.png": 39812,
      "./island.png": 39815,
      "./mining_1.png": 39818,
      "./mining_1_bridge.png": 39825,
      "./mining_1_gallery.png": 39833,
      "./mining_1_hollow.png": 39840,
      "./mining_1_village.png": 39842
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 39773
  },
  39776: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39781: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39786: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39791: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39795: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39800: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39808: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39812: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39815: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39818: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39825: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39833: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39840: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39842: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);