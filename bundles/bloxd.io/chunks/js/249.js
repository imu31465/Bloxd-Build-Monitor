export const id = 249;
export const ids = [60, 249];
export const modules = {
  40230: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd, Od) {
      return Wd.set(dd, Od), dd
    }

    function Rd(dd) {
      var Od;
      return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
    }
  },
  40087: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      constructor(dd, Od, md) {
        this.lQ = dd, this.beforeOpen = Od, this.afterClose = md, this.open = !1, this.Aq = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Aq && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(dd) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(dd)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Aq = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Aq || (this.snapshot = this.buildSnapshot(), this.lQ(this.snapshot))
      }
    }
  },
  40249: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      SkyblockEntityFacing: () => Kd,
      needsSkyblockEntityFacing: () => Xd
    });
    var Wd = md(699),
      Fd = md(2991),
      Rd = md(40251);

    function Xd(dd, Od) {
      if (dd.metaInfo === Wd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
      if ("Pig" === dd.type) return "sitting" === dd.pose;
      if ("Person" !== dd.meshKind || void 0 === dd.meshOpts) return !1;
      let md = null === Od || void 0 === Od ? void 0 : Od.get(dd.meshOpts);
      if (void 0 === md) {
        var Rd, Xd;
        const Wd = (0, Fd.k)(dd);
        md = !1, "pig_napoleon" === (null === Wd || void 0 === Wd || null === (Rd = Wd.opts.textures) || void 0 === Rd ? void 0 : Rd.head) ? md = !0 : "npc_pig_head" === (null === Wd || void 0 === Wd || null === (Xd = Wd.opts.textures) || void 0 === Xd ? void 0 : Xd.head) && (md = "sitting" === Wd.opts.pose || "sitting"), Od && (Od.size >= 256 && Od.clear(), Od.set(dd.meshOpts, md))
      }
      return "sitting" === md ? "sitting" === dd.pose : md
    }(0, Rd.i)("skyblock", ((dd, Od) => {
      Od.setFacingTolerance(Xd(dd) ? 0 : null)
    }));
    class Kd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = dd, this.alsoVisit = Od, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = dd => {
          var Od;
          const md = this.api.getEntityInfo(dd);
          md && (Xd(md, this.meshFacingCache) && (this.api.setFacingTolerance(dd, 0), this.nextFacing.add(dd)), null === (Od = this.alsoVisit) || void 0 === Od || Od.call(this, dd, md))
        }
      }
      Et() {
        const {
          api: dd
        } = this, Od = this.nextFacing;
        dd.forEachEntity(this.visit);
        for (const md of this.facing) Od.has(md) || dd.setFacingTolerance(md, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Od
      }
      dispose() {
        for (const dd of this.facing) this.api.setFacingTolerance(dd, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  40070: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => SK
    });
    const Wd = "island";
    var Fd = md(40074);

    function Rd(dd, Od, md) {
      const Rd = "local" === Od,
        Kd = dd.background,
        hd = Od => Kd ? (0, Fd.b)(Od[0] - dd.mapOrigin[0], Od[2] - dd.mapOrigin[2], Kd.bounds) : [50, 50],
        vd = (dd.insideDungeon ? [] : dd.landmarks).map((dd => {
          var Od, Wd;
          return {
            id: dd.id,
            name: md(dd.visited && dd.nameKey ? null !== (Od = dd.mapLabelKey) && void 0 !== Od ? Od : dd.nameKey : "skyblockGame:mapUnknown"),
            icon: dd.visited && null !== (Wd = dd.icon) && void 0 !== Wd ? Wd : "unknown",
            visited: dd.visited,
            current: !1,
            position: hd(dd.position),
            travelKind: "landmark",
            travelId: dd.id
          }
        })),
        Qd = dd.zones.map((Od => {
          var Wd;
          return {
            id: Od.id,
            name: md(Od.visited && Od.nameKey ? Od.nameKey : "skyblockGame:mapUnknown"),
            icon: Od.visited && null !== (Wd = Od.icon) && void 0 !== Wd ? Wd : "unknown",
            visited: Od.visited,
            current: Od.id === dd.zoneId,
            position: Od.position,
            thumbnail: Od.visited ? Od.id : void 0,
            travelKind: "zone",
            travelId: Od.id
          }
        })),
        td = dd.insideDungeon || !Kd ? [] : dd.portals.map((dd => {
          var Od;
          return {
            id: dd.id,
            name: md(null !== (Od = dd.nameKey) && void 0 !== Od ? Od : "skyblockGame:mapUnknown"),
            icon: dd.visited ? "dungeons" === dd.destination ? "portal_orange" : "portal" : "unknown",
            visited: dd.visited,
            current: !1,
            position: hd(dd.position),
            colour: dd.colour,
            travelKind: "zone",
            travelId: dd.destination
          }
        })),
        od = Rd ? vd : Qd,
        Nd = od.filter((dd => dd.visited)).length,
        qd = Kd ? (Kd.bounds.mapMaxX - Kd.bounds.mapMinX) / (Kd.bounds.mapMaxZ - Kd.bounds.mapMinZ) : 2,
        Hd = Kd ? JSON.stringify([Kd.bounds, dd.mapOrigin]) : "";
      return {
        local: Rd,
        points: od,
        portals: Rd ? td : [],
        progress: od.length ? md("skyblockGame:mapDiscovered", {
          current: String(Nd),
          total: String(od.length)
        }) : null,
        percent: od.length ? 100 * Nd / od.length : 0,
        canTravel: [...od, ...Rd ? td : []].some((dd => dd.visited && !dd.current)),
        noLandmarks: Rd && !dd.insideDungeon && 0 === vd.length,
        background: Kd ? {
          imageKey: Kd.imageKey,
          fallbackImageKey: dd.zoneId,
          geometryKey: Hd,
          label: md(Kd.labelKey),
          colour: Kd.backgroundColour,
          ratio: qd
        } : null,
        connections: Xd(dd.zones),
        minimap: Kd ? {
          imageKey: Kd.imageKey,
          fallbackImageKey: dd.zoneId,
          geometryKey: Hd,
          label: md(Kd.labelKey),
          colour: Kd.backgroundColour,
          caption: md(dd.zoneId === Wd ? "skyblockGame:zoneIsland" : Kd.labelKey),
          width: (Kd.bounds.mapMaxX - Kd.bounds.mapMinX) / Kd.minimapSpan * 100 + "%",
          height: (Kd.bounds.mapMaxZ - Kd.bounds.mapMinZ) / Kd.minimapSpan * 100 + "%",
          markers: [...vd, ...td]
        } : null
      }
    }

    function Xd(dd) {
      const Od = new Set;
      return dd.flatMap((md => md.connections.flatMap((Wd => {
        const Fd = dd.find((dd => dd.id === Wd)),
          Rd = [md.id, Wd].sort().join("|");
        return !Fd || Od.has(Rd) ? [] : (Od.add(Rd), [{
          id: `${md.id}-${Wd}`,
          start: md.position,
          end: Fd.position,
          explored: md.visited && Fd.visited
        }])
      }))))
    }
    var Kd = md(40087);
    class hd extends Kd.c {}
    const vd = "skyblockMapView";
    class Qd extends hd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(dd, Wd, Fd), this.requestTravel = Od, this.translate = md, this.now = Rd, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = dd => {
          this.tab = dd, this.feedbackKey = "", this.emit()
        }, this.travel = (dd, Od) => {
          if (!this.map || this.pending || this.Aq) return;
          const md = ("zone" === dd ? this.map.zones : this.map.landmarks).find((dd => dd.id === Od));
          if (md) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in md && !md.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (md.visited)
              if ("zone" === dd && Od === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const md = ++this.nextRequestId;
                this.pending = {
                  requestId: md,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: dd,
                  id: Od,
                  requestId: md
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
      setTranslator(dd) {
        this.translate = dd, this.emit()
      }
      Yt(dd) {
        var Od;
        if (!this.Aq)
          if ("entities" !== dd.kind)
            if ("open" !== dd.kind) {
              var md, Wd;
              if ("snapshot" === dd.kind)(null === (md = dd.snapshot) || void 0 === md ? void 0 : md.zoneId) !== (null === (Wd = this.map) || void 0 === Wd ? void 0 : Wd.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = dd.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === dd.kind) {
                var Fd;
                dd.requestId === (null === (Fd = this.pending) || void 0 === Fd ? void 0 : Fd.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (dd.requestId === (null === (Od = this.pending) || void 0 === Od ? void 0 : Od.requestId)) {
                var Rd;
                this.pending = null, this.feedbackKey = null !== (Rd = dd.errorKey) && void 0 !== Rd ? Rd : "", null === dd.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = dd.entities
      }
      Et() {
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
          presentation: this.map ? Rd(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var td = md(405);
    const od = 67.5 * Math.PI / 180;

    function Nd(dd, Od) {
      const md = Math.abs(dd);
      if (md > od || Od.trackHalfWidth <= 0) return null;
      const Wd = Od.trackHalfWidth,
        Fd = Od.screenHalfWidth / (Od.tanHalfFovX * Math.max(.5, Math.cos(Od.pitch))),
        Rd = Math.min(Math.atan(.6 * Wd / Fd), .75 * od),
        Xd = Fd * Math.tan(Rd);
      let Kd;
      if (md <= Rd) Kd = Fd * Math.tan(md);
      else {
        const dd = od - Rd,
          Od = Math.max(0, Fd * dd / (Math.cos(Rd) ** 2 * (Wd - Xd)) - 1),
          hd = (md - Rd) / dd;
        Kd = Xd + (Wd - Xd) * (1 + Od) * hd / (1 + Od * hd)
      }
      return 50 + Math.sign(dd) * Kd * 50 / Wd
    }
    class qd {
      constructor(dd, Od) {
        this.map = dd, this.visited = Od, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Od ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const dd = this.map.getSnapshot().map;
        return !dd || dd.insideDungeon ? [] : dd.landmarks.filter((dd => dd.visited === this.visited)).map((dd => {
          var Od, md;
          return {
            id: `landmark:${dd.id}`,
            position: dd.position,
            icon: null !== (Od = dd.icon) && void 0 !== Od ? Od : "unknown",
            nameKey: null !== (md = dd.nameKey) && void 0 !== md ? md : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Hd {
      constructor(dd, Od, md, Wd) {
        this.map = dd, this.kind = Od, this.position = md, this.alive = Wd, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Od, this.range = "enemy" === Od ? 48 : 64, this.limit = 12
      }
      hY(dd) {
        if ("enemy" !== this.kind || this.alive(dd.qm)) return this.position(dd.qm)
      }
      getPoints() {
        const dd = [];
        for (const Wd of this.map.getEntities()) {
          if (Wd.kind !== this.kind || "enemy" === this.kind && !this.alive(Wd.compassEntityId)) continue;
          const Fd = this.position(Wd.compassEntityId);
          var Od, md;
          if (Fd) dd.push({
            id: `${this.kind}:${Wd.compassEntityId}`,
            qm: Wd.compassEntityId,
            kind: this.kind,
            icon: null !== (Od = Wd.icon) && void 0 !== Od ? Od : Wd.npcSkin ? `npc_${Wd.npcSkin}` : this.kind,
            displayName: Wd.displayName,
            position: Fd,
            nameKey: null !== (md = Wd.nameKey) && void 0 !== md ? md : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return dd
      }
    }
    class yd {
      constructor(dd) {
        this.map = dd, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const dd = this.map.getSnapshot().map;
        return !dd || dd.insideDungeon ? [] : dd.portals.map((dd => {
          var Od;
          return {
            id: "portal:" + dd.id,
            kind: "portal",
            position: dd.position,
            nameKey: null !== (Od = dd.nameKey) && void 0 !== Od ? Od : "skyblockGame:compassUnvisitedZone",
            icon: dd.visited ? "dungeons" === dd.destination ? "portal_orange" : "portal" : "unknown",
            colour: dd.colour
          }
        }))
      }
    }
    class bd {
      constructor(dd) {
        this.target = dd, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const dd = this.target();
        return dd ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: dd.position,
          nameKey: dd.nameKey
        }] : []
      }
    }

    function Td(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.position;
      const Fd = Wd[0] - Od[0],
        Rd = Wd[2] - Od[2];
      return {
        ...dd,
        position: Wd,
        offset: td.b.computeShortestRotation(md, (0, td.rb)([Fd, 0, Rd])),
        distance: Math.hypot(Fd, Wd[1] - Od[1], Rd)
      }
    }
    let pd;

    function Yd(dd, Od) {
      var md;
      return (null === (md = pd) || void 0 === md ? void 0 : md.locale) !== Od && (pd = {
        locale: Od,
        near: new Intl.NumberFormat(Od, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Od, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (dd < 10 ? pd.near : pd.far).format(dd)
    }
    class gd {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(dd) {
        return this.providers.set(dd.id, dd), this.refreshAt = 0, () => {
          this.providers.get(dd.id) === dd && (this.providers.delete(dd.id), this.refreshAt = 0)
        }
      }
      frame(dd, Od, md) {
        if (md >= this.refreshAt) {
          this.refreshAt = md + 200, this.candidates = [];
          for (const Od of this.providers.values()) {
            if (!Od.enabled) continue;
            const md = Od.getPoints().map((Od => {
              const md = Od.position;
              return {
                point: Od,
                distance: Math.hypot(md[0] - dd[0], md[1] - dd[1], md[2] - dd[2])
              }
            })).filter((dd => dd.distance <= Od.range)).sort(((dd, Od) => dd.distance - Od.distance)).slice(0, Od.limit);
            for (const {
                point: dd
              }
              of md) this.candidates.push({
              provider: Od,
              point: dd
            })
          }
        }
        const Wd = [];
        for (const {
            point: Fd,
            provider: Rd
          }
          of this.candidates) {
          if (!Rd.enabled) continue;
          const md = Rd.hY ? Rd.hY(Fd) : Fd.position;
          if (md) {
            const Rd = Td(Fd, dd, Od, md);
            Math.abs(Rd.offset) <= od && Wd.push(Rd)
          }
        }
        return Wd
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var wd = md(3432),
      Ed = md(66);
    const Jd = [{
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
      Ud = Jd.length;

    function xd(dd) {
      return dd >= Ud ? 1 : dd + 1
    }
    const Bd = "skyblockQuests",
      Sd = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      sd = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function ud(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const md = Math.max(0, Math.floor(dd)),
        Wd = Math.floor(md % 1e3 / 100),
        Fd = Math.floor(md / 1e3),
        Rd = Fd % 60,
        Xd = Math.floor(Fd / 60),
        Kd = Xd % 60,
        hd = Math.floor(Xd / 60),
        vd = dd => dd < 10 ? `0${dd}` : String(dd),
        Qd = Od ? `.${Wd}` : "";
      return hd > 0 ? `${hd}:${vd(Kd)}:${vd(Rd)}${Qd}` : `${Kd}:${vd(Rd)}${Qd}`
    }
    const Vd = "devquests",
      Ad = "none",
      rd = {
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
      Gd = "Compressed Messy Stone",
      nd = {
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
      Ld = ["Stone", "Diorite", "Andesite", "Granite"],
      Pd = new Set(Ld),
      zd = (Object.keys(nd), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const cd = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function jd(dd, Od) {
      const md = Math.floor(5 * dd / (2 * Od + 1));
      return Math.min(4, Math.max(0, md))
    }
    var Dd = md(1300);
    var ed = md(37901);
    var Id = md(3428),
      ld = md(32),
      Cd = md(10023);
    const Zd = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      kd = 1e3;

    function fd(dd) {
      return Math.max(0, dd)
    }

    function Md(dd) {
      return 1 + .01 * fd(dd)
    }

    function dO(dd) {
      return 1 + .005 * fd(dd)
    }

    function OO(dd) {
      return 1 + .005 * fd(dd)
    }

    function mO(dd) {
      return .01 * fd(dd)
    }

    function WO(dd) {
      return 150 / (150 + fd(dd))
    }

    function FO(dd) {
      return 1 + .002 * fd(dd)
    }

    function RO(dd) {
      return Math.round(10 * dd) / 10
    }

    function XO(dd, Od) {
      switch (dd) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: RO(100 * (dO(Od) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: RO(100 * (Md(Od) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: RO(100 * (OO(Od) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: RO(100 * mO(Od))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: RO(100 * (1 - WO(Od)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: RO(100 * (FO(Od) - 1))
          }
      }
    }

    function KO(dd) {
      return "farming" === dd ? 200 : 100
    }

    function hO(dd, Od) {
      if (!Number.isSafeInteger(dd) || dd < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const md = KO(Od),
        Wd = dd => function(dd, Od) {
          return KO(dd) * Od * (Od + 1) / 2
        }(Od, dd);
      let Fd = Math.min(kd, Math.floor((Math.sqrt(8 * dd / md + 1) - 1) / 2));
      return Fd < kd && Wd(Fd + 1) <= dd ? Fd++ : Wd(Fd) > dd && Fd--, {
        totalXp: dd,
        level: Fd,
        xpIntoLevel: dd - Wd(Fd),
        xpForNextLevel: Fd === kd ? null : md * (Fd + 1)
      }
    }
    const vO = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function QO(dd) {
      return vO.has(dd)
    }
    const tO = new Set(td.eb);

    function oO(dd) {
      return tO.has(dd)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const NO = {
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
      qO = {
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
      HO = {
        ...qO,
        ...Object.fromEntries(Object.entries(zd).map((dd => {
          let [Od, md] = dd;
          return [Od, 9 * qO[md]]
        })))
      },
      yO = {
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
      bO = {
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
    const TO = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      pO = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function YO(dd) {
      return `rgb(${pO[dd].join(", ")})`
    }

    function gO(dd, Od, md) {
      if (!md) return dd(Od);
      const Wd = {};
      for (const [Fd, Rd] of Object.entries(md)) Wd[Fd] = "string" === typeof Rd ? Rd : dd(Rd.translationKey);
      return dd(Od, Wd)
    }
    class wO {
      constructor(dd, Od) {
        this.now = dd, this.getJournal = Od, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.jK = !1, this.onShown = () => {}
      }
      enqueue(dd) {
        const Od = aO(dd);
        if (Od) this.pending.push(dd);
        else {
          const Od = this.pending.findIndex(aO);
          this.pending.splice(-1 === Od ? this.pending.length : Od, 0, dd)
        }
        return (null === this.current || null !== this.followUp && !Od) && (this.advance(), !0)
      }
      setHeld(dd) {
        return this.jK = dd, !dd && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Et() {
        const dd = this.getJournal(),
          Od = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Od ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Od || void 0 === Od ? void 0 : Od.kind) && dd && dd.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Od || void 0 === Od ? void 0 : Od.kind)) {
          const dd = this.findFollowUp(this.current);
          if ("step" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || dd.questId !== Od.questId || dd.step.id !== Od.step.id) return this.showFollowUp(dd, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(dd, Od, md) {
        var Wd, Fd, Rd, Xd;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, dd, md);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, dd);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, dd, Od);
        const {
          questCompletionKind: Kd,
          questCompletionNameKey: hd
        } = this.current, vd = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Qd = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, td = "step" === (null === (Wd = this.followUp) || void 0 === Wd ? void 0 : Wd.kind) ? this.followUp : null, od = "explore" === (null === (Fd = this.followUp) || void 0 === Fd ? void 0 : Fd.kind);
        let Nd;
        return Nd = od ? dd("skyblockGame:questExploreTitle") : null !== td ? "quest" === Kd ? dd("skyblockGame:questNextQuestTitle", {
          quest: dd(td.questNameKey)
        }) : dd("skyblockGame:questNextStepTitle") : dd("started" === Kd ? "skyblockGame:questStartedTitle" : "quest" === Kd ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Kd : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Nd,
          name: od ? Od("skyblockGame:questExploreName") : null !== td ? gO(Od, td.step.nameKey, td.step.nameParams) : gO(Od, hd, vd),
          description: od ? Od("skyblockGame:questExploreDescription") : null === td ? null : gO(Od, td.step.descriptionKey, td.step.descriptionParams),
          reward: null === this.followUp && Qd > 0 ? Od("skyblockGame:questCoinRewardSuffix", {
            amount: Qd.toLocaleString(md)
          }) : null,
          iconItem: null !== (Rd = null === td || void 0 === td ? void 0 : td.step.questIconItem) && void 0 !== Rd ? Rd : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== td && (null === (Xd = this.getJournal()) || void 0 === Xd ? void 0 : Xd.trackedQuestId) === td.questId ? td.step.nameKey : null
        }
      }
      getSkillLevelView(dd, Od, md) {
        let {
          skill: Wd,
          beforeLevel: Fd,
          level: Rd
        } = dd;
        const Xd = XO(Wd, Fd),
          Kd = XO(Wd, Rd);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Od(`skyblockGame:${Wd}`),
          name: Od("skyblockGame:skillLevelUp", {
            to: Rd.toLocaleString(md)
          }),
          description: Xd.percent === Kd.percent ? null : Od(`${Kd.translationKey}Change`, {
            before: Xd.percent.toLocaleString(md),
            after: Kd.percent.toLocaleString(md)
          }),
          reward: null,
          iconItem: TO[Wd],
          accent: YO(Wd),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(dd, Od) {
        let {
          landmarkNameKey: md
        } = dd;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Od("skyblockGame:landmarkDiscovered"),
          name: Od(md),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(dd, Od, md) {
        let {
          titleKey: Wd,
          textKey: Fd,
          params: Rd = {},
          nameKeys: Xd = {},
          iconItem: Kd = null
        } = dd;
        const hd = {
          ...Rd
        };
        for (const [vd, Qd] of Object.entries(Xd)) hd[vd] = Od(Qd);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Od(Wd),
          name: md(Fd, hd),
          description: null,
          reward: null,
          iconItem: Kd,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var dd;
        if (null !== this.followUp) return 5600;
        switch (null === (dd = this.current) || void 0 === dd ? void 0 : dd.questCompletionKind) {
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
      showFollowUp(dd, Od) {
        null === dd || this.jK ? this.advance() : (this.followUp = dd, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Od && void 0 !== Od ? Od : this.shownAt + this.durationMs())
      }
      findFollowUp(dd) {
        var Od;
        const md = this.getJournal();
        if (!md || this.hasPendingQuestPopup() || aO(dd)) return null;
        const Wd = "started" === dd.questCompletionKind ? md.active.some((Od => Od.id === dd.questCompletionQuestId)) : "quest" === dd.questCompletionKind ? md.completed.some((Od => Od.id === dd.questCompletionQuestId)) : [...md.active, ...md.completed].some((Od => Od.id === dd.questCompletionQuestId && Od.subquests.some((Od => Od.id === dd.questCompletionStepId && "completed" === Od.status))));
        if (!Wd) return null;
        if ("quest" === dd.questCompletionKind && 0 === md.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Fd = md.active.find((dd => dd.id === md.trackedQuestId)),
          Rd = null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd.subquests.find((dd => "ready" === dd.status))) && void 0 !== Od ? Od : null === Fd || void 0 === Fd ? void 0 : Fd.subquests.find((dd => "active" === dd.status));
        return Rd ? {
          kind: "step",
          questId: Fd.id,
          questNameKey: Fd.nameKey,
          step: Rd
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((dd => !aO(dd)))
      }
      advance() {
        var dd;
        this.current = this.jK ? null : null !== (dd = this.pending.shift()) && void 0 !== dd ? dd : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function aO(dd) {
      return EO(dd.questCompletionKind)
    }

    function EO(dd) {
      return "skillLevel" === dd || "landmark" === dd || "npcNote" === dd
    }
    var JO = md(40091),
      UO = md(40094),
      xO = md(40057),
      BO = md(3008);
    const SO = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function sO(dd) {
      const Od = new BO.h(dd);
      return {
        radius: 45,
        squareness: 3,
        wobbles: SO.map((dd => {
          let {
            lobes: md,
            amount: Wd
          } = dd;
          return {
            lobes: md[Math.floor(Od.next() * md.length)],
            amount: Wd[0] + Od.next() * (Wd[1] - Wd[0]),
            phase: 2 * Od.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function uO(dd) {
      let {
        radius: Od,
        squareness: md,
        wobbles: Wd,
        samples: Fd
      } = dd;
      const Rd = [];
      for (let Xd = 0; Xd < Fd; Xd++) {
        const dd = 2 * Math.PI * Xd / Fd,
          Kd = Math.cos(dd),
          hd = Math.sin(dd),
          vd = Od * (Math.abs(Kd) ** md + Math.abs(hd) ** md) ** (-1 / md) * Wd.reduce(((Od, md) => {
            let {
              lobes: Wd,
              amount: Fd,
              phase: Rd
            } = md;
            return Od + Fd * Math.sin(Wd * dd + Rd)
          }), 1);
        Rd.push(`${(50+vd*Kd).toFixed(2)} ${(50+vd*hd).toFixed(2)}`)
      }
      return `M${Rd.join("L")}Z`
    }
    const VO = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class iO {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Aq = !1, this.mountCompass = dd => {
          var Od;
          if (null === (Od = this.stopLayout) || void 0 === Od || Od.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !dd || this.Aq) return;
          const md = dd.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: dd,
            track: md,
            label: dd.querySelector(".SkyblockCompassLabel")
          }, md.replaceChildren();
          for (let Fd = 0; Fd < 4; Fd++) {
            const dd = document.createElement("span");
            dd.className = "SkyblockCompassCardinal", md.appendChild(dd), this.cardinals.push(dd)
          }
          const Wd = (0, xO.b)(VO, [dd], this.layout);
          this.stopLayout = () => {
            Wd(), md.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = dd => {
          this.terrain = this.Aq ? null : dd, this.render(this.frame)
        }, this.mountMinimapSearchArea = dd => {
          this.mountSearchArea("minimap", dd)
        }, this.mountMapSearchArea = dd => {
          this.mountSearchArea("map", dd)
        }, this.mountPlayer = dd => {
          this.player = this.Aq ? null : dd, this.render(this.frame)
        }, this.mountWaypoint = dd => {
          var Od, md;
          if (null === (Od = this.stopWaypoint) || void 0 === Od || Od.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !dd || this.Aq) return;
          const Wd = dd.querySelector(".SkyblockQuestWaypointMarker");
          Wd.replaceChildren((0, UO.e)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: dd,
            marker: Wd,
            clip: dd.querySelector(".SkyblockQuestWaypointTextClip"),
            text: dd.querySelector(".SkyblockQuestWaypointText"),
            label: dd.querySelector(".SkyblockQuestWaypointLabel"),
            distance: dd.querySelector(".SkyblockQuestWaypointDistance"),
            hint: dd.querySelector(".SkyblockQuestWaypointHint")
          };
          const Fd = () => {
              this.waypointMarkerSize = {
                width: Wd.offsetWidth,
                height: Wd.offsetHeight
              }, this.waypointInset = {
                x: Wd.offsetWidth / 2 + 8,
                top: Wd.offsetHeight + 8,
                bottom: 8
              }
            },
            Rd = new ResizeObserver((() => {
              Fd(), this.render(this.frame)
            }));
          Rd.observe(Wd, {
            box: "border-box"
          });
          const Xd = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Xd), null === (md = window.visualViewport) || void 0 === md || md.addEventListener("resize", Xd), this.stopWaypoint = () => {
            var dd;
            Rd.disconnect(), window.removeEventListener("resize", Xd), null === (dd = window.visualViewport) || void 0 === dd || dd.removeEventListener("resize", Xd)
          }, Xd(), Fd(), this.render(this.frame)
        }, this.mountWaypointOrigin = dd => {
          var Od;
          if (null === (Od = this.stopWaypointOrigin) || void 0 === Od || Od.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = dd && !this.Aq ? Number(dd.dataset.notificationToken) : null, dd && !this.Aq && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Od = {
              nameKey: dd.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Od;
            const md = () => {
                const md = dd.getBoundingClientRect();
                Od.x = (md.left + md.width / 2) / window.innerWidth * 100, Od.y = (md.top + md.height / 2) / window.innerHeight * 100
              },
              Wd = new ResizeObserver(md);
            Wd.observe(dd.parentElement), Wd.observe(dd), window.addEventListener("resize", md), this.stopWaypointOrigin = () => {
              Wd.disconnect(), window.removeEventListener("resize", md)
            }, md()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const dd = this.compass.root,
            Od = getComputedStyle(dd),
            md = getComputedStyle(document.documentElement),
            Wd = parseFloat(md.fontSize),
            Fd = parseFloat(Od.getPropertyValue("--compass-icon-size")) * Wd,
            Rd = "1" === Od.getPropertyValue("--compass-fit-top").trim(),
            Xd = Rd ? 1 : 8,
            Kd = Array.from(document.querySelectorAll(VO), (dd => {
              var Od;
              return (null !== (Od = dd.querySelector(".MiddleTextTop")) && void 0 !== Od ? Od : dd).getBoundingClientRect()
            })).filter((dd => dd.width > 0 && dd.height > 0));
          let hd = (parseFloat(md.getPropertyValue("--notchTop")) || 0) + Xd,
            vd = "";
          if (Rd) {
            const Od = window.innerWidth / 2,
              md = dd.getBoundingClientRect().height,
              Rd = [hd, ...Kd.map((dd => Math.max(hd, dd.bottom + Xd)))].sort(((dd, Od) => dd - Od));
            for (const dd of Rd) {
              let Rd = Od - 8;
              for (const Wd of Kd) Wd.bottom + Xd <= dd || Wd.top >= dd + md + Xd || (Rd = Math.min(Rd, Wd.right <= Od ? Od - Wd.right - 8 : Wd.left - Od - 8));
              const Qd = 2 * Rd - Fd;
              if (Qd >= 16 * Wd) {
                vd = `${Qd}px`, hd = dd;
                break
              }
            }
          }
          dd.style.maxWidth !== vd && (dd.style.maxWidth = vd);
          const Qd = dd.getBoundingClientRect(),
            td = this.compassSize.trackHalfWidth;
          if (Qd.width > 0) {
            const dd = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: dd.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Fd / dd.width
          }
          if (!vd)
            for (const od of Kd) od.right > Qd.left - 8 && od.left < Qd.right + 8 && (hd = Math.max(hd, od.bottom + Xd));
          dd.style.top = `${hd}px`, this.compassSize.trackHalfWidth !== td && this.render(this.frame)
        }
      }
      mountSearchArea(dd, Od) {
        this.searchAreas[dd] = this.Aq ? null : Od, this.render(this.frame)
      }
      render(dd) {
        if (this.Aq) return;
        if (this.frame = dd, this.compass && (AO(this.compass.root, !dd), dd)) {
          const Od = this.compassSize.trackHalfWidth / 50;
          dd.compass.cardinals.forEach(((dd, md) => {
            const Wd = this.cardinals[md];
            Wd.textContent !== dd.name && (Wd.textContent = dd.name), AO(Wd, dd.hidden), Wd.style.translate = dd.left * Od + "px"
          }));
          const md = new Set;
          dd.compass.markers.forEach(((Wd, Fd) => {
            var Rd;
            md.add(Wd.id);
            let Xd = this.markers.get(Wd.id);
            Xd || (Xd = document.createElement("span"), Xd.className = "SkyblockCompassMarker", this.markers.set(Wd.id, Xd), this.compass.track.appendChild(Xd)), Xd.dataset.icon !== Wd.icon && (Xd.dataset.icon = Wd.icon, Xd.replaceChildren((0, UO.e)(Wd.icon))), Xd.style.color = null !== (Rd = Wd.colour) && void 0 !== Rd ? Rd : "", Xd.style.translate = Wd.left * Od + "px", Xd.style.zIndex = String(dd.compass.markers.length - Fd), Xd.title !== Wd.name && (Xd.title = Wd.name)
          }));
          for (const [dd, Wd] of this.markers) md.has(dd) || (Wd.remove(), this.markers.delete(dd));
          this.compass.label.textContent !== dd.compass.label && (this.compass.label.textContent = dd.compass.label)
        }
        this.terrain && (AO(this.terrain, !(null !== dd && void 0 !== dd && dd.minimap)), null !== dd && void 0 !== dd && dd.minimap && (this.terrain.style.transform = dd.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", dd.minimap.iconRotation)));
        const Od = null === dd || void 0 === dd ? void 0 : dd.searchArea;
        for (const md of [this.searchAreas.minimap, this.searchAreas.map])
          if (md && (AO(md, !Od), Od)) {
            if (this.searchAreaPath.seed !== Od.shapeSeed && (this.searchAreaPath = {
                seed: Od.shapeSeed,
                d: uO(sO(Od.shapeSeed))
              }), md.dataset.shapeSeed !== Od.shapeSeed) {
              md.dataset.shapeSeed = Od.shapeSeed;
              for (const dd of md.querySelectorAll("path")) dd.setAttribute("d", this.searchAreaPath.d)
            }
            md.style.left = `${Od.left}%`, md.style.top = `${Od.top}%`, md.style.width = `${Od.width}%`, md.style.height = `${Od.height}%`
          } if (this.player && (AO(this.player, !(null !== dd && void 0 !== dd && dd.player) || dd.player.hidden), null !== dd && void 0 !== dd && dd.player && (this.player.style.left = `${dd.player.left}%`, this.player.style.top = `${dd.player.top}%`, this.player.style.setProperty("--map-player-rotation", dd.player.rotation))), this.waypoint) {
          const {
            root: Od,
            marker: md,
            clip: Wd,
            text: Fd,
            label: Rd,
            distance: Xd,
            hint: Kd
          } = this.waypoint, hd = !(null !== dd && void 0 !== dd && dd.waypoint) || null !== dd.waypoint.popupToken && dd.waypoint.popupToken !== this.waypointOriginToken;
          AO(Od, hd);
          let vd = 1;
          const Qd = this.waypointLaunch;
          if (!hd && Qd && dd.waypoint.nameKey === Qd.nameKey) {
            const dd = performance.now();
            Qd.startedAt ??= dd, vd = Math.min(1, Math.max(0, (dd - Qd.startedAt - 450) / 1e3)), md.style.opacity = String(Math.min(1, (dd - Qd.startedAt) / 150)), 1 === vd && (this.waypointLaunch = null)
          } else md.style.opacity = "", Qd && null !== Qd.startedAt && (this.waypointLaunch = null);
          if (Od.classList.toggle("Launching", vd < 1), null !== dd && void 0 !== dd && dd.waypoint) {
            const Od = this.waypointInset,
              hd = "quest_talk" === dd.waypoint.markerIcon ? function(dd, Od, md) {
                if (!dd.text || null === dd.blockHeight || 0 === dd.nearness) return dd;
                const Wd = dd.blockHeight / 100 * md.height,
                  Fd = -dd.nearness * (rO * Wd + Od.width / 2),
                  Rd = dd.nearness * (GO * Wd + Od.height / 2);
                return {
                  ...dd,
                  text: {
                    x: dd.text.x + Fd / md.width * 100,
                    y: dd.text.y + Rd / md.height * 100
                  }
                }
              }(dd.waypoint, this.waypointMarkerSize, this.viewport) : dd.waypoint,
              td = (0, JO.b)(hd, Od, this.viewport),
              od = vd * vd * (3 - 2 * vd),
              Nd = vd < 1 ? Qd.x + (td.x - Qd.x) * od : td.x,
              qd = vd < 1 ? Qd.y + (td.y - Qd.y) * od : td.y;
            md.style.translate = `${Nd}vw ${qd}vh`, Wd.style.clipPath = `inset(${Od.top}px ${Od.x}px ${Od.bottom}px)`, AO(Fd, vd < 1 || !dd.waypoint.text), Fd.style.opacity = String(1 - dd.waypoint.nearness), dd.waypoint.text && (Fd.style.translate = `${dd.waypoint.text.x}vw ${dd.waypoint.text.y}vh`), Rd.textContent !== dd.waypoint.name && (Rd.textContent = dd.waypoint.name), this.markerIcon !== dd.waypoint.markerIcon && (this.markerIcon = dd.waypoint.markerIcon, md.replaceChildren((0, UO.e)(this.markerIcon))), Xd.textContent !== dd.waypoint.distance && (Xd.textContent = dd.waypoint.distance), AO(Kd, null === dd.waypoint.hint), null !== dd.waypoint.hint && Kd.textContent !== dd.waypoint.hint && (Kd.textContent = dd.waypoint.hint)
          }
        }
      }
      dispose() {
        var dd, Od;
        this.mountWaypointOrigin(null), this.render(null), null === (dd = this.stopLayout) || void 0 === dd || dd.call(this), this.stopLayout = null, null === (Od = this.stopWaypoint) || void 0 === Od || Od.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Aq = !0
      }
    }

    function AO(dd, Od) {
      dd.hidden !== Od && (dd.hidden = Od)
    }
    const rO = .55,
      GO = .6;
    var nO = md(40080);
    const LO = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class PO {
      constructor(dd, Od, md, Wd) {
        this.map = dd, this.quests = Od, this.compass = md, this.display = new iO, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Aq = !1, this.snapshot = null, this.texts = new Map, this.translate = Wd
      }
      setTranslator(dd, Od) {
        this.translate = dd, this.locale = Od, this.metresFormat = new Intl.NumberFormat(Od), this.texts.clear()
      }
      translateCached(dd, Od) {
        const md = void 0 === Od ? dd : `${dd} ${Od}`;
        let Wd = this.texts.get(md);
        return void 0 === Wd && (this.texts.size >= 500 && this.texts.clear(), Wd = this.translate(dd, void 0 === Od ? void 0 : {
          distance: Od
        }), this.texts.set(md, Wd)), Wd
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(dd, Od, md) {
        if (this.Aq) return;
        if (!dd) return this.snapshot = null, void this.display.render(null);
        const Wd = this.map.getSnapshot().map,
          Rd = md.cameraHeading,
          Xd = {
            ...this.display.compassSize,
            tanHalfFovX: md.tanHalfFovX,
            pitch: md.cameraPitch
          },
          Kd = [];
        if (Wd)
          for (const Fd of this.compass.frame(dd, Rd, Od)) {
            const dd = Nd(Fd.offset, Xd);
            null !== dd && Kd.push({
              ...Fd,
              left: dd
            })
          }
        const hd = function(dd, Od) {
            const md = [],
              Wd = dd => "quest" === dd.kind ? dd.distance - 1 : dd.distance,
              Fd = [...dd].sort(((dd, Od) => Wd(dd) - Wd(Od) || dd.id.localeCompare(Od.id)));
            for (const Rd of Fd) {
              let dd = !1;
              if ("quest" !== Rd.kind)
                for (const Wd of md)
                  if (Math.abs(Wd.left - Rd.left) < Od) {
                    dd = !0;
                    break
                  } dd || md.push(Rd)
            }
            return md
          }(Kd, this.display.compassSpacing),
          vd = function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              md = null;
            for (const Wd of dd) Math.abs(Wd.offset) <= Od && (!md || Wd.distance < md.distance || Wd.distance === md.distance && Math.abs(Wd.offset) < Math.abs(md.offset)) && (md = Wd);
            return md
          }(hd),
          Qd = dd => {
            var Od;
            return null !== (Od = dd.displayName) && void 0 !== Od ? Od : this.translateCached(dd.nameKey)
          },
          od = {
            compass: {
              markers: hd.map((dd => ({
                id: dd.id,
                icon: dd.icon,
                colour: dd.colour,
                name: Qd(dd),
                left: dd.left
              }))),
              cardinals: nO.e.map((dd => {
                let {
                  name: Od,
                  bearing: md
                } = dd;
                const Wd = Nd(td.b.computeShortestRotation(Rd, md), Xd);
                return {
                  name: Od,
                  left: null !== Wd && void 0 !== Wd ? Wd : 0,
                  hidden: null === Wd
                }
              })),
              label: vd ? `${Qd(vd)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Yd(vd.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Wd && void 0 !== Wd && Wd.background) {
          const Od = dd[0] - Wd.mapOrigin[0],
            md = dd[2] - Wd.mapOrigin[2],
            {
              rotation: Xd,
              transform: Kd
            } = (0, Fd.d)(Od, md, Rd, Wd.background.bounds);
          od.minimap = {
            transform: Kd,
            iconRotation: -Xd + "rad"
          };
          const [hd, vd] = (0, Fd.b)(Od, md, Wd.background.bounds);
          od.player = {
            left: hd,
            top: vd,
            hidden: hd < 0 || vd < 0 || hd > 100 || vd > 100,
            rotation: -Xd + "rad"
          }
        }
        const {
          waypoint: qd
        } = this.quests.getSnapshot();
        if ("search" === (null === qd || void 0 === qd ? void 0 : qd.questMarkerIcon) && null !== Wd && void 0 !== Wd && Wd.background) {
          const {
            bounds: dd
          } = Wd.background, [Od, md] = (0, Fd.b)(qd.position[0] - Wd.mapOrigin[0], qd.position[2] - Wd.mapOrigin[2], dd);
          od.searchArea = {
            left: Od,
            top: md,
            width: 6400 / (dd.mapMaxX - dd.mapMinX),
            height: 6400 / (dd.mapMaxZ - dd.mapMinZ),
            shapeSeed: qd.nameKey
          }
        }
        const Hd = this.quests.getNotificationSnapshot(),
          yd = "completion" === (null === Hd || void 0 === Hd ? void 0 : Hd.phase) && !EO(Hd.kind);
        if (qd && !yd) {
          const Od = Math.hypot(...qd.position.map(((Od, md) => Od - dd[md]))),
            Wd = Math.round(Od),
            Fd = "talk" === qd.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Od) / 5)) : 0,
            Rd = md.projectWorldPosToViewport(qd.position),
            Xd = Rd && md.projectWorldPosToViewport([qd.position[0], qd.position[1] - 1, qd.position[2]]);
          od.waypoint = {
            ...md.projectWorldPosToScreenPos(qd.position),
            text: Rd,
            nearness: Fd * Fd * (3 - 2 * Fd),
            blockHeight: Rd && Xd ? Xd.y - Rd.y : null,
            name: this.translateCached(qd.nameKey),
            nameKey: qd.nameKey,
            markerIcon: qd.questMarkerIcon ? LO[qd.questMarkerIcon] : "quest",
            popupToken: (null === Hd || void 0 === Hd ? void 0 : Hd.waypointNameKey) === qd.nameKey ? Hd.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Wd)),
            hint: "search" === qd.questMarkerIcon && Math.hypot(qd.position[0] - dd[0], qd.position[2] - dd[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = od, this.display.render(od)
      }
      dispose() {
        this.Aq = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const zO = "skyblockSkillsView";
    class cO extends hd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          md = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd => dd,
          Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Fd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => dd;
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Od, this.translate = md, this.locale = Wd, this.itemName = Fd, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = dd => {
          this.selected = dd, this.emit()
        }
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, this.locale = Od, this.itemName = md, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(dd) {
        let Od = this.skillText.get(dd);
        return Od || (Od = {
          label: this.translate(`skyblockGame:${dd}`),
          description: this.translate(`skyblockGame:${dd}Description`)
        }, this.skillText.set(dd, Od)), Od
      }
      sources(dd) {
        if ("mining" === dd || "fishing" === dd) return this.buildSources(dd);
        let Od = this.sourceText.get(dd);
        return Od || (Od = this.buildSources(dd), this.sourceText.set(dd, Od)), Od
      }
      buildSources(dd) {
        const Od = this.translate;
        return "exploration" === dd ? [Od("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Od("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === dd ? [Od("skyblockGame:logSource", {
          xp: this.number(NO["Maple Log"])
        })] : "combat" === dd ? [Od("skyblockGame:creatureKillSource"), Od("skyblockGame:noEnvironmentalXp")] : "farming" === dd ? [Od("skyblockGame:cropSource", {
          xp: this.number(yO["Wheat|FreshlyGrown"])
        }), Od("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Od("skyblockGame:noYoungCropXp")] : Object.entries("mining" === dd ? HO : bO).map((dd => {
          let [md, Wd] = dd;
          return Od("skyblockGame:itemXpSource", {
            item: this.itemName(md),
            xp: this.number(Wd)
          })
        }))
      }
      number(dd) {
        return dd.toLocaleString(this.locale)
      }
      benefit(dd, Od) {
        const md = XO(dd, Od);
        return this.translate(md.translationKey, {
          bonus: this.number(md.percent)
        })
      }
      Yt(dd) {
        if (!this.Aq) {
          if ("snapshot" === dd.kind) this.progress = dd.progress, this.pending.clear(), this.recent = null;
          else if ("award" === dd.kind && this.progress) {
            const {
              award: Od
            } = dd;
            this.progress = {
              ...this.progress,
              [Od.skill]: Od.after
            };
            for (const [dd, Wd] of this.pending) Wd.skill === Od.skill && this.pending.delete(dd);
            const md = Od.after.level > Od.before.level;
            this.recordGain(Od.skill, Od.amount, md ? ++this.nextLevelUpToken : null), md && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Od.skill,
              beforeLevel: Od.before.level,
              level: Od.after.level
            })
          } else {
            if ("rejectBlock" === dd.kind) return void this.rejectBlock(dd.position);
            if ("open" === dd.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(dd, Od, md) {
        if (!this.progress || this.Aq || md) return;
        const Wd = function(dd, Od) {
          const md = dd.split("|")[0];
          return "Air" === Od || Od === `Barkless ${dd}` ? Object.hasOwn(NO, md) ? {
            skill: "foraging",
            amount: NO[md]
          } : "Air" !== Od ? null : Object.hasOwn(HO, dd) ? {
            skill: "mining",
            amount: HO[dd]
          } : QO(dd) ? {
            skill: "farming",
            amount: 10
          } : oO(dd) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(yO, dd) ? {
            skill: "farming",
            amount: yO[dd]
          } : Object.hasOwn(nd, dd) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Od, "Air");
        if (!Wd) return;
        const Fd = dd.join(",");
        if (this.pending.has(Fd)) return;
        const Rd = this.predictedProgress(Wd.skill).totalXp + Wd.amount;
        Number.isSafeInteger(Rd) && (this.pending.set(Fd, {
          ...Wd,
          expires: this.now() + 2e3
        }), this.recordGain(Wd.skill, 0), this.emit())
      }
      rejectBlock(dd) {
        this.pending.delete(dd.join(",")) && this.emit()
      }
      Et() {
        if (this.Aq) return;
        let dd = !1;
        for (const [Od, md] of this.pending) md.expires <= this.now() && (this.pending.delete(Od), dd = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, dd = !0), dd && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(dd, Od) {
        var md, Wd;
        let Fd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Rd = (null === (md = this.recent) || void 0 === md ? void 0 : md.skill) === dd && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Xd = (null === (Wd = this.recent) || void 0 === Wd ? void 0 : Wd.skill) === dd && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: dd,
          confirmed: Rd + Od,
          expires: this.now() + 3e3,
          levelUpToken: null !== Fd && void 0 !== Fd ? Fd : Xd
        }
      }
      pendingXp(dd) {
        let Od = 0;
        for (const md of this.pending.values()) md.skill === dd && (Od += md.amount);
        return Od
      }
      predictedProgress(dd) {
        const Od = this.progress[dd],
          md = this.pendingXp(dd);
        return md ? hO(Od.totalXp + md, dd) : Od
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var dd, Od, md;
        const Wd = this.progress ? Zd.map((dd => {
            const Od = this.predictedProgress(dd);
            return {
              ...this.text(dd),
              icon: TO[dd],
              benefit: this.benefit(dd, Od.level),
              sources: this.sources(dd),
              id: dd,
              selected: dd === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Od.level)
              }),
              xp: null === Od.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Od.xpIntoLevel),
                target: this.number(Od.xpForNextLevel)
              }),
              percent: null === Od.xpForNextLevel ? 100 : Math.min(100, Od.xpIntoLevel / Od.xpForNextLevel * 100)
            }
          })) : [],
          Fd = Wd.find((dd => {
            var Od;
            return dd.id === (null === (Od = this.recent) || void 0 === Od ? void 0 : Od.skill)
          })),
          Rd = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Wd,
          detail: null !== (dd = Wd.find((dd => dd.selected))) && void 0 !== dd ? dd : null,
          overallLevel: this.progress ? Zd.reduce(((dd, Od) => dd + this.predictedProgress(Od).level), 0) : null,
          hud: Fd && Rd > 0 ? {
            skill: Fd,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Rd)
            }),
            levelUpToken: null !== (Od = null === (md = this.recent) || void 0 === md ? void 0 : md.levelUpToken) && void 0 !== Od ? Od : null,
            colour: YO(Fd.id)
          } : null
        }
      }
    }
    const jO = Math.max(1600, 600, 950) + 400,
      DO = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      eO = "skyblockQuestsView",
      IO = "skyblockQuestNotificationView";
    class lO extends hd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Xd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(dd, Wd, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Od, this.translate = md, this.now = Fd, this.locale = Rd, this.publishNotification = Xd, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var dd, Od;
          this.selected = null !== (dd = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.trackedQuestId) && void 0 !== dd ? dd : null, this.show()
        }, this.select = dd => {
          this.selected = dd, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const dd = this.snapshot.detail;
          !this.Aq && null !== dd && void 0 !== dd && dd.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(dd.id), this.emit())
        }, this.viewDialogue = () => {
          const dd = this.snapshot.detail;
          var Od;
          dd && (null === (Od = this.onViewDialogue) || void 0 === Od || Od.call(this, dd.id))
        }, this.notifications = new wO(Fd, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var dd, Od;
        return null !== (dd = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.trackedQuestId) && void 0 !== dd ? dd : null
      }
      notify(dd) {
        !this.Aq && this.notifications.enqueue(dd) && this.emitNotification()
      }
      setNotificationsHeld(dd) {
        (this.notifications.setHeld(dd) || dd) && this.emitNotification()
      }
      Et() {
        var dd, Od;
        if (this.Aq) return;
        this.notifications.Et() && this.emitNotification();
        let md = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, md = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, md = !0);
        const Wd = CO(this.authoritative);
        null !== Wd && void 0 !== Wd && null !== (dd = Wd.questClock) && void 0 !== dd && dd.running && this.clockText(Wd) !== (null === (Od = this.snapshot.tracked) || void 0 === Od ? void 0 : Od.clock) && (md = !0), md && this.emit()
      }
      setTranslator(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = dd, this.locale = Od, this.emitNotification(), this.emit()
      }
      Yt(dd) {
        if (!this.Aq)
          if ("completion" === dd.kind) this.notify(dd.questCompletion);
          else if ("landmark" === dd.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: dd.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === dd.kind) {
          var Od, md, Wd;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: dd.npcNoteTitleKey,
            textKey: dd.npcNoteTextKey,
            params: null !== (Od = dd.npcNoteParams) && void 0 !== Od ? Od : {},
            nameKeys: null !== (md = dd.npcNoteNameKeys) && void 0 !== md ? md : {},
            iconItem: null !== (Wd = dd.npcNoteIconItem) && void 0 !== Wd ? Wd : null
          })
        } else if ("open" === dd.kind) this.show();
        else if ("guidance" === dd.kind) this.waypoint = dd.waypoint, this.compassTarget = dd.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === dd.kind) {
          this.authoritative = dd.snapshot, this.notifications.Et() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Od = this.trackedStepPulse;
          this.updateTrackedStepPulse(dd.snapshot), this.emit(), this.trackedStepPulse > Od && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Aq || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var dd;
        return null !== (dd = this.translateWithIcons) && void 0 !== dd ? dd : this.translate
      }
      clockText(dd) {
        const Od = dd.questClock;
        if (!Od) return null;
        const md = Od.elapsedMs + (Od.running ? this.now() - this.receivedAt : 0);
        return void 0 === Od.countdownFromMs ? ud(md, !1) : ud(1e3 * Math.ceil(Math.max(0, Od.countdownFromMs - md) / 1e3), !1)
      }
      updateTrackedStepPulse(dd) {
        var Od, md, Wd;
        const Fd = CO(dd);
        if (!Fd) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Rd = dd => Fd.subquests.filter((Od => dd(Od.status))).map((dd => dd.id)),
          Xd = Rd((dd => "completed" === dd || "skipped" === dd)),
          Kd = Rd((dd => "locked" !== dd)),
          hd = (null === (Od = this.trackedSteps) || void 0 === Od ? void 0 : Od.questId) === Fd.id && Fd.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (hd) {
          const dd = Xd.filter((dd => !hd.finished.has(dd))),
            Od = Rd((dd => "active" === dd || "ready" === dd)).filter((dd => !hd.unlocked.has(dd)));
          dd.length > 0 && this.trackedStepPulse++, (dd.length > 0 || Od.length > 0) && (this.trackedChange = {
            finished: new Set(dd),
            unlocked: new Set(Od),
            expiresAt: this.now() + jO
          })
        } else {
          var vd;
          this.trackedStepPulse = (null === (vd = this.trackedSteps) || void 0 === vd ? void 0 : vd.questId) === Fd.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Fd.id,
          progress: Fd.progress,
          finished: new Set([...null !== (md = null === hd || void 0 === hd ? void 0 : hd.finished) && void 0 !== md ? md : [], ...Xd]),
          unlocked: new Set([...null !== (Wd = null === hd || void 0 === hd ? void 0 : hd.unlocked) && void 0 !== Wd ? Wd : [], ...Kd])
        }
      }
      entry(dd, Od) {
        var md, Wd;
        const Fd = dd.id === (null === (md = this.authoritative) || void 0 === md ? void 0 : md.trackedQuestId),
          Rd = this.now() < this.trackAvailableAt,
          Xd = this.questTextTranslator(),
          Kd = dd.subquests.map((Od => {
            var md, Wd, Rd, Kd, hd, vd;
            const Qd = null !== (md = Od.handInNpcName) && void 0 !== md ? md : dd.giverName,
              td = this.translate("skyblockGame:progress", {
                current: Od.progress.toLocaleString(this.locale),
                target: Od.target.toLocaleString(this.locale)
              }),
              od = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Qd ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Od.status],
              Nd = "active" === Od.status || "ready" === Od.status;
            return {
              id: Od.id,
              name: gO(Xd, Od.nameKey, Od.nameParams),
              description: gO(Xd, Od.descriptionKey, Od.descriptionParams),
              progress: td,
              status: Od.status,
              statusLabel: od ? this.translate(od, {
                npc: Qd
              }) : td,
              iconItem: Nd && null !== (Wd = Od.questIconItem) && void 0 !== Wd ? Wd : null,
              barPercent: "active" === Od.status && Od.showsProgressBar ? Math.min(100, 100 * Od.progress / Od.target) : null,
              justFinished: Fd && null !== (Rd = null === (Kd = this.trackedChange) || void 0 === Kd ? void 0 : Kd.finished.has(Od.id)) && void 0 !== Rd && Rd,
              justUnlocked: Fd && null !== (hd = null === (vd = this.trackedChange) || void 0 === vd ? void 0 : vd.unlocked.has(Od.id)) && void 0 !== hd && hd
            }
          }));
        return {
          id: dd.id,
          name: gO(Xd, dd.nameKey, dd.nameParams),
          description: gO(Xd, dd.descriptionKey, dd.descriptionParams),
          progress: Od ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: dd.progress.toLocaleString(this.locale),
            target: dd.target.toLocaleString(this.locale)
          }),
          completed: Od,
          tracked: Fd,
          selected: dd.id === this.selected,
          canTrack: !Od && !Fd && !Rd,
          trackLabel: this.translate(Fd ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Rd ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== dd.id,
          subquests: Kd,
          focusStep: null !== (Wd = Kd.find((dd => null !== dd.barPercent))) && void 0 !== Wd ? Wd : null,
          clock: this.clockText(dd)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd;
        const Qd = [...null !== (dd = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.active) && void 0 !== dd ? dd : [], ...null !== (md = null === (Wd = this.authoritative) || void 0 === Wd ? void 0 : Wd.completed) && void 0 !== md ? md : []];
        var td, od, Nd, qd;
        Qd.some((dd => dd.id === this.selected)) || (this.selected = null !== (td = null !== (od = null === (Nd = this.authoritative) || void 0 === Nd ? void 0 : Nd.trackedQuestId) && void 0 !== od ? od : null === (qd = Qd[0]) || void 0 === qd ? void 0 : qd.id) && void 0 !== td ? td : null);
        const Hd = null !== (Fd = null === (Rd = this.authoritative) || void 0 === Rd ? void 0 : Rd.active.map((dd => this.entry(dd, !1)))) && void 0 !== Fd ? Fd : [];
        Hd.sort(((dd, Od) => Number(Od.tracked) - Number(dd.tracked)));
        const yd = null !== (Xd = null === (Kd = this.authoritative) || void 0 === Kd ? void 0 : Kd.completed.map((dd => this.entry(dd, !0)))) && void 0 !== Xd ? Xd : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Hd,
          completed: yd,
          completedExpanded: this.completedExpanded,
          detail: null !== (hd = [...Hd, ...yd].find((dd => dd.selected))) && void 0 !== hd ? hd : null,
          tracked: null !== (vd = Hd.find((dd => dd.tracked))) && void 0 !== vd ? vd : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function CO(dd) {
      var Od;
      return null !== (Od = null === dd || void 0 === dd ? void 0 : dd.active.find((Od => Od.id === dd.trackedQuestId))) && void 0 !== Od ? Od : null
    }
    const ZO = "skyblockDungeonsView";
    class kO extends hd {
      constructor(dd, Od) {
        let md = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Od, this.locale = md, this.requestEnter = Wd, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = dd => {
          this.selected = dd, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const dd = this.pickerEntry(),
            Od = null === dd || void 0 === dd ? void 0 : dd.difficulties[this.pageIndex];
          void 0 !== Od && null !== Od.unlockedBoss && (this.close(), this.requestEnter(dd.id, Od.difficulty))
        }
      }
      setTranslator(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = dd, this.locale = Od, this.emit()
      }
      Yt(dd) {
        var Od, md;
        if (!this.Aq) return "open" === dd.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== dd.kind ? "snapshot" === dd.kind && (this.authoritative = dd.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Od = null === (md = this.pickerEntry()) || void 0 === md ? void 0 : md.difficulties.length) && void 0 !== Od ? Od : 1) - 1)), null === dd.snapshot && this.open ? this.close() : this.emit()) : this.choose(dd.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(dd) {
        var Od;
        const md = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.dungeons.find((Od => Od.id === dd));
        void 0 !== md ? this.open && this.pickerDungeonId === dd || (this.pickerDungeonId = dd, this.pageIndex = Math.max(0, md.difficulties.findLastIndex((dd => null !== dd.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${dd}`)
      }
      turnTo(dd) {
        var Od, md;
        const Wd = null !== (Od = null === (md = this.pickerEntry()) || void 0 === md ? void 0 : md.difficulties.length) && void 0 !== Od ? Od : 0;
        dd < 0 || dd >= Wd || dd === this.pageIndex || (this.pageIndex = dd, this.emit())
      }
      pickerEntry() {
        var dd, Od;
        return null !== (dd = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.dungeons.find((dd => dd.id === this.pickerDungeonId))) && void 0 !== dd ? dd : null
      }
      difficulty(dd) {
        const Od = dd.completions > 0,
          md = null === dd.bestMs ? null : ud(dd.bestMs);
        return {
          difficulty: dd.difficulty,
          label: this.translate(Sd[dd.difficulty]),
          colour: sd[dd.difficulty],
          beaten: Od,
          bestTime: md,
          completions: dd.completions,
          summary: Od ? [null === md ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: md
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: dd.completions.toLocaleString(this.locale)
          })].filter((dd => null !== dd)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(dd) {
        const Od = dd.difficulties.map((dd => this.difficulty(dd))),
          md = Od.filter((dd => dd.beaten)).length;
        return {
          id: dd.id,
          name: this.translate(dd.nameKey),
          selected: dd.id === this.selected,
          beatenSummary: `${md} / ${Od.length}`,
          difficulties: Od
        }
      }
      picker() {
        const dd = this.pickerEntry();
        if (null === dd || 0 === dd.difficulties.length) return null;
        const Od = dd.difficulties.map(((Od, md) => {
          var Wd, Fd, Rd, Xd;
          const Kd = Od.unlockedBoss,
            hd = null === Kd ? this.lockedHint(dd, md) : null;
          return {
            ...this.difficulty(Od),
            unlocked: null !== Kd,
            bossName: null === Kd ? null : this.translate(Kd.bossNameKey),
            bossMobType: null !== (Wd = null === Kd || void 0 === Kd ? void 0 : Kd.bossMobType) && void 0 !== Wd ? Wd : null,
            bossMobVariation: null !== (Fd = null === Kd || void 0 === Kd ? void 0 : Kd.bossMobVariation) && void 0 !== Fd ? Fd : null,
            lockedHint: null !== (Rd = null === hd || void 0 === hd ? void 0 : hd.text) && void 0 !== Rd ? Rd : null,
            lockedHintHighlight: null !== (Xd = null === hd || void 0 === hd ? void 0 : hd.highlight) && void 0 !== Xd ? Xd : null,
            current: md === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(dd.nameKey),
          pages: Od,
          page: Od[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Od.length - 1
        }
      }
      lockedHint(dd, Od) {
        var md, Wd, Fd;
        if (0 === Od && "number" === typeof dd.combatLevelLock) {
          const Od = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: dd.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Od,
            colour: YO("combat"),
            icon: TO.combat
          })
        }
        const Rd = null !== (md = null === (Wd = this.authoritative) || void 0 === Wd ? void 0 : Wd.dungeons) && void 0 !== md ? md : [],
          Xd = Od > 0 ? dd : null !== (Fd = Rd[Rd.indexOf(dd) - 1]) && void 0 !== Fd ? Fd : null,
          Kd = Od > 0 ? dd.difficulties[Od - 1] : null === Xd || void 0 === Xd ? void 0 : Xd.difficulties[0];
        if (null === Xd || void 0 === Kd) return null;
        const hd = this.translate(Xd.nameKey);
        if (null === Kd.unlockedBoss) return Xd === dd ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Kd.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: hd
        }, Kd.difficulty);
        const vd = this.translate(Kd.unlockedBoss.bossNameKey);
        return Xd === dd ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: vd
        }, Kd.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: vd,
            dungeon: hd
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(dd, Od, md) {
        return this.hintHighlighting(dd, Od, "difficulty", {
          name: this.translate(Sd[md]),
          colour: sd[md],
          icon: null
        })
      }
      hintHighlighting(dd, Od, md, Wd) {
        let {
          name: Fd,
          colour: Rd,
          icon: Xd
        } = Wd;
        const Kd = this.translate(dd, {
          ...Od,
          [md]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(dd, {
            ...Od,
            [md]: Fd
          }),
          highlight: 2 === Kd.length ? {
            before: Kd[0],
            name: Fd,
            after: Kd[1],
            colour: Rd,
            icon: Xd
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var dd, Od, md;
        const Wd = null !== (dd = null === (Od = this.authoritative) || void 0 === Od ? void 0 : Od.dungeons) && void 0 !== dd ? dd : [];
        var Fd, Rd;
        Wd.some((dd => dd.id === this.selected)) || (this.selected = null !== (Fd = null === (Rd = Wd[0]) || void 0 === Rd ? void 0 : Rd.id) && void 0 !== Fd ? Fd : null);
        const Xd = Wd.map((dd => this.entry(dd)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Xd,
          detail: null !== (md = Xd.find((dd => dd.selected))) && void 0 !== md ? md : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const fO = ["mining", "farming", "foraging", "fishing", "combat"],
      MO = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      dm = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Om() {
      for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
      return Od.map(((dd, Od) => ({
        amount: dd,
        coins: MO[Od],
        xp: dm[Od]
      })))
    }
    const mm = Om(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Wm = Om(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Fm = Om(50, 100, 250, 500, 1e3, 2500, 5e3),
      Rm = Om(25, 50, 100, 250, 500, 1e3),
      Xm = Om(10, 25, 50, 100, 250, 500, 1e3),
      Km = Om(1, 5, 10, 25, 50);

    function hm(dd, Od) {
      return {
        id: dd,
        category: "fishing",
        item: Od,
        drops: [Od],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xm
      }
    }
    const Qm = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Wm
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Fm
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Fm
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Rm
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Rm
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Wm
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: mm
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: mm
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: mm
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Fm
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Wm
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Wm
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Wm
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Fm
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Fm
      }, hm("wheatfish", "Wheatfish"), hm("darter", "Darter"), hm("sunset_minnow", "Sunset Minnow"), hm("root_flounder", "Root Flounder"), hm("greenfin_loach", "Greenfin Loach"), hm("red_strongfish", "Red Strongfish"), hm("green_strongfish", "Green Strongfish"), hm("boomerang_fish", "Boomerang Fish"), hm("seahorse", "Seahorse"), hm("spined_stickleback", "Spined Stickleback"), hm("moon_strongfish", "Moon Strongfish"), hm("boulder_bass", "Boulder Bass"), hm("grass_snapper", "Grass Snapper"), hm("crystal_wheatfish", "Crystalized Wheatfish", Km), hm("moonstone_pupfish", "Moonstone Pupfish", Km), hm("reedglass_minnow", "Reedglass Minnow"), hm("mangrove_herring", "Mangrove Herring"), hm("mudline_perch", "Mudline Perch"), hm("coastal_mullet", "Coastal Mullet"), hm("reef_sardine", "Reef Sardine"), hm("root_perch", "Root Perch"), hm("driftwood_catfish", "Driftwood Catfish"), hm("aether_minnow", "Aether Minnow"), hm("needlefish", "Tri-Pointed Needlefish"), hm("threadfin_bream", "Threadfin Bream"), hm("mudbelly_tilapia", "Mudbelly Tilapia"), hm("rotslab_eel", "Rotslab Eel"), hm("polarflash_electron", "Polarflash Electron"), hm("mireback_carp", "Mireback Carp"), hm("blackwater_bream", "Blackwater Bream"), hm("stone_grouper", "Stone Grouper"), hm("shadeback_ray", "Shadeback Ray"), hm("glacial_silverfish", "Glacial Silverfish"), hm("hatchetfish", "Hatchetfish"), hm("moonlit_boomerang", "Moonlit Boomerang Fish"), hm("murkborne_ray", "Murkborne Ray"), hm("bamboo_catfish", "Bamboo Catfish"), hm("mossback_arapaima", "Mossback Arapaima"), hm("murk_stingray", "Murk Stingray"), hm("channel_sawfish", "Channel Sawfish"), hm("boned_sturgeon", "Boned Sturgeon"), hm("oarfish", "Oarfish"), hm("snakehead", "Snakehead", Km), hm("eldertide_leviathan", "Eldertide Leviathan", Km), hm("pithead", "Pithead"), hm("electric_eel", "Electric Eel"), hm("shadow_darter", "Shadow Darter"), hm("abyss_carp", "Abyss Carp"), hm("nomai_moray", "Nomai Moray"), hm("silver_dragonfish", "Silver Dragonfish"), hm("giant_moray", "Giant Moray"), hm("coelacanth", "Coelacanth", Km), hm("frost_herring", "Frost Herring"), hm("permafrost_halibut", "Permafrost Halibut"), hm("glacial_lanternfish", "Glacial Lanternfish"), hm("frozen_grenadier", "Frozen Grenadier"), hm("blackfin_icefish", "Blackfin Icefish"), hm("moonfish", "Moonfish"), hm("alpha_strongfish", "Alpha Moon Strongfish"), hm("deep_lanternfish", "Deepwater Lanternfish", Km), hm("pearlescent_moonfish", "Pearlescent Moonfish", Km), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Wm
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Rm
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Rm
      }],
      tm = (new Map(Qm.map((dd => [dd.id, dd]))), new Map),
      om = new Map;
    for (const sK of Qm) {
      for (const [dd, Od] of Object.entries(null !== (Nm = sK.blocks) && void 0 !== Nm ? Nm : {})) {
        var Nm;
        tm.set(dd, {
          collection: sK,
          amount: Od
        })
      }
      for (const dd of null !== (qm = sK.drops) && void 0 !== qm ? qm : []) {
        var qm;
        om.set(dd, sK)
      }
    }

    function Hm(dd, Od) {
      let md = 0;
      for (; md < dd.tiers.length && Od >= dd.tiers[md].amount;) md++;
      return md
    }
    const ym = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function bm(dd) {
      return ym[dd - 1]
    }
    const Tm = "skyblockCollectionsView";
    class pm extends hd {
      constructor(dd, Od) {
        let md = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => dd;
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Od, this.locale = md, this.itemName = Wd, this.counts = null, this.category = "mining", this.selected = Qm[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = dd => {
          this.category = dd, this.selected = this.inCategory(dd)[0].id, this.emit()
        }, this.select = dd => {
          this.selected = dd, this.emit()
        }
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, this.locale = Od, this.itemName = md, this.emit()
      }
      Yt(dd) {
        if (!this.Aq)
          if ("collOpen" !== dd.kind) {
            (dd.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Od, md] of dd.collCounts) this.counts.set(Od, md);
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
        var dd;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Od = this.inCategory(this.category).map((dd => this.collectionView(dd))),
          md = Qm.reduce(((dd, Od) => dd + this.tierOf(Od)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: fO.map((dd => this.categoryView(dd))),
          collections: Od,
          detail: null !== (dd = Od.find((dd => dd.selected))) && void 0 !== dd ? dd : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(md)
          })
        }
      }
      categoryView(dd) {
        const Od = this.inCategory(dd),
          md = Od.reduce(((dd, Od) => dd + this.tierOf(Od)), 0),
          Wd = Od.reduce(((dd, Od) => dd + Od.tiers.length), 0);
        return {
          id: dd,
          label: this.translate(`skyblockGame:${dd}`),
          icon: TO[dd],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(md),
            target: this.number(Wd)
          }),
          selected: dd === this.category
        }
      }
      collectionView(dd) {
        var Od, md;
        const Wd = null !== (Od = this.counts.get(dd.id)) && void 0 !== Od ? Od : 0,
          Fd = Hm(dd, Wd),
          Rd = null !== (md = dd.tiers[Fd]) && void 0 !== md ? md : null,
          Xd = 0 === Fd ? 0 : dd.tiers[Fd - 1].amount;
        return {
          id: dd.id,
          name: this.itemName(dd.item),
          icon: dd.item,
          selected: dd.id === this.selected,
          locked: 0 === Wd,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Wd)
          }),
          tier: 0 === Fd ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Fd),
          percent: null === Rd ? 100 : Math.min(100, (Wd - Xd) / (Rd.amount - Xd) * 100),
          progress: null === Rd ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Wd),
            target: this.number(Rd.amount)
          }),
          nextReward: null === Rd ? null : this.reward(dd, Rd.coins, Rd.xp)
        }
      }
      reward(dd, Od, md) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Od),
          xp: this.number(md),
          skill: this.translate(`skyblockGame:${dd.category}`)
        })
      }
      tierLabel(dd) {
        return this.translate("skyblockGame:collectionTier", {
          tier: bm(dd)
        })
      }
      tierOf(dd) {
        var Od;
        return Hm(dd, null !== (Od = this.counts.get(dd.id)) && void 0 !== Od ? Od : 0)
      }
      inCategory(dd) {
        return Qm.filter((Od => Od.category === dd))
      }
      number(dd) {
        return dd.toLocaleString(this.locale)
      }
    }
    const Ym = "skyblockPortalTransitView",
      gm = "skyblockPortalArrival";
    class wm {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.lQ = dd, this.storage = Od, this.now = md, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Yt(dd) {
        const Od = {
          zoneNameKey: dd.transitZoneNameKey,
          variation: dd.transitZoneVariation,
          colour: dd.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(gm, Od), this.show("departure", Od.zoneNameKey, Od.colour, dd.transitDurationMs, dd.transitDurationMs + 1500, (() => {
          this.storage.removeItem(gm)
        }))
      }
      resumeArrival(dd) {
        const Od = this.storage.getItem(gm);
        this.storage.removeItem(gm), null === Od || Od.variation !== dd || this.now() - Od.departedAt > 3e4 || this.show("arrival", Od.zoneNameKey, Od.colour, 3200, 2e4)
      }
      finishArrival(dd) {
        var Od;
        "arrival" === (null === (Od = this.view) || void 0 === Od ? void 0 : Od.phase) && this.view.token === dd && (this.clearTimer(), this.view = null, this.lQ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(dd, Od, md, Wd, Fd, Rd) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: dd,
          zoneNameKey: Od,
          colour: md,
          durationMs: Wd
        }, this.lQ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.lQ(null), null === Rd || void 0 === Rd || Rd()
        }), Fd)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const am = "skyblockDailyRewardView",
      Em = "skyblockDailyRewardCoin";
    class Jm {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.lQ = dd, this.isBusy = Od, this.holdQuestPopups = md, this.onHeldCoinsChanged = Wd, this.onCoinLanded = Fd, this.onStarted = Rd, this.onFinished = Xd, this.onItemLanded = Kd, this.now = hd, this.jK = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var dd, Od;
        return null !== (dd = null === (Od = this.playing) || void 0 === Od ? void 0 : Od.view) && void 0 !== dd ? dd : null
      }
      getHeldCoins() {
        var dd, Od;
        let md = 0;
        for (const Wd of this.jK) md += Wd.coins;
        return md - (null !== (dd = null === (Od = this.playing) || void 0 === Od ? void 0 : Od.released) && void 0 !== dd ? dd : 0)
      }
      Yt(dd) {
        "dailyRewardClaimed" !== dd.kind ? (this.queue.push(dd), this.Et()) : this.jK.push({
          coins: dd.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Et() {
        const dd = this.now();
        if (null === this.playing) return this.releaseUnshown(dd), void this.startNext(dd);
        const Od = this.playing,
          md = dd - Od.startedAt,
          Wd = Od.view.flyingCoins,
          Fd = function(dd, Od) {
            let md = 0;
            for (; md < Od && xm(md, Od) <= dd;) md++;
            return md
          }(md, Wd);
        if (Fd !== Od.landed) {
          for (let dd = Fd - Od.landed > 2 ? Fd - 1 : Od.landed; dd < Fd; dd++) this.onCoinLanded(dd, Wd);
          Od.landed = Fd, Od.released = Math.round(Od.view.coins * Fd / Wd), this.onHeldCoinsChanged()
        }
        for (; Od.itemsLanded < Od.view.items.length && 2e3 + 160 * Od.itemsLanded + 630 <= md;) this.onItemLanded(Od.itemsLanded), Od.itemsLanded++;
        md >= Od.view.durationMs && (this.finish(), this.startNext(dd))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.jK = [], this.lQ(null)
      }
      startNext(dd) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Od = this.queue.shift();
        this.token++;
        const md = {
          token: this.token,
          day: Od.dailyRewardDay,
          coins: Od.dailyRewardCoins,
          items: Od.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Od.dailyRewardDay === Ud ? 24 : 14
        };
        this.playing = {
          view: md,
          startedAt: dd,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.lQ(md), this.onStarted(md)
      }
      finish() {
        this.jK.shift(), this.playing = null, this.holdQuestPopups(!1), this.lQ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(dd) {
        if (this.queue.length > 0 || 0 === this.jK.length) return;
        const Od = this.jK.length;
        this.jK = this.jK.filter((Od => dd - Od.receivedAt < 6e4)), this.jK.length !== Od && this.onHeldCoinsChanged()
      }
    }

    function Um(dd, Od) {
      return 450 + 715 * dd / (Od - 1)
    }

    function xm(dd, Od) {
      return Um(dd, Od) + 650
    }
    const Bm = "skyblockMailboxView";
    class Sm {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.lQ = dd, this.isBusy = Od, this.onStarted = md, this.now = Wd, this.waiting = [], this.playing = null, this.token = 0, this.itemName = dd => dd
      }
      getSnapshot() {
        var dd, Od;
        return null !== (dd = null === (Od = this.playing) || void 0 === Od ? void 0 : Od.view) && void 0 !== dd ? dd : null
      }
      setItemName(dd) {
        this.itemName = dd
      }
      Yt(dd) {
        this.waiting.push(...dd.mailLetters), this.Et()
      }
      Et() {
        const dd = this.now();
        null !== this.playing && dd - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.lQ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(dd)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.lQ(null)
      }
      start(dd) {
        const Od = this.waiting.slice(0, 3);
        this.token++;
        const md = {
          token: this.token,
          letters: Od.map((dd => this.toView(dd))),
          more: this.waiting.length - Od.length,
          durationMs: 4500 + 700 * Od.length
        };
        this.waiting = [], this.playing = {
          view: md,
          startedAt: dd
        }, this.lQ(md), this.onStarted(md)
      }
      toView(dd) {
        return {
          coins: dd.mailCoins,
          items: dd.mailItems.map((dd => {
            var Od;
            return {
              itemName: dd.mailItemName,
              amount: dd.mailItemAmount,
              label: null !== (Od = dd.mailItemLabel) && void 0 !== Od ? Od : this.itemName(dd.mailItemName)
            }
          })),
          reasonKey: dd.mailReasonKey,
          reasonParams: dd.mailReasonParams
        }
      }
    }
    const sm = "skyblockQuestGraphView",
      um = "skyblockDevQuestJump";

    function Vm(dd) {
      if (0 === dd.length) return "";
      const Od = [`M ${dd[0].x} ${dd[0].y}`];
      for (let Wd = 1; Wd < dd.length - 1; Wd++) {
        const md = dd[Wd + 1];
        Od.push(`Q ${dd[Wd].x} ${dd[Wd].y} ${(dd[Wd].x+md.x)/2} ${(dd[Wd].y+md.y)/2}`)
      }
      const md = dd[dd.length - 1];
      return Od.push(`L ${md.x} ${md.y}`), Od.join(" ")
    }

    function im(dd, Od) {
      return dd < Od ? `${dd}|${Od}` : `${Od}|${dd}`
    }
    class Am extends hd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(dd, md, Wd), this.translate = Od, this.requestJump = Fd, this.requestArrive = Rd, this.storage = Xd, this.now = Kd, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = dd => {
          dd !== this.hoveredId && (this.hoveredId = dd, this.emit())
        }, this.jump = dd => {
          this.close(), this.requestJump(dd)
        }
      }
      Yt(dd) {
        if (!this.Aq)
          if ("graph" !== dd.kind) {
            if ("jumping" === dd.kind) {
              const Od = {
                questId: dd.graphQuestId,
                variation: dd.graphVariation,
                completes: dd.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(um, Od)
            }
          } else {
            const Od = ++this.graphCount;
            md.e(141).then((() => md(7365))).then((md => {
              let {
                default: Wd
              } = md;
              this.Aq || Od !== this.graphCount || (this.layout = function(dd, Od, md) {
                var Wd, Fd;
                const Rd = new dd.graphlib.Graph;
                Rd.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Rd.setDefaultEdgeLabel((() => ({})));
                const Xd = new Set;
                for (const Qd of Od) Xd.add(Qd.graphQuestId), Rd.setNode(Qd.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Kd = md.filter((dd => Xd.has(dd.graphFromId) && Xd.has(dd.graphToId) && dd.graphFromId !== dd.graphToId)),
                  hd = new Map;
                for (const Qd of [...Kd].sort(((dd, Od) => Number("awaits" === dd.graphEdgeKind) - Number("awaits" === Od.graphEdgeKind)))) {
                  const dd = im(Qd.graphFromId, Qd.graphToId);
                  hd.has(dd) || (hd.set(dd, Qd), Rd.setEdge(Qd.graphFromId, Qd.graphToId))
                }
                dd.layout(Rd);
                const vd = Rd.graph();
                return {
                  width: Math.ceil(null !== (Wd = vd.width) && void 0 !== Wd ? Wd : 0),
                  height: Math.ceil(null !== (Fd = vd.height) && void 0 !== Fd ? Fd : 0),
                  nodes: Od.map((dd => {
                    var Od, md;
                    const Wd = Rd.node(dd.graphQuestId);
                    return {
                      node: dd,
                      left: (null !== (Od = Wd.x) && void 0 !== Od ? Od : 0) - 95,
                      top: (null !== (md = Wd.y) && void 0 !== md ? md : 0) - 26
                    }
                  })),
                  edges: Kd.map((dd => {
                    var Od;
                    const md = hd.get(im(dd.graphFromId, dd.graphToId)),
                      Wd = null !== (Od = Rd.edge(md.graphFromId, md.graphToId).points) && void 0 !== Od ? Od : [];
                    return {
                      edge: dd,
                      key: `${dd.graphFromId}|${dd.graphToId}|${dd.graphEdgeKind}`,
                      path: Vm(md.graphFromId === dd.graphFromId ? Wd : [...Wd].reverse())
                    }
                  })),
                  plans: new Map(Od.map((dd => [dd.graphQuestId, new Set([dd.graphQuestId, ...dd.graphPlanIds])])))
                }
              }(Wd, dd.graphNodes, dd.graphEdges), this.show())
            })).catch((dd => {
              console.error("The quest graph could not be laid out", dd)
            }))
          }
      }
      resumeJump(dd) {
        const Od = this.storage.getItem(um);
        this.storage.removeItem(um), null === Od || Od.variation !== dd || this.now() - Od.departedAt > 6e4 || this.requestArrive(Od.questId, Od.completes)
      }
      setTranslator(dd) {
        this.translate = dd, this.emit()
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
        var dd, Od;
        return null !== (dd = null === this.hoveredId || null === (Od = this.layout) || void 0 === Od ? void 0 : Od.plans.get(this.hoveredId)) && void 0 !== dd ? dd : new Set
      }
      buildSnapshot() {
        const dd = this.layout;
        if (null === dd) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Od = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: dd.width,
          height: dd.height,
          nodes: dd.nodes.map((dd => {
            let {
              node: md,
              left: Wd,
              top: Fd
            } = dd;
            return {
              id: md.graphQuestId,
              name: this.translate(md.graphNameKey),
              detail: null === md.graphGiverName ? md.graphZoneId : `${md.graphGiverName} \xb7 ${md.graphZoneId}`,
              state: md.graphState,
              left: Wd,
              top: Fd,
              inPlan: Od.has(md.graphQuestId),
              hovered: md.graphQuestId === this.hoveredId
            }
          })),
          edges: dd.edges.map((dd => {
            let {
              edge: md,
              key: Wd,
              path: Fd
            } = dd;
            return {
              key: Wd,
              kind: md.graphEdgeKind,
              path: Fd,
              inPlan: Od.has(md.graphFromId) && Od.has(md.graphToId)
            }
          })),
          planning: Od.size > 0
        }
      }
    }
    var rm = md(38598);
    const Gm = 250,
      nm = 2150,
      Lm = -2.8,
      Pm = 2.2,
      zm = -27,
      cm = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      jm = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Dm = Math.round(50 + 1e3 * (jm.delay + jm.period / 2)),
      em = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Im = Array.from({
        length: 26
      }, ((dd, Od) => {
        const md = 2.39996 * Od,
          Wd = .5 + .618034 * Od % 1 * .23,
          Fd = Od % 3 !== 2;
        return {
          rune: Fd ? em[7 * Od % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(md)*Wd).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(md)*Wd).toFixed(3)})`,
            "--spin": 40 * (Od % 5 - 2) + "deg",
            "--size": (Fd ? 1 + Od % 4 * .2 : .3 + Od % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Od%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Od%3).toFixed(2)}s`
          }
        }
      }));

    function lm(dd, Od) {
      return Array.from({
        length: 30 + 3 * dd + (Od ? 10 : 0)
      }, ((dd, Od) => {
        const md = Od < 4,
          Wd = md ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Fd = md ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Rd = md ? 2.2 : .6 + Math.random(),
          Xd = md ? .3 : Math.random() < .5 ? .16 : .24,
          Kd = md ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Wd,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Fd.toFixed(2)}rem`,
          "--length": `${Rd.toFixed(2)}rem`,
          "--width": `${Xd}rem`,
          "--duration": `${Math.round(Kd)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Cm(dd) {
      let {
        zeta: Od,
        period: md
      } = dd;
      const Wd = 2 * Math.PI / md;
      return {
        w: Wd,
        decay: Od * Wd / Math.sqrt(1 - Od * Od)
      }
    }
    let Zm = !1;

    function km() {
      if (Zm) return;
      Zm = !0;
      const dd = document.createElement("style");
      dd.textContent = function() {
        const dd = Cm(cm),
          Od = Cm(jm),
          md = Od => Math.exp(-dd.decay * Od) * Math.sin(dd.w * Od),
          Wd = md(Math.atan(dd.w / dd.decay) / dd.w),
          Fd = .25,
          Rd = 2.15,
          Xd = Math.round(215),
          Kd = [];
        for (let hd = 0; hd <= Xd; hd++) {
          const dd = hd / Xd * Rd;
          let vd = Math.sin(Math.min(dd, Fd) / Fd * Math.PI / 2) ** 2,
            Qd = 0,
            td = 1,
            od = 1 - .2 * vd,
            Nd = 1;
          if (dd >= Fd) {
            const Xd = dd - Fd,
              Kd = Math.max(0, Xd - .05);
            vd = Math.exp(-Kd / .05), Qd = md(Kd + cm.lead * (1 - Math.exp(-Kd / cm.rush))) / Wd;
            const hd = Kd - jm.delay,
              qd = hd <= 0 ? 0 : 1 - Math.exp(-Od.decay * hd) * (Math.cos(Od.w * hd) + Od.decay / Od.w * Math.sin(Od.w * hd)),
              Hd = Math.max(0, (dd - 1.77) / (Rd - 1.77));
            td = (1 + (jm.to - 1) * qd) * (1 + .08 * Hd), od = 1.1 + 1.5 * Math.exp(-Xd / .07) + .3 * Math.exp(-(((1e3 * Xd - Dm) / 100) ** 2)) + .8 * Hd, Nd = 1 - Hd ** 1.5
          }
          const qd = .15 * vd + Lm * Qd,
            Hd = -.1 * vd + Pm * Qd,
            yd = 3 * vd + zm * Qd;
          Kd.push(`${(hd/Xd*100).toFixed(3)}% { opacity: ${Nd.toFixed(3)}; transform: translate(${qd.toFixed(3)}rem, ${Hd.toFixed(3)}rem) rotate(${yd.toFixed(2)}deg) scale(${td.toFixed(3)}); filter: brightness(${od.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Kd.join(" ")} }`
      }(), document.head.append(dd)
    }
    const fm = "skyblockForgeView",
      Mm = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class dW extends hd {
      constructor(dd, Od, md, Wd, Fd) {
        super(dd, md, Wd), this.translate = Od, this.requestForge = Fd, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (dd, Od) => {
          var md, Wd;
          null !== this.forging || (null !== (md = this.owned[(0, rm.p)(Od, dd)]) && void 0 !== md ? md : 0) <= 0 || (this.selected[dd] = this.selected[dd] === Od ? null : Od, this.status = null, null === (Wd = this.onPartSelected) || void 0 === Wd || Wd.call(this), this.emit())
        }, this.forge = dd => {
          var Od, md;
          const Wd = this.selectedParts();
          if (null === Wd || this.isPending() || !this.open) return;
          const Fd = (0, rm.n)(Wd);
          if (null === Fd || Fd.coalCost > this.coal) return;
          const Rd = this.preview(Fd),
            Xd = null !== (Od = null === (md = this.onForgeStarted) || void 0 === md ? void 0 : md.call(this, Rd.tier, Rd.named, dd)) && void 0 !== Od ? Od : () => {};
          if (this.dropArrival(), dd) {
            const dd = {
              id: ++this.forgeId,
              preview: Rd,
              timers: [],
              stopSounds: Xd,
              landed: !1,
              reply: null
            };
            dd.timers.push(setTimeout((() => {
              dd.landed = !0, null !== dd.reply && (this.apply(dd.reply), dd.reply = null, this.emit())
            }), Gm), setTimeout((() => {
              this.finishForge(dd)
            }), nm)), this.forging = dd
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Wd)
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        var Od;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.forgeMessageKind) return this.dropForge(), this.apply(dd), this.status = null, this.show(), void(null === (Od = this.onOpened) || void 0 === Od || Od.call(this));
        const md = this.forging;
        if (null !== md && null !== dd.forgeRefusalKey) this.dropForge();
        else if (null !== md && !md.landed) return void(md.reply = dd);
        this.apply(dd), this.emit()
      }
      apply(dd) {
        if (this.owned = dd.forgeOwnedParts, this.coal = dd.forgeCoalOwned, this.keepSelectionOwned("open" === dd.forgeMessageKind), null !== dd.forgeForgedSwordId) {
          var Od;
          const md = (0, rm.n)(dd.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Od = null === md || void 0 === md ? void 0 : md.displayName) && void 0 !== Od ? Od : ""
            }
          }
        } else null !== dd.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: dd.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(dd) {
        this.translate = dd, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(dd) {
        var Od;
        this.forging = null;
        const md = this.selectedParts(),
          Wd = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: dd.id,
          sameSword: null !== md && (null === (Od = (0, rm.n)(md)) || void 0 === Od ? void 0 : Od.displayName) === dd.preview.name,
          timer: Wd
        }, this.emit()
      }
      dropForge() {
        const dd = this.forging;
        if (null !== dd) {
          this.forging = null;
          for (const Od of dd.timers) clearTimeout(Od);
          dd.stopSounds(), null !== dd.reply && this.apply(dd.reply)
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
        var dd, Od, md;
        const Wd = this.selectedParts(),
          Fd = null === Wd ? null : (0, rm.n)(Wd),
          Rd = null !== (dd = null === (Od = this.forging) || void 0 === Od ? void 0 : Od.preview) && void 0 !== dd ? dd : null === Fd ? null : this.preview(Fd);
        return {
          enabled: this.received,
          open: this.open,
          slots: rm.m.map((dd => ({
            kind: dd,
            label: this.translate(Mm[dd]),
            parts: this.partsFor(dd)
          }))),
          coalOwned: this.coal,
          preview: Rd,
          unformedSword: rm.j[null !== (md = this.selected.Blade) && void 0 !== md ? md : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((dd => dd > 0)),
          canForge: null !== Rd && !Rd.coalShort && !this.isPending(),
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
      preview(dd) {
        return {
          name: dd.displayName,
          lore: dd.lore,
          baseSword: dd.baseSword,
          enchantmentTier: dd.enchantmentTier,
          tier: Number(dd.enchantmentTier.slice(-1)),
          named: dd.named,
          stats: this.stats(dd),
          effects: dd.effects,
          coalCost: dd.coalCost,
          coalShort: null === this.forging && dd.coalCost > this.coal
        }
      }
      partsFor(dd) {
        const Od = [];
        for (const Wd of rm.f) {
          var md;
          const Fd = (0, rm.p)(Wd, dd),
            Rd = null !== (md = this.owned[Fd]) && void 0 !== md ? md : 0;
          Rd > 0 && Od.push({
            material: Wd,
            itemName: Fd,
            owned: Rd,
            selected: this.selected[dd] === Wd,
            placeholder: !1
          })
        }
        if (0 === Od.length) {
          const md = rm.f[0];
          Od.push({
            material: md,
            itemName: (0, rm.p)(md, dd),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Od
      }
      stats(dd) {
        const Od = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${dd.powerMultiplier.toFixed(2)}`,
          better: dd.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${dd.damageMultiplier.toFixed(2)}`,
          better: dd.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/dd.cooldownMultiplier).toFixed(2)}`,
          better: dd.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${dd.knockbackMultiplier.toFixed(2)}`,
          better: dd.knockbackMultiplier > 1
        }];
        return dd.reachBonus > 0 && Od.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${dd.reachBonus.toFixed(1)}`,
          better: !0
        }), dd.damageReduction > 0 && Od.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*dd.damageReduction)}%`,
          better: !0
        }), Od
      }
      selectedParts() {
        const {
          Blade: dd,
          Guard: Od,
          Handle: md
        } = this.selected;
        return null === dd || null === Od || null === md ? null : {
          blade: dd,
          guard: Od,
          handle: md
        }
      }
      keepSelectionOwned(dd) {
        for (const md of rm.m) {
          var Od;
          const Wd = this.selected[md];
          if (null !== Wd && (null !== (Od = this.owned[(0, rm.p)(Wd, md)]) && void 0 !== Od ? Od : 0) > 0) continue;
          if (!dd) {
            this.selected[md] = null;
            continue
          }
          const Fd = [...rm.f].reverse().find((dd => {
            var Od;
            return (null !== (Od = this.owned[(0, rm.p)(dd, md)]) && void 0 !== Od ? Od : 0) > 0
          }));
          this.selected[md] = null !== Fd && void 0 !== Fd ? Fd : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const OW = "skyblockSmugglerView",
      mW = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class WW extends hd {
      constructor(dd, Od, md, Wd, Fd) {
        super(dd, md, Wd), this.translate = Od, this.requestBuy = Fd, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = dd => dd, this.onBought = null, this.buy = dd => {
          const Od = this.deals[dd];
          void 0 !== Od && !this.isPending() && this.open && !this.soldOut.has(dd) && this.canAfford(Od) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, dd))
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        if (this.received = !0, this.day = dd.smugglerDay, this.deals = dd.smugglerDeals, this.rivets = dd.smugglerRivetsOwned, this.crests = dd.smugglerCrestsOwned, this.soldOut = new Set(dd.smugglerSoldOutSlots), this.rotatesAtMs = Date.now() + dd.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.smugglerMessageKind) return this.status = null, this.boughtSlot = null, void this.show();
        if (this.boughtSlot = dd.smugglerBoughtSlot, null !== dd.smugglerBoughtSlot) {
          var Od, md;
          const Wd = this.deals[dd.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Wd ? "" : this.dealName(Wd),
              amount: String(null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.smugglerDealAmount) && void 0 !== Od ? Od : 0)
            }
          }, this.boughtCount++, null === (md = this.onBought) || void 0 === md || md.call(this)
        } else null !== dd.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: dd.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, void 0 !== md && (this.itemName = md), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.boughtCount = 0
      }
      dealName(dd) {
        if (null !== dd.smugglerDealUniqueName) return dd.smugglerDealUniqueName;
        const Od = mW[dd.smugglerDealItem];
        return void 0 === Od ? this.itemName(dd.smugglerDealItem) : this.translate(Od)
      }
      canAfford(dd) {
        return dd.smugglerDealRivets <= this.rivets && dd.smugglerDealCrests <= this.crests
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
          deals: this.deals.map(((dd, Od) => ({
            slot: Od,
            itemName: dd.smugglerDealItem,
            displayName: this.dealName(dd),
            enchantmentTier: dd.smugglerDealEnchantmentTier,
            amount: dd.smugglerDealAmount,
            rivets: dd.smugglerDealRivets,
            crests: dd.smugglerDealCrests,
            soldOut: this.soldOut.has(Od),
            justBought: this.boughtSlot === Od
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
    const FW = "skyblockPassageView",
      RW = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function XW(dd, Od) {
      return dd(RW[Od])
    }

    function KW(dd, Od, md, Wd) {
      const Fd = Math.ceil((md - Wd) / 864e5),
        Rd = XW(dd, Od);
      return Fd > 1 ? dd("skyblockGame:passageNextDays", {
        phase: Rd,
        days: String(Fd)
      }) : dd("skyblockGame:passageNextSoon", {
        phase: Rd
      })
    }
    class hW extends hd {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(dd, md, Wd), this.translate = Od, this.now = Fd, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = dd => dd, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        this.message = dd, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, void 0 !== md && (this.itemName = md), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(dd) {
        return {
          itemName: dd.passageFish,
          displayName: this.itemName(dd.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(dd.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const dd = this.message;
        return null === dd ? {
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
          phase: dd.passagePhase,
          phaseName: XW(this.translate, dd.passagePhase),
          visitors: dd.passageVisitors.map((dd => this.describe(dd))),
          resting: this.describe(dd.passageResting),
          nextPhase: dd.passageNextPhase,
          next: KW(this.translate, dd.passageNextPhase, dd.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var vW = md(40123);
    const QW = "skyblockKeepersChairView";
    class tW extends hd {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new vW.d;
        super(dd, md, Wd), this.translate = Od, this.requestAim = Fd, this.now = Rd, this.pacer = Xd, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = dd => dd, this.aim = dd => {
          !this.awaitingReply && this.open && this.atChair && dd !== this.favoured && (null === dd || this.islands.some((Od => Od.keepersChairIslandId === dd && Od.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== dd && void 0 !== dd ? dd : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Xd.subscribe((() => {
          this.emit()
        }))
      }
      Yt(dd) {
        var Od, md;
        this.received = !0;
        const Wd = this.favoured,
          Fd = this.atChair;
        var Rd;
        return this.islands = dd.keepersChairIslands, this.favoured = dd.keepersChairFavoured, this.passage = null !== (Od = dd.keepersChairPassage) && void 0 !== Od ? Od : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (md = dd.keepersChairAtChair) || void 0 === md || md, "place" === dd.keepersChairMessageKind ? (!Fd && this.atChair && "refused" === (null === (Rd = this.status) || void 0 === Rd ? void 0 : Rd.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== dd.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: dd.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Wd && (this.status = null === this.favoured ? {
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
      receivePassage(dd) {
        this.received && (this.passage = dd, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, void 0 !== md && (this.itemName = md), this.emit()
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
      islandName(dd) {
        const Od = this.islands.find((Od => Od.keepersChairIslandId === dd));
        return void 0 === Od ? dd : this.translate(Od.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const dd = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Od = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((dd => {
            const Od = dd.keepersChairFeaturedFish;
            return {
              id: dd.keepersChairIslandId,
              name: this.translate(dd.keepersChairIslandNameKey),
              relit: dd.keepersChairIslandRelit,
              featuredFish: null === Od ? null : {
                itemName: Od,
                displayName: this.itemName(Od)
              },
              favoured: dd.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === dd ? null : {
            tone: dd.tone,
            text: this.translate(dd.key, null === dd.island ? void 0 : {
              island: this.islandName(dd.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Od ? null : {
            phase: Od.keepersChairPassagePhase,
            phaseName: XW(this.translate, Od.keepersChairPassagePhase),
            nextPhase: Od.keepersChairPassageNextPhase,
            next: KW(this.translate, Od.keepersChairPassageNextPhase, Od.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const oW = "skyblockReachLogView",
      NW = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      qW = "Caught Fish",
      HW = [1, 2, 4];

    function yW(dd, Od) {
      return dd.map((dd => ({
        ...dd,
        reachLogPageFish: dd.reachLogPageFish.map((dd => ({
          ...dd,
          reachLogFishFresh: Od(dd)
        })))
      })))
    }
    class bW extends hd {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new vW.d;
        super(dd, md, Wd), this.translate = Od, this.requestOpen = Fd, this.pacer = Rd, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = dd => dd, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = dd => {
          this.pages.some((Od => Od.reachLogIslandId === dd)) && (this.selected = dd, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Rd.subscribe((() => {
          this.emit()
        }))
      }
      Yt(dd) {
        if (this.received = !0, "status" === dd.reachLogMessageKind) return !0 === dd.reachLogNews && this.markNews(), this.serverFresh = dd.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Od = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== dd.reachLogMessageKind)
          if (this.pageViews = null, this.pages = yW(dd.reachLogPages, (dd => dd.reachLogFishFresh || this.heldFresh.has(dd.reachLogFishItem))), this.letGoShown = dd.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Od) this.showPages();
          else {
            for (const dd of this.pages)
              for (const Od of dd.reachLogPageFish) Od.reachLogFishFresh && this.heldFresh.add(Od.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, this.pageViews = null, void 0 !== md && (this.itemName = md), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = yW(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var dd, Od, md, Wd;
        const Fd = this.pages.find((dd => dd.reachLogPageFish.some((dd => dd.reachLogFishFresh))));
        if (void 0 !== Fd) return Fd.reachLogIslandId;
        if (null !== this.selected && this.pages.some((dd => dd.reachLogIslandId === this.selected))) return this.selected;
        return null !== (dd = null !== (Od = null === (md = this.pages.filter((dd => dd.reachLogIslandAwake)).at(-1)) || void 0 === md ? void 0 : md.reachLogIslandId) && void 0 !== Od ? Od : null === (Wd = this.pages[0]) || void 0 === Wd ? void 0 : Wd.reachLogIslandId) && void 0 !== dd ? dd : null
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
        return this.pages.map((dd => {
          var Od;
          return {
            id: dd.reachLogIslandId,
            name: this.translate(dd.reachLogIslandNameKey),
            awake: dd.reachLogIslandAwake,
            gold: dd.reachLogPageGold,
            caught: dd.reachLogPageFish.filter((dd => dd.reachLogFishCaught && !dd.reachLogFishVisitor)).length,
            total: dd.reachLogPageFish.filter((dd => !dd.reachLogFishVisitor)).length,
            fish: dd.reachLogPageFish.map((dd => {
              const Od = dd.reachLogFishBestKg;
              return {
                itemName: dd.reachLogFishItem,
                name: dd.reachLogFishCaught ? this.itemName(dd.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: dd.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / dd.reachLogFishChance))
                }),
                best: dd.reachLogFishCaught ? null === Od ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Od.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: dd.reachLogFishMarks,
                ribbons: HW.map((Od => 0 !== (dd.reachLogFishRibbons & Od))),
                glimmer: 0 !== (8 & dd.reachLogFishRibbons),
                halo: 0 !== (32 & dd.reachLogFishRibbons),
                fresh: dd.reachLogFishFresh,
                visitor: dd.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Od = dd.reachLogPageReturner) && void 0 !== Od ? Od : null)
          }
        }))
      }
      buildReturner(dd) {
        return null === dd ? null : {
          itemName: dd.reachLogReturnerFishItem,
          line: this.translate(dd.reachLogReturnerLineKey, {
            name: this.translate(dd.reachLogReturnerNameKey),
            trinket: this.translate(dd.reachLogReturnerTrinketKey)
          }),
          back: dd.reachLogReturnerBack
        }
      }
      receivePassagePhase(dd) {
        null !== this.passagePhase && this.passagePhase !== dd && (this.pagesCurrent = !1), this.passagePhase = dd
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const TW = "skyblockLampLightView";
    class pW {
      constructor(dd, Od, md, Wd) {
        this.lQ = dd, this.translate = Od, this.requestCommand = md, this.pacer = Wd, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Aq = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = dd => {
          dd ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = dd => {
          this.send(`buy ${dd}`)
        }, this.socket = dd => {
          this.send(`socket ${null!==dd&&void 0!==dd?dd:Ad}`)
        }, this.wearTint = dd => {
          this.send(`tint ${null!==dd&&void 0!==dd?dd:Ad}`)
        }, this.setSituation = dd => {
          this.situation = dd, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Wd.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Wd.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Yt(dd) {
        if (this.message = dd, null !== dd.lampLightShop && (this.shop = dd.lampLightShop), "open" === dd.lampLightKind && (this.refusalKey = null), "reply" === dd.lampLightKind) {
          var Od;
          const Fd = null !== (Od = dd.lampLightReplyTag) && void 0 !== Od ? Od : null,
            Rd = null !== Fd && Fd === this.offTag;
          var md, Wd;
          if (Rd ? this.settleOff() : null !== Fd && Fd !== this.awaitingTag || this.settleReply(), this.refusalKey = dd.lampLightRefusalKey, null !== dd.lampLightBought && !Rd) this.sparkle = {
            id: dd.lampLightBought,
            count: (null !== (md = null === (Wd = this.sparkle) || void 0 === Wd ? void 0 : Wd.count) && void 0 !== md ? md : 0) + 1
          }
        }
        dd.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === dd.lampLightKind && (this.lastGained = dd.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(dd) {
        dd !== this.atChair && (this.atChair = dd, dd && (this.refusalKey = null), this.emit())
      }
      setTranslator(dd, Od) {
        this.translate = dd, this.locale = null !== Od && void 0 !== Od ? Od : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Aq = !0
      }
      send(dd) {
        var Od;
        if (null !== this.awaitingTag || "ready" !== (null === (Od = this.message) || void 0 === Od ? void 0 : Od.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const md = this.nextTag();
        this.awaitingTag = md, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${dd} ${md}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const dd = this.nextTag();
        this.offTag = dd, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${dd}`)
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
        this.Aq || (this.snapshot = this.buildSnapshot(), this.lQ(this.snapshot))
      }
      formatLight(dd) {
        return Math.floor(dd).toLocaleString(this.locale)
      }
      formatPercent(dd) {
        const Od = 100 * dd;
        return Od >= 10 ? Math.round(Od).toLocaleString(this.locale) : Od.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(dd, Od) {
        if ("bite" === dd) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Od.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === dd) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Od.lampLightRareChance)
        });
        if ("notice" === dd) return null === Od.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Od.lampLightNoticeChance)
        });
        const md = "meter" === dd ? Od.lampLightMeterCatches : Od.lampLightBloomCatches;
        return null === md ? null : this.translate("meter" === dd ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(md))
        })
      }
      oddsLines(dd, Od) {
        const md = (dd, Od) => {
            var md;
            return null !== (md = {
              bite: Od.lampLightBiteMs,
              rare: Od.lampLightRareChance,
              meter: Od.lampLightMeterCatches,
              bloom: Od.lampLightBloomCatches,
              notice: Od.lampLightNoticeChance
            } [dd]) && void 0 !== md ? md : 0
          },
          Wd = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Fd = [];
        for (const Rd of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Xd = this.formatOdds(Rd, dd),
            Kd = this.formatOdds(Rd, Od);
          if (null === Xd || null === Kd || "bite" !== Rd && "rare" !== Rd && Xd === Kd) continue;
          const hd = md(Rd, Od) - md(Rd, dd),
            vd = Wd[Rd] ? hd < 0 : hd > 0;
          Fd.push({
            label: Rd,
            before: Xd,
            after: Kd,
            tone: Xd === Kd ? "same" : vd ? "better" : "worse"
          })
        }
        return Fd
      }
      charmView(dd, Od, md) {
        const Wd = dd.lampLightCharmId.charAt(0).toUpperCase() + dd.lampLightCharmId.slice(1),
          Fd = "bloom" === this.situation;
        return {
          id: dd.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Wd}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Wd}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(dd.lampLightCharmCost)
          }),
          owned: dd.lampLightCharmOwned,
          affordable: md >= dd.lampLightCharmCost,
          socketed: Od.lampLightSocketed === dd.lampLightCharmId,
          lines: this.oddsLines(Fd ? Od.lampLightBareBloom : Od.lampLightBareOpen, Fd ? dd.lampLightCharmBloom : dd.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var dd, Od, md, Wd;
        const Fd = this.message,
          Rd = "ready" === (null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) ? this.shop : null,
          Xd = null !== (dd = null === Fd || void 0 === Fd ? void 0 : Fd.lampLightBalance) && void 0 !== dd ? dd : 0,
          Kd = this.atChair,
          hd = "loading" === (null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          vd = "ready" !== (null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) || Kd ? null !== (Od = this.refusalKey) && void 0 !== Od ? Od : hd : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Fd && "locked" !== Fd.lampLightStatus,
          status: null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) && void 0 !== md ? md : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Xd)
          }),
          releasing: null !== (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.lampLightReleasing) && void 0 !== Wd && Wd,
          gained: null === Fd || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Fd || void 0 === Fd ? void 0 : Fd.lampLightStatus) && Kd && !this.isPending(),
          situation: this.situation,
          shop: null === Rd ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Rd.lampLightOddsRod,
              island: this.translate(Rd.lampLightIslandNameKey)
            }),
            heldRod: null !== Rd.lampLightHeldRod,
            charms: Rd.lampLightCharms.map((dd => this.charmView(dd, Rd, Xd))),
            tints: Rd.lampLightTints.map((dd => {
              const Od = dd.lampLightTintId,
                [md, Wd, Fd] = dd.lampLightTintColour;
              return {
                id: Od,
                name: this.translate(`skyblockGame:lampLightTint${Od.charAt(0).toUpperCase()}${Od.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(dd.lampLightTintCost)
                }),
                owned: dd.lampLightTintOwned,
                affordable: Xd >= dd.lampLightTintCost,
                wearing: Rd.lampLightTint === Od,
                colour: `rgb(${md}, ${Wd}, ${Fd})`
              }
            })),
            wearingIslandColours: null === Rd.lampLightTint
          },
          notice: null === vd ? null : this.translate(vd),
          sparkle: this.sparkle
        }
      }
    }
    const YW = "skyblockMagmawardView";
    class gW {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.lQ = dd, this.now = Od, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = cd.map((() => 0)), this.wornAt = cd.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Yt(dd) {
        var Od, md;
        const Wd = cd.map(((Od, md) => !0 === dd.magmawardPiecesWorn[md]));
        if (!Wd.includes(!0)) return this.snapshot = null, void this.lQ(null);
        const Fd = this.now(),
          Rd = this.snapshot;
        null === Rd && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Xd = dd.magmawardFuelCarried,
          Kd = !Wd.includes(!1);
        let hd = null !== (Od = null === Rd || void 0 === Rd ? void 0 : Rd.pulse) && void 0 !== Od ? Od : null,
          vd = null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.flare) && void 0 !== md ? md : null;
        dd.magmawardFuelBurned ? (hd = "burn", vd = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Fd, this.flareAt = Fd) : null !== Rd && Xd > Rd.fuel && (hd = "gain", this.pulseToken++, this.pulseAt = Fd), Kd && null !== Rd && !Rd.fullSet && (vd = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Fd, this.setLitAt = Fd);
        const Qd = cd.map(((dd, Od) => (Wd[Od] && null !== Rd && !Rd.pieces[Od].worn && (this.wornTokens[Od]++, this.wornAt[Od] = Fd), {
          itemName: dd,
          worn: Wd[Od],
          wornToken: this.wornTokens[Od],
          justWorn: Wd[Od] && this.isPlaying(this.wornAt[Od], Fd)
        })));
        this.snapshot = {
          pieces: Qd,
          wornCount: Wd.filter(Boolean).length,
          fullSet: Kd,
          fuel: Xd,
          fuelState: Xd <= 0 ? "empty" : Xd <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Fd) ? hd : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Fd) ? vd : null,
          flareToken: this.flareToken,
          setLit: Kd && this.isPlaying(this.setLitAt, Fd),
          setLitToken: this.setLitToken
        }, this.lQ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.lQ(null)
      }
      isPlaying(dd, Od) {
        return Od - dd < 1200
      }
    }
    const wW = "skyblockGlowtideView";
    class aW {
      constructor(dd) {
        this.lQ = dd, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = dd => {
          this.arrow = dd, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Yt(dd) {
        this.bloom = dd.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.lQ(null))
      }
      afterRender(dd, Od) {
        const md = this.bloom;
        if (null === md || null === dd) return;
        const Wd = md.glowtideBloomX - dd[0],
          Fd = md.glowtideBloomZ - dd[2],
          Rd = Math.hypot(Wd, Fd),
          Xd = this.snapshot,
          Kd = null !== Xd && void 0 !== Xd && Xd.inRange ? 1 : 0,
          hd = Rd <= 12.5 + Kd && dd[1] - md.glowtideBloomY <= 10 + Kd;
        !hd || null !== Xd && void 0 !== Xd && Xd.inRange || this.inRangeToken++;
        const vd = {
          colour: md.glowtideBloomColour,
          inRange: hd,
          distance: Math.round(Rd),
          inRangeToken: this.inRangeToken
        };
        (null === Xd || vd.colour !== Xd.colour || vd.inRange !== Xd.inRange || !hd && vd.distance !== Xd.distance) && (this.snapshot = vd, this.lQ(vd));
        const Qd = td.b.computeShortestRotation(Od, (0, td.rb)([Wd, 0, Fd]));
        null === this.arrow || Math.abs(Qd - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Qd}rad)`, this.arrowTurn = Qd)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.lQ(null)
      }
    }
    const EW = "skyblockGlowMeterView";
    class JW {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.lQ = dd, this.now = Od, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Yt(dd) {
        const Od = this.now(),
          {
            glowMeterFill: md,
            glowMeterCapacity: Wd
          } = dd,
          Fd = md >= Wd,
          Rd = this.snapshot;
        null !== Rd && (Fd && !Rd.full && (this.fullToken++, this.fullAt = Od), Rd.full && !Fd ? (this.burstToken++, this.burstAt = Od) : md > Rd.fill && (this.gainToken++, this.gainAt = Od)), this.snapshot = {
          fill: md,
          Mt: Wd,
          ratio: Math.min(1, Math.max(0, md / Wd)),
          full: Fd,
          rares: dd.glowMeterRares,
          ready: Fd && this.isPlaying(this.fullAt, Od),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Od),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Od),
          gainToken: this.gainToken
        }, this.lQ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.lQ(null)
      }
      isPlaying(dd, Od) {
        return Od - dd < 2e3
      }
    }
    const UW = "skyblockHushWaitView";
    class xW {
      constructor(dd) {
        this.lQ = dd, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Yt(dd) {
        let {
          hushWaitMs: Od,
          hushWaitTotalMs: md,
          hushWaitLines: Wd
        } = dd;
        if (this.clearTimers(), this.token++, 0 === Wd.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Od <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Wd[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Fd = Math.max(null !== md && void 0 !== md ? md : Od, Od),
          Rd = Fd - Od,
          Xd = dd => Fd * dd / Wd.length,
          Kd = dd => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Fd,
              elapsedMs: Rd,
              line: Wd[dd],
              lineIndex: dd
            })
          };
        let hd = 0;
        for (; hd + 1 < Wd.length && Xd(hd + 1) <= Rd;) hd++;
        Kd(hd);
        for (let vd = hd + 1; vd < Wd.length; vd++) this.later(Xd(vd) - Rd, (() => {
          Kd(vd)
        }));
        this.later(Od, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(dd) {
        this.snapshot = dd, this.lQ(dd)
      }
      later(dd, Od) {
        this.timers.push(setTimeout(Od, dd))
      }
      clearTimers() {
        for (const dd of this.timers) clearTimeout(dd);
        this.timers = []
      }
    }
    const BW = "skyblockTideChartsView",
      SW = 36e5,
      sW = 864e5;

    function uW(dd, Od, md) {
      const [Wd, Fd, Rd, Xd] = dd.tideChartArea, Kd = Math.floor(Od), hd = Math.floor(md);
      return Kd >= Wd && Kd <= Rd && hd >= Fd && hd <= Xd
    }

    function VW(dd, Od, md) {
      const [Wd, Fd, Rd, Xd] = dd.tideChartWater;
      return function(dd, Od, md, Wd, Fd, Rd) {
        const Xd = 4 - jd(Math.floor(Fd) - (dd - md), md);
        return 5 * jd(Math.floor(Rd) - (Od - Wd), Wd) + Xd
      }(Wd, Fd, Rd, Xd, Od, md)
    }

    function iW(dd, Od, md) {
      const Wd = dd.tideCharts;
      for (let Fd = 0; Fd < Wd.length; Fd++)
        if (uW(Wd[Fd], Od, md)) return Wd[Fd];
      return null
    }

    function AW(dd, Od, md) {
      const Wd = Math.max(0, Od - md);
      return Wd > sW ? dd("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Wd / sW))
      }) : Wd > SW ? dd("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Wd / SW))
      }) : dd("skyblockGame:tideChartsTurnSoon")
    }
    class rW extends hd {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(dd, md, Wd), this.translate = Od, this.now = Fd, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.xN = dd => {
          this.picked = dd, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        const Od = this.message;
        if (null !== Od)
          for (const Wd of dd.tideCharts) {
            var md;
            const dd = Od.tideCharts.find((dd => dd.tideChartIsland === Wd.tideChartIsland)),
              Fd = Wd.tideChartLit & ~(null !== (md = null === dd || void 0 === dd ? void 0 : dd.tideChartLit) && void 0 !== md ? md : 0);
            void 0 !== dd && 0 !== Fd && (this.pulse = {
              island: Wd.tideChartIsland,
              cells: Fd,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = dd, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(dd, Od) {
        var md;
        const Wd = null === this.message || Number.isNaN(dd) ? null : iW(this.message, dd, Od),
          Fd = null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.tideChartIsland) && void 0 !== md ? md : null,
          Rd = null === Wd ? -1 : function(dd, Od, md) {
            const [Wd, Fd, Rd, Xd] = dd.tideChartWater;
            return function(dd, Od, md, Wd, Fd, Rd, Xd) {
              return ((Fd - dd) / (md + Xd)) ** 2 + ((Rd - Od) / (Wd + Xd)) ** 2 <= 1
            }(Wd, Fd, Rd, Xd, Od, md, 2) ? VW(dd, Od, md) : -1
          }(Wd, dd, Od);
        return (Fd !== this.hereIsland || Rd !== this.hereCell) && (this.hereIsland = Fd, this.hereCell = Rd, null !== Fd && (this.lastIsland = Fd), !0)
      }
      afterRender(dd) {
        if (null === this.message) return;
        this.lastX = null === dd ? Number.NaN : dd[0], this.lastZ = null === dd ? Number.NaN : dd[2];
        const Od = this.locate(this.lastX, this.lastZ),
          md = this.expirePulses();
        (Od || md || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const dd = this.now();
        return !(!this.open || dd - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = dd, AW(this.translate, this.message.tideChartTurnsInMs, dd - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(dd, Od) {
        const md = null === this.message ? null : iW(this.message, dd, Od);
        if (null === md) return;
        const Wd = VW(md, dd, Od);
        0 === (md.tideChartPreBlank & 1 << Wd) && (this.cast = {
          island: md.tideChartIsland,
          cell: Wd,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const dd = this.now();
        let Od = !1;
        return 0 !== this.pulse.cells && dd - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Od = !0), null !== this.cast && dd - this.cast.atMs >= 1500 && (this.cast = null, Od = !0), Od
      }
      setTranslator(dd) {
        this.translate = dd, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(dd, Od) {
        var md;
        return null !== (md = dd.tideCharts.find((dd => dd.tideChartIsland === Od))) && void 0 !== md ? md : null
      }
      describe(dd) {
        var Od, md, Wd;
        const Fd = dd.tideChartIsland,
          Rd = [];
        for (let Nd = 0; Nd < 25; Nd++) {
          const Od = 1 << Nd;
          0 !== (dd.tideChartLit & Od) ? Rd.push("lit") : 0 !== (dd.tideChartClear & Od) ? Rd.push("clear") : 0 !== (dd.tideChartPreBlank & Od) ? Rd.push("shore") : Rd.push("water")
        }
        const Xd = function(dd) {
            let Od = 0;
            for (let md = dd >>> 0; 0 !== md; md &= md - 1) Od++;
            return Od
          }(dd.tideChartLit),
          Kd = dd.tideChartInkCount,
          hd = this.translate(dd.tideChartIslandNameKey),
          vd = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Xd),
            ink: String(Kd)
          }),
          Qd = null === dd.tideChartPictureNameKey ? null : this.translate(dd.tideChartPictureNameKey),
          td = this.hereIsland === Fd && -1 !== this.hereCell ? this.hereCell : null,
          od = [`${hd}: ${vd}.`];
        if (null !== Qd && od.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Qd
          })), null !== td) {
          const dd = Math.floor(td / 5) + 1,
            Od = td % 5 + 1;
          od.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(dd),
            column: String(Od)
          }))
        }
        return {
          island: Fd,
          islandName: hd,
          cells: Rd,
          hereCell: td,
          lit: Xd,
          ink: Kd,
          litText: vd,
          pictureName: Qd,
          gridLabel: od.join(" "),
          pulseCells: this.pulse.island === Fd ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Od = this.cast) || void 0 === Od ? void 0 : Od.island) === Fd ? this.cast.cell : null,
          castToken: null !== (md = null === (Wd = this.cast) || void 0 === Wd ? void 0 : Wd.token) && void 0 !== md ? md : 0
        }
      }
      buildSnapshot() {
        var dd, Od, md;
        const Wd = this.message;
        if (null === Wd || 0 === Wd.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Fd = this.findChart(Wd, this.hereIsland),
          Rd = null !== (dd = null !== (Od = null !== (md = this.findChart(Wd, this.open ? this.picked : null)) && void 0 !== md ? md : Fd) && void 0 !== Od ? Od : this.findChart(Wd, this.lastIsland)) && void 0 !== dd ? dd : Wd.tideCharts[0],
          Xd = null === Fd ? null : this.describe(Fd);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Xd,
          card: Rd === Fd ? Xd : this.describe(Rd),
          turnsText: AW(this.translate, Wd.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Wd.tideChartBookCount)
          }),
          tabs: Wd.tideCharts.map((dd => ({
            island: dd.tideChartIsland,
            name: this.translate(dd.tideChartIslandNameKey),
            selected: dd.tideChartIsland === Rd.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const GW = "skyblockRegularsView",
      nW = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      LW = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function PW(dd, Od) {
      return "given" === dd ? Od.given : "owed" === dd ? Od.owed : Od.goal
    }
    class zW extends hd {
      constructor(dd, Od, md, Wd) {
        super(dd, md, Wd), this.translate = Od, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = dd => dd, this.openIsland = dd => {
          this.selected = dd, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = dd => {
          this.selected = dd, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        this.message = dd, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const dd = this.openedFromReachLog;
        return this.openedFromReachLog = !1, dd
      }
      setTranslator(dd, Od, md) {
        this.translate = dd, void 0 !== md && (this.itemName = md), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(dd, Od, md) {
        return {
          text: this.translate(PW(dd, Od), md),
          given: "given" === dd
        }
      }
      describeRegular(dd, Od) {
        const md = this.translate,
          Wd = null !== dd.regularKg,
          Fd = dd.regularMeetings,
          Rd = Wd ? 0 === Fd ? md("skyblockGame:regularsNotMet") : 1 === Fd ? md("skyblockGame:regularsMeetingsOne") : md("skyblockGame:regularsMeetings", {
            count: Fd
          }) : "";
        return {
          id: dd.regularId,
          name: md(dd.regularNameKey),
          line: md(dd.regularLineKey),
          itemName: dd.regularFishItem,
          fishName: this.itemName(dd.regularFishItem),
          tagged: Wd,
          size: null === dd.regularKg ? md("skyblockGame:regularsNotTagged") : md("skyblockGame:regularsSize", {
            kg: dd.regularKg.toFixed(1)
          }),
          meetings: Rd,
          chance: md("skyblockGame:regularsChance", {
            count: dd.regularOneInCasts
          }),
          resting: dd.regularRestingToday,
          gifts: [{
            text: md("skyblockGame:regularsGiftFlare"),
            given: Fd >= 3
          }, this.describeGift(dd.regularTintGift, nW, {
            tint: md(dd.regularTintNameKey)
          })],
          history: [...dd.regularHistory].reverse().map((dd => {
            const Wd = dd.regularMeetingKg.toFixed(1),
              Fd = Od - dd.regularMeetingDay;
            return Fd <= 0 ? md("skyblockGame:regularsToday", {
              kg: Wd
            }) : md("skyblockGame:regularsDaysAgo", {
              days: Fd,
              kg: Wd
            })
          }))
        }
      }
      describeIsland(dd, Od) {
        return {
          id: dd.regularsIslandId,
          name: this.translate(dd.regularsIslandNameKey),
          charm: this.describeGift(dd.regularsCharmGift, LW, {
            charm: this.translate(dd.regularsCharmNameKey)
          }),
          regulars: dd.regularsList.map((dd => this.describeRegular(dd, Od)))
        }
      }
      buildSnapshot() {
        var dd, Od, md, Wd;
        const Fd = this.message;
        if (null === Fd) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Rd = Fd.regularsIslands.map((dd => this.describeIsland(dd, Fd.regularsToday))),
          Xd = null !== (dd = null !== (Od = null === (md = Rd.find((dd => dd.id === this.selected))) || void 0 === md ? void 0 : md.id) && void 0 !== Od ? Od : null === (Wd = Rd[0]) || void 0 === Wd ? void 0 : Wd.id) && void 0 !== dd ? dd : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Xd,
          islands: Rd
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const cW = "skyblockHiddenWatersView";
    class jW {
      constructor(dd) {
        this.lQ = dd, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Yt(dd) {
        this.snapshot = function(dd) {
          const [Od, md] = dd.hiddenWatersMapSize, Wd = (dd, Wd) => ({
            left: 1 - dd / Od,
            top: Wd / md
          }), Fd = new Map;
          for (const [Xd, Kd] of dd.hiddenWatersGlimpses) {
            var Rd;
            const dd = null !== (Rd = Fd.get(Xd)) && void 0 !== Rd ? Rd : [];
            dd.push(Kd), Fd.set(Xd, dd)
          }
          return {
            found: dd.hiddenWatersFound,
            total: dd.hiddenWatersTotal,
            aspect: md / Od,
            pins: dd.hiddenWatersPins.map((dd => {
              let [Od, md] = dd;
              return Wd(Od, md)
            })),
            islands: dd.hiddenWatersIslands.map((dd => {
              let [Fd, Rd, Xd, Kd] = dd;
              const {
                left: hd,
                top: vd
              } = Wd(Xd + 1, Rd);
              return {
                left: hd,
                top: vd,
                width: (Xd + 1 - Fd) / Od,
                height: (Kd + 1 - Rd) / md
              }
            })),
            glimpses: Fd
          }
        }(dd), this.lQ(this.snapshot)
      }
    }
    const DW = "skyblockDialogueView";
    class eW extends hd {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(dd, md, Wd), this.translate = Od, this.requestDialogue = Fd, this.now = Rd, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = dd => {
          this.selection = {
            kind: "quest",
            questId: dd
          }, this.request(), this.show()
        }, this.selectCharacter = dd => {
          this.selection = {
            kind: "character",
            npcId: dd
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Yt(dd) {
        this.received = !0, this.scripts = dd.questDialogueScripts, this.speakers = new Map(dd.questDialogueSpeakers.map((dd => [dd.dialogueSpeakerId, dd]))), this.emit()
      }
      setTranslator(dd) {
        this.translate = dd, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const dd = this.now();
        dd >= this.requestAvailableAt && (this.requestAvailableAt = dd + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var dd;
        const Od = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Od,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const md = this.selection;
        if ("quest" === md.kind) {
          const dd = this.scripts.find((dd => dd.dialogueQuestId === md.questId));
          return {
            ...Od,
            characters: [],
            questFocus: md.questId,
            conversations: dd ? [this.conversation(dd)] : []
          }
        }
        const Wd = [];
        for (let Rd = this.scripts.length - 1; Rd >= 0; Rd--) {
          const dd = this.scripts[Rd].dialogueLines;
          for (let Od = dd.length - 1; Od >= 0; Od--) Wd.includes(dd[Od].dialogueSpeakerId) || Wd.push(dd[Od].dialogueSpeakerId)
        }
        const Fd = null !== md.npcId && Wd.includes(md.npcId) ? md.npcId : null !== (dd = Wd[0]) && void 0 !== dd ? dd : null;
        return {
          ...Od,
          characters: Wd.map((dd => {
            var Od, md;
            return {
              id: dd,
              styling: null !== (Od = null === (md = this.speakers.get(dd)) || void 0 === md ? void 0 : md.dialogueSpeakerStyling) && void 0 !== Od ? Od : dd,
              selected: dd === Fd
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((dd => dd.dialogueLines.some((dd => dd.dialogueSpeakerId === Fd)))).map((dd => this.conversation(dd))).reverse()
        }
      }
      conversation(dd) {
        let Od = null;
        return {
          questId: dd.dialogueQuestId,
          questName: this.translate(dd.dialogueQuestNameKey),
          completed: dd.dialogueQuestCompleted,
          lines: dd.dialogueLines.map(((dd, md) => {
            var Wd;
            const Fd = dd.dialogueSpeakerId === Od || null === (Wd = this.speakers.get(dd.dialogueSpeakerId)) || void 0 === Wd ? void 0 : Wd.dialogueSpeakerStyling;
            return Od = dd.dialogueSpeakerId, {
              key: md,
              display: {
                line: {
                  translationKey: dd.dialogueLineKey,
                  params: this.params(dd.dialogueLineParams)
                },
                speakerName: Fd,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(dd) {
        if (void 0 !== dd) return Object.fromEntries(Object.entries(dd).map((dd => {
          let [Od, md] = dd;
          return [Od, "string" === typeof md ? md : this.translate(md.translationKey)]
        })))
      }
    }
    var IW = md(689),
      lW = md(1322),
      CW = md(107);
    const ZW = "skyblockAutographsView";

    function kW(dd) {
      const Od = IW.l[dd];
      return {
        label: Od.chatTag.map((dd => dd.str)).join(""),
        icon: Od.icon,
        colour: Od.mainRGB
      }
    }
    class fW extends hd {
      constructor(dd) {
        let Od = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Od, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Yt(dd) {
        this.signatures = dd.autographSignatures, dd.autographOpen ? this.show() : this.emit()
      }
      setTranslator(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Od, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var dd;
        const Od = null !== (dd = this.signatures) && void 0 !== dd ? dd : [],
          md = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Wd = [...Od].sort(((dd, Od) => Number(null !== Od.autographRank) - Number(null !== dd.autographRank) || Od.autographSignedAtMs - dd.autographSignedAtMs)).map((dd => ({
            key: `${dd.autographSignedAtMs}|${dd.autographSignerName}`,
            name: (0, lW.b)(dd.autographSignerName, !CW.featureFlags.canSeeRealPlayerNames),
            rank: null === dd.autographRank ? null : kW(dd.autographRank),
            signedOn: md.format(dd.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Wd,
          total: Wd.length,
          rankTotal: Wd.filter((dd => null !== dd.rank)).length
        }
      }
    }
    const MW = "skyblockHudView",
      dF = () => {},
      OF = {
        getItem: () => null,
        setItem: dF,
        removeItem: dF
      };
    class mF {
      constructor(dd) {
        let {
          translate: Od,
          translateWithIcons: md,
          setMenuOpen: Wd = dF,
          dismissMenu: Fd = () => {
            Wd(!1)
          },
          publishSkills: Rd = dF,
          publishQuests: Xd = dF,
          publishQuestNotification: Kd = dF,
          publishDungeons: hd = dF,
          publishCollections: vd = dF,
          publishMap: td = dF,
          publishHud: od = dF,
          publishPortalTransit: Nd = dF,
          publishDailyReward: qd = dF,
          publishMailbox: Hd = dF,
          publishQuestGraph: yd = dF,
          publishForge: bd = dF,
          publishSmuggler: Td = dF,
          publishKeepersChair: pd = dF,
          publishReachLog: Yd = dF,
          publishLampLight: wd = dF,
          publishMagmaward: Ed = dF,
          publishGlowtide: Jd = dF,
          publishGlowMeter: Ud = dF,
          publishHushWait: xd = dF,
          publishPassage: Bd = dF,
          publishTideCharts: Sd = dF,
          publishRegulars: sd = dF,
          publishHiddenWaters: ud = dF,
          publishDialogue: Vd = dF,
          publishAutographs: Ad = dF,
          isLoadingScreenUp: rd = () => !1,
          onDailyRewardCoinLanded: Gd = dF,
          onDailyRewardStarted: nd = dF,
          onDailyRewardFinished: Ld = dF,
          onDailyRewardItemLanded: Pd = dF,
          onMailboxStarted: zd = dF,
          journeyStorage: cd = OF,
          requestTracking: jd = dF,
          requestTravel: Dd = dF,
          requestDungeonEnter: ed = dF,
          requestQuestJump: Id = dF,
          requestQuestArrive: ld = dF,
          requestForge: Cd = dF,
          requestSmuggle: Zd = dF,
          requestKeepersChairAim: kd = dF,
          requestReachLogOpen: fd = dF,
          requestLampLight: Md = dF,
          requestDialogue: dO = dF
        } = dd;
        this.navigation = void 0, this.map = void 0, this.compass = new gd, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new vW.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = dd => dd, this.close = () => {
          for (const dd of this.panels) dd.close()
        }, this.setMenuOpen = Wd, this.publishHud = od, this.portalTransit = new wm(Nd, cd), this.magmaward = new gW(Ed), this.glowtide = new aW(Jd), this.glowMeter = new JW(Ud), this.hushWait = new xW(xd), this.dailyReward = new Jm(qd, (() => rd() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (dd => {
          this.quests.setNotificationsHeld(dd)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Gd, nd, Ld, Pd);
        const OO = dd => {
          this.panels.some((dd => dd.isOpen())) || (dd ? Fd() : this.setMenuOpen(!1))
        };
        this.skills = new cO(Rd, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Od, void 0, void 0, OO), this.quests = new lO(Xd, jd, Od, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, OO, Kd), this.dungeons = new kO(hd, Od, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, OO, ed), this.collections = new pm(vd, Od, (() => {
          this.beforePanelOpen(this.collections)
        }), OO), this.map = new Qd(td, Dd, Od, (() => {
          this.beforePanelOpen(this.map)
        }), OO), this.questGraph = new Am(yd, Od, (() => {
          this.beforePanelOpen(this.questGraph)
        }), OO, Id, ld, cd), this.forge = new dW(bd, Od, (() => {
          this.beforePanelOpen(this.forge)
        }), OO, Cd), this.smuggler = new WW(Td, Od, (() => {
          this.beforePanelOpen(this.smuggler)
        }), OO, Zd), this.lampLight = new pW(wd, Od, Md, this.commandPacer), this.keepersChair = new tW(pd, Od, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (dd => {
          this.lampLight.onChairClosed(), OO(dd)
        }), kd, Date.now, this.commandPacer), this.reachLog = new bW(Yd, Od, (() => {
          this.beforePanelOpen(this.reachLog)
        }), OO, fd, this.commandPacer), this.passage = new hW(Bd, Od, (() => {
          this.beforePanelOpen(this.passage)
        }), OO), this.tideCharts = new rW(Sd, Od, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), OO), this.regulars = new zW(sd, Od, (() => {
          this.beforePanelOpen(this.regulars)
        }), (dd => {
          this.regulars.takeReturnToReachLog() && !dd && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), OO(dd)
        })), this.hiddenWaters = new jW(ud), this.dialogue = new eW(Vd, Od, (() => {
          this.beforePanelOpen(this.dialogue)
        }), OO, dO), this.autographs = new fW(Ad, (() => {
          this.beforePanelOpen(this.autographs)
        }), OO), this.mailbox = new Sm(Hd, (() => rd() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), zd), this.quests.translateWithIcons = null !== md && void 0 !== md ? md : null, this.skills.onLevelUp = dd => {
          this.quests.notify(dd)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new PO(this.map, this.quests, this.compass, Od)
      }
      getHudSnapshot() {
        const dd = this.hudSnapshot,
          Od = this.dailyReward.getHeldCoins();
        return null === dd || Od <= 0 || !("hudPurseCoins" in dd) ? dd : {
          ...dd,
          hudPurseCoins: Math.max(0, dd.hudPurseCoins - Od)
        }
      }
      receiveHud(dd) {
        this.hudSnapshot = dd, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(dd) {
        this.setMenuOpen(!0);
        const Od = dd === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = dd;
        for (const md of this.panels) md === dd || Od && md === this.reachLog || md.close();
        this.openingPanel = null
      }
      setTranslator(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Od => this.resolveItemName(Od, dd);
        this.quests.translateWithIcons = null !== md && void 0 !== md ? md : null, this.navigation.setTranslator(dd, Od), this.lampLight.setTranslator(dd, Od), this.mailbox.setItemName(Wd);
        for (const Fd of this.panels) Fd.setTranslator(dd, Od, Wd)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const dd of this.panels) dd.dispose()
      }
    }
    var WF = md(1155),
      FF = md.n(WF),
      RF = md(29),
      XF = md(38243),
      KF = md(4627),
      hF = md(2079),
      vF = md(2060),
      QF = md(35563),
      tF = md(1238),
      oF = md(1566),
      NF = md(1341);

    function qF(dd) {
      let {
        controller: Od,
        minimap: md,
        children: Wd
      } = dd;
      const Fd = (0, oF.i)(MW, Od.getHudSnapshot()),
        [Rd, Xd] = (0, Ed.useState)(Od.skills.getSnapshot().overallLevel);
      (0, oF.f)(zO, (dd => {
        Xd(dd.overallLevel)
      }));
      const Kd = (0, Ed.useRef)(null);
      (0, oF.f)(Em, (dd => {
        ! function(dd, Od) {
          if (null === dd || "function" !== typeof dd.animate) return;
          const md = Od ? 1.35 : 1.15;
          dd.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${md})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Od ? 320 : 160,
            easing: "ease-out"
          }), dd.classList.toggle("Receiving", !Od), Od && (dd.classList.remove("Shine"), dd.offsetWidth, dd.classList.add("Shine"))
        }(Kd.current, dd)
      }));
      const {
        t: hd
      } = (0, tF.G)(), {
        isTouchScreen: vd
      } = (0, RF.p)(["isTouchScreen"]), [Qd, od] = (0, Ed.useState)(null);
      return (0, KF.k)(Qd, ".SkyblockRightHud"), null !== Fd || md ? (0, NF.jsx)(XF.h, {
        placement: "topRight",
        children: (0, NF.jsxs)("div", {
          className: FF()("SkyblockRightHud", {
            TouchScreen: vd
          }),
          children: [md, null !== Fd && (0, NF.jsxs)("div", {
            ref: od,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Fd ? (0, NF.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Fd.hudHelpText
            }) : (0, NF.jsxs)(NF.Fragment, {
              children: [(0, NF.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, NF.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, NF.jsx)("strong", {
                    style: {
                      color: td.E.cyanUiText
                    },
                    children: hd(Fd.hudZoneNameKey)
                  }), null !== Rd && (0, NF.jsx)("span", {
                    style: {
                      color: td.E.goldUiText
                    },
                    children: hd("skyblockGame:level", {
                      level: (0, QF.g)(Rd)
                    })
                  })]
                }), (0, NF.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Kd,
                  children: [(0, NF.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, NF.jsx)(hF.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, QF.g)(Fd.hudPurseCoins)]
                })]
              }), Fd.hudClockText.length > 0 && (0, NF.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, NF.jsx)(vF.d, {
                  text: Fd.hudClockText
                })
              })]
            }), Wd, "hudZoneNameKey" in Fd && (0, NF.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var HF = md(40131);

    function yF(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)();
      return (0, NF.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Od.display.mountPlayer,
        title: md("skyblockGame:mapYouAreHere"),
        children: (0, NF.jsx)(HF.c, {
          icon: "player"
        })
      })
    }
    const bF = md(40138),
      TF = Object.fromEntries(bF.keys().map((dd => [dd.replace(/^\.\/(.*)\.png$/, "$1"), bF(dd)])));

    function pF(dd, Od) {
      var md;
      return null !== (md = TF[dd]) && void 0 !== md ? md : TF[Od]
    }

    function YF(dd) {
      let {
        imageKey: Od,
        fallbackImageKey: md,
        geometryKey: Wd,
        alt: Fd,
        className: Rd
      } = dd;
      const [Xd, Kd] = (0, Ed.useState)((() => function(dd, Od) {
        return [{
          id: 0,
          imageKey: dd,
          geometryKey: Od,
          phase: "shown"
        }]
      }(Od, Wd))), hd = function(dd, Od, md) {
        const Wd = dd[dd.length - 1];
        if (Wd.imageKey === Od && Wd.geometryKey === md) return dd;
        const Fd = {
          id: Wd.id + 1,
          imageKey: Od,
          geometryKey: md,
          phase: "entering"
        };
        return Wd.geometryKey === md ? [{
          ...Wd,
          phase: "leaving"
        }, Fd] : [Fd]
      }(Xd, Od, Wd);
      return hd !== Xd && Kd(hd), (0, NF.jsx)(NF.Fragment, {
        children: hd.map((dd => (0, NF.jsx)("img", {
          className: FF()("SkyblockMapTerrainImage", Rd, {
            Entering: "entering" === dd.phase,
            Leaving: "leaving" === dd.phase
          }),
          src: pF(dd.imageKey, md),
          alt: "leaving" === dd.phase ? "" : Fd,
          onAnimationEnd: () => {
            Kd((Od => function(dd, Od) {
              return dd.flatMap((dd => dd.id !== Od ? [dd] : "leaving" === dd.phase ? [] : [{
                ...dd,
                phase: "shown"
              }]))
            }(Od, dd.id)))
          }
        }, dd.id)))
      })
    }
    var gF = md(5194),
      wF = md(1572);

    function aF(dd) {
      if ("Tab" !== dd.key) return;
      const Od = Array.from(dd.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        md = Od.indexOf(document.activeElement);
      var Wd;
      if (dd.shiftKey && md <= 0) dd.preventDefault(), null === (Wd = Od.at(-1)) || void 0 === Wd || Wd.focus();
      else if (!dd.shiftKey && (-1 === md || md === Od.length - 1)) {
        var Fd;
        dd.preventDefault(), null === (Fd = Od[0]) || void 0 === Fd || Fd.focus()
      }
    }

    function EF() {
      const dd = (0, Ed.useRef)(null);
      return (0, Ed.useCallback)((Od => {
        var md;
        Od ? (dd.current = document.activeElement, Od.focus()) : null === (md = dd.current) || void 0 === md || md.focus()
      }), [])
    }

    function JF(dd) {
      let {
        percent: Od,
        label: md,
        levelUpToken: Wd,
        colour: Fd
      } = dd;
      return (0, NF.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": md,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Od,
        "aria-valuetext": md,
        children: [(0, NF.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Od/100})`
          }
        }), null !== Wd && void 0 !== Wd && (0, NF.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Fd
          }
        }, Wd)]
      })
    }

    function UF(dd) {
      let {
        mount: Od
      } = dd;
      return (0, NF.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Od,
        hidden: !0,
        children: (0, NF.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, NF.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, NF.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function xF(dd, Od, md, Wd) {
      (0, Ed.useLayoutEffect)((() => {
        const Fd = dd.current;
        if (!md || null === Od || void 0 === Od || !Od.local || !Fd) return;
        const Rd = Array.from(Fd.querySelectorAll(".SkyblockMapNode")),
          Xd = [...Od.points, ...Od.portals],
          Kd = () => {
            const dd = Fd.clientWidth,
              md = Fd.clientHeight,
              Kd = Rd.map(((Fd, Rd) => {
                const Kd = Xd[Rd];
                return {
                  id: Kd.id,
                  portal: Rd >= Od.points.length,
                  x: Kd.position[0] * dd / 100,
                  y: Kd.position[1] * md / 100,
                  width: Fd.offsetWidth / Wd,
                  height: Fd.offsetHeight / Wd
                }
              })),
              hd = new Map(Xd.map(((dd, Od) => [dd.id, Rd[Od]])));
            for (const Od of function(dd, Od, md) {
                const Wd = [],
                  Fd = [...dd].sort(((dd, Od) => Number(Od.portal) - Number(dd.portal) || dd.id.localeCompare(Od.id)));
                for (const Rd of Fd) {
                  const dd = dd => Math.max(Rd.width / 2, Math.min(Od - Rd.width / 2, dd)),
                    Fd = dd => Math.max(Rd.height / 2, Math.min(md - Rd.height / 2, dd)),
                    Xd = [dd(Rd.x)],
                    Kd = [Fd(Rd.y)];
                  for (const Od of Wd) Xd.push(dd(Od.x - (Od.width + Rd.width) / 2 - 4), dd(Od.x + (Od.width + Rd.width) / 2 + 4)), Kd.push(Fd(Od.y - (Od.height + Rd.height) / 2 - 4), Fd(Od.y + (Od.height + Rd.height) / 2 + 4));
                  let hd = {
                      ...Rd,
                      x: Xd[0],
                      y: Kd[0]
                    },
                    vd = 1 / 0,
                    Qd = 1 / 0;
                  for (const Od of new Set(Xd))
                    for (const dd of new Set(Kd)) {
                      let md = 0;
                      for (const Xd of Wd) md += Math.max(0, (Rd.width + Xd.width) / 2 + 4 - Math.abs(Od - Xd.x)) * Math.max(0, (Rd.height + Xd.height) / 2 + 4 - Math.abs(dd - Xd.y));
                      const Fd = (Od - Rd.x) ** 2 + (dd - Rd.y) ** 2;
                      (md < vd || md === vd && Fd < Qd) && (hd = {
                        ...Rd,
                        x: Od,
                        y: dd
                      }, vd = md, Qd = Fd)
                    }
                  Wd.push(hd)
                }
                return Wd
              }(Kd, dd, md)) {
              const dd = hd.get(Od.id);
              dd.style.left = `${Od.x}px`, dd.style.top = `${Od.y}px`
            }
          };
        Kd();
        const hd = new ResizeObserver(Kd);
        hd.observe(Fd);
        for (const dd of Rd) hd.observe(dd);
        return () => {
          hd.disconnect()
        }
      }), [dd, Od, md, Wd])
    }
    var BF = md(40213),
      SF = md(40222);

    function sF(dd) {
      var Od, md, Wd, Fd;
      let {
        controller: Rd,
        navigation: Xd
      } = dd;
      const Kd = (0, oF.i)(vd, Rd.getSnapshot()),
        {
          t: hd
        } = (0, tF.G)(),
        Qd = EF(),
        td = Kd.presentation,
        od = (0, Ed.useRef)(null),
        Nd = (0, Ed.useRef)(null),
        qd = Boolean(Kd.open && (null === td || void 0 === td ? void 0 : td.local) && td.background),
        Hd = (0, BF.d)(od, qd, `${Kd.open}|${Kd.tab}|${null===td||void 0===td||null===(Od=td.background)||void 0===Od?void 0:Od.geometryKey}`, null !== (md = null === td || void 0 === td || null === (Wd = td.background) || void 0 === Wd ? void 0 : Wd.ratio) && void 0 !== md ? md : 2);
      if (xF(Nd, td, Kd.open, Hd.view.zoom), !td || !Kd.open) return null;
      const yd = td.local ? td.background : null,
        bd = {
          "--map-ratio": String(null !== (Fd = null === yd || void 0 === yd ? void 0 : yd.ratio) && void 0 !== Fd ? Fd : 2),
          backgroundColor: null === yd || void 0 === yd ? void 0 : yd.colour
        },
        Td = {
          "--map-zoom": String(Hd.view.zoom),
          transform: `translate(${100*Hd.view.x}%, ${100*Hd.view.y}%) scale(${Hd.view.zoom})`
        };
      return (0, NF.jsx)(gF.c, {
        show: Kd.open,
        close: Rd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Qd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, NF.jsx)("h2", {
                id: "skyblockMapTitle",
                children: hd("skyblockGame:map")
              }), td.minimap && (0, NF.jsx)("p", {
                children: td.minimap.caption
              })]
            }), (0, NF.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((dd => (0, NF.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": dd === Kd.tab ? "true" : void 0,
                className: FF()({
                  Selected: dd === Kd.tab
                }),
                "aria-pressed": dd === Kd.tab,
                onClick: () => {
                  Rd.selectTab(dd)
                },
                children: hd("local" === dd ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, dd)))
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Rd.dismiss
            })]
          }), (0, NF.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, NF.jsxs)("div", {
              ref: od,
              className: FF()("SkyblockMapCanvas", {
                Local: td.local,
                Overview: !td.local,
                Zoomed: Hd.view.zoom > 1
              }),
              style: bd,
              children: [(0, NF.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: qd ? Td : void 0,
                children: (0, NF.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Nd,
                  children: [yd && (0, NF.jsx)(YF, {
                    className: "SkyblockMapTerrain",
                    imageKey: yd.imageKey,
                    fallbackImageKey: yd.fallbackImageKey,
                    geometryKey: yd.geometryKey,
                    alt: yd.label
                  }), td.local && (0, NF.jsx)(UF, {
                    mount: Xd.display.mountMapSearchArea
                  }), !td.local && (0, NF.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: td.connections.map((dd => (0, NF.jsx)("line", {
                      className: FF()({
                        Explored: dd.explored
                      }),
                      x1: dd.start[0],
                      y1: dd.start[1],
                      x2: dd.end[0],
                      y2: dd.end[1]
                    }, dd.id)))
                  }), td.points.map((dd => {
                    const Od = !td.local && dd.thumbnail ? TF[dd.thumbnail] : void 0;
                    return (0, NF.jsxs)("div", {
                      className: FF()("SkyblockMapNode", {
                        Current: dd.current
                      }),
                      style: {
                        left: `${dd.position[0]}%`,
                        top: `${dd.position[1]}%`
                      },
                      children: [(0, NF.jsxs)(wF.g, {
                        className: FF()("SkyblockMapPin", {
                          Unknown: !dd.visited,
                          Current: dd.current
                        }),
                        disabled: Kd.pending,
                        onClick: () => {
                          Rd.travel(dd.travelKind, dd.travelId)
                        },
                        children: [Od && (0, NF.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Od,
                          alt: ""
                        }), !Od && (0, NF.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, NF.jsx)(HF.c, {
                            icon: dd.icon
                          })
                        }), (0, NF.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: dd.name
                        })]
                      }), dd.current && (0, NF.jsx)("span", {
                        className: FF()("SkyblockMapHereBadge", {
                          Above: dd.position[1] > 50
                        }),
                        children: hd("skyblockGame:mapYouAreHere")
                      })]
                    }, dd.id)
                  })), td.portals.map((dd => (0, NF.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${dd.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${dd.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, NF.jsxs)(wF.g, {
                      className: "SkyblockMapPin",
                      disabled: Kd.pending,
                      onClick: () => {
                        Rd.travel(dd.travelKind, dd.travelId)
                      },
                      children: [(0, NF.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: dd.colour
                        },
                        "aria-hidden": "true",
                        children: (0, NF.jsx)(HF.c, {
                          icon: dd.icon
                        })
                      }), (0, NF.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: dd.name
                      })]
                    })
                  }, dd.id))), td.local && (0, NF.jsx)(yF, {
                    controller: Xd
                  })]
                })
              }), qd && (0, NF.jsx)(SF.d, {
                zoom: Hd,
                zoomInLabel: hd("skyblockGame:mapZoomIn"),
                zoomOutLabel: hd("skyblockGame:mapZoomOut")
              }), (0, NF.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Kd.feedback
              })]
            })
          }), (0, NF.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [td.progress && (0, NF.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, NF.jsx)("span", {
                children: td.progress
              }), (0, NF.jsx)(JF, {
                percent: td.percent,
                label: td.progress
              })]
            }), td.noLandmarks && (0, NF.jsx)("span", {
              children: hd("skyblockGame:mapNoLandmarks")
            }), td.canTravel && (0, NF.jsx)("span", {
              className: "SkyblockMapHint",
              children: hd("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function uF(dd) {
      let {
        view: Od,
        controller: md,
        navigation: Wd
      } = dd;
      const {
        t: Fd
      } = (0, tF.G)(), {
        isTouchScreen: Rd
      } = (0, RF.p)(["isTouchScreen"]);
      return (0, NF.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Fd("skyblockGame:mapLocal"),
        children: [Rd && (0, NF.jsx)(wF.g, {
          className: "SkyblockMinimapOpen",
          onClick: md.showLocal,
          children: Fd("skyblockGame:map")
        }), (0, NF.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Od.colour
          },
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Wd.display.mountTerrain,
            style: {
              width: Od.width,
              height: Od.height
            },
            children: [(0, NF.jsx)(YF, {
              imageKey: Od.imageKey,
              fallbackImageKey: Od.fallbackImageKey,
              geometryKey: Od.geometryKey,
              alt: Od.label
            }), (0, NF.jsx)(UF, {
              mount: Wd.display.mountMinimapSearchArea
            }), Od.markers.map((dd => (0, NF.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${dd.position[0]}%`,
                top: `${dd.position[1]}%`,
                color: dd.colour
              },
              title: dd.name,
              children: (0, NF.jsx)(HF.c, {
                icon: dd.icon
              })
            }, dd.id)))]
          }), (0, NF.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Fd("skyblockGame:mapYouAreHere"),
            children: (0, NF.jsx)(HF.c, {
              icon: "player"
            })
          })]
        }), (0, NF.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Od.caption
        })]
      })
    }

    function VF(dd) {
      let {
        controller: Od
      } = dd;
      return (0, NF.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Od.display.mountCompass,
        children: [(0, NF.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, NF.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, NF.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function iF(dd) {
      let {
        controller: Od,
        surface: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)(), Fd = (0, oF.i)(zO, Od.getSnapshot()), Rd = EF();
      return Fd.enabled ? (0, NF.jsxs)(NF.Fragment, {
        children: ["hud" === md && (0, NF.jsx)(XF.h, {
          placement: "statBars",
          children: Fd.hud && (0, NF.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Fd.hud.colour
            },
            children: [(0, NF.jsx)(JF, {
              percent: Fd.hud.skill.percent,
              label: Fd.hud.skill.xp,
              levelUpToken: Fd.hud.levelUpToken,
              colour: Fd.hud.colour
            }), (0, NF.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, NF.jsxs)("span", {
                children: [Fd.hud.skill.label, " \xb7 ", Fd.hud.skill.level]
              }), (0, NF.jsx)("span", {
                children: Fd.hud.gain
              })]
            })]
          })
        }), "hud" === md && (0, NF.jsx)(XF.h, {
          children: Fd.hud && (0, NF.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, NF.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, NF.jsx)("strong", {
                children: Fd.hud.skill.label
              }), (0, NF.jsx)("span", {
                children: Fd.hud.gain
              })]
            }), (0, NF.jsx)(JF, {
              percent: Fd.hud.skill.percent,
              label: Fd.hud.skill.xp,
              levelUpToken: Fd.hud.levelUpToken,
              colour: Fd.hud.colour
            }), (0, NF.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, NF.jsx)("span", {
                children: Fd.hud.skill.level
              }), (0, NF.jsx)("span", {
                children: Fd.hud.skill.xp
              })]
            })]
          })
        }), "menu" === md && (0, NF.jsx)(gF.c, {
          show: Fd.open,
          close: Od.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, NF.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Rd,
            onKeyDown: aF,
            children: [(0, NF.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, NF.jsxs)("div", {
                children: [(0, NF.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Wd("skyblockGame:skills")
                }), (0, NF.jsx)("p", {
                  children: Wd("skyblockGame:skillsIntro")
                })]
              }), (0, NF.jsx)(wF.j, {
                padIgnore: !0,
                onClick: Od.dismiss
              })]
            }), (0, NF.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, NF.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Fd.skills.map((dd => (0, NF.jsxs)(wF.g, {
                  className: FF()("SkyblockSkillCard", {
                    Selected: dd.selected
                  }),
                  ariaPressed: dd.selected,
                  onClick: () => {
                    Od.select(dd.id)
                  },
                  children: [(0, NF.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, NF.jsx)(hF.c, {
                      itemName: dd.icon,
                      amount: 0
                    })
                  }), (0, NF.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, NF.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, NF.jsx)("strong", {
                        children: dd.label
                      }), (0, NF.jsx)("span", {
                        children: dd.level
                      })]
                    }), (0, NF.jsx)(JF, {
                      percent: dd.percent,
                      label: `${dd.label}: ${dd.xp}`
                    }), (0, NF.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: dd.xp
                    })]
                  })]
                }, dd.id)))
              }), Fd.detail && (0, NF.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, NF.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, NF.jsx)(hF.c, {
                    itemName: Fd.detail.icon,
                    amount: 0
                  })
                }), (0, NF.jsx)("h3", {
                  children: Fd.detail.label
                }), (0, NF.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Fd.detail.level
                }), (0, NF.jsx)("p", {
                  children: Fd.detail.description
                }), (0, NF.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, NF.jsx)("strong", {
                    children: Wd("skyblockGame:currentBenefit")
                  }), (0, NF.jsx)("span", {
                    children: Fd.detail.benefit
                  })]
                }), (0, NF.jsx)(JF, {
                  percent: Fd.detail.percent,
                  label: Fd.detail.xp
                }), (0, NF.jsx)("p", {
                  children: Fd.detail.xp
                }), (0, NF.jsx)("h4", {
                  children: Wd("skyblockGame:earnXp")
                }), (0, NF.jsx)("ul", {
                  children: Fd.detail.sources.map((dd => (0, NF.jsx)("li", {
                    children: dd
                  }, dd)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var AF = md(1471),
      rF = md(5616),
      GF = md(387);

    function nF(dd) {
      let {
        item: Od
      } = dd;
      return (0, NF.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, NF.jsx)(hF.c, {
          itemName: Od,
          amount: 0
        })
      })
    }

    function LF(dd) {
      let {
        name: Od,
        percent: md,
        progress: Wd
      } = dd;
      return (0, NF.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, NF.jsx)(JF, {
          percent: md,
          label: `${(0,GF.rb)(Od)}: ${Wd}`
        }), (0, NF.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Wd
        })]
      })
    }

    function PF(dd) {
      let {
        subquests: Od,
        showDescriptions: md = !1
      } = dd;
      return (0, NF.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Od.map((dd => {
          const Od = md && "completed" === dd.status,
            Wd = (0, NF.jsxs)("li", {
              className: FF()("SkyblockQuestStep", dd.status, {
                JustFinished: dd.justFinished,
                JustUnlocked: dd.justUnlocked
              }),
              tabIndex: Od ? 0 : void 0,
              children: [null !== dd.iconItem && (0, NF.jsx)(nF, {
                item: dd.iconItem
              }), null === dd.iconItem && (0, NF.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === dd.status ? "\u2713" : "skipped" === dd.status ? "\u2212" : "\u25cb"
              }), (0, NF.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, NF.jsx)("strong", {
                  children: (0, NF.jsx)(rF.c, {
                    text: dd.name
                  })
                }), md && !Od && (0, NF.jsx)("span", {
                  children: (0, NF.jsx)(rF.c, {
                    text: dd.description
                  })
                }), null !== dd.barPercent && (0, NF.jsx)(LF, {
                  name: dd.name,
                  percent: dd.barPercent,
                  progress: dd.progress
                }), null === dd.barPercent && !Od && (0, NF.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: dd.statusLabel
                })]
              })]
            }, dd.id);
          return Od ? (0, NF.jsx)(AF.g, {
            delayShow: 200,
            tooltipInner: (0, NF.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, NF.jsx)("span", {
                children: (0, NF.jsx)(rF.c, {
                  text: dd.description
                })
              }), (0, NF.jsx)("strong", {
                children: dd.statusLabel
              })]
            }),
            children: Wd
          }, dd.id) : Wd
        }))
      })
    }

    function zF(dd) {
      let {
        quest: Od,
        select: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)(), Fd = Od.focusStep;
      return (0, NF.jsxs)(wF.g, {
        className: FF()("SkyblockQuestCard", {
          Selected: Od.selected,
          Tracked: Od.tracked
        }),
        onClick: () => {
          md(Od.id)
        },
        children: [(0, NF.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, NF.jsx)("strong", {
            children: (0, NF.jsx)(rF.c, {
              text: Od.name
            })
          }), Od.tracked && (0, NF.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Wd("skyblockGame:currentQuest")
          })]
        }), Fd && (0, NF.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Fd.iconItem && (0, NF.jsx)(nF, {
            item: Fd.iconItem
          }), (0, NF.jsx)(LF, {
            name: Fd.name,
            percent: Fd.barPercent,
            progress: Fd.progress
          })]
        }), (0, NF.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Od.progress
        })]
      })
    }

    function cF(dd) {
      let {
        controller: Od,
        surface: md
      } = dd;
      const Wd = (0, oF.i)(eO, Od.getSnapshot()),
        {
          t: Fd
        } = (0, tF.G)(),
        Rd = EF();
      return Wd.enabled ? (0, NF.jsxs)(NF.Fragment, {
        children: ["hud" === md && (0, NF.jsx)(NF.Fragment, {
          children: Wd.tracked && (0, NF.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: DO,
            children: (0, NF.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Wd.trackedStepPulse > 0 && (0, NF.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Wd.trackedStepPulse), (0, NF.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Fd("skyblockGame:currentQuest")
              }), (0, NF.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, NF.jsx)("strong", {
                  children: (0, NF.jsx)(rF.c, {
                    text: Wd.tracked.name
                  })
                }), null !== Wd.tracked.clock && (0, NF.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Wd.tracked.clock
                })]
              }), (0, NF.jsx)(PF, {
                subquests: Wd.tracked.subquests
              })]
            })
          })
        }), "menu" === md && (0, NF.jsx)(gF.c, {
          show: Wd.open,
          close: Od.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, NF.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Rd,
            onKeyDown: aF,
            children: [(0, NF.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, NF.jsx)("div", {
                children: (0, NF.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Fd("skyblockGame:quests")
                })
              }), (0, NF.jsx)(wF.j, {
                padIgnore: !0,
                onClick: Od.dismiss
              })]
            }), (0, NF.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, NF.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, NF.jsx)("h3", {
                  children: Fd("skyblockGame:current")
                }), 0 === Wd.active.length && (0, NF.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Fd("skyblockGame:noActiveQuests")
                }), Wd.active.map((dd => (0, NF.jsx)(zF, {
                  quest: dd,
                  select: Od.select
                }, dd.id))), (0, NF.jsx)("h3", {
                  children: (0, NF.jsxs)("button", {
                    type: "button",
                    className: FF()("SkyblockQuestSectionToggle", {
                      Expanded: Wd.completedExpanded
                    }),
                    "aria-expanded": Wd.completedExpanded,
                    onClick: Od.toggleCompleted,
                    children: [(0, NF.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Fd("skyblockGame:completed"), (0, NF.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Wd.completed.length
                    })]
                  })
                }), Wd.completedExpanded && 0 === Wd.completed.length && (0, NF.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Fd("skyblockGame:noCompletedQuests")
                }), Wd.completedExpanded && Wd.completed.map((dd => (0, NF.jsx)(zF, {
                  quest: dd,
                  select: Od.select
                }, dd.id)))]
              }), Wd.detail && (0, NF.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Wd.detail.completed && (0, NF.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Fd("skyblockGame:completedQuest")
                }), (0, NF.jsx)("h3", {
                  children: (0, NF.jsx)(rF.c, {
                    text: Wd.detail.name
                  })
                }), (0, NF.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, NF.jsx)(rF.c, {
                    text: Wd.detail.description
                  })
                }), (0, NF.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Wd.detail.progress, null !== Wd.detail.clock && (0, NF.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Wd.detail.clock
                  })]
                }), (0, NF.jsx)(PF, {
                  subquests: Wd.detail.subquests,
                  showDescriptions: !0
                }), Wd.detail.tracked && (0, NF.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Wd.detail.trackLabel
                }), !Wd.detail.completed && !Wd.detail.tracked && (0, NF.jsx)(wF.m, {
                  onClick: Od.trackSelected,
                  disabled: !Wd.detail.canTrack,
                  children: Wd.detail.trackLabel
                }), Wd.detail.canViewDialogue && (0, NF.jsx)(wF.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Od.viewDialogue,
                  children: Fd("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var jF = md(1443),
      DF = md(3697);

    function eF(dd, Od, md, Wd, Fd) {
      const Rd = dd => "linear" === Fd ? dd : {
          Um: Fd,
          point: dd
        },
        Xd = {};
      for (const [Kd, hd] of Wd)
        for (const [Od, md] of Object.entries(dd(Kd, hd, Rd))) Xd[Od] ??= {
          timeline: []
        }, Xd[Od].timeline.push(md);
      return {
        gm: Od,
        loop: md,
        am: Xd
      }
    }
    const IF = .547,
      lF = .022,
      CF = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      ZF = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function kF(dd, Od, md) {
      const {
        drop: Wd = 0,
        shift: Fd = 0,
        torso: Rd = 0,
        nod: Xd = 0,
        tilt: Kd = 0,
        legs: hd = [0, 0],
        arms: vd = 0,
        spread: Qd = 0
      } = Od, td = IF * Math.cos(Rd) - lF * Math.sin(Rd), od = IF * Math.sin(Rd) + lF * Math.cos(Rd), Nd = md([0, -Wd, Fd]);
      return {
        LowerBody: {
          timeFraction: dd,
          position: Nd,
          rotation: md([0, 0, 0])
        },
        UpperBody: {
          timeFraction: dd,
          position: Nd,
          rotation: md([Rd, 0, Kd])
        },
        HeadMesh: {
          timeFraction: dd,
          position: md([0, td - IF - Wd, od - lF + Fd]),
          rotation: md([Rd + Xd, 0, Kd])
        },
        LegLeftMesh: {
          timeFraction: dd,
          rotation: md([hd[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: dd,
          rotation: md([hd[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: md([vd, 0, Qd])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: md([vd, 0, -Qd])
        }
      }
    }

    function fF(dd, Od, md) {
      return eF(kF, dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function MF(dd) {
      return "number" === typeof dd ? [dd, dd] : dd
    }

    function dR(dd, Od, md) {
      const {
        rise: Wd = 0,
        shift: Fd = 0,
        torso: Rd = 0,
        twist: Xd = 0,
        tilt: Kd = 0,
        nod: hd = 0,
        cock: vd = 0,
        arms: Qd = 0,
        spread: td = 0
      } = Od, [od, Nd] = MF(Qd), [qd, Hd] = MF(td);
      return {
        TorsoNode: {
          timeFraction: dd,
          position: md([0, Wd, Fd]),
          rotation: md([Rd, Xd, Kd])
        },
        HeadMesh: {
          timeFraction: dd,
          rotation: md([hd, 0, vd])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: md([od, 0, qd])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: md([Nd, 0, -Hd])
        }
      }
    }
    const OR = [1.0625, -1, 0];

    function mR(dd) {
      return "number" === typeof dd ? [dd, dd] : dd
    }

    function WR(dd, Od, md) {
      const {
        drop: Wd = 0,
        shift: Fd = 0,
        torso: Rd = 0,
        tilt: Xd = 0,
        nod: Kd = 0,
        cock: hd = 0,
        legs: vd = [0, 0],
        arms: Qd = 0,
        spread: td = 0
      } = Od, [od, Nd] = mR(Qd), [qd, Hd] = mR(td), yd = -Rd, bd = -Xd, [Td, pd, Yd] = function(dd, Od) {
        const [md, Wd, Fd] = [-OR[0], OR[1], -OR[2]], Rd = md * Math.cos(Od) - Wd * Math.sin(Od), Xd = md * Math.sin(Od) + Wd * Math.cos(Od);
        return [Rd - md, -(Xd * Math.cos(dd) - Fd * Math.sin(dd) - Wd), Xd * Math.sin(dd) + Fd * Math.cos(dd) - Fd]
      }(yd, bd), gd = md([0, -Wd, Fd]);
      return {
        TorsoNode: {
          timeFraction: dd,
          position: md([Td, pd - Wd, Yd + Fd]),
          rotation: md([yd, 0, bd])
        },
        HeadMesh: {
          timeFraction: dd,
          rotation: md([-Kd, 0, -hd])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: md([-od, 0, -qd])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: md([-Nd, 0, Hd])
        },
        LegLeftMesh: {
          timeFraction: dd,
          position: gd,
          rotation: md([-vd[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: dd,
          position: gd,
          rotation: md([-vd[1], 0, 0])
        }
      }
    }
    var FR = md(38682),
      RR = md(40001),
      XR = md(40230);

    function KR(dd, Od, md) {
      var Wd, Fd;
      const Rd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return dd + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - dd) * md
        },
        [Xd, Kd] = null !== (Wd = dd.legs) && void 0 !== Wd ? Wd : [0, 0],
        [hd, vd] = null !== (Fd = Od.legs) && void 0 !== Fd ? Fd : [0, 0];
      return {
        drop: Rd(dd.drop, Od.drop),
        shift: Rd(dd.shift, Od.shift),
        torso: Rd(dd.torso, Od.torso),
        nod: Rd(dd.nod, Od.nod),
        tilt: Rd(dd.tilt, Od.tilt),
        legs: [Rd(Xd, hd), Rd(Kd, vd)],
        arms: Rd(dd.arms, Od.arms),
        spread: Rd(dd.spread, Od.spread)
      }
    }
    const hR = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      vR = fF(4400, !0, [
        [0, hR],
        [.16, {
          ...hR,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, hR],
        [.44, {
          ...hR,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, KR(hR, CF, .7)],
        [.66, KR(hR, CF, .78)],
        [.74, KR(hR, ZF, .65)],
        [.86, {
          ...hR,
          drop: .14
        }],
        [1, hR]
      ], "catmull-rom-spline"),
      QR = {
        ...hR,
        drop: .14,
        torso: .3,
        spread: .4
      },
      tR = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      oR = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      NR = {
        caveGolem: vR,
        magmaGolem: fF(3600, !0, [
          [0, QR],
          [.12, {
            ...QR,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...QR,
            tilt: -.08
          }],
          [.4, {
            ...QR,
            tilt: .06,
            drop: .11
          }],
          [.52, KR(QR, CF, .9)],
          [.62, KR(QR, ZF, .8)],
          [.7, KR(QR, ZF, .45)],
          [.78, KR(QR, ZF, .85)],
          [.9, {
            ...QR,
            drop: .17
          }],
          [1, QR]
        ], "catmull-rom-spline"),
        frostWraith: function(dd, Od, md) {
          return eF(dR, dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, tR],
          [.14, {
            ...tR,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...tR,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...tR,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...tR,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...tR,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...tR,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...tR,
            rise: .16,
            tilt: -.04
          }],
          [1, tR]
        ], "catmull-rom-spline"),
        tikiTerror: function(dd, Od, md) {
          return eF(WR, dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, oR],
          [.16, {
            ...oR,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, oR],
          [.44, {
            ...oR,
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
            ...oR,
            drop: .1
          }],
          [1, oR]
        ], "catmull-rom-spline")
      },
      qR = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      HR = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      yR = Object.fromEntries(Object.entries(NR).map((dd => {
        let [Od, md] = dd;
        return [Od, (0, XR.d)((0, FR.h)(md), Od)]
      })));

    function bR(dd) {
      const Od = function(dd) {
        var Od;
        const md = (0, RR.e)(dd).poseRig;
        return null !== (Od = HR[dd]) && void 0 !== Od ? Od : void 0 === md ? null : qR[md]
      }(dd);
      return null === Od ? null : yR[Od]
    }

    function TR(dd) {
      return {
        "--difficulty-colour": dd
      }
    }
    const pR = (0, Ed.lazy)((() => (0, DF.b)(md.e(230).then((() => md(53968))), (dd => dd.MobPreview))));

    function YR(dd) {
      var Od, md, Wd;
      let {
        picker: Fd,
        controller: Rd
      } = dd;
      const {
        t: Xd
      } = (0, tF.G)(), Kd = EF(), {
        page: hd
      } = Fd;
      return (0, NF.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Kd,
        onKeyDown: dd => {
          "ArrowLeft" === dd.key ? (dd.preventDefault(), dd.stopPropagation(), Rd.previous()) : "ArrowRight" === dd.key ? (dd.preventDefault(), dd.stopPropagation(), Rd.next()) : aF(dd)
        },
        style: TR(hd.colour),
        children: [(0, NF.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, NF.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Fd.dungeonName
          }), (0, NF.jsx)(wF.j, {
            padIgnore: !0,
            onClick: Rd.dismiss
          })]
        }), (0, NF.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, NF.jsx)(wF.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Fd.canPrevious,
              onClick: Rd.previous,
              children: (0, NF.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, NF.jsx)(jF.c, {
                  name: "angle-up"
                })
              })
            }), (0, NF.jsxs)("div", {
              className: FF()("SkyblockBossPickerBoss", {
                Locked: !hd.unlocked
              }),
              children: [null !== hd.bossMobType && (0, NF.jsx)(Ed.Suspense, {
                fallback: (0, NF.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, NF.jsx)(pR, {
                  className: "SkyblockBossPickerModel",
                  mobType: hd.bossMobType,
                  variation: hd.bossMobVariation,
                  animation: null !== (Od = bR(hd.bossMobType)) && void 0 !== Od ? Od : void 0
                })
              }), null === hd.bossMobType && (0, NF.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, NF.jsx)(wF.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Fd.canNext,
              onClick: Rd.next,
              children: (0, NF.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, NF.jsx)(jF.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, NF.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [hd.beaten && (0, NF.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), hd.label]
            }), (0, NF.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (md = hd.bossName) && void 0 !== md ? md : "???"
            }), (0, NF.jsxs)("span", {
              className: FF()("SkyblockBossPickerRecord", {
                Locked: null !== hd.lockedHint
              }),
              children: [null !== hd.lockedHintHighlight && (0, NF.jsxs)(NF.Fragment, {
                children: [hd.lockedHintHighlight.before, (0, NF.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: TR(hd.lockedHintHighlight.colour),
                  children: [null !== hd.lockedHintHighlight.icon && (0, NF.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, NF.jsx)(hF.c, {
                      itemName: hd.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), hd.lockedHintHighlight.name]
                }), hd.lockedHintHighlight.after]
              }), null === hd.lockedHintHighlight && (null !== (Wd = hd.lockedHint) && void 0 !== Wd ? Wd : hd.summary)]
            })]
          }), (0, NF.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Fd.pages.map((dd => (0, NF.jsx)("span", {
              className: FF()("SkyblockBossPickerDot", {
                Current: dd.current,
                Locked: !dd.unlocked
              }),
              style: TR(dd.colour)
            }, dd.difficulty)))
          }), (0, NF.jsx)(wF.r, {
            className: "SkyblockBossPickerFight",
            disabled: !hd.unlocked,
            onClick: Rd.enter,
            children: Xd("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function gR(dd) {
      let {
        dungeon: Od,
        select: md
      } = dd;
      return (0, NF.jsxs)(wF.g, {
        className: FF()("SkyblockDungeonCard", {
          Selected: Od.selected
        }),
        onClick: () => {
          md(Od.id)
        },
        children: [(0, NF.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, NF.jsx)("strong", {
            children: Od.name
          }), (0, NF.jsx)("span", {
            children: Od.beatenSummary
          })]
        }), (0, NF.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Od.difficulties.map((dd => (0, NF.jsxs)("span", {
            className: FF()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: dd.beaten
            }),
            style: TR(dd.colour),
            title: dd.summary,
            children: [dd.beaten && (0, NF.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), dd.label]
          }, dd.difficulty)))
        })]
      })
    }

    function wR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(ZO, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF();
      return md.enabled ? (0, NF.jsxs)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [md.picker && (0, NF.jsx)(YR, {
          picker: md.picker,
          controller: Od
        }), !md.picker && (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Wd("skyblockGame:dungeons")
              }), (0, NF.jsx)("p", {
                children: Wd("skyblockGame:dungeonsIntro")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Od.dismiss
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, NF.jsx)("div", {
              className: "SkyblockDungeonList",
              children: md.dungeons.map((dd => (0, NF.jsx)(gR, {
                dungeon: dd,
                select: Od.select
              }, dd.id)))
            }), md.detail && (0, NF.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, NF.jsx)("h3", {
                children: md.detail.name
              }), (0, NF.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: md.detail.difficulties.map((dd => (0, NF.jsxs)("li", {
                  className: FF()("SkyblockDungeonRecord", {
                    Beaten: dd.beaten
                  }),
                  children: [(0, NF.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: TR(dd.colour),
                    children: [dd.beaten && (0, NF.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), dd.label]
                  }), (0, NF.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: dd.summary
                  })]
                }, dd.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function aR(dd) {
      let {
        collection: Od,
        select: md
      } = dd;
      return (0, NF.jsxs)(wF.g, {
        className: FF()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Od.selected,
          Locked: Od.locked
        }),
        ariaPressed: Od.selected,
        onClick: () => {
          md(Od.id)
        },
        children: [(0, NF.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, NF.jsx)(hF.c, {
            itemName: Od.icon,
            amount: 0
          })
        }), (0, NF.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, NF.jsx)("strong", {
              children: Od.name
            }), (0, NF.jsx)("span", {
              children: Od.tier
            })]
          }), (0, NF.jsx)(JF, {
            percent: Od.percent,
            label: `${Od.name}: ${Od.progress}`
          }), (0, NF.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Od.progress
          })]
        })]
      })
    }

    function ER(dd) {
      let {
        collection: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)();
      return (0, NF.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, NF.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, NF.jsx)(hF.c, {
            itemName: Od.icon,
            amount: 0
          })
        }), (0, NF.jsx)("h3", {
          children: Od.name
        }), (0, NF.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Od.tier
        }), (0, NF.jsx)("p", {
          children: Od.locked ? md("skyblockGame:collectionLocked") : Od.count
        }), null !== Od.nextReward && (0, NF.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, NF.jsx)("strong", {
            children: md("skyblockGame:collectionNextReward")
          }), (0, NF.jsx)("span", {
            children: Od.nextReward
          })]
        }), (0, NF.jsx)(JF, {
          percent: Od.percent,
          label: Od.progress
        }), (0, NF.jsx)("p", {
          children: Od.progress
        })]
      })
    }

    function JR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(Tm, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF();
      return md.enabled ? (0, NF.jsx)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Wd("skyblockGame:collections")
              }), (0, NF.jsxs)("p", {
                children: [Wd("skyblockGame:collectionsIntro"), " ", md.tiersUnlocked]
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Od.dismiss
            })]
          }), (0, NF.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: md.categories.map((dd => (0, NF.jsxs)(wF.g, {
              className: FF()("SkyblockCollectionCategory", {
                Selected: dd.selected
              }),
              ariaPressed: dd.selected,
              padTabSelected: dd.selected,
              onClick: () => {
                Od.selectCategory(dd.id)
              },
              children: [(0, NF.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, NF.jsx)(hF.c, {
                  itemName: dd.icon,
                  amount: 0
                })
              }), (0, NF.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, NF.jsx)("strong", {
                  children: dd.label
                }), (0, NF.jsx)("span", {
                  children: dd.tiers
                })]
              })]
            }, dd.id)))
          }), (0, NF.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, NF.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: md.collections.map((dd => (0, NF.jsx)(aR, {
                collection: dd,
                select: Od.select
              }, dd.id)))
            }), md.detail && (0, NF.jsx)(ER, {
              collection: md.detail
            })]
          })]
        })
      }) : null
    }
    const UR = ["completed", "active", "available", "locked"],
      xR = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function BR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(sm, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF();
      return md.enabled ? (0, NF.jsx)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Wd("skyblockDevQuests:title")
              }), (0, NF.jsx)("p", {
                children: Wd("skyblockDevQuests:intro")
              })]
            }), (0, NF.jsx)(wF.j, {
              onClick: Od.dismiss
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [UR.map((dd => (0, NF.jsx)("span", {
              className: FF()("SkyblockQuestGraphLegendState", dd),
              children: Wd(`skyblockDevQuests:state_${dd}`)
            }, dd))), xR.map((dd => (0, NF.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, NF.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, NF.jsx)("line", {
                  className: FF()("SkyblockQuestGraphEdge", dd),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Wd(`skyblockDevQuests:edge_${dd}`)]
            }, dd)))]
          }), (0, NF.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, NF.jsxs)("div", {
              className: FF()("SkyblockQuestGraphCanvas", {
                Planning: md.planning
              }),
              style: {
                width: md.width,
                height: md.height
              },
              children: [(0, NF.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: md.width,
                height: md.height,
                "aria-hidden": "true",
                children: [(0, NF.jsx)("defs", {
                  children: (0, NF.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, NF.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), md.edges.map((dd => (0, NF.jsx)("path", {
                  className: FF()("SkyblockQuestGraphEdge", dd.kind, {
                    InPlan: dd.inPlan
                  }),
                  d: dd.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, dd.key)))]
              }), md.nodes.map((dd => (0, NF.jsxs)("button", {
                type: "button",
                className: FF()("SkyblockQuestGraphNode", dd.state, {
                  InPlan: dd.inPlan,
                  Hovered: dd.hovered
                }),
                style: {
                  left: dd.left,
                  top: dd.top,
                  width: 190,
                  height: 52
                },
                title: dd.id,
                onMouseEnter: () => {
                  Od.hover(dd.id)
                },
                onMouseLeave: () => {
                  Od.hover(null)
                },
                onFocus: () => {
                  Od.hover(dd.id)
                },
                onBlur: () => {
                  Od.hover(null)
                },
                onClick: () => {
                  Od.jump(dd.id)
                },
                children: [(0, NF.jsx)("strong", {
                  children: dd.name
                }), (0, NF.jsx)("span", {
                  children: dd.detail
                })]
              }, dd.id)))]
            })
          })]
        })
      }) : null
    }
    const SR = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      sR = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Dm}ms`,
        "--forge-duration": "2150ms"
      },
      uR = Array.from({
        length: 18
      }, ((dd, Od) => ({
        "--ember-left": `${(4+92*(.618034*Od%1)).toFixed(1)}%`,
        "--ember-size": 3 + Od % 3 * 2 + "px",
        "--ember-drift": 14 * (Od % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Od%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Od%8).toFixed(2)}s`
      })));

    function VR(dd) {
      if (dd.style.removeProperty("--part-size"), null === dd.parentElement || "wrap" === getComputedStyle(dd.parentElement).flexWrap) return;
      const Od = [...dd.children],
        md = getComputedStyle(dd),
        Wd = parseFloat(md.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Fd = (dd.clientHeight - parseFloat(md.rowGap) * (Od.length - 1)) / Od.length,
        Rd = Od.map((dd => {
          const Od = getComputedStyle(dd),
            md = dd.querySelector("h3"),
            Rd = dd.querySelector(".SkyblockForgeParts");
          if (null === md || null === Rd) return Wd;
          const Xd = Fd - parseFloat(Od.paddingTop) - parseFloat(Od.paddingBottom) - md.offsetHeight - parseFloat(getComputedStyle(md).marginBottom),
            Kd = parseFloat(getComputedStyle(Rd).columnGap),
            hd = Rd.children.length;
          let vd = 0;
          for (let Wd = 1; Wd <= hd; Wd++) {
            const dd = Math.ceil(hd / Wd);
            vd = Math.max(vd, Math.min((Rd.clientWidth - Kd * (Wd - 1)) / Wd, (Xd - Kd * (dd - 1)) / dd))
          }
          return vd
        }));
      dd.style.setProperty("--part-size", `${Math.floor(Math.max(Wd,Math.min(...Rd)))}px`)
    }

    function iR(dd) {
      var Od, md, Wd, Fd, Rd;
      let {
        controller: Xd
      } = dd;
      const Kd = (0, oF.i)(fm, Xd.getSnapshot()),
        {
          t: hd
        } = (0, tF.G)(),
        vd = EF(),
        Qd = function() {
          const dd = (0, Ed.useRef)(null),
            Od = (0, Ed.useRef)(null);
          return (0, Ed.useLayoutEffect)((() => {
            null !== dd.current && VR(dd.current)
          })), (0, Ed.useCallback)((md => {
            var Wd;
            null === (Wd = Od.current) || void 0 === Wd || Wd.disconnect(), Od.current = null, dd.current = md, null !== md && (Od.current = new ResizeObserver((() => {
              VR(md)
            })), Od.current.observe(md))
          }), [])
        }(),
        od = function(dd) {
          const Od = (0, Ed.useRef)(null);
          return (0, Ed.useLayoutEffect)((() => {
            const dd = Od.current;
            if (null !== dd) {
              dd.style.removeProperty("font-size");
              for (let Od = 1.7; Od > 1.1 && dd.scrollWidth > dd.clientWidth; Od -= .1) dd.style.fontSize = Od - .1 + "rem"
            }
          }), [dd]), (0, Ed.useCallback)((dd => {
            Od.current = dd
          }), [])
        }(null === (Od = Kd.preview) || void 0 === Od ? void 0 : Od.name),
        Nd = (0, Ed.useRef)(null),
        qd = (0, Ed.useRef)({}),
        Hd = Kd.forging,
        yd = null !== (md = null === Hd || void 0 === Hd ? void 0 : Hd.preview.tier) && void 0 !== md ? md : 0,
        bd = null !== (Wd = null === Hd || void 0 === Hd ? void 0 : Hd.preview.named) && void 0 !== Wd && Wd,
        Td = (0, Ed.useMemo)((() => {
          return null === Hd ? null : {
            flames: (dd = yd, Od = bd, Array.from({
              length: 26 + 6 * dd + (Od ? 20 : 0)
            }, ((dd, Od) => {
              const md = Od < 6,
                Wd = Math.random() * Math.PI * 2,
                Fd = md ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Rd = Math.cos(Wd) * Fd,
                Xd = Math.sin(Wd) * Fd - 2 - 3 * Math.random(),
                Kd = Math.random(),
                [hd, vd, Qd] = md ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Kd < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Kd < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Kd < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": hd,
                "--x0": `${(.15*Rd).toFixed(2)}rem`,
                "--y0": `${(.15*Xd).toFixed(2)}rem`,
                "--x": `${Rd.toFixed(2)}rem`,
                "--y": `${Xd.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${vd.toFixed(2)}rem`,
                "--duration": `${Math.round(Qd)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: lm(yd, bd)
          };
          var dd, Od
        }), [null === Hd || void 0 === Hd ? void 0 : Hd.id]);
      if (!Kd.enabled) return null;
      const pd = Kd.preview,
        Yd = Kd.arriving,
        gd = null !== Yd && !Yd.sameSword,
        wd = null !== pd && (0, NF.jsx)(hF.c, {
          itemName: pd.baseSword,
          amount: 0,
          enchantmentTier: pd.enchantmentTier
        });
      return (0, NF.jsx)(gF.c, {
        show: Kd.open,
        close: Xd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: vd,
          onKeyDown: aF,
          children: [(0, NF.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: uR.map(((dd, Od) => (0, NF.jsx)("span", {
              style: dd
            }, Od)))
          }), (0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: hd("skyblockGame:forgeTitle")
              }), (0, NF.jsx)("p", {
                children: hd("skyblockGame:forgeIntro")
              })]
            }), (0, NF.jsx)(wF.j, {
              onClick: Xd.dismiss
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, NF.jsx)("div", {
              ref: Qd,
              className: FF()("SkyblockForgeSlots", {
                Locked: null !== Hd
              }),
              children: Kd.slots.map((dd => (0, NF.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, NF.jsx)("h3", {
                  children: dd.label
                }), (0, NF.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: dd.parts.map((Od => (0, NF.jsx)("button", {
                    type: "button",
                    className: FF()("SkyblockForgePart", {
                      Selected: Od.selected,
                      Missing: Od.placeholder
                    }),
                    disabled: Od.placeholder,
                    title: Od.placeholder ? hd("skyblockGame:forgePickParts") : Od.itemName,
                    "aria-pressed": Od.selected,
                    onClick: () => {
                      Xd.select(dd.kind, Od.material)
                    },
                    children: (0, NF.jsx)(hF.c, {
                      itemName: Od.itemName,
                      amount: Od.owned
                    })
                  }, Od.material)))
                })]
              }, dd.kind)))
            }), (0, NF.jsxs)("div", {
              className: FF()("SkyblockForgeAnvil", {
                Named: null === pd || void 0 === pd ? void 0 : pd.named
              }),
              style: {
                "--tier": null === pd ? "transparent" : td.ab[pd.enchantmentTier]
              },
              children: [(0, NF.jsxs)("div", {
                className: FF()("SkyblockForgeAltar", {
                  Forging: null !== Hd
                }),
                style: null === Hd ? void 0 : sR,
                children: [(0, NF.jsxs)("div", {
                  className: FF()("SkyblockForgeMount", {
                    Arrive: null !== Yd
                  }),
                  children: [null === pd && (0, NF.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, NF.jsx)(hF.c, {
                      itemName: Kd.unformedSword,
                      amount: 0
                    })
                  }), null !== pd && (0, NF.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== pd && null === Hd && (0, NF.jsx)("div", {
                    ref: Nd,
                    className: "SkyblockForgeFloat",
                    children: (0, NF.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: wd
                    })
                  }), null !== pd && (0, NF.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Im.map(((dd, Od) => (0, NF.jsx)("span", {
                      className: FF()({
                        Rune: "" !== dd.rune
                      }),
                      style: dd.style,
                      children: dd.rune
                    }, Od)))
                  }), null !== Hd && null !== Td && (0, NF.jsxs)(NF.Fragment, {
                    children: [(0, NF.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Td.flames.map(((dd, Od) => (0, NF.jsx)("span", {
                        style: dd
                      }, Od)))
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: qd.current,
                      children: (0, NF.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: wd
                      })
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (yd >= 4 || bd) && (0, NF.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Td.sparks.map(((dd, Od) => (0, NF.jsx)("span", {
                        style: dd
                      }, Od)))
                    }), (0, NF.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, NF.jsx)("p", {
                  className: FF()("SkyblockForgeStatus", null === (Fd = Kd.status) || void 0 === Fd ? void 0 : Fd.tone),
                  children: null === (Rd = Kd.status) || void 0 === Rd ? void 0 : Rd.text
                })]
              }), null === pd && (0, NF.jsx)("p", {
                className: FF()("SkyblockForgeName Waiting", {
                  ArriveText: gd
                }),
                children: hd(Kd.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== pd && (0, NF.jsx)("h3", {
                ref: od,
                className: FF()("SkyblockForgeName", {
                  ArriveText: gd
                }),
                title: pd.name,
                children: pd.name
              }), (null === pd || void 0 === pd ? void 0 : pd.named) && (0, NF.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: hd("skyblockGame:forgeSecret")
              }), (0, NF.jsxs)(wF.r, {
                className: "SkyblockForgeButton",
                disabled: !Kd.canForge,
                title: null === pd ? void 0 : hd("skyblockGame:forgeCoalOwned", {
                  owned: String(Kd.coalOwned)
                }),
                onClick: () => {
                  qd.current = function(dd) {
                    const Od = null === dd ? "none" : getComputedStyle(dd).transform,
                      md = new DOMMatrixReadOnly("none" === Od ? void 0 : Od);
                    return {
                      "--settle-y": `${md.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(md.b,md.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Nd.current), km(), Xd.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [hd("skyblockGame:forgeButton"), null !== pd && (0, NF.jsxs)("span", {
                  className: FF()("SkyblockForgeCost", {
                    Short: pd.coalShort
                  }),
                  children: [(0, NF.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, NF.jsx)(hF.c, {
                      itemName: rm.e,
                      amount: 0
                    })
                  }), pd.coalCost]
                })]
              })]
            }), (0, NF.jsxs)("div", {
              className: FF()("SkyblockForgeDetails", {
                Named: null === pd || void 0 === pd ? void 0 : pd.named
              }),
              children: [(0, NF.jsx)("p", {
                className: FF()("SkyblockForgeLore", {
                  ArriveText: gd
                }),
                title: null === pd || void 0 === pd ? void 0 : pd.lore,
                children: null === pd || void 0 === pd ? void 0 : pd.lore
              }), (0, NF.jsxs)("dl", {
                className: FF()("SkyblockForgeStats", {
                  ArriveText: gd
                }),
                children: [null === pd && SR.map((dd => (0, NF.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, NF.jsx)("dt", {
                    children: hd(dd)
                  }), (0, NF.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, dd))), null === pd || void 0 === pd ? void 0 : pd.stats.map((dd => (0, NF.jsxs)("div", {
                  className: FF()("SkyblockForgeStat", {
                    Better: dd.better
                  }),
                  children: [(0, NF.jsx)("dt", {
                    children: dd.label
                  }), (0, NF.jsx)("dd", {
                    children: dd.value
                  })]
                }, dd.label)))]
              }), (0, NF.jsx)("ul", {
                className: FF()("SkyblockForgeEffects", {
                  ArriveText: gd
                }),
                children: null === pd || void 0 === pd ? void 0 : pd.effects.map((dd => (0, NF.jsx)("li", {
                  children: dd
                }, dd)))
              })]
            })]
          })]
        })
      })
    }
    var AR = md(40235);
    const rR = "Doom Rivet",
      GR = "Doom Crest",
      nR = {
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

    function LR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(OW, Od.getSnapshot()),
        Wd = EF();
      return md.enabled ? (0, NF.jsx)(AR.b, {
        keys: nR,
        open: md.open,
        onDismiss: Od.dismiss,
        wallet: [{
          itemName: rR,
          amount: md.rivetsOwned
        }, {
          itemName: GR,
          amount: md.crestsOwned
        }],
        deals: md.deals.map((dd => ({
          ...dd,
          prices: [{
            itemName: rR,
            amount: dd.rivets,
            owned: md.rivetsOwned
          }, {
            itemName: GR,
            amount: dd.crests,
            owned: md.crestsOwned
          }].filter((dd => {
            let {
              amount: Od
            } = dd;
            return Od > 0
          }))
        }))),
        rotatesAtMs: md.rotatesAtMs,
        status: md.status,
        pending: md.pending,
        boughtCount: md.boughtCount,
        onBuy: Od.buy,
        panelRef: Wd,
        onKeyDown: aF
      }) : null
    }

    function PR(dd) {
      let {
        phase: Od,
        className: md
      } = dd;
      return (0, NF.jsx)("span", {
        className: FF()("SkyblockMoon", `Moon-${Od}`, md),
        "aria-hidden": "true"
      })
    }

    function zR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(FW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)();
      return md.enabled ? (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: FF()("SkyblockPassageChip", md.open && "Open"),
          "aria-label": Wd("skyblockGame:passageChipLabel", {
            phase: md.phaseName
          }),
          title: Wd("skyblockGame:passageChipLabel", {
            phase: md.phaseName
          }),
          onMouseDown: dd => {
            dd.preventDefault()
          },
          onClick: Od.toggle,
          children: (0, NF.jsx)(PR, {
            phase: md.phase
          }, md.phase)
        })
      }) : null
    }

    function cR(dd) {
      let {
        fish: Od
      } = dd;
      return (0, NF.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, NF.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, NF.jsx)(hF.c, {
            itemName: Od.itemName,
            amount: 0
          })
        }), (0, NF.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Od.displayName
          }), (0, NF.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Od.where
          })]
        })]
      })
    }

    function jR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(FW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF();
      return md.enabled ? (0, NF.jsx)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, NF.jsx)(PR, {
              phase: md.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Wd("skyblockGame:passageTitle")
              }), (0, NF.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: md.phaseName
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Od.dismiss
            })]
          }), (0, NF.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Wd("skyblockGame:passageIntro")
          }), (0, NF.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, NF.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, NF.jsx)("h3", {
                children: Wd("skyblockGame:passageVisiting")
              }), (0, NF.jsx)("ul", {
                className: "SkyblockPassageList",
                children: md.visitors.map((dd => (0, NF.jsx)(cR, {
                  fish: dd
                }, dd.itemName)))
              })]
            }), (0, NF.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== md.resting && (0, NF.jsxs)(NF.Fragment, {
                children: [(0, NF.jsx)("h3", {
                  children: Wd("skyblockGame:passageResting")
                }), (0, NF.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, NF.jsx)(cR, {
                    fish: md.resting
                  })
                })]
              }), (0, NF.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, NF.jsx)(PR, {
                  phase: md.nextPhase
                }), (0, NF.jsx)("span", {
                  children: md.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function DR() {
      return (0, NF.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((dd => (0, NF.jsx)("i", {
          style: {
            "--sparkle-index": dd
          }
        }, dd)))
      })
    }

    function eR(dd) {
      var Od;
      let {
        charm: md,
        view: Wd,
        controller: Fd
      } = dd;
      const {
        t: Rd
      } = (0, tF.G)(), Xd = Wd.shop, Kd = (null === (Od = Wd.sparkle) || void 0 === Od ? void 0 : Od.id) === md.id;
      return (0, NF.jsxs)("li", {
        className: FF()("SkyblockLampLightCharm", md.owned && "Owned", md.socketed && "Socketed"),
        children: [Kd && (0, NF.jsx)(DR, {}, Wd.sparkle.count), (0, NF.jsx)("h4", {
          children: md.name
        }), (0, NF.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: md.effect
        }), (0, NF.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: md.lines.map((dd => (0, NF.jsxs)("li", {
            className: FF()("SkyblockLampLightOddsLine", "better" === dd.tone ? "Better" : "worse" === dd.tone ? "Worse" : "Same"),
            children: [(0, NF.jsx)("span", {
              className: "Before",
              children: dd.before
            }), (0, NF.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, NF.jsx)("span", {
              className: "After",
              children: dd.after
            })]
          }, dd.label)))
        }), (0, NF.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: md.owned ? md.socketed ? (0, NF.jsxs)(NF.Fragment, {
            children: [(0, NF.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Rd("skyblockGame:lampLightSocketed")
            }), (0, NF.jsx)(wF.S, {
              disabled: !Wd.canCommand,
              ariaLabel: Rd("skyblockGame:lampLightRemoveLabel", {
                charm: md.name
              }),
              onClick: () => {
                Fd.socket(null)
              },
              children: Rd("skyblockGame:lampLightRemove")
            })]
          }) : (0, NF.jsx)(wF.g, {
            disabled: !Wd.canCommand || !Xd.heldRod,
            ariaLabel: Rd("skyblockGame:lampLightSocketLabel", {
              charm: md.name
            }),
            onClick: () => {
              Fd.socket(md.id)
            },
            children: Rd("skyblockGame:lampLightSocket")
          }) : (0, NF.jsx)(wF.g, {
            disabled: !Wd.canCommand || !md.affordable,
            ariaLabel: Rd("skyblockGame:lampLightBuyLabel", {
              item: md.name,
              cost: md.cost
            }),
            onClick: () => {
              Fd.buy(md.id)
            },
            children: md.cost
          })
        })]
      })
    }

    function IR(dd) {
      var Od;
      let {
        tint: md,
        view: Wd,
        controller: Fd
      } = dd;
      const {
        t: Rd
      } = (0, tF.G)();
      return (0, NF.jsxs)("li", {
        className: FF()("SkyblockLampLightTint", md.wearing && "Wearing"),
        style: {
          "--tint-colour": md.colour
        },
        children: [(null === (Od = Wd.sparkle) || void 0 === Od ? void 0 : Od.id) === md.id && (0, NF.jsx)(DR, {}, Wd.sparkle.count), (0, NF.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, NF.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: md.name
        }), md.wearing ? (0, NF.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Rd("skyblockGame:lampLightWearing")
        }) : (0, NF.jsx)(wF.g, {
          disabled: !Wd.canCommand || !md.owned && !md.affordable,
          ariaLabel: md.owned ? Rd("skyblockGame:lampLightWearLabel", {
            tint: md.name
          }) : Rd("skyblockGame:lampLightBuyLabel", {
            item: md.name,
            cost: md.cost
          }),
          onClick: () => {
            md.owned ? Fd.wearTint(md.id) : Fd.buy(md.id)
          },
          children: md.owned ? Rd("skyblockGame:lampLightWear") : md.cost
        })]
      })
    }

    function lR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(TW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = md.shop;
      return (0, NF.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, NF.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: md.balance
          }), (0, NF.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": md.releasing,
            className: FF()("SkyblockLampLightSwitch", md.releasing && "On"),
            disabled: md.releasing ? "ready" !== md.status : !md.canCommand,
            onClick: () => {
              Od.setRelease(!md.releasing)
            },
            children: [(0, NF.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, NF.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Wd("skyblockGame:lampLightRelease")]
          }), (0, NF.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Wd("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== md.notice && (0, NF.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: md.notice
        }), null !== Fd && (0, NF.jsxs)(NF.Fragment, {
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, NF.jsx)("h3", {
              children: Wd("skyblockGame:lampLightCharms")
            }), (0, NF.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Fd.oddsFor
            }), (0, NF.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((dd => (0, NF.jsx)("button", {
                type: "button",
                "aria-pressed": md.situation === dd,
                className: FF()("SkyblockLampLightSituation", md.situation === dd && "Selected"),
                onClick: () => {
                  Od.setSituation(dd)
                },
                children: Wd("open" === dd ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, dd)))
            })]
          }), !Fd.heldRod && (0, NF.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Wd("skyblockGame:lampLightHoldRod")
          }), (0, NF.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Fd.charms.map((dd => (0, NF.jsx)(eR, {
              charm: dd,
              view: md,
              controller: Od
            }, dd.id)))
          }), (0, NF.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, NF.jsx)("h3", {
              children: Wd("skyblockGame:lampLightTints")
            })
          }), (0, NF.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, NF.jsxs)("li", {
              className: FF()("SkyblockLampLightTint", "Islands", Fd.wearingIslandColours && "Wearing"),
              children: [(0, NF.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, NF.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Wd("skyblockGame:lampLightIslandColours")
              }), Fd.wearingIslandColours ? (0, NF.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Wd("skyblockGame:lampLightWearing")
              }) : (0, NF.jsx)(wF.g, {
                disabled: !md.canCommand,
                ariaLabel: Wd("skyblockGame:lampLightWearLabel", {
                  tint: Wd("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Od.wearTint(null)
                },
                children: Wd("skyblockGame:lampLightWear")
              })]
            }), Fd.tints.map((dd => (0, NF.jsx)(IR, {
              tint: dd,
              view: md,
              controller: Od
            }, dd.id)))]
          })]
        })]
      })
    }

    function CR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(TW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)();
      return md.releasing ? (0, NF.jsx)(XF.h, {
        children: (0, NF.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Od.setRelease(!1)
          },
          children: [(0, NF.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, NF.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Wd("skyblockGame:lampLightReleasing"), " \xb7 ", md.balance]
          }), (0, NF.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Wd("skyblockGame:lampLightKeepCatches")
          }), null !== md.gained && (0, NF.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: md.gained.text
          }, md.gained.count)]
        })
      }) : null
    }

    function ZR(dd) {
      let {
        island: Od,
        view: md,
        aim: Wd
      } = dd;
      const {
        t: Fd
      } = (0, tF.G)(), Rd = Od.featuredFish;
      return (0, NF.jsxs)("li", {
        className: FF()("SkyblockKeepersChairIsland", `Island-${Od.id}`, Od.favoured && "Aimed", !Od.relit && "Dark"),
        children: [(0, NF.jsx)("h3", {
          children: Od.name
        }), Od.relit && null !== Rd ? (0, NF.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Fd("skyblockGame:keepersChairTideNotice")
          }), (0, NF.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, NF.jsx)(hF.c, {
              itemName: Rd.itemName,
              amount: 0
            })
          }), (0, NF.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Rd.displayName
          })]
        }) : (0, NF.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, NF.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Fd("skyblockGame:keepersChairDark")
          })
        }), Od.relit && (Od.favoured ? (0, NF.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Fd("skyblockGame:keepersChairAimed")
        }) : (0, NF.jsx)(wF.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !md.canAim,
          ariaLabel: Fd("skyblockGame:keepersChairAimLabel", {
            island: Od.name
          }),
          onClick: () => {
            Wd(Od.id)
          },
          children: Fd("skyblockGame:keepersChairAim")
        }))]
      }, Od.favoured ? md.aimedCount : 0)
    }

    function kR(dd) {
      let {
        controller: Od,
        lampLight: md
      } = dd;
      const Wd = (0, oF.i)(QW, Od.getSnapshot()),
        Fd = (0, oF.i)(TW, md.getSnapshot()),
        [Rd, Xd] = (0, Ed.useState)("lamp"),
        {
          t: Kd
        } = (0, tF.G)(),
        hd = EF();
      if (!Wd.enabled) return null;
      const vd = "light" === Rd && Fd.enabled;
      return (0, NF.jsx)(gF.c, {
        show: Wd.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: FF()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", vd && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: hd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Kd("skyblockGame:keepersChairTitle")
              }), (0, NF.jsx)("p", {
                children: Kd(vd ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              ariaLabel: Kd("skyblockGame:keepersChairClose"),
              onClick: Od.dismiss
            })]
          }), Fd.enabled && (0, NF.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((dd => (0, NF.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === dd === vd,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === dd === vd ? "true" : void 0,
              className: FF()("SkyblockKeepersChairTab", "light" === dd === vd && "Selected"),
              onClick: () => {
                Xd(dd)
              },
              children: [Kd("lamp" === dd ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === dd && (0, NF.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Fd.balance
              })]
            }, dd)))
          }), vd ? (0, NF.jsx)(lR, {
            controller: md
          }) : (0, NF.jsx)(fR, {
            view: Wd,
            controller: Od
          })]
        })
      })
    }

    function fR(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)();
      return (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Od.islands.map((dd => (0, NF.jsx)(ZR, {
            island: dd,
            view: Od,
            aim: md.aim
          }, dd.id)))
        }), null !== Od.almanac && (0, NF.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Wd("skyblockGame:passageTitle")
          }), (0, NF.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, NF.jsx)(PR, {
              phase: Od.almanac.phase
            }), Od.almanac.phaseName]
          }), (0, NF.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, NF.jsx)(PR, {
              phase: Od.almanac.nextPhase
            }), Od.almanac.next]
          })]
        }), (0, NF.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Wd("skyblockGame:keepersChairFavour")
          }), Od.aimed && (0, NF.jsx)(wF.S, {
            className: "SkyblockKeepersChairRest",
            disabled: !Od.canAim,
            onClick: () => {
              md.aim(null)
            },
            children: Wd("skyblockGame:keepersChairRest")
          })]
        }), null !== Od.status && (0, NF.jsx)("p", {
          className: FF()("SkyblockKeepersChairStatus", "refused" === Od.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Od.status.text
        })]
      })
    }

    function MR(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(oW, Od.getSnapshot());
      if (!Wd.enabled) return null;
      const Fd = Wd.freshCount > 0 ? md("skyblockGame:reachLogOpenNews", {
        count: Wd.freshCount
      }) : md("skyblockGame:reachLogOpen");
      return (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsxs)("button", {
          type: "button",
          className: FF()("SkyblockReachLogButton", Wd.freshCount > 0 && "HasNews", Wd.pending && "Pending"),
          "aria-label": Fd,
          title: Fd,
          onClick: Od.ask,
          children: [Wd.news && (0, NF.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Wd.newsToken}`), (0, NF.jsx)("span", {
            className: FF()("SkyblockReachLogIcon", Wd.news && "Jump"),
            "aria-hidden": "true",
            children: (0, NF.jsx)(hF.c, {
              itemName: qW,
              amount: 0
            })
          }, `icon:${Wd.newsToken}`), Wd.freshCount > 0 && (0, NF.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Wd.freshCount
          })]
        })
      })
    }

    function dX(dd) {
      let {
        gift: Od
      } = dd;
      return (0, NF.jsx)("li", {
        className: FF()("SkyblockRegularsGift", Od.given && "Given"),
        children: Od.text
      })
    }

    function OX(dd) {
      let {
        regular: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)();
      return (0, NF.jsxs)("li", {
        className: FF()("SkyblockRegularsCard", Od.tagged ? "Tagged" : "Untagged", Od.resting && "Resting"),
        children: [(0, NF.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Od.fishName,
            children: (0, NF.jsx)(hF.c, {
              itemName: Od.itemName,
              amount: 0
            })
          }), (0, NF.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, NF.jsx)("h3", {
              children: Od.name
            }), (0, NF.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Od.fishName
            })]
          })]
        }), (0, NF.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Od.line
        }), (0, NF.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Od.size
          }), Od.tagged && (0, NF.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Od.resting ? md("skyblockGame:regularsResting") : Od.meetings
          })]
        }), (0, NF.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Od.chance
        }), (0, NF.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Od.gifts.map((dd => (0, NF.jsx)(dX, {
            gift: dd
          }, dd.text)))
        }), Od.history.length > 0 && (0, NF.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Od.history.map(((dd, Od) => (0, NF.jsx)("li", {
            children: dd
          }, Od)))
        })]
      })
    }

    function mX(dd) {
      let {
        controller: Od,
        island: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)(), Fd = (0, oF.i)(GW, Od.getSnapshot()), Rd = Fd.islands.find((dd => dd.id === md));
      if (!Fd.enabled || void 0 === Rd) return null;
      const Xd = Wd("skyblockGame:regularsOpen");
      return (0, NF.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Xd,
        title: Xd,
        onClick: () => {
          Od.openIsland(md)
        },
        children: [(0, NF.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Wd("skyblockGame:regularsTitle")
        }), Rd.regulars.map((dd => (0, NF.jsx)("span", {
          className: FF()("SkyblockRegularsStripIcon", dd.tagged && "Tagged"),
          title: dd.name,
          children: (0, NF.jsx)(hF.c, {
            itemName: dd.itemName,
            amount: 0
          })
        }, dd.id)))]
      })
    }

    function WX(dd) {
      var Od;
      let {
        controller: md
      } = dd;
      const Wd = (0, oF.i)(GW, md.getSnapshot()),
        {
          t: Fd
        } = (0, tF.G)(),
        Rd = EF();
      if (!Wd.enabled) return null;
      const Xd = null !== (Od = Wd.islands.find((dd => dd.id === Wd.selected))) && void 0 !== Od ? Od : null;
      return (0, NF.jsx)(gF.c, {
        show: Wd.open,
        close: md.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Rd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Fd("skyblockGame:regularsTitle")
              }), (0, NF.jsx)("p", {
                children: Fd("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: md.dismiss
            })]
          }), (0, NF.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Wd.islands.map((dd => {
              const Od = dd.id === Wd.selected;
              return (0, NF.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Od,
                "data-pad-tab": !0,
                "data-pad-selected": Od ? "true" : void 0,
                className: FF()("SkyblockReachLogTab", `Island-${dd.id}`, Od && "Selected", dd.charm.given && "GoldPage"),
                onClick: () => {
                  md.selectIsland(dd.id)
                },
                children: (0, NF.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: dd.name
                })
              }, dd.id)
            }))
          }), (0, NF.jsxs)("div", {
            className: FF()("SkyblockRegularsPage", null !== Xd && `Island-${Xd.id}`),
            role: "tabpanel",
            children: [(0, NF.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Fd("skyblockGame:regularsHow")
            }), null !== Xd && (0, NF.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Xd.regulars.map((dd => (0, NF.jsx)(OX, {
                regular: dd
              }, dd.id)))
            })]
          }), null !== Xd && (0, NF.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, NF.jsx)("span", {
              className: FF()("SkyblockRegularsCharm", Xd.charm.given && "Given"),
              children: Xd.charm.text
            })
          })]
        })
      })
    }
    const FX = [{
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
      RX = Array.from({
        length: 6
      }, ((dd, Od) => ({
        "--x": `${(88*(.618034*Od%1)).toFixed(1)}%`,
        "--y": `${(10+37*Od%70).toFixed(1)}%`,
        "--size": 7 + Od % 3 * 3 + "rem",
        "--drift-x": 3 * (Od % 3 - 1) + "rem",
        "--drift-y": 2 * (Od % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Od % 4 * 3 + "s",
        "--delay": 2.5 * -Od + "s"
      }))),
      XX = Array.from({
        length: 14
      }, ((dd, Od) => ({
        "--left": `${(3+94*((.618034*Od+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Od % 4 * 2 + "px",
        "--sway": Od % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Od%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Od%12).toFixed(2)}s`
      }))),
      KX = (0, Ed.memo)((function(dd) {
        let {
          island: Od
        } = dd;
        return (0, NF.jsxs)("div", {
          className: FF()("SkyblockReachLogDepths", null !== Od && `Island-${Od}`),
          "aria-hidden": "true",
          children: [FX.map(((dd, Od) => (0, NF.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: dd
          }, `shaft${Od}`))), RX.map(((dd, Od) => (0, NF.jsx)("span", {
            className: FF()("SkyblockReachLogMote", Od % 2 === 1 && "Violet"),
            style: dd
          }, `mote${Od}`))), XX.map(((dd, Od) => (0, NF.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: dd
          }, `bubble${Od}`)))]
        })
      })),
      hX = 100;

    function vX(dd) {
      let {
        view: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)();
      if (null === Od || 0 === Od.total) return null;
      const Wd = hX * Od.aspect,
        Fd = md("skyblockGame:hiddenWatersCount", {
          found: Od.found,
          total: Od.total
        });
      return (0, NF.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${md("skyblockGame:hiddenWatersTitle")}: ${Fd}`,
        children: [(0, NF.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Wd}`,
          "aria-hidden": "true",
          children: [Od.islands.map(((dd, Od) => (0, NF.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (dd.left + dd.width / 2) * hX,
            cy: (dd.top + dd.height / 2) * Wd,
            rx: dd.width / 2 * hX,
            ry: dd.height / 2 * Wd
          }, Od))), Od.pins.map(((dd, Od) => (0, NF.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: dd.left * hX,
            cy: dd.top * Wd,
            r: 13
          }, Od)))]
        }), (0, NF.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, NF.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: md("skyblockGame:hiddenWatersTitle")
          }), (0, NF.jsx)("span", {
            className: Od.found === Od.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Fd
          })]
        })]
      })
    }

    function QX(dd) {
      let {
        view: Od,
        island: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)(), Fd = null === Od || void 0 === Od ? void 0 : Od.glimpses.get(md);
      return void 0 === Fd || 0 === Fd.length ? null : (0, NF.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, NF.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Wd("skyblockGame:hiddenWatersGlimpsed")
        }), (0, NF.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Fd.map((dd => (0, NF.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, NF.jsx)(hF.c, {
              itemName: dd,
              amount: 0
            })
          }, dd)))
        })]
      })
    }
    const tX = ["Bronze", "Silver", "Gold"],
      oX = [{
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
      NX = oX.slice(0, 2);

    function qX(dd) {
      return dd ? oX : NX
    }

    function HX(dd) {
      let {
        fish: Od,
        letGoShown: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)();
      return (0, NF.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [tX.map(((dd, md) => {
          const Fd = md < Od.marks;
          return (0, NF.jsx)("span", {
            className: FF()("SkyblockReachLogPip", dd, Fd && "Earned", Fd && Od.fresh && md === Od.marks - 1 && "Newest"),
            title: Wd(NW[md])
          }, dd)
        })), (0, NF.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), qX(md).map(((dd, md) => (0, NF.jsx)("span", {
          className: FF()("SkyblockReachLogRibbon", dd.className, !0 === Od.ribbons[md] && "Earned"),
          title: Wd(dd.titleKey)
        }, dd.className)))]
      })
    }

    function yX(dd) {
      let {
        letGoShown: Od,
        haloShown: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)();
      return (0, NF.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, NF.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Wd("skyblockGame:reachLogMarks"),
          children: [(0, NF.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Wd("skyblockGame:reachLogLegendMarks")]
        }), qX(Od).map((dd => (0, NF.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Wd(dd.titleKey),
          children: [(0, NF.jsx)("span", {
            className: FF()("SkyblockReachLogRibbon", dd.className, "Earned")
          }), Wd(dd.legendKey)]
        }, dd.className))), (0, NF.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Wd("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, NF.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Wd("skyblockGame:reachLogLegendGlimmer")]
        }), md && (0, NF.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Wd("skyblockGame:reachLogHaloTitle"),
          children: [(0, NF.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Wd("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function bX(dd) {
      let {
        returner: Od
      } = dd;
      return (0, NF.jsxs)("div", {
        className: FF()("SkyblockReachLogReturner", Od.back && "Back"),
        children: [(0, NF.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, NF.jsx)(hF.c, {
            itemName: Od.itemName,
            amount: 0
          })
        }), (0, NF.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Od.line
        })]
      })
    }

    function TX(dd) {
      let {
        fish: Od,
        letGoShown: md
      } = dd;
      const {
        t: Wd
      } = (0, tF.G)();
      return (0, NF.jsxs)("li", {
        className: FF()("SkyblockReachLogCard", Od.caught ? "Caught" : "Unknown", Od.marks >= 3 && "GoldCard", Od.fresh && "Fresh", Od.visitor && "Visitor"),
        children: [Od.visitor && (0, NF.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Wd("skyblockGame:reachLogVisitor")
        }), Od.fresh && Array.from({
          length: 4
        }, ((dd, Od) => (0, NF.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Od))), (0, NF.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Od.halo && (0, NF.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Wd("skyblockGame:reachLogHaloTitle")
          }), (0, NF.jsx)(hF.c, {
            itemName: Od.itemName,
            amount: 0
          }), Od.glimmer && (0, NF.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Wd("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, NF.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Od.name
        }), (0, NF.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Od.chance
        }), (0, NF.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Od.best
        }), (0, NF.jsx)(HX, {
          fish: Od,
          letGoShown: md
        })]
      })
    }

    function pX(dd) {
      let {
        page: Od,
        letGoShown: md,
        hiddenWaters: Wd
      } = dd;
      const {
        t: Fd
      } = (0, tF.G)();
      return Od.awake ? (0, NF.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Od.fish.map((dd => (0, NF.jsx)(TX, {
          fish: dd,
          letGoShown: md
        }, dd.itemName)))
      }) : (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Fd("skyblockGame:reachLogAsleep")
        }), (0, NF.jsx)(QX, {
          view: Wd,
          island: Od.id
        })]
      })
    }

    function YX(dd) {
      var Od, md;
      let {
        controller: Wd,
        regulars: Fd,
        hiddenWaters: Rd
      } = dd;
      const Xd = (0, oF.i)(oW, Wd.getSnapshot()),
        Kd = function(dd) {
          return (0, oF.i)(cW, dd.getSnapshot())
        }(Rd),
        hd = (0, oF.i)(GW, Fd.getSnapshot()),
        {
          t: vd
        } = (0, tF.G)(),
        Qd = EF();
      if (!Xd.enabled) return null;
      const td = null !== (Od = Xd.pages.find((dd => dd.id === Xd.selected))) && void 0 !== Od ? Od : null;
      return (0, NF.jsx)(gF.c, {
        show: Xd.open,
        close: Wd.dismiss,
        togglePointerLock: !1,
        className: FF()("SkyblockSkillsOverlay", hd.open && "SkyblockReachLogUnderLedger"),
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Qd,
          onKeyDown: aF,
          children: [(0, NF.jsx)(KX, {
            island: null !== (md = null === td || void 0 === td ? void 0 : td.id) && void 0 !== md ? md : null
          }), (0, NF.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: vd("skyblockGame:reachLogTitle")
              }), (0, NF.jsx)("p", {
                children: vd("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, NF.jsx)(vX, {
              view: Kd
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Wd.dismiss
            })]
          }), (0, NF.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Xd.pages.map((dd => {
              const Od = dd.id === Xd.selected,
                md = dd.fish.some((dd => dd.fresh));
              return (0, NF.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Od,
                "data-pad-tab": !0,
                "data-pad-selected": Od ? "true" : void 0,
                className: FF()("SkyblockReachLogTab", `Island-${dd.id}`, Od && "Selected", !dd.awake && "Asleep", dd.gold && "GoldPage", md && "HasNews"),
                onClick: () => {
                  Wd.selectPage(dd.id)
                },
                children: [(0, NF.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: dd.name
                }), dd.awake && (0, NF.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: vd("skyblockGame:reachLogCaughtCount", {
                    caught: dd.caught,
                    total: dd.total
                  })
                })]
              }, dd.id)
            }))
          }), (0, NF.jsxs)("div", {
            className: FF()("SkyblockReachLogPage", null !== td && `Island-${td.id}`),
            role: "tabpanel",
            children: [null !== td && (0, NF.jsx)(pX, {
              page: td,
              letGoShown: Xd.letGoShown,
              hiddenWaters: Kd
            }), !0 === (null === td || void 0 === td ? void 0 : td.awake) && null !== td.returner && (0, NF.jsx)(bX, {
              returner: td.returner
            }), !0 === (null === td || void 0 === td ? void 0 : td.awake) && (0, NF.jsx)(mX, {
              controller: Fd,
              island: td.id
            })]
          }), (0, NF.jsx)("footer", {
            className: FF()("SkyblockReachLogFooter", null !== td && `Island-${td.id}`, !0 === (null === td || void 0 === td ? void 0 : td.gold) && "GoldPage"),
            children: !0 === (null === td || void 0 === td ? void 0 : td.gold) ? (0, NF.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: vd("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, NF.jsxs)(NF.Fragment, {
              children: [(0, NF.jsx)(yX, {
                letGoShown: Xd.letGoShown,
                haloShown: !0 === (null === td || void 0 === td ? void 0 : td.fish.some((dd => dd.halo)))
              }), (0, NF.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: vd("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var gX = md(5609);

    function wX(dd) {
      let {
        conversation: Od,
        completedLabel: md
      } = dd;
      return (0, NF.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, NF.jsxs)("header", {
          children: [(0, NF.jsx)("h3", {
            children: Od.questName
          }), Od.completed && (0, NF.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: md
          })]
        }), Od.lines.map((dd => (0, NF.jsx)(gX.e, {
          display: dd.display
        }, dd.key)))]
      })
    }

    function aX(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(DW, Od.getSnapshot()), Fd = EF();
      if (!Wd.enabled) return null;
      const Rd = !Wd.loading && 0 === Wd.conversations.length;
      return (0, NF.jsx)(gF.c, {
        show: Wd.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: md("skyblockDialogue:title")
              }), (0, NF.jsx)("p", {
                children: md("skyblockDialogue:intro")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Od.dismiss
            })]
          }), (0, NF.jsxs)("div", {
            className: FF()("SkyblockDialogueBody", {
              SingleColumn: null !== Wd.questFocus || 0 === Wd.characters.length
            }),
            children: [null === Wd.questFocus && Wd.characters.length > 0 && (0, NF.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Wd.characters.map((dd => (0, NF.jsx)(wF.g, {
                className: FF()("SkyblockDialogueCharacter", {
                  Selected: dd.selected
                }),
                onClick: () => {
                  Od.selectCharacter(dd.id)
                },
                children: (0, NF.jsx)(vF.d, {
                  text: dd.styling
                })
              }, dd.id)))
            }), (0, NF.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Wd.questFocus && (0, NF.jsx)(wF.g, {
                className: "SkyblockDialogueBack",
                onClick: Od.showCharacters,
                children: md("skyblockDialogue:allCharacters")
              }), Wd.loading && (0, NF.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: md("skyblockDialogue:loading")
              }), Rd && (0, NF.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: md(null === Wd.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Wd.conversations.map((dd => (0, NF.jsx)(wX, {
                conversation: dd,
                completedLabel: Wd.completedLabel
              }, dd.questId)))]
            })]
          })]
        })
      })
    }

    function EX(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(ZW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF();
      return md.enabled ? (0, NF.jsx)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Wd("skyblockGame:autographBook")
              }), (0, NF.jsx)("p", {
                children: Wd("skyblockGame:autographBookIntro")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              onClick: Od.dismiss
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, NF.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, NF.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, NF.jsx)("strong", {
                  children: md.total
                }), (0, NF.jsx)("span", {
                  children: Wd("skyblockGame:autographTotal")
                })]
              }), (0, NF.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, NF.jsx)("strong", {
                  children: md.rankTotal
                }), (0, NF.jsx)("span", {
                  children: Wd("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === md.entries.length ? (0, NF.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Wd("skyblockGame:autographBookEmpty")
            }) : (0, NF.jsx)("ul", {
              className: "SkyblockAutographList",
              children: md.entries.map((dd => (0, NF.jsxs)("li", {
                className: FF()("SkyblockAutograph", {
                  Ranked: null !== dd.rank
                }),
                style: null === dd.rank ? void 0 : {
                  color: dd.rank.colour
                },
                children: [null !== dd.rank && (0, NF.jsx)(jF.c, {
                  className: "SkyblockAutographRankIcon",
                  name: dd.rank.icon,
                  kit: (0, jF.e)(dd.rank.icon)
                }), (0, NF.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, NF.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: dd.name
                  }), (0, NF.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== dd.rank && (0, NF.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: dd.rank.label
                    }), (0, NF.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: dd.signedOn
                    })]
                  })]
                })]
              }, dd.key)))
            })]
          })]
        })
      }) : null
    }
    const JX = (0, Ed.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        return (0, NF.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Od.display.mountWaypoint,
          children: [(0, NF.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, NF.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, NF.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, NF.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, NF.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, NF.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      UX = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function xX(dd) {
      return "next" === dd.phase ? "\u2192" : UX[dd.kind]
    }
    const BX = (0, Ed.memo)((function(dd) {
      let {
        controller: Od,
        display: md
      } = dd;
      const Wd = (0, oF.i)(IO, Od.getNotificationSnapshot()),
        [Fd, Rd] = (0, Ed.useState)(!1);
      return (0, oF.f)("qteStateUpdated", (dd => {
        Rd(dd.isActive)
      })), (0, NF.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Fd ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Wd && (0, NF.jsxs)("div", {
          className: `SkyblockQuestNotification ${Wd.kind} ${Wd.phase}`,
          style: {
            "--quest-notification-duration": `${Wd.durationMs}ms`,
            ...Wd.accent && {
              "--quest-notification-accent": Wd.accent
            }
          },
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Wd.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, NF.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: xX(Wd)
            }), Wd.iconItem && (0, NF.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, NF.jsx)(hF.c, {
                itemName: Wd.iconItem,
                amount: 0
              })
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, NF.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Wd.title
            }), (0, NF.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, NF.jsx)(rF.c, {
                text: Wd.name
              })
            }), Wd.description && (0, NF.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, NF.jsx)(rF.c, {
                text: Wd.description
              })
            }), Wd.reward && (0, NF.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, NF.jsx)(rF.c, {
                text: Wd.reward
              })
            })]
          })]
        }, Wd.token), (null === Wd || void 0 === Wd ? void 0 : Wd.waypointNameKey) && (0, NF.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Wd.waypointNameKey,
          "data-notification-token": Wd.token,
          ref: md.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Wd.token}`)]
      })
    }));

    function SX(dd) {
      const Od = parseInt(dd.replace("#", ""), 16);
      return `${Od>>16&255}, ${Od>>8&255}, ${255&Od}`
    }
    const sX = (0, Ed.memo)((function(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(Ym, Od.getSnapshot());
      if (!Wd) return null;
      const Fd = "arrival" === Wd.phase;
      return (0, NF.jsxs)("div", {
        className: FF()("SkyblockPortalTransit", {
          Departure: !Fd,
          Arrival: Fd
        }),
        style: {
          "--portal-rgb": SX(Wd.colour),
          "--portal-duration": `${Wd.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, NF.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, NF.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Od.finishArrival(Wd.token)
          }
        }), (0, NF.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, NF.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Fd && (0, NF.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: md("skyblockGame:portalTransitHeading")
          }), (0, NF.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: md(Wd.zoneNameKey)
          })]
        })]
      }, Wd.token)
    }));

    function uX() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function VX() {
      const dd = document.querySelector(".SkyblockHudCoins"),
        Od = null === dd || void 0 === dd ? void 0 : dd.getBoundingClientRect();
      return Od && Od.width > 0 ? {
        x: Od.left + Math.min(Od.width, 24) / 2,
        y: Od.top + Od.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function iX(dd) {
      return {
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2
      }
    }

    function AX() {
      var dd;
      const Od = null === (dd = document.querySelector(".HotBar")) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
      return Od && Od.width > 0 ? iX(Od) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function rX(dd) {
      let {
        items: Od,
        origins: md,
        target: Wd
      } = dd;
      return (0, NF.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Od.map(((dd, Od) => {
          const Fd = md[Od];
          return (0, NF.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Fd.x}px`,
              top: `${Fd.y}px`,
              "--item-dx": Wd.x - Fd.x + "px",
              "--item-dy": Wd.y - Fd.y + "px",
              "--item-delay": 2e3 + 160 * Od + "ms",
              "--item-flight": "700ms"
            },
            children: (0, NF.jsx)(hF.c, {
              itemName: dd.dailyRewardItemName,
              amount: 0
            })
          }, dd.dailyRewardItemName)
        }))
      })
    }

    function GX(dd, Od) {
      const md = -Math.PI / 2 + 1.25 * (dd / (Od - 1) * 2 - 1),
        Wd = 70 + dd % 3 * 22;
      return {
        x: Math.cos(md) * Wd,
        y: Math.sin(md) * Wd * .7
      }
    }

    function nX(dd) {
      let {
        origin: Od,
        target: md,
        count: Wd
      } = dd;
      const Fd = [];
      for (let Rd = 0; Rd < Wd; Rd++) {
        const dd = GX(Rd, Wd);
        Fd.push((0, NF.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Od.x}px`,
            top: `${Od.y}px`,
            "--coin-bx": `${dd.x}px`,
            "--coin-by": `${dd.y}px`,
            "--coin-dx": md.x - Od.x + "px",
            "--coin-dy": md.y - Od.y + "px",
            "--coin-delay": `${Um(Rd,Wd)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, NF.jsx)(hF.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Rd))
      }
      return (0, NF.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Fd
      })
    }

    function LX(dd) {
      let {
        day: Od
      } = dd;
      const md = Jd[Od - 1];
      return (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, NF.jsx)(hF.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, QF.g)(md.dailyRewardCoins)]
        }), md.dailyRewardItems.map((dd => (0, NF.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, NF.jsx)(hF.c, {
            itemName: dd.dailyRewardItemName,
            amount: 0
          }), "\xd7", dd.dailyRewardItemAmount]
        }, dd.dailyRewardItemName)))]
      })
    }

    function PX(dd) {
      let {
        day: Od
      } = dd;
      const md = xd(Od);
      return (0, NF.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Jd.map(((dd, Wd) => {
          const Fd = Wd + 1;
          return (0, NF.jsxs)("li", {
            className: FF()("SkyblockDailyRewardTile", {
              Claimed: Fd < Od && Fd !== md,
              Today: Fd === Od,
              Tomorrow: Fd === md,
              Jackpot: Fd === Ud
            }),
            children: [(0, NF.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Fd
            }), (0, NF.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, NF.jsx)(hF.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, QF.g)(dd.dailyRewardCoins)]
            }), dd.dailyRewardItems.map((dd => (0, NF.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, NF.jsx)(hF.c, {
                itemName: dd.dailyRewardItemName,
                amount: 0
              }), "\xd7", dd.dailyRewardItemAmount]
            }, dd.dailyRewardItemName)))]
          }, Fd)
        }))
      })
    }

    function zX(dd) {
      let {
        view: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, Ed.useRef)(null), Fd = (0, Ed.useRef)(null), [Rd, Xd] = (0, Ed.useState)(null);
      (0, Ed.useLayoutEffect)((() => {
        var dd;
        const Od = null === (dd = Wd.current) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
        if (Od) {
          var md, Rd;
          const dd = Array.from(null !== (md = null === (Rd = Fd.current) || void 0 === Rd ? void 0 : Rd.children) && void 0 !== md ? md : [], (dd => iX(dd.getBoundingClientRect())));
          Xd({
            origin: iX(Od),
            target: VX(),
            itemOrigins: dd,
            itemTarget: AX()
          })
        }
      }), []);
      const Kd = xd(Od.day),
        hd = function(dd, Od) {
          const [md, Wd] = (0, Ed.useState)((() => uX() ? dd : 0));
          return (0, Ed.useEffect)((() => {
            if (uX()) return;
            const md = performance.now();
            let Fd = 0;
            const Rd = Xd => {
              const Kd = Math.min(Math.max((Xd - md) / Od, 0), 1);
              Wd(Math.round(dd * (1 - (1 - Kd) ** 3))), Kd < 1 && (Fd = requestAnimationFrame(Rd))
            };
            return Fd = requestAnimationFrame(Rd), () => {
              cancelAnimationFrame(Fd)
            }
          }), [dd, Od]), md
        }(Od.coins, 450);
      return (0, NF.jsxs)("div", {
        className: FF()("SkyblockDailyReward", {
          Jackpot: Od.day === Ud
        }),
        style: {
          "--daily-duration": `${Od.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, NF.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, NF.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, NF.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: md("skyblockGame:dailyRewardTitle")
            }), (0, NF.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: md("skyblockGame:dailyRewardDay", {
                day: String(Od.day)
              })
            })]
          }), (0, NF.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Wd,
            children: [(0, NF.jsx)(hF.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, NF.jsxs)("span", {
              children: ["+", (0, QF.g)(hd)]
            })]
          }), Od.items.length > 0 && (0, NF.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Fd,
            children: Od.items.map((dd => (0, NF.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, NF.jsx)(hF.c, {
                itemName: dd.dailyRewardItemName,
                amount: 0
              }), "\xd7", dd.dailyRewardItemAmount]
            }, dd.dailyRewardItemName)))
          }), (0, NF.jsx)(PX, {
            day: Od.day
          }), (0, NF.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [md("skyblockGame:dailyRewardComeBack"), (0, NF.jsx)(LX, {
              day: Kd
            })]
          })]
        }), null !== Rd && (0, NF.jsx)(nX, {
          origin: Rd.origin,
          target: Rd.target,
          count: Od.flyingCoins
        }), null !== Rd && Rd.itemOrigins.length === Od.items.length && (0, NF.jsx)(rX, {
          items: Od.items,
          origins: Rd.itemOrigins,
          target: Rd.itemTarget
        })]
      })
    }
    const cX = (0, Ed.memo)((function(dd) {
        let {
          controller: Od
        } = dd;
        const md = (0, oF.i)(am, Od.getSnapshot());
        return md ? (0, NF.jsx)(zX, {
          view: md
        }, md.token) : null
      })),
      jX = "Gold Coin";

    function DX(dd) {
      return 650 + 220 * dd
    }

    function eX(dd) {
      return {
        "--letter-delay": `${DX(dd)}ms`,
        "--letter-land": `${DX(dd)+300}ms`
      }
    }

    function IX(dd) {
      let {
        letterCount: Od
      } = dd;
      return (0, NF.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, NF.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, NF.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, NF.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Od
        }, ((dd, Od) => (0, NF.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: eX(Od),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Od)))]
      })
    }

    function lX(dd) {
      var Od, md, Wd;
      let {
        letter: Fd,
        index: Rd
      } = dd;
      const {
        t: Xd
      } = (0, tF.G)(), Kd = null !== (Od = null === (md = Fd.items[0]) || void 0 === md ? void 0 : md.itemName) && void 0 !== Od ? Od : jX;
      return (0, NF.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: eX(Rd),
        children: [(0, NF.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, NF.jsx)(hF.c, {
            itemName: Kd,
            amount: 0
          })
        }), (0, NF.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Xd(Fd.reasonKey, null !== (Wd = Fd.reasonParams) && void 0 !== Wd ? Wd : void 0)
        }), (0, NF.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Fd.coins > 0 && (0, NF.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, NF.jsx)(hF.c, {
              itemName: jX,
              amount: 0
            }), "+", (0, QF.g)(Fd.coins)]
          }), Fd.items.map(((dd, Od) => (0, NF.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, NF.jsx)(hF.c, {
              itemName: dd.itemName,
              amount: 0
            }), dd.label, " \xd7", dd.amount]
          }, Od)))]
        })]
      })
    }

    function CX(dd) {
      let {
        view: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)();
      return (0, NF.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Od.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${DX(Od.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, NF.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, NF.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, NF.jsx)(IX, {
              letterCount: Od.letters.length
            }), (0, NF.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: md("skyblockGame:mailboxTitle")
            })]
          }), (0, NF.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Od.letters.map(((dd, Od) => (0, NF.jsx)(lX, {
              letter: dd,
              index: Od
            }, Od)))
          }), Od.more > 0 && (0, NF.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: md("skyblockGame:mailboxMore", {
              count: String(Od.more)
            })
          })]
        })
      })
    }
    const ZX = (0, Ed.memo)((function(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(Bm, Od.getSnapshot());
      return md ? (0, NF.jsx)(CX, {
        view: md
      }, md.token) : null
    }));

    function kX(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(YW, Od.getSnapshot());
      if (null === Wd) return null;
      const Fd = Wd.fullSet ? "empty" === Wd.fuelState ? {
        text: md("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: md("skyblockGame:magmawardHudFullSet", {
          worn: String(Wd.wornCount)
        }),
        tone: "partial"
      };
      return (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsxs)("div", {
          className: FF()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Wd.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Wd.fullSet,
            "SkyblockMagmawardHud-armed": Wd.fullSet && "empty" !== Wd.fuelState
          }),
          children: [null !== Wd.flare && (0, NF.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Wd.flare}`
          }, `flare:${Wd.flareToken}`), (0, NF.jsx)("div", {
            className: FF()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Wd.setLit
            }),
            children: Wd.pieces.map(((dd, Od) => (0, NF.jsx)("div", {
              className: FF()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: dd.worn,
                SkyblockMagmawardPieceJustWorn: dd.justWorn
              }),
              children: (0, NF.jsx)(hF.c, {
                itemName: dd.itemName,
                amount: 0
              })
            }, `${Od}:${dd.wornToken}`)))
          }, `pieces:${Wd.setLitToken}`), (0, NF.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, NF.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, NF.jsxs)("div", {
              className: FF()("SkyblockMagmawardFuelCounter", Wd.pulse && `SkyblockMagmawardFuelCounter-${Wd.pulse}`),
              children: [(0, NF.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, NF.jsx)(hF.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, NF.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Wd.fuel
              })]
            }, `counter:${Wd.pulseToken}`), "burn" === Wd.pulse && (0, NF.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Wd.pulseToken}`)]
          }), Fd && (0, NF.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Fd.tone} SmallTextBold`,
            children: Fd.text
          })]
        })
      })
    }

    function fX(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md,
        selectedLanguage: Wd
      } = (0, tF.G)(), Fd = (0, oF.i)(wW, Od.getSnapshot());
      return null === Fd ? null : (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsxs)("div", {
          className: FF()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Fd.inRange
          }),
          style: {
            "--glowtide-colour": Fd.colour
          },
          "aria-label": md("skyblockGame:glowtideChipLabel"),
          children: [(0, NF.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Fd.inRange ? (0, NF.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: md("skyblockGame:glowtideChipInRange")
          }, `call:${Fd.inRangeToken}`) : (0, NF.jsxs)(NF.Fragment, {
            children: [(0, NF.jsx)("div", {
              ref: Od.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, NF.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: md("skyblockGame:waypointDistance", {
                distance: Yd(Fd.distance, Wd.code)
              })
            })]
          })]
        })
      })
    }

    function MX(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(EW, Od.getSnapshot());
      return null === Wd ? null : (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsxs)("div", {
          className: FF()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Wd.full
          }),
          "aria-label": md("skyblockGame:glowMeterLabel", {
            fill: String(Wd.fill),
            Mt: String(Wd.Mt)
          }),
          children: [Wd.burst && (0, NF.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Wd.burstToken}`), (0, NF.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, NF.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Wd.ratio})`
              }
            }), Wd.gained && (0, NF.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Wd.gainToken}`), Wd.full && Array.from({
              length: 5
            }, ((dd, Od) => (0, NF.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Od)))]
          }), Wd.full && Wd.rares.map((dd => (0, NF.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, NF.jsx)(hF.c, {
              itemName: dd,
              amount: 0
            })
          }, dd))), Wd.ready && (0, NF.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, NF.jsx)("span", {
              children: md("skyblockGame:glowMeterReady")
            })
          }, `ready:${Wd.fullToken}`)]
        })
      })
    }

    function dK(dd) {
      let {
        controller: Od
      } = dd;
      const {
        t: md
      } = (0, tF.G)(), Wd = (0, oF.i)(UW, Od.getSnapshot());
      if (null === Wd) return null;
      const Fd = "waiting" === Wd.phase,
        Rd = {
          animationDuration: `${Wd.waitMs}ms`,
          animationDelay: -Wd.elapsedMs + "ms"
        },
        Xd = Fd ? void 0 : {
          animationDuration: `${Wd.waitMs}ms`
        };
      return (0, NF.jsxs)("div", {
        className: Fd ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Fd && (0, NF.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((dd, Od) => (0, NF.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Od))), (0, NF.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Rd
          }), (0, NF.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, NF.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, NF.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Rd
            })]
          }), (0, NF.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, NF.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Xd,
          children: md(Wd.line)
        }, Wd.lineIndex)]
      }, Wd.token)
    }

    function OK(dd) {
      let {
        chart: Od,
        showHere: md,
        className: Wd
      } = dd;
      return (0, NF.jsx)("div", {
        className: FF()("SkyblockTideChartGrid", Wd, null !== Od.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Od.cells.map(((dd, Wd) => {
          const Fd = 0 !== (Od.pulseCells & 1 << Wd),
            Rd = Od.castCell === Wd;
          return (0, NF.jsx)("span", {
            className: FF()("SkyblockTideChartCell", `Cell-${dd}`, Fd && "Pulse", Rd && "Cast", md && Od.hereCell === Wd && "Here")
          }, `${Wd}:${Fd?`p${Od.pulseToken}`:""}:${Rd?`c${Od.castToken}`:""}`)
        }))
      })
    }

    function mK(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(BW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = md.chip;
      if (!md.enabled || null === Fd) return null;
      const Rd = Wd("skyblockGame:tideChartsChipLabel", {
        island: Fd.islandName,
        lit: String(Fd.lit),
        ink: String(Fd.ink)
      });
      return (0, NF.jsx)(XF.h, {
        placement: "statBars",
        children: (0, NF.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: FF()("SkyblockTideChartsChip", md.open && "Open", null !== Fd.pictureName && "Complete"),
          "aria-label": Rd,
          title: Rd,
          onMouseDown: dd => {
            dd.preventDefault()
          },
          onClick: Od.toggle,
          children: [(0, NF.jsx)(OK, {
            chart: Fd,
            showHere: !1,
            className: "Mini"
          }), (0, NF.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Fd.lit, "/", Fd.ink]
          })]
        })
      })
    }

    function WK(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, oF.i)(BW, Od.getSnapshot()),
        {
          t: Wd
        } = (0, tF.G)(),
        Fd = EF(),
        Rd = md.card;
      return md.enabled && null !== Rd ? (0, NF.jsx)(gF.c, {
        show: md.open,
        close: Od.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, NF.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Fd,
          onKeyDown: aF,
          children: [(0, NF.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, NF.jsxs)("div", {
              children: [(0, NF.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Wd("skyblockGame:tideChartsTitle")
              }), (0, NF.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Wd("skyblockGame:tideChartsIntro")
              })]
            }), (0, NF.jsx)(wF.j, {
              padIgnore: !0,
              ariaLabel: Wd("skyblockGame:tideChartsClose"),
              onClick: Od.dismiss
            })]
          }), md.tabs.length > 1 && (0, NF.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Wd("skyblockGame:tideChartsIslands"),
            children: md.tabs.map((dd => (0, NF.jsx)("button", {
              type: "button",
              className: FF()("SkyblockTideChartsTab", dd.selected && "Selected"),
              "aria-pressed": dd.selected,
              onClick: () => {
                Od.xN(dd.island)
              },
              children: dd.name
            }, dd.island)))
          }), (0, NF.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, NF.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Rd.gridLabel,
              children: (0, NF.jsx)(OK, {
                chart: Rd,
                showHere: !0,
                className: "Large"
              })
            }), (0, NF.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, NF.jsx)("h3", {
                children: Rd.islandName
              }), (0, NF.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Rd.litText
              }), null === Rd.pictureName ? (0, NF.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Wd("skyblockGame:tideChartsPictureHidden")
              }) : (0, NF.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Wd("skyblockGame:tideChartsPictureRevealed", {
                  picture: Rd.pictureName
                })
              }, Rd.pictureName), (0, NF.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, NF.jsxs)("li", {
                  children: [(0, NF.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Wd("skyblockGame:tideChartsLegendLit")]
                }), (0, NF.jsxs)("li", {
                  children: [(0, NF.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Wd("skyblockGame:tideChartsLegendClear")]
                }), null !== Rd.hereCell && (0, NF.jsxs)("li", {
                  children: [(0, NF.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Wd("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, NF.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, NF.jsx)("span", {
                  children: md.turnsText
                }), (0, NF.jsx)("span", {
                  children: md.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function FK(dd) {
      var Od;
      let {
        controller: md
      } = dd;
      const {
        selectedLanguage: Wd
      } = (0, tF.G)(), Fd = Wd.code;
      (0, Ed.useEffect)((() => {
        md.setTranslator(((dd, Od) => (0, tF.B)(Fd, dd, Od)), Fd, ((dd, Od) => (0, tF.u)(Fd, dd, Od)))
      }), [md, Fd]);
      const Rd = (0, oF.i)(vd, md.map.getSnapshot()),
        {
          openInGameMenuName: Xd
        } = (0, RF.p)(["openInGameMenuName"]);
      return (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsx)(BX, {
          controller: md.quests,
          display: md.navigation.display
        }), Rd.enabled && !Xd && (0, NF.jsx)(VF, {
          controller: md.navigation
        }), (0, NF.jsx)(qF, {
          controller: md,
          minimap: Rd.enabled && (null === (Od = Rd.presentation) || void 0 === Od ? void 0 : Od.minimap) && (0, NF.jsx)(uF, {
            view: Rd.presentation.minimap,
            navigation: md.navigation,
            controller: md.map
          }),
          children: (0, NF.jsx)(cF, {
            controller: md.quests,
            surface: "hud"
          })
        }), (0, NF.jsx)(JX, {
          controller: md.navigation
        }), (0, NF.jsx)(sX, {
          controller: md.portalTransit
        }), (0, NF.jsx)(cX, {
          controller: md.dailyReward
        }), (0, NF.jsx)(ZX, {
          controller: md.mailbox
        }), (0, NF.jsx)(kX, {
          controller: md.magmaward
        }), (0, NF.jsx)(fX, {
          controller: md.glowtide
        }), (0, NF.jsx)(zR, {
          controller: md.passage
        }), (0, NF.jsx)(mK, {
          controller: md.tideCharts
        }), (0, NF.jsx)(MX, {
          controller: md.glowMeter
        }), (0, NF.jsx)(MR, {
          controller: md.reachLog
        }), (0, NF.jsx)(dK, {
          controller: md.hushWait
        }), (0, NF.jsx)(CR, {
          controller: md.lampLight
        }), (0, NF.jsx)(iF, {
          controller: md.skills,
          surface: "hud"
        })]
      })
    }

    function RK(dd) {
      let {
        controller: Od
      } = dd;
      return (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsx)(sF, {
          controller: Od.map,
          navigation: Od.navigation
        }), (0, NF.jsx)(iF, {
          controller: Od.skills,
          surface: "menu"
        }), (0, NF.jsx)(cF, {
          controller: Od.quests,
          surface: "menu"
        }), (0, NF.jsx)(wR, {
          controller: Od.dungeons
        }), (0, NF.jsx)(JR, {
          controller: Od.collections
        }), (0, NF.jsx)(BR, {
          controller: Od.questGraph
        }), (0, NF.jsx)(iR, {
          controller: Od.forge
        }), (0, NF.jsx)(LR, {
          controller: Od.smuggler
        }), (0, NF.jsx)(kR, {
          controller: Od.keepersChair,
          lampLight: Od.lampLight
        }), (0, NF.jsx)(YX, {
          controller: Od.reachLog,
          regulars: Od.regulars,
          hiddenWaters: Od.hiddenWaters
        }), (0, NF.jsx)(WX, {
          controller: Od.regulars
        }), (0, NF.jsx)(jR, {
          controller: Od.passage
        }), (0, NF.jsx)(WK, {
          controller: Od.tideCharts
        }), (0, NF.jsx)(aX, {
          controller: Od.dialogue
        }), (0, NF.jsx)(EX, {
          controller: Od.autographs
        })]
      })
    }
    var XK = md(37942);
    const KK = Gm + Dm;

    function hK(dd, Od) {
      const md = [{
        sound: "rpgKnifeSlice1",
        beat: Gm,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: Gm,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: Gm,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: Gm,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: Gm,
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
        xN: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: KK + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        xN: !0,
        beat: KK + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: KK + 60,
        lead: 180,
        volume: .5 + .06 * dd,
        rate: .82 + .07 * dd
      }];
      return dd >= 4 && md.push({
        sound: "exp_levelup",
        beat: KK + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), Od && md.push({
        sound: "trumpetFlare",
        beat: KK + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), md.push({
        sound: "harp_pling",
        beat: nm,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), md
    }
    class vK {
      constructor(dd) {
        this.deps = dd, this.pending = new Map, this.localHook = null
      }
      hookWaiting(dd, Od) {
        this.pending.delete(dd);
        const md = this.deps.now();
        if (null === Od) {
          var Wd;
          if ((null === (Wd = this.localHook) || void 0 === Wd ? void 0 : Wd.hookId) === dd) {
            const dd = md >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(dd)
          }
          return
        }
        const Fd = md + Od;
        this.settle(dd, Fd) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(dd, {
          untilMs: md + 1e3,
          biteAtMs: Fd
        }))
      }
      getLocalHook() {
        var dd, Od;
        return null !== (dd = null === (Od = this.localHook) || void 0 === Od ? void 0 : Od.hookId) && void 0 !== dd ? dd : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const dd = this.deps.now();
        for (const [Od, {
            untilMs: md,
            biteAtMs: Wd
          }] of this.pending)(this.settle(Od, Wd) || dd > md) && this.pending.delete(Od)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(dd, Od) {
        const md = this.deps.getLineOwner(dd);
        if (null === md) return !1;
        if (!this.deps.isLocalPlayer(md)) return !0;
        if (this.localHook = {
            hookId: dd,
            biteAtMs: Od
          }, !this.deps.isHushWaiting()) {
          const [Od, md] = this.deps.getHookPosition(dd);
          this.deps.onCastLanded(Od, md)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var QK = md(2991);
    const tK = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      oK = {
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
    class NK {
      constructor(dd) {
        this.deps = dd, this.tell = null
      }
      receiveTell(dd) {
        let {
          biteTellTier: Od
        } = dd;
        this.tell = {
          tier: Od,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(dd) {
        const Od = this.tell;
        if (this.tell = null, !dd) return;
        const md = null !== Od && this.deps.now() - Od.atMs <= 3e3 ? Od.tier : 0;
        this.deps.vibrate(tK[md])
      }
      burstAtHook() {
        const dd = this.tell,
          Od = this.deps.getLocalHookPosition();
        null === dd || dd.burst || null === Od || (dd.burst = !0, this.deps.playParticles(function(dd, Od) {
          let [md, Wd, Fd] = Od;
          const {
            count: Rd,
            rise: Xd,
            colour: Kd
          } = oK[dd], [hd, vd, Qd] = Kd;
          return {
            texture: "glint",
            pos1: [md - .3, Wd, Fd - .3],
            pos2: [md + .3, Wd + .2, Fd + .3],
            dir1: [-.6, Xd, -.6],
            dir2: [.6, 1.4 * Xd, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Rd,
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
              minColor: [hd, vd, Qd, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [hd, vd, Qd, 0],
              maxColor: [hd, vd, Qd, 0]
            }],
            blendMode: QK.g.Add,
            hideDist: 48
          }
        }(dd.tier, Od)))
      }
    }
    var qK = md(1306),
      HK = md(2094),
      yK = md(46),
      bK = md(40241),
      TK = md(218);
    const pK = TK.i.yb * TK.i.playerEyeToHeightRatio;
    class YK {
      constructor(dd) {
        this.host = dd, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Yt(dd) {
        this.lava = dd, this.nextUpdateAt = 0
      }
      Et() {
        var dd;
        const Od = this.host.now();
        if (Od < this.nextUpdateAt) return;
        this.nextUpdateAt = Od + 250;
        const md = this.host.playerPosition(),
          Wd = md && this.findNearest([md[0], md[1] + pK, md[2]]);
        if (!Wd || Wd.distance >= 40) return void this.stop();
        const Fd = .5 * Math.min(1, (40 - Wd.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Fd) : this.loop = this.host.play("lavaFlow", Fd, Wd.position, 40 + pK, 9, !0), null === (dd = this.loop) || void 0 === dd || dd.setPosition(Wd.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var dd;
        null === (dd = this.loop) || void 0 === dd || dd.stop(), this.loop = null
      }
      findNearest(dd) {
        let Od = -1,
          md = 1 / 0;
        for (let Wd = 0; Wd < this.lava.length; Wd += 3) {
          const Fd = this.lava[Wd] - dd[0],
            Rd = this.lava[Wd + 1] - dd[1],
            Xd = this.lava[Wd + 2] - dd[2],
            Kd = Fd * Fd + Rd * Rd + Xd * Xd;
          Kd < md && (md = Kd, Od = Wd)
        }
        return Od < 0 ? null : {
          position: [this.lava[Od], this.lava[Od + 1], this.lava[Od + 2]],
          distance: Math.sqrt(md)
        }
      }
    }
    var gK = md(2077),
      wK = md(40249);
    const aK = {
      "Grey Portal": "Gray"
    };
    for (const sK of td.zc) aK[`${sK} Portal`] = sK;
    const EK = Object.keys(aK),
      JK = Object.fromEntries(EK.map((dd => [dd, (0, td.M)(td.E[`${(0,td.te)(aK[dd])}Team`])])));
    Object.fromEntries(EK.map((dd => [dd, td.E[`${(0,td.te)(aK[dd])}UiText`]])));
    class UK {
      constructor(dd, Od) {
        this.presentation = dd, this.portal = Od, this.unlocked = void 0
      }
      Yt(dd) {
        const Od = !1 === this.unlocked && dd;
        this.unlocked = dd, this.Et();
        const {
          min: md,
          max: Wd,
          unlockedBlock: Fd
        } = this.portal;
        if (Od && this.presentation.hasChunk(...md)) {
          const [dd, Od, Rd] = JK[Fd];
          this.presentation.playParticles({
            pos1: [...md],
            pos2: Wd.map((dd => dd + 1)),
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
              minColor: [dd, Od, Rd, 1],
              maxColor: [Math.min(255, dd + 55), Math.min(255, Od + 55), Math.min(255, Rd + 90), 1]
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
      Et() {
        var dd;
        const Od = this.unlocked ? this.portal.unlockedBlock : null !== (dd = this.portal.lockedBlock) && void 0 !== dd ? dd : "Light Gray Portal",
          {
            min: md,
            max: Wd
          } = this.portal;
        for (let Fd = md[0]; Fd <= Wd[0]; Fd++)
          for (let dd = md[1]; dd <= Wd[1]; dd++)
            for (let Rd = md[2]; Rd <= Wd[2]; Rd++) this.presentation.hasChunk(Fd, dd, Rd) && this.presentation.mY(Fd, dd, Rd) !== Od && this.presentation.nS(Fd, dd, Rd, Od)
      }
    }
    var xK = md(40117);
    md(40103);
    const BK = {
        farming_1: {
          raises: dd => "NPC" === dd.type && "chef" === dd.variation,
          rise: .4
        },
        fishing_1: {
          raises: dd => "Draugr Warper" === dd.type,
          rise: .4
        }
      },
      SK = (dd, Od, md, Fd) => {
        let {
          localPlayerId: Rd
        } = Fd;
        const Xd = new mF({
          translate: (dd, Od) => (0, tF.B)(qK.f.get().getCurrentLanguageCode(), dd, Od),
          translateWithIcons: (dd, Od) => (0, tF.u)(qK.f.get().getCurrentLanguageCode(), dd, Od),
          setMenuOpen: dd => {
            dd ? (0, Id.q)() : (0, Id.g)()
          },
          dismissMenu: Id.h,
          publishSkills: dd => {
            ld.j.lQ(zO, dd, !0)
          },
          publishQuests: dd => {
            ld.j.lQ(eO, dd, !0)
          },
          publishQuestNotification: dd => {
            ld.j.lQ(IO, dd, !0)
          },
          publishDungeons: dd => {
            ld.j.lQ(ZO, dd, !0)
          },
          publishCollections: dd => {
            ld.j.lQ(Tm, dd, !0)
          },
          publishMap: dd => {
            ld.j.lQ(vd, dd, !0)
          },
          publishHud: dd => {
            ld.j.lQ(MW, dd, !0)
          },
          publishPortalTransit: dd => {
            ld.j.lQ(Ym, dd, !0)
          },
          isLoadingScreenUp: () => RF.e.get("loadingOverlayVisible"),
          publishDailyReward: dd => {
            ld.j.lQ(am, dd, !0)
          },
          publishMailbox: dd => {
            ld.j.lQ(Bm, dd, !0)
          },
          publishQuestGraph: dd => {
            ld.j.lQ(sm, dd, !0)
          },
          publishForge: dd => {
            ld.j.lQ(fm, dd, !0)
          },
          publishSmuggler: dd => {
            ld.j.lQ(OW, dd, !0)
          },
          publishKeepersChair: dd => {
            ld.j.lQ(QW, dd, !0)
          },
          publishReachLog: dd => {
            ld.j.lQ(oW, dd, !0)
          },
          publishLampLight: dd => {
            ld.j.lQ(TW, dd, !0)
          },
          publishMagmaward: dd => {
            ld.j.lQ(YW, dd, !0)
          },
          publishGlowtide: dd => {
            ld.j.lQ(wW, dd, !0)
          },
          publishGlowMeter: dd => {
            ld.j.lQ(EW, dd, !0)
          },
          publishHushWait: dd => {
            ld.j.lQ(UW, dd, !0)
          },
          publishPassage: dd => {
            ld.j.lQ(FW, dd, !0)
          },
          publishTideCharts: dd => {
            ld.j.lQ(BW, dd, !0)
          },
          publishRegulars: dd => {
            ld.j.lQ(GW, dd, !0)
          },
          publishHiddenWaters: dd => {
            ld.j.lQ(cW, dd, !0)
          },
          publishDialogue: dd => {
            ld.j.lQ(DW, dd, !0)
          },
          publishAutographs: dd => {
            ld.j.lQ(ZW, dd, !0)
          },
          onDailyRewardStarted: dd => {
            ud.playSound(Rd, dd.day === Ud ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (dd, Od) => {
            ud.playSound(Rd, "exp_collect", .35, 1 + .6 * dd / (Od - 1)), ld.j.lQ(Em, dd === Od - 1)
          },
          onDailyRewardItemLanded: dd => {
            ud.playSound(Rd, "pickUp", .6, 1 + .15 * dd)
          },
          onMailboxStarted: () => {
            ud.playSound(Rd, "rpgMetalClick", .6, 1), ud.playSound(Rd, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            ud.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: yK.o,
          requestTracking: dd => {
            ud.sendCommand(`quests track ${dd}`)
          },
          requestDungeonEnter: (dd, Od) => {
            ud.sendCommand(`dungeonEnter ${dd} ${Od}`)
          },
          requestQuestJump: dd => {
            ud.sendCommand(`${Vd} jump ${dd}`)
          },
          requestQuestArrive: (dd, Od) => {
            const md = `${Vd} arrive ${dd}`;
            ud.sendCommand(Od ? `${md} complete` : md)
          },
          requestForge: dd => {
            let {
              blade: Od,
              guard: md,
              handle: Wd
            } = dd;
            ud.sendCommand(`forge ${Od} ${md} ${Wd}`)
          },
          requestDialogue: () => {
            ud.sendCommand("quests dialogue")
          },
          requestSmuggle: (dd, Od) => {
            ud.sendCommand(`smuggle ${dd} ${Od}`)
          },
          requestKeepersChairAim: dd => {
            ud.sendCommand(`keeperschair-aim ${dd}`)
          },
          requestReachLogOpen: () => {
            ud.sendCommand("reachlog-open")
          },
          requestLampLight: dd => {
            ud.sendCommand(`${dd}`)
          },
          requestTravel: dd => {
            ud.sendCommand(`map travel ${dd.kind} ${dd.id} ${dd.requestId}`)
          }
        });
        let Kd, hd, Qd, od, Nd, Td, pd, Yd, gd, Jd, xd, Sd, sd, ud, Ad = null;
        const Ld = BK[null !== md && void 0 !== md ? md : ""],
          cd = (dd, Od) => {
            null !== Ld && void 0 !== Ld && Ld.raises(Od) && ud.setNametagOffset(dd, Ld.rise)
          },
          jd = new NK({
            getLocalHookPosition: () => {
              const dd = Zd.getLocalHook();
              return null !== dd && ud.checkValid(dd) ? ud.hY(dd) : null
            },
            playParticles: dd => {
              ud.playParticleEffect(dd)
            },
            vibrate: dd => {
              Cd.i.play("fishBite", dd)
            },
            now: () => performance.now()
          }),
          Zd = new vK({
            getLineOwner: dd => ud.checkValid(dd) ? ud.getLineOwner(dd) : null,
            isLocalPlayer: dd => ud.isLocalPlayer(dd),
            getHookPosition: dd => {
              const [Od, , md] = ud.hY(dd);
              return [Od, md]
            },
            isHushWaiting: () => {
              var dd;
              return "waiting" === (null === (dd = Xd.hushWait.getSnapshot()) || void 0 === dd ? void 0 : dd.phase)
            },
            onCastLanded: (dd, Od) => {
              Xd.tideCharts.castLanded(dd, Od)
            },
            onLocalHookSettled: () => {
              jd.onLocalHookSettled()
            },
            onLocalWaitEnded: dd => {
              jd.onLocalWaitEnded(dd)
            },
            now: () => performance.now()
          }),
          kd = new YK({
            now: () => performance.now(),
            playerPosition: () => ud.checkValid(Rd) ? ud.hY(Rd) : null,
            play: (dd, Od, md, Wd, Fd, Xd) => ud.playSound(Rd, dd, Od, 1, {
              mW: md,
              maxHearDist: Wd,
              refDistance: Fd
            }, Xd)
          }),
          fd = new Map;
        let Md;
        return {
          onCreate: dd => {
            if (ud = dd, Ad = new wK.SkyblockEntityFacing(dd, Ld ? cd : null), Xd.portalTransit.resumeArrival(null !== md && void 0 !== md ? md : null), (null !== md && void 0 !== md ? md : Wd) === Wd) {
              let dd = -1 / 0;
              Md = ld.j.subscribe("toggleMenu", (Od => {
                const md = performance.now();
                "inventory|Workbench" !== Od || "cross_to_hub" !== Xd.quests.getTrackedQuestId() || md - dd < 1e4 || (dd = md, ud.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Wd, Fd] of Object.entries(null !== (Od = rd[null !== md && void 0 !== md ? md : ""]) && void 0 !== Od ? Od : {})) {
              var Od;
              fd.set(Wd, new UK({
                hasChunk: (Od, md, Wd) => dd.isBlockInLoadedChunk(Od, md, Wd),
                mY: (Od, md, Wd) => dd.blockIdToBlockName(dd.getBlockId(Od, md, Wd)),
                nS: (Od, md, Wd, Fd) => {
                  dd.nS(Od, md, Wd, Fd)
                },
                playParticles: Od => {
                  dd.playParticleEffect(Od)
                }
              }, Fd))
            }
            sd = (0, gK.e)((dd => (0, UO.i)(dd) ? (0, UO.e)(dd) : null)), Xd.resolveItemName = (Od, md) => {
              const Wd = dd.getItemStat(Rd, Od, "displayName");
              return Wd && "object" === typeof Wd && "translationKey" in Wd ? md(Wd.translationKey, (0, tF.s)(Wd.params, HK.c.shown)) : "string" === typeof Wd ? md(Wd) : Od
            }, Xd.quests.notifications.onShown = dd => {
              "quest" === dd ? ud.playSound(Rd, "magicAccent1", 1, 1) : "skillLevel" === dd ? ud.playSound(Rd, "magicAccent1", 1, .6) : "landmark" === dd ? ud.playSound(Rd, "trumpetFlare", 1, .6) : "npcNote" === dd ? ud.playSound(Rd, "magicAccent2", .8, 1.1) : "started" === dd ? ud.playSound(Rd, (0, XK.f)("bigDrumSwish"), 1, 1) : ud.playSound(Rd, (0, XK.f)("rpgHandleSmallLeather"), 1, 1)
            }, Xd.forge.onPartSelected = () => {
              ud.playSound(Rd, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Xd.forge.onOpened = () => {
              ! function(dd) {
                dd.preloadSounds(hK(4, !0).map((dd => dd.sound)))
              }(dd)
            }, Xd.forge.onForgeStarted = (Od, md, Wd) => function(dd, Od, md, Wd, Fd) {
              const Rd = [],
                Xd = [],
                Kd = md => {
                  const Wd = dd.playSound(Od, md.xN ? (0, XK.f)(md.sound) : md.sound, md.volume, md.rate);
                  Wd && (Xd.push(Wd), void 0 !== md.cutAfter && Rd.push(setTimeout((() => {
                    Wd.fade(Wd.getVolume(), 0, 300)
                  }), md.cutAfter)))
                };
              for (const hd of hK(md, Wd)) Fd ? Rd.push(setTimeout((() => {
                Kd(hd)
              }), Math.max(0, hd.beat - hd.lead / hd.rate))) : hd.beat !== Gm && "magicAccent2" !== hd.sound && "trumpetFlare" !== hd.sound || Kd(hd);
              return () => {
                for (const dd of Rd) clearTimeout(dd);
                for (const dd of Xd) dd.fade(dd.getVolume(), 0, 120)
              }
            }(dd, Rd, Od, md, Wd), Xd.smuggler.onBought = () => {
              (0, bK.d)(ud, Rd)
            }, Xd.compass.register(new qd(Xd.map, !0)), Xd.compass.register(new qd(Xd.map, !1)), Xd.compass.register(new yd(Xd.map)), Xd.compass.register(new bd((() => Xd.quests.getSnapshot().compassTarget)));
            for (const md of ["enemy", "npc"]) Xd.compass.register(new Hd(Xd.map, md, (Od => dd.checkValid(Od) ? dd.hY(Od) : void 0), (Od => dd.isAlive(Od))))
          },
          onAfterRender: (dd, Od) => {
            const md = ud.checkValid(Rd) ? ud.hY(Rd) : null;
            Xd.navigation.afterRender(md, performance.now(), Od), Xd.glowtide.afterRender(md, Od.cameraHeading), Xd.tideCharts.afterRender(md), Zd.afterRender()
          },
          onClose: () => {
            var dd, Od, md, Wd, Fd, Rd, vd, td, qd, Hd, yd, bd, Td, wd, Ed;
            Md && ld.j.unsubscribe(Md), null === (dd = sd) || void 0 === dd || dd(), kd.dispose(), null === (Od = Ad) || void 0 === Od || Od.dispose(), Zd.dispose(), Xd.dispose(), null === (md = Kd) || void 0 === md || md(), null === (Wd = hd) || void 0 === Wd || Wd(), null === (Fd = Qd) || void 0 === Fd || Fd(), null === (Rd = od) || void 0 === Rd || Rd(), null === (vd = Nd) || void 0 === vd || vd(), null === (td = pd) || void 0 === td || td(), null === (qd = undefined) || void 0 === qd || qd(), null === (Hd = Yd) || void 0 === Hd || Hd(), null === (yd = gd) || void 0 === yd || yd(), null === (bd = Jd) || void 0 === bd || bd(), null === (Td = xd) || void 0 === Td || Td(), null === (wd = undefined) || void 0 === wd || wd(), null === (Ed = Sd) || void 0 === Ed || Ed()
          },
          onPlayerChangeBlock: (dd, Od, Wd, Fd, Kd, hd) => {
            if (dd === Rd && "Air" === hd) {
              const dd = ud.getClientOption(Rd, "creative");
              Xd.skills.predictBlock([Od, Wd, Fd], Kd, dd);
              const hd = function(dd, Od) {
                  if ("hub" === Od || "farming_1" === Od || "mining_1" === Od) return !Pd.has(dd) || "hub" !== Od && "mining_1" !== Od ? Object.hasOwn(nd, dd) ? nd[dd] : void 0 : Gd
                }(Kd, md),
                vd = ("hub" === md || "mining_1" === md) && (td.ld.some((dd => dd === Kd)) || Object.hasOwn(zd, Kd) || "mining_1" === md && "Block of Coal" === Kd);
              dd || void 0 === hd && !vd || ud.nS(Od, Wd, Fd, null !== hd && void 0 !== hd ? hd : Gd)
            }
          },
          onPlayerAttackEntity: (dd, Od) => {
            if (dd !== Rd || "Player" !== ud.getEntityType(Od)) return;
            const [md, Wd, Fd] = ud.hY(Od);
            ud.burstParticlePreset("critical", [md, Wd + 1, Fd], 10)
          },
          onChangeBlockFail: dd => {
            for (const {
                yO: Od
              }
              of dd) Xd.skills.rejectBlock(Od)
          },
          onReceivedMessageFromServer: (dd, Od) => {
            if ("skyblockGatedPortal" === dd) {
              var md;
              const [dd, Wd] = Od;
              return void(null === (md = fd.get(dd)) || void 0 === md || md.Yt(Wd))
            }
            if ("skyblockDailyReward" === dd) return void Xd.dailyReward.Yt(Od);
            if ("skyblockMailbox" === dd) return void Xd.mailbox.Yt(Od);
            if ("skyblockPortalTransit" === dd) return void Xd.portalTransit.Yt(Od);
            if ("skyblockLava" === dd) return void kd.Yt(Od);
            if ("skyblockForge" === dd) return void Xd.forge.Yt(Od);
            if ("skyblockMagmaward" === dd) return void Xd.magmaward.Yt(Od);
            if ("skyblockGlowtide" === dd) return void Xd.glowtide.Yt(Od);
            if ("skyblockGlowMeter" === dd) return void Xd.glowMeter.Yt(Od);
            if ("skyblockHushWait" === dd) return void Xd.hushWait.Yt(Od);
            if ("skyblockPassage" === dd) {
              const dd = Od;
              return Xd.passage.Yt(dd), Xd.reachLog.receivePassagePhase(dd.passagePhase), Jd ??= (0, wd.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Xd.passage.show
              }), void Xd.keepersChair.receivePassage({
                keepersChairPassagePhase: dd.passagePhase,
                keepersChairPassageNextPhase: dd.passageNextPhase,
                keepersChairPassageTurnsInMs: dd.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === dd) {
              const dd = Od;
              return Xd.tideCharts.Yt(dd), void(dd.tideCharts.length > 0 && (xd ??= (0, wd.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Xd.tideCharts.show
              })))
            }
            if (dd === Dd.x) {
              var Wd;
              const {
                hookId: dd,
                waiting: md
              } = Od;
              return void Zd.hookWaiting(dd, null !== (Wd = null === md || void 0 === md ? void 0 : md.remainingMs) && void 0 !== Wd ? Wd : null)
            }
            if ("skyblockBiteTell" === dd) return void jd.receiveTell(Od);
            if ("skyblockSmuggler" === dd) return void Xd.smuggler.Yt(Od);
            if ("skyblockKeepersChair" === dd) return Xd.keepersChair.Yt(Od), void Xd.lampLight.setAtChair(Xd.keepersChair.isAtChair());
            if ("skyblockLampLight" === dd) {
              const dd = Od;
              var Fd;
              if (Xd.lampLight.Yt(dd), dd.lampLightReleasing) gd ??= (0, wd.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Xd.lampLight.setRelease(!1)
                }
              });
              else null === (Fd = gd) || void 0 === Fd || Fd(), gd = void 0;
              return
            }
            if ("skyblockRegulars" === dd) return void Xd.regulars.Yt(Od);
            if ("skyblockHiddenWaters" === dd) return void Xd.hiddenWaters.Yt(Od);
            if ("skyblockReachLog" === dd) return Xd.reachLog.Yt(Od), void(Yd ??= (0, wd.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: qW
              },
              onClick: Xd.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === dd) {
              for (const [dd, md, Wd, Fd] of Od) ud.nS(dd, md, Wd, Fd);
              return
            }
            if ("skyblockHud" === dd) Xd.receiveHud(Od);
            else if ("skyblockMap" === dd) Xd.map.Yt(Od);
            else if (dd === ed.e) Xd.skills.Yt(Od);
            else if (dd === Bd && "dialogue" === Od.kind) Xd.dialogue.Yt(Od);
            else if (dd === Bd) Xd.quests.Yt(Od);
            else if ("skyblockDungeons" === dd) Xd.dungeons.Yt(Od);
            else if ("sbCollections" === dd) Xd.collections.Yt(Od);
            else if ("skyblockQuestGraph" === dd) Xd.questGraph.Yt(Od);
            else {
              if ("skyblockAutographs" !== dd) return;
              Xd.autographs.Yt(Od)
            }
            if (!hd && Xd.map.getSnapshot().enabled) {
              const dd = (0, wd.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Xd.map.show
                }),
                Od = (0, Id.y)(Xd.map.show);
              hd = () => {
                dd(), Od()
              }
            }!Qd && Xd.skills.getSnapshot().enabled && (Qd = (0, wd.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Xd.skills.show
            })), !pd && Xd.collections.getSnapshot().enabled && (pd = (0, wd.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Xd.collections.show
            })), !od && Xd.quests.getSnapshot().enabled && (od = (0, wd.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Xd.quests.show
            })), !Sd && Xd.autographs.getSnapshot().enabled && (Sd = (0, wd.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Xd.autographs.show
            }));
            const Rd = Xd.dungeons.getSnapshot().enabled;
            var vd;
            (Qd || od || Rd) && Td !== Rd && (Td = Rd, null === (vd = Nd) || void 0 === vd || vd(), Nd = (0, wd.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: xK
              },
              disabled: !Rd,
              panel: !0,
              onClick: Xd.dungeons.show
            }));
            Kd || (Kd = (0, Id.F)((0, Ed.createElement)(FK, {
              controller: Xd
            }), {
              content: (0, Ed.createElement)(RK, {
                controller: Xd
              }),
              onClose: Xd.close
            }))
          },
          Et: () => {
            var dd;
            for (const Od of fd.values()) Od.Et();
            kd.Et(), null === (dd = Ad) || void 0 === dd || dd.Et(), Xd.skills.Et(), Xd.quests.Et(), Xd.dailyReward.Et(), Xd.mailbox.Et(), Xd.map.Et()
          }
        }
      }
  },
  40080: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      h: () => Fd
    });
    var Wd = md(405);
    const Fd = (0, Wd.rb)([0, 0, -1]),
      Rd = [{
        name: "S",
        bearing: (0, Wd.rb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Wd.rb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Fd
      }, {
        name: "W",
        bearing: (0, Wd.rb)([1, 0, 0])
      }]
  },
  40074: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    var Wd = md(40080);

    function Fd(dd, Od, md) {
      return [100 * (md.mapMaxX - dd) / (md.mapMaxX - md.mapMinX), 100 * (Od - md.mapMinZ) / (md.mapMaxZ - md.mapMinZ)]
    }

    function Rd(dd, Od, md, Rd) {
      const [Xd, Kd] = Fd(dd, Od, Rd), hd = Wd.h - md;
      return {
        rotation: hd,
        transform: `rotate(${hd}rad) translate(-${Xd}%, -${Kd}%)`
      }
    }
  },
  37901: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Wd
    });
    const Wd = "skyblockSkills",
      Fd = "skills_test_gym"
  },
  40138: (dd, Od, md) => {
    var Wd = {
      "./combat_1.png": 40140,
      "./dungeon_crumbling_crypt.png": 40142,
      "./dungeon_frozen_hollow.png": 40147,
      "./dungeon_wildwood_grove.png": 40156,
      "./dungeons.png": 40164,
      "./farming_1.png": 40166,
      "./fishing_1.png": 40170,
      "./hub.png": 40177,
      "./island.png": 40183,
      "./mining_1.png": 40185,
      "./mining_1_bridge.png": 40191,
      "./mining_1_gallery.png": 40200,
      "./mining_1_hollow.png": 40203,
      "./mining_1_village.png": 40206
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 40138
  },
  40140: (dd, Od, md) => {
    dd.exports = md.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  40142: (dd, Od, md) => {
    dd.exports = md.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  40147: (dd, Od, md) => {
    dd.exports = md.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  40156: (dd, Od, md) => {
    dd.exports = md.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  40164: (dd, Od, md) => {
    dd.exports = md.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  40166: (dd, Od, md) => {
    dd.exports = md.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  40170: (dd, Od, md) => {
    dd.exports = md.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  40177: (dd, Od, md) => {
    dd.exports = md.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  40183: (dd, Od, md) => {
    dd.exports = md.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  40185: (dd, Od, md) => {
    dd.exports = md.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  40191: (dd, Od, md) => {
    dd.exports = md.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  40200: (dd, Od, md) => {
    dd.exports = md.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  40203: (dd, Od, md) => {
    dd.exports = md.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  40206: (dd, Od, md) => {
    dd.exports = md.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);