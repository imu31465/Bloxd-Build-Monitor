export const id = 249;
export const ids = [60, 249];
export const modules = {
  39927: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb, wb) {
      return eb.set(bb, wb), bb
    }

    function pb(bb) {
      var wb;
      return null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : null
    }
  },
  39780: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      constructor(bb, wb, Mb) {
        this.iI = bb, this.beforeOpen = wb, this.afterClose = Mb, this.open = !1, this.BC = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.BC && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(bb) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(bb)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.BC = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.BC || (this.snapshot = this.buildSnapshot(), this.iI(this.snapshot))
      }
    }
  },
  39948: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      SkyblockEntityFacing: () => gb,
      needsSkyblockEntityFacing: () => Vb
    });
    var eb = Mb(655),
      Hb = Mb(3059),
      pb = Mb(39953);

    function Vb(bb, wb) {
      if (bb.metaInfo === eb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let Mb = null === wb || void 0 === wb ? void 0 : wb.get(bb.meshOpts);
      if (void 0 === Mb) {
        var pb, Vb;
        const eb = (0, Hb.f)(bb);
        Mb = !1, "pig_napoleon" === (null === eb || void 0 === eb || null === (pb = eb.opts.textures) || void 0 === pb ? void 0 : pb.head) ? Mb = !0 : "npc_pig_head" === (null === eb || void 0 === eb || null === (Vb = eb.opts.textures) || void 0 === Vb ? void 0 : Vb.head) && (Mb = "sitting" === eb.opts.pose || "sitting"), wb && (wb.size >= 256 && wb.clear(), wb.set(bb.meshOpts, Mb))
      }
      return "sitting" === Mb ? "sitting" === bb.pose : Mb
    }(0, pb.e)("skyblock", ((bb, wb) => {
      wb.setFacingTolerance(Vb(bb) ? 0 : null)
    }));
    class gb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = wb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var wb;
          const Mb = this.api.getEntityInfo(bb);
          Mb && (Vb(Mb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (wb = this.alsoVisit) || void 0 === wb || wb.call(this, bb, Mb))
        }
      }
      sO() {
        const {
          api: bb
        } = this, wb = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const Mb of this.facing) wb.has(Mb) || bb.setFacingTolerance(Mb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = wb
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39763: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Dg
    });
    const eb = "island";
    var Hb = Mb(39767);

    function pb(bb, wb, Mb) {
      const pb = "local" === wb,
        gb = bb.background,
        lb = wb => gb ? (0, Hb.c)(wb[0] - bb.mapOrigin[0], wb[2] - bb.mapOrigin[2], gb.bounds) : [50, 50],
        Lb = (bb.insideDungeon ? [] : bb.landmarks).map((bb => {
          var wb, eb;
          return {
            id: bb.id,
            name: Mb(bb.visited && bb.nameKey ? null !== (wb = bb.mapLabelKey) && void 0 !== wb ? wb : bb.nameKey : "skyblockGame:mapUnknown"),
            icon: bb.visited && null !== (eb = bb.icon) && void 0 !== eb ? eb : "unknown",
            visited: bb.visited,
            current: !1,
            position: lb(bb.position),
            travelKind: "landmark",
            travelId: bb.id
          }
        })),
        Ib = bb.zones.map((wb => {
          var eb;
          return {
            id: wb.id,
            name: Mb(wb.visited && wb.nameKey ? wb.nameKey : "skyblockGame:mapUnknown"),
            icon: wb.visited && null !== (eb = wb.icon) && void 0 !== eb ? eb : "unknown",
            visited: wb.visited,
            current: wb.id === bb.zoneId,
            position: wb.position,
            thumbnail: wb.visited ? wb.id : void 0,
            travelKind: "zone",
            travelId: wb.id
          }
        })),
        Ob = bb.insideDungeon || !gb ? [] : bb.portals.map((bb => {
          var wb;
          return {
            id: bb.id,
            name: Mb(null !== (wb = bb.nameKey) && void 0 !== wb ? wb : "skyblockGame:mapUnknown"),
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            visited: bb.visited,
            current: !1,
            position: lb(bb.position),
            colour: bb.colour,
            travelKind: "zone",
            travelId: bb.destination
          }
        })),
        Ub = pb ? Lb : Ib,
        tb = Ub.filter((bb => bb.visited)).length,
        Cb = gb ? (gb.bounds.mapMaxX - gb.bounds.mapMinX) / (gb.bounds.mapMaxZ - gb.bounds.mapMinZ) : 2,
        Eb = gb ? JSON.stringify([gb.bounds, bb.mapOrigin]) : "";
      return {
        local: pb,
        points: Ub,
        portals: pb ? Ob : [],
        progress: Ub.length ? Mb("skyblockGame:mapDiscovered", {
          current: String(tb),
          total: String(Ub.length)
        }) : null,
        percent: Ub.length ? 100 * tb / Ub.length : 0,
        canTravel: [...Ub, ...pb ? Ob : []].some((bb => bb.visited && !bb.current)),
        noLandmarks: pb && !bb.insideDungeon && 0 === Lb.length,
        background: gb ? {
          imageKey: gb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: Eb,
          label: Mb(gb.labelKey),
          colour: gb.backgroundColour,
          ratio: Cb
        } : null,
        connections: Vb(bb.zones),
        minimap: gb ? {
          imageKey: gb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: Eb,
          label: Mb(gb.labelKey),
          colour: gb.backgroundColour,
          caption: Mb(bb.zoneId === eb ? "skyblockGame:zoneIsland" : gb.labelKey),
          width: (gb.bounds.mapMaxX - gb.bounds.mapMinX) / gb.minimapSpan * 100 + "%",
          height: (gb.bounds.mapMaxZ - gb.bounds.mapMinZ) / gb.minimapSpan * 100 + "%",
          markers: [...Lb, ...Ob]
        } : null
      }
    }

    function Vb(bb) {
      const wb = new Set;
      return bb.flatMap((Mb => Mb.connections.flatMap((eb => {
        const Hb = bb.find((bb => bb.id === eb)),
          pb = [Mb.id, eb].sort().join("|");
        return !Hb || wb.has(pb) ? [] : (wb.add(pb), [{
          id: `${Mb.id}-${eb}`,
          start: Mb.position,
          end: Hb.position,
          explored: Mb.visited && Hb.visited
        }])
      }))))
    }
    var gb = Mb(39780);
    class lb extends gb.e {}
    const Lb = "skyblockMapView";
    class Ib extends lb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, eb, Hb), this.requestTravel = wb, this.translate = Mb, this.now = pb, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = bb => {
          this.tab = bb, this.feedbackKey = "", this.emit()
        }, this.travel = (bb, wb) => {
          if (!this.map || this.pending || this.BC) return;
          const Mb = ("zone" === bb ? this.map.zones : this.map.landmarks).find((bb => bb.id === wb));
          if (Mb) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Mb && !Mb.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Mb.visited)
              if ("zone" === bb && wb === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Mb = ++this.nextRequestId;
                this.pending = {
                  requestId: Mb,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: bb,
                  id: wb,
                  requestId: Mb
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
      setTranslator(bb) {
        this.translate = bb, this.emit()
      }
      EO(bb) {
        var wb;
        if (!this.BC)
          if ("entities" !== bb.kind)
            if ("open" !== bb.kind) {
              var Mb, eb;
              if ("snapshot" === bb.kind)(null === (Mb = bb.snapshot) || void 0 === Mb ? void 0 : Mb.zoneId) !== (null === (eb = this.map) || void 0 === eb ? void 0 : eb.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = bb.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === bb.kind) {
                var Hb;
                bb.requestId === (null === (Hb = this.pending) || void 0 === Hb ? void 0 : Hb.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (bb.requestId === (null === (wb = this.pending) || void 0 === wb ? void 0 : wb.requestId)) {
                var pb;
                this.pending = null, this.feedbackKey = null !== (pb = bb.errorKey) && void 0 !== pb ? pb : "", null === bb.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = bb.entities
      }
      sO() {
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
          presentation: this.map ? pb(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var Ob = Mb(382);
    const Ub = 67.5 * Math.PI / 180;

    function tb(bb, wb) {
      const Mb = Math.abs(bb);
      if (Mb > Ub || wb.trackHalfWidth <= 0) return null;
      const eb = wb.trackHalfWidth,
        Hb = wb.screenHalfWidth / (wb.tanHalfFovX * Math.max(.5, Math.cos(wb.pitch))),
        pb = Math.min(Math.atan(.6 * eb / Hb), .75 * Ub),
        Vb = Hb * Math.tan(pb);
      let gb;
      if (Mb <= pb) gb = Hb * Math.tan(Mb);
      else {
        const bb = Ub - pb,
          wb = Math.max(0, Hb * bb / (Math.cos(pb) ** 2 * (eb - Vb)) - 1),
          lb = (Mb - pb) / bb;
        gb = Vb + (eb - Vb) * (1 + wb) * lb / (1 + wb * lb)
      }
      return 50 + Math.sign(bb) * gb * 50 / eb
    }
    class Cb {
      constructor(bb, wb) {
        this.map = bb, this.visited = wb, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = wb ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.landmarks.filter((bb => bb.visited === this.visited)).map((bb => {
          var wb, Mb;
          return {
            id: `landmark:${bb.id}`,
            position: bb.position,
            icon: null !== (wb = bb.icon) && void 0 !== wb ? wb : "unknown",
            nameKey: null !== (Mb = bb.nameKey) && void 0 !== Mb ? Mb : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Eb {
      constructor(bb, wb, Mb, eb) {
        this.map = bb, this.kind = wb, this.position = Mb, this.alive = eb, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = wb, this.range = "enemy" === wb ? 48 : 64, this.limit = 12
      }
      Qm(bb) {
        if ("enemy" !== this.kind || this.alive(bb.IM)) return this.position(bb.IM)
      }
      getPoints() {
        const bb = [];
        for (const eb of this.map.getEntities()) {
          if (eb.kind !== this.kind || "enemy" === this.kind && !this.alive(eb.compassEntityId)) continue;
          const Hb = this.position(eb.compassEntityId);
          var wb, Mb;
          if (Hb) bb.push({
            id: `${this.kind}:${eb.compassEntityId}`,
            IM: eb.compassEntityId,
            kind: this.kind,
            icon: null !== (wb = eb.icon) && void 0 !== wb ? wb : eb.npcSkin ? `npc_${eb.npcSkin}` : this.kind,
            displayName: eb.displayName,
            position: Hb,
            nameKey: null !== (Mb = eb.nameKey) && void 0 !== Mb ? Mb : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return bb
      }
    }
    class Fb {
      constructor(bb) {
        this.map = bb, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.portals.map((bb => {
          var wb;
          return {
            id: "portal:" + bb.id,
            kind: "portal",
            position: bb.position,
            nameKey: null !== (wb = bb.nameKey) && void 0 !== wb ? wb : "skyblockGame:compassUnvisitedZone",
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            colour: bb.colour
          }
        }))
      }
    }
    class Bb {
      constructor(bb) {
        this.target = bb, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const bb = this.target();
        return bb ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: bb.position,
          nameKey: bb.nameKey
        }] : []
      }
    }

    function sb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.position;
      const Hb = eb[0] - wb[0],
        pb = eb[2] - wb[2];
      return {
        ...bb,
        position: eb,
        offset: Ob.e.computeShortestRotation(Mb, (0, Ob.Lb)([Hb, 0, pb])),
        distance: Math.hypot(Hb, eb[1] - wb[1], pb)
      }
    }
    let mb;

    function hb(bb, wb) {
      var Mb;
      return (null === (Mb = mb) || void 0 === Mb ? void 0 : Mb.locale) !== wb && (mb = {
        locale: wb,
        near: new Intl.NumberFormat(wb, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(wb, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (bb < 10 ? mb.near : mb.far).format(bb)
    }
    class zb {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(bb) {
        return this.providers.set(bb.id, bb), this.refreshAt = 0, () => {
          this.providers.get(bb.id) === bb && (this.providers.delete(bb.id), this.refreshAt = 0)
        }
      }
      frame(bb, wb, Mb) {
        if (Mb >= this.refreshAt) {
          this.refreshAt = Mb + 200, this.candidates = [];
          for (const wb of this.providers.values()) {
            if (!wb.enabled) continue;
            const Mb = wb.getPoints().map((wb => {
              const Mb = wb.position;
              return {
                point: wb,
                distance: Math.hypot(Mb[0] - bb[0], Mb[1] - bb[1], Mb[2] - bb[2])
              }
            })).filter((bb => bb.distance <= wb.range)).sort(((bb, wb) => bb.distance - wb.distance)).slice(0, wb.limit);
            for (const {
                point: bb
              }
              of Mb) this.candidates.push({
              provider: wb,
              point: bb
            })
          }
        }
        const eb = [];
        for (const {
            point: Hb,
            provider: pb
          }
          of this.candidates) {
          if (!pb.enabled) continue;
          const Mb = pb.Qm ? pb.Qm(Hb) : Hb.position;
          if (Mb) {
            const pb = sb(Hb, bb, wb, Mb);
            Math.abs(pb.offset) <= Ub && eb.push(pb)
          }
        }
        return eb
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Xb = Mb(3538),
      xb = Mb(64);
    const jb = [{
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
      Kb = jb.length;

    function rb(bb) {
      return bb >= Kb ? 1 : bb + 1
    }
    const Rb = "skyblockQuests",
      Db = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      cb = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Yb(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Mb = Math.max(0, Math.floor(bb)),
        eb = Math.floor(Mb % 1e3 / 100),
        Hb = Math.floor(Mb / 1e3),
        pb = Hb % 60,
        Vb = Math.floor(Hb / 60),
        gb = Vb % 60,
        lb = Math.floor(Vb / 60),
        Lb = bb => bb < 10 ? `0${bb}` : String(bb),
        Ib = wb ? `.${eb}` : "";
      return lb > 0 ? `${lb}:${Lb(gb)}:${Lb(pb)}${Ib}` : `${gb}:${Lb(pb)}${Ib}`
    }
    const Zb = "devquests",
      fb = "none",
      Ab = {
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
      Wb = "Compressed Messy Stone",
      Jb = {
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
      Sb = ["Stone", "Diorite", "Andesite", "Granite"],
      Nb = new Set(Sb),
      vb = (Object.keys(Jb), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Qb = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Gb(bb, wb) {
      const Mb = Math.floor(5 * bb / (2 * wb + 1));
      return Math.min(4, Math.max(0, Mb))
    }
    var qb = Mb(1313);
    var ab = Mb(37587);
    var ib = Mb(3531),
      ub = Mb(29),
      db = Mb(10212);
    const Pb = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      nb = 1e3;

    function yb(bb) {
      return Math.max(0, bb)
    }

    function ob(bb) {
      return 1 + .01 * yb(bb)
    }

    function Tb(bb) {
      return 1 + .005 * yb(bb)
    }

    function kb(bb) {
      return 1 + .005 * yb(bb)
    }

    function bw(bb) {
      return .01 * yb(bb)
    }

    function ww(bb) {
      return 150 / (150 + yb(bb))
    }

    function Mw(bb) {
      return 1 + .002 * yb(bb)
    }

    function ew(bb) {
      return Math.round(10 * bb) / 10
    }

    function Hw(bb, wb) {
      switch (bb) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ew(100 * (Tb(wb) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ew(100 * (ob(wb) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ew(100 * (kb(wb) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ew(100 * bw(wb))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ew(100 * (1 - ww(wb)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ew(100 * (Mw(wb) - 1))
          }
      }
    }

    function pw(bb) {
      return "farming" === bb ? 200 : 100
    }

    function Vw(bb, wb) {
      if (!Number.isSafeInteger(bb) || bb < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Mb = pw(wb),
        eb = bb => function(bb, wb) {
          return pw(bb) * wb * (wb + 1) / 2
        }(wb, bb);
      let Hb = Math.min(nb, Math.floor((Math.sqrt(8 * bb / Mb + 1) - 1) / 2));
      return Hb < nb && eb(Hb + 1) <= bb ? Hb++ : eb(Hb) > bb && Hb--, {
        totalXp: bb,
        level: Hb,
        xpIntoLevel: bb - eb(Hb),
        xpForNextLevel: Hb === nb ? null : Mb * (Hb + 1)
      }
    }
    const gw = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function lw(bb) {
      return gw.has(bb)
    }
    const Lw = new Set(Ob.zb);

    function Iw(bb) {
      return Lw.has(bb)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Ow = {
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
      Uw = {
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
      tw = {
        ...Uw,
        ...Object.fromEntries(Object.entries(vb).map((bb => {
          let [wb, Mb] = bb;
          return [wb, 9 * Uw[Mb]]
        })))
      },
      Cw = {
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
      Ew = {
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
    const Fw = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Bw = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function sw(bb) {
      return `rgb(${Bw[bb].join(", ")})`
    }

    function mw(bb, wb, Mb) {
      if (!Mb) return bb(wb);
      const eb = {};
      for (const [Hb, pb] of Object.entries(Mb)) eb[Hb] = "string" === typeof pb ? pb : bb(pb.translationKey);
      return bb(wb, eb)
    }
    class hw {
      constructor(bb, wb) {
        this.now = bb, this.getJournal = wb, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.dg = !1, this.onShown = () => {}
      }
      enqueue(bb) {
        const wb = zw(bb);
        if (wb) this.pending.push(bb);
        else {
          const wb = this.pending.findIndex(zw);
          this.pending.splice(-1 === wb ? this.pending.length : wb, 0, bb)
        }
        return (null === this.current || null !== this.followUp && !wb) && (this.advance(), !0)
      }
      setHeld(bb) {
        return this.dg = bb, !bb && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      sO() {
        const bb = this.getJournal(),
          wb = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === wb ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === wb || void 0 === wb ? void 0 : wb.kind) && bb && bb.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === wb || void 0 === wb ? void 0 : wb.kind)) {
          const bb = this.findFollowUp(this.current);
          if ("step" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || bb.questId !== wb.questId || bb.step.id !== wb.step.id) return this.showFollowUp(bb, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(bb, wb, Mb) {
        var eb, Hb, pb, Vb;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, bb, Mb);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, bb);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, bb, wb);
        const {
          questCompletionKind: gb,
          questCompletionNameKey: lb
        } = this.current, Lb = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Ib = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Ob = "step" === (null === (eb = this.followUp) || void 0 === eb ? void 0 : eb.kind) ? this.followUp : null, Ub = "explore" === (null === (Hb = this.followUp) || void 0 === Hb ? void 0 : Hb.kind);
        let tb;
        return tb = Ub ? bb("skyblockGame:questExploreTitle") : null !== Ob ? "quest" === gb ? bb("skyblockGame:questNextQuestTitle", {
          quest: bb(Ob.questNameKey)
        }) : bb("skyblockGame:questNextStepTitle") : bb("started" === gb ? "skyblockGame:questStartedTitle" : "quest" === gb ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? gb : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: tb,
          name: Ub ? wb("skyblockGame:questExploreName") : null !== Ob ? mw(wb, Ob.step.nameKey, Ob.step.nameParams) : mw(wb, lb, Lb),
          description: Ub ? wb("skyblockGame:questExploreDescription") : null === Ob ? null : mw(wb, Ob.step.descriptionKey, Ob.step.descriptionParams),
          reward: null === this.followUp && Ib > 0 ? wb("skyblockGame:questCoinRewardSuffix", {
            amount: Ib.toLocaleString(Mb)
          }) : null,
          iconItem: null !== (pb = null === Ob || void 0 === Ob ? void 0 : Ob.step.questIconItem) && void 0 !== pb ? pb : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Ob && (null === (Vb = this.getJournal()) || void 0 === Vb ? void 0 : Vb.trackedQuestId) === Ob.questId ? Ob.step.nameKey : null
        }
      }
      getSkillLevelView(bb, wb, Mb) {
        let {
          skill: eb,
          beforeLevel: Hb,
          level: pb
        } = bb;
        const Vb = Hw(eb, Hb),
          gb = Hw(eb, pb);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: wb(`skyblockGame:${eb}`),
          name: wb("skyblockGame:skillLevelUp", {
            to: pb.toLocaleString(Mb)
          }),
          description: Vb.percent === gb.percent ? null : wb(`${gb.translationKey}Change`, {
            before: Vb.percent.toLocaleString(Mb),
            after: gb.percent.toLocaleString(Mb)
          }),
          reward: null,
          iconItem: Fw[eb],
          accent: sw(eb),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(bb, wb) {
        let {
          landmarkNameKey: Mb
        } = bb;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: wb("skyblockGame:landmarkDiscovered"),
          name: wb(Mb),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(bb, wb, Mb) {
        let {
          titleKey: eb,
          textKey: Hb,
          params: pb = {},
          nameKeys: Vb = {},
          iconItem: gb = null
        } = bb;
        const lb = {
          ...pb
        };
        for (const [Lb, Ib] of Object.entries(Vb)) lb[Lb] = wb(Ib);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: wb(eb),
          name: Mb(Hb, lb),
          description: null,
          reward: null,
          iconItem: gb,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var bb;
        if (null !== this.followUp) return 5600;
        switch (null === (bb = this.current) || void 0 === bb ? void 0 : bb.questCompletionKind) {
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
      showFollowUp(bb, wb) {
        null === bb || this.dg ? this.advance() : (this.followUp = bb, this.token++, this.shownAt = this.now(), this.expiresAt = null !== wb && void 0 !== wb ? wb : this.shownAt + this.durationMs())
      }
      findFollowUp(bb) {
        var wb;
        const Mb = this.getJournal();
        if (!Mb || this.hasPendingQuestPopup() || zw(bb)) return null;
        const eb = "started" === bb.questCompletionKind ? Mb.active.some((wb => wb.id === bb.questCompletionQuestId)) : "quest" === bb.questCompletionKind ? Mb.completed.some((wb => wb.id === bb.questCompletionQuestId)) : [...Mb.active, ...Mb.completed].some((wb => wb.id === bb.questCompletionQuestId && wb.subquests.some((wb => wb.id === bb.questCompletionStepId && "completed" === wb.status))));
        if (!eb) return null;
        if ("quest" === bb.questCompletionKind && 0 === Mb.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Hb = Mb.active.find((bb => bb.id === Mb.trackedQuestId)),
          pb = null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb.subquests.find((bb => "ready" === bb.status))) && void 0 !== wb ? wb : null === Hb || void 0 === Hb ? void 0 : Hb.subquests.find((bb => "active" === bb.status));
        return pb ? {
          kind: "step",
          questId: Hb.id,
          questNameKey: Hb.nameKey,
          step: pb
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((bb => !zw(bb)))
      }
      advance() {
        var bb;
        this.current = this.dg ? null : null !== (bb = this.pending.shift()) && void 0 !== bb ? bb : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function zw(bb) {
      return Xw(bb.questCompletionKind)
    }

    function Xw(bb) {
      return "skillLevel" === bb || "landmark" === bb || "npcNote" === bb
    }
    var xw = Mb(39786),
      jw = Mb(39789),
      Kw = Mb(39752),
      rw = Mb(3078);
    const Rw = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Dw(bb) {
      const wb = new rw.j(bb);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Rw.map((bb => {
          let {
            lobes: Mb,
            amount: eb
          } = bb;
          return {
            lobes: Mb[Math.floor(wb.next() * Mb.length)],
            amount: eb[0] + wb.next() * (eb[1] - eb[0]),
            phase: 2 * wb.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Yw(bb) {
      let {
        radius: wb,
        squareness: Mb,
        wobbles: eb,
        samples: Hb
      } = bb;
      const pb = [];
      for (let Vb = 0; Vb < Hb; Vb++) {
        const bb = 2 * Math.PI * Vb / Hb,
          gb = Math.cos(bb),
          lb = Math.sin(bb),
          Lb = wb * (Math.abs(gb) ** Mb + Math.abs(lb) ** Mb) ** (-1 / Mb) * eb.reduce(((wb, Mb) => {
            let {
              lobes: eb,
              amount: Hb,
              phase: pb
            } = Mb;
            return wb + Hb * Math.sin(eb * bb + pb)
          }), 1);
        pb.push(`${(50+Lb*gb).toFixed(2)} ${(50+Lb*lb).toFixed(2)}`)
      }
      return `M${pb.join("L")}Z`
    }
    const Zw = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class fw {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.BC = !1, this.mountCompass = bb => {
          var wb;
          if (null === (wb = this.stopLayout) || void 0 === wb || wb.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !bb || this.BC) return;
          const Mb = bb.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: bb,
            track: Mb,
            label: bb.querySelector(".SkyblockCompassLabel")
          }, Mb.replaceChildren();
          for (let Hb = 0; Hb < 4; Hb++) {
            const bb = document.createElement("span");
            bb.className = "SkyblockCompassCardinal", Mb.appendChild(bb), this.cardinals.push(bb)
          }
          const eb = (0, Kw.e)(Zw, [bb], this.layout);
          this.stopLayout = () => {
            eb(), Mb.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = bb => {
          this.terrain = this.BC ? null : bb, this.render(this.frame)
        }, this.mountMinimapSearchArea = bb => {
          this.mountSearchArea("minimap", bb)
        }, this.mountMapSearchArea = bb => {
          this.mountSearchArea("map", bb)
        }, this.mountPlayer = bb => {
          this.player = this.BC ? null : bb, this.render(this.frame)
        }, this.mountWaypoint = bb => {
          var wb, Mb;
          if (null === (wb = this.stopWaypoint) || void 0 === wb || wb.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !bb || this.BC) return;
          const eb = bb.querySelector(".SkyblockQuestWaypointMarker");
          eb.replaceChildren((0, jw.d)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: bb,
            marker: eb,
            clip: bb.querySelector(".SkyblockQuestWaypointTextClip"),
            text: bb.querySelector(".SkyblockQuestWaypointText"),
            label: bb.querySelector(".SkyblockQuestWaypointLabel"),
            distance: bb.querySelector(".SkyblockQuestWaypointDistance"),
            hint: bb.querySelector(".SkyblockQuestWaypointHint")
          };
          const Hb = () => {
              this.waypointMarkerSize = {
                width: eb.offsetWidth,
                height: eb.offsetHeight
              }, this.waypointInset = {
                x: eb.offsetWidth / 2 + 8,
                top: eb.offsetHeight + 8,
                bottom: 8
              }
            },
            pb = new ResizeObserver((() => {
              Hb(), this.render(this.frame)
            }));
          pb.observe(eb, {
            box: "border-box"
          });
          const Vb = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Vb), null === (Mb = window.visualViewport) || void 0 === Mb || Mb.addEventListener("resize", Vb), this.stopWaypoint = () => {
            var bb;
            pb.disconnect(), window.removeEventListener("resize", Vb), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", Vb)
          }, Vb(), Hb(), this.render(this.frame)
        }, this.mountWaypointOrigin = bb => {
          var wb;
          if (null === (wb = this.stopWaypointOrigin) || void 0 === wb || wb.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = bb && !this.BC ? Number(bb.dataset.notificationToken) : null, bb && !this.BC && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const wb = {
              nameKey: bb.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = wb;
            const Mb = () => {
                const Mb = bb.getBoundingClientRect();
                wb.x = (Mb.left + Mb.width / 2) / window.innerWidth * 100, wb.y = (Mb.top + Mb.height / 2) / window.innerHeight * 100
              },
              eb = new ResizeObserver(Mb);
            eb.observe(bb.parentElement), eb.observe(bb), window.addEventListener("resize", Mb), this.stopWaypointOrigin = () => {
              eb.disconnect(), window.removeEventListener("resize", Mb)
            }, Mb()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const bb = this.compass.root,
            wb = getComputedStyle(bb),
            Mb = getComputedStyle(document.documentElement),
            eb = parseFloat(Mb.fontSize),
            Hb = parseFloat(wb.getPropertyValue("--compass-icon-size")) * eb,
            pb = "1" === wb.getPropertyValue("--compass-fit-top").trim(),
            Vb = pb ? 1 : 8,
            gb = Array.from(document.querySelectorAll(Zw), (bb => {
              var wb;
              return (null !== (wb = bb.querySelector(".MiddleTextTop")) && void 0 !== wb ? wb : bb).getBoundingClientRect()
            })).filter((bb => bb.width > 0 && bb.height > 0));
          let lb = (parseFloat(Mb.getPropertyValue("--notchTop")) || 0) + Vb,
            Lb = "";
          if (pb) {
            const wb = window.innerWidth / 2,
              Mb = bb.getBoundingClientRect().height,
              pb = [lb, ...gb.map((bb => Math.max(lb, bb.bottom + Vb)))].sort(((bb, wb) => bb - wb));
            for (const bb of pb) {
              let pb = wb - 8;
              for (const eb of gb) eb.bottom + Vb <= bb || eb.top >= bb + Mb + Vb || (pb = Math.min(pb, eb.right <= wb ? wb - eb.right - 8 : eb.left - wb - 8));
              const Ib = 2 * pb - Hb;
              if (Ib >= 16 * eb) {
                Lb = `${Ib}px`, lb = bb;
                break
              }
            }
          }
          bb.style.maxWidth !== Lb && (bb.style.maxWidth = Lb);
          const Ib = bb.getBoundingClientRect(),
            Ob = this.compassSize.trackHalfWidth;
          if (Ib.width > 0) {
            const bb = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: bb.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Hb / bb.width
          }
          if (!Lb)
            for (const Ub of gb) Ub.right > Ib.left - 8 && Ub.left < Ib.right + 8 && (lb = Math.max(lb, Ub.bottom + Vb));
          bb.style.top = `${lb}px`, this.compassSize.trackHalfWidth !== Ob && this.render(this.frame)
        }
      }
      mountSearchArea(bb, wb) {
        this.searchAreas[bb] = this.BC ? null : wb, this.render(this.frame)
      }
      render(bb) {
        if (this.BC) return;
        if (this.frame = bb, this.compass && (Aw(this.compass.root, !bb), bb)) {
          const wb = this.compassSize.trackHalfWidth / 50;
          bb.compass.cardinals.forEach(((bb, Mb) => {
            const eb = this.cardinals[Mb];
            eb.textContent !== bb.name && (eb.textContent = bb.name), Aw(eb, bb.hidden), eb.style.translate = bb.left * wb + "px"
          }));
          const Mb = new Set;
          bb.compass.markers.forEach(((eb, Hb) => {
            var pb;
            Mb.add(eb.id);
            let Vb = this.markers.get(eb.id);
            Vb || (Vb = document.createElement("span"), Vb.className = "SkyblockCompassMarker", this.markers.set(eb.id, Vb), this.compass.track.appendChild(Vb)), Vb.dataset.icon !== eb.icon && (Vb.dataset.icon = eb.icon, Vb.replaceChildren((0, jw.d)(eb.icon))), Vb.style.color = null !== (pb = eb.colour) && void 0 !== pb ? pb : "", Vb.style.translate = eb.left * wb + "px", Vb.style.zIndex = String(bb.compass.markers.length - Hb), Vb.title !== eb.name && (Vb.title = eb.name)
          }));
          for (const [bb, eb] of this.markers) Mb.has(bb) || (eb.remove(), this.markers.delete(bb));
          this.compass.label.textContent !== bb.compass.label && (this.compass.label.textContent = bb.compass.label)
        }
        this.terrain && (Aw(this.terrain, !(null !== bb && void 0 !== bb && bb.minimap)), null !== bb && void 0 !== bb && bb.minimap && (this.terrain.style.transform = bb.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", bb.minimap.iconRotation)));
        const wb = null === bb || void 0 === bb ? void 0 : bb.searchArea;
        for (const Mb of [this.searchAreas.minimap, this.searchAreas.map])
          if (Mb && (Aw(Mb, !wb), wb)) {
            if (this.searchAreaPath.seed !== wb.shapeSeed && (this.searchAreaPath = {
                seed: wb.shapeSeed,
                d: Yw(Dw(wb.shapeSeed))
              }), Mb.dataset.shapeSeed !== wb.shapeSeed) {
              Mb.dataset.shapeSeed = wb.shapeSeed;
              for (const bb of Mb.querySelectorAll("path")) bb.setAttribute("d", this.searchAreaPath.d)
            }
            Mb.style.left = `${wb.left}%`, Mb.style.top = `${wb.top}%`, Mb.style.width = `${wb.width}%`, Mb.style.height = `${wb.height}%`
          } if (this.player && (Aw(this.player, !(null !== bb && void 0 !== bb && bb.player) || bb.player.hidden), null !== bb && void 0 !== bb && bb.player && (this.player.style.left = `${bb.player.left}%`, this.player.style.top = `${bb.player.top}%`, this.player.style.setProperty("--map-player-rotation", bb.player.rotation))), this.waypoint) {
          const {
            root: wb,
            marker: Mb,
            clip: eb,
            text: Hb,
            label: pb,
            distance: Vb,
            hint: gb
          } = this.waypoint, lb = !(null !== bb && void 0 !== bb && bb.waypoint) || null !== bb.waypoint.popupToken && bb.waypoint.popupToken !== this.waypointOriginToken;
          Aw(wb, lb);
          let Lb = 1;
          const Ib = this.waypointLaunch;
          if (!lb && Ib && bb.waypoint.nameKey === Ib.nameKey) {
            const bb = performance.now();
            Ib.startedAt ??= bb, Lb = Math.min(1, Math.max(0, (bb - Ib.startedAt - 450) / 1e3)), Mb.style.opacity = String(Math.min(1, (bb - Ib.startedAt) / 150)), 1 === Lb && (this.waypointLaunch = null)
          } else Mb.style.opacity = "", Ib && null !== Ib.startedAt && (this.waypointLaunch = null);
          if (wb.classList.toggle("Launching", Lb < 1), null !== bb && void 0 !== bb && bb.waypoint) {
            const wb = this.waypointInset,
              lb = "quest_talk" === bb.waypoint.markerIcon ? function(bb, wb, Mb) {
                if (!bb.text || null === bb.blockHeight || 0 === bb.nearness) return bb;
                const eb = bb.blockHeight / 100 * Mb.height,
                  Hb = -bb.nearness * (Ww * eb + wb.width / 2),
                  pb = bb.nearness * (Jw * eb + wb.height / 2);
                return {
                  ...bb,
                  text: {
                    x: bb.text.x + Hb / Mb.width * 100,
                    y: bb.text.y + pb / Mb.height * 100
                  }
                }
              }(bb.waypoint, this.waypointMarkerSize, this.viewport) : bb.waypoint,
              Ob = (0, xw.c)(lb, wb, this.viewport),
              Ub = Lb * Lb * (3 - 2 * Lb),
              tb = Lb < 1 ? Ib.x + (Ob.x - Ib.x) * Ub : Ob.x,
              Cb = Lb < 1 ? Ib.y + (Ob.y - Ib.y) * Ub : Ob.y;
            Mb.style.translate = `${tb}vw ${Cb}vh`, eb.style.clipPath = `inset(${wb.top}px ${wb.x}px ${wb.bottom}px)`, Aw(Hb, Lb < 1 || !bb.waypoint.text), Hb.style.opacity = String(1 - bb.waypoint.nearness), bb.waypoint.text && (Hb.style.translate = `${bb.waypoint.text.x}vw ${bb.waypoint.text.y}vh`), pb.textContent !== bb.waypoint.name && (pb.textContent = bb.waypoint.name), this.markerIcon !== bb.waypoint.markerIcon && (this.markerIcon = bb.waypoint.markerIcon, Mb.replaceChildren((0, jw.d)(this.markerIcon))), Vb.textContent !== bb.waypoint.distance && (Vb.textContent = bb.waypoint.distance), Aw(gb, null === bb.waypoint.hint), null !== bb.waypoint.hint && gb.textContent !== bb.waypoint.hint && (gb.textContent = bb.waypoint.hint)
          }
        }
      }
      dispose() {
        var bb, wb;
        this.mountWaypointOrigin(null), this.render(null), null === (bb = this.stopLayout) || void 0 === bb || bb.call(this), this.stopLayout = null, null === (wb = this.stopWaypoint) || void 0 === wb || wb.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.BC = !0
      }
    }

    function Aw(bb, wb) {
      bb.hidden !== wb && (bb.hidden = wb)
    }
    const Ww = .55,
      Jw = .6;
    var Sw = Mb(39776);
    const Nw = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class vw {
      constructor(bb, wb, Mb, eb) {
        this.map = bb, this.quests = wb, this.compass = Mb, this.display = new fw, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.BC = !1, this.snapshot = null, this.texts = new Map, this.translate = eb
      }
      setTranslator(bb, wb) {
        this.translate = bb, this.locale = wb, this.metresFormat = new Intl.NumberFormat(wb), this.texts.clear()
      }
      translateCached(bb, wb) {
        const Mb = void 0 === wb ? bb : `${bb} ${wb}`;
        let eb = this.texts.get(Mb);
        return void 0 === eb && (this.texts.size >= 500 && this.texts.clear(), eb = this.translate(bb, void 0 === wb ? void 0 : {
          distance: wb
        }), this.texts.set(Mb, eb)), eb
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(bb, wb, Mb) {
        if (this.BC) return;
        if (!bb) return this.snapshot = null, void this.display.render(null);
        const eb = this.map.getSnapshot().map,
          pb = Mb.cameraHeading,
          Vb = {
            ...this.display.compassSize,
            tanHalfFovX: Mb.tanHalfFovX,
            pitch: Mb.cameraPitch
          },
          gb = [];
        if (eb)
          for (const Hb of this.compass.frame(bb, pb, wb)) {
            const bb = tb(Hb.offset, Vb);
            null !== bb && gb.push({
              ...Hb,
              left: bb
            })
          }
        const lb = function(bb, wb) {
            const Mb = [],
              eb = bb => "quest" === bb.kind ? bb.distance - 1 : bb.distance,
              Hb = [...bb].sort(((bb, wb) => eb(bb) - eb(wb) || bb.id.localeCompare(wb.id)));
            for (const pb of Hb) {
              let bb = !1;
              if ("quest" !== pb.kind)
                for (const eb of Mb)
                  if (Math.abs(eb.left - pb.left) < wb) {
                    bb = !0;
                    break
                  } bb || Mb.push(pb)
            }
            return Mb
          }(gb, this.display.compassSpacing),
          Lb = function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Mb = null;
            for (const eb of bb) Math.abs(eb.offset) <= wb && (!Mb || eb.distance < Mb.distance || eb.distance === Mb.distance && Math.abs(eb.offset) < Math.abs(Mb.offset)) && (Mb = eb);
            return Mb
          }(lb),
          Ib = bb => {
            var wb;
            return null !== (wb = bb.displayName) && void 0 !== wb ? wb : this.translateCached(bb.nameKey)
          },
          Ub = {
            compass: {
              markers: lb.map((bb => ({
                id: bb.id,
                icon: bb.icon,
                colour: bb.colour,
                name: Ib(bb),
                left: bb.left
              }))),
              cardinals: Sw.b.map((bb => {
                let {
                  name: wb,
                  bearing: Mb
                } = bb;
                const eb = tb(Ob.e.computeShortestRotation(pb, Mb), Vb);
                return {
                  name: wb,
                  left: null !== eb && void 0 !== eb ? eb : 0,
                  hidden: null === eb
                }
              })),
              label: Lb ? `${Ib(Lb)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",hb(Lb.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== eb && void 0 !== eb && eb.background) {
          const wb = bb[0] - eb.mapOrigin[0],
            Mb = bb[2] - eb.mapOrigin[2],
            {
              rotation: Vb,
              transform: gb
            } = (0, Hb.g)(wb, Mb, pb, eb.background.bounds);
          Ub.minimap = {
            transform: gb,
            iconRotation: -Vb + "rad"
          };
          const [lb, Lb] = (0, Hb.c)(wb, Mb, eb.background.bounds);
          Ub.player = {
            left: lb,
            top: Lb,
            hidden: lb < 0 || Lb < 0 || lb > 100 || Lb > 100,
            rotation: -Vb + "rad"
          }
        }
        const {
          waypoint: Cb
        } = this.quests.getSnapshot();
        if ("search" === (null === Cb || void 0 === Cb ? void 0 : Cb.questMarkerIcon) && null !== eb && void 0 !== eb && eb.background) {
          const {
            bounds: bb
          } = eb.background, [wb, Mb] = (0, Hb.c)(Cb.position[0] - eb.mapOrigin[0], Cb.position[2] - eb.mapOrigin[2], bb);
          Ub.searchArea = {
            left: wb,
            top: Mb,
            width: 6400 / (bb.mapMaxX - bb.mapMinX),
            height: 6400 / (bb.mapMaxZ - bb.mapMinZ),
            shapeSeed: Cb.nameKey
          }
        }
        const Eb = this.quests.getNotificationSnapshot(),
          Fb = "completion" === (null === Eb || void 0 === Eb ? void 0 : Eb.phase) && !Xw(Eb.kind);
        if (Cb && !Fb) {
          const wb = Math.hypot(...Cb.position.map(((wb, Mb) => wb - bb[Mb]))),
            eb = Math.round(wb),
            Hb = "talk" === Cb.questMarkerIcon ? Math.min(1, Math.max(0, (10 - wb) / 5)) : 0,
            pb = Mb.projectWorldPosToViewport(Cb.position),
            Vb = pb && Mb.projectWorldPosToViewport([Cb.position[0], Cb.position[1] - 1, Cb.position[2]]);
          Ub.waypoint = {
            ...Mb.projectWorldPosToScreenPos(Cb.position),
            text: pb,
            nearness: Hb * Hb * (3 - 2 * Hb),
            blockHeight: pb && Vb ? Vb.y - pb.y : null,
            name: this.translateCached(Cb.nameKey),
            nameKey: Cb.nameKey,
            markerIcon: Cb.questMarkerIcon ? Nw[Cb.questMarkerIcon] : "quest",
            popupToken: (null === Eb || void 0 === Eb ? void 0 : Eb.waypointNameKey) === Cb.nameKey ? Eb.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(eb)),
            hint: "search" === Cb.questMarkerIcon && Math.hypot(Cb.position[0] - bb[0], Cb.position[2] - bb[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Ub, this.display.render(Ub)
      }
      dispose() {
        this.BC = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Qw = "skyblockSkillsView";
    class Gw extends lb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => bb,
          eb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Hb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = wb, this.translate = Mb, this.locale = eb, this.itemName = Hb, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, this.locale = wb, this.itemName = Mb, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(bb) {
        let wb = this.skillText.get(bb);
        return wb || (wb = {
          label: this.translate(`skyblockGame:${bb}`),
          description: this.translate(`skyblockGame:${bb}Description`)
        }, this.skillText.set(bb, wb)), wb
      }
      sources(bb) {
        if ("mining" === bb || "fishing" === bb) return this.buildSources(bb);
        let wb = this.sourceText.get(bb);
        return wb || (wb = this.buildSources(bb), this.sourceText.set(bb, wb)), wb
      }
      buildSources(bb) {
        const wb = this.translate;
        return "exploration" === bb ? [wb("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), wb("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === bb ? [wb("skyblockGame:logSource", {
          xp: this.number(Ow["Maple Log"])
        })] : "combat" === bb ? [wb("skyblockGame:creatureKillSource"), wb("skyblockGame:noEnvironmentalXp")] : "farming" === bb ? [wb("skyblockGame:cropSource", {
          xp: this.number(Cw["Wheat|FreshlyGrown"])
        }), wb("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), wb("skyblockGame:noYoungCropXp")] : Object.entries("mining" === bb ? tw : Ew).map((bb => {
          let [Mb, eb] = bb;
          return wb("skyblockGame:itemXpSource", {
            item: this.itemName(Mb),
            xp: this.number(eb)
          })
        }))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
      benefit(bb, wb) {
        const Mb = Hw(bb, wb);
        return this.translate(Mb.translationKey, {
          bonus: this.number(Mb.percent)
        })
      }
      EO(bb) {
        if (!this.BC) {
          if ("snapshot" === bb.kind) this.progress = bb.progress, this.pending.clear(), this.recent = null;
          else if ("award" === bb.kind && this.progress) {
            const {
              award: wb
            } = bb;
            this.progress = {
              ...this.progress,
              [wb.skill]: wb.after
            };
            for (const [bb, eb] of this.pending) eb.skill === wb.skill && this.pending.delete(bb);
            const Mb = wb.after.level > wb.before.level;
            this.recordGain(wb.skill, wb.amount, Mb ? ++this.nextLevelUpToken : null), Mb && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: wb.skill,
              beforeLevel: wb.before.level,
              level: wb.after.level
            })
          } else {
            if ("rejectBlock" === bb.kind) return void this.rejectBlock(bb.position);
            if ("open" === bb.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(bb, wb, Mb) {
        if (!this.progress || this.BC || Mb) return;
        const eb = function(bb, wb) {
          const Mb = bb.split("|")[0];
          return "Air" === wb || wb === `Barkless ${bb}` ? Object.hasOwn(Ow, Mb) ? {
            skill: "foraging",
            amount: Ow[Mb]
          } : "Air" !== wb ? null : Object.hasOwn(tw, bb) ? {
            skill: "mining",
            amount: tw[bb]
          } : lw(bb) ? {
            skill: "farming",
            amount: 10
          } : Iw(bb) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Cw, bb) ? {
            skill: "farming",
            amount: Cw[bb]
          } : Object.hasOwn(Jb, bb) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(wb, "Air");
        if (!eb) return;
        const Hb = bb.join(",");
        if (this.pending.has(Hb)) return;
        const pb = this.predictedProgress(eb.skill).totalXp + eb.amount;
        Number.isSafeInteger(pb) && (this.pending.set(Hb, {
          ...eb,
          expires: this.now() + 2e3
        }), this.recordGain(eb.skill, 0), this.emit())
      }
      rejectBlock(bb) {
        this.pending.delete(bb.join(",")) && this.emit()
      }
      sO() {
        if (this.BC) return;
        let bb = !1;
        for (const [wb, Mb] of this.pending) Mb.expires <= this.now() && (this.pending.delete(wb), bb = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, bb = !0), bb && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(bb, wb) {
        var Mb, eb;
        let Hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pb = (null === (Mb = this.recent) || void 0 === Mb ? void 0 : Mb.skill) === bb && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Vb = (null === (eb = this.recent) || void 0 === eb ? void 0 : eb.skill) === bb && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: bb,
          confirmed: pb + wb,
          expires: this.now() + 3e3,
          levelUpToken: null !== Hb && void 0 !== Hb ? Hb : Vb
        }
      }
      pendingXp(bb) {
        let wb = 0;
        for (const Mb of this.pending.values()) Mb.skill === bb && (wb += Mb.amount);
        return wb
      }
      predictedProgress(bb) {
        const wb = this.progress[bb],
          Mb = this.pendingXp(bb);
        return Mb ? Vw(wb.totalXp + Mb, bb) : wb
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var bb, wb, Mb;
        const eb = this.progress ? Pb.map((bb => {
            const wb = this.predictedProgress(bb);
            return {
              ...this.text(bb),
              icon: Fw[bb],
              benefit: this.benefit(bb, wb.level),
              sources: this.sources(bb),
              id: bb,
              selected: bb === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(wb.level)
              }),
              xp: null === wb.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(wb.xpIntoLevel),
                target: this.number(wb.xpForNextLevel)
              }),
              percent: null === wb.xpForNextLevel ? 100 : Math.min(100, wb.xpIntoLevel / wb.xpForNextLevel * 100)
            }
          })) : [],
          Hb = eb.find((bb => {
            var wb;
            return bb.id === (null === (wb = this.recent) || void 0 === wb ? void 0 : wb.skill)
          })),
          pb = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: eb,
          detail: null !== (bb = eb.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          overallLevel: this.progress ? Pb.reduce(((bb, wb) => bb + this.predictedProgress(wb).level), 0) : null,
          hud: Hb && pb > 0 ? {
            skill: Hb,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(pb)
            }),
            levelUpToken: null !== (wb = null === (Mb = this.recent) || void 0 === Mb ? void 0 : Mb.levelUpToken) && void 0 !== wb ? wb : null,
            colour: sw(Hb.id)
          } : null
        }
      }
    }
    const qw = Math.max(1600, 600, 950) + 400,
      aw = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      iw = "skyblockQuestsView",
      uw = "skyblockQuestNotificationView";
    class dw extends lb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Vb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(bb, eb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = wb, this.translate = Mb, this.now = Hb, this.locale = pb, this.publishNotification = Vb, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var bb, wb;
          this.selected = null !== (bb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.trackedQuestId) && void 0 !== bb ? bb : null, this.show()
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const bb = this.snapshot.detail;
          !this.BC && null !== bb && void 0 !== bb && bb.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(bb.id), this.emit())
        }, this.viewDialogue = () => {
          const bb = this.snapshot.detail;
          var wb;
          bb && (null === (wb = this.onViewDialogue) || void 0 === wb || wb.call(this, bb.id))
        }, this.notifications = new hw(Hb, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var bb, wb;
        return null !== (bb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.trackedQuestId) && void 0 !== bb ? bb : null
      }
      notify(bb) {
        !this.BC && this.notifications.enqueue(bb) && this.emitNotification()
      }
      setNotificationsHeld(bb) {
        (this.notifications.setHeld(bb) || bb) && this.emitNotification()
      }
      sO() {
        var bb, wb;
        if (this.BC) return;
        this.notifications.sO() && this.emitNotification();
        let Mb = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Mb = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Mb = !0);
        const eb = Pw(this.authoritative);
        null !== eb && void 0 !== eb && null !== (bb = eb.questClock) && void 0 !== bb && bb.running && this.clockText(eb) !== (null === (wb = this.snapshot.tracked) || void 0 === wb ? void 0 : wb.clock) && (Mb = !0), Mb && this.emit()
      }
      setTranslator(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = wb, this.emitNotification(), this.emit()
      }
      EO(bb) {
        if (!this.BC)
          if ("completion" === bb.kind) this.notify(bb.questCompletion);
          else if ("landmark" === bb.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: bb.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === bb.kind) {
          var wb, Mb, eb;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: bb.npcNoteTitleKey,
            textKey: bb.npcNoteTextKey,
            params: null !== (wb = bb.npcNoteParams) && void 0 !== wb ? wb : {},
            nameKeys: null !== (Mb = bb.npcNoteNameKeys) && void 0 !== Mb ? Mb : {},
            iconItem: null !== (eb = bb.npcNoteIconItem) && void 0 !== eb ? eb : null
          })
        } else if ("open" === bb.kind) this.show();
        else if ("guidance" === bb.kind) this.waypoint = bb.waypoint, this.compassTarget = bb.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === bb.kind) {
          this.authoritative = bb.snapshot, this.notifications.sO() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const wb = this.trackedStepPulse;
          this.updateTrackedStepPulse(bb.snapshot), this.emit(), this.trackedStepPulse > wb && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.BC || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var bb;
        return null !== (bb = this.translateWithIcons) && void 0 !== bb ? bb : this.translate
      }
      clockText(bb) {
        const wb = bb.questClock;
        if (!wb) return null;
        const Mb = wb.elapsedMs + (wb.running ? this.now() - this.receivedAt : 0);
        return void 0 === wb.countdownFromMs ? Yb(Mb, !1) : Yb(1e3 * Math.ceil(Math.max(0, wb.countdownFromMs - Mb) / 1e3), !1)
      }
      updateTrackedStepPulse(bb) {
        var wb, Mb, eb;
        const Hb = Pw(bb);
        if (!Hb) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const pb = bb => Hb.subquests.filter((wb => bb(wb.status))).map((bb => bb.id)),
          Vb = pb((bb => "completed" === bb || "skipped" === bb)),
          gb = pb((bb => "locked" !== bb)),
          lb = (null === (wb = this.trackedSteps) || void 0 === wb ? void 0 : wb.questId) === Hb.id && Hb.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (lb) {
          const bb = Vb.filter((bb => !lb.finished.has(bb))),
            wb = pb((bb => "active" === bb || "ready" === bb)).filter((bb => !lb.unlocked.has(bb)));
          bb.length > 0 && this.trackedStepPulse++, (bb.length > 0 || wb.length > 0) && (this.trackedChange = {
            finished: new Set(bb),
            unlocked: new Set(wb),
            expiresAt: this.now() + qw
          })
        } else {
          var Lb;
          this.trackedStepPulse = (null === (Lb = this.trackedSteps) || void 0 === Lb ? void 0 : Lb.questId) === Hb.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Hb.id,
          progress: Hb.progress,
          finished: new Set([...null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.finished) && void 0 !== Mb ? Mb : [], ...Vb]),
          unlocked: new Set([...null !== (eb = null === lb || void 0 === lb ? void 0 : lb.unlocked) && void 0 !== eb ? eb : [], ...gb])
        }
      }
      entry(bb, wb) {
        var Mb, eb;
        const Hb = bb.id === (null === (Mb = this.authoritative) || void 0 === Mb ? void 0 : Mb.trackedQuestId),
          pb = this.now() < this.trackAvailableAt,
          Vb = this.questTextTranslator(),
          gb = bb.subquests.map((wb => {
            var Mb, eb, pb, gb, lb, Lb;
            const Ib = null !== (Mb = wb.handInNpcName) && void 0 !== Mb ? Mb : bb.giverName,
              Ob = this.translate("skyblockGame:progress", {
                current: wb.progress.toLocaleString(this.locale),
                target: wb.target.toLocaleString(this.locale)
              }),
              Ub = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Ib ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [wb.status],
              tb = "active" === wb.status || "ready" === wb.status;
            return {
              id: wb.id,
              name: mw(Vb, wb.nameKey, wb.nameParams),
              description: mw(Vb, wb.descriptionKey, wb.descriptionParams),
              progress: Ob,
              status: wb.status,
              statusLabel: Ub ? this.translate(Ub, {
                npc: Ib
              }) : Ob,
              iconItem: tb && null !== (eb = wb.questIconItem) && void 0 !== eb ? eb : null,
              barPercent: "active" === wb.status && wb.showsProgressBar ? Math.min(100, 100 * wb.progress / wb.target) : null,
              justFinished: Hb && null !== (pb = null === (gb = this.trackedChange) || void 0 === gb ? void 0 : gb.finished.has(wb.id)) && void 0 !== pb && pb,
              justUnlocked: Hb && null !== (lb = null === (Lb = this.trackedChange) || void 0 === Lb ? void 0 : Lb.unlocked.has(wb.id)) && void 0 !== lb && lb
            }
          }));
        return {
          id: bb.id,
          name: mw(Vb, bb.nameKey, bb.nameParams),
          description: mw(Vb, bb.descriptionKey, bb.descriptionParams),
          progress: wb ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: bb.progress.toLocaleString(this.locale),
            target: bb.target.toLocaleString(this.locale)
          }),
          completed: wb,
          tracked: Hb,
          selected: bb.id === this.selected,
          canTrack: !wb && !Hb && !pb,
          trackLabel: this.translate(Hb ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : pb ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== bb.id,
          subquests: gb,
          focusStep: null !== (eb = gb.find((bb => null !== bb.barPercent))) && void 0 !== eb ? eb : null,
          clock: this.clockText(bb)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb;
        const Ib = [...null !== (bb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.active) && void 0 !== bb ? bb : [], ...null !== (Mb = null === (eb = this.authoritative) || void 0 === eb ? void 0 : eb.completed) && void 0 !== Mb ? Mb : []];
        var Ob, Ub, tb, Cb;
        Ib.some((bb => bb.id === this.selected)) || (this.selected = null !== (Ob = null !== (Ub = null === (tb = this.authoritative) || void 0 === tb ? void 0 : tb.trackedQuestId) && void 0 !== Ub ? Ub : null === (Cb = Ib[0]) || void 0 === Cb ? void 0 : Cb.id) && void 0 !== Ob ? Ob : null);
        const Eb = null !== (Hb = null === (pb = this.authoritative) || void 0 === pb ? void 0 : pb.active.map((bb => this.entry(bb, !1)))) && void 0 !== Hb ? Hb : [];
        Eb.sort(((bb, wb) => Number(wb.tracked) - Number(bb.tracked)));
        const Fb = null !== (Vb = null === (gb = this.authoritative) || void 0 === gb ? void 0 : gb.completed.map((bb => this.entry(bb, !0)))) && void 0 !== Vb ? Vb : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Eb,
          completed: Fb,
          completedExpanded: this.completedExpanded,
          detail: null !== (lb = [...Eb, ...Fb].find((bb => bb.selected))) && void 0 !== lb ? lb : null,
          tracked: null !== (Lb = Eb.find((bb => bb.tracked))) && void 0 !== Lb ? Lb : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Pw(bb) {
      var wb;
      return null !== (wb = null === bb || void 0 === bb ? void 0 : bb.active.find((wb => wb.id === bb.trackedQuestId))) && void 0 !== wb ? wb : null
    }
    const nw = "skyblockDungeonsView";
    class yw extends lb {
      constructor(bb, wb) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = wb, this.locale = Mb, this.requestEnter = eb, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const bb = this.pickerEntry(),
            wb = null === bb || void 0 === bb ? void 0 : bb.difficulties[this.pageIndex];
          void 0 !== wb && null !== wb.unlockedBoss && (this.close(), this.requestEnter(bb.id, wb.difficulty))
        }
      }
      setTranslator(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = wb, this.emit()
      }
      EO(bb) {
        var wb, Mb;
        if (!this.BC) return "open" === bb.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== bb.kind ? "snapshot" === bb.kind && (this.authoritative = bb.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (wb = null === (Mb = this.pickerEntry()) || void 0 === Mb ? void 0 : Mb.difficulties.length) && void 0 !== wb ? wb : 1) - 1)), null === bb.snapshot && this.open ? this.close() : this.emit()) : this.choose(bb.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(bb) {
        var wb;
        const Mb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.dungeons.find((wb => wb.id === bb));
        void 0 !== Mb ? this.open && this.pickerDungeonId === bb || (this.pickerDungeonId = bb, this.pageIndex = Math.max(0, Mb.difficulties.findLastIndex((bb => null !== bb.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${bb}`)
      }
      turnTo(bb) {
        var wb, Mb;
        const eb = null !== (wb = null === (Mb = this.pickerEntry()) || void 0 === Mb ? void 0 : Mb.difficulties.length) && void 0 !== wb ? wb : 0;
        bb < 0 || bb >= eb || bb === this.pageIndex || (this.pageIndex = bb, this.emit())
      }
      pickerEntry() {
        var bb, wb;
        return null !== (bb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.dungeons.find((bb => bb.id === this.pickerDungeonId))) && void 0 !== bb ? bb : null
      }
      difficulty(bb) {
        const wb = bb.completions > 0,
          Mb = null === bb.bestMs ? null : Yb(bb.bestMs);
        return {
          difficulty: bb.difficulty,
          label: this.translate(Db[bb.difficulty]),
          colour: cb[bb.difficulty],
          beaten: wb,
          bestTime: Mb,
          completions: bb.completions,
          summary: wb ? [null === Mb ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Mb
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: bb.completions.toLocaleString(this.locale)
          })].filter((bb => null !== bb)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(bb) {
        const wb = bb.difficulties.map((bb => this.difficulty(bb))),
          Mb = wb.filter((bb => bb.beaten)).length;
        return {
          id: bb.id,
          name: this.translate(bb.nameKey),
          selected: bb.id === this.selected,
          beatenSummary: `${Mb} / ${wb.length}`,
          difficulties: wb
        }
      }
      picker() {
        const bb = this.pickerEntry();
        if (null === bb || 0 === bb.difficulties.length) return null;
        const wb = bb.difficulties.map(((wb, Mb) => {
          var eb, Hb, pb, Vb;
          const gb = wb.unlockedBoss,
            lb = null === gb ? this.lockedHint(bb, Mb) : null;
          return {
            ...this.difficulty(wb),
            unlocked: null !== gb,
            bossName: null === gb ? null : this.translate(gb.bossNameKey),
            bossMobType: null !== (eb = null === gb || void 0 === gb ? void 0 : gb.bossMobType) && void 0 !== eb ? eb : null,
            bossMobVariation: null !== (Hb = null === gb || void 0 === gb ? void 0 : gb.bossMobVariation) && void 0 !== Hb ? Hb : null,
            lockedHint: null !== (pb = null === lb || void 0 === lb ? void 0 : lb.text) && void 0 !== pb ? pb : null,
            lockedHintHighlight: null !== (Vb = null === lb || void 0 === lb ? void 0 : lb.highlight) && void 0 !== Vb ? Vb : null,
            current: Mb === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(bb.nameKey),
          pages: wb,
          page: wb[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < wb.length - 1
        }
      }
      lockedHint(bb, wb) {
        var Mb, eb, Hb;
        if (0 === wb && "number" === typeof bb.combatLevelLock) {
          const wb = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: bb.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: wb,
            colour: sw("combat"),
            icon: Fw.combat
          })
        }
        const pb = null !== (Mb = null === (eb = this.authoritative) || void 0 === eb ? void 0 : eb.dungeons) && void 0 !== Mb ? Mb : [],
          Vb = wb > 0 ? bb : null !== (Hb = pb[pb.indexOf(bb) - 1]) && void 0 !== Hb ? Hb : null,
          gb = wb > 0 ? bb.difficulties[wb - 1] : null === Vb || void 0 === Vb ? void 0 : Vb.difficulties[0];
        if (null === Vb || void 0 === gb) return null;
        const lb = this.translate(Vb.nameKey);
        if (null === gb.unlockedBoss) return Vb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, gb.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: lb
        }, gb.difficulty);
        const Lb = this.translate(gb.unlockedBoss.bossNameKey);
        return Vb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Lb
        }, gb.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Lb,
            dungeon: lb
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(bb, wb, Mb) {
        return this.hintHighlighting(bb, wb, "difficulty", {
          name: this.translate(Db[Mb]),
          colour: cb[Mb],
          icon: null
        })
      }
      hintHighlighting(bb, wb, Mb, eb) {
        let {
          name: Hb,
          colour: pb,
          icon: Vb
        } = eb;
        const gb = this.translate(bb, {
          ...wb,
          [Mb]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(bb, {
            ...wb,
            [Mb]: Hb
          }),
          highlight: 2 === gb.length ? {
            before: gb[0],
            name: Hb,
            after: gb[1],
            colour: pb,
            icon: Vb
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, wb, Mb;
        const eb = null !== (bb = null === (wb = this.authoritative) || void 0 === wb ? void 0 : wb.dungeons) && void 0 !== bb ? bb : [];
        var Hb, pb;
        eb.some((bb => bb.id === this.selected)) || (this.selected = null !== (Hb = null === (pb = eb[0]) || void 0 === pb ? void 0 : pb.id) && void 0 !== Hb ? Hb : null);
        const Vb = eb.map((bb => this.entry(bb)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Vb,
          detail: null !== (Mb = Vb.find((bb => bb.selected))) && void 0 !== Mb ? Mb : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const ow = ["mining", "farming", "foraging", "fishing", "combat"],
      Tw = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      kw = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function bM() {
      for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
      return wb.map(((bb, wb) => ({
        amount: bb,
        coins: Tw[wb],
        xp: kw[wb]
      })))
    }
    const wM = bM(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      MM = bM(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      eM = bM(50, 100, 250, 500, 1e3, 2500, 5e3),
      HM = bM(25, 50, 100, 250, 500, 1e3),
      pM = bM(10, 25, 50, 100, 250, 500, 1e3),
      VM = bM(1, 5, 10, 25, 50);

    function gM(bb, wb) {
      return {
        id: bb,
        category: "fishing",
        item: wb,
        drops: [wb],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pM
      }
    }
    const lM = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: MM
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: eM
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: eM
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: HM
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: HM
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: MM
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: wM
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: wM
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: wM
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: eM
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: MM
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: MM
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: MM
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: eM
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: eM
      }, gM("wheatfish", "Wheatfish"), gM("darter", "Darter"), gM("sunset_minnow", "Sunset Minnow"), gM("root_flounder", "Root Flounder"), gM("greenfin_loach", "Greenfin Loach"), gM("red_strongfish", "Red Strongfish"), gM("green_strongfish", "Green Strongfish"), gM("boomerang_fish", "Boomerang Fish"), gM("seahorse", "Seahorse"), gM("spined_stickleback", "Spined Stickleback"), gM("moon_strongfish", "Moon Strongfish"), gM("boulder_bass", "Boulder Bass"), gM("grass_snapper", "Grass Snapper"), gM("crystal_wheatfish", "Crystalized Wheatfish", VM), gM("moonstone_pupfish", "Moonstone Pupfish", VM), gM("reedglass_minnow", "Reedglass Minnow"), gM("mangrove_herring", "Mangrove Herring"), gM("mudline_perch", "Mudline Perch"), gM("coastal_mullet", "Coastal Mullet"), gM("reef_sardine", "Reef Sardine"), gM("root_perch", "Root Perch"), gM("driftwood_catfish", "Driftwood Catfish"), gM("aether_minnow", "Aether Minnow"), gM("needlefish", "Tri-Pointed Needlefish"), gM("threadfin_bream", "Threadfin Bream"), gM("mudbelly_tilapia", "Mudbelly Tilapia"), gM("rotslab_eel", "Rotslab Eel"), gM("polarflash_electron", "Polarflash Electron"), gM("mireback_carp", "Mireback Carp"), gM("blackwater_bream", "Blackwater Bream"), gM("stone_grouper", "Stone Grouper"), gM("shadeback_ray", "Shadeback Ray"), gM("glacial_silverfish", "Glacial Silverfish"), gM("hatchetfish", "Hatchetfish"), gM("moonlit_boomerang", "Moonlit Boomerang Fish"), gM("murkborne_ray", "Murkborne Ray"), gM("bamboo_catfish", "Bamboo Catfish"), gM("mossback_arapaima", "Mossback Arapaima"), gM("murk_stingray", "Murk Stingray"), gM("channel_sawfish", "Channel Sawfish"), gM("boned_sturgeon", "Boned Sturgeon"), gM("oarfish", "Oarfish"), gM("snakehead", "Snakehead", VM), gM("eldertide_leviathan", "Eldertide Leviathan", VM), gM("pithead", "Pithead"), gM("electric_eel", "Electric Eel"), gM("shadow_darter", "Shadow Darter"), gM("abyss_carp", "Abyss Carp"), gM("nomai_moray", "Nomai Moray"), gM("silver_dragonfish", "Silver Dragonfish"), gM("giant_moray", "Giant Moray"), gM("coelacanth", "Coelacanth", VM), gM("frost_herring", "Frost Herring"), gM("permafrost_halibut", "Permafrost Halibut"), gM("glacial_lanternfish", "Glacial Lanternfish"), gM("frozen_grenadier", "Frozen Grenadier"), gM("blackfin_icefish", "Blackfin Icefish"), gM("moonfish", "Moonfish"), gM("alpha_strongfish", "Alpha Moon Strongfish"), gM("deep_lanternfish", "Deepwater Lanternfish", VM), gM("pearlescent_moonfish", "Pearlescent Moonfish", VM), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: MM
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: HM
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: HM
      }],
      LM = (new Map(lM.map((bb => [bb.id, bb]))), new Map),
      IM = new Map;
    for (const cg of lM) {
      for (const [bb, wb] of Object.entries(null !== (OM = cg.blocks) && void 0 !== OM ? OM : {})) {
        var OM;
        LM.set(bb, {
          collection: cg,
          amount: wb
        })
      }
      for (const bb of null !== (UM = cg.drops) && void 0 !== UM ? UM : []) {
        var UM;
        IM.set(bb, cg)
      }
    }

    function tM(bb, wb) {
      let Mb = 0;
      for (; Mb < bb.tiers.length && wb >= bb.tiers[Mb].amount;) Mb++;
      return Mb
    }
    const CM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function EM(bb) {
      return CM[bb - 1]
    }
    const FM = "skyblockCollectionsView";
    class BM extends lb {
      constructor(bb, wb) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = wb, this.locale = Mb, this.itemName = eb, this.counts = null, this.category = "mining", this.selected = lM[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = bb => {
          this.category = bb, this.selected = this.inCategory(bb)[0].id, this.emit()
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, this.locale = wb, this.itemName = Mb, this.emit()
      }
      EO(bb) {
        if (!this.BC)
          if ("collOpen" !== bb.kind) {
            (bb.collFull || null === this.counts) && (this.counts = new Map);
            for (const [wb, Mb] of bb.collCounts) this.counts.set(wb, Mb);
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
        var bb;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const wb = this.inCategory(this.category).map((bb => this.collectionView(bb))),
          Mb = lM.reduce(((bb, wb) => bb + this.tierOf(wb)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: ow.map((bb => this.categoryView(bb))),
          collections: wb,
          detail: null !== (bb = wb.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Mb)
          })
        }
      }
      categoryView(bb) {
        const wb = this.inCategory(bb),
          Mb = wb.reduce(((bb, wb) => bb + this.tierOf(wb)), 0),
          eb = wb.reduce(((bb, wb) => bb + wb.tiers.length), 0);
        return {
          id: bb,
          label: this.translate(`skyblockGame:${bb}`),
          icon: Fw[bb],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Mb),
            target: this.number(eb)
          }),
          selected: bb === this.category
        }
      }
      collectionView(bb) {
        var wb, Mb;
        const eb = null !== (wb = this.counts.get(bb.id)) && void 0 !== wb ? wb : 0,
          Hb = tM(bb, eb),
          pb = null !== (Mb = bb.tiers[Hb]) && void 0 !== Mb ? Mb : null,
          Vb = 0 === Hb ? 0 : bb.tiers[Hb - 1].amount;
        return {
          id: bb.id,
          name: this.itemName(bb.item),
          icon: bb.item,
          selected: bb.id === this.selected,
          locked: 0 === eb,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(eb)
          }),
          tier: 0 === Hb ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Hb),
          percent: null === pb ? 100 : Math.min(100, (eb - Vb) / (pb.amount - Vb) * 100),
          progress: null === pb ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(eb),
            target: this.number(pb.amount)
          }),
          nextReward: null === pb ? null : this.reward(bb, pb.coins, pb.xp)
        }
      }
      reward(bb, wb, Mb) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(wb),
          xp: this.number(Mb),
          skill: this.translate(`skyblockGame:${bb.category}`)
        })
      }
      tierLabel(bb) {
        return this.translate("skyblockGame:collectionTier", {
          tier: EM(bb)
        })
      }
      tierOf(bb) {
        var wb;
        return tM(bb, null !== (wb = this.counts.get(bb.id)) && void 0 !== wb ? wb : 0)
      }
      inCategory(bb) {
        return lM.filter((wb => wb.category === bb))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
    }
    const sM = "skyblockPortalTransitView",
      mM = "skyblockPortalArrival";
    class hM {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.iI = bb, this.storage = wb, this.now = Mb, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      EO(bb) {
        const wb = {
          zoneNameKey: bb.transitZoneNameKey,
          variation: bb.transitZoneVariation,
          colour: bb.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(mM, wb), this.show("departure", wb.zoneNameKey, wb.colour, bb.transitDurationMs, bb.transitDurationMs + 1500, (() => {
          this.storage.removeItem(mM)
        }))
      }
      resumeArrival(bb) {
        const wb = this.storage.getItem(mM);
        this.storage.removeItem(mM), null === wb || wb.variation !== bb || this.now() - wb.departedAt > 3e4 || this.show("arrival", wb.zoneNameKey, wb.colour, 3200, 2e4)
      }
      finishArrival(bb) {
        var wb;
        "arrival" === (null === (wb = this.view) || void 0 === wb ? void 0 : wb.phase) && this.view.token === bb && (this.clearTimer(), this.view = null, this.iI(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(bb, wb, Mb, eb, Hb, pb) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: bb,
          zoneNameKey: wb,
          colour: Mb,
          durationMs: eb
        }, this.iI(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.iI(null), null === pb || void 0 === pb || pb()
        }), Hb)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const zM = "skyblockDailyRewardView",
      XM = "skyblockDailyRewardCoin";
    class xM {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.iI = bb, this.isBusy = wb, this.holdQuestPopups = Mb, this.onHeldCoinsChanged = eb, this.onCoinLanded = Hb, this.onStarted = pb, this.onFinished = Vb, this.onItemLanded = gb, this.now = lb, this.dg = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var bb, wb;
        return null !== (bb = null === (wb = this.playing) || void 0 === wb ? void 0 : wb.view) && void 0 !== bb ? bb : null
      }
      getHeldCoins() {
        var bb, wb;
        let Mb = 0;
        for (const eb of this.dg) Mb += eb.coins;
        return Mb - (null !== (bb = null === (wb = this.playing) || void 0 === wb ? void 0 : wb.released) && void 0 !== bb ? bb : 0)
      }
      EO(bb) {
        "dailyRewardClaimed" !== bb.kind ? (this.queue.push(bb), this.sO()) : this.dg.push({
          coins: bb.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      sO() {
        const bb = this.now();
        if (null === this.playing) return this.releaseUnshown(bb), void this.startNext(bb);
        const wb = this.playing,
          Mb = bb - wb.startedAt,
          eb = wb.view.flyingCoins,
          Hb = function(bb, wb) {
            let Mb = 0;
            for (; Mb < wb && KM(Mb, wb) <= bb;) Mb++;
            return Mb
          }(Mb, eb);
        if (Hb !== wb.landed) {
          for (let bb = Hb - wb.landed > 2 ? Hb - 1 : wb.landed; bb < Hb; bb++) this.onCoinLanded(bb, eb);
          wb.landed = Hb, wb.released = Math.round(wb.view.coins * Hb / eb), this.onHeldCoinsChanged()
        }
        for (; wb.itemsLanded < wb.view.items.length && 2e3 + 160 * wb.itemsLanded + 630 <= Mb;) this.onItemLanded(wb.itemsLanded), wb.itemsLanded++;
        Mb >= wb.view.durationMs && (this.finish(), this.startNext(bb))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.dg = [], this.iI(null)
      }
      startNext(bb) {
        if (0 === this.queue.length || this.isBusy()) return;
        const wb = this.queue.shift();
        this.token++;
        const Mb = {
          token: this.token,
          day: wb.dailyRewardDay,
          coins: wb.dailyRewardCoins,
          items: wb.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: wb.dailyRewardDay === Kb ? 24 : 14
        };
        this.playing = {
          view: Mb,
          startedAt: bb,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.iI(Mb), this.onStarted(Mb)
      }
      finish() {
        this.dg.shift(), this.playing = null, this.holdQuestPopups(!1), this.iI(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(bb) {
        if (this.queue.length > 0 || 0 === this.dg.length) return;
        const wb = this.dg.length;
        this.dg = this.dg.filter((wb => bb - wb.receivedAt < 6e4)), this.dg.length !== wb && this.onHeldCoinsChanged()
      }
    }

    function jM(bb, wb) {
      return 450 + 715 * bb / (wb - 1)
    }

    function KM(bb, wb) {
      return jM(bb, wb) + 650
    }
    const rM = "skyblockMailboxView";
    class RM {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.iI = bb, this.isBusy = wb, this.onStarted = Mb, this.now = eb, this.waiting = [], this.playing = null, this.token = 0, this.itemName = bb => bb
      }
      getSnapshot() {
        var bb, wb;
        return null !== (bb = null === (wb = this.playing) || void 0 === wb ? void 0 : wb.view) && void 0 !== bb ? bb : null
      }
      setItemName(bb) {
        this.itemName = bb
      }
      EO(bb) {
        this.waiting.push(...bb.mailLetters), this.sO()
      }
      sO() {
        const bb = this.now();
        null !== this.playing && bb - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.iI(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(bb)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.iI(null)
      }
      start(bb) {
        const wb = this.waiting.slice(0, 3);
        this.token++;
        const Mb = {
          token: this.token,
          letters: wb.map((bb => this.toView(bb))),
          more: this.waiting.length - wb.length,
          durationMs: 4500 + 700 * wb.length
        };
        this.waiting = [], this.playing = {
          view: Mb,
          startedAt: bb
        }, this.iI(Mb), this.onStarted(Mb)
      }
      toView(bb) {
        return {
          coins: bb.mailCoins,
          items: bb.mailItems.map((bb => {
            var wb;
            return {
              itemName: bb.mailItemName,
              amount: bb.mailItemAmount,
              label: null !== (wb = bb.mailItemLabel) && void 0 !== wb ? wb : this.itemName(bb.mailItemName)
            }
          })),
          reasonKey: bb.mailReasonKey,
          reasonParams: bb.mailReasonParams
        }
      }
    }
    const DM = "skyblockQuestGraphView",
      cM = "skyblockDevQuestJump";

    function YM(bb) {
      if (0 === bb.length) return "";
      const wb = [`M ${bb[0].x} ${bb[0].y}`];
      for (let eb = 1; eb < bb.length - 1; eb++) {
        const Mb = bb[eb + 1];
        wb.push(`Q ${bb[eb].x} ${bb[eb].y} ${(bb[eb].x+Mb.x)/2} ${(bb[eb].y+Mb.y)/2}`)
      }
      const Mb = bb[bb.length - 1];
      return wb.push(`L ${Mb.x} ${Mb.y}`), wb.join(" ")
    }

    function ZM(bb, wb) {
      return bb < wb ? `${bb}|${wb}` : `${wb}|${bb}`
    }
    class fM extends lb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(bb, Mb, eb), this.translate = wb, this.requestJump = Hb, this.requestArrive = pb, this.storage = Vb, this.now = gb, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = bb => {
          bb !== this.hoveredId && (this.hoveredId = bb, this.emit())
        }, this.jump = bb => {
          this.close(), this.requestJump(bb)
        }
      }
      EO(bb) {
        if (!this.BC)
          if ("graph" !== bb.kind) {
            if ("jumping" === bb.kind) {
              const wb = {
                questId: bb.graphQuestId,
                variation: bb.graphVariation,
                completes: bb.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(cM, wb)
            }
          } else {
            const wb = ++this.graphCount;
            Mb.e(141).then((() => Mb(7602))).then((Mb => {
              let {
                default: eb
              } = Mb;
              this.BC || wb !== this.graphCount || (this.layout = function(bb, wb, Mb) {
                var eb, Hb;
                const pb = new bb.graphlib.Graph;
                pb.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), pb.setDefaultEdgeLabel((() => ({})));
                const Vb = new Set;
                for (const Ib of wb) Vb.add(Ib.graphQuestId), pb.setNode(Ib.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const gb = Mb.filter((bb => Vb.has(bb.graphFromId) && Vb.has(bb.graphToId) && bb.graphFromId !== bb.graphToId)),
                  lb = new Map;
                for (const Ib of [...gb].sort(((bb, wb) => Number("awaits" === bb.graphEdgeKind) - Number("awaits" === wb.graphEdgeKind)))) {
                  const bb = ZM(Ib.graphFromId, Ib.graphToId);
                  lb.has(bb) || (lb.set(bb, Ib), pb.setEdge(Ib.graphFromId, Ib.graphToId))
                }
                bb.layout(pb);
                const Lb = pb.graph();
                return {
                  width: Math.ceil(null !== (eb = Lb.width) && void 0 !== eb ? eb : 0),
                  height: Math.ceil(null !== (Hb = Lb.height) && void 0 !== Hb ? Hb : 0),
                  nodes: wb.map((bb => {
                    var wb, Mb;
                    const eb = pb.node(bb.graphQuestId);
                    return {
                      node: bb,
                      left: (null !== (wb = eb.x) && void 0 !== wb ? wb : 0) - 95,
                      top: (null !== (Mb = eb.y) && void 0 !== Mb ? Mb : 0) - 26
                    }
                  })),
                  edges: gb.map((bb => {
                    var wb;
                    const Mb = lb.get(ZM(bb.graphFromId, bb.graphToId)),
                      eb = null !== (wb = pb.edge(Mb.graphFromId, Mb.graphToId).points) && void 0 !== wb ? wb : [];
                    return {
                      edge: bb,
                      key: `${bb.graphFromId}|${bb.graphToId}|${bb.graphEdgeKind}`,
                      path: YM(Mb.graphFromId === bb.graphFromId ? eb : [...eb].reverse())
                    }
                  })),
                  plans: new Map(wb.map((bb => [bb.graphQuestId, new Set([bb.graphQuestId, ...bb.graphPlanIds])])))
                }
              }(eb, bb.graphNodes, bb.graphEdges), this.show())
            })).catch((bb => {
              console.error("The quest graph could not be laid out", bb)
            }))
          }
      }
      resumeJump(bb) {
        const wb = this.storage.getItem(cM);
        this.storage.removeItem(cM), null === wb || wb.variation !== bb || this.now() - wb.departedAt > 6e4 || this.requestArrive(wb.questId, wb.completes)
      }
      setTranslator(bb) {
        this.translate = bb, this.emit()
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
        var bb, wb;
        return null !== (bb = null === this.hoveredId || null === (wb = this.layout) || void 0 === wb ? void 0 : wb.plans.get(this.hoveredId)) && void 0 !== bb ? bb : new Set
      }
      buildSnapshot() {
        const bb = this.layout;
        if (null === bb) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const wb = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: bb.width,
          height: bb.height,
          nodes: bb.nodes.map((bb => {
            let {
              node: Mb,
              left: eb,
              top: Hb
            } = bb;
            return {
              id: Mb.graphQuestId,
              name: this.translate(Mb.graphNameKey),
              detail: null === Mb.graphGiverName ? Mb.graphZoneId : `${Mb.graphGiverName} \xb7 ${Mb.graphZoneId}`,
              state: Mb.graphState,
              left: eb,
              top: Hb,
              inPlan: wb.has(Mb.graphQuestId),
              hovered: Mb.graphQuestId === this.hoveredId
            }
          })),
          edges: bb.edges.map((bb => {
            let {
              edge: Mb,
              key: eb,
              path: Hb
            } = bb;
            return {
              key: eb,
              kind: Mb.graphEdgeKind,
              path: Hb,
              inPlan: wb.has(Mb.graphFromId) && wb.has(Mb.graphToId)
            }
          })),
          planning: wb.size > 0
        }
      }
    }
    var AM = Mb(38251);
    const WM = 250,
      JM = 2150,
      SM = -2.8,
      NM = 2.2,
      vM = -27,
      QM = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      GM = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      qM = Math.round(50 + 1e3 * (GM.delay + GM.period / 2)),
      aM = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      iM = Array.from({
        length: 26
      }, ((bb, wb) => {
        const Mb = 2.39996 * wb,
          eb = .5 + .618034 * wb % 1 * .23,
          Hb = wb % 3 !== 2;
        return {
          rune: Hb ? aM[7 * wb % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Mb)*eb).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Mb)*eb).toFixed(3)})`,
            "--spin": 40 * (wb % 5 - 2) + "deg",
            "--size": (Hb ? 1 + wb % 4 * .2 : .3 + wb % 2 * .15) + "rem",
            "--duration": `${(1.8+7*wb%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*wb%3).toFixed(2)}s`
          }
        }
      }));

    function uM(bb, wb) {
      return Array.from({
        length: 30 + 3 * bb + (wb ? 10 : 0)
      }, ((bb, wb) => {
        const Mb = wb < 4,
          eb = Mb ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Hb = Mb ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          pb = Mb ? 2.2 : .6 + Math.random(),
          Vb = Mb ? .3 : Math.random() < .5 ? .16 : .24,
          gb = Mb ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": eb,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Hb.toFixed(2)}rem`,
          "--length": `${pb.toFixed(2)}rem`,
          "--width": `${Vb}rem`,
          "--duration": `${Math.round(gb)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function dM(bb) {
      let {
        zeta: wb,
        period: Mb
      } = bb;
      const eb = 2 * Math.PI / Mb;
      return {
        w: eb,
        decay: wb * eb / Math.sqrt(1 - wb * wb)
      }
    }
    let PM = !1;

    function nM() {
      if (PM) return;
      PM = !0;
      const bb = document.createElement("style");
      bb.textContent = function() {
        const bb = dM(QM),
          wb = dM(GM),
          Mb = wb => Math.exp(-bb.decay * wb) * Math.sin(bb.w * wb),
          eb = Mb(Math.atan(bb.w / bb.decay) / bb.w),
          Hb = .25,
          pb = 2.15,
          Vb = Math.round(215),
          gb = [];
        for (let lb = 0; lb <= Vb; lb++) {
          const bb = lb / Vb * pb;
          let Lb = Math.sin(Math.min(bb, Hb) / Hb * Math.PI / 2) ** 2,
            Ib = 0,
            Ob = 1,
            Ub = 1 - .2 * Lb,
            tb = 1;
          if (bb >= Hb) {
            const Vb = bb - Hb,
              gb = Math.max(0, Vb - .05);
            Lb = Math.exp(-gb / .05), Ib = Mb(gb + QM.lead * (1 - Math.exp(-gb / QM.rush))) / eb;
            const lb = gb - GM.delay,
              Cb = lb <= 0 ? 0 : 1 - Math.exp(-wb.decay * lb) * (Math.cos(wb.w * lb) + wb.decay / wb.w * Math.sin(wb.w * lb)),
              Eb = Math.max(0, (bb - 1.77) / (pb - 1.77));
            Ob = (1 + (GM.to - 1) * Cb) * (1 + .08 * Eb), Ub = 1.1 + 1.5 * Math.exp(-Vb / .07) + .3 * Math.exp(-(((1e3 * Vb - qM) / 100) ** 2)) + .8 * Eb, tb = 1 - Eb ** 1.5
          }
          const Cb = .15 * Lb + SM * Ib,
            Eb = -.1 * Lb + NM * Ib,
            Fb = 3 * Lb + vM * Ib;
          gb.push(`${(lb/Vb*100).toFixed(3)}% { opacity: ${tb.toFixed(3)}; transform: translate(${Cb.toFixed(3)}rem, ${Eb.toFixed(3)}rem) rotate(${Fb.toFixed(2)}deg) scale(${Ob.toFixed(3)}); filter: brightness(${Ub.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${gb.join(" ")} }`
      }(), document.head.append(bb)
    }
    const yM = "skyblockForgeView",
      oM = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class TM extends lb {
      constructor(bb, wb, Mb, eb, Hb) {
        super(bb, Mb, eb), this.translate = wb, this.requestForge = Hb, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (bb, wb) => {
          var Mb, eb;
          null !== this.forging || (null !== (Mb = this.owned[(0, AM.s)(wb, bb)]) && void 0 !== Mb ? Mb : 0) <= 0 || (this.selected[bb] = this.selected[bb] === wb ? null : wb, this.status = null, null === (eb = this.onPartSelected) || void 0 === eb || eb.call(this), this.emit())
        }, this.forge = bb => {
          var wb, Mb;
          const eb = this.selectedParts();
          if (null === eb || this.isPending() || !this.open) return;
          const Hb = (0, AM.o)(eb);
          if (null === Hb || Hb.coalCost > this.coal) return;
          const pb = this.preview(Hb),
            Vb = null !== (wb = null === (Mb = this.onForgeStarted) || void 0 === Mb ? void 0 : Mb.call(this, pb.tier, pb.named, bb)) && void 0 !== wb ? wb : () => {};
          if (this.dropArrival(), bb) {
            const bb = {
              id: ++this.forgeId,
              preview: pb,
              timers: [],
              stopSounds: Vb,
              landed: !1,
              reply: null
            };
            bb.timers.push(setTimeout((() => {
              bb.landed = !0, null !== bb.reply && (this.apply(bb.reply), bb.reply = null, this.emit())
            }), WM), setTimeout((() => {
              this.finishForge(bb)
            }), JM)), this.forging = bb
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(eb)
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        var wb;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.forgeMessageKind) return this.dropForge(), this.apply(bb), this.status = null, this.show(), void(null === (wb = this.onOpened) || void 0 === wb || wb.call(this));
        const Mb = this.forging;
        if (null !== Mb && null !== bb.forgeRefusalKey) this.dropForge();
        else if (null !== Mb && !Mb.landed) return void(Mb.reply = bb);
        this.apply(bb), this.emit()
      }
      apply(bb) {
        if (this.owned = bb.forgeOwnedParts, this.coal = bb.forgeCoalOwned, this.keepSelectionOwned("open" === bb.forgeMessageKind), null !== bb.forgeForgedSwordId) {
          var wb;
          const Mb = (0, AM.o)(bb.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.displayName) && void 0 !== wb ? wb : ""
            }
          }
        } else null !== bb.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: bb.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(bb) {
        this.translate = bb, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(bb) {
        var wb;
        this.forging = null;
        const Mb = this.selectedParts(),
          eb = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: bb.id,
          sameSword: null !== Mb && (null === (wb = (0, AM.o)(Mb)) || void 0 === wb ? void 0 : wb.displayName) === bb.preview.name,
          timer: eb
        }, this.emit()
      }
      dropForge() {
        const bb = this.forging;
        if (null !== bb) {
          this.forging = null;
          for (const wb of bb.timers) clearTimeout(wb);
          bb.stopSounds(), null !== bb.reply && this.apply(bb.reply)
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
        var bb, wb, Mb;
        const eb = this.selectedParts(),
          Hb = null === eb ? null : (0, AM.o)(eb),
          pb = null !== (bb = null === (wb = this.forging) || void 0 === wb ? void 0 : wb.preview) && void 0 !== bb ? bb : null === Hb ? null : this.preview(Hb);
        return {
          enabled: this.received,
          open: this.open,
          slots: AM.k.map((bb => ({
            kind: bb,
            label: this.translate(oM[bb]),
            parts: this.partsFor(bb)
          }))),
          coalOwned: this.coal,
          preview: pb,
          unformedSword: AM.g[null !== (Mb = this.selected.Blade) && void 0 !== Mb ? Mb : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((bb => bb > 0)),
          canForge: null !== pb && !pb.coalShort && !this.isPending(),
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
      preview(bb) {
        return {
          name: bb.displayName,
          lore: bb.lore,
          baseSword: bb.baseSword,
          enchantmentTier: bb.enchantmentTier,
          tier: Number(bb.enchantmentTier.slice(-1)),
          named: bb.named,
          stats: this.stats(bb),
          effects: bb.effects,
          coalCost: bb.coalCost,
          coalShort: null === this.forging && bb.coalCost > this.coal
        }
      }
      partsFor(bb) {
        const wb = [];
        for (const eb of AM.f) {
          var Mb;
          const Hb = (0, AM.s)(eb, bb),
            pb = null !== (Mb = this.owned[Hb]) && void 0 !== Mb ? Mb : 0;
          pb > 0 && wb.push({
            material: eb,
            itemName: Hb,
            owned: pb,
            selected: this.selected[bb] === eb,
            placeholder: !1
          })
        }
        if (0 === wb.length) {
          const Mb = AM.f[0];
          wb.push({
            material: Mb,
            itemName: (0, AM.s)(Mb, bb),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return wb
      }
      stats(bb) {
        const wb = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${bb.powerMultiplier.toFixed(2)}`,
          better: bb.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${bb.damageMultiplier.toFixed(2)}`,
          better: bb.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/bb.cooldownMultiplier).toFixed(2)}`,
          better: bb.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${bb.knockbackMultiplier.toFixed(2)}`,
          better: bb.knockbackMultiplier > 1
        }];
        return bb.reachBonus > 0 && wb.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${bb.reachBonus.toFixed(1)}`,
          better: !0
        }), bb.damageReduction > 0 && wb.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*bb.damageReduction)}%`,
          better: !0
        }), wb
      }
      selectedParts() {
        const {
          Blade: bb,
          Guard: wb,
          Handle: Mb
        } = this.selected;
        return null === bb || null === wb || null === Mb ? null : {
          blade: bb,
          guard: wb,
          handle: Mb
        }
      }
      keepSelectionOwned(bb) {
        for (const Mb of AM.k) {
          var wb;
          const eb = this.selected[Mb];
          if (null !== eb && (null !== (wb = this.owned[(0, AM.s)(eb, Mb)]) && void 0 !== wb ? wb : 0) > 0) continue;
          if (!bb) {
            this.selected[Mb] = null;
            continue
          }
          const Hb = [...AM.f].reverse().find((bb => {
            var wb;
            return (null !== (wb = this.owned[(0, AM.s)(bb, Mb)]) && void 0 !== wb ? wb : 0) > 0
          }));
          this.selected[Mb] = null !== Hb && void 0 !== Hb ? Hb : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const kM = "skyblockSmugglerView",
      be = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class we extends lb {
      constructor(bb, wb, Mb, eb, Hb) {
        super(bb, Mb, eb), this.translate = wb, this.requestBuy = Hb, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = bb => bb, this.onBought = null, this.buy = bb => {
          const wb = this.deals[bb];
          void 0 !== wb && !this.isPending() && this.open && !this.soldOut.has(bb) && this.canAfford(wb) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, bb))
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        if (this.received = !0, this.day = bb.smugglerDay, this.deals = bb.smugglerDeals, this.rivets = bb.smugglerRivetsOwned, this.crests = bb.smugglerCrestsOwned, this.soldOut = new Set(bb.smugglerSoldOutSlots), this.rotatesAtMs = Date.now() + bb.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.smugglerMessageKind) return this.status = null, this.boughtSlot = null, void this.show();
        if (this.boughtSlot = bb.smugglerBoughtSlot, null !== bb.smugglerBoughtSlot) {
          var wb, Mb;
          const eb = this.deals[bb.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === eb ? "" : this.dealName(eb),
              amount: String(null !== (wb = null === eb || void 0 === eb ? void 0 : eb.smugglerDealAmount) && void 0 !== wb ? wb : 0)
            }
          }, this.boughtCount++, null === (Mb = this.onBought) || void 0 === Mb || Mb.call(this)
        } else null !== bb.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: bb.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, void 0 !== Mb && (this.itemName = Mb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.boughtCount = 0
      }
      dealName(bb) {
        if (null !== bb.smugglerDealUniqueName) return bb.smugglerDealUniqueName;
        const wb = be[bb.smugglerDealItem];
        return void 0 === wb ? this.itemName(bb.smugglerDealItem) : this.translate(wb)
      }
      canAfford(bb) {
        return bb.smugglerDealRivets <= this.rivets && bb.smugglerDealCrests <= this.crests
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
          deals: this.deals.map(((bb, wb) => ({
            slot: wb,
            itemName: bb.smugglerDealItem,
            displayName: this.dealName(bb),
            enchantmentTier: bb.smugglerDealEnchantmentTier,
            amount: bb.smugglerDealAmount,
            rivets: bb.smugglerDealRivets,
            crests: bb.smugglerDealCrests,
            soldOut: this.soldOut.has(wb),
            justBought: this.boughtSlot === wb
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
    const Me = "skyblockPassageView",
      ee = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function He(bb, wb) {
      return bb(ee[wb])
    }

    function pe(bb, wb, Mb, eb) {
      const Hb = Math.ceil((Mb - eb) / 864e5),
        pb = He(bb, wb);
      return Hb > 1 ? bb("skyblockGame:passageNextDays", {
        phase: pb,
        days: String(Hb)
      }) : bb("skyblockGame:passageNextSoon", {
        phase: pb
      })
    }
    class Ve extends lb {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, Mb, eb), this.translate = wb, this.now = Hb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = bb => bb, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        this.message = bb, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, void 0 !== Mb && (this.itemName = Mb), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(bb) {
        return {
          itemName: bb.passageFish,
          displayName: this.itemName(bb.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(bb.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const bb = this.message;
        return null === bb ? {
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
          phase: bb.passagePhase,
          phaseName: He(this.translate, bb.passagePhase),
          visitors: bb.passageVisitors.map((bb => this.describe(bb))),
          resting: this.describe(bb.passageResting),
          nextPhase: bb.passageNextPhase,
          next: pe(this.translate, bb.passageNextPhase, bb.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var ge = Mb(39819);
    const le = "skyblockKeepersChairView";
    class Le extends lb {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new ge.d;
        super(bb, Mb, eb), this.translate = wb, this.requestAim = Hb, this.now = pb, this.pacer = Vb, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = bb => bb, this.aim = bb => {
          !this.awaitingReply && this.open && this.atChair && bb !== this.favoured && (null === bb || this.islands.some((wb => wb.keepersChairIslandId === bb && wb.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== bb && void 0 !== bb ? bb : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Vb.subscribe((() => {
          this.emit()
        }))
      }
      EO(bb) {
        var wb, Mb;
        this.received = !0;
        const eb = this.favoured,
          Hb = this.atChair;
        var pb;
        return this.islands = bb.keepersChairIslands, this.favoured = bb.keepersChairFavoured, this.passage = null !== (wb = bb.keepersChairPassage) && void 0 !== wb ? wb : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Mb = bb.keepersChairAtChair) || void 0 === Mb || Mb, "place" === bb.keepersChairMessageKind ? (!Hb && this.atChair && "refused" === (null === (pb = this.status) || void 0 === pb ? void 0 : pb.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== bb.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: bb.keepersChairRefusalKey,
          island: null
        } : this.favoured !== eb && (this.status = null === this.favoured ? {
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
      receivePassage(bb) {
        this.received && (this.passage = bb, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, void 0 !== Mb && (this.itemName = Mb), this.emit()
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
      islandName(bb) {
        const wb = this.islands.find((wb => wb.keepersChairIslandId === bb));
        return void 0 === wb ? bb : this.translate(wb.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const bb = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          wb = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((bb => {
            const wb = bb.keepersChairFeaturedFish;
            return {
              id: bb.keepersChairIslandId,
              name: this.translate(bb.keepersChairIslandNameKey),
              relit: bb.keepersChairIslandRelit,
              featuredFish: null === wb ? null : {
                itemName: wb,
                displayName: this.itemName(wb)
              },
              favoured: bb.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === bb ? null : {
            tone: bb.tone,
            text: this.translate(bb.key, null === bb.island ? void 0 : {
              island: this.islandName(bb.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === wb ? null : {
            phase: wb.keepersChairPassagePhase,
            phaseName: He(this.translate, wb.keepersChairPassagePhase),
            nextPhase: wb.keepersChairPassageNextPhase,
            next: pe(this.translate, wb.keepersChairPassageNextPhase, wb.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Ie = "skyblockReachLogView",
      Oe = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Ue = "Caught Fish",
      te = [1, 2, 4];

    function Ce(bb, wb) {
      return bb.map((bb => ({
        ...bb,
        reachLogPageFish: bb.reachLogPageFish.map((bb => ({
          ...bb,
          reachLogFishFresh: wb(bb)
        })))
      })))
    }
    class Ee extends lb {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ge.d;
        super(bb, Mb, eb), this.translate = wb, this.requestOpen = Hb, this.pacer = pb, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = bb => bb, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = bb => {
          this.pages.some((wb => wb.reachLogIslandId === bb)) && (this.selected = bb, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = pb.subscribe((() => {
          this.emit()
        }))
      }
      EO(bb) {
        if (this.received = !0, "status" === bb.reachLogMessageKind) return !0 === bb.reachLogNews && this.markNews(), this.serverFresh = bb.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const wb = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== bb.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Ce(bb.reachLogPages, (bb => bb.reachLogFishFresh || this.heldFresh.has(bb.reachLogFishItem))), this.letGoShown = bb.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, wb) this.showPages();
          else {
            for (const bb of this.pages)
              for (const wb of bb.reachLogPageFish) wb.reachLogFishFresh && this.heldFresh.add(wb.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, this.pageViews = null, void 0 !== Mb && (this.itemName = Mb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Ce(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var bb, wb, Mb, eb;
        const Hb = this.pages.find((bb => bb.reachLogPageFish.some((bb => bb.reachLogFishFresh))));
        if (void 0 !== Hb) return Hb.reachLogIslandId;
        if (null !== this.selected && this.pages.some((bb => bb.reachLogIslandId === this.selected))) return this.selected;
        return null !== (bb = null !== (wb = null === (Mb = this.pages.filter((bb => bb.reachLogIslandAwake)).at(-1)) || void 0 === Mb ? void 0 : Mb.reachLogIslandId) && void 0 !== wb ? wb : null === (eb = this.pages[0]) || void 0 === eb ? void 0 : eb.reachLogIslandId) && void 0 !== bb ? bb : null
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
        return this.pages.map((bb => {
          var wb;
          return {
            id: bb.reachLogIslandId,
            name: this.translate(bb.reachLogIslandNameKey),
            awake: bb.reachLogIslandAwake,
            gold: bb.reachLogPageGold,
            caught: bb.reachLogPageFish.filter((bb => bb.reachLogFishCaught && !bb.reachLogFishVisitor)).length,
            total: bb.reachLogPageFish.filter((bb => !bb.reachLogFishVisitor)).length,
            fish: bb.reachLogPageFish.map((bb => {
              const wb = bb.reachLogFishBestKg;
              return {
                itemName: bb.reachLogFishItem,
                name: bb.reachLogFishCaught ? this.itemName(bb.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: bb.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / bb.reachLogFishChance))
                }),
                best: bb.reachLogFishCaught ? null === wb ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: wb.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: bb.reachLogFishMarks,
                ribbons: te.map((wb => 0 !== (bb.reachLogFishRibbons & wb))),
                glimmer: 0 !== (8 & bb.reachLogFishRibbons),
                halo: 0 !== (32 & bb.reachLogFishRibbons),
                fresh: bb.reachLogFishFresh,
                visitor: bb.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (wb = bb.reachLogPageReturner) && void 0 !== wb ? wb : null)
          }
        }))
      }
      buildReturner(bb) {
        return null === bb ? null : {
          itemName: bb.reachLogReturnerFishItem,
          line: this.translate(bb.reachLogReturnerLineKey, {
            name: this.translate(bb.reachLogReturnerNameKey),
            trinket: this.translate(bb.reachLogReturnerTrinketKey)
          }),
          back: bb.reachLogReturnerBack
        }
      }
      receivePassagePhase(bb) {
        null !== this.passagePhase && this.passagePhase !== bb && (this.pagesCurrent = !1), this.passagePhase = bb
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Fe = "skyblockLampLightView";
    class Be {
      constructor(bb, wb, Mb, eb) {
        this.iI = bb, this.translate = wb, this.requestCommand = Mb, this.pacer = eb, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.BC = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = bb => {
          bb ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = bb => {
          this.send(`buy ${bb}`)
        }, this.socket = bb => {
          this.send(`socket ${null!==bb&&void 0!==bb?bb:fb}`)
        }, this.wearTint = bb => {
          this.send(`tint ${null!==bb&&void 0!==bb?bb:fb}`)
        }, this.setSituation = bb => {
          this.situation = bb, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = eb.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = eb.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      EO(bb) {
        if (this.message = bb, null !== bb.lampLightShop && (this.shop = bb.lampLightShop), "open" === bb.lampLightKind && (this.refusalKey = null), "reply" === bb.lampLightKind) {
          var wb;
          const Hb = null !== (wb = bb.lampLightReplyTag) && void 0 !== wb ? wb : null,
            pb = null !== Hb && Hb === this.offTag;
          var Mb, eb;
          if (pb ? this.settleOff() : null !== Hb && Hb !== this.awaitingTag || this.settleReply(), this.refusalKey = bb.lampLightRefusalKey, null !== bb.lampLightBought && !pb) this.sparkle = {
            id: bb.lampLightBought,
            count: (null !== (Mb = null === (eb = this.sparkle) || void 0 === eb ? void 0 : eb.count) && void 0 !== Mb ? Mb : 0) + 1
          }
        }
        bb.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === bb.lampLightKind && (this.lastGained = bb.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(bb) {
        bb !== this.atChair && (this.atChair = bb, bb && (this.refusalKey = null), this.emit())
      }
      setTranslator(bb, wb) {
        this.translate = bb, this.locale = null !== wb && void 0 !== wb ? wb : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.BC = !0
      }
      send(bb) {
        var wb;
        if (null !== this.awaitingTag || "ready" !== (null === (wb = this.message) || void 0 === wb ? void 0 : wb.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Mb = this.nextTag();
        this.awaitingTag = Mb, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${bb} ${Mb}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const bb = this.nextTag();
        this.offTag = bb, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${bb}`)
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
        this.BC || (this.snapshot = this.buildSnapshot(), this.iI(this.snapshot))
      }
      formatLight(bb) {
        return Math.floor(bb).toLocaleString(this.locale)
      }
      formatPercent(bb) {
        const wb = 100 * bb;
        return wb >= 10 ? Math.round(wb).toLocaleString(this.locale) : wb.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(bb, wb) {
        if ("bite" === bb) return this.translate("skyblockGame:lampLightBite", {
          seconds: (wb.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === bb) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(wb.lampLightRareChance)
        });
        if ("notice" === bb) return null === wb.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(wb.lampLightNoticeChance)
        });
        const Mb = "meter" === bb ? wb.lampLightMeterCatches : wb.lampLightBloomCatches;
        return null === Mb ? null : this.translate("meter" === bb ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Mb))
        })
      }
      oddsLines(bb, wb) {
        const Mb = (bb, wb) => {
            var Mb;
            return null !== (Mb = {
              bite: wb.lampLightBiteMs,
              rare: wb.lampLightRareChance,
              meter: wb.lampLightMeterCatches,
              bloom: wb.lampLightBloomCatches,
              notice: wb.lampLightNoticeChance
            } [bb]) && void 0 !== Mb ? Mb : 0
          },
          eb = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Hb = [];
        for (const pb of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Vb = this.formatOdds(pb, bb),
            gb = this.formatOdds(pb, wb);
          if (null === Vb || null === gb || "bite" !== pb && "rare" !== pb && Vb === gb) continue;
          const lb = Mb(pb, wb) - Mb(pb, bb),
            Lb = eb[pb] ? lb < 0 : lb > 0;
          Hb.push({
            label: pb,
            before: Vb,
            after: gb,
            tone: Vb === gb ? "same" : Lb ? "better" : "worse"
          })
        }
        return Hb
      }
      charmView(bb, wb, Mb) {
        const eb = bb.lampLightCharmId.charAt(0).toUpperCase() + bb.lampLightCharmId.slice(1),
          Hb = "bloom" === this.situation;
        return {
          id: bb.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${eb}`),
          effect: this.translate(`skyblockGame:lampLightCharm${eb}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(bb.lampLightCharmCost)
          }),
          owned: bb.lampLightCharmOwned,
          affordable: Mb >= bb.lampLightCharmCost,
          socketed: wb.lampLightSocketed === bb.lampLightCharmId,
          lines: this.oddsLines(Hb ? wb.lampLightBareBloom : wb.lampLightBareOpen, Hb ? bb.lampLightCharmBloom : bb.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var bb, wb, Mb, eb;
        const Hb = this.message,
          pb = "ready" === (null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) ? this.shop : null,
          Vb = null !== (bb = null === Hb || void 0 === Hb ? void 0 : Hb.lampLightBalance) && void 0 !== bb ? bb : 0,
          gb = this.atChair,
          lb = "loading" === (null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Lb = "ready" !== (null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) || gb ? null !== (wb = this.refusalKey) && void 0 !== wb ? wb : lb : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Hb && "locked" !== Hb.lampLightStatus,
          status: null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) && void 0 !== Mb ? Mb : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Vb)
          }),
          releasing: null !== (eb = null === Hb || void 0 === Hb ? void 0 : Hb.lampLightReleasing) && void 0 !== eb && eb,
          gained: null === Hb || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Hb || void 0 === Hb ? void 0 : Hb.lampLightStatus) && gb && !this.isPending(),
          situation: this.situation,
          shop: null === pb ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: pb.lampLightOddsRod,
              island: this.translate(pb.lampLightIslandNameKey)
            }),
            heldRod: null !== pb.lampLightHeldRod,
            charms: pb.lampLightCharms.map((bb => this.charmView(bb, pb, Vb))),
            tints: pb.lampLightTints.map((bb => {
              const wb = bb.lampLightTintId,
                [Mb, eb, Hb] = bb.lampLightTintColour;
              return {
                id: wb,
                name: this.translate(`skyblockGame:lampLightTint${wb.charAt(0).toUpperCase()}${wb.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(bb.lampLightTintCost)
                }),
                owned: bb.lampLightTintOwned,
                affordable: Vb >= bb.lampLightTintCost,
                wearing: pb.lampLightTint === wb,
                colour: `rgb(${Mb}, ${eb}, ${Hb})`
              }
            })),
            wearingIslandColours: null === pb.lampLightTint
          },
          notice: null === Lb ? null : this.translate(Lb),
          sparkle: this.sparkle
        }
      }
    }
    const se = "skyblockMagmawardView";
    class me {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.iI = bb, this.now = wb, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Qb.map((() => 0)), this.wornAt = Qb.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      EO(bb) {
        var wb, Mb;
        const eb = Qb.map(((wb, Mb) => !0 === bb.magmawardPiecesWorn[Mb]));
        if (!eb.includes(!0)) return this.snapshot = null, void this.iI(null);
        const Hb = this.now(),
          pb = this.snapshot;
        null === pb && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Vb = bb.magmawardFuelCarried,
          gb = !eb.includes(!1);
        let lb = null !== (wb = null === pb || void 0 === pb ? void 0 : pb.pulse) && void 0 !== wb ? wb : null,
          Lb = null !== (Mb = null === pb || void 0 === pb ? void 0 : pb.flare) && void 0 !== Mb ? Mb : null;
        bb.magmawardFuelBurned ? (lb = "burn", Lb = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Hb, this.flareAt = Hb) : null !== pb && Vb > pb.fuel && (lb = "gain", this.pulseToken++, this.pulseAt = Hb), gb && null !== pb && !pb.fullSet && (Lb = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Hb, this.setLitAt = Hb);
        const Ib = Qb.map(((bb, wb) => (eb[wb] && null !== pb && !pb.pieces[wb].worn && (this.wornTokens[wb]++, this.wornAt[wb] = Hb), {
          itemName: bb,
          worn: eb[wb],
          wornToken: this.wornTokens[wb],
          justWorn: eb[wb] && this.isPlaying(this.wornAt[wb], Hb)
        })));
        this.snapshot = {
          pieces: Ib,
          wornCount: eb.filter(Boolean).length,
          fullSet: gb,
          fuel: Vb,
          fuelState: Vb <= 0 ? "empty" : Vb <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Hb) ? lb : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Hb) ? Lb : null,
          flareToken: this.flareToken,
          setLit: gb && this.isPlaying(this.setLitAt, Hb),
          setLitToken: this.setLitToken
        }, this.iI(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.iI(null)
      }
      isPlaying(bb, wb) {
        return wb - bb < 1200
      }
    }
    const he = "skyblockGlowtideView";
    class ze {
      constructor(bb) {
        this.iI = bb, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = bb => {
          this.arrow = bb, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      EO(bb) {
        this.bloom = bb.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.iI(null))
      }
      afterRender(bb, wb) {
        const Mb = this.bloom;
        if (null === Mb || null === bb) return;
        const eb = Mb.glowtideBloomX - bb[0],
          Hb = Mb.glowtideBloomZ - bb[2],
          pb = Math.hypot(eb, Hb),
          Vb = this.snapshot,
          gb = null !== Vb && void 0 !== Vb && Vb.inRange ? 1 : 0,
          lb = pb <= 12.5 + gb && bb[1] - Mb.glowtideBloomY <= 10 + gb;
        !lb || null !== Vb && void 0 !== Vb && Vb.inRange || this.inRangeToken++;
        const Lb = {
          colour: Mb.glowtideBloomColour,
          inRange: lb,
          distance: Math.round(pb),
          inRangeToken: this.inRangeToken
        };
        (null === Vb || Lb.colour !== Vb.colour || Lb.inRange !== Vb.inRange || !lb && Lb.distance !== Vb.distance) && (this.snapshot = Lb, this.iI(Lb));
        const Ib = Ob.e.computeShortestRotation(wb, (0, Ob.Lb)([eb, 0, Hb]));
        null === this.arrow || Math.abs(Ib - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Ib}rad)`, this.arrowTurn = Ib)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.iI(null)
      }
    }
    const Xe = "skyblockGlowMeterView";
    class xe {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.iI = bb, this.now = wb, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      EO(bb) {
        const wb = this.now(),
          {
            glowMeterFill: Mb,
            glowMeterCapacity: eb
          } = bb,
          Hb = Mb >= eb,
          pb = this.snapshot;
        null !== pb && (Hb && !pb.full && (this.fullToken++, this.fullAt = wb), pb.full && !Hb ? (this.burstToken++, this.burstAt = wb) : Mb > pb.fill && (this.gainToken++, this.gainAt = wb)), this.snapshot = {
          fill: Mb,
          qO: eb,
          ratio: Math.min(1, Math.max(0, Mb / eb)),
          full: Hb,
          rares: bb.glowMeterRares,
          ready: Hb && this.isPlaying(this.fullAt, wb),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, wb),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, wb),
          gainToken: this.gainToken
        }, this.iI(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.iI(null)
      }
      isPlaying(bb, wb) {
        return wb - bb < 2e3
      }
    }
    const je = "skyblockHushWaitView";
    class Ke {
      constructor(bb) {
        this.iI = bb, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      EO(bb) {
        let {
          hushWaitMs: wb,
          hushWaitTotalMs: Mb,
          hushWaitLines: eb
        } = bb;
        if (this.clearTimers(), this.token++, 0 === eb.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (wb <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: eb[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Hb = Math.max(null !== Mb && void 0 !== Mb ? Mb : wb, wb),
          pb = Hb - wb,
          Vb = bb => Hb * bb / eb.length,
          gb = bb => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Hb,
              elapsedMs: pb,
              line: eb[bb],
              lineIndex: bb
            })
          };
        let lb = 0;
        for (; lb + 1 < eb.length && Vb(lb + 1) <= pb;) lb++;
        gb(lb);
        for (let Lb = lb + 1; Lb < eb.length; Lb++) this.later(Vb(Lb) - pb, (() => {
          gb(Lb)
        }));
        this.later(wb, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(bb) {
        this.snapshot = bb, this.iI(bb)
      }
      later(bb, wb) {
        this.timers.push(setTimeout(wb, bb))
      }
      clearTimers() {
        for (const bb of this.timers) clearTimeout(bb);
        this.timers = []
      }
    }
    const re = "skyblockTideChartsView",
      Re = 36e5,
      De = 864e5;

    function ce(bb, wb, Mb) {
      const [eb, Hb, pb, Vb] = bb.tideChartArea, gb = Math.floor(wb), lb = Math.floor(Mb);
      return gb >= eb && gb <= pb && lb >= Hb && lb <= Vb
    }

    function Ye(bb, wb, Mb) {
      const [eb, Hb, pb, Vb] = bb.tideChartWater;
      return function(bb, wb, Mb, eb, Hb, pb) {
        const Vb = 4 - Gb(Math.floor(Hb) - (bb - Mb), Mb);
        return 5 * Gb(Math.floor(pb) - (wb - eb), eb) + Vb
      }(eb, Hb, pb, Vb, wb, Mb)
    }

    function Ze(bb, wb, Mb) {
      const eb = bb.tideCharts;
      for (let Hb = 0; Hb < eb.length; Hb++)
        if (ce(eb[Hb], wb, Mb)) return eb[Hb];
      return null
    }

    function fe(bb, wb, Mb) {
      const eb = Math.max(0, wb - Mb);
      return eb > De ? bb("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(eb / De))
      }) : eb > Re ? bb("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(eb / Re))
      }) : bb("skyblockGame:tideChartsTurnSoon")
    }
    class Ae extends lb {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, Mb, eb), this.translate = wb, this.now = Hb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Vt = bb => {
          this.picked = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        const wb = this.message;
        if (null !== wb)
          for (const eb of bb.tideCharts) {
            var Mb;
            const bb = wb.tideCharts.find((bb => bb.tideChartIsland === eb.tideChartIsland)),
              Hb = eb.tideChartLit & ~(null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.tideChartLit) && void 0 !== Mb ? Mb : 0);
            void 0 !== bb && 0 !== Hb && (this.pulse = {
              island: eb.tideChartIsland,
              cells: Hb,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = bb, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(bb, wb) {
        var Mb;
        const eb = null === this.message || Number.isNaN(bb) ? null : Ze(this.message, bb, wb),
          Hb = null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.tideChartIsland) && void 0 !== Mb ? Mb : null,
          pb = null === eb ? -1 : function(bb, wb, Mb) {
            const [eb, Hb, pb, Vb] = bb.tideChartWater;
            return function(bb, wb, Mb, eb, Hb, pb, Vb) {
              return ((Hb - bb) / (Mb + Vb)) ** 2 + ((pb - wb) / (eb + Vb)) ** 2 <= 1
            }(eb, Hb, pb, Vb, wb, Mb, 2) ? Ye(bb, wb, Mb) : -1
          }(eb, bb, wb);
        return (Hb !== this.hereIsland || pb !== this.hereCell) && (this.hereIsland = Hb, this.hereCell = pb, null !== Hb && (this.lastIsland = Hb), !0)
      }
      afterRender(bb) {
        if (null === this.message) return;
        this.lastX = null === bb ? Number.NaN : bb[0], this.lastZ = null === bb ? Number.NaN : bb[2];
        const wb = this.locate(this.lastX, this.lastZ),
          Mb = this.expirePulses();
        (wb || Mb || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const bb = this.now();
        return !(!this.open || bb - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = bb, fe(this.translate, this.message.tideChartTurnsInMs, bb - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(bb, wb) {
        const Mb = null === this.message ? null : Ze(this.message, bb, wb);
        if (null === Mb) return;
        const eb = Ye(Mb, bb, wb);
        0 === (Mb.tideChartPreBlank & 1 << eb) && (this.cast = {
          island: Mb.tideChartIsland,
          cell: eb,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const bb = this.now();
        let wb = !1;
        return 0 !== this.pulse.cells && bb - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, wb = !0), null !== this.cast && bb - this.cast.atMs >= 1500 && (this.cast = null, wb = !0), wb
      }
      setTranslator(bb) {
        this.translate = bb, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(bb, wb) {
        var Mb;
        return null !== (Mb = bb.tideCharts.find((bb => bb.tideChartIsland === wb))) && void 0 !== Mb ? Mb : null
      }
      describe(bb) {
        var wb, Mb, eb;
        const Hb = bb.tideChartIsland,
          pb = [];
        for (let tb = 0; tb < 25; tb++) {
          const wb = 1 << tb;
          0 !== (bb.tideChartLit & wb) ? pb.push("lit") : 0 !== (bb.tideChartClear & wb) ? pb.push("clear") : 0 !== (bb.tideChartPreBlank & wb) ? pb.push("shore") : pb.push("water")
        }
        const Vb = function(bb) {
            let wb = 0;
            for (let Mb = bb >>> 0; 0 !== Mb; Mb &= Mb - 1) wb++;
            return wb
          }(bb.tideChartLit),
          gb = bb.tideChartInkCount,
          lb = this.translate(bb.tideChartIslandNameKey),
          Lb = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Vb),
            ink: String(gb)
          }),
          Ib = null === bb.tideChartPictureNameKey ? null : this.translate(bb.tideChartPictureNameKey),
          Ob = this.hereIsland === Hb && -1 !== this.hereCell ? this.hereCell : null,
          Ub = [`${lb}: ${Lb}.`];
        if (null !== Ib && Ub.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Ib
          })), null !== Ob) {
          const bb = Math.floor(Ob / 5) + 1,
            wb = Ob % 5 + 1;
          Ub.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(bb),
            column: String(wb)
          }))
        }
        return {
          island: Hb,
          islandName: lb,
          cells: pb,
          hereCell: Ob,
          lit: Vb,
          ink: gb,
          litText: Lb,
          pictureName: Ib,
          gridLabel: Ub.join(" "),
          pulseCells: this.pulse.island === Hb ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (wb = this.cast) || void 0 === wb ? void 0 : wb.island) === Hb ? this.cast.cell : null,
          castToken: null !== (Mb = null === (eb = this.cast) || void 0 === eb ? void 0 : eb.token) && void 0 !== Mb ? Mb : 0
        }
      }
      buildSnapshot() {
        var bb, wb, Mb;
        const eb = this.message;
        if (null === eb || 0 === eb.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Hb = this.findChart(eb, this.hereIsland),
          pb = null !== (bb = null !== (wb = null !== (Mb = this.findChart(eb, this.open ? this.picked : null)) && void 0 !== Mb ? Mb : Hb) && void 0 !== wb ? wb : this.findChart(eb, this.lastIsland)) && void 0 !== bb ? bb : eb.tideCharts[0],
          Vb = null === Hb ? null : this.describe(Hb);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Vb,
          card: pb === Hb ? Vb : this.describe(pb),
          turnsText: fe(this.translate, eb.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(eb.tideChartBookCount)
          }),
          tabs: eb.tideCharts.map((bb => ({
            island: bb.tideChartIsland,
            name: this.translate(bb.tideChartIslandNameKey),
            selected: bb.tideChartIsland === pb.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const We = "skyblockRegularsView",
      Je = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Se = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Ne(bb, wb) {
      return "given" === bb ? wb.given : "owed" === bb ? wb.owed : wb.goal
    }
    class ve extends lb {
      constructor(bb, wb, Mb, eb) {
        super(bb, Mb, eb), this.translate = wb, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = bb => bb, this.openIsland = bb => {
          this.selected = bb, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = bb => {
          this.selected = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        this.message = bb, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const bb = this.openedFromReachLog;
        return this.openedFromReachLog = !1, bb
      }
      setTranslator(bb, wb, Mb) {
        this.translate = bb, void 0 !== Mb && (this.itemName = Mb), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(bb, wb, Mb) {
        return {
          text: this.translate(Ne(bb, wb), Mb),
          given: "given" === bb
        }
      }
      describeRegular(bb, wb) {
        const Mb = this.translate,
          eb = null !== bb.regularKg,
          Hb = bb.regularMeetings,
          pb = eb ? 0 === Hb ? Mb("skyblockGame:regularsNotMet") : 1 === Hb ? Mb("skyblockGame:regularsMeetingsOne") : Mb("skyblockGame:regularsMeetings", {
            count: Hb
          }) : "";
        return {
          id: bb.regularId,
          name: Mb(bb.regularNameKey),
          line: Mb(bb.regularLineKey),
          itemName: bb.regularFishItem,
          fishName: this.itemName(bb.regularFishItem),
          tagged: eb,
          size: null === bb.regularKg ? Mb("skyblockGame:regularsNotTagged") : Mb("skyblockGame:regularsSize", {
            kg: bb.regularKg.toFixed(1)
          }),
          meetings: pb,
          chance: Mb("skyblockGame:regularsChance", {
            count: bb.regularOneInCasts
          }),
          resting: bb.regularRestingToday,
          gifts: [{
            text: Mb("skyblockGame:regularsGiftFlare"),
            given: Hb >= 3
          }, this.describeGift(bb.regularTintGift, Je, {
            tint: Mb(bb.regularTintNameKey)
          })],
          history: [...bb.regularHistory].reverse().map((bb => {
            const eb = bb.regularMeetingKg.toFixed(1),
              Hb = wb - bb.regularMeetingDay;
            return Hb <= 0 ? Mb("skyblockGame:regularsToday", {
              kg: eb
            }) : Mb("skyblockGame:regularsDaysAgo", {
              days: Hb,
              kg: eb
            })
          }))
        }
      }
      describeIsland(bb, wb) {
        return {
          id: bb.regularsIslandId,
          name: this.translate(bb.regularsIslandNameKey),
          charm: this.describeGift(bb.regularsCharmGift, Se, {
            charm: this.translate(bb.regularsCharmNameKey)
          }),
          regulars: bb.regularsList.map((bb => this.describeRegular(bb, wb)))
        }
      }
      buildSnapshot() {
        var bb, wb, Mb, eb;
        const Hb = this.message;
        if (null === Hb) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const pb = Hb.regularsIslands.map((bb => this.describeIsland(bb, Hb.regularsToday))),
          Vb = null !== (bb = null !== (wb = null === (Mb = pb.find((bb => bb.id === this.selected))) || void 0 === Mb ? void 0 : Mb.id) && void 0 !== wb ? wb : null === (eb = pb[0]) || void 0 === eb ? void 0 : eb.id) && void 0 !== bb ? bb : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Vb,
          islands: pb
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Qe = "skyblockHiddenWatersView";
    class Ge {
      constructor(bb) {
        this.iI = bb, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      EO(bb) {
        this.snapshot = function(bb) {
          const [wb, Mb] = bb.hiddenWatersMapSize, eb = (bb, eb) => ({
            left: 1 - bb / wb,
            top: eb / Mb
          }), Hb = new Map;
          for (const [Vb, gb] of bb.hiddenWatersGlimpses) {
            var pb;
            const bb = null !== (pb = Hb.get(Vb)) && void 0 !== pb ? pb : [];
            bb.push(gb), Hb.set(Vb, bb)
          }
          return {
            found: bb.hiddenWatersFound,
            total: bb.hiddenWatersTotal,
            aspect: Mb / wb,
            pins: bb.hiddenWatersPins.map((bb => {
              let [wb, Mb] = bb;
              return eb(wb, Mb)
            })),
            islands: bb.hiddenWatersIslands.map((bb => {
              let [Hb, pb, Vb, gb] = bb;
              const {
                left: lb,
                top: Lb
              } = eb(Vb + 1, pb);
              return {
                left: lb,
                top: Lb,
                width: (Vb + 1 - Hb) / wb,
                height: (gb + 1 - pb) / Mb
              }
            })),
            glimpses: Hb
          }
        }(bb), this.iI(this.snapshot)
      }
    }
    const qe = "skyblockDialogueView";
    class ae extends lb {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, Mb, eb), this.translate = wb, this.requestDialogue = Hb, this.now = pb, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = bb => {
          this.selection = {
            kind: "quest",
            questId: bb
          }, this.request(), this.show()
        }, this.selectCharacter = bb => {
          this.selection = {
            kind: "character",
            npcId: bb
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EO(bb) {
        this.received = !0, this.scripts = bb.questDialogueScripts, this.speakers = new Map(bb.questDialogueSpeakers.map((bb => [bb.dialogueSpeakerId, bb]))), this.emit()
      }
      setTranslator(bb) {
        this.translate = bb, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const bb = this.now();
        bb >= this.requestAvailableAt && (this.requestAvailableAt = bb + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var bb;
        const wb = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...wb,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Mb = this.selection;
        if ("quest" === Mb.kind) {
          const bb = this.scripts.find((bb => bb.dialogueQuestId === Mb.questId));
          return {
            ...wb,
            characters: [],
            questFocus: Mb.questId,
            conversations: bb ? [this.conversation(bb)] : []
          }
        }
        const eb = [];
        for (let pb = this.scripts.length - 1; pb >= 0; pb--) {
          const bb = this.scripts[pb].dialogueLines;
          for (let wb = bb.length - 1; wb >= 0; wb--) eb.includes(bb[wb].dialogueSpeakerId) || eb.push(bb[wb].dialogueSpeakerId)
        }
        const Hb = null !== Mb.npcId && eb.includes(Mb.npcId) ? Mb.npcId : null !== (bb = eb[0]) && void 0 !== bb ? bb : null;
        return {
          ...wb,
          characters: eb.map((bb => {
            var wb, Mb;
            return {
              id: bb,
              styling: null !== (wb = null === (Mb = this.speakers.get(bb)) || void 0 === Mb ? void 0 : Mb.dialogueSpeakerStyling) && void 0 !== wb ? wb : bb,
              selected: bb === Hb
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((bb => bb.dialogueLines.some((bb => bb.dialogueSpeakerId === Hb)))).map((bb => this.conversation(bb))).reverse()
        }
      }
      conversation(bb) {
        let wb = null;
        return {
          questId: bb.dialogueQuestId,
          questName: this.translate(bb.dialogueQuestNameKey),
          completed: bb.dialogueQuestCompleted,
          lines: bb.dialogueLines.map(((bb, Mb) => {
            var eb;
            const Hb = bb.dialogueSpeakerId === wb || null === (eb = this.speakers.get(bb.dialogueSpeakerId)) || void 0 === eb ? void 0 : eb.dialogueSpeakerStyling;
            return wb = bb.dialogueSpeakerId, {
              key: Mb,
              display: {
                line: {
                  translationKey: bb.dialogueLineKey,
                  params: this.params(bb.dialogueLineParams)
                },
                speakerName: Hb,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(bb) {
        if (void 0 !== bb) return Object.fromEntries(Object.entries(bb).map((bb => {
          let [wb, Mb] = bb;
          return [wb, "string" === typeof Mb ? Mb : this.translate(Mb.translationKey)]
        })))
      }
    }
    var ie = Mb(644),
      ue = Mb(1333),
      de = Mb(110);
    const Pe = "skyblockAutographsView";

    function ne(bb) {
      const wb = ie.l[bb];
      return {
        label: wb.chatTag.map((bb => bb.str)).join(""),
        icon: wb.icon,
        colour: wb.mainRGB
      }
    }
    class ye extends lb {
      constructor(bb) {
        let wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = wb, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      EO(bb) {
        this.signatures = bb.autographSignatures, bb.autographOpen ? this.show() : this.emit()
      }
      setTranslator(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = wb, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var bb;
        const wb = null !== (bb = this.signatures) && void 0 !== bb ? bb : [],
          Mb = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          eb = [...wb].sort(((bb, wb) => Number(null !== wb.autographRank) - Number(null !== bb.autographRank) || wb.autographSignedAtMs - bb.autographSignedAtMs)).map((bb => ({
            key: `${bb.autographSignedAtMs}|${bb.autographSignerName}`,
            name: (0, ue.b)(bb.autographSignerName, !de.featureFlags.canSeeRealPlayerNames),
            rank: null === bb.autographRank ? null : ne(bb.autographRank),
            signedOn: Mb.format(bb.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: eb,
          total: eb.length,
          rankTotal: eb.filter((bb => null !== bb.rank)).length
        }
      }
    }
    const oe = "skyblockHudView",
      Te = () => {},
      ke = {
        getItem: () => null,
        setItem: Te,
        removeItem: Te
      };
    class bH {
      constructor(bb) {
        let {
          translate: wb,
          translateWithIcons: Mb,
          setMenuOpen: eb = Te,
          dismissMenu: Hb = () => {
            eb(!1)
          },
          publishSkills: pb = Te,
          publishQuests: Vb = Te,
          publishQuestNotification: gb = Te,
          publishDungeons: lb = Te,
          publishCollections: Lb = Te,
          publishMap: Ob = Te,
          publishHud: Ub = Te,
          publishPortalTransit: tb = Te,
          publishDailyReward: Cb = Te,
          publishMailbox: Eb = Te,
          publishQuestGraph: Fb = Te,
          publishForge: Bb = Te,
          publishSmuggler: sb = Te,
          publishKeepersChair: mb = Te,
          publishReachLog: hb = Te,
          publishLampLight: Xb = Te,
          publishMagmaward: xb = Te,
          publishGlowtide: jb = Te,
          publishGlowMeter: Kb = Te,
          publishHushWait: rb = Te,
          publishPassage: Rb = Te,
          publishTideCharts: Db = Te,
          publishRegulars: cb = Te,
          publishHiddenWaters: Yb = Te,
          publishDialogue: Zb = Te,
          publishAutographs: fb = Te,
          isLoadingScreenUp: Ab = () => !1,
          onDailyRewardCoinLanded: Wb = Te,
          onDailyRewardStarted: Jb = Te,
          onDailyRewardFinished: Sb = Te,
          onDailyRewardItemLanded: Nb = Te,
          onMailboxStarted: vb = Te,
          journeyStorage: Qb = ke,
          requestTracking: Gb = Te,
          requestTravel: qb = Te,
          requestDungeonEnter: ab = Te,
          requestQuestJump: ib = Te,
          requestQuestArrive: ub = Te,
          requestForge: db = Te,
          requestSmuggle: Pb = Te,
          requestKeepersChairAim: nb = Te,
          requestReachLogOpen: yb = Te,
          requestLampLight: ob = Te,
          requestDialogue: Tb = Te
        } = bb;
        this.navigation = void 0, this.map = void 0, this.compass = new zb, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new ge.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = bb => bb, this.close = () => {
          for (const bb of this.panels) bb.close()
        }, this.setMenuOpen = eb, this.publishHud = Ub, this.portalTransit = new hM(tb, Qb), this.magmaward = new me(xb), this.glowtide = new ze(jb), this.glowMeter = new xe(Kb), this.hushWait = new Ke(rb), this.dailyReward = new xM(Cb, (() => Ab() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (bb => {
          this.quests.setNotificationsHeld(bb)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Wb, Jb, Sb, Nb);
        const kb = bb => {
          this.panels.some((bb => bb.isOpen())) || (bb ? Hb() : this.setMenuOpen(!1))
        };
        this.skills = new Gw(pb, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), wb, void 0, void 0, kb), this.quests = new dw(Vb, Gb, wb, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, kb, gb), this.dungeons = new yw(lb, wb, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, kb, ab), this.collections = new BM(Lb, wb, (() => {
          this.beforePanelOpen(this.collections)
        }), kb), this.map = new Ib(Ob, qb, wb, (() => {
          this.beforePanelOpen(this.map)
        }), kb), this.questGraph = new fM(Fb, wb, (() => {
          this.beforePanelOpen(this.questGraph)
        }), kb, ib, ub, Qb), this.forge = new TM(Bb, wb, (() => {
          this.beforePanelOpen(this.forge)
        }), kb, db), this.smuggler = new we(sb, wb, (() => {
          this.beforePanelOpen(this.smuggler)
        }), kb, Pb), this.lampLight = new Be(Xb, wb, ob, this.commandPacer), this.keepersChair = new Le(mb, wb, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (bb => {
          this.lampLight.onChairClosed(), kb(bb)
        }), nb, Date.now, this.commandPacer), this.reachLog = new Ee(hb, wb, (() => {
          this.beforePanelOpen(this.reachLog)
        }), kb, yb, this.commandPacer), this.passage = new Ve(Rb, wb, (() => {
          this.beforePanelOpen(this.passage)
        }), kb), this.tideCharts = new Ae(Db, wb, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), kb), this.regulars = new ve(cb, wb, (() => {
          this.beforePanelOpen(this.regulars)
        }), (bb => {
          this.regulars.takeReturnToReachLog() && !bb && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), kb(bb)
        })), this.hiddenWaters = new Ge(Yb), this.dialogue = new ae(Zb, wb, (() => {
          this.beforePanelOpen(this.dialogue)
        }), kb, Tb), this.autographs = new ye(fb, (() => {
          this.beforePanelOpen(this.autographs)
        }), kb), this.mailbox = new RM(Eb, (() => Ab() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), vb), this.quests.translateWithIcons = null !== Mb && void 0 !== Mb ? Mb : null, this.skills.onLevelUp = bb => {
          this.quests.notify(bb)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new vw(this.map, this.quests, this.compass, wb)
      }
      getHudSnapshot() {
        const bb = this.hudSnapshot,
          wb = this.dailyReward.getHeldCoins();
        return null === bb || wb <= 0 || !("hudPurseCoins" in bb) ? bb : {
          ...bb,
          hudPurseCoins: Math.max(0, bb.hudPurseCoins - wb)
        }
      }
      receiveHud(bb) {
        this.hudSnapshot = bb, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(bb) {
        this.setMenuOpen(!0);
        const wb = bb === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = bb;
        for (const Mb of this.panels) Mb === bb || wb && Mb === this.reachLog || Mb.close();
        this.openingPanel = null
      }
      setTranslator(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb => this.resolveItemName(wb, bb);
        this.quests.translateWithIcons = null !== Mb && void 0 !== Mb ? Mb : null, this.navigation.setTranslator(bb, wb), this.lampLight.setTranslator(bb, wb), this.mailbox.setItemName(eb);
        for (const Hb of this.panels) Hb.setTranslator(bb, wb, eb)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const bb of this.panels) bb.dispose()
      }
    }
    var wH = Mb(1159),
      MH = Mb.n(wH),
      eH = Mb(26),
      HH = Mb(37898),
      pH = Mb(4792),
      VH = Mb(2130),
      gH = Mb(2116),
      lH = Mb(35351),
      LH = Mb(1259),
      IH = Mb(1611),
      OH = Mb(1364);

    function UH(bb) {
      let {
        controller: wb,
        minimap: Mb,
        children: eb
      } = bb;
      const Hb = (0, IH.h)(oe, wb.getHudSnapshot()),
        [pb, Vb] = (0, xb.useState)(wb.skills.getSnapshot().overallLevel);
      (0, IH.e)(Qw, (bb => {
        Vb(bb.overallLevel)
      }));
      const gb = (0, xb.useRef)(null);
      (0, IH.e)(XM, (bb => {
        ! function(bb, wb) {
          if (null === bb || "function" !== typeof bb.animate) return;
          const Mb = wb ? 1.35 : 1.15;
          bb.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Mb})`
          }, {
            transform: "scale(1)"
          }], {
            duration: wb ? 320 : 160,
            easing: "ease-out"
          }), bb.classList.toggle("Receiving", !wb), wb && (bb.classList.remove("Shine"), bb.offsetWidth, bb.classList.add("Shine"))
        }(gb.current, bb)
      }));
      const {
        t: lb
      } = (0, LH.C)(), {
        isTouchScreen: Lb
      } = (0, eH.o)(["isTouchScreen"]), [Ib, Ub] = (0, xb.useState)(null);
      return (0, pH.k)(Ib, ".SkyblockRightHud"), null !== Hb || Mb ? (0, OH.jsx)(HH.d, {
        placement: "topRight",
        children: (0, OH.jsxs)("div", {
          className: MH()("SkyblockRightHud", {
            TouchScreen: Lb
          }),
          children: [Mb, null !== Hb && (0, OH.jsxs)("div", {
            ref: Ub,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Hb ? (0, OH.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Hb.hudHelpText
            }) : (0, OH.jsxs)(OH.Fragment, {
              children: [(0, OH.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, OH.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, OH.jsx)("strong", {
                    style: {
                      color: Ob.O.cyanUiText
                    },
                    children: lb(Hb.hudZoneNameKey)
                  }), null !== pb && (0, OH.jsx)("span", {
                    style: {
                      color: Ob.O.goldUiText
                    },
                    children: lb("skyblockGame:level", {
                      level: (0, lH.d)(pb)
                    })
                  })]
                }), (0, OH.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: gb,
                  children: [(0, OH.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, OH.jsx)(VH.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, lH.d)(Hb.hudPurseCoins)]
                })]
              }), Hb.hudClockText.length > 0 && (0, OH.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, OH.jsx)(gH.d, {
                  text: Hb.hudClockText
                })
              })]
            }), eb, "hudZoneNameKey" in Hb && (0, OH.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var tH = Mb(39828);

    function CH(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)();
      return (0, OH.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: wb.display.mountPlayer,
        title: Mb("skyblockGame:mapYouAreHere"),
        children: (0, OH.jsx)(tH.b, {
          icon: "player"
        })
      })
    }
    const EH = Mb(39833),
      FH = Object.fromEntries(EH.keys().map((bb => [bb.replace(/^\.\/(.*)\.png$/, "$1"), EH(bb)])));

    function BH(bb, wb) {
      var Mb;
      return null !== (Mb = FH[bb]) && void 0 !== Mb ? Mb : FH[wb]
    }

    function sH(bb) {
      let {
        imageKey: wb,
        fallbackImageKey: Mb,
        geometryKey: eb,
        alt: Hb,
        className: pb
      } = bb;
      const [Vb, gb] = (0, xb.useState)((() => function(bb, wb) {
        return [{
          id: 0,
          imageKey: bb,
          geometryKey: wb,
          phase: "shown"
        }]
      }(wb, eb))), lb = function(bb, wb, Mb) {
        const eb = bb[bb.length - 1];
        if (eb.imageKey === wb && eb.geometryKey === Mb) return bb;
        const Hb = {
          id: eb.id + 1,
          imageKey: wb,
          geometryKey: Mb,
          phase: "entering"
        };
        return eb.geometryKey === Mb ? [{
          ...eb,
          phase: "leaving"
        }, Hb] : [Hb]
      }(Vb, wb, eb);
      return lb !== Vb && gb(lb), (0, OH.jsx)(OH.Fragment, {
        children: lb.map((bb => (0, OH.jsx)("img", {
          className: MH()("SkyblockMapTerrainImage", pb, {
            Entering: "entering" === bb.phase,
            Leaving: "leaving" === bb.phase
          }),
          src: BH(bb.imageKey, Mb),
          alt: "leaving" === bb.phase ? "" : Hb,
          onAnimationEnd: () => {
            gb((wb => function(bb, wb) {
              return bb.flatMap((bb => bb.id !== wb ? [bb] : "leaving" === bb.phase ? [] : [{
                ...bb,
                phase: "shown"
              }]))
            }(wb, bb.id)))
          }
        }, bb.id)))
      })
    }
    var mH = Mb(5384),
      hH = Mb(1616);

    function zH(bb) {
      if ("Tab" !== bb.key) return;
      const wb = Array.from(bb.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Mb = wb.indexOf(document.activeElement);
      var eb;
      if (bb.shiftKey && Mb <= 0) bb.preventDefault(), null === (eb = wb.at(-1)) || void 0 === eb || eb.focus();
      else if (!bb.shiftKey && (-1 === Mb || Mb === wb.length - 1)) {
        var Hb;
        bb.preventDefault(), null === (Hb = wb[0]) || void 0 === Hb || Hb.focus()
      }
    }

    function XH() {
      const bb = (0, xb.useRef)(null);
      return (0, xb.useCallback)((wb => {
        var Mb;
        wb ? (bb.current = document.activeElement, wb.focus()) : null === (Mb = bb.current) || void 0 === Mb || Mb.focus()
      }), [])
    }

    function xH(bb) {
      let {
        percent: wb,
        label: Mb,
        levelUpToken: eb,
        colour: Hb
      } = bb;
      return (0, OH.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Mb,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": wb,
        "aria-valuetext": Mb,
        children: [(0, OH.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${wb/100})`
          }
        }), null !== eb && void 0 !== eb && (0, OH.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Hb
          }
        }, eb)]
      })
    }

    function jH(bb) {
      let {
        mount: wb
      } = bb;
      return (0, OH.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: wb,
        hidden: !0,
        children: (0, OH.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, OH.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, OH.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function KH(bb, wb, Mb, eb) {
      (0, xb.useLayoutEffect)((() => {
        const Hb = bb.current;
        if (!Mb || null === wb || void 0 === wb || !wb.local || !Hb) return;
        const pb = Array.from(Hb.querySelectorAll(".SkyblockMapNode")),
          Vb = [...wb.points, ...wb.portals],
          gb = () => {
            const bb = Hb.clientWidth,
              Mb = Hb.clientHeight,
              gb = pb.map(((Hb, pb) => {
                const gb = Vb[pb];
                return {
                  id: gb.id,
                  portal: pb >= wb.points.length,
                  x: gb.position[0] * bb / 100,
                  y: gb.position[1] * Mb / 100,
                  width: Hb.offsetWidth / eb,
                  height: Hb.offsetHeight / eb
                }
              })),
              lb = new Map(Vb.map(((bb, wb) => [bb.id, pb[wb]])));
            for (const wb of function(bb, wb, Mb) {
                const eb = [],
                  Hb = [...bb].sort(((bb, wb) => Number(wb.portal) - Number(bb.portal) || bb.id.localeCompare(wb.id)));
                for (const pb of Hb) {
                  const bb = bb => Math.max(pb.width / 2, Math.min(wb - pb.width / 2, bb)),
                    Hb = bb => Math.max(pb.height / 2, Math.min(Mb - pb.height / 2, bb)),
                    Vb = [bb(pb.x)],
                    gb = [Hb(pb.y)];
                  for (const wb of eb) Vb.push(bb(wb.x - (wb.width + pb.width) / 2 - 4), bb(wb.x + (wb.width + pb.width) / 2 + 4)), gb.push(Hb(wb.y - (wb.height + pb.height) / 2 - 4), Hb(wb.y + (wb.height + pb.height) / 2 + 4));
                  let lb = {
                      ...pb,
                      x: Vb[0],
                      y: gb[0]
                    },
                    Lb = 1 / 0,
                    Ib = 1 / 0;
                  for (const wb of new Set(Vb))
                    for (const bb of new Set(gb)) {
                      let Mb = 0;
                      for (const Vb of eb) Mb += Math.max(0, (pb.width + Vb.width) / 2 + 4 - Math.abs(wb - Vb.x)) * Math.max(0, (pb.height + Vb.height) / 2 + 4 - Math.abs(bb - Vb.y));
                      const Hb = (wb - pb.x) ** 2 + (bb - pb.y) ** 2;
                      (Mb < Lb || Mb === Lb && Hb < Ib) && (lb = {
                        ...pb,
                        x: wb,
                        y: bb
                      }, Lb = Mb, Ib = Hb)
                    }
                  eb.push(lb)
                }
                return eb
              }(gb, bb, Mb)) {
              const bb = lb.get(wb.id);
              bb.style.left = `${wb.x}px`, bb.style.top = `${wb.y}px`
            }
          };
        gb();
        const lb = new ResizeObserver(gb);
        lb.observe(Hb);
        for (const bb of pb) lb.observe(bb);
        return () => {
          lb.disconnect()
        }
      }), [bb, wb, Mb, eb])
    }
    var rH = Mb(39918),
      RH = Mb(39923);

    function DH(bb) {
      var wb, Mb, eb, Hb;
      let {
        controller: pb,
        navigation: Vb
      } = bb;
      const gb = (0, IH.h)(Lb, pb.getSnapshot()),
        {
          t: lb
        } = (0, LH.C)(),
        Ib = XH(),
        Ob = gb.presentation,
        Ub = (0, xb.useRef)(null),
        tb = (0, xb.useRef)(null),
        Cb = Boolean(gb.open && (null === Ob || void 0 === Ob ? void 0 : Ob.local) && Ob.background),
        Eb = (0, rH.b)(Ub, Cb, `${gb.open}|${gb.tab}|${null===Ob||void 0===Ob||null===(wb=Ob.background)||void 0===wb?void 0:wb.geometryKey}`, null !== (Mb = null === Ob || void 0 === Ob || null === (eb = Ob.background) || void 0 === eb ? void 0 : eb.ratio) && void 0 !== Mb ? Mb : 2);
      if (KH(tb, Ob, gb.open, Eb.view.zoom), !Ob || !gb.open) return null;
      const Fb = Ob.local ? Ob.background : null,
        Bb = {
          "--map-ratio": String(null !== (Hb = null === Fb || void 0 === Fb ? void 0 : Fb.ratio) && void 0 !== Hb ? Hb : 2),
          backgroundColor: null === Fb || void 0 === Fb ? void 0 : Fb.colour
        },
        sb = {
          "--map-zoom": String(Eb.view.zoom),
          transform: `translate(${100*Eb.view.x}%, ${100*Eb.view.y}%) scale(${Eb.view.zoom})`
        };
      return (0, OH.jsx)(mH.e, {
        show: gb.open,
        close: pb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Ib,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, OH.jsx)("h2", {
                id: "skyblockMapTitle",
                children: lb("skyblockGame:map")
              }), Ob.minimap && (0, OH.jsx)("p", {
                children: Ob.minimap.caption
              })]
            }), (0, OH.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((bb => (0, OH.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": bb === gb.tab ? "true" : void 0,
                className: MH()({
                  Selected: bb === gb.tab
                }),
                "aria-pressed": bb === gb.tab,
                onClick: () => {
                  pb.selectTab(bb)
                },
                children: lb("local" === bb ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, bb)))
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: pb.dismiss
            })]
          }), (0, OH.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, OH.jsxs)("div", {
              ref: Ub,
              className: MH()("SkyblockMapCanvas", {
                Local: Ob.local,
                Overview: !Ob.local,
                Zoomed: Eb.view.zoom > 1
              }),
              style: Bb,
              children: [(0, OH.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Cb ? sb : void 0,
                children: (0, OH.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: tb,
                  children: [Fb && (0, OH.jsx)(sH, {
                    className: "SkyblockMapTerrain",
                    imageKey: Fb.imageKey,
                    fallbackImageKey: Fb.fallbackImageKey,
                    geometryKey: Fb.geometryKey,
                    alt: Fb.label
                  }), Ob.local && (0, OH.jsx)(jH, {
                    mount: Vb.display.mountMapSearchArea
                  }), !Ob.local && (0, OH.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Ob.connections.map((bb => (0, OH.jsx)("line", {
                      className: MH()({
                        Explored: bb.explored
                      }),
                      x1: bb.start[0],
                      y1: bb.start[1],
                      x2: bb.end[0],
                      y2: bb.end[1]
                    }, bb.id)))
                  }), Ob.points.map((bb => {
                    const wb = !Ob.local && bb.thumbnail ? FH[bb.thumbnail] : void 0;
                    return (0, OH.jsxs)("div", {
                      className: MH()("SkyblockMapNode", {
                        Current: bb.current
                      }),
                      style: {
                        left: `${bb.position[0]}%`,
                        top: `${bb.position[1]}%`
                      },
                      children: [(0, OH.jsxs)(hH.f, {
                        className: MH()("SkyblockMapPin", {
                          Unknown: !bb.visited,
                          Current: bb.current
                        }),
                        disabled: gb.pending,
                        onClick: () => {
                          pb.travel(bb.travelKind, bb.travelId)
                        },
                        children: [wb && (0, OH.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: wb,
                          alt: ""
                        }), !wb && (0, OH.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, OH.jsx)(tH.b, {
                            icon: bb.icon
                          })
                        }), (0, OH.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: bb.name
                        })]
                      }), bb.current && (0, OH.jsx)("span", {
                        className: MH()("SkyblockMapHereBadge", {
                          Above: bb.position[1] > 50
                        }),
                        children: lb("skyblockGame:mapYouAreHere")
                      })]
                    }, bb.id)
                  })), Ob.portals.map((bb => (0, OH.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${bb.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${bb.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, OH.jsxs)(hH.f, {
                      className: "SkyblockMapPin",
                      disabled: gb.pending,
                      onClick: () => {
                        pb.travel(bb.travelKind, bb.travelId)
                      },
                      children: [(0, OH.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: bb.colour
                        },
                        "aria-hidden": "true",
                        children: (0, OH.jsx)(tH.b, {
                          icon: bb.icon
                        })
                      }), (0, OH.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: bb.name
                      })]
                    })
                  }, bb.id))), Ob.local && (0, OH.jsx)(CH, {
                    controller: Vb
                  })]
                })
              }), Cb && (0, OH.jsx)(RH.e, {
                zoom: Eb,
                zoomInLabel: lb("skyblockGame:mapZoomIn"),
                zoomOutLabel: lb("skyblockGame:mapZoomOut")
              }), (0, OH.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: gb.feedback
              })]
            })
          }), (0, OH.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Ob.progress && (0, OH.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, OH.jsx)("span", {
                children: Ob.progress
              }), (0, OH.jsx)(xH, {
                percent: Ob.percent,
                label: Ob.progress
              })]
            }), Ob.noLandmarks && (0, OH.jsx)("span", {
              children: lb("skyblockGame:mapNoLandmarks")
            }), Ob.canTravel && (0, OH.jsx)("span", {
              className: "SkyblockMapHint",
              children: lb("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function cH(bb) {
      let {
        view: wb,
        controller: Mb,
        navigation: eb
      } = bb;
      const {
        t: Hb
      } = (0, LH.C)(), {
        isTouchScreen: pb
      } = (0, eH.o)(["isTouchScreen"]);
      return (0, OH.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Hb("skyblockGame:mapLocal"),
        children: [pb && (0, OH.jsx)(hH.f, {
          className: "SkyblockMinimapOpen",
          onClick: Mb.showLocal,
          children: Hb("skyblockGame:map")
        }), (0, OH.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: wb.colour
          },
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: eb.display.mountTerrain,
            style: {
              width: wb.width,
              height: wb.height
            },
            children: [(0, OH.jsx)(sH, {
              imageKey: wb.imageKey,
              fallbackImageKey: wb.fallbackImageKey,
              geometryKey: wb.geometryKey,
              alt: wb.label
            }), (0, OH.jsx)(jH, {
              mount: eb.display.mountMinimapSearchArea
            }), wb.markers.map((bb => (0, OH.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${bb.position[0]}%`,
                top: `${bb.position[1]}%`,
                color: bb.colour
              },
              title: bb.name,
              children: (0, OH.jsx)(tH.b, {
                icon: bb.icon
              })
            }, bb.id)))]
          }), (0, OH.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Hb("skyblockGame:mapYouAreHere"),
            children: (0, OH.jsx)(tH.b, {
              icon: "player"
            })
          })]
        }), (0, OH.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: wb.caption
        })]
      })
    }

    function YH(bb) {
      let {
        controller: wb
      } = bb;
      return (0, OH.jsxs)("div", {
        className: "SkyblockCompass",
        ref: wb.display.mountCompass,
        children: [(0, OH.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, OH.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, OH.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ZH(bb) {
      let {
        controller: wb,
        surface: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)(), Hb = (0, IH.h)(Qw, wb.getSnapshot()), pb = XH();
      return Hb.enabled ? (0, OH.jsxs)(OH.Fragment, {
        children: ["hud" === Mb && (0, OH.jsx)(HH.d, {
          placement: "statBars",
          children: Hb.hud && (0, OH.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Hb.hud.colour
            },
            children: [(0, OH.jsx)(xH, {
              percent: Hb.hud.skill.percent,
              label: Hb.hud.skill.xp,
              levelUpToken: Hb.hud.levelUpToken,
              colour: Hb.hud.colour
            }), (0, OH.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, OH.jsxs)("span", {
                children: [Hb.hud.skill.label, " \xb7 ", Hb.hud.skill.level]
              }), (0, OH.jsx)("span", {
                children: Hb.hud.gain
              })]
            })]
          })
        }), "hud" === Mb && (0, OH.jsx)(HH.d, {
          children: Hb.hud && (0, OH.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, OH.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, OH.jsx)("strong", {
                children: Hb.hud.skill.label
              }), (0, OH.jsx)("span", {
                children: Hb.hud.gain
              })]
            }), (0, OH.jsx)(xH, {
              percent: Hb.hud.skill.percent,
              label: Hb.hud.skill.xp,
              levelUpToken: Hb.hud.levelUpToken,
              colour: Hb.hud.colour
            }), (0, OH.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, OH.jsx)("span", {
                children: Hb.hud.skill.level
              }), (0, OH.jsx)("span", {
                children: Hb.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Mb && (0, OH.jsx)(mH.e, {
          show: Hb.open,
          close: wb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, OH.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: pb,
            onKeyDown: zH,
            children: [(0, OH.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, OH.jsxs)("div", {
                children: [(0, OH.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: eb("skyblockGame:skills")
                }), (0, OH.jsx)("p", {
                  children: eb("skyblockGame:skillsIntro")
                })]
              }), (0, OH.jsx)(hH.l, {
                padIgnore: !0,
                onClick: wb.dismiss
              })]
            }), (0, OH.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, OH.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Hb.skills.map((bb => (0, OH.jsxs)(hH.f, {
                  className: MH()("SkyblockSkillCard", {
                    Selected: bb.selected
                  }),
                  ariaPressed: bb.selected,
                  onClick: () => {
                    wb.select(bb.id)
                  },
                  children: [(0, OH.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, OH.jsx)(VH.c, {
                      itemName: bb.icon,
                      amount: 0
                    })
                  }), (0, OH.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, OH.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, OH.jsx)("strong", {
                        children: bb.label
                      }), (0, OH.jsx)("span", {
                        children: bb.level
                      })]
                    }), (0, OH.jsx)(xH, {
                      percent: bb.percent,
                      label: `${bb.label}: ${bb.xp}`
                    }), (0, OH.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: bb.xp
                    })]
                  })]
                }, bb.id)))
              }), Hb.detail && (0, OH.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, OH.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, OH.jsx)(VH.c, {
                    itemName: Hb.detail.icon,
                    amount: 0
                  })
                }), (0, OH.jsx)("h3", {
                  children: Hb.detail.label
                }), (0, OH.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Hb.detail.level
                }), (0, OH.jsx)("p", {
                  children: Hb.detail.description
                }), (0, OH.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, OH.jsx)("strong", {
                    children: eb("skyblockGame:currentBenefit")
                  }), (0, OH.jsx)("span", {
                    children: Hb.detail.benefit
                  })]
                }), (0, OH.jsx)(xH, {
                  percent: Hb.detail.percent,
                  label: Hb.detail.xp
                }), (0, OH.jsx)("p", {
                  children: Hb.detail.xp
                }), (0, OH.jsx)("h4", {
                  children: eb("skyblockGame:earnXp")
                }), (0, OH.jsx)("ul", {
                  children: Hb.detail.sources.map((bb => (0, OH.jsx)("li", {
                    children: bb
                  }, bb)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var fH = Mb(1516),
      AH = Mb(5734),
      WH = Mb(366);

    function JH(bb) {
      let {
        item: wb
      } = bb;
      return (0, OH.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, OH.jsx)(VH.c, {
          itemName: wb,
          amount: 0
        })
      })
    }

    function SH(bb) {
      let {
        name: wb,
        percent: Mb,
        progress: eb
      } = bb;
      return (0, OH.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, OH.jsx)(xH, {
          percent: Mb,
          label: `${(0,WH.qb)(wb)}: ${eb}`
        }), (0, OH.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: eb
        })]
      })
    }

    function NH(bb) {
      let {
        subquests: wb,
        showDescriptions: Mb = !1
      } = bb;
      return (0, OH.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: wb.map((bb => {
          const wb = Mb && "completed" === bb.status,
            eb = (0, OH.jsxs)("li", {
              className: MH()("SkyblockQuestStep", bb.status, {
                JustFinished: bb.justFinished,
                JustUnlocked: bb.justUnlocked
              }),
              tabIndex: wb ? 0 : void 0,
              children: [null !== bb.iconItem && (0, OH.jsx)(JH, {
                item: bb.iconItem
              }), null === bb.iconItem && (0, OH.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === bb.status ? "\u2713" : "skipped" === bb.status ? "\u2212" : "\u25cb"
              }), (0, OH.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, OH.jsx)("strong", {
                  children: (0, OH.jsx)(AH.b, {
                    text: bb.name
                  })
                }), Mb && !wb && (0, OH.jsx)("span", {
                  children: (0, OH.jsx)(AH.b, {
                    text: bb.description
                  })
                }), null !== bb.barPercent && (0, OH.jsx)(SH, {
                  name: bb.name,
                  percent: bb.barPercent,
                  progress: bb.progress
                }), null === bb.barPercent && !wb && (0, OH.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: bb.statusLabel
                })]
              })]
            }, bb.id);
          return wb ? (0, OH.jsx)(fH.d, {
            delayShow: 200,
            tooltipInner: (0, OH.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, OH.jsx)("span", {
                children: (0, OH.jsx)(AH.b, {
                  text: bb.description
                })
              }), (0, OH.jsx)("strong", {
                children: bb.statusLabel
              })]
            }),
            children: eb
          }, bb.id) : eb
        }))
      })
    }

    function vH(bb) {
      let {
        quest: wb,
        select: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)(), Hb = wb.focusStep;
      return (0, OH.jsxs)(hH.f, {
        className: MH()("SkyblockQuestCard", {
          Selected: wb.selected,
          Tracked: wb.tracked
        }),
        onClick: () => {
          Mb(wb.id)
        },
        children: [(0, OH.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, OH.jsx)("strong", {
            children: (0, OH.jsx)(AH.b, {
              text: wb.name
            })
          }), wb.tracked && (0, OH.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: eb("skyblockGame:currentQuest")
          })]
        }), Hb && (0, OH.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Hb.iconItem && (0, OH.jsx)(JH, {
            item: Hb.iconItem
          }), (0, OH.jsx)(SH, {
            name: Hb.name,
            percent: Hb.barPercent,
            progress: Hb.progress
          })]
        }), (0, OH.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: wb.progress
        })]
      })
    }

    function QH(bb) {
      let {
        controller: wb,
        surface: Mb
      } = bb;
      const eb = (0, IH.h)(iw, wb.getSnapshot()),
        {
          t: Hb
        } = (0, LH.C)(),
        pb = XH();
      return eb.enabled ? (0, OH.jsxs)(OH.Fragment, {
        children: ["hud" === Mb && (0, OH.jsx)(OH.Fragment, {
          children: eb.tracked && (0, OH.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: aw,
            children: (0, OH.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [eb.trackedStepPulse > 0 && (0, OH.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, eb.trackedStepPulse), (0, OH.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Hb("skyblockGame:currentQuest")
              }), (0, OH.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, OH.jsx)("strong", {
                  children: (0, OH.jsx)(AH.b, {
                    text: eb.tracked.name
                  })
                }), null !== eb.tracked.clock && (0, OH.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: eb.tracked.clock
                })]
              }), (0, OH.jsx)(NH, {
                subquests: eb.tracked.subquests
              })]
            })
          })
        }), "menu" === Mb && (0, OH.jsx)(mH.e, {
          show: eb.open,
          close: wb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, OH.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: pb,
            onKeyDown: zH,
            children: [(0, OH.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, OH.jsx)("div", {
                children: (0, OH.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Hb("skyblockGame:quests")
                })
              }), (0, OH.jsx)(hH.l, {
                padIgnore: !0,
                onClick: wb.dismiss
              })]
            }), (0, OH.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, OH.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, OH.jsx)("h3", {
                  children: Hb("skyblockGame:current")
                }), 0 === eb.active.length && (0, OH.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Hb("skyblockGame:noActiveQuests")
                }), eb.active.map((bb => (0, OH.jsx)(vH, {
                  quest: bb,
                  select: wb.select
                }, bb.id))), (0, OH.jsx)("h3", {
                  children: (0, OH.jsxs)("button", {
                    type: "button",
                    className: MH()("SkyblockQuestSectionToggle", {
                      Expanded: eb.completedExpanded
                    }),
                    "aria-expanded": eb.completedExpanded,
                    onClick: wb.toggleCompleted,
                    children: [(0, OH.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Hb("skyblockGame:completed"), (0, OH.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: eb.completed.length
                    })]
                  })
                }), eb.completedExpanded && 0 === eb.completed.length && (0, OH.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Hb("skyblockGame:noCompletedQuests")
                }), eb.completedExpanded && eb.completed.map((bb => (0, OH.jsx)(vH, {
                  quest: bb,
                  select: wb.select
                }, bb.id)))]
              }), eb.detail && (0, OH.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [eb.detail.completed && (0, OH.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Hb("skyblockGame:completedQuest")
                }), (0, OH.jsx)("h3", {
                  children: (0, OH.jsx)(AH.b, {
                    text: eb.detail.name
                  })
                }), (0, OH.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, OH.jsx)(AH.b, {
                    text: eb.detail.description
                  })
                }), (0, OH.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [eb.detail.progress, null !== eb.detail.clock && (0, OH.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: eb.detail.clock
                  })]
                }), (0, OH.jsx)(NH, {
                  subquests: eb.detail.subquests,
                  showDescriptions: !0
                }), eb.detail.tracked && (0, OH.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: eb.detail.trackLabel
                }), !eb.detail.completed && !eb.detail.tracked && (0, OH.jsx)(hH.p, {
                  onClick: wb.trackSelected,
                  disabled: !eb.detail.canTrack,
                  children: eb.detail.trackLabel
                }), eb.detail.canViewDialogue && (0, OH.jsx)(hH.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: wb.viewDialogue,
                  children: Hb("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var GH = Mb(1475),
      qH = Mb(3822);

    function aH(bb, wb, Mb, eb, Hb) {
      const pb = bb => "linear" === Hb ? bb : {
          XM: Hb,
          point: bb
        },
        Vb = {};
      for (const [gb, lb] of eb)
        for (const [wb, Mb] of Object.entries(bb(gb, lb, pb))) Vb[wb] ??= {
          timeline: []
        }, Vb[wb].timeline.push(Mb);
      return {
        BM: wb,
        loop: Mb,
        mM: Vb
      }
    }
    const iH = .547,
      uH = .022,
      dH = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      PH = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function nH(bb, wb, Mb) {
      const {
        drop: eb = 0,
        shift: Hb = 0,
        torso: pb = 0,
        nod: Vb = 0,
        tilt: gb = 0,
        legs: lb = [0, 0],
        arms: Lb = 0,
        spread: Ib = 0
      } = wb, Ob = iH * Math.cos(pb) - uH * Math.sin(pb), Ub = iH * Math.sin(pb) + uH * Math.cos(pb), tb = Mb([0, -eb, Hb]);
      return {
        LowerBody: {
          timeFraction: bb,
          position: tb,
          rotation: Mb([0, 0, 0])
        },
        UpperBody: {
          timeFraction: bb,
          position: tb,
          rotation: Mb([pb, 0, gb])
        },
        HeadMesh: {
          timeFraction: bb,
          position: Mb([0, Ob - iH - eb, Ub - uH + Hb]),
          rotation: Mb([pb + Vb, 0, gb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          rotation: Mb([lb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          rotation: Mb([lb[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Mb([Lb, 0, Ib])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Mb([Lb, 0, -Ib])
        }
      }
    }

    function yH(bb, wb, Mb) {
      return aH(nH, bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function oH(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function TH(bb, wb, Mb) {
      const {
        rise: eb = 0,
        shift: Hb = 0,
        torso: pb = 0,
        twist: Vb = 0,
        tilt: gb = 0,
        nod: lb = 0,
        cock: Lb = 0,
        arms: Ib = 0,
        spread: Ob = 0
      } = wb, [Ub, tb] = oH(Ib), [Cb, Eb] = oH(Ob);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: Mb([0, eb, Hb]),
          rotation: Mb([pb, Vb, gb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: Mb([lb, 0, Lb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Mb([Ub, 0, Cb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Mb([tb, 0, -Eb])
        }
      }
    }
    const kH = [1.0625, -1, 0];

    function bp(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function wp(bb, wb, Mb) {
      const {
        drop: eb = 0,
        shift: Hb = 0,
        torso: pb = 0,
        tilt: Vb = 0,
        nod: gb = 0,
        cock: lb = 0,
        legs: Lb = [0, 0],
        arms: Ib = 0,
        spread: Ob = 0
      } = wb, [Ub, tb] = bp(Ib), [Cb, Eb] = bp(Ob), Fb = -pb, Bb = -Vb, [sb, mb, hb] = function(bb, wb) {
        const [Mb, eb, Hb] = [-kH[0], kH[1], -kH[2]], pb = Mb * Math.cos(wb) - eb * Math.sin(wb), Vb = Mb * Math.sin(wb) + eb * Math.cos(wb);
        return [pb - Mb, -(Vb * Math.cos(bb) - Hb * Math.sin(bb) - eb), Vb * Math.sin(bb) + Hb * Math.cos(bb) - Hb]
      }(Fb, Bb), zb = Mb([0, -eb, Hb]);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: Mb([sb, mb - eb, hb + Hb]),
          rotation: Mb([Fb, 0, Bb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: Mb([-gb, 0, -lb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Mb([-Ub, 0, -Cb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Mb([-tb, 0, Eb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          position: zb,
          rotation: Mb([-Lb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          position: zb,
          rotation: Mb([-Lb[1], 0, 0])
        }
      }
    }
    var Mp = Mb(38356),
      ep = Mb(39687),
      Hp = Mb(39927);

    function pp(bb, wb, Mb) {
      var eb, Hb;
      const pb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return bb + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - bb) * Mb
        },
        [Vb, gb] = null !== (eb = bb.legs) && void 0 !== eb ? eb : [0, 0],
        [lb, Lb] = null !== (Hb = wb.legs) && void 0 !== Hb ? Hb : [0, 0];
      return {
        drop: pb(bb.drop, wb.drop),
        shift: pb(bb.shift, wb.shift),
        torso: pb(bb.torso, wb.torso),
        nod: pb(bb.nod, wb.nod),
        tilt: pb(bb.tilt, wb.tilt),
        legs: [pb(Vb, lb), pb(gb, Lb)],
        arms: pb(bb.arms, wb.arms),
        spread: pb(bb.spread, wb.spread)
      }
    }
    const Vp = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      gp = yH(4400, !0, [
        [0, Vp],
        [.16, {
          ...Vp,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Vp],
        [.44, {
          ...Vp,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, pp(Vp, dH, .7)],
        [.66, pp(Vp, dH, .78)],
        [.74, pp(Vp, PH, .65)],
        [.86, {
          ...Vp,
          drop: .14
        }],
        [1, Vp]
      ], "catmull-rom-spline"),
      lp = {
        ...Vp,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Lp = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Ip = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Op = {
        caveGolem: gp,
        magmaGolem: yH(3600, !0, [
          [0, lp],
          [.12, {
            ...lp,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...lp,
            tilt: -.08
          }],
          [.4, {
            ...lp,
            tilt: .06,
            drop: .11
          }],
          [.52, pp(lp, dH, .9)],
          [.62, pp(lp, PH, .8)],
          [.7, pp(lp, PH, .45)],
          [.78, pp(lp, PH, .85)],
          [.9, {
            ...lp,
            drop: .17
          }],
          [1, lp]
        ], "catmull-rom-spline"),
        frostWraith: function(bb, wb, Mb) {
          return aH(TH, bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Lp],
          [.14, {
            ...Lp,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Lp,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Lp,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Lp,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Lp,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Lp,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Lp,
            rise: .16,
            tilt: -.04
          }],
          [1, Lp]
        ], "catmull-rom-spline"),
        tikiTerror: function(bb, wb, Mb) {
          return aH(wp, bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Ip],
          [.16, {
            ...Ip,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Ip],
          [.44, {
            ...Ip,
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
            ...Ip,
            drop: .1
          }],
          [1, Ip]
        ], "catmull-rom-spline")
      },
      Up = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      tp = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Cp = Object.fromEntries(Object.entries(Op).map((bb => {
        let [wb, Mb] = bb;
        return [wb, (0, Hp.c)((0, Mp.h)(Mb), wb)]
      })));

    function Ep(bb) {
      const wb = function(bb) {
        var wb;
        const Mb = (0, ep.c)(bb).poseRig;
        return null !== (wb = tp[bb]) && void 0 !== wb ? wb : void 0 === Mb ? null : Up[Mb]
      }(bb);
      return null === wb ? null : Cp[wb]
    }

    function Fp(bb) {
      return {
        "--difficulty-colour": bb
      }
    }
    const Bp = (0, xb.lazy)((() => (0, qH.c)(Mb.e(230).then((() => Mb(53730))), (bb => bb.MobPreview))));

    function sp(bb) {
      var wb, Mb, eb;
      let {
        picker: Hb,
        controller: pb
      } = bb;
      const {
        t: Vb
      } = (0, LH.C)(), gb = XH(), {
        page: lb
      } = Hb;
      return (0, OH.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: gb,
        onKeyDown: bb => {
          "ArrowLeft" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), pb.previous()) : "ArrowRight" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), pb.next()) : zH(bb)
        },
        style: Fp(lb.colour),
        children: [(0, OH.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, OH.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Hb.dungeonName
          }), (0, OH.jsx)(hH.l, {
            padIgnore: !0,
            onClick: pb.dismiss
          })]
        }), (0, OH.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, OH.jsx)(hH.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Hb.canPrevious,
              onClick: pb.previous,
              children: (0, OH.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, OH.jsx)(GH.b, {
                  name: "angle-up"
                })
              })
            }), (0, OH.jsxs)("div", {
              className: MH()("SkyblockBossPickerBoss", {
                Locked: !lb.unlocked
              }),
              children: [null !== lb.bossMobType && (0, OH.jsx)(xb.Suspense, {
                fallback: (0, OH.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, OH.jsx)(Bp, {
                  className: "SkyblockBossPickerModel",
                  mobType: lb.bossMobType,
                  variation: lb.bossMobVariation,
                  animation: null !== (wb = Ep(lb.bossMobType)) && void 0 !== wb ? wb : void 0
                })
              }), null === lb.bossMobType && (0, OH.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, OH.jsx)(hH.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Hb.canNext,
              onClick: pb.next,
              children: (0, OH.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, OH.jsx)(GH.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, OH.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [lb.beaten && (0, OH.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), lb.label]
            }), (0, OH.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Mb = lb.bossName) && void 0 !== Mb ? Mb : "???"
            }), (0, OH.jsxs)("span", {
              className: MH()("SkyblockBossPickerRecord", {
                Locked: null !== lb.lockedHint
              }),
              children: [null !== lb.lockedHintHighlight && (0, OH.jsxs)(OH.Fragment, {
                children: [lb.lockedHintHighlight.before, (0, OH.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Fp(lb.lockedHintHighlight.colour),
                  children: [null !== lb.lockedHintHighlight.icon && (0, OH.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, OH.jsx)(VH.c, {
                      itemName: lb.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), lb.lockedHintHighlight.name]
                }), lb.lockedHintHighlight.after]
              }), null === lb.lockedHintHighlight && (null !== (eb = lb.lockedHint) && void 0 !== eb ? eb : lb.summary)]
            })]
          }), (0, OH.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Hb.pages.map((bb => (0, OH.jsx)("span", {
              className: MH()("SkyblockBossPickerDot", {
                Current: bb.current,
                Locked: !bb.unlocked
              }),
              style: Fp(bb.colour)
            }, bb.difficulty)))
          }), (0, OH.jsx)(hH.u, {
            className: "SkyblockBossPickerFight",
            disabled: !lb.unlocked,
            onClick: pb.enter,
            children: Vb("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function mp(bb) {
      let {
        dungeon: wb,
        select: Mb
      } = bb;
      return (0, OH.jsxs)(hH.f, {
        className: MH()("SkyblockDungeonCard", {
          Selected: wb.selected
        }),
        onClick: () => {
          Mb(wb.id)
        },
        children: [(0, OH.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, OH.jsx)("strong", {
            children: wb.name
          }), (0, OH.jsx)("span", {
            children: wb.beatenSummary
          })]
        }), (0, OH.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: wb.difficulties.map((bb => (0, OH.jsxs)("span", {
            className: MH()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: bb.beaten
            }),
            style: Fp(bb.colour),
            title: bb.summary,
            children: [bb.beaten && (0, OH.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), bb.label]
          }, bb.difficulty)))
        })]
      })
    }

    function hp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(nw, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH();
      return Mb.enabled ? (0, OH.jsxs)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Mb.picker && (0, OH.jsx)(sp, {
          picker: Mb.picker,
          controller: wb
        }), !Mb.picker && (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: eb("skyblockGame:dungeons")
              }), (0, OH.jsx)("p", {
                children: eb("skyblockGame:dungeonsIntro")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: wb.dismiss
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, OH.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Mb.dungeons.map((bb => (0, OH.jsx)(mp, {
                dungeon: bb,
                select: wb.select
              }, bb.id)))
            }), Mb.detail && (0, OH.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, OH.jsx)("h3", {
                children: Mb.detail.name
              }), (0, OH.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Mb.detail.difficulties.map((bb => (0, OH.jsxs)("li", {
                  className: MH()("SkyblockDungeonRecord", {
                    Beaten: bb.beaten
                  }),
                  children: [(0, OH.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Fp(bb.colour),
                    children: [bb.beaten && (0, OH.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), bb.label]
                  }), (0, OH.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: bb.summary
                  })]
                }, bb.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function zp(bb) {
      let {
        collection: wb,
        select: Mb
      } = bb;
      return (0, OH.jsxs)(hH.f, {
        className: MH()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: wb.selected,
          Locked: wb.locked
        }),
        ariaPressed: wb.selected,
        onClick: () => {
          Mb(wb.id)
        },
        children: [(0, OH.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, OH.jsx)(VH.c, {
            itemName: wb.icon,
            amount: 0
          })
        }), (0, OH.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, OH.jsx)("strong", {
              children: wb.name
            }), (0, OH.jsx)("span", {
              children: wb.tier
            })]
          }), (0, OH.jsx)(xH, {
            percent: wb.percent,
            label: `${wb.name}: ${wb.progress}`
          }), (0, OH.jsx)("span", {
            className: "SkyblockSkillXp",
            children: wb.progress
          })]
        })]
      })
    }

    function Xp(bb) {
      let {
        collection: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)();
      return (0, OH.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, OH.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, OH.jsx)(VH.c, {
            itemName: wb.icon,
            amount: 0
          })
        }), (0, OH.jsx)("h3", {
          children: wb.name
        }), (0, OH.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: wb.tier
        }), (0, OH.jsx)("p", {
          children: wb.locked ? Mb("skyblockGame:collectionLocked") : wb.count
        }), null !== wb.nextReward && (0, OH.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, OH.jsx)("strong", {
            children: Mb("skyblockGame:collectionNextReward")
          }), (0, OH.jsx)("span", {
            children: wb.nextReward
          })]
        }), (0, OH.jsx)(xH, {
          percent: wb.percent,
          label: wb.progress
        }), (0, OH.jsx)("p", {
          children: wb.progress
        })]
      })
    }

    function xp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(FM, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH();
      return Mb.enabled ? (0, OH.jsx)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: eb("skyblockGame:collections")
              }), (0, OH.jsxs)("p", {
                children: [eb("skyblockGame:collectionsIntro"), " ", Mb.tiersUnlocked]
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: wb.dismiss
            })]
          }), (0, OH.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Mb.categories.map((bb => (0, OH.jsxs)(hH.f, {
              className: MH()("SkyblockCollectionCategory", {
                Selected: bb.selected
              }),
              ariaPressed: bb.selected,
              padTabSelected: bb.selected,
              onClick: () => {
                wb.selectCategory(bb.id)
              },
              children: [(0, OH.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, OH.jsx)(VH.c, {
                  itemName: bb.icon,
                  amount: 0
                })
              }), (0, OH.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, OH.jsx)("strong", {
                  children: bb.label
                }), (0, OH.jsx)("span", {
                  children: bb.tiers
                })]
              })]
            }, bb.id)))
          }), (0, OH.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, OH.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Mb.collections.map((bb => (0, OH.jsx)(zp, {
                collection: bb,
                select: wb.select
              }, bb.id)))
            }), Mb.detail && (0, OH.jsx)(Xp, {
              collection: Mb.detail
            })]
          })]
        })
      }) : null
    }
    const jp = ["completed", "active", "available", "locked"],
      Kp = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function rp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(DM, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH();
      return Mb.enabled ? (0, OH.jsx)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: eb("skyblockDevQuests:title")
              }), (0, OH.jsx)("p", {
                children: eb("skyblockDevQuests:intro")
              })]
            }), (0, OH.jsx)(hH.l, {
              onClick: wb.dismiss
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [jp.map((bb => (0, OH.jsx)("span", {
              className: MH()("SkyblockQuestGraphLegendState", bb),
              children: eb(`skyblockDevQuests:state_${bb}`)
            }, bb))), Kp.map((bb => (0, OH.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, OH.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, OH.jsx)("line", {
                  className: MH()("SkyblockQuestGraphEdge", bb),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), eb(`skyblockDevQuests:edge_${bb}`)]
            }, bb)))]
          }), (0, OH.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, OH.jsxs)("div", {
              className: MH()("SkyblockQuestGraphCanvas", {
                Planning: Mb.planning
              }),
              style: {
                width: Mb.width,
                height: Mb.height
              },
              children: [(0, OH.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Mb.width,
                height: Mb.height,
                "aria-hidden": "true",
                children: [(0, OH.jsx)("defs", {
                  children: (0, OH.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, OH.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Mb.edges.map((bb => (0, OH.jsx)("path", {
                  className: MH()("SkyblockQuestGraphEdge", bb.kind, {
                    InPlan: bb.inPlan
                  }),
                  d: bb.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, bb.key)))]
              }), Mb.nodes.map((bb => (0, OH.jsxs)("button", {
                type: "button",
                className: MH()("SkyblockQuestGraphNode", bb.state, {
                  InPlan: bb.inPlan,
                  Hovered: bb.hovered
                }),
                style: {
                  left: bb.left,
                  top: bb.top,
                  width: 190,
                  height: 52
                },
                title: bb.id,
                onMouseEnter: () => {
                  wb.hover(bb.id)
                },
                onMouseLeave: () => {
                  wb.hover(null)
                },
                onFocus: () => {
                  wb.hover(bb.id)
                },
                onBlur: () => {
                  wb.hover(null)
                },
                onClick: () => {
                  wb.jump(bb.id)
                },
                children: [(0, OH.jsx)("strong", {
                  children: bb.name
                }), (0, OH.jsx)("span", {
                  children: bb.detail
                })]
              }, bb.id)))]
            })
          })]
        })
      }) : null
    }
    const Rp = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Dp = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${qM}ms`,
        "--forge-duration": "2150ms"
      },
      cp = Array.from({
        length: 18
      }, ((bb, wb) => ({
        "--ember-left": `${(4+92*(.618034*wb%1)).toFixed(1)}%`,
        "--ember-size": 3 + wb % 3 * 2 + "px",
        "--ember-drift": 14 * (wb % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*wb%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*wb%8).toFixed(2)}s`
      })));

    function Yp(bb) {
      if (bb.style.removeProperty("--part-size"), null === bb.parentElement || "wrap" === getComputedStyle(bb.parentElement).flexWrap) return;
      const wb = [...bb.children],
        Mb = getComputedStyle(bb),
        eb = parseFloat(Mb.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Hb = (bb.clientHeight - parseFloat(Mb.rowGap) * (wb.length - 1)) / wb.length,
        pb = wb.map((bb => {
          const wb = getComputedStyle(bb),
            Mb = bb.querySelector("h3"),
            pb = bb.querySelector(".SkyblockForgeParts");
          if (null === Mb || null === pb) return eb;
          const Vb = Hb - parseFloat(wb.paddingTop) - parseFloat(wb.paddingBottom) - Mb.offsetHeight - parseFloat(getComputedStyle(Mb).marginBottom),
            gb = parseFloat(getComputedStyle(pb).columnGap),
            lb = pb.children.length;
          let Lb = 0;
          for (let eb = 1; eb <= lb; eb++) {
            const bb = Math.ceil(lb / eb);
            Lb = Math.max(Lb, Math.min((pb.clientWidth - gb * (eb - 1)) / eb, (Vb - gb * (bb - 1)) / bb))
          }
          return Lb
        }));
      bb.style.setProperty("--part-size", `${Math.floor(Math.max(eb,Math.min(...pb)))}px`)
    }

    function Zp(bb) {
      var wb, Mb, eb, Hb, pb;
      let {
        controller: Vb
      } = bb;
      const gb = (0, IH.h)(yM, Vb.getSnapshot()),
        {
          t: lb
        } = (0, LH.C)(),
        Lb = XH(),
        Ib = function() {
          const bb = (0, xb.useRef)(null),
            wb = (0, xb.useRef)(null);
          return (0, xb.useLayoutEffect)((() => {
            null !== bb.current && Yp(bb.current)
          })), (0, xb.useCallback)((Mb => {
            var eb;
            null === (eb = wb.current) || void 0 === eb || eb.disconnect(), wb.current = null, bb.current = Mb, null !== Mb && (wb.current = new ResizeObserver((() => {
              Yp(Mb)
            })), wb.current.observe(Mb))
          }), [])
        }(),
        Ub = function(bb) {
          const wb = (0, xb.useRef)(null);
          return (0, xb.useLayoutEffect)((() => {
            const bb = wb.current;
            if (null !== bb) {
              bb.style.removeProperty("font-size");
              for (let wb = 1.7; wb > 1.1 && bb.scrollWidth > bb.clientWidth; wb -= .1) bb.style.fontSize = wb - .1 + "rem"
            }
          }), [bb]), (0, xb.useCallback)((bb => {
            wb.current = bb
          }), [])
        }(null === (wb = gb.preview) || void 0 === wb ? void 0 : wb.name),
        tb = (0, xb.useRef)(null),
        Cb = (0, xb.useRef)({}),
        Eb = gb.forging,
        Fb = null !== (Mb = null === Eb || void 0 === Eb ? void 0 : Eb.preview.tier) && void 0 !== Mb ? Mb : 0,
        Bb = null !== (eb = null === Eb || void 0 === Eb ? void 0 : Eb.preview.named) && void 0 !== eb && eb,
        sb = (0, xb.useMemo)((() => {
          return null === Eb ? null : {
            flames: (bb = Fb, wb = Bb, Array.from({
              length: 26 + 6 * bb + (wb ? 20 : 0)
            }, ((bb, wb) => {
              const Mb = wb < 6,
                eb = Math.random() * Math.PI * 2,
                Hb = Mb ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                pb = Math.cos(eb) * Hb,
                Vb = Math.sin(eb) * Hb - 2 - 3 * Math.random(),
                gb = Math.random(),
                [lb, Lb, Ib] = Mb ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : gb < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : gb < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [gb < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": lb,
                "--x0": `${(.15*pb).toFixed(2)}rem`,
                "--y0": `${(.15*Vb).toFixed(2)}rem`,
                "--x": `${pb.toFixed(2)}rem`,
                "--y": `${Vb.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Lb.toFixed(2)}rem`,
                "--duration": `${Math.round(Ib)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: uM(Fb, Bb)
          };
          var bb, wb
        }), [null === Eb || void 0 === Eb ? void 0 : Eb.id]);
      if (!gb.enabled) return null;
      const mb = gb.preview,
        hb = gb.arriving,
        zb = null !== hb && !hb.sameSword,
        Xb = null !== mb && (0, OH.jsx)(VH.c, {
          itemName: mb.baseSword,
          amount: 0,
          enchantmentTier: mb.enchantmentTier
        });
      return (0, OH.jsx)(mH.e, {
        show: gb.open,
        close: Vb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Lb,
          onKeyDown: zH,
          children: [(0, OH.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: cp.map(((bb, wb) => (0, OH.jsx)("span", {
              style: bb
            }, wb)))
          }), (0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: lb("skyblockGame:forgeTitle")
              }), (0, OH.jsx)("p", {
                children: lb("skyblockGame:forgeIntro")
              })]
            }), (0, OH.jsx)(hH.l, {
              onClick: Vb.dismiss
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, OH.jsx)("div", {
              ref: Ib,
              className: MH()("SkyblockForgeSlots", {
                Locked: null !== Eb
              }),
              children: gb.slots.map((bb => (0, OH.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, OH.jsx)("h3", {
                  children: bb.label
                }), (0, OH.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: bb.parts.map((wb => (0, OH.jsx)("button", {
                    type: "button",
                    className: MH()("SkyblockForgePart", {
                      Selected: wb.selected,
                      Missing: wb.placeholder
                    }),
                    disabled: wb.placeholder,
                    title: wb.placeholder ? lb("skyblockGame:forgePickParts") : wb.itemName,
                    "aria-pressed": wb.selected,
                    onClick: () => {
                      Vb.select(bb.kind, wb.material)
                    },
                    children: (0, OH.jsx)(VH.c, {
                      itemName: wb.itemName,
                      amount: wb.owned
                    })
                  }, wb.material)))
                })]
              }, bb.kind)))
            }), (0, OH.jsxs)("div", {
              className: MH()("SkyblockForgeAnvil", {
                Named: null === mb || void 0 === mb ? void 0 : mb.named
              }),
              style: {
                "--tier": null === mb ? "transparent" : Ob.xb[mb.enchantmentTier]
              },
              children: [(0, OH.jsxs)("div", {
                className: MH()("SkyblockForgeAltar", {
                  Forging: null !== Eb
                }),
                style: null === Eb ? void 0 : Dp,
                children: [(0, OH.jsxs)("div", {
                  className: MH()("SkyblockForgeMount", {
                    Arrive: null !== hb
                  }),
                  children: [null === mb && (0, OH.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, OH.jsx)(VH.c, {
                      itemName: gb.unformedSword,
                      amount: 0
                    })
                  }), null !== mb && (0, OH.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== mb && null === Eb && (0, OH.jsx)("div", {
                    ref: tb,
                    className: "SkyblockForgeFloat",
                    children: (0, OH.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Xb
                    })
                  }), null !== mb && (0, OH.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: iM.map(((bb, wb) => (0, OH.jsx)("span", {
                      className: MH()({
                        Rune: "" !== bb.rune
                      }),
                      style: bb.style,
                      children: bb.rune
                    }, wb)))
                  }), null !== Eb && null !== sb && (0, OH.jsxs)(OH.Fragment, {
                    children: [(0, OH.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: sb.flames.map(((bb, wb) => (0, OH.jsx)("span", {
                        style: bb
                      }, wb)))
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Cb.current,
                      children: (0, OH.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Xb
                      })
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Fb >= 4 || Bb) && (0, OH.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: sb.sparks.map(((bb, wb) => (0, OH.jsx)("span", {
                        style: bb
                      }, wb)))
                    }), (0, OH.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, OH.jsx)("p", {
                  className: MH()("SkyblockForgeStatus", null === (Hb = gb.status) || void 0 === Hb ? void 0 : Hb.tone),
                  children: null === (pb = gb.status) || void 0 === pb ? void 0 : pb.text
                })]
              }), null === mb && (0, OH.jsx)("p", {
                className: MH()("SkyblockForgeName Waiting", {
                  ArriveText: zb
                }),
                children: lb(gb.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== mb && (0, OH.jsx)("h3", {
                ref: Ub,
                className: MH()("SkyblockForgeName", {
                  ArriveText: zb
                }),
                title: mb.name,
                children: mb.name
              }), (null === mb || void 0 === mb ? void 0 : mb.named) && (0, OH.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: lb("skyblockGame:forgeSecret")
              }), (0, OH.jsxs)(hH.u, {
                className: "SkyblockForgeButton",
                disabled: !gb.canForge,
                title: null === mb ? void 0 : lb("skyblockGame:forgeCoalOwned", {
                  owned: String(gb.coalOwned)
                }),
                onClick: () => {
                  Cb.current = function(bb) {
                    const wb = null === bb ? "none" : getComputedStyle(bb).transform,
                      Mb = new DOMMatrixReadOnly("none" === wb ? void 0 : wb);
                    return {
                      "--settle-y": `${Mb.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Mb.b,Mb.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(tb.current), nM(), Vb.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [lb("skyblockGame:forgeButton"), null !== mb && (0, OH.jsxs)("span", {
                  className: MH()("SkyblockForgeCost", {
                    Short: mb.coalShort
                  }),
                  children: [(0, OH.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, OH.jsx)(VH.c, {
                      itemName: AM.e,
                      amount: 0
                    })
                  }), mb.coalCost]
                })]
              })]
            }), (0, OH.jsxs)("div", {
              className: MH()("SkyblockForgeDetails", {
                Named: null === mb || void 0 === mb ? void 0 : mb.named
              }),
              children: [(0, OH.jsx)("p", {
                className: MH()("SkyblockForgeLore", {
                  ArriveText: zb
                }),
                title: null === mb || void 0 === mb ? void 0 : mb.lore,
                children: null === mb || void 0 === mb ? void 0 : mb.lore
              }), (0, OH.jsxs)("dl", {
                className: MH()("SkyblockForgeStats", {
                  ArriveText: zb
                }),
                children: [null === mb && Rp.map((bb => (0, OH.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, OH.jsx)("dt", {
                    children: lb(bb)
                  }), (0, OH.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, bb))), null === mb || void 0 === mb ? void 0 : mb.stats.map((bb => (0, OH.jsxs)("div", {
                  className: MH()("SkyblockForgeStat", {
                    Better: bb.better
                  }),
                  children: [(0, OH.jsx)("dt", {
                    children: bb.label
                  }), (0, OH.jsx)("dd", {
                    children: bb.value
                  })]
                }, bb.label)))]
              }), (0, OH.jsx)("ul", {
                className: MH()("SkyblockForgeEffects", {
                  ArriveText: zb
                }),
                children: null === mb || void 0 === mb ? void 0 : mb.effects.map((bb => (0, OH.jsx)("li", {
                  children: bb
                }, bb)))
              })]
            })]
          })]
        })
      })
    }
    var fp = Mb(39934);
    const Ap = "Doom Rivet",
      Wp = "Doom Crest",
      Jp = {
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

    function Sp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(kM, wb.getSnapshot()),
        eb = XH();
      return Mb.enabled ? (0, OH.jsx)(fp.e, {
        keys: Jp,
        open: Mb.open,
        onDismiss: wb.dismiss,
        wallet: [{
          itemName: Ap,
          amount: Mb.rivetsOwned
        }, {
          itemName: Wp,
          amount: Mb.crestsOwned
        }],
        deals: Mb.deals.map((bb => ({
          ...bb,
          prices: [{
            itemName: Ap,
            amount: bb.rivets,
            owned: Mb.rivetsOwned
          }, {
            itemName: Wp,
            amount: bb.crests,
            owned: Mb.crestsOwned
          }].filter((bb => {
            let {
              amount: wb
            } = bb;
            return wb > 0
          }))
        }))),
        rotatesAtMs: Mb.rotatesAtMs,
        status: Mb.status,
        pending: Mb.pending,
        boughtCount: Mb.boughtCount,
        onBuy: wb.buy,
        panelRef: eb,
        onKeyDown: zH
      }) : null
    }

    function Np(bb) {
      let {
        phase: wb,
        className: Mb
      } = bb;
      return (0, OH.jsx)("span", {
        className: MH()("SkyblockMoon", `Moon-${wb}`, Mb),
        "aria-hidden": "true"
      })
    }

    function vp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(Me, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)();
      return Mb.enabled ? (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: MH()("SkyblockPassageChip", Mb.open && "Open"),
          "aria-label": eb("skyblockGame:passageChipLabel", {
            phase: Mb.phaseName
          }),
          title: eb("skyblockGame:passageChipLabel", {
            phase: Mb.phaseName
          }),
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: wb.toggle,
          children: (0, OH.jsx)(Np, {
            phase: Mb.phase
          }, Mb.phase)
        })
      }) : null
    }

    function Qp(bb) {
      let {
        fish: wb
      } = bb;
      return (0, OH.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, OH.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, OH.jsx)(VH.c, {
            itemName: wb.itemName,
            amount: 0
          })
        }), (0, OH.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: wb.displayName
          }), (0, OH.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: wb.where
          })]
        })]
      })
    }

    function Gp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(Me, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH();
      return Mb.enabled ? (0, OH.jsx)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, OH.jsx)(Np, {
              phase: Mb.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: eb("skyblockGame:passageTitle")
              }), (0, OH.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Mb.phaseName
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: wb.dismiss
            })]
          }), (0, OH.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: eb("skyblockGame:passageIntro")
          }), (0, OH.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, OH.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, OH.jsx)("h3", {
                children: eb("skyblockGame:passageVisiting")
              }), (0, OH.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Mb.visitors.map((bb => (0, OH.jsx)(Qp, {
                  fish: bb
                }, bb.itemName)))
              })]
            }), (0, OH.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Mb.resting && (0, OH.jsxs)(OH.Fragment, {
                children: [(0, OH.jsx)("h3", {
                  children: eb("skyblockGame:passageResting")
                }), (0, OH.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, OH.jsx)(Qp, {
                    fish: Mb.resting
                  })
                })]
              }), (0, OH.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, OH.jsx)(Np, {
                  phase: Mb.nextPhase
                }), (0, OH.jsx)("span", {
                  children: Mb.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function qp() {
      return (0, OH.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((bb => (0, OH.jsx)("i", {
          style: {
            "--sparkle-index": bb
          }
        }, bb)))
      })
    }

    function ap(bb) {
      var wb;
      let {
        charm: Mb,
        view: eb,
        controller: Hb
      } = bb;
      const {
        t: pb
      } = (0, LH.C)(), Vb = eb.shop, gb = (null === (wb = eb.sparkle) || void 0 === wb ? void 0 : wb.id) === Mb.id;
      return (0, OH.jsxs)("li", {
        className: MH()("SkyblockLampLightCharm", Mb.owned && "Owned", Mb.socketed && "Socketed"),
        children: [gb && (0, OH.jsx)(qp, {}, eb.sparkle.count), (0, OH.jsx)("h4", {
          children: Mb.name
        }), (0, OH.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Mb.effect
        }), (0, OH.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Mb.lines.map((bb => (0, OH.jsxs)("li", {
            className: MH()("SkyblockLampLightOddsLine", "better" === bb.tone ? "Better" : "worse" === bb.tone ? "Worse" : "Same"),
            children: [(0, OH.jsx)("span", {
              className: "Before",
              children: bb.before
            }), (0, OH.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, OH.jsx)("span", {
              className: "After",
              children: bb.after
            })]
          }, bb.label)))
        }), (0, OH.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Mb.owned ? Mb.socketed ? (0, OH.jsxs)(OH.Fragment, {
            children: [(0, OH.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: pb("skyblockGame:lampLightSocketed")
            }), (0, OH.jsx)(hH.Y, {
              disabled: !eb.canCommand,
              ariaLabel: pb("skyblockGame:lampLightRemoveLabel", {
                charm: Mb.name
              }),
              onClick: () => {
                Hb.socket(null)
              },
              children: pb("skyblockGame:lampLightRemove")
            })]
          }) : (0, OH.jsx)(hH.f, {
            disabled: !eb.canCommand || !Vb.heldRod,
            ariaLabel: pb("skyblockGame:lampLightSocketLabel", {
              charm: Mb.name
            }),
            onClick: () => {
              Hb.socket(Mb.id)
            },
            children: pb("skyblockGame:lampLightSocket")
          }) : (0, OH.jsx)(hH.f, {
            disabled: !eb.canCommand || !Mb.affordable,
            ariaLabel: pb("skyblockGame:lampLightBuyLabel", {
              item: Mb.name,
              cost: Mb.cost
            }),
            onClick: () => {
              Hb.buy(Mb.id)
            },
            children: Mb.cost
          })
        })]
      })
    }

    function ip(bb) {
      var wb;
      let {
        tint: Mb,
        view: eb,
        controller: Hb
      } = bb;
      const {
        t: pb
      } = (0, LH.C)();
      return (0, OH.jsxs)("li", {
        className: MH()("SkyblockLampLightTint", Mb.wearing && "Wearing"),
        style: {
          "--tint-colour": Mb.colour
        },
        children: [(null === (wb = eb.sparkle) || void 0 === wb ? void 0 : wb.id) === Mb.id && (0, OH.jsx)(qp, {}, eb.sparkle.count), (0, OH.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, OH.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Mb.name
        }), Mb.wearing ? (0, OH.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: pb("skyblockGame:lampLightWearing")
        }) : (0, OH.jsx)(hH.f, {
          disabled: !eb.canCommand || !Mb.owned && !Mb.affordable,
          ariaLabel: Mb.owned ? pb("skyblockGame:lampLightWearLabel", {
            tint: Mb.name
          }) : pb("skyblockGame:lampLightBuyLabel", {
            item: Mb.name,
            cost: Mb.cost
          }),
          onClick: () => {
            Mb.owned ? Hb.wearTint(Mb.id) : Hb.buy(Mb.id)
          },
          children: Mb.owned ? pb("skyblockGame:lampLightWear") : Mb.cost
        })]
      })
    }

    function dp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(Fe, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = Mb.shop;
      return (0, OH.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, OH.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Mb.balance
          }), (0, OH.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Mb.releasing,
            className: MH()("SkyblockLampLightSwitch", Mb.releasing && "On"),
            disabled: Mb.releasing ? "ready" !== Mb.status : !Mb.canCommand,
            onClick: () => {
              wb.setRelease(!Mb.releasing)
            },
            children: [(0, OH.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, OH.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), eb("skyblockGame:lampLightRelease")]
          }), (0, OH.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: eb("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Mb.notice && (0, OH.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Mb.notice
        }), null !== Hb && (0, OH.jsxs)(OH.Fragment, {
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, OH.jsx)("h3", {
              children: eb("skyblockGame:lampLightCharms")
            }), (0, OH.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Hb.oddsFor
            }), (0, OH.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((bb => (0, OH.jsx)("button", {
                type: "button",
                "aria-pressed": Mb.situation === bb,
                className: MH()("SkyblockLampLightSituation", Mb.situation === bb && "Selected"),
                onClick: () => {
                  wb.setSituation(bb)
                },
                children: eb("open" === bb ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, bb)))
            })]
          }), !Hb.heldRod && (0, OH.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: eb("skyblockGame:lampLightHoldRod")
          }), (0, OH.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Hb.charms.map((bb => (0, OH.jsx)(ap, {
              charm: bb,
              view: Mb,
              controller: wb
            }, bb.id)))
          }), (0, OH.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, OH.jsx)("h3", {
              children: eb("skyblockGame:lampLightTints")
            })
          }), (0, OH.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, OH.jsxs)("li", {
              className: MH()("SkyblockLampLightTint", "Islands", Hb.wearingIslandColours && "Wearing"),
              children: [(0, OH.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, OH.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: eb("skyblockGame:lampLightIslandColours")
              }), Hb.wearingIslandColours ? (0, OH.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: eb("skyblockGame:lampLightWearing")
              }) : (0, OH.jsx)(hH.f, {
                disabled: !Mb.canCommand,
                ariaLabel: eb("skyblockGame:lampLightWearLabel", {
                  tint: eb("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  wb.wearTint(null)
                },
                children: eb("skyblockGame:lampLightWear")
              })]
            }), Hb.tints.map((bb => (0, OH.jsx)(ip, {
              tint: bb,
              view: Mb,
              controller: wb
            }, bb.id)))]
          })]
        })]
      })
    }

    function Pp(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(Fe, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)();
      return Mb.releasing ? (0, OH.jsx)(HH.d, {
        children: (0, OH.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            wb.setRelease(!1)
          },
          children: [(0, OH.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, OH.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [eb("skyblockGame:lampLightReleasing"), " \xb7 ", Mb.balance]
          }), (0, OH.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: eb("skyblockGame:lampLightKeepCatches")
          }), null !== Mb.gained && (0, OH.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Mb.gained.text
          }, Mb.gained.count)]
        })
      }) : null
    }

    function np(bb) {
      let {
        island: wb,
        view: Mb,
        aim: eb
      } = bb;
      const {
        t: Hb
      } = (0, LH.C)(), pb = wb.featuredFish;
      return (0, OH.jsxs)("li", {
        className: MH()("SkyblockKeepersChairIsland", `Island-${wb.id}`, wb.favoured && "Aimed", !wb.relit && "Dark"),
        children: [(0, OH.jsx)("h3", {
          children: wb.name
        }), wb.relit && null !== pb ? (0, OH.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Hb("skyblockGame:keepersChairTideNotice")
          }), (0, OH.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, OH.jsx)(VH.c, {
              itemName: pb.itemName,
              amount: 0
            })
          }), (0, OH.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: pb.displayName
          })]
        }) : (0, OH.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, OH.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Hb("skyblockGame:keepersChairDark")
          })
        }), wb.relit && (wb.favoured ? (0, OH.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Hb("skyblockGame:keepersChairAimed")
        }) : (0, OH.jsx)(hH.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !Mb.canAim,
          ariaLabel: Hb("skyblockGame:keepersChairAimLabel", {
            island: wb.name
          }),
          onClick: () => {
            eb(wb.id)
          },
          children: Hb("skyblockGame:keepersChairAim")
        }))]
      }, wb.favoured ? Mb.aimedCount : 0)
    }

    function yp(bb) {
      let {
        controller: wb,
        lampLight: Mb
      } = bb;
      const eb = (0, IH.h)(le, wb.getSnapshot()),
        Hb = (0, IH.h)(Fe, Mb.getSnapshot()),
        [pb, Vb] = (0, xb.useState)("lamp"),
        {
          t: gb
        } = (0, LH.C)(),
        lb = XH();
      if (!eb.enabled) return null;
      const Lb = "light" === pb && Hb.enabled;
      return (0, OH.jsx)(mH.e, {
        show: eb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: MH()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Lb && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: lb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: gb("skyblockGame:keepersChairTitle")
              }), (0, OH.jsx)("p", {
                children: gb(Lb ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              ariaLabel: gb("skyblockGame:keepersChairClose"),
              onClick: wb.dismiss
            })]
          }), Hb.enabled && (0, OH.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((bb => (0, OH.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === bb === Lb,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === bb === Lb ? "true" : void 0,
              className: MH()("SkyblockKeepersChairTab", "light" === bb === Lb && "Selected"),
              onClick: () => {
                Vb(bb)
              },
              children: [gb("lamp" === bb ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === bb && (0, OH.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Hb.balance
              })]
            }, bb)))
          }), Lb ? (0, OH.jsx)(dp, {
            controller: Mb
          }) : (0, OH.jsx)(op, {
            view: eb,
            controller: wb
          })]
        })
      })
    }

    function op(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)();
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: wb.islands.map((bb => (0, OH.jsx)(np, {
            island: bb,
            view: wb,
            aim: Mb.aim
          }, bb.id)))
        }), null !== wb.almanac && (0, OH.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: eb("skyblockGame:passageTitle")
          }), (0, OH.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, OH.jsx)(Np, {
              phase: wb.almanac.phase
            }), wb.almanac.phaseName]
          }), (0, OH.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, OH.jsx)(Np, {
              phase: wb.almanac.nextPhase
            }), wb.almanac.next]
          })]
        }), (0, OH.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: eb("skyblockGame:keepersChairFavour")
          }), wb.aimed && (0, OH.jsx)(hH.Y, {
            className: "SkyblockKeepersChairRest",
            disabled: !wb.canAim,
            onClick: () => {
              Mb.aim(null)
            },
            children: eb("skyblockGame:keepersChairRest")
          })]
        }), null !== wb.status && (0, OH.jsx)("p", {
          className: MH()("SkyblockKeepersChairStatus", "refused" === wb.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: wb.status.text
        })]
      })
    }

    function Tp(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(Ie, wb.getSnapshot());
      if (!eb.enabled) return null;
      const Hb = eb.freshCount > 0 ? Mb("skyblockGame:reachLogOpenNews", {
        count: eb.freshCount
      }) : Mb("skyblockGame:reachLogOpen");
      return (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsxs)("button", {
          type: "button",
          className: MH()("SkyblockReachLogButton", eb.freshCount > 0 && "HasNews", eb.pending && "Pending"),
          "aria-label": Hb,
          title: Hb,
          onClick: wb.ask,
          children: [eb.news && (0, OH.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${eb.newsToken}`), (0, OH.jsx)("span", {
            className: MH()("SkyblockReachLogIcon", eb.news && "Jump"),
            "aria-hidden": "true",
            children: (0, OH.jsx)(VH.c, {
              itemName: Ue,
              amount: 0
            })
          }, `icon:${eb.newsToken}`), eb.freshCount > 0 && (0, OH.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: eb.freshCount
          })]
        })
      })
    }

    function kp(bb) {
      let {
        gift: wb
      } = bb;
      return (0, OH.jsx)("li", {
        className: MH()("SkyblockRegularsGift", wb.given && "Given"),
        children: wb.text
      })
    }

    function bV(bb) {
      let {
        regular: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)();
      return (0, OH.jsxs)("li", {
        className: MH()("SkyblockRegularsCard", wb.tagged ? "Tagged" : "Untagged", wb.resting && "Resting"),
        children: [(0, OH.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: wb.fishName,
            children: (0, OH.jsx)(VH.c, {
              itemName: wb.itemName,
              amount: 0
            })
          }), (0, OH.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, OH.jsx)("h3", {
              children: wb.name
            }), (0, OH.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: wb.fishName
            })]
          })]
        }), (0, OH.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: wb.line
        }), (0, OH.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: wb.size
          }), wb.tagged && (0, OH.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: wb.resting ? Mb("skyblockGame:regularsResting") : wb.meetings
          })]
        }), (0, OH.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: wb.chance
        }), (0, OH.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: wb.gifts.map((bb => (0, OH.jsx)(kp, {
            gift: bb
          }, bb.text)))
        }), wb.history.length > 0 && (0, OH.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: wb.history.map(((bb, wb) => (0, OH.jsx)("li", {
            children: bb
          }, wb)))
        })]
      })
    }

    function wV(bb) {
      let {
        controller: wb,
        island: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)(), Hb = (0, IH.h)(We, wb.getSnapshot()), pb = Hb.islands.find((bb => bb.id === Mb));
      if (!Hb.enabled || void 0 === pb) return null;
      const Vb = eb("skyblockGame:regularsOpen");
      return (0, OH.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Vb,
        title: Vb,
        onClick: () => {
          wb.openIsland(Mb)
        },
        children: [(0, OH.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: eb("skyblockGame:regularsTitle")
        }), pb.regulars.map((bb => (0, OH.jsx)("span", {
          className: MH()("SkyblockRegularsStripIcon", bb.tagged && "Tagged"),
          title: bb.name,
          children: (0, OH.jsx)(VH.c, {
            itemName: bb.itemName,
            amount: 0
          })
        }, bb.id)))]
      })
    }

    function MV(bb) {
      var wb;
      let {
        controller: Mb
      } = bb;
      const eb = (0, IH.h)(We, Mb.getSnapshot()),
        {
          t: Hb
        } = (0, LH.C)(),
        pb = XH();
      if (!eb.enabled) return null;
      const Vb = null !== (wb = eb.islands.find((bb => bb.id === eb.selected))) && void 0 !== wb ? wb : null;
      return (0, OH.jsx)(mH.e, {
        show: eb.open,
        close: Mb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: pb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Hb("skyblockGame:regularsTitle")
              }), (0, OH.jsx)("p", {
                children: Hb("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: Mb.dismiss
            })]
          }), (0, OH.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: eb.islands.map((bb => {
              const wb = bb.id === eb.selected;
              return (0, OH.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": wb,
                "data-pad-tab": !0,
                "data-pad-selected": wb ? "true" : void 0,
                className: MH()("SkyblockReachLogTab", `Island-${bb.id}`, wb && "Selected", bb.charm.given && "GoldPage"),
                onClick: () => {
                  Mb.selectIsland(bb.id)
                },
                children: (0, OH.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                })
              }, bb.id)
            }))
          }), (0, OH.jsxs)("div", {
            className: MH()("SkyblockRegularsPage", null !== Vb && `Island-${Vb.id}`),
            role: "tabpanel",
            children: [(0, OH.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Hb("skyblockGame:regularsHow")
            }), null !== Vb && (0, OH.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Vb.regulars.map((bb => (0, OH.jsx)(bV, {
                regular: bb
              }, bb.id)))
            })]
          }), null !== Vb && (0, OH.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, OH.jsx)("span", {
              className: MH()("SkyblockRegularsCharm", Vb.charm.given && "Given"),
              children: Vb.charm.text
            })
          })]
        })
      })
    }
    const eV = [{
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
      HV = Array.from({
        length: 6
      }, ((bb, wb) => ({
        "--x": `${(88*(.618034*wb%1)).toFixed(1)}%`,
        "--y": `${(10+37*wb%70).toFixed(1)}%`,
        "--size": 7 + wb % 3 * 3 + "rem",
        "--drift-x": 3 * (wb % 3 - 1) + "rem",
        "--drift-y": 2 * (wb % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + wb % 4 * 3 + "s",
        "--delay": 2.5 * -wb + "s"
      }))),
      pV = Array.from({
        length: 14
      }, ((bb, wb) => ({
        "--left": `${(3+94*((.618034*wb+.3)%1)).toFixed(1)}%`,
        "--size": 4 + wb % 4 * 2 + "px",
        "--sway": wb % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*wb%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*wb%12).toFixed(2)}s`
      }))),
      VV = (0, xb.memo)((function(bb) {
        let {
          island: wb
        } = bb;
        return (0, OH.jsxs)("div", {
          className: MH()("SkyblockReachLogDepths", null !== wb && `Island-${wb}`),
          "aria-hidden": "true",
          children: [eV.map(((bb, wb) => (0, OH.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: bb
          }, `shaft${wb}`))), HV.map(((bb, wb) => (0, OH.jsx)("span", {
            className: MH()("SkyblockReachLogMote", wb % 2 === 1 && "Violet"),
            style: bb
          }, `mote${wb}`))), pV.map(((bb, wb) => (0, OH.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: bb
          }, `bubble${wb}`)))]
        })
      })),
      gV = 100;

    function lV(bb) {
      let {
        view: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)();
      if (null === wb || 0 === wb.total) return null;
      const eb = gV * wb.aspect,
        Hb = Mb("skyblockGame:hiddenWatersCount", {
          found: wb.found,
          total: wb.total
        });
      return (0, OH.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Mb("skyblockGame:hiddenWatersTitle")}: ${Hb}`,
        children: [(0, OH.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${eb}`,
          "aria-hidden": "true",
          children: [wb.islands.map(((bb, wb) => (0, OH.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (bb.left + bb.width / 2) * gV,
            cy: (bb.top + bb.height / 2) * eb,
            rx: bb.width / 2 * gV,
            ry: bb.height / 2 * eb
          }, wb))), wb.pins.map(((bb, wb) => (0, OH.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: bb.left * gV,
            cy: bb.top * eb,
            r: 13
          }, wb)))]
        }), (0, OH.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, OH.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Mb("skyblockGame:hiddenWatersTitle")
          }), (0, OH.jsx)("span", {
            className: wb.found === wb.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Hb
          })]
        })]
      })
    }

    function LV(bb) {
      let {
        view: wb,
        island: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)(), Hb = null === wb || void 0 === wb ? void 0 : wb.glimpses.get(Mb);
      return void 0 === Hb || 0 === Hb.length ? null : (0, OH.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, OH.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: eb("skyblockGame:hiddenWatersGlimpsed")
        }), (0, OH.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Hb.map((bb => (0, OH.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, OH.jsx)(VH.c, {
              itemName: bb,
              amount: 0
            })
          }, bb)))
        })]
      })
    }
    const IV = ["Bronze", "Silver", "Gold"],
      OV = [{
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
      UV = OV.slice(0, 2);

    function tV(bb) {
      return bb ? OV : UV
    }

    function CV(bb) {
      let {
        fish: wb,
        letGoShown: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)();
      return (0, OH.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [IV.map(((bb, Mb) => {
          const Hb = Mb < wb.marks;
          return (0, OH.jsx)("span", {
            className: MH()("SkyblockReachLogPip", bb, Hb && "Earned", Hb && wb.fresh && Mb === wb.marks - 1 && "Newest"),
            title: eb(Oe[Mb])
          }, bb)
        })), (0, OH.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), tV(Mb).map(((bb, Mb) => (0, OH.jsx)("span", {
          className: MH()("SkyblockReachLogRibbon", bb.className, !0 === wb.ribbons[Mb] && "Earned"),
          title: eb(bb.titleKey)
        }, bb.className)))]
      })
    }

    function EV(bb) {
      let {
        letGoShown: wb,
        haloShown: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)();
      return (0, OH.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, OH.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: eb("skyblockGame:reachLogMarks"),
          children: [(0, OH.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), eb("skyblockGame:reachLogLegendMarks")]
        }), tV(wb).map((bb => (0, OH.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: eb(bb.titleKey),
          children: [(0, OH.jsx)("span", {
            className: MH()("SkyblockReachLogRibbon", bb.className, "Earned")
          }), eb(bb.legendKey)]
        }, bb.className))), (0, OH.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: eb("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, OH.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), eb("skyblockGame:reachLogLegendGlimmer")]
        }), Mb && (0, OH.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: eb("skyblockGame:reachLogHaloTitle"),
          children: [(0, OH.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), eb("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function FV(bb) {
      let {
        returner: wb
      } = bb;
      return (0, OH.jsxs)("div", {
        className: MH()("SkyblockReachLogReturner", wb.back && "Back"),
        children: [(0, OH.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, OH.jsx)(VH.c, {
            itemName: wb.itemName,
            amount: 0
          })
        }), (0, OH.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: wb.line
        })]
      })
    }

    function BV(bb) {
      let {
        fish: wb,
        letGoShown: Mb
      } = bb;
      const {
        t: eb
      } = (0, LH.C)();
      return (0, OH.jsxs)("li", {
        className: MH()("SkyblockReachLogCard", wb.caught ? "Caught" : "Unknown", wb.marks >= 3 && "GoldCard", wb.fresh && "Fresh", wb.visitor && "Visitor"),
        children: [wb.visitor && (0, OH.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: eb("skyblockGame:reachLogVisitor")
        }), wb.fresh && Array.from({
          length: 4
        }, ((bb, wb) => (0, OH.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, wb))), (0, OH.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [wb.halo && (0, OH.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: eb("skyblockGame:reachLogHaloTitle")
          }), (0, OH.jsx)(VH.c, {
            itemName: wb.itemName,
            amount: 0
          }), wb.glimmer && (0, OH.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: eb("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, OH.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: wb.name
        }), (0, OH.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: wb.chance
        }), (0, OH.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: wb.best
        }), (0, OH.jsx)(CV, {
          fish: wb,
          letGoShown: Mb
        })]
      })
    }

    function sV(bb) {
      let {
        page: wb,
        letGoShown: Mb,
        hiddenWaters: eb
      } = bb;
      const {
        t: Hb
      } = (0, LH.C)();
      return wb.awake ? (0, OH.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: wb.fish.map((bb => (0, OH.jsx)(BV, {
          fish: bb,
          letGoShown: Mb
        }, bb.itemName)))
      }) : (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Hb("skyblockGame:reachLogAsleep")
        }), (0, OH.jsx)(LV, {
          view: eb,
          island: wb.id
        })]
      })
    }

    function mV(bb) {
      var wb, Mb;
      let {
        controller: eb,
        regulars: Hb,
        hiddenWaters: pb
      } = bb;
      const Vb = (0, IH.h)(Ie, eb.getSnapshot()),
        gb = function(bb) {
          return (0, IH.h)(Qe, bb.getSnapshot())
        }(pb),
        lb = (0, IH.h)(We, Hb.getSnapshot()),
        {
          t: Lb
        } = (0, LH.C)(),
        Ib = XH();
      if (!Vb.enabled) return null;
      const Ob = null !== (wb = Vb.pages.find((bb => bb.id === Vb.selected))) && void 0 !== wb ? wb : null;
      return (0, OH.jsx)(mH.e, {
        show: Vb.open,
        close: eb.dismiss,
        togglePointerLock: !1,
        className: MH()("SkyblockSkillsOverlay", lb.open && "SkyblockReachLogUnderLedger"),
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Ib,
          onKeyDown: zH,
          children: [(0, OH.jsx)(VV, {
            island: null !== (Mb = null === Ob || void 0 === Ob ? void 0 : Ob.id) && void 0 !== Mb ? Mb : null
          }), (0, OH.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Lb("skyblockGame:reachLogTitle")
              }), (0, OH.jsx)("p", {
                children: Lb("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, OH.jsx)(lV, {
              view: gb
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: eb.dismiss
            })]
          }), (0, OH.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Vb.pages.map((bb => {
              const wb = bb.id === Vb.selected,
                Mb = bb.fish.some((bb => bb.fresh));
              return (0, OH.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": wb,
                "data-pad-tab": !0,
                "data-pad-selected": wb ? "true" : void 0,
                className: MH()("SkyblockReachLogTab", `Island-${bb.id}`, wb && "Selected", !bb.awake && "Asleep", bb.gold && "GoldPage", Mb && "HasNews"),
                onClick: () => {
                  eb.selectPage(bb.id)
                },
                children: [(0, OH.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                }), bb.awake && (0, OH.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Lb("skyblockGame:reachLogCaughtCount", {
                    caught: bb.caught,
                    total: bb.total
                  })
                })]
              }, bb.id)
            }))
          }), (0, OH.jsxs)("div", {
            className: MH()("SkyblockReachLogPage", null !== Ob && `Island-${Ob.id}`),
            role: "tabpanel",
            children: [null !== Ob && (0, OH.jsx)(sV, {
              page: Ob,
              letGoShown: Vb.letGoShown,
              hiddenWaters: gb
            }), !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.awake) && null !== Ob.returner && (0, OH.jsx)(FV, {
              returner: Ob.returner
            }), !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.awake) && (0, OH.jsx)(wV, {
              controller: Hb,
              island: Ob.id
            })]
          }), (0, OH.jsx)("footer", {
            className: MH()("SkyblockReachLogFooter", null !== Ob && `Island-${Ob.id}`, !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.gold) && "GoldPage"),
            children: !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.gold) ? (0, OH.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Lb("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, OH.jsxs)(OH.Fragment, {
              children: [(0, OH.jsx)(EV, {
                letGoShown: Vb.letGoShown,
                haloShown: !0 === (null === Ob || void 0 === Ob ? void 0 : Ob.fish.some((bb => bb.halo)))
              }), (0, OH.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Lb("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var hV = Mb(5730);

    function zV(bb) {
      let {
        conversation: wb,
        completedLabel: Mb
      } = bb;
      return (0, OH.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, OH.jsxs)("header", {
          children: [(0, OH.jsx)("h3", {
            children: wb.questName
          }), wb.completed && (0, OH.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Mb
          })]
        }), wb.lines.map((bb => (0, OH.jsx)(hV.d, {
          display: bb.display
        }, bb.key)))]
      })
    }

    function XV(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(qe, wb.getSnapshot()), Hb = XH();
      if (!eb.enabled) return null;
      const pb = !eb.loading && 0 === eb.conversations.length;
      return (0, OH.jsx)(mH.e, {
        show: eb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Mb("skyblockDialogue:title")
              }), (0, OH.jsx)("p", {
                children: Mb("skyblockDialogue:intro")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: wb.dismiss
            })]
          }), (0, OH.jsxs)("div", {
            className: MH()("SkyblockDialogueBody", {
              SingleColumn: null !== eb.questFocus || 0 === eb.characters.length
            }),
            children: [null === eb.questFocus && eb.characters.length > 0 && (0, OH.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: eb.characters.map((bb => (0, OH.jsx)(hH.f, {
                className: MH()("SkyblockDialogueCharacter", {
                  Selected: bb.selected
                }),
                onClick: () => {
                  wb.selectCharacter(bb.id)
                },
                children: (0, OH.jsx)(gH.d, {
                  text: bb.styling
                })
              }, bb.id)))
            }), (0, OH.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== eb.questFocus && (0, OH.jsx)(hH.f, {
                className: "SkyblockDialogueBack",
                onClick: wb.showCharacters,
                children: Mb("skyblockDialogue:allCharacters")
              }), eb.loading && (0, OH.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Mb("skyblockDialogue:loading")
              }), pb && (0, OH.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Mb(null === eb.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), eb.conversations.map((bb => (0, OH.jsx)(zV, {
                conversation: bb,
                completedLabel: eb.completedLabel
              }, bb.questId)))]
            })]
          })]
        })
      })
    }

    function xV(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(Pe, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH();
      return Mb.enabled ? (0, OH.jsx)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: eb("skyblockGame:autographBook")
              }), (0, OH.jsx)("p", {
                children: eb("skyblockGame:autographBookIntro")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              onClick: wb.dismiss
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, OH.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, OH.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, OH.jsx)("strong", {
                  children: Mb.total
                }), (0, OH.jsx)("span", {
                  children: eb("skyblockGame:autographTotal")
                })]
              }), (0, OH.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, OH.jsx)("strong", {
                  children: Mb.rankTotal
                }), (0, OH.jsx)("span", {
                  children: eb("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Mb.entries.length ? (0, OH.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: eb("skyblockGame:autographBookEmpty")
            }) : (0, OH.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Mb.entries.map((bb => (0, OH.jsxs)("li", {
                className: MH()("SkyblockAutograph", {
                  Ranked: null !== bb.rank
                }),
                style: null === bb.rank ? void 0 : {
                  color: bb.rank.colour
                },
                children: [null !== bb.rank && (0, OH.jsx)(GH.b, {
                  className: "SkyblockAutographRankIcon",
                  name: bb.rank.icon,
                  kit: (0, GH.e)(bb.rank.icon)
                }), (0, OH.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, OH.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: bb.name
                  }), (0, OH.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== bb.rank && (0, OH.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: bb.rank.label
                    }), (0, OH.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: bb.signedOn
                    })]
                  })]
                })]
              }, bb.key)))
            })]
          })]
        })
      }) : null
    }
    const jV = (0, xb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        return (0, OH.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: wb.display.mountWaypoint,
          children: [(0, OH.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, OH.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, OH.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, OH.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, OH.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, OH.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      KV = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function rV(bb) {
      return "next" === bb.phase ? "\u2192" : KV[bb.kind]
    }
    const RV = (0, xb.memo)((function(bb) {
      let {
        controller: wb,
        display: Mb
      } = bb;
      const eb = (0, IH.h)(uw, wb.getNotificationSnapshot()),
        [Hb, pb] = (0, xb.useState)(!1);
      return (0, IH.e)("qteStateUpdated", (bb => {
        pb(bb.isActive)
      })), (0, OH.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Hb ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [eb && (0, OH.jsxs)("div", {
          className: `SkyblockQuestNotification ${eb.kind} ${eb.phase}`,
          style: {
            "--quest-notification-duration": `${eb.durationMs}ms`,
            ...eb.accent && {
              "--quest-notification-accent": eb.accent
            }
          },
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (eb.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, OH.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: rV(eb)
            }), eb.iconItem && (0, OH.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, OH.jsx)(VH.c, {
                itemName: eb.iconItem,
                amount: 0
              })
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, OH.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: eb.title
            }), (0, OH.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, OH.jsx)(AH.b, {
                text: eb.name
              })
            }), eb.description && (0, OH.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, OH.jsx)(AH.b, {
                text: eb.description
              })
            }), eb.reward && (0, OH.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, OH.jsx)(AH.b, {
                text: eb.reward
              })
            })]
          })]
        }, eb.token), (null === eb || void 0 === eb ? void 0 : eb.waypointNameKey) && (0, OH.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": eb.waypointNameKey,
          "data-notification-token": eb.token,
          ref: Mb.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${eb.token}`)]
      })
    }));

    function DV(bb) {
      const wb = parseInt(bb.replace("#", ""), 16);
      return `${wb>>16&255}, ${wb>>8&255}, ${255&wb}`
    }
    const cV = (0, xb.memo)((function(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(sM, wb.getSnapshot());
      if (!eb) return null;
      const Hb = "arrival" === eb.phase;
      return (0, OH.jsxs)("div", {
        className: MH()("SkyblockPortalTransit", {
          Departure: !Hb,
          Arrival: Hb
        }),
        style: {
          "--portal-rgb": DV(eb.colour),
          "--portal-duration": `${eb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, OH.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, OH.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            wb.finishArrival(eb.token)
          }
        }), (0, OH.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, OH.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Hb && (0, OH.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Mb("skyblockGame:portalTransitHeading")
          }), (0, OH.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Mb(eb.zoneNameKey)
          })]
        })]
      }, eb.token)
    }));

    function YV() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ZV() {
      const bb = document.querySelector(".SkyblockHudCoins"),
        wb = null === bb || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return wb && wb.width > 0 ? {
        x: wb.left + Math.min(wb.width, 24) / 2,
        y: wb.top + wb.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function fV(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }

    function AV() {
      var bb;
      const wb = null === (bb = document.querySelector(".HotBar")) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return wb && wb.width > 0 ? fV(wb) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function WV(bb) {
      let {
        items: wb,
        origins: Mb,
        target: eb
      } = bb;
      return (0, OH.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: wb.map(((bb, wb) => {
          const Hb = Mb[wb];
          return (0, OH.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Hb.x}px`,
              top: `${Hb.y}px`,
              "--item-dx": eb.x - Hb.x + "px",
              "--item-dy": eb.y - Hb.y + "px",
              "--item-delay": 2e3 + 160 * wb + "ms",
              "--item-flight": "700ms"
            },
            children: (0, OH.jsx)(VH.c, {
              itemName: bb.dailyRewardItemName,
              amount: 0
            })
          }, bb.dailyRewardItemName)
        }))
      })
    }

    function JV(bb, wb) {
      const Mb = -Math.PI / 2 + 1.25 * (bb / (wb - 1) * 2 - 1),
        eb = 70 + bb % 3 * 22;
      return {
        x: Math.cos(Mb) * eb,
        y: Math.sin(Mb) * eb * .7
      }
    }

    function SV(bb) {
      let {
        origin: wb,
        target: Mb,
        count: eb
      } = bb;
      const Hb = [];
      for (let pb = 0; pb < eb; pb++) {
        const bb = JV(pb, eb);
        Hb.push((0, OH.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${wb.x}px`,
            top: `${wb.y}px`,
            "--coin-bx": `${bb.x}px`,
            "--coin-by": `${bb.y}px`,
            "--coin-dx": Mb.x - wb.x + "px",
            "--coin-dy": Mb.y - wb.y + "px",
            "--coin-delay": `${jM(pb,eb)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, OH.jsx)(VH.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, pb))
      }
      return (0, OH.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Hb
      })
    }

    function NV(bb) {
      let {
        day: wb
      } = bb;
      const Mb = jb[wb - 1];
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, OH.jsx)(VH.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, lH.d)(Mb.dailyRewardCoins)]
        }), Mb.dailyRewardItems.map((bb => (0, OH.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, OH.jsx)(VH.c, {
            itemName: bb.dailyRewardItemName,
            amount: 0
          }), "\xd7", bb.dailyRewardItemAmount]
        }, bb.dailyRewardItemName)))]
      })
    }

    function vV(bb) {
      let {
        day: wb
      } = bb;
      const Mb = rb(wb);
      return (0, OH.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: jb.map(((bb, eb) => {
          const Hb = eb + 1;
          return (0, OH.jsxs)("li", {
            className: MH()("SkyblockDailyRewardTile", {
              Claimed: Hb < wb && Hb !== Mb,
              Today: Hb === wb,
              Tomorrow: Hb === Mb,
              Jackpot: Hb === Kb
            }),
            children: [(0, OH.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Hb
            }), (0, OH.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, OH.jsx)(VH.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, lH.d)(bb.dailyRewardCoins)]
            }), bb.dailyRewardItems.map((bb => (0, OH.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, OH.jsx)(VH.c, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))]
          }, Hb)
        }))
      })
    }

    function QV(bb) {
      let {
        view: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, xb.useRef)(null), Hb = (0, xb.useRef)(null), [pb, Vb] = (0, xb.useState)(null);
      (0, xb.useLayoutEffect)((() => {
        var bb;
        const wb = null === (bb = eb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (wb) {
          var Mb, pb;
          const bb = Array.from(null !== (Mb = null === (pb = Hb.current) || void 0 === pb ? void 0 : pb.children) && void 0 !== Mb ? Mb : [], (bb => fV(bb.getBoundingClientRect())));
          Vb({
            origin: fV(wb),
            target: ZV(),
            itemOrigins: bb,
            itemTarget: AV()
          })
        }
      }), []);
      const gb = rb(wb.day),
        lb = function(bb, wb) {
          const [Mb, eb] = (0, xb.useState)((() => YV() ? bb : 0));
          return (0, xb.useEffect)((() => {
            if (YV()) return;
            const Mb = performance.now();
            let Hb = 0;
            const pb = Vb => {
              const gb = Math.min(Math.max((Vb - Mb) / wb, 0), 1);
              eb(Math.round(bb * (1 - (1 - gb) ** 3))), gb < 1 && (Hb = requestAnimationFrame(pb))
            };
            return Hb = requestAnimationFrame(pb), () => {
              cancelAnimationFrame(Hb)
            }
          }), [bb, wb]), Mb
        }(wb.coins, 450);
      return (0, OH.jsxs)("div", {
        className: MH()("SkyblockDailyReward", {
          Jackpot: wb.day === Kb
        }),
        style: {
          "--daily-duration": `${wb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, OH.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, OH.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, OH.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Mb("skyblockGame:dailyRewardTitle")
            }), (0, OH.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Mb("skyblockGame:dailyRewardDay", {
                day: String(wb.day)
              })
            })]
          }), (0, OH.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: eb,
            children: [(0, OH.jsx)(VH.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, OH.jsxs)("span", {
              children: ["+", (0, lH.d)(lb)]
            })]
          }), wb.items.length > 0 && (0, OH.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Hb,
            children: wb.items.map((bb => (0, OH.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, OH.jsx)(VH.c, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))
          }), (0, OH.jsx)(vV, {
            day: wb.day
          }), (0, OH.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Mb("skyblockGame:dailyRewardComeBack"), (0, OH.jsx)(NV, {
              day: gb
            })]
          })]
        }), null !== pb && (0, OH.jsx)(SV, {
          origin: pb.origin,
          target: pb.target,
          count: wb.flyingCoins
        }), null !== pb && pb.itemOrigins.length === wb.items.length && (0, OH.jsx)(WV, {
          items: wb.items,
          origins: pb.itemOrigins,
          target: pb.itemTarget
        })]
      })
    }
    const GV = (0, xb.memo)((function(bb) {
        let {
          controller: wb
        } = bb;
        const Mb = (0, IH.h)(zM, wb.getSnapshot());
        return Mb ? (0, OH.jsx)(QV, {
          view: Mb
        }, Mb.token) : null
      })),
      qV = "Gold Coin";

    function aV(bb) {
      return 650 + 220 * bb
    }

    function iV(bb) {
      return {
        "--letter-delay": `${aV(bb)}ms`,
        "--letter-land": `${aV(bb)+300}ms`
      }
    }

    function uV(bb) {
      let {
        letterCount: wb
      } = bb;
      return (0, OH.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, OH.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, OH.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, OH.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: wb
        }, ((bb, wb) => (0, OH.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: iV(wb),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, wb)))]
      })
    }

    function dV(bb) {
      var wb, Mb, eb;
      let {
        letter: Hb,
        index: pb
      } = bb;
      const {
        t: Vb
      } = (0, LH.C)(), gb = null !== (wb = null === (Mb = Hb.items[0]) || void 0 === Mb ? void 0 : Mb.itemName) && void 0 !== wb ? wb : qV;
      return (0, OH.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: iV(pb),
        children: [(0, OH.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, OH.jsx)(VH.c, {
            itemName: gb,
            amount: 0
          })
        }), (0, OH.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Vb(Hb.reasonKey, null !== (eb = Hb.reasonParams) && void 0 !== eb ? eb : void 0)
        }), (0, OH.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Hb.coins > 0 && (0, OH.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, OH.jsx)(VH.c, {
              itemName: qV,
              amount: 0
            }), "+", (0, lH.d)(Hb.coins)]
          }), Hb.items.map(((bb, wb) => (0, OH.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, OH.jsx)(VH.c, {
              itemName: bb.itemName,
              amount: 0
            }), bb.label, " \xd7", bb.amount]
          }, wb)))]
        })]
      })
    }

    function PV(bb) {
      let {
        view: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)();
      return (0, OH.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${wb.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${aV(wb.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, OH.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, OH.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, OH.jsx)(uV, {
              letterCount: wb.letters.length
            }), (0, OH.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Mb("skyblockGame:mailboxTitle")
            })]
          }), (0, OH.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: wb.letters.map(((bb, wb) => (0, OH.jsx)(dV, {
              letter: bb,
              index: wb
            }, wb)))
          }), wb.more > 0 && (0, OH.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Mb("skyblockGame:mailboxMore", {
              count: String(wb.more)
            })
          })]
        })
      })
    }
    const nV = (0, xb.memo)((function(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(rM, wb.getSnapshot());
      return Mb ? (0, OH.jsx)(PV, {
        view: Mb
      }, Mb.token) : null
    }));

    function yV(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(se, wb.getSnapshot());
      if (null === eb) return null;
      const Hb = eb.fullSet ? "empty" === eb.fuelState ? {
        text: Mb("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Mb("skyblockGame:magmawardHudFullSet", {
          worn: String(eb.wornCount)
        }),
        tone: "partial"
      };
      return (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsxs)("div", {
          className: MH()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${eb.fuelState}`, {
            "SkyblockMagmawardHud-partial": !eb.fullSet,
            "SkyblockMagmawardHud-armed": eb.fullSet && "empty" !== eb.fuelState
          }),
          children: [null !== eb.flare && (0, OH.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${eb.flare}`
          }, `flare:${eb.flareToken}`), (0, OH.jsx)("div", {
            className: MH()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: eb.setLit
            }),
            children: eb.pieces.map(((bb, wb) => (0, OH.jsx)("div", {
              className: MH()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: bb.worn,
                SkyblockMagmawardPieceJustWorn: bb.justWorn
              }),
              children: (0, OH.jsx)(VH.c, {
                itemName: bb.itemName,
                amount: 0
              })
            }, `${wb}:${bb.wornToken}`)))
          }, `pieces:${eb.setLitToken}`), (0, OH.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, OH.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, OH.jsxs)("div", {
              className: MH()("SkyblockMagmawardFuelCounter", eb.pulse && `SkyblockMagmawardFuelCounter-${eb.pulse}`),
              children: [(0, OH.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, OH.jsx)(VH.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, OH.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: eb.fuel
              })]
            }, `counter:${eb.pulseToken}`), "burn" === eb.pulse && (0, OH.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${eb.pulseToken}`)]
          }), Hb && (0, OH.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Hb.tone} SmallTextBold`,
            children: Hb.text
          })]
        })
      })
    }

    function oV(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb,
        selectedLanguage: eb
      } = (0, LH.C)(), Hb = (0, IH.h)(he, wb.getSnapshot());
      return null === Hb ? null : (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsxs)("div", {
          className: MH()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Hb.inRange
          }),
          style: {
            "--glowtide-colour": Hb.colour
          },
          "aria-label": Mb("skyblockGame:glowtideChipLabel"),
          children: [(0, OH.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Hb.inRange ? (0, OH.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Mb("skyblockGame:glowtideChipInRange")
          }, `call:${Hb.inRangeToken}`) : (0, OH.jsxs)(OH.Fragment, {
            children: [(0, OH.jsx)("div", {
              ref: wb.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, OH.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Mb("skyblockGame:waypointDistance", {
                distance: hb(Hb.distance, eb.code)
              })
            })]
          })]
        })
      })
    }

    function TV(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(Xe, wb.getSnapshot());
      return null === eb ? null : (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsxs)("div", {
          className: MH()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: eb.full
          }),
          "aria-label": Mb("skyblockGame:glowMeterLabel", {
            fill: String(eb.fill),
            qO: String(eb.qO)
          }),
          children: [eb.burst && (0, OH.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${eb.burstToken}`), (0, OH.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, OH.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${eb.ratio})`
              }
            }), eb.gained && (0, OH.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${eb.gainToken}`), eb.full && Array.from({
              length: 5
            }, ((bb, wb) => (0, OH.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, wb)))]
          }), eb.full && eb.rares.map((bb => (0, OH.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, OH.jsx)(VH.c, {
              itemName: bb,
              amount: 0
            })
          }, bb))), eb.ready && (0, OH.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, OH.jsx)("span", {
              children: Mb("skyblockGame:glowMeterReady")
            })
          }, `ready:${eb.fullToken}`)]
        })
      })
    }

    function kV(bb) {
      let {
        controller: wb
      } = bb;
      const {
        t: Mb
      } = (0, LH.C)(), eb = (0, IH.h)(je, wb.getSnapshot());
      if (null === eb) return null;
      const Hb = "waiting" === eb.phase,
        pb = {
          animationDuration: `${eb.waitMs}ms`,
          animationDelay: -eb.elapsedMs + "ms"
        },
        Vb = Hb ? void 0 : {
          animationDuration: `${eb.waitMs}ms`
        };
      return (0, OH.jsxs)("div", {
        className: Hb ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Hb && (0, OH.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((bb, wb) => (0, OH.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, wb))), (0, OH.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: pb
          }), (0, OH.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, OH.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, OH.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: pb
            })]
          }), (0, OH.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, OH.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Vb,
          children: Mb(eb.line)
        }, eb.lineIndex)]
      }, eb.token)
    }

    function bg(bb) {
      let {
        chart: wb,
        showHere: Mb,
        className: eb
      } = bb;
      return (0, OH.jsx)("div", {
        className: MH()("SkyblockTideChartGrid", eb, null !== wb.pictureName && "Complete"),
        "aria-hidden": "true",
        children: wb.cells.map(((bb, eb) => {
          const Hb = 0 !== (wb.pulseCells & 1 << eb),
            pb = wb.castCell === eb;
          return (0, OH.jsx)("span", {
            className: MH()("SkyblockTideChartCell", `Cell-${bb}`, Hb && "Pulse", pb && "Cast", Mb && wb.hereCell === eb && "Here")
          }, `${eb}:${Hb?`p${wb.pulseToken}`:""}:${pb?`c${wb.castToken}`:""}`)
        }))
      })
    }

    function wg(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(re, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = Mb.chip;
      if (!Mb.enabled || null === Hb) return null;
      const pb = eb("skyblockGame:tideChartsChipLabel", {
        island: Hb.islandName,
        lit: String(Hb.lit),
        ink: String(Hb.ink)
      });
      return (0, OH.jsx)(HH.d, {
        placement: "statBars",
        children: (0, OH.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: MH()("SkyblockTideChartsChip", Mb.open && "Open", null !== Hb.pictureName && "Complete"),
          "aria-label": pb,
          title: pb,
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: wb.toggle,
          children: [(0, OH.jsx)(bg, {
            chart: Hb,
            showHere: !1,
            className: "Mini"
          }), (0, OH.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Hb.lit, "/", Hb.ink]
          })]
        })
      })
    }

    function Mg(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, IH.h)(re, wb.getSnapshot()),
        {
          t: eb
        } = (0, LH.C)(),
        Hb = XH(),
        pb = Mb.card;
      return Mb.enabled && null !== pb ? (0, OH.jsx)(mH.e, {
        show: Mb.open,
        close: wb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, OH.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: zH,
          children: [(0, OH.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, OH.jsxs)("div", {
              children: [(0, OH.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: eb("skyblockGame:tideChartsTitle")
              }), (0, OH.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: eb("skyblockGame:tideChartsIntro")
              })]
            }), (0, OH.jsx)(hH.l, {
              padIgnore: !0,
              ariaLabel: eb("skyblockGame:tideChartsClose"),
              onClick: wb.dismiss
            })]
          }), Mb.tabs.length > 1 && (0, OH.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": eb("skyblockGame:tideChartsIslands"),
            children: Mb.tabs.map((bb => (0, OH.jsx)("button", {
              type: "button",
              className: MH()("SkyblockTideChartsTab", bb.selected && "Selected"),
              "aria-pressed": bb.selected,
              onClick: () => {
                wb.Vt(bb.island)
              },
              children: bb.name
            }, bb.island)))
          }), (0, OH.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, OH.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": pb.gridLabel,
              children: (0, OH.jsx)(bg, {
                chart: pb,
                showHere: !0,
                className: "Large"
              })
            }), (0, OH.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, OH.jsx)("h3", {
                children: pb.islandName
              }), (0, OH.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: pb.litText
              }), null === pb.pictureName ? (0, OH.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: eb("skyblockGame:tideChartsPictureHidden")
              }) : (0, OH.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: eb("skyblockGame:tideChartsPictureRevealed", {
                  picture: pb.pictureName
                })
              }, pb.pictureName), (0, OH.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, OH.jsxs)("li", {
                  children: [(0, OH.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), eb("skyblockGame:tideChartsLegendLit")]
                }), (0, OH.jsxs)("li", {
                  children: [(0, OH.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), eb("skyblockGame:tideChartsLegendClear")]
                }), null !== pb.hereCell && (0, OH.jsxs)("li", {
                  children: [(0, OH.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), eb("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, OH.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, OH.jsx)("span", {
                  children: Mb.turnsText
                }), (0, OH.jsx)("span", {
                  children: Mb.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function eg(bb) {
      var wb;
      let {
        controller: Mb
      } = bb;
      const {
        selectedLanguage: eb
      } = (0, LH.C)(), Hb = eb.code;
      (0, xb.useEffect)((() => {
        Mb.setTranslator(((bb, wb) => (0, LH.x)(Hb, bb, wb)), Hb, ((bb, wb) => (0, LH.r)(Hb, bb, wb)))
      }), [Mb, Hb]);
      const pb = (0, IH.h)(Lb, Mb.map.getSnapshot()),
        {
          openInGameMenuName: Vb
        } = (0, eH.o)(["openInGameMenuName"]);
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)(RV, {
          controller: Mb.quests,
          display: Mb.navigation.display
        }), pb.enabled && !Vb && (0, OH.jsx)(YH, {
          controller: Mb.navigation
        }), (0, OH.jsx)(UH, {
          controller: Mb,
          minimap: pb.enabled && (null === (wb = pb.presentation) || void 0 === wb ? void 0 : wb.minimap) && (0, OH.jsx)(cH, {
            view: pb.presentation.minimap,
            navigation: Mb.navigation,
            controller: Mb.map
          }),
          children: (0, OH.jsx)(QH, {
            controller: Mb.quests,
            surface: "hud"
          })
        }), (0, OH.jsx)(jV, {
          controller: Mb.navigation
        }), (0, OH.jsx)(cV, {
          controller: Mb.portalTransit
        }), (0, OH.jsx)(GV, {
          controller: Mb.dailyReward
        }), (0, OH.jsx)(nV, {
          controller: Mb.mailbox
        }), (0, OH.jsx)(yV, {
          controller: Mb.magmaward
        }), (0, OH.jsx)(oV, {
          controller: Mb.glowtide
        }), (0, OH.jsx)(vp, {
          controller: Mb.passage
        }), (0, OH.jsx)(wg, {
          controller: Mb.tideCharts
        }), (0, OH.jsx)(TV, {
          controller: Mb.glowMeter
        }), (0, OH.jsx)(Tp, {
          controller: Mb.reachLog
        }), (0, OH.jsx)(kV, {
          controller: Mb.hushWait
        }), (0, OH.jsx)(Pp, {
          controller: Mb.lampLight
        }), (0, OH.jsx)(ZH, {
          controller: Mb.skills,
          surface: "hud"
        })]
      })
    }

    function Hg(bb) {
      let {
        controller: wb
      } = bb;
      return (0, OH.jsxs)(OH.Fragment, {
        children: [(0, OH.jsx)(DH, {
          controller: wb.map,
          navigation: wb.navigation
        }), (0, OH.jsx)(ZH, {
          controller: wb.skills,
          surface: "menu"
        }), (0, OH.jsx)(QH, {
          controller: wb.quests,
          surface: "menu"
        }), (0, OH.jsx)(hp, {
          controller: wb.dungeons
        }), (0, OH.jsx)(xp, {
          controller: wb.collections
        }), (0, OH.jsx)(rp, {
          controller: wb.questGraph
        }), (0, OH.jsx)(Zp, {
          controller: wb.forge
        }), (0, OH.jsx)(Sp, {
          controller: wb.smuggler
        }), (0, OH.jsx)(yp, {
          controller: wb.keepersChair,
          lampLight: wb.lampLight
        }), (0, OH.jsx)(mV, {
          controller: wb.reachLog,
          regulars: wb.regulars,
          hiddenWaters: wb.hiddenWaters
        }), (0, OH.jsx)(MV, {
          controller: wb.regulars
        }), (0, OH.jsx)(Gp, {
          controller: wb.passage
        }), (0, OH.jsx)(Mg, {
          controller: wb.tideCharts
        }), (0, OH.jsx)(XV, {
          controller: wb.dialogue
        }), (0, OH.jsx)(xV, {
          controller: wb.autographs
        })]
      })
    }
    var pg = Mb(37630);
    const Vg = WM + qM;

    function gg(bb, wb) {
      const Mb = [{
        sound: "rpgKnifeSlice1",
        beat: WM,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: WM,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: WM,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: WM,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: WM,
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
        Vt: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: Vg + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        Vt: !0,
        beat: Vg + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: Vg + 60,
        lead: 180,
        volume: .5 + .06 * bb,
        rate: .82 + .07 * bb
      }];
      return bb >= 4 && Mb.push({
        sound: "exp_levelup",
        beat: Vg + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), wb && Mb.push({
        sound: "trumpetFlare",
        beat: Vg + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), Mb.push({
        sound: "harp_pling",
        beat: JM,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), Mb
    }
    class lg {
      constructor(bb) {
        this.deps = bb, this.pending = new Map, this.localHook = null
      }
      hookWaiting(bb, wb) {
        this.pending.delete(bb);
        const Mb = this.deps.now();
        if (null === wb) {
          var eb;
          if ((null === (eb = this.localHook) || void 0 === eb ? void 0 : eb.hookId) === bb) {
            const bb = Mb >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(bb)
          }
          return
        }
        const Hb = Mb + wb;
        this.settle(bb, Hb) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(bb, {
          untilMs: Mb + 1e3,
          biteAtMs: Hb
        }))
      }
      getLocalHook() {
        var bb, wb;
        return null !== (bb = null === (wb = this.localHook) || void 0 === wb ? void 0 : wb.hookId) && void 0 !== bb ? bb : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const bb = this.deps.now();
        for (const [wb, {
            untilMs: Mb,
            biteAtMs: eb
          }] of this.pending)(this.settle(wb, eb) || bb > Mb) && this.pending.delete(wb)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(bb, wb) {
        const Mb = this.deps.getLineOwner(bb);
        if (null === Mb) return !1;
        if (!this.deps.isLocalPlayer(Mb)) return !0;
        if (this.localHook = {
            hookId: bb,
            biteAtMs: wb
          }, !this.deps.isHushWaiting()) {
          const [wb, Mb] = this.deps.getHookPosition(bb);
          this.deps.onCastLanded(wb, Mb)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Lg = Mb(3059);
    const Ig = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Og = {
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
    class Ug {
      constructor(bb) {
        this.deps = bb, this.tell = null
      }
      receiveTell(bb) {
        let {
          biteTellTier: wb
        } = bb;
        this.tell = {
          tier: wb,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(bb) {
        const wb = this.tell;
        if (this.tell = null, !bb) return;
        const Mb = null !== wb && this.deps.now() - wb.atMs <= 3e3 ? wb.tier : 0;
        this.deps.vibrate(Ig[Mb])
      }
      burstAtHook() {
        const bb = this.tell,
          wb = this.deps.getLocalHookPosition();
        null === bb || bb.burst || null === wb || (bb.burst = !0, this.deps.playParticles(function(bb, wb) {
          let [Mb, eb, Hb] = wb;
          const {
            count: pb,
            rise: Vb,
            colour: gb
          } = Og[bb], [lb, Lb, Ib] = gb;
          return {
            texture: "glint",
            pos1: [Mb - .3, eb, Hb - .3],
            pos2: [Mb + .3, eb + .2, Hb + .3],
            dir1: [-.6, Vb, -.6],
            dir2: [.6, 1.4 * Vb, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: pb,
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
              minColor: [lb, Lb, Ib, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [lb, Lb, Ib, 0],
              maxColor: [lb, Lb, Ib, 0]
            }],
            blendMode: Lg.d.Add,
            hideDist: 48
          }
        }(bb.tier, wb)))
      }
    }
    var tg = Mb(1321),
      Cg = Mb(2146),
      Eg = Mb(43),
      Fg = Mb(39943),
      Bg = Mb(225);
    const sg = Bg.e.oF * Bg.e.playerEyeToHeightRatio;
    class mg {
      constructor(bb) {
        this.host = bb, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      EO(bb) {
        this.lava = bb, this.nextUpdateAt = 0
      }
      sO() {
        var bb;
        const wb = this.host.now();
        if (wb < this.nextUpdateAt) return;
        this.nextUpdateAt = wb + 250;
        const Mb = this.host.playerPosition(),
          eb = Mb && this.findNearest([Mb[0], Mb[1] + sg, Mb[2]]);
        if (!eb || eb.distance >= 40) return void this.stop();
        const Hb = .5 * Math.min(1, (40 - eb.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Hb) : this.loop = this.host.play("lavaFlow", Hb, eb.position, 40 + sg, 9, !0), null === (bb = this.loop) || void 0 === bb || bb.setPosition(eb.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var bb;
        null === (bb = this.loop) || void 0 === bb || bb.stop(), this.loop = null
      }
      findNearest(bb) {
        let wb = -1,
          Mb = 1 / 0;
        for (let eb = 0; eb < this.lava.length; eb += 3) {
          const Hb = this.lava[eb] - bb[0],
            pb = this.lava[eb + 1] - bb[1],
            Vb = this.lava[eb + 2] - bb[2],
            gb = Hb * Hb + pb * pb + Vb * Vb;
          gb < Mb && (Mb = gb, wb = eb)
        }
        return wb < 0 ? null : {
          position: [this.lava[wb], this.lava[wb + 1], this.lava[wb + 2]],
          distance: Math.sqrt(Mb)
        }
      }
    }
    var hg = Mb(2125),
      zg = Mb(39948);
    const Xg = {
      "Grey Portal": "Gray"
    };
    for (const cg of Ob.Uc) Xg[`${cg} Portal`] = cg;
    const xg = Object.keys(Xg),
      jg = Object.fromEntries(xg.map((bb => [bb, (0, Ob.cb)(Ob.O[`${(0,Ob.De)(Xg[bb])}Team`])])));
    Object.fromEntries(xg.map((bb => [bb, Ob.O[`${(0,Ob.De)(Xg[bb])}UiText`]])));
    class Kg {
      constructor(bb, wb) {
        this.presentation = bb, this.portal = wb, this.unlocked = void 0
      }
      EO(bb) {
        const wb = !1 === this.unlocked && bb;
        this.unlocked = bb, this.sO();
        const {
          min: Mb,
          max: eb,
          unlockedBlock: Hb
        } = this.portal;
        if (wb && this.presentation.hasChunk(...Mb)) {
          const [bb, wb, pb] = jg[Hb];
          this.presentation.playParticles({
            pos1: [...Mb],
            pos2: eb.map((bb => bb + 1)),
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
              minColor: [bb, wb, pb, 1],
              maxColor: [Math.min(255, bb + 55), Math.min(255, wb + 55), Math.min(255, pb + 90), 1]
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
      sO() {
        var bb;
        const wb = this.unlocked ? this.portal.unlockedBlock : null !== (bb = this.portal.lockedBlock) && void 0 !== bb ? bb : "Light Gray Portal",
          {
            min: Mb,
            max: eb
          } = this.portal;
        for (let Hb = Mb[0]; Hb <= eb[0]; Hb++)
          for (let bb = Mb[1]; bb <= eb[1]; bb++)
            for (let pb = Mb[2]; pb <= eb[2]; pb++) this.presentation.hasChunk(Hb, bb, pb) && this.presentation.Am(Hb, bb, pb) !== wb && this.presentation.jW(Hb, bb, pb, wb)
      }
    }
    var rg = Mb(39813);
    Mb(39797);
    const Rg = {
        farming_1: {
          raises: bb => "NPC" === bb.type && "chef" === bb.variation,
          rise: .4
        },
        fishing_1: {
          raises: bb => "Draugr Warper" === bb.type,
          rise: .4
        }
      },
      Dg = (bb, wb, Mb, Hb) => {
        let {
          localPlayerId: pb
        } = Hb;
        const Vb = new bH({
          translate: (bb, wb) => (0, LH.x)(tg.g.get().getCurrentLanguageCode(), bb, wb),
          translateWithIcons: (bb, wb) => (0, LH.r)(tg.g.get().getCurrentLanguageCode(), bb, wb),
          setMenuOpen: bb => {
            bb ? (0, ib.y)() : (0, ib.l)()
          },
          dismissMenu: ib.o,
          publishSkills: bb => {
            ub.k.iI(Qw, bb, !0)
          },
          publishQuests: bb => {
            ub.k.iI(iw, bb, !0)
          },
          publishQuestNotification: bb => {
            ub.k.iI(uw, bb, !0)
          },
          publishDungeons: bb => {
            ub.k.iI(nw, bb, !0)
          },
          publishCollections: bb => {
            ub.k.iI(FM, bb, !0)
          },
          publishMap: bb => {
            ub.k.iI(Lb, bb, !0)
          },
          publishHud: bb => {
            ub.k.iI(oe, bb, !0)
          },
          publishPortalTransit: bb => {
            ub.k.iI(sM, bb, !0)
          },
          isLoadingScreenUp: () => eH.c.get("loadingOverlayVisible"),
          publishDailyReward: bb => {
            ub.k.iI(zM, bb, !0)
          },
          publishMailbox: bb => {
            ub.k.iI(rM, bb, !0)
          },
          publishQuestGraph: bb => {
            ub.k.iI(DM, bb, !0)
          },
          publishForge: bb => {
            ub.k.iI(yM, bb, !0)
          },
          publishSmuggler: bb => {
            ub.k.iI(kM, bb, !0)
          },
          publishKeepersChair: bb => {
            ub.k.iI(le, bb, !0)
          },
          publishReachLog: bb => {
            ub.k.iI(Ie, bb, !0)
          },
          publishLampLight: bb => {
            ub.k.iI(Fe, bb, !0)
          },
          publishMagmaward: bb => {
            ub.k.iI(se, bb, !0)
          },
          publishGlowtide: bb => {
            ub.k.iI(he, bb, !0)
          },
          publishGlowMeter: bb => {
            ub.k.iI(Xe, bb, !0)
          },
          publishHushWait: bb => {
            ub.k.iI(je, bb, !0)
          },
          publishPassage: bb => {
            ub.k.iI(Me, bb, !0)
          },
          publishTideCharts: bb => {
            ub.k.iI(re, bb, !0)
          },
          publishRegulars: bb => {
            ub.k.iI(We, bb, !0)
          },
          publishHiddenWaters: bb => {
            ub.k.iI(Qe, bb, !0)
          },
          publishDialogue: bb => {
            ub.k.iI(qe, bb, !0)
          },
          publishAutographs: bb => {
            ub.k.iI(Pe, bb, !0)
          },
          onDailyRewardStarted: bb => {
            Yb.playSound(pb, bb.day === Kb ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (bb, wb) => {
            Yb.playSound(pb, "exp_collect", .35, 1 + .6 * bb / (wb - 1)), ub.k.iI(XM, bb === wb - 1)
          },
          onDailyRewardItemLanded: bb => {
            Yb.playSound(pb, "pickUp", .6, 1 + .15 * bb)
          },
          onMailboxStarted: () => {
            Yb.playSound(pb, "rpgMetalClick", .6, 1), Yb.playSound(pb, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Yb.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Eg.j,
          requestTracking: bb => {
            Yb.sendCommand(`quests track ${bb}`)
          },
          requestDungeonEnter: (bb, wb) => {
            Yb.sendCommand(`dungeonEnter ${bb} ${wb}`)
          },
          requestQuestJump: bb => {
            Yb.sendCommand(`${Zb} jump ${bb}`)
          },
          requestQuestArrive: (bb, wb) => {
            const Mb = `${Zb} arrive ${bb}`;
            Yb.sendCommand(wb ? `${Mb} complete` : Mb)
          },
          requestForge: bb => {
            let {
              blade: wb,
              guard: Mb,
              handle: eb
            } = bb;
            Yb.sendCommand(`forge ${wb} ${Mb} ${eb}`)
          },
          requestDialogue: () => {
            Yb.sendCommand("quests dialogue")
          },
          requestSmuggle: (bb, wb) => {
            Yb.sendCommand(`smuggle ${bb} ${wb}`)
          },
          requestKeepersChairAim: bb => {
            Yb.sendCommand(`keeperschair-aim ${bb}`)
          },
          requestReachLogOpen: () => {
            Yb.sendCommand("reachlog-open")
          },
          requestLampLight: bb => {
            Yb.sendCommand(`${bb}`)
          },
          requestTravel: bb => {
            Yb.sendCommand(`map travel ${bb.kind} ${bb.id} ${bb.requestId}`)
          }
        });
        let gb, lb, Ib, Ub, tb, sb, mb, hb, zb, jb, rb, Db, cb, Yb, fb = null;
        const Sb = Rg[null !== Mb && void 0 !== Mb ? Mb : ""],
          Qb = (bb, wb) => {
            null !== Sb && void 0 !== Sb && Sb.raises(wb) && Yb.setNametagOffset(bb, Sb.rise)
          },
          Gb = new Ug({
            getLocalHookPosition: () => {
              const bb = Pb.getLocalHook();
              return null !== bb && Yb.checkValid(bb) ? Yb.Qm(bb) : null
            },
            playParticles: bb => {
              Yb.playParticleEffect(bb)
            },
            vibrate: bb => {
              db.d.play("fishBite", bb)
            },
            now: () => performance.now()
          }),
          Pb = new lg({
            getLineOwner: bb => Yb.checkValid(bb) ? Yb.getLineOwner(bb) : null,
            isLocalPlayer: bb => Yb.isLocalPlayer(bb),
            getHookPosition: bb => {
              const [wb, , Mb] = Yb.Qm(bb);
              return [wb, Mb]
            },
            isHushWaiting: () => {
              var bb;
              return "waiting" === (null === (bb = Vb.hushWait.getSnapshot()) || void 0 === bb ? void 0 : bb.phase)
            },
            onCastLanded: (bb, wb) => {
              Vb.tideCharts.castLanded(bb, wb)
            },
            onLocalHookSettled: () => {
              Gb.onLocalHookSettled()
            },
            onLocalWaitEnded: bb => {
              Gb.onLocalWaitEnded(bb)
            },
            now: () => performance.now()
          }),
          nb = new mg({
            now: () => performance.now(),
            playerPosition: () => Yb.checkValid(pb) ? Yb.Qm(pb) : null,
            play: (bb, wb, Mb, eb, Hb, Vb) => Yb.playSound(pb, bb, wb, 1, {
              yM: Mb,
              maxHearDist: eb,
              refDistance: Hb
            }, Vb)
          }),
          yb = new Map;
        let ob;
        return {
          onCreate: bb => {
            if (Yb = bb, fb = new zg.SkyblockEntityFacing(bb, Sb ? Qb : null), Vb.portalTransit.resumeArrival(null !== Mb && void 0 !== Mb ? Mb : null), (null !== Mb && void 0 !== Mb ? Mb : eb) === eb) {
              let bb = -1 / 0;
              ob = ub.k.subscribe("toggleMenu", (wb => {
                const Mb = performance.now();
                "inventory|Workbench" !== wb || "cross_to_hub" !== Vb.quests.getTrackedQuestId() || Mb - bb < 1e4 || (bb = Mb, Yb.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [eb, Hb] of Object.entries(null !== (wb = Ab[null !== Mb && void 0 !== Mb ? Mb : ""]) && void 0 !== wb ? wb : {})) {
              var wb;
              yb.set(eb, new Kg({
                hasChunk: (wb, Mb, eb) => bb.isBlockInLoadedChunk(wb, Mb, eb),
                Am: (wb, Mb, eb) => bb.blockIdToBlockName(bb.getBlockId(wb, Mb, eb)),
                jW: (wb, Mb, eb, Hb) => {
                  bb.jW(wb, Mb, eb, Hb)
                },
                playParticles: wb => {
                  bb.playParticleEffect(wb)
                }
              }, Hb))
            }
            cb = (0, hg.g)((bb => (0, jw.h)(bb) ? (0, jw.d)(bb) : null)), Vb.resolveItemName = (wb, Mb) => {
              const eb = bb.getItemStat(pb, wb, "displayName");
              return eb && "object" === typeof eb && "translationKey" in eb ? Mb(eb.translationKey, (0, LH.n)(eb.params, Cg.d.shown)) : "string" === typeof eb ? Mb(eb) : wb
            }, Vb.quests.notifications.onShown = bb => {
              "quest" === bb ? Yb.playSound(pb, "magicAccent1", 1, 1) : "skillLevel" === bb ? Yb.playSound(pb, "magicAccent1", 1, .6) : "landmark" === bb ? Yb.playSound(pb, "trumpetFlare", 1, .6) : "npcNote" === bb ? Yb.playSound(pb, "magicAccent2", .8, 1.1) : "started" === bb ? Yb.playSound(pb, (0, pg.f)("bigDrumSwish"), 1, 1) : Yb.playSound(pb, (0, pg.f)("rpgHandleSmallLeather"), 1, 1)
            }, Vb.forge.onPartSelected = () => {
              Yb.playSound(pb, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Vb.forge.onOpened = () => {
              ! function(bb) {
                bb.preloadSounds(gg(4, !0).map((bb => bb.sound)))
              }(bb)
            }, Vb.forge.onForgeStarted = (wb, Mb, eb) => function(bb, wb, Mb, eb, Hb) {
              const pb = [],
                Vb = [],
                gb = Mb => {
                  const eb = bb.playSound(wb, Mb.Vt ? (0, pg.f)(Mb.sound) : Mb.sound, Mb.volume, Mb.rate);
                  eb && (Vb.push(eb), void 0 !== Mb.cutAfter && pb.push(setTimeout((() => {
                    eb.fade(eb.getVolume(), 0, 300)
                  }), Mb.cutAfter)))
                };
              for (const lb of gg(Mb, eb)) Hb ? pb.push(setTimeout((() => {
                gb(lb)
              }), Math.max(0, lb.beat - lb.lead / lb.rate))) : lb.beat !== WM && "magicAccent2" !== lb.sound && "trumpetFlare" !== lb.sound || gb(lb);
              return () => {
                for (const bb of pb) clearTimeout(bb);
                for (const bb of Vb) bb.fade(bb.getVolume(), 0, 120)
              }
            }(bb, pb, wb, Mb, eb), Vb.smuggler.onBought = () => {
              (0, Fg.b)(Yb, pb)
            }, Vb.compass.register(new Cb(Vb.map, !0)), Vb.compass.register(new Cb(Vb.map, !1)), Vb.compass.register(new Fb(Vb.map)), Vb.compass.register(new Bb((() => Vb.quests.getSnapshot().compassTarget)));
            for (const Mb of ["enemy", "npc"]) Vb.compass.register(new Eb(Vb.map, Mb, (wb => bb.checkValid(wb) ? bb.Qm(wb) : void 0), (wb => bb.isAlive(wb))))
          },
          onAfterRender: (bb, wb) => {
            const Mb = Yb.checkValid(pb) ? Yb.Qm(pb) : null;
            Vb.navigation.afterRender(Mb, performance.now(), wb), Vb.glowtide.afterRender(Mb, wb.cameraHeading), Vb.tideCharts.afterRender(Mb), Pb.afterRender()
          },
          onClose: () => {
            var bb, wb, Mb, eb, Hb, pb, Lb, Ob, Cb, Eb, Fb, Bb, sb, Xb, xb;
            ob && ub.k.unsubscribe(ob), null === (bb = cb) || void 0 === bb || bb(), nb.dispose(), null === (wb = fb) || void 0 === wb || wb.dispose(), Pb.dispose(), Vb.dispose(), null === (Mb = gb) || void 0 === Mb || Mb(), null === (eb = lb) || void 0 === eb || eb(), null === (Hb = Ib) || void 0 === Hb || Hb(), null === (pb = Ub) || void 0 === pb || pb(), null === (Lb = tb) || void 0 === Lb || Lb(), null === (Ob = mb) || void 0 === Ob || Ob(), null === (Cb = undefined) || void 0 === Cb || Cb(), null === (Eb = hb) || void 0 === Eb || Eb(), null === (Fb = zb) || void 0 === Fb || Fb(), null === (Bb = jb) || void 0 === Bb || Bb(), null === (sb = rb) || void 0 === sb || sb(), null === (Xb = undefined) || void 0 === Xb || Xb(), null === (xb = Db) || void 0 === xb || xb()
          },
          onPlayerChangeBlock: (bb, wb, eb, Hb, gb, lb) => {
            if (bb === pb && "Air" === lb) {
              const bb = Yb.getClientOption(pb, "creative");
              Vb.skills.predictBlock([wb, eb, Hb], gb, bb);
              const lb = function(bb, wb) {
                  if ("hub" === wb || "farming_1" === wb || "mining_1" === wb) return !Nb.has(bb) || "hub" !== wb && "mining_1" !== wb ? Object.hasOwn(Jb, bb) ? Jb[bb] : void 0 : Wb
                }(gb, Mb),
                Lb = ("hub" === Mb || "mining_1" === Mb) && (Ob.Dd.some((bb => bb === gb)) || Object.hasOwn(vb, gb) || "mining_1" === Mb && "Block of Coal" === gb);
              bb || void 0 === lb && !Lb || Yb.jW(wb, eb, Hb, null !== lb && void 0 !== lb ? lb : Wb)
            }
          },
          onPlayerAttackEntity: (bb, wb) => {
            if (bb !== pb || "Player" !== Yb.getEntityType(wb)) return;
            const [Mb, eb, Hb] = Yb.Qm(wb);
            Yb.burstParticlePreset("critical", [Mb, eb + 1, Hb], 10)
          },
          onChangeBlockFail: bb => {
            for (const {
                Uw: wb
              }
              of bb) Vb.skills.rejectBlock(wb)
          },
          onReceivedMessageFromServer: (bb, wb) => {
            if ("skyblockGatedPortal" === bb) {
              var Mb;
              const [bb, eb] = wb;
              return void(null === (Mb = yb.get(bb)) || void 0 === Mb || Mb.EO(eb))
            }
            if ("skyblockDailyReward" === bb) return void Vb.dailyReward.EO(wb);
            if ("skyblockMailbox" === bb) return void Vb.mailbox.EO(wb);
            if ("skyblockPortalTransit" === bb) return void Vb.portalTransit.EO(wb);
            if ("skyblockLava" === bb) return void nb.EO(wb);
            if ("skyblockForge" === bb) return void Vb.forge.EO(wb);
            if ("skyblockMagmaward" === bb) return void Vb.magmaward.EO(wb);
            if ("skyblockGlowtide" === bb) return void Vb.glowtide.EO(wb);
            if ("skyblockGlowMeter" === bb) return void Vb.glowMeter.EO(wb);
            if ("skyblockHushWait" === bb) return void Vb.hushWait.EO(wb);
            if ("skyblockPassage" === bb) {
              const bb = wb;
              return Vb.passage.EO(bb), Vb.reachLog.receivePassagePhase(bb.passagePhase), jb ??= (0, Xb.s)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Vb.passage.show
              }), void Vb.keepersChair.receivePassage({
                keepersChairPassagePhase: bb.passagePhase,
                keepersChairPassageNextPhase: bb.passageNextPhase,
                keepersChairPassageTurnsInMs: bb.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === bb) {
              const bb = wb;
              return Vb.tideCharts.EO(bb), void(bb.tideCharts.length > 0 && (rb ??= (0, Xb.s)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Vb.tideCharts.show
              })))
            }
            if (bb === qb.y) {
              var eb;
              const {
                hookId: bb,
                waiting: Mb
              } = wb;
              return void Pb.hookWaiting(bb, null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.remainingMs) && void 0 !== eb ? eb : null)
            }
            if ("skyblockBiteTell" === bb) return void Gb.receiveTell(wb);
            if ("skyblockSmuggler" === bb) return void Vb.smuggler.EO(wb);
            if ("skyblockKeepersChair" === bb) return Vb.keepersChair.EO(wb), void Vb.lampLight.setAtChair(Vb.keepersChair.isAtChair());
            if ("skyblockLampLight" === bb) {
              const bb = wb;
              var Hb;
              if (Vb.lampLight.EO(bb), bb.lampLightReleasing) zb ??= (0, Xb.s)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Vb.lampLight.setRelease(!1)
                }
              });
              else null === (Hb = zb) || void 0 === Hb || Hb(), zb = void 0;
              return
            }
            if ("skyblockRegulars" === bb) return void Vb.regulars.EO(wb);
            if ("skyblockHiddenWaters" === bb) return void Vb.hiddenWaters.EO(wb);
            if ("skyblockReachLog" === bb) return Vb.reachLog.EO(wb), void(hb ??= (0, Xb.s)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Ue
              },
              onClick: Vb.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === bb) {
              for (const [bb, Mb, eb, Hb] of wb) Yb.jW(bb, Mb, eb, Hb);
              return
            }
            if ("skyblockHud" === bb) Vb.receiveHud(wb);
            else if ("skyblockMap" === bb) Vb.map.EO(wb);
            else if (bb === ab.f) Vb.skills.EO(wb);
            else if (bb === Rb && "dialogue" === wb.kind) Vb.dialogue.EO(wb);
            else if (bb === Rb) Vb.quests.EO(wb);
            else if ("skyblockDungeons" === bb) Vb.dungeons.EO(wb);
            else if ("sbCollections" === bb) Vb.collections.EO(wb);
            else if ("skyblockQuestGraph" === bb) Vb.questGraph.EO(wb);
            else {
              if ("skyblockAutographs" !== bb) return;
              Vb.autographs.EO(wb)
            }
            if (!lb && Vb.map.getSnapshot().enabled) {
              const bb = (0, Xb.s)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Vb.map.show
                }),
                wb = (0, ib.C)(Vb.map.show);
              lb = () => {
                bb(), wb()
              }
            }!Ib && Vb.skills.getSnapshot().enabled && (Ib = (0, Xb.s)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Vb.skills.show
            })), !mb && Vb.collections.getSnapshot().enabled && (mb = (0, Xb.s)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Vb.collections.show
            })), !Ub && Vb.quests.getSnapshot().enabled && (Ub = (0, Xb.s)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Vb.quests.show
            })), !Db && Vb.autographs.getSnapshot().enabled && (Db = (0, Xb.s)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Vb.autographs.show
            }));
            const pb = Vb.dungeons.getSnapshot().enabled;
            var Lb;
            (Ib || Ub || pb) && sb !== pb && (sb = pb, null === (Lb = tb) || void 0 === Lb || Lb(), tb = (0, Xb.s)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: rg
              },
              disabled: !pb,
              panel: !0,
              onClick: Vb.dungeons.show
            }));
            gb || (gb = (0, ib.J)((0, xb.createElement)(eg, {
              controller: Vb
            }), {
              content: (0, xb.createElement)(Hg, {
                controller: Vb
              }),
              onClose: Vb.close
            }))
          },
          sO: () => {
            var bb;
            for (const wb of yb.values()) wb.sO();
            nb.sO(), null === (bb = fb) || void 0 === bb || bb.sO(), Vb.skills.sO(), Vb.quests.sO(), Vb.dailyReward.sO(), Vb.mailbox.sO(), Vb.map.sO()
          }
        }
      }
  },
  39776: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => Hb
    });
    var eb = Mb(382);
    const Hb = (0, eb.Lb)([0, 0, -1]),
      pb = [{
        name: "S",
        bearing: (0, eb.Lb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, eb.Lb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Hb
      }, {
        name: "W",
        bearing: (0, eb.Lb)([1, 0, 0])
      }]
  },
  39767: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(39776);

    function Hb(bb, wb, Mb) {
      return [100 * (Mb.mapMaxX - bb) / (Mb.mapMaxX - Mb.mapMinX), 100 * (wb - Mb.mapMinZ) / (Mb.mapMaxZ - Mb.mapMinZ)]
    }

    function pb(bb, wb, Mb, pb) {
      const [Vb, gb] = Hb(bb, wb, pb), lb = eb.d - Mb;
      return {
        rotation: lb,
        transform: `rotate(${lb}rad) translate(-${Vb}%, -${gb}%)`
      }
    }
  },
  37587: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      f: () => eb
    });
    const eb = "skyblockSkills",
      Hb = "skills_test_gym"
  },
  39833: (bb, wb, Mb) => {
    var eb = {
      "./combat_1.png": 39838,
      "./dungeon_crumbling_crypt.png": 39844,
      "./dungeon_frozen_hollow.png": 39847,
      "./dungeon_wildwood_grove.png": 39856,
      "./dungeons.png": 39865,
      "./farming_1.png": 39867,
      "./fishing_1.png": 39871,
      "./hub.png": 39878,
      "./island.png": 39883,
      "./mining_1.png": 39892,
      "./mining_1_bridge.png": 39895,
      "./mining_1_gallery.png": 39898,
      "./mining_1_hollow.png": 39907,
      "./mining_1_village.png": 39915
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 39833
  },
  39838: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39844: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39847: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39856: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39865: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39867: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39871: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39878: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39883: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39892: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39895: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39898: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39907: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39915: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);