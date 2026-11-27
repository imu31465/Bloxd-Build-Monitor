export const id = 249;
export const ids = [60, 249];
export const modules = {
  40197: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr, Sr) {
      return Zr.set(rr, Sr), rr
    }

    function ar(rr) {
      var Sr;
      return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
    }
  },
  40059: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr) {
        this.Jp = rr, this.beforeOpen = Sr, this.afterClose = Qr, this.open = !1, this.vU = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.vU && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(rr) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(rr)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.vU = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.vU || (this.snapshot = this.buildSnapshot(), this.Jp(this.snapshot))
      }
    }
  },
  40218: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      SkyblockEntityFacing: () => Ir,
      needsSkyblockEntityFacing: () => jr
    });
    var Zr = Qr(683),
      Wr = Qr(2984),
      ar = Qr(40221);

    function jr(rr, Sr) {
      if (rr.metaInfo === Zr.d || "Iron Guardian" === rr.type || "Gold Guardian" === rr.type) return !0;
      if ("Pig" === rr.type) return "sitting" === rr.pose;
      if ("Person" !== rr.meshKind || void 0 === rr.meshOpts) return !1;
      let Qr = null === Sr || void 0 === Sr ? void 0 : Sr.get(rr.meshOpts);
      if (void 0 === Qr) {
        var ar, jr;
        const Zr = (0, Wr.h)(rr);
        Qr = !1, "pig_napoleon" === (null === Zr || void 0 === Zr || null === (ar = Zr.opts.textures) || void 0 === ar ? void 0 : ar.head) ? Qr = !0 : "npc_pig_head" === (null === Zr || void 0 === Zr || null === (jr = Zr.opts.textures) || void 0 === jr ? void 0 : jr.head) && (Qr = "sitting" === Zr.opts.pose || "sitting"), Sr && (Sr.size >= 256 && Sr.clear(), Sr.set(rr.meshOpts, Qr))
      }
      return "sitting" === Qr ? "sitting" === rr.pose : Qr
    }(0, ar.h)("skyblock", ((rr, Sr) => {
      Sr.setFacingTolerance(jr(rr) ? 0 : null)
    }));
    class Ir {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = rr, this.alsoVisit = Sr, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = rr => {
          var Sr;
          const Qr = this.api.getEntityInfo(rr);
          Qr && (jr(Qr, this.meshFacingCache) && (this.api.setFacingTolerance(rr, 0), this.nextFacing.add(rr)), null === (Sr = this.alsoVisit) || void 0 === Sr || Sr.call(this, rr, Qr))
        }
      }
      lx() {
        const {
          api: rr
        } = this, Sr = this.nextFacing;
        rr.forEachEntity(this.visit);
        for (const Qr of this.facing) Sr.has(Qr) || rr.setFacingTolerance(Qr, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Sr
      }
      dispose() {
        for (const rr of this.facing) this.api.setFacingTolerance(rr, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  40037: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => OI
    });
    const Zr = "island";
    var Wr = Qr(40045);

    function ar(rr, Sr, Qr) {
      const ar = "local" === Sr,
        Ir = rr.background,
        fr = Sr => Ir ? (0, Wr.b)(Sr[0] - rr.mapOrigin[0], Sr[2] - rr.mapOrigin[2], Ir.bounds) : [50, 50],
        Er = (rr.insideDungeon ? [] : rr.landmarks).map((rr => {
          var Sr, Zr;
          return {
            id: rr.id,
            name: Qr(rr.visited && rr.nameKey ? null !== (Sr = rr.mapLabelKey) && void 0 !== Sr ? Sr : rr.nameKey : "skyblockGame:mapUnknown"),
            icon: rr.visited && null !== (Zr = rr.icon) && void 0 !== Zr ? Zr : "unknown",
            visited: rr.visited,
            current: !1,
            position: fr(rr.position),
            travelKind: "landmark",
            travelId: rr.id
          }
        })),
        pr = rr.zones.map((Sr => {
          var Zr;
          return {
            id: Sr.id,
            name: Qr(Sr.visited && Sr.nameKey ? Sr.nameKey : "skyblockGame:mapUnknown"),
            icon: Sr.visited && null !== (Zr = Sr.icon) && void 0 !== Zr ? Zr : "unknown",
            visited: Sr.visited,
            current: Sr.id === rr.zoneId,
            position: Sr.position,
            thumbnail: Sr.visited ? Sr.id : void 0,
            travelKind: "zone",
            travelId: Sr.id
          }
        })),
        xr = rr.insideDungeon || !Ir ? [] : rr.portals.map((rr => {
          var Sr;
          return {
            id: rr.id,
            name: Qr(null !== (Sr = rr.nameKey) && void 0 !== Sr ? Sr : "skyblockGame:mapUnknown"),
            icon: rr.visited ? "dungeons" === rr.destination ? "portal_orange" : "portal" : "unknown",
            visited: rr.visited,
            current: !1,
            position: fr(rr.position),
            colour: rr.colour,
            travelKind: "zone",
            travelId: rr.destination
          }
        })),
        mr = ar ? Er : pr,
        Nr = mr.filter((rr => rr.visited)).length,
        Ur = Ir ? (Ir.bounds.mapMaxX - Ir.bounds.mapMinX) / (Ir.bounds.mapMaxZ - Ir.bounds.mapMinZ) : 2,
        tr = Ir ? JSON.stringify([Ir.bounds, rr.mapOrigin]) : "";
      return {
        local: ar,
        points: mr,
        portals: ar ? xr : [],
        progress: mr.length ? Qr("skyblockGame:mapDiscovered", {
          current: String(Nr),
          total: String(mr.length)
        }) : null,
        percent: mr.length ? 100 * Nr / mr.length : 0,
        canTravel: [...mr, ...ar ? xr : []].some((rr => rr.visited && !rr.current)),
        noLandmarks: ar && !rr.insideDungeon && 0 === Er.length,
        background: Ir ? {
          imageKey: Ir.imageKey,
          fallbackImageKey: rr.zoneId,
          geometryKey: tr,
          label: Qr(Ir.labelKey),
          colour: Ir.backgroundColour,
          ratio: Ur
        } : null,
        connections: jr(rr.zones),
        minimap: Ir ? {
          imageKey: Ir.imageKey,
          fallbackImageKey: rr.zoneId,
          geometryKey: tr,
          label: Qr(Ir.labelKey),
          colour: Ir.backgroundColour,
          caption: Qr(rr.zoneId === Zr ? "skyblockGame:zoneIsland" : Ir.labelKey),
          width: (Ir.bounds.mapMaxX - Ir.bounds.mapMinX) / Ir.minimapSpan * 100 + "%",
          height: (Ir.bounds.mapMaxZ - Ir.bounds.mapMinZ) / Ir.minimapSpan * 100 + "%",
          markers: [...Er, ...xr]
        } : null
      }
    }

    function jr(rr) {
      const Sr = new Set;
      return rr.flatMap((Qr => Qr.connections.flatMap((Zr => {
        const Wr = rr.find((rr => rr.id === Zr)),
          ar = [Qr.id, Zr].sort().join("|");
        return !Wr || Sr.has(ar) ? [] : (Sr.add(ar), [{
          id: `${Qr.id}-${Zr}`,
          start: Qr.position,
          end: Wr.position,
          explored: Qr.visited && Wr.visited
        }])
      }))))
    }
    var Ir = Qr(40059);
    class fr extends Ir.c {}
    const Er = "skyblockMapView";
    class pr extends fr {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(rr, Zr, Wr), this.requestTravel = Sr, this.translate = Qr, this.now = ar, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = rr => {
          this.tab = rr, this.feedbackKey = "", this.emit()
        }, this.travel = (rr, Sr) => {
          if (!this.map || this.pending || this.vU) return;
          const Qr = ("zone" === rr ? this.map.zones : this.map.landmarks).find((rr => rr.id === Sr));
          if (Qr) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Qr && !Qr.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Qr.visited)
              if ("zone" === rr && Sr === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Qr = ++this.nextRequestId;
                this.pending = {
                  requestId: Qr,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: rr,
                  id: Sr,
                  requestId: Qr
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
      setTranslator(rr) {
        this.translate = rr, this.emit()
      }
      vx(rr) {
        var Sr;
        if (!this.vU)
          if ("entities" !== rr.kind)
            if ("open" !== rr.kind) {
              var Qr, Zr;
              if ("snapshot" === rr.kind)(null === (Qr = rr.snapshot) || void 0 === Qr ? void 0 : Qr.zoneId) !== (null === (Zr = this.map) || void 0 === Zr ? void 0 : Zr.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = rr.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === rr.kind) {
                var Wr;
                rr.requestId === (null === (Wr = this.pending) || void 0 === Wr ? void 0 : Wr.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (rr.requestId === (null === (Sr = this.pending) || void 0 === Sr ? void 0 : Sr.requestId)) {
                var ar;
                this.pending = null, this.feedbackKey = null !== (ar = rr.errorKey) && void 0 !== ar ? ar : "", null === rr.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = rr.entities
      }
      lx() {
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
          presentation: this.map ? ar(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var xr = Qr(379);
    const mr = 67.5 * Math.PI / 180;

    function Nr(rr, Sr) {
      const Qr = Math.abs(rr);
      if (Qr > mr || Sr.trackHalfWidth <= 0) return null;
      const Zr = Sr.trackHalfWidth,
        Wr = Sr.screenHalfWidth / (Sr.tanHalfFovX * Math.max(.5, Math.cos(Sr.pitch))),
        ar = Math.min(Math.atan(.6 * Zr / Wr), .75 * mr),
        jr = Wr * Math.tan(ar);
      let Ir;
      if (Qr <= ar) Ir = Wr * Math.tan(Qr);
      else {
        const rr = mr - ar,
          Sr = Math.max(0, Wr * rr / (Math.cos(ar) ** 2 * (Zr - jr)) - 1),
          fr = (Qr - ar) / rr;
        Ir = jr + (Zr - jr) * (1 + Sr) * fr / (1 + Sr * fr)
      }
      return 50 + Math.sign(rr) * Ir * 50 / Zr
    }
    class Ur {
      constructor(rr, Sr) {
        this.map = rr, this.visited = Sr, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Sr ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const rr = this.map.getSnapshot().map;
        return !rr || rr.insideDungeon ? [] : rr.landmarks.filter((rr => rr.visited === this.visited)).map((rr => {
          var Sr, Qr;
          return {
            id: `landmark:${rr.id}`,
            position: rr.position,
            icon: null !== (Sr = rr.icon) && void 0 !== Sr ? Sr : "unknown",
            nameKey: null !== (Qr = rr.nameKey) && void 0 !== Qr ? Qr : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class tr {
      constructor(rr, Sr, Qr, Zr) {
        this.map = rr, this.kind = Sr, this.position = Qr, this.alive = Zr, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Sr, this.range = "enemy" === Sr ? 48 : 64, this.limit = 12
      }
      JY(rr) {
        if ("enemy" !== this.kind || this.alive(rr.hQ)) return this.position(rr.hQ)
      }
      getPoints() {
        const rr = [];
        for (const Zr of this.map.getEntities()) {
          if (Zr.kind !== this.kind || "enemy" === this.kind && !this.alive(Zr.compassEntityId)) continue;
          const Wr = this.position(Zr.compassEntityId);
          var Sr, Qr;
          if (Wr) rr.push({
            id: `${this.kind}:${Zr.compassEntityId}`,
            hQ: Zr.compassEntityId,
            kind: this.kind,
            icon: null !== (Sr = Zr.icon) && void 0 !== Sr ? Sr : Zr.npcSkin ? `npc_${Zr.npcSkin}` : this.kind,
            displayName: Zr.displayName,
            position: Wr,
            nameKey: null !== (Qr = Zr.nameKey) && void 0 !== Qr ? Qr : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return rr
      }
    }
    class hr {
      constructor(rr) {
        this.map = rr, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const rr = this.map.getSnapshot().map;
        return !rr || rr.insideDungeon ? [] : rr.portals.map((rr => {
          var Sr;
          return {
            id: "portal:" + rr.id,
            kind: "portal",
            position: rr.position,
            nameKey: null !== (Sr = rr.nameKey) && void 0 !== Sr ? Sr : "skyblockGame:compassUnvisitedZone",
            icon: rr.visited ? "dungeons" === rr.destination ? "portal_orange" : "portal" : "unknown",
            colour: rr.colour
          }
        }))
      }
    }
    class zr {
      constructor(rr) {
        this.target = rr, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const rr = this.target();
        return rr ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: rr.position,
          nameKey: rr.nameKey
        }] : []
      }
    }

    function Yr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.position;
      const Wr = Zr[0] - Sr[0],
        ar = Zr[2] - Sr[2];
      return {
        ...rr,
        position: Zr,
        offset: xr.b.computeShortestRotation(Qr, (0, xr.ub)([Wr, 0, ar])),
        distance: Math.hypot(Wr, Zr[1] - Sr[1], ar)
      }
    }
    let nr;

    function er(rr, Sr) {
      var Qr;
      return (null === (Qr = nr) || void 0 === Qr ? void 0 : Qr.locale) !== Sr && (nr = {
        locale: Sr,
        near: new Intl.NumberFormat(Sr, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Sr, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (rr < 10 ? nr.near : nr.far).format(rr)
    }
    class Kr {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(rr) {
        return this.providers.set(rr.id, rr), this.refreshAt = 0, () => {
          this.providers.get(rr.id) === rr && (this.providers.delete(rr.id), this.refreshAt = 0)
        }
      }
      frame(rr, Sr, Qr) {
        if (Qr >= this.refreshAt) {
          this.refreshAt = Qr + 200, this.candidates = [];
          for (const Sr of this.providers.values()) {
            if (!Sr.enabled) continue;
            const Qr = Sr.getPoints().map((Sr => {
              const Qr = Sr.position;
              return {
                point: Sr,
                distance: Math.hypot(Qr[0] - rr[0], Qr[1] - rr[1], Qr[2] - rr[2])
              }
            })).filter((rr => rr.distance <= Sr.range)).sort(((rr, Sr) => rr.distance - Sr.distance)).slice(0, Sr.limit);
            for (const {
                point: rr
              }
              of Qr) this.candidates.push({
              provider: Sr,
              point: rr
            })
          }
        }
        const Zr = [];
        for (const {
            point: Wr,
            provider: ar
          }
          of this.candidates) {
          if (!ar.enabled) continue;
          const Qr = ar.JY ? ar.JY(Wr) : Wr.position;
          if (Qr) {
            const ar = Yr(Wr, rr, Sr, Qr);
            Math.abs(ar.offset) <= mr && Zr.push(ar)
          }
        }
        return Zr
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var yr = Qr(3429),
      Br = Qr(72);
    const Tr = [{
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
      vr = Tr.length;

    function Or(rr) {
      return rr >= vr ? 1 : rr + 1
    }
    const Lr = "skyblockQuests",
      lr = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Xr = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Pr(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Qr = Math.max(0, Math.floor(rr)),
        Zr = Math.floor(Qr % 1e3 / 100),
        Wr = Math.floor(Qr / 1e3),
        ar = Wr % 60,
        jr = Math.floor(Wr / 60),
        Ir = jr % 60,
        fr = Math.floor(jr / 60),
        Er = rr => rr < 10 ? `0${rr}` : String(rr),
        pr = Sr ? `.${Zr}` : "";
      return fr > 0 ? `${fr}:${Er(Ir)}:${Er(ar)}${pr}` : `${Ir}:${Er(ar)}${pr}`
    }
    const Hr = "devquests",
      qr = "none",
      Rr = {
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
      gr = "Compressed Messy Stone",
      Cr = {
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
      Mr = ["Stone", "Diorite", "Andesite", "Granite"],
      Gr = new Set(Mr),
      kr = (Object.keys(Cr), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Ar = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Vr(rr, Sr) {
      const Qr = Math.floor(5 * rr / (2 * Sr + 1));
      return Math.min(4, Math.max(0, Qr))
    }
    var ir = Qr(1287);
    var wr = Qr(37798);
    var cr = Qr(3425),
      Fr = Qr(34),
      or = Qr(1e4);
    const br = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Jr = 1e3;

    function Dr(rr) {
      return Math.max(0, rr)
    }

    function dr(rr) {
      return 1 + .01 * Dr(rr)
    }

    function sr(rr) {
      return 1 + .005 * Dr(rr)
    }

    function ur(rr) {
      return 1 + .005 * Dr(rr)
    }

    function rS(rr) {
      return .01 * Dr(rr)
    }

    function SS(rr) {
      return 150 / (150 + Dr(rr))
    }

    function QS(rr) {
      return 1 + .002 * Dr(rr)
    }

    function ZS(rr) {
      return Math.round(10 * rr) / 10
    }

    function WS(rr, Sr) {
      switch (rr) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ZS(100 * (sr(Sr) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ZS(100 * (dr(Sr) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ZS(100 * (ur(Sr) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ZS(100 * rS(Sr))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ZS(100 * (1 - SS(Sr)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ZS(100 * (QS(Sr) - 1))
          }
      }
    }

    function aS(rr) {
      return "farming" === rr ? 200 : 100
    }

    function jS(rr, Sr) {
      if (!Number.isSafeInteger(rr) || rr < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Qr = aS(Sr),
        Zr = rr => function(rr, Sr) {
          return aS(rr) * Sr * (Sr + 1) / 2
        }(Sr, rr);
      let Wr = Math.min(Jr, Math.floor((Math.sqrt(8 * rr / Qr + 1) - 1) / 2));
      return Wr < Jr && Zr(Wr + 1) <= rr ? Wr++ : Zr(Wr) > rr && Wr--, {
        totalXp: rr,
        level: Wr,
        xpIntoLevel: rr - Zr(Wr),
        xpForNextLevel: Wr === Jr ? null : Qr * (Wr + 1)
      }
    }
    const IS = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function fS(rr) {
      return IS.has(rr)
    }
    const ES = new Set(xr.jb);

    function pS(rr) {
      return ES.has(rr)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const xS = {
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
      mS = {
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
      NS = {
        ...mS,
        ...Object.fromEntries(Object.entries(kr).map((rr => {
          let [Sr, Qr] = rr;
          return [Sr, 9 * mS[Qr]]
        })))
      },
      US = {
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
      tS = {
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
    const hS = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      zS = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function YS(rr) {
      return `rgb(${zS[rr].join(", ")})`
    }

    function nS(rr, Sr, Qr) {
      if (!Qr) return rr(Sr);
      const Zr = {};
      for (const [Wr, ar] of Object.entries(Qr)) Zr[Wr] = "string" === typeof ar ? ar : rr(ar.translationKey);
      return rr(Sr, Zr)
    }
    class eS {
      constructor(rr, Sr) {
        this.now = rr, this.getJournal = Sr, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.wI = !1, this.onShown = () => {}
      }
      enqueue(rr) {
        const Sr = KS(rr);
        if (Sr) this.pending.push(rr);
        else {
          const Sr = this.pending.findIndex(KS);
          this.pending.splice(-1 === Sr ? this.pending.length : Sr, 0, rr)
        }
        return (null === this.current || null !== this.followUp && !Sr) && (this.advance(), !0)
      }
      setHeld(rr) {
        return this.wI = rr, !rr && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      lx() {
        const rr = this.getJournal(),
          Sr = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Sr ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Sr || void 0 === Sr ? void 0 : Sr.kind) && rr && rr.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Sr || void 0 === Sr ? void 0 : Sr.kind)) {
          const rr = this.findFollowUp(this.current);
          if ("step" !== (null === rr || void 0 === rr ? void 0 : rr.kind) || rr.questId !== Sr.questId || rr.step.id !== Sr.step.id) return this.showFollowUp(rr, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(rr, Sr, Qr) {
        var Zr, Wr, ar, jr;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, rr, Qr);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, rr);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, rr, Sr);
        const {
          questCompletionKind: Ir,
          questCompletionNameKey: fr
        } = this.current, Er = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, pr = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, xr = "step" === (null === (Zr = this.followUp) || void 0 === Zr ? void 0 : Zr.kind) ? this.followUp : null, mr = "explore" === (null === (Wr = this.followUp) || void 0 === Wr ? void 0 : Wr.kind);
        let Nr;
        return Nr = mr ? rr("skyblockGame:questExploreTitle") : null !== xr ? "quest" === Ir ? rr("skyblockGame:questNextQuestTitle", {
          quest: rr(xr.questNameKey)
        }) : rr("skyblockGame:questNextStepTitle") : rr("started" === Ir ? "skyblockGame:questStartedTitle" : "quest" === Ir ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Ir : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Nr,
          name: mr ? Sr("skyblockGame:questExploreName") : null !== xr ? nS(Sr, xr.step.nameKey, xr.step.nameParams) : nS(Sr, fr, Er),
          description: mr ? Sr("skyblockGame:questExploreDescription") : null === xr ? null : nS(Sr, xr.step.descriptionKey, xr.step.descriptionParams),
          reward: null === this.followUp && pr > 0 ? Sr("skyblockGame:questCoinRewardSuffix", {
            amount: pr.toLocaleString(Qr)
          }) : null,
          iconItem: null !== (ar = null === xr || void 0 === xr ? void 0 : xr.step.questIconItem) && void 0 !== ar ? ar : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== xr && (null === (jr = this.getJournal()) || void 0 === jr ? void 0 : jr.trackedQuestId) === xr.questId ? xr.step.nameKey : null
        }
      }
      getSkillLevelView(rr, Sr, Qr) {
        let {
          skill: Zr,
          beforeLevel: Wr,
          level: ar
        } = rr;
        const jr = WS(Zr, Wr),
          Ir = WS(Zr, ar);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Sr(`skyblockGame:${Zr}`),
          name: Sr("skyblockGame:skillLevelUp", {
            to: ar.toLocaleString(Qr)
          }),
          description: jr.percent === Ir.percent ? null : Sr(`${Ir.translationKey}Change`, {
            before: jr.percent.toLocaleString(Qr),
            after: Ir.percent.toLocaleString(Qr)
          }),
          reward: null,
          iconItem: hS[Zr],
          accent: YS(Zr),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(rr, Sr) {
        let {
          landmarkNameKey: Qr
        } = rr;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Sr("skyblockGame:landmarkDiscovered"),
          name: Sr(Qr),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(rr, Sr, Qr) {
        let {
          titleKey: Zr,
          textKey: Wr,
          params: ar = {},
          nameKeys: jr = {},
          iconItem: Ir = null
        } = rr;
        const fr = {
          ...ar
        };
        for (const [Er, pr] of Object.entries(jr)) fr[Er] = Sr(pr);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Sr(Zr),
          name: Qr(Wr, fr),
          description: null,
          reward: null,
          iconItem: Ir,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var rr;
        if (null !== this.followUp) return 5600;
        switch (null === (rr = this.current) || void 0 === rr ? void 0 : rr.questCompletionKind) {
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
      showFollowUp(rr, Sr) {
        null === rr || this.wI ? this.advance() : (this.followUp = rr, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Sr && void 0 !== Sr ? Sr : this.shownAt + this.durationMs())
      }
      findFollowUp(rr) {
        var Sr;
        const Qr = this.getJournal();
        if (!Qr || this.hasPendingQuestPopup() || KS(rr)) return null;
        const Zr = "started" === rr.questCompletionKind ? Qr.active.some((Sr => Sr.id === rr.questCompletionQuestId)) : "quest" === rr.questCompletionKind ? Qr.completed.some((Sr => Sr.id === rr.questCompletionQuestId)) : [...Qr.active, ...Qr.completed].some((Sr => Sr.id === rr.questCompletionQuestId && Sr.subquests.some((Sr => Sr.id === rr.questCompletionStepId && "completed" === Sr.status))));
        if (!Zr) return null;
        if ("quest" === rr.questCompletionKind && 0 === Qr.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Wr = Qr.active.find((rr => rr.id === Qr.trackedQuestId)),
          ar = null !== (Sr = null === Wr || void 0 === Wr ? void 0 : Wr.subquests.find((rr => "ready" === rr.status))) && void 0 !== Sr ? Sr : null === Wr || void 0 === Wr ? void 0 : Wr.subquests.find((rr => "active" === rr.status));
        return ar ? {
          kind: "step",
          questId: Wr.id,
          questNameKey: Wr.nameKey,
          step: ar
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((rr => !KS(rr)))
      }
      advance() {
        var rr;
        this.current = this.wI ? null : null !== (rr = this.pending.shift()) && void 0 !== rr ? rr : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function KS(rr) {
      return yS(rr.questCompletionKind)
    }

    function yS(rr) {
      return "skillLevel" === rr || "landmark" === rr || "npcNote" === rr
    }
    var BS = Qr(40065),
      TS = Qr(40071),
      vS = Qr(40033),
      OS = Qr(2999);
    const LS = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function lS(rr) {
      const Sr = new OS.l(rr);
      return {
        radius: 45,
        squareness: 3,
        wobbles: LS.map((rr => {
          let {
            lobes: Qr,
            amount: Zr
          } = rr;
          return {
            lobes: Qr[Math.floor(Sr.next() * Qr.length)],
            amount: Zr[0] + Sr.next() * (Zr[1] - Zr[0]),
            phase: 2 * Sr.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function XS(rr) {
      let {
        radius: Sr,
        squareness: Qr,
        wobbles: Zr,
        samples: Wr
      } = rr;
      const ar = [];
      for (let jr = 0; jr < Wr; jr++) {
        const rr = 2 * Math.PI * jr / Wr,
          Ir = Math.cos(rr),
          fr = Math.sin(rr),
          Er = Sr * (Math.abs(Ir) ** Qr + Math.abs(fr) ** Qr) ** (-1 / Qr) * Zr.reduce(((Sr, Qr) => {
            let {
              lobes: Zr,
              amount: Wr,
              phase: ar
            } = Qr;
            return Sr + Wr * Math.sin(Zr * rr + ar)
          }), 1);
        ar.push(`${(50+Er*Ir).toFixed(2)} ${(50+Er*fr).toFixed(2)}`)
      }
      return `M${ar.join("L")}Z`
    }
    const PS = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class HS {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.vU = !1, this.mountCompass = rr => {
          var Sr;
          if (null === (Sr = this.stopLayout) || void 0 === Sr || Sr.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !rr || this.vU) return;
          const Qr = rr.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: rr,
            track: Qr,
            label: rr.querySelector(".SkyblockCompassLabel")
          }, Qr.replaceChildren();
          for (let Wr = 0; Wr < 4; Wr++) {
            const rr = document.createElement("span");
            rr.className = "SkyblockCompassCardinal", Qr.appendChild(rr), this.cardinals.push(rr)
          }
          const Zr = (0, vS.b)(PS, [rr], this.layout);
          this.stopLayout = () => {
            Zr(), Qr.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = rr => {
          this.terrain = this.vU ? null : rr, this.render(this.frame)
        }, this.mountMinimapSearchArea = rr => {
          this.mountSearchArea("minimap", rr)
        }, this.mountMapSearchArea = rr => {
          this.mountSearchArea("map", rr)
        }, this.mountPlayer = rr => {
          this.player = this.vU ? null : rr, this.render(this.frame)
        }, this.mountWaypoint = rr => {
          var Sr, Qr;
          if (null === (Sr = this.stopWaypoint) || void 0 === Sr || Sr.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !rr || this.vU) return;
          const Zr = rr.querySelector(".SkyblockQuestWaypointMarker");
          Zr.replaceChildren((0, TS.d)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: rr,
            marker: Zr,
            clip: rr.querySelector(".SkyblockQuestWaypointTextClip"),
            text: rr.querySelector(".SkyblockQuestWaypointText"),
            label: rr.querySelector(".SkyblockQuestWaypointLabel"),
            distance: rr.querySelector(".SkyblockQuestWaypointDistance"),
            hint: rr.querySelector(".SkyblockQuestWaypointHint")
          };
          const Wr = () => {
              this.waypointMarkerSize = {
                width: Zr.offsetWidth,
                height: Zr.offsetHeight
              }, this.waypointInset = {
                x: Zr.offsetWidth / 2 + 8,
                top: Zr.offsetHeight + 8,
                bottom: 8
              }
            },
            ar = new ResizeObserver((() => {
              Wr(), this.render(this.frame)
            }));
          ar.observe(Zr, {
            box: "border-box"
          });
          const jr = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", jr), null === (Qr = window.visualViewport) || void 0 === Qr || Qr.addEventListener("resize", jr), this.stopWaypoint = () => {
            var rr;
            ar.disconnect(), window.removeEventListener("resize", jr), null === (rr = window.visualViewport) || void 0 === rr || rr.removeEventListener("resize", jr)
          }, jr(), Wr(), this.render(this.frame)
        }, this.mountWaypointOrigin = rr => {
          var Sr;
          if (null === (Sr = this.stopWaypointOrigin) || void 0 === Sr || Sr.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = rr && !this.vU ? Number(rr.dataset.notificationToken) : null, rr && !this.vU && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Sr = {
              nameKey: rr.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Sr;
            const Qr = () => {
                const Qr = rr.getBoundingClientRect();
                Sr.x = (Qr.left + Qr.width / 2) / window.innerWidth * 100, Sr.y = (Qr.top + Qr.height / 2) / window.innerHeight * 100
              },
              Zr = new ResizeObserver(Qr);
            Zr.observe(rr.parentElement), Zr.observe(rr), window.addEventListener("resize", Qr), this.stopWaypointOrigin = () => {
              Zr.disconnect(), window.removeEventListener("resize", Qr)
            }, Qr()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const rr = this.compass.root,
            Sr = getComputedStyle(rr),
            Qr = getComputedStyle(document.documentElement),
            Zr = parseFloat(Qr.fontSize),
            Wr = parseFloat(Sr.getPropertyValue("--compass-icon-size")) * Zr,
            ar = "1" === Sr.getPropertyValue("--compass-fit-top").trim(),
            jr = ar ? 1 : 8,
            Ir = Array.from(document.querySelectorAll(PS), (rr => {
              var Sr;
              return (null !== (Sr = rr.querySelector(".MiddleTextTop")) && void 0 !== Sr ? Sr : rr).getBoundingClientRect()
            })).filter((rr => rr.width > 0 && rr.height > 0));
          let fr = (parseFloat(Qr.getPropertyValue("--notchTop")) || 0) + jr,
            Er = "";
          if (ar) {
            const Sr = window.innerWidth / 2,
              Qr = rr.getBoundingClientRect().height,
              ar = [fr, ...Ir.map((rr => Math.max(fr, rr.bottom + jr)))].sort(((rr, Sr) => rr - Sr));
            for (const rr of ar) {
              let ar = Sr - 8;
              for (const Zr of Ir) Zr.bottom + jr <= rr || Zr.top >= rr + Qr + jr || (ar = Math.min(ar, Zr.right <= Sr ? Sr - Zr.right - 8 : Zr.left - Sr - 8));
              const pr = 2 * ar - Wr;
              if (pr >= 16 * Zr) {
                Er = `${pr}px`, fr = rr;
                break
              }
            }
          }
          rr.style.maxWidth !== Er && (rr.style.maxWidth = Er);
          const pr = rr.getBoundingClientRect(),
            xr = this.compassSize.trackHalfWidth;
          if (pr.width > 0) {
            const rr = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: rr.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Wr / rr.width
          }
          if (!Er)
            for (const mr of Ir) mr.right > pr.left - 8 && mr.left < pr.right + 8 && (fr = Math.max(fr, mr.bottom + jr));
          rr.style.top = `${fr}px`, this.compassSize.trackHalfWidth !== xr && this.render(this.frame)
        }
      }
      mountSearchArea(rr, Sr) {
        this.searchAreas[rr] = this.vU ? null : Sr, this.render(this.frame)
      }
      render(rr) {
        if (this.vU) return;
        if (this.frame = rr, this.compass && (qS(this.compass.root, !rr), rr)) {
          const Sr = this.compassSize.trackHalfWidth / 50;
          rr.compass.cardinals.forEach(((rr, Qr) => {
            const Zr = this.cardinals[Qr];
            Zr.textContent !== rr.name && (Zr.textContent = rr.name), qS(Zr, rr.hidden), Zr.style.translate = rr.left * Sr + "px"
          }));
          const Qr = new Set;
          rr.compass.markers.forEach(((Zr, Wr) => {
            var ar;
            Qr.add(Zr.id);
            let jr = this.markers.get(Zr.id);
            jr || (jr = document.createElement("span"), jr.className = "SkyblockCompassMarker", this.markers.set(Zr.id, jr), this.compass.track.appendChild(jr)), jr.dataset.icon !== Zr.icon && (jr.dataset.icon = Zr.icon, jr.replaceChildren((0, TS.d)(Zr.icon))), jr.style.color = null !== (ar = Zr.colour) && void 0 !== ar ? ar : "", jr.style.translate = Zr.left * Sr + "px", jr.style.zIndex = String(rr.compass.markers.length - Wr), jr.title !== Zr.name && (jr.title = Zr.name)
          }));
          for (const [rr, Zr] of this.markers) Qr.has(rr) || (Zr.remove(), this.markers.delete(rr));
          this.compass.label.textContent !== rr.compass.label && (this.compass.label.textContent = rr.compass.label)
        }
        this.terrain && (qS(this.terrain, !(null !== rr && void 0 !== rr && rr.minimap)), null !== rr && void 0 !== rr && rr.minimap && (this.terrain.style.transform = rr.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", rr.minimap.iconRotation)));
        const Sr = null === rr || void 0 === rr ? void 0 : rr.searchArea;
        for (const Qr of [this.searchAreas.minimap, this.searchAreas.map])
          if (Qr && (qS(Qr, !Sr), Sr)) {
            if (this.searchAreaPath.seed !== Sr.shapeSeed && (this.searchAreaPath = {
                seed: Sr.shapeSeed,
                d: XS(lS(Sr.shapeSeed))
              }), Qr.dataset.shapeSeed !== Sr.shapeSeed) {
              Qr.dataset.shapeSeed = Sr.shapeSeed;
              for (const rr of Qr.querySelectorAll("path")) rr.setAttribute("d", this.searchAreaPath.d)
            }
            Qr.style.left = `${Sr.left}%`, Qr.style.top = `${Sr.top}%`, Qr.style.width = `${Sr.width}%`, Qr.style.height = `${Sr.height}%`
          } if (this.player && (qS(this.player, !(null !== rr && void 0 !== rr && rr.player) || rr.player.hidden), null !== rr && void 0 !== rr && rr.player && (this.player.style.left = `${rr.player.left}%`, this.player.style.top = `${rr.player.top}%`, this.player.style.setProperty("--map-player-rotation", rr.player.rotation))), this.waypoint) {
          const {
            root: Sr,
            marker: Qr,
            clip: Zr,
            text: Wr,
            label: ar,
            distance: jr,
            hint: Ir
          } = this.waypoint, fr = !(null !== rr && void 0 !== rr && rr.waypoint) || null !== rr.waypoint.popupToken && rr.waypoint.popupToken !== this.waypointOriginToken;
          qS(Sr, fr);
          let Er = 1;
          const pr = this.waypointLaunch;
          if (!fr && pr && rr.waypoint.nameKey === pr.nameKey) {
            const rr = performance.now();
            pr.startedAt ??= rr, Er = Math.min(1, Math.max(0, (rr - pr.startedAt - 450) / 1e3)), Qr.style.opacity = String(Math.min(1, (rr - pr.startedAt) / 150)), 1 === Er && (this.waypointLaunch = null)
          } else Qr.style.opacity = "", pr && null !== pr.startedAt && (this.waypointLaunch = null);
          if (Sr.classList.toggle("Launching", Er < 1), null !== rr && void 0 !== rr && rr.waypoint) {
            const Sr = this.waypointInset,
              fr = "quest_talk" === rr.waypoint.markerIcon ? function(rr, Sr, Qr) {
                if (!rr.text || null === rr.blockHeight || 0 === rr.nearness) return rr;
                const Zr = rr.blockHeight / 100 * Qr.height,
                  Wr = -rr.nearness * (RS * Zr + Sr.width / 2),
                  ar = rr.nearness * (gS * Zr + Sr.height / 2);
                return {
                  ...rr,
                  text: {
                    x: rr.text.x + Wr / Qr.width * 100,
                    y: rr.text.y + ar / Qr.height * 100
                  }
                }
              }(rr.waypoint, this.waypointMarkerSize, this.viewport) : rr.waypoint,
              xr = (0, BS.e)(fr, Sr, this.viewport),
              mr = Er * Er * (3 - 2 * Er),
              Nr = Er < 1 ? pr.x + (xr.x - pr.x) * mr : xr.x,
              Ur = Er < 1 ? pr.y + (xr.y - pr.y) * mr : xr.y;
            Qr.style.translate = `${Nr}vw ${Ur}vh`, Zr.style.clipPath = `inset(${Sr.top}px ${Sr.x}px ${Sr.bottom}px)`, qS(Wr, Er < 1 || !rr.waypoint.text), Wr.style.opacity = String(1 - rr.waypoint.nearness), rr.waypoint.text && (Wr.style.translate = `${rr.waypoint.text.x}vw ${rr.waypoint.text.y}vh`), ar.textContent !== rr.waypoint.name && (ar.textContent = rr.waypoint.name), this.markerIcon !== rr.waypoint.markerIcon && (this.markerIcon = rr.waypoint.markerIcon, Qr.replaceChildren((0, TS.d)(this.markerIcon))), jr.textContent !== rr.waypoint.distance && (jr.textContent = rr.waypoint.distance), qS(Ir, null === rr.waypoint.hint), null !== rr.waypoint.hint && Ir.textContent !== rr.waypoint.hint && (Ir.textContent = rr.waypoint.hint)
          }
        }
      }
      dispose() {
        var rr, Sr;
        this.mountWaypointOrigin(null), this.render(null), null === (rr = this.stopLayout) || void 0 === rr || rr.call(this), this.stopLayout = null, null === (Sr = this.stopWaypoint) || void 0 === Sr || Sr.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.vU = !0
      }
    }

    function qS(rr, Sr) {
      rr.hidden !== Sr && (rr.hidden = Sr)
    }
    const RS = .55,
      gS = .6;
    var CS = Qr(40054);
    const MS = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class GS {
      constructor(rr, Sr, Qr, Zr) {
        this.map = rr, this.quests = Sr, this.compass = Qr, this.display = new HS, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.vU = !1, this.snapshot = null, this.texts = new Map, this.translate = Zr
      }
      setTranslator(rr, Sr) {
        this.translate = rr, this.locale = Sr, this.metresFormat = new Intl.NumberFormat(Sr), this.texts.clear()
      }
      translateCached(rr, Sr) {
        const Qr = void 0 === Sr ? rr : `${rr} ${Sr}`;
        let Zr = this.texts.get(Qr);
        return void 0 === Zr && (this.texts.size >= 500 && this.texts.clear(), Zr = this.translate(rr, void 0 === Sr ? void 0 : {
          distance: Sr
        }), this.texts.set(Qr, Zr)), Zr
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(rr, Sr, Qr) {
        if (this.vU) return;
        if (!rr) return this.snapshot = null, void this.display.render(null);
        const Zr = this.map.getSnapshot().map,
          ar = Qr.cameraHeading,
          jr = {
            ...this.display.compassSize,
            tanHalfFovX: Qr.tanHalfFovX,
            pitch: Qr.cameraPitch
          },
          Ir = [];
        if (Zr)
          for (const Wr of this.compass.frame(rr, ar, Sr)) {
            const rr = Nr(Wr.offset, jr);
            null !== rr && Ir.push({
              ...Wr,
              left: rr
            })
          }
        const fr = function(rr, Sr) {
            const Qr = [],
              Zr = rr => "quest" === rr.kind ? rr.distance - 1 : rr.distance,
              Wr = [...rr].sort(((rr, Sr) => Zr(rr) - Zr(Sr) || rr.id.localeCompare(Sr.id)));
            for (const ar of Wr) {
              let rr = !1;
              if ("quest" !== ar.kind)
                for (const Zr of Qr)
                  if (Math.abs(Zr.left - ar.left) < Sr) {
                    rr = !0;
                    break
                  } rr || Qr.push(ar)
            }
            return Qr
          }(Ir, this.display.compassSpacing),
          Er = function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Qr = null;
            for (const Zr of rr) Math.abs(Zr.offset) <= Sr && (!Qr || Zr.distance < Qr.distance || Zr.distance === Qr.distance && Math.abs(Zr.offset) < Math.abs(Qr.offset)) && (Qr = Zr);
            return Qr
          }(fr),
          pr = rr => {
            var Sr;
            return null !== (Sr = rr.displayName) && void 0 !== Sr ? Sr : this.translateCached(rr.nameKey)
          },
          mr = {
            compass: {
              markers: fr.map((rr => ({
                id: rr.id,
                icon: rr.icon,
                colour: rr.colour,
                name: pr(rr),
                left: rr.left
              }))),
              cardinals: CS.e.map((rr => {
                let {
                  name: Sr,
                  bearing: Qr
                } = rr;
                const Zr = Nr(xr.b.computeShortestRotation(ar, Qr), jr);
                return {
                  name: Sr,
                  left: null !== Zr && void 0 !== Zr ? Zr : 0,
                  hidden: null === Zr
                }
              })),
              label: Er ? `${pr(Er)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",er(Er.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Zr && void 0 !== Zr && Zr.background) {
          const Sr = rr[0] - Zr.mapOrigin[0],
            Qr = rr[2] - Zr.mapOrigin[2],
            {
              rotation: jr,
              transform: Ir
            } = (0, Wr.d)(Sr, Qr, ar, Zr.background.bounds);
          mr.minimap = {
            transform: Ir,
            iconRotation: -jr + "rad"
          };
          const [fr, Er] = (0, Wr.b)(Sr, Qr, Zr.background.bounds);
          mr.player = {
            left: fr,
            top: Er,
            hidden: fr < 0 || Er < 0 || fr > 100 || Er > 100,
            rotation: -jr + "rad"
          }
        }
        const {
          waypoint: Ur
        } = this.quests.getSnapshot();
        if ("search" === (null === Ur || void 0 === Ur ? void 0 : Ur.questMarkerIcon) && null !== Zr && void 0 !== Zr && Zr.background) {
          const {
            bounds: rr
          } = Zr.background, [Sr, Qr] = (0, Wr.b)(Ur.position[0] - Zr.mapOrigin[0], Ur.position[2] - Zr.mapOrigin[2], rr);
          mr.searchArea = {
            left: Sr,
            top: Qr,
            width: 6400 / (rr.mapMaxX - rr.mapMinX),
            height: 6400 / (rr.mapMaxZ - rr.mapMinZ),
            shapeSeed: Ur.nameKey
          }
        }
        const tr = this.quests.getNotificationSnapshot(),
          hr = "completion" === (null === tr || void 0 === tr ? void 0 : tr.phase) && !yS(tr.kind);
        if (Ur && !hr) {
          const Sr = Math.hypot(...Ur.position.map(((Sr, Qr) => Sr - rr[Qr]))),
            Zr = Math.round(Sr),
            Wr = "talk" === Ur.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Sr) / 5)) : 0,
            ar = Qr.projectWorldPosToViewport(Ur.position),
            jr = ar && Qr.projectWorldPosToViewport([Ur.position[0], Ur.position[1] - 1, Ur.position[2]]);
          mr.waypoint = {
            ...Qr.projectWorldPosToScreenPos(Ur.position),
            text: ar,
            nearness: Wr * Wr * (3 - 2 * Wr),
            blockHeight: ar && jr ? jr.y - ar.y : null,
            name: this.translateCached(Ur.nameKey),
            nameKey: Ur.nameKey,
            markerIcon: Ur.questMarkerIcon ? MS[Ur.questMarkerIcon] : "quest",
            popupToken: (null === tr || void 0 === tr ? void 0 : tr.waypointNameKey) === Ur.nameKey ? tr.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Zr)),
            hint: "search" === Ur.questMarkerIcon && Math.hypot(Ur.position[0] - rr[0], Ur.position[2] - rr[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = mr, this.display.render(mr)
      }
      dispose() {
        this.vU = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const kS = "skyblockSkillsView";
    class AS extends fr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Qr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr => rr,
          Zr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Wr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr => rr;
        super(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Sr, this.translate = Qr, this.locale = Zr, this.itemName = Wr, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = rr => {
          this.selected = rr, this.emit()
        }
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, this.locale = Sr, this.itemName = Qr, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(rr) {
        let Sr = this.skillText.get(rr);
        return Sr || (Sr = {
          label: this.translate(`skyblockGame:${rr}`),
          description: this.translate(`skyblockGame:${rr}Description`)
        }, this.skillText.set(rr, Sr)), Sr
      }
      sources(rr) {
        if ("mining" === rr || "fishing" === rr) return this.buildSources(rr);
        let Sr = this.sourceText.get(rr);
        return Sr || (Sr = this.buildSources(rr), this.sourceText.set(rr, Sr)), Sr
      }
      buildSources(rr) {
        const Sr = this.translate;
        return "exploration" === rr ? [Sr("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Sr("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === rr ? [Sr("skyblockGame:logSource", {
          xp: this.number(xS["Maple Log"])
        })] : "combat" === rr ? [Sr("skyblockGame:creatureKillSource"), Sr("skyblockGame:noEnvironmentalXp")] : "farming" === rr ? [Sr("skyblockGame:cropSource", {
          xp: this.number(US["Wheat|FreshlyGrown"])
        }), Sr("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Sr("skyblockGame:noYoungCropXp")] : Object.entries("mining" === rr ? NS : tS).map((rr => {
          let [Qr, Zr] = rr;
          return Sr("skyblockGame:itemXpSource", {
            item: this.itemName(Qr),
            xp: this.number(Zr)
          })
        }))
      }
      number(rr) {
        return rr.toLocaleString(this.locale)
      }
      benefit(rr, Sr) {
        const Qr = WS(rr, Sr);
        return this.translate(Qr.translationKey, {
          bonus: this.number(Qr.percent)
        })
      }
      vx(rr) {
        if (!this.vU) {
          if ("snapshot" === rr.kind) this.progress = rr.progress, this.pending.clear(), this.recent = null;
          else if ("award" === rr.kind && this.progress) {
            const {
              award: Sr
            } = rr;
            this.progress = {
              ...this.progress,
              [Sr.skill]: Sr.after
            };
            for (const [rr, Zr] of this.pending) Zr.skill === Sr.skill && this.pending.delete(rr);
            const Qr = Sr.after.level > Sr.before.level;
            this.recordGain(Sr.skill, Sr.amount, Qr ? ++this.nextLevelUpToken : null), Qr && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Sr.skill,
              beforeLevel: Sr.before.level,
              level: Sr.after.level
            })
          } else {
            if ("rejectBlock" === rr.kind) return void this.rejectBlock(rr.position);
            if ("open" === rr.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(rr, Sr, Qr) {
        if (!this.progress || this.vU || Qr) return;
        const Zr = function(rr, Sr) {
          const Qr = rr.split("|")[0];
          return "Air" === Sr || Sr === `Barkless ${rr}` ? Object.hasOwn(xS, Qr) ? {
            skill: "foraging",
            amount: xS[Qr]
          } : "Air" !== Sr ? null : Object.hasOwn(NS, rr) ? {
            skill: "mining",
            amount: NS[rr]
          } : fS(rr) ? {
            skill: "farming",
            amount: 10
          } : pS(rr) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(US, rr) ? {
            skill: "farming",
            amount: US[rr]
          } : Object.hasOwn(Cr, rr) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Sr, "Air");
        if (!Zr) return;
        const Wr = rr.join(",");
        if (this.pending.has(Wr)) return;
        const ar = this.predictedProgress(Zr.skill).totalXp + Zr.amount;
        Number.isSafeInteger(ar) && (this.pending.set(Wr, {
          ...Zr,
          expires: this.now() + 2e3
        }), this.recordGain(Zr.skill, 0), this.emit())
      }
      rejectBlock(rr) {
        this.pending.delete(rr.join(",")) && this.emit()
      }
      lx() {
        if (this.vU) return;
        let rr = !1;
        for (const [Sr, Qr] of this.pending) Qr.expires <= this.now() && (this.pending.delete(Sr), rr = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, rr = !0), rr && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(rr, Sr) {
        var Qr, Zr;
        let Wr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ar = (null === (Qr = this.recent) || void 0 === Qr ? void 0 : Qr.skill) === rr && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          jr = (null === (Zr = this.recent) || void 0 === Zr ? void 0 : Zr.skill) === rr && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: rr,
          confirmed: ar + Sr,
          expires: this.now() + 3e3,
          levelUpToken: null !== Wr && void 0 !== Wr ? Wr : jr
        }
      }
      pendingXp(rr) {
        let Sr = 0;
        for (const Qr of this.pending.values()) Qr.skill === rr && (Sr += Qr.amount);
        return Sr
      }
      predictedProgress(rr) {
        const Sr = this.progress[rr],
          Qr = this.pendingXp(rr);
        return Qr ? jS(Sr.totalXp + Qr, rr) : Sr
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var rr, Sr, Qr;
        const Zr = this.progress ? br.map((rr => {
            const Sr = this.predictedProgress(rr);
            return {
              ...this.text(rr),
              icon: hS[rr],
              benefit: this.benefit(rr, Sr.level),
              sources: this.sources(rr),
              id: rr,
              selected: rr === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Sr.level)
              }),
              xp: null === Sr.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Sr.xpIntoLevel),
                target: this.number(Sr.xpForNextLevel)
              }),
              percent: null === Sr.xpForNextLevel ? 100 : Math.min(100, Sr.xpIntoLevel / Sr.xpForNextLevel * 100)
            }
          })) : [],
          Wr = Zr.find((rr => {
            var Sr;
            return rr.id === (null === (Sr = this.recent) || void 0 === Sr ? void 0 : Sr.skill)
          })),
          ar = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Zr,
          detail: null !== (rr = Zr.find((rr => rr.selected))) && void 0 !== rr ? rr : null,
          overallLevel: this.progress ? br.reduce(((rr, Sr) => rr + this.predictedProgress(Sr).level), 0) : null,
          hud: Wr && ar > 0 ? {
            skill: Wr,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(ar)
            }),
            levelUpToken: null !== (Sr = null === (Qr = this.recent) || void 0 === Qr ? void 0 : Qr.levelUpToken) && void 0 !== Sr ? Sr : null,
            colour: YS(Wr.id)
          } : null
        }
      }
    }
    const VS = Math.max(1600, 600, 950) + 400,
      iS = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      wS = "skyblockQuestsView",
      cS = "skyblockQuestNotificationView";
    class FS extends fr {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          jr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(rr, Zr, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Sr, this.translate = Qr, this.now = Wr, this.locale = ar, this.publishNotification = jr, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var rr, Sr;
          this.selected = null !== (rr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.trackedQuestId) && void 0 !== rr ? rr : null, this.show()
        }, this.select = rr => {
          this.selected = rr, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const rr = this.snapshot.detail;
          !this.vU && null !== rr && void 0 !== rr && rr.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(rr.id), this.emit())
        }, this.viewDialogue = () => {
          const rr = this.snapshot.detail;
          var Sr;
          rr && (null === (Sr = this.onViewDialogue) || void 0 === Sr || Sr.call(this, rr.id))
        }, this.notifications = new eS(Wr, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.trackedQuestId) && void 0 !== rr ? rr : null
      }
      notify(rr) {
        !this.vU && this.notifications.enqueue(rr) && this.emitNotification()
      }
      setNotificationsHeld(rr) {
        (this.notifications.setHeld(rr) || rr) && this.emitNotification()
      }
      lx() {
        var rr, Sr;
        if (this.vU) return;
        this.notifications.lx() && this.emitNotification();
        let Qr = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Qr = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Qr = !0);
        const Zr = oS(this.authoritative);
        null !== Zr && void 0 !== Zr && null !== (rr = Zr.questClock) && void 0 !== rr && rr.running && this.clockText(Zr) !== (null === (Sr = this.snapshot.tracked) || void 0 === Sr ? void 0 : Sr.clock) && (Qr = !0), Qr && this.emit()
      }
      setTranslator(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = rr, this.locale = Sr, this.emitNotification(), this.emit()
      }
      vx(rr) {
        if (!this.vU)
          if ("completion" === rr.kind) this.notify(rr.questCompletion);
          else if ("landmark" === rr.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: rr.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === rr.kind) {
          var Sr, Qr, Zr;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: rr.npcNoteTitleKey,
            textKey: rr.npcNoteTextKey,
            params: null !== (Sr = rr.npcNoteParams) && void 0 !== Sr ? Sr : {},
            nameKeys: null !== (Qr = rr.npcNoteNameKeys) && void 0 !== Qr ? Qr : {},
            iconItem: null !== (Zr = rr.npcNoteIconItem) && void 0 !== Zr ? Zr : null
          })
        } else if ("open" === rr.kind) this.show();
        else if ("guidance" === rr.kind) this.waypoint = rr.waypoint, this.compassTarget = rr.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === rr.kind) {
          this.authoritative = rr.snapshot, this.notifications.lx() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Sr = this.trackedStepPulse;
          this.updateTrackedStepPulse(rr.snapshot), this.emit(), this.trackedStepPulse > Sr && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.vU || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var rr;
        return null !== (rr = this.translateWithIcons) && void 0 !== rr ? rr : this.translate
      }
      clockText(rr) {
        const Sr = rr.questClock;
        if (!Sr) return null;
        const Qr = Sr.elapsedMs + (Sr.running ? this.now() - this.receivedAt : 0);
        return void 0 === Sr.countdownFromMs ? Pr(Qr, !1) : Pr(1e3 * Math.ceil(Math.max(0, Sr.countdownFromMs - Qr) / 1e3), !1)
      }
      updateTrackedStepPulse(rr) {
        var Sr, Qr, Zr;
        const Wr = oS(rr);
        if (!Wr) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const ar = rr => Wr.subquests.filter((Sr => rr(Sr.status))).map((rr => rr.id)),
          jr = ar((rr => "completed" === rr || "skipped" === rr)),
          Ir = ar((rr => "locked" !== rr)),
          fr = (null === (Sr = this.trackedSteps) || void 0 === Sr ? void 0 : Sr.questId) === Wr.id && Wr.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (fr) {
          const rr = jr.filter((rr => !fr.finished.has(rr))),
            Sr = ar((rr => "active" === rr || "ready" === rr)).filter((rr => !fr.unlocked.has(rr)));
          rr.length > 0 && this.trackedStepPulse++, (rr.length > 0 || Sr.length > 0) && (this.trackedChange = {
            finished: new Set(rr),
            unlocked: new Set(Sr),
            expiresAt: this.now() + VS
          })
        } else {
          var Er;
          this.trackedStepPulse = (null === (Er = this.trackedSteps) || void 0 === Er ? void 0 : Er.questId) === Wr.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Wr.id,
          progress: Wr.progress,
          finished: new Set([...null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.finished) && void 0 !== Qr ? Qr : [], ...jr]),
          unlocked: new Set([...null !== (Zr = null === fr || void 0 === fr ? void 0 : fr.unlocked) && void 0 !== Zr ? Zr : [], ...Ir])
        }
      }
      entry(rr, Sr) {
        var Qr, Zr;
        const Wr = rr.id === (null === (Qr = this.authoritative) || void 0 === Qr ? void 0 : Qr.trackedQuestId),
          ar = this.now() < this.trackAvailableAt,
          jr = this.questTextTranslator(),
          Ir = rr.subquests.map((Sr => {
            var Qr, Zr, ar, Ir, fr, Er;
            const pr = null !== (Qr = Sr.handInNpcName) && void 0 !== Qr ? Qr : rr.giverName,
              xr = this.translate("skyblockGame:progress", {
                current: Sr.progress.toLocaleString(this.locale),
                target: Sr.target.toLocaleString(this.locale)
              }),
              mr = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: pr ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Sr.status],
              Nr = "active" === Sr.status || "ready" === Sr.status;
            return {
              id: Sr.id,
              name: nS(jr, Sr.nameKey, Sr.nameParams),
              description: nS(jr, Sr.descriptionKey, Sr.descriptionParams),
              progress: xr,
              status: Sr.status,
              statusLabel: mr ? this.translate(mr, {
                npc: pr
              }) : xr,
              iconItem: Nr && null !== (Zr = Sr.questIconItem) && void 0 !== Zr ? Zr : null,
              barPercent: "active" === Sr.status && Sr.showsProgressBar ? Math.min(100, 100 * Sr.progress / Sr.target) : null,
              justFinished: Wr && null !== (ar = null === (Ir = this.trackedChange) || void 0 === Ir ? void 0 : Ir.finished.has(Sr.id)) && void 0 !== ar && ar,
              justUnlocked: Wr && null !== (fr = null === (Er = this.trackedChange) || void 0 === Er ? void 0 : Er.unlocked.has(Sr.id)) && void 0 !== fr && fr
            }
          }));
        return {
          id: rr.id,
          name: nS(jr, rr.nameKey, rr.nameParams),
          description: nS(jr, rr.descriptionKey, rr.descriptionParams),
          progress: Sr ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: rr.progress.toLocaleString(this.locale),
            target: rr.target.toLocaleString(this.locale)
          }),
          completed: Sr,
          tracked: Wr,
          selected: rr.id === this.selected,
          canTrack: !Sr && !Wr && !ar,
          trackLabel: this.translate(Wr ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ar ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== rr.id,
          subquests: Ir,
          focusStep: null !== (Zr = Ir.find((rr => null !== rr.barPercent))) && void 0 !== Zr ? Zr : null,
          clock: this.clockText(rr)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
        const pr = [...null !== (rr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.active) && void 0 !== rr ? rr : [], ...null !== (Qr = null === (Zr = this.authoritative) || void 0 === Zr ? void 0 : Zr.completed) && void 0 !== Qr ? Qr : []];
        var xr, mr, Nr, Ur;
        pr.some((rr => rr.id === this.selected)) || (this.selected = null !== (xr = null !== (mr = null === (Nr = this.authoritative) || void 0 === Nr ? void 0 : Nr.trackedQuestId) && void 0 !== mr ? mr : null === (Ur = pr[0]) || void 0 === Ur ? void 0 : Ur.id) && void 0 !== xr ? xr : null);
        const tr = null !== (Wr = null === (ar = this.authoritative) || void 0 === ar ? void 0 : ar.active.map((rr => this.entry(rr, !1)))) && void 0 !== Wr ? Wr : [];
        tr.sort(((rr, Sr) => Number(Sr.tracked) - Number(rr.tracked)));
        const hr = null !== (jr = null === (Ir = this.authoritative) || void 0 === Ir ? void 0 : Ir.completed.map((rr => this.entry(rr, !0)))) && void 0 !== jr ? jr : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: tr,
          completed: hr,
          completedExpanded: this.completedExpanded,
          detail: null !== (fr = [...tr, ...hr].find((rr => rr.selected))) && void 0 !== fr ? fr : null,
          tracked: null !== (Er = tr.find((rr => rr.tracked))) && void 0 !== Er ? Er : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function oS(rr) {
      var Sr;
      return null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.active.find((Sr => Sr.id === rr.trackedQuestId))) && void 0 !== Sr ? Sr : null
    }
    const bS = "skyblockDungeonsView";
    class JS extends fr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Zr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Sr, this.locale = Qr, this.requestEnter = Zr, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = rr => {
          this.selected = rr, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const rr = this.pickerEntry(),
            Sr = null === rr || void 0 === rr ? void 0 : rr.difficulties[this.pageIndex];
          void 0 !== Sr && null !== Sr.unlockedBoss && (this.close(), this.requestEnter(rr.id, Sr.difficulty))
        }
      }
      setTranslator(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = rr, this.locale = Sr, this.emit()
      }
      vx(rr) {
        var Sr, Qr;
        if (!this.vU) return "open" === rr.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== rr.kind ? "snapshot" === rr.kind && (this.authoritative = rr.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Sr = null === (Qr = this.pickerEntry()) || void 0 === Qr ? void 0 : Qr.difficulties.length) && void 0 !== Sr ? Sr : 1) - 1)), null === rr.snapshot && this.open ? this.close() : this.emit()) : this.choose(rr.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(rr) {
        var Sr;
        const Qr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.dungeons.find((Sr => Sr.id === rr));
        void 0 !== Qr ? this.open && this.pickerDungeonId === rr || (this.pickerDungeonId = rr, this.pageIndex = Math.max(0, Qr.difficulties.findLastIndex((rr => null !== rr.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${rr}`)
      }
      turnTo(rr) {
        var Sr, Qr;
        const Zr = null !== (Sr = null === (Qr = this.pickerEntry()) || void 0 === Qr ? void 0 : Qr.difficulties.length) && void 0 !== Sr ? Sr : 0;
        rr < 0 || rr >= Zr || rr === this.pageIndex || (this.pageIndex = rr, this.emit())
      }
      pickerEntry() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.dungeons.find((rr => rr.id === this.pickerDungeonId))) && void 0 !== rr ? rr : null
      }
      difficulty(rr) {
        const Sr = rr.completions > 0,
          Qr = null === rr.bestMs ? null : Pr(rr.bestMs);
        return {
          difficulty: rr.difficulty,
          label: this.translate(lr[rr.difficulty]),
          colour: Xr[rr.difficulty],
          beaten: Sr,
          bestTime: Qr,
          completions: rr.completions,
          summary: Sr ? [null === Qr ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Qr
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: rr.completions.toLocaleString(this.locale)
          })].filter((rr => null !== rr)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(rr) {
        const Sr = rr.difficulties.map((rr => this.difficulty(rr))),
          Qr = Sr.filter((rr => rr.beaten)).length;
        return {
          id: rr.id,
          name: this.translate(rr.nameKey),
          selected: rr.id === this.selected,
          beatenSummary: `${Qr} / ${Sr.length}`,
          difficulties: Sr
        }
      }
      picker() {
        const rr = this.pickerEntry();
        if (null === rr || 0 === rr.difficulties.length) return null;
        const Sr = rr.difficulties.map(((Sr, Qr) => {
          var Zr, Wr, ar, jr;
          const Ir = Sr.unlockedBoss,
            fr = null === Ir ? this.lockedHint(rr, Qr) : null;
          return {
            ...this.difficulty(Sr),
            unlocked: null !== Ir,
            bossName: null === Ir ? null : this.translate(Ir.bossNameKey),
            bossMobType: null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.bossMobType) && void 0 !== Zr ? Zr : null,
            bossMobVariation: null !== (Wr = null === Ir || void 0 === Ir ? void 0 : Ir.bossMobVariation) && void 0 !== Wr ? Wr : null,
            lockedHint: null !== (ar = null === fr || void 0 === fr ? void 0 : fr.text) && void 0 !== ar ? ar : null,
            lockedHintHighlight: null !== (jr = null === fr || void 0 === fr ? void 0 : fr.highlight) && void 0 !== jr ? jr : null,
            current: Qr === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(rr.nameKey),
          pages: Sr,
          page: Sr[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Sr.length - 1
        }
      }
      lockedHint(rr, Sr) {
        var Qr, Zr, Wr;
        if (0 === Sr && "number" === typeof rr.combatLevelLock) {
          const Sr = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: rr.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Sr,
            colour: YS("combat"),
            icon: hS.combat
          })
        }
        const ar = null !== (Qr = null === (Zr = this.authoritative) || void 0 === Zr ? void 0 : Zr.dungeons) && void 0 !== Qr ? Qr : [],
          jr = Sr > 0 ? rr : null !== (Wr = ar[ar.indexOf(rr) - 1]) && void 0 !== Wr ? Wr : null,
          Ir = Sr > 0 ? rr.difficulties[Sr - 1] : null === jr || void 0 === jr ? void 0 : jr.difficulties[0];
        if (null === jr || void 0 === Ir) return null;
        const fr = this.translate(jr.nameKey);
        if (null === Ir.unlockedBoss) return jr === rr ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Ir.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: fr
        }, Ir.difficulty);
        const Er = this.translate(Ir.unlockedBoss.bossNameKey);
        return jr === rr ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Er
        }, Ir.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Er,
            dungeon: fr
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(rr, Sr, Qr) {
        return this.hintHighlighting(rr, Sr, "difficulty", {
          name: this.translate(lr[Qr]),
          colour: Xr[Qr],
          icon: null
        })
      }
      hintHighlighting(rr, Sr, Qr, Zr) {
        let {
          name: Wr,
          colour: ar,
          icon: jr
        } = Zr;
        const Ir = this.translate(rr, {
          ...Sr,
          [Qr]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(rr, {
            ...Sr,
            [Qr]: Wr
          }),
          highlight: 2 === Ir.length ? {
            before: Ir[0],
            name: Wr,
            after: Ir[1],
            colour: ar,
            icon: jr
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var rr, Sr, Qr;
        const Zr = null !== (rr = null === (Sr = this.authoritative) || void 0 === Sr ? void 0 : Sr.dungeons) && void 0 !== rr ? rr : [];
        var Wr, ar;
        Zr.some((rr => rr.id === this.selected)) || (this.selected = null !== (Wr = null === (ar = Zr[0]) || void 0 === ar ? void 0 : ar.id) && void 0 !== Wr ? Wr : null);
        const jr = Zr.map((rr => this.entry(rr)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: jr,
          detail: null !== (Qr = jr.find((rr => rr.selected))) && void 0 !== Qr ? Qr : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const DS = ["mining", "farming", "foraging", "fishing", "combat"],
      dS = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      sS = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function uS() {
      for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
      return Sr.map(((rr, Sr) => ({
        amount: rr,
        coins: dS[Sr],
        xp: sS[Sr]
      })))
    }
    const rQ = uS(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      SQ = uS(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      QQ = uS(50, 100, 250, 500, 1e3, 2500, 5e3),
      ZQ = uS(25, 50, 100, 250, 500, 1e3),
      WQ = uS(10, 25, 50, 100, 250, 500, 1e3),
      aQ = uS(1, 5, 10, 25, 50);

    function jQ(rr, Sr) {
      return {
        id: rr,
        category: "fishing",
        item: Sr,
        drops: [Sr],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ
      }
    }
    const IQ = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: SQ
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: QQ
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: QQ
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: ZQ
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: ZQ
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: SQ
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: rQ
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: rQ
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: rQ
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: QQ
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: SQ
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: SQ
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: SQ
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: QQ
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: QQ
      }, jQ("wheatfish", "Wheatfish"), jQ("darter", "Darter"), jQ("sunset_minnow", "Sunset Minnow"), jQ("root_flounder", "Root Flounder"), jQ("greenfin_loach", "Greenfin Loach"), jQ("red_strongfish", "Red Strongfish"), jQ("green_strongfish", "Green Strongfish"), jQ("boomerang_fish", "Boomerang Fish"), jQ("seahorse", "Seahorse"), jQ("spined_stickleback", "Spined Stickleback"), jQ("moon_strongfish", "Moon Strongfish"), jQ("boulder_bass", "Boulder Bass"), jQ("grass_snapper", "Grass Snapper"), jQ("crystal_wheatfish", "Crystalized Wheatfish", aQ), jQ("moonstone_pupfish", "Moonstone Pupfish", aQ), jQ("reedglass_minnow", "Reedglass Minnow"), jQ("mangrove_herring", "Mangrove Herring"), jQ("mudline_perch", "Mudline Perch"), jQ("coastal_mullet", "Coastal Mullet"), jQ("reef_sardine", "Reef Sardine"), jQ("root_perch", "Root Perch"), jQ("driftwood_catfish", "Driftwood Catfish"), jQ("aether_minnow", "Aether Minnow"), jQ("needlefish", "Tri-Pointed Needlefish"), jQ("threadfin_bream", "Threadfin Bream"), jQ("mudbelly_tilapia", "Mudbelly Tilapia"), jQ("rotslab_eel", "Rotslab Eel"), jQ("polarflash_electron", "Polarflash Electron"), jQ("mireback_carp", "Mireback Carp"), jQ("blackwater_bream", "Blackwater Bream"), jQ("stone_grouper", "Stone Grouper"), jQ("shadeback_ray", "Shadeback Ray"), jQ("glacial_silverfish", "Glacial Silverfish"), jQ("hatchetfish", "Hatchetfish"), jQ("moonlit_boomerang", "Moonlit Boomerang Fish"), jQ("murkborne_ray", "Murkborne Ray"), jQ("bamboo_catfish", "Bamboo Catfish"), jQ("mossback_arapaima", "Mossback Arapaima"), jQ("murk_stingray", "Murk Stingray"), jQ("channel_sawfish", "Channel Sawfish"), jQ("boned_sturgeon", "Boned Sturgeon"), jQ("oarfish", "Oarfish"), jQ("snakehead", "Snakehead", aQ), jQ("eldertide_leviathan", "Eldertide Leviathan", aQ), jQ("pithead", "Pithead"), jQ("electric_eel", "Electric Eel"), jQ("shadow_darter", "Shadow Darter"), jQ("abyss_carp", "Abyss Carp"), jQ("nomai_moray", "Nomai Moray"), jQ("silver_dragonfish", "Silver Dragonfish"), jQ("giant_moray", "Giant Moray"), jQ("coelacanth", "Coelacanth", aQ), jQ("frost_herring", "Frost Herring"), jQ("permafrost_halibut", "Permafrost Halibut"), jQ("glacial_lanternfish", "Glacial Lanternfish"), jQ("frozen_grenadier", "Frozen Grenadier"), jQ("blackfin_icefish", "Blackfin Icefish"), jQ("moonfish", "Moonfish"), jQ("alpha_strongfish", "Alpha Moon Strongfish"), jQ("deep_lanternfish", "Deepwater Lanternfish", aQ), jQ("pearlescent_moonfish", "Pearlescent Moonfish", aQ), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: SQ
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: ZQ
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: ZQ
      }],
      fQ = (new Map(IQ.map((rr => [rr.id, rr]))), new Map),
      EQ = new Map;
    for (const LI of IQ) {
      for (const [rr, Sr] of Object.entries(null !== (pQ = LI.blocks) && void 0 !== pQ ? pQ : {})) {
        var pQ;
        fQ.set(rr, {
          collection: LI,
          amount: Sr
        })
      }
      for (const rr of null !== (xQ = LI.drops) && void 0 !== xQ ? xQ : []) {
        var xQ;
        EQ.set(rr, LI)
      }
    }

    function mQ(rr, Sr) {
      let Qr = 0;
      for (; Qr < rr.tiers.length && Sr >= rr.tiers[Qr].amount;) Qr++;
      return Qr
    }
    const NQ = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function UQ(rr) {
      return NQ[rr - 1]
    }
    const tQ = "skyblockCollectionsView";
    class hQ extends fr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Zr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr => rr;
        super(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Sr, this.locale = Qr, this.itemName = Zr, this.counts = null, this.category = "mining", this.selected = IQ[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = rr => {
          this.category = rr, this.selected = this.inCategory(rr)[0].id, this.emit()
        }, this.select = rr => {
          this.selected = rr, this.emit()
        }
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, this.locale = Sr, this.itemName = Qr, this.emit()
      }
      vx(rr) {
        if (!this.vU)
          if ("collOpen" !== rr.kind) {
            (rr.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Sr, Qr] of rr.collCounts) this.counts.set(Sr, Qr);
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
        var rr;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Sr = this.inCategory(this.category).map((rr => this.collectionView(rr))),
          Qr = IQ.reduce(((rr, Sr) => rr + this.tierOf(Sr)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: DS.map((rr => this.categoryView(rr))),
          collections: Sr,
          detail: null !== (rr = Sr.find((rr => rr.selected))) && void 0 !== rr ? rr : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Qr)
          })
        }
      }
      categoryView(rr) {
        const Sr = this.inCategory(rr),
          Qr = Sr.reduce(((rr, Sr) => rr + this.tierOf(Sr)), 0),
          Zr = Sr.reduce(((rr, Sr) => rr + Sr.tiers.length), 0);
        return {
          id: rr,
          label: this.translate(`skyblockGame:${rr}`),
          icon: hS[rr],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Qr),
            target: this.number(Zr)
          }),
          selected: rr === this.category
        }
      }
      collectionView(rr) {
        var Sr, Qr;
        const Zr = null !== (Sr = this.counts.get(rr.id)) && void 0 !== Sr ? Sr : 0,
          Wr = mQ(rr, Zr),
          ar = null !== (Qr = rr.tiers[Wr]) && void 0 !== Qr ? Qr : null,
          jr = 0 === Wr ? 0 : rr.tiers[Wr - 1].amount;
        return {
          id: rr.id,
          name: this.itemName(rr.item),
          icon: rr.item,
          selected: rr.id === this.selected,
          locked: 0 === Zr,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Zr)
          }),
          tier: 0 === Wr ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Wr),
          percent: null === ar ? 100 : Math.min(100, (Zr - jr) / (ar.amount - jr) * 100),
          progress: null === ar ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Zr),
            target: this.number(ar.amount)
          }),
          nextReward: null === ar ? null : this.reward(rr, ar.coins, ar.xp)
        }
      }
      reward(rr, Sr, Qr) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Sr),
          xp: this.number(Qr),
          skill: this.translate(`skyblockGame:${rr.category}`)
        })
      }
      tierLabel(rr) {
        return this.translate("skyblockGame:collectionTier", {
          tier: UQ(rr)
        })
      }
      tierOf(rr) {
        var Sr;
        return mQ(rr, null !== (Sr = this.counts.get(rr.id)) && void 0 !== Sr ? Sr : 0)
      }
      inCategory(rr) {
        return IQ.filter((Sr => Sr.category === rr))
      }
      number(rr) {
        return rr.toLocaleString(this.locale)
      }
    }
    const zQ = "skyblockPortalTransitView",
      YQ = "skyblockPortalArrival";
    class nQ {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Jp = rr, this.storage = Sr, this.now = Qr, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      vx(rr) {
        const Sr = {
          zoneNameKey: rr.transitZoneNameKey,
          variation: rr.transitZoneVariation,
          colour: rr.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(YQ, Sr), this.show("departure", Sr.zoneNameKey, Sr.colour, rr.transitDurationMs, rr.transitDurationMs + 1500, (() => {
          this.storage.removeItem(YQ)
        }))
      }
      resumeArrival(rr) {
        const Sr = this.storage.getItem(YQ);
        this.storage.removeItem(YQ), null === Sr || Sr.variation !== rr || this.now() - Sr.departedAt > 3e4 || this.show("arrival", Sr.zoneNameKey, Sr.colour, 3200, 2e4)
      }
      finishArrival(rr) {
        var Sr;
        "arrival" === (null === (Sr = this.view) || void 0 === Sr ? void 0 : Sr.phase) && this.view.token === rr && (this.clearTimer(), this.view = null, this.Jp(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(rr, Sr, Qr, Zr, Wr, ar) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: rr,
          zoneNameKey: Sr,
          colour: Qr,
          durationMs: Zr
        }, this.Jp(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Jp(null), null === ar || void 0 === ar || ar()
        }), Wr)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const eQ = "skyblockDailyRewardView",
      KQ = "skyblockDailyRewardCoin";
    class yQ {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Jp = rr, this.isBusy = Sr, this.holdQuestPopups = Qr, this.onHeldCoinsChanged = Zr, this.onCoinLanded = Wr, this.onStarted = ar, this.onFinished = jr, this.onItemLanded = Ir, this.now = fr, this.wI = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.playing) || void 0 === Sr ? void 0 : Sr.view) && void 0 !== rr ? rr : null
      }
      getHeldCoins() {
        var rr, Sr;
        let Qr = 0;
        for (const Zr of this.wI) Qr += Zr.coins;
        return Qr - (null !== (rr = null === (Sr = this.playing) || void 0 === Sr ? void 0 : Sr.released) && void 0 !== rr ? rr : 0)
      }
      vx(rr) {
        "dailyRewardClaimed" !== rr.kind ? (this.queue.push(rr), this.lx()) : this.wI.push({
          coins: rr.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      lx() {
        const rr = this.now();
        if (null === this.playing) return this.releaseUnshown(rr), void this.startNext(rr);
        const Sr = this.playing,
          Qr = rr - Sr.startedAt,
          Zr = Sr.view.flyingCoins,
          Wr = function(rr, Sr) {
            let Qr = 0;
            for (; Qr < Sr && TQ(Qr, Sr) <= rr;) Qr++;
            return Qr
          }(Qr, Zr);
        if (Wr !== Sr.landed) {
          for (let rr = Wr - Sr.landed > 2 ? Wr - 1 : Sr.landed; rr < Wr; rr++) this.onCoinLanded(rr, Zr);
          Sr.landed = Wr, Sr.released = Math.round(Sr.view.coins * Wr / Zr), this.onHeldCoinsChanged()
        }
        for (; Sr.itemsLanded < Sr.view.items.length && 2e3 + 160 * Sr.itemsLanded + 630 <= Qr;) this.onItemLanded(Sr.itemsLanded), Sr.itemsLanded++;
        Qr >= Sr.view.durationMs && (this.finish(), this.startNext(rr))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.wI = [], this.Jp(null)
      }
      startNext(rr) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Sr = this.queue.shift();
        this.token++;
        const Qr = {
          token: this.token,
          day: Sr.dailyRewardDay,
          coins: Sr.dailyRewardCoins,
          items: Sr.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Sr.dailyRewardDay === vr ? 24 : 14
        };
        this.playing = {
          view: Qr,
          startedAt: rr,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Jp(Qr), this.onStarted(Qr)
      }
      finish() {
        this.wI.shift(), this.playing = null, this.holdQuestPopups(!1), this.Jp(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(rr) {
        if (this.queue.length > 0 || 0 === this.wI.length) return;
        const Sr = this.wI.length;
        this.wI = this.wI.filter((Sr => rr - Sr.receivedAt < 6e4)), this.wI.length !== Sr && this.onHeldCoinsChanged()
      }
    }

    function BQ(rr, Sr) {
      return 450 + 715 * rr / (Sr - 1)
    }

    function TQ(rr, Sr) {
      return BQ(rr, Sr) + 650
    }
    const vQ = "skyblockMailboxView";
    class OQ {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Jp = rr, this.isBusy = Sr, this.onStarted = Qr, this.now = Zr, this.waiting = [], this.playing = null, this.token = 0, this.itemName = rr => rr
      }
      getSnapshot() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.playing) || void 0 === Sr ? void 0 : Sr.view) && void 0 !== rr ? rr : null
      }
      setItemName(rr) {
        this.itemName = rr
      }
      vx(rr) {
        this.waiting.push(...rr.mailLetters), this.lx()
      }
      lx() {
        const rr = this.now();
        null !== this.playing && rr - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Jp(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(rr)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Jp(null)
      }
      start(rr) {
        const Sr = this.waiting.slice(0, 3);
        this.token++;
        const Qr = {
          token: this.token,
          letters: Sr.map((rr => this.toView(rr))),
          more: this.waiting.length - Sr.length,
          durationMs: 4500 + 700 * Sr.length
        };
        this.waiting = [], this.playing = {
          view: Qr,
          startedAt: rr
        }, this.Jp(Qr), this.onStarted(Qr)
      }
      toView(rr) {
        return {
          coins: rr.mailCoins,
          items: rr.mailItems.map((rr => {
            var Sr;
            return {
              itemName: rr.mailItemName,
              amount: rr.mailItemAmount,
              label: null !== (Sr = rr.mailItemLabel) && void 0 !== Sr ? Sr : this.itemName(rr.mailItemName)
            }
          })),
          reasonKey: rr.mailReasonKey,
          reasonParams: rr.mailReasonParams
        }
      }
    }
    const LQ = "skyblockQuestGraphView",
      lQ = "skyblockDevQuestJump";

    function XQ(rr) {
      if (0 === rr.length) return "";
      const Sr = [`M ${rr[0].x} ${rr[0].y}`];
      for (let Zr = 1; Zr < rr.length - 1; Zr++) {
        const Qr = rr[Zr + 1];
        Sr.push(`Q ${rr[Zr].x} ${rr[Zr].y} ${(rr[Zr].x+Qr.x)/2} ${(rr[Zr].y+Qr.y)/2}`)
      }
      const Qr = rr[rr.length - 1];
      return Sr.push(`L ${Qr.x} ${Qr.y}`), Sr.join(" ")
    }

    function PQ(rr, Sr) {
      return rr < Sr ? `${rr}|${Sr}` : `${Sr}|${rr}`
    }
    class HQ extends fr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(rr, Qr, Zr), this.translate = Sr, this.requestJump = Wr, this.requestArrive = ar, this.storage = jr, this.now = Ir, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = rr => {
          rr !== this.hoveredId && (this.hoveredId = rr, this.emit())
        }, this.jump = rr => {
          this.close(), this.requestJump(rr)
        }
      }
      vx(rr) {
        if (!this.vU)
          if ("graph" !== rr.kind) {
            if ("jumping" === rr.kind) {
              const Sr = {
                questId: rr.graphQuestId,
                variation: rr.graphVariation,
                completes: rr.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(lQ, Sr)
            }
          } else {
            const Sr = ++this.graphCount;
            Qr.e(141).then((() => Qr(7381))).then((Qr => {
              let {
                default: Zr
              } = Qr;
              this.vU || Sr !== this.graphCount || (this.layout = function(rr, Sr, Qr) {
                var Zr, Wr;
                const ar = new rr.graphlib.Graph;
                ar.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), ar.setDefaultEdgeLabel((() => ({})));
                const jr = new Set;
                for (const pr of Sr) jr.add(pr.graphQuestId), ar.setNode(pr.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Ir = Qr.filter((rr => jr.has(rr.graphFromId) && jr.has(rr.graphToId) && rr.graphFromId !== rr.graphToId)),
                  fr = new Map;
                for (const pr of [...Ir].sort(((rr, Sr) => Number("awaits" === rr.graphEdgeKind) - Number("awaits" === Sr.graphEdgeKind)))) {
                  const rr = PQ(pr.graphFromId, pr.graphToId);
                  fr.has(rr) || (fr.set(rr, pr), ar.setEdge(pr.graphFromId, pr.graphToId))
                }
                rr.layout(ar);
                const Er = ar.graph();
                return {
                  width: Math.ceil(null !== (Zr = Er.width) && void 0 !== Zr ? Zr : 0),
                  height: Math.ceil(null !== (Wr = Er.height) && void 0 !== Wr ? Wr : 0),
                  nodes: Sr.map((rr => {
                    var Sr, Qr;
                    const Zr = ar.node(rr.graphQuestId);
                    return {
                      node: rr,
                      left: (null !== (Sr = Zr.x) && void 0 !== Sr ? Sr : 0) - 95,
                      top: (null !== (Qr = Zr.y) && void 0 !== Qr ? Qr : 0) - 26
                    }
                  })),
                  edges: Ir.map((rr => {
                    var Sr;
                    const Qr = fr.get(PQ(rr.graphFromId, rr.graphToId)),
                      Zr = null !== (Sr = ar.edge(Qr.graphFromId, Qr.graphToId).points) && void 0 !== Sr ? Sr : [];
                    return {
                      edge: rr,
                      key: `${rr.graphFromId}|${rr.graphToId}|${rr.graphEdgeKind}`,
                      path: XQ(Qr.graphFromId === rr.graphFromId ? Zr : [...Zr].reverse())
                    }
                  })),
                  plans: new Map(Sr.map((rr => [rr.graphQuestId, new Set([rr.graphQuestId, ...rr.graphPlanIds])])))
                }
              }(Zr, rr.graphNodes, rr.graphEdges), this.show())
            })).catch((rr => {
              console.error("The quest graph could not be laid out", rr)
            }))
          }
      }
      resumeJump(rr) {
        const Sr = this.storage.getItem(lQ);
        this.storage.removeItem(lQ), null === Sr || Sr.variation !== rr || this.now() - Sr.departedAt > 6e4 || this.requestArrive(Sr.questId, Sr.completes)
      }
      setTranslator(rr) {
        this.translate = rr, this.emit()
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
        var rr, Sr;
        return null !== (rr = null === this.hoveredId || null === (Sr = this.layout) || void 0 === Sr ? void 0 : Sr.plans.get(this.hoveredId)) && void 0 !== rr ? rr : new Set
      }
      buildSnapshot() {
        const rr = this.layout;
        if (null === rr) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Sr = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: rr.width,
          height: rr.height,
          nodes: rr.nodes.map((rr => {
            let {
              node: Qr,
              left: Zr,
              top: Wr
            } = rr;
            return {
              id: Qr.graphQuestId,
              name: this.translate(Qr.graphNameKey),
              detail: null === Qr.graphGiverName ? Qr.graphZoneId : `${Qr.graphGiverName} \xb7 ${Qr.graphZoneId}`,
              state: Qr.graphState,
              left: Zr,
              top: Wr,
              inPlan: Sr.has(Qr.graphQuestId),
              hovered: Qr.graphQuestId === this.hoveredId
            }
          })),
          edges: rr.edges.map((rr => {
            let {
              edge: Qr,
              key: Zr,
              path: Wr
            } = rr;
            return {
              key: Zr,
              kind: Qr.graphEdgeKind,
              path: Wr,
              inPlan: Sr.has(Qr.graphFromId) && Sr.has(Qr.graphToId)
            }
          })),
          planning: Sr.size > 0
        }
      }
    }
    var qQ = Qr(38532);
    const RQ = 250,
      gQ = 2150,
      CQ = -2.8,
      MQ = 2.2,
      GQ = -27,
      kQ = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      AQ = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      VQ = Math.round(50 + 1e3 * (AQ.delay + AQ.period / 2)),
      iQ = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      wQ = Array.from({
        length: 26
      }, ((rr, Sr) => {
        const Qr = 2.39996 * Sr,
          Zr = .5 + .618034 * Sr % 1 * .23,
          Wr = Sr % 3 !== 2;
        return {
          rune: Wr ? iQ[7 * Sr % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Qr)*Zr).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Qr)*Zr).toFixed(3)})`,
            "--spin": 40 * (Sr % 5 - 2) + "deg",
            "--size": (Wr ? 1 + Sr % 4 * .2 : .3 + Sr % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Sr%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Sr%3).toFixed(2)}s`
          }
        }
      }));

    function cQ(rr, Sr) {
      return Array.from({
        length: 30 + 3 * rr + (Sr ? 10 : 0)
      }, ((rr, Sr) => {
        const Qr = Sr < 4,
          Zr = Qr ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Wr = Qr ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          ar = Qr ? 2.2 : .6 + Math.random(),
          jr = Qr ? .3 : Math.random() < .5 ? .16 : .24,
          Ir = Qr ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Zr,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Wr.toFixed(2)}rem`,
          "--length": `${ar.toFixed(2)}rem`,
          "--width": `${jr}rem`,
          "--duration": `${Math.round(Ir)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function FQ(rr) {
      let {
        zeta: Sr,
        period: Qr
      } = rr;
      const Zr = 2 * Math.PI / Qr;
      return {
        w: Zr,
        decay: Sr * Zr / Math.sqrt(1 - Sr * Sr)
      }
    }
    let oQ = !1;

    function bQ() {
      if (oQ) return;
      oQ = !0;
      const rr = document.createElement("style");
      rr.textContent = function() {
        const rr = FQ(kQ),
          Sr = FQ(AQ),
          Qr = Sr => Math.exp(-rr.decay * Sr) * Math.sin(rr.w * Sr),
          Zr = Qr(Math.atan(rr.w / rr.decay) / rr.w),
          Wr = .25,
          ar = 2.15,
          jr = Math.round(215),
          Ir = [];
        for (let fr = 0; fr <= jr; fr++) {
          const rr = fr / jr * ar;
          let Er = Math.sin(Math.min(rr, Wr) / Wr * Math.PI / 2) ** 2,
            pr = 0,
            xr = 1,
            mr = 1 - .2 * Er,
            Nr = 1;
          if (rr >= Wr) {
            const jr = rr - Wr,
              Ir = Math.max(0, jr - .05);
            Er = Math.exp(-Ir / .05), pr = Qr(Ir + kQ.lead * (1 - Math.exp(-Ir / kQ.rush))) / Zr;
            const fr = Ir - AQ.delay,
              Ur = fr <= 0 ? 0 : 1 - Math.exp(-Sr.decay * fr) * (Math.cos(Sr.w * fr) + Sr.decay / Sr.w * Math.sin(Sr.w * fr)),
              tr = Math.max(0, (rr - 1.77) / (ar - 1.77));
            xr = (1 + (AQ.to - 1) * Ur) * (1 + .08 * tr), mr = 1.1 + 1.5 * Math.exp(-jr / .07) + .3 * Math.exp(-(((1e3 * jr - VQ) / 100) ** 2)) + .8 * tr, Nr = 1 - tr ** 1.5
          }
          const Ur = .15 * Er + CQ * pr,
            tr = -.1 * Er + MQ * pr,
            hr = 3 * Er + GQ * pr;
          Ir.push(`${(fr/jr*100).toFixed(3)}% { opacity: ${Nr.toFixed(3)}; transform: translate(${Ur.toFixed(3)}rem, ${tr.toFixed(3)}rem) rotate(${hr.toFixed(2)}deg) scale(${xr.toFixed(3)}); filter: brightness(${mr.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Ir.join(" ")} }`
      }(), document.head.append(rr)
    }
    const JQ = "skyblockForgeView",
      DQ = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class dQ extends fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        super(rr, Qr, Zr), this.translate = Sr, this.requestForge = Wr, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (rr, Sr) => {
          var Qr, Zr;
          null !== this.forging || (null !== (Qr = this.owned[(0, qQ.p)(Sr, rr)]) && void 0 !== Qr ? Qr : 0) <= 0 || (this.selected[rr] = this.selected[rr] === Sr ? null : Sr, this.status = null, null === (Zr = this.onPartSelected) || void 0 === Zr || Zr.call(this), this.emit())
        }, this.forge = rr => {
          var Sr, Qr;
          const Zr = this.selectedParts();
          if (null === Zr || this.isPending() || !this.open) return;
          const Wr = (0, qQ.o)(Zr);
          if (null === Wr || Wr.coalCost > this.coal) return;
          const ar = this.preview(Wr),
            jr = null !== (Sr = null === (Qr = this.onForgeStarted) || void 0 === Qr ? void 0 : Qr.call(this, ar.tier, ar.named, rr)) && void 0 !== Sr ? Sr : () => {};
          if (this.dropArrival(), rr) {
            const rr = {
              id: ++this.forgeId,
              preview: ar,
              timers: [],
              stopSounds: jr,
              landed: !1,
              reply: null
            };
            rr.timers.push(setTimeout((() => {
              rr.landed = !0, null !== rr.reply && (this.apply(rr.reply), rr.reply = null, this.emit())
            }), RQ), setTimeout((() => {
              this.finishForge(rr)
            }), gQ)), this.forging = rr
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Zr)
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        var Sr;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === rr.forgeMessageKind) return this.dropForge(), this.apply(rr), this.status = null, this.show(), void(null === (Sr = this.onOpened) || void 0 === Sr || Sr.call(this));
        const Qr = this.forging;
        if (null !== Qr && null !== rr.forgeRefusalKey) this.dropForge();
        else if (null !== Qr && !Qr.landed) return void(Qr.reply = rr);
        this.apply(rr), this.emit()
      }
      apply(rr) {
        if (this.owned = rr.forgeOwnedParts, this.coal = rr.forgeCoalOwned, this.keepSelectionOwned("open" === rr.forgeMessageKind), null !== rr.forgeForgedSwordId) {
          var Sr;
          const Qr = (0, qQ.o)(rr.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.displayName) && void 0 !== Sr ? Sr : ""
            }
          }
        } else null !== rr.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: rr.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(rr) {
        this.translate = rr, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(rr) {
        var Sr;
        this.forging = null;
        const Qr = this.selectedParts(),
          Zr = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: rr.id,
          sameSword: null !== Qr && (null === (Sr = (0, qQ.o)(Qr)) || void 0 === Sr ? void 0 : Sr.displayName) === rr.preview.name,
          timer: Zr
        }, this.emit()
      }
      dropForge() {
        const rr = this.forging;
        if (null !== rr) {
          this.forging = null;
          for (const Sr of rr.timers) clearTimeout(Sr);
          rr.stopSounds(), null !== rr.reply && this.apply(rr.reply)
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
        var rr, Sr, Qr;
        const Zr = this.selectedParts(),
          Wr = null === Zr ? null : (0, qQ.o)(Zr),
          ar = null !== (rr = null === (Sr = this.forging) || void 0 === Sr ? void 0 : Sr.preview) && void 0 !== rr ? rr : null === Wr ? null : this.preview(Wr);
        return {
          enabled: this.received,
          open: this.open,
          slots: qQ.n.map((rr => ({
            kind: rr,
            label: this.translate(DQ[rr]),
            parts: this.partsFor(rr)
          }))),
          coalOwned: this.coal,
          preview: ar,
          unformedSword: qQ.j[null !== (Qr = this.selected.Blade) && void 0 !== Qr ? Qr : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((rr => rr > 0)),
          canForge: null !== ar && !ar.coalShort && !this.isPending(),
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
      preview(rr) {
        return {
          name: rr.displayName,
          lore: rr.lore,
          baseSword: rr.baseSword,
          enchantmentTier: rr.enchantmentTier,
          tier: Number(rr.enchantmentTier.slice(-1)),
          named: rr.named,
          stats: this.stats(rr),
          effects: rr.effects,
          coalCost: rr.coalCost,
          coalShort: null === this.forging && rr.coalCost > this.coal
        }
      }
      partsFor(rr) {
        const Sr = [];
        for (const Zr of qQ.f) {
          var Qr;
          const Wr = (0, qQ.p)(Zr, rr),
            ar = null !== (Qr = this.owned[Wr]) && void 0 !== Qr ? Qr : 0;
          ar > 0 && Sr.push({
            material: Zr,
            itemName: Wr,
            owned: ar,
            selected: this.selected[rr] === Zr,
            placeholder: !1
          })
        }
        if (0 === Sr.length) {
          const Qr = qQ.f[0];
          Sr.push({
            material: Qr,
            itemName: (0, qQ.p)(Qr, rr),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Sr
      }
      stats(rr) {
        const Sr = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${rr.powerMultiplier.toFixed(2)}`,
          better: rr.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${rr.damageMultiplier.toFixed(2)}`,
          better: rr.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/rr.cooldownMultiplier).toFixed(2)}`,
          better: rr.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${rr.knockbackMultiplier.toFixed(2)}`,
          better: rr.knockbackMultiplier > 1
        }];
        return rr.reachBonus > 0 && Sr.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${rr.reachBonus.toFixed(1)}`,
          better: !0
        }), rr.damageReduction > 0 && Sr.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*rr.damageReduction)}%`,
          better: !0
        }), Sr
      }
      selectedParts() {
        const {
          Blade: rr,
          Guard: Sr,
          Handle: Qr
        } = this.selected;
        return null === rr || null === Sr || null === Qr ? null : {
          blade: rr,
          guard: Sr,
          handle: Qr
        }
      }
      keepSelectionOwned(rr) {
        for (const Qr of qQ.n) {
          var Sr;
          const Zr = this.selected[Qr];
          if (null !== Zr && (null !== (Sr = this.owned[(0, qQ.p)(Zr, Qr)]) && void 0 !== Sr ? Sr : 0) > 0) continue;
          if (!rr) {
            this.selected[Qr] = null;
            continue
          }
          const Wr = [...qQ.f].reverse().find((rr => {
            var Sr;
            return (null !== (Sr = this.owned[(0, qQ.p)(rr, Qr)]) && void 0 !== Sr ? Sr : 0) > 0
          }));
          this.selected[Qr] = null !== Wr && void 0 !== Wr ? Wr : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const sQ = "skyblockSmugglerView",
      uQ = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class rZ extends fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        super(rr, Qr, Zr), this.translate = Sr, this.requestBuy = Wr, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = rr => rr, this.onBought = null, this.buy = rr => {
          const Sr = this.deals[rr];
          void 0 !== Sr && !this.isPending() && this.open && !this.soldOut.has(rr) && this.canAfford(Sr) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, rr))
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        if (this.received = !0, this.day = rr.smugglerDay, this.deals = rr.smugglerDeals, this.rivets = rr.smugglerRivetsOwned, this.crests = rr.smugglerCrestsOwned, this.soldOut = new Set(rr.smugglerSoldOutSlots), this.rotatesAtMs = Date.now() + rr.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === rr.smugglerMessageKind) return this.status = null, this.boughtSlot = null, void this.show();
        if (this.boughtSlot = rr.smugglerBoughtSlot, null !== rr.smugglerBoughtSlot) {
          var Sr, Qr;
          const Zr = this.deals[rr.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Zr ? "" : this.dealName(Zr),
              amount: String(null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.smugglerDealAmount) && void 0 !== Sr ? Sr : 0)
            }
          }, this.boughtCount++, null === (Qr = this.onBought) || void 0 === Qr || Qr.call(this)
        } else null !== rr.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: rr.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, void 0 !== Qr && (this.itemName = Qr), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.boughtCount = 0
      }
      dealName(rr) {
        if (null !== rr.smugglerDealUniqueName) return rr.smugglerDealUniqueName;
        const Sr = uQ[rr.smugglerDealItem];
        return void 0 === Sr ? this.itemName(rr.smugglerDealItem) : this.translate(Sr)
      }
      canAfford(rr) {
        return rr.smugglerDealRivets <= this.rivets && rr.smugglerDealCrests <= this.crests
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
          deals: this.deals.map(((rr, Sr) => ({
            slot: Sr,
            itemName: rr.smugglerDealItem,
            displayName: this.dealName(rr),
            enchantmentTier: rr.smugglerDealEnchantmentTier,
            amount: rr.smugglerDealAmount,
            rivets: rr.smugglerDealRivets,
            crests: rr.smugglerDealCrests,
            soldOut: this.soldOut.has(Sr),
            justBought: this.boughtSlot === Sr
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
    const SZ = "skyblockPassageView",
      QZ = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function ZZ(rr, Sr) {
      return rr(QZ[Sr])
    }

    function WZ(rr, Sr, Qr, Zr) {
      const Wr = Math.ceil((Qr - Zr) / 864e5),
        ar = ZZ(rr, Sr);
      return Wr > 1 ? rr("skyblockGame:passageNextDays", {
        phase: ar,
        days: String(Wr)
      }) : rr("skyblockGame:passageNextSoon", {
        phase: ar
      })
    }
    class aZ extends fr {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(rr, Qr, Zr), this.translate = Sr, this.now = Wr, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = rr => rr, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        this.message = rr, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, void 0 !== Qr && (this.itemName = Qr), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(rr) {
        return {
          itemName: rr.passageFish,
          displayName: this.itemName(rr.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(rr.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const rr = this.message;
        return null === rr ? {
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
          phase: rr.passagePhase,
          phaseName: ZZ(this.translate, rr.passagePhase),
          visitors: rr.passageVisitors.map((rr => this.describe(rr))),
          resting: this.describe(rr.passageResting),
          nextPhase: rr.passageNextPhase,
          next: WZ(this.translate, rr.passageNextPhase, rr.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var jZ = Qr(40092);
    const IZ = "skyblockKeepersChairView";
    class fZ extends fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new jZ.c;
        super(rr, Qr, Zr), this.translate = Sr, this.requestAim = Wr, this.now = ar, this.pacer = jr, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = rr => rr, this.aim = rr => {
          !this.awaitingReply && this.open && this.atChair && rr !== this.favoured && (null === rr || this.islands.some((Sr => Sr.keepersChairIslandId === rr && Sr.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== rr && void 0 !== rr ? rr : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = jr.subscribe((() => {
          this.emit()
        }))
      }
      vx(rr) {
        var Sr, Qr;
        this.received = !0;
        const Zr = this.favoured,
          Wr = this.atChair;
        var ar;
        return this.islands = rr.keepersChairIslands, this.favoured = rr.keepersChairFavoured, this.passage = null !== (Sr = rr.keepersChairPassage) && void 0 !== Sr ? Sr : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Qr = rr.keepersChairAtChair) || void 0 === Qr || Qr, "place" === rr.keepersChairMessageKind ? (!Wr && this.atChair && "refused" === (null === (ar = this.status) || void 0 === ar ? void 0 : ar.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === rr.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== rr.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: rr.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Zr && (this.status = null === this.favoured ? {
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
      receivePassage(rr) {
        this.received && (this.passage = rr, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, void 0 !== Qr && (this.itemName = Qr), this.emit()
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
      islandName(rr) {
        const Sr = this.islands.find((Sr => Sr.keepersChairIslandId === rr));
        return void 0 === Sr ? rr : this.translate(Sr.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const rr = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Sr = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((rr => {
            const Sr = rr.keepersChairFeaturedFish;
            return {
              id: rr.keepersChairIslandId,
              name: this.translate(rr.keepersChairIslandNameKey),
              relit: rr.keepersChairIslandRelit,
              featuredFish: null === Sr ? null : {
                itemName: Sr,
                displayName: this.itemName(Sr)
              },
              favoured: rr.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === rr ? null : {
            tone: rr.tone,
            text: this.translate(rr.key, null === rr.island ? void 0 : {
              island: this.islandName(rr.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Sr ? null : {
            phase: Sr.keepersChairPassagePhase,
            phaseName: ZZ(this.translate, Sr.keepersChairPassagePhase),
            nextPhase: Sr.keepersChairPassageNextPhase,
            next: WZ(this.translate, Sr.keepersChairPassageNextPhase, Sr.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const EZ = "skyblockReachLogView",
      pZ = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      xZ = "Caught Fish",
      mZ = [1, 2, 4];

    function NZ(rr, Sr) {
      return rr.map((rr => ({
        ...rr,
        reachLogPageFish: rr.reachLogPageFish.map((rr => ({
          ...rr,
          reachLogFishFresh: Sr(rr)
        })))
      })))
    }
    class UZ extends fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new jZ.c;
        super(rr, Qr, Zr), this.translate = Sr, this.requestOpen = Wr, this.pacer = ar, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = rr => rr, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = rr => {
          this.pages.some((Sr => Sr.reachLogIslandId === rr)) && (this.selected = rr, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ar.subscribe((() => {
          this.emit()
        }))
      }
      vx(rr) {
        if (this.received = !0, "status" === rr.reachLogMessageKind) return !0 === rr.reachLogNews && this.markNews(), this.serverFresh = rr.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Sr = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== rr.reachLogMessageKind)
          if (this.pageViews = null, this.pages = NZ(rr.reachLogPages, (rr => rr.reachLogFishFresh || this.heldFresh.has(rr.reachLogFishItem))), this.letGoShown = rr.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Sr) this.showPages();
          else {
            for (const rr of this.pages)
              for (const Sr of rr.reachLogPageFish) Sr.reachLogFishFresh && this.heldFresh.add(Sr.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, this.pageViews = null, void 0 !== Qr && (this.itemName = Qr), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = NZ(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var rr, Sr, Qr, Zr;
        const Wr = this.pages.find((rr => rr.reachLogPageFish.some((rr => rr.reachLogFishFresh))));
        if (void 0 !== Wr) return Wr.reachLogIslandId;
        if (null !== this.selected && this.pages.some((rr => rr.reachLogIslandId === this.selected))) return this.selected;
        return null !== (rr = null !== (Sr = null === (Qr = this.pages.filter((rr => rr.reachLogIslandAwake)).at(-1)) || void 0 === Qr ? void 0 : Qr.reachLogIslandId) && void 0 !== Sr ? Sr : null === (Zr = this.pages[0]) || void 0 === Zr ? void 0 : Zr.reachLogIslandId) && void 0 !== rr ? rr : null
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
        return this.pages.map((rr => {
          var Sr;
          return {
            id: rr.reachLogIslandId,
            name: this.translate(rr.reachLogIslandNameKey),
            awake: rr.reachLogIslandAwake,
            gold: rr.reachLogPageGold,
            caught: rr.reachLogPageFish.filter((rr => rr.reachLogFishCaught && !rr.reachLogFishVisitor)).length,
            total: rr.reachLogPageFish.filter((rr => !rr.reachLogFishVisitor)).length,
            fish: rr.reachLogPageFish.map((rr => {
              const Sr = rr.reachLogFishBestKg;
              return {
                itemName: rr.reachLogFishItem,
                name: rr.reachLogFishCaught ? this.itemName(rr.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: rr.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / rr.reachLogFishChance))
                }),
                best: rr.reachLogFishCaught ? null === Sr ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Sr.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: rr.reachLogFishMarks,
                ribbons: mZ.map((Sr => 0 !== (rr.reachLogFishRibbons & Sr))),
                glimmer: 0 !== (8 & rr.reachLogFishRibbons),
                halo: 0 !== (32 & rr.reachLogFishRibbons),
                fresh: rr.reachLogFishFresh,
                visitor: rr.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Sr = rr.reachLogPageReturner) && void 0 !== Sr ? Sr : null)
          }
        }))
      }
      buildReturner(rr) {
        return null === rr ? null : {
          itemName: rr.reachLogReturnerFishItem,
          line: this.translate(rr.reachLogReturnerLineKey, {
            name: this.translate(rr.reachLogReturnerNameKey),
            trinket: this.translate(rr.reachLogReturnerTrinketKey)
          }),
          back: rr.reachLogReturnerBack
        }
      }
      receivePassagePhase(rr) {
        null !== this.passagePhase && this.passagePhase !== rr && (this.pagesCurrent = !1), this.passagePhase = rr
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const tZ = "skyblockLampLightView";
    class hZ {
      constructor(rr, Sr, Qr, Zr) {
        this.Jp = rr, this.translate = Sr, this.requestCommand = Qr, this.pacer = Zr, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.vU = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = rr => {
          rr ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = rr => {
          this.send(`buy ${rr}`)
        }, this.socket = rr => {
          this.send(`socket ${null!==rr&&void 0!==rr?rr:qr}`)
        }, this.wearTint = rr => {
          this.send(`tint ${null!==rr&&void 0!==rr?rr:qr}`)
        }, this.setSituation = rr => {
          this.situation = rr, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Zr.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Zr.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      vx(rr) {
        if (this.message = rr, null !== rr.lampLightShop && (this.shop = rr.lampLightShop), "open" === rr.lampLightKind && (this.refusalKey = null), "reply" === rr.lampLightKind) {
          var Sr;
          const Wr = null !== (Sr = rr.lampLightReplyTag) && void 0 !== Sr ? Sr : null,
            ar = null !== Wr && Wr === this.offTag;
          var Qr, Zr;
          if (ar ? this.settleOff() : null !== Wr && Wr !== this.awaitingTag || this.settleReply(), this.refusalKey = rr.lampLightRefusalKey, null !== rr.lampLightBought && !ar) this.sparkle = {
            id: rr.lampLightBought,
            count: (null !== (Qr = null === (Zr = this.sparkle) || void 0 === Zr ? void 0 : Zr.count) && void 0 !== Qr ? Qr : 0) + 1
          }
        }
        rr.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === rr.lampLightKind && (this.lastGained = rr.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(rr) {
        rr !== this.atChair && (this.atChair = rr, rr && (this.refusalKey = null), this.emit())
      }
      setTranslator(rr, Sr) {
        this.translate = rr, this.locale = null !== Sr && void 0 !== Sr ? Sr : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.vU = !0
      }
      send(rr) {
        var Sr;
        if (null !== this.awaitingTag || "ready" !== (null === (Sr = this.message) || void 0 === Sr ? void 0 : Sr.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Qr = this.nextTag();
        this.awaitingTag = Qr, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${rr} ${Qr}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const rr = this.nextTag();
        this.offTag = rr, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${rr}`)
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
        this.vU || (this.snapshot = this.buildSnapshot(), this.Jp(this.snapshot))
      }
      formatLight(rr) {
        return Math.floor(rr).toLocaleString(this.locale)
      }
      formatPercent(rr) {
        const Sr = 100 * rr;
        return Sr >= 10 ? Math.round(Sr).toLocaleString(this.locale) : Sr.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(rr, Sr) {
        if ("bite" === rr) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Sr.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === rr) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Sr.lampLightRareChance)
        });
        if ("notice" === rr) return null === Sr.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Sr.lampLightNoticeChance)
        });
        const Qr = "meter" === rr ? Sr.lampLightMeterCatches : Sr.lampLightBloomCatches;
        return null === Qr ? null : this.translate("meter" === rr ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Qr))
        })
      }
      oddsLines(rr, Sr) {
        const Qr = (rr, Sr) => {
            var Qr;
            return null !== (Qr = {
              bite: Sr.lampLightBiteMs,
              rare: Sr.lampLightRareChance,
              meter: Sr.lampLightMeterCatches,
              bloom: Sr.lampLightBloomCatches,
              notice: Sr.lampLightNoticeChance
            } [rr]) && void 0 !== Qr ? Qr : 0
          },
          Zr = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Wr = [];
        for (const ar of ["bite", "rare", "meter", "bloom", "notice"]) {
          const jr = this.formatOdds(ar, rr),
            Ir = this.formatOdds(ar, Sr);
          if (null === jr || null === Ir || "bite" !== ar && "rare" !== ar && jr === Ir) continue;
          const fr = Qr(ar, Sr) - Qr(ar, rr),
            Er = Zr[ar] ? fr < 0 : fr > 0;
          Wr.push({
            label: ar,
            before: jr,
            after: Ir,
            tone: jr === Ir ? "same" : Er ? "better" : "worse"
          })
        }
        return Wr
      }
      charmView(rr, Sr, Qr) {
        const Zr = rr.lampLightCharmId.charAt(0).toUpperCase() + rr.lampLightCharmId.slice(1),
          Wr = "bloom" === this.situation;
        return {
          id: rr.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Zr}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Zr}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(rr.lampLightCharmCost)
          }),
          owned: rr.lampLightCharmOwned,
          affordable: Qr >= rr.lampLightCharmCost,
          socketed: Sr.lampLightSocketed === rr.lampLightCharmId,
          lines: this.oddsLines(Wr ? Sr.lampLightBareBloom : Sr.lampLightBareOpen, Wr ? rr.lampLightCharmBloom : rr.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var rr, Sr, Qr, Zr;
        const Wr = this.message,
          ar = "ready" === (null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) ? this.shop : null,
          jr = null !== (rr = null === Wr || void 0 === Wr ? void 0 : Wr.lampLightBalance) && void 0 !== rr ? rr : 0,
          Ir = this.atChair,
          fr = "loading" === (null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Er = "ready" !== (null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) || Ir ? null !== (Sr = this.refusalKey) && void 0 !== Sr ? Sr : fr : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Wr && "locked" !== Wr.lampLightStatus,
          status: null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) && void 0 !== Qr ? Qr : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(jr)
          }),
          releasing: null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.lampLightReleasing) && void 0 !== Zr && Zr,
          gained: null === Wr || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Wr || void 0 === Wr ? void 0 : Wr.lampLightStatus) && Ir && !this.isPending(),
          situation: this.situation,
          shop: null === ar ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: ar.lampLightOddsRod,
              island: this.translate(ar.lampLightIslandNameKey)
            }),
            heldRod: null !== ar.lampLightHeldRod,
            charms: ar.lampLightCharms.map((rr => this.charmView(rr, ar, jr))),
            tints: ar.lampLightTints.map((rr => {
              const Sr = rr.lampLightTintId,
                [Qr, Zr, Wr] = rr.lampLightTintColour;
              return {
                id: Sr,
                name: this.translate(`skyblockGame:lampLightTint${Sr.charAt(0).toUpperCase()}${Sr.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(rr.lampLightTintCost)
                }),
                owned: rr.lampLightTintOwned,
                affordable: jr >= rr.lampLightTintCost,
                wearing: ar.lampLightTint === Sr,
                colour: `rgb(${Qr}, ${Zr}, ${Wr})`
              }
            })),
            wearingIslandColours: null === ar.lampLightTint
          },
          notice: null === Er ? null : this.translate(Er),
          sparkle: this.sparkle
        }
      }
    }
    const zZ = "skyblockMagmawardView";
    class YZ {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Jp = rr, this.now = Sr, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Ar.map((() => 0)), this.wornAt = Ar.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      vx(rr) {
        var Sr, Qr;
        const Zr = Ar.map(((Sr, Qr) => !0 === rr.magmawardPiecesWorn[Qr]));
        if (!Zr.includes(!0)) return this.snapshot = null, void this.Jp(null);
        const Wr = this.now(),
          ar = this.snapshot;
        null === ar && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const jr = rr.magmawardFuelCarried,
          Ir = !Zr.includes(!1);
        let fr = null !== (Sr = null === ar || void 0 === ar ? void 0 : ar.pulse) && void 0 !== Sr ? Sr : null,
          Er = null !== (Qr = null === ar || void 0 === ar ? void 0 : ar.flare) && void 0 !== Qr ? Qr : null;
        rr.magmawardFuelBurned ? (fr = "burn", Er = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Wr, this.flareAt = Wr) : null !== ar && jr > ar.fuel && (fr = "gain", this.pulseToken++, this.pulseAt = Wr), Ir && null !== ar && !ar.fullSet && (Er = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Wr, this.setLitAt = Wr);
        const pr = Ar.map(((rr, Sr) => (Zr[Sr] && null !== ar && !ar.pieces[Sr].worn && (this.wornTokens[Sr]++, this.wornAt[Sr] = Wr), {
          itemName: rr,
          worn: Zr[Sr],
          wornToken: this.wornTokens[Sr],
          justWorn: Zr[Sr] && this.isPlaying(this.wornAt[Sr], Wr)
        })));
        this.snapshot = {
          pieces: pr,
          wornCount: Zr.filter(Boolean).length,
          fullSet: Ir,
          fuel: jr,
          fuelState: jr <= 0 ? "empty" : jr <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Wr) ? fr : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Wr) ? Er : null,
          flareToken: this.flareToken,
          setLit: Ir && this.isPlaying(this.setLitAt, Wr),
          setLitToken: this.setLitToken
        }, this.Jp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Jp(null)
      }
      isPlaying(rr, Sr) {
        return Sr - rr < 1200
      }
    }
    const nZ = "skyblockGlowtideView";
    class eZ {
      constructor(rr) {
        this.Jp = rr, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = rr => {
          this.arrow = rr, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      vx(rr) {
        this.bloom = rr.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Jp(null))
      }
      afterRender(rr, Sr) {
        const Qr = this.bloom;
        if (null === Qr || null === rr) return;
        const Zr = Qr.glowtideBloomX - rr[0],
          Wr = Qr.glowtideBloomZ - rr[2],
          ar = Math.hypot(Zr, Wr),
          jr = this.snapshot,
          Ir = null !== jr && void 0 !== jr && jr.inRange ? 1 : 0,
          fr = ar <= 12.5 + Ir && rr[1] - Qr.glowtideBloomY <= 10 + Ir;
        !fr || null !== jr && void 0 !== jr && jr.inRange || this.inRangeToken++;
        const Er = {
          colour: Qr.glowtideBloomColour,
          inRange: fr,
          distance: Math.round(ar),
          inRangeToken: this.inRangeToken
        };
        (null === jr || Er.colour !== jr.colour || Er.inRange !== jr.inRange || !fr && Er.distance !== jr.distance) && (this.snapshot = Er, this.Jp(Er));
        const pr = xr.b.computeShortestRotation(Sr, (0, xr.ub)([Zr, 0, Wr]));
        null === this.arrow || Math.abs(pr - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${pr}rad)`, this.arrowTurn = pr)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Jp(null)
      }
    }
    const KZ = "skyblockGlowMeterView";
    class yZ {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Jp = rr, this.now = Sr, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      vx(rr) {
        const Sr = this.now(),
          {
            glowMeterFill: Qr,
            glowMeterCapacity: Zr
          } = rr,
          Wr = Qr >= Zr,
          ar = this.snapshot;
        null !== ar && (Wr && !ar.full && (this.fullToken++, this.fullAt = Sr), ar.full && !Wr ? (this.burstToken++, this.burstAt = Sr) : Qr > ar.fill && (this.gainToken++, this.gainAt = Sr)), this.snapshot = {
          fill: Qr,
          sx: Zr,
          ratio: Math.min(1, Math.max(0, Qr / Zr)),
          full: Wr,
          rares: rr.glowMeterRares,
          ready: Wr && this.isPlaying(this.fullAt, Sr),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Sr),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Sr),
          gainToken: this.gainToken
        }, this.Jp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Jp(null)
      }
      isPlaying(rr, Sr) {
        return Sr - rr < 2e3
      }
    }
    const BZ = "skyblockHushWaitView";
    class TZ {
      constructor(rr) {
        this.Jp = rr, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      vx(rr) {
        let {
          hushWaitMs: Sr,
          hushWaitTotalMs: Qr,
          hushWaitLines: Zr
        } = rr;
        if (this.clearTimers(), this.token++, 0 === Zr.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Sr <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Zr[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Wr = Math.max(null !== Qr && void 0 !== Qr ? Qr : Sr, Sr),
          ar = Wr - Sr,
          jr = rr => Wr * rr / Zr.length,
          Ir = rr => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Wr,
              elapsedMs: ar,
              line: Zr[rr],
              lineIndex: rr
            })
          };
        let fr = 0;
        for (; fr + 1 < Zr.length && jr(fr + 1) <= ar;) fr++;
        Ir(fr);
        for (let Er = fr + 1; Er < Zr.length; Er++) this.later(jr(Er) - ar, (() => {
          Ir(Er)
        }));
        this.later(Sr, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(rr) {
        this.snapshot = rr, this.Jp(rr)
      }
      later(rr, Sr) {
        this.timers.push(setTimeout(Sr, rr))
      }
      clearTimers() {
        for (const rr of this.timers) clearTimeout(rr);
        this.timers = []
      }
    }
    const vZ = "skyblockTideChartsView",
      OZ = 36e5,
      LZ = 864e5;

    function lZ(rr, Sr, Qr) {
      const [Zr, Wr, ar, jr] = rr.tideChartArea, Ir = Math.floor(Sr), fr = Math.floor(Qr);
      return Ir >= Zr && Ir <= ar && fr >= Wr && fr <= jr
    }

    function XZ(rr, Sr, Qr) {
      const [Zr, Wr, ar, jr] = rr.tideChartWater;
      return function(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = 4 - Vr(Math.floor(Wr) - (rr - Qr), Qr);
        return 5 * Vr(Math.floor(ar) - (Sr - Zr), Zr) + jr
      }(Zr, Wr, ar, jr, Sr, Qr)
    }

    function PZ(rr, Sr, Qr) {
      const Zr = rr.tideCharts;
      for (let Wr = 0; Wr < Zr.length; Wr++)
        if (lZ(Zr[Wr], Sr, Qr)) return Zr[Wr];
      return null
    }

    function HZ(rr, Sr, Qr) {
      const Zr = Math.max(0, Sr - Qr);
      return Zr > LZ ? rr("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Zr / LZ))
      }) : Zr > OZ ? rr("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Zr / OZ))
      }) : rr("skyblockGame:tideChartsTurnSoon")
    }
    class qZ extends fr {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(rr, Qr, Zr), this.translate = Sr, this.now = Wr, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.eN = rr => {
          this.picked = rr, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        const Sr = this.message;
        if (null !== Sr)
          for (const Zr of rr.tideCharts) {
            var Qr;
            const rr = Sr.tideCharts.find((rr => rr.tideChartIsland === Zr.tideChartIsland)),
              Wr = Zr.tideChartLit & ~(null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.tideChartLit) && void 0 !== Qr ? Qr : 0);
            void 0 !== rr && 0 !== Wr && (this.pulse = {
              island: Zr.tideChartIsland,
              cells: Wr,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = rr, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(rr, Sr) {
        var Qr;
        const Zr = null === this.message || Number.isNaN(rr) ? null : PZ(this.message, rr, Sr),
          Wr = null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.tideChartIsland) && void 0 !== Qr ? Qr : null,
          ar = null === Zr ? -1 : function(rr, Sr, Qr) {
            const [Zr, Wr, ar, jr] = rr.tideChartWater;
            return function(rr, Sr, Qr, Zr, Wr, ar, jr) {
              return ((Wr - rr) / (Qr + jr)) ** 2 + ((ar - Sr) / (Zr + jr)) ** 2 <= 1
            }(Zr, Wr, ar, jr, Sr, Qr, 2) ? XZ(rr, Sr, Qr) : -1
          }(Zr, rr, Sr);
        return (Wr !== this.hereIsland || ar !== this.hereCell) && (this.hereIsland = Wr, this.hereCell = ar, null !== Wr && (this.lastIsland = Wr), !0)
      }
      afterRender(rr) {
        if (null === this.message) return;
        this.lastX = null === rr ? Number.NaN : rr[0], this.lastZ = null === rr ? Number.NaN : rr[2];
        const Sr = this.locate(this.lastX, this.lastZ),
          Qr = this.expirePulses();
        (Sr || Qr || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const rr = this.now();
        return !(!this.open || rr - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = rr, HZ(this.translate, this.message.tideChartTurnsInMs, rr - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(rr, Sr) {
        const Qr = null === this.message ? null : PZ(this.message, rr, Sr);
        if (null === Qr) return;
        const Zr = XZ(Qr, rr, Sr);
        0 === (Qr.tideChartPreBlank & 1 << Zr) && (this.cast = {
          island: Qr.tideChartIsland,
          cell: Zr,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const rr = this.now();
        let Sr = !1;
        return 0 !== this.pulse.cells && rr - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Sr = !0), null !== this.cast && rr - this.cast.atMs >= 1500 && (this.cast = null, Sr = !0), Sr
      }
      setTranslator(rr) {
        this.translate = rr, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(rr, Sr) {
        var Qr;
        return null !== (Qr = rr.tideCharts.find((rr => rr.tideChartIsland === Sr))) && void 0 !== Qr ? Qr : null
      }
      describe(rr) {
        var Sr, Qr, Zr;
        const Wr = rr.tideChartIsland,
          ar = [];
        for (let Nr = 0; Nr < 25; Nr++) {
          const Sr = 1 << Nr;
          0 !== (rr.tideChartLit & Sr) ? ar.push("lit") : 0 !== (rr.tideChartClear & Sr) ? ar.push("clear") : 0 !== (rr.tideChartPreBlank & Sr) ? ar.push("shore") : ar.push("water")
        }
        const jr = function(rr) {
            let Sr = 0;
            for (let Qr = rr >>> 0; 0 !== Qr; Qr &= Qr - 1) Sr++;
            return Sr
          }(rr.tideChartLit),
          Ir = rr.tideChartInkCount,
          fr = this.translate(rr.tideChartIslandNameKey),
          Er = this.translate("skyblockGame:tideChartsLit", {
            lit: String(jr),
            ink: String(Ir)
          }),
          pr = null === rr.tideChartPictureNameKey ? null : this.translate(rr.tideChartPictureNameKey),
          xr = this.hereIsland === Wr && -1 !== this.hereCell ? this.hereCell : null,
          mr = [`${fr}: ${Er}.`];
        if (null !== pr && mr.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: pr
          })), null !== xr) {
          const rr = Math.floor(xr / 5) + 1,
            Sr = xr % 5 + 1;
          mr.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(rr),
            column: String(Sr)
          }))
        }
        return {
          island: Wr,
          islandName: fr,
          cells: ar,
          hereCell: xr,
          lit: jr,
          ink: Ir,
          litText: Er,
          pictureName: pr,
          gridLabel: mr.join(" "),
          pulseCells: this.pulse.island === Wr ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Sr = this.cast) || void 0 === Sr ? void 0 : Sr.island) === Wr ? this.cast.cell : null,
          castToken: null !== (Qr = null === (Zr = this.cast) || void 0 === Zr ? void 0 : Zr.token) && void 0 !== Qr ? Qr : 0
        }
      }
      buildSnapshot() {
        var rr, Sr, Qr;
        const Zr = this.message;
        if (null === Zr || 0 === Zr.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Wr = this.findChart(Zr, this.hereIsland),
          ar = null !== (rr = null !== (Sr = null !== (Qr = this.findChart(Zr, this.open ? this.picked : null)) && void 0 !== Qr ? Qr : Wr) && void 0 !== Sr ? Sr : this.findChart(Zr, this.lastIsland)) && void 0 !== rr ? rr : Zr.tideCharts[0],
          jr = null === Wr ? null : this.describe(Wr);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: jr,
          card: ar === Wr ? jr : this.describe(ar),
          turnsText: HZ(this.translate, Zr.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Zr.tideChartBookCount)
          }),
          tabs: Zr.tideCharts.map((rr => ({
            island: rr.tideChartIsland,
            name: this.translate(rr.tideChartIslandNameKey),
            selected: rr.tideChartIsland === ar.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const RZ = "skyblockRegularsView",
      gZ = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      CZ = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function MZ(rr, Sr) {
      return "given" === rr ? Sr.given : "owed" === rr ? Sr.owed : Sr.goal
    }
    class GZ extends fr {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Qr, Zr), this.translate = Sr, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = rr => rr, this.openIsland = rr => {
          this.selected = rr, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = rr => {
          this.selected = rr, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        this.message = rr, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const rr = this.openedFromReachLog;
        return this.openedFromReachLog = !1, rr
      }
      setTranslator(rr, Sr, Qr) {
        this.translate = rr, void 0 !== Qr && (this.itemName = Qr), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(rr, Sr, Qr) {
        return {
          text: this.translate(MZ(rr, Sr), Qr),
          given: "given" === rr
        }
      }
      describeRegular(rr, Sr) {
        const Qr = this.translate,
          Zr = null !== rr.regularKg,
          Wr = rr.regularMeetings,
          ar = Zr ? 0 === Wr ? Qr("skyblockGame:regularsNotMet") : 1 === Wr ? Qr("skyblockGame:regularsMeetingsOne") : Qr("skyblockGame:regularsMeetings", {
            count: Wr
          }) : "";
        return {
          id: rr.regularId,
          name: Qr(rr.regularNameKey),
          line: Qr(rr.regularLineKey),
          itemName: rr.regularFishItem,
          fishName: this.itemName(rr.regularFishItem),
          tagged: Zr,
          size: null === rr.regularKg ? Qr("skyblockGame:regularsNotTagged") : Qr("skyblockGame:regularsSize", {
            kg: rr.regularKg.toFixed(1)
          }),
          meetings: ar,
          chance: Qr("skyblockGame:regularsChance", {
            count: rr.regularOneInCasts
          }),
          resting: rr.regularRestingToday,
          gifts: [{
            text: Qr("skyblockGame:regularsGiftFlare"),
            given: Wr >= 3
          }, this.describeGift(rr.regularTintGift, gZ, {
            tint: Qr(rr.regularTintNameKey)
          })],
          history: [...rr.regularHistory].reverse().map((rr => {
            const Zr = rr.regularMeetingKg.toFixed(1),
              Wr = Sr - rr.regularMeetingDay;
            return Wr <= 0 ? Qr("skyblockGame:regularsToday", {
              kg: Zr
            }) : Qr("skyblockGame:regularsDaysAgo", {
              days: Wr,
              kg: Zr
            })
          }))
        }
      }
      describeIsland(rr, Sr) {
        return {
          id: rr.regularsIslandId,
          name: this.translate(rr.regularsIslandNameKey),
          charm: this.describeGift(rr.regularsCharmGift, CZ, {
            charm: this.translate(rr.regularsCharmNameKey)
          }),
          regulars: rr.regularsList.map((rr => this.describeRegular(rr, Sr)))
        }
      }
      buildSnapshot() {
        var rr, Sr, Qr, Zr;
        const Wr = this.message;
        if (null === Wr) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const ar = Wr.regularsIslands.map((rr => this.describeIsland(rr, Wr.regularsToday))),
          jr = null !== (rr = null !== (Sr = null === (Qr = ar.find((rr => rr.id === this.selected))) || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Sr ? Sr : null === (Zr = ar[0]) || void 0 === Zr ? void 0 : Zr.id) && void 0 !== rr ? rr : "";
        return {
          enabled: !0,
          open: this.open,
          selected: jr,
          islands: ar
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const kZ = "skyblockHiddenWatersView";
    class AZ {
      constructor(rr) {
        this.Jp = rr, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      vx(rr) {
        this.snapshot = function(rr) {
          const [Sr, Qr] = rr.hiddenWatersMapSize, Zr = (rr, Zr) => ({
            left: 1 - rr / Sr,
            top: Zr / Qr
          }), Wr = new Map;
          for (const [jr, Ir] of rr.hiddenWatersGlimpses) {
            var ar;
            const rr = null !== (ar = Wr.get(jr)) && void 0 !== ar ? ar : [];
            rr.push(Ir), Wr.set(jr, rr)
          }
          return {
            found: rr.hiddenWatersFound,
            total: rr.hiddenWatersTotal,
            aspect: Qr / Sr,
            pins: rr.hiddenWatersPins.map((rr => {
              let [Sr, Qr] = rr;
              return Zr(Sr, Qr)
            })),
            islands: rr.hiddenWatersIslands.map((rr => {
              let [Wr, ar, jr, Ir] = rr;
              const {
                left: fr,
                top: Er
              } = Zr(jr + 1, ar);
              return {
                left: fr,
                top: Er,
                width: (jr + 1 - Wr) / Sr,
                height: (Ir + 1 - ar) / Qr
              }
            })),
            glimpses: Wr
          }
        }(rr), this.Jp(this.snapshot)
      }
    }
    const VZ = "skyblockDialogueView";
    class iZ extends fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(rr, Qr, Zr), this.translate = Sr, this.requestDialogue = Wr, this.now = ar, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = rr => {
          this.selection = {
            kind: "quest",
            questId: rr
          }, this.request(), this.show()
        }, this.selectCharacter = rr => {
          this.selection = {
            kind: "character",
            npcId: rr
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      vx(rr) {
        this.received = !0, this.scripts = rr.questDialogueScripts, this.speakers = new Map(rr.questDialogueSpeakers.map((rr => [rr.dialogueSpeakerId, rr]))), this.emit()
      }
      setTranslator(rr) {
        this.translate = rr, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const rr = this.now();
        rr >= this.requestAvailableAt && (this.requestAvailableAt = rr + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var rr;
        const Sr = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Sr,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Qr = this.selection;
        if ("quest" === Qr.kind) {
          const rr = this.scripts.find((rr => rr.dialogueQuestId === Qr.questId));
          return {
            ...Sr,
            characters: [],
            questFocus: Qr.questId,
            conversations: rr ? [this.conversation(rr)] : []
          }
        }
        const Zr = [];
        for (let ar = this.scripts.length - 1; ar >= 0; ar--) {
          const rr = this.scripts[ar].dialogueLines;
          for (let Sr = rr.length - 1; Sr >= 0; Sr--) Zr.includes(rr[Sr].dialogueSpeakerId) || Zr.push(rr[Sr].dialogueSpeakerId)
        }
        const Wr = null !== Qr.npcId && Zr.includes(Qr.npcId) ? Qr.npcId : null !== (rr = Zr[0]) && void 0 !== rr ? rr : null;
        return {
          ...Sr,
          characters: Zr.map((rr => {
            var Sr, Qr;
            return {
              id: rr,
              styling: null !== (Sr = null === (Qr = this.speakers.get(rr)) || void 0 === Qr ? void 0 : Qr.dialogueSpeakerStyling) && void 0 !== Sr ? Sr : rr,
              selected: rr === Wr
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((rr => rr.dialogueLines.some((rr => rr.dialogueSpeakerId === Wr)))).map((rr => this.conversation(rr))).reverse()
        }
      }
      conversation(rr) {
        let Sr = null;
        return {
          questId: rr.dialogueQuestId,
          questName: this.translate(rr.dialogueQuestNameKey),
          completed: rr.dialogueQuestCompleted,
          lines: rr.dialogueLines.map(((rr, Qr) => {
            var Zr;
            const Wr = rr.dialogueSpeakerId === Sr || null === (Zr = this.speakers.get(rr.dialogueSpeakerId)) || void 0 === Zr ? void 0 : Zr.dialogueSpeakerStyling;
            return Sr = rr.dialogueSpeakerId, {
              key: Qr,
              display: {
                line: {
                  translationKey: rr.dialogueLineKey,
                  params: this.params(rr.dialogueLineParams)
                },
                speakerName: Wr,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(rr) {
        if (void 0 !== rr) return Object.fromEntries(Object.entries(rr).map((rr => {
          let [Sr, Qr] = rr;
          return [Sr, "string" === typeof Qr ? Qr : this.translate(Qr.translationKey)]
        })))
      }
    }
    var wZ = Qr(672),
      cZ = Qr(1321),
      FZ = Qr(109);
    const oZ = "skyblockAutographsView";

    function bZ(rr) {
      const Sr = wZ.k[rr];
      return {
        label: Sr.chatTag.map((rr => rr.str)).join(""),
        icon: Sr.icon,
        colour: Sr.mainRGB
      }
    }
    class JZ extends fr {
      constructor(rr) {
        let Sr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Sr, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      vx(rr) {
        this.signatures = rr.autographSignatures, rr.autographOpen ? this.show() : this.emit()
      }
      setTranslator(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Sr, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var rr;
        const Sr = null !== (rr = this.signatures) && void 0 !== rr ? rr : [],
          Qr = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Zr = [...Sr].sort(((rr, Sr) => Number(null !== Sr.autographRank) - Number(null !== rr.autographRank) || Sr.autographSignedAtMs - rr.autographSignedAtMs)).map((rr => ({
            key: `${rr.autographSignedAtMs}|${rr.autographSignerName}`,
            name: (0, cZ.e)(rr.autographSignerName, !FZ.featureFlags.canSeeRealPlayerNames),
            rank: null === rr.autographRank ? null : bZ(rr.autographRank),
            signedOn: Qr.format(rr.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Zr,
          total: Zr.length,
          rankTotal: Zr.filter((rr => null !== rr.rank)).length
        }
      }
    }
    const DZ = "skyblockHudView",
      dZ = () => {},
      sZ = {
        getItem: () => null,
        setItem: dZ,
        removeItem: dZ
      };
    class uZ {
      constructor(rr) {
        let {
          translate: Sr,
          translateWithIcons: Qr,
          setMenuOpen: Zr = dZ,
          dismissMenu: Wr = () => {
            Zr(!1)
          },
          publishSkills: ar = dZ,
          publishQuests: jr = dZ,
          publishQuestNotification: Ir = dZ,
          publishDungeons: fr = dZ,
          publishCollections: Er = dZ,
          publishMap: xr = dZ,
          publishHud: mr = dZ,
          publishPortalTransit: Nr = dZ,
          publishDailyReward: Ur = dZ,
          publishMailbox: tr = dZ,
          publishQuestGraph: hr = dZ,
          publishForge: zr = dZ,
          publishSmuggler: Yr = dZ,
          publishKeepersChair: nr = dZ,
          publishReachLog: er = dZ,
          publishLampLight: yr = dZ,
          publishMagmaward: Br = dZ,
          publishGlowtide: Tr = dZ,
          publishGlowMeter: vr = dZ,
          publishHushWait: Or = dZ,
          publishPassage: Lr = dZ,
          publishTideCharts: lr = dZ,
          publishRegulars: Xr = dZ,
          publishHiddenWaters: Pr = dZ,
          publishDialogue: Hr = dZ,
          publishAutographs: qr = dZ,
          isLoadingScreenUp: Rr = () => !1,
          onDailyRewardCoinLanded: gr = dZ,
          onDailyRewardStarted: Cr = dZ,
          onDailyRewardFinished: Mr = dZ,
          onDailyRewardItemLanded: Gr = dZ,
          onMailboxStarted: kr = dZ,
          journeyStorage: Ar = sZ,
          requestTracking: Vr = dZ,
          requestTravel: ir = dZ,
          requestDungeonEnter: wr = dZ,
          requestQuestJump: cr = dZ,
          requestQuestArrive: Fr = dZ,
          requestForge: or = dZ,
          requestSmuggle: br = dZ,
          requestKeepersChairAim: Jr = dZ,
          requestReachLogOpen: Dr = dZ,
          requestLampLight: dr = dZ,
          requestDialogue: sr = dZ
        } = rr;
        this.navigation = void 0, this.map = void 0, this.compass = new Kr, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new jZ.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = rr => rr, this.close = () => {
          for (const rr of this.panels) rr.close()
        }, this.setMenuOpen = Zr, this.publishHud = mr, this.portalTransit = new nQ(Nr, Ar), this.magmaward = new YZ(Br), this.glowtide = new eZ(Tr), this.glowMeter = new yZ(vr), this.hushWait = new TZ(Or), this.dailyReward = new yQ(Ur, (() => Rr() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (rr => {
          this.quests.setNotificationsHeld(rr)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), gr, Cr, Mr, Gr);
        const ur = rr => {
          this.panels.some((rr => rr.isOpen())) || (rr ? Wr() : this.setMenuOpen(!1))
        };
        this.skills = new AS(ar, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Sr, void 0, void 0, ur), this.quests = new FS(jr, Vr, Sr, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, ur, Ir), this.dungeons = new JS(fr, Sr, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, ur, wr), this.collections = new hQ(Er, Sr, (() => {
          this.beforePanelOpen(this.collections)
        }), ur), this.map = new pr(xr, ir, Sr, (() => {
          this.beforePanelOpen(this.map)
        }), ur), this.questGraph = new HQ(hr, Sr, (() => {
          this.beforePanelOpen(this.questGraph)
        }), ur, cr, Fr, Ar), this.forge = new dQ(zr, Sr, (() => {
          this.beforePanelOpen(this.forge)
        }), ur, or), this.smuggler = new rZ(Yr, Sr, (() => {
          this.beforePanelOpen(this.smuggler)
        }), ur, br), this.lampLight = new hZ(yr, Sr, dr, this.commandPacer), this.keepersChair = new fZ(nr, Sr, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (rr => {
          this.lampLight.onChairClosed(), ur(rr)
        }), Jr, Date.now, this.commandPacer), this.reachLog = new UZ(er, Sr, (() => {
          this.beforePanelOpen(this.reachLog)
        }), ur, Dr, this.commandPacer), this.passage = new aZ(Lr, Sr, (() => {
          this.beforePanelOpen(this.passage)
        }), ur), this.tideCharts = new qZ(lr, Sr, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), ur), this.regulars = new GZ(Xr, Sr, (() => {
          this.beforePanelOpen(this.regulars)
        }), (rr => {
          this.regulars.takeReturnToReachLog() && !rr && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), ur(rr)
        })), this.hiddenWaters = new AZ(Pr), this.dialogue = new iZ(Hr, Sr, (() => {
          this.beforePanelOpen(this.dialogue)
        }), ur, sr), this.autographs = new JZ(qr, (() => {
          this.beforePanelOpen(this.autographs)
        }), ur), this.mailbox = new OQ(tr, (() => Rr() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), kr), this.quests.translateWithIcons = null !== Qr && void 0 !== Qr ? Qr : null, this.skills.onLevelUp = rr => {
          this.quests.notify(rr)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new GS(this.map, this.quests, this.compass, Sr)
      }
      getHudSnapshot() {
        const rr = this.hudSnapshot,
          Sr = this.dailyReward.getHeldCoins();
        return null === rr || Sr <= 0 || !("hudPurseCoins" in rr) ? rr : {
          ...rr,
          hudPurseCoins: Math.max(0, rr.hudPurseCoins - Sr)
        }
      }
      receiveHud(rr) {
        this.hudSnapshot = rr, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(rr) {
        this.setMenuOpen(!0);
        const Sr = rr === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = rr;
        for (const Qr of this.panels) Qr === rr || Sr && Qr === this.reachLog || Qr.close();
        this.openingPanel = null
      }
      setTranslator(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sr => this.resolveItemName(Sr, rr);
        this.quests.translateWithIcons = null !== Qr && void 0 !== Qr ? Qr : null, this.navigation.setTranslator(rr, Sr), this.lampLight.setTranslator(rr, Sr), this.mailbox.setItemName(Zr);
        for (const Wr of this.panels) Wr.setTranslator(rr, Sr, Zr)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const rr of this.panels) rr.dispose()
      }
    }
    var rW = Qr(1155),
      SW = Qr.n(rW),
      QW = Qr(26),
      ZW = Qr(38154),
      WW = Qr(4645),
      aW = Qr(2075),
      jW = Qr(2057),
      IW = Qr(35488),
      fW = Qr(1251),
      EW = Qr(1573),
      pW = Qr(1338);

    function xW(rr) {
      let {
        controller: Sr,
        minimap: Qr,
        children: Zr
      } = rr;
      const Wr = (0, EW.g)(DZ, Sr.getHudSnapshot()),
        [ar, jr] = (0, Br.useState)(Sr.skills.getSnapshot().overallLevel);
      (0, EW.c)(kS, (rr => {
        jr(rr.overallLevel)
      }));
      const Ir = (0, Br.useRef)(null);
      (0, EW.c)(KQ, (rr => {
        ! function(rr, Sr) {
          if (null === rr || "function" !== typeof rr.animate) return;
          const Qr = Sr ? 1.35 : 1.15;
          rr.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Qr})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Sr ? 320 : 160,
            easing: "ease-out"
          }), rr.classList.toggle("Receiving", !Sr), Sr && (rr.classList.remove("Shine"), rr.offsetWidth, rr.classList.add("Shine"))
        }(Ir.current, rr)
      }));
      const {
        t: fr
      } = (0, fW.E)(), {
        isTouchScreen: Er
      } = (0, QW.n)(["isTouchScreen"]), [pr, mr] = (0, Br.useState)(null);
      return (0, WW.l)(pr, ".SkyblockRightHud"), null !== Wr || Qr ? (0, pW.jsx)(ZW.d, {
        placement: "topRight",
        children: (0, pW.jsxs)("div", {
          className: SW()("SkyblockRightHud", {
            TouchScreen: Er
          }),
          children: [Qr, null !== Wr && (0, pW.jsxs)("div", {
            ref: mr,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Wr ? (0, pW.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Wr.hudHelpText
            }) : (0, pW.jsxs)(pW.Fragment, {
              children: [(0, pW.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, pW.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, pW.jsx)("strong", {
                    style: {
                      color: xr.K.cyanUiText
                    },
                    children: fr(Wr.hudZoneNameKey)
                  }), null !== ar && (0, pW.jsx)("span", {
                    style: {
                      color: xr.K.goldUiText
                    },
                    children: fr("skyblockGame:level", {
                      level: (0, IW.i)(ar)
                    })
                  })]
                }), (0, pW.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Ir,
                  children: [(0, pW.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, pW.jsx)(aW.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, IW.i)(Wr.hudPurseCoins)]
                })]
              }), Wr.hudClockText.length > 0 && (0, pW.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, pW.jsx)(jW.c, {
                  text: Wr.hudClockText
                })
              })]
            }), Zr, "hudZoneNameKey" in Wr && (0, pW.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var mW = Qr(40095);

    function NW(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)();
      return (0, pW.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Sr.display.mountPlayer,
        title: Qr("skyblockGame:mapYouAreHere"),
        children: (0, pW.jsx)(mW.d, {
          icon: "player"
        })
      })
    }
    const UW = Qr(40099),
      tW = Object.fromEntries(UW.keys().map((rr => [rr.replace(/^\.\/(.*)\.png$/, "$1"), UW(rr)])));

    function hW(rr, Sr) {
      var Qr;
      return null !== (Qr = tW[rr]) && void 0 !== Qr ? Qr : tW[Sr]
    }

    function zW(rr) {
      let {
        imageKey: Sr,
        fallbackImageKey: Qr,
        geometryKey: Zr,
        alt: Wr,
        className: ar
      } = rr;
      const [jr, Ir] = (0, Br.useState)((() => function(rr, Sr) {
        return [{
          id: 0,
          imageKey: rr,
          geometryKey: Sr,
          phase: "shown"
        }]
      }(Sr, Zr))), fr = function(rr, Sr, Qr) {
        const Zr = rr[rr.length - 1];
        if (Zr.imageKey === Sr && Zr.geometryKey === Qr) return rr;
        const Wr = {
          id: Zr.id + 1,
          imageKey: Sr,
          geometryKey: Qr,
          phase: "entering"
        };
        return Zr.geometryKey === Qr ? [{
          ...Zr,
          phase: "leaving"
        }, Wr] : [Wr]
      }(jr, Sr, Zr);
      return fr !== jr && Ir(fr), (0, pW.jsx)(pW.Fragment, {
        children: fr.map((rr => (0, pW.jsx)("img", {
          className: SW()("SkyblockMapTerrainImage", ar, {
            Entering: "entering" === rr.phase,
            Leaving: "leaving" === rr.phase
          }),
          src: hW(rr.imageKey, Qr),
          alt: "leaving" === rr.phase ? "" : Wr,
          onAnimationEnd: () => {
            Ir((Sr => function(rr, Sr) {
              return rr.flatMap((rr => rr.id !== Sr ? [rr] : "leaving" === rr.phase ? [] : [{
                ...rr,
                phase: "shown"
              }]))
            }(Sr, rr.id)))
          }
        }, rr.id)))
      })
    }
    var YW = Qr(5297),
      nW = Qr(1576);

    function eW(rr) {
      if ("Tab" !== rr.key) return;
      const Sr = Array.from(rr.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Qr = Sr.indexOf(document.activeElement);
      var Zr;
      if (rr.shiftKey && Qr <= 0) rr.preventDefault(), null === (Zr = Sr.at(-1)) || void 0 === Zr || Zr.focus();
      else if (!rr.shiftKey && (-1 === Qr || Qr === Sr.length - 1)) {
        var Wr;
        rr.preventDefault(), null === (Wr = Sr[0]) || void 0 === Wr || Wr.focus()
      }
    }

    function KW() {
      const rr = (0, Br.useRef)(null);
      return (0, Br.useCallback)((Sr => {
        var Qr;
        Sr ? (rr.current = document.activeElement, Sr.focus()) : null === (Qr = rr.current) || void 0 === Qr || Qr.focus()
      }), [])
    }

    function yW(rr) {
      let {
        percent: Sr,
        label: Qr,
        levelUpToken: Zr,
        colour: Wr
      } = rr;
      return (0, pW.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Qr,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Sr,
        "aria-valuetext": Qr,
        children: [(0, pW.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Sr/100})`
          }
        }), null !== Zr && void 0 !== Zr && (0, pW.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Wr
          }
        }, Zr)]
      })
    }

    function BW(rr) {
      let {
        mount: Sr
      } = rr;
      return (0, pW.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Sr,
        hidden: !0,
        children: (0, pW.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, pW.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, pW.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function TW(rr, Sr, Qr, Zr) {
      (0, Br.useLayoutEffect)((() => {
        const Wr = rr.current;
        if (!Qr || null === Sr || void 0 === Sr || !Sr.local || !Wr) return;
        const ar = Array.from(Wr.querySelectorAll(".SkyblockMapNode")),
          jr = [...Sr.points, ...Sr.portals],
          Ir = () => {
            const rr = Wr.clientWidth,
              Qr = Wr.clientHeight,
              Ir = ar.map(((Wr, ar) => {
                const Ir = jr[ar];
                return {
                  id: Ir.id,
                  portal: ar >= Sr.points.length,
                  x: Ir.position[0] * rr / 100,
                  y: Ir.position[1] * Qr / 100,
                  width: Wr.offsetWidth / Zr,
                  height: Wr.offsetHeight / Zr
                }
              })),
              fr = new Map(jr.map(((rr, Sr) => [rr.id, ar[Sr]])));
            for (const Sr of function(rr, Sr, Qr) {
                const Zr = [],
                  Wr = [...rr].sort(((rr, Sr) => Number(Sr.portal) - Number(rr.portal) || rr.id.localeCompare(Sr.id)));
                for (const ar of Wr) {
                  const rr = rr => Math.max(ar.width / 2, Math.min(Sr - ar.width / 2, rr)),
                    Wr = rr => Math.max(ar.height / 2, Math.min(Qr - ar.height / 2, rr)),
                    jr = [rr(ar.x)],
                    Ir = [Wr(ar.y)];
                  for (const Sr of Zr) jr.push(rr(Sr.x - (Sr.width + ar.width) / 2 - 4), rr(Sr.x + (Sr.width + ar.width) / 2 + 4)), Ir.push(Wr(Sr.y - (Sr.height + ar.height) / 2 - 4), Wr(Sr.y + (Sr.height + ar.height) / 2 + 4));
                  let fr = {
                      ...ar,
                      x: jr[0],
                      y: Ir[0]
                    },
                    Er = 1 / 0,
                    pr = 1 / 0;
                  for (const Sr of new Set(jr))
                    for (const rr of new Set(Ir)) {
                      let Qr = 0;
                      for (const jr of Zr) Qr += Math.max(0, (ar.width + jr.width) / 2 + 4 - Math.abs(Sr - jr.x)) * Math.max(0, (ar.height + jr.height) / 2 + 4 - Math.abs(rr - jr.y));
                      const Wr = (Sr - ar.x) ** 2 + (rr - ar.y) ** 2;
                      (Qr < Er || Qr === Er && Wr < pr) && (fr = {
                        ...ar,
                        x: Sr,
                        y: rr
                      }, Er = Qr, pr = Wr)
                    }
                  Zr.push(fr)
                }
                return Zr
              }(Ir, rr, Qr)) {
              const rr = fr.get(Sr.id);
              rr.style.left = `${Sr.x}px`, rr.style.top = `${Sr.y}px`
            }
          };
        Ir();
        const fr = new ResizeObserver(Ir);
        fr.observe(Wr);
        for (const rr of ar) fr.observe(rr);
        return () => {
          fr.disconnect()
        }
      }), [rr, Sr, Qr, Zr])
    }
    var vW = Qr(40183),
      OW = Qr(40192);

    function LW(rr) {
      var Sr, Qr, Zr, Wr;
      let {
        controller: ar,
        navigation: jr
      } = rr;
      const Ir = (0, EW.g)(Er, ar.getSnapshot()),
        {
          t: fr
        } = (0, fW.E)(),
        pr = KW(),
        xr = Ir.presentation,
        mr = (0, Br.useRef)(null),
        Nr = (0, Br.useRef)(null),
        Ur = Boolean(Ir.open && (null === xr || void 0 === xr ? void 0 : xr.local) && xr.background),
        tr = (0, vW.d)(mr, Ur, `${Ir.open}|${Ir.tab}|${null===xr||void 0===xr||null===(Sr=xr.background)||void 0===Sr?void 0:Sr.geometryKey}`, null !== (Qr = null === xr || void 0 === xr || null === (Zr = xr.background) || void 0 === Zr ? void 0 : Zr.ratio) && void 0 !== Qr ? Qr : 2);
      if (TW(Nr, xr, Ir.open, tr.view.zoom), !xr || !Ir.open) return null;
      const hr = xr.local ? xr.background : null,
        zr = {
          "--map-ratio": String(null !== (Wr = null === hr || void 0 === hr ? void 0 : hr.ratio) && void 0 !== Wr ? Wr : 2),
          backgroundColor: null === hr || void 0 === hr ? void 0 : hr.colour
        },
        Yr = {
          "--map-zoom": String(tr.view.zoom),
          transform: `translate(${100*tr.view.x}%, ${100*tr.view.y}%) scale(${tr.view.zoom})`
        };
      return (0, pW.jsx)(YW.b, {
        show: Ir.open,
        close: ar.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: pr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, pW.jsx)("h2", {
                id: "skyblockMapTitle",
                children: fr("skyblockGame:map")
              }), xr.minimap && (0, pW.jsx)("p", {
                children: xr.minimap.caption
              })]
            }), (0, pW.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((rr => (0, pW.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": rr === Ir.tab ? "true" : void 0,
                className: SW()({
                  Selected: rr === Ir.tab
                }),
                "aria-pressed": rr === Ir.tab,
                onClick: () => {
                  ar.selectTab(rr)
                },
                children: fr("local" === rr ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, rr)))
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: ar.dismiss
            })]
          }), (0, pW.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, pW.jsxs)("div", {
              ref: mr,
              className: SW()("SkyblockMapCanvas", {
                Local: xr.local,
                Overview: !xr.local,
                Zoomed: tr.view.zoom > 1
              }),
              style: zr,
              children: [(0, pW.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Ur ? Yr : void 0,
                children: (0, pW.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Nr,
                  children: [hr && (0, pW.jsx)(zW, {
                    className: "SkyblockMapTerrain",
                    imageKey: hr.imageKey,
                    fallbackImageKey: hr.fallbackImageKey,
                    geometryKey: hr.geometryKey,
                    alt: hr.label
                  }), xr.local && (0, pW.jsx)(BW, {
                    mount: jr.display.mountMapSearchArea
                  }), !xr.local && (0, pW.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: xr.connections.map((rr => (0, pW.jsx)("line", {
                      className: SW()({
                        Explored: rr.explored
                      }),
                      x1: rr.start[0],
                      y1: rr.start[1],
                      x2: rr.end[0],
                      y2: rr.end[1]
                    }, rr.id)))
                  }), xr.points.map((rr => {
                    const Sr = !xr.local && rr.thumbnail ? tW[rr.thumbnail] : void 0;
                    return (0, pW.jsxs)("div", {
                      className: SW()("SkyblockMapNode", {
                        Current: rr.current
                      }),
                      style: {
                        left: `${rr.position[0]}%`,
                        top: `${rr.position[1]}%`
                      },
                      children: [(0, pW.jsxs)(nW.h, {
                        className: SW()("SkyblockMapPin", {
                          Unknown: !rr.visited,
                          Current: rr.current
                        }),
                        disabled: Ir.pending,
                        onClick: () => {
                          ar.travel(rr.travelKind, rr.travelId)
                        },
                        children: [Sr && (0, pW.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Sr,
                          alt: ""
                        }), !Sr && (0, pW.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, pW.jsx)(mW.d, {
                            icon: rr.icon
                          })
                        }), (0, pW.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: rr.name
                        })]
                      }), rr.current && (0, pW.jsx)("span", {
                        className: SW()("SkyblockMapHereBadge", {
                          Above: rr.position[1] > 50
                        }),
                        children: fr("skyblockGame:mapYouAreHere")
                      })]
                    }, rr.id)
                  })), xr.portals.map((rr => (0, pW.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${rr.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${rr.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, pW.jsxs)(nW.h, {
                      className: "SkyblockMapPin",
                      disabled: Ir.pending,
                      onClick: () => {
                        ar.travel(rr.travelKind, rr.travelId)
                      },
                      children: [(0, pW.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: rr.colour
                        },
                        "aria-hidden": "true",
                        children: (0, pW.jsx)(mW.d, {
                          icon: rr.icon
                        })
                      }), (0, pW.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: rr.name
                      })]
                    })
                  }, rr.id))), xr.local && (0, pW.jsx)(NW, {
                    controller: jr
                  })]
                })
              }), Ur && (0, pW.jsx)(OW.e, {
                zoom: tr,
                zoomInLabel: fr("skyblockGame:mapZoomIn"),
                zoomOutLabel: fr("skyblockGame:mapZoomOut")
              }), (0, pW.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Ir.feedback
              })]
            })
          }), (0, pW.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [xr.progress && (0, pW.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, pW.jsx)("span", {
                children: xr.progress
              }), (0, pW.jsx)(yW, {
                percent: xr.percent,
                label: xr.progress
              })]
            }), xr.noLandmarks && (0, pW.jsx)("span", {
              children: fr("skyblockGame:mapNoLandmarks")
            }), xr.canTravel && (0, pW.jsx)("span", {
              className: "SkyblockMapHint",
              children: fr("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function lW(rr) {
      let {
        view: Sr,
        controller: Qr,
        navigation: Zr
      } = rr;
      const {
        t: Wr
      } = (0, fW.E)(), {
        isTouchScreen: ar
      } = (0, QW.n)(["isTouchScreen"]);
      return (0, pW.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Wr("skyblockGame:mapLocal"),
        children: [ar && (0, pW.jsx)(nW.h, {
          className: "SkyblockMinimapOpen",
          onClick: Qr.showLocal,
          children: Wr("skyblockGame:map")
        }), (0, pW.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Sr.colour
          },
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Zr.display.mountTerrain,
            style: {
              width: Sr.width,
              height: Sr.height
            },
            children: [(0, pW.jsx)(zW, {
              imageKey: Sr.imageKey,
              fallbackImageKey: Sr.fallbackImageKey,
              geometryKey: Sr.geometryKey,
              alt: Sr.label
            }), (0, pW.jsx)(BW, {
              mount: Zr.display.mountMinimapSearchArea
            }), Sr.markers.map((rr => (0, pW.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${rr.position[0]}%`,
                top: `${rr.position[1]}%`,
                color: rr.colour
              },
              title: rr.name,
              children: (0, pW.jsx)(mW.d, {
                icon: rr.icon
              })
            }, rr.id)))]
          }), (0, pW.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Wr("skyblockGame:mapYouAreHere"),
            children: (0, pW.jsx)(mW.d, {
              icon: "player"
            })
          })]
        }), (0, pW.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Sr.caption
        })]
      })
    }

    function XW(rr) {
      let {
        controller: Sr
      } = rr;
      return (0, pW.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Sr.display.mountCompass,
        children: [(0, pW.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, pW.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, pW.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function PW(rr) {
      let {
        controller: Sr,
        surface: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)(), Wr = (0, EW.g)(kS, Sr.getSnapshot()), ar = KW();
      return Wr.enabled ? (0, pW.jsxs)(pW.Fragment, {
        children: ["hud" === Qr && (0, pW.jsx)(ZW.d, {
          placement: "statBars",
          children: Wr.hud && (0, pW.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Wr.hud.colour
            },
            children: [(0, pW.jsx)(yW, {
              percent: Wr.hud.skill.percent,
              label: Wr.hud.skill.xp,
              levelUpToken: Wr.hud.levelUpToken,
              colour: Wr.hud.colour
            }), (0, pW.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, pW.jsxs)("span", {
                children: [Wr.hud.skill.label, " \xb7 ", Wr.hud.skill.level]
              }), (0, pW.jsx)("span", {
                children: Wr.hud.gain
              })]
            })]
          })
        }), "hud" === Qr && (0, pW.jsx)(ZW.d, {
          children: Wr.hud && (0, pW.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, pW.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, pW.jsx)("strong", {
                children: Wr.hud.skill.label
              }), (0, pW.jsx)("span", {
                children: Wr.hud.gain
              })]
            }), (0, pW.jsx)(yW, {
              percent: Wr.hud.skill.percent,
              label: Wr.hud.skill.xp,
              levelUpToken: Wr.hud.levelUpToken,
              colour: Wr.hud.colour
            }), (0, pW.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, pW.jsx)("span", {
                children: Wr.hud.skill.level
              }), (0, pW.jsx)("span", {
                children: Wr.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Qr && (0, pW.jsx)(YW.b, {
          show: Wr.open,
          close: Sr.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, pW.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: ar,
            onKeyDown: eW,
            children: [(0, pW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, pW.jsxs)("div", {
                children: [(0, pW.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Zr("skyblockGame:skills")
                }), (0, pW.jsx)("p", {
                  children: Zr("skyblockGame:skillsIntro")
                })]
              }), (0, pW.jsx)(nW.l, {
                padIgnore: !0,
                onClick: Sr.dismiss
              })]
            }), (0, pW.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, pW.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Wr.skills.map((rr => (0, pW.jsxs)(nW.h, {
                  className: SW()("SkyblockSkillCard", {
                    Selected: rr.selected
                  }),
                  ariaPressed: rr.selected,
                  onClick: () => {
                    Sr.select(rr.id)
                  },
                  children: [(0, pW.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, pW.jsx)(aW.d, {
                      itemName: rr.icon,
                      amount: 0
                    })
                  }), (0, pW.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, pW.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, pW.jsx)("strong", {
                        children: rr.label
                      }), (0, pW.jsx)("span", {
                        children: rr.level
                      })]
                    }), (0, pW.jsx)(yW, {
                      percent: rr.percent,
                      label: `${rr.label}: ${rr.xp}`
                    }), (0, pW.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: rr.xp
                    })]
                  })]
                }, rr.id)))
              }), Wr.detail && (0, pW.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, pW.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, pW.jsx)(aW.d, {
                    itemName: Wr.detail.icon,
                    amount: 0
                  })
                }), (0, pW.jsx)("h3", {
                  children: Wr.detail.label
                }), (0, pW.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Wr.detail.level
                }), (0, pW.jsx)("p", {
                  children: Wr.detail.description
                }), (0, pW.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, pW.jsx)("strong", {
                    children: Zr("skyblockGame:currentBenefit")
                  }), (0, pW.jsx)("span", {
                    children: Wr.detail.benefit
                  })]
                }), (0, pW.jsx)(yW, {
                  percent: Wr.detail.percent,
                  label: Wr.detail.xp
                }), (0, pW.jsx)("p", {
                  children: Wr.detail.xp
                }), (0, pW.jsx)("h4", {
                  children: Zr("skyblockGame:earnXp")
                }), (0, pW.jsx)("ul", {
                  children: Wr.detail.sources.map((rr => (0, pW.jsx)("li", {
                    children: rr
                  }, rr)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var HW = Qr(1489),
      qW = Qr(5649),
      RW = Qr(360);

    function gW(rr) {
      let {
        item: Sr
      } = rr;
      return (0, pW.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, pW.jsx)(aW.d, {
          itemName: Sr,
          amount: 0
        })
      })
    }

    function CW(rr) {
      let {
        name: Sr,
        percent: Qr,
        progress: Zr
      } = rr;
      return (0, pW.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, pW.jsx)(yW, {
          percent: Qr,
          label: `${(0,RW.vb)(Sr)}: ${Zr}`
        }), (0, pW.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Zr
        })]
      })
    }

    function MW(rr) {
      let {
        subquests: Sr,
        showDescriptions: Qr = !1
      } = rr;
      return (0, pW.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Sr.map((rr => {
          const Sr = Qr && "completed" === rr.status,
            Zr = (0, pW.jsxs)("li", {
              className: SW()("SkyblockQuestStep", rr.status, {
                JustFinished: rr.justFinished,
                JustUnlocked: rr.justUnlocked
              }),
              tabIndex: Sr ? 0 : void 0,
              children: [null !== rr.iconItem && (0, pW.jsx)(gW, {
                item: rr.iconItem
              }), null === rr.iconItem && (0, pW.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === rr.status ? "\u2713" : "skipped" === rr.status ? "\u2212" : "\u25cb"
              }), (0, pW.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, pW.jsx)("strong", {
                  children: (0, pW.jsx)(qW.e, {
                    text: rr.name
                  })
                }), Qr && !Sr && (0, pW.jsx)("span", {
                  children: (0, pW.jsx)(qW.e, {
                    text: rr.description
                  })
                }), null !== rr.barPercent && (0, pW.jsx)(CW, {
                  name: rr.name,
                  percent: rr.barPercent,
                  progress: rr.progress
                }), null === rr.barPercent && !Sr && (0, pW.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: rr.statusLabel
                })]
              })]
            }, rr.id);
          return Sr ? (0, pW.jsx)(HW.f, {
            delayShow: 200,
            tooltipInner: (0, pW.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, pW.jsx)("span", {
                children: (0, pW.jsx)(qW.e, {
                  text: rr.description
                })
              }), (0, pW.jsx)("strong", {
                children: rr.statusLabel
              })]
            }),
            children: Zr
          }, rr.id) : Zr
        }))
      })
    }

    function GW(rr) {
      let {
        quest: Sr,
        select: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)(), Wr = Sr.focusStep;
      return (0, pW.jsxs)(nW.h, {
        className: SW()("SkyblockQuestCard", {
          Selected: Sr.selected,
          Tracked: Sr.tracked
        }),
        onClick: () => {
          Qr(Sr.id)
        },
        children: [(0, pW.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, pW.jsx)("strong", {
            children: (0, pW.jsx)(qW.e, {
              text: Sr.name
            })
          }), Sr.tracked && (0, pW.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Zr("skyblockGame:currentQuest")
          })]
        }), Wr && (0, pW.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Wr.iconItem && (0, pW.jsx)(gW, {
            item: Wr.iconItem
          }), (0, pW.jsx)(CW, {
            name: Wr.name,
            percent: Wr.barPercent,
            progress: Wr.progress
          })]
        }), (0, pW.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Sr.progress
        })]
      })
    }

    function kW(rr) {
      let {
        controller: Sr,
        surface: Qr
      } = rr;
      const Zr = (0, EW.g)(wS, Sr.getSnapshot()),
        {
          t: Wr
        } = (0, fW.E)(),
        ar = KW();
      return Zr.enabled ? (0, pW.jsxs)(pW.Fragment, {
        children: ["hud" === Qr && (0, pW.jsx)(pW.Fragment, {
          children: Zr.tracked && (0, pW.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: iS,
            children: (0, pW.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Zr.trackedStepPulse > 0 && (0, pW.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Zr.trackedStepPulse), (0, pW.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Wr("skyblockGame:currentQuest")
              }), (0, pW.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, pW.jsx)("strong", {
                  children: (0, pW.jsx)(qW.e, {
                    text: Zr.tracked.name
                  })
                }), null !== Zr.tracked.clock && (0, pW.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Zr.tracked.clock
                })]
              }), (0, pW.jsx)(MW, {
                subquests: Zr.tracked.subquests
              })]
            })
          })
        }), "menu" === Qr && (0, pW.jsx)(YW.b, {
          show: Zr.open,
          close: Sr.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, pW.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: ar,
            onKeyDown: eW,
            children: [(0, pW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, pW.jsx)("div", {
                children: (0, pW.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Wr("skyblockGame:quests")
                })
              }), (0, pW.jsx)(nW.l, {
                padIgnore: !0,
                onClick: Sr.dismiss
              })]
            }), (0, pW.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, pW.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, pW.jsx)("h3", {
                  children: Wr("skyblockGame:current")
                }), 0 === Zr.active.length && (0, pW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wr("skyblockGame:noActiveQuests")
                }), Zr.active.map((rr => (0, pW.jsx)(GW, {
                  quest: rr,
                  select: Sr.select
                }, rr.id))), (0, pW.jsx)("h3", {
                  children: (0, pW.jsxs)("button", {
                    type: "button",
                    className: SW()("SkyblockQuestSectionToggle", {
                      Expanded: Zr.completedExpanded
                    }),
                    "aria-expanded": Zr.completedExpanded,
                    onClick: Sr.toggleCompleted,
                    children: [(0, pW.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Wr("skyblockGame:completed"), (0, pW.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Zr.completed.length
                    })]
                  })
                }), Zr.completedExpanded && 0 === Zr.completed.length && (0, pW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wr("skyblockGame:noCompletedQuests")
                }), Zr.completedExpanded && Zr.completed.map((rr => (0, pW.jsx)(GW, {
                  quest: rr,
                  select: Sr.select
                }, rr.id)))]
              }), Zr.detail && (0, pW.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Zr.detail.completed && (0, pW.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Wr("skyblockGame:completedQuest")
                }), (0, pW.jsx)("h3", {
                  children: (0, pW.jsx)(qW.e, {
                    text: Zr.detail.name
                  })
                }), (0, pW.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, pW.jsx)(qW.e, {
                    text: Zr.detail.description
                  })
                }), (0, pW.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Zr.detail.progress, null !== Zr.detail.clock && (0, pW.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Zr.detail.clock
                  })]
                }), (0, pW.jsx)(MW, {
                  subquests: Zr.detail.subquests,
                  showDescriptions: !0
                }), Zr.detail.tracked && (0, pW.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Zr.detail.trackLabel
                }), !Zr.detail.completed && !Zr.detail.tracked && (0, pW.jsx)(nW.p, {
                  onClick: Sr.trackSelected,
                  disabled: !Zr.detail.canTrack,
                  children: Zr.detail.trackLabel
                }), Zr.detail.canViewDialogue && (0, pW.jsx)(nW.h, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Sr.viewDialogue,
                  children: Wr("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var AW = Qr(1448),
      VW = Qr(3677);

    function iW(rr, Sr, Qr, Zr, Wr) {
      const ar = rr => "linear" === Wr ? rr : {
          lQ: Wr,
          point: rr
        },
        jr = {};
      for (const [Ir, fr] of Zr)
        for (const [Sr, Qr] of Object.entries(rr(Ir, fr, ar))) jr[Sr] ??= {
          timeline: []
        }, jr[Sr].timeline.push(Qr);
      return {
        BQ: Sr,
        loop: Qr,
        vQ: jr
      }
    }
    const wW = .547,
      cW = .022,
      FW = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      oW = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function bW(rr, Sr, Qr) {
      const {
        drop: Zr = 0,
        shift: Wr = 0,
        torso: ar = 0,
        nod: jr = 0,
        tilt: Ir = 0,
        legs: fr = [0, 0],
        arms: Er = 0,
        spread: pr = 0
      } = Sr, xr = wW * Math.cos(ar) - cW * Math.sin(ar), mr = wW * Math.sin(ar) + cW * Math.cos(ar), Nr = Qr([0, -Zr, Wr]);
      return {
        LowerBody: {
          timeFraction: rr,
          position: Nr,
          rotation: Qr([0, 0, 0])
        },
        UpperBody: {
          timeFraction: rr,
          position: Nr,
          rotation: Qr([ar, 0, Ir])
        },
        HeadMesh: {
          timeFraction: rr,
          position: Qr([0, xr - wW - Zr, mr - cW + Wr]),
          rotation: Qr([ar + jr, 0, Ir])
        },
        LegLeftMesh: {
          timeFraction: rr,
          rotation: Qr([fr[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: rr,
          rotation: Qr([fr[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: rr,
          rotation: Qr([Er, 0, pr])
        },
        ArmRightMesh: {
          timeFraction: rr,
          rotation: Qr([Er, 0, -pr])
        }
      }
    }

    function JW(rr, Sr, Qr) {
      return iW(bW, rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function DW(rr) {
      return "number" === typeof rr ? [rr, rr] : rr
    }

    function dW(rr, Sr, Qr) {
      const {
        rise: Zr = 0,
        shift: Wr = 0,
        torso: ar = 0,
        twist: jr = 0,
        tilt: Ir = 0,
        nod: fr = 0,
        cock: Er = 0,
        arms: pr = 0,
        spread: xr = 0
      } = Sr, [mr, Nr] = DW(pr), [Ur, tr] = DW(xr);
      return {
        TorsoNode: {
          timeFraction: rr,
          position: Qr([0, Zr, Wr]),
          rotation: Qr([ar, jr, Ir])
        },
        HeadMesh: {
          timeFraction: rr,
          rotation: Qr([fr, 0, Er])
        },
        ArmLeftMesh: {
          timeFraction: rr,
          rotation: Qr([mr, 0, Ur])
        },
        ArmRightMesh: {
          timeFraction: rr,
          rotation: Qr([Nr, 0, -tr])
        }
      }
    }
    const sW = [1.0625, -1, 0];

    function uW(rr) {
      return "number" === typeof rr ? [rr, rr] : rr
    }

    function ra(rr, Sr, Qr) {
      const {
        drop: Zr = 0,
        shift: Wr = 0,
        torso: ar = 0,
        tilt: jr = 0,
        nod: Ir = 0,
        cock: fr = 0,
        legs: Er = [0, 0],
        arms: pr = 0,
        spread: xr = 0
      } = Sr, [mr, Nr] = uW(pr), [Ur, tr] = uW(xr), hr = -ar, zr = -jr, [Yr, nr, er] = function(rr, Sr) {
        const [Qr, Zr, Wr] = [-sW[0], sW[1], -sW[2]], ar = Qr * Math.cos(Sr) - Zr * Math.sin(Sr), jr = Qr * Math.sin(Sr) + Zr * Math.cos(Sr);
        return [ar - Qr, -(jr * Math.cos(rr) - Wr * Math.sin(rr) - Zr), jr * Math.sin(rr) + Wr * Math.cos(rr) - Wr]
      }(hr, zr), Kr = Qr([0, -Zr, Wr]);
      return {
        TorsoNode: {
          timeFraction: rr,
          position: Qr([Yr, nr - Zr, er + Wr]),
          rotation: Qr([hr, 0, zr])
        },
        HeadMesh: {
          timeFraction: rr,
          rotation: Qr([-Ir, 0, -fr])
        },
        ArmLeftMesh: {
          timeFraction: rr,
          rotation: Qr([-mr, 0, -Ur])
        },
        ArmRightMesh: {
          timeFraction: rr,
          rotation: Qr([-Nr, 0, tr])
        },
        LegLeftMesh: {
          timeFraction: rr,
          position: Kr,
          rotation: Qr([-Er[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: rr,
          position: Kr,
          rotation: Qr([-Er[1], 0, 0])
        }
      }
    }
    var Sa = Qr(38638),
      Qa = Qr(39969),
      Za = Qr(40197);

    function Wa(rr, Sr, Qr) {
      var Zr, Wr;
      const ar = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return rr + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - rr) * Qr
        },
        [jr, Ir] = null !== (Zr = rr.legs) && void 0 !== Zr ? Zr : [0, 0],
        [fr, Er] = null !== (Wr = Sr.legs) && void 0 !== Wr ? Wr : [0, 0];
      return {
        drop: ar(rr.drop, Sr.drop),
        shift: ar(rr.shift, Sr.shift),
        torso: ar(rr.torso, Sr.torso),
        nod: ar(rr.nod, Sr.nod),
        tilt: ar(rr.tilt, Sr.tilt),
        legs: [ar(jr, fr), ar(Ir, Er)],
        arms: ar(rr.arms, Sr.arms),
        spread: ar(rr.spread, Sr.spread)
      }
    }
    const aa = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      ja = JW(4400, !0, [
        [0, aa],
        [.16, {
          ...aa,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, aa],
        [.44, {
          ...aa,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Wa(aa, FW, .7)],
        [.66, Wa(aa, FW, .78)],
        [.74, Wa(aa, oW, .65)],
        [.86, {
          ...aa,
          drop: .14
        }],
        [1, aa]
      ], "catmull-rom-spline"),
      Ia = {
        ...aa,
        drop: .14,
        torso: .3,
        spread: .4
      },
      fa = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Ea = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      pa = {
        caveGolem: ja,
        magmaGolem: JW(3600, !0, [
          [0, Ia],
          [.12, {
            ...Ia,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ia,
            tilt: -.08
          }],
          [.4, {
            ...Ia,
            tilt: .06,
            drop: .11
          }],
          [.52, Wa(Ia, FW, .9)],
          [.62, Wa(Ia, oW, .8)],
          [.7, Wa(Ia, oW, .45)],
          [.78, Wa(Ia, oW, .85)],
          [.9, {
            ...Ia,
            drop: .17
          }],
          [1, Ia]
        ], "catmull-rom-spline"),
        frostWraith: function(rr, Sr, Qr) {
          return iW(dW, rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, fa],
          [.14, {
            ...fa,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...fa,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...fa,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...fa,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...fa,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...fa,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...fa,
            rise: .16,
            tilt: -.04
          }],
          [1, fa]
        ], "catmull-rom-spline"),
        tikiTerror: function(rr, Sr, Qr) {
          return iW(ra, rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Ea],
          [.16, {
            ...Ea,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Ea],
          [.44, {
            ...Ea,
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
            ...Ea,
            drop: .1
          }],
          [1, Ea]
        ], "catmull-rom-spline")
      },
      xa = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      ma = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Na = Object.fromEntries(Object.entries(pa).map((rr => {
        let [Sr, Qr] = rr;
        return [Sr, (0, Za.c)((0, Sa.d)(Qr), Sr)]
      })));

    function Ua(rr) {
      const Sr = function(rr) {
        var Sr;
        const Qr = (0, Qa.c)(rr).poseRig;
        return null !== (Sr = ma[rr]) && void 0 !== Sr ? Sr : void 0 === Qr ? null : xa[Qr]
      }(rr);
      return null === Sr ? null : Na[Sr]
    }

    function ta(rr) {
      return {
        "--difficulty-colour": rr
      }
    }
    const ha = (0, Br.lazy)((() => (0, VW.c)(Qr.e(230).then((() => Qr(54078))), (rr => rr.MobPreview))));

    function za(rr) {
      var Sr, Qr, Zr;
      let {
        picker: Wr,
        controller: ar
      } = rr;
      const {
        t: jr
      } = (0, fW.E)(), Ir = KW(), {
        page: fr
      } = Wr;
      return (0, pW.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Ir,
        onKeyDown: rr => {
          "ArrowLeft" === rr.key ? (rr.preventDefault(), rr.stopPropagation(), ar.previous()) : "ArrowRight" === rr.key ? (rr.preventDefault(), rr.stopPropagation(), ar.next()) : eW(rr)
        },
        style: ta(fr.colour),
        children: [(0, pW.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, pW.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Wr.dungeonName
          }), (0, pW.jsx)(nW.l, {
            padIgnore: !0,
            onClick: ar.dismiss
          })]
        }), (0, pW.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, pW.jsx)(nW.h, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Wr.canPrevious,
              onClick: ar.previous,
              children: (0, pW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, pW.jsx)(AW.c, {
                  name: "angle-up"
                })
              })
            }), (0, pW.jsxs)("div", {
              className: SW()("SkyblockBossPickerBoss", {
                Locked: !fr.unlocked
              }),
              children: [null !== fr.bossMobType && (0, pW.jsx)(Br.Suspense, {
                fallback: (0, pW.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, pW.jsx)(ha, {
                  className: "SkyblockBossPickerModel",
                  mobType: fr.bossMobType,
                  variation: fr.bossMobVariation,
                  animation: null !== (Sr = Ua(fr.bossMobType)) && void 0 !== Sr ? Sr : void 0
                })
              }), null === fr.bossMobType && (0, pW.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, pW.jsx)(nW.h, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Wr.canNext,
              onClick: ar.next,
              children: (0, pW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, pW.jsx)(AW.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, pW.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [fr.beaten && (0, pW.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), fr.label]
            }), (0, pW.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Qr = fr.bossName) && void 0 !== Qr ? Qr : "???"
            }), (0, pW.jsxs)("span", {
              className: SW()("SkyblockBossPickerRecord", {
                Locked: null !== fr.lockedHint
              }),
              children: [null !== fr.lockedHintHighlight && (0, pW.jsxs)(pW.Fragment, {
                children: [fr.lockedHintHighlight.before, (0, pW.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ta(fr.lockedHintHighlight.colour),
                  children: [null !== fr.lockedHintHighlight.icon && (0, pW.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, pW.jsx)(aW.d, {
                      itemName: fr.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), fr.lockedHintHighlight.name]
                }), fr.lockedHintHighlight.after]
              }), null === fr.lockedHintHighlight && (null !== (Zr = fr.lockedHint) && void 0 !== Zr ? Zr : fr.summary)]
            })]
          }), (0, pW.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Wr.pages.map((rr => (0, pW.jsx)("span", {
              className: SW()("SkyblockBossPickerDot", {
                Current: rr.current,
                Locked: !rr.unlocked
              }),
              style: ta(rr.colour)
            }, rr.difficulty)))
          }), (0, pW.jsx)(nW.u, {
            className: "SkyblockBossPickerFight",
            disabled: !fr.unlocked,
            onClick: ar.enter,
            children: jr("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Ya(rr) {
      let {
        dungeon: Sr,
        select: Qr
      } = rr;
      return (0, pW.jsxs)(nW.h, {
        className: SW()("SkyblockDungeonCard", {
          Selected: Sr.selected
        }),
        onClick: () => {
          Qr(Sr.id)
        },
        children: [(0, pW.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, pW.jsx)("strong", {
            children: Sr.name
          }), (0, pW.jsx)("span", {
            children: Sr.beatenSummary
          })]
        }), (0, pW.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Sr.difficulties.map((rr => (0, pW.jsxs)("span", {
            className: SW()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: rr.beaten
            }),
            style: ta(rr.colour),
            title: rr.summary,
            children: [rr.beaten && (0, pW.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), rr.label]
          }, rr.difficulty)))
        })]
      })
    }

    function na(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(bS, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW();
      return Qr.enabled ? (0, pW.jsxs)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Qr.picker && (0, pW.jsx)(za, {
          picker: Qr.picker,
          controller: Sr
        }), !Qr.picker && (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Zr("skyblockGame:dungeons")
              }), (0, pW.jsx)("p", {
                children: Zr("skyblockGame:dungeonsIntro")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, pW.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Qr.dungeons.map((rr => (0, pW.jsx)(Ya, {
                dungeon: rr,
                select: Sr.select
              }, rr.id)))
            }), Qr.detail && (0, pW.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, pW.jsx)("h3", {
                children: Qr.detail.name
              }), (0, pW.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Qr.detail.difficulties.map((rr => (0, pW.jsxs)("li", {
                  className: SW()("SkyblockDungeonRecord", {
                    Beaten: rr.beaten
                  }),
                  children: [(0, pW.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ta(rr.colour),
                    children: [rr.beaten && (0, pW.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), rr.label]
                  }), (0, pW.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: rr.summary
                  })]
                }, rr.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function ea(rr) {
      let {
        collection: Sr,
        select: Qr
      } = rr;
      return (0, pW.jsxs)(nW.h, {
        className: SW()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Sr.selected,
          Locked: Sr.locked
        }),
        ariaPressed: Sr.selected,
        onClick: () => {
          Qr(Sr.id)
        },
        children: [(0, pW.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, pW.jsx)(aW.d, {
            itemName: Sr.icon,
            amount: 0
          })
        }), (0, pW.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, pW.jsx)("strong", {
              children: Sr.name
            }), (0, pW.jsx)("span", {
              children: Sr.tier
            })]
          }), (0, pW.jsx)(yW, {
            percent: Sr.percent,
            label: `${Sr.name}: ${Sr.progress}`
          }), (0, pW.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Sr.progress
          })]
        })]
      })
    }

    function Ka(rr) {
      let {
        collection: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)();
      return (0, pW.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, pW.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, pW.jsx)(aW.d, {
            itemName: Sr.icon,
            amount: 0
          })
        }), (0, pW.jsx)("h3", {
          children: Sr.name
        }), (0, pW.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Sr.tier
        }), (0, pW.jsx)("p", {
          children: Sr.locked ? Qr("skyblockGame:collectionLocked") : Sr.count
        }), null !== Sr.nextReward && (0, pW.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, pW.jsx)("strong", {
            children: Qr("skyblockGame:collectionNextReward")
          }), (0, pW.jsx)("span", {
            children: Sr.nextReward
          })]
        }), (0, pW.jsx)(yW, {
          percent: Sr.percent,
          label: Sr.progress
        }), (0, pW.jsx)("p", {
          children: Sr.progress
        })]
      })
    }

    function ya(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(tQ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW();
      return Qr.enabled ? (0, pW.jsx)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Zr("skyblockGame:collections")
              }), (0, pW.jsxs)("p", {
                children: [Zr("skyblockGame:collectionsIntro"), " ", Qr.tiersUnlocked]
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Qr.categories.map((rr => (0, pW.jsxs)(nW.h, {
              className: SW()("SkyblockCollectionCategory", {
                Selected: rr.selected
              }),
              ariaPressed: rr.selected,
              padTabSelected: rr.selected,
              onClick: () => {
                Sr.selectCategory(rr.id)
              },
              children: [(0, pW.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, pW.jsx)(aW.d, {
                  itemName: rr.icon,
                  amount: 0
                })
              }), (0, pW.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, pW.jsx)("strong", {
                  children: rr.label
                }), (0, pW.jsx)("span", {
                  children: rr.tiers
                })]
              })]
            }, rr.id)))
          }), (0, pW.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, pW.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Qr.collections.map((rr => (0, pW.jsx)(ea, {
                collection: rr,
                select: Sr.select
              }, rr.id)))
            }), Qr.detail && (0, pW.jsx)(Ka, {
              collection: Qr.detail
            })]
          })]
        })
      }) : null
    }
    const Ba = ["completed", "active", "available", "locked"],
      Ta = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function va(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(LQ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW();
      return Qr.enabled ? (0, pW.jsx)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Zr("skyblockDevQuests:title")
              }), (0, pW.jsx)("p", {
                children: Zr("skyblockDevQuests:intro")
              })]
            }), (0, pW.jsx)(nW.l, {
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Ba.map((rr => (0, pW.jsx)("span", {
              className: SW()("SkyblockQuestGraphLegendState", rr),
              children: Zr(`skyblockDevQuests:state_${rr}`)
            }, rr))), Ta.map((rr => (0, pW.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, pW.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, pW.jsx)("line", {
                  className: SW()("SkyblockQuestGraphEdge", rr),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Zr(`skyblockDevQuests:edge_${rr}`)]
            }, rr)))]
          }), (0, pW.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, pW.jsxs)("div", {
              className: SW()("SkyblockQuestGraphCanvas", {
                Planning: Qr.planning
              }),
              style: {
                width: Qr.width,
                height: Qr.height
              },
              children: [(0, pW.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Qr.width,
                height: Qr.height,
                "aria-hidden": "true",
                children: [(0, pW.jsx)("defs", {
                  children: (0, pW.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, pW.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Qr.edges.map((rr => (0, pW.jsx)("path", {
                  className: SW()("SkyblockQuestGraphEdge", rr.kind, {
                    InPlan: rr.inPlan
                  }),
                  d: rr.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, rr.key)))]
              }), Qr.nodes.map((rr => (0, pW.jsxs)("button", {
                type: "button",
                className: SW()("SkyblockQuestGraphNode", rr.state, {
                  InPlan: rr.inPlan,
                  Hovered: rr.hovered
                }),
                style: {
                  left: rr.left,
                  top: rr.top,
                  width: 190,
                  height: 52
                },
                title: rr.id,
                onMouseEnter: () => {
                  Sr.hover(rr.id)
                },
                onMouseLeave: () => {
                  Sr.hover(null)
                },
                onFocus: () => {
                  Sr.hover(rr.id)
                },
                onBlur: () => {
                  Sr.hover(null)
                },
                onClick: () => {
                  Sr.jump(rr.id)
                },
                children: [(0, pW.jsx)("strong", {
                  children: rr.name
                }), (0, pW.jsx)("span", {
                  children: rr.detail
                })]
              }, rr.id)))]
            })
          })]
        })
      }) : null
    }
    const Oa = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      La = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${VQ}ms`,
        "--forge-duration": "2150ms"
      },
      la = Array.from({
        length: 18
      }, ((rr, Sr) => ({
        "--ember-left": `${(4+92*(.618034*Sr%1)).toFixed(1)}%`,
        "--ember-size": 3 + Sr % 3 * 2 + "px",
        "--ember-drift": 14 * (Sr % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Sr%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Sr%8).toFixed(2)}s`
      })));

    function Xa(rr) {
      if (rr.style.removeProperty("--part-size"), null === rr.parentElement || "wrap" === getComputedStyle(rr.parentElement).flexWrap) return;
      const Sr = [...rr.children],
        Qr = getComputedStyle(rr),
        Zr = parseFloat(Qr.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Wr = (rr.clientHeight - parseFloat(Qr.rowGap) * (Sr.length - 1)) / Sr.length,
        ar = Sr.map((rr => {
          const Sr = getComputedStyle(rr),
            Qr = rr.querySelector("h3"),
            ar = rr.querySelector(".SkyblockForgeParts");
          if (null === Qr || null === ar) return Zr;
          const jr = Wr - parseFloat(Sr.paddingTop) - parseFloat(Sr.paddingBottom) - Qr.offsetHeight - parseFloat(getComputedStyle(Qr).marginBottom),
            Ir = parseFloat(getComputedStyle(ar).columnGap),
            fr = ar.children.length;
          let Er = 0;
          for (let Zr = 1; Zr <= fr; Zr++) {
            const rr = Math.ceil(fr / Zr);
            Er = Math.max(Er, Math.min((ar.clientWidth - Ir * (Zr - 1)) / Zr, (jr - Ir * (rr - 1)) / rr))
          }
          return Er
        }));
      rr.style.setProperty("--part-size", `${Math.floor(Math.max(Zr,Math.min(...ar)))}px`)
    }

    function Pa(rr) {
      var Sr, Qr, Zr, Wr, ar;
      let {
        controller: jr
      } = rr;
      const Ir = (0, EW.g)(JQ, jr.getSnapshot()),
        {
          t: fr
        } = (0, fW.E)(),
        Er = KW(),
        pr = function() {
          const rr = (0, Br.useRef)(null),
            Sr = (0, Br.useRef)(null);
          return (0, Br.useLayoutEffect)((() => {
            null !== rr.current && Xa(rr.current)
          })), (0, Br.useCallback)((Qr => {
            var Zr;
            null === (Zr = Sr.current) || void 0 === Zr || Zr.disconnect(), Sr.current = null, rr.current = Qr, null !== Qr && (Sr.current = new ResizeObserver((() => {
              Xa(Qr)
            })), Sr.current.observe(Qr))
          }), [])
        }(),
        mr = function(rr) {
          const Sr = (0, Br.useRef)(null);
          return (0, Br.useLayoutEffect)((() => {
            const rr = Sr.current;
            if (null !== rr) {
              rr.style.removeProperty("font-size");
              for (let Sr = 1.7; Sr > 1.1 && rr.scrollWidth > rr.clientWidth; Sr -= .1) rr.style.fontSize = Sr - .1 + "rem"
            }
          }), [rr]), (0, Br.useCallback)((rr => {
            Sr.current = rr
          }), [])
        }(null === (Sr = Ir.preview) || void 0 === Sr ? void 0 : Sr.name),
        Nr = (0, Br.useRef)(null),
        Ur = (0, Br.useRef)({}),
        tr = Ir.forging,
        hr = null !== (Qr = null === tr || void 0 === tr ? void 0 : tr.preview.tier) && void 0 !== Qr ? Qr : 0,
        zr = null !== (Zr = null === tr || void 0 === tr ? void 0 : tr.preview.named) && void 0 !== Zr && Zr,
        Yr = (0, Br.useMemo)((() => {
          return null === tr ? null : {
            flames: (rr = hr, Sr = zr, Array.from({
              length: 26 + 6 * rr + (Sr ? 20 : 0)
            }, ((rr, Sr) => {
              const Qr = Sr < 6,
                Zr = Math.random() * Math.PI * 2,
                Wr = Qr ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                ar = Math.cos(Zr) * Wr,
                jr = Math.sin(Zr) * Wr - 2 - 3 * Math.random(),
                Ir = Math.random(),
                [fr, Er, pr] = Qr ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Ir < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Ir < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Ir < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": fr,
                "--x0": `${(.15*ar).toFixed(2)}rem`,
                "--y0": `${(.15*jr).toFixed(2)}rem`,
                "--x": `${ar.toFixed(2)}rem`,
                "--y": `${jr.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Er.toFixed(2)}rem`,
                "--duration": `${Math.round(pr)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: cQ(hr, zr)
          };
          var rr, Sr
        }), [null === tr || void 0 === tr ? void 0 : tr.id]);
      if (!Ir.enabled) return null;
      const nr = Ir.preview,
        er = Ir.arriving,
        Kr = null !== er && !er.sameSword,
        yr = null !== nr && (0, pW.jsx)(aW.d, {
          itemName: nr.baseSword,
          amount: 0,
          enchantmentTier: nr.enchantmentTier
        });
      return (0, pW.jsx)(YW.b, {
        show: Ir.open,
        close: jr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Er,
          onKeyDown: eW,
          children: [(0, pW.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: la.map(((rr, Sr) => (0, pW.jsx)("span", {
              style: rr
            }, Sr)))
          }), (0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: fr("skyblockGame:forgeTitle")
              }), (0, pW.jsx)("p", {
                children: fr("skyblockGame:forgeIntro")
              })]
            }), (0, pW.jsx)(nW.l, {
              onClick: jr.dismiss
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, pW.jsx)("div", {
              ref: pr,
              className: SW()("SkyblockForgeSlots", {
                Locked: null !== tr
              }),
              children: Ir.slots.map((rr => (0, pW.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, pW.jsx)("h3", {
                  children: rr.label
                }), (0, pW.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: rr.parts.map((Sr => (0, pW.jsx)("button", {
                    type: "button",
                    className: SW()("SkyblockForgePart", {
                      Selected: Sr.selected,
                      Missing: Sr.placeholder
                    }),
                    disabled: Sr.placeholder,
                    title: Sr.placeholder ? fr("skyblockGame:forgePickParts") : Sr.itemName,
                    "aria-pressed": Sr.selected,
                    onClick: () => {
                      jr.select(rr.kind, Sr.material)
                    },
                    children: (0, pW.jsx)(aW.d, {
                      itemName: Sr.itemName,
                      amount: Sr.owned
                    })
                  }, Sr.material)))
                })]
              }, rr.kind)))
            }), (0, pW.jsxs)("div", {
              className: SW()("SkyblockForgeAnvil", {
                Named: null === nr || void 0 === nr ? void 0 : nr.named
              }),
              style: {
                "--tier": null === nr ? "transparent" : xr.fb[nr.enchantmentTier]
              },
              children: [(0, pW.jsxs)("div", {
                className: SW()("SkyblockForgeAltar", {
                  Forging: null !== tr
                }),
                style: null === tr ? void 0 : La,
                children: [(0, pW.jsxs)("div", {
                  className: SW()("SkyblockForgeMount", {
                    Arrive: null !== er
                  }),
                  children: [null === nr && (0, pW.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, pW.jsx)(aW.d, {
                      itemName: Ir.unformedSword,
                      amount: 0
                    })
                  }), null !== nr && (0, pW.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== nr && null === tr && (0, pW.jsx)("div", {
                    ref: Nr,
                    className: "SkyblockForgeFloat",
                    children: (0, pW.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: yr
                    })
                  }), null !== nr && (0, pW.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: wQ.map(((rr, Sr) => (0, pW.jsx)("span", {
                      className: SW()({
                        Rune: "" !== rr.rune
                      }),
                      style: rr.style,
                      children: rr.rune
                    }, Sr)))
                  }), null !== tr && null !== Yr && (0, pW.jsxs)(pW.Fragment, {
                    children: [(0, pW.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Yr.flames.map(((rr, Sr) => (0, pW.jsx)("span", {
                        style: rr
                      }, Sr)))
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Ur.current,
                      children: (0, pW.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: yr
                      })
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (hr >= 4 || zr) && (0, pW.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Yr.sparks.map(((rr, Sr) => (0, pW.jsx)("span", {
                        style: rr
                      }, Sr)))
                    }), (0, pW.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, pW.jsx)("p", {
                  className: SW()("SkyblockForgeStatus", null === (Wr = Ir.status) || void 0 === Wr ? void 0 : Wr.tone),
                  children: null === (ar = Ir.status) || void 0 === ar ? void 0 : ar.text
                })]
              }), null === nr && (0, pW.jsx)("p", {
                className: SW()("SkyblockForgeName Waiting", {
                  ArriveText: Kr
                }),
                children: fr(Ir.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== nr && (0, pW.jsx)("h3", {
                ref: mr,
                className: SW()("SkyblockForgeName", {
                  ArriveText: Kr
                }),
                title: nr.name,
                children: nr.name
              }), (null === nr || void 0 === nr ? void 0 : nr.named) && (0, pW.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: fr("skyblockGame:forgeSecret")
              }), (0, pW.jsxs)(nW.u, {
                className: "SkyblockForgeButton",
                disabled: !Ir.canForge,
                title: null === nr ? void 0 : fr("skyblockGame:forgeCoalOwned", {
                  owned: String(Ir.coalOwned)
                }),
                onClick: () => {
                  Ur.current = function(rr) {
                    const Sr = null === rr ? "none" : getComputedStyle(rr).transform,
                      Qr = new DOMMatrixReadOnly("none" === Sr ? void 0 : Sr);
                    return {
                      "--settle-y": `${Qr.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Qr.b,Qr.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Nr.current), bQ(), jr.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [fr("skyblockGame:forgeButton"), null !== nr && (0, pW.jsxs)("span", {
                  className: SW()("SkyblockForgeCost", {
                    Short: nr.coalShort
                  }),
                  children: [(0, pW.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, pW.jsx)(aW.d, {
                      itemName: qQ.e,
                      amount: 0
                    })
                  }), nr.coalCost]
                })]
              })]
            }), (0, pW.jsxs)("div", {
              className: SW()("SkyblockForgeDetails", {
                Named: null === nr || void 0 === nr ? void 0 : nr.named
              }),
              children: [(0, pW.jsx)("p", {
                className: SW()("SkyblockForgeLore", {
                  ArriveText: Kr
                }),
                title: null === nr || void 0 === nr ? void 0 : nr.lore,
                children: null === nr || void 0 === nr ? void 0 : nr.lore
              }), (0, pW.jsxs)("dl", {
                className: SW()("SkyblockForgeStats", {
                  ArriveText: Kr
                }),
                children: [null === nr && Oa.map((rr => (0, pW.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, pW.jsx)("dt", {
                    children: fr(rr)
                  }), (0, pW.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, rr))), null === nr || void 0 === nr ? void 0 : nr.stats.map((rr => (0, pW.jsxs)("div", {
                  className: SW()("SkyblockForgeStat", {
                    Better: rr.better
                  }),
                  children: [(0, pW.jsx)("dt", {
                    children: rr.label
                  }), (0, pW.jsx)("dd", {
                    children: rr.value
                  })]
                }, rr.label)))]
              }), (0, pW.jsx)("ul", {
                className: SW()("SkyblockForgeEffects", {
                  ArriveText: Kr
                }),
                children: null === nr || void 0 === nr ? void 0 : nr.effects.map((rr => (0, pW.jsx)("li", {
                  children: rr
                }, rr)))
              })]
            })]
          })]
        })
      })
    }
    var Ha = Qr(40205);
    const qa = "Doom Rivet",
      Ra = "Doom Crest",
      ga = {
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

    function Ca(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(sQ, Sr.getSnapshot()),
        Zr = KW();
      return Qr.enabled ? (0, pW.jsx)(Ha.c, {
        keys: ga,
        open: Qr.open,
        onDismiss: Sr.dismiss,
        wallet: [{
          itemName: qa,
          amount: Qr.rivetsOwned
        }, {
          itemName: Ra,
          amount: Qr.crestsOwned
        }],
        deals: Qr.deals.map((rr => ({
          ...rr,
          prices: [{
            itemName: qa,
            amount: rr.rivets,
            owned: Qr.rivetsOwned
          }, {
            itemName: Ra,
            amount: rr.crests,
            owned: Qr.crestsOwned
          }].filter((rr => {
            let {
              amount: Sr
            } = rr;
            return Sr > 0
          }))
        }))),
        rotatesAtMs: Qr.rotatesAtMs,
        status: Qr.status,
        pending: Qr.pending,
        boughtCount: Qr.boughtCount,
        onBuy: Sr.buy,
        panelRef: Zr,
        onKeyDown: eW
      }) : null
    }

    function Ma(rr) {
      let {
        phase: Sr,
        className: Qr
      } = rr;
      return (0, pW.jsx)("span", {
        className: SW()("SkyblockMoon", `Moon-${Sr}`, Qr),
        "aria-hidden": "true"
      })
    }

    function Ga(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(SZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)();
      return Qr.enabled ? (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: SW()("SkyblockPassageChip", Qr.open && "Open"),
          "aria-label": Zr("skyblockGame:passageChipLabel", {
            phase: Qr.phaseName
          }),
          title: Zr("skyblockGame:passageChipLabel", {
            phase: Qr.phaseName
          }),
          onMouseDown: rr => {
            rr.preventDefault()
          },
          onClick: Sr.toggle,
          children: (0, pW.jsx)(Ma, {
            phase: Qr.phase
          }, Qr.phase)
        })
      }) : null
    }

    function ka(rr) {
      let {
        fish: Sr
      } = rr;
      return (0, pW.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, pW.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, pW.jsx)(aW.d, {
            itemName: Sr.itemName,
            amount: 0
          })
        }), (0, pW.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Sr.displayName
          }), (0, pW.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Sr.where
          })]
        })]
      })
    }

    function Aa(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(SZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW();
      return Qr.enabled ? (0, pW.jsx)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, pW.jsx)(Ma, {
              phase: Qr.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Zr("skyblockGame:passageTitle")
              }), (0, pW.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Qr.phaseName
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Zr("skyblockGame:passageIntro")
          }), (0, pW.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, pW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, pW.jsx)("h3", {
                children: Zr("skyblockGame:passageVisiting")
              }), (0, pW.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Qr.visitors.map((rr => (0, pW.jsx)(ka, {
                  fish: rr
                }, rr.itemName)))
              })]
            }), (0, pW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Qr.resting && (0, pW.jsxs)(pW.Fragment, {
                children: [(0, pW.jsx)("h3", {
                  children: Zr("skyblockGame:passageResting")
                }), (0, pW.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, pW.jsx)(ka, {
                    fish: Qr.resting
                  })
                })]
              }), (0, pW.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, pW.jsx)(Ma, {
                  phase: Qr.nextPhase
                }), (0, pW.jsx)("span", {
                  children: Qr.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Va() {
      return (0, pW.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((rr => (0, pW.jsx)("i", {
          style: {
            "--sparkle-index": rr
          }
        }, rr)))
      })
    }

    function ia(rr) {
      var Sr;
      let {
        charm: Qr,
        view: Zr,
        controller: Wr
      } = rr;
      const {
        t: ar
      } = (0, fW.E)(), jr = Zr.shop, Ir = (null === (Sr = Zr.sparkle) || void 0 === Sr ? void 0 : Sr.id) === Qr.id;
      return (0, pW.jsxs)("li", {
        className: SW()("SkyblockLampLightCharm", Qr.owned && "Owned", Qr.socketed && "Socketed"),
        children: [Ir && (0, pW.jsx)(Va, {}, Zr.sparkle.count), (0, pW.jsx)("h4", {
          children: Qr.name
        }), (0, pW.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Qr.effect
        }), (0, pW.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Qr.lines.map((rr => (0, pW.jsxs)("li", {
            className: SW()("SkyblockLampLightOddsLine", "better" === rr.tone ? "Better" : "worse" === rr.tone ? "Worse" : "Same"),
            children: [(0, pW.jsx)("span", {
              className: "Before",
              children: rr.before
            }), (0, pW.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, pW.jsx)("span", {
              className: "After",
              children: rr.after
            })]
          }, rr.label)))
        }), (0, pW.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Qr.owned ? Qr.socketed ? (0, pW.jsxs)(pW.Fragment, {
            children: [(0, pW.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: ar("skyblockGame:lampLightSocketed")
            }), (0, pW.jsx)(nW.U, {
              disabled: !Zr.canCommand,
              ariaLabel: ar("skyblockGame:lampLightRemoveLabel", {
                charm: Qr.name
              }),
              onClick: () => {
                Wr.socket(null)
              },
              children: ar("skyblockGame:lampLightRemove")
            })]
          }) : (0, pW.jsx)(nW.h, {
            disabled: !Zr.canCommand || !jr.heldRod,
            ariaLabel: ar("skyblockGame:lampLightSocketLabel", {
              charm: Qr.name
            }),
            onClick: () => {
              Wr.socket(Qr.id)
            },
            children: ar("skyblockGame:lampLightSocket")
          }) : (0, pW.jsx)(nW.h, {
            disabled: !Zr.canCommand || !Qr.affordable,
            ariaLabel: ar("skyblockGame:lampLightBuyLabel", {
              item: Qr.name,
              cost: Qr.cost
            }),
            onClick: () => {
              Wr.buy(Qr.id)
            },
            children: Qr.cost
          })
        })]
      })
    }

    function wa(rr) {
      var Sr;
      let {
        tint: Qr,
        view: Zr,
        controller: Wr
      } = rr;
      const {
        t: ar
      } = (0, fW.E)();
      return (0, pW.jsxs)("li", {
        className: SW()("SkyblockLampLightTint", Qr.wearing && "Wearing"),
        style: {
          "--tint-colour": Qr.colour
        },
        children: [(null === (Sr = Zr.sparkle) || void 0 === Sr ? void 0 : Sr.id) === Qr.id && (0, pW.jsx)(Va, {}, Zr.sparkle.count), (0, pW.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, pW.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Qr.name
        }), Qr.wearing ? (0, pW.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: ar("skyblockGame:lampLightWearing")
        }) : (0, pW.jsx)(nW.h, {
          disabled: !Zr.canCommand || !Qr.owned && !Qr.affordable,
          ariaLabel: Qr.owned ? ar("skyblockGame:lampLightWearLabel", {
            tint: Qr.name
          }) : ar("skyblockGame:lampLightBuyLabel", {
            item: Qr.name,
            cost: Qr.cost
          }),
          onClick: () => {
            Qr.owned ? Wr.wearTint(Qr.id) : Wr.buy(Qr.id)
          },
          children: Qr.owned ? ar("skyblockGame:lampLightWear") : Qr.cost
        })]
      })
    }

    function ca(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(tZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = Qr.shop;
      return (0, pW.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, pW.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Qr.balance
          }), (0, pW.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Qr.releasing,
            className: SW()("SkyblockLampLightSwitch", Qr.releasing && "On"),
            disabled: Qr.releasing ? "ready" !== Qr.status : !Qr.canCommand,
            onClick: () => {
              Sr.setRelease(!Qr.releasing)
            },
            children: [(0, pW.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, pW.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Zr("skyblockGame:lampLightRelease")]
          }), (0, pW.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Zr("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Qr.notice && (0, pW.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Qr.notice
        }), null !== Wr && (0, pW.jsxs)(pW.Fragment, {
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, pW.jsx)("h3", {
              children: Zr("skyblockGame:lampLightCharms")
            }), (0, pW.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Wr.oddsFor
            }), (0, pW.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((rr => (0, pW.jsx)("button", {
                type: "button",
                "aria-pressed": Qr.situation === rr,
                className: SW()("SkyblockLampLightSituation", Qr.situation === rr && "Selected"),
                onClick: () => {
                  Sr.setSituation(rr)
                },
                children: Zr("open" === rr ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, rr)))
            })]
          }), !Wr.heldRod && (0, pW.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Zr("skyblockGame:lampLightHoldRod")
          }), (0, pW.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Wr.charms.map((rr => (0, pW.jsx)(ia, {
              charm: rr,
              view: Qr,
              controller: Sr
            }, rr.id)))
          }), (0, pW.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, pW.jsx)("h3", {
              children: Zr("skyblockGame:lampLightTints")
            })
          }), (0, pW.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, pW.jsxs)("li", {
              className: SW()("SkyblockLampLightTint", "Islands", Wr.wearingIslandColours && "Wearing"),
              children: [(0, pW.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, pW.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Zr("skyblockGame:lampLightIslandColours")
              }), Wr.wearingIslandColours ? (0, pW.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Zr("skyblockGame:lampLightWearing")
              }) : (0, pW.jsx)(nW.h, {
                disabled: !Qr.canCommand,
                ariaLabel: Zr("skyblockGame:lampLightWearLabel", {
                  tint: Zr("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Sr.wearTint(null)
                },
                children: Zr("skyblockGame:lampLightWear")
              })]
            }), Wr.tints.map((rr => (0, pW.jsx)(wa, {
              tint: rr,
              view: Qr,
              controller: Sr
            }, rr.id)))]
          })]
        })]
      })
    }

    function Fa(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(tZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)();
      return Qr.releasing ? (0, pW.jsx)(ZW.d, {
        children: (0, pW.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Sr.setRelease(!1)
          },
          children: [(0, pW.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, pW.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Zr("skyblockGame:lampLightReleasing"), " \xb7 ", Qr.balance]
          }), (0, pW.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Zr("skyblockGame:lampLightKeepCatches")
          }), null !== Qr.gained && (0, pW.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Qr.gained.text
          }, Qr.gained.count)]
        })
      }) : null
    }

    function oa(rr) {
      let {
        island: Sr,
        view: Qr,
        aim: Zr
      } = rr;
      const {
        t: Wr
      } = (0, fW.E)(), ar = Sr.featuredFish;
      return (0, pW.jsxs)("li", {
        className: SW()("SkyblockKeepersChairIsland", `Island-${Sr.id}`, Sr.favoured && "Aimed", !Sr.relit && "Dark"),
        children: [(0, pW.jsx)("h3", {
          children: Sr.name
        }), Sr.relit && null !== ar ? (0, pW.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Wr("skyblockGame:keepersChairTideNotice")
          }), (0, pW.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, pW.jsx)(aW.d, {
              itemName: ar.itemName,
              amount: 0
            })
          }), (0, pW.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: ar.displayName
          })]
        }) : (0, pW.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, pW.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Wr("skyblockGame:keepersChairDark")
          })
        }), Sr.relit && (Sr.favoured ? (0, pW.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Wr("skyblockGame:keepersChairAimed")
        }) : (0, pW.jsx)(nW.h, {
          className: "SkyblockKeepersChairAim",
          disabled: !Qr.canAim,
          ariaLabel: Wr("skyblockGame:keepersChairAimLabel", {
            island: Sr.name
          }),
          onClick: () => {
            Zr(Sr.id)
          },
          children: Wr("skyblockGame:keepersChairAim")
        }))]
      }, Sr.favoured ? Qr.aimedCount : 0)
    }

    function ba(rr) {
      let {
        controller: Sr,
        lampLight: Qr
      } = rr;
      const Zr = (0, EW.g)(IZ, Sr.getSnapshot()),
        Wr = (0, EW.g)(tZ, Qr.getSnapshot()),
        [ar, jr] = (0, Br.useState)("lamp"),
        {
          t: Ir
        } = (0, fW.E)(),
        fr = KW();
      if (!Zr.enabled) return null;
      const Er = "light" === ar && Wr.enabled;
      return (0, pW.jsx)(YW.b, {
        show: Zr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: SW()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Er && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: fr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Ir("skyblockGame:keepersChairTitle")
              }), (0, pW.jsx)("p", {
                children: Ir(Er ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              ariaLabel: Ir("skyblockGame:keepersChairClose"),
              onClick: Sr.dismiss
            })]
          }), Wr.enabled && (0, pW.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((rr => (0, pW.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === rr === Er,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === rr === Er ? "true" : void 0,
              className: SW()("SkyblockKeepersChairTab", "light" === rr === Er && "Selected"),
              onClick: () => {
                jr(rr)
              },
              children: [Ir("lamp" === rr ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === rr && (0, pW.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Wr.balance
              })]
            }, rr)))
          }), Er ? (0, pW.jsx)(ca, {
            controller: Qr
          }) : (0, pW.jsx)(Ja, {
            view: Zr,
            controller: Sr
          })]
        })
      })
    }

    function Ja(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)();
      return (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Sr.islands.map((rr => (0, pW.jsx)(oa, {
            island: rr,
            view: Sr,
            aim: Qr.aim
          }, rr.id)))
        }), null !== Sr.almanac && (0, pW.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Zr("skyblockGame:passageTitle")
          }), (0, pW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, pW.jsx)(Ma, {
              phase: Sr.almanac.phase
            }), Sr.almanac.phaseName]
          }), (0, pW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, pW.jsx)(Ma, {
              phase: Sr.almanac.nextPhase
            }), Sr.almanac.next]
          })]
        }), (0, pW.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Zr("skyblockGame:keepersChairFavour")
          }), Sr.aimed && (0, pW.jsx)(nW.U, {
            className: "SkyblockKeepersChairRest",
            disabled: !Sr.canAim,
            onClick: () => {
              Qr.aim(null)
            },
            children: Zr("skyblockGame:keepersChairRest")
          })]
        }), null !== Sr.status && (0, pW.jsx)("p", {
          className: SW()("SkyblockKeepersChairStatus", "refused" === Sr.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Sr.status.text
        })]
      })
    }

    function Da(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(EZ, Sr.getSnapshot());
      if (!Zr.enabled) return null;
      const Wr = Zr.freshCount > 0 ? Qr("skyblockGame:reachLogOpenNews", {
        count: Zr.freshCount
      }) : Qr("skyblockGame:reachLogOpen");
      return (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsxs)("button", {
          type: "button",
          className: SW()("SkyblockReachLogButton", Zr.freshCount > 0 && "HasNews", Zr.pending && "Pending"),
          "aria-label": Wr,
          title: Wr,
          onClick: Sr.ask,
          children: [Zr.news && (0, pW.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Zr.newsToken}`), (0, pW.jsx)("span", {
            className: SW()("SkyblockReachLogIcon", Zr.news && "Jump"),
            "aria-hidden": "true",
            children: (0, pW.jsx)(aW.d, {
              itemName: xZ,
              amount: 0
            })
          }, `icon:${Zr.newsToken}`), Zr.freshCount > 0 && (0, pW.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Zr.freshCount
          })]
        })
      })
    }

    function da(rr) {
      let {
        gift: Sr
      } = rr;
      return (0, pW.jsx)("li", {
        className: SW()("SkyblockRegularsGift", Sr.given && "Given"),
        children: Sr.text
      })
    }

    function sa(rr) {
      let {
        regular: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)();
      return (0, pW.jsxs)("li", {
        className: SW()("SkyblockRegularsCard", Sr.tagged ? "Tagged" : "Untagged", Sr.resting && "Resting"),
        children: [(0, pW.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Sr.fishName,
            children: (0, pW.jsx)(aW.d, {
              itemName: Sr.itemName,
              amount: 0
            })
          }), (0, pW.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, pW.jsx)("h3", {
              children: Sr.name
            }), (0, pW.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Sr.fishName
            })]
          })]
        }), (0, pW.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Sr.line
        }), (0, pW.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Sr.size
          }), Sr.tagged && (0, pW.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Sr.resting ? Qr("skyblockGame:regularsResting") : Sr.meetings
          })]
        }), (0, pW.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Sr.chance
        }), (0, pW.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Sr.gifts.map((rr => (0, pW.jsx)(da, {
            gift: rr
          }, rr.text)))
        }), Sr.history.length > 0 && (0, pW.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Sr.history.map(((rr, Sr) => (0, pW.jsx)("li", {
            children: rr
          }, Sr)))
        })]
      })
    }

    function ua(rr) {
      let {
        controller: Sr,
        island: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)(), Wr = (0, EW.g)(RZ, Sr.getSnapshot()), ar = Wr.islands.find((rr => rr.id === Qr));
      if (!Wr.enabled || void 0 === ar) return null;
      const jr = Zr("skyblockGame:regularsOpen");
      return (0, pW.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": jr,
        title: jr,
        onClick: () => {
          Sr.openIsland(Qr)
        },
        children: [(0, pW.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Zr("skyblockGame:regularsTitle")
        }), ar.regulars.map((rr => (0, pW.jsx)("span", {
          className: SW()("SkyblockRegularsStripIcon", rr.tagged && "Tagged"),
          title: rr.name,
          children: (0, pW.jsx)(aW.d, {
            itemName: rr.itemName,
            amount: 0
          })
        }, rr.id)))]
      })
    }

    function rj(rr) {
      var Sr;
      let {
        controller: Qr
      } = rr;
      const Zr = (0, EW.g)(RZ, Qr.getSnapshot()),
        {
          t: Wr
        } = (0, fW.E)(),
        ar = KW();
      if (!Zr.enabled) return null;
      const jr = null !== (Sr = Zr.islands.find((rr => rr.id === Zr.selected))) && void 0 !== Sr ? Sr : null;
      return (0, pW.jsx)(YW.b, {
        show: Zr.open,
        close: Qr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: ar,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Wr("skyblockGame:regularsTitle")
              }), (0, pW.jsx)("p", {
                children: Wr("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Qr.dismiss
            })]
          }), (0, pW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Zr.islands.map((rr => {
              const Sr = rr.id === Zr.selected;
              return (0, pW.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Sr,
                "data-pad-tab": !0,
                "data-pad-selected": Sr ? "true" : void 0,
                className: SW()("SkyblockReachLogTab", `Island-${rr.id}`, Sr && "Selected", rr.charm.given && "GoldPage"),
                onClick: () => {
                  Qr.selectIsland(rr.id)
                },
                children: (0, pW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: rr.name
                })
              }, rr.id)
            }))
          }), (0, pW.jsxs)("div", {
            className: SW()("SkyblockRegularsPage", null !== jr && `Island-${jr.id}`),
            role: "tabpanel",
            children: [(0, pW.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Wr("skyblockGame:regularsHow")
            }), null !== jr && (0, pW.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: jr.regulars.map((rr => (0, pW.jsx)(sa, {
                regular: rr
              }, rr.id)))
            })]
          }), null !== jr && (0, pW.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, pW.jsx)("span", {
              className: SW()("SkyblockRegularsCharm", jr.charm.given && "Given"),
              children: jr.charm.text
            })
          })]
        })
      })
    }
    const Sj = [{
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
      Qj = Array.from({
        length: 6
      }, ((rr, Sr) => ({
        "--x": `${(88*(.618034*Sr%1)).toFixed(1)}%`,
        "--y": `${(10+37*Sr%70).toFixed(1)}%`,
        "--size": 7 + Sr % 3 * 3 + "rem",
        "--drift-x": 3 * (Sr % 3 - 1) + "rem",
        "--drift-y": 2 * (Sr % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Sr % 4 * 3 + "s",
        "--delay": 2.5 * -Sr + "s"
      }))),
      Zj = Array.from({
        length: 14
      }, ((rr, Sr) => ({
        "--left": `${(3+94*((.618034*Sr+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Sr % 4 * 2 + "px",
        "--sway": Sr % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Sr%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Sr%12).toFixed(2)}s`
      }))),
      Wj = (0, Br.memo)((function(rr) {
        let {
          island: Sr
        } = rr;
        return (0, pW.jsxs)("div", {
          className: SW()("SkyblockReachLogDepths", null !== Sr && `Island-${Sr}`),
          "aria-hidden": "true",
          children: [Sj.map(((rr, Sr) => (0, pW.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: rr
          }, `shaft${Sr}`))), Qj.map(((rr, Sr) => (0, pW.jsx)("span", {
            className: SW()("SkyblockReachLogMote", Sr % 2 === 1 && "Violet"),
            style: rr
          }, `mote${Sr}`))), Zj.map(((rr, Sr) => (0, pW.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: rr
          }, `bubble${Sr}`)))]
        })
      })),
      aj = 100;

    function jj(rr) {
      let {
        view: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)();
      if (null === Sr || 0 === Sr.total) return null;
      const Zr = aj * Sr.aspect,
        Wr = Qr("skyblockGame:hiddenWatersCount", {
          found: Sr.found,
          total: Sr.total
        });
      return (0, pW.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Qr("skyblockGame:hiddenWatersTitle")}: ${Wr}`,
        children: [(0, pW.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Zr}`,
          "aria-hidden": "true",
          children: [Sr.islands.map(((rr, Sr) => (0, pW.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (rr.left + rr.width / 2) * aj,
            cy: (rr.top + rr.height / 2) * Zr,
            rx: rr.width / 2 * aj,
            ry: rr.height / 2 * Zr
          }, Sr))), Sr.pins.map(((rr, Sr) => (0, pW.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: rr.left * aj,
            cy: rr.top * Zr,
            r: 13
          }, Sr)))]
        }), (0, pW.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, pW.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Qr("skyblockGame:hiddenWatersTitle")
          }), (0, pW.jsx)("span", {
            className: Sr.found === Sr.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Wr
          })]
        })]
      })
    }

    function Ij(rr) {
      let {
        view: Sr,
        island: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)(), Wr = null === Sr || void 0 === Sr ? void 0 : Sr.glimpses.get(Qr);
      return void 0 === Wr || 0 === Wr.length ? null : (0, pW.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, pW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Zr("skyblockGame:hiddenWatersGlimpsed")
        }), (0, pW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Wr.map((rr => (0, pW.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, pW.jsx)(aW.d, {
              itemName: rr,
              amount: 0
            })
          }, rr)))
        })]
      })
    }
    const fj = ["Bronze", "Silver", "Gold"],
      Ej = [{
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
      pj = Ej.slice(0, 2);

    function xj(rr) {
      return rr ? Ej : pj
    }

    function mj(rr) {
      let {
        fish: Sr,
        letGoShown: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)();
      return (0, pW.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [fj.map(((rr, Qr) => {
          const Wr = Qr < Sr.marks;
          return (0, pW.jsx)("span", {
            className: SW()("SkyblockReachLogPip", rr, Wr && "Earned", Wr && Sr.fresh && Qr === Sr.marks - 1 && "Newest"),
            title: Zr(pZ[Qr])
          }, rr)
        })), (0, pW.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), xj(Qr).map(((rr, Qr) => (0, pW.jsx)("span", {
          className: SW()("SkyblockReachLogRibbon", rr.className, !0 === Sr.ribbons[Qr] && "Earned"),
          title: Zr(rr.titleKey)
        }, rr.className)))]
      })
    }

    function Nj(rr) {
      let {
        letGoShown: Sr,
        haloShown: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)();
      return (0, pW.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, pW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Zr("skyblockGame:reachLogMarks"),
          children: [(0, pW.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Zr("skyblockGame:reachLogLegendMarks")]
        }), xj(Sr).map((rr => (0, pW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Zr(rr.titleKey),
          children: [(0, pW.jsx)("span", {
            className: SW()("SkyblockReachLogRibbon", rr.className, "Earned")
          }), Zr(rr.legendKey)]
        }, rr.className))), (0, pW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Zr("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, pW.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Zr("skyblockGame:reachLogLegendGlimmer")]
        }), Qr && (0, pW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Zr("skyblockGame:reachLogHaloTitle"),
          children: [(0, pW.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Zr("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Uj(rr) {
      let {
        returner: Sr
      } = rr;
      return (0, pW.jsxs)("div", {
        className: SW()("SkyblockReachLogReturner", Sr.back && "Back"),
        children: [(0, pW.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, pW.jsx)(aW.d, {
            itemName: Sr.itemName,
            amount: 0
          })
        }), (0, pW.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Sr.line
        })]
      })
    }

    function tj(rr) {
      let {
        fish: Sr,
        letGoShown: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fW.E)();
      return (0, pW.jsxs)("li", {
        className: SW()("SkyblockReachLogCard", Sr.caught ? "Caught" : "Unknown", Sr.marks >= 3 && "GoldCard", Sr.fresh && "Fresh", Sr.visitor && "Visitor"),
        children: [Sr.visitor && (0, pW.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Zr("skyblockGame:reachLogVisitor")
        }), Sr.fresh && Array.from({
          length: 4
        }, ((rr, Sr) => (0, pW.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Sr))), (0, pW.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Sr.halo && (0, pW.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Zr("skyblockGame:reachLogHaloTitle")
          }), (0, pW.jsx)(aW.d, {
            itemName: Sr.itemName,
            amount: 0
          }), Sr.glimmer && (0, pW.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Zr("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, pW.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Sr.name
        }), (0, pW.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Sr.chance
        }), (0, pW.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Sr.best
        }), (0, pW.jsx)(mj, {
          fish: Sr,
          letGoShown: Qr
        })]
      })
    }

    function hj(rr) {
      let {
        page: Sr,
        letGoShown: Qr,
        hiddenWaters: Zr
      } = rr;
      const {
        t: Wr
      } = (0, fW.E)();
      return Sr.awake ? (0, pW.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Sr.fish.map((rr => (0, pW.jsx)(tj, {
          fish: rr,
          letGoShown: Qr
        }, rr.itemName)))
      }) : (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Wr("skyblockGame:reachLogAsleep")
        }), (0, pW.jsx)(Ij, {
          view: Zr,
          island: Sr.id
        })]
      })
    }

    function zj(rr) {
      var Sr, Qr;
      let {
        controller: Zr,
        regulars: Wr,
        hiddenWaters: ar
      } = rr;
      const jr = (0, EW.g)(EZ, Zr.getSnapshot()),
        Ir = function(rr) {
          return (0, EW.g)(kZ, rr.getSnapshot())
        }(ar),
        fr = (0, EW.g)(RZ, Wr.getSnapshot()),
        {
          t: Er
        } = (0, fW.E)(),
        pr = KW();
      if (!jr.enabled) return null;
      const xr = null !== (Sr = jr.pages.find((rr => rr.id === jr.selected))) && void 0 !== Sr ? Sr : null;
      return (0, pW.jsx)(YW.b, {
        show: jr.open,
        close: Zr.dismiss,
        togglePointerLock: !1,
        className: SW()("SkyblockSkillsOverlay", fr.open && "SkyblockReachLogUnderLedger"),
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: pr,
          onKeyDown: eW,
          children: [(0, pW.jsx)(Wj, {
            island: null !== (Qr = null === xr || void 0 === xr ? void 0 : xr.id) && void 0 !== Qr ? Qr : null
          }), (0, pW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Er("skyblockGame:reachLogTitle")
              }), (0, pW.jsx)("p", {
                children: Er("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, pW.jsx)(jj, {
              view: Ir
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Zr.dismiss
            })]
          }), (0, pW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: jr.pages.map((rr => {
              const Sr = rr.id === jr.selected,
                Qr = rr.fish.some((rr => rr.fresh));
              return (0, pW.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Sr,
                "data-pad-tab": !0,
                "data-pad-selected": Sr ? "true" : void 0,
                className: SW()("SkyblockReachLogTab", `Island-${rr.id}`, Sr && "Selected", !rr.awake && "Asleep", rr.gold && "GoldPage", Qr && "HasNews"),
                onClick: () => {
                  Zr.selectPage(rr.id)
                },
                children: [(0, pW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: rr.name
                }), rr.awake && (0, pW.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Er("skyblockGame:reachLogCaughtCount", {
                    caught: rr.caught,
                    total: rr.total
                  })
                })]
              }, rr.id)
            }))
          }), (0, pW.jsxs)("div", {
            className: SW()("SkyblockReachLogPage", null !== xr && `Island-${xr.id}`),
            role: "tabpanel",
            children: [null !== xr && (0, pW.jsx)(hj, {
              page: xr,
              letGoShown: jr.letGoShown,
              hiddenWaters: Ir
            }), !0 === (null === xr || void 0 === xr ? void 0 : xr.awake) && null !== xr.returner && (0, pW.jsx)(Uj, {
              returner: xr.returner
            }), !0 === (null === xr || void 0 === xr ? void 0 : xr.awake) && (0, pW.jsx)(ua, {
              controller: Wr,
              island: xr.id
            })]
          }), (0, pW.jsx)("footer", {
            className: SW()("SkyblockReachLogFooter", null !== xr && `Island-${xr.id}`, !0 === (null === xr || void 0 === xr ? void 0 : xr.gold) && "GoldPage"),
            children: !0 === (null === xr || void 0 === xr ? void 0 : xr.gold) ? (0, pW.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Er("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, pW.jsxs)(pW.Fragment, {
              children: [(0, pW.jsx)(Nj, {
                letGoShown: jr.letGoShown,
                haloShown: !0 === (null === xr || void 0 === xr ? void 0 : xr.fish.some((rr => rr.halo)))
              }), (0, pW.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Er("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Yj = Qr(5642);

    function nj(rr) {
      let {
        conversation: Sr,
        completedLabel: Qr
      } = rr;
      return (0, pW.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, pW.jsxs)("header", {
          children: [(0, pW.jsx)("h3", {
            children: Sr.questName
          }), Sr.completed && (0, pW.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Qr
          })]
        }), Sr.lines.map((rr => (0, pW.jsx)(Yj.c, {
          display: rr.display
        }, rr.key)))]
      })
    }

    function ej(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(VZ, Sr.getSnapshot()), Wr = KW();
      if (!Zr.enabled) return null;
      const ar = !Zr.loading && 0 === Zr.conversations.length;
      return (0, pW.jsx)(YW.b, {
        show: Zr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Qr("skyblockDialogue:title")
              }), (0, pW.jsx)("p", {
                children: Qr("skyblockDialogue:intro")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsxs)("div", {
            className: SW()("SkyblockDialogueBody", {
              SingleColumn: null !== Zr.questFocus || 0 === Zr.characters.length
            }),
            children: [null === Zr.questFocus && Zr.characters.length > 0 && (0, pW.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Zr.characters.map((rr => (0, pW.jsx)(nW.h, {
                className: SW()("SkyblockDialogueCharacter", {
                  Selected: rr.selected
                }),
                onClick: () => {
                  Sr.selectCharacter(rr.id)
                },
                children: (0, pW.jsx)(jW.c, {
                  text: rr.styling
                })
              }, rr.id)))
            }), (0, pW.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Zr.questFocus && (0, pW.jsx)(nW.h, {
                className: "SkyblockDialogueBack",
                onClick: Sr.showCharacters,
                children: Qr("skyblockDialogue:allCharacters")
              }), Zr.loading && (0, pW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Qr("skyblockDialogue:loading")
              }), ar && (0, pW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Qr(null === Zr.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Zr.conversations.map((rr => (0, pW.jsx)(nj, {
                conversation: rr,
                completedLabel: Zr.completedLabel
              }, rr.questId)))]
            })]
          })]
        })
      })
    }

    function Kj(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(oZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW();
      return Qr.enabled ? (0, pW.jsx)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Zr("skyblockGame:autographBook")
              }), (0, pW.jsx)("p", {
                children: Zr("skyblockGame:autographBookIntro")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              onClick: Sr.dismiss
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, pW.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, pW.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, pW.jsx)("strong", {
                  children: Qr.total
                }), (0, pW.jsx)("span", {
                  children: Zr("skyblockGame:autographTotal")
                })]
              }), (0, pW.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, pW.jsx)("strong", {
                  children: Qr.rankTotal
                }), (0, pW.jsx)("span", {
                  children: Zr("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Qr.entries.length ? (0, pW.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Zr("skyblockGame:autographBookEmpty")
            }) : (0, pW.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Qr.entries.map((rr => (0, pW.jsxs)("li", {
                className: SW()("SkyblockAutograph", {
                  Ranked: null !== rr.rank
                }),
                style: null === rr.rank ? void 0 : {
                  color: rr.rank.colour
                },
                children: [null !== rr.rank && (0, pW.jsx)(AW.c, {
                  className: "SkyblockAutographRankIcon",
                  name: rr.rank.icon,
                  kit: (0, AW.e)(rr.rank.icon)
                }), (0, pW.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, pW.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: rr.name
                  }), (0, pW.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== rr.rank && (0, pW.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: rr.rank.label
                    }), (0, pW.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: rr.signedOn
                    })]
                  })]
                })]
              }, rr.key)))
            })]
          })]
        })
      }) : null
    }
    const yj = (0, Br.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        return (0, pW.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Sr.display.mountWaypoint,
          children: [(0, pW.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, pW.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, pW.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, pW.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, pW.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, pW.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Bj = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Tj(rr) {
      return "next" === rr.phase ? "\u2192" : Bj[rr.kind]
    }
    const vj = (0, Br.memo)((function(rr) {
      let {
        controller: Sr,
        display: Qr
      } = rr;
      const Zr = (0, EW.g)(cS, Sr.getNotificationSnapshot()),
        [Wr, ar] = (0, Br.useState)(!1);
      return (0, EW.c)("qteStateUpdated", (rr => {
        ar(rr.isActive)
      })), (0, pW.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Wr ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Zr && (0, pW.jsxs)("div", {
          className: `SkyblockQuestNotification ${Zr.kind} ${Zr.phase}`,
          style: {
            "--quest-notification-duration": `${Zr.durationMs}ms`,
            ...Zr.accent && {
              "--quest-notification-accent": Zr.accent
            }
          },
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Zr.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, pW.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Tj(Zr)
            }), Zr.iconItem && (0, pW.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, pW.jsx)(aW.d, {
                itemName: Zr.iconItem,
                amount: 0
              })
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, pW.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Zr.title
            }), (0, pW.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, pW.jsx)(qW.e, {
                text: Zr.name
              })
            }), Zr.description && (0, pW.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, pW.jsx)(qW.e, {
                text: Zr.description
              })
            }), Zr.reward && (0, pW.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, pW.jsx)(qW.e, {
                text: Zr.reward
              })
            })]
          })]
        }, Zr.token), (null === Zr || void 0 === Zr ? void 0 : Zr.waypointNameKey) && (0, pW.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Zr.waypointNameKey,
          "data-notification-token": Zr.token,
          ref: Qr.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Zr.token}`)]
      })
    }));

    function Oj(rr) {
      const Sr = parseInt(rr.replace("#", ""), 16);
      return `${Sr>>16&255}, ${Sr>>8&255}, ${255&Sr}`
    }
    const Lj = (0, Br.memo)((function(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(zQ, Sr.getSnapshot());
      if (!Zr) return null;
      const Wr = "arrival" === Zr.phase;
      return (0, pW.jsxs)("div", {
        className: SW()("SkyblockPortalTransit", {
          Departure: !Wr,
          Arrival: Wr
        }),
        style: {
          "--portal-rgb": Oj(Zr.colour),
          "--portal-duration": `${Zr.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, pW.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, pW.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Sr.finishArrival(Zr.token)
          }
        }), (0, pW.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, pW.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Wr && (0, pW.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Qr("skyblockGame:portalTransitHeading")
          }), (0, pW.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Qr(Zr.zoneNameKey)
          })]
        })]
      }, Zr.token)
    }));

    function lj() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Xj() {
      const rr = document.querySelector(".SkyblockHudCoins"),
        Sr = null === rr || void 0 === rr ? void 0 : rr.getBoundingClientRect();
      return Sr && Sr.width > 0 ? {
        x: Sr.left + Math.min(Sr.width, 24) / 2,
        y: Sr.top + Sr.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Pj(rr) {
      return {
        x: rr.left + rr.width / 2,
        y: rr.top + rr.height / 2
      }
    }

    function Hj() {
      var rr;
      const Sr = null === (rr = document.querySelector(".HotBar")) || void 0 === rr ? void 0 : rr.getBoundingClientRect();
      return Sr && Sr.width > 0 ? Pj(Sr) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function qj(rr) {
      let {
        items: Sr,
        origins: Qr,
        target: Zr
      } = rr;
      return (0, pW.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Sr.map(((rr, Sr) => {
          const Wr = Qr[Sr];
          return (0, pW.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Wr.x}px`,
              top: `${Wr.y}px`,
              "--item-dx": Zr.x - Wr.x + "px",
              "--item-dy": Zr.y - Wr.y + "px",
              "--item-delay": 2e3 + 160 * Sr + "ms",
              "--item-flight": "700ms"
            },
            children: (0, pW.jsx)(aW.d, {
              itemName: rr.dailyRewardItemName,
              amount: 0
            })
          }, rr.dailyRewardItemName)
        }))
      })
    }

    function Rj(rr, Sr) {
      const Qr = -Math.PI / 2 + 1.25 * (rr / (Sr - 1) * 2 - 1),
        Zr = 70 + rr % 3 * 22;
      return {
        x: Math.cos(Qr) * Zr,
        y: Math.sin(Qr) * Zr * .7
      }
    }

    function gj(rr) {
      let {
        origin: Sr,
        target: Qr,
        count: Zr
      } = rr;
      const Wr = [];
      for (let ar = 0; ar < Zr; ar++) {
        const rr = Rj(ar, Zr);
        Wr.push((0, pW.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Sr.x}px`,
            top: `${Sr.y}px`,
            "--coin-bx": `${rr.x}px`,
            "--coin-by": `${rr.y}px`,
            "--coin-dx": Qr.x - Sr.x + "px",
            "--coin-dy": Qr.y - Sr.y + "px",
            "--coin-delay": `${BQ(ar,Zr)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, pW.jsx)(aW.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, ar))
      }
      return (0, pW.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Wr
      })
    }

    function Cj(rr) {
      let {
        day: Sr
      } = rr;
      const Qr = Tr[Sr - 1];
      return (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, pW.jsx)(aW.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, IW.i)(Qr.dailyRewardCoins)]
        }), Qr.dailyRewardItems.map((rr => (0, pW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, pW.jsx)(aW.d, {
            itemName: rr.dailyRewardItemName,
            amount: 0
          }), "\xd7", rr.dailyRewardItemAmount]
        }, rr.dailyRewardItemName)))]
      })
    }

    function Mj(rr) {
      let {
        day: Sr
      } = rr;
      const Qr = Or(Sr);
      return (0, pW.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Tr.map(((rr, Zr) => {
          const Wr = Zr + 1;
          return (0, pW.jsxs)("li", {
            className: SW()("SkyblockDailyRewardTile", {
              Claimed: Wr < Sr && Wr !== Qr,
              Today: Wr === Sr,
              Tomorrow: Wr === Qr,
              Jackpot: Wr === vr
            }),
            children: [(0, pW.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Wr
            }), (0, pW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, pW.jsx)(aW.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, IW.i)(rr.dailyRewardCoins)]
            }), rr.dailyRewardItems.map((rr => (0, pW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, pW.jsx)(aW.d, {
                itemName: rr.dailyRewardItemName,
                amount: 0
              }), "\xd7", rr.dailyRewardItemAmount]
            }, rr.dailyRewardItemName)))]
          }, Wr)
        }))
      })
    }

    function Gj(rr) {
      let {
        view: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, Br.useRef)(null), Wr = (0, Br.useRef)(null), [ar, jr] = (0, Br.useState)(null);
      (0, Br.useLayoutEffect)((() => {
        var rr;
        const Sr = null === (rr = Zr.current) || void 0 === rr ? void 0 : rr.getBoundingClientRect();
        if (Sr) {
          var Qr, ar;
          const rr = Array.from(null !== (Qr = null === (ar = Wr.current) || void 0 === ar ? void 0 : ar.children) && void 0 !== Qr ? Qr : [], (rr => Pj(rr.getBoundingClientRect())));
          jr({
            origin: Pj(Sr),
            target: Xj(),
            itemOrigins: rr,
            itemTarget: Hj()
          })
        }
      }), []);
      const Ir = Or(Sr.day),
        fr = function(rr, Sr) {
          const [Qr, Zr] = (0, Br.useState)((() => lj() ? rr : 0));
          return (0, Br.useEffect)((() => {
            if (lj()) return;
            const Qr = performance.now();
            let Wr = 0;
            const ar = jr => {
              const Ir = Math.min(Math.max((jr - Qr) / Sr, 0), 1);
              Zr(Math.round(rr * (1 - (1 - Ir) ** 3))), Ir < 1 && (Wr = requestAnimationFrame(ar))
            };
            return Wr = requestAnimationFrame(ar), () => {
              cancelAnimationFrame(Wr)
            }
          }), [rr, Sr]), Qr
        }(Sr.coins, 450);
      return (0, pW.jsxs)("div", {
        className: SW()("SkyblockDailyReward", {
          Jackpot: Sr.day === vr
        }),
        style: {
          "--daily-duration": `${Sr.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, pW.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, pW.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, pW.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Qr("skyblockGame:dailyRewardTitle")
            }), (0, pW.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Qr("skyblockGame:dailyRewardDay", {
                day: String(Sr.day)
              })
            })]
          }), (0, pW.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Zr,
            children: [(0, pW.jsx)(aW.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, pW.jsxs)("span", {
              children: ["+", (0, IW.i)(fr)]
            })]
          }), Sr.items.length > 0 && (0, pW.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Wr,
            children: Sr.items.map((rr => (0, pW.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, pW.jsx)(aW.d, {
                itemName: rr.dailyRewardItemName,
                amount: 0
              }), "\xd7", rr.dailyRewardItemAmount]
            }, rr.dailyRewardItemName)))
          }), (0, pW.jsx)(Mj, {
            day: Sr.day
          }), (0, pW.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Qr("skyblockGame:dailyRewardComeBack"), (0, pW.jsx)(Cj, {
              day: Ir
            })]
          })]
        }), null !== ar && (0, pW.jsx)(gj, {
          origin: ar.origin,
          target: ar.target,
          count: Sr.flyingCoins
        }), null !== ar && ar.itemOrigins.length === Sr.items.length && (0, pW.jsx)(qj, {
          items: Sr.items,
          origins: ar.itemOrigins,
          target: ar.itemTarget
        })]
      })
    }
    const kj = (0, Br.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        const Qr = (0, EW.g)(eQ, Sr.getSnapshot());
        return Qr ? (0, pW.jsx)(Gj, {
          view: Qr
        }, Qr.token) : null
      })),
      Aj = "Gold Coin";

    function Vj(rr) {
      return 650 + 220 * rr
    }

    function ij(rr) {
      return {
        "--letter-delay": `${Vj(rr)}ms`,
        "--letter-land": `${Vj(rr)+300}ms`
      }
    }

    function wj(rr) {
      let {
        letterCount: Sr
      } = rr;
      return (0, pW.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, pW.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, pW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, pW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Sr
        }, ((rr, Sr) => (0, pW.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: ij(Sr),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Sr)))]
      })
    }

    function cj(rr) {
      var Sr, Qr, Zr;
      let {
        letter: Wr,
        index: ar
      } = rr;
      const {
        t: jr
      } = (0, fW.E)(), Ir = null !== (Sr = null === (Qr = Wr.items[0]) || void 0 === Qr ? void 0 : Qr.itemName) && void 0 !== Sr ? Sr : Aj;
      return (0, pW.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: ij(ar),
        children: [(0, pW.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, pW.jsx)(aW.d, {
            itemName: Ir,
            amount: 0
          })
        }), (0, pW.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: jr(Wr.reasonKey, null !== (Zr = Wr.reasonParams) && void 0 !== Zr ? Zr : void 0)
        }), (0, pW.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Wr.coins > 0 && (0, pW.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, pW.jsx)(aW.d, {
              itemName: Aj,
              amount: 0
            }), "+", (0, IW.i)(Wr.coins)]
          }), Wr.items.map(((rr, Sr) => (0, pW.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, pW.jsx)(aW.d, {
              itemName: rr.itemName,
              amount: 0
            }), rr.label, " \xd7", rr.amount]
          }, Sr)))]
        })]
      })
    }

    function Fj(rr) {
      let {
        view: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)();
      return (0, pW.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Sr.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Vj(Sr.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, pW.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, pW.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, pW.jsx)(wj, {
              letterCount: Sr.letters.length
            }), (0, pW.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Qr("skyblockGame:mailboxTitle")
            })]
          }), (0, pW.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Sr.letters.map(((rr, Sr) => (0, pW.jsx)(cj, {
              letter: rr,
              index: Sr
            }, Sr)))
          }), Sr.more > 0 && (0, pW.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Qr("skyblockGame:mailboxMore", {
              count: String(Sr.more)
            })
          })]
        })
      })
    }
    const oj = (0, Br.memo)((function(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(vQ, Sr.getSnapshot());
      return Qr ? (0, pW.jsx)(Fj, {
        view: Qr
      }, Qr.token) : null
    }));

    function bj(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(zZ, Sr.getSnapshot());
      if (null === Zr) return null;
      const Wr = Zr.fullSet ? "empty" === Zr.fuelState ? {
        text: Qr("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Qr("skyblockGame:magmawardHudFullSet", {
          worn: String(Zr.wornCount)
        }),
        tone: "partial"
      };
      return (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsxs)("div", {
          className: SW()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Zr.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Zr.fullSet,
            "SkyblockMagmawardHud-armed": Zr.fullSet && "empty" !== Zr.fuelState
          }),
          children: [null !== Zr.flare && (0, pW.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Zr.flare}`
          }, `flare:${Zr.flareToken}`), (0, pW.jsx)("div", {
            className: SW()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Zr.setLit
            }),
            children: Zr.pieces.map(((rr, Sr) => (0, pW.jsx)("div", {
              className: SW()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: rr.worn,
                SkyblockMagmawardPieceJustWorn: rr.justWorn
              }),
              children: (0, pW.jsx)(aW.d, {
                itemName: rr.itemName,
                amount: 0
              })
            }, `${Sr}:${rr.wornToken}`)))
          }, `pieces:${Zr.setLitToken}`), (0, pW.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, pW.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, pW.jsxs)("div", {
              className: SW()("SkyblockMagmawardFuelCounter", Zr.pulse && `SkyblockMagmawardFuelCounter-${Zr.pulse}`),
              children: [(0, pW.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, pW.jsx)(aW.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, pW.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Zr.fuel
              })]
            }, `counter:${Zr.pulseToken}`), "burn" === Zr.pulse && (0, pW.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Zr.pulseToken}`)]
          }), Wr && (0, pW.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Wr.tone} SmallTextBold`,
            children: Wr.text
          })]
        })
      })
    }

    function Jj(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr,
        selectedLanguage: Zr
      } = (0, fW.E)(), Wr = (0, EW.g)(nZ, Sr.getSnapshot());
      return null === Wr ? null : (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsxs)("div", {
          className: SW()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Wr.inRange
          }),
          style: {
            "--glowtide-colour": Wr.colour
          },
          "aria-label": Qr("skyblockGame:glowtideChipLabel"),
          children: [(0, pW.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Wr.inRange ? (0, pW.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Qr("skyblockGame:glowtideChipInRange")
          }, `call:${Wr.inRangeToken}`) : (0, pW.jsxs)(pW.Fragment, {
            children: [(0, pW.jsx)("div", {
              ref: Sr.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, pW.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Qr("skyblockGame:waypointDistance", {
                distance: er(Wr.distance, Zr.code)
              })
            })]
          })]
        })
      })
    }

    function Dj(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(KZ, Sr.getSnapshot());
      return null === Zr ? null : (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsxs)("div", {
          className: SW()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Zr.full
          }),
          "aria-label": Qr("skyblockGame:glowMeterLabel", {
            fill: String(Zr.fill),
            sx: String(Zr.sx)
          }),
          children: [Zr.burst && (0, pW.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Zr.burstToken}`), (0, pW.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, pW.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Zr.ratio})`
              }
            }), Zr.gained && (0, pW.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Zr.gainToken}`), Zr.full && Array.from({
              length: 5
            }, ((rr, Sr) => (0, pW.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Sr)))]
          }), Zr.full && Zr.rares.map((rr => (0, pW.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, pW.jsx)(aW.d, {
              itemName: rr,
              amount: 0
            })
          }, rr))), Zr.ready && (0, pW.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, pW.jsx)("span", {
              children: Qr("skyblockGame:glowMeterReady")
            })
          }, `ready:${Zr.fullToken}`)]
        })
      })
    }

    function dj(rr) {
      let {
        controller: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fW.E)(), Zr = (0, EW.g)(BZ, Sr.getSnapshot());
      if (null === Zr) return null;
      const Wr = "waiting" === Zr.phase,
        ar = {
          animationDuration: `${Zr.waitMs}ms`,
          animationDelay: -Zr.elapsedMs + "ms"
        },
        jr = Wr ? void 0 : {
          animationDuration: `${Zr.waitMs}ms`
        };
      return (0, pW.jsxs)("div", {
        className: Wr ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Wr && (0, pW.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((rr, Sr) => (0, pW.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Sr))), (0, pW.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: ar
          }), (0, pW.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, pW.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, pW.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: ar
            })]
          }), (0, pW.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, pW.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: jr,
          children: Qr(Zr.line)
        }, Zr.lineIndex)]
      }, Zr.token)
    }

    function sj(rr) {
      let {
        chart: Sr,
        showHere: Qr,
        className: Zr
      } = rr;
      return (0, pW.jsx)("div", {
        className: SW()("SkyblockTideChartGrid", Zr, null !== Sr.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Sr.cells.map(((rr, Zr) => {
          const Wr = 0 !== (Sr.pulseCells & 1 << Zr),
            ar = Sr.castCell === Zr;
          return (0, pW.jsx)("span", {
            className: SW()("SkyblockTideChartCell", `Cell-${rr}`, Wr && "Pulse", ar && "Cast", Qr && Sr.hereCell === Zr && "Here")
          }, `${Zr}:${Wr?`p${Sr.pulseToken}`:""}:${ar?`c${Sr.castToken}`:""}`)
        }))
      })
    }

    function uj(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(vZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = Qr.chip;
      if (!Qr.enabled || null === Wr) return null;
      const ar = Zr("skyblockGame:tideChartsChipLabel", {
        island: Wr.islandName,
        lit: String(Wr.lit),
        ink: String(Wr.ink)
      });
      return (0, pW.jsx)(ZW.d, {
        placement: "statBars",
        children: (0, pW.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: SW()("SkyblockTideChartsChip", Qr.open && "Open", null !== Wr.pictureName && "Complete"),
          "aria-label": ar,
          title: ar,
          onMouseDown: rr => {
            rr.preventDefault()
          },
          onClick: Sr.toggle,
          children: [(0, pW.jsx)(sj, {
            chart: Wr,
            showHere: !1,
            className: "Mini"
          }), (0, pW.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Wr.lit, "/", Wr.ink]
          })]
        })
      })
    }

    function rI(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, EW.g)(vZ, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, fW.E)(),
        Wr = KW(),
        ar = Qr.card;
      return Qr.enabled && null !== ar ? (0, pW.jsx)(YW.b, {
        show: Qr.open,
        close: Sr.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, pW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Wr,
          onKeyDown: eW,
          children: [(0, pW.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, pW.jsxs)("div", {
              children: [(0, pW.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Zr("skyblockGame:tideChartsTitle")
              }), (0, pW.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Zr("skyblockGame:tideChartsIntro")
              })]
            }), (0, pW.jsx)(nW.l, {
              padIgnore: !0,
              ariaLabel: Zr("skyblockGame:tideChartsClose"),
              onClick: Sr.dismiss
            })]
          }), Qr.tabs.length > 1 && (0, pW.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Zr("skyblockGame:tideChartsIslands"),
            children: Qr.tabs.map((rr => (0, pW.jsx)("button", {
              type: "button",
              className: SW()("SkyblockTideChartsTab", rr.selected && "Selected"),
              "aria-pressed": rr.selected,
              onClick: () => {
                Sr.eN(rr.island)
              },
              children: rr.name
            }, rr.island)))
          }), (0, pW.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, pW.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": ar.gridLabel,
              children: (0, pW.jsx)(sj, {
                chart: ar,
                showHere: !0,
                className: "Large"
              })
            }), (0, pW.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, pW.jsx)("h3", {
                children: ar.islandName
              }), (0, pW.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: ar.litText
              }), null === ar.pictureName ? (0, pW.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Zr("skyblockGame:tideChartsPictureHidden")
              }) : (0, pW.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Zr("skyblockGame:tideChartsPictureRevealed", {
                  picture: ar.pictureName
                })
              }, ar.pictureName), (0, pW.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, pW.jsxs)("li", {
                  children: [(0, pW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Zr("skyblockGame:tideChartsLegendLit")]
                }), (0, pW.jsxs)("li", {
                  children: [(0, pW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Zr("skyblockGame:tideChartsLegendClear")]
                }), null !== ar.hereCell && (0, pW.jsxs)("li", {
                  children: [(0, pW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Zr("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, pW.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, pW.jsx)("span", {
                  children: Qr.turnsText
                }), (0, pW.jsx)("span", {
                  children: Qr.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function SI(rr) {
      var Sr;
      let {
        controller: Qr
      } = rr;
      const {
        selectedLanguage: Zr
      } = (0, fW.E)(), Wr = Zr.code;
      (0, Br.useEffect)((() => {
        Qr.setTranslator(((rr, Sr) => (0, fW.z)(Wr, rr, Sr)), Wr, ((rr, Sr) => (0, fW.s)(Wr, rr, Sr)))
      }), [Qr, Wr]);
      const ar = (0, EW.g)(Er, Qr.map.getSnapshot()),
        {
          openInGameMenuName: jr
        } = (0, QW.n)(["openInGameMenuName"]);
      return (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsx)(vj, {
          controller: Qr.quests,
          display: Qr.navigation.display
        }), ar.enabled && !jr && (0, pW.jsx)(XW, {
          controller: Qr.navigation
        }), (0, pW.jsx)(xW, {
          controller: Qr,
          minimap: ar.enabled && (null === (Sr = ar.presentation) || void 0 === Sr ? void 0 : Sr.minimap) && (0, pW.jsx)(lW, {
            view: ar.presentation.minimap,
            navigation: Qr.navigation,
            controller: Qr.map
          }),
          children: (0, pW.jsx)(kW, {
            controller: Qr.quests,
            surface: "hud"
          })
        }), (0, pW.jsx)(yj, {
          controller: Qr.navigation
        }), (0, pW.jsx)(Lj, {
          controller: Qr.portalTransit
        }), (0, pW.jsx)(kj, {
          controller: Qr.dailyReward
        }), (0, pW.jsx)(oj, {
          controller: Qr.mailbox
        }), (0, pW.jsx)(bj, {
          controller: Qr.magmaward
        }), (0, pW.jsx)(Jj, {
          controller: Qr.glowtide
        }), (0, pW.jsx)(Ga, {
          controller: Qr.passage
        }), (0, pW.jsx)(uj, {
          controller: Qr.tideCharts
        }), (0, pW.jsx)(Dj, {
          controller: Qr.glowMeter
        }), (0, pW.jsx)(Da, {
          controller: Qr.reachLog
        }), (0, pW.jsx)(dj, {
          controller: Qr.hushWait
        }), (0, pW.jsx)(Fa, {
          controller: Qr.lampLight
        }), (0, pW.jsx)(PW, {
          controller: Qr.skills,
          surface: "hud"
        })]
      })
    }

    function QI(rr) {
      let {
        controller: Sr
      } = rr;
      return (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsx)(LW, {
          controller: Sr.map,
          navigation: Sr.navigation
        }), (0, pW.jsx)(PW, {
          controller: Sr.skills,
          surface: "menu"
        }), (0, pW.jsx)(kW, {
          controller: Sr.quests,
          surface: "menu"
        }), (0, pW.jsx)(na, {
          controller: Sr.dungeons
        }), (0, pW.jsx)(ya, {
          controller: Sr.collections
        }), (0, pW.jsx)(va, {
          controller: Sr.questGraph
        }), (0, pW.jsx)(Pa, {
          controller: Sr.forge
        }), (0, pW.jsx)(Ca, {
          controller: Sr.smuggler
        }), (0, pW.jsx)(ba, {
          controller: Sr.keepersChair,
          lampLight: Sr.lampLight
        }), (0, pW.jsx)(zj, {
          controller: Sr.reachLog,
          regulars: Sr.regulars,
          hiddenWaters: Sr.hiddenWaters
        }), (0, pW.jsx)(rj, {
          controller: Sr.regulars
        }), (0, pW.jsx)(Aa, {
          controller: Sr.passage
        }), (0, pW.jsx)(rI, {
          controller: Sr.tideCharts
        }), (0, pW.jsx)(ej, {
          controller: Sr.dialogue
        }), (0, pW.jsx)(Kj, {
          controller: Sr.autographs
        })]
      })
    }
    var ZI = Qr(37851);
    const WI = RQ + VQ;

    function aI(rr, Sr) {
      const Qr = [{
        sound: "rpgKnifeSlice1",
        beat: RQ,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: RQ,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: RQ,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: RQ,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: RQ,
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
        eN: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: WI + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        eN: !0,
        beat: WI + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: WI + 60,
        lead: 180,
        volume: .5 + .06 * rr,
        rate: .82 + .07 * rr
      }];
      return rr >= 4 && Qr.push({
        sound: "exp_levelup",
        beat: WI + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), Sr && Qr.push({
        sound: "trumpetFlare",
        beat: WI + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), Qr.push({
        sound: "harp_pling",
        beat: gQ,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), Qr
    }
    class jI {
      constructor(rr) {
        this.deps = rr, this.pending = new Map, this.localHook = null
      }
      hookWaiting(rr, Sr) {
        this.pending.delete(rr);
        const Qr = this.deps.now();
        if (null === Sr) {
          var Zr;
          if ((null === (Zr = this.localHook) || void 0 === Zr ? void 0 : Zr.hookId) === rr) {
            const rr = Qr >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(rr)
          }
          return
        }
        const Wr = Qr + Sr;
        this.settle(rr, Wr) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(rr, {
          untilMs: Qr + 1e3,
          biteAtMs: Wr
        }))
      }
      getLocalHook() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.localHook) || void 0 === Sr ? void 0 : Sr.hookId) && void 0 !== rr ? rr : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const rr = this.deps.now();
        for (const [Sr, {
            untilMs: Qr,
            biteAtMs: Zr
          }] of this.pending)(this.settle(Sr, Zr) || rr > Qr) && this.pending.delete(Sr)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(rr, Sr) {
        const Qr = this.deps.getLineOwner(rr);
        if (null === Qr) return !1;
        if (!this.deps.isLocalPlayer(Qr)) return !0;
        if (this.localHook = {
            hookId: rr,
            biteAtMs: Sr
          }, !this.deps.isHushWaiting()) {
          const [Sr, Qr] = this.deps.getHookPosition(rr);
          this.deps.onCastLanded(Sr, Qr)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var II = Qr(2984);
    const fI = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      EI = {
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
    class pI {
      constructor(rr) {
        this.deps = rr, this.tell = null
      }
      receiveTell(rr) {
        let {
          biteTellTier: Sr
        } = rr;
        this.tell = {
          tier: Sr,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(rr) {
        const Sr = this.tell;
        if (this.tell = null, !rr) return;
        const Qr = null !== Sr && this.deps.now() - Sr.atMs <= 3e3 ? Sr.tier : 0;
        this.deps.vibrate(fI[Qr])
      }
      burstAtHook() {
        const rr = this.tell,
          Sr = this.deps.getLocalHookPosition();
        null === rr || rr.burst || null === Sr || (rr.burst = !0, this.deps.playParticles(function(rr, Sr) {
          let [Qr, Zr, Wr] = Sr;
          const {
            count: ar,
            rise: jr,
            colour: Ir
          } = EI[rr], [fr, Er, pr] = Ir;
          return {
            texture: "glint",
            pos1: [Qr - .3, Zr, Wr - .3],
            pos2: [Qr + .3, Zr + .2, Wr + .3],
            dir1: [-.6, jr, -.6],
            dir2: [.6, 1.4 * jr, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: ar,
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
              minColor: [fr, Er, pr, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [fr, Er, pr, 0],
              maxColor: [fr, Er, pr, 0]
            }],
            blendMode: II.e.Add,
            hideDist: 48
          }
        }(rr.tier, Sr)))
      }
    }
    var xI = Qr(1304),
      mI = Qr(2093),
      NI = Qr(43),
      UI = Qr(40211),
      tI = Qr(208);
    const hI = tI.i.Uz * tI.i.playerEyeToHeightRatio;
    class zI {
      constructor(rr) {
        this.host = rr, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      vx(rr) {
        this.lava = rr, this.nextUpdateAt = 0
      }
      lx() {
        var rr;
        const Sr = this.host.now();
        if (Sr < this.nextUpdateAt) return;
        this.nextUpdateAt = Sr + 250;
        const Qr = this.host.playerPosition(),
          Zr = Qr && this.findNearest([Qr[0], Qr[1] + hI, Qr[2]]);
        if (!Zr || Zr.distance >= 40) return void this.stop();
        const Wr = .5 * Math.min(1, (40 - Zr.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Wr) : this.loop = this.host.play("lavaFlow", Wr, Zr.position, 40 + hI, 9, !0), null === (rr = this.loop) || void 0 === rr || rr.setPosition(Zr.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var rr;
        null === (rr = this.loop) || void 0 === rr || rr.stop(), this.loop = null
      }
      findNearest(rr) {
        let Sr = -1,
          Qr = 1 / 0;
        for (let Zr = 0; Zr < this.lava.length; Zr += 3) {
          const Wr = this.lava[Zr] - rr[0],
            ar = this.lava[Zr + 1] - rr[1],
            jr = this.lava[Zr + 2] - rr[2],
            Ir = Wr * Wr + ar * ar + jr * jr;
          Ir < Qr && (Qr = Ir, Sr = Zr)
        }
        return Sr < 0 ? null : {
          position: [this.lava[Sr], this.lava[Sr + 1], this.lava[Sr + 2]],
          distance: Math.sqrt(Qr)
        }
      }
    }
    var YI = Qr(2071),
      nI = Qr(40218);
    const eI = {
      "Grey Portal": "Gray"
    };
    for (const LI of xr.Cc) eI[`${LI} Portal`] = LI;
    const KI = Object.keys(eI),
      yI = Object.fromEntries(KI.map((rr => [rr, (0, xr.T)(xr.K[`${(0,xr.ne)(eI[rr])}Team`])])));
    Object.fromEntries(KI.map((rr => [rr, xr.K[`${(0,xr.ne)(eI[rr])}UiText`]])));
    class BI {
      constructor(rr, Sr) {
        this.presentation = rr, this.portal = Sr, this.unlocked = void 0
      }
      vx(rr) {
        const Sr = !1 === this.unlocked && rr;
        this.unlocked = rr, this.lx();
        const {
          min: Qr,
          max: Zr,
          unlockedBlock: Wr
        } = this.portal;
        if (Sr && this.presentation.hasChunk(...Qr)) {
          const [rr, Sr, ar] = yI[Wr];
          this.presentation.playParticles({
            pos1: [...Qr],
            pos2: Zr.map((rr => rr + 1)),
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
              minColor: [rr, Sr, ar, 1],
              maxColor: [Math.min(255, rr + 55), Math.min(255, Sr + 55), Math.min(255, ar + 90), 1]
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
      lx() {
        var rr;
        const Sr = this.unlocked ? this.portal.unlockedBlock : null !== (rr = this.portal.lockedBlock) && void 0 !== rr ? rr : "Light Gray Portal",
          {
            min: Qr,
            max: Zr
          } = this.portal;
        for (let Wr = Qr[0]; Wr <= Zr[0]; Wr++)
          for (let rr = Qr[1]; rr <= Zr[1]; rr++)
            for (let ar = Qr[2]; ar <= Zr[2]; ar++) this.presentation.hasChunk(Wr, rr, ar) && this.presentation.VY(Wr, rr, ar) !== Sr && this.presentation.fR(Wr, rr, ar, Sr)
      }
    }
    var TI = Qr(40085);
    Qr(40073);
    const vI = {
        farming_1: {
          raises: rr => "NPC" === rr.type && "chef" === rr.variation,
          rise: .4
        },
        fishing_1: {
          raises: rr => "Draugr Warper" === rr.type,
          rise: .4
        }
      },
      OI = (rr, Sr, Qr, Wr) => {
        let {
          localPlayerId: ar
        } = Wr;
        const jr = new uZ({
          translate: (rr, Sr) => (0, fW.z)(xI.f.get().getCurrentLanguageCode(), rr, Sr),
          translateWithIcons: (rr, Sr) => (0, fW.s)(xI.f.get().getCurrentLanguageCode(), rr, Sr),
          setMenuOpen: rr => {
            rr ? (0, cr.y)() : (0, cr.j)()
          },
          dismissMenu: cr.m,
          publishSkills: rr => {
            Fr.i.Jp(kS, rr, !0)
          },
          publishQuests: rr => {
            Fr.i.Jp(wS, rr, !0)
          },
          publishQuestNotification: rr => {
            Fr.i.Jp(cS, rr, !0)
          },
          publishDungeons: rr => {
            Fr.i.Jp(bS, rr, !0)
          },
          publishCollections: rr => {
            Fr.i.Jp(tQ, rr, !0)
          },
          publishMap: rr => {
            Fr.i.Jp(Er, rr, !0)
          },
          publishHud: rr => {
            Fr.i.Jp(DZ, rr, !0)
          },
          publishPortalTransit: rr => {
            Fr.i.Jp(zQ, rr, !0)
          },
          isLoadingScreenUp: () => QW.c.get("loadingOverlayVisible"),
          publishDailyReward: rr => {
            Fr.i.Jp(eQ, rr, !0)
          },
          publishMailbox: rr => {
            Fr.i.Jp(vQ, rr, !0)
          },
          publishQuestGraph: rr => {
            Fr.i.Jp(LQ, rr, !0)
          },
          publishForge: rr => {
            Fr.i.Jp(JQ, rr, !0)
          },
          publishSmuggler: rr => {
            Fr.i.Jp(sQ, rr, !0)
          },
          publishKeepersChair: rr => {
            Fr.i.Jp(IZ, rr, !0)
          },
          publishReachLog: rr => {
            Fr.i.Jp(EZ, rr, !0)
          },
          publishLampLight: rr => {
            Fr.i.Jp(tZ, rr, !0)
          },
          publishMagmaward: rr => {
            Fr.i.Jp(zZ, rr, !0)
          },
          publishGlowtide: rr => {
            Fr.i.Jp(nZ, rr, !0)
          },
          publishGlowMeter: rr => {
            Fr.i.Jp(KZ, rr, !0)
          },
          publishHushWait: rr => {
            Fr.i.Jp(BZ, rr, !0)
          },
          publishPassage: rr => {
            Fr.i.Jp(SZ, rr, !0)
          },
          publishTideCharts: rr => {
            Fr.i.Jp(vZ, rr, !0)
          },
          publishRegulars: rr => {
            Fr.i.Jp(RZ, rr, !0)
          },
          publishHiddenWaters: rr => {
            Fr.i.Jp(kZ, rr, !0)
          },
          publishDialogue: rr => {
            Fr.i.Jp(VZ, rr, !0)
          },
          publishAutographs: rr => {
            Fr.i.Jp(oZ, rr, !0)
          },
          onDailyRewardStarted: rr => {
            Pr.playSound(ar, rr.day === vr ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (rr, Sr) => {
            Pr.playSound(ar, "exp_collect", .35, 1 + .6 * rr / (Sr - 1)), Fr.i.Jp(KQ, rr === Sr - 1)
          },
          onDailyRewardItemLanded: rr => {
            Pr.playSound(ar, "pickUp", .6, 1 + .15 * rr)
          },
          onMailboxStarted: () => {
            Pr.playSound(ar, "rpgMetalClick", .6, 1), Pr.playSound(ar, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Pr.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: NI.n,
          requestTracking: rr => {
            Pr.sendCommand(`quests track ${rr}`)
          },
          requestDungeonEnter: (rr, Sr) => {
            Pr.sendCommand(`dungeonEnter ${rr} ${Sr}`)
          },
          requestQuestJump: rr => {
            Pr.sendCommand(`${Hr} jump ${rr}`)
          },
          requestQuestArrive: (rr, Sr) => {
            const Qr = `${Hr} arrive ${rr}`;
            Pr.sendCommand(Sr ? `${Qr} complete` : Qr)
          },
          requestForge: rr => {
            let {
              blade: Sr,
              guard: Qr,
              handle: Zr
            } = rr;
            Pr.sendCommand(`forge ${Sr} ${Qr} ${Zr}`)
          },
          requestDialogue: () => {
            Pr.sendCommand("quests dialogue")
          },
          requestSmuggle: (rr, Sr) => {
            Pr.sendCommand(`smuggle ${rr} ${Sr}`)
          },
          requestKeepersChairAim: rr => {
            Pr.sendCommand(`keeperschair-aim ${rr}`)
          },
          requestReachLogOpen: () => {
            Pr.sendCommand("reachlog-open")
          },
          requestLampLight: rr => {
            Pr.sendCommand(`${rr}`)
          },
          requestTravel: rr => {
            Pr.sendCommand(`map travel ${rr.kind} ${rr.id} ${rr.requestId}`)
          }
        });
        let Ir, fr, pr, mr, Nr, Yr, nr, er, Kr, Tr, Or, lr, Xr, Pr, qr = null;
        const Mr = vI[null !== Qr && void 0 !== Qr ? Qr : ""],
          Ar = (rr, Sr) => {
            null !== Mr && void 0 !== Mr && Mr.raises(Sr) && Pr.setNametagOffset(rr, Mr.rise)
          },
          Vr = new pI({
            getLocalHookPosition: () => {
              const rr = br.getLocalHook();
              return null !== rr && Pr.checkValid(rr) ? Pr.JY(rr) : null
            },
            playParticles: rr => {
              Pr.playParticleEffect(rr)
            },
            vibrate: rr => {
              or.f.play("fishBite", rr)
            },
            now: () => performance.now()
          }),
          br = new jI({
            getLineOwner: rr => Pr.checkValid(rr) ? Pr.getLineOwner(rr) : null,
            isLocalPlayer: rr => Pr.isLocalPlayer(rr),
            getHookPosition: rr => {
              const [Sr, , Qr] = Pr.JY(rr);
              return [Sr, Qr]
            },
            isHushWaiting: () => {
              var rr;
              return "waiting" === (null === (rr = jr.hushWait.getSnapshot()) || void 0 === rr ? void 0 : rr.phase)
            },
            onCastLanded: (rr, Sr) => {
              jr.tideCharts.castLanded(rr, Sr)
            },
            onLocalHookSettled: () => {
              Vr.onLocalHookSettled()
            },
            onLocalWaitEnded: rr => {
              Vr.onLocalWaitEnded(rr)
            },
            now: () => performance.now()
          }),
          Jr = new zI({
            now: () => performance.now(),
            playerPosition: () => Pr.checkValid(ar) ? Pr.JY(ar) : null,
            play: (rr, Sr, Qr, Zr, Wr, jr) => Pr.playSound(ar, rr, Sr, 1, {
              aZ: Qr,
              maxHearDist: Zr,
              refDistance: Wr
            }, jr)
          }),
          Dr = new Map;
        let dr;
        return {
          onCreate: rr => {
            if (Pr = rr, qr = new nI.SkyblockEntityFacing(rr, Mr ? Ar : null), jr.portalTransit.resumeArrival(null !== Qr && void 0 !== Qr ? Qr : null), (null !== Qr && void 0 !== Qr ? Qr : Zr) === Zr) {
              let rr = -1 / 0;
              dr = Fr.i.subscribe("toggleMenu", (Sr => {
                const Qr = performance.now();
                "inventory|Workbench" !== Sr || "cross_to_hub" !== jr.quests.getTrackedQuestId() || Qr - rr < 1e4 || (rr = Qr, Pr.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Zr, Wr] of Object.entries(null !== (Sr = Rr[null !== Qr && void 0 !== Qr ? Qr : ""]) && void 0 !== Sr ? Sr : {})) {
              var Sr;
              Dr.set(Zr, new BI({
                hasChunk: (Sr, Qr, Zr) => rr.isBlockInLoadedChunk(Sr, Qr, Zr),
                VY: (Sr, Qr, Zr) => rr.blockIdToBlockName(rr.getBlockId(Sr, Qr, Zr)),
                fR: (Sr, Qr, Zr, Wr) => {
                  rr.fR(Sr, Qr, Zr, Wr)
                },
                playParticles: Sr => {
                  rr.playParticleEffect(Sr)
                }
              }, Wr))
            }
            Xr = (0, YI.f)((rr => (0, TS.e)(rr) ? (0, TS.d)(rr) : null)), jr.resolveItemName = (Sr, Qr) => {
              const Zr = rr.getItemStat(ar, Sr, "displayName");
              return Zr && "object" === typeof Zr && "translationKey" in Zr ? Qr(Zr.translationKey, (0, fW.p)(Zr.params, mI.b.shown)) : "string" === typeof Zr ? Qr(Zr) : Sr
            }, jr.quests.notifications.onShown = rr => {
              "quest" === rr ? Pr.playSound(ar, "magicAccent1", 1, 1) : "skillLevel" === rr ? Pr.playSound(ar, "magicAccent1", 1, .6) : "landmark" === rr ? Pr.playSound(ar, "trumpetFlare", 1, .6) : "npcNote" === rr ? Pr.playSound(ar, "magicAccent2", .8, 1.1) : "started" === rr ? Pr.playSound(ar, (0, ZI.c)("bigDrumSwish"), 1, 1) : Pr.playSound(ar, (0, ZI.c)("rpgHandleSmallLeather"), 1, 1)
            }, jr.forge.onPartSelected = () => {
              Pr.playSound(ar, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, jr.forge.onOpened = () => {
              ! function(rr) {
                rr.preloadSounds(aI(4, !0).map((rr => rr.sound)))
              }(rr)
            }, jr.forge.onForgeStarted = (Sr, Qr, Zr) => function(rr, Sr, Qr, Zr, Wr) {
              const ar = [],
                jr = [],
                Ir = Qr => {
                  const Zr = rr.playSound(Sr, Qr.eN ? (0, ZI.c)(Qr.sound) : Qr.sound, Qr.volume, Qr.rate);
                  Zr && (jr.push(Zr), void 0 !== Qr.cutAfter && ar.push(setTimeout((() => {
                    Zr.fade(Zr.getVolume(), 0, 300)
                  }), Qr.cutAfter)))
                };
              for (const fr of aI(Qr, Zr)) Wr ? ar.push(setTimeout((() => {
                Ir(fr)
              }), Math.max(0, fr.beat - fr.lead / fr.rate))) : fr.beat !== RQ && "magicAccent2" !== fr.sound && "trumpetFlare" !== fr.sound || Ir(fr);
              return () => {
                for (const rr of ar) clearTimeout(rr);
                for (const rr of jr) rr.fade(rr.getVolume(), 0, 120)
              }
            }(rr, ar, Sr, Qr, Zr), jr.smuggler.onBought = () => {
              (0, UI.b)(Pr, ar)
            }, jr.compass.register(new Ur(jr.map, !0)), jr.compass.register(new Ur(jr.map, !1)), jr.compass.register(new hr(jr.map)), jr.compass.register(new zr((() => jr.quests.getSnapshot().compassTarget)));
            for (const Qr of ["enemy", "npc"]) jr.compass.register(new tr(jr.map, Qr, (Sr => rr.checkValid(Sr) ? rr.JY(Sr) : void 0), (Sr => rr.isAlive(Sr))))
          },
          onAfterRender: (rr, Sr) => {
            const Qr = Pr.checkValid(ar) ? Pr.JY(ar) : null;
            jr.navigation.afterRender(Qr, performance.now(), Sr), jr.glowtide.afterRender(Qr, Sr.cameraHeading), jr.tideCharts.afterRender(Qr), br.afterRender()
          },
          onClose: () => {
            var rr, Sr, Qr, Zr, Wr, ar, Er, xr, Ur, tr, hr, zr, Yr, yr, Br;
            dr && Fr.i.unsubscribe(dr), null === (rr = Xr) || void 0 === rr || rr(), Jr.dispose(), null === (Sr = qr) || void 0 === Sr || Sr.dispose(), br.dispose(), jr.dispose(), null === (Qr = Ir) || void 0 === Qr || Qr(), null === (Zr = fr) || void 0 === Zr || Zr(), null === (Wr = pr) || void 0 === Wr || Wr(), null === (ar = mr) || void 0 === ar || ar(), null === (Er = Nr) || void 0 === Er || Er(), null === (xr = nr) || void 0 === xr || xr(), null === (Ur = undefined) || void 0 === Ur || Ur(), null === (tr = er) || void 0 === tr || tr(), null === (hr = Kr) || void 0 === hr || hr(), null === (zr = Tr) || void 0 === zr || zr(), null === (Yr = Or) || void 0 === Yr || Yr(), null === (yr = undefined) || void 0 === yr || yr(), null === (Br = lr) || void 0 === Br || Br()
          },
          onPlayerChangeBlock: (rr, Sr, Zr, Wr, Ir, fr) => {
            if (rr === ar && "Air" === fr) {
              const rr = Pr.getClientOption(ar, "creative");
              jr.skills.predictBlock([Sr, Zr, Wr], Ir, rr);
              const fr = function(rr, Sr) {
                  if ("hub" === Sr || "farming_1" === Sr || "mining_1" === Sr) return !Gr.has(rr) || "hub" !== Sr && "mining_1" !== Sr ? Object.hasOwn(Cr, rr) ? Cr[rr] : void 0 : gr
                }(Ir, Qr),
                Er = ("hub" === Qr || "mining_1" === Qr) && (xr.jd.some((rr => rr === Ir)) || Object.hasOwn(kr, Ir) || "mining_1" === Qr && "Block of Coal" === Ir);
              rr || void 0 === fr && !Er || Pr.fR(Sr, Zr, Wr, null !== fr && void 0 !== fr ? fr : gr)
            }
          },
          onPlayerAttackEntity: (rr, Sr) => {
            if (rr !== ar || "Player" !== Pr.getEntityType(Sr)) return;
            const [Qr, Zr, Wr] = Pr.JY(Sr);
            Pr.burstParticlePreset("critical", [Qr, Zr + 1, Wr], 10)
          },
          onChangeBlockFail: rr => {
            for (const {
                zS: Sr
              }
              of rr) jr.skills.rejectBlock(Sr)
          },
          onReceivedMessageFromServer: (rr, Sr) => {
            if ("skyblockGatedPortal" === rr) {
              var Qr;
              const [rr, Zr] = Sr;
              return void(null === (Qr = Dr.get(rr)) || void 0 === Qr || Qr.vx(Zr))
            }
            if ("skyblockDailyReward" === rr) return void jr.dailyReward.vx(Sr);
            if ("skyblockMailbox" === rr) return void jr.mailbox.vx(Sr);
            if ("skyblockPortalTransit" === rr) return void jr.portalTransit.vx(Sr);
            if ("skyblockLava" === rr) return void Jr.vx(Sr);
            if ("skyblockForge" === rr) return void jr.forge.vx(Sr);
            if ("skyblockMagmaward" === rr) return void jr.magmaward.vx(Sr);
            if ("skyblockGlowtide" === rr) return void jr.glowtide.vx(Sr);
            if ("skyblockGlowMeter" === rr) return void jr.glowMeter.vx(Sr);
            if ("skyblockHushWait" === rr) return void jr.hushWait.vx(Sr);
            if ("skyblockPassage" === rr) {
              const rr = Sr;
              return jr.passage.vx(rr), jr.reachLog.receivePassagePhase(rr.passagePhase), Tr ??= (0, yr.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: jr.passage.show
              }), void jr.keepersChair.receivePassage({
                keepersChairPassagePhase: rr.passagePhase,
                keepersChairPassageNextPhase: rr.passageNextPhase,
                keepersChairPassageTurnsInMs: rr.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === rr) {
              const rr = Sr;
              return jr.tideCharts.vx(rr), void(rr.tideCharts.length > 0 && (Or ??= (0, yr.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: jr.tideCharts.show
              })))
            }
            if (rr === ir.F) {
              var Zr;
              const {
                hookId: rr,
                waiting: Qr
              } = Sr;
              return void br.hookWaiting(rr, null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.remainingMs) && void 0 !== Zr ? Zr : null)
            }
            if ("skyblockBiteTell" === rr) return void Vr.receiveTell(Sr);
            if ("skyblockSmuggler" === rr) return void jr.smuggler.vx(Sr);
            if ("skyblockKeepersChair" === rr) return jr.keepersChair.vx(Sr), void jr.lampLight.setAtChair(jr.keepersChair.isAtChair());
            if ("skyblockLampLight" === rr) {
              const rr = Sr;
              var Wr;
              if (jr.lampLight.vx(rr), rr.lampLightReleasing) Kr ??= (0, yr.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  jr.lampLight.setRelease(!1)
                }
              });
              else null === (Wr = Kr) || void 0 === Wr || Wr(), Kr = void 0;
              return
            }
            if ("skyblockRegulars" === rr) return void jr.regulars.vx(Sr);
            if ("skyblockHiddenWaters" === rr) return void jr.hiddenWaters.vx(Sr);
            if ("skyblockReachLog" === rr) return jr.reachLog.vx(Sr), void(er ??= (0, yr.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: xZ
              },
              onClick: jr.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === rr) {
              for (const [rr, Qr, Zr, Wr] of Sr) Pr.fR(rr, Qr, Zr, Wr);
              return
            }
            if ("skyblockHud" === rr) jr.receiveHud(Sr);
            else if ("skyblockMap" === rr) jr.map.vx(Sr);
            else if (rr === wr.c) jr.skills.vx(Sr);
            else if (rr === Lr && "dialogue" === Sr.kind) jr.dialogue.vx(Sr);
            else if (rr === Lr) jr.quests.vx(Sr);
            else if ("skyblockDungeons" === rr) jr.dungeons.vx(Sr);
            else if ("sbCollections" === rr) jr.collections.vx(Sr);
            else if ("skyblockQuestGraph" === rr) jr.questGraph.vx(Sr);
            else {
              if ("skyblockAutographs" !== rr) return;
              jr.autographs.vx(Sr)
            }
            if (!fr && jr.map.getSnapshot().enabled) {
              const rr = (0, yr.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: jr.map.show
                }),
                Sr = (0, cr.C)(jr.map.show);
              fr = () => {
                rr(), Sr()
              }
            }!pr && jr.skills.getSnapshot().enabled && (pr = (0, yr.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: jr.skills.show
            })), !nr && jr.collections.getSnapshot().enabled && (nr = (0, yr.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: jr.collections.show
            })), !mr && jr.quests.getSnapshot().enabled && (mr = (0, yr.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: jr.quests.show
            })), !lr && jr.autographs.getSnapshot().enabled && (lr = (0, yr.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: jr.autographs.show
            }));
            const ar = jr.dungeons.getSnapshot().enabled;
            var Er;
            (pr || mr || ar) && Yr !== ar && (Yr = ar, null === (Er = Nr) || void 0 === Er || Er(), Nr = (0, yr.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: TI
              },
              disabled: !ar,
              panel: !0,
              onClick: jr.dungeons.show
            }));
            Ir || (Ir = (0, cr.H)((0, Br.createElement)(SI, {
              controller: jr
            }), {
              content: (0, Br.createElement)(QI, {
                controller: jr
              }),
              onClose: jr.close
            }))
          },
          lx: () => {
            var rr;
            for (const Sr of Dr.values()) Sr.lx();
            Jr.lx(), null === (rr = qr) || void 0 === rr || rr.lx(), jr.skills.lx(), jr.quests.lx(), jr.dailyReward.lx(), jr.mailbox.lx(), jr.map.lx()
          }
        }
      }
  },
  40054: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => Wr
    });
    var Zr = Qr(379);
    const Wr = (0, Zr.ub)([0, 0, -1]),
      ar = [{
        name: "S",
        bearing: (0, Zr.ub)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Zr.ub)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Wr
      }, {
        name: "W",
        bearing: (0, Zr.ub)([1, 0, 0])
      }]
  },
  40045: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      d: () => ar
    });
    var Zr = Qr(40054);

    function Wr(rr, Sr, Qr) {
      return [100 * (Qr.mapMaxX - rr) / (Qr.mapMaxX - Qr.mapMinX), 100 * (Sr - Qr.mapMinZ) / (Qr.mapMaxZ - Qr.mapMinZ)]
    }

    function ar(rr, Sr, Qr, ar) {
      const [jr, Ir] = Wr(rr, Sr, ar), fr = Zr.i - Qr;
      return {
        rotation: fr,
        transform: `rotate(${fr}rad) translate(-${jr}%, -${Ir}%)`
      }
    }
  },
  37798: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => Zr
    });
    const Zr = "skyblockSkills",
      Wr = "skills_test_gym"
  },
  40099: (rr, Sr, Qr) => {
    var Zr = {
      "./combat_1.png": 40101,
      "./dungeon_crumbling_crypt.png": 40105,
      "./dungeon_frozen_hollow.png": 40111,
      "./dungeon_wildwood_grove.png": 40118,
      "./dungeons.png": 40126,
      "./farming_1.png": 40135,
      "./fishing_1.png": 40141,
      "./hub.png": 40145,
      "./island.png": 40147,
      "./mining_1.png": 40156,
      "./mining_1_bridge.png": 40158,
      "./mining_1_gallery.png": 40161,
      "./mining_1_hollow.png": 40170,
      "./mining_1_village.png": 40175
    };

    function Wr(rr) {
      var Sr = ar(rr);
      return Qr(Sr)
    }

    function ar(rr) {
      if (!Qr.o(Zr, rr)) {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }
      return Zr[rr]
    }
    Wr.keys = function() {
      return Object.keys(Zr)
    }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 40099
  },
  40101: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  40105: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  40111: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  40118: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  40126: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  40135: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  40141: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  40145: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  40147: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  40156: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  40158: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  40161: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  40170: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  40175: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);