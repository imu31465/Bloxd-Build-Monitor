export const id = 177;
export const ids = [42, 177];
export const modules = {
  37068: (cB, Bc, nc) => {
    var Vc = {
      "./combat_1.png": 37072,
      "./dungeon_crumbling_crypt.png": 37078,
      "./dungeon_frozen_hollow.png": 37086,
      "./dungeon_wildwood_grove.png": 37088,
      "./dungeons.png": 37097,
      "./farming_1.png": 37099,
      "./fishing_1.png": 37104,
      "./hub.png": 37109,
      "./island.png": 37115,
      "./mining_1.png": 37120,
      "./mining_1_bridge.png": 37123,
      "./mining_1_gallery.png": 37126,
      "./mining_1_hollow.png": 37133,
      "./mining_1_village.png": 37138
    };

    function Ic(cB) {
      var Bc = rB(cB);
      return nc(Bc)
    }

    function rB(cB) {
      if (!nc.o(Vc, cB)) {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }
      return Vc[cB]
    }
    Ic.keys = function() {
      return Object.keys(Vc)
    }, Ic.resolve = rB, cB.exports = Ic, Ic.id = 37068
  },
  37145: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => rB
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      return Vc.set(cB, Bc), cB
    }

    function rB(cB) {
      var Bc;
      return null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : null
    }
  },
  37057: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      var Vc;
      const {
        width: Ic,
        height: rB
      } = nc, uc = null !== (Vc = cB.text) && void 0 !== Vc ? Vc : cB, sc = (uc.x / 100 - .5) * Ic, Mc = (uc.y / 100 - .5) * rB, Pc = Ic / 2 - Bc.x;
      if (null !== cB.text && Math.abs(sc) <= Pc && Mc >= Bc.top - rB / 2 && Mc <= rB / 2 - Bc.bottom) return {
        x: uc.x,
        y: uc.y
      };
      const qB = Math.min(0 === sc ? 1 / 0 : Pc / Math.abs(sc), Mc > 0 ? (rB / 2 - Bc.bottom) / Mc : Mc < 0 ? (Bc.top - rB / 2) / Mc : 1 / 0);
      return !Number.isFinite(qB) || qB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + sc * qB / Ic * 100,
        y: 50 + Mc * qB / rB * 100
      }
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37154: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      SkyblockEntityFacing: () => sc,
      needsSkyblockEntityFacing: () => uc
    });
    var Vc = nc(37064),
      Ic = nc(3441),
      rB = nc(37156);

    function uc(cB, Bc) {
      if (cB.metaInfo === Vc.k || "Iron Guardian" === cB.type || "Gold Guardian" === cB.type) return !0;
      if ("Pig" === cB.type) return "sitting" === cB.pose;
      if ("Person" !== cB.meshKind || void 0 === cB.meshOpts) return !1;
      let nc = null === Bc || void 0 === Bc ? void 0 : Bc.get(cB.meshOpts);
      if (void 0 === nc) {
        var rB, uc;
        const Vc = (0, Ic.g)(cB);
        nc = !1, "pig_napoleon" === (null === Vc || void 0 === Vc || null === (rB = Vc.opts.textures) || void 0 === rB ? void 0 : rB.head) ? nc = !0 : "npc_pig_head" === (null === Vc || void 0 === Vc || null === (uc = Vc.opts.textures) || void 0 === uc ? void 0 : uc.head) && (nc = "sitting" === Vc.opts.pose || "sitting"), Bc && (Bc.size >= 256 && Bc.clear(), Bc.set(cB.meshOpts, nc))
      }
      return "sitting" === nc ? "sitting" === cB.pose : nc
    }(0, rB.h)("skyblock", ((cB, Bc) => {
      Bc.setFacingTolerance(uc(cB) ? 0 : null)
    }));
    class sc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = cB, this.alsoVisit = Bc, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = cB => {
          var Bc;
          const nc = this.api.getEntityInfo(cB);
          nc && (uc(nc, this.meshFacingCache) && (this.api.setFacingTolerance(cB, 0), this.nextFacing.add(cB)), null === (Bc = this.alsoVisit) || void 0 === Bc || Bc.call(this, cB, nc))
        }
      }
      cn() {
        const {
          api: cB
        } = this, Bc = this.nextFacing;
        cB.forEachEntity(this.visit);
        for (const nc of this.facing) Bc.has(nc) || cB.setFacingTolerance(nc, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Bc
      }
      dispose() {
        for (const cB of this.facing) this.api.setFacingTolerance(cB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37053: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => VM
    });
    const Vc = "island";
    var Ic = nc(302);
    const rB = (0, Ic.ob)([0, 0, -1]),
      uc = [{
        name: "S",
        bearing: (0, Ic.ob)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Ic.ob)([-1, 0, 0])
      }, {
        name: "N",
        bearing: rB
      }, {
        name: "W",
        bearing: (0, Ic.ob)([1, 0, 0])
      }];

    function sc(cB, Bc, nc) {
      return [100 * (nc.mapMaxX - cB) / (nc.mapMaxX - nc.mapMinX), 100 * (Bc - nc.mapMinZ) / (nc.mapMaxZ - nc.mapMinZ)]
    }

    function Mc(cB, Bc, nc) {
      const Ic = "local" === Bc,
        rB = cB.background,
        uc = Bc => rB ? sc(Bc[0] - cB.mapOrigin[0], Bc[2] - cB.mapOrigin[2], rB.bounds) : [50, 50],
        Mc = (cB.insideDungeon ? [] : cB.landmarks).map((cB => {
          var Bc, Vc;
          return {
            id: cB.id,
            name: nc(cB.visited && cB.nameKey ? null !== (Bc = cB.mapLabelKey) && void 0 !== Bc ? Bc : cB.nameKey : "skyblockGame:mapUnknown"),
            icon: cB.visited && null !== (Vc = cB.icon) && void 0 !== Vc ? Vc : "unknown",
            visited: cB.visited,
            current: !1,
            position: uc(cB.position),
            travelKind: "landmark",
            travelId: cB.id
          }
        })),
        qB = cB.zones.map((Bc => {
          var Vc;
          return {
            id: Bc.id,
            name: nc(Bc.visited && Bc.nameKey ? Bc.nameKey : "skyblockGame:mapUnknown"),
            icon: Bc.visited && null !== (Vc = Bc.icon) && void 0 !== Vc ? Vc : "unknown",
            visited: Bc.visited,
            current: Bc.id === cB.zoneId,
            position: Bc.position,
            thumbnail: Bc.visited ? Bc.id : void 0,
            travelKind: "zone",
            travelId: Bc.id
          }
        })),
        Oc = cB.insideDungeon || !rB ? [] : cB.portals.map((cB => {
          var Bc;
          return {
            id: cB.id,
            name: nc(null !== (Bc = cB.nameKey) && void 0 !== Bc ? Bc : "skyblockGame:mapUnknown"),
            icon: cB.visited ? "dungeons" === cB.destination ? "portal_orange" : "portal" : "unknown",
            visited: cB.visited,
            current: !1,
            position: uc(cB.position),
            colour: cB.colour,
            travelKind: "zone",
            travelId: cB.destination
          }
        })),
        Tc = Ic ? Mc : qB,
        fc = Tc.filter((cB => cB.visited)).length,
        mB = rB ? (rB.bounds.mapMaxX - rB.bounds.mapMinX) / (rB.bounds.mapMaxZ - rB.bounds.mapMinZ) : 2,
        ec = rB ? JSON.stringify([rB.bounds, cB.mapOrigin]) : "";
      return {
        local: Ic,
        points: Tc,
        portals: Ic ? Oc : [],
        progress: Tc.length ? nc("skyblockGame:mapDiscovered", {
          current: String(fc),
          total: String(Tc.length)
        }) : null,
        percent: Tc.length ? 100 * fc / Tc.length : 0,
        canTravel: [...Tc, ...Ic ? Oc : []].some((cB => cB.visited && !cB.current)),
        noLandmarks: Ic && !cB.insideDungeon && 0 === Mc.length,
        background: rB ? {
          imageKey: rB.imageKey,
          fallbackImageKey: cB.zoneId,
          geometryKey: ec,
          label: nc(rB.labelKey),
          colour: rB.backgroundColour,
          ratio: mB
        } : null,
        connections: Pc(cB.zones),
        minimap: rB ? {
          imageKey: rB.imageKey,
          fallbackImageKey: cB.zoneId,
          geometryKey: ec,
          label: nc(rB.labelKey),
          colour: rB.backgroundColour,
          caption: nc(cB.zoneId === Vc ? "skyblockGame:zoneIsland" : rB.labelKey),
          width: (rB.bounds.mapMaxX - rB.bounds.mapMinX) / rB.minimapSpan * 100 + "%",
          height: (rB.bounds.mapMaxZ - rB.bounds.mapMinZ) / rB.minimapSpan * 100 + "%",
          markers: [...Mc, ...Oc]
        } : null
      }
    }

    function Pc(cB) {
      const Bc = new Set;
      return cB.flatMap((nc => nc.connections.flatMap((Vc => {
        const Ic = cB.find((cB => cB.id === Vc)),
          rB = [nc.id, Vc].sort().join("|");
        return !Ic || Bc.has(rB) ? [] : (Bc.add(rB), [{
          id: `${nc.id}-${Vc}`,
          start: nc.position,
          end: Ic.position,
          explored: nc.visited && Ic.visited
        }])
      }))))
    }
    class qB {
      constructor(cB, Bc, nc) {
        this.Vu = cB, this.beforeOpen = Bc, this.afterClose = nc, this.open = !1, this.CV = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.CV && (this.open = !0, this.beforeOpen(), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      closePanel(cB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(cB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.CV = !0
      }
      emit() {
        this.CV || (this.snapshot = this.buildSnapshot(), this.Vu(this.snapshot))
      }
    }
    const Oc = "skyblockMapView";
    class Tc extends qB {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(cB, Vc, Ic), this.requestTravel = Bc, this.translate = nc, this.now = rB, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = cB => {
          this.tab = cB, this.feedbackKey = "", this.emit()
        }, this.travel = (cB, Bc) => {
          if (!this.map || this.pending || this.CV) return;
          const nc = ("zone" === cB ? this.map.zones : this.map.landmarks).find((cB => cB.id === Bc));
          if (nc) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in nc && !nc.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (nc.visited)
              if ("zone" === cB && Bc === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const nc = ++this.nextRequestId;
                this.pending = {
                  requestId: nc,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: cB,
                  id: Bc,
                  requestId: nc
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
      setTranslator(cB) {
        this.translate = cB, this.emit()
      }
      EV(cB) {
        var Bc;
        if (!this.CV)
          if ("entities" !== cB.kind)
            if ("open" !== cB.kind) {
              var nc, Vc;
              if ("snapshot" === cB.kind)(null === (nc = cB.snapshot) || void 0 === nc ? void 0 : nc.zoneId) !== (null === (Vc = this.map) || void 0 === Vc ? void 0 : Vc.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = cB.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === cB.kind) {
                var Ic;
                cB.requestId === (null === (Ic = this.pending) || void 0 === Ic ? void 0 : Ic.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (cB.requestId === (null === (Bc = this.pending) || void 0 === Bc ? void 0 : Bc.requestId)) {
                var rB;
                this.pending = null, this.feedbackKey = null !== (rB = cB.errorKey) && void 0 !== rB ? rB : "", null === cB.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = cB.entities
      }
      cn() {
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
          presentation: this.map ? Mc(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const fc = 67.5 * Math.PI / 180;

    function mB(cB, Bc) {
      const nc = Math.abs(cB);
      if (nc > fc || Bc.trackHalfWidth <= 0) return null;
      const Vc = Bc.trackHalfWidth,
        Ic = Bc.screenHalfWidth / (Bc.tanHalfFovX * Math.max(.5, Math.cos(Bc.pitch))),
        rB = Math.min(Math.atan(.6 * Vc / Ic), .75 * fc),
        uc = Ic * Math.tan(rB);
      let sc;
      if (nc <= rB) sc = Ic * Math.tan(nc);
      else {
        const cB = fc - rB,
          Bc = Math.max(0, Ic * cB / (Math.cos(rB) ** 2 * (Vc - uc)) - 1),
          Mc = (nc - rB) / cB;
        sc = uc + (Vc - uc) * (1 + Bc) * Mc / (1 + Bc * Mc)
      }
      return 50 + Math.sign(cB) * sc * 50 / Vc
    }
    class ec {
      constructor(cB, Bc) {
        this.map = cB, this.visited = Bc, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Bc ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const cB = this.map.getSnapshot().map;
        return !cB || cB.insideDungeon ? [] : cB.landmarks.filter((cB => cB.visited === this.visited)).map((cB => {
          var Bc, nc;
          return {
            id: `landmark:${cB.id}`,
            position: cB.position,
            icon: null !== (Bc = cB.icon) && void 0 !== Bc ? Bc : "unknown",
            nameKey: null !== (nc = cB.nameKey) && void 0 !== nc ? nc : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class tB {
      constructor(cB, Bc, nc, Vc) {
        this.map = cB, this.kind = Bc, this.position = nc, this.alive = Vc, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Bc, this.range = "enemy" === Bc ? 48 : 64, this.limit = 12
      }
      rC(cB) {
        if ("enemy" !== this.kind || this.alive(cB.pN)) return this.position(cB.pN)
      }
      getPoints() {
        const cB = [];
        for (const Vc of this.map.getEntities()) {
          if (Vc.kind !== this.kind || "enemy" === this.kind && !this.alive(Vc.compassEntityId)) continue;
          const Ic = this.position(Vc.compassEntityId);
          var Bc, nc;
          if (Ic) cB.push({
            id: `${this.kind}:${Vc.compassEntityId}`,
            pN: Vc.compassEntityId,
            kind: this.kind,
            icon: null !== (Bc = Vc.icon) && void 0 !== Bc ? Bc : Vc.npcSkin ? `npc_${Vc.npcSkin}` : this.kind,
            displayName: Vc.displayName,
            position: Ic,
            nameKey: null !== (nc = Vc.nameKey) && void 0 !== nc ? nc : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return cB
      }
    }
    class Sc {
      constructor(cB) {
        this.map = cB, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const cB = this.map.getSnapshot().map;
        return !cB || cB.insideDungeon ? [] : cB.portals.map((cB => {
          var Bc;
          return {
            id: "portal:" + cB.id,
            kind: "portal",
            position: cB.position,
            nameKey: null !== (Bc = cB.nameKey) && void 0 !== Bc ? Bc : "skyblockGame:compassUnvisitedZone",
            icon: cB.visited ? "dungeons" === cB.destination ? "portal_orange" : "portal" : "unknown",
            colour: cB.colour
          }
        }))
      }
    }
    class yB {
      constructor(cB) {
        this.target = cB, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const cB = this.target();
        return cB ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: cB.position,
          nameKey: cB.nameKey
        }] : []
      }
    }

    function zB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.position;
      const rB = Vc[0] - Bc[0],
        uc = Vc[2] - Bc[2];
      return {
        ...cB,
        position: Vc,
        offset: Ic.b.computeShortestRotation(nc, (0, Ic.ob)([rB, 0, uc])),
        distance: Math.hypot(rB, Vc[1] - Bc[1], uc)
      }
    }
    let pc;

    function hc(cB, Bc) {
      var nc;
      return (null === (nc = pc) || void 0 === nc ? void 0 : nc.locale) !== Bc && (pc = {
        locale: Bc,
        near: new Intl.NumberFormat(Bc, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Bc, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (cB < 10 ? pc.near : pc.far).format(cB)
    }
    class aB {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(cB) {
        return this.providers.set(cB.id, cB), this.refreshAt = 0, () => {
          this.providers.get(cB.id) === cB && (this.providers.delete(cB.id), this.refreshAt = 0)
        }
      }
      frame(cB, Bc, nc) {
        if (nc >= this.refreshAt) {
          this.refreshAt = nc + 200, this.candidates = [];
          for (const Bc of this.providers.values()) {
            if (!Bc.enabled) continue;
            const nc = Bc.getPoints().map((Bc => {
              const nc = Bc.position;
              return {
                point: Bc,
                distance: Math.hypot(nc[0] - cB[0], nc[1] - cB[1], nc[2] - cB[2])
              }
            })).filter((cB => cB.distance <= Bc.range)).sort(((cB, Bc) => cB.distance - Bc.distance)).slice(0, Bc.limit);
            for (const {
                point: cB
              }
              of nc) this.candidates.push({
              provider: Bc,
              point: cB
            })
          }
        }
        const Vc = [];
        for (const {
            point: Ic,
            provider: rB
          }
          of this.candidates) {
          if (!rB.enabled) continue;
          const nc = rB.rC ? rB.rC(Ic) : Ic.position;
          if (nc) {
            const rB = zB(Ic, cB, Bc, nc);
            Math.abs(rB.offset) <= fc && Vc.push(rB)
          }
        }
        return Vc
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var lc = nc(35253),
      Yc = nc(73);
    const Lc = [{
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
      gB = Lc.length;

    function Uc(cB) {
      return cB >= gB ? 1 : cB + 1
    }
    const bB = "skyblockQuests";
    var Zc = nc(37064);
    const Qc = "devquests",
      Cc = "none",
      vB = {
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
      Dc = "Compressed Messy Stone",
      Nc = {
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
      Ec = ["Stone", "Diorite", "Andesite", "Granite"],
      oc = new Set(Ec),
      Wc = (Object.keys(Nc), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const wc = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function kB(cB, Bc) {
      const nc = Math.floor(5 * cB / (2 * Bc + 1));
      return Math.min(4, Math.max(0, nc))
    }
    var Xc = nc(1108);
    var Hc = nc(35077);
    var Fc = nc(35247),
      Jc = nc(35),
      jB = nc(7795);
    const Rc = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      iB = 1e3;

    function Kc(cB) {
      return Math.max(0, cB)
    }

    function xB(cB) {
      return 1 + .01 * Kc(cB)
    }

    function dc(cB) {
      return 1 + .005 * Kc(cB)
    }

    function Ac(cB) {
      return 1 + .005 * Kc(cB)
    }

    function Gc(cB) {
      return .01 * Kc(cB)
    }

    function cn(cB) {
      return 150 / (150 + Kc(cB))
    }

    function BB(cB) {
      return 1 + .002 * Kc(cB)
    }

    function nB(cB) {
      return Math.round(10 * cB) / 10
    }

    function VB(cB, Bc) {
      switch (cB) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: nB(100 * (dc(Bc) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: nB(100 * (xB(Bc) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: nB(100 * (Ac(Bc) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: nB(100 * Gc(Bc))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: nB(100 * (1 - cn(Bc)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: nB(100 * (BB(Bc) - 1))
          }
      }
    }

    function IB(cB) {
      return "farming" === cB ? 200 : 100
    }

    function rn(cB, Bc) {
      if (!Number.isSafeInteger(cB) || cB < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const nc = IB(Bc),
        Vc = cB => function(cB, Bc) {
          return IB(cB) * Bc * (Bc + 1) / 2
        }(Bc, cB);
      let Ic = Math.min(iB, Math.floor((Math.sqrt(8 * cB / nc + 1) - 1) / 2));
      return Ic < iB && Vc(Ic + 1) <= cB ? Ic++ : Vc(Ic) > cB && Ic--, {
        totalXp: cB,
        level: Ic,
        xpIntoLevel: cB - Vc(Ic),
        xpForNextLevel: Ic === iB ? null : nc * (Ic + 1)
      }
    }
    const uB = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function sB(cB) {
      return uB.has(cB)
    }
    const MB = new Set(Ic.eb);

    function PB(cB) {
      return MB.has(cB)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const qn = {
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
      OB = {
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
      TB = {
        ...OB,
        ...Object.fromEntries(Object.entries(Wc).map((cB => {
          let [Bc, nc] = cB;
          return [Bc, 9 * OB[nc]]
        })))
      },
      fB = {
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
      mn = {
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
    const eB = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      tn = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function SB(cB) {
      return `rgb(${tn[cB].join(", ")})`
    }

    function yn(cB, Bc, nc) {
      if (!nc) return cB(Bc);
      const Vc = {};
      for (const [Ic, rB] of Object.entries(nc)) Vc[Ic] = "string" === typeof rB ? rB : cB(rB.translationKey);
      return cB(Bc, Vc)
    }
    class zn {
      constructor(cB, Bc) {
        this.now = cB, this.getJournal = Bc, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.XB = !1, this.onShown = () => {}
      }
      enqueue(cB) {
        const Bc = pB(cB);
        if (Bc) this.pending.push(cB);
        else {
          const Bc = this.pending.findIndex(pB);
          this.pending.splice(-1 === Bc ? this.pending.length : Bc, 0, cB)
        }
        return (null === this.current || null !== this.followUp && !Bc) && (this.advance(), !0)
      }
      setHeld(cB) {
        return this.XB = cB, !cB && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      cn() {
        const cB = this.getJournal(),
          Bc = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Bc ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Bc || void 0 === Bc ? void 0 : Bc.kind) && cB && cB.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Bc || void 0 === Bc ? void 0 : Bc.kind)) {
          const cB = this.findFollowUp(this.current);
          if ("step" !== (null === cB || void 0 === cB ? void 0 : cB.kind) || cB.questId !== Bc.questId || cB.step.id !== Bc.step.id) return this.showFollowUp(cB, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(cB, Bc, nc) {
        var Vc, Ic, rB, uc;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, cB, nc);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, cB);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, cB, Bc);
        const {
          questCompletionKind: sc,
          questCompletionNameKey: Mc
        } = this.current, Pc = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, qB = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Oc = "step" === (null === (Vc = this.followUp) || void 0 === Vc ? void 0 : Vc.kind) ? this.followUp : null, Tc = "explore" === (null === (Ic = this.followUp) || void 0 === Ic ? void 0 : Ic.kind);
        let fc;
        return fc = Tc ? cB("skyblockGame:questExploreTitle") : null !== Oc ? "quest" === sc ? cB("skyblockGame:questNextQuestTitle", {
          quest: cB(Oc.questNameKey)
        }) : cB("skyblockGame:questNextStepTitle") : cB("started" === sc ? "skyblockGame:questStartedTitle" : "quest" === sc ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? sc : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: fc,
          name: Tc ? Bc("skyblockGame:questExploreName") : null !== Oc ? yn(Bc, Oc.step.nameKey, Oc.step.nameParams) : yn(Bc, Mc, Pc),
          description: Tc ? Bc("skyblockGame:questExploreDescription") : null === Oc ? null : yn(Bc, Oc.step.descriptionKey, Oc.step.descriptionParams),
          reward: null === this.followUp && qB > 0 ? Bc("skyblockGame:questCoinRewardSuffix", {
            amount: qB.toLocaleString(nc)
          }) : null,
          iconItem: null !== (rB = null === Oc || void 0 === Oc ? void 0 : Oc.step.questIconItem) && void 0 !== rB ? rB : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Oc && (null === (uc = this.getJournal()) || void 0 === uc ? void 0 : uc.trackedQuestId) === Oc.questId ? Oc.step.nameKey : null
        }
      }
      getSkillLevelView(cB, Bc, nc) {
        let {
          skill: Vc,
          beforeLevel: Ic,
          level: rB
        } = cB;
        const uc = VB(Vc, Ic),
          sc = VB(Vc, rB);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Bc(`skyblockGame:${Vc}`),
          name: Bc("skyblockGame:skillLevelUp", {
            to: rB.toLocaleString(nc)
          }),
          description: uc.percent === sc.percent ? null : Bc(`${sc.translationKey}Change`, {
            before: uc.percent.toLocaleString(nc),
            after: sc.percent.toLocaleString(nc)
          }),
          reward: null,
          iconItem: eB[Vc],
          accent: SB(Vc),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(cB, Bc) {
        let {
          landmarkNameKey: nc
        } = cB;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Bc("skyblockGame:landmarkDiscovered"),
          name: Bc(nc),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(cB, Bc, nc) {
        let {
          titleKey: Vc,
          textKey: Ic,
          params: rB = {},
          nameKeys: uc = {},
          iconItem: sc = null
        } = cB;
        const Mc = {
          ...rB
        };
        for (const [Pc, qB] of Object.entries(uc)) Mc[Pc] = Bc(qB);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Bc(Vc),
          name: nc(Ic, Mc),
          description: null,
          reward: null,
          iconItem: sc,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var cB;
        if (null !== this.followUp) return 5600;
        switch (null === (cB = this.current) || void 0 === cB ? void 0 : cB.questCompletionKind) {
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
      showFollowUp(cB, Bc) {
        null === cB || this.XB ? this.advance() : (this.followUp = cB, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Bc && void 0 !== Bc ? Bc : this.shownAt + this.durationMs())
      }
      findFollowUp(cB) {
        var Bc;
        const nc = this.getJournal();
        if (!nc || this.hasPendingQuestPopup() || pB(cB)) return null;
        const Vc = "started" === cB.questCompletionKind ? nc.active.some((Bc => Bc.id === cB.questCompletionQuestId)) : "quest" === cB.questCompletionKind ? nc.completed.some((Bc => Bc.id === cB.questCompletionQuestId)) : [...nc.active, ...nc.completed].some((Bc => Bc.id === cB.questCompletionQuestId && Bc.subquests.some((Bc => Bc.id === cB.questCompletionStepId && "completed" === Bc.status))));
        if (!Vc) return null;
        if ("quest" === cB.questCompletionKind && 0 === nc.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Ic = nc.active.find((cB => cB.id === nc.trackedQuestId)),
          rB = null !== (Bc = null === Ic || void 0 === Ic ? void 0 : Ic.subquests.find((cB => "ready" === cB.status))) && void 0 !== Bc ? Bc : null === Ic || void 0 === Ic ? void 0 : Ic.subquests.find((cB => "active" === cB.status));
        return rB ? {
          kind: "step",
          questId: Ic.id,
          questNameKey: Ic.nameKey,
          step: rB
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((cB => !pB(cB)))
      }
      advance() {
        var cB;
        this.current = this.XB ? null : null !== (cB = this.pending.shift()) && void 0 !== cB ? cB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function pB(cB) {
      return hB(cB.questCompletionKind)
    }

    function hB(cB) {
      return "skillLevel" === cB || "landmark" === cB || "npcNote" === cB
    }
    var an = nc(37057);
    const lB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      YB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      LB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      gn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      UB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==",
      bn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      ZB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const QB = nc.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const CB = nc.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var DB = nc(17511),
      NB = nc(19554),
      EB = nc(22e3),
      oB = nc(23559),
      WB = nc(25294);
    const wB = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: DB,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: NB,
      cow: UB,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: nc(25304),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: lB,
      fishing_1: lB,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: YB,
      guardian_iron: LB,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: EB,
      mines: oB,
      mining_1: oB,
      npc: gn,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: UB,
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
      npc_gold_guardian: YB,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: LB,
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
      npc_wolf_security: bn,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: QB,
      quest_talk: CB,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: vn,
      watermelon: WB
    };

    function kn(cB, Bc) {
      const nc = document.createElement("img");
      return nc.className = Bc, nc.src = cB, nc.alt = "", nc.draggable = !1, nc
    }

    function XB(cB) {
      var Bc;
      const nc = null !== (Bc = wB[cB]) && void 0 !== Bc ? Bc : cB.startsWith("npc_") ? gn : vn;
      if ("portal" !== cB) return kn(nc, "SkyblockMapIcon");
      const Vc = document.createElement("span");
      Vc.className = "SkyblockMapIcon Portal";
      const Ic = document.createElement("span");
      return Ic.className = "SkyblockMapIconTint", Ic.style.maskImage = Ic.style.webkitMaskImage = `url("${ZB}")`, Vc.append(kn(nc, "SkyblockMapIconLayer"), Ic, kn(ZB, "SkyblockMapIconLayer SkyblockMapIconShade")), Vc
    }
    var HB = nc(37049),
      FB = nc(3452);
    const JB = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function jn(cB) {
      const Bc = new FB.k(cB);
      return {
        radius: 45,
        squareness: 3,
        wobbles: JB.map((cB => {
          let {
            lobes: nc,
            amount: Vc
          } = cB;
          return {
            lobes: nc[Math.floor(Bc.next() * nc.length)],
            amount: Vc[0] + Bc.next() * (Vc[1] - Vc[0]),
            phase: 2 * Bc.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function RB(cB) {
      let {
        radius: Bc,
        squareness: nc,
        wobbles: Vc,
        samples: Ic
      } = cB;
      const rB = [];
      for (let uc = 0; uc < Ic; uc++) {
        const cB = 2 * Math.PI * uc / Ic,
          sc = Math.cos(cB),
          Mc = Math.sin(cB),
          Pc = Bc * (Math.abs(sc) ** nc + Math.abs(Mc) ** nc) ** (-1 / nc) * Vc.reduce(((Bc, nc) => {
            let {
              lobes: Vc,
              amount: Ic,
              phase: rB
            } = nc;
            return Bc + Ic * Math.sin(Vc * cB + rB)
          }), 1);
        rB.push(`${(50+Pc*sc).toFixed(2)} ${(50+Pc*Mc).toFixed(2)}`)
      }
      return `M${rB.join("L")}Z`
    }
    const KB = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class xn {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.CV = !1, this.mountCompass = cB => {
          var Bc;
          if (null === (Bc = this.stopLayout) || void 0 === Bc || Bc.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !cB || this.CV) return;
          const nc = cB.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: cB,
            track: nc,
            label: cB.querySelector(".SkyblockCompassLabel")
          }, nc.replaceChildren();
          for (let Ic = 0; Ic < 4; Ic++) {
            const cB = document.createElement("span");
            cB.className = "SkyblockCompassCardinal", nc.appendChild(cB), this.cardinals.push(cB)
          }
          const Vc = (0, HB.e)(KB, [cB], this.layout);
          this.stopLayout = () => {
            Vc(), nc.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = cB => {
          this.terrain = this.CV ? null : cB, this.render(this.frame)
        }, this.mountMinimapSearchArea = cB => {
          this.mountSearchArea("minimap", cB)
        }, this.mountMapSearchArea = cB => {
          this.mountSearchArea("map", cB)
        }, this.mountPlayer = cB => {
          this.player = this.CV ? null : cB, this.render(this.frame)
        }, this.mountWaypoint = cB => {
          var Bc, nc;
          if (null === (Bc = this.stopWaypoint) || void 0 === Bc || Bc.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !cB || this.CV) return;
          const Vc = cB.querySelector(".SkyblockQuestWaypointMarker");
          Vc.replaceChildren(XB("quest")), this.markerIcon = "quest", this.waypoint = {
            root: cB,
            marker: Vc,
            clip: cB.querySelector(".SkyblockQuestWaypointTextClip"),
            text: cB.querySelector(".SkyblockQuestWaypointText"),
            label: cB.querySelector(".SkyblockQuestWaypointLabel"),
            distance: cB.querySelector(".SkyblockQuestWaypointDistance"),
            hint: cB.querySelector(".SkyblockQuestWaypointHint")
          };
          const Ic = () => {
              this.waypointMarkerSize = {
                width: Vc.offsetWidth,
                height: Vc.offsetHeight
              }, this.waypointInset = {
                x: Vc.offsetWidth / 2 + 8,
                top: Vc.offsetHeight + 8,
                bottom: 8
              }
            },
            rB = new ResizeObserver((() => {
              Ic(), this.render(this.frame)
            }));
          rB.observe(Vc, {
            box: "border-box"
          });
          const uc = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", uc), null === (nc = window.visualViewport) || void 0 === nc || nc.addEventListener("resize", uc), this.stopWaypoint = () => {
            var cB;
            rB.disconnect(), window.removeEventListener("resize", uc), null === (cB = window.visualViewport) || void 0 === cB || cB.removeEventListener("resize", uc)
          }, uc(), Ic(), this.render(this.frame)
        }, this.mountWaypointOrigin = cB => {
          var Bc;
          if (null === (Bc = this.stopWaypointOrigin) || void 0 === Bc || Bc.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = cB && !this.CV ? Number(cB.dataset.notificationToken) : null, cB && !this.CV && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Bc = {
              nameKey: cB.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Bc;
            const nc = () => {
                const nc = cB.getBoundingClientRect();
                Bc.x = (nc.left + nc.width / 2) / window.innerWidth * 100, Bc.y = (nc.top + nc.height / 2) / window.innerHeight * 100
              },
              Vc = new ResizeObserver(nc);
            Vc.observe(cB.parentElement), Vc.observe(cB), window.addEventListener("resize", nc), this.stopWaypointOrigin = () => {
              Vc.disconnect(), window.removeEventListener("resize", nc)
            }, nc()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const cB = this.compass.root,
            Bc = getComputedStyle(cB),
            nc = getComputedStyle(document.documentElement),
            Vc = parseFloat(nc.fontSize),
            Ic = parseFloat(Bc.getPropertyValue("--compass-icon-size")) * Vc,
            rB = "1" === Bc.getPropertyValue("--compass-fit-top").trim(),
            uc = rB ? 1 : 8,
            sc = Array.from(document.querySelectorAll(KB), (cB => {
              var Bc;
              return (null !== (Bc = cB.querySelector(".MiddleTextTop")) && void 0 !== Bc ? Bc : cB).getBoundingClientRect()
            })).filter((cB => cB.width > 0 && cB.height > 0));
          let Mc = (parseFloat(nc.getPropertyValue("--notchTop")) || 0) + uc,
            Pc = "";
          if (rB) {
            const Bc = window.innerWidth / 2,
              nc = cB.getBoundingClientRect().height,
              rB = [Mc, ...sc.map((cB => Math.max(Mc, cB.bottom + uc)))].sort(((cB, Bc) => cB - Bc));
            for (const cB of rB) {
              let rB = Bc - 8;
              for (const Vc of sc) Vc.bottom + uc <= cB || Vc.top >= cB + nc + uc || (rB = Math.min(rB, Vc.right <= Bc ? Bc - Vc.right - 8 : Vc.left - Bc - 8));
              const qB = 2 * rB - Ic;
              if (qB >= 16 * Vc) {
                Pc = `${qB}px`, Mc = cB;
                break
              }
            }
          }
          cB.style.maxWidth !== Pc && (cB.style.maxWidth = Pc);
          const qB = cB.getBoundingClientRect(),
            Oc = this.compassSize.trackHalfWidth;
          if (qB.width > 0) {
            const cB = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: cB.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Ic / cB.width
          }
          if (!Pc)
            for (const Tc of sc) Tc.right > qB.left - 8 && Tc.left < qB.right + 8 && (Mc = Math.max(Mc, Tc.bottom + uc));
          cB.style.top = `${Mc}px`, this.compassSize.trackHalfWidth !== Oc && this.render(this.frame)
        }
      }
      mountSearchArea(cB, Bc) {
        this.searchAreas[cB] = this.CV ? null : Bc, this.render(this.frame)
      }
      render(cB) {
        if (this.CV) return;
        if (this.frame = cB, this.compass && (dB(this.compass.root, !cB), cB)) {
          const Bc = this.compassSize.trackHalfWidth / 50;
          cB.compass.cardinals.forEach(((cB, nc) => {
            const Vc = this.cardinals[nc];
            Vc.textContent !== cB.name && (Vc.textContent = cB.name), dB(Vc, cB.hidden), Vc.style.translate = cB.left * Bc + "px"
          }));
          const nc = new Set;
          cB.compass.markers.forEach(((Vc, Ic) => {
            var rB;
            nc.add(Vc.id);
            let uc = this.markers.get(Vc.id);
            uc || (uc = document.createElement("span"), uc.className = "SkyblockCompassMarker", this.markers.set(Vc.id, uc), this.compass.track.appendChild(uc)), uc.dataset.icon !== Vc.icon && (uc.dataset.icon = Vc.icon, uc.replaceChildren(XB(Vc.icon))), uc.style.color = null !== (rB = Vc.colour) && void 0 !== rB ? rB : "", uc.style.translate = Vc.left * Bc + "px", uc.style.zIndex = String(cB.compass.markers.length - Ic), uc.title !== Vc.name && (uc.title = Vc.name)
          }));
          for (const [cB, Vc] of this.markers) nc.has(cB) || (Vc.remove(), this.markers.delete(cB));
          this.compass.label.textContent !== cB.compass.label && (this.compass.label.textContent = cB.compass.label)
        }
        this.terrain && (dB(this.terrain, !(null !== cB && void 0 !== cB && cB.minimap)), null !== cB && void 0 !== cB && cB.minimap && (this.terrain.style.transform = cB.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", cB.minimap.iconRotation)));
        const Bc = null === cB || void 0 === cB ? void 0 : cB.searchArea;
        for (const nc of [this.searchAreas.minimap, this.searchAreas.map])
          if (nc && (dB(nc, !Bc), Bc)) {
            if (this.searchAreaPath.seed !== Bc.shapeSeed && (this.searchAreaPath = {
                seed: Bc.shapeSeed,
                d: RB(jn(Bc.shapeSeed))
              }), nc.dataset.shapeSeed !== Bc.shapeSeed) {
              nc.dataset.shapeSeed = Bc.shapeSeed;
              for (const cB of nc.querySelectorAll("path")) cB.setAttribute("d", this.searchAreaPath.d)
            }
            nc.style.left = `${Bc.left}%`, nc.style.top = `${Bc.top}%`, nc.style.width = `${Bc.width}%`, nc.style.height = `${Bc.height}%`
          } if (this.player && (dB(this.player, !(null !== cB && void 0 !== cB && cB.player) || cB.player.hidden), null !== cB && void 0 !== cB && cB.player && (this.player.style.left = `${cB.player.left}%`, this.player.style.top = `${cB.player.top}%`, this.player.style.setProperty("--map-player-rotation", cB.player.rotation))), this.waypoint) {
          const {
            root: Bc,
            marker: nc,
            clip: Vc,
            text: Ic,
            label: rB,
            distance: uc,
            hint: sc
          } = this.waypoint, Mc = !(null !== cB && void 0 !== cB && cB.waypoint) || null !== cB.waypoint.popupToken && cB.waypoint.popupToken !== this.waypointOriginToken;
          dB(Bc, Mc);
          let Pc = 1;
          const qB = this.waypointLaunch;
          if (!Mc && qB && cB.waypoint.nameKey === qB.nameKey) {
            const cB = performance.now();
            qB.startedAt ??= cB, Pc = Math.min(1, Math.max(0, (cB - qB.startedAt - 450) / 1e3)), nc.style.opacity = String(Math.min(1, (cB - qB.startedAt) / 150)), 1 === Pc && (this.waypointLaunch = null)
          } else nc.style.opacity = "", qB && null !== qB.startedAt && (this.waypointLaunch = null);
          if (Bc.classList.toggle("Launching", Pc < 1), null !== cB && void 0 !== cB && cB.waypoint) {
            const Bc = this.waypointInset,
              Mc = "quest_talk" === cB.waypoint.markerIcon ? function(cB, Bc, nc) {
                if (!cB.text || null === cB.blockHeight || 0 === cB.nearness) return cB;
                const Vc = cB.blockHeight / 100 * nc.height,
                  Ic = -cB.nearness * (AB * Vc + Bc.width / 2),
                  rB = cB.nearness * (GB * Vc + Bc.height / 2);
                return {
                  ...cB,
                  text: {
                    x: cB.text.x + Ic / nc.width * 100,
                    y: cB.text.y + rB / nc.height * 100
                  }
                }
              }(cB.waypoint, this.waypointMarkerSize, this.viewport) : cB.waypoint,
              Oc = (0, an.d)(Mc, Bc, this.viewport),
              Tc = Pc * Pc * (3 - 2 * Pc),
              fc = Pc < 1 ? qB.x + (Oc.x - qB.x) * Tc : Oc.x,
              mB = Pc < 1 ? qB.y + (Oc.y - qB.y) * Tc : Oc.y;
            nc.style.translate = `${fc}vw ${mB}vh`, Vc.style.clipPath = `inset(${Bc.top}px ${Bc.x}px ${Bc.bottom}px)`, dB(Ic, Pc < 1 || !cB.waypoint.text), Ic.style.opacity = String(1 - cB.waypoint.nearness), cB.waypoint.text && (Ic.style.translate = `${cB.waypoint.text.x}vw ${cB.waypoint.text.y}vh`), rB.textContent !== cB.waypoint.name && (rB.textContent = cB.waypoint.name), this.markerIcon !== cB.waypoint.markerIcon && (this.markerIcon = cB.waypoint.markerIcon, nc.replaceChildren(XB(this.markerIcon))), uc.textContent !== cB.waypoint.distance && (uc.textContent = cB.waypoint.distance), dB(sc, null === cB.waypoint.hint), null !== cB.waypoint.hint && sc.textContent !== cB.waypoint.hint && (sc.textContent = cB.waypoint.hint)
          }
        }
      }
      dispose() {
        var cB, Bc;
        this.mountWaypointOrigin(null), this.render(null), null === (cB = this.stopLayout) || void 0 === cB || cB.call(this), this.stopLayout = null, null === (Bc = this.stopWaypoint) || void 0 === Bc || Bc.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.CV = !0
      }
    }

    function dB(cB, Bc) {
      cB.hidden !== Bc && (cB.hidden = Bc)
    }
    const AB = .55,
      GB = .6;
    const cV = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Bn {
      constructor(cB, Bc, nc, Vc) {
        this.map = cB, this.quests = Bc, this.compass = nc, this.display = new xn, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.CV = !1, this.snapshot = null, this.texts = new Map, this.translate = Vc
      }
      setTranslator(cB, Bc) {
        this.translate = cB, this.locale = Bc, this.metresFormat = new Intl.NumberFormat(Bc), this.texts.clear()
      }
      translateCached(cB, Bc) {
        const nc = void 0 === Bc ? cB : `${cB} ${Bc}`;
        let Vc = this.texts.get(nc);
        return void 0 === Vc && (this.texts.size >= 500 && this.texts.clear(), Vc = this.translate(cB, void 0 === Bc ? void 0 : {
          distance: Bc
        }), this.texts.set(nc, Vc)), Vc
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(cB, Bc, nc) {
        if (this.CV) return;
        if (!cB) return this.snapshot = null, void this.display.render(null);
        const Vc = this.map.getSnapshot().map,
          Mc = nc.cameraHeading,
          Pc = {
            ...this.display.compassSize,
            tanHalfFovX: nc.tanHalfFovX,
            pitch: nc.cameraPitch
          },
          qB = [];
        if (Vc)
          for (const Ic of this.compass.frame(cB, Mc, Bc)) {
            const cB = mB(Ic.offset, Pc);
            null !== cB && qB.push({
              ...Ic,
              left: cB
            })
          }
        const Oc = function(cB, Bc) {
            const nc = [],
              Vc = cB => "quest" === cB.kind ? cB.distance - 1 : cB.distance,
              Ic = [...cB].sort(((cB, Bc) => Vc(cB) - Vc(Bc) || cB.id.localeCompare(Bc.id)));
            for (const rB of Ic) {
              let cB = !1;
              if ("quest" !== rB.kind)
                for (const Vc of nc)
                  if (Math.abs(Vc.left - rB.left) < Bc) {
                    cB = !0;
                    break
                  } cB || nc.push(rB)
            }
            return nc
          }(qB, this.display.compassSpacing),
          Tc = function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              nc = null;
            for (const Vc of cB) Math.abs(Vc.offset) <= Bc && (!nc || Vc.distance < nc.distance || Vc.distance === nc.distance && Math.abs(Vc.offset) < Math.abs(nc.offset)) && (nc = Vc);
            return nc
          }(Oc),
          fc = cB => {
            var Bc;
            return null !== (Bc = cB.displayName) && void 0 !== Bc ? Bc : this.translateCached(cB.nameKey)
          },
          ec = {
            compass: {
              markers: Oc.map((cB => ({
                id: cB.id,
                icon: cB.icon,
                colour: cB.colour,
                name: fc(cB),
                left: cB.left
              }))),
              cardinals: uc.map((cB => {
                let {
                  name: Bc,
                  bearing: nc
                } = cB;
                const Vc = mB(Ic.b.computeShortestRotation(Mc, nc), Pc);
                return {
                  name: Bc,
                  left: null !== Vc && void 0 !== Vc ? Vc : 0,
                  hidden: null === Vc
                }
              })),
              label: Tc ? `${fc(Tc)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",hc(Tc.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Vc && void 0 !== Vc && Vc.background) {
          const Bc = cB[0] - Vc.mapOrigin[0],
            nc = cB[2] - Vc.mapOrigin[2],
            {
              rotation: Ic,
              transform: uc
            } = function(cB, Bc, nc, Vc) {
              const [Ic, uc] = sc(cB, Bc, Vc), Mc = rB - nc;
              return {
                rotation: Mc,
                transform: `rotate(${Mc}rad) translate(-${Ic}%, -${uc}%)`
              }
            }(Bc, nc, Mc, Vc.background.bounds);
          ec.minimap = {
            transform: uc,
            iconRotation: -Ic + "rad"
          };
          const [Pc, qB] = sc(Bc, nc, Vc.background.bounds);
          ec.player = {
            left: Pc,
            top: qB,
            hidden: Pc < 0 || qB < 0 || Pc > 100 || qB > 100,
            rotation: -Ic + "rad"
          }
        }
        const {
          waypoint: tB
        } = this.quests.getSnapshot();
        if ("search" === (null === tB || void 0 === tB ? void 0 : tB.questMarkerIcon) && null !== Vc && void 0 !== Vc && Vc.background) {
          const {
            bounds: cB
          } = Vc.background, [Bc, nc] = sc(tB.position[0] - Vc.mapOrigin[0], tB.position[2] - Vc.mapOrigin[2], cB);
          ec.searchArea = {
            left: Bc,
            top: nc,
            width: 6400 / (cB.mapMaxX - cB.mapMinX),
            height: 6400 / (cB.mapMaxZ - cB.mapMinZ),
            shapeSeed: tB.nameKey
          }
        }
        const Sc = this.quests.getNotificationSnapshot(),
          yB = "completion" === (null === Sc || void 0 === Sc ? void 0 : Sc.phase) && !hB(Sc.kind);
        if (tB && !yB) {
          const Bc = Math.hypot(...tB.position.map(((Bc, nc) => Bc - cB[nc]))),
            Vc = Math.round(Bc),
            Ic = "talk" === tB.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Bc) / 5)) : 0,
            rB = nc.projectWorldPosToViewport(tB.position),
            uc = rB && nc.projectWorldPosToViewport([tB.position[0], tB.position[1] - 1, tB.position[2]]);
          ec.waypoint = {
            ...nc.projectWorldPosToScreenPos(tB.position),
            text: rB,
            nearness: Ic * Ic * (3 - 2 * Ic),
            blockHeight: rB && uc ? uc.y - rB.y : null,
            name: this.translateCached(tB.nameKey),
            nameKey: tB.nameKey,
            markerIcon: tB.questMarkerIcon ? cV[tB.questMarkerIcon] : "quest",
            popupToken: (null === Sc || void 0 === Sc ? void 0 : Sc.waypointNameKey) === tB.nameKey ? Sc.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Vc)),
            hint: "search" === tB.questMarkerIcon && Math.hypot(tB.position[0] - cB[0], tB.position[2] - cB[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ec, this.display.render(ec)
      }
      dispose() {
        this.CV = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const nn = "skyblockSkillsView";
    class Vn extends qB {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          nc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB => cB,
          Vc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ic = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cB => cB;
        super(cB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Bc, this.translate = nc, this.locale = Vc, this.itemName = Ic, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = cB => {
          this.selected = cB, this.emit()
        }
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, this.locale = Bc, this.itemName = nc, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(cB) {
        let Bc = this.skillText.get(cB);
        return Bc || (Bc = {
          label: this.translate(`skyblockGame:${cB}`),
          description: this.translate(`skyblockGame:${cB}Description`)
        }, this.skillText.set(cB, Bc)), Bc
      }
      sources(cB) {
        if ("mining" === cB || "fishing" === cB) return this.buildSources(cB);
        let Bc = this.sourceText.get(cB);
        return Bc || (Bc = this.buildSources(cB), this.sourceText.set(cB, Bc)), Bc
      }
      buildSources(cB) {
        const Bc = this.translate;
        return "exploration" === cB ? [Bc("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Bc("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === cB ? [Bc("skyblockGame:logSource", {
          xp: this.number(qn["Maple Log"])
        })] : "combat" === cB ? [Bc("skyblockGame:creatureKillSource"), Bc("skyblockGame:noEnvironmentalXp")] : "farming" === cB ? [Bc("skyblockGame:cropSource", {
          xp: this.number(fB["Wheat|FreshlyGrown"])
        }), Bc("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Bc("skyblockGame:noYoungCropXp")] : Object.entries("mining" === cB ? TB : mn).map((cB => {
          let [nc, Vc] = cB;
          return Bc("skyblockGame:itemXpSource", {
            item: this.itemName(nc),
            xp: this.number(Vc)
          })
        }))
      }
      number(cB) {
        return cB.toLocaleString(this.locale)
      }
      benefit(cB, Bc) {
        const nc = VB(cB, Bc);
        return this.translate(nc.translationKey, {
          bonus: this.number(nc.percent)
        })
      }
      EV(cB) {
        if (!this.CV) {
          if ("snapshot" === cB.kind) this.progress = cB.progress, this.pending.clear(), this.recent = null;
          else if ("award" === cB.kind && this.progress) {
            const {
              award: Bc
            } = cB;
            this.progress = {
              ...this.progress,
              [Bc.skill]: Bc.after
            };
            for (const [cB, Vc] of this.pending) Vc.skill === Bc.skill && this.pending.delete(cB);
            const nc = Bc.after.level > Bc.before.level;
            this.recordGain(Bc.skill, Bc.amount, nc ? ++this.nextLevelUpToken : null), nc && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Bc.skill,
              beforeLevel: Bc.before.level,
              level: Bc.after.level
            })
          } else {
            if ("rejectBlock" === cB.kind) return void this.rejectBlock(cB.position);
            if ("open" === cB.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(cB, Bc, nc) {
        if (!this.progress || this.CV || nc) return;
        const Vc = function(cB, Bc) {
          const nc = cB.split("|")[0];
          return "Air" === Bc || Bc === `Barkless ${cB}` ? Object.hasOwn(qn, nc) ? {
            skill: "foraging",
            amount: qn[nc]
          } : "Air" !== Bc ? null : Object.hasOwn(TB, cB) ? {
            skill: "mining",
            amount: TB[cB]
          } : sB(cB) ? {
            skill: "farming",
            amount: 10
          } : PB(cB) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(fB, cB) ? {
            skill: "farming",
            amount: fB[cB]
          } : Object.hasOwn(Nc, cB) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Bc, "Air");
        if (!Vc) return;
        const Ic = cB.join(",");
        if (this.pending.has(Ic)) return;
        const rB = this.predictedProgress(Vc.skill).totalXp + Vc.amount;
        Number.isSafeInteger(rB) && (this.pending.set(Ic, {
          ...Vc,
          expires: this.now() + 2e3
        }), this.recordGain(Vc.skill, 0), this.emit())
      }
      rejectBlock(cB) {
        this.pending.delete(cB.join(",")) && this.emit()
      }
      cn() {
        if (this.CV) return;
        let cB = !1;
        for (const [Bc, nc] of this.pending) nc.expires <= this.now() && (this.pending.delete(Bc), cB = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, cB = !0), cB && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(cB, Bc) {
        var nc, Vc;
        let Ic = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const rB = (null === (nc = this.recent) || void 0 === nc ? void 0 : nc.skill) === cB && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          uc = (null === (Vc = this.recent) || void 0 === Vc ? void 0 : Vc.skill) === cB && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: cB,
          confirmed: rB + Bc,
          expires: this.now() + 3e3,
          levelUpToken: null !== Ic && void 0 !== Ic ? Ic : uc
        }
      }
      pendingXp(cB) {
        let Bc = 0;
        for (const nc of this.pending.values()) nc.skill === cB && (Bc += nc.amount);
        return Bc
      }
      predictedProgress(cB) {
        const Bc = this.progress[cB],
          nc = this.pendingXp(cB);
        return nc ? rn(Bc.totalXp + nc, cB) : Bc
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var cB, Bc, nc;
        const Vc = this.progress ? Rc.map((cB => {
            const Bc = this.predictedProgress(cB);
            return {
              ...this.text(cB),
              icon: eB[cB],
              benefit: this.benefit(cB, Bc.level),
              sources: this.sources(cB),
              id: cB,
              selected: cB === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Bc.level)
              }),
              xp: null === Bc.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Bc.xpIntoLevel),
                target: this.number(Bc.xpForNextLevel)
              }),
              percent: null === Bc.xpForNextLevel ? 100 : Math.min(100, Bc.xpIntoLevel / Bc.xpForNextLevel * 100)
            }
          })) : [],
          Ic = Vc.find((cB => {
            var Bc;
            return cB.id === (null === (Bc = this.recent) || void 0 === Bc ? void 0 : Bc.skill)
          })),
          rB = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Vc,
          detail: null !== (cB = Vc.find((cB => cB.selected))) && void 0 !== cB ? cB : null,
          overallLevel: this.progress ? Rc.reduce(((cB, Bc) => cB + this.predictedProgress(Bc).level), 0) : null,
          hud: Ic && rB > 0 ? {
            skill: Ic,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(rB)
            }),
            levelUpToken: null !== (Bc = null === (nc = this.recent) || void 0 === nc ? void 0 : nc.levelUpToken) && void 0 !== Bc ? Bc : null,
            colour: SB(Ic.id)
          } : null
        }
      }
    }
    const In = Math.max(1600, 600, 950) + 400,
      rV = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      un = "skyblockQuestsView",
      sn = "skyblockQuestNotificationView";
    class Mn extends qB {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          uc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(cB, Vc, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Bc, this.translate = nc, this.now = Ic, this.locale = rB, this.publishNotification = uc, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var cB, Bc;
          this.selected = null !== (cB = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.trackedQuestId) && void 0 !== cB ? cB : null, this.show()
        }, this.select = cB => {
          this.selected = cB, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const cB = this.snapshot.detail;
          !this.CV && null !== cB && void 0 !== cB && cB.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(cB.id), this.emit())
        }, this.viewDialogue = () => {
          const cB = this.snapshot.detail;
          var Bc;
          cB && (null === (Bc = this.onViewDialogue) || void 0 === Bc || Bc.call(this, cB.id))
        }, this.notifications = new zn(Ic, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.trackedQuestId) && void 0 !== cB ? cB : null
      }
      notify(cB) {
        !this.CV && this.notifications.enqueue(cB) && this.emitNotification()
      }
      setNotificationsHeld(cB) {
        (this.notifications.setHeld(cB) || cB) && this.emitNotification()
      }
      cn() {
        var cB, Bc;
        if (this.CV) return;
        this.notifications.cn() && this.emitNotification();
        let nc = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, nc = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, nc = !0);
        const Vc = Pn(this.authoritative);
        null !== Vc && void 0 !== Vc && null !== (cB = Vc.questClock) && void 0 !== cB && cB.running && this.clockText(Vc) !== (null === (Bc = this.snapshot.tracked) || void 0 === Bc ? void 0 : Bc.clock) && (nc = !0), nc && this.emit()
      }
      setTranslator(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = cB, this.locale = Bc, this.emitNotification(), this.emit()
      }
      EV(cB) {
        if (!this.CV)
          if ("completion" === cB.kind) this.notify(cB.questCompletion);
          else if ("landmark" === cB.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: cB.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === cB.kind) {
          var Bc, nc, Vc;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: cB.npcNoteTitleKey,
            textKey: cB.npcNoteTextKey,
            params: null !== (Bc = cB.npcNoteParams) && void 0 !== Bc ? Bc : {},
            nameKeys: null !== (nc = cB.npcNoteNameKeys) && void 0 !== nc ? nc : {},
            iconItem: null !== (Vc = cB.npcNoteIconItem) && void 0 !== Vc ? Vc : null
          })
        } else if ("open" === cB.kind) this.show();
        else if ("guidance" === cB.kind) this.waypoint = cB.waypoint, this.compassTarget = cB.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === cB.kind) {
          this.authoritative = cB.snapshot, this.notifications.cn() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Bc = this.trackedStepPulse;
          this.updateTrackedStepPulse(cB.snapshot), this.emit(), this.trackedStepPulse > Bc && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.CV || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var cB;
        return null !== (cB = this.translateWithIcons) && void 0 !== cB ? cB : this.translate
      }
      clockText(cB) {
        const Bc = cB.questClock;
        if (!Bc) return null;
        const nc = Bc.elapsedMs + (Bc.running ? this.now() - this.receivedAt : 0);
        return void 0 === Bc.countdownFromMs ? (0, Zc.m)(nc, !1) : (0, Zc.m)(1e3 * Math.ceil(Math.max(0, Bc.countdownFromMs - nc) / 1e3), !1)
      }
      updateTrackedStepPulse(cB) {
        var Bc, nc, Vc;
        const Ic = Pn(cB);
        if (!Ic) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const rB = cB => Ic.subquests.filter((Bc => cB(Bc.status))).map((cB => cB.id)),
          uc = rB((cB => "completed" === cB || "skipped" === cB)),
          sc = rB((cB => "locked" !== cB)),
          Mc = (null === (Bc = this.trackedSteps) || void 0 === Bc ? void 0 : Bc.questId) === Ic.id && Ic.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Mc) {
          const cB = uc.filter((cB => !Mc.finished.has(cB))),
            Bc = rB((cB => "active" === cB || "ready" === cB)).filter((cB => !Mc.unlocked.has(cB)));
          cB.length > 0 && this.trackedStepPulse++, (cB.length > 0 || Bc.length > 0) && (this.trackedChange = {
            finished: new Set(cB),
            unlocked: new Set(Bc),
            expiresAt: this.now() + In
          })
        } else {
          var Pc;
          this.trackedStepPulse = (null === (Pc = this.trackedSteps) || void 0 === Pc ? void 0 : Pc.questId) === Ic.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Ic.id,
          progress: Ic.progress,
          finished: new Set([...null !== (nc = null === Mc || void 0 === Mc ? void 0 : Mc.finished) && void 0 !== nc ? nc : [], ...uc]),
          unlocked: new Set([...null !== (Vc = null === Mc || void 0 === Mc ? void 0 : Mc.unlocked) && void 0 !== Vc ? Vc : [], ...sc])
        }
      }
      entry(cB, Bc) {
        var nc, Vc;
        const Ic = cB.id === (null === (nc = this.authoritative) || void 0 === nc ? void 0 : nc.trackedQuestId),
          rB = this.now() < this.trackAvailableAt,
          uc = this.questTextTranslator(),
          sc = cB.subquests.map((Bc => {
            var nc, Vc, rB, sc, Mc, Pc;
            const qB = null !== (nc = Bc.handInNpcName) && void 0 !== nc ? nc : cB.giverName,
              Oc = this.translate("skyblockGame:progress", {
                current: Bc.progress.toLocaleString(this.locale),
                target: Bc.target.toLocaleString(this.locale)
              }),
              Tc = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: qB ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Bc.status],
              fc = "active" === Bc.status || "ready" === Bc.status;
            return {
              id: Bc.id,
              name: yn(uc, Bc.nameKey, Bc.nameParams),
              description: yn(uc, Bc.descriptionKey, Bc.descriptionParams),
              progress: Oc,
              status: Bc.status,
              statusLabel: Tc ? this.translate(Tc, {
                npc: qB
              }) : Oc,
              iconItem: fc && null !== (Vc = Bc.questIconItem) && void 0 !== Vc ? Vc : null,
              barPercent: "active" === Bc.status && Bc.showsProgressBar ? Math.min(100, 100 * Bc.progress / Bc.target) : null,
              justFinished: Ic && null !== (rB = null === (sc = this.trackedChange) || void 0 === sc ? void 0 : sc.finished.has(Bc.id)) && void 0 !== rB && rB,
              justUnlocked: Ic && null !== (Mc = null === (Pc = this.trackedChange) || void 0 === Pc ? void 0 : Pc.unlocked.has(Bc.id)) && void 0 !== Mc && Mc
            }
          }));
        return {
          id: cB.id,
          name: yn(uc, cB.nameKey, cB.nameParams),
          description: yn(uc, cB.descriptionKey, cB.descriptionParams),
          progress: Bc ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: cB.progress.toLocaleString(this.locale),
            target: cB.target.toLocaleString(this.locale)
          }),
          completed: Bc,
          tracked: Ic,
          selected: cB.id === this.selected,
          canTrack: !Bc && !Ic && !rB,
          trackLabel: this.translate(Ic ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : rB ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== cB.id,
          subquests: sc,
          focusStep: null !== (Vc = sc.find((cB => null !== cB.barPercent))) && void 0 !== Vc ? Vc : null,
          clock: this.clockText(cB)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc;
        const qB = [...null !== (cB = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.active) && void 0 !== cB ? cB : [], ...null !== (nc = null === (Vc = this.authoritative) || void 0 === Vc ? void 0 : Vc.completed) && void 0 !== nc ? nc : []];
        var Oc, Tc, fc, mB;
        qB.some((cB => cB.id === this.selected)) || (this.selected = null !== (Oc = null !== (Tc = null === (fc = this.authoritative) || void 0 === fc ? void 0 : fc.trackedQuestId) && void 0 !== Tc ? Tc : null === (mB = qB[0]) || void 0 === mB ? void 0 : mB.id) && void 0 !== Oc ? Oc : null);
        const ec = null !== (Ic = null === (rB = this.authoritative) || void 0 === rB ? void 0 : rB.active.map((cB => this.entry(cB, !1)))) && void 0 !== Ic ? Ic : [];
        ec.sort(((cB, Bc) => Number(Bc.tracked) - Number(cB.tracked)));
        const tB = null !== (uc = null === (sc = this.authoritative) || void 0 === sc ? void 0 : sc.completed.map((cB => this.entry(cB, !0)))) && void 0 !== uc ? uc : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: ec,
          completed: tB,
          completedExpanded: this.completedExpanded,
          detail: null !== (Mc = [...ec, ...tB].find((cB => cB.selected))) && void 0 !== Mc ? Mc : null,
          tracked: null !== (Pc = ec.find((cB => cB.tracked))) && void 0 !== Pc ? Pc : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Pn(cB) {
      var Bc;
      return null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.active.find((Bc => Bc.id === cB.trackedQuestId))) && void 0 !== Bc ? Bc : null
    }
    const qV = "skyblockDungeonsView";
    class On extends qB {
      constructor(cB, Bc) {
        let nc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Vc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(cB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Bc, this.locale = nc, this.requestEnter = Vc, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = cB => {
          this.selected = cB, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const cB = this.pickerEntry(),
            Bc = null === cB || void 0 === cB ? void 0 : cB.difficulties[this.pageIndex];
          void 0 !== Bc && null !== Bc.unlockedBoss && (this.close(), this.requestEnter(cB.id, Bc.difficulty))
        }
      }
      setTranslator(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = cB, this.locale = Bc, this.emit()
      }
      EV(cB) {
        var Bc, nc;
        if (!this.CV) return "open" === cB.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== cB.kind ? "snapshot" === cB.kind && (this.authoritative = cB.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Bc = null === (nc = this.pickerEntry()) || void 0 === nc ? void 0 : nc.difficulties.length) && void 0 !== Bc ? Bc : 1) - 1)), null === cB.snapshot && this.open ? this.close() : this.emit()) : this.choose(cB.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(cB) {
        var Bc;
        const nc = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.dungeons.find((Bc => Bc.id === cB));
        void 0 !== nc ? this.open && this.pickerDungeonId === cB || (this.pickerDungeonId = cB, this.pageIndex = Math.max(0, nc.difficulties.findLastIndex((cB => null !== cB.unlockedBoss))), this.open ? this.emit() : this.show()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${cB}`)
      }
      turnTo(cB) {
        var Bc, nc;
        const Vc = null !== (Bc = null === (nc = this.pickerEntry()) || void 0 === nc ? void 0 : nc.difficulties.length) && void 0 !== Bc ? Bc : 0;
        cB < 0 || cB >= Vc || cB === this.pageIndex || (this.pageIndex = cB, this.emit())
      }
      pickerEntry() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.dungeons.find((cB => cB.id === this.pickerDungeonId))) && void 0 !== cB ? cB : null
      }
      difficulty(cB) {
        const Bc = cB.completions > 0,
          nc = null === cB.bestMs ? null : (0, Zc.m)(cB.bestMs);
        return {
          difficulty: cB.difficulty,
          label: this.translate(Zc.b[cB.difficulty]),
          colour: Zc.e[cB.difficulty],
          beaten: Bc,
          bestTime: nc,
          completions: cB.completions,
          summary: Bc ? [null === nc ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: nc
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: cB.completions.toLocaleString(this.locale)
          })].filter((cB => null !== cB)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(cB) {
        const Bc = cB.difficulties.map((cB => this.difficulty(cB))),
          nc = Bc.filter((cB => cB.beaten)).length;
        return {
          id: cB.id,
          name: this.translate(cB.nameKey),
          selected: cB.id === this.selected,
          beatenSummary: `${nc} / ${Bc.length}`,
          difficulties: Bc
        }
      }
      picker() {
        const cB = this.pickerEntry();
        if (null === cB || 0 === cB.difficulties.length) return null;
        const Bc = cB.difficulties.map(((Bc, nc) => {
          var Vc, Ic, rB, uc;
          const sc = Bc.unlockedBoss,
            Mc = null === sc ? this.lockedHint(cB, nc) : null;
          return {
            ...this.difficulty(Bc),
            unlocked: null !== sc,
            bossName: null === sc ? null : this.translate(sc.bossNameKey),
            bossMobType: null !== (Vc = null === sc || void 0 === sc ? void 0 : sc.bossMobType) && void 0 !== Vc ? Vc : null,
            bossMobVariation: null !== (Ic = null === sc || void 0 === sc ? void 0 : sc.bossMobVariation) && void 0 !== Ic ? Ic : null,
            lockedHint: null !== (rB = null === Mc || void 0 === Mc ? void 0 : Mc.text) && void 0 !== rB ? rB : null,
            lockedHintHighlight: null !== (uc = null === Mc || void 0 === Mc ? void 0 : Mc.highlight) && void 0 !== uc ? uc : null,
            current: nc === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(cB.nameKey),
          pages: Bc,
          page: Bc[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Bc.length - 1
        }
      }
      lockedHint(cB, Bc) {
        var nc, Vc, Ic;
        if (0 === Bc && "number" === typeof cB.combatLevelLock) {
          const Bc = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: cB.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Bc,
            colour: SB("combat"),
            icon: eB.combat
          })
        }
        const rB = null !== (nc = null === (Vc = this.authoritative) || void 0 === Vc ? void 0 : Vc.dungeons) && void 0 !== nc ? nc : [],
          uc = Bc > 0 ? cB : null !== (Ic = rB[rB.indexOf(cB) - 1]) && void 0 !== Ic ? Ic : null,
          sc = Bc > 0 ? cB.difficulties[Bc - 1] : null === uc || void 0 === uc ? void 0 : uc.difficulties[0];
        if (null === uc || void 0 === sc) return null;
        const Mc = this.translate(uc.nameKey);
        if (null === sc.unlockedBoss) return uc === cB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, sc.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Mc
        }, sc.difficulty);
        const Pc = this.translate(sc.unlockedBoss.bossNameKey);
        return uc === cB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Pc
        }, sc.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Pc,
            dungeon: Mc
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(cB, Bc, nc) {
        return this.hintHighlighting(cB, Bc, "difficulty", {
          name: this.translate(Zc.b[nc]),
          colour: Zc.e[nc],
          icon: null
        })
      }
      hintHighlighting(cB, Bc, nc, Vc) {
        let {
          name: Ic,
          colour: rB,
          icon: uc
        } = Vc;
        const sc = this.translate(cB, {
          ...Bc,
          [nc]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(cB, {
            ...Bc,
            [nc]: Ic
          }),
          highlight: 2 === sc.length ? {
            before: sc[0],
            name: Ic,
            after: sc[1],
            colour: rB,
            icon: uc
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var cB, Bc, nc;
        const Vc = null !== (cB = null === (Bc = this.authoritative) || void 0 === Bc ? void 0 : Bc.dungeons) && void 0 !== cB ? cB : [];
        var Ic, rB;
        Vc.some((cB => cB.id === this.selected)) || (this.selected = null !== (Ic = null === (rB = Vc[0]) || void 0 === rB ? void 0 : rB.id) && void 0 !== Ic ? Ic : null);
        const uc = Vc.map((cB => this.entry(cB)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: uc,
          detail: null !== (nc = uc.find((cB => cB.selected))) && void 0 !== nc ? nc : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Tn = ["mining", "farming", "foraging", "fishing", "combat"],
      fn = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      mV = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function en() {
      for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
      return Bc.map(((cB, Bc) => ({
        amount: cB,
        coins: fn[Bc],
        xp: mV[Bc]
      })))
    }
    const tV = en(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Sn = en(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      yV = en(50, 100, 250, 500, 1e3, 2500, 5e3),
      zV = en(25, 50, 100, 250, 500, 1e3),
      pn = en(10, 25, 50, 100, 250, 500, 1e3),
      hn = en(1, 5, 10, 25, 50);

    function aV(cB, Bc) {
      return {
        id: cB,
        category: "fishing",
        item: Bc,
        drops: [Bc],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pn
      }
    }
    const lnc = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Sn
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: yV
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: yV
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: zV
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: zV
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Sn
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: tV
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: tV
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: tV
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: yV
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Sn
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Sn
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Sn
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: yV
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: yV
      }, aV("wheatfish", "Wheatfish"), aV("darter", "Darter"), aV("sunset_minnow", "Sunset Minnow"), aV("root_flounder", "Root Flounder"), aV("greenfin_loach", "Greenfin Loach"), aV("red_strongfish", "Red Strongfish"), aV("green_strongfish", "Green Strongfish"), aV("boomerang_fish", "Boomerang Fish"), aV("seahorse", "Seahorse"), aV("spined_stickleback", "Spined Stickleback"), aV("moon_strongfish", "Moon Strongfish"), aV("boulder_bass", "Boulder Bass"), aV("grass_snapper", "Grass Snapper"), aV("crystal_wheatfish", "Crystalized Wheatfish", hn), aV("moonstone_pupfish", "Moonstone Pupfish", hn), aV("reedglass_minnow", "Reedglass Minnow"), aV("mangrove_herring", "Mangrove Herring"), aV("mudline_perch", "Mudline Perch"), aV("coastal_mullet", "Coastal Mullet"), aV("reef_sardine", "Reef Sardine"), aV("root_perch", "Root Perch"), aV("driftwood_catfish", "Driftwood Catfish"), aV("aether_minnow", "Aether Minnow"), aV("needlefish", "Tri-Pointed Needlefish"), aV("threadfin_bream", "Threadfin Bream"), aV("mudbelly_tilapia", "Mudbelly Tilapia"), aV("rotslab_eel", "Rotslab Eel"), aV("polarflash_electron", "Polarflash Electron"), aV("mireback_carp", "Mireback Carp"), aV("blackwater_bream", "Blackwater Bream"), aV("stone_grouper", "Stone Grouper"), aV("shadeback_ray", "Shadeback Ray"), aV("glacial_silverfish", "Glacial Silverfish"), aV("hatchetfish", "Hatchetfish"), aV("moonlit_boomerang", "Moonlit Boomerang Fish"), aV("murkborne_ray", "Murkborne Ray"), aV("bamboo_catfish", "Bamboo Catfish"), aV("mossback_arapaima", "Mossback Arapaima"), aV("murk_stingray", "Murk Stingray"), aV("channel_sawfish", "Channel Sawfish"), aV("boned_sturgeon", "Boned Sturgeon"), aV("oarfish", "Oarfish"), aV("snakehead", "Snakehead", hn), aV("eldertide_leviathan", "Eldertide Leviathan", hn), aV("pithead", "Pithead"), aV("electric_eel", "Electric Eel"), aV("shadow_darter", "Shadow Darter"), aV("abyss_carp", "Abyss Carp"), aV("nomai_moray", "Nomai Moray"), aV("silver_dragonfish", "Silver Dragonfish"), aV("giant_moray", "Giant Moray"), aV("coelacanth", "Coelacanth", hn), aV("frost_herring", "Frost Herring"), aV("permafrost_halibut", "Permafrost Halibut"), aV("glacial_lanternfish", "Glacial Lanternfish"), aV("frozen_grenadier", "Frozen Grenadier"), aV("blackfin_icefish", "Blackfin Icefish"), aV("moonfish", "Moonfish"), aV("alpha_strongfish", "Alpha Moon Strongfish"), aV("deep_lanternfish", "Deepwater Lanternfish", hn), aV("pearlescent_moonfish", "Pearlescent Moonfish", hn), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Sn
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: zV
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: zV
      }],
      Yn = (new Map(lnc.map((cB => [cB.id, cB]))), new Map),
      Ln = new Map;
    for (const IM of lnc) {
      for (const [cB, Bc] of Object.entries(null !== (gV = IM.blocks) && void 0 !== gV ? gV : {})) {
        var gV;
        Yn.set(cB, {
          collection: IM,
          amount: Bc
        })
      }
      for (const cB of null !== (Un = IM.drops) && void 0 !== Un ? Un : []) {
        var Un;
        Ln.set(cB, IM)
      }
    }

    function bV(cB, Bc) {
      let nc = 0;
      for (; nc < cB.tiers.length && Bc >= cB.tiers[nc].amount;) nc++;
      return nc
    }
    const Zn = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Qn(cB) {
      return Zn[cB - 1]
    }
    const Cn = "skyblockCollectionsView";
    class vV extends qB {
      constructor(cB, Bc) {
        let nc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Vc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cB => cB;
        super(cB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Bc, this.locale = nc, this.itemName = Vc, this.counts = null, this.category = "mining", this.selected = lnc[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = cB => {
          this.category = cB, this.selected = this.inCategory(cB)[0].id, this.emit()
        }, this.select = cB => {
          this.selected = cB, this.emit()
        }
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, this.locale = Bc, this.itemName = nc, this.emit()
      }
      EV(cB) {
        if (!this.CV)
          if ("collOpen" !== cB.kind) {
            (cB.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Bc, nc] of cB.collCounts) this.counts.set(Bc, nc);
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
        var cB;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Bc = this.inCategory(this.category).map((cB => this.collectionView(cB))),
          nc = lnc.reduce(((cB, Bc) => cB + this.tierOf(Bc)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Tn.map((cB => this.categoryView(cB))),
          collections: Bc,
          detail: null !== (cB = Bc.find((cB => cB.selected))) && void 0 !== cB ? cB : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(nc)
          })
        }
      }
      categoryView(cB) {
        const Bc = this.inCategory(cB),
          nc = Bc.reduce(((cB, Bc) => cB + this.tierOf(Bc)), 0),
          Vc = Bc.reduce(((cB, Bc) => cB + Bc.tiers.length), 0);
        return {
          id: cB,
          label: this.translate(`skyblockGame:${cB}`),
          icon: eB[cB],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(nc),
            target: this.number(Vc)
          }),
          selected: cB === this.category
        }
      }
      collectionView(cB) {
        var Bc, nc;
        const Vc = null !== (Bc = this.counts.get(cB.id)) && void 0 !== Bc ? Bc : 0,
          Ic = bV(cB, Vc),
          rB = null !== (nc = cB.tiers[Ic]) && void 0 !== nc ? nc : null,
          uc = 0 === Ic ? 0 : cB.tiers[Ic - 1].amount;
        return {
          id: cB.id,
          name: this.itemName(cB.item),
          icon: cB.item,
          selected: cB.id === this.selected,
          locked: 0 === Vc,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Vc)
          }),
          tier: 0 === Ic ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Ic),
          percent: null === rB ? 100 : Math.min(100, (Vc - uc) / (rB.amount - uc) * 100),
          progress: null === rB ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Vc),
            target: this.number(rB.amount)
          }),
          nextReward: null === rB ? null : this.reward(cB, rB.coins, rB.xp)
        }
      }
      reward(cB, Bc, nc) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Bc),
          xp: this.number(nc),
          skill: this.translate(`skyblockGame:${cB.category}`)
        })
      }
      tierLabel(cB) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Qn(cB)
        })
      }
      tierOf(cB) {
        var Bc;
        return bV(cB, null !== (Bc = this.counts.get(cB.id)) && void 0 !== Bc ? Bc : 0)
      }
      inCategory(cB) {
        return lnc.filter((Bc => Bc.category === cB))
      }
      number(cB) {
        return cB.toLocaleString(this.locale)
      }
    }
    const Dn = "skyblockPortalTransitView",
      Nn = "skyblockPortalArrival";
    class En {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Vu = cB, this.storage = Bc, this.now = nc, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      EV(cB) {
        const Bc = {
          zoneNameKey: cB.transitZoneNameKey,
          variation: cB.transitZoneVariation,
          colour: cB.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Nn, Bc), this.show("departure", Bc.zoneNameKey, Bc.colour, cB.transitDurationMs, cB.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Nn)
        }))
      }
      resumeArrival(cB) {
        const Bc = this.storage.getItem(Nn);
        this.storage.removeItem(Nn), null === Bc || Bc.variation !== cB || this.now() - Bc.departedAt > 3e4 || this.show("arrival", Bc.zoneNameKey, Bc.colour, 3200, 2e4)
      }
      finishArrival(cB) {
        var Bc;
        "arrival" === (null === (Bc = this.view) || void 0 === Bc ? void 0 : Bc.phase) && this.view.token === cB && (this.clearTimer(), this.view = null, this.Vu(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(cB, Bc, nc, Vc, Ic, rB) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: cB,
          zoneNameKey: Bc,
          colour: nc,
          durationMs: Vc
        }, this.Vu(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Vu(null), null === rB || void 0 === rB || rB()
        }), Ic)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const onc = "skyblockDailyRewardView",
      Wn = "skyblockDailyRewardCoin";
    class wn {
      constructor(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Vu = cB, this.isBusy = Bc, this.holdQuestPopups = nc, this.onHeldCoinsChanged = Vc, this.onCoinLanded = Ic, this.onStarted = rB, this.onFinished = uc, this.onItemLanded = sc, this.now = Mc, this.XB = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.playing) || void 0 === Bc ? void 0 : Bc.view) && void 0 !== cB ? cB : null
      }
      getHeldCoins() {
        var cB, Bc;
        let nc = 0;
        for (const Vc of this.XB) nc += Vc.coins;
        return nc - (null !== (cB = null === (Bc = this.playing) || void 0 === Bc ? void 0 : Bc.released) && void 0 !== cB ? cB : 0)
      }
      EV(cB) {
        "dailyRewardClaimed" !== cB.kind ? (this.queue.push(cB), this.cn()) : this.XB.push({
          coins: cB.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      cn() {
        const cB = this.now();
        if (null === this.playing) return this.releaseUnshown(cB), void this.startNext(cB);
        const Bc = this.playing,
          nc = cB - Bc.startedAt,
          Vc = Bc.view.flyingCoins,
          Ic = function(cB, Bc) {
            let nc = 0;
            for (; nc < Bc && Xn(nc, Bc) <= cB;) nc++;
            return nc
          }(nc, Vc);
        if (Ic !== Bc.landed) {
          for (let cB = Ic - Bc.landed > 2 ? Ic - 1 : Bc.landed; cB < Ic; cB++) this.onCoinLanded(cB, Vc);
          Bc.landed = Ic, Bc.released = Math.round(Bc.view.coins * Ic / Vc), this.onHeldCoinsChanged()
        }
        for (; Bc.itemsLanded < Bc.view.items.length && 2e3 + 160 * Bc.itemsLanded + 630 <= nc;) this.onItemLanded(Bc.itemsLanded), Bc.itemsLanded++;
        nc >= Bc.view.durationMs && (this.finish(), this.startNext(cB))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.XB = [], this.Vu(null)
      }
      startNext(cB) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Bc = this.queue.shift();
        this.token++;
        const nc = {
          token: this.token,
          day: Bc.dailyRewardDay,
          coins: Bc.dailyRewardCoins,
          items: Bc.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Bc.dailyRewardDay === gB ? 24 : 14
        };
        this.playing = {
          view: nc,
          startedAt: cB,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Vu(nc), this.onStarted(nc)
      }
      finish() {
        this.XB.shift(), this.playing = null, this.holdQuestPopups(!1), this.Vu(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(cB) {
        if (this.queue.length > 0 || 0 === this.XB.length) return;
        const Bc = this.XB.length;
        this.XB = this.XB.filter((Bc => cB - Bc.receivedAt < 6e4)), this.XB.length !== Bc && this.onHeldCoinsChanged()
      }
    }

    function kV(cB, Bc) {
      return 450 + 715 * cB / (Bc - 1)
    }

    function Xn(cB, Bc) {
      return kV(cB, Bc) + 650
    }
    const Hn = "skyblockMailboxView";
    class Fn {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Vu = cB, this.isBusy = Bc, this.onStarted = nc, this.now = Vc, this.waiting = [], this.playing = null, this.token = 0, this.itemName = cB => cB
      }
      getSnapshot() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.playing) || void 0 === Bc ? void 0 : Bc.view) && void 0 !== cB ? cB : null
      }
      setItemName(cB) {
        this.itemName = cB
      }
      EV(cB) {
        this.waiting.push(...cB.mailLetters), this.cn()
      }
      cn() {
        const cB = this.now();
        null !== this.playing && cB - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Vu(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(cB)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Vu(null)
      }
      start(cB) {
        const Bc = this.waiting.slice(0, 3);
        this.token++;
        const nc = {
          token: this.token,
          letters: Bc.map((cB => this.toView(cB))),
          more: this.waiting.length - Bc.length,
          durationMs: 4500 + 700 * Bc.length
        };
        this.waiting = [], this.playing = {
          view: nc,
          startedAt: cB
        }, this.Vu(nc), this.onStarted(nc)
      }
      toView(cB) {
        return {
          coins: cB.mailCoins,
          items: cB.mailItems.map((cB => {
            var Bc;
            return {
              itemName: cB.mailItemName,
              amount: cB.mailItemAmount,
              label: null !== (Bc = cB.mailItemLabel) && void 0 !== Bc ? Bc : this.itemName(cB.mailItemName)
            }
          })),
          reasonKey: cB.mailReasonKey,
          reasonParams: cB.mailReasonParams
        }
      }
    }
    const Jn = "skyblockQuestGraphView",
      jV = "skyblockDevQuestJump";

    function Rn(cB) {
      if (0 === cB.length) return "";
      const Bc = [`M ${cB[0].x} ${cB[0].y}`];
      for (let Vc = 1; Vc < cB.length - 1; Vc++) {
        const nc = cB[Vc + 1];
        Bc.push(`Q ${cB[Vc].x} ${cB[Vc].y} ${(cB[Vc].x+nc.x)/2} ${(cB[Vc].y+nc.y)/2}`)
      }
      const nc = cB[cB.length - 1];
      return Bc.push(`L ${nc.x} ${nc.y}`), Bc.join(" ")
    }

    function iV(cB, Bc) {
      return cB < Bc ? `${cB}|${Bc}` : `${Bc}|${cB}`
    }
    class Kn extends qB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(cB, nc, Vc), this.translate = Bc, this.requestJump = Ic, this.requestArrive = rB, this.storage = uc, this.now = sc, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = cB => {
          cB !== this.hoveredId && (this.hoveredId = cB, this.emit())
        }, this.jump = cB => {
          this.close(), this.requestJump(cB)
        }
      }
      EV(cB) {
        if (!this.CV)
          if ("graph" !== cB.kind) {
            if ("jumping" === cB.kind) {
              const Bc = {
                questId: cB.graphQuestId,
                variation: cB.graphVariation,
                completes: cB.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(jV, Bc)
            }
          } else {
            const Bc = ++this.graphCount;
            nc.e(98).then((() => nc(5416))).then((nc => {
              let {
                default: Vc
              } = nc;
              this.CV || Bc !== this.graphCount || (this.layout = function(cB, Bc, nc) {
                var Vc, Ic;
                const rB = new cB.graphlib.Graph;
                rB.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), rB.setDefaultEdgeLabel((() => ({})));
                const uc = new Set;
                for (const qB of Bc) uc.add(qB.graphQuestId), rB.setNode(qB.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const sc = nc.filter((cB => uc.has(cB.graphFromId) && uc.has(cB.graphToId) && cB.graphFromId !== cB.graphToId)),
                  Mc = new Map;
                for (const qB of [...sc].sort(((cB, Bc) => Number("awaits" === cB.graphEdgeKind) - Number("awaits" === Bc.graphEdgeKind)))) {
                  const cB = iV(qB.graphFromId, qB.graphToId);
                  Mc.has(cB) || (Mc.set(cB, qB), rB.setEdge(qB.graphFromId, qB.graphToId))
                }
                cB.layout(rB);
                const Pc = rB.graph();
                return {
                  width: Math.ceil(null !== (Vc = Pc.width) && void 0 !== Vc ? Vc : 0),
                  height: Math.ceil(null !== (Ic = Pc.height) && void 0 !== Ic ? Ic : 0),
                  nodes: Bc.map((cB => {
                    var Bc, nc;
                    const Vc = rB.node(cB.graphQuestId);
                    return {
                      node: cB,
                      left: (null !== (Bc = Vc.x) && void 0 !== Bc ? Bc : 0) - 95,
                      top: (null !== (nc = Vc.y) && void 0 !== nc ? nc : 0) - 26
                    }
                  })),
                  edges: sc.map((cB => {
                    var Bc;
                    const nc = Mc.get(iV(cB.graphFromId, cB.graphToId)),
                      Vc = null !== (Bc = rB.edge(nc.graphFromId, nc.graphToId).points) && void 0 !== Bc ? Bc : [];
                    return {
                      edge: cB,
                      key: `${cB.graphFromId}|${cB.graphToId}|${cB.graphEdgeKind}`,
                      path: Rn(nc.graphFromId === cB.graphFromId ? Vc : [...Vc].reverse())
                    }
                  })),
                  plans: new Map(Bc.map((cB => [cB.graphQuestId, new Set([cB.graphQuestId, ...cB.graphPlanIds])])))
                }
              }(Vc, cB.graphNodes, cB.graphEdges), this.show())
            })).catch((cB => {
              console.error("The quest graph could not be laid out", cB)
            }))
          }
      }
      resumeJump(cB) {
        const Bc = this.storage.getItem(jV);
        this.storage.removeItem(jV), null === Bc || Bc.variation !== cB || this.now() - Bc.departedAt > 6e4 || this.requestArrive(Bc.questId, Bc.completes)
      }
      setTranslator(cB) {
        this.translate = cB, this.emit()
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
        var cB, Bc;
        return null !== (cB = null === this.hoveredId || null === (Bc = this.layout) || void 0 === Bc ? void 0 : Bc.plans.get(this.hoveredId)) && void 0 !== cB ? cB : new Set
      }
      buildSnapshot() {
        const cB = this.layout;
        if (null === cB) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Bc = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: cB.width,
          height: cB.height,
          nodes: cB.nodes.map((cB => {
            let {
              node: nc,
              left: Vc,
              top: Ic
            } = cB;
            return {
              id: nc.graphQuestId,
              name: this.translate(nc.graphNameKey),
              detail: null === nc.graphGiverName ? nc.graphZoneId : `${nc.graphGiverName} \xb7 ${nc.graphZoneId}`,
              state: nc.graphState,
              left: Vc,
              top: Ic,
              inPlan: Bc.has(nc.graphQuestId),
              hovered: nc.graphQuestId === this.hoveredId
            }
          })),
          edges: cB.edges.map((cB => {
            let {
              edge: nc,
              key: Vc,
              path: Ic
            } = cB;
            return {
              key: Vc,
              kind: nc.graphEdgeKind,
              path: Ic,
              inPlan: Bc.has(nc.graphFromId) && Bc.has(nc.graphToId)
            }
          })),
          planning: Bc.size > 0
        }
      }
    }
    var xV = nc(35648);
    const dn = 250,
      An = 2150,
      Gn = -2.8,
      cI = 2.2,
      BV = -27,
      nV = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      VV = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      IV = Math.round(50 + 1e3 * (VV.delay + VV.period / 2)),
      rI = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      uV = Array.from({
        length: 26
      }, ((cB, Bc) => {
        const nc = 2.39996 * Bc,
          Vc = .5 + .618034 * Bc % 1 * .23,
          Ic = Bc % 3 !== 2;
        return {
          rune: Ic ? rI[7 * Bc % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(nc)*Vc).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(nc)*Vc).toFixed(3)})`,
            "--spin": 40 * (Bc % 5 - 2) + "deg",
            "--size": (Ic ? 1 + Bc % 4 * .2 : .3 + Bc % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Bc%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Bc%3).toFixed(2)}s`
          }
        }
      }));

    function sV(cB, Bc) {
      return Array.from({
        length: 30 + 3 * cB + (Bc ? 10 : 0)
      }, ((cB, Bc) => {
        const nc = Bc < 4,
          Vc = nc ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Ic = nc ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          rB = nc ? 2.2 : .6 + Math.random(),
          uc = nc ? .3 : Math.random() < .5 ? .16 : .24,
          sc = nc ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Vc,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Ic.toFixed(2)}rem`,
          "--length": `${rB.toFixed(2)}rem`,
          "--width": `${uc}rem`,
          "--duration": `${Math.round(sc)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function MV(cB) {
      let {
        zeta: Bc,
        period: nc
      } = cB;
      const Vc = 2 * Math.PI / nc;
      return {
        w: Vc,
        decay: Bc * Vc / Math.sqrt(1 - Bc * Bc)
      }
    }
    let PV = !1;

    function qI() {
      if (PV) return;
      PV = !0;
      const cB = document.createElement("style");
      cB.textContent = function() {
        const cB = MV(nV),
          Bc = MV(VV),
          nc = Bc => Math.exp(-cB.decay * Bc) * Math.sin(cB.w * Bc),
          Vc = nc(Math.atan(cB.w / cB.decay) / cB.w),
          Ic = .25,
          rB = 2.15,
          uc = Math.round(215),
          sc = [];
        for (let Mc = 0; Mc <= uc; Mc++) {
          const cB = Mc / uc * rB;
          let Pc = Math.sin(Math.min(cB, Ic) / Ic * Math.PI / 2) ** 2,
            qB = 0,
            Oc = 1,
            Tc = 1 - .2 * Pc,
            fc = 1;
          if (cB >= Ic) {
            const uc = cB - Ic,
              sc = Math.max(0, uc - .05);
            Pc = Math.exp(-sc / .05), qB = nc(sc + nV.lead * (1 - Math.exp(-sc / nV.rush))) / Vc;
            const Mc = sc - VV.delay,
              mB = Mc <= 0 ? 0 : 1 - Math.exp(-Bc.decay * Mc) * (Math.cos(Bc.w * Mc) + Bc.decay / Bc.w * Math.sin(Bc.w * Mc)),
              ec = Math.max(0, (cB - 1.77) / (rB - 1.77));
            Oc = (1 + (VV.to - 1) * mB) * (1 + .08 * ec), Tc = 1.1 + 1.5 * Math.exp(-uc / .07) + .3 * Math.exp(-(((1e3 * uc - IV) / 100) ** 2)) + .8 * ec, fc = 1 - ec ** 1.5
          }
          const mB = .15 * Pc + Gn * qB,
            ec = -.1 * Pc + cI * qB,
            tB = 3 * Pc + BV * qB;
          sc.push(`${(Mc/uc*100).toFixed(3)}% { opacity: ${fc.toFixed(3)}; transform: translate(${mB.toFixed(3)}rem, ${ec.toFixed(3)}rem) rotate(${tB.toFixed(2)}deg) scale(${Oc.toFixed(3)}); filter: brightness(${Tc.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${sc.join(" ")} }`
      }(), document.head.append(cB)
    }
    const OV = "skyblockForgeView",
      TV = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class fV extends qB {
      constructor(cB, Bc, nc, Vc, Ic) {
        super(cB, nc, Vc), this.translate = Bc, this.requestForge = Ic, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (cB, Bc) => {
          var nc, Vc;
          null !== this.forging || (null !== (nc = this.owned[(0, xV.p)(Bc, cB)]) && void 0 !== nc ? nc : 0) <= 0 || (this.selected[cB] = this.selected[cB] === Bc ? null : Bc, this.status = null, null === (Vc = this.onPartSelected) || void 0 === Vc || Vc.call(this), this.emit())
        }, this.forge = cB => {
          var Bc, nc;
          const Vc = this.selectedParts();
          if (null === Vc || this.isPending() || !this.open) return;
          const Ic = (0, xV.m)(Vc);
          if (null === Ic || Ic.coalCost > this.coal) return;
          const rB = this.preview(Ic),
            uc = null !== (Bc = null === (nc = this.onForgeStarted) || void 0 === nc ? void 0 : nc.call(this, rB.tier, rB.named, cB)) && void 0 !== Bc ? Bc : () => {};
          if (this.dropArrival(), cB) {
            const cB = {
              id: ++this.forgeId,
              preview: rB,
              timers: [],
              stopSounds: uc,
              landed: !1,
              reply: null
            };
            cB.timers.push(setTimeout((() => {
              cB.landed = !0, null !== cB.reply && (this.apply(cB.reply), cB.reply = null, this.emit())
            }), dn), setTimeout((() => {
              this.finishForge(cB)
            }), An)), this.forging = cB
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Vc)
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === cB.forgeMessageKind) return this.dropForge(), this.apply(cB), this.status = null, void this.show();
        const Bc = this.forging;
        if (null !== Bc && null !== cB.forgeRefusalKey) this.dropForge();
        else if (null !== Bc && !Bc.landed) return void(Bc.reply = cB);
        this.apply(cB), this.emit()
      }
      apply(cB) {
        if (this.owned = cB.forgeOwnedParts, this.coal = cB.forgeCoalOwned, this.keepSelectionOwned("open" === cB.forgeMessageKind), null !== cB.forgeForgedSwordId) {
          var Bc;
          const nc = (0, xV.m)(cB.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.displayName) && void 0 !== Bc ? Bc : ""
            }
          }
        } else null !== cB.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: cB.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(cB) {
        this.translate = cB, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(cB) {
        var Bc;
        this.forging = null;
        const nc = this.selectedParts(),
          Vc = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: cB.id,
          sameSword: null !== nc && (null === (Bc = (0, xV.m)(nc)) || void 0 === Bc ? void 0 : Bc.displayName) === cB.preview.name,
          timer: Vc
        }, this.emit()
      }
      dropForge() {
        const cB = this.forging;
        if (null !== cB) {
          this.forging = null;
          for (const Bc of cB.timers) clearTimeout(Bc);
          cB.stopSounds(), null !== cB.reply && this.apply(cB.reply)
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
        var cB, Bc, nc;
        const Vc = this.selectedParts(),
          Ic = null === Vc ? null : (0, xV.m)(Vc),
          rB = null !== (cB = null === (Bc = this.forging) || void 0 === Bc ? void 0 : Bc.preview) && void 0 !== cB ? cB : null === Ic ? null : this.preview(Ic);
        return {
          enabled: this.received,
          open: this.open,
          slots: xV.k.map((cB => ({
            kind: cB,
            label: this.translate(TV[cB]),
            parts: this.partsFor(cB)
          }))),
          coalOwned: this.coal,
          preview: rB,
          unformedSword: xV.i[null !== (nc = this.selected.Blade) && void 0 !== nc ? nc : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((cB => cB > 0)),
          canForge: null !== rB && !rB.coalShort && !this.isPending(),
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
      preview(cB) {
        return {
          name: cB.displayName,
          lore: cB.lore,
          baseSword: cB.baseSword,
          enchantmentTier: cB.enchantmentTier,
          tier: Number(cB.enchantmentTier.slice(-1)),
          named: cB.named,
          stats: this.stats(cB),
          effects: cB.effects,
          coalCost: cB.coalCost,
          coalShort: null === this.forging && cB.coalCost > this.coal
        }
      }
      partsFor(cB) {
        const Bc = [];
        for (const Vc of xV.e) {
          var nc;
          const Ic = (0, xV.p)(Vc, cB),
            rB = null !== (nc = this.owned[Ic]) && void 0 !== nc ? nc : 0;
          rB > 0 && Bc.push({
            material: Vc,
            itemName: Ic,
            owned: rB,
            selected: this.selected[cB] === Vc,
            placeholder: !1
          })
        }
        if (0 === Bc.length) {
          const nc = xV.e[0];
          Bc.push({
            material: nc,
            itemName: (0, xV.p)(nc, cB),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Bc
      }
      stats(cB) {
        const Bc = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${cB.powerMultiplier.toFixed(2)}`,
          better: cB.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${cB.damageMultiplier.toFixed(2)}`,
          better: cB.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/cB.cooldownMultiplier).toFixed(2)}`,
          better: cB.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${cB.knockbackMultiplier.toFixed(2)}`,
          better: cB.knockbackMultiplier > 1
        }];
        return cB.reachBonus > 0 && Bc.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${cB.reachBonus.toFixed(1)}`,
          better: !0
        }), cB.damageReduction > 0 && Bc.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*cB.damageReduction)}%`,
          better: !0
        }), Bc
      }
      selectedParts() {
        const {
          Blade: cB,
          Guard: Bc,
          Handle: nc
        } = this.selected;
        return null === cB || null === Bc || null === nc ? null : {
          blade: cB,
          guard: Bc,
          handle: nc
        }
      }
      keepSelectionOwned(cB) {
        for (const nc of xV.k) {
          var Bc;
          const Vc = this.selected[nc];
          if (null !== Vc && (null !== (Bc = this.owned[(0, xV.p)(Vc, nc)]) && void 0 !== Bc ? Bc : 0) > 0) continue;
          if (!cB) {
            this.selected[nc] = null;
            continue
          }
          const Ic = [...xV.e].reverse().find((cB => {
            var Bc;
            return (null !== (Bc = this.owned[(0, xV.p)(cB, nc)]) && void 0 !== Bc ? Bc : 0) > 0
          }));
          this.selected[nc] = null !== Ic && void 0 !== Ic ? Ic : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const mI = "skyblockSmugglerView",
      eV = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class tI extends qB {
      constructor(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(cB, nc, Vc), this.translate = Bc, this.requestBuy = Ic, this.now = rB, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = cB => cB, this.onBought = null, this.buy = cB => {
          const Bc = this.deals[cB];
          void 0 !== Bc && !this.isPending() && this.open && !this.soldOut.has(cB) && this.canAfford(Bc) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, cB))
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        if (this.received = !0, this.day = cB.smugglerDay, this.deals = cB.smugglerDeals, this.rivets = cB.smugglerRivetsOwned, this.crests = cB.smugglerCrestsOwned, this.soldOut = new Set(cB.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + cB.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === cB.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = cB.smugglerBoughtSlot, null !== cB.smugglerBoughtSlot) {
          var Bc, nc;
          const Vc = this.deals[cB.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Vc ? "" : this.dealName(Vc),
              amount: String(null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.smugglerDealAmount) && void 0 !== Bc ? Bc : 0)
            }
          }, this.boughtCount++, null === (nc = this.onBought) || void 0 === nc || nc.call(this)
        } else null !== cB.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: cB.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, void 0 !== nc && (this.itemName = nc), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(cB) {
        if (null !== cB.smugglerDealUniqueName) return cB.smugglerDealUniqueName;
        const Bc = eV[cB.smugglerDealItem];
        return void 0 === Bc ? this.itemName(cB.smugglerDealItem) : this.translate(Bc)
      }
      canAfford(cB) {
        return cB.smugglerDealRivets <= this.rivets && cB.smugglerDealCrests <= this.crests
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
        const cB = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return cB <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : cB < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(cB)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(cB / 60)),
          minutes: String(cB % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((cB, Bc) => ({
            slot: Bc,
            itemName: cB.smugglerDealItem,
            displayName: this.dealName(cB),
            enchantmentTier: cB.smugglerDealEnchantmentTier,
            amount: cB.smugglerDealAmount,
            rivets: cB.smugglerDealRivets,
            crests: cB.smugglerDealCrests,
            affordable: this.canAfford(cB),
            soldOut: this.soldOut.has(Bc),
            justBought: this.boughtSlot === Bc
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
    const SV = "skyblockPassageView",
      yI = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function zI(cB, Bc) {
      return cB(yI[Bc])
    }

    function pV(cB, Bc, nc, Vc) {
      const Ic = Math.ceil((nc - Vc) / 864e5),
        rB = zI(cB, Bc);
      return Ic > 1 ? cB("skyblockGame:passageNextDays", {
        phase: rB,
        days: String(Ic)
      }) : cB("skyblockGame:passageNextSoon", {
        phase: rB
      })
    }
    class hV extends qB {
      constructor(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(cB, nc, Vc), this.translate = Bc, this.now = Ic, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = cB => cB, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        this.message = cB, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, void 0 !== nc && (this.itemName = nc), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(cB) {
        return {
          itemName: cB.passageFish,
          displayName: this.itemName(cB.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(cB.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const cB = this.message;
        return null === cB ? {
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
          phase: cB.passagePhase,
          phaseName: zI(this.translate, cB.passagePhase),
          visitors: cB.passageVisitors.map((cB => this.describe(cB))),
          resting: this.describe(cB.passageResting),
          nextPhase: cB.passageNextPhase,
          next: pV(this.translate, cB.passageNextPhase, cB.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    class aI {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12e3,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
        this.limit = cB, this.windowMs = Bc, this.spacingMs = nc, this.now = Vc, this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const cB of this.priority) cB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const cB = this.now();
        this.sent.push(cB), this.lastSentAt = cB, this.schedule(), this.notify()
      }
      addPriority(cB) {
        return this.priority.add(cB), () => {
          this.priority.delete(cB)
        }
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const cB of this.priority)
          if (cB.waiting()) return !0;
        return !1
      }
      prune() {
        const cB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= cB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const cB = this.now(),
          Bc = this.lastSentAt + this.spacingMs,
          nc = Math.min(Bc > cB ? Bc : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        nc !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, nc - cB)))
      }
      notify() {
        for (const cB of this.listeners) cB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    const lV = "skyblockKeepersChairView";
    class YV extends qB {
      constructor(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new aI;
        super(cB, nc, Vc), this.translate = Bc, this.requestAim = Ic, this.now = rB, this.pacer = uc, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = cB => cB, this.aim = cB => {
          !this.awaitingReply && this.open && this.atChair && cB !== this.favoured && (null === cB || this.islands.some((Bc => Bc.keepersChairIslandId === cB && Bc.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== cB && void 0 !== cB ? cB : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = uc.subscribe((() => {
          this.emit()
        }))
      }
      EV(cB) {
        var Bc, nc;
        this.received = !0;
        const Vc = this.favoured,
          Ic = this.atChair;
        var rB;
        return this.islands = cB.keepersChairIslands, this.favoured = cB.keepersChairFavoured, this.passage = null !== (Bc = cB.keepersChairPassage) && void 0 !== Bc ? Bc : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (nc = cB.keepersChairAtChair) || void 0 === nc || nc, "place" === cB.keepersChairMessageKind ? (!Ic && this.atChair && "refused" === (null === (rB = this.status) || void 0 === rB ? void 0 : rB.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === cB.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== cB.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: cB.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Vc && (this.status = null === this.favoured ? {
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
      receivePassage(cB) {
        this.received && (this.passage = cB, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, void 0 !== nc && (this.itemName = nc), this.emit()
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
      islandName(cB) {
        const Bc = this.islands.find((Bc => Bc.keepersChairIslandId === cB));
        return void 0 === Bc ? cB : this.translate(Bc.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const cB = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Bc = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((cB => {
            const Bc = cB.keepersChairFeaturedFish;
            return {
              id: cB.keepersChairIslandId,
              name: this.translate(cB.keepersChairIslandNameKey),
              relit: cB.keepersChairIslandRelit,
              featuredFish: null === Bc ? null : {
                itemName: Bc,
                displayName: this.itemName(Bc)
              },
              favoured: cB.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === cB ? null : {
            tone: cB.tone,
            text: this.translate(cB.key, null === cB.island ? void 0 : {
              island: this.islandName(cB.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Bc ? null : {
            phase: Bc.keepersChairPassagePhase,
            phaseName: zI(this.translate, Bc.keepersChairPassagePhase),
            nextPhase: Bc.keepersChairPassageNextPhase,
            next: pV(this.translate, Bc.keepersChairPassageNextPhase, Bc.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const LV = "skyblockReachLogView",
      gI = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      UV = "Caught Fish",
      bI = [1, 2, 4];

    function ZV(cB, Bc) {
      return cB.map((cB => ({
        ...cB,
        reachLogPageFish: cB.reachLogPageFish.map((cB => ({
          ...cB,
          reachLogFishFresh: Bc(cB)
        })))
      })))
    }
    class QV extends qB {
      constructor(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new aI;
        super(cB, nc, Vc), this.translate = Bc, this.requestOpen = Ic, this.pacer = rB, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = cB => cB, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = cB => {
          this.pages.some((Bc => Bc.reachLogIslandId === cB)) && (this.selected = cB, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = rB.subscribe((() => {
          this.emit()
        }))
      }
      EV(cB) {
        if (this.received = !0, "status" === cB.reachLogMessageKind) return !0 === cB.reachLogNews && this.markNews(), this.serverFresh = cB.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Bc = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== cB.reachLogMessageKind)
          if (this.pageViews = null, this.pages = ZV(cB.reachLogPages, (cB => cB.reachLogFishFresh || this.heldFresh.has(cB.reachLogFishItem))), this.letGoShown = cB.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Bc) this.showPages();
          else {
            for (const cB of this.pages)
              for (const Bc of cB.reachLogPageFish) Bc.reachLogFishFresh && this.heldFresh.add(Bc.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, this.pageViews = null, void 0 !== nc && (this.itemName = nc), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = ZV(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var cB, Bc, nc, Vc;
        const Ic = this.pages.find((cB => cB.reachLogPageFish.some((cB => cB.reachLogFishFresh))));
        if (void 0 !== Ic) return Ic.reachLogIslandId;
        if (null !== this.selected && this.pages.some((cB => cB.reachLogIslandId === this.selected))) return this.selected;
        return null !== (cB = null !== (Bc = null === (nc = this.pages.filter((cB => cB.reachLogIslandAwake)).at(-1)) || void 0 === nc ? void 0 : nc.reachLogIslandId) && void 0 !== Bc ? Bc : null === (Vc = this.pages[0]) || void 0 === Vc ? void 0 : Vc.reachLogIslandId) && void 0 !== cB ? cB : null
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
        return this.pages.map((cB => {
          var Bc;
          return {
            id: cB.reachLogIslandId,
            name: this.translate(cB.reachLogIslandNameKey),
            awake: cB.reachLogIslandAwake,
            gold: cB.reachLogPageGold,
            caught: cB.reachLogPageFish.filter((cB => cB.reachLogFishCaught && !cB.reachLogFishVisitor)).length,
            total: cB.reachLogPageFish.filter((cB => !cB.reachLogFishVisitor)).length,
            fish: cB.reachLogPageFish.map((cB => {
              const Bc = cB.reachLogFishBestKg;
              return {
                itemName: cB.reachLogFishItem,
                name: cB.reachLogFishCaught ? this.itemName(cB.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: cB.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / cB.reachLogFishChance))
                }),
                best: cB.reachLogFishCaught ? null === Bc ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Bc.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: cB.reachLogFishMarks,
                ribbons: bI.map((Bc => 0 !== (cB.reachLogFishRibbons & Bc))),
                glimmer: 0 !== (8 & cB.reachLogFishRibbons),
                halo: 0 !== (32 & cB.reachLogFishRibbons),
                fresh: cB.reachLogFishFresh,
                visitor: cB.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Bc = cB.reachLogPageReturner) && void 0 !== Bc ? Bc : null)
          }
        }))
      }
      buildReturner(cB) {
        return null === cB ? null : {
          itemName: cB.reachLogReturnerFishItem,
          line: this.translate(cB.reachLogReturnerLineKey, {
            name: this.translate(cB.reachLogReturnerNameKey),
            trinket: this.translate(cB.reachLogReturnerTrinketKey)
          }),
          back: cB.reachLogReturnerBack
        }
      }
      receivePassagePhase(cB) {
        null !== this.passagePhase && this.passagePhase !== cB && (this.pagesCurrent = !1), this.passagePhase = cB
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const CV = "skyblockLampLightView";
    class vI {
      constructor(cB, Bc, nc, Vc) {
        this.Vu = cB, this.translate = Bc, this.requestCommand = nc, this.pacer = Vc, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.CV = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = cB => {
          cB ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = cB => {
          this.send(`buy ${cB}`)
        }, this.socket = cB => {
          this.send(`socket ${null!==cB&&void 0!==cB?cB:Cc}`)
        }, this.wearTint = cB => {
          this.send(`tint ${null!==cB&&void 0!==cB?cB:Cc}`)
        }, this.setSituation = cB => {
          this.situation = cB, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Vc.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Vc.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      EV(cB) {
        if (this.message = cB, null !== cB.lampLightShop && (this.shop = cB.lampLightShop), "open" === cB.lampLightKind && (this.refusalKey = null), "reply" === cB.lampLightKind) {
          var Bc;
          const Ic = null !== (Bc = cB.lampLightReplyTag) && void 0 !== Bc ? Bc : null,
            rB = null !== Ic && Ic === this.offTag;
          var nc, Vc;
          if (rB ? this.settleOff() : null !== Ic && Ic !== this.awaitingTag || this.settleReply(), this.refusalKey = cB.lampLightRefusalKey, null !== cB.lampLightBought && !rB) this.sparkle = {
            id: cB.lampLightBought,
            count: (null !== (nc = null === (Vc = this.sparkle) || void 0 === Vc ? void 0 : Vc.count) && void 0 !== nc ? nc : 0) + 1
          }
        }
        cB.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === cB.lampLightKind && (this.lastGained = cB.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(cB) {
        cB !== this.atChair && (this.atChair = cB, cB && (this.refusalKey = null), this.emit())
      }
      setTranslator(cB, Bc) {
        this.translate = cB, this.locale = null !== Bc && void 0 !== Bc ? Bc : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.CV = !0
      }
      send(cB) {
        var Bc;
        if (null !== this.awaitingTag || "ready" !== (null === (Bc = this.message) || void 0 === Bc ? void 0 : Bc.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const nc = this.nextTag();
        this.awaitingTag = nc, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${cB} ${nc}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const cB = this.nextTag();
        this.offTag = cB, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${cB}`)
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
        this.CV || (this.snapshot = this.buildSnapshot(), this.Vu(this.snapshot))
      }
      formatLight(cB) {
        return Math.floor(cB).toLocaleString(this.locale)
      }
      formatPercent(cB) {
        const Bc = 100 * cB;
        return Bc >= 10 ? Math.round(Bc).toLocaleString(this.locale) : Bc.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(cB, Bc) {
        if ("bite" === cB) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Bc.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === cB) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Bc.lampLightRareChance)
        });
        if ("notice" === cB) return null === Bc.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Bc.lampLightNoticeChance)
        });
        const nc = "meter" === cB ? Bc.lampLightMeterCatches : Bc.lampLightBloomCatches;
        return null === nc ? null : this.translate("meter" === cB ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(nc))
        })
      }
      oddsLines(cB, Bc) {
        const nc = (cB, Bc) => {
            var nc;
            return null !== (nc = {
              bite: Bc.lampLightBiteMs,
              rare: Bc.lampLightRareChance,
              meter: Bc.lampLightMeterCatches,
              bloom: Bc.lampLightBloomCatches,
              notice: Bc.lampLightNoticeChance
            } [cB]) && void 0 !== nc ? nc : 0
          },
          Vc = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Ic = [];
        for (const rB of ["bite", "rare", "meter", "bloom", "notice"]) {
          const uc = this.formatOdds(rB, cB),
            sc = this.formatOdds(rB, Bc);
          if (null === uc || null === sc || "bite" !== rB && "rare" !== rB && uc === sc) continue;
          const Mc = nc(rB, Bc) - nc(rB, cB),
            Pc = Vc[rB] ? Mc < 0 : Mc > 0;
          Ic.push({
            label: rB,
            before: uc,
            after: sc,
            tone: uc === sc ? "same" : Pc ? "better" : "worse"
          })
        }
        return Ic
      }
      charmView(cB, Bc, nc) {
        const Vc = cB.lampLightCharmId.charAt(0).toUpperCase() + cB.lampLightCharmId.slice(1),
          Ic = "bloom" === this.situation;
        return {
          id: cB.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Vc}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Vc}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(cB.lampLightCharmCost)
          }),
          owned: cB.lampLightCharmOwned,
          affordable: nc >= cB.lampLightCharmCost,
          socketed: Bc.lampLightSocketed === cB.lampLightCharmId,
          lines: this.oddsLines(Ic ? Bc.lampLightBareBloom : Bc.lampLightBareOpen, Ic ? cB.lampLightCharmBloom : cB.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var cB, Bc, nc, Vc;
        const Ic = this.message,
          rB = "ready" === (null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) ? this.shop : null,
          uc = null !== (cB = null === Ic || void 0 === Ic ? void 0 : Ic.lampLightBalance) && void 0 !== cB ? cB : 0,
          sc = this.atChair,
          Mc = "loading" === (null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Pc = "ready" !== (null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) || sc ? null !== (Bc = this.refusalKey) && void 0 !== Bc ? Bc : Mc : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Ic && "locked" !== Ic.lampLightStatus,
          status: null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) && void 0 !== nc ? nc : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(uc)
          }),
          releasing: null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.lampLightReleasing) && void 0 !== Vc && Vc,
          gained: null === Ic || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Ic || void 0 === Ic ? void 0 : Ic.lampLightStatus) && sc && !this.isPending(),
          situation: this.situation,
          shop: null === rB ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: rB.lampLightOddsRod,
              island: this.translate(rB.lampLightIslandNameKey)
            }),
            heldRod: null !== rB.lampLightHeldRod,
            charms: rB.lampLightCharms.map((cB => this.charmView(cB, rB, uc))),
            tints: rB.lampLightTints.map((cB => {
              const Bc = cB.lampLightTintId,
                [nc, Vc, Ic] = cB.lampLightTintColour;
              return {
                id: Bc,
                name: this.translate(`skyblockGame:lampLightTint${Bc.charAt(0).toUpperCase()}${Bc.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(cB.lampLightTintCost)
                }),
                owned: cB.lampLightTintOwned,
                affordable: uc >= cB.lampLightTintCost,
                wearing: rB.lampLightTint === Bc,
                colour: `rgb(${nc}, ${Vc}, ${Ic})`
              }
            })),
            wearingIslandColours: null === rB.lampLightTint
          },
          notice: null === Pc ? null : this.translate(Pc),
          sparkle: this.sparkle
        }
      }
    }
    const DV = "skyblockMagmawardView";
    class NV {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Vu = cB, this.now = Bc, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = wc.map((() => 0)), this.wornAt = wc.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      EV(cB) {
        var Bc, nc;
        const Vc = wc.map(((Bc, nc) => !0 === cB.magmawardPiecesWorn[nc]));
        if (!Vc.includes(!0)) return this.snapshot = null, void this.Vu(null);
        const Ic = this.now(),
          rB = this.snapshot;
        null === rB && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const uc = cB.magmawardFuelCarried,
          sc = !Vc.includes(!1);
        let Mc = null !== (Bc = null === rB || void 0 === rB ? void 0 : rB.pulse) && void 0 !== Bc ? Bc : null,
          Pc = null !== (nc = null === rB || void 0 === rB ? void 0 : rB.flare) && void 0 !== nc ? nc : null;
        cB.magmawardFuelBurned ? (Mc = "burn", Pc = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Ic, this.flareAt = Ic) : null !== rB && uc > rB.fuel && (Mc = "gain", this.pulseToken++, this.pulseAt = Ic), sc && null !== rB && !rB.fullSet && (Pc = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Ic, this.setLitAt = Ic);
        const qB = wc.map(((cB, Bc) => (Vc[Bc] && null !== rB && !rB.pieces[Bc].worn && (this.wornTokens[Bc]++, this.wornAt[Bc] = Ic), {
          itemName: cB,
          worn: Vc[Bc],
          wornToken: this.wornTokens[Bc],
          justWorn: Vc[Bc] && this.isPlaying(this.wornAt[Bc], Ic)
        })));
        this.snapshot = {
          pieces: qB,
          wornCount: Vc.filter(Boolean).length,
          fullSet: sc,
          fuel: uc,
          fuelState: uc <= 0 ? "empty" : uc <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Ic) ? Mc : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Ic) ? Pc : null,
          flareToken: this.flareToken,
          setLit: sc && this.isPlaying(this.setLitAt, Ic),
          setLitToken: this.setLitToken
        }, this.Vu(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Vu(null)
      }
      isPlaying(cB, Bc) {
        return Bc - cB < 1200
      }
    }
    const EV = "skyblockGlowtideView";
    class oV {
      constructor(cB) {
        this.Vu = cB, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = cB => {
          this.arrow = cB, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      EV(cB) {
        this.bloom = cB.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Vu(null))
      }
      afterRender(cB, Bc) {
        const nc = this.bloom;
        if (null === nc || null === cB) return;
        const Vc = nc.glowtideBloomX - cB[0],
          rB = nc.glowtideBloomZ - cB[2],
          uc = Math.hypot(Vc, rB),
          sc = this.snapshot,
          Mc = null !== sc && void 0 !== sc && sc.inRange ? 1 : 0,
          Pc = uc <= 12.5 + Mc && cB[1] - nc.glowtideBloomY <= 10 + Mc;
        !Pc || null !== sc && void 0 !== sc && sc.inRange || this.inRangeToken++;
        const qB = {
          colour: nc.glowtideBloomColour,
          inRange: Pc,
          distance: Math.round(uc),
          inRangeToken: this.inRangeToken
        };
        (null === sc || qB.colour !== sc.colour || qB.inRange !== sc.inRange || !Pc && qB.distance !== sc.distance) && (this.snapshot = qB, this.Vu(qB));
        const Oc = Ic.b.computeShortestRotation(Bc, (0, Ic.ob)([Vc, 0, rB]));
        null === this.arrow || Math.abs(Oc - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Oc}rad)`, this.arrowTurn = Oc)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Vu(null)
      }
    }
    const WV = "skyblockGlowMeterView";
    class wV {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Vu = cB, this.now = Bc, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      EV(cB) {
        const Bc = this.now(),
          {
            glowMeterFill: nc,
            glowMeterCapacity: Vc
          } = cB,
          Ic = nc >= Vc,
          rB = this.snapshot;
        null !== rB && (Ic && !rB.full && (this.fullToken++, this.fullAt = Bc), rB.full && !Ic ? (this.burstToken++, this.burstAt = Bc) : nc > rB.fill && (this.gainToken++, this.gainAt = Bc)), this.snapshot = {
          fill: nc,
          Qc: Vc,
          ratio: Math.min(1, Math.max(0, nc / Vc)),
          full: Ic,
          rares: cB.glowMeterRares,
          ready: Ic && this.isPlaying(this.fullAt, Bc),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Bc),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Bc),
          gainToken: this.gainToken
        }, this.Vu(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Vu(null)
      }
      isPlaying(cB, Bc) {
        return Bc - cB < 2e3
      }
    }
    const kI = "skyblockHushWaitView";
    class XV {
      constructor(cB) {
        this.Vu = cB, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      EV(cB) {
        let {
          hushWaitMs: Bc,
          hushWaitTotalMs: nc,
          hushWaitLines: Vc
        } = cB;
        if (this.clearTimers(), this.token++, 0 === Vc.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Bc <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Vc[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Ic = Math.max(null !== nc && void 0 !== nc ? nc : Bc, Bc),
          rB = Ic - Bc,
          uc = cB => Ic * cB / Vc.length,
          sc = cB => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Ic,
              elapsedMs: rB,
              line: Vc[cB],
              lineIndex: cB
            })
          };
        let Mc = 0;
        for (; Mc + 1 < Vc.length && uc(Mc + 1) <= rB;) Mc++;
        sc(Mc);
        for (let Pc = Mc + 1; Pc < Vc.length; Pc++) this.later(uc(Pc) - rB, (() => {
          sc(Pc)
        }));
        this.later(Bc, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(cB) {
        this.snapshot = cB, this.Vu(cB)
      }
      later(cB, Bc) {
        this.timers.push(setTimeout(Bc, cB))
      }
      clearTimers() {
        for (const cB of this.timers) clearTimeout(cB);
        this.timers = []
      }
    }
    const HV = "skyblockTideChartsView",
      FV = 36e5,
      JV = 864e5;

    function jI(cB, Bc, nc) {
      const [Vc, Ic, rB, uc] = cB.tideChartArea, sc = Math.floor(Bc), Mc = Math.floor(nc);
      return sc >= Vc && sc <= rB && Mc >= Ic && Mc <= uc
    }

    function RV(cB, Bc, nc) {
      const [Vc, Ic, rB, uc] = cB.tideChartWater;
      return function(cB, Bc, nc, Vc, Ic, rB) {
        const uc = 4 - kB(Math.floor(Ic) - (cB - nc), nc);
        return 5 * kB(Math.floor(rB) - (Bc - Vc), Vc) + uc
      }(Vc, Ic, rB, uc, Bc, nc)
    }

    function iI(cB, Bc, nc) {
      const Vc = cB.tideCharts;
      for (let Ic = 0; Ic < Vc.length; Ic++)
        if (jI(Vc[Ic], Bc, nc)) return Vc[Ic];
      return null
    }

    function KV(cB, Bc, nc) {
      const Vc = Math.max(0, Bc - nc);
      return Vc > JV ? cB("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Vc / JV))
      }) : Vc > FV ? cB("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Vc / FV))
      }) : cB("skyblockGame:tideChartsTurnSoon")
    }
    class xI extends qB {
      constructor(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(cB, nc, Vc), this.translate = Bc, this.now = Ic, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Vn = cB => {
          this.picked = cB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        const Bc = this.message;
        if (null !== Bc)
          for (const Vc of cB.tideCharts) {
            var nc;
            const cB = Bc.tideCharts.find((cB => cB.tideChartIsland === Vc.tideChartIsland)),
              Ic = Vc.tideChartLit & ~(null !== (nc = null === cB || void 0 === cB ? void 0 : cB.tideChartLit) && void 0 !== nc ? nc : 0);
            void 0 !== cB && 0 !== Ic && (this.pulse = {
              island: Vc.tideChartIsland,
              cells: Ic,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = cB, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(cB, Bc) {
        var nc;
        const Vc = null === this.message || Number.isNaN(cB) ? null : iI(this.message, cB, Bc),
          Ic = null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc.tideChartIsland) && void 0 !== nc ? nc : null,
          rB = null === Vc ? -1 : function(cB, Bc, nc) {
            const [Vc, Ic, rB, uc] = cB.tideChartWater;
            return function(cB, Bc, nc, Vc, Ic, rB, uc) {
              return ((Ic - cB) / (nc + uc)) ** 2 + ((rB - Bc) / (Vc + uc)) ** 2 <= 1
            }(Vc, Ic, rB, uc, Bc, nc, 2) ? RV(cB, Bc, nc) : -1
          }(Vc, cB, Bc);
        return (Ic !== this.hereIsland || rB !== this.hereCell) && (this.hereIsland = Ic, this.hereCell = rB, null !== Ic && (this.lastIsland = Ic), !0)
      }
      afterRender(cB) {
        if (null === this.message) return;
        this.lastX = null === cB ? Number.NaN : cB[0], this.lastZ = null === cB ? Number.NaN : cB[2];
        const Bc = this.locate(this.lastX, this.lastZ),
          nc = this.expirePulses();
        (Bc || nc || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const cB = this.now();
        return !(!this.open || cB - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = cB, KV(this.translate, this.message.tideChartTurnsInMs, cB - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(cB, Bc) {
        const nc = null === this.message ? null : iI(this.message, cB, Bc);
        if (null === nc) return;
        const Vc = RV(nc, cB, Bc);
        0 === (nc.tideChartPreBlank & 1 << Vc) && (this.cast = {
          island: nc.tideChartIsland,
          cell: Vc,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const cB = this.now();
        let Bc = !1;
        return 0 !== this.pulse.cells && cB - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Bc = !0), null !== this.cast && cB - this.cast.atMs >= 1500 && (this.cast = null, Bc = !0), Bc
      }
      setTranslator(cB) {
        this.translate = cB, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(cB, Bc) {
        var nc;
        return null !== (nc = cB.tideCharts.find((cB => cB.tideChartIsland === Bc))) && void 0 !== nc ? nc : null
      }
      describe(cB) {
        var Bc, nc, Vc;
        const Ic = cB.tideChartIsland,
          rB = [];
        for (let fc = 0; fc < 25; fc++) {
          const Bc = 1 << fc;
          0 !== (cB.tideChartLit & Bc) ? rB.push("lit") : 0 !== (cB.tideChartClear & Bc) ? rB.push("clear") : 0 !== (cB.tideChartPreBlank & Bc) ? rB.push("shore") : rB.push("water")
        }
        const uc = function(cB) {
            let Bc = 0;
            for (let nc = cB >>> 0; 0 !== nc; nc &= nc - 1) Bc++;
            return Bc
          }(cB.tideChartLit),
          sc = cB.tideChartInkCount,
          Mc = this.translate(cB.tideChartIslandNameKey),
          Pc = this.translate("skyblockGame:tideChartsLit", {
            lit: String(uc),
            ink: String(sc)
          }),
          qB = null === cB.tideChartPictureNameKey ? null : this.translate(cB.tideChartPictureNameKey),
          Oc = this.hereIsland === Ic && -1 !== this.hereCell ? this.hereCell : null,
          Tc = [`${Mc}: ${Pc}.`];
        if (null !== qB && Tc.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: qB
          })), null !== Oc) {
          const cB = Math.floor(Oc / 5) + 1,
            Bc = Oc % 5 + 1;
          Tc.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(cB),
            column: String(Bc)
          }))
        }
        return {
          island: Ic,
          islandName: Mc,
          cells: rB,
          hereCell: Oc,
          lit: uc,
          ink: sc,
          litText: Pc,
          pictureName: qB,
          gridLabel: Tc.join(" "),
          pulseCells: this.pulse.island === Ic ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Bc = this.cast) || void 0 === Bc ? void 0 : Bc.island) === Ic ? this.cast.cell : null,
          castToken: null !== (nc = null === (Vc = this.cast) || void 0 === Vc ? void 0 : Vc.token) && void 0 !== nc ? nc : 0
        }
      }
      buildSnapshot() {
        var cB, Bc, nc;
        const Vc = this.message;
        if (null === Vc || 0 === Vc.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Ic = this.findChart(Vc, this.hereIsland),
          rB = null !== (cB = null !== (Bc = null !== (nc = this.findChart(Vc, this.open ? this.picked : null)) && void 0 !== nc ? nc : Ic) && void 0 !== Bc ? Bc : this.findChart(Vc, this.lastIsland)) && void 0 !== cB ? cB : Vc.tideCharts[0],
          uc = null === Ic ? null : this.describe(Ic);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: uc,
          card: rB === Ic ? uc : this.describe(rB),
          turnsText: KV(this.translate, Vc.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Vc.tideChartBookCount)
          }),
          tabs: Vc.tideCharts.map((cB => ({
            island: cB.tideChartIsland,
            name: this.translate(cB.tideChartIslandNameKey),
            selected: cB.tideChartIsland === rB.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const dV = "skyblockRegularsView",
      AV = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      GV = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function cr(cB, Bc) {
      return "given" === cB ? Bc.given : "owed" === cB ? Bc.owed : Bc.goal
    }
    class BI extends qB {
      constructor(cB, Bc, nc, Vc) {
        super(cB, nc, Vc), this.translate = Bc, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = cB => cB, this.openIsland = cB => {
          this.selected = cB, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = cB => {
          this.selected = cB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        this.message = cB, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const cB = this.openedFromReachLog;
        return this.openedFromReachLog = !1, cB
      }
      setTranslator(cB, Bc, nc) {
        this.translate = cB, void 0 !== nc && (this.itemName = nc), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(cB, Bc, nc) {
        return {
          text: this.translate(cr(cB, Bc), nc),
          given: "given" === cB
        }
      }
      describeRegular(cB, Bc) {
        const nc = this.translate,
          Vc = null !== cB.regularKg,
          Ic = cB.regularMeetings,
          rB = Vc ? 0 === Ic ? nc("skyblockGame:regularsNotMet") : 1 === Ic ? nc("skyblockGame:regularsMeetingsOne") : nc("skyblockGame:regularsMeetings", {
            count: Ic
          }) : "";
        return {
          id: cB.regularId,
          name: nc(cB.regularNameKey),
          line: nc(cB.regularLineKey),
          itemName: cB.regularFishItem,
          fishName: this.itemName(cB.regularFishItem),
          tagged: Vc,
          size: null === cB.regularKg ? nc("skyblockGame:regularsNotTagged") : nc("skyblockGame:regularsSize", {
            kg: cB.regularKg.toFixed(1)
          }),
          meetings: rB,
          chance: nc("skyblockGame:regularsChance", {
            count: cB.regularOneInCasts
          }),
          resting: cB.regularRestingToday,
          gifts: [{
            text: nc("skyblockGame:regularsGiftFlare"),
            given: Ic >= 3
          }, this.describeGift(cB.regularTintGift, AV, {
            tint: nc(cB.regularTintNameKey)
          })],
          history: [...cB.regularHistory].reverse().map((cB => {
            const Vc = cB.regularMeetingKg.toFixed(1),
              Ic = Bc - cB.regularMeetingDay;
            return Ic <= 0 ? nc("skyblockGame:regularsToday", {
              kg: Vc
            }) : nc("skyblockGame:regularsDaysAgo", {
              days: Ic,
              kg: Vc
            })
          }))
        }
      }
      describeIsland(cB, Bc) {
        return {
          id: cB.regularsIslandId,
          name: this.translate(cB.regularsIslandNameKey),
          charm: this.describeGift(cB.regularsCharmGift, GV, {
            charm: this.translate(cB.regularsCharmNameKey)
          }),
          regulars: cB.regularsList.map((cB => this.describeRegular(cB, Bc)))
        }
      }
      buildSnapshot() {
        var cB, Bc, nc, Vc;
        const Ic = this.message;
        if (null === Ic) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const rB = Ic.regularsIslands.map((cB => this.describeIsland(cB, Ic.regularsToday))),
          uc = null !== (cB = null !== (Bc = null === (nc = rB.find((cB => cB.id === this.selected))) || void 0 === nc ? void 0 : nc.id) && void 0 !== Bc ? Bc : null === (Vc = rB[0]) || void 0 === Vc ? void 0 : Vc.id) && void 0 !== cB ? cB : "";
        return {
          enabled: !0,
          open: this.open,
          selected: uc,
          islands: rB
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const nI = "skyblockHiddenWatersView";
    class VI {
      constructor(cB) {
        this.Vu = cB, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      EV(cB) {
        this.snapshot = function(cB) {
          const [Bc, nc] = cB.hiddenWatersMapSize, Vc = (cB, Vc) => ({
            left: 1 - cB / Bc,
            top: Vc / nc
          }), Ic = new Map;
          for (const [uc, sc] of cB.hiddenWatersGlimpses) {
            var rB;
            const cB = null !== (rB = Ic.get(uc)) && void 0 !== rB ? rB : [];
            cB.push(sc), Ic.set(uc, cB)
          }
          return {
            found: cB.hiddenWatersFound,
            total: cB.hiddenWatersTotal,
            aspect: nc / Bc,
            pins: cB.hiddenWatersPins.map((cB => {
              let [Bc, nc] = cB;
              return Vc(Bc, nc)
            })),
            islands: cB.hiddenWatersIslands.map((cB => {
              let [Ic, rB, uc, sc] = cB;
              const {
                left: Mc,
                top: Pc
              } = Vc(uc + 1, rB);
              return {
                left: Mc,
                top: Pc,
                width: (uc + 1 - Ic) / Bc,
                height: (sc + 1 - rB) / nc
              }
            })),
            glimpses: Ic
          }
        }(cB), this.Vu(this.snapshot)
      }
    }
    const II = "skyblockDialogueView";
    class rr extends qB {
      constructor(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(cB, nc, Vc), this.translate = Bc, this.requestDialogue = Ic, this.now = rB, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = cB => {
          this.selection = {
            kind: "quest",
            questId: cB
          }, this.request(), this.show()
        }, this.selectCharacter = cB => {
          this.selection = {
            kind: "character",
            npcId: cB
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      EV(cB) {
        this.received = !0, this.scripts = cB.questDialogueScripts, this.speakers = new Map(cB.questDialogueSpeakers.map((cB => [cB.dialogueSpeakerId, cB]))), this.emit()
      }
      setTranslator(cB) {
        this.translate = cB, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const cB = this.now();
        cB >= this.requestAvailableAt && (this.requestAvailableAt = cB + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var cB;
        const Bc = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Bc,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const nc = this.selection;
        if ("quest" === nc.kind) {
          const cB = this.scripts.find((cB => cB.dialogueQuestId === nc.questId));
          return {
            ...Bc,
            characters: [],
            questFocus: nc.questId,
            conversations: cB ? [this.conversation(cB)] : []
          }
        }
        const Vc = [];
        for (let rB = this.scripts.length - 1; rB >= 0; rB--) {
          const cB = this.scripts[rB].dialogueLines;
          for (let Bc = cB.length - 1; Bc >= 0; Bc--) Vc.includes(cB[Bc].dialogueSpeakerId) || Vc.push(cB[Bc].dialogueSpeakerId)
        }
        const Ic = null !== nc.npcId && Vc.includes(nc.npcId) ? nc.npcId : null !== (cB = Vc[0]) && void 0 !== cB ? cB : null;
        return {
          ...Bc,
          characters: Vc.map((cB => {
            var Bc, nc;
            return {
              id: cB,
              styling: null !== (Bc = null === (nc = this.speakers.get(cB)) || void 0 === nc ? void 0 : nc.dialogueSpeakerStyling) && void 0 !== Bc ? Bc : cB,
              selected: cB === Ic
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((cB => cB.dialogueLines.some((cB => cB.dialogueSpeakerId === Ic)))).map((cB => this.conversation(cB))).reverse()
        }
      }
      conversation(cB) {
        let Bc = null;
        return {
          questId: cB.dialogueQuestId,
          questName: this.translate(cB.dialogueQuestNameKey),
          completed: cB.dialogueQuestCompleted,
          lines: cB.dialogueLines.map(((cB, nc) => {
            var Vc;
            const Ic = cB.dialogueSpeakerId === Bc || null === (Vc = this.speakers.get(cB.dialogueSpeakerId)) || void 0 === Vc ? void 0 : Vc.dialogueSpeakerStyling;
            return Bc = cB.dialogueSpeakerId, {
              key: nc,
              display: {
                line: {
                  translationKey: cB.dialogueLineKey,
                  params: this.params(cB.dialogueLineParams)
                },
                speakerName: Ic,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(cB) {
        if (void 0 !== cB) return Object.fromEntries(Object.entries(cB).map((cB => {
          let [Bc, nc] = cB;
          return [Bc, "string" === typeof nc ? nc : this.translate(nc.translationKey)]
        })))
      }
    }
    var uI = nc(550),
      sI = nc(1128),
      MI = nc(107);
    const PI = "skyblockAutographsView";

    function qr(cB) {
      const Bc = uI.g[cB];
      return {
        label: Bc.chatTag.map((cB => cB.str)).join(""),
        icon: Bc.icon,
        colour: Bc.mainRGB
      }
    }
    class OI extends qB {
      constructor(cB) {
        let Bc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Bc, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      EV(cB) {
        this.signatures = cB.autographSignatures, cB.autographOpen ? this.show() : this.emit()
      }
      setTranslator(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Bc, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var cB;
        const Bc = null !== (cB = this.signatures) && void 0 !== cB ? cB : [],
          nc = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Vc = [...Bc].sort(((cB, Bc) => Number(null !== Bc.autographRank) - Number(null !== cB.autographRank) || Bc.autographSignedAtMs - cB.autographSignedAtMs)).map((cB => ({
            key: `${cB.autographSignedAtMs}|${cB.autographSignerName}`,
            name: (0, sI.d)(cB.autographSignerName, !MI.featureFlags.canSeeRealPlayerNames),
            rank: null === cB.autographRank ? null : qr(cB.autographRank),
            signedOn: nc.format(cB.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Vc,
          total: Vc.length,
          rankTotal: Vc.filter((cB => null !== cB.rank)).length
        }
      }
    }
    const TI = "skyblockHudView",
      fI = () => {},
      mr = {
        getItem: () => null,
        setItem: fI,
        removeItem: fI
      };
    class eI {
      constructor(cB) {
        let {
          translate: Bc,
          translateWithIcons: nc,
          setMenuOpen: Vc = fI,
          dismissMenu: Ic = () => {
            Vc(!1)
          },
          publishSkills: rB = fI,
          publishQuests: uc = fI,
          publishQuestNotification: sc = fI,
          publishDungeons: Mc = fI,
          publishCollections: Pc = fI,
          publishMap: qB = fI,
          publishHud: Oc = fI,
          publishPortalTransit: fc = fI,
          publishDailyReward: mB = fI,
          publishMailbox: ec = fI,
          publishQuestGraph: tB = fI,
          publishForge: Sc = fI,
          publishSmuggler: yB = fI,
          publishKeepersChair: zB = fI,
          publishReachLog: pc = fI,
          publishLampLight: hc = fI,
          publishMagmaward: lc = fI,
          publishGlowtide: Yc = fI,
          publishGlowMeter: Lc = fI,
          publishHushWait: gB = fI,
          publishPassage: Uc = fI,
          publishTideCharts: bB = fI,
          publishRegulars: Zc = fI,
          publishHiddenWaters: Qc = fI,
          publishDialogue: Cc = fI,
          publishAutographs: vB = fI,
          isLoadingScreenUp: Dc = () => !1,
          onDailyRewardCoinLanded: Nc = fI,
          onDailyRewardStarted: Ec = fI,
          onDailyRewardFinished: oc = fI,
          onDailyRewardItemLanded: Wc = fI,
          onMailboxStarted: wc = fI,
          journeyStorage: kB = mr,
          requestTracking: Xc = fI,
          requestTravel: Hc = fI,
          requestDungeonEnter: Fc = fI,
          requestQuestJump: Jc = fI,
          requestQuestArrive: jB = fI,
          requestForge: Rc = fI,
          requestSmuggle: iB = fI,
          requestKeepersChairAim: Kc = fI,
          requestReachLogOpen: xB = fI,
          requestLampLight: dc = fI,
          requestDialogue: Ac = fI
        } = cB;
        this.navigation = void 0, this.map = void 0, this.compass = new aB, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new aI, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = cB => cB, this.close = () => {
          for (const cB of this.panels) cB.close()
        }, this.setMenuOpen = Vc, this.publishHud = Oc, this.portalTransit = new En(fc, kB), this.magmaward = new NV(lc), this.glowtide = new oV(Yc), this.glowMeter = new wV(Lc), this.hushWait = new XV(gB), this.dailyReward = new wn(mB, (() => Dc() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (cB => {
          this.quests.setNotificationsHeld(cB)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Nc, Ec, oc, Wc);
        const Gc = cB => {
          this.panels.some((cB => cB.isOpen())) || (cB ? Ic() : this.setMenuOpen(!1))
        };
        this.skills = new Vn(rB, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Bc, void 0, void 0, Gc), this.quests = new Mn(uc, Xc, Bc, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Gc, sc), this.dungeons = new On(Mc, Bc, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Gc, Fc), this.collections = new vV(Pc, Bc, (() => {
          this.beforePanelOpen(this.collections)
        }), Gc), this.map = new Tc(qB, Hc, Bc, (() => {
          this.beforePanelOpen(this.map)
        }), Gc), this.questGraph = new Kn(tB, Bc, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Gc, Jc, jB, kB), this.forge = new fV(Sc, Bc, (() => {
          this.beforePanelOpen(this.forge)
        }), Gc, Rc), this.smuggler = new tI(yB, Bc, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Gc, iB), this.lampLight = new vI(hc, Bc, dc, this.commandPacer), this.keepersChair = new YV(zB, Bc, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (cB => {
          this.lampLight.onChairClosed(), Gc(cB)
        }), Kc, Date.now, this.commandPacer), this.reachLog = new QV(pc, Bc, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Gc, xB, this.commandPacer), this.passage = new hV(Uc, Bc, (() => {
          this.beforePanelOpen(this.passage)
        }), Gc), this.tideCharts = new xI(bB, Bc, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Gc), this.regulars = new BI(Zc, Bc, (() => {
          this.beforePanelOpen(this.regulars)
        }), (cB => {
          this.regulars.takeReturnToReachLog() && !cB && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Gc(cB)
        })), this.hiddenWaters = new VI(Qc), this.dialogue = new rr(Cc, Bc, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Gc, Ac), this.autographs = new OI(vB, (() => {
          this.beforePanelOpen(this.autographs)
        }), Gc), this.mailbox = new Fn(ec, (() => Dc() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), wc), this.quests.translateWithIcons = null !== nc && void 0 !== nc ? nc : null, this.skills.onLevelUp = cB => {
          this.quests.notify(cB)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Bn(this.map, this.quests, this.compass, Bc)
      }
      getHudSnapshot() {
        const cB = this.hudSnapshot,
          Bc = this.dailyReward.getHeldCoins();
        return null === cB || Bc <= 0 || !("hudPurseCoins" in cB) ? cB : {
          ...cB,
          hudPurseCoins: Math.max(0, cB.hudPurseCoins - Bc)
        }
      }
      receiveHud(cB) {
        this.hudSnapshot = cB, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(cB) {
        this.setMenuOpen(!0);
        const Bc = cB === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = cB;
        for (const nc of this.panels) nc === cB || Bc && nc === this.reachLog || nc.close();
        this.openingPanel = null
      }
      setTranslator(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bc => this.resolveItemName(Bc, cB);
        this.quests.translateWithIcons = null !== nc && void 0 !== nc ? nc : null, this.navigation.setTranslator(cB, Bc), this.lampLight.setTranslator(cB, Bc), this.mailbox.setItemName(Vc);
        for (const Ic of this.panels) Ic.setTranslator(cB, Bc, Vc)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const cB of this.panels) cB.dispose()
      }
    }
    var tr = nc(912),
      SI = nc.n(tr),
      yr = nc(27),
      zr = nc(35245),
      pI = nc(35345),
      hI = nc(1553),
      ar = nc(1536),
      lI = nc(8203),
      YI = nc(1051),
      LI = nc(1252),
      gr = nc(957);

    function UI(cB) {
      let {
        controller: Bc,
        minimap: nc,
        children: Vc
      } = cB;
      const rB = (0, LI.g)(TI, Bc.getHudSnapshot()),
        [uc, sc] = (0, Yc.useState)(Bc.skills.getSnapshot().overallLevel);
      (0, LI.f)(nn, (cB => {
        sc(cB.overallLevel)
      }));
      const Mc = (0, Yc.useRef)(null);
      (0, LI.f)(Wn, (cB => {
        ! function(cB, Bc) {
          if (null === cB || "function" !== typeof cB.animate) return;
          const nc = Bc ? 1.35 : 1.15;
          cB.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${nc})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Bc ? 320 : 160,
            easing: "ease-out"
          }), cB.classList.toggle("Receiving", !Bc), Bc && (cB.classList.remove("Shine"), cB.offsetWidth, cB.classList.add("Shine"))
        }(Mc.current, cB)
      }));
      const {
        t: Pc
      } = (0, YI.x)(), {
        isTouchScreen: qB
      } = (0, yr.j)(["isTouchScreen"]), [Oc, Tc] = (0, Yc.useState)(null);
      return (0, pI.d)(Oc, ".SkyblockRightHud"), null !== rB || nc ? (0, gr.jsx)(zr.f, {
        placement: "topRight",
        children: (0, gr.jsxs)("div", {
          className: SI()("SkyblockRightHud", {
            TouchScreen: qB
          }),
          children: [nc, null !== rB && (0, gr.jsxs)("div", {
            ref: Tc,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in rB ? (0, gr.jsx)("div", {
              className: "SkyblockHudHelp",
              children: rB.hudHelpText
            }) : (0, gr.jsxs)(gr.Fragment, {
              children: [(0, gr.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, gr.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, gr.jsx)("strong", {
                    style: {
                      color: Ic.C.cyanUiText
                    },
                    children: Pc(rB.hudZoneNameKey)
                  }), null !== uc && (0, gr.jsx)("span", {
                    style: {
                      color: Ic.C.goldUiText
                    },
                    children: Pc("skyblockGame:level", {
                      level: (0, lI.e)(uc)
                    })
                  })]
                }), (0, gr.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Mc,
                  children: [(0, gr.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, gr.jsx)(hI.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, lI.e)(rB.hudPurseCoins)]
                })]
              }), rB.hudClockText.length > 0 && (0, gr.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, gr.jsx)(ar.e, {
                  text: rB.hudClockText
                })
              })]
            }), Vc, "hudZoneNameKey" in rB && (0, gr.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function br(cB) {
      let {
        icon: Bc
      } = cB;
      const nc = (0, Yc.useCallback)((cB => {
        null === cB || void 0 === cB || cB.replaceChildren(XB(Bc))
      }), [Bc]);
      return (0, gr.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: nc
      })
    }

    function ZI(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)();
      return (0, gr.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Bc.display.mountPlayer,
        title: nc("skyblockGame:mapYouAreHere"),
        children: (0, gr.jsx)(br, {
          icon: "player"
        })
      })
    }
    const QI = nc(37068),
      CI = Object.fromEntries(QI.keys().map((cB => [cB.replace(/^\.\/(.*)\.png$/, "$1"), QI(cB)])));

    function vr(cB, Bc) {
      var nc;
      return null !== (nc = CI[cB]) && void 0 !== nc ? nc : CI[Bc]
    }

    function DI(cB) {
      let {
        imageKey: Bc,
        fallbackImageKey: nc,
        geometryKey: Vc,
        alt: Ic,
        className: rB
      } = cB;
      const [uc, sc] = (0, Yc.useState)((() => function(cB, Bc) {
        return [{
          id: 0,
          imageKey: cB,
          geometryKey: Bc,
          phase: "shown"
        }]
      }(Bc, Vc))), Mc = function(cB, Bc, nc) {
        const Vc = cB[cB.length - 1];
        if (Vc.imageKey === Bc && Vc.geometryKey === nc) return cB;
        const Ic = {
          id: Vc.id + 1,
          imageKey: Bc,
          geometryKey: nc,
          phase: "entering"
        };
        return Vc.geometryKey === nc ? [{
          ...Vc,
          phase: "leaving"
        }, Ic] : [Ic]
      }(uc, Bc, Vc);
      return Mc !== uc && sc(Mc), (0, gr.jsx)(gr.Fragment, {
        children: Mc.map((cB => (0, gr.jsx)("img", {
          className: SI()("SkyblockMapTerrainImage", rB, {
            Entering: "entering" === cB.phase,
            Leaving: "leaving" === cB.phase
          }),
          src: vr(cB.imageKey, nc),
          alt: "leaving" === cB.phase ? "" : Ic,
          onAnimationEnd: () => {
            sc((Bc => function(cB, Bc) {
              return cB.flatMap((cB => cB.id !== Bc ? [cB] : "leaving" === cB.phase ? [] : [{
                ...cB,
                phase: "shown"
              }]))
            }(Bc, cB.id)))
          }
        }, cB.id)))
      })
    }
    var NI = nc(3646),
      EI = nc(1255);

    function oI(cB) {
      if ("Tab" !== cB.key) return;
      const Bc = Array.from(cB.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        nc = Bc.indexOf(document.activeElement);
      var Vc;
      if (cB.shiftKey && nc <= 0) cB.preventDefault(), null === (Vc = Bc.at(-1)) || void 0 === Vc || Vc.focus();
      else if (!cB.shiftKey && (-1 === nc || nc === Bc.length - 1)) {
        var Ic;
        cB.preventDefault(), null === (Ic = Bc[0]) || void 0 === Ic || Ic.focus()
      }
    }

    function WI() {
      const cB = (0, Yc.useRef)(null);
      return (0, Yc.useCallback)((Bc => {
        var nc;
        Bc ? (cB.current = document.activeElement, Bc.focus()) : null === (nc = cB.current) || void 0 === nc || nc.focus()
      }), [])
    }

    function wI(cB) {
      let {
        percent: Bc,
        label: nc,
        levelUpToken: Vc,
        colour: Ic
      } = cB;
      return (0, gr.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": nc,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Bc,
        "aria-valuetext": nc,
        children: [(0, gr.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Bc/100})`
          }
        }), null !== Vc && void 0 !== Vc && (0, gr.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Ic
          }
        }, Vc)]
      })
    }

    function kr(cB) {
      let {
        mount: Bc
      } = cB;
      return (0, gr.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Bc,
        hidden: !0,
        children: (0, gr.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, gr.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, gr.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function XI(cB, Bc, nc, Vc) {
      (0, Yc.useLayoutEffect)((() => {
        const Ic = cB.current;
        if (!nc || null === Bc || void 0 === Bc || !Bc.local || !Ic) return;
        const rB = Array.from(Ic.querySelectorAll(".SkyblockMapNode")),
          uc = [...Bc.points, ...Bc.portals],
          sc = () => {
            const cB = Ic.clientWidth,
              nc = Ic.clientHeight,
              sc = rB.map(((Ic, rB) => {
                const sc = uc[rB];
                return {
                  id: sc.id,
                  portal: rB >= Bc.points.length,
                  x: sc.position[0] * cB / 100,
                  y: sc.position[1] * nc / 100,
                  width: Ic.offsetWidth / Vc,
                  height: Ic.offsetHeight / Vc
                }
              })),
              Mc = new Map(uc.map(((cB, Bc) => [cB.id, rB[Bc]])));
            for (const Bc of function(cB, Bc, nc) {
                const Vc = [],
                  Ic = [...cB].sort(((cB, Bc) => Number(Bc.portal) - Number(cB.portal) || cB.id.localeCompare(Bc.id)));
                for (const rB of Ic) {
                  const cB = cB => Math.max(rB.width / 2, Math.min(Bc - rB.width / 2, cB)),
                    Ic = cB => Math.max(rB.height / 2, Math.min(nc - rB.height / 2, cB)),
                    uc = [cB(rB.x)],
                    sc = [Ic(rB.y)];
                  for (const Bc of Vc) uc.push(cB(Bc.x - (Bc.width + rB.width) / 2 - 4), cB(Bc.x + (Bc.width + rB.width) / 2 + 4)), sc.push(Ic(Bc.y - (Bc.height + rB.height) / 2 - 4), Ic(Bc.y + (Bc.height + rB.height) / 2 + 4));
                  let Mc = {
                      ...rB,
                      x: uc[0],
                      y: sc[0]
                    },
                    Pc = 1 / 0,
                    qB = 1 / 0;
                  for (const Bc of new Set(uc))
                    for (const cB of new Set(sc)) {
                      let nc = 0;
                      for (const uc of Vc) nc += Math.max(0, (rB.width + uc.width) / 2 + 4 - Math.abs(Bc - uc.x)) * Math.max(0, (rB.height + uc.height) / 2 + 4 - Math.abs(cB - uc.y));
                      const Ic = (Bc - rB.x) ** 2 + (cB - rB.y) ** 2;
                      (nc < Pc || nc === Pc && Ic < qB) && (Mc = {
                        ...rB,
                        x: Bc,
                        y: cB
                      }, Pc = nc, qB = Ic)
                    }
                  Vc.push(Mc)
                }
                return Vc
              }(sc, cB, nc)) {
              const cB = Mc.get(Bc.id);
              cB.style.left = `${Bc.x}px`, cB.style.top = `${Bc.y}px`
            }
          };
        sc();
        const Mc = new ResizeObserver(sc);
        Mc.observe(Ic);
        for (const cB of rB) Mc.observe(cB);
        return () => {
          Mc.disconnect()
        }
      }), [cB, Bc, nc, Vc])
    }
    const HI = {
        zoom: 1,
        x: 0,
        y: 0
      },
      FI = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function JI(cB, Bc, nc) {
      return Math.min(nc, Math.max(Bc, cB))
    }

    function jr(cB, Bc, nc) {
      const Vc = Math.min(1, nc * Bc / cB),
        Ic = Math.min(1, cB / (nc * Bc));
      return {
        x0: (1 - Vc) / 2,
        y0: (1 - Ic) / 2,
        x1: (1 + Vc) / 2,
        y1: (1 + Ic) / 2
      }
    }

    function RI(cB, Bc, nc, Vc) {
      const Ic = Bc * (Vc - nc);
      if (Ic <= 1) return .5 - Bc * (nc + Vc) / 2;
      const rB = .45 * Math.min(1, Ic - 1);
      return JI(cB, 1 - Bc * Vc - rB, rB - Bc * nc)
    }

    function ir(cB, Bc) {
      const nc = JI(cB.zoom, 1, 12);
      return {
        zoom: nc,
        x: RI(cB.x, nc, Bc.x0, Bc.x1),
        y: RI(cB.y, nc, Bc.y0, Bc.y1)
      }
    }

    function KI(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FI;
      const rB = JI(cB.zoom * Bc, 1, 12),
        uc = rB / cB.zoom;
      return ir({
        zoom: rB,
        x: nc - (nc - cB.x) * uc,
        y: Vc - (Vc - cB.y) * uc
      }, Ic)
    }

    function xr(cB, Bc, nc, Vc) {
      const [Ic, rB] = (0, Yc.useState)(HI);
      (0, Yc.useEffect)((() => {
        rB(HI)
      }), [nc]), (0, Yc.useEffect)((() => {
        const nc = cB.current;
        if (!Bc || !nc) return;
        const Ic = () => jr(nc.clientWidth, nc.clientHeight, Vc),
          uc = cB => {
            const Bc = nc.getBoundingClientRect();
            return {
              x: (cB.clientX - Bc.left) / Bc.width,
              y: (cB.clientY - Bc.top) / Bc.height
            }
          },
          sc = new Map;
        let Mc = {
            x: 0,
            y: 0
          },
          Pc = !1,
          qB = 0;
        const Oc = cB => {
            cB.preventDefault();
            const Bc = cB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * cB.deltaY : cB.deltaY,
              nc = uc(cB);
            rB((cB => KI(cB, Math.exp(.0015 * -Bc), nc.x, nc.y, Ic())))
          },
          Tc = cB => {
            "mouse" === cB.pointerType && 0 !== cB.button || (sc.set(cB.pointerId, uc(cB)), 1 === sc.size && (Mc = {
              x: cB.clientX,
              y: cB.clientY
            }, Pc = !1), qB = 0)
          },
          fc = cB => {
            const Bc = sc.get(cB.pointerId);
            if (!Bc) return;
            const Vc = uc(cB);
            if (sc.set(cB.pointerId, Vc), 2 === sc.size) {
              const [cB, Bc] = [...sc.values()], nc = Math.hypot(cB.x - Bc.x, cB.y - Bc.y);
              if (qB > 0) {
                const Vc = nc / qB;
                rB((nc => KI(nc, Vc, (cB.x + Bc.x) / 2, (cB.y + Bc.y) / 2, Ic())))
              }
              return qB = nc, void(Pc = !0)
            }!Pc && Math.hypot(cB.clientX - Mc.x, cB.clientY - Mc.y) < 4 || (Pc || (Pc = !0, nc.setPointerCapture(cB.pointerId)), rB((cB => function(cB, Bc, nc) {
              let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FI;
              return ir({
                zoom: cB.zoom,
                x: cB.x + Bc,
                y: cB.y + nc
              }, Vc)
            }(cB, Vc.x - Bc.x, Vc.y - Bc.y, Ic()))))
          },
          mB = cB => {
            sc.delete(cB.pointerId), qB = 0
          },
          ec = cB => {
            Pc && (cB.stopPropagation(), cB.preventDefault(), Pc = !1)
          },
          tB = new ResizeObserver((() => {
            rB((cB => ir(cB, Ic())))
          }));
        return tB.observe(nc), nc.addEventListener("wheel", Oc, {
          passive: !1
        }), nc.addEventListener("pointerdown", Tc), nc.addEventListener("pointermove", fc), nc.addEventListener("pointerup", mB), nc.addEventListener("pointercancel", mB), nc.addEventListener("click", ec, !0), () => {
          tB.disconnect(), nc.removeEventListener("wheel", Oc), nc.removeEventListener("pointerdown", Tc), nc.removeEventListener("pointermove", fc), nc.removeEventListener("pointerup", mB), nc.removeEventListener("pointercancel", mB), nc.removeEventListener("click", ec, !0)
        }
      }), [cB, Bc, nc, Vc]);
      return {
        view: Ic,
        zoomBy: Bc => {
          const nc = cB.current;
          nc && rB((cB => KI(cB, Bc, .5, .5, jr(nc.clientWidth, nc.clientHeight, Vc))))
        }
      }
    }

    function dI(cB) {
      var Bc, nc, Vc, Ic;
      let {
        controller: rB,
        navigation: uc
      } = cB;
      const sc = (0, LI.g)(Oc, rB.getSnapshot()),
        {
          t: Mc
        } = (0, YI.x)(),
        Pc = WI(),
        qB = sc.presentation,
        Tc = (0, Yc.useRef)(null),
        fc = (0, Yc.useRef)(null),
        mB = Boolean(sc.open && (null === qB || void 0 === qB ? void 0 : qB.local) && qB.background),
        ec = xr(Tc, mB, `${sc.open}|${sc.tab}|${null===qB||void 0===qB||null===(Bc=qB.background)||void 0===Bc?void 0:Bc.geometryKey}`, null !== (nc = null === qB || void 0 === qB || null === (Vc = qB.background) || void 0 === Vc ? void 0 : Vc.ratio) && void 0 !== nc ? nc : 2);
      if (XI(fc, qB, sc.open, ec.view.zoom), !qB || !sc.open) return null;
      const tB = qB.local ? qB.background : null,
        Sc = {
          "--map-ratio": String(null !== (Ic = null === tB || void 0 === tB ? void 0 : tB.ratio) && void 0 !== Ic ? Ic : 2),
          backgroundColor: null === tB || void 0 === tB ? void 0 : tB.colour
        },
        yB = {
          "--map-zoom": String(ec.view.zoom),
          transform: `translate(${100*ec.view.x}%, ${100*ec.view.y}%) scale(${ec.view.zoom})`
        };
      return (0, gr.jsx)(NI.b, {
        show: sc.open,
        close: rB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Pc,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, gr.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Mc("skyblockGame:map")
              }), qB.minimap && (0, gr.jsx)("p", {
                children: qB.minimap.caption
              })]
            }), (0, gr.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((cB => (0, gr.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": cB === sc.tab ? "true" : void 0,
                className: SI()({
                  Selected: cB === sc.tab
                }),
                "aria-pressed": cB === sc.tab,
                onClick: () => {
                  rB.selectTab(cB)
                },
                children: Mc("local" === cB ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, cB)))
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: rB.dismiss
            })]
          }), (0, gr.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, gr.jsxs)("div", {
              ref: Tc,
              className: SI()("SkyblockMapCanvas", {
                Local: qB.local,
                Overview: !qB.local,
                Zoomed: ec.view.zoom > 1
              }),
              style: Sc,
              children: [(0, gr.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: mB ? yB : void 0,
                children: (0, gr.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: fc,
                  children: [tB && (0, gr.jsx)(DI, {
                    className: "SkyblockMapTerrain",
                    imageKey: tB.imageKey,
                    fallbackImageKey: tB.fallbackImageKey,
                    geometryKey: tB.geometryKey,
                    alt: tB.label
                  }), qB.local && (0, gr.jsx)(kr, {
                    mount: uc.display.mountMapSearchArea
                  }), !qB.local && (0, gr.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: qB.connections.map((cB => (0, gr.jsx)("line", {
                      className: SI()({
                        Explored: cB.explored
                      }),
                      x1: cB.start[0],
                      y1: cB.start[1],
                      x2: cB.end[0],
                      y2: cB.end[1]
                    }, cB.id)))
                  }), qB.points.map((cB => {
                    const Bc = !qB.local && cB.thumbnail ? CI[cB.thumbnail] : void 0;
                    return (0, gr.jsxs)("div", {
                      className: SI()("SkyblockMapNode", {
                        Current: cB.current
                      }),
                      style: {
                        left: `${cB.position[0]}%`,
                        top: `${cB.position[1]}%`
                      },
                      children: [(0, gr.jsxs)(EI.d, {
                        className: SI()("SkyblockMapPin", {
                          Unknown: !cB.visited,
                          Current: cB.current
                        }),
                        disabled: sc.pending,
                        onClick: () => {
                          rB.travel(cB.travelKind, cB.travelId)
                        },
                        children: [Bc && (0, gr.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Bc,
                          alt: ""
                        }), !Bc && (0, gr.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, gr.jsx)(br, {
                            icon: cB.icon
                          })
                        }), (0, gr.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: cB.name
                        })]
                      }), cB.current && (0, gr.jsx)("span", {
                        className: SI()("SkyblockMapHereBadge", {
                          Above: cB.position[1] > 50
                        }),
                        children: Mc("skyblockGame:mapYouAreHere")
                      })]
                    }, cB.id)
                  })), qB.portals.map((cB => (0, gr.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${cB.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${cB.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, gr.jsxs)(EI.d, {
                      className: "SkyblockMapPin",
                      disabled: sc.pending,
                      onClick: () => {
                        rB.travel(cB.travelKind, cB.travelId)
                      },
                      children: [(0, gr.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: cB.colour
                        },
                        "aria-hidden": "true",
                        children: (0, gr.jsx)(br, {
                          icon: cB.icon
                        })
                      }), (0, gr.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: cB.name
                      })]
                    })
                  }, cB.id))), qB.local && (0, gr.jsx)(ZI, {
                    controller: uc
                  })]
                })
              }), mB && (0, gr.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, gr.jsx)("button", {
                  type: "button",
                  "aria-label": Mc("skyblockGame:mapZoomIn"),
                  disabled: ec.view.zoom >= 12,
                  onClick: () => {
                    ec.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, gr.jsx)("button", {
                  type: "button",
                  "aria-label": Mc("skyblockGame:mapZoomOut"),
                  disabled: ec.view.zoom <= 1,
                  onClick: () => {
                    ec.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, gr.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: sc.feedback
              })]
            })
          }), (0, gr.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [qB.progress && (0, gr.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, gr.jsx)("span", {
                children: qB.progress
              }), (0, gr.jsx)(wI, {
                percent: qB.percent,
                label: qB.progress
              })]
            }), qB.noLandmarks && (0, gr.jsx)("span", {
              children: Mc("skyblockGame:mapNoLandmarks")
            }), qB.canTravel && (0, gr.jsx)("span", {
              className: "SkyblockMapHint",
              children: Mc("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function AI(cB) {
      let {
        view: Bc,
        controller: nc,
        navigation: Vc
      } = cB;
      const {
        t: Ic
      } = (0, YI.x)(), {
        isTouchScreen: rB
      } = (0, yr.j)(["isTouchScreen"]);
      return (0, gr.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Ic("skyblockGame:mapLocal"),
        children: [rB && (0, gr.jsx)(EI.d, {
          className: "SkyblockMinimapOpen",
          onClick: nc.showLocal,
          children: Ic("skyblockGame:map")
        }), (0, gr.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Bc.colour
          },
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Vc.display.mountTerrain,
            style: {
              width: Bc.width,
              height: Bc.height
            },
            children: [(0, gr.jsx)(DI, {
              imageKey: Bc.imageKey,
              fallbackImageKey: Bc.fallbackImageKey,
              geometryKey: Bc.geometryKey,
              alt: Bc.label
            }), (0, gr.jsx)(kr, {
              mount: Vc.display.mountMinimapSearchArea
            }), Bc.markers.map((cB => (0, gr.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${cB.position[0]}%`,
                top: `${cB.position[1]}%`,
                color: cB.colour
              },
              title: cB.name,
              children: (0, gr.jsx)(br, {
                icon: cB.icon
              })
            }, cB.id)))]
          }), (0, gr.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Ic("skyblockGame:mapYouAreHere"),
            children: (0, gr.jsx)(br, {
              icon: "player"
            })
          })]
        }), (0, gr.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Bc.caption
        })]
      })
    }

    function GI(cB) {
      let {
        controller: Bc
      } = cB;
      return (0, gr.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Bc.display.mountCompass,
        children: [(0, gr.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, gr.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, gr.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function cu(cB) {
      let {
        controller: Bc,
        surface: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)(), Ic = (0, LI.g)(nn, Bc.getSnapshot()), rB = WI();
      return Ic.enabled ? (0, gr.jsxs)(gr.Fragment, {
        children: ["hud" === nc && (0, gr.jsx)(zr.f, {
          placement: "statBars",
          children: Ic.hud && (0, gr.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Ic.hud.colour
            },
            children: [(0, gr.jsx)(wI, {
              percent: Ic.hud.skill.percent,
              label: Ic.hud.skill.xp,
              levelUpToken: Ic.hud.levelUpToken,
              colour: Ic.hud.colour
            }), (0, gr.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, gr.jsxs)("span", {
                children: [Ic.hud.skill.label, " \xb7 ", Ic.hud.skill.level]
              }), (0, gr.jsx)("span", {
                children: Ic.hud.gain
              })]
            })]
          })
        }), "hud" === nc && (0, gr.jsx)(zr.f, {
          children: Ic.hud && (0, gr.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, gr.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, gr.jsx)("strong", {
                children: Ic.hud.skill.label
              }), (0, gr.jsx)("span", {
                children: Ic.hud.gain
              })]
            }), (0, gr.jsx)(wI, {
              percent: Ic.hud.skill.percent,
              label: Ic.hud.skill.xp,
              levelUpToken: Ic.hud.levelUpToken,
              colour: Ic.hud.colour
            }), (0, gr.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, gr.jsx)("span", {
                children: Ic.hud.skill.level
              }), (0, gr.jsx)("span", {
                children: Ic.hud.skill.xp
              })]
            })]
          })
        }), "menu" === nc && (0, gr.jsx)(NI.b, {
          show: Ic.open,
          close: Bc.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gr.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: rB,
            onKeyDown: oI,
            children: [(0, gr.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gr.jsxs)("div", {
                children: [(0, gr.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Vc("skyblockGame:skills")
                }), (0, gr.jsx)("p", {
                  children: Vc("skyblockGame:skillsIntro")
                })]
              }), (0, gr.jsx)(EI.k, {
                padIgnore: !0,
                onClick: Bc.dismiss
              })]
            }), (0, gr.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, gr.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Ic.skills.map((cB => (0, gr.jsxs)(EI.d, {
                  className: SI()("SkyblockSkillCard", {
                    Selected: cB.selected
                  }),
                  ariaPressed: cB.selected,
                  onClick: () => {
                    Bc.select(cB.id)
                  },
                  children: [(0, gr.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, gr.jsx)(hI.d, {
                      itemName: cB.icon,
                      amount: 0
                    })
                  }), (0, gr.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, gr.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, gr.jsx)("strong", {
                        children: cB.label
                      }), (0, gr.jsx)("span", {
                        children: cB.level
                      })]
                    }), (0, gr.jsx)(wI, {
                      percent: cB.percent,
                      label: `${cB.label}: ${cB.xp}`
                    }), (0, gr.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: cB.xp
                    })]
                  })]
                }, cB.id)))
              }), Ic.detail && (0, gr.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, gr.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, gr.jsx)(hI.d, {
                    itemName: Ic.detail.icon,
                    amount: 0
                  })
                }), (0, gr.jsx)("h3", {
                  children: Ic.detail.label
                }), (0, gr.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Ic.detail.level
                }), (0, gr.jsx)("p", {
                  children: Ic.detail.description
                }), (0, gr.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, gr.jsx)("strong", {
                    children: Vc("skyblockGame:currentBenefit")
                  }), (0, gr.jsx)("span", {
                    children: Ic.detail.benefit
                  })]
                }), (0, gr.jsx)(wI, {
                  percent: Ic.detail.percent,
                  label: Ic.detail.xp
                }), (0, gr.jsx)("p", {
                  children: Ic.detail.xp
                }), (0, gr.jsx)("h4", {
                  children: Vc("skyblockGame:earnXp")
                }), (0, gr.jsx)("ul", {
                  children: Ic.detail.sources.map((cB => (0, gr.jsx)("li", {
                    children: cB
                  }, cB)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Br = nc(1205),
      nr = nc(3883),
      Vr = nc(244);

    function Ir(cB) {
      let {
        item: Bc
      } = cB;
      return (0, gr.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, gr.jsx)(hI.d, {
          itemName: Bc,
          amount: 0
        })
      })
    }

    function ru(cB) {
      let {
        name: Bc,
        percent: nc,
        progress: Vc
      } = cB;
      return (0, gr.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, gr.jsx)(wI, {
          percent: nc,
          label: `${(0,Vr.pb)(Bc)}: ${Vc}`
        }), (0, gr.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Vc
        })]
      })
    }

    function ur(cB) {
      let {
        subquests: Bc,
        showDescriptions: nc = !1
      } = cB;
      return (0, gr.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Bc.map((cB => {
          const Bc = nc && "completed" === cB.status,
            Vc = (0, gr.jsxs)("li", {
              className: SI()("SkyblockQuestStep", cB.status, {
                JustFinished: cB.justFinished,
                JustUnlocked: cB.justUnlocked
              }),
              tabIndex: Bc ? 0 : void 0,
              children: [null !== cB.iconItem && (0, gr.jsx)(Ir, {
                item: cB.iconItem
              }), null === cB.iconItem && (0, gr.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === cB.status ? "\u2713" : "skipped" === cB.status ? "\u2212" : "\u25cb"
              }), (0, gr.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, gr.jsx)("strong", {
                  children: (0, gr.jsx)(nr.e, {
                    text: cB.name
                  })
                }), nc && !Bc && (0, gr.jsx)("span", {
                  children: (0, gr.jsx)(nr.e, {
                    text: cB.description
                  })
                }), null !== cB.barPercent && (0, gr.jsx)(ru, {
                  name: cB.name,
                  percent: cB.barPercent,
                  progress: cB.progress
                }), null === cB.barPercent && !Bc && (0, gr.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: cB.statusLabel
                })]
              })]
            }, cB.id);
          return Bc ? (0, gr.jsx)(Br.d, {
            delayShow: 200,
            tooltipInner: (0, gr.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, gr.jsx)("span", {
                children: (0, gr.jsx)(nr.e, {
                  text: cB.description
                })
              }), (0, gr.jsx)("strong", {
                children: cB.statusLabel
              })]
            }),
            children: Vc
          }, cB.id) : Vc
        }))
      })
    }

    function sr(cB) {
      let {
        quest: Bc,
        select: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)(), Ic = Bc.focusStep;
      return (0, gr.jsxs)(EI.d, {
        className: SI()("SkyblockQuestCard", {
          Selected: Bc.selected,
          Tracked: Bc.tracked
        }),
        onClick: () => {
          nc(Bc.id)
        },
        children: [(0, gr.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, gr.jsx)("strong", {
            children: (0, gr.jsx)(nr.e, {
              text: Bc.name
            })
          }), Bc.tracked && (0, gr.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Vc("skyblockGame:currentQuest")
          })]
        }), Ic && (0, gr.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Ic.iconItem && (0, gr.jsx)(Ir, {
            item: Ic.iconItem
          }), (0, gr.jsx)(ru, {
            name: Ic.name,
            percent: Ic.barPercent,
            progress: Ic.progress
          })]
        }), (0, gr.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Bc.progress
        })]
      })
    }

    function Mr(cB) {
      let {
        controller: Bc,
        surface: nc
      } = cB;
      const Vc = (0, LI.g)(un, Bc.getSnapshot()),
        {
          t: Ic
        } = (0, YI.x)(),
        rB = WI();
      return Vc.enabled ? (0, gr.jsxs)(gr.Fragment, {
        children: ["hud" === nc && (0, gr.jsx)(gr.Fragment, {
          children: Vc.tracked && (0, gr.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: rV,
            children: (0, gr.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Vc.trackedStepPulse > 0 && (0, gr.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Vc.trackedStepPulse), (0, gr.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Ic("skyblockGame:currentQuest")
              }), (0, gr.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, gr.jsx)("strong", {
                  children: (0, gr.jsx)(nr.e, {
                    text: Vc.tracked.name
                  })
                }), null !== Vc.tracked.clock && (0, gr.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Vc.tracked.clock
                })]
              }), (0, gr.jsx)(ur, {
                subquests: Vc.tracked.subquests
              })]
            })
          })
        }), "menu" === nc && (0, gr.jsx)(NI.b, {
          show: Vc.open,
          close: Bc.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gr.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: rB,
            onKeyDown: oI,
            children: [(0, gr.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gr.jsx)("div", {
                children: (0, gr.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Ic("skyblockGame:quests")
                })
              }), (0, gr.jsx)(EI.k, {
                padIgnore: !0,
                onClick: Bc.dismiss
              })]
            }), (0, gr.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, gr.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, gr.jsx)("h3", {
                  children: Ic("skyblockGame:current")
                }), 0 === Vc.active.length && (0, gr.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ic("skyblockGame:noActiveQuests")
                }), Vc.active.map((cB => (0, gr.jsx)(sr, {
                  quest: cB,
                  select: Bc.select
                }, cB.id))), (0, gr.jsx)("h3", {
                  children: (0, gr.jsxs)("button", {
                    type: "button",
                    className: SI()("SkyblockQuestSectionToggle", {
                      Expanded: Vc.completedExpanded
                    }),
                    "aria-expanded": Vc.completedExpanded,
                    onClick: Bc.toggleCompleted,
                    children: [(0, gr.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Ic("skyblockGame:completed"), (0, gr.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Vc.completed.length
                    })]
                  })
                }), Vc.completedExpanded && 0 === Vc.completed.length && (0, gr.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ic("skyblockGame:noCompletedQuests")
                }), Vc.completedExpanded && Vc.completed.map((cB => (0, gr.jsx)(sr, {
                  quest: cB,
                  select: Bc.select
                }, cB.id)))]
              }), Vc.detail && (0, gr.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Vc.detail.completed && (0, gr.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Ic("skyblockGame:completedQuest")
                }), (0, gr.jsx)("h3", {
                  children: (0, gr.jsx)(nr.e, {
                    text: Vc.detail.name
                  })
                }), (0, gr.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, gr.jsx)(nr.e, {
                    text: Vc.detail.description
                  })
                }), (0, gr.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Vc.detail.progress, null !== Vc.detail.clock && (0, gr.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Vc.detail.clock
                  })]
                }), (0, gr.jsx)(ur, {
                  subquests: Vc.detail.subquests,
                  showDescriptions: !0
                }), Vc.detail.tracked && (0, gr.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Vc.detail.trackLabel
                }), !Vc.detail.completed && !Vc.detail.tracked && (0, gr.jsx)(EI.n, {
                  onClick: Bc.trackSelected,
                  disabled: !Vc.detail.canTrack,
                  children: Vc.detail.trackLabel
                }), Vc.detail.canViewDialogue && (0, gr.jsx)(EI.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Bc.viewDialogue,
                  children: Ic("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Pr = nc(926),
      qu = nc(2048);

    function Or(cB, Bc, nc, Vc, Ic) {
      const rB = cB => "linear" === Ic ? cB : {
          P_: Ic,
          point: cB
        },
        uc = {};
      for (const [sc, Mc] of Vc)
        for (const [Bc, nc] of Object.entries(cB(sc, Mc, rB))) uc[Bc] ??= {
          timeline: []
        }, uc[Bc].timeline.push(nc);
      return {
        A4: Bc,
        loop: nc,
        n_: uc
      }
    }
    const Tr = .547,
      fr = .022,
      mu = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      er = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function tu(cB, Bc, nc) {
      const {
        drop: Vc = 0,
        shift: Ic = 0,
        torso: rB = 0,
        nod: uc = 0,
        tilt: sc = 0,
        legs: Mc = [0, 0],
        arms: Pc = 0,
        spread: qB = 0
      } = Bc, Oc = Tr * Math.cos(rB) - fr * Math.sin(rB), Tc = Tr * Math.sin(rB) + fr * Math.cos(rB), fc = nc([0, -Vc, Ic]);
      return {
        LowerBody: {
          timeFraction: cB,
          position: fc,
          rotation: nc([0, 0, 0])
        },
        UpperBody: {
          timeFraction: cB,
          position: fc,
          rotation: nc([rB, 0, sc])
        },
        HeadMesh: {
          timeFraction: cB,
          position: nc([0, Oc - Tr - Vc, Tc - fr + Ic]),
          rotation: nc([rB + uc, 0, sc])
        },
        LegLeftMesh: {
          timeFraction: cB,
          rotation: nc([Mc[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: cB,
          rotation: nc([Mc[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: cB,
          rotation: nc([Pc, 0, qB])
        },
        ArmRightMesh: {
          timeFraction: cB,
          rotation: nc([Pc, 0, -qB])
        }
      }
    }

    function Sr(cB, Bc, nc) {
      return Or(tu, cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function yu(cB) {
      return "number" === typeof cB ? [cB, cB] : cB
    }

    function zu(cB, Bc, nc) {
      const {
        rise: Vc = 0,
        shift: Ic = 0,
        torso: rB = 0,
        twist: uc = 0,
        tilt: sc = 0,
        nod: Mc = 0,
        cock: Pc = 0,
        arms: qB = 0,
        spread: Oc = 0
      } = Bc, [Tc, fc] = yu(qB), [mB, ec] = yu(Oc);
      return {
        TorsoNode: {
          timeFraction: cB,
          position: nc([0, Vc, Ic]),
          rotation: nc([rB, uc, sc])
        },
        HeadMesh: {
          timeFraction: cB,
          rotation: nc([Mc, 0, Pc])
        },
        ArmLeftMesh: {
          timeFraction: cB,
          rotation: nc([Tc, 0, mB])
        },
        ArmRightMesh: {
          timeFraction: cB,
          rotation: nc([fc, 0, -ec])
        }
      }
    }
    const pr = [1.0625, -1, 0];

    function hr(cB) {
      return "number" === typeof cB ? [cB, cB] : cB
    }

    function au(cB, Bc, nc) {
      const {
        drop: Vc = 0,
        shift: Ic = 0,
        torso: rB = 0,
        tilt: uc = 0,
        nod: sc = 0,
        cock: Mc = 0,
        legs: Pc = [0, 0],
        arms: qB = 0,
        spread: Oc = 0
      } = Bc, [Tc, fc] = hr(qB), [mB, ec] = hr(Oc), tB = -rB, Sc = -uc, [yB, zB, pc] = function(cB, Bc) {
        const [nc, Vc, Ic] = [-pr[0], pr[1], -pr[2]], rB = nc * Math.cos(Bc) - Vc * Math.sin(Bc), uc = nc * Math.sin(Bc) + Vc * Math.cos(Bc);
        return [rB - nc, -(uc * Math.cos(cB) - Ic * Math.sin(cB) - Vc), uc * Math.sin(cB) + Ic * Math.cos(cB) - Ic]
      }(tB, Sc), hc = nc([0, -Vc, Ic]);
      return {
        TorsoNode: {
          timeFraction: cB,
          position: nc([yB, zB - Vc, pc + Ic]),
          rotation: nc([tB, 0, Sc])
        },
        HeadMesh: {
          timeFraction: cB,
          rotation: nc([-sc, 0, -Mc])
        },
        ArmLeftMesh: {
          timeFraction: cB,
          rotation: nc([-Tc, 0, -mB])
        },
        ArmRightMesh: {
          timeFraction: cB,
          rotation: nc([-fc, 0, ec])
        },
        LegLeftMesh: {
          timeFraction: cB,
          position: hc,
          rotation: nc([-Pc[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: cB,
          position: hc,
          rotation: nc([-Pc[1], 0, 0])
        }
      }
    }
    var lr = nc(36138),
      Yr = nc(37024),
      Lr = nc(37145);

    function gu(cB, Bc, nc) {
      var Vc, Ic;
      const rB = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return cB + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - cB) * nc
        },
        [uc, sc] = null !== (Vc = cB.legs) && void 0 !== Vc ? Vc : [0, 0],
        [Mc, Pc] = null !== (Ic = Bc.legs) && void 0 !== Ic ? Ic : [0, 0];
      return {
        drop: rB(cB.drop, Bc.drop),
        shift: rB(cB.shift, Bc.shift),
        torso: rB(cB.torso, Bc.torso),
        nod: rB(cB.nod, Bc.nod),
        tilt: rB(cB.tilt, Bc.tilt),
        legs: [rB(uc, Mc), rB(sc, Pc)],
        arms: rB(cB.arms, Bc.arms),
        spread: rB(cB.spread, Bc.spread)
      }
    }
    const Ur = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      bu = Sr(4400, !0, [
        [0, Ur],
        [.16, {
          ...Ur,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Ur],
        [.44, {
          ...Ur,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, gu(Ur, mu, .7)],
        [.66, gu(Ur, mu, .78)],
        [.74, gu(Ur, er, .65)],
        [.86, {
          ...Ur,
          drop: .14
        }],
        [1, Ur]
      ], "catmull-rom-spline"),
      Zr = {
        ...Ur,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Qr = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Cr = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      vu = {
        caveGolem: bu,
        magmaGolem: Sr(3600, !0, [
          [0, Zr],
          [.12, {
            ...Zr,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Zr,
            tilt: -.08
          }],
          [.4, {
            ...Zr,
            tilt: .06,
            drop: .11
          }],
          [.52, gu(Zr, mu, .9)],
          [.62, gu(Zr, er, .8)],
          [.7, gu(Zr, er, .45)],
          [.78, gu(Zr, er, .85)],
          [.9, {
            ...Zr,
            drop: .17
          }],
          [1, Zr]
        ], "catmull-rom-spline"),
        frostWraith: function(cB, Bc, nc) {
          return Or(zu, cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Qr],
          [.14, {
            ...Qr,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Qr,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Qr,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Qr,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Qr,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Qr,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Qr,
            rise: .16,
            tilt: -.04
          }],
          [1, Qr]
        ], "catmull-rom-spline"),
        tikiTerror: function(cB, Bc, nc) {
          return Or(au, cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Cr],
          [.16, {
            ...Cr,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Cr],
          [.44, {
            ...Cr,
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
            ...Cr,
            drop: .1
          }],
          [1, Cr]
        ], "catmull-rom-spline")
      },
      Dr = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Nr = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Er = Object.fromEntries(Object.entries(vu).map((cB => {
        let [Bc, nc] = cB;
        return [Bc, (0, Lr.e)((0, lr.g)(nc), Bc)]
      })));

    function or(cB) {
      const Bc = function(cB) {
        var Bc;
        const nc = (0, Yr.d)(cB).poseRig;
        return null !== (Bc = Nr[cB]) && void 0 !== Bc ? Bc : void 0 === nc ? null : Dr[nc]
      }(cB);
      return null === Bc ? null : Er[Bc]
    }

    function Wr(cB) {
      return {
        "--difficulty-colour": cB
      }
    }
    const wr = (0, Yc.lazy)((() => (0, qu.e)(nc.e(201).then((() => nc(39475))), (cB => cB.MobPreview))));

    function ku(cB) {
      var Bc, nc, Vc;
      let {
        picker: Ic,
        controller: rB
      } = cB;
      const {
        t: uc
      } = (0, YI.x)(), sc = WI(), {
        page: Mc
      } = Ic;
      return (0, gr.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: sc,
        onKeyDown: cB => {
          "ArrowLeft" === cB.key ? (cB.preventDefault(), cB.stopPropagation(), rB.previous()) : "ArrowRight" === cB.key ? (cB.preventDefault(), cB.stopPropagation(), rB.next()) : oI(cB)
        },
        style: Wr(Mc.colour),
        children: [(0, gr.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, gr.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Ic.dungeonName
          }), (0, gr.jsx)(EI.k, {
            padIgnore: !0,
            onClick: rB.dismiss
          })]
        }), (0, gr.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, gr.jsx)(EI.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Ic.canPrevious,
              onClick: rB.previous,
              children: (0, gr.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gr.jsx)(Pr.e, {
                  name: "angle-up"
                })
              })
            }), (0, gr.jsxs)("div", {
              className: SI()("SkyblockBossPickerBoss", {
                Locked: !Mc.unlocked
              }),
              children: [null !== Mc.bossMobType && (0, gr.jsx)(Yc.Suspense, {
                fallback: (0, gr.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, gr.jsx)(wr, {
                  className: "SkyblockBossPickerModel",
                  mobType: Mc.bossMobType,
                  variation: Mc.bossMobVariation,
                  animation: null !== (Bc = or(Mc.bossMobType)) && void 0 !== Bc ? Bc : void 0
                })
              }), null === Mc.bossMobType && (0, gr.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, gr.jsx)(EI.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Ic.canNext,
              onClick: rB.next,
              children: (0, gr.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gr.jsx)(Pr.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, gr.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Mc.beaten && (0, gr.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Mc.label]
            }), (0, gr.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (nc = Mc.bossName) && void 0 !== nc ? nc : "???"
            }), (0, gr.jsxs)("span", {
              className: SI()("SkyblockBossPickerRecord", {
                Locked: null !== Mc.lockedHint
              }),
              children: [null !== Mc.lockedHintHighlight && (0, gr.jsxs)(gr.Fragment, {
                children: [Mc.lockedHintHighlight.before, (0, gr.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Wr(Mc.lockedHintHighlight.colour),
                  children: [null !== Mc.lockedHintHighlight.icon && (0, gr.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, gr.jsx)(hI.d, {
                      itemName: Mc.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Mc.lockedHintHighlight.name]
                }), Mc.lockedHintHighlight.after]
              }), null === Mc.lockedHintHighlight && (null !== (Vc = Mc.lockedHint) && void 0 !== Vc ? Vc : Mc.summary)]
            })]
          }), (0, gr.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Ic.pages.map((cB => (0, gr.jsx)("span", {
              className: SI()("SkyblockBossPickerDot", {
                Current: cB.current,
                Locked: !cB.unlocked
              }),
              style: Wr(cB.colour)
            }, cB.difficulty)))
          }), (0, gr.jsx)(EI.u, {
            className: "SkyblockBossPickerFight",
            disabled: !Mc.unlocked,
            onClick: rB.enter,
            children: uc("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Xr(cB) {
      let {
        dungeon: Bc,
        select: nc
      } = cB;
      return (0, gr.jsxs)(EI.d, {
        className: SI()("SkyblockDungeonCard", {
          Selected: Bc.selected
        }),
        onClick: () => {
          nc(Bc.id)
        },
        children: [(0, gr.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, gr.jsx)("strong", {
            children: Bc.name
          }), (0, gr.jsx)("span", {
            children: Bc.beatenSummary
          })]
        }), (0, gr.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Bc.difficulties.map((cB => (0, gr.jsxs)("span", {
            className: SI()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: cB.beaten
            }),
            style: Wr(cB.colour),
            title: cB.summary,
            children: [cB.beaten && (0, gr.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), cB.label]
          }, cB.difficulty)))
        })]
      })
    }

    function Hr(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(qV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsxs)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [nc.picker && (0, gr.jsx)(ku, {
          picker: nc.picker,
          controller: Bc
        }), !nc.picker && (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Vc("skyblockGame:dungeons")
              }), (0, gr.jsx)("p", {
                children: Vc("skyblockGame:dungeonsIntro")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, gr.jsx)("div", {
              className: "SkyblockDungeonList",
              children: nc.dungeons.map((cB => (0, gr.jsx)(Xr, {
                dungeon: cB,
                select: Bc.select
              }, cB.id)))
            }), nc.detail && (0, gr.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, gr.jsx)("h3", {
                children: nc.detail.name
              }), (0, gr.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: nc.detail.difficulties.map((cB => (0, gr.jsxs)("li", {
                  className: SI()("SkyblockDungeonRecord", {
                    Beaten: cB.beaten
                  }),
                  children: [(0, gr.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Wr(cB.colour),
                    children: [cB.beaten && (0, gr.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), cB.label]
                  }), (0, gr.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: cB.summary
                  })]
                }, cB.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Fr(cB) {
      let {
        collection: Bc,
        select: nc
      } = cB;
      return (0, gr.jsxs)(EI.d, {
        className: SI()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Bc.selected,
          Locked: Bc.locked
        }),
        ariaPressed: Bc.selected,
        onClick: () => {
          nc(Bc.id)
        },
        children: [(0, gr.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, gr.jsx)(hI.d, {
            itemName: Bc.icon,
            amount: 0
          })
        }), (0, gr.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, gr.jsx)("strong", {
              children: Bc.name
            }), (0, gr.jsx)("span", {
              children: Bc.tier
            })]
          }), (0, gr.jsx)(wI, {
            percent: Bc.percent,
            label: `${Bc.name}: ${Bc.progress}`
          }), (0, gr.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Bc.progress
          })]
        })]
      })
    }

    function Jr(cB) {
      let {
        collection: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)();
      return (0, gr.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, gr.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, gr.jsx)(hI.d, {
            itemName: Bc.icon,
            amount: 0
          })
        }), (0, gr.jsx)("h3", {
          children: Bc.name
        }), (0, gr.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Bc.tier
        }), (0, gr.jsx)("p", {
          children: Bc.locked ? nc("skyblockGame:collectionLocked") : Bc.count
        }), null !== Bc.nextReward && (0, gr.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, gr.jsx)("strong", {
            children: nc("skyblockGame:collectionNextReward")
          }), (0, gr.jsx)("span", {
            children: Bc.nextReward
          })]
        }), (0, gr.jsx)(wI, {
          percent: Bc.percent,
          label: Bc.progress
        }), (0, gr.jsx)("p", {
          children: Bc.progress
        })]
      })
    }

    function ju(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(Cn, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Vc("skyblockGame:collections")
              }), (0, gr.jsxs)("p", {
                children: [Vc("skyblockGame:collectionsIntro"), " ", nc.tiersUnlocked]
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: nc.categories.map((cB => (0, gr.jsxs)(EI.d, {
              className: SI()("SkyblockCollectionCategory", {
                Selected: cB.selected
              }),
              ariaPressed: cB.selected,
              padTabSelected: cB.selected,
              onClick: () => {
                Bc.selectCategory(cB.id)
              },
              children: [(0, gr.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, gr.jsx)(hI.d, {
                  itemName: cB.icon,
                  amount: 0
                })
              }), (0, gr.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, gr.jsx)("strong", {
                  children: cB.label
                }), (0, gr.jsx)("span", {
                  children: cB.tiers
                })]
              })]
            }, cB.id)))
          }), (0, gr.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, gr.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: nc.collections.map((cB => (0, gr.jsx)(Fr, {
                collection: cB,
                select: Bc.select
              }, cB.id)))
            }), nc.detail && (0, gr.jsx)(Jr, {
              collection: nc.detail
            })]
          })]
        })
      }) : null
    }
    const Rr = ["completed", "active", "available", "locked"],
      iu = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Kr(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(Jn, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Vc("skyblockDevQuests:title")
              }), (0, gr.jsx)("p", {
                children: Vc("skyblockDevQuests:intro")
              })]
            }), (0, gr.jsx)(EI.k, {
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Rr.map((cB => (0, gr.jsx)("span", {
              className: SI()("SkyblockQuestGraphLegendState", cB),
              children: Vc(`skyblockDevQuests:state_${cB}`)
            }, cB))), iu.map((cB => (0, gr.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, gr.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, gr.jsx)("line", {
                  className: SI()("SkyblockQuestGraphEdge", cB),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Vc(`skyblockDevQuests:edge_${cB}`)]
            }, cB)))]
          }), (0, gr.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, gr.jsxs)("div", {
              className: SI()("SkyblockQuestGraphCanvas", {
                Planning: nc.planning
              }),
              style: {
                width: nc.width,
                height: nc.height
              },
              children: [(0, gr.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: nc.width,
                height: nc.height,
                "aria-hidden": "true",
                children: [(0, gr.jsx)("defs", {
                  children: (0, gr.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, gr.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), nc.edges.map((cB => (0, gr.jsx)("path", {
                  className: SI()("SkyblockQuestGraphEdge", cB.kind, {
                    InPlan: cB.inPlan
                  }),
                  d: cB.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, cB.key)))]
              }), nc.nodes.map((cB => (0, gr.jsxs)("button", {
                type: "button",
                className: SI()("SkyblockQuestGraphNode", cB.state, {
                  InPlan: cB.inPlan,
                  Hovered: cB.hovered
                }),
                style: {
                  left: cB.left,
                  top: cB.top,
                  width: 190,
                  height: 52
                },
                title: cB.id,
                onMouseEnter: () => {
                  Bc.hover(cB.id)
                },
                onMouseLeave: () => {
                  Bc.hover(null)
                },
                onFocus: () => {
                  Bc.hover(cB.id)
                },
                onBlur: () => {
                  Bc.hover(null)
                },
                onClick: () => {
                  Bc.jump(cB.id)
                },
                children: [(0, gr.jsx)("strong", {
                  children: cB.name
                }), (0, gr.jsx)("span", {
                  children: cB.detail
                })]
              }, cB.id)))]
            })
          })]
        })
      }) : null
    }
    const xu = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      dr = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${IV}ms`,
        "--forge-duration": "2150ms"
      },
      Ar = Array.from({
        length: 18
      }, ((cB, Bc) => ({
        "--ember-left": `${(4+92*(.618034*Bc%1)).toFixed(1)}%`,
        "--ember-size": 3 + Bc % 3 * 2 + "px",
        "--ember-drift": 14 * (Bc % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Bc%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Bc%8).toFixed(2)}s`
      })));

    function Gr(cB) {
      if (cB.style.removeProperty("--part-size"), null === cB.parentElement || "wrap" === getComputedStyle(cB.parentElement).flexWrap) return;
      const Bc = [...cB.children],
        nc = getComputedStyle(cB),
        Vc = parseFloat(nc.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Ic = (cB.clientHeight - parseFloat(nc.rowGap) * (Bc.length - 1)) / Bc.length,
        rB = Bc.map((cB => {
          const Bc = getComputedStyle(cB),
            nc = cB.querySelector("h3"),
            rB = cB.querySelector(".SkyblockForgeParts");
          if (null === nc || null === rB) return Vc;
          const uc = Ic - parseFloat(Bc.paddingTop) - parseFloat(Bc.paddingBottom) - nc.offsetHeight - parseFloat(getComputedStyle(nc).marginBottom),
            sc = parseFloat(getComputedStyle(rB).columnGap),
            Mc = rB.children.length;
          let Pc = 0;
          for (let Vc = 1; Vc <= Mc; Vc++) {
            const cB = Math.ceil(Mc / Vc);
            Pc = Math.max(Pc, Math.min((rB.clientWidth - sc * (Vc - 1)) / Vc, (uc - sc * (cB - 1)) / cB))
          }
          return Pc
        }));
      cB.style.setProperty("--part-size", `${Math.floor(Math.max(Vc,Math.min(...rB)))}px`)
    }

    function cs(cB) {
      var Bc, nc, Vc, rB, uc;
      let {
        controller: sc
      } = cB;
      const Mc = (0, LI.g)(OV, sc.getSnapshot()),
        {
          t: Pc
        } = (0, YI.x)(),
        qB = WI(),
        Oc = function() {
          const cB = (0, Yc.useRef)(null),
            Bc = (0, Yc.useRef)(null);
          return (0, Yc.useLayoutEffect)((() => {
            null !== cB.current && Gr(cB.current)
          })), (0, Yc.useCallback)((nc => {
            var Vc;
            null === (Vc = Bc.current) || void 0 === Vc || Vc.disconnect(), Bc.current = null, cB.current = nc, null !== nc && (Bc.current = new ResizeObserver((() => {
              Gr(nc)
            })), Bc.current.observe(nc))
          }), [])
        }(),
        Tc = function(cB) {
          const Bc = (0, Yc.useRef)(null);
          return (0, Yc.useLayoutEffect)((() => {
            const cB = Bc.current;
            if (null !== cB) {
              cB.style.removeProperty("font-size");
              for (let Bc = 1.7; Bc > 1.1 && cB.scrollWidth > cB.clientWidth; Bc -= .1) cB.style.fontSize = Bc - .1 + "rem"
            }
          }), [cB]), (0, Yc.useCallback)((cB => {
            Bc.current = cB
          }), [])
        }(null === (Bc = Mc.preview) || void 0 === Bc ? void 0 : Bc.name),
        fc = (0, Yc.useRef)(null),
        mB = (0, Yc.useRef)({}),
        ec = Mc.forging,
        tB = null !== (nc = null === ec || void 0 === ec ? void 0 : ec.preview.tier) && void 0 !== nc ? nc : 0,
        Sc = null !== (Vc = null === ec || void 0 === ec ? void 0 : ec.preview.named) && void 0 !== Vc && Vc,
        yB = (0, Yc.useMemo)((() => {
          return null === ec ? null : {
            flames: (cB = tB, Bc = Sc, Array.from({
              length: 26 + 6 * cB + (Bc ? 20 : 0)
            }, ((cB, Bc) => {
              const nc = Bc < 6,
                Vc = Math.random() * Math.PI * 2,
                Ic = nc ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                rB = Math.cos(Vc) * Ic,
                uc = Math.sin(Vc) * Ic - 2 - 3 * Math.random(),
                sc = Math.random(),
                [Mc, Pc, qB] = nc ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : sc < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : sc < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [sc < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Mc,
                "--x0": `${(.15*rB).toFixed(2)}rem`,
                "--y0": `${(.15*uc).toFixed(2)}rem`,
                "--x": `${rB.toFixed(2)}rem`,
                "--y": `${uc.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Pc.toFixed(2)}rem`,
                "--duration": `${Math.round(qB)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: sV(tB, Sc)
          };
          var cB, Bc
        }), [null === ec || void 0 === ec ? void 0 : ec.id]);
      if (!Mc.enabled) return null;
      const zB = Mc.preview,
        pc = Mc.arriving,
        hc = null !== pc && !pc.sameSword,
        aB = null !== zB && (0, gr.jsx)(hI.d, {
          itemName: zB.baseSword,
          amount: 0,
          enchantmentTier: zB.enchantmentTier
        });
      return (0, gr.jsx)(NI.b, {
        show: Mc.open,
        close: sc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: qB,
          onKeyDown: oI,
          children: [(0, gr.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Ar.map(((cB, Bc) => (0, gr.jsx)("span", {
              style: cB
            }, Bc)))
          }), (0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Pc("skyblockGame:forgeTitle")
              }), (0, gr.jsx)("p", {
                children: Pc("skyblockGame:forgeIntro")
              })]
            }), (0, gr.jsx)(EI.k, {
              onClick: sc.dismiss
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, gr.jsx)("div", {
              ref: Oc,
              className: SI()("SkyblockForgeSlots", {
                Locked: null !== ec
              }),
              children: Mc.slots.map((cB => (0, gr.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, gr.jsx)("h3", {
                  children: cB.label
                }), (0, gr.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: cB.parts.map((Bc => (0, gr.jsx)("button", {
                    type: "button",
                    className: SI()("SkyblockForgePart", {
                      Selected: Bc.selected,
                      Missing: Bc.placeholder
                    }),
                    disabled: Bc.placeholder,
                    title: Bc.placeholder ? Pc("skyblockGame:forgePickParts") : Bc.itemName,
                    "aria-pressed": Bc.selected,
                    onClick: () => {
                      sc.select(cB.kind, Bc.material)
                    },
                    children: (0, gr.jsx)(hI.d, {
                      itemName: Bc.itemName,
                      amount: Bc.owned
                    })
                  }, Bc.material)))
                })]
              }, cB.kind)))
            }), (0, gr.jsxs)("div", {
              className: SI()("SkyblockForgeAnvil", {
                Named: null === zB || void 0 === zB ? void 0 : zB.named
              }),
              style: {
                "--tier": null === zB ? "transparent" : Ic.db[zB.enchantmentTier]
              },
              children: [(0, gr.jsxs)("div", {
                className: SI()("SkyblockForgeAltar", {
                  Forging: null !== ec
                }),
                style: null === ec ? void 0 : dr,
                children: [(0, gr.jsxs)("div", {
                  className: SI()("SkyblockForgeMount", {
                    Arrive: null !== pc
                  }),
                  children: [null === zB && (0, gr.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, gr.jsx)(hI.d, {
                      itemName: Mc.unformedSword,
                      amount: 0
                    })
                  }), null !== zB && (0, gr.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== zB && null === ec && (0, gr.jsx)("div", {
                    ref: fc,
                    className: "SkyblockForgeFloat",
                    children: (0, gr.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: aB
                    })
                  }), null !== zB && (0, gr.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: uV.map(((cB, Bc) => (0, gr.jsx)("span", {
                      className: SI()({
                        Rune: "" !== cB.rune
                      }),
                      style: cB.style,
                      children: cB.rune
                    }, Bc)))
                  }), null !== ec && null !== yB && (0, gr.jsxs)(gr.Fragment, {
                    children: [(0, gr.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: yB.flames.map(((cB, Bc) => (0, gr.jsx)("span", {
                        style: cB
                      }, Bc)))
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: mB.current,
                      children: (0, gr.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: aB
                      })
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (tB >= 4 || Sc) && (0, gr.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: yB.sparks.map(((cB, Bc) => (0, gr.jsx)("span", {
                        style: cB
                      }, Bc)))
                    }), (0, gr.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, gr.jsx)("p", {
                  className: SI()("SkyblockForgeStatus", null === (rB = Mc.status) || void 0 === rB ? void 0 : rB.tone),
                  children: null === (uc = Mc.status) || void 0 === uc ? void 0 : uc.text
                })]
              }), null === zB && (0, gr.jsx)("p", {
                className: SI()("SkyblockForgeName Waiting", {
                  ArriveText: hc
                }),
                children: Pc(Mc.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== zB && (0, gr.jsx)("h3", {
                ref: Tc,
                className: SI()("SkyblockForgeName", {
                  ArriveText: hc
                }),
                title: zB.name,
                children: zB.name
              }), (null === zB || void 0 === zB ? void 0 : zB.named) && (0, gr.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Pc("skyblockGame:forgeSecret")
              }), (0, gr.jsxs)(EI.u, {
                className: "SkyblockForgeButton",
                disabled: !Mc.canForge,
                title: null === zB ? void 0 : Pc("skyblockGame:forgeCoalOwned", {
                  owned: String(Mc.coalOwned)
                }),
                onClick: () => {
                  mB.current = function(cB) {
                    const Bc = null === cB ? "none" : getComputedStyle(cB).transform,
                      nc = new DOMMatrixReadOnly("none" === Bc ? void 0 : Bc);
                    return {
                      "--settle-y": `${nc.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(nc.b,nc.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(fc.current), qI(), sc.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Pc("skyblockGame:forgeButton"), null !== zB && (0, gr.jsxs)("span", {
                  className: SI()("SkyblockForgeCost", {
                    Short: zB.coalShort
                  }),
                  children: [(0, gr.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, gr.jsx)(hI.d, {
                      itemName: xV.c,
                      amount: 0
                    })
                  }), zB.coalCost]
                })]
              })]
            }), (0, gr.jsxs)("div", {
              className: SI()("SkyblockForgeDetails", {
                Named: null === zB || void 0 === zB ? void 0 : zB.named
              }),
              children: [(0, gr.jsx)("p", {
                className: SI()("SkyblockForgeLore", {
                  ArriveText: hc
                }),
                title: null === zB || void 0 === zB ? void 0 : zB.lore,
                children: null === zB || void 0 === zB ? void 0 : zB.lore
              }), (0, gr.jsxs)("dl", {
                className: SI()("SkyblockForgeStats", {
                  ArriveText: hc
                }),
                children: [null === zB && xu.map((cB => (0, gr.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, gr.jsx)("dt", {
                    children: Pc(cB)
                  }), (0, gr.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, cB))), null === zB || void 0 === zB ? void 0 : zB.stats.map((cB => (0, gr.jsxs)("div", {
                  className: SI()("SkyblockForgeStat", {
                    Better: cB.better
                  }),
                  children: [(0, gr.jsx)("dt", {
                    children: cB.label
                  }), (0, gr.jsx)("dd", {
                    children: cB.value
                  })]
                }, cB.label)))]
              }), (0, gr.jsx)("ul", {
                className: SI()("SkyblockForgeEffects", {
                  ArriveText: hc
                }),
                children: null === zB || void 0 === zB ? void 0 : zB.effects.map((cB => (0, gr.jsx)("li", {
                  children: cB
                }, cB)))
              })]
            })]
          })]
        })
      })
    }
    const Bu = "Doom Rivet",
      nu = "Doom Crest";

    function Vu(cB) {
      let {
        itemName: Bc,
        amount: nc,
        owned: Vc
      } = cB;
      return (0, gr.jsxs)("span", {
        className: SI()("SkyblockSmugglerPrice", {
          Short: nc > Vc
        }),
        children: [(0, gr.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, gr.jsx)(hI.d, {
            itemName: Bc,
            amount: 0
          })
        }), (0, gr.jsx)("span", {
          children: nc
        })]
      })
    }

    function Iu(cB) {
      return cB.justBought ? "skyblockGame:smugglerJustBought" : cB.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function rs(cB) {
      let {
        deal: Bc,
        view: nc,
        buy: Vc
      } = cB;
      const {
        t: Ic
      } = (0, YI.x)();
      return (0, gr.jsxs)("div", {
        className: SI()("SkyblockSmugglerPocket", {
          Bought: Bc.justBought,
          Unaffordable: !Bc.affordable,
          SoldOut: Bc.soldOut && !Bc.justBought
        }),
        children: [(0, gr.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, gr.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, gr.jsx)(hI.d, {
            itemName: Bc.itemName,
            amount: 0,
            enchantmentTier: Bc.enchantmentTier
          }), Bc.amount > 1 && (0, gr.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Ic("skyblockGame:smugglerAmount", {
              amount: Bc.amount
            })
          })]
        }), (0, gr.jsx)("h3", {
          children: Bc.displayName
        }), (0, gr.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Bc.rivets > 0 && (0, gr.jsx)(Vu, {
              itemName: Bu,
              amount: Bc.rivets,
              owned: nc.rivetsOwned
            }), Bc.crests > 0 && (0, gr.jsx)(Vu, {
              itemName: nu,
              amount: Bc.crests,
              owned: nc.crestsOwned
            })]
          }), (0, gr.jsx)(EI.d, {
            className: "SkyblockSmugglerBuy",
            disabled: Bc.soldOut || !Bc.affordable || nc.pending,
            onClick: () => {
              Vc(Bc.slot)
            },
            children: Ic(Iu(Bc))
          })]
        })]
      }, Bc.justBought ? nc.boughtCount : 0)
    }

    function uu(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(mI, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, gr.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, gr.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Vc("skyblockGame:smugglerTitle")
              }), (0, gr.jsx)("p", {
                children: Vc("skyblockGame:smugglerIntro")
              })]
            }), (0, gr.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, gr.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, gr.jsx)(Vu, {
                  itemName: Bu,
                  amount: nc.rivetsOwned,
                  owned: nc.rivetsOwned
                }), (0, gr.jsx)(Vu, {
                  itemName: nu,
                  amount: nc.crestsOwned,
                  owned: nc.crestsOwned
                })]
              }), (0, gr.jsx)(EI.k, {
                onClick: Bc.dismiss
              })]
            })]
          }), (0, gr.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: nc.deals.map((cB => (0, gr.jsx)(rs, {
              deal: cB,
              view: nc,
              buy: Bc.buy
            }, cB.slot)))
          }), (0, gr.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, gr.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: nc.rotatesText
            }), null !== nc.status && (0, gr.jsx)("span", {
              className: SI()("SkyblockSmugglerStatus", nc.status.tone),
              children: nc.status.text
            })]
          })]
        })
      }) : null
    }

    function su(cB) {
      let {
        phase: Bc,
        className: nc
      } = cB;
      return (0, gr.jsx)("span", {
        className: SI()("SkyblockMoon", `Moon-${Bc}`, nc),
        "aria-hidden": "true"
      })
    }

    function Mu(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(SV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)();
      return nc.enabled ? (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: SI()("SkyblockPassageChip", nc.open && "Open"),
          "aria-label": Vc("skyblockGame:passageChipLabel", {
            phase: nc.phaseName
          }),
          title: Vc("skyblockGame:passageChipLabel", {
            phase: nc.phaseName
          }),
          onMouseDown: cB => {
            cB.preventDefault()
          },
          onClick: Bc.toggle,
          children: (0, gr.jsx)(su, {
            phase: nc.phase
          }, nc.phase)
        })
      }) : null
    }

    function Pu(cB) {
      let {
        fish: Bc
      } = cB;
      return (0, gr.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, gr.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, gr.jsx)(hI.d, {
            itemName: Bc.itemName,
            amount: 0
          })
        }), (0, gr.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Bc.displayName
          }), (0, gr.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Bc.where
          })]
        })]
      })
    }

    function qs(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(SV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, gr.jsx)(su, {
              phase: nc.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Vc("skyblockGame:passageTitle")
              }), (0, gr.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: nc.phaseName
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Vc("skyblockGame:passageIntro")
          }), (0, gr.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, gr.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, gr.jsx)("h3", {
                children: Vc("skyblockGame:passageVisiting")
              }), (0, gr.jsx)("ul", {
                className: "SkyblockPassageList",
                children: nc.visitors.map((cB => (0, gr.jsx)(Pu, {
                  fish: cB
                }, cB.itemName)))
              })]
            }), (0, gr.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== nc.resting && (0, gr.jsxs)(gr.Fragment, {
                children: [(0, gr.jsx)("h3", {
                  children: Vc("skyblockGame:passageResting")
                }), (0, gr.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, gr.jsx)(Pu, {
                    fish: nc.resting
                  })
                })]
              }), (0, gr.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, gr.jsx)(su, {
                  phase: nc.nextPhase
                }), (0, gr.jsx)("span", {
                  children: nc.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Ou() {
      return (0, gr.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((cB => (0, gr.jsx)("i", {
          style: {
            "--sparkle-index": cB
          }
        }, cB)))
      })
    }

    function Tu(cB) {
      var Bc;
      let {
        charm: nc,
        view: Vc,
        controller: Ic
      } = cB;
      const {
        t: rB
      } = (0, YI.x)(), uc = Vc.shop, sc = (null === (Bc = Vc.sparkle) || void 0 === Bc ? void 0 : Bc.id) === nc.id;
      return (0, gr.jsxs)("li", {
        className: SI()("SkyblockLampLightCharm", nc.owned && "Owned", nc.socketed && "Socketed"),
        children: [sc && (0, gr.jsx)(Ou, {}, Vc.sparkle.count), (0, gr.jsx)("h4", {
          children: nc.name
        }), (0, gr.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: nc.effect
        }), (0, gr.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: nc.lines.map((cB => (0, gr.jsxs)("li", {
            className: SI()("SkyblockLampLightOddsLine", "better" === cB.tone ? "Better" : "worse" === cB.tone ? "Worse" : "Same"),
            children: [(0, gr.jsx)("span", {
              className: "Before",
              children: cB.before
            }), (0, gr.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, gr.jsx)("span", {
              className: "After",
              children: cB.after
            })]
          }, cB.label)))
        }), (0, gr.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: nc.owned ? nc.socketed ? (0, gr.jsxs)(gr.Fragment, {
            children: [(0, gr.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: rB("skyblockGame:lampLightSocketed")
            }), (0, gr.jsx)(EI.Q, {
              disabled: !Vc.canCommand,
              ariaLabel: rB("skyblockGame:lampLightRemoveLabel", {
                charm: nc.name
              }),
              onClick: () => {
                Ic.socket(null)
              },
              children: rB("skyblockGame:lampLightRemove")
            })]
          }) : (0, gr.jsx)(EI.d, {
            disabled: !Vc.canCommand || !uc.heldRod,
            ariaLabel: rB("skyblockGame:lampLightSocketLabel", {
              charm: nc.name
            }),
            onClick: () => {
              Ic.socket(nc.id)
            },
            children: rB("skyblockGame:lampLightSocket")
          }) : (0, gr.jsx)(EI.d, {
            disabled: !Vc.canCommand || !nc.affordable,
            ariaLabel: rB("skyblockGame:lampLightBuyLabel", {
              item: nc.name,
              cost: nc.cost
            }),
            onClick: () => {
              Ic.buy(nc.id)
            },
            children: nc.cost
          })
        })]
      })
    }

    function fu(cB) {
      var Bc;
      let {
        tint: nc,
        view: Vc,
        controller: Ic
      } = cB;
      const {
        t: rB
      } = (0, YI.x)();
      return (0, gr.jsxs)("li", {
        className: SI()("SkyblockLampLightTint", nc.wearing && "Wearing"),
        style: {
          "--tint-colour": nc.colour
        },
        children: [(null === (Bc = Vc.sparkle) || void 0 === Bc ? void 0 : Bc.id) === nc.id && (0, gr.jsx)(Ou, {}, Vc.sparkle.count), (0, gr.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, gr.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: nc.name
        }), nc.wearing ? (0, gr.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: rB("skyblockGame:lampLightWearing")
        }) : (0, gr.jsx)(EI.d, {
          disabled: !Vc.canCommand || !nc.owned && !nc.affordable,
          ariaLabel: nc.owned ? rB("skyblockGame:lampLightWearLabel", {
            tint: nc.name
          }) : rB("skyblockGame:lampLightBuyLabel", {
            item: nc.name,
            cost: nc.cost
          }),
          onClick: () => {
            nc.owned ? Ic.wearTint(nc.id) : Ic.buy(nc.id)
          },
          children: nc.owned ? rB("skyblockGame:lampLightWear") : nc.cost
        })]
      })
    }

    function ms(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(CV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = nc.shop;
      return (0, gr.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, gr.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: nc.balance
          }), (0, gr.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": nc.releasing,
            className: SI()("SkyblockLampLightSwitch", nc.releasing && "On"),
            disabled: nc.releasing ? "ready" !== nc.status : !nc.canCommand,
            onClick: () => {
              Bc.setRelease(!nc.releasing)
            },
            children: [(0, gr.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, gr.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Vc("skyblockGame:lampLightRelease")]
          }), (0, gr.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Vc("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== nc.notice && (0, gr.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: nc.notice
        }), null !== Ic && (0, gr.jsxs)(gr.Fragment, {
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, gr.jsx)("h3", {
              children: Vc("skyblockGame:lampLightCharms")
            }), (0, gr.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Ic.oddsFor
            }), (0, gr.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((cB => (0, gr.jsx)("button", {
                type: "button",
                "aria-pressed": nc.situation === cB,
                className: SI()("SkyblockLampLightSituation", nc.situation === cB && "Selected"),
                onClick: () => {
                  Bc.setSituation(cB)
                },
                children: Vc("open" === cB ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, cB)))
            })]
          }), !Ic.heldRod && (0, gr.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Vc("skyblockGame:lampLightHoldRod")
          }), (0, gr.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Ic.charms.map((cB => (0, gr.jsx)(Tu, {
              charm: cB,
              view: nc,
              controller: Bc
            }, cB.id)))
          }), (0, gr.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, gr.jsx)("h3", {
              children: Vc("skyblockGame:lampLightTints")
            })
          }), (0, gr.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, gr.jsxs)("li", {
              className: SI()("SkyblockLampLightTint", "Islands", Ic.wearingIslandColours && "Wearing"),
              children: [(0, gr.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, gr.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Vc("skyblockGame:lampLightIslandColours")
              }), Ic.wearingIslandColours ? (0, gr.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Vc("skyblockGame:lampLightWearing")
              }) : (0, gr.jsx)(EI.d, {
                disabled: !nc.canCommand,
                ariaLabel: Vc("skyblockGame:lampLightWearLabel", {
                  tint: Vc("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Bc.wearTint(null)
                },
                children: Vc("skyblockGame:lampLightWear")
              })]
            }), Ic.tints.map((cB => (0, gr.jsx)(fu, {
              tint: cB,
              view: nc,
              controller: Bc
            }, cB.id)))]
          })]
        })]
      })
    }

    function eu(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(CV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)();
      return nc.releasing ? (0, gr.jsx)(zr.f, {
        children: (0, gr.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Bc.setRelease(!1)
          },
          children: [(0, gr.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, gr.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Vc("skyblockGame:lampLightReleasing"), " \xb7 ", nc.balance]
          }), (0, gr.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Vc("skyblockGame:lampLightKeepCatches")
          }), null !== nc.gained && (0, gr.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: nc.gained.text
          }, nc.gained.count)]
        })
      }) : null
    }

    function ts(cB) {
      let {
        island: Bc,
        view: nc,
        aim: Vc
      } = cB;
      const {
        t: Ic
      } = (0, YI.x)(), rB = Bc.featuredFish;
      return (0, gr.jsxs)("li", {
        className: SI()("SkyblockKeepersChairIsland", `Island-${Bc.id}`, Bc.favoured && "Aimed", !Bc.relit && "Dark"),
        children: [(0, gr.jsx)("h3", {
          children: Bc.name
        }), Bc.relit && null !== rB ? (0, gr.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Ic("skyblockGame:keepersChairTideNotice")
          }), (0, gr.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, gr.jsx)(hI.d, {
              itemName: rB.itemName,
              amount: 0
            })
          }), (0, gr.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: rB.displayName
          })]
        }) : (0, gr.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, gr.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Ic("skyblockGame:keepersChairDark")
          })
        }), Bc.relit && (Bc.favoured ? (0, gr.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Ic("skyblockGame:keepersChairAimed")
        }) : (0, gr.jsx)(EI.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !nc.canAim,
          ariaLabel: Ic("skyblockGame:keepersChairAimLabel", {
            island: Bc.name
          }),
          onClick: () => {
            Vc(Bc.id)
          },
          children: Ic("skyblockGame:keepersChairAim")
        }))]
      }, Bc.favoured ? nc.aimedCount : 0)
    }

    function Su(cB) {
      let {
        controller: Bc,
        lampLight: nc
      } = cB;
      const Vc = (0, LI.g)(lV, Bc.getSnapshot()),
        Ic = (0, LI.g)(CV, nc.getSnapshot()),
        [rB, uc] = (0, Yc.useState)("lamp"),
        {
          t: sc
        } = (0, YI.x)(),
        Mc = WI();
      if (!Vc.enabled) return null;
      const Pc = "light" === rB && Ic.enabled;
      return (0, gr.jsx)(NI.b, {
        show: Vc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: SI()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Pc && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Mc,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: sc("skyblockGame:keepersChairTitle")
              }), (0, gr.jsx)("p", {
                children: sc(Pc ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              ariaLabel: sc("skyblockGame:keepersChairClose"),
              onClick: Bc.dismiss
            })]
          }), Ic.enabled && (0, gr.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((cB => (0, gr.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === cB === Pc,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === cB === Pc ? "true" : void 0,
              className: SI()("SkyblockKeepersChairTab", "light" === cB === Pc && "Selected"),
              onClick: () => {
                uc(cB)
              },
              children: [sc("lamp" === cB ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === cB && (0, gr.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Ic.balance
              })]
            }, cB)))
          }), Pc ? (0, gr.jsx)(ms, {
            controller: nc
          }) : (0, gr.jsx)(ys, {
            view: Vc,
            controller: Bc
          })]
        })
      })
    }

    function ys(cB) {
      let {
        view: Bc,
        controller: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)();
      return (0, gr.jsxs)(gr.Fragment, {
        children: [(0, gr.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Bc.islands.map((cB => (0, gr.jsx)(ts, {
            island: cB,
            view: Bc,
            aim: nc.aim
          }, cB.id)))
        }), null !== Bc.almanac && (0, gr.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Vc("skyblockGame:passageTitle")
          }), (0, gr.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, gr.jsx)(su, {
              phase: Bc.almanac.phase
            }), Bc.almanac.phaseName]
          }), (0, gr.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, gr.jsx)(su, {
              phase: Bc.almanac.nextPhase
            }), Bc.almanac.next]
          })]
        }), (0, gr.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Vc("skyblockGame:keepersChairFavour")
          }), Bc.aimed && (0, gr.jsx)(EI.Q, {
            className: "SkyblockKeepersChairRest",
            disabled: !Bc.canAim,
            onClick: () => {
              nc.aim(null)
            },
            children: Vc("skyblockGame:keepersChairRest")
          })]
        }), null !== Bc.status && (0, gr.jsx)("p", {
          className: SI()("SkyblockKeepersChairStatus", "refused" === Bc.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Bc.status.text
        })]
      })
    }

    function zs(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(LV, Bc.getSnapshot());
      if (!Vc.enabled) return null;
      const Ic = Vc.freshCount > 0 ? nc("skyblockGame:reachLogOpenNews", {
        count: Vc.freshCount
      }) : nc("skyblockGame:reachLogOpen");
      return (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsxs)("button", {
          type: "button",
          className: SI()("SkyblockReachLogButton", Vc.freshCount > 0 && "HasNews", Vc.pending && "Pending"),
          "aria-label": Ic,
          title: Ic,
          onClick: Bc.ask,
          children: [Vc.news && (0, gr.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Vc.newsToken}`), (0, gr.jsx)("span", {
            className: SI()("SkyblockReachLogIcon", Vc.news && "Jump"),
            "aria-hidden": "true",
            children: (0, gr.jsx)(hI.d, {
              itemName: UV,
              amount: 0
            })
          }, `icon:${Vc.newsToken}`), Vc.freshCount > 0 && (0, gr.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Vc.freshCount
          })]
        })
      })
    }

    function pu(cB) {
      let {
        gift: Bc
      } = cB;
      return (0, gr.jsx)("li", {
        className: SI()("SkyblockRegularsGift", Bc.given && "Given"),
        children: Bc.text
      })
    }

    function hu(cB) {
      let {
        regular: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)();
      return (0, gr.jsxs)("li", {
        className: SI()("SkyblockRegularsCard", Bc.tagged ? "Tagged" : "Untagged", Bc.resting && "Resting"),
        children: [(0, gr.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Bc.fishName,
            children: (0, gr.jsx)(hI.d, {
              itemName: Bc.itemName,
              amount: 0
            })
          }), (0, gr.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, gr.jsx)("h3", {
              children: Bc.name
            }), (0, gr.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Bc.fishName
            })]
          })]
        }), (0, gr.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Bc.line
        }), (0, gr.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Bc.size
          }), Bc.tagged && (0, gr.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Bc.resting ? nc("skyblockGame:regularsResting") : Bc.meetings
          })]
        }), (0, gr.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Bc.chance
        }), (0, gr.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Bc.gifts.map((cB => (0, gr.jsx)(pu, {
            gift: cB
          }, cB.text)))
        }), Bc.history.length > 0 && (0, gr.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Bc.history.map(((cB, Bc) => (0, gr.jsx)("li", {
            children: cB
          }, Bc)))
        })]
      })
    }

    function as(cB) {
      let {
        controller: Bc,
        island: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)(), Ic = (0, LI.g)(dV, Bc.getSnapshot()), rB = Ic.islands.find((cB => cB.id === nc));
      if (!Ic.enabled || void 0 === rB) return null;
      const uc = Vc("skyblockGame:regularsOpen");
      return (0, gr.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": uc,
        title: uc,
        onClick: () => {
          Bc.openIsland(nc)
        },
        children: [(0, gr.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Vc("skyblockGame:regularsTitle")
        }), rB.regulars.map((cB => (0, gr.jsx)("span", {
          className: SI()("SkyblockRegularsStripIcon", cB.tagged && "Tagged"),
          title: cB.name,
          children: (0, gr.jsx)(hI.d, {
            itemName: cB.itemName,
            amount: 0
          })
        }, cB.id)))]
      })
    }

    function lu(cB) {
      var Bc;
      let {
        controller: nc
      } = cB;
      const Vc = (0, LI.g)(dV, nc.getSnapshot()),
        {
          t: Ic
        } = (0, YI.x)(),
        rB = WI();
      if (!Vc.enabled) return null;
      const uc = null !== (Bc = Vc.islands.find((cB => cB.id === Vc.selected))) && void 0 !== Bc ? Bc : null;
      return (0, gr.jsx)(NI.b, {
        show: Vc.open,
        close: nc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: rB,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Ic("skyblockGame:regularsTitle")
              }), (0, gr.jsx)("p", {
                children: Ic("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: nc.dismiss
            })]
          }), (0, gr.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Vc.islands.map((cB => {
              const Bc = cB.id === Vc.selected;
              return (0, gr.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Bc,
                "data-pad-tab": !0,
                "data-pad-selected": Bc ? "true" : void 0,
                className: SI()("SkyblockReachLogTab", `Island-${cB.id}`, Bc && "Selected", cB.charm.given && "GoldPage"),
                onClick: () => {
                  nc.selectIsland(cB.id)
                },
                children: (0, gr.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: cB.name
                })
              }, cB.id)
            }))
          }), (0, gr.jsxs)("div", {
            className: SI()("SkyblockRegularsPage", null !== uc && `Island-${uc.id}`),
            role: "tabpanel",
            children: [(0, gr.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Ic("skyblockGame:regularsHow")
            }), null !== uc && (0, gr.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: uc.regulars.map((cB => (0, gr.jsx)(hu, {
                regular: cB
              }, cB.id)))
            })]
          }), null !== uc && (0, gr.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, gr.jsx)("span", {
              className: SI()("SkyblockRegularsCharm", uc.charm.given && "Given"),
              children: uc.charm.text
            })
          })]
        })
      })
    }
    const Yu = [{
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
      Lu = Array.from({
        length: 6
      }, ((cB, Bc) => ({
        "--x": `${(88*(.618034*Bc%1)).toFixed(1)}%`,
        "--y": `${(10+37*Bc%70).toFixed(1)}%`,
        "--size": 7 + Bc % 3 * 3 + "rem",
        "--drift-x": 3 * (Bc % 3 - 1) + "rem",
        "--drift-y": 2 * (Bc % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Bc % 4 * 3 + "s",
        "--delay": 2.5 * -Bc + "s"
      }))),
      gs = Array.from({
        length: 14
      }, ((cB, Bc) => ({
        "--left": `${(3+94*((.618034*Bc+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Bc % 4 * 2 + "px",
        "--sway": Bc % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Bc%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Bc%12).toFixed(2)}s`
      }))),
      Uu = (0, Yc.memo)((function(cB) {
        let {
          island: Bc
        } = cB;
        return (0, gr.jsxs)("div", {
          className: SI()("SkyblockReachLogDepths", null !== Bc && `Island-${Bc}`),
          "aria-hidden": "true",
          children: [Yu.map(((cB, Bc) => (0, gr.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: cB
          }, `shaft${Bc}`))), Lu.map(((cB, Bc) => (0, gr.jsx)("span", {
            className: SI()("SkyblockReachLogMote", Bc % 2 === 1 && "Violet"),
            style: cB
          }, `mote${Bc}`))), gs.map(((cB, Bc) => (0, gr.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: cB
          }, `bubble${Bc}`)))]
        })
      })),
      bs = 100;

    function Zu(cB) {
      let {
        view: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)();
      if (null === Bc || 0 === Bc.total) return null;
      const Vc = bs * Bc.aspect,
        Ic = nc("skyblockGame:hiddenWatersCount", {
          found: Bc.found,
          total: Bc.total
        });
      return (0, gr.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${nc("skyblockGame:hiddenWatersTitle")}: ${Ic}`,
        children: [(0, gr.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Vc}`,
          "aria-hidden": "true",
          children: [Bc.islands.map(((cB, Bc) => (0, gr.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (cB.left + cB.width / 2) * bs,
            cy: (cB.top + cB.height / 2) * Vc,
            rx: cB.width / 2 * bs,
            ry: cB.height / 2 * Vc
          }, Bc))), Bc.pins.map(((cB, Bc) => (0, gr.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: cB.left * bs,
            cy: cB.top * Vc,
            r: 13
          }, Bc)))]
        }), (0, gr.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, gr.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: nc("skyblockGame:hiddenWatersTitle")
          }), (0, gr.jsx)("span", {
            className: Bc.found === Bc.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Ic
          })]
        })]
      })
    }

    function Qu(cB) {
      let {
        view: Bc,
        island: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)(), Ic = null === Bc || void 0 === Bc ? void 0 : Bc.glimpses.get(nc);
      return void 0 === Ic || 0 === Ic.length ? null : (0, gr.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, gr.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Vc("skyblockGame:hiddenWatersGlimpsed")
        }), (0, gr.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Ic.map((cB => (0, gr.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, gr.jsx)(hI.d, {
              itemName: cB,
              amount: 0
            })
          }, cB)))
        })]
      })
    }
    const Cu = ["Bronze", "Silver", "Gold"],
      vs = [{
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
      Du = vs.slice(0, 2);

    function Nu(cB) {
      return cB ? vs : Du
    }

    function Eu(cB) {
      let {
        fish: Bc,
        letGoShown: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)();
      return (0, gr.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Cu.map(((cB, nc) => {
          const Ic = nc < Bc.marks;
          return (0, gr.jsx)("span", {
            className: SI()("SkyblockReachLogPip", cB, Ic && "Earned", Ic && Bc.fresh && nc === Bc.marks - 1 && "Newest"),
            title: Vc(gI[nc])
          }, cB)
        })), (0, gr.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Nu(nc).map(((cB, nc) => (0, gr.jsx)("span", {
          className: SI()("SkyblockReachLogRibbon", cB.className, !0 === Bc.ribbons[nc] && "Earned"),
          title: Vc(cB.titleKey)
        }, cB.className)))]
      })
    }

    function ou(cB) {
      let {
        letGoShown: Bc,
        haloShown: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)();
      return (0, gr.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, gr.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Vc("skyblockGame:reachLogMarks"),
          children: [(0, gr.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Vc("skyblockGame:reachLogLegendMarks")]
        }), Nu(Bc).map((cB => (0, gr.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Vc(cB.titleKey),
          children: [(0, gr.jsx)("span", {
            className: SI()("SkyblockReachLogRibbon", cB.className, "Earned")
          }), Vc(cB.legendKey)]
        }, cB.className))), (0, gr.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Vc("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, gr.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Vc("skyblockGame:reachLogLegendGlimmer")]
        }), nc && (0, gr.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Vc("skyblockGame:reachLogHaloTitle"),
          children: [(0, gr.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Vc("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Wu(cB) {
      let {
        returner: Bc
      } = cB;
      return (0, gr.jsxs)("div", {
        className: SI()("SkyblockReachLogReturner", Bc.back && "Back"),
        children: [(0, gr.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, gr.jsx)(hI.d, {
            itemName: Bc.itemName,
            amount: 0
          })
        }), (0, gr.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Bc.line
        })]
      })
    }

    function wu(cB) {
      let {
        fish: Bc,
        letGoShown: nc
      } = cB;
      const {
        t: Vc
      } = (0, YI.x)();
      return (0, gr.jsxs)("li", {
        className: SI()("SkyblockReachLogCard", Bc.caught ? "Caught" : "Unknown", Bc.marks >= 3 && "GoldCard", Bc.fresh && "Fresh", Bc.visitor && "Visitor"),
        children: [Bc.visitor && (0, gr.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Vc("skyblockGame:reachLogVisitor")
        }), Bc.fresh && Array.from({
          length: 4
        }, ((cB, Bc) => (0, gr.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Bc))), (0, gr.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Bc.halo && (0, gr.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Vc("skyblockGame:reachLogHaloTitle")
          }), (0, gr.jsx)(hI.d, {
            itemName: Bc.itemName,
            amount: 0
          }), Bc.glimmer && (0, gr.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Vc("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, gr.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Bc.name
        }), (0, gr.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Bc.chance
        }), (0, gr.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Bc.best
        }), (0, gr.jsx)(Eu, {
          fish: Bc,
          letGoShown: nc
        })]
      })
    }

    function ks(cB) {
      let {
        page: Bc,
        letGoShown: nc,
        hiddenWaters: Vc
      } = cB;
      const {
        t: Ic
      } = (0, YI.x)();
      return Bc.awake ? (0, gr.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Bc.fish.map((cB => (0, gr.jsx)(wu, {
          fish: cB,
          letGoShown: nc
        }, cB.itemName)))
      }) : (0, gr.jsxs)(gr.Fragment, {
        children: [(0, gr.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Ic("skyblockGame:reachLogAsleep")
        }), (0, gr.jsx)(Qu, {
          view: Vc,
          island: Bc.id
        })]
      })
    }

    function Xu(cB) {
      var Bc, nc;
      let {
        controller: Vc,
        regulars: Ic,
        hiddenWaters: rB
      } = cB;
      const uc = (0, LI.g)(LV, Vc.getSnapshot()),
        sc = function(cB) {
          return (0, LI.g)(nI, cB.getSnapshot())
        }(rB),
        Mc = (0, LI.g)(dV, Ic.getSnapshot()),
        {
          t: Pc
        } = (0, YI.x)(),
        qB = WI();
      if (!uc.enabled) return null;
      const Oc = null !== (Bc = uc.pages.find((cB => cB.id === uc.selected))) && void 0 !== Bc ? Bc : null;
      return (0, gr.jsx)(NI.b, {
        show: uc.open,
        close: Vc.dismiss,
        togglePointerLock: !1,
        className: SI()("SkyblockSkillsOverlay", Mc.open && "SkyblockReachLogUnderLedger"),
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: qB,
          onKeyDown: oI,
          children: [(0, gr.jsx)(Uu, {
            island: null !== (nc = null === Oc || void 0 === Oc ? void 0 : Oc.id) && void 0 !== nc ? nc : null
          }), (0, gr.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Pc("skyblockGame:reachLogTitle")
              }), (0, gr.jsx)("p", {
                children: Pc("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, gr.jsx)(Zu, {
              view: sc
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Vc.dismiss
            })]
          }), (0, gr.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: uc.pages.map((cB => {
              const Bc = cB.id === uc.selected,
                nc = cB.fish.some((cB => cB.fresh));
              return (0, gr.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Bc,
                "data-pad-tab": !0,
                "data-pad-selected": Bc ? "true" : void 0,
                className: SI()("SkyblockReachLogTab", `Island-${cB.id}`, Bc && "Selected", !cB.awake && "Asleep", cB.gold && "GoldPage", nc && "HasNews"),
                onClick: () => {
                  Vc.selectPage(cB.id)
                },
                children: [(0, gr.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: cB.name
                }), cB.awake && (0, gr.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Pc("skyblockGame:reachLogCaughtCount", {
                    caught: cB.caught,
                    total: cB.total
                  })
                })]
              }, cB.id)
            }))
          }), (0, gr.jsxs)("div", {
            className: SI()("SkyblockReachLogPage", null !== Oc && `Island-${Oc.id}`),
            role: "tabpanel",
            children: [null !== Oc && (0, gr.jsx)(ks, {
              page: Oc,
              letGoShown: uc.letGoShown,
              hiddenWaters: sc
            }), !0 === (null === Oc || void 0 === Oc ? void 0 : Oc.awake) && null !== Oc.returner && (0, gr.jsx)(Wu, {
              returner: Oc.returner
            }), !0 === (null === Oc || void 0 === Oc ? void 0 : Oc.awake) && (0, gr.jsx)(as, {
              controller: Ic,
              island: Oc.id
            })]
          }), (0, gr.jsx)("footer", {
            className: SI()("SkyblockReachLogFooter", null !== Oc && `Island-${Oc.id}`, !0 === (null === Oc || void 0 === Oc ? void 0 : Oc.gold) && "GoldPage"),
            children: !0 === (null === Oc || void 0 === Oc ? void 0 : Oc.gold) ? (0, gr.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Pc("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, gr.jsxs)(gr.Fragment, {
              children: [(0, gr.jsx)(ou, {
                letGoShown: uc.letGoShown,
                haloShown: !0 === (null === Oc || void 0 === Oc ? void 0 : Oc.fish.some((cB => cB.halo)))
              }), (0, gr.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Pc("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Hu = nc(3876);

    function Fu(cB) {
      let {
        conversation: Bc,
        completedLabel: nc
      } = cB;
      return (0, gr.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, gr.jsxs)("header", {
          children: [(0, gr.jsx)("h3", {
            children: Bc.questName
          }), Bc.completed && (0, gr.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: nc
          })]
        }), Bc.lines.map((cB => (0, gr.jsx)(Hu.d, {
          display: cB.display
        }, cB.key)))]
      })
    }

    function Ju(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(II, Bc.getSnapshot()), Ic = WI();
      if (!Vc.enabled) return null;
      const rB = !Vc.loading && 0 === Vc.conversations.length;
      return (0, gr.jsx)(NI.b, {
        show: Vc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: nc("skyblockDialogue:title")
              }), (0, gr.jsx)("p", {
                children: nc("skyblockDialogue:intro")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsxs)("div", {
            className: SI()("SkyblockDialogueBody", {
              SingleColumn: null !== Vc.questFocus || 0 === Vc.characters.length
            }),
            children: [null === Vc.questFocus && Vc.characters.length > 0 && (0, gr.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Vc.characters.map((cB => (0, gr.jsx)(EI.d, {
                className: SI()("SkyblockDialogueCharacter", {
                  Selected: cB.selected
                }),
                onClick: () => {
                  Bc.selectCharacter(cB.id)
                },
                children: (0, gr.jsx)(ar.e, {
                  text: cB.styling
                })
              }, cB.id)))
            }), (0, gr.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Vc.questFocus && (0, gr.jsx)(EI.d, {
                className: "SkyblockDialogueBack",
                onClick: Bc.showCharacters,
                children: nc("skyblockDialogue:allCharacters")
              }), Vc.loading && (0, gr.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: nc("skyblockDialogue:loading")
              }), rB && (0, gr.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: nc(null === Vc.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Vc.conversations.map((cB => (0, gr.jsx)(Fu, {
                conversation: cB,
                completedLabel: Vc.completedLabel
              }, cB.questId)))]
            })]
          })]
        })
      })
    }

    function jsc(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(PI, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI();
      return nc.enabled ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Vc("skyblockGame:autographBook")
              }), (0, gr.jsx)("p", {
                children: Vc("skyblockGame:autographBookIntro")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              onClick: Bc.dismiss
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, gr.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, gr.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, gr.jsx)("strong", {
                  children: nc.total
                }), (0, gr.jsx)("span", {
                  children: Vc("skyblockGame:autographTotal")
                })]
              }), (0, gr.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, gr.jsx)("strong", {
                  children: nc.rankTotal
                }), (0, gr.jsx)("span", {
                  children: Vc("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === nc.entries.length ? (0, gr.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Vc("skyblockGame:autographBookEmpty")
            }) : (0, gr.jsx)("ul", {
              className: "SkyblockAutographList",
              children: nc.entries.map((cB => (0, gr.jsxs)("li", {
                className: SI()("SkyblockAutograph", {
                  Ranked: null !== cB.rank
                }),
                style: null === cB.rank ? void 0 : {
                  color: cB.rank.colour
                },
                children: [null !== cB.rank && (0, gr.jsx)(Pr.e, {
                  className: "SkyblockAutographRankIcon",
                  name: cB.rank.icon,
                  kit: (0, Pr.f)(cB.rank.icon)
                }), (0, gr.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, gr.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: cB.name
                  }), (0, gr.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== cB.rank && (0, gr.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: cB.rank.label
                    }), (0, gr.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: cB.signedOn
                    })]
                  })]
                })]
              }, cB.key)))
            })]
          })]
        })
      }) : null
    }
    const Ru = (0, Yc.memo)((function(cB) {
        let {
          controller: Bc
        } = cB;
        return (0, gr.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Bc.display.mountWaypoint,
          children: [(0, gr.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, gr.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, gr.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, gr.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, gr.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, gr.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      is = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Ku(cB) {
      return "next" === cB.phase ? "\u2192" : is[cB.kind]
    }
    const xs = (0, Yc.memo)((function(cB) {
      let {
        controller: Bc,
        display: nc
      } = cB;
      const Vc = (0, LI.g)(sn, Bc.getNotificationSnapshot()),
        [Ic, rB] = (0, Yc.useState)(!1);
      return (0, LI.f)("qteStateUpdated", (cB => {
        rB(cB.isActive)
      })), (0, gr.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Ic ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Vc && (0, gr.jsxs)("div", {
          className: `SkyblockQuestNotification ${Vc.kind} ${Vc.phase}`,
          style: {
            "--quest-notification-duration": `${Vc.durationMs}ms`,
            ...Vc.accent && {
              "--quest-notification-accent": Vc.accent
            }
          },
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Vc.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, gr.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Ku(Vc)
            }), Vc.iconItem && (0, gr.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, gr.jsx)(hI.d, {
                itemName: Vc.iconItem,
                amount: 0
              })
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, gr.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Vc.title
            }), (0, gr.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, gr.jsx)(nr.e, {
                text: Vc.name
              })
            }), Vc.description && (0, gr.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, gr.jsx)(nr.e, {
                text: Vc.description
              })
            }), Vc.reward && (0, gr.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, gr.jsx)(nr.e, {
                text: Vc.reward
              })
            })]
          })]
        }, Vc.token), (null === Vc || void 0 === Vc ? void 0 : Vc.waypointNameKey) && (0, gr.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Vc.waypointNameKey,
          "data-notification-token": Vc.token,
          ref: nc.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Vc.token}`)]
      })
    }));

    function du(cB) {
      const Bc = parseInt(cB.replace("#", ""), 16);
      return `${Bc>>16&255}, ${Bc>>8&255}, ${255&Bc}`
    }
    const Au = (0, Yc.memo)((function(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(Dn, Bc.getSnapshot());
      if (!Vc) return null;
      const Ic = "arrival" === Vc.phase;
      return (0, gr.jsxs)("div", {
        className: SI()("SkyblockPortalTransit", {
          Departure: !Ic,
          Arrival: Ic
        }),
        style: {
          "--portal-rgb": du(Vc.colour),
          "--portal-duration": `${Vc.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gr.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, gr.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Bc.finishArrival(Vc.token)
          }
        }), (0, gr.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, gr.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Ic && (0, gr.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: nc("skyblockGame:portalTransitHeading")
          }), (0, gr.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: nc(Vc.zoneNameKey)
          })]
        })]
      }, Vc.token)
    }));

    function Gu() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function cM() {
      const cB = document.querySelector(".SkyblockHudCoins"),
        Bc = null === cB || void 0 === cB ? void 0 : cB.getBoundingClientRect();
      return Bc && Bc.width > 0 ? {
        x: Bc.left + Math.min(Bc.width, 24) / 2,
        y: Bc.top + Bc.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Bs(cB) {
      return {
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2
      }
    }

    function ns() {
      var cB;
      const Bc = null === (cB = document.querySelector(".HotBar")) || void 0 === cB ? void 0 : cB.getBoundingClientRect();
      return Bc && Bc.width > 0 ? Bs(Bc) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Vs(cB) {
      let {
        items: Bc,
        origins: nc,
        target: Vc
      } = cB;
      return (0, gr.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Bc.map(((cB, Bc) => {
          const Ic = nc[Bc];
          return (0, gr.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Ic.x}px`,
              top: `${Ic.y}px`,
              "--item-dx": Vc.x - Ic.x + "px",
              "--item-dy": Vc.y - Ic.y + "px",
              "--item-delay": 2e3 + 160 * Bc + "ms",
              "--item-flight": "700ms"
            },
            children: (0, gr.jsx)(hI.d, {
              itemName: cB.dailyRewardItemName,
              amount: 0
            })
          }, cB.dailyRewardItemName)
        }))
      })
    }

    function Is(cB, Bc) {
      const nc = -Math.PI / 2 + 1.25 * (cB / (Bc - 1) * 2 - 1),
        Vc = 70 + cB % 3 * 22;
      return {
        x: Math.cos(nc) * Vc,
        y: Math.sin(nc) * Vc * .7
      }
    }

    function rM(cB) {
      let {
        origin: Bc,
        target: nc,
        count: Vc
      } = cB;
      const Ic = [];
      for (let rB = 0; rB < Vc; rB++) {
        const cB = Is(rB, Vc);
        Ic.push((0, gr.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Bc.x}px`,
            top: `${Bc.y}px`,
            "--coin-bx": `${cB.x}px`,
            "--coin-by": `${cB.y}px`,
            "--coin-dx": nc.x - Bc.x + "px",
            "--coin-dy": nc.y - Bc.y + "px",
            "--coin-delay": `${kV(rB,Vc)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, gr.jsx)(hI.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, rB))
      }
      return (0, gr.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Ic
      })
    }

    function us(cB) {
      let {
        day: Bc
      } = cB;
      const nc = Lc[Bc - 1];
      return (0, gr.jsxs)(gr.Fragment, {
        children: [(0, gr.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gr.jsx)(hI.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, lI.e)(nc.dailyRewardCoins)]
        }), nc.dailyRewardItems.map((cB => (0, gr.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gr.jsx)(hI.d, {
            itemName: cB.dailyRewardItemName,
            amount: 0
          }), "\xd7", cB.dailyRewardItemAmount]
        }, cB.dailyRewardItemName)))]
      })
    }

    function ss(cB) {
      let {
        day: Bc
      } = cB;
      const nc = Uc(Bc);
      return (0, gr.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Lc.map(((cB, Vc) => {
          const Ic = Vc + 1;
          return (0, gr.jsxs)("li", {
            className: SI()("SkyblockDailyRewardTile", {
              Claimed: Ic < Bc && Ic !== nc,
              Today: Ic === Bc,
              Tomorrow: Ic === nc,
              Jackpot: Ic === gB
            }),
            children: [(0, gr.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Ic
            }), (0, gr.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, gr.jsx)(hI.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, lI.e)(cB.dailyRewardCoins)]
            }), cB.dailyRewardItems.map((cB => (0, gr.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, gr.jsx)(hI.d, {
                itemName: cB.dailyRewardItemName,
                amount: 0
              }), "\xd7", cB.dailyRewardItemAmount]
            }, cB.dailyRewardItemName)))]
          }, Ic)
        }))
      })
    }

    function Ms(cB) {
      let {
        view: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, Yc.useRef)(null), Ic = (0, Yc.useRef)(null), [rB, uc] = (0, Yc.useState)(null);
      (0, Yc.useLayoutEffect)((() => {
        var cB;
        const Bc = null === (cB = Vc.current) || void 0 === cB ? void 0 : cB.getBoundingClientRect();
        if (Bc) {
          var nc, rB;
          const cB = Array.from(null !== (nc = null === (rB = Ic.current) || void 0 === rB ? void 0 : rB.children) && void 0 !== nc ? nc : [], (cB => Bs(cB.getBoundingClientRect())));
          uc({
            origin: Bs(Bc),
            target: cM(),
            itemOrigins: cB,
            itemTarget: ns()
          })
        }
      }), []);
      const sc = Uc(Bc.day),
        Mc = function(cB, Bc) {
          const [nc, Vc] = (0, Yc.useState)((() => Gu() ? cB : 0));
          return (0, Yc.useEffect)((() => {
            if (Gu()) return;
            const nc = performance.now();
            let Ic = 0;
            const rB = uc => {
              const sc = Math.min(Math.max((uc - nc) / Bc, 0), 1);
              Vc(Math.round(cB * (1 - (1 - sc) ** 3))), sc < 1 && (Ic = requestAnimationFrame(rB))
            };
            return Ic = requestAnimationFrame(rB), () => {
              cancelAnimationFrame(Ic)
            }
          }), [cB, Bc]), nc
        }(Bc.coins, 450);
      return (0, gr.jsxs)("div", {
        className: SI()("SkyblockDailyReward", {
          Jackpot: Bc.day === gB
        }),
        style: {
          "--daily-duration": `${Bc.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gr.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, gr.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, gr.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: nc("skyblockGame:dailyRewardTitle")
            }), (0, gr.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: nc("skyblockGame:dailyRewardDay", {
                day: String(Bc.day)
              })
            })]
          }), (0, gr.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Vc,
            children: [(0, gr.jsx)(hI.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, gr.jsxs)("span", {
              children: ["+", (0, lI.e)(Mc)]
            })]
          }), Bc.items.length > 0 && (0, gr.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Ic,
            children: Bc.items.map((cB => (0, gr.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, gr.jsx)(hI.d, {
                itemName: cB.dailyRewardItemName,
                amount: 0
              }), "\xd7", cB.dailyRewardItemAmount]
            }, cB.dailyRewardItemName)))
          }), (0, gr.jsx)(ss, {
            day: Bc.day
          }), (0, gr.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [nc("skyblockGame:dailyRewardComeBack"), (0, gr.jsx)(us, {
              day: sc
            })]
          })]
        }), null !== rB && (0, gr.jsx)(rM, {
          origin: rB.origin,
          target: rB.target,
          count: Bc.flyingCoins
        }), null !== rB && rB.itemOrigins.length === Bc.items.length && (0, gr.jsx)(Vs, {
          items: Bc.items,
          origins: rB.itemOrigins,
          target: rB.itemTarget
        })]
      })
    }
    const Ps = (0, Yc.memo)((function(cB) {
        let {
          controller: Bc
        } = cB;
        const nc = (0, LI.g)(onc, Bc.getSnapshot());
        return nc ? (0, gr.jsx)(Ms, {
          view: nc
        }, nc.token) : null
      })),
      qM = "Gold Coin";

    function Os(cB) {
      return 650 + 220 * cB
    }

    function Ts(cB) {
      return {
        "--letter-delay": `${Os(cB)}ms`,
        "--letter-land": `${Os(cB)+300}ms`
      }
    }

    function fs(cB) {
      let {
        letterCount: Bc
      } = cB;
      return (0, gr.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, gr.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gr.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gr.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Bc
        }, ((cB, Bc) => (0, gr.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Ts(Bc),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Bc)))]
      })
    }

    function mM(cB) {
      var Bc, nc, Vc;
      let {
        letter: Ic,
        index: rB
      } = cB;
      const {
        t: uc
      } = (0, YI.x)(), sc = null !== (Bc = null === (nc = Ic.items[0]) || void 0 === nc ? void 0 : nc.itemName) && void 0 !== Bc ? Bc : qM;
      return (0, gr.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Ts(rB),
        children: [(0, gr.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, gr.jsx)(hI.d, {
            itemName: sc,
            amount: 0
          })
        }), (0, gr.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: uc(Ic.reasonKey, null !== (Vc = Ic.reasonParams) && void 0 !== Vc ? Vc : void 0)
        }), (0, gr.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Ic.coins > 0 && (0, gr.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, gr.jsx)(hI.d, {
              itemName: qM,
              amount: 0
            }), "+", (0, lI.e)(Ic.coins)]
          }), Ic.items.map(((cB, Bc) => (0, gr.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, gr.jsx)(hI.d, {
              itemName: cB.itemName,
              amount: 0
            }), cB.label, " \xd7", cB.amount]
          }, Bc)))]
        })]
      })
    }

    function es(cB) {
      let {
        view: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)();
      return (0, gr.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Bc.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Os(Bc.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, gr.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, gr.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, gr.jsx)(fs, {
              letterCount: Bc.letters.length
            }), (0, gr.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: nc("skyblockGame:mailboxTitle")
            })]
          }), (0, gr.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Bc.letters.map(((cB, Bc) => (0, gr.jsx)(mM, {
              letter: cB,
              index: Bc
            }, Bc)))
          }), Bc.more > 0 && (0, gr.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: nc("skyblockGame:mailboxMore", {
              count: String(Bc.more)
            })
          })]
        })
      })
    }
    const tM = (0, Yc.memo)((function(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(Hn, Bc.getSnapshot());
      return nc ? (0, gr.jsx)(es, {
        view: nc
      }, nc.token) : null
    }));

    function Ss(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(DV, Bc.getSnapshot());
      if (null === Vc) return null;
      const Ic = Vc.fullSet ? "empty" === Vc.fuelState ? {
        text: nc("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: nc("skyblockGame:magmawardHudFullSet", {
          worn: String(Vc.wornCount)
        }),
        tone: "partial"
      };
      return (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsxs)("div", {
          className: SI()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Vc.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Vc.fullSet,
            "SkyblockMagmawardHud-armed": Vc.fullSet && "empty" !== Vc.fuelState
          }),
          children: [null !== Vc.flare && (0, gr.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Vc.flare}`
          }, `flare:${Vc.flareToken}`), (0, gr.jsx)("div", {
            className: SI()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Vc.setLit
            }),
            children: Vc.pieces.map(((cB, Bc) => (0, gr.jsx)("div", {
              className: SI()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: cB.worn,
                SkyblockMagmawardPieceJustWorn: cB.justWorn
              }),
              children: (0, gr.jsx)(hI.d, {
                itemName: cB.itemName,
                amount: 0
              })
            }, `${Bc}:${cB.wornToken}`)))
          }, `pieces:${Vc.setLitToken}`), (0, gr.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, gr.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, gr.jsxs)("div", {
              className: SI()("SkyblockMagmawardFuelCounter", Vc.pulse && `SkyblockMagmawardFuelCounter-${Vc.pulse}`),
              children: [(0, gr.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, gr.jsx)(hI.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, gr.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Vc.fuel
              })]
            }, `counter:${Vc.pulseToken}`), "burn" === Vc.pulse && (0, gr.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Vc.pulseToken}`)]
          }), Ic && (0, gr.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Ic.tone} SmallTextBold`,
            children: Ic.text
          })]
        })
      })
    }

    function yM(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc,
        selectedLanguage: Vc
      } = (0, YI.x)(), Ic = (0, LI.g)(EV, Bc.getSnapshot());
      return null === Ic ? null : (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsxs)("div", {
          className: SI()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Ic.inRange
          }),
          style: {
            "--glowtide-colour": Ic.colour
          },
          "aria-label": nc("skyblockGame:glowtideChipLabel"),
          children: [(0, gr.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Ic.inRange ? (0, gr.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: nc("skyblockGame:glowtideChipInRange")
          }, `call:${Ic.inRangeToken}`) : (0, gr.jsxs)(gr.Fragment, {
            children: [(0, gr.jsx)("div", {
              ref: Bc.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, gr.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: nc("skyblockGame:waypointDistance", {
                distance: hc(Ic.distance, Vc.code)
              })
            })]
          })]
        })
      })
    }

    function zM(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(WV, Bc.getSnapshot());
      return null === Vc ? null : (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsxs)("div", {
          className: SI()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Vc.full
          }),
          "aria-label": nc("skyblockGame:glowMeterLabel", {
            fill: String(Vc.fill),
            Qc: String(Vc.Qc)
          }),
          children: [Vc.burst && (0, gr.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Vc.burstToken}`), (0, gr.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, gr.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Vc.ratio})`
              }
            }), Vc.gained && (0, gr.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Vc.gainToken}`), Vc.full && Array.from({
              length: 5
            }, ((cB, Bc) => (0, gr.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Bc)))]
          }), Vc.full && Vc.rares.map((cB => (0, gr.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, gr.jsx)(hI.d, {
              itemName: cB,
              amount: 0
            })
          }, cB))), Vc.ready && (0, gr.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, gr.jsx)("span", {
              children: nc("skyblockGame:glowMeterReady")
            })
          }, `ready:${Vc.fullToken}`)]
        })
      })
    }

    function ps(cB) {
      let {
        controller: Bc
      } = cB;
      const {
        t: nc
      } = (0, YI.x)(), Vc = (0, LI.g)(kI, Bc.getSnapshot());
      if (null === Vc) return null;
      const Ic = "waiting" === Vc.phase,
        rB = {
          animationDuration: `${Vc.waitMs}ms`,
          animationDelay: -Vc.elapsedMs + "ms"
        },
        uc = Ic ? void 0 : {
          animationDuration: `${Vc.waitMs}ms`
        };
      return (0, gr.jsxs)("div", {
        className: Ic ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Ic && (0, gr.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((cB, Bc) => (0, gr.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Bc))), (0, gr.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: rB
          }), (0, gr.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, gr.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, gr.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: rB
            })]
          }), (0, gr.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, gr.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: uc,
          children: nc(Vc.line)
        }, Vc.lineIndex)]
      }, Vc.token)
    }

    function hs(cB) {
      let {
        chart: Bc,
        showHere: nc,
        className: Vc
      } = cB;
      return (0, gr.jsx)("div", {
        className: SI()("SkyblockTideChartGrid", Vc, null !== Bc.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Bc.cells.map(((cB, Vc) => {
          const Ic = 0 !== (Bc.pulseCells & 1 << Vc),
            rB = Bc.castCell === Vc;
          return (0, gr.jsx)("span", {
            className: SI()("SkyblockTideChartCell", `Cell-${cB}`, Ic && "Pulse", rB && "Cast", nc && Bc.hereCell === Vc && "Here")
          }, `${Vc}:${Ic?`p${Bc.pulseToken}`:""}:${rB?`c${Bc.castToken}`:""}`)
        }))
      })
    }

    function aM(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(HV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = nc.chip;
      if (!nc.enabled || null === Ic) return null;
      const rB = Vc("skyblockGame:tideChartsChipLabel", {
        island: Ic.islandName,
        lit: String(Ic.lit),
        ink: String(Ic.ink)
      });
      return (0, gr.jsx)(zr.f, {
        placement: "statBars",
        children: (0, gr.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: SI()("SkyblockTideChartsChip", nc.open && "Open", null !== Ic.pictureName && "Complete"),
          "aria-label": rB,
          title: rB,
          onMouseDown: cB => {
            cB.preventDefault()
          },
          onClick: Bc.toggle,
          children: [(0, gr.jsx)(hs, {
            chart: Ic,
            showHere: !1,
            className: "Mini"
          }), (0, gr.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Ic.lit, "/", Ic.ink]
          })]
        })
      })
    }

    function ls(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, LI.g)(HV, Bc.getSnapshot()),
        {
          t: Vc
        } = (0, YI.x)(),
        Ic = WI(),
        rB = nc.card;
      return nc.enabled && null !== rB ? (0, gr.jsx)(NI.b, {
        show: nc.open,
        close: Bc.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gr.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Ic,
          onKeyDown: oI,
          children: [(0, gr.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, gr.jsxs)("div", {
              children: [(0, gr.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Vc("skyblockGame:tideChartsTitle")
              }), (0, gr.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Vc("skyblockGame:tideChartsIntro")
              })]
            }), (0, gr.jsx)(EI.k, {
              padIgnore: !0,
              ariaLabel: Vc("skyblockGame:tideChartsClose"),
              onClick: Bc.dismiss
            })]
          }), nc.tabs.length > 1 && (0, gr.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Vc("skyblockGame:tideChartsIslands"),
            children: nc.tabs.map((cB => (0, gr.jsx)("button", {
              type: "button",
              className: SI()("SkyblockTideChartsTab", cB.selected && "Selected"),
              "aria-pressed": cB.selected,
              onClick: () => {
                Bc.Vn(cB.island)
              },
              children: cB.name
            }, cB.island)))
          }), (0, gr.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, gr.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": rB.gridLabel,
              children: (0, gr.jsx)(hs, {
                chart: rB,
                showHere: !0,
                className: "Large"
              })
            }), (0, gr.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, gr.jsx)("h3", {
                children: rB.islandName
              }), (0, gr.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: rB.litText
              }), null === rB.pictureName ? (0, gr.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Vc("skyblockGame:tideChartsPictureHidden")
              }) : (0, gr.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Vc("skyblockGame:tideChartsPictureRevealed", {
                  picture: rB.pictureName
                })
              }, rB.pictureName), (0, gr.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, gr.jsxs)("li", {
                  children: [(0, gr.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Vc("skyblockGame:tideChartsLegendLit")]
                }), (0, gr.jsxs)("li", {
                  children: [(0, gr.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Vc("skyblockGame:tideChartsLegendClear")]
                }), null !== rB.hereCell && (0, gr.jsxs)("li", {
                  children: [(0, gr.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Vc("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, gr.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, gr.jsx)("span", {
                  children: nc.turnsText
                }), (0, gr.jsx)("span", {
                  children: nc.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Ys(cB) {
      var Bc;
      let {
        controller: nc
      } = cB;
      const {
        selectedLanguage: Vc
      } = (0, YI.x)(), Ic = Vc.code;
      (0, Yc.useEffect)((() => {
        nc.setTranslator(((cB, Bc) => (0, YI.s)(Ic, cB, Bc)), Ic, ((cB, Bc) => (0, YI.l)(Ic, cB, Bc)))
      }), [nc, Ic]);
      const rB = (0, LI.g)(Oc, nc.map.getSnapshot()),
        {
          openInGameMenuName: uc
        } = (0, yr.j)(["openInGameMenuName"]);
      return (0, gr.jsxs)(gr.Fragment, {
        children: [(0, gr.jsx)(xs, {
          controller: nc.quests,
          display: nc.navigation.display
        }), rB.enabled && !uc && (0, gr.jsx)(GI, {
          controller: nc.navigation
        }), (0, gr.jsx)(UI, {
          controller: nc,
          minimap: rB.enabled && (null === (Bc = rB.presentation) || void 0 === Bc ? void 0 : Bc.minimap) && (0, gr.jsx)(AI, {
            view: rB.presentation.minimap,
            navigation: nc.navigation,
            controller: nc.map
          }),
          children: (0, gr.jsx)(Mr, {
            controller: nc.quests,
            surface: "hud"
          })
        }), (0, gr.jsx)(Ru, {
          controller: nc.navigation
        }), (0, gr.jsx)(Au, {
          controller: nc.portalTransit
        }), (0, gr.jsx)(Ps, {
          controller: nc.dailyReward
        }), (0, gr.jsx)(tM, {
          controller: nc.mailbox
        }), (0, gr.jsx)(Ss, {
          controller: nc.magmaward
        }), (0, gr.jsx)(yM, {
          controller: nc.glowtide
        }), (0, gr.jsx)(Mu, {
          controller: nc.passage
        }), (0, gr.jsx)(aM, {
          controller: nc.tideCharts
        }), (0, gr.jsx)(zM, {
          controller: nc.glowMeter
        }), (0, gr.jsx)(zs, {
          controller: nc.reachLog
        }), (0, gr.jsx)(ps, {
          controller: nc.hushWait
        }), (0, gr.jsx)(eu, {
          controller: nc.lampLight
        }), (0, gr.jsx)(cu, {
          controller: nc.skills,
          surface: "hud"
        })]
      })
    }

    function Ls(cB) {
      let {
        controller: Bc
      } = cB;
      return (0, gr.jsxs)(gr.Fragment, {
        children: [(0, gr.jsx)(dI, {
          controller: Bc.map,
          navigation: Bc.navigation
        }), (0, gr.jsx)(cu, {
          controller: Bc.skills,
          surface: "menu"
        }), (0, gr.jsx)(Mr, {
          controller: Bc.quests,
          surface: "menu"
        }), (0, gr.jsx)(Hr, {
          controller: Bc.dungeons
        }), (0, gr.jsx)(ju, {
          controller: Bc.collections
        }), (0, gr.jsx)(Kr, {
          controller: Bc.questGraph
        }), (0, gr.jsx)(cs, {
          controller: Bc.forge
        }), (0, gr.jsx)(uu, {
          controller: Bc.smuggler
        }), (0, gr.jsx)(Su, {
          controller: Bc.keepersChair,
          lampLight: Bc.lampLight
        }), (0, gr.jsx)(Xu, {
          controller: Bc.reachLog,
          regulars: Bc.regulars,
          hiddenWaters: Bc.hiddenWaters
        }), (0, gr.jsx)(lu, {
          controller: Bc.regulars
        }), (0, gr.jsx)(qs, {
          controller: Bc.passage
        }), (0, gr.jsx)(ls, {
          controller: Bc.tideCharts
        }), (0, gr.jsx)(Ju, {
          controller: Bc.dialogue
        }), (0, gr.jsx)(jsc, {
          controller: Bc.autographs
        })]
      })
    }
    var gM = nc(35371);
    const Us = dn + IV;

    function bM(cB, Bc, nc, Vc, Ic) {
      const rB = [],
        uc = [],
        sc = nc => {
          const Vc = cB.playSound(Bc, nc.sound, nc.volume, nc.rate);
          Vc && (uc.push(Vc), void 0 !== nc.cutAfter && rB.push(setTimeout((() => {
            Vc.fade(Vc.getVolume(), 0, 300)
          }), nc.cutAfter)))
        };
      for (const Mc of function(cB, Bc) {
          const nc = [{
            sound: "rpgKnifeSlice1",
            beat: dn,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: dn,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: dn,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: dn,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: dn,
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
            sound: (0, gM.b)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Us + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, gM.b)("bigDrumSwish"),
            beat: Us + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Us + 60,
            lead: 180,
            volume: .5 + .06 * cB,
            rate: .82 + .07 * cB
          }];
          return cB >= 4 && nc.push({
            sound: "exp_levelup",
            beat: Us + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Bc && nc.push({
            sound: "trumpetFlare",
            beat: Us + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), nc.push({
            sound: "harp_pling",
            beat: An,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), nc
        }(nc, Vc)) Ic ? rB.push(setTimeout((() => {
        sc(Mc)
      }), Math.max(0, Mc.beat - Mc.lead / Mc.rate))) : Mc.beat !== dn && "magicAccent2" !== Mc.sound && "trumpetFlare" !== Mc.sound || sc(Mc);
      return () => {
        for (const cB of rB) clearTimeout(cB);
        for (const cB of uc) cB.fade(cB.getVolume(), 0, 120)
      }
    }
    class Zs {
      constructor(cB) {
        this.deps = cB, this.pending = new Map, this.localHook = null
      }
      hookWaiting(cB, Bc) {
        this.pending.delete(cB);
        const nc = this.deps.now();
        if (null === Bc) {
          var Vc;
          if ((null === (Vc = this.localHook) || void 0 === Vc ? void 0 : Vc.hookId) === cB) {
            const cB = nc >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(cB)
          }
          return
        }
        const Ic = nc + Bc;
        this.settle(cB, Ic) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(cB, {
          untilMs: nc + 1e3,
          biteAtMs: Ic
        }))
      }
      getLocalHook() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.localHook) || void 0 === Bc ? void 0 : Bc.hookId) && void 0 !== cB ? cB : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const cB = this.deps.now();
        for (const [Bc, {
            untilMs: nc,
            biteAtMs: Vc
          }] of this.pending)(this.settle(Bc, Vc) || cB > nc) && this.pending.delete(Bc)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(cB, Bc) {
        const nc = this.deps.getLineOwner(cB);
        if (null === nc) return !1;
        if (!this.deps.isLocalPlayer(nc)) return !0;
        if (this.localHook = {
            hookId: cB,
            biteAtMs: Bc
          }, !this.deps.isHushWaiting()) {
          const [Bc, nc] = this.deps.getHookPosition(cB);
          this.deps.onCastLanded(Bc, nc)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Qs = nc(3441);
    const Cs = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      vM = {
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
    class Ds {
      constructor(cB) {
        this.deps = cB, this.tell = null
      }
      receiveTell(cB) {
        let {
          biteTellTier: Bc
        } = cB;
        this.tell = {
          tier: Bc,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(cB) {
        const Bc = this.tell;
        if (this.tell = null, !cB) return;
        const nc = null !== Bc && this.deps.now() - Bc.atMs <= 3e3 ? Bc.tier : 0;
        this.deps.vibrate(Cs[nc])
      }
      burstAtHook() {
        const cB = this.tell,
          Bc = this.deps.getLocalHookPosition();
        null === cB || cB.burst || null === Bc || (cB.burst = !0, this.deps.playParticles(function(cB, Bc) {
          let [nc, Vc, Ic] = Bc;
          const {
            count: rB,
            rise: uc,
            colour: sc
          } = vM[cB], [Mc, Pc, qB] = sc;
          return {
            texture: "glint",
            pos1: [nc - .3, Vc, Ic - .3],
            pos2: [nc + .3, Vc + .2, Ic + .3],
            dir1: [-.6, uc, -.6],
            dir2: [.6, 1.4 * uc, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: rB,
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
              minColor: [Mc, Pc, qB, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Mc, Pc, qB, 0],
              maxColor: [Mc, Pc, qB, 0]
            }],
            blendMode: Qs.f.Add,
            hideDist: 48
          }
        }(cB.tier, Bc)))
      }
    }
    var Ns = nc(1117),
      Es = nc(1572),
      os = nc(51);

    function Ws(cB, Bc) {
      return [{
        timeFraction: 0,
        minColor: [255 * cB[0], 255 * cB[1], 255 * cB[2], 1],
        maxColor: [255 * Bc[0], 255 * Bc[1], 255 * Bc[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const ws = [0, 0, 0],
      kM = {
        texture: "glint",
        mipmaps: !1,
        Qc: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: ws,
        dir2: ws,
        blendMode: Qs.f.OneOne
      },
      Xs = {
        ...kM,
        colorGradients: Ws([1, .88, .38], [1, .65, .15])
      },
      Hs = {
        ...kM,
        colorGradients: Ws([.55, .95, 1], [.9, 1, 1])
      },
      Fs = [.5, .5, .5],
      Jsc = {
        texture: "glint",
        mipmaps: !1,
        Qc: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Ws([1, .12, .12], [1, .35, .2]),
        blendMode: Qs.f.OneOne
      };
    class jM {
      constructor() {
        this.drops = new Map
      }
      EV(cB, Bc) {
        if ("overflowFlash" === Bc.kind) {
          const [nc, Vc, Ic] = Bc.position, rB = cB.createParticles(Jsc, {
            pos: [nc, Vc, Ic],
            half: Fs
          });
          return rB.emit(18), void rB.stop()
        }
        this.drops.has(Bc.itemId) || this.drops.set(Bc.itemId, {
          owner: Bc.owner,
          cosmetic: Bc.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      cn(cB) {
        if (0 === this.drops.size) return;
        const Bc = performance.now(),
          nc = cB.getCameraPosition();
        let Vc = 0;
        for (const rB of this.drops.values()) null !== rB.particles && Vc++;
        for (const [rB, uc] of this.drops) {
          const sc = cB.getPositionView(rB);
          if (null === sc) {
            var Ic;
            if (uc.seen || Bc - uc.markedAt > 5e3) null !== uc.particles && Vc--, null === (Ic = uc.particles) || void 0 === Ic || Ic.stop(), this.drops.delete(rB);
            continue
          }
          uc.cosmetic || !cB.isLocalPlayer(uc.owner) || uc.pickupDelayCleared || (cB.clearPickupDelay(rB), uc.pickupDelayCleared = !0);
          const Mc = uc.lastPosition,
            Pc = uc.seen && (sc[0] - Mc[0]) ** 2 + (sc[1] - Mc[1]) ** 2 + (sc[2] - Mc[2]) ** 2 > 4e-4,
            qB = (sc[0] - nc[0]) ** 2 + (sc[1] - nc[1]) ** 2 + (sc[2] - nc[2]) ** 2 < 2025;
          uc.seen = !0, Mc[0] = sc[0], Mc[1] = sc[1], Mc[2] = sc[2], Pc && (uc.lastMovingAt = Bc), null !== uc.particles && (!qB || Bc - uc.lastMovingAt > 500) && (uc.particles.stop(), uc.particles = null, Vc--), Pc && qB && null === uc.particles && Vc < 32 && (uc.particles = cB.createParticles(uc.cosmetic ? Hs : Xs, {
            pos: sc
          }), Vc++), null !== uc.particles && (uc.particles.moveTo(sc), uc.particles.setEmitRate(Pc ? 12 : 0)), !Pc && null === uc.particles && Bc - Math.max(uc.lastMovingAt, uc.markedAt) > 2e3 && this.drops.delete(rB)
        }
      }
      dispose() {
        for (const Bc of this.drops.values()) {
          var cB;
          null === (cB = Bc.particles) || void 0 === cB || cB.stop()
        }
        this.drops.clear()
      }
    }
    var Rs = nc(174);
    const iM = Rs.e.wY * Rs.e.playerEyeToHeightRatio;
    class Ks {
      constructor(cB) {
        this.host = cB, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      EV(cB) {
        this.lava = cB, this.nextUpdateAt = 0
      }
      cn() {
        var cB;
        const Bc = this.host.now();
        if (Bc < this.nextUpdateAt) return;
        this.nextUpdateAt = Bc + 250;
        const nc = this.host.playerPosition(),
          Vc = nc && this.findNearest([nc[0], nc[1] + iM, nc[2]]);
        if (!Vc || Vc.distance >= 40) return void this.stop();
        const Ic = .5 * Math.min(1, (40 - Vc.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Ic) : this.loop = this.host.play("lavaFlow", Ic, Vc.position, 40 + iM, 9, !0), null === (cB = this.loop) || void 0 === cB || cB.setPosition(Vc.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var cB;
        null === (cB = this.loop) || void 0 === cB || cB.stop(), this.loop = null
      }
      findNearest(cB) {
        let Bc = -1,
          nc = 1 / 0;
        for (let Vc = 0; Vc < this.lava.length; Vc += 3) {
          const Ic = this.lava[Vc] - cB[0],
            rB = this.lava[Vc + 1] - cB[1],
            uc = this.lava[Vc + 2] - cB[2],
            sc = Ic * Ic + rB * rB + uc * uc;
          sc < nc && (nc = sc, Bc = Vc)
        }
        return Bc < 0 ? null : {
          position: [this.lava[Bc], this.lava[Bc + 1], this.lava[Bc + 2]],
          distance: Math.sqrt(nc)
        }
      }
    }
    var xM = nc(1549),
      ds = nc(37154);
    const As = {
      "Grey Portal": "Gray"
    };
    for (const IM of Ic.hc) As[`${IM} Portal`] = IM;
    const Gs = Object.keys(As),
      cP = Object.fromEntries(Gs.map((cB => [cB, (0, Ic.N)(Ic.C[`${(0,Ic.Nd)(As[cB])}Team`])])));
    Object.fromEntries(Gs.map((cB => [cB, Ic.C[`${(0,Ic.Nd)(As[cB])}UiText`]])));
    class BM {
      constructor(cB, Bc) {
        this.presentation = cB, this.portal = Bc, this.unlocked = void 0
      }
      EV(cB) {
        const Bc = !1 === this.unlocked && cB;
        this.unlocked = cB, this.cn();
        const {
          min: nc,
          max: Vc,
          unlockedBlock: Ic
        } = this.portal;
        if (Bc && this.presentation.hasChunk(...nc)) {
          const [cB, Bc, rB] = cP[Ic];
          this.presentation.playParticles({
            pos1: [...nc],
            pos2: Vc.map((cB => cB + 1)),
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
              minColor: [cB, Bc, rB, 1],
              maxColor: [Math.min(255, cB + 55), Math.min(255, Bc + 55), Math.min(255, rB + 90), 1]
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
      cn() {
        var cB;
        const Bc = this.unlocked ? this.portal.unlockedBlock : null !== (cB = this.portal.lockedBlock) && void 0 !== cB ? cB : "Light Gray Portal",
          {
            min: nc,
            max: Vc
          } = this.portal;
        for (let Ic = nc[0]; Ic <= Vc[0]; Ic++)
          for (let cB = nc[1]; cB <= Vc[1]; cB++)
            for (let rB = nc[2]; rB <= Vc[2]; rB++) this.presentation.hasChunk(Ic, cB, rB) && this.presentation.sZ(Ic, cB, rB) !== Bc && this.presentation.UBc(Ic, cB, rB, Bc)
      }
    }
    const nM = {
        farming_1: {
          raises: cB => "NPC" === cB.type && "chef" === cB.variation,
          rise: .4
        },
        fishing_1: {
          raises: cB => "Draugr Warper" === cB.type,
          rise: .4
        }
      },
      VM = (cB, Bc, nc, rB) => {
        let {
          localPlayerId: uc
        } = rB;
        const sc = new eI({
          translate: (cB, Bc) => (0, YI.s)(Ns.e.get().getCurrentLanguageCode(), cB, Bc),
          translateWithIcons: (cB, Bc) => (0, YI.l)(Ns.e.get().getCurrentLanguageCode(), cB, Bc),
          setMenuOpen: cB => {
            cB ? (0, Fc.s)() : (0, Fc.f)()
          },
          dismissMenu: Fc.j,
          publishSkills: cB => {
            Jc.i.Vu(nn, cB, !0)
          },
          publishQuests: cB => {
            Jc.i.Vu(un, cB, !0)
          },
          publishQuestNotification: cB => {
            Jc.i.Vu(sn, cB, !0)
          },
          publishDungeons: cB => {
            Jc.i.Vu(qV, cB, !0)
          },
          publishCollections: cB => {
            Jc.i.Vu(Cn, cB, !0)
          },
          publishMap: cB => {
            Jc.i.Vu(Oc, cB, !0)
          },
          publishHud: cB => {
            Jc.i.Vu(TI, cB, !0)
          },
          publishPortalTransit: cB => {
            Jc.i.Vu(Dn, cB, !0)
          },
          isLoadingScreenUp: () => yr.d.get("loadingOverlayVisible"),
          publishDailyReward: cB => {
            Jc.i.Vu(onc, cB, !0)
          },
          publishMailbox: cB => {
            Jc.i.Vu(Hn, cB, !0)
          },
          publishQuestGraph: cB => {
            Jc.i.Vu(Jn, cB, !0)
          },
          publishForge: cB => {
            Jc.i.Vu(OV, cB, !0)
          },
          publishSmuggler: cB => {
            Jc.i.Vu(mI, cB, !0)
          },
          publishKeepersChair: cB => {
            Jc.i.Vu(lV, cB, !0)
          },
          publishReachLog: cB => {
            Jc.i.Vu(LV, cB, !0)
          },
          publishLampLight: cB => {
            Jc.i.Vu(CV, cB, !0)
          },
          publishMagmaward: cB => {
            Jc.i.Vu(DV, cB, !0)
          },
          publishGlowtide: cB => {
            Jc.i.Vu(EV, cB, !0)
          },
          publishGlowMeter: cB => {
            Jc.i.Vu(WV, cB, !0)
          },
          publishHushWait: cB => {
            Jc.i.Vu(kI, cB, !0)
          },
          publishPassage: cB => {
            Jc.i.Vu(SV, cB, !0)
          },
          publishTideCharts: cB => {
            Jc.i.Vu(HV, cB, !0)
          },
          publishRegulars: cB => {
            Jc.i.Vu(dV, cB, !0)
          },
          publishHiddenWaters: cB => {
            Jc.i.Vu(nI, cB, !0)
          },
          publishDialogue: cB => {
            Jc.i.Vu(II, cB, !0)
          },
          publishAutographs: cB => {
            Jc.i.Vu(PI, cB, !0)
          },
          onDailyRewardStarted: cB => {
            wc.playSound(uc, cB.day === gB ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (cB, Bc) => {
            wc.playSound(uc, "exp_collect", .35, 1 + .6 * cB / (Bc - 1)), Jc.i.Vu(Wn, cB === Bc - 1)
          },
          onDailyRewardItemLanded: cB => {
            wc.playSound(uc, "pickUp", .6, 1 + .15 * cB)
          },
          onMailboxStarted: () => {
            wc.playSound(uc, "rpgMetalClick", .6, 1), wc.playSound(uc, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            wc.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: os.i,
          requestTracking: cB => {
            wc.sendCommand(`quests track ${cB}`)
          },
          requestDungeonEnter: (cB, Bc) => {
            wc.sendCommand(`${Zc.j}${cB} ${Bc}`)
          },
          requestQuestJump: cB => {
            wc.sendCommand(`${Qc} jump ${cB}`)
          },
          requestQuestArrive: (cB, Bc) => {
            const nc = `${Qc} arrive ${cB}`;
            wc.sendCommand(Bc ? `${nc} complete` : nc)
          },
          requestForge: cB => {
            let {
              blade: Bc,
              guard: nc,
              handle: Vc
            } = cB;
            wc.sendCommand(`forge ${Bc} ${nc} ${Vc}`)
          },
          requestDialogue: () => {
            wc.sendCommand("quests dialogue")
          },
          requestSmuggle: (cB, Bc) => {
            wc.sendCommand(`smuggle ${cB} ${Bc}`)
          },
          requestKeepersChairAim: cB => {
            wc.sendCommand(`keeperschair-aim ${cB}`)
          },
          requestReachLogOpen: () => {
            wc.sendCommand("reachlog-open")
          },
          requestLampLight: cB => {
            wc.sendCommand(`${cB}`)
          },
          requestTravel: cB => {
            wc.sendCommand(`map travel ${cB.kind} ${cB.id} ${cB.requestId}`)
          }
        });
        let Mc, Pc, qB, Tc, fc, mB, zB, pc, hc, aB, Lc, Uc, Cc;
        const Ec = new jM;
        let wc, kB = null;
        const Rc = nM[null !== nc && void 0 !== nc ? nc : ""],
          iB = (cB, Bc) => {
            null !== Rc && void 0 !== Rc && Rc.raises(Bc) && wc.setNametagOffset(cB, Rc.rise)
          },
          Kc = new Ds({
            getLocalHookPosition: () => {
              const cB = xB.getLocalHook();
              return null !== cB && wc.checkValid(cB) ? wc.rC(cB) : null
            },
            playParticles: cB => {
              wc.playParticleEffect(cB)
            },
            vibrate: cB => {
              jB.g.play("fishBite", cB)
            },
            now: () => performance.now()
          }),
          xB = new Zs({
            getLineOwner: cB => wc.checkValid(cB) ? wc.getLineOwner(cB) : null,
            isLocalPlayer: cB => wc.isLocalPlayer(cB),
            getHookPosition: cB => {
              const [Bc, , nc] = wc.rC(cB);
              return [Bc, nc]
            },
            isHushWaiting: () => {
              var cB;
              return "waiting" === (null === (cB = sc.hushWait.getSnapshot()) || void 0 === cB ? void 0 : cB.phase)
            },
            onCastLanded: (cB, Bc) => {
              sc.tideCharts.castLanded(cB, Bc)
            },
            onLocalHookSettled: () => {
              Kc.onLocalHookSettled()
            },
            onLocalWaitEnded: cB => {
              Kc.onLocalWaitEnded(cB)
            },
            now: () => performance.now()
          }),
          dc = new Ks({
            now: () => performance.now(),
            playerPosition: () => wc.checkValid(uc) ? wc.rC(uc) : null,
            play: (cB, Bc, nc, Vc, Ic, rB) => wc.playSound(uc, cB, Bc, 1, {
              vx: nc,
              maxHearDist: Vc,
              refDistance: Ic
            }, rB)
          }),
          Ac = new Map;
        let Gc;
        return {
          onCreate: cB => {
            if (wc = cB, kB = new ds.SkyblockEntityFacing(cB, Rc ? iB : null), sc.portalTransit.resumeArrival(null !== nc && void 0 !== nc ? nc : null), (null !== nc && void 0 !== nc ? nc : Vc) === Vc) {
              let cB = -1 / 0;
              Gc = Jc.i.subscribe("toggleMenu", (Bc => {
                const nc = performance.now();
                "inventory|Workbench" !== Bc || "cross_to_hub" !== sc.quests.getTrackedQuestId() || nc - cB < 1e4 || (cB = nc, wc.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Vc, Ic] of Object.entries(null !== (Bc = vB[null !== nc && void 0 !== nc ? nc : ""]) && void 0 !== Bc ? Bc : {})) {
              var Bc;
              Ac.set(Vc, new BM({
                hasChunk: (Bc, nc, Vc) => cB.isBlockInLoadedChunk(Bc, nc, Vc),
                sZ: (Bc, nc, Vc) => cB.blockIdToBlockName(cB.getBlockId(Bc, nc, Vc)),
                UBc: (Bc, nc, Vc, Ic) => {
                  cB.UBc(Bc, nc, Vc, Ic)
                },
                playParticles: Bc => {
                  cB.playParticleEffect(Bc)
                }
              }, Ic))
            }
            Cc = (0, xM.e)((cB => function(cB) {
              return Object.hasOwn(wB, cB) || cB.startsWith("npc_")
            }(cB) ? XB(cB) : null)), sc.resolveItemName = (Bc, nc) => {
              const Vc = cB.getItemStat(uc, Bc, "displayName");
              return Vc && "object" === typeof Vc && "translationKey" in Vc ? nc(Vc.translationKey, (0, YI.j)(Vc.params, Es.d.shown)) : "string" === typeof Vc ? nc(Vc) : Bc
            }, sc.quests.notifications.onShown = cB => {
              "quest" === cB ? wc.playSound(uc, "magicAccent1", 1, 1) : "skillLevel" === cB ? wc.playSound(uc, "magicAccent1", 1, .6) : "landmark" === cB ? wc.playSound(uc, "trumpetFlare", 1, .6) : "npcNote" === cB ? wc.playSound(uc, "magicAccent2", .8, 1.1) : "started" === cB ? wc.playSound(uc, (0, gM.b)("bigDrumSwish"), 1, 1) : wc.playSound(uc, (0, gM.b)("rpgHandleSmallLeather"), 1, 1)
            }, sc.forge.onPartSelected = () => {
              wc.playSound(uc, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, sc.forge.onForgeStarted = (Bc, nc, Vc) => bM(cB, uc, Bc, nc, Vc), sc.smuggler.onBought = () => {
              wc.playSound(uc, (0, gM.b)("rpgHandleSmallLeather"), 1, 1), wc.playSound(uc, "chestOpen", .6, 1)
            }, sc.compass.register(new ec(sc.map, !0)), sc.compass.register(new ec(sc.map, !1)), sc.compass.register(new Sc(sc.map)), sc.compass.register(new yB((() => sc.quests.getSnapshot().compassTarget)));
            for (const nc of ["enemy", "npc"]) sc.compass.register(new tB(sc.map, nc, (Bc => cB.checkValid(Bc) ? cB.rC(Bc) : void 0), (Bc => cB.isAlive(Bc))))
          },
          onAfterRender: (cB, Bc) => {
            const nc = wc.checkValid(uc) ? wc.rC(uc) : null;
            sc.navigation.afterRender(nc, performance.now(), Bc), sc.glowtide.afterRender(nc, Bc.cameraHeading), sc.tideCharts.afterRender(nc), xB.afterRender()
          },
          onClose: () => {
            var cB, Bc, nc, Vc, Ic, rB, uc, Oc, mB, ec, tB, Sc, yB, lc, Yc;
            Gc && Jc.i.unsubscribe(Gc), null === (cB = Cc) || void 0 === cB || cB(), Ec.dispose(), dc.dispose(), null === (Bc = kB) || void 0 === Bc || Bc.dispose(), xB.dispose(), sc.dispose(), null === (nc = Mc) || void 0 === nc || nc(), null === (Vc = Pc) || void 0 === Vc || Vc(), null === (Ic = qB) || void 0 === Ic || Ic(), null === (rB = Tc) || void 0 === rB || rB(), null === (uc = fc) || void 0 === uc || uc(), null === (Oc = zB) || void 0 === Oc || Oc(), null === (mB = undefined) || void 0 === mB || mB(), null === (ec = pc) || void 0 === ec || ec(), null === (tB = hc) || void 0 === tB || tB(), null === (Sc = aB) || void 0 === Sc || Sc(), null === (yB = Lc) || void 0 === yB || yB(), null === (lc = undefined) || void 0 === lc || lc(), null === (Yc = Uc) || void 0 === Yc || Yc()
          },
          onPlayerChangeBlock: (cB, Bc, Vc, rB, Mc, Pc) => {
            if (cB === uc && "Air" === Pc) {
              const cB = wc.getClientOption(uc, "creative");
              sc.skills.predictBlock([Bc, Vc, rB], Mc, cB);
              const Pc = function(cB, Bc) {
                  if ("hub" === Bc || "farming_1" === Bc || "mining_1" === Bc) return !oc.has(cB) || "hub" !== Bc && "mining_1" !== Bc ? Object.hasOwn(Nc, cB) ? Nc[cB] : void 0 : Dc
                }(Mc, nc),
                qB = ("hub" === nc || "mining_1" === nc) && (Ic.Mc.some((cB => cB === Mc)) || Object.hasOwn(Wc, Mc) || "mining_1" === nc && "Block of Coal" === Mc);
              cB || void 0 === Pc && !qB || wc.UBc(Bc, Vc, rB, null !== Pc && void 0 !== Pc ? Pc : Dc)
            }
          },
          onPlayerAttackEntity: (cB, Bc) => {
            if (cB !== uc || "Player" !== wc.getEntityType(Bc)) return;
            const [nc, Vc, Ic] = wc.rC(Bc);
            wc.burstParticlePreset("critical", [nc, Vc + 1, Ic], 10)
          },
          onChangeBlockFail: cB => {
            for (const {
                E1: Bc
              }
              of cB) sc.skills.rejectBlock(Bc)
          },
          onReceivedMessageFromServer: (cB, Bc) => {
            if ("skyblockGatedPortal" === cB) {
              var nc;
              const [cB, Vc] = Bc;
              return void(null === (nc = Ac.get(cB)) || void 0 === nc || nc.EV(Vc))
            }
            if ("skyblockDailyReward" === cB) return void sc.dailyReward.EV(Bc);
            if ("skyblockMailbox" === cB) return void sc.mailbox.EV(Bc);
            if ("skyblockPortalTransit" === cB) return void sc.portalTransit.EV(Bc);
            if ("skyblockLoot" === cB) return void Ec.EV(wc, Bc);
            if ("skyblockLava" === cB) return void dc.EV(Bc);
            if ("skyblockForge" === cB) return void sc.forge.EV(Bc);
            if ("skyblockMagmaward" === cB) return void sc.magmaward.EV(Bc);
            if ("skyblockGlowtide" === cB) return void sc.glowtide.EV(Bc);
            if ("skyblockGlowMeter" === cB) return void sc.glowMeter.EV(Bc);
            if ("skyblockHushWait" === cB) return void sc.hushWait.EV(Bc);
            if ("skyblockPassage" === cB) {
              const cB = Bc;
              return sc.passage.EV(cB), sc.reachLog.receivePassagePhase(cB.passagePhase), aB ??= (0, lc.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: sc.passage.show
              }), void sc.keepersChair.receivePassage({
                keepersChairPassagePhase: cB.passagePhase,
                keepersChairPassageNextPhase: cB.passageNextPhase,
                keepersChairPassageTurnsInMs: cB.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === cB) {
              const cB = Bc;
              return sc.tideCharts.EV(cB), void(cB.tideCharts.length > 0 && (Lc ??= (0, lc.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: sc.tideCharts.show
              })))
            }
            if (cB === Xc.B) {
              var Vc;
              const {
                hookId: cB,
                waiting: nc
              } = Bc;
              return void xB.hookWaiting(cB, null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.remainingMs) && void 0 !== Vc ? Vc : null)
            }
            if ("skyblockBiteTell" === cB) return void Kc.receiveTell(Bc);
            if ("skyblockSmuggler" === cB) return void sc.smuggler.EV(Bc);
            if ("skyblockKeepersChair" === cB) return sc.keepersChair.EV(Bc), void sc.lampLight.setAtChair(sc.keepersChair.isAtChair());
            if ("skyblockLampLight" === cB) {
              const cB = Bc;
              var Ic;
              if (sc.lampLight.EV(cB), cB.lampLightReleasing) hc ??= (0, lc.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  sc.lampLight.setRelease(!1)
                }
              });
              else null === (Ic = hc) || void 0 === Ic || Ic(), hc = void 0;
              return
            }
            if ("skyblockRegulars" === cB) return void sc.regulars.EV(Bc);
            if ("skyblockHiddenWaters" === cB) return void sc.hiddenWaters.EV(Bc);
            if ("skyblockReachLog" === cB) return sc.reachLog.EV(Bc), void(pc ??= (0, lc.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: UV
              },
              onClick: sc.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === cB) {
              for (const [cB, nc, Vc, Ic] of Bc) wc.UBc(cB, nc, Vc, Ic);
              return
            }
            if ("skyblockHud" === cB) sc.receiveHud(Bc);
            else if ("skyblockMap" === cB) sc.map.EV(Bc);
            else if (cB === Hc.f) sc.skills.EV(Bc);
            else if (cB === bB && "dialogue" === Bc.kind) sc.dialogue.EV(Bc);
            else if (cB === bB) sc.quests.EV(Bc);
            else if (cB === Zc.f) sc.dungeons.EV(Bc);
            else if ("sbCollections" === cB) sc.collections.EV(Bc);
            else if ("skyblockQuestGraph" === cB) sc.questGraph.EV(Bc);
            else {
              if ("skyblockAutographs" !== cB) return;
              sc.autographs.EV(Bc)
            }
            if (!Pc && sc.map.getSnapshot().enabled) {
              const cB = (0, lc.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: sc.map.show
                }),
                Bc = (0, Fc.w)(sc.map.show);
              Pc = () => {
                cB(), Bc()
              }
            }!qB && sc.skills.getSnapshot().enabled && (qB = (0, lc.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: sc.skills.show
            })), !zB && sc.collections.getSnapshot().enabled && (zB = (0, lc.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: sc.collections.show
            })), !Tc && sc.quests.getSnapshot().enabled && (Tc = (0, lc.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: sc.quests.show
            })), !Uc && sc.autographs.getSnapshot().enabled && (Uc = (0, lc.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: sc.autographs.show
            }));
            const rB = sc.dungeons.getSnapshot().enabled;
            var uc;
            (qB || Tc || rB) && mB !== rB && (mB = rB, null === (uc = fc) || void 0 === uc || uc(), fc = (0, lc.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: bn
              },
              disabled: !rB,
              panel: !0,
              onClick: sc.dungeons.show
            }));
            Mc || (Mc = (0, Fc.x)((0, Yc.createElement)(Ys, {
              controller: sc
            }), {
              content: (0, Yc.createElement)(Ls, {
                controller: sc
              }),
              onClose: sc.close
            }))
          },
          cn: () => {
            var cB;
            for (const Bc of Ac.values()) Bc.cn();
            Ec.cn(wc), dc.cn(), null === (cB = kB) || void 0 === cB || cB.cn(), sc.skills.cn(), sc.quests.cn(), sc.dailyReward.cn(), sc.mailbox.cn(), sc.map.cn()
          }
        }
      }
  },
  37064: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      e: () => sc,
      f: () => Vc,
      j: () => rB,
      k: () => Ic,
      m: () => Mc
    });
    const Vc = "skyblockDungeons",
      Ic = "skyblockHeldBoss",
      rB = "dungeonEnter ",
      uc = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      sc = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Mc(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const nc = Math.max(0, Math.floor(cB)),
        Vc = Math.floor(nc % 1e3 / 100),
        Ic = Math.floor(nc / 1e3),
        rB = Ic % 60,
        uc = Math.floor(Ic / 60),
        sc = uc % 60,
        Mc = Math.floor(uc / 60),
        Pc = cB => cB < 10 ? `0${cB}` : String(cB),
        qB = Bc ? `.${Vc}` : "";
      return Mc > 0 ? `${Mc}:${Pc(sc)}:${Pc(rB)}${qB}` : `${sc}:${Pc(rB)}${qB}`
    }
  },
  35077: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc
    });
    const Vc = "skyblockSkills",
      Ic = "skills_test_gym"
  },
  8203: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => uc
    });
    const Vc = [{
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

    function Ic(cB) {
      let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof cB) {
        if (!Number.isFinite(cB)) return "0";
        if (Math.abs(cB) < 100) {
          const Bc = cB < 0 ? "-" : "",
            nc = Math.abs(cB);
          return nc >= 10 ? `${Bc}${nc.toFixed(1).replace(/\.0$/,"")}` : `${Bc}${nc.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Bc = BigInt(Math.floor(cB))
      } else Bc = cB;
      const Ic = Bc < 0n ? -Bc : Bc,
        rB = Bc < 0n ? "-" : "",
        uc = Ic.toString();
      if (uc.length <= nc) return `${rB}${uc}`;
      const sc = 3 * Math.floor((uc.length - 1) / 3);
      if (sc < 3) return `${rB}${uc}`;
      if (sc > 3 * Vc.length) {
        const cB = uc[0],
          Bc = uc.slice(1, 3).replace(/0+$/, "");
        return `${rB}${Bc?`${cB}.${Bc}`:cB}e${uc.length-1}`
      }
      const {
        threshold: Mc,
        suffix: Pc
      } = Vc[Vc.length - sc / 3], qB = Ic / Mc, Oc = Number(1000n * (Ic % Mc) / Mc), Tc = Number(qB) + Oc / 1e3;
      let fc;
      return fc = Tc >= 100 ? Math.floor(Tc).toString() : Tc >= 10 ? Tc.toFixed(1).replace(/\.0$/, "") : Tc.toFixed(2).replace(/\.?0+$/, ""), `${rB}${fc}${Pc}`
    }
    const rB = Vc.map((cB => {
      let {
        threshold: Bc,
        suffix: nc
      } = cB;
      return {
        threshold: Number(Bc),
        suffix: nc
      }
    })).filter((cB => {
      let {
        threshold: Bc
      } = cB;
      return Number.isFinite(Bc)
    }));

    function uc(cB) {
      const Bc = Math.abs(cB),
        nc = cB < 0 ? "-" : "";
      for (const {
          threshold: Vc,
          suffix: Ic
        }
        of rB)
        if (Bc >= Vc) {
          const cB = Bc / Vc;
          if (cB >= 1e3) return `${nc}${Bc.toExponential(2).replace("e+","e")}`;
          let rB;
          return rB = cB >= 100 ? Math.floor(cB).toString() : cB >= 10 ? cB.toFixed(1).replace(/\.0$/, "") : cB.toFixed(2).replace(/\.?0+$/, ""), `${nc}${rB}${Ic}`
        } return `${nc}${Bc}`
    }
  },
  37072: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37078: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37086: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37088: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37097: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37099: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/farming_1.8c1332ed7de128af4d0f.png"
  },
  37104: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37109: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37115: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37120: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37123: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37126: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37133: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37138: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/mining_1_village.914774dac3adbbcb88c2.png"
  },
  17511: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19554: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22e3: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23559: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25294: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25304: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);