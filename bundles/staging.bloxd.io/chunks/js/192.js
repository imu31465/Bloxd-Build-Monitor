export const id = 192;
export const ids = [51, 192];
export const modules = {
  38128: (kk, ek, ik) => {
    var Dk = {
      "./combat_1.png": 38134,
      "./dungeon_crumbling_crypt.png": 38143,
      "./dungeon_frozen_hollow.png": 38152,
      "./dungeon_wildwood_grove.png": 38161,
      "./dungeons.png": 38165,
      "./farming_1.png": 38170,
      "./fishing_1.png": 38176,
      "./hub.png": 38184,
      "./island.png": 38192,
      "./mining_1.png": 38200,
      "./mining_1_bridge.png": 38203,
      "./mining_1_gallery.png": 38212,
      "./mining_1_hollow.png": 38215,
      "./mining_1_village.png": 38219
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 38128
  },
  38226: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      i: () => Sk
    });
    const Dk = new WeakMap;

    function fk(kk, ek) {
      return Dk.set(kk, ek), kk
    }

    function Sk(kk) {
      var ek;
      return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
    }
  },
  38111: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      var Dk;
      const {
        width: fk,
        height: Sk
      } = ik, bk = null !== (Dk = kk.text) && void 0 !== Dk ? Dk : kk, rk = (bk.x / 100 - .5) * fk, Pk = (bk.y / 100 - .5) * Sk, mk = fk / 2 - ek.x;
      if (null !== kk.text && Math.abs(rk) <= mk && Pk >= ek.top - Sk / 2 && Pk <= Sk / 2 - ek.bottom) return {
        x: bk.x,
        y: bk.y
      };
      const Mk = Math.min(0 === rk ? 1 / 0 : mk / Math.abs(rk), Pk > 0 ? (Sk / 2 - ek.bottom) / Pk : Pk < 0 ? (ek.top - Sk / 2) / Pk : 1 / 0);
      return !Number.isFinite(Mk) || Mk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + rk * Mk / fk * 100,
        y: 50 + Pk * Mk / Sk * 100
      }
    }
    ik.d(ek, {
      c: () => Dk
    })
  },
  38123: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    const Dk = 4,
      fk = 12e3,
      Sk = 1e3;
    class bk {
      constructor() {
        let {
          limit: kk = Dk,
          windowMs: ek = fk,
          spacingMs: ik = Sk,
          now: bk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = ek, this.spacingMs = ik, this.now = bk
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const kk of this.priority) kk.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const kk = this.now();
        this.sent.push(kk), this.lastSentAt = kk, this.schedule(), this.notify()
      }
      addPriority(kk) {
        return this.priority.add(kk), () => {
          this.priority.delete(kk)
        }
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const kk of this.priority)
          if (kk.waiting()) return !0;
        return !1
      }
      prune() {
        const kk = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= kk;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const kk = this.now(),
          ek = this.lastSentAt + this.spacingMs,
          ik = Math.min(ek > kk ? ek : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ik !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ik - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38105: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik) {
        this.tm = kk, this.beforeOpen = ek, this.afterClose = ik, this.open = !1, this.aU = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.aU && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(kk) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(kk)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.aU = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.aU || (this.snapshot = this.buildSnapshot(), this.tm(this.snapshot))
      }
    }
  },
  38228: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      SkyblockEntityFacing: () => rk,
      needsSkyblockEntityFacing: () => bk
    });
    var Dk = ik(591),
      fk = ik(4189),
      Sk = ik(38231);

    function bk(kk, ek) {
      if (kk.metaInfo === Dk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let ik = null === ek || void 0 === ek ? void 0 : ek.get(kk.meshOpts);
      if (void 0 === ik) {
        var Sk, bk;
        const Dk = (0, fk.l)(kk);
        ik = !1, "pig_napoleon" === (null === Dk || void 0 === Dk || null === (Sk = Dk.opts.textures) || void 0 === Sk ? void 0 : Sk.head) ? ik = !0 : "npc_pig_head" === (null === Dk || void 0 === Dk || null === (bk = Dk.opts.textures) || void 0 === bk ? void 0 : bk.head) && (ik = "sitting" === Dk.opts.pose || "sitting"), ek && (ek.size >= 256 && ek.clear(), ek.set(kk.meshOpts, ik))
      }
      return "sitting" === ik ? "sitting" === kk.pose : ik
    }(0, Sk.e)("skyblock", ((kk, ek) => {
      ek.setFacingTolerance(bk(kk) ? 0 : null)
    }));
    class rk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = ek, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var ek;
          const ik = this.api.getEntityInfo(kk);
          ik && (bk(ik, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (ek = this.alsoVisit) || void 0 === ek || ek.call(this, kk, ik))
        }
      }
      Px() {
        const {
          api: kk
        } = this, ek = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const ik of this.facing) ek.has(ik) || kk.setFacingTolerance(ik, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ek
      }
      dispose() {
        for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38100: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => KP
    });
    const Dk = "island";
    var fk = ik(314);
    const Sk = (0, fk.nb)([0, 0, -1]),
      bk = [{
        name: "S",
        bearing: (0, fk.nb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, fk.nb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Sk
      }, {
        name: "W",
        bearing: (0, fk.nb)([1, 0, 0])
      }];

    function rk(kk, ek, ik) {
      return [100 * (ik.mapMaxX - kk) / (ik.mapMaxX - ik.mapMinX), 100 * (ek - ik.mapMinZ) / (ik.mapMaxZ - ik.mapMinZ)]
    }

    function Pk(kk, ek, ik) {
      const fk = "local" === ek,
        Sk = kk.background,
        bk = ek => Sk ? rk(ek[0] - kk.mapOrigin[0], ek[2] - kk.mapOrigin[2], Sk.bounds) : [50, 50],
        Pk = (kk.insideDungeon ? [] : kk.landmarks).map((kk => {
          var ek, Dk;
          return {
            id: kk.id,
            name: ik(kk.visited && kk.nameKey ? null !== (ek = kk.mapLabelKey) && void 0 !== ek ? ek : kk.nameKey : "skyblockGame:mapUnknown"),
            icon: kk.visited && null !== (Dk = kk.icon) && void 0 !== Dk ? Dk : "unknown",
            visited: kk.visited,
            current: !1,
            position: bk(kk.position),
            travelKind: "landmark",
            travelId: kk.id
          }
        })),
        Mk = kk.zones.map((ek => {
          var Dk;
          return {
            id: ek.id,
            name: ik(ek.visited && ek.nameKey ? ek.nameKey : "skyblockGame:mapUnknown"),
            icon: ek.visited && null !== (Dk = ek.icon) && void 0 !== Dk ? Dk : "unknown",
            visited: ek.visited,
            current: ek.id === kk.zoneId,
            position: ek.position,
            thumbnail: ek.visited ? ek.id : void 0,
            travelKind: "zone",
            travelId: ek.id
          }
        })),
        Kk = kk.insideDungeon || !Sk ? [] : kk.portals.map((kk => {
          var ek;
          return {
            id: kk.id,
            name: ik(null !== (ek = kk.nameKey) && void 0 !== ek ? ek : "skyblockGame:mapUnknown"),
            icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
            visited: kk.visited,
            current: !1,
            position: bk(kk.position),
            colour: kk.colour,
            travelKind: "zone",
            travelId: kk.destination
          }
        })),
        xk = fk ? Pk : Mk,
        nk = xk.filter((kk => kk.visited)).length,
        Uk = Sk ? (Sk.bounds.mapMaxX - Sk.bounds.mapMinX) / (Sk.bounds.mapMaxZ - Sk.bounds.mapMinZ) : 2,
        Hk = Sk ? JSON.stringify([Sk.bounds, kk.mapOrigin]) : "";
      return {
        local: fk,
        points: xk,
        portals: fk ? Kk : [],
        progress: xk.length ? ik("skyblockGame:mapDiscovered", {
          current: String(nk),
          total: String(xk.length)
        }) : null,
        percent: xk.length ? 100 * nk / xk.length : 0,
        canTravel: [...xk, ...fk ? Kk : []].some((kk => kk.visited && !kk.current)),
        noLandmarks: fk && !kk.insideDungeon && 0 === Pk.length,
        background: Sk ? {
          imageKey: Sk.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: Hk,
          label: ik(Sk.labelKey),
          colour: Sk.backgroundColour,
          ratio: Uk
        } : null,
        connections: mk(kk.zones),
        minimap: Sk ? {
          imageKey: Sk.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: Hk,
          label: ik(Sk.labelKey),
          colour: Sk.backgroundColour,
          caption: ik(kk.zoneId === Dk ? "skyblockGame:zoneIsland" : Sk.labelKey),
          width: (Sk.bounds.mapMaxX - Sk.bounds.mapMinX) / Sk.minimapSpan * 100 + "%",
          height: (Sk.bounds.mapMaxZ - Sk.bounds.mapMinZ) / Sk.minimapSpan * 100 + "%",
          markers: [...Pk, ...Kk]
        } : null
      }
    }

    function mk(kk) {
      const ek = new Set;
      return kk.flatMap((ik => ik.connections.flatMap((Dk => {
        const fk = kk.find((kk => kk.id === Dk)),
          Sk = [ik.id, Dk].sort().join("|");
        return !fk || ek.has(Sk) ? [] : (ek.add(Sk), [{
          id: `${ik.id}-${Dk}`,
          start: ik.position,
          end: fk.position,
          explored: ik.visited && fk.visited
        }])
      }))))
    }
    var Mk = ik(38105);
    class Kk extends Mk.d {}
    const xk = "skyblockMapView";
    class nk extends Kk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Dk, fk), this.requestTravel = ek, this.translate = ik, this.now = Sk, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = kk => {
          this.tab = kk, this.feedbackKey = "", this.emit()
        }, this.travel = (kk, ek) => {
          if (!this.map || this.pending || this.aU) return;
          const ik = ("zone" === kk ? this.map.zones : this.map.landmarks).find((kk => kk.id === ek));
          if (ik) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ik && !ik.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ik.visited)
              if ("zone" === kk && ek === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ik = ++this.nextRequestId;
                this.pending = {
                  requestId: ik,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: kk,
                  id: ek,
                  requestId: ik
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
      setTranslator(kk) {
        this.translate = kk, this.emit()
      }
      BU(kk) {
        var ek;
        if (!this.aU)
          if ("entities" !== kk.kind)
            if ("open" !== kk.kind) {
              var ik, Dk;
              if ("snapshot" === kk.kind)(null === (ik = kk.snapshot) || void 0 === ik ? void 0 : ik.zoneId) !== (null === (Dk = this.map) || void 0 === Dk ? void 0 : Dk.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = kk.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === kk.kind) {
                var fk;
                kk.requestId === (null === (fk = this.pending) || void 0 === fk ? void 0 : fk.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (kk.requestId === (null === (ek = this.pending) || void 0 === ek ? void 0 : ek.requestId)) {
                var Sk;
                this.pending = null, this.feedbackKey = null !== (Sk = kk.errorKey) && void 0 !== Sk ? Sk : "", null === kk.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = kk.entities
      }
      Px() {
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
          presentation: this.map ? Pk(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Uk = 67.5 * Math.PI / 180;

    function Hk(kk, ek) {
      const ik = Math.abs(kk);
      if (ik > Uk || ek.trackHalfWidth <= 0) return null;
      const Dk = ek.trackHalfWidth,
        fk = ek.screenHalfWidth / (ek.tanHalfFovX * Math.max(.5, Math.cos(ek.pitch))),
        Sk = Math.min(Math.atan(.6 * Dk / fk), .75 * Uk),
        bk = fk * Math.tan(Sk);
      let rk;
      if (ik <= Sk) rk = fk * Math.tan(ik);
      else {
        const kk = Uk - Sk,
          ek = Math.max(0, fk * kk / (Math.cos(Sk) ** 2 * (Dk - bk)) - 1),
          Pk = (ik - Sk) / kk;
        rk = bk + (Dk - bk) * (1 + ek) * Pk / (1 + ek * Pk)
      }
      return 50 + Math.sign(kk) * rk * 50 / Dk
    }
    class wk {
      constructor(kk, ek) {
        this.map = kk, this.visited = ek, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = ek ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const kk = this.map.getSnapshot().map;
        return !kk || kk.insideDungeon ? [] : kk.landmarks.filter((kk => kk.visited === this.visited)).map((kk => {
          var ek, ik;
          return {
            id: `landmark:${kk.id}`,
            position: kk.position,
            icon: null !== (ek = kk.icon) && void 0 !== ek ? ek : "unknown",
            nameKey: null !== (ik = kk.nameKey) && void 0 !== ik ? ik : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class lk {
      constructor(kk, ek, ik, Dk) {
        this.map = kk, this.kind = ek, this.position = ik, this.alive = Dk, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ek, this.range = "enemy" === ek ? 48 : 64, this.limit = 12
      }
      vy(kk) {
        if ("enemy" !== this.kind || this.alive(kk.Ai)) return this.position(kk.Ai)
      }
      getPoints() {
        const kk = [];
        for (const Dk of this.map.getEntities()) {
          if (Dk.kind !== this.kind || "enemy" === this.kind && !this.alive(Dk.compassEntityId)) continue;
          const fk = this.position(Dk.compassEntityId);
          var ek, ik;
          if (fk) kk.push({
            id: `${this.kind}:${Dk.compassEntityId}`,
            Ai: Dk.compassEntityId,
            kind: this.kind,
            icon: null !== (ek = Dk.icon) && void 0 !== ek ? ek : Dk.npcSkin ? `npc_${Dk.npcSkin}` : this.kind,
            displayName: Dk.displayName,
            position: fk,
            nameKey: null !== (ik = Dk.nameKey) && void 0 !== ik ? ik : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return kk
      }
    }
    class pk {
      constructor(kk) {
        this.map = kk, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const kk = this.map.getSnapshot().map;
        return !kk || kk.insideDungeon ? [] : kk.portals.map((kk => {
          var ek;
          return {
            id: "portal:" + kk.id,
            kind: "portal",
            position: kk.position,
            nameKey: null !== (ek = kk.nameKey) && void 0 !== ek ? ek : "skyblockGame:compassUnvisitedZone",
            icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
            colour: kk.colour
          }
        }))
      }
    }
    class yk {
      constructor(kk) {
        this.target = kk, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const kk = this.target();
        return kk ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: kk.position,
          nameKey: kk.nameKey
        }] : []
      }
    }

    function Yk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.position;
      const Sk = Dk[0] - ek[0],
        bk = Dk[2] - ek[2];
      return {
        ...kk,
        position: Dk,
        offset: fk.c.computeShortestRotation(ik, (0, fk.nb)([Sk, 0, bk])),
        distance: Math.hypot(Sk, Dk[1] - ek[1], bk)
      }
    }
    let Lk;

    function Ck(kk, ek) {
      var ik;
      return (null === (ik = Lk) || void 0 === ik ? void 0 : ik.locale) !== ek && (Lk = {
        locale: ek,
        near: new Intl.NumberFormat(ek, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(ek, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (kk < 10 ? Lk.near : Lk.far).format(kk)
    }
    class Ak {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(kk) {
        return this.providers.set(kk.id, kk), this.refreshAt = 0, () => {
          this.providers.get(kk.id) === kk && (this.providers.delete(kk.id), this.refreshAt = 0)
        }
      }
      frame(kk, ek, ik) {
        if (ik >= this.refreshAt) {
          this.refreshAt = ik + 200, this.candidates = [];
          for (const ek of this.providers.values()) {
            if (!ek.enabled) continue;
            const ik = ek.getPoints().map((ek => {
              const ik = ek.position;
              return {
                point: ek,
                distance: Math.hypot(ik[0] - kk[0], ik[1] - kk[1], ik[2] - kk[2])
              }
            })).filter((kk => kk.distance <= ek.range)).sort(((kk, ek) => kk.distance - ek.distance)).slice(0, ek.limit);
            for (const {
                point: kk
              }
              of ik) this.candidates.push({
              provider: ek,
              point: kk
            })
          }
        }
        const Dk = [];
        for (const {
            point: fk,
            provider: Sk
          }
          of this.candidates) {
          if (!Sk.enabled) continue;
          const ik = Sk.vy ? Sk.vy(fk) : fk.position;
          if (ik) {
            const Sk = Yk(fk, kk, ek, ik);
            Math.abs(Sk.offset) <= Uk && Dk.push(Sk)
          }
        }
        return Dk
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var jk = ik(36151),
      sk = ik(60);
    const dk = [{
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
      Vk = dk.length;

    function Fk(kk) {
      return kk >= Vk ? 1 : kk + 1
    }
    const uk = "skyblockQuests",
      qk = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Ik = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function zk(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ik = Math.max(0, Math.floor(kk)),
        Dk = Math.floor(ik % 1e3 / 100),
        fk = Math.floor(ik / 1e3),
        Sk = fk % 60,
        bk = Math.floor(fk / 60),
        rk = bk % 60,
        Pk = Math.floor(bk / 60),
        mk = kk => kk < 10 ? `0${kk}` : String(kk),
        Mk = ek ? `.${Dk}` : "";
      return Pk > 0 ? `${Pk}:${mk(rk)}:${mk(Sk)}${Mk}` : `${rk}:${mk(Sk)}${Mk}`
    }
    const Qk = "devquests",
      vk = "none",
      Ek = {
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
      hk = "Compressed Messy Stone",
      ak = {
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
      Wk = ["Stone", "Diorite", "Andesite", "Granite"],
      tk = new Set(Wk),
      Xk = (Object.keys(ak), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Bk = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function ck(kk, ek) {
      const ik = Math.floor(5 * kk / (2 * ek + 1));
      return Math.min(4, Math.max(0, ik))
    }
    var Tk = ik(1218);
    var Zk = ik(35923);
    var Ok = ik(36143),
      gk = ik(26),
      Gk = ik(8708);
    const Nk = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Rk = 1e3;

    function Jk(kk) {
      return Math.max(0, kk)
    }

    function ke(kk) {
      return 1 + .01 * Jk(kk)
    }

    function ee(kk) {
      return 1 + .005 * Jk(kk)
    }

    function ie(kk) {
      return 1 + .005 * Jk(kk)
    }

    function De(kk) {
      return .01 * Jk(kk)
    }

    function fe(kk) {
      return 150 / (150 + Jk(kk))
    }

    function Se(kk) {
      return 1 + .002 * Jk(kk)
    }

    function be(kk) {
      return Math.round(10 * kk) / 10
    }

    function re(kk, ek) {
      switch (kk) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: be(100 * (ee(ek) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: be(100 * (ke(ek) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: be(100 * (ie(ek) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: be(100 * De(ek))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: be(100 * (1 - fe(ek)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: be(100 * (Se(ek) - 1))
          }
      }
    }

    function Pe(kk) {
      return "farming" === kk ? 200 : 100
    }

    function me(kk, ek) {
      if (!Number.isSafeInteger(kk) || kk < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ik = Pe(ek),
        Dk = kk => function(kk, ek) {
          return Pe(kk) * ek * (ek + 1) / 2
        }(ek, kk);
      let fk = Math.min(Rk, Math.floor((Math.sqrt(8 * kk / ik + 1) - 1) / 2));
      return fk < Rk && Dk(fk + 1) <= kk ? fk++ : Dk(fk) > kk && fk--, {
        totalXp: kk,
        level: fk,
        xpIntoLevel: kk - Dk(fk),
        xpForNextLevel: fk === Rk ? null : ik * (fk + 1)
      }
    }
    const Me = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Ke(kk) {
      return Me.has(kk)
    }
    const xe = new Set(fk.cb);

    function ne(kk) {
      return xe.has(kk)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Ue = {
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
      He = {
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
      we = {
        ...He,
        ...Object.fromEntries(Object.entries(Xk).map((kk => {
          let [ek, ik] = kk;
          return [ek, 9 * He[ik]]
        })))
      },
      le = {
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
      pe = {
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
    const ye = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Ye = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Le(kk) {
      return `rgb(${Ye[kk].join(", ")})`
    }

    function Ce(kk, ek, ik) {
      if (!ik) return kk(ek);
      const Dk = {};
      for (const [fk, Sk] of Object.entries(ik)) Dk[fk] = "string" === typeof Sk ? Sk : kk(Sk.translationKey);
      return kk(ek, Dk)
    }
    class Ae {
      constructor(kk, ek) {
        this.now = kk, this.getJournal = ek, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.XM = !1, this.onShown = () => {}
      }
      enqueue(kk) {
        const ek = je(kk);
        if (ek) this.pending.push(kk);
        else {
          const ek = this.pending.findIndex(je);
          this.pending.splice(-1 === ek ? this.pending.length : ek, 0, kk)
        }
        return (null === this.current || null !== this.followUp && !ek) && (this.advance(), !0)
      }
      setHeld(kk) {
        return this.XM = kk, !kk && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Px() {
        const kk = this.getJournal(),
          ek = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === ek ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === ek || void 0 === ek ? void 0 : ek.kind) && kk && kk.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === ek || void 0 === ek ? void 0 : ek.kind)) {
          const kk = this.findFollowUp(this.current);
          if ("step" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || kk.questId !== ek.questId || kk.step.id !== ek.step.id) return this.showFollowUp(kk, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(kk, ek, ik) {
        var Dk, fk, Sk, bk;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, kk, ik);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, kk);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, kk, ek);
        const {
          questCompletionKind: rk,
          questCompletionNameKey: Pk
        } = this.current, mk = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Mk = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Kk = "step" === (null === (Dk = this.followUp) || void 0 === Dk ? void 0 : Dk.kind) ? this.followUp : null, xk = "explore" === (null === (fk = this.followUp) || void 0 === fk ? void 0 : fk.kind);
        let nk;
        return nk = xk ? kk("skyblockGame:questExploreTitle") : null !== Kk ? "quest" === rk ? kk("skyblockGame:questNextQuestTitle", {
          quest: kk(Kk.questNameKey)
        }) : kk("skyblockGame:questNextStepTitle") : kk("started" === rk ? "skyblockGame:questStartedTitle" : "quest" === rk ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? rk : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: nk,
          name: xk ? ek("skyblockGame:questExploreName") : null !== Kk ? Ce(ek, Kk.step.nameKey, Kk.step.nameParams) : Ce(ek, Pk, mk),
          description: xk ? ek("skyblockGame:questExploreDescription") : null === Kk ? null : Ce(ek, Kk.step.descriptionKey, Kk.step.descriptionParams),
          reward: null === this.followUp && Mk > 0 ? ek("skyblockGame:questCoinRewardSuffix", {
            amount: Mk.toLocaleString(ik)
          }) : null,
          iconItem: null !== (Sk = null === Kk || void 0 === Kk ? void 0 : Kk.step.questIconItem) && void 0 !== Sk ? Sk : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Kk && (null === (bk = this.getJournal()) || void 0 === bk ? void 0 : bk.trackedQuestId) === Kk.questId ? Kk.step.nameKey : null
        }
      }
      getSkillLevelView(kk, ek, ik) {
        let {
          skill: Dk,
          beforeLevel: fk,
          level: Sk
        } = kk;
        const bk = re(Dk, fk),
          rk = re(Dk, Sk);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: ek(`skyblockGame:${Dk}`),
          name: ek("skyblockGame:skillLevelUp", {
            to: Sk.toLocaleString(ik)
          }),
          description: bk.percent === rk.percent ? null : ek(`${rk.translationKey}Change`, {
            before: bk.percent.toLocaleString(ik),
            after: rk.percent.toLocaleString(ik)
          }),
          reward: null,
          iconItem: ye[Dk],
          accent: Le(Dk),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(kk, ek) {
        let {
          landmarkNameKey: ik
        } = kk;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: ek("skyblockGame:landmarkDiscovered"),
          name: ek(ik),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(kk, ek, ik) {
        let {
          titleKey: Dk,
          textKey: fk,
          params: Sk = {},
          nameKeys: bk = {},
          iconItem: rk = null
        } = kk;
        const Pk = {
          ...Sk
        };
        for (const [mk, Mk] of Object.entries(bk)) Pk[mk] = ek(Mk);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: ek(Dk),
          name: ik(fk, Pk),
          description: null,
          reward: null,
          iconItem: rk,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var kk;
        if (null !== this.followUp) return 5600;
        switch (null === (kk = this.current) || void 0 === kk ? void 0 : kk.questCompletionKind) {
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
      showFollowUp(kk, ek) {
        null === kk || this.XM ? this.advance() : (this.followUp = kk, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ek && void 0 !== ek ? ek : this.shownAt + this.durationMs())
      }
      findFollowUp(kk) {
        var ek;
        const ik = this.getJournal();
        if (!ik || this.hasPendingQuestPopup() || je(kk)) return null;
        const Dk = "started" === kk.questCompletionKind ? ik.active.some((ek => ek.id === kk.questCompletionQuestId)) : "quest" === kk.questCompletionKind ? ik.completed.some((ek => ek.id === kk.questCompletionQuestId)) : [...ik.active, ...ik.completed].some((ek => ek.id === kk.questCompletionQuestId && ek.subquests.some((ek => ek.id === kk.questCompletionStepId && "completed" === ek.status))));
        if (!Dk) return null;
        if ("quest" === kk.questCompletionKind && 0 === ik.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const fk = ik.active.find((kk => kk.id === ik.trackedQuestId)),
          Sk = null !== (ek = null === fk || void 0 === fk ? void 0 : fk.subquests.find((kk => "ready" === kk.status))) && void 0 !== ek ? ek : null === fk || void 0 === fk ? void 0 : fk.subquests.find((kk => "active" === kk.status));
        return Sk ? {
          kind: "step",
          questId: fk.id,
          questNameKey: fk.nameKey,
          step: Sk
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((kk => !je(kk)))
      }
      advance() {
        var kk;
        this.current = this.XM ? null : null !== (kk = this.pending.shift()) && void 0 !== kk ? kk : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function je(kk) {
      return se(kk.questCompletionKind)
    }

    function se(kk) {
      return "skillLevel" === kk || "landmark" === kk || "npcNote" === kk
    }
    var de = ik(38111);
    const Ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var ze = ik(38120);
    const Qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Ee = ik.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const he = ik.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var We = ik(18165),
      te = ik(20189),
      Xe = ik(22474),
      Be = ik(24087),
      ce = ik(25764);
    const Te = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: We,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: te,
      cow: Ie,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ik(25784),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Ve,
      fishing_1: Ve,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Fe,
      guardian_iron: ue,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Xe,
      mines: Be,
      mining_1: Be,
      npc: qe,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Ie,
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
      npc_gold_guardian: Fe,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: ue,
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
      npc_tentacle_guy: ze,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Qe,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Ee,
      quest_talk: he,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: ae,
      watermelon: ce
    };

    function oe(kk, ek) {
      const ik = document.createElement("img");
      return ik.className = ek, ik.src = kk, ik.alt = "", ik.draggable = !1, ik
    }

    function Ze(kk) {
      var ek;
      const ik = null !== (ek = Te[kk]) && void 0 !== ek ? ek : kk.startsWith("npc_") ? qe : ae;
      if ("portal" !== kk) return oe(ik, "SkyblockMapIcon");
      const Dk = document.createElement("span");
      Dk.className = "SkyblockMapIcon Portal";
      const fk = document.createElement("span");
      return fk.className = "SkyblockMapIconTint", fk.style.maskImage = fk.style.webkitMaskImage = `url("${ve}")`, Dk.append(oe(ik, "SkyblockMapIconLayer"), fk, oe(ve, "SkyblockMapIconLayer SkyblockMapIconShade")), Dk
    }
    var Oe = ik(38090),
      ge = ik(4206);
    const Ge = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Ne(kk) {
      const ek = new ge.j(kk);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Ge.map((kk => {
          let {
            lobes: ik,
            amount: Dk
          } = kk;
          return {
            lobes: ik[Math.floor(ek.next() * ik.length)],
            amount: Dk[0] + ek.next() * (Dk[1] - Dk[0]),
            phase: 2 * ek.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Re(kk) {
      let {
        radius: ek,
        squareness: ik,
        wobbles: Dk,
        samples: fk
      } = kk;
      const Sk = [];
      for (let bk = 0; bk < fk; bk++) {
        const kk = 2 * Math.PI * bk / fk,
          rk = Math.cos(kk),
          Pk = Math.sin(kk),
          mk = ek * (Math.abs(rk) ** ik + Math.abs(Pk) ** ik) ** (-1 / ik) * Dk.reduce(((ek, ik) => {
            let {
              lobes: Dk,
              amount: fk,
              phase: Sk
            } = ik;
            return ek + fk * Math.sin(Dk * kk + Sk)
          }), 1);
        Sk.push(`${(50+mk*rk).toFixed(2)} ${(50+mk*Pk).toFixed(2)}`)
      }
      return `M${Sk.join("L")}Z`
    }
    const Je = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class ki {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.aU = !1, this.mountCompass = kk => {
          var ek;
          if (null === (ek = this.stopLayout) || void 0 === ek || ek.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !kk || this.aU) return;
          const ik = kk.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: kk,
            track: ik,
            label: kk.querySelector(".SkyblockCompassLabel")
          }, ik.replaceChildren();
          for (let fk = 0; fk < 4; fk++) {
            const kk = document.createElement("span");
            kk.className = "SkyblockCompassCardinal", ik.appendChild(kk), this.cardinals.push(kk)
          }
          const Dk = (0, Oe.d)(Je, [kk], this.layout);
          this.stopLayout = () => {
            Dk(), ik.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = kk => {
          this.terrain = this.aU ? null : kk, this.render(this.frame)
        }, this.mountMinimapSearchArea = kk => {
          this.mountSearchArea("minimap", kk)
        }, this.mountMapSearchArea = kk => {
          this.mountSearchArea("map", kk)
        }, this.mountPlayer = kk => {
          this.player = this.aU ? null : kk, this.render(this.frame)
        }, this.mountWaypoint = kk => {
          var ek, ik;
          if (null === (ek = this.stopWaypoint) || void 0 === ek || ek.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !kk || this.aU) return;
          const Dk = kk.querySelector(".SkyblockQuestWaypointMarker");
          Dk.replaceChildren(Ze("quest")), this.markerIcon = "quest", this.waypoint = {
            root: kk,
            marker: Dk,
            clip: kk.querySelector(".SkyblockQuestWaypointTextClip"),
            text: kk.querySelector(".SkyblockQuestWaypointText"),
            label: kk.querySelector(".SkyblockQuestWaypointLabel"),
            distance: kk.querySelector(".SkyblockQuestWaypointDistance"),
            hint: kk.querySelector(".SkyblockQuestWaypointHint")
          };
          const fk = () => {
              this.waypointMarkerSize = {
                width: Dk.offsetWidth,
                height: Dk.offsetHeight
              }, this.waypointInset = {
                x: Dk.offsetWidth / 2 + 8,
                top: Dk.offsetHeight + 8,
                bottom: 8
              }
            },
            Sk = new ResizeObserver((() => {
              fk(), this.render(this.frame)
            }));
          Sk.observe(Dk, {
            box: "border-box"
          });
          const bk = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", bk), null === (ik = window.visualViewport) || void 0 === ik || ik.addEventListener("resize", bk), this.stopWaypoint = () => {
            var kk;
            Sk.disconnect(), window.removeEventListener("resize", bk), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", bk)
          }, bk(), fk(), this.render(this.frame)
        }, this.mountWaypointOrigin = kk => {
          var ek;
          if (null === (ek = this.stopWaypointOrigin) || void 0 === ek || ek.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = kk && !this.aU ? Number(kk.dataset.notificationToken) : null, kk && !this.aU && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const ek = {
              nameKey: kk.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = ek;
            const ik = () => {
                const ik = kk.getBoundingClientRect();
                ek.x = (ik.left + ik.width / 2) / window.innerWidth * 100, ek.y = (ik.top + ik.height / 2) / window.innerHeight * 100
              },
              Dk = new ResizeObserver(ik);
            Dk.observe(kk.parentElement), Dk.observe(kk), window.addEventListener("resize", ik), this.stopWaypointOrigin = () => {
              Dk.disconnect(), window.removeEventListener("resize", ik)
            }, ik()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const kk = this.compass.root,
            ek = getComputedStyle(kk),
            ik = getComputedStyle(document.documentElement),
            Dk = parseFloat(ik.fontSize),
            fk = parseFloat(ek.getPropertyValue("--compass-icon-size")) * Dk,
            Sk = "1" === ek.getPropertyValue("--compass-fit-top").trim(),
            bk = Sk ? 1 : 8,
            rk = Array.from(document.querySelectorAll(Je), (kk => {
              var ek;
              return (null !== (ek = kk.querySelector(".MiddleTextTop")) && void 0 !== ek ? ek : kk).getBoundingClientRect()
            })).filter((kk => kk.width > 0 && kk.height > 0));
          let Pk = (parseFloat(ik.getPropertyValue("--notchTop")) || 0) + bk,
            mk = "";
          if (Sk) {
            const ek = window.innerWidth / 2,
              ik = kk.getBoundingClientRect().height,
              Sk = [Pk, ...rk.map((kk => Math.max(Pk, kk.bottom + bk)))].sort(((kk, ek) => kk - ek));
            for (const kk of Sk) {
              let Sk = ek - 8;
              for (const Dk of rk) Dk.bottom + bk <= kk || Dk.top >= kk + ik + bk || (Sk = Math.min(Sk, Dk.right <= ek ? ek - Dk.right - 8 : Dk.left - ek - 8));
              const Mk = 2 * Sk - fk;
              if (Mk >= 16 * Dk) {
                mk = `${Mk}px`, Pk = kk;
                break
              }
            }
          }
          kk.style.maxWidth !== mk && (kk.style.maxWidth = mk);
          const Mk = kk.getBoundingClientRect(),
            Kk = this.compassSize.trackHalfWidth;
          if (Mk.width > 0) {
            const kk = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: kk.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * fk / kk.width
          }
          if (!mk)
            for (const xk of rk) xk.right > Mk.left - 8 && xk.left < Mk.right + 8 && (Pk = Math.max(Pk, xk.bottom + bk));
          kk.style.top = `${Pk}px`, this.compassSize.trackHalfWidth !== Kk && this.render(this.frame)
        }
      }
      mountSearchArea(kk, ek) {
        this.searchAreas[kk] = this.aU ? null : ek, this.render(this.frame)
      }
      render(kk) {
        if (this.aU) return;
        if (this.frame = kk, this.compass && (ei(this.compass.root, !kk), kk)) {
          const ek = this.compassSize.trackHalfWidth / 50;
          kk.compass.cardinals.forEach(((kk, ik) => {
            const Dk = this.cardinals[ik];
            Dk.textContent !== kk.name && (Dk.textContent = kk.name), ei(Dk, kk.hidden), Dk.style.translate = kk.left * ek + "px"
          }));
          const ik = new Set;
          kk.compass.markers.forEach(((Dk, fk) => {
            var Sk;
            ik.add(Dk.id);
            let bk = this.markers.get(Dk.id);
            bk || (bk = document.createElement("span"), bk.className = "SkyblockCompassMarker", this.markers.set(Dk.id, bk), this.compass.track.appendChild(bk)), bk.dataset.icon !== Dk.icon && (bk.dataset.icon = Dk.icon, bk.replaceChildren(Ze(Dk.icon))), bk.style.color = null !== (Sk = Dk.colour) && void 0 !== Sk ? Sk : "", bk.style.translate = Dk.left * ek + "px", bk.style.zIndex = String(kk.compass.markers.length - fk), bk.title !== Dk.name && (bk.title = Dk.name)
          }));
          for (const [kk, Dk] of this.markers) ik.has(kk) || (Dk.remove(), this.markers.delete(kk));
          this.compass.label.textContent !== kk.compass.label && (this.compass.label.textContent = kk.compass.label)
        }
        this.terrain && (ei(this.terrain, !(null !== kk && void 0 !== kk && kk.minimap)), null !== kk && void 0 !== kk && kk.minimap && (this.terrain.style.transform = kk.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", kk.minimap.iconRotation)));
        const ek = null === kk || void 0 === kk ? void 0 : kk.searchArea;
        for (const ik of [this.searchAreas.minimap, this.searchAreas.map])
          if (ik && (ei(ik, !ek), ek)) {
            if (this.searchAreaPath.seed !== ek.shapeSeed && (this.searchAreaPath = {
                seed: ek.shapeSeed,
                d: Re(Ne(ek.shapeSeed))
              }), ik.dataset.shapeSeed !== ek.shapeSeed) {
              ik.dataset.shapeSeed = ek.shapeSeed;
              for (const kk of ik.querySelectorAll("path")) kk.setAttribute("d", this.searchAreaPath.d)
            }
            ik.style.left = `${ek.left}%`, ik.style.top = `${ek.top}%`, ik.style.width = `${ek.width}%`, ik.style.height = `${ek.height}%`
          } if (this.player && (ei(this.player, !(null !== kk && void 0 !== kk && kk.player) || kk.player.hidden), null !== kk && void 0 !== kk && kk.player && (this.player.style.left = `${kk.player.left}%`, this.player.style.top = `${kk.player.top}%`, this.player.style.setProperty("--map-player-rotation", kk.player.rotation))), this.waypoint) {
          const {
            root: ek,
            marker: ik,
            clip: Dk,
            text: fk,
            label: Sk,
            distance: bk,
            hint: rk
          } = this.waypoint, Pk = !(null !== kk && void 0 !== kk && kk.waypoint) || null !== kk.waypoint.popupToken && kk.waypoint.popupToken !== this.waypointOriginToken;
          ei(ek, Pk);
          let mk = 1;
          const Mk = this.waypointLaunch;
          if (!Pk && Mk && kk.waypoint.nameKey === Mk.nameKey) {
            const kk = performance.now();
            Mk.startedAt ??= kk, mk = Math.min(1, Math.max(0, (kk - Mk.startedAt - 450) / 1e3)), ik.style.opacity = String(Math.min(1, (kk - Mk.startedAt) / 150)), 1 === mk && (this.waypointLaunch = null)
          } else ik.style.opacity = "", Mk && null !== Mk.startedAt && (this.waypointLaunch = null);
          if (ek.classList.toggle("Launching", mk < 1), null !== kk && void 0 !== kk && kk.waypoint) {
            const ek = this.waypointInset,
              Pk = "quest_talk" === kk.waypoint.markerIcon ? function(kk, ek, ik) {
                if (!kk.text || null === kk.blockHeight || 0 === kk.nearness) return kk;
                const Dk = kk.blockHeight / 100 * ik.height,
                  fk = -kk.nearness * (ii * Dk + ek.width / 2),
                  Sk = kk.nearness * (Di * Dk + ek.height / 2);
                return {
                  ...kk,
                  text: {
                    x: kk.text.x + fk / ik.width * 100,
                    y: kk.text.y + Sk / ik.height * 100
                  }
                }
              }(kk.waypoint, this.waypointMarkerSize, this.viewport) : kk.waypoint,
              Kk = (0, de.c)(Pk, ek, this.viewport),
              xk = mk * mk * (3 - 2 * mk),
              nk = mk < 1 ? Mk.x + (Kk.x - Mk.x) * xk : Kk.x,
              Uk = mk < 1 ? Mk.y + (Kk.y - Mk.y) * xk : Kk.y;
            ik.style.translate = `${nk}vw ${Uk}vh`, Dk.style.clipPath = `inset(${ek.top}px ${ek.x}px ${ek.bottom}px)`, ei(fk, mk < 1 || !kk.waypoint.text), fk.style.opacity = String(1 - kk.waypoint.nearness), kk.waypoint.text && (fk.style.translate = `${kk.waypoint.text.x}vw ${kk.waypoint.text.y}vh`), Sk.textContent !== kk.waypoint.name && (Sk.textContent = kk.waypoint.name), this.markerIcon !== kk.waypoint.markerIcon && (this.markerIcon = kk.waypoint.markerIcon, ik.replaceChildren(Ze(this.markerIcon))), bk.textContent !== kk.waypoint.distance && (bk.textContent = kk.waypoint.distance), ei(rk, null === kk.waypoint.hint), null !== kk.waypoint.hint && rk.textContent !== kk.waypoint.hint && (rk.textContent = kk.waypoint.hint)
          }
        }
      }
      dispose() {
        var kk, ek;
        this.mountWaypointOrigin(null), this.render(null), null === (kk = this.stopLayout) || void 0 === kk || kk.call(this), this.stopLayout = null, null === (ek = this.stopWaypoint) || void 0 === ek || ek.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.aU = !0
      }
    }

    function ei(kk, ek) {
      kk.hidden !== ek && (kk.hidden = ek)
    }
    const ii = .55,
      Di = .6;
    const fi = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Si {
      constructor(kk, ek, ik, Dk) {
        this.map = kk, this.quests = ek, this.compass = ik, this.display = new ki, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.aU = !1, this.snapshot = null, this.texts = new Map, this.translate = Dk
      }
      setTranslator(kk, ek) {
        this.translate = kk, this.locale = ek, this.metresFormat = new Intl.NumberFormat(ek), this.texts.clear()
      }
      translateCached(kk, ek) {
        const ik = void 0 === ek ? kk : `${kk} ${ek}`;
        let Dk = this.texts.get(ik);
        return void 0 === Dk && (this.texts.size >= 500 && this.texts.clear(), Dk = this.translate(kk, void 0 === ek ? void 0 : {
          distance: ek
        }), this.texts.set(ik, Dk)), Dk
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(kk, ek, ik) {
        if (this.aU) return;
        if (!kk) return this.snapshot = null, void this.display.render(null);
        const Dk = this.map.getSnapshot().map,
          Pk = ik.cameraHeading,
          mk = {
            ...this.display.compassSize,
            tanHalfFovX: ik.tanHalfFovX,
            pitch: ik.cameraPitch
          },
          Mk = [];
        if (Dk)
          for (const fk of this.compass.frame(kk, Pk, ek)) {
            const kk = Hk(fk.offset, mk);
            null !== kk && Mk.push({
              ...fk,
              left: kk
            })
          }
        const Kk = function(kk, ek) {
            const ik = [],
              Dk = kk => "quest" === kk.kind ? kk.distance - 1 : kk.distance,
              fk = [...kk].sort(((kk, ek) => Dk(kk) - Dk(ek) || kk.id.localeCompare(ek.id)));
            for (const Sk of fk) {
              let kk = !1;
              if ("quest" !== Sk.kind)
                for (const Dk of ik)
                  if (Math.abs(Dk.left - Sk.left) < ek) {
                    kk = !0;
                    break
                  } kk || ik.push(Sk)
            }
            return ik
          }(Mk, this.display.compassSpacing),
          xk = function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ik = null;
            for (const Dk of kk) Math.abs(Dk.offset) <= ek && (!ik || Dk.distance < ik.distance || Dk.distance === ik.distance && Math.abs(Dk.offset) < Math.abs(ik.offset)) && (ik = Dk);
            return ik
          }(Kk),
          nk = kk => {
            var ek;
            return null !== (ek = kk.displayName) && void 0 !== ek ? ek : this.translateCached(kk.nameKey)
          },
          Uk = {
            compass: {
              markers: Kk.map((kk => ({
                id: kk.id,
                icon: kk.icon,
                colour: kk.colour,
                name: nk(kk),
                left: kk.left
              }))),
              cardinals: bk.map((kk => {
                let {
                  name: ek,
                  bearing: ik
                } = kk;
                const Dk = Hk(fk.c.computeShortestRotation(Pk, ik), mk);
                return {
                  name: ek,
                  left: null !== Dk && void 0 !== Dk ? Dk : 0,
                  hidden: null === Dk
                }
              })),
              label: xk ? `${nk(xk)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Ck(xk.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Dk && void 0 !== Dk && Dk.background) {
          const ek = kk[0] - Dk.mapOrigin[0],
            ik = kk[2] - Dk.mapOrigin[2],
            {
              rotation: fk,
              transform: bk
            } = function(kk, ek, ik, Dk) {
              const [fk, bk] = rk(kk, ek, Dk), Pk = Sk - ik;
              return {
                rotation: Pk,
                transform: `rotate(${Pk}rad) translate(-${fk}%, -${bk}%)`
              }
            }(ek, ik, Pk, Dk.background.bounds);
          Uk.minimap = {
            transform: bk,
            iconRotation: -fk + "rad"
          };
          const [mk, Mk] = rk(ek, ik, Dk.background.bounds);
          Uk.player = {
            left: mk,
            top: Mk,
            hidden: mk < 0 || Mk < 0 || mk > 100 || Mk > 100,
            rotation: -fk + "rad"
          }
        }
        const {
          waypoint: wk
        } = this.quests.getSnapshot();
        if ("search" === (null === wk || void 0 === wk ? void 0 : wk.questMarkerIcon) && null !== Dk && void 0 !== Dk && Dk.background) {
          const {
            bounds: kk
          } = Dk.background, [ek, ik] = rk(wk.position[0] - Dk.mapOrigin[0], wk.position[2] - Dk.mapOrigin[2], kk);
          Uk.searchArea = {
            left: ek,
            top: ik,
            width: 6400 / (kk.mapMaxX - kk.mapMinX),
            height: 6400 / (kk.mapMaxZ - kk.mapMinZ),
            shapeSeed: wk.nameKey
          }
        }
        const lk = this.quests.getNotificationSnapshot(),
          pk = "completion" === (null === lk || void 0 === lk ? void 0 : lk.phase) && !se(lk.kind);
        if (wk && !pk) {
          const ek = Math.hypot(...wk.position.map(((ek, ik) => ek - kk[ik]))),
            Dk = Math.round(ek),
            fk = "talk" === wk.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ek) / 5)) : 0,
            Sk = ik.projectWorldPosToViewport(wk.position),
            bk = Sk && ik.projectWorldPosToViewport([wk.position[0], wk.position[1] - 1, wk.position[2]]);
          Uk.waypoint = {
            ...ik.projectWorldPosToScreenPos(wk.position),
            text: Sk,
            nearness: fk * fk * (3 - 2 * fk),
            blockHeight: Sk && bk ? bk.y - Sk.y : null,
            name: this.translateCached(wk.nameKey),
            nameKey: wk.nameKey,
            markerIcon: wk.questMarkerIcon ? fi[wk.questMarkerIcon] : "quest",
            popupToken: (null === lk || void 0 === lk ? void 0 : lk.waypointNameKey) === wk.nameKey ? lk.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Dk)),
            hint: "search" === wk.questMarkerIcon && Math.hypot(wk.position[0] - kk[0], wk.position[2] - kk[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Uk, this.display.render(Uk)
      }
      dispose() {
        this.aU = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const bi = "skyblockSkillsView";
    class ri extends Kk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk => kk,
          Dk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          fk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = ek, this.translate = ik, this.locale = Dk, this.itemName = fk, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = kk => {
          this.selected = kk, this.emit()
        }
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, this.locale = ek, this.itemName = ik, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(kk) {
        let ek = this.skillText.get(kk);
        return ek || (ek = {
          label: this.translate(`skyblockGame:${kk}`),
          description: this.translate(`skyblockGame:${kk}Description`)
        }, this.skillText.set(kk, ek)), ek
      }
      sources(kk) {
        if ("mining" === kk || "fishing" === kk) return this.buildSources(kk);
        let ek = this.sourceText.get(kk);
        return ek || (ek = this.buildSources(kk), this.sourceText.set(kk, ek)), ek
      }
      buildSources(kk) {
        const ek = this.translate;
        return "exploration" === kk ? [ek("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), ek("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === kk ? [ek("skyblockGame:logSource", {
          xp: this.number(Ue["Maple Log"])
        })] : "combat" === kk ? [ek("skyblockGame:creatureKillSource"), ek("skyblockGame:noEnvironmentalXp")] : "farming" === kk ? [ek("skyblockGame:cropSource", {
          xp: this.number(le["Wheat|FreshlyGrown"])
        }), ek("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), ek("skyblockGame:noYoungCropXp")] : Object.entries("mining" === kk ? we : pe).map((kk => {
          let [ik, Dk] = kk;
          return ek("skyblockGame:itemXpSource", {
            item: this.itemName(ik),
            xp: this.number(Dk)
          })
        }))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
      benefit(kk, ek) {
        const ik = re(kk, ek);
        return this.translate(ik.translationKey, {
          bonus: this.number(ik.percent)
        })
      }
      BU(kk) {
        if (!this.aU) {
          if ("snapshot" === kk.kind) this.progress = kk.progress, this.pending.clear(), this.recent = null;
          else if ("award" === kk.kind && this.progress) {
            const {
              award: ek
            } = kk;
            this.progress = {
              ...this.progress,
              [ek.skill]: ek.after
            };
            for (const [kk, Dk] of this.pending) Dk.skill === ek.skill && this.pending.delete(kk);
            const ik = ek.after.level > ek.before.level;
            this.recordGain(ek.skill, ek.amount, ik ? ++this.nextLevelUpToken : null), ik && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: ek.skill,
              beforeLevel: ek.before.level,
              level: ek.after.level
            })
          } else {
            if ("rejectBlock" === kk.kind) return void this.rejectBlock(kk.position);
            if ("open" === kk.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(kk, ek, ik) {
        if (!this.progress || this.aU || ik) return;
        const Dk = function(kk, ek) {
          const ik = kk.split("|")[0];
          return "Air" === ek || ek === `Barkless ${kk}` ? Object.hasOwn(Ue, ik) ? {
            skill: "foraging",
            amount: Ue[ik]
          } : "Air" !== ek ? null : Object.hasOwn(we, kk) ? {
            skill: "mining",
            amount: we[kk]
          } : Ke(kk) ? {
            skill: "farming",
            amount: 10
          } : ne(kk) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(le, kk) ? {
            skill: "farming",
            amount: le[kk]
          } : Object.hasOwn(ak, kk) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(ek, "Air");
        if (!Dk) return;
        const fk = kk.join(",");
        if (this.pending.has(fk)) return;
        const Sk = this.predictedProgress(Dk.skill).totalXp + Dk.amount;
        Number.isSafeInteger(Sk) && (this.pending.set(fk, {
          ...Dk,
          expires: this.now() + 2e3
        }), this.recordGain(Dk.skill, 0), this.emit())
      }
      rejectBlock(kk) {
        this.pending.delete(kk.join(",")) && this.emit()
      }
      Px() {
        if (this.aU) return;
        let kk = !1;
        for (const [ek, ik] of this.pending) ik.expires <= this.now() && (this.pending.delete(ek), kk = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, kk = !0), kk && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(kk, ek) {
        var ik, Dk;
        let fk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Sk = (null === (ik = this.recent) || void 0 === ik ? void 0 : ik.skill) === kk && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          bk = (null === (Dk = this.recent) || void 0 === Dk ? void 0 : Dk.skill) === kk && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: kk,
          confirmed: Sk + ek,
          expires: this.now() + 3e3,
          levelUpToken: null !== fk && void 0 !== fk ? fk : bk
        }
      }
      pendingXp(kk) {
        let ek = 0;
        for (const ik of this.pending.values()) ik.skill === kk && (ek += ik.amount);
        return ek
      }
      predictedProgress(kk) {
        const ek = this.progress[kk],
          ik = this.pendingXp(kk);
        return ik ? me(ek.totalXp + ik, kk) : ek
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var kk, ek, ik;
        const Dk = this.progress ? Nk.map((kk => {
            const ek = this.predictedProgress(kk);
            return {
              ...this.text(kk),
              icon: ye[kk],
              benefit: this.benefit(kk, ek.level),
              sources: this.sources(kk),
              id: kk,
              selected: kk === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(ek.level)
              }),
              xp: null === ek.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(ek.xpIntoLevel),
                target: this.number(ek.xpForNextLevel)
              }),
              percent: null === ek.xpForNextLevel ? 100 : Math.min(100, ek.xpIntoLevel / ek.xpForNextLevel * 100)
            }
          })) : [],
          fk = Dk.find((kk => {
            var ek;
            return kk.id === (null === (ek = this.recent) || void 0 === ek ? void 0 : ek.skill)
          })),
          Sk = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Dk,
          detail: null !== (kk = Dk.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          overallLevel: this.progress ? Nk.reduce(((kk, ek) => kk + this.predictedProgress(ek).level), 0) : null,
          hud: fk && Sk > 0 ? {
            skill: fk,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Sk)
            }),
            levelUpToken: null !== (ek = null === (ik = this.recent) || void 0 === ik ? void 0 : ik.levelUpToken) && void 0 !== ek ? ek : null,
            colour: Le(fk.id)
          } : null
        }
      }
    }
    const Pi = Math.max(1600, 600, 950) + 400,
      mi = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Mi = "skyblockQuestsView",
      Ki = "skyblockQuestNotificationView";
    class xi extends Kk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(kk, Dk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = ek, this.translate = ik, this.now = fk, this.locale = Sk, this.publishNotification = bk, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var kk, ek;
          this.selected = null !== (kk = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.trackedQuestId) && void 0 !== kk ? kk : null, this.show()
        }, this.select = kk => {
          this.selected = kk, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const kk = this.snapshot.detail;
          !this.aU && null !== kk && void 0 !== kk && kk.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(kk.id), this.emit())
        }, this.viewDialogue = () => {
          const kk = this.snapshot.detail;
          var ek;
          kk && (null === (ek = this.onViewDialogue) || void 0 === ek || ek.call(this, kk.id))
        }, this.notifications = new Ae(fk, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var kk, ek;
        return null !== (kk = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.trackedQuestId) && void 0 !== kk ? kk : null
      }
      notify(kk) {
        !this.aU && this.notifications.enqueue(kk) && this.emitNotification()
      }
      setNotificationsHeld(kk) {
        (this.notifications.setHeld(kk) || kk) && this.emitNotification()
      }
      Px() {
        var kk, ek;
        if (this.aU) return;
        this.notifications.Px() && this.emitNotification();
        let ik = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ik = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ik = !0);
        const Dk = ni(this.authoritative);
        null !== Dk && void 0 !== Dk && null !== (kk = Dk.questClock) && void 0 !== kk && kk.running && this.clockText(Dk) !== (null === (ek = this.snapshot.tracked) || void 0 === ek ? void 0 : ek.clock) && (ik = !0), ik && this.emit()
      }
      setTranslator(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = kk, this.locale = ek, this.emitNotification(), this.emit()
      }
      BU(kk) {
        if (!this.aU)
          if ("completion" === kk.kind) this.notify(kk.questCompletion);
          else if ("landmark" === kk.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: kk.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === kk.kind) {
          var ek, ik, Dk;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: kk.npcNoteTitleKey,
            textKey: kk.npcNoteTextKey,
            params: null !== (ek = kk.npcNoteParams) && void 0 !== ek ? ek : {},
            nameKeys: null !== (ik = kk.npcNoteNameKeys) && void 0 !== ik ? ik : {},
            iconItem: null !== (Dk = kk.npcNoteIconItem) && void 0 !== Dk ? Dk : null
          })
        } else if ("open" === kk.kind) this.show();
        else if ("guidance" === kk.kind) this.waypoint = kk.waypoint, this.compassTarget = kk.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === kk.kind) {
          this.authoritative = kk.snapshot, this.notifications.Px() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const ek = this.trackedStepPulse;
          this.updateTrackedStepPulse(kk.snapshot), this.emit(), this.trackedStepPulse > ek && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.aU || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var kk;
        return null !== (kk = this.translateWithIcons) && void 0 !== kk ? kk : this.translate
      }
      clockText(kk) {
        const ek = kk.questClock;
        if (!ek) return null;
        const ik = ek.elapsedMs + (ek.running ? this.now() - this.receivedAt : 0);
        return void 0 === ek.countdownFromMs ? zk(ik, !1) : zk(1e3 * Math.ceil(Math.max(0, ek.countdownFromMs - ik) / 1e3), !1)
      }
      updateTrackedStepPulse(kk) {
        var ek, ik, Dk;
        const fk = ni(kk);
        if (!fk) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Sk = kk => fk.subquests.filter((ek => kk(ek.status))).map((kk => kk.id)),
          bk = Sk((kk => "completed" === kk || "skipped" === kk)),
          rk = Sk((kk => "locked" !== kk)),
          Pk = (null === (ek = this.trackedSteps) || void 0 === ek ? void 0 : ek.questId) === fk.id && fk.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Pk) {
          const kk = bk.filter((kk => !Pk.finished.has(kk))),
            ek = Sk((kk => "active" === kk || "ready" === kk)).filter((kk => !Pk.unlocked.has(kk)));
          kk.length > 0 && this.trackedStepPulse++, (kk.length > 0 || ek.length > 0) && (this.trackedChange = {
            finished: new Set(kk),
            unlocked: new Set(ek),
            expiresAt: this.now() + Pi
          })
        } else {
          var mk;
          this.trackedStepPulse = (null === (mk = this.trackedSteps) || void 0 === mk ? void 0 : mk.questId) === fk.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: fk.id,
          progress: fk.progress,
          finished: new Set([...null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.finished) && void 0 !== ik ? ik : [], ...bk]),
          unlocked: new Set([...null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.unlocked) && void 0 !== Dk ? Dk : [], ...rk])
        }
      }
      entry(kk, ek) {
        var ik, Dk;
        const fk = kk.id === (null === (ik = this.authoritative) || void 0 === ik ? void 0 : ik.trackedQuestId),
          Sk = this.now() < this.trackAvailableAt,
          bk = this.questTextTranslator(),
          rk = kk.subquests.map((ek => {
            var ik, Dk, Sk, rk, Pk, mk;
            const Mk = null !== (ik = ek.handInNpcName) && void 0 !== ik ? ik : kk.giverName,
              Kk = this.translate("skyblockGame:progress", {
                current: ek.progress.toLocaleString(this.locale),
                target: ek.target.toLocaleString(this.locale)
              }),
              xk = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Mk ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [ek.status],
              nk = "active" === ek.status || "ready" === ek.status;
            return {
              id: ek.id,
              name: Ce(bk, ek.nameKey, ek.nameParams),
              description: Ce(bk, ek.descriptionKey, ek.descriptionParams),
              progress: Kk,
              status: ek.status,
              statusLabel: xk ? this.translate(xk, {
                npc: Mk
              }) : Kk,
              iconItem: nk && null !== (Dk = ek.questIconItem) && void 0 !== Dk ? Dk : null,
              barPercent: "active" === ek.status && ek.showsProgressBar ? Math.min(100, 100 * ek.progress / ek.target) : null,
              justFinished: fk && null !== (Sk = null === (rk = this.trackedChange) || void 0 === rk ? void 0 : rk.finished.has(ek.id)) && void 0 !== Sk && Sk,
              justUnlocked: fk && null !== (Pk = null === (mk = this.trackedChange) || void 0 === mk ? void 0 : mk.unlocked.has(ek.id)) && void 0 !== Pk && Pk
            }
          }));
        return {
          id: kk.id,
          name: Ce(bk, kk.nameKey, kk.nameParams),
          description: Ce(bk, kk.descriptionKey, kk.descriptionParams),
          progress: ek ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: kk.progress.toLocaleString(this.locale),
            target: kk.target.toLocaleString(this.locale)
          }),
          completed: ek,
          tracked: fk,
          selected: kk.id === this.selected,
          canTrack: !ek && !fk && !Sk,
          trackLabel: this.translate(fk ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Sk ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== kk.id,
          subquests: rk,
          focusStep: null !== (Dk = rk.find((kk => null !== kk.barPercent))) && void 0 !== Dk ? Dk : null,
          clock: this.clockText(kk)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
        const Mk = [...null !== (kk = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.active) && void 0 !== kk ? kk : [], ...null !== (ik = null === (Dk = this.authoritative) || void 0 === Dk ? void 0 : Dk.completed) && void 0 !== ik ? ik : []];
        var Kk, xk, nk, Uk;
        Mk.some((kk => kk.id === this.selected)) || (this.selected = null !== (Kk = null !== (xk = null === (nk = this.authoritative) || void 0 === nk ? void 0 : nk.trackedQuestId) && void 0 !== xk ? xk : null === (Uk = Mk[0]) || void 0 === Uk ? void 0 : Uk.id) && void 0 !== Kk ? Kk : null);
        const Hk = null !== (fk = null === (Sk = this.authoritative) || void 0 === Sk ? void 0 : Sk.active.map((kk => this.entry(kk, !1)))) && void 0 !== fk ? fk : [];
        Hk.sort(((kk, ek) => Number(ek.tracked) - Number(kk.tracked)));
        const wk = null !== (bk = null === (rk = this.authoritative) || void 0 === rk ? void 0 : rk.completed.map((kk => this.entry(kk, !0)))) && void 0 !== bk ? bk : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Hk,
          completed: wk,
          completedExpanded: this.completedExpanded,
          detail: null !== (Pk = [...Hk, ...wk].find((kk => kk.selected))) && void 0 !== Pk ? Pk : null,
          tracked: null !== (mk = Hk.find((kk => kk.tracked))) && void 0 !== mk ? mk : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function ni(kk) {
      var ek;
      return null !== (ek = null === kk || void 0 === kk ? void 0 : kk.active.find((ek => ek.id === kk.trackedQuestId))) && void 0 !== ek ? ek : null
    }
    const Ui = "skyblockDungeonsView";
    class Hi extends Kk {
      constructor(kk, ek) {
        let ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Dk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = ek, this.locale = ik, this.requestEnter = Dk, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = kk => {
          this.selected = kk, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const kk = this.pickerEntry(),
            ek = null === kk || void 0 === kk ? void 0 : kk.difficulties[this.pageIndex];
          void 0 !== ek && null !== ek.unlockedBoss && (this.close(), this.requestEnter(kk.id, ek.difficulty))
        }
      }
      setTranslator(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = kk, this.locale = ek, this.emit()
      }
      BU(kk) {
        var ek, ik;
        if (!this.aU) return "open" === kk.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== kk.kind ? "snapshot" === kk.kind && (this.authoritative = kk.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (ek = null === (ik = this.pickerEntry()) || void 0 === ik ? void 0 : ik.difficulties.length) && void 0 !== ek ? ek : 1) - 1)), null === kk.snapshot && this.open ? this.close() : this.emit()) : this.choose(kk.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(kk) {
        var ek;
        const ik = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.dungeons.find((ek => ek.id === kk));
        void 0 !== ik ? this.open && this.pickerDungeonId === kk || (this.pickerDungeonId = kk, this.pageIndex = Math.max(0, ik.difficulties.findLastIndex((kk => null !== kk.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${kk}`)
      }
      turnTo(kk) {
        var ek, ik;
        const Dk = null !== (ek = null === (ik = this.pickerEntry()) || void 0 === ik ? void 0 : ik.difficulties.length) && void 0 !== ek ? ek : 0;
        kk < 0 || kk >= Dk || kk === this.pageIndex || (this.pageIndex = kk, this.emit())
      }
      pickerEntry() {
        var kk, ek;
        return null !== (kk = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.dungeons.find((kk => kk.id === this.pickerDungeonId))) && void 0 !== kk ? kk : null
      }
      difficulty(kk) {
        const ek = kk.completions > 0,
          ik = null === kk.bestMs ? null : zk(kk.bestMs);
        return {
          difficulty: kk.difficulty,
          label: this.translate(qk[kk.difficulty]),
          colour: Ik[kk.difficulty],
          beaten: ek,
          bestTime: ik,
          completions: kk.completions,
          summary: ek ? [null === ik ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ik
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: kk.completions.toLocaleString(this.locale)
          })].filter((kk => null !== kk)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(kk) {
        const ek = kk.difficulties.map((kk => this.difficulty(kk))),
          ik = ek.filter((kk => kk.beaten)).length;
        return {
          id: kk.id,
          name: this.translate(kk.nameKey),
          selected: kk.id === this.selected,
          beatenSummary: `${ik} / ${ek.length}`,
          difficulties: ek
        }
      }
      picker() {
        const kk = this.pickerEntry();
        if (null === kk || 0 === kk.difficulties.length) return null;
        const ek = kk.difficulties.map(((ek, ik) => {
          var Dk, fk, Sk, bk;
          const rk = ek.unlockedBoss,
            Pk = null === rk ? this.lockedHint(kk, ik) : null;
          return {
            ...this.difficulty(ek),
            unlocked: null !== rk,
            bossName: null === rk ? null : this.translate(rk.bossNameKey),
            bossMobType: null !== (Dk = null === rk || void 0 === rk ? void 0 : rk.bossMobType) && void 0 !== Dk ? Dk : null,
            bossMobVariation: null !== (fk = null === rk || void 0 === rk ? void 0 : rk.bossMobVariation) && void 0 !== fk ? fk : null,
            lockedHint: null !== (Sk = null === Pk || void 0 === Pk ? void 0 : Pk.text) && void 0 !== Sk ? Sk : null,
            lockedHintHighlight: null !== (bk = null === Pk || void 0 === Pk ? void 0 : Pk.highlight) && void 0 !== bk ? bk : null,
            current: ik === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(kk.nameKey),
          pages: ek,
          page: ek[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < ek.length - 1
        }
      }
      lockedHint(kk, ek) {
        var ik, Dk, fk;
        if (0 === ek && "number" === typeof kk.combatLevelLock) {
          const ek = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: kk.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: ek,
            colour: Le("combat"),
            icon: ye.combat
          })
        }
        const Sk = null !== (ik = null === (Dk = this.authoritative) || void 0 === Dk ? void 0 : Dk.dungeons) && void 0 !== ik ? ik : [],
          bk = ek > 0 ? kk : null !== (fk = Sk[Sk.indexOf(kk) - 1]) && void 0 !== fk ? fk : null,
          rk = ek > 0 ? kk.difficulties[ek - 1] : null === bk || void 0 === bk ? void 0 : bk.difficulties[0];
        if (null === bk || void 0 === rk) return null;
        const Pk = this.translate(bk.nameKey);
        if (null === rk.unlockedBoss) return bk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, rk.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Pk
        }, rk.difficulty);
        const mk = this.translate(rk.unlockedBoss.bossNameKey);
        return bk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: mk
        }, rk.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: mk,
            dungeon: Pk
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(kk, ek, ik) {
        return this.hintHighlighting(kk, ek, "difficulty", {
          name: this.translate(qk[ik]),
          colour: Ik[ik],
          icon: null
        })
      }
      hintHighlighting(kk, ek, ik, Dk) {
        let {
          name: fk,
          colour: Sk,
          icon: bk
        } = Dk;
        const rk = this.translate(kk, {
          ...ek,
          [ik]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(kk, {
            ...ek,
            [ik]: fk
          }),
          highlight: 2 === rk.length ? {
            before: rk[0],
            name: fk,
            after: rk[1],
            colour: Sk,
            icon: bk
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, ek, ik;
        const Dk = null !== (kk = null === (ek = this.authoritative) || void 0 === ek ? void 0 : ek.dungeons) && void 0 !== kk ? kk : [];
        var fk, Sk;
        Dk.some((kk => kk.id === this.selected)) || (this.selected = null !== (fk = null === (Sk = Dk[0]) || void 0 === Sk ? void 0 : Sk.id) && void 0 !== fk ? fk : null);
        const bk = Dk.map((kk => this.entry(kk)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: bk,
          detail: null !== (ik = bk.find((kk => kk.selected))) && void 0 !== ik ? ik : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const wi = ["mining", "farming", "foraging", "fishing", "combat"],
      li = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      yi = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Yi() {
      for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
      return ek.map(((kk, ek) => ({
        amount: kk,
        coins: li[ek],
        xp: yi[ek]
      })))
    }
    const Li = Yi(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Ci = Yi(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Ai = Yi(50, 100, 250, 500, 1e3, 2500, 5e3),
      ji = Yi(25, 50, 100, 250, 500, 1e3),
      si = Yi(10, 25, 50, 100, 250, 500, 1e3),
      di = Yi(1, 5, 10, 25, 50);

    function Vi(kk, ek) {
      return {
        id: kk,
        category: "fishing",
        item: ek,
        drops: [ek],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : si
      }
    }
    const Fi = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Ci
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Ai
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Ai
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: ji
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: ji
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Ci
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Li
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Li
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Li
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Ai
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Ci
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Ci
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Ci
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Ai
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Ai
      }, Vi("wheatfish", "Wheatfish"), Vi("darter", "Darter"), Vi("sunset_minnow", "Sunset Minnow"), Vi("root_flounder", "Root Flounder"), Vi("greenfin_loach", "Greenfin Loach"), Vi("red_strongfish", "Red Strongfish"), Vi("green_strongfish", "Green Strongfish"), Vi("boomerang_fish", "Boomerang Fish"), Vi("seahorse", "Seahorse"), Vi("spined_stickleback", "Spined Stickleback"), Vi("moon_strongfish", "Moon Strongfish"), Vi("boulder_bass", "Boulder Bass"), Vi("grass_snapper", "Grass Snapper"), Vi("crystal_wheatfish", "Crystalized Wheatfish", di), Vi("moonstone_pupfish", "Moonstone Pupfish", di), Vi("reedglass_minnow", "Reedglass Minnow"), Vi("mangrove_herring", "Mangrove Herring"), Vi("mudline_perch", "Mudline Perch"), Vi("coastal_mullet", "Coastal Mullet"), Vi("reef_sardine", "Reef Sardine"), Vi("root_perch", "Root Perch"), Vi("driftwood_catfish", "Driftwood Catfish"), Vi("aether_minnow", "Aether Minnow"), Vi("needlefish", "Tri-Pointed Needlefish"), Vi("threadfin_bream", "Threadfin Bream"), Vi("mudbelly_tilapia", "Mudbelly Tilapia"), Vi("rotslab_eel", "Rotslab Eel"), Vi("polarflash_electron", "Polarflash Electron"), Vi("mireback_carp", "Mireback Carp"), Vi("blackwater_bream", "Blackwater Bream"), Vi("stone_grouper", "Stone Grouper"), Vi("shadeback_ray", "Shadeback Ray"), Vi("glacial_silverfish", "Glacial Silverfish"), Vi("hatchetfish", "Hatchetfish"), Vi("moonlit_boomerang", "Moonlit Boomerang Fish"), Vi("murkborne_ray", "Murkborne Ray"), Vi("bamboo_catfish", "Bamboo Catfish"), Vi("mossback_arapaima", "Mossback Arapaima"), Vi("murk_stingray", "Murk Stingray"), Vi("channel_sawfish", "Channel Sawfish"), Vi("boned_sturgeon", "Boned Sturgeon"), Vi("oarfish", "Oarfish"), Vi("snakehead", "Snakehead", di), Vi("eldertide_leviathan", "Eldertide Leviathan", di), Vi("pithead", "Pithead"), Vi("electric_eel", "Electric Eel"), Vi("shadow_darter", "Shadow Darter"), Vi("abyss_carp", "Abyss Carp"), Vi("nomai_moray", "Nomai Moray"), Vi("silver_dragonfish", "Silver Dragonfish"), Vi("giant_moray", "Giant Moray"), Vi("coelacanth", "Coelacanth", di), Vi("frost_herring", "Frost Herring"), Vi("permafrost_halibut", "Permafrost Halibut"), Vi("glacial_lanternfish", "Glacial Lanternfish"), Vi("frozen_grenadier", "Frozen Grenadier"), Vi("blackfin_icefish", "Blackfin Icefish"), Vi("moonfish", "Moonfish"), Vi("alpha_strongfish", "Alpha Moon Strongfish"), Vi("deep_lanternfish", "Deepwater Lanternfish", di), Vi("pearlescent_moonfish", "Pearlescent Moonfish", di), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Ci
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: ji
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: ji
      }],
      ui = (new Map(Fi.map((kk => [kk.id, kk]))), new Map),
      qi = new Map;
    for (const xP of Fi) {
      for (const [kk, ek] of Object.entries(null !== (Ii = xP.blocks) && void 0 !== Ii ? Ii : {})) {
        var Ii;
        ui.set(kk, {
          collection: xP,
          amount: ek
        })
      }
      for (const kk of null !== (zi = xP.drops) && void 0 !== zi ? zi : []) {
        var zi;
        qi.set(kk, xP)
      }
    }

    function Qi(kk, ek) {
      let ik = 0;
      for (; ik < kk.tiers.length && ek >= kk.tiers[ik].amount;) ik++;
      return ik
    }
    const vi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Ei(kk) {
      return vi[kk - 1]
    }
    const ai = "skyblockCollectionsView";
    class Wi extends Kk {
      constructor(kk, ek) {
        let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Dk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = ek, this.locale = ik, this.itemName = Dk, this.counts = null, this.category = "mining", this.selected = Fi[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = kk => {
          this.category = kk, this.selected = this.inCategory(kk)[0].id, this.emit()
        }, this.select = kk => {
          this.selected = kk, this.emit()
        }
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, this.locale = ek, this.itemName = ik, this.emit()
      }
      BU(kk) {
        if (!this.aU)
          if ("collOpen" !== kk.kind) {
            (kk.collFull || null === this.counts) && (this.counts = new Map);
            for (const [ek, ik] of kk.collCounts) this.counts.set(ek, ik);
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
        var kk;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const ek = this.inCategory(this.category).map((kk => this.collectionView(kk))),
          ik = Fi.reduce(((kk, ek) => kk + this.tierOf(ek)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: wi.map((kk => this.categoryView(kk))),
          collections: ek,
          detail: null !== (kk = ek.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ik)
          })
        }
      }
      categoryView(kk) {
        const ek = this.inCategory(kk),
          ik = ek.reduce(((kk, ek) => kk + this.tierOf(ek)), 0),
          Dk = ek.reduce(((kk, ek) => kk + ek.tiers.length), 0);
        return {
          id: kk,
          label: this.translate(`skyblockGame:${kk}`),
          icon: ye[kk],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ik),
            target: this.number(Dk)
          }),
          selected: kk === this.category
        }
      }
      collectionView(kk) {
        var ek, ik;
        const Dk = null !== (ek = this.counts.get(kk.id)) && void 0 !== ek ? ek : 0,
          fk = Qi(kk, Dk),
          Sk = null !== (ik = kk.tiers[fk]) && void 0 !== ik ? ik : null,
          bk = 0 === fk ? 0 : kk.tiers[fk - 1].amount;
        return {
          id: kk.id,
          name: this.itemName(kk.item),
          icon: kk.item,
          selected: kk.id === this.selected,
          locked: 0 === Dk,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Dk)
          }),
          tier: 0 === fk ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(fk),
          percent: null === Sk ? 100 : Math.min(100, (Dk - bk) / (Sk.amount - bk) * 100),
          progress: null === Sk ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Dk),
            target: this.number(Sk.amount)
          }),
          nextReward: null === Sk ? null : this.reward(kk, Sk.coins, Sk.xp)
        }
      }
      reward(kk, ek, ik) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(ek),
          xp: this.number(ik),
          skill: this.translate(`skyblockGame:${kk.category}`)
        })
      }
      tierLabel(kk) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Ei(kk)
        })
      }
      tierOf(kk) {
        var ek;
        return Qi(kk, null !== (ek = this.counts.get(kk.id)) && void 0 !== ek ? ek : 0)
      }
      inCategory(kk) {
        return Fi.filter((ek => ek.category === kk))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
    }
    const ti = "skyblockPortalTransitView",
      Xi = "skyblockPortalArrival";
    class Bi {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.tm = kk, this.storage = ek, this.now = ik, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      BU(kk) {
        const ek = {
          zoneNameKey: kk.transitZoneNameKey,
          variation: kk.transitZoneVariation,
          colour: kk.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Xi, ek), this.show("departure", ek.zoneNameKey, ek.colour, kk.transitDurationMs, kk.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Xi)
        }))
      }
      resumeArrival(kk) {
        const ek = this.storage.getItem(Xi);
        this.storage.removeItem(Xi), null === ek || ek.variation !== kk || this.now() - ek.departedAt > 3e4 || this.show("arrival", ek.zoneNameKey, ek.colour, 3200, 2e4)
      }
      finishArrival(kk) {
        var ek;
        "arrival" === (null === (ek = this.view) || void 0 === ek ? void 0 : ek.phase) && this.view.token === kk && (this.clearTimer(), this.view = null, this.tm(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(kk, ek, ik, Dk, fk, Sk) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: kk,
          zoneNameKey: ek,
          colour: ik,
          durationMs: Dk
        }, this.tm(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.tm(null), null === Sk || void 0 === Sk || Sk()
        }), fk)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const ci = "skyblockDailyRewardView",
      Ti = "skyblockDailyRewardCoin";
    class oi {
      constructor(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.tm = kk, this.isBusy = ek, this.holdQuestPopups = ik, this.onHeldCoinsChanged = Dk, this.onCoinLanded = fk, this.onStarted = Sk, this.onFinished = bk, this.onItemLanded = rk, this.now = Pk, this.XM = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var kk, ek;
        return null !== (kk = null === (ek = this.playing) || void 0 === ek ? void 0 : ek.view) && void 0 !== kk ? kk : null
      }
      getHeldCoins() {
        var kk, ek;
        let ik = 0;
        for (const Dk of this.XM) ik += Dk.coins;
        return ik - (null !== (kk = null === (ek = this.playing) || void 0 === ek ? void 0 : ek.released) && void 0 !== kk ? kk : 0)
      }
      BU(kk) {
        "dailyRewardClaimed" !== kk.kind ? (this.queue.push(kk), this.Px()) : this.XM.push({
          coins: kk.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Px() {
        const kk = this.now();
        if (null === this.playing) return this.releaseUnshown(kk), void this.startNext(kk);
        const ek = this.playing,
          ik = kk - ek.startedAt,
          Dk = ek.view.flyingCoins,
          fk = function(kk, ek) {
            let ik = 0;
            for (; ik < ek && Oi(ik, ek) <= kk;) ik++;
            return ik
          }(ik, Dk);
        if (fk !== ek.landed) {
          for (let kk = fk - ek.landed > 2 ? fk - 1 : ek.landed; kk < fk; kk++) this.onCoinLanded(kk, Dk);
          ek.landed = fk, ek.released = Math.round(ek.view.coins * fk / Dk), this.onHeldCoinsChanged()
        }
        for (; ek.itemsLanded < ek.view.items.length && 2e3 + 160 * ek.itemsLanded + 630 <= ik;) this.onItemLanded(ek.itemsLanded), ek.itemsLanded++;
        ik >= ek.view.durationMs && (this.finish(), this.startNext(kk))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.XM = [], this.tm(null)
      }
      startNext(kk) {
        if (0 === this.queue.length || this.isBusy()) return;
        const ek = this.queue.shift();
        this.token++;
        const ik = {
          token: this.token,
          day: ek.dailyRewardDay,
          coins: ek.dailyRewardCoins,
          items: ek.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: ek.dailyRewardDay === Vk ? 24 : 14
        };
        this.playing = {
          view: ik,
          startedAt: kk,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.tm(ik), this.onStarted(ik)
      }
      finish() {
        this.XM.shift(), this.playing = null, this.holdQuestPopups(!1), this.tm(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(kk) {
        if (this.queue.length > 0 || 0 === this.XM.length) return;
        const ek = this.XM.length;
        this.XM = this.XM.filter((ek => kk - ek.receivedAt < 6e4)), this.XM.length !== ek && this.onHeldCoinsChanged()
      }
    }

    function Zi(kk, ek) {
      return 450 + 715 * kk / (ek - 1)
    }

    function Oi(kk, ek) {
      return Zi(kk, ek) + 650
    }
    const gi = "skyblockMailboxView";
    class Gi {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.tm = kk, this.isBusy = ek, this.onStarted = ik, this.now = Dk, this.waiting = [], this.playing = null, this.token = 0, this.itemName = kk => kk
      }
      getSnapshot() {
        var kk, ek;
        return null !== (kk = null === (ek = this.playing) || void 0 === ek ? void 0 : ek.view) && void 0 !== kk ? kk : null
      }
      setItemName(kk) {
        this.itemName = kk
      }
      BU(kk) {
        this.waiting.push(...kk.mailLetters), this.Px()
      }
      Px() {
        const kk = this.now();
        null !== this.playing && kk - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.tm(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(kk)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.tm(null)
      }
      start(kk) {
        const ek = this.waiting.slice(0, 3);
        this.token++;
        const ik = {
          token: this.token,
          letters: ek.map((kk => this.toView(kk))),
          more: this.waiting.length - ek.length,
          durationMs: 4500 + 700 * ek.length
        };
        this.waiting = [], this.playing = {
          view: ik,
          startedAt: kk
        }, this.tm(ik), this.onStarted(ik)
      }
      toView(kk) {
        return {
          coins: kk.mailCoins,
          items: kk.mailItems.map((kk => {
            var ek;
            return {
              itemName: kk.mailItemName,
              amount: kk.mailItemAmount,
              label: null !== (ek = kk.mailItemLabel) && void 0 !== ek ? ek : this.itemName(kk.mailItemName)
            }
          })),
          reasonKey: kk.mailReasonKey,
          reasonParams: kk.mailReasonParams
        }
      }
    }
    const Ni = "skyblockQuestGraphView",
      Ri = "skyblockDevQuestJump";

    function Ji(kk) {
      if (0 === kk.length) return "";
      const ek = [`M ${kk[0].x} ${kk[0].y}`];
      for (let Dk = 1; Dk < kk.length - 1; Dk++) {
        const ik = kk[Dk + 1];
        ek.push(`Q ${kk[Dk].x} ${kk[Dk].y} ${(kk[Dk].x+ik.x)/2} ${(kk[Dk].y+ik.y)/2}`)
      }
      const ik = kk[kk.length - 1];
      return ek.push(`L ${ik.x} ${ik.y}`), ek.join(" ")
    }

    function kD(kk, ek) {
      return kk < ek ? `${kk}|${ek}` : `${ek}|${kk}`
    }
    class eD extends Kk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(kk, ik, Dk), this.translate = ek, this.requestJump = fk, this.requestArrive = Sk, this.storage = bk, this.now = rk, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = kk => {
          kk !== this.hoveredId && (this.hoveredId = kk, this.emit())
        }, this.jump = kk => {
          this.close(), this.requestJump(kk)
        }
      }
      BU(kk) {
        if (!this.aU)
          if ("graph" !== kk.kind) {
            if ("jumping" === kk.kind) {
              const ek = {
                questId: kk.graphQuestId,
                variation: kk.graphVariation,
                completes: kk.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Ri, ek)
            }
          } else {
            const ek = ++this.graphCount;
            ik.e(118).then((() => ik(6295))).then((ik => {
              let {
                default: Dk
              } = ik;
              this.aU || ek !== this.graphCount || (this.layout = function(kk, ek, ik) {
                var Dk, fk;
                const Sk = new kk.graphlib.Graph;
                Sk.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Sk.setDefaultEdgeLabel((() => ({})));
                const bk = new Set;
                for (const Mk of ek) bk.add(Mk.graphQuestId), Sk.setNode(Mk.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const rk = ik.filter((kk => bk.has(kk.graphFromId) && bk.has(kk.graphToId) && kk.graphFromId !== kk.graphToId)),
                  Pk = new Map;
                for (const Mk of [...rk].sort(((kk, ek) => Number("awaits" === kk.graphEdgeKind) - Number("awaits" === ek.graphEdgeKind)))) {
                  const kk = kD(Mk.graphFromId, Mk.graphToId);
                  Pk.has(kk) || (Pk.set(kk, Mk), Sk.setEdge(Mk.graphFromId, Mk.graphToId))
                }
                kk.layout(Sk);
                const mk = Sk.graph();
                return {
                  width: Math.ceil(null !== (Dk = mk.width) && void 0 !== Dk ? Dk : 0),
                  height: Math.ceil(null !== (fk = mk.height) && void 0 !== fk ? fk : 0),
                  nodes: ek.map((kk => {
                    var ek, ik;
                    const Dk = Sk.node(kk.graphQuestId);
                    return {
                      node: kk,
                      left: (null !== (ek = Dk.x) && void 0 !== ek ? ek : 0) - 95,
                      top: (null !== (ik = Dk.y) && void 0 !== ik ? ik : 0) - 26
                    }
                  })),
                  edges: rk.map((kk => {
                    var ek;
                    const ik = Pk.get(kD(kk.graphFromId, kk.graphToId)),
                      Dk = null !== (ek = Sk.edge(ik.graphFromId, ik.graphToId).points) && void 0 !== ek ? ek : [];
                    return {
                      edge: kk,
                      key: `${kk.graphFromId}|${kk.graphToId}|${kk.graphEdgeKind}`,
                      path: Ji(ik.graphFromId === kk.graphFromId ? Dk : [...Dk].reverse())
                    }
                  })),
                  plans: new Map(ek.map((kk => [kk.graphQuestId, new Set([kk.graphQuestId, ...kk.graphPlanIds])])))
                }
              }(Dk, kk.graphNodes, kk.graphEdges), this.show())
            })).catch((kk => {
              console.error("The quest graph could not be laid out", kk)
            }))
          }
      }
      resumeJump(kk) {
        const ek = this.storage.getItem(Ri);
        this.storage.removeItem(Ri), null === ek || ek.variation !== kk || this.now() - ek.departedAt > 6e4 || this.requestArrive(ek.questId, ek.completes)
      }
      setTranslator(kk) {
        this.translate = kk, this.emit()
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
        var kk, ek;
        return null !== (kk = null === this.hoveredId || null === (ek = this.layout) || void 0 === ek ? void 0 : ek.plans.get(this.hoveredId)) && void 0 !== kk ? kk : new Set
      }
      buildSnapshot() {
        const kk = this.layout;
        if (null === kk) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const ek = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: kk.width,
          height: kk.height,
          nodes: kk.nodes.map((kk => {
            let {
              node: ik,
              left: Dk,
              top: fk
            } = kk;
            return {
              id: ik.graphQuestId,
              name: this.translate(ik.graphNameKey),
              detail: null === ik.graphGiverName ? ik.graphZoneId : `${ik.graphGiverName} \xb7 ${ik.graphZoneId}`,
              state: ik.graphState,
              left: Dk,
              top: fk,
              inPlan: ek.has(ik.graphQuestId),
              hovered: ik.graphQuestId === this.hoveredId
            }
          })),
          edges: kk.edges.map((kk => {
            let {
              edge: ik,
              key: Dk,
              path: fk
            } = kk;
            return {
              key: Dk,
              kind: ik.graphEdgeKind,
              path: fk,
              inPlan: ek.has(ik.graphFromId) && ek.has(ik.graphToId)
            }
          })),
          planning: ek.size > 0
        }
      }
    }
    var iD = ik(36664);
    const DD = 250,
      fD = 2150,
      SD = -2.8,
      bD = 2.2,
      rD = -27,
      PD = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      mD = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      MD = Math.round(50 + 1e3 * (mD.delay + mD.period / 2)),
      KD = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      xD = Array.from({
        length: 26
      }, ((kk, ek) => {
        const ik = 2.39996 * ek,
          Dk = .5 + .618034 * ek % 1 * .23,
          fk = ek % 3 !== 2;
        return {
          rune: fk ? KD[7 * ek % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ik)*Dk).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ik)*Dk).toFixed(3)})`,
            "--spin": 40 * (ek % 5 - 2) + "deg",
            "--size": (fk ? 1 + ek % 4 * .2 : .3 + ek % 2 * .15) + "rem",
            "--duration": `${(1.8+7*ek%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*ek%3).toFixed(2)}s`
          }
        }
      }));

    function nD(kk, ek) {
      return Array.from({
        length: 30 + 3 * kk + (ek ? 10 : 0)
      }, ((kk, ek) => {
        const ik = ek < 4,
          Dk = ik ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          fk = ik ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Sk = ik ? 2.2 : .6 + Math.random(),
          bk = ik ? .3 : Math.random() < .5 ? .16 : .24,
          rk = ik ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Dk,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${fk.toFixed(2)}rem`,
          "--length": `${Sk.toFixed(2)}rem`,
          "--width": `${bk}rem`,
          "--duration": `${Math.round(rk)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function UD(kk) {
      let {
        zeta: ek,
        period: ik
      } = kk;
      const Dk = 2 * Math.PI / ik;
      return {
        w: Dk,
        decay: ek * Dk / Math.sqrt(1 - ek * ek)
      }
    }
    let HD = !1;

    function wD() {
      if (HD) return;
      HD = !0;
      const kk = document.createElement("style");
      kk.textContent = function() {
        const kk = UD(PD),
          ek = UD(mD),
          ik = ek => Math.exp(-kk.decay * ek) * Math.sin(kk.w * ek),
          Dk = ik(Math.atan(kk.w / kk.decay) / kk.w),
          fk = .25,
          Sk = 2.15,
          bk = Math.round(215),
          rk = [];
        for (let Pk = 0; Pk <= bk; Pk++) {
          const kk = Pk / bk * Sk;
          let mk = Math.sin(Math.min(kk, fk) / fk * Math.PI / 2) ** 2,
            Mk = 0,
            Kk = 1,
            xk = 1 - .2 * mk,
            nk = 1;
          if (kk >= fk) {
            const bk = kk - fk,
              rk = Math.max(0, bk - .05);
            mk = Math.exp(-rk / .05), Mk = ik(rk + PD.lead * (1 - Math.exp(-rk / PD.rush))) / Dk;
            const Pk = rk - mD.delay,
              Uk = Pk <= 0 ? 0 : 1 - Math.exp(-ek.decay * Pk) * (Math.cos(ek.w * Pk) + ek.decay / ek.w * Math.sin(ek.w * Pk)),
              Hk = Math.max(0, (kk - 1.77) / (Sk - 1.77));
            Kk = (1 + (mD.to - 1) * Uk) * (1 + .08 * Hk), xk = 1.1 + 1.5 * Math.exp(-bk / .07) + .3 * Math.exp(-(((1e3 * bk - MD) / 100) ** 2)) + .8 * Hk, nk = 1 - Hk ** 1.5
          }
          const Uk = .15 * mk + SD * Mk,
            Hk = -.1 * mk + bD * Mk,
            wk = 3 * mk + rD * Mk;
          rk.push(`${(Pk/bk*100).toFixed(3)}% { opacity: ${nk.toFixed(3)}; transform: translate(${Uk.toFixed(3)}rem, ${Hk.toFixed(3)}rem) rotate(${wk.toFixed(2)}deg) scale(${Kk.toFixed(3)}); filter: brightness(${xk.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${rk.join(" ")} }`
      }(), document.head.append(kk)
    }
    const lD = "skyblockForgeView",
      pD = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class yD extends Kk {
      constructor(kk, ek, ik, Dk, fk) {
        super(kk, ik, Dk), this.translate = ek, this.requestForge = fk, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (kk, ek) => {
          var ik, Dk;
          null !== this.forging || (null !== (ik = this.owned[(0, iD.k)(ek, kk)]) && void 0 !== ik ? ik : 0) <= 0 || (this.selected[kk] = this.selected[kk] === ek ? null : ek, this.status = null, null === (Dk = this.onPartSelected) || void 0 === Dk || Dk.call(this), this.emit())
        }, this.forge = kk => {
          var ek, ik;
          const Dk = this.selectedParts();
          if (null === Dk || this.isPending() || !this.open) return;
          const fk = (0, iD.j)(Dk);
          if (null === fk || fk.coalCost > this.coal) return;
          const Sk = this.preview(fk),
            bk = null !== (ek = null === (ik = this.onForgeStarted) || void 0 === ik ? void 0 : ik.call(this, Sk.tier, Sk.named, kk)) && void 0 !== ek ? ek : () => {};
          if (this.dropArrival(), kk) {
            const kk = {
              id: ++this.forgeId,
              preview: Sk,
              timers: [],
              stopSounds: bk,
              landed: !1,
              reply: null
            };
            kk.timers.push(setTimeout((() => {
              kk.landed = !0, null !== kk.reply && (this.apply(kk.reply), kk.reply = null, this.emit())
            }), DD), setTimeout((() => {
              this.finishForge(kk)
            }), fD)), this.forging = kk
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Dk)
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        var ek;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.forgeMessageKind) return this.dropForge(), this.apply(kk), this.status = null, this.show(), void(null === (ek = this.onOpened) || void 0 === ek || ek.call(this));
        const ik = this.forging;
        if (null !== ik && null !== kk.forgeRefusalKey) this.dropForge();
        else if (null !== ik && !ik.landed) return void(ik.reply = kk);
        this.apply(kk), this.emit()
      }
      apply(kk) {
        if (this.owned = kk.forgeOwnedParts, this.coal = kk.forgeCoalOwned, this.keepSelectionOwned("open" === kk.forgeMessageKind), null !== kk.forgeForgedSwordId) {
          var ek;
          const ik = (0, iD.j)(kk.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (ek = null === ik || void 0 === ik ? void 0 : ik.displayName) && void 0 !== ek ? ek : ""
            }
          }
        } else null !== kk.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: kk.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(kk) {
        this.translate = kk, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(kk) {
        var ek;
        this.forging = null;
        const ik = this.selectedParts(),
          Dk = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: kk.id,
          sameSword: null !== ik && (null === (ek = (0, iD.j)(ik)) || void 0 === ek ? void 0 : ek.displayName) === kk.preview.name,
          timer: Dk
        }, this.emit()
      }
      dropForge() {
        const kk = this.forging;
        if (null !== kk) {
          this.forging = null;
          for (const ek of kk.timers) clearTimeout(ek);
          kk.stopSounds(), null !== kk.reply && this.apply(kk.reply)
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
        var kk, ek, ik;
        const Dk = this.selectedParts(),
          fk = null === Dk ? null : (0, iD.j)(Dk),
          Sk = null !== (kk = null === (ek = this.forging) || void 0 === ek ? void 0 : ek.preview) && void 0 !== kk ? kk : null === fk ? null : this.preview(fk);
        return {
          enabled: this.received,
          open: this.open,
          slots: iD.g.map((kk => ({
            kind: kk,
            label: this.translate(pD[kk]),
            parts: this.partsFor(kk)
          }))),
          coalOwned: this.coal,
          preview: Sk,
          unformedSword: iD.e[null !== (ik = this.selected.Blade) && void 0 !== ik ? ik : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((kk => kk > 0)),
          canForge: null !== Sk && !Sk.coalShort && !this.isPending(),
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
      preview(kk) {
        return {
          name: kk.displayName,
          lore: kk.lore,
          baseSword: kk.baseSword,
          enchantmentTier: kk.enchantmentTier,
          tier: Number(kk.enchantmentTier.slice(-1)),
          named: kk.named,
          stats: this.stats(kk),
          effects: kk.effects,
          coalCost: kk.coalCost,
          coalShort: null === this.forging && kk.coalCost > this.coal
        }
      }
      partsFor(kk) {
        const ek = [];
        for (const Dk of iD.d) {
          var ik;
          const fk = (0, iD.k)(Dk, kk),
            Sk = null !== (ik = this.owned[fk]) && void 0 !== ik ? ik : 0;
          Sk > 0 && ek.push({
            material: Dk,
            itemName: fk,
            owned: Sk,
            selected: this.selected[kk] === Dk,
            placeholder: !1
          })
        }
        if (0 === ek.length) {
          const ik = iD.d[0];
          ek.push({
            material: ik,
            itemName: (0, iD.k)(ik, kk),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return ek
      }
      stats(kk) {
        const ek = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${kk.powerMultiplier.toFixed(2)}`,
          better: kk.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${kk.damageMultiplier.toFixed(2)}`,
          better: kk.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/kk.cooldownMultiplier).toFixed(2)}`,
          better: kk.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${kk.knockbackMultiplier.toFixed(2)}`,
          better: kk.knockbackMultiplier > 1
        }];
        return kk.reachBonus > 0 && ek.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${kk.reachBonus.toFixed(1)}`,
          better: !0
        }), kk.damageReduction > 0 && ek.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*kk.damageReduction)}%`,
          better: !0
        }), ek
      }
      selectedParts() {
        const {
          Blade: kk,
          Guard: ek,
          Handle: ik
        } = this.selected;
        return null === kk || null === ek || null === ik ? null : {
          blade: kk,
          guard: ek,
          handle: ik
        }
      }
      keepSelectionOwned(kk) {
        for (const ik of iD.g) {
          var ek;
          const Dk = this.selected[ik];
          if (null !== Dk && (null !== (ek = this.owned[(0, iD.k)(Dk, ik)]) && void 0 !== ek ? ek : 0) > 0) continue;
          if (!kk) {
            this.selected[ik] = null;
            continue
          }
          const fk = [...iD.d].reverse().find((kk => {
            var ek;
            return (null !== (ek = this.owned[(0, iD.k)(kk, ik)]) && void 0 !== ek ? ek : 0) > 0
          }));
          this.selected[ik] = null !== fk && void 0 !== fk ? fk : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const YD = "skyblockSmugglerView",
      LD = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class CD extends Kk {
      constructor(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, ik, Dk), this.translate = ek, this.requestBuy = fk, this.now = Sk, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = kk => kk, this.onBought = null, this.buy = kk => {
          const ek = this.deals[kk];
          void 0 !== ek && !this.isPending() && this.open && !this.soldOut.has(kk) && this.canAfford(ek) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, kk))
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        if (this.received = !0, this.day = kk.smugglerDay, this.deals = kk.smugglerDeals, this.rivets = kk.smugglerRivetsOwned, this.crests = kk.smugglerCrestsOwned, this.soldOut = new Set(kk.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + kk.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = kk.smugglerBoughtSlot, null !== kk.smugglerBoughtSlot) {
          var ek, ik;
          const Dk = this.deals[kk.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Dk ? "" : this.dealName(Dk),
              amount: String(null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.smugglerDealAmount) && void 0 !== ek ? ek : 0)
            }
          }, this.boughtCount++, null === (ik = this.onBought) || void 0 === ik || ik.call(this)
        } else null !== kk.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: kk.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, void 0 !== ik && (this.itemName = ik), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(kk) {
        if (null !== kk.smugglerDealUniqueName) return kk.smugglerDealUniqueName;
        const ek = LD[kk.smugglerDealItem];
        return void 0 === ek ? this.itemName(kk.smugglerDealItem) : this.translate(ek)
      }
      canAfford(kk) {
        return kk.smugglerDealRivets <= this.rivets && kk.smugglerDealCrests <= this.crests
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
        const kk = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return kk <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : kk < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(kk)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(kk / 60)),
          minutes: String(kk % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((kk, ek) => ({
            slot: ek,
            itemName: kk.smugglerDealItem,
            displayName: this.dealName(kk),
            enchantmentTier: kk.smugglerDealEnchantmentTier,
            amount: kk.smugglerDealAmount,
            rivets: kk.smugglerDealRivets,
            crests: kk.smugglerDealCrests,
            affordable: this.canAfford(kk),
            soldOut: this.soldOut.has(ek),
            justBought: this.boughtSlot === ek
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
    const AD = "skyblockPassageView",
      jD = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function sD(kk, ek) {
      return kk(jD[ek])
    }

    function dD(kk, ek, ik, Dk) {
      const fk = Math.ceil((ik - Dk) / 864e5),
        Sk = sD(kk, ek);
      return fk > 1 ? kk("skyblockGame:passageNextDays", {
        phase: Sk,
        days: String(fk)
      }) : kk("skyblockGame:passageNextSoon", {
        phase: Sk
      })
    }
    class VD extends Kk {
      constructor(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, ik, Dk), this.translate = ek, this.now = fk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = kk => kk, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        this.message = kk, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, void 0 !== ik && (this.itemName = ik), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(kk) {
        return {
          itemName: kk.passageFish,
          displayName: this.itemName(kk.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(kk.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const kk = this.message;
        return null === kk ? {
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
          phase: kk.passagePhase,
          phaseName: sD(this.translate, kk.passagePhase),
          visitors: kk.passageVisitors.map((kk => this.describe(kk))),
          resting: this.describe(kk.passageResting),
          nextPhase: kk.passageNextPhase,
          next: dD(this.translate, kk.passageNextPhase, kk.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var FD = ik(38123);
    const uD = "skyblockKeepersChairView";
    class qD extends Kk {
      constructor(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new FD.b;
        super(kk, ik, Dk), this.translate = ek, this.requestAim = fk, this.now = Sk, this.pacer = bk, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = kk => kk, this.aim = kk => {
          !this.awaitingReply && this.open && this.atChair && kk !== this.favoured && (null === kk || this.islands.some((ek => ek.keepersChairIslandId === kk && ek.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== kk && void 0 !== kk ? kk : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = bk.subscribe((() => {
          this.emit()
        }))
      }
      BU(kk) {
        var ek, ik;
        this.received = !0;
        const Dk = this.favoured,
          fk = this.atChair;
        var Sk;
        return this.islands = kk.keepersChairIslands, this.favoured = kk.keepersChairFavoured, this.passage = null !== (ek = kk.keepersChairPassage) && void 0 !== ek ? ek : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ik = kk.keepersChairAtChair) || void 0 === ik || ik, "place" === kk.keepersChairMessageKind ? (!fk && this.atChair && "refused" === (null === (Sk = this.status) || void 0 === Sk ? void 0 : Sk.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== kk.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: kk.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Dk && (this.status = null === this.favoured ? {
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
      receivePassage(kk) {
        this.received && (this.passage = kk, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, void 0 !== ik && (this.itemName = ik), this.emit()
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
      islandName(kk) {
        const ek = this.islands.find((ek => ek.keepersChairIslandId === kk));
        return void 0 === ek ? kk : this.translate(ek.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const kk = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          ek = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((kk => {
            const ek = kk.keepersChairFeaturedFish;
            return {
              id: kk.keepersChairIslandId,
              name: this.translate(kk.keepersChairIslandNameKey),
              relit: kk.keepersChairIslandRelit,
              featuredFish: null === ek ? null : {
                itemName: ek,
                displayName: this.itemName(ek)
              },
              favoured: kk.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === kk ? null : {
            tone: kk.tone,
            text: this.translate(kk.key, null === kk.island ? void 0 : {
              island: this.islandName(kk.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === ek ? null : {
            phase: ek.keepersChairPassagePhase,
            phaseName: sD(this.translate, ek.keepersChairPassagePhase),
            nextPhase: ek.keepersChairPassageNextPhase,
            next: dD(this.translate, ek.keepersChairPassageNextPhase, ek.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const ID = "skyblockReachLogView",
      zD = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      QD = "Caught Fish",
      vD = [1, 2, 4];

    function ED(kk, ek) {
      return kk.map((kk => ({
        ...kk,
        reachLogPageFish: kk.reachLogPageFish.map((kk => ({
          ...kk,
          reachLogFishFresh: ek(kk)
        })))
      })))
    }
    class hD extends Kk {
      constructor(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new FD.b;
        super(kk, ik, Dk), this.translate = ek, this.requestOpen = fk, this.pacer = Sk, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = kk => kk, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = kk => {
          this.pages.some((ek => ek.reachLogIslandId === kk)) && (this.selected = kk, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Sk.subscribe((() => {
          this.emit()
        }))
      }
      BU(kk) {
        if (this.received = !0, "status" === kk.reachLogMessageKind) return !0 === kk.reachLogNews && this.markNews(), this.serverFresh = kk.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const ek = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== kk.reachLogMessageKind)
          if (this.pageViews = null, this.pages = ED(kk.reachLogPages, (kk => kk.reachLogFishFresh || this.heldFresh.has(kk.reachLogFishItem))), this.letGoShown = kk.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, ek) this.showPages();
          else {
            for (const kk of this.pages)
              for (const ek of kk.reachLogPageFish) ek.reachLogFishFresh && this.heldFresh.add(ek.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, this.pageViews = null, void 0 !== ik && (this.itemName = ik), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = ED(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var kk, ek, ik, Dk;
        const fk = this.pages.find((kk => kk.reachLogPageFish.some((kk => kk.reachLogFishFresh))));
        if (void 0 !== fk) return fk.reachLogIslandId;
        if (null !== this.selected && this.pages.some((kk => kk.reachLogIslandId === this.selected))) return this.selected;
        return null !== (kk = null !== (ek = null === (ik = this.pages.filter((kk => kk.reachLogIslandAwake)).at(-1)) || void 0 === ik ? void 0 : ik.reachLogIslandId) && void 0 !== ek ? ek : null === (Dk = this.pages[0]) || void 0 === Dk ? void 0 : Dk.reachLogIslandId) && void 0 !== kk ? kk : null
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
        return this.pages.map((kk => {
          var ek;
          return {
            id: kk.reachLogIslandId,
            name: this.translate(kk.reachLogIslandNameKey),
            awake: kk.reachLogIslandAwake,
            gold: kk.reachLogPageGold,
            caught: kk.reachLogPageFish.filter((kk => kk.reachLogFishCaught && !kk.reachLogFishVisitor)).length,
            total: kk.reachLogPageFish.filter((kk => !kk.reachLogFishVisitor)).length,
            fish: kk.reachLogPageFish.map((kk => {
              const ek = kk.reachLogFishBestKg;
              return {
                itemName: kk.reachLogFishItem,
                name: kk.reachLogFishCaught ? this.itemName(kk.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: kk.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / kk.reachLogFishChance))
                }),
                best: kk.reachLogFishCaught ? null === ek ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: ek.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: kk.reachLogFishMarks,
                ribbons: vD.map((ek => 0 !== (kk.reachLogFishRibbons & ek))),
                glimmer: 0 !== (8 & kk.reachLogFishRibbons),
                halo: 0 !== (32 & kk.reachLogFishRibbons),
                fresh: kk.reachLogFishFresh,
                visitor: kk.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (ek = kk.reachLogPageReturner) && void 0 !== ek ? ek : null)
          }
        }))
      }
      buildReturner(kk) {
        return null === kk ? null : {
          itemName: kk.reachLogReturnerFishItem,
          line: this.translate(kk.reachLogReturnerLineKey, {
            name: this.translate(kk.reachLogReturnerNameKey),
            trinket: this.translate(kk.reachLogReturnerTrinketKey)
          }),
          back: kk.reachLogReturnerBack
        }
      }
      receivePassagePhase(kk) {
        null !== this.passagePhase && this.passagePhase !== kk && (this.pagesCurrent = !1), this.passagePhase = kk
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const aD = "skyblockLampLightView";
    class WD {
      constructor(kk, ek, ik, Dk) {
        this.tm = kk, this.translate = ek, this.requestCommand = ik, this.pacer = Dk, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.aU = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = kk => {
          kk ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = kk => {
          this.send(`buy ${kk}`)
        }, this.socket = kk => {
          this.send(`socket ${null!==kk&&void 0!==kk?kk:vk}`)
        }, this.wearTint = kk => {
          this.send(`tint ${null!==kk&&void 0!==kk?kk:vk}`)
        }, this.setSituation = kk => {
          this.situation = kk, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Dk.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Dk.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      BU(kk) {
        if (this.message = kk, null !== kk.lampLightShop && (this.shop = kk.lampLightShop), "open" === kk.lampLightKind && (this.refusalKey = null), "reply" === kk.lampLightKind) {
          var ek;
          const fk = null !== (ek = kk.lampLightReplyTag) && void 0 !== ek ? ek : null,
            Sk = null !== fk && fk === this.offTag;
          var ik, Dk;
          if (Sk ? this.settleOff() : null !== fk && fk !== this.awaitingTag || this.settleReply(), this.refusalKey = kk.lampLightRefusalKey, null !== kk.lampLightBought && !Sk) this.sparkle = {
            id: kk.lampLightBought,
            count: (null !== (ik = null === (Dk = this.sparkle) || void 0 === Dk ? void 0 : Dk.count) && void 0 !== ik ? ik : 0) + 1
          }
        }
        kk.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === kk.lampLightKind && (this.lastGained = kk.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(kk) {
        kk !== this.atChair && (this.atChair = kk, kk && (this.refusalKey = null), this.emit())
      }
      setTranslator(kk, ek) {
        this.translate = kk, this.locale = null !== ek && void 0 !== ek ? ek : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.aU = !0
      }
      send(kk) {
        var ek;
        if (null !== this.awaitingTag || "ready" !== (null === (ek = this.message) || void 0 === ek ? void 0 : ek.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ik = this.nextTag();
        this.awaitingTag = ik, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${kk} ${ik}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const kk = this.nextTag();
        this.offTag = kk, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${kk}`)
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
        this.aU || (this.snapshot = this.buildSnapshot(), this.tm(this.snapshot))
      }
      formatLight(kk) {
        return Math.floor(kk).toLocaleString(this.locale)
      }
      formatPercent(kk) {
        const ek = 100 * kk;
        return ek >= 10 ? Math.round(ek).toLocaleString(this.locale) : ek.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(kk, ek) {
        if ("bite" === kk) return this.translate("skyblockGame:lampLightBite", {
          seconds: (ek.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === kk) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(ek.lampLightRareChance)
        });
        if ("notice" === kk) return null === ek.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(ek.lampLightNoticeChance)
        });
        const ik = "meter" === kk ? ek.lampLightMeterCatches : ek.lampLightBloomCatches;
        return null === ik ? null : this.translate("meter" === kk ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ik))
        })
      }
      oddsLines(kk, ek) {
        const ik = (kk, ek) => {
            var ik;
            return null !== (ik = {
              bite: ek.lampLightBiteMs,
              rare: ek.lampLightRareChance,
              meter: ek.lampLightMeterCatches,
              bloom: ek.lampLightBloomCatches,
              notice: ek.lampLightNoticeChance
            } [kk]) && void 0 !== ik ? ik : 0
          },
          Dk = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          fk = [];
        for (const Sk of ["bite", "rare", "meter", "bloom", "notice"]) {
          const bk = this.formatOdds(Sk, kk),
            rk = this.formatOdds(Sk, ek);
          if (null === bk || null === rk || "bite" !== Sk && "rare" !== Sk && bk === rk) continue;
          const Pk = ik(Sk, ek) - ik(Sk, kk),
            mk = Dk[Sk] ? Pk < 0 : Pk > 0;
          fk.push({
            label: Sk,
            before: bk,
            after: rk,
            tone: bk === rk ? "same" : mk ? "better" : "worse"
          })
        }
        return fk
      }
      charmView(kk, ek, ik) {
        const Dk = kk.lampLightCharmId.charAt(0).toUpperCase() + kk.lampLightCharmId.slice(1),
          fk = "bloom" === this.situation;
        return {
          id: kk.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Dk}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Dk}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(kk.lampLightCharmCost)
          }),
          owned: kk.lampLightCharmOwned,
          affordable: ik >= kk.lampLightCharmCost,
          socketed: ek.lampLightSocketed === kk.lampLightCharmId,
          lines: this.oddsLines(fk ? ek.lampLightBareBloom : ek.lampLightBareOpen, fk ? kk.lampLightCharmBloom : kk.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var kk, ek, ik, Dk;
        const fk = this.message,
          Sk = "ready" === (null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) ? this.shop : null,
          bk = null !== (kk = null === fk || void 0 === fk ? void 0 : fk.lampLightBalance) && void 0 !== kk ? kk : 0,
          rk = this.atChair,
          Pk = "loading" === (null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          mk = "ready" !== (null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) || rk ? null !== (ek = this.refusalKey) && void 0 !== ek ? ek : Pk : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== fk && "locked" !== fk.lampLightStatus,
          status: null !== (ik = null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) && void 0 !== ik ? ik : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(bk)
          }),
          releasing: null !== (Dk = null === fk || void 0 === fk ? void 0 : fk.lampLightReleasing) && void 0 !== Dk && Dk,
          gained: null === fk || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === fk || void 0 === fk ? void 0 : fk.lampLightStatus) && rk && !this.isPending(),
          situation: this.situation,
          shop: null === Sk ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Sk.lampLightOddsRod,
              island: this.translate(Sk.lampLightIslandNameKey)
            }),
            heldRod: null !== Sk.lampLightHeldRod,
            charms: Sk.lampLightCharms.map((kk => this.charmView(kk, Sk, bk))),
            tints: Sk.lampLightTints.map((kk => {
              const ek = kk.lampLightTintId,
                [ik, Dk, fk] = kk.lampLightTintColour;
              return {
                id: ek,
                name: this.translate(`skyblockGame:lampLightTint${ek.charAt(0).toUpperCase()}${ek.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(kk.lampLightTintCost)
                }),
                owned: kk.lampLightTintOwned,
                affordable: bk >= kk.lampLightTintCost,
                wearing: Sk.lampLightTint === ek,
                colour: `rgb(${ik}, ${Dk}, ${fk})`
              }
            })),
            wearingIslandColours: null === Sk.lampLightTint
          },
          notice: null === mk ? null : this.translate(mk),
          sparkle: this.sparkle
        }
      }
    }
    const tD = "skyblockMagmawardView";
    class XD {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.tm = kk, this.now = ek, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Bk.map((() => 0)), this.wornAt = Bk.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      BU(kk) {
        var ek, ik;
        const Dk = Bk.map(((ek, ik) => !0 === kk.magmawardPiecesWorn[ik]));
        if (!Dk.includes(!0)) return this.snapshot = null, void this.tm(null);
        const fk = this.now(),
          Sk = this.snapshot;
        null === Sk && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const bk = kk.magmawardFuelCarried,
          rk = !Dk.includes(!1);
        let Pk = null !== (ek = null === Sk || void 0 === Sk ? void 0 : Sk.pulse) && void 0 !== ek ? ek : null,
          mk = null !== (ik = null === Sk || void 0 === Sk ? void 0 : Sk.flare) && void 0 !== ik ? ik : null;
        kk.magmawardFuelBurned ? (Pk = "burn", mk = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = fk, this.flareAt = fk) : null !== Sk && bk > Sk.fuel && (Pk = "gain", this.pulseToken++, this.pulseAt = fk), rk && null !== Sk && !Sk.fullSet && (mk = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = fk, this.setLitAt = fk);
        const Mk = Bk.map(((kk, ek) => (Dk[ek] && null !== Sk && !Sk.pieces[ek].worn && (this.wornTokens[ek]++, this.wornAt[ek] = fk), {
          itemName: kk,
          worn: Dk[ek],
          wornToken: this.wornTokens[ek],
          justWorn: Dk[ek] && this.isPlaying(this.wornAt[ek], fk)
        })));
        this.snapshot = {
          pieces: Mk,
          wornCount: Dk.filter(Boolean).length,
          fullSet: rk,
          fuel: bk,
          fuelState: bk <= 0 ? "empty" : bk <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, fk) ? Pk : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, fk) ? mk : null,
          flareToken: this.flareToken,
          setLit: rk && this.isPlaying(this.setLitAt, fk),
          setLitToken: this.setLitToken
        }, this.tm(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.tm(null)
      }
      isPlaying(kk, ek) {
        return ek - kk < 1200
      }
    }
    const BD = "skyblockGlowtideView";
    class cD {
      constructor(kk) {
        this.tm = kk, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = kk => {
          this.arrow = kk, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      BU(kk) {
        this.bloom = kk.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.tm(null))
      }
      afterRender(kk, ek) {
        const ik = this.bloom;
        if (null === ik || null === kk) return;
        const Dk = ik.glowtideBloomX - kk[0],
          Sk = ik.glowtideBloomZ - kk[2],
          bk = Math.hypot(Dk, Sk),
          rk = this.snapshot,
          Pk = null !== rk && void 0 !== rk && rk.inRange ? 1 : 0,
          mk = bk <= 12.5 + Pk && kk[1] - ik.glowtideBloomY <= 10 + Pk;
        !mk || null !== rk && void 0 !== rk && rk.inRange || this.inRangeToken++;
        const Mk = {
          colour: ik.glowtideBloomColour,
          inRange: mk,
          distance: Math.round(bk),
          inRangeToken: this.inRangeToken
        };
        (null === rk || Mk.colour !== rk.colour || Mk.inRange !== rk.inRange || !mk && Mk.distance !== rk.distance) && (this.snapshot = Mk, this.tm(Mk));
        const Kk = fk.c.computeShortestRotation(ek, (0, fk.nb)([Dk, 0, Sk]));
        null === this.arrow || Math.abs(Kk - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Kk}rad)`, this.arrowTurn = Kk)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.tm(null)
      }
    }
    const TD = "skyblockGlowMeterView";
    class oD {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.tm = kk, this.now = ek, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      BU(kk) {
        const ek = this.now(),
          {
            glowMeterFill: ik,
            glowMeterCapacity: Dk
          } = kk,
          fk = ik >= Dk,
          Sk = this.snapshot;
        null !== Sk && (fk && !Sk.full && (this.fullToken++, this.fullAt = ek), Sk.full && !fk ? (this.burstToken++, this.burstAt = ek) : ik > Sk.fill && (this.gainToken++, this.gainAt = ek)), this.snapshot = {
          fill: ik,
          vK: Dk,
          ratio: Math.min(1, Math.max(0, ik / Dk)),
          full: fk,
          rares: kk.glowMeterRares,
          ready: fk && this.isPlaying(this.fullAt, ek),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, ek),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, ek),
          gainToken: this.gainToken
        }, this.tm(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.tm(null)
      }
      isPlaying(kk, ek) {
        return ek - kk < 2e3
      }
    }
    const ZD = "skyblockHushWaitView";
    class OD {
      constructor(kk) {
        this.tm = kk, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      BU(kk) {
        let {
          hushWaitMs: ek,
          hushWaitTotalMs: ik,
          hushWaitLines: Dk
        } = kk;
        if (this.clearTimers(), this.token++, 0 === Dk.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (ek <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Dk[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const fk = Math.max(null !== ik && void 0 !== ik ? ik : ek, ek),
          Sk = fk - ek,
          bk = kk => fk * kk / Dk.length,
          rk = kk => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: fk,
              elapsedMs: Sk,
              line: Dk[kk],
              lineIndex: kk
            })
          };
        let Pk = 0;
        for (; Pk + 1 < Dk.length && bk(Pk + 1) <= Sk;) Pk++;
        rk(Pk);
        for (let mk = Pk + 1; mk < Dk.length; mk++) this.later(bk(mk) - Sk, (() => {
          rk(mk)
        }));
        this.later(ek, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(kk) {
        this.snapshot = kk, this.tm(kk)
      }
      later(kk, ek) {
        this.timers.push(setTimeout(ek, kk))
      }
      clearTimers() {
        for (const kk of this.timers) clearTimeout(kk);
        this.timers = []
      }
    }
    const gD = "skyblockTideChartsView",
      GD = 36e5,
      ND = 864e5;

    function RD(kk, ek, ik) {
      const [Dk, fk, Sk, bk] = kk.tideChartArea, rk = Math.floor(ek), Pk = Math.floor(ik);
      return rk >= Dk && rk <= Sk && Pk >= fk && Pk <= bk
    }

    function JD(kk, ek, ik) {
      const [Dk, fk, Sk, bk] = kk.tideChartWater;
      return function(kk, ek, ik, Dk, fk, Sk) {
        const bk = 4 - ck(Math.floor(fk) - (kk - ik), ik);
        return 5 * ck(Math.floor(Sk) - (ek - Dk), Dk) + bk
      }(Dk, fk, Sk, bk, ek, ik)
    }

    function kf(kk, ek, ik) {
      const Dk = kk.tideCharts;
      for (let fk = 0; fk < Dk.length; fk++)
        if (RD(Dk[fk], ek, ik)) return Dk[fk];
      return null
    }

    function ef(kk, ek, ik) {
      const Dk = Math.max(0, ek - ik);
      return Dk > ND ? kk("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Dk / ND))
      }) : Dk > GD ? kk("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Dk / GD))
      }) : kk("skyblockGame:tideChartsTurnSoon")
    }
    class Df extends Kk {
      constructor(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, ik, Dk), this.translate = ek, this.now = fk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Un = kk => {
          this.picked = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        const ek = this.message;
        if (null !== ek)
          for (const Dk of kk.tideCharts) {
            var ik;
            const kk = ek.tideCharts.find((kk => kk.tideChartIsland === Dk.tideChartIsland)),
              fk = Dk.tideChartLit & ~(null !== (ik = null === kk || void 0 === kk ? void 0 : kk.tideChartLit) && void 0 !== ik ? ik : 0);
            void 0 !== kk && 0 !== fk && (this.pulse = {
              island: Dk.tideChartIsland,
              cells: fk,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = kk, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(kk, ek) {
        var ik;
        const Dk = null === this.message || Number.isNaN(kk) ? null : kf(this.message, kk, ek),
          fk = null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.tideChartIsland) && void 0 !== ik ? ik : null,
          Sk = null === Dk ? -1 : function(kk, ek, ik) {
            const [Dk, fk, Sk, bk] = kk.tideChartWater;
            return function(kk, ek, ik, Dk, fk, Sk, bk) {
              return ((fk - kk) / (ik + bk)) ** 2 + ((Sk - ek) / (Dk + bk)) ** 2 <= 1
            }(Dk, fk, Sk, bk, ek, ik, 2) ? JD(kk, ek, ik) : -1
          }(Dk, kk, ek);
        return (fk !== this.hereIsland || Sk !== this.hereCell) && (this.hereIsland = fk, this.hereCell = Sk, null !== fk && (this.lastIsland = fk), !0)
      }
      afterRender(kk) {
        if (null === this.message) return;
        this.lastX = null === kk ? Number.NaN : kk[0], this.lastZ = null === kk ? Number.NaN : kk[2];
        const ek = this.locate(this.lastX, this.lastZ),
          ik = this.expirePulses();
        (ek || ik || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const kk = this.now();
        return !(!this.open || kk - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = kk, ef(this.translate, this.message.tideChartTurnsInMs, kk - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(kk, ek) {
        const ik = null === this.message ? null : kf(this.message, kk, ek);
        if (null === ik) return;
        const Dk = JD(ik, kk, ek);
        0 === (ik.tideChartPreBlank & 1 << Dk) && (this.cast = {
          island: ik.tideChartIsland,
          cell: Dk,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const kk = this.now();
        let ek = !1;
        return 0 !== this.pulse.cells && kk - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, ek = !0), null !== this.cast && kk - this.cast.atMs >= 1500 && (this.cast = null, ek = !0), ek
      }
      setTranslator(kk) {
        this.translate = kk, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(kk, ek) {
        var ik;
        return null !== (ik = kk.tideCharts.find((kk => kk.tideChartIsland === ek))) && void 0 !== ik ? ik : null
      }
      describe(kk) {
        var ek, ik, Dk;
        const fk = kk.tideChartIsland,
          Sk = [];
        for (let nk = 0; nk < 25; nk++) {
          const ek = 1 << nk;
          0 !== (kk.tideChartLit & ek) ? Sk.push("lit") : 0 !== (kk.tideChartClear & ek) ? Sk.push("clear") : 0 !== (kk.tideChartPreBlank & ek) ? Sk.push("shore") : Sk.push("water")
        }
        const bk = function(kk) {
            let ek = 0;
            for (let ik = kk >>> 0; 0 !== ik; ik &= ik - 1) ek++;
            return ek
          }(kk.tideChartLit),
          rk = kk.tideChartInkCount,
          Pk = this.translate(kk.tideChartIslandNameKey),
          mk = this.translate("skyblockGame:tideChartsLit", {
            lit: String(bk),
            ink: String(rk)
          }),
          Mk = null === kk.tideChartPictureNameKey ? null : this.translate(kk.tideChartPictureNameKey),
          Kk = this.hereIsland === fk && -1 !== this.hereCell ? this.hereCell : null,
          xk = [`${Pk}: ${mk}.`];
        if (null !== Mk && xk.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Mk
          })), null !== Kk) {
          const kk = Math.floor(Kk / 5) + 1,
            ek = Kk % 5 + 1;
          xk.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(kk),
            column: String(ek)
          }))
        }
        return {
          island: fk,
          islandName: Pk,
          cells: Sk,
          hereCell: Kk,
          lit: bk,
          ink: rk,
          litText: mk,
          pictureName: Mk,
          gridLabel: xk.join(" "),
          pulseCells: this.pulse.island === fk ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (ek = this.cast) || void 0 === ek ? void 0 : ek.island) === fk ? this.cast.cell : null,
          castToken: null !== (ik = null === (Dk = this.cast) || void 0 === Dk ? void 0 : Dk.token) && void 0 !== ik ? ik : 0
        }
      }
      buildSnapshot() {
        var kk, ek, ik;
        const Dk = this.message;
        if (null === Dk || 0 === Dk.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const fk = this.findChart(Dk, this.hereIsland),
          Sk = null !== (kk = null !== (ek = null !== (ik = this.findChart(Dk, this.open ? this.picked : null)) && void 0 !== ik ? ik : fk) && void 0 !== ek ? ek : this.findChart(Dk, this.lastIsland)) && void 0 !== kk ? kk : Dk.tideCharts[0],
          bk = null === fk ? null : this.describe(fk);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: bk,
          card: Sk === fk ? bk : this.describe(Sk),
          turnsText: ef(this.translate, Dk.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Dk.tideChartBookCount)
          }),
          tabs: Dk.tideCharts.map((kk => ({
            island: kk.tideChartIsland,
            name: this.translate(kk.tideChartIslandNameKey),
            selected: kk.tideChartIsland === Sk.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const ff = "skyblockRegularsView",
      Sf = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      bf = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function rf(kk, ek) {
      return "given" === kk ? ek.given : "owed" === kk ? ek.owed : ek.goal
    }
    class Pf extends Kk {
      constructor(kk, ek, ik, Dk) {
        super(kk, ik, Dk), this.translate = ek, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = kk => kk, this.openIsland = kk => {
          this.selected = kk, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = kk => {
          this.selected = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        this.message = kk, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const kk = this.openedFromReachLog;
        return this.openedFromReachLog = !1, kk
      }
      setTranslator(kk, ek, ik) {
        this.translate = kk, void 0 !== ik && (this.itemName = ik), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(kk, ek, ik) {
        return {
          text: this.translate(rf(kk, ek), ik),
          given: "given" === kk
        }
      }
      describeRegular(kk, ek) {
        const ik = this.translate,
          Dk = null !== kk.regularKg,
          fk = kk.regularMeetings,
          Sk = Dk ? 0 === fk ? ik("skyblockGame:regularsNotMet") : 1 === fk ? ik("skyblockGame:regularsMeetingsOne") : ik("skyblockGame:regularsMeetings", {
            count: fk
          }) : "";
        return {
          id: kk.regularId,
          name: ik(kk.regularNameKey),
          line: ik(kk.regularLineKey),
          itemName: kk.regularFishItem,
          fishName: this.itemName(kk.regularFishItem),
          tagged: Dk,
          size: null === kk.regularKg ? ik("skyblockGame:regularsNotTagged") : ik("skyblockGame:regularsSize", {
            kg: kk.regularKg.toFixed(1)
          }),
          meetings: Sk,
          chance: ik("skyblockGame:regularsChance", {
            count: kk.regularOneInCasts
          }),
          resting: kk.regularRestingToday,
          gifts: [{
            text: ik("skyblockGame:regularsGiftFlare"),
            given: fk >= 3
          }, this.describeGift(kk.regularTintGift, Sf, {
            tint: ik(kk.regularTintNameKey)
          })],
          history: [...kk.regularHistory].reverse().map((kk => {
            const Dk = kk.regularMeetingKg.toFixed(1),
              fk = ek - kk.regularMeetingDay;
            return fk <= 0 ? ik("skyblockGame:regularsToday", {
              kg: Dk
            }) : ik("skyblockGame:regularsDaysAgo", {
              days: fk,
              kg: Dk
            })
          }))
        }
      }
      describeIsland(kk, ek) {
        return {
          id: kk.regularsIslandId,
          name: this.translate(kk.regularsIslandNameKey),
          charm: this.describeGift(kk.regularsCharmGift, bf, {
            charm: this.translate(kk.regularsCharmNameKey)
          }),
          regulars: kk.regularsList.map((kk => this.describeRegular(kk, ek)))
        }
      }
      buildSnapshot() {
        var kk, ek, ik, Dk;
        const fk = this.message;
        if (null === fk) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Sk = fk.regularsIslands.map((kk => this.describeIsland(kk, fk.regularsToday))),
          bk = null !== (kk = null !== (ek = null === (ik = Sk.find((kk => kk.id === this.selected))) || void 0 === ik ? void 0 : ik.id) && void 0 !== ek ? ek : null === (Dk = Sk[0]) || void 0 === Dk ? void 0 : Dk.id) && void 0 !== kk ? kk : "";
        return {
          enabled: !0,
          open: this.open,
          selected: bk,
          islands: Sk
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const mf = "skyblockHiddenWatersView";
    class Mf {
      constructor(kk) {
        this.tm = kk, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      BU(kk) {
        this.snapshot = function(kk) {
          const [ek, ik] = kk.hiddenWatersMapSize, Dk = (kk, Dk) => ({
            left: 1 - kk / ek,
            top: Dk / ik
          }), fk = new Map;
          for (const [bk, rk] of kk.hiddenWatersGlimpses) {
            var Sk;
            const kk = null !== (Sk = fk.get(bk)) && void 0 !== Sk ? Sk : [];
            kk.push(rk), fk.set(bk, kk)
          }
          return {
            found: kk.hiddenWatersFound,
            total: kk.hiddenWatersTotal,
            aspect: ik / ek,
            pins: kk.hiddenWatersPins.map((kk => {
              let [ek, ik] = kk;
              return Dk(ek, ik)
            })),
            islands: kk.hiddenWatersIslands.map((kk => {
              let [fk, Sk, bk, rk] = kk;
              const {
                left: Pk,
                top: mk
              } = Dk(bk + 1, Sk);
              return {
                left: Pk,
                top: mk,
                width: (bk + 1 - fk) / ek,
                height: (rk + 1 - Sk) / ik
              }
            })),
            glimpses: fk
          }
        }(kk), this.tm(this.snapshot)
      }
    }
    const Kf = "skyblockDialogueView";
    class xf extends Kk {
      constructor(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, ik, Dk), this.translate = ek, this.requestDialogue = fk, this.now = Sk, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = kk => {
          this.selection = {
            kind: "quest",
            questId: kk
          }, this.request(), this.show()
        }, this.selectCharacter = kk => {
          this.selection = {
            kind: "character",
            npcId: kk
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      BU(kk) {
        this.received = !0, this.scripts = kk.questDialogueScripts, this.speakers = new Map(kk.questDialogueSpeakers.map((kk => [kk.dialogueSpeakerId, kk]))), this.emit()
      }
      setTranslator(kk) {
        this.translate = kk, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const kk = this.now();
        kk >= this.requestAvailableAt && (this.requestAvailableAt = kk + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var kk;
        const ek = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...ek,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ik = this.selection;
        if ("quest" === ik.kind) {
          const kk = this.scripts.find((kk => kk.dialogueQuestId === ik.questId));
          return {
            ...ek,
            characters: [],
            questFocus: ik.questId,
            conversations: kk ? [this.conversation(kk)] : []
          }
        }
        const Dk = [];
        for (let Sk = this.scripts.length - 1; Sk >= 0; Sk--) {
          const kk = this.scripts[Sk].dialogueLines;
          for (let ek = kk.length - 1; ek >= 0; ek--) Dk.includes(kk[ek].dialogueSpeakerId) || Dk.push(kk[ek].dialogueSpeakerId)
        }
        const fk = null !== ik.npcId && Dk.includes(ik.npcId) ? ik.npcId : null !== (kk = Dk[0]) && void 0 !== kk ? kk : null;
        return {
          ...ek,
          characters: Dk.map((kk => {
            var ek, ik;
            return {
              id: kk,
              styling: null !== (ek = null === (ik = this.speakers.get(kk)) || void 0 === ik ? void 0 : ik.dialogueSpeakerStyling) && void 0 !== ek ? ek : kk,
              selected: kk === fk
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((kk => kk.dialogueLines.some((kk => kk.dialogueSpeakerId === fk)))).map((kk => this.conversation(kk))).reverse()
        }
      }
      conversation(kk) {
        let ek = null;
        return {
          questId: kk.dialogueQuestId,
          questName: this.translate(kk.dialogueQuestNameKey),
          completed: kk.dialogueQuestCompleted,
          lines: kk.dialogueLines.map(((kk, ik) => {
            var Dk;
            const fk = kk.dialogueSpeakerId === ek || null === (Dk = this.speakers.get(kk.dialogueSpeakerId)) || void 0 === Dk ? void 0 : Dk.dialogueSpeakerStyling;
            return ek = kk.dialogueSpeakerId, {
              key: ik,
              display: {
                line: {
                  translationKey: kk.dialogueLineKey,
                  params: this.params(kk.dialogueLineParams)
                },
                speakerName: fk,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(kk) {
        if (void 0 !== kk) return Object.fromEntries(Object.entries(kk).map((kk => {
          let [ek, ik] = kk;
          return [ek, "string" === typeof ik ? ik : this.translate(ik.translationKey)]
        })))
      }
    }
    var nf = ik(581),
      Uf = ik(1248),
      Hf = ik(99);
    const wf = "skyblockAutographsView";

    function lf(kk) {
      const ek = nf.h[kk];
      return {
        label: ek.chatTag.map((kk => kk.str)).join(""),
        icon: ek.icon,
        colour: ek.mainRGB
      }
    }
    class pf extends Kk {
      constructor(kk) {
        let ek = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = ek, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      BU(kk) {
        this.signatures = kk.autographSignatures, kk.autographOpen ? this.show() : this.emit()
      }
      setTranslator(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = ek, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var kk;
        const ek = null !== (kk = this.signatures) && void 0 !== kk ? kk : [],
          ik = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Dk = [...ek].sort(((kk, ek) => Number(null !== ek.autographRank) - Number(null !== kk.autographRank) || ek.autographSignedAtMs - kk.autographSignedAtMs)).map((kk => ({
            key: `${kk.autographSignedAtMs}|${kk.autographSignerName}`,
            name: (0, Uf.d)(kk.autographSignerName, !Hf.featureFlags.canSeeRealPlayerNames),
            rank: null === kk.autographRank ? null : lf(kk.autographRank),
            signedOn: ik.format(kk.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Dk,
          total: Dk.length,
          rankTotal: Dk.filter((kk => null !== kk.rank)).length
        }
      }
    }
    const yf = "skyblockHudView",
      Yf = () => {},
      Lf = {
        getItem: () => null,
        setItem: Yf,
        removeItem: Yf
      };
    class Cf {
      constructor(kk) {
        let {
          translate: ek,
          translateWithIcons: ik,
          setMenuOpen: Dk = Yf,
          dismissMenu: fk = () => {
            Dk(!1)
          },
          publishSkills: Sk = Yf,
          publishQuests: bk = Yf,
          publishQuestNotification: rk = Yf,
          publishDungeons: Pk = Yf,
          publishCollections: mk = Yf,
          publishMap: Mk = Yf,
          publishHud: Kk = Yf,
          publishPortalTransit: xk = Yf,
          publishDailyReward: Uk = Yf,
          publishMailbox: Hk = Yf,
          publishQuestGraph: wk = Yf,
          publishForge: lk = Yf,
          publishSmuggler: pk = Yf,
          publishKeepersChair: yk = Yf,
          publishReachLog: Yk = Yf,
          publishLampLight: Lk = Yf,
          publishMagmaward: Ck = Yf,
          publishGlowtide: jk = Yf,
          publishGlowMeter: sk = Yf,
          publishHushWait: dk = Yf,
          publishPassage: Vk = Yf,
          publishTideCharts: Fk = Yf,
          publishRegulars: uk = Yf,
          publishHiddenWaters: qk = Yf,
          publishDialogue: Ik = Yf,
          publishAutographs: zk = Yf,
          isLoadingScreenUp: Qk = () => !1,
          onDailyRewardCoinLanded: vk = Yf,
          onDailyRewardStarted: Ek = Yf,
          onDailyRewardFinished: hk = Yf,
          onDailyRewardItemLanded: ak = Yf,
          onMailboxStarted: Wk = Yf,
          journeyStorage: tk = Lf,
          requestTracking: Xk = Yf,
          requestTravel: Bk = Yf,
          requestDungeonEnter: ck = Yf,
          requestQuestJump: Tk = Yf,
          requestQuestArrive: Zk = Yf,
          requestForge: Ok = Yf,
          requestSmuggle: gk = Yf,
          requestKeepersChairAim: Gk = Yf,
          requestReachLogOpen: Nk = Yf,
          requestLampLight: Rk = Yf,
          requestDialogue: Jk = Yf
        } = kk;
        this.navigation = void 0, this.map = void 0, this.compass = new Ak, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new FD.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = kk => kk, this.close = () => {
          for (const kk of this.panels) kk.close()
        }, this.setMenuOpen = Dk, this.publishHud = Kk, this.portalTransit = new Bi(xk, tk), this.magmaward = new XD(Ck), this.glowtide = new cD(jk), this.glowMeter = new oD(sk), this.hushWait = new OD(dk), this.dailyReward = new oi(Uk, (() => Qk() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (kk => {
          this.quests.setNotificationsHeld(kk)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), vk, Ek, hk, ak);
        const ke = kk => {
          this.panels.some((kk => kk.isOpen())) || (kk ? fk() : this.setMenuOpen(!1))
        };
        this.skills = new ri(Sk, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), ek, void 0, void 0, ke), this.quests = new xi(bk, Xk, ek, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, ke, rk), this.dungeons = new Hi(Pk, ek, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, ke, ck), this.collections = new Wi(mk, ek, (() => {
          this.beforePanelOpen(this.collections)
        }), ke), this.map = new nk(Mk, Bk, ek, (() => {
          this.beforePanelOpen(this.map)
        }), ke), this.questGraph = new eD(wk, ek, (() => {
          this.beforePanelOpen(this.questGraph)
        }), ke, Tk, Zk, tk), this.forge = new yD(lk, ek, (() => {
          this.beforePanelOpen(this.forge)
        }), ke, Ok), this.smuggler = new CD(pk, ek, (() => {
          this.beforePanelOpen(this.smuggler)
        }), ke, gk), this.lampLight = new WD(Lk, ek, Rk, this.commandPacer), this.keepersChair = new qD(yk, ek, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (kk => {
          this.lampLight.onChairClosed(), ke(kk)
        }), Gk, Date.now, this.commandPacer), this.reachLog = new hD(Yk, ek, (() => {
          this.beforePanelOpen(this.reachLog)
        }), ke, Nk, this.commandPacer), this.passage = new VD(Vk, ek, (() => {
          this.beforePanelOpen(this.passage)
        }), ke), this.tideCharts = new Df(Fk, ek, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), ke), this.regulars = new Pf(uk, ek, (() => {
          this.beforePanelOpen(this.regulars)
        }), (kk => {
          this.regulars.takeReturnToReachLog() && !kk && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), ke(kk)
        })), this.hiddenWaters = new Mf(qk), this.dialogue = new xf(Ik, ek, (() => {
          this.beforePanelOpen(this.dialogue)
        }), ke, Jk), this.autographs = new pf(zk, (() => {
          this.beforePanelOpen(this.autographs)
        }), ke), this.mailbox = new Gi(Hk, (() => Qk() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Wk), this.quests.translateWithIcons = null !== ik && void 0 !== ik ? ik : null, this.skills.onLevelUp = kk => {
          this.quests.notify(kk)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Si(this.map, this.quests, this.compass, ek)
      }
      getHudSnapshot() {
        const kk = this.hudSnapshot,
          ek = this.dailyReward.getHeldCoins();
        return null === kk || ek <= 0 || !("hudPurseCoins" in kk) ? kk : {
          ...kk,
          hudPurseCoins: Math.max(0, kk.hudPurseCoins - ek)
        }
      }
      receiveHud(kk) {
        this.hudSnapshot = kk, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(kk) {
        this.setMenuOpen(!0);
        const ek = kk === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = kk;
        for (const ik of this.panels) ik === kk || ek && ik === this.reachLog || ik.close();
        this.openingPanel = null
      }
      setTranslator(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ek => this.resolveItemName(ek, kk);
        this.quests.translateWithIcons = null !== ik && void 0 !== ik ? ik : null, this.navigation.setTranslator(kk, ek), this.lampLight.setTranslator(kk, ek), this.mailbox.setItemName(Dk);
        for (const fk of this.panels) fk.setTranslator(kk, ek, Dk)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const kk of this.panels) kk.dispose()
      }
    }
    var Af = ik(1021),
      jf = ik.n(Af),
      sf = ik(22),
      df = ik(36140),
      Vf = ik(3374),
      Ff = ik(1877),
      uf = ik(1858),
      qf = ik(33788),
      If = ik(1172),
      zf = ik(1406),
      Qf = ik(1066);

    function vf(kk) {
      let {
        controller: ek,
        minimap: ik,
        children: Dk
      } = kk;
      const Sk = (0, zf.e)(yf, ek.getHudSnapshot()),
        [bk, rk] = (0, sk.useState)(ek.skills.getSnapshot().overallLevel);
      (0, zf.c)(bi, (kk => {
        rk(kk.overallLevel)
      }));
      const Pk = (0, sk.useRef)(null);
      (0, zf.c)(Ti, (kk => {
        ! function(kk, ek) {
          if (null === kk || "function" !== typeof kk.animate) return;
          const ik = ek ? 1.35 : 1.15;
          kk.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ik})`
          }, {
            transform: "scale(1)"
          }], {
            duration: ek ? 320 : 160,
            easing: "ease-out"
          }), kk.classList.toggle("Receiving", !ek), ek && (kk.classList.remove("Shine"), kk.offsetWidth, kk.classList.add("Shine"))
        }(Pk.current, kk)
      }));
      const {
        t: mk
      } = (0, If.D)(), {
        isTouchScreen: Mk
      } = (0, sf.n)(["isTouchScreen"]), [Kk, xk] = (0, sk.useState)(null);
      return (0, Vf.h)(Kk, ".SkyblockRightHud"), null !== Sk || ik ? (0, Qf.jsx)(df.h, {
        placement: "topRight",
        children: (0, Qf.jsxs)("div", {
          className: jf()("SkyblockRightHud", {
            TouchScreen: Mk
          }),
          children: [ik, null !== Sk && (0, Qf.jsxs)("div", {
            ref: xk,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Sk ? (0, Qf.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Sk.hudHelpText
            }) : (0, Qf.jsxs)(Qf.Fragment, {
              children: [(0, Qf.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Qf.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Qf.jsx)("strong", {
                    style: {
                      color: fk.D.cyanUiText
                    },
                    children: mk(Sk.hudZoneNameKey)
                  }), null !== bk && (0, Qf.jsx)("span", {
                    style: {
                      color: fk.D.goldUiText
                    },
                    children: mk("skyblockGame:level", {
                      level: (0, qf.e)(bk)
                    })
                  })]
                }), (0, Qf.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Pk,
                  children: [(0, Qf.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, qf.e)(Sk.hudPurseCoins)]
                })]
              }), Sk.hudClockText.length > 0 && (0, Qf.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Qf.jsx)(uf.e, {
                  text: Sk.hudClockText
                })
              })]
            }), Dk, "hudZoneNameKey" in Sk && (0, Qf.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Ef(kk) {
      let {
        icon: ek
      } = kk;
      const ik = (0, sk.useCallback)((kk => {
        null === kk || void 0 === kk || kk.replaceChildren(Ze(ek))
      }), [ek]);
      return (0, Qf.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ik
      })
    }

    function hf(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)();
      return (0, Qf.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: ek.display.mountPlayer,
        title: ik("skyblockGame:mapYouAreHere"),
        children: (0, Qf.jsx)(Ef, {
          icon: "player"
        })
      })
    }
    const af = ik(38128),
      Wf = Object.fromEntries(af.keys().map((kk => [kk.replace(/^\.\/(.*)\.png$/, "$1"), af(kk)])));

    function tf(kk, ek) {
      var ik;
      return null !== (ik = Wf[kk]) && void 0 !== ik ? ik : Wf[ek]
    }

    function Xf(kk) {
      let {
        imageKey: ek,
        fallbackImageKey: ik,
        geometryKey: Dk,
        alt: fk,
        className: Sk
      } = kk;
      const [bk, rk] = (0, sk.useState)((() => function(kk, ek) {
        return [{
          id: 0,
          imageKey: kk,
          geometryKey: ek,
          phase: "shown"
        }]
      }(ek, Dk))), Pk = function(kk, ek, ik) {
        const Dk = kk[kk.length - 1];
        if (Dk.imageKey === ek && Dk.geometryKey === ik) return kk;
        const fk = {
          id: Dk.id + 1,
          imageKey: ek,
          geometryKey: ik,
          phase: "entering"
        };
        return Dk.geometryKey === ik ? [{
          ...Dk,
          phase: "leaving"
        }, fk] : [fk]
      }(bk, ek, Dk);
      return Pk !== bk && rk(Pk), (0, Qf.jsx)(Qf.Fragment, {
        children: Pk.map((kk => (0, Qf.jsx)("img", {
          className: jf()("SkyblockMapTerrainImage", Sk, {
            Entering: "entering" === kk.phase,
            Leaving: "leaving" === kk.phase
          }),
          src: tf(kk.imageKey, ik),
          alt: "leaving" === kk.phase ? "" : fk,
          onAnimationEnd: () => {
            rk((ek => function(kk, ek) {
              return kk.flatMap((kk => kk.id !== ek ? [kk] : "leaving" === kk.phase ? [] : [{
                ...kk,
                phase: "shown"
              }]))
            }(ek, kk.id)))
          }
        }, kk.id)))
      })
    }
    var Bf = ik(4471),
      Tf = ik(1410);

    function of(kk) {
      if ("Tab" !== kk.key) return;
      const ek = Array.from(kk.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ik = ek.indexOf(document.activeElement);
      var Dk;
      if (kk.shiftKey && ik <= 0) kk.preventDefault(), null === (Dk = ek.at(-1)) || void 0 === Dk || Dk.focus();
      else if (!kk.shiftKey && (-1 === ik || ik === ek.length - 1)) {
        var fk;
        kk.preventDefault(), null === (fk = ek[0]) || void 0 === fk || fk.focus()
      }
    }

    function Zf() {
      const kk = (0, sk.useRef)(null);
      return (0, sk.useCallback)((ek => {
        var ik;
        ek ? (kk.current = document.activeElement, ek.focus()) : null === (ik = kk.current) || void 0 === ik || ik.focus()
      }), [])
    }

    function Of(kk) {
      let {
        percent: ek,
        label: ik,
        levelUpToken: Dk,
        colour: fk
      } = kk;
      return (0, Qf.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ik,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ek,
        "aria-valuetext": ik,
        children: [(0, Qf.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${ek/100})`
          }
        }), null !== Dk && void 0 !== Dk && (0, Qf.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": fk
          }
        }, Dk)]
      })
    }

    function gf(kk) {
      let {
        mount: ek
      } = kk;
      return (0, Qf.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: ek,
        hidden: !0,
        children: (0, Qf.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Qf.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Qf.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Gf(kk, ek, ik, Dk) {
      (0, sk.useLayoutEffect)((() => {
        const fk = kk.current;
        if (!ik || null === ek || void 0 === ek || !ek.local || !fk) return;
        const Sk = Array.from(fk.querySelectorAll(".SkyblockMapNode")),
          bk = [...ek.points, ...ek.portals],
          rk = () => {
            const kk = fk.clientWidth,
              ik = fk.clientHeight,
              rk = Sk.map(((fk, Sk) => {
                const rk = bk[Sk];
                return {
                  id: rk.id,
                  portal: Sk >= ek.points.length,
                  x: rk.position[0] * kk / 100,
                  y: rk.position[1] * ik / 100,
                  width: fk.offsetWidth / Dk,
                  height: fk.offsetHeight / Dk
                }
              })),
              Pk = new Map(bk.map(((kk, ek) => [kk.id, Sk[ek]])));
            for (const ek of function(kk, ek, ik) {
                const Dk = [],
                  fk = [...kk].sort(((kk, ek) => Number(ek.portal) - Number(kk.portal) || kk.id.localeCompare(ek.id)));
                for (const Sk of fk) {
                  const kk = kk => Math.max(Sk.width / 2, Math.min(ek - Sk.width / 2, kk)),
                    fk = kk => Math.max(Sk.height / 2, Math.min(ik - Sk.height / 2, kk)),
                    bk = [kk(Sk.x)],
                    rk = [fk(Sk.y)];
                  for (const ek of Dk) bk.push(kk(ek.x - (ek.width + Sk.width) / 2 - 4), kk(ek.x + (ek.width + Sk.width) / 2 + 4)), rk.push(fk(ek.y - (ek.height + Sk.height) / 2 - 4), fk(ek.y + (ek.height + Sk.height) / 2 + 4));
                  let Pk = {
                      ...Sk,
                      x: bk[0],
                      y: rk[0]
                    },
                    mk = 1 / 0,
                    Mk = 1 / 0;
                  for (const ek of new Set(bk))
                    for (const kk of new Set(rk)) {
                      let ik = 0;
                      for (const bk of Dk) ik += Math.max(0, (Sk.width + bk.width) / 2 + 4 - Math.abs(ek - bk.x)) * Math.max(0, (Sk.height + bk.height) / 2 + 4 - Math.abs(kk - bk.y));
                      const fk = (ek - Sk.x) ** 2 + (kk - Sk.y) ** 2;
                      (ik < mk || ik === mk && fk < Mk) && (Pk = {
                        ...Sk,
                        x: ek,
                        y: kk
                      }, mk = ik, Mk = fk)
                    }
                  Dk.push(Pk)
                }
                return Dk
              }(rk, kk, ik)) {
              const kk = Pk.get(ek.id);
              kk.style.left = `${ek.x}px`, kk.style.top = `${ek.y}px`
            }
          };
        rk();
        const Pk = new ResizeObserver(rk);
        Pk.observe(fk);
        for (const kk of Sk) Pk.observe(kk);
        return () => {
          Pk.disconnect()
        }
      }), [kk, ek, ik, Dk])
    }
    const Nf = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Rf = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Jf(kk, ek, ik) {
      return Math.min(ik, Math.max(ek, kk))
    }

    function kS(kk, ek, ik) {
      const Dk = Math.min(1, ik * ek / kk),
        fk = Math.min(1, kk / (ik * ek));
      return {
        x0: (1 - Dk) / 2,
        y0: (1 - fk) / 2,
        x1: (1 + Dk) / 2,
        y1: (1 + fk) / 2
      }
    }

    function eS(kk, ek, ik, Dk) {
      const fk = ek * (Dk - ik);
      if (fk <= 1) return .5 - ek * (ik + Dk) / 2;
      const Sk = .45 * Math.min(1, fk - 1);
      return Jf(kk, 1 - ek * Dk - Sk, Sk - ek * ik)
    }

    function iS(kk, ek) {
      const ik = Jf(kk.zoom, 1, 12);
      return {
        zoom: ik,
        x: eS(kk.x, ik, ek.x0, ek.x1),
        y: eS(kk.y, ik, ek.y0, ek.y1)
      }
    }

    function DS(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Rf;
      const Sk = Jf(kk.zoom * ek, 1, 12),
        bk = Sk / kk.zoom;
      return iS({
        zoom: Sk,
        x: ik - (ik - kk.x) * bk,
        y: Dk - (Dk - kk.y) * bk
      }, fk)
    }

    function fS(kk, ek, ik, Dk) {
      const [fk, Sk] = (0, sk.useState)(Nf);
      (0, sk.useEffect)((() => {
        Sk(Nf)
      }), [ik]), (0, sk.useEffect)((() => {
        const ik = kk.current;
        if (!ek || !ik) return;
        const fk = () => kS(ik.clientWidth, ik.clientHeight, Dk),
          bk = kk => {
            const ek = ik.getBoundingClientRect();
            return {
              x: (kk.clientX - ek.left) / ek.width,
              y: (kk.clientY - ek.top) / ek.height
            }
          },
          rk = new Map;
        let Pk = {
            x: 0,
            y: 0
          },
          mk = !1,
          Mk = 0;
        const Kk = kk => {
            kk.preventDefault();
            const ek = kk.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * kk.deltaY : kk.deltaY,
              ik = bk(kk);
            Sk((kk => DS(kk, Math.exp(.0015 * -ek), ik.x, ik.y, fk())))
          },
          xk = kk => {
            "mouse" === kk.pointerType && 0 !== kk.button || (rk.set(kk.pointerId, bk(kk)), 1 === rk.size && (Pk = {
              x: kk.clientX,
              y: kk.clientY
            }, mk = !1), Mk = 0)
          },
          nk = kk => {
            const ek = rk.get(kk.pointerId);
            if (!ek) return;
            const Dk = bk(kk);
            if (rk.set(kk.pointerId, Dk), 2 === rk.size) {
              const [kk, ek] = [...rk.values()], ik = Math.hypot(kk.x - ek.x, kk.y - ek.y);
              if (Mk > 0) {
                const Dk = ik / Mk;
                Sk((ik => DS(ik, Dk, (kk.x + ek.x) / 2, (kk.y + ek.y) / 2, fk())))
              }
              return Mk = ik, void(mk = !0)
            }!mk && Math.hypot(kk.clientX - Pk.x, kk.clientY - Pk.y) < 4 || (mk || (mk = !0, ik.setPointerCapture(kk.pointerId)), Sk((kk => function(kk, ek, ik) {
              let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rf;
              return iS({
                zoom: kk.zoom,
                x: kk.x + ek,
                y: kk.y + ik
              }, Dk)
            }(kk, Dk.x - ek.x, Dk.y - ek.y, fk()))))
          },
          Uk = kk => {
            rk.delete(kk.pointerId), Mk = 0
          },
          Hk = kk => {
            mk && (kk.stopPropagation(), kk.preventDefault(), mk = !1)
          },
          wk = new ResizeObserver((() => {
            Sk((kk => iS(kk, fk())))
          }));
        return wk.observe(ik), ik.addEventListener("wheel", Kk, {
          passive: !1
        }), ik.addEventListener("pointerdown", xk), ik.addEventListener("pointermove", nk), ik.addEventListener("pointerup", Uk), ik.addEventListener("pointercancel", Uk), ik.addEventListener("click", Hk, !0), () => {
          wk.disconnect(), ik.removeEventListener("wheel", Kk), ik.removeEventListener("pointerdown", xk), ik.removeEventListener("pointermove", nk), ik.removeEventListener("pointerup", Uk), ik.removeEventListener("pointercancel", Uk), ik.removeEventListener("click", Hk, !0)
        }
      }), [kk, ek, ik, Dk]);
      return {
        view: fk,
        zoomBy: ek => {
          const ik = kk.current;
          ik && Sk((kk => DS(kk, ek, .5, .5, kS(ik.clientWidth, ik.clientHeight, Dk))))
        }
      }
    }

    function SS(kk) {
      var ek, ik, Dk, fk;
      let {
        controller: Sk,
        navigation: bk
      } = kk;
      const rk = (0, zf.e)(xk, Sk.getSnapshot()),
        {
          t: Pk
        } = (0, If.D)(),
        mk = Zf(),
        Mk = rk.presentation,
        Kk = (0, sk.useRef)(null),
        nk = (0, sk.useRef)(null),
        Uk = Boolean(rk.open && (null === Mk || void 0 === Mk ? void 0 : Mk.local) && Mk.background),
        Hk = fS(Kk, Uk, `${rk.open}|${rk.tab}|${null===Mk||void 0===Mk||null===(ek=Mk.background)||void 0===ek?void 0:ek.geometryKey}`, null !== (ik = null === Mk || void 0 === Mk || null === (Dk = Mk.background) || void 0 === Dk ? void 0 : Dk.ratio) && void 0 !== ik ? ik : 2);
      if (Gf(nk, Mk, rk.open, Hk.view.zoom), !Mk || !rk.open) return null;
      const wk = Mk.local ? Mk.background : null,
        lk = {
          "--map-ratio": String(null !== (fk = null === wk || void 0 === wk ? void 0 : wk.ratio) && void 0 !== fk ? fk : 2),
          backgroundColor: null === wk || void 0 === wk ? void 0 : wk.colour
        },
        pk = {
          "--map-zoom": String(Hk.view.zoom),
          transform: `translate(${100*Hk.view.x}%, ${100*Hk.view.y}%) scale(${Hk.view.zoom})`
        };
      return (0, Qf.jsx)(Bf.e, {
        show: rk.open,
        close: Sk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: mk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Pk("skyblockGame:map")
              }), Mk.minimap && (0, Qf.jsx)("p", {
                children: Mk.minimap.caption
              })]
            }), (0, Qf.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((kk => (0, Qf.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": kk === rk.tab ? "true" : void 0,
                className: jf()({
                  Selected: kk === rk.tab
                }),
                "aria-pressed": kk === rk.tab,
                onClick: () => {
                  Sk.selectTab(kk)
                },
                children: Pk("local" === kk ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, kk)))
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: Sk.dismiss
            })]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Qf.jsxs)("div", {
              ref: Kk,
              className: jf()("SkyblockMapCanvas", {
                Local: Mk.local,
                Overview: !Mk.local,
                Zoomed: Hk.view.zoom > 1
              }),
              style: lk,
              children: [(0, Qf.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Uk ? pk : void 0,
                children: (0, Qf.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: nk,
                  children: [wk && (0, Qf.jsx)(Xf, {
                    className: "SkyblockMapTerrain",
                    imageKey: wk.imageKey,
                    fallbackImageKey: wk.fallbackImageKey,
                    geometryKey: wk.geometryKey,
                    alt: wk.label
                  }), Mk.local && (0, Qf.jsx)(gf, {
                    mount: bk.display.mountMapSearchArea
                  }), !Mk.local && (0, Qf.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Mk.connections.map((kk => (0, Qf.jsx)("line", {
                      className: jf()({
                        Explored: kk.explored
                      }),
                      x1: kk.start[0],
                      y1: kk.start[1],
                      x2: kk.end[0],
                      y2: kk.end[1]
                    }, kk.id)))
                  }), Mk.points.map((kk => {
                    const ek = !Mk.local && kk.thumbnail ? Wf[kk.thumbnail] : void 0;
                    return (0, Qf.jsxs)("div", {
                      className: jf()("SkyblockMapNode", {
                        Current: kk.current
                      }),
                      style: {
                        left: `${kk.position[0]}%`,
                        top: `${kk.position[1]}%`
                      },
                      children: [(0, Qf.jsxs)(Tf.f, {
                        className: jf()("SkyblockMapPin", {
                          Unknown: !kk.visited,
                          Current: kk.current
                        }),
                        disabled: rk.pending,
                        onClick: () => {
                          Sk.travel(kk.travelKind, kk.travelId)
                        },
                        children: [ek && (0, Qf.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: ek,
                          alt: ""
                        }), !ek && (0, Qf.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Qf.jsx)(Ef, {
                            icon: kk.icon
                          })
                        }), (0, Qf.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: kk.name
                        })]
                      }), kk.current && (0, Qf.jsx)("span", {
                        className: jf()("SkyblockMapHereBadge", {
                          Above: kk.position[1] > 50
                        }),
                        children: Pk("skyblockGame:mapYouAreHere")
                      })]
                    }, kk.id)
                  })), Mk.portals.map((kk => (0, Qf.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${kk.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${kk.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Qf.jsxs)(Tf.f, {
                      className: "SkyblockMapPin",
                      disabled: rk.pending,
                      onClick: () => {
                        Sk.travel(kk.travelKind, kk.travelId)
                      },
                      children: [(0, Qf.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: kk.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Qf.jsx)(Ef, {
                          icon: kk.icon
                        })
                      }), (0, Qf.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: kk.name
                      })]
                    })
                  }, kk.id))), Mk.local && (0, Qf.jsx)(hf, {
                    controller: bk
                  })]
                })
              }), Uk && (0, Qf.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Qf.jsx)("button", {
                  type: "button",
                  "aria-label": Pk("skyblockGame:mapZoomIn"),
                  disabled: Hk.view.zoom >= 12,
                  onClick: () => {
                    Hk.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Qf.jsx)("button", {
                  type: "button",
                  "aria-label": Pk("skyblockGame:mapZoomOut"),
                  disabled: Hk.view.zoom <= 1,
                  onClick: () => {
                    Hk.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Qf.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: rk.feedback
              })]
            })
          }), (0, Qf.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Mk.progress && (0, Qf.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Qf.jsx)("span", {
                children: Mk.progress
              }), (0, Qf.jsx)(Of, {
                percent: Mk.percent,
                label: Mk.progress
              })]
            }), Mk.noLandmarks && (0, Qf.jsx)("span", {
              children: Pk("skyblockGame:mapNoLandmarks")
            }), Mk.canTravel && (0, Qf.jsx)("span", {
              className: "SkyblockMapHint",
              children: Pk("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function bS(kk) {
      let {
        view: ek,
        controller: ik,
        navigation: Dk
      } = kk;
      const {
        t: fk
      } = (0, If.D)(), {
        isTouchScreen: Sk
      } = (0, sf.n)(["isTouchScreen"]);
      return (0, Qf.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": fk("skyblockGame:mapLocal"),
        children: [Sk && (0, Qf.jsx)(Tf.f, {
          className: "SkyblockMinimapOpen",
          onClick: ik.showLocal,
          children: fk("skyblockGame:map")
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: ek.colour
          },
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Dk.display.mountTerrain,
            style: {
              width: ek.width,
              height: ek.height
            },
            children: [(0, Qf.jsx)(Xf, {
              imageKey: ek.imageKey,
              fallbackImageKey: ek.fallbackImageKey,
              geometryKey: ek.geometryKey,
              alt: ek.label
            }), (0, Qf.jsx)(gf, {
              mount: Dk.display.mountMinimapSearchArea
            }), ek.markers.map((kk => (0, Qf.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${kk.position[0]}%`,
                top: `${kk.position[1]}%`,
                color: kk.colour
              },
              title: kk.name,
              children: (0, Qf.jsx)(Ef, {
                icon: kk.icon
              })
            }, kk.id)))]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: fk("skyblockGame:mapYouAreHere"),
            children: (0, Qf.jsx)(Ef, {
              icon: "player"
            })
          })]
        }), (0, Qf.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: ek.caption
        })]
      })
    }

    function rS(kk) {
      let {
        controller: ek
      } = kk;
      return (0, Qf.jsxs)("div", {
        className: "SkyblockCompass",
        ref: ek.display.mountCompass,
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Qf.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Qf.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function PS(kk) {
      let {
        controller: ek,
        surface: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)(), fk = (0, zf.e)(bi, ek.getSnapshot()), Sk = Zf();
      return fk.enabled ? (0, Qf.jsxs)(Qf.Fragment, {
        children: ["hud" === ik && (0, Qf.jsx)(df.h, {
          placement: "statBars",
          children: fk.hud && (0, Qf.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": fk.hud.colour
            },
            children: [(0, Qf.jsx)(Of, {
              percent: fk.hud.skill.percent,
              label: fk.hud.skill.xp,
              levelUpToken: fk.hud.levelUpToken,
              colour: fk.hud.colour
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Qf.jsxs)("span", {
                children: [fk.hud.skill.label, " \xb7 ", fk.hud.skill.level]
              }), (0, Qf.jsx)("span", {
                children: fk.hud.gain
              })]
            })]
          })
        }), "hud" === ik && (0, Qf.jsx)(df.h, {
          children: fk.hud && (0, Qf.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Qf.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Qf.jsx)("strong", {
                children: fk.hud.skill.label
              }), (0, Qf.jsx)("span", {
                children: fk.hud.gain
              })]
            }), (0, Qf.jsx)(Of, {
              percent: fk.hud.skill.percent,
              label: fk.hud.skill.xp,
              levelUpToken: fk.hud.levelUpToken,
              colour: fk.hud.colour
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Qf.jsx)("span", {
                children: fk.hud.skill.level
              }), (0, Qf.jsx)("span", {
                children: fk.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ik && (0, Qf.jsx)(Bf.e, {
          show: fk.open,
          close: ek.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Qf.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Sk,
            onKeyDown: of,
            children: [(0, Qf.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Qf.jsxs)("div", {
                children: [(0, Qf.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Dk("skyblockGame:skills")
                }), (0, Qf.jsx)("p", {
                  children: Dk("skyblockGame:skillsIntro")
                })]
              }), (0, Qf.jsx)(Tf.n, {
                padIgnore: !0,
                onClick: ek.dismiss
              })]
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Qf.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: fk.skills.map((kk => (0, Qf.jsxs)(Tf.f, {
                  className: jf()("SkyblockSkillCard", {
                    Selected: kk.selected
                  }),
                  ariaPressed: kk.selected,
                  onClick: () => {
                    ek.select(kk.id)
                  },
                  children: [(0, Qf.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: kk.icon,
                      amount: 0
                    })
                  }), (0, Qf.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Qf.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Qf.jsx)("strong", {
                        children: kk.label
                      }), (0, Qf.jsx)("span", {
                        children: kk.level
                      })]
                    }), (0, Qf.jsx)(Of, {
                      percent: kk.percent,
                      label: `${kk.label}: ${kk.xp}`
                    }), (0, Qf.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: kk.xp
                    })]
                  })]
                }, kk.id)))
              }), fk.detail && (0, Qf.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Qf.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Qf.jsx)(Ff.c, {
                    itemName: fk.detail.icon,
                    amount: 0
                  })
                }), (0, Qf.jsx)("h3", {
                  children: fk.detail.label
                }), (0, Qf.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: fk.detail.level
                }), (0, Qf.jsx)("p", {
                  children: fk.detail.description
                }), (0, Qf.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Qf.jsx)("strong", {
                    children: Dk("skyblockGame:currentBenefit")
                  }), (0, Qf.jsx)("span", {
                    children: fk.detail.benefit
                  })]
                }), (0, Qf.jsx)(Of, {
                  percent: fk.detail.percent,
                  label: fk.detail.xp
                }), (0, Qf.jsx)("p", {
                  children: fk.detail.xp
                }), (0, Qf.jsx)("h4", {
                  children: Dk("skyblockGame:earnXp")
                }), (0, Qf.jsx)("ul", {
                  children: fk.detail.sources.map((kk => (0, Qf.jsx)("li", {
                    children: kk
                  }, kk)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var mS = ik(1345),
      MS = ik(4769),
      KS = ik(302);

    function xS(kk) {
      let {
        item: ek
      } = kk;
      return (0, Qf.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Qf.jsx)(Ff.c, {
          itemName: ek,
          amount: 0
        })
      })
    }

    function nS(kk) {
      let {
        name: ek,
        percent: ik,
        progress: Dk
      } = kk;
      return (0, Qf.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Qf.jsx)(Of, {
          percent: ik,
          label: `${(0,KS.qb)(ek)}: ${Dk}`
        }), (0, Qf.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Dk
        })]
      })
    }

    function US(kk) {
      let {
        subquests: ek,
        showDescriptions: ik = !1
      } = kk;
      return (0, Qf.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: ek.map((kk => {
          const ek = ik && "completed" === kk.status,
            Dk = (0, Qf.jsxs)("li", {
              className: jf()("SkyblockQuestStep", kk.status, {
                JustFinished: kk.justFinished,
                JustUnlocked: kk.justUnlocked
              }),
              tabIndex: ek ? 0 : void 0,
              children: [null !== kk.iconItem && (0, Qf.jsx)(xS, {
                item: kk.iconItem
              }), null === kk.iconItem && (0, Qf.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === kk.status ? "\u2713" : "skipped" === kk.status ? "\u2212" : "\u25cb"
              }), (0, Qf.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Qf.jsx)("strong", {
                  children: (0, Qf.jsx)(MS.e, {
                    text: kk.name
                  })
                }), ik && !ek && (0, Qf.jsx)("span", {
                  children: (0, Qf.jsx)(MS.e, {
                    text: kk.description
                  })
                }), null !== kk.barPercent && (0, Qf.jsx)(nS, {
                  name: kk.name,
                  percent: kk.barPercent,
                  progress: kk.progress
                }), null === kk.barPercent && !ek && (0, Qf.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: kk.statusLabel
                })]
              })]
            }, kk.id);
          return ek ? (0, Qf.jsx)(mS.i, {
            delayShow: 200,
            tooltipInner: (0, Qf.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Qf.jsx)("span", {
                children: (0, Qf.jsx)(MS.e, {
                  text: kk.description
                })
              }), (0, Qf.jsx)("strong", {
                children: kk.statusLabel
              })]
            }),
            children: Dk
          }, kk.id) : Dk
        }))
      })
    }

    function HS(kk) {
      let {
        quest: ek,
        select: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)(), fk = ek.focusStep;
      return (0, Qf.jsxs)(Tf.f, {
        className: jf()("SkyblockQuestCard", {
          Selected: ek.selected,
          Tracked: ek.tracked
        }),
        onClick: () => {
          ik(ek.id)
        },
        children: [(0, Qf.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Qf.jsx)("strong", {
            children: (0, Qf.jsx)(MS.e, {
              text: ek.name
            })
          }), ek.tracked && (0, Qf.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Dk("skyblockGame:currentQuest")
          })]
        }), fk && (0, Qf.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== fk.iconItem && (0, Qf.jsx)(xS, {
            item: fk.iconItem
          }), (0, Qf.jsx)(nS, {
            name: fk.name,
            percent: fk.barPercent,
            progress: fk.progress
          })]
        }), (0, Qf.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: ek.progress
        })]
      })
    }

    function wS(kk) {
      let {
        controller: ek,
        surface: ik
      } = kk;
      const Dk = (0, zf.e)(Mi, ek.getSnapshot()),
        {
          t: fk
        } = (0, If.D)(),
        Sk = Zf();
      return Dk.enabled ? (0, Qf.jsxs)(Qf.Fragment, {
        children: ["hud" === ik && (0, Qf.jsx)(Qf.Fragment, {
          children: Dk.tracked && (0, Qf.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: mi,
            children: (0, Qf.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Dk.trackedStepPulse > 0 && (0, Qf.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Dk.trackedStepPulse), (0, Qf.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: fk("skyblockGame:currentQuest")
              }), (0, Qf.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Qf.jsx)("strong", {
                  children: (0, Qf.jsx)(MS.e, {
                    text: Dk.tracked.name
                  })
                }), null !== Dk.tracked.clock && (0, Qf.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Dk.tracked.clock
                })]
              }), (0, Qf.jsx)(US, {
                subquests: Dk.tracked.subquests
              })]
            })
          })
        }), "menu" === ik && (0, Qf.jsx)(Bf.e, {
          show: Dk.open,
          close: ek.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Qf.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Sk,
            onKeyDown: of,
            children: [(0, Qf.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Qf.jsx)("div", {
                children: (0, Qf.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: fk("skyblockGame:quests")
                })
              }), (0, Qf.jsx)(Tf.n, {
                padIgnore: !0,
                onClick: ek.dismiss
              })]
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Qf.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Qf.jsx)("h3", {
                  children: fk("skyblockGame:current")
                }), 0 === Dk.active.length && (0, Qf.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: fk("skyblockGame:noActiveQuests")
                }), Dk.active.map((kk => (0, Qf.jsx)(HS, {
                  quest: kk,
                  select: ek.select
                }, kk.id))), (0, Qf.jsx)("h3", {
                  children: (0, Qf.jsxs)("button", {
                    type: "button",
                    className: jf()("SkyblockQuestSectionToggle", {
                      Expanded: Dk.completedExpanded
                    }),
                    "aria-expanded": Dk.completedExpanded,
                    onClick: ek.toggleCompleted,
                    children: [(0, Qf.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), fk("skyblockGame:completed"), (0, Qf.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Dk.completed.length
                    })]
                  })
                }), Dk.completedExpanded && 0 === Dk.completed.length && (0, Qf.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: fk("skyblockGame:noCompletedQuests")
                }), Dk.completedExpanded && Dk.completed.map((kk => (0, Qf.jsx)(HS, {
                  quest: kk,
                  select: ek.select
                }, kk.id)))]
              }), Dk.detail && (0, Qf.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Dk.detail.completed && (0, Qf.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: fk("skyblockGame:completedQuest")
                }), (0, Qf.jsx)("h3", {
                  children: (0, Qf.jsx)(MS.e, {
                    text: Dk.detail.name
                  })
                }), (0, Qf.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Qf.jsx)(MS.e, {
                    text: Dk.detail.description
                  })
                }), (0, Qf.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Dk.detail.progress, null !== Dk.detail.clock && (0, Qf.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Dk.detail.clock
                  })]
                }), (0, Qf.jsx)(US, {
                  subquests: Dk.detail.subquests,
                  showDescriptions: !0
                }), Dk.detail.tracked && (0, Qf.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Dk.detail.trackLabel
                }), !Dk.detail.completed && !Dk.detail.tracked && (0, Qf.jsx)(Tf.r, {
                  onClick: ek.trackSelected,
                  disabled: !Dk.detail.canTrack,
                  children: Dk.detail.trackLabel
                }), Dk.detail.canViewDialogue && (0, Qf.jsx)(Tf.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: ek.viewDialogue,
                  children: fk("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var lS = ik(1033),
      pS = ik(2567);

    function yS(kk, ek, ik, Dk, fk) {
      const Sk = kk => "linear" === fk ? kk : {
          Wi: fk,
          point: kk
        },
        bk = {};
      for (const [rk, Pk] of Dk)
        for (const [ek, ik] of Object.entries(kk(rk, Pk, Sk))) bk[ek] ??= {
          timeline: []
        }, bk[ek].timeline.push(ik);
      return {
        Ii: ek,
        loop: ik,
        Qi: bk
      }
    }
    const YS = .547,
      LS = .022,
      CS = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      AS = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function jS(kk, ek, ik) {
      const {
        drop: Dk = 0,
        shift: fk = 0,
        torso: Sk = 0,
        nod: bk = 0,
        tilt: rk = 0,
        legs: Pk = [0, 0],
        arms: mk = 0,
        spread: Mk = 0
      } = ek, Kk = YS * Math.cos(Sk) - LS * Math.sin(Sk), xk = YS * Math.sin(Sk) + LS * Math.cos(Sk), nk = ik([0, -Dk, fk]);
      return {
        LowerBody: {
          timeFraction: kk,
          position: nk,
          rotation: ik([0, 0, 0])
        },
        UpperBody: {
          timeFraction: kk,
          position: nk,
          rotation: ik([Sk, 0, rk])
        },
        HeadMesh: {
          timeFraction: kk,
          position: ik([0, Kk - YS - Dk, xk - LS + fk]),
          rotation: ik([Sk + bk, 0, rk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          rotation: ik([Pk[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          rotation: ik([Pk[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: ik([mk, 0, Mk])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: ik([mk, 0, -Mk])
        }
      }
    }

    function sS(kk, ek, ik) {
      return yS(jS, kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function dS(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function VS(kk, ek, ik) {
      const {
        rise: Dk = 0,
        shift: fk = 0,
        torso: Sk = 0,
        twist: bk = 0,
        tilt: rk = 0,
        nod: Pk = 0,
        cock: mk = 0,
        arms: Mk = 0,
        spread: Kk = 0
      } = ek, [xk, nk] = dS(Mk), [Uk, Hk] = dS(Kk);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: ik([0, Dk, fk]),
          rotation: ik([Sk, bk, rk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: ik([Pk, 0, mk])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: ik([xk, 0, Uk])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: ik([nk, 0, -Hk])
        }
      }
    }
    const FS = [1.0625, -1, 0];

    function uS(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function qS(kk, ek, ik) {
      const {
        drop: Dk = 0,
        shift: fk = 0,
        torso: Sk = 0,
        tilt: bk = 0,
        nod: rk = 0,
        cock: Pk = 0,
        legs: mk = [0, 0],
        arms: Mk = 0,
        spread: Kk = 0
      } = ek, [xk, nk] = uS(Mk), [Uk, Hk] = uS(Kk), wk = -Sk, lk = -bk, [pk, yk, Yk] = function(kk, ek) {
        const [ik, Dk, fk] = [-FS[0], FS[1], -FS[2]], Sk = ik * Math.cos(ek) - Dk * Math.sin(ek), bk = ik * Math.sin(ek) + Dk * Math.cos(ek);
        return [Sk - ik, -(bk * Math.cos(kk) - fk * Math.sin(kk) - Dk), bk * Math.sin(kk) + fk * Math.cos(kk) - fk]
      }(wk, lk), Lk = ik([0, -Dk, fk]);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: ik([pk, yk - Dk, Yk + fk]),
          rotation: ik([wk, 0, lk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: ik([-rk, 0, -Pk])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: ik([-xk, 0, -Uk])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: ik([-nk, 0, Hk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          position: Lk,
          rotation: ik([-mk[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          position: Lk,
          rotation: ik([-mk[1], 0, 0])
        }
      }
    }
    var IS = ik(36754),
      zS = ik(38057),
      QS = ik(38226);

    function vS(kk, ek, ik) {
      var Dk, fk;
      const Sk = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return kk + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - kk) * ik
        },
        [bk, rk] = null !== (Dk = kk.legs) && void 0 !== Dk ? Dk : [0, 0],
        [Pk, mk] = null !== (fk = ek.legs) && void 0 !== fk ? fk : [0, 0];
      return {
        drop: Sk(kk.drop, ek.drop),
        shift: Sk(kk.shift, ek.shift),
        torso: Sk(kk.torso, ek.torso),
        nod: Sk(kk.nod, ek.nod),
        tilt: Sk(kk.tilt, ek.tilt),
        legs: [Sk(bk, Pk), Sk(rk, mk)],
        arms: Sk(kk.arms, ek.arms),
        spread: Sk(kk.spread, ek.spread)
      }
    }
    const ES = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      hS = sS(4400, !0, [
        [0, ES],
        [.16, {
          ...ES,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, ES],
        [.44, {
          ...ES,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, vS(ES, CS, .7)],
        [.66, vS(ES, CS, .78)],
        [.74, vS(ES, AS, .65)],
        [.86, {
          ...ES,
          drop: .14
        }],
        [1, ES]
      ], "catmull-rom-spline"),
      aS = {
        ...ES,
        drop: .14,
        torso: .3,
        spread: .4
      },
      WS = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      tS = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      XS = {
        caveGolem: hS,
        magmaGolem: sS(3600, !0, [
          [0, aS],
          [.12, {
            ...aS,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...aS,
            tilt: -.08
          }],
          [.4, {
            ...aS,
            tilt: .06,
            drop: .11
          }],
          [.52, vS(aS, CS, .9)],
          [.62, vS(aS, AS, .8)],
          [.7, vS(aS, AS, .45)],
          [.78, vS(aS, AS, .85)],
          [.9, {
            ...aS,
            drop: .17
          }],
          [1, aS]
        ], "catmull-rom-spline"),
        frostWraith: function(kk, ek, ik) {
          return yS(VS, kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, WS],
          [.14, {
            ...WS,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...WS,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...WS,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...WS,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...WS,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...WS,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...WS,
            rise: .16,
            tilt: -.04
          }],
          [1, WS]
        ], "catmull-rom-spline"),
        tikiTerror: function(kk, ek, ik) {
          return yS(qS, kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, tS],
          [.16, {
            ...tS,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, tS],
          [.44, {
            ...tS,
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
            ...tS,
            drop: .1
          }],
          [1, tS]
        ], "catmull-rom-spline")
      },
      BS = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      cS = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      TS = Object.fromEntries(Object.entries(XS).map((kk => {
        let [ek, ik] = kk;
        return [ek, (0, QS.e)((0, IS.g)(ik), ek)]
      })));

    function oS(kk) {
      const ek = function(kk) {
        var ek;
        const ik = (0, zS.e)(kk).poseRig;
        return null !== (ek = cS[kk]) && void 0 !== ek ? ek : void 0 === ik ? null : BS[ik]
      }(kk);
      return null === ek ? null : TS[ek]
    }

    function ZS(kk) {
      return {
        "--difficulty-colour": kk
      }
    }
    const OS = (0, sk.lazy)((() => (0, pS.e)(ik.e(202).then((() => ik(41082))), (kk => kk.MobPreview))));

    function gS(kk) {
      var ek, ik, Dk;
      let {
        picker: fk,
        controller: Sk
      } = kk;
      const {
        t: bk
      } = (0, If.D)(), rk = Zf(), {
        page: Pk
      } = fk;
      return (0, Qf.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: rk,
        onKeyDown: kk => {
          "ArrowLeft" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), Sk.previous()) : "ArrowRight" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), Sk.next()) : of(kk)
        },
        style: ZS(Pk.colour),
        children: [(0, Qf.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Qf.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: fk.dungeonName
          }), (0, Qf.jsx)(Tf.n, {
            padIgnore: !0,
            onClick: Sk.dismiss
          })]
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Qf.jsx)(Tf.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !fk.canPrevious,
              onClick: Sk.previous,
              children: (0, Qf.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Qf.jsx)(lS.d, {
                  name: "angle-up"
                })
              })
            }), (0, Qf.jsxs)("div", {
              className: jf()("SkyblockBossPickerBoss", {
                Locked: !Pk.unlocked
              }),
              children: [null !== Pk.bossMobType && (0, Qf.jsx)(sk.Suspense, {
                fallback: (0, Qf.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Qf.jsx)(OS, {
                  className: "SkyblockBossPickerModel",
                  mobType: Pk.bossMobType,
                  variation: Pk.bossMobVariation,
                  animation: null !== (ek = oS(Pk.bossMobType)) && void 0 !== ek ? ek : void 0
                })
              }), null === Pk.bossMobType && (0, Qf.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Qf.jsx)(Tf.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !fk.canNext,
              onClick: Sk.next,
              children: (0, Qf.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Qf.jsx)(lS.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Qf.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Pk.beaten && (0, Qf.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Pk.label]
            }), (0, Qf.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ik = Pk.bossName) && void 0 !== ik ? ik : "???"
            }), (0, Qf.jsxs)("span", {
              className: jf()("SkyblockBossPickerRecord", {
                Locked: null !== Pk.lockedHint
              }),
              children: [null !== Pk.lockedHintHighlight && (0, Qf.jsxs)(Qf.Fragment, {
                children: [Pk.lockedHintHighlight.before, (0, Qf.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ZS(Pk.lockedHintHighlight.colour),
                  children: [null !== Pk.lockedHintHighlight.icon && (0, Qf.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: Pk.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Pk.lockedHintHighlight.name]
                }), Pk.lockedHintHighlight.after]
              }), null === Pk.lockedHintHighlight && (null !== (Dk = Pk.lockedHint) && void 0 !== Dk ? Dk : Pk.summary)]
            })]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: fk.pages.map((kk => (0, Qf.jsx)("span", {
              className: jf()("SkyblockBossPickerDot", {
                Current: kk.current,
                Locked: !kk.unlocked
              }),
              style: ZS(kk.colour)
            }, kk.difficulty)))
          }), (0, Qf.jsx)(Tf.t, {
            className: "SkyblockBossPickerFight",
            disabled: !Pk.unlocked,
            onClick: Sk.enter,
            children: bk("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function GS(kk) {
      let {
        dungeon: ek,
        select: ik
      } = kk;
      return (0, Qf.jsxs)(Tf.f, {
        className: jf()("SkyblockDungeonCard", {
          Selected: ek.selected
        }),
        onClick: () => {
          ik(ek.id)
        },
        children: [(0, Qf.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Qf.jsx)("strong", {
            children: ek.name
          }), (0, Qf.jsx)("span", {
            children: ek.beatenSummary
          })]
        }), (0, Qf.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: ek.difficulties.map((kk => (0, Qf.jsxs)("span", {
            className: jf()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: kk.beaten
            }),
            style: ZS(kk.colour),
            title: kk.summary,
            children: [kk.beaten && (0, Qf.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), kk.label]
          }, kk.difficulty)))
        })]
      })
    }

    function NS(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(Ui, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsxs)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ik.picker && (0, Qf.jsx)(gS, {
          picker: ik.picker,
          controller: ek
        }), !ik.picker && (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Dk("skyblockGame:dungeons")
              }), (0, Qf.jsx)("p", {
                children: Dk("skyblockGame:dungeonsIntro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Qf.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ik.dungeons.map((kk => (0, Qf.jsx)(GS, {
                dungeon: kk,
                select: ek.select
              }, kk.id)))
            }), ik.detail && (0, Qf.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Qf.jsx)("h3", {
                children: ik.detail.name
              }), (0, Qf.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ik.detail.difficulties.map((kk => (0, Qf.jsxs)("li", {
                  className: jf()("SkyblockDungeonRecord", {
                    Beaten: kk.beaten
                  }),
                  children: [(0, Qf.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ZS(kk.colour),
                    children: [kk.beaten && (0, Qf.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), kk.label]
                  }), (0, Qf.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: kk.summary
                  })]
                }, kk.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function RS(kk) {
      let {
        collection: ek,
        select: ik
      } = kk;
      return (0, Qf.jsxs)(Tf.f, {
        className: jf()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: ek.selected,
          Locked: ek.locked
        }),
        ariaPressed: ek.selected,
        onClick: () => {
          ik(ek.id)
        },
        children: [(0, Qf.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: ek.icon,
            amount: 0
          })
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Qf.jsx)("strong", {
              children: ek.name
            }), (0, Qf.jsx)("span", {
              children: ek.tier
            })]
          }), (0, Qf.jsx)(Of, {
            percent: ek.percent,
            label: `${ek.name}: ${ek.progress}`
          }), (0, Qf.jsx)("span", {
            className: "SkyblockSkillXp",
            children: ek.progress
          })]
        })]
      })
    }

    function JS(kk) {
      let {
        collection: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)();
      return (0, Qf.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Qf.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: ek.icon,
            amount: 0
          })
        }), (0, Qf.jsx)("h3", {
          children: ek.name
        }), (0, Qf.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: ek.tier
        }), (0, Qf.jsx)("p", {
          children: ek.locked ? ik("skyblockGame:collectionLocked") : ek.count
        }), null !== ek.nextReward && (0, Qf.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Qf.jsx)("strong", {
            children: ik("skyblockGame:collectionNextReward")
          }), (0, Qf.jsx)("span", {
            children: ek.nextReward
          })]
        }), (0, Qf.jsx)(Of, {
          percent: ek.percent,
          label: ek.progress
        }), (0, Qf.jsx)("p", {
          children: ek.progress
        })]
      })
    }

    function kb(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(ai, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Dk("skyblockGame:collections")
              }), (0, Qf.jsxs)("p", {
                children: [Dk("skyblockGame:collectionsIntro"), " ", ik.tiersUnlocked]
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ik.categories.map((kk => (0, Qf.jsxs)(Tf.f, {
              className: jf()("SkyblockCollectionCategory", {
                Selected: kk.selected
              }),
              ariaPressed: kk.selected,
              padTabSelected: kk.selected,
              onClick: () => {
                ek.selectCategory(kk.id)
              },
              children: [(0, Qf.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Qf.jsx)(Ff.c, {
                  itemName: kk.icon,
                  amount: 0
                })
              }), (0, Qf.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Qf.jsx)("strong", {
                  children: kk.label
                }), (0, Qf.jsx)("span", {
                  children: kk.tiers
                })]
              })]
            }, kk.id)))
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Qf.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ik.collections.map((kk => (0, Qf.jsx)(RS, {
                collection: kk,
                select: ek.select
              }, kk.id)))
            }), ik.detail && (0, Qf.jsx)(JS, {
              collection: ik.detail
            })]
          })]
        })
      }) : null
    }
    const eb = ["completed", "active", "available", "locked"],
      ib = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Db(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(Ni, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Dk("skyblockDevQuests:title")
              }), (0, Qf.jsx)("p", {
                children: Dk("skyblockDevQuests:intro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [eb.map((kk => (0, Qf.jsx)("span", {
              className: jf()("SkyblockQuestGraphLegendState", kk),
              children: Dk(`skyblockDevQuests:state_${kk}`)
            }, kk))), ib.map((kk => (0, Qf.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Qf.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Qf.jsx)("line", {
                  className: jf()("SkyblockQuestGraphEdge", kk),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Dk(`skyblockDevQuests:edge_${kk}`)]
            }, kk)))]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Qf.jsxs)("div", {
              className: jf()("SkyblockQuestGraphCanvas", {
                Planning: ik.planning
              }),
              style: {
                width: ik.width,
                height: ik.height
              },
              children: [(0, Qf.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ik.width,
                height: ik.height,
                "aria-hidden": "true",
                children: [(0, Qf.jsx)("defs", {
                  children: (0, Qf.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Qf.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ik.edges.map((kk => (0, Qf.jsx)("path", {
                  className: jf()("SkyblockQuestGraphEdge", kk.kind, {
                    InPlan: kk.inPlan
                  }),
                  d: kk.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, kk.key)))]
              }), ik.nodes.map((kk => (0, Qf.jsxs)("button", {
                type: "button",
                className: jf()("SkyblockQuestGraphNode", kk.state, {
                  InPlan: kk.inPlan,
                  Hovered: kk.hovered
                }),
                style: {
                  left: kk.left,
                  top: kk.top,
                  width: 190,
                  height: 52
                },
                title: kk.id,
                onMouseEnter: () => {
                  ek.hover(kk.id)
                },
                onMouseLeave: () => {
                  ek.hover(null)
                },
                onFocus: () => {
                  ek.hover(kk.id)
                },
                onBlur: () => {
                  ek.hover(null)
                },
                onClick: () => {
                  ek.jump(kk.id)
                },
                children: [(0, Qf.jsx)("strong", {
                  children: kk.name
                }), (0, Qf.jsx)("span", {
                  children: kk.detail
                })]
              }, kk.id)))]
            })
          })]
        })
      }) : null
    }
    const fb = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Sb = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${MD}ms`,
        "--forge-duration": "2150ms"
      },
      bb = Array.from({
        length: 18
      }, ((kk, ek) => ({
        "--ember-left": `${(4+92*(.618034*ek%1)).toFixed(1)}%`,
        "--ember-size": 3 + ek % 3 * 2 + "px",
        "--ember-drift": 14 * (ek % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*ek%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*ek%8).toFixed(2)}s`
      })));

    function rb(kk) {
      if (kk.style.removeProperty("--part-size"), null === kk.parentElement || "wrap" === getComputedStyle(kk.parentElement).flexWrap) return;
      const ek = [...kk.children],
        ik = getComputedStyle(kk),
        Dk = parseFloat(ik.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        fk = (kk.clientHeight - parseFloat(ik.rowGap) * (ek.length - 1)) / ek.length,
        Sk = ek.map((kk => {
          const ek = getComputedStyle(kk),
            ik = kk.querySelector("h3"),
            Sk = kk.querySelector(".SkyblockForgeParts");
          if (null === ik || null === Sk) return Dk;
          const bk = fk - parseFloat(ek.paddingTop) - parseFloat(ek.paddingBottom) - ik.offsetHeight - parseFloat(getComputedStyle(ik).marginBottom),
            rk = parseFloat(getComputedStyle(Sk).columnGap),
            Pk = Sk.children.length;
          let mk = 0;
          for (let Dk = 1; Dk <= Pk; Dk++) {
            const kk = Math.ceil(Pk / Dk);
            mk = Math.max(mk, Math.min((Sk.clientWidth - rk * (Dk - 1)) / Dk, (bk - rk * (kk - 1)) / kk))
          }
          return mk
        }));
      kk.style.setProperty("--part-size", `${Math.floor(Math.max(Dk,Math.min(...Sk)))}px`)
    }

    function Pb(kk) {
      var ek, ik, Dk, Sk, bk;
      let {
        controller: rk
      } = kk;
      const Pk = (0, zf.e)(lD, rk.getSnapshot()),
        {
          t: mk
        } = (0, If.D)(),
        Mk = Zf(),
        Kk = function() {
          const kk = (0, sk.useRef)(null),
            ek = (0, sk.useRef)(null);
          return (0, sk.useLayoutEffect)((() => {
            null !== kk.current && rb(kk.current)
          })), (0, sk.useCallback)((ik => {
            var Dk;
            null === (Dk = ek.current) || void 0 === Dk || Dk.disconnect(), ek.current = null, kk.current = ik, null !== ik && (ek.current = new ResizeObserver((() => {
              rb(ik)
            })), ek.current.observe(ik))
          }), [])
        }(),
        xk = function(kk) {
          const ek = (0, sk.useRef)(null);
          return (0, sk.useLayoutEffect)((() => {
            const kk = ek.current;
            if (null !== kk) {
              kk.style.removeProperty("font-size");
              for (let ek = 1.7; ek > 1.1 && kk.scrollWidth > kk.clientWidth; ek -= .1) kk.style.fontSize = ek - .1 + "rem"
            }
          }), [kk]), (0, sk.useCallback)((kk => {
            ek.current = kk
          }), [])
        }(null === (ek = Pk.preview) || void 0 === ek ? void 0 : ek.name),
        nk = (0, sk.useRef)(null),
        Uk = (0, sk.useRef)({}),
        Hk = Pk.forging,
        wk = null !== (ik = null === Hk || void 0 === Hk ? void 0 : Hk.preview.tier) && void 0 !== ik ? ik : 0,
        lk = null !== (Dk = null === Hk || void 0 === Hk ? void 0 : Hk.preview.named) && void 0 !== Dk && Dk,
        pk = (0, sk.useMemo)((() => {
          return null === Hk ? null : {
            flames: (kk = wk, ek = lk, Array.from({
              length: 26 + 6 * kk + (ek ? 20 : 0)
            }, ((kk, ek) => {
              const ik = ek < 6,
                Dk = Math.random() * Math.PI * 2,
                fk = ik ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Sk = Math.cos(Dk) * fk,
                bk = Math.sin(Dk) * fk - 2 - 3 * Math.random(),
                rk = Math.random(),
                [Pk, mk, Mk] = ik ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : rk < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : rk < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [rk < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Pk,
                "--x0": `${(.15*Sk).toFixed(2)}rem`,
                "--y0": `${(.15*bk).toFixed(2)}rem`,
                "--x": `${Sk.toFixed(2)}rem`,
                "--y": `${bk.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${mk.toFixed(2)}rem`,
                "--duration": `${Math.round(Mk)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: nD(wk, lk)
          };
          var kk, ek
        }), [null === Hk || void 0 === Hk ? void 0 : Hk.id]);
      if (!Pk.enabled) return null;
      const yk = Pk.preview,
        Yk = Pk.arriving,
        Lk = null !== Yk && !Yk.sameSword,
        Ck = null !== yk && (0, Qf.jsx)(Ff.c, {
          itemName: yk.baseSword,
          amount: 0,
          enchantmentTier: yk.enchantmentTier
        });
      return (0, Qf.jsx)(Bf.e, {
        show: Pk.open,
        close: rk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Mk,
          onKeyDown: of,
          children: [(0, Qf.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: bb.map(((kk, ek) => (0, Qf.jsx)("span", {
              style: kk
            }, ek)))
          }), (0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: mk("skyblockGame:forgeTitle")
              }), (0, Qf.jsx)("p", {
                children: mk("skyblockGame:forgeIntro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              onClick: rk.dismiss
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Qf.jsx)("div", {
              ref: Kk,
              className: jf()("SkyblockForgeSlots", {
                Locked: null !== Hk
              }),
              children: Pk.slots.map((kk => (0, Qf.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Qf.jsx)("h3", {
                  children: kk.label
                }), (0, Qf.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: kk.parts.map((ek => (0, Qf.jsx)("button", {
                    type: "button",
                    className: jf()("SkyblockForgePart", {
                      Selected: ek.selected,
                      Missing: ek.placeholder
                    }),
                    disabled: ek.placeholder,
                    title: ek.placeholder ? mk("skyblockGame:forgePickParts") : ek.itemName,
                    "aria-pressed": ek.selected,
                    onClick: () => {
                      rk.select(kk.kind, ek.material)
                    },
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: ek.itemName,
                      amount: ek.owned
                    })
                  }, ek.material)))
                })]
              }, kk.kind)))
            }), (0, Qf.jsxs)("div", {
              className: jf()("SkyblockForgeAnvil", {
                Named: null === yk || void 0 === yk ? void 0 : yk.named
              }),
              style: {
                "--tier": null === yk ? "transparent" : fk.$[yk.enchantmentTier]
              },
              children: [(0, Qf.jsxs)("div", {
                className: jf()("SkyblockForgeAltar", {
                  Forging: null !== Hk
                }),
                style: null === Hk ? void 0 : Sb,
                children: [(0, Qf.jsxs)("div", {
                  className: jf()("SkyblockForgeMount", {
                    Arrive: null !== Yk
                  }),
                  children: [null === yk && (0, Qf.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: Pk.unformedSword,
                      amount: 0
                    })
                  }), null !== yk && (0, Qf.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== yk && null === Hk && (0, Qf.jsx)("div", {
                    ref: nk,
                    className: "SkyblockForgeFloat",
                    children: (0, Qf.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Ck
                    })
                  }), null !== yk && (0, Qf.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: xD.map(((kk, ek) => (0, Qf.jsx)("span", {
                      className: jf()({
                        Rune: "" !== kk.rune
                      }),
                      style: kk.style,
                      children: kk.rune
                    }, ek)))
                  }), null !== Hk && null !== pk && (0, Qf.jsxs)(Qf.Fragment, {
                    children: [(0, Qf.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: pk.flames.map(((kk, ek) => (0, Qf.jsx)("span", {
                        style: kk
                      }, ek)))
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Uk.current,
                      children: (0, Qf.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Ck
                      })
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (wk >= 4 || lk) && (0, Qf.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: pk.sparks.map(((kk, ek) => (0, Qf.jsx)("span", {
                        style: kk
                      }, ek)))
                    }), (0, Qf.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Qf.jsx)("p", {
                  className: jf()("SkyblockForgeStatus", null === (Sk = Pk.status) || void 0 === Sk ? void 0 : Sk.tone),
                  children: null === (bk = Pk.status) || void 0 === bk ? void 0 : bk.text
                })]
              }), null === yk && (0, Qf.jsx)("p", {
                className: jf()("SkyblockForgeName Waiting", {
                  ArriveText: Lk
                }),
                children: mk(Pk.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== yk && (0, Qf.jsx)("h3", {
                ref: xk,
                className: jf()("SkyblockForgeName", {
                  ArriveText: Lk
                }),
                title: yk.name,
                children: yk.name
              }), (null === yk || void 0 === yk ? void 0 : yk.named) && (0, Qf.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: mk("skyblockGame:forgeSecret")
              }), (0, Qf.jsxs)(Tf.t, {
                className: "SkyblockForgeButton",
                disabled: !Pk.canForge,
                title: null === yk ? void 0 : mk("skyblockGame:forgeCoalOwned", {
                  owned: String(Pk.coalOwned)
                }),
                onClick: () => {
                  Uk.current = function(kk) {
                    const ek = null === kk ? "none" : getComputedStyle(kk).transform,
                      ik = new DOMMatrixReadOnly("none" === ek ? void 0 : ek);
                    return {
                      "--settle-y": `${ik.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ik.b,ik.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(nk.current), wD(), rk.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [mk("skyblockGame:forgeButton"), null !== yk && (0, Qf.jsxs)("span", {
                  className: jf()("SkyblockForgeCost", {
                    Short: yk.coalShort
                  }),
                  children: [(0, Qf.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Qf.jsx)(Ff.c, {
                      itemName: iD.c,
                      amount: 0
                    })
                  }), yk.coalCost]
                })]
              })]
            }), (0, Qf.jsxs)("div", {
              className: jf()("SkyblockForgeDetails", {
                Named: null === yk || void 0 === yk ? void 0 : yk.named
              }),
              children: [(0, Qf.jsx)("p", {
                className: jf()("SkyblockForgeLore", {
                  ArriveText: Lk
                }),
                title: null === yk || void 0 === yk ? void 0 : yk.lore,
                children: null === yk || void 0 === yk ? void 0 : yk.lore
              }), (0, Qf.jsxs)("dl", {
                className: jf()("SkyblockForgeStats", {
                  ArriveText: Lk
                }),
                children: [null === yk && fb.map((kk => (0, Qf.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Qf.jsx)("dt", {
                    children: mk(kk)
                  }), (0, Qf.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, kk))), null === yk || void 0 === yk ? void 0 : yk.stats.map((kk => (0, Qf.jsxs)("div", {
                  className: jf()("SkyblockForgeStat", {
                    Better: kk.better
                  }),
                  children: [(0, Qf.jsx)("dt", {
                    children: kk.label
                  }), (0, Qf.jsx)("dd", {
                    children: kk.value
                  })]
                }, kk.label)))]
              }), (0, Qf.jsx)("ul", {
                className: jf()("SkyblockForgeEffects", {
                  ArriveText: Lk
                }),
                children: null === yk || void 0 === yk ? void 0 : yk.effects.map((kk => (0, Qf.jsx)("li", {
                  children: kk
                }, kk)))
              })]
            })]
          })]
        })
      })
    }
    const mb = "Doom Rivet",
      Mb = "Doom Crest";

    function Kb(kk) {
      let {
        itemName: ek,
        amount: ik,
        owned: Dk
      } = kk;
      return (0, Qf.jsxs)("span", {
        className: jf()("SkyblockSmugglerPrice", {
          Short: ik > Dk
        }),
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: ek,
            amount: 0
          })
        }), (0, Qf.jsx)("span", {
          children: ik
        })]
      })
    }

    function xb(kk) {
      return kk.justBought ? "skyblockGame:smugglerJustBought" : kk.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function nb(kk) {
      let {
        deal: ek,
        view: ik,
        buy: Dk
      } = kk;
      const {
        t: fk
      } = (0, If.D)();
      return (0, Qf.jsxs)("div", {
        className: jf()("SkyblockSmugglerPocket", {
          Bought: ek.justBought,
          Unaffordable: !ek.affordable,
          SoldOut: ek.soldOut && !ek.justBought
        }),
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Qf.jsx)(Ff.c, {
            itemName: ek.itemName,
            amount: 0,
            enchantmentTier: ek.enchantmentTier
          }), ek.amount > 1 && (0, Qf.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: fk("skyblockGame:smugglerAmount", {
              amount: ek.amount
            })
          })]
        }), (0, Qf.jsx)("h3", {
          children: ek.displayName
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [ek.rivets > 0 && (0, Qf.jsx)(Kb, {
              itemName: mb,
              amount: ek.rivets,
              owned: ik.rivetsOwned
            }), ek.crests > 0 && (0, Qf.jsx)(Kb, {
              itemName: Mb,
              amount: ek.crests,
              owned: ik.crestsOwned
            })]
          }), (0, Qf.jsx)(Tf.f, {
            className: "SkyblockSmugglerBuy",
            disabled: ek.soldOut || !ek.affordable || ik.pending,
            onClick: () => {
              Dk(ek.slot)
            },
            children: fk(xb(ek))
          })]
        })]
      }, ek.justBought ? ik.boughtCount : 0)
    }

    function Ub(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(YD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Qf.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Qf.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Dk("skyblockGame:smugglerTitle")
              }), (0, Qf.jsx)("p", {
                children: Dk("skyblockGame:smugglerIntro")
              })]
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Qf.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Qf.jsx)(Kb, {
                  itemName: mb,
                  amount: ik.rivetsOwned,
                  owned: ik.rivetsOwned
                }), (0, Qf.jsx)(Kb, {
                  itemName: Mb,
                  amount: ik.crestsOwned,
                  owned: ik.crestsOwned
                })]
              }), (0, Qf.jsx)(Tf.n, {
                onClick: ek.dismiss
              })]
            })]
          }), (0, Qf.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ik.deals.map((kk => (0, Qf.jsx)(nb, {
              deal: kk,
              view: ik,
              buy: ek.buy
            }, kk.slot)))
          }), (0, Qf.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ik.rotatesText
            }), null !== ik.status && (0, Qf.jsx)("span", {
              className: jf()("SkyblockSmugglerStatus", ik.status.tone),
              children: ik.status.text
            })]
          })]
        })
      }) : null
    }

    function Hb(kk) {
      let {
        phase: ek,
        className: ik
      } = kk;
      return (0, Qf.jsx)("span", {
        className: jf()("SkyblockMoon", `Moon-${ek}`, ik),
        "aria-hidden": "true"
      })
    }

    function wb(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(AD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)();
      return ik.enabled ? (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: jf()("SkyblockPassageChip", ik.open && "Open"),
          "aria-label": Dk("skyblockGame:passageChipLabel", {
            phase: ik.phaseName
          }),
          title: Dk("skyblockGame:passageChipLabel", {
            phase: ik.phaseName
          }),
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: ek.toggle,
          children: (0, Qf.jsx)(Hb, {
            phase: ik.phase
          }, ik.phase)
        })
      }) : null
    }

    function lb(kk) {
      let {
        fish: ek
      } = kk;
      return (0, Qf.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: ek.itemName,
            amount: 0
          })
        }), (0, Qf.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: ek.displayName
          }), (0, Qf.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: ek.where
          })]
        })]
      })
    }

    function pb(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(AD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Qf.jsx)(Hb, {
              phase: ik.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Dk("skyblockGame:passageTitle")
              }), (0, Qf.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ik.phaseName
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Dk("skyblockGame:passageIntro")
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Qf.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Qf.jsx)("h3", {
                children: Dk("skyblockGame:passageVisiting")
              }), (0, Qf.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ik.visitors.map((kk => (0, Qf.jsx)(lb, {
                  fish: kk
                }, kk.itemName)))
              })]
            }), (0, Qf.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ik.resting && (0, Qf.jsxs)(Qf.Fragment, {
                children: [(0, Qf.jsx)("h3", {
                  children: Dk("skyblockGame:passageResting")
                }), (0, Qf.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Qf.jsx)(lb, {
                    fish: ik.resting
                  })
                })]
              }), (0, Qf.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Qf.jsx)(Hb, {
                  phase: ik.nextPhase
                }), (0, Qf.jsx)("span", {
                  children: ik.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function yb() {
      return (0, Qf.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((kk => (0, Qf.jsx)("i", {
          style: {
            "--sparkle-index": kk
          }
        }, kk)))
      })
    }

    function Yb(kk) {
      var ek;
      let {
        charm: ik,
        view: Dk,
        controller: fk
      } = kk;
      const {
        t: Sk
      } = (0, If.D)(), bk = Dk.shop, rk = (null === (ek = Dk.sparkle) || void 0 === ek ? void 0 : ek.id) === ik.id;
      return (0, Qf.jsxs)("li", {
        className: jf()("SkyblockLampLightCharm", ik.owned && "Owned", ik.socketed && "Socketed"),
        children: [rk && (0, Qf.jsx)(yb, {}, Dk.sparkle.count), (0, Qf.jsx)("h4", {
          children: ik.name
        }), (0, Qf.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ik.effect
        }), (0, Qf.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ik.lines.map((kk => (0, Qf.jsxs)("li", {
            className: jf()("SkyblockLampLightOddsLine", "better" === kk.tone ? "Better" : "worse" === kk.tone ? "Worse" : "Same"),
            children: [(0, Qf.jsx)("span", {
              className: "Before",
              children: kk.before
            }), (0, Qf.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Qf.jsx)("span", {
              className: "After",
              children: kk.after
            })]
          }, kk.label)))
        }), (0, Qf.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ik.owned ? ik.socketed ? (0, Qf.jsxs)(Qf.Fragment, {
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Sk("skyblockGame:lampLightSocketed")
            }), (0, Qf.jsx)(Tf.X, {
              disabled: !Dk.canCommand,
              ariaLabel: Sk("skyblockGame:lampLightRemoveLabel", {
                charm: ik.name
              }),
              onClick: () => {
                fk.socket(null)
              },
              children: Sk("skyblockGame:lampLightRemove")
            })]
          }) : (0, Qf.jsx)(Tf.f, {
            disabled: !Dk.canCommand || !bk.heldRod,
            ariaLabel: Sk("skyblockGame:lampLightSocketLabel", {
              charm: ik.name
            }),
            onClick: () => {
              fk.socket(ik.id)
            },
            children: Sk("skyblockGame:lampLightSocket")
          }) : (0, Qf.jsx)(Tf.f, {
            disabled: !Dk.canCommand || !ik.affordable,
            ariaLabel: Sk("skyblockGame:lampLightBuyLabel", {
              item: ik.name,
              cost: ik.cost
            }),
            onClick: () => {
              fk.buy(ik.id)
            },
            children: ik.cost
          })
        })]
      })
    }

    function Lb(kk) {
      var ek;
      let {
        tint: ik,
        view: Dk,
        controller: fk
      } = kk;
      const {
        t: Sk
      } = (0, If.D)();
      return (0, Qf.jsxs)("li", {
        className: jf()("SkyblockLampLightTint", ik.wearing && "Wearing"),
        style: {
          "--tint-colour": ik.colour
        },
        children: [(null === (ek = Dk.sparkle) || void 0 === ek ? void 0 : ek.id) === ik.id && (0, Qf.jsx)(yb, {}, Dk.sparkle.count), (0, Qf.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Qf.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ik.name
        }), ik.wearing ? (0, Qf.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Sk("skyblockGame:lampLightWearing")
        }) : (0, Qf.jsx)(Tf.f, {
          disabled: !Dk.canCommand || !ik.owned && !ik.affordable,
          ariaLabel: ik.owned ? Sk("skyblockGame:lampLightWearLabel", {
            tint: ik.name
          }) : Sk("skyblockGame:lampLightBuyLabel", {
            item: ik.name,
            cost: ik.cost
          }),
          onClick: () => {
            ik.owned ? fk.wearTint(ik.id) : fk.buy(ik.id)
          },
          children: ik.owned ? Sk("skyblockGame:lampLightWear") : ik.cost
        })]
      })
    }

    function Cb(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(aD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = ik.shop;
      return (0, Qf.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Qf.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ik.balance
          }), (0, Qf.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ik.releasing,
            className: jf()("SkyblockLampLightSwitch", ik.releasing && "On"),
            disabled: ik.releasing ? "ready" !== ik.status : !ik.canCommand,
            onClick: () => {
              ek.setRelease(!ik.releasing)
            },
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Qf.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Dk("skyblockGame:lampLightRelease")]
          }), (0, Qf.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Dk("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ik.notice && (0, Qf.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ik.notice
        }), null !== fk && (0, Qf.jsxs)(Qf.Fragment, {
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Qf.jsx)("h3", {
              children: Dk("skyblockGame:lampLightCharms")
            }), (0, Qf.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: fk.oddsFor
            }), (0, Qf.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((kk => (0, Qf.jsx)("button", {
                type: "button",
                "aria-pressed": ik.situation === kk,
                className: jf()("SkyblockLampLightSituation", ik.situation === kk && "Selected"),
                onClick: () => {
                  ek.setSituation(kk)
                },
                children: Dk("open" === kk ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, kk)))
            })]
          }), !fk.heldRod && (0, Qf.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Dk("skyblockGame:lampLightHoldRod")
          }), (0, Qf.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: fk.charms.map((kk => (0, Qf.jsx)(Yb, {
              charm: kk,
              view: ik,
              controller: ek
            }, kk.id)))
          }), (0, Qf.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Qf.jsx)("h3", {
              children: Dk("skyblockGame:lampLightTints")
            })
          }), (0, Qf.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Qf.jsxs)("li", {
              className: jf()("SkyblockLampLightTint", "Islands", fk.wearingIslandColours && "Wearing"),
              children: [(0, Qf.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Qf.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Dk("skyblockGame:lampLightIslandColours")
              }), fk.wearingIslandColours ? (0, Qf.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Dk("skyblockGame:lampLightWearing")
              }) : (0, Qf.jsx)(Tf.f, {
                disabled: !ik.canCommand,
                ariaLabel: Dk("skyblockGame:lampLightWearLabel", {
                  tint: Dk("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  ek.wearTint(null)
                },
                children: Dk("skyblockGame:lampLightWear")
              })]
            }), fk.tints.map((kk => (0, Qf.jsx)(Lb, {
              tint: kk,
              view: ik,
              controller: ek
            }, kk.id)))]
          })]
        })]
      })
    }

    function Ab(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(aD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)();
      return ik.releasing ? (0, Qf.jsx)(df.h, {
        children: (0, Qf.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            ek.setRelease(!1)
          },
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Qf.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Dk("skyblockGame:lampLightReleasing"), " \xb7 ", ik.balance]
          }), (0, Qf.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Dk("skyblockGame:lampLightKeepCatches")
          }), null !== ik.gained && (0, Qf.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ik.gained.text
          }, ik.gained.count)]
        })
      }) : null
    }

    function jb(kk) {
      let {
        island: ek,
        view: ik,
        aim: Dk
      } = kk;
      const {
        t: fk
      } = (0, If.D)(), Sk = ek.featuredFish;
      return (0, Qf.jsxs)("li", {
        className: jf()("SkyblockKeepersChairIsland", `Island-${ek.id}`, ek.favoured && "Aimed", !ek.relit && "Dark"),
        children: [(0, Qf.jsx)("h3", {
          children: ek.name
        }), ek.relit && null !== Sk ? (0, Qf.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: fk("skyblockGame:keepersChairTideNotice")
          }), (0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Qf.jsx)(Ff.c, {
              itemName: Sk.itemName,
              amount: 0
            })
          }), (0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Sk.displayName
          })]
        }) : (0, Qf.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: fk("skyblockGame:keepersChairDark")
          })
        }), ek.relit && (ek.favoured ? (0, Qf.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: fk("skyblockGame:keepersChairAimed")
        }) : (0, Qf.jsx)(Tf.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !ik.canAim,
          ariaLabel: fk("skyblockGame:keepersChairAimLabel", {
            island: ek.name
          }),
          onClick: () => {
            Dk(ek.id)
          },
          children: fk("skyblockGame:keepersChairAim")
        }))]
      }, ek.favoured ? ik.aimedCount : 0)
    }

    function sb(kk) {
      let {
        controller: ek,
        lampLight: ik
      } = kk;
      const Dk = (0, zf.e)(uD, ek.getSnapshot()),
        fk = (0, zf.e)(aD, ik.getSnapshot()),
        [Sk, bk] = (0, sk.useState)("lamp"),
        {
          t: rk
        } = (0, If.D)(),
        Pk = Zf();
      if (!Dk.enabled) return null;
      const mk = "light" === Sk && fk.enabled;
      return (0, Qf.jsx)(Bf.e, {
        show: Dk.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: jf()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", mk && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Pk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: rk("skyblockGame:keepersChairTitle")
              }), (0, Qf.jsx)("p", {
                children: rk(mk ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              ariaLabel: rk("skyblockGame:keepersChairClose"),
              onClick: ek.dismiss
            })]
          }), fk.enabled && (0, Qf.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((kk => (0, Qf.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === kk === mk,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === kk === mk ? "true" : void 0,
              className: jf()("SkyblockKeepersChairTab", "light" === kk === mk && "Selected"),
              onClick: () => {
                bk(kk)
              },
              children: [rk("lamp" === kk ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === kk && (0, Qf.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: fk.balance
              })]
            }, kk)))
          }), mk ? (0, Qf.jsx)(Cb, {
            controller: ik
          }) : (0, Qf.jsx)(db, {
            view: Dk,
            controller: ek
          })]
        })
      })
    }

    function db(kk) {
      let {
        view: ek,
        controller: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)();
      return (0, Qf.jsxs)(Qf.Fragment, {
        children: [(0, Qf.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: ek.islands.map((kk => (0, Qf.jsx)(jb, {
            island: kk,
            view: ek,
            aim: ik.aim
          }, kk.id)))
        }), null !== ek.almanac && (0, Qf.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Dk("skyblockGame:passageTitle")
          }), (0, Qf.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Qf.jsx)(Hb, {
              phase: ek.almanac.phase
            }), ek.almanac.phaseName]
          }), (0, Qf.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Qf.jsx)(Hb, {
              phase: ek.almanac.nextPhase
            }), ek.almanac.next]
          })]
        }), (0, Qf.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Dk("skyblockGame:keepersChairFavour")
          }), ek.aimed && (0, Qf.jsx)(Tf.X, {
            className: "SkyblockKeepersChairRest",
            disabled: !ek.canAim,
            onClick: () => {
              ik.aim(null)
            },
            children: Dk("skyblockGame:keepersChairRest")
          })]
        }), null !== ek.status && (0, Qf.jsx)("p", {
          className: jf()("SkyblockKeepersChairStatus", "refused" === ek.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: ek.status.text
        })]
      })
    }

    function Vb(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(ID, ek.getSnapshot());
      if (!Dk.enabled) return null;
      const fk = Dk.freshCount > 0 ? ik("skyblockGame:reachLogOpenNews", {
        count: Dk.freshCount
      }) : ik("skyblockGame:reachLogOpen");
      return (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsxs)("button", {
          type: "button",
          className: jf()("SkyblockReachLogButton", Dk.freshCount > 0 && "HasNews", Dk.pending && "Pending"),
          "aria-label": fk,
          title: fk,
          onClick: ek.ask,
          children: [Dk.news && (0, Qf.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Dk.newsToken}`), (0, Qf.jsx)("span", {
            className: jf()("SkyblockReachLogIcon", Dk.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Qf.jsx)(Ff.c, {
              itemName: QD,
              amount: 0
            })
          }, `icon:${Dk.newsToken}`), Dk.freshCount > 0 && (0, Qf.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Dk.freshCount
          })]
        })
      })
    }

    function Fb(kk) {
      let {
        gift: ek
      } = kk;
      return (0, Qf.jsx)("li", {
        className: jf()("SkyblockRegularsGift", ek.given && "Given"),
        children: ek.text
      })
    }

    function ub(kk) {
      let {
        regular: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)();
      return (0, Qf.jsxs)("li", {
        className: jf()("SkyblockRegularsCard", ek.tagged ? "Tagged" : "Untagged", ek.resting && "Resting"),
        children: [(0, Qf.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: ek.fishName,
            children: (0, Qf.jsx)(Ff.c, {
              itemName: ek.itemName,
              amount: 0
            })
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Qf.jsx)("h3", {
              children: ek.name
            }), (0, Qf.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: ek.fishName
            })]
          })]
        }), (0, Qf.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: ek.line
        }), (0, Qf.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: ek.size
          }), ek.tagged && (0, Qf.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: ek.resting ? ik("skyblockGame:regularsResting") : ek.meetings
          })]
        }), (0, Qf.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: ek.chance
        }), (0, Qf.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: ek.gifts.map((kk => (0, Qf.jsx)(Fb, {
            gift: kk
          }, kk.text)))
        }), ek.history.length > 0 && (0, Qf.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: ek.history.map(((kk, ek) => (0, Qf.jsx)("li", {
            children: kk
          }, ek)))
        })]
      })
    }

    function qb(kk) {
      let {
        controller: ek,
        island: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)(), fk = (0, zf.e)(ff, ek.getSnapshot()), Sk = fk.islands.find((kk => kk.id === ik));
      if (!fk.enabled || void 0 === Sk) return null;
      const bk = Dk("skyblockGame:regularsOpen");
      return (0, Qf.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": bk,
        title: bk,
        onClick: () => {
          ek.openIsland(ik)
        },
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Dk("skyblockGame:regularsTitle")
        }), Sk.regulars.map((kk => (0, Qf.jsx)("span", {
          className: jf()("SkyblockRegularsStripIcon", kk.tagged && "Tagged"),
          title: kk.name,
          children: (0, Qf.jsx)(Ff.c, {
            itemName: kk.itemName,
            amount: 0
          })
        }, kk.id)))]
      })
    }

    function Ib(kk) {
      var ek;
      let {
        controller: ik
      } = kk;
      const Dk = (0, zf.e)(ff, ik.getSnapshot()),
        {
          t: fk
        } = (0, If.D)(),
        Sk = Zf();
      if (!Dk.enabled) return null;
      const bk = null !== (ek = Dk.islands.find((kk => kk.id === Dk.selected))) && void 0 !== ek ? ek : null;
      return (0, Qf.jsx)(Bf.e, {
        show: Dk.open,
        close: ik.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Sk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: fk("skyblockGame:regularsTitle")
              }), (0, Qf.jsx)("p", {
                children: fk("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ik.dismiss
            })]
          }), (0, Qf.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Dk.islands.map((kk => {
              const ek = kk.id === Dk.selected;
              return (0, Qf.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ek,
                "data-pad-tab": !0,
                "data-pad-selected": ek ? "true" : void 0,
                className: jf()("SkyblockReachLogTab", `Island-${kk.id}`, ek && "Selected", kk.charm.given && "GoldPage"),
                onClick: () => {
                  ik.selectIsland(kk.id)
                },
                children: (0, Qf.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                })
              }, kk.id)
            }))
          }), (0, Qf.jsxs)("div", {
            className: jf()("SkyblockRegularsPage", null !== bk && `Island-${bk.id}`),
            role: "tabpanel",
            children: [(0, Qf.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: fk("skyblockGame:regularsHow")
            }), null !== bk && (0, Qf.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: bk.regulars.map((kk => (0, Qf.jsx)(ub, {
                regular: kk
              }, kk.id)))
            })]
          }), null !== bk && (0, Qf.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Qf.jsx)("span", {
              className: jf()("SkyblockRegularsCharm", bk.charm.given && "Given"),
              children: bk.charm.text
            })
          })]
        })
      })
    }
    const zb = [{
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
      Qb = Array.from({
        length: 6
      }, ((kk, ek) => ({
        "--x": `${(88*(.618034*ek%1)).toFixed(1)}%`,
        "--y": `${(10+37*ek%70).toFixed(1)}%`,
        "--size": 7 + ek % 3 * 3 + "rem",
        "--drift-x": 3 * (ek % 3 - 1) + "rem",
        "--drift-y": 2 * (ek % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + ek % 4 * 3 + "s",
        "--delay": 2.5 * -ek + "s"
      }))),
      vb = Array.from({
        length: 14
      }, ((kk, ek) => ({
        "--left": `${(3+94*((.618034*ek+.3)%1)).toFixed(1)}%`,
        "--size": 4 + ek % 4 * 2 + "px",
        "--sway": ek % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*ek%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*ek%12).toFixed(2)}s`
      }))),
      Eb = (0, sk.memo)((function(kk) {
        let {
          island: ek
        } = kk;
        return (0, Qf.jsxs)("div", {
          className: jf()("SkyblockReachLogDepths", null !== ek && `Island-${ek}`),
          "aria-hidden": "true",
          children: [zb.map(((kk, ek) => (0, Qf.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: kk
          }, `shaft${ek}`))), Qb.map(((kk, ek) => (0, Qf.jsx)("span", {
            className: jf()("SkyblockReachLogMote", ek % 2 === 1 && "Violet"),
            style: kk
          }, `mote${ek}`))), vb.map(((kk, ek) => (0, Qf.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: kk
          }, `bubble${ek}`)))]
        })
      })),
      hb = 100;

    function ab(kk) {
      let {
        view: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)();
      if (null === ek || 0 === ek.total) return null;
      const Dk = hb * ek.aspect,
        fk = ik("skyblockGame:hiddenWatersCount", {
          found: ek.found,
          total: ek.total
        });
      return (0, Qf.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ik("skyblockGame:hiddenWatersTitle")}: ${fk}`,
        children: [(0, Qf.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Dk}`,
          "aria-hidden": "true",
          children: [ek.islands.map(((kk, ek) => (0, Qf.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (kk.left + kk.width / 2) * hb,
            cy: (kk.top + kk.height / 2) * Dk,
            rx: kk.width / 2 * hb,
            ry: kk.height / 2 * Dk
          }, ek))), ek.pins.map(((kk, ek) => (0, Qf.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: kk.left * hb,
            cy: kk.top * Dk,
            r: 13
          }, ek)))]
        }), (0, Qf.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ik("skyblockGame:hiddenWatersTitle")
          }), (0, Qf.jsx)("span", {
            className: ek.found === ek.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: fk
          })]
        })]
      })
    }

    function Wb(kk) {
      let {
        view: ek,
        island: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)(), fk = null === ek || void 0 === ek ? void 0 : ek.glimpses.get(ik);
      return void 0 === fk || 0 === fk.length ? null : (0, Qf.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Dk("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Qf.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: fk.map((kk => (0, Qf.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Qf.jsx)(Ff.c, {
              itemName: kk,
              amount: 0
            })
          }, kk)))
        })]
      })
    }
    const tb = ["Bronze", "Silver", "Gold"],
      Xb = [{
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
      Bb = Xb.slice(0, 2);

    function cb(kk) {
      return kk ? Xb : Bb
    }

    function Tb(kk) {
      let {
        fish: ek,
        letGoShown: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)();
      return (0, Qf.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [tb.map(((kk, ik) => {
          const fk = ik < ek.marks;
          return (0, Qf.jsx)("span", {
            className: jf()("SkyblockReachLogPip", kk, fk && "Earned", fk && ek.fresh && ik === ek.marks - 1 && "Newest"),
            title: Dk(zD[ik])
          }, kk)
        })), (0, Qf.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), cb(ik).map(((kk, ik) => (0, Qf.jsx)("span", {
          className: jf()("SkyblockReachLogRibbon", kk.className, !0 === ek.ribbons[ik] && "Earned"),
          title: Dk(kk.titleKey)
        }, kk.className)))]
      })
    }

    function ob(kk) {
      let {
        letGoShown: ek,
        haloShown: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)();
      return (0, Qf.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Qf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Dk("skyblockGame:reachLogMarks"),
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Dk("skyblockGame:reachLogLegendMarks")]
        }), cb(ek).map((kk => (0, Qf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Dk(kk.titleKey),
          children: [(0, Qf.jsx)("span", {
            className: jf()("SkyblockReachLogRibbon", kk.className, "Earned")
          }), Dk(kk.legendKey)]
        }, kk.className))), (0, Qf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Dk("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Dk("skyblockGame:reachLogLegendGlimmer")]
        }), ik && (0, Qf.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Dk("skyblockGame:reachLogHaloTitle"),
          children: [(0, Qf.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Dk("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Zb(kk) {
      let {
        returner: ek
      } = kk;
      return (0, Qf.jsxs)("div", {
        className: jf()("SkyblockReachLogReturner", ek.back && "Back"),
        children: [(0, Qf.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: ek.itemName,
            amount: 0
          })
        }), (0, Qf.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: ek.line
        })]
      })
    }

    function Ob(kk) {
      let {
        fish: ek,
        letGoShown: ik
      } = kk;
      const {
        t: Dk
      } = (0, If.D)();
      return (0, Qf.jsxs)("li", {
        className: jf()("SkyblockReachLogCard", ek.caught ? "Caught" : "Unknown", ek.marks >= 3 && "GoldCard", ek.fresh && "Fresh", ek.visitor && "Visitor"),
        children: [ek.visitor && (0, Qf.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Dk("skyblockGame:reachLogVisitor")
        }), ek.fresh && Array.from({
          length: 4
        }, ((kk, ek) => (0, Qf.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, ek))), (0, Qf.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [ek.halo && (0, Qf.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Dk("skyblockGame:reachLogHaloTitle")
          }), (0, Qf.jsx)(Ff.c, {
            itemName: ek.itemName,
            amount: 0
          }), ek.glimmer && (0, Qf.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Dk("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Qf.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: ek.name
        }), (0, Qf.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: ek.chance
        }), (0, Qf.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: ek.best
        }), (0, Qf.jsx)(Tb, {
          fish: ek,
          letGoShown: ik
        })]
      })
    }

    function gb(kk) {
      let {
        page: ek,
        letGoShown: ik,
        hiddenWaters: Dk
      } = kk;
      const {
        t: fk
      } = (0, If.D)();
      return ek.awake ? (0, Qf.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: ek.fish.map((kk => (0, Qf.jsx)(Ob, {
          fish: kk,
          letGoShown: ik
        }, kk.itemName)))
      }) : (0, Qf.jsxs)(Qf.Fragment, {
        children: [(0, Qf.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: fk("skyblockGame:reachLogAsleep")
        }), (0, Qf.jsx)(Wb, {
          view: Dk,
          island: ek.id
        })]
      })
    }

    function Gb(kk) {
      var ek, ik;
      let {
        controller: Dk,
        regulars: fk,
        hiddenWaters: Sk
      } = kk;
      const bk = (0, zf.e)(ID, Dk.getSnapshot()),
        rk = function(kk) {
          return (0, zf.e)(mf, kk.getSnapshot())
        }(Sk),
        Pk = (0, zf.e)(ff, fk.getSnapshot()),
        {
          t: mk
        } = (0, If.D)(),
        Mk = Zf();
      if (!bk.enabled) return null;
      const Kk = null !== (ek = bk.pages.find((kk => kk.id === bk.selected))) && void 0 !== ek ? ek : null;
      return (0, Qf.jsx)(Bf.e, {
        show: bk.open,
        close: Dk.dismiss,
        togglePointerLock: !1,
        className: jf()("SkyblockSkillsOverlay", Pk.open && "SkyblockReachLogUnderLedger"),
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Mk,
          onKeyDown: of,
          children: [(0, Qf.jsx)(Eb, {
            island: null !== (ik = null === Kk || void 0 === Kk ? void 0 : Kk.id) && void 0 !== ik ? ik : null
          }), (0, Qf.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: mk("skyblockGame:reachLogTitle")
              }), (0, Qf.jsx)("p", {
                children: mk("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Qf.jsx)(ab, {
              view: rk
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: Dk.dismiss
            })]
          }), (0, Qf.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: bk.pages.map((kk => {
              const ek = kk.id === bk.selected,
                ik = kk.fish.some((kk => kk.fresh));
              return (0, Qf.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ek,
                "data-pad-tab": !0,
                "data-pad-selected": ek ? "true" : void 0,
                className: jf()("SkyblockReachLogTab", `Island-${kk.id}`, ek && "Selected", !kk.awake && "Asleep", kk.gold && "GoldPage", ik && "HasNews"),
                onClick: () => {
                  Dk.selectPage(kk.id)
                },
                children: [(0, Qf.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                }), kk.awake && (0, Qf.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: mk("skyblockGame:reachLogCaughtCount", {
                    caught: kk.caught,
                    total: kk.total
                  })
                })]
              }, kk.id)
            }))
          }), (0, Qf.jsxs)("div", {
            className: jf()("SkyblockReachLogPage", null !== Kk && `Island-${Kk.id}`),
            role: "tabpanel",
            children: [null !== Kk && (0, Qf.jsx)(gb, {
              page: Kk,
              letGoShown: bk.letGoShown,
              hiddenWaters: rk
            }), !0 === (null === Kk || void 0 === Kk ? void 0 : Kk.awake) && null !== Kk.returner && (0, Qf.jsx)(Zb, {
              returner: Kk.returner
            }), !0 === (null === Kk || void 0 === Kk ? void 0 : Kk.awake) && (0, Qf.jsx)(qb, {
              controller: fk,
              island: Kk.id
            })]
          }), (0, Qf.jsx)("footer", {
            className: jf()("SkyblockReachLogFooter", null !== Kk && `Island-${Kk.id}`, !0 === (null === Kk || void 0 === Kk ? void 0 : Kk.gold) && "GoldPage"),
            children: !0 === (null === Kk || void 0 === Kk ? void 0 : Kk.gold) ? (0, Qf.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: mk("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Qf.jsxs)(Qf.Fragment, {
              children: [(0, Qf.jsx)(ob, {
                letGoShown: bk.letGoShown,
                haloShown: !0 === (null === Kk || void 0 === Kk ? void 0 : Kk.fish.some((kk => kk.halo)))
              }), (0, Qf.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: mk("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Nb = ik(4766);

    function Rb(kk) {
      let {
        conversation: ek,
        completedLabel: ik
      } = kk;
      return (0, Qf.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Qf.jsxs)("header", {
          children: [(0, Qf.jsx)("h3", {
            children: ek.questName
          }), ek.completed && (0, Qf.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ik
          })]
        }), ek.lines.map((kk => (0, Qf.jsx)(Nb.e, {
          display: kk.display
        }, kk.key)))]
      })
    }

    function Jb(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(Kf, ek.getSnapshot()), fk = Zf();
      if (!Dk.enabled) return null;
      const Sk = !Dk.loading && 0 === Dk.conversations.length;
      return (0, Qf.jsx)(Bf.e, {
        show: Dk.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ik("skyblockDialogue:title")
              }), (0, Qf.jsx)("p", {
                children: ik("skyblockDialogue:intro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsxs)("div", {
            className: jf()("SkyblockDialogueBody", {
              SingleColumn: null !== Dk.questFocus || 0 === Dk.characters.length
            }),
            children: [null === Dk.questFocus && Dk.characters.length > 0 && (0, Qf.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Dk.characters.map((kk => (0, Qf.jsx)(Tf.f, {
                className: jf()("SkyblockDialogueCharacter", {
                  Selected: kk.selected
                }),
                onClick: () => {
                  ek.selectCharacter(kk.id)
                },
                children: (0, Qf.jsx)(uf.e, {
                  text: kk.styling
                })
              }, kk.id)))
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Dk.questFocus && (0, Qf.jsx)(Tf.f, {
                className: "SkyblockDialogueBack",
                onClick: ek.showCharacters,
                children: ik("skyblockDialogue:allCharacters")
              }), Dk.loading && (0, Qf.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ik("skyblockDialogue:loading")
              }), Sk && (0, Qf.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ik(null === Dk.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Dk.conversations.map((kk => (0, Qf.jsx)(Rb, {
                conversation: kk,
                completedLabel: Dk.completedLabel
              }, kk.questId)))]
            })]
          })]
        })
      })
    }

    function kr(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(wf, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf();
      return ik.enabled ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Dk("skyblockGame:autographBook")
              }), (0, Qf.jsx)("p", {
                children: Dk("skyblockGame:autographBookIntro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              onClick: ek.dismiss
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Qf.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Qf.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Qf.jsx)("strong", {
                  children: ik.total
                }), (0, Qf.jsx)("span", {
                  children: Dk("skyblockGame:autographTotal")
                })]
              }), (0, Qf.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Qf.jsx)("strong", {
                  children: ik.rankTotal
                }), (0, Qf.jsx)("span", {
                  children: Dk("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ik.entries.length ? (0, Qf.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Dk("skyblockGame:autographBookEmpty")
            }) : (0, Qf.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ik.entries.map((kk => (0, Qf.jsxs)("li", {
                className: jf()("SkyblockAutograph", {
                  Ranked: null !== kk.rank
                }),
                style: null === kk.rank ? void 0 : {
                  color: kk.rank.colour
                },
                children: [null !== kk.rank && (0, Qf.jsx)(lS.d, {
                  className: "SkyblockAutographRankIcon",
                  name: kk.rank.icon,
                  kit: (0, lS.f)(kk.rank.icon)
                }), (0, Qf.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Qf.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: kk.name
                  }), (0, Qf.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== kk.rank && (0, Qf.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: kk.rank.label
                    }), (0, Qf.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: kk.signedOn
                    })]
                  })]
                })]
              }, kk.key)))
            })]
          })]
        })
      }) : null
    }
    const er = (0, sk.memo)((function(kk) {
        let {
          controller: ek
        } = kk;
        return (0, Qf.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: ek.display.mountWaypoint,
          children: [(0, Qf.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Qf.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Qf.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Qf.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Qf.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Qf.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      ir = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Dr(kk) {
      return "next" === kk.phase ? "\u2192" : ir[kk.kind]
    }
    const fr = (0, sk.memo)((function(kk) {
      let {
        controller: ek,
        display: ik
      } = kk;
      const Dk = (0, zf.e)(Ki, ek.getNotificationSnapshot()),
        [fk, Sk] = (0, sk.useState)(!1);
      return (0, zf.c)("qteStateUpdated", (kk => {
        Sk(kk.isActive)
      })), (0, Qf.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (fk ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Dk && (0, Qf.jsxs)("div", {
          className: `SkyblockQuestNotification ${Dk.kind} ${Dk.phase}`,
          style: {
            "--quest-notification-duration": `${Dk.durationMs}ms`,
            ...Dk.accent && {
              "--quest-notification-accent": Dk.accent
            }
          },
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Dk.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Dr(Dk)
            }), Dk.iconItem && (0, Qf.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Qf.jsx)(Ff.c, {
                itemName: Dk.iconItem,
                amount: 0
              })
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Dk.title
            }), (0, Qf.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Qf.jsx)(MS.e, {
                text: Dk.name
              })
            }), Dk.description && (0, Qf.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Qf.jsx)(MS.e, {
                text: Dk.description
              })
            }), Dk.reward && (0, Qf.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Qf.jsx)(MS.e, {
                text: Dk.reward
              })
            })]
          })]
        }, Dk.token), (null === Dk || void 0 === Dk ? void 0 : Dk.waypointNameKey) && (0, Qf.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Dk.waypointNameKey,
          "data-notification-token": Dk.token,
          ref: ik.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Dk.token}`)]
      })
    }));

    function Sr(kk) {
      const ek = parseInt(kk.replace("#", ""), 16);
      return `${ek>>16&255}, ${ek>>8&255}, ${255&ek}`
    }
    const br = (0, sk.memo)((function(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(ti, ek.getSnapshot());
      if (!Dk) return null;
      const fk = "arrival" === Dk.phase;
      return (0, Qf.jsxs)("div", {
        className: jf()("SkyblockPortalTransit", {
          Departure: !fk,
          Arrival: fk
        }),
        style: {
          "--portal-rgb": Sr(Dk.colour),
          "--portal-duration": `${Dk.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Qf.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Qf.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            ek.finishArrival(Dk.token)
          }
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Qf.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !fk && (0, Qf.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ik("skyblockGame:portalTransitHeading")
          }), (0, Qf.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ik(Dk.zoneNameKey)
          })]
        })]
      }, Dk.token)
    }));

    function rr() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Pr() {
      const kk = document.querySelector(".SkyblockHudCoins"),
        ek = null === kk || void 0 === kk ? void 0 : kk.getBoundingClientRect();
      return ek && ek.width > 0 ? {
        x: ek.left + Math.min(ek.width, 24) / 2,
        y: ek.top + ek.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function mr(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }
    }

    function Mr() {
      var kk;
      const ek = null === (kk = document.querySelector(".HotBar")) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
      return ek && ek.width > 0 ? mr(ek) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Kr(kk) {
      let {
        items: ek,
        origins: ik,
        target: Dk
      } = kk;
      return (0, Qf.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: ek.map(((kk, ek) => {
          const fk = ik[ek];
          return (0, Qf.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${fk.x}px`,
              top: `${fk.y}px`,
              "--item-dx": Dk.x - fk.x + "px",
              "--item-dy": Dk.y - fk.y + "px",
              "--item-delay": 2e3 + 160 * ek + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Qf.jsx)(Ff.c, {
              itemName: kk.dailyRewardItemName,
              amount: 0
            })
          }, kk.dailyRewardItemName)
        }))
      })
    }

    function xr(kk, ek) {
      const ik = -Math.PI / 2 + 1.25 * (kk / (ek - 1) * 2 - 1),
        Dk = 70 + kk % 3 * 22;
      return {
        x: Math.cos(ik) * Dk,
        y: Math.sin(ik) * Dk * .7
      }
    }

    function nr(kk) {
      let {
        origin: ek,
        target: ik,
        count: Dk
      } = kk;
      const fk = [];
      for (let Sk = 0; Sk < Dk; Sk++) {
        const kk = xr(Sk, Dk);
        fk.push((0, Qf.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${ek.x}px`,
            top: `${ek.y}px`,
            "--coin-bx": `${kk.x}px`,
            "--coin-by": `${kk.y}px`,
            "--coin-dx": ik.x - ek.x + "px",
            "--coin-dy": ik.y - ek.y + "px",
            "--coin-delay": `${Zi(Sk,Dk)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Qf.jsx)(Ff.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Sk))
      }
      return (0, Qf.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: fk
      })
    }

    function Ur(kk) {
      let {
        day: ek
      } = kk;
      const ik = dk[ek - 1];
      return (0, Qf.jsxs)(Qf.Fragment, {
        children: [(0, Qf.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Qf.jsx)(Ff.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, qf.e)(ik.dailyRewardCoins)]
        }), ik.dailyRewardItems.map((kk => (0, Qf.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Qf.jsx)(Ff.c, {
            itemName: kk.dailyRewardItemName,
            amount: 0
          }), "\xd7", kk.dailyRewardItemAmount]
        }, kk.dailyRewardItemName)))]
      })
    }

    function Hr(kk) {
      let {
        day: ek
      } = kk;
      const ik = Fk(ek);
      return (0, Qf.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: dk.map(((kk, Dk) => {
          const fk = Dk + 1;
          return (0, Qf.jsxs)("li", {
            className: jf()("SkyblockDailyRewardTile", {
              Claimed: fk < ek && fk !== ik,
              Today: fk === ek,
              Tomorrow: fk === ik,
              Jackpot: fk === Vk
            }),
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: fk
            }), (0, Qf.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Qf.jsx)(Ff.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, qf.e)(kk.dailyRewardCoins)]
            }), kk.dailyRewardItems.map((kk => (0, Qf.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Qf.jsx)(Ff.c, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))]
          }, fk)
        }))
      })
    }

    function wr(kk) {
      let {
        view: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, sk.useRef)(null), fk = (0, sk.useRef)(null), [Sk, bk] = (0, sk.useState)(null);
      (0, sk.useLayoutEffect)((() => {
        var kk;
        const ek = null === (kk = Dk.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (ek) {
          var ik, Sk;
          const kk = Array.from(null !== (ik = null === (Sk = fk.current) || void 0 === Sk ? void 0 : Sk.children) && void 0 !== ik ? ik : [], (kk => mr(kk.getBoundingClientRect())));
          bk({
            origin: mr(ek),
            target: Pr(),
            itemOrigins: kk,
            itemTarget: Mr()
          })
        }
      }), []);
      const rk = Fk(ek.day),
        Pk = function(kk, ek) {
          const [ik, Dk] = (0, sk.useState)((() => rr() ? kk : 0));
          return (0, sk.useEffect)((() => {
            if (rr()) return;
            const ik = performance.now();
            let fk = 0;
            const Sk = bk => {
              const rk = Math.min(Math.max((bk - ik) / ek, 0), 1);
              Dk(Math.round(kk * (1 - (1 - rk) ** 3))), rk < 1 && (fk = requestAnimationFrame(Sk))
            };
            return fk = requestAnimationFrame(Sk), () => {
              cancelAnimationFrame(fk)
            }
          }), [kk, ek]), ik
        }(ek.coins, 450);
      return (0, Qf.jsxs)("div", {
        className: jf()("SkyblockDailyReward", {
          Jackpot: ek.day === Vk
        }),
        style: {
          "--daily-duration": `${ek.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Qf.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Qf.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ik("skyblockGame:dailyRewardTitle")
            }), (0, Qf.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ik("skyblockGame:dailyRewardDay", {
                day: String(ek.day)
              })
            })]
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Dk,
            children: [(0, Qf.jsx)(Ff.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Qf.jsxs)("span", {
              children: ["+", (0, qf.e)(Pk)]
            })]
          }), ek.items.length > 0 && (0, Qf.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: fk,
            children: ek.items.map((kk => (0, Qf.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Qf.jsx)(Ff.c, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))
          }), (0, Qf.jsx)(Hr, {
            day: ek.day
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ik("skyblockGame:dailyRewardComeBack"), (0, Qf.jsx)(Ur, {
              day: rk
            })]
          })]
        }), null !== Sk && (0, Qf.jsx)(nr, {
          origin: Sk.origin,
          target: Sk.target,
          count: ek.flyingCoins
        }), null !== Sk && Sk.itemOrigins.length === ek.items.length && (0, Qf.jsx)(Kr, {
          items: ek.items,
          origins: Sk.itemOrigins,
          target: Sk.itemTarget
        })]
      })
    }
    const lr = (0, sk.memo)((function(kk) {
        let {
          controller: ek
        } = kk;
        const ik = (0, zf.e)(ci, ek.getSnapshot());
        return ik ? (0, Qf.jsx)(wr, {
          view: ik
        }, ik.token) : null
      })),
      pr = "Gold Coin";

    function yr(kk) {
      return 650 + 220 * kk
    }

    function Yr(kk) {
      return {
        "--letter-delay": `${yr(kk)}ms`,
        "--letter-land": `${yr(kk)+300}ms`
      }
    }

    function Lr(kk) {
      let {
        letterCount: ek
      } = kk;
      return (0, Qf.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Qf.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Qf.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Qf.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: ek
        }, ((kk, ek) => (0, Qf.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Yr(ek),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, ek)))]
      })
    }

    function Cr(kk) {
      var ek, ik, Dk;
      let {
        letter: fk,
        index: Sk
      } = kk;
      const {
        t: bk
      } = (0, If.D)(), rk = null !== (ek = null === (ik = fk.items[0]) || void 0 === ik ? void 0 : ik.itemName) && void 0 !== ek ? ek : pr;
      return (0, Qf.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Yr(Sk),
        children: [(0, Qf.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Qf.jsx)(Ff.c, {
            itemName: rk,
            amount: 0
          })
        }), (0, Qf.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: bk(fk.reasonKey, null !== (Dk = fk.reasonParams) && void 0 !== Dk ? Dk : void 0)
        }), (0, Qf.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [fk.coins > 0 && (0, Qf.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Qf.jsx)(Ff.c, {
              itemName: pr,
              amount: 0
            }), "+", (0, qf.e)(fk.coins)]
          }), fk.items.map(((kk, ek) => (0, Qf.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Qf.jsx)(Ff.c, {
              itemName: kk.itemName,
              amount: 0
            }), kk.label, " \xd7", kk.amount]
          }, ek)))]
        })]
      })
    }

    function Ar(kk) {
      let {
        view: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)();
      return (0, Qf.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${ek.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${yr(ek.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Qf.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Qf.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Qf.jsx)(Lr, {
              letterCount: ek.letters.length
            }), (0, Qf.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ik("skyblockGame:mailboxTitle")
            })]
          }), (0, Qf.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: ek.letters.map(((kk, ek) => (0, Qf.jsx)(Cr, {
              letter: kk,
              index: ek
            }, ek)))
          }), ek.more > 0 && (0, Qf.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ik("skyblockGame:mailboxMore", {
              count: String(ek.more)
            })
          })]
        })
      })
    }
    const jr = (0, sk.memo)((function(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(gi, ek.getSnapshot());
      return ik ? (0, Qf.jsx)(Ar, {
        view: ik
      }, ik.token) : null
    }));

    function sr(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(tD, ek.getSnapshot());
      if (null === Dk) return null;
      const fk = Dk.fullSet ? "empty" === Dk.fuelState ? {
        text: ik("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ik("skyblockGame:magmawardHudFullSet", {
          worn: String(Dk.wornCount)
        }),
        tone: "partial"
      };
      return (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsxs)("div", {
          className: jf()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Dk.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Dk.fullSet,
            "SkyblockMagmawardHud-armed": Dk.fullSet && "empty" !== Dk.fuelState
          }),
          children: [null !== Dk.flare && (0, Qf.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Dk.flare}`
          }, `flare:${Dk.flareToken}`), (0, Qf.jsx)("div", {
            className: jf()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Dk.setLit
            }),
            children: Dk.pieces.map(((kk, ek) => (0, Qf.jsx)("div", {
              className: jf()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: kk.worn,
                SkyblockMagmawardPieceJustWorn: kk.justWorn
              }),
              children: (0, Qf.jsx)(Ff.c, {
                itemName: kk.itemName,
                amount: 0
              })
            }, `${ek}:${kk.wornToken}`)))
          }, `pieces:${Dk.setLitToken}`), (0, Qf.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Qf.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Qf.jsxs)("div", {
              className: jf()("SkyblockMagmawardFuelCounter", Dk.pulse && `SkyblockMagmawardFuelCounter-${Dk.pulse}`),
              children: [(0, Qf.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Qf.jsx)(Ff.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Qf.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Dk.fuel
              })]
            }, `counter:${Dk.pulseToken}`), "burn" === Dk.pulse && (0, Qf.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Dk.pulseToken}`)]
          }), fk && (0, Qf.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${fk.tone} SmallTextBold`,
            children: fk.text
          })]
        })
      })
    }

    function dr(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik,
        selectedLanguage: Dk
      } = (0, If.D)(), fk = (0, zf.e)(BD, ek.getSnapshot());
      return null === fk ? null : (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsxs)("div", {
          className: jf()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: fk.inRange
          }),
          style: {
            "--glowtide-colour": fk.colour
          },
          "aria-label": ik("skyblockGame:glowtideChipLabel"),
          children: [(0, Qf.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), fk.inRange ? (0, Qf.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ik("skyblockGame:glowtideChipInRange")
          }, `call:${fk.inRangeToken}`) : (0, Qf.jsxs)(Qf.Fragment, {
            children: [(0, Qf.jsx)("div", {
              ref: ek.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Qf.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ik("skyblockGame:waypointDistance", {
                distance: Ck(fk.distance, Dk.code)
              })
            })]
          })]
        })
      })
    }

    function Vr(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(TD, ek.getSnapshot());
      return null === Dk ? null : (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsxs)("div", {
          className: jf()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Dk.full
          }),
          "aria-label": ik("skyblockGame:glowMeterLabel", {
            fill: String(Dk.fill),
            vK: String(Dk.vK)
          }),
          children: [Dk.burst && (0, Qf.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Dk.burstToken}`), (0, Qf.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Qf.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Dk.ratio})`
              }
            }), Dk.gained && (0, Qf.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Dk.gainToken}`), Dk.full && Array.from({
              length: 5
            }, ((kk, ek) => (0, Qf.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, ek)))]
          }), Dk.full && Dk.rares.map((kk => (0, Qf.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Qf.jsx)(Ff.c, {
              itemName: kk,
              amount: 0
            })
          }, kk))), Dk.ready && (0, Qf.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Qf.jsx)("span", {
              children: ik("skyblockGame:glowMeterReady")
            })
          }, `ready:${Dk.fullToken}`)]
        })
      })
    }

    function Fr(kk) {
      let {
        controller: ek
      } = kk;
      const {
        t: ik
      } = (0, If.D)(), Dk = (0, zf.e)(ZD, ek.getSnapshot());
      if (null === Dk) return null;
      const fk = "waiting" === Dk.phase,
        Sk = {
          animationDuration: `${Dk.waitMs}ms`,
          animationDelay: -Dk.elapsedMs + "ms"
        },
        bk = fk ? void 0 : {
          animationDuration: `${Dk.waitMs}ms`
        };
      return (0, Qf.jsxs)("div", {
        className: fk ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [fk && (0, Qf.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((kk, ek) => (0, Qf.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, ek))), (0, Qf.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Sk
          }), (0, Qf.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Qf.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Qf.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Sk
            })]
          }), (0, Qf.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Qf.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: bk,
          children: ik(Dk.line)
        }, Dk.lineIndex)]
      }, Dk.token)
    }

    function ur(kk) {
      let {
        chart: ek,
        showHere: ik,
        className: Dk
      } = kk;
      return (0, Qf.jsx)("div", {
        className: jf()("SkyblockTideChartGrid", Dk, null !== ek.pictureName && "Complete"),
        "aria-hidden": "true",
        children: ek.cells.map(((kk, Dk) => {
          const fk = 0 !== (ek.pulseCells & 1 << Dk),
            Sk = ek.castCell === Dk;
          return (0, Qf.jsx)("span", {
            className: jf()("SkyblockTideChartCell", `Cell-${kk}`, fk && "Pulse", Sk && "Cast", ik && ek.hereCell === Dk && "Here")
          }, `${Dk}:${fk?`p${ek.pulseToken}`:""}:${Sk?`c${ek.castToken}`:""}`)
        }))
      })
    }

    function qr(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(gD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = ik.chip;
      if (!ik.enabled || null === fk) return null;
      const Sk = Dk("skyblockGame:tideChartsChipLabel", {
        island: fk.islandName,
        lit: String(fk.lit),
        ink: String(fk.ink)
      });
      return (0, Qf.jsx)(df.h, {
        placement: "statBars",
        children: (0, Qf.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: jf()("SkyblockTideChartsChip", ik.open && "Open", null !== fk.pictureName && "Complete"),
          "aria-label": Sk,
          title: Sk,
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: ek.toggle,
          children: [(0, Qf.jsx)(ur, {
            chart: fk,
            showHere: !1,
            className: "Mini"
          }), (0, Qf.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [fk.lit, "/", fk.ink]
          })]
        })
      })
    }

    function Ir(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, zf.e)(gD, ek.getSnapshot()),
        {
          t: Dk
        } = (0, If.D)(),
        fk = Zf(),
        Sk = ik.card;
      return ik.enabled && null !== Sk ? (0, Qf.jsx)(Bf.e, {
        show: ik.open,
        close: ek.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Qf.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: fk,
          onKeyDown: of,
          children: [(0, Qf.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Qf.jsxs)("div", {
              children: [(0, Qf.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Dk("skyblockGame:tideChartsTitle")
              }), (0, Qf.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Dk("skyblockGame:tideChartsIntro")
              })]
            }), (0, Qf.jsx)(Tf.n, {
              padIgnore: !0,
              ariaLabel: Dk("skyblockGame:tideChartsClose"),
              onClick: ek.dismiss
            })]
          }), ik.tabs.length > 1 && (0, Qf.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Dk("skyblockGame:tideChartsIslands"),
            children: ik.tabs.map((kk => (0, Qf.jsx)("button", {
              type: "button",
              className: jf()("SkyblockTideChartsTab", kk.selected && "Selected"),
              "aria-pressed": kk.selected,
              onClick: () => {
                ek.Un(kk.island)
              },
              children: kk.name
            }, kk.island)))
          }), (0, Qf.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Qf.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Sk.gridLabel,
              children: (0, Qf.jsx)(ur, {
                chart: Sk,
                showHere: !0,
                className: "Large"
              })
            }), (0, Qf.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Qf.jsx)("h3", {
                children: Sk.islandName
              }), (0, Qf.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Sk.litText
              }), null === Sk.pictureName ? (0, Qf.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Dk("skyblockGame:tideChartsPictureHidden")
              }) : (0, Qf.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Dk("skyblockGame:tideChartsPictureRevealed", {
                  picture: Sk.pictureName
                })
              }, Sk.pictureName), (0, Qf.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Qf.jsxs)("li", {
                  children: [(0, Qf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Dk("skyblockGame:tideChartsLegendLit")]
                }), (0, Qf.jsxs)("li", {
                  children: [(0, Qf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Dk("skyblockGame:tideChartsLegendClear")]
                }), null !== Sk.hereCell && (0, Qf.jsxs)("li", {
                  children: [(0, Qf.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Dk("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Qf.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Qf.jsx)("span", {
                  children: ik.turnsText
                }), (0, Qf.jsx)("span", {
                  children: ik.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function zr(kk) {
      var ek;
      let {
        controller: ik
      } = kk;
      const {
        selectedLanguage: Dk
      } = (0, If.D)(), fk = Dk.code;
      (0, sk.useEffect)((() => {
        ik.setTranslator(((kk, ek) => (0, If.x)(fk, kk, ek)), fk, ((kk, ek) => (0, If.u)(fk, kk, ek)))
      }), [ik, fk]);
      const Sk = (0, zf.e)(xk, ik.map.getSnapshot()),
        {
          openInGameMenuName: bk
        } = (0, sf.n)(["openInGameMenuName"]);
      return (0, Qf.jsxs)(Qf.Fragment, {
        children: [(0, Qf.jsx)(fr, {
          controller: ik.quests,
          display: ik.navigation.display
        }), Sk.enabled && !bk && (0, Qf.jsx)(rS, {
          controller: ik.navigation
        }), (0, Qf.jsx)(vf, {
          controller: ik,
          minimap: Sk.enabled && (null === (ek = Sk.presentation) || void 0 === ek ? void 0 : ek.minimap) && (0, Qf.jsx)(bS, {
            view: Sk.presentation.minimap,
            navigation: ik.navigation,
            controller: ik.map
          }),
          children: (0, Qf.jsx)(wS, {
            controller: ik.quests,
            surface: "hud"
          })
        }), (0, Qf.jsx)(er, {
          controller: ik.navigation
        }), (0, Qf.jsx)(br, {
          controller: ik.portalTransit
        }), (0, Qf.jsx)(lr, {
          controller: ik.dailyReward
        }), (0, Qf.jsx)(jr, {
          controller: ik.mailbox
        }), (0, Qf.jsx)(sr, {
          controller: ik.magmaward
        }), (0, Qf.jsx)(dr, {
          controller: ik.glowtide
        }), (0, Qf.jsx)(wb, {
          controller: ik.passage
        }), (0, Qf.jsx)(qr, {
          controller: ik.tideCharts
        }), (0, Qf.jsx)(Vr, {
          controller: ik.glowMeter
        }), (0, Qf.jsx)(Vb, {
          controller: ik.reachLog
        }), (0, Qf.jsx)(Fr, {
          controller: ik.hushWait
        }), (0, Qf.jsx)(Ab, {
          controller: ik.lampLight
        }), (0, Qf.jsx)(PS, {
          controller: ik.skills,
          surface: "hud"
        })]
      })
    }

    function Qr(kk) {
      let {
        controller: ek
      } = kk;
      return (0, Qf.jsxs)(Qf.Fragment, {
        children: [(0, Qf.jsx)(SS, {
          controller: ek.map,
          navigation: ek.navigation
        }), (0, Qf.jsx)(PS, {
          controller: ek.skills,
          surface: "menu"
        }), (0, Qf.jsx)(wS, {
          controller: ek.quests,
          surface: "menu"
        }), (0, Qf.jsx)(NS, {
          controller: ek.dungeons
        }), (0, Qf.jsx)(kb, {
          controller: ek.collections
        }), (0, Qf.jsx)(Db, {
          controller: ek.questGraph
        }), (0, Qf.jsx)(Pb, {
          controller: ek.forge
        }), (0, Qf.jsx)(Ub, {
          controller: ek.smuggler
        }), (0, Qf.jsx)(sb, {
          controller: ek.keepersChair,
          lampLight: ek.lampLight
        }), (0, Qf.jsx)(Gb, {
          controller: ek.reachLog,
          regulars: ek.regulars,
          hiddenWaters: ek.hiddenWaters
        }), (0, Qf.jsx)(Ib, {
          controller: ek.regulars
        }), (0, Qf.jsx)(pb, {
          controller: ek.passage
        }), (0, Qf.jsx)(Ir, {
          controller: ek.tideCharts
        }), (0, Qf.jsx)(Jb, {
          controller: ek.dialogue
        }), (0, Qf.jsx)(kr, {
          controller: ek.autographs
        })]
      })
    }
    var vr = ik(36341);
    const Er = DD + MD;

    function hr(kk, ek, ik, Dk, fk) {
      const Sk = [],
        bk = [],
        rk = ik => {
          const Dk = kk.playSound(ek, ik.sound, ik.volume, ik.rate);
          Dk && (bk.push(Dk), void 0 !== ik.cutAfter && Sk.push(setTimeout((() => {
            Dk.fade(Dk.getVolume(), 0, 300)
          }), ik.cutAfter)))
        };
      for (const Pk of function(kk, ek) {
          const ik = [{
            sound: "rpgKnifeSlice1",
            beat: DD,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: DD,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: DD,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: DD,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: DD,
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
            sound: (0, vr.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Er + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, vr.g)("bigDrumSwish"),
            beat: Er + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Er + 60,
            lead: 180,
            volume: .5 + .06 * kk,
            rate: .82 + .07 * kk
          }];
          return kk >= 4 && ik.push({
            sound: "exp_levelup",
            beat: Er + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), ek && ik.push({
            sound: "trumpetFlare",
            beat: Er + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ik.push({
            sound: "harp_pling",
            beat: fD,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ik
        }(ik, Dk)) fk ? Sk.push(setTimeout((() => {
        rk(Pk)
      }), Math.max(0, Pk.beat - Pk.lead / Pk.rate))) : Pk.beat !== DD && "magicAccent2" !== Pk.sound && "trumpetFlare" !== Pk.sound || rk(Pk);
      return () => {
        for (const kk of Sk) clearTimeout(kk);
        for (const kk of bk) kk.fade(kk.getVolume(), 0, 120)
      }
    }
    class ar {
      constructor(kk) {
        this.deps = kk, this.pending = new Map, this.localHook = null
      }
      hookWaiting(kk, ek) {
        this.pending.delete(kk);
        const ik = this.deps.now();
        if (null === ek) {
          var Dk;
          if ((null === (Dk = this.localHook) || void 0 === Dk ? void 0 : Dk.hookId) === kk) {
            const kk = ik >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(kk)
          }
          return
        }
        const fk = ik + ek;
        this.settle(kk, fk) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(kk, {
          untilMs: ik + 1e3,
          biteAtMs: fk
        }))
      }
      getLocalHook() {
        var kk, ek;
        return null !== (kk = null === (ek = this.localHook) || void 0 === ek ? void 0 : ek.hookId) && void 0 !== kk ? kk : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const kk = this.deps.now();
        for (const [ek, {
            untilMs: ik,
            biteAtMs: Dk
          }] of this.pending)(this.settle(ek, Dk) || kk > ik) && this.pending.delete(ek)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(kk, ek) {
        const ik = this.deps.getLineOwner(kk);
        if (null === ik) return !1;
        if (!this.deps.isLocalPlayer(ik)) return !0;
        if (this.localHook = {
            hookId: kk,
            biteAtMs: ek
          }, !this.deps.isHushWaiting()) {
          const [ek, ik] = this.deps.getHookPosition(kk);
          this.deps.onCastLanded(ek, ik)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Wr = ik(4189);
    const tr = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Xr = {
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
    class Br {
      constructor(kk) {
        this.deps = kk, this.tell = null
      }
      receiveTell(kk) {
        let {
          biteTellTier: ek
        } = kk;
        this.tell = {
          tier: ek,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(kk) {
        const ek = this.tell;
        if (this.tell = null, !kk) return;
        const ik = null !== ek && this.deps.now() - ek.atMs <= 3e3 ? ek.tier : 0;
        this.deps.vibrate(tr[ik])
      }
      burstAtHook() {
        const kk = this.tell,
          ek = this.deps.getLocalHookPosition();
        null === kk || kk.burst || null === ek || (kk.burst = !0, this.deps.playParticles(function(kk, ek) {
          let [ik, Dk, fk] = ek;
          const {
            count: Sk,
            rise: bk,
            colour: rk
          } = Xr[kk], [Pk, mk, Mk] = rk;
          return {
            texture: "glint",
            pos1: [ik - .3, Dk, fk - .3],
            pos2: [ik + .3, Dk + .2, fk + .3],
            dir1: [-.6, bk, -.6],
            dir2: [.6, 1.4 * bk, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Sk,
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
              minColor: [Pk, mk, Mk, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Pk, mk, Mk, 0],
              maxColor: [Pk, mk, Mk, 0]
            }],
            blendMode: Wr.h.Add,
            hideDist: 48
          }
        }(kk.tier, ek)))
      }
    }
    var cr = ik(1223),
      Tr = ik(1895),
      or = ik(38);

    function Zr(kk, ek) {
      return [{
        timeFraction: 0,
        minColor: [255 * kk[0], 255 * kk[1], 255 * kk[2], 1],
        maxColor: [255 * ek[0], 255 * ek[1], 255 * ek[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Or = [0, 0, 0],
      gr = {
        texture: "glint",
        mipmaps: !1,
        vK: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Or,
        dir2: Or,
        blendMode: Wr.h.OneOne
      },
      Gr = {
        ...gr,
        colorGradients: Zr([1, .88, .38], [1, .65, .15])
      },
      Nr = {
        ...gr,
        colorGradients: Zr([.55, .95, 1], [.9, 1, 1])
      },
      Rr = [.5, .5, .5],
      Jr = {
        texture: "glint",
        mipmaps: !1,
        vK: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Zr([1, .12, .12], [1, .35, .2]),
        blendMode: Wr.h.OneOne
      };
    class kP {
      constructor() {
        this.drops = new Map
      }
      BU(kk, ek) {
        if ("overflowFlash" === ek.kind) {
          const [ik, Dk, fk] = ek.position, Sk = kk.createParticles(Jr, {
            pos: [ik, Dk, fk],
            half: Rr
          });
          return Sk.emit(18), void Sk.stop()
        }
        this.drops.has(ek.itemId) || this.drops.set(ek.itemId, {
          owner: ek.owner,
          cosmetic: ek.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Px(kk) {
        if (0 === this.drops.size) return;
        const ek = performance.now(),
          ik = kk.getCameraPosition();
        let Dk = 0;
        for (const Sk of this.drops.values()) null !== Sk.particles && Dk++;
        for (const [Sk, bk] of this.drops) {
          const rk = kk.getPositionView(Sk);
          if (null === rk) {
            var fk;
            if (bk.seen || ek - bk.markedAt > 5e3) null !== bk.particles && Dk--, null === (fk = bk.particles) || void 0 === fk || fk.stop(), this.drops.delete(Sk);
            continue
          }
          bk.cosmetic || !kk.isLocalPlayer(bk.owner) || bk.pickupDelayCleared || (kk.clearPickupDelay(Sk), bk.pickupDelayCleared = !0);
          const Pk = bk.lastPosition,
            mk = bk.seen && (rk[0] - Pk[0]) ** 2 + (rk[1] - Pk[1]) ** 2 + (rk[2] - Pk[2]) ** 2 > 4e-4,
            Mk = (rk[0] - ik[0]) ** 2 + (rk[1] - ik[1]) ** 2 + (rk[2] - ik[2]) ** 2 < 2025;
          bk.seen = !0, Pk[0] = rk[0], Pk[1] = rk[1], Pk[2] = rk[2], mk && (bk.lastMovingAt = ek), null !== bk.particles && (!Mk || ek - bk.lastMovingAt > 500) && (bk.particles.stop(), bk.particles = null, Dk--), mk && Mk && null === bk.particles && Dk < 32 && (bk.particles = kk.createParticles(bk.cosmetic ? Nr : Gr, {
            pos: rk
          }), Dk++), null !== bk.particles && (bk.particles.moveTo(rk), bk.particles.setEmitRate(mk ? 12 : 0)), !mk && null === bk.particles && ek - Math.max(bk.lastMovingAt, bk.markedAt) > 2e3 && this.drops.delete(Sk)
        }
      }
      dispose() {
        for (const ek of this.drops.values()) {
          var kk;
          null === (kk = ek.particles) || void 0 === kk || kk.stop()
        }
        this.drops.clear()
      }
    }
    var eP = ik(189);
    const iP = eP.g.Qp * eP.g.playerEyeToHeightRatio;
    class DP {
      constructor(kk) {
        this.host = kk, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      BU(kk) {
        this.lava = kk, this.nextUpdateAt = 0
      }
      Px() {
        var kk;
        const ek = this.host.now();
        if (ek < this.nextUpdateAt) return;
        this.nextUpdateAt = ek + 250;
        const ik = this.host.playerPosition(),
          Dk = ik && this.findNearest([ik[0], ik[1] + iP, ik[2]]);
        if (!Dk || Dk.distance >= 40) return void this.stop();
        const fk = .5 * Math.min(1, (40 - Dk.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(fk) : this.loop = this.host.play("lavaFlow", fk, Dk.position, 40 + iP, 9, !0), null === (kk = this.loop) || void 0 === kk || kk.setPosition(Dk.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var kk;
        null === (kk = this.loop) || void 0 === kk || kk.stop(), this.loop = null
      }
      findNearest(kk) {
        let ek = -1,
          ik = 1 / 0;
        for (let Dk = 0; Dk < this.lava.length; Dk += 3) {
          const fk = this.lava[Dk] - kk[0],
            Sk = this.lava[Dk + 1] - kk[1],
            bk = this.lava[Dk + 2] - kk[2],
            rk = fk * fk + Sk * Sk + bk * bk;
          rk < ik && (ik = rk, ek = Dk)
        }
        return ek < 0 ? null : {
          position: [this.lava[ek], this.lava[ek + 1], this.lava[ek + 2]],
          distance: Math.sqrt(ik)
        }
      }
    }
    var fP = ik(1868),
      SP = ik(38228);
    const bP = {
      "Grey Portal": "Gray"
    };
    for (const xP of fk.xc) bP[`${xP} Portal`] = xP;
    const rP = Object.keys(bP),
      PP = Object.fromEntries(rP.map((kk => [kk, (0, fk.N)(fk.D[`${(0,fk.je)(bP[kk])}Team`])])));
    Object.fromEntries(rP.map((kk => [kk, fk.D[`${(0,fk.je)(bP[kk])}UiText`]])));
    class mP {
      constructor(kk, ek) {
        this.presentation = kk, this.portal = ek, this.unlocked = void 0
      }
      BU(kk) {
        const ek = !1 === this.unlocked && kk;
        this.unlocked = kk, this.Px();
        const {
          min: ik,
          max: Dk,
          unlockedBlock: fk
        } = this.portal;
        if (ek && this.presentation.hasChunk(...ik)) {
          const [kk, ek, Sk] = PP[fk];
          this.presentation.playParticles({
            pos1: [...ik],
            pos2: Dk.map((kk => kk + 1)),
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
              minColor: [kk, ek, Sk, 1],
              maxColor: [Math.min(255, kk + 55), Math.min(255, ek + 55), Math.min(255, Sk + 90), 1]
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
      Px() {
        var kk;
        const ek = this.unlocked ? this.portal.unlockedBlock : null !== (kk = this.portal.lockedBlock) && void 0 !== kk ? kk : "Light Gray Portal",
          {
            min: ik,
            max: Dk
          } = this.portal;
        for (let fk = ik[0]; fk <= Dk[0]; fk++)
          for (let kk = ik[1]; kk <= Dk[1]; kk++)
            for (let Sk = ik[2]; Sk <= Dk[2]; Sk++) this.presentation.hasChunk(fk, kk, Sk) && this.presentation.Fy(fk, kk, Sk) !== ek && this.presentation.RV(fk, kk, Sk, ek)
      }
    }
    const MP = {
        farming_1: {
          raises: kk => "NPC" === kk.type && "chef" === kk.variation,
          rise: .4
        },
        fishing_1: {
          raises: kk => "Draugr Warper" === kk.type,
          rise: .4
        }
      },
      KP = (kk, ek, ik, Sk) => {
        let {
          localPlayerId: bk
        } = Sk;
        const rk = new Cf({
          translate: (kk, ek) => (0, If.x)(cr.f.get().getCurrentLanguageCode(), kk, ek),
          translateWithIcons: (kk, ek) => (0, If.u)(cr.f.get().getCurrentLanguageCode(), kk, ek),
          setMenuOpen: kk => {
            kk ? (0, Ok.r)() : (0, Ok.d)()
          },
          dismissMenu: Ok.h,
          publishSkills: kk => {
            gk.j.tm(bi, kk, !0)
          },
          publishQuests: kk => {
            gk.j.tm(Mi, kk, !0)
          },
          publishQuestNotification: kk => {
            gk.j.tm(Ki, kk, !0)
          },
          publishDungeons: kk => {
            gk.j.tm(Ui, kk, !0)
          },
          publishCollections: kk => {
            gk.j.tm(ai, kk, !0)
          },
          publishMap: kk => {
            gk.j.tm(xk, kk, !0)
          },
          publishHud: kk => {
            gk.j.tm(yf, kk, !0)
          },
          publishPortalTransit: kk => {
            gk.j.tm(ti, kk, !0)
          },
          isLoadingScreenUp: () => sf.b.get("loadingOverlayVisible"),
          publishDailyReward: kk => {
            gk.j.tm(ci, kk, !0)
          },
          publishMailbox: kk => {
            gk.j.tm(gi, kk, !0)
          },
          publishQuestGraph: kk => {
            gk.j.tm(Ni, kk, !0)
          },
          publishForge: kk => {
            gk.j.tm(lD, kk, !0)
          },
          publishSmuggler: kk => {
            gk.j.tm(YD, kk, !0)
          },
          publishKeepersChair: kk => {
            gk.j.tm(uD, kk, !0)
          },
          publishReachLog: kk => {
            gk.j.tm(ID, kk, !0)
          },
          publishLampLight: kk => {
            gk.j.tm(aD, kk, !0)
          },
          publishMagmaward: kk => {
            gk.j.tm(tD, kk, !0)
          },
          publishGlowtide: kk => {
            gk.j.tm(BD, kk, !0)
          },
          publishGlowMeter: kk => {
            gk.j.tm(TD, kk, !0)
          },
          publishHushWait: kk => {
            gk.j.tm(ZD, kk, !0)
          },
          publishPassage: kk => {
            gk.j.tm(AD, kk, !0)
          },
          publishTideCharts: kk => {
            gk.j.tm(gD, kk, !0)
          },
          publishRegulars: kk => {
            gk.j.tm(ff, kk, !0)
          },
          publishHiddenWaters: kk => {
            gk.j.tm(mf, kk, !0)
          },
          publishDialogue: kk => {
            gk.j.tm(Kf, kk, !0)
          },
          publishAutographs: kk => {
            gk.j.tm(wf, kk, !0)
          },
          onDailyRewardStarted: kk => {
            Ik.playSound(bk, kk.day === Vk ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (kk, ek) => {
            Ik.playSound(bk, "exp_collect", .35, 1 + .6 * kk / (ek - 1)), gk.j.tm(Ti, kk === ek - 1)
          },
          onDailyRewardItemLanded: kk => {
            Ik.playSound(bk, "pickUp", .6, 1 + .15 * kk)
          },
          onMailboxStarted: () => {
            Ik.playSound(bk, "rpgMetalClick", .6, 1), Ik.playSound(bk, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Ik.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: or.g,
          requestTracking: kk => {
            Ik.sendCommand(`quests track ${kk}`)
          },
          requestDungeonEnter: (kk, ek) => {
            Ik.sendCommand(`dungeonEnter ${kk} ${ek}`)
          },
          requestQuestJump: kk => {
            Ik.sendCommand(`${Qk} jump ${kk}`)
          },
          requestQuestArrive: (kk, ek) => {
            const ik = `${Qk} arrive ${kk}`;
            Ik.sendCommand(ek ? `${ik} complete` : ik)
          },
          requestForge: kk => {
            let {
              blade: ek,
              guard: ik,
              handle: Dk
            } = kk;
            Ik.sendCommand(`forge ${ek} ${ik} ${Dk}`)
          },
          requestDialogue: () => {
            Ik.sendCommand("quests dialogue")
          },
          requestSmuggle: (kk, ek) => {
            Ik.sendCommand(`smuggle ${kk} ${ek}`)
          },
          requestKeepersChairAim: kk => {
            Ik.sendCommand(`keeperschair-aim ${kk}`)
          },
          requestReachLogOpen: () => {
            Ik.sendCommand("reachlog-open")
          },
          requestLampLight: kk => {
            Ik.sendCommand(`${kk}`)
          },
          requestTravel: kk => {
            Ik.sendCommand(`map travel ${kk.kind} ${kk.id} ${kk.requestId}`)
          }
        });
        let Pk, mk, Mk, Kk, nk, Uk, Hk, Yk, Lk, Ck, Ak, dk, Fk;
        const qk = new kP;
        let Ik, zk = null;
        const vk = MP[null !== ik && void 0 !== ik ? ik : ""],
          Wk = (kk, ek) => {
            null !== vk && void 0 !== vk && vk.raises(ek) && Ik.setNametagOffset(kk, vk.rise)
          },
          Bk = new Br({
            getLocalHookPosition: () => {
              const kk = ck.getLocalHook();
              return null !== kk && Ik.checkValid(kk) ? Ik.vy(kk) : null
            },
            playParticles: kk => {
              Ik.playParticleEffect(kk)
            },
            vibrate: kk => {
              Gk.e.play("fishBite", kk)
            },
            now: () => performance.now()
          }),
          ck = new ar({
            getLineOwner: kk => Ik.checkValid(kk) ? Ik.getLineOwner(kk) : null,
            isLocalPlayer: kk => Ik.isLocalPlayer(kk),
            getHookPosition: kk => {
              const [ek, , ik] = Ik.vy(kk);
              return [ek, ik]
            },
            isHushWaiting: () => {
              var kk;
              return "waiting" === (null === (kk = rk.hushWait.getSnapshot()) || void 0 === kk ? void 0 : kk.phase)
            },
            onCastLanded: (kk, ek) => {
              rk.tideCharts.castLanded(kk, ek)
            },
            onLocalHookSettled: () => {
              Bk.onLocalHookSettled()
            },
            onLocalWaitEnded: kk => {
              Bk.onLocalWaitEnded(kk)
            },
            now: () => performance.now()
          }),
          Nk = new DP({
            now: () => performance.now(),
            playerPosition: () => Ik.checkValid(bk) ? Ik.vy(bk) : null,
            play: (kk, ek, ik, Dk, fk, Sk) => Ik.playSound(bk, kk, ek, 1, {
              ze: ik,
              maxHearDist: Dk,
              refDistance: fk
            }, Sk)
          }),
          Rk = new Map;
        let Jk;
        return {
          onCreate: kk => {
            if (Ik = kk, zk = new SP.SkyblockEntityFacing(kk, vk ? Wk : null), rk.portalTransit.resumeArrival(null !== ik && void 0 !== ik ? ik : null), (null !== ik && void 0 !== ik ? ik : Dk) === Dk) {
              let kk = -1 / 0;
              Jk = gk.j.subscribe("toggleMenu", (ek => {
                const ik = performance.now();
                "inventory|Workbench" !== ek || "cross_to_hub" !== rk.quests.getTrackedQuestId() || ik - kk < 1e4 || (kk = ik, Ik.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Dk, fk] of Object.entries(null !== (ek = Ek[null !== ik && void 0 !== ik ? ik : ""]) && void 0 !== ek ? ek : {})) {
              var ek;
              Rk.set(Dk, new mP({
                hasChunk: (ek, ik, Dk) => kk.isBlockInLoadedChunk(ek, ik, Dk),
                Fy: (ek, ik, Dk) => kk.blockIdToBlockName(kk.getBlockId(ek, ik, Dk)),
                RV: (ek, ik, Dk, fk) => {
                  kk.RV(ek, ik, Dk, fk)
                },
                playParticles: ek => {
                  kk.playParticleEffect(ek)
                }
              }, fk))
            }
            Fk = (0, fP.f)((kk => function(kk) {
              return Object.hasOwn(Te, kk) || kk.startsWith("npc_")
            }(kk) ? Ze(kk) : null)), rk.resolveItemName = (ek, ik) => {
              const Dk = kk.getItemStat(bk, ek, "displayName");
              return Dk && "object" === typeof Dk && "translationKey" in Dk ? ik(Dk.translationKey, (0, If.r)(Dk.params, Tr.c.shown)) : "string" === typeof Dk ? ik(Dk) : ek
            }, rk.quests.notifications.onShown = kk => {
              "quest" === kk ? Ik.playSound(bk, "magicAccent1", 1, 1) : "skillLevel" === kk ? Ik.playSound(bk, "magicAccent1", 1, .6) : "landmark" === kk ? Ik.playSound(bk, "trumpetFlare", 1, .6) : "npcNote" === kk ? Ik.playSound(bk, "magicAccent2", .8, 1.1) : "started" === kk ? Ik.playSound(bk, (0, vr.g)("bigDrumSwish"), 1, 1) : Ik.playSound(bk, (0, vr.g)("rpgHandleSmallLeather"), 1, 1)
            }, rk.forge.onPartSelected = () => {
              Ik.playSound(bk, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, rk.forge.onOpened = () => {
              ! function(kk) {
                kk.preloadSounds([(0, vr.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(kk)
            }, rk.forge.onForgeStarted = (ek, ik, Dk) => hr(kk, bk, ek, ik, Dk), rk.smuggler.onBought = () => {
              Ik.playSound(bk, (0, vr.g)("rpgHandleSmallLeather"), 1, 1), Ik.playSound(bk, "chestOpen", .6, 1)
            }, rk.compass.register(new wk(rk.map, !0)), rk.compass.register(new wk(rk.map, !1)), rk.compass.register(new pk(rk.map)), rk.compass.register(new yk((() => rk.quests.getSnapshot().compassTarget)));
            for (const ik of ["enemy", "npc"]) rk.compass.register(new lk(rk.map, ik, (ek => kk.checkValid(ek) ? kk.vy(ek) : void 0), (ek => kk.isAlive(ek))))
          },
          onAfterRender: (kk, ek) => {
            const ik = Ik.checkValid(bk) ? Ik.vy(bk) : null;
            rk.navigation.afterRender(ik, performance.now(), ek), rk.glowtide.afterRender(ik, ek.cameraHeading), rk.tideCharts.afterRender(ik), ck.afterRender()
          },
          onClose: () => {
            var kk, ek, ik, Dk, fk, Sk, bk, xk, Uk, wk, lk, pk, yk, jk, sk;
            Jk && gk.j.unsubscribe(Jk), null === (kk = Fk) || void 0 === kk || kk(), qk.dispose(), Nk.dispose(), null === (ek = zk) || void 0 === ek || ek.dispose(), ck.dispose(), rk.dispose(), null === (ik = Pk) || void 0 === ik || ik(), null === (Dk = mk) || void 0 === Dk || Dk(), null === (fk = Mk) || void 0 === fk || fk(), null === (Sk = Kk) || void 0 === Sk || Sk(), null === (bk = nk) || void 0 === bk || bk(), null === (xk = Hk) || void 0 === xk || xk(), null === (Uk = undefined) || void 0 === Uk || Uk(), null === (wk = Yk) || void 0 === wk || wk(), null === (lk = Lk) || void 0 === lk || lk(), null === (pk = Ck) || void 0 === pk || pk(), null === (yk = Ak) || void 0 === yk || yk(), null === (jk = undefined) || void 0 === jk || jk(), null === (sk = dk) || void 0 === sk || sk()
          },
          onPlayerChangeBlock: (kk, ek, Dk, Sk, Pk, mk) => {
            if (kk === bk && "Air" === mk) {
              const kk = Ik.getClientOption(bk, "creative");
              rk.skills.predictBlock([ek, Dk, Sk], Pk, kk);
              const mk = function(kk, ek) {
                  if ("hub" === ek || "farming_1" === ek || "mining_1" === ek) return !tk.has(kk) || "hub" !== ek && "mining_1" !== ek ? Object.hasOwn(ak, kk) ? ak[kk] : void 0 : hk
                }(Pk, ik),
                Mk = ("hub" === ik || "mining_1" === ik) && (fk.kd.some((kk => kk === Pk)) || Object.hasOwn(Xk, Pk) || "mining_1" === ik && "Block of Coal" === Pk);
              kk || void 0 === mk && !Mk || Ik.RV(ek, Dk, Sk, null !== mk && void 0 !== mk ? mk : hk)
            }
          },
          onPlayerAttackEntity: (kk, ek) => {
            if (kk !== bk || "Player" !== Ik.getEntityType(ek)) return;
            const [ik, Dk, fk] = Ik.vy(ek);
            Ik.burstParticlePreset("critical", [ik, Dk + 1, fk], 10)
          },
          onChangeBlockFail: kk => {
            for (const {
                CD: ek
              }
              of kk) rk.skills.rejectBlock(ek)
          },
          onReceivedMessageFromServer: (kk, ek) => {
            if ("skyblockGatedPortal" === kk) {
              var ik;
              const [kk, Dk] = ek;
              return void(null === (ik = Rk.get(kk)) || void 0 === ik || ik.BU(Dk))
            }
            if ("skyblockDailyReward" === kk) return void rk.dailyReward.BU(ek);
            if ("skyblockMailbox" === kk) return void rk.mailbox.BU(ek);
            if ("skyblockPortalTransit" === kk) return void rk.portalTransit.BU(ek);
            if ("skyblockLoot" === kk) return void qk.BU(Ik, ek);
            if ("skyblockLava" === kk) return void Nk.BU(ek);
            if ("skyblockForge" === kk) return void rk.forge.BU(ek);
            if ("skyblockMagmaward" === kk) return void rk.magmaward.BU(ek);
            if ("skyblockGlowtide" === kk) return void rk.glowtide.BU(ek);
            if ("skyblockGlowMeter" === kk) return void rk.glowMeter.BU(ek);
            if ("skyblockHushWait" === kk) return void rk.hushWait.BU(ek);
            if ("skyblockPassage" === kk) {
              const kk = ek;
              return rk.passage.BU(kk), rk.reachLog.receivePassagePhase(kk.passagePhase), Ck ??= (0, jk.v)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: rk.passage.show
              }), void rk.keepersChair.receivePassage({
                keepersChairPassagePhase: kk.passagePhase,
                keepersChairPassageNextPhase: kk.passageNextPhase,
                keepersChairPassageTurnsInMs: kk.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === kk) {
              const kk = ek;
              return rk.tideCharts.BU(kk), void(kk.tideCharts.length > 0 && (Ak ??= (0, jk.v)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: rk.tideCharts.show
              })))
            }
            if (kk === Tk.D) {
              var Dk;
              const {
                hookId: kk,
                waiting: ik
              } = ek;
              return void ck.hookWaiting(kk, null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.remainingMs) && void 0 !== Dk ? Dk : null)
            }
            if ("skyblockBiteTell" === kk) return void Bk.receiveTell(ek);
            if ("skyblockSmuggler" === kk) return void rk.smuggler.BU(ek);
            if ("skyblockKeepersChair" === kk) return rk.keepersChair.BU(ek), void rk.lampLight.setAtChair(rk.keepersChair.isAtChair());
            if ("skyblockLampLight" === kk) {
              const kk = ek;
              var fk;
              if (rk.lampLight.BU(kk), kk.lampLightReleasing) Lk ??= (0, jk.v)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  rk.lampLight.setRelease(!1)
                }
              });
              else null === (fk = Lk) || void 0 === fk || fk(), Lk = void 0;
              return
            }
            if ("skyblockRegulars" === kk) return void rk.regulars.BU(ek);
            if ("skyblockHiddenWaters" === kk) return void rk.hiddenWaters.BU(ek);
            if ("skyblockReachLog" === kk) return rk.reachLog.BU(ek), void(Yk ??= (0, jk.v)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: QD
              },
              onClick: rk.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === kk) {
              for (const [kk, ik, Dk, fk] of ek) Ik.RV(kk, ik, Dk, fk);
              return
            }
            if ("skyblockHud" === kk) rk.receiveHud(ek);
            else if ("skyblockMap" === kk) rk.map.BU(ek);
            else if (kk === Zk.h) rk.skills.BU(ek);
            else if (kk === uk && "dialogue" === ek.kind) rk.dialogue.BU(ek);
            else if (kk === uk) rk.quests.BU(ek);
            else if ("skyblockDungeons" === kk) rk.dungeons.BU(ek);
            else if ("sbCollections" === kk) rk.collections.BU(ek);
            else if ("skyblockQuestGraph" === kk) rk.questGraph.BU(ek);
            else {
              if ("skyblockAutographs" !== kk) return;
              rk.autographs.BU(ek)
            }
            if (!mk && rk.map.getSnapshot().enabled) {
              const kk = (0, jk.v)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: rk.map.show
                }),
                ek = (0, Ok.v)(rk.map.show);
              mk = () => {
                kk(), ek()
              }
            }!Mk && rk.skills.getSnapshot().enabled && (Mk = (0, jk.v)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: rk.skills.show
            })), !Hk && rk.collections.getSnapshot().enabled && (Hk = (0, jk.v)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: rk.collections.show
            })), !Kk && rk.quests.getSnapshot().enabled && (Kk = (0, jk.v)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: rk.quests.show
            })), !dk && rk.autographs.getSnapshot().enabled && (dk = (0, jk.v)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: rk.autographs.show
            }));
            const Sk = rk.dungeons.getSnapshot().enabled;
            var bk;
            (Mk || Kk || Sk) && Uk !== Sk && (Uk = Sk, null === (bk = nk) || void 0 === bk || bk(), nk = (0, jk.v)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Qe
              },
              disabled: !Sk,
              panel: !0,
              onClick: rk.dungeons.show
            }));
            Pk || (Pk = (0, Ok.z)((0, sk.createElement)(zr, {
              controller: rk
            }), {
              content: (0, sk.createElement)(Qr, {
                controller: rk
              }),
              onClose: rk.close
            }))
          },
          Px: () => {
            var kk;
            for (const ek of Rk.values()) ek.Px();
            qk.Px(Ik), Nk.Px(), null === (kk = zk) || void 0 === kk || kk.Px(), rk.skills.Px(), rk.quests.Px(), rk.dailyReward.Px(), rk.mailbox.Px(), rk.map.Px()
          }
        }
      }
  },
  35923: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      h: () => Dk
    });
    const Dk = "skyblockSkills",
      fk = "skills_test_gym"
  },
  33788: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      e: () => bk
    });
    const Dk = [{
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

    function fk(kk) {
      let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const ek = kk < 0 ? "-" : "",
            ik = Math.abs(kk);
          return ik >= 10 ? `${ek}${ik.toFixed(1).replace(/\.0$/,"")}` : `${ek}${ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ek = BigInt(Math.floor(kk))
      } else ek = kk;
      const fk = ek < 0n ? -ek : ek,
        Sk = ek < 0n ? "-" : "",
        bk = fk.toString();
      if (bk.length <= ik) return `${Sk}${bk}`;
      const rk = 3 * Math.floor((bk.length - 1) / 3);
      if (rk < 3) return `${Sk}${bk}`;
      if (rk > 3 * Dk.length) {
        const kk = bk[0],
          ek = bk.slice(1, 3).replace(/0+$/, "");
        return `${Sk}${ek?`${kk}.${ek}`:kk}e${bk.length-1}`
      }
      const {
        threshold: Pk,
        suffix: mk
      } = Dk[Dk.length - rk / 3], Mk = fk / Pk, Kk = Number(1000n * (fk % Pk) / Pk), xk = Number(Mk) + Kk / 1e3;
      let nk;
      return nk = xk >= 100 ? Math.floor(xk).toString() : xk >= 10 ? xk.toFixed(1).replace(/\.0$/, "") : xk.toFixed(2).replace(/\.?0+$/, ""), `${Sk}${nk}${mk}`
    }
    const Sk = Dk.map((kk => {
      let {
        threshold: ek,
        suffix: ik
      } = kk;
      return {
        threshold: Number(ek),
        suffix: ik
      }
    })).filter((kk => {
      let {
        threshold: ek
      } = kk;
      return Number.isFinite(ek)
    }));

    function bk(kk) {
      const ek = Math.abs(kk),
        ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Dk,
          suffix: fk
        }
        of Sk)
        if (ek >= Dk) {
          const kk = ek / Dk;
          if (kk >= 1e3) return `${ik}${ek.toExponential(2).replace("e+","e")}`;
          let Sk;
          return Sk = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${Sk}${fk}`
        } return `${ik}${ek}`
    }
  },
  38134: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38143: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38152: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38161: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38165: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38170: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38176: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38184: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38192: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38200: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38203: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38212: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38215: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38219: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18165: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20189: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22474: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24087: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25764: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25784: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38120: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);