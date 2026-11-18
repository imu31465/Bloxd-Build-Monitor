export const id = 178;
export const ids = [45, 178];
export const modules = {
  37232: (yb, bb, Wy) => {
    var Uy = {
      "./combat_1.png": 37235,
      "./dungeon_crumbling_crypt.png": 37238,
      "./dungeon_frozen_hollow.png": 37246,
      "./dungeon_wildwood_grove.png": 37254,
      "./dungeons.png": 37259,
      "./farming_1.png": 37263,
      "./fishing_1.png": 37271,
      "./hub.png": 37274,
      "./island.png": 37281,
      "./mining_1.png": 37285,
      "./mining_1_bridge.png": 37289,
      "./mining_1_gallery.png": 37295,
      "./mining_1_hollow.png": 37298,
      "./mining_1_village.png": 37300
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 37232
  },
  37302: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      f: () => fy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      return Uy.set(yb, bb), yb
    }

    function fy(yb) {
      var bb;
      return null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : null
    }
  },
  37211: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      var Uy;
      const {
        width: hy,
        height: fy
      } = Wy, Zy = null !== (Uy = yb.text) && void 0 !== Uy ? Uy : yb, cb = (Zy.x / 100 - .5) * hy, Py = (Zy.y / 100 - .5) * fy, oy = hy / 2 - bb.x;
      if (null !== yb.text && Math.abs(cb) <= oy && Py >= bb.top - fy / 2 && Py <= fy / 2 - bb.bottom) return {
        x: Zy.x,
        y: Zy.y
      };
      const By = Math.min(0 === cb ? 1 / 0 : oy / Math.abs(cb), Py > 0 ? (fy / 2 - bb.bottom) / Py : Py < 0 ? (bb.top - fy / 2) / Py : 1 / 0);
      return !Number.isFinite(By) || By < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + cb * By / hy * 100,
        y: 50 + Py * By / fy * 100
      }
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  37227: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    const Uy = 4,
      hy = 12e3,
      fy = 1e3;
    class Zy {
      constructor() {
        let {
          limit: yb = Uy,
          windowMs: bb = hy,
          spacingMs: Wy = fy,
          now: Zy = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = yb, this.windowMs = bb, this.spacingMs = Wy, this.now = Zy
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const yb of this.priority) yb.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const yb = this.now();
        this.sent.push(yb), this.lastSentAt = yb, this.schedule(), this.notify()
      }
      addPriority(yb) {
        return this.priority.add(yb), () => {
          this.priority.delete(yb)
        }
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const yb of this.priority)
          if (yb.waiting()) return !0;
        return !1
      }
      prune() {
        const yb = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= yb;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const yb = this.now(),
          bb = this.lastSentAt + this.spacingMs,
          Wy = Math.min(bb > yb ? bb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Wy !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Wy - yb)))
      }
      notify() {
        for (const yb of this.listeners) yb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37207: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy) {
        this.EZ = yb, this.beforeOpen = bb, this.afterClose = Wy, this.open = !1, this.rh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.rh && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(yb) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(yb)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.rh = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.rh || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
    }
  },
  37310: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      SkyblockEntityFacing: () => cb,
      needsSkyblockEntityFacing: () => Zy
    });
    var Uy = Wy(37225),
      hy = Wy(3525),
      fy = Wy(37314);

    function Zy(yb, bb) {
      if (yb.metaInfo === Uy.q || "Iron Guardian" === yb.type || "Gold Guardian" === yb.type) return !0;
      if ("Pig" === yb.type) return "sitting" === yb.pose;
      if ("Person" !== yb.meshKind || void 0 === yb.meshOpts) return !1;
      let Wy = null === bb || void 0 === bb ? void 0 : bb.get(yb.meshOpts);
      if (void 0 === Wy) {
        var fy, Zy;
        const Uy = (0, hy.i)(yb);
        Wy = !1, "pig_napoleon" === (null === Uy || void 0 === Uy || null === (fy = Uy.opts.textures) || void 0 === fy ? void 0 : fy.head) ? Wy = !0 : "npc_pig_head" === (null === Uy || void 0 === Uy || null === (Zy = Uy.opts.textures) || void 0 === Zy ? void 0 : Zy.head) && (Wy = "sitting" === Uy.opts.pose || "sitting"), bb && (bb.size >= 256 && bb.clear(), bb.set(yb.meshOpts, Wy))
      }
      return "sitting" === Wy ? "sitting" === yb.pose : Wy
    }(0, fy.g)("skyblock", ((yb, bb) => {
      bb.setFacingTolerance(Zy(yb) ? 0 : null)
    }));
    class cb {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = yb, this.alsoVisit = bb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = yb => {
          var bb;
          const Wy = this.api.getEntityInfo(yb);
          Wy && (Zy(Wy, this.meshFacingCache) && (this.api.setFacingTolerance(yb, 0), this.nextFacing.add(yb)), null === (bb = this.alsoVisit) || void 0 === bb || bb.call(this, yb, Wy))
        }
      }
      Zb() {
        const {
          api: yb
        } = this, bb = this.nextFacing;
        yb.forEachEntity(this.visit);
        for (const Wy of this.facing) bb.has(Wy) || yb.setFacingTolerance(Wy, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = bb
      }
      dispose() {
        for (const yb of this.facing) this.api.setFacingTolerance(yb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37202: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => fP
    });
    const Uy = "island";
    var hy = Wy(258);
    const fy = (0, hy.zb)([0, 0, -1]),
      Zy = [{
        name: "S",
        bearing: (0, hy.zb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, hy.zb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: fy
      }, {
        name: "W",
        bearing: (0, hy.zb)([1, 0, 0])
      }];

    function cb(yb, bb, Wy) {
      return [100 * (Wy.mapMaxX - yb) / (Wy.mapMaxX - Wy.mapMinX), 100 * (bb - Wy.mapMinZ) / (Wy.mapMaxZ - Wy.mapMinZ)]
    }

    function Py(yb, bb, Wy) {
      const hy = "local" === bb,
        fy = yb.background,
        Zy = bb => fy ? cb(bb[0] - yb.mapOrigin[0], bb[2] - yb.mapOrigin[2], fy.bounds) : [50, 50],
        Py = (yb.insideDungeon ? [] : yb.landmarks).map((yb => {
          var bb, Uy;
          return {
            id: yb.id,
            name: Wy(yb.visited && yb.nameKey ? null !== (bb = yb.mapLabelKey) && void 0 !== bb ? bb : yb.nameKey : "skyblockGame:mapUnknown"),
            icon: yb.visited && null !== (Uy = yb.icon) && void 0 !== Uy ? Uy : "unknown",
            visited: yb.visited,
            current: !1,
            position: Zy(yb.position),
            travelKind: "landmark",
            travelId: yb.id
          }
        })),
        By = yb.zones.map((bb => {
          var Uy;
          return {
            id: bb.id,
            name: Wy(bb.visited && bb.nameKey ? bb.nameKey : "skyblockGame:mapUnknown"),
            icon: bb.visited && null !== (Uy = bb.icon) && void 0 !== Uy ? Uy : "unknown",
            visited: bb.visited,
            current: bb.id === yb.zoneId,
            position: bb.position,
            thumbnail: bb.visited ? bb.id : void 0,
            travelKind: "zone",
            travelId: bb.id
          }
        })),
        Ky = yb.insideDungeon || !fy ? [] : yb.portals.map((yb => {
          var bb;
          return {
            id: yb.id,
            name: Wy(null !== (bb = yb.nameKey) && void 0 !== bb ? bb : "skyblockGame:mapUnknown"),
            icon: yb.visited ? "dungeons" === yb.destination ? "portal_orange" : "portal" : "unknown",
            visited: yb.visited,
            current: !1,
            position: Zy(yb.position),
            colour: yb.colour,
            travelKind: "zone",
            travelId: yb.destination
          }
        })),
        ey = hy ? Py : By,
        qb = ey.filter((yb => yb.visited)).length,
        sy = fy ? (fy.bounds.mapMaxX - fy.bounds.mapMinX) / (fy.bounds.mapMaxZ - fy.bounds.mapMinZ) : 2,
        Sy = fy ? JSON.stringify([fy.bounds, yb.mapOrigin]) : "";
      return {
        local: hy,
        points: ey,
        portals: hy ? Ky : [],
        progress: ey.length ? Wy("skyblockGame:mapDiscovered", {
          current: String(qb),
          total: String(ey.length)
        }) : null,
        percent: ey.length ? 100 * qb / ey.length : 0,
        canTravel: [...ey, ...hy ? Ky : []].some((yb => yb.visited && !yb.current)),
        noLandmarks: hy && !yb.insideDungeon && 0 === Py.length,
        background: fy ? {
          imageKey: fy.imageKey,
          fallbackImageKey: yb.zoneId,
          geometryKey: Sy,
          label: Wy(fy.labelKey),
          colour: fy.backgroundColour,
          ratio: sy
        } : null,
        connections: oy(yb.zones),
        minimap: fy ? {
          imageKey: fy.imageKey,
          fallbackImageKey: yb.zoneId,
          geometryKey: Sy,
          label: Wy(fy.labelKey),
          colour: fy.backgroundColour,
          caption: Wy(yb.zoneId === Uy ? "skyblockGame:zoneIsland" : fy.labelKey),
          width: (fy.bounds.mapMaxX - fy.bounds.mapMinX) / fy.minimapSpan * 100 + "%",
          height: (fy.bounds.mapMaxZ - fy.bounds.mapMinZ) / fy.minimapSpan * 100 + "%",
          markers: [...Py, ...Ky]
        } : null
      }
    }

    function oy(yb) {
      const bb = new Set;
      return yb.flatMap((Wy => Wy.connections.flatMap((Uy => {
        const hy = yb.find((yb => yb.id === Uy)),
          fy = [Wy.id, Uy].sort().join("|");
        return !hy || bb.has(fy) ? [] : (bb.add(fy), [{
          id: `${Wy.id}-${Uy}`,
          start: Wy.position,
          end: hy.position,
          explored: Wy.visited && hy.visited
        }])
      }))))
    }
    var By = Wy(37207);
    class Ky extends By.b {}
    const ey = "skyblockMapView";
    class qb extends Ky {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(yb, Uy, hy), this.requestTravel = bb, this.translate = Wy, this.now = fy, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = yb => {
          this.tab = yb, this.feedbackKey = "", this.emit()
        }, this.travel = (yb, bb) => {
          if (!this.map || this.pending || this.rh) return;
          const Wy = ("zone" === yb ? this.map.zones : this.map.landmarks).find((yb => yb.id === bb));
          if (Wy) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Wy && !Wy.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Wy.visited)
              if ("zone" === yb && bb === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Wy = ++this.nextRequestId;
                this.pending = {
                  requestId: Wy,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: yb,
                  id: bb,
                  requestId: Wy
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
      setTranslator(yb) {
        this.translate = yb, this.emit()
      }
      pU(yb) {
        var bb;
        if (!this.rh)
          if ("entities" !== yb.kind)
            if ("open" !== yb.kind) {
              var Wy, Uy;
              if ("snapshot" === yb.kind)(null === (Wy = yb.snapshot) || void 0 === Wy ? void 0 : Wy.zoneId) !== (null === (Uy = this.map) || void 0 === Uy ? void 0 : Uy.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = yb.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === yb.kind) {
                var hy;
                yb.requestId === (null === (hy = this.pending) || void 0 === hy ? void 0 : hy.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (yb.requestId === (null === (bb = this.pending) || void 0 === bb ? void 0 : bb.requestId)) {
                var fy;
                this.pending = null, this.feedbackKey = null !== (fy = yb.errorKey) && void 0 !== fy ? fy : "", null === yb.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = yb.entities
      }
      Zb() {
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
          presentation: this.map ? Py(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const sy = 67.5 * Math.PI / 180;

    function Sy(yb, bb) {
      const Wy = Math.abs(yb);
      if (Wy > sy || bb.trackHalfWidth <= 0) return null;
      const Uy = bb.trackHalfWidth,
        hy = bb.screenHalfWidth / (bb.tanHalfFovX * Math.max(.5, Math.cos(bb.pitch))),
        fy = Math.min(Math.atan(.6 * Uy / hy), .75 * sy),
        Zy = hy * Math.tan(fy);
      let cb;
      if (Wy <= fy) cb = hy * Math.tan(Wy);
      else {
        const yb = sy - fy,
          bb = Math.max(0, hy * yb / (Math.cos(fy) ** 2 * (Uy - Zy)) - 1),
          Py = (Wy - fy) / yb;
        cb = Zy + (Uy - Zy) * (1 + bb) * Py / (1 + bb * Py)
      }
      return 50 + Math.sign(yb) * cb * 50 / Uy
    }
    class Ey {
      constructor(yb, bb) {
        this.map = yb, this.visited = bb, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = bb ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const yb = this.map.getSnapshot().map;
        return !yb || yb.insideDungeon ? [] : yb.landmarks.filter((yb => yb.visited === this.visited)).map((yb => {
          var bb, Wy;
          return {
            id: `landmark:${yb.id}`,
            position: yb.position,
            icon: null !== (bb = yb.icon) && void 0 !== bb ? bb : "unknown",
            nameKey: null !== (Wy = yb.nameKey) && void 0 !== Wy ? Wy : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class ly {
      constructor(yb, bb, Wy, Uy) {
        this.map = yb, this.kind = bb, this.position = Wy, this.alive = Uy, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = bb, this.range = "enemy" === bb ? 48 : 64, this.limit = 12
      }
      Tl(yb) {
        if ("enemy" !== this.kind || this.alive(yb.pM)) return this.position(yb.pM)
      }
      getPoints() {
        const yb = [];
        for (const Uy of this.map.getEntities()) {
          if (Uy.kind !== this.kind || "enemy" === this.kind && !this.alive(Uy.compassEntityId)) continue;
          const hy = this.position(Uy.compassEntityId);
          var bb, Wy;
          if (hy) yb.push({
            id: `${this.kind}:${Uy.compassEntityId}`,
            pM: Uy.compassEntityId,
            kind: this.kind,
            icon: null !== (bb = Uy.icon) && void 0 !== bb ? bb : Uy.npcSkin ? `npc_${Uy.npcSkin}` : this.kind,
            displayName: Uy.displayName,
            position: hy,
            nameKey: null !== (Wy = Uy.nameKey) && void 0 !== Wy ? Wy : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return yb
      }
    }
    class mb {
      constructor(yb) {
        this.map = yb, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const yb = this.map.getSnapshot().map;
        return !yb || yb.insideDungeon ? [] : yb.portals.map((yb => {
          var bb;
          return {
            id: "portal:" + yb.id,
            kind: "portal",
            position: yb.position,
            nameKey: null !== (bb = yb.nameKey) && void 0 !== bb ? bb : "skyblockGame:compassUnvisitedZone",
            icon: yb.visited ? "dungeons" === yb.destination ? "portal_orange" : "portal" : "unknown",
            colour: yb.colour
          }
        }))
      }
    }
    class Cy {
      constructor(yb) {
        this.target = yb, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const yb = this.target();
        return yb ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: yb.position,
          nameKey: yb.nameKey
        }] : []
      }
    }

    function Ty(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.position;
      const fy = Uy[0] - bb[0],
        Zy = Uy[2] - bb[2];
      return {
        ...yb,
        position: Uy,
        offset: hy.c.computeShortestRotation(Wy, (0, hy.zb)([fy, 0, Zy])),
        distance: Math.hypot(fy, Uy[1] - bb[1], Zy)
      }
    }
    let Vy;

    function Jy(yb, bb) {
      var Wy;
      return (null === (Wy = Vy) || void 0 === Wy ? void 0 : Wy.locale) !== bb && (Vy = {
        locale: bb,
        near: new Intl.NumberFormat(bb, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(bb, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (yb < 10 ? Vy.near : Vy.far).format(yb)
    }
    class gb {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(yb) {
        return this.providers.set(yb.id, yb), this.refreshAt = 0, () => {
          this.providers.get(yb.id) === yb && (this.providers.delete(yb.id), this.refreshAt = 0)
        }
      }
      frame(yb, bb, Wy) {
        if (Wy >= this.refreshAt) {
          this.refreshAt = Wy + 200, this.candidates = [];
          for (const bb of this.providers.values()) {
            if (!bb.enabled) continue;
            const Wy = bb.getPoints().map((bb => {
              const Wy = bb.position;
              return {
                point: bb,
                distance: Math.hypot(Wy[0] - yb[0], Wy[1] - yb[1], Wy[2] - yb[2])
              }
            })).filter((yb => yb.distance <= bb.range)).sort(((yb, bb) => yb.distance - bb.distance)).slice(0, bb.limit);
            for (const {
                point: yb
              }
              of Wy) this.candidates.push({
              provider: bb,
              point: yb
            })
          }
        }
        const Uy = [];
        for (const {
            point: hy,
            provider: fy
          }
          of this.candidates) {
          if (!fy.enabled) continue;
          const Wy = fy.Tl ? fy.Tl(hy) : hy.position;
          if (Wy) {
            const fy = Ty(hy, yb, bb, Wy);
            Math.abs(fy.offset) <= sy && Uy.push(fy)
          }
        }
        return Uy
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Gy = Wy(35383),
      Oy = Wy(55);
    const Ry = [{
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
      vb = Ry.length;

    function ib(yb) {
      return yb >= vb ? 1 : yb + 1
    }
    const My = "skyblockQuests";
    var Yy = Wy(37225);
    const Xy = "devquests",
      ny = "none",
      uy = {
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
      rb = "Compressed Messy Stone",
      Hy = {
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
      ab = ["Stone", "Diorite", "Andesite", "Granite"],
      Fy = new Set(ab),
      py = (Object.keys(Hy), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Ly = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Qy(yb, bb) {
      const Wy = Math.floor(5 * yb / (2 * bb + 1));
      return Math.min(4, Math.max(0, Wy))
    }
    var jb = Wy(1102);
    var Dy = Wy(35195);
    var tb = Wy(35379),
      wy = Wy(23),
      kb = Wy(8026);
    const Ny = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      zb = 1e3;

    function Iy(yb) {
      return Math.max(0, yb)
    }

    function xb(yb) {
      return 1 + .01 * Iy(yb)
    }

    function Ay(yb) {
      return 1 + .005 * Iy(yb)
    }

    function dy(yb) {
      return 1 + .005 * Iy(yb)
    }

    function yW(yb) {
      return .01 * Iy(yb)
    }

    function bW(yb) {
      return 150 / (150 + Iy(yb))
    }

    function Wb(yb) {
      return 1 + .002 * Iy(yb)
    }

    function Ub(yb) {
      return Math.round(10 * yb) / 10
    }

    function hb(yb, bb) {
      switch (yb) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Ub(100 * (Ay(bb) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Ub(100 * (xb(bb) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Ub(100 * (dy(bb) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Ub(100 * yW(bb))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Ub(100 * (1 - bW(bb)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Ub(100 * (Wb(bb) - 1))
          }
      }
    }

    function fb(yb) {
      return "farming" === yb ? 200 : 100
    }

    function Zb(yb, bb) {
      if (!Number.isSafeInteger(yb) || yb < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Wy = fb(bb),
        Uy = yb => function(yb, bb) {
          return fb(yb) * bb * (bb + 1) / 2
        }(bb, yb);
      let hy = Math.min(zb, Math.floor((Math.sqrt(8 * yb / Wy + 1) - 1) / 2));
      return hy < zb && Uy(hy + 1) <= yb ? hy++ : Uy(hy) > yb && hy--, {
        totalXp: yb,
        level: hy,
        xpIntoLevel: yb - Uy(hy),
        xpForNextLevel: hy === zb ? null : Wy * (hy + 1)
      }
    }
    const cW = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Pb(yb) {
      return cW.has(yb)
    }
    const ob = new Set(hy.lb);

    function Bb(yb) {
      return ob.has(yb)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Kb = {
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
      eb = {
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
      qW = {
        ...eb,
        ...Object.fromEntries(Object.entries(py).map((yb => {
          let [bb, Wy] = yb;
          return [bb, 9 * eb[Wy]]
        })))
      },
      sb = {
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
      Sb = {
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
    const Eb = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      lb = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function mW(yb) {
      return `rgb(${lb[yb].join(", ")})`
    }

    function Cb(yb, bb, Wy) {
      if (!Wy) return yb(bb);
      const Uy = {};
      for (const [hy, fy] of Object.entries(Wy)) Uy[hy] = "string" === typeof fy ? fy : yb(fy.translationKey);
      return yb(bb, Uy)
    }
    class Tb {
      constructor(yb, bb) {
        this.now = yb, this.getJournal = bb, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.kW = !1, this.onShown = () => {}
      }
      enqueue(yb) {
        const bb = Vb(yb);
        if (bb) this.pending.push(yb);
        else {
          const bb = this.pending.findIndex(Vb);
          this.pending.splice(-1 === bb ? this.pending.length : bb, 0, yb)
        }
        return (null === this.current || null !== this.followUp && !bb) && (this.advance(), !0)
      }
      setHeld(yb) {
        return this.kW = yb, !yb && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Zb() {
        const yb = this.getJournal(),
          bb = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === bb ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === bb || void 0 === bb ? void 0 : bb.kind) && yb && yb.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === bb || void 0 === bb ? void 0 : bb.kind)) {
          const yb = this.findFollowUp(this.current);
          if ("step" !== (null === yb || void 0 === yb ? void 0 : yb.kind) || yb.questId !== bb.questId || yb.step.id !== bb.step.id) return this.showFollowUp(yb, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(yb, bb, Wy) {
        var Uy, hy, fy, Zy;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, yb, Wy);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, yb);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, yb, bb);
        const {
          questCompletionKind: cb,
          questCompletionNameKey: Py
        } = this.current, oy = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, By = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Ky = "step" === (null === (Uy = this.followUp) || void 0 === Uy ? void 0 : Uy.kind) ? this.followUp : null, ey = "explore" === (null === (hy = this.followUp) || void 0 === hy ? void 0 : hy.kind);
        let qb;
        return qb = ey ? yb("skyblockGame:questExploreTitle") : null !== Ky ? "quest" === cb ? yb("skyblockGame:questNextQuestTitle", {
          quest: yb(Ky.questNameKey)
        }) : yb("skyblockGame:questNextStepTitle") : yb("started" === cb ? "skyblockGame:questStartedTitle" : "quest" === cb ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? cb : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: qb,
          name: ey ? bb("skyblockGame:questExploreName") : null !== Ky ? Cb(bb, Ky.step.nameKey, Ky.step.nameParams) : Cb(bb, Py, oy),
          description: ey ? bb("skyblockGame:questExploreDescription") : null === Ky ? null : Cb(bb, Ky.step.descriptionKey, Ky.step.descriptionParams),
          reward: null === this.followUp && By > 0 ? bb("skyblockGame:questCoinRewardSuffix", {
            amount: By.toLocaleString(Wy)
          }) : null,
          iconItem: null !== (fy = null === Ky || void 0 === Ky ? void 0 : Ky.step.questIconItem) && void 0 !== fy ? fy : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Ky && (null === (Zy = this.getJournal()) || void 0 === Zy ? void 0 : Zy.trackedQuestId) === Ky.questId ? Ky.step.nameKey : null
        }
      }
      getSkillLevelView(yb, bb, Wy) {
        let {
          skill: Uy,
          beforeLevel: hy,
          level: fy
        } = yb;
        const Zy = hb(Uy, hy),
          cb = hb(Uy, fy);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: bb(`skyblockGame:${Uy}`),
          name: bb("skyblockGame:skillLevelUp", {
            to: fy.toLocaleString(Wy)
          }),
          description: Zy.percent === cb.percent ? null : bb(`${cb.translationKey}Change`, {
            before: Zy.percent.toLocaleString(Wy),
            after: cb.percent.toLocaleString(Wy)
          }),
          reward: null,
          iconItem: Eb[Uy],
          accent: mW(Uy),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(yb, bb) {
        let {
          landmarkNameKey: Wy
        } = yb;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: bb("skyblockGame:landmarkDiscovered"),
          name: bb(Wy),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(yb, bb, Wy) {
        let {
          titleKey: Uy,
          textKey: hy,
          params: fy = {},
          nameKeys: Zy = {},
          iconItem: cb = null
        } = yb;
        const Py = {
          ...fy
        };
        for (const [oy, By] of Object.entries(Zy)) Py[oy] = bb(By);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: bb(Uy),
          name: Wy(hy, Py),
          description: null,
          reward: null,
          iconItem: cb,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var yb;
        if (null !== this.followUp) return 5600;
        switch (null === (yb = this.current) || void 0 === yb ? void 0 : yb.questCompletionKind) {
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
      showFollowUp(yb, bb) {
        null === yb || this.kW ? this.advance() : (this.followUp = yb, this.token++, this.shownAt = this.now(), this.expiresAt = null !== bb && void 0 !== bb ? bb : this.shownAt + this.durationMs())
      }
      findFollowUp(yb) {
        var bb;
        const Wy = this.getJournal();
        if (!Wy || this.hasPendingQuestPopup() || Vb(yb)) return null;
        const Uy = "started" === yb.questCompletionKind ? Wy.active.some((bb => bb.id === yb.questCompletionQuestId)) : "quest" === yb.questCompletionKind ? Wy.completed.some((bb => bb.id === yb.questCompletionQuestId)) : [...Wy.active, ...Wy.completed].some((bb => bb.id === yb.questCompletionQuestId && bb.subquests.some((bb => bb.id === yb.questCompletionStepId && "completed" === bb.status))));
        if (!Uy) return null;
        if ("quest" === yb.questCompletionKind && 0 === Wy.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const hy = Wy.active.find((yb => yb.id === Wy.trackedQuestId)),
          fy = null !== (bb = null === hy || void 0 === hy ? void 0 : hy.subquests.find((yb => "ready" === yb.status))) && void 0 !== bb ? bb : null === hy || void 0 === hy ? void 0 : hy.subquests.find((yb => "active" === yb.status));
        return fy ? {
          kind: "step",
          questId: hy.id,
          questNameKey: hy.nameKey,
          step: fy
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((yb => !Vb(yb)))
      }
      advance() {
        var yb;
        this.current = this.kW ? null : null !== (yb = this.pending.shift()) && void 0 !== yb ? yb : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Vb(yb) {
      return Jb(yb.questCompletionKind)
    }

    function Jb(yb) {
      return "skillLevel" === yb || "landmark" === yb || "npcNote" === yb
    }
    var gW = Wy(37211);
    const Gb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Ob = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Rb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      vW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      iW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Mb = Wy(37217);
    const Yb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Xb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const nb = Wy.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const ub = Wy.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      rW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Hb = Wy(17778),
      aW = Wy(19747),
      Fb = Wy(22067),
      pb = Wy(23625),
      Lb = Wy(25375);
    const Qb = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Hb,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: aW,
      cow: iW,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Wy(25384),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Gb,
      fishing_1: Gb,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Ob,
      guardian_iron: Rb,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Fb,
      mines: pb,
      mining_1: pb,
      npc: vW,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: iW,
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
      npc_gold_guardian: Ob,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Rb,
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
      npc_tentacle_guy: Mb,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Yb,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: nb,
      quest_talk: ub,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: rW,
      watermelon: Lb
    };

    function jW(yb, bb) {
      const Wy = document.createElement("img");
      return Wy.className = bb, Wy.src = yb, Wy.alt = "", Wy.draggable = !1, Wy
    }

    function Db(yb) {
      var bb;
      const Wy = null !== (bb = Qb[yb]) && void 0 !== bb ? bb : yb.startsWith("npc_") ? vW : rW;
      if ("portal" !== yb) return jW(Wy, "SkyblockMapIcon");
      const Uy = document.createElement("span");
      Uy.className = "SkyblockMapIcon Portal";
      const hy = document.createElement("span");
      return hy.className = "SkyblockMapIconTint", hy.style.maskImage = hy.style.webkitMaskImage = `url("${Xb}")`, Uy.append(jW(Wy, "SkyblockMapIconLayer"), hy, jW(Xb, "SkyblockMapIconLayer SkyblockMapIconShade")), Uy
    }
    var tW = Wy(37197),
      wb = Wy(3535);
    const kW = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Nb(yb) {
      const bb = new wb.g(yb);
      return {
        radius: 45,
        squareness: 3,
        wobbles: kW.map((yb => {
          let {
            lobes: Wy,
            amount: Uy
          } = yb;
          return {
            lobes: Wy[Math.floor(bb.next() * Wy.length)],
            amount: Uy[0] + bb.next() * (Uy[1] - Uy[0]),
            phase: 2 * bb.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function zW(yb) {
      let {
        radius: bb,
        squareness: Wy,
        wobbles: Uy,
        samples: hy
      } = yb;
      const fy = [];
      for (let Zy = 0; Zy < hy; Zy++) {
        const yb = 2 * Math.PI * Zy / hy,
          cb = Math.cos(yb),
          Py = Math.sin(yb),
          oy = bb * (Math.abs(cb) ** Wy + Math.abs(Py) ** Wy) ** (-1 / Wy) * Uy.reduce(((bb, Wy) => {
            let {
              lobes: Uy,
              amount: hy,
              phase: fy
            } = Wy;
            return bb + hy * Math.sin(Uy * yb + fy)
          }), 1);
        fy.push(`${(50+oy*cb).toFixed(2)} ${(50+oy*Py).toFixed(2)}`)
      }
      return `M${fy.join("L")}Z`
    }
    const Ib = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class xW {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.rh = !1, this.mountCompass = yb => {
          var bb;
          if (null === (bb = this.stopLayout) || void 0 === bb || bb.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !yb || this.rh) return;
          const Wy = yb.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: yb,
            track: Wy,
            label: yb.querySelector(".SkyblockCompassLabel")
          }, Wy.replaceChildren();
          for (let hy = 0; hy < 4; hy++) {
            const yb = document.createElement("span");
            yb.className = "SkyblockCompassCardinal", Wy.appendChild(yb), this.cardinals.push(yb)
          }
          const Uy = (0, tW.c)(Ib, [yb], this.layout);
          this.stopLayout = () => {
            Uy(), Wy.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = yb => {
          this.terrain = this.rh ? null : yb, this.render(this.frame)
        }, this.mountMinimapSearchArea = yb => {
          this.mountSearchArea("minimap", yb)
        }, this.mountMapSearchArea = yb => {
          this.mountSearchArea("map", yb)
        }, this.mountPlayer = yb => {
          this.player = this.rh ? null : yb, this.render(this.frame)
        }, this.mountWaypoint = yb => {
          var bb, Wy;
          if (null === (bb = this.stopWaypoint) || void 0 === bb || bb.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !yb || this.rh) return;
          const Uy = yb.querySelector(".SkyblockQuestWaypointMarker");
          Uy.replaceChildren(Db("quest")), this.markerIcon = "quest", this.waypoint = {
            root: yb,
            marker: Uy,
            clip: yb.querySelector(".SkyblockQuestWaypointTextClip"),
            text: yb.querySelector(".SkyblockQuestWaypointText"),
            label: yb.querySelector(".SkyblockQuestWaypointLabel"),
            distance: yb.querySelector(".SkyblockQuestWaypointDistance"),
            hint: yb.querySelector(".SkyblockQuestWaypointHint")
          };
          const hy = () => {
              this.waypointMarkerSize = {
                width: Uy.offsetWidth,
                height: Uy.offsetHeight
              }, this.waypointInset = {
                x: Uy.offsetWidth / 2 + 8,
                top: Uy.offsetHeight + 8,
                bottom: 8
              }
            },
            fy = new ResizeObserver((() => {
              hy(), this.render(this.frame)
            }));
          fy.observe(Uy, {
            box: "border-box"
          });
          const Zy = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Zy), null === (Wy = window.visualViewport) || void 0 === Wy || Wy.addEventListener("resize", Zy), this.stopWaypoint = () => {
            var yb;
            fy.disconnect(), window.removeEventListener("resize", Zy), null === (yb = window.visualViewport) || void 0 === yb || yb.removeEventListener("resize", Zy)
          }, Zy(), hy(), this.render(this.frame)
        }, this.mountWaypointOrigin = yb => {
          var bb;
          if (null === (bb = this.stopWaypointOrigin) || void 0 === bb || bb.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = yb && !this.rh ? Number(yb.dataset.notificationToken) : null, yb && !this.rh && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const bb = {
              nameKey: yb.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = bb;
            const Wy = () => {
                const Wy = yb.getBoundingClientRect();
                bb.x = (Wy.left + Wy.width / 2) / window.innerWidth * 100, bb.y = (Wy.top + Wy.height / 2) / window.innerHeight * 100
              },
              Uy = new ResizeObserver(Wy);
            Uy.observe(yb.parentElement), Uy.observe(yb), window.addEventListener("resize", Wy), this.stopWaypointOrigin = () => {
              Uy.disconnect(), window.removeEventListener("resize", Wy)
            }, Wy()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const yb = this.compass.root,
            bb = getComputedStyle(yb),
            Wy = getComputedStyle(document.documentElement),
            Uy = parseFloat(Wy.fontSize),
            hy = parseFloat(bb.getPropertyValue("--compass-icon-size")) * Uy,
            fy = "1" === bb.getPropertyValue("--compass-fit-top").trim(),
            Zy = fy ? 1 : 8,
            cb = Array.from(document.querySelectorAll(Ib), (yb => {
              var bb;
              return (null !== (bb = yb.querySelector(".MiddleTextTop")) && void 0 !== bb ? bb : yb).getBoundingClientRect()
            })).filter((yb => yb.width > 0 && yb.height > 0));
          let Py = (parseFloat(Wy.getPropertyValue("--notchTop")) || 0) + Zy,
            oy = "";
          if (fy) {
            const bb = window.innerWidth / 2,
              Wy = yb.getBoundingClientRect().height,
              fy = [Py, ...cb.map((yb => Math.max(Py, yb.bottom + Zy)))].sort(((yb, bb) => yb - bb));
            for (const yb of fy) {
              let fy = bb - 8;
              for (const Uy of cb) Uy.bottom + Zy <= yb || Uy.top >= yb + Wy + Zy || (fy = Math.min(fy, Uy.right <= bb ? bb - Uy.right - 8 : Uy.left - bb - 8));
              const By = 2 * fy - hy;
              if (By >= 16 * Uy) {
                oy = `${By}px`, Py = yb;
                break
              }
            }
          }
          yb.style.maxWidth !== oy && (yb.style.maxWidth = oy);
          const By = yb.getBoundingClientRect(),
            Ky = this.compassSize.trackHalfWidth;
          if (By.width > 0) {
            const yb = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: yb.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * hy / yb.width
          }
          if (!oy)
            for (const ey of cb) ey.right > By.left - 8 && ey.left < By.right + 8 && (Py = Math.max(Py, ey.bottom + Zy));
          yb.style.top = `${Py}px`, this.compassSize.trackHalfWidth !== Ky && this.render(this.frame)
        }
      }
      mountSearchArea(yb, bb) {
        this.searchAreas[yb] = this.rh ? null : bb, this.render(this.frame)
      }
      render(yb) {
        if (this.rh) return;
        if (this.frame = yb, this.compass && (Ab(this.compass.root, !yb), yb)) {
          const bb = this.compassSize.trackHalfWidth / 50;
          yb.compass.cardinals.forEach(((yb, Wy) => {
            const Uy = this.cardinals[Wy];
            Uy.textContent !== yb.name && (Uy.textContent = yb.name), Ab(Uy, yb.hidden), Uy.style.translate = yb.left * bb + "px"
          }));
          const Wy = new Set;
          yb.compass.markers.forEach(((Uy, hy) => {
            var fy;
            Wy.add(Uy.id);
            let Zy = this.markers.get(Uy.id);
            Zy || (Zy = document.createElement("span"), Zy.className = "SkyblockCompassMarker", this.markers.set(Uy.id, Zy), this.compass.track.appendChild(Zy)), Zy.dataset.icon !== Uy.icon && (Zy.dataset.icon = Uy.icon, Zy.replaceChildren(Db(Uy.icon))), Zy.style.color = null !== (fy = Uy.colour) && void 0 !== fy ? fy : "", Zy.style.translate = Uy.left * bb + "px", Zy.style.zIndex = String(yb.compass.markers.length - hy), Zy.title !== Uy.name && (Zy.title = Uy.name)
          }));
          for (const [yb, Uy] of this.markers) Wy.has(yb) || (Uy.remove(), this.markers.delete(yb));
          this.compass.label.textContent !== yb.compass.label && (this.compass.label.textContent = yb.compass.label)
        }
        this.terrain && (Ab(this.terrain, !(null !== yb && void 0 !== yb && yb.minimap)), null !== yb && void 0 !== yb && yb.minimap && (this.terrain.style.transform = yb.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", yb.minimap.iconRotation)));
        const bb = null === yb || void 0 === yb ? void 0 : yb.searchArea;
        for (const Wy of [this.searchAreas.minimap, this.searchAreas.map])
          if (Wy && (Ab(Wy, !bb), bb)) {
            if (this.searchAreaPath.seed !== bb.shapeSeed && (this.searchAreaPath = {
                seed: bb.shapeSeed,
                d: zW(Nb(bb.shapeSeed))
              }), Wy.dataset.shapeSeed !== bb.shapeSeed) {
              Wy.dataset.shapeSeed = bb.shapeSeed;
              for (const yb of Wy.querySelectorAll("path")) yb.setAttribute("d", this.searchAreaPath.d)
            }
            Wy.style.left = `${bb.left}%`, Wy.style.top = `${bb.top}%`, Wy.style.width = `${bb.width}%`, Wy.style.height = `${bb.height}%`
          } if (this.player && (Ab(this.player, !(null !== yb && void 0 !== yb && yb.player) || yb.player.hidden), null !== yb && void 0 !== yb && yb.player && (this.player.style.left = `${yb.player.left}%`, this.player.style.top = `${yb.player.top}%`, this.player.style.setProperty("--map-player-rotation", yb.player.rotation))), this.waypoint) {
          const {
            root: bb,
            marker: Wy,
            clip: Uy,
            text: hy,
            label: fy,
            distance: Zy,
            hint: cb
          } = this.waypoint, Py = !(null !== yb && void 0 !== yb && yb.waypoint) || null !== yb.waypoint.popupToken && yb.waypoint.popupToken !== this.waypointOriginToken;
          Ab(bb, Py);
          let oy = 1;
          const By = this.waypointLaunch;
          if (!Py && By && yb.waypoint.nameKey === By.nameKey) {
            const yb = performance.now();
            By.startedAt ??= yb, oy = Math.min(1, Math.max(0, (yb - By.startedAt - 450) / 1e3)), Wy.style.opacity = String(Math.min(1, (yb - By.startedAt) / 150)), 1 === oy && (this.waypointLaunch = null)
          } else Wy.style.opacity = "", By && null !== By.startedAt && (this.waypointLaunch = null);
          if (bb.classList.toggle("Launching", oy < 1), null !== yb && void 0 !== yb && yb.waypoint) {
            const bb = this.waypointInset,
              Py = "quest_talk" === yb.waypoint.markerIcon ? function(yb, bb, Wy) {
                if (!yb.text || null === yb.blockHeight || 0 === yb.nearness) return yb;
                const Uy = yb.blockHeight / 100 * Wy.height,
                  hy = -yb.nearness * (db * Uy + bb.width / 2),
                  fy = yb.nearness * (yU * Uy + bb.height / 2);
                return {
                  ...yb,
                  text: {
                    x: yb.text.x + hy / Wy.width * 100,
                    y: yb.text.y + fy / Wy.height * 100
                  }
                }
              }(yb.waypoint, this.waypointMarkerSize, this.viewport) : yb.waypoint,
              Ky = (0, gW.d)(Py, bb, this.viewport),
              ey = oy * oy * (3 - 2 * oy),
              qb = oy < 1 ? By.x + (Ky.x - By.x) * ey : Ky.x,
              sy = oy < 1 ? By.y + (Ky.y - By.y) * ey : Ky.y;
            Wy.style.translate = `${qb}vw ${sy}vh`, Uy.style.clipPath = `inset(${bb.top}px ${bb.x}px ${bb.bottom}px)`, Ab(hy, oy < 1 || !yb.waypoint.text), hy.style.opacity = String(1 - yb.waypoint.nearness), yb.waypoint.text && (hy.style.translate = `${yb.waypoint.text.x}vw ${yb.waypoint.text.y}vh`), fy.textContent !== yb.waypoint.name && (fy.textContent = yb.waypoint.name), this.markerIcon !== yb.waypoint.markerIcon && (this.markerIcon = yb.waypoint.markerIcon, Wy.replaceChildren(Db(this.markerIcon))), Zy.textContent !== yb.waypoint.distance && (Zy.textContent = yb.waypoint.distance), Ab(cb, null === yb.waypoint.hint), null !== yb.waypoint.hint && cb.textContent !== yb.waypoint.hint && (cb.textContent = yb.waypoint.hint)
          }
        }
      }
      dispose() {
        var yb, bb;
        this.mountWaypointOrigin(null), this.render(null), null === (yb = this.stopLayout) || void 0 === yb || yb.call(this), this.stopLayout = null, null === (bb = this.stopWaypoint) || void 0 === bb || bb.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.rh = !0
      }
    }

    function Ab(yb, bb) {
      yb.hidden !== bb && (yb.hidden = bb)
    }
    const db = .55,
      yU = .6;
    const bU = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class WW {
      constructor(yb, bb, Wy, Uy) {
        this.map = yb, this.quests = bb, this.compass = Wy, this.display = new xW, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.rh = !1, this.snapshot = null, this.texts = new Map, this.translate = Uy
      }
      setTranslator(yb, bb) {
        this.translate = yb, this.locale = bb, this.metresFormat = new Intl.NumberFormat(bb), this.texts.clear()
      }
      translateCached(yb, bb) {
        const Wy = void 0 === bb ? yb : `${yb} ${bb}`;
        let Uy = this.texts.get(Wy);
        return void 0 === Uy && (this.texts.size >= 500 && this.texts.clear(), Uy = this.translate(yb, void 0 === bb ? void 0 : {
          distance: bb
        }), this.texts.set(Wy, Uy)), Uy
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(yb, bb, Wy) {
        if (this.rh) return;
        if (!yb) return this.snapshot = null, void this.display.render(null);
        const Uy = this.map.getSnapshot().map,
          Py = Wy.cameraHeading,
          oy = {
            ...this.display.compassSize,
            tanHalfFovX: Wy.tanHalfFovX,
            pitch: Wy.cameraPitch
          },
          By = [];
        if (Uy)
          for (const hy of this.compass.frame(yb, Py, bb)) {
            const yb = Sy(hy.offset, oy);
            null !== yb && By.push({
              ...hy,
              left: yb
            })
          }
        const Ky = function(yb, bb) {
            const Wy = [],
              Uy = yb => "quest" === yb.kind ? yb.distance - 1 : yb.distance,
              hy = [...yb].sort(((yb, bb) => Uy(yb) - Uy(bb) || yb.id.localeCompare(bb.id)));
            for (const fy of hy) {
              let yb = !1;
              if ("quest" !== fy.kind)
                for (const Uy of Wy)
                  if (Math.abs(Uy.left - fy.left) < bb) {
                    yb = !0;
                    break
                  } yb || Wy.push(fy)
            }
            return Wy
          }(By, this.display.compassSpacing),
          ey = function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Wy = null;
            for (const Uy of yb) Math.abs(Uy.offset) <= bb && (!Wy || Uy.distance < Wy.distance || Uy.distance === Wy.distance && Math.abs(Uy.offset) < Math.abs(Wy.offset)) && (Wy = Uy);
            return Wy
          }(Ky),
          qb = yb => {
            var bb;
            return null !== (bb = yb.displayName) && void 0 !== bb ? bb : this.translateCached(yb.nameKey)
          },
          sy = {
            compass: {
              markers: Ky.map((yb => ({
                id: yb.id,
                icon: yb.icon,
                colour: yb.colour,
                name: qb(yb),
                left: yb.left
              }))),
              cardinals: Zy.map((yb => {
                let {
                  name: bb,
                  bearing: Wy
                } = yb;
                const Uy = Sy(hy.c.computeShortestRotation(Py, Wy), oy);
                return {
                  name: bb,
                  left: null !== Uy && void 0 !== Uy ? Uy : 0,
                  hidden: null === Uy
                }
              })),
              label: ey ? `${qb(ey)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Jy(ey.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Uy && void 0 !== Uy && Uy.background) {
          const bb = yb[0] - Uy.mapOrigin[0],
            Wy = yb[2] - Uy.mapOrigin[2],
            {
              rotation: hy,
              transform: Zy
            } = function(yb, bb, Wy, Uy) {
              const [hy, Zy] = cb(yb, bb, Uy), Py = fy - Wy;
              return {
                rotation: Py,
                transform: `rotate(${Py}rad) translate(-${hy}%, -${Zy}%)`
              }
            }(bb, Wy, Py, Uy.background.bounds);
          sy.minimap = {
            transform: Zy,
            iconRotation: -hy + "rad"
          };
          const [oy, By] = cb(bb, Wy, Uy.background.bounds);
          sy.player = {
            left: oy,
            top: By,
            hidden: oy < 0 || By < 0 || oy > 100 || By > 100,
            rotation: -hy + "rad"
          }
        }
        const {
          waypoint: Ey
        } = this.quests.getSnapshot();
        if ("search" === (null === Ey || void 0 === Ey ? void 0 : Ey.questMarkerIcon) && null !== Uy && void 0 !== Uy && Uy.background) {
          const {
            bounds: yb
          } = Uy.background, [bb, Wy] = cb(Ey.position[0] - Uy.mapOrigin[0], Ey.position[2] - Uy.mapOrigin[2], yb);
          sy.searchArea = {
            left: bb,
            top: Wy,
            width: 6400 / (yb.mapMaxX - yb.mapMinX),
            height: 6400 / (yb.mapMaxZ - yb.mapMinZ),
            shapeSeed: Ey.nameKey
          }
        }
        const ly = this.quests.getNotificationSnapshot(),
          mb = "completion" === (null === ly || void 0 === ly ? void 0 : ly.phase) && !Jb(ly.kind);
        if (Ey && !mb) {
          const bb = Math.hypot(...Ey.position.map(((bb, Wy) => bb - yb[Wy]))),
            Uy = Math.round(bb),
            hy = "talk" === Ey.questMarkerIcon ? Math.min(1, Math.max(0, (10 - bb) / 5)) : 0,
            fy = Wy.projectWorldPosToViewport(Ey.position),
            Zy = fy && Wy.projectWorldPosToViewport([Ey.position[0], Ey.position[1] - 1, Ey.position[2]]);
          sy.waypoint = {
            ...Wy.projectWorldPosToScreenPos(Ey.position),
            text: fy,
            nearness: hy * hy * (3 - 2 * hy),
            blockHeight: fy && Zy ? Zy.y - fy.y : null,
            name: this.translateCached(Ey.nameKey),
            nameKey: Ey.nameKey,
            markerIcon: Ey.questMarkerIcon ? bU[Ey.questMarkerIcon] : "quest",
            popupToken: (null === ly || void 0 === ly ? void 0 : ly.waypointNameKey) === Ey.nameKey ? ly.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Uy)),
            hint: "search" === Ey.questMarkerIcon && Math.hypot(Ey.position[0] - yb[0], Ey.position[2] - yb[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = sy, this.display.render(sy)
      }
      dispose() {
        this.rh = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const UW = "skyblockSkillsView";
    class hW extends Ky {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Wy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb => yb,
          Uy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          hy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yb => yb;
        super(yb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = bb, this.translate = Wy, this.locale = Uy, this.itemName = hy, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = yb => {
          this.selected = yb, this.emit()
        }
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, this.locale = bb, this.itemName = Wy, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(yb) {
        let bb = this.skillText.get(yb);
        return bb || (bb = {
          label: this.translate(`skyblockGame:${yb}`),
          description: this.translate(`skyblockGame:${yb}Description`)
        }, this.skillText.set(yb, bb)), bb
      }
      sources(yb) {
        if ("mining" === yb || "fishing" === yb) return this.buildSources(yb);
        let bb = this.sourceText.get(yb);
        return bb || (bb = this.buildSources(yb), this.sourceText.set(yb, bb)), bb
      }
      buildSources(yb) {
        const bb = this.translate;
        return "exploration" === yb ? [bb("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), bb("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === yb ? [bb("skyblockGame:logSource", {
          xp: this.number(Kb["Maple Log"])
        })] : "combat" === yb ? [bb("skyblockGame:creatureKillSource"), bb("skyblockGame:noEnvironmentalXp")] : "farming" === yb ? [bb("skyblockGame:cropSource", {
          xp: this.number(sb["Wheat|FreshlyGrown"])
        }), bb("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), bb("skyblockGame:noYoungCropXp")] : Object.entries("mining" === yb ? qW : Sb).map((yb => {
          let [Wy, Uy] = yb;
          return bb("skyblockGame:itemXpSource", {
            item: this.itemName(Wy),
            xp: this.number(Uy)
          })
        }))
      }
      number(yb) {
        return yb.toLocaleString(this.locale)
      }
      benefit(yb, bb) {
        const Wy = hb(yb, bb);
        return this.translate(Wy.translationKey, {
          bonus: this.number(Wy.percent)
        })
      }
      pU(yb) {
        if (!this.rh) {
          if ("snapshot" === yb.kind) this.progress = yb.progress, this.pending.clear(), this.recent = null;
          else if ("award" === yb.kind && this.progress) {
            const {
              award: bb
            } = yb;
            this.progress = {
              ...this.progress,
              [bb.skill]: bb.after
            };
            for (const [yb, Uy] of this.pending) Uy.skill === bb.skill && this.pending.delete(yb);
            const Wy = bb.after.level > bb.before.level;
            this.recordGain(bb.skill, bb.amount, Wy ? ++this.nextLevelUpToken : null), Wy && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: bb.skill,
              beforeLevel: bb.before.level,
              level: bb.after.level
            })
          } else {
            if ("rejectBlock" === yb.kind) return void this.rejectBlock(yb.position);
            if ("open" === yb.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(yb, bb, Wy) {
        if (!this.progress || this.rh || Wy) return;
        const Uy = function(yb, bb) {
          const Wy = yb.split("|")[0];
          return "Air" === bb || bb === `Barkless ${yb}` ? Object.hasOwn(Kb, Wy) ? {
            skill: "foraging",
            amount: Kb[Wy]
          } : "Air" !== bb ? null : Object.hasOwn(qW, yb) ? {
            skill: "mining",
            amount: qW[yb]
          } : Pb(yb) ? {
            skill: "farming",
            amount: 10
          } : Bb(yb) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(sb, yb) ? {
            skill: "farming",
            amount: sb[yb]
          } : Object.hasOwn(Hy, yb) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(bb, "Air");
        if (!Uy) return;
        const hy = yb.join(",");
        if (this.pending.has(hy)) return;
        const fy = this.predictedProgress(Uy.skill).totalXp + Uy.amount;
        Number.isSafeInteger(fy) && (this.pending.set(hy, {
          ...Uy,
          expires: this.now() + 2e3
        }), this.recordGain(Uy.skill, 0), this.emit())
      }
      rejectBlock(yb) {
        this.pending.delete(yb.join(",")) && this.emit()
      }
      Zb() {
        if (this.rh) return;
        let yb = !1;
        for (const [bb, Wy] of this.pending) Wy.expires <= this.now() && (this.pending.delete(bb), yb = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, yb = !0), yb && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(yb, bb) {
        var Wy, Uy;
        let hy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const fy = (null === (Wy = this.recent) || void 0 === Wy ? void 0 : Wy.skill) === yb && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Zy = (null === (Uy = this.recent) || void 0 === Uy ? void 0 : Uy.skill) === yb && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: yb,
          confirmed: fy + bb,
          expires: this.now() + 3e3,
          levelUpToken: null !== hy && void 0 !== hy ? hy : Zy
        }
      }
      pendingXp(yb) {
        let bb = 0;
        for (const Wy of this.pending.values()) Wy.skill === yb && (bb += Wy.amount);
        return bb
      }
      predictedProgress(yb) {
        const bb = this.progress[yb],
          Wy = this.pendingXp(yb);
        return Wy ? Zb(bb.totalXp + Wy, yb) : bb
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var yb, bb, Wy;
        const Uy = this.progress ? Ny.map((yb => {
            const bb = this.predictedProgress(yb);
            return {
              ...this.text(yb),
              icon: Eb[yb],
              benefit: this.benefit(yb, bb.level),
              sources: this.sources(yb),
              id: yb,
              selected: yb === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(bb.level)
              }),
              xp: null === bb.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(bb.xpIntoLevel),
                target: this.number(bb.xpForNextLevel)
              }),
              percent: null === bb.xpForNextLevel ? 100 : Math.min(100, bb.xpIntoLevel / bb.xpForNextLevel * 100)
            }
          })) : [],
          hy = Uy.find((yb => {
            var bb;
            return yb.id === (null === (bb = this.recent) || void 0 === bb ? void 0 : bb.skill)
          })),
          fy = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Uy,
          detail: null !== (yb = Uy.find((yb => yb.selected))) && void 0 !== yb ? yb : null,
          overallLevel: this.progress ? Ny.reduce(((yb, bb) => yb + this.predictedProgress(bb).level), 0) : null,
          hud: hy && fy > 0 ? {
            skill: hy,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(fy)
            }),
            levelUpToken: null !== (bb = null === (Wy = this.recent) || void 0 === Wy ? void 0 : Wy.levelUpToken) && void 0 !== bb ? bb : null,
            colour: mW(hy.id)
          } : null
        }
      }
    }
    const fW = Math.max(1600, 600, 950) + 400,
      ZW = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      cU = "skyblockQuestsView",
      PW = "skyblockQuestNotificationView";
    class oW extends Ky {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Zy = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(yb, Uy, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = bb, this.translate = Wy, this.now = hy, this.locale = fy, this.publishNotification = Zy, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var yb, bb;
          this.selected = null !== (yb = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.trackedQuestId) && void 0 !== yb ? yb : null, this.show()
        }, this.select = yb => {
          this.selected = yb, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const yb = this.snapshot.detail;
          !this.rh && null !== yb && void 0 !== yb && yb.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(yb.id), this.emit())
        }, this.viewDialogue = () => {
          const yb = this.snapshot.detail;
          var bb;
          yb && (null === (bb = this.onViewDialogue) || void 0 === bb || bb.call(this, yb.id))
        }, this.notifications = new Tb(hy, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var yb, bb;
        return null !== (yb = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.trackedQuestId) && void 0 !== yb ? yb : null
      }
      notify(yb) {
        !this.rh && this.notifications.enqueue(yb) && this.emitNotification()
      }
      setNotificationsHeld(yb) {
        (this.notifications.setHeld(yb) || yb) && this.emitNotification()
      }
      Zb() {
        var yb, bb;
        if (this.rh) return;
        this.notifications.Zb() && this.emitNotification();
        let Wy = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Wy = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Wy = !0);
        const Uy = BW(this.authoritative);
        null !== Uy && void 0 !== Uy && null !== (yb = Uy.questClock) && void 0 !== yb && yb.running && this.clockText(Uy) !== (null === (bb = this.snapshot.tracked) || void 0 === bb ? void 0 : bb.clock) && (Wy = !0), Wy && this.emit()
      }
      setTranslator(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = yb, this.locale = bb, this.emitNotification(), this.emit()
      }
      pU(yb) {
        if (!this.rh)
          if ("completion" === yb.kind) this.notify(yb.questCompletion);
          else if ("landmark" === yb.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: yb.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === yb.kind) {
          var bb, Wy, Uy;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: yb.npcNoteTitleKey,
            textKey: yb.npcNoteTextKey,
            params: null !== (bb = yb.npcNoteParams) && void 0 !== bb ? bb : {},
            nameKeys: null !== (Wy = yb.npcNoteNameKeys) && void 0 !== Wy ? Wy : {},
            iconItem: null !== (Uy = yb.npcNoteIconItem) && void 0 !== Uy ? Uy : null
          })
        } else if ("open" === yb.kind) this.show();
        else if ("guidance" === yb.kind) this.waypoint = yb.waypoint, this.compassTarget = yb.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === yb.kind) {
          this.authoritative = yb.snapshot, this.notifications.Zb() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const bb = this.trackedStepPulse;
          this.updateTrackedStepPulse(yb.snapshot), this.emit(), this.trackedStepPulse > bb && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.rh || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var yb;
        return null !== (yb = this.translateWithIcons) && void 0 !== yb ? yb : this.translate
      }
      clockText(yb) {
        const bb = yb.questClock;
        if (!bb) return null;
        const Wy = bb.elapsedMs + (bb.running ? this.now() - this.receivedAt : 0);
        return void 0 === bb.countdownFromMs ? (0, Yy.t)(Wy, !1) : (0, Yy.t)(1e3 * Math.ceil(Math.max(0, bb.countdownFromMs - Wy) / 1e3), !1)
      }
      updateTrackedStepPulse(yb) {
        var bb, Wy, Uy;
        const hy = BW(yb);
        if (!hy) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const fy = yb => hy.subquests.filter((bb => yb(bb.status))).map((yb => yb.id)),
          Zy = fy((yb => "completed" === yb || "skipped" === yb)),
          cb = fy((yb => "locked" !== yb)),
          Py = (null === (bb = this.trackedSteps) || void 0 === bb ? void 0 : bb.questId) === hy.id && hy.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Py) {
          const yb = Zy.filter((yb => !Py.finished.has(yb))),
            bb = fy((yb => "active" === yb || "ready" === yb)).filter((yb => !Py.unlocked.has(yb)));
          yb.length > 0 && this.trackedStepPulse++, (yb.length > 0 || bb.length > 0) && (this.trackedChange = {
            finished: new Set(yb),
            unlocked: new Set(bb),
            expiresAt: this.now() + fW
          })
        } else {
          var oy;
          this.trackedStepPulse = (null === (oy = this.trackedSteps) || void 0 === oy ? void 0 : oy.questId) === hy.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: hy.id,
          progress: hy.progress,
          finished: new Set([...null !== (Wy = null === Py || void 0 === Py ? void 0 : Py.finished) && void 0 !== Wy ? Wy : [], ...Zy]),
          unlocked: new Set([...null !== (Uy = null === Py || void 0 === Py ? void 0 : Py.unlocked) && void 0 !== Uy ? Uy : [], ...cb])
        }
      }
      entry(yb, bb) {
        var Wy, Uy;
        const hy = yb.id === (null === (Wy = this.authoritative) || void 0 === Wy ? void 0 : Wy.trackedQuestId),
          fy = this.now() < this.trackAvailableAt,
          Zy = this.questTextTranslator(),
          cb = yb.subquests.map((bb => {
            var Wy, Uy, fy, cb, Py, oy;
            const By = null !== (Wy = bb.handInNpcName) && void 0 !== Wy ? Wy : yb.giverName,
              Ky = this.translate("skyblockGame:progress", {
                current: bb.progress.toLocaleString(this.locale),
                target: bb.target.toLocaleString(this.locale)
              }),
              ey = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: By ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [bb.status],
              qb = "active" === bb.status || "ready" === bb.status;
            return {
              id: bb.id,
              name: Cb(Zy, bb.nameKey, bb.nameParams),
              description: Cb(Zy, bb.descriptionKey, bb.descriptionParams),
              progress: Ky,
              status: bb.status,
              statusLabel: ey ? this.translate(ey, {
                npc: By
              }) : Ky,
              iconItem: qb && null !== (Uy = bb.questIconItem) && void 0 !== Uy ? Uy : null,
              barPercent: "active" === bb.status && bb.showsProgressBar ? Math.min(100, 100 * bb.progress / bb.target) : null,
              justFinished: hy && null !== (fy = null === (cb = this.trackedChange) || void 0 === cb ? void 0 : cb.finished.has(bb.id)) && void 0 !== fy && fy,
              justUnlocked: hy && null !== (Py = null === (oy = this.trackedChange) || void 0 === oy ? void 0 : oy.unlocked.has(bb.id)) && void 0 !== Py && Py
            }
          }));
        return {
          id: yb.id,
          name: Cb(Zy, yb.nameKey, yb.nameParams),
          description: Cb(Zy, yb.descriptionKey, yb.descriptionParams),
          progress: bb ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: yb.progress.toLocaleString(this.locale),
            target: yb.target.toLocaleString(this.locale)
          }),
          completed: bb,
          tracked: hy,
          selected: yb.id === this.selected,
          canTrack: !bb && !hy && !fy,
          trackLabel: this.translate(hy ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : fy ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== yb.id,
          subquests: cb,
          focusStep: null !== (Uy = cb.find((yb => null !== yb.barPercent))) && void 0 !== Uy ? Uy : null,
          clock: this.clockText(yb)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy;
        const By = [...null !== (yb = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.active) && void 0 !== yb ? yb : [], ...null !== (Wy = null === (Uy = this.authoritative) || void 0 === Uy ? void 0 : Uy.completed) && void 0 !== Wy ? Wy : []];
        var Ky, ey, qb, sy;
        By.some((yb => yb.id === this.selected)) || (this.selected = null !== (Ky = null !== (ey = null === (qb = this.authoritative) || void 0 === qb ? void 0 : qb.trackedQuestId) && void 0 !== ey ? ey : null === (sy = By[0]) || void 0 === sy ? void 0 : sy.id) && void 0 !== Ky ? Ky : null);
        const Sy = null !== (hy = null === (fy = this.authoritative) || void 0 === fy ? void 0 : fy.active.map((yb => this.entry(yb, !1)))) && void 0 !== hy ? hy : [];
        Sy.sort(((yb, bb) => Number(bb.tracked) - Number(yb.tracked)));
        const Ey = null !== (Zy = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.completed.map((yb => this.entry(yb, !0)))) && void 0 !== Zy ? Zy : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Sy,
          completed: Ey,
          completedExpanded: this.completedExpanded,
          detail: null !== (Py = [...Sy, ...Ey].find((yb => yb.selected))) && void 0 !== Py ? Py : null,
          tracked: null !== (oy = Sy.find((yb => yb.tracked))) && void 0 !== oy ? oy : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function BW(yb) {
      var bb;
      return null !== (bb = null === yb || void 0 === yb ? void 0 : yb.active.find((bb => bb.id === yb.trackedQuestId))) && void 0 !== bb ? bb : null
    }
    const KW = "skyblockDungeonsView";
    class eW extends Ky {
      constructor(yb, bb) {
        let Wy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Uy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(yb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = bb, this.locale = Wy, this.requestEnter = Uy, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = yb => {
          this.selected = yb, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const yb = this.pickerEntry(),
            bb = null === yb || void 0 === yb ? void 0 : yb.difficulties[this.pageIndex];
          void 0 !== bb && null !== bb.unlockedBoss && (this.close(), this.requestEnter(yb.id, bb.difficulty))
        }
      }
      setTranslator(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = yb, this.locale = bb, this.emit()
      }
      pU(yb) {
        var bb, Wy;
        if (!this.rh) return "open" === yb.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== yb.kind ? "snapshot" === yb.kind && (this.authoritative = yb.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (bb = null === (Wy = this.pickerEntry()) || void 0 === Wy ? void 0 : Wy.difficulties.length) && void 0 !== bb ? bb : 1) - 1)), null === yb.snapshot && this.open ? this.close() : this.emit()) : this.choose(yb.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(yb) {
        var bb;
        const Wy = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.dungeons.find((bb => bb.id === yb));
        void 0 !== Wy ? this.open && this.pickerDungeonId === yb || (this.pickerDungeonId = yb, this.pageIndex = Math.max(0, Wy.difficulties.findLastIndex((yb => null !== yb.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${yb}`)
      }
      turnTo(yb) {
        var bb, Wy;
        const Uy = null !== (bb = null === (Wy = this.pickerEntry()) || void 0 === Wy ? void 0 : Wy.difficulties.length) && void 0 !== bb ? bb : 0;
        yb < 0 || yb >= Uy || yb === this.pageIndex || (this.pageIndex = yb, this.emit())
      }
      pickerEntry() {
        var yb, bb;
        return null !== (yb = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.dungeons.find((yb => yb.id === this.pickerDungeonId))) && void 0 !== yb ? yb : null
      }
      difficulty(yb) {
        const bb = yb.completions > 0,
          Wy = null === yb.bestMs ? null : (0, Yy.t)(yb.bestMs);
        return {
          difficulty: yb.difficulty,
          label: this.translate(Yy.b[yb.difficulty]),
          colour: Yy.f[yb.difficulty],
          beaten: bb,
          bestTime: Wy,
          completions: yb.completions,
          summary: bb ? [null === Wy ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Wy
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: yb.completions.toLocaleString(this.locale)
          })].filter((yb => null !== yb)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(yb) {
        const bb = yb.difficulties.map((yb => this.difficulty(yb))),
          Wy = bb.filter((yb => yb.beaten)).length;
        return {
          id: yb.id,
          name: this.translate(yb.nameKey),
          selected: yb.id === this.selected,
          beatenSummary: `${Wy} / ${bb.length}`,
          difficulties: bb
        }
      }
      picker() {
        const yb = this.pickerEntry();
        if (null === yb || 0 === yb.difficulties.length) return null;
        const bb = yb.difficulties.map(((bb, Wy) => {
          var Uy, hy, fy, Zy;
          const cb = bb.unlockedBoss,
            Py = null === cb ? this.lockedHint(yb, Wy) : null;
          return {
            ...this.difficulty(bb),
            unlocked: null !== cb,
            bossName: null === cb ? null : this.translate(cb.bossNameKey),
            bossMobType: null !== (Uy = null === cb || void 0 === cb ? void 0 : cb.bossMobType) && void 0 !== Uy ? Uy : null,
            bossMobVariation: null !== (hy = null === cb || void 0 === cb ? void 0 : cb.bossMobVariation) && void 0 !== hy ? hy : null,
            lockedHint: null !== (fy = null === Py || void 0 === Py ? void 0 : Py.text) && void 0 !== fy ? fy : null,
            lockedHintHighlight: null !== (Zy = null === Py || void 0 === Py ? void 0 : Py.highlight) && void 0 !== Zy ? Zy : null,
            current: Wy === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(yb.nameKey),
          pages: bb,
          page: bb[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < bb.length - 1
        }
      }
      lockedHint(yb, bb) {
        var Wy, Uy, hy;
        if (0 === bb && "number" === typeof yb.combatLevelLock) {
          const bb = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: yb.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: bb,
            colour: mW("combat"),
            icon: Eb.combat
          })
        }
        const fy = null !== (Wy = null === (Uy = this.authoritative) || void 0 === Uy ? void 0 : Uy.dungeons) && void 0 !== Wy ? Wy : [],
          Zy = bb > 0 ? yb : null !== (hy = fy[fy.indexOf(yb) - 1]) && void 0 !== hy ? hy : null,
          cb = bb > 0 ? yb.difficulties[bb - 1] : null === Zy || void 0 === Zy ? void 0 : Zy.difficulties[0];
        if (null === Zy || void 0 === cb) return null;
        const Py = this.translate(Zy.nameKey);
        if (null === cb.unlockedBoss) return Zy === yb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, cb.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Py
        }, cb.difficulty);
        const oy = this.translate(cb.unlockedBoss.bossNameKey);
        return Zy === yb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: oy
        }, cb.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: oy,
            dungeon: Py
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(yb, bb, Wy) {
        return this.hintHighlighting(yb, bb, "difficulty", {
          name: this.translate(Yy.b[Wy]),
          colour: Yy.f[Wy],
          icon: null
        })
      }
      hintHighlighting(yb, bb, Wy, Uy) {
        let {
          name: hy,
          colour: fy,
          icon: Zy
        } = Uy;
        const cb = this.translate(yb, {
          ...bb,
          [Wy]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(yb, {
            ...bb,
            [Wy]: hy
          }),
          highlight: 2 === cb.length ? {
            before: cb[0],
            name: hy,
            after: cb[1],
            colour: fy,
            icon: Zy
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var yb, bb, Wy;
        const Uy = null !== (yb = null === (bb = this.authoritative) || void 0 === bb ? void 0 : bb.dungeons) && void 0 !== yb ? yb : [];
        var hy, fy;
        Uy.some((yb => yb.id === this.selected)) || (this.selected = null !== (hy = null === (fy = Uy[0]) || void 0 === fy ? void 0 : fy.id) && void 0 !== hy ? hy : null);
        const Zy = Uy.map((yb => this.entry(yb)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Zy,
          detail: null !== (Wy = Zy.find((yb => yb.selected))) && void 0 !== Wy ? Wy : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const qU = ["mining", "farming", "foraging", "fishing", "combat"],
      sW = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      SW = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function EW() {
      for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
      return bb.map(((yb, bb) => ({
        amount: yb,
        coins: sW[bb],
        xp: SW[bb]
      })))
    }
    const lW = EW(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      mU = EW(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      CW = EW(50, 100, 250, 500, 1e3, 2500, 5e3),
      TW = EW(25, 50, 100, 250, 500, 1e3),
      VW = EW(10, 25, 50, 100, 250, 500, 1e3),
      JW = EW(1, 5, 10, 25, 50);

    function gU(yb, bb) {
      return {
        id: yb,
        category: "fishing",
        item: bb,
        drops: [bb],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VW
      }
    }
    const GW = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: mU
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: CW
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: CW
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: TW
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: TW
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: mU
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: lW
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: lW
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: lW
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: CW
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: mU
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: mU
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: mU
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: CW
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: CW
      }, gU("wheatfish", "Wheatfish"), gU("darter", "Darter"), gU("sunset_minnow", "Sunset Minnow"), gU("root_flounder", "Root Flounder"), gU("greenfin_loach", "Greenfin Loach"), gU("red_strongfish", "Red Strongfish"), gU("green_strongfish", "Green Strongfish"), gU("boomerang_fish", "Boomerang Fish"), gU("seahorse", "Seahorse"), gU("spined_stickleback", "Spined Stickleback"), gU("moon_strongfish", "Moon Strongfish"), gU("boulder_bass", "Boulder Bass"), gU("grass_snapper", "Grass Snapper"), gU("crystal_wheatfish", "Crystalized Wheatfish", JW), gU("moonstone_pupfish", "Moonstone Pupfish", JW), gU("reedglass_minnow", "Reedglass Minnow"), gU("mangrove_herring", "Mangrove Herring"), gU("mudline_perch", "Mudline Perch"), gU("coastal_mullet", "Coastal Mullet"), gU("reef_sardine", "Reef Sardine"), gU("root_perch", "Root Perch"), gU("driftwood_catfish", "Driftwood Catfish"), gU("aether_minnow", "Aether Minnow"), gU("needlefish", "Tri-Pointed Needlefish"), gU("threadfin_bream", "Threadfin Bream"), gU("mudbelly_tilapia", "Mudbelly Tilapia"), gU("rotslab_eel", "Rotslab Eel"), gU("polarflash_electron", "Polarflash Electron"), gU("mireback_carp", "Mireback Carp"), gU("blackwater_bream", "Blackwater Bream"), gU("stone_grouper", "Stone Grouper"), gU("shadeback_ray", "Shadeback Ray"), gU("glacial_silverfish", "Glacial Silverfish"), gU("hatchetfish", "Hatchetfish"), gU("moonlit_boomerang", "Moonlit Boomerang Fish"), gU("murkborne_ray", "Murkborne Ray"), gU("bamboo_catfish", "Bamboo Catfish"), gU("mossback_arapaima", "Mossback Arapaima"), gU("murk_stingray", "Murk Stingray"), gU("channel_sawfish", "Channel Sawfish"), gU("boned_sturgeon", "Boned Sturgeon"), gU("oarfish", "Oarfish"), gU("snakehead", "Snakehead", JW), gU("eldertide_leviathan", "Eldertide Leviathan", JW), gU("pithead", "Pithead"), gU("electric_eel", "Electric Eel"), gU("shadow_darter", "Shadow Darter"), gU("abyss_carp", "Abyss Carp"), gU("nomai_moray", "Nomai Moray"), gU("silver_dragonfish", "Silver Dragonfish"), gU("giant_moray", "Giant Moray"), gU("coelacanth", "Coelacanth", JW), gU("frost_herring", "Frost Herring"), gU("permafrost_halibut", "Permafrost Halibut"), gU("glacial_lanternfish", "Glacial Lanternfish"), gU("frozen_grenadier", "Frozen Grenadier"), gU("blackfin_icefish", "Blackfin Icefish"), gU("moonfish", "Moonfish"), gU("alpha_strongfish", "Alpha Moon Strongfish"), gU("deep_lanternfish", "Deepwater Lanternfish", JW), gU("pearlescent_moonfish", "Pearlescent Moonfish", JW), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: mU
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: TW
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: TW
      }],
      OW = (new Map(GW.map((yb => [yb.id, yb]))), new Map),
      RW = new Map;
    for (const ZP of GW) {
      for (const [yb, bb] of Object.entries(null !== (vU = ZP.blocks) && void 0 !== vU ? vU : {})) {
        var vU;
        OW.set(yb, {
          collection: ZP,
          amount: bb
        })
      }
      for (const yb of null !== (iU = ZP.drops) && void 0 !== iU ? iU : []) {
        var iU;
        RW.set(yb, ZP)
      }
    }

    function MW(yb, bb) {
      let Wy = 0;
      for (; Wy < yb.tiers.length && bb >= yb.tiers[Wy].amount;) Wy++;
      return Wy
    }
    const YW = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function XW(yb) {
      return YW[yb - 1]
    }
    const nW = "skyblockCollectionsView";
    class uW extends Ky {
      constructor(yb, bb) {
        let Wy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Uy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yb => yb;
        super(yb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = bb, this.locale = Wy, this.itemName = Uy, this.counts = null, this.category = "mining", this.selected = GW[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = yb => {
          this.category = yb, this.selected = this.inCategory(yb)[0].id, this.emit()
        }, this.select = yb => {
          this.selected = yb, this.emit()
        }
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, this.locale = bb, this.itemName = Wy, this.emit()
      }
      pU(yb) {
        if (!this.rh)
          if ("collOpen" !== yb.kind) {
            (yb.collFull || null === this.counts) && (this.counts = new Map);
            for (const [bb, Wy] of yb.collCounts) this.counts.set(bb, Wy);
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
        var yb;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const bb = this.inCategory(this.category).map((yb => this.collectionView(yb))),
          Wy = GW.reduce(((yb, bb) => yb + this.tierOf(bb)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: qU.map((yb => this.categoryView(yb))),
          collections: bb,
          detail: null !== (yb = bb.find((yb => yb.selected))) && void 0 !== yb ? yb : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Wy)
          })
        }
      }
      categoryView(yb) {
        const bb = this.inCategory(yb),
          Wy = bb.reduce(((yb, bb) => yb + this.tierOf(bb)), 0),
          Uy = bb.reduce(((yb, bb) => yb + bb.tiers.length), 0);
        return {
          id: yb,
          label: this.translate(`skyblockGame:${yb}`),
          icon: Eb[yb],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Wy),
            target: this.number(Uy)
          }),
          selected: yb === this.category
        }
      }
      collectionView(yb) {
        var bb, Wy;
        const Uy = null !== (bb = this.counts.get(yb.id)) && void 0 !== bb ? bb : 0,
          hy = MW(yb, Uy),
          fy = null !== (Wy = yb.tiers[hy]) && void 0 !== Wy ? Wy : null,
          Zy = 0 === hy ? 0 : yb.tiers[hy - 1].amount;
        return {
          id: yb.id,
          name: this.itemName(yb.item),
          icon: yb.item,
          selected: yb.id === this.selected,
          locked: 0 === Uy,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Uy)
          }),
          tier: 0 === hy ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(hy),
          percent: null === fy ? 100 : Math.min(100, (Uy - Zy) / (fy.amount - Zy) * 100),
          progress: null === fy ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Uy),
            target: this.number(fy.amount)
          }),
          nextReward: null === fy ? null : this.reward(yb, fy.coins, fy.xp)
        }
      }
      reward(yb, bb, Wy) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(bb),
          xp: this.number(Wy),
          skill: this.translate(`skyblockGame:${yb.category}`)
        })
      }
      tierLabel(yb) {
        return this.translate("skyblockGame:collectionTier", {
          tier: XW(yb)
        })
      }
      tierOf(yb) {
        var bb;
        return MW(yb, null !== (bb = this.counts.get(yb.id)) && void 0 !== bb ? bb : 0)
      }
      inCategory(yb) {
        return GW.filter((bb => bb.category === yb))
      }
      number(yb) {
        return yb.toLocaleString(this.locale)
      }
    }
    const rU = "skyblockPortalTransitView",
      HW = "skyblockPortalArrival";
    class aU {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.EZ = yb, this.storage = bb, this.now = Wy, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      pU(yb) {
        const bb = {
          zoneNameKey: yb.transitZoneNameKey,
          variation: yb.transitZoneVariation,
          colour: yb.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(HW, bb), this.show("departure", bb.zoneNameKey, bb.colour, yb.transitDurationMs, yb.transitDurationMs + 1500, (() => {
          this.storage.removeItem(HW)
        }))
      }
      resumeArrival(yb) {
        const bb = this.storage.getItem(HW);
        this.storage.removeItem(HW), null === bb || bb.variation !== yb || this.now() - bb.departedAt > 3e4 || this.show("arrival", bb.zoneNameKey, bb.colour, 3200, 2e4)
      }
      finishArrival(yb) {
        var bb;
        "arrival" === (null === (bb = this.view) || void 0 === bb ? void 0 : bb.phase) && this.view.token === yb && (this.clearTimer(), this.view = null, this.EZ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(yb, bb, Wy, Uy, hy, fy) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: yb,
          zoneNameKey: bb,
          colour: Wy,
          durationMs: Uy
        }, this.EZ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.EZ(null), null === fy || void 0 === fy || fy()
        }), hy)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const FW = "skyblockDailyRewardView",
      pW = "skyblockDailyRewardCoin";
    class LW {
      constructor(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.EZ = yb, this.isBusy = bb, this.holdQuestPopups = Wy, this.onHeldCoinsChanged = Uy, this.onCoinLanded = hy, this.onStarted = fy, this.onFinished = Zy, this.onItemLanded = cb, this.now = Py, this.kW = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var yb, bb;
        return null !== (yb = null === (bb = this.playing) || void 0 === bb ? void 0 : bb.view) && void 0 !== yb ? yb : null
      }
      getHeldCoins() {
        var yb, bb;
        let Wy = 0;
        for (const Uy of this.kW) Wy += Uy.coins;
        return Wy - (null !== (yb = null === (bb = this.playing) || void 0 === bb ? void 0 : bb.released) && void 0 !== yb ? yb : 0)
      }
      pU(yb) {
        "dailyRewardClaimed" !== yb.kind ? (this.queue.push(yb), this.Zb()) : this.kW.push({
          coins: yb.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Zb() {
        const yb = this.now();
        if (null === this.playing) return this.releaseUnshown(yb), void this.startNext(yb);
        const bb = this.playing,
          Wy = yb - bb.startedAt,
          Uy = bb.view.flyingCoins,
          hy = function(yb, bb) {
            let Wy = 0;
            for (; Wy < bb && jU(Wy, bb) <= yb;) Wy++;
            return Wy
          }(Wy, Uy);
        if (hy !== bb.landed) {
          for (let yb = hy - bb.landed > 2 ? hy - 1 : bb.landed; yb < hy; yb++) this.onCoinLanded(yb, Uy);
          bb.landed = hy, bb.released = Math.round(bb.view.coins * hy / Uy), this.onHeldCoinsChanged()
        }
        for (; bb.itemsLanded < bb.view.items.length && 2e3 + 160 * bb.itemsLanded + 630 <= Wy;) this.onItemLanded(bb.itemsLanded), bb.itemsLanded++;
        Wy >= bb.view.durationMs && (this.finish(), this.startNext(yb))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.kW = [], this.EZ(null)
      }
      startNext(yb) {
        if (0 === this.queue.length || this.isBusy()) return;
        const bb = this.queue.shift();
        this.token++;
        const Wy = {
          token: this.token,
          day: bb.dailyRewardDay,
          coins: bb.dailyRewardCoins,
          items: bb.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: bb.dailyRewardDay === vb ? 24 : 14
        };
        this.playing = {
          view: Wy,
          startedAt: yb,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.EZ(Wy), this.onStarted(Wy)
      }
      finish() {
        this.kW.shift(), this.playing = null, this.holdQuestPopups(!1), this.EZ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(yb) {
        if (this.queue.length > 0 || 0 === this.kW.length) return;
        const bb = this.kW.length;
        this.kW = this.kW.filter((bb => yb - bb.receivedAt < 6e4)), this.kW.length !== bb && this.onHeldCoinsChanged()
      }
    }

    function QW(yb, bb) {
      return 450 + 715 * yb / (bb - 1)
    }

    function jU(yb, bb) {
      return QW(yb, bb) + 650
    }
    const DW = "skyblockMailboxView";
    class tU {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.EZ = yb, this.isBusy = bb, this.onStarted = Wy, this.now = Uy, this.waiting = [], this.playing = null, this.token = 0, this.itemName = yb => yb
      }
      getSnapshot() {
        var yb, bb;
        return null !== (yb = null === (bb = this.playing) || void 0 === bb ? void 0 : bb.view) && void 0 !== yb ? yb : null
      }
      setItemName(yb) {
        this.itemName = yb
      }
      pU(yb) {
        this.waiting.push(...yb.mailLetters), this.Zb()
      }
      Zb() {
        const yb = this.now();
        null !== this.playing && yb - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.EZ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(yb)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.EZ(null)
      }
      start(yb) {
        const bb = this.waiting.slice(0, 3);
        this.token++;
        const Wy = {
          token: this.token,
          letters: bb.map((yb => this.toView(yb))),
          more: this.waiting.length - bb.length,
          durationMs: 4500 + 700 * bb.length
        };
        this.waiting = [], this.playing = {
          view: Wy,
          startedAt: yb
        }, this.EZ(Wy), this.onStarted(Wy)
      }
      toView(yb) {
        return {
          coins: yb.mailCoins,
          items: yb.mailItems.map((yb => {
            var bb;
            return {
              itemName: yb.mailItemName,
              amount: yb.mailItemAmount,
              label: null !== (bb = yb.mailItemLabel) && void 0 !== bb ? bb : this.itemName(yb.mailItemName)
            }
          })),
          reasonKey: yb.mailReasonKey,
          reasonParams: yb.mailReasonParams
        }
      }
    }
    const wW = "skyblockQuestGraphView",
      kU = "skyblockDevQuestJump";

    function NW(yb) {
      if (0 === yb.length) return "";
      const bb = [`M ${yb[0].x} ${yb[0].y}`];
      for (let Uy = 1; Uy < yb.length - 1; Uy++) {
        const Wy = yb[Uy + 1];
        bb.push(`Q ${yb[Uy].x} ${yb[Uy].y} ${(yb[Uy].x+Wy.x)/2} ${(yb[Uy].y+Wy.y)/2}`)
      }
      const Wy = yb[yb.length - 1];
      return bb.push(`L ${Wy.x} ${Wy.y}`), bb.join(" ")
    }

    function zU(yb, bb) {
      return yb < bb ? `${yb}|${bb}` : `${bb}|${yb}`
    }
    class IW extends Ky {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(yb, Wy, Uy), this.translate = bb, this.requestJump = hy, this.requestArrive = fy, this.storage = Zy, this.now = cb, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = yb => {
          yb !== this.hoveredId && (this.hoveredId = yb, this.emit())
        }, this.jump = yb => {
          this.close(), this.requestJump(yb)
        }
      }
      pU(yb) {
        if (!this.rh)
          if ("graph" !== yb.kind) {
            if ("jumping" === yb.kind) {
              const bb = {
                questId: yb.graphQuestId,
                variation: yb.graphVariation,
                completes: yb.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(kU, bb)
            }
          } else {
            const bb = ++this.graphCount;
            Wy.e(101).then((() => Wy(5690))).then((Wy => {
              let {
                default: Uy
              } = Wy;
              this.rh || bb !== this.graphCount || (this.layout = function(yb, bb, Wy) {
                var Uy, hy;
                const fy = new yb.graphlib.Graph;
                fy.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), fy.setDefaultEdgeLabel((() => ({})));
                const Zy = new Set;
                for (const By of bb) Zy.add(By.graphQuestId), fy.setNode(By.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const cb = Wy.filter((yb => Zy.has(yb.graphFromId) && Zy.has(yb.graphToId) && yb.graphFromId !== yb.graphToId)),
                  Py = new Map;
                for (const By of [...cb].sort(((yb, bb) => Number("awaits" === yb.graphEdgeKind) - Number("awaits" === bb.graphEdgeKind)))) {
                  const yb = zU(By.graphFromId, By.graphToId);
                  Py.has(yb) || (Py.set(yb, By), fy.setEdge(By.graphFromId, By.graphToId))
                }
                yb.layout(fy);
                const oy = fy.graph();
                return {
                  width: Math.ceil(null !== (Uy = oy.width) && void 0 !== Uy ? Uy : 0),
                  height: Math.ceil(null !== (hy = oy.height) && void 0 !== hy ? hy : 0),
                  nodes: bb.map((yb => {
                    var bb, Wy;
                    const Uy = fy.node(yb.graphQuestId);
                    return {
                      node: yb,
                      left: (null !== (bb = Uy.x) && void 0 !== bb ? bb : 0) - 95,
                      top: (null !== (Wy = Uy.y) && void 0 !== Wy ? Wy : 0) - 26
                    }
                  })),
                  edges: cb.map((yb => {
                    var bb;
                    const Wy = Py.get(zU(yb.graphFromId, yb.graphToId)),
                      Uy = null !== (bb = fy.edge(Wy.graphFromId, Wy.graphToId).points) && void 0 !== bb ? bb : [];
                    return {
                      edge: yb,
                      key: `${yb.graphFromId}|${yb.graphToId}|${yb.graphEdgeKind}`,
                      path: NW(Wy.graphFromId === yb.graphFromId ? Uy : [...Uy].reverse())
                    }
                  })),
                  plans: new Map(bb.map((yb => [yb.graphQuestId, new Set([yb.graphQuestId, ...yb.graphPlanIds])])))
                }
              }(Uy, yb.graphNodes, yb.graphEdges), this.show())
            })).catch((yb => {
              console.error("The quest graph could not be laid out", yb)
            }))
          }
      }
      resumeJump(yb) {
        const bb = this.storage.getItem(kU);
        this.storage.removeItem(kU), null === bb || bb.variation !== yb || this.now() - bb.departedAt > 6e4 || this.requestArrive(bb.questId, bb.completes)
      }
      setTranslator(yb) {
        this.translate = yb, this.emit()
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
        var yb, bb;
        return null !== (yb = null === this.hoveredId || null === (bb = this.layout) || void 0 === bb ? void 0 : bb.plans.get(this.hoveredId)) && void 0 !== yb ? yb : new Set
      }
      buildSnapshot() {
        const yb = this.layout;
        if (null === yb) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const bb = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: yb.width,
          height: yb.height,
          nodes: yb.nodes.map((yb => {
            let {
              node: Wy,
              left: Uy,
              top: hy
            } = yb;
            return {
              id: Wy.graphQuestId,
              name: this.translate(Wy.graphNameKey),
              detail: null === Wy.graphGiverName ? Wy.graphZoneId : `${Wy.graphGiverName} \xb7 ${Wy.graphZoneId}`,
              state: Wy.graphState,
              left: Uy,
              top: hy,
              inPlan: bb.has(Wy.graphQuestId),
              hovered: Wy.graphQuestId === this.hoveredId
            }
          })),
          edges: yb.edges.map((yb => {
            let {
              edge: Wy,
              key: Uy,
              path: hy
            } = yb;
            return {
              key: Uy,
              kind: Wy.graphEdgeKind,
              path: hy,
              inPlan: bb.has(Wy.graphFromId) && bb.has(Wy.graphToId)
            }
          })),
          planning: bb.size > 0
        }
      }
    }
    var xU = Wy(35764);
    const AW = 250,
      dW = 2150,
      yh = -2.8,
      bh = 2.2,
      WU = -27,
      UU = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      hU = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      fU = Math.round(50 + 1e3 * (hU.delay + hU.period / 2)),
      ZU = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      ch = Array.from({
        length: 26
      }, ((yb, bb) => {
        const Wy = 2.39996 * bb,
          Uy = .5 + .618034 * bb % 1 * .23,
          hy = bb % 3 !== 2;
        return {
          rune: hy ? ZU[7 * bb % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Wy)*Uy).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Wy)*Uy).toFixed(3)})`,
            "--spin": 40 * (bb % 5 - 2) + "deg",
            "--size": (hy ? 1 + bb % 4 * .2 : .3 + bb % 2 * .15) + "rem",
            "--duration": `${(1.8+7*bb%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*bb%3).toFixed(2)}s`
          }
        }
      }));

    function PU(yb, bb) {
      return Array.from({
        length: 30 + 3 * yb + (bb ? 10 : 0)
      }, ((yb, bb) => {
        const Wy = bb < 4,
          Uy = Wy ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          hy = Wy ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          fy = Wy ? 2.2 : .6 + Math.random(),
          Zy = Wy ? .3 : Math.random() < .5 ? .16 : .24,
          cb = Wy ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Uy,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${hy.toFixed(2)}rem`,
          "--length": `${fy.toFixed(2)}rem`,
          "--width": `${Zy}rem`,
          "--duration": `${Math.round(cb)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function oU(yb) {
      let {
        zeta: bb,
        period: Wy
      } = yb;
      const Uy = 2 * Math.PI / Wy;
      return {
        w: Uy,
        decay: bb * Uy / Math.sqrt(1 - bb * bb)
      }
    }
    let BU = !1;

    function KU() {
      if (BU) return;
      BU = !0;
      const yb = document.createElement("style");
      yb.textContent = function() {
        const yb = oU(UU),
          bb = oU(hU),
          Wy = bb => Math.exp(-yb.decay * bb) * Math.sin(yb.w * bb),
          Uy = Wy(Math.atan(yb.w / yb.decay) / yb.w),
          hy = .25,
          fy = 2.15,
          Zy = Math.round(215),
          cb = [];
        for (let Py = 0; Py <= Zy; Py++) {
          const yb = Py / Zy * fy;
          let oy = Math.sin(Math.min(yb, hy) / hy * Math.PI / 2) ** 2,
            By = 0,
            Ky = 1,
            ey = 1 - .2 * oy,
            qb = 1;
          if (yb >= hy) {
            const Zy = yb - hy,
              cb = Math.max(0, Zy - .05);
            oy = Math.exp(-cb / .05), By = Wy(cb + UU.lead * (1 - Math.exp(-cb / UU.rush))) / Uy;
            const Py = cb - hU.delay,
              sy = Py <= 0 ? 0 : 1 - Math.exp(-bb.decay * Py) * (Math.cos(bb.w * Py) + bb.decay / bb.w * Math.sin(bb.w * Py)),
              Sy = Math.max(0, (yb - 1.77) / (fy - 1.77));
            Ky = (1 + (hU.to - 1) * sy) * (1 + .08 * Sy), ey = 1.1 + 1.5 * Math.exp(-Zy / .07) + .3 * Math.exp(-(((1e3 * Zy - fU) / 100) ** 2)) + .8 * Sy, qb = 1 - Sy ** 1.5
          }
          const sy = .15 * oy + yh * By,
            Sy = -.1 * oy + bh * By,
            Ey = 3 * oy + WU * By;
          cb.push(`${(Py/Zy*100).toFixed(3)}% { opacity: ${qb.toFixed(3)}; transform: translate(${sy.toFixed(3)}rem, ${Sy.toFixed(3)}rem) rotate(${Ey.toFixed(2)}deg) scale(${Ky.toFixed(3)}); filter: brightness(${ey.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${cb.join(" ")} }`
      }(), document.head.append(yb)
    }
    const eU = "skyblockForgeView",
      qh = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class sU extends Ky {
      constructor(yb, bb, Wy, Uy, hy) {
        super(yb, Wy, Uy), this.translate = bb, this.requestForge = hy, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (yb, bb) => {
          var Wy, Uy;
          null !== this.forging || (null !== (Wy = this.owned[(0, xU.m)(bb, yb)]) && void 0 !== Wy ? Wy : 0) <= 0 || (this.selected[yb] = this.selected[yb] === bb ? null : bb, this.status = null, null === (Uy = this.onPartSelected) || void 0 === Uy || Uy.call(this), this.emit())
        }, this.forge = yb => {
          var bb, Wy;
          const Uy = this.selectedParts();
          if (null === Uy || this.isPending() || !this.open) return;
          const hy = (0, xU.l)(Uy);
          if (null === hy || hy.coalCost > this.coal) return;
          const fy = this.preview(hy),
            Zy = null !== (bb = null === (Wy = this.onForgeStarted) || void 0 === Wy ? void 0 : Wy.call(this, fy.tier, fy.named, yb)) && void 0 !== bb ? bb : () => {};
          if (this.dropArrival(), yb) {
            const yb = {
              id: ++this.forgeId,
              preview: fy,
              timers: [],
              stopSounds: Zy,
              landed: !1,
              reply: null
            };
            yb.timers.push(setTimeout((() => {
              yb.landed = !0, null !== yb.reply && (this.apply(yb.reply), yb.reply = null, this.emit())
            }), AW), setTimeout((() => {
              this.finishForge(yb)
            }), dW)), this.forging = yb
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Uy)
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === yb.forgeMessageKind) return this.dropForge(), this.apply(yb), this.status = null, void this.show();
        const bb = this.forging;
        if (null !== bb && null !== yb.forgeRefusalKey) this.dropForge();
        else if (null !== bb && !bb.landed) return void(bb.reply = yb);
        this.apply(yb), this.emit()
      }
      apply(yb) {
        if (this.owned = yb.forgeOwnedParts, this.coal = yb.forgeCoalOwned, this.keepSelectionOwned("open" === yb.forgeMessageKind), null !== yb.forgeForgedSwordId) {
          var bb;
          const Wy = (0, xU.l)(yb.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.displayName) && void 0 !== bb ? bb : ""
            }
          }
        } else null !== yb.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: yb.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(yb) {
        this.translate = yb, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(yb) {
        var bb;
        this.forging = null;
        const Wy = this.selectedParts(),
          Uy = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: yb.id,
          sameSword: null !== Wy && (null === (bb = (0, xU.l)(Wy)) || void 0 === bb ? void 0 : bb.displayName) === yb.preview.name,
          timer: Uy
        }, this.emit()
      }
      dropForge() {
        const yb = this.forging;
        if (null !== yb) {
          this.forging = null;
          for (const bb of yb.timers) clearTimeout(bb);
          yb.stopSounds(), null !== yb.reply && this.apply(yb.reply)
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
        var yb, bb, Wy;
        const Uy = this.selectedParts(),
          hy = null === Uy ? null : (0, xU.l)(Uy),
          fy = null !== (yb = null === (bb = this.forging) || void 0 === bb ? void 0 : bb.preview) && void 0 !== yb ? yb : null === hy ? null : this.preview(hy);
        return {
          enabled: this.received,
          open: this.open,
          slots: xU.h.map((yb => ({
            kind: yb,
            label: this.translate(qh[yb]),
            parts: this.partsFor(yb)
          }))),
          coalOwned: this.coal,
          preview: fy,
          unformedSword: xU.e[null !== (Wy = this.selected.Blade) && void 0 !== Wy ? Wy : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((yb => yb > 0)),
          canForge: null !== fy && !fy.coalShort && !this.isPending(),
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
      preview(yb) {
        return {
          name: yb.displayName,
          lore: yb.lore,
          baseSword: yb.baseSword,
          enchantmentTier: yb.enchantmentTier,
          tier: Number(yb.enchantmentTier.slice(-1)),
          named: yb.named,
          stats: this.stats(yb),
          effects: yb.effects,
          coalCost: yb.coalCost,
          coalShort: null === this.forging && yb.coalCost > this.coal
        }
      }
      partsFor(yb) {
        const bb = [];
        for (const Uy of xU.d) {
          var Wy;
          const hy = (0, xU.m)(Uy, yb),
            fy = null !== (Wy = this.owned[hy]) && void 0 !== Wy ? Wy : 0;
          fy > 0 && bb.push({
            material: Uy,
            itemName: hy,
            owned: fy,
            selected: this.selected[yb] === Uy,
            placeholder: !1
          })
        }
        if (0 === bb.length) {
          const Wy = xU.d[0];
          bb.push({
            material: Wy,
            itemName: (0, xU.m)(Wy, yb),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return bb
      }
      stats(yb) {
        const bb = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${yb.powerMultiplier.toFixed(2)}`,
          better: yb.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${yb.damageMultiplier.toFixed(2)}`,
          better: yb.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/yb.cooldownMultiplier).toFixed(2)}`,
          better: yb.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${yb.knockbackMultiplier.toFixed(2)}`,
          better: yb.knockbackMultiplier > 1
        }];
        return yb.reachBonus > 0 && bb.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${yb.reachBonus.toFixed(1)}`,
          better: !0
        }), yb.damageReduction > 0 && bb.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*yb.damageReduction)}%`,
          better: !0
        }), bb
      }
      selectedParts() {
        const {
          Blade: yb,
          Guard: bb,
          Handle: Wy
        } = this.selected;
        return null === yb || null === bb || null === Wy ? null : {
          blade: yb,
          guard: bb,
          handle: Wy
        }
      }
      keepSelectionOwned(yb) {
        for (const Wy of xU.h) {
          var bb;
          const Uy = this.selected[Wy];
          if (null !== Uy && (null !== (bb = this.owned[(0, xU.m)(Uy, Wy)]) && void 0 !== bb ? bb : 0) > 0) continue;
          if (!yb) {
            this.selected[Wy] = null;
            continue
          }
          const hy = [...xU.d].reverse().find((yb => {
            var bb;
            return (null !== (bb = this.owned[(0, xU.m)(yb, Wy)]) && void 0 !== bb ? bb : 0) > 0
          }));
          this.selected[Wy] = null !== hy && void 0 !== hy ? hy : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const SU = "skyblockSmugglerView",
      EU = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class lU extends Ky {
      constructor(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(yb, Wy, Uy), this.translate = bb, this.requestBuy = hy, this.now = fy, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = yb => yb, this.onBought = null, this.buy = yb => {
          const bb = this.deals[yb];
          void 0 !== bb && !this.isPending() && this.open && !this.soldOut.has(yb) && this.canAfford(bb) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, yb))
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        if (this.received = !0, this.day = yb.smugglerDay, this.deals = yb.smugglerDeals, this.rivets = yb.smugglerRivetsOwned, this.crests = yb.smugglerCrestsOwned, this.soldOut = new Set(yb.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + yb.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === yb.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = yb.smugglerBoughtSlot, null !== yb.smugglerBoughtSlot) {
          var bb, Wy;
          const Uy = this.deals[yb.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Uy ? "" : this.dealName(Uy),
              amount: String(null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy.smugglerDealAmount) && void 0 !== bb ? bb : 0)
            }
          }, this.boughtCount++, null === (Wy = this.onBought) || void 0 === Wy || Wy.call(this)
        } else null !== yb.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: yb.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, void 0 !== Wy && (this.itemName = Wy), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(yb) {
        if (null !== yb.smugglerDealUniqueName) return yb.smugglerDealUniqueName;
        const bb = EU[yb.smugglerDealItem];
        return void 0 === bb ? this.itemName(yb.smugglerDealItem) : this.translate(bb)
      }
      canAfford(yb) {
        return yb.smugglerDealRivets <= this.rivets && yb.smugglerDealCrests <= this.crests
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
        const yb = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return yb <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : yb < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(yb)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(yb / 60)),
          minutes: String(yb % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((yb, bb) => ({
            slot: bb,
            itemName: yb.smugglerDealItem,
            displayName: this.dealName(yb),
            enchantmentTier: yb.smugglerDealEnchantmentTier,
            amount: yb.smugglerDealAmount,
            rivets: yb.smugglerDealRivets,
            crests: yb.smugglerDealCrests,
            affordable: this.canAfford(yb),
            soldOut: this.soldOut.has(bb),
            justBought: this.boughtSlot === bb
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
    const mh = "skyblockPassageView",
      CU = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function TU(yb, bb) {
      return yb(CU[bb])
    }

    function VU(yb, bb, Wy, Uy) {
      const hy = Math.ceil((Wy - Uy) / 864e5),
        fy = TU(yb, bb);
      return hy > 1 ? yb("skyblockGame:passageNextDays", {
        phase: fy,
        days: String(hy)
      }) : yb("skyblockGame:passageNextSoon", {
        phase: fy
      })
    }
    class JU extends Ky {
      constructor(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(yb, Wy, Uy), this.translate = bb, this.now = hy, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = yb => yb, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        this.message = yb, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, void 0 !== Wy && (this.itemName = Wy), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(yb) {
        return {
          itemName: yb.passageFish,
          displayName: this.itemName(yb.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(yb.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const yb = this.message;
        return null === yb ? {
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
          phase: yb.passagePhase,
          phaseName: TU(this.translate, yb.passagePhase),
          visitors: yb.passageVisitors.map((yb => this.describe(yb))),
          resting: this.describe(yb.passageResting),
          nextPhase: yb.passageNextPhase,
          next: VU(this.translate, yb.passageNextPhase, yb.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var gh = Wy(37227);
    const GU = "skyblockKeepersChairView";
    class OU extends Ky {
      constructor(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new gh.d;
        super(yb, Wy, Uy), this.translate = bb, this.requestAim = hy, this.now = fy, this.pacer = Zy, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = yb => yb, this.aim = yb => {
          !this.awaitingReply && this.open && this.atChair && yb !== this.favoured && (null === yb || this.islands.some((bb => bb.keepersChairIslandId === yb && bb.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== yb && void 0 !== yb ? yb : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Zy.subscribe((() => {
          this.emit()
        }))
      }
      pU(yb) {
        var bb, Wy;
        this.received = !0;
        const Uy = this.favoured,
          hy = this.atChair;
        var fy;
        return this.islands = yb.keepersChairIslands, this.favoured = yb.keepersChairFavoured, this.passage = null !== (bb = yb.keepersChairPassage) && void 0 !== bb ? bb : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Wy = yb.keepersChairAtChair) || void 0 === Wy || Wy, "place" === yb.keepersChairMessageKind ? (!hy && this.atChair && "refused" === (null === (fy = this.status) || void 0 === fy ? void 0 : fy.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === yb.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== yb.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: yb.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Uy && (this.status = null === this.favoured ? {
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
      receivePassage(yb) {
        this.received && (this.passage = yb, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, void 0 !== Wy && (this.itemName = Wy), this.emit()
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
      islandName(yb) {
        const bb = this.islands.find((bb => bb.keepersChairIslandId === yb));
        return void 0 === bb ? yb : this.translate(bb.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const yb = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          bb = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((yb => {
            const bb = yb.keepersChairFeaturedFish;
            return {
              id: yb.keepersChairIslandId,
              name: this.translate(yb.keepersChairIslandNameKey),
              relit: yb.keepersChairIslandRelit,
              featuredFish: null === bb ? null : {
                itemName: bb,
                displayName: this.itemName(bb)
              },
              favoured: yb.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === yb ? null : {
            tone: yb.tone,
            text: this.translate(yb.key, null === yb.island ? void 0 : {
              island: this.islandName(yb.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === bb ? null : {
            phase: bb.keepersChairPassagePhase,
            phaseName: TU(this.translate, bb.keepersChairPassagePhase),
            nextPhase: bb.keepersChairPassageNextPhase,
            next: VU(this.translate, bb.keepersChairPassageNextPhase, bb.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const RU = "skyblockReachLogView",
      vh = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      ih = "Caught Fish",
      MU = [1, 2, 4];

    function YU(yb, bb) {
      return yb.map((yb => ({
        ...yb,
        reachLogPageFish: yb.reachLogPageFish.map((yb => ({
          ...yb,
          reachLogFishFresh: bb(yb)
        })))
      })))
    }
    class XU extends Ky {
      constructor(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new gh.d;
        super(yb, Wy, Uy), this.translate = bb, this.requestOpen = hy, this.pacer = fy, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = yb => yb, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = yb => {
          this.pages.some((bb => bb.reachLogIslandId === yb)) && (this.selected = yb, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = fy.subscribe((() => {
          this.emit()
        }))
      }
      pU(yb) {
        if (this.received = !0, "status" === yb.reachLogMessageKind) return !0 === yb.reachLogNews && this.markNews(), this.serverFresh = yb.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const bb = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== yb.reachLogMessageKind)
          if (this.pageViews = null, this.pages = YU(yb.reachLogPages, (yb => yb.reachLogFishFresh || this.heldFresh.has(yb.reachLogFishItem))), this.letGoShown = yb.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, bb) this.showPages();
          else {
            for (const yb of this.pages)
              for (const bb of yb.reachLogPageFish) bb.reachLogFishFresh && this.heldFresh.add(bb.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, this.pageViews = null, void 0 !== Wy && (this.itemName = Wy), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = YU(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var yb, bb, Wy, Uy;
        const hy = this.pages.find((yb => yb.reachLogPageFish.some((yb => yb.reachLogFishFresh))));
        if (void 0 !== hy) return hy.reachLogIslandId;
        if (null !== this.selected && this.pages.some((yb => yb.reachLogIslandId === this.selected))) return this.selected;
        return null !== (yb = null !== (bb = null === (Wy = this.pages.filter((yb => yb.reachLogIslandAwake)).at(-1)) || void 0 === Wy ? void 0 : Wy.reachLogIslandId) && void 0 !== bb ? bb : null === (Uy = this.pages[0]) || void 0 === Uy ? void 0 : Uy.reachLogIslandId) && void 0 !== yb ? yb : null
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
        return this.pages.map((yb => {
          var bb;
          return {
            id: yb.reachLogIslandId,
            name: this.translate(yb.reachLogIslandNameKey),
            awake: yb.reachLogIslandAwake,
            gold: yb.reachLogPageGold,
            caught: yb.reachLogPageFish.filter((yb => yb.reachLogFishCaught && !yb.reachLogFishVisitor)).length,
            total: yb.reachLogPageFish.filter((yb => !yb.reachLogFishVisitor)).length,
            fish: yb.reachLogPageFish.map((yb => {
              const bb = yb.reachLogFishBestKg;
              return {
                itemName: yb.reachLogFishItem,
                name: yb.reachLogFishCaught ? this.itemName(yb.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: yb.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / yb.reachLogFishChance))
                }),
                best: yb.reachLogFishCaught ? null === bb ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: bb.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: yb.reachLogFishMarks,
                ribbons: MU.map((bb => 0 !== (yb.reachLogFishRibbons & bb))),
                glimmer: 0 !== (8 & yb.reachLogFishRibbons),
                halo: 0 !== (32 & yb.reachLogFishRibbons),
                fresh: yb.reachLogFishFresh,
                visitor: yb.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (bb = yb.reachLogPageReturner) && void 0 !== bb ? bb : null)
          }
        }))
      }
      buildReturner(yb) {
        return null === yb ? null : {
          itemName: yb.reachLogReturnerFishItem,
          line: this.translate(yb.reachLogReturnerLineKey, {
            name: this.translate(yb.reachLogReturnerNameKey),
            trinket: this.translate(yb.reachLogReturnerTrinketKey)
          }),
          back: yb.reachLogReturnerBack
        }
      }
      receivePassagePhase(yb) {
        null !== this.passagePhase && this.passagePhase !== yb && (this.pagesCurrent = !1), this.passagePhase = yb
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const nU = "skyblockLampLightView";
    class uU {
      constructor(yb, bb, Wy, Uy) {
        this.EZ = yb, this.translate = bb, this.requestCommand = Wy, this.pacer = Uy, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.rh = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = yb => {
          yb ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = yb => {
          this.send(`buy ${yb}`)
        }, this.socket = yb => {
          this.send(`socket ${null!==yb&&void 0!==yb?yb:ny}`)
        }, this.wearTint = yb => {
          this.send(`tint ${null!==yb&&void 0!==yb?yb:ny}`)
        }, this.setSituation = yb => {
          this.situation = yb, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Uy.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Uy.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      pU(yb) {
        if (this.message = yb, null !== yb.lampLightShop && (this.shop = yb.lampLightShop), "open" === yb.lampLightKind && (this.refusalKey = null), "reply" === yb.lampLightKind) {
          var bb;
          const hy = null !== (bb = yb.lampLightReplyTag) && void 0 !== bb ? bb : null,
            fy = null !== hy && hy === this.offTag;
          var Wy, Uy;
          if (fy ? this.settleOff() : null !== hy && hy !== this.awaitingTag || this.settleReply(), this.refusalKey = yb.lampLightRefusalKey, null !== yb.lampLightBought && !fy) this.sparkle = {
            id: yb.lampLightBought,
            count: (null !== (Wy = null === (Uy = this.sparkle) || void 0 === Uy ? void 0 : Uy.count) && void 0 !== Wy ? Wy : 0) + 1
          }
        }
        yb.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === yb.lampLightKind && (this.lastGained = yb.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(yb) {
        yb !== this.atChair && (this.atChair = yb, yb && (this.refusalKey = null), this.emit())
      }
      setTranslator(yb, bb) {
        this.translate = yb, this.locale = null !== bb && void 0 !== bb ? bb : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.rh = !0
      }
      send(yb) {
        var bb;
        if (null !== this.awaitingTag || "ready" !== (null === (bb = this.message) || void 0 === bb ? void 0 : bb.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Wy = this.nextTag();
        this.awaitingTag = Wy, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${yb} ${Wy}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const yb = this.nextTag();
        this.offTag = yb, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${yb}`)
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
        this.rh || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
      formatLight(yb) {
        return Math.floor(yb).toLocaleString(this.locale)
      }
      formatPercent(yb) {
        const bb = 100 * yb;
        return bb >= 10 ? Math.round(bb).toLocaleString(this.locale) : bb.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(yb, bb) {
        if ("bite" === yb) return this.translate("skyblockGame:lampLightBite", {
          seconds: (bb.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === yb) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(bb.lampLightRareChance)
        });
        if ("notice" === yb) return null === bb.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(bb.lampLightNoticeChance)
        });
        const Wy = "meter" === yb ? bb.lampLightMeterCatches : bb.lampLightBloomCatches;
        return null === Wy ? null : this.translate("meter" === yb ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Wy))
        })
      }
      oddsLines(yb, bb) {
        const Wy = (yb, bb) => {
            var Wy;
            return null !== (Wy = {
              bite: bb.lampLightBiteMs,
              rare: bb.lampLightRareChance,
              meter: bb.lampLightMeterCatches,
              bloom: bb.lampLightBloomCatches,
              notice: bb.lampLightNoticeChance
            } [yb]) && void 0 !== Wy ? Wy : 0
          },
          Uy = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          hy = [];
        for (const fy of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Zy = this.formatOdds(fy, yb),
            cb = this.formatOdds(fy, bb);
          if (null === Zy || null === cb || "bite" !== fy && "rare" !== fy && Zy === cb) continue;
          const Py = Wy(fy, bb) - Wy(fy, yb),
            oy = Uy[fy] ? Py < 0 : Py > 0;
          hy.push({
            label: fy,
            before: Zy,
            after: cb,
            tone: Zy === cb ? "same" : oy ? "better" : "worse"
          })
        }
        return hy
      }
      charmView(yb, bb, Wy) {
        const Uy = yb.lampLightCharmId.charAt(0).toUpperCase() + yb.lampLightCharmId.slice(1),
          hy = "bloom" === this.situation;
        return {
          id: yb.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Uy}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Uy}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(yb.lampLightCharmCost)
          }),
          owned: yb.lampLightCharmOwned,
          affordable: Wy >= yb.lampLightCharmCost,
          socketed: bb.lampLightSocketed === yb.lampLightCharmId,
          lines: this.oddsLines(hy ? bb.lampLightBareBloom : bb.lampLightBareOpen, hy ? yb.lampLightCharmBloom : yb.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var yb, bb, Wy, Uy;
        const hy = this.message,
          fy = "ready" === (null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) ? this.shop : null,
          Zy = null !== (yb = null === hy || void 0 === hy ? void 0 : hy.lampLightBalance) && void 0 !== yb ? yb : 0,
          cb = this.atChair,
          Py = "loading" === (null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          oy = "ready" !== (null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) || cb ? null !== (bb = this.refusalKey) && void 0 !== bb ? bb : Py : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== hy && "locked" !== hy.lampLightStatus,
          status: null !== (Wy = null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) && void 0 !== Wy ? Wy : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Zy)
          }),
          releasing: null !== (Uy = null === hy || void 0 === hy ? void 0 : hy.lampLightReleasing) && void 0 !== Uy && Uy,
          gained: null === hy || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === hy || void 0 === hy ? void 0 : hy.lampLightStatus) && cb && !this.isPending(),
          situation: this.situation,
          shop: null === fy ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: fy.lampLightOddsRod,
              island: this.translate(fy.lampLightIslandNameKey)
            }),
            heldRod: null !== fy.lampLightHeldRod,
            charms: fy.lampLightCharms.map((yb => this.charmView(yb, fy, Zy))),
            tints: fy.lampLightTints.map((yb => {
              const bb = yb.lampLightTintId,
                [Wy, Uy, hy] = yb.lampLightTintColour;
              return {
                id: bb,
                name: this.translate(`skyblockGame:lampLightTint${bb.charAt(0).toUpperCase()}${bb.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(yb.lampLightTintCost)
                }),
                owned: yb.lampLightTintOwned,
                affordable: Zy >= yb.lampLightTintCost,
                wearing: fy.lampLightTint === bb,
                colour: `rgb(${Wy}, ${Uy}, ${hy})`
              }
            })),
            wearingIslandColours: null === fy.lampLightTint
          },
          notice: null === oy ? null : this.translate(oy),
          sparkle: this.sparkle
        }
      }
    }
    const rh = "skyblockMagmawardView";
    class HU {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.EZ = yb, this.now = bb, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Ly.map((() => 0)), this.wornAt = Ly.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      pU(yb) {
        var bb, Wy;
        const Uy = Ly.map(((bb, Wy) => !0 === yb.magmawardPiecesWorn[Wy]));
        if (!Uy.includes(!0)) return this.snapshot = null, void this.EZ(null);
        const hy = this.now(),
          fy = this.snapshot;
        null === fy && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Zy = yb.magmawardFuelCarried,
          cb = !Uy.includes(!1);
        let Py = null !== (bb = null === fy || void 0 === fy ? void 0 : fy.pulse) && void 0 !== bb ? bb : null,
          oy = null !== (Wy = null === fy || void 0 === fy ? void 0 : fy.flare) && void 0 !== Wy ? Wy : null;
        yb.magmawardFuelBurned ? (Py = "burn", oy = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = hy, this.flareAt = hy) : null !== fy && Zy > fy.fuel && (Py = "gain", this.pulseToken++, this.pulseAt = hy), cb && null !== fy && !fy.fullSet && (oy = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = hy, this.setLitAt = hy);
        const By = Ly.map(((yb, bb) => (Uy[bb] && null !== fy && !fy.pieces[bb].worn && (this.wornTokens[bb]++, this.wornAt[bb] = hy), {
          itemName: yb,
          worn: Uy[bb],
          wornToken: this.wornTokens[bb],
          justWorn: Uy[bb] && this.isPlaying(this.wornAt[bb], hy)
        })));
        this.snapshot = {
          pieces: By,
          wornCount: Uy.filter(Boolean).length,
          fullSet: cb,
          fuel: Zy,
          fuelState: Zy <= 0 ? "empty" : Zy <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, hy) ? Py : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, hy) ? oy : null,
          flareToken: this.flareToken,
          setLit: cb && this.isPlaying(this.setLitAt, hy),
          setLitToken: this.setLitToken
        }, this.EZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.EZ(null)
      }
      isPlaying(yb, bb) {
        return bb - yb < 1200
      }
    }
    const ah = "skyblockGlowtideView";
    class FU {
      constructor(yb) {
        this.EZ = yb, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = yb => {
          this.arrow = yb, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      pU(yb) {
        this.bloom = yb.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.EZ(null))
      }
      afterRender(yb, bb) {
        const Wy = this.bloom;
        if (null === Wy || null === yb) return;
        const Uy = Wy.glowtideBloomX - yb[0],
          fy = Wy.glowtideBloomZ - yb[2],
          Zy = Math.hypot(Uy, fy),
          cb = this.snapshot,
          Py = null !== cb && void 0 !== cb && cb.inRange ? 1 : 0,
          oy = Zy <= 12.5 + Py && yb[1] - Wy.glowtideBloomY <= 10 + Py;
        !oy || null !== cb && void 0 !== cb && cb.inRange || this.inRangeToken++;
        const By = {
          colour: Wy.glowtideBloomColour,
          inRange: oy,
          distance: Math.round(Zy),
          inRangeToken: this.inRangeToken
        };
        (null === cb || By.colour !== cb.colour || By.inRange !== cb.inRange || !oy && By.distance !== cb.distance) && (this.snapshot = By, this.EZ(By));
        const Ky = hy.c.computeShortestRotation(bb, (0, hy.zb)([Uy, 0, fy]));
        null === this.arrow || Math.abs(Ky - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Ky}rad)`, this.arrowTurn = Ky)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.EZ(null)
      }
    }
    const pU = "skyblockGlowMeterView";
    class LU {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.EZ = yb, this.now = bb, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      pU(yb) {
        const bb = this.now(),
          {
            glowMeterFill: Wy,
            glowMeterCapacity: Uy
          } = yb,
          hy = Wy >= Uy,
          fy = this.snapshot;
        null !== fy && (hy && !fy.full && (this.fullToken++, this.fullAt = bb), fy.full && !hy ? (this.burstToken++, this.burstAt = bb) : Wy > fy.fill && (this.gainToken++, this.gainAt = bb)), this.snapshot = {
          fill: Wy,
          Hy: Uy,
          ratio: Math.min(1, Math.max(0, Wy / Uy)),
          full: hy,
          rares: yb.glowMeterRares,
          ready: hy && this.isPlaying(this.fullAt, bb),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, bb),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, bb),
          gainToken: this.gainToken
        }, this.EZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.EZ(null)
      }
      isPlaying(yb, bb) {
        return bb - yb < 2e3
      }
    }
    const QU = "skyblockHushWaitView";
    class jh {
      constructor(yb) {
        this.EZ = yb, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      pU(yb) {
        let {
          hushWaitMs: bb,
          hushWaitTotalMs: Wy,
          hushWaitLines: Uy
        } = yb;
        if (this.clearTimers(), this.token++, 0 === Uy.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (bb <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Uy[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const hy = Math.max(null !== Wy && void 0 !== Wy ? Wy : bb, bb),
          fy = hy - bb,
          Zy = yb => hy * yb / Uy.length,
          cb = yb => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: hy,
              elapsedMs: fy,
              line: Uy[yb],
              lineIndex: yb
            })
          };
        let Py = 0;
        for (; Py + 1 < Uy.length && Zy(Py + 1) <= fy;) Py++;
        cb(Py);
        for (let oy = Py + 1; oy < Uy.length; oy++) this.later(Zy(oy) - fy, (() => {
          cb(oy)
        }));
        this.later(bb, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(yb) {
        this.snapshot = yb, this.EZ(yb)
      }
      later(yb, bb) {
        this.timers.push(setTimeout(bb, yb))
      }
      clearTimers() {
        for (const yb of this.timers) clearTimeout(yb);
        this.timers = []
      }
    }
    const DU = "skyblockTideChartsView",
      th = 36e5,
      wU = 864e5;

    function kh(yb, bb, Wy) {
      const [Uy, hy, fy, Zy] = yb.tideChartArea, cb = Math.floor(bb), Py = Math.floor(Wy);
      return cb >= Uy && cb <= fy && Py >= hy && Py <= Zy
    }

    function NU(yb, bb, Wy) {
      const [Uy, hy, fy, Zy] = yb.tideChartWater;
      return function(yb, bb, Wy, Uy, hy, fy) {
        const Zy = 4 - Qy(Math.floor(hy) - (yb - Wy), Wy);
        return 5 * Qy(Math.floor(fy) - (bb - Uy), Uy) + Zy
      }(Uy, hy, fy, Zy, bb, Wy)
    }

    function zh(yb, bb, Wy) {
      const Uy = yb.tideCharts;
      for (let hy = 0; hy < Uy.length; hy++)
        if (kh(Uy[hy], bb, Wy)) return Uy[hy];
      return null
    }

    function IU(yb, bb, Wy) {
      const Uy = Math.max(0, bb - Wy);
      return Uy > wU ? yb("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Uy / wU))
      }) : Uy > th ? yb("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Uy / th))
      }) : yb("skyblockGame:tideChartsTurnSoon")
    }
    class xh extends Ky {
      constructor(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(yb, Wy, Uy), this.translate = bb, this.now = hy, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.cU = yb => {
          this.picked = yb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        const bb = this.message;
        if (null !== bb)
          for (const Uy of yb.tideCharts) {
            var Wy;
            const yb = bb.tideCharts.find((yb => yb.tideChartIsland === Uy.tideChartIsland)),
              hy = Uy.tideChartLit & ~(null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.tideChartLit) && void 0 !== Wy ? Wy : 0);
            void 0 !== yb && 0 !== hy && (this.pulse = {
              island: Uy.tideChartIsland,
              cells: hy,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = yb, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(yb, bb) {
        var Wy;
        const Uy = null === this.message || Number.isNaN(yb) ? null : zh(this.message, yb, bb),
          hy = null !== (Wy = null === Uy || void 0 === Uy ? void 0 : Uy.tideChartIsland) && void 0 !== Wy ? Wy : null,
          fy = null === Uy ? -1 : function(yb, bb, Wy) {
            const [Uy, hy, fy, Zy] = yb.tideChartWater;
            return function(yb, bb, Wy, Uy, hy, fy, Zy) {
              return ((hy - yb) / (Wy + Zy)) ** 2 + ((fy - bb) / (Uy + Zy)) ** 2 <= 1
            }(Uy, hy, fy, Zy, bb, Wy, 2) ? NU(yb, bb, Wy) : -1
          }(Uy, yb, bb);
        return (hy !== this.hereIsland || fy !== this.hereCell) && (this.hereIsland = hy, this.hereCell = fy, null !== hy && (this.lastIsland = hy), !0)
      }
      afterRender(yb) {
        if (null === this.message) return;
        this.lastX = null === yb ? Number.NaN : yb[0], this.lastZ = null === yb ? Number.NaN : yb[2];
        const bb = this.locate(this.lastX, this.lastZ),
          Wy = this.expirePulses();
        (bb || Wy || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const yb = this.now();
        return !(!this.open || yb - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = yb, IU(this.translate, this.message.tideChartTurnsInMs, yb - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(yb, bb) {
        const Wy = null === this.message ? null : zh(this.message, yb, bb);
        if (null === Wy) return;
        const Uy = NU(Wy, yb, bb);
        0 === (Wy.tideChartPreBlank & 1 << Uy) && (this.cast = {
          island: Wy.tideChartIsland,
          cell: Uy,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const yb = this.now();
        let bb = !1;
        return 0 !== this.pulse.cells && yb - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, bb = !0), null !== this.cast && yb - this.cast.atMs >= 1500 && (this.cast = null, bb = !0), bb
      }
      setTranslator(yb) {
        this.translate = yb, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(yb, bb) {
        var Wy;
        return null !== (Wy = yb.tideCharts.find((yb => yb.tideChartIsland === bb))) && void 0 !== Wy ? Wy : null
      }
      describe(yb) {
        var bb, Wy, Uy;
        const hy = yb.tideChartIsland,
          fy = [];
        for (let qb = 0; qb < 25; qb++) {
          const bb = 1 << qb;
          0 !== (yb.tideChartLit & bb) ? fy.push("lit") : 0 !== (yb.tideChartClear & bb) ? fy.push("clear") : 0 !== (yb.tideChartPreBlank & bb) ? fy.push("shore") : fy.push("water")
        }
        const Zy = function(yb) {
            let bb = 0;
            for (let Wy = yb >>> 0; 0 !== Wy; Wy &= Wy - 1) bb++;
            return bb
          }(yb.tideChartLit),
          cb = yb.tideChartInkCount,
          Py = this.translate(yb.tideChartIslandNameKey),
          oy = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Zy),
            ink: String(cb)
          }),
          By = null === yb.tideChartPictureNameKey ? null : this.translate(yb.tideChartPictureNameKey),
          Ky = this.hereIsland === hy && -1 !== this.hereCell ? this.hereCell : null,
          ey = [`${Py}: ${oy}.`];
        if (null !== By && ey.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: By
          })), null !== Ky) {
          const yb = Math.floor(Ky / 5) + 1,
            bb = Ky % 5 + 1;
          ey.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(yb),
            column: String(bb)
          }))
        }
        return {
          island: hy,
          islandName: Py,
          cells: fy,
          hereCell: Ky,
          lit: Zy,
          ink: cb,
          litText: oy,
          pictureName: By,
          gridLabel: ey.join(" "),
          pulseCells: this.pulse.island === hy ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (bb = this.cast) || void 0 === bb ? void 0 : bb.island) === hy ? this.cast.cell : null,
          castToken: null !== (Wy = null === (Uy = this.cast) || void 0 === Uy ? void 0 : Uy.token) && void 0 !== Wy ? Wy : 0
        }
      }
      buildSnapshot() {
        var yb, bb, Wy;
        const Uy = this.message;
        if (null === Uy || 0 === Uy.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const hy = this.findChart(Uy, this.hereIsland),
          fy = null !== (yb = null !== (bb = null !== (Wy = this.findChart(Uy, this.open ? this.picked : null)) && void 0 !== Wy ? Wy : hy) && void 0 !== bb ? bb : this.findChart(Uy, this.lastIsland)) && void 0 !== yb ? yb : Uy.tideCharts[0],
          Zy = null === hy ? null : this.describe(hy);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Zy,
          card: fy === hy ? Zy : this.describe(fy),
          turnsText: IU(this.translate, Uy.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Uy.tideChartBookCount)
          }),
          tabs: Uy.tideCharts.map((yb => ({
            island: yb.tideChartIsland,
            name: this.translate(yb.tideChartIslandNameKey),
            selected: yb.tideChartIsland === fy.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const AU = "skyblockRegularsView",
      dU = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      yf = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function bf(yb, bb) {
      return "given" === yb ? bb.given : "owed" === yb ? bb.owed : bb.goal
    }
    class Wh extends Ky {
      constructor(yb, bb, Wy, Uy) {
        super(yb, Wy, Uy), this.translate = bb, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = yb => yb, this.openIsland = yb => {
          this.selected = yb, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = yb => {
          this.selected = yb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        this.message = yb, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const yb = this.openedFromReachLog;
        return this.openedFromReachLog = !1, yb
      }
      setTranslator(yb, bb, Wy) {
        this.translate = yb, void 0 !== Wy && (this.itemName = Wy), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(yb, bb, Wy) {
        return {
          text: this.translate(bf(yb, bb), Wy),
          given: "given" === yb
        }
      }
      describeRegular(yb, bb) {
        const Wy = this.translate,
          Uy = null !== yb.regularKg,
          hy = yb.regularMeetings,
          fy = Uy ? 0 === hy ? Wy("skyblockGame:regularsNotMet") : 1 === hy ? Wy("skyblockGame:regularsMeetingsOne") : Wy("skyblockGame:regularsMeetings", {
            count: hy
          }) : "";
        return {
          id: yb.regularId,
          name: Wy(yb.regularNameKey),
          line: Wy(yb.regularLineKey),
          itemName: yb.regularFishItem,
          fishName: this.itemName(yb.regularFishItem),
          tagged: Uy,
          size: null === yb.regularKg ? Wy("skyblockGame:regularsNotTagged") : Wy("skyblockGame:regularsSize", {
            kg: yb.regularKg.toFixed(1)
          }),
          meetings: fy,
          chance: Wy("skyblockGame:regularsChance", {
            count: yb.regularOneInCasts
          }),
          resting: yb.regularRestingToday,
          gifts: [{
            text: Wy("skyblockGame:regularsGiftFlare"),
            given: hy >= 3
          }, this.describeGift(yb.regularTintGift, dU, {
            tint: Wy(yb.regularTintNameKey)
          })],
          history: [...yb.regularHistory].reverse().map((yb => {
            const Uy = yb.regularMeetingKg.toFixed(1),
              hy = bb - yb.regularMeetingDay;
            return hy <= 0 ? Wy("skyblockGame:regularsToday", {
              kg: Uy
            }) : Wy("skyblockGame:regularsDaysAgo", {
              days: hy,
              kg: Uy
            })
          }))
        }
      }
      describeIsland(yb, bb) {
        return {
          id: yb.regularsIslandId,
          name: this.translate(yb.regularsIslandNameKey),
          charm: this.describeGift(yb.regularsCharmGift, yf, {
            charm: this.translate(yb.regularsCharmNameKey)
          }),
          regulars: yb.regularsList.map((yb => this.describeRegular(yb, bb)))
        }
      }
      buildSnapshot() {
        var yb, bb, Wy, Uy;
        const hy = this.message;
        if (null === hy) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const fy = hy.regularsIslands.map((yb => this.describeIsland(yb, hy.regularsToday))),
          Zy = null !== (yb = null !== (bb = null === (Wy = fy.find((yb => yb.id === this.selected))) || void 0 === Wy ? void 0 : Wy.id) && void 0 !== bb ? bb : null === (Uy = fy[0]) || void 0 === Uy ? void 0 : Uy.id) && void 0 !== yb ? yb : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Zy,
          islands: fy
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Uh = "skyblockHiddenWatersView";
    class hh {
      constructor(yb) {
        this.EZ = yb, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      pU(yb) {
        this.snapshot = function(yb) {
          const [bb, Wy] = yb.hiddenWatersMapSize, Uy = (yb, Uy) => ({
            left: 1 - yb / bb,
            top: Uy / Wy
          }), hy = new Map;
          for (const [Zy, cb] of yb.hiddenWatersGlimpses) {
            var fy;
            const yb = null !== (fy = hy.get(Zy)) && void 0 !== fy ? fy : [];
            yb.push(cb), hy.set(Zy, yb)
          }
          return {
            found: yb.hiddenWatersFound,
            total: yb.hiddenWatersTotal,
            aspect: Wy / bb,
            pins: yb.hiddenWatersPins.map((yb => {
              let [bb, Wy] = yb;
              return Uy(bb, Wy)
            })),
            islands: yb.hiddenWatersIslands.map((yb => {
              let [hy, fy, Zy, cb] = yb;
              const {
                left: Py,
                top: oy
              } = Uy(Zy + 1, fy);
              return {
                left: Py,
                top: oy,
                width: (Zy + 1 - hy) / bb,
                height: (cb + 1 - fy) / Wy
              }
            })),
            glimpses: hy
          }
        }(yb), this.EZ(this.snapshot)
      }
    }
    const fh = "skyblockDialogueView";
    class Zh extends Ky {
      constructor(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(yb, Wy, Uy), this.translate = bb, this.requestDialogue = hy, this.now = fy, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = yb => {
          this.selection = {
            kind: "quest",
            questId: yb
          }, this.request(), this.show()
        }, this.selectCharacter = yb => {
          this.selection = {
            kind: "character",
            npcId: yb
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      pU(yb) {
        this.received = !0, this.scripts = yb.questDialogueScripts, this.speakers = new Map(yb.questDialogueSpeakers.map((yb => [yb.dialogueSpeakerId, yb]))), this.emit()
      }
      setTranslator(yb) {
        this.translate = yb, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const yb = this.now();
        yb >= this.requestAvailableAt && (this.requestAvailableAt = yb + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var yb;
        const bb = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...bb,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Wy = this.selection;
        if ("quest" === Wy.kind) {
          const yb = this.scripts.find((yb => yb.dialogueQuestId === Wy.questId));
          return {
            ...bb,
            characters: [],
            questFocus: Wy.questId,
            conversations: yb ? [this.conversation(yb)] : []
          }
        }
        const Uy = [];
        for (let fy = this.scripts.length - 1; fy >= 0; fy--) {
          const yb = this.scripts[fy].dialogueLines;
          for (let bb = yb.length - 1; bb >= 0; bb--) Uy.includes(yb[bb].dialogueSpeakerId) || Uy.push(yb[bb].dialogueSpeakerId)
        }
        const hy = null !== Wy.npcId && Uy.includes(Wy.npcId) ? Wy.npcId : null !== (yb = Uy[0]) && void 0 !== yb ? yb : null;
        return {
          ...bb,
          characters: Uy.map((yb => {
            var bb, Wy;
            return {
              id: yb,
              styling: null !== (bb = null === (Wy = this.speakers.get(yb)) || void 0 === Wy ? void 0 : Wy.dialogueSpeakerStyling) && void 0 !== bb ? bb : yb,
              selected: yb === hy
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((yb => yb.dialogueLines.some((yb => yb.dialogueSpeakerId === hy)))).map((yb => this.conversation(yb))).reverse()
        }
      }
      conversation(yb) {
        let bb = null;
        return {
          questId: yb.dialogueQuestId,
          questName: this.translate(yb.dialogueQuestNameKey),
          completed: yb.dialogueQuestCompleted,
          lines: yb.dialogueLines.map(((yb, Wy) => {
            var Uy;
            const hy = yb.dialogueSpeakerId === bb || null === (Uy = this.speakers.get(yb.dialogueSpeakerId)) || void 0 === Uy ? void 0 : Uy.dialogueSpeakerStyling;
            return bb = yb.dialogueSpeakerId, {
              key: Wy,
              display: {
                line: {
                  translationKey: yb.dialogueLineKey,
                  params: this.params(yb.dialogueLineParams)
                },
                speakerName: hy,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(yb) {
        if (void 0 !== yb) return Object.fromEntries(Object.entries(yb).map((yb => {
          let [bb, Wy] = yb;
          return [bb, "string" === typeof Wy ? Wy : this.translate(Wy.translationKey)]
        })))
      }
    }
    var cf = Wy(530),
      Ph = Wy(1130),
      oh = Wy(94);
    const Bh = "skyblockAutographsView";

    function Kh(yb) {
      const bb = cf.i[yb];
      return {
        label: bb.chatTag.map((yb => yb.str)).join(""),
        icon: bb.icon,
        colour: bb.mainRGB
      }
    }
    class eh extends Ky {
      constructor(yb) {
        let bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = bb, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      pU(yb) {
        this.signatures = yb.autographSignatures, yb.autographOpen ? this.show() : this.emit()
      }
      setTranslator(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = bb, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var yb;
        const bb = null !== (yb = this.signatures) && void 0 !== yb ? yb : [],
          Wy = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Uy = [...bb].sort(((yb, bb) => Number(null !== bb.autographRank) - Number(null !== yb.autographRank) || bb.autographSignedAtMs - yb.autographSignedAtMs)).map((yb => ({
            key: `${yb.autographSignedAtMs}|${yb.autographSignerName}`,
            name: (0, Ph.e)(yb.autographSignerName, !oh.featureFlags.canSeeRealPlayerNames),
            rank: null === yb.autographRank ? null : Kh(yb.autographRank),
            signedOn: Wy.format(yb.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Uy,
          total: Uy.length,
          rankTotal: Uy.filter((yb => null !== yb.rank)).length
        }
      }
    }
    const qf = "skyblockHudView",
      sh = () => {},
      Sh = {
        getItem: () => null,
        setItem: sh,
        removeItem: sh
      };
    class Eh {
      constructor(yb) {
        let {
          translate: bb,
          translateWithIcons: Wy,
          setMenuOpen: Uy = sh,
          dismissMenu: hy = () => {
            Uy(!1)
          },
          publishSkills: fy = sh,
          publishQuests: Zy = sh,
          publishQuestNotification: cb = sh,
          publishDungeons: Py = sh,
          publishCollections: oy = sh,
          publishMap: By = sh,
          publishHud: Ky = sh,
          publishPortalTransit: ey = sh,
          publishDailyReward: sy = sh,
          publishMailbox: Sy = sh,
          publishQuestGraph: Ey = sh,
          publishForge: ly = sh,
          publishSmuggler: mb = sh,
          publishKeepersChair: Cy = sh,
          publishReachLog: Ty = sh,
          publishLampLight: Vy = sh,
          publishMagmaward: Jy = sh,
          publishGlowtide: Gy = sh,
          publishGlowMeter: Oy = sh,
          publishHushWait: Ry = sh,
          publishPassage: vb = sh,
          publishTideCharts: ib = sh,
          publishRegulars: My = sh,
          publishHiddenWaters: Yy = sh,
          publishDialogue: Xy = sh,
          publishAutographs: ny = sh,
          isLoadingScreenUp: uy = () => !1,
          onDailyRewardCoinLanded: rb = sh,
          onDailyRewardStarted: Hy = sh,
          onDailyRewardFinished: ab = sh,
          onDailyRewardItemLanded: Fy = sh,
          onMailboxStarted: py = sh,
          journeyStorage: Ly = Sh,
          requestTracking: Qy = sh,
          requestTravel: jb = sh,
          requestDungeonEnter: Dy = sh,
          requestQuestJump: tb = sh,
          requestQuestArrive: wy = sh,
          requestForge: kb = sh,
          requestSmuggle: Ny = sh,
          requestKeepersChairAim: zb = sh,
          requestReachLogOpen: Iy = sh,
          requestLampLight: xb = sh,
          requestDialogue: Ay = sh
        } = yb;
        this.navigation = void 0, this.map = void 0, this.compass = new gb, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new gh.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = yb => yb, this.close = () => {
          for (const yb of this.panels) yb.close()
        }, this.setMenuOpen = Uy, this.publishHud = Ky, this.portalTransit = new aU(ey, Ly), this.magmaward = new HU(Jy), this.glowtide = new FU(Gy), this.glowMeter = new LU(Oy), this.hushWait = new jh(Ry), this.dailyReward = new LW(sy, (() => uy() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (yb => {
          this.quests.setNotificationsHeld(yb)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), rb, Hy, ab, Fy);
        const dy = yb => {
          this.panels.some((yb => yb.isOpen())) || (yb ? hy() : this.setMenuOpen(!1))
        };
        this.skills = new hW(fy, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), bb, void 0, void 0, dy), this.quests = new oW(Zy, Qy, bb, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, dy, cb), this.dungeons = new eW(Py, bb, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, dy, Dy), this.collections = new uW(oy, bb, (() => {
          this.beforePanelOpen(this.collections)
        }), dy), this.map = new qb(By, jb, bb, (() => {
          this.beforePanelOpen(this.map)
        }), dy), this.questGraph = new IW(Ey, bb, (() => {
          this.beforePanelOpen(this.questGraph)
        }), dy, tb, wy, Ly), this.forge = new sU(ly, bb, (() => {
          this.beforePanelOpen(this.forge)
        }), dy, kb), this.smuggler = new lU(mb, bb, (() => {
          this.beforePanelOpen(this.smuggler)
        }), dy, Ny), this.lampLight = new uU(Vy, bb, xb, this.commandPacer), this.keepersChair = new OU(Cy, bb, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (yb => {
          this.lampLight.onChairClosed(), dy(yb)
        }), zb, Date.now, this.commandPacer), this.reachLog = new XU(Ty, bb, (() => {
          this.beforePanelOpen(this.reachLog)
        }), dy, Iy, this.commandPacer), this.passage = new JU(vb, bb, (() => {
          this.beforePanelOpen(this.passage)
        }), dy), this.tideCharts = new xh(ib, bb, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), dy), this.regulars = new Wh(My, bb, (() => {
          this.beforePanelOpen(this.regulars)
        }), (yb => {
          this.regulars.takeReturnToReachLog() && !yb && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), dy(yb)
        })), this.hiddenWaters = new hh(Yy), this.dialogue = new Zh(Xy, bb, (() => {
          this.beforePanelOpen(this.dialogue)
        }), dy, Ay), this.autographs = new eh(ny, (() => {
          this.beforePanelOpen(this.autographs)
        }), dy), this.mailbox = new tU(Sy, (() => uy() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), py), this.quests.translateWithIcons = null !== Wy && void 0 !== Wy ? Wy : null, this.skills.onLevelUp = yb => {
          this.quests.notify(yb)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new WW(this.map, this.quests, this.compass, bb)
      }
      getHudSnapshot() {
        const yb = this.hudSnapshot,
          bb = this.dailyReward.getHeldCoins();
        return null === yb || bb <= 0 || !("hudPurseCoins" in yb) ? yb : {
          ...yb,
          hudPurseCoins: Math.max(0, yb.hudPurseCoins - bb)
        }
      }
      receiveHud(yb) {
        this.hudSnapshot = yb, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(yb) {
        this.setMenuOpen(!0);
        const bb = yb === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = yb;
        for (const Wy of this.panels) Wy === yb || bb && Wy === this.reachLog || Wy.close();
        this.openingPanel = null
      }
      setTranslator(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => this.resolveItemName(bb, yb);
        this.quests.translateWithIcons = null !== Wy && void 0 !== Wy ? Wy : null, this.navigation.setTranslator(yb, bb), this.lampLight.setTranslator(yb, bb), this.mailbox.setItemName(Uy);
        for (const hy of this.panels) hy.setTranslator(yb, bb, Uy)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const yb of this.panels) yb.dispose()
      }
    }
    var lh = Wy(898),
      mf = Wy.n(lh),
      Ch = Wy(19),
      Th = Wy(35370),
      Vh = Wy(2714),
      Jh = Wy(1556),
      gf = Wy(1546),
      Gh = Wy(8431),
      Oh = Wy(1042),
      Rh = Wy(1268),
      vf = Wy(952);

    function Mh(yb) {
      let {
        controller: bb,
        minimap: Wy,
        children: Uy
      } = yb;
      const fy = (0, Rh.m)(qf, bb.getHudSnapshot()),
        [Zy, cb] = (0, Oy.useState)(bb.skills.getSnapshot().overallLevel);
      (0, Rh.i)(UW, (yb => {
        cb(yb.overallLevel)
      }));
      const Py = (0, Oy.useRef)(null);
      (0, Rh.i)(pW, (yb => {
        ! function(yb, bb) {
          if (null === yb || "function" !== typeof yb.animate) return;
          const Wy = bb ? 1.35 : 1.15;
          yb.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Wy})`
          }, {
            transform: "scale(1)"
          }], {
            duration: bb ? 320 : 160,
            easing: "ease-out"
          }), yb.classList.toggle("Receiving", !bb), bb && (yb.classList.remove("Shine"), yb.offsetWidth, yb.classList.add("Shine"))
        }(Py.current, yb)
      }));
      const {
        t: oy
      } = (0, Oh.D)(), {
        isTouchScreen: By
      } = (0, Ch.h)(["isTouchScreen"]), [Ky, ey] = (0, Oy.useState)(null);
      return (0, Vh.j)(Ky, ".SkyblockRightHud"), null !== fy || Wy ? (0, vf.jsx)(Th.f, {
        placement: "topRight",
        children: (0, vf.jsxs)("div", {
          className: mf()("SkyblockRightHud", {
            TouchScreen: By
          }),
          children: [Wy, null !== fy && (0, vf.jsxs)("div", {
            ref: ey,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in fy ? (0, vf.jsx)("div", {
              className: "SkyblockHudHelp",
              children: fy.hudHelpText
            }) : (0, vf.jsxs)(vf.Fragment, {
              children: [(0, vf.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, vf.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, vf.jsx)("strong", {
                    style: {
                      color: hy.K.cyanUiText
                    },
                    children: oy(fy.hudZoneNameKey)
                  }), null !== Zy && (0, vf.jsx)("span", {
                    style: {
                      color: hy.K.goldUiText
                    },
                    children: oy("skyblockGame:level", {
                      level: (0, Gh.e)(Zy)
                    })
                  })]
                }), (0, vf.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Py,
                  children: [(0, vf.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Gh.e)(fy.hudPurseCoins)]
                })]
              }), fy.hudClockText.length > 0 && (0, vf.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, vf.jsx)(gf.d, {
                  text: fy.hudClockText
                })
              })]
            }), Uy, "hudZoneNameKey" in fy && (0, vf.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Yh(yb) {
      let {
        icon: bb
      } = yb;
      const Wy = (0, Oy.useCallback)((yb => {
        null === yb || void 0 === yb || yb.replaceChildren(Db(bb))
      }), [bb]);
      return (0, vf.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Wy
      })
    }

    function Xh(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)();
      return (0, vf.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: bb.display.mountPlayer,
        title: Wy("skyblockGame:mapYouAreHere"),
        children: (0, vf.jsx)(Yh, {
          icon: "player"
        })
      })
    }
    const nh = Wy(37232),
      uh = Object.fromEntries(nh.keys().map((yb => [yb.replace(/^\.\/(.*)\.png$/, "$1"), nh(yb)])));

    function rf(yb, bb) {
      var Wy;
      return null !== (Wy = uh[yb]) && void 0 !== Wy ? Wy : uh[bb]
    }

    function Hh(yb) {
      let {
        imageKey: bb,
        fallbackImageKey: Wy,
        geometryKey: Uy,
        alt: hy,
        className: fy
      } = yb;
      const [Zy, cb] = (0, Oy.useState)((() => function(yb, bb) {
        return [{
          id: 0,
          imageKey: yb,
          geometryKey: bb,
          phase: "shown"
        }]
      }(bb, Uy))), Py = function(yb, bb, Wy) {
        const Uy = yb[yb.length - 1];
        if (Uy.imageKey === bb && Uy.geometryKey === Wy) return yb;
        const hy = {
          id: Uy.id + 1,
          imageKey: bb,
          geometryKey: Wy,
          phase: "entering"
        };
        return Uy.geometryKey === Wy ? [{
          ...Uy,
          phase: "leaving"
        }, hy] : [hy]
      }(Zy, bb, Uy);
      return Py !== Zy && cb(Py), (0, vf.jsx)(vf.Fragment, {
        children: Py.map((yb => (0, vf.jsx)("img", {
          className: mf()("SkyblockMapTerrainImage", fy, {
            Entering: "entering" === yb.phase,
            Leaving: "leaving" === yb.phase
          }),
          src: rf(yb.imageKey, Wy),
          alt: "leaving" === yb.phase ? "" : hy,
          onAnimationEnd: () => {
            cb((bb => function(yb, bb) {
              return yb.flatMap((yb => yb.id !== bb ? [yb] : "leaving" === yb.phase ? [] : [{
                ...yb,
                phase: "shown"
              }]))
            }(bb, yb.id)))
          }
        }, yb.id)))
      })
    }
    var af = Wy(3732),
      Fh = Wy(1273);

    function ph(yb) {
      if ("Tab" !== yb.key) return;
      const bb = Array.from(yb.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Wy = bb.indexOf(document.activeElement);
      var Uy;
      if (yb.shiftKey && Wy <= 0) yb.preventDefault(), null === (Uy = bb.at(-1)) || void 0 === Uy || Uy.focus();
      else if (!yb.shiftKey && (-1 === Wy || Wy === bb.length - 1)) {
        var hy;
        yb.preventDefault(), null === (hy = bb[0]) || void 0 === hy || hy.focus()
      }
    }

    function Lh() {
      const yb = (0, Oy.useRef)(null);
      return (0, Oy.useCallback)((bb => {
        var Wy;
        bb ? (yb.current = document.activeElement, bb.focus()) : null === (Wy = yb.current) || void 0 === Wy || Wy.focus()
      }), [])
    }

    function Qh(yb) {
      let {
        percent: bb,
        label: Wy,
        levelUpToken: Uy,
        colour: hy
      } = yb;
      return (0, vf.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Wy,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": bb,
        "aria-valuetext": Wy,
        children: [(0, vf.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${bb/100})`
          }
        }), null !== Uy && void 0 !== Uy && (0, vf.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": hy
          }
        }, Uy)]
      })
    }

    function jf(yb) {
      let {
        mount: bb
      } = yb;
      return (0, vf.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: bb,
        hidden: !0,
        children: (0, vf.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, vf.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, vf.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Dh(yb, bb, Wy, Uy) {
      (0, Oy.useLayoutEffect)((() => {
        const hy = yb.current;
        if (!Wy || null === bb || void 0 === bb || !bb.local || !hy) return;
        const fy = Array.from(hy.querySelectorAll(".SkyblockMapNode")),
          Zy = [...bb.points, ...bb.portals],
          cb = () => {
            const yb = hy.clientWidth,
              Wy = hy.clientHeight,
              cb = fy.map(((hy, fy) => {
                const cb = Zy[fy];
                return {
                  id: cb.id,
                  portal: fy >= bb.points.length,
                  x: cb.position[0] * yb / 100,
                  y: cb.position[1] * Wy / 100,
                  width: hy.offsetWidth / Uy,
                  height: hy.offsetHeight / Uy
                }
              })),
              Py = new Map(Zy.map(((yb, bb) => [yb.id, fy[bb]])));
            for (const bb of function(yb, bb, Wy) {
                const Uy = [],
                  hy = [...yb].sort(((yb, bb) => Number(bb.portal) - Number(yb.portal) || yb.id.localeCompare(bb.id)));
                for (const fy of hy) {
                  const yb = yb => Math.max(fy.width / 2, Math.min(bb - fy.width / 2, yb)),
                    hy = yb => Math.max(fy.height / 2, Math.min(Wy - fy.height / 2, yb)),
                    Zy = [yb(fy.x)],
                    cb = [hy(fy.y)];
                  for (const bb of Uy) Zy.push(yb(bb.x - (bb.width + fy.width) / 2 - 4), yb(bb.x + (bb.width + fy.width) / 2 + 4)), cb.push(hy(bb.y - (bb.height + fy.height) / 2 - 4), hy(bb.y + (bb.height + fy.height) / 2 + 4));
                  let Py = {
                      ...fy,
                      x: Zy[0],
                      y: cb[0]
                    },
                    oy = 1 / 0,
                    By = 1 / 0;
                  for (const bb of new Set(Zy))
                    for (const yb of new Set(cb)) {
                      let Wy = 0;
                      for (const Zy of Uy) Wy += Math.max(0, (fy.width + Zy.width) / 2 + 4 - Math.abs(bb - Zy.x)) * Math.max(0, (fy.height + Zy.height) / 2 + 4 - Math.abs(yb - Zy.y));
                      const hy = (bb - fy.x) ** 2 + (yb - fy.y) ** 2;
                      (Wy < oy || Wy === oy && hy < By) && (Py = {
                        ...fy,
                        x: bb,
                        y: yb
                      }, oy = Wy, By = hy)
                    }
                  Uy.push(Py)
                }
                return Uy
              }(cb, yb, Wy)) {
              const yb = Py.get(bb.id);
              yb.style.left = `${bb.x}px`, yb.style.top = `${bb.y}px`
            }
          };
        cb();
        const Py = new ResizeObserver(cb);
        Py.observe(hy);
        for (const yb of fy) Py.observe(yb);
        return () => {
          Py.disconnect()
        }
      }), [yb, bb, Wy, Uy])
    }
    const tf = {
        zoom: 1,
        x: 0,
        y: 0
      },
      wh = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function kf(yb, bb, Wy) {
      return Math.min(Wy, Math.max(bb, yb))
    }

    function Nh(yb, bb, Wy) {
      const Uy = Math.min(1, Wy * bb / yb),
        hy = Math.min(1, yb / (Wy * bb));
      return {
        x0: (1 - Uy) / 2,
        y0: (1 - hy) / 2,
        x1: (1 + Uy) / 2,
        y1: (1 + hy) / 2
      }
    }

    function zf(yb, bb, Wy, Uy) {
      const hy = bb * (Uy - Wy);
      if (hy <= 1) return .5 - bb * (Wy + Uy) / 2;
      const fy = .45 * Math.min(1, hy - 1);
      return kf(yb, 1 - bb * Uy - fy, fy - bb * Wy)
    }

    function Ih(yb, bb) {
      const Wy = kf(yb.zoom, 1, 12);
      return {
        zoom: Wy,
        x: zf(yb.x, Wy, bb.x0, bb.x1),
        y: zf(yb.y, Wy, bb.y0, bb.y1)
      }
    }

    function xf(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wh;
      const fy = kf(yb.zoom * bb, 1, 12),
        Zy = fy / yb.zoom;
      return Ih({
        zoom: fy,
        x: Wy - (Wy - yb.x) * Zy,
        y: Uy - (Uy - yb.y) * Zy
      }, hy)
    }

    function Ah(yb, bb, Wy, Uy) {
      const [hy, fy] = (0, Oy.useState)(tf);
      (0, Oy.useEffect)((() => {
        fy(tf)
      }), [Wy]), (0, Oy.useEffect)((() => {
        const Wy = yb.current;
        if (!bb || !Wy) return;
        const hy = () => Nh(Wy.clientWidth, Wy.clientHeight, Uy),
          Zy = yb => {
            const bb = Wy.getBoundingClientRect();
            return {
              x: (yb.clientX - bb.left) / bb.width,
              y: (yb.clientY - bb.top) / bb.height
            }
          },
          cb = new Map;
        let Py = {
            x: 0,
            y: 0
          },
          oy = !1,
          By = 0;
        const Ky = yb => {
            yb.preventDefault();
            const bb = yb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * yb.deltaY : yb.deltaY,
              Wy = Zy(yb);
            fy((yb => xf(yb, Math.exp(.0015 * -bb), Wy.x, Wy.y, hy())))
          },
          ey = yb => {
            "mouse" === yb.pointerType && 0 !== yb.button || (cb.set(yb.pointerId, Zy(yb)), 1 === cb.size && (Py = {
              x: yb.clientX,
              y: yb.clientY
            }, oy = !1), By = 0)
          },
          qb = yb => {
            const bb = cb.get(yb.pointerId);
            if (!bb) return;
            const Uy = Zy(yb);
            if (cb.set(yb.pointerId, Uy), 2 === cb.size) {
              const [yb, bb] = [...cb.values()], Wy = Math.hypot(yb.x - bb.x, yb.y - bb.y);
              if (By > 0) {
                const Uy = Wy / By;
                fy((Wy => xf(Wy, Uy, (yb.x + bb.x) / 2, (yb.y + bb.y) / 2, hy())))
              }
              return By = Wy, void(oy = !0)
            }!oy && Math.hypot(yb.clientX - Py.x, yb.clientY - Py.y) < 4 || (oy || (oy = !0, Wy.setPointerCapture(yb.pointerId)), fy((yb => function(yb, bb, Wy) {
              let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wh;
              return Ih({
                zoom: yb.zoom,
                x: yb.x + bb,
                y: yb.y + Wy
              }, Uy)
            }(yb, Uy.x - bb.x, Uy.y - bb.y, hy()))))
          },
          sy = yb => {
            cb.delete(yb.pointerId), By = 0
          },
          Sy = yb => {
            oy && (yb.stopPropagation(), yb.preventDefault(), oy = !1)
          },
          Ey = new ResizeObserver((() => {
            fy((yb => Ih(yb, hy())))
          }));
        return Ey.observe(Wy), Wy.addEventListener("wheel", Ky, {
          passive: !1
        }), Wy.addEventListener("pointerdown", ey), Wy.addEventListener("pointermove", qb), Wy.addEventListener("pointerup", sy), Wy.addEventListener("pointercancel", sy), Wy.addEventListener("click", Sy, !0), () => {
          Ey.disconnect(), Wy.removeEventListener("wheel", Ky), Wy.removeEventListener("pointerdown", ey), Wy.removeEventListener("pointermove", qb), Wy.removeEventListener("pointerup", sy), Wy.removeEventListener("pointercancel", sy), Wy.removeEventListener("click", Sy, !0)
        }
      }), [yb, bb, Wy, Uy]);
      return {
        view: hy,
        zoomBy: bb => {
          const Wy = yb.current;
          Wy && fy((yb => xf(yb, bb, .5, .5, Nh(Wy.clientWidth, Wy.clientHeight, Uy))))
        }
      }
    }

    function dh(yb) {
      var bb, Wy, Uy, hy;
      let {
        controller: fy,
        navigation: Zy
      } = yb;
      const cb = (0, Rh.m)(ey, fy.getSnapshot()),
        {
          t: Py
        } = (0, Oh.D)(),
        oy = Lh(),
        By = cb.presentation,
        Ky = (0, Oy.useRef)(null),
        qb = (0, Oy.useRef)(null),
        sy = Boolean(cb.open && (null === By || void 0 === By ? void 0 : By.local) && By.background),
        Sy = Ah(Ky, sy, `${cb.open}|${cb.tab}|${null===By||void 0===By||null===(bb=By.background)||void 0===bb?void 0:bb.geometryKey}`, null !== (Wy = null === By || void 0 === By || null === (Uy = By.background) || void 0 === Uy ? void 0 : Uy.ratio) && void 0 !== Wy ? Wy : 2);
      if (Dh(qb, By, cb.open, Sy.view.zoom), !By || !cb.open) return null;
      const Ey = By.local ? By.background : null,
        ly = {
          "--map-ratio": String(null !== (hy = null === Ey || void 0 === Ey ? void 0 : Ey.ratio) && void 0 !== hy ? hy : 2),
          backgroundColor: null === Ey || void 0 === Ey ? void 0 : Ey.colour
        },
        mb = {
          "--map-zoom": String(Sy.view.zoom),
          transform: `translate(${100*Sy.view.x}%, ${100*Sy.view.y}%) scale(${Sy.view.zoom})`
        };
      return (0, vf.jsx)(af.c, {
        show: cb.open,
        close: fy.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: oy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, vf.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Py("skyblockGame:map")
              }), By.minimap && (0, vf.jsx)("p", {
                children: By.minimap.caption
              })]
            }), (0, vf.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((yb => (0, vf.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": yb === cb.tab ? "true" : void 0,
                className: mf()({
                  Selected: yb === cb.tab
                }),
                "aria-pressed": yb === cb.tab,
                onClick: () => {
                  fy.selectTab(yb)
                },
                children: Py("local" === yb ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, yb)))
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: fy.dismiss
            })]
          }), (0, vf.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, vf.jsxs)("div", {
              ref: Ky,
              className: mf()("SkyblockMapCanvas", {
                Local: By.local,
                Overview: !By.local,
                Zoomed: Sy.view.zoom > 1
              }),
              style: ly,
              children: [(0, vf.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: sy ? mb : void 0,
                children: (0, vf.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: qb,
                  children: [Ey && (0, vf.jsx)(Hh, {
                    className: "SkyblockMapTerrain",
                    imageKey: Ey.imageKey,
                    fallbackImageKey: Ey.fallbackImageKey,
                    geometryKey: Ey.geometryKey,
                    alt: Ey.label
                  }), By.local && (0, vf.jsx)(jf, {
                    mount: Zy.display.mountMapSearchArea
                  }), !By.local && (0, vf.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: By.connections.map((yb => (0, vf.jsx)("line", {
                      className: mf()({
                        Explored: yb.explored
                      }),
                      x1: yb.start[0],
                      y1: yb.start[1],
                      x2: yb.end[0],
                      y2: yb.end[1]
                    }, yb.id)))
                  }), By.points.map((yb => {
                    const bb = !By.local && yb.thumbnail ? uh[yb.thumbnail] : void 0;
                    return (0, vf.jsxs)("div", {
                      className: mf()("SkyblockMapNode", {
                        Current: yb.current
                      }),
                      style: {
                        left: `${yb.position[0]}%`,
                        top: `${yb.position[1]}%`
                      },
                      children: [(0, vf.jsxs)(Fh.f, {
                        className: mf()("SkyblockMapPin", {
                          Unknown: !yb.visited,
                          Current: yb.current
                        }),
                        disabled: cb.pending,
                        onClick: () => {
                          fy.travel(yb.travelKind, yb.travelId)
                        },
                        children: [bb && (0, vf.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: bb,
                          alt: ""
                        }), !bb && (0, vf.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, vf.jsx)(Yh, {
                            icon: yb.icon
                          })
                        }), (0, vf.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: yb.name
                        })]
                      }), yb.current && (0, vf.jsx)("span", {
                        className: mf()("SkyblockMapHereBadge", {
                          Above: yb.position[1] > 50
                        }),
                        children: Py("skyblockGame:mapYouAreHere")
                      })]
                    }, yb.id)
                  })), By.portals.map((yb => (0, vf.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${yb.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${yb.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, vf.jsxs)(Fh.f, {
                      className: "SkyblockMapPin",
                      disabled: cb.pending,
                      onClick: () => {
                        fy.travel(yb.travelKind, yb.travelId)
                      },
                      children: [(0, vf.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: yb.colour
                        },
                        "aria-hidden": "true",
                        children: (0, vf.jsx)(Yh, {
                          icon: yb.icon
                        })
                      }), (0, vf.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: yb.name
                      })]
                    })
                  }, yb.id))), By.local && (0, vf.jsx)(Xh, {
                    controller: Zy
                  })]
                })
              }), sy && (0, vf.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, vf.jsx)("button", {
                  type: "button",
                  "aria-label": Py("skyblockGame:mapZoomIn"),
                  disabled: Sy.view.zoom >= 12,
                  onClick: () => {
                    Sy.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, vf.jsx)("button", {
                  type: "button",
                  "aria-label": Py("skyblockGame:mapZoomOut"),
                  disabled: Sy.view.zoom <= 1,
                  onClick: () => {
                    Sy.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, vf.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: cb.feedback
              })]
            })
          }), (0, vf.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [By.progress && (0, vf.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, vf.jsx)("span", {
                children: By.progress
              }), (0, vf.jsx)(Qh, {
                percent: By.percent,
                label: By.progress
              })]
            }), By.noLandmarks && (0, vf.jsx)("span", {
              children: Py("skyblockGame:mapNoLandmarks")
            }), By.canTravel && (0, vf.jsx)("span", {
              className: "SkyblockMapHint",
              children: Py("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function yZ(yb) {
      let {
        view: bb,
        controller: Wy,
        navigation: Uy
      } = yb;
      const {
        t: hy
      } = (0, Oh.D)(), {
        isTouchScreen: fy
      } = (0, Ch.h)(["isTouchScreen"]);
      return (0, vf.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": hy("skyblockGame:mapLocal"),
        children: [fy && (0, vf.jsx)(Fh.f, {
          className: "SkyblockMinimapOpen",
          onClick: Wy.showLocal,
          children: hy("skyblockGame:map")
        }), (0, vf.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: bb.colour
          },
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Uy.display.mountTerrain,
            style: {
              width: bb.width,
              height: bb.height
            },
            children: [(0, vf.jsx)(Hh, {
              imageKey: bb.imageKey,
              fallbackImageKey: bb.fallbackImageKey,
              geometryKey: bb.geometryKey,
              alt: bb.label
            }), (0, vf.jsx)(jf, {
              mount: Uy.display.mountMinimapSearchArea
            }), bb.markers.map((yb => (0, vf.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${yb.position[0]}%`,
                top: `${yb.position[1]}%`,
                color: yb.colour
              },
              title: yb.name,
              children: (0, vf.jsx)(Yh, {
                icon: yb.icon
              })
            }, yb.id)))]
          }), (0, vf.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: hy("skyblockGame:mapYouAreHere"),
            children: (0, vf.jsx)(Yh, {
              icon: "player"
            })
          })]
        }), (0, vf.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: bb.caption
        })]
      })
    }

    function bZ(yb) {
      let {
        controller: bb
      } = yb;
      return (0, vf.jsxs)("div", {
        className: "SkyblockCompass",
        ref: bb.display.mountCompass,
        children: [(0, vf.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, vf.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, vf.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Wf(yb) {
      let {
        controller: bb,
        surface: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)(), hy = (0, Rh.m)(UW, bb.getSnapshot()), fy = Lh();
      return hy.enabled ? (0, vf.jsxs)(vf.Fragment, {
        children: ["hud" === Wy && (0, vf.jsx)(Th.f, {
          placement: "statBars",
          children: hy.hud && (0, vf.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": hy.hud.colour
            },
            children: [(0, vf.jsx)(Qh, {
              percent: hy.hud.skill.percent,
              label: hy.hud.skill.xp,
              levelUpToken: hy.hud.levelUpToken,
              colour: hy.hud.colour
            }), (0, vf.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, vf.jsxs)("span", {
                children: [hy.hud.skill.label, " \xb7 ", hy.hud.skill.level]
              }), (0, vf.jsx)("span", {
                children: hy.hud.gain
              })]
            })]
          })
        }), "hud" === Wy && (0, vf.jsx)(Th.f, {
          children: hy.hud && (0, vf.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, vf.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, vf.jsx)("strong", {
                children: hy.hud.skill.label
              }), (0, vf.jsx)("span", {
                children: hy.hud.gain
              })]
            }), (0, vf.jsx)(Qh, {
              percent: hy.hud.skill.percent,
              label: hy.hud.skill.xp,
              levelUpToken: hy.hud.levelUpToken,
              colour: hy.hud.colour
            }), (0, vf.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, vf.jsx)("span", {
                children: hy.hud.skill.level
              }), (0, vf.jsx)("span", {
                children: hy.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Wy && (0, vf.jsx)(af.c, {
          show: hy.open,
          close: bb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, vf.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: fy,
            onKeyDown: ph,
            children: [(0, vf.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, vf.jsxs)("div", {
                children: [(0, vf.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Uy("skyblockGame:skills")
                }), (0, vf.jsx)("p", {
                  children: Uy("skyblockGame:skillsIntro")
                })]
              }), (0, vf.jsx)(Fh.h, {
                padIgnore: !0,
                onClick: bb.dismiss
              })]
            }), (0, vf.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, vf.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: hy.skills.map((yb => (0, vf.jsxs)(Fh.f, {
                  className: mf()("SkyblockSkillCard", {
                    Selected: yb.selected
                  }),
                  ariaPressed: yb.selected,
                  onClick: () => {
                    bb.select(yb.id)
                  },
                  children: [(0, vf.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: yb.icon,
                      amount: 0
                    })
                  }), (0, vf.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, vf.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, vf.jsx)("strong", {
                        children: yb.label
                      }), (0, vf.jsx)("span", {
                        children: yb.level
                      })]
                    }), (0, vf.jsx)(Qh, {
                      percent: yb.percent,
                      label: `${yb.label}: ${yb.xp}`
                    }), (0, vf.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: yb.xp
                    })]
                  })]
                }, yb.id)))
              }), hy.detail && (0, vf.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, vf.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, vf.jsx)(Jh.d, {
                    itemName: hy.detail.icon,
                    amount: 0
                  })
                }), (0, vf.jsx)("h3", {
                  children: hy.detail.label
                }), (0, vf.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: hy.detail.level
                }), (0, vf.jsx)("p", {
                  children: hy.detail.description
                }), (0, vf.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, vf.jsx)("strong", {
                    children: Uy("skyblockGame:currentBenefit")
                  }), (0, vf.jsx)("span", {
                    children: hy.detail.benefit
                  })]
                }), (0, vf.jsx)(Qh, {
                  percent: hy.detail.percent,
                  label: hy.detail.xp
                }), (0, vf.jsx)("p", {
                  children: hy.detail.xp
                }), (0, vf.jsx)("h4", {
                  children: Uy("skyblockGame:earnXp")
                }), (0, vf.jsx)("ul", {
                  children: hy.detail.sources.map((yb => (0, vf.jsx)("li", {
                    children: yb
                  }, yb)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Uf = Wy(1217),
      hf = Wy(4046),
      ff = Wy(248);

    function Zf(yb) {
      let {
        item: bb
      } = yb;
      return (0, vf.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, vf.jsx)(Jh.d, {
          itemName: bb,
          amount: 0
        })
      })
    }

    function cZ(yb) {
      let {
        name: bb,
        percent: Wy,
        progress: Uy
      } = yb;
      return (0, vf.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, vf.jsx)(Qh, {
          percent: Wy,
          label: `${(0,ff.rb)(bb)}: ${Uy}`
        }), (0, vf.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Uy
        })]
      })
    }

    function Pf(yb) {
      let {
        subquests: bb,
        showDescriptions: Wy = !1
      } = yb;
      return (0, vf.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: bb.map((yb => {
          const bb = Wy && "completed" === yb.status,
            Uy = (0, vf.jsxs)("li", {
              className: mf()("SkyblockQuestStep", yb.status, {
                JustFinished: yb.justFinished,
                JustUnlocked: yb.justUnlocked
              }),
              tabIndex: bb ? 0 : void 0,
              children: [null !== yb.iconItem && (0, vf.jsx)(Zf, {
                item: yb.iconItem
              }), null === yb.iconItem && (0, vf.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === yb.status ? "\u2713" : "skipped" === yb.status ? "\u2212" : "\u25cb"
              }), (0, vf.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, vf.jsx)("strong", {
                  children: (0, vf.jsx)(hf.c, {
                    text: yb.name
                  })
                }), Wy && !bb && (0, vf.jsx)("span", {
                  children: (0, vf.jsx)(hf.c, {
                    text: yb.description
                  })
                }), null !== yb.barPercent && (0, vf.jsx)(cZ, {
                  name: yb.name,
                  percent: yb.barPercent,
                  progress: yb.progress
                }), null === yb.barPercent && !bb && (0, vf.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: yb.statusLabel
                })]
              })]
            }, yb.id);
          return bb ? (0, vf.jsx)(Uf.f, {
            delayShow: 200,
            tooltipInner: (0, vf.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, vf.jsx)("span", {
                children: (0, vf.jsx)(hf.c, {
                  text: yb.description
                })
              }), (0, vf.jsx)("strong", {
                children: yb.statusLabel
              })]
            }),
            children: Uy
          }, yb.id) : Uy
        }))
      })
    }

    function of(yb) {
      let {
        quest: bb,
        select: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)(), hy = bb.focusStep;
      return (0, vf.jsxs)(Fh.f, {
        className: mf()("SkyblockQuestCard", {
          Selected: bb.selected,
          Tracked: bb.tracked
        }),
        onClick: () => {
          Wy(bb.id)
        },
        children: [(0, vf.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, vf.jsx)("strong", {
            children: (0, vf.jsx)(hf.c, {
              text: bb.name
            })
          }), bb.tracked && (0, vf.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Uy("skyblockGame:currentQuest")
          })]
        }), hy && (0, vf.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== hy.iconItem && (0, vf.jsx)(Zf, {
            item: hy.iconItem
          }), (0, vf.jsx)(cZ, {
            name: hy.name,
            percent: hy.barPercent,
            progress: hy.progress
          })]
        }), (0, vf.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: bb.progress
        })]
      })
    }

    function Bf(yb) {
      let {
        controller: bb,
        surface: Wy
      } = yb;
      const Uy = (0, Rh.m)(cU, bb.getSnapshot()),
        {
          t: hy
        } = (0, Oh.D)(),
        fy = Lh();
      return Uy.enabled ? (0, vf.jsxs)(vf.Fragment, {
        children: ["hud" === Wy && (0, vf.jsx)(vf.Fragment, {
          children: Uy.tracked && (0, vf.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: ZW,
            children: (0, vf.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Uy.trackedStepPulse > 0 && (0, vf.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Uy.trackedStepPulse), (0, vf.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: hy("skyblockGame:currentQuest")
              }), (0, vf.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, vf.jsx)("strong", {
                  children: (0, vf.jsx)(hf.c, {
                    text: Uy.tracked.name
                  })
                }), null !== Uy.tracked.clock && (0, vf.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Uy.tracked.clock
                })]
              }), (0, vf.jsx)(Pf, {
                subquests: Uy.tracked.subquests
              })]
            })
          })
        }), "menu" === Wy && (0, vf.jsx)(af.c, {
          show: Uy.open,
          close: bb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, vf.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: fy,
            onKeyDown: ph,
            children: [(0, vf.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, vf.jsx)("div", {
                children: (0, vf.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: hy("skyblockGame:quests")
                })
              }), (0, vf.jsx)(Fh.h, {
                padIgnore: !0,
                onClick: bb.dismiss
              })]
            }), (0, vf.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, vf.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, vf.jsx)("h3", {
                  children: hy("skyblockGame:current")
                }), 0 === Uy.active.length && (0, vf.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: hy("skyblockGame:noActiveQuests")
                }), Uy.active.map((yb => (0, vf.jsx)(of, {
                  quest: yb,
                  select: bb.select
                }, yb.id))), (0, vf.jsx)("h3", {
                  children: (0, vf.jsxs)("button", {
                    type: "button",
                    className: mf()("SkyblockQuestSectionToggle", {
                      Expanded: Uy.completedExpanded
                    }),
                    "aria-expanded": Uy.completedExpanded,
                    onClick: bb.toggleCompleted,
                    children: [(0, vf.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), hy("skyblockGame:completed"), (0, vf.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Uy.completed.length
                    })]
                  })
                }), Uy.completedExpanded && 0 === Uy.completed.length && (0, vf.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: hy("skyblockGame:noCompletedQuests")
                }), Uy.completedExpanded && Uy.completed.map((yb => (0, vf.jsx)(of, {
                  quest: yb,
                  select: bb.select
                }, yb.id)))]
              }), Uy.detail && (0, vf.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Uy.detail.completed && (0, vf.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: hy("skyblockGame:completedQuest")
                }), (0, vf.jsx)("h3", {
                  children: (0, vf.jsx)(hf.c, {
                    text: Uy.detail.name
                  })
                }), (0, vf.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, vf.jsx)(hf.c, {
                    text: Uy.detail.description
                  })
                }), (0, vf.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Uy.detail.progress, null !== Uy.detail.clock && (0, vf.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Uy.detail.clock
                  })]
                }), (0, vf.jsx)(Pf, {
                  subquests: Uy.detail.subquests,
                  showDescriptions: !0
                }), Uy.detail.tracked && (0, vf.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Uy.detail.trackLabel
                }), !Uy.detail.completed && !Uy.detail.tracked && (0, vf.jsx)(Fh.i, {
                  onClick: bb.trackSelected,
                  disabled: !Uy.detail.canTrack,
                  children: Uy.detail.trackLabel
                }), Uy.detail.canViewDialogue && (0, vf.jsx)(Fh.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: bb.viewDialogue,
                  children: hy("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Kf = Wy(910),
      ef = Wy(2096);

    function qZ(yb, bb, Wy, Uy, hy) {
      const fy = yb => "linear" === hy ? yb : {
          Kyy: hy,
          point: yb
        },
        Zy = {};
      for (const [cb, Py] of Uy)
        for (const [bb, Wy] of Object.entries(yb(cb, Py, fy))) Zy[bb] ??= {
          timeline: []
        }, Zy[bb].timeline.push(Wy);
      return {
        cby: bb,
        loop: Wy,
        oyy: Zy
      }
    }
    const sf = .547,
      Sf = .022,
      Ef = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      lf = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mZ(yb, bb, Wy) {
      const {
        drop: Uy = 0,
        shift: hy = 0,
        torso: fy = 0,
        nod: Zy = 0,
        tilt: cb = 0,
        legs: Py = [0, 0],
        arms: oy = 0,
        spread: By = 0
      } = bb, Ky = sf * Math.cos(fy) - Sf * Math.sin(fy), ey = sf * Math.sin(fy) + Sf * Math.cos(fy), qb = Wy([0, -Uy, hy]);
      return {
        LowerBody: {
          timeFraction: yb,
          position: qb,
          rotation: Wy([0, 0, 0])
        },
        UpperBody: {
          timeFraction: yb,
          position: qb,
          rotation: Wy([fy, 0, cb])
        },
        HeadMesh: {
          timeFraction: yb,
          position: Wy([0, Ky - sf - Uy, ey - Sf + hy]),
          rotation: Wy([fy + Zy, 0, cb])
        },
        LegLeftMesh: {
          timeFraction: yb,
          rotation: Wy([Py[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: yb,
          rotation: Wy([Py[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: yb,
          rotation: Wy([oy, 0, By])
        },
        ArmRightMesh: {
          timeFraction: yb,
          rotation: Wy([oy, 0, -By])
        }
      }
    }

    function Cf(yb, bb, Wy) {
      return qZ(mZ, yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Tf(yb) {
      return "number" === typeof yb ? [yb, yb] : yb
    }

    function Vf(yb, bb, Wy) {
      const {
        rise: Uy = 0,
        shift: hy = 0,
        torso: fy = 0,
        twist: Zy = 0,
        tilt: cb = 0,
        nod: Py = 0,
        cock: oy = 0,
        arms: By = 0,
        spread: Ky = 0
      } = bb, [ey, qb] = Tf(By), [sy, Sy] = Tf(Ky);
      return {
        TorsoNode: {
          timeFraction: yb,
          position: Wy([0, Uy, hy]),
          rotation: Wy([fy, Zy, cb])
        },
        HeadMesh: {
          timeFraction: yb,
          rotation: Wy([Py, 0, oy])
        },
        ArmLeftMesh: {
          timeFraction: yb,
          rotation: Wy([ey, 0, sy])
        },
        ArmRightMesh: {
          timeFraction: yb,
          rotation: Wy([qb, 0, -Sy])
        }
      }
    }
    const Jf = [1.0625, -1, 0];

    function gZ(yb) {
      return "number" === typeof yb ? [yb, yb] : yb
    }

    function Gf(yb, bb, Wy) {
      const {
        drop: Uy = 0,
        shift: hy = 0,
        torso: fy = 0,
        tilt: Zy = 0,
        nod: cb = 0,
        cock: Py = 0,
        legs: oy = [0, 0],
        arms: By = 0,
        spread: Ky = 0
      } = bb, [ey, qb] = gZ(By), [sy, Sy] = gZ(Ky), Ey = -fy, ly = -Zy, [mb, Cy, Ty] = function(yb, bb) {
        const [Wy, Uy, hy] = [-Jf[0], Jf[1], -Jf[2]], fy = Wy * Math.cos(bb) - Uy * Math.sin(bb), Zy = Wy * Math.sin(bb) + Uy * Math.cos(bb);
        return [fy - Wy, -(Zy * Math.cos(yb) - hy * Math.sin(yb) - Uy), Zy * Math.sin(yb) + hy * Math.cos(yb) - hy]
      }(Ey, ly), Vy = Wy([0, -Uy, hy]);
      return {
        TorsoNode: {
          timeFraction: yb,
          position: Wy([mb, Cy - Uy, Ty + hy]),
          rotation: Wy([Ey, 0, ly])
        },
        HeadMesh: {
          timeFraction: yb,
          rotation: Wy([-cb, 0, -Py])
        },
        ArmLeftMesh: {
          timeFraction: yb,
          rotation: Wy([-ey, 0, -sy])
        },
        ArmRightMesh: {
          timeFraction: yb,
          rotation: Wy([-qb, 0, Sy])
        },
        LegLeftMesh: {
          timeFraction: yb,
          position: Vy,
          rotation: Wy([-oy[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: yb,
          position: Vy,
          rotation: Wy([-oy[1], 0, 0])
        }
      }
    }
    var Of = Wy(36237),
      Rf = Wy(37156),
      vZ = Wy(37302);

    function iZ(yb, bb, Wy) {
      var Uy, hy;
      const fy = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return yb + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - yb) * Wy
        },
        [Zy, cb] = null !== (Uy = yb.legs) && void 0 !== Uy ? Uy : [0, 0],
        [Py, oy] = null !== (hy = bb.legs) && void 0 !== hy ? hy : [0, 0];
      return {
        drop: fy(yb.drop, bb.drop),
        shift: fy(yb.shift, bb.shift),
        torso: fy(yb.torso, bb.torso),
        nod: fy(yb.nod, bb.nod),
        tilt: fy(yb.tilt, bb.tilt),
        legs: [fy(Zy, Py), fy(cb, oy)],
        arms: fy(yb.arms, bb.arms),
        spread: fy(yb.spread, bb.spread)
      }
    }
    const Mf = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Yf = Cf(4400, !0, [
        [0, Mf],
        [.16, {
          ...Mf,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Mf],
        [.44, {
          ...Mf,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, iZ(Mf, Ef, .7)],
        [.66, iZ(Mf, Ef, .78)],
        [.74, iZ(Mf, lf, .65)],
        [.86, {
          ...Mf,
          drop: .14
        }],
        [1, Mf]
      ], "catmull-rom-spline"),
      Xf = {
        ...Mf,
        drop: .14,
        torso: .3,
        spread: .4
      },
      nf = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      uf = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      rZ = {
        caveGolem: Yf,
        magmaGolem: Cf(3600, !0, [
          [0, Xf],
          [.12, {
            ...Xf,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Xf,
            tilt: -.08
          }],
          [.4, {
            ...Xf,
            tilt: .06,
            drop: .11
          }],
          [.52, iZ(Xf, Ef, .9)],
          [.62, iZ(Xf, lf, .8)],
          [.7, iZ(Xf, lf, .45)],
          [.78, iZ(Xf, lf, .85)],
          [.9, {
            ...Xf,
            drop: .17
          }],
          [1, Xf]
        ], "catmull-rom-spline"),
        frostWraith: function(yb, bb, Wy) {
          return qZ(Vf, yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, nf],
          [.14, {
            ...nf,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...nf,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...nf,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...nf,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...nf,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...nf,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...nf,
            rise: .16,
            tilt: -.04
          }],
          [1, nf]
        ], "catmull-rom-spline"),
        tikiTerror: function(yb, bb, Wy) {
          return qZ(Gf, yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, uf],
          [.16, {
            ...uf,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, uf],
          [.44, {
            ...uf,
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
            ...uf,
            drop: .1
          }],
          [1, uf]
        ], "catmull-rom-spline")
      },
      Hf = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      aZ = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Ff = Object.fromEntries(Object.entries(rZ).map((yb => {
        let [bb, Wy] = yb;
        return [bb, (0, vZ.e)((0, Of.d)(Wy), bb)]
      })));

    function pf(yb) {
      const bb = function(yb) {
        var bb;
        const Wy = (0, Rf.c)(yb).poseRig;
        return null !== (bb = aZ[yb]) && void 0 !== bb ? bb : void 0 === Wy ? null : Hf[Wy]
      }(yb);
      return null === bb ? null : Ff[bb]
    }

    function Lf(yb) {
      return {
        "--difficulty-colour": yb
      }
    }
    const Qf = (0, Oy.lazy)((() => (0, ef.b)(Wy.e(202).then((() => Wy(39965))), (yb => yb.MobPreview))));

    function jZ(yb) {
      var bb, Wy, Uy;
      let {
        picker: hy,
        controller: fy
      } = yb;
      const {
        t: Zy
      } = (0, Oh.D)(), cb = Lh(), {
        page: Py
      } = hy;
      return (0, vf.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: cb,
        onKeyDown: yb => {
          "ArrowLeft" === yb.key ? (yb.preventDefault(), yb.stopPropagation(), fy.previous()) : "ArrowRight" === yb.key ? (yb.preventDefault(), yb.stopPropagation(), fy.next()) : ph(yb)
        },
        style: Lf(Py.colour),
        children: [(0, vf.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, vf.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: hy.dungeonName
          }), (0, vf.jsx)(Fh.h, {
            padIgnore: !0,
            onClick: fy.dismiss
          })]
        }), (0, vf.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, vf.jsx)(Fh.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !hy.canPrevious,
              onClick: fy.previous,
              children: (0, vf.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, vf.jsx)(Kf.e, {
                  name: "angle-up"
                })
              })
            }), (0, vf.jsxs)("div", {
              className: mf()("SkyblockBossPickerBoss", {
                Locked: !Py.unlocked
              }),
              children: [null !== Py.bossMobType && (0, vf.jsx)(Oy.Suspense, {
                fallback: (0, vf.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, vf.jsx)(Qf, {
                  className: "SkyblockBossPickerModel",
                  mobType: Py.bossMobType,
                  variation: Py.bossMobVariation,
                  animation: null !== (bb = pf(Py.bossMobType)) && void 0 !== bb ? bb : void 0
                })
              }), null === Py.bossMobType && (0, vf.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, vf.jsx)(Fh.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !hy.canNext,
              onClick: fy.next,
              children: (0, vf.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, vf.jsx)(Kf.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, vf.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Py.beaten && (0, vf.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Py.label]
            }), (0, vf.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Wy = Py.bossName) && void 0 !== Wy ? Wy : "???"
            }), (0, vf.jsxs)("span", {
              className: mf()("SkyblockBossPickerRecord", {
                Locked: null !== Py.lockedHint
              }),
              children: [null !== Py.lockedHintHighlight && (0, vf.jsxs)(vf.Fragment, {
                children: [Py.lockedHintHighlight.before, (0, vf.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Lf(Py.lockedHintHighlight.colour),
                  children: [null !== Py.lockedHintHighlight.icon && (0, vf.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: Py.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Py.lockedHintHighlight.name]
                }), Py.lockedHintHighlight.after]
              }), null === Py.lockedHintHighlight && (null !== (Uy = Py.lockedHint) && void 0 !== Uy ? Uy : Py.summary)]
            })]
          }), (0, vf.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: hy.pages.map((yb => (0, vf.jsx)("span", {
              className: mf()("SkyblockBossPickerDot", {
                Current: yb.current,
                Locked: !yb.unlocked
              }),
              style: Lf(yb.colour)
            }, yb.difficulty)))
          }), (0, vf.jsx)(Fh.l, {
            className: "SkyblockBossPickerFight",
            disabled: !Py.unlocked,
            onClick: fy.enter,
            children: Zy("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Df(yb) {
      let {
        dungeon: bb,
        select: Wy
      } = yb;
      return (0, vf.jsxs)(Fh.f, {
        className: mf()("SkyblockDungeonCard", {
          Selected: bb.selected
        }),
        onClick: () => {
          Wy(bb.id)
        },
        children: [(0, vf.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, vf.jsx)("strong", {
            children: bb.name
          }), (0, vf.jsx)("span", {
            children: bb.beatenSummary
          })]
        }), (0, vf.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: bb.difficulties.map((yb => (0, vf.jsxs)("span", {
            className: mf()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: yb.beaten
            }),
            style: Lf(yb.colour),
            title: yb.summary,
            children: [yb.beaten && (0, vf.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), yb.label]
          }, yb.difficulty)))
        })]
      })
    }

    function tZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(KW, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsxs)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Wy.picker && (0, vf.jsx)(jZ, {
          picker: Wy.picker,
          controller: bb
        }), !Wy.picker && (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Uy("skyblockGame:dungeons")
              }), (0, vf.jsx)("p", {
                children: Uy("skyblockGame:dungeonsIntro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: bb.dismiss
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, vf.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Wy.dungeons.map((yb => (0, vf.jsx)(Df, {
                dungeon: yb,
                select: bb.select
              }, yb.id)))
            }), Wy.detail && (0, vf.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, vf.jsx)("h3", {
                children: Wy.detail.name
              }), (0, vf.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Wy.detail.difficulties.map((yb => (0, vf.jsxs)("li", {
                  className: mf()("SkyblockDungeonRecord", {
                    Beaten: yb.beaten
                  }),
                  children: [(0, vf.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Lf(yb.colour),
                    children: [yb.beaten && (0, vf.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), yb.label]
                  }), (0, vf.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: yb.summary
                  })]
                }, yb.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function wf(yb) {
      let {
        collection: bb,
        select: Wy
      } = yb;
      return (0, vf.jsxs)(Fh.f, {
        className: mf()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: bb.selected,
          Locked: bb.locked
        }),
        ariaPressed: bb.selected,
        onClick: () => {
          Wy(bb.id)
        },
        children: [(0, vf.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, vf.jsx)(Jh.d, {
            itemName: bb.icon,
            amount: 0
          })
        }), (0, vf.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, vf.jsx)("strong", {
              children: bb.name
            }), (0, vf.jsx)("span", {
              children: bb.tier
            })]
          }), (0, vf.jsx)(Qh, {
            percent: bb.percent,
            label: `${bb.name}: ${bb.progress}`
          }), (0, vf.jsx)("span", {
            className: "SkyblockSkillXp",
            children: bb.progress
          })]
        })]
      })
    }

    function kZ(yb) {
      let {
        collection: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, vf.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, vf.jsx)(Jh.d, {
            itemName: bb.icon,
            amount: 0
          })
        }), (0, vf.jsx)("h3", {
          children: bb.name
        }), (0, vf.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: bb.tier
        }), (0, vf.jsx)("p", {
          children: bb.locked ? Wy("skyblockGame:collectionLocked") : bb.count
        }), null !== bb.nextReward && (0, vf.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, vf.jsx)("strong", {
            children: Wy("skyblockGame:collectionNextReward")
          }), (0, vf.jsx)("span", {
            children: bb.nextReward
          })]
        }), (0, vf.jsx)(Qh, {
          percent: bb.percent,
          label: bb.progress
        }), (0, vf.jsx)("p", {
          children: bb.progress
        })]
      })
    }

    function Nf(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(nW, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Uy("skyblockGame:collections")
              }), (0, vf.jsxs)("p", {
                children: [Uy("skyblockGame:collectionsIntro"), " ", Wy.tiersUnlocked]
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: bb.dismiss
            })]
          }), (0, vf.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Wy.categories.map((yb => (0, vf.jsxs)(Fh.f, {
              className: mf()("SkyblockCollectionCategory", {
                Selected: yb.selected
              }),
              ariaPressed: yb.selected,
              padTabSelected: yb.selected,
              onClick: () => {
                bb.selectCategory(yb.id)
              },
              children: [(0, vf.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, vf.jsx)(Jh.d, {
                  itemName: yb.icon,
                  amount: 0
                })
              }), (0, vf.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, vf.jsx)("strong", {
                  children: yb.label
                }), (0, vf.jsx)("span", {
                  children: yb.tiers
                })]
              })]
            }, yb.id)))
          }), (0, vf.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, vf.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Wy.collections.map((yb => (0, vf.jsx)(wf, {
                collection: yb,
                select: bb.select
              }, yb.id)))
            }), Wy.detail && (0, vf.jsx)(kZ, {
              collection: Wy.detail
            })]
          })]
        })
      }) : null
    }
    const zZ = ["completed", "active", "available", "locked"],
      If = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function xZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(wW, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Uy("skyblockDevQuests:title")
              }), (0, vf.jsx)("p", {
                children: Uy("skyblockDevQuests:intro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              onClick: bb.dismiss
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [zZ.map((yb => (0, vf.jsx)("span", {
              className: mf()("SkyblockQuestGraphLegendState", yb),
              children: Uy(`skyblockDevQuests:state_${yb}`)
            }, yb))), If.map((yb => (0, vf.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, vf.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, vf.jsx)("line", {
                  className: mf()("SkyblockQuestGraphEdge", yb),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Uy(`skyblockDevQuests:edge_${yb}`)]
            }, yb)))]
          }), (0, vf.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, vf.jsxs)("div", {
              className: mf()("SkyblockQuestGraphCanvas", {
                Planning: Wy.planning
              }),
              style: {
                width: Wy.width,
                height: Wy.height
              },
              children: [(0, vf.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Wy.width,
                height: Wy.height,
                "aria-hidden": "true",
                children: [(0, vf.jsx)("defs", {
                  children: (0, vf.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, vf.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Wy.edges.map((yb => (0, vf.jsx)("path", {
                  className: mf()("SkyblockQuestGraphEdge", yb.kind, {
                    InPlan: yb.inPlan
                  }),
                  d: yb.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, yb.key)))]
              }), Wy.nodes.map((yb => (0, vf.jsxs)("button", {
                type: "button",
                className: mf()("SkyblockQuestGraphNode", yb.state, {
                  InPlan: yb.inPlan,
                  Hovered: yb.hovered
                }),
                style: {
                  left: yb.left,
                  top: yb.top,
                  width: 190,
                  height: 52
                },
                title: yb.id,
                onMouseEnter: () => {
                  bb.hover(yb.id)
                },
                onMouseLeave: () => {
                  bb.hover(null)
                },
                onFocus: () => {
                  bb.hover(yb.id)
                },
                onBlur: () => {
                  bb.hover(null)
                },
                onClick: () => {
                  bb.jump(yb.id)
                },
                children: [(0, vf.jsx)("strong", {
                  children: yb.name
                }), (0, vf.jsx)("span", {
                  children: yb.detail
                })]
              }, yb.id)))]
            })
          })]
        })
      }) : null
    }
    const Af = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      df = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${fU}ms`,
        "--forge-duration": "2150ms"
      },
      yc = Array.from({
        length: 18
      }, ((yb, bb) => ({
        "--ember-left": `${(4+92*(.618034*bb%1)).toFixed(1)}%`,
        "--ember-size": 3 + bb % 3 * 2 + "px",
        "--ember-drift": 14 * (bb % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*bb%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*bb%8).toFixed(2)}s`
      })));

    function bc(yb) {
      if (yb.style.removeProperty("--part-size"), null === yb.parentElement || "wrap" === getComputedStyle(yb.parentElement).flexWrap) return;
      const bb = [...yb.children],
        Wy = getComputedStyle(yb),
        Uy = parseFloat(Wy.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        hy = (yb.clientHeight - parseFloat(Wy.rowGap) * (bb.length - 1)) / bb.length,
        fy = bb.map((yb => {
          const bb = getComputedStyle(yb),
            Wy = yb.querySelector("h3"),
            fy = yb.querySelector(".SkyblockForgeParts");
          if (null === Wy || null === fy) return Uy;
          const Zy = hy - parseFloat(bb.paddingTop) - parseFloat(bb.paddingBottom) - Wy.offsetHeight - parseFloat(getComputedStyle(Wy).marginBottom),
            cb = parseFloat(getComputedStyle(fy).columnGap),
            Py = fy.children.length;
          let oy = 0;
          for (let Uy = 1; Uy <= Py; Uy++) {
            const yb = Math.ceil(Py / Uy);
            oy = Math.max(oy, Math.min((fy.clientWidth - cb * (Uy - 1)) / Uy, (Zy - cb * (yb - 1)) / yb))
          }
          return oy
        }));
      yb.style.setProperty("--part-size", `${Math.floor(Math.max(Uy,Math.min(...fy)))}px`)
    }

    function WZ(yb) {
      var bb, Wy, Uy, fy, Zy;
      let {
        controller: cb
      } = yb;
      const Py = (0, Rh.m)(eU, cb.getSnapshot()),
        {
          t: oy
        } = (0, Oh.D)(),
        By = Lh(),
        Ky = function() {
          const yb = (0, Oy.useRef)(null),
            bb = (0, Oy.useRef)(null);
          return (0, Oy.useLayoutEffect)((() => {
            null !== yb.current && bc(yb.current)
          })), (0, Oy.useCallback)((Wy => {
            var Uy;
            null === (Uy = bb.current) || void 0 === Uy || Uy.disconnect(), bb.current = null, yb.current = Wy, null !== Wy && (bb.current = new ResizeObserver((() => {
              bc(Wy)
            })), bb.current.observe(Wy))
          }), [])
        }(),
        ey = function(yb) {
          const bb = (0, Oy.useRef)(null);
          return (0, Oy.useLayoutEffect)((() => {
            const yb = bb.current;
            if (null !== yb) {
              yb.style.removeProperty("font-size");
              for (let bb = 1.7; bb > 1.1 && yb.scrollWidth > yb.clientWidth; bb -= .1) yb.style.fontSize = bb - .1 + "rem"
            }
          }), [yb]), (0, Oy.useCallback)((yb => {
            bb.current = yb
          }), [])
        }(null === (bb = Py.preview) || void 0 === bb ? void 0 : bb.name),
        qb = (0, Oy.useRef)(null),
        sy = (0, Oy.useRef)({}),
        Sy = Py.forging,
        Ey = null !== (Wy = null === Sy || void 0 === Sy ? void 0 : Sy.preview.tier) && void 0 !== Wy ? Wy : 0,
        ly = null !== (Uy = null === Sy || void 0 === Sy ? void 0 : Sy.preview.named) && void 0 !== Uy && Uy,
        mb = (0, Oy.useMemo)((() => {
          return null === Sy ? null : {
            flames: (yb = Ey, bb = ly, Array.from({
              length: 26 + 6 * yb + (bb ? 20 : 0)
            }, ((yb, bb) => {
              const Wy = bb < 6,
                Uy = Math.random() * Math.PI * 2,
                hy = Wy ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                fy = Math.cos(Uy) * hy,
                Zy = Math.sin(Uy) * hy - 2 - 3 * Math.random(),
                cb = Math.random(),
                [Py, oy, By] = Wy ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : cb < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : cb < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [cb < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Py,
                "--x0": `${(.15*fy).toFixed(2)}rem`,
                "--y0": `${(.15*Zy).toFixed(2)}rem`,
                "--x": `${fy.toFixed(2)}rem`,
                "--y": `${Zy.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${oy.toFixed(2)}rem`,
                "--duration": `${Math.round(By)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: PU(Ey, ly)
          };
          var yb, bb
        }), [null === Sy || void 0 === Sy ? void 0 : Sy.id]);
      if (!Py.enabled) return null;
      const Cy = Py.preview,
        Ty = Py.arriving,
        Vy = null !== Ty && !Ty.sameSword,
        Jy = null !== Cy && (0, vf.jsx)(Jh.d, {
          itemName: Cy.baseSword,
          amount: 0,
          enchantmentTier: Cy.enchantmentTier
        });
      return (0, vf.jsx)(af.c, {
        show: Py.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: By,
          onKeyDown: ph,
          children: [(0, vf.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: yc.map(((yb, bb) => (0, vf.jsx)("span", {
              style: yb
            }, bb)))
          }), (0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: oy("skyblockGame:forgeTitle")
              }), (0, vf.jsx)("p", {
                children: oy("skyblockGame:forgeIntro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              onClick: cb.dismiss
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, vf.jsx)("div", {
              ref: Ky,
              className: mf()("SkyblockForgeSlots", {
                Locked: null !== Sy
              }),
              children: Py.slots.map((yb => (0, vf.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, vf.jsx)("h3", {
                  children: yb.label
                }), (0, vf.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: yb.parts.map((bb => (0, vf.jsx)("button", {
                    type: "button",
                    className: mf()("SkyblockForgePart", {
                      Selected: bb.selected,
                      Missing: bb.placeholder
                    }),
                    disabled: bb.placeholder,
                    title: bb.placeholder ? oy("skyblockGame:forgePickParts") : bb.itemName,
                    "aria-pressed": bb.selected,
                    onClick: () => {
                      cb.select(yb.kind, bb.material)
                    },
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: bb.itemName,
                      amount: bb.owned
                    })
                  }, bb.material)))
                })]
              }, yb.kind)))
            }), (0, vf.jsxs)("div", {
              className: mf()("SkyblockForgeAnvil", {
                Named: null === Cy || void 0 === Cy ? void 0 : Cy.named
              }),
              style: {
                "--tier": null === Cy ? "transparent" : hy.ib[Cy.enchantmentTier]
              },
              children: [(0, vf.jsxs)("div", {
                className: mf()("SkyblockForgeAltar", {
                  Forging: null !== Sy
                }),
                style: null === Sy ? void 0 : df,
                children: [(0, vf.jsxs)("div", {
                  className: mf()("SkyblockForgeMount", {
                    Arrive: null !== Ty
                  }),
                  children: [null === Cy && (0, vf.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: Py.unformedSword,
                      amount: 0
                    })
                  }), null !== Cy && (0, vf.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Cy && null === Sy && (0, vf.jsx)("div", {
                    ref: qb,
                    className: "SkyblockForgeFloat",
                    children: (0, vf.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Jy
                    })
                  }), null !== Cy && (0, vf.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: ch.map(((yb, bb) => (0, vf.jsx)("span", {
                      className: mf()({
                        Rune: "" !== yb.rune
                      }),
                      style: yb.style,
                      children: yb.rune
                    }, bb)))
                  }), null !== Sy && null !== mb && (0, vf.jsxs)(vf.Fragment, {
                    children: [(0, vf.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: mb.flames.map(((yb, bb) => (0, vf.jsx)("span", {
                        style: yb
                      }, bb)))
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: sy.current,
                      children: (0, vf.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Jy
                      })
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Ey >= 4 || ly) && (0, vf.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: mb.sparks.map(((yb, bb) => (0, vf.jsx)("span", {
                        style: yb
                      }, bb)))
                    }), (0, vf.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, vf.jsx)("p", {
                  className: mf()("SkyblockForgeStatus", null === (fy = Py.status) || void 0 === fy ? void 0 : fy.tone),
                  children: null === (Zy = Py.status) || void 0 === Zy ? void 0 : Zy.text
                })]
              }), null === Cy && (0, vf.jsx)("p", {
                className: mf()("SkyblockForgeName Waiting", {
                  ArriveText: Vy
                }),
                children: oy(Py.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Cy && (0, vf.jsx)("h3", {
                ref: ey,
                className: mf()("SkyblockForgeName", {
                  ArriveText: Vy
                }),
                title: Cy.name,
                children: Cy.name
              }), (null === Cy || void 0 === Cy ? void 0 : Cy.named) && (0, vf.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: oy("skyblockGame:forgeSecret")
              }), (0, vf.jsxs)(Fh.l, {
                className: "SkyblockForgeButton",
                disabled: !Py.canForge,
                title: null === Cy ? void 0 : oy("skyblockGame:forgeCoalOwned", {
                  owned: String(Py.coalOwned)
                }),
                onClick: () => {
                  sy.current = function(yb) {
                    const bb = null === yb ? "none" : getComputedStyle(yb).transform,
                      Wy = new DOMMatrixReadOnly("none" === bb ? void 0 : bb);
                    return {
                      "--settle-y": `${Wy.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Wy.b,Wy.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(qb.current), KU(), cb.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [oy("skyblockGame:forgeButton"), null !== Cy && (0, vf.jsxs)("span", {
                  className: mf()("SkyblockForgeCost", {
                    Short: Cy.coalShort
                  }),
                  children: [(0, vf.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, vf.jsx)(Jh.d, {
                      itemName: xU.b,
                      amount: 0
                    })
                  }), Cy.coalCost]
                })]
              })]
            }), (0, vf.jsxs)("div", {
              className: mf()("SkyblockForgeDetails", {
                Named: null === Cy || void 0 === Cy ? void 0 : Cy.named
              }),
              children: [(0, vf.jsx)("p", {
                className: mf()("SkyblockForgeLore", {
                  ArriveText: Vy
                }),
                title: null === Cy || void 0 === Cy ? void 0 : Cy.lore,
                children: null === Cy || void 0 === Cy ? void 0 : Cy.lore
              }), (0, vf.jsxs)("dl", {
                className: mf()("SkyblockForgeStats", {
                  ArriveText: Vy
                }),
                children: [null === Cy && Af.map((yb => (0, vf.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, vf.jsx)("dt", {
                    children: oy(yb)
                  }), (0, vf.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, yb))), null === Cy || void 0 === Cy ? void 0 : Cy.stats.map((yb => (0, vf.jsxs)("div", {
                  className: mf()("SkyblockForgeStat", {
                    Better: yb.better
                  }),
                  children: [(0, vf.jsx)("dt", {
                    children: yb.label
                  }), (0, vf.jsx)("dd", {
                    children: yb.value
                  })]
                }, yb.label)))]
              }), (0, vf.jsx)("ul", {
                className: mf()("SkyblockForgeEffects", {
                  ArriveText: Vy
                }),
                children: null === Cy || void 0 === Cy ? void 0 : Cy.effects.map((yb => (0, vf.jsx)("li", {
                  children: yb
                }, yb)))
              })]
            })]
          })]
        })
      })
    }
    const UZ = "Doom Rivet",
      hZ = "Doom Crest";

    function fZ(yb) {
      let {
        itemName: bb,
        amount: Wy,
        owned: Uy
      } = yb;
      return (0, vf.jsxs)("span", {
        className: mf()("SkyblockSmugglerPrice", {
          Short: Wy > Uy
        }),
        children: [(0, vf.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, vf.jsx)(Jh.d, {
            itemName: bb,
            amount: 0
          })
        }), (0, vf.jsx)("span", {
          children: Wy
        })]
      })
    }

    function ZZ(yb) {
      return yb.justBought ? "skyblockGame:smugglerJustBought" : yb.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function cc(yb) {
      let {
        deal: bb,
        view: Wy,
        buy: Uy
      } = yb;
      const {
        t: hy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("div", {
        className: mf()("SkyblockSmugglerPocket", {
          Bought: bb.justBought,
          Unaffordable: !bb.affordable,
          SoldOut: bb.soldOut && !bb.justBought
        }),
        children: [(0, vf.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, vf.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, vf.jsx)(Jh.d, {
            itemName: bb.itemName,
            amount: 0,
            enchantmentTier: bb.enchantmentTier
          }), bb.amount > 1 && (0, vf.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: hy("skyblockGame:smugglerAmount", {
              amount: bb.amount
            })
          })]
        }), (0, vf.jsx)("h3", {
          children: bb.displayName
        }), (0, vf.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [bb.rivets > 0 && (0, vf.jsx)(fZ, {
              itemName: UZ,
              amount: bb.rivets,
              owned: Wy.rivetsOwned
            }), bb.crests > 0 && (0, vf.jsx)(fZ, {
              itemName: hZ,
              amount: bb.crests,
              owned: Wy.crestsOwned
            })]
          }), (0, vf.jsx)(Fh.f, {
            className: "SkyblockSmugglerBuy",
            disabled: bb.soldOut || !bb.affordable || Wy.pending,
            onClick: () => {
              Uy(bb.slot)
            },
            children: hy(ZZ(bb))
          })]
        })]
      }, bb.justBought ? Wy.boughtCount : 0)
    }

    function PZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(SU, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, vf.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, vf.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Uy("skyblockGame:smugglerTitle")
              }), (0, vf.jsx)("p", {
                children: Uy("skyblockGame:smugglerIntro")
              })]
            }), (0, vf.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, vf.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, vf.jsx)(fZ, {
                  itemName: UZ,
                  amount: Wy.rivetsOwned,
                  owned: Wy.rivetsOwned
                }), (0, vf.jsx)(fZ, {
                  itemName: hZ,
                  amount: Wy.crestsOwned,
                  owned: Wy.crestsOwned
                })]
              }), (0, vf.jsx)(Fh.h, {
                onClick: bb.dismiss
              })]
            })]
          }), (0, vf.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Wy.deals.map((yb => (0, vf.jsx)(cc, {
              deal: yb,
              view: Wy,
              buy: bb.buy
            }, yb.slot)))
          }), (0, vf.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, vf.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Wy.rotatesText
            }), null !== Wy.status && (0, vf.jsx)("span", {
              className: mf()("SkyblockSmugglerStatus", Wy.status.tone),
              children: Wy.status.text
            })]
          })]
        })
      }) : null
    }

    function oZ(yb) {
      let {
        phase: bb,
        className: Wy
      } = yb;
      return (0, vf.jsx)("span", {
        className: mf()("SkyblockMoon", `Moon-${bb}`, Wy),
        "aria-hidden": "true"
      })
    }

    function BZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(mh, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)();
      return Wy.enabled ? (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: mf()("SkyblockPassageChip", Wy.open && "Open"),
          "aria-label": Uy("skyblockGame:passageChipLabel", {
            phase: Wy.phaseName
          }),
          title: Uy("skyblockGame:passageChipLabel", {
            phase: Wy.phaseName
          }),
          onMouseDown: yb => {
            yb.preventDefault()
          },
          onClick: bb.toggle,
          children: (0, vf.jsx)(oZ, {
            phase: Wy.phase
          }, Wy.phase)
        })
      }) : null
    }

    function KZ(yb) {
      let {
        fish: bb
      } = yb;
      return (0, vf.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, vf.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, vf.jsx)(Jh.d, {
            itemName: bb.itemName,
            amount: 0
          })
        }), (0, vf.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: bb.displayName
          }), (0, vf.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: bb.where
          })]
        })]
      })
    }

    function eZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(mh, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, vf.jsx)(oZ, {
              phase: Wy.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Uy("skyblockGame:passageTitle")
              }), (0, vf.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Wy.phaseName
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: bb.dismiss
            })]
          }), (0, vf.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Uy("skyblockGame:passageIntro")
          }), (0, vf.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, vf.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, vf.jsx)("h3", {
                children: Uy("skyblockGame:passageVisiting")
              }), (0, vf.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Wy.visitors.map((yb => (0, vf.jsx)(KZ, {
                  fish: yb
                }, yb.itemName)))
              })]
            }), (0, vf.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Wy.resting && (0, vf.jsxs)(vf.Fragment, {
                children: [(0, vf.jsx)("h3", {
                  children: Uy("skyblockGame:passageResting")
                }), (0, vf.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, vf.jsx)(KZ, {
                    fish: Wy.resting
                  })
                })]
              }), (0, vf.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, vf.jsx)(oZ, {
                  phase: Wy.nextPhase
                }), (0, vf.jsx)("span", {
                  children: Wy.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function qc() {
      return (0, vf.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((yb => (0, vf.jsx)("i", {
          style: {
            "--sparkle-index": yb
          }
        }, yb)))
      })
    }

    function sZ(yb) {
      var bb;
      let {
        charm: Wy,
        view: Uy,
        controller: hy
      } = yb;
      const {
        t: fy
      } = (0, Oh.D)(), Zy = Uy.shop, cb = (null === (bb = Uy.sparkle) || void 0 === bb ? void 0 : bb.id) === Wy.id;
      return (0, vf.jsxs)("li", {
        className: mf()("SkyblockLampLightCharm", Wy.owned && "Owned", Wy.socketed && "Socketed"),
        children: [cb && (0, vf.jsx)(qc, {}, Uy.sparkle.count), (0, vf.jsx)("h4", {
          children: Wy.name
        }), (0, vf.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Wy.effect
        }), (0, vf.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Wy.lines.map((yb => (0, vf.jsxs)("li", {
            className: mf()("SkyblockLampLightOddsLine", "better" === yb.tone ? "Better" : "worse" === yb.tone ? "Worse" : "Same"),
            children: [(0, vf.jsx)("span", {
              className: "Before",
              children: yb.before
            }), (0, vf.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, vf.jsx)("span", {
              className: "After",
              children: yb.after
            })]
          }, yb.label)))
        }), (0, vf.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Wy.owned ? Wy.socketed ? (0, vf.jsxs)(vf.Fragment, {
            children: [(0, vf.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: fy("skyblockGame:lampLightSocketed")
            }), (0, vf.jsx)(Fh.M, {
              disabled: !Uy.canCommand,
              ariaLabel: fy("skyblockGame:lampLightRemoveLabel", {
                charm: Wy.name
              }),
              onClick: () => {
                hy.socket(null)
              },
              children: fy("skyblockGame:lampLightRemove")
            })]
          }) : (0, vf.jsx)(Fh.f, {
            disabled: !Uy.canCommand || !Zy.heldRod,
            ariaLabel: fy("skyblockGame:lampLightSocketLabel", {
              charm: Wy.name
            }),
            onClick: () => {
              hy.socket(Wy.id)
            },
            children: fy("skyblockGame:lampLightSocket")
          }) : (0, vf.jsx)(Fh.f, {
            disabled: !Uy.canCommand || !Wy.affordable,
            ariaLabel: fy("skyblockGame:lampLightBuyLabel", {
              item: Wy.name,
              cost: Wy.cost
            }),
            onClick: () => {
              hy.buy(Wy.id)
            },
            children: Wy.cost
          })
        })]
      })
    }

    function SZ(yb) {
      var bb;
      let {
        tint: Wy,
        view: Uy,
        controller: hy
      } = yb;
      const {
        t: fy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("li", {
        className: mf()("SkyblockLampLightTint", Wy.wearing && "Wearing"),
        style: {
          "--tint-colour": Wy.colour
        },
        children: [(null === (bb = Uy.sparkle) || void 0 === bb ? void 0 : bb.id) === Wy.id && (0, vf.jsx)(qc, {}, Uy.sparkle.count), (0, vf.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, vf.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Wy.name
        }), Wy.wearing ? (0, vf.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: fy("skyblockGame:lampLightWearing")
        }) : (0, vf.jsx)(Fh.f, {
          disabled: !Uy.canCommand || !Wy.owned && !Wy.affordable,
          ariaLabel: Wy.owned ? fy("skyblockGame:lampLightWearLabel", {
            tint: Wy.name
          }) : fy("skyblockGame:lampLightBuyLabel", {
            item: Wy.name,
            cost: Wy.cost
          }),
          onClick: () => {
            Wy.owned ? hy.wearTint(Wy.id) : hy.buy(Wy.id)
          },
          children: Wy.owned ? fy("skyblockGame:lampLightWear") : Wy.cost
        })]
      })
    }

    function EZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(nU, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Wy.shop;
      return (0, vf.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, vf.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Wy.balance
          }), (0, vf.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Wy.releasing,
            className: mf()("SkyblockLampLightSwitch", Wy.releasing && "On"),
            disabled: Wy.releasing ? "ready" !== Wy.status : !Wy.canCommand,
            onClick: () => {
              bb.setRelease(!Wy.releasing)
            },
            children: [(0, vf.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, vf.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Uy("skyblockGame:lampLightRelease")]
          }), (0, vf.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Uy("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Wy.notice && (0, vf.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Wy.notice
        }), null !== hy && (0, vf.jsxs)(vf.Fragment, {
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, vf.jsx)("h3", {
              children: Uy("skyblockGame:lampLightCharms")
            }), (0, vf.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: hy.oddsFor
            }), (0, vf.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((yb => (0, vf.jsx)("button", {
                type: "button",
                "aria-pressed": Wy.situation === yb,
                className: mf()("SkyblockLampLightSituation", Wy.situation === yb && "Selected"),
                onClick: () => {
                  bb.setSituation(yb)
                },
                children: Uy("open" === yb ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, yb)))
            })]
          }), !hy.heldRod && (0, vf.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Uy("skyblockGame:lampLightHoldRod")
          }), (0, vf.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: hy.charms.map((yb => (0, vf.jsx)(sZ, {
              charm: yb,
              view: Wy,
              controller: bb
            }, yb.id)))
          }), (0, vf.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, vf.jsx)("h3", {
              children: Uy("skyblockGame:lampLightTints")
            })
          }), (0, vf.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, vf.jsxs)("li", {
              className: mf()("SkyblockLampLightTint", "Islands", hy.wearingIslandColours && "Wearing"),
              children: [(0, vf.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, vf.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Uy("skyblockGame:lampLightIslandColours")
              }), hy.wearingIslandColours ? (0, vf.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Uy("skyblockGame:lampLightWearing")
              }) : (0, vf.jsx)(Fh.f, {
                disabled: !Wy.canCommand,
                ariaLabel: Uy("skyblockGame:lampLightWearLabel", {
                  tint: Uy("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  bb.wearTint(null)
                },
                children: Uy("skyblockGame:lampLightWear")
              })]
            }), hy.tints.map((yb => (0, vf.jsx)(SZ, {
              tint: yb,
              view: Wy,
              controller: bb
            }, yb.id)))]
          })]
        })]
      })
    }

    function lZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(nU, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)();
      return Wy.releasing ? (0, vf.jsx)(Th.f, {
        children: (0, vf.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            bb.setRelease(!1)
          },
          children: [(0, vf.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, vf.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Uy("skyblockGame:lampLightReleasing"), " \xb7 ", Wy.balance]
          }), (0, vf.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Uy("skyblockGame:lampLightKeepCatches")
          }), null !== Wy.gained && (0, vf.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Wy.gained.text
          }, Wy.gained.count)]
        })
      }) : null
    }

    function mc(yb) {
      let {
        island: bb,
        view: Wy,
        aim: Uy
      } = yb;
      const {
        t: hy
      } = (0, Oh.D)(), fy = bb.featuredFish;
      return (0, vf.jsxs)("li", {
        className: mf()("SkyblockKeepersChairIsland", `Island-${bb.id}`, bb.favoured && "Aimed", !bb.relit && "Dark"),
        children: [(0, vf.jsx)("h3", {
          children: bb.name
        }), bb.relit && null !== fy ? (0, vf.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: hy("skyblockGame:keepersChairTideNotice")
          }), (0, vf.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, vf.jsx)(Jh.d, {
              itemName: fy.itemName,
              amount: 0
            })
          }), (0, vf.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: fy.displayName
          })]
        }) : (0, vf.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, vf.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: hy("skyblockGame:keepersChairDark")
          })
        }), bb.relit && (bb.favoured ? (0, vf.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: hy("skyblockGame:keepersChairAimed")
        }) : (0, vf.jsx)(Fh.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !Wy.canAim,
          ariaLabel: hy("skyblockGame:keepersChairAimLabel", {
            island: bb.name
          }),
          onClick: () => {
            Uy(bb.id)
          },
          children: hy("skyblockGame:keepersChairAim")
        }))]
      }, bb.favoured ? Wy.aimedCount : 0)
    }

    function CZ(yb) {
      let {
        controller: bb,
        lampLight: Wy
      } = yb;
      const Uy = (0, Rh.m)(GU, bb.getSnapshot()),
        hy = (0, Rh.m)(nU, Wy.getSnapshot()),
        [fy, Zy] = (0, Oy.useState)("lamp"),
        {
          t: cb
        } = (0, Oh.D)(),
        Py = Lh();
      if (!Uy.enabled) return null;
      const oy = "light" === fy && hy.enabled;
      return (0, vf.jsx)(af.c, {
        show: Uy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: mf()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", oy && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Py,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: cb("skyblockGame:keepersChairTitle")
              }), (0, vf.jsx)("p", {
                children: cb(oy ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              ariaLabel: cb("skyblockGame:keepersChairClose"),
              onClick: bb.dismiss
            })]
          }), hy.enabled && (0, vf.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((yb => (0, vf.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === yb === oy,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === yb === oy ? "true" : void 0,
              className: mf()("SkyblockKeepersChairTab", "light" === yb === oy && "Selected"),
              onClick: () => {
                Zy(yb)
              },
              children: [cb("lamp" === yb ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === yb && (0, vf.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: hy.balance
              })]
            }, yb)))
          }), oy ? (0, vf.jsx)(EZ, {
            controller: Wy
          }) : (0, vf.jsx)(TZ, {
            view: Uy,
            controller: bb
          })]
        })
      })
    }

    function TZ(yb) {
      let {
        view: bb,
        controller: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)();
      return (0, vf.jsxs)(vf.Fragment, {
        children: [(0, vf.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: bb.islands.map((yb => (0, vf.jsx)(mc, {
            island: yb,
            view: bb,
            aim: Wy.aim
          }, yb.id)))
        }), null !== bb.almanac && (0, vf.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Uy("skyblockGame:passageTitle")
          }), (0, vf.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, vf.jsx)(oZ, {
              phase: bb.almanac.phase
            }), bb.almanac.phaseName]
          }), (0, vf.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, vf.jsx)(oZ, {
              phase: bb.almanac.nextPhase
            }), bb.almanac.next]
          })]
        }), (0, vf.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Uy("skyblockGame:keepersChairFavour")
          }), bb.aimed && (0, vf.jsx)(Fh.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !bb.canAim,
            onClick: () => {
              Wy.aim(null)
            },
            children: Uy("skyblockGame:keepersChairRest")
          })]
        }), null !== bb.status && (0, vf.jsx)("p", {
          className: mf()("SkyblockKeepersChairStatus", "refused" === bb.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: bb.status.text
        })]
      })
    }

    function VZ(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(RU, bb.getSnapshot());
      if (!Uy.enabled) return null;
      const hy = Uy.freshCount > 0 ? Wy("skyblockGame:reachLogOpenNews", {
        count: Uy.freshCount
      }) : Wy("skyblockGame:reachLogOpen");
      return (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsxs)("button", {
          type: "button",
          className: mf()("SkyblockReachLogButton", Uy.freshCount > 0 && "HasNews", Uy.pending && "Pending"),
          "aria-label": hy,
          title: hy,
          onClick: bb.ask,
          children: [Uy.news && (0, vf.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Uy.newsToken}`), (0, vf.jsx)("span", {
            className: mf()("SkyblockReachLogIcon", Uy.news && "Jump"),
            "aria-hidden": "true",
            children: (0, vf.jsx)(Jh.d, {
              itemName: ih,
              amount: 0
            })
          }, `icon:${Uy.newsToken}`), Uy.freshCount > 0 && (0, vf.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Uy.freshCount
          })]
        })
      })
    }

    function JZ(yb) {
      let {
        gift: bb
      } = yb;
      return (0, vf.jsx)("li", {
        className: mf()("SkyblockRegularsGift", bb.given && "Given"),
        children: bb.text
      })
    }

    function gc(yb) {
      let {
        regular: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("li", {
        className: mf()("SkyblockRegularsCard", bb.tagged ? "Tagged" : "Untagged", bb.resting && "Resting"),
        children: [(0, vf.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: bb.fishName,
            children: (0, vf.jsx)(Jh.d, {
              itemName: bb.itemName,
              amount: 0
            })
          }), (0, vf.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, vf.jsx)("h3", {
              children: bb.name
            }), (0, vf.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: bb.fishName
            })]
          })]
        }), (0, vf.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: bb.line
        }), (0, vf.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: bb.size
          }), bb.tagged && (0, vf.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: bb.resting ? Wy("skyblockGame:regularsResting") : bb.meetings
          })]
        }), (0, vf.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: bb.chance
        }), (0, vf.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: bb.gifts.map((yb => (0, vf.jsx)(JZ, {
            gift: yb
          }, yb.text)))
        }), bb.history.length > 0 && (0, vf.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: bb.history.map(((yb, bb) => (0, vf.jsx)("li", {
            children: yb
          }, bb)))
        })]
      })
    }

    function GZ(yb) {
      let {
        controller: bb,
        island: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)(), hy = (0, Rh.m)(AU, bb.getSnapshot()), fy = hy.islands.find((yb => yb.id === Wy));
      if (!hy.enabled || void 0 === fy) return null;
      const Zy = Uy("skyblockGame:regularsOpen");
      return (0, vf.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Zy,
        title: Zy,
        onClick: () => {
          bb.openIsland(Wy)
        },
        children: [(0, vf.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Uy("skyblockGame:regularsTitle")
        }), fy.regulars.map((yb => (0, vf.jsx)("span", {
          className: mf()("SkyblockRegularsStripIcon", yb.tagged && "Tagged"),
          title: yb.name,
          children: (0, vf.jsx)(Jh.d, {
            itemName: yb.itemName,
            amount: 0
          })
        }, yb.id)))]
      })
    }

    function OZ(yb) {
      var bb;
      let {
        controller: Wy
      } = yb;
      const Uy = (0, Rh.m)(AU, Wy.getSnapshot()),
        {
          t: hy
        } = (0, Oh.D)(),
        fy = Lh();
      if (!Uy.enabled) return null;
      const Zy = null !== (bb = Uy.islands.find((yb => yb.id === Uy.selected))) && void 0 !== bb ? bb : null;
      return (0, vf.jsx)(af.c, {
        show: Uy.open,
        close: Wy.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: fy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: hy("skyblockGame:regularsTitle")
              }), (0, vf.jsx)("p", {
                children: hy("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: Wy.dismiss
            })]
          }), (0, vf.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Uy.islands.map((yb => {
              const bb = yb.id === Uy.selected;
              return (0, vf.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": bb,
                "data-pad-tab": !0,
                "data-pad-selected": bb ? "true" : void 0,
                className: mf()("SkyblockReachLogTab", `Island-${yb.id}`, bb && "Selected", yb.charm.given && "GoldPage"),
                onClick: () => {
                  Wy.selectIsland(yb.id)
                },
                children: (0, vf.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: yb.name
                })
              }, yb.id)
            }))
          }), (0, vf.jsxs)("div", {
            className: mf()("SkyblockRegularsPage", null !== Zy && `Island-${Zy.id}`),
            role: "tabpanel",
            children: [(0, vf.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: hy("skyblockGame:regularsHow")
            }), null !== Zy && (0, vf.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Zy.regulars.map((yb => (0, vf.jsx)(gc, {
                regular: yb
              }, yb.id)))
            })]
          }), null !== Zy && (0, vf.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, vf.jsx)("span", {
              className: mf()("SkyblockRegularsCharm", Zy.charm.given && "Given"),
              children: Zy.charm.text
            })
          })]
        })
      })
    }
    const RZ = [{
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
      vc = Array.from({
        length: 6
      }, ((yb, bb) => ({
        "--x": `${(88*(.618034*bb%1)).toFixed(1)}%`,
        "--y": `${(10+37*bb%70).toFixed(1)}%`,
        "--size": 7 + bb % 3 * 3 + "rem",
        "--drift-x": 3 * (bb % 3 - 1) + "rem",
        "--drift-y": 2 * (bb % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + bb % 4 * 3 + "s",
        "--delay": 2.5 * -bb + "s"
      }))),
      ic = Array.from({
        length: 14
      }, ((yb, bb) => ({
        "--left": `${(3+94*((.618034*bb+.3)%1)).toFixed(1)}%`,
        "--size": 4 + bb % 4 * 2 + "px",
        "--sway": bb % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*bb%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*bb%12).toFixed(2)}s`
      }))),
      MZ = (0, Oy.memo)((function(yb) {
        let {
          island: bb
        } = yb;
        return (0, vf.jsxs)("div", {
          className: mf()("SkyblockReachLogDepths", null !== bb && `Island-${bb}`),
          "aria-hidden": "true",
          children: [RZ.map(((yb, bb) => (0, vf.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: yb
          }, `shaft${bb}`))), vc.map(((yb, bb) => (0, vf.jsx)("span", {
            className: mf()("SkyblockReachLogMote", bb % 2 === 1 && "Violet"),
            style: yb
          }, `mote${bb}`))), ic.map(((yb, bb) => (0, vf.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: yb
          }, `bubble${bb}`)))]
        })
      })),
      YZ = 100;

    function XZ(yb) {
      let {
        view: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)();
      if (null === bb || 0 === bb.total) return null;
      const Uy = YZ * bb.aspect,
        hy = Wy("skyblockGame:hiddenWatersCount", {
          found: bb.found,
          total: bb.total
        });
      return (0, vf.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Wy("skyblockGame:hiddenWatersTitle")}: ${hy}`,
        children: [(0, vf.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Uy}`,
          "aria-hidden": "true",
          children: [bb.islands.map(((yb, bb) => (0, vf.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (yb.left + yb.width / 2) * YZ,
            cy: (yb.top + yb.height / 2) * Uy,
            rx: yb.width / 2 * YZ,
            ry: yb.height / 2 * Uy
          }, bb))), bb.pins.map(((yb, bb) => (0, vf.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: yb.left * YZ,
            cy: yb.top * Uy,
            r: 13
          }, bb)))]
        }), (0, vf.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, vf.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Wy("skyblockGame:hiddenWatersTitle")
          }), (0, vf.jsx)("span", {
            className: bb.found === bb.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: hy
          })]
        })]
      })
    }

    function nZ(yb) {
      let {
        view: bb,
        island: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)(), hy = null === bb || void 0 === bb ? void 0 : bb.glimpses.get(Wy);
      return void 0 === hy || 0 === hy.length ? null : (0, vf.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, vf.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Uy("skyblockGame:hiddenWatersGlimpsed")
        }), (0, vf.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: hy.map((yb => (0, vf.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, vf.jsx)(Jh.d, {
              itemName: yb,
              amount: 0
            })
          }, yb)))
        })]
      })
    }
    const uZ = ["Bronze", "Silver", "Gold"],
      rc = [{
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
      HZ = rc.slice(0, 2);

    function ac(yb) {
      return yb ? rc : HZ
    }

    function FZ(yb) {
      let {
        fish: bb,
        letGoShown: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [uZ.map(((yb, Wy) => {
          const hy = Wy < bb.marks;
          return (0, vf.jsx)("span", {
            className: mf()("SkyblockReachLogPip", yb, hy && "Earned", hy && bb.fresh && Wy === bb.marks - 1 && "Newest"),
            title: Uy(vh[Wy])
          }, yb)
        })), (0, vf.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), ac(Wy).map(((yb, Wy) => (0, vf.jsx)("span", {
          className: mf()("SkyblockReachLogRibbon", yb.className, !0 === bb.ribbons[Wy] && "Earned"),
          title: Uy(yb.titleKey)
        }, yb.className)))]
      })
    }

    function pZ(yb) {
      let {
        letGoShown: bb,
        haloShown: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, vf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Uy("skyblockGame:reachLogMarks"),
          children: [(0, vf.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Uy("skyblockGame:reachLogLegendMarks")]
        }), ac(bb).map((yb => (0, vf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Uy(yb.titleKey),
          children: [(0, vf.jsx)("span", {
            className: mf()("SkyblockReachLogRibbon", yb.className, "Earned")
          }), Uy(yb.legendKey)]
        }, yb.className))), (0, vf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Uy("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, vf.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Uy("skyblockGame:reachLogLegendGlimmer")]
        }), Wy && (0, vf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Uy("skyblockGame:reachLogHaloTitle"),
          children: [(0, vf.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Uy("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function LZ(yb) {
      let {
        returner: bb
      } = yb;
      return (0, vf.jsxs)("div", {
        className: mf()("SkyblockReachLogReturner", bb.back && "Back"),
        children: [(0, vf.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, vf.jsx)(Jh.d, {
            itemName: bb.itemName,
            amount: 0
          })
        }), (0, vf.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: bb.line
        })]
      })
    }

    function QZ(yb) {
      let {
        fish: bb,
        letGoShown: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Oh.D)();
      return (0, vf.jsxs)("li", {
        className: mf()("SkyblockReachLogCard", bb.caught ? "Caught" : "Unknown", bb.marks >= 3 && "GoldCard", bb.fresh && "Fresh", bb.visitor && "Visitor"),
        children: [bb.visitor && (0, vf.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Uy("skyblockGame:reachLogVisitor")
        }), bb.fresh && Array.from({
          length: 4
        }, ((yb, bb) => (0, vf.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, bb))), (0, vf.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [bb.halo && (0, vf.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Uy("skyblockGame:reachLogHaloTitle")
          }), (0, vf.jsx)(Jh.d, {
            itemName: bb.itemName,
            amount: 0
          }), bb.glimmer && (0, vf.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Uy("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, vf.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: bb.name
        }), (0, vf.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: bb.chance
        }), (0, vf.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: bb.best
        }), (0, vf.jsx)(FZ, {
          fish: bb,
          letGoShown: Wy
        })]
      })
    }

    function jc(yb) {
      let {
        page: bb,
        letGoShown: Wy,
        hiddenWaters: Uy
      } = yb;
      const {
        t: hy
      } = (0, Oh.D)();
      return bb.awake ? (0, vf.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: bb.fish.map((yb => (0, vf.jsx)(QZ, {
          fish: yb,
          letGoShown: Wy
        }, yb.itemName)))
      }) : (0, vf.jsxs)(vf.Fragment, {
        children: [(0, vf.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: hy("skyblockGame:reachLogAsleep")
        }), (0, vf.jsx)(nZ, {
          view: Uy,
          island: bb.id
        })]
      })
    }

    function DZ(yb) {
      var bb, Wy;
      let {
        controller: Uy,
        regulars: hy,
        hiddenWaters: fy
      } = yb;
      const Zy = (0, Rh.m)(RU, Uy.getSnapshot()),
        cb = function(yb) {
          return (0, Rh.m)(Uh, yb.getSnapshot())
        }(fy),
        Py = (0, Rh.m)(AU, hy.getSnapshot()),
        {
          t: oy
        } = (0, Oh.D)(),
        By = Lh();
      if (!Zy.enabled) return null;
      const Ky = null !== (bb = Zy.pages.find((yb => yb.id === Zy.selected))) && void 0 !== bb ? bb : null;
      return (0, vf.jsx)(af.c, {
        show: Zy.open,
        close: Uy.dismiss,
        togglePointerLock: !1,
        className: mf()("SkyblockSkillsOverlay", Py.open && "SkyblockReachLogUnderLedger"),
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: By,
          onKeyDown: ph,
          children: [(0, vf.jsx)(MZ, {
            island: null !== (Wy = null === Ky || void 0 === Ky ? void 0 : Ky.id) && void 0 !== Wy ? Wy : null
          }), (0, vf.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: oy("skyblockGame:reachLogTitle")
              }), (0, vf.jsx)("p", {
                children: oy("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, vf.jsx)(XZ, {
              view: cb
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: Uy.dismiss
            })]
          }), (0, vf.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Zy.pages.map((yb => {
              const bb = yb.id === Zy.selected,
                Wy = yb.fish.some((yb => yb.fresh));
              return (0, vf.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": bb,
                "data-pad-tab": !0,
                "data-pad-selected": bb ? "true" : void 0,
                className: mf()("SkyblockReachLogTab", `Island-${yb.id}`, bb && "Selected", !yb.awake && "Asleep", yb.gold && "GoldPage", Wy && "HasNews"),
                onClick: () => {
                  Uy.selectPage(yb.id)
                },
                children: [(0, vf.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: yb.name
                }), yb.awake && (0, vf.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: oy("skyblockGame:reachLogCaughtCount", {
                    caught: yb.caught,
                    total: yb.total
                  })
                })]
              }, yb.id)
            }))
          }), (0, vf.jsxs)("div", {
            className: mf()("SkyblockReachLogPage", null !== Ky && `Island-${Ky.id}`),
            role: "tabpanel",
            children: [null !== Ky && (0, vf.jsx)(jc, {
              page: Ky,
              letGoShown: Zy.letGoShown,
              hiddenWaters: cb
            }), !0 === (null === Ky || void 0 === Ky ? void 0 : Ky.awake) && null !== Ky.returner && (0, vf.jsx)(LZ, {
              returner: Ky.returner
            }), !0 === (null === Ky || void 0 === Ky ? void 0 : Ky.awake) && (0, vf.jsx)(GZ, {
              controller: hy,
              island: Ky.id
            })]
          }), (0, vf.jsx)("footer", {
            className: mf()("SkyblockReachLogFooter", null !== Ky && `Island-${Ky.id}`, !0 === (null === Ky || void 0 === Ky ? void 0 : Ky.gold) && "GoldPage"),
            children: !0 === (null === Ky || void 0 === Ky ? void 0 : Ky.gold) ? (0, vf.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: oy("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, vf.jsxs)(vf.Fragment, {
              children: [(0, vf.jsx)(pZ, {
                letGoShown: Zy.letGoShown,
                haloShown: !0 === (null === Ky || void 0 === Ky ? void 0 : Ky.fish.some((yb => yb.halo)))
              }), (0, vf.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: oy("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var tc = Wy(4037);

    function wZ(yb) {
      let {
        conversation: bb,
        completedLabel: Wy
      } = yb;
      return (0, vf.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, vf.jsxs)("header", {
          children: [(0, vf.jsx)("h3", {
            children: bb.questName
          }), bb.completed && (0, vf.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Wy
          })]
        }), bb.lines.map((yb => (0, vf.jsx)(tc.c, {
          display: yb.display
        }, yb.key)))]
      })
    }

    function kc(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(fh, bb.getSnapshot()), hy = Lh();
      if (!Uy.enabled) return null;
      const fy = !Uy.loading && 0 === Uy.conversations.length;
      return (0, vf.jsx)(af.c, {
        show: Uy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Wy("skyblockDialogue:title")
              }), (0, vf.jsx)("p", {
                children: Wy("skyblockDialogue:intro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: bb.dismiss
            })]
          }), (0, vf.jsxs)("div", {
            className: mf()("SkyblockDialogueBody", {
              SingleColumn: null !== Uy.questFocus || 0 === Uy.characters.length
            }),
            children: [null === Uy.questFocus && Uy.characters.length > 0 && (0, vf.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Uy.characters.map((yb => (0, vf.jsx)(Fh.f, {
                className: mf()("SkyblockDialogueCharacter", {
                  Selected: yb.selected
                }),
                onClick: () => {
                  bb.selectCharacter(yb.id)
                },
                children: (0, vf.jsx)(gf.d, {
                  text: yb.styling
                })
              }, yb.id)))
            }), (0, vf.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Uy.questFocus && (0, vf.jsx)(Fh.f, {
                className: "SkyblockDialogueBack",
                onClick: bb.showCharacters,
                children: Wy("skyblockDialogue:allCharacters")
              }), Uy.loading && (0, vf.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Wy("skyblockDialogue:loading")
              }), fy && (0, vf.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Wy(null === Uy.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Uy.conversations.map((yb => (0, vf.jsx)(wZ, {
                conversation: yb,
                completedLabel: Uy.completedLabel
              }, yb.questId)))]
            })]
          })]
        })
      })
    }

    function NZ(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(Bh, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh();
      return Wy.enabled ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Uy("skyblockGame:autographBook")
              }), (0, vf.jsx)("p", {
                children: Uy("skyblockGame:autographBookIntro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              onClick: bb.dismiss
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, vf.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, vf.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, vf.jsx)("strong", {
                  children: Wy.total
                }), (0, vf.jsx)("span", {
                  children: Uy("skyblockGame:autographTotal")
                })]
              }), (0, vf.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, vf.jsx)("strong", {
                  children: Wy.rankTotal
                }), (0, vf.jsx)("span", {
                  children: Uy("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Wy.entries.length ? (0, vf.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Uy("skyblockGame:autographBookEmpty")
            }) : (0, vf.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Wy.entries.map((yb => (0, vf.jsxs)("li", {
                className: mf()("SkyblockAutograph", {
                  Ranked: null !== yb.rank
                }),
                style: null === yb.rank ? void 0 : {
                  color: yb.rank.colour
                },
                children: [null !== yb.rank && (0, vf.jsx)(Kf.e, {
                  className: "SkyblockAutographRankIcon",
                  name: yb.rank.icon,
                  kit: (0, Kf.f)(yb.rank.icon)
                }), (0, vf.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, vf.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: yb.name
                  }), (0, vf.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== yb.rank && (0, vf.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: yb.rank.label
                    }), (0, vf.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: yb.signedOn
                    })]
                  })]
                })]
              }, yb.key)))
            })]
          })]
        })
      }) : null
    }
    const zc = (0, Oy.memo)((function(yb) {
        let {
          controller: bb
        } = yb;
        return (0, vf.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: bb.display.mountWaypoint,
          children: [(0, vf.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, vf.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, vf.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, vf.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, vf.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, vf.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      IZ = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function xc(yb) {
      return "next" === yb.phase ? "\u2192" : IZ[yb.kind]
    }
    const AZ = (0, Oy.memo)((function(yb) {
      let {
        controller: bb,
        display: Wy
      } = yb;
      const Uy = (0, Rh.m)(PW, bb.getNotificationSnapshot()),
        [hy, fy] = (0, Oy.useState)(!1);
      return (0, Rh.i)("qteStateUpdated", (yb => {
        fy(yb.isActive)
      })), (0, vf.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (hy ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Uy && (0, vf.jsxs)("div", {
          className: `SkyblockQuestNotification ${Uy.kind} ${Uy.phase}`,
          style: {
            "--quest-notification-duration": `${Uy.durationMs}ms`,
            ...Uy.accent && {
              "--quest-notification-accent": Uy.accent
            }
          },
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Uy.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, vf.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: xc(Uy)
            }), Uy.iconItem && (0, vf.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, vf.jsx)(Jh.d, {
                itemName: Uy.iconItem,
                amount: 0
              })
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, vf.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Uy.title
            }), (0, vf.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, vf.jsx)(hf.c, {
                text: Uy.name
              })
            }), Uy.description && (0, vf.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, vf.jsx)(hf.c, {
                text: Uy.description
              })
            }), Uy.reward && (0, vf.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, vf.jsx)(hf.c, {
                text: Uy.reward
              })
            })]
          })]
        }, Uy.token), (null === Uy || void 0 === Uy ? void 0 : Uy.waypointNameKey) && (0, vf.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Uy.waypointNameKey,
          "data-notification-token": Uy.token,
          ref: Wy.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Uy.token}`)]
      })
    }));

    function dZ(yb) {
      const bb = parseInt(yb.replace("#", ""), 16);
      return `${bb>>16&255}, ${bb>>8&255}, ${255&bb}`
    }
    const yP = (0, Oy.memo)((function(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(rU, bb.getSnapshot());
      if (!Uy) return null;
      const hy = "arrival" === Uy.phase;
      return (0, vf.jsxs)("div", {
        className: mf()("SkyblockPortalTransit", {
          Departure: !hy,
          Arrival: hy
        }),
        style: {
          "--portal-rgb": dZ(Uy.colour),
          "--portal-duration": `${Uy.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, vf.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, vf.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            bb.finishArrival(Uy.token)
          }
        }), (0, vf.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, vf.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !hy && (0, vf.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Wy("skyblockGame:portalTransitHeading")
          }), (0, vf.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Wy(Uy.zoneNameKey)
          })]
        })]
      }, Uy.token)
    }));

    function bP() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Wc() {
      const yb = document.querySelector(".SkyblockHudCoins"),
        bb = null === yb || void 0 === yb ? void 0 : yb.getBoundingClientRect();
      return bb && bb.width > 0 ? {
        x: bb.left + Math.min(bb.width, 24) / 2,
        y: bb.top + bb.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Uc(yb) {
      return {
        x: yb.left + yb.width / 2,
        y: yb.top + yb.height / 2
      }
    }

    function hc() {
      var yb;
      const bb = null === (yb = document.querySelector(".HotBar")) || void 0 === yb ? void 0 : yb.getBoundingClientRect();
      return bb && bb.width > 0 ? Uc(bb) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function fc(yb) {
      let {
        items: bb,
        origins: Wy,
        target: Uy
      } = yb;
      return (0, vf.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: bb.map(((yb, bb) => {
          const hy = Wy[bb];
          return (0, vf.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${hy.x}px`,
              top: `${hy.y}px`,
              "--item-dx": Uy.x - hy.x + "px",
              "--item-dy": Uy.y - hy.y + "px",
              "--item-delay": 2e3 + 160 * bb + "ms",
              "--item-flight": "700ms"
            },
            children: (0, vf.jsx)(Jh.d, {
              itemName: yb.dailyRewardItemName,
              amount: 0
            })
          }, yb.dailyRewardItemName)
        }))
      })
    }

    function Zc(yb, bb) {
      const Wy = -Math.PI / 2 + 1.25 * (yb / (bb - 1) * 2 - 1),
        Uy = 70 + yb % 3 * 22;
      return {
        x: Math.cos(Wy) * Uy,
        y: Math.sin(Wy) * Uy * .7
      }
    }

    function cP(yb) {
      let {
        origin: bb,
        target: Wy,
        count: Uy
      } = yb;
      const hy = [];
      for (let fy = 0; fy < Uy; fy++) {
        const yb = Zc(fy, Uy);
        hy.push((0, vf.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${bb.x}px`,
            top: `${bb.y}px`,
            "--coin-bx": `${yb.x}px`,
            "--coin-by": `${yb.y}px`,
            "--coin-dx": Wy.x - bb.x + "px",
            "--coin-dy": Wy.y - bb.y + "px",
            "--coin-delay": `${QW(fy,Uy)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, vf.jsx)(Jh.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, fy))
      }
      return (0, vf.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: hy
      })
    }

    function Pc(yb) {
      let {
        day: bb
      } = yb;
      const Wy = Ry[bb - 1];
      return (0, vf.jsxs)(vf.Fragment, {
        children: [(0, vf.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, vf.jsx)(Jh.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Gh.e)(Wy.dailyRewardCoins)]
        }), Wy.dailyRewardItems.map((yb => (0, vf.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, vf.jsx)(Jh.d, {
            itemName: yb.dailyRewardItemName,
            amount: 0
          }), "\xd7", yb.dailyRewardItemAmount]
        }, yb.dailyRewardItemName)))]
      })
    }

    function oc(yb) {
      let {
        day: bb
      } = yb;
      const Wy = ib(bb);
      return (0, vf.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Ry.map(((yb, Uy) => {
          const hy = Uy + 1;
          return (0, vf.jsxs)("li", {
            className: mf()("SkyblockDailyRewardTile", {
              Claimed: hy < bb && hy !== Wy,
              Today: hy === bb,
              Tomorrow: hy === Wy,
              Jackpot: hy === vb
            }),
            children: [(0, vf.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: hy
            }), (0, vf.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, vf.jsx)(Jh.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Gh.e)(yb.dailyRewardCoins)]
            }), yb.dailyRewardItems.map((yb => (0, vf.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, vf.jsx)(Jh.d, {
                itemName: yb.dailyRewardItemName,
                amount: 0
              }), "\xd7", yb.dailyRewardItemAmount]
            }, yb.dailyRewardItemName)))]
          }, hy)
        }))
      })
    }

    function Bc(yb) {
      let {
        view: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Oy.useRef)(null), hy = (0, Oy.useRef)(null), [fy, Zy] = (0, Oy.useState)(null);
      (0, Oy.useLayoutEffect)((() => {
        var yb;
        const bb = null === (yb = Uy.current) || void 0 === yb ? void 0 : yb.getBoundingClientRect();
        if (bb) {
          var Wy, fy;
          const yb = Array.from(null !== (Wy = null === (fy = hy.current) || void 0 === fy ? void 0 : fy.children) && void 0 !== Wy ? Wy : [], (yb => Uc(yb.getBoundingClientRect())));
          Zy({
            origin: Uc(bb),
            target: Wc(),
            itemOrigins: yb,
            itemTarget: hc()
          })
        }
      }), []);
      const cb = ib(bb.day),
        Py = function(yb, bb) {
          const [Wy, Uy] = (0, Oy.useState)((() => bP() ? yb : 0));
          return (0, Oy.useEffect)((() => {
            if (bP()) return;
            const Wy = performance.now();
            let hy = 0;
            const fy = Zy => {
              const cb = Math.min(Math.max((Zy - Wy) / bb, 0), 1);
              Uy(Math.round(yb * (1 - (1 - cb) ** 3))), cb < 1 && (hy = requestAnimationFrame(fy))
            };
            return hy = requestAnimationFrame(fy), () => {
              cancelAnimationFrame(hy)
            }
          }), [yb, bb]), Wy
        }(bb.coins, 450);
      return (0, vf.jsxs)("div", {
        className: mf()("SkyblockDailyReward", {
          Jackpot: bb.day === vb
        }),
        style: {
          "--daily-duration": `${bb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, vf.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, vf.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, vf.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Wy("skyblockGame:dailyRewardTitle")
            }), (0, vf.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Wy("skyblockGame:dailyRewardDay", {
                day: String(bb.day)
              })
            })]
          }), (0, vf.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Uy,
            children: [(0, vf.jsx)(Jh.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, vf.jsxs)("span", {
              children: ["+", (0, Gh.e)(Py)]
            })]
          }), bb.items.length > 0 && (0, vf.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: hy,
            children: bb.items.map((yb => (0, vf.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, vf.jsx)(Jh.d, {
                itemName: yb.dailyRewardItemName,
                amount: 0
              }), "\xd7", yb.dailyRewardItemAmount]
            }, yb.dailyRewardItemName)))
          }), (0, vf.jsx)(oc, {
            day: bb.day
          }), (0, vf.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Wy("skyblockGame:dailyRewardComeBack"), (0, vf.jsx)(Pc, {
              day: cb
            })]
          })]
        }), null !== fy && (0, vf.jsx)(cP, {
          origin: fy.origin,
          target: fy.target,
          count: bb.flyingCoins
        }), null !== fy && fy.itemOrigins.length === bb.items.length && (0, vf.jsx)(fc, {
          items: bb.items,
          origins: fy.itemOrigins,
          target: fy.itemTarget
        })]
      })
    }
    const Kc = (0, Oy.memo)((function(yb) {
        let {
          controller: bb
        } = yb;
        const Wy = (0, Rh.m)(FW, bb.getSnapshot());
        return Wy ? (0, vf.jsx)(Bc, {
          view: Wy
        }, Wy.token) : null
      })),
      ec = "Gold Coin";

    function qP(yb) {
      return 650 + 220 * yb
    }

    function sc(yb) {
      return {
        "--letter-delay": `${qP(yb)}ms`,
        "--letter-land": `${qP(yb)+300}ms`
      }
    }

    function Sc(yb) {
      let {
        letterCount: bb
      } = yb;
      return (0, vf.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, vf.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, vf.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, vf.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: bb
        }, ((yb, bb) => (0, vf.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: sc(bb),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, bb)))]
      })
    }

    function Ec(yb) {
      var bb, Wy, Uy;
      let {
        letter: hy,
        index: fy
      } = yb;
      const {
        t: Zy
      } = (0, Oh.D)(), cb = null !== (bb = null === (Wy = hy.items[0]) || void 0 === Wy ? void 0 : Wy.itemName) && void 0 !== bb ? bb : ec;
      return (0, vf.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: sc(fy),
        children: [(0, vf.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, vf.jsx)(Jh.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, vf.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Zy(hy.reasonKey, null !== (Uy = hy.reasonParams) && void 0 !== Uy ? Uy : void 0)
        }), (0, vf.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [hy.coins > 0 && (0, vf.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, vf.jsx)(Jh.d, {
              itemName: ec,
              amount: 0
            }), "+", (0, Gh.e)(hy.coins)]
          }), hy.items.map(((yb, bb) => (0, vf.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, vf.jsx)(Jh.d, {
              itemName: yb.itemName,
              amount: 0
            }), yb.label, " \xd7", yb.amount]
          }, bb)))]
        })]
      })
    }

    function lc(yb) {
      let {
        view: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)();
      return (0, vf.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${bb.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${qP(bb.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, vf.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, vf.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, vf.jsx)(Sc, {
              letterCount: bb.letters.length
            }), (0, vf.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Wy("skyblockGame:mailboxTitle")
            })]
          }), (0, vf.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: bb.letters.map(((yb, bb) => (0, vf.jsx)(Ec, {
              letter: yb,
              index: bb
            }, bb)))
          }), bb.more > 0 && (0, vf.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Wy("skyblockGame:mailboxMore", {
              count: String(bb.more)
            })
          })]
        })
      })
    }
    const mP = (0, Oy.memo)((function(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(DW, bb.getSnapshot());
      return Wy ? (0, vf.jsx)(lc, {
        view: Wy
      }, Wy.token) : null
    }));

    function Cc(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(rh, bb.getSnapshot());
      if (null === Uy) return null;
      const hy = Uy.fullSet ? "empty" === Uy.fuelState ? {
        text: Wy("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Wy("skyblockGame:magmawardHudFullSet", {
          worn: String(Uy.wornCount)
        }),
        tone: "partial"
      };
      return (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsxs)("div", {
          className: mf()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Uy.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Uy.fullSet,
            "SkyblockMagmawardHud-armed": Uy.fullSet && "empty" !== Uy.fuelState
          }),
          children: [null !== Uy.flare && (0, vf.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Uy.flare}`
          }, `flare:${Uy.flareToken}`), (0, vf.jsx)("div", {
            className: mf()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Uy.setLit
            }),
            children: Uy.pieces.map(((yb, bb) => (0, vf.jsx)("div", {
              className: mf()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: yb.worn,
                SkyblockMagmawardPieceJustWorn: yb.justWorn
              }),
              children: (0, vf.jsx)(Jh.d, {
                itemName: yb.itemName,
                amount: 0
              })
            }, `${bb}:${yb.wornToken}`)))
          }, `pieces:${Uy.setLitToken}`), (0, vf.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, vf.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, vf.jsxs)("div", {
              className: mf()("SkyblockMagmawardFuelCounter", Uy.pulse && `SkyblockMagmawardFuelCounter-${Uy.pulse}`),
              children: [(0, vf.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, vf.jsx)(Jh.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, vf.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Uy.fuel
              })]
            }, `counter:${Uy.pulseToken}`), "burn" === Uy.pulse && (0, vf.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Uy.pulseToken}`)]
          }), hy && (0, vf.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${hy.tone} SmallTextBold`,
            children: hy.text
          })]
        })
      })
    }

    function Tc(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy,
        selectedLanguage: Uy
      } = (0, Oh.D)(), hy = (0, Rh.m)(ah, bb.getSnapshot());
      return null === hy ? null : (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsxs)("div", {
          className: mf()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: hy.inRange
          }),
          style: {
            "--glowtide-colour": hy.colour
          },
          "aria-label": Wy("skyblockGame:glowtideChipLabel"),
          children: [(0, vf.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), hy.inRange ? (0, vf.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Wy("skyblockGame:glowtideChipInRange")
          }, `call:${hy.inRangeToken}`) : (0, vf.jsxs)(vf.Fragment, {
            children: [(0, vf.jsx)("div", {
              ref: bb.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, vf.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Wy("skyblockGame:waypointDistance", {
                distance: Jy(hy.distance, Uy.code)
              })
            })]
          })]
        })
      })
    }

    function Vc(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(pU, bb.getSnapshot());
      return null === Uy ? null : (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsxs)("div", {
          className: mf()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Uy.full
          }),
          "aria-label": Wy("skyblockGame:glowMeterLabel", {
            fill: String(Uy.fill),
            Hy: String(Uy.Hy)
          }),
          children: [Uy.burst && (0, vf.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Uy.burstToken}`), (0, vf.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, vf.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Uy.ratio})`
              }
            }), Uy.gained && (0, vf.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Uy.gainToken}`), Uy.full && Array.from({
              length: 5
            }, ((yb, bb) => (0, vf.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, bb)))]
          }), Uy.full && Uy.rares.map((yb => (0, vf.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, vf.jsx)(Jh.d, {
              itemName: yb,
              amount: 0
            })
          }, yb))), Uy.ready && (0, vf.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, vf.jsx)("span", {
              children: Wy("skyblockGame:glowMeterReady")
            })
          }, `ready:${Uy.fullToken}`)]
        })
      })
    }

    function Jc(yb) {
      let {
        controller: bb
      } = yb;
      const {
        t: Wy
      } = (0, Oh.D)(), Uy = (0, Rh.m)(QU, bb.getSnapshot());
      if (null === Uy) return null;
      const hy = "waiting" === Uy.phase,
        fy = {
          animationDuration: `${Uy.waitMs}ms`,
          animationDelay: -Uy.elapsedMs + "ms"
        },
        Zy = hy ? void 0 : {
          animationDuration: `${Uy.waitMs}ms`
        };
      return (0, vf.jsxs)("div", {
        className: hy ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [hy && (0, vf.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((yb, bb) => (0, vf.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, bb))), (0, vf.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: fy
          }), (0, vf.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, vf.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, vf.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: fy
            })]
          }), (0, vf.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, vf.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Zy,
          children: Wy(Uy.line)
        }, Uy.lineIndex)]
      }, Uy.token)
    }

    function gP(yb) {
      let {
        chart: bb,
        showHere: Wy,
        className: Uy
      } = yb;
      return (0, vf.jsx)("div", {
        className: mf()("SkyblockTideChartGrid", Uy, null !== bb.pictureName && "Complete"),
        "aria-hidden": "true",
        children: bb.cells.map(((yb, Uy) => {
          const hy = 0 !== (bb.pulseCells & 1 << Uy),
            fy = bb.castCell === Uy;
          return (0, vf.jsx)("span", {
            className: mf()("SkyblockTideChartCell", `Cell-${yb}`, hy && "Pulse", fy && "Cast", Wy && bb.hereCell === Uy && "Here")
          }, `${Uy}:${hy?`p${bb.pulseToken}`:""}:${fy?`c${bb.castToken}`:""}`)
        }))
      })
    }

    function Gc(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(DU, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Wy.chip;
      if (!Wy.enabled || null === hy) return null;
      const fy = Uy("skyblockGame:tideChartsChipLabel", {
        island: hy.islandName,
        lit: String(hy.lit),
        ink: String(hy.ink)
      });
      return (0, vf.jsx)(Th.f, {
        placement: "statBars",
        children: (0, vf.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: mf()("SkyblockTideChartsChip", Wy.open && "Open", null !== hy.pictureName && "Complete"),
          "aria-label": fy,
          title: fy,
          onMouseDown: yb => {
            yb.preventDefault()
          },
          onClick: bb.toggle,
          children: [(0, vf.jsx)(gP, {
            chart: hy,
            showHere: !1,
            className: "Mini"
          }), (0, vf.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [hy.lit, "/", hy.ink]
          })]
        })
      })
    }

    function Oc(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, Rh.m)(DU, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Oh.D)(),
        hy = Lh(),
        fy = Wy.card;
      return Wy.enabled && null !== fy ? (0, vf.jsx)(af.c, {
        show: Wy.open,
        close: bb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, vf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: hy,
          onKeyDown: ph,
          children: [(0, vf.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, vf.jsxs)("div", {
              children: [(0, vf.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Uy("skyblockGame:tideChartsTitle")
              }), (0, vf.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Uy("skyblockGame:tideChartsIntro")
              })]
            }), (0, vf.jsx)(Fh.h, {
              padIgnore: !0,
              ariaLabel: Uy("skyblockGame:tideChartsClose"),
              onClick: bb.dismiss
            })]
          }), Wy.tabs.length > 1 && (0, vf.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Uy("skyblockGame:tideChartsIslands"),
            children: Wy.tabs.map((yb => (0, vf.jsx)("button", {
              type: "button",
              className: mf()("SkyblockTideChartsTab", yb.selected && "Selected"),
              "aria-pressed": yb.selected,
              onClick: () => {
                bb.cU(yb.island)
              },
              children: yb.name
            }, yb.island)))
          }), (0, vf.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, vf.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": fy.gridLabel,
              children: (0, vf.jsx)(gP, {
                chart: fy,
                showHere: !0,
                className: "Large"
              })
            }), (0, vf.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, vf.jsx)("h3", {
                children: fy.islandName
              }), (0, vf.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: fy.litText
              }), null === fy.pictureName ? (0, vf.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Uy("skyblockGame:tideChartsPictureHidden")
              }) : (0, vf.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Uy("skyblockGame:tideChartsPictureRevealed", {
                  picture: fy.pictureName
                })
              }, fy.pictureName), (0, vf.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, vf.jsxs)("li", {
                  children: [(0, vf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Uy("skyblockGame:tideChartsLegendLit")]
                }), (0, vf.jsxs)("li", {
                  children: [(0, vf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Uy("skyblockGame:tideChartsLegendClear")]
                }), null !== fy.hereCell && (0, vf.jsxs)("li", {
                  children: [(0, vf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Uy("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, vf.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, vf.jsx)("span", {
                  children: Wy.turnsText
                }), (0, vf.jsx)("span", {
                  children: Wy.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Rc(yb) {
      var bb;
      let {
        controller: Wy
      } = yb;
      const {
        selectedLanguage: Uy
      } = (0, Oh.D)(), hy = Uy.code;
      (0, Oy.useEffect)((() => {
        Wy.setTranslator(((yb, bb) => (0, Oh.A)(hy, yb, bb)), hy, ((yb, bb) => (0, Oh.t)(hy, yb, bb)))
      }), [Wy, hy]);
      const fy = (0, Rh.m)(ey, Wy.map.getSnapshot()),
        {
          openInGameMenuName: Zy
        } = (0, Ch.h)(["openInGameMenuName"]);
      return (0, vf.jsxs)(vf.Fragment, {
        children: [(0, vf.jsx)(AZ, {
          controller: Wy.quests,
          display: Wy.navigation.display
        }), fy.enabled && !Zy && (0, vf.jsx)(bZ, {
          controller: Wy.navigation
        }), (0, vf.jsx)(Mh, {
          controller: Wy,
          minimap: fy.enabled && (null === (bb = fy.presentation) || void 0 === bb ? void 0 : bb.minimap) && (0, vf.jsx)(yZ, {
            view: fy.presentation.minimap,
            navigation: Wy.navigation,
            controller: Wy.map
          }),
          children: (0, vf.jsx)(Bf, {
            controller: Wy.quests,
            surface: "hud"
          })
        }), (0, vf.jsx)(zc, {
          controller: Wy.navigation
        }), (0, vf.jsx)(yP, {
          controller: Wy.portalTransit
        }), (0, vf.jsx)(Kc, {
          controller: Wy.dailyReward
        }), (0, vf.jsx)(mP, {
          controller: Wy.mailbox
        }), (0, vf.jsx)(Cc, {
          controller: Wy.magmaward
        }), (0, vf.jsx)(Tc, {
          controller: Wy.glowtide
        }), (0, vf.jsx)(BZ, {
          controller: Wy.passage
        }), (0, vf.jsx)(Gc, {
          controller: Wy.tideCharts
        }), (0, vf.jsx)(Vc, {
          controller: Wy.glowMeter
        }), (0, vf.jsx)(VZ, {
          controller: Wy.reachLog
        }), (0, vf.jsx)(Jc, {
          controller: Wy.hushWait
        }), (0, vf.jsx)(lZ, {
          controller: Wy.lampLight
        }), (0, vf.jsx)(Wf, {
          controller: Wy.skills,
          surface: "hud"
        })]
      })
    }

    function vP(yb) {
      let {
        controller: bb
      } = yb;
      return (0, vf.jsxs)(vf.Fragment, {
        children: [(0, vf.jsx)(dh, {
          controller: bb.map,
          navigation: bb.navigation
        }), (0, vf.jsx)(Wf, {
          controller: bb.skills,
          surface: "menu"
        }), (0, vf.jsx)(Bf, {
          controller: bb.quests,
          surface: "menu"
        }), (0, vf.jsx)(tZ, {
          controller: bb.dungeons
        }), (0, vf.jsx)(Nf, {
          controller: bb.collections
        }), (0, vf.jsx)(xZ, {
          controller: bb.questGraph
        }), (0, vf.jsx)(WZ, {
          controller: bb.forge
        }), (0, vf.jsx)(PZ, {
          controller: bb.smuggler
        }), (0, vf.jsx)(CZ, {
          controller: bb.keepersChair,
          lampLight: bb.lampLight
        }), (0, vf.jsx)(DZ, {
          controller: bb.reachLog,
          regulars: bb.regulars,
          hiddenWaters: bb.hiddenWaters
        }), (0, vf.jsx)(OZ, {
          controller: bb.regulars
        }), (0, vf.jsx)(eZ, {
          controller: bb.passage
        }), (0, vf.jsx)(Oc, {
          controller: bb.tideCharts
        }), (0, vf.jsx)(kc, {
          controller: bb.dialogue
        }), (0, vf.jsx)(NZ, {
          controller: bb.autographs
        })]
      })
    }
    var iP = Wy(35521);
    const Mc = AW + fU;

    function Yc(yb, bb, Wy, Uy, hy) {
      const fy = [],
        Zy = [],
        cb = Wy => {
          const Uy = yb.playSound(bb, Wy.sound, Wy.volume, Wy.rate);
          Uy && (Zy.push(Uy), void 0 !== Wy.cutAfter && fy.push(setTimeout((() => {
            Uy.fade(Uy.getVolume(), 0, 300)
          }), Wy.cutAfter)))
        };
      for (const Py of function(yb, bb) {
          const Wy = [{
            sound: "rpgKnifeSlice1",
            beat: AW,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: AW,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: AW,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: AW,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: AW,
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
            sound: (0, iP.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Mc + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, iP.d)("bigDrumSwish"),
            beat: Mc + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Mc + 60,
            lead: 180,
            volume: .5 + .06 * yb,
            rate: .82 + .07 * yb
          }];
          return yb >= 4 && Wy.push({
            sound: "exp_levelup",
            beat: Mc + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), bb && Wy.push({
            sound: "trumpetFlare",
            beat: Mc + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Wy.push({
            sound: "harp_pling",
            beat: dW,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Wy
        }(Wy, Uy)) hy ? fy.push(setTimeout((() => {
        cb(Py)
      }), Math.max(0, Py.beat - Py.lead / Py.rate))) : Py.beat !== AW && "magicAccent2" !== Py.sound && "trumpetFlare" !== Py.sound || cb(Py);
      return () => {
        for (const yb of fy) clearTimeout(yb);
        for (const yb of Zy) yb.fade(yb.getVolume(), 0, 120)
      }
    }
    class Xc {
      constructor(yb) {
        this.deps = yb, this.pending = new Map, this.localHook = null
      }
      hookWaiting(yb, bb) {
        this.pending.delete(yb);
        const Wy = this.deps.now();
        if (null === bb) {
          var Uy;
          if ((null === (Uy = this.localHook) || void 0 === Uy ? void 0 : Uy.hookId) === yb) {
            const yb = Wy >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(yb)
          }
          return
        }
        const hy = Wy + bb;
        this.settle(yb, hy) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(yb, {
          untilMs: Wy + 1e3,
          biteAtMs: hy
        }))
      }
      getLocalHook() {
        var yb, bb;
        return null !== (yb = null === (bb = this.localHook) || void 0 === bb ? void 0 : bb.hookId) && void 0 !== yb ? yb : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const yb = this.deps.now();
        for (const [bb, {
            untilMs: Wy,
            biteAtMs: Uy
          }] of this.pending)(this.settle(bb, Uy) || yb > Wy) && this.pending.delete(bb)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(yb, bb) {
        const Wy = this.deps.getLineOwner(yb);
        if (null === Wy) return !1;
        if (!this.deps.isLocalPlayer(Wy)) return !0;
        if (this.localHook = {
            hookId: yb,
            biteAtMs: bb
          }, !this.deps.isHushWaiting()) {
          const [bb, Wy] = this.deps.getHookPosition(yb);
          this.deps.onCastLanded(bb, Wy)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var nc = Wy(3525);
    const uc = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      rP = {
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
    class Hc {
      constructor(yb) {
        this.deps = yb, this.tell = null
      }
      receiveTell(yb) {
        let {
          biteTellTier: bb
        } = yb;
        this.tell = {
          tier: bb,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(yb) {
        const bb = this.tell;
        if (this.tell = null, !yb) return;
        const Wy = null !== bb && this.deps.now() - bb.atMs <= 3e3 ? bb.tier : 0;
        this.deps.vibrate(uc[Wy])
      }
      burstAtHook() {
        const yb = this.tell,
          bb = this.deps.getLocalHookPosition();
        null === yb || yb.burst || null === bb || (yb.burst = !0, this.deps.playParticles(function(yb, bb) {
          let [Wy, Uy, hy] = bb;
          const {
            count: fy,
            rise: Zy,
            colour: cb
          } = rP[yb], [Py, oy, By] = cb;
          return {
            texture: "glint",
            pos1: [Wy - .3, Uy, hy - .3],
            pos2: [Wy + .3, Uy + .2, hy + .3],
            dir1: [-.6, Zy, -.6],
            dir2: [.6, 1.4 * Zy, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: fy,
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
              minColor: [Py, oy, By, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Py, oy, By, 0],
              maxColor: [Py, oy, By, 0]
            }],
            blendMode: nc.e.Add,
            hideDist: 48
          }
        }(yb.tier, bb)))
      }
    }
    var aP = Wy(1115),
      Fc = Wy(1580),
      pc = Wy(33);

    function Lc(yb, bb) {
      return [{
        timeFraction: 0,
        minColor: [255 * yb[0], 255 * yb[1], 255 * yb[2], 1],
        maxColor: [255 * bb[0], 255 * bb[1], 255 * bb[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Qc = [0, 0, 0],
      jP = {
        texture: "glint",
        mipmaps: !1,
        Hy: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Qc,
        dir2: Qc,
        blendMode: nc.e.OneOne
      },
      Dc = {
        ...jP,
        colorGradients: Lc([1, .88, .38], [1, .65, .15])
      },
      tP = {
        ...jP,
        colorGradients: Lc([.55, .95, 1], [.9, 1, 1])
      },
      wc = [.5, .5, .5],
      kP = {
        texture: "glint",
        mipmaps: !1,
        Hy: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Lc([1, .12, .12], [1, .35, .2]),
        blendMode: nc.e.OneOne
      };
    class Nc {
      constructor() {
        this.drops = new Map
      }
      pU(yb, bb) {
        if ("overflowFlash" === bb.kind) {
          const [Wy, Uy, hy] = bb.position, fy = yb.createParticles(kP, {
            pos: [Wy, Uy, hy],
            half: wc
          });
          return fy.emit(18), void fy.stop()
        }
        this.drops.has(bb.itemId) || this.drops.set(bb.itemId, {
          owner: bb.owner,
          cosmetic: bb.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Zb(yb) {
        if (0 === this.drops.size) return;
        const bb = performance.now(),
          Wy = yb.getCameraPosition();
        let Uy = 0;
        for (const fy of this.drops.values()) null !== fy.particles && Uy++;
        for (const [fy, Zy] of this.drops) {
          const cb = yb.getPositionView(fy);
          if (null === cb) {
            var hy;
            if (Zy.seen || bb - Zy.markedAt > 5e3) null !== Zy.particles && Uy--, null === (hy = Zy.particles) || void 0 === hy || hy.stop(), this.drops.delete(fy);
            continue
          }
          Zy.cosmetic || !yb.isLocalPlayer(Zy.owner) || Zy.pickupDelayCleared || (yb.clearPickupDelay(fy), Zy.pickupDelayCleared = !0);
          const Py = Zy.lastPosition,
            oy = Zy.seen && (cb[0] - Py[0]) ** 2 + (cb[1] - Py[1]) ** 2 + (cb[2] - Py[2]) ** 2 > 4e-4,
            By = (cb[0] - Wy[0]) ** 2 + (cb[1] - Wy[1]) ** 2 + (cb[2] - Wy[2]) ** 2 < 2025;
          Zy.seen = !0, Py[0] = cb[0], Py[1] = cb[1], Py[2] = cb[2], oy && (Zy.lastMovingAt = bb), null !== Zy.particles && (!By || bb - Zy.lastMovingAt > 500) && (Zy.particles.stop(), Zy.particles = null, Uy--), oy && By && null === Zy.particles && Uy < 32 && (Zy.particles = yb.createParticles(Zy.cosmetic ? tP : Dc, {
            pos: cb
          }), Uy++), null !== Zy.particles && (Zy.particles.moveTo(cb), Zy.particles.setEmitRate(oy ? 12 : 0)), !oy && null === Zy.particles && bb - Math.max(Zy.lastMovingAt, Zy.markedAt) > 2e3 && this.drops.delete(fy)
        }
      }
      dispose() {
        for (const bb of this.drops.values()) {
          var yb;
          null === (yb = bb.particles) || void 0 === yb || yb.stop()
        }
        this.drops.clear()
      }
    }
    var zP = Wy(167);
    const Ic = zP.c.oq * zP.c.playerEyeToHeightRatio;
    class xP {
      constructor(yb) {
        this.host = yb, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      pU(yb) {
        this.lava = yb, this.nextUpdateAt = 0
      }
      Zb() {
        var yb;
        const bb = this.host.now();
        if (bb < this.nextUpdateAt) return;
        this.nextUpdateAt = bb + 250;
        const Wy = this.host.playerPosition(),
          Uy = Wy && this.findNearest([Wy[0], Wy[1] + Ic, Wy[2]]);
        if (!Uy || Uy.distance >= 40) return void this.stop();
        const hy = .5 * Math.min(1, (40 - Uy.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(hy) : this.loop = this.host.play("lavaFlow", hy, Uy.position, 40 + Ic, 9, !0), null === (yb = this.loop) || void 0 === yb || yb.setPosition(Uy.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var yb;
        null === (yb = this.loop) || void 0 === yb || yb.stop(), this.loop = null
      }
      findNearest(yb) {
        let bb = -1,
          Wy = 1 / 0;
        for (let Uy = 0; Uy < this.lava.length; Uy += 3) {
          const hy = this.lava[Uy] - yb[0],
            fy = this.lava[Uy + 1] - yb[1],
            Zy = this.lava[Uy + 2] - yb[2],
            cb = hy * hy + fy * fy + Zy * Zy;
          cb < Wy && (Wy = cb, bb = Uy)
        }
        return bb < 0 ? null : {
          position: [this.lava[bb], this.lava[bb + 1], this.lava[bb + 2]],
          distance: Math.sqrt(Wy)
        }
      }
    }
    var Ac = Wy(1552),
      dc = Wy(37310);
    const yo = {
      "Grey Portal": "Gray"
    };
    for (const ZP of hy.Bc) yo[`${ZP} Portal`] = ZP;
    const bo = Object.keys(yo),
      WP = Object.fromEntries(bo.map((yb => [yb, (0, hy.Y)(hy.K[`${(0,hy.oe)(yo[yb])}Team`])])));
    Object.fromEntries(bo.map((yb => [yb, hy.K[`${(0,hy.oe)(yo[yb])}UiText`]])));
    class UP {
      constructor(yb, bb) {
        this.presentation = yb, this.portal = bb, this.unlocked = void 0
      }
      pU(yb) {
        const bb = !1 === this.unlocked && yb;
        this.unlocked = yb, this.Zb();
        const {
          min: Wy,
          max: Uy,
          unlockedBlock: hy
        } = this.portal;
        if (bb && this.presentation.hasChunk(...Wy)) {
          const [yb, bb, fy] = WP[hy];
          this.presentation.playParticles({
            pos1: [...Wy],
            pos2: Uy.map((yb => yb + 1)),
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
              minColor: [yb, bb, fy, 1],
              maxColor: [Math.min(255, yb + 55), Math.min(255, bb + 55), Math.min(255, fy + 90), 1]
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
      Zb() {
        var yb;
        const bb = this.unlocked ? this.portal.unlockedBlock : null !== (yb = this.portal.lockedBlock) && void 0 !== yb ? yb : "Light Gray Portal",
          {
            min: Wy,
            max: Uy
          } = this.portal;
        for (let hy = Wy[0]; hy <= Uy[0]; hy++)
          for (let yb = Wy[1]; yb <= Uy[1]; yb++)
            for (let fy = Wy[2]; fy <= Uy[2]; fy++) this.presentation.hasChunk(hy, yb, fy) && this.presentation.XE(hy, yb, fy) !== bb && this.presentation.uby(hy, yb, fy, bb)
      }
    }
    const hP = {
        farming_1: {
          raises: yb => "NPC" === yb.type && "chef" === yb.variation,
          rise: .4
        },
        fishing_1: {
          raises: yb => "Draugr Warper" === yb.type,
          rise: .4
        }
      },
      fP = (yb, bb, Wy, fy) => {
        let {
          localPlayerId: Zy
        } = fy;
        const cb = new Eh({
          translate: (yb, bb) => (0, Oh.A)(aP.f.get().getCurrentLanguageCode(), yb, bb),
          translateWithIcons: (yb, bb) => (0, Oh.t)(aP.f.get().getCurrentLanguageCode(), yb, bb),
          setMenuOpen: yb => {
            yb ? (0, tb.t)() : (0, tb.h)()
          },
          dismissMenu: tb.k,
          publishSkills: yb => {
            wy.g.EZ(UW, yb, !0)
          },
          publishQuests: yb => {
            wy.g.EZ(cU, yb, !0)
          },
          publishQuestNotification: yb => {
            wy.g.EZ(PW, yb, !0)
          },
          publishDungeons: yb => {
            wy.g.EZ(KW, yb, !0)
          },
          publishCollections: yb => {
            wy.g.EZ(nW, yb, !0)
          },
          publishMap: yb => {
            wy.g.EZ(ey, yb, !0)
          },
          publishHud: yb => {
            wy.g.EZ(qf, yb, !0)
          },
          publishPortalTransit: yb => {
            wy.g.EZ(rU, yb, !0)
          },
          isLoadingScreenUp: () => Ch.d.get("loadingOverlayVisible"),
          publishDailyReward: yb => {
            wy.g.EZ(FW, yb, !0)
          },
          publishMailbox: yb => {
            wy.g.EZ(DW, yb, !0)
          },
          publishQuestGraph: yb => {
            wy.g.EZ(wW, yb, !0)
          },
          publishForge: yb => {
            wy.g.EZ(eU, yb, !0)
          },
          publishSmuggler: yb => {
            wy.g.EZ(SU, yb, !0)
          },
          publishKeepersChair: yb => {
            wy.g.EZ(GU, yb, !0)
          },
          publishReachLog: yb => {
            wy.g.EZ(RU, yb, !0)
          },
          publishLampLight: yb => {
            wy.g.EZ(nU, yb, !0)
          },
          publishMagmaward: yb => {
            wy.g.EZ(rh, yb, !0)
          },
          publishGlowtide: yb => {
            wy.g.EZ(ah, yb, !0)
          },
          publishGlowMeter: yb => {
            wy.g.EZ(pU, yb, !0)
          },
          publishHushWait: yb => {
            wy.g.EZ(QU, yb, !0)
          },
          publishPassage: yb => {
            wy.g.EZ(mh, yb, !0)
          },
          publishTideCharts: yb => {
            wy.g.EZ(DU, yb, !0)
          },
          publishRegulars: yb => {
            wy.g.EZ(AU, yb, !0)
          },
          publishHiddenWaters: yb => {
            wy.g.EZ(Uh, yb, !0)
          },
          publishDialogue: yb => {
            wy.g.EZ(fh, yb, !0)
          },
          publishAutographs: yb => {
            wy.g.EZ(Bh, yb, !0)
          },
          onDailyRewardStarted: yb => {
            ab.playSound(Zy, yb.day === vb ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (yb, bb) => {
            ab.playSound(Zy, "exp_collect", .35, 1 + .6 * yb / (bb - 1)), wy.g.EZ(pW, yb === bb - 1)
          },
          onDailyRewardItemLanded: yb => {
            ab.playSound(Zy, "pickUp", .6, 1 + .15 * yb)
          },
          onMailboxStarted: () => {
            ab.playSound(Zy, "rpgMetalClick", .6, 1), ab.playSound(Zy, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            ab.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: pc.g,
          requestTracking: yb => {
            ab.sendCommand(`quests track ${yb}`)
          },
          requestDungeonEnter: (yb, bb) => {
            ab.sendCommand(`${Yy.n}${yb} ${bb}`)
          },
          requestQuestJump: yb => {
            ab.sendCommand(`${Xy} jump ${yb}`)
          },
          requestQuestArrive: (yb, bb) => {
            const Wy = `${Xy} arrive ${yb}`;
            ab.sendCommand(bb ? `${Wy} complete` : Wy)
          },
          requestForge: yb => {
            let {
              blade: bb,
              guard: Wy,
              handle: Uy
            } = yb;
            ab.sendCommand(`forge ${bb} ${Wy} ${Uy}`)
          },
          requestDialogue: () => {
            ab.sendCommand("quests dialogue")
          },
          requestSmuggle: (yb, bb) => {
            ab.sendCommand(`smuggle ${yb} ${bb}`)
          },
          requestKeepersChairAim: yb => {
            ab.sendCommand(`keeperschair-aim ${yb}`)
          },
          requestReachLogOpen: () => {
            ab.sendCommand("reachlog-open")
          },
          requestLampLight: yb => {
            ab.sendCommand(`${yb}`)
          },
          requestTravel: yb => {
            ab.sendCommand(`map travel ${yb.kind} ${yb.id} ${yb.requestId}`)
          }
        });
        let Py, oy, By, Ky, qb, sy, Sy, Ty, Vy, Jy, gb, Ry, ib;
        const ny = new Nc;
        let ab, Ly = null;
        const Qy = hP[null !== Wy && void 0 !== Wy ? Wy : ""],
          Ny = (yb, bb) => {
            null !== Qy && void 0 !== Qy && Qy.raises(bb) && ab.setNametagOffset(yb, Qy.rise)
          },
          zb = new Hc({
            getLocalHookPosition: () => {
              const yb = Iy.getLocalHook();
              return null !== yb && ab.checkValid(yb) ? ab.Tl(yb) : null
            },
            playParticles: yb => {
              ab.playParticleEffect(yb)
            },
            vibrate: yb => {
              kb.e.play("fishBite", yb)
            },
            now: () => performance.now()
          }),
          Iy = new Xc({
            getLineOwner: yb => ab.checkValid(yb) ? ab.getLineOwner(yb) : null,
            isLocalPlayer: yb => ab.isLocalPlayer(yb),
            getHookPosition: yb => {
              const [bb, , Wy] = ab.Tl(yb);
              return [bb, Wy]
            },
            isHushWaiting: () => {
              var yb;
              return "waiting" === (null === (yb = cb.hushWait.getSnapshot()) || void 0 === yb ? void 0 : yb.phase)
            },
            onCastLanded: (yb, bb) => {
              cb.tideCharts.castLanded(yb, bb)
            },
            onLocalHookSettled: () => {
              zb.onLocalHookSettled()
            },
            onLocalWaitEnded: yb => {
              zb.onLocalWaitEnded(yb)
            },
            now: () => performance.now()
          }),
          xb = new xP({
            now: () => performance.now(),
            playerPosition: () => ab.checkValid(Zy) ? ab.Tl(Zy) : null,
            play: (yb, bb, Wy, Uy, hy, fy) => ab.playSound(Zy, yb, bb, 1, {
              myy: Wy,
              maxHearDist: Uy,
              refDistance: hy
            }, fy)
          }),
          Ay = new Map;
        let dy;
        return {
          onCreate: yb => {
            if (ab = yb, Ly = new dc.SkyblockEntityFacing(yb, Qy ? Ny : null), cb.portalTransit.resumeArrival(null !== Wy && void 0 !== Wy ? Wy : null), (null !== Wy && void 0 !== Wy ? Wy : Uy) === Uy) {
              let yb = -1 / 0;
              dy = wy.g.subscribe("toggleMenu", (bb => {
                const Wy = performance.now();
                "inventory|Workbench" !== bb || "cross_to_hub" !== cb.quests.getTrackedQuestId() || Wy - yb < 1e4 || (yb = Wy, ab.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Uy, hy] of Object.entries(null !== (bb = uy[null !== Wy && void 0 !== Wy ? Wy : ""]) && void 0 !== bb ? bb : {})) {
              var bb;
              Ay.set(Uy, new UP({
                hasChunk: (bb, Wy, Uy) => yb.isBlockInLoadedChunk(bb, Wy, Uy),
                XE: (bb, Wy, Uy) => yb.blockIdToBlockName(yb.getBlockId(bb, Wy, Uy)),
                uby: (bb, Wy, Uy, hy) => {
                  yb.uby(bb, Wy, Uy, hy)
                },
                playParticles: bb => {
                  yb.playParticleEffect(bb)
                }
              }, hy))
            }
            ib = (0, Ac.f)((yb => function(yb) {
              return Object.hasOwn(Qb, yb) || yb.startsWith("npc_")
            }(yb) ? Db(yb) : null)), cb.resolveItemName = (bb, Wy) => {
              const Uy = yb.getItemStat(Zy, bb, "displayName");
              return Uy && "object" === typeof Uy && "translationKey" in Uy ? Wy(Uy.translationKey, (0, Oh.s)(Uy.params, Fc.d.shown)) : "string" === typeof Uy ? Wy(Uy) : bb
            }, cb.quests.notifications.onShown = yb => {
              "quest" === yb ? ab.playSound(Zy, "magicAccent1", 1, 1) : "skillLevel" === yb ? ab.playSound(Zy, "magicAccent1", 1, .6) : "landmark" === yb ? ab.playSound(Zy, "trumpetFlare", 1, .6) : "npcNote" === yb ? ab.playSound(Zy, "magicAccent2", .8, 1.1) : "started" === yb ? ab.playSound(Zy, (0, iP.d)("bigDrumSwish"), 1, 1) : ab.playSound(Zy, (0, iP.d)("rpgHandleSmallLeather"), 1, 1)
            }, cb.forge.onPartSelected = () => {
              ab.playSound(Zy, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, cb.forge.onForgeStarted = (bb, Wy, Uy) => Yc(yb, Zy, bb, Wy, Uy), cb.smuggler.onBought = () => {
              ab.playSound(Zy, (0, iP.d)("rpgHandleSmallLeather"), 1, 1), ab.playSound(Zy, "chestOpen", .6, 1)
            }, cb.compass.register(new Ey(cb.map, !0)), cb.compass.register(new Ey(cb.map, !1)), cb.compass.register(new mb(cb.map)), cb.compass.register(new Cy((() => cb.quests.getSnapshot().compassTarget)));
            for (const Wy of ["enemy", "npc"]) cb.compass.register(new ly(cb.map, Wy, (bb => yb.checkValid(bb) ? yb.Tl(bb) : void 0), (bb => yb.isAlive(bb))))
          },
          onAfterRender: (yb, bb) => {
            const Wy = ab.checkValid(Zy) ? ab.Tl(Zy) : null;
            cb.navigation.afterRender(Wy, performance.now(), bb), cb.glowtide.afterRender(Wy, bb.cameraHeading), cb.tideCharts.afterRender(Wy), Iy.afterRender()
          },
          onClose: () => {
            var yb, bb, Wy, Uy, hy, fy, Zy, ey, sy, Ey, ly, mb, Cy, Gy, Oy;
            dy && wy.g.unsubscribe(dy), null === (yb = ib) || void 0 === yb || yb(), ny.dispose(), xb.dispose(), null === (bb = Ly) || void 0 === bb || bb.dispose(), Iy.dispose(), cb.dispose(), null === (Wy = Py) || void 0 === Wy || Wy(), null === (Uy = oy) || void 0 === Uy || Uy(), null === (hy = By) || void 0 === hy || hy(), null === (fy = Ky) || void 0 === fy || fy(), null === (Zy = qb) || void 0 === Zy || Zy(), null === (ey = Sy) || void 0 === ey || ey(), null === (sy = undefined) || void 0 === sy || sy(), null === (Ey = Ty) || void 0 === Ey || Ey(), null === (ly = Vy) || void 0 === ly || ly(), null === (mb = Jy) || void 0 === mb || mb(), null === (Cy = gb) || void 0 === Cy || Cy(), null === (Gy = undefined) || void 0 === Gy || Gy(), null === (Oy = Ry) || void 0 === Oy || Oy()
          },
          onPlayerChangeBlock: (yb, bb, Uy, fy, Py, oy) => {
            if (yb === Zy && "Air" === oy) {
              const yb = ab.getClientOption(Zy, "creative");
              cb.skills.predictBlock([bb, Uy, fy], Py, yb);
              const oy = function(yb, bb) {
                  if ("hub" === bb || "farming_1" === bb || "mining_1" === bb) return !Fy.has(yb) || "hub" !== bb && "mining_1" !== bb ? Object.hasOwn(Hy, yb) ? Hy[yb] : void 0 : rb
                }(Py, Wy),
                By = ("hub" === Wy || "mining_1" === Wy) && (hy.ad.some((yb => yb === Py)) || Object.hasOwn(py, Py) || "mining_1" === Wy && "Block of Coal" === Py);
              yb || void 0 === oy && !By || ab.uby(bb, Uy, fy, null !== oy && void 0 !== oy ? oy : rb)
            }
          },
          onPlayerAttackEntity: (yb, bb) => {
            if (yb !== Zy || "Player" !== ab.getEntityType(bb)) return;
            const [Wy, Uy, hy] = ab.Tl(bb);
            ab.burstParticlePreset("critical", [Wy, Uy + 1, hy], 10)
          },
          onChangeBlockFail: yb => {
            for (const {
                N9: bb
              }
              of yb) cb.skills.rejectBlock(bb)
          },
          onReceivedMessageFromServer: (yb, bb) => {
            if ("skyblockGatedPortal" === yb) {
              var Wy;
              const [yb, Uy] = bb;
              return void(null === (Wy = Ay.get(yb)) || void 0 === Wy || Wy.pU(Uy))
            }
            if ("skyblockDailyReward" === yb) return void cb.dailyReward.pU(bb);
            if ("skyblockMailbox" === yb) return void cb.mailbox.pU(bb);
            if ("skyblockPortalTransit" === yb) return void cb.portalTransit.pU(bb);
            if ("skyblockLoot" === yb) return void ny.pU(ab, bb);
            if ("skyblockLava" === yb) return void xb.pU(bb);
            if ("skyblockForge" === yb) return void cb.forge.pU(bb);
            if ("skyblockMagmaward" === yb) return void cb.magmaward.pU(bb);
            if ("skyblockGlowtide" === yb) return void cb.glowtide.pU(bb);
            if ("skyblockGlowMeter" === yb) return void cb.glowMeter.pU(bb);
            if ("skyblockHushWait" === yb) return void cb.hushWait.pU(bb);
            if ("skyblockPassage" === yb) {
              const yb = bb;
              return cb.passage.pU(yb), cb.reachLog.receivePassagePhase(yb.passagePhase), Jy ??= (0, Gy.s)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: cb.passage.show
              }), void cb.keepersChair.receivePassage({
                keepersChairPassagePhase: yb.passagePhase,
                keepersChairPassageNextPhase: yb.passageNextPhase,
                keepersChairPassageTurnsInMs: yb.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === yb) {
              const yb = bb;
              return cb.tideCharts.pU(yb), void(yb.tideCharts.length > 0 && (gb ??= (0, Gy.s)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: cb.tideCharts.show
              })))
            }
            if (yb === jb.C) {
              var Uy;
              const {
                hookId: yb,
                waiting: Wy
              } = bb;
              return void Iy.hookWaiting(yb, null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.remainingMs) && void 0 !== Uy ? Uy : null)
            }
            if ("skyblockBiteTell" === yb) return void zb.receiveTell(bb);
            if ("skyblockSmuggler" === yb) return void cb.smuggler.pU(bb);
            if ("skyblockKeepersChair" === yb) return cb.keepersChair.pU(bb), void cb.lampLight.setAtChair(cb.keepersChair.isAtChair());
            if ("skyblockLampLight" === yb) {
              const yb = bb;
              var hy;
              if (cb.lampLight.pU(yb), yb.lampLightReleasing) Vy ??= (0, Gy.s)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  cb.lampLight.setRelease(!1)
                }
              });
              else null === (hy = Vy) || void 0 === hy || hy(), Vy = void 0;
              return
            }
            if ("skyblockRegulars" === yb) return void cb.regulars.pU(bb);
            if ("skyblockHiddenWaters" === yb) return void cb.hiddenWaters.pU(bb);
            if ("skyblockReachLog" === yb) return cb.reachLog.pU(bb), void(Ty ??= (0, Gy.s)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: ih
              },
              onClick: cb.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === yb) {
              for (const [yb, Wy, Uy, hy] of bb) ab.uby(yb, Wy, Uy, hy);
              return
            }
            if ("skyblockHud" === yb) cb.receiveHud(bb);
            else if ("skyblockMap" === yb) cb.map.pU(bb);
            else if (yb === Dy.f) cb.skills.pU(bb);
            else if (yb === My && "dialogue" === bb.kind) cb.dialogue.pU(bb);
            else if (yb === My) cb.quests.pU(bb);
            else if (yb === Yy.j) cb.dungeons.pU(bb);
            else if ("sbCollections" === yb) cb.collections.pU(bb);
            else if ("skyblockQuestGraph" === yb) cb.questGraph.pU(bb);
            else {
              if ("skyblockAutographs" !== yb) return;
              cb.autographs.pU(bb)
            }
            if (!oy && cb.map.getSnapshot().enabled) {
              const yb = (0, Gy.s)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: cb.map.show
                }),
                bb = (0, tb.v)(cb.map.show);
              oy = () => {
                yb(), bb()
              }
            }!By && cb.skills.getSnapshot().enabled && (By = (0, Gy.s)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: cb.skills.show
            })), !Sy && cb.collections.getSnapshot().enabled && (Sy = (0, Gy.s)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: cb.collections.show
            })), !Ky && cb.quests.getSnapshot().enabled && (Ky = (0, Gy.s)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: cb.quests.show
            })), !Ry && cb.autographs.getSnapshot().enabled && (Ry = (0, Gy.s)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: cb.autographs.show
            }));
            const fy = cb.dungeons.getSnapshot().enabled;
            var Zy;
            (By || Ky || fy) && sy !== fy && (sy = fy, null === (Zy = qb) || void 0 === Zy || Zy(), qb = (0, Gy.s)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Yb
              },
              disabled: !fy,
              panel: !0,
              onClick: cb.dungeons.show
            }));
            Py || (Py = (0, tb.z)((0, Oy.createElement)(Rc, {
              controller: cb
            }), {
              content: (0, Oy.createElement)(vP, {
                controller: cb
              }),
              onClose: cb.close
            }))
          },
          Zb: () => {
            var yb;
            for (const bb of Ay.values()) bb.Zb();
            ny.Zb(ab), xb.Zb(), null === (yb = Ly) || void 0 === yb || yb.Zb(), cb.skills.Zb(), cb.quests.Zb(), cb.dailyReward.Zb(), cb.mailbox.Zb(), cb.map.Zb()
          }
        }
      }
  },
  37225: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => cb,
      j: () => Uy,
      n: () => fy,
      q: () => hy,
      t: () => Py
    });
    const Uy = "skyblockDungeons",
      hy = "skyblockHeldBoss",
      fy = "dungeonEnter ",
      Zy = Object.freeze({
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

    function Py(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Wy = Math.max(0, Math.floor(yb)),
        Uy = Math.floor(Wy % 1e3 / 100),
        hy = Math.floor(Wy / 1e3),
        fy = hy % 60,
        Zy = Math.floor(hy / 60),
        cb = Zy % 60,
        Py = Math.floor(Zy / 60),
        oy = yb => yb < 10 ? `0${yb}` : String(yb),
        By = bb ? `.${Uy}` : "";
      return Py > 0 ? `${Py}:${oy(cb)}:${oy(fy)}${By}` : `${cb}:${oy(fy)}${By}`
    }
  },
  35195: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      f: () => Uy
    });
    const Uy = "skyblockSkills",
      hy = "skills_test_gym"
  },
  8431: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      e: () => Zy
    });
    const Uy = [{
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

    function hy(yb) {
      let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof yb) {
        if (!Number.isFinite(yb)) return "0";
        if (Math.abs(yb) < 100) {
          const bb = yb < 0 ? "-" : "",
            Wy = Math.abs(yb);
          return Wy >= 10 ? `${bb}${Wy.toFixed(1).replace(/\.0$/,"")}` : `${bb}${Wy.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bb = BigInt(Math.floor(yb))
      } else bb = yb;
      const hy = bb < 0n ? -bb : bb,
        fy = bb < 0n ? "-" : "",
        Zy = hy.toString();
      if (Zy.length <= Wy) return `${fy}${Zy}`;
      const cb = 3 * Math.floor((Zy.length - 1) / 3);
      if (cb < 3) return `${fy}${Zy}`;
      if (cb > 3 * Uy.length) {
        const yb = Zy[0],
          bb = Zy.slice(1, 3).replace(/0+$/, "");
        return `${fy}${bb?`${yb}.${bb}`:yb}e${Zy.length-1}`
      }
      const {
        threshold: Py,
        suffix: oy
      } = Uy[Uy.length - cb / 3], By = hy / Py, Ky = Number(1000n * (hy % Py) / Py), ey = Number(By) + Ky / 1e3;
      let qb;
      return qb = ey >= 100 ? Math.floor(ey).toString() : ey >= 10 ? ey.toFixed(1).replace(/\.0$/, "") : ey.toFixed(2).replace(/\.?0+$/, ""), `${fy}${qb}${oy}`
    }
    const fy = Uy.map((yb => {
      let {
        threshold: bb,
        suffix: Wy
      } = yb;
      return {
        threshold: Number(bb),
        suffix: Wy
      }
    })).filter((yb => {
      let {
        threshold: bb
      } = yb;
      return Number.isFinite(bb)
    }));

    function Zy(yb) {
      const bb = Math.abs(yb),
        Wy = yb < 0 ? "-" : "";
      for (const {
          threshold: Uy,
          suffix: hy
        }
        of fy)
        if (bb >= Uy) {
          const yb = bb / Uy;
          if (yb >= 1e3) return `${Wy}${bb.toExponential(2).replace("e+","e")}`;
          let fy;
          return fy = yb >= 100 ? Math.floor(yb).toString() : yb >= 10 ? yb.toFixed(1).replace(/\.0$/, "") : yb.toFixed(2).replace(/\.?0+$/, ""), `${Wy}${fy}${hy}`
        } return `${Wy}${bb}`
    }
  },
  37235: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37238: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37246: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37254: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37259: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37263: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37271: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37274: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37281: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37285: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37289: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37295: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37298: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37300: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  17778: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19747: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22067: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23625: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25375: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25384: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37217: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);